import { useDispatch, useSelector } from 'react-redux'
import { actions } from '../actions'
export default function UseAdmin() {
    const dispatch = useDispatch()

    const items = useSelector(state => state.items.listData)

    const initLoad = () => dispatch(actions.getStudentRequest())
    const addItem = () => dispatch(actions.addStudentRequest())
    const updateItem = () => dispatch(actions.searchRequest())
    const deleteItem = () => dispatch(actions.updateStudentRequest())
    const searchItem = () => dispatch(actions.deleteStudentRequest())
    
    return (
        items,
        initLoad,
        addItem,
        updateItem,
        deleteItem,
        searchItem
    )
}