import { View, Text, StyleSheet } from "react-native"

interface Props {
    rotate?: boolean
}

const AddButton = ({ rotate = false }: Props): JSX.Element => {
    return (
        <View style={[styles.addButton, rotate && styles.addButtonReset]}>
            <Text style={styles.addButtonText}>＋</Text>
        </View >
    )
}

const styles = StyleSheet.create({
    addButton: {
        backgroundColor: "rgb(25, 25, 25)",
        borderColor: 'transparent',
        height: 56,
        width: 56,
        borderRadius: 28,
        position: "absolute",
        right: 16,
        bottom: 112,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.5,
        shadowRadius: 4,
        elevation: 4, // Android用
        justifyContent: "center",
        alignItems: "center"
    },
    addButtonReset: {
        transform: [{ rotate: '45deg' }]
    },
    addButtonText: {
        color: "rgb(255, 255, 255)",
        fontSize: 40,
        fontWeight: 'bold',
    }
})

export default AddButton
