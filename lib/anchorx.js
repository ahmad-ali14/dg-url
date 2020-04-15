const cheerio = require('cheerio');
const axios = require('axios');

const anchorx = function (id , url , options = {}){
    let { classess, text, style, title, target } = options
    let empty = false;
    let args  = [...arguments]
    args.map(element => {
        if( element == "empty" ){  empty = true; }
    });

    let main = getResult(url);

    window.onload = () =>{
        var element = document.querySelector(`#${id}`);
        var a = document.createElement("a");
        a.href = url;
        a.innerHTML="test link google";

        if(!empty){
        a.text =`${ main }`;
        } 
    
        if(classess) { a.className = classess }
        if( text ) { a.text = text }
        if( style ) { a.style = style }
        if ( title ) { a.title = title }
        if ( target  ) { a.target = target }

    
            
        console.log(a)    
        element.appendChild(a);

        }
    }

  



const fetchData = async (url)=>{
    const result = await axios.get(url);

    return cheerio.load(result.data);
}


const getResult = async (url) =>{
    const $ = await fetchData(url);
 
   return $('title').text();

}

  
module.exports = anchorx;
