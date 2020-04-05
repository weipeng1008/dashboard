import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Copyright from '../components/Copyright';
import {Redirect} from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default class LogIn extends React.Component {
  //const classes = useStyles();

  constructor(){
    super();
    this.state = {
      token:'',
      name:'',
      phonenumber:'',
      city:'',
      description:'',
      categories:''
    }
    this.onNameChanged = this.onNameChanged.bind(this);
    this.onPhoneNumChanged = this.onPhoneNumChanged.bind(this);
    this.onCityChanged = this.onCityChanged.bind(this);
    this.onDescriptionChanged = this.onDescriptionChanged.bind(this);
    this.onCategoriesChanged = this.onCategoriesChanged.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(){
    let opts = {
        "name":this.state.name,
        "phonenumber":this.state.phonenumber,
        "city":this.state.city,
        "description":this.state.description,
        "categories":this.state.categories
      }

      let token = localStorage.getItem("token")
      fetch(`https://apiproject11.herokuapp.com/api/places`, {
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': 'Bearer '+token
      },
      body: JSON.stringify(opts)
    }).then((response) => {
      return response.json();
    }).then((data) => {
      console.log(data)
      //if (data.success==true){
        //let token = data.token.split(" ")[1]
        //console.log(token)
        //localStorage.setItem("token",token)
        //location.href = "/dashboard"
        //Redirect to dashboard
        //this.setState({
          //token:token
        })
      console.log(opts);
  }

  onNameChanged(evt){
    this.setState({
      name:evt.target.value
    })
  }

  onPhoneNumChanged(evt){
    this.setState({
      phonenumber:evt.target.value
    })
  }

  onCityChanged(evt){
    this.setState({
      city:evt.target.value
    })
  }

  onDescriptionChanged(evt){
    this.setState({
      description:evt.target.value
    })
  }

  onCategoriesChanged(evt){
    this.setState({
      categories:evt.target.value
    })
  }

  render(){
    if (this.state.token){
      return (
        <Redirect to={{
          pathname:"/dashboard"
        }}/>
      )
    }

    else {
  return (
    <Container component="main" maxWidth="xs">

      <CssBaseline />

      <div>

        <Avatar>
          <LockOutlinedIcon />
        </Avatar>

        <Typography component="h1" variant="h5">
          Add New Place
        </Typography>

          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="name"
            value={this.state.name}
            label="Place name"
            name="name"
            autoComplete="text"
            onChange={this.onNameChanged}
            autoFocus
          />

          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="phonenumber"
            label="Phone Number"
            type="phone"
            id="phonenumber"
            value={this.state.phonenumber}
            onChange={this.onPhoneNumChanged}
          />

          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="city"
            label="City"
            type="text"
            id="city"
            value={this.state.city}
            onChange={this.onCityChanged}
          />

          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="description"
            label="Description"
            type="text"
            id="description"
            value={this.state.description}
            onChange={this.onDescriptionChanged}
          />

          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="categories"
            label="Categories"
            type="categories"
            id="categories"
            value={this.state.categories}
            onChange={this.onCategoriesChanged}
          />

          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            onClick={this.handleClick}
          >
            Add 
          </Button>
          
      </div>

      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
}
}
}

