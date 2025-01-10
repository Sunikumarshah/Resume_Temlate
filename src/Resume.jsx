import PropTypes from 'prop-types';
import './Resume.css'; // Import updated CSS

const Resume = ({ data }) => {
  const { name, role, contact = {}, experience = [], education = [], skills = [], projects = [], certifications = [] } = data;

  return (
    <div className="resume-container">
      <header>
        <h1>{name}</h1>
        <p>{role}</p>
        <p>{contact.email} | {contact.phone} | {contact.address}| {contact.github} | {contact.linkedin}</p>
      </header>

      <section>
        <h2>Experience</h2>
        {experience.length > 0 ? (
          experience.map((job, index) => (
            <div key={index} className="experience-item">
              <h3>{job.company}</h3>
              <p>{job.role}</p>
              <p>{job.duration}</p>
              <p>{job.description}</p>
            </div>
          ))
        ) : <p>No Experience Provided</p>}
      </section>

      <section>
        <h2>Education</h2>
        {education.length > 0 ? (
          education.map((edu, index) => (
            <div key={index} className="education-item">
              <h3>{edu.institution}</h3>
              <p>{edu.degree}</p>
              <p>{edu.duration}</p>
            </div>
          ))
        ) : <p>No Education Details Provided</p>}
      </section>

      <section>
        <h2>Skills</h2>
        <ul>
          {skills.length > 0 ? skills.map((skill, index) => (
            <li key={index}>{skill}</li>
          )) : <p>No Skills Provided</p>}
        </ul>
      </section>

      <section>
        <h2>Projects</h2>
        {projects.length > 0 ? (
          projects.map((project, index) => (
            <div key={index} className="project-item">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <a href={project.link} target="_blank" rel="noreferrer">
                {project.link}
              </a>
            </div>
          ))
        ) : <p>No Projects Provided</p>}
      </section>

      <section>
        <h2>Certifications</h2>
        <ul className="certifications-list">
          {certifications.length > 0 ? certifications.map((cert, index) => (
            <li key={index}>{cert}</li>
          )) : <p>No Certifications Provided</p>}
        </ul>
      </section>
    </div>
  );
};

Resume.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string.isRequired,
    role: PropTypes.string.isRequired,
    contact: PropTypes.shape({
      email: PropTypes.string,
      phone: PropTypes.string,
      address: PropTypes.string
    }),
    experience: PropTypes.arrayOf(PropTypes.object),
    education: PropTypes.arrayOf(PropTypes.object),
    skills: PropTypes.arrayOf(PropTypes.string),
    projects: PropTypes.arrayOf(PropTypes.object),
    certifications: PropTypes.arrayOf(PropTypes.string)
  }).isRequired
};

export default Resume;
