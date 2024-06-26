import '../css/TiposItens.css';
import CafeManha from '../assets/tipes_itens/cafe_manha.png';
import Sorvete from '../assets/tipes_itens/sorvetes.png';
import EntradaDoces from '../assets/tipes_itens/entradas_doces.png';
import Bolos from '../assets/tipes_itens/bolos.png';
import EntradaSalgada from '../assets/tipes_itens/entradas_salgadas.png';

export default function TiposItens() {
  return (
    <div className="AcessoRapido">
      <h2>Acesso Rápido Produtos</h2>
      <div className="Categorias">
        <div className="ClassesDoce">
          <div className="Doce">
            <img src={Bolos} alt="Bolos"/>
            <span>Bolos</span>
          </div>
          <div className="Doce">
            <img src={CafeManha} alt="Café da Manha"/>
            <span>Café da Manha</span>
          </div>
          <div className="Doce">
            <img src={EntradaDoces} alt="Entrada Doces"/>
            <span>Entrada Doces</span>
          </div>
          <div className="Doce">
            <img src={EntradaSalgada} alt="Entrada Salgada"/>
            <span>Entrada Salgada</span>
          </div>
          <div className="Doce">
            <img src={Sorvete} alt="Sobremesas"/>
            <span>Sobremesas</span>
          </div>
        </div>
      </div>
    </div>
  );
}
