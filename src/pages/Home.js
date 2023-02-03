import React from 'react'

const Home = (props) => {
    return (

        <main>
            <div className="holder">
                <img src="img/home/boda-01.png" width="100%" alt="imagen portada" />
            </div>

            <div className="holder">
                <h2>Bienvenidos</h2>
                <p>Con pasión por transmitir las emociones mas puras desde lo simple, proponemos crear recuerdos con impacto
                    emocional, visual y artístico, trabajando muy de cerca con las parejas para crear un producto que no
                    solo
                    lleven nuestra visión de la boda sino que representen a cada una de ellas desde una óptica con estilo no
                    intrusivo, íntimo, documental y cinematográfico.
                </p>
                <p>
                    22 años de recorrido y nuestra pasión por transmitir emociones y contar historias nos ha llevado a
                    realizar
                    bodas por diferentes partes del pais .
                </p>
                <p>
                    Nuestro estilo de registro durante el día de la boda es discreto, captando los momentos de
                    forma espontánea con un mínimo de intervención, no trabajmos con equipos grandes ni luces artificiales
                    en
                    cámara. Pensamos que las historias del día de la boda se cuentan mejor cuando se dejan suceder por si
                    solas,
                    prestando atención y registrando esos detalles.
                </p>
            </div>
            <br />

            <div className="holder">

                <div className="camtext">
                    <div>
                        <img className="foto" src="img/home/camara.jpg" width="100%" alt="cámara" />
                    </div>

                    <div className="texto4">
                        <h2>Tatuando emociones en la memoria</h2>
                        <p>Lo que hago no es un producto o servicio, es una emoción. No es un vídeo, es una película que
                            cuenta
                            historias de amor a través de los cinco sentidos. Es un puñado de sensaciones que quiero dejar
                            tatuadas a fuego en vuestra memoria, por si algún día falla!</p>
                        <h2>El valor de los recuerdos</h2>
                        <p>«Como médanos de oro, que vienen y que van en el mar de la luz, son los recuerdos. El viento se
                            los lleva, y donde están están, y están donde estuvieron y donde habrán de estar...» Mi paisano
                            ilustre Juan Ramón escribía así de bonito sobre los recuerdos; yo sencillamente los pongo en
                            valor y los protejo. Contra viento y marea.</p>
                    </div>

                </div>
                <div className="nosofoto2">
                    <img src="img/home/home-01.jpg" width="24%" alt="" />
                    <img src="img/home/home-02.jpg" width="24%" alt="" />
                    <img src="img/home/home-03.jpg" width="24%" alt="" />
                    <img src="img/home/home-04.jpg" width="24%" alt="" />
                </div>
            </div>

        </main>
    );
}

export default Home;
