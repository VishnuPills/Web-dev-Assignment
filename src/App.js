import "./App.css";
import Header from "./components/Header";
import SignUp from "./components/SignUp";
import AuthProvider from "./contexts/AuthContext";

import SignUpdoosra from "./components/SignUpdoosra";
import { auth } from "./components/Firebasea";
import { selectUser } from "./features/userSlice";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { login, logout } from "./features/userSlice";
import Contentreg from "./components/Contentreg";
import ReduxSignup from "./components/ReduxSignup";

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        dispatch(
          login({
            email: userAuth.email,
            uid: userAuth.uid,
            displayName: userAuth.displayName,
          })
        );
      } else {
        dispatch(logout());
      }
    });
  }, []);
  return (
    <>
      {!user ? <ReduxSignup /> : <><Header/><Contentreg /></>}
      
      
    </>
  );
}

export default App;
