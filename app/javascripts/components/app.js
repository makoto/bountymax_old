import React from 'react';
import ReactDOM from 'react-dom';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import FlatButton from 'material-ui/FlatButton';
import Avatar from 'material-ui/Avatar';
import AppBar from 'material-ui/AppBar';
import {List, ListItem} from 'material-ui/List';
import Paper from 'material-ui/Paper';

const App = (props) => (
  <MuiThemeProvider muiTheme={getMuiTheme()}>
    <div>
      <AppBar titleStyle={{textAlign:'center', fontSize:'xx-large', fontFamily:'sans-serif'}} style={{backgroundColor:"#46ae32"}}
        title={
          <span>TITLE<span style={{fontSize:'small', fontFamily:'sans-serif'}}> - Some one liner -</span></span>
        }
        iconElementLeft={<Avatar src="https://15254b2dcaab7f5478ab-24461f391e20b7336331d5789078af53.ssl.cf1.rackcdn.com/ethereum.vanillaforums.com/favicon_85d47ba50743e3c3.ico" size={50} backgroundColor="white" />}
        iconElementRight={
          <span>
            <FlatButton style={{color:'white'}} label="About" />
          </span>
        }
      />
      <div className='container'>
        <Paper zDepth={1} style={{height:'500px'}}>
          <List>
            <ListItem disabled={true}
              primaryText={(<p>Content {props.contract.address}</p>)}
            />
          </List>
        </Paper>
        <Paper zDepth={1}>
          <List>
            <ListItem disabled={true}
              primaryText={(<p>Some footer</p>)}
            />
          </List>
        </Paper>
      </div>
    </div>
  </MuiThemeProvider>
)
export default App;
