import { useDispatch } from "react-redux"
import { actions } from "../actions"

const UseSignUp = () => {
    const dispatch = useDispatch();

    const login = () => dispatch(actions.loginRequest())

    return {
        login,
    }
}

export default UseSignUp