import React, { useState } from "react";
import "./Unitpage.css";

function Unitpage() {
  const [feet, setfeet] = useState("");
  const [meter, setmeter] = useState("");
  const [inches, setinches] = useState("");
  const [cm, setcm] = useState("");
  const [yards, setyards] = useState("");
  const [km, setkm] = useState("");
  const [miles, setmiles] = useState("");

  function calcfeet(e) {
    setfeet(e.target.value);
    let val1 = Number(e.target.value);

    /*    Feet Details
      1 feet = 0.3048 Meter
      1 feet = 12 inches
      1 feet = 30.48cm
      1 feet = 0.333333 yards
      1 feet = 0.0003048 km
      1 feet = 0.000189394 miles 

      */

    const mt = val1 * 0.3048;
    const inc = val1 * 12;
    const ccm = val1 * 30.48;
    const yyards = val1 * 0.333333;
    const kkm = val1 * 0.0003048;
    const mmiles = val1 * 0.000189394;

    setmeter(mt);
    setinches(inc);
    setcm(ccm);
    setyards(yyards);
    setkm(kkm);
    setmiles(mmiles);
  }

  function calcmeter(e) {
    setmeter(e.target.value);
    let val2 = Number(e.target.value);

    /*  Meter Details
  1 meter = 3.28084 feet
  1 meter = 39.3701 inches
  1 meter = 100 cm
  1 meter = 1.09361 yards
  1 meter = 0.001 km
  1 meter = 0.000621371 miles
    */

    const ffeet = val2 * 3.28084;
    const inc = val2 * 39.3701;
    const ccm = val2 * 100;
    const yyards = val2 * 1.09361;
    const kkm = val2 * 0.001;
    const mmiles = val2 * 0.000621371;

    setfeet(ffeet);
    setinches(inc);
    setcm(ccm);
    setyards(yyards);
    setkm(kkm);
    setmiles(mmiles);
  }

  function calcinches(e) {
    setinches(e.target.value);
    let val3 = e.target.value;

    /*   Inches Details
  1 inch = 0.0833333 feet
  1 inch = 0.0254 meter
  1 inch = 2.54 cm
  1 inch = 0.0277778 yards
  1 inch = 0.0000254 km
  1 inch = 0.0000157828 miles */

    const ffeet = val3 * 0.0833333;
    const mmt = val3 * 0.0254;
    const ccm = val3 * 2.54;
    const yyards = val3 * 0.0277778;
    const kkm = val3 * 0.001;
    const mmiles = val3 * 0.0000157828;

    setfeet(ffeet);
    setmeter(mmt);
    setcm(ccm);
    setyards(yyards);
    setkm(kkm);
    setmiles(mmiles);
  }

  function calccm(e) {
    setcm(e.target.value);
    let val4 = e.target.value;

    /* Centimeter Details
  i cm = 0.0328084 feet
  i cm = 0.01 meter
  i cm = 0.393701 inches
  i cm = 0.0109361 yards
  i cm = 0.00001 km
  i cm = 0.00000621371 miles */

    const ffeet = val4 * 0.0328084;
    const mmt = val4 * 0.01;
    const iinch = val4 * 0.393701;
    const yyards = val4 * 0.0109361;
    const kkm = val4 * 0.00001;
    const mmiles = val4 * 0.00000621371;

    setfeet(ffeet);
    setmeter(mmt);
    setinches(iinch);
    setyards(yyards);
    setkm(kkm);
    setmiles(mmiles);
  }

  function calcyards(e) {
    setyards(e.target.value);
    let val5 = e.target.value;
    /*  YARDS
      1 yard =  3 feet
      1 yard =  0.9144 meter
      1 yard =  36 inches
      1 yard =  91.44 cm
      1 yard =  0.0009144 km
      1 yard =   0.000568182 miles
       */

    const ffeet = val5 * 3;
    const mmt = val5 * 0.9144;
    const iinch = val5 * 36;
    const ccm = val5 * 91.44;
    const kkm = val5 * 0.0009144;
    const mmiles = val5 * 0.000568182;

    setfeet(ffeet);
    setmeter(mmt);
    setinches(iinch);
    setcm(ccm);
    setkm(kkm);
    setmiles(mmiles);
  }

  function calckm(e) {
    setkm(e.target.value);
    let val6 = e.target.value;

    /*      KILOMETERS
      1 km = 3280.84 feet
      1 km =  1000 meter
      1 km =  39370.1 inches
      1 km = 100000 cm
      1 km = 1093.61 yards
      1 km = 0.621371 miles*/

    const ffeet = val6 * 3280.84;
    const mmt = val6 * 1000;
    const iinch = val6 * 39370.1;
    const ccm = val6 * 100000;
    const yyards = val6 * 1093.61;
    const mmiles = val6 * 0.621371;

    setfeet(ffeet);
    setmeter(mmt);
    setinches(iinch);
    setcm(ccm);
    setyards(yyards);
    setmiles(mmiles);
  }

  function calcmiles(e) {
    setmiles(e.target.value);
    let val7 = e.target.value;

    /*   MILES

      1 mil = 5280 feet
      1 mil =   1609.34 meter
      1 mil =  63360 inches
      1 mil =  160934 cm
      1 mil =  1760 yards
      1 mil =  1.60934 km */

    const ffeet = val7 * 5280;
    const mmt = val7 * 1609.34;
    const iinch = val7 * 63360;
    const ccm = val7 * 160934;
    const yyards = val7 * 1760;
    const kkm = val7 * 1.60934;

    setfeet(ffeet);
    setmeter(mmt);
    setinches(iinch);
    setcm(ccm);
    setyards(yyards);
    setkm(kkm);
  }

  return (
    <div className="container">
      <p className="title">Unit Convertor</p>
      <div className="unitname-wrapper">
        <div className="feet-container outer-box">
          <label className="feet">Feet</label>
          <input
            type="number"
            value={feet}
            placeholder="Feet"
            className="feet input"
            onChange={(e) => calcfeet(e)}
          ></input>
        </div>

        <div className="meter-container outer-box">
          <label className="meter">Meter</label>
          <input
            type="number"
            value={meter}
            placeholder="Meter"
            className="meter input"
            onChange={(e) => calcmeter(e)}
          ></input>
        </div>

        <div className="inch-container outer-box">
          <label className="inches">Inches</label>
          <input
            type="number"
            value={inches}
            placeholder="Inches"
            className="inches input"
            onChange={(e) => calcinches(e)}
          ></input>
        </div>

        <div className="cm-container outer-box">
          <label className="cm">Cm</label>
          <input
            type="number"
            value={cm}
            placeholder="Cm"
            className="cm input"
            onChange={(e) => calccm(e)}
          ></input>
        </div>

        <div className="yards-container outer-box">
          <label className="Yards">Yards</label>
          <input
            type="number"
            value={yards}
            placeholder="Yards"
            className="yards input"
            onChange={(e) => calcyards(e)}
          ></input>
        </div>

        <div className="km-container outer-box">
          <label className="Kilometers">Kilometers</label>
          <input
            type="number"
            value={km}
            placeholder="Kilometers"
            className="km input"
            onChange={(e) => calckm(e)}
          ></input>
        </div>

        <div className="miles-container outer-box">
          <label className="Miles">Miles</label>
          <input
            type="number"
            value={miles}
            placeholder="Miles"
            className="miles input"
            onChange={(e) => calcmiles(e)}
          ></input>
        </div>
      </div>
    </div>
  );
}

export default Unitpage;
