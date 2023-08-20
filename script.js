function handleClick(element){
    let end_point_url = "http://localhost:8020/api/carbrand"
    var base64String = "";
    let file = element.files[0];
    let reader = new FileReader();
    reader.onload = () => {
    base64String = reader.result;
    fetch(end_point_url, {
        method: "POST",
        body: JSON.stringify({img: base64String}),
        headers:{"Content-type": "application/json; charset=UTF-8"}
        }
    )
    
    .then((response) => response.json())
    // .then((json) => console.log(json));
    .then((json) => {
        const resultElement = document.getElementById('result');
        const carModel = json["to is Brand"];
        resultElement.textContent = carModel;

        const previewImageElement = document.getElementById('previewImage');
        previewImageElement.src = base64String; // ตั้งค่า source ของรูปภาพให้กับ <img>
    });
    };
    reader.readAsDataURL(file);
}