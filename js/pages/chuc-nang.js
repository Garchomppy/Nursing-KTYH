import { t } from "../i18n.js";

export function chucNang() {
  return `
        <style>
            #chuc-nang .func-list-decimal li::marker {
                font-weight: bold;
                color:#000000;
            }
        </style>
        <!-- Chức năng - Nhiệm vụ -->
        <section id="chuc-nang" class="section bg-muted">
            <div class="container">
                <h2 class="section-title">${t("func.title")}</h2>
                <div class="content-block" style="max-width: 1000px;">
                    <div  style="margin-bottom: 30px;">
                        <h3 style="color: var(--secondary); font-size: 28px; margin-bottom: 15px;">${t("func.section1.title")}</h3>
                        <p style="text-align: justify; margin-bottom: 12px; font-size: 16px;">${t("func.section1.intro")}</p>
                    </div>

                    <div >
                        <h3 style="color: var(--secondary); font-size: 28px; margin-bottom: 15px;">${t("func.section2.title")}</h3>
                        <ul class="func-list-decimal" style="text-align: justify; list-style-type: decimal; margin-left: 20px; font-size: 16px;">
                            <li style="margin-bottom: 14px;"><strong>${t("func.section2.item1.label")}</strong> ${t("func.section2.item1.text")}</li>
                            <li style="margin-bottom: 14px;"><strong>${t("func.section2.item2.label")}</strong> ${t("func.section2.item2.text")}</li>
                            <li style="margin-bottom: 14px;"><strong>${t("func.section2.item3.label")}</strong> ${t("func.section2.item3.text")}</li>
                            <li style="margin-bottom: 14px;"><strong>${t("func.section2.item4.label")}</strong> ${t("func.section2.item4.text")}</li>
                            <li style="margin-bottom: 14px;"><strong>${t("func.section2.item5.label")}</strong> ${t("func.section2.item5.text")}</li>
                            <li style="margin-bottom: 14px;"><strong>${t("func.section2.item6.label")}</strong> ${t("func.section2.item6.text")}</li>
                            <li style="margin-bottom: 14px;"><strong>${t("func.section2.item7.label")}</strong> ${t("func.section2.item7.text")}</li>
                            <li style="margin-bottom: 14px;"><strong>${t("func.section2.item8.label")}</strong> ${t("func.section2.item8.text")}</li>
                            <li style="margin-bottom: 14px;"><strong>${t("func.section2.item9.label")}</strong> ${t("func.section2.item9.text")}</li>

                            </ul>
                    </div>
                </div>
            </div>
        </section>
`;
}
