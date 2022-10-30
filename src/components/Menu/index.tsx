import Brand from "../Brand";
import styles from './styles.module.css';

export default function Menu() {
	return (
		<nav className={styles.navbar} id="navbar">
			<div className={styles.content}>
				<div className="logo">
					<a href="./" className={styles.logolink}>
						<Brand height={30} width={30} />
						LeLivros
					</a>
				</div>
				<ul className={styles.menulist}>
					<div className={styles.cancelbtn}>
						<i className="fas fa-times"></i>
					</div>
					<li className={styles.menuli}>
						<a href="#" className={styles.menulink}>Home</a>
					</li>
					<li className={styles.menuli}>
						<a href="#" className={styles.menulink}>About</a>
					</li>
					<li className={styles.menuli}>
						<a href="#" className={styles.menulink}>Services</a>
					</li>
					<li className={styles.menuli}>
						<a href="#" className={styles.menulink}>Features</a>
					</li>
					<li className={styles.menuli}>
						<a href="#" className={styles.menulink}>Contact</a>
					</li>
				</ul>
				<div className="icon menu-btn">
					<i className="fas fa-bars"></i>
				</div>
			</div>
		</nav>
	);
}
