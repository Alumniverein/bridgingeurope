// components/Header.js
import Link from 'next/link'
import styled from 'styled-components'

const StyledNav = styled.div`
    background: ${props => props.theme.colors.grey};
    div.inner {
        max-width: ${props => props.theme.sizes.maxPageWidth};
        margin: 0 auto;
        padding: 2rem;
        list-style: none; 

        ul {
            margin: 0;
            padding: 0;
            li{
                display: inline;
                margin: 0;
                margin-right: 2rem;
                Link {
                    :hover {
                        text-decoration: underline;
                    }
                }
            }
        }

    }
`



const Nav = () => (
    <StyledNav>
        <div className="inner">
            <ul>
                <li>
                    <Link href="/">
                        <a>Start</a>
                    </Link>
                </li>
                <li>
                    <Link href="/programm">
                        <a>Programm</a>
                    </Link>
                </li>
                <li>
                    <Link href="/anmeldung">
                        <a>Anmeldung</a>
                    </Link>
                </li>
            </ul>
        </div>
    </StyledNav>
);

export default Nav;
