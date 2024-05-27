import { Col, Container, Row } from "react-grid-system"
import { Outlet } from "react-router-dom"
import { Cabecalho } from "../components/Cabecalho/Cabecalho"
import { FreelandoLogo } from "../components/Icones/FreelandoLogo"
import { IconeInstagram } from "../components/Icones/IconeInstagram"
import { IconeTwitch } from "../components/Icones/IconeTwitch"
import { IconeTwitter } from "../components/Icones/IconeTwitter"
import { IconeWhatsApp } from "../components/Icones/IconeWhatsApp"
import { Link } from "../components/Link/Link"
import { ItemListaInline } from "../components/Lista/ItemListaInline"
import { ListaInline } from "../components/Lista/ListaInline"
import { Rodape } from "../components/Rodape/Rodape"
import { Tipografia } from "../components/Tipografia/Tipografia"
import { Link as RouterLink } from "react-router-dom"
const LayoutBase = ({ children }) => {

    return (
        <>
            <Cabecalho>
                <Container>
                    <Row align="center">
                        <Col>
                            <FreelandoLogo />
                        </Col>
                        <Col style={{ textAlign: 'right' }}>

                            <RouterLink to="/login">
                                <Link>Login</Link>
                            </RouterLink>

                        </Col>
                    </Row>
                </Container>
            </Cabecalho>
            <Outlet />
            {children}
            <Rodape>
                <Container>
                    <Row align="center">
                        <Col>
                            <FreelandoLogo height={40} width={176} />
                            <Tipografia variante="legenda" componente="legenda">Desenvolvido por Alura. Projeto fictício sem fins comerciais.</Tipografia>
                        </Col>
                        <Col style={{ textAlign: 'right' }}>
                            <Tipografia variante="legenda" componente="legenda">Acesse nossas redes:</Tipografia>
                            <ListaInline>
                                <ItemListaInline>
                                    <a href="/" aria-label="Link para o WhatsApp">
                                        <IconeWhatsApp />
                                    </a>
                                </ItemListaInline>
                                <ItemListaInline>
                                    <a href="/" aria-label="Link para a Twitch">
                                        <IconeTwitch />
                                    </a>
                                </ItemListaInline>
                                <ItemListaInline>
                                    <a href="/" aria-label="Link para a Instagram">
                                        <IconeInstagram />
                                    </a>
                                </ItemListaInline>
                                <ItemListaInline>
                                    <a href="/" aria-label="Link para a Twitter">
                                        <IconeTwitter />
                                    </a>
                                </ItemListaInline>
                            </ListaInline>
                        </Col>
                    </Row>
                </Container>
            </Rodape>
        </>
    )
}

export default LayoutBase