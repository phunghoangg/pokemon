
fetch("https://pokeapi.co/api/v2/pokemon/?fbclid=IwAR2-aWM7k8r7fS6Gew0Rn8Nebw__KtiBaO-nTihi3kz0xz21WKLCl-0SQb4")
.then((response) => {
    return response.json()
})
.then((myJson) => 
{
    for(let  i = 0 ; i<myJson.results.length ; i++){
        let a = myJson.results[i].url
        // lấy ra link
        fetch(a)
        .then((response) => {
          return response.json()
         }
         )
         .then((myJson1) =>{
            // thêm class là id và add id , thêm tên
            
           let content = document.querySelectorAll(".content-item")
            content[i].classList.add(`${i}` , 'item-id')
            if(myJson1.id <10){
           content[i].innerHTML = `<div >
 
           <div class="id-item">#00${myJson1.id}</div>
           <div> <H3  class="name-item"> ${myJson1.name}</H3></div>
           <div class="type-item"> type: ${myJson1.types[0].type.name} </div>
           
           </div>`
              }
            else if(myJson1.id >=10){
                content[i].innerHTML = `<div>
                
                <div class="id-item">#0${myJson1.id}</div>
               <div> <H3  class="name-item"> ${myJson1.name}</H3></div>
           <div class="type-item"> type: ${myJson1.types[0].type.name} </div>
                
                
                
                
                </div>`

            }
                 
            //thêm ảnh
            let imgItem = document.querySelectorAll(".img-item")
           
            imgItem[i].innerHTML = `<img class="size-img" src="${myJson1.sprites.other['official-artwork']["front_default"]}" alt="hình ảnh"/>`
           let allList = document.querySelectorAll(".box-item")
           
           if(myJson1.types[0].type.name === "grass"){
            allList[i].classList.add(`color-grass`)}

           else if(myJson1.types[0].type.name === "fire"){
               allList[i].classList.add("color-fire")
           }
            else if(myJson1.types[0].type.name === "water"){
                allList[i].classList.add(`color-water`)}
            else if(myJson1.types[0].type.name === "bug"){
                allList[i].classList.add(`color-bug`)}
           else{
               allList[i].classList.add("color-normal")
           }
         

           // thêm khi click
           let clickItem = document.querySelector(".click")
          

           //function click
           allList[i].onclick = ()=>{
            clickItem.classList.add(`display-item`)
            clickItem.innerHTML =
            
            `
            <div class="center-item">
            <button class="btn-close">X</button>
            <img  src="${myJson1.sprites.other['official-artwork']["front_default"]}" alt="hình ảnh"/>
            <div >#0${myJson1.id}</div>
               <div> <H3  class="name-item"> ${myJson1.name}</H3></div>
           <div> type: ${myJson1.types[0].type.name} </div>
            </div>
            
            
            `
             
             
             let buttonClose = document.querySelector(".btn-close")
             buttonClose.onclick = () => {
                  clickItem.classList.remove("display-item")
                  
                       
             }
            
             
           
            }
           
          // khi seach

           let valueInput = document.querySelector(".input")
           let buttonInput = document.querySelector(".button-input")
           let nameSeach = document.querySelectorAll(".name-item")
           buttonInput.onclick = () => {
           for(let j = 0 ; j <nameSeach.length ; j++){
               if(nameSeach[j].innerText === valueInput.value){
                let IMGPKC = allList[j].querySelector(".size-img")
                let IDPKC = allList[j].querySelector(".id-item")
                let NAMEPKC = allList[j].querySelector(".name-item")
                let typePKC = allList[j].querySelector(".type-item")
               
                    clickItem.classList.add(`display-item`)
                    clickItem.innerHTML =
                    
                    `
                    <div class="center-item">
                    <button class="btn-close">X</button>
                    <img  src="${IMGPKC.src}" alt="hình ảnh"/>
                    <div >${IDPKC.textContent}</div>
                       <div> <H3  class="name-item"> ${NAMEPKC.textContent}</H3></div>
                   <div> ${typePKC.textContent} </div>
                    </div>
                    
                    
                    `
                     
                     
                     let buttonClose = document.querySelector(".btn-close")
                     buttonClose.onclick = () => {
                          clickItem.classList.remove("display-item")
                          
                               
                     }
                    
                     
                   
                   
               }
            
              
            
           }
           valueInput.value = null
           }
           
              
            
           
               
           

           
            
                

         })
    }

}
)
.catch((eror) => {
   alert( eror , "xảy ra lỗi")
}
)
