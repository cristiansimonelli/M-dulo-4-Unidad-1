import React from 'react'

const Gafoto = (props) => {
    return (

        <main>
            <div className="holder">
                <div className="texto3">
                    <h2>Fotografía de Boda</h2>
                    <p>Si tenemos que elegir un género fotográfico mos quedamos con el que me provoque más emociones
                        positivas como la sonrisa, pero también las lágrimas, de felicidad. Las fotos de vuestra boda no
                        tiene una definición concreta ni única, pero sí un final feliz. Contar vuestra historia de amor y
                        materializarla en imágenes comienza con un feeling especial entre nosotros que me invita a merodear
                        por los rincones secretos de vuestros sentimientos y emociones. Entre el comienzo y el final,
                        sencillamente fluimos. Busco parejas salerosas que hacen del día de su boda un banquete de sabores,
                        que se atreven con la sal, pero también con la pimienta. Y un poquito de azúcar, para equilibrar.
                    </p>
                </div>
                <div id="carouselExample" className="carousel slide">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src="img/galeria-fotos/muestra/f-01.jpg" className="d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src="img/galeria-fotos/muestra/f-02.jpg" className="d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src="img/galeria-fotos/muestra/f-03.jpg" className="d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src="img/galeria-fotos/muestra/f-04.jpg" className="d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src="img/galeria-fotos/muestra/f-05.jpg" className="d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src="img/galeria-fotos/muestra/f-06.jpg" className="d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src="img/galeria-fotos/muestra/f-07.jpg" className="d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src="img/galeria-fotos/muestra/f-08.jpg" className="d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src="img/galeria-fotos/muestra/f-09.jpg" className="d-block w-100" alt="..." />
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample"
                        data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExample"
                        data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>

        </main>

    );
}

export default Gafoto;
