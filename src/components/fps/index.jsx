import free_fire from '../imagens/fogo-gratis.jpg';
import camp_wars from '../imagens/camp_wars.jpg';
import pubg from '../imagens/pubg.jpg';
import fortnite from '../imagens/fortnite.jpg';
import call_of_duty from '../imagens/call-of-duty.webp';
import './fps.css';
import styled from 'styled-components';

const Fps = () =>{
    return(
        <>
        <div class="foto">
            <div className="imagens">
                <Imagem src= {free_fire}/>
                <div class="descrisao">fogo gatis</div>
            </div>
            <div className="imagens">
                <Imagem src= {camp_wars}/>
                 <div class="descrisao"> acampamento da guela</div>
            </div>
            <div className="imagens">
                <Imagem src= {pubg}/>
                 <div class="descrisao">p u b g</div>
            </div>
       
        </div>
        <div class="foto">
            <div className="imagens">
                <Imagem src= {fortnite}/>
                 <div class="descrisao">fortenike</div>
            </div>
            <div className="imagens">
                <Imagem src= {call_of_duty}/>
                 <div class="descrisao">call of discord</div>
            </div>

        </div>
        
        </>    
    );
}

export default Fps;

const Imagem = styled.img `
width: 550px;
height: 100%;
`;
   
    