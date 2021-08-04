import { Link } from "gatsby";
import React from "react";

const SiteLink = ({ to, href, onClick, children, target, ...props }) => {
  let uses = 0;

  if (to) uses++;
  if (href) uses++;
  if (onClick) uses++;

  if (uses > 1)
    throw new Error(
      'You cannot assign multiple functionalities to the same SiteLink'
    );

  if (href || target) {
    return <a {...props} href={href || to} target={target} className="link">{children}</a>;
  }

  if (to) {
    return <Link {...props} to={to} className="link">{children}</Link>;
  }


  return (
    <span {...props} onClick={onClick} onKeyDown={onClick} className="link" role="link" tabIndex={0}>
      {children}
    </span>
  );
};

export default SiteLink;
