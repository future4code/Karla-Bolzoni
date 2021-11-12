import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import CardPequeno from './components/CardPequeno/CardPequeno';
import styled from 'styled-components'

const Container = styled.div ` 
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30px;
`
const SecaoContainer = styled.div ` 

  width: 40vw;
  margin: 10px 0;
`

const TituloSecao = styled.h2 ` 
text-align: center;
margin-bottom: 20px;
`


function App() {
  return (
    <Container>
      <SecaoContainer>
        <TituloSecao>Dados pessoais</TituloSecao>
        <CardGrande
          imagem="https://ca.slack-edge.com/TLAVDH7C2-U02CDC8QDLZ-9ab3082e92f2-512"
          nome="Karla Natany"
          descricao="Oi, eu sou a Natany. Sou estudante de desenvolvimento web full stack na Labenu. Adoro assistir as aulas e realizar os exercícios propostos que sempre são super criativos."
        />

        <ImagemButton
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png"
          texto="Ver mais"
        />
      </SecaoContainer>

      <SecaoContainer>
        <CardPequeno
          imagem="https://cdn-icons.flaticon.com/png/512/3204/premium/3204325.png?token=exp=1636666279~hmac=9e00d0b176bea167b0d6cf37722197a4"
          texto="email:"
          email="karlanatany@hotmail.com"
        />

        <CardPequeno
          imagem="https://cdn-icons.flaticon.com/png/512/3991/premium/3991230.png?token=exp=1636667009~hmac=619de7e8418dfad6326050632967da4b"
          texto="Endereço:"
          endereco="Rua três - RS"
        />
      </SecaoContainer>

      <SecaoContainer>
        <TituloSecao>Experiências profissionais</TituloSecao>
        <CardGrande
          imagem="data:image/png;base64,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"
          nome="Vetorial"
          descricao="Suporte de backofice e assitente de projetos de redes"
        />

        <CardGrande
          imagem="https://www.diariodacidade.com.br/wp-content/uploads/2021/01/appmax.png"
          nome="Appmax"
          descricao="Atendimento ao cliente e analista do atendimento para realização de estorno."
        />
      </SecaoContainer>

      <SecaoContainer>
        <TituloSecao>Minhas redes sociais</TituloSecao>
        <ImagemButton
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png"
          texto="Facebook"
        />

        <ImagemButton
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png"
          texto="Twitter"
        />
      </SecaoContainer>
    </Container>
  );
}

export default App;
