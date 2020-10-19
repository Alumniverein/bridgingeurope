import Head from 'next/head'
import styles from '../styles/Home.module.css'

import Layout from '../components/Layout'

export default function Anmeldung() {
  return (
    <Layout title="Bridging Europe :: Anmeldung">
      <h2>Anmeldung zur Veranstaltung</h2>
      <p>Ihr könnt Euch vorab über unser <b><a target="_blank" href="https://erasmusuniversity.eu.qualtrics.com/jfe/form/SV_8rjd1auZgAaKYfP">→ Formular</a></b> zu «Bridging Europe» anmelden. 📝</p>
    </Layout>
  )
}