import React from 'react'
import "./Announcement.css"
import { useEffect } from 'react';
import 'aos/dist/aos.css';
import AOS from 'aos';
 function Annoucement() {

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className='div1announce'><h2 data-aos="fade-right" className='h1Announce'>Annoucement</h2>
    <form data-aos="fade-up" action="#" method='GET'>
        <input type="date" placeholder='date '/><br /> <br />
        <input type="text" placeholder='title of message' /><br /> <br />
        <textarea name="Message" id="textmessage" cols="30" rows="10" placeholder='Type your messsage here...'></textarea><br /><br />
        <button className='btnmessage' type='submit' name='sendMessage'>Send</button>
    </form>
    </div>
    
    
    

  )
}
export default Annoucement
