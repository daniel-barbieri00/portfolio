import Header from "../utils/header";

export default function Experience() {
  return (
    <>
      <Header />
      <div className="page-container">
        <h1 className="page-title">Work Experience</h1>
      </div>
      <div className="page-container" style={{ paddingLeft: "10%", paddingRight: "10%", paddingTop: "2%" }}>
        <table className="page-text">
          <thead>
            <tr style={{ fontSize: "28px" }}>
              <th>Place</th>
              <th>Title</th>
              <th>Responsibilities</th>
              <th>Date</th>
              <th>Location</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Fortis Alberta</td>
              <td>IT QA Summer Student</td>
              <td>
                <ul>
                  <li>- Business Process Automation (Worksoft)</li>
                  <li>- Create BRD for Worksoft Update Project</li>
                  <li>- Execute test cases for multiple different projects</li>
                  <li>- Shadow User Acceptance Testing for recently upgraded project</li>
                  <li>- Present documents and update project progress to project team by scheduling meetings</li>
                </ul>
              </td>
              <td>05/23 - 09/2023</td>
              <td>Calgary, Alberta</td>
            </tr>
            <tr>
              <td>Pisces Pet Emporium</td>
              <td>Fish and Reptile Sales Associate | Small Animal Associate</td>
              <td>
                <ul>
                  <li>- Developed strong independent research skills to learn about the different species available for purchase</li>
                  <li>- Created and maintained positive relationships with customers that promoted recurring business</li>
                  <li>- Grew Conflict Resolution skills</li>
                  <li>- Managed stock rotation weekly for over 6 months for items and livestock</li>
                  <li>- Develop customer focused solutions to a multitude of different problems</li>
                </ul>
              </td>
              <td>01/2021 - 09/2022</td>
              <td>Calgary, Alberta</td>
            </tr>
            <tr>
              <td>Staples</td>
              <td>Aisles Associate</td>
              <td>
                <ul>
                  <li>- Developed strong communication and problem analysis and solving.</li>
                  <li>- Communication skills with many different departments around the store</li>
                  <li>- Analyze plans on multiple documents and implement them together to create a final product</li>
                </ul>
              </td>
              <td>01/2016 - 08/2018, 06/2020 - 01/2021</td>
              <td>Airdrie, Alberta</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="page-container">
        <h1 className="page-title">Relevant Skills</h1>
      </div>
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
      <div className="navbar-container" />
    </>
  );
}
