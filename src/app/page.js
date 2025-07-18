import Image from "next/image";
import ProductCard from "./components/ProductCard";

export default function Home() {
  const items = [
    {
      id: 1,
      title: "Product 1",
      description: "Description for product 1",
      image: "/images/product1.png",  
      price: "$10.00",
    },
    {
      id: 2,
      title: "Product 2",
      description: "Description for product 2",
      image: "/images/product1.png",
      price: "$20.00",
    },
    {
      id: 3,
      title: "Product 3",
      description: "Description for product 3",
      image: "/images/product1.png",
      price: "$30.00",
    },
    {
      id: 4,
      title: "Product 4",
      description: "Description for product 4",
      image: "/images/product1.png",
      price: "$40.00",
    },
    {
      id: 5,
      title: "Product 5",
      description: "Description for product 5",
      image: "/images/product1.png",
      price: "$50.00",
    }
  ];
  return (
    <>
    <div className="container mx-auto p-4 text-center">
      <h1 className="text-2xl font-bold">Hello World</h1>
      <div className="mt-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {items.map((item) => (
            <ProductCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </div>
    </>
  );
}
