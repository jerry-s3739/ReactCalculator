import './keyRow.css';
import NumberKeys from './NumberKeys.js'


function KeyRow(){
    return(
        <div className="new-expense">
            <NumberKeys></NumberKeys>
        </div>
    )
}

export default KeyRow;