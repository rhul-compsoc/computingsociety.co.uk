import React from "react";

const Section = ({
  theme = 'light',
  height = '',
  className,
  id,
  name,
  tag,
  children,
}) => {
  // Classes the section should have
  // THEME: The theme
  // HEIGHT: The height
  // classes: Any classes that are inherited
  let classes = `${theme} ${height} ${className}`;

  // children gets the contents of any composite component. E.g HeroSection
  return (
    <section className={classes} id={id}>
      <div className="container">
        {name && <h2>{name}</h2>}
        {tag && <h3 className="section-tag">{tag}</h3>}
        {children}
      </div>
    </section>
  );
};

export default Section;
