import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
//navigáló triger. /így sincs töltési idő.

function HomePage() {
    const navigate = useNavigate();
    
    function navigationHandler() {
        navigate('/products');
    }

    return (
        <>
            <h1>My Home Page</h1>
            <p>Go to<a href="/products"> Products </a> ezzel újra töltödik így.</p>
            <p>Go to <Link to="/products">Products</Link> így nem</p>
            <button onClick={navigationHandler}>Products</button>
            <p>Klon URL <Link to="Klon">Klon</Link></p>
        </>
    );
}
export default HomePage;