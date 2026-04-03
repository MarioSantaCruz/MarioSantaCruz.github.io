import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
// @ts-ignore
import 'react-vertical-timeline-component/style.min.css';
// @ts-ignore
import '../assets/styles/Timeline.scss'

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <h1>Historial y Experiencia</h1>
        <VerticalTimeline>
          
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="2024 - Presente"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Ingeniería de Sistemas y Computación</h3>
            <h4 className="vertical-timeline-element-subtitle">USAT (Universidad Católica Santo Toribio de Mogrovejo)</h4>
            <p>
              Estudiante del 6to ciclo. Cursos destacados: Desarrollo de Aplicaciones de Escritorio, Inteligencia Artificial, Investigación de Operaciones.
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Feb 2024 - Mar 2025"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Cajero</h3>
            <h4 className="vertical-timeline-element-subtitle">Operaciones Brixiady</h4>
            <p>
              Manejo de caja, atención directa al cliente y resolución de problemas. Experiencia en comunicación efectiva y trabajo bajo presión.
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Jun 2022 - Feb 2023"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Atención al Cliente</h3>
            <h4 className="vertical-timeline-element-subtitle">Konecta</h4>
            <p>
              Soporte al cliente y manejo de herramientas de comunicación digital. Desarrollo de habilidades interpersonales y resolución de consultas.
            </p>
          </VerticalTimelineElement>

        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;