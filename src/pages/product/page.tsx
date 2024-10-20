import React from "react";
import { useParams } from "react-router-dom";

const ProductPage: React.FC = () => {
  const { productId } = useParams<{ productId: string }>();

  return (
    <div>
      <h1>Product Page</h1>
      <p>Product ID: {productId}</p>
    </div>
  );
};

export default ProductPage;
