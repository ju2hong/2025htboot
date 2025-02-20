import React from "react";
import axios from "axios";
const AxiosComponent = () => {
  const handleClick = () => {
    axios
      .get(
        "https://newsapi.org/v2/everything?q=tesla&from=2025-01-20&sortBy=publishedAt&apiKey=9eb53ee18aa1440a85d1fa5746093886"
      )
      .then((res) => {
        console.log(res);
      });
  };

  return (
    <div>
      <button onClick={handleClick}>요청생성</button>
    </div>
  );
};

export default AxiosComponent;
