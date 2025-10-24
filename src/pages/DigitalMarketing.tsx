import { ServicePage } from '../components/ServicePage';

interface DigitalMarketingProps {
  onNavigate: (page: string) => void;
  onGetInTouch: () => void;
}

export function DigitalMarketing({ onNavigate, onGetInTouch }: DigitalMarketingProps) {
  const testimonials = [
    {
      name: 'Michael Roberts',
      role: 'CEO',
      company: 'BrightFuture Consulting',
      content: 'Their digital marketing expertise transformed our online presence. Our engagement rates have doubled, and we\'re seeing real ROI from their campaigns.',
      rating: 5,
    },
    {
      name: 'Lisa Anderson',
      role: 'Marketing Director',
      company: 'StyleHub Fashion',
      content: 'The content they create is engaging and perfectly aligned with our brand voice. Their social media management has significantly grown our follower base.',
      rating: 5,
    },
    {
      name: 'James Wilson',
      role: 'Founder',
      company: 'EcoProducts Ltd',
      content: 'C&A Solutions\' AI-powered automation tools have revolutionized how we manage our marketing campaigns. The personalization and efficiency gains are remarkable.',
      rating: 5,
    },
  ];

  const description = (
    <div className="space-y-4">
      <p className="text-gray-600 leading-relaxed">
        Our digital marketing services combine creativity with data-driven strategies to elevate your brand's online presence and strengthen engagement with your target audience. We develop comprehensive marketing plans tailored to your unique business objectives, employing a multi-channel approach for maximum impact.
      </p>
      <div className="space-y-3">
        <p className="text-gray-700">Our offerings include:</p>
        <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
          <li><strong>Social Media Marketing:</strong> Crafting compelling content for platforms like Instagram, LinkedIn, Facebook, and Twitter, managing campaigns, and growing your follower base organically and through targeted ads.</li>
          <li><strong>Content Creation:</strong> Producing high-quality videos, blogs, infographics, and graphics that tell your brand story and drive customer interest.</li>
          <li><strong>Copywriting:</strong> Engaging, persuasive copy for websites, ads, newsletters, and more, designed to convert visitors into loyal customers.</li>
          <li><strong>Campaign Management:</strong> From planning to execution and analysis, we handle pay-per-click (PPC), display ads, and email marketing campaigns to ensure your investments bring measurable returns.</li>
        </ul>
      </div>
      <p className="text-gray-600 leading-relaxed">
        Additionally, we leverage advanced AI-powered automation tools to optimize campaign performance, personalize content, automate repetitive marketing tasks, and analyse customer data for real-time insights. This allows us to deliver highly targeted messaging, improve ROI, and maintain consistent, timely communication with your audience without compromising creativity.
      </p>
      <p className="text-gray-700 italic">
        Let your brand's story shine with creative marketing that converts — because your success starts with captivating content and strategic outreach.
      </p>
    </div>
  );

  return (
    <ServicePage
      title="Digital Marketing & Content Creation"
      tagline="Creative marketing that converts and content that captivates"
      description={description}
      imageUrl="https://images.unsplash.com/photo-1542744094-f77e9f7a10b8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwbWFya2V0aW5nJTIwd29ya3NwYWNlfGVufDF8fHx8MTc2MTIwODY2MHww&ixlib=rb-4.1.0&q=80&w=1080"
      testimonials={testimonials}
      onNavigate={onNavigate}
      onGetInTouch={onGetInTouch}
    />
  );
}
