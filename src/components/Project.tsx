import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGamepad, faHandPointer } from '@fortawesome/free-solid-svg-icons';
// @ts-ignore
import '../assets/styles/Project.scss';

function Project() {
    return (
        <div className="projects-container" id="projects">
            <h1>Proyectos Personales</h1>
            <div className="projects-grid">
                
                {/* Proyecto 1 */}
                <div className="project-card">
                    <div className="project-image-wrapper placeholder-bg">
                        <FontAwesomeIcon icon={faHandPointer} size="3x" className="placeholder-icon" />
                    </div>
                    <div className="project-info">
                        <h2>Sistema de Seguimiento de Manos (Hand Tracking)</h2>
                        <p>Desarrollo de un programa de visión computacional utilizando Python, MediaPipe y OpenCV. Aún en desarrollo.</p>
                    </div>
                </div>

                {/* Proyecto 2 */}
                <div className="project-card">
                    <div className="project-image-wrapper placeholder-bg">
                        <FontAwesomeIcon icon={faGamepad} size="3x" className="placeholder-icon" />
                    </div>
                    <div className="project-info">
                        <h2>Videojuego 2D</h2>
                        <p>Creación de un videojuego utilizando el motor Godot. En desarrollo.</p>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Project;