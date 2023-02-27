import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { DefaultLayout } from './components/Layout';
import { publicRoutes } from './routes';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                {publicRoutes.map((route, index) => {
                    const Page = route.component;
                    const LayOut = route.layOut || DefaultLayout;
                    return (
                        <Route
                            key={index}
                            path={route.path}
                            element={
                                <LayOut>
                                    <Page />
                                </LayOut>
                            }
                        />
                    );
                })}
            </Routes>
        </BrowserRouter>
    );
}

export default App;
