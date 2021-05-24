import { Link } from "gatsby";
import React from "react";

const SiteLink = ({ to, href, onClick, children }) => {
  let uses = 0;

  if (to) uses++;
  if (href) uses++;
  if (onClick) uses++;

  if (uses > 1)
    throw new Error(
      'You cannot assign multiple functionalities to the same SiteLink'
    );

  if (to) {
    return <Link to={to} className="link">{children}</Link>;
  }

  if (href) {
    return <a href={href} className="link">{children}</a>;
  }

  return (
    <span onClick={onClick} onKeyDown={onClick} className="link" role="link" tabIndex={0}>
      {children}
    </span>
  );
};

export default SiteLink;
