import React from "react";

export default function Navlink({ name, url, cname }) {
  return (
    <>
      <li className="nav-item ms-2 me-2">
        <a className={`nav-link ${cname}`} href={url}>
          {name}
        </a>
      </li>
    </>
  );
}
