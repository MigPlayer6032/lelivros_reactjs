import Brand from "./Brand";

export default function Menu() {
	return (
		<nav className="navbar navbar-expand-lg bg-light">
			<div className="container-fluid">
				<a className="navbar-brand" href="#">
					<Brand width={30} height={30}></Brand>
					LeLivros
				</a>
				<button
					className="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarSupportedContent"
					aria-controls="navbarSupportedContent"
					aria-label="Toggle navigation"
				>
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarSupportedContent">
					<ul className="navbar-nav me-auto mb-2 mb-lg-0">
						<li className="nav-item">
							<a className="nav-link active" aria-current="page" href="#">
								Início
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#">
								Preços
							</a>
						</li>
					</ul>
					<div className="d-flex">
						<button className="btn btn-danger login-button">Minha Conta</button>
					</div>
				</div>
			</div>
		</nav>
	);
}
