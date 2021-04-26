import * as React from "react";
// Import Section definition
import Section from "../Section/Section";

const PastEventSection = (props) => {
  return (
    <Section className="PastEvents" height="full" theme="dark">
      <h2>{props.name}</h2>
      <h3 class="section-tag">{props.tag}</h3>

      <div className="row event">
        <div className="col-sm-6 col-md-5 col-lg-4 item">
          <div className="box ">
            <div className="item-head">
              <h4 className="name">Royal Hackaway v4</h4>
              <p className="date">06/04/21 </p>
            </div>
            <div className="item-body">
              <p className="description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              <p className="link">
                <a href="#eventPage">Event Page..</a>
              </p>
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-md-5 col-lg-4 item">
          <div className="box ">
            <div className="item-head">
              <h4 className="name">Past Event 1</h4>
              <p className="date">12/02/21 </p>
            </div>
            <div className="item-body">
              <p className="description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              <p className="link">
                <a href="#eventPage">Event Page..</a>
              </p>
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-md-5 col-lg-4 item">
          <div className="box ">
            <div className="item-head">
              <h4 className="name">Past Event 2</h4>
              <p className="date">28/12/20 </p>
            </div>
            <div className="item-body">
              <p className="description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              <p className="link">
                <a href="#eventPage">Event Page..</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default PastEventSection;
