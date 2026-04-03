import React, {useState, useEffect} from "react";
import { 
  Main, 
  Expertise, 
  Certificates, 
  Project, 
  Contact, 
  Navigation, 
  Footer, 
  FadeIn 
} from "./components";
// @ts-ignore
import './index.scss'; // Corregido: antes decía ./assets/styles/App.scss

function App() {
    const [mode, setMode] = useState<string>('dark');

    const handleModeChange = () => {
        setMode(mode === 'dark' ? 'light' : 'dark');
    }

    useEffect(() => {
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
    }, []);

    return (
    <div className={`main-container ${mode === 'dark' ? 'dark-mode' : 'light-mode'}`}>
        <Navigation parentToChild={{mode}} modeChange={handleModeChange}/>
        <FadeIn>
            <Main />
            <Expertise />
            <Certificates />
            <Project />
            <Contact />
        </FadeIn>
        <Footer />
    </div>
    );
}

export default App;