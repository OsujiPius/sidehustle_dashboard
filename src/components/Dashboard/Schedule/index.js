import React, { useEffect, useState } from "react";

const Schedule = () => {
  const [members, setMembers] = useState([]);

  useEffect(() => {
    fetch("https://fakerapi.it/api/v1/companies?_quantity=1")
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
        Clients
      </h2>
      <table className="table_">
        <thead>
          <th>Name</th>
          <th>Email</th>
          <th>Phone Number</th>
          <th>Country</th>
          <th>Image</th>
        </thead>
        <tbody>
          {members.map((member) => (
            <tr key={member.id}>
              <td data-label="Name">{member.name}</td>

              <td data-label="Email">{member.email}</td>
              <td data-label="Phone">{member.phone}</td>
              <td data-label="Country">{member.country}</td>
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

export default Schedule;
