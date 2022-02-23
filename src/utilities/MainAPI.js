class mainAPI {

    constructor({ baseUrl }) {
        this._url = baseUrl;
    }

    // _____________________________________________________Get user info
    getCurrentUser = (token) => {
        return fetch(`${this._url}/users/me`, {
            headers: {
                authorization: `Bearer ${token}`
            }
        })
            .then((response) => {
                return this._checkResponse(response);
            })
    }

    // _____________________________________ signup
    signup = ({ email, password, name }) => {
        return fetch(`${this._url}/signup`, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password, name })
        })
            .then((res) => {
                return this._checkResponse(res);
            })
            .then((res) => {
                return res;
            })
    };

    signin = ({ email, password }) => {
        return fetch(`${this._url}/signin`, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password })
        })
            .then((res) => {
                console.log(res);
                return this._checkResponse(res);
            })
            .then((data) => {
                if (data.token) {
                    localStorage.setItem('token', data.token);
                    return data;
                }
            })
    }

    _checkResponse = (res) => {
        if (res.ok) {
            return res.json();
        }
        else {
            return Promise.reject(`Error: ${res.status}`);
        }
    }
}

const mainApi = new mainAPI({
    baseUrl: 'http://localhost:3000'
});

export default mainApi;