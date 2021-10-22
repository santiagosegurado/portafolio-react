import React from 'react';
import './contact.scss'
import emailjs from 'emailjs-com'
import { Player } from '@lottiefiles/react-lottie-player';


export const Contact = () => {
    
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_ke5owa7', 'template_mp2xyfb', e.target, 'user_E1QzB3C7wfdHQlTevkVFN')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });

          e.target.reset();
      };    


      
    
    
    return (
        <div className="contact" id="contact">
            <div className="left">
            <Player
                className="player"
                autoplay
                loop
                src="https://assets3.lottiefiles.com/packages/lf20_2q00fwtq.json"
            ></Player>
            </div>
            <div className="right">
                <h2>Contacto</h2>
                <form onSubmit={ sendEmail }>
                    <input type="text" placeholder="Nombre" name="name" />
                    <input type="text" placeholder="Asunto" name="subject" />
                    <input type="text" placeholder="Email" name="email" />
                    <textarea placeholder="Mensaje" name="message" id="" cols="30" rows="10">
                    </textarea>
                    <button type="submit">Enviar</button>
                </form>
            </div>
        </div>
    )
}
