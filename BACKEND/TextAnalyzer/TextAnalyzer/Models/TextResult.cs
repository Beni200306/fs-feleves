namespace TextAnalyzer.Models
{
    public class TextResult
    {
        public TextResult()
        {
            MostFrequentWords = new List<WordFrequency>();
        }
        public int WordCount { get; set; }
        public int CharacterCount { get; set; }
        public List<WordFrequency> MostFrequentWords { get; set; }
        public double AverageSentenceLength { get; set; }
        public double AverageWordLength { get; set; }
        public double ReadabilityIndex { get; set; }
    }
}
