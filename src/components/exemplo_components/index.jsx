import styled from "styled-components";
import styledComponents from "styled-components";
import'./exemplo_components.css';
import exemplo_imagem from './imagens/nomedaimagem.extensão_dela';

const Exemplo =() =>{
    return(
        <>
        <h1>minescraft</h1>
        <Exemplo_img src={exemplo_imagem}/>
        </>
    )
}

export default Exemplo

const Exemplo_img = styled.img`
    whidth:253px
    heithg:253px;
`;