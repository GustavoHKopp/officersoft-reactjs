import Modal from "react-modal";
import {Form, Input, Button } from 'antd'
import { MaskedInput } from "../maskInput";
import { useState } from "react";
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

export const RegisterModal = ({handleCloseModal, modalIsVisible, handleRequest}) => {
  const [cpf, setCpf] = useState('')

  const handleOnSubmit = () => {

  }

  const onFinish = (values) => {
    handleRequest(values)
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };


  return <Modal 
  isOpen={modalIsVisible}
  onRequestClose={handleCloseModal}
  style={customStyles}>
    <h1 className="titleAdd">Cadastro</h1>
    <Form
      name="basic"
      labelCol={{
        span: 8
      }}
      wrapperCol={{
        span: 16
      }}
      initialValues={{
        remember: true
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
      >
      <Form.Item
        label="Nome"
        name="name"
        className="textAddModal"
        rules={[
          {
            required: true,
            message: ""
          }
        ]}
        >
        <Input className="input" />
      </Form.Item><br />
      <Form.Item
        label="CPF"
        name="cpf"
        className="textAddModal"
        rules={[
          {
            required: true,
            message: ""
          }
        ]}
        >
        <MaskedInput 
        
      value={cpf}
      onChange={(e) => setCpf(e.target.value)}
      className='input'/>
      </Form.Item><br />
      <Form.Item
        label="Endereço"
        name="endereco"
        className="textAddModal"
        rules={[
          {
            required: true,
            message: ""
          }
        ]}
        >
        <Input className="input" />
      </Form.Item><br />
      <Form.Item
        label="Número"
        name="numero"
      className="textAddModal"
        rules={[
          {
            required: true,
            message: ""
          }
        ]}
        >
        <Input className="input" />
      </Form.Item><br />
      <Form.Item
        label="Bairro"
        name="bairro"
      className="textAddModal"
        rules={[
          {
            required: true,
            message: ""
          }
        ]}
        >
        <Input className="input" />
      </Form.Item><br />
      <Form.Item
        label="Complemento"
        name="complemento"
      className="textAddModal"
        rules={[
          {
            required: true,
            message: ""
          }
        ]}
        >
        <Input className="input" />
      </Form.Item><br />
      <Form.Item
        label="Municipio"
        name="municipio"
      className="textAddModal"
        rules={[
          {
            required: true,
            message: ""
          }
        ]}
        >
        <Input className="input" />
      </Form.Item><br />
      <Form.Item
        label="UF"
        name="uf"
      className="textAddModal"
        rules={[
          {
            required: true,
            message: ""
          }
        ]}
        >
        <Input className="input" />
      </Form.Item><br />
      <Form.Item
        label="RG"
        name="rg"
      className="textAddModal"
        rules={[
          {
            required: true,
            message: ""
          }
        ]}
        >
        <Input className="input" />
      </Form.Item><br />
      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16
        }}
        >
        <Button type="primary" htmlType="submit" className="btnAdd">
          Cadastrar
        </Button>
      </Form.Item>
    </Form>
</Modal>
}