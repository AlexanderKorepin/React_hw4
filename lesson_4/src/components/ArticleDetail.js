import React from 'react';
import { useParams } from "react-router-dom";


const ArticleDetail = ({articles}) =>{
    const { id } = useParams();
    const article = articles.find(article => article.id === parseInt(id));
    
    if (!article){
        return <div>Статья не найдена</div>;
    }
    return (
        <div>
            <h1>{article.title}</h1>
            <p>{article.content}</p>
        </div>
    );

    
}

export default ArticleDetail;