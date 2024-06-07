import React from 'react';

const SocialLink = ({ href, src, alt }) => (
  <li className="flex items-center space-x-2">
    <a target="_blank" rel="noreferrer" href={href}>
      <img src={src} alt={alt} className="w-7 h-7 mb-2" />
    </a>
  </li>
);

export default SocialLink;
