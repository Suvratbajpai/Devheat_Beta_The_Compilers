import React from "react";
import Navbar from "../components/after_loginNavbar";
import { useLocation } from "react-router-dom";
import './userpage.css';

function UserPage() {
  const storedUsername = localStorage.getItem("username");
  return (
    <>
      <Navbar />
      <h1>Welcome, {storedUsername}</h1>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione illo
        dolor non? Minima labore voluptates alias! Labore veniam aperiam
        necessitatibus nobis eligendi dicta a ut, alias esse minus ipsam,
        numquam sint quo tenetur! In, non doloremque maiores voluptate provident
        rem laboriosam placeat quidem minima ut reiciendis ad nulla aliquid
        explicabo veniam minus, natus ea itaque nostrum sunt. Nam veniam dicta
        ipsam fuga, quaerat excepturi natus quisquam sunt, ipsa, eligendi sint.
        Unde obcaecati molestiae commodi dolores, facere blanditiis fugit
        corporis illum quaerat, est ab temporibus qui. Magni earum aliquid
        doloribus vitae pariatur accusantium ut ad libero atque incidunt. Nulla,
        sunt odit!
      </p>
    </>
  );
}

export default UserPage;
