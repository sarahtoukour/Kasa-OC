import './collapse.scss';
import arrow from '../../assets/arrow.png';
import { useState } from 'react';

const Collapse = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => setIsOpen(!isOpen);

  const contentArray = Array.isArray(content) ? content : [content];

  return (
    <div className="collapse">
      <h3 className="collapse_title" onClick={handleToggle}>
        {title}
        <img
          className={`arrow ${isOpen ? 'arrow_up' : 'arrow_down'}`}
          src={arrow}
          alt="bouton qui montre le contenu"
        />
      </h3>
      {isOpen && (
        <div className="collapse_content">
          {contentArray.map((item, index) => (
            <p key={index}>{item}</p>
          ))}
        </div>
      )}
    </div>
  );
};

export default Collapse;
