"use client";

import { useState } from "react";

export const Counter = () => {
    const [count, setCount] = useState<number>(0);

    function increaseCount() {
        setCount(prev => prev + 1)
    }

    return(
        <button onClick={increaseCount}>{count}</button>
    );
}