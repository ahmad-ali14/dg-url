const dg = (url)=>{
    let dropbox_regex = /(http(s)*:\/\/)*(www\.)*(dropbox.com)/;
    let drive_regex =/(http(s)*:\/\/)*(www\.)*(drive.google.com\/file\/d\/)/;

    if(url.match(dropbox_regex)){
        let url2 = url.replace(/(http(s)*:\/\/)*(www\.)*/, "https://dl.");
       return url2;
    }
    else if(url.match(drive_regex)){
        let url2 = url.replace(drive_regex, "");
        let url3 = url2.match(/[\w]*\//);
        let file_id = url3[0].replace(/\//,"")
        let url4 = " https://drive.google.com/uc?id="+file_id
       return url4;
    }
    else {
       return console.error('Wrong URL, not a vlid drobox or google drive url');
    }
}

const anchor =(id , url , options = {}) => {
   let { classess, text, style, alt, open } = options
   window.onload = () =>{
    var element = document.querySelector(`#${id}`);
        var a = document.createElement("a");
        a.href = url;
        a.innerHTML="test link google";
        console.log(a)
        element.appendChild(a);
        //return a;
    }
}

module.exports = {
    dg,
    anchor
};
