import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Slider } from '@/components/ui/slider';
import Icon from '@/components/ui/icon';

interface OrderForm {
  platform: string;
  link: string;
  votes: number;
  email: string;
}

interface Platform {
  value: string;
  label: string;
  icon: string;
}

interface ChatMessage {
  text: string;
  isUser: boolean;
}

interface OrderChatDialogsProps {
  isOrderOpen: boolean;
  setIsOrderOpen: (open: boolean) => void;
  orderForm: OrderForm;
  setOrderForm: (form: OrderForm) => void;
  handleOrderSubmit: () => void;
  platforms: Platform[];
  isChatOpen: boolean;
  setIsChatOpen: (open: boolean) => void;
  chatMessages: ChatMessage[];
  message: string;
  setMessage: (message: string) => void;
  handleSendMessage: () => void;
}

const OrderChatDialogs = ({
  isOrderOpen,
  setIsOrderOpen,
  orderForm,
  setOrderForm,
  handleOrderSubmit,
  platforms,
  isChatOpen,
  setIsChatOpen,
  chatMessages,
  message,
  setMessage,
  handleSendMessage
}: OrderChatDialogsProps) => {
  return (
    <>
      <Dialog open={isOrderOpen} onOpenChange={setIsOrderOpen}>
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
    </>
  );
};

export default OrderChatDialogs;
