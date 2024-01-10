import React from "react";

function Person({person}){
    return(
        <tr>
            <td>{person.firstname} </td>
            <td>{person.lastname} </td>
            <td>{person.age} </td>
            <td>{person.city} </td>
            <td>{person.gender} </td>
            <td>{person.courses.map((course)=>{
                return (<li>{course}</li>)
            })} </td>
        </tr>
    )
}

export default Person