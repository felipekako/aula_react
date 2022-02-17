import ty from '../imagens/ty.jpg';
import styled from 'styled-components';
import "./home.css";
const Home = () =>{
    return(
        <>
        <div class="imagem_Home">
        <Imagens src= {ty}/>
       </div>
        </>    
    );
}

export default Home;

const Imagens = styled.img`
     width:50vw;
    height:75vh;

`;






