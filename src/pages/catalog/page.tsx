import React from "react";
import ItemCard from "./itemCard";
import { items } from "./items";
import { motion } from "framer-motion";

const CatalogPage: React.FC = () => {
  return (
    <div className="grid grid-cols-5 gap-4">
      {items.map((item) => (
        <ItemCard key={item.id} item={item} />
      ))}
    </div>
  );
};

export default CatalogPage;
