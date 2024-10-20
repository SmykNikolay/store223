import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { useState } from "react";
import { items } from "./items";

const ItemCard: React.FC<{ item: (typeof items)[0] }> = ({ item }) => {
  const [currentImage, setCurrentImage] = useState(item.photoUrl[0]);

  return (
    <Card
      onMouseEnter={() => setCurrentImage(item.photoUrl[1])}
      onMouseLeave={() => setCurrentImage(item.photoUrl[0])}
    >
      <CardHeader>
        <img
          src={currentImage}
          className="w-full  object-contain"
          alt="Card Photo"
        />
        <p>{item.price}</p>
        <CardTitle>{item.title}</CardTitle>
        <CardDescription>{item.description}</CardDescription>
      </CardHeader>
    </Card>
  );
};

export default ItemCard;
