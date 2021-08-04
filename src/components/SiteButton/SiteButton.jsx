import { Link } from "gatsby";
import React from "react";

const SiteButton = ({ to, href, onClick, className = "", target, children, ...props }) => {
  let uses = 0;

  if (to) uses++;
  if (href) uses++;
  if (onClick) uses++;

  if (uses > 1)
    throw new Error(
      'You cannot assign multiple functionalities to the same SiteButton'
    );

  if (href || target) {
    return <a {...props} href={href || to} target={target} className={`btn ${className}`}>{children}</a>;
  }

  if (to) {
    return <Link to={to} className={`btn ${className}`}>{children}</Link>;
  }

  return (
    <button onClick={onClick} onKeyDown={onClick} className={`btn ${className}`}>
      {children}
    </button>
  );
};

export default SiteButton;
