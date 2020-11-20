import React from 'react'

export default function Footer() {
    return (
        <footer id="footer">
            <div className="inner">
                <div className="flex">
                    <div className="copyright">
                        &copy; Desenvolvido na aula de Tópicos Especiais em Programação.
                    </div>
                    <ul className="icons">
                        {
                            /*
                        <li><a href="#" className="icon fa-facebook"><span className="label">Facebook</span></a></li>
                        <li><a href="#" className="icon fa-twitter"><span className="label">Twitter</span></a></li>
                        <li><a href="#" className="icon fa-linkedin"><span className="label">linkedIn</span></a></li>
                        <li><a href="#" className="icon fa-pinterest-p"><span className="label">Pinterest</span></a></li>
                        <li><a href="#" className="icon fa-vimeo"><span className="label">Vimeo</span></a></li>
                        */
                        }
                    </ul>
                </div>
            </div>
        </footer>
    )
}
