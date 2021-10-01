const AUTH_TOKEN_KEY = 'favvle_authentication_token_key';

const storage = (function() {
    function _getAuthToken() {
        return window.localStorage.getItem(AUTH_TOKEN_KEY);
    }

    function _setAuthToken(token) {
        window.localStorage.setItem(AUTH_TOKEN_KEY, token);
    }
    
    function _removeAuthToken() {
        return window.localStorage.removeItem(AUTH_TOKEN_KEY);
    }

    return {
        getAuthToken: _getAuthToken,
        setAuthToken: _setAuthToken,
        removeAuthToken: _removeAuthToken
    };
})();

export default storage;