import React, { useState } from 'react';

const Calc = () => {
    const [input, setInput] = useState('');

    const display = (value)=> {
        setInput(input+value);
    }

    const equal = ()=>{
        let answers = eval(input);
        setInput(answers);
    }

    const clear = ()=>{
        setInput('');
    }

    
    return (
        <div className='appContainer'>
            <input type="text" value={input} className="screen"/>
            <div className='btns'>

            <div className='btnsTop'>
            <button className='num clear' onClick={()=>clear("c")}>c</button>
            <button className='num equal' onClick={()=>equal("=")}>=</button>

            </div>

            
            <button className='num mid' onClick={()=>display("+")}>+</button>
            <button className='num mid' onClick={()=>display("-")}>-</button>
            <button className='num mid' onClick={()=>display("*")}>*</button>
            <button className='num mid' onClick={()=>display("/")}>/</button>


            <button className='num' onClick={()=>display("9")}>9</button>
            <button className='num' onClick={()=>display("8")}>8</button>
            <button className='num' onClick={()=>display("7")}>7</button>
            <button className='num' onClick={()=>display("6")}>6</button>
            <button className='num' onClick={()=>display("5")}>5</button>
            <button className='num' onClick={()=>display("4")}>4</button>
            <button className='num' onClick={()=>display("3")}>3</button>
            <button className='num' onClick={()=>display("2")}>2</button>
            <button className='num' onClick={()=>display("1")}>1</button>
            <button className='num' onClick={()=>display("0")}>0</button>

            </div>

        </div>
  )
}

export default Calc;
