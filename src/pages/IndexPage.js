import React from 'react';

export default class IndexPage extends React.Component {
    render() {
        return (
            <div className="index-page">
                <div className="container-fluid">

                    <div class="hero">
                        <div class="container">
                            <div className="row">
                                <div className="col-md-2">
                                </div>
                                <div className="col-md-8">
                                    <h1 class="display-4 text-center">can coll</h1>
                                    <p class="lead text-center">cuina tradicional catalana</p>
                                </div>
                                <div className="col-md-2">
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-2">
                                </div>
                                <div className="col-md-8">
                                    <div class="text-center panel bw">
                                        <button id="singlebutton" name="singlebutton" class="">Reservar taula</button>
                                    </div>
                                </div>
                                <div className="col-md-2">
                                </div>
                            </div>

                        </div>

                    </div>

                </div>
                    <footer style={{ marginTop: `2rem`, padding: '2rem', backgroundColor: '#f7e9b9' }}>
                        <div class="container">
                            <div class="row">
                                <div class="col-md-4 col-sm-4 col-xs-12">
                                    <h2> Can Coll</h2>
                                    <p>Situat en una masia del segle XVI a Polinya - Valles Occidental - amb mes de 50 anys oferint una cuina catalana tradicional, destacant en carns a la brasa i amb productes de proximitat.<br />Coneguts a la zona per las nostres mongetes del ganxet, complement ideal per carns, que podrá gaudir en un ambient familiar i acollidor amb el millor tracte personal.</p>
                                    <div class="mrgn-30-top-btm text-center">
                                        <img src="/img/divider-black.svg" alt="" />
                                    </div>
                                </div>

                                <div class="col-md-4 col-sm-4 col-xs-12">
                                    <h4>Informació</h4>
                                    <ul class="list-unstyled weekdays">
                                        <li><a href="/ca/p-38/InformaciA/">Informació</a></li>
                                        <li><a href="/ca/p-25/Carta/">Carta</a></li>
                                        <li><a href="/ca/p-27/MenA-CalAots-a-dojo/">Menú Calçots a dojo</a></li>
                                        <li><a href="/ca/p-26/MenA-CalAots-simple/">Menú Calçots simple</a></li>
                                        <li><a href="/ca/p-46/MenA-Diari/">Menú Diari</a></li>
                                        <li><a href="/ca/p-42/MenA-del-Mes/">Menú del Mes</a></li>
                                        <li><a href="/ca/p-43/MenA-Can-Coll/">Menú Can Coll</a></li>
                                        <li><a href="/ca/p-24/MenAs-de-Grups/">Menús de Grups</a></li>
                                        <li><a href="/ca/p-35/MenAs-Celebracions/">Menús Celebracions</a></li>
                                        <li><a href="/ca/p-23/MenA-Petits-i-JAniors/">Menú Petits i Júniors</a></li>
                                        <li><a class="" href="/ca/contacte/"> </a></li>
                                        <li><a href="/ca/p-3/_/">Avís Legal</a></li>
                                    </ul>
                                </div>

                                <section class="col-md-4 col-xs-12 newsletter-block">
                                    <h4 class="padding-5-10">Ens pot visitar a:</h4>
                                    <ul class="list-unstyled">
                                        <li>C/Onze de Setembre, 15</li>
                                        <li>08213 Polinyà</li>
                                        <li>93 713 02 89 - 610 26 06 50</li><br />
                                        <li>De Lunes a Sabado de 13:00 a 16:00<br /> Domingo de 13:00 a 16:30<br />De Lunes a Jueves de 20:30 a 23:00<br />Viernes y Sabado de 20:30 a 23:30</li>
                                    </ul>
                                </section>

                            </div>
                        </div>
                    </footer>
            </div>



        );
    }
}

