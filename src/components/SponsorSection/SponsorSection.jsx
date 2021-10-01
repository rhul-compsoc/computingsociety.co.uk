import React from "react";
import * as styles from "./SponsorSection.module.scss";

// Import Section definition

import Section from "@components/Section";

const SponsorSection = (props) => {
  return <Section className={styles.sponsors} height="half"></Section>;
};

export default SponsorSection;
