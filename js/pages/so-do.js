import { t } from "../i18n.js";

export function soDo() {
  return `
        <!-- Sơ đồ cơ cấu tổ chức -->
        <style>
        .custom-tree {
            display: flex;
            flex-direction: column;
            align-items: center;
            font-family: var(--font-primary, sans-serif);
            padding: 40px 20px;
            overflow-x: auto;
            background: #ffffff;
        }
        .custom-node {
            border: 2px solid var(--primary, #168f99);
            padding: 10px 15px;
            border-radius: 4px;
            background: white;
            font-weight: 500;
            font-size: 14px;
            text-align: center;
            position: relative;
            box-shadow: 0 2px 4px rgba(0,0,0,0.05);
            z-index: 2;
            box-sizing: border-box;
            color: inherit;
        }
        .custom-node.main {
            font-weight: bold;
        }
        a.custom-node {
            display: block;
            color: inherit;
            text-decoration: none;
            transition: color 160ms ease, background-color 160ms ease, transform 160ms ease;
        }
        a.custom-node:hover {
            background-color: var(--primary, #168f99);
            color: white !important;
            transform: translateY(-1px);
        }
        a.custom-node:focus-visible {
            outline: 3px solid rgba(22, 143, 153, 0.35);
            outline-offset: 3px;
        }

        /* Top Layout Container */
        .top-row-flex {
            display: flex;
            align-items: flex-start;
            justify-content: center;
            position: relative;
        }
        .top-col-left {
            display: flex;
            flex-direction: column;
            align-items: center;
            width: 220px;
        }
        .top-col-center {
            display: flex;
            flex-direction: column;
            align-items: center;
            width: 180px;
        }
        .top-col-right {
            display: flex;
            flex-direction: column;
            align-items: center;
            width: 200px;
        }
        .h-line-connector {
            width: 40px;
            height: 2px;
            background-color: var(--primary, #168f99);
            margin-top: 22px;
            z-index: 1;
        }
        .h-gap-space {
            width: 40px;
        }

        /* Line Down from Leader to Departments */
        .line-down-from-leader {
            width: 2px;
            height: 155px;
            background-color: var(--primary, #168f99);
            z-index: 1;
        }

        /* Bracket List Styling */
        .task-bracket {
            width: 100%;
            box-sizing: border-box;
            border: 2px solid var(--primary, #168f99);
            border-radius: 4px;
            padding: 12px 15px;
            background: rgba(22, 143, 153, 0.04);
        }
        .bracket-label {
            font-weight: bold;
            font-size: 14px;
            margin-bottom: 10px;
            color: var(--primary, #168f99);
            text-align: left;
            width: 100%;
        }
        .bracket-list {
            padding-left: 15px;
            position: relative;
        }
        .bracket-item {
            position: relative;
            margin-bottom: 12px;
        }
        .bracket-item:last-child {
            margin-bottom: 0;
        }
        .bracket-item::before {
            content: '';
            position: absolute;
            left: -15px;
            top: 0;
            width: 2px;
            height: 100%;
            background-color: var(--primary, #168f99);
        }
        .bracket-item:first-child::before {
            top: 50%;
            height: 50%;
        }
        .bracket-item:last-child::before {
            height: 50%;
        }
        .bracket-item:first-child:last-child::before {
            display: none;
        }
        .bracket-item::after {
            content: '';
            position: absolute;
            left: -15px;
            top: 50%;
            width: 15px;
            height: 2px;
            background-color: var(--primary, #168f99);
        }
        .bracket-item .custom-node {
            font-weight: normal;
            font-size: 14px;
            padding: 6px 10px;
            text-align: left;
            width: 100%;
        }

        .line-down {
            width: 2px;
            height: 30px;
            background-color: var(--primary, #168f99);
            margin: 0 auto;
            z-index: 1;
        }

        /* Department Branch Layout */
        .branch-row {
            display: flex;
            justify-content: center;
            position: relative;
        }
        .branch-row.dept-row {
            margin-top: -2px;
            width: 100%;
            max-width: 650px;
        }
        .branch-item {
            position: relative;
            flex: 1;
            display: flex;
            justify-content: center;
            padding-top: 30px;
        }
        .branch-item::before {
            content: '';
            position: absolute;
            top: 0;
            left: 50%;
            transform: translateX(-50%);
            width: 2px;
            height: 30px;
            background: var(--primary, #168f99);
            z-index: 1;
        }
        .branch-item::after {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            height: 2px;
            background: var(--primary, #168f99);
            z-index: 1;
        }
        .branch-item:first-child::after {
            left: 50%;
        }
        .branch-item:last-child::after {
            right: 50%;
        }
        .branch-col {
            display: flex;
            flex-direction: column;
            align-items: center;
            width: 220px;
        }
        </style>

        <section id="so-do" class="section bg-white">
            <div class="container">
                <h2 class="section-title">${t("orgchart.title")}</h2>
                <div class="custom-tree">

                    <!-- Top Level Row -->
                    <div class="top-row-flex">

                        <!-- Cụm Tổ chức đoàn thể -->
                        <div class="top-col-left">
                            <div class="custom-node main" style="width: 100%;">${t("orgchart.union")}</div>
                            <div class="line-down"></div>
                            <div class="task-bracket">
                                <div class="bracket-list">
                                    <div class="bracket-item">
                                        <div class="custom-node">${t("orgchart.cong_doan")}</div>
                                    </div>
                                    <div class="bracket-item">
                                        <div class="custom-node">${t("orgchart.doan_thanh_nien")}</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- Sợi nối ngang từ Tổ chức đoàn thể sang Lãnh đạo Khoa -->
                        <div class="h-line-connector"></div>

                        <!-- Lãnh đạo Khoa (Ở giữa) + Đường nối xuống 2 Bộ môn -->
                        <div class="top-col-center">
                            <a href="#/lanh-dao" class="custom-node main" style="width: 100%;">${t("orgchart.leadership")}</a>
                            <div class="line-down-from-leader"></div>
                        </div>

                        <!-- Sợi nối ngang từ Lãnh đạo Khoa sang Danh sách giảng viên -->
                        <div class="h-line-connector"></div>

                        <!-- Danh sách giảng viên (Nằm bên phải Lãnh đạo khoa, độc lập) -->
                        <div class="top-col-right">
                            <a href="#/bo-mon-dieu-duong/danh-sach-giang-vien" class="custom-node" style="width: 100%;">${t("orgchart.lecturer_list")}</a>
                        </div>

                    </div>

                    <!-- Hàng dưới: 2 Bộ môn -->
                    <div class="branch-row dept-row">

                        <!-- Bộ môn Điều dưỡng -->
                        <div class="branch-item">
                            <div class="branch-col">
                                <a class="custom-node main" href="#/bo-mon-dieu-duong" style="width: 100%;">${t("orgchart.dieuduong")}</a>
                                <div class="line-down"></div>
                                <div class="task-bracket">
                                    <div class="bracket-label">${t("orgchart.main_tasks")}</div>
                                    <div class="bracket-list">
                                        <div class="bracket-item">
                                            <a class="custom-node" href="#/bo-mon-dieu-duong/giang-day">${t("orgchart.teaching")}</a>
                                        </div>
                                        <div class="bracket-item">
                                            <a class="custom-node" href="#/bo-mon-dieu-duong/nghien-cuu-khoa-hoc">${t("orgchart.research")}</a>
                                        </div>
                                        <div class="bracket-item">
                                            <a class="custom-node" href="#/bo-mon-dieu-duong/phuc-vu-cong-dong">${t("orgchart.community")}</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- Bộ môn KTXN & HAYH -->
                        <div class="branch-item">
                            <div class="branch-col">
                                <a class="custom-node main" href="#/bo-mon-ktxn-hayh" style="width: 100%;">${t("orgchart.ktxnhayh")}</a>
                                <div class="line-down"></div>
                                <div class="task-bracket">
                                    <div class="bracket-label">${t("orgchart.main_tasks")}</div>
                                    <div class="bracket-list">
                                        <div class="bracket-item">
                                            <a class="custom-node" href="#/bo-mon-ktxn-hayh/giang-day">${t("orgchart.teaching")}</a>
                                        </div>
                                        <div class="bracket-item">
                                            <a class="custom-node" href="#/bo-mon-ktxn-hayh/nghien-cuu-khoa-hoc">${t("orgchart.research")}</a>
                                        </div>
                                        <div class="bracket-item">
                                            <a class="custom-node" href="#/bo-mon-ktxn-hayh/phuc-vu-cong-dong">${t("orgchart.community")}</a>
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
