import styled from 'styled-components'

import Layout from '../components/Layout'
import TileGrid from '../components/TileGrid'
import ImageTile from '../components/ImageTile'

import { getAllSessions } from '../lib/api'

export default function Home({ sessions }) {
  // console.log(sessions);
  return (
    <Layout title="Bridging Europe :: Start">

      <TileGrid>

        {   // place the Tiles
          sessions.map(session => {
            if (session.displayFront == true) return (
              <ImageTile
                key={session.title}
                title={session.title}
                desc={session.excerpt}
                startTime={session.startTime}
                endTime={session.endTime}
                leadBy={session.leadBy.name}
                track="track1"
                startTime={session.startTime}
                endTime={session.endTime}
                linkedUrl={`/sessions/${session.slug}`}
                image={session.image}
                type={session.type}
                displayFront={session.displayFront}
                displayType={session.displayType}
              />
            )
          })
        }

        {/* wide image tile */}
        {/* <ImageTile
          title="Hauptact 🌠"
          desc="Lorem Ipsum"
          timespan="17.00 - 18.30"
          leadBy="Dolor Sit"
          wide="wide"
          imgUrl="/img/conf-wide.jpg"
        ></ImageTile> */}
        {/* simple image tiles */}
        {/* <ImageTile
          title="Session A"
          desc="Lorem Ipsum"
          timespan="17.00 - 18.30"
          leadBy="Dolor Sit"
          imgUrl="/img/yoga.jpg"
        ></ImageTile>
        <ImageTile
          title="Session B"
          desc="Lorem Ipsum"
          timespan="17.00 - 18.30"
          leadBy="Dolor Sit"
          imgUrl="/img/seats.jpg"
        ></ImageTile>
        <ImageTile
          title="Session C"
          desc="Lorem Ipsum"
          timespan="17.00 - 18.30"
          leadBy="Dolor Sit"
          imgUrl="/img/conf.jpg"
        ></ImageTile> */}

      </TileGrid>
    </Layout >
  )
}

export async function getStaticProps() {
  const sessions = getAllSessions([
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
    'displayType'
  ])

  return {
    props: { sessions },
  }
}

