# Hướng dẫn sử dụng thư mục `routers`

Thư mục `routers` chứa các thành phần định tuyến cho ứng dụng React.

## Sử dụng PrivateRouter

-   **PrivateRouter** giúp bảo vệ các route yêu cầu đăng nhập.
-   Để sử dụng, bọc các component cần bảo vệ bằng `PrivateRouter`:

```jsx
import PrivateRouter from './routers/PrivateRouter/PrivateRouter';
import ProtectedComponent from './components/ProtectedComponent';
import { Route } from 'react-router-dom';

<Route
	path='/protected'
	element={
		<PrivateRouter>
			<ProtectedComponent />
		</PrivateRouter>
	}
/>;
```

Nếu người dùng chưa đăng nhập, họ sẽ được chuyển hướng tới trang `/login`.

Xem thêm chi tiết trong file [`PrivateRouter.jsx`](./PrivateRouter/PrivateRouter.jsx).
