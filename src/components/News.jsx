import React, { useState, useEffect } from "react";
import NewsItem from "./NewsItem";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

const News = ({ country = "in", pageSize = 8, category = "General" }) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      let url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=bd7bf74608c349828fcf0ff352406de0&page=${page}&pageSize=32`;
      try {
        const response = await fetch(url);
        const data = await response.json();
        setArticles((prevArticles) => [...prevArticles, ...data.articles]);
        setTotalResults(data.totalResults);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    fetchData();
    document.title = `${capitalizeFirstLetter(category)} - WorldNew`;
  }, [country, category, page, setLoading]);

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const fetchMoreData = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const ButtonOnPrev = () => {
    setPage((prevPage) => prevPage - 1);
  };

  const ButtonOnNext = async () => {
    if (Math.ceil(page + 1 > totalResults / 20)) {
      // Add your logic here if needed
    } else {
      let url = `https://newsapi.org/v2/top-headlines?countries=${country},in&apiKey=bd7bf74608c349828fcf0ff352406de0&page=${page + 1}&pageSize=32`;

      try {
        const response = await fetch(url);
        const data = await response.json();
        setArticles(data.articles);
        setPage((prevPage) => prevPage + 1);
        setTotalResults(data.totalResults);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
  };

  return (
    <div className="container my-3">
      <h1 className="text-center">
        CricketNews-Top Headlines on {capitalizeFirstLetter(category)}
      </h1>
      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={true}
        loader={<h4>Loading...</h4>}
      >
        <div className="row">
          {articles.map((element) => (
            <div className="col-md-4" key={element.url}>
              <NewsItem
                title={element.title ? element.title.slice(0, 40) : ""}
                description={
                  element.description ? element.description.slice(0, 80) : ""
                }
                newsUrl="Todos"
                ImageUrl={element.urlToImage}
                newId={element.url}
                loading={loading}
              />
            </div>
          ))}
        </div>
      </InfiniteScroll>
      <div className="container d-flex justify-content-between">
        <button
          disabled={page <= 1}
          onClick={ButtonOnPrev}
          type="button"
          className="btn btn-dark"
        >
          &larr; Previous
        </button>
        <button
          disabled={page + 1 > totalResults / 26}
          onClick={ButtonOnNext}
          type="button"
          className="btn btn-dark"
        >
          Next &rarr;
        </button>
      </div>
    </div>
  );
};

News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
};

export default News;
