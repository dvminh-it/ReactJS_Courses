import React from "react";
import { useState, useEffect } from "react";
import { Table } from 'react-bootstrap';
import { Helmet } from 'react-helmet'
import UseAdmin from '../../hooks/useAdmin'
export default function ComponentAdmin() {

    const {
        items,
        initLoad,
        addItem,
        updateItem,
        deleteItem,
        searchItem
    } = UseAdmin()

    useEffect(() => {
        initLoad();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const [nameAdd, setNameAdd] = useState('')
    const [update, setUpdate] = useState({ id: '', name: '' })
    const [nameSearch, setNameSearch] = useState('')

    let listData = []
    if (items) {
        listData = items.map(item => {
            return (
                <tr key={item._id}>
                    <td>{item._id}</td>
                    <td>{item.name}</td>
                    <td>
                        <button
                            onClick={() => { setUpdate({ id: item._id, name: item.name }) }}>Choosse</button></td>
                    <td>
                        <button
                            onClick={() => { deleteItem({ id: item._id }) }}>Delete</button></td>
                </tr>
            )
        })
    }
    return (
        <div>
            <Helmet>
                <title>Admin</title>
            </Helmet>
            <input
                onChange={(e) => { setNameAdd(e.target.value) }}></input>
            <button
                onClick={() => { addItem({ nameAdd: nameAdd }) }}>Add</button>
            <input value={update.name}
                onChange={(e) => { setUpdate({ ...update, name: e.target.value }) }}></input>
            <button
                onClick={() => { updateItem({ id: update.id, name: update.name }) }}>Update</button>
            <input
                onChange={(e) => { setNameSearch(e.target.value) }}></input>
            <button
                onClick={() => { searchItem({ nameSearch: nameSearch }) }}>Search</button>
            <Table striped bordered hover className="text-center">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Tên</th>
                    </tr>
                </thead>
                <tbody>
                    {listData}
                </tbody>
            </Table>
            <button onClick={() => {
                localStorage.removeItem("token")
                localStorage.removeItem("role")
                window.location.href = '/'
            }}>Đăng xuất</button>
        </div>
    )
}
