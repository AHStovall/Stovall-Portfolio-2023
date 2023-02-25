import { MDBIcon } from "mdb-react-ui-kit";

export default function Resume() {
  return (
    <div className="resume-container resume-box">
      <h1 className="download">Download my resume</h1>
      <p>
        <a
          href="https://docs.google.com/document/d/1lIekVHzIsbrmBjf20G68Httkx02-vJbO8kw_vz1BlOQ/edit?usp=sharing"
          target="_blank"
          rel="noreferrer"
        >
          <MDBIcon fas icon="file-download" size="8x" />
        </a>
      </p>
    </div>
  );
}