var maKHEl=document.getElementById("maKH")

var ketnoiEl=document.getElementById("ketnoi")
var kenhEl=document.getElementById("kenh")
var tienhoaDon
var tiencoBan
var giaKenh
var tienphaitra4

function loaiKH(loaiKH){
    if(loaiKH=="CN"){
        document.getElementById("showkenh").style.display="block";
        document.getElementById("showketnoi").style.display="none";

        tienhoaDon=4.5
        tiencoBan=20.5
        giaKenh=7.5
    }
    else if(loaiKH=="DN"){
        document.getElementById("showkenh").style.display="block";
        document.getElementById("showketnoi").style.display="block";
        tienhoaDon=15        
        giaKenh=50
        
    }
}

function ketnoi1(kn){
    
        return 75
    
}
function ketnoi2(kn) {
    
        return 5
    
    
}
var kn1=ketnoi1(ketnoiEl.value)
var kn2=ketnoi2(ketnoiEl.value)
function chonLoai(){
var typeKH=document.querySelector('input[name="selector"]:checked');

    loaiKH(typeKH.value)
    
    
  }

function tinhgia(){
var typeKH=document.querySelector('input[name="selector"]:checked');

    if(typeKH.value=="CN"){
tienphaitra4=tienhoaDon*1+tiencoBan*1+giaKenh*kenhEl.value
}
else if(typeKH.value=="DN"){
    if(ketnoiEl.value<=10){
        tienphaitra4=tienhoaDon*1+kn1*1+giaKenh*kenhEl.value
    }
    if(ketnoiEl.value>10){
        tienphaitra4=tienhoaDon*1+kn1*1+(ketnoiEl.value-10)*kn2+giaKenh*kenhEl.value
    }
}
document.getElementById("ketqua4").innerText="Khách hàng mã số "+maKHEl.value+" phải trả số tiền là " + tienphaitra4 + " USD"
}
