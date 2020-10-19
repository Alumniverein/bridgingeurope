// components/Header.js
import styled from 'styled-components'

const StyledHeader = styled.div`
    background: ${props => props.theme.colors.primary};
    color: ${props => props.theme.colors.offWhite};
    border-bottom: 1em solid ${props => props.theme.colors.secondary};

    div.inner {
        max-width: ${props => props.theme.sizes.maxPageWidth};
        margin: 0 auto;
        display: grid;
        grid-auto-flow: row;
        grid-template-columns: 1fr;
        
        div.text-container {
            padding: 2rem;
            ul {
                font-size: .8em;
                @media ${props => props.theme.devices.md} {
                    font-size: 1em;
                }
                padding: 0;
                margin: 0;
                list-style: none;
                display: flex;
                li { 
                    span {
                        padding-right: .5rem
                    }
                    padding-right: 2rem;
                }
            }
        }
    }
`

const StyledLogo = styled.div`
    max-width: 256px;
    img {
        margin-left: -.25em;
        width: 100%;
        height: auto;
    }
`

const StyledLogoContainer = styled.div`
    padding-left: 2rem;
    padding-right: 2rem;
    padding-bottom: 2rem;
    justify-self: left;

    @media ${props => props.theme.devices.md} {
        justify-self: right;
        align-self: end;
    }
    div.inner {
        display: grid;
        width: calc(64px + 1em);
        @media ${props => props.theme.devices.md} {
            width: calc(128px + 1em);
        }
        grid-template-columns: 1fr 1fr;
        grid-gap: 1em;
        img {
            max-height: 32px;
            @media ${props => props.theme.devices.md} {
                max-height: 64px;
            }
        }
    }
`

const Header = () => (
    <StyledHeader>
        <div className="inner">
            { /* <h1 className="title">Bridging Europe</h1> */}
            <div className="text-container">
                <h1 className="title">
                    <StyledLogo>
                        <img src="/assets/logos/512w/be-transparent.png" alt="Bridging Europe" title="Bridging Europe" />
                    </StyledLogo>
                </h1>
                <h2 className="subtitle">Online wiedersehen. Freunde treffen. Vernetzen.</h2>
                <ul>
                    <li><span>⏰</span> 15. November 2020</li>
                    <li><span>💻 </span> via Zoom</li>
                </ul>
            </div>
            <StyledLogoContainer>
                <div className="inner">
                    <a target="_blank" href="https://alumniverein.eu">
                        <img src="/assets/logos/SVG/alumni-logo.svg" alt="Alumniverein der SchulBrücken e.V." title="Alumniverein der SchulBrücken e.V." />
                    </a>
                    <a target="_blank" href="https://www.nationalstiftung.de">
                        <img src="/assets/logos/SVG/dns-logo.svg" alt="Deutsche Nationalstiftung" title="Deutsche Nationalstiftung" />
                    </a>
                </div>
            </StyledLogoContainer>
        </div>
    </StyledHeader>
);

export default Header;