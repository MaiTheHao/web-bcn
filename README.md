# 🚀 Web Ban Công Nghệ - Monorepo

Chào mừng đến với dự án Web Ban Công Nghệ! Đây là monorepo chứa cả frontend (React) và backend (Express) cho website chính thức của Ban Công Nghệ.

## 📁 Cấu trúc Project

```
Web BCN/
├── client/          # Frontend React + Vite
├── server/          # Backend Express + TypeScript
├── package.json     # Root workspace config
└── README.md        # File này đây
```

## 🛠️ Yêu cầu hệ thống

-   **Node.js**: >= 20.0.0
-   **pnpm**: >= 8.0.0 (bắt buộc, không dùng npm hay yarn)
-   **Git**: để clone repo về

## 🚀 Hướng dẫn Setup cho Dev

### 1. Clone repo về máy

```bash
git clone <repository-url>
cd "Web BCN"
```

### 2. Cài đặt pnpm (nếu chưa có)

```bash
# Cài pnpm globally
npm install -g pnpm
```

### 3. Install dependencies cho toàn bộ workspace

```bash
# Cài tất cả dependencies cho cả client và server
pnpm install
```

### 4. Chạy development server

```bash
# Chạy cả client và server cùng lúc
pnpm dev

# Hoặc chạy riêng từng service:
pnpm dev:client    # Chỉ chạy frontend (port 5173)
pnpm dev:server    # Chỉ chạy backend (port 3000)
```

### 5. Truy cập ứng dụng

-   **Frontend**: http://localhost:5173
-   **Backend API**: http://localhost:3000

## 📝 Scripts có sẵn

| Command             | Mô tả                                    |
| ------------------- | ---------------------------------------- |
| `pnpm dev`          | Chạy cả client và server đồng thời       |
| `pnpm dev:client`   | Chỉ chạy React development server        |
| `pnpm dev:server`   | Chỉ chạy Express server với hot reload   |
| `pnpm build`        | Build cả client và server cho production |
| `pnpm build:client` | Build React app                          |
| `pnpm build:server` | Compile TypeScript server                |
| `pnpm lint`         | Chạy ESLint cho toàn bộ codebase         |
| `pnpm clean`        | Xóa node_modules và dist folders         |

## 🔧 Làm việc với Workspace

### Thêm dependency cho client:

```bash
pnpm add <package-name> --filter client
```

### Thêm dependency cho server:

```bash
pnpm add <package-name> --filter server
```

### Thêm dev dependency cho workspace root:

```bash
pnpm add -D <package-name> -w
```

## 🎯 Tech Stack

### Frontend (Client)

-   **React 19** - UI framework
-   **Vite** - Build tool hiệu quả
-   **React Router Dom** - Client-side routing
-   **FontAwesome** - Icons
-   **ESLint** - Code quality

### Backend (Server)

-   **Express 5** - Web framework
-   **TypeScript** - Type safety
-   **tsx** - TypeScript execution với hot reload

## 🐛 Troubleshooting

### Lỗi "command not found: pnpm"

```bash
npm install -g pnpm
```

### Lỗi port đã được sử dụng

```bash
# Kill process đang chạy trên port
npx kill-port 5173  # cho client
npx kill-port 3000  # cho server
```

### Lỗi dependencies không tương thích

```bash
pnpm clean
pnpm install
```

## 🤝 Contributing

1. Tạo branch mới: `git checkout -b feature/ten-feature`
2. Commit changes: `git commit -m "feat: thêm feature xyz"`
3. Push lên branch: `git push origin feature/ten-feature`
4. Tạo Pull Request

## 📞 Liên hệ

Có vấn đề gì thì hỏi team Ban Công Nghệ nhé!

---

**Happy coding! 🎉**
