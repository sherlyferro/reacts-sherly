import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'

import Reloj from './pages/Reloj';
import Joya from './pages/Joya';
import Accesorio from './pages/Accesorio';
import Detalle from './pages/Detalle';
import Navbar from './components/Navbar';
import ItemListContainer from './pages/ItemListContainer';


function App() {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path='/' element={<ItemListContainer/>}/>
                <Route path='/relojes' element={<Reloj/>}/>
                <Route path='/joyas' element={<Joya/>}/>
                <Route path='/accesorios' element={<Accesorio/>}/>
                <Route path='/detalle/:id' element={<Detalle/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
