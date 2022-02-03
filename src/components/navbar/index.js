import React from "react";
import  './nav.css';
function NaveBar() {
    return (
      <nav class="navbar navbar-expand-lg navbar-light batata">
      <div class="container-fluid">
        <a class="ursoBombado" href="#">eduardo</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">terror</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">fps</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">na moda</a>
            </li>
            <li class="nav-item">
              <a class="nav-link disabled">drip</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    );
  }
  
  export default NaveBar;
  
