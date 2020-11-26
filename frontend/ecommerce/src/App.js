import './index.css';
import data from './data';

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
                    {
                        data.products.map(product => 
                        <li>
                        <div class="product">
                            <img class="product-image" src={product.image} alt="Fone JBL Quantum 100"/>
                            <div class="product-name">
                                <a href="product.html">{product.name}</a>
                            </div>
                        <div class="product-brand">{product.brand}</div>
                        <div class="product-price">R$ {product.price}</div>
                        </div>
                    </li>)
                    }
                   
                </ul>
            </div>
            
        </main>
        <footer class="footer">Todos os direitos reservados</footer>
    </div>
  );
}

export default App;
