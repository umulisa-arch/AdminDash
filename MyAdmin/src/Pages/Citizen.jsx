import React from 'react'
import { Link } from 'react-router-dom';
import { IoIosSearch } from "react-icons/io";
import { ImMenu2 } from "react-icons/im";
import { GrView } from "react-icons/gr";
import { MdModeEdit } from "react-icons/md";
import { FiDelete } from "react-icons/fi";
import { useEffect } from 'react';
import 'aos/dist/aos.css';
import AOS from 'aos';

 function Citizen() {

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div><h2 data-aos="fade-right" className='h2citizen'>CITIZEN MANAGEMENT</h2> <br />
    <div className='search-container'>
        <input className='input' type="search" name="searchUser" id="searchUsers" placeholder="Search user..."/> 
        <span className='search-icon'><IoIosSearch size={20}/></span>
    </div>
    <br />
    <div>
      <table>
        <tr>
          <th data-aos="fade-up">Citizen ID</th>
          <th data-aos="fade-up">Name</th>
          <th data-aos="fade-up">Email</th>
          <th data-aos="fade-up">action</th>
        </tr>
        <tr data-aos="fade-up">
                <td >
                    1
                </td>
                <td >
                    Agnes RUKUNDO
                </td>
                <td >
                    agnesrukundo1198@gmail.com
                </td>
                <td>
                <Link to="/view-page" style={{ color: 'green' }}>
               <GrView style={{ fontSize: '20px' }} />
                </Link>
                   <Link to="/edit-page" style={{ color: 'blue' }}>
                  <MdModeEdit  style={{ fontSize: '20px' }}/></Link>
                <FiDelete />
                </td>
                </tr>
                <tr data-aos="fade-up">
                <td>
                    2
                </td>
                <td>
                Vanessa Rabie
                </td>
                <td>
                vanessarabie12@gmail.com
                </td>
                <td>
                <div className='actionicons'>
                <GrView />
                <MdModeEdit />
                <FiDelete />
                </div>
                </td>
                </tr>
      </table>
    </div>

    </div>
  )
}
export default Citizen
