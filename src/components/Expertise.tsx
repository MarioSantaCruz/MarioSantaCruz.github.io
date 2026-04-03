import React, { useRef, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    faServer, 
    faGamepad, 
    faUsersGear,
    faChevronLeft, 
    faChevronRight 
} from '@fortawesome/free-solid-svg-icons'; 
import { faReact, faPython } from '@fortawesome/free-brands-svg-icons';
import Chip from '@mui/material/Chip';
// @ts-ignore
import '../assets/styles/Expertise.scss'; 

const skills = [
    {
        title: "Desarrollo Frontend & UX",
        icon: faReact,
        description: "Interfaces modernas con React y TypeScript. Enfoque en accesibilidad, comunicación digital y fundamentos de UX.",
        labels: ["React", "TypeScript", "HTML5", "CSS3", "SASS", "UX Design"]
    },
    {
        title: "Visión Computacional",
        icon: faPython,
        description: "Sistemas de seguimiento de manos en tiempo real con OpenCV y MediaPipe.",
        labels: ["Python", "OpenCV", "MediaPipe", "AI Basics"]
    },
    {
        title: "Infraestructura & ERP",
        icon: faServer,
        description: "Infraestructura como código con Terraform e integración de sistemas empresariales SAP ERP.",
        labels: ["Terraform", "SAP ERP", "Git", "GitHub"]
    },
    {
        title: "Desarrollo de Videojuegos",
        icon: faGamepad,
        description: "Diseño de lógicas de juego 2D en Godot, análisis de físicas y mecánicas.",
        labels: ["Godot", "GDScript", "Game Design"]
    },
    {
        title: "Gestión & Agilidad",
        icon: faUsersGear,
        description: "Gestión de proyectos bajo metodologías Ágiles y Lean, priorizando resultados y marca personal.",
        labels: ["Agile", "Lean", "Liderazgo", "Soft Skills"]
    }
];

const displaySkills = [...skills, ...skills, ...skills];

function Expertise() {
    const sliderRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (sliderRef.current) {
            const singleSetWidth = sliderRef.current.scrollWidth / 3;
            sliderRef.current.scrollLeft = singleSetWidth;
        }
    }, []);

    const handleScroll = () => {
        if (!sliderRef.current) return;
        const { scrollLeft, scrollWidth } = sliderRef.current;
        const singleSetWidth = scrollWidth / 3;

        if (scrollLeft < singleSetWidth * 0.5) {
            sliderRef.current.scrollLeft = scrollLeft + singleSetWidth;
        } else if (scrollLeft > singleSetWidth * 1.5) {
            sliderRef.current.scrollLeft = scrollLeft - singleSetWidth;
        }
    };

    const scrollSlider = (direction: 'left' | 'right') => {
        if (sliderRef.current) {
            const scrollAmount = 310;
            sliderRef.current.scrollBy({ 
                left: direction === 'left' ? -scrollAmount : scrollAmount, 
                behavior: 'smooth' 
            });
        }
    };

    return (
    <div className="expertise-wrapper" id="expertise">
        <div className="skills-container">
            <h1>Habilidades y Conocimientos</h1>
            <div className="slider-outer-container">
                <button className="slider-btn left" onClick={() => scrollSlider('left')}>
                    <FontAwesomeIcon icon={faChevronLeft} />
                </button>
                <div className="skills-slider" ref={sliderRef} onScroll={handleScroll}>
                    {displaySkills.map((skill, index) => (
                        <div key={index} className="skill-card">
                            <FontAwesomeIcon icon={skill.icon} size="3x"/>
                            <h3>{skill.title}</h3>
                            <p>{skill.description}</p>
                            <div className="flex-chips">
                                {skill.labels.map((label, lIndex) => (
                                    <Chip key={lIndex} className='chip' label={label} />
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
                <button className="slider-btn right" onClick={() => scrollSlider('right')}>
                    <FontAwesomeIcon icon={faChevronRight} />
                </button>
            </div>
        </div>
    </div>
    );
}

export default Expertise;