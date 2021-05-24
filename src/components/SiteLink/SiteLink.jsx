import React from "react";

const SiteLink = ({ href, onClick, children }) => {
  if (href && onClick)
    throw new Error(
      'You cannot use both the "href" and "onClick" functionality simultaneously.'
    );

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
