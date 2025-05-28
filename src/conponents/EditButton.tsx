
import { View, Text, StyleSheet, TouchableOpacity } from "react-native"
import { MaterialIcons } from "@expo/vector-icons"

interface Props {
    editVisible?: boolean
    onPress?: () => void;
}
const Header = ({ editVisible = false, onPress }: Props): JSX.Element => {
    return (
        <View>
            <TouchableOpacity style={[styles.headerEditButton, editVisible && styles.editVisible]} onPress={onPress}>
                <Text style={styles.headerEditButtonText}>
                    <MaterialIcons name="edit" size={20} />
                </Text>
            </TouchableOpacity>
        </View >
    )
}

const styles = StyleSheet.create({
    headerEditButton: {
        position: "absolute",
        right: 20,
        bottom: 16,
        display: 'none'
    },
    headerEditButtonText: {
        color: "rgba(255, 255, 255,0.7)",
    },
    editVisible: {
        display: 'flex'
    }
})

export default Header
