import './App.scss';
import data from "./data.json";
import * as Section from './components';

const CV = () => {
  return (
    <article className="cv-container">
      <Section.PersonalInfo info={data.personalInfo} />
      <Section.AboutMe info={data.aboutMe} />
      <Section.WorkExperiences info={data.workExperiences} />
      <Section.TechSkills info={data.techSkills} />
      <Section.OtherSkills info={data.otherSkills} />
      <Section.Languages info={data.languages} />
      <Section.Hobbies info={data.hobbies} />
    </article>
  );
}

export default CV;
