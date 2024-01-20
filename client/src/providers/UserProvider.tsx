import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase";
import { useEffect, useState , createContext} from "react";
import Axios from 'axios';
import Router from "../Router";
import { base } from "../BaseURL";


export const UserData = createContext({});

const UserProvider: React.FC = () => {
    const [user] = useAuthState(auth);
    const [getData , setGetData] = useState({});
    useEffect(() => {
        if (!user) {
            setGetData({});
            return;
        }
        Axios.get(`${base}/api/user/get?username=&email=${user.email}`)
        .then((res:any) => {
            if(!res || res.length === 0) return;
            setGetData(res.data);
        })
        .catch((error:any) => {
            console.log(error);
        });
    }, [user]);
    return (
        <UserData.Provider value={getData}>
            <Router/>
        </UserData.Provider>
    );
}

export const logout = () => {
    auth.signOut();
}

export default UserProvider;