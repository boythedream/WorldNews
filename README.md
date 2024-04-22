

```markdown
# React News Web Application

This is a React-based web application that displays news articles fetched from the [NewsAPI](https://newsapi.org/). It allows users to view news articles based on different categories and provides infinite scrolling for better user experience.

## Features

- Display news articles based on different categories such as business, entertainment, health, science, sports, and technology.
- Infinite scrolling functionality to load more news articles as the user scrolls down.
- Responsive design for optimal viewing on various devices.

## Technologies Used

- React.js
- React Router
- Axios (for HTTP requests)
- react-top-loading-bar (for the loading bar)
- react-infinite-scroll-component (for infinite scrolling)
- Bootstrap (for styling)

## Installation and Usage

1. Clone the repository:

   ```bash
   git clone https://github.com/boythedream/WorldNews.git
   ```

2. Navigate into the project directory:

   ```bash
   cd WorldNews   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Obtain an API key from [NewsAPI](https://newsapi.org/) and replace `"YOUR_API_KEY"` in `src/components/News.js` with your API key.

5. Start the development server:

   ```bash
   npm run dev
   ```

6. Open your browser and go to `http://localhost:3000` to view the application.



## Acknowledgements

- The data is fetched from the [NewsAPI](https://newsapi.org/).
- This project was created as a part of learning React.js.

