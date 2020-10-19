import styled, { css } from 'styled-components'

/*  TODO:
    - TileGrid mit [n] columns;
*/

const StyledTileGrid = styled.div`

    /* Mobile First style */
    display:                grid;
    grid-gap:               1rem;
    grid-template-columns:  repeat( 2 , 1fr);
    /* grid-auto-rows:         300px; */
    grid-auto-flow:         row;

    /* Tablet/Medium Display Style */
    @media ${props => props.theme.devices.md} {
        grid-template-columns: repeat( 2 , 1fr);
    }

    /* Large Display Style */
    @media ${props => props.theme.devices.lg} {
        grid-template-columns: repeat( 4 , 1fr);
    }    
`

const TileGrid = ({ children }) => (
    <StyledTileGrid>
        {children}
    </StyledTileGrid>
);

export default TileGrid;
