import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const MapsArchitecture = () => {
  return (
    <section id="maps" className="py-20 bg-heritage-cream">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-heritage-maroon mb-6">
            Maps & Architecture
          </h2>
          <p className="text-xl text-heritage-olive max-w-3xl mx-auto">
            Explore the evolution of Bengaluru's urban landscape and architectural heritage
          </p>
        </div>

        <Tabs defaultValue="maps" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-8 bg-heritage-navy/10">
            <TabsTrigger
              value="maps"
              className="data-[state=active]:bg-heritage-maroon data-[state=active]:text-heritage-navy"
            >
              Historical Maps
            </TabsTrigger>
            <TabsTrigger
              value="architecture"
              className="data-[state=active]:bg-heritage-maroon data-[state=active]:text-heritage-navy"
            >
              Architecture Gallery
            </TabsTrigger>
          </TabsList>

          {/* Historical Maps Section */}
          <TabsContent value="maps" className="space-y-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Pete Layout */}
              <Card className="border-heritage-golden/30 bg-white/90 vintage-glow">
                <CardHeader>
                  <CardTitle className="font-playfair text-2xl text-heritage-navy">
                    Old Bengaluru Pete Layout
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="overflow-hidden rounded-lg mb-4">
                    <img
                      src="/Pete-layout.png"
                      alt="Old Pete Layout"
                      className="w-full h-auto object-cover rounded-lg transform transition-transform duration-500 hover:scale-105 hover:-rotate-1"
                    />
                  </div>
                  <ul className="space-y-2 text-sm text-heritage-navy/80">
                    <li>• Chickpete - First commercial area</li>
                    <li>• Doddapete - Main market hub</li>
                    <li>• Avenue Road - Central spine</li>
                    <li>• KR Market - Legacy continues</li>
                  </ul>
                </CardContent>
              </Card>

              {/* British Cantonment */}
              <Card className="border-heritage-golden/30 bg-white/90 vintage-glow">
                <CardHeader>
                  <CardTitle className="font-playfair text-2xl text-heritage-navy">
                    British Cantonment Area
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="overflow-hidden rounded-lg mb-4">
                    <img
                      src="/cantonment.png"
                      alt="British Cantonment"
                      className="w-full h-auto object-cover rounded-lg transform transition-transform duration-500 hover:scale-105 hover:rotate-1"
                    />
                  </div>
                  <ul className="space-y-2 text-sm text-heritage-navy/80">
                    <li>• Brigade Road - Military quarters</li>
                    <li>• MG Road - Administrative center</li>
                    <li>• Cubbon Park - Green lung</li>
                    <li>• High Court - Colonial architecture</li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* Water Bodies & Temples */}
            <Card className="border-heritage-golden/30 bg-white/90 vintage-glow">
              <CardHeader>
                <CardTitle className="font-playfair text-2xl text-heritage-navy">
                  Water Bodies & Temples
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {[
                    {
                      title: 'Tank System',
                      description: 'Ancient water management',
                      image: 'tank-system.png',
                    },
                    {
                      title: 'Temple Network',
                      description: 'Spiritual landmarks',
                      image: 'temple-network.png',
                    },
                    {
                      title: 'Watchtowers',
                      description: "Kempegowda's vision",
                      image: 'watchtower.png',
                    },
                  ].map((item, index) => (
                    <div key={index} className="text-center">
                      <div className="w-full h-48 overflow-hidden rounded-lg mb-3">
                        <img
                          src={`/${item.image}`}
                          alt={item.title}
                          className="w-full h-full object-cover transform transition-transform duration-500 hover:scale-105 hover:rotate-1"
                        />
                      </div>
                      <h4 className="font-semibold text-heritage-navy">{item.title}</h4>
                      <p className="text-sm text-heritage-navy/70">{item.description}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Architecture Gallery Section */}
          <TabsContent value="architecture" className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: 'Vidhana Soudha',
                  era: 'Post-Independence',
                  style: 'Neo-Dravidian',
                  image: 'vidhana-soudha.png',
                },
                {
                  title: 'Bangalore Palace',
                  era: '19th Century',
                  style: 'Tudor Revival',
                  image: 'bangalore-palace.png',
                },
                {
                  title: "Tipu's Summer Palace",
                  era: '18th Century',
                  style: 'Indo-Islamic',
                  image: 'tipu-palace.png',
                },
                {
                  title: 'Lal Bagh Glasshouse',
                  era: 'British Era',
                  style: 'Victorian',
                  image: 'lalbagh-glasshouse.png',
                },
                {
                  title: 'Bull Temple',
                  era: '16th Century',
                  style: 'Dravidian',
                  image: 'bull-temple.png',
                },
                {
                  title: 'Cubbon Park Buildings',
                  era: 'Colonial',
                  style: 'Indo-Saracenic',
                  image: 'cubbon-park.png',
                },
              ].map((building, index) => (
                <Card
                  key={index}
                  className="border-heritage-golden/30 bg-white/90 hover:shadow-lg transition-shadow vintage-glow"
                >
                  <div className="overflow-hidden rounded-t-lg">
                    <img
                      src={`/${building.image}`}
                      alt={building.title}
                      className="w-full h-48 object-cover transform transition-transform duration-500 hover:scale-105 hover:rotate-1"
                    />
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-playfair text-lg font-semibold text-heritage-navy mb-2">
                      {building.title}
                    </h3>
                    <div className="space-y-1 text-sm">
                      <p className="text-heritage-maroon font-medium">{building.era}</p>
                      <p className="text-heritage-olive">{building.style}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default MapsArchitecture;
