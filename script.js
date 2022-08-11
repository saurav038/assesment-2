const xhr = new XMLHttpRequest();
const source =
  "https://jsonplaceholder.typicode.com/photos";
xhr.open("GET", source, true);
xhr.onreadystatechange = () => {
  if (xhr.readyState === 4 && xhr.status === 200) {
    const response = JSON.parse(xhr.responseText);
    console.log(response);
    let output = "";
    for (let i = 0; i < 100; i++) {
      output += `
        <div class="grid-item">
            <img src="${response[i].url}" class="ajaxImg">
            <div class="content">
                <span><hr></span>
                <p class="title">${response[i].title}</p>
            </div>
        </div>`;
    }
    document.querySelector(".grid-container").innerHTML = output;
  }
};
xhr.send()

const toggglePremium = () => {

}