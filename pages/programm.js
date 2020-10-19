import Link from 'next/link'

import Layout from '../components/Layout'
import Tile from '../components/Tile'
import ScheduleGrid from '../components/ScheduleGrid'

import { getAllSessions } from '../lib/api'

export default function Program({ allSessions }) {
  return (
    <Layout title="Bridging Europe :: Programm">
      <h2>Unser Programm</h2>
      {/* <ScheduleGrid startTime="10" endTime="23" interval="15"> */}
      <ScheduleGrid sessions={allSessions}></ScheduleGrid>
    </Layout >
  )
}

export async function getStaticProps() {
  const allSessions = getAllSessions([
    'title',
    'excerpt',
    'image',
    'startTime',
    'endTime',
    'leadBy',
    'slug',
    'content',
    'type',
    'displayFront',
    'displayType',
    'track'
  ])

  return {
    props: { allSessions },
  }
}