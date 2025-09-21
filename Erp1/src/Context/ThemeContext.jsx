import { createContext,useContext,useEffect,useState } from "react";
const ThemeContext=createContext();
export const useTheme=()=>useContext(ThemeContext);

export const ThemeProvider=({children})=>{
    const[theme,setTheme]=useState("light");

    const ToggleTheme=()=>{
        debugger;
        setTheme((prev)=>{const NewTheme=prev==="light"?"dark":"light";
            console.log("Theme changed to:",NewTheme);
            return NewTheme;
        });
    }

    useEffect(()=>{
        if(theme === "light"){
            document.body.classList.remove('dark-theme');
            document.body.classList.add('light-theme');
           
        } else {
            document.body.classList.remove('light-theme');
            document.body.classList.add('dark-theme');
          
        }
    },[theme]);

    return(
    <ThemeContext.Provider value={{theme,setTheme,ToggleTheme}}>
        {children}
    </ThemeContext.Provider>
    );
}