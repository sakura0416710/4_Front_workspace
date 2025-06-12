import { useState } from "react";

//ueState() : 함수에서 사용할 수있는 state방식. 값과 값을 수정시킬 Setter묶음으로 관리한다.
const FuncState = () => {
    const [number1, setNumber] = useState(0); //(0):초기값
    const [number2, setNumber2] = useState(0);
    const numberSumOne = () => {
        setNumber(number1 + 1);

    }

    return ( 
        <div>
            <h1>{number1}</h1>
            <button onClick={numberSumOne}>click!</button>

            <h1>{number2}</h1>
            <button onClick={() => {
                setNumber2 (number2 -1);
            }}>click!</button>

        </div>
    );

}
export default FuncState;