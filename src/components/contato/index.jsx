import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './contato.css';

export const Contato = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_o0m81k8', 'template_dfb7lwf', form.current, 'FhQNCO-8TNV1LFtIN')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <label>Name</label><br/>
      <input type="text" name="name" /><br/>
      <label>Email</label><br/>
      <input type="email" name="email" /><br/>
      <label>Message</label><br/>
      <textarea name="message" /><br/>
      <input type="submit" value="Send" /><br/>
    </form>
  );
};