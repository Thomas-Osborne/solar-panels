import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDeleteLeft } from '@fortawesome/free-solid-svg-icons'

export default function Entry(props) {

    async function handleDelete() {
        const res = await fetch(`http://localhost:4000/api/forecasts/${props.id}`, {
            method: 'DELETE'
        });

        if (!res.ok) {
            throw new Error('Failed to delete forecast.');
        }
    }

    const lastUpdated = new Date(props.data.updatedAt).toLocaleString();
    return (
        <div className="bg-blue-500 text-white text-left p-3 my-1 w-full border rounded-md flex justify-between hover:bg-blue-600">
        <button 
            className=""
            onClick={() => props.handleClick(props.data.forecasts)}
        >
            <h1 className="font-semibold">{lastUpdated}</h1>
        </button>
        <button
            className=""
            onClick={handleDelete}
            >
            <i className="pr-1 w-6"><FontAwesomeIcon icon={faDeleteLeft} fixedWidth /></i>
        </button>
        </div>
    )
}