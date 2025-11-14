import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { Badge } from "@/components/ui/badge";

const Index = () => {
  return (
    <div className="min-h-screen bg-[#0a0014] overflow-x-hidden relative">
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-96 h-96 bg-primary/20 rounded-full blur-[120px] animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/20 rounded-full blur-[120px] animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-accent/10 rounded-full blur-[120px] animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/20 via-transparent to-transparent"></div>
        <div className="absolute inset-0">
          {[...Array(100)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-primary rounded-full animate-glow-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 2}s`,
              }}
            ></div>
          ))}
        </div>
        
        <div className="container mx-auto px-4 relative z-10 text-center">
          <div className="space-y-8">
            <div className="animate-scale-in">
              <Badge className="mb-6 bg-accent/20 text-accent border-accent/50 text-lg px-8 py-3 glow animate-bounce-slow">
                <Icon name="Calendar" className="mr-2" size={20} />
                30 декабря 2024 • 18:00
              </Badge>
            </div>
            
            <h2 className="text-7xl md:text-9xl font-heading font-black text-white mb-8 glow-text animate-fade-in-up leading-tight">
              Новогодний<br />
              <span className="relative inline-block">
                <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent animate-shimmer bg-[length:200%_100%]">
                  ЭПИК ИВЕНТ
                </span>
                <div className="absolute -inset-2 bg-gradient-to-r from-primary/20 to-secondary/20 blur-2xl -z-10 animate-glow-pulse"></div>
              </span>
            </h2>
            
            <p className="text-2xl md:text-3xl text-white/80 mb-12 max-w-3xl mx-auto font-medium animate-fade-in" style={{ animationDelay: '0.2s' }}>
              Грандиозное событие с популярными блогерами,<br />
              невероятными призами и незабываемой атмосферой
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16 animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <Button size="lg" className="group bg-gradient-to-r from-primary via-secondary to-primary hover:opacity-90 text-white font-bold text-xl px-12 py-8 glow transform hover:scale-110 transition-all duration-300 bg-[length:200%_100%] animate-shimmer">
                <Icon name="Gamepad2" className="mr-3 group-hover:animate-bounce-slow" size={28} />
                event.minely.net
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-primary/50 text-primary hover:bg-primary/20 font-bold text-xl px-12 py-8 transform hover:scale-110 transition-all duration-300 group">
                <Icon name="Play" className="mr-3 group-hover:rotate-90 transition-transform" size={28} />
                Трейлер
              </Button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {[
                { icon: "Users", value: "1000+", label: "Участников", delay: "0.6s" },
                { icon: "Trophy", value: "50+", label: "Призов", delay: "0.8s" },
                { icon: "Sparkles", value: "∞", label: "Эмоций", delay: "1s" },
              ].map((stat, idx) => (
                <div 
                  key={idx} 
                  className="glass rounded-2xl p-8 hover:scale-110 transition-all duration-300 group animate-scale-in"
                  style={{ animationDelay: stat.delay }}
                >
                  <Icon name={stat.icon as any} className="mx-auto mb-4 text-primary group-hover:animate-bounce-slow" size={56} />
                  <h3 className="text-4xl font-black text-white mb-2 font-heading">{stat.value}</h3>
                  <p className="text-white/70 text-lg font-medium">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce-slow">
          <Icon name="ChevronDown" className="text-primary/60" size={48} />
        </div>
      </section>

      <section id="program" className="py-32 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20 animate-fade-in">
            <h2 className="text-6xl md:text-7xl font-heading font-black text-white mb-6 glow-text">
              Программа ивента
            </h2>
            <p className="text-2xl text-white/70 font-medium">Каждая минута будет незабываемой</p>
          </div>
          
          <div className="max-w-5xl mx-auto space-y-8">
            {[
              { time: "18:00", title: "Открытие", desc: "Грандиозное начало события с приветствием от команды", icon: "Rocket", color: "from-purple-500 to-pink-500" },
              { time: "18:30", title: "Мини-игры", desc: "Соревнования и челленджи с крутыми наградами", icon: "Gamepad2", color: "from-blue-500 to-cyan-500" },
              { time: "19:00", title: "Стримы блогеров", desc: "Прямые эфиры с любимыми создателями контента", icon: "Video", color: "from-red-500 to-orange-500" },
              { time: "20:00", title: "Розыгрыш призов", desc: "Супер-призы для самых активных участников", icon: "Gift", color: "from-green-500 to-emerald-500" },
              { time: "21:00", title: "Финал", desc: "Грандиозное завершение и новогодний салют", icon: "Sparkles", color: "from-yellow-500 to-amber-500" },
            ].map((item, idx) => (
              <Card 
                key={idx} 
                className="bg-card/50 border-primary/30 p-8 hover:border-primary/80 transition-all duration-500 glass hover:glow group overflow-hidden relative animate-slide-in-left"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <div className={`absolute inset-0 bg-gradient-to-r ${item.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                <div className="flex items-start gap-8 relative z-10">
                  <div className="text-5xl font-black text-primary font-heading min-w-[120px] group-hover:scale-125 transition-transform duration-300">
                    {item.time}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-3">
                      <div className={`p-3 rounded-xl bg-gradient-to-br ${item.color} group-hover:animate-bounce-slow`}>
                        <Icon name={item.icon as any} className="text-white" size={32} />
                      </div>
                      <h3 className="text-3xl font-black text-white font-heading group-hover:text-primary transition-colors">{item.title}</h3>
                    </div>
                    <p className="text-white/80 text-lg">{item.desc}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="bloggers" className="py-32 bg-gradient-to-b from-transparent via-primary/5 to-transparent relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20 animate-fade-in">
            <h2 className="text-6xl md:text-7xl font-heading font-black text-white mb-6 glow-text">
              Звездные блогеры
            </h2>
            <p className="text-2xl text-white/70 font-medium">С кем мы будем праздновать</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
            {[
              { name: "Дилайт", subs: "1.0M", platform: "YouTube", color: "from-red-500 to-pink-500", delay: "0s" },
              { name: "Coming Soon", subs: "???", platform: "YouTube", color: "from-primary to-secondary", delay: "0.2s" },
              { name: "Coming Soon", subs: "???", platform: "Twitch", color: "from-purple-500 to-indigo-500", delay: "0.4s" },
            ].map((blogger, idx) => (
              <Card 
                key={idx} 
                className="bg-card/50 border-primary/30 overflow-hidden hover:scale-110 transition-all duration-500 glass hover:glow group animate-scale-in"
                style={{ animationDelay: blogger.delay }}
              >
                <div className={`h-4 bg-gradient-to-r ${blogger.color} relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-white/30 animate-shimmer bg-[length:200%_100%]"></div>
                </div>
                <div className="p-10 text-center">
                  <div className="relative inline-block mb-6">
                    <div className={`w-32 h-32 rounded-full bg-gradient-to-br ${blogger.color} flex items-center justify-center text-5xl font-black text-white glow group-hover:animate-bounce-slow relative z-10`}>
                      {blogger.name[0]}
                    </div>
                    <div className={`absolute inset-0 bg-gradient-to-br ${blogger.color} rounded-full blur-xl opacity-50 group-hover:animate-glow-pulse`}></div>
                  </div>
                  <h3 className="text-3xl font-black text-white mb-3 font-heading group-hover:scale-110 transition-transform inline-block">{blogger.name}</h3>
                  <Badge className="mb-4 bg-accent/20 text-accent border-accent/50 text-base px-4 py-1">
                    {blogger.platform}
                  </Badge>
                  <p className="text-white/70 flex items-center justify-center gap-2 text-lg font-medium">
                    <Icon name="Users" size={22} />
                    {blogger.subs} подписчиков
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="prizes" className="py-32 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20 animate-fade-in">
            <h2 className="text-6xl md:text-7xl font-heading font-black text-white mb-6 glow-text">
              Эпичные призы
            </h2>
            <p className="text-2xl text-white/70 font-medium">Что можно выиграть</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {[
              { icon: "Crown", title: "Премиум ранги", desc: "Эксклюзивные статусы на сервере", color: "text-yellow-400", bg: "from-yellow-500/20 to-amber-500/20", delay: "0s" },
              { icon: "Gem", title: "Игровая валюта", desc: "Тысячи монет для покупок", color: "text-cyan-400", bg: "from-cyan-500/20 to-blue-500/20", delay: "0.1s" },
              { icon: "Sword", title: "Уникальные предметы", desc: "Кастомное снаряжение и оружие", color: "text-red-400", bg: "from-red-500/20 to-pink-500/20", delay: "0.2s" },
              { icon: "Star", title: "Спец-доступы", desc: "Закрытые зоны и возможности", color: "text-purple-400", bg: "from-purple-500/20 to-indigo-500/20", delay: "0.3s" },
            ].map((prize, idx) => (
              <Card 
                key={idx} 
                className={`bg-gradient-to-br ${prize.bg} border-primary/30 p-10 text-center hover:scale-110 transition-all duration-500 glass hover:glow group animate-fade-in-up relative overflow-hidden`}
                style={{ animationDelay: prize.delay }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <Icon name={prize.icon as any} className={`mx-auto mb-6 ${prize.color} group-hover:animate-float group-hover:scale-125 transition-transform duration-500 relative z-10`} size={72} />
                <h3 className="text-2xl font-black text-white mb-3 font-heading relative z-10">{prize.title}</h3>
                <p className="text-white/70 relative z-10">{prize.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="rules" className="py-32 bg-gradient-to-b from-transparent via-secondary/5 to-transparent relative">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-20 animate-fade-in">
            <h2 className="text-6xl md:text-7xl font-heading font-black text-white mb-6 glow-text">
              Правила участия
            </h2>
            <p className="text-2xl text-white/70 font-medium">Все просто и понятно</p>
          </div>
          
          <Card className="bg-card/50 border-primary/30 p-12 md:p-16 glass relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-[100px] animate-glow-pulse"></div>
            <div className="space-y-8 relative z-10">
              {[
                "Подключитесь к серверу по адресу event.minely.net в указанное время",
                "Следите за объявлениями в чате и участвуйте в активностях",
                "Уважайте других игроков и соблюдайте правила сервера",
                "Запрещены читы, баги и любые нарушения",
                "Победители определяются честно по результатам конкурсов",
                "Призы выдаются автоматически или администрацией",
              ].map((rule, idx) => (
                <div 
                  key={idx} 
                  className="flex items-start gap-6 group hover:translate-x-4 transition-all duration-300 animate-slide-in-left"
                  style={{ animationDelay: `${idx * 0.1}s` }}
                >
                  <div className="min-w-[56px] h-[56px] rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-black text-2xl glow group-hover:scale-125 group-hover:rotate-12 transition-all duration-300">
                    {idx + 1}
                  </div>
                  <p className="text-white/90 text-xl pt-3 font-medium">{rule}</p>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </section>

      <footer className="py-20 border-t border-primary/20 relative">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-5xl font-heading font-black text-white mb-8 glow-text animate-fade-in">
            Готовы к эпичному<br />новогоднему празднику?
          </h3>
          <Button 
            size="lg" 
            className="group bg-gradient-to-r from-primary via-secondary to-accent hover:opacity-90 text-white font-black text-2xl px-16 py-10 glow mb-12 transform hover:scale-110 transition-all duration-300 animate-scale-in bg-[length:200%_100%] animate-shimmer"
          >
            <Icon name="Rocket" className="mr-3 group-hover:animate-bounce-slow" size={32} />
            Подключиться сейчас
          </Button>
          <p className="text-white/50 text-base animate-fade-in">
            © 2024 Minely.net • Новогодний ивент • 30 декабря 18:00
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
