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


            <ScrollView horizontal style={styles.horizontalScroll}>
                <View>
                    {/* colList */}
                    <ColList
                        income1={"SBI銀行"}
                        income2={"楽天銀行"}
                        expense1={"JALカード"}
                        expense2={"その他現金"}
                        expense3={"共通口座振込"}>
                    </ColList>

                    {/* DatarowScroll */}
                    <ScrollView style={styles.dataRowScroll}>
                        {/* dataColList */}
                        <View style={styles.scrollMargin}></View>
                    </ScrollView>
                </View>
            </ScrollView>

            <FooterButton>Save</FooterButton>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "rgb(255, 255, 255)"
    },
    scrollMargin: {
        height: 200
    },
    dataRowScroll: {
        paddingTop: 1
    },

})

export default UserDtail
