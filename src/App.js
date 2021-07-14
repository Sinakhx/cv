import './App.scss';
import * as Section from './components';

function CV() {
  return (
    <main className="cv-container">
      <Section.PersonalInfo />
      <Section.AboutMe />
      <Section.WorkExperiences />
      <Section.TechSkills />
      <Section.OtherSkills />
      <Section.Languages />
      <Section.Hobbies />
    </main>
  );
}

export default CV;
