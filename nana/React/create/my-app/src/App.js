import { Link, Route } from 'react-router-dom'
import Home from './view/Home'
import Detail from './view/Detail'


function App() {
  return (
    <div className="App">
      test
      <Link to='/home'>首页</Link>
      <Link to='/detail'>详情页</Link>

      <Route path='/' exact component={Home}></Route>

      {/* <Route path='/home' component={Home}></Route> */}
      <Route path='/detail' component={Detail}></Route>

    </div>
  );
}

export default App;
