import React, { useEffect, useState } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import queryString from "query-string";

const BalanceList = () => {
  const queryParams = useLocation().search;
  const parsed = queryString.parse(queryParams);
  const fintechNo = parsed.fintechUseNo;
  const [balanceList, setBalanceList] = useState([]);

  useEffect(() => {
    getBalanceList();
  }, []);

  const getBalanceList = () => {
    const accessToken = localStorage.getItem("accessToken");
    let requestOption = {
      url: "/v2.0/account/transaction_list/fin_num",
      method: "GET",
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      params: {
        bank_tran_id: genTrasId(),
        fintech_use_num: fintechNo,
        inquiry_type: "A",
        inquiry_base: "D",
        from_date: "20201212",
        to_date: "20230901",
        sort_order: "D",
        tran_dtime: "20230914103600",
      },
    };

    axios(requestOption).then((response) => {
      console.log(response);

      setBalanceList(response.data.res_list);
    });
  };

  function generateRandom9DigitNumber() {
    const min = 100000000; // Minimum value (smallest 9-digit number)
    const max = 999999999; // Maximum value (largest 9-digit number)

    const random9DigitNumber =
      Math.floor(Math.random() * (max - min + 1)) + min;
    return random9DigitNumber.toString();
  }

  const genTrasId = () => {
    return "M202300440U" + generateRandom9DigitNumber();
  };

  // Render the balanceList as a list
  return (
    <div>
      <ul>
        {balanceList.map((item, index) => (
          <li key={index}>
            순번: {index + 1}, 내용: {item.tran_type}, 거래금액: {item.tran_amt}
            , 잔액: {item.after_balance_amt}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BalanceList;
