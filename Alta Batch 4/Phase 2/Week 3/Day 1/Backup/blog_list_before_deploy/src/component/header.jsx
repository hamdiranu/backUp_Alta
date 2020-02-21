import React from 'react';
import '../assets/css/bootstrap.min.css';
import '../assets/css/main.css';
import logo from '../logo.svg';
import { Link } from 'react-router-dom';


import { withRouter } from "react-router-dom";
import { connect } from "unistore/react";
import { actions } from "../store";


class Header extends React.Component {
    // getOut = () => {
    //     localStorage.removeItem("statusLogin");
    //     // localStorage.clear()
    //     this.props.history.push("/");
    // }
    handleSearchContent=(e)=>{
        this.props.handleSearch(e)
        this.props.getDetailBerita()
        this.props.getListberitaterkini()
    }

    handleClickContent=(e)=>{
        this.props.handleClickKategori(e)
        this.props.getDetailBerita()
        this.props.getListberitaterkini()
    }

    render() {

    return (
        <div className="header">
            <div className="container-fluid background_header">
                <div className="row align-items-center">
                    <div className="col-md-3 col-sm-12 altalogo">
                        <div>
                            <Link to="/" onClick={e => this.props.goBackHome()}><img src={logo} style={{width:"60px", height:"60px"}} className="App-logo" alt="logo" /></Link>
                        </div>
                        <div className="kabarkabar">
                        <Link to="/" onClick={e => this.props.goBackHome()}><h3 style={{color:"#1F406C"}}>KabarKabar</h3></Link>
                        </div>
                    </div>
                    <div className="col-md-4 option1" style={{display:"block ruby"}}>
                        <div className="header-nav1">
                            <ul className="header-nav__list1 list-unstyled">
                                <li>
                                    <Link to="/news-category/:Health" onClick={e =>this.handleClickContent("health")}>Health</Link>
                                </li>
                                <li>
                                    <Link to="/news-category/:Sport" onClick={e => this.handleClickContent("sport")}>Sport</Link>
                                </li>
                                <li>
                                    <Link to="/news-category/:Technology" onClick={e =>this.handleClickContent("technology")}>Technology</Link>
                                </li>
                                <li>
                                    <Link to="/news-category/:Science" onClick={e =>this.handleClickContent("science")}>Science</Link>
                                </li>
                            </ul>
                        </div>
                        <div class="dropdown">
                            <button class="dropdown-toggle" type="button" data-toggle="dropdown">Lainnya
                            </button>
                            <ul class="dropdown-menu">
                            <li><a href="http://localhost:3000/action_page.php?search=">Fashion</a></li>
                            <li><a href="http://localhost:3000/action_page.php?search=">CSS</a></li>
                            <li><a href="http://localhost:3000/action_page.php?search=">JavaScript</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-2 search_bar">
                        <form action="/action_page.php">
                            <input onChange={e => this.handleSearchContent(e)} value={this.props.search} type="text" placeholder="search" name="category" style={{width:"150px"}}/>
                            <button type="submit" ><i class="fa fa-search"></i></button>
                        </form>
                    </div>
                    <div className="col-md-3">
                        <div className="header-nav1">
                            <ul className="header-nav__list1 list-unstyled">
                                <li>
                                    <Link to="/SignIn" >Masuk</Link>
                                </li>
                                <li>
                                    <Link onClick={this.props.getOut}>Keluar</Link>
                                </li>
                                <li>
                                    <Link to="/Profile">Profile</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      );
    }
  }
  
  export default connect("search", actions)(withRouter(Header));