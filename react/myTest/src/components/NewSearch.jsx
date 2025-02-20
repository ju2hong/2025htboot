import React, { useState } from "react";
import axios from "axios";
import SearchInputComponents from "../list/SearchInput";
import NewsListComponents from "../list/NewList";

const NewsSearch = () => {
  const [searchValue, setSearchValue] = useState("");
  const [newsList, setNewsList] = useState([]);

  const handleChange = ({ target }) => {
    const { value } = target;
    console.log(value);
    setSearchValue(value);
  };
  const handleClick = () => {
    console.log("hello");
    // axios 요청 작성하기
    const apiKey = "";
    axios
      .get(
        `https://newsapi.org/v2/everything?q=tesla&from=2025-01-20&sortBy=publishedAt&apiKey=9eb53ee18aa1440a85d1fa5746093886`
      )
      .then((response) => {
        console.log(response);
        setNewsList(response.data.articles);
      });
  };

  return (
    <div>
      <SearchInputComponents
        handleChange={handleChange}
        handleClick={handleClick}
      ></SearchInputComponents>
      <NewsListComponents newsList={newsList}></NewsListComponents>
    </div>
  );
};

export default NewsSearch;
