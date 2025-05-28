import { View, Text, StyleSheet, TouchableOpacity } from "react-native"
interface Props {
    children: string;
    onPress?: () => void;
}

const FooterButton = (props: Props): JSX.Element => {
    const { children, onPress } = props
    return (
        <TouchableOpacity style={styles.footerButton} onPress={onPress}>
            <Text style={styles.footerButtonText}>{children}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    footerButton: {
        backgroundColor: "rgb(25, 25, 25)",
        borderColor: 'transparent',
        height: 96,
        width: "90%",
        borderRadius: 48,
        position: "absolute",
        right: "5%",
        bottom: 8,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.5,
        shadowRadius: 4,
        elevation: 4, // Android用
        justifyContent: "center",
        alignItems: "center"
    },
    footerButtonText: {
        color: "rgb(255, 255, 255)",
        fontSize: 32
    }
})

export default FooterButton
