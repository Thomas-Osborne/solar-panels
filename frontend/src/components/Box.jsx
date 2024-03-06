export default function Box(props) {
    
    return (
        <div className="rounded-xl p-5 my-5 bg-gray-300 h-full">
            <h3 className="text-gray-800 text-xl font-semibold">{props.name}</h3>
            <div className="h-full overflow-y-auto">
                {props.content}
            </div>
        </div>
    )
}