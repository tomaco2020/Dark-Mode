import React, { useState } from 'react';
import moon from '../assets/moon.png';
import sun from '../assets/sun.png';
import { Profile } from './Profile';

export const DarkModeChallenge = () => {
    const [mode, setMode] = useState(true);
    const [inputText, setInputText] = useState('');
    const [savedData, setSavedData] = useState(false);
            
    const onDarkMode = () => {
        document.getElementById('ctn-p').style.backgroundColor = 'gray' ;
        document.getElementById('id-input1').style.backgroundColor = 'rgb(218 216 214)' ;
        document.getElementById('id-input2').style.backgroundColor = 'rgb(218 216 214)' ;
        setMode(false);
    }

    const offDarkMode = () => {
        document.getElementById('ctn-p').style.backgroundColor = 'rgb(245, 242, 227)' ;
        document.getElementById('id-input1').style.backgroundColor = 'white' ;
        document.getElementById('id-input2').style.backgroundColor = 'white' ;
        setMode(true);
    }

    const handleInputChange = (e) => {
        const text = e.target.value;
        setInputText(text);
        console.log(inputText);

        if (text===''){
            setSavedData(false);
        }
    }

    const saveData = () => {
        localStorage.setItem('name', inputText);
        setSavedData(true);
      
    }

   
    

  return (
    <div id='ctn-p' className='container-primary'>
        <div className='container'>

            <div className='item'>
                <h1>Dark Mode Challenge</h1>
            </div>

            <div className='item'>
                                   
                    <button
                        className='btn-mode'
                        onClick={() => { mode?  onDarkMode() :  offDarkMode() }}
                    > 
                        {mode ? (
                                <img className='img' src={moon} alt='moon' />
                            ) : (
                                <img className='img' src={sun} alt='moon' />
                            )}
                    </button>

            </div>

        </div>
        <hr />
        <div className='container'>
           
                <p>
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                </p>

                <p>
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                </p>
            
        </div>
        <div className='container'>
            <form 
                className='form'
            >
                <input 
                    id='id-input1' 
                    type='text' 
                    placeholder='Name' 
                    onChange={handleInputChange}
                />
                <input 
                    id='id-input2' 
                    type='email' 
                    placeholder='Email'
                    onChange={handleInputChange}
                />
            </form>

            <div className='container-btn'>
                <button 
                    className='btn exit'
                    onClick=''
                >
                    Exit
                </button>
                
                <button s
                    className='btn save'
                    type='submit'
                    onClick={saveData}
                >
                    Save
                </button>

                { (!!savedData) &&  <Profile />}            

            </div>
        </div>
    </div>
  )
}


