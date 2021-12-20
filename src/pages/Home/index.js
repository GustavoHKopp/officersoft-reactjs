import './styles.css'
import { MaskedInput } from '../../components/maskInput'
import { useState } from 'react'
import { RegisterModal } from '../../components/modal/RegisterModal'
import { getUser } from '../../services/users'



const Home = () => {
  const [cpf, setCpf] = useState('')
  const [modalIsVisible, setmodalIsVisible] = useState(false)
  const [isLoading, setIsLoading] = useState(false)


  const openModal = () => {
    setmodalIsVisible(true)
  }

  const handleCloseModal = () => {
    setmodalIsVisible(false)
  }

  const handleRequest = async ({name, img_url, price, description}) =>{
    setIsLoading(true)
  // const {data} = await addItems(
  //   name,
  //   img_url,
  //   price,
  //   description
  // )
  setmodalIsVisible(false)
  setIsLoading(false)
}

const searchUser = () => {
  return getUser(cpf)
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
      <MaskedInput className='text-input' 
      value={cpf}
      onChange={(e) => setCpf(e.target.value)}
      /><br />
      <div className='btncontainer'>
      <button className='serachbtn' onClick={searchUser}>Pesquisar</button>
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