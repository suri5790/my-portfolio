import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css'; // Import CSS file

export const ContactUs: React.FC = () => {
  const form = useRef<HTMLFormElement | null>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (form.current) {
      emailjs
        .sendForm('service_o11u3gr', 'template_76vjmhn', form.current, {
          publicKey: 'Pt-gmhMuYeVlMt-_N',
        })
        .then(
          () => {
            console.log('SUCCESS!');
          },
          (error) => {
            console.log('FAILED...', error.text);
          }
        );
    }
  };

  return (
    <div className="contact-container">
      <form ref={form} onSubmit={sendEmail} className="contact-form">
        <h2>Let's get in touch</h2>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" name="from_name" required />
        
        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="user_email" required />
        
        <label htmlFor="message">Message</label>
        <textarea id="message" name="message" required />
        
        <input type="submit" value="Send" />
      </form>
    </div>
  );
};
