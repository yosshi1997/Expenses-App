import { View, Text, StyleSheet, ScrollView } from "react-native"
import { JSX } from "react"


import Header from "../../conponents/Header"
import FooterButton from "../../conponents/FooterButton"
import ColList from "../../conponents/ColList"

const UserDtail = (): JSX.Element => {
    return (
        <View style={styles.container}>

            {/* header */}
            <Header signUpVisible={false} logoutVisible={false} backVisible={true} editVisible={false}>Yoshimasa</Header>

            {/* colListReview */}
            <ScrollView horizontal style={styles.horizontalScroll}>
                <ColList
                    income1={"SBI銀行"}
                    income2={"楽天銀行"}
                    expense1={"JALカード"}
                    expense2={"その他現金"}
                    expense3={"共通口座振込"}
                />
            </ScrollView>

            {/* colListScroll */}
            <ScrollView style={styles.colListScroll}>
                {/* colListItem */}
                <View style={styles.scrollContent}>
                    <View style={styles.categoryList}>
                        <View style={styles.categoryName}>
                            <Text style={styles.categoryNameText}>
                                SBI銀行
                            </Text>
                        </View>
                        <View style={styles.categoryType}>
                            <Text style={styles.categoryTypeText}>
                                Income
                            </Text>
                        </View>
                        <View style={styles.sortIcon}>
                            <Text style={styles.sortIconText}>
                                三
                            </Text>
                        </View>
                    </View>
                </View>
            </ScrollView>

            <FooterButton>Save</FooterButton>
        </View >
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    horizontalScrollContent: {
        height: 24, // 内部コンテンツの高さも指定する
        alignItems: "center", // 中央揃え
    },
    colListScroll: {
        position: "absolute",
        width: "100%",
        height: "60%",
        top: "25%"
    },
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

export default UserDtail
