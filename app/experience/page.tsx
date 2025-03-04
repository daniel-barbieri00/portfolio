import Header from "../utils/header";

export default function Experience() {
  return (
    <>
      <Header />
      <div className="page-container" style={{ paddingLeft: "10%", paddingRight: "10%", paddingTop: "2%", paddingBottom: "2%"}}>
        <table className="page-text" style={{ width: "110%" }}>
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
              <td>PetSmart</td>
              <td>Associate Lead with Keys</td>
              <td>
                <ul>
                  <li>- Developed strong independent research skills to learn about the different species available for purchase</li>
                  <li>- Created and maintained positive relationships with customers that promoted recurring business</li>
                  <li>- Coach team members in areas where performance needs to improve</li>
                  <li>- Handle situations with upset customers and come to a solution that keeps positive relations</li>
                  <li>- Complete complex processes such as closing the store, incident reports, inventory adjustments, etc.</li>
                </ul>
              </td>
              <td>06/2024 - Present</td>
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
      <div className="navbar-container" />
    </>
  );
}
