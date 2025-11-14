import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { Badge } from "@/components/ui/badge";

const Index = () => {
  return (
    <div className="min-h-screen bg-[#0a0014] overflow-x-hidden">
      <nav className="fixed top-0 w-full z-50 glass border-b border-primary/20">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-heading font-bold text-white">
            Minely<span className="text-primary">.net</span>
          </h1>
          <div className="hidden md:flex gap-6">
            <a href="#home" className="text-white/80 hover:text-white transition-colors">Главная</a>
            <a href="#program" className="text-white/80 hover:text-white transition-colors">Программа</a>
            <a href="#bloggers" className="text-white/80 hover:text-white transition-colors">Блогеры</a>
            <a href="#prizes" className="text-white/80 hover:text-white transition-colors">Призы</a>
            <a href="#rules" className="text-white/80 hover:text-white transition-colors">Правила</a>
          </div>
          <Button className="bg-primary hover:bg-primary/90 text-black font-semibold glow">
            Подключиться
          </Button>
        </div>
      </nav>

      <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/20 via-transparent to-transparent"></div>
        <div className="absolute inset-0">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-primary rounded-full animate-glow-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`,
              }}
            ></div>
          ))}
        </div>
        
        <div className="container mx-auto px-4 relative z-10 text-center">
          <div className="animate-fade-in">
            <Badge className="mb-4 bg-accent/20 text-accent border-accent/50 text-lg px-6 py-2">
              30 декабря 2024 • 18:00
            </Badge>
            <h2 className="text-6xl md:text-8xl font-heading font-black text-white mb-6 glow-text">
              Новогодний<br />
              <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                ЭПИК ИВЕНТ
              </span>
            </h2>
            <p className="text-xl md:text-2xl text-white/70 mb-8 max-w-2xl mx-auto">
              Грандиозное событие с популярными блогерами, невероятными призами и незабываемой атмосферой
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Button size="lg" className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-white font-bold text-lg px-8 py-6 glow">
                <Icon name="Gamepad2" className="mr-2" size={24} />
                event.minely.net
              </Button>
              <Button size="lg" variant="outline" className="border-primary/50 text-primary hover:bg-primary/10 font-bold text-lg px-8 py-6">
                <Icon name="Play" className="mr-2" size={24} />
                Трейлер
              </Button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
              <div className="glass rounded-lg p-6 hover:scale-105 transition-transform">
                <Icon name="Users" className="mx-auto mb-3 text-primary" size={40} />
                <h3 className="text-2xl font-bold text-white mb-2">1000+</h3>
                <p className="text-white/60">Участников</p>
              </div>
              <div className="glass rounded-lg p-6 hover:scale-105 transition-transform">
                <Icon name="Trophy" className="mx-auto mb-3 text-secondary" size={40} />
                <h3 className="text-2xl font-bold text-white mb-2">50+</h3>
                <p className="text-white/60">Призов</p>
              </div>
              <div className="glass rounded-lg p-6 hover:scale-105 transition-transform">
                <Icon name="Sparkles" className="mx-auto mb-3 text-accent" size={40} />
                <h3 className="text-2xl font-bold text-white mb-2">∞</h3>
                <p className="text-white/60">Эмоций</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="program" className="py-24 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-heading font-black text-white mb-4 glow-text">
              Программа ивента
            </h2>
            <p className="text-xl text-white/60">Каждая минута будет незабываемой</p>
          </div>
          
          <div className="max-w-4xl mx-auto space-y-6">
            {[
              { time: "18:00", title: "Открытие", desc: "Грандиозное начало события с приветствием от команды", icon: "Rocket" },
              { time: "18:30", title: "Мини-игры", desc: "Соревнования и челленджи с крутыми наградами", icon: "Gamepad2" },
              { time: "19:00", title: "Стримы блогеров", desc: "Прямые эфиры с любимыми создателями контента", icon: "Video" },
              { time: "20:00", title: "Розыгрыш призов", desc: "Супер-призы для самых активных участников", icon: "Gift" },
              { time: "21:00", title: "Финал", desc: "Грандиозное завершение и новогодний салют", icon: "Sparkles" },
            ].map((item, idx) => (
              <Card key={idx} className="bg-card/50 border-primary/30 p-6 hover:border-primary/60 transition-all duration-300 glass hover:glow">
                <div className="flex items-start gap-6">
                  <div className="text-4xl font-bold text-primary font-heading min-w-[100px]">
                    {item.time}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <Icon name={item.icon as any} className="text-secondary" size={28} />
                      <h3 className="text-2xl font-bold text-white font-heading">{item.title}</h3>
                    </div>
                    <p className="text-white/70">{item.desc}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="bloggers" className="py-24 bg-gradient-to-b from-transparent via-primary/5 to-transparent">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-heading font-black text-white mb-4 glow-text">
              Звездные блогеры
            </h2>
            <p className="text-xl text-white/60">С кем мы будем праздновать</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              { name: "Дилайт", subs: "1.0M", platform: "YouTube", color: "from-red-500 to-pink-500" },
              { name: "Coming Soon", subs: "???", platform: "YouTube", color: "from-primary to-secondary" },
              { name: "Coming Soon", subs: "???", platform: "Twitch", color: "from-purple-500 to-indigo-500" },
            ].map((blogger, idx) => (
              <Card key={idx} className="bg-card/50 border-primary/30 overflow-hidden hover:scale-105 transition-all duration-300 glass hover:glow group">
                <div className={`h-3 bg-gradient-to-r ${blogger.color}`}></div>
                <div className="p-8 text-center">
                  <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-4xl font-bold text-white glow">
                    {blogger.name[0]}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2 font-heading">{blogger.name}</h3>
                  <Badge className="mb-3 bg-accent/20 text-accent border-accent/50">
                    {blogger.platform}
                  </Badge>
                  <p className="text-white/60 flex items-center justify-center gap-2">
                    <Icon name="Users" size={18} />
                    {blogger.subs} подписчиков
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="prizes" className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-heading font-black text-white mb-4 glow-text">
              Эпичные призы
            </h2>
            <p className="text-xl text-white/60">Что можно выиграть</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[
              { icon: "Crown", title: "Премиум ранги", desc: "Эксклюзивные статусы на сервере", color: "text-yellow-400" },
              { icon: "Gem", title: "Игровая валюта", desc: "Тысячи монет для покупок", color: "text-cyan-400" },
              { icon: "Sword", title: "Уникальные предметы", desc: "Кастомное снаряжение и оружие", color: "text-red-400" },
              { icon: "Star", title: "Спец-доступы", desc: "Закрытые зоны и возможности", color: "text-purple-400" },
            ].map((prize, idx) => (
              <Card key={idx} className="bg-card/50 border-primary/30 p-8 text-center hover:scale-105 transition-all duration-300 glass hover:glow group">
                <Icon name={prize.icon as any} className={`mx-auto mb-4 ${prize.color} group-hover:animate-float`} size={56} />
                <h3 className="text-xl font-bold text-white mb-2 font-heading">{prize.title}</h3>
                <p className="text-white/60 text-sm">{prize.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="rules" className="py-24 bg-gradient-to-b from-transparent via-secondary/5 to-transparent">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-heading font-black text-white mb-4 glow-text">
              Правила участия
            </h2>
            <p className="text-xl text-white/60">Все просто и понятно</p>
          </div>
          
          <Card className="bg-card/50 border-primary/30 p-8 md:p-12 glass">
            <div className="space-y-6">
              {[
                "Подключитесь к серверу по адресу event.minely.net в указанное время",
                "Следите за объявлениями в чате и участвуйте в активностях",
                "Уважайте других игроков и соблюдайте правила сервера",
                "Запрещены читы, баги и любые нарушения",
                "Победители определяются честно по результатам конкурсов",
                "Призы выдаются автоматически или администрацией",
              ].map((rule, idx) => (
                <div key={idx} className="flex items-start gap-4 group hover:translate-x-2 transition-transform">
                  <div className="min-w-[40px] h-[40px] rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold glow">
                    {idx + 1}
                  </div>
                  <p className="text-white/80 text-lg pt-2">{rule}</p>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </section>

      <footer className="py-12 border-t border-primary/20">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-3xl font-heading font-bold text-white mb-4">
            Готовы к эпичному<br />новогоднему празднику?
          </h3>
          <Button size="lg" className="bg-gradient-to-r from-primary via-secondary to-accent hover:opacity-90 text-white font-bold text-xl px-12 py-6 glow mb-8">
            <Icon name="Rocket" className="mr-2" size={24} />
            Подключиться сейчас
          </Button>
          <p className="text-white/40 text-sm">
            © 2024 Minely.net • Новогодний ивент • 30 декабря 18:00
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
