import { t } from "../i18n.js";

export function soDo() {
  return `
        <!-- Sơ đồ cơ cấu tổ chức -->
        <style>
        .org-tree-container {
            width: 100%;
            padding: 40px 15px 60px;
            box-sizing: border-box;
            font-family: var(--font-primary);
        }

        .custom-node {
            border: 2px solid var(--primary, #168f99);
            padding: 12px 18px;
            border-radius: 8px;
            background: #ffffff;
            font-weight: 500;
            text-align: center;
            position: relative;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
            font-size: 15px;
            box-sizing: border-box;
        }

        .custom-node.main {
            font-weight: 700;
            color: var(--primary-strong, #1e3a8a);
            font-size: 16px;
        }

        a.custom-node {
            display: block;
            color: inherit;
            text-decoration: none;
            transition: all 0.2s ease;
        }

        a.custom-node:hover {
            background-color: var(--primary, #168f99);
            color: #ffffff !important;
            transform: translateY(-2px);
            box-shadow: 0 6px 16px rgba(22, 143, 153, 0.25);
        }

        a.custom-node:focus-visible {
            outline: 3px solid rgba(22, 143, 153, 0.35);
            outline-offset: 3px;
        }

        /* Compact Layout without huge gaps */
        .org-layout {
            display: flex;
            flex-direction: column;
            align-items: center;
            width: 100%;
            max-width: 720px;
            margin: 0 auto;
            box-sizing: border-box;
        }

        /* Top Row Region */
        .org-top-region {
            position: relative;
            display: flex;
            justify-content: center;
            align-items: flex-start;
            gap: 50px;
            width: 100%;
        }

        .org-left-side {
            width: 200px;
            display: flex;
            flex-direction: column;
            align-items: center;
            flex-shrink: 0;
            z-index: 2;
        }

        .org-sub-list {
            margin-top: 10px;
            background: #f8fafc;
            border: 1px dashed var(--primary, #168f99);
            border-radius: 8px;
            padding: 10px 14px;
            width: 100%;
            box-sizing: border-box;
        }

        .org-sub-item {
            font-size: 14px;
            color: #334155;
            padding: 4px 0;
            text-align: left;
            font-weight: 500;
        }

        .leadership-wrapper {
            width: 460px;
            display: flex;
            justify-content: center;
            z-index: 2;
        }

        .leadership-btn {
            width: 220px;
        }

        /* ABSOLUTE ARROW LINE BRINGING THE TWO BOXES CLOSE TOGETHER */
        .connector-arrow-line {
            position: absolute;
            top: 23px;
            left: 200px;
            width: 170px;
            height: 2px;
            background-color: var(--primary, #168f99);
            z-index: 1;
        }

        .connector-arrow-line::before,
        .connector-arrow-line::after {
            content: '';
            position: absolute;
            top: -4px;
            width: 0;
            height: 0;
            border-style: solid;
        }

        .connector-arrow-line::before {
            left: -1px;
            border-width: 5px 8px 5px 0;
            border-color: transparent var(--primary, #168f99) transparent transparent;
        }

        .connector-arrow-line::after {
            right: -1px;
            border-width: 5px 0 5px 8px;
            border-color: transparent transparent transparent var(--primary, #168f99);
        }

        /* Lower Tree Region (Spine & Departments) */
        .org-tree-region {
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: flex-end;
        }

        .org-right-tree {
            width: 460px;
            display: flex;
            flex-direction: column;
            align-items: center;
        }

        .spine-line {
            width: 2px;
            height: 40px;
            background-color: var(--primary, #168f99);
        }

        .branch-line {
            width: 260px;
            height: 2px;
            background-color: var(--primary, #168f99);
        }

        .dept-columns {
            display: flex;
            justify-content: space-between;
            width: 100%;
            max-width: 460px;
        }

        .dept-col {
            display: flex;
            flex-direction: column;
            align-items: center;
            width: 220px;
        }

        .line-in-col {
            width: 2px;
            height: 25px;
            background-color: var(--primary, #168f99);
        }

        .line-down {
            width: 2px;
            height: 25px;
            background-color: var(--primary, #168f99);
        }

        .task-bracket {
            width: 100%;
            box-sizing: border-box;
            border: 2px solid var(--primary, #168f99);
            border-radius: 8px;
            padding: 14px 16px;
            background: rgba(22, 143, 153, 0.04);
        }

        .bracket-label {
            font-weight: 700;
            margin-bottom: 12px;
            color: var(--primary, #168f99);
            text-align: center;
            font-size: 15px;
        }

        .bracket-list {
            display: flex;
            flex-direction: column;
            gap: 10px;
        }

        .bracket-item .custom-node {
            font-size: 14px;
            padding: 10px 12px;
            font-weight: 500;
        }

        /* Mobile responsiveness */
        @media (max-width: 768px) {
            .org-top-region {
                flex-direction: column;
                align-items: center;
                gap: 20px;
            }
            .org-left-side {
                width: 100%;
                max-width: 280px;
            }
            .connector-arrow-line {
                display: none;
            }
            .leadership-wrapper {
                width: 100%;
            }
            .org-tree-region {
                align-items: center;
            }
            .org-right-tree {
                width: 100%;
            }
            .branch-line {
                width: 100%;
            }
            .dept-columns {
                flex-direction: column;
                align-items: center;
                gap: 30px;
            }
            .dept-col {
                width: 100%;
                max-width: 280px;
            }
        }
        </style>

        <section id="so-do" class="section bg-white">
            <div class="container">
                <h2 class="section-title">${t("orgchart.title")}</h2>
                
                <div class="org-tree-container">
                    <div class="org-layout">
                        
                        <!-- Top Region -->
                        <div class="org-top-region">
                            <!-- Left: Tổ chức đoàn thể -->
                            <div class="org-left-side">
                                <div class="custom-node main" style="width: 100%; box-sizing: border-box;">
                                    ${t("orgchart.organizations") || "Tổ chức đoàn thể"}
                                </div>
                                <div class="org-sub-list">
                                    <div class="org-sub-item">• ${t("orgchart.cong_doan") || "Công đoàn"}</div>
                                    <div class="org-sub-item">• ${t("orgchart.doan_thanh_nien") || "Đoàn thanh niên"}</div>
                                </div>
                            </div>

                            <!-- Absolute Arrow Connector Line -->
                            <div class="connector-arrow-line"></div>

                            <!-- Right: Leadership Node -->
                            <div class="leadership-wrapper">
                                <a href="#/lanh-dao" class="custom-node main leadership-btn">
                                    ${t("orgchart.leadership") || "Lãnh đạo Khoa"}
                                </a>
                            </div>
                        </div>

                        <!-- Lower Tree Region: Spine & Department Branches -->
                        <div class="org-tree-region">
                            <div class="org-right-tree">
                                
                                <!-- Vertical spine line -->
                                <div class="spine-line"></div>

                                <!-- Horizontal branch line -->
                                <div class="branch-line"></div>

                                <!-- Department Columns -->
                                <div class="dept-columns">
                                    
                                    <!-- Dept 1: Bộ môn Điều dưỡng -->
                                    <div class="dept-col">
                                        <div class="line-in-col"></div>
                                        <a class="custom-node main" href="#/bo-mon-dieu-duong" style="width: 100%; box-sizing: border-box;">
                                            ${t("orgchart.dieuduong")}
                                        </a>
                                        <div class="line-down"></div>
                                        <div class="task-bracket">
                                            <div class="bracket-label">${t("orgchart.main_tasks")}</div>
                                            <div class="bracket-list">
                                                <div class="bracket-item"><a class="custom-node" href="#/bo-mon-dieu-duong/giang-day">${t("orgchart.teaching")}</a></div>
                                                <div class="bracket-item"><a class="custom-node" href="#/bo-mon-dieu-duong/nghien-cuu-khoa-hoc">${t("orgchart.research")}</a></div>
                                                <div class="bracket-item"><a class="custom-node" href="#/bo-mon-dieu-duong/phuc-vu-cong-dong">${t("orgchart.community")}</a></div>
                                            </div>
                                        </div>
                                    </div>

                                    <!-- Dept 2: Bộ môn KTXN & HAYH -->
                                    <div class="dept-col">
                                        <div class="line-in-col"></div>
                                        <a class="custom-node main" href="#/bo-mon-ktxn-hayh" style="width: 100%; box-sizing: border-box;">
                                            ${t("orgchart.ktxnhayh")}
                                        </a>
                                        <div class="line-down"></div>
                                        <div class="task-bracket">
                                            <div class="bracket-label">${t("orgchart.main_tasks")}</div>
                                            <div class="bracket-list">
                                                <div class="bracket-item"><a class="custom-node" href="#/bo-mon-ktxn-hayh/giang-day">${t("orgchart.teaching")}</a></div>
                                                <div class="bracket-item"><a class="custom-node" href="#/bo-mon-ktxn-hayh/nghien-cuu-khoa-hoc">${t("orgchart.research")}</a></div>
                                                <div class="bracket-item"><a class="custom-node" href="#/bo-mon-ktxn-hayh/phuc-vu-cong-dong">${t("orgchart.community")}</a></div>
                                            </div>
                                        </div>
                                    </div>

                                </div>

                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
  `;
}
