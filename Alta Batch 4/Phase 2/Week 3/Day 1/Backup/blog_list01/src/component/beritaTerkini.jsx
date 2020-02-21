import React from 'react';
import '../assets/css/bootstrap.min.css';
import '../assets/css/main.css';

let isiBeritaTerkini = [
    "Gabung Alpha Tech Academy Sekarang!","Ada apa dengan Kobar dan Hasan?",
    "Mengenal Arafat sang Master Python", "Belajar react.Js itu seru. Kamu setuju?", 
    "sudahkah kamu sehat mental?"
  ]

class beritaTerkini extends React.Component {
    render() {
      return (
        <div className="col-md-5">
            <div className="berita_terkini">
                <h5>BERITA TERKINI</h5>
                <a href="about_me.html">lihat semua</a>
            </div>
            {isiBeritaTerkini.map((isi,i) =>
                <div className="isi_berita_terkini">
                <div className="col-md-12">
                    <div className="col-md-2 nomor" style={{paddingRight:"35px", paddingLeft:"0px"}}>
                        <h6>#{i+1}</h6>
                    </div>
                </div>
                
                <div className="judul">
                    <a href="http://localhost:3000/action_page.php?search=">{isi}</a>
                </div>
                </div>
            )}
        </div>
        );
    }
  }
  
  export default beritaTerkini;