import {useEffect, KeyboardEvent} from 'react'


const useKeyListener = (callback:(e:KeyboardEvent)=>void) => {

    useEffect(() =>{

        const listener = (e:KeyboardEvent) => {

            const target = e.target as HTMLElement
            const tagName = target.tagName
            if(tagName==='BODY'){

                callback(e)
            }
        }
        
        document.addEventListener('keydown', (e:Event)=>listener)
        return () => {

            document.removeEventListener('keydown', (e:Event)=>listener)
        }
    }, [callback])
}

export default useKeyListener