import Entry from "./Entry";

export default function History(props) {
    return (
        <div>
            {props.oldData.map(entry => <Entry date={entry.updatedAt} forecasts={entry.forecasts} handleClick={props.handleClick} id={entry._id}/>)}
        </div>
    )
}