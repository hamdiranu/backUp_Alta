import React from 'react'
import Header, { myObject,myFunction } from '../components/header'

class Beranda extends React.Component {
    render() {
        return (
            <div>
                {console.log(myObject)}
                {console.log(myFunction())}
                <Header/>
            </div>
        )
    }
}

export default Beranda;