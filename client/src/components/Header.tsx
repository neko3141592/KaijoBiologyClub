import {NavLink} from 'react-router-dom';
import { useState , useEffect, useContext } from 'react';
import './stylesheets/Header.scss';
import { UserData, logout } from '../providers/UserProvider';

const Header = () => {
    const userData = useContext<any>(UserData);
    const [isVisible, setIsVisible] = useState<boolean>(false);
    const toggleVisibility = () => {
    window.scrollY > 10
        ? setIsVisible(true)
        : setIsVisible(false)
    }

    useEffect(() => {
    window.addEventListener('scroll', toggleVisibility)
    return () => window.removeEventListener('scroll', toggleVisibility)
    }, [])
    return (
        <div>
            <div className={isVisible?'list display':'list'}>
                <div className='list-left'>
                    <NavLink to={'/'}>Kaijo Biology Club</NavLink>
                </div>
                <div className='list-right'>
                    <NavLink to={'/about'}>About</NavLink>
                    <NavLink to={'/blogs'}>Blogs</NavLink>
                {
                    (!userData || Object.keys(userData).length === 0)?
                    (
                        <>
                            <NavLink to={'/login'}>Login</NavLink>
                        </>
                    ):(
                        <>
                        <a>{userData.username}</a>
                        <NavLink to={'/'} onClick={logout}>Logout</NavLink>
                        </>
                    )
                }
                </div>
            </div>
        </div>
    );
}

export default Header;