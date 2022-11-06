import React from "react";
import { useState, useEffect } from "react";
import { Table } from 'react-bootstrap';
import { Helmet } from 'react-helmet'

import axios from 'axios';
import { DOMAIN } from "../../constants";
import useAdmin from '../../hooks/useAdmin'

export default function ComponentAdmin() {

    const {
        // items,
        initLoad,
        addItem,
        updateItem,
        deleteItem,
        searchItem
    } = useAdmin();

    const [items, setItems] = useState([])
    useEffect(() => {
        // initLoad()
        axios.get(`${DOMAIN}/student`, {
            headers: {
                "authorization": `Bearer ${localStorage.getItem('token')}`
            }
        })
            .then(res => setItems(res.data.data))
            .then(err => err)
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
                        <th colSpan={2}>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {listData.length !== 0 ? listData : <tr><td colSpan={4}><p>Không có dữ liệu trả về</p></td></tr>}
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
