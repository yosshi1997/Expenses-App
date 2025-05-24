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
                <Text style={styles.inputLabelText}>
                    User
                </Text>
            </View>
            <View style={styles.inputString}>
                <Text style={styles.inputText}>
                    UserName
                </Text>
            </View>


            <View style={styles.inputLabel}>
                <Text style={styles.inputLabelText}>
                    Year
                </Text>
            </View>
            <View style={styles.inputNumber}>
                <Text style={styles.inputText}>
                    2025
                </Text>
            </View>


            <View style={styles.inputLabel}>
                <Text style={styles.inputLabelText}>
                    Month
                </Text>
            </View>
            <View style={styles.inputNumber}>
                <Text style={styles.inputText}>
                    12
                </Text>
            </View>


            <View style={styles.inputLabel}>
                <Text style={styles.inputLabelText}>
                    Category
                </Text>
            </View>
            <View style={styles.inputString}>
                <Text style={styles.inputText}>
                    SBI銀行
                </Text>
            </View>


            <View style={styles.inputLabel}>
                <Text style={styles.inputLabelText}>
                    Income/Expense
                </Text>
            </View>
            <View style={styles.inputNumber}>
                <Text style={styles.inputText}>
                    194129
                </Text>
            </View>

            <View style={styles.noteText}>
                <Text>
                    ※収入は正の値、支出は負の値で入力
                </Text>
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
        width: "100%",
        height: 40,
        backgroundColor: "rgb(180,180,180)",
        justifyContent: "center",
        alignItems: "center",
        marginVertical: 16
    },
    inputLabelText: {
        fontSize: 24,
        fontWeight: "bold"
    },
    inputString: {
        height: 40,
        width: "90%",
        marginHorizontal: "5%",
        borderRadius: 10,
        borderWidth: 1,
        borderColor: 'rgb(0, 0, 0)',
        justifyContent: "center",
        alignItems: "center"
    },
    inputNumber: {
        height: 40,
        width: "90%",
        marginHorizontal: "5%",
        borderRadius: 10,
        borderWidth: 1,
        borderColor: 'rgb(0, 0, 0)',
        justifyContent: "center",
        alignItems: "center"
    },
    inputText: {
        fontSize: 16
    },
    noteText: {
        alignItems: "center"
    }
})

export default NewData
