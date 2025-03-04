import Header from "../utils/header";
import Link from "next/link";

export default function Projects() {
  return (
    <div>
      <Header />
      <div className="page-container" style={{ paddingBottom: "20%", paddingTop: "3%" }}>
        <table className="page-text">
          <tbody>
            <tr>
              <td style={{ width: "50%", textAlign: "center" }}>
                <Link href=" https://github.com/daniel-barbieri00 ">GitHub</Link>
              </td>
              <td style={{ width: "50%", textAlign: "center"  }}>
                <Link href=" https://capstone-delta-two.vercel.app/ ">Capstone Project</Link>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="navbar-container" style={{ paddingBottom: "5%" }}/>
    </div>
  );
}