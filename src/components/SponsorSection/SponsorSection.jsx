import React from "react";
import styles from "./SponsorSection.module.scss";

// Import Section definition

import Section from "../Section/Section";

const SponsorSection = (props) => {
  return <Section className={styles.sponsors} height="half"></Section>;
};

export default SponsorSection;
