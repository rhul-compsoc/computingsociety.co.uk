import { Link } from "gatsby";
import React from "react";

const SiteButton = ({ to, href, onClick, className = "", children }) => {
  let uses = 0;

  if (to) uses++;
  if (href) uses++;
  if (onClick) uses++;

  if (uses > 1)
    throw new Error(
      'You cannot assign multiple functionalities to the same SiteButton'
    );

  if (to) {
    return <Link to={to} className="link">{children}</Link>;
  }

  if (href) {
    return <a href={href} className={`btn ${className}`}>{children}</a>;
  }

  return (
    <button onClick={onClick} onKeyDown={onClick} className={`btn ${className}`}>
      {children}
    </button>
  );
};

export default SiteButton;
