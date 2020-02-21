import React from 'react';
import '../assets/css/bootstrap.min.css';
import '../assets/css/main.css';

class detailBerita extends React.Component {
    render() {
      return (
        <div className="col-md-6 detail_berita" style={{paddingLeft:"0px",paddingRight:"0px"}}>
            <img src={require("../assets/img/putri-ayako-dan-kei-moriya_20181031_171114.jpg")} alt="putri ayako"/>
            <div className="col-md-12 judul_detail">
                <span >
                    <h4>Nikahi Rakyat Jelata, Putri Ayako dari jepang Lepaskan Gelar Kerajaan</h4>
                </span>
            </div>
            <div className="col-md-12 isi_detail">
                <span>
                    <h4>Pernikahan Putri Ayako dan Kei Moriya dilangsungkan lewat upacara tradisional Jepang.</h4>
                </span>
            </div>
            <div className="col-md-12 last_update_detail">
                <span >
                    <h4>Last update 3 mins ago</h4>
                </span>
            </div>
            <div className="col-md-12 love_share_down" >
                <div className="love" style={{paddingLeft:"80px"}}>
                    <a href="about_me.html"><img src={require("../assets/img/love_icon.png")} style={{width:"18px", height:"15px"}} alt=""/></a>       
                </div>
                <div className="share" style={{paddingLeft:"160px"}}>
                    <a href="about_me.html"><img src={require("../assets/img/share_icon.png")} style={{width:"20px", height:"20px"}} alt=""/></a>           
                </div>
                <div className="down" style={{paddingLeft:"160px"}}>
                    <a href="about_me.html"><img src={require("../assets/img/downvote_icon.png")} style={{width:"18px", height:"18px"}} alt=""/></a>
                </div>
            </div>
        </div>
        );
    }
  }
  
  export default detailBerita;