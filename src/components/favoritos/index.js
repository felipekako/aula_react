import styled from "styled-components";
import styledComponents from "styled-components";
import'./favoritos.css';
import g from '../imagens/g.png';

const Favoritos =() =>{
    return(
        <>
        <h1>minescraft</h1>
        <G src={g}/>
        </>
    )
}

export default Favoritos;

const G = styled.img`
    whidth:25px
    heithg:23px;
`;