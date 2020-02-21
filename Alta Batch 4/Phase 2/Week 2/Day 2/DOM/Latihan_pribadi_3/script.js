function alarm(){
    var nama=document.forms["myform"]['username'].value;
    var password=document.forms["myform"]['password'].value;
    var confirmPassword=document.forms["myform"]['con_password'].value;
    var email=document.forms["myform"]['email'].value;
    var confirmEmail=document.forms["myform"]['con_email'].value;

    if (nama ==''){
        alert("Nama tidak boleh kosong");
        return false;
    }
    else if (password == '') {
        alert("Password tidak boleh kosong");
        return false;
    }
    else if (confirmPassword == '') {
        alert("Konfirmasi password tidak boleh kosong");
        return false;
    }
    else if (email == '') {
        alert("Email tidak boleh kosong");
        return false;
    }
    else if (confirmEmail == '') {
        alert("Konfirmasi email tidak boleh kosong");
        return false;
    }
    else if (confirmEmail != email || email != confirmEmail) {
        alert("Konfirmasi email tidak sama dengan email");
        return false;
    }
    else if (confirmPassword != password || password != confirmPassword) {
        alert("Konfirmasi pasword tidak sama dengan pasword");
        return false;
    }
    else {
        alert("Registrasi Sukses");
        return false;
    }
}