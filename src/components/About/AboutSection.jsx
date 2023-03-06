import { Contacts } from "./contacts/Contacts";
import { Lists } from "./contacts/Lists";
export const AboutSection = (props) => {
  console.log("About", props.props);
  return (
      <div>
          <Lists data = {props.props} />

      {/* <p>Contact Me</p>
          <ul className="contacts_list">
              <Contacts {...props.data}/>
      </ul>
      <p>Tech Skills</p>
      <ul className="tech_skills_list"></ul>
      <p>Soft Skills</p>
      <ul className="soft_skills_list"></ul>
      <p>Languages</p>
      <ul className="languages_list"></ul> */}
    </div>
  );
};
