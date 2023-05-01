function food() {
    search = searchFood.value
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`).then(data => data.json()).then(data => displayData(data))

}

function displayData(cdata) {

    fname = cdata.meals[0].strMeal
    image = cdata.meals[0].strMealThumb
    category = cdata.meals[0].strCategory
    instructions = cdata.meals[0].strInstructions
    area = cdata.meals[0].strArea
    ing1=cdata.meals[0].strIngredient1
    ing2=cdata.meals[0].strIngredient2
    ing3=cdata.meals[0].strIngredient3
    ing4=cdata.meals[0].strIngredient4
    ing5=cdata.meals[0].strIngredient5
    ing6=cdata.meals[0].strIngredient6
    ing7=cdata.meals[0].strIngredient7
    ing8=cdata.meals[0].strIngredient8
    ing9=cdata.meals[0].strIngredient9
    ing10=cdata.meals[0].strIngredient10
    ing11=cdata.meals[0].strIngredient11
    ing12=cdata.meals[0].strIngredient12
    ing13=cdata.meals[0].strIngredient13
    ing14=cdata.meals[0].strIngredient14
    ing15=cdata.meals[0].strIngredient15
    ing16=cdata.meals[0].strIngredient16
    qt1=cdata.meals[0].strMeasure1
    qt2=cdata.meals[0].strMeasure2
    qt3=cdata.meals[0].strMeasure3
    qt4=cdata.meals[0].strMeasure4
    qt5=cdata.meals[0].strMeasure5
    qt6=cdata.meals[0].strMeasure6
    qt7=cdata.meals[0].strMeasure7
    qt8=cdata.meals[0].strMeasure8
    qt9=cdata.meals[0].strMeasure9
    qt10=cdata.meals[0].strMeasure10
    qt11=cdata.meals[0].strMeasure11
    qt12=cdata.meals[0].strMeasure12
    qt13=cdata.meals[0].strMeasure13
    qt14=cdata.meals[0].strMeasure14
    qt15=cdata.meals[0].strMeasure15
    qt16=cdata.meals[0].strMeasure16
    
    




    image1.innerHTML = `
        
        <img src="${image}" alt=""   style=" height: 350px; width: 85%;box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);border-radius: 10px; " class=" mt-5 text-center">`


    Ldiv.innerHTML = `
                     <h2 class="text-center mx-auto mt-3 w-75"  style="background-color: rgb(215, 215, 64); box-shadow: 10px 10px 5px grey;font-family: 'Kanit', sans-serif;">${fname}</h2>
                     

                     <h4 class="mt-2">Category: ${category}</h4>
                     <h4 class="mt-2 mb-2">Orgin:  ${area} recipie</h4>
                     
                     

                           `

Rdiv.innerHTML=`
<h3 class="mt-4"> Incredients</H3>
<div class="col-lg-5 col-md-11 col-sm-11   mt-4  " id="ingfst">
<h6> ${ qt1} ${ing1}</h6>
<h6> ${ qt2} ${ing2}</h6>
<h6> ${ qt3} ${ing3}</h6>
<h6> ${ qt4} ${ing4}</h6>
<h6> ${ qt5} ${ing5}</h6>
<h6> ${ qt6} ${ing6}</h6>
<h6> ${ qt7} ${ing7}</h6>
<h6> ${qt8} ${ing8}</h6>

</div>
            <div class="col-lg-5 col-md-11 col-sm-11 mt-4  " id="ingscnd">
            

<h6>${ qt9} ${ing9}</h6>
<h6>${ qt10} ${ing10}</h6>
<h6>${ qt11} ${ing11}</h6>
<h6>${ qt12} ${ing12}</h6>
<h6>${ qt13} ${ing13}</h6>
<h6>${ qt14} ${ing14}</h6>
<h6> ${ qt15} ${ing15}</h6>
<h6> ${ qt16} ${ing16}</h6>
            </div>
            <h3 class="mt-4">instructions</h3>
<div class="  mx-auto mt-4" style="width:90%">
<h6>${instructions}</h6>
</div>
`




}