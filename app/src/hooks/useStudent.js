import { useDispatch, useSelector } from "react-redux"
import { actions } from "../actions"

export const UseStudent = () => {
    const dispatch = useDispatch();
    const listStudents = useSelector((state) => state.student.listStudent)
    const handleGetStudents = () => dispatch(actions.getRequest())
    const handleAddStudents = (data) => dispatch(actions.addRequest(data))
    const handleDeleteStudents = (data) => dispatch(actions.deleteRequest(data))
    
    return {
        listStudents,
        handleGetStudents,
        handleAddStudents,
        handleDeleteStudents
    }
}