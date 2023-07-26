import React from 'react';
import './MajorArticle.css';

export default function MajorArticle({article}) {
    return (
        <>
            <div className='groups'>
                <img className='thumbnail' style={{borderRadius: '20px'}} src={article.thumbnail} alt='article thumbnail' />
                <div className='info'>
                    <h2 className='title'>{article.title}</h2>
                    <p className='author'>By <span style={{fontWeight: 'bold'}}>{article.author}</span></p>
                </div>
            </div>
        </>
    );
}