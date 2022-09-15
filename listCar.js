class Car{
    img;
    info;
    link;
    constructor(img, info, link){
        this.img = img;
        this.info = info;
        
    }
    getImg(){
        return this.img;
    }
    getInfo(){
        return this.info;
    }
   
}
const listCarMt = [
    new Car("/img/xe phun nuoc dongfeng 9 khoi.jpg", "Xe Phun Nước Rửa Đường Dongfeng 9 Khối"),
    new Car("/img/xe phun nuoc rưa duong dongfeng 13 khoi.jpg", "Xe phun nước rửa đường Dongfeng 13 Khối"),
    new Car("/img/xe phun xuong dap bui.jpg", "Xe Phun Sương Dập Bụi 10 Khối Dongfeng"),
    new Car("/img/xe phun nươc isuzu 13 khoi.jpg", "Xe phun nước rửa đường ISUZU 13 Khối 380hp"),
    new Car("/img/xe phun nuoc rua duong isuzu 13 khoi.jpg", "Xe phun nước rửa đường ISUZU 13 Khối 380hp", "Xe Phun Nước Rửa Đường ISUZU 13 Khối"),
    new Car("/img/xe phun nuoc rua duong isuzu 5 khoi.jpg", "Xe Phun Nước Rửa Đường ISUZU 5 Khối"),
    new Car("/img/xe phun nuoc rua duong dongfeng 17 khoi.jpg", "Xe Phun Nước Rửa Đường Dongfeng 17 khối"),
    new Car("/img/3xe-phun-nuoc-rua-duong-isuzu-9-khoi.jpg", "Xe Phun Nước Rửa Đường Isuzu 9 Khối"),
    new Car("/img/xe-phun-nuoc-rua-duong-DONGFENG-5-khoi.jpg", "Xe Phun Nước Rửa Đường Dongfeng 5 Khối"),
    new Car("/img/xe quet hut bui duong dongfeng 5 khoi.jpg", "Xe Quét Hút Bụi Đường ISUZU 5 Khối"),
    new Car("/img/xe quet isuzu 5 khoi.jpg", "Xe Quét Rác ISUZU 5 Khối Bồn ZOOMLION"),
    new Car("/img/xe-quet-rac-dongfeng-9-khoi-thuy-vu-corp1.jpg", "Xe Quét Rác Dongfeng 9 Khối Nhập Khẩu"),
    new Car("/img/xe quet dongfeng 2 khoi.jpg", "Xe Quét Hút Bụi Đường Dongfeng 2 Khối"),
    new Car("/img/xe phun nuoc rưa duong dongfeng 13 khoi.jpg", "Xe Quét Đường Hút Bụi Đa Năng Dongfeng 13 Khối"),
    new Car("/img/xe quet hut bui duong dongfeng 5 khoi.jpg", "Xe Quét Hút Bụi Đường Dongfeng 5 Khối"),
    new Car("/img/xe-quet-nha-xuong-LTF-1860.jpg", "Xe Quét Nhà Xưởng CLW 1800 TSL"),
    new Car("/img/xe hut 9 khoi dongfeng.jpg", "Xe Hút Chất Thải 9 Khối Dongfeng"),
    new Car("/img/xe hut be phot 6 khoi.jpg", "Xe Hút Chất Thải Dongfeng 6 Khối"),
    new Car("/img/xe hut bun thong cong.jpg", "Xe Hút Bùn Thông Cống dongfeng"),
    new Car("/img/xe hut chat thai howo 4 chan.jpg", "Xe Hút Chất Thải HOWO 4 Chân"),
    new Car("/img/xe-hut-chat-thai-isuzu-7-khoi-thuyvu-06.jpg", "Xe Hút Chất Thải ISUZU 7 Khối"),
    new Car("/img/xe cuon ep rac isuzu.jpg", "Xe Cuốn Ep Rác ISUZU 14 Khối"),
    new Car("/img/xe-cho-rac-dongfeng-22-khoi-thuy-vu-corp.jpg", "Xe Cuốn Ép Chở Rác Dongfeng 22 Khối"),
    new Car("/img/Xe-Cuon-Ep-Cho-Rac-Dongfeng-14-Khoi.jpg", "Xe Cuốn Ép Chở Rác Dongfeng 14 Khối")
];
function showCarMt(){
    let content = "";
    for (let i=0; i<listCarMt.length; i++){
        content += `
        <div  class="col-xl-3  col-md-4 col-6">
        <div class="card" style="width: 14rem;  ">
          <img src="${listCarMt[i].getImg()}" class="card-img-top" alt="...">
          <div class="card-body">
            <p class="card-text" style="line-height: ;">${listCarMt[i].getInfo()}</p>
          </div>
        </div>
        </div>
        `;

    }
    document.getElementById("listCarMt").innerHTML = content;
};
showCarMt();

const listCarCd = [
    new Car("/img/xe cuu hoa isuzu 4 khoi.jpg", "Xe Cứu Hỏa ISUZU 4 Khối"),
    new Car("/img/2xe-cuu-hoa-dongfeng-4-khoi.jpg", "Xe Cứu Hỏa Dongfeng 4 Khối"),
    new Car("/img/xe cuu hoa dongfeng 6 khoi-thuy-vu-corp.jpg", "Xe Cứu Hỏa Dongfeng 6 Khối nhập khẩu"),
    new Car("/img/2xe-cuu-hoa-ISUZU-6-Khoi.jpg", "Xe Cứu Hỏa ISUZU 6 Khối"),
    new Car("/img/somi-romoc.jpg", "Sơmi Romooc Chở Axit 28 Khối"),
    new Car("/img/xe-bon-cho-hoa-chat-dongfeng-17-khoi-thuy-vu-corp 02.jpg", "Xe Bồn Chở Axit Acetic Dongfeng 17 Khối"),
    new Car("/img/cuu ho dongfeng.jpg", "Xe Cứu Hộ Giao Thông Dongfeng B190 Có Càng Kéo"),
    new Car("/img/Xe-cuu-ho-giao-thong.jpg", "Xe Cứu Hộ Giao Thông Dongfeng 6x4"),
    new Car("/img/2xe-cuu-ho-san-truot-ISUZU.jpg", "Xe cứu hộ giao thông Isuzu 4 tấn"),
    new Car("/img/xe cuu ho shacman.jpg", "Xe Cứu Hộ Giao Thông SHACMAN 6x4"),
    new Car("/img/xe cuu ho faw.jpg", "Xe Cứu Hộ Giao Thông FAW Có Cẩu Gập"),
    new Car("/img/xe-phun-tuoi-nhua-duong-dongfeng-7-khoi-thuy vu corp-01.jpg", "Xe Phun Rải Nhựa Đường Dongfeng 7 Khối"),
    






];
function showCarCd(){
    let content = "";
    for (let i=0; i<listCarCd.length; i++){
        content += `
        <div  class="col-xl-3  col-md-4 col-6">
        <div class="card" style="width: 14rem;  ">
          <img src="${listCarCd[i].getImg()}" class="card-img-top" alt="...">
          <div class="card-body">
            <p class="card-text" style="line-height: ; ">${listCarCd[i].getInfo()}</p>
          </div>
        </div>
        </div>
        `;

    }
    document.getElementById("listCarCd").innerHTML = content;
};
showCarCd();

const listCarNn = [
    new Car("/img/xe nang nguoi lam viec tren cao isuzu 18m thuy vu corp.jpg", "Xe Nâng Người Làm Việc Trên Cao ISUZU 18m"),
    new Car("/img/nang nguoi isuzu 24m.jpg", "Xe Nâng Người Làm Việc Trên Cao ISUZU 24m"),
    new Car("/img/Xe Nâng Người Làm Việc Trên Cao 18m.jpg", "Xe nâng người làm việc trên cao Dongfeng 18m"),
    new Car("/img/nang nguoi dongfeng 18m.jpg", "Xe Nâng Người Dongfeng 18m"),
    new Car("/img/Xe Nâng Người Làm Việc Trên Cao 18m.jpg", "Xe Nâng Người Làm Việc Trên Cao 18m"),
    new Car("/img/2xe-nang-nguoi-cat-keo-14m-runshare-GTJZ12-thuy-vu-corp.jpg", "Xe Nâng Người Cắt Kéo 14m RUNSHARE"),
    new Car("/img/xe-nang-nguoi-cat-keo-12m-runshare-GTJZ12-thuy-vu-corp.jpg", "Xe Nâng Người Cắt Kéo 12m RUNSHARE"),
    new Car("/img/xe-nang-nguoi-cat-keo-8m-runshare-GTJZ08-thuy-vu-corp.jpg", "Xe Nâng Người Cắt Kéo 8m RUNSHARE")
];
function showCarNn(){
    let content = "";
    for (let i=0; i<listCarNn.length; i++){
        content += `
        <div  class="col-xl-3  col-md-4 col-6">
        <div class="card" style="width: 14rem;  ">
          <img src="${listCarNn[i].getImg()}" class="card-img-top" alt="...">
          <div class="card-body">
            <p class="card-text" style="line-height: ; ">${listCarNn[i].getInfo()}</p>
          </div>
        </div>
        </div>
        `;

    }
    document.getElementById("listCarNn").innerHTML = content;
};
showCarNn();