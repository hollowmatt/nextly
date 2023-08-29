import { useEffect, useState } from "react";
import firebase from "../firebase";
import { set } from "date-fns";

export default function useAuth() {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const unsub = firebase.auth().onAuthStateChanged((user) => {
            if(user) {
                setUser(user);
            } else {
                setUser(null);
            }
        });
        return () => unsub();  
    }, []);

    return user;
}