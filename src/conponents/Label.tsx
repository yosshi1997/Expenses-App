import { View, Text, TextInput, StyleSheet } from "react-native"
interface Props {
    children: string;
}
const Label = ({ children }: Props): JSX.Element => {
    return (
        <View>
            <View style={styles.inputLabel}>
                <Text style={styles.inputLabelText}>
                    {children}
                </Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    inputLabel: {
        width: "100%",
        height: 24,
        backgroundColor: "rgb(180,180,180)",
        justifyContent: "center",
        alignItems: "center",
        marginVertical: 16
    },
    inputLabelText: {
        fontSize: 16,
        fontWeight: "bold"
    }
})

export default Label
