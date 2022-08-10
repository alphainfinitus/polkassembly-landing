import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './views/Home';
import LaunchApp from './views/LaunchApp';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/launch-app" element={<LaunchApp />} />
      </Routes>
    </div>
  )
}

export default App