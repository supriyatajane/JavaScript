// selectors 

let co = document.querySelector('#container')




// html render





function getLanguages(obj){
    return Object.values(obj).join(' , ')
}




function renderCountry(cou){
        // console.log(country.capital[0])
        // console.log(country.languages)
        // console.log(country.currencies)
        // console.log(country.continents[0])
        // console.log(country.flags)

    let html = `
        <div class = 'country'>
            <h1>${cou.name.common}</h1>
            <p>${getLanguages(cou.languages)}</p> 
            <p>${cou.continents[0]}</p>
            <img src = "${cou.flags.png}"/>
        </div>    
    `
    co.insertAdjacentHTML('beforeEnd',html)

}

// curriences
// getCountries 
function getNeighborCountry(countryCode){
    fetch(`https://restcountries.com/v3.1/name/${countryCode}`)

    .then(function(response){
       return response.json()
    }).then(function(rs){
        let c = rs[0]
        //console.log(country.name.common)
        renderCountry(c)
  
    })
}

function getCountry(countryName){
    fetch(`https://restcountries.com/v3.1/name/${countryName}`)
    .then(function(response){
       return response.json()
    }).then(function(rs){
        country =rs[rs.length-1]
        renderCountry(country)
        return country 
    }).then(function(country){
        console.log(country)
        let boder = country.borders[country.borders.length-1]
        getNeighborCountry(boder)
    })

}





getCountry('India')






// getNeighbor