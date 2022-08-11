const xhr = new XMLHttpRequest();
const source =
  "https://jsonplaceholder.typicode.com/photos";
  let data, page = 1;
xhr.open("GET", source, true);
xhr.onreadystatechange = () => {
  if (xhr.readyState === 4 && xhr.status === 200) {
    data = JSON.parse(xhr.responseText);
    let output = "";
    for (let i = 0; i < 100; i++) {
      output += `
        <div class="grid-item">
            <img src="${data[i].url}" class="ajaxImg">
            <div class="content">
                <span><hr></span>
                <p class="title">${data[i].title}</p>
            </div>
        </div>`;
    }
    document.querySelector(".grid-container").innerHTML = output;
  }
};
xhr.send();

// implementing pagination
let pagination = new tui.Pagination("pagination", {
    totalItems: 1000,
  });
  
  pagination.on("beforeMove", function (eventData) {
    page = eventData.page;
    updateContent();
  });
  
  function updateContent() {
    let output = "";
    for (let i = (page - 1) * 100; i < page * 100; i++) {
      output += `
      <div class="grid-item">
      <img src="${data[i].url}" class="ajaxImg">
      <div class="content">
          <span><hr></span>
          <p class="title">${data[i].title}</p>
      </div>
  </div>`;
    }
    document.querySelector(".grid-container").innerHTML = output;
  }