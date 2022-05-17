import React from "react";
import Nav from "../../Nav/Nav.js";
import user from "./../../../assets/person.png";
import BarChart from "../../Chart/BarChart.js";
import Table from "../../table/Table.jsx";

const Note = () => {
  return (
    <>
      <Nav title="Dashboard" image={user} username="Pius Osuji" />
      <BarChart />
      <Table />
    </>
  );
};

export default Note;
