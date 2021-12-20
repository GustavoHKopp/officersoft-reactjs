import { api } from "../http";

export const getUser = (cpf) => {
  return api.get(`/user/${cpf}`)
}

