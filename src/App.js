import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import { WelcomePage } from './components/WelcomePage';
import { ClothesPage } from './components/ClothesPage';
import { OutfitsPage } from './components/OutfitsPage';

function App() {
  return (
    <Routes>
      <Route path='/' element={<WelcomePage/>}/>
      <Route path='/clothes' element={<ClothesPage/>}/>
      <Route path='/outfits' element={<OutfitsPage/>}/>
    </Routes>
  );
}

export default App;
