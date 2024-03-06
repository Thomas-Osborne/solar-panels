import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons'

// Based on https://www.youtube.com/watch?v=9DwGahSqcEc
export default function Modal(props) {

    return (
        <div>
            {props.modal && (
            <div>
                <div>
                    <div>
                        <h1>{props.heading}</h1>
                        {props.content}
                        <button onClick={props.toggle}>
                            <FontAwesomeIcon icon={faCircleXmark} />
                        </button>
                    </div>
                </div>
            </div>
            )}
        </div>
    )
}