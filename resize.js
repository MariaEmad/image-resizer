//uploadBoxfirst thing to do make the loo and download and all box uplpoad a file

let uploadBox = document.querySelector(".upload-box")
let fileInput = document.getElementById("photo-upload")
let previewImg = document.querySelector(".fa-solid")
let widthInput= document.querySelector(".width input")
let heightInput = document.querySelector(".height input")
let ratioInput = document.querySelector(".ratio input")
const downloadBtn = document.getElementById("download-btn")
let qualityInput = document.querySelector(".quality input")
let ogImageRatio
//================================================================================//
const loadFile =(e) => {
    const file = e.target.files[0]; // getting first user selected file

    // const file = e.target.files[0]
    if (! file) return;
    previewImg.src = URL.createObjectURL(file)
    previewImg.onload = () => {
        widthInput.value=previewImg.naturalWidth
        heightInput.value = previewImg.naturalHeight
        ogImageRatio=previewImg.naturalWidth/previewImg.naturalHeight
        document.querySelector(".wrapper").classList.add("active")
    }
}
widthInput.onkeyup = () => {
    let height = ratioInput.checked ? widthInput.value / ogImageRatio : heightInput.value
    heightInput.value=Math.floor(height)
}
heightInput.onkeyup = () => {
    let width = ratioInput.checked ? heightInput.value * ogImageRatio : widthInput.value
    widthInput.value=Math.floor(width)
}
const resizeAndDownload=()=> {
    const canvas = document.createElement("canvas")
    const a = document.createElement("a");
const ctx = canvas.getContext("2d");
const imgQuality = qualityInput.checked ? 0.5 : 1.0;
    // a.addAttribute("id","a")
    // const aEle =document.querySelector("a")
    canvas.width = widthInput.value;
    canvas.height = heightInput.value;
    ctx.drawImage(previewImg, 0, 0, canvas.width, canvas.height);
    a.href = canvas.toDataURL("image/jpeg", imgQuality);
    a.download = new Date().getTime();
    a.click();
}
// const resizeAndDownload = () => {
//     const canvas = document.createElement("canvas");
//     const a = document.createElement("a");
//     const ctx = canvas.getContext("2d");

//     // if quality checkbox is checked, pass 0.5 to imgQuality else pass 1.0
//     // 1.0 is 100% quality where 0.5 is 50% of total. you can pass from 0.1 - 1.0
//     const imgQuality = qualityInput.checked ? 0.5 : 1.0;

//     // setting canvas height & width according to the input values
//     canvas.width = widthInput.value;
//     canvas.height = heightInput.value;

//     ctx.drawImage(previewImg, 0, 0, canvas.width, canvas.height);
    
//     // passing canvas data url as href value of <a> element
//     a.href = canvas.toDataURL("image/jpeg", imgQuality);
//     a.download = new Date().getTime(); // passing current time as download value
//     a.click(); // clicking <a> element so the file download
// }
   
    

downloadBtn.addEventListener("click",resizeAndDownload)
fileInput.addEventListener("change",loadFile)
uploadBox.onclick = () => { fileInput.click() }

//14.45 min
//https://www.youtube.com/watch?v=x8U2MTTEjtI&list=PLpwngcHZlPadhRwryAXw3mJWX5KH3T5L3
//https://www.codingnepalweb.com/resize-and-compress-images-javascript/