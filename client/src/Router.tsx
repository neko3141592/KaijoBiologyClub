import {BrowserRouter , Routes , Route} from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Header from './components/Header';
import Login from './components/Login';
import Blogs from './components/Blogs';
import SignUp from './components/SignUp';

const Router:React.FC = () => {
    return (
        <BrowserRouter>
            <Header/>
            <div className='main'>
                <Routes>
                    <Route path={'/'} element={<Home/>}/>
                    <Route path={'/login'} element={<Login/>}/>
                    <Route path={'/blogs'} element={<Blogs/>}/>
                    <Route path={'/signup'} element={<SignUp/>} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default Router; 