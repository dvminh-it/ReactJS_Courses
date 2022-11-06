import { useDispatch, useSelector } from "react-redux"
import { actions } from "../actions"

const UseUser = () => {
    const dispatch = useDispatch();

    const items = useSelector(state => state.items.listData);

    const initLoad = () => dispatch(actions.getStudentRequest())
    const searchItem = () => dispatch(actions.searchRequest())

    return {
        items,
        initLoad,
        searchItem
    }
}

export default UseUser