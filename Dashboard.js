import React from 'react';
import Navbar from '../components/Navbar'
import Main from '../components/Main'
class Dashboard extends React.Component {

    constructor(){
        super();
    }

    render() {
        return (
<div>
    <Navbar/>
    <main>
    <Main/>
    </main>
    
</div>
        );
    }
}

export default Dashboard;