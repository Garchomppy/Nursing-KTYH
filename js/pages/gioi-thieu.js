import { t } from "../i18n.js";

export function gioiThieu() {
  return `
        <!-- Giới thiệu chung -->
        <section id="gioi-thieu" class="section bg-white">
            <div class="container">
                <h2 class="section-title">${t("about.title")}</h2>
                <div class="content-block">
                    <p>${t("about.p1")}</p>

                    <div style="text-align: center; margin-bottom: 40px;">
                        <img src="./assets/images/2.%20GV%20khoa%202026-2.jpg" alt="${t("about.image_alt")}" style="max-width: 100%; height: auto; border-radius: 8px; box-shadow: 0 4px 12px rgba(0,0,0,0.1);">
                    </div>

                    <p>${t("about.p2")}</p>
                    <p>${t("about.p3")}</p>
                    <p>${t("about.p4")}</p>
                </div>
            </div>
        </section>
`;
}
