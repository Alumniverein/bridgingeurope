import { css } from 'styled-components'

export function isValidValueOfTime(candidate) {
    /* TODO: somehow BETTER check wether startTime/endTime is an appropriate value … takes to much time now*/
    // value exists, is greater than zero and smaller than 24
    if (candidate && 0 <= candidate && candidate < 24) {
        // seems to be legit
        return true;
    }
    return false;
}

/*  creates the css grid row-template for our schedule
    @param  startTime   
    @param  endTime 
    @param  interval
    @return styles - in form of tagged css (→ styled-components) */
export function createTimeSlots(startTime = 0, endTime = 23, interval = 60) {
    /* make sure we're dealin' with integers here … */
    startTime = parseInt(startTime);
    endTime = parseInt(endTime);
    interval = parseInt(interval);

    // check - and maybe correct - the values
    if (!isValidValueOfTime(startTime)) startTime = 0;
    if (!isValidValueOfTime(endTime)) endTime = 23;

    /* if interval == 15:    4 slots/h
       if interval == 30:    2 slots/h
       if interval == 60:    1 slots/h */
    if (![15, 30, 60].includes(interval)) interval = 60;
    const hoursToDisplay = endTime - startTime;

    /* temp storage */
    let styles = '';

    /* create rows a.k.a time slots */
    for (let i = startTime; i < endTime; i += 1) {
        const currentHour = i > 9 ? i : `0${i}`;
        if (interval == 15) { // 15 min steps
            styles += `
                [start${currentHour}00]     .25fr [end${currentHour}00] 0
                [start${currentHour}15]     .25fr [end${currentHour}15] 0 
                [start${currentHour}30]     .25fr [end${currentHour}30] 0
                [start${currentHour}45]     .25fr [end${currentHour}45] 0
            `
        } else if (interval == 30) { // 15 min steps
            styles += `
                [start${currentHour}00]     .5fr  [end${currentHour}00] 0
                [start${currentHour}30]     .5fr  [end${currentHour}30] 0
            `
        } else { // 15 min steps
            styles += `
                [start${currentHour}00]     1fr   [end${currentHour}00] 0
            `
        }
    }
    return css`${styles}`;
}

/*  creates the html time tags für the schedule
    @param  startTime
    @param  endTime
    @return html - contains <span>-tags with time information / only full hours */
export function createTimeTags(startTime = 0, endTime = 24) {
    startTime = parseInt(startTime);
    endTime = parseInt(endTime);

    // check - and maybe correct - the values
    if (!isValidValueOfTime(startTime)) startTime = 0;
    if (!isValidValueOfTime(endTime)) endTime = 23;

    /* temp storage */
    let html = [];

    // create the html tags
    for (let i = startTime; i <= endTime; i++) {
        const currentHour = (i > 9) ? i : `0${i}`;
        html.push(
            <span key={`time${currentHour}00`}
                className="time-tag"
                style={{ gridColumn: 'times', gridRow: `start${currentHour}00` }}>
                {currentHour}:00
            </span>
        )
    }
    return html;
}