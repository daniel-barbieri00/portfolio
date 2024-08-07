import Header from "./utils/header.jsx";

export default function Home() {
  return (
    <div>
      <Header />
      <div className="page-container">
        <div className="page-text" style={{ paddingTop: "-5%" }}>
          <h3>About Me</h3>
          <div style={{ paddingLeft: "7%", paddingTop: "2.5%", fontSize: "24px" }}>
            <p>
              &nbsp;&nbsp;&nbsp;Daniel Barbieri is a Software Developer / IT QA Automation Tester. With experience as a summer student on Fortis Alberta&apos;s QA team using Worksoft to automate web apps, he also participated in a Worksoft update project where he witnessed the SDLC in its entirety in a waterfall development approach.
            </p>
            <br />
            <p>
              &nbsp;&nbsp;&nbsp;He has completed a software development diploma at SAIT in Calgary, Alberta. During his studies, he learned many different development languages and development styles.
            </p>
            <br />
            <div className="page-container" style={{ paddingLeft: "10%", paddingRight: "10%", paddingBottom: "5%" }}>
              <table className="page-text">
                <tbody>
                  <tr>
                    <td>- Python</td>
                    <td>- C#</td>
                    <td>- next.js / React</td>
                    <td>- HTML</td>
                  </tr>
                  <tr>
                    <td>- CSS</td>
                    <td>- Javascript</td>
                    <td>- Github</td>
                    <td>- Worksoft</td>
                  </tr>
                  <tr>
                    <td>- Customer Solutions</td>
                    <td>- Business Gap Analysis</td>
                    <td>- Problem Solving</td>
                    <td>- Learning and Adapting to new Technologies</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p>
              &nbsp;&nbsp;&nbsp;Daniel&apos;s current goals are to continue learning how to automate different business processes as well as continue to develop different types of software solutions.
            </p>
            <br />
            <p>
              &nbsp;&nbsp;&nbsp;Daniel has had life-long interests in music and gaming. Having played drum set since the age of 12, he has also played saxophone and multiple different percussion instruments such as marimba. Recently, he has been exploring game development using his education to guide the process.
            </p>
            <br /><br /> {/* this line is here for spacing */}
          </div>
        </div>
        <img
          className="page-image"
          src={"/headshot1.jpg"}
          alt="Headshot"
        />
      </div>
      <div className="navbar-container" />
    </div>
  );
}