import React from 'react';
import Navbar from '../components/Navbar'
import Main from '../components/Main'
import Copyright from '../components/Copyright'

class Dashboard extends React.Component {

    constructor(){
        super();
        this.state = {
            places:[],
            token:''
        }
    }

    componentDidMount(){
        let token = localStorage.getItem('token')
        if (token){
            this.setState({
                token:token
            })
        }

        fetch(`https://apiproject11.herokuapp.com/api/places`)
        .then(res => res.json())
        .then(
            (result) => {
                console.log(result)
                this.setState({
                    places:result.data
                })
            
            },
            // Note: it's important to handle errors here
            // instead of a catch() block so that we don't swallow
            // exceptions from actual bugs in components.
            (error) => {
                console.log(error)
            }
        )
    }

    render() {
        if (this.state.token == null || this.state.token == ''){
            return(
                <div>Unauthorized</div>
                )
            }
        else{
        return (
<div>
    <Navbar/>
    <main>
    <Main places={this.state.places}/>
    </main>
    <Copyright/>
    
</div>
        );
    }
}
}

export default Dashboard;