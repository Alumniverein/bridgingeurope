import styled from 'styled-components'
import React, { Component } from 'react'

import Tile from './Tile'

// get our helpers
import { isValidValueOfTime, createTimeSlots, createTimeTags } from '../lib/schedule.helpers'

const StyledScheduleGrid = styled.div`

    /* Mobile First Styles */
    display: grid;
    grid-gap: 1rem;
    grid-template-rows: auto;
    grid-template-columns: [track] 1fr;
    /* don't show tags in mobile version */
    .time-tag, .track-tag { display: none; }

    /* Tablet or Medium Screen Style */
    @media ${props => props.theme.devices.md} {
        /* show the tags */
        .track-tag, .time-tag {
            font-size: .75em; /* but smaller */
            font-weight: bolder;
            display: block;
        }

        /*  TODO: 
            Generate Tracks if there are any slots in parallel; 
            Otherwise just use one single track 
        */
        grid-template-columns:  [times]    2.5rem /* tag column smaller too */
                                [track1]   1fr
                                [track2]   1fr
                                [track3]   1fr;

        grid-template-rows: [tracks]       auto
                            ${props => createTimeSlots(props.startTime, props.endTime, props.interval)};
                          
    }

    /* Big Screen Style */
    @media ${props => props.theme.devices.lg} {

        .track-tag, .time-tag {
            font-size: 1em;
            font-weight: bolder;
            display: block;
        }

        grid-template-columns: [times]    4rem
        [blank]    0
        [track1]   1fr
        [track2]   1fr
        [track3]   1fr;
    }
`

export default class ScheduleGrid extends Component {
    render() {
        const { sessions } = this.props;

        // calc the start time for our schedule
        const startTimeReducer = (currentStartTime, session) => {
            const current = parseInt(session.startTime.slice(0, 2), 10); // https://stackoverflow.com/questions/8763396/javascript-parseint-with-leading-zeros
            // console.log(`Check if ${current} is SMALLER than ${currentStartTime}: ${current < currentStartTime}`)
            if (current < currentStartTime) return current;
            return currentStartTime;
        }
        const startTime = sessions.reduce(startTimeReducer, 23);

        // calc the end time for our schedule
        const endTimeReducer = (currentStartTime, session) => {
            const current = parseInt(session.startTime.slice(0, 2), 10);
            // console.log(`Check if ${current} is BIGGER than ${currentStartTime}: ${current > currentStartTime}`)
            if (current > currentStartTime) return current;
            return currentStartTime;
        }
        const endTime = sessions.reduce(endTimeReducer, 0);

        // set the interval (a.k.a. steps of 15/30/60 mins)
        const interval = 15;

        // format time
        const formatTimeSpan = (startTime, endTime) => `${startTime.slice(0, 2)}:${startTime.slice(2, 4)} - ${endTime.slice(0, 2)}:${endTime.slice(2, 4)}`;

        return (
            <StyledScheduleGrid
                startTime={startTime}
                endTime={endTime}
                interval={interval}>

                {   // insert tags 
                    createTimeTags(startTime, endTime)
                }

                {   // place the Tiles
                    sessions.map(session => (
                        < Tile
                            key={session.title}
                            title={session.title}
                            desc={session.excerpt}
                            timespan={formatTimeSpan(session.startTime, session.endTime)}
                            leadBy={session.leadBy.name}
                            track={session.track}
                            startTime={session.startTime}
                            endTime={session.endTime}
                            linkedUrl={`/sessions/${session.slug}`}
                            type={session.type}
                        />
                    ))
                }

            </StyledScheduleGrid >
        )
    }
}