export const lienHe = `
        <!-- Liên hệ -->
        <section id="lien-he-page" class="section bg-white">
            <div class="container">
                <h2 class="section-title">Liên hệ với chúng tôi</h2>
                <div class="grid-2" style="gap: 40px; margin-top: 30px;">
                    <!-- Thông tin liên hệ -->
                    <div>
                        <h3 style="color: var(--primary-strong); margin-bottom: 20px; font-size: 24px;">Thông tin Khoa</h3>
                        <p style="margin-bottom: 25px; color: var(--on-surface-variant); line-height: 1.6;">
                            Nếu bạn có bất kỳ câu hỏi nào về chương trình đào tạo, tuyển sinh hay hợp tác, đừng ngần ngại liên hệ với Khoa Điều Dưỡng - Kỹ Thuật Y Học. Chúng tôi luôn sẵn sàng hỗ trợ bạn!
                        </p>
                        
                        <div style="display: flex; align-items: flex-start; gap: 15px; margin-bottom: 20px;">
                            <div style="background-color: var(--primary-container); color: var(--primary); width: 45px; height: 45px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 20px; flex-shrink: 0;">
                                <i class="fas fa-map-marker-alt"></i>
                            </div>
                            <div>
                                <h4 style="margin-bottom: 5px; color: var(--on-surface);">Địa chỉ</h4>
                                <p style="color: var(--on-surface-variant); line-height: 1.4;">Khu đô thị Đại học Đà Nẵng, P. Hòa Quý, Q. Ngũ Hành Sơn, TP. Đà Nẵng</p>
                            </div>
                        </div>

                        <div style="display: flex; align-items: flex-start; gap: 15px; margin-bottom: 20px;">
                            <div style="background-color: var(--primary-container); color: var(--primary); width: 45px; height: 45px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 20px; flex-shrink: 0;">
                                <i class="fas fa-phone-alt"></i>
                            </div>
                            <div>
                                <h4 style="margin-bottom: 5px; color: var(--on-surface);">Điện thoại</h4>
                                <p style="color: var(--on-surface-variant);"><a href="tel:+842363xxxxxx" style="color: inherit; text-decoration: none;">(+84) 0236 3 xxx xxx</a></p>
                            </div>
                        </div>

                        <div style="display: flex; align-items: flex-start; gap: 15px; margin-bottom: 20px;">
                            <div style="background-color: var(--primary-container); color: var(--primary); width: 45px; height: 45px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 20px; flex-shrink: 0;">
                                <i class="fas fa-envelope"></i>
                            </div>
                            <div>
                                <h4 style="margin-bottom: 5px; color: var(--on-surface);">Email</h4>
                                <p style="color: var(--on-surface-variant);"><a href="mailto:khoadieuduong@smp.udn.vn" style="color: inherit; text-decoration: none;">khoadieuduong@smp.udn.vn</a></p>
                            </div>
                        </div>
                    </div>

                    <!-- Form Liên hệ -->
                    <div style="background-color: var(--surface); padding: 30px; border-radius: 12px; box-shadow: 0 4px 20px rgba(0,0,0,0.05); border: 1px solid var(--border);">
                        <h3 style="color: var(--primary-strong); margin-bottom: 20px; font-size: 24px;">Gửi tin nhắn</h3>
                        <form onsubmit="event.preventDefault(); alert('Cảm ơn bạn đã liên hệ! Tin nhắn của bạn đã được gửi đến Khoa.');">
                            <div style="margin-bottom: 15px;">
                                <label style="display: block; margin-bottom: 8px; font-weight: 500; color: var(--on-surface);">Họ và tên</label>
                                <input type="text" placeholder="Nhập họ tên của bạn" style="width: 100%; padding: 12px 15px; border: 1px solid var(--border); border-radius: 6px; font-family: inherit; font-size: 15px; box-sizing: border-box;" required>
                            </div>
                            <div style="margin-bottom: 15px;">
                                <label style="display: block; margin-bottom: 8px; font-weight: 500; color: var(--on-surface);">Email</label>
                                <input type="email" placeholder="Địa chỉ email của bạn" style="width: 100%; padding: 12px 15px; border: 1px solid var(--border); border-radius: 6px; font-family: inherit; font-size: 15px; box-sizing: border-box;" required>
                            </div>
                            <div style="margin-bottom: 20px;">
                                <label style="display: block; margin-bottom: 8px; font-weight: 500; color: var(--on-surface);">Nội dung</label>
                                <textarea placeholder="Bạn cần hỗ trợ gì?" rows="4" style="width: 100%; padding: 12px 15px; border: 1px solid var(--border); border-radius: 6px; font-family: inherit; font-size: 15px; resize: vertical; box-sizing: border-box;" required></textarea>
                            </div>
                            <button type="submit" style="background-color: var(--primary); color: white; border: none; padding: 12px 24px; border-radius: 6px; font-size: 16px; font-weight: bold; cursor: pointer; width: 100%; transition: background-color 0.3s; margin-top: 10px;">Gửi tin nhắn</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
`;
