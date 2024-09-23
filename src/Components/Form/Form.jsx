import './Form.css';

function Form() {
  return (
    <>
      <section className="Section-form">
        <div className="Form-title">
          <h2 className="Title">Cadastre um <br></br>Banco de Leite <br></br>Humano!</h2>
        </div>
        <form action="#" method="post" className="form-container">
        <fieldset className="form-fieldset">
            <div className="form-field">
             <label htmlFor="hospitalClinic">Hospital-Clinica</label>
             <input type="text" id="hospital-clinic" className="field" placeholder='Hospital ou Clinica'/>
            </div>

            <div className="form-field">
             <label htmlFor="bankMilk">Banco de Leite</label>
             <input type="text" id="milkBank" className="field" placeholder='Banco'/>
            </div>

            <div className="form-field">
             <label htmlFor="Adress">Endereço</label>
             <input type="text" id="adress" className="field" placeholder='Endereço'/>
            </div>

            <div className="form-field">
             <label htmlFor="telephone">Telefone</label>
             <input type="tel" name="telephone" id="telephone" className="field" placeholder='Telefone'/>
            </div>
            
            <div className="form-field">
             <label htmlFor="email">E-mail</label>
             <input type="email" name="email" id="email" className="field" placeholder='E-mail'/>
            </div>

            {/* <div className="form-field">
             <label htmlFor="state">Estado</label>
             <input type="text" id="state" className="field" placeholder='Estado'/>
            </div> */}

            <div className="form-field">
             <label htmlFor="register"></label>
             <input type="submit" value="Cadastrar" id="register" className="field"/>
            </div>
        </fieldset>
      </form>
      </section>
    </>
  );
}

export default Form;