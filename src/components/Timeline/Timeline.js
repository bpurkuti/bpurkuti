import React from 'react';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineDot from '@material-ui/lab/TimelineDot';

import './Timeline.css';


const CustomTimeline = ({title}) => {
    return (
        <Timeline className={"timeline"}>
        {/* Item 1 */}
        <TimelineItem className={"timeline_firstItem"}> 
          <TimelineSeparator>
            <TimelineDot className={"timeline_dot_header"}/>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>{title}</TimelineContent>
        </TimelineItem>

        {/*item 2 */}
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot className={"timeline_dot"}/>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>Code</TimelineContent>
        </TimelineItem>


      </Timeline>
    )
}

export default CustomTimeline
