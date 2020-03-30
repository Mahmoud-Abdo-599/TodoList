import React from 'react';
import CurrentDate from './CurrentDate';


function Date() {
    return (
        <header style={headerStyle}>
            <form>
                {/* <button
                    className="btn"
                    style={{ flex: '1' }}
                >Prev Day</button> */}
                <CurrentDate />
                {/* <button
                    className="btn"
                    style={{ flex: '1' }}
                >Next Day</button> */}
            </form>
            
        </header>
    )
}

const headerStyle = {
    background: '#333',
    color: '#fff',
    textAlign: 'center',
    padding: '0px'

}


export default Date;
