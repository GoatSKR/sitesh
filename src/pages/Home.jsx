import AnimatedCursor from "../components/AnimatedCursor";

import Header from "../components/Header";
import Hero from "../components/Hero";
import SocialIcons from "../components/SocialIcons";
import ParticleBackground from "../components/Particle";
export default function Home() {
    return (
        <>
            <ParticleBackground />
            <AnimatedCursor />
            
            <Header />
            <Hero />
            <SocialIcons />
        </>
    )
}