"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react"; // Import useState to manage active link state
import "./navbar.css";

export default function Header() {
  const [activeLink, setActiveLink] = useState("/"); // Initialize state for active link
  // Effect to set the active link from local storage on mount
  useEffect(() => {
    const storedLink = localStorage.getItem("activeLink");
    if (storedLink) {
      setActiveLink(storedLink);
    }
  }, []);

  const handleLinkClick = (link) => {
    setActiveLink(link); // Update active link on click
    localStorage.setItem("activeLink", link); // Store active link in local storage
  };

  return (
    <div>
      <div style={{ backgroundColor: "#ffffdd" }}>
        {" "}
        {/* Top half of header */}
        <div className="header-container">
          <div className="header-text">
            {" "}
            {/* Div for the text in your header */}
            <h1 style={{ paddingLeft: "6%" }}>Daniel Barbieri</h1>
            <h2>Software Developer | IT QA Automation Tester</h2>
          </div>
          <img className="header-image" src={"/headshot2.jpg"} alt="Headshot" />
        </div>
      </div>

        {" "}
        {/* Bottom half of header */}

        <div className="navbar-container">
          <div class="flex-container">
            <ul class="navbar">
              <li>
                <Link
                  href="/"
                  className={`navbar-text ${
                    activeLink === "/" ? "active" : ""
                  }`}
                  onClick={() => handleLinkClick("/")}
                >
                  About Me
                </Link>
              </li>
              <li>
                <Link
                  href="/experience"
                  className={`navbar-text ${
                    activeLink === "/experience" ? "active" : ""
                  }`}
                  onClick={() => handleLinkClick("/experience")}
                >
                  Work Experience
                </Link>
              </li>
              <li>
                <Link
                  href="/projects"
                  className={`navbar-text ${
                    activeLink === "/projects" ? "active" : ""
                  }`}
                  onClick={() => handleLinkClick("/projects")}
                >
                  Projects
                </Link>
              </li>
            </ul>
          </div>
        </div>


    </div>
  );
}
