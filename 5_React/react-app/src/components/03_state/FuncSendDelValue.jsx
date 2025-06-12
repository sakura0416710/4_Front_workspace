import { useState } from "react";

const FuncSendDelValue = () => {
    //값 전달 버튼 누르면 입력한 데이터가 결과로 출력
    //삭제 버튼 누르면 출력되어 있던 데이터를 삭제함
    const [value, setValue] = useState();
    const [text, setText] = useState('값 입력 후 버튼을 눌러주세요');


    return (
        <div>
            <hr/>
            <h1>()</h1>
            <input onChange = {(e) => {setValue(e.target.value)}}/><br/><br/>
            {/* 내가 값을 적을 때마다 input에 선택값이 변경될 수 있도록 함 */}
            <button onClick={() =>{setText(value)}}>값 전달</button>
            <button onClick={() =>{setText('')}}>값 삭제</button>


        </div>
    );
}
export default FuncSendDelValue;