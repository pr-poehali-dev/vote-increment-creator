import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Slider } from '@/components/ui/slider';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [isOrderOpen, setIsOrderOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [chatMessages, setChatMessages] = useState<{ text: string; isUser: boolean }[]>([
    { text: 'Здравствуйте! Чем могу помочь?', isUser: false }
  ]);
  
  const [orderForm, setOrderForm] = useState({
    platform: '',
    link: '',
    votes: 100,
    email: ''
  });

  const [stats, setStats] = useState({
    clients: 0,
    votes: 0,
    orders: 0
  });

  useEffect(() => {
    const targetStats = { clients: 15420, votes: 2847000, orders: 24680 };
    const duration = 2000;
    const steps = 50;
    const interval = duration / steps;
    
    let currentStep = 0;
    const timer = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;
      
      setStats({
        clients: Math.floor(targetStats.clients * progress),
        votes: Math.floor(targetStats.votes * progress),
        orders: Math.floor(targetStats.orders * progress)
      });
      
      if (currentStep >= steps) clearInterval(timer);
    }, interval);
    
    return () => clearInterval(timer);
  }, []);

  const services = [
    {
      icon: 'ThumbsUp',
      title: 'Базовый',
      price: '500₽',
      votes: '100 голосов',
      features: ['Быстрая накрутка', 'Реальные аккаунты', '24 часа'],
      gradient: 'from-purple-600 to-pink-600'
    },
    {
      icon: 'Zap',
      title: 'Стандарт',
      price: '1500₽',
      votes: '500 голосов',
      features: ['Моментальный старт', 'Премиум аккаунты', '12 часов', 'Гарантия'],
      gradient: 'from-pink-600 to-orange-500',
      popular: true
    },
    {
      icon: 'Crown',
      title: 'Премиум',
      price: '3500₽',
      votes: '1500 голосов',
      features: ['VIP обслуживание', 'Элитные аккаунты', '6 часов', 'Полная гарантия', 'Поддержка 24/7'],
      gradient: 'from-orange-500 to-purple-600'
    }
  ];

  const faqItems = [
    {
      question: 'Как быстро начнется накрутка?',
      answer: 'Накрутка начинается сразу после оплаты. В зависимости от выбранного пакета, процесс занимает от 6 до 24 часов.'
    },
    {
      question: 'Это безопасно?',
      answer: 'Да, мы используем только проверенные методы и реальные аккаунты. Ваш профиль полностью защищен.'
    },
    {
      question: 'Какие гарантии вы предоставляете?',
      answer: 'Мы гарантируем выполнение заказа в срок. Если голоса исчезнут в течение 30 дней, мы восстановим их бесплатно.'
    },
    {
      question: 'Можно ли отменить заказ?',
      answer: 'Отмена возможна до начала выполнения заказа. После старта накрутки отмена невозможна.'
    },
    {
      question: 'Какие платформы поддерживаются?',
      answer: 'Мы работаем с ВКонтакте, Instagram, Facebook, Twitter и другими популярными платформами.'
    }
  ];

  const handleSendMessage = () => {
    if (message.trim()) {
      setChatMessages([...chatMessages, { text: message, isUser: true }]);
      setMessage('');
      setTimeout(() => {
        setChatMessages(prev => [...prev, { 
          text: 'Спасибо за ваше сообщение! Наш специалист свяжется с вами в ближайшее время.', 
          isUser: false 
        }]);
      }, 1000);
    }
  };

  const handleOrderSubmit = () => {
    console.log('Order submitted:', orderForm);
    setIsOrderOpen(false);
    setOrderForm({ platform: '', link: '', votes: 100, email: '' });
  };

  const reviews = [
    {
      name: 'Алексей М.',
      avatar: 'AM',
      rating: 5,
      text: 'Отличный сервис! Заказал 500 голосов, всё пришло за 8 часов. Рекомендую!',
      platform: 'ВКонтакте'
    },
    {
      name: 'Екатерина П.',
      avatar: 'ЕП',
      rating: 5,
      text: 'Быстро, качественно, без блокировок. Уже третий раз заказываю здесь.',
      platform: 'Instagram'
    },
    {
      name: 'Дмитрий К.',
      avatar: 'ДК',
      rating: 5,
      text: 'Профессиональный подход! Поддержка ответила моментально, всё объяснили.',
      platform: 'Facebook'
    }
  ];

  const platforms = [
    { value: 'vk', label: 'ВКонтакте', icon: '🔵' },
    { value: 'instagram', label: 'Instagram', icon: '📸' },
    { value: 'facebook', label: 'Facebook', icon: '👍' },
    { value: 'twitter', label: 'Twitter', icon: '🐦' },
    { value: 'youtube', label: 'YouTube', icon: '📹' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-purple-950/20 to-background">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMC41IiBvcGFjaXR5PSIwLjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-20"></div>

      <div className="relative">
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
              <Dialog open={isOrderOpen} onOpenChange={setIsOrderOpen}>
              <DialogTrigger asChild>
                <Button size="lg" className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-lg px-8 py-6">
                  Начать сейчас
                  <Icon name="ArrowRight" size={20} className="ml-2" />
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-lg">
                <DialogHeader>
                  <DialogTitle className="text-2xl">Оформить заказ</DialogTitle>
                  <DialogDescription>
                    Заполните форму и мы начнем накрутку в течение 15 минут
                  </DialogDescription>
                </DialogHeader>
                <div className="space-y-6 py-4">
                  <div className="space-y-2">
                    <Label htmlFor="platform">Выберите платформу</Label>
                    <Select value={orderForm.platform} onValueChange={(value) => setOrderForm({...orderForm, platform: value})}>
                      <SelectTrigger id="platform">
                        <SelectValue placeholder="Выберите платформу" />
                      </SelectTrigger>
                      <SelectContent>
                        {platforms.map((platform) => (
                          <SelectItem key={platform.value} value={platform.value}>
                            {platform.icon} {platform.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="link">Ссылка на пост/страницу</Label>
                    <Input 
                      id="link"
                      placeholder="https://..."
                      value={orderForm.link}
                      onChange={(e) => setOrderForm({...orderForm, link: e.target.value})}
                    />
                  </div>

                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <Label>Количество голосов: {orderForm.votes}</Label>
                      <span className="text-sm text-primary font-semibold">
                        ~{Math.round(orderForm.votes * 3.5)}₽
                      </span>
                    </div>
                    <Slider 
                      value={[orderForm.votes]}
                      onValueChange={(value) => setOrderForm({...orderForm, votes: value[0]})}
                      min={50}
                      max={5000}
                      step={50}
                      className="w-full"
                    />
                    <div className="flex justify-between text-xs text-muted-foreground">
                      <span>50</span>
                      <span>5000</span>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email для уведомлений</Label>
                    <Input 
                      id="email"
                      type="email"
                      placeholder="your@email.com"
                      value={orderForm.email}
                      onChange={(e) => setOrderForm({...orderForm, email: e.target.value})}
                    />
                  </div>

                  <Button 
                    onClick={handleOrderSubmit}
                    className="w-full bg-gradient-to-r from-primary via-secondary to-accent hover:opacity-90"
                    size="lg"
                  >
                    Оформить заказ
                    <Icon name="Rocket" size={20} className="ml-2" />
                  </Button>
                </div>
              </DialogContent>
            </Dialog>
              <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-primary/50 hover:bg-primary/10">
                Узнать больше
              </Button>
            </div>
          </div>
        </section>

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
              Наши Услуги
            </h2>
            <p className="text-muted-foreground text-lg">Выберите подходящий пакет для ваших целей</p>
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
                    onClick={() => setIsOrderOpen(true)}
                    className={`w-full bg-gradient-to-r ${service.gradient} hover:opacity-90`}
                  >
                    Выбрать пакет
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

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
                Частые Вопросы
              </h2>
              <p className="text-muted-foreground text-lg">Ответы на популярные вопросы наших клиентов</p>
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
              Готовы Начать?
            </h2>
            <p className="text-xl text-muted-foreground">
              Присоединяйтесь к тысячам довольных клиентов и увеличьте свою популярность уже сегодня
            </p>
            <Button 
              onClick={() => setIsOrderOpen(true)}
              size="lg" 
              className="bg-gradient-to-r from-primary via-secondary to-accent hover:opacity-90 text-lg px-12 py-6"
            >
              Заказать накрутку
              <Icon name="Rocket" size={20} className="ml-2" />
            </Button>
          </div>
        </section>

        <Dialog open={isChatOpen} onOpenChange={setIsChatOpen}>
          <DialogTrigger asChild>
            <Button 
              size="lg"
              className="fixed bottom-8 right-8 rounded-full w-16 h-16 shadow-2xl bg-gradient-to-r from-primary to-secondary hover:opacity-90 animate-scale-in z-50"
            >
              <Icon name="MessageCircle" size={28} />
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <DialogTitle className="flex items-center gap-2">
                <Icon name="Headphones" size={24} className="text-primary" />
                Поддержка
              </DialogTitle>
              <DialogDescription>
                Задайте вопрос нашей команде поддержки
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4">
              <div className="h-64 overflow-y-auto space-y-3 p-4 bg-muted/30 rounded-lg">
                {chatMessages.map((msg, idx) => (
                  <div 
                    key={idx}
                    className={`flex ${msg.isUser ? 'justify-end' : 'justify-start'}`}
                  >
                    <div 
                      className={`max-w-[80%] p-3 rounded-2xl ${
                        msg.isUser 
                          ? 'bg-gradient-to-r from-primary to-secondary text-white' 
                          : 'bg-card border border-border'
                      }`}
                    >
                      {msg.text}
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex gap-2">
                <Input 
                  placeholder="Введите сообщение..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                />
                <Button 
                  onClick={handleSendMessage}
                  className="bg-gradient-to-r from-primary to-secondary"
                >
                  <Icon name="Send" size={20} />
                </Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>

        <footer className="border-t border-border/50 mt-20">
          <div className="container mx-auto px-4 py-8">
            <div className="text-center text-muted-foreground">
              <p>© 2024 Накрутка Голосов. Все права защищены.</p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Index;