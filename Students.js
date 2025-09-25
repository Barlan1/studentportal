//Student.js
import React from "react";
import { Link } from "react-router-dom";

export default function Students() {
  const students = [
    { id: 1, name: "Vikas Meena" },
    { id: 2, name: "Mathew Mccognelly" },
    { id: 3, name: "David Frank" },
    { id: 4, name: "Brayn  Sinzer" },
    { id: 5, name: "Frank Kapra" },
    { id: 6, name: "Yogendra Yadav" },
  ];

  return (
    <div>
      <h2>students List</h2>
      <ul>
        {students.map((stud) => (
          <li key={stud.id}>
            <Link to={`/students/${stud.id}`}> {stud.name} </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
