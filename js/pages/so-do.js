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
        </style>

        <section id="so-do" class="section bg-white">
            <div class="container">
                <h2 class="section-title">Sơ đồ cơ cấu tổ chức</h2>
                <div class="custom-tree">
                    
                    <!-- Branches level -->
                    <div style="position: relative; width: 100%; max-width: 800px;">
                        <div class="tree-row" style="gap: 40px; justify-content: space-between;">
                            
                            <!-- Col 1 -->
                            <div style="display: flex; flex-direction: column; align-items: center; width: 200px;">
                                <div class="custom-node">Liên đoàn khoa</div>
                            </div>
                            
                            <!-- Col 2 -->
                            <div style="display: flex; flex-direction: column; align-items: center; width: 220px;">
                                <div class="custom-node main" style="width: 100%;">Bộ môn điều dưỡng</div>
                                <div class="line-down"></div>
                                <div class="custom-node" style="width: 100%;">Danh sách GV</div>
                                
                                <div style="margin-top: 15px; width: 100%;">
                                    <details class="custom-node" style="cursor: pointer; text-align: left; padding: 10px; box-sizing: border-box;">
                                        <summary style="font-weight: bold; outline: none; color: var(--primary); user-select: none;">Nhiệm vụ chính</summary>
                                        <div style="margin-top: 15px; display: flex; flex-direction: column; gap: 10px;">
                                            <div class="custom-node" style="font-weight: normal; font-size: 14px; padding: 6px;">Giảng dạy</div>
                                            <div class="custom-node" style="font-weight: normal; font-size: 14px; padding: 6px;">Nghiên cứu KH</div>
                                            <div class="custom-node" style="font-weight: normal; font-size: 14px; padding: 6px;">Phục vụ cộng đồng</div>
                                        </div>
                                    </details>
                                </div>
                            </div>
                            
                            <!-- Col 3 -->
                            <div style="display: flex; flex-direction: column; align-items: center; width: 220px;">
                                <div class="custom-node main" style="width: 100%;">Bộ môn KTYH</div>
                                <div class="line-down"></div>
                                <div class="custom-node" style="width: 100%;">Danh sách GV</div>
                                
                                <div style="margin-top: 15px; width: 100%;">
                                    <details class="custom-node" style="cursor: pointer; text-align: left; padding: 10px; box-sizing: border-box;">
                                        <summary style="font-weight: bold; outline: none; color: var(--primary); user-select: none;">Nhiệm vụ chính</summary>
                                        <div style="margin-top: 15px; display: flex; flex-direction: column; gap: 10px;">
                                            <div class="custom-node" style="font-weight: normal; font-size: 14px; padding: 6px;">Giảng dạy</div>
                                            <div class="custom-node" style="font-weight: normal; font-size: 14px; padding: 6px;">Nghiên cứu KH</div>
                                            <div class="custom-node" style="font-weight: normal; font-size: 14px; padding: 6px;">Phục vụ cộng đồng</div>
                                        </div>
                                    </details>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </section>
`;
