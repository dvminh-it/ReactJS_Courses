import { useDispatch } from "react-redux"
import { actions } from "../actions"

const UseSignUp = () => {
    const dispatch = useDispatch();

    const signUp = () => dispatch(actions.signUpRequest())

    return {
        signUp,
    }
}

export default UseSignUp