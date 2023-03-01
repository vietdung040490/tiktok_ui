import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import { DefaultLayout, Layout2 } from './components/Layout';
import { publicRoutes } from './routes';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                {publicRoutes.map((route, index) => {
                    const Page = route.component;
                    return <Route key={index} path={route.path} element={<Page />} />;
                })}
            </Routes>
        </BrowserRouter>
    );
}

export default App;
