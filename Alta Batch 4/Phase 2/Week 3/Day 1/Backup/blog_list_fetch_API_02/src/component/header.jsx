import React from 'react';
import '../assets/css/bootstrap.min.css';
import '../assets/css/main.css';
import logo from '../logo.svg';

class Header extends React.Component {
    render() {
        
        return (
        <div className="header">
            <div className="container-fluid background_header">
                <div className="row align-items-center">
                    <div className="col-md-3 col-sm-12 altalogo">
                        <div>
                            <img src={logo} style={{width:"60px", height:"60px"}} className="App-logo" alt="logo" />
                        </div>
                        <div className="kabarkabar">
                            <h3>KabarKabar</h3>
                        </div>
                    </div>
                    <div className="col-md-5 option1" style={{display:"block ruby"}}>
                        <div className="header-nav1">
                            <ul className="header-nav__list1 list-unstyled">
                                <li>
                                    <a href="about_me.html">Sepakbola</a>
                                </li>
                                <li>
                                    <a href="about_me.html">Ekonomi</a>
                                </li>
                                <li>
                                    <a href="experience.html">Politik</a>
                                </li>
                                <li>
                                    <a href="contact.html">Hiburan</a>
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
                            <input type="text" placeholder="Search.." name="search" style={{width:"150px"}}/>
                            <button type="submit"><i class="fa fa-search"></i></button>
                        </form>
                    </div>
                    <div className="col-md-2">
                        <div className="header-nav1">
                            <ul className="header-nav__list1 list-unstyled">
                                <li>
                                    <a href="about_me.html">Masuk</a>
                                </li>
                                <li>
                                    <a href="about_me.html">Daftar</a>
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