import React from 'react';
import Todo from './Todo';

function Todolist(){
    let [people,setPeople] = React.useState([]);
    let [fn,setFn] = React.useState(['']);
    let [ln,setLn] = React.useState(['']);
    let [age,setAge] = React.useState(['']);
    let [city,setCity] = React.useState(['']);


    const save = ()=>{
        let personObj = {
            firstname: fn,
            lastname:ln,
            age:age,
            city:city
        }
        setPeople([...people,personObj]);
    }

    return(
        <div>
            Firstname: <input type="text"  onKeyUp={(e)=>{setFn(e.target.value)}}/>
            Lastname: <input type="text"  onKeyUp={(e)=>{setLn(e.target.value)}}/>
            Age: <input type="text"  onKeyUp={(e)=>{setAge(e.target.value)}}/>
            City: <input type="text"  onKeyUp={(e)=>{setCity(e.target.value)}}/>
            <button onClick={save}>Save</button>
            <table border="1">
                <tr>
                    <th>Firstname</th>
                    <th>Lastname</th>
                    <th>Age</th>
                    <th>City</th>
                </tr>
                {
                    people.map((person,ind)=>{
                        return(<Todo key={ind} person={person}></Todo>)
                    })
                }
            </table>
        </div>
    )
}

export default Todolist;