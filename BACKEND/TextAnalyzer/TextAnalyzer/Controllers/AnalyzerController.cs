using Microsoft.AspNetCore.Mvc;
using TextAnalyzer.Models;

namespace TextAnalyzer.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class AnalyzerController:ControllerBase
    {
        [HttpPost()]
        public TextResult Analyze([FromBody] string input)
        {
            TextResult re = new TextResult();
            re.WordCount = input.Split(' ').Count();
            re.CharacterCount = input.Count();
            re.AverageWordLength = re.CharacterCount / re.WordCount;
            re.AverageSentenceLength = re.WordCount / input.Split('.').Count();

            return re;
        }
    }
}
