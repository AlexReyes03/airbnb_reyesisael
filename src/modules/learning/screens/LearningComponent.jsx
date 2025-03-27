import { StyleSheet, Text, View } from "react-native";
import React, {useState} from "react";
import Loading from "../../../kernel/components/Loading";
import { Button } from "@rneui/base";

export default function LearningComponent() {
    //let count =1;
    const [count, setCount] = useState(1);
    return(
        <View style={{flex: 1}}>
            <Text>Learning component</Text>
            <Loading message ="Espere un momento" color="red" size={32}
            age={20}
            name="Astrid"
            count={count}
            isVisible={false}
            />
            <Button
                title="Incrrement"
                onPress={() =>{
                    setCount(count+1);
                    console.log("count", count)
                }}
            />
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:'#D4F1F4'
    }
})