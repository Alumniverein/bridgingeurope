import fs from 'fs'
import { join } from 'path'
import matter from 'gray-matter'

const sessionsDirectory = join(process.cwd(), '_sessions')

export function getSessionSlugs() {
    return fs.readdirSync(sessionsDirectory)
}

export function getSessionBySlug(slug, fields = []) {
    const realSlug = slug.replace(/\.md$/, '')
    const fullPath = join(sessionsDirectory, `${realSlug}.md`)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { data, content } = matter(fileContents)

    const items = {}

    // Ensure only the minimal needed data is exposed
    fields.forEach((field) => {
        if (field === 'slug') {
            items[field] = realSlug
        }
        if (field === 'content') {
            items[field] = content
        }

        if (data[field]) {
            if (field === 'startTime') items[field] = data[field].replace(':', '')
            else if (field === 'endTime') items[field] = data[field].replace(':', '')
            else if (field === 'displayFront') items[field] = data[field] == 'true' ? true : false;
            else items[field] = data[field]
        }
    })

    return items
}

export function getAllSessions(fields = []) {
    const slugs = getSessionSlugs()
    const sessions = slugs
        .filter((slug) => slug != 'example.md')
        .map((slug) => getSessionBySlug(slug, fields))
        // sort sessions by time in descending order
        .sort((session1, session2) => (parseInt(session1.startTime, 10) < parseInt(session2.startTime, 10) ? '-1' : '1'))
    return sessions
}