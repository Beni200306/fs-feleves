async function analyzeText()
{
    
    let inputText = document.querySelector('#inputText').value
    const response = await fetch("http://localhost:5087/analyzer", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ text: inputText })
    });
    displayStatistics(await response.json())
}
function displayStatistics(res)
{
    let table= document.createElement('table')
    let resultsDiv=document.querySelector('#results')
    let tr=document.createElement('tr')
    tr.innerHTML="<th>Szavak száma</th><th>Karakterek száma</th><th>Átlagos mondat hossz</th><th>Átlagos szó hossz</th>"
    table.appendChild(tr)
    tr=document.createElement('tr')
    resultsDiv.appendChild(table)

}