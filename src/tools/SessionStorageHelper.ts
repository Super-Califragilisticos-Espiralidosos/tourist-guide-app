class SessionStorageHelper {
    static getToken(): string {
        var token = sessionStorage.getItem("access_token");
        console.log(sessionStorage)
        if (token === null) {
            token = "";
        }
        console.log(token)
        return token;
    }

    static updateToken(token: string): void {
        sessionStorage.setItem("access_token", token);
    }
}

export default SessionStorageHelper;