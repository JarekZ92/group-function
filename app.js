
(function () {
    const cities = [
        
            {name: 'New York', size: '1213km'},
            {name: 'Warsaw', size: '517km'},
            {name: 'Szanghaj', size: '5341km'}
    ]

    const groupElements = _.groupBy(cities, function(city){
        return city.size
    })

    console.log(groupElements)
}())
