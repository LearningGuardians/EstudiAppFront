import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Grid from '@mui/material/Grid';
import OperativePlan from './components/OperativePlan';
import ClockPicker from './components/ClockPicker';
import { List } from '@mui/material';
import FirstOperative from './Pages/FirstOperative';
import { Container } from '@mui/system';
import CreateView from './Pages/CreateOperativePlan';

function App() {
  return (
    <div className="App">
      {/* <FirstOperative /> */}
      {/* <OperativePlan /> */}
      {/* <Container maxWidth="sm"> */}
        {/* <ClockPicker /> */}
      {/* </Container> */}
      <CreateView />
      

    </div>
  );
}

export default App;
