
import { View, Text, StyleSheet, TouchableOpacity } from "react-native"

interface Props {
    children: string;
}
const Header = ({ children }: Props): JSX.Element => {
    return (
        < View style={styles.header} >
            < View style={styles.headerBottom} >
                <Text style={styles.headerTitle}>{children}</Text>
            </View >
        </View >
    )
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: "rgb(40, 40, 40)",
        height: 120,
        justifyContent: "flex-end",
        alignItems: "center"
    },
    headerTitle: {
        marginBottom: 8,
        fontSize: 24,
        lineHeight: 32,
        color: "rgb(255, 255, 255)",
    }
})

export default Header
