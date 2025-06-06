
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const References = () => {
  const references = [
    {
      id: 1,
      title: "Bangalore: A Historical and Cultural Study",
      author: "M.A. Nayeem",
      year: "1990",
      publisher: "Bright Publishers",
      type: "Book",
      description: "Comprehensive historical analysis of Bengaluru from ancient times to modern era."
    },
    {
      id: 2,
      title: "The Gazetteer of Mysore State",
      author: "Government of Mysore",
      year: "1962",
      publisher: "Government Press",
      type: "Government Document",
      description: "Official historical records and administrative details of Bengaluru region."
    },
    {
      id: 3,
      title: "Kempegowda and the Foundation of Bangalore",
      author: "Dr. S.K. Aruni",
      year: "2008",
      publisher: "Mythic Society",
      type: "Research Paper",
      description: "Detailed study of Kempegowda's urban planning and city foundation."
    },
    {
      id: 4,
      title: "Tipu Sultan's Bangalore: Administrative and Cultural Changes",
      author: "Prof. Irfan Habib",
      year: "1999",
      publisher: "Oxford University Press",
      type: "Academic Article",
      description: "Analysis of administrative reforms and cultural developments under Tipu Sultan."
    },
    {
      id: 5,
      title: "Archaeological Evidence of Ancient Bangalore",
      author: "Karnataka State Archaeology Department",
      year: "2015",
      publisher: "Government of Karnataka",
      type: "Archaeological Report",
      description: "Findings from excavations including Roman coins and Begur inscriptions."
    }
  ];

  const additionalSources = [
    "British Library Archives - Colonial Bangalore Records",
    "National Archives of India - Administrative Documents",
    "Mythic Society Bangalore - Historical Collections",
    "Karnataka State Archives - Regional Historical Documents",
    "Asiatic Society Mumbai - Ancient Inscription Studies"
  ];

  return (
    <section id="references" className="py-20 bg-heritage-cream">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-heritage-maroon mb-6">
            References & Sources
          </h2>
          <p className="text-xl text-heritage-olive max-w-3xl mx-auto">
            Our research is built upon scholarly works and primary sources that illuminate Bengaluru's rich history
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <div>
            <h3 className="font-playfair text-2xl font-semibold text-heritage-navy mb-6">
              Primary References
            </h3>
            <div className="space-y-4">
              {references.map((ref) => (
                <Card key={ref.id} className="border-heritage-golden/30 bg-white/90 vintage-glow">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex-1">
                        <h4 className="font-semibold text-heritage-navy mb-1">
                          {ref.title}
                        </h4>
                        <p className="text-heritage-olive text-sm">
                          {ref.author} ({ref.year})
                        </p>
                      </div>
                      <span className="bg-heritage-maroon/10 text-heritage-maroon px-2 py-1 rounded text-xs font-medium">
                        {ref.type}
                      </span>
                    </div>
                    <p className="text-heritage-navy/70 text-sm mb-2">
                      {ref.description}
                    </p>
                    <p className="text-heritage-navy/60 text-xs">
                      Publisher: {ref.publisher}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-playfair text-2xl font-semibold text-heritage-navy mb-6">
              Additional Sources
            </h3>
            <Card className="border-heritage-golden/30 bg-white/90 mb-6 vintage-glow">
              <CardHeader>
                <CardTitle className="font-playfair text-xl text-heritage-navy">
                  Archival Collections
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {additionalSources.map((source, index) => (
                    <li key={index} className="flex items-start text-heritage-navy/80">
                      <span className="text-heritage-golden mr-3 mt-1">•</span>
                      <span className="text-sm">{source}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="border-heritage-maroon/30 bg-gradient-to-br from-heritage-maroon/5 to-heritage-golden/5 vintage-glow">
              <CardHeader>
                <CardTitle className="font-playfair text-xl text-heritage-maroon">
                  Research Methodology
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-heritage-navy/80 text-sm leading-relaxed mb-4">
                  Our research methodology combines primary source analysis with archaeological evidence 
                  and oral history traditions. We have cross-referenced multiple historical accounts to 
                  ensure accuracy while highlighting lesser-known narratives.
                </p>
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div className="bg-heritage-cream p-3 rounded">
                    <div className="text-2xl text-heritage-maroon mb-1">📚</div>
                    <p className="text-xs font-medium text-heritage-navy">Primary Sources</p>
                  </div>
                  <div className="bg-heritage-cream p-3 rounded">
                    <div className="text-2xl text-heritage-olive mb-1">🏛️</div>
                    <p className="text-xs font-medium text-heritage-navy">Archaeological Evidence</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="text-center">
          <Card className="border-heritage-golden/30 bg-heritage-golden/10 inline-block vintage-glow">
            <CardContent className="p-6">
              <p className="text-heritage-navy font-medium mb-2">
                📧 For academic inquiries or source verification:
              </p>
              <p className="text-heritage-navy/70 text-sm">
                Contact our research team at research@bengalurustory.edu
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default References;
