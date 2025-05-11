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

            //eltávolítom a pont, vessző, pontosvesszőket a mondatok végéről, hogy megkapjam a szavakat
            string withoutDots = "";
            foreach (var item in input.ToLower())
            {
                if (item != '.' && item != ',' && item != ';')
                {
                    withoutDots += item;
                }
            }

            re.WordCount = withoutDots.Split(' ').Count();
            re.CharacterCount = withoutDots.Count(x=>x!=' ');
            re.AverageWordLength = re.CharacterCount / re.WordCount;
            re.AverageSentenceLength = Math.Ceiling(Convert.ToDouble(re.WordCount) / input.Split('.').Count());
            re.ReadabilityIndex = 100 - (re.AverageSentenceLength * 2);
            

            //íras jelek nélük a szavak tömbbe splitelve
            string[] inputWordSplit = withoutDots.Split(' ');
            var words = inputWordSplit.Distinct();
            foreach (var item in words)
            {
                re.MostFrequentWords.Add(new WordFrequency() { Word=item, Amount=inputWordSplit.Count(x => x == item) });
            }
            re.MostFrequentWords = re.MostFrequentWords.OrderByDescending(x=>x.Amount).Take(5).ToList();

            return re;
        }
    }
}
