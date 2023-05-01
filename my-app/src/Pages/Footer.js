import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import phone from '../images/telephone.png'
import { Link } from 'react-router-dom';
import {AiFillYoutube,AiFillFacebook,AiFillInstagram} from 'react-icons/ai'
import { SiGmail } from "react-icons/si";

// import { AiFillLinkedin } from "react-icons/ai"
import { BsFillTelephoneFill } from "react-icons/bs"
import { FaFax } from "react-icons/fa"
import { icons } from 'react-icons';
const Footer = () => {

  return (
   
    <footer class="footer-distributed textAlign">
    
          <div class="footer-left">
    
          <p class="footer-company-about">
              <span>من جغبة؟ </span>
جغبة هو موقع لتوصيل المياه بكافة انواعها من مياه شرب, وقوارير,وخزانات مياه, وتعبئه برك, الى جميع المستخدمين  </p>
    
            <div class="">
    
              <a href="#"><AiFillYoutube class="footerIcons"/></a>
              <a href="#"><AiFillFacebook class="footerIcons"/></a>
              <a href="#"><AiFillInstagram class="footerIcons"/></a>
              
    
            </div>
    
          </div>
    
          <div class="footer-center">
    
            <div>
              <i class="fa fa-map-marker"></i>
              <p>تواصل معنا</p>
            </div>
    
            <div>
              <i class="fa fa-phone"></i>
              <p><BsFillTelephoneFill/>+1.555.555.5555</p>
         
            </div>
            <div>
              <i class="fa fa-phone"></i>
              <p><SiGmail/>shoghba@gmail.com</p>
            </div>
            <div>
              <i class="fa fa-phone"></i>
              <p><FaFax/>shoghba@gmail.com</p>
            </div>
    
            {/* <div>
              <i class="fa fa-envelope"></i>
              <p><a href="mailto:support@company.com">support@company.com</a></p>
            </div> */}
    
          </div>
    
          <div class="footer-right">
          <h2>

<Link style={{ textDecoration: 'none', color:"white"}} to="/">جُــغــبة</Link>
</h2>
    
            <p class="footer-links">
              <a href="#" class="link-1">سياسة الخصوصية</a>
              <a href="#">الصفحة الرئيسية</a>            
                          <a href="#">اسئلة واجابات متكررة</a>
             </p>
    
            <p class="footer-company-name">shoghba © 2023</p>
            
          </div>
    
        </footer>
  );
}
export default Footer
