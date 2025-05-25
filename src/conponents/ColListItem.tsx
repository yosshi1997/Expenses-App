import { View, Text, StyleSheet } from "react-native"

interface Props {
    categoryName: string;
    categoryType: string;
}
const ColListItem = ({ categoryName, categoryType }: Props): JSX.Element => {
    return (
        <View style={styles.scrollContent}>
            <View style={styles.categoryList}>
                <View style={styles.categoryName}>
                    <Text style={styles.categoryNameText}>
                        {categoryName}
                    </Text>
                </View>
                <View style={styles.categoryType}>
                    <Text style={styles.categoryTypeText}>
                        {categoryType}
                    </Text>
                </View>
                <View style={styles.sortIcon}>
                    <Text style={styles.sortIconText}>
                        三
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
        width: "40%",
        height: 60,
        justifyContent: "center",
        alignItems: "center"
    },
    categoryNameText: {
        fontSize: 16
    },
    categoryType: {
        borderWidth: 1,
        borderColor: 'rgba(0, 0, 0,1)',
        width: "40%",
        height: 60,
        justifyContent: "center",
        alignItems: "center"
    },
    categoryTypeText: {
        fontSize: 16
    },
    sortIcon: {
        borderWidth: 1,
        borderColor: 'rgba(0, 0, 0, 1)',
        width: "20%",
        height: 60,
        justifyContent: "center",
        alignItems: "center"
    },
    sortIconText: {
        fontSize: 16
    }
})

export default ColListItem
