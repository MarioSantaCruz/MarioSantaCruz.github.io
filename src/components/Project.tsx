import React from "react";
// @ts-ignore
import '../assets/styles/Project.scss';

function Project() {
    return (
        <div className="projects-container" id="projects">
            <h1>Proyectos Personales</h1>
            <div className="projects-grid">
                
                <div className="project">
                    <a href="https://github.com/MarioSantaCruz" target="_blank" rel="noreferrer">
                        <img src="https://via.placeholder.com/600x400" className="zoom" alt="Seguimiento de manos con Python" width="100%" />
                    </a>
                    <a href="https://github.com/MarioSantaCruz" target="_blank" rel="noreferrer">
                        <h2>Sistema de Seguimiento de Manos (Hand Tracking)</h2>
                    </a>
                    <p>Desarrollo de un programa de visión computacional utilizando Python, MediaPipe y OpenCV. Aún en desarrollo.</p>
                </div>

                <div className="project">
                    <a href="https://github.com/MarioSantaCruz" target="_blank" rel="noreferrer">
                        <img src="https://via.placeholder.com/600x400" className="zoom" alt="Desarrollo de videojuego en Godot" width="100%" />
                    </a>
                    <a href="https://github.com/MarioSantaCruz" target="_blank" rel="noreferrer">
                        <h2>Videojuego 2D</h2>
                    </a>
                    <p>Creación de un videojuego utilizando el motor Godot. En desarrollo.</p>
                </div>

            </div>
        </div>
    );
}

export default Project;