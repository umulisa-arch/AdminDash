import './Register.css'
function Register() {
  return (
    <>
      <div className='body'>
        <h2 className='h2register'>Registration Form</h2>
        <form>
        <label id='fname'>First Name:</label>   <br />
          <input type="text" />
          <br />
          <br />
          <label id='Mname'>Middle Name(Optional):</label>          <br />
          <input type="text" />
          <br />
          <br />
          <label id='Lname'>Last Name:</label>      <br />
          <input type="text" />
          <br />
          <br />
          <label id='NI'>National ID:</label>    <br />
          <input type="text" />
          <br />
          <br />
          <label id='Fnbr'>Phone Number:</label>    <br />
          <input type="text" />
          <br />
          <br />
          <label id='date'>Date of birth:</label>      <br />
          <input type="text" />
          <br />
          <br />
         <div id='role'>Role :
        <input type="radio" name='opt' value="admin"/>
        <label for="Admin">Admin</label><br />
        <input type="radio" name='opt' value="user" id='user'/>
        <label for="User">User</label><br />
         </div>
          <h4>Current Resident</h4>
          <label id='dis'>District :</label>   <br />
          <input type="text" id='district' />
          <br />
          <br />
         <label id='sec'> Sector :</label>   <br />
          <input type="text" id='sector' />
          <br />
          <br />
         <label id='cel'>Cell :</label>   <br />
          <input type="text" id='cell'/>
          <br />
          <br />
        <label id='ville'>Village :</label>   <br />
          <input type="text" />
          <br />
          <br />
<div id='marital'>
        Marital Status :
        <input type="radio" name='option' value="Single" id='single'/>
        <label for="Single">Single</label><br />
        <input type="radio" name='option' value="married" id='married'/>
        <label for="Married">Married</label><br />
        </div>
        </form>
         <br />
        <button type='button' className='reg-btn'>Register </button>
      </div>
    </>
  )
}
export default Register