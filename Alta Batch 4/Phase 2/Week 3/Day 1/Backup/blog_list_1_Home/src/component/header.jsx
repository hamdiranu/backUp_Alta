import React from 'react';
import '../assets/css/bootstrap.min.css';
import '../assets/css/main.css';
import logo from '../logo.svg';
import { Link } from 'react-router-dom';


class Header extends React.Component {
    getOut = () => {
        localStorage.removeItem("statusLogin");
        // localStorage.clear()
        this.props.history.push("/");
    }

    render() {
    console.warn("cek this props is Category", this.props.isCategoryNews)

    return (
        <div className="header">
            <div className="container-fluid background_header">
                <div className="row align-items-center">
                    <div className="col-md-3 col-sm-12 altalogo">
                        <div>
                            <Link to="/" onClick={e => this.props.goBackHome()}><img src={logo} style={{width:"60px", height:"60px"}} className="App-logo" alt="logo" /></Link>
                        </div>
                        <div className="kabarkabar">
                            <h3>KabarKabar</h3>
                        </div>
                    </div>
                    <div className="col-md-4 option1" style={{display:"block ruby"}}>
                        <div className="header-nav1">
                            <ul className="header-nav__list1 list-unstyled">
                                <li>
                                    <Link to="/news-category/:Health" onClick={e =>this.props.doClick("health")}>Health</Link>
                                </li>
                                <li>
                                    <Link to="/news-category/:Sport" onClick={e => this.props.doClick("sport")}>Sport</Link>
                                </li>
                                <li>
                                    <Link to="/news-category/:Technology" onClick={e =>this.props.doClick("technology")}>Technology</Link>
                                </li>
                                <li>
                                    <Link to="/news-category/:Science" onClick={e =>this.props.doClick("science")}>Science</Link>
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
                            <input onChange={e => this.props.doSearch(e)} value={this.props.cari} type="text" placeholder="Search.." name="search" style={{width:"150px"}}/>
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
                                    <Link onClick={this.getOut}>Keluar</Link>
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
  
  export default Header;