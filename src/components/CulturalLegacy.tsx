import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const CulturalLegacy = () => {
  const culturalElements = [
    {
      title: "Bengaluru Karaga",
      description: "Ancient festival celebrating the divine feminine, connecting the city to its Dravidian roots through centuries of tradition.",
      icon: "🎭",
      details: [
        "Celebrated by Tigala community",
        "Dates back over 800 years",
        "UNESCO recognized tradition"
      ]
    },
    {
      title: "Agraharas Architecture",
      description: "Traditional Brahmin settlements with unique courtyard houses that influenced Bengaluru's residential patterns.",
      icon: "🏘️",
      details: [
        "Courtyard-centered design",
        "Community water systems",
        "Integrated temple complexes"
      ]
    },
    {
      title: "Kannada Literary Heritage",
      description: "From ancient inscriptions to modern literature, Bengaluru has been a center of Kannada language evolution.",
      icon: "📜",
      details: [
        "Begur inscription legacy",
        "Medieval poetry traditions",
        "Modern publishing hub"
      ]
    },
    {
      title: "Culinary Synthesis",
      description: "Unique blend of South Indian, Mysore, and colonial influences creating distinctive Bengaluru cuisine.",
      icon: "🍛",
      details: [
        "Rava Idli innovation",
        "Filter coffee culture",
        "MTR legacy restaurants"
      ]
    }
  ];

  return (
    <section id="legacy" className="py-20 bg-gradient-to-b from-heritage-olive/5 to-heritage-navy/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-heritage-maroon mb-6">
            Cultural Legacy
          </h2>
          <p className="text-xl text-heritage-olive max-w-3xl mx-auto">
            Discover the living traditions that continue to shape Bengaluru's cultural identity
          </p>
        </div>

        {/* Cultural Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {culturalElements.map((element, index) => (
            <Card
              key={index}
              className="border-heritage-golden/30 bg-white/95 backdrop-blur-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 animate-fade-in vintage-glow"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <div className="text-4xl">{element.icon}</div>
                  <CardTitle className="font-playfair text-xl text-heritage-navy">
                    {element.title}
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-heritage-navy/80 leading-relaxed mb-4">
                  {element.description}
                </p>
                <ul className="space-y-2">
                  {element.details.map((detail, idx) => (
                    <li key={idx} className="flex items-start text-sm text-heritage-olive">
                      <span className="text-heritage-golden mr-2 mt-1">•</span>
                      {detail}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bengaluru Karaga Festival */}
        <Card className="border-heritage-maroon/30 bg-gradient-to-br from-heritage-golden/20 to-heritage-cream/40 shadow-xl overflow-hidden vintage-glow">
          <CardContent className="p-6 md:p-10">
            <div className="text-center">
              <h3 className="font-playfair text-3xl font-bold text-heritage-maroon mb-6">
                Bengaluru Karaga Festival
              </h3>

              {/* Festival Image with Effects */}
              <div className="relative w-full max-w-5xl mx-auto mb-6 overflow-hidden rounded-lg group shadow-md aspect-video">
                <img
                  src="/bengalurukaraga.jpg"
                  alt="Bengaluru Karaga Festival"
                  className="w-full h-full object-cover transition-transform duration-700 ease-in-out transform group-hover:scale-105 group-hover:rotate-1"
                />
                <div className="absolute inset-0 bg-heritage-maroon/10 group-hover:bg-heritage-maroon/20 transition-all duration-700"></div>
              </div>

              {/* Festival Description */}
              <p className="text-lg text-heritage-navy/80 leading-relaxed max-w-4xl mx-auto">
                The Bengaluru Karaga is one of the oldest and most significant festivals of the city,
                celebrated predominantly by the Tigala community. For over 800 years, this ritual
                transforms the old city's streets into a spiritual arena where mythology and devotion
                come alive. The bearer of the Karaga dons a sacred pot symbolizing feminine energy,
                walking barefoot for hours in a trance-led procession — an awe-inspiring blend of
                dance, belief, and identity.
              </p>
              <p className="mt-4 text-sm text-heritage-olive max-w-3xl mx-auto">
                Recognized as an intangible heritage by UNESCO, Karaga is more than a festival —
                it's a living embodiment of Bengaluru’s cultural soul.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default CulturalLegacy;
