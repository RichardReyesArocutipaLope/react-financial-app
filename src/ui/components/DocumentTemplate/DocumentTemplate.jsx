import './DocumentTemplate.css'

export const DocumentTemplate = ({ children }) => {
    return (
        <div className='document'>
            <header className='document-header'>
                <div className='document__logo-container'>
                    <div className='document__logo'>
                        <i className="fa-brands fa-react"></i>
                    </div>
                    <p className='document__logo-title'>Richard Company</p>
                    <p className='document__logo-title2'>Desarrollo web</p>
                </div>
                <h1 className='document__title'>INVOICE</h1>
            </header>
            <body className='document-body'>
                {children}
            </body>
            <footer className='document-footer'>
                <div className='document-footer__item'>
                    <span><i className="fa-solid fa-phone"></i></span>
                    <span>
                        <p>&#40;+51&#41; 925 072 688 </p>
                        <p>&#40;+51&#41; 925 072 688 </p>
                    </span>
                </div>

                <div className='document-footer__item'>
                    <span><i className="fa-solid fa-map-location-dot"></i></span>
                    <span>
                        <p>Portal Municipal Nº44 Ayacucho. Ayacucho Unjbg ESIS ETC</p>
                    </span>
                </div>

                <div className='document-footer__item'>
                    <span><i className="fa-solid fa-envelope"></i></span>
                    <span>
                        <p>richardreyesarocutipa@gmail.com</p>
                        <p>richardreyesarocutipa@gmail.com</p>
                    </span>
                </div>
            </footer>
        </div>
    )
}
