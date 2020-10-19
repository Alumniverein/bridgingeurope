// components/Layout.js
import Meta from '../components/Meta'
import React, { Component } from 'react'
import styled, { ThemeProvider, injectGlobal } from 'styled-components'

import Header from './Header'
import Footer from './Footer'
import Nav from './Nav'


import standardTheme from '../themes/standard.theme'

const theme = standardTheme;

const StyledLayout = styled.div`
    background: white;
`

const StyledContent = styled.div`
    max-width: ${props => props.theme.sizes.maxPageWidth};
    margin: 0 auto;
    padding: 2rem;
`

export default class Layout extends Component {
    render() {
        return (
            <ThemeProvider theme={theme}>
                <StyledLayout>
                    <Header />
                    <Nav />
                    <Meta title={this.props.title || 'Meeting'} />
                    <StyledContent>
                        {this.props.children}
                    </StyledContent>
                    <Footer />
                </StyledLayout>
            </ThemeProvider>
        )
    }
}

