import "./App.css";
import { Footer } from "./components/Footer/Footer";
import ItemListConteiner from "./components/ItemListConteiner/ItemListConteiner";
import NavBar from "./components/NavBar/NavBar";
import { Link } from "react-router-dom";
import {BrowserRouter, Routes, Route} from "react-router-dom"

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<ItemListConteiner title="Home">
        <div className="productConteiner">
          <div className="productBox">
            <img src="src\img\hoodie-1.png" alt="" />
            <h2>Hoodie 1</h2>
            <p>$35.200,50</p>
          </div>
          <div className="productBox">
            <img src="src\img\hoodie-2.png" alt="" />
            <h2>Hoodie 2</h2>
            <p>$32.800,20</p>
          </div>
          
        </div>
        <div className="productConteiner">
          <div className="productBox">
            <img src="src\img\pants-1.png" alt="" />
            <h2>Pant 1</h2>
            <p>$44.500,00</p>
          </div>
          <div className="productBox">
            <img src="src\img\pants-2.png" alt="" />
            <h2>Pant 2</h2>
            <p>$38.600,90</p>
          </div>
        </div>
        <div className="productConteiner">
        <div className="productBox">
          <img src="src\img\t-shirt-1.png" alt="" />
          <h2>Shirt 1</h2>
          <p>$27.000,00</p>
        </div>
        <div className="productBox">
          <img src="src\img\t-shirt-2.png" alt="" />
          <h2>Shirt 1</h2>
          <p>$25.400,70</p>
        </div>
        </div>
      </ItemListConteiner>} />
      <Route path="/products/t-shirts" element={<ItemListConteiner title="T-Shirts">
        <div className="productConteiner">
        <div className="productBox">
          <img src="../src\img\t-shirt-1.png" alt="Remera 1" />
          <h2>Shirt 1</h2>
          <p>$27.000,00</p>
        </div>
        <div className="productBox">
          <img src="../src\img\t-shirt-2.png" alt="Remera 2" />
          <h2>Shirt 2</h2>
          <p>$25.400,70</p>
        </div>
        </div>
      </ItemListConteiner>} />
      <Route path="/products/hoodies" element={<ItemListConteiner title="Hoodies">
        <div className="productConteiner">
          <div className="productBox">
            <img src="../src\img\hoodie-1.png" alt="" />
            <h2>Hoodie 1</h2>
            <p>$35.200,50</p>
          </div>
          <div className="productBox">
            <img src="../src\img\hoodie-2.png" alt="" />
            <h2>Hoodie 2</h2>
            <p>$32.800,20</p>
          </div>
        </div>
      </ItemListConteiner>} />
      <Route path="/products/pants" element={<ItemListConteiner title="Pants">
        <div className="productConteiner">
          <div className="productBox">
            <img src="../src\img\pants-1.png" alt="" />
            <h2>Pant 1</h2>
            <p>$44.500,00</p>
          </div>
          <div className="productBox">
            <img src="../src\img\pants-2.png" alt="" />
            <h2>Pant 2</h2>
            <p>$38.600,90</p>
          </div>
        </div>

      </ItemListConteiner>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
