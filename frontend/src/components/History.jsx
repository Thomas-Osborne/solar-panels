import Entry from "./Entry";

export default function History(props) {

    return (
        <div>
            {props.oldData.map(entry => <Entry key={entry._id} id={entry._id} data={entry} lastClicked={false} handleClick={props.handleClick}/>)}
        </div>
    )
}