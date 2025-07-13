import imgPage1 from '/pages-img/Home/page1/image.webp';
import imgPage2 from '/pages-img/Home/page2/image.webp';
import './Home.css';
function Home() {
	return (
		<>
			<div className='home-page'>
				<div className='home-page__section home-page__section--first'>
					<div className='home-page__container'>
						<h1 className='home-page__title'>Muốn trở thành thành viên Ban Công Nghệ?</h1>
						<p className='home-page__description'>
							Bạn đang tìm kiếm những giải pháp công nghệ đột phá, sáng tạo và hiệu quả? Chúng tôi luôn sẵn sàng chia sẻ kiến thức, kinh nghiệm và các sản phẩm tiên tiến để giúp bạn nắm
							bắt xu hướng công nghệ mới nhất.
						</p>
						<a href='#' className='home-page__button'>
							Liên hệ ngay
						</a>
					</div>
					<img className='home-page__image' src={imgPage1} alt='' />
				</div>
				<div className='home-page__section home-page__section--second'>
					<div className='home-page__content'>
						<div className='home-page__announcement'>
							<h1 className='home-page__announcement-title'>Tuyển cộng tác viên ban công nghệ</h1>
							<p className='home-page__announcement-description'>
								Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown
								printer took a galley of type and scrambled it to make a type specimen book. <br />
								Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown
								printer took a galley of type and scrambled it to make a type specimen book.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
								been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
							</p>
						</div>
						<img className='home-page__announcement-image' src={imgPage2} alt='' />
					</div>
					{/* <div className='home-page__events'>
						<section className='home-page__events-section'>
							<div className='home-page__events-list'>
								<div className='home-page__events-item'>
									<h2 className='home-page__events-title'>Sinh hoạt ban công nghệ ngày 20/12</h2>
								</div>
								<div className='home-page__events-item'>
									<h2 className='home-page__events-title'>Hỗ trợ đoàn khoa chuẩn bị hội thao cấp khoa</h2>
								</div>
								<div className='home-page__events-item'>
									<h2 className='home-page__events-title'>Nghỉ tết âm lịch 2025</h2>
								</div>
								<div className='home-page__events-item'>
									<h2 className='home-page__events-title'>Chuẩn bị thuyết trình ngày hội việc làm</h2>
								</div>
							</div>
							<div className='home-page__events-actions'>
								<a href='#' className='home-page__events-action'>
									Xem thông báo cũ hơn
								</a>
							</div>
						</section>
					</div> */}
				</div>
			</div>
		</>
	);
}
export default Home;
