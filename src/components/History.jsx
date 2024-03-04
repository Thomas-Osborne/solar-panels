import Entry from "./Entry";

export default function History() {

    const Entries = [{date: "First"}, {date: "Second"}, {date: "Third"}];

    return (
        <div>
            {Entries.map(entry => <Entry date={entry.date}/>)}
        </div>
    )
}