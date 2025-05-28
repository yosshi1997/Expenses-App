
import { View, Text, StyleSheet, TouchableOpacity } from "react-native"

interface Props {
    backVisible?: boolean
    onPress?: () => void;
}

const BackButton = ({ backVisible = false, onPress }: Props): JSX.Element => {
    return (
        <View>
            <TouchableOpacity style={[styles.headerBackButton, backVisible && styles.backVisible]} onPress={onPress}>
                <Text style={styles.headerBackButtonText}>＜Back</Text>
            </TouchableOpacity>
        </View >
    )
}

const styles = StyleSheet.create({
    headerBackButton: {
        position: "absolute",
        left: 20,
        bottom: 16,
        color: "rgba(255, 255, 255,0.7)",
        display: 'none'
    },
    headerBackButtonText: {
        color: "rgba(255, 255, 255,0.7)",
    },
    backVisible: {
        display: 'flex'
    },
})

export default BackButton
