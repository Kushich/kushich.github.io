const search = document.getElementById('search')
const matchList = document.getElementById('match-list')

// Search countries.json and filter it
const searchCountries = async searchText => {
    const res = await fetch('countries.json')
    const countries = await res.json() 
    
    // Get matches te current text input
    let matches = countries.filter(country => {
        const regex = new RegExp(`^${searchText}`, 'gi')
        return country.country.match(regex)
    })
    if (searchText.length === 0) {
        matches = []
        matchList.innerHTML = ''
    }

    outputHtml(matches)
}
const outputHtml = matches => {
    if(matches.length > 0) {
        const html = matches.map(match => `
            <div class="card card-body mb-1">
                <h4>${match.country} <span class="text-primary">${match.city}</span></h4>
            </div>
        `).join('')
        matchList.innerHTML = html
    }
}

search.addEventListener('input', () => searchCountries(search.value))