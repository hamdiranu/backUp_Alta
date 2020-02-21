import React from 'react';
import '../assets/css/bootstrap.min.css';
import '../assets/css/main.css';
import axios from "axios";

// News API
const apiKey = "619529381a494be9af64c6269526d196";
const baseUrl = "https://newsapi.org/v2/";
// const urlHeadline = baseUrl + "top-headlines?country=id&apiKey=" + apiKey;

class detailBerita extends React.Component {
    state = {
        listNews:[],
        isLoading: true,
        category:"tech"
      };
    
      componentDidMount = () =>{
        const self = this;
        axios
          .get(`${baseUrl}everything?q=${this.state.category}&apiKey=${apiKey}`)
          .then(function(response){
            self.setState({ listNews: response.data.articles, isLoading: false});
            // handle success
            // console.log(response.data);
          })
          .catch(function(error){
            self.setState({ isLoading: false});
            // handle error
            // console.log(error)
          });
    };

    render() {
        // const news = this.state.listNews;
        const { listNews, isLoading } = this.state;
        // console.log("news", news);
        const randomHeadlines = listNews.filter(item => {
        if (item.content !== null && item.image !== null) {
            return item;
            }
            return false;
        })

        const random_berita = randomHeadlines.filter((element,i) => i<=4)

        if (isLoading === false) {
            return (
                <div className="col-md-6 kumpulan_detail">
                    {random_berita.map((isi,i)=>
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
  
  export default detailBerita;