import { BrowserRouter } from "react-router-dom";
import { Footer } from "./modules/Footer";
import { Header } from "./modules/Header";
import { Main } from "./modules/Main";
import { ProductProvider } from "./context/ProductContext";

function App() {

  return (
    <BrowserRouter>
      <ProductProvider>
        <Header />
        <Main />
        <Footer />
      </ProductProvider>
    </BrowserRouter>
  );
}

export default App;
