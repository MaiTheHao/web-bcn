# Hướng Dẫn Sử Dụng Thư Mục `layouts`

## 1. Mục đích

Thư mục `layouts` chứa các layout dùng để định nghĩa cấu trúc giao diện tổng thể cho ứng dụng React. Layout giúp tái sử dụng phần khung (header, footer, sidebar, ...) cho nhiều trang khác nhau.

## 2. Cách triển khai

-   Mỗi layout là một thư mục riêng, ví dụ: `AppLayout/`.
-   Bên trong mỗi thư mục layout sẽ có file chính, ví dụ: `AppLayout.tsx`, định nghĩa giao diện và logic của layout đó.

## 3. Cách hoạt động

-   Trong file `App.jsx`, layout được sử dụng làm phần tử cha cho các route con.
-   Khi người dùng truy cập vào một route, React Router sẽ render layout trước, sau đó render nội dung trang con bên trong layout.

Ví dụ:

```jsx
<Route path='/' element={<AppLayout />}>
	{/* Các trang sẽ được gắn vào đây */}
</Route>
```

## 4. Cách sử dụng

1. Tạo layout mới:

    - Tạo thư mục mới trong `layouts`, ví dụ: `MainLayout/`.
    - Thêm file `MainLayout.tsx` với nội dung layout mong muốn.

2. Sử dụng layout trong routing:
    - Import layout vào `App.jsx`.
    - Đặt layout làm phần tử cha cho các route con.

Ví dụ sử dụng `AppLayout`:

```jsx
import AppLayout from './layouts/AppLayout/AppLayout';

<Routes>
	<Route path='/' element={<AppLayout />}>
		{/* Các trang con */}
	</Route>
</Routes>;
```

## 5. Tham khảo

-   Xem chi tiết cách sử dụng trong file [`App.jsx`](../App.jsx).
-   Cấu trúc layout mẫu tại [`AppLayout/AppLayout.tsx`](./AppLayout/AppLayout.tsx).

---

> **Lưu ý:** Layout giúp quản lý giao diện tổng thể, tránh lặp lại code và dễ dàng mở rộng khi phát triển ứng dụng.
