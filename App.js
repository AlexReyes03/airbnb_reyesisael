import React, { useEffect, useState } from "react";
import './gesture-handler';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { StyleSheet } from 'react-native';
import Navigation from './src/navigation/Navigation';
import Loading from "./src/kernel/components/Loading";
import NavigationLogger from "./src/navigation/NavigationLogger";
import { LogBox } from "react-native";
LogBox.ignoreAllLogs(true);

import { app } from './src/config/utils/firebaseConnection';

export default function App() {
  const [login, setLogin] = useState(false);
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    const auth = getAuth(app);
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setLogin(true);
        console.log("Bienvenido");
        console.log(user.email);
      } else {
        setLogin(false);
        console.log("No se pudo iniciar sesión");
      }
      setLoader(false);
    });
  }, []);

  if (loader) {
    return (
      <Loading 
        isVisible={true} 
        size={64} 
        color='#4abfa4' 
        title='Espere un momento...' 
      />
    );
  } else {
    return login ? <NavigationLogger /> : <Navigation />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white"
  }
});
