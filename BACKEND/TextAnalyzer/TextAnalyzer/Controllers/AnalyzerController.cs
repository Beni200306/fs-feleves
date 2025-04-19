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

            //eltávolítom a pontokat a mondatok végéről, hogy megkapjam a szavakat
            string withoutDots="";
            foreach (var item in input.ToLower())
            {
                if (item!='.' && item!=',' && item!=';')
                {
                    withoutDots += item;
                }
            }
            var words = withoutDots.Split(' ').Distinct();
            
            



            return re;
        }
    }
}
