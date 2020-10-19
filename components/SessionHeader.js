// import Avatar from '../components/avatar'
// import DateFormatter from '../components/date-formatter'
// import CoverImage from '../components/cover-image'
// import PostTitle from '../components/post-title'

import styled from 'styled-components'

const StyledHeaderImage = styled.div`
    width: 100%;
    max-height: 300px;
    overflow: hidden;
    img {
        width: 100%;
        opacity: .5;
    }
    background: ${props => props.theme.colors.secondary};
`

export default function SessionHeader({ title, image }) {
    return (
        <>
            <h2>{title}</h2>
            {/* <div className="mb-8 md:mb-16 sm:mx-0"> */}
            <div>
                <StyledHeaderImage>
                    <img title={title} alt={title} src={image} />
                </StyledHeaderImage>
            </div>
        </>
    )
}