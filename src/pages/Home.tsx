import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Rocket, Code2, Users } from "lucide-react";

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="container max-w-6xl py-16 px-6 text-center">
        <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
          Lovable 中文社区
        </h1>
        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          欢迎来到 Lovable 中文入门指南！这里有最全面的中文教程，帮助您快速掌握 Lovable
          的强大功能，轻松构建专业的 Web 应用。
        </p>
        <div className="flex gap-4 justify-center">
          <Link to="/docs/introduction">
            <Button size="lg" className="gap-2">
              <BookOpen className="h-5 w-5" />
              开始学习
            </Button>
          </Link>
          <a href="https://lovable.dev" target="_blank" rel="noopener noreferrer">
            <Button variant="outline" size="lg" className="gap-2">
              <Rocket className="h-5 w-5" />
              访问 Lovable
            </Button>
          </a>
        </div>
      </section>

      {/* Features Section */}
      <section className="container max-w-6xl py-16 px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="border-primary/20 hover:border-primary/40 transition-colors">
            <CardHeader>
              <BookOpen className="h-10 w-10 text-primary mb-2" />
              <CardTitle>完整教程</CardTitle>
              <CardDescription>
                从零基础到高级功能，系统化的中文学习路径
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="border-primary/20 hover:border-primary/40 transition-colors">
            <CardHeader>
              <Code2 className="h-10 w-10 text-primary mb-2" />
              <CardTitle>实战案例</CardTitle>
              <CardDescription>
                丰富的实际应用案例，快速上手真实项目开发
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="border-primary/20 hover:border-primary/40 transition-colors">
            <CardHeader>
              <Rocket className="h-10 w-10 text-primary mb-2" />
              <CardTitle>快速上手</CardTitle>
              <CardDescription>
                简单易懂的步骤说明，10 分钟开始您的第一个项目
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="border-primary/20 hover:border-primary/40 transition-colors">
            <CardHeader>
              <Users className="h-10 w-10 text-primary mb-2" />
              <CardTitle>社区支持</CardTitle>
              <CardDescription>
                活跃的中文社区，随时获得帮助和交流经验
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </section>

      {/* Quick Start Section */}
      <section className="container max-w-6xl py-16 px-6">
        <h2 className="text-3xl font-bold mb-8 text-center">学习路径</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold">
                  1
                </span>
                入门基础
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-muted-foreground">
                <li>• 了解 Lovable 是什么</li>
                <li>• 创建您的第一个项目</li>
                <li>• 学习提示词技巧</li>
                <li>• 使用可视化编辑</li>
              </ul>
              <Link to="/docs/introduction">
                <Button variant="link" className="mt-4 px-0">
                  开始学习 →
                </Button>
              </Link>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold">
                  2
                </span>
                核心功能
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-muted-foreground">
                <li>• 掌握设计系统</li>
                <li>• 添加 Lovable Cloud</li>
                <li>• 实现用户认证</li>
                <li>• 管理数据库</li>
              </ul>
              <Link to="/docs/design-system">
                <Button variant="link" className="mt-4 px-0">
                  探索功能 →
                </Button>
              </Link>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold">
                  3
                </span>
                部署上线
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-muted-foreground">
                <li>• 发布到生产环境</li>
                <li>• 连接 GitHub 仓库</li>
                <li>• 配置自定义域名</li>
                <li>• 持续优化迭代</li>
              </ul>
              <Link to="/docs/deployment">
                <Button variant="link" className="mt-4 px-0">
                  准备部署 →
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Home;
