import { BrowserRouter, Routes, Route } from 'react-router';
import './styles.css';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import MyPond from './pages/MyPond';
import DuckPage from './pages/DuckPage';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<MainLayout />}>
                    <Route index element={<Home />} />
                    <Route path='mypond' element={<MyPond />} />
                    <Route path='ducks/:duckId' element={<DuckPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
