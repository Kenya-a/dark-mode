import { useEffect } from 'react';
import useLocalStorage from './useLocalStorage';

const useDarkMode = () => {
    const [darkValue, setdarkValue] = useLocalStorage(null)

    useEffect(() => {
        if (darkValue === true) {
            document.body.classList.add('dark-mode');
        }
        else {
            document.body.classList.remove('dark-mode');
        }

    }, [darkValue])

    return [darkValue, setdarkValue]
}


export default useDarkMode;