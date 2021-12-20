import Modal from 'react-modal';
import './App.css';
import { Home } from './pages/Home';

Modal.setAppElement('#root')

function App() {
  return (
    <div className="App">
      <Home />
    </div>
  );
}

export default App;
