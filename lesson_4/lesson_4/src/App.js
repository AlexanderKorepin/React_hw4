import React from 'react';
import { BrowserRouter as Router, Route, Routes } from'react-router-dom';
import ArticleDetail from '../../src/components/ArticleDetail';
import ArticleList from './src/components/ArticleList';


const articles = [
  { id: 1, title: 'Статья 1', content: 'Содержимое статьи 1' },
  { id: 2, title: 'Статья 2', content: 'Содержимое статьи 2' },
  { id: 3, title: 'Статья 3', content: 'Содержимое статьи 3' },
];


// eslint-disable-next-line no-use-before-define
// const ProductList = ({ products }) => {
//     return (
//         <div>
//             <h2>Список продуктов:</h2>
//             <ul>
//                 {products.map(product => (
//                     <li key={product.id}>{product.name}</li>
//                 ))}
//             </ul>
//         </div>
//     );
// };







const App = () => {
    <Router>
        <div>
          <h1>приложение для просмотра статей</h1>
          <Routes>
            <Route path="/articles/:id" element={<ArticleDetail articles={articles} />} /> 
            <Route path="*" element={<ArticleList articles={articles} />} /> 
            

          </Routes>
        </div>
    </Router>
};

// Вывод списка продуктов




export default App;



