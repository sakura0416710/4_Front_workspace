import { Component } from "react";

class ClassStateExample extends Component {
    constructor(props){ //constructor :생명주기 함수 중 하나. 가장 먼저 실행되며 1회만 실행됨. 부모에게서 받은 prop(읽기전용)를 인자로 전달받기도 함.
        super(props); //여기서 super는 Components ->state를 생성
        this.state = {number1 : 0, number2 : 0}; //객체형식으로 관리해주기 (선언, 초기화 단계)
    }
    render (){
        const {msg} = this.props;
        const {number1, number2} = this.state; //화면에서 버튼 누를 때마다 숫자가 올라가도록 ->render()에서 조작
        return (
            <div>
                <h1>{number1}</h1>
                <button onClick={this.number1SumOne}>{msg}</button>

                <h1>{number2}</h1> 
                {/* 함수 직접 삽입 */}
                <button onClick={ () => {
                    this.setState({number2:number2 -1}) //얘는 render()안에잇으므로 따로 this객체에 접근 안해도 됨
                }}>{msg}</button>

            </div>
        )
    }

    number1SumOne = () => {
        this.setState({number1:this.state.number1+1}); //state값을 세팅하는 메소드. state ->number1에 접근한 뒤 +1 시켜준 거 number1값이다라고 세팅
        
    }
}

export default ClassStateExample;