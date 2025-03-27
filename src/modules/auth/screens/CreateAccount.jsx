import React, { useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Image, Input, Button } from '@rneui/base'
import { isEmpty } from 'lodash'
import { Icon } from '@rneui/base'

export default function CreateAccount() {

const [email, setEmail] = useState('')
const [password, setPassword] = useState('')
const [password2, setPassword2] = useState('')
const [error, setError] = useState({email: '', password: '', password2: ''})
const [showPassword, setShowPassword] = useState(true)
const [showPassword2, setShowPassword2] = useState(true)

const handleRegister = () => {
    
    setError({ email: '', password: '', password2: '' })
    
    let valid = true
    const newError = {}

    if (isEmpty(email)) {
        newError.email = "El correo es requerido"
        valid = false
    } else if (!isValidEmail(email)) {
        newError.email = "El correo no es válido"
        valid = false
    }

    if (isEmpty(password)) {
        newError.password = "La contraseña es requerida"
        valid = false
    }

    if (isEmpty(password2)) {
        newError.password2 = "La confirmación de contraseña es requerida"
        valid = false
    }

    if (password !== password2) {
        newError.password = "Las contraseñas no coinciden"
        newError.password2 = "Las contraseñas no coinciden"
        valid = false
    }

    if (password === password2 && !isEmpty(password) && !isEmpty(password2)) {
        newError.password = '';
        newError.password2 = '';
    }

    if (!valid) {
        setError(newError)
    } else {
        console.log('Inicio sesion');
        
    }
}

const isValidEmail = (email) => {
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/
    return regex.test(email)
}

    return (
        <View style={styles.container}>
            <Image
                source={{ uri: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAAb1BMVEUgJCocFBgcERQfIScbCg1DiZ5Ts85HlasiKzJPqcM0Y3Jl4f8WAAAeGyAXAABk3/8eHSIwVmNXv9waAwZJm7MvUl9Wu9dMortm5P8ZAABh2Plcyug8dokrSVUNAABez+4mN0AoP0lo6v9Rr8o+fpFKKGEAAAABDklEQVR4AcVShQGEIBSlO20F2/1nvO4B7tH8DvBXQAQxAPh8/NIIZVwgJDij5IcmmeKaUs0Vk19UjLWxyHnvkDUe4w9iiEVpHasq5mxZxPBJrBui2q6qulaRpv4ghp7qIQ35jPOhaf9GteMgh2mOpXN9nKfzY7RPbxYdjWyYW1OqHWukiXrBj/ArSkLclr7wPrlli4HQCj6JvLRqW/tG+8Ktm7IlfxKx8Mrse+OWpllds+9GefEMNawDG6akeud6labzYw1vobjD+zQcZwzJ+8N9BhobE6uO866KponhJ33ByTNc+EkfCNpZQrwnxDr9RQOoLXKrc9ZtLloEvlAekmIIMZVHCX5gH21iwT9xAhaWFD8/iELBAAAAAElFTkSuQmCC"}}
                style={{width: 50, height: 50}}
            />
            <View style={{ margin: 16 }} > 
                <Input placeholder='alguien@example.com' label='Correo Electrónico' keyboardType='email-address' 
                inputContainerStyle={{width: '100%'}} onChange={ ({ nativeEvent: {text} })  => setEmail(text) } errorMessage={error.email}
                />
                <Input placeholder='contraseña' label='Password'inputContainerStyle={{width: '100%'}} secureTextEntry={showPassword} onChange={ ({ nativeEvent: {text} }) => setPassword(text) }
                errorMessage={error.password} 
                rightIcon={
                    <Icon onPress={() => setShowPassword(!showPassword)} type="material-community" name={showPassword ? "eye-outline" : "eye-off-outline"} />
                }/>
                <Input placeholder='confirmar contraseña' label='Confirm password'inputContainerStyle={{width: '100%'}} secureTextEntry={showPassword2} onChange={ ({ nativeEvent: {text} }) => setPassword2(text) }
                errorMessage={error.password2} 
                rightIcon={
                    <Icon onPress={() => setShowPassword2(!showPassword2)} type="material-community" name={showPassword2 ? "eye-outline" : "eye-off-outline"} />
                }/>
                
                <Button title={'Crear cuenta'} onPress={handleRegister} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})