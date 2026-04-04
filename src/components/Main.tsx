import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
// @ts-ignore
import avatarImg from '../assets/images/Foto.jpeg';
// @ts-ignore
import '../assets/styles/Main.scss';

function Main() {
  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src={avatarImg} alt="Mario Santa Cruz" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/MarioSantaCruz" target="_blank" rel="noreferrer">
              <GitHubIcon/>
            </a>
          </div>
          <h1>Mario Santa Cruz</h1>
          <p>Estudiante de Ingeniería de Sistemas y Computación</p>
          <div className="mobile_social_icons">
            <a href="https://github.com/MarioSantaCruz" target="_blank" rel="noreferrer">
              <GitHubIcon/>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;