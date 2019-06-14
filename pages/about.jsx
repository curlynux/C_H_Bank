import "../static/css/style.css";
import Head from "../components/head";
import $ from "jquery";
import React, { Component } from "react";
import Link from "next/link";
import Navbar from "../components/navbar";

class About extends Component 
{
    render () {
        return (
            <div className="content is-large">
                <Head />
                <Navbar/>
                <div className="about">
                <h1 className="subtitle is-1">qu-est-ce-que curlynux_hardware.fr ?</h1>
                <h3 className="subtitle is-3">
                    curlynux_hardware.fr est un site e-commerce qui réinvente la façon de vendre du matériel informatique
                </h3>

<p>
    marre d'erré dans les rayons informatique des heures sans vraiment savoir quoi choisir ?
    </p> 
<br />
<p>naviguer sur des dizaines de pages internet sans être sûre de ce que vous cherchez ?</p>
<br />
<p>
curlynux_hardware.fr est fait pour vous !
</p>
<br />
<p>je vous accompagne dans votre aventure sur mon site en vous recommandent LE produit qu'il vous faut !</p>
<br />
<p>vous êtes graphiste, UX/UI/designer, developpeur, architecte, banque/finance, notaire/avocat, gameur/streamer/youtuber, beatmaker. j'ai ce qu'il vous faut !</p>
<br/>
<p>en moins de 5 minutes vous trouvez votre bonheur !

tout le monde y trouve son compte ! étudiant, salarié, demandeur d'emploi, école, centre de formation, entreprises.</p>
<br/>
</div>
            </div>
        )
    }
}

export default About;