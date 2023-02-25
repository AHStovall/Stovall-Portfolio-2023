import Picture from "../Picture";

export default function AboutMe() {
  return (
    <div className="aboutme-card ">
      <h1 className="header">Adam Stovall</h1>
      <div className="avatar"><Picture /></div>
      
      <section className="blurb card-body img-fluid align-items-center shadow-5-strong rounded-4"style={{ width: 500 }}>
        <div>
        Meet Adam Stovall, a versatile young professional who has made a career out of bringing creative visions to life through television, film, and event production. With a passion for technology and problem-solving, Adam has recently transitioned into the world of web development and is now a certified full stack web developer.
      </div>
      </section>
    </div>
  );
}