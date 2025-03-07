import { Text, View, StyleSheet } from "react-native"
import { BlurView } from "expo-blur"
import {styles} from "./styles"

export function CreditCard(){
    // style={StyleSheet.absoluteFill} - fill all the space

    return(
        <View style={styles.container}>
            <BlurView style={StyleSheet.absoluteFill} intensity={20} tint="light" />
            <Text style={styles.title}>Meu Cartão</Text>

            <View style={styles.footer}>
                <Text style={styles.name}>Felipe Alves</Text>

                <View style={styles.flag}>
                    <View style={[styles.circle, styles.red]} />
                    <View style={[styles.circle, styles.orange]} />
                </View>
            </View>
        </View>
    )
}