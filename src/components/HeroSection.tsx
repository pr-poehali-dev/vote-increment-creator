import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

interface HeroSectionProps {
  onOrderClick: () => void;
}

const HeroSection = ({ onOrderClick }: HeroSectionProps) => {
  return (
    <section className="container mx-auto px-4 py-20 md:py-32">
      <div className="text-center space-y-8 animate-fade-in">
        <div className="inline-block">
          <div className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            <Icon name="TrendingUp" size={80} className="mx-auto mb-4 animate-float" />
          </div>
        </div>
        <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
          Накрутка Голосов
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
          Быстро, безопасно и эффективно увеличивайте количество голосов на любых платформах
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            size="lg" 
            onClick={onOrderClick}
            className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-lg px-8 py-6"
          >
            Начать сейчас
            <Icon name="ArrowRight" size={20} className="ml-2" />
          </Button>
          <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-primary/50 hover:bg-primary/10">
            Узнать больше
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
