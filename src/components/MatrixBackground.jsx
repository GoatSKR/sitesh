import { useEffect, useRef } from "react";

const CHARS = "01ABCDEFGHIJKLMNOPQRSTUVWXYZ$#@%&".split("");
const NAMES = ["PRAKIRTI", "KIRTISHREE", "GITARANI"];
const MAX_NAME_LEN = Math.max(...NAMES.map((n) => n.length));

const FONT_SIZE = 14;
const FRAME_MS = 35;
const BG = "5, 8, 22"; // matches your #050816 primary color

const MATRIX_COLOR = "#915EFF"; // the rain
const NAME_COLOR = "#0F0"; // the names
const BASE_FONT = `${FONT_SIZE}px monospace`;
const NAME_FONT = `bold ${FONT_SIZE}px monospace`;

// roughly how many names fall per second across the whole screen
// 0.3 = about one name every 3 seconds
const NAMES_PER_SECOND = 0.3;

const MatrixBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let drops = [];
    let words = []; // per column: null, or { text, i } while a name is falling
    let rows = 0;
    let nameChance = 0;
    let rafId;
    let last = 0;

    const init = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      const columns = Math.floor(canvas.width / FONT_SIZE);
      drops = Array.from({ length: columns }, () => Math.random() * -100);
      words = new Array(columns).fill(null);
      rows = Math.floor(canvas.height / FONT_SIZE);

      // per-column, per-frame chance of starting a name, scaled to screen size
      // so phones and big monitors both get about NAMES_PER_SECOND
      const stepsPerSecond = 1000 / FRAME_MS;
      const eligible = Math.max(0.1, (rows - MAX_NAME_LEN) / (rows + 40));
      nameChance = Math.min(
        1,
        NAMES_PER_SECOND / (columns * stepsPerSecond * eligible)
      );

      ctx.fillStyle = `rgb(${BG})`;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    };

    const draw = (time) => {
      rafId = requestAnimationFrame(draw);
      if (time - last < FRAME_MS) return;
      last = time;

      ctx.fillStyle = `rgba(${BG}, 0.08)`;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = MATRIX_COLOR;
      ctx.font = BASE_FONT;

      for (let i = 0; i < drops.length; i++) {
        // start a name at a random height: any column whose head is on screen
        // with enough room below for the whole name can begin one right here
        if (
          !words[i] &&
          drops[i] > 0 &&
          drops[i] + MAX_NAME_LEN < rows &&
          Math.random() < nameChance
        ) {
          words[i] = {
            text: NAMES[Math.floor(Math.random() * NAMES.length)],
            i: 0,
          };
        }

        const word = words[i];
        const x = i * FONT_SIZE;
        const y = drops[i] * FONT_SIZE;

        if (word) {
          // next letter of the name, highlighted
          ctx.fillStyle = NAME_COLOR;
          ctx.font = NAME_FONT;
          ctx.fillText(word.text[word.i], x, y);
          ctx.fillStyle = MATRIX_COLOR;
          ctx.font = BASE_FONT;

          word.i++;
          if (word.i >= word.text.length) words[i] = null;
        } else {
          ctx.fillText(CHARS[Math.floor(Math.random() * CHARS.length)], x, y);
        }

        if (y > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    };

    init();
    rafId = requestAnimationFrame(draw);
    window.addEventListener("resize", init);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("resize", init);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className='fixed inset-0 w-full h-full z-[-1] pointer-events-none opacity-40'
    />
  );
};

export default MatrixBackground;