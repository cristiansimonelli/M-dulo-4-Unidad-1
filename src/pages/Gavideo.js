import React from 'react'

const Gavideo = (props) => {
    return (

        <main>
            <div className="holder">
                <div className="video">
                    <h2>Kathi y Mati</h2>
                    <p>La energía fue perfecta,Kathi y Mati volaron desde Alemania con 35 invitados para el fin de
                        semana de su boda, no hay palabras para describir a esta pareja, la pasé muy bien trabajando con
                        ustedes, no puedo agradecerles lo suficiente</p>
                    <iframe src="https://player.vimeo.com/video/404864696?h=11d58f6862" width="640" height="480"
                        frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
                </div>
                <div className="video">
                    <h2>Ingrid y Germán</h2>
                    <p>Este día fue especial, me siento emocionado de compartir este video, una boda llena de momentos
                        emotivos, gracias Ingrid y Germán por dejarme ser parte de su día.</p>
                    <iframe src="https://player.vimeo.com/video/743799057?h=6e567aed49" width="640" height="480"
                        frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
                </div>
                <div className="video">
                    <h2>July y Angel</h2>
                    <p>Una boda muy bonita, Una ceremonia íntima, votos sinceros, Un amor basado en la risa, la admiración y
                        el crecimiento, probado y demostrado que es verdad.</p>
                    <iframe src="https://player.vimeo.com/video/322725610?h=f9a9265a49" width="640" height="480"
                        frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
                </div>
            </div>

        </main>

    );
}

export default Gavideo;
