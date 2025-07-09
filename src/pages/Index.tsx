import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Index = () => {
  const steps = [
    {
      id: 1,
      icon: "Download",
      title: "Скачайте приложение",
      description:
        "Найдите приложение в App Store или Google Play и установите его на ваш телефон",
    },
    {
      id: 2,
      icon: "UserPlus",
      title: "Создайте аккаунт",
      description:
        "Зарегистрируйтесь с помощью email или номера телефона. Это займет всего пару минут",
    },
    {
      id: 3,
      icon: "Settings",
      title: "Настройте профиль",
      description:
        "Добавьте фото, укажите основную информацию и настройте уведомления по вашему желанию",
    },
    {
      id: 4,
      icon: "Play",
      title: "Начните использовать",
      description:
        "Изучите основные функции через интерактивный туториал и начните пользоваться приложением",
    },
    {
      id: 5,
      icon: "CheckCircle",
      title: "Готово!",
      description:
        "Теперь вы можете в полной мере использовать все возможности нашего приложения",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-8">
            <img
              src="/img/8b21e352-ecd2-44b9-99dc-974c52bbb864.jpg"
              alt="Мобильное приложение"
              className="w-48 h-48 object-cover rounded-3xl shadow-lg"
            />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
            Пошаговый гайд
            <br />
            <span className="text-primary">по мобильному приложению</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Простая инструкция, которая поможет вам быстро разобраться с
            основными функциями и начать пользоваться приложением уже сегодня
          </p>
        </div>

        {/* Steps Section */}
        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            {steps.map((step, index) => (
              <Card
                key={step.id}
                className="bg-card border-border hover:shadow-lg transition-all duration-300 hover:scale-[1.02]"
              >
                <CardContent className="p-8">
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center text-primary-foreground shadow-lg">
                        <Icon name={step.icon} size={28} />
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-4 mb-3">
                        <span className="text-sm font-medium text-muted-foreground bg-secondary px-3 py-1 rounded-full">
                          Шаг {step.id}
                        </span>
                      </div>
                      <h3 className="text-2xl font-semibold text-foreground mb-3">
                        {step.title}
                      </h3>
                      <p className="text-muted-foreground text-lg leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Download Section */}
        <div className="text-center mt-16">
          <Card className="bg-secondary border-border max-w-lg mx-auto">
            <CardContent className="p-8">
              <div className="mb-6">
                <Icon
                  name="Smartphone"
                  size={48}
                  className="mx-auto text-primary mb-4"
                />
                <h3 className="text-2xl font-semibold text-foreground mb-3">
                  Скачать приложение
                </h3>
                <p className="text-muted-foreground">
                  Доступно для iOS и Android устройств
                </p>
              </div>
              <div className="space-y-3">
                <Button
                  size="lg"
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-medium"
                >
                  <Icon name="Download" size={20} className="mr-2" />
                  Скачать для iOS
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground font-medium"
                >
                  <Icon name="Download" size={20} className="mr-2" />
                  Скачать для Android
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Index;
