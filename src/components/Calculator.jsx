export default function Calculator()  {
    return (
        <div>
            <form>
                <label>Hours Charging</label>
                <input type="text" />
                <br />
                <label>SoC Increase</label>
                <input type="text" />
                <br />
                <input type="submit" />
            </form>

            <div>
                <div><span>Wattage Required</span><span>Answer</span></div>
                <div><span>Set Current Value</span><span>Answer</span></div>
            </div>
        </div>
    )
}