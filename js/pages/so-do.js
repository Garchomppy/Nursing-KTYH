export const soDo = `
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
            border-left: 2px solid var(--primary);
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
            left: -17px;
            top: 50%;
            width: 15px;
            height: 2px;
            background-color: var(--primary);
        }
        .bracket-label {
            font-weight: bold;
            margin-bottom: 10px;
            color: var(--primary);
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
        .task-label {
            font-weight: bold;
            color: var(--primary);
            width: 100%;
            text-align: left;
            padding: 10px 15px;
            box-sizing: border-box;
        }
        .task-list {
            display: flex;
            flex-direction: column;
            align-items: center;
            width: 100%;
        }
        .task-list .custom-node {
            font-weight: normal;
            font-size: 14px;
            padding: 6px;
            width: 100%;
        }
        .root-node {
            width: 320px;
        }
        .branch-row {
            display: flex;
            justify-content: center;
            position: relative;
            padding-top: 30px;
        }
        .branch-row::before {
            content: '';
            position: absolute;
            top: 0;
            left: calc(50% / var(--cols) / 2 + (100% / var(--cols)) * 0);
            width: 0;
            height: 0;
        }
        .branch-row {
            border-top: 2px solid var(--primary);
        }
        .branch-row-outer {
            display: flex;
            flex-direction: column;
            align-items: center;
        }
        .branch-row-outer > .line-down {
            order: -1;
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
            width: 2px;
            height: 30px;
            background: var(--primary);
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
                <h2 class="section-title">Sơ đồ cơ cấu tổ chức</h2>
                <div class="custom-tree">

                    <!-- Root level -->
                    <div class="custom-node main root-node">Khoa Điều dưỡng - Kỹ thuật Y học</div>
                    <div class="line-down"></div>

                    <!-- Top-level nav row, branched from root -->
                    <div class="branch-row" style="width: 100%; max-width: 900px;">
                        <div class="branch-item"><a href="#/gioi-thieu" class="custom-node">Giới thiệu</a></div>
                        <div class="branch-item"><a href="#/chuc-nang" class="custom-node">Chức năng - Nhiệm vụ</a></div>
                        <div class="branch-item"><div class="custom-node main">Cơ cấu tổ chức</div></div>
                        <div class="branch-item"><a href="#/lanh-dao" class="custom-node">Lãnh đạo khoa</a></div>
                    </div>

                    <div class="line-down"></div>

                    <!-- Branches level, branched from Cơ cấu tổ chức -->
                    <div class="branch-row" style="width: 100%; max-width: 800px;">

                        <!-- Col 1 -->
                        <div class="branch-item">
                            <div class="branch-col solo">
                                <div class="custom-node">Liên đoàn khoa</div>
                            </div>
                        </div>

                        <!-- Col 2 -->
                        <div class="branch-item">
                            <div class="branch-col">
                                <div class="custom-node main">Bộ môn điều dưỡng</div>
                                <div class="line-down"></div>
                                <div class="custom-node">Danh sách GV</div>
                                <div class="line-down"></div>
                                <div class="task-label">Nhiệm vụ chính</div>
                                <div class="line-down"></div>
                                <div class="task-list">
                                    <div class="custom-node">Giảng dạy</div>
                                    <div class="line-down"></div>
                                    <div class="custom-node">Nghiên cứu KH</div>
                                    <div class="line-down"></div>
                                    <div class="custom-node">Phục vụ cộng đồng</div>
                                </div>
                            </div>
                        </div>

                        <!-- Col 3 -->
                        <div class="branch-item">
                            <div class="branch-col">
                                <div class="custom-node main">Bộ môn KTYH</div>
                                <div class="line-down"></div>
                                <div class="custom-node">Danh sách GV</div>
                                <div class="line-down"></div>
                                <div class="task-label">Nhiệm vụ chính</div>
                                <div class="line-down"></div>
                                <div class="task-list">
                                    <div class="custom-node">Giảng dạy</div>
                                    <div class="line-down"></div>
                                    <div class="custom-node">Nghiên cứu KH</div>
                                    <div class="line-down"></div>
                                    <div class="custom-node">Phục vụ cộng đồng</div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
`;
