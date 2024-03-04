import reactLogo from '../assets/react.svg'
import Box from './Box';

import { useState } from 'react'

export default function Body() {

    const [count, setCount] = useState(0);

    return (
        <main>
            <Box />
            <Box />
            <Box />
      </main>
    )
}