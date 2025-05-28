import { JSX } from "react"
import { Text, View, StyleSheet } from "react-native"
import { Link, router } from "expo-router"

import Header from "../../conponents/Header"
import AddButton from "../../conponents/AddButton"
import NewUserButton from "../../conponents/NewUserButton"
import FooterButton from "../../conponents/FooterButton"
import StringInput from "../../conponents/StringInput"
import NumberInput from "../../conponents/NumberInput"

const handlePress = (): void => {
    //Add New User
    router.push("/User/UserList")
}

const NewUser = (): JSX.Element => {
    return (
        <View style={styles.container}>

            {/* header */}
            <Header signUpVisible={false} logoutVisible={false} backVisible={true} editVisible={false}>New User</Header>

            <StringInput label="User Name">Yoshimasa</StringInput>

            <NumberInput label="Initial Value">50000</NumberInput>

            <AddButton rotate={false}>∨</AddButton>

            <FooterButton onPress={handlePress}>Add New User</FooterButton>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "rgb(255, 255, 255)"
    }

})

export default NewUser
