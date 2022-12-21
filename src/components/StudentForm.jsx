import React, { useState } from "react";

const StudentForm = () => {
  const [state, setState] = useState([]);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [rollNo, setRollNo] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
    console.log(name, phone, rollNo);
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="from-group">
        <label htmlFor="roll-no">Roll No</label>
        <input
          id="roll-no"
          type="number"
          value={rollNo}
          onChange={(e) => setRollNo(e.target.value)}
        />
      </div>
      <div className="from-group">
        <label htmlFor="name">Name</label>
        <input
          id="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="from-group">
        <label htmlFor="phone">Phone No</label>
        <input
          id="phone"
          type="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
      </div>
      {/* <div className="from-group">
        <label htmlFor="name">Name</label>
        <input id="name" type="text" />
      </div>
      <div className="from-group">
        <label htmlFor="name">Name</label>
        <input id="name" type="text" />
      </div> */}
      <input type="submit" value="Save" id="submit-btn" />
    </form>
  );
};

export default StudentForm;
