using Microsoft.AspNetCore.Mvc;
using TextAnalyzer.Models;

namespace TextAnalyzer.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class AnalyzerController:ControllerBase
    {
        [HttpPost]
        public ActionResult<TextResult> Analyze([FromBody] TextInput input)
        {
            TextResult re = new TextResult();
            re.WordCount = input.Text.Split(' ').Count();
            re.CharacterCount = input.Text.Count();
            re.AverageWordLength = re.CharacterCount / re.WordCount;
            re.AverageSentenceLength = re.WordCount / input.Text.Split('.').Count();

            return Ok(re);
        }
    }
}
