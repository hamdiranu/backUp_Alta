import React from 'react';
import '../assets/css/bootstrap.min.css';
import '../assets/css/main.css';


import { withRouter } from "react-router-dom";
import { connect } from "unistore/react";
import { actions } from "../store";

class detailBerita extends React.Component {
        
        render() {
            
        const random_berita = this.props.listDetailBerita.filter((element,i) => i<=4)

        if (this.props.isLoadingDetailBerita === false) {
            return (
                <div className="col-md-6 kumpulan_detail">
                    {random_berita.map((isi,i)=>(
                        <div className="col-md-12 detail_berita" style={{paddingLeft:"0px",paddingRight:"0px"}}>
                        <img src={isi.urlToImage} alt="putri ayako"/>
                        <div className="col-md-12 judul_detail">
                            <span >
                                <h4>{isi.title}</h4>
                            </span>
                        </div>
                        <div className="col-md-12 isi_detail">
                            <span>
                                <h4>{isi.description}</h4>
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
                    )   
                    )}
                </div>
            )}
        else {
            return (
                <div style={{textAlign:"center"}}>Mohon Tunggu</div>
            )
        }
    }
  }
  
  export default connect("listDetailBerita, isLoadingDetailBerita", actions)(withRouter(detailBerita));