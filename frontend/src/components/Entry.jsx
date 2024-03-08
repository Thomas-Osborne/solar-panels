import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

export default function Entry(props) {

    console.log(props.chosenDate);    
    async function handleDelete() {
        const res = await fetch(`http://localhost:4000/api/forecasts/${props.id}`, {
            method: 'DELETE'
        });

        if (!res.ok) {
            throw new Error('Failed to delete forecast.');
        }
    }

    const lastUpdated = new Date(props.data.updatedAt).toLocaleDateString();
    console.log(lastUpdated);

    return (
        <div className={
            `text-white text-left p-3 my-1 w-full border rounded-md flex justify-between
            ${props.chosenDate === lastUpdated ? 'bg-blue-300 ' : 'bg-blue-500 hover:bg-blue-400'}`}>
        <button 
            className=""
            onClick={() => props.handleClick(props.data.forecasts)}
            disabled={props.chosenDate === lastUpdated}
        >
            <h1 className="font-semibold">{lastUpdated}</h1>
        </button>
        <button
            className=""
            onClick={handleDelete}
            >
            <i className="pr-1 w-6"><FontAwesomeIcon icon={faTrash} fixedWidth /></i>
        </button>
        </div>
    )
}