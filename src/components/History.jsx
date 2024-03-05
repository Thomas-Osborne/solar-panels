import Entry from "./Entry";

export default function History(props) {

    const Entries = [{date: "First", id: 1}, {date: "Second", id: 2}];

    return (
        <div>
            {Entries.map(entry => <Entry date={entry.date} handleClick={props.handleClick} id={entry.id}/>)}
        </div>
    )
}