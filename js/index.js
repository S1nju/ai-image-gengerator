
const inp = document.getElementById('inp');
const imd=  document.getElementById('images');

const getimage = async ()=>{
    const met={
        method: 'POST',
        headers: {"Content-Type": "application/json",
        "Authorization": "Bearer ai token"
    },
        body: JSON.stringify({
            "model": "dall-e-3",
           "prompt": inp.value,
          
         
    
          
           "n":3,
       
         }),
        redirect: 'follow'
        }
    
    const res = await fetch("https://api.openai.com/v1/images/generations",met);
 const data = await res.json();

 console.log(data);
let images = data.data;
imd.innerHTML='';

   images.map(image=>{
   
    const cont = document.createElement('div');
    cont.classList='div'
    imd.appendChild(cont);
    const img = document.createElement('img')
    cont.appendChild(img);
    img.src=image.url;


   })
        





  


};