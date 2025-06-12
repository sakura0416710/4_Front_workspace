import { useState } from "react";

const FuncNamejob = () => {
    //이름을 입력하고 커서가 밖으로 나가면 span에 이름 출력 : onBlur, OnMouseLeave
    //직업을 입력할 때마다 span에 직업 출력: onChange
    
    // const [typeName, setTypeName] = useState('');
    // const [userName, setUserName] = useState('');
    // const [Job, setJob] = useState('');

    const[name, setName] = useState();
    const[job, setJob] = useState();

    const changeName =(e)=>{
        setName(e.target.value)   //e.target : 이벤트가 있는 input
                                  //e.target.value : 이벤트가 있는 input의 값을 가져옴
    }
    const changeJob = e => {
        setJob(e.target.value) 
    }


    return(

        <div>
           {/* <input placeholder="이름을 입력하세요" 
            onChange={(e) => {
                setTypeName(e.target.value)}} 
            onMouseLeave={() => {setUserName(typeName)}}/>

            <input placeholder="이름을 입력하세요" 
            value={Job}
            onChange={(e)=> {
                setJob(e.target.value)}}/>
            <br/>
            <span>이름 : {userName} </span><br/>
            <span>직업 : {Job} </span> */}

            <input placeholder="이름을 입력하세요" onMouseLeave={changeName}/>
            <input placeholder="직업을 입력하세요" onChange={changeJob} /> <br/>
            <span>이름 : {name} </span><br/>
            <span>직업 : {job} </span>



        </div>
    );
}
export default FuncNamejob;