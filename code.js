//Veri havuzu tanımlanır Array/JS Object/JSON/Databas
/*
let takimlar = [
    "images/besiktas.png",
    "images/fenerbahce.png",
    "images/galatasaray.png",
    "images/trabzonspor.png",
    "images/milan.png",
    "images/inter.png",
    "images/realmadrid.png",
    "images/barcelona.png",
    "images/napoli.png",
    "images/liverpool.png"
  ];
  */
  const takimlar = [
    { ad: "BEŞİKTAŞ", src: "images/besiktas.png" },
    { ad: "FENERBAHÇE", src: "images/fenerbahce.png" },
    { ad: "GALATASARAY", src: "images/galatasaray.png"},
    { ad: "TRABZONSPOR", src: "images/trabzonspor.png" },
    { ad: "MİLAN", src: "images/milan.png" },
    { ad: "İNTER", src: "images/inter.png" },
    { ad: "REAL MADRİD", src: "images/realmadrid.png" },
    { ad: "BARCELONA", src: "images/barcelona.png" },
    { ad: "NAPOLİ", src: "images/napoli.png" },
    { ad: "LİVERPOOL", src: "images/liverpool.png" }

];
let eslesmeler=[];

//Programda sık kullanılacak HTML nesneleri değişkenlere aktarılır.
const takim1=document.getElementById("takim1");
const takim2=document.getElementById("takim2");
const btnEslestir=document.getElementById("btnEslestir");
const sonucListe=document.getElementById("sonucListe");

//İşlemi tetikleyecek nesneneye olay dinleyici atanır.
btnEslestir.addEventListener("click",eslestir);

//Olay gerçekleşince olacak işlemler eslestir fonksiyonu altında adım adım tanımlanır.
function eslestir(){
    if(takimlar.length<2){
        alert("Eşleşmler tamamlandı. Tüm takımlara başarılar dileriz. GS hariç!");
        sonucGoster();
    }
    let rastgeleTakim1 = Math.floor(Math.random() * takimlar.length);
    takim1.src=takimlar[rastgeleTakim1].src;
    eslesmeler.push(takimlar[rastgeleTakim1].ad);
    takimlar.splice(rastgeleTakim1,1);

    let rastgeleTakim2 = Math.floor(Math.random() * takimlar.length);
    takim2.src=takimlar[rastgeleTakim2].src;
    eslesmeler.push(takimlar[rastgeleTakim2].ad);
    takimlar.splice(rastgeleTakim2,1);

    if(rastgeleTakim1==rastgeleTakim2){
        alert("Aynı takımlar birbiriyle eşleşemez. Yeniden deneyin!");
        return;
    }

    console.log(takimlar,eslesmeler);
}

//Sonuç göstermek için gerekli fonksiyon tanımlanır.
function sonucGoster(){
    for(let i=0;i<eslesmeler.length;i=i+2){
        const eleman=document.createElement("li");
        sonucListe.appendChild(eleman);
        eleman.innerHTML=eslesmeler[i]+" vs. "+eslesmeler[i+1];
    }
}