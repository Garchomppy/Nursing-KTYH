import { t } from "../i18n.js";

export function soDo() {
  return `
        <!-- Sơ đồ cơ cấu tổ chức -->
        <style>
        .custom-tree {
            display: flex;
            justify-content: center;
            align-items: flex-start;
            font-family: var(--font-primary, sans-serif);
            padding: 10px 20px;
            overflow-x: auto;
            background: #ffffff;
            width: 100%;
        }

        .custom-tree-inner {
            display: flex;
            align-items: flex-start;
            justify-content: center;
            position: relative;
            width: 820px;
            padding: 10px 0;
            margin-right: 300px; /* Shift diagram left so Lãnh đạo khoa is centered under title */
            box-sizing: border-box;
        }

        /* Node styling */
        .custom-node {
            border: 2px solid var(--primary, #03135e);
            padding: 10px 16px;
            border-radius: 4px;
            background: #ffffff;
            font-weight: 600;
            font-size: 14px;
            text-align: center;
            position: relative;
            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.04);
            z-index: 2;
            box-sizing: border-box;
            color: var(--primary, #03135e);
            display: block;
            line-height: 1.4;
        }

        .custom-node.main {
            font-weight: 700;
            font-size: 15px;
        }

        a.custom-node {
            color: var(--primary, #03135e);
            text-decoration: none;
            transition: color 0.2s ease, background-color 0.2s ease, transform 0.2s ease, box-shadow 0.2s ease;
        }

        a.custom-node:hover {
            background-color: var(--primary, #03135e);
            color: #ffffff !important;
            transform: translateY(-2px);
            box-shadow: 0 4px 10px rgba(3, 19, 94, 0.2);
        }

        a.custom-node:focus-visible {
            outline: 3px solid rgba(3, 19, 94, 0.35);
            outline-offset: 2px;
        }

        /* LEFT BRANCH: Tổ chức đoàn thể */
        .tree-branch-left {
            display: flex;
            flex-direction: column;
            align-items: center;
            width: 240px;
            flex-shrink: 0;
        }

        .node-union {
            width: 100%;
        }

        .line-stem-v-short {
            width: 2px;
            height: 30px;
            background-color: var(--primary, #03135e);
            flex-shrink: 0;
            z-index: 1;
        }

        .union-sub-box {
            width: 100%;
            box-sizing: border-box;
            border: 2px solid var(--primary, #03135e);
            border-radius: 4px;
            padding: 16px 14px;
            background: #f8fafc;
        }

        /* Top Horizontal Connector Line */
        .top-line-horizontal {
            position: absolute;
            top: 31px; /* 10px padding + 21px half node height */
            left: 240px;
            width: 210px;
            height: 2px;
            background-color: var(--primary, #03135e);
            z-index: 1;
        }

        /* RIGHT BRANCH: Lãnh đạo khoa & Departments */
        .tree-branch-right {
            display: flex;
            flex-direction: column;
            align-items: center;
            width: 520px;
            margin-left: 60px; /* Gap between left branch (240px) and right branch (520px) */
            flex-shrink: 0;
        }

        .node-leader-wrapper {
            width: 220px;
        }

        .node-leader {
            width: 100%;
        }

        .line-stem-v-long {
            width: 2px;
            height: 50px; /* Long vertical stem dropping past Đoàn thanh niên bottom */
            background-color: var(--primary, #03135e);
            flex-shrink: 0;
            z-index: 1;
        }

        /* Department Columns Container */
        .dept-columns-container {
            display: flex;
            justify-content: space-between;
            width: 100%;
            position: relative;
        }

        .dept-column {
            display: flex;
            flex-direction: column;
            align-items: center;
            width: 240px;
            position: relative;
            padding-top: 30px;
        }

        /* T-Split Connector lines above departments */
        .dept-column::before {
            content: '';
            position: absolute;
            top: 0;
            left: 50%;
            transform: translateX(-50%);
            width: 2px;
            height: 30px;
            background-color: var(--primary, #03135e);
            z-index: 1;
        }

        .dept-column::after {
            content: '';
            position: absolute;
            top: 0;
            height: 2px;
            background-color: var(--primary, #03135e);
            z-index: 1;
        }

        .dept-column:first-child::after {
            left: 50%;
            right: -20px; /* Extends to exact midpoint between columns (gap 40px) */
        }

        .dept-column:last-child::after {
            left: -20px; /* Extends from exact midpoint between columns */
            right: 50%;
        }

        /* Task Bracket Box */
        .task-bracket-box {
            width: 100%;
            box-sizing: border-box;
            border: 2px solid var(--primary, #03135e);
            border-radius: 4px;
            padding: 14px 14px 16px 14px;
            background: #f8fafc;
        }

        .bracket-title {
            font-weight: 700;
            font-size: 14px;
            margin-bottom: 12px;
            color: var(--primary, #03135e);
            text-align: left;
        }

        /* Tree Bracket List */
        .bracket-list {
            position: relative;
            padding-left: 20px;
            display: flex;
            flex-direction: column;
            gap: 12px;
        }

        .bracket-item {
            position: relative;
            width: 100%;
        }

        /* Bracket line - vertical stem */
        .bracket-item::before {
            content: '';
            position: absolute;
            left: -14px;
            top: 0;
            bottom: 0;
            width: 2px;
            background-color: var(--primary, #03135e);
        }

        .bracket-item:first-child::before {
            top: 50%;
        }

        .bracket-item:last-child::before {
            bottom: 50%;
        }

        .bracket-item:first-child:last-child::before {
            display: none;
        }

        /* Bracket line - horizontal branch */
        .bracket-item::after {
            content: '';
            position: absolute;
            left: -14px;
            top: 50%;
            transform: translateY(-50%);
            width: 14px;
            height: 2px;
            background-color: var(--primary, #03135e);
        }

        .bracket-item .custom-node {
            font-weight: 500;
            font-size: 13.5px;
            padding: 7px 12px;
            text-align: left;
            width: 100%;
        }
        </style>

        <section id="so-do" class="section bg-white">
            <div class="container">
                <h2 class="section-title">${t("orgchart.title")}</h2>
                <div class="custom-tree">
                    <div class="custom-tree-inner">

                        <!-- LEFT BRANCH: Tổ chức đoàn thể -->
                        <div class="tree-branch-left">
                            <div class="custom-node main node-union">${t("orgchart.union")}</div>
                            <div class="line-stem-v-short"></div>
                            <div class="union-sub-box">
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

                        <!-- TOP HORIZONTAL CONNECTOR LINE -->
                        <div class="top-line-horizontal"></div>

                        <!-- RIGHT BRANCH: Lãnh đạo khoa & Departments -->
                        <div class="tree-branch-right">
                            
                            <!-- Node Lãnh đạo Khoa -->
                            <div class="node-leader-wrapper">
                                <a href="#/lanh-dao" class="custom-node main node-leader">${t("orgchart.leadership")}</a>
                            </div>

                            <!-- Long vertical stem dropping past Đoàn thanh niên bottom -->
                            <div class="line-stem-v-long"></div>

                            <!-- Department Columns Split Container -->
                            <div class="dept-columns-container">

                                <!-- Column 1: Bộ môn Điều dưỡng -->
                                <div class="dept-column">
                                    <a class="custom-node main" href="#/bo-mon-dieu-duong" style="width: 100%;">${t("orgchart.dieuduong")}</a>
                                    <div class="line-stem-v-short"></div>
                                    <div class="task-bracket-box">
                                        <div class="bracket-title">${t("orgchart.main_tasks")}</div>
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

                                <!-- Column 2: Bộ môn KTXN & HAYH -->
                                <div class="dept-column">
                                    <a class="custom-node main" href="#/bo-mon-ktxn-hayh" style="width: 100%;">${t("orgchart.ktxnhayh")}</a>
                                    <div class="line-stem-v-short"></div>
                                    <div class="task-bracket-box">
                                        <div class="bracket-title">${t("orgchart.main_tasks")}</div>
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
            </div>
        </section>
  `;
}



