import Brand from "../Brand";
import './index.css';

export default function Menu() {
	return (
		<nav className="navbar">
			<div className="content">
				<div className="logo">
					<a href="./">
						<Brand height={30} width={30} />
						LeLivros
					</a>
				</div>
				<ul className="menu-list">
					<div className="icon cancel-btn">
						<i className="fas fa-times"></i>
					</div>
					<li>
						<a href="#">Home</a>
					</li>
					<li>
						<a href="#">About</a>
					</li>
					<li>
						<a href="#">Services</a>
					</li>
					<li>
						<a href="#">Features</a>
					</li>
					<li>
						<a href="#">Contact</a>
					</li>
				</ul>
				<div className="icon menu-btn">
					<i className="fas fa-bars"></i>
				</div>
			</div>
		</nav>
	);
}
