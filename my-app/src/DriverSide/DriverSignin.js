import React from 'react';
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBCheckbox,
  MDBIcon,

}

from 'mdb-react-ui-kit';


function SignIn() {

  return (
    <MDBContainer fluid className='p-4 background-radial-gradient overflow-hidden'>
<div id="background-wrap" style={{backgroundColor: "rgba(63, 186, 255,.1)"}}
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
      <MDBCol md='6' className='position-relative'>

<div id="radius-shape-1" className="position-absolute rounded-circle shadow-5-strong"></div>
<div id="radius-shape-2" className="position-absolute shadow-5-strong"></div>

<MDBCard className='my-5 bg-glass'>

    <h1 className='signUpH1'>  بوابه السائق  </h1>
  <MDBCardBody className='p-5'>

    <label htmlFor='email' className='signUpLabel'>البريد الالكتروني</label>
    <MDBInput style={{borderColor:"#3fbaff"}} wrapperClass='mb-4' id='form3' type='email'/>
        <label htmlFor='password' className='signUpLabel'> الرقم السري</label>
    <MDBInput style={{borderColor:"#3fbaff"}} className='labelSignUp' wrapperClass='mb-4' id='form4' type='password'/>
    <p className='wordInLine'>أو</p>  
    <label htmlFor='password' className='signUpLabel'> رقم الهاتف </label>
    <MDBInput style={{borderColor:"#3fbaff"}} className='labelSignUp' wrapperClass='mb-4' id='form4' type='tel'/>

    <div className='d-flex justify-content-center mb-4'>
    <button className='btnSubmit'>تسجيل الدخول</button>
      {/* <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Subscribe to our newsletter' /> */}
    </div>
  </MDBCardBody>
</MDBCard>

</MDBCol>
<MDBCol md='6' className='text-center  d-flex flex-column my-5 py-5'>

<h1 className="my-5 display-3 fw-bold ls-tight px-3" style={{color: "#3abaff",textAlign:"center"}}>
  اهلا بك  الى فريقنا <br />
  <span style={{color: 'hsl(218, 81%, 75%)'}}>هنا طريق النجاح  </span>
</h1>

<p className='px-3' style={{color: "black",fontSize:"1.5rem"}}>
 اهلا بك شريكنا العزيز</p>

</MDBCol>

      

      </MDBRow>

    </MDBContainer>
  );
}

export default SignIn;