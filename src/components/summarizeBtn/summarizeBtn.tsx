
export default function SummarizeBtn({setSummarized, summarized}) {
    return (
        <>
        {summarized 
        ? <button onClick={() => {setSummarized(false)}}>Go Back!</button>
        : <button onClick={() => {setSummarized(true)}}>Summarize!</button>
        }
        </>
    )
}