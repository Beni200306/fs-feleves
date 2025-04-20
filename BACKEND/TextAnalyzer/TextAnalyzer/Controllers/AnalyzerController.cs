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

            //eltávolítom a pont, vessző, pontosvesszőket a mondatok végéről, hogy megkapjam a szavakat
            string withoutDots="";
            foreach (var item in input.ToLower())
            {
                if (item!='.' && item!=',' && item!=';')
                {
                    withoutDots += item;
                }
            }
            string[] inputWordSplit = withoutDots.Split(' ');
            var words = inputWordSplit.Distinct();
            foreach (var item in words)
            {
                re.MostFrequentWords.Add(new WordFrequency() { Word=item, Amount=inputWordSplit.Count(x => x == item) });
            }
            re.MostFrequentWords = re.MostFrequentWords.Where(x=>x.Amount>=3).ToList();
            //fix it
            ;



            return re;
        }
    }
}
