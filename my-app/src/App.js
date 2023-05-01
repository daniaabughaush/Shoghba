// import Header from './Header';
import Nav from './Pages/Nav';
import Footer from './Pages/Footer';
import Home from './Pages/Home';
import NewPost from './onother/NewPost';
import PostPage from './onother/PostPage';
import About from './onother/About';
import Partner from './partnerSide/Partner';
import Missing from './Pages/Missing';
import { Route, Switch, useHistory } from 'react-router-dom';
import { useState, useEffect } from 'react';
import SignUp from './CustomerSide/SignUp';
import SignIn from './CustomerSide/SignIn';
import Payment from "./Pages/Payment";
import ShowProduct from './Pages/ShowProduct';
import ParnerJoin from './partnerSide/PartnerJoin';
import PartnerGate from "./partnerSide/PartnerGate";
import DriverJoin from "./DriverSide/DriverJoin";
import DriverGate from "./DriverSide/DriverSignin"
// import JoinUs from './JoinUs';

function App() {
  const API_URL = 'http://localhost:3500/items';

  
  const[items,setStores]=useState([])
// console.log(items);
  useEffect(() => {

  const fetchItems = async () => {
    try {
      const response = await fetch(API_URL);
      if (!response.ok) throw Error('Did not receive expected data');
      const listItems = await response.json();
      setStores(listItems);
    } catch (err) {
      console.log(err)
    } 
  }
  setTimeout(() => fetchItems(), 3000);
  
}, [])

//  console.log(items)
const addItem = async (item) => {
  const id = items.length ? items[items.length - 1].id + 1 : 1;
  const myNewItem = { id, checked: false,name:productName,descreption:descreption,imgSrc:imageUrl,type:type  };
  const listItems = [...items, myNewItem];
  setStores(listItems);

  const postOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(myNewItem)
  }
  const result = await apiRequest(API_URL, postOptions);
  if (result) setFetchError(result);
}
const handelSubmit = (e) => {
  e.preventDefault();
  if (!newItem) return;
  addItem(newItem);
  // setNewItem('');
}
 





  // handelSubmit

  return (
    <div className="App">
      {/* <Header title="React JS Blog" /> */}
      <Nav/>
      
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route exact path="/signin">
          <SignIn
        
          />
        </Route>
        <Route exact path="/signup">
          <SignUp
           
          />
        </Route>
        <Route exact path="/payment">
          <Payment
           
          />
        </Route>
        <Route exact path="/drivergate">
          <DriverGate
           
          />
        </Route>
        <Route exact path="/post">
          <NewPost
                     />
        </Route>
        <Route exact path="/joinp">
          <ParnerJoin/>
                            </Route>
        {/* <Route path="/post/:id">
          <PostPage 
        />
        </Route> */}
      
        <Route path="/partner"
        >
<Partner
setStores={setStores}
items={items}

 />
          </Route>
        <Route path="/product"
        >
<ShowProduct
setStores={setStores}
items={items}
 />
          </Route>
        <Route exact path="/partnergate">
          <PartnerGate/>
        </Route>
        <Route exact path="/driverjoin">
          <DriverJoin/>
        </Route>
        <Route path="*" component={Missing} />
      </Switch>
    
      <Footer/>
    </div>
  );
}

export default App;
