import React, { useState } from "react";
import TransformationBlock from "../components/TransformationBlock";

const TransformationPanel = () => {
  const [transformations, setTransformations] = useState([]);

  const handleAddTransformation = () => {
    setTransformations([...transformations, {}]);
  };

  const handleDeleteTransformation = (index) => {
    const newTransformations = [...transformations];
    newTransformations.splice(index, 1);
    setTransformations(newTransformations);
  };

  const handleUpdateTransformation = (index, updatedTransformation) => {
    const newTransformations = [...transformations];
    newTransformations[index] = updatedTransformation;
    setTransformations(newTransformations);
  };

  return (
    <div className="transformation-panel">
      <div className="panel-header">
        <h2>Transformations</h2>
        <button onClick={handleAddTransformation}>Add Transformation</button>
      </div>
      <div className="panel-content">
        {transformations.map((transformation, index) => (
          <TransformationBlock
            key={index}
            index={index}
            transformation={transformation}
            onDelete={handleDeleteTransformation}
            onUpdate={handleUpdateTransformation}
          />
        ))}
      </div>
    </div>
  );
};

export default TransformationPanel;
