import React from "react";

const LearningValue = ({ learningValue }: { learningValue: string[] }) => {
  return (
    <div className="w-full p-2 flex flex-col gap-4">
      <p className="font-bold text-primary text-lg">Learning Value</p>
      <ul className="list-disc list-inside flex flex-col gap-2">
        {learningValue.map((value, index) => (
          <li key={`${value}-${index}`}>{value}</li>
        ))}
      </ul>
    </div>
  );
};

export default LearningValue;
