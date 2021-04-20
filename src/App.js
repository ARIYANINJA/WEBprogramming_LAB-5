import React from 'react';
import './App.css';
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import ButtonGroup from '@material-ui/core/ButtonGroup'
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Typography variant = "h2" component = "div"> 
          NAME AND TITLE
        </Typography>
      </header>
      <div className = "App-nav">
        <ButtonGroup variant="text"
        size = "large"
         color="secondary">
  <Button>OVERVIEW</Button>
  <Button>FEATURES</Button>
  <Button>DETAILS</Button>
  <Button>TECHNOLOGY</Button>
  <Button>FAQ</Button>
  </ButtonGroup>
  <div className = "Add-button">
        <Button onClick ={()=>alert("YOU CLICKED ADD BUTTON")} variant = "contained" color = "secondary"
        style = {{borderRadius: 100,
          fontSize: 30
        }}>
           +
        </Button>
        </div>
      </div>                 
    </div>
  );
}
export default App;
