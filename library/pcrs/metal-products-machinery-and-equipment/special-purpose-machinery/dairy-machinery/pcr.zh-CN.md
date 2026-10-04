---
pcr_id: pcr.metal-products-machinery-and-equipment.special-purpose-machinery.dairy-machinery
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 乳制机械制造

## 1. 范围与适用性

本 PCR 用于形成按配置区分的完整乳制机械制造商出厂前景数据，涵盖专用奶酪制造槽、凝乳切割/排乳清/成熟/供料及成形机械、间歇式黄油搅乳机与连续黄油揉捏机械，仅包含实际随供模块。其他专用乳制机械须有工程功能文件证明属于本类别，而非相邻类别。来源证明实际机器系列，并不提供通用物料清单或制造配方。[tetra-sh6-2024; gea-cheese-2024; gea-bue-2026; tetra-butter-handbook]

CPC 3.0 将乳制机械置于 441 农业或林业机械及其零件下的 4413 挤奶和乳制机械。排除挤奶机（44131）、单独供应的零件（44139）、奶油分离器（44511）、通用非家用食品烹饪/加热设备（44515）、乳制品和乳品加工服务。不推断存在 44512 子类。仅用于乳品工厂不能将通用加热器变为乳制机械；须证明主要设计功能和随供单元，多功能组件须分类审查。H7C 牛乳脱脂/标准化设备是相邻奶油分离器反例，不是本记录的代表输出。[un-cpc3-2025; tetra-h7c-adjacent]

仅根据实际工厂记录纳入制造试验。机器后续乳品生产的耗电、牛乳处理量、黄油/奶酪收率、清洗周期、维护和客户现场安装不属于本制造数据集。产品手册的运行耗用和额定处理能力不能替代实测工厂耗用。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.special-purpose-machinery.dairy-machinery |
| classification_refs | CPC 3.0: 44132 |
| covered_products | 完整专用乳制机械；实际奶酪槽、凝乳处理、黄油搅乳机或连续揉捏机配置 |
| excluded_products | 挤奶机；奶油分离器；单供零件；独立交付的通用食品加热器；乳制品；加工服务 |
| representative_product | 声明的实际交付机器型号；不以较窄代表产品限定类别身份 |
| production_route | 图纸和自制/外购核对；条件性卫生制造和精整；模块装配；实际验收；交付 |
| market_state | 已验收的完整出厂机器，声明选项、工厂加注和供应排除项 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 制造并供应声明的完整乳制机器配置 |
| How much | 1 kg 参考流；同配置单台记录按实测机器净质量归一化 |
| How well | 通过声明机器的有文件记录的机械、电气、卫生表面和功能验收要求 |
| How long or cycle | 一次制造和工厂放行；不假定使用寿命或乳品服务性能等价 |
| reference_flow_link | finished |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 乳制机械 `2c706125-e4a7-4af1-a5c7-78ad7bce62f6` |
| 参考流属性 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 机器功能和型号；验收配置和序号/物料清单修订；间歇或连续系列；卫生材料牌号和表面；传动及控制范围；随供夹套、泵、真空、就地清洗和附属模块；工厂加注液；自制/外购边界；验收试验介质和时长；场址和生产期；经校准净质量；上游供应商地域和交付状态 |

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| reference_mass | 参考产品 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | M = 同一配置的一台完整机器的验收净质量，单位 kg；采用 cp_mass 采集。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 接收门处实际供应的板、管、焊丝、化学品及分别指定的外购模块 |
| starting_condition_role | foreground_start |
| product_classification_scope | 专用乳制机器制造；多功能或单独交付模块按实际设计和供应边界分类 |
| recursive_input_rule | 外购同类别完整机器或模块作为有自身边界的上游供应投入；装配中不得再次展开其内含投入 |
| upstream_dataset_requirement | 按实际供应商的牌号、技术、地点、交付状态和已含工序一次链接；未解决供应商须明确声明 |
| disclosure | 声明系列、场址/期间、随供选项、排除项、工厂试验及自制/外购矩阵 |

| rule_id | 规则 | source_ids |
| --- | --- | --- |
| boundary_gate | 纳入可归属的上游供应、入厂运输、报废/返工、制造、精整、装配、工厂验收、清洗、废物处理和出厂包装。在具体数据包中按实际运输方式、载荷和距离另列入厂运输行。 | tetra-sh6-2024; gea-bue-2026 |
| boundary_routes | 对机体/夹套、轴/刀/桨/螺旋、槽/凝乳输送机构、质构器、传动、泵、密封、控制器和随供附属系统记录自制、外购或 not_applicable；完整外购单元替代其内含材料和制造行。供应商铸造/锻造和热处理保留在上游边界，实际在此厂进行时增设独立实测过程。其他实际合金、聚合物、涂层、燃料和化学品各需一个物种/牌号具体卡；所列备选不是强制配方。 | tetra-sh6-2024; gea-cheese-2024; gea-bue-2026 |
| boundary_use | 牛乳制奶酪/黄油加工仅为机器功能；实际试验介质为承担负荷的试验投入，不能成为乳制品参考输出。功能组合拉伸机有特定工作机构；单独通用加热器不自动纳入。 | un-cpc3-2025; gea-cheese-2024 |

## 6. 过程清单结构

### 过程图

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| fabrication | 卫生型机体和工作部件制造 | conditional | 制造商实际进行机加工、成形、焊接或抛光时 | foreground | 每 1 kg 参考流；采集基准为每台验收成品机器 |
| surface | 表面精整和钝化 | conditional | 仅实际食品接触表面或外部表面处理路线 | foreground | 每 1 kg 参考流；采集基准为每台验收成品机器 |
| assembly | 按配置装配 | required | 每台完整机器；外购模块与自制部件分别记录 | foreground | 每 1 kg 参考流；采集基准为每台验收成品机器 |
| test | 工厂验收和清洗 | required | 实际工厂试验和放行记录；仅实际进行时纳入湿式试验 | foreground | 每 1 kg 参考流；采集基准为每台验收成品机器 |
| dispatch | 包装和制造商出厂放行 | required | 交付时已验收的声明配置 | foreground | 每 1 kg 参考流；采集基准为每台验收成品机器 |
| services | 未分派的工厂共享服务 | conditional | 仅尚未分派给前述过程的实测剩余负荷 | foreground | 每 1 kg 参考流；采集基准为每台验收成品机器 |

### 过程：卫生型机体和工作部件制造（`fabrication`）

#### 输入

##### 产品流

###### AISI 304 不锈钢板材（`ss304_sheet`）

用于明确指定该牌号的壳体或框架图纸.

- 选定流：AISI 304 不锈钢板材
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_material`
- 来源：

###### AISI 316L 不锈钢板材（`ss316l_sheet`）

仅图纸指定该食品接触牌号时；不得代替 304.

- 选定流：AISI 316L 不锈钢板材
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_material`
- 来源：

###### AISI 304 卫生级不锈钢管（`ss304_tube`）

仅实际物料清单或路线.

- 选定流：AISI 304 卫生级不锈钢管
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_material`
- 来源：

###### ER316L 不锈钢焊丝（`er316l_wire`）

仅实际相容焊接工艺.

- 选定流：ER316L 不锈钢焊丝
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_material`
- 来源：

###### 氩保护气（`argon`）

实际进行保护气焊接；须按压力和温度换算.

- 选定流：氩保护气
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_gas。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_gas`
- 来源：

###### 矿物油基机加工润滑剂（`cutting_oil`）

仅实际安全数据表指定的润滑剂；水乳化液的水和添加剂另列.

- 选定流：矿物油基机加工润滑剂
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_material`
- 来源：

###### 低压外购工厂电力（`fab_electricity`）

仅实测可归属制造电量.

- 选定流：低压外购工厂电力
- 流属性/单位：能量 / kWh
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_utility。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_utility`
- 来源：

#### 输出

##### 废物流

###### 分类收集的不锈钢机加工废料（`ss_scrap`）

仅实际物料清单或路线.

- 选定流：分类收集的不锈钢机加工废料
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_waste。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_waste`
- 来源：

###### 废矿物油基机加工润滑剂（`spent_oil`）

仅实际物料清单或路线.

- 选定流：废矿物油基机加工润滑剂
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_waste。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_waste`
- 来源：

### 过程：表面精整和钝化（`surface`）

#### 输入

##### 产品流

###### 供应的工艺水（`surface_water`）

实际清洗、漂洗和槽液补水；内部循环转移相互抵消.

- 选定流：供应的工艺水
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_water。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_water`
- 来源：

###### 不锈钢钝化用柠檬酸（`citric`）

仅实际柠檬酸路线；不是默认配方.

- 选定流：不锈钢钝化用柠檬酸
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_material`
- 来源：

###### 不锈钢钝化用硝酸（`nitric`）

仅实际硝酸路线；区分浓度、收到的溶液与所含 HNO3.

- 选定流：不锈钢钝化用硝酸
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_material`
- 来源：

###### 异丙醇清洗溶剂（`ipa`）

仅实际溶剂清洗记录；物理防粘处理不能证明使用溶剂.

- 选定流：异丙醇清洗溶剂
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_material`
- 来源：`gea-cheese-2024`

#### 输出

##### 废物流

###### 含金属的钝化废水（`surface_effluent`）

仅实际物料清单或路线.

- 选定流：含金属的钝化废水
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_waste。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_waste`
- 来源：

###### 湿金属氢氧化物处理污泥（`surface_sludge`）

仅实际厂内处理沉淀物.

- 选定流：湿金属氢氧化物处理污泥
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_waste。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_waste`
- 来源：

###### 异丙醇捕集产生的废活性炭（`solvent_media`）

仅实际捕集装置；另测保留的溶剂质量.

- 选定流：异丙醇捕集产生的废活性炭
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_waste。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_waste`
- 来源：

##### 基本流

###### 向空气排放的异丙醇（`ipa_air`）

实际烟囱和无组织排放测量；不得用无法解释的平衡剩余量.

- 选定流：向空气排放的异丙醇
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_species。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_species`
- 来源：

###### 向淡水排放的铬（`chromium_water`）

实际最终排入淡水，采用自身溶解/颗粒态及 Cr(III)、Cr(VI) 或总铬元素报告方法。总铬元素不等于完整物种质量或纯 Cr(VI) 身份；不锈钢/钝化不能证明 Cr(VI)。送往处理的废水应为废物流.

- 选定流：向淡水排放的铬
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_species。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_species`
- 来源：

### 过程：按配置装配（`assembly`）

#### 输入

##### 产品流

###### 三相交流电动机（`motor`）

实际声明的电机规格和额定配置.

- 选定流：三相交流电动机
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_bom。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_bom`
- 来源：`tetra-sh6-2024`; `gea-bue-2026`

###### 外购齿轮传动组件（`gearbox`）

仅外购完整传动组件；不得重复计入其内含钢材、电机或齿轮油.

- 选定流：外购齿轮传动组件
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_bom。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_bom`
- 来源：`tetra-sh6-2024`; `gea-bue-2026`

###### 可编程逻辑控制器（`plc`）

仅实际随供控制系统.

- 选定流：可编程逻辑控制器
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_bom。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_bom`
- 来源：`tetra-sh6-2024`; `gea-bue-2026`

###### 食品接触用 EPDM 密封件（`epdm`）

仅实际获准的 EPDM 密封牌号；其他聚合物须自有原子行.

- 选定流：食品接触用 EPDM 密封件
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_bom。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_bom`
- 来源：`tetra-sh6-2024`; `gea-bue-2026`

###### 工厂加注的矿物齿轮油（`oil_fill`）

仅此厂进行且未包含于外购传动组件的加注.

- 选定流：工厂加注的矿物齿轮油
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_bom。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_bom`
- 来源：`tetra-sh6-2024`; `gea-bue-2026`

###### 外购不锈钢卫生阀（`sanitary_valve`）

实际交付的阀模块.

- 选定流：外购不锈钢卫生阀
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_bom。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_bom`
- 来源：`tetra-sh6-2024`; `gea-bue-2026`

###### 外购奶酪槽切割轴组件（`knife_module`）

外购完整轴和刀架，替代相应自制材料与制造负荷.

- 选定流：外购奶酪槽切割轴组件
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_bom。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_bom`
- 来源：`tetra-sh6-2024`; `gea-bue-2026`

###### 外购黄油揉捏质构模块（`butter_module`）

实际外购且有明确供应边界的质构模块.

- 选定流：外购黄油揉捏质构模块
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_bom。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_bom`
- 来源：`tetra-sh6-2024`; `gea-bue-2026`

###### 外购真空泵（`vacuum`）

仅实际随供黄油机真空选项.

- 选定流：外购真空泵
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_bom。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_bom`
- 来源：`tetra-sh6-2024`; `gea-bue-2026`

###### 外购卫生型加热夹套组件（`jacket`）

仅外购夹套，且未已包含在完整外购槽体内.

- 选定流：外购卫生型加热夹套组件
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_bom。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_bom`
- 来源：`tetra-sh6-2024`; `gea-bue-2026`

###### 低压外购工厂电力（`assembly_power`）

可归属装配耗用.

- 选定流：低压外购工厂电力
- 流属性/单位：能量 / kWh
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_utility。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_utility`
- 来源：

### 过程：工厂验收和清洗（`test`）

#### 输入

##### 产品流

###### 供应的工艺水（`test_water`）

仅实际水压、湿式功能试验或清洗；闭路循环不重复计作外购投入.

- 选定流：供应的工艺水
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_water。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_water`
- 来源：

###### 有记录工厂试验用生牛乳（`test_milk`）

仅有文件证明试验需要该实际介质时；不是制造原料或默认工厂试验.

- 选定流：有记录工厂试验用生牛乳
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_material`
- 来源：

###### 氢氧化钠清洗剂（`caustic`）

仅实际工厂就地清洗配方；记录收到的浓度并另列载体水.

- 选定流：氢氧化钠清洗剂
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_material`
- 来源：

###### 低压外购工厂电力（`test_power`）

实际试验和清洗时段分表记录；额定功率不是耗电量.

- 选定流：低压外购工厂电力
- 流属性/单位：能量 / kWh
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_utility。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_utility`
- 来源：

###### 工厂接口处外购饱和蒸汽（`steam`）

仅实际外购验收试验蒸汽；须在同一边界采集焓.

- 选定流：工厂接口处外购饱和蒸汽
- 流属性/单位：能量 / MJ
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_steam。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_steam`
- 来源：

###### 工厂接口处外购压缩空气（`compressed_air`）

仅外购供应；厂内压缩机改计其电力.

- 选定流：工厂接口处外购压缩空气
- 流属性/单位：体积 / m3
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_gas。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_gas`
- 来源：

#### 输出

##### 废物流

###### 工厂验收清洗废水（`test_effluent`）

仅实际物料清单或路线.

- 选定流：工厂验收清洗废水
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_waste。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_waste`
- 来源：

### 过程：包装和制造商出厂放行（`dispatch`）

#### 输入

##### 产品流

###### 锯材运输木箱（`wood_pack`）

仅实际物料清单或路线.

- 选定流：锯材运输木箱
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_material`
- 来源：

###### 聚乙烯防护膜（`pe_pack`）

仅实际物料清单或路线.

- 选定流：聚乙烯防护膜
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_material`
- 来源：

#### 输出

##### 产品流

###### 乳制机械（`finished`）

仅实际物料清单或路线.

- 选定流：乳制机械 `2c706125-e4a7-4af1-a5c7-78ad7bce62f6`
- 流属性/单位：质量 / kg
- 数量规则：1 千克
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_mass`
- 来源：`un-cpc3-2025`

### 过程：未分派的工厂共享服务（`services`）

#### 输入

##### 产品流

###### 低压外购工厂电力（`residual_power`）

仅核对后的未分派剩余负荷，含实际压缩机、照明和处理负荷；不得在分表上叠加工厂总表.

- 选定流：低压外购工厂电力
- 流属性/单位：能量 / kWh
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_utility。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_utility`
- 来源：

###### 供应工厂锅炉的天然气（`natural_gas`）

仅实际厂内锅炉；相同蒸汽负荷不得同时计入外购蒸汽.

- 选定流：供应工厂锅炉的天然气
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_gas。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_gas`
- 来源：

#### 输出

##### 基本流

###### 向空气排放的化石二氧化碳（`co2_air`）

实际锅炉碳证据及氧化、产物和库存核算.

- 选定流：向空气排放的化石二氧化碳
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_species。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_species`
- 来源：

###### 向空气排放的氮氧化物（`nox_air`）

实际分物种烟囱证据。区分 NO、NO2 和以 NO2 当量报告的 NOx，采用有依据的实际分子质量换算；合计 NOx 不是纯 NO2 身份，不能由燃料碳推导.

- 选定流：向空气排放的氮氧化物
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_species。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_species`
- 来源：

###### 向空气排放的水蒸气（`water_vapour`）

精整、试验或工厂公用工程的实际蒸发；内部凝结水是成对转移.

- 选定流：向空气排放的水蒸气
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_water。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_water`
- 来源：

## 7. 分配与共产品处理

| rule_id | 规则 | source_ids |
| --- | --- | --- |
| allocate_once | 直接分派专属工单投入；按实测因果机器工时、焊接/精整面积或计量作业分配期间共享投入。保留验收生产可归属的报废和返工，不能从分子剔除其负荷。不同配置使用独立实测分母。 |  |
| scrap_boundary | 分别记录出售的分类废料和实际处理去向；披露与上游供应商一致的回收分配模型。不作无文件证明的避免生产抵扣，内部金属循环以成对转移抵消。 |  |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_mass | dispatch | finished | weighing | 型号；配置；序列号；验收净质量 M | 使用经校准的秤称量已验收的完整机器，排除运输包装；核对同一配置和验收记录。 | kg | 每台验收机器 | 同一可归属生产期和验收配置 | 制造商场址和实际供应接口 | 每台验收净质量 | 校准；批次/安全数据表/物料清单；验收；采样和不确定性记录 |
| cp_material | fabrication; surface; test; dispatch | material input | ledger | 牌号；供应商；批号；安全数据表浓度；交付状态；接收；领用；退回；期初期末库存；可归属期间 Q；验收数量 N | 核对实际称重收货和工单领料、退回、库存与物料清单；拆分载体水和已知配方组分，不重复计入溶液质量。 | kg | 每批和每期 | 同一可归属生产期和验收配置 | 制造商场址和实际供应接口 | 可归属期间交换量 / 验收机器数量 | 校准；批次/安全数据表/物料清单；验收；采样和不确定性记录 |
| cp_bom | assembly | bought module | BOM | 图纸修订；自制/外购；供应边界；交付模块质量；内含电机/材料/油；N；Q | 将交付模块标识、称量质量和供应商范围与验收物料清单匹配；上游负荷只计一次，另列本厂增加项。 | kg | 每个交付批次 | 同一可归属生产期和验收配置 | 制造商场址和实际供应接口 | 可归属期间交换量 / 验收机器数量 | 校准；批次/安全数据表/物料清单；验收；采样和不确定性记录 |
| cp_utility | fabrication; assembly; test; services | electricity | meter | 期间和单位；输入；厂内发电；输出；期初期末储量；已分派制造/装配/试验/交付分表；剩余量；因果指标；Q；N | 使用同步经校准总表和分表；扣除已分派耗用后计算共享服务剩余量，并按实测因果因素分配。核对具体来源输入、发电、输出和储量；按实际组合测量不确定性调查负剩余量，不得截为零。 | kWh | 每个计量时段 | 同一可归属生产期和验收配置 | 制造商场址和实际供应接口 | 可归属期间交换量 / 验收机器数量 | 校准；批次/安全数据表/物料清单；验收；采样和不确定性记录 |
| cp_steam | test | purchased steam | meter | 交付 kg；自身交付焓 MJ/kg；交付压力温度干度；独立测量返回 kg；自身返回焓 MJ/kg；返回压力温度；时间/边界；Q；N | 在同一供应接口分别计量交付蒸汽和返回凝结水。各项使用自身实测状态和可追溯热力学方法确定焓，交付和返回采用同一个共同焓参考零点。Q 单位 MJ = 交付 kg 乘自身交付 MJ/kg，减去独立测量返回 kg 乘自身返回 MJ/kg；不得假定焓或未测等量返回质量。厂内蒸汽改用实际锅炉燃料和辅助耗用，不计外购蒸汽上游负荷。 | MJ | 每次记录试验 | 同一可归属生产期和验收配置 | 制造商场址和实际供应接口 | 可归属期间交换量 / 验收机器数量 | 校准；批次/安全数据表/物料清单；验收；采样和不确定性记录 |
| cp_gas | fabrication; test; services | gas input | meter | 气体身份；组成；供应属性；经校准数量；压力；温度；参考体积状态；密度；边界；Q；N | 仅按该气体自身有文件证明的状态特定密度将体积换为质量；压缩空气参考条件须与供应商匹配；额定耗用不能替代实测数量。 | kg; m3 | 每批和每计量时段 | 同一可归属生产期和验收配置 | 制造商场址和实际供应接口 | 可归属期间交换量 / 验收机器数量 | 校准；批次/安全数据表/物料清单；验收；采样和不确定性记录 |
| cp_water | surface; test; services | water balance | meter | 供应；各投入水分；返回转移；期初期末槽/罐库存；产品/废料/污泥/废水含水；蒸发；反应水；实际去向；Q；N | 区分计量补水与内部循环；液体体积按自身温度/密度换算，每种湿物料采用自身水分测量。在实际场址期间边界抵消内部成对转移并核对所有项。 | kg | 每批和每期 | 同一可归属生产期和验收配置 | 制造商场址和实际供应接口 | 可归属期间交换量 / 验收机器数量 | 校准；批次/安全数据表/物料清单；验收；采样和不确定性记录 |
| cp_waste | fabrication; surface; test | waste | weighing and assay | 独立流；湿/干质量；自身水分和物种分析；回收溶剂；捕集介质负载；处理/转移去向；库存；Q；N | 称量每批废物外运和存留库存，采样实际基质。按各流自身相匹配的分析和湿/干基准计算所含 Fe、Cr、Ni 或具体溶剂，不套用进料组成。记录实际完成处理边界，不将厂外处理排放计作工厂直接排放。 | kg | 每批/每次外运 | 同一可归属生产期和验收配置 | 制造商场址和实际供应接口 | 可归属期间交换量 / 验收机器数量 | 校准；批次/安全数据表/物料清单；验收；采样和不确定性记录 |
| cp_species | surface; services | species release | sampling | 物种和化学形态；环境介质；烟囱/无组织/排水体积；自身浓度；湿/干和参考条件；捕集；破坏证据；库存；不确定性；Q；N | 在匹配边界使用分物种采样排放或验证的实际配方平衡。捕集到介质是保留，不是破坏；破坏须有实际性能证据。无法解释的溶剂剩余量为未解决项，不是空气排放。碳平衡不能证明 CO 或 NOx。具体数据集须分别列 CO2、CO、各 NOx 约定及各实际释放的金属形态。 | kg | 每次相关测试和每期 | 同一可归属生产期和验收配置 | 制造商场址和实际供应接口 | 可归属期间交换量 / 验收机器数量 | 校准；批次/安全数据表/物料清单；验收；采样和不确定性记录 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| normalize_mass | 所有清单行 | q_ref = q_item / M; q_item = 每台验收成品机器的交换数量; q_ref = 每 1 kg 参考流的交换数量。 | q_item; M; cp_mass | q_ref |  |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| period_basis | 实体生产记录 | 各配置采集含报废/返工的可归属期间交换 Q、验收数量 N 和经校准验收净质量之和。M 为该和除以 N；单台数量为 Q/N，参考数量为 Q 除以相同质量和。不得跨配置平均；报废、包装和排空试验介质质量不进入分母。每参考流协议汇总仍保留这些原始期间字段。 | cp_mass; cp_material; cp_bom |
| own_assay | 实体物料与物种记录 | 对所含 Fe、Cr、Ni 或其他实际物种，投入、产品、废料、实际存在的渣、污泥、废水、释放和库存的每一项均采用其自身匹配的分析和湿/干基准。纳入实测反应生成/消耗，抵消内部成对转移；合金总质量不是所含元素质量。本规则不要求电力或运输进行成分分析。 | cp_material; cp_waste; cp_species |
| closure_uncertainty | 物料、水、溶剂与公用工程平衡 | 纳入期初库存、投入和实测反应生成；核对产品、各废物/释放/返回/输出、期末库存和反应消耗。水包含各投入水分、产品/废物水分、蒸发和废水；溶剂包含产品保留、回收溶剂、捕集介质负载、独立证实的破坏和所有非空气去向。按实际称量、计量、采样及分配的组合不确定性调查闭合，不采用通用容差或虚构收率。 | cp_water; cp_waste; cp_species; cp_utility |
| route_state | 所有条件记录 | 维护适用性台账：实测零、有文件证明的 not_applicable 和未知不同。本候选未列的条件性实际物种或牌号须新增原子卡和匹配供应商身份；UUID 或供应商未解决阻止最终数据集使用，不能据此无依据强制排除路线。 | BOM; route sheets; supplier boundary |
| sanitary_scope | 随供配置和工厂验收 | 保留实际食品接触牌号、表面粗糙度/精整规范、焊接和钝化工艺、密封批准及验收记录。手册的物理防粘处理是强制聚四氟乙烯涂层的反例；选择实际表面处理，不假定通用涂层。区分闭路公用介质循环与外购补充量。 | tetra-sh6-2024; gea-cheese-2024 |

## 9. 校验规则

| rule_id | 规则 | source_ids |
| --- | --- | --- |
| validate_identity | 要求实际设计乳制功能、完整随供机器、声明模块、当前验收物料清单和正确出厂参考；拒绝相邻奶油分离器、通用加热器、乳制品和服务替代。 | un-cpc3-2025 |
| validate_mass | 要求经校准验收净质量，Q、N、质量和的配置/期间对应；审计每次换算并在分子保留报废/返工。 |  |
| validate_balances | 对每个实际实体物料/物种、水、溶剂和库存平衡执行 own_assay 与 closure_uncertainty。按实际组合不确定性调查缺失去向和负公用工程剩余量；未解决闭合不能报告为零或推断空气排放。 |  |
| validate_upstream | 检查各自制/外购替代、实际供应边界和公用工程来源；消除内含材料/模块、外购蒸汽/厂内锅炉以及总表/分表重复。蒸汽交付和返回项在同一接口各有独立质量及自身焓。 |  |
| validate_test | 仅纳入实际工厂试验牛乳、水、清洗剂和公用工程；拒绝将铭牌功率、客户处理量和运行耗用作为制造默认值。如实报告各适用性、缺失身份、缺失因子和完整性。 | tetra-sh6-2024; gea-bue-2026 |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | foreground_dataset |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | 声明供应边界的实际同配置机器制造数据集及下游 process/lifecyclemodel 投影 |
| excluded_use | 乳制品生产；乳品加工服务；使用阶段性能比较；未解决类别替代 |
| required_metadata | 全部参考限定信息、路线适用性、自制/外购矩阵、实测期间分母和供应商链接 |
| required_quality_disclosure | 未解决 UUID 与供应商；缺失实证范围；路线证据；实际平衡不确定性和分配；手册证据限制 |
| update_trigger | 设计、物料清单、卫生表面、供应商、模块范围、场址/期间、试验配方或公用工程来源变化 |

## 11. 数据源

| 来源标识 | 类型 | 引用 | 用途 |
| --- | --- | --- | --- |
| un-cpc3-2025 | official_guidance | UN Statistics Division, CPC Version 3.0 Explanatory Notes, 30 June 2025; https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | 第 230、236 页：实际乳制、挤奶、零件及奶油分离/热加工相邻分类；无制造数量 |
| tetra-sh6-2024 | literature | Tetra Pak Cheese Vat OST SH6, footer 2024-03; https://www.tetrapak.com/content/dam/tetrapak/media-box/global/en/processing/technology-area-cheese/curdmaking/documents/tetra-pak-cheese-vat-OST%20SH6.pdf | 第 1–3 页：槽功能、夹套、轴/刀、传动、控制、卫生接口及选项模块；加热水闭路脚注。手册净/毛重和运行耗用不是默认值 |
| gea-cheese-2024 | literature | GEA CHEESE MAKING EQUIPMENT, EN 02/2024, published 29/02/2024; https://www.gea.com/assets/gea-cheese-making-equipment-digital-brochure-308361.pdf | 第 4–16 页：实际凝乳机器和成形系列、随供工作机构、专用拉伸机与通用加热器边界及物理防粘反例 |
| gea-bue-2026 | literature | GEA Butter Making Machine BUE, publisher page snapshot 2026-10-02; https://www.gea.com/en/products/centrifuges-separation/buttermaking/buttermaking-continuous-butter-bue/ | 连续黄油揉捏机壳体、传动、油、密封及实际选项模块；运行配方/处理能力不能证明工厂试验介质 |
| tetra-butter-handbook | handbook | Tetra Pak Dairy Processing Handbook, Butter chapter, publisher snapshot 2026-10-02; https://dairyprocessinghandbook.tetrapak.com/chapter/butter | 间歇式搅乳和连续黄油机备选、工作机构和功能；无机器制造数量 |
| tetra-h7c-adjacent | literature | Tetra Pak Separator H7C, PD leaflet June 2025; https://www.tetrapak.com/content/dam/tetrapak/media-box/global/en/documents/tetra-pak-separator-h7c-pd-leaflet.pdf | 仅相邻牛乳脱脂/标准化反例；其不锈钢牌号、机器重量和耗用不定义 44132 |
