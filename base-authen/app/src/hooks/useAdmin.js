import { useDispatch, useSelector } from 'react-redux'
import { actions } from '../actions'


export default function useAdmin() {
    const dispatch = useDispatch()

    const items = useSelector(state => state.items.listData);

    const initLoad = () => dispatch(actions.getStudentRequest())
    const addItem = (data) => dispatch(actions.addStudentRequest(data))
    const updateItem = (data) => dispatch(actions.searchRequest(data))
    const deleteItem = (data) => dispatch(actions.updateStudentRequest(data))
    const searchItem = (data) => dispatch(actions.deleteStudentRequest(data))

    return (
        items,
        initLoad,
        addItem,
        updateItem,
        deleteItem,
        searchItem
    )
}
