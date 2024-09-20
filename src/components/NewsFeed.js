import React from 'react';

const NewsFeed = ({ articles }) => {
  return (
    <div className=" news-feed grid  grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
      {articles.map((article, index) => (
        <div key={index} className="news-card border bg-purple-200 p-4 rounded-md shadow-md hover:shadow-xl transform transition duration-300 ease-in-out hover:scale-105 hover:bg-violet-200">
          <img src={article.image} alt={article.title} className="h-40 w-full object-cover" />
          <h2 className="font-bold font-sans mt-2">{article.title}</h2>
          <p className=" text-sm font-medium font-sans text-gray-600">{article.description}</p>
          <a href={article.url} className="text-blue-600 font-medium hover:text-violet-600" target="_blank" rel="noopener noreferrer">Read More</a>
        </div>
      ))}
    </div>
  );
};

export default NewsFeed;
