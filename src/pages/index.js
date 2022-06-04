import React from "react";
import EventSection from "@components/EventSection";
import HeroSection from "@components/HeroSection";
// import "@assets/index"
// ==============
// COMPONENTS
// ==============
import Layout from "@components/Layout";
import MembershipSection from "@components/MembershipSection";
import SupportedBySection from "@components/SupportedBySection/SupportedBySection";
import TeamSection from "@components/TeamSection";
import WhatWeDoSection from "@components/WhatWeDoSection";
import { SiteButton } from "@components/SiteClickable";

import { FreshersPictureHeroSection } from "@components/FreshersPictureHeroSection";
import NewsSection from "@components/NewsSection/EventSection";

// ==============
// SITE MARKUP
// ==============

const IndexPage = () => {
  // // Load from MD
  // const { frontmatter } = data.allMdx

  // // Page Variables
  // const {
  //   people
  // } = frontmatter

  return (
    <Layout>
      <HeroSection name={"Royal Holloway\nComputing Society"} height="full">
        <div className="btn-group pt-3">
          <SiteButton
            className="btn-solid-red m-1"
            href="https://www.su.rhul.ac.uk/societies/a-z/computing/"
          >
            Become A Member
          </SiteButton>
          <SiteButton
            className="btn-outline-red m-1"
            href="mailto:hello@computingsociety.co.uk"
          >
            E-mail Us
          </SiteButton>
          <SiteButton
            className="btn-solid-discord m-1"
            href="https://dc.cmpsc.uk/"
          >
            Join Discord
          </SiteButton>
        </div>
      </HeroSection>

      { <FreshersPictureHeroSection
        height="half"
      >
        <SiteButton className="btn-solid-red m-1" to="/events/freshers2022">
          See Upcoming Events
        </SiteButton>
      </FreshersPictureHeroSection> }

      <MembershipSection
        name="Membership"
        tag="Our members always come first. We aim to provide great experiences for everyone."
        theme="dark"
      ></MembershipSection>

      <EventSection
        name="Upcoming Events"
        tag="A look at what we have coming up"
        completed={false}
        truncateAt={6}
        theme="light"
      ></EventSection>

      <NewsSection name="News" tag="The latest in our society" theme="dark" />

      <EventSection
        name="Past Events"
        tag="We have a range of events throughout the year"
        completed={true}
        truncateAt={3}
        theme="light"
      ></EventSection>

      <WhatWeDoSection
        name="What We Do"
        tag="We are here to provide a range of activities and support."
        theme="dark"
      ></WhatWeDoSection>

      <TeamSection
        name="The Team"
        tag="This is all possible thanks to our hard working committee!"
        theme="light"
      ></TeamSection>

      <SupportedBySection
        name="Supported By"
        tag="All of what we do is generously supported by our partners in industry."
        theme="dark"
      ></SupportedBySection>

      {/* <SponsorSection /> */}
    </Layout>
  );
};

export default IndexPage;

/* export const pageQuery = graphql`
query front {
  allMdx {
    edges {
      node {
        frontmatter {
          name
          title
          short_description
        }
      }
    }
  }
}
` */
