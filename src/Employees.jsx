import React, { useEffect } from "react";

function Employees() {
  let fnRef = React.useRef();
  let lnRef = React.useRef();
  let ageRef = React.useRef();
  let genderRef = React.useRef();
  let languagesRef = React.useRef();

  useEffect(() => {
    fnRef.current.focus();
  }, []);

  const save = () => {
    let empObj = {
        firstname:fnRef.current.value,
        lastname:lnRef.current.value,
        age:ageRef.current.value,
        gender:genderRef.current.value,
        languages:[],
    }
    console.log(empObj)
    console.log(languagesRef);

  };
  return (
    <>
      <div>
        <label>Firstname: </label>
        <input type="text" ref={fnRef} />
      </div>
      <div>
        <label>Lastname: </label>
        <input type="text" ref={lnRef} />
      </div>
      <div>
        <label>Age: </label>
        <input type="text" ref={ageRef} />
      </div>
      <div>
        <label>Gender: </label>
        <input type="radio" name="gender" value="male"  />
        <label>Male</label>
        <input type="radio" name="gender" value="female" ref={genderRef} />
        <label>Female</label>
        <input type="radio" name="gender" value="others" ref={genderRef} />
        <label>Others</label>
      </div>
      <div>
        <label>Languages: </label>
        <input
          type="checkbox"
          name="languages"
          value="english"
          ref={languagesRef}
        />
        <label>English</label>
        <input
          type="checkbox"
          name="languages"
          value="telugu"
          ref={languagesRef}
        />
        <label>Telugu</label>
        <input
          type="checkbox"
          name="languages"
          value="hindi"
          ref={languagesRef}
        />
        <label>Hindi</label>
      </div>
      <button onClick={save}>Save</button>
    </>
  );
}

export default Employees;
