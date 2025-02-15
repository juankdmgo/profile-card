import React from "react";
import ReactDOM from "react-dom/client";
import "./style.css";

const skillsOptions = [
  // 🌱 Beginner-friendly: No prior programming experience required
  { skill: "HTML+CSS", level: "beginner", color: "#FFDDC1" }, // Light peach
  { skill: "Bootstrap", level: "beginner", color: "#AEC6CF" }, // Baby blue
  { skill: "Tailwind CSS", level: "beginner", color: "#AFEEEE" }, // Pale turquoise
  { skill: "Git", level: "beginner", color: "#D3D3D3" }, // Light gray

  // ⚡ Intermediate: Requires basic programming knowledge (e.g., JavaScript, Python)
  { skill: "JavaScript", level: "intermediate", color: "#FFD700" }, // Gold
  { skill: "TypeScript", level: "intermediate", color: "#ADD8E6" }, // Light blue
  { skill: "React", level: "intermediate", color: "#AEEEEE" }, // Pale turquoise
  { skill: "Vue.js", level: "intermediate", color: "#98FB98" }, // Pale green
  { skill: "Angular", level: "intermediate", color: "#FFA07A" }, // Light salmon
  { skill: "Node.js", level: "intermediate", color: "#90EE90" }, // Light green
  { skill: "Express.js", level: "intermediate", color: "#D3D3D3" }, // Light gray
  { skill: "Next.js", level: "intermediate", color: "#E0E0E0" }, // Soft gray
  { skill: "SASS/SCSS", level: "intermediate", color: "#FFB6C1" }, // Light pink
  { skill: "Python", level: "intermediate", color: "#FDFD96" }, // Pastel yellow
  { skill: "SQL", level: "intermediate", color: "#FFCC99" }, // Peach
  { skill: "MongoDB", level: "intermediate", color: "#BFEFBF" }, // Soft green
  { skill: "GraphQL", level: "intermediate", color: "#FFC0CB" }, // Pink
  { skill: "Docker", level: "intermediate", color: "#87CEFA" }, // Light sky blue
  { skill: "AWS", level: "intermediate", color: "#FCEAB9" }, // Pale gold
  { skill: "CI/CD", level: "intermediate", color: "#CFCFCF" }, // Soft gray
  { skill: "PostgreSQL", level: "intermediate", color: "#A7C7E7" }, // Soft blue
  { skill: "Go", level: "intermediate", color: "#C0E0FF" }, // Light cyan
  { skill: "Ruby", level: "intermediate", color: "#FFB5A7" }, // Soft coral

  // 🔥 Advanced: Requires prior experience in multiple technologies or a deep understanding of programming
  { skill: "Django", level: "advanced", color: "#B0C4DE" }, // Light steel blue
  { skill: "Flask", level: "advanced", color: "#DEB887" }, // Light brown
  { skill: "Java", level: "advanced", color: "#FF9999" }, // Soft red
  { skill: "Spring Boot", level: "advanced", color: "#C1E1C1" }, // Tea green
  { skill: "C++", level: "advanced", color: "#D8BFD8" }, // Thistle
  { skill: "C#", level: "advanced", color: "#E6E6FA" }, // Lavender
  { skill: "Kubernetes", level: "advanced", color: "#B0E0E6" }, // Powder blue
];

const listOfUsers = [
  {
    name: "Juan Carlos Diaz",
    description:
      "Begginner programmer learning froentend developmente. Currently building first React mini-project",
    skills: ["HTML+CSS", "JavaScript", "React", "Tailwind CSS"],
    photoName: "juan_profile.jpg",
  },
  {
    name: "Sebastian Delgado",
    description:
      "Advanced Back-end engineer. Currently working for a make up US-based start up",
    skills: ["Go", "Ruby", "Node.js", "PostgreSQL", "AWS"],
    photoName: "sebastian_profile.jpg",
  },
  {
    name: "Ernesto Diaz",
    description:
      "Experienced Full Stack developer. Currently working as Freelancer and living in Barcelona, Spain",
    skills: ["React", "Bootstrap", "Python", "JavaScript", "Django"],
    photoName: "ernesto_profile.jpg",
  },
];

function App() {
  return (
    <div className="user-container">
      {listOfUsers.map((user) => (
        <User
          key={user.name}
          name={user.name}
          description={user.description}
          skills={user.skills}
          photoName={user.photoName}
        />
      ))}
    </div>
  );
}

function SkillList({ skills }) {
  return (
    <div>
      {skills.map((skill) => {
        const skillData = skillsOptions.find((opt) => opt.skill === skill);
        const emoji = !skillData
          ? "🌑" // Default for unknown skills
          : skillData.level === "beginner"
          ? "🌱"
          : skillData.level === "intermediate"
          ? "⚡"
          : "🔥";

        return (
          <span
            className="skill"
            key={skill}
            style={{
              backgroundColor: skillData ? skillData.color : "black",
            }}
          >
            {`${skill} ${emoji}`}
          </span>
        );
      })}
    </div>
  );
}

function User({ name, description, skills, photoName }) {
  return (
    <div className="card">
      <div className="avatar-container">
        <img className="avatar" src={photoName} alt={name}></img>
      </div>
      <div className="data">
        <h1>{name}</h1>
        <p>{description}</p>
        <div className="skill-list">
          <SkillList skills={skills} /> {/* Corrected function call */}
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
