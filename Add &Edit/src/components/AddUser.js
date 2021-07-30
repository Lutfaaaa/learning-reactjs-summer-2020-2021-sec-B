import { useParams } from 'react-router-dom';
import './User.css';
import { userList } from '../usersData';
import { users } from '../usersData';
import { getElementById } from 'domutils';
import React, { useState } from 'react';


const AddUser = ({ status, adduser }) => {

    const onSubmit = (e) => {
        e.preventDefault();
        adduser(user);
    }



    var [user, setuser] = useState({
        id: '',
        name: '',
        dept: '',
    });
   


    const inputEvent = (event) => {
       
        const value = event.target.value;
        const name = event.target.name;

        setuser((prev) => {


            return {
                ...prev,
                [name]: value,
            }
          
        })

    };

    return (

        <div className='adduser'>

            <form onSubmit={onSubmit} >
                <table>

                    <tr>
                        <td>User id :</td>
                        <td><input type="number" name="id" placeholder="enter your id" onChange={inputEvent} /></td>
                    </tr>
                    <tr>
                        <td>User Name :</td>
                        <td><input type="text" name="name" onChange={inputEvent} /></td>
                    </tr>
                    <tr>
                        <td>User Dept :</td>
                        <td><input type="text" name="dept" onChange={inputEvent} /></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td><input type="submit" name="submit" value="Add user" /></td>
                    </tr>
                </table>
            </form>

            
        </div>
    );

}
export default AddUser;
