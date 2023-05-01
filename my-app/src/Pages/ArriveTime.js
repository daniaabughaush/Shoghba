import React from "react";
import AddNote from "./AddNote.js";

const ArriveTime = () => {
  return (
    <div className="arriveFlex">
      <div className="orderDetails arriveDetails">
        <div className="sendNotes">
          <AddNote />
        </div>
        <div className="arrivrTime">
          <p className="pArrive">وقت الوصول</p>
          <div class="inlineRadio">
            <div>
              <label class="" for="inlineRadio2">
                لاحقا
              </label>
              <input
                class=""
                type="radio"
                name="inlineRadioOptions"
                id="inlineRadio1"
                value="option1"
              />
            </div>

            <div class="">
              <label class="" for="inlineRadio1">
                الان
              </label>
              <input
                class=""
                type="radio"
                name="inlineRadioOptions"
                id="inlineRadio2"
                value="option2"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArriveTime;
