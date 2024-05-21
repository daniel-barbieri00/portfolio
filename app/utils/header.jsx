import Image from "next/image";
import Link from "next/link";

export default function Header() {
    return (
      <div>
        <div style={{ backgroundColor: "#424CA8" }}> {/*top half of header*/}
          <div class="header-container">
            <div class="header-text"> {/*div for the text in your header*/}
              <h1 style={{ paddingLeft: "6%"}}>Daniel Barbieri</h1>
              <h2>Software Developer | IT QA Automation Tester</h2>
            </div>
            <img
              class="header-image"
              src={"/headshot2.jpg"}
              alt="Headshot"/>
          </div>
        </div>
        <div class="navbar-container"> {/*bottom half of header*/}
            <Link className="navbar-text" href={"/"}>About Me</Link>
            <p className="navbar-spacer">  |  </p>
            <Link className="navbar-text" href={"/experience"}>Work Experience</Link>
            <p className="navbar-spacer">  |  </p>
            <Link className="navbar-text" href={"/projects"}>Projects</Link>
        </div>
      </div>
    );
  }
  