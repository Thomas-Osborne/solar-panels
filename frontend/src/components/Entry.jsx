import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDeleteLeft } from '@fortawesome/free-solid-svg-icons'

// async function handleClick() {
//     const response = await fetch('/api/forecasts' + forecasts._id, {
//         method: 'DELETE'
//     });

//     const json = await response.json;

//     if (response.ok) {

//     }
// }

export default function Entry(props) {
    const lastUpdated = new Date(props.data.updatedAt).toLocaleString();
    return (
        <div className="bg-blue-500 text-white text-left p-3 my-1 w-full border rounded-md hover:bg-blue-600">
        <button 
            className=""
            onClick={() => props.handleClick(props.data.forecasts)}
        >
            <h1 className="font-semibold">{lastUpdated}</h1>
        </button>
        <button
            className=""
            onClick={handleClick}>
            <i className="pr-1 w-6"><FontAwesomeIcon icon={faDeleteLeft} fixedWidth /></i>
        </button>
        </div>
    )
}