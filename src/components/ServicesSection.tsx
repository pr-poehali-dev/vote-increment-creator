import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

interface Stats {
  clients: number;
  votes: number;
  orders: number;
}

interface ServicesSectionProps {
  stats: Stats;
  onOrderClick: () => void;
}

const ServicesSection = ({ stats, onOrderClick }: ServicesSectionProps) => {
  const benefits = [
    {
      icon: 'Target',
      title: 'Увеличение доверия',
      description: 'Накрутка голосов повышает доверие аудитории к вашему контенту. Большое количество голосов создает эффект социального доказательства.',
      gradient: 'from-purple-600 to-pink-600'
    },
    {
      icon: 'TrendingUp',
      title: 'Рост популярности',
      description: 'Профессиональная накрутка голосов помогает вашим постам попадать в топ. Накрутка голосов — эффективный способ продвижения в соцсетях.',
      gradient: 'from-pink-600 to-orange-500'
    },
    {
      icon: 'Award',
      title: 'Победа в конкурсах',
      description: 'Накрутка голосов обеспечивает преимущество в голосованиях и конкурсах. Быстрая накрутка голосов для гарантированной победы.',
      gradient: 'from-orange-500 to-purple-600'
    },
    {
      icon: 'Users',
      title: 'Привлечение подписчиков',
      description: 'Накрутка голосов привлекает внимание новых пользователей. Чем больше голосов, тем активнее растет аудитория вашего аккаунта.',
      gradient: 'from-blue-600 to-cyan-500'
    },
    {
      icon: 'Rocket',
      title: 'Быстрый старт проектов',
      description: 'Накрутка голосов дает мощный старт новым проектам. Профессиональная накрутка голосов помогает быстро набрать первые позиции.',
      gradient: 'from-green-600 to-emerald-500'
    },
    {
      icon: 'Shield',
      title: 'Безопасность и гарантии',
      description: 'Безопасная накрутка голосов без рисков для аккаунта. Накрутка голосов с гарантией качества и полной конфиденциальностью.',
      gradient: 'from-indigo-600 to-violet-500'
    }
  ];

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
            Преимущества Накрутки Голосов
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            Накрутка голосов — это эффективный инструмент продвижения в социальных сетях. 
            Профессиональная накрутка голосов помогает достичь ваших целей быстро и безопасно.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {benefits.map((benefit, index) => (
            <Card 
              key={index}
              className="relative overflow-hidden border-2 border-border transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:border-primary/50 animate-scale-in backdrop-blur-sm bg-card/50"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${benefit.gradient} opacity-5`}></div>
              <CardHeader className="relative">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${benefit.gradient} flex items-center justify-center mb-4`}>
                  <Icon name={benefit.icon as any} size={32} className="text-white" />
                </div>
                <CardTitle className="text-xl">{benefit.title}</CardTitle>
              </CardHeader>
              <CardContent className="relative">
                <p className="text-foreground/70 leading-relaxed">
                  {benefit.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </>
  );
};

export default ServicesSection;