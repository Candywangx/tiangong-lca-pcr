---
pcr_id: pcr.metal-products-machinery-and-equipment.special-purpose-machinery.electric-blankets
language: zh-CN
sync_with: pcr.en-US.md
status: candidate
content_maturity: authored_methodology
---

# 电热毯

## 1. 范围与适用性

本候选规则适用于工厂出厂的完整家用电热纺织盖毯和铺毯的前景生产。参考对象为已制造产品质量，不是保暖一小时。制造包含实际纺织准备、发热体集成、控制、电连接、验收与发货。消费者使用、洗涤和报废属于独立下游情景。Beurer 同时供应铺毯与盖毯；其有记录的非织造布配比和可拆控制器是实例，不是通用 BOM。独立专利结构展示绝缘线缆与集成导电纱两种选择。[beurer-ub60; beurer-throws; woven-heater-patent; cable-heater-patent]

被动保暖毯、独立发热零件、电热服装、座椅加热器和医用热疗设备需各自审查主要功能及分类。专利广义“毯”涵盖加热垫不能证明该产品属于此家用边界。实际新结构、电池供电或特殊发热设计仍可接受产品审查；必须提供各自核实的 BOM、具体行及供应商证据，不得无依据排除方法。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.special-purpose-machinery.electric-blankets |
| classification_refs | CPC 3.0 44813 — 电热毯 |
| covered_products | 完整家用电热纺织盖毯；完整家用电热纺织铺毯 |
| excluded_products | 被动保暖毯；独立供应零件；医用热疗设备；电热服装及座椅 |
| representative_product | 具有实际纺织发热体、控制及电源连接的家用毯 |
| production_route | 购入纺织物与绝缘发热体组装；条件性场内发热体／纱线／纺织制造；实际自制／外购矩阵 |
| market_state | 验收已制造成品，工厂出厂状态 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 同一声明配置的验收完整家用电热毯 |
| How much | 1 kg 成品净质量 |
| How well | 满足实际型号的电气、热保护、纺织与验收要求 |
| How long or cycle | 一个工厂生产批次；寿命仅在独立使用情景声明 |
| reference_flow_link | finished_blanket |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 电热毯 `db63276c-3e0f-4fe9-80de-b45ff12d515b` |
| 参考流属性 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 型号；盖毯／铺毯形态；尺寸；纤维配比／整理；发热结构及导体／绝缘化学组成；分区；供电电压及插头／地域；控制／保护及感温结构；所含电源线／附件；自制／外购边界；验收净质量及批次；场址／期间；检测协议 |

前景数据包必须声明全部限定信息。通用参考流支持已制造电热毯身份与质量属性；不提供地域、BOM、供应商或经验数量。缺少限定信息则具体数据包不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| reference_mass | reference product | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | M = 同一配置的一台完整设备的验收净质量，单位 kg；采用 cp_mass 采集。 |
| physical_basis | 物理材料与物种记录 | 质量 | kg | 对每种实际材料和每种所含物种使用自身匹配的测定及湿／干基准。线缆或织物总质量不等于金属、聚合物或溶剂含量。长度／数量以实际批次质量或牌号特定实测线密度／面密度换算。 |
| utility_basis | 公用工程记录 | 能量 | kWh | 保留交付电力单位、电压、供应商／场址地域及期间；记录 kWh／MJ 换算。特定废物焚烧电力不是通用工厂电网供电。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 实际采购织物／纱线、发热线缆／纱、控制和连接组件或有记录的原料牌号制造投入 |
| starting_condition_role | foreground_boundary_choice |
| product_classification_scope | 家用电热纺织毯已制造产品 |
| recursive_input_rule | 购入未完成／完整毯进入进一步整理时作为一个上游中间品，记录已包含工序；不递归或重复内含投入 |
| upstream_dataset_requirement | 每个采购交换需匹配供应商证据的实际牌号、地域、技术及交付接口 |
| disclosure | 场址、期间、实际自制／外购矩阵、所含附件、上游链接、未纳入工序及下游情景分离 |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| b_makebuy | all processes | 对每个纺织层、发热体、控制器及连接件选择完整外购组件或场内制造。前者的内含材料上游负荷计入一次；后者记录全部实际单独牌号、化学品、公用工程、废物及排放。此处未列的实际替代物增加不同原子行；实例不是强制配方。 |  |
| b_factory | all processes | 纳入声明工厂边界的进厂运输、实际转化、连接、检测、返工、废品处理及包装；运输供应商需按具体方式另设货运行。后续空间／人体加热、洗涤、产品寿命及处置仅属于明确独立的生命周期情景。 |  |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| textile | 纺织准备与裁剪缝制 | conditional | 实际工序或实际采购接口；记录缺失路线 | foreground | finished_blanket |
| heater | 发热体制造或购入发热体集成 | required | 实际工序或实际采购接口；记录缺失路线 | foreground | finished_blanket |
| assembly | 控制、接线与毯体组装 | required | 实际工序或实际采购接口；记录缺失路线 | foreground | finished_blanket |
| test | 验收检测与废品处理 | required | 实际工序或实际采购接口；记录缺失路线 | foreground | finished_blanket |
| dispatch | 包装与工厂出厂 | required | 实际工序或实际采购接口；记录缺失路线 | foreground | finished_blanket |
| services | 工厂残余公用服务 | conditional | 实际工序或实际采购接口；记录缺失路线 | foreground | finished_blanket |

下列行是条件性的原子接口。记录实际材料牌号及供应商，区分 not_applicable（核实不存在）、实测零与未知。完整采购组件替代内含原料投入。对每种实际树脂、染料、胶粘剂配方、助焊剂、焊料合金、纺织物、燃料或物种分别扩展数据包；组成未知则相关完整性受阻。

### 过程：纺织准备与裁剪缝制 (`textile`)

#### 输入

##### 产品流

###### 聚酯纤维—粘胶—聚丙烯针刺非织造布 (`nonwoven`)

仅用于有记录的混合纤维非织造布路线；记录实际纤维配比、整理、面密度及再生含量证据。成品织物投入仅计一次上游纤维生产。

- 选定流: 聚酯纤维—粘胶—聚丙烯针刺非织造布
- 流属性/单位: 质量 / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式: 前景记录（`foreground_record`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型: 过程输出（`process_output`）
- 证据类型: 采集记录（`collected_record`）
- 采集协议: `cp_material`
- 来源: `beurer-ub60`

###### 棉机织物 (`cotton_fabric`)

仅在实际采购棉机织物层时纳入；不得代替有记录的非织造布混合物。

- 选定流: 棉机织物
- 流属性/单位: 质量 / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式: 前景记录（`foreground_record`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型: 过程输出（`process_output`）
- 证据类型: 采集记录（`collected_record`）
- 采集协议: `cp_material`

###### 聚酯纤维纺织纱线 (`polyester_yarn`)

仅在场内织造、针织或绝缘纱包覆时纳入；区分织物纱与发热纱芯／外包覆纱，不重复计入购入织物。

- 选定流: 聚酯纤维纺织纱线
- 流属性/单位: 质量 / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式: 前景记录（`foreground_record`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型: 过程输出（`process_output`）
- 证据类型: 采集记录（`collected_record`）
- 采集协议: `cp_material`
- 来源: `woven-heater-patent`

###### 聚酯纤维缝纫线 (`sewing_thread`)

仅用于实际聚酯纤维缝线或包边线；其他线材化学组成另建原子行。

- 选定流: 聚酯纤维缝纫线
- 流属性/单位: 质量 / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式: 前景记录（`foreground_record`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型: 过程输出（`process_output`）
- 证据类型: 采集记录（`collected_record`）
- 采集协议: `cp_material`

###### 工厂供电电压下购入的交流电力 (`textile_power`)

计量实际裁剪、缝制、织造和整理用电；电热毯额定使用功率不是生产耗电。

- 选定流: 工厂供电电压下购入的交流电力
- 流属性/单位: 能量 / kWh
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_utility。
- 数值来源模式: 前景记录（`foreground_record`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型: 过程输出（`process_output`）
- 证据类型: 采集记录（`collected_record`）
- 采集协议: `cp_utility`

#### 输出

##### 废物流

###### 聚酯纤维—粘胶—聚丙烯非织造布边角料 (`fabric_offcut`)

仅来自对应织物路线；按配比和处理去向称重；其他纺织废物分别记录。

- 选定流: 聚酯纤维—粘胶—聚丙烯非织造布边角料
- 流属性/单位: 质量 / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式: 前景记录（`foreground_record`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型: 过程输出（`process_output`）
- 证据类型: 采集记录（`collected_record`）
- 采集协议: `cp_material`

### 过程：发热体制造或购入发热体集成 (`heater`)

#### 输入

##### 产品流

###### 绝缘电热毯发热线缆 (`heater_cable`)

采购完整线缆分支：按供应商图纸记录导体、隔离层、护套及感温结构。不得再次投入其内含导体或树脂。

- 选定流: 绝缘电热毯发热线缆
- 流属性/单位: 质量 / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式: 前景记录（`foreground_record`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型: 过程输出（`process_output`）
- 证据类型: 采集记录（`collected_record`）
- 采集协议: `cp_material`
- 来源: `cable-heater-patent`

###### 绝缘不锈钢导电纺织纱线 (`conductive_yarn`)

实际结构相符时用于采购完整导电纱分支；区别于同轴线缆。不得同时计入内含金属丝和纱芯投入。

- 选定流: 绝缘不锈钢导电纺织纱线
- 流属性/单位: 质量 / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式: 前景记录（`foreground_record`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型: 过程输出（`process_output`）
- 证据类型: 采集记录（`collected_record`）
- 采集协议: `cp_material`
- 来源: `woven-heater-patent`

###### 316L 不锈钢细丝 (`steel_filament`)

仅用于场内制造有记录的不锈钢导电纱；核实合金、丝径和绝缘设计。其他发热合金另设行。

- 选定流: 316L 不锈钢细丝
- 流属性/单位: 质量 / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式: 前景记录（`foreground_record`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型: 过程输出（`process_output`）
- 证据类型: 采集记录（`collected_record`）
- 采集协议: `cp_material`
- 来源: `woven-heater-patent`

###### 聚乙烯隔离层配混料 (`separator_resin`)

仅用于采用实际合格聚乙烯配方的场内隔离层挤出；添加剂及 NTC／可熔行为需实际配方证据。其他护套或隔离层配方分别列行，不默认 PVC。

- 选定流: 聚乙烯隔离层配混料
- 流属性/单位: 质量 / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式: 前景记录（`foreground_record`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型: 过程输出（`process_output`）
- 证据类型: 采集记录（`collected_record`）
- 采集协议: `cp_material`
- 来源: `cable-heater-patent`

###### 铜汇流导线 (`copper_bus`)

仅在实际汇流或连接件为无镀层铜时纳入；镀层金属箔线、导电浆料及其他导体化学组成另设具体记录。

- 选定流: 铜汇流导线
- 流属性/单位: 质量 / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式: 前景记录（`foreground_record`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型: 过程输出（`process_output`）
- 证据类型: 采集记录（`collected_record`）
- 采集协议: `cp_material`
- 来源: `woven-heater-patent`

###### 工厂供电电压下购入的交流电力 (`heater_power`)

计量场内实际绕线、挤出、织入或铺设／固定用电；购入发热模块仅计一次上游制造。

- 选定流: 工厂供电电压下购入的交流电力
- 流属性/单位: 能量 / kWh
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_utility。
- 数值来源模式: 前景记录（`foreground_record`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型: 过程输出（`process_output`）
- 证据类型: 采集记录（`collected_record`）
- 采集协议: `cp_utility`

#### 输出

##### 废物流

###### 绝缘电热毯发热线缆边角料 (`heater_offcut`)

仅用于实际线缆切断废料；按组成及处理去向区分裸金属回收。

- 选定流: 绝缘电热毯发热线缆边角料
- 流属性/单位: 质量 / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式: 前景记录（`foreground_record`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型: 过程输出（`process_output`）
- 证据类型: 采集记录（`collected_record`）
- 采集协议: `cp_material`

### 过程：控制、接线与毯体组装 (`assembly`)

#### 输入

##### 产品流

###### 电热毯温度控制模块 (`control_module`)

采购经检测控制器：记录所含实际开关、电路、保护功能及外壳；不默认独立温控器，不追加内含电路板或树脂负荷。

- 选定流: 电热毯温度控制模块
- 流属性/单位: 质量 / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式: 前景记录（`foreground_record`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型: 过程输出（`process_output`）
- 证据类型: 采集记录（`collected_record`）
- 采集协议: `cp_material`
- 来源: `beurer-ub60`

###### 电热毯已装配控制电路板 (`control_board`)

仅在场内使用购入电路板组装控制器而非购入完整控制模块时纳入；实际进行裸板制造或焊接时需增加对应路线记录。

- 选定流: 电热毯已装配控制电路板
- 流属性/单位: 质量 / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式: 前景记录（`foreground_record`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型: 过程输出（`process_output`）
- 证据类型: 采集记录（`collected_record`）
- 采集协议: `cp_material`

###### ABS 温度控制器外壳 (`control_housing`)

仅在控制器场内组装且实际独立采购外壳为 ABS 时纳入；其他聚合物和场内成型需各自树脂、能源及废物流。

- 选定流: ABS 温度控制器外壳
- 流属性/单位: 质量 / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式: 前景记录（`foreground_record`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型: 过程输出（`process_output`）
- 证据类型: 采集记录（`collected_record`）
- 采集协议: `cp_material`

###### 电热毯温度传感器 (`sensor`)

仅用于实际设计中独立采购的物理传感器；线缆集成感温包含在线缆内，不在此重复。

- 选定流: 电热毯温度传感器
- 流属性/单位: 质量 / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式: 前景记录（`foreground_record`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型: 过程输出（`process_output`）
- 证据类型: 采集记录（`collected_record`）
- 采集协议: `cp_material`
- 来源: `cable-heater-patent`

###### 带插头的电热毯绝缘电源线 (`power_cord`)

记录实际插头地域、电压及完整线缆质量；仅在购入控制器未包含电源线时单独计入。

- 选定流: 带插头的电热毯绝缘电源线
- 流属性/单位: 质量 / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式: 前景记录（`foreground_record`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型: 过程输出（`process_output`）
- 证据类型: 采集记录（`collected_record`）
- 采集协议: `cp_material`
- 来源: `beurer-ub60`

###### 电热毯可拆卸电连接器 (`coupling`)

仅在独立供应且未包含于发热体／控制器／电源线中时纳入；记录触点、外壳和应力释放接口。

- 选定流: 电热毯可拆卸电连接器
- 流属性/单位: 质量 / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式: 前景记录（`foreground_record`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型: 过程输出（`process_output`）
- 证据类型: 采集记录（`collected_record`）
- 采集协议: `cp_material`
- 来源: `beurer-ub60`

###### 乙烯—醋酸乙烯共聚物热熔胶 (`adhesive`)

仅用于实际 EVA 胶粘层合；实际牌号及添加剂需证据。纯缝制路线不适用；溶剂型胶粘剂另作配方交换并进行组分平衡。

- 选定流: 乙烯—醋酸乙烯共聚物热熔胶
- 流属性/单位: 质量 / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式: 前景记录（`foreground_record`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型: 过程输出（`process_output`）
- 证据类型: 采集记录（`collected_record`）
- 采集协议: `cp_material`
- 来源: `woven-heater-patent`

###### 异丙醇 (`isopropanol`)

仅用于实际清洗化学品；记录浓度、回收、残留及去向。其他清洗溶剂另设物种行。

- 选定流: 异丙醇
- 流属性/单位: 质量 / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_chemistry。
- 数值来源模式: 前景记录（`foreground_record`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型: 过程输出（`process_output`）
- 证据类型: 采集记录（`collected_record`）
- 采集协议: `cp_chemistry`

###### 工厂供电电压下购入的交流电力 (`assembly_power`)

计量实际连接、压接、控制器组装及层合用电。

- 选定流: 工厂供电电压下购入的交流电力
- 流属性/单位: 能量 / kWh
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_utility。
- 数值来源模式: 前景记录（`foreground_record`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型: 过程输出（`process_output`）
- 证据类型: 采集记录（`collected_record`）
- 采集协议: `cp_utility`

#### 输出

##### 废物流

###### EVA 热熔胶残渣 (`adhesive_waste`)

仅用于实际 EVA 残渣；产品留存和库存分别记录。

- 选定流: EVA 热熔胶残渣
- 流属性/单位: 质量 / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式: 前景记录（`foreground_record`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型: 过程输出（`process_output`）
- 证据类型: 采集记录（`collected_record`）
- 采集协议: `cp_material`

###### 废异丙醇清洗液 (`solvent_waste`)

仅用于实际废清洗液；测定水／异丙醇及其他组分、接收方和最终处理。

- 选定流: 废异丙醇清洗液
- 流属性/单位: 质量 / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_chemistry。
- 数值来源模式: 前景记录（`foreground_record`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型: 过程输出（`process_output`）
- 证据类型: 采集记录（`collected_record`）
- 采集协议: `cp_chemistry`

##### 基本流

###### 排入空气的异丙醇 (`ipa_air`)

仅计量或按物种特定方法计算的空气排放；捕集或未解释溶剂残差不自动成为空气排放。

- 选定流: 排入空气的异丙醇
- 流属性/单位: 质量 / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_chemistry。
- 数值来源模式: 前景记录（`foreground_record`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型: 过程输出（`process_output`）
- 证据类型: 采集记录（`collected_record`）
- 采集协议: `cp_chemistry`

### 过程：验收检测与废品处理 (`test`)

#### 输入

##### 产品流

###### 工厂供电电压下购入的交流电力 (`test_power`)

按批次计量实际通断、绝缘、温度／保护及验收检测；包含失败和复测产品。不得用使用功率乘任意小时数。

- 选定流: 工厂供电电压下购入的交流电力
- 流属性/单位: 能量 / kWh
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_utility。
- 数值来源模式: 前景记录（`foreground_record`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型: 过程输出（`process_output`）
- 证据类型: 采集记录（`collected_record`）
- 采集协议: `cp_utility`

###### 购入的工艺用水 (`test_water`)

仅用于实际工厂耐洗／湿式测试或清洗；下游消费者洗涤不在工厂范围内。

- 选定流: 购入的工艺用水
- 流属性/单位: 质量 / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_water。
- 数值来源模式: 前景记录（`foreground_record`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型: 过程输出（`process_output`）
- 证据类型: 采集记录（`collected_record`）
- 采集协议: `cp_water`

#### 输出

##### 废物流

###### 报废电热毯 (`rejected_blanket`)

无法修复的实际废品跨界送处理；返工保留场内，负荷计入一次。

- 选定流: 报废电热毯
- 流属性/单位: 质量 / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式: 前景记录（`foreground_record`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型: 过程输出（`process_output`）
- 证据类型: 采集记录（`collected_record`）
- 采集协议: `cp_material`

###### 电热毯湿式检测废水 (`test_wastewater`)

仅用于实际湿式检测排水，记录实测组成及处理去向；水体积不是污染物质量。

- 选定流: 电热毯湿式检测废水
- 流属性/单位: 质量 / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_water。
- 数值来源模式: 前景记录（`foreground_record`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型: 过程输出（`process_output`）
- 证据类型: 采集记录（`collected_record`）
- 采集协议: `cp_water`

##### 基本流

###### 排入空气的水蒸气 (`evaporated_water`)

仅用于工厂边界内实际蒸发，通过闭合水平衡及不确定度确定；不根据消费者干燥推断。

- 选定流: 排入空气的水蒸气
- 流属性/单位: 质量 / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_water。
- 数值来源模式: 前景记录（`foreground_record`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型: 过程输出（`process_output`）
- 证据类型: 采集记录（`collected_record`）
- 采集协议: `cp_water`

### 过程：包装与工厂出厂 (`dispatch`)

#### 输入

##### 产品流

###### 瓦楞纸板包装 (`cardboard`)

仅用于实际发货纸箱；与产品净质量分开计量。

- 选定流: 瓦楞纸板包装
- 流属性/单位: 质量 / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式: 前景记录（`foreground_record`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型: 过程输出（`process_output`）
- 证据类型: 采集记录（`collected_record`）
- 采集协议: `cp_material`

###### 聚乙烯包装袋 (`polybag`)

仅用于实际聚乙烯袋；其他薄膜另设原子行。

- 选定流: 聚乙烯包装袋
- 流属性/单位: 质量 / kg
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式: 前景记录（`foreground_record`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型: 过程输出（`process_output`）
- 证据类型: 采集记录（`collected_record`）
- 采集协议: `cp_material`

#### 输出

##### 产品流

###### 电热毯 (`finished_blanket`)

验收完整电热毯，包含实际发热体、控制器、电源线和所需附件；净质量排除包装。

- 选定流: 电热毯 `db63276c-3e0f-4fe9-80de-b45ff12d515b`
- 流属性/单位: 质量 / kg
- 数量规则: 1 千克
- 数值来源模式: 前景记录（`foreground_record`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型: 过程输出（`process_output`）
- 证据类型: 采集记录（`collected_record`）
- 采集协议: `cp_mass`

### 过程：工厂残余公用服务 (`services`)

#### 输入

##### 产品流

###### 工厂供电电压下购入的交流电力 (`residual_power`)

仅为同一场址期间所有纺织／发热体／组装／检测／发货计量后未分配公用服务残余；按因果分配，不在分表耗电上追加全厂总量。

- 选定流: 工厂供电电压下购入的交流电力
- 流属性/单位: 能量 / kWh
- 数量规则: 对 q_item 应用 normalize_mass；reference_mass；cp_utility。
- 数值来源模式: 前景记录（`foreground_record`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型: 过程输出（`process_output`）
- 证据类型: 采集记录（`collected_record`）
- 采集协议: `cp_utility`

#### 输出

## 7. 分配与共产品处理

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| a_cohort | all processes | 保持每个型号／配置及其实际验收产出独立。共用工厂工序按实测因果活动（机器时间、实际负荷或面积时间）分配，披露依据并与原期间总量核对。不得平均不同发热体／控制／纺织配置。 |  |
| a_scrap | physical material records | 场内边角料或返工返回作为成对转移抵销，不是免费外部投入或共产品抵扣。纳入废料调理及全部废品／返工负荷。外部回收或处理使用记录的接收方及分配约定；不假设替代原生材料。 |  |

## 8. 前景数据采集、计算与质量规则

使用一个可追溯场址期间和一个配置批次。Q 为归属期间交换量，包含应分担的废品／返工及实际公用服务；N 为验收完整设备数；D 为同一配置逐件校准验收净质量之和；M = D/N。先得 q_item = Q/N，再得 q_ref = q_item/M = Q/D。包装、废品及废料不得进入 D。这些是采集操作，不是经验默认因子。全部协议在换算前保留原期间总量。

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_mass | dispatch | reference product | weighing | 型号；配置；序列号；验收净质量 M | 使用经校准的秤称量已验收的完整设备，排除运输包装；核对同一配置和验收记录。 | kg | 每件验收设备 | 一个生产批次 | 声明工厂 | 每台验收净质量 | 校准；验收及包含清单 |
| cp_material | all processes | specific material/component/waste | stock and batch records | 牌号；纤维配比；供应商；交付形式；批次；期初／末库存；领用；返回；废料；废品；实际湿／干质量；自身物种测定；去向；配置；Q；N | 核对称重收货／领用／库存、实际 BOM、路线及零件计数与校准批次重量。每种材料／物种在每个产品／废物／排放项具有自身测定。成对记录内部返回转移。完整采购组件上游计入一次。 | kg | 每批及期间结算 | 同一生产期间 | 实际工厂工序及供应商接口 | 归属交换量 / 验收设备数 | 称重／秤；供应商组成；库存核对；接收方证据 |
| cp_utility | all processes | electricity | meter records | 场址；期间；单位；电压；购入；发电；外送；储能；返回；全部分表；配置；因果分配；Q；N | 读取校准的同期间电表及票据。先分配实际纺织／发热体／组装／检测／发货负荷；公用服务仅为未分配场址残余。核对购入、实际发电、外送及储能变化，不重复计量。按期间／单位／综合计量不确定度调查负残余，不截断为零。场内发电需自身燃料及物种特定排放行。 | kWh | 每个检测批次及期间 | 同一生产期间 | 工厂公用工程边界 | 归属交换量 / 验收设备数 | 电表校准；账单；分配及场址核对 |
| cp_chemistry | assembly | individual adhesive/solvent/species | chemical and sampling records | 化学品牌号；配方；纯度；湿／干基准；实际投入；库存变化；产品留存；回收溶剂；捕集介质；实测销毁；废液；实际空气排放；Q；N | 每项按自身匹配测定测量物种质量；投入加反应生成与产品留存、库存、回收材料、捕集、液／固废物、实际销毁／反应消耗及实测排放平衡。捕集不是销毁；未解释残差不自动为空气排放。按实际综合采样、计量及分配不确定度解决闭合。 | kg | 每批及采样活动 | 同一生产期间 | 实际化学品使用边界 | 归属交换量 / 验收设备数 | SDS／配方；测定；捕集／处理记录；采样方法及不确定度 |
| cp_water | test | water and wet-test discharge | meter and moisture records | 购入水；投入含水；期初／末水库存；实际产品含水；蒸发；排水；反应生成／消耗；成对内部返回；排水测定；Q；N | 以匹配期间／基准测量实际全部含水投入、输出及库存变化。每个投入、产品、废料、污泥、废水及期初／末库存项使用自身实测水分比例；每项液体体积换算使用自身实测密度。湿废物总质量不等于水质量；不得对全部项使用同一含水百分比。纳入反应水并成对记录内部返回；尽可能独立测量排水／蒸发，按综合不确定度调查残差。污染物质量用每种排水物种浓度及实际水量计算；不单凭水推断污染物数量。 | kg | 每个湿式检测批次及期间 | 同一生产期间 | 工厂湿式操作 | 归属交换量 / 验收设备数 | 计量表；水分样品；实验室测定；处理合同 |

实际原期间水平衡为：新鲜水投入 + 投入含水 + 期初水库存 + 反应水生成 = 产品含水 + 废料／污泥含水 + 外排水 + 蒸发 + 期末水库存 + 反应水消耗。区分每项实际含水废物流并使用自身测定／密度；成对内部水返回抵销。归一化前以综合计量、采样及分配不确定度调查闭合；不使用通用闭合容差。

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| normalize_mass | all inventory rows | q_ref = q_item / M; q_item = 每台验收成品设备的交换数量; q_ref = 每 1 kg 参考流的交换数量。 | q_item; M; cp_mass | q_ref |  |
| water_balance | test_water; test_wastewater; evaporated_water | 新鲜水 + 投入含水 + 期初水库存 + 反应水生成 = 产品含水 + 废料含水 + 污泥含水 + 外排水 + 蒸发 + 期末水库存 + 反应水消耗。每个实际投入／产品／废料／污泥／废水／库存项使用自身实测水分比例与湿／干基准；每项液体体积使用自身实测密度。湿废物总质量不等于水质量。成对内部返回抵销。归一化前核对实际原期间，并以综合计量、采样及分配不确定度调查闭合；不使用通用容差。 | cp_water; 实际水分比例; 实际液体密度; 匹配的原期间水量及反应／库存记录 | 闭合的实际原期间水平衡 | |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| dq_trace | all processes | 保留实际型号 BOM、自制／外购矩阵、检测验收、原始总量、不确定度、供应商接口及未知／零／不存在的区分。专利是结构实例；公开产品页不建立工厂操作因子。 | 签署工厂及供应商记录 |
| dq_balance | physical material and species records | 材料／物种投入加反应生成等于输出加库存增加及反应消耗，成对内部转移抵销。每个产品／废料／污泥／废水／排放项使用自身实际测定与湿／干基准；不将一个合金比例应用于全部项。按实测综合不确定度调查不平衡，不采用通用容差。单凭燃料碳不能确定 CO 或 NOx。 | 测定；库存／反应记录；闭合及不确定度报告 |

## 9. 校验规则

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| v_reference | reference product | 要求实际家用主要功能、型号／配置限定信息、验收完整交付包含清单及校准净质量。N 与 D 必须覆盖同一验收批次；M = D/N；核对 Q/N 后 q_item/M 与 Q/D 一致。不混合配置，不将包装／废品质量计入 D。 |  |
| v_routes | all processes | 每个实际发热导体、绝缘层、纺织物、控制器／传感器、电源线／连接器、胶粘剂及辅助品具有一个有证据的自制／外购接口。完整采购模块与其内含投入不得同时存在。条件替代项需 BOM 证据；not_applicable 需核实不存在。全部实际交换具有原子物理／化学身份、匹配单位支持及供应商接口；未解决字段保留缺口。 |  |
| v_balances | physical material and species records | 以匹配自身测定、水分、库存、反应、产品、废料、废液／固废、实测排放及成对内部返回闭合每个材料／物种及水平衡。区分回收、捕集与实际销毁。调查残余及不确定度；组成或去向缺失使相关校验不确定。 |  |
| v_energy | utility records | 同期间场址核对约束购入、发电、外送／储能及全部已分配工序负荷。公用服务仅包含未分配残余并采用因果分配。负残余需调查；消费者功率／时间、产品网页重量和焚烧特定电力 UUID 不是工厂默认值。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | secondary_dataset; background_dataset |
| downstream_use | 数据生产前景包，投影为 process 或 lifecyclemodel，下游情景独立声明 |
| allowed_use | 匹配配置及工厂出厂家用电热毯供应 |
| excluded_use | 无限定电热毯平均；医疗服务；无使用情景的人体／房间供热；将未完成发热体作为完整毯 |
| required_metadata | 全部参考限定信息；场址／期间；实际路线及包含清单；分配；供应商匹配；完整原期间换算 |
| required_quality_disclosure | 来源、计量／采样不确定度、未解决 UUID／供应商／配方缺口、实际平衡闭合及校验覆盖 |
| update_trigger | 纺织物／发热体／绝缘／控制设计、自制／外购边界、供应商、地域、检测方法或场址期间改变 |

## 11. 数据源

| 来源标识 | Type | 参考 | 用途 |
| --- | --- | --- | --- |
| beurer-ub60 | handbook | https://www.beurer.com/global/p/30036/ — UB 60 Green Planet; snapshot 2026-10-02 | 铺毯实例；实际混合纤维非织造布、可拆控制／电源接口、温度监测。不作通用组成或工厂数量。 |
| beurer-throws | handbook | https://www.beurer.com/global/c/0020103/ — Heated Throws; snapshot 2026-10-02 | 家用盖毯实例；消费者洗涤／操作独立。同 UB60 发布者，不是独立证据。 |
| woven-heater-patent | literature | US6888112B2 (2005-05-03), https://patents.google.com/patent/US6888112B2/en | 独立原始技术披露：集成导电纱、不锈钢丝／聚酯纱实例、整理及汇流连接变体。专利实施方式是条件结构，不是实际工厂配方或数量范围。 |
| cable-heater-patent | literature | US8698045B2 (2014-04-15), https://patents.google.com/patent/US8698045B2/en | 独立原始技术披露：同轴导体／隔离层／护套、线缆集成感温及聚乙烯实例。广义加热垫用语不建立家用毯分类。不强制聚合物／合金或操作默认值。 |
