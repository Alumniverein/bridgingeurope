import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import Head from 'next/head'

import Layout from '../../components/Layout'
import SessionBody from '../../components/SessionBody'
import SessionHeader from '../../components/SessionHeader'

import { getSessionBySlug, getAllSessions } from '../../lib/api'
import markdownToHtml from '../../lib/markdownToHtml'

export default function Post({ session, preview }) {
    const router = useRouter()
    if (!router.isFallback && !session?.slug) {
        return <ErrorPage statusCode={404} />
    }
    return (
        <Layout>
            {router.isFallback ? (
                <PostTitle>Loading…</PostTitle>
            ) : (
                    <>
                        {/* <article className="mb-32"> */}
                        <article>
                            <Head>
                                <title>
                                    Bridging Europe :: {session.title}
                                </title>
                                <meta property="og:image" content={`/assets/sessions/${session.image}-wide.jpg`} />
                            </Head>

                            <SessionHeader
                                title={session.title}
                                image={`/assets/sessions/${session.image}-wide.jpg`}
                            />

                            <SessionBody content={session.content} />
                            {/* {session.content} */}
                        </article>
                    </>
                )}
        </Layout>
    )
}

export async function getStaticProps({ params }) {
    const session = getSessionBySlug(params.slug, [
        'title',
        'date',
        'slug',
        'author',
        'content',
        'image',
    ])
    const content = await markdownToHtml(session.content || '')

    return {
        props: {
            session: {
                ...session,
                content,
            },
        },
    }
}

export async function getStaticPaths() {
    const sessions = getAllSessions(['slug'])

    return {
        paths: sessions.map((session) => {
            return {
                params: {
                    slug: session.slug,
                },
            }
        }),
        fallback: false,
    }
}