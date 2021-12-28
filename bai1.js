var diemchuanEl=document.getElementById("diemchuan")
var diem1El=document.getElementById("diem1")
var diem2El=document.getElementById("diem2")
var diem3El=document.getElementById("diem3")
var khuvucEl=document.getElementById("khuvuc")
var doituongEl=document.getElementById("doituong")
function diemkhuvuc(khuvuc){
    if(khuvuc=="A"){
        return 2
    }
    else if(khuvuc=="B"){
return 1
    }else if(khuvuc=="C"){
        return 0.5
    }else{
        return 0
    }
}
function diemdoituong(doituong){
    if(doituong==1){
        return 2.5
    }else if(doituong==2){
        return 1.5
    }else if(doituong==3){
        return 1
    }else{
        return 0
    }
}
function tinhdiem(){

    if(diem1El.value>0&&diem2El.value>0&&diem3El.value>0){
        var sum3mon=(diem1El.value*1+diem2El.value*1+diem3El.value*1)        
        var sumDiem=(diem1El.value*1+diem2El.value*1+diem3El.value*1+diemkhuvuc(khuvucEl.value))
        document.getElementById("3mon").innerText=sum3mon + " điểm"
        document.getElementById("congkhuvuc").innerText=diemkhuvuc(khuvucEl.value) + " điểm"
        document.getElementById("congdoituong").innerText=diemdoituong(doituongEl.value) + " điểm"
        document.getElementById("diemtongket").innerText=sumDiem + " điểm"
        if(sumDiem<diemchuanEl.value*1){
            document.getElementById("ketqua1").innerText="Thí sinh rớt vì không đạt điểm chuẩn!"
        }else{
            document.getElementById("ketqua1").innerText="Thí sinh đậu vì đạt điểm chuẩn!"
        }
    }   else{document.getElementById("ketqua1").innerText="Thí sinh rớt vì có môn 0 điểm!";}
    
}