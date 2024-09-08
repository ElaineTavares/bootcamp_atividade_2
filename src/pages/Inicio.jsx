import React, { useState } from 'react'
import './Inicio.css'
import emailJs from "@emailjs/browser"

export default function Inicio() {

    const [nome, setNome] = useState("")
    const [email, setEmail] = useState("")
    const [telefone, setTelefone] = useState("")
    const [mensagem, setMensagem] = useState("")
    const [msg, setMsg] = useState("")
    const [msgSucesso, setMsgSucesso] = useState("")

   
    const dadosCapturados = (e) => {
        //prevenir comportamento padrao
        e.preventDefault()

        const templateParams = {
            from_name: nome,
            email: email,
            telefone: telefone,
            message: mensagem
        }
       
       
//send é uma promisse   //service ID       //template ID                       //public key
        emailJs.send("service_jysrtau", "template_2hmuxqd", templateParams, "h8RHx_O-mEZsEm29Y")
        .then((response) => {
            setMsgSucesso("Mensagem enviada com sucesso!", response.status, response.text)

            setNome("")
            setEmail("")
            setTelefone("")
            setMensagem("")          

        }, (err) => {
            console.log("ERRO: ", err)
        })       
    }
    

 

  return (
    <div className='formulario_container'>
        <form onSubmit={dadosCapturados}>  
        
            <h1>Envie sua mensagem</h1>
            <p className='msg_nome'>{msg}</p>
            <p className='msg_sucesso'>{msgSucesso}</p>
            <input 
                type="text" 
                placeholder='Digite seu nome'
                value={nome}
                onChange={(e) => setNome (e.target.value)}
                required 
            /> 
            
            <input 
                type="email"
                placeholder='Digite seu email'
                value={email}
                onChange={(e) => setEmail (e.target.value)}
                required
             /> 
            <input type="phone" 
                placeholder='Se desejar, informe o seu telefone' 
                value={telefone}
                onChange={(e) => setTelefone (e.target.value)}
            />
            <textarea 
                rows={4} 
                placeholder='Digite a sua mensagem'
                value={mensagem}
                onChange={(e) => setMensagem (e.target.value)}
                required
            />
            <button>Enviar</button>
        </form>
    </div>
  )
}
