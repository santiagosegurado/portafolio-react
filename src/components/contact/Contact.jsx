import React from 'react';
import './contact.scss'
import emailjs from 'emailjs-com'


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
                <img src="https://raw.githubusercontent.com/safak/youtube/da700015c8a88050fad7b961e99a7039638ab3b2/public/assets/shake.svg" alt="" />
            </div>
            <div className="right">
                <h2>Contacto.</h2>
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
