import { JSX } from "react"
import { Text, View, StyleSheet, TextInput } from "react-native"
import { Link, router } from "expo-router"

import Header from "../../conponents/Header"
import AddButton from "../../conponents/AddButton"
import FooterButton from "../../conponents/FooterButton"
import BackButton from "../../conponents/BackButton"
import Label from "../../conponents/Label"

const handlePress = (): void => {
    //Add New User
    router.replace("/User/UserList")
}

const handleBack = (): void => {
    //Category Save
    router.back()
}


const NewUser = (): JSX.Element => {
    return (
        <View style={styles.container}>

            {/* header */}
            <Header>NewUser</Header>
            <BackButton backVisible={true} onPress={handleBack}></BackButton>

            <Label>User Name</Label>
            <View style={styles.inputString}>
                <TextInput>
                    Yoshimasa
                </TextInput>
            </View>

            <Label>Initial Value</Label>
            <View style={styles.inputString}>
                <TextInput>
                    50000
                </TextInput>
            </View>

            <AddButton rotate={false}>∨</AddButton>

            <FooterButton onPress={handlePress}>Add New User</FooterButton>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "rgb(255, 255, 255)"
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

export default NewUser
