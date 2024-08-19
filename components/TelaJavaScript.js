import { View } from "react-native-web";
import javascriptImg from "../assets\JavaScript.png"
import estilo from "./Estilo";
import { Button } from "react-native";

export default function TelaJavaScript (props) {
    return (
        <View style={estilo.fundoJS}>
            <View style={estilo.container}>
                <Image source={javascriptImg} style={estilo.logo}/>

                <Text style={estilo.titulo}>
                    JavaScript
                </Text>

                <Text style={estilo.texto}>
                    Veja 2 tecnologias para se tornar um progamador fullstack web JavaScript 
                </Text>

                <View style = {estilo.boxBotoes}>
                    <Button 
                    title="Front-end"
                    onPress={()=>props.navigation.navigate('React')}
                    />

                    <Button 
                    title="Back-end"
                    onPress={()=>props.navigation.navigate('Node')}/>
                    
                </View>

            </View> 
        </View>
    )
}