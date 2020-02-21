import React from 'react';
import '../assets/css/main.css';
import '../assets/css/bootstrap.min.css';
import Header from '../component/header';
import axios from "axios";
import BeritaTerkini from '../component/beritaTerkini';
import DetailBerita from '../component/detail_berita';

// News API
const apiKey = "619529381a494be9af64c6269526d196";
const baseUrl = "https://newsapi.org/v2/";
// const urlHeadline = baseUrl + "top-headlines?country=id&apiKey=" + apiKey;


class Home extends React.Component {
  state = {
    search : "",
    listDetailBerita:[],
    listBeritaTerkini:[],
    isLoadingBeritaTerkini: true,
    isLoadingDetailBerita: true,
    category:"sport"
  };

  handleSearch = async (e) => {
    console.warn("cek e pada handle input change", e.target)
    console.warn("cek value", e.target.value)
    let value = e.target.value;
    await this.setState({ search:value, category:value});
    console.log("cek state input cek", this.state.search);
    this.getDetailBerita();
    this.getListberitaterkini();

  };

  handleClickKategori = async (e) => {
    console.warn("cek e pada handle input change", e.target)
    console.warn("cek value", e)
    let value = e;
    await this.setState({ search:value, category:value});
    console.log("cek state input cek", this.state.search);
    this.getDetailBerita();
    this.getListberitaterkini();

  };

  getDetailBerita = () =>{
    const self = this;
    axios
      .get(`${baseUrl}everything?q=${this.state.search}&apiKey=${apiKey}`)
      .then(function(response){
          self.setState({ listDetailBerita: response.data.articles, isLoadingDetailBerita: false});
          console.log("cek dari NEWS",self.state.listDetailBerita);
          // handle success
          // console.log(response.data);
      })
      .catch(function(error){
          self.setState({ isLoadingDetailBerita: false});
          // handle error
          // console.log(error)
      });
    };

    goBackHome = () => {
      this.setState({isLoadingBeritaTerkini : true});
    }

    getListberitaterkini = () =>{
      const self = this;
      axios
        .get(`${baseUrl}top-headlines?country=id&category=${this.state.category}&apiKey=${apiKey}`)
        .then(function(response){
          self.setState({ listBeritaTerkini: response.data.articles, isLoadingBeritaTerkini: false});
          // handle success
          // console.log(response.data);
        })
        .catch(function(error){
          self.setState({ isLoadingBeritaTerkini: false});
          // handle error
          // console.log(error)
        });
      };


  render() {
    if (this.state.isLoadingBeritaTerkini === true || this.state.isLoadingDetailBerita === true) {
      return (
        <div className="body">
          <Header doSearch={e => this.handleSearch(e)} doClick={e => this.handleClickKategori(e)} cari={this.state.search} {...this.props}/>
          <div className="container">
            <div style={{marginTop:"100px", textAlign:"center"}}><h1>THIS IS HOME</h1></div>
          </div>
        </div>
      );
    }
    else {
      return (
        <div className="body">
          <Header 
            doSearch={e => this.handleSearch(e)} 
            doClick={e => this.handleClickKategori(e)} 
            cari={this.state.search} 
            goBackHome = {this.goBackHome}
            {...this.props}/>
          <div className="container">
            <div className="row">
            <BeritaTerkini listberitaterkini={this.state.listBeritaTerkini} isLoading={this.state.isLoadingBeritaTerkini}/>
            <DetailBerita listDetail={this.state.listDetailBerita} isLoading={this.state.isLoadingDetailBerita}/>
            </div>
          </div>
        </div>
      );
    }
      
    }
  }
  
  export default Home;