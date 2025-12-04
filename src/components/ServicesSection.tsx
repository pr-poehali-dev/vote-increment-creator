import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

interface Service {
  icon: string;
  title: string;
  price: string;
  votes: string;
  features: string[];
  gradient: string;
  popular?: boolean;
}

interface Stats {
  clients: number;
  votes: number;
  orders: number;
}

interface ServicesSectionProps {
  services: Service[];
  stats: Stats;
  onOrderClick: () => void;
}

const ServicesSection = ({ services, stats, onOrderClick }: ServicesSectionProps) => {
  return (
    <>
      <section className="container mx-auto px-4 py-16 bg-gradient-to-r from-primary/5 via-secondary/5 to-accent/5">
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="text-center space-y-2 animate-fade-in">
            <div className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              {stats.clients.toLocaleString()}+
            </div>
            <div className="text-muted-foreground text-lg">Довольных клиентов</div>
            <Icon name="Users" size={32} className="mx-auto text-primary" />
          </div>
          <div className="text-center space-y-2 animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <div className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
              {(stats.votes / 1000000).toFixed(1)}M+
            </div>
            <div className="text-muted-foreground text-lg">Голосов накручено</div>
            <Icon name="TrendingUp" size={32} className="mx-auto text-secondary" />
          </div>
          <div className="text-center space-y-2 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
              {stats.orders.toLocaleString()}+
            </div>
            <div className="text-muted-foreground text-lg">Выполненных заказов</div>
            <Icon name="CheckCircle2" size={32} className="mx-auto text-accent" />
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Накрутка Голосов — Тарифы
          </h2>
          <p className="text-muted-foreground text-lg">Профессиональная накрутка голосов по доступным ценам. Выберите накрутку голосов с гарантией качества</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <Card 
              key={index}
              className={`relative overflow-hidden border-2 transition-all duration-300 hover:scale-105 hover:shadow-2xl animate-scale-in backdrop-blur-sm bg-card/50 ${
                service.popular ? 'border-primary shadow-lg shadow-primary/20' : 'border-border'
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {service.popular && (
                <div className="absolute top-4 right-4 bg-gradient-to-r from-primary to-secondary text-white px-3 py-1 rounded-full text-sm font-semibold">
                  Популярный
                </div>
              )}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-5`}></div>
              <CardHeader className="relative">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-4`}>
                  <Icon name={service.icon as any} size={32} className="text-white" />
                </div>
                <CardTitle className="text-2xl">{service.title}</CardTitle>
                <CardDescription className="text-lg">{service.votes}</CardDescription>
              </CardHeader>
              <CardContent className="relative space-y-4">
                <div className="text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  {service.price}
                </div>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <Icon name="Check" size={18} className="text-primary" />
                      <span className="text-foreground/80">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button 
                  onClick={onOrderClick}
                  className={`w-full bg-gradient-to-r ${service.gradient} hover:opacity-90`}
                >
                  Выбрать пакет
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </>
  );
};

export default ServicesSection;