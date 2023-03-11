import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { publicRoutes } from '@/Routes';
import { DefaultLayout } from '@/Components/Layouts/';
import { Fragment } from 'react';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                {publicRoutes.map((route, index) => {
                    const Page = route.component;
                    // const Layout = route.layout === null ? Fragment : DefaultLayout;
                    let Layout = DefaultLayout;

                    if(route.layout){
                        Layout = route.layout
                    }else if(route.layout === null) {
                        Layout = Fragment
                    }

                    return (
                        <Route
                            key={index}
                            path={route.path}
                            element={
                                <Layout>
                                    <Page />
                                </Layout>
                            }
                        />
                    );
                })}
            </Routes>
        </BrowserRouter>
    );
}

export default App;
