import { JSX } from "react"
import { Text, View, StyleSheet, KeyboardAvoidingView, TextInput } from "react-native"
import { Link, router } from "expo-router"

import Header from "../../conponents/Header"
import FooterButton from "../../conponents/FooterButton"
import AddButton from "../../conponents/AddButton"
import BackButton from "../../conponents/BackButton"
import Label from "../../conponents/Label"

const handlePress = (): void => {
    //Add New Data
    router.replace("/User/UserDetail")
}

const handleBack = (): void => {
    //Category Save
    router.back()
}

const NewData = (): JSX.Element => {
    return (
        <View style={styles.container}>
            {/* header */}
            <Header>NewData</Header>
            <BackButton backVisible={true} onPress={handleBack}></BackButton>

            <Label>User</Label>
            <View style={styles.inputString}>
                <TextInput>
                    Yoshimasa
                </TextInput>
            </View>

            <Label>Year</Label>
            <View style={styles.inputString}>
                <TextInput>
                    12
                </TextInput>
            </View>

            <Label>Category</Label>
            <View style={styles.inputString}>
                <TextInput>
                    SBI銀行
                </TextInput>
            </View>

            <Label>Income/Expense</Label>
            <View style={styles.inputString}>
                <TextInput>
                    194129
                </TextInput>
            </View>


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
    },
    inputString: {
        height: 24,
        width: "90%",
        marginHorizontal: "5%",
        borderRadius: 10,
        borderWidth: 1,
        borderColor: 'rgb(0, 0, 0)',
        justifyContent: "center",
        alignItems: "center"
    }
})

export default NewData
