import { useEffect, useState } from 'react';

const Alert = ({ message }) => {
    const [show, setShow] = useState(true)

    useEffect(() => {
        const timer = setTimeout(() => {
            setShow(false)
        }, 5000)
        return () =>  clearTimeout(timer)
        },[])

        if(!show) return null
        
        return (
            <div className="alert">
                <p>{message}</p>
            </div>
        )
}

export default Alert