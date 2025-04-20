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
    tr.innerHTML="<th>Szavak száma</th><th>Karakterek száma</th><th>Átlagos mondat hossz</th><th>Átlagos szó hossz</th><th>Leggyakrabbi szó</th>"
    table.appendChild(tr)
    tr=document.createElement('tr')
    tr.innerHTML=`<td>${res.wordCount}</td><td>${res.characterCount}</td><td>${res.averageSentenceLength}</td><td>${res.averageWordLength}</td><td>${res.mostFrequentWords}</td>`
    table.appendChild(tr)
    resultsDiv.appendChild(table)

}