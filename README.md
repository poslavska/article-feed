React app where you can view articles from Spaceflight News API

## Tech stack:
* **React**: JavaScript framework
* **TypeScript**: statically-typed superset of JavaScript
* **SCSS**: CSS styling
* **Redux Toolkit**: State management library
* **Material UI**: UI component library

## Features:
* view all available articles
* click "Read more" to see full summary of an article
* enter your query into search input and click the magnifying glass button or 'enter' to see the results and your highlighted query

## Additional features:
* custom `useFilter` Hook to reduce overloading of the `ArticleList` component with filter-related states and functions, and improve readability
* created `SkeletonArticle` and `SkeletonArticles` components using **Material UI** to improve UX experience while the data is loading
* responsive layout to ensure the best experience for all user devices
* pagination to navigate through pages of articles efficiently and optimize API requests
* clear the query by clicking the remove button

### Getting Started

First, install dependencies:

```bash
npm install
```

Then run the development server:

```bash
npm run dev