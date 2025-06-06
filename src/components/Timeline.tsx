import { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';

interface TimelineEvent {
  id: number;
  era: string;
  period: string;
  title: string;
  description: string;
  keyPoints: string[];
  image?: string;
}

const timelineEvents: TimelineEvent[] = [
  {
    id: 1,
    era: "Ancient Origins",
    period: "2000+ years ago",
    title: "The Foundation Stones",
    description: "Roman coins and the Begur inscription reveal Bengaluru's ancient connections to global trade routes.",
    keyPoints: [
      "Roman coins discovered in archaeological excavations",
      "Begur inscription mentions early settlements",
      "Strategic location on trade routes"
    ]
  },
  {
    id: 2,
    era: "Kempegowda's Vision",
    period: "1537 CE",
    title: "The City Architect",
    description: "Kempegowda I transforms a small settlement into a planned city with innovative Pete layout.",
    keyPoints: [
      "Built mud fort and watchtowers",
      "Created Chickpete and Doddapete markets",
      "Established the Pete system of urban planning"
    ]
  },
  {
    id: 3,
    era: "Immadi Kempegowda Era",
    period: "1569-1580",
    title: "Expansion and Conquest",
    description: "The second Kempegowda faces Bijapur conquest while expanding the city's boundaries.",
    keyPoints: [
      "Expanded city limits beyond original design",
      "Faced Bijapur Sultanate invasions",
      "Strengthened fortifications"
    ]
  },
  {
    id: 4,
    era: "Shivaji's Childhood",
    period: "1630s-1640s",
    title: "The Future Emperor's Early Years",
    description: "Young Shivaji spends formative years in Bengaluru under Venkoji's rule.",
    keyPoints: [
      "Shivaji lived in Bengaluru as a child",
      "Venkoji ruled the region for Bijapur",
      "Shaped future Maratha empire perspectives"
    ]
  },
  {
    id: 5,
    era: "Mysore Wodeyar Rule",
    period: "1690-1761",
    title: "Sale and Transformation",
    description: "Mughals sell Bengaluru to Mysore Wodeyars, beginning a new administrative era.",
    keyPoints: [
      "Purchased from Mughal Empire",
      "Wodeyar administrative systems",
      "Cultural synthesis period"
    ]
  },
  {
    id: 6,
    era: "Haidar Ali & Tipu Sultan",
    period: "1761-1799",
    title: "Innovation and Resistance",
    description: "Father-son duo revolutionizes the city with Lal Bagh, rockets, and modern administration.",
    keyPoints: [
      "Created Lal Bagh botanical gardens",
      "Developed Mysorean rockets",
      "Collaborated with Tigala community"
    ]
  },
  {
    id: 7,
    era: "British Colonial Era",
    period: "1799-1947",
    title: "Bangalore Torpedo and Cantonment",
    description: "British rule brings the cantonment system and the famous Bangalore Torpedo invention.",
    keyPoints: [
      "Established military cantonment",
      "Invented Bangalore Torpedo",
      "Colonial bungalow architecture"
    ]
  },
  {
    id: 8,
    era: "Post-Independence",
    period: "1947-1960s",
    title: "New Beginnings",
    description: "Vidhana Soudha construction and the invention of Rava Idli mark the modern era.",
    keyPoints: [
      "Built Vidhana Soudha legislature",
      "Rava Idli invented during WWII rice shortage",
      "Foundation for tech revolution"
    ]
  }
];

const Timeline = () => {
  const [visibleEvents, setVisibleEvents] = useState<Set<number>>(new Set());

  useEffect(() => {
    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const eventId = parseInt(entry.target.getAttribute('data-event-id') || '0');
          setVisibleEvents(prev => new Set(prev).add(eventId));
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      threshold: 0.3,
      rootMargin: '0px 0px -100px 0px'
    });

    const timelineItems = document.querySelectorAll('.timeline-item');
    timelineItems.forEach(item => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="timeline" className="py-20 bg-gradient-to-b from-heritage-cream to-heritage-cream/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-heritage-maroon mb-6">
            Journey Through Time
          </h2>
          <p className="text-xl text-heritage-olive max-w-3xl mx-auto">
            Follow the thread of history as Bengaluru transforms from ancient settlement to modern metropolis
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 timeline-line h-full hidden md:block"></div>

          <div className="space-y-12 md:space-y-16">
            {timelineEvents.map((event, index) => {
              const isEven = index % 2 === 0;
              const isVisible = visibleEvents.has(event.id);
              
              return (
                <div
                  key={event.id}
                  data-event-id={event.id}
                  className={`timeline-item flex flex-col md:flex-row items-center ${
                    isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Content */}
                  <div className={`w-full md:w-5/12 ${isEven ? 'md:pr-8' : 'md:pl-8'}`}>
                    <Card className={`
                      border-heritage-golden/30 bg-white/90 backdrop-blur-sm transition-all duration-700 transform vintage-glow
                      ${isVisible ? 'animate-fade-in opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
                    `}>
                      <CardContent className="p-6">
                        <div className="mb-4">
                          <span className="text-heritage-maroon text-sm font-semibold uppercase tracking-wide">
                            {event.period}
                          </span>
                          <h3 className="font-playfair text-2xl font-bold text-heritage-navy mt-1">
                            {event.era}
                          </h3>
                          <h4 className="text-lg font-semibold text-heritage-olive mt-2">
                            {event.title}
                          </h4>
                        </div>
                        
                        <p className="text-heritage-navy/80 mb-4 leading-relaxed">
                          {event.description}
                        </p>
                        
                        <ul className="space-y-2">
                          {event.keyPoints.map((point, idx) => (
                            <li key={idx} className="flex items-start text-sm text-heritage-navy/70">
                              <span className="text-heritage-golden mr-2 mt-1">•</span>
                              {point}
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  </div>

                  {/* Timeline dot */}
                  <div className="relative z-10 my-4 md:my-0">
                    <div className={`
                      w-6 h-6 rounded-full border-4 border-heritage-golden bg-heritage-cream transition-all duration-500 vintage-glow
                      ${isVisible ? 'scale-110 shadow-lg' : 'scale-100'}
                    `}></div>
                  </div>

                  {/* Spacer for the other side */}
                  <div className="hidden md:block w-5/12"></div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
