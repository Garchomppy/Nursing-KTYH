import { t } from "../i18n.js";

if (!window.submitContactForm) {
  window.submitContactForm = function (event, form) {
    event.preventDefault();
    const btn = form.querySelector("button");
    btn.disabled = true;
    const prevText = btn.innerText;
    btn.innerText = "Đang gửi...";
    fetch("https://sheetdb.io/api/v1/cw54bknpl9sq4", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        data: [
          {
            "Họ và tên": form.name.value,
            Email: form.email.value,
            "Nội dung": form.message.value,
            Date: new Date().toLocaleString(),
          },
        ],
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        const overlay = document.createElement('div');
        overlay.style.position = 'fixed';
        overlay.style.top = '0';
        overlay.style.left = '0';
        overlay.style.width = '100%';
        overlay.style.height = '100%';
        overlay.style.backgroundColor = 'rgba(0,0,0,0.5)';
        overlay.style.display = 'flex';
        overlay.style.alignItems = 'center';
        overlay.style.justifyContent = 'center';
        overlay.style.zIndex = '9999';

        const modal = document.createElement('div');
        modal.style.backgroundColor = '#fff';
        modal.style.padding = '30px';
        modal.style.borderRadius = '12px';
        modal.style.boxShadow = '0 10px 25px rgba(0,0,0,0.1)';
        modal.style.maxWidth = '400px';
        modal.style.width = '90%';
        modal.style.textAlign = 'center';

        const icon = document.createElement('div');
        icon.innerHTML = '<i class="fas fa-check-circle"></i>';
        icon.style.color = '#4CAF50';
        icon.style.fontSize = '48px';
        icon.style.marginBottom = '15px';

        const text = document.createElement('p');
        text.textContent = form.dataset.successMsg;
        text.style.fontSize = '16px';
        text.style.color = '#333';
        text.style.marginBottom = '20px';
        text.style.lineHeight = '1.5';

        const closeBtn = document.createElement('button');
        closeBtn.textContent = 'Đóng';
        closeBtn.style.backgroundColor = 'var(--primary, #0056b3)';
        closeBtn.style.color = 'white';
        closeBtn.style.border = 'none';
        closeBtn.style.padding = '10px 24px';
        closeBtn.style.borderRadius = '6px';
        closeBtn.style.fontSize = '15px';
        closeBtn.style.cursor = 'pointer';
        
        closeBtn.onclick = () => document.body.removeChild(overlay);

        modal.appendChild(icon);
        modal.appendChild(text);
        modal.appendChild(closeBtn);
        overlay.appendChild(modal);
        document.body.appendChild(overlay);

        form.reset();
      })
      .catch((err) => {
        console.error(err);
        alert("Có lỗi xảy ra, vui lòng thử lại sau.");
      })
      .finally(() => {
        btn.disabled = false;
        btn.innerText = prevText;
      });
  };
}

export function lienHe() {
  return `
        <!-- Liên hệ -->
        <section id="lien-he-page" class="section bg-white">
            <div class="container">
                <h2 class="section-title">${t("contact.title")}</h2>
                <div class="grid-2" style="gap: 40px; margin-top: 30px;">
                    <!-- Thông tin liên hệ -->
                    <div>
                        <h3 style="color: var(--primary-strong); margin-bottom: 20px; font-size: 24px;">${t("contact.info_title")}</h3>
                        <p style="margin-bottom: 25px; color: var(--on-surface-variant); line-height: 1.6;">
                            ${t("contact.intro")}
                        </p>

                        <div style="display: flex; align-items: flex-start; gap: 15px; margin-bottom: 20px;">
                            <div style="background-color: var(--primary-container); color: var(--primary); width: 45px; height: 45px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 20px; flex-shrink: 0;">
                                <i class="fas fa-map-marker-alt"></i>
                            </div>
                            <div>
                                <h4 style="margin-bottom: 5px; color: var(--on-surface);">${t("contact.address.label")}</h4>
                                <p style="color: var(--on-surface-variant); line-height: 1.4;">${t("contact.address.text")}</p>
                            </div>
                        </div>

                        <div style="display: flex; align-items: flex-start; gap: 15px; margin-bottom: 20px;">
                            <div style="background-color: var(--primary-container); color: var(--primary); width: 45px; height: 45px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 20px; flex-shrink: 0;">
                                <i class="fas fa-phone-alt"></i>
                            </div>
                            <div>
                                <h4 style="margin-bottom: 5px; color: var(--on-surface);">${t("contact.phone.label")}</h4>
                                <p style="color: var(--on-surface-variant);"><a href="tel:+842367109357" style="color: inherit; text-decoration: none;">(+84) 02367109357</a></p>
                            </div>
                        </div>

                        <div style="display: flex; align-items: flex-start; gap: 15px; margin-bottom: 20px;">
                            <div style="background-color: var(--primary-container); color: var(--primary); width: 45px; height: 45px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 20px; flex-shrink: 0;">
                                <i class="fas fa-envelope"></i>
                            </div>
                            <div>
                                <h4 style="margin-bottom: 5px; color: var(--on-surface);">${t("contact.email.label")}</h4>
                                <p style="color: var(--on-surface-variant);"><a href="mailto:khoa.dieuduong.ktyh@smp.udn.vn" style="color: inherit; text-decoration: none;">khoa.dieuduong.ktyh@smp.udn.vn</a></p>
                            </div>
                        </div>
                    </div>

                    <!-- Form Liên hệ -->
                    <div style="background-color: var(--surface); padding: 30px; border-radius: 12px; box-shadow: 0 4px 20px rgba(0,0,0,0.05); border: 1px solid var(--border);">
                        <h3 style="color: var(--primary-strong); margin-bottom: 20px; font-size: 24px;">${t("contact.form_title")}</h3>
                        <form onsubmit="window.submitContactForm(event, this)" data-success-msg="${t("contact.form.success")}">
                            <div style="margin-bottom: 15px;">
                                <label style="display: block; margin-bottom: 8px; font-weight: 500; color: var(--on-surface);">${t("contact.form.name_label")}</label>
                                <input type="text" name="name" placeholder="${t("contact.form.name_placeholder")}" style="width: 100%; padding: 12px 15px; border: 1px solid var(--border); border-radius: 6px; font-family: inherit; font-size: 15px; box-sizing: border-box;" required>
                            </div>
                            <div style="margin-bottom: 15px;">
                                <label style="display: block; margin-bottom: 8px; font-weight: 500; color: var(--on-surface);">${t("contact.form.email_label")}</label>
                                <input type="email" name="email" placeholder="${t("contact.form.email_placeholder")}" style="width: 100%; padding: 12px 15px; border: 1px solid var(--border); border-radius: 6px; font-family: inherit; font-size: 15px; box-sizing: border-box;" required>
                            </div>
                            <div style="margin-bottom: 20px;">
                                <label style="display: block; margin-bottom: 8px; font-weight: 500; color: var(--on-surface);">${t("contact.form.message_label")}</label>
                                <textarea name="message" placeholder="${t("contact.form.message_placeholder")}" rows="4" style="width: 100%; padding: 12px 15px; border: 1px solid var(--border); border-radius: 6px; font-family: inherit; font-size: 15px; resize: vertical; box-sizing: border-box;" required></textarea>
                            </div>
                            <button type="submit" style="background-color: var(--primary); color: white; border: none; padding: 12px 24px; border-radius: 6px; font-size: 16px; font-weight: bold; cursor: pointer; width: 100%; transition: background-color 0.3s; margin-top: 10px;">${t("contact.form.submit")}</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
`;
}
