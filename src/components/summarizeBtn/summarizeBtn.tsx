
export default function SummarizeBtn() {
    function handleSummarize() {
        console.log('summarizeBtn')
    }
    return (
        <button onClick={handleSummarize}>Summarize!</button>
    )
}