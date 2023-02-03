import React from 'react'

const Galeria = (props) => {
    return (

        <main>

            <div className="holder">
                <div className="texto3">
                    <h2>Para que el día de tu boda, sea como lo soñaste.</h2>
                    <p>No creamos fotos y videos de bodas, creamos recuerdos de amor.
                        Nuestros recuerdos de amor son únicos, hechos a medida para ti y un reflejo de quién eres. Tu
                        memoria de
                        amor no solo mostrará el día de tu boda, sino que también revivirá todos los hermosos recuerdos de
                        ese
                        día. Siempre te traerá de vuelta a los bailes, las lágrimas y las risas de uno de los mejores días
                        de tu
                        vida.</p>
                </div>
                <div className="menugal">
                    <div className="menugal2">
                        <a href="/galeriaf"><img className="fotogal1" src="img/galeria-fotos/02.jpg" width="100%"
                            alt="" /></a>


                        <p> Estilo de trabajo editorial y aireado con un giro periodístico </p>
                    </div>
                    <div className="menugal2">
                        <a href="/galeriav"><img className="fotogal1" src="img/galeria-fotos/05.jpg" width="100%"
                            alt="" /></a>
                        <p>Films con impacto emocional, visual y artístico</p>
                    </div>
                </div>
                <div className="holder">
                    <h2>Testimonios</h2>
                    <br />
                    <div className="testimonio">
                        <div className="comentario">
                            <br />
                            <h4>Kathi y Mati </h4>
                            <p> Apreciaremos por siempre el trabajo, que realizaron con tanto cuidado y experiencia. Ver a
                                nuestra familia y amigos hablar nuevamente es un gran privilegio y ver nuestro intercambio
                                de votos es un regalo que realmente apreciamos.
                                Gracias, gracias, gracias. Las palabras no pueden expresar lo increíble que es su talento.
                                ¡Les mandamos un abrazo virtual!</p>
                        </div>
                        <div className="comentario">
                            <br />
                            <h4>Ingrid y Germán </h4>
                            <p>No solo son unos artistas absolutos con la forma en que cuenta una historia a través de las
                                imágenes, sino que fue maravilloso trabajar con ustedes. Quedamos impresionados por la
                                calidad, la oportunidad y la belleza del material. Fueron capaces de capturar perfectamente
                                el día de nuestra boda y todos los que han visto la película dicen que es el mejor vídeo de
                                boda que han visto. </p>
                        </div>

                        <div className="comentario">
                            <br />
                            <h4>July y Angel </h4>
                            <p> Lo que los separa de todos los demás que vimos es que realmente sabe cómo contar una
                                historia completa a través de imágenes. Su selección de tomas es increíble, su ética de
                                trabajo y profesionalismo son insuperables, y su dirección de arte es hermosa y exigente.
                                Nuestra película tiene un ritmo tan perfecto que lloramos, reímos y luego lloramos un poco
                                más de acuerdo con el desarrollo de toda la semana. Si nos deja, espero volver a trabajar
                                con él en cualquier hito futuro.</p>
                        </div>

                    </div>
                </div>
            </div>

        </main>

    );
}

export default Galeria;
