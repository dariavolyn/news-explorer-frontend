class MainApi {
    constructor({ baseUrl, headers }) {
        this.baseUrl = baseUrl
        this.headers = headers
    }

    _checkResponse(res) {
        return res.ok ? res.json() : console.log(`Error: ${res.status}`)
    }

    registerUser(email, password, username) {
        return fetch(`${this.baseUrl}/signup`, {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password, username })
        })
        .then(this._checkResponse)
    }

    authorizeUser({ email, password }) {
        return fetch(`${this.baseUrl}/signin`, {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password }),
        })
            .then(this._checkResponse)
            .then((data) => {
                if (data.token) {
                    localStorage.setItem('token', data.token);
                    return data;
                } else {
                    return;
                }
            })
    }

    getContent(token) {
        return fetch(`${this.baseUrl}/users/me`, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            }
        })
            .then(this._checkResponse)
            .then(data => data)
    }
}

const mainApi = new MainApi({
    baseUrl: "https://api.dasha-news.students.nomoreparties.site"
}) 

export default mainApi;