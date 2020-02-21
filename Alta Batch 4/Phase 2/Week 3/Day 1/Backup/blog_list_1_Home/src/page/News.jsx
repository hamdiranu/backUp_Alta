import React from 'react';
import '../assets/css/main.css';
import '../assets/css/bootstrap.min.css';
import Header from '../component/header';
import BeritaTerkini from '../component/beritaTerkini';
import DetailBerita from '../component/detail_berita';
import axios from "axios";

// News API
const apiKey = "619529381a494be9af64c6269526d196";
const baseUrl = "https://newsapi.org/v2/";
// const urlHeadline = baseUrl + "top-headlines?country=id&apiKey=" + apiKey;


class News extends React.Component {
  state = {
    search : "",
    listDetailBerita:[],
    listBeritaTerkini:[],
    isLoadingBeritaTerkini: true,
    isLoadingDetailBerita: true,
    category:"sport"
  };

  getDetailBerita = () =>{
    const self = this;
    console.log("state search isi", self.state.search)
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


  handleSearch = async (e) => {
    console.warn("cek e pada handle input change", e.target)
    console.warn("cek value", e.target.value)
    let value = e.target.value;
    await this.setState({ search:value});
    console.log("cek state input cek", this.state.search);
    await this.getDetailBerita();
    await this.getListberitaterkini();

  };

  handleClickKategori = async (e) => {
    console.warn("cek e pada handle input change", e.target)
    console.warn("cek value dari e click kategori", e)
    let value = e;
    await this.setState({ search:value, category:value});
    console.log("cek state input cek", this.state.search);
    await this.getDetailBerita();
    await this.getListberitaterkini();

  };


  render() {
      return (
        <div className="body">
          <Header doSearch={e => this.handleSearch(e)} doClick={e => this.handleClickKategori(e)} cari={this.state.search} {...this.props}/>
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

  export default News;