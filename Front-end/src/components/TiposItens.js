import '../css/TiposItens.css';
import { useNavigate } from 'react-router-dom';
import CafeManha from '../assets/tipes_itens/cafe_manha.png';
import Sorvete from '../assets/tipes_itens/sorvetes.png';
import EntradaDoces from '../assets/tipes_itens/entradas_doces.png';
import Bolos from '../assets/tipes_itens/bolos.png';
import EntradaSalgada from '../assets/tipes_itens/entradas_salgadas.png';

export default function TiposItens() {
  const navigate = useNavigate();

  const goToProducts = () => {
    navigate("/produtos");
  }
  return (
    <div className="AcessoRapido">
      <h2>Acesso Rápido Produtos</h2>
      <div className="Categorias">
        <div className="ClassesDoce">
          <div className="Doce">
            <button className="botaoTipoDoce" onclick={goToProducts}><img src={Bolos} alt="Bolos"/></button>
            <span>Bolos</span>
          </div>
          <div className="Doce">
            <button className="botaoTipoDoce" onclick={goToProducts}> <img src={CafeManha} alt="Café da Manha"/></button>
            <span>Café da Manha</span>
          </div>
          <div className="Doce">
            <button className="botaoTipoDoce" onclick={goToProducts}> <img src={EntradaDoces} alt="Entrada Doces"/> </button>
            <span>Entrada Doces</span>
          </div>
          <div className="Doce">
            <button className="botaoTipoDoce" onclick={goToProducts}> <img src={EntradaSalgada} alt="Entrada Salgada"/> </button>
            <span>Entrada Salgada</span>
          </div>
          <div className="Doce">
            <button className="botaoTipoDoce" onclick={goToProducts}> <img src={Sorvete} alt="Sobremesas"/> </button>
            <span>Sobremesas</span>
          </div>
        </div>
      </div>
    </div>
  );
}
