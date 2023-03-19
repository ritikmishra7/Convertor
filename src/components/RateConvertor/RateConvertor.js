import React, { useState, useEffect } from "react";
import CoinPicker from "./CoinPicker";
import "./RateConvertor.css";
import { SwapOutlined } from '@ant-design/icons';
import 'antd/dist/reset.css'


function RateConvertor() {
    //main-exchange
    const [leftcoin, setLeftCoin] = useState(1);
    const [rightcoin, setRightCoin] = useState(0);
    const [from, setFrom] = useState('btc');
    const [to, setTo] = useState('eth');

    async function fetchData() {
        // try {
        if (leftcoin.length != 0 && leftcoin != 0) {

            const apiURL = `https://api.coinconvert.net/convert/${from}/${to}?amount=${leftcoin}`;
            const response = await fetch(apiURL);
            const resJSON = await response.json();
            const newTo = to.toUpperCase()
            setRightCoin(resJSON[newTo]);
        }

        // } catch (error) {
        //     console.log(error," Error occurred");
        // }
    }
    function updateLeftCoin(data) {
        setLeftCoin(data);
    }
    function updateRightCoin(data) {
        setRightCoin(data);
    }

    function handleFrom(e) {
        setFrom(e);
    }

    function handleTo(e) {
        setTo(e);
    }

    function swapValues() {
        const fromTemp = from;
        const toTemp = to;
        handleFrom(toTemp);
        handleTo(fromTemp);
    }

    useEffect(() => {
        fetchData();
    }, [from, to, leftcoin]);


    return <div className="mainParent">
        <div className="main">
            <h1 className="brand-name">Crypto Convertor</h1>
            <p className="sub-head">Check exchange rates instantly!</p>
        </div>
        <div className="content">
            <CoinPicker cname="left-picker" vvalue={leftcoin} nname="left" setThis={updateLeftCoin} handleChange={handleFrom} svalue={from} />
            <SwapOutlined className="swap-icon" onClick={swapValues} />
            <CoinPicker cname="right-picker" vvalue={rightcoin} nname="right" setThis={updateRightCoin} handleChange={handleTo} svalue={to} />
        </div>
    </div>;
}

export default RateConvertor;
