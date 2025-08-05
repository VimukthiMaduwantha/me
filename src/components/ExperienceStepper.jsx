// ExperienceTimeline.jsx
import React from 'react';
import '../styles/ExperienceTimeline.css';
import { Chip, Typography } from '@mui/material';

const experiences = [

    {
        company: "Link Natural Products (Pvt) Ltd",
        title: "Software Engineering",
        date: "Feb 2025 - Present",
        description: "I was actively involved in full-stack software development and engaged in ERP Windows application development. My work included using technologies such as .NET, Blazor, React.js, Node.js, and databases like MS SQL, MySQL, and MongoDB. I also gained hands-on experience with Azure cloud services and implemented responsive UI components using MUI.",
        tech: [".Net", "Blazor", "Ms SQL", "React Js", "Node Js", "MySql", "MongoDB", "Azure", "MUI"],
    },
    {
        company: "Link Natural Products (Pvt) Ltd",
        title: "Associate Software Engineering",
        date: "Aug 2024 - Feb 2025",
        description: " I was actively involved in full-stack software development and engaged in ERP Windows application development. My work included using technologies such as .NET, Blazor, React.js, Node.js, and databases like MS SQL, MySQL, and MongoDB. I also gained hands-on experience with Azure cloud services and implemented responsive UI components using MUI.",
        tech: [".Net", "Blazor", "Ms SQL", "React Js", "Node Js", "MySql", "MongoDB", "Azure", "MUI"],
    },
    {
        company: "Link Natural Products (Pvt) Ltd",
        title: "Intern Software Engineering",
        date: "May 2024 - Aug 2024",
        description: "Completed a 3-month internship focused on full-stack software development, with hands-on experience in .NET and Blazor Pages, React.js, and database management using MS SQL and MySQL.",
        tech: [".Net", "Blazor", "Ms SQL", "React Js", "Node Js", "MySql", "MongoDB", "Azure", "MUI"],
    },
    {
        company: "Agrithmics (Pvt) Ltd",
        title: "Associate Software Engineering",
        date: "Sep 2023 - Mar 2024",
        description: "I have engaged in full-stack ERP web solutions development using React.js, .NET Core, and MS SQL Server. Transitioning from an intern to an Associate Software Engineer, I consistently applied best practices, embraced continuous learning, collaborated effectively within cross-functional teams, and contributed to the delivery of scalable, high-quality, and maintainable solutions.",
        tech: ["React.js", ".Net Core", "Azure", "MUI", "Ms Sql"],
    },
    {
        company: "Agrithmics (Pvt) Ltd",
        title: "Intern Software Engineering",
        date: "Dec 2022 - May 2023",
        description: "I have engaged in full-stack ERP web solutions development using React.js, .NET Core, and MS SQL Server. Throughout the development process, I consistently follow best practices to enhance my skills and deliver high-quality, maintainable solutions.",
        tech: ["React.js", ".Net Core", "Azure", "MUI", "Ms Sql"],
    }
];

function ExperienceStepper() {
    return (
        <div className="timeline-container">
            {experiences.map((exp, idx) => (
                <div className="timeline-item" key={idx}>
                    <div className="timeline-dot" />
                    <div className="timeline-content">
                        <div className='expTime'>
                            <Typography sx={{ fontFamily: "Archivo Black, sans-serif", fontSize: '1.3rem' }}>{exp.title}</Typography>
                            <Typography
                                sx={{
                                    fontSize: "0.9rem",
                                    color: "#888",
                                    background: "linear-gradient(to right, #ff8a00, #9c7800ff)",
                                    WebkitBackgroundClip: "text",
                                    WebkitTextFillColor: "transparent",
                                    fontWeight: "bold",
                                }}
                            >
                                {exp.date}
                            </Typography>

                        </div>
                        <div style={{ marginBottom: '10px' }}>
                            <Typography sx={{
                                fontFamily: "Space Grotesk, serif",
                                background: "linear-gradient(to right, #ff8a00, #fb0000ff)",
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                                fontWeight: "bold",
                            }}> {exp.company}</Typography>
                        </div>
                        <div style={{ marginBottom: '10px' }}>
                            <Typography sx={{ fontFamily: "Space Grotesk, serif", }}> {exp.description}</Typography>
                        </div>
                        <div style={{ marginBottom: '10px' }}>
                            {exp.tech.map((tech, i) => (
                                <Chip key={i} label={tech} variant="filled" sx={{
                                    backgroundColor: 'rgba(255, 255, 255, 0.2)',
                                    backdropFilter: 'blur(6px)',
                                    WebkitBackdropFilter: 'blur(6px)',
                                    color: '#fff',
                                    marginRight: '5px',
                                    fontSize: '0.7rem',
                                    fontFamily: "Space Grotesk, serif",
                                    marginBottom: '5px'
                                }} size="small" />
                            ))}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default ExperienceStepper;
