// ExperienceTimeline.jsx
import React from 'react';
import '../styles/ExperienceTimeline.css';
import BlinkingBullet from './Bullet';

const experiences = [
    {
        company: "CC Software Solutions",
        title: "Associate Software Engineer",
        date: "Jan 2024 - Present",
        description: [
            "Developed mobile POS systems using Flutter.",
            "Built REST APIs with Node.js and MongoDB.",
        ],
        tech: ["Flutter", "Node.js", "MongoDB"],
    },
    {
        company: "Internship at XYZ Tech",
        title: "Software Engineering Intern",
        date: "Jul 2023 - Dec 2023",
        description: [
            "Contributed to a learning disability detection system.",
            "Worked on CNN model for symbol classification.",
        ],
        tech: ["Python", "TensorFlow", "React Native"],
    },
    {
        company: "Internship at XYZ Tech",
        title: "Software Engineering Intern",
        date: "Jul 2023 - Dec 2023",
        description: [
            "Contributed to a learning disability detection system.",
            "Worked on CNN model for symbol classification.",
        ],
        tech: ["Python", "TensorFlow", "React Native"],
    }
];

function ExperienceStepper() {
    return (
        <div className="timeline-container">
            {experiences.map((exp, idx) => (
                <div className="timeline-item" key={idx}>
                    <div className="timeline-dot" />
                    {/* <BlinkingBullet /> */}
                    <div className="timeline-content">
                        <h3>{exp.title} – <span>{exp.company}</span></h3>
                        <p className="timeline-date">{exp.date}</p>
                        <ul>
                            {exp.description.map((point, i) => (
                                <li key={i}>{point}</li>
                            ))}
                        </ul>
                        <p className="tech-stack">Tech: {exp.tech.join(", ")}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default ExperienceStepper;
