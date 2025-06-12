import { Component } from "react";

class ClassButton extends Component {
    constructor(props){
        super(props);
        this.state = {number1:0};
        
    }
    render (){
        const {number1} = this.state;
        return (
            <div>
                <button onClick={() => {
                    this.setState({number1 : number1 -1})
                }}>-</button>&nbsp;&nbsp;
                <h1 style={{display: 'inline'}}>{number1}</h1>&nbsp;&nbsp;
                <button onClick={() => {
                    this.setState({number1 : number1 +1})
                }}>+</button>
            </div>
            
        )
    }
    
}
export default ClassButton;