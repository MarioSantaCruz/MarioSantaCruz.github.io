import React, { useRef, useState } from 'react';
import '../assets/styles/Contact.scss';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import TextField from '@mui/material/TextField';

function Contact() {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  const [nameError, setNameError] = useState<boolean>(false);
  const [emailError, setEmailError] = useState<boolean>(false);
  const [messageError, setMessageError] = useState<boolean>(false);
  const form = useRef();

  const sendEmail = (e: any) => {
    e.preventDefault();
    setNameError(name === '');
    setEmailError(email === '');
    setMessageError(message === '');
  };

  return (
    <div id="contact">
      <div className="items-container">
        <div className="contact_wrapper">
          <h1>Contáctame</h1>
          <p>¿Tienes alguna duda o consulta? ¡Contáctame y hablemos!</p>
          <Box
            ref={form}
            component="form"
            noValidate
            autoComplete="off"
            className='contact-form'
          >
            <div className='form-flex'>
              <TextField
                required
                id="outlined-required-name"
                label="Tu Nombre"
                placeholder="¿Cuál es tu nombre?"
                value={name}
                onChange={(e) => setName(e.target.value)}
                error={nameError}
                helperText={nameError ? "Por favor ingresa tu nombre" : ""}
              />
              <TextField
                required
                id="outlined-required-email"
                label="Correo / Teléfono"
                placeholder="¿Cómo puedo contactarte?"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                error={emailError}
                helperText={emailError ? "Por favor ingresa tu correo o teléfono" : ""}
              />
            </div>
            <TextField
              required
              id="outlined-multiline-static-message"
              label="Mensaje"
              placeholder="Escríbeme tus dudas o consultas"
              multiline
              rows={10}
              className="body-form"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              error={messageError}
              helperText={messageError ? "Por favor ingresa un mensaje" : ""}
            />
            <Button variant="contained" endIcon={<SendIcon />} onClick={sendEmail}>
              Enviar
            </Button>
          </Box>
        </div>
      </div>
    </div>
  );
}

export default Contact;