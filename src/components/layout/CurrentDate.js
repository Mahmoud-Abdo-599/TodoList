import React from 'react'

function CurrentDate() {
    var tempDate = new Date();
    var date =tempDate.getDate()+  '-' + (tempDate.getMonth()+1) 
    + '-' + tempDate.getFullYear() ;
    const currDate = "Current Date: "+date;
    return (
      <header style={dateStyle}>
          <h5>{currDate}</h5>
          </header>
    );
  }

  const dateStyle = {
    textAlign:'center' ,
    padding:'3px',
    textDecoration: 'none'
  }

export default CurrentDate
