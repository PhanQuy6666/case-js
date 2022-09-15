let mainSeach = "";
mainSeach += `
<div class="alert alert-dark" role="alert">
Kết quả tìm kiếm 
</div>
`;




function seachCar(){
    let car = document.getElementById("inputGroupSelect05").value;
   
    
    if (car == "car-pn"){
        showCarpn();
        document.getElementById("main").innerHTML = mainSeach;
        
    }
    if (car == "car-qr"){
        showCarqr();
        document.getElementById("main").innerHTML = mainSeach;
    }
}

class Carpn{
    img;
    name;
    constructor(img, name){
        this.img = img;
        this.name = name;
    }
    getImg(){
        return this.img;
    }
    getName(){
        return this.name;
    }
}
const carpn = [
    new Carpn("/img/xe phun nuoc dongfeng 9 khoi.jpg", "Xe Phun Nước Rửa Đường Dongfeng 9 Khối"),
    new Carpn("/img/xe phun nuoc rưa duong dongfeng 13 khoi.jpg", "Xe phun nước rửa đường Dongfeng 13 Khối"),
    new Carpn("/img/xe phun xuong dap bui.jpg", "Xe Phun Sương Dập Bụi 10 Khối Dongfeng"),
    new Carpn("/img/xe phun nươc isuzu 13 khoi.jpg", "Xe phun nước rửa đường ISUZU 13 Khối 380hp"),
    new Carpn("/img/xe phun nuoc rua duong isuzu 13 khoi.jpg", "Xe phun nước rửa đường ISUZU 13 Khối 380hp", "Xe Phun Nước Rửa Đường ISUZU 13 Khối"),
    new Carpn("/img/xe phun nuoc rua duong isuzu 5 khoi.jpg", "Xe Phun Nước Rửa Đường ISUZU 5 Khối"),
    new Carpn("/img/xe phun nuoc rua duong dongfeng 17 khoi.jpg", "Xe Phun Nước Rửa Đường Dongfeng 17 khối"),
    new Carpn("/img/3xe-phun-nuoc-rua-duong-isuzu-9-khoi.jpg", "Xe Phun Nước Rửa Đường Isuzu 9 Khối"),
    new Carpn("/img/xe-phun-nuoc-rua-duong-DONGFENG-5-khoi.jpg", "Xe Phun Nước Rửa Đường Dongfeng 5 Khối"),
    new Carpn("/img/xe phun nuoc rưa duong dongfeng 13 khoi.jpg", "Xe Quét Đường Hút Bụi Đa Năng Dongfeng 13 Khối"),
  
]
function showCarpn(){
    
    for (let i=0; i<carpn.length; i++){
        mainSeach += `
        <div  class="col-xl-3  col-md-4 col-6">
        <div class="card" style="width: 14rem;  ">
          <img src="${carpn[i].getImg()}" class="card-img-top" alt="...">
          <div class="card-body">
            <p class="card-text" style="line-height: ; ">${carpn[i].getName()}</p>
          </div>
        </div>
        </div>
        `;

    }
    
}
const carqr = [
    new Carpn("/img/xe quet hut bui duong dongfeng 5 khoi.jpg", "Xe Quét Hút Bụi Đường ISUZU 5 Khối"),
    new Carpn("/img/xe quet isuzu 5 khoi.jpg", "Xe Quét Rác ISUZU 5 Khối Bồn ZOOMLION"),
    new Carpn("/img/xe-quet-rac-dongfeng-9-khoi-thuy-vu-corp1.jpg", "Xe Quét Rác Dongfeng 9 Khối Nhập Khẩu"),
    new Carpn("/img/xe quet dongfeng 2 khoi.jpg", "Xe Quét Hút Bụi Đường Dongfeng 2 Khối"),
    new Carpn("/img/xe phun nuoc rưa duong dongfeng 13 khoi.jpg", "Xe Quét Đường Hút Bụi Đa Năng Dongfeng 13 Khối"),
    new Carpn("/img/xe quet hut bui duong dongfeng 5 khoi.jpg", "Xe Quét Hút Bụi Đường Dongfeng 5 Khối"),
    new Carpn("/img/xe-quet-nha-xuong-LTF-1860.jpg", "Xe Quét Nhà Xưởng CLW 1800 TSL"),
   
];
function showCarqr(){
    
    for (let i=0; i<carqr.length; i++){
        mainSeach += `
        <div  class="col-xl-3  col-md-4 col-6">
        <div class="card" style="width: 14rem;  ">
          <img src="${carqr[i].getImg()}" class="card-img-top" alt="...">
          <div class="card-body">
            <p class="card-text" style="line-height: ; ">${carqr[i].getName()}</p>
          </div>
        </div>
        </div>
        `;

    }
    
}