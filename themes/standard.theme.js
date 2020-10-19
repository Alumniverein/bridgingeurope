
const breakpoints = {
    xs: 0,
    sm: 576,
    md: 768,
    lg: 992,
    xl: 1200
}

const shadowValues = {
    // flat: `none`,
    // raised: `0 1px 2px 0 rgba(0,0,0,0.10)`,
    // overlay: `0 4px 8px 0 rgba(0,0,0,0.10)`,
    // popOut: `0 12px 24px 0 rgba(0,0,0,0.10)`,
    flat: `none`,
    raised: `0 1px 2px 0 rgba(0,0,0,0.30)`,
    overlay: `0 4px 8px 0 rgba(0,0,0,0.30)`,
    popOut: `0 12px 24px 0 rgba(0,0,0,0.30)`,
}

const motion = {
    standardTransitionFunction: `transition-timing-function: cubic-bezier(0.5, 0, 0.1, 1);`,
}

const standardTheme = {

    // colors: {
    //     primary: '#003866',
    //     secondary: '#2A5486',
    //     ternary: '#202933',
    //     text: '#1E214A', // #202933
    //     primaryContrast: '#E0192E',
    //     grey: '#F5F6F7',
    //     offWhite: '#FEFAFE', //#EDEDED
    //     black: '#393939',
    // },

    colors: {
        primary: '#003866',
        secondary: '#2A5486',
        ternary: '#202933',
        text: '#1E214A', // #202933
        primaryContrast: '#ed6663',
        secondaryContrast: '#ffa372',
        grey: '#F5F6F7',
        offWhite: '#FEFAFE', //#EDEDED
        black: '#393939',
    },

    sizes: {
        maxPageWidth: '1000px',
        big: '5.063em',
        h1: '3.375em',
        h2: '2.25em',
        h3: '1.5em',
        paragraph: '1em',
        smaller: '0.667em'
    },

    shadows: {
        flat: `
            transition: box-shadow .5s;
            ${motion.standardTransitionFunction}
            box-shadow: ${shadowValues.flat};
            -moz-window-shadow: ${shadowValues.flat};
            -ms-scrollbar-shadow-color: ${shadowValues.flat};
        `,
        raised: `
            transition: box-shadow .5s;
            ${motion.standardTransitionFunction}
            box-shadow: ${shadowValues.raised};
            -moz-window-shadow: ${shadowValues.raised};
            -ms-scrollbar-shadow-color: ${shadowValues.raised};
        `,
        overlay: `
            transition: box-shadow .5s;
            ${motion.standardTransitionFunction}
            box-shadow: ${shadowValues.overlay};
            -moz-window-shadow: ${shadowValues.overlay};
            -ms-scrollbar-shadow-color: ${shadowValues.overlay};
        `,
        popOut: `
            transition: box-shadow .5s;
            ${motion.standardTransitionFunction}
            box-shadow: ${shadowValues.popOut};
            -moz-window-shadow: ${shadowValues.popOut};
            -ms-scrollbar-shadow-color: ${shadowValues.popOut};
        `,
    },

    // setup export for media queries
    devices: {
        xs: `(min-width: ${breakpoints.xs}px)`,
        sm: `(min-width: ${breakpoints.sm}px)`,
        md: `(min-width: ${breakpoints.md}px)`,
        lg: `(min-width: ${breakpoints.lg}px)`,
        xl: `(min-width: ${breakpoints.xl}px)`,
    }
}

export default standardTheme;