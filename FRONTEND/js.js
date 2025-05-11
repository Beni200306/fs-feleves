async function analyzeText()
{
    
    let inputText = document.querySelector('#inputText').value
    const response = await fetch("http://localhost:5087/analyzer", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(inputText)
    });
    let res=await response.json()
    console.log(res)
    displayStatistics(res)
    displayDiagram(res.mostFrequentWords)
    
    
}
function displayStatistics(res)
{
    let table= document.createElement('table')
    let resultsDiv=document.querySelector('#results')
    resultsDiv.innerHTML=""
    let tr=document.createElement('tr')
    tr.innerHTML="<th>Szavak száma</th><th>Karakterek száma</th><th>Átlagos mondat hossz</th><th>Átlagos szó hossz</th><th>Olvashatósági index</th>"
    table.appendChild(tr)
    tr=document.createElement('tr')
    tr.innerHTML=`<td>${res.wordCount}</td><td>${res.characterCount}</td><td>${res.averageSentenceLength}</td><td>${res.averageWordLength}</td><td>${res.readabilityIndex}</td>`
    table.appendChild(tr)
    resultsDiv.appendChild(table)


    
    table= document.createElement('table')
    let wordFreq=document.querySelector('#wordFrequencyTable')
    wordFreq.innerHTML=""
    let trWord=document.createElement('tr')
    let trFreq=document.createElement('tr')
    let thWord=document.createElement('th')
    let thFreq=document.createElement('th')
    thWord.innerHTML="Szó"
    thFreq.innerHTML="Előfordulás"
    trWord.appendChild(thWord)
    trFreq.appendChild(thFreq)
    
    let tdWord=document.createElement('td')
    let tdFreq=document.createElement('td')

    res.mostFrequentWords.forEach(element =>
    {
        tdWord=document.createElement('td')
        tdWord.innerHTML=element.word
        tdFreq=document.createElement('td')
        tdFreq.innerHTML=element.amount

        trWord.appendChild(tdWord)
        trFreq.appendChild(tdFreq)
    });

    table.append(trWord)
    table.append(trFreq)
    wordFreq.appendChild(table)


}

function displayDiagram(data) {
    const targetdiv=document.getElementById('diagramTable')
    targetdiv.innerHTML=""

    console.log(data)

    const table=document.createElement('table')
    table.style.width='30%'
    const max = Math.max(...data.map(d => d.amount)); // alapbol a map egy listat ad vissza [10,20,30] a ... csak 10,20,30 külön elemekre szedi

    data.forEach(item => {
        const tr = document.createElement('tr')

        const tdName = document.createElement('td')
        tdName.textContent = item.word;

        const tdBar = document.createElement('td')
        const bar = document.createElement('div')
        bar.className = 'bar'
        bar.style.width = `${(item.amount / max) * 100}%`
        bar.textContent = item.amount
        tdBar.appendChild(bar)

        tr.appendChild(tdName)
        tr.appendChild(tdBar)

        table.appendChild(tr)
    });
    targetdiv.appendChild(table)
}