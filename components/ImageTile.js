import styled, { css } from 'styled-components'
import Link from 'next/link'

const wideStyles = css`
    grid-column: 1 / -1;
`;

const doubleStyles = css`
    grid-column: span 2;
    margin-bottom: 1rem;
`;

const heroStyles = css`
    grid-row: -1;
    grid-column: 1 / -1;
    margin-bottom: 2rem;
`;

const StyledImageTile = styled.div`
    a {
        border-radius: 3px;
        text-decoration: none;
        &:hover {
            text-decoration: none;  
        }
        display: grid;
        grid-template-columns: 1;
        grid-template-rows: 1;
        max-height: 300px;
        overflow: hidden;

        background: ${props => props.theme.colors.primary};
        color: ${props => props.theme.colors.offWhite};

        ${props => css`${props.theme.shadows.overlay}`}
        &:hover {
            ${props => css`${props.theme.shadows.popOut}`}
            /* background: lightgreen; */
        }

        /* Mobile First Style */

        img {
            grid-column: -1 / 1;
            grid-row: -1 / 1;  
            width: 100%;
            height: auto;
            opacity: 0.5;
            /* behind div.inner!! */
            z-index: 1;
        }

        div.inner {
            grid-column: -1 / 1;
            grid-row: -1 / 1;  
            padding: 1rem; 
            /* in front of img!! */
            z-index: 99;
        }
        
        /* Tablet / Medium Screen Style */
        @media ${props => props.theme.devices.md} {
            /* grid-row: ${props => props.startTime} / ${props => props.endTime || 'auto'}; */
            :hover {
                background: ${props => props.theme.colors.secondary};
            }
        }
        /* Big Screen Style */
        @media ${props => props.theme.devices.lg} {
            
        }   
        
        
    }

    /* some special styles … based on props */
    ${props => props.wide && wideStyles}
    ${props => props.double && doubleStyles}
    ${props => props.hero && heroStyles}
`

const formatTimeSpan = (startTime, endTime) => `${startTime.slice(0, 2)}:${startTime.slice(2, 4)} - ${endTime.slice(0, 2)}:${endTime.slice(2, 4)}`;

const ImageTile = ({ title, desc, startTime, endTime, leadBy, wide, image, linkedUrl, displayType }) => {
    if (displayType == "double") return (
        <StyledImageTile double>
            <Link href={linkedUrl}>
                <a>
                    <img src={`/assets/sessions/${image}-wide.jpg`} />
                    <div className='inner'>
                        <h3>{title}</h3>
                        <span>{formatTimeSpan(startTime, endTime)}</span><br />
                        <span>{leadBy}</span>
                        <p>{desc}</p>
                    </div>
                </a>
            </Link>
        </StyledImageTile>
    )

    else if (displayType == "hero") return (
        <StyledImageTile hero>
            <Link href={linkedUrl}>
                <a>
                    <img src={`/assets/sessions/${image}-wide.jpg`} />
                    <div className='inner'>
                        <h3>{title}</h3>
                        <span>{formatTimeSpan(startTime, endTime)}</span><br />
                        <span>{leadBy}</span>
                        <p>{desc}</p>
                    </div>
                </a>
            </Link>
        </StyledImageTile>
    )

    // regular form
    else return (
        <StyledImageTile wide={wide}>

            <Link href={linkedUrl}>
                <a>
                    <img src={`/assets/sessions/${image}.jpg`} />
                    <div className='inner'>
                        <h3>{title}</h3>
                        <span>{formatTimeSpan(startTime, endTime)}</span><br />
                        <span>{leadBy}</span>
                        <p>{desc}</p>
                    </div>
                </a>
            </Link>
        </StyledImageTile>
    )
};


export default ImageTile;