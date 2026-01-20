import React from "react";
import emailjs from "@emailjs/browser";

export default function ContactForm() {

  function sendFeedback(e) {
    e.preventDefault();

    emailjs.sendForm(
      "service_45d32oh",
      "template_maykxxn",
      e.target,
      "__mn0StozPHrMPhYj" // new EmailJS key
    ).then(
      (result) => {
        alert("Message sent!");
        e.target.reset();
      },
      (error) => {
        alert("Error sending message: " + error.text);
      }
    );
  }

  return (
    <section className="contact" id="contact">
      <h2>Send Us a Message</h2>
      <form onSubmit={sendFeedback}>
        <input name="name" type="text" placeholder="Name" required />
        <input name="phone" type="text" placeholder="Phone" required />
        <textarea name="message" placeholder="Message" required></textarea>
        <button type="submit">Send</button>
      </form>
    </section>
  );
}
