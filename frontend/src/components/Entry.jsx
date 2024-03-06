export default function Entry(props) {
    const lastUpdated = new Date(props.data.updatedAt).toLocaleString();
    return (
        <div>
        <button 
            className="bg-blue-500 text-white text-left p-3 my-1 w-full border rounded-md hover:bg-blue-600"
            onClick={() => props.handleClick(props.data.forecasts)}
        >
            <h1 className="font-semibold">{lastUpdated}</h1>
        </button>
        </div>
    )
}