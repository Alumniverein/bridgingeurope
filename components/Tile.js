import Link from 'next/link'
import styled, { css } from 'styled-components'

function getBackgroundColor(type, colors) {
    // if (type == 'calm') return `background: ${colors.offWhite};`
    if (type == 'calm') return `background: ${colors.secondary}; color: ${colors.offWhite};`
    if (type == 'active') return `background: ${colors.primaryContrast}; color: ${colors.offWhite};`
    if (type == 'formal') return `background: ${colors.primary}; color: ${colors.offWhite};`
    if (type == 'planned') return `background: ${colors.black}; color: ${colors.offWhite}; opacity: .5!important;`
    return `background: ${colors.offWhite};`
};

const StyledTile = styled.div`
    border-radius: 3px;
    /* background:     ${props => props.theme.colors.offWhite}; */
    color: ${props => props.theme.colors.text};
    ${props => getBackgroundColor(props.type, props.theme.colors)}

    ${props => css`${props.theme.shadows.raised}`}
    &:hover {
        ${props => css`${props.theme.shadows.popOut}`}
        /* background: lightgreen; */
    }

    /* Mobile First Style */
    div.inner {
        margin: 0; padding: 0; 
        padding:        2rem; 
        grid-row:       auto;
        grid-column:    1;
        h3 {
            margin: 0; padding: 0; 
            span {
                line-height:    .75rem;
                font-size:      .75rem;
            }
        }
        p {
            padding-bottom: 2rem;
        }
    }

    /* Tablet / Medium Screen Style */
    @media ${props => props.theme.devices.md} {
        grid-column: ${props => props.track};
        grid-row: start${props => props.startTime} / end${props => props.endTime || 'auto'};
    }

    /* Big Screen Style */
    @media ${props => props.theme.devices.lg} {

    }    
`
const Tile = ({ title, desc, timespan, leadBy, track, startTime, endTime, linkedUrl, type }) => (
    <StyledTile track={track} startTime={startTime} endTime={endTime} type={type}>
        <Link href={linkedUrl}>
            <div className='inner'>
                <h3>{title}</h3>
                <span>{timespan}</span><br />
                <span>{leadBy}</span>
                <p>{desc}</p>
            </div>
        </Link>
    </StyledTile>
);

export default Tile;