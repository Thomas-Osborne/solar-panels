import Entry from "./Entry";
import React from 'react';

export default function History(props) {

    return (
        <div>
            {props.oldData.map(entry => <Entry key={entry._id} id={entry._id} data={entry} chosenRecordId={props.chosenRecordId} handleClick={props.handleClick}/>)}
        </div>
    )
}