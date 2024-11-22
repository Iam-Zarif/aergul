/* eslint-disable react/prop-types */
const ProductDetails = ({ data }) => {
  const findSectionContent = (sectionTitle) => {
    const section = data?.productDetails?.find(
      (detail) => detail.section === sectionTitle
    );
    return section?.content || [];
  };

  return (
    <div>
      <div>
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">
          Product Details
        </h2>
        {findSectionContent("Basic Details").map((text, index) => (
          <p key={index} className="text-gray-700 leading-relaxed mb-4">
            {text}
          </p>
        ))}
        <hr className="my-6 border-gray-300" />
      </div>

      <div>
        <h3 className="text-lg font-medium text-gray-900 mb-3">
          Care Instructions
        </h3>
        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          {findSectionContent("Care Instructions").map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
        <hr className="my-6 border-gray-300" />
      </div>

      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-3">
          Size and Fit Guide
        </h3>
        {findSectionContent("Size and Fit Guide").map((text, index) => (
          <p key={index} className="text-gray-700 leading-relaxed mb-4">
            {text}
          </p>
        ))}
        <hr className="my-6 border-gray-300" />
      </div>

      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-3">
          Fabric and Design Highlights
        </h3>
        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          {findSectionContent("Fabric and Design Highlights").map(
            (item, index) => (
              <li key={index}>{item}</li>
            )
          )}
        </ul>
        <hr className="my-6 border-gray-300" />
      </div>

      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-3">
          Versatility and Style
        </h3>
        {findSectionContent("Versatility and Style").map((text, index) => (
          <p key={index} className="text-gray-700 leading-relaxed">
            {text}
          </p>
        ))}
        <hr className="my-6 border-gray-300" />
      </div>

      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-3">
          Sustainability
        </h3>
        {findSectionContent("Sustainability").map((text, index) => (
          <p key={index} className="text-gray-700 leading-relaxed">
            {text}
          </p>
        ))}
      </div>
    </div>
  );
};

export default ProductDetails;
