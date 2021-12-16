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

    authorizeUser(email, password) {
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

    getContent() {
        const token = localStorage.getItem('token');
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

    getUserInfo(token) {
        return fetch(`${this.baseUrl}/users/me`, {
            method: "GET",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            }
        })
            .then(this._checkResponse)
    }

    saveArticle(article) {
        const token = localStorage.getItem('token');

        return fetch(`${this.baseUrl}/articles`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,

            },
            body: JSON.stringify(article)
        })
            .then(this._checkResponse)
    }

    getSavedArticles() {
        const token = localStorage.getItem('token');

        return fetch(`${this.baseUrl}/articles`, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            }
        })
            .then(this._checkResponse)
    }

    deleteSavedArticle(id) {
        const token = localStorage.getItem('token');

        return fetch(`${this.baseUrl}/articles/${id}`, {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            }
        })
            .then(this._checkResponse)

    }
}

const mainApi = new MainApi({
    baseUrl:
        process.env.NODE_ENV === "production"
            ? "https://api.daria-news.students.nomoreparties.site"
            : "http://localhost:3000",
})

export default mainApi;