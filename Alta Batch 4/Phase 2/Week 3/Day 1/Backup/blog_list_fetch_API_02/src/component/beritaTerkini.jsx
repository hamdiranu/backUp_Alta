import React from 'react';
import '../assets/css/bootstrap.min.css';
import '../assets/css/main.css';
import axios from "axios";

// News API
const apiKey = "619529381a494be9af64c6269526d196";
const baseUrl = "https://newsapi.org/v2/";
// const urlHeadline = baseUrl + "top-headlines?country=id&apiKey=" + apiKey;

class beritaTerkini extends React.Component {
    state = {
        listNews:[],
        isLoading: true,
        category: "sport"
      };
    
      componentDidMount = () =>{
        const self = this;
        axios
          .get(`${baseUrl}top-headlines?country=id&category=${this.state.category}&apiKey=${apiKey}`)
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
        const topHeadlines = listNews.filter(item => {
        if (item.content !== null && item.image !== null) {
            return item;
            }
            return false;
        })

        const top_berita = topHeadlines.filter((element,i) => i<=4)

        if (isLoading === false) {
            return (
                <div className="col-md-5">
                    <div className="berita_terkini">
                        <h5>BERITA TERKINI</h5>
                        <a href="about_me.html">lihat semua</a>
                    </div>
                    {top_berita.map((isi,i) =>
                        <div className="isi_berita_terkini">
                        <div className="col-md-12">
                            <div className="col-md-2 nomor" style={{paddingRight:"35px", paddingLeft:"0px"}}>
                                <h6>#{i+1}</h6>
                            </div>
                        </div>
                        <div className="judul">
                            <a href="http://localhost:3000/action_page.php?search=">{isi.title}</a>
                        </div>
                        </div>
                    )}
                </div>
                );
            }
        else {
            return (
                <div style={{textAlign:"center"}}>Mohon Tunggu</div>
            )
        }
    }
}
  
export default beritaTerkini;