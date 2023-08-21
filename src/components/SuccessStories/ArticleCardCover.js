import React from 'react';
import articles from '../../dummy/articles.js';
import ArticleCard from './ArticleCard.js';
import { Link } from 'react-router-dom';
import MajorArticle from './MajorArticle.js';

export default function ArticleCardCover() {
  return (
    <div style={{ maxWidth: '100%', overflow: 'hidden', padding: '0 20px 0 20px' }}>
      <h2 style={{ fontSize: '2rem', textAlign: 'left', marginLeft: '20px' }}>Recent</h2>
      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        {articles.map((article, index) => (
          index !== 0 ? (
            <Link to={`/success-stories/${article.id}`} key={index} style={{ textDecoration: 'none' }}>
              <ArticleCard article={article} key={index} />
            </Link>
          ) : (
            <Link to={`/success-stories/${article.id}`} key={index} style={{ textDecoration: 'none', }}>
              <MajorArticle article={article} key={index} />
            </Link>
          )
        ))}
      </div>
    </div>
  );
}
