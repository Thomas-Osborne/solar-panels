import Entry from "./Entry";

export default function History(props) {

    return (
        <div>
            {props.oldData.map(entry => <Entry date={entry.date} handleClick={props.handleClick} id={entry.id}/>)}
        </div>
    )
}