import React from "react";
// Import Section definition
import Section from "@components/Section";
import { SiteButton } from "../SiteClickable";
import * as styles from "./SupportedBySection.module.scss";

const SupportedBySection = ({ name, tag, theme }) => {
  return (
    <Section
      className="sponsors"
      id="sponsors"
      height="half"
      name={name}
      tag={tag}
      theme={theme}
    >
      <p className={styles.details}>Interested in supporting us?</p>
      <SiteButton
        className="btn btn-solid-red"
        href="https://compsoc.dev/sponsor"
      >
        Find Out More
      </SiteButton>
    </Section>
  );
};

export default SupportedBySection;
