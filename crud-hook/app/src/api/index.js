const DOMAIN = 'http://localhost:3001/', LIMIT = 3

export function getApi() {
    return new Promise((resolve, reject) => {
        fetch(`${DOMAIN}`)
            .then((response) => response.json())
            .then(res => resolve(res))
            .catch((err) => reject(err))
    })
}

export function addApi(data) {  
    return new Promise((resolve, reject) => {
        fetch(`${DOMAIN}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data.payload)
        })
            .then((response) => response.json())
            .then((res) => resolve(res))
            .catch((err) => reject(err));
    });
}

export function updateApi(data) {
    return new Promise((resolve, reject) => {
        fetch(`${DOMAIN}${data.payload.id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data.payload)
        })
            .then((response) => response.json())
            .then((res) => resolve(res))
            .catch((err) => reject(err));
    });
}

export function deleteApi(data) {
    return new Promise((resolve, reject) => {
        fetch(`${DOMAIN}${data.payload.id}`, { method: 'DELETE' })
            .then((response) => response.json())
            .then((res) => resolve(res))
            .catch((err) => reject(err));
    });
}

export function searchApi(data) {
    return new Promise((resolve, reject) => {
        fetch(`${DOMAIN}search/?name=${data.payload.name}`)
            .then((response) => response.json())
            .then((res) => {resolve(res); })
            .catch((err) => reject(err));
    })
}

export function paginateApi(data) {

    return new Promise((resolve, reject) => {
        fetch(`${DOMAIN}pagination?activePage=${data.payload.activePage}&limit=${LIMIT}`)
            .then((response) => response.json())
            .then((res) => resolve(res))
            .catch((err) => reject(err));
    });
}

export function searchPaginateApi(data) {
    return new Promise((resolve, reject) => {
        fetch(`${DOMAIN}searchPaginate?activePage=${data.payload.activePage}&limit=${LIMIT}&name=${data.payload.name}`)
            .then((response) => response.json())
            .then((res) => resolve(res))
            .catch((err) => reject(err));
    });
}