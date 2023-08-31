import React, { useState } from 'react';

const StudyMaterialsByCategory = ({ studyMaterials, categories }) => {
    const [selectedCategory, setSelectedCategory] = useState('all');

    const handleCategoryChange = (category) => {
        setSelectedCategory(category);
    };

    const filteredStudyMaterials = selectedCategory === 'all'
        ? studyMaterials
        : studyMaterials.filter(material => material.category === selectedCategory);

    return (
        <div>
            <div className="category-buttons">
                {categories.map(category => (
                    <button
                        
                        key={category}
                        className={selectedCategory === category ? 'active modern-button' : 'modern-button'}
                        onClick={() => handleCategoryChange(category)}
                    >
                        {category}
                    </button>
                ))}
            </div>
            <div className="study-materials-list">
                {categories.map(category => (
                    <div key={category} className="accordion">
                        <button
                            className={`accordion-button ${selectedCategory === category ? 'active' : ''}`}
                            onClick={() => handleCategoryChange(category)}
                        >
                            {category}
                        </button>
                        {selectedCategory === category && (
                            <div className="accordion-panel">
                                {filteredStudyMaterials.map(material => (
                                    <div key={material.id} className="study-material-card">
                                        <h3>{material.title}</h3>
                                        <p>Category: {material.category}</p>
                                        <a href={material.downloadLink} className="study-material-download-link">
                                            Download
                                        </a>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default StudyMaterialsByCategory;
