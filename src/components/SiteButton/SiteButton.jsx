import React from "react";

const SiteButton = ({ href, onClick, className = "", children }) => {
  if (href && onClick)
    throw new Error(
      'You cannot use both the "href" and "onClick" functionality simultaneously.'
    );

  if (href && href !== '#') {
    return <a href={href} className={`btn ${className}`}>{children}</a>;
  }

  return (
    <button onClick={onClick} onKeyDown={onClick} className={`btn ${className}`}>
      {children}
    </button>
  );
};

export default SiteButton;
