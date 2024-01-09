import React from 'react';

function Todo({person,key}){
    return(
        <tr>
            <td>{person.firstname}</td>
            <td>{person.lastname}</td>
            <td>{person.age}</td>
            <td>{person.city}</td>
        </tr>
    )
}

export default Todo;

