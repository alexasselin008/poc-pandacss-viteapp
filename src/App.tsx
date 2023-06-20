import { css } from '../styled-system/css';
import { Box } from '../styled-system/jsx';
import './App.css';
import { MyBox } from './panda-utils.tsx';

function App() {
  return (
    <div>
        <div className={css({ fontSize: "2xl", fontWeight: 'bold', backgroundColor: "ThreeDShadowdsafdsafsdfasd" })}>Hello 🐼!</div>
        <Box width={"50px"} height={"50px"} backgroundColor={"#fff000"} fill={"icon"} />
        <MyBox width={"12"} height={"12"} backgroundColor={"bg-alias-accent"} UNSAFE_backgroundColor="red" />
        <MyBox width={"12"} height={"12"} UNSAFE_backgroundColor="red"  backgroundColor={"bg-alias-alert"}/>
        <MyBox width={"12"} height={"12"} UNSAFE_backgroundColor="red" />
        <MyBox width={"12"} height={"12"} backgroundColor={"warning-3"}/>
    </div>
  )
}

export default App
