import SessionStorageHelper from "../tools/SessionStorageHelper";
import EstablishmentAPI from "./EstablishmentAPI";
import UsersAPI from "./UsersAPI";

class EstablishmentService {
  getAll() {
    return EstablishmentAPI.get("/list", { headers: this.createHeaders() });
  }

  get(id: string) {
    return EstablishmentAPI.get(`/${id}`, {
      headers: this.createHeaders(),
    });
  }

  login(username: string, password: string) {
    let formData = new FormData();
    formData.set("username", username)
    formData.set("password", password)
    const config = {
      headers: { "content-type": "multipart/form-data" },
    };

    return UsersAPI.post("/token", formData, config);
  }

  createHeaders(): any {
    var headers = {};

    if (SessionStorageHelper.getToken() !== "") {
      const authStr = "Bearer ".concat(SessionStorageHelper.getToken());
      headers = { Authorization: authStr };
      console.log(headers)
    }

    return headers;
  }
}

export default new EstablishmentService();
