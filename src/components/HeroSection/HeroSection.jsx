import React from "react";
// Import Section definition
import Section from "../Section/Section";
import SiteButton from "../SiteButton";

const HeroSection = (props) => {
  return (
    <Section className="hero d-flex align-items-center" height="full">
      {/* <div className="col-12 col-sm-10 col-md-8 col-lg-8"> */}
      <div className="row">
        <div className="col">
          <div className="text-center profile-card">
            <div>
              <h1>
                Royal Holloway
                <br />
                Computing Society
              </h1>
            </div>

            <div className="row">
              <div className="col">
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
                    Contact Us
                  </SiteButton>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* </div> */}
    </Section>
  );
};

export default HeroSection;
