import { View, Text, StyleSheet, TouchableOpacity } from "react-native"
interface Props {
    children: string;
    visible?: boolean;
    onPress?: () => void;
}
const NewUserButton = ({ children, visible = false, onPress }: Props): JSX.Element => {

    return (
        < TouchableOpacity style={[styles.newUserButton, visible && styles.newUserButtonVisible]} onPress={onPress}>
            <Text style={styles.newUserButtonText}>{children}</Text>
        </TouchableOpacity >
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
