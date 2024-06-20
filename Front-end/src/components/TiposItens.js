import '../css/TiposItens.css';
import CafeManha from '../assets/tipes_itens/cafe_manha.png'
import Sorvete from '../assets/tipes_itens/sorvetes.png'
import EntradaDoces from '../assets/tipes_itens/entradas_doces.png'
import Bolos from '../assets/tipes_itens/bolos.png'
import EntradaSalgada from '../assets/tipes_itens/entradas_salgadas.png'

export default function TiposItens() {
  <div className="AcessoRapido">
    <h2>Acesso Rápido Produtos</h2>
    <div class='Categorias'>
      <div className="ClassesDoce">
        <div className="Doce">
          <img src={Bolos} />
          <span>Bolos</span>
        </div>
        <div className="Doce">
          <img src={CafeManha}  />
          <span>Cafe da Manha</span>
        </div>
        <div className="Doce">
          <img src={EntradaDoces}  />
          <span>Entrada Doces</span>
        </div>
        <div className="Doce">
          <img src={EntradaSalgada}  />
          <span>Entrada Salgada</span>
        </div>
        <div className="Doce">
          <img src={Sorvete}  />
          <span>Sobremesas</span>
        </div>
      </div>
    </div>
  </div>

}
