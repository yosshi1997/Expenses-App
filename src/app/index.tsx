import { JSX } from "react"
import { View, Text, StyleSheet } from "react-native"

const Index = (): JSX.Element => {
    return (
        <View style={styles.container}>
            {/* header */}
            <View>
                {/* header top */}
                <View>
                    <Text>SignUp</Text>
                    <Text>Logout</Text>
                </View>
                {/* header bottom */}
                <View>
                    <Text>＜Back</Text>
                    <Text>Main Menu</Text>
                    <Text>Edit</Text>
                </View>
            </View>

            {/* User List Scroll */}
            <View>
                {/* User List */}
                <View>
                    {/* User List Item */}
                    <View>
                        <View>
                            <Text>Yoshimasa</Text>
                            <Text>2025.04.30 13:14 更新</Text>
                        </View>
                        <View>
                            <Text>×</Text>
                        </View>
                    </View>

                    <View>
                        <View>
                            <Text>Yoshimasa</Text>
                            <Text>2025.04.30 13:14 更新</Text>
                        </View>
                        <View>
                            <Text>×</Text>
                        </View>
                    </View>

                    <View>
                        <View>
                            <Text>Yoshimasa</Text>
                            <Text>2025.04.30 13:14 更新</Text>
                        </View>
                        <View>
                            <Text>×</Text>
                        </View>
                    </View>
                </View>
            </View>

            {/* Add Button add-button-resetクラスの追加・消去で回転 */}
            <View>
                <Text>＋</Text>
            </View>
            {/* New User Button new-user-button-noneクラスの追加・消去で表示・非表示 */}
            <View>
                <Text>New User</Text>
            </View>
            {/* Trend Check Button */}
            <View>
                <Text>Trend Check</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
})

export default Index
