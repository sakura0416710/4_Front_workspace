    //const propsEx2 =(props) => {
    //class에선 this.props로 접근해서 인자를 받아오지만 함수에서는 다름
    //함수 접근 :함수의 인자에 props를 적고 {props.접근하고싶은 변수} 
    // const {today='초코민트', tomorrow='민트초코'} = props; 디폴트 값 넣기 => 비구조 할당

  const propsEx2 = ({today='초코민트', tomorrow='민트초코', children}) => { //이렇게 한 번에 넣어도 됨
    return (
            <div>
                {/* <div>오늘 먹은 음식은 {props.today} 입니다</div> */}
                <div> 오늘 먹은 음식은 {today}입니다.</div>
                <div> 내일 먹을 음식은 {tomorrow}입니다.</div>
                <div> 어제 먹은 음식은 {children} 입니다.</div>

            </div> 
         );
    
}
export default propsEx2;