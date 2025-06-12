import { Component } from "react";
//import { } : 고정된 이름. export할 때 차이가 남. export {Test}; 이렇게 하면 강제성이 생긴다.
//{대문자시작명} : 리액트/HTML요소랑 구분이 가능하기 때문임.

class Test extends Component { //컴포넌트 상속받아 사용하기
    render() { //실행 함수 render()
        return <div>클래스형 컴포넌트 입니다. </div>
        
    }

}
export {Test}; //외부에서도 사용할 수 있게끔 export.
//named export :default빼고 {강제성을 띈 대문자 시작명} 