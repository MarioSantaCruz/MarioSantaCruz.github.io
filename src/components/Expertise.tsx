import React, { useRef, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faPython } from '@fortawesome/free-brands-svg-icons';
import { faServer, faUsers, faGamepad, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import Chip from '@mui/material/Chip';
// @ts-ignore
import '../assets/styles/Expertise.scss';

const skills = [
    {
        title: "Desarrollo Frontend & UX",
        icon: faReact,
        description: "Construcción de interfaces modernas y responsivas utilizando React.js y TypeScript. Enfoque en la experiencia de usuario y diseño limpio.",
        labels: ["React", "TypeScript", "HTML5", "CSS3", "SASS"]
    },
    {
        title: "Visión Computacional",
        icon: faPython,
        description: "Implementación de modelos de detección y seguimiento en tiempo real con Python. Experiencia en procesamiento de imágenes y video.",
        labels: ["Python", "OpenCV", "MediaPipe", "NumPy"]
    },
    {
        title: "Infraestructura & ERP",
        icon: faServer,
        description: "Configuración de servicios en la nube y despliegue automatizado. Conocimientos en integración de sistemas empresariales y flujos de datos.",
        labels: ["Terraform", "SAP ERP", "AWS", "Docker"]
    },
    {
        title: "Desarrollo de Videojuegos",
        icon: faGamepad,
        description: "Diseño y programación de mecánicas 2D. Aplicación de lógicas físicas y sistemas de control en motores de videojuegos.",
        labels: ["Godot", "GDScript", "Game Design", "Physics"]
    },
    {
        title: "Gestión & Agilidad",
        icon: faUsers,
        description: "Coordinación de equipos y proyectos bajo marcos de trabajo ágiles. Optimización de procesos y comunicación efectiva en entornos digitales.",
        labels: ["Agile", "Scrum", "Lean", "Project Management"]
    }
];

const infiniteSkills = [...skills, ...skills, ...skills];

function Expertise() {
    const scrollRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (scrollRef.current) {
            const setWidth = scrollRef.current.scrollWidth / 3;
            scrollRef.current.scrollLeft = setWidth;
        }
    }, []);

    const handleScroll = () => {
        if (scrollRef.current) {
            const { scrollLeft, scrollWidth } = scrollRef.current;
            const setWidth = scrollWidth / 3;

            if (scrollLeft <= 0) {
                scrollRef.current.scrollTo({ left: setWidth, behavior: 'instant' as any });
            } else if (scrollLeft >= setWidth * 2) {
                scrollRef.current.scrollTo({ left: setWidth, behavior: 'instant' as any });
            }
        }
    };

    const scroll = (direction: 'left' | 'right') => {
        if (scrollRef.current) {
            const { scrollLeft } = scrollRef.current;
            const scrollAmount = 350;
            const target = direction === 'left' ? scrollLeft - scrollAmount : scrollLeft + scrollAmount;
            scrollRef.current.scrollTo({ left: target, behavior: 'smooth' });
        }
    };

    return (
        <div className="container" id="expertise">
            <div className="skills-container">
                <h1>Habilidades y Conocimientos</h1>
                <div className="carousel-wrapper">
                    <button className="scroll-button left" onClick={() => scroll('left')}>
                        <FontAwesomeIcon icon={faChevronLeft} />
                    </button>
                    
                    <div className="skills-carousel" ref={scrollRef} onScroll={handleScroll}>
                        {infiniteSkills.map((skill, index) => (
                            <div key={index} className="skill-card">
                                <FontAwesomeIcon icon={skill.icon} size="3x" className="skill-icon" />
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

                    <button className="scroll-button right" onClick={() => scroll('right')}>
                        <FontAwesomeIcon icon={faChevronRight} />
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Expertise;