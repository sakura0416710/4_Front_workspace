import FuncComp from './components/01_component/FuncComponent.jsx'
//이름 지어주기 가능
//외부에서 가져온 component를 태그로 이용하여 쓸 수 있다는 뜻
import {Test} from './components/01_component/ClassComponent.jsx'
import ClassProps from './components/02_props/ClassProps.jsx'
import FuncProps from './components/02_props/FuncProps.jsx'
import ClassStateExample from './components/03_state/ClassStateExample.jsx'
import ClassButton from './components/03_state/ClassOneNumTwoBtn.jsx'
import FuncState from './components/03_state/FuncStateExample.jsx'
import FuncBtn from './components/03_state/FuncOneNumTwoBtn.jsx'
import FuncNamejob from './components/03_state/FuncNamejob.jsx'
import FuncSendDelValue from './components/03_state/FuncSendDelValue.jsx'
import TodoList from './components/03_state/TodoList.jsx'
import './App.css';



function App() {
  return (
    <div>
      <FuncComp/>
      {/* <ClassComp/> */}
      <Test/>
      
      <hr/>

      <h1> props </h1>
      <ClassProps color="빨강"/>
      <ClassProps/>
      <ClassProps color = "노랑" style = "샤랄라" />
      <ClassProps color = "파랑" style = "올블랙">큐티깜찍</ClassProps> 
      {/* children :큐티깜찍 이라고 나오므로 사잇값도 접근가능 */}
      <ClassProps color = "파랑" style = "올블랙">
        <span style={{background:'pink'}}>깜찍큐티</span> 
        {/* 사잇값으로 span이라는 노드를 보냄 */}
        </ClassProps> 

        <FuncProps today='라면'/>
        <FuncProps/>
        <FuncProps today="쫄면" tomorrow="돈까스"/>
        <FuncProps today="집밥" tomorrow="집밥2">
          <mark>어묵</mark>
        </FuncProps>
        <hr/>

        <h1>state</h1>
        <ClassStateExample msg="click!"/>
        <ClassButton/>
        <FuncState/>
        <FuncBtn/>
        <FuncNamejob></FuncNamejob>
        <FuncSendDelValue/>
        <TodoList/>
  
    </div>

  
  )

}

export default App
