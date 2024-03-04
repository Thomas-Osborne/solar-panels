import Entry from "./Entry";

export default function History() {

    const Entries = [{name: "First"}, {name: "Second"}, {name: "Third"}];

    return (
        <div>
            {Entries.map(entry => <Entry name={entry.name}/>)}
        </div>
    )
}