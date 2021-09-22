import logo from './logo.svg';
import './App.css';
// import { DatePicker } from 'antd';
import 'antd/dist/antd.css';

function App() {
  return (
    <div className="App">
      <h1>
        <a id="logo" href="/">
          <img src={logo} alt="logo" />
          Ant Design
        </a>
      </h1>
    </div>
  );
}

export default App;
