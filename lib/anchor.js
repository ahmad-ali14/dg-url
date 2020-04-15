
    const anchor = function (id , url , options = {}){
        let { classess, text, style, title, target } = options
        let empty = false;
        let args  = [...arguments]
        args.map(element => {
         if( element == "empty" ){  empty = true; }
        });
   
        let regex = /^(?<start>https|http)?(?<colon_slashes>:\/\/)?(?<three_w>www.)?(?<main>[\w\-\_\:]+)(?<dot_com>\.[\w]+)\/*(?<text1>[\w\-\_\#\?\&\=]*)\/*(?<text2>[\w\-\_\#\?\&\=]*)\/*(?<text3>[\w\-\_\#\?\&\=]*)/;
   
        let matches = url.match(regex);
        console.log('matched', matches.groups)
         var { start, colon_slashes, three_w, main, dot_com, text1, text2, text3  } = matches.groups;
        
         let orginising_arr = [ main , text1 , text2  , text3]
         let new_orginising_arr = [];
         orginising_arr.map((e)=>{
           if( e.match(/^\d+$/) ) { return new_orginising_arr.push(""); }
             let splitted = e.split(/\_|\-/g);
             new_orginising_arr.push(splitted.join(' '))
         })
         var new_orginising_str = new_orginising_arr.join(' ')
         console.log(new_orginising_str)
   
        window.onload = () =>{
         var element = document.querySelector(`#${id}`);
         var a = document.createElement("a");
         a.href = url;
         a.innerHTML="test link google";
   
         if(!empty){
           a.text =`${main}  ${new_orginising_str}`;
           a.title =`${main}  ${new_orginising_str}`;

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
  
     module.exports = anchor;