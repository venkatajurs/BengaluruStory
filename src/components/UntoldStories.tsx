import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface Story {
  id: number;
  title: string;
  summary: string;
  image: string;
  category: string;
}

const stories: Story[] = [
  {
    id: 1,
    title: "Kempegowda's Urban Planning Vision",
    summary: "Discover how a 16th-century visionary created India's first planned city with innovative Pete layout, watchtowers, and market systems that still influence Bengaluru today.",
    image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=400&h=300&fit=crop",
    category: "Urban Planning"
  },
  {
    id: 2,
    title: "Tigala Community & Lal Bagh",
    summary: "The untold story of how the indigenous Tigala community partnered with Haidar Ali to create Lal Bagh, bringing botanical expertise that transformed the city's landscape.",
    image: "https://images.unsplash.com/photo-1433086966358-54859d0ed716?w=400&h=300&fit=crop",
    category: "Culture & Heritage"
  },
  {
    id: 3,
    title: "Shivaji's Lost Childhood in Bangalore",
    summary: "Before becoming the Maratha emperor, young Shivaji spent crucial formative years in Bengaluru under his half-brother Venkoji's rule, shaping his future empire-building vision.",
    image: "https://images.unsplash.com/photo-1466442929976-97f336a657be?w=400&h=300&fit=crop",
    category: "Royal History"
  },
  {
    id: 4,
    title: "Rava Idli: Born from WWII Rice Shortage",
    summary: "Learn how World War II food rationing led to the accidental invention of Rava Idli in Bengaluru's Mavalli Tiffin Rooms, creating a culinary legend.",
    image: "https://images.unsplash.com/photo-1472396961693-142e6e269027?w=400&h=300&fit=crop",
    category: "Culinary Heritage"
  },
  {
    id: 5,
    title: "Bangalore Torpedo's Global Impact",
    summary: "From Bengaluru's military workshops to worldwide warfare, discover how this explosive device invented during British rule changed military engineering forever.",
    image: "https://images.unsplash.com/photo-1460574283810-2aab119d8511?w=400&h=300&fit=crop",
    category: "Military Innovation"
  },
  {
    id: 6,
    title: "The Forgotten Agraharas",
    summary: "Explore the traditional Brahmin settlements that once dotted Bengaluru, their unique architecture, and how they influenced the city's cultural and educational landscape.",
    image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=400&h=300&fit=crop",
    category: "Architecture"
  }
];

const UntoldStories = () => {
  return (
    <section id="stories" className="py-20 bg-heritage-olive/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-heritage-maroon mb-6">
            Untold Stories
          </h2>
          <p className="text-xl text-heritage-olive max-w-3xl mx-auto">
            Dive deeper into the forgotten narratives that shaped Bengaluru's unique identity
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stories.map((story, index) => (
            <Card 
              key={story.id} 
              className={`
                group cursor-pointer border-heritage-golden/20 bg-white/95 backdrop-blur-sm 
                hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 vintage-glow
                animate-fade-in
              `}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative overflow-hidden rounded-t-lg">
                <img 
                  src={story.image} 
                  alt={story.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-heritage-maroon text-heritage-cream px-3 py-1 rounded-full text-xs font-semibold">
                    {story.category}
                  </span>
                </div>
              </div>
              
              <CardHeader>
                <CardTitle className="font-playfair text-xl text-heritage-navy group-hover:text-heritage-maroon transition-colors">
                  {story.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent>
                <p className="text-heritage-navy/70 leading-relaxed mb-4">
                  {story.summary}
                </p>
                
                <Button 
                  variant="outline" 
                  size="sm"
                  className="border-heritage-golden text-heritage-navy hover:bg-heritage-golden hover:text-heritage-cream transition-all duration-200"
                >
                  Read More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UntoldStories;
