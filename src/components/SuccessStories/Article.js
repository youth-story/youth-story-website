import React, { useEffect, useState } from 'react';
import articles from '../../dummy/articles';
import { useParams } from 'react-router-dom';
import DrawerAppBar from '../AppBar/DrawerAppBar';

export default function Article(props) {
  const { id } = useParams();
  const [article, setArticle] = useState(articles[id]);

  const contentWithLineBreaks = article.content.split('\n').map((paragraph, index) => (
    <React.Fragment key={index}>
      {paragraph}
      <br />
    </React.Fragment>
  ));

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <DrawerAppBar />
      <img src={article.thumbnail} alt="Article Thumbnail" style={{ width: '100%', maxWidth: '400px' }} />
      <h1 style={{ textAlign: 'center' }}>{article.title}</h1>
      <p style={{ fontSize: '1rem', alignSelf: 'flex-end' }}>By <span style={{fontWeight: '700', }}>{article.author}</span></p>
      <p style={{ textAlign: 'justify', fontSize: '1.2rem', padding: '20px' }}>{contentWithLineBreaks}</p>
    </div>
  );
}
