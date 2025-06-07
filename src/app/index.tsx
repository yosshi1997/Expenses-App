import { Redirect, router } from "expo-router"
import { JSX } from "react"
import { onAuthStateChanged } from "firebase/auth"
import { auth } from "../config"
import { useEffect } from "react"

const index = (): JSX.Element => {
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user !== null) {
                router.replace("/User/UserList")
            }
        })
    }, [])
    return <Redirect href="User/Login" />
}

export default index


{/* フォント編集
    [UserList]
    headerTitle
    userName
    newUserButtonText
    footerButtonText

    [UserDetail]
    dataText
*/ }
