import { JSX } from "react"
import { Text, View, StyleSheet } from "react-native"

import Header from "../../conponents/Header"
import AddButton from "../../conponents/AddButton"
import NewUserButton from "../../conponents/NewUserButton"
import FooterButton from "../../conponents/FooterButton"

const NewData = (): JSX.Element => {
    return (
        <View style={styles.container}>

            {/* header */}
            <Header signUpVisible={false} logoutVisible={false} backVisible={true} editVisible={false}>New Data</Header>

            <View style={styles.inputLabel}>
                <View style={styles.inputString}>

                </View>
            </View>

            <View style={styles.inputLabel}>
                <View style={styles.inputNumber}>

                </View>
            </View>


            <FooterButton>Add New Data</FooterButton>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "rgb(255, 255, 255)"
    },
    inputLabel: {

    },
    inputString: {

    },
    inputNumber: {

    }
})

export default NewData
