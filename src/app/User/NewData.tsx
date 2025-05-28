import { JSX } from "react"
import { Text, View, StyleSheet, KeyboardAvoidingView } from "react-native"
import { Link, router } from "expo-router"

import Header from "../../conponents/Header"
import FooterButton from "../../conponents/FooterButton"
import StringInput from "../../conponents/StringInput"
import NumberInput from "../../conponents/NumberInput"
import AddButton from "../../conponents/AddButton"

const handlePress = (): void => {
    //Add New Data
    router.push("/User/UserDetail")
}

const NewData = (): JSX.Element => {
    return (
        <View style={styles.container}>
            {/* header */}
            <Header signUpVisible={false} logoutVisible={false} backVisible={true} editVisible={false}>New Data</Header>

            <StringInput label="User" defaultValue="Yoshimasa"></StringInput>

            <NumberInput label="Year">2025</NumberInput>

            <NumberInput label="Month">12</NumberInput>

            <StringInput label="Category">SBI銀行</StringInput>

            <NumberInput label="Income/Expense">194129</NumberInput>

            <View style={styles.noteText}>
                <Text>
                    ※収入は正の値、支出は負の値で入力
                </Text>
            </View>
            <AddButton rotate={false}>∨</AddButton>
            <FooterButton onPress={handlePress}>Add New Data</FooterButton>
        </View >
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "rgb(255, 255, 255)"
    },
    noteText: {
        alignItems: "center"
    }
})

export default NewData
