import React, { useEffect, useState } from "react";

const Bookstore = () => {
  const [members, setMembers] = useState([]);

  useEffect(() => {
    fetch("https://fakerapi.it/api/v1/products?_quantity=1")
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
        Products
      </h2>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        {members.map((member) => (
          <div
            key={member.id}
            style={{
              width: "370px",
              textAlign: "center",
              border: "2px solid #f3f3f3",
              borderRadius: "20px",

              boxShadow: "0 0 7px 7px #f3f3f3",
            }}
          >
            <img style={{ width: "100%" }} src={member.image} alt="" />
            <h3>{member.name}</h3>
            <p>{member.description}</p>
            <p
              style={{
                color: "green",
                margin: "10px 0",
                borderTopLeftRadius: "20px",
              }}
            >
              ${member.price}
            </p>
            <p style={{ color: "red" }}>${member.taxes}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Bookstore;
