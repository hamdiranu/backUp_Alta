import React from 'react';
import '../assets/css/main.css';
import '../assets/css/bootstrap.min.css';
import Header from '../component/header';
import BeritaTerkini from '../component/beritaTerkini';
import DetailBerita from '../component/detail_berita';


class Home extends React.Component {
  render() {
      
      return (
        <div className="body">
          <Header/>
        </div>
      );
    }
  }
  
  export default Home;