import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Following from './pages/Following';
import { publicRoutes } from './routes';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                {publicRoutes.map((route, index) => {
                    const Page = route.component;
                    return <Route path={route.path} element={<Page />} />;
                })}
            </Routes>
        </BrowserRouter>
    );
}

export default App;
