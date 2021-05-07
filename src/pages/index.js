import * as React from "react";
import EventSection from "../components/EventSection";
import HeroSection from "../components/HeroSection";
// import "../assets/index"
// ==============
// COMPONENTS
// ==============
import Layout from "../components/Layout";
import MembershipSection from "../components/MembershipSection";
import SponsorSection from "../components/SponsorSection/SponsorSection";
import SupportedBySection from "../components/SupportedBySection/SupportedBySection";
import TeamSection from "../components/TeamSection";
import WhatWeDoSection from "../components/WhatWeDoSection";

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
      <HeroSection
        name="Computing Society"
        tag="This is a website"
      ></HeroSection>

      <MembershipSection
        name="Membership"
        tag="Our members always come first. We aim to provide great experiences for everyone."
      ></MembershipSection>

      <EventSection
        name="Events"
        tag="These are our upcoming events"
        completed={false}
      ></EventSection>

      <EventSection
        name="Past Events"
        tag="We have a range of events throughout the year"
        completed={true}
      ></EventSection>

      <WhatWeDoSection
        name="What We Do"
        tag="We are here to provide a range of activities and support."
      ></WhatWeDoSection>

      <TeamSection
        name="The Team"
        tag="This is all possible thanks to our hard working committee!"
      ></TeamSection>

      <SupportedBySection
        name="Supported By"
        tag="All of what we do is generously supported by our partners in industry."
      ></SupportedBySection>

      <SponsorSection />
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

