import { useState } from "react";

const FuncBtn = () => {
    const [number1, setNumber] = useState(0);
    
    
    return (
        <div>
            <button onClick={() => {
                setNumber(number1 -1);
            }}>-</button>
            <h1 style={{display:'inline'}}>{number1}</h1>
            <button onClick={ () => {
                setNumber(number1 +1);
            }}>+</button>


        </div>
    );
}
export default FuncBtn;