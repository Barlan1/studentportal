import React from "react";
import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <div>
      <h1>This is Home Page</h1>
      <p>welcome to the Student portal</p>
      <h3>Students List</h3>
      <Link to="/about "> About </Link>|
      <Link to="/students "> Student list</Link>
    </div>
  );
}
