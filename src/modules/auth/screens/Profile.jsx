import React,{useState} from "react";
import { StyleSheet, Text, View } from "react-native";
import { Icon,Avatar,Button } from "@rneui/base";
import { getAuth } from "firebase/auth";
import ProfileOptions from "../components/ProfileOptions"
import AvatarComponent from "../components/profile/AvatarComponent";

export default function Profile () {
    const auth = getAuth();
    const [user,setUser] = useState(auth.currentUser);
    
    return (
        <View style={styles.container}>
            < AvatarComponent/>
            <ProfileOptions/>
            <Button
                title={"Cerrar sesion"}
                containerStyle={styles.btnLogoutContainer}
                buttonStyle={styles.btnLogout}
                onPress={()=>{
                    auth.signOut();
                }}
            />
        </View>
    )
}

const styles = StyleSheet.create ({
    container: {
        flex:1,
        backgroundColor:'white',
        marginTop:64
    },
    btnLogoutContainer: {
        marginTop: 16
    },
    btnLogout: {
        margin: 10,
        backgroundColor: 'red',
        borderColor: '#4abfa4'
    }
})