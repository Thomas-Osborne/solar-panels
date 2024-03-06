export default function Entry(props) {

    return (
        <div>
        <button 
            className="bg-blue-500 text-white text-left p-3 my-1 w-full border rounded-md hover:bg-blue-600"
            onClick={() => props.handleClick(props.data.forecasts)}
        >
            <h1 className="font-semibold">{props.data.updatedAt}</h1>
        </button>
        </div>
    )
}