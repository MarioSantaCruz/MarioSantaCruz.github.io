import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    faCertificate, 
    faAward, 
    faLaptopCode, 
    faMicrochip, 
    faGlobe,
    faServer,
    faUsers,
    faMagnifyingGlass,
    faLightbulb
} from '@fortawesome/free-solid-svg-icons';
// @ts-ignore
import '../assets/styles/Certificates.scss';

const certs = [
    {
        title: "Creación de Infraestructura con Terraform",
        provider: "USAT",
        year: "2022",
        icon: faMicrochip,
        size: "large"
    },
    {
        title: "Integrando SAP ERP con otros Sistemas",
        provider: "USAT",
        year: "2022",
        icon: faServer,
        size: "large"
    },
    {
        title: "Gestión de Proyectos con Metodologías Ágiles",
        provider: "Fundación Telefónica",
        year: "2025",
        icon: faUsers,
        size: "medium"
    },
    {
        title: "Fundamentos de UX",
        provider: "Fundación Telefónica",
        year: "2025",
        icon: faLightbulb,
        size: "medium"
    },
    {
        title: "Tácticas de Negociación Efectiva",
        provider: "Fundación Telefónica",
        year: "2025",
        icon: faAward,
        size: "small"
    },
    {
        title: "Comunicación y Colaboración Era Digital",
        provider: "Fundación Telefónica",
        year: "2025",
        icon: faGlobe,
        size: "small"
    },
    {
        title: "Office Básico e Intermedio",
        provider: "Fundación Telefónica",
        year: "2025",
        icon: faLaptopCode,
        size: "medium"
    },
    {
        title: "Recursos para la Investigación (Turnitin)",
        provider: "UCV",
        year: "2021",
        icon: faMagnifyingGlass,
        size: "small"
    },
    {
        title: "Escuela de Líderes",
        provider: "UCV",
        year: "2020",
        icon: faCertificate,
        size: "small"
    },
    {
        title: "Potencia tu Marca Personal en LinkedIn",
        provider: "UCV",
        year: "2021",
        icon: faAward,
        size: "small"
    },
    {
        title: "Herramientas de Comunicación Interna",
        provider: "Becas Romero / UPC",
        year: "2025",
        icon: faUsers,
        size: "small"
    }
];

function Certificates() {
    return (
        <div className="container" id="certificates">
            <div className="certificates-container">
                <h1>Certificaciones y Diplomas</h1>
                <div className="bento-grid">
                    {certs.map((cert, index) => (
                        <div key={index} className={`cert-card ${cert.size}`}>
                            <div className="cert-content">
                                <FontAwesomeIcon icon={cert.icon} className="cert-icon" />
                                <div className="cert-text">
                                    <h3>{cert.title}</h3>
                                    <p>{cert.provider} • {cert.year}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Certificates;