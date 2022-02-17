const Rodape =()=>{
    return(
        <>
             <footer class="bg-dark text-light">
                <div class="container-fluid py-3">
                <div class="row">
                <div class="col-4">
                    <ul class="nav flex-column">
                    <li class="nav-link"><a href="#">Retornar à Loja</a></li>
                    <li class="nav-link"><a href="#">Sobre</a></li>
                    <li class="nav-link"><a href="#">Contato</a></li>
                    <li class="nav-link"><a href="#">Suporte</a></li>
                    </ul>
                </div>
                <div class="col-8">
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem sed necessitatibus id asperiores iste fugiat,             praesentium obcaecati explicabo consequatur voluptatem eos earum blanditiis dolorem eaque veritatis libero?               Magni, nam fugiat.
                    </p>
                    <ul class="nav">
                    <li class="nav-link" ><i class="fab fa-facebook fa-3x "></i></li>
                    <li class="nav-link"><i class="fab fa-instagram fa-3x"></i></li>
                    <li class="nav-link"><i class="fab fa-twitter fa-3x"></i></li>
                    <li class="nav-link"><i class="fab fa-whatsapp fa-3x"></i></li>
                    </ul>
                </div>
                </div>
                </div>
                <div class="text-center" style="background-color: #333; padding: 20px;" >
                &copy 2018 Copyright: <a href="#">Lojas Virtuais</a>
                </div>
            </footer>
        </>
    );
}

export default Rodape;