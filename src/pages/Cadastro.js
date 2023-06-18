import { useState, useContext } from "react"
import { LagContext } from "../contexts/LagContext"
import styled from "styled-components"
import axios from "axios"
import { useNavigate, Link } from "react-router-dom"

export default function Cadastro() {
    const { botaoLoading, inputAtivo, inputDesbotado, REACT_APP_API_URL } = useContext(LagContext)
    const [nome, setNome] = useState("")
    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")
    const [confirmaSenha, setConfirmaSenha] = useState("")
    
    const [textoBotao, setTextoBotao] = useState("Cadastrar")
    const [desabilitado, setDesabilitado] = useState("")
    const navigate = useNavigate()

    function cadastrarUsuario(e) {
        e.preventDefault()
        setTextoBotao(botaoLoading) 
        setDesabilitado("disabled")

        const body = { nome, email, senha, confirmaSenha }        
        const url = REACT_APP_API_URL + "/cadastro" 
        const promise = axios.post(url, body)

        promise.then((res) => { 
            alert("Cadastro realizado!")
            navigate("/") 
        })

        promise.catch(err => { 
            setTextoBotao("Cadastrar") 
            setDesabilitado("")            
            alert(err.response.data) 
            console.log(err)          
        })
    }

    return (
        <CadastroContainer>
            <Form onSubmit={cadastrarUsuario}>
            <TitleBody>Cadastro</TitleBody>
                <Input 
                    id="name"
                    type="text" 
                    placeholder="Nome" 
                    value={nome} 
                    onChange={e => setNome(e.target.value)} 
                    disabled={desabilitado}
                    corFundo={desabilitado ? inputDesbotado : inputAtivo }
                    required
                />
                <Input 
                    id="email"
                    type="email" 
                    placeholder="E-mail"
                    value={email} 
                    onChange={e => setEmail(e.target.value)} 
                    disabled={desabilitado}
                    corFundo={desabilitado ? inputDesbotado : inputAtivo }
                    required 
                />
                <Input 
                    id="password"
                    type="password"
                    placeholder="Senha" 
                    value={senha} 
                    onChange={e => setSenha(e.target.value)}
                    disabled={desabilitado}
                    corFundo={desabilitado ? inputDesbotado : inputAtivo }
                    required 
                />
                <Input 
                    id="confirmeSenha"
                    type="password"
                    placeholder="Confirme a senha" 
                    value={confirmaSenha} 
                    onChange={e => setConfirmaSenha(e.target.value)} 
                    disabled={desabilitado}
                    corFundo={desabilitado ? inputDesbotado : inputAtivo }
                    required
                />
               
                <Button data-test="sign-in-submit" disabled={desabilitado} type="submit">{textoBotao}</Button> 
            </Form>
            <LinkSignUp>
                <Link to={`/`}>
                    <p>Já tem uma conta? Entre agora!</p>
                </Link>                
            </LinkSignUp>
        </CadastroContainer>
    )    
}

const CadastroContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    width: 100vw;
    background: linear-gradient(45deg,#000000,#1d241c,#1b3813,#025400);
    background-size: 300% 300%;
    animation: colors 15s ease infinite;
    color:#FFFFFF;
        @keyframes colors{
            0%{
                background-position: 0% 50%;
            }
            50%{
                background-position: 100% 50%; 
            }
            100%{
                background-position: 0% 50%;
            }
}   
    
    p{
        text-align: center;
        color: #FFFFFF;
    }
`
const TitleBody = styled.h1`
    font-family: sans;
    font-size: 20px;
    font-style: normal;   
    font-size: 32px;
    line-height: 50px;
    color: #FFFFFF;
`
const Form = styled.form`
    display: flex;   
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 20px 0;
`
const Input = styled.input`
    box-sizing: border-box;
    width: 326px;
    height: 58px;
    background-color: ${props => props.corFundo};
    border: none;
    border-radius: 5px;
    margin: 5px 0;
    font-family: 'Montserrat', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 23px;
    color: #000000;
    padding-left: 10px;
    ::placeholder{        
        color: #000000;    
    }
`
const Button = styled.button`
    width: 326px;
    height: 46px;
    background-color: #4fa94d;
    border-radius: 5px;
    font-family: 'Montserrat', sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 23px;
    color: #FFFFFF;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 5px 0;
    cursor: pointer;
`
const LinkSignUp = styled.div`
    margin-top: 20px;    
   p{    
        text-decoration: none;
        font-family: 'Montserrat', sans-serif;
        font-style: normal;
        font-weight: 700;
        font-size: 15px;
        line-height: 18px;
        color: #FFFFFF;
   }
   a{
        text-decoration: none;
   }
`

