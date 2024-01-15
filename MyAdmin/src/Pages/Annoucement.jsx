import React from 'react'
import "./Announcement.css"
 function Annoucement() {
  return (
    <div className='div1announce'><h2 className='h1Announce'>Annoucement</h2>
    <form action="#" method=''>
        <input type="date" placeholder='date '/><br /> <br />
        <input type="text" placeholder='title of message' /><br /> <br />
        <textarea name="Message" id="textmessage" cols="30" rows="10" placeholder='Type your messsage here...'></textarea><br /><br />
        <button className='btnmessage' type='submit' name='sendMessage'>Send</button>
    </form>
    </div>
    
    
    

  )
}
export default Annoucement
