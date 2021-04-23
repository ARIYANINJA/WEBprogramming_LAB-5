import React from 'react';
import './App.css';
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import ButtonGroup from '@material-ui/core/ButtonGroup'
import Logo from "./musicplayer.png";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Typography variant = "h2" component = "div"> 
          NAME AND TITLE
        </Typography>
      </header>
      <div className = "App-nav">
       <ButtonGroup variant="contained"
        size = "large"
         color="primary">
  <Button onClick ={()=>alert("YOU CLICKED OVERVIEW BUTTON")}>OVERVIEW</Button>
  <Button onClick ={()=>alert("YOU CLICKED FEATURES BUTTON")}>FEATURES</Button>
  <Button onClick ={()=>alert("YOU CLICKED DETAILS BUTTON")}>DETAILS</Button>
  <Button onClick ={()=>alert("YOU CLICKED TECHNOLOGY BUTTON")}>TECHNOLOGY</Button>
  <Button onClick ={()=>alert("YOU CLICKED FAQ BUTTON")}>FAQ</Button>
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
      <main className = "main">
        <div className = "main-left">
        <img src={Logo} alt="play button size" width="400" height="400" />
        </div>
        <div className  = "main-right-title"> 
        <Typography variant = "h3">
            FEATURES <Button variant="contained"></Button>
        </Typography>
          <Typography variant = "h5">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt veniam, tempora voluptates possimus dignissimos officia, esse vitae sit exercitationem corrupti rerum fuga, est similique? Eum assumenda in accusamus cupiditate quas.
          </Typography>
          <hr></hr>
          <Typography className = "main-footer" variant = "h3">
            READ OUR FEATURES
          </Typography>
        </div>
      </main>
      <footer className = "footer">
        <Typography variant="h2" align="center" gutterBottom>
          Footer
        </Typography>
      </footer>                
    </div>
  );
}
export default App;
