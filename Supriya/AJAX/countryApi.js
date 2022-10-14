// selector
let co=document.querySelector('#container')

// html render







//getcountries
//
function getNeighborCountry(countryCode)
{
    fetch(`https://restcountries.com/v3.1/name/${countryCode}`)
    .then(function(response){
        return response.json()
    }).then(function(rs){
        let c=rs[0]
        renderCountry(c)
    })
}