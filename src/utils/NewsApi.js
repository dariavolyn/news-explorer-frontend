function todayDate() {
    const date = new Date();
    return date.toISOString().slice(0, 10);
}

function todayDateMinusSeven() {
    const date = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000);
    return date.toISOString().slice(0, 10);
}

class NewsApi {
    constructor({ newsUrl, headers }) {
        this.newsUrl = newsUrl
        this.headers = headers
    }

    _checkResponse(res) {
        return res.ok ? res.json() : Promise.reject(`Error: ${res.status}`)
    }

    getCardsList(search) {
        return fetch(`${this.newsUrl}/everything?q=${search}&from=${todayDateMinusSeven()}&to=${todayDate()}&pageSize=10&apiKey=c4ef0e54c94849e194ad5251b2d39e56`,
            {
                method: 'GET',
                headers: this.headers
            })
            .then(this._checkResponse)
    }
}

const newsApi = new NewsApi({
    newsUrl: 'https://nomoreparties.co/news/v2',
    headers: {
        'Content-Type': 'application/json'
    }
})

export default newsApi;

