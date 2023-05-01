import React, {Component} from "react";
import {VisaCreditCard as VisaCard} from "react-fancy-visa-card";


class App extends Component {

    pay = (e, data) => {
        console.log(data);

    };

    render() {
        return (
            <div className="App">
            
                <VisaCard 
                
 frontCardColor="#3FBAFF"
 backCardColor="#3FBAFF"
 submitBtnColor="#3FBAFF"
 submitBtnTxt="Pay $350"
                onSubmit={this.pay} />

            </div>
        );
    }
}

export default App;