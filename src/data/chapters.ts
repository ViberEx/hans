export interface Chapter {
  id: string;
  title: string;
  file: string;
}

export interface Section {
  title: string;
  chapters: Chapter[];
}

export const sections: Section[] = [
  {
    title: "开始使用",
    chapters: [
      { id: "introduction", title: "什么是 Lovable", file: "introduction.md" },
      { id: "quickstart", title: "快速开始", file: "quickstart.md" },
      { id: "first-project", title: "创建第一个项目", file: "first-project.md" },
    ],
  },
  {
    title: "核心功能",
    chapters: [
      { id: "prompting", title: "提示词技巧", file: "prompting.md" },
      { id: "visual-edit", title: "可视化编辑", file: "visual-edit.md" },
      { id: "design-system", title: "设计系统", file: "design-system.md" },
    ],
  },
  {
    title: "后端功能",
    chapters: [
      { id: "lovable-cloud", title: "Lovable Cloud", file: "lovable-cloud.md" },
      { id: "database", title: "数据库", file: "database.md" },
      { id: "authentication", title: "用户认证", file: "authentication.md" },
    ],
  },
  {
    title: "部署与集成",
    chapters: [
      { id: "deployment", title: "部署应用", file: "deployment.md" },
      { id: "github", title: "GitHub 集成", file: "github.md" },
      { id: "custom-domain", title: "自定义域名", file: "custom-domain.md" },
    ],
  },
];
