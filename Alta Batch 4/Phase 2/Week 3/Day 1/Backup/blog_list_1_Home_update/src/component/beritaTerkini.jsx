import React from 'react';
import '../assets/css/bootstrap.min.css';
import '../assets/css/main.css';

class BeritaTerkini extends React.Component {
    render() {
        console.log("cek listberitaterkini", this.props.listberitaterkini);
        
        const top_berita = this.props.listberitaterkini.filter((element,i) => i<=4);
        console.log("cek list top berita", top_berita)
        if (this.props.isLoading === false) {
            return (
                <div className="col-md-5">
                    <div className="berita_terkini">
                        <h5>BERITA TERKINI</h5>
                        <a href="about_me.html">lihat semua</a>
                    </div>
                    {top_berita.map((isi,i) => (
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
                        )
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
  
export default BeritaTerkini;