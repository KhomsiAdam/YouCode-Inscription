// Fetch function for POST, PUT, PATCH
export const fetchWithData = async (method, endpoint, body) => {
    const response = await fetch(endpoint, {
        method: method,
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify(body)
    })
    if (method === 'POST') {
        if (response.status !== 201) {
            throw new Error('failed to fetch');
        }
    }
    const data = await response.json();
    return data;
}
// FEtch function for GET
export const fetchWithGet = async (endpoint) => {
    const response = await fetch(endpoint, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    })
    if (response.status !== 200) {
        throw new Error('failed to fetch');
    }
    const data = await response.json();
    return data;
}