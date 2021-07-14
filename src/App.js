import './App.scss';
import * as Section from './components';

function CV() {
  return (
    <article className="cv-container">
      <Section.PersonalInfo />
      <Section.AboutMe />
      <Section.WorkExperiences />
      <Section.TechSkills />
      <Section.OtherSkills />
      <Section.Languages />
      <Section.Hobbies />
    </article>
  );
}

export default CV;
