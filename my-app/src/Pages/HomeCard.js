import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import drinkImg from "../images/drink.jpg";
import qarora from "../images/manQarora.jpg";
import smallWater from "../images/smallWater.jpg";
import bigWater from "../images/bigWater.jpg";
import waterTrunk from "../images/trunkWater.jpg";
import trunkWater from "../images/water-tank.png";
import cupWater from "../images/cupWater.jpg";


const HomeCard = () => {
  return (
    <div className="cardsHero">
      <div>
        <Card.Body className="cardBody">
        < div className="inside">
          <Card.Title>طرد مياه  حجم كبير </Card.Title>
          <Card.Text> طرد مياه  قنينة من الحجم الكبير</Card.Text>
          </div>
          {/* <div className="d-flex justify-content-between">
              <Button className="ms-3">Add</Button>
              <Button className="me-3">Remove</Button>
            </div> */}
          <Card.Img className="cardImg" src={bigWater} />
        </Card.Body>
      </div>
      <div>
        <Card.Body className="cardBody">
        < div className="inside">
          <Card.Title>طرد مياه  حجم صغير </Card.Title>
          <Card.Text> طرد مياه  قنينة من الحجم الصغير</Card.Text>
          </div>
          {/* <div className="d-flex justify-content-between">
              <Button className="ms-3">Add</Button>
              <Button className="me-3">Remove</Button>
            </div> */}
          <Card.Img className="cardImg" src={smallWater} />
        </Card.Body>
      </div>
      <div>
        <Card.Body className="cardBody">
          < div className="inside">
          <Card.Title>مياه غير صالحة للشرب</Card.Title>
          <Card.Text>مياه لري المزروعات , وتعبئة البرك</Card.Text>
          </div>
          {/* <div className="d-flex justify-content-between">
              <Button className="ms-3">Add</Button>
              <Button className="me-3">Remove</Button>
            </div> */}
          <Card.Img className="cardImg" src={trunkWater} />
        </Card.Body>
      </div>
      <div>
        <Card.Body className="cardBody">
          < div className="inside">
          <Card.Title> حزان ماء صالح للشرب</Card.Title>
          <Card.Text> تعبئه خزان المياه</Card.Text>
          </div>
          {/* <div className="d-flex justify-content-between">
              <Button className="ms-3">Add</Button>
              <Button className="me-3">Remove</Button>
            </div> */}
          <Card.Img className="cardImg" src={waterTrunk} />
        </Card.Body>
      </div>
      <div>
        <Card.Body className="cardBody">
          < div className="inside">
          <Card.Title> قوارير مياه </Card.Title>
          <Card.Text> قوارير مياه من افضل الشركات </Card.Text>
          </div>
          {/* <div className="d-flex justify-content-between">
              <Button className="ms-3">Add</Button>
              <Button className="me-3">Remove</Button>
            </div> */}
          <Card.Img className="cardImg" src={qarora} />
        </Card.Body>
      </div>
      <div>
        <Card.Body className="cardBody">
          < div className="inside">
          <Card.Title> كاسات مياه</Card.Title>
          <Card.Text>  طرود مياه كاسات شرب حجم صغير </Card.Text>
          </div>
          {/* <div className="d-flex justify-content-between">
              <Button className="ms-3">Add</Button>
              <Button className="me-3">Remove</Button>
            </div> */}
          <Card.Img className="cardImg" src={cupWater} />
        </Card.Body>
      </div>
    
  
    </div>
  );
};

export default HomeCard;
