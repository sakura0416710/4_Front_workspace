import { Component} from "react";

class propsEx1 extends Component {
    render() {
        //값을 전달해줌 ( <>사잇값<>도 전달해준다)
        // const {color} = this.props; //props에 접근 후 color변수에 담기
        // const {style} = this.props;
        // const {color, style} = this.props;
        // const dressCode = this.props.children; //props안의 children속성까지 접근.값을 그냥 대입함. {}치면 맞는 key값 찾아줌 value의 리터럴 값까지 접근하게 되므로 이 경우 {]를 쓸 필요가 없음
        const {color, style, children} = this.props;
        return ( 
            <div>
                <div>오늘의 포인트 컬러는 {color}입니다. </div>
                <div>내일의 스타일은 {style} 입니다. </div>
                <div>언제일지 모를 회식 날 드레스 코드는 {/*{dressCode}*/} {children} 입니다. </div>
            </div>
        )
    }
}

propsEx1.defaultProps = {color: '초록', style: '청청'} //key:value형식으로 기본값 설정 가능함. color전송 안했을 경우 초록이 기본으로 뜨게 됨
//propsEx1.defaultProps = {style: '청청'} //key:value형식으로 기본값 설정 가능함. color전송 안했을 경우 초록이 기본으로 뜨게 됨
export default propsEx1;