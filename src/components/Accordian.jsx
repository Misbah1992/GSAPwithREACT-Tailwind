
import React, { useState } from 'react';

const Accordion = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div style={styles.accordion}>
      <div
        onClick={() => setIsOpen(!isOpen)}
        style={styles.header}
      >
        <h3>{title}</h3>
        <span>{isOpen ? '-' : '+'}</span>
      </div>
      {isOpen && <div style={styles.content}>{content}</div>}
    </div>
  );
};

const styles = {
  accordion: {
    border: '1px solid #ccc',
    borderRadius: '4px',
    marginBottom: '10px',
    padding: '10px',
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    cursor: 'pointer',
  },
  content: {
    marginTop: '10px',
  },
};

export default Accordion;
