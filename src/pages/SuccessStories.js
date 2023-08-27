import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/SuccessStories/Header';
import ArticleCard from '../components/SuccessStories/ArticleCard';
import ArticleCardCover from '../components/SuccessStories/ArticleCardCover';

export default function SuccessStories() {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column', // Use flex column layout
        justifyContent: 'center', // Place items between the top and center vertically
        alignItems: 'center', // Center horizontally
        minHeight: '100vh',
        minWidth: '100vw',
      }}
    >
      <Header title="Success Stories" />
      <ArticleCardCover />
    </div>
  );
}
