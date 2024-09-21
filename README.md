# AcoNews

AcoNews is a news website that allows users to search and filter news articles from around the world. It provides a user-friendly interface to explore news based on categories, countries, and languages, with pagination for easy navigation. The site uses the **[GNews API](https://gnews.io/)** to fetch the latest news articles, and is built using **React.js** for the frontend and **Node.js/Express** for the backend.

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Environment Variables](#environment-variables)
- [Running the Project Locally](#running-the-project-locally)
- [Backend API](#backend-api)
- [Deployment](#deployment)

## Overview

The project is divided into two main parts:

- **Frontend**: Developed using React.js and styled with Tailwind CSS for the user interface.
- **Backend**: Built with Node.js and Express, acting as an intermediary to fetch data from the GNews API.

### Approach:

1. **Frontend (React.js)**: 
   - Users can search for news articles using a search bar, apply filters by category, country, and language, and navigate through multiple pages of results.
   - Components include:
     - `NewsFeed` for displaying articles.
     - `SearchBar` for inputting search queries.
     - `Filters` for applying filters.
     - `Pagination` for navigating between pages.
   
2. **Backend (Node.js/Express)**:
   - Two endpoints: `/search` for querying articles and `/headlines` for fetching top headlines.
   - Makes HTTP requests to the GNews API using Axios to retrieve news data.
   - API key management is handled via environment variables.

## Features

- Search news articles based on keywords.
- Filter articles by category, country, and language.
- Clear filter functionality to reset filters easily.
- Pagination for easy navigation through news articles.
- Responsive design built with Tailwind CSS.

## Project Structure

### Frontend:
/src
  | /components 
  |   - NewsFeed.js
  |   - SearchBar.js
  |   - Filters.js
  |   - Pagination.js
App.js
index.js
api.js (handles API requests to the backend)
tailwind.config.js
.env (contains backend URL)


### Backend:
/backend
- server.js (main server file)
- .env (environment variables like API key)
- package.json (dependencies and scripts)
 
## Installation

To run this project locally, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/aconews.git
   cd aconews
2. Install dependencies for both frontend and backend:
   Frontend:
    - cd frontend
    - npm install
   Backend:
    - cd backend
    - npm install
      
## Environment Variables
1. Create a .env file in the backend directory with the following content:
- API_KEY=your_gnews_api_key
- PORT=3000
2. In the frontend, create a .env file in the frontend directory with this:
 - REACT_APP_BACKEND_URL=deployed backend URL

## Running the Project Locally
Frontend:
Navigate to the frontend directory:
bash
Copy code
cd frontend

Start the development server:
bash
Copy code
npm start

Backend:
Navigate to the backend directory:
bash
Copy code
cd backend

Start the server:
bash
Copy code
node server.js
The backend will be running at http://localhost:3000 and the frontend at http://localhost:3001 (if Vite/React).

## Backend API
The backend provides two main endpoints:

- /search: Fetches news articles based on the search query, filters, and pagination.
- /headlines: Fetches top headlines by category, country, or language.
Deployment

## The project is deployed on the following platforms:
  - Frontend: Deployed on Vercel.
  - Backend: Deployed on Render.
    
## Deployed URLs:
Website URL: https://aconews-frontend-eight.vercel.app/
Backend code URL: https://github.com/Mdsugail/aconews-backend
Make sure to configure the environment variables correctly in Vercel for the frontend and Render for the backend.
