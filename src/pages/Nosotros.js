import React from 'react'

const Nosotros = (props) => {
    return (

        <main>
            <div className="nosofoto">
                <img src="img/nosotros/noso-01.jpg" width="33%" alt="fiesta-01" />
                <img src="img/nosotros/noso-02.jpg" width="33%" alt="fiesta-02" />
                <img src="img/nosotros/noso-03.jpg" width="33%" alt="fiesta-03" />
            </div>

            <div className="holder">
                <div className="texto2">
                    <p>La fotografía y el video siempre ha sido un pasatiempo y una pasión para nosotros, pero fue solo
                        cuando
                        comenzamos a generar recuerdos de bodas que nos dimos cuenta de que realmente estábamos haciendo lo
                        correcto. Después de 22 años, todavía sentimos mariposas en el estómago antes de cada boda, ¡y lo
                        tomamos como una buena señal!
                    </p>
                </div>
            </div>

            <div className="persona">
                <div >
                    <img className="foto" src="img/nosotros/noso-05.jpg" width="100%" alt="Rodri" />
                </div>
                <div className="texto">
                    <h2>Rodrigo Simon</h2>
                    <p>
                        Con pasión por transmitir las emociones más puras desde lo simple, propongo crear films con impacto
                        emocional, visual y artístico, trabajando muy de cerca con las parejas para crear films que no solo
                        lleven mi visión de la boda, sino que representen a cada una de ellas desde una óptica con estilo no
                        intrusivo, íntimo, documental y cinematográfico.

                        22 años de recorrido y mi pasión por transmitir emociones y contar historias me ha llevado a
                        realizar
                        bodas por diferentes partes del país.
                    </p>
                </div>
            </div>

            <div className="persona">
                <div className="texto">
                    <h2>Claudia Lem</h2>
                    <p>
                        Soy una realizadora autodidacta, con un amor especial por las bodas y conocer gente nueva. Mi estilo
                        de trabajo es editorial y aireado con un giro periodístico. Tengo más de 10 años de experiencia en
                        bodas y, por más cliché que suene, no puedo imaginar que ame más ningún "trabajo".
                        Soy una madre demasiado emocionada que sabe la importancia de documentar los momentos fugaces.
                        Y algunos datos aleatorios sobre mí: he sido vegetariano durante 11 años y contando, tengo una
                        licenciatura en Psicología de la Universidad de Georgia
                    </p>
                </div>

                <div >
                    <img className="foto" src="img/nosotros/noso-06.jpg" width="100%" alt="Clau" />
                </div>

            </div>
        </main>

    );
}

export default Nosotros;
