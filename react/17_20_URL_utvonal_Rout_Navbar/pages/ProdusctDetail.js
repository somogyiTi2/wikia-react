import { useParams } from 'react-router-dom';
//useParems feladata, hogy külömböző tartalommal lással el a külömböző ágakat
import { Link } from 'react-router-dom';

function ProductsDetailPage (){
    const params = useParams();
   

   
return <>
<h2>Products default</h2>
<p>{ params.prductsId}</p>
{/* App-ba megadott leágazás neve. */}
<Link to="..">Vissza (..)</Link>
{/* Ebben az esetben a főoldalra mert a / leszármazottja ez az oldal és nem a 
/products-é. */}
</>
}

export default ProductsDetailPage;