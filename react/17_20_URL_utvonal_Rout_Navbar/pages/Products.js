import { Link } from "react-router-dom";

const PRODUCTS = [
    { id: 'p1', title: 'Product 1' },
    { id: 'p2', title: 'Product 2' },
    { id: 'p3', title: 'Product 3' },
]

function ProductsPage() {
    return (
        <>
            <h1>ProductsPage</h1>
            <p>Go <a href="/"> HOME </a> ezzel újra töltödik így...</p>
            <ul>
            {PRODUCTS.map((prod)=> 
            <li><Link to={`/products/${prod.id}`} relative="Klon">{prod.title}</Link></li>)}


                 <li><Link to="/products/ide">Próba 1</Link></li>
                <li><Link to="oda" >Próba 2</Link></li>
                <li><Link to="erre" relative="Klon">Ez relatív root ha rooton van.</Link></li>
                <a href="http://localhost:3000/Klon/products">Klon</a>
                <li><Link to="/barmi/harmadik">Hibás mert a App-bann csak a products/: van lekezelve
                </Link></li> 

            </ul>
        </>
    );
}

export default ProductsPage;