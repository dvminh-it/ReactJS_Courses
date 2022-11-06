import React, { useState, useEffect } from "react";
import { Table } from 'react-bootstrap';
import { Helmet } from 'react-helmet'

import UseUser from "../../hooks/useUser";
export default function ComponentUser() {
    const {
        items,
        initLoad,
        searchItem
    } = UseUser();

    useEffect(() => {
        initLoad()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const [nameSearch, setNameSearch] = useState('')
    let listData = []
    if (items) {
        listData = items.map(item => {
            return (
                <tr key={item._id}>
                    <td>{item._id}</td>
                    <td>{item.name}</td>
                </tr>
            )
        })
    }

    return (
        <div>
            <Helmet>
                <title>Người dùng</title>
            </Helmet>
            <input onChange={(e) => { setNameSearch(e.target.value) }}></input>
            <button onClick={() => { searchItem({ nameSearch: nameSearch }) }}>Search</button>
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
                localStorage.removeItem('token')
                localStorage.removeItem('role')
                window.location.href = '/'
            }}>Đăng xuất</button>
        </div>
    )
}


