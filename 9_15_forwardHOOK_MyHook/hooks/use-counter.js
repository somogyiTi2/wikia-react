import { useState, useEffect } from "react";

const useCounter = (forwords = true) => {
    const [counter, setCounter] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            if (forwords) {
                setCounter((prevCounter) => prevCounter + 1);
            } else {
                setCounter((prevCounter) => prevCounter - 1);
            }
        }, 1000);

        return () => clearInterval(interval);
    }, [forwords]);

    return counter;
};
//Ha saját horgot alkotunk akkor fontos, hogy USE-al kezdjük

export default useCounter;