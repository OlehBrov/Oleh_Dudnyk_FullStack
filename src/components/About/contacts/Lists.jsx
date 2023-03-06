export const Lists = (props) => {
  return props.data.map((el) => {
    if (Object.keys(el).includes("contacts")) {
      return (
        <ul>
          {Object.keys(el)}
          {Object.keys(el.contacts).map((cont) => {
            return (
              <li>
                {cont} {el.contacts[cont]}
              </li>
            );
          })}
        </ul>
      );
    }
    if (Object.keys(el).includes("tech skills")) {
      return (
        <ul>
          {Object.keys(el)}
          {el["tech skills"].map((el) => {
            return <li>{el}</li>;
          })}
        </ul>
      );
    }
    if (Object.keys(el).includes("soft skills")) {
      return (
        <ul>
          {Object.keys(el)}
          {el["soft skills"].map((el) => {
            return <li>{el}</li>;
          })}
        </ul>
      );
    }
    if (Object.keys(el).includes("languages")) {
      return (
        <ul>
          {Object.keys(el)}
          {Object.keys(el.languages).map((lang) => {
            return (
              <li>
                {lang} {el.languages[lang]}
              </li>
            );
          })}
        </ul>
      );
    }
  });
};
