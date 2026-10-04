---
pcr_id: pcr.metal-products-machinery-and-equipment.special-purpose-machinery.bookbinding-machinery-machinery-for-type-setting-and-the-like-printing-machinery-and-ma-1de7f354
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 装订机械，排字机械及类似机械，印刷机械和印刷辅助用机械（办公用单张纸胶印机除外）

## 1. 范围与适用性

本候选规则针对工厂验收后供应的完整工业印刷、排字/制版及装订机械的制造。设备族包括卷筒/非办公单张纸胶印、凸版、柔版、凹版、丝网及工业静电/数字印刷，以及制版/滚筒制备和锁线/胶装设备。各数据集选择一种实际配置，不使用设备群平均机器。不假定共有钢级、辊筒、驱动、紫外干燥器、油墨或胶粘剂配方。

排除办公单张纸胶印机、纺织/纱线印刷设备、独立办公复印/打印/传真接口及数据处理外围设备；数字化本身不决定边界。单独销售的零件/附件及造纸/纸张加工设备不属于完整设备参考。书籍、印刷纸、印版、印刷服务及客户使用不是本规则产出。通用裁切/折页设备需功能边界审查，不自动纳入。

完整范围还保留 CPC 所列机械排字、容器/物体及表盘印刷、标签印刷、编号及轮转印刷设备族。实际丝网、柔版与凹版系统需各自机架、计量/滚筒、供料、驱动、干燥及控制 BOM；下列样例变体不缩小范围。增列实际设备族特定原子零件及试验配方，不从胶印、LEP 或 EVA/PUR 例子推定。

CPC 注释既列出“用于重复印刷的经纱印刷机”，又明确排除纺织/纱线印刷机械。保留这一来源歧义：该具名情形需审查交付功能及分类证据，不得仅凭名称一概纳入或排除设备，也不得声称来源边界无歧义。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.special-purpose-machinery.bookbinding-machinery-machinery-for-type-setting-and-the-like-printing-machinery-and-ma-1de7f354 |
| classification_refs | CPC 3.0 44914 |
| covered_products | 装订机械，排字机械及类似机械，印刷机械和印刷辅助用机械（办公用单张纸胶印机除外） |
| excluded_products | 办公单张纸胶印；纺织印刷；办公/外围打印机；独立零件；造纸设备；印刷产品与服务 |
| representative_product | Horizon BQ-500 胶装机；海德堡工业胶印机/Suprasetter CtP；HP Indigo 120K 数字印刷机，各自独立配置 |
| production_route | 按自制/外购的实际制造、装配、验收与发运 |
| market_state | 工厂验收成品设备，包括声明模块及工厂充注 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 提供具备声明印刷、成像或装订功能的验收设备 |
| How much | 1 kg 验收完整设备；同时披露一台设备验收净质量 M |
| How well | 实际合同型号、安全/功能验收及配置；不同设备族不假定性能等价 |
| How long or cycle | 一次制造及工厂验收周期；不假定寿命或客户使用时长 |
| reference_flow_link | final_product |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 装订机械，排字机械及类似机械，印刷机械和印刷辅助用机械（办公用单张纸胶印机除外） `b31260db-89a4-4b18-a5b2-90f54a2f9936` |
| 参考流属性 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 设备族与型号；序列号/配置及 BOM 版本；单张纸/卷筒/物体基材接口及幅面；胶印/凸版/柔版/凹版/丝网/静电或数字成像技术；色组数及供料/收料结构；印版/滚筒制备方式；装订缝合/胶装机构及选定胶槽；驱动/控制及液压/气动回路；干燥/紫外/激光选件；验收净质量及试验配置；工厂出口状态及所含模块；地域、供应接口及报告期 |

声明全部限定信息。称量相同配置及 BOM/试验范围的各台验收净设备，排除包装/不合格品/试验基材；求和为期间验收净质量 D，计数 N，得到 M = D/N。归属包含不合格及返工负荷的期间交换 Q：q_item = Q/N，再 q_ref = Q/D。不得跨不同设备配置平均，不以运输毛重代替。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| reference_mass | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | M = 同一配置的一台完整设备的验收净质量，单位 kg；采用 cp_mass 采集。 |
| energy_basis | electricity, natural_gas | Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | 保留电力接口参考属性，不因其名称更改：计量 kWh × 3.6 = MJ，采用已核验单位关联。气体体积需实际温压及供应低位热值。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 接收实际原材料、半成品铸件及完整部件，披露供应方已完成工序 |
| starting_condition_role | 供应产品投入，关联完整上游负荷 |
| product_classification_scope | 装订机械，排字机械及类似机械，印刷机械和印刷辅助用机械（办公用单张纸胶印机除外） |
| recursive_input_rule | 购入同类模块仅计一次供应负荷；抵消内部回流，不自动给予替代抵扣 |
| upstream_dataset_requirement | 关联实际材料/部件制造、运输、电力/供应方、各化学品/燃料及实际废物处理，披露覆盖缺口 |
| disclosure | 设备族与型号；序列号/配置及 BOM 版本；单张纸/卷筒/物体基材接口及幅面；胶印/凸版/柔版/凹版/丝网/静电或数字成像技术；色组数及供料/收料结构；印版/滚筒制备方式；装订缝合/胶装机构及选定胶槽；驱动/控制及液压/气动回路；干燥/紫外/激光选件；验收净质量及试验配置；工厂出口状态及所含模块；地域、供应接口及报告期 |

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| boundary_machine | all processes | 纳入实际设备制造直至验收工厂出口。工厂试验基材、油墨、胶粘剂、清洗溶剂及试验电力仅在此出口前纳入；后续商业印刷/装订、客户公用工程、安装、维护及寿命终止属于独立情景。 | `un-cpc3-2025`; `heidelberg-manufacture-2007` |
| boundary_makebuy | receipt, foundry, fabrication, assembly | 保留 BOM 自制/外购矩阵，说明供应状态、工序与供应方。购入成品电机/控制柜/滚筒仅计一次其内含材料及制造；不得再将其内含钢、铜、电气件、油或供应能耗作为新装配投入。厂内制造时以实际原料及工序替代该购入接口。委外铸造/电镀/涂装不得遗漏。 | `heidelberg-production` |
| boundary_atomic | all rows | 这些有条件卡片是候选交换，不是通用 BOM。场址审计后，对各实际牌号、配方、电镀化学品、燃料、制冷剂、包装件、废物及排放分别增行。自制压缩空气记录实际上游电力/燃料服务，不同时计入购入空气与其全部发电负荷。说明按份额归属的基础设施/资本及维护覆盖。 |  |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | inclusion | 纳入条件 | 角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| receipt | 购入部件接收 | required | 追溯购入零部件、实际状态及供应方工序。 | foreground_manufacturing | 每 1 kg 参考流；采集基准为每台验收成品设备 |
| foundry | 有条件厂内铸造 | conditional | 仅针对前景边界内实际制造的铸件，否则供应负荷保留在上游。 | foreground_manufacturing | 每 1 kg 参考流；采集基准为每台验收成品设备 |
| fabrication | 机械制造与精密加工 | conditional | 厂内制造机架、滚筒、轴或装订机构时的实际切割/成形/焊接/机加工/磨削/热处理。 | foreground_manufacturing | 每 1 kg 参考流；采集基准为每台验收成品设备 |
| surface | 表面准备与涂装 | conditional | 仅实际清洗、喷砂、电镀或涂装/固化，委外处理在上游携带加工及运输负荷。 | foreground_manufacturing | 每 1 kg 参考流；采集基准为每台验收成品设备 |
| assembly | 配置特定机械与电气装配 | required | 装配实际设备结构，润滑/充注回路、找正、连接并验证联锁。 | foreground_manufacturing | 每 1 kg 参考流；采集基准为每台验收成品设备 |
| acceptance | 工厂功能试验与放行 | required | 实施实际成像/印刷/装订验收试验、清理，记录不合格/返工并在发运前保护。 | foreground_manufacturing | 每 1 kg 参考流；采集基准为每台验收成品设备 |
| dispatch | 包装与工厂出口交付 | required | 纳入实测运输包装，试验后拆装发运的印刷机仍属于同一声明验收配置。 | foreground_manufacturing | 每 1 kg 参考流；采集基准为每台验收成品设备 |
| utilities | 可归属公用工程与污染控制 | required | 共享电力、空气压缩、用水、排气捕集及废水处理只计量归属一次。 | foreground_manufacturing | 每 1 kg 参考流；采集基准为每台验收成品设备 |

### 过程：购入部件接收 (`receipt`)

#### 输入

##### 产品流

###### 购入机加工铸铁印刷机侧架 (`frame`)

以实际 BOM、路线及外部交换为条件，记录准确牌号、配方或组件规范；不发生不同于未知，不规定通用配方。

- 选定流: 购入机加工铸铁印刷机侧架
- 流属性 / 单位: 质量 / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_mass；cp_frame。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_frame`
- 来源: `heidelberg-manufacture-2007`

###### 购入精密钢制印刷滚筒 (`cylinder`)

以实际 BOM、路线及外部交换为条件，记录准确牌号、配方或组件规范；不发生不同于未知，不规定通用配方。

- 选定流: 购入精密钢制印刷滚筒
- 流属性 / 单位: 质量 / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_mass；cp_cylinder。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_cylinder`
- 来源: `heidelberg-manufacture-2007`

###### 购入包覆弹性体的串墨辊 (`roller`)

以实际 BOM、路线及外部交换为条件，记录准确牌号、配方或组件规范；不发生不同于未知，不规定通用配方。

- 选定流: 购入包覆弹性体的串墨辊
- 流属性 / 单位: 质量 / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_mass；cp_roller。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_roller`
- 来源: `heidelberg-manufacture-2007`

###### 购入陶瓷涂层网纹辊 (`anilox`)

以实际 BOM、路线及外部交换为条件，记录准确牌号、配方或组件规范；不发生不同于未知，不规定通用配方。

- 选定流: 购入陶瓷涂层网纹辊
- 流属性 / 单位: 质量 / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_mass；cp_anilox。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_anilox`
- 来源: `heidelberg-manufacture-2007`

###### 购入电动伺服电机 (`motor`)

以实际 BOM、路线及外部交换为条件，记录准确牌号、配方或组件规范；不发生不同于未知，不规定通用配方。

- 选定流: 购入电动伺服电机
- 流属性 / 单位: 质量 / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_mass；cp_motor。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_motor`
- 来源: `heidelberg-manufacture-2007`

###### 购入已装配电气控制柜 (`cabinet`)

以实际 BOM、路线及外部交换为条件，记录准确牌号、配方或组件规范；不发生不同于未知，不规定通用配方。

- 选定流: 购入已装配电气控制柜
- 流属性 / 单位: 质量 / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_mass；cp_cabinet。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_cabinet`
- 来源: `heidelberg-manufacture-2007`

###### 购入制版机激光成像头 (`laser`)

以实际 BOM、路线及外部交换为条件，记录准确牌号、配方或组件规范；不发生不同于未知，不规定通用配方。

- 选定流: 购入制版机激光成像头
- 流属性 / 单位: 质量 / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_mass；cp_laser。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_laser`
- 来源: `heidelberg-manufacture-2007`

###### 购入工业喷墨打印头 (`printhead`)

以实际 BOM、路线及外部交换为条件，记录准确牌号、配方或组件规范；不发生不同于未知，不规定通用配方。

- 选定流: 购入工业喷墨打印头
- 流属性 / 单位: 质量 / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_mass；cp_printhead。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_printhead`
- 来源: `heidelberg-manufacture-2007`

###### 购入带加热装置的胶装机胶槽组件 (`glue_tank`)

以实际 BOM、路线及外部交换为条件，记录准确牌号、配方或组件规范；不发生不同于未知，不规定通用配方。

- 选定流: 购入带加热装置的胶装机胶槽组件
- 流属性 / 单位: 质量 / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_mass；cp_glue_tank。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_glue_tank`
- 来源: `heidelberg-manufacture-2007`

###### 购入锁线机缝针 (`needle`)

以实际 BOM、路线及外部交换为条件，记录准确牌号、配方或组件规范；不发生不同于未知，不规定通用配方。

- 选定流: 购入锁线机缝针
- 流属性 / 单位: 质量 / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_mass；cp_needle。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_needle`
- 来源: `heidelberg-manufacture-2007`

###### 购入钢制滚动轴承 (`bearing`)

以实际 BOM、路线及外部交换为条件，记录准确牌号、配方或组件规范；不发生不同于未知，不规定通用配方。

- 选定流: 购入钢制滚动轴承
- 流属性 / 单位: 质量 / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_mass；cp_bearing。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_bearing`
- 来源: `heidelberg-manufacture-2007`

###### 购入液压泵 (`pump`)

以实际 BOM、路线及外部交换为条件，记录准确牌号、配方或组件规范；不发生不同于未知，不规定通用配方。

- 选定流: 购入液压泵
- 流属性 / 单位: 质量 / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_mass；cp_pump。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_pump`
- 来源: `heidelberg-manufacture-2007`

###### 购入气动控制阀 (`valve`)

以实际 BOM、路线及外部交换为条件，记录准确牌号、配方或组件规范；不发生不同于未知，不规定通用配方。

- 选定流: 购入气动控制阀
- 流属性 / 单位: 质量 / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_mass；cp_valve。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_valve`
- 来源: `heidelberg-manufacture-2007`

###### 购入绝缘铜电力电缆 (`cable`)

以实际 BOM、路线及外部交换为条件，记录准确牌号、配方或组件规范；不发生不同于未知，不规定通用配方。

- 选定流: 购入绝缘铜电力电缆
- 流属性 / 单位: 质量 / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_mass；cp_cable。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_cable`
- 来源: `heidelberg-manufacture-2007`

### 过程：有条件厂内铸造 (`foundry`)

#### 输入

##### 产品流

###### 厂内铸造用生铁炉料 (`iron_charge`)

以实际 BOM、路线及外部交换为条件，记录准确牌号、配方或组件规范；不发生不同于未知，不规定通用配方。

- 选定流: 厂内铸造用生铁炉料
- 流属性 / 单位: 质量 / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_mass；cp_iron_charge。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_iron_charge`
- 来源:

###### 铸型用硅砂 (`silica_sand`)

以实际 BOM、路线及外部交换为条件，记录准确牌号、配方或组件规范；不发生不同于未知，不规定通用配方。

- 选定流: 铸型用硅砂
- 流属性 / 单位: 质量 / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_mass；cp_silica_sand。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_silica_sand`
- 来源:

###### 酚醛树脂铸造粘结剂 (`phenolic_binder`)

以实际 BOM、路线及外部交换为条件，记录准确牌号、配方或组件规范；不发生不同于未知，不规定通用配方。

- 选定流: 酚醛树脂铸造粘结剂
- 流属性 / 单位: 质量 / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_mass；cp_phenolic_binder。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_phenolic_binder`
- 来源:

#### 输出

##### 废物流

###### 含铁铸造炉渣 (`slag`)

以实际 BOM、路线及外部交换为条件，记录准确牌号、配方或组件规范；不发生不同于未知，不规定通用配方。

- 选定流: 含铁铸造炉渣
- 流属性 / 单位: 质量 / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_mass；cp_slag。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_slag`
- 来源:

###### 废硅质铸造砂 (`spent_sand`)

以实际 BOM、路线及外部交换为条件，记录准确牌号、配方或组件规范；不发生不同于未知，不规定通用配方。

- 选定流: 废硅质铸造砂
- 流属性 / 单位: 质量 / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_mass；cp_spent_sand。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_spent_sand`
- 来源:

### 过程：机械制造与精密加工 (`fabrication`)

#### 输入

##### 产品流

###### 制造设备机架用钢板 (`steel_plate`)

以实际 BOM、路线及外部交换为条件，记录准确牌号、配方或组件规范；不发生不同于未知，不规定通用配方。

- 选定流: 制造设备机架用钢板
- 流属性 / 单位: 质量 / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_mass；cp_steel_plate。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_steel_plate`
- 来源:

###### 机加工轴用钢棒 (`steel_bar`)

以实际 BOM、路线及外部交换为条件，记录准确牌号、配方或组件规范；不发生不同于未知，不规定通用配方。

- 选定流: 机加工轴用钢棒
- 流属性 / 单位: 质量 / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_mass；cp_steel_bar。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_steel_bar`
- 来源:

###### 设备护罩用铝合金板 (`aluminium`)

以实际 BOM、路线及外部交换为条件，记录准确牌号、配方或组件规范；不发生不同于未知，不规定通用配方。

- 选定流: 设备护罩用铝合金板
- 流属性 / 单位: 质量 / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_mass；cp_aluminium。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_aluminium`
- 来源:

###### 钢制电弧焊丝 (`wire`)

以实际 BOM、路线及外部交换为条件，记录准确牌号、配方或组件规范；不发生不同于未知，不规定通用配方。

- 选定流: 钢制电弧焊丝
- 流属性 / 单位: 质量 / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_mass；cp_wire。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_wire`
- 来源:

###### 焊接保护气氩气 (`argon`)

以实际 BOM、路线及外部交换为条件，记录准确牌号、配方或组件规范；不发生不同于未知，不规定通用配方。

- 选定流: 焊接保护气氩气
- 流属性 / 单位: 质量 / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_mass；cp_argon。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_argon`
- 来源:

###### 矿物油基机加工润滑剂 (`cutting_oil`)

以实际 BOM、路线及外部交换为条件，记录准确牌号、配方或组件规范；不发生不同于未知，不规定通用配方。

- 选定流: 矿物油基机加工润滑剂
- 流属性 / 单位: 质量 / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_mass；cp_cutting_oil。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_cutting_oil`
- 来源:

#### 输出

##### 废物流

###### 钢制机加工切屑 (`steel_chips`)

以实际 BOM、路线及外部交换为条件，记录准确牌号、配方或组件规范；不发生不同于未知，不规定通用配方。

- 选定流: 钢制机加工切屑
- 流属性 / 单位: 质量 / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_mass；cp_steel_chips。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_steel_chips`
- 来源:

###### 铝合金板边角料 (`aluminium_offcuts`)

以实际 BOM、路线及外部交换为条件，记录准确牌号、配方或组件规范；不发生不同于未知，不规定通用配方。

- 选定流: 铝合金板边角料
- 流属性 / 单位: 质量 / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_mass；cp_aluminium_offcuts。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_aluminium_offcuts`
- 来源:

###### 废矿物油基机加工润滑剂 (`spent_oil`)

以实际 BOM、路线及外部交换为条件，记录准确牌号、配方或组件规范；不发生不同于未知，不规定通用配方。

- 选定流: 废矿物油基机加工润滑剂
- 流属性 / 单位: 质量 / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_mass；cp_spent_oil。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_spent_oil`
- 来源:

### 过程：表面准备与涂装 (`surface`)

#### 输入

##### 产品流

###### 氢氧化钠清洗溶液 (`naoh`)

以实际 BOM、路线及外部交换为条件，记录准确牌号、配方或组件规范；不发生不同于未知，不规定通用配方。

- 选定流: 氢氧化钠清洗溶液
- 流属性 / 单位: 质量 / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_mass；cp_naoh。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_naoh`
- 来源:

###### 喷砂钢砂 (`steel_grit`)

以实际 BOM、路线及外部交换为条件，记录准确牌号、配方或组件规范；不发生不同于未知，不规定通用配方。

- 选定流: 喷砂钢砂
- 流属性 / 单位: 质量 / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_mass；cp_steel_grit。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_steel_grit`
- 来源:

###### 聚酯涂层粉末 (`powder`)

以实际 BOM、路线及外部交换为条件，记录准确牌号、配方或组件规范；不发生不同于未知，不规定通用配方。

- 选定流: 聚酯涂层粉末
- 流属性 / 单位: 质量 / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_mass；cp_powder。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_powder`
- 来源:

###### 涂装用二甲苯溶剂 (`xylene`)

以实际 BOM、路线及外部交换为条件，记录准确牌号、配方或组件规范；不发生不同于未知，不规定通用配方。

- 选定流: 涂装用二甲苯溶剂
- 流属性 / 单位: 质量 / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_mass；cp_xylene。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_xylene`
- 来源:

#### 输出

##### 废物流

###### 废聚酯涂层粉末 (`powder_waste`)

以实际 BOM、路线及外部交换为条件，记录准确牌号、配方或组件规范；不发生不同于未知，不规定通用配方。

- 选定流: 废聚酯涂层粉末
- 流属性 / 单位: 质量 / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_mass；cp_powder_waste。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_powder_waste`
- 来源:

###### 废喷砂钢砂 (`spent_grit`)

以实际 BOM、路线及外部交换为条件，记录准确牌号、配方或组件规范；不发生不同于未知，不规定通用配方。

- 选定流: 废喷砂钢砂
- 流属性 / 单位: 质量 / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_mass；cp_spent_grit。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_spent_grit`
- 来源:

##### 基本流

###### 二甲苯排入空气 (`xylene_air`)

以实际 BOM、路线及外部交换为条件，记录准确牌号、配方或组件规范；不发生不同于未知，不规定通用配方。

- 选定流: 二甲苯排入空气
- 流属性 / 单位: 质量 / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_mass；cp_xylene_air。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_xylene_air`
- 来源:

### 过程：配置特定机械与电气装配 (`assembly`)

#### 输入

##### 产品流

###### 工厂充注矿物液压油 (`hydraulic_oil`)

以实际 BOM、路线及外部交换为条件，记录准确牌号、配方或组件规范；不发生不同于未知，不规定通用配方。

- 选定流: 工厂充注矿物液压油
- 流属性 / 单位: 质量 / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_mass；cp_hydraulic_oil。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_hydraulic_oil`
- 来源:

###### 锂皂润滑脂 (`grease`)

以实际 BOM、路线及外部交换为条件，记录准确牌号、配方或组件规范；不发生不同于未知，不规定通用配方。

- 选定流: 锂皂润滑脂
- 流属性 / 单位: 质量 / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_mass；cp_grease。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_grease`
- 来源:

### 过程：工厂功能试验与放行 (`acceptance`)

#### 输入

##### 产品流

###### 工厂印刷试验用未涂布纸 (`paper`)

以实际 BOM、路线及外部交换为条件，记录准确牌号、配方或组件规范；不发生不同于未知，不规定通用配方。

- 选定流: 工厂印刷试验用未涂布纸
- 流属性 / 单位: 质量 / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_mass；cp_paper。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_paper`
- 来源:

###### 工厂验收试验用铝制胶印版 (`plate`)

以实际 BOM、路线及外部交换为条件，记录准确牌号、配方或组件规范；不发生不同于未知，不规定通用配方。

- 选定流: 工厂验收试验用铝制胶印版
- 流属性 / 单位: 质量 / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_mass；cp_plate。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_plate`
- 来源:

###### 工厂试验用黑色平版胶印油墨 (`offset_ink`)

以实际 BOM、路线及外部交换为条件，记录准确牌号、配方或组件规范；不发生不同于未知，不规定通用配方。

- 选定流: 工厂试验用黑色平版胶印油墨
- 流属性 / 单位: 质量 / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_mass；cp_offset_ink。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_offset_ink`
- 来源:

###### 工厂试验用黑色液体静电成像油墨 (`lep_ink`)

以实际 BOM、路线及外部交换为条件，记录准确牌号、配方或组件规范；不发生不同于未知，不规定通用配方。

- 选定流: 工厂试验用黑色液体静电成像油墨
- 流属性 / 单位: 质量 / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_mass；cp_lep_ink。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_lep_ink`
- 来源:

###### 工厂试验用黑色静电成像碳粉 (`toner`)

以实际 BOM、路线及外部交换为条件，记录准确牌号、配方或组件规范；不发生不同于未知，不规定通用配方。

- 选定流: 工厂试验用黑色静电成像碳粉
- 流属性 / 单位: 质量 / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_mass；cp_toner。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_toner`
- 来源:

###### 工厂试验用 EVA 热熔装订胶粘剂 (`eva`)

以实际 BOM、路线及外部交换为条件，记录准确牌号、配方或组件规范；不发生不同于未知，不规定通用配方。

- 选定流: 工厂试验用 EVA 热熔装订胶粘剂
- 流属性 / 单位: 质量 / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_mass；cp_eva。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_eva`
- 来源: `horizon-bq500`

###### 工厂试验用 PUR 反应型热熔装订胶粘剂 (`pur`)

以实际 BOM、路线及外部交换为条件，记录准确牌号、配方或组件规范；不发生不同于未知，不规定通用配方。

- 选定流: 工厂试验用 PUR 反应型热熔装订胶粘剂
- 流属性 / 单位: 质量 / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_mass；cp_pur。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_pur`
- 来源: `horizon-bq500`

###### 工厂清理用异丙醇 (`ipa`)

以实际 BOM、路线及外部交换为条件，记录准确牌号、配方或组件规范；不发生不同于未知，不规定通用配方。

- 选定流: 工厂清理用异丙醇
- 流属性 / 单位: 质量 / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_mass；cp_ipa。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_ipa`
- 来源:

###### 工厂装订试验用未装订印刷书帖 (`book_sections`)

以实际 BOM、路线及外部交换为条件，记录准确牌号、配方或组件规范；不发生不同于未知，不规定通用配方。

- 选定流: 工厂装订试验用未装订印刷书帖
- 流属性 / 单位: 质量 / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_mass；cp_book_sections。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_book_sections`
- 来源: `horizon-bq500`

#### 输出

##### 废物流

###### 废弃工厂试验装订书籍 (`test_book_waste`)

以实际 BOM、路线及外部交换为条件，记录准确牌号、配方或组件规范；不发生不同于未知，不规定通用配方。

- 选定流: 废弃工厂试验装订书籍
- 流属性 / 单位: 质量 / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_mass；cp_test_book_waste。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_test_book_waste`
- 来源:

###### 外送拆解的不合格工业印刷机 (`rejected_press`)

以实际 BOM、路线及外部交换为条件，记录准确牌号、配方或组件规范；不发生不同于未知，不规定通用配方。

- 选定流: 外送拆解的不合格工业印刷机
- 流属性 / 单位: 质量 / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_mass；cp_rejected_press。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_rejected_press`
- 来源:

###### 外送拆解的不合格装订机 (`rejected_binder`)

以实际 BOM、路线及外部交换为条件，记录准确牌号、配方或组件规范；不发生不同于未知，不规定通用配方。

- 选定流: 外送拆解的不合格装订机
- 流属性 / 单位: 质量 / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_mass；cp_rejected_binder。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_rejected_binder`
- 来源:

###### 外送拆解的不合格制版机 (`rejected_platesetter`)

以实际 BOM、路线及外部交换为条件，记录准确牌号、配方或组件规范；不发生不同于未知，不规定通用配方。

- 选定流: 外送拆解的不合格制版机
- 流属性 / 单位: 质量 / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_mass；cp_rejected_platesetter。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_rejected_platesetter`
- 来源:

###### 废弃工厂印刷试验纸 (`test_paper_waste`)

以实际 BOM、路线及外部交换为条件，记录准确牌号、配方或组件规范；不发生不同于未知，不规定通用配方。

- 选定流: 废弃工厂印刷试验纸
- 流属性 / 单位: 质量 / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_mass；cp_test_paper_waste。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_test_paper_waste`
- 来源:

###### 废 EVA 热熔胶粘剂 (`test_eva_waste`)

以实际 BOM、路线及外部交换为条件，记录准确牌号、配方或组件规范；不发生不同于未知，不规定通用配方。

- 选定流: 废 EVA 热熔胶粘剂
- 流属性 / 单位: 质量 / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_mass；cp_test_eva_waste。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_test_eva_waste`
- 来源:

###### 废固化 PUR 胶粘剂 (`test_pur_waste`)

以实际 BOM、路线及外部交换为条件，记录准确牌号、配方或组件规范；不发生不同于未知，不规定通用配方。

- 选定流: 废固化 PUR 胶粘剂
- 流属性 / 单位: 质量 / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_mass；cp_test_pur_waste。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_test_pur_waste`
- 来源:

##### 基本流

###### 异丙醇排入空气 (`ipa_air`)

以实际 BOM、路线及外部交换为条件，记录准确牌号、配方或组件规范；不发生不同于未知，不规定通用配方。

- 选定流: 异丙醇排入空气
- 流属性 / 单位: 质量 / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_mass；cp_ipa_air。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_ipa_air`
- 来源:

### 过程：包装与工厂出口交付 (`dispatch`)

#### 输入

##### 产品流

###### 木制设备运输箱 (`wood`)

以实际 BOM、路线及外部交换为条件，记录准确牌号、配方或组件规范；不发生不同于未知，不规定通用配方。

- 选定流: 木制设备运输箱
- 流属性 / 单位: 质量 / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_mass；cp_wood。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_wood`
- 来源:

###### 聚乙烯设备包装膜 (`film`)

以实际 BOM、路线及外部交换为条件，记录准确牌号、配方或组件规范；不发生不同于未知，不规定通用配方。

- 选定流: 聚乙烯设备包装膜
- 流属性 / 单位: 质量 / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_mass；cp_film。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_film`
- 来源:

###### 钢制运输捆扎带 (`strap`)

以实际 BOM、路线及外部交换为条件，记录准确牌号、配方或组件规范；不发生不同于未知，不规定通用配方。

- 选定流: 钢制运输捆扎带
- 流属性 / 单位: 质量 / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_mass；cp_strap。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_strap`
- 来源:

#### 输出

##### 产品流

###### 装订机械，排字机械及类似机械，印刷机械和印刷辅助用机械（办公用单张纸胶印机除外） (`final_product`)

验收合格的完整声明设备配置，排除运输包装、不合格设备及游离工厂试验材料。工厂充注润滑剂仅在交货 BOM 所含时保留。

- 选定流: 装订机械，排字机械及类似机械，印刷机械和印刷辅助用机械（办公用单张纸胶印机除外） `b31260db-89a4-4b18-a5b2-90f54a2f9936`
- 流属性 / 单位: 质量 / kg
- 数量规则: 1 千克
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_mass`
- 来源:

### 过程：可归属公用工程与污染控制 (`utilities`)

#### 输入

##### 产品流

###### 交流电 (`electricity`)

仅用于中国电网用户端 1–35 千伏消费组合，并匹配供应方/年份。其他电压、地域及自发电需分别解析接口，此流不是通用焚烧发电。

- 选定流: 交流电 `3d76981f-964a-4865-b588-0e067a2a1163`
- 流属性 / 单位: 净热值 / MJ
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_mass；cp_electricity。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_electricity`
- 来源:

###### 工厂燃烧用天然气 (`natural_gas`)

以实际 BOM、路线及外部交换为条件，记录准确牌号、配方或组件规范；不发生不同于未知，不规定通用配方。

- 选定流: 工厂燃烧用天然气
- 流属性 / 单位: 净热值 / MJ
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_mass；cp_natural_gas。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_natural_gas`
- 来源:

###### 购入工业工艺水 (`purchased_water`)

以实际 BOM、路线及外部交换为条件，记录准确牌号、配方或组件规范；不发生不同于未知，不规定通用配方。

- 选定流: 购入工业工艺水
- 流属性 / 单位: 体积 / m3
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_mass；cp_purchased_water。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_purchased_water`
- 来源:

#### 输出

##### 废物流

###### 外送处理的水相碱性清洗废水 (`wastewater`)

以实际 BOM、路线及外部交换为条件，记录准确牌号、配方或组件规范；不发生不同于未知，不规定通用配方。

- 选定流: 外送处理的水相碱性清洗废水
- 流属性 / 单位: 体积 / m3
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_mass；cp_wastewater。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_wastewater`
- 来源:

###### 含铁水相处理污泥 (`sludge`)

以实际 BOM、路线及外部交换为条件，记录准确牌号、配方或组件规范；不发生不同于未知，不规定通用配方。

- 选定流: 含铁水相处理污泥
- 流属性 / 单位: 质量 / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_mass；cp_sludge。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_sludge`
- 来源:

##### 基本流

###### 化石二氧化碳排入空气 (`co2`)

以实际 BOM、路线及外部交换为条件，记录准确牌号、配方或组件规范；不发生不同于未知，不规定通用配方。

- 选定流: 化石二氧化碳排入空气
- 流属性 / 单位: 质量 / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_mass；cp_co2。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_co2`
- 来源:

###### 一氧化碳排入空气 (`co`)

以实际 BOM、路线及外部交换为条件，记录准确牌号、配方或组件规范；不发生不同于未知，不规定通用配方。

- 选定流: 一氧化碳排入空气
- 流属性 / 单位: 质量 / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_mass；cp_co。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_co`
- 来源:

###### 二氧化氮排入空气 (`no2`)

以实际 BOM、路线及外部交换为条件，记录准确牌号、配方或组件规范；不发生不同于未知，不规定通用配方。

- 选定流: 二氧化氮排入空气
- 流属性 / 单位: 质量 / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_mass；cp_no2。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_no2`
- 来源:

###### 小于 2.5 微米的颗粒物排入空气 (`pm`)

以实际 BOM、路线及外部交换为条件，记录准确牌号、配方或组件规范；不发生不同于未知，不规定通用配方。

- 选定流: 小于 2.5 微米的颗粒物排入空气
- 流属性 / 单位: 质量 / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_mass；cp_pm。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_pm`
- 来源:

###### 蒸发水排入空气 (`water_vapour`)

以实际 BOM、路线及外部交换为条件，记录准确牌号、配方或组件规范；不发生不同于未知，不规定通用配方。

- 选定流: 蒸发水排入空气
- 流属性 / 单位: 质量 / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_mass；cp_water_vapour。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_water_vapour`
- 来源:

###### 排入淡水的溶解铁 (`iron_water`)

以实际 BOM、路线及外部交换为条件，记录准确牌号、配方或组件规范；不发生不同于未知，不规定通用配方。

- 选定流: 排入淡水的溶解铁
- 流属性 / 单位: 质量 / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_mass；cp_iron_water。
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_iron_water`
- 来源:

公用工程卡是跨工序仅分配一次的可归属场址总量。如增列独立工序/试验分表交换，共享服务行仅含对同期间、单位及配置分配扣除这些数量后的未归属场址余量。对负余量调查计量边界、期间、单位及不确定性，不将其截为零，不在工序总量之上再加整个工厂表计。

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| allocation_causality | shared manufacturing | 首先细分配置及工序记录，否则论证实测物理因果驱动，例如负载设备工时、能量表、涂装面积或装炉负载与周期。质量分配须解释不同配置/工序负荷。经济后备分配需一致价格/期间及敏感性分析。保留未分配总量并与各分配核对。 |  |
| allocation_rework | rejects, scrap and internal returns | 验收净产出分母排除不合格品，但可归属生产包含其材料、重复作业及处理负荷。成对内部回流数量抵消，能耗及损失不抵消。单独测量外送废料/去向，出售本身不是联产品证据，不假定避免金属抵扣。 |  |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_mass | dispatch | final_product | measurement_record | 型号；配置；序列号；验收净质量 M | 使用经校准的秤称量已验收的完整设备，排除运输包装；核对同一配置和验收记录。 | kg | 每台验收设备 | 与交换相同报告期 | 同一设备配置及 BOM/试验范围 | 每台验收净质量 | 衡器校准；匹配模块质量和及验收 |
| cp_frame | receipt | frame | measurement_record | 场址；期间；配置；BOM；实际物种/牌号；原始数量/单位；库存；成对回流；不合格/返工；分配；校准；不确定性 | 校准称量并记录期初库存、接收、转移及期末库存，保留实际牌号/配方、供应方及配置归属。 | kg | 逐批次或计量区间，核对期间总量 | 完整代表期间，含启停、不合格及返工 | 声明设备制造线及可归属共享服务 | 可归属交换 / 验收设备数量 | 保留测量、账单、化验及去向证据 |
| cp_cylinder | receipt | cylinder | measurement_record | 场址；期间；配置；BOM；实际物种/牌号；原始数量/单位；库存；成对回流；不合格/返工；分配；校准；不确定性 | 校准称量并记录期初库存、接收、转移及期末库存，保留实际牌号/配方、供应方及配置归属。 | kg | 逐批次或计量区间，核对期间总量 | 完整代表期间，含启停、不合格及返工 | 声明设备制造线及可归属共享服务 | 可归属交换 / 验收设备数量 | 保留测量、账单、化验及去向证据 |
| cp_roller | receipt | roller | measurement_record | 场址；期间；配置；BOM；实际物种/牌号；原始数量/单位；库存；成对回流；不合格/返工；分配；校准；不确定性 | 校准称量并记录期初库存、接收、转移及期末库存，保留实际牌号/配方、供应方及配置归属。 | kg | 逐批次或计量区间，核对期间总量 | 完整代表期间，含启停、不合格及返工 | 声明设备制造线及可归属共享服务 | 可归属交换 / 验收设备数量 | 保留测量、账单、化验及去向证据 |
| cp_anilox | receipt | anilox | measurement_record | 场址；期间；配置；BOM；实际物种/牌号；原始数量/单位；库存；成对回流；不合格/返工；分配；校准；不确定性 | 校准称量并记录期初库存、接收、转移及期末库存，保留实际牌号/配方、供应方及配置归属。 | kg | 逐批次或计量区间，核对期间总量 | 完整代表期间，含启停、不合格及返工 | 声明设备制造线及可归属共享服务 | 可归属交换 / 验收设备数量 | 保留测量、账单、化验及去向证据 |
| cp_motor | receipt | motor | measurement_record | 场址；期间；配置；BOM；实际物种/牌号；原始数量/单位；库存；成对回流；不合格/返工；分配；校准；不确定性 | 校准称量并记录期初库存、接收、转移及期末库存，保留实际牌号/配方、供应方及配置归属。 | kg | 逐批次或计量区间，核对期间总量 | 完整代表期间，含启停、不合格及返工 | 声明设备制造线及可归属共享服务 | 可归属交换 / 验收设备数量 | 保留测量、账单、化验及去向证据 |
| cp_cabinet | receipt | cabinet | measurement_record | 场址；期间；配置；BOM；实际物种/牌号；原始数量/单位；库存；成对回流；不合格/返工；分配；校准；不确定性 | 校准称量并记录期初库存、接收、转移及期末库存，保留实际牌号/配方、供应方及配置归属。 | kg | 逐批次或计量区间，核对期间总量 | 完整代表期间，含启停、不合格及返工 | 声明设备制造线及可归属共享服务 | 可归属交换 / 验收设备数量 | 保留测量、账单、化验及去向证据 |
| cp_laser | receipt | laser | measurement_record | 场址；期间；配置；BOM；实际物种/牌号；原始数量/单位；库存；成对回流；不合格/返工；分配；校准；不确定性 | 校准称量并记录期初库存、接收、转移及期末库存，保留实际牌号/配方、供应方及配置归属。 | kg | 逐批次或计量区间，核对期间总量 | 完整代表期间，含启停、不合格及返工 | 声明设备制造线及可归属共享服务 | 可归属交换 / 验收设备数量 | 保留测量、账单、化验及去向证据 |
| cp_printhead | receipt | printhead | measurement_record | 场址；期间；配置；BOM；实际物种/牌号；原始数量/单位；库存；成对回流；不合格/返工；分配；校准；不确定性 | 校准称量并记录期初库存、接收、转移及期末库存，保留实际牌号/配方、供应方及配置归属。 | kg | 逐批次或计量区间，核对期间总量 | 完整代表期间，含启停、不合格及返工 | 声明设备制造线及可归属共享服务 | 可归属交换 / 验收设备数量 | 保留测量、账单、化验及去向证据 |
| cp_glue_tank | receipt | glue_tank | measurement_record | 场址；期间；配置；BOM；实际物种/牌号；原始数量/单位；库存；成对回流；不合格/返工；分配；校准；不确定性 | 校准称量并记录期初库存、接收、转移及期末库存，保留实际牌号/配方、供应方及配置归属。 | kg | 逐批次或计量区间，核对期间总量 | 完整代表期间，含启停、不合格及返工 | 声明设备制造线及可归属共享服务 | 可归属交换 / 验收设备数量 | 保留测量、账单、化验及去向证据 |
| cp_needle | receipt | needle | measurement_record | 场址；期间；配置；BOM；实际物种/牌号；原始数量/单位；库存；成对回流；不合格/返工；分配；校准；不确定性 | 校准称量并记录期初库存、接收、转移及期末库存，保留实际牌号/配方、供应方及配置归属。 | kg | 逐批次或计量区间，核对期间总量 | 完整代表期间，含启停、不合格及返工 | 声明设备制造线及可归属共享服务 | 可归属交换 / 验收设备数量 | 保留测量、账单、化验及去向证据 |
| cp_bearing | receipt | bearing | measurement_record | 场址；期间；配置；BOM；实际物种/牌号；原始数量/单位；库存；成对回流；不合格/返工；分配；校准；不确定性 | 校准称量并记录期初库存、接收、转移及期末库存，保留实际牌号/配方、供应方及配置归属。 | kg | 逐批次或计量区间，核对期间总量 | 完整代表期间，含启停、不合格及返工 | 声明设备制造线及可归属共享服务 | 可归属交换 / 验收设备数量 | 保留测量、账单、化验及去向证据 |
| cp_pump | receipt | pump | measurement_record | 场址；期间；配置；BOM；实际物种/牌号；原始数量/单位；库存；成对回流；不合格/返工；分配；校准；不确定性 | 校准称量并记录期初库存、接收、转移及期末库存，保留实际牌号/配方、供应方及配置归属。 | kg | 逐批次或计量区间，核对期间总量 | 完整代表期间，含启停、不合格及返工 | 声明设备制造线及可归属共享服务 | 可归属交换 / 验收设备数量 | 保留测量、账单、化验及去向证据 |
| cp_valve | receipt | valve | measurement_record | 场址；期间；配置；BOM；实际物种/牌号；原始数量/单位；库存；成对回流；不合格/返工；分配；校准；不确定性 | 校准称量并记录期初库存、接收、转移及期末库存，保留实际牌号/配方、供应方及配置归属。 | kg | 逐批次或计量区间，核对期间总量 | 完整代表期间，含启停、不合格及返工 | 声明设备制造线及可归属共享服务 | 可归属交换 / 验收设备数量 | 保留测量、账单、化验及去向证据 |
| cp_cable | receipt | cable | measurement_record | 场址；期间；配置；BOM；实际物种/牌号；原始数量/单位；库存；成对回流；不合格/返工；分配；校准；不确定性 | 校准称量并记录期初库存、接收、转移及期末库存，保留实际牌号/配方、供应方及配置归属。 | kg | 逐批次或计量区间，核对期间总量 | 完整代表期间，含启停、不合格及返工 | 声明设备制造线及可归属共享服务 | 可归属交换 / 验收设备数量 | 保留测量、账单、化验及去向证据 |
| cp_iron_charge | foundry | iron_charge | measurement_record | 场址；期间；配置；BOM；实际物种/牌号；原始数量/单位；库存；成对回流；不合格/返工；分配；校准；不确定性 | 校准称量并记录期初库存、接收、转移及期末库存，保留实际牌号/配方、供应方及配置归属。 | kg | 逐批次或计量区间，核对期间总量 | 完整代表期间，含启停、不合格及返工 | 声明设备制造线及可归属共享服务 | 可归属交换 / 验收设备数量 | 保留测量、账单、化验及去向证据 |
| cp_silica_sand | foundry | silica_sand | measurement_record | 场址；期间；配置；BOM；实际物种/牌号；原始数量/单位；库存；成对回流；不合格/返工；分配；校准；不确定性 | 校准称量并记录期初库存、接收、转移及期末库存，保留实际牌号/配方、供应方及配置归属。 | kg | 逐批次或计量区间，核对期间总量 | 完整代表期间，含启停、不合格及返工 | 声明设备制造线及可归属共享服务 | 可归属交换 / 验收设备数量 | 保留测量、账单、化验及去向证据 |
| cp_phenolic_binder | foundry | phenolic_binder | measurement_record | 场址；期间；配置；BOM；实际物种/牌号；原始数量/单位；库存；成对回流；不合格/返工；分配；校准；不确定性 | 校准称量并记录期初库存、接收、转移及期末库存，保留实际牌号/配方、供应方及配置归属。 | kg | 逐批次或计量区间，核对期间总量 | 完整代表期间，含启停、不合格及返工 | 声明设备制造线及可归属共享服务 | 可归属交换 / 验收设备数量 | 保留测量、账单、化验及去向证据 |
| cp_slag | foundry | slag | measurement_record | 场址；期间；配置；BOM；实际物种/牌号；原始数量/单位；库存；成对回流；不合格/返工；分配；校准；不确定性 | 校准称量并记录期初库存、接收、转移及期末库存，保留实际牌号/配方、供应方及配置归属。 | kg | 逐批次或计量区间，核对期间总量 | 完整代表期间，含启停、不合格及返工 | 声明设备制造线及可归属共享服务 | 可归属交换 / 验收设备数量 | 保留测量、账单、化验及去向证据 |
| cp_spent_sand | foundry | spent_sand | measurement_record | 场址；期间；配置；BOM；实际物种/牌号；原始数量/单位；库存；成对回流；不合格/返工；分配；校准；不确定性 | 校准称量并记录期初库存、接收、转移及期末库存，保留实际牌号/配方、供应方及配置归属。 | kg | 逐批次或计量区间，核对期间总量 | 完整代表期间，含启停、不合格及返工 | 声明设备制造线及可归属共享服务 | 可归属交换 / 验收设备数量 | 保留测量、账单、化验及去向证据 |
| cp_steel_plate | fabrication | steel_plate | measurement_record | 场址；期间；配置；BOM；实际物种/牌号；原始数量/单位；库存；成对回流；不合格/返工；分配；校准；不确定性 | 校准称量并记录期初库存、接收、转移及期末库存，保留实际牌号/配方、供应方及配置归属。 | kg | 逐批次或计量区间，核对期间总量 | 完整代表期间，含启停、不合格及返工 | 声明设备制造线及可归属共享服务 | 可归属交换 / 验收设备数量 | 保留测量、账单、化验及去向证据 |
| cp_steel_bar | fabrication | steel_bar | measurement_record | 场址；期间；配置；BOM；实际物种/牌号；原始数量/单位；库存；成对回流；不合格/返工；分配；校准；不确定性 | 校准称量并记录期初库存、接收、转移及期末库存，保留实际牌号/配方、供应方及配置归属。 | kg | 逐批次或计量区间，核对期间总量 | 完整代表期间，含启停、不合格及返工 | 声明设备制造线及可归属共享服务 | 可归属交换 / 验收设备数量 | 保留测量、账单、化验及去向证据 |
| cp_aluminium | fabrication | aluminium | measurement_record | 场址；期间；配置；BOM；实际物种/牌号；原始数量/单位；库存；成对回流；不合格/返工；分配；校准；不确定性 | 校准称量并记录期初库存、接收、转移及期末库存，保留实际牌号/配方、供应方及配置归属。 | kg | 逐批次或计量区间，核对期间总量 | 完整代表期间，含启停、不合格及返工 | 声明设备制造线及可归属共享服务 | 可归属交换 / 验收设备数量 | 保留测量、账单、化验及去向证据 |
| cp_wire | fabrication | wire | measurement_record | 场址；期间；配置；BOM；实际物种/牌号；原始数量/单位；库存；成对回流；不合格/返工；分配；校准；不确定性 | 校准称量并记录期初库存、接收、转移及期末库存，保留实际牌号/配方、供应方及配置归属。 | kg | 逐批次或计量区间，核对期间总量 | 完整代表期间，含启停、不合格及返工 | 声明设备制造线及可归属共享服务 | 可归属交换 / 验收设备数量 | 保留测量、账单、化验及去向证据 |
| cp_argon | fabrication | argon | measurement_record | 场址；期间；配置；BOM；实际物种/牌号；原始数量/单位；库存；成对回流；不合格/返工；分配；校准；不确定性 | 校准称量并记录期初库存、接收、转移及期末库存，保留实际牌号/配方、供应方及配置归属。 | kg | 逐批次或计量区间，核对期间总量 | 完整代表期间，含启停、不合格及返工 | 声明设备制造线及可归属共享服务 | 可归属交换 / 验收设备数量 | 保留测量、账单、化验及去向证据 |
| cp_cutting_oil | fabrication | cutting_oil | measurement_record | 场址；期间；配置；BOM；实际物种/牌号；原始数量/单位；库存；成对回流；不合格/返工；分配；校准；不确定性 | 校准称量并记录期初库存、接收、转移及期末库存，保留实际牌号/配方、供应方及配置归属。 | kg | 逐批次或计量区间，核对期间总量 | 完整代表期间，含启停、不合格及返工 | 声明设备制造线及可归属共享服务 | 可归属交换 / 验收设备数量 | 保留测量、账单、化验及去向证据 |
| cp_steel_chips | fabrication | steel_chips | measurement_record | 场址；期间；配置；BOM；实际物种/牌号；原始数量/单位；库存；成对回流；不合格/返工；分配；校准；不确定性 | 校准称量并记录期初库存、接收、转移及期末库存，保留实际牌号/配方、供应方及配置归属。 | kg | 逐批次或计量区间，核对期间总量 | 完整代表期间，含启停、不合格及返工 | 声明设备制造线及可归属共享服务 | 可归属交换 / 验收设备数量 | 保留测量、账单、化验及去向证据 |
| cp_aluminium_offcuts | fabrication | aluminium_offcuts | measurement_record | 场址；期间；配置；BOM；实际物种/牌号；原始数量/单位；库存；成对回流；不合格/返工；分配；校准；不确定性 | 校准称量并记录期初库存、接收、转移及期末库存，保留实际牌号/配方、供应方及配置归属。 | kg | 逐批次或计量区间，核对期间总量 | 完整代表期间，含启停、不合格及返工 | 声明设备制造线及可归属共享服务 | 可归属交换 / 验收设备数量 | 保留测量、账单、化验及去向证据 |
| cp_spent_oil | fabrication | spent_oil | measurement_record | 场址；期间；配置；BOM；实际物种/牌号；原始数量/单位；库存；成对回流；不合格/返工；分配；校准；不确定性 | 校准称量并记录期初库存、接收、转移及期末库存，保留实际牌号/配方、供应方及配置归属。 | kg | 逐批次或计量区间，核对期间总量 | 完整代表期间，含启停、不合格及返工 | 声明设备制造线及可归属共享服务 | 可归属交换 / 验收设备数量 | 保留测量、账单、化验及去向证据 |
| cp_naoh | surface | naoh | measurement_record | 场址；期间；配置；BOM；实际物种/牌号；原始数量/单位；库存；成对回流；不合格/返工；分配；校准；不确定性 | 校准称量并记录期初库存、接收、转移及期末库存，保留实际牌号/配方、供应方及配置归属。 | kg | 逐批次或计量区间，核对期间总量 | 完整代表期间，含启停、不合格及返工 | 声明设备制造线及可归属共享服务 | 可归属交换 / 验收设备数量 | 保留测量、账单、化验及去向证据 |
| cp_steel_grit | surface | steel_grit | measurement_record | 场址；期间；配置；BOM；实际物种/牌号；原始数量/单位；库存；成对回流；不合格/返工；分配；校准；不确定性 | 校准称量并记录期初库存、接收、转移及期末库存，保留实际牌号/配方、供应方及配置归属。 | kg | 逐批次或计量区间，核对期间总量 | 完整代表期间，含启停、不合格及返工 | 声明设备制造线及可归属共享服务 | 可归属交换 / 验收设备数量 | 保留测量、账单、化验及去向证据 |
| cp_powder | surface | powder | measurement_record | 场址；期间；配置；BOM；实际物种/牌号；原始数量/单位；库存；成对回流；不合格/返工；分配；校准；不确定性 | 校准称量并记录期初库存、接收、转移及期末库存，保留实际牌号/配方、供应方及配置归属。 | kg | 逐批次或计量区间，核对期间总量 | 完整代表期间，含启停、不合格及返工 | 声明设备制造线及可归属共享服务 | 可归属交换 / 验收设备数量 | 保留测量、账单、化验及去向证据 |
| cp_xylene | surface | xylene | measurement_record | 场址；期间；配置；BOM；实际物种/牌号；原始数量/单位；库存；成对回流；不合格/返工；分配；校准；不确定性 | 校准称量并记录期初库存、接收、转移及期末库存，保留实际牌号/配方、供应方及配置归属。 | kg | 逐批次或计量区间，核对期间总量 | 完整代表期间，含启停、不合格及返工 | 声明设备制造线及可归属共享服务 | 可归属交换 / 验收设备数量 | 保留测量、账单、化验及去向证据 |
| cp_powder_waste | surface | powder_waste | measurement_record | 场址；期间；配置；BOM；实际物种/牌号；原始数量/单位；库存；成对回流；不合格/返工；分配；校准；不确定性 | 校准称量并记录期初库存、接收、转移及期末库存，保留实际牌号/配方、供应方及配置归属。 | kg | 逐批次或计量区间，核对期间总量 | 完整代表期间，含启停、不合格及返工 | 声明设备制造线及可归属共享服务 | 可归属交换 / 验收设备数量 | 保留测量、账单、化验及去向证据 |
| cp_spent_grit | surface | spent_grit | measurement_record | 场址；期间；配置；BOM；实际物种/牌号；原始数量/单位；库存；成对回流；不合格/返工；分配；校准；不确定性 | 校准称量并记录期初库存、接收、转移及期末库存，保留实际牌号/配方、供应方及配置归属。 | kg | 逐批次或计量区间，核对期间总量 | 完整代表期间，含启停、不合格及返工 | 声明设备制造线及可归属共享服务 | 可归属交换 / 验收设备数量 | 保留测量、账单、化验及去向证据 |
| cp_xylene_air | surface | xylene_air | measurement_record | 场址；期间；配置；BOM；实际物种/牌号；原始数量/单位；库存；成对回流；不合格/返工；分配；校准；不确定性 | 物种特定溶剂库存/保留/回收/捕集/销毁平衡，各项配方化验相匹配，并与治理后实际空气监测交叉核对。 | kg | 逐批次或计量区间，核对期间总量 | 完整代表期间，含启停、不合格及返工 | 声明设备制造线及可归属共享服务 | 可归属交换 / 验收设备数量 | 保留测量、账单、化验及去向证据 |
| cp_hydraulic_oil | assembly | hydraulic_oil | measurement_record | 场址；期间；配置；BOM；实际物种/牌号；原始数量/单位；库存；成对回流；不合格/返工；分配；校准；不确定性 | 校准称量并记录期初库存、接收、转移及期末库存，保留实际牌号/配方、供应方及配置归属。 | kg | 逐批次或计量区间，核对期间总量 | 完整代表期间，含启停、不合格及返工 | 声明设备制造线及可归属共享服务 | 可归属交换 / 验收设备数量 | 保留测量、账单、化验及去向证据 |
| cp_grease | assembly | grease | measurement_record | 场址；期间；配置；BOM；实际物种/牌号；原始数量/单位；库存；成对回流；不合格/返工；分配；校准；不确定性 | 校准称量并记录期初库存、接收、转移及期末库存，保留实际牌号/配方、供应方及配置归属。 | kg | 逐批次或计量区间，核对期间总量 | 完整代表期间，含启停、不合格及返工 | 声明设备制造线及可归属共享服务 | 可归属交换 / 验收设备数量 | 保留测量、账单、化验及去向证据 |
| cp_paper | acceptance | paper | measurement_record | 场址；期间；配置；BOM；实际物种/牌号；原始数量/单位；库存；成对回流；不合格/返工；分配；校准；不确定性 | 校准称量并记录期初库存、接收、转移及期末库存，保留实际牌号/配方、供应方及配置归属。 | kg | 逐批次或计量区间，核对期间总量 | 完整代表期间，含启停、不合格及返工 | 声明设备制造线及可归属共享服务 | 可归属交换 / 验收设备数量 | 保留测量、账单、化验及去向证据 |
| cp_plate | acceptance | plate | measurement_record | 场址；期间；配置；BOM；实际物种/牌号；原始数量/单位；库存；成对回流；不合格/返工；分配；校准；不确定性 | 校准称量并记录期初库存、接收、转移及期末库存，保留实际牌号/配方、供应方及配置归属。 | kg | 逐批次或计量区间，核对期间总量 | 完整代表期间，含启停、不合格及返工 | 声明设备制造线及可归属共享服务 | 可归属交换 / 验收设备数量 | 保留测量、账单、化验及去向证据 |
| cp_offset_ink | acceptance | offset_ink | measurement_record | 场址；期间；配置；BOM；实际物种/牌号；原始数量/单位；库存；成对回流；不合格/返工；分配；校准；不确定性 | 校准称量并记录期初库存、接收、转移及期末库存，保留实际牌号/配方、供应方及配置归属。 | kg | 逐批次或计量区间，核对期间总量 | 完整代表期间，含启停、不合格及返工 | 声明设备制造线及可归属共享服务 | 可归属交换 / 验收设备数量 | 保留测量、账单、化验及去向证据 |
| cp_lep_ink | acceptance | lep_ink | measurement_record | 场址；期间；配置；BOM；实际物种/牌号；原始数量/单位；库存；成对回流；不合格/返工；分配；校准；不确定性 | 校准称量并记录期初库存、接收、转移及期末库存，保留实际牌号/配方、供应方及配置归属。 | kg | 逐批次或计量区间，核对期间总量 | 完整代表期间，含启停、不合格及返工 | 声明设备制造线及可归属共享服务 | 可归属交换 / 验收设备数量 | 保留测量、账单、化验及去向证据 |
| cp_toner | acceptance | toner | measurement_record | 场址；期间；配置；BOM；实际物种/牌号；原始数量/单位；库存；成对回流；不合格/返工；分配；校准；不确定性 | 校准称量并记录期初库存、接收、转移及期末库存，保留实际牌号/配方、供应方及配置归属。 | kg | 逐批次或计量区间，核对期间总量 | 完整代表期间，含启停、不合格及返工 | 声明设备制造线及可归属共享服务 | 可归属交换 / 验收设备数量 | 保留测量、账单、化验及去向证据 |
| cp_eva | acceptance | eva | measurement_record | 场址；期间；配置；BOM；实际物种/牌号；原始数量/单位；库存；成对回流；不合格/返工；分配；校准；不确定性 | 校准称量并记录期初库存、接收、转移及期末库存，保留实际牌号/配方、供应方及配置归属。 | kg | 逐批次或计量区间，核对期间总量 | 完整代表期间，含启停、不合格及返工 | 声明设备制造线及可归属共享服务 | 可归属交换 / 验收设备数量 | 保留测量、账单、化验及去向证据 |
| cp_pur | acceptance | pur | measurement_record | 场址；期间；配置；BOM；实际物种/牌号；原始数量/单位；库存；成对回流；不合格/返工；分配；校准；不确定性 | 校准称量并记录期初库存、接收、转移及期末库存，保留实际牌号/配方、供应方及配置归属。 | kg | 逐批次或计量区间，核对期间总量 | 完整代表期间，含启停、不合格及返工 | 声明设备制造线及可归属共享服务 | 可归属交换 / 验收设备数量 | 保留测量、账单、化验及去向证据 |
| cp_ipa | acceptance | ipa | measurement_record | 场址；期间；配置；BOM；实际物种/牌号；原始数量/单位；库存；成对回流；不合格/返工；分配；校准；不确定性 | 校准称量并记录期初库存、接收、转移及期末库存，保留实际牌号/配方、供应方及配置归属。 | kg | 逐批次或计量区间，核对期间总量 | 完整代表期间，含启停、不合格及返工 | 声明设备制造线及可归属共享服务 | 可归属交换 / 验收设备数量 | 保留测量、账单、化验及去向证据 |
| cp_book_sections | acceptance | book_sections | measurement_record | 场址；期间；配置；BOM；实际物种/牌号；原始数量/单位；库存；成对回流；不合格/返工；分配；校准；不确定性 | 校准称量并记录期初库存、接收、转移及期末库存，保留实际牌号/配方、供应方及配置归属。 | kg | 逐批次或计量区间，核对期间总量 | 完整代表期间，含启停、不合格及返工 | 声明设备制造线及可归属共享服务 | 可归属交换 / 验收设备数量 | 保留测量、账单、化验及去向证据 |
| cp_test_book_waste | acceptance | test_book_waste | measurement_record | 场址；期间；配置；BOM；实际物种/牌号；原始数量/单位；库存；成对回流；不合格/返工；分配；校准；不确定性 | 校准称量并记录期初库存、接收、转移及期末库存，保留实际牌号/配方、供应方及配置归属。 | kg | 逐批次或计量区间，核对期间总量 | 完整代表期间，含启停、不合格及返工 | 声明设备制造线及可归属共享服务 | 可归属交换 / 验收设备数量 | 保留测量、账单、化验及去向证据 |
| cp_rejected_press | acceptance | rejected_press | measurement_record | 场址；期间；配置；BOM；实际物种/牌号；原始数量/单位；库存；成对回流；不合格/返工；分配；校准；不确定性 | 校准称量并记录期初库存、接收、转移及期末库存，保留实际牌号/配方、供应方及配置归属。 | kg | 逐批次或计量区间，核对期间总量 | 完整代表期间，含启停、不合格及返工 | 声明设备制造线及可归属共享服务 | 可归属交换 / 验收设备数量 | 保留测量、账单、化验及去向证据 |
| cp_rejected_binder | acceptance | rejected_binder | measurement_record | 场址；期间；配置；BOM；实际物种/牌号；原始数量/单位；库存；成对回流；不合格/返工；分配；校准；不确定性 | 校准称量并记录期初库存、接收、转移及期末库存，保留实际牌号/配方、供应方及配置归属。 | kg | 逐批次或计量区间，核对期间总量 | 完整代表期间，含启停、不合格及返工 | 声明设备制造线及可归属共享服务 | 可归属交换 / 验收设备数量 | 保留测量、账单、化验及去向证据 |
| cp_rejected_platesetter | acceptance | rejected_platesetter | measurement_record | 场址；期间；配置；BOM；实际物种/牌号；原始数量/单位；库存；成对回流；不合格/返工；分配；校准；不确定性 | 校准称量并记录期初库存、接收、转移及期末库存，保留实际牌号/配方、供应方及配置归属。 | kg | 逐批次或计量区间，核对期间总量 | 完整代表期间，含启停、不合格及返工 | 声明设备制造线及可归属共享服务 | 可归属交换 / 验收设备数量 | 保留测量、账单、化验及去向证据 |
| cp_test_paper_waste | acceptance | test_paper_waste | measurement_record | 场址；期间；配置；BOM；实际物种/牌号；原始数量/单位；库存；成对回流；不合格/返工；分配；校准；不确定性 | 校准称量并记录期初库存、接收、转移及期末库存，保留实际牌号/配方、供应方及配置归属。 | kg | 逐批次或计量区间，核对期间总量 | 完整代表期间，含启停、不合格及返工 | 声明设备制造线及可归属共享服务 | 可归属交换 / 验收设备数量 | 保留测量、账单、化验及去向证据 |
| cp_test_eva_waste | acceptance | test_eva_waste | measurement_record | 场址；期间；配置；BOM；实际物种/牌号；原始数量/单位；库存；成对回流；不合格/返工；分配；校准；不确定性 | 校准称量并记录期初库存、接收、转移及期末库存，保留实际牌号/配方、供应方及配置归属。 | kg | 逐批次或计量区间，核对期间总量 | 完整代表期间，含启停、不合格及返工 | 声明设备制造线及可归属共享服务 | 可归属交换 / 验收设备数量 | 保留测量、账单、化验及去向证据 |
| cp_test_pur_waste | acceptance | test_pur_waste | measurement_record | 场址；期间；配置；BOM；实际物种/牌号；原始数量/单位；库存；成对回流；不合格/返工；分配；校准；不确定性 | 校准称量并记录期初库存、接收、转移及期末库存，保留实际牌号/配方、供应方及配置归属。 | kg | 逐批次或计量区间，核对期间总量 | 完整代表期间，含启停、不合格及返工 | 声明设备制造线及可归属共享服务 | 可归属交换 / 验收设备数量 | 保留测量、账单、化验及去向证据 |
| cp_ipa_air | acceptance | ipa_air | measurement_record | 场址；期间；配置；BOM；实际物种/牌号；原始数量/单位；库存；成对回流；不合格/返工；分配；校准；不确定性 | 匹配物种特定购入浓度、保留/退回/回收溶剂、销毁及实测排气/逸散释放，区分湿擦拭布及水相残留。 | kg | 逐批次或计量区间，核对期间总量 | 完整代表期间，含启停、不合格及返工 | 声明设备制造线及可归属共享服务 | 可归属交换 / 验收设备数量 | 保留测量、账单、化验及去向证据 |
| cp_wood | dispatch | wood | measurement_record | 场址；期间；配置；BOM；实际物种/牌号；原始数量/单位；库存；成对回流；不合格/返工；分配；校准；不确定性 | 校准称量并记录期初库存、接收、转移及期末库存，保留实际牌号/配方、供应方及配置归属。 | kg | 逐批次或计量区间，核对期间总量 | 完整代表期间，含启停、不合格及返工 | 声明设备制造线及可归属共享服务 | 可归属交换 / 验收设备数量 | 保留测量、账单、化验及去向证据 |
| cp_film | dispatch | film | measurement_record | 场址；期间；配置；BOM；实际物种/牌号；原始数量/单位；库存；成对回流；不合格/返工；分配；校准；不确定性 | 校准称量并记录期初库存、接收、转移及期末库存，保留实际牌号/配方、供应方及配置归属。 | kg | 逐批次或计量区间，核对期间总量 | 完整代表期间，含启停、不合格及返工 | 声明设备制造线及可归属共享服务 | 可归属交换 / 验收设备数量 | 保留测量、账单、化验及去向证据 |
| cp_strap | dispatch | strap | measurement_record | 场址；期间；配置；BOM；实际物种/牌号；原始数量/单位；库存；成对回流；不合格/返工；分配；校准；不确定性 | 校准称量并记录期初库存、接收、转移及期末库存，保留实际牌号/配方、供应方及配置归属。 | kg | 逐批次或计量区间，核对期间总量 | 完整代表期间，含启停、不合格及返工 | 声明设备制造线及可归属共享服务 | 可归属交换 / 验收设备数量 | 保留测量、账单、化验及去向证据 |
| cp_electricity | utilities | electricity | measurement_record | 场址；期间；配置；BOM；实际物种/牌号；原始数量/单位；库存；成对回流；不合格/返工；分配；校准；不确定性 | 工序分表与电网账单，原始 kWh 乘 3.6 转为 MJ；加工、固化、装配、试验、压缩机及污染控制与购电总量核对，避免重复分配。 | MJ | 逐批次或计量区间，核对期间总量 | 完整代表期间，含启停、不合格及返工 | 声明设备制造线及可归属共享服务 | 可归属交换 / 验收设备数量 | 保留测量、账单、化验及去向证据 |
| cp_natural_gas | utilities | natural_gas | measurement_record | 场址；期间；配置；BOM；实际物种/牌号；原始数量/单位；库存；成对回流；不合格/返工；分配；校准；不确定性 | 计量声明温压的气体体积及实际供应低位热值，保留燃烧工序分配及气体组成。 | MJ | 逐批次或计量区间，核对期间总量 | 完整代表期间，含启停、不合格及返工 | 声明设备制造线及可归属共享服务 | 可归属交换 / 验收设备数量 | 保留测量、账单、化验及去向证据 |
| cp_purchased_water | utilities | purchased_water | measurement_record | 场址；期间；配置；BOM；实际物种/牌号；原始数量/单位；库存；成对回流；不合格/返工；分配；校准；不确定性 | 计量外部补水，记录用于质量平衡的水密度、库存变化、进料水分、蒸发、反应及出水，内部空气/水公用工程产出作为成对转移。 | m3 | 逐批次或计量区间，核对期间总量 | 完整代表期间，含启停、不合格及返工 | 声明设备制造线及可归属共享服务 | 可归属交换 / 验收设备数量 | 保留测量、账单、化验及去向证据 |
| cp_wastewater | utilities | wastewater | measurement_record | 场址；期间；配置；BOM；实际物种/牌号；原始数量/单位；库存；成对回流；不合格/返工；分配；校准；不确定性 | 校准称量并记录期初库存、接收、转移及期末库存，保留实际牌号/配方、供应方及配置归属。 | m3 | 逐批次或计量区间，核对期间总量 | 完整代表期间，含启停、不合格及返工 | 声明设备制造线及可归属共享服务 | 可归属交换 / 验收设备数量 | 保留测量、账单、化验及去向证据 |
| cp_sludge | utilities | sludge | measurement_record | 场址；期间；配置；BOM；实际物种/牌号；原始数量/单位；库存；成对回流；不合格/返工；分配；校准；不确定性 | 校准称量并记录期初库存、接收、转移及期末库存，保留实际牌号/配方、供应方及配置归属。 | kg | 逐批次或计量区间，核对期间总量 | 完整代表期间，含启停、不合格及返工 | 声明设备制造线及可归属共享服务 | 可归属交换 / 验收设备数量 | 保留测量、账单、化验及去向证据 |
| cp_co2 | utilities | co2 | measurement_record | 场址；期间；配置；BOM；实际物种/牌号；原始数量/单位；库存；成对回流；不合格/返工；分配；校准；不确定性 | 治理后实测实际物种浓度、干/湿基准、排气流量及运行时长。燃料碳平衡可支持化石 CO2，不能单独确定 CO、二氧化氮或颗粒物；混合 NOx 映射前须物种分解。 | kg | 逐批次或计量区间，核对期间总量 | 完整代表期间，含启停、不合格及返工 | 声明设备制造线及可归属共享服务 | 可归属交换 / 验收设备数量 | 保留测量、账单、化验及去向证据 |
| cp_co | utilities | co | measurement_record | 场址；期间；配置；BOM；实际物种/牌号；原始数量/单位；库存；成对回流；不合格/返工；分配；校准；不确定性 | 治理后实测实际物种浓度、干/湿基准、排气流量及运行时长。燃料碳平衡可支持化石 CO2，不能单独确定 CO、二氧化氮或颗粒物；混合 NOx 映射前须物种分解。 | kg | 逐批次或计量区间，核对期间总量 | 完整代表期间，含启停、不合格及返工 | 声明设备制造线及可归属共享服务 | 可归属交换 / 验收设备数量 | 保留测量、账单、化验及去向证据 |
| cp_no2 | utilities | no2 | measurement_record | 场址；期间；配置；BOM；实际物种/牌号；原始数量/单位；库存；成对回流；不合格/返工；分配；校准；不确定性 | 治理后实测实际物种浓度、干/湿基准、排气流量及运行时长。燃料碳平衡可支持化石 CO2，不能单独确定 CO、二氧化氮或颗粒物；混合 NOx 映射前须物种分解。 | kg | 逐批次或计量区间，核对期间总量 | 完整代表期间，含启停、不合格及返工 | 声明设备制造线及可归属共享服务 | 可归属交换 / 验收设备数量 | 保留测量、账单、化验及去向证据 |
| cp_pm | utilities | pm | measurement_record | 场址；期间；配置；BOM；实际物种/牌号；原始数量/单位；库存；成对回流；不合格/返工；分配；校准；不确定性 | 治理后实测实际物种浓度、干/湿基准、排气流量及运行时长。燃料碳平衡可支持化石 CO2，不能单独确定 CO、二氧化氮或颗粒物；混合 NOx 映射前须物种分解。 | kg | 逐批次或计量区间，核对期间总量 | 完整代表期间，含启停、不合格及返工 | 声明设备制造线及可归属共享服务 | 可归属交换 / 验收设备数量 | 保留测量、账单、化验及去向证据 |
| cp_water_vapour | utilities | water_vapour | measurement_record | 场址；期间；配置；BOM；实际物种/牌号；原始数量/单位；库存；成对回流；不合格/返工；分配；校准；不确定性 | 校准称量并记录期初库存、接收、转移及期末库存，保留实际牌号/配方、供应方及配置归属。 | kg | 逐批次或计量区间，核对期间总量 | 完整代表期间，含启停、不合格及返工 | 声明设备制造线及可归属共享服务 | 可归属交换 / 验收设备数量 | 保留测量、账单、化验及去向证据 |
| cp_iron_water | utilities | iron_water | measurement_record | 场址；期间；配置；BOM；实际物种/牌号；原始数量/单位；库存；成对回流；不合格/返工；分配；校准；不确定性 | 按实际接收介质，采用匹配出水流量乘溶解铁化验浓度；外送处理转移不是直接基本流释放。 | kg | 逐批次或计量区间，核对期间总量 | 完整代表期间，含启停、不合格及返工 | 声明设备制造线及可归属共享服务 | 可归属交换 / 验收设备数量 | 保留测量、账单、化验及去向证据 |

采集匹配配置及期间包含不合格/返工负荷的 Q，N 仅计完整验收设备。cp_mass 保留各台验收实测净质量，以其和为 D，以 D/N 为 M。本规则不提供假设工厂能耗、部件成材率、排放或设备寿命。不发生的行记录 not_applicable，缺测数量保持未知，不得填零。

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| normalize_mass | frame, cylinder, roller, anilox, motor, cabinet, laser, printhead, glue_tank, needle, bearing, pump, valve, cable, iron_charge, silica_sand, phenolic_binder, slag, spent_sand, steel_plate, steel_bar, aluminium, wire, argon, cutting_oil, steel_chips, aluminium_offcuts, spent_oil, naoh, steel_grit, powder, xylene, powder_waste, spent_grit, xylene_air, hydraulic_oil, grease, paper, plate, offset_ink, lep_ink, toner, eva, pur, ipa, book_sections, test_book_waste, rejected_press, rejected_binder, rejected_platesetter, test_paper_waste, test_eva_waste, test_pur_waste, ipa_air, wood, film, strap, electricity, natural_gas, purchased_water, wastewater, sludge, co2, co, no2, pm, water_vapour, iron_water | q_ref = q_item / M; q_item = 每台验收成品设备的交换数量; q_ref = 每 1 kg 参考流的交换数量。 | q_item; M; cp_mass | q_ref |  |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| configuration | machine | 设备族与型号；序列号/配置及 BOM 版本；单张纸/卷筒/物体基材接口及幅面；胶印/凸版/柔版/凹版/丝网/静电或数字成像技术；色组数及供料/收料结构；印版/滚筒制备方式；装订缝合/胶装机构及选定胶槽；驱动/控制及液压/气动回路；干燥/紫外/激光选件；验收净质量及试验配置；工厂出口状态及所含模块；地域、供应接口及报告期 | BOM；供应状态；图纸；试验/验收记录 |
| physical_closure | physical materials/species only | 逐种实物材料及所含物种，以外部投入和期初库存对照合格产品、期末库存、外送废料、炉渣、污泥、废水及空气/水排放；每一项均采用匹配物种化验与干/湿基准，包括产品和购入料。不得将湿废物、氧化物或合金质量等同所含金属。纳入反应生成/消耗、取样不确定性及成对回流转移。实际水平衡包括外部补水、进料水分、期初/期末储量、产品保留水分、蒸发、排放、转移及反应水；密度转换须实测或有来源。分别核对各溶剂，包括涂层/产品保留、回收溶剂、捕集介质负载、已验证销毁、废水与固体残留。所选边界内成对回流抵消，但保留返工能耗及损失。依据实际组合测量、取样及分配不确定性调查残差，不设通用容差。 | 匹配化验与测量/取样/分配不确定性 |
| provider_identity | all exchanges | 解析实际原子流、化学物种/状态、属性/单位、供应方地域/年份及排放介质。候选指导不能替代私有工厂证据或解决未核验 UUID。 | manifest review_metadata |
| empirical_ranges | all inputs and outputs | 未建立通用强度、质量、成材率或经验范围；采集实际记录，披露不确定性，在采用校验范围前取得独立相容证据。 | 场址记录及已审查公共证据 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| validate_scope | machine | 核对功能与排除反例类别、实际配置、验收净产出、全部必需限定信息及正确参考 UUID；不假定工业数字印刷机是办公外围设备。 | `un-cpc3-2025` |
| validate_normalization | all rows | 核对同一 BOM/试验配置正 N、D 及 M；按验收产出核验全部换算，不合格/返工仅保留在分子。 |  |
| validate_balances | physical material/species records | 逐种实物材料及所含物种，以外部投入和期初库存对照合格产品、期末库存、外送废料、炉渣、污泥、废水及空气/水排放；每一项均采用匹配物种化验与干/湿基准，包括产品和购入料。不得将湿废物、氧化物或合金质量等同所含金属。纳入反应生成/消耗、取样不确定性及成对回流转移。实际水平衡包括外部补水、进料水分、期初/期末储量、产品保留水分、蒸发、排放、转移及反应水；密度转换须实测或有来源。分别核对各溶剂，包括涂层/产品保留、回收溶剂、捕集介质负载、已验证销毁、废水与固体残留。所选边界内成对回流抵消，但保留返工能耗及损失。依据实际组合测量、取样及分配不确定性调查残差，不设通用容差。 |  |
| validate_completion | dataset | 核对有条件自制/外购路线、各外部原子交换、上游部件负荷只计一次、公用工程不重复、废物去向及物种特定治理后排放。未解决的必需 UUID、数量、供应覆盖或单位转换阻止完整数据集。未知不是零，机械方法规则不是符合性证书。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | foreground_dataset |
| downstream_use | process; lifecyclemodel |
| allowed_use | 制造一种声明设备配置，关联上游负荷 |
| excluded_use | 印刷产品、客户运行、办公/纺织设备、独立备件数据集或无适当限定的跨设备族比较 |
| required_metadata | 设备族与型号；序列号/配置及 BOM 版本；单张纸/卷筒/物体基材接口及幅面；胶印/凸版/柔版/凹版/丝网/静电或数字成像技术；色组数及供料/收料结构；印版/滚筒制备方式；装订缝合/胶装机构及选定胶槽；驱动/控制及液压/气动回路；干燥/紫外/激光选件；验收净质量及试验配置；工厂出口状态及所含模块；地域、供应接口及报告期 |
| required_quality_disclosure | 自制/外购范围、供应方及来源限制、未解决身份/数量/范围、不确定性、分配及废物去向 |
| update_trigger | 设备功能/配置/BOM、生产路线、验收、供应方或出口状态改变 |

## 11. 数据源

| 来源 id | 类型 | 参考 | 用途 |
| --- | --- | --- | --- |
| un-cpc3-2025 | official_guidance | UNSD, CPC Version 3.0 Explanatory Notes, 30 June 2025, 44914, 44942, 45150, 44917 and 4526. https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | 设备族纳入及反例类别，分类不是工厂配方。 |
| horizon-bq500 | extension_guidance | Horizon BQ-500 Perfect Binder brochure, pages 3–6, retrieved 2 October 2026. https://www.horizon.co.jp/products/catalog/e_pdf/e002bi/02bq4_pdf/bq500_e.pdf | 独立装订设备结构及可互换 EVA/PUR 胶槽备选项，不设通用胶粘剂或耗量。 |
| hp-digital-2024 | extension_guidance | HP, Analog to Digital Transformation, 24 March 2024. https://www.hp.com/us-en/newsroom/blogs/2024/hp-accelerates-the-analog-to-digital-transformation.html | Indigo 120K 商业数字印刷机/LEP 反证仅模拟设备结构，客户生产率主张不是制造因子。 |
| heidelberg-production | extension_guidance | HEIDELBERG Company profile, International production network, retrieved 2 October 2026. https://www.heidelberg.com/global/en/about_heidelberg/company/company_profile/company_profile_1/company_profile_1.jsp | 地域分散网络中的有条件铸造、机械零件、电气与装配，不要求统一纵向集成。 |
| heidelberg-manufacture-2007 | extension_guidance | HEIDELBERG, A printing press is born, 2007, PDF pages 24–31. https://www.heidelberg.com/global/media/en/global_media/company___about_us/history/historical_documents/2007_heidelberg_a_printing_press_is_born.pdf | 历史胶印特定购件、装配、工厂试印、清理与发运。已审读文本，直接 PDF 获取/渲染不可用，不采用历史质量、份额或时间数值。 |
| heidelberg-ctp | extension_guidance | HEIDELBERG USA, Offset Computer-to-Plate overview, Suprasetter A75 and A106/106, retrieved 2 October 2026. https://www.heidelberg.com/us/en/products/computer_to_plate_1/prepress_overview.jsp | 已审读官方概览，描述与印刷机区分的印版成像设备及手动/自动装版备选项，不采用数值规范。另行宣传册下载/渲染仍不可用。 |
