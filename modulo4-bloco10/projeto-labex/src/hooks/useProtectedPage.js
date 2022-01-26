import { useHistory } from "react-router-dom"
import { useEffect } from "react/cjs/react.development";
import { getToken } from "../helpers/localStorage";

export const useProtectedPage = () => {
    const history = useHistory();

    useEffect(() => {
    const token = getToken()
    if(!token) history("/login")
    }, [])
}