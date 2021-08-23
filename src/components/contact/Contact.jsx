import React from 'react';
import './contact.scss'

export const Contact = () => {
    return (
        <div className="contact" id="contact">
            <div className="left">
                <img src="https://raw.githubusercontent.com/safak/youtube/da700015c8a88050fad7b961e99a7039638ab3b2/public/assets/shake.svg" alt="" />
            </div>
            <div className="right">
                <h2>Contacto.</h2>
                <form action="">
                    <input type="text" placeholder="Email"/>
                    <textarea placeholder="Asunto" name="" id="" cols="30" rows="10">
                    </textarea>
                    <button type="submit">Enviar</button>
                </form>
            </div>
        </div>
    )
}
