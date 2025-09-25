//StudentDetail.js
import React from "react";
import { Link, useParams } from "react-router-dom";

export default function StudentDetail() {
  const { id } = useParams();

  const students = [
    { id: "1", name: "Vikas Meena" },
    { id: "2", name: "Mathew Mccognelly" },
    { id: "3", name: "David Frank" },
    { id: "4", name: "Brayn  Sinzer" },
    { id: "5", name: "Frank Kapra" },
    { id: "6", name: "Yogendra Yadav" },
  ];
  let student = students.find((s) => s.id === id);

  return (
    <div>
      <h3>Student Detail </h3>
      <p> ID: {id}</p>
      <p style={{ fontWeight: "bold" }}>
        Name: {student ? student.name : "Not Found"}
      </p>
      <Link to="/students">Back to Students</Link>
    </div>
  );
}
