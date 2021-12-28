var ten3El=document.getElementById("ten3")
var tongThuNhapEl=document.getElementById("tongThuNhap")
var soNguoiEl=document.getElementById("soNguoi")
var thue
var tiensauthue


function phanTram(tien){
    if(tien>0&&tien<=60){
        return 5
    } else if(tien>60&&tien<=120){
        return 10
    } else if(tien>120&&tien<=210){
        return 15
    }else if(tien>210&&tien<=384){
        return 20
    }else if(tien>384&&tien<=624){
        return 25
    }else if(tien>624&&tien<=960){
        return 30
    } else if(tien>960){
        return 35
    }

}




function tinhthue(){
    var thuNhapThue=tongThuNhapEl.value*1-4-soNguoiEl.value*1.6
    console.log(thuNhapThue);
    thue=phanTram(thuNhapThue)
    console.log(thue);
    tiensauthue=(thuNhapThue*thue/100)
    console.log(tiensauthue);
    document.getElementById("thunhap").innerText="Thu nhập chịu thuế là "+thuNhapThue+" triệu VNĐ"
    document.getElementById("thuesuat").innerText="Thuế suất là "+thue+" %"
    document.getElementById("ketqua3").innerText="Khách hàng "+ten3El.value+" phải trả số tiền thuế là "+ tiensauthue +" triệu VNĐ"

}