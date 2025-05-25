import { View, Text, TextInput, StyleSheet } from "react-native"

interface Props {
    label: string;
    defaultValue?: string;
    children?: string;
}
const StringInput = ({ label, defaultValue, children }: Props): JSX.Element => {
    return (
        <View>
            <View style={styles.inputLabel}>
                <Text style={styles.inputLabelText}>
                    {label}
                </Text>
            </View>
            <View style={styles.inputString}>
                <TextInput style={styles.inputText}>
                    {defaultValue ?? children}
                </TextInput>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
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
    }
})

export default StringInput
