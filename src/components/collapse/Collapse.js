import './collapse.scss';
import arrow from '../../assets/arrow.png';
import { useState } from 'react';

// Le composant Collapse accepte deux props : 'title' et 'content'.
const Collapse = ({ title, content }) => {
  // Un Hook d'état est utilisé pour gérer l'état du déroulement. 'isOpen' est la valeur actuelle de l'état, et 'setIsOpen' est une fonction qui permet de changer cette valeur.
  const [isOpen, setIsOpen] = useState(false);

  // Cette fonction permet de basculer l'état du déroulement à chaque clic.
  const handleToggle = () => setIsOpen(!isOpen);

  // Vérifie si le 'content' est un tableau. Si ce n'est pas le cas, il le transforme en tableau pour pouvoir utiliser la méthode .map() par la suite.
  const contentArray = Array.isArray(content) ? content : [content];

  return (
    <div className="collapse">
      {/* Le titre de la section déroulante qui, lorsqu'on clique dessus, bascule l'état 'isOpen'. */}
      <h3 className="collapse_title" onClick={handleToggle}>
        {/* Le titre fourni en prop est affiché ici. */}
        {title}
        {/* Cette image change de classe en fonction de l'état 'isOpen', ce qui permet de changer son style CSS pour indiquer si le contenu est déroulé ou non. */}
        <img className={`arrow ${isOpen ? 'arrow_up' : 'arrow_down'}`} src={arrow} alt="bouton qui montre le contenu" />
      </h3>
      {/* Le contenu de la section déroulante n'est affiché que si 'isOpen' est true. */}
      {isOpen && (
        <div className="collapse_content">
          {/* Chaque élément du tableau 'contentArray' est mappé à un paragraphe. */}
          {contentArray.map((item, index) => (
            // 'key' est une prop spéciale requise lorsqu'on crée des listes d'éléments en React.
            <p key={index}>{item}</p>
          ))}
        </div>
      )}
    </div>
  );
};

export default Collapse;
