import { useDispatch, useSelector } from "react-redux"
import { actions } from "../actions"

export default function useUser() {
    const dispatch = useDispatch();

    const items = useSelector(state => state.items.listData);

    const initLoad = () => dispatch(actions.getStudentRequest())
    const searchItem = (data) => dispatch(actions.searchRequest(data))

    return {
        items,
        initLoad,
        searchItem
    }
}

