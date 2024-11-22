/* eslint-disable react/prop-types */
import { useState } from "react";

const ProductQa = ({ data }) => {
  const [expandedQa, setExpandedQa] = useState(null);

  const qaData = data?.map((qa) => ({
    id: qa._id, 
    question: qa.question,
    answer: qa.answer,
  }));

  const toggleQa = (id) => {
    setExpandedQa(expandedQa === id ? null : id);
  };

  return (
    <div className="mt-10">
      <h2 className="text-2xl font-semibold text-gray-900 mb-6">QA Section</h2>
      <div className="space-y-4">
        {qaData?.map((qa) => (
          <div
            key={qa.id}
            className="border rounded-lg p-4 shadow-md bg-white cursor-pointer"
          >
            <div
              className="flex justify-between items-center"
              onClick={() => toggleQa(qa.id)}
            >
              <p className="font-bold text-gray-900">{qa.question}</p>
              <span className="text-gray-500">
                {expandedQa === qa.id ? "-" : "+"}
              </span>
            </div>
            {expandedQa === qa.id && (
              <p className="mt-3 text-gray-400 leading-relaxed">{qa.answer}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductQa;
