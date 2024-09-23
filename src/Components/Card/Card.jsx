import './Card';

function Card() {
    return (
        <>
            <section className="Cards">
                <article className="card">
                    <header className="header">
                        <h2>ACRE</h2>
                    </header>
                    <div className="content">
                        <h3>Banco de Leite Humano da Maternidade e Clinica de Mulheres Bárbara Heliodora</h3>
                        <p className="sub-info">Maternidade Bárbara Heliodora</p>
                        <p className="info">📍 Av. Getulio Vargas, 811, Centro, Rio Branco - CEP: 69900-373</p>
                        <p className="info">📞 0800-6471060 / 68-3224-1290</p>
                        <p className="info">✉️ <a href="mailto:blh.acre@gmail.com">blh.acre@gmail.com</a></p>
                    </div>
                </article>

                <article className="card">
                    <header className="header">
                        <h2>AMAPÁ</h2>
                    </header>
                    <div className="content">
                        <h3>Banco de Leite Humano do Hospital da Mulher Mãe Luzia</h3>
                        <p className="sub-info">Hospital da Mulher Mãe Luzia</p>
                        <p className="info">📍 Av. Fab, 81, Centro, Macapa - CEP: 68906-007</p>
                        <p className="info">📞 96-3225-8732</p>
                        <p className="info">✉️ <a href="mailto:bancodeleite.ap@gmail.com">bancodeleite.ap@gmail.com</a></p>
                    </div>
                </article>

                <article className="card">
                    <header className="header">
                        <h2>ALAGOAS</h2>
                    </header>
                    <div className="content">
                        <h3>Banco de Leite Humano Ivete França Lima</h3>
                        <p className="sub-info">Hospital Regional de Arapiraca</p>
                        <p className="info">📍 Rua Padre Cícero S/N, S/Nº, Centro, Arapiraca - CEP: 57300-000</p>
                        <p className="info">📞 82-8109-9112</p>
                        <p className="info">✉️ <a href="mailto:mariapatricia_rolim@yahoo.com.br">mariapatricia_rolim@yahoo.com.br</a></p>
                    </div>
                </article>

                <article className="card">
                    <header className="header">
                        <h2>PERNAMBUCO</h2>
                    </header>
                    <div className="content">
                        <h3>Banco de Leite Humano João Aprígio Guerra de Almeida</h3>
                        <p className="sub-info">Centro Integrado de Saúde Amauri de Medeiros - CISAM</p>
                        <p className="info">📍 Avenida Visconde de Mamanguape s/n, Encruzilhada Recife - CEP: 52030-010</p>
                        <p className="info">📞 81-3182-7720</p>
                        <p className="info">✉️ <a href="mailto:blhcisam@gmail.com">blhcisam@gmail.com</a></p>
                    </div>
                </article>
            </section>
        </>
    );
}

export default Card;
