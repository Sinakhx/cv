import './App.scss';
import * as Section from './components';

const CV = () => {
  return (
    <article className="cv-container">
      <Section.PersonalInfo />
      <Section.AboutMe />
      <Section.WorkExperiences />
      <Section.TechSkills />
      <Section.OSSProjects/>
      <Section.Languages />
      <Section.Hobbies />
    </article>
  );
}

export default CV;
