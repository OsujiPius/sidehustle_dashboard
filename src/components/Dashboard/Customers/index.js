import React, { useEffect, useState } from "react";

const Customer = () => {
  const [members, setMembers] = useState([]);

  useEffect(() => {
    fetch("https://fakerapi.it/api/v1/persons?_quantity=10")
      .then((res) => res.json())
      .then((data) => setMembers(data.data));
  }, []);

  console.log(members);

  return (
    <div>
      <h2
        style={{
          textAlign: "center",
          margin: "20px 0",
          textDecoration: "underline",
        }}
      >
        Team Members
      </h2>
      <table className="table_">
        <thead>
          <th>Firstname</th>
          <th>Lastname</th>
          <th>Email</th>
          <th>Phone Number</th>
          <th>Gender</th>
          <th>Image</th>
        </thead>
        <tbody>
          {members.map((member) => (
            <tr key={member.id}>
              <td data-label="FirstName">{member.firstname}</td>
              <td data-label="LastName">{member.lastname}</td>
              <td data-label="Email">{member.email}</td>
              <td data-label="Phone">{member.phone}</td>
              <td data-label="Gender">{member.gender}</td>
              <td data-label="Image">
                <img style={{ height: "50px" }} src={member.image} alt="" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Customer;
