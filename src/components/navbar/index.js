import React from "react";
import  './nav.css';
import eduardo from "../imagens/eduardo.jpg";
import styled from "styled-components";
import { Link } from "react-router-dom";

function NaveBar() {
    return (
      <nav class="navbar navbar-expand-lg navbar-light batata">
      <div class="container-fluid">
        <Eduardo src={eduardo}/>
        <Link to="/">eduardo</Link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
            <Link to="/favoritos">favoritos</Link>            </li>
            <li class="nav-item">
            <Link to="/fps">fps</Link>
  
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">na moda</a>
            </li>
            <li class="nav-item">
            <Link to="/contato">contato</Link>           
            </li>
          </ul>
        </div>
      </div>
    </nav>
    );
  }
  
  export default NaveBar;
  

 const Eduardo = styled.img`
 height:80px;
 width:80px;
 `;
