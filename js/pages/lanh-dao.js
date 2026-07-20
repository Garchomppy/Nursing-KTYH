import { t } from "../i18n.js";

export function lanhDao() {
  return `
        <!-- Ban lãnh đạo -->
        <section id="lanh-dao" class="section bg-muted">
            <div class="container">
                <h2 class="section-title">${t("leadership.title")}</h2>
                <div class="grid-3">
                    <!-- Leader 1 -->
                    <div class="card profile-card">
                        <div class="avatar placeholder-avatar"></div>
                        <h3>${t("leadership.leader1.name")}</h3>
                        <p class="role">${t("leadership.role.head")}</p>
                        <a href="#" class="btn-link">${t("leadership.view_profile")} &rarr;</a>
                    </div>
                    <!-- Leader 2 -->
                    <div class="card profile-card">
                        <div class="avatar placeholder-avatar"></div>
                        <h3>${t("leadership.leader2.name")}</h3>
                        <p class="role">${t("leadership.role.deputy")}</p>
                        <a href="#" class="btn-link">${t("leadership.view_profile")} &rarr;</a>
                    </div>
                    <!-- Leader 3 -->
                    <div class="card profile-card">
                        <div class="avatar placeholder-avatar"></div>
                        <h3>${t("leadership.leader3.name")}</h3>
                        <p class="role">${t("leadership.role.deputy")}</p>
                        <a href="#" class="btn-link">${t("leadership.view_profile")} &rarr;</a>
                    </div>
                </div>
            </div>
        </section>
`;
}
