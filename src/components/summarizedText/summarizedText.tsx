import styles from './summarizedText.module.css'
export default function SummarizedText({response}) {

    return (
    <p className={styles.summarizedText}>
    {response}
    </p>)
}