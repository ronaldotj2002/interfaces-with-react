import logo from '../../img/logo.png'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Nav = styled.div`
    background-color: #cfdfdf; 

`

const Header = () => {
    return (
        <Nav>
            <nav
                className="container m-auto flex-no-wrap relative flex w-full items-center justify-between  py-2 shadow-dark-mild dark:bg-surface-dark lg:flex-wrap lg:justify-start lg:py-4">
                <div className="flex w-full flex-wrap items-center justify-between px-3">

                    <div
                        className=" flex-grow basis-[100%] items-center lg:!flex lg:basis-auto"
                        id="navbarSupportedContent12"
                        data-twe-collapse-item>

                        <Link to="/" className="mb-4 me-5 ms-2 mt-3 flex items-center lg:mb-0 lg:mt-0">
                            <img
                                src={logo}
                                className="h-16"
                                alt="TE Logo"
                                loading="lazy" />
                        </Link>

                        <ul
                            className="me-auto flex flex-col ps-0 lg:flex-row"
                            data-twe-navbar-nav-ref>
                            <li className="mb-4 lg:mb-0 lg:pe-2" data-twe-nav-item-ref>

                                <Link to="/" className="text-black/60 transition duration-200 hover:text-black/80 hover:ease-in-out focus:text-black/80 active:text-black/80 motion-reduce:transition-none dark:text-white/60 dark:hover:text-white/80 dark:focus:text-white/80 dark:active:text-white/80 lg:px-2"
                                    
                                    data-twe-nav-link-ref
                                >Home</Link>
                            </li>

                            <li className="mb-4 lg:mb-0 lg:pe-2" data-twe-nav-item-ref>
                                <Link to="/lista"  className="text-black/60 transition duration-200 hover:text-black/80 hover:ease-in-out focus:text-black/80 active:text-black/80 motion-reduce:transition-none dark:text-white/60 dark:hover:text-white/80 dark:focus:text-white/80 dark:active:text-white/80 lg:px-2"
                                    
                                    data-twe-nav-link-ref
                                >Lista de itens</Link>
                            </li>

                            <li className="mb-4 lg:mb-0 lg:pe-2" data-twe-nav-item-ref>
                                <Link to="/cadastro"  className="text-black/60 transition duration-200 hover:text-black/80 hover:ease-in-out focus:text-black/80 active:text-black/80 motion-reduce:transition-none dark:text-white/60 dark:hover:text-white/80 dark:focus:text-white/80 dark:active:text-white/80 lg:px-2"
                                    data-twe-nav-link-ref
                                >Cadastro</Link>
                            </li>
                        </ul>
                    </div>


                   
                </div>
            </nav>
        </Nav>

    )
}

export default Header