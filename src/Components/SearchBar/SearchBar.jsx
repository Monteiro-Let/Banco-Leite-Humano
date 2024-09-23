import { useEffect, useState } from 'react';
import './SearchBar.css';
import axios from 'axios';

function SearchBar() {
  const [banks, setBanks] = useState([]); // Estado para armazenar todos os bancos de leite
  const [filteredBanks, setFilteredBanks] = useState([]); // Estado para armazenar os bancos filtrados
  const [searchTerm, setSearchTerm] = useState(""); // Estado para armazenar o termo de pesquisa

  // Função para buscar todos os bancos de leite humano
  const searchBank = async () => {
    try {
      const { data } = await axios.get("http://localhost:4003/banks"); // A URL deve apontar para a porta correta
      console.log("Dados recebidos da API:", data);
      setBanks(data.banks); // Armazena os bancos recebidos no estado
      setFilteredBanks(data.banks); // Inicializa os bancos filtrados
    } catch (error) {
      console.error('Erro ao buscar os dados:', error);
    }
  };

  // Função que será executada ao clicar no botão de busca
  const handleSearch = () => {
    console.log("Termo de pesquisa:", searchTerm);
    if (searchTerm) {
      const filtered = banks.filter((bank) =>
        bank.local.toLowerCase().includes(searchTerm.toLowerCase())
      );
      console.log("Bancos filtrados:", filtered);
      setFilteredBanks(filtered); // Atualiza o estado dos bancos filtrados
    } else {
      setFilteredBanks(banks); // Exibe todos os bancos se não houver busca
    }
  };

  // Chama a função de busca quando o componente é montado
  useEffect(() => {
    searchBank();
  }, []);

  return (
    <>
      <div className="search-bar-container">
        <input
          type="text"
          className="search-bar"
          placeholder="Encontre um banco..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)} // Atualiza o termo de pesquisa
        />
        <button className="search-bar-submit" onClick={handleSearch}>🔍</button>
        <select id="filter-bank-milk" name="filter-bank-milk">
          <option value="" disabled>Filtre um dado</option>
          <option value="🍼">🍼 - Banco de Leite</option>
          <option value="📫">📫 - Endereço</option>
          <option value="💌">💌 - E-mail</option>
          <option value="🧪">🧪 - Hospital/Clínica</option>
          <option value="📞">📞 - Telefone</option>
        </select>
      </div>

      Renderizando os bancos filtrados
      <div className="banks-list">
        {filteredBanks.length > 0 ? (
          filteredBanks.map((bank) => (
            <div key={bank.id} className="bank-item">
              <h3>{bank.local}</h3>
              <p>Endereço: {bank.adress}</p>
              <p>Telefone: {bank.phone}</p>
              <p>Email: {bank.email}</p>
            </div>
          ))
        ) : (
          <p>Nenhum banco encontrado.</p>
        )}
      </div>
    </>
  );
}

export default SearchBar;
