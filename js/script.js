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
                    <img src="${tool.image}" class="card-img-top" alt="...">
                    <div class="card-body">
                    <h2>Features</h2>
                    <ol>
                    <li>
                  ${tool.features}
                    </li>     
                </ol>
                    
                        <h5 class="card-title"> ${tool.name}</h5>
                        <p class="card-text">${tool.description}</p>
                    </div>
                    <button " type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#mealModal">
                    Details
                    </button>

        </div>
        
        `
        universityContainer.appendChild(universityDiv);

    })
}
universityDataLoad();