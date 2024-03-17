const universityDataLoad = () => {
    const url = `https://openapi.programming-hero.com/api/ai/tools`

    fetch(url)
        .then(res => res.json())
        .then(status => displayMealData(status.data.tools))

}
const displayMealData = tools => {

    //  console.log(meals);

    // step 1.  container element
    const universityContainer = document.getElementById('university-container');
    universityContainer.innerHTML = '';
    tools.forEach(tool => {
        console.log(tool);
        // step 2. create child fro each element
        const universityDiv = document.createElement('div');
        universityDiv.classList.add('col');
        universityDiv.innerHTML = `
        <div class="card h-100">
                    <img src="${tool.image}" class="card-img-top w-75 mx-auto m-4" alt="...">
                    <div class="card-body">
                    <h2>Features</h2>
                   <p>  ${tool.features} </p>
                   
                     <hr> 
                        <h5 class="card-title"> ${tool.name}</h5>
                        
                       
                        <p class="card-text mx-auto"> <i class="fa-solid fa-calendar-days"></i> ${tool.published_in}  <i class="fa-solid fa-arrow-right"></i></p>
                        
                    </div>
                    <button onclick="loadUniDetails(${tool.tool_name})" type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#universityModal">
                    Details
                   </button>

                   
        </div>
        
        `
        universityContainer.appendChild(universityDiv);

    })
}
const loadUniDetails = tool_name =>{
   console.log(tool_name);
    const url = `https://openapi.programming-hero.com/api/ai/tool/01`
    console.log(url);
    fetch(url)
    .then(res => res.json())
    .then (data =>  displayUniDetails(data.tool_name))
}
const displayUniDetails = tool_name => {
    document.getElementById('universityModalLabel').innerText = tool_name;
}
universityDataLoad();