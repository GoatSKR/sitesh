import { BrowserRouter } from 'react-router-dom';
import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech } from './components';
import AnimatedCursor from './components/AnimatedCursor';
import MatrixBackground from './components/MatrixBackground';

function App() {
  return (
    <BrowserRouter>
      <AnimatedCursor />
      <div className='relative z-0 bg-primary'>
        <MatrixBackground />

        <div>
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        {/* <Works /> */}
        <Feedbacks />
        <div className='relative z-0'>
          <Contact />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;