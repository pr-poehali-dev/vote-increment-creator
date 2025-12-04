import { useState, useEffect } from 'react';
import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';
import ReviewsFAQSection from '@/components/ReviewsFAQSection';
import OrderChatDialogs from '@/components/OrderChatDialogs';

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
        <HeroSection onOrderClick={() => setIsOrderOpen(true)} />
        
        <ServicesSection 
          services={services} 
          stats={stats} 
          onOrderClick={() => setIsOrderOpen(true)} 
        />
        
        <ReviewsFAQSection 
          reviews={reviews} 
          faqItems={faqItems} 
          onOrderClick={() => setIsOrderOpen(true)} 
        />

        <footer className="border-t border-border/50 mt-20">
          <div className="container mx-auto px-4 py-8">
            <div className="text-center text-muted-foreground">
              <p>© 2024 Накрутка Голосов. Все права защищены.</p>
            </div>
          </div>
        </footer>
      </div>

      <OrderChatDialogs
        isOrderOpen={isOrderOpen}
        setIsOrderOpen={setIsOrderOpen}
        orderForm={orderForm}
        setOrderForm={setOrderForm}
        handleOrderSubmit={handleOrderSubmit}
        platforms={platforms}
        isChatOpen={isChatOpen}
        setIsChatOpen={setIsChatOpen}
        chatMessages={chatMessages}
        message={message}
        setMessage={setMessage}
        handleSendMessage={handleSendMessage}
      />
    </div>
  );
};

export default Index;
