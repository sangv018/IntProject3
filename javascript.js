// VARIABLES

// API Key for Airtable
const airtableApiKey = "keyWImqyJCvS8PKBp";

//Data is Location
const airtableDatabaseUrl = "https://api.airtable.com/v0/appVUi5fcsMbiAXGQ/laptops";

//API Key Authentication
const authenticatedUrl = airtableDatabaseUrl + "?api_key=" + airtableApiKey;

console.log(authenticatedUrl)

// STEP 2: DOM REFERENCES
const tableContainerElement = document.querySelector("#table");
console.log(tableContainerElement)
// STEP 3: USING FUNCTIONS, VARIABLES, AND LOOPS

// 'Promise' Representing the Data Returned
const fetchPromise = fetch(authenticatedUrl)
const jsonPromise = fetchPromise.then((response) => {
    return response.json()
})
  jsonPromise.then((data) => {
    const records = data.records
    for (let index = 0; index < records.length; index++) {
        const title = records[index].fields.Title
        console.log(records[index])
        const imageUrl = records[index].fields.Image[0].url
        const tag = records[index].fields.Tag

        // container element
        const containerElement = document.createElement('div')
        containerElement.classList.add('container')
        containerElement.classList.add(tag)
        // containerElement.classList.add('hide')
        // check if this works

        // image element
        const imageElement = document.createElement('img')
        imageElement.classList.add('image')
        imageElement.setAttribute('src', imageUrl)

        // title element
        const titleElement = document.createElement('p')
        titleElement.classList.add('title')
        titleElement.innerHTML = title

        const tagElement = document.createElement('p')
        tagElement.classList.add('tag')
        tagElement.innerHTML = tag

        tableContainerElement.appendChild(containerElement)

        containerElement.appendChild(imageElement)

        containerElement.appendChild(titleElement)

        containerElement.appendChild(tagElement)
    }
  })

    function displayretro() {
       const show = document.getElementsByClassName('.show')
       for (var i = 0; i < show.length; i++) {
           show[i].classList.remove('show')
           show[i].classList.add('hide')
       }
        const retro = document.getElementsByClassName('.retro')
       for (var i = 0; i < retro.length; i++) {
           retro[i].classList.add('show')
       }
    }
  
  
//   res.json())
//   // Use the JSON Data
//   .then((data) => {
//     const illustrations = data.records;
//     for (let index = 0; index < illustrations.length; index++) {
//       // Get Illustration
//       const illustration = illustrations[index];
//       //   Get Title
//       const title = illustration.fields.Title;
//       // Get Image Url
//       const imageUrl = illustration.fields.Image[0].url;
//       // Create Container Object
//       const containerElement = document.createElement("div");
//       containerElement.classList.add("container");
//       // Create Image Element
//       const imageElement = document.createElement("img");
//       imageElement.classList.add("image");
//       imageElement.setAttribute("src", imageUrl);
//       // Create Title Element
//       const titleElement = document.createElement("p");
//       titleElement.classList.add("title");
//       titleElement.innerHTML = title;
//       // Add Elements to DOM
//       bodyElement.appendChild(containerElement);
//       containerElement.appendChild(imageElement);
//       containerElement.appendChild(titleElement);
//     }
//   })
//   .catch((error) => {
//     console.log(error);
//   });