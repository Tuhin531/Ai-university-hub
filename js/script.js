const universityDataLoad = () => {
    const url =`https://openapi.programming-hero.com/api/ai/tools`
    
    fetch(url)
        .then(res => res.json())
        .then(status => displayMealData(status.data.tools))
       
}
const displayMealData = tools =>{

    //  console.log(meals);

    // step 1.  container element
    const universityContainer =document.getElementById('university-container');
    universityContainer.innerHTML ='';
    tools.forEach(tool => {
        console.log(tool);
        // step 2. create child fro each element
        const universityDiv = document.createElement('div');
        universityDiv.classList.add('col');
        universityDiv.innerHTML = `
        <div class="card h-100">
                    <img src="" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">title</h5>
                        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to
                            additional content. This content is a little bit longer.</p>
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