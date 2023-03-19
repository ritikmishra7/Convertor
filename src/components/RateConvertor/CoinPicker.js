import React, { useState, useEffect } from "react";
import { Select, Input } from "antd";
import 'antd/dist/reset.css'
import Supported from "./Supported";
function CoinPicker({ vvalue, nname, cname, setThis, handleChange, svalue }) {
  const selectDefaultBitcoin = nname !== "left" ? false : true;

  const [options, setOptions] = useState([]);
  useEffect(() => {
    try {
      Supported();
    } catch (error) {
      console.log(error);
    }
  },[])
  

  function handleOption(data)
  {
    console.log(data);
  }


  return (
    <div className={cname}>
      {selectDefaultBitcoin ? (
        <>
          <Input
            placeholder="Enter a number"
            size="large"
            value={vvalue}
            onChange={(e) => setThis(e.target.value)}
          />
          <Select
            defaultValue="btc"
            value={svalue}
            style={{
              width: 120,
            }}
            size="large"
            placement="bottomRight"
            onChange={handleChange}
            options={[
              {
                value: "btc",
                label: "Bitcoin",
              },
              {
                value: "eth",
                label: "Ether",
              },
              {
                value: "ltc",
                label: "Litecoin",
              },
              {
                value: "bch",
                label: "Bitcoin Cash",
              },
              {
                value: "eos",
                label: "EOS",
              },
            ]}
          />
        </>
      ) : (
        <>
          <Input
            placeholder="Enter a number"
            size="large"
            value={vvalue}
            disabled
          />
          <Select
            value={svalue}
            defaultValue="eth"
            placement="bottomRight"
            style={{
              width: 120,
            }}
            size="large"
            onChange={handleChange}
            options={[
              {
                value: "eth",
                label: "Ether",
              },
              {
                value: "btc",
                label: "Bitcoin",
              },
              {
                value: "ltc",
                label: "Litecoin",
              },
              {
                value: "bch",
                label: "Bitcoin Cash",
              },
              {
                value: "eos",
                label: "EOS",
              },
            ]}
          />
        </>
      )}
    </div>
  );
}

export default CoinPicker;
