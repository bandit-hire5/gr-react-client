import React from 'react';

const Menu = () => (
  <nav style={styles.menu}>
    <h2>Menu</h2>
    <ul>
      <li>Home</li>
      <li>Friends</li>
    </ul>
  </nav>
);

const styles = {
  menu: {
    width: '200px',
    backgroundColor: '#f4f4f4',
    padding: '20px',
  },
};

export default Menu;
