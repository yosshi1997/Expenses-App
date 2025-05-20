import { View, Text, StyleSheet } from "react-native"

const FooterButton = (): JSX.Element => {
    return (
        <View style={styles.footerButton}>
            <Text style={styles.footerButtonText}>Trend Check</Text>
        </View>
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
