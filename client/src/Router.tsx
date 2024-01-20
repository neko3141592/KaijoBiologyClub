import {BrowserRouter , Routes , Route} from 'react-router-dom';
import Home from './components/Home';
import Header from './components/Header';
import Login from './components/Login';
import './App.css';
import Blogs from './components/Blogs';

const Router:React.FC = () => {
    return (
        <BrowserRouter>
            <Header/>
            <div className='main'>
                <Routes>
                    <Route path={'/'} element={<Home/>}/>
                    <Route path={'/login'} element={<Login/>}/>
                    <Route path={'/blogs'} element={<Blogs/>}/>
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default Router; 