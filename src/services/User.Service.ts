import http from "../http-common";

class UserDataService {

  login(body) {
    console.log(body)
    return http.post("/login", body);
  }

  cadastrarPJ(body) { 
    return http.post("/login/cadastrar/pj", body);
  }

  cadastrarPF(body) {
    return http.post("/login/cadastrar/pf", body);
  }


}

export default new UserDataService();