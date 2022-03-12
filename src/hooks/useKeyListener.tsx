import {KeyboardEvent,useEffect} from 'react'


const useKeyListener = (callback:(e:KeyboardEvent)=>void) => {

    useEffect(() =>{

        const listener = (e:any) => {

            const tagName = e.target.tagName
            if(tagName==='BODY'){

                callback(e)
            }
        } 
        document.addEventListener('keydown', listener)
        return () => {

            document.removeEventListener('keydown', listener)
        }
    }, [callback])
}

export default useKeyListener