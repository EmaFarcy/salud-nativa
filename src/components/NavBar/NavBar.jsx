import React from "react";
import CartWidget from "../cartWidget/cartWidget";
import LogoAves from "../../assets/images/logoAves.png";
import './NavBar.css';

const styles= {
	logo_aves:{
		width: "70px",
		height: "80px"
	}
} 

const NavBar= () => {
    return (
		<>
        	<div className="container-fluid home_container">
		    	<header>
			    	<div id="menu">
				    	<nav className="nav1">
							<img src={LogoAves} alt="LogoAero" style={styles.logo_aves}></img>
                            <h1>Salud Nativa</h1>
					    	<ul>
							<li><a href="/">Home</a></li>
					    	<li><a href="/">Arbustos</a></li>
							<li><a href="/">Árboles</a></li>
                            <li><a href="/">Semillas</a></li>
					    	<li><a href="/">Sobre Nosotros</a></li>
							<li><a href="/">Contacto</a></li>
                            <li><a href="/"><CartWidget /></a></li>
				    		</ul>
				    	</nav>
				    	<div className="fake-line"></div>
						
			    	</div>
            	</header>
        	</div>
		</>
            
    );
}

export default NavBar;