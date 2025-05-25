import { View, Text, TextInput, StyleSheet } from "react-native"
import { FontAwesome, AntDesign } from "@expo/vector-icons"

interface Props {
    categoryName: string;
    categoryType: string;
}
const ColListItem = ({ categoryName, categoryType }: Props): JSX.Element => {
    return (
        <View style={styles.scrollContent}>
            <View style={styles.categoryList}>
                <View style={styles.categoryName}>
                    <TextInput style={styles.categoryNameText}>
                        {categoryName}
                    </TextInput>
                </View>
                <View style={styles.categoryType}>
                    <TextInput style={styles.categoryTypeText}>
                        {categoryType}
                    </TextInput>
                </View>
                <View style={styles.editIcon}>
                    <Text style={styles.editIconText}>
                        <FontAwesome name="sort" size={20} />
                    </Text>
                </View>
                <View style={styles.editIcon}>
                    <Text style={styles.editIconText}>
                        <AntDesign name="delete" size={20} />
                    </Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    scrollContent: {
        width: "100%",

    },
    categoryList: {
        flexDirection: "row",
        width: "100%",
    },
    categoryName: {
        borderWidth: 1,
        borderColor: 'rgba(0, 0, 0,1)',
        width: "30%",
        height: 40,
        justifyContent: "center",
        alignItems: "center"
    },
    categoryNameText: {
        fontSize: 12
    },
    categoryType: {
        borderWidth: 1,
        borderColor: 'rgba(0, 0, 0,1)',
        width: "30%",
        height: 40,
        justifyContent: "center",
        alignItems: "center"
    },
    categoryTypeText: {
        fontSize: 12
    },
    editIcon: {
        borderWidth: 1,
        borderColor: 'rgba(0, 0, 0, 1)',
        width: "20%",
        height: 40,
        justifyContent: "center",
        alignItems: "center"
    },
    editIconText: {
        fontSize: 12
    }
})

export default ColListItem
