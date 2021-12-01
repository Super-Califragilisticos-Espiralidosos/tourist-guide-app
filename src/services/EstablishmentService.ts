import EstablishmentAPI from "./EstablishmentAPI";

class EstablishmentService {
  getAll() {
    return EstablishmentAPI.get("/list");
  }

  get(id: string) {
    return EstablishmentAPI.get(`/${id}`);
  }
}

export default new EstablishmentService();