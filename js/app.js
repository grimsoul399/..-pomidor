let imgbox = document.getElementById("imbox")
let qrText = document.getElementById("qrText")
let qrimage = document.getElementById("qrimage")

function genQR(){
    qrimage.src ="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" +qrText.Value

}