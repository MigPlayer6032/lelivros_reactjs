import Menu from "./components/Menu";
import "./App.css";
import Motivo from "./components/Motivo";

export default function App() {
	return (
		<>
			<Menu />
			<div className="landing">
				<div className="wrapper">
					<div className="static-txt">Ler um livro é</div>
					<ul className="dynamic-txts">
						<li>
							<span>emocionante.</span>
						</li>
						<li>
							<span>divertido.</span>
						</li>
						<li>
							<span>interessante.</span>
						</li>
						<li>
							<span>gratuito.</span>
						</li>
					</ul>
				</div>
				<h4 className="subtitle">Foi por isso que criamos o LeLivros.</h4>
				<div className="arrow">
					<div className="arrow-animated"></div>
				</div>
			</div>
			<div className="gradient"></div>

			<Motivo iconUrl="./assets/icons/info.png" iconTitle="Informações" iconHeight={175} iconWidth={175} title={<h1>Quem Somos Nós?</h1>} description={(<p>O LeLivros é um projeto mantido por fãs do antigo site <strong>iOS Books</strong>. Quando ele foi deletado, ficamos sem aceitar que o acesso a livros digitais tinham chegado ao fim. Por isso resolvemos criar este site, permitindo que você prove de e-books de boa qualidade de qualquer lugar, a qualquer hora, totalmente de graça. Não tem desculpa pra não ler.</p>)} iconSide="right"  />
			<br />
			<br />
			<br />
			<br />
			<br />
			<br />
			<br />
			<br />
			<br />
			<br />
			<br />
			<br />
			<br />
			<br />
			<br />
			<br />
			<br />
			<br />
			<br />
			<br />
			<br />
			<br />
			<br />
			<br />
			<br />
		</>
	);
}
