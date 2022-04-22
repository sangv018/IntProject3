// VARIABLES

// API Key for Airtable
const airtableApiKey = "keyhsUBrXSnLKhk4u"

//Data is Location
const airtableDatabaseUrl = "https://api.airtable.com/v0/appVUi5fcsMbiAXGQ/laptops"

//API Key Authentication
const authenticatedUrl = airtableDatabaseUrl + "?api_key=" + airtableApiKey

// console.log(authenticatedUrl)

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
        // console.log(records[index])
        const imageUrl = records[index].fields.Image[0].url
        var tag = records[index].fields.Tag
        tag = tag.replace(/ /g, '');
        // console.log(tag)
        const text = records[index].fields.text
        

        // container element
        const containerElement = document.createElement('div')
        containerElement.classList.add('container')
        containerElement.classList.add(`${tag}`)
        containerElement.classList.add('hide')
        // check if this works

        // image element
        const imageElement = document.createElement('img')
        imageElement.classList.add('image')
        imageElement.setAttribute('src', imageUrl)
        // imageElement.style.width = "240px";
        // imageElement.style.border = "thick solid white"
        // imageElement.style.backgroundColor = "#333333";
        // imageElement.style.boxShadow = "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);"

        // title element
        const titleElement = document.createElement('p')
        titleElement.classList.add('title')
        titleElement.innerHTML = title
        titleElement.style.fontSize = "30px";
        titleElement.style.textAlign = "center"; 
        titleElement.style.color = "white";
        titleElement.style.fontFamily = "monospace";
        titleElement.style.backgroundColor = "#333333";
        titleElement.style.border = "thick solid white"

        const tagElement = document.createElement('p')
        tagElement.classList.add('tag')
        tagElement.innerHTML = tag
        tagElement.style.fontSize = "30px";
        tagElement.style.textAlign = "center"; 
        tagElement.style.color = "white";
        tagElement.style.fontFamily = "monospace";
        tagElement.style.backgroundColor = "#333333";
        tagElement.style.border = "thick solid white"

        const textElement = document.createElement('p')
        textElement.classList.add('showText')
        textElement.innerHTML = text


        tableContainerElement.appendChild(containerElement)

        containerElement.appendChild(imageElement)

        containerElement.appendChild(titleElement)

        containerElement.appendChild(tagElement)

        containerElement.appendChild(textElement)
    }
  })

    function displayretro() {
       var container = document.getElementsByClassName('container')
       for (var i = 0; i < container.length; i++) {
           container[i].classList.remove('show')
           container[i].classList.add('hide')
       }
        var retro = document.getElementsByClassName('retro')
        console.log(retro)
       for (var i = 0; i < retro.length; i++) {
          retro[i].classList.remove('hide')
           retro[i].classList.add('show')
       }
    }

    function displaypositive() {
      var container = document.getElementsByClassName('container')
       
      for (var i = 0; i < container.length; i++) {
          container[i].classList.remove('show')
          container[i].classList.add('hide')
      }
       var positive = document.getElementsByClassName('positive')
       console.log(positive)
      for (var i = 0; i < positive.length; i++) {
          positive[i].classList.remove('hide')
          positive[i].classList.add('show')
      }
   }

   function displayemo() {
    var container = document.getElementsByClassName('container')
    for (var i = 0; i < container.length; i++) {
        container[i].classList.remove('show')
        container[i].classList.add('hide')
    }
     var emo = document.getElementsByClassName('emo')
     console.log(emo)
    for (var i = 0; i < emo.length; i++) {
       emo[i].classList.remove('hide')
        emo[i].classList.add('show')
     
    }
 }

 function displayorganised() {
   var container = document.getElementsByClassName('container') 
   for (var i = 0; i < container.length; i++) {
       container[i].classList.remove('show')
       container[i].classList.add('hide')
   }
    var organised = document.getElementsByClassName('organised')
    console.log(organised)
   for (var i = 0; i < organised.length; i++) {
    organised[i].classList.remove('hide')
    organised[i].classList.add('show')
   }
}

function displaychaos() {
  var container = document.getElementsByClassName('chaos')
  for (var i = 0; i < container.length; i++) {
      container[i].classList.remove('show')
      container[i].classList.add('hide')
  }
   var chaos = document.getElementsByClassName('chaos')
   console.log(chaos)
  for (var i = 0; i < chaos.length; i++) {
    chaos[i].classList.remove('hide')
    chaos[i].classList.add('show')
  }
}

function displaycolourful() {
  var container = document.getElementsByClassName('container')
  for (var i = 0; i < container.length; i++) {
      container[i].classList.remove('show')
      container[i].classList.add('hide')
  }
   var colourful = document.getElementsByClassName('colourful')
   console.log(colourful)
  for (var i = 0; i < colourful.length; i++) {
    colourful[i].classList.remove('hide')
    colourful[i].classList.add('show')
   
  }
}

function displaythematic() {
 var container = document.getElementsByClassName('container')
 for (var i = 0; i < container.length; i++) {
     container[i].classList.remove('show')
     container[i].classList.add('hide')
 }
  var thematic = document.getElementsByClassName('thematic')
  console.log(thematic)
 for (var i = 0; i < thematic.length; i++) {
  thematic[i].classList.remove('hide')
  thematic[i].classList.add('show')
 }
}

function displaysimple() {
var container = document.getElementsByClassName('container')
for (var i = 0; i < container.length; i++) {
   container[i].classList.remove('show')
   container[i].classList.add('hide')
}
var simple = document.getElementsByClassName('simple')
console.log(simple)
for (var i = 0; i < simple.length; i++) {
  simple[i].classList.remove('hide')
  simple[i].classList.add('show')

}
}

function displayadventurous() {
var container = document.getElementsByClassName('container')
for (var i = 0; i < container.length; i++) {
  container[i].classList.remove('show')
  container[i].classList.add('hide')
}
var adventurous = document.getElementsByClassName('adventurous')
console.log(adventurous)
for (var i = 0; i < adventurous.length; i++) {
  adventurous[i].classList.remove('hide')
  adventurous[i].classList.add('show')
}
}

function displayfun() {
var container = document.getElementsByClassName('container')
for (var i = 0; i < container.length; i++) {
 container[i].classList.remove('show')
 container[i].classList.add('hide')
}
var fun = document.getElementsByClassName('fun')
console.log(fun)
for (var i = 0; i < fun.length; i++) {
  fun[i].classList.remove('hide')
  fun[i].classList.add('show')
}
}

// function wheel2() {
//   var text =  document.getElementById('table');
//   console.log(text.style.top);
//   var increment = -400;
//   var basevalue = parseInt(text.style.top);
//   console.log("base = " + basevalue);
//   var newvalue = (increment + basevalue) + "px";
//   if(basevalue<=-8700)     
//       {newvalue = 0};
//   text.style.setProperty("top", newvalue);
//   text.style.transition = "top 1.5s ease";
// }