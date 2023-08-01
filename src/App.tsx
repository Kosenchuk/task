import './App.scss';
import {Nav} from "./components/Nav";
import { ConfigProvider } from 'antd';
import {DataCalculation} from "./components/DataCalculation";

function App() {
  return (
      <ConfigProvider theme={{ token: { colorPrimary: '#000000' } }}>
          <Nav />
          <DataCalculation />
      </ConfigProvider>
  );
}

export default App;
