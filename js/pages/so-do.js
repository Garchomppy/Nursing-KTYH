import { t } from "../i18n.js";

export function soDo() {
  return `
        <!-- Sơ đồ cơ cấu tổ chức -->
        <style>
        .custom-tree {
            display: flex;
            flex-direction: column;
            align-items: center;
            font-family: var(--font-primary);
            padding: 40px 20px;
            overflow-x: auto;
        }
        .custom-node {
            border: 2px solid var(--primary);
            padding: 10px 15px;
            border-radius: 4px;
            background: white;
            font-weight: 500;
            text-align: center;
            position: relative;
            box-shadow: 0 2px 4px rgba(0,0,0,0.05);
            z-index: 2;
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
            background-color: var(--primary);
            color: white !important;
            transform: translateY(-1px);
        }
        a.custom-node:focus-visible {
            outline: 3px solid rgba(22, 143, 153, 0.35);
            outline-offset: 3px;
        }
        a.custom-node:active {
            transform: translateY(0);
        }
        .tree-row {
            display: flex;
            justify-content: center;
            position: relative;
            gap: 40px;
        }
        .line-down {
            width: 2px;
            height: 30px;
            background-color: var(--primary);
            margin: 0 auto;
            z-index: 1;
        }
        .horizontal-line {
            position: absolute;
            top: 0;
            height: 2px;
            background-color: var(--primary);
            z-index: 1;
        }
        /* Bracket list */
        .bracket-list {
            padding-left: 15px;
            position: relative;
            margin-top: 10px;
        }
        .bracket-item {
            position: relative;
            margin-bottom: 15px;
        }
        .bracket-item::before {
            content: '';
            position: absolute;
            left: -15px;
            top: 0;
            width: 2px;
            height: 50%;
            background-color: var(--primary);
        }
        .bracket-item::after {
            content: '';
            position: absolute;
            left: -15px;
            top: 50%;
            width: 15px;
            height: 2px;
            background-color: var(--primary);
        }
        .bracket-item:last-child {
            margin-bottom: 0;
        }
        .bracket-item:not(:last-child)::before {
            height: calc(50% + 15px + 100%);
        }
        .bracket-item:first-child::before {
            top: 50%;
            height: 50%;
        }
        .bracket-item:first-child:not(:last-child)::before {
            height: calc(15px + 100%);
        }
        .bracket-item .custom-node {
            width: 100%;
        }
        .bracket-label {
            font-weight: bold;
            margin-bottom: 10px;
            color: var(--primary);
            text-align: left;
            width: 100%;
        }
        .branch-col {
            display: flex;
            flex-direction: column;
            align-items: center;
            width: 220px;
        }
        .branch-col.solo {
            width: 200px;
            justify-content: flex-start;
            padding-top: 0;
        }
        .branch-col > .custom-node {
            width: 100%;
        }
        .task-bracket {
            width: 100%;
            box-sizing: border-box;
            border: 2px solid var(--primary);
            border-radius: 4px;
            padding: 12px 15px;
            background: rgba(22, 143, 153, 0.04);
        }
        .task-bracket .custom-node {
            font-weight: normal;
            font-size: 14px;
            padding: 6px 10px;
            text-align: left;       
        }
        .root-node {
            width: 320px;
            position: relative;
        }
        .root-node::after {
            content: '';
            position: absolute;
            top: 100%;
            left: 50%;
            width: 2px;
            height: 60px;
            background: var(--primary);
            z-index: 1;
        }
        .branch-row {
            display: flex;
            justify-content: center;
        }
        .branch-row + .branch-row {
            margin-top: 60px;
        }
        .branch-item {
            position: relative;
            flex: 1;
            display: flex;
            justify-content: center;
            padding-top: 30px;
        }
        .branch-item.branch-item-anchor::before {
            top: 0px;
            height: 141px;
        }
        .branch-item::before {
            content: '';
            position: absolute;
            top: 0;
            left: 50%;
            width: 2px;
            height: 30px;
            background: var(--primary);
            z-index: 1;
        }
        .branch-item::after {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            height: 2px;
            background: var(--primary);
            z-index: 1;
        }
        .branch-item:first-child::after {
            left: 50%;
        }
        .branch-item:last-child::after {
            right: 50%;
        }
        .branch-row > .branch-item:only-child::after {
            display: none;
        }
        .top-row {
            display: flex;
            justify-content: center;
            gap: 30px;
            flex-wrap: wrap;
            margin-bottom: 30px;
        }
        .top-row .custom-node {
            width: 200px;
        }
        .top-row a.custom-node {
            text-decoration: none;
            color: inherit;
            display: block;
        }
        .top-row a.custom-node:hover {
            background: var(--primary-container, #eef4ff);
        }
        </style>

        <section id="so-do" class="section bg-white">
            <div class="container">
                <h2 class="section-title">${t("orgchart.title")}</h2>
                <div class="custom-tree">

                    <!-- Root level -->
                    <div class="custom-node main root-node">${t("orgchart.root")}</div>

                    <!-- Top-level nav row, branched from root -->
                    <div class="branch-row" style="width: 100%; max-width: 900px; margin-top: 60px;">
                        <div class="branch-item"><a href="#/gioi-thieu" class="custom-node">${t("orgchart.intro")}</a></div>
                        <div class="branch-item"><a href="#/chuc-nang" class="custom-node">${t("orgchart.functions")}</a></div>
                        <div class="branch-item branch-item-anchor"><div class="custom-node main">${t("orgchart.self")}</div></div>
                        <div class="branch-item"><a href="#/lanh-dao" class="custom-node">${t("orgchart.leadership")}</a></div>
                    </div>

                    <!-- Branches level, branched from Cơ cấu tổ chức -->
                    <div class="branch-row" style="width: 100%; max-width: 800px;">

                        <!-- Col 1 -->
                        <div class="branch-item">
                            <div class="branch-col solo">
                                <div class="custom-node">${t("orgchart.union")}</div>
                            </div>
                        </div>

                        <!-- Col 2 -->
                        <div class="branch-item">
                            <div class="branch-col">
                                <a class="custom-node main" href="#/bo-mon-dieu-duong">${t("orgchart.dieuduong")}</a>
                                <div class="line-down"></div>
                                <a class="custom-node" href="#/bo-mon-dieu-duong/danh-sach-giang-vien">${t("orgchart.lecturer_list")}</a>
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
                        </div>

                        <!-- Col 3 -->
                        <div class="branch-item">
                            <div class="branch-col">
                                <a class="custom-node main" href="#/bo-mon-ktxn-hayh">${t("orgchart.ktxnhayh")}</a>
                                <div class="line-down"></div>
                                <a class="custom-node" href="#/bo-mon-ktxn-hayh/danh-sach-giang-vien">${t("orgchart.lecturer_list")}</a>
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
        </section>
`;
}
