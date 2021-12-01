import EstablishmentAPI from "./EstablishmentAPI";

class EstablishmentService {
  getAll() {
    return EstablishmentAPI.get("/list");
  }
}

export default new EstablishmentService();