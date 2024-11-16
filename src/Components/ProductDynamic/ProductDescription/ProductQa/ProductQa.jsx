import { useState } from "react";

const ProductQa = () => {
  const [expandedQa, setExpandedQa] = useState(null);

  // Mock QA data
  const qaData = [
    {
      id: 1,
      question: "What material is the product made of?",
      answer:
        "The product is made of a premium cotton blend, ensuring lightweight, breathable comfort.",
    },
    {
      id: 2,
      question: "Is the product machine washable?",
      answer:
        "Yes, it is machine washable. Use a mild detergent and wash in cold water for best results.",
    },
    {
      id: 3,
      question: "Does the product come with a warranty?",
      answer:
        "Yes, this product comes with a 1-year warranty covering manufacturing defects.",
    },
    {
      id: 4,
      question: "Are there different color options available?",
      answer:
        "Yes, this product is available in a variety of vibrant and pastel color options.",
    },
    {
      id: 5,
      question: "What is the return policy for this product?",
      answer:
        "You can return the product within 30 days of purchase for a full refund, provided it is unused and in its original packaging.",
    },
  ];

  const toggleQa = (id) => {
    setExpandedQa(expandedQa === id ? null : id);
  };

  return (
    <div className="mt-10">
      <h2 className="text-2xl font-semibold text-gray-900 mb-6">QA Section</h2>
      <div className="space-y-4">
        {qaData.map((qa) => (
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
