import React from "react";
import "./App.css";
import List from "./components/List";
// import pic from './components/1.jpg';
// import Box from './components/Box';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ArticleList from "./components/ArticleList";
import ArticleDetail from "./components/ArticleDetail";

const articles = [
  { id: 1, title: "Title 1", content: "Content 1" },
  { id: 2, title: "Title 2", content: "Content 2" },
  { id: 3, title: "Title 3", content: "Content 3" },
];

function App() {
  const liElements = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
  const renderItems = (item, index) => {
    const style = { color: index % 2 === 0 ? "blue" : "green" };
    return <div style={style}>{item} - Уникальный стиль</div>;
  };
  return (
    <div className="App">
      <div>
        <h1>Изучаем React!</h1>
        <List listItem={liElements} renderItem={renderItems} />
      </div>
      <h2>Task 3</h2>
      <Router>
        <div>
          <Routes>
            <Route path="/" element={<ArticleList articles={articles} />} />
            <Route
              path="/articles/:id"
              element={<ArticleDetail articles={articles} />}
            />
            {/* <Route path="/page/:pageNumber" element={<ProductList products={products} />} />
            <Route path="/products" element={<ProductList products={products} />} />
            <Route path="/product/:productId" element={<ProductDetail products={products} />} /> */}
            <Route path="*" element={<h1>404</h1>} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}
// Функция для рендера элементов списка
const renderItems = () => {
  return [
    <span key="item1" style={{ color: "blue" }}>
      Item 1
    </span>,
    <span key="item2" style={{ color: "green" }}>
      Item 2
    </span>,
    <span key="item3" style={{ color: "red" }}>
      Item 3
    </span>,
  ];
};

export default App;
//к первой задаче
// {/* <Box>
//         <p>first</p>
//       </Box>
//       <Box>
//         <p>second</p>
//       </Box>
//       <Box>
//         <p>third</p>
//       </Box>
//       <Box>
//         <img src={pic} />
//       </Box> */}
