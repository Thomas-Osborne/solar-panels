import Entry from "./Entry";

export default function History(props) {
    return (
        <div>
            {props.oldData.map(entry => <Entry data={entry} handleClick={props.handleClick}/>)}
        </div>
    )
}