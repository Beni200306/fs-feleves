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
    
}
function displayStatistics(res)
{
    let table= document.createElement('table')
    let resultsDiv=document.querySelector('#results')
    resultsDiv.innerHTML=""
    let tr=document.createElement('tr')
    tr.innerHTML="<th>Szavak száma</th><th>Karakterek száma</th><th>Átlagos mondat hossz</th><th>Átlagos szó hossz</th>"
    table.appendChild(tr)
    tr=document.createElement('tr')
    tr.innerHTML=`<td>${res.wordCount}</td><td>${res.characterCount}</td><td>${res.averageSentenceLength}</td><td>${res.averageWordLength}</td>`
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
    //<td>${res.mostFrequentWords}</td>
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