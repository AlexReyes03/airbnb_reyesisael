import React,{useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Image, Input, Button } from '@rneui/base'
import {isEmpty}  from "lodash";
import { Icon } from '@rneui/base';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

export default function Login (props) {
    const {navigation} = props
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [error, setError] = useState({email:'', password:''});
    const [showpaaword, setShowPassword] = useState(true)

    const handleLogin = () => {
        if(isEmpty(email) || isEmpty(password)){
            setError({
                email:"El correo elecctronico es requerido",
                password:"La password es requerida"
            });
        }else{
            setError({email:"", password:""});
            const auth = getAuth();
                signInWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
    });
        }
    }
    
    return (
        <View style={styles.container}>
            <Image
                source={{ uri: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAAb1BMVEUgJCocFBgcERQfIScbCg1DiZ5Ts85HlasiKzJPqcM0Y3Jl4f8WAAAeGyAXAABk3/8eHSIwVmNXv9waAwZJm7MvUl9Wu9dMortm5P8ZAABh2Plcyug8dokrSVUNAABez+4mN0AoP0lo6v9Rr8o+fpFKKGEAAAABDklEQVR4AcVShQGEIBSlO20F2/1nvO4B7tH8DvBXQAQxAPh8/NIIZVwgJDij5IcmmeKaUs0Vk19UjLWxyHnvkDUe4w9iiEVpHasq5mxZxPBJrBui2q6qulaRpv4ghp7qIQ35jPOhaf9GteMgh2mOpXN9nKfzY7RPbxYdjWyYW1OqHWukiXrBj/ArSkLclr7wPrlli4HQCj6JvLRqW/tG+8Ktm7IlfxKx8Mrse+OWpllds+9GefEMNawDG6akeud6labzYw1vobjD+zQcZwzJ+8N9BhobE6uO866KponhJ33ByTNc+EkfCNpZQrwnxDr9RQOoLXKrc9ZtLloEvlAekmIIMZVHCX5gH21iwT9xAhaWFD8/iELBAAAAAElFTkSuQmCC"}}
                style={{width: 50, height: 50}}
            />
            <View style={{ margin: 16 }} > 
                <Input placeholder='alguien@example.com' label='Correo Electrónico' keyboardType='email-address' 
                inputContainerStyle={{width: '100%'}}
                onChange={({nativeEvent:{text}})=> setEmail(text)}
                errorMessage={error.email}
                />
                <Input placeholder='contraseña' label='Password'inputContainerStyle={{width: '100%'}} secureTextEntry={showpaaword}
                    onChange={({nativeEvent:{text}})=> setPassword(text)}
                    errorMessage={error.password}
                    rightIcon={
                        <Icon
                            onPress={() => setShowPassword(!showpaaword)}
                            type='material-community'
                            name={showpaaword? "eye-outline":"eye-off-outline"}
                        />
                    }
                />
                <Button
                    title={"Inicar sesion"}
                    onPress={handleLogin}
                />
                <Button
                    title={"Crear cuenta"}
                    type='clear'
                    onPress={()=> navigation.navigate('CreateAccountStack')}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:'white'
    }
})