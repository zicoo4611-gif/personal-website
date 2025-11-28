import React from 'react';

const Resume: React.FC = () => {
    return (
        <div className="resume">
            <h1>My Resume</h1>
            <section>
                <h2>Contact Information</h2>
                <p>Name: John Doe</p>
                <p>Email: johndoe@example.com</p>
                <p>Phone: (123) 456-7890</p>
            </section>
            <section>
                <h2>Education</h2>
                <ul>
                    <li>Bachelor of Science in Computer Science - University XYZ (2015 - 2019)</li>
                </ul>
            </section>
            <section>
                <h2>Experience</h2>
                <ul>
                    <li>Software Engineer at Company ABC (2020 - Present)</li>
                    <li>Intern at Company DEF (2019 - 2020)</li>
                </ul>
            </section>
            <section>
                <h2>Skills</h2>
                <ul>
                    <li>JavaScript, TypeScript, React</li>
                    <li>Node.js, Express</li>
                    <li>HTML, CSS</li>
                </ul>
            </section>
        </div>
    );
};

export default Resume;