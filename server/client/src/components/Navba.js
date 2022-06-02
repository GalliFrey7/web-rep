import React, {useContext} from 'react';
import {Button, Nav, Navbar} from "react-bootstrap";
import {NavLink} from "react-router-dom";
import {ADMIN_ROUTE, LOGIN_ROUTE, SHOP_ROUTE} from "../utils/consts";
import {Context} from "../index";
import {observer} from "mobx-react-lite";
import {useNavigate} from "react-router-dom";

const Navba = observer(() => {
    const {user} = useContext(Context)
    const navigate = useNavigate()

    const logOut = () => {
        user.setUser({})
        user.setIsAuth(false)
    }

    return (
        <Navbar bg="dark" variant="dark">
            <NavLink style={{color:'white'}} to={SHOP_ROUTE}>КупиДеШеВо</NavLink>
            {user.isAuth ?

                <Nav className="m-lg-auto" style={{color: "white"}}>
                    <Button
                        variant={"outline-light"}
                        onClick={() => navigate(ADMIN_ROUTE)}
                    >
                        Админ панель
                    </Button>
                    <Button
                        variant={"outline-light"}
                        onClick={() => logOut()}
                    >
                        Выйти
                    </Button>
                </Nav>
                :
                <Nav className="m-lg-auto" style={{color: "white"}}>
                    <Button variant={"outline-light"} onClick={() => navigate(LOGIN_ROUTE)}>Авторизация</Button>
                </Nav>
            }
        </Navbar>
    );
});

export default Navba;