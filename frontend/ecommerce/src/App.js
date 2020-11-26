import './index.css';

function App() {

    const openMenu = () => {
        document.querySelector(".sidebar").classList.add("open");
    }

    const closeMenu = () => {
        document.querySelector(".sidebar").classList.remove("open");
    }

  return ( 
    <div class="grid-container">
        <header class="header">
            <div class="brand">
                <button onClick={openMenu}>
                    &#9776;
                </button>
                <a href="index.html"> Shopping do Povo</a>
            </div>
            <div class="header-links">
                <a href="pagamento.html">Pagamento</a>
            </div>          
        </header>
        <aside class="sidebar">
            <h3>Categorias de Produtos</h3>
            <button  class="sidebar-close-button" onClick={closeMenu}>x</button>
            <ul>
                <li>
                    <a href="index.html">PCs e Notebooks</a>
                </li>
                <li>
                    <a href="index.html">Periféricos</a>
                </li>
            </ul>
        </aside>
        <main class="main">
            <div class="content">
                <ul class="products">
                    <li>
                        <div class="product">
                            <img class="product-image" src="/images/fone.jpg" alt="Fone JBL Quantum 100"/>
                            <div class="product-name">
                                <a href="product.html">Headset</a>
                            </div>
                            <div class="product-brand">JBL</div>
                            <div class="product-price">R$ 272.00</div>
                        </div>
                    </li>
                    <li>
                        <div class="product">
                            <img class="product-image" src="/images/fone.jpg" alt="Fone JBL Quantum 100"/>
                            <div class="product-name">
                                <a href="product.html">Headset</a>
                            </div>
                            <div class="product-brand">JBL</div>
                            <div class="product-price">R$ 272.00</div>
                        </div>
                    </li>
                    <li>
                        <div class="product">
                            <img class="product-image" src="/images/fone.jpg" alt="Fone JBL Quantum 100"/>
                            <div class="product-name">
                                <a href="product.html">Headset</a>
                            </div>
                            <div class="product-brand">JBL</div>
                            <div class="product-price">R$ 272.00</div>
                        </div>
                    </li>
                    <li>
                        <div class="product">
                            <img class="product-image" src="/images/fone.jpg" alt="Fone JBL Quantum 100"/>
                            <div class="product-name">
                                <a href="product.html">Headset</a>
                            </div>
                            <div class="product-brand">JBL</div>
                            <div class="product-price">R$ 272.00</div>
                        </div>
                    </li>
                    <li>
                        <div class="product">
                            <img class="product-image" src="/images/fone.jpg" alt="Fone JBL Quantum 100"/>
                            <div class="product-name">
                                <a href="product.html">Headset</a>
                            </div>
                            <div class="product-brand">JBL</div>
                            <div class="product-price">R$ 272.00</div>
                        </div>
                    </li>
                </ul>
            </div>
            
        </main>
        <footer class="footer">Todos os direitos reservados</footer>
    </div>
  );
}

export default App;
