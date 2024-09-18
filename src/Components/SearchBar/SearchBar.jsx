import './SearchBar.css';

function SearchBar() {
  return (
    <>
      <div className="search-bar-container">
        <input type="text" className="search-bar" placeholder='Encontre um banco...'/>
        <button className="search-bar-submit">🔍</button>
        <select id="filter-bank-milk" name="filter-bank-milk">
        <option value="" data-default disabled selected>Filtre</option>
          <option value="🍼">🍼 - Banco de Leite</option>
          <option value="📫">📫 - Endereço</option>
          <option value="💌">💌 - E-mail</option>
          <option value="🧪">🧪 - hospital/Clinica</option>
          <option value="📞">📞 - Telefone</option>
        </select>
      </div>
    </>
  );
}

export default SearchBar;