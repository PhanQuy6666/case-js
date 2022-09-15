class listMenu{
    name;
    constructor(name){
        this.name = name;
    }
    getName(){
        return this.name;

    }
};
const menuMt = [
    new listMenu("Xe phun nước rửa đường"),
    new listMenu("Xe quét rác"),
    new listMenu("Xe hút chất thải bể phốt"),
    new listMenu("Xe cuốn ép rác"),
    new listMenu("Xe chở rác Hookfifl")
    
    
];
function showMenuMt(){
    let content = "";
    for (let i=0; i<menuMt.length; i++){
        content += `
        <li class="list-group-item">${menuMt[i].getName()}</li>
        `;

    }
    document.getElementById("listMenu-mt").innerHTML = content;
}
showMenuMt();
const menuCd = [
    new listMenu("Xe chữa cháy cứu hoả"),
    new listMenu("Xe chở hoá chất"),
    new listMenu("Xe cứu hộ giao thông"),
    new listMenu("Xe chở xăng dầu"),
    new listMenu("Xe phun nước tưới đường"),
    new listMenu("Xe trộn bê tông"),
    new listMenu("Xe chở thức ăn gia súc"),
    new listMenu("Xe chở LPG")
]
function showMenuCd(){
    let content = "";
    for (let i=0; i<menuCd.length; i++){
        content += `
        <li class="list-group-item">${menuCd[i].getName()}</li>
        `;

    }
    document.getElementById("listMenu-cd").innerHTML = content;
}
showMenuCd();