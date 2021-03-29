
 let input = document.querySelector("#my-input");
 let content = document.querySelector(".content")

let datas = [
    {
        name: 'bún đậu',
        id: 0,
        price: 60 ,
        title: 'bún đậu ăn rất ngon',
        image_src:'https://hoangviettravel.vn/wp-content/uploads/2020/03/bun-dau-mam-tom-da-nang-01-min-1024x684.jpg'
    },
    {
        name: 'cơm sườn',
        id: 1,
        price: 40 ,
        title: 'cơm sườn ăn rất ngon',
        image_src:'https://i.ytimg.com/vi/VuZoI4WRW9Q/maxresdefault.jpg'
       
    },

    {
        name: 'cháo gà',
        id: 2,
        price: 50 ,
        title: 'cháo gà ăn rất ngon',
        image_src:'https://img-global.cpcdn.com/recipes/f0931c9b41c10357/751x532cq70/g%E1%BB%8Fi-ga-chao-recipe-main-photo.jpg'
    },

    {
        name:'bún bò',
        id:3,
        price :120 ,
        title : 'Bún bò huế là một loại bún đặc biệt',
        image_src :'https://scm-assets.constant.co/scm/unilever/e9dc924f238fa6cc29465942875fe8f0/84024100-4767-4006-a26f-ec8ff577d9fa.jpg'

    }
];

let menu = datas.map(element=>
    element.name
   
);
// document.getElementById("demo").innerHTML = menu;

 

function myFunction() {
    
    let output = input.value;
    if(output ==''){
        console.log("in put is emty");
        return ;
    }

    

     let result = menu.indexOf(output);
     


console.log(menu[result][0].toLowerCase())

    //tim vi tri xuat hien cua chuoi blog
    //  document.getElementById("demo").innerHTML =  menu[result]

    // console.log(menu.indexOf(output));
    
    
    let html = document.createElement('div');
content.appendChild(html);

html.className = 'main';



if (output !== menu[result]){
    
    html.innerHTML = 'Không có dữ liệu'
 }
 
 
 //  output[0].toLowerCase() !== menu[result][0]);


else{

    html.innerHTML = `

<h1 id='main-name'>${menu[result] }</h1>
<p>giá :${datas[result].price} k</p> 

<p> ${datas[result].title} </p> 
<img src='${datas[result].image_src}'/>
` 

}

}
/* <img src ='${datas[result].src}'/>  */


// let api = "https://api.imgflip.com/get_memes";

//     fetch(api)
// .then(response => {
//     let data = response.json();
//     return data;
// })
// .then(data => {
//     console.log(data)
// })
// document.getElementById("demo").innerHTML = 'vị trí - '+ datas.search((menu))

