import { Children } from 'react';
import Header from './Header';
import SideBar from './SideBar';

function DefaultLayout({ children }) {
    return (
        <div>
            <Header />
            <div className="content">
                <SideBar />
                <div>{children}</div>
            </div>
        </div>
    );
}

export default DefaultLayout;
