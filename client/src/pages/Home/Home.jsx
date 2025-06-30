import imgPage1 from '/Home/page1/image.webp'
import imgPage2 from '/Home/page2/image.webp'
import './Home.css'
function Home() {
    return (
        <>
            <div className="home">
                <div className="home__page home__page1">
                    <div className="page1__container">
                        <h1 class="container__title">Muốn trở thành thành viên Ban Công Nghệ?</h1>
                        <p class="container__description">
                            Bạn đang tìm kiếm những giải pháp công nghệ đột phá, sáng tạo và hiệu quả?
                            Chúng tôi luôn sẵn sàng chia sẻ kiến thức, kinh nghiệm và các sản phẩm tiên tiến để giúp bạn nắm bắt xu hướng công nghệ mới nhất.
                        </p>
                        <a href="#" class="container__button">Liên hệ ngay</a>
                    </div>
                    <img className="page1__image" src={imgPage1} alt="" />
                </div>
                <div className="home__page home__page2">
                    <div className="page2__top">
                        <div class="page2__announcement">
                            <h1 class="announcement__title">Tuyển cộng tác viên ban công nghệ</h1>
                            <p class="announcement__description">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. <br />Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                            </p>
                        </div>
                        <img className="page2__image" src={imgPage2} alt="" />
                    </div>
                    <div className="page2__bottom">
                        <section class="page2__events">
                            <div className="events__list">
                                <div class="events__item">
                                    <h2 class="events__title">Sinh hoạt ban công nghệ ngày 20/12</h2>
                                </div>
                                <div class="events__item">
                                    <h2 class="events__title">Hỗ trợ đoàn khoa chuẩn bị hội thao cấp khoa</h2>
                                </div>
                                <div class="events__item">
                                    <h2 class="events__title">Nghỉ tết âm lịch 2025</h2>
                                </div>
                                <div class="events__item">
                                    <h2 class="events__title">Chuẩn bị thuyết trình ngày hội việc làm</h2>
                                </div>
                            </div>
                            <div class="events__actions">
                                <a href="#" class="events__action">Xem thông báo cũ hơn</a>
                            </div>
                        </section>

                    </div>
                </div>
            </div >
        </>
    )
}
export default Home;