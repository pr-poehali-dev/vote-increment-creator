import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import Icon from '@/components/ui/icon';

interface Review {
  name: string;
  avatar: string;
  rating: number;
  text: string;
  platform: string;
}

interface FAQItem {
  question: string;
  answer: string;
}

interface ReviewsFAQSectionProps {
  reviews: Review[];
  faqItems: FAQItem[];
  onOrderClick: () => void;
}

const ReviewsFAQSection = ({ reviews, faqItems, onOrderClick }: ReviewsFAQSectionProps) => {
  return (
    <>
      <section className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Отзывы Клиентов
          </h2>
          <p className="text-muted-foreground text-lg">Что говорят о нас наши клиенты</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-20">
          {reviews.map((review, index) => (
            <Card 
              key={index}
              className="backdrop-blur-sm bg-card/50 border-border hover:border-primary/50 transition-all duration-300 hover:scale-105 animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Avatar className="w-12 h-12 border-2 border-primary/50">
                    <AvatarFallback className="bg-gradient-to-br from-primary to-secondary text-white">
                      {review.avatar}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <CardTitle className="text-lg">{review.name}</CardTitle>
                    <CardDescription className="text-sm">{review.platform}</CardDescription>
                  </div>
                </div>
                <div className="flex gap-1 mt-2">
                  {[...Array(review.rating)].map((_, i) => (
                    <Icon key={i} name="Star" size={16} className="fill-accent text-accent" />
                  ))}
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-foreground/80 italic">"{review.text}"</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Накрутка Голосов — FAQ
            </h2>
            <p className="text-muted-foreground text-lg">Ответы на частые вопросы о накрутке голосов</p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqItems.map((item, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="border border-border rounded-2xl px-6 backdrop-blur-sm bg-card/50 hover:border-primary/50 transition-colors"
              >
                <AccordionTrigger className="text-lg font-semibold hover:text-primary">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <section className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="inline-block p-4 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-full">
            <Icon name="Sparkles" size={48} className="text-primary" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Заказать Накрутку Голосов
          </h2>
          <p className="text-xl text-muted-foreground">
            Профессиональная накрутка голосов с гарантией. Заказать накрутку голосов сейчас — увеличьте популярность уже сегодня!
          </p>
          <Button 
            onClick={onOrderClick}
            size="lg" 
            className="bg-gradient-to-r from-primary via-secondary to-accent hover:opacity-90 text-lg px-12 py-6"
          >
Заказать накрутку голосов
            <Icon name="Rocket" size={20} className="ml-2" />
          </Button>
        </div>
      </section>
    </>
  );
};

export default ReviewsFAQSection;