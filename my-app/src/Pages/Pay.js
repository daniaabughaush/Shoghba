import styled from "@emotion/styled";
import React from "react";
import { FaCcVisa } from "react-icons/fa";
import { BsCashCoin } from "react-icons/bs";
import { useState } from "react";
import VisaCard from './VisaCard'
const Pay = ({ visaForm }) => {
  const [style, setStyle] = useState("payForm");
  function visaForm() {
    setStyle("showPyForm");
  }
  function hideVisa() {
    setStyle("payForm");
  }
  return (
    <div>
      <div className="genderCheck payBox">
        <p>اختر طريقة الدفع</p>

        <div className="payMethod">
          <label className="form-check-label payLabel" for="flexRadioDefault1">
            {" "}
            الدفع النقدي <BsCashCoin class="payIcon" />
          </label>
          <input
            className=""
            type="radio"
            name="flexRadioDefault"
            id="flexRadioDefault1"
            onChange={hideVisa}
          />
        </div>

        <div className="payMethod">
          <label className="form-check-label payLabel " for="flexRadioDefault2">
            {" "}
            الدفع عن طريق البطاقة البنكية <FaCcVisa class="payIcon" />
          </label>
          <input
            type="radio"
            name="flexRadioDefault"
            id="flexRadioDefault2"
            onChange={visaForm}
          />
        </div>
        <div className={style}>
          {/* <div className="visaForm"> */}
           <VisaCard className="visaMedia"/>
          {/* </div> */}
        </div>
      </div>

      {/* <div class=" radioFlex">
        <label class="form-check-label " for="flexRadioDefault2">
          {" "}
          اختر طريقة الدفع{" "}
        </label>
        <input
          class="form-check-input "
          type="radio"
          name="flexRadioDefault"
          id="flexRadioDefault2"
          onChange={visaForm}
        />
      </div> */}
    </div>
  );
};

export default Pay;
