import React from "react";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="text-center text-text non-selectable">
      © {year} noted - By Ibarhim El Gibran
    </footer>
  );
};

export default Footer;
