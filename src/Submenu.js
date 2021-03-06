import React, { useState, useRef, useEffect } from 'react';
import { useGlobalContext } from './context';

const Submenu = () => {
  const {
    page: { page, links },
    location,
    isSubMenuOpen,
  } = useGlobalContext();
  const container = useRef(null);
  useEffect(() => {
    const submenu = container.current;
    const { center, bottom } = location;
    submenu.style.left = `${center}px`;
    submenu.style.top = `${bottom}px`;
  }, [location]);

  return (
    <aside
      className={isSubMenuOpen ? 'submenu show' : 'submenu'}
      ref={container}
    >
      <h4>{page}</h4>
      <div className='submenu-center'>
        {links.map((link) => {
          const { url, label, icon } = link;
          return (
            <a href={url}>
              {icon}
              {label}
            </a>
          );
        })}
      </div>
    </aside>
  );
};

export default Submenu;
