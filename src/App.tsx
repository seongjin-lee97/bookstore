import './App.css'
import Content from './layout/Content'
import Footer from './layout/Footer'
// import ExpensiveComponent from './HookTest'
// import HookCallback from './HookTest'

const App : React.FC = () => {
  return (
    <div className = "App">
      {/* <HookCallback></HookCallback> */}
      <Content></Content>
      <Footer></Footer>
    </div>
  )
}

export default App