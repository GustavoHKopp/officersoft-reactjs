import './styles.css'
import { CpfMaskedInput } from '../../components/maskInput/cpfMask'
import { useState } from 'react'
import { RegisterModal } from '../../components/modal/register/RegisterModal'
import { addUser, getUser } from '../../services/users'
import { UserModal } from '../../components/modal/serach/SearchUserModal'


const Home = () => {
  const [CPF, setCpf] = useState('')
  const [modalIsVisible, setmodalIsVisible] = useState(false)
  const [userModalIsVisible, setUserModalIsVisible] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [peoples, setPeoples] = useState([])
  const [people, setPeople] = useState({})

  const openModal = () => {
    setmodalIsVisible(true)
  }

  const handleCloseModal = () => {
    setmodalIsVisible(false)
  }

  const handleCloseUserModal = () => {
    setUserModalIsVisible(false)
    setPeople({})
  }

  const handleRequest = async ({nome, CPF, endereco, numero, bairro, complemento, municipio, UF, RG}) =>{
    setIsLoading(true)
  const {data} = await addUser(
    nome, 
    CPF, 
    endereco, 
    numero,
    bairro, 
    complemento, 
    municipio, 
    UF, 
    RG
  )
  console.log(data)
  setPeoples([...peoples, data])
  setmodalIsVisible(false)
  setIsLoading(false)
}

const searchUser = async() => {
  setUserModalIsVisible(true)
  let {data} = await getUser(CPF)
  console.log(data[0])
  setPeople(data[0])
}

if(isLoading){
  <h2>Loading...</h2>
}

  return <>
  <div className="container">
    <div className="centralbox">
      <h2 className='title'>Officer Soft</h2>
      <label className='label'>Nome:</label><br />
      <input type='text' className='text-input'></input><br />
      <label className='label'>CPF:</label><br />
      <CpfMaskedInput className='text-input' 
      value={CPF}
      onChange={(e) => setCpf(e.target.value)}
      /><br />
      <div className='btncontainer'>
      <button className='serachbtn' onClick={searchUser}>Pesquisar</button>
      <UserModal 
      handleCloseModal={handleCloseUserModal} 
      modalIsVisible={userModalIsVisible}
      nome={people.nome}
      CPF={people.CPF} 
      RG={people.RG} 
      endereco={people.endereco} 
      bairro={people.bairro} 
      UF={people.UF} 
      />
      <button className='registerbtn' onClick={openModal}>Cadastrar</button>
      <RegisterModal 
      handleCloseModal={handleCloseModal} 
      modalIsVisible={modalIsVisible} 
      handleRequest={handleRequest} />
      </div>
    </div>
  </div>
  </>

}

export {Home}