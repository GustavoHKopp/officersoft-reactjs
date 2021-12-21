import { api } from "../http";

const getUser = (CPF) => {
  return api.get(`/people/${CPF}`)
}

const addUser = (nome, CPF, endereco, numero, bairro, complemento, municipio, UF, RG) => {
  return api.post('/people/add', {nome: nome, CPF: CPF, endereco: endereco, numero: numero, bairro: bairro, complemento: complemento, municipio: municipio, UF: UF, RG: RG})
}

const removeUser = (CPF) => {
  return api.delete(`/people/${CPF}`)
}

export {getUser, addUser, removeUser}