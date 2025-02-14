import React from "react";
import ReactDOM from "react-dom/client";
import "./style.css";

function App() {
  return (
    <div className="user-container">
      <User
        name="Juan Carlos Diaz"
        description="Begginner programmer learning froentend developmente. Currently building first React mini-project"
        skills={[
          "CSS+HTML",
          "Javascript",
          "React",
          "Tailwind CSS",
          "PostgreSQL",
        ]}
        photoName="IMG_0164.jpg"
      />
      <User
        name="Ernesto Diaz"
        description="Experienced Full Stack developer. Currently working as Freelancer and living in Barcelona, Spain"
        skills={[
          "React",
          "Angular",
          "Bootsrap",
          "Python",
          "Java",
          "Javascript",
          "Django",
        ]}
        photoName="IMG_0573-2.jpg"
      />
    </div>
  );
}

function SkillList({ skills }) {
  const validColors = [
    "crimson", // Deep red
    "royalblue", // Vibrant blue
    "forestgreen", // Rich green
    "darkorchid", // Deep purple
    "goldenrod", // Warm golden yellow
    "orangered", // Bright reddish-orange
    "teal", // Blue-green mix
    "deeppink", // Bright pink
    "sienna", // Earthy brown
    "slategray", // Cool gray-blue
  ];
  const getRandomIndex = (arr) => Math.floor(Math.random() * arr.length);

  return (
    <div>
      {skills.map((skill) => (
        <span
          className="skill"
          key={skill}
          style={{
            background: validColors[getRandomIndex(validColors)],
            color: "white",
          }}
        >
          {skill}
        </span>
      ))}
    </div>
  );
}

function User(props) {
  return (
    <div className="card">
      <div className="avatar-container">
        <img className="avatar" src={props.photoName} alt={props.name}></img>
      </div>
      <div className="data">
        <h1>{props.name}</h1>
        <p>{props.description}</p>
        <div className="skill-list">
          <SkillList skills={props.skills} /> {/* Corrected function call */}
        </div>
      </div>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
