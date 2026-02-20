import emailjs from '@emailjs/browser';
import {useRef} from 'react';
export default function ContactForm(){
 const form=useRef();
 const sendEmail=(e)=>{
  e.preventDefault();
  emailjs.sendForm('YOUR_SERVICE_ID','YOUR_TEMPLATE_ID',form.current,'YOUR_PUBLIC_KEY')
  .then(()=>alert("Mail Sent Successfully"),()=>alert("Failed"));
 };
 return(
  <form ref={form} onSubmit={sendEmail} className="glass card contact">
   <input name="user_name" placeholder="Your Name" required/>
   <input name="user_email" placeholder="Your Email" required/>
   <textarea name="message" placeholder="Message" required/>
   <button type="submit" className="btn">Send Mail</button>
  </form>
 );
}