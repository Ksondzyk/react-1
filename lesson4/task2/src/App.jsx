import React from 'react';
import Clock from './Clock';

const App = () => {
    return (
        <>
            <Clock location={"London"} offset={0} />
            <Clock location={"Paris"} offset={2} />
            <Clock location={"Tokyo"} offset={9} />
        </>
    );
};

export default App;