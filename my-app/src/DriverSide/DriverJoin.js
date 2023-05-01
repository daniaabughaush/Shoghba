import React from "react";
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
 
} from "mdb-react-ui-kit";

import SafeDelivery from "../images/Delivery boy 2.jpg";
import Profit from "../images/New Stickers.jpg";
import Customers from "../images/MyTaxi Driver.gif";



import { Link } from "react-router-dom";

import { HashLink } from "react-router-hash-link";

function ParnerJoin() {
  //   const myData = [
  //     { text: 'Books', value: 1 },
  //     { text: 'Movies, Music & Games', value: 2 },
  //     { text: 'Electronics & Computers', value: 3 },
  //     { text: 'Home, Garden & Tools', value: 4 },
  //     { text: 'Health & Beauty', value: 5 },
  //     { text: 'Toys, Kids & Baby', value: 6 },
  //     { text: 'Clothing & Jewelry', value: 7 },
  //     { text: 'Sports & Outdoors', value: 8 },
  //     { text: 'Automotive & Industrial', value: 9 }
  // ];
  return (
    <div>
      <MDBContainer
        fluid
        className="p-4 background-radial-gradient overflow-hidden"
      >
        <div
          id="background-wrap"
          style={{ backgroundColor: "rgba(63, 186, 255,.1)" }}
        >
          <div class="bubble x1"></div>
          <div class="bubble x2"></div>
          <div class="bubble x3"></div>
          <div class="bubble x4"></div>
          <div class="bubble x5"></div>
          <div class="bubble x6"></div>
          <div class="bubble x7"></div>
          <div class="bubble x8"></div>
          <div class="bubble x9"></div>
          <div class="bubble x10"></div>
        </div>
        <MDBRow>
          <MDBCol md="6" className="position-relative">
            <div
              id="radius-shape-1"
              className="position-absolute rounded-circle shadow-5-strong"
            ></div>
            <div
              id="radius-shape-2"
              className="position-absolute shadow-5-strong"
            ></div>

            <MDBCard id="joinnow" className="my-5 bg-glass">
              <h1 className="signUpH1"> انضم الى فريقنا الان  </h1>
              <MDBCardBody className="p-5">
                <MDBRow style={{ backgroundColor: "white" }}>
                  <MDBCol col="6">
                    <label htmlFor="lastname" className="signUpLabel">
                      اسم العائلة
                    </label>
                    <MDBInput
                      style={{ borderColor: "#3fbaff" }}
                      wrapperClass="mb-4"
                      id="form1"
                      type="text"
                    />
                  </MDBCol>

                  <MDBCol col="6">
                    <label htmlFor="firstName" className="signUpLabel">
                      الاسم الاول
                    </label>
                    <MDBInput
                      style={{ borderColor: "#3fbaff" }}
                      wrapperClass="mb-4"
                      id="form2"
                      type="text"
                    />
                  </MDBCol>
                </MDBRow>
                {/* <div className='selectJoin'>
  
  <select class="form-select" >
   <option selected class='selectName'>اختر نوع المتجر</option> 
   <option value="1">خزان مياه</option>
  <option value="2">مياه شرب قوارير</option>
  <option value="3">مياه شرب طرود صغيرة</option>
  <option value="3">مياه شرب طرود كبيرة</option>
  <option value="3">قوارير مياه</option>
   <option value="3">مياه غير صالحة للشرب للبرك والمزروعات</option>
 </select> 
    </div> */}

                <br></br>
                <label htmlFor="phoneNumber" className="signUpLabel">
                  رقم الهاتف
                </label>
                <MDBInput
                  style={{ borderColor: "#3fbaff" }}
                  wrapperClass="mb-4"
                  id="form3"
                  type="tel"
                />
                <label htmlFor="email" className="signUpLabel">
                  البريد الالكتروني
                </label>
                <MDBInput
                  style={{ borderColor: "#3fbaff" }}
                  wrapperClass="mb-4"
                  id="form3"
                  type="email"
                />
                <label htmlFor="birthDate" className="signUpLabel">
                  {" "}
                  تاريح الميلاد
                </label>
                <MDBInput
                  style={{ borderColor: "#3fbaff" }}
                  wrapperClass="mb-4"
                  id="form3"
                  type="date"
                />
                <label htmlFor="birthDate" className="signUpLabel">
                  {" "}
                  عنوان السكن بالتفصيل{" "}
                </label>
                <MDBInput
                  style={{ borderColor: "#3fbaff" }}
                  wrapperClass="mb-4"
                  id="form3"
                  type="text"
                />
                <div className="genderCheck">
                  <p>هل تستطيع العمل خارج كحافظتك</p>

                  <div class="">
                    <label class="form-check-label" for="flexRadioDefault1">
                      نعم{" "}
                    </label>
                    <input
                      class="form-check-input"
                      type="radio"
                      name="flexRadioDefault"
                      id="flexRadioDefault1"
                    />
                  </div>

                  <div class=" ">
                    <label class="form-check-label " for="flexRadioDefault2">
                      {" "}
                      لا{" "}
                    </label>
                    <input
                      class="form-check-input "
                      type="radio"
                      name="flexRadioDefault"
                      id="flexRadioDefault2"
                    />
                  </div>
                </div>
                <div className='selectJoin'>
                
                <select class="form-select" >
   <option selected class='selectName'>اذا كانت الاجابة نعم اختر المحاقظة  </option> 
   <option value="1"> الزرقاء</option>
  <option value="2"> عمان </option>
  <option value="3">المفرق   </option>
  <option value="3"> عمان  </option>
  <option value="3"> اربد</option>
   <option value="3"> السلط  </option>
 </select> 
    </div>
    <br />
                <div className="genderCheck">
                  <p>هل تمتلك مركبة</p>

                  <div class="">
                    <label class="form-check-label" for="flexRadioDefault1">
                      نعم{" "}
                    </label>
                    <input
                      class="form-check-input"
                      type="radio"
                      name="flexRadioDefault"
                      id="flexRadioDefault1"
                    />
                  </div>

                  <div class=" ">
                    <label class="form-check-label " for="flexRadioDefault2">
                      {" "}
                      لا{" "}
                    </label>
                    <input
                      class="form-check-input "
                      type="radio"
                      name="flexRadioDefault"
                      id="flexRadioDefault2"
                    />
                  </div>
                </div>
                <br/>
                <div className='selectJoin'>
                
                <select class="form-select" >
   <option selected class='selectName'>اذا كانت الاجابة نعم اختر نوعها   </option> 
   <option value="1"> سيارة</option>
  <option value="2"> دراجة نارية </option>
  <option value="2"> شاحنة  </option>
  <option value="2"> باص  </option>

 </select> 
    </div>
    <br />
                

                <div className="d-flex justify-content-center mb-4">
                  {/* <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Subscribe to our newsletter' /> */}
                </div>

                <div className="d-flex justify-content-center mb-4">
                  <button className="btnSubmit"> ارسل طلب الانضمام </button>
                  {/* <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Subscribe to our newsletter' /> */}
                </div>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          <MDBCol md="6" className="text-center  d-flex flex-column my-5 py-5">
            <div className="d-flex justify-content-center mb-4">
              <button className="btnSubmit btnGate">
                {" "}
                <Link className="gateBtn" to="/drivergate">
                  بوابة السائق
                </Link>{" "}
              </button>
              {/* <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Subscribe to our newsletter' /> */}
            </div>{" "}
            <h1
              className="my-5 display-3 fw-bold ls-tight px-3"
              style={{ color: "#3abaff", textAlign: "center" }}
            >
              انضم الى جغبة <br />
              <span style={{ color: "hsl(218, 81%, 75%)" }}>وكن من النخبة</span>
            </h1>
            <p className="px-3" style={{ color: "black", fontSize: "1.5rem" }}>
              انضم الى جغبة الان والمي واصلتك وين ما كان
            </p>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="whyjoin">
        <h2 className="h2join">لماذا تنضم الى جغبة؟ </h2>
        <div className="images">
          <div class="imgesJoin">
            <img className="imgInPartner" src={SafeDelivery} alt="photo" />
            <p> بيئة عمل امنة</p>
          </div>
          <div class="imgesJoin">
            <img className="imgInPartner" src={Customers} alt="photo" />
            <p> اوقات عمل مريحة </p>
          </div>
          <div class="imgesJoin">
            <img className="imgInPartner" src={Profit} alt="photo" />
            <p>دخل اضافي </p>
          </div>
        </div>
        <br></br>
        <br></br>
        {/* </div> */}
      </div>
      <div className="whyjoin">
       
        <div className="lastINjoin">
          <h1>هل انت مستعد الان؟</h1>
          <HashLink smooth to="#joinnow">
            <button className="lastJoinBtn"> انضم الينا الان </button>
          </HashLink>
          {/* <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Subscribe to our newsletter' /> */}
        </div>
      </div>
    </div>
  );
}

export default ParnerJoin;
