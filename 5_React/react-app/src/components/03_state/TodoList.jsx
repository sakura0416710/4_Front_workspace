import { useState } from "react";

const TodoList = () => {
//하나의 todo가 {번호, 할일내용,완료여부}를 한묶음으로 가지고 있는게 필요 => 객체형식 사용
//최종형태 : 객체 배열[{}, {}, {}...]
    const [todo, setTodo] = useState([
        {no : 1, content:'React시험준비',checked: false},
        {no : 2, content: '운동하기', checked : false},
        {no : 3, content: '책 읽기', checked : false}
    ]); 
    const [no, setNo] = useState(4);
    const insertTodo = () => {
        setTodo([...todo, {no:no, content:inputTodo, checked:false}]);  //배열을 추가하면 됨. 
                                                                      //예전에 했던 것(todo는 배열인데 todo그대로 넣으면 이중배열되니까 ...으로 내용만 넣어주긴) + 추가할 내용까지
        setNo(no+1);
        setInputTodo(''); //쓰고나서 input칸이 지워지길 바람.
       
    }
    const [inputTodo, setInputTodo] = useState();
    const inputContent = (e) => {
        setInputTodo(e.target.value);
    }
    const changeChecked = (no) => {
        //todo 안에 있는 요소를 비교해서 배열 안 요소랑 내가 누른 요소랑 같으면 상태변경
        setTodo(todo.map( (element) => {    //element(객체)를 가져오기
                                            //상태변경할거니까 setTodo()로 감싸주기
        //true: element나열상태로 넣어주고 그 중checked만 변경해주기      false:그대로 놔두기
        //출력하려면 return써주기
            return element.no === no ?{...element, checked:!element.checked}: element         
        }));
    }

    const changeCheckedIndex = (no) => {
        setTodo(todo.map( (element, index) => 
            index === no ? {...element, checked : !element.checked}:element
        ));
    }

    const deleteTodo = (index) => {
        //Array.filter() :배열의 각 요소를 돌면서 함수 실행, 조건에 맞는 요소만을 갖는 배열을 반환하는 특징이 있다
        //삭제 : 내가 누른 숫자랑 일치하지 않는 index/no애들만 추출해서 남겨두면 됨
        //element = item이라 생각 i = 내가 고른 애
        setTodo(todo.filter((item, i)=> {
            return index !== i;

        }));
    }

    const deleteTodoNo = (no) => { //?
        setTodo(todo.map( (element, no) => {
            index===no? {...element} : {}
        }));
    }
    
    return(
        <div className ='todo'>
            <table>
                <thead>
                    <tr>
                        <th>번호</th>
                        <th>할 일 내용</th>
                        <th>완료 여부</th>
                        <th>삭제</th>
                    </tr>
                </thead>
                <tbody> 
                    {/* 출력: {}사용 
                    자바 스크립트에서 '배열의 요소'를 다 검사해주는 것 : map(element,index,array )*/}

                       {todo.map( (element, index) => {
                            return ( 
                            //return을 해야 출력이 됨.아니며 걍 자기혼자 map검사로 끝남
                            //element : 배열 안의 요소 > todo는 객체 배열이므로 객체(no,content,checked)가 담겨있음.
                            <tr style={element.checked ? {textDecoration : 'line-through'}: {}}>
                                <td>{element.no}</td>
                                <td>{element.content}</td>
                                {/* <td onClick={() => {changeChecked(element.no)}}>{element.checked ? 'O' : 'X'}</td>   <= no로 순서바꾸기*/} 
                                <td onClick={() => {changeCheckedIndex(index)}}>{element.checked ? 'O' : 'X'}</td>
                                {/* 페이지 열자마자 바로 실행되도록 () => {함수()} */}
                                <td><button onClick={() => {deleteTodo(index)}}>index로 삭제</button></td>
                                <td><button onClick={() => {deleteTodoNo(no)}}>no로 삭제</button></td>
                            </tr> 
                            )
                      })}

                </tbody>
            </table>
            <br/>
            <input type="text" onChange={inputContent} value={inputTodo}/>
            <button onClick={insertTodo}>할 일 등록</button>
                                                    {/* value부분 : 이때 빈 칸이 다시 돌아오게 됨 */}
       
       
       
        </div>
    )
}

export default TodoList;