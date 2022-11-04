import { Table, Form, InputGroup, Button } from 'react-bootstrap';
import { UseStudent } from "../hooks"
import { useEffect, useState } from 'react'

export default function StudentComponent() {
    const {
        listStudents,
        handleGetStudents,
        handleAddStudents,
        handleDeleteStudents
    } = UseStudent();

    useEffect(() => {
        handleGetStudents()
    }, []);

    const [name, setName] = useState('')
    return (
        <div style={{ padding: "20px" }}>
            <InputGroup className="mb-3">
                <Form.Control
                    placeholder="Recipient's username"
                    aria-label="Recipient's username"
                    onChange={e => setName(e.target.value)}
                />
                <Button variant="outline-secondary"
                    onClick={() => handleAddStudents({ name: name })}  >
                    Add
                </Button>
            </InputGroup>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        listStudents.map((item, index) => {
                            return (
                                <tr key={index}>
                                    <td style={{ width: "15%" }}>{index + 1}</td>
                                    <td style={{ width: "50%" }}>{item._id}</td>
                                    <td style={{ width: "25%" }}>{item.name}</td>
                                    <td style={{ width: "15%" }}><button onClick={() =>
                                        handleDeleteStudents({ id: item._id })
                                    }>Delete</button></td>
                                </tr>
                            )
                        })}
                </tbody>
            </Table>
        </div>
    )
}