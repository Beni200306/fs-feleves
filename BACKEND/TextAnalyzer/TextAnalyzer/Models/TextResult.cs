namespace TextAnalyzer.Models
{
    public class TextResult
    {
        public TextResult()
        {
            
        }
        public int WordCount { get; set; }
        public int CharacterCount { get; set; }
        public Dictionary<string, int> MostFrequentWords { get; set; }
        public double AverageSentenceLength { get; set; }
        public double AverageWordLength { get; set; }
    }
}
