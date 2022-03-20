import { useState } from "react";
import Card from "../UI/Card";
// import ScreenArea from "./ScreenArea";
import "./ScreenArea.css";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';


function NumberKeys(){   
    const [Value, newValue] = useState('');
    const [Action, newAction] = useState('');
    const [OldValue, ONewValue] = useState('');
    const [TotalValue, NewTotalValue] = useState('');
    const [AnsValue, NewAnsValue] = useState([]);
    const [SingleAns, NewSingleAns] = useState('');
    const [GlobalNumbers, NewGlobalNumbers] = useState('');
    const [OldOperator, NewOldOperator] = useState('');

    const pressAC = () =>{
        newValue(``);
        newAction(``);
        ONewValue(``);
        NewTotalValue(``);
        NewSingleAns('');
    }

    const pressC = () =>{
        newValue(`${Value.slice(0,-1)}`);
        NewTotalValue(`${TotalValue.slice(0,-1)}`)
        NewSingleAns(`${Value.slice(0,-1)}`)
    }

    const pressNumberKey=(e)=>{
        NewTotalValue(TotalValue+`${e}`);
        NewSingleAns(SingleAns+`${e}`);
        newValue(`${Value}${e}`);
    }

    const pressOperator = (e) =>{
        if(Value === ""){

        }else{
            NewTotalValue(TotalValue+`${e}`);
            NewSingleAns(`${SingleAns}${e}`);
            console.log("SINGLE",SingleAns);
           
            if(Action === "" || Action === "="){
                newValue("")
                ONewValue(`${Value}`)
                newAction(`${e}`);  
            }else{
                console.log(OldValue,Value,Action)
        
                if(Action === "+"){
                        ONewValue(`${parseFloat(OldValue) + parseFloat(Value)}`);
                        newValue('');                  
                }else if(Action === "-"){
                    ONewValue(`${parseFloat(OldValue) - parseFloat(Value)}`);
                    newValue('');
                }else if(Action === "X"){
                        ONewValue(`${parseFloat(OldValue) * parseFloat(Value)}`);
                        newValue('');
                }else if(Action === "/"){
                    ONewValue(`${parseFloat(OldValue) / parseFloat(Value)}`);
                    newValue('');
                }else{            
                    console.log()
                }
             
                newAction(`${e}`);
            } 

        }
        
    }

    const pressPointBracket = (e) => {
        newValue(`${Value}${e}`);
        console.log(e);
    }

    const equal1 = () =>{
        let numbers = [];
        let str1 = SingleAns;
        console.log("SINGLEE",SingleAns);
        let numString = "";
        let iterate = "";

        for(let i=0;i<str1.length;i++){
            let a = str1[i];

            if(a == "+" || a == "-" || a == "*" || a == "/" || i==str1.length-1){
                if(i==str1.length-1){
                numString+=`${a}`;
                }
                if(iterate === "*"){
                let last = numbers[numbers.length-1];
                numbers.pop();
                numbers.push(last*parseFloat(numString));
                // i++;
                numString="";
                console.log(numbers);
                }else if(iterate === "/"){
                let last = numbers[numbers.length-1];
                numbers.pop();
                numbers.push(last/parseFloat(numString));
                // i++;
                numString="";
                console.log(numbers);
                }else if(iterate==="-"){
                numbers.push(-parseFloat(numString))
                numString="";
                console.log(numbers);
                }else{
                numbers.push(parseFloat(numString));
                numString="";
                }
                
                if(a == "*"){
                    iterate = "*";
                }
                if(a == "/"){
                    iterate="/";
                }
                if(a == "-"){
                iterate = "-";
                }      
            }else{
                numString+=`${a}`;
                // numbers.push(parseFloat(a));
            }

            if(i == str1.length-1){
                let ans = [];
                console.log(numbers);
          
                let sum = numbers.reduce(function (previousValue, currentValue) {
                    return previousValue + currentValue;
                });
                console.log(sum)
                NewTotalValue(SingleAns+`= ${sum}\n\n`);
                ans.push(...AnsValue)
                ans.push(SingleAns+`= ${sum}\n`);
                NewAnsValue(ans);
                NewSingleAns("");
                newAction("=");
                newValue("");
            }
        }
    }
    
    const pressANS = () =>{
        console.log(AnsValue)
        NewTotalValue((AnsValue.toString()).replaceAll(",",""));
    }

    const pressCANS = () =>{
        NewTotalValue('');
        NewAnsValue('');
    }


    return (
        <Card>
        <div className='columnBar'>
            <div className="new-expense__old_control" style={{margin:40}}>
                <label style={{margin:20}}>History</label>
                <textarea
                    aria-label="minimum height"
                    style={{fontSize:20, width: 350, height: 420, overflow:'auto', resize:"none"}}
                    value={TotalValue}
                />
            </div>
            <div>
                <div  className="new-expense__controls">
                           
                
                </div>
                <div  className="new-expense__controls">
                    <div className="new-expense__control">
                        {/* <label>New Value</label> */}
                        <input type="text" value={Value}></input>
                    </div>
                </div>
                
                <div className='columnBar'>
                <div>
                <button onClick={pressAC}>AC</button>
                </div>
                <div>
                <button onClick={pressC}><ArrowBackIcon/></button>
                </div>
                <div>
                <button onClick={pressANS}>ANS</button>
                </div>
                <div>
                    <button onClick={pressCANS}>CANS</button>
                </div>
                </div>
                <div className='columnBar'>
                <div>
                <button onClick={()=>{pressNumberKey(7)}}>7</button>
                </div>
                <div>
                <button onClick={()=>{pressNumberKey(8)}}>8</button>
                </div>
                <div>
                <button onClick={()=>{pressNumberKey(9)}}>9</button>
                </div>
                <div>
                    <button onClick={()=>{pressOperator('/')}}>÷</button>
                </div>
                </div>
            <div className='columnBar'>
                <div>
                    <button onClick={()=>{pressNumberKey(4)}}>4</button>
                </div>
                <div>
                    <button onClick={()=>{pressNumberKey(5)}}>5</button>
                </div>
                <div>
                    <button onClick={()=>{pressNumberKey(6)}}>6</button>
                </div>
                <div>
                    <button onClick={()=>{pressOperator('X')}}>×</button>
                </div>
            </div>
                <div className='columnBar'>
                    <div>
                        <button onClick={()=>{pressNumberKey(1)}}>1</button>
                    </div>
                    <div>
                        <button onClick={()=>{pressNumberKey(2)}}>2</button>
                    </div>
                    <div>
                        <button onClick={()=>{pressNumberKey(3)}}>3</button>
                    </div>
                    <div>
                        <button onClick={()=>{pressOperator('-')}}>-</button>
                    </div>
                </div>
                <div className='columnBar'>
                    <div>
                        <button onClick={()=>{pressNumberKey(0)}}>0</button>
                    </div>
                    <div>
                        <button onClick={()=>{pressPointBracket('.')}}>.</button>
                    </div>
                    <div>
                        <button onClick={equal1}>=</button>
                    </div>
                    <div>
                        <button onClick={()=>{pressOperator('+')}}>+</button>
                    </div>
                </div>
            </div>
        </div>
        
   </Card>   
    )
       
}

export default NumberKeys;