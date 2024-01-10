import React from "react";
import Person from "./Person";

function Form()
{
    let [people,setPeople]=React.useState([])
    let [fn,setFn]=React.useState('')
    let [ln,setLn]=React.useState('')
    let [age,setAge]=React.useState('')
    let [city,setCity]=React.useState('')
    let [gender,setGender]=React.useState('')
    let [courses,setCourses]=React.useState([])

    const handleChange=(e)=>{
        if(e.target.checked)
        {
            setCourses([...courses,e.target.value])
        }
        else{
            let temp=courses.filter((a)=>{
                return (a!==e.target.value)
            })
            setCourses([...temp])
        }
    }

    const savedetails=()=>{
        let personObj={
            firstname:fn,
            lastname:ln,
            age:age,
            city:city,
            gender:gender,
            courses:courses
        }
        console.log(personObj); 
        setPeople([...people,personObj])
    }

    return(
        <div>
            <div>
            <label for="fn">First Name:</label><input id="fn" type="text" onKeyUp={(e)=>{setFn(e.target.value)}} />
            <label for="ln">Last Name:</label><input id="ln" type="text" onKeyUp={(e)=>{setLn(e.target.value)}} />
            <label for="age">Age:</label><input id="age" type="text" onKeyUp={(e)=>{setAge(e.target.value)}} />
            <label for="city">City:</label><input id="city" type="text" onKeyUp={(e)=>{setCity(e.target.value)}} />
            <p>Gender:</p>
            <input id="male" value='male' name="gender" type="radio" onChange={(e)=>{setGender(e.target.value)}} /><label for="male">Male</label>
            <input id="female" value='female' name="gender" type="radio" onChange={(e)=>{setGender(e.target.value)}} /><label for="female">Female</label>
            <p>Courses:</p>
            <input type="checkbox" name="courses" id="React" value='React' onChange={(e)=>{handleChange(e)}} /><label for="React">React</label>
            <input type="checkbox" name="courses" id="Angular" value='Angular' onChange={(e)=>{handleChange(e)}} /><label htmlFor="Angular">Angular</label>
            <input type="checkbox" name="courses" id="Java" value='Java' onChange={(e)=>{handleChange(e)}} /><label htmlFor="Java">Java</label>
            <input type="checkbox" name="courses" id="Python" value='Python' onChange={(e)=>{handleChange(e)}} /><label htmlFor="Python">Python</label>
            <input type="checkbox" name="courses" id="Devops" value='Devops' onChange={(e)=>{handleChange(e)}} /><label htmlFor="Devops">Devops</label>
            <button onClick={savedetails}>Save</button>

            </div>
            <table border="2px solid">
            <thead>
                <tr>
                    <th>Firstname</th>
                    <th>Lastname</th>
                    <th>Age</th>
                    <th>City</th>
                    <th>Gender</th>
                    <th>Courses</th>
                </tr>
            </thead>
            <tbody>
                    {
                        people.map((person)=>{
                            return(<Person person={person}></Person>)
                        })
                    }
            </tbody>
            </table>
        </div>
    )
}

export default Form