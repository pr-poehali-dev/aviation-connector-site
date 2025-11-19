import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  const industries = [
    {
      icon: 'Plane',
      title: 'Авиация',
      description: 'Высокопрочные соединители для авиационных систем, соответствующие стандартам безопасности полётов',
      specs: ['Рабочая температура: -65°C до +200°C', 'Вибростойкость до 50G', 'IP67 защита']
    },
    {
      icon: 'Rocket',
      title: 'Космос',
      description: 'Космические соединители для экстремальных условий с гарантией надёжности в вакууме',
      specs: ['Вакуумостойкость 10⁻⁶ Торр', 'Радиационная стойкость', 'Температурный диапазон -200°C до +300°C']
    },
    {
      icon: 'Car',
      title: 'Автомобили',
      description: 'Автомобильные соединители для электрических и гибридных систем нового поколения',
      specs: ['Ток до 600А', 'Водонепроницаемость IP69K', 'Срок службы 15+ лет']
    },
    {
      icon: 'Train',
      title: 'Железная дорога',
      description: 'Железнодорожные соединители с повышенной надёжностью для подвижного состава',
      specs: ['Огнестойкость R90', 'Ударопрочность IK10', 'Климатическое исполнение УХЛ1']
    }
  ];

  const products = [
    { name: 'Серия AeroConnect-X', applications: 'Авиация, космос', contacts: '12-128 контактов' },
    { name: 'Серия AutoLink Pro', applications: 'Автомобили, электротранспорт', contacts: '2-48 контактов' },
    { name: 'Серия RailMax Heavy', applications: 'Железная дорога, метро', contacts: '4-96 контактов' },
    { name: 'Серия IndustrialCore', applications: 'Промышленность, робототехника', contacts: '8-256 контактов' }
  ];

  const advantages = [
    { icon: 'Shield', title: 'Сертификация', text: 'Международные стандарты ISO, AS, EN' },
    { icon: 'Zap', title: 'Надёжность', text: 'MTBF > 1 000 000 часов' },
    { icon: 'Sparkles', title: 'Инновации', text: 'Собственное R&D подразделение' },
    { icon: 'Award', title: 'Опыт', text: '25+ лет на рынке' }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Форма отправлена:', formData);
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="fixed top-0 w-full z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Icon name="Zap" className="text-primary" size={28} />
            <span className="text-xl font-bold">FlyTech</span>
          </div>
          <div className="hidden md:flex items-center gap-6">
            <a href="#home" className="hover:text-primary transition-colors">Главная</a>
            <a href="#industries" className="hover:text-primary transition-colors">Отрасли</a>
            <a href="#products" className="hover:text-primary transition-colors">Продукция</a>
            <a href="#about" className="hover:text-primary transition-colors">О компании</a>
            <a href="#contact" className="hover:text-primary transition-colors">Контакты</a>
          </div>
          <Button size="sm" className="hidden md:flex">
            Запросить КП
          </Button>
        </nav>
      </header>

      <section id="home" className="pt-32 pb-20 px-4">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Соединители для
                <span className="text-primary"> высоких технологий</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Разработка и производство промышленных соединителей для авиации, космоса, автомобилестроения и железнодорожного транспорта
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="text-lg">
                  <Icon name="FileText" className="mr-2" size={20} />
                  Каталог продукции
                </Button>
                <Button size="lg" variant="outline" className="text-lg">
                  <Icon name="Mail" className="mr-2" size={20} />
                  Связаться с нами
                </Button>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
                {advantages.map((adv, i) => (
                  <div key={i} className="text-center">
                    <Icon name={adv.icon} className="mx-auto mb-2 text-primary" size={32} />
                    <div className="font-semibold text-sm">{adv.title}</div>
                    <div className="text-xs text-muted-foreground">{adv.text}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative animate-fade-in">
              <img 
                src="https://cdn.poehali.dev/projects/c6eaf623-2e25-4d85-ba0b-88669f1a4be3/files/7f4d99c9-a5ec-4109-950e-1e0e9f437c85.jpg"
                alt="Промышленный соединитель"
                className="rounded-lg shadow-2xl w-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent rounded-lg"></div>
            </div>
          </div>
        </div>
      </section>

      <section id="industries" className="py-20 px-4 bg-card/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Отрасли применения</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Наши решения работают в самых требовательных условиях эксплуатации
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {industries.map((industry, i) => (
              <Card key={i} className="hover:border-primary transition-all duration-300 hover:scale-105 cursor-pointer group">
                <CardHeader>
                  <Icon 
                    name={industry.icon} 
                    className="mb-4 text-primary group-hover:scale-110 transition-transform" 
                    size={48} 
                  />
                  <CardTitle className="text-2xl">{industry.title}</CardTitle>
                  <CardDescription className="text-base">{industry.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {industry.specs.map((spec, j) => (
                      <div key={j} className="flex items-start gap-2 text-sm">
                        <Icon name="CheckCircle2" className="text-primary flex-shrink-0 mt-0.5" size={16} />
                        <span className="text-muted-foreground">{spec}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="products" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Линейка продукции</h2>
              <p className="text-xl text-muted-foreground mb-8">
                Более 500 моделей соединителей для различных применений. Индивидуальные решения под ваши требования.
              </p>
              <div className="space-y-4">
                {products.map((product, i) => (
                  <Card key={i} className="hover:border-primary transition-colors">
                    <CardContent className="p-6 flex items-center justify-between">
                      <div>
                        <h3 className="text-lg font-semibold mb-1">{product.name}</h3>
                        <p className="text-sm text-muted-foreground">{product.applications}</p>
                      </div>
                      <div className="text-right">
                        <div className="text-sm font-medium text-primary">{product.contacts}</div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://cdn.poehali.dev/projects/c6eaf623-2e25-4d85-ba0b-88669f1a4be3/files/adadefa7-b4ff-4e6e-a97a-c65c56105d56.jpg"
                alt="Технологии производства"
                className="rounded-lg shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-4 bg-card/30">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative order-2 lg:order-1">
              <img 
                src="https://cdn.poehali.dev/projects/c6eaf623-2e25-4d85-ba0b-88669f1a4be3/files/9f513946-5b19-428a-86c9-2427b9986a33.jpg"
                alt="Производство"
                className="rounded-lg shadow-2xl w-full"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">О компании</h2>
              <div className="space-y-4 text-lg text-muted-foreground">
                <p>
                  <span className="text-foreground font-semibold">TechConnect</span> — ведущий производитель промышленных соединителей с 1999 года.
                </p>
                <p>
                  Наши изделия применяются в критически важных системах более чем в 40 странах мира. Мы работаем с ведущими авиационными, космическими и автомобильными компаниями.
                </p>
                <div className="grid grid-cols-3 gap-6 pt-8">
                  <div>
                    <div className="text-4xl font-bold text-primary mb-2">500+</div>
                    <div className="text-sm">Моделей продукции</div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-primary mb-2">40+</div>
                    <div className="text-sm">Стран-партнёров</div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-primary mb-2">25+</div>
                    <div className="text-sm">Лет на рынке</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Свяжитесь с нами</h2>
            <p className="text-xl text-muted-foreground">
              Ответим на вопросы и подберём оптимальное решение для вашей задачи
            </p>
          </div>
          <Card>
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Имя *</label>
                    <Input 
                      placeholder="Иван Иванов"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Email *</label>
                    <Input 
                      type="email"
                      placeholder="ivan@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      required
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Компания</label>
                  <Input 
                    placeholder="Название компании"
                    value={formData.company}
                    onChange={(e) => setFormData({...formData, company: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Сообщение *</label>
                  <Textarea 
                    placeholder="Опишите вашу задачу или задайте вопрос"
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    required
                  />
                </div>
                <Button type="submit" size="lg" className="w-full text-lg">
                  <Icon name="Send" className="mr-2" size={20} />
                  Отправить запрос
                </Button>
              </form>
              <div className="mt-8 pt-8 border-t border-border grid md:grid-cols-3 gap-6 text-center">
                <div>
                  <Icon name="Phone" className="mx-auto mb-2 text-primary" size={24} />
                  <div className="font-medium">+7 (495) 123-45-67</div>
                  <div className="text-sm text-muted-foreground">Пн-Пт 9:00-18:00</div>
                </div>
                <div>
                  <Icon name="Mail" className="mx-auto mb-2 text-primary" size={24} />
                  <div className="font-medium">info@techconnect.ru</div>
                  <div className="text-sm text-muted-foreground">Ответим за 24 часа</div>
                </div>
                <div>
                  <Icon name="MapPin" className="mx-auto mb-2 text-primary" size={24} />
                  <div className="font-medium">Москва</div>
                  <div className="text-sm text-muted-foreground">Технопарк Сколково</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="py-8 px-4 border-t border-border">
        <div className="container mx-auto text-center text-muted-foreground">
          <p>© 2024 TechConnect. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;