## 文件格式说明

```ts
components/
└── Brand/
    ├── Brand.tsx             // 主组件 UI 与 Hook 调用
    ├── types.ts              // 仅存放 Brand 相关的 TypeScript 类型/接口
    ├── Brand.module.css      // 组件样式（使用 CSS Modules 避免污染）
    ├── Brand.hooks.ts        // 如果有自定义 Hook 可以抽离
    └── index.ts              // 导出
```

### index.ts统一导出

`index.ts` 在组件文件夹中，通常被称为 **“桶文件” (Barrel File)**。它的核心作用就是**把文件夹内部的复杂路径“藏”起来**，让外部导入时更简洁。

针对你给出的 `Brand` 文件夹结构，一个完整的 `index.ts` 示例如下：

```typescript
// components/Brand/index.ts

// 1. 重新导出默认组件（最核心的用法）
// 这样外部可以直接 import Brand from './components/Brand'
export { default } from './Brand';

// 2. 重新导出组件的 Props 类型（方便外部使用类型）
// 如果 Brand.tsx 中有 export interface BrandProps
export type { BrandProps } from './Brand';

// 3. （可选）如果该文件夹下有多个子组件或工具函数，也可以在这里统一导出
// export { default as BrandLogo } from './BrandLogo';
// export { formatBrandName } from './utils';
```

---

### 🔍 实际效果对比

**没有 `index.ts` 时（导入路径繁琐）：**
```tsx
// 外部文件需要深入到具体的 .tsx 文件
import Brand from './components/Brand/Brand';
import type { BrandProps } from './components/Brand/Brand';
```

**有了 `index.ts` 后（导入路径简洁）：**
```tsx
// 直接引入文件夹，系统会自动读取 index.ts
import Brand from './components/Brand';
// 甚至可以导入同名类型
import type { BrandProps } from './components/Brand';
```

---

### 💡 完整示例代码（配套文件）

为了让 `index.ts` 生效，你的 `Brand.tsx` 需要做对应的导出：

**`Brand.tsx` 内容：**
```tsx
import React from 'react';
import styles from './Brand.module.css';

// 这里导出类型，供 index.ts 转发
export interface BrandProps {
  name: string;
  logo?: string;
}

const Brand: React.FC<BrandProps> = ({ name, logo }) => {
  return <div className={styles.brand}>{name}</div>;
};

// 这里导出默认组件
export default Brand;
```

---

### ✅ 这样做的好处

| 优势         | 说明                                                         |
| :----------- | :----------------------------------------------------------- |
| **路径更短** | 从 `./Brand/Brand` 缩短为 `./Brand`，减少了路径噪音。        |
| **封装性**   | 如果未来把 `Brand.tsx` 重命名为 `Brand.component.tsx`，只需要修改 `index.ts`，所有外部引用的地方都不用动，非常适合重构。 |
| **统一出口** | 如果一个文件夹下有多个组件（比如 `Brand` 和 `BrandLogo`），外部只需从同一个 `index` 导入，而不是记住多个散落路径。 |

---

### ⚠️ 注意事项

- **保持简洁**：`index.ts` 只适合做 **“转发”**，不要在里面写业务逻辑，否则会失去文件夹结构清晰的意义。
- **不要过度使用**：对于只有一个文件的简单组件，这个 `index.ts` 是可选的。加不加看你个人对导入路径简洁度的偏好。如果项目里大量使用，它会显得很整洁；如果觉得多余，省略它完全不影响项目运行。



## DTO放置位置

```ts
src/
├── api/
│   ├── client.ts          # axios/fetch 实例
│   ├── user/
│   │   ├── index.ts       # API 请求方法 (reqUserLogin, reqUserInfo...)
│   │   ├── types.ts       # 👈 放 UserLoginDTO, UserInfoDTO, UserRegisterDTO
│   │   └── schema.ts      # (可选) 放 Zod 校验规则
│   └── product/ ...
├── store/                 # Zustand 仓库 (消费 DTO，可能转换成 VO)
└── components/ ...
```





## 全局状态管理：Zustand





## React Router v6+





## UI 与样式：Tailwind CSS





## 表单处理：React Hook Form + Zod





## 组件库：shadcn/ui



## 拖拽库：dnd-kit





## 与系统的差异

### THCarousel没有原点指示器了
