import "./randomStyles.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

interface Product {
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  id: number;
}

const ProductCard = ({ id, title, price, description, category, image }: Product) => (
  <div>
    <img src={image} alt={title} style={{ maxWidth: "100%" }} />
    <h2>{title}</h2>
    <p>{description}</p>
    <p>Price: ${price}</p>
    <p>Category: {category}</p>
  </div>
);

const ProductList = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        if (!response.ok) {
          throw new Error(`ager sheni statusi romelic arasdros ar wamova: ${response.status}`);
        }
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("sulelo datas daerxa", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      {products.map((product) => (
        <ProductCard key={product.id} {...product} />
      ))}
    </div>
  );
};

const FetchPage = () => {
  const [darkMode, setDarkMode] = useState(false);

  const handleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`fetchPage ${darkMode ? "darkMode" : ""}`}>
      <header>
        <ul>
            <Link to="/">FetchPage</Link>
            <Link to="/inputPage">InputPage</Link>
            <Link to="/todoPage">TodoPage</Link>
        </ul>
        <button onClick={handleDarkMode}>darkMode</button>
      </header>
      <ProductList />
    </div>
  );
};

export default FetchPage;
