import markdownStyles from './markdown-styles.module.css'

export default function SessionBody({ content }) {
    return (
        // <div className="max-w-2xl mx-auto">
        <div>
            <div
                className={markdownStyles['markdown']}
                dangerouslySetInnerHTML={{ __html: content }}
            />
        </div>
    )
}