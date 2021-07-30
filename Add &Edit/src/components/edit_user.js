import { useParams } from 'react-router-dom';
import './User.css';
import { userList } from '../usersData';
import { users } from '../usersData';
import { getElementById } from 'domutils';
import React, { useState } from 'react';


const Edituser = ({ status, callback, deleteCallback }) => {
    const id = useParams();

    const onSubmit = (e) => {
        e.preventDefault();
        
        callback(users);
    }

    var [user, setuser] = useState({
        id: id.id,
        name: '',
        dept: '',
    });


    //console.log(users[0].id);
    for (let index = 0; index < users.length; index++) {

        if (users[index].id == id.id) {
            var editeduser = users[index];
            users[index].name = user.name;
            users[index].name = user.name;
           
        }
    }




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

        <div className='edituser'>

            <form onSubmit={onSubmit} >
                <table>

                    <tr>
                        <td>User id :</td>
                        <td><input type="number" name="id" placeholder="enter your id"  /></td>
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
                        <td><input type="submit" name="submit" value="Edit" /></td>
                    </tr>
                </table>
            </form>

           
        </div>
    );

}
export default Edituser;
