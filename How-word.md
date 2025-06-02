# Hướng dẫn Dev Frontend - Monorepo với pnpm

## 🏗️ Giới thiệu về Monorepo

**Monorepo** là cách tổ chức code với nhiều packages/projects trong một repository duy nhất. Trong dự án này:

-   `client/` - React frontend với Vite
-   `server/` - Express backend với TypeScript
-   Shared dependencies và scripts ở root

**Lợi ích:**

-   Dễ dàng chia sẻ code giữa frontend và backend
-   Build và deploy thống nhất
-   Quản lý dependencies tập trung
-   Commit đồng bộ giữa các service

## 💻 Làm việc với pnpm

### Workspace Commands

#### 1. Cài đặt packages

```bash
# Cài cho workspace cụ thể
pnpm --filter client add react-router-dom
pnpm --filter server add express-validator

# Cài dev dependencies
pnpm --filter client add -D @types/react
pnpm --filter server add -D nodemon

# Cài cho tất cả workspaces
pnpm add -w lodash
```

#### 2. Chạy scripts

```bash
# Chạy script của workspace cụ thể
pnpm --filter client dev
pnpm --filter server build

# Chạy script cho tất cả workspaces
pnpm --recursive run test
pnpm --parallel dev:client dev:server
```

#### 3. Gỡ packages

```bash
# Gỡ khỏi workspace cụ thể
pnpm --filter client remove axios
pnpm --filter server remove cors

# Gỡ khỏi root
pnpm remove -w some-package
```

### Filter Patterns

```bash
# Theo tên workspace
pnpm --filter client <command>
pnpm --filter server <command>

# Theo pattern
pnpm --filter "*client*" <command>
pnpm --filter "client..." <command>
pnpm --filter "...client" <command>
```

## 🔄 Workflow phát triển

### 1. Daily Development

```bash
git pull origin main
pnpm install
pnpm dev
```

-   Browser tự mở http://localhost:5173 (client)
-   Server chạy http://localhost:3000

### 2. Thêm component mới

```bash
cd client/src/components
mkdir NewComponent
touch NewComponent/NewComponent.jsx
touch NewComponent/NewComponent.css
```

### 3. Thêm dependencies mới

```bash
pnpm --filter client add @mui/material @emotion/react @emotion/styled
pnpm --filter client add -D @types/some-library
```

### 4. Testing workflow

```bash
pnpm --filter client lint
pnpm build
pnpm --filter client preview
```

## 📝 Commands thường dùng

### Development Commands

```bash
pnpm dev
pnpm dev:client
pnpm dev:server
pnpm build
pnpm clean
```

### Package Management

```bash
pnpm --filter client add <package-name>
pnpm --filter client add -D <package-name>
pnpm update --recursive
pnpm outdated --recursive
```

### Workspace Info

```bash
pnpm list --depth=0
pnpm why <package-name>
pnpm run
pnpm --filter client run
```

## 🔧 Troubleshooting

### 1. Node modules issues

```bash
pnpm clean
pnpm install
rm pnpm-lock.yaml
pnpm install
```

### 2. Port conflicts

```bash
# Nếu port 5173 bị chiếm (client), Vite sẽ tự động đổi port
# Nếu port 3000 bị chiếm (server)
PORT=3001 pnpm dev:server
```

### 3. TypeScript errors

```bash
pnpm --filter server run build
pnpm --filter server exec tsc --build --clean
```

### 4. Git issues với monorepo

```bash
git add client/
git commit -m "feat(client): add new component"
git add .
git commit -m "feat: update both client and server"
```

### 5. pnpm cache issues

```bash
pnpm store prune
pnpm store status
```

## 🎯 Best Practices

### 1. Commit Convention

```
feat(client): add user authentication component
fix(server): resolve CORS issue
docs: update development guide
refactor(client): restructure components folder
```

### 2. Dependency Management

-   Luôn dùng `--filter` khi add packages cho workspace cụ thể
-   Shared utilities nên để ở root workspace
-   Dev dependencies để ở workspace tương ứng

### 3. Development Workflow

-   Luôn `pnpm install` sau khi pull code mới
-   Test build trước khi commit
-   Dùng `pnpm dev` để chạy full stack development

### 4. File Organization

```
client/src/
├── components/
│   └── ComponentName/
│       ├── ComponentName.jsx
│       └── ComponentName.css
├── pages/
├── hooks/
├── services/
├── styles/
└── utils/
```

## 🔗 Useful Links

-   [pnpm Documentation](https://pnpm.io/)
-   [pnpm Workspaces](https://pnpm.io/workspaces)
-   [Vite Documentation](https://vitejs.dev/)
-   [React Documentation](https://react.dev/)

## 📞 Support

Nếu gặp vấn đề:

1. Xem troubleshooting section trước
2. Search issues trong repository
3. Hỏi trong group chat team
4. Tạo issue mới với mô tả chi tiết

---

**Happy coding! 🚀**
