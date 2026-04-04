import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    faAward, faLaptopCode, faMicrochip, faGlobe, faServer, 
    faUsers, faMagnifyingGlass, faLightbulb, faExternalLinkAlt, 
    faUniversity, faHandshake, faHeadset, faCommentDots, 
    faUserTie, faSync, faFileExcel
} from '@fortawesome/free-solid-svg-icons';

// --- IMPORTACIÓN DE IMÁGENES (Usando tus nombres numéricos) ---
// @ts-ignore
import img1 from '../assets/images/certs/1.jpg';
// @ts-ignore
import img2 from '../assets/images/certs/2.jpg';
// @ts-ignore
import img3 from '../assets/images/certs/3.jpg';
// @ts-ignore
import img4 from '../assets/images/certs/4.jpg';
// @ts-ignore
import img5 from '../assets/images/certs/5.jpg';
// @ts-ignore
import img6 from '../assets/images/certs/6.jpg';
// @ts-ignore
import img7 from '../assets/images/certs/7.jpg';
// @ts-ignore
import img8 from '../assets/images/certs/8.jpg';
// @ts-ignore
import img9 from '../assets/images/certs/9.jpg';
// @ts-ignore
import img10 from '../assets/images/certs/10.jpg';
// @ts-ignore
import img11 from '../assets/images/certs/11.jpg';
// @ts-ignore
import img12 from '../assets/images/certs/12.jpg';
// @ts-ignore
import img13 from '../assets/images/certs/13.jpg';
// @ts-ignore
import img14 from '../assets/images/certs/14.jpg';

// @ts-ignore
import '../assets/styles/Certificates.scss';

const certs = [
    {
        title: "Infraestructura con Terraform",
        provider: "USAT",
        year: "2022",
        icon: faMicrochip,
        size: "large",
        image: img4,
        url: "https://drive.google.com/file/d/1mxEag5T3XXXDPOHbDHYYg18elYDtov3s/view?usp=sharing"
    },
    {
        title: "Integración SAP ERP",
        provider: "USAT",
        year: "2022",
        icon: faServer,
        size: "large",
        image: img9,
        url: "https://drive.google.com/file/d/15bOW3kYo_DYlZHLARGZGBEJT2DNu9823/view?usp=sharing"
    },
    {
        title: "Metodologías Ágiles y Lean",
        provider: "Fundación Telefónica",
        year: "2025",
        icon: faSync,
        size: "medium",
        image: img2,
        url: "https://drive.google.com/file/d/1y1hTbDQLuZdR6jxIbhXcELAB_cu-6RZ0/view?usp=sharing"
    },
    {
        title: "Fundamentos de UX",
        provider: "Fundación Telefónica",
        year: "2025",
        icon: faLightbulb,
        size: "medium",
        image: img14,
        url: "https://drive.google.com/file/d/1QQUkI8jMbb-PL886RzIixKK2hvkeGVQb/view?usp=sharing"
    },
    {
        title: "Trabajo en Equipo y Colaboración",
        provider: "Fundación Romero",
        year: "2025",
        icon: faUsers,
        size: "small",
        image: img1,
        url: "https://drive.google.com/file/d/1iKHidoUB6fZunuyPCtwWxE_CrenHWTRf/view?usp=sharing"
    },
    {
        title: "Office Intermedio",
        provider: "Fundación Telefónica",
        year: "2025",
        icon: faFileExcel,
        size: "medium",
        image: img11,
        url: "https://drive.google.com/file/d/1YlXQL9LEj8vTsSa2UX66D6amFP6587Ga/view?usp=sharing"
    },
    {
        title: "Comunicación Era Digital",
        provider: "Fundación Telefónica",
        year: "2025",
        icon: faGlobe,
        size: "small",
        image: img3,
        url: "https://drive.google.com/file/d/1raXNzr3UQjFezLslU6E2SrR7me_9rNm2/view?usp=sharing"
    },
    {
        title: "Relaciones en el Trabajo",
        provider: "UPC / Romero",
        year: "2025",
        icon: faHandshake,
        size: "small",
        image: img5,
        url: "https://drive.google.com/file/d/1RPGwFmAmEZ8CmJf46OXWfjcWjGPcq3kH/view?usp=sharing"
    },
    {
        title: "Marca Personal LinkedIn",
        provider: "UCV",
        year: "2021",
        icon: faUserTie,
        size: "small",
        image: img6,
        url: "https://drive.google.com/file/d/1ErCg_Oc4JFhsM-vg2mM8UqDhoQvBWPri/view?usp=sharing"
    },
    {
        title: "Escuela de Líderes",
        provider: "UCV",
        year: "2020",
        icon: faUniversity,
        size: "small",
        image: img7,
        url: "https://drive.google.com/file/d/1EmxF3TIQJss5oI4nDBAM5xqzlDS6VAQ9/view?usp=sharing"
    },
    {
        title: "Turnitin y Biblioteca",
        provider: "UCV",
        year: "2021",
        icon: faMagnifyingGlass,
        size: "small",
        image: img8,
        url: "https://drive.google.com/file/d/1Cx8KKZ_vcxbI--AdjUl4A9Am3yusjCNq/view?usp=sharing"
    },
    {
        title: "Tácticas de Negociación",
        provider: "Fundación Telefónica",
        year: "2025",
        icon: faAward,
        size: "small",
        image: img10,
        url: "https://drive.google.com/file/d/1m9sZvGhlbAZyiQxlh3JOhCVKPyH24naj/view?usp=sharing"
    },
    {
        title: "Comunicación Interna",
        provider: "UPC / Romero",
        year: "2025",
        icon: faCommentDots,
        size: "small",
        image: img12,
        url: "https://drive.google.com/file/d/1W9fI9PGF1VBrWDQXzd0W5nwCl4tkxJpu/view?usp=sharing"
    },
    {
        title: "Customer Service",
        provider: "Fundación Romero",
        year: "2025",
        icon: faHeadset,
        size: "small",
        image: img13,
        url: "https://drive.google.com/file/d/1-VhRike4L4cfKjvBHSg5MB8Lee7jWWrm/view?usp=sharing"
    }
];

function Certificates() {
    return (
        <div className="container" id="certificates">
            <div className="certificates-container">
                <h1>Trayectoria y Certificaciones</h1>
                <div className="bento-grid">
                    {certs.map((cert, index) => (
                        <a 
                            href={cert.url} 
                            key={index} 
                            target="_blank" 
                            rel="noreferrer" 
                            className={`cert-card ${cert.size}`}
                        >
                            <img src={cert.image} alt={cert.title} className="cert-background-image" />
                            <div className="cert-overlay">
                                <div className="cert-hover-icons">
                                    <FontAwesomeIcon icon={cert.icon} className="cert-hover-icon-main" />
                                    <FontAwesomeIcon icon={faExternalLinkAlt} className="cert-hover-icon-link" />
                                </div>
                            </div>
                            <div className="cert-text-content">
                                <h3>{cert.title}</h3>
                                <p>{cert.provider} • {cert.year}</p>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Certificates;