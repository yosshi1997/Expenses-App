import { View, Text, StyleSheet } from "react-native"
interface Props {
    visible?: boolean
}
const NewUserButton = ({ visible = false }: Props): JSX.Element => {

    return (
        <View style={[styles.newUserButton, visible && styles.newUserButtonVisible]}>
            <Text style={styles.newUserButtonText}>New User</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    newUserButton: {
        backgroundColor: "rgb(25, 25, 25)",
        borderColor: 'transparent',
        height: 32,
        width: 203,
        borderRadius: 5,
        position: "absolute",
        right: 16,
        bottom: 176,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.5,
        shadowRadius: 4,
        elevation: 4, // Android用
        justifyContent: "center",
        alignItems: "center",
        display: 'none'
    },
    newUserButtonVisible: {
        display: 'flex'
    },
    newUserButtonText: {
        color: "rgb(255, 255, 255)",
        fontSize: 16
    }
})

export default NewUserButton
