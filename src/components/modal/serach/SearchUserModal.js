import Modal from "react-modal";
import './styles.css'
const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRIght: '-50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: 'rgb(92, 91, 91)',
    color: 'white'
  }
}

const UserModal = ({handleCloseModal, modalIsVisible, nome, CPF, RG, endereco, bairro, UF}) => {
  return <Modal 
  isOpen={modalIsVisible}
  onRequestClose={handleCloseModal}
  style={customStyles}>
    <h1 className="title-name">{`${nome}`}</h1>
    <h3 className="informations">{`CPF: ${CPF}`}</h3>
    <h3 className="informations">{`RG: ${RG}`}</h3>
    <h3 className="informations">{`Endereco: ${endereco}`}</h3>
    <h3 className="informations">{`Bairro: ${bairro}`}</h3>
    <h3 className="informations">{`UF: ${UF}`}</h3>
</Modal>
}

export { UserModal }