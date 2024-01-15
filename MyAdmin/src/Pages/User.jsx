import React from 'react'
import "./User.css"
import { IoIosSearch } from "react-icons/io";

function User() {
  return (
    <div><h2 className='h2user'>USER MANAGEMENT</h2>
    <div>
        <input className='input' type="text" name="searchUser" id="searchUsers"/> <span className='search'><IoIosSearch /></span>
    </div>
    <div>
        <table>
            <tr>
            <th>UserID</th>
            <th>Names</th>
            <th>Email</th>
            <th>Action</th>
            </tr>
            <tr>
                <td>
                    1
                </td>
                <td>
                    Agnes RUKUNDO
                </td>
                <td>
                    agnesrukundo1198@gmail.com
                </td>
                <td>
                    
                </td>
                </tr>
        </table>
    </div>
    </div>
  )
}
export default User
