var sokwEl=document.getElementById("sokw")
var ten2El=document.getElementById("ten2")
var tienphaitra
function gia1(kw){
    return 500
}
function gia2(kw){
    return 650
}
function gia3(kw){
    return 850
}
function gia4(kw){
    return 1100
}
function gia5(kw){
    return 1300
}
var to50=gia1(sokwEl.value)
var from50to100=gia2(sokwEl.value)
var from100to200=gia3(sokwEl.value)
var from200to350=gia4(sokwEl.value)
var from350=gia5(sokwEl.value)

function tinhtien(){
    if(sokwEl.value<=50){
        tienphaitra=sokwEl.value*to50*1
        console.log(tienphaitra);
    }
    if(sokwEl.value>50&&sokwEl.value<=100){
       tienphaitra=(50*to50)+(sokwEl.value-50)*from50to100
       console.log(tienphaitra);
    }
    if(sokwEl.value>100&&sokwEl.value<=200){
        tienphaitra=(50*to50)+(50*from50to100)+(sokwEl.value-100)*from100to200
        console.log(tienphaitra);
    }
    if(sokwEl.value>200&&sokwEl.value<=350){
        tienphaitra=(50*to50)+(50*from50to100)+(100*from100to200)+(sokwEl.value-200)*from200to350
        console.log(tienphaitra);
    }
    if(sokwEl.value>350){
        tienphaitra=(50*to50)+(50*from50to100)+(100*from100to200)+(150*from200to350)+(sokwEl.value-350)*from350
        console.log(tienphaitra);
    }
    document.getElementById("ketqua2").innerText="Khách hàng "+ten2El.value+" phải trả số tiền là: " + tienphaitra + " VNĐ"
}
