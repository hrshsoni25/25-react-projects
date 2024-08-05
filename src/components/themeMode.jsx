import React, { useEffect, useState } from 'react'

const ThemeMode = () => {

    const [theme, setTheme] = useLocalStorage('theme','dark')

    function handleToggleTheme(){
        setTheme(theme === 'light' ? 'dark' : 'light')
    }

  return (
    <div className={`${theme === 'dark' ? 'bg-black text-white' : 'bg-white text-black'} h-screen`}>
        <button className='p-2' onClick={handleToggleTheme}>Change Theme</button>
    </div>
  )
}

export default ThemeMode

function useLocalStorage(key, defaultValue){
    const [value, setValue] = useState(()=>{
        let currentValue;
        try{
            currentValue = json.parse(localStorage.getItem(key) || String(defaultValue))
        } catch(e){
            console.log(e);
            currentValue = defaultValue;
        }
        return currentValue;
    })
    useEffect(()=>{
        localStorage.setItem(key, JSON.stringify(value))
    },[key,value])

    return [value, setValue];
}