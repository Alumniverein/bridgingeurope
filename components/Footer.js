// components/Header.js

import styled from 'styled-components'
import Link from 'next/link'

const StyledFooter = styled.div`
    background: ${props => props.theme.colors.grey};
    color: ${props => props.theme.colors.text};
    div.inner {
        max-width: ${props => props.theme.sizes.maxPageWidth};
        margin: 0 auto;
        padding: 2rem;

        div.grid {
            display: grid;
            grid-template-columns: 1fr;
            grid-auto-flow: row;
            @media ${props => props.theme.devices.md} {
                grid-template-columns: repeat(4, 1fr);
                grid-auto-flow: column;
            }
            grid-gap: 1.5rem;
        }

        div.lastLine {
            padding-top: 3rem;
            font-size: .75rem;
        }
    }
`

const StyledFooterBlock = styled.div`
    ul {
        padding: 0;
        margin: 0;
        list-style: none;
        display: grid;
        li {
            padding-bottom: 1rem;
        }
    }
`

const Footer = () => (
    <StyledFooter>
        <div className="inner">
            <div className="grid">
                <StyledFooterBlock>
                    <h4>Institut für Philosophie <br />und Kulturgeschichte</h4>
                    <ul>
                        <li>Dr. Frithjof Reinhardt</li>
                        <li><a target="_blank" href="https://www.nationalstiftung.de/projekte/schulbruecken/">SchulBrücken</a></li>
                    </ul>
                </StyledFooterBlock>
                <StyledFooterBlock>
                    <h4>Deutsche <br />Nationalstiftung</h4>
                    <ul>
                        <li><a target="_blank" href="https://www.nationalstiftung.de">Website</a></li>
                        <li><a target="_blank" href="https://www.facebook.com/DeutscheNationalstiftung">Facebook</a></li>
                        <li><a target="_blank" href="https://www.instagram.com/nationalstiftung">Instagram</a></li>
                    </ul>
                </StyledFooterBlock>
                <StyledFooterBlock>
                    <h4>Alumniverein <br />der SchulBrücken e.V.</h4>
                    <ul>
                        <li><a target="_blank" href="https://alumniverein.eu">Website</a></li>
                        <li><a target="_blank" href="https://www.facebook.com/Alumniverein.eu">Facebook</a></li>
                        <li><a target="_blank" href="https://www.instagram.com/alumniverein.eu/">Instagram</a></li>
                    </ul>
                </StyledFooterBlock>
                <StyledFooterBlock>
                    <h4>Bridging <br />Europe</h4>
                    <ul>
                        <li><a target="_blank" href="https://alumniverein.eu/kontakt-2/">Kontakt</a></li>
                        <li>
                            <a target="_blank" href="https://alumniverein.eu/impressum/">Impressum</a>
                        </li>
                        {/* <li>Datenschutz</li> */}
                    </ul>
                </StyledFooterBlock>
            </div>
            <div className="lastLine">
                © 2020 <a target="_blank" href="https://alumniverein.eu">Alumniverein der SchulBrücken e.V.</a> • Postfach 300143 • 41199 Mönchengladbach
            </div>
        </div>
    </StyledFooter >
);

export default Footer;
