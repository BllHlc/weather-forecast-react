import './App.scss';
import Main from './components/Main/index';
import { MainContextProvider } from './context/MainContext';

function App() {

  return (
    <MainContextProvider >
      <Main />
    </MainContextProvider>
  );
}

export default App;
