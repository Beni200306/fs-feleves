async function analyzeText()
{
    let inputText = document.querySelector('#inputText').value
    let response = await fetch("http://localhost:5087/analyzer/analyze",{
        method:"POST",
        headers:{
            "Content-Type": "application/json"
        },
        body:JSON.stringify({text: inputText})
    })


    
}