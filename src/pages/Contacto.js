import React from 'react'

const Contacto = (props) => {
    return (

        <main>
            <div className="holder">
                <div className="centrar">
                    
                    <h2>SÍ QUIERO</h2>
                    <h3>Aunque este 'Sí Quiero' no es el más importante ni el definitivo, si querés contar conmigo podés
                        contactarme y preguntar cualquier duda que haya podido surgir.</h3>
                    <p>Teléfono: 02932 - 15416507</p>
                </div>
                
                <div className="centrar" >
                    <a href="https://www.instagram.com/logik_digital/" target="_blank"><img src="img/insta-logo.png" width="30"
                        alt="logo-logik" /></a>
                    <a href="https://vimeo.com/user10245203" target="_blank"><img src="img/vimeo-logo.png" width="30"
                        alt="logo-logik" /></a>
                </div>
                
                <div className="centrar">
                    <h2>Solicitar presupuesto</h2>
                    <form action="">
                        <p>Nombre y Apellido</p>
                        <input type="text" className="field" /> <br />

                        <p>Email</p>
                        <input type="text" className="field" /> <br />

                        <p>Teléfono</p>
                        <input type="text" className="field" /> <br />

                        <p>Fecha del evento</p>
                        <input type="date" className="field" /> <br />

                        <p>Lugar del evento</p>
                        <input type="text" className="field" /> <br />

                        <p>Mensaje</p>
                        <textarea className="field"></textarea> <br />
                        <p>
                            <input type="submit" className="btn" value="Enviar datos" />
                        </p>
                    </form>
                </div>
            </div>

        </main>

    );
}

export default Contacto;
