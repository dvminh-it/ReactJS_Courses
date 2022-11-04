const DOMAIN = 'http://localhost:3001/'

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

export function deleteApi(data) {
    return new Promise((resolve, reject) => {
        fetch(`${DOMAIN}${data.payload.id}`, { method: 'DELETE' })
            .then((response) => response.json())
            .then((res) => resolve(res))
            .catch((err) => reject(err));
    });
}