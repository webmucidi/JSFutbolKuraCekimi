//Veri havuzu tanımlanır Array/JS Object/JSON/Database
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
        return;
    }
    let rastgeleTakim1 = Math.floor(Math.random() * takimlar.length);
    takim1.src=takimlar[rastgeleTakim1];
    takimlar.splice(rastgeleTakim1,1);
    let rastgeleTakim2 = Math.floor(Math.random() * takimlar.length);
    takim2.src=takimlar[rastgeleTakim2];
    takimlar.splice(rastgeleTakim2,1);
    if(rastgeleTakim1==rastgeleTakim2){
        alert("Aynı takımlar birbiriyle eşleşemez. Yeniden deneyin!");
        return;
    }
}

//Sonuç göstermek için gerekli fonksiyon tanımlanır.