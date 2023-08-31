import React, { useState } from 'react';
import './StudyMaterialsByCategory.css'; // Import your CSS file for component styling

const StudyMaterialsByCategory = ({ studyMaterials }) => {
  const [activeCategory, setActiveCategory] = useState(null);

  const toggleCategory = (category) => {
    if (activeCategory === category) {
      setActiveCategory(null);
    } else {
      setActiveCategory(category);
    }
  };

  return (
    <div className="study-materials">
      {studyMaterials.map((material) => (
        <div
          className={`material-card ${activeCategory === material.category ? 'active' : ''}`}
          key={material.id}
        >
          <div className="card-header" onClick={() => toggleCategory(material.category)}>
            {material.title}
            <span className="icon">{activeCategory === material.category ? '-' : '+'}</span>
          </div>
          {activeCategory === material.category && (
            <div className="card-content">
              <a href={material.downloadLink} target="_blank" rel="noopener noreferrer">
                Download
              </a>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default StudyMaterialsByCategory;
