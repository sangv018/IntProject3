
// db = database
//container to store infromation abput database 
// you get your api key from airtable//acount 


const db = {   
    id: 'appVUi5fcsMbiAXGQ',
    table: 'laptops',
    apiKey: 'keyWImqyJCvS8PKBp'
};




const airtableUrl = `https://api.airtable.com/v0/${db.id}/${db.table}?maxRecords=100&view=Grid%20view&api_key=${db.apiKey}`
// aurtableulr is a container that brings in info frm the table 

const fetchlaptops = async () => {
    const response = await fetch(airtableUrl).then(data => data.json());
    console.log(response);
// fetchMovies is a name created by us to bring in all the airtable records 
//array  - collection of objects

const myObject = {
    title:'name',
    weight: 'vnnnnnnt',
}

// myObject is a template 
//curly object = object 
//square brackets is an array 



const myArray = ['name', 'net-weight,'];

console.log (myObject.title)
console.log (myArray[1])
//array start from 0 
const container = document.getElementById('table');

//link between html and javascript 


response.records.forEach((name) => {
    //response contains table, response ha sall 100 records 
    //forEach go one by one and pick up each record
    //in table fpr all records pick one by one 
    console.log(name);
    const coverContainer = document.createElement('article');
    if (name.fields.Image) {
        console.log(name.fields.Image[0].url);


        const posterImg = document.createElement ('img');
        // posterImg.src =name.fields.Attachments[0].url;
        posterImg.setAttribute( 'src', name.fields.Image[0].url)
        coverContainer.append(posterImg);
    }
   
    if (name.fields.tag){
        const tagEl = document.createElement ('p');
     tagEl.innerHTML = name.fields.tag;
     tagEl.classList.add('tag')
    coverContainer.append(tagEl);

    }

      if (name.fields.cover.length > 0) {
        const cover = document.createElement('p');
        coverEl.innerHTML = name.fields.title;
        coverEl.classList.add ('tilte');
        coverContainer.append(coverEl);
      }

      container.append(coverContainer);
      //p and img are html tags 
      //picking up spice containr and put the whole thing in project3 conatiner
});


};

fetchlaptops();



    // const myObject = {
    // title: 'movie',
    // release_date: '4745454',

    // }
    // const myArray =  [ 'movie', 4743343, 'rhfv'];
//array starts from 0
    // console.log (myObject.release_date)
    // console.log (myArray [0])



    //array is different in the sesne its just a list of objects 


//you can use this link for all airtables, just change id, name and api key 

// data being stored in response constant 