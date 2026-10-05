---
pcr_id: pcr.metal-products-machinery-and-equipment.special-purpose-machinery.full-slewing-hydraulic-excavator
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 全回转柴油液压挖掘机制造

## 1. 范围与适用性

本 PCR 覆盖新制完整自行式柴油动力液压挖掘机制造，上部结构可 360°回转。履带和轮式底盘、动臂斗杆铲斗及安装驾驶室动力液压配置分别作为参考产品。制造始于外购坯料及明确部件进入报告场址，结束于验收和声明出厂门。这是前景制造模块；完整摇篮到大门声明前须披露并链接上游覆盖。

排除前端铲式装载机、挖掘装载机、非全回转挖掘机、缆索挖掘机、独立附件、专门物料搬运及拆除机器、不完整套件、再制造及全部客户场址挖掘、生产率、维护和报废服务。纯电、外接电及混合动力机器须另有经审查动力系统清单与参考定义；柴油记录不能代表这些机器。具名工厂证据支持候选操作，不要求所有制造商必须在厂内加工或涂装。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.special-purpose-machinery.full-slewing-hydraulic-excavator |
| classification_refs | CPC 3.0 44426：自行式 360°回转挖掘机械；本柴油液压范围较窄，仅为分类背景 |
| covered_products | 新制完整柴油液压挖掘机，履带或轮式，全回转上部结构 |
| excluded_products | 装载机、有限回转或缆索机器；外部附件；无经审查扩展的其他动力结构；寿命期服务 |
| representative_product | 一台序列号明确验收配置；实测 M，不假定每台重量 |
| production_route | 实际条件结构加工连接涂装、必需行走回转挖掘液压动力驾驶室集成和工厂验收 |
| market_state | 声明出厂门处验收完整挖掘机，明确安装铲斗配重及交付加注 |


## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 制造配置完整全回转柴油液压挖掘机器 |
| How much | 1 kg 验收完整机器净质量，使用实测 M 从按台记录换算 |
| How well | 记录配置专用行走回转液压操作、制动联锁、防护及泄漏验收；不表示等质量挖掘性能等效 |
| How long or cycle | 一次制造及工厂验收周期；不规定使用寿命 |
| reference_flow_link | finished_machine |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 上部结构可以转动360度的自动推动挖土机、挖掘机和斗式装载机，前端斗式装载机除外 `6970cd56-054c-4ec5-9258-37356541f7d3` |
| 参考流属性 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 制造商型号；序列号配置版本；柴油液压全回转功能；轮履底盘及行走转向制动布置；履带板或轮胎轮辋规格；动臂斗杆长度、铲斗及快换完整性；回转支承驱动、配重及辅助回路；发动机及实际安装排放硬件；驾驶室座椅防护暖通；控制器线束；供应商总成包含范围；保留液压油机油冷却液柴油制冷剂；运输拆卸交付件；验收净质量 M 及皮重；工厂场址时期；实际路线门点及未链接上游阶段 |

每项限定信息须在数据集元数据、过程说明或参考流备注声明。M 包含验收安装配置及属于该配置的另称运输拆卸部件，包含保留首次加注。排除操作员、挖出土方、试验载荷、分离额外附件及运输包装。目录作业重量、铲斗体积、起吊额定值、发动机 kW 和服务油耗不能确定 M。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | 参考产品 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | M = 同一配置的一台完整机器的验收净质量，单位 kg；采用 cp_mass 采集。 |
| `engine_count` | diesel_engine | Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` | Item(s) | 交换分子为实际安装发动机件数；另测所含发动机总成质量以核对物料表。无通用发动机件数质量因子。 |
| `energy_and_fluid_units` | 电力及液体 | Net calorific value; Mass | MJ; kg | 采用已核验能量单位组换算 3.6 MJ/kWh。液体体积质量换算须实际实测密度、成分及温度；替代流属性 meanValue 不是密度。 |


## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 报告制造场址接收外购坯料及独立成品部件 |
| starting_condition_role | 前景接收到出厂制造模块 |
| product_classification_scope | 完整柴油全回转液压挖掘机器；上游部件保持自身身份 |
| recursive_input_rule | 将供涂装的外购完整机器记录为披露投入；不得从本相同产出递归生成，排除已完成组成操作 |
| upstream_dataset_requirement | 链接匹配材质部件、技术、地域、供入状态及属性的数据集；披露全部未链接阶段，避免重复供应商内部组成 |
| disclosure | 声明场址时期、实际厂内外包操作、接收部件完整性、门点、M 及加注、上游排除及未解决身份量值缺口 |

| rule_id | applies_to | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_foreground` | all processes | 纳入实际场址制造、装配、首次加注、返工及可归属验收试验。排除客户场址挖掘、投运服务、门外运输、维护及报废。工厂试验燃料不得采用工地服务耗油率。 | `volvo-factory` |
| `boundary_completeness` | supplier assemblies | 将完整配置物料表映射至外购部件或内部制造，仅计一次。轮履布置分开；不推定装配场址制造液压缸、履带板或配重。 | `volvo-machine` |


## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `fabrication` | 结构切割、成形与机加工 | conditional | 声明结构件在报告场址制造。 | foreground | 一台验收配置机器，使用 M 归一化 |
| `joining` | 结构连接 | conditional | 挖掘机焊接结构在前景内制造。 | foreground | 一台验收配置机器，使用 M 归一化 |
| `finishing` | 表面预处理与涂装 | conditional | 声明结构在本场址预处理或涂装。 | foreground | 一台验收配置机器，使用 M 归一化 |
| `chassis` | 下车架、行走与回转平台集成 | required | 每台完整挖掘机；履带和轮式布置分别声明。 | foreground | 一台验收配置机器，使用 M 归一化 |
| `hydraulics` | 挖掘连杆与液压集成 | required | 每台完整液压挖掘机。 | foreground | 一台验收配置机器，使用 M 归一化 |
| `power_cab` | 柴油动力单元、驾驶室与控制集成 | required | 本 PCR 内每台柴油动力配置机器。 | foreground | 一台验收配置机器，使用 M 归一化 |
| `acceptance` | 首次加注、工厂试验与验收 | required | 每台验收合格完整机器。 | foreground | 一台验收配置机器，使用 M 归一化 |
| `packing` | 出厂防护 | conditional | 包装支撑越过声明出厂门。 | foreground | 一台验收配置机器，使用 M 归一化 |

实际坯料加工 → 结构连接 → 涂装 → 底盘回转及挖掘液压集成 → 动力驾驶室控制 → 加注试验验收 → 可选出厂防护。外购成品总成进入其实际安装阶段。即使在必需阶段，行仍按具名材质及供入边界条件适用。内部转移不作新投入。这些行用于初始化采集；数据集完成前核对完整配置物料表并增列遗漏的精确部件、公用工程、试剂及已证实废物排放。

### 过程：结构切割、成形与机加工 (`fabrication`)

按图纸切割成形用于下车架、回转平台、动臂、斗杆和铲斗的板材；仅在实际实施时加工孔、销轴接口和安装面。外购成品结构跳过相应板加工。装配场址不假定铸造配重、锻造销轴或生产履带板；实际实施时增列其独立实测操作。

#### 输入

##### 产品流

###### 钢板 (`steel_plate`)

仅限与图纸匹配的实际未镀层热轧高强低合金板；记录牌号厚度及供应商路线。其他钢牌号须自身行。

- 选定流：钢板 `421db3a5-394d-410b-8ebf-af23a37fc878`
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_fabrication。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_fabrication`
- 来源：`liebherr-manufacture`

###### 工厂进线处电网交流电 (`fabrication_electricity`)

计量声明进线电压提供者下的可归属实际工序工作；仅纳入工厂试验，不计挖掘服务。

- 选定流：工厂进线处电网交流电
- 流属性/单位：Net calorific value / MJ
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_fabrication。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_fabrication`
- 来源：`liebherr-manufacture`

#### 输出

##### 废物流

###### 钢废料，边角料 (`steel_offcut`)

仅限内部复用后输出的洁净未处理未镀层切割边角料；称量并记录去向。

- 选定流：钢废料，边角料 `ae44c4ac-bcd5-4a16-b0a5-d674ffeaab6b`
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_fabrication。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_fabrication`
- 来源：`liebherr-manufacture`

###### 钢废料，机加工切屑 (`steel_chips`)

仅限分收的未处理洁净钢机加工切屑，不作含油混合切屑；记录实际处理去向。

- 选定流：钢废料，机加工切屑 `7f46756b-6f66-46a7-bbcb-c04727d9d19e`
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_fabrication。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_fabrication`
- 来源：`liebherr-manufacture`

### 过程：结构连接 (`joining`)

依实际焊接规程连接配置车架、动臂、斗杆和铲斗焊接件；记录组对、焊缝长度、检验及返工。选定自保护碳钢焊丝仅为条件技术，不规定挖掘机焊接必须使用。气保护实芯焊丝、每项保护气、电焊条及实际焊接残渣须另有明确交换。

#### 输入

##### 产品流

###### 药芯焊丝 (`self_shield_wire`)

仅限与实际焊接规程匹配的有记录自保护碳钢药芯技术；不推定其他技术无外加保护气。

- 选定流：药芯焊丝 `1b74a576-06e0-4764-97ce-11a73f8a4752`
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_joining。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_joining`
- 来源：`liebherr-manufacture`

###### 工厂进线处电网交流电 (`joining_electricity`)

计量声明进线电压提供者下的可归属实际工序工作；仅纳入工厂试验，不计挖掘服务。

- 选定流：工厂进线处电网交流电
- 流属性/单位：Net calorific value / MJ
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_joining。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_joining`
- 来源：`liebherr-manufacture`

### 过程：表面预处理与涂装 (`finishing`)

按实际表面清洗、喷砂及涂装规格操作。环氧底漆和聚氨酯面漆行仅限有文件支持的配方；不从一般涂装能力推定其使用。外购已涂装件跳过此操作。每项实际磨料、脱脂剂、固化剂和稀释剂分别增列交换，并区分捕集残渣与已证实的逐物质排放。

#### 输入

##### 产品流

###### 配方环氧底漆 (`epoxy_primer`)

仅限有文件支持的供入环氧底漆，记录配方固含及固化剂包含范围；单独领用固化剂时另列。

- 选定流：配方环氧底漆
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_finishing。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_finishing`
- 来源：`volvo-factory`

###### 配方聚氨酯面漆 (`pu_topcoat`)

仅限有文件支持的聚氨酯面漆；注明供入配方及单独领用固化剂，记录实测量。

- 选定流：配方聚氨酯面漆
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_finishing。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_finishing`
- 来源：`volvo-factory`

###### 工艺用水 (`cleaning_water`)

仅限实际表面清洗使用的处理供入工业水；不将地下水取用或内部循环计作新供水。

- 选定流：工艺用水 `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_finishing。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_finishing`
- 来源：`volvo-factory`

###### 工厂进线处电网交流电 (`finishing_electricity`)

计量声明进线电压提供者下的可归属实际工序工作；仅纳入工厂试验，不计挖掘服务。

- 选定流：工厂进线处电网交流电
- 流属性/单位：Net calorific value / MJ
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_finishing。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_finishing`
- 来源：`volvo-factory`

#### 输出

##### 废物流

###### 送处理的表面清洗水性废液 (`cleaning_effluent`)

仅限实测质量、污染和接收处理已明确的输出清洗废液；不作直接环境水排放。

- 选定流：送处理的表面清洗水性废液
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_finishing。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_finishing`
- 来源：`volvo-factory`

###### 捕集环氧底漆过喷残渣 (`epoxy_paint_residue`)

仅限实际分收捕集环氧漆渣；记录溶剂固化部分及废物出口，不自动赋予排放。

- 选定流：捕集环氧底漆过喷残渣
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_finishing。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_finishing`
- 来源：`volvo-factory`

### 过程：下车架、行走与回转平台集成 (`chassis`)

集成指定下车架、行走驱动、360°回转平台、回转支承驱动及配重。履带链板总成与终传动分开；轮式底盘分别有轮胎、轮辋、车桥及转向制动设备。外购完整模块仅包含文件确认的组成；厂内结构转入不作采购。

#### 输入

##### 产品流

###### 成品挖掘机焊接下车架 (`lower_frame`)

仅限具名外购成品部件，记录图纸部件版本和实测安装质量；厂内制造或供应商更大总成已含时省略此采购。

- 选定流：成品挖掘机焊接下车架
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_chassis。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_chassis`
- 来源：`volvo-machine`

###### 成品挖掘机回转上平台 (`upper_frame`)

仅限具名外购成品部件，记录图纸部件版本和实测安装质量；厂内制造或供应商更大总成已含时省略此采购。

- 选定流：成品挖掘机回转上平台
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_chassis。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_chassis`
- 来源：`volvo-machine`

###### 挖掘机回转支承 (`slew_bearing`)

仅限具名外购成品部件，记录图纸部件版本和实测安装质量；厂内制造或供应商更大总成已含时省略此采购。

- 选定流：挖掘机回转支承
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_chassis。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_chassis`
- 来源：`volvo-machine`

###### 挖掘机液压回转马达总成 (`slew_motor`)

仅限具名外购成品部件，记录图纸部件版本和实测安装质量；厂内制造或供应商更大总成已含时省略此采购。

- 选定流：挖掘机液压回转马达总成
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_chassis。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_chassis`
- 来源：`volvo-machine`

###### 挖掘机钢制履带链板总成 (`track_chain`)

仅限具名外购成品部件，记录图纸部件版本和实测安装质量；厂内制造或供应商更大总成已含时省略此采购。仅限履带配置。

- 选定流：挖掘机钢制履带链板总成
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_chassis。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_chassis`
- 来源：`volvo-machine`

###### 挖掘机液压行走终传动总成 (`travel_drive`)

仅限具名外购成品部件，记录图纸部件版本和实测安装质量；厂内制造或供应商更大总成已含时省略此采购。

- 选定流：挖掘机液压行走终传动总成
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_chassis。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_chassis`
- 来源：`volvo-machine`

###### 成品铸铁挖掘机配重 (`counterweight`)

仅限具名外购成品部件，记录图纸部件版本和实测安装质量；厂内制造或供应商更大总成已含时省略此采购。

- 选定流：成品铸铁挖掘机配重
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_chassis。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_chassis`
- 来源：`volvo-machine`

###### 轮式挖掘机钢轮辋 (`wheel_rim`)

仅限具名外购成品部件，记录图纸部件版本和实测安装质量；厂内制造或供应商更大总成已含时省略此采购。仅限轮式配置。

- 选定流：轮式挖掘机钢轮辋
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_chassis。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_chassis`
- 来源：`volvo-machine`

###### 轮式挖掘机转向车桥总成 (`steering_axle`)

仅限具名外购成品部件，记录图纸部件版本和实测安装质量；厂内制造或供应商更大总成已含时省略此采购。仅限轮式配置。

- 选定流：轮式挖掘机转向车桥总成
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_chassis。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_chassis`
- 来源：`volvo-machine`

###### 橡胶充气轮式挖掘机轮胎 (`pneumatic_tyre`)

仅限声明尺寸构造的安装橡胶充气胎；不含轮辋实测质量并声明供应商轮胎完整性。

- 选定流：橡胶充气轮式挖掘机轮胎
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_chassis。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_chassis`
- 来源：`volvo-machine`

###### 工厂进线处电网交流电 (`chassis_electricity`)

计量声明进线电压提供者下的可归属实际工序工作；仅纳入工厂试验，不计挖掘服务。

- 选定流：工厂进线处电网交流电
- 流属性/单位：Net calorific value / MJ
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_chassis。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_chassis`
- 来源：`volvo-machine`

### 过程：挖掘连杆与液压集成 (`hydraulics`)

安装动臂、斗杆、一只声明挖掘铲斗、油缸执行器、主泵、阀块、油箱、过滤器和软管回路。铲斗尺寸、臂杆几何、快换及辅助回路界定参考配置，不作为开挖体积服务单位。外购油缸及泵为成品总成，不重复其钢和密封件。物料表遗漏项在数据完成前须增列独立明确实测行。

#### 输入

##### 产品流

###### 成品液压挖掘机动臂 (`boom`)

仅限具名外购成品部件，记录图纸部件版本和实测安装质量；厂内制造或供应商更大总成已含时省略此采购。

- 选定流：成品液压挖掘机动臂
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_hydraulics。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_hydraulics`
- 来源：`volvo-machine`

###### 成品液压挖掘机斗杆 (`stick`)

仅限具名外购成品部件，记录图纸部件版本和实测安装质量；厂内制造或供应商更大总成已含时省略此采购。

- 选定流：成品液压挖掘机斗杆
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_hydraulics。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_hydraulics`
- 来源：`volvo-machine`

###### 成品钢制挖掘机挖掘铲斗 (`digging_bucket`)

仅限具名外购成品部件，记录图纸部件版本和实测安装质量；厂内制造或供应商更大总成已含时省略此采购。

- 选定流：成品钢制挖掘机挖掘铲斗
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_hydraulics。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_hydraulics`
- 来源：`volvo-machine`

###### 变量挖掘机主液压泵 (`hydraulic_pump`)

仅限具名外购成品部件，记录图纸部件版本和实测安装质量；厂内制造或供应商更大总成已含时省略此采购。

- 选定流：变量挖掘机主液压泵
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_hydraulics。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_hydraulics`
- 来源：`volvo-machine`

###### 双作用挖掘机动臂液压缸总成 (`boom_cylinder`)

仅限具名外购成品部件，记录图纸部件版本和实测安装质量；厂内制造或供应商更大总成已含时省略此采购。

- 选定流：双作用挖掘机动臂液压缸总成
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_hydraulics。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_hydraulics`
- 来源：`volvo-machine`

###### 双作用挖掘机斗杆液压缸总成 (`stick_cylinder`)

仅限具名外购成品部件，记录图纸部件版本和实测安装质量；厂内制造或供应商更大总成已含时省略此采购。

- 选定流：双作用挖掘机斗杆液压缸总成
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_hydraulics。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_hydraulics`
- 来源：`volvo-machine`

###### 双作用挖掘机铲斗液压缸总成 (`bucket_cylinder`)

仅限具名外购成品部件，记录图纸部件版本和实测安装质量；厂内制造或供应商更大总成已含时省略此采购。

- 选定流：双作用挖掘机铲斗液压缸总成
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_hydraulics。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_hydraulics`
- 来源：`volvo-machine`

###### 挖掘机主液压控制阀块 (`main_valve`)

仅限具名外购成品部件，记录图纸部件版本和实测安装质量；厂内制造或供应商更大总成已含时省略此采购。

- 选定流：挖掘机主液压控制阀块
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_hydraulics。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_hydraulics`
- 来源：`volvo-machine`

###### 成品钢制挖掘机液压油箱 (`oil_reservoir`)

仅限具名外购成品部件，记录图纸部件版本和实测安装质量；厂内制造或供应商更大总成已含时省略此采购。

- 选定流：成品钢制挖掘机液压油箱
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_hydraulics。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_hydraulics`
- 来源：`volvo-machine`

###### 液压软管 (`hydraulic_hose`)

仅限匹配回路压力及构造的供入完整液压软管；声明接头包含范围，不重复供应商已装软管。

- 选定流：液压软管 `e2fc1719-69dc-4281-8eae-383af8d9a405`
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_hydraulics。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_hydraulics`
- 来源：`volvo-machine`

###### 工厂进线处电网交流电 (`hydraulics_electricity`)

计量声明进线电压提供者下的可归属实际工序工作；仅纳入工厂试验，不计挖掘服务。

- 选定流：工厂进线处电网交流电
- 流属性/单位：Net calorific value / MJ
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_hydraulics。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_hydraulics`
- 来源：`volvo-machine`

### 过程：柴油动力单元、驾驶室与控制集成 (`power_cab`)

安装文件确认的发动机、冷却及排气系统、带座椅防护的驾驶室、启动蓄电池、专用控制器和线束。驾驶室暖通、安全设备及后处理按实际安装边界纳入；单独供入设备及制冷剂首次充注按精确身份记录。不允许通用发动机功率质量、排放合规或电池容量换算。

#### 输入

##### 产品流

###### 柴油发动机 (`diesel_engine`)

仅限安装柴油发动机总成；采集每台实际 Item(s)，总成质量另测以核对物料表，并明确已含冷却排气附件。

- 选定流：柴油发动机 `d3ac8612-80b9-4283-9439-62aa4986fce2`
- 流属性/单位：Number of items / Item(s)
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_power_cab。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_power_cab`
- 来源：`volvo-machine`

###### 完整挖掘机驾驶室总成 (`cab`)

仅限具名外购成品部件，记录图纸部件版本和实测安装质量；厂内制造或供应商更大总成已含时省略此采购。

- 选定流：完整挖掘机驾驶室总成
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_power_cab。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_power_cab`
- 来源：`volvo-machine`

###### 挖掘机散热器与油冷器换热总成 (`cooling_pack`)

仅限具名外购成品部件，记录图纸部件版本和实测安装质量；厂内制造或供应商更大总成已含时省略此采购。

- 选定流：挖掘机散热器与油冷器换热总成
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_power_cab。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_power_cab`
- 来源：`volvo-machine`

###### 配置柴油挖掘机排气后处理总成 (`exhaust`)

仅限具名外购成品部件，记录图纸部件版本和实测安装质量；厂内制造或供应商更大总成已含时省略此采购。

- 选定流：配置柴油挖掘机排气后处理总成
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_power_cab。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_power_cab`
- 来源：`volvo-machine`

###### 挖掘机电子整机控制器模块 (`controller`)

仅限具名外购成品部件，记录图纸部件版本和实测安装质量；厂内制造或供应商更大总成已含时省略此采购。

- 选定流：挖掘机电子整机控制器模块
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_power_cab。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_power_cab`
- 来源：`volvo-machine`

###### 绝缘铜挖掘机线束总成 (`harness`)

仅限具名外购成品部件，记录图纸部件版本和实测安装质量；厂内制造或供应商更大总成已含时省略此采购。

- 选定流：绝缘铜挖掘机线束总成
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_power_cab。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_power_cab`
- 来源：`volvo-machine`

###### 铅酸蓄电池 (`starter_battery`)

仅限实际安装铅及稀硫酸构造启动铅酸蓄电池及记录状态；不推定为牵引电池。

- 选定流：铅酸蓄电池 `0f7ce22c-71cc-4c6c-aa33-d4074f9a03c7`
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_power_cab。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_power_cab`
- 来源：`volvo-machine`

###### 钢螺钉 (`steel_screw`)

仅限装配实际领用钢螺钉；螺栓螺母垫圈独立供入时须分别明确交换。

- 选定流：钢螺钉 `895204f6-6425-4814-afc5-cb97e530e892`
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_power_cab。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_power_cab`
- 来源：`volvo-machine`

###### 工厂进线处电网交流电 (`power_cab_electricity`)

计量声明进线电压提供者下的可归属实际工序工作；仅纳入工厂试验，不计挖掘服务。

- 选定流：工厂进线处电网交流电
- 流属性/单位：Net calorific value / MJ
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_power_cab。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_power_cab`
- 来源：`volvo-machine`

### 过程：首次加注、工厂试验与验收 (`acceptance`)

按平衡分别记录首次加注、交付保留燃料及工厂试验实际耗用燃料。依据配置专用有记录工厂准则，测试安装行走、回转、液压连杆、制动联锁、泄漏和完整性。验收不表示客户场址挖掘性能。工厂试验排放仅在实际实测燃烧及介质条件下记录，不规定一般 NOx、挥发性有机物或颗粒物必然排放。

#### 输入

##### 产品流

###### 液压油 (`mineral_hydraulic_oil`)

仅限已核验精炼路线及实际牌号的供入矿物液压油；计量新加入减退回，区分交付保留与排出试验油。

- 选定流：液压油 `eafff56c-3487-4345-9f24-00429f61c556`
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_acceptance。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_acceptance`
- 来源：`volvo-factory`

###### 矿物基础配方柴油发动机润滑油 (`engine_oil`)

仅限有文件支持的供入发动机油配方；供应商已预加油不重复采购；采集实际首次加注。

- 选定流：矿物基础配方柴油发动机润滑油
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_acceptance。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_acceptance`
- 来源：`volvo-factory`

###### 水性乙二醇发动机冷却液 (`engine_coolant`)

仅限实际文件确认的预混水性乙二醇冷却液，记录浓度缓蚀剂及质量；纯乙二醇或未指定防冻液不能替代。

- 选定流：水性乙二醇发动机冷却液
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_acceptance。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_acceptance`
- 来源：`volvo-factory`

###### 柴油 (`factory_diesel`)

记录实际进入工厂加注试验的柴油：采购投入等于试验耗用、交付保留及实测其他平衡项。披露实际牌号生物比例；化石源核算仅用已核验化石部分。

- 选定流：柴油 `9d258d75-6792-4f1c-9856-81602ed8f816`
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_acceptance。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_acceptance`
- 来源：`volvo-factory`

###### 工厂进线处电网交流电 (`acceptance_electricity`)

计量声明进线电压提供者下的可归属实际工序工作；仅纳入工厂试验，不计挖掘服务。

- 选定流：工厂进线处电网交流电
- 流属性/单位：Net calorific value / MJ
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_acceptance。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_acceptance`
- 来源：`volvo-factory`

#### 输出

##### 产品流

###### 上部结构可以转动360度的自动推动挖土机、挖掘机和斗式装载机，前端斗式装载机除外 (`finished_machine`)

严格为 1 kg 验收合格配置完整挖掘机净质量，包含安装配重、声明铲斗及保留首次加注；排除运输支撑、操作员和挖掘载荷。

- 选定流：上部结构可以转动360度的自动推动挖土机、挖掘机和斗式装载机，前端斗式装载机除外 `6970cd56-054c-4ec5-9258-37356541f7d3`
- 流属性/单位：Mass / kg
- 数量规则：1 千克
- 数值来源模式：`fixed_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：`process_output`
- 证据类型：`method_formula`
- 采集协议：`cp_mass`
- 来源：`volvo-factory`

#### 输出

##### 基本流

###### 二氧化碳（化石源） (`fossil_co2`)

仅限实际工厂试验燃烧中可归属实测化石 CO2，排至空气未指定子介质。不设固定燃料因子，不计使用期排放或生物源替代。

- 选定流：二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_acceptance。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_acceptance`
- 来源：`volvo-factory`

### 过程：出厂防护 (`packing`)

分别纳入实际出厂支撑及防护膜，从机器 M 排除。属于验收机器的运输拆卸交付部件仍纳入 M 和完整性记录；额外分离服务工具及运输支撑不纳入。

#### 输入

##### 产品流

###### 窑干锯材（针叶材） (`timber_support`)

仅限实际窑干针叶锯材运输木支撑，记录实测质量；从整机净质量 M 排除。

- 选定流：窑干锯材（针叶材） `50904047-e5b0-4110-990a-53751d250267`
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_packing。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_packing`
- 来源：`volvo-factory`

###### 低密度聚乙烯薄膜（PE-LD） (`ldpe_film`)

仅限实际供入 LDPE 防护膜，记录厚度实测质量；从 M 排除。

- 选定流：低密度聚乙烯薄膜（PE-LD） `2cecd3a7-d90e-44b4-aec5-1d9dfb907477`
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_packing。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_packing`
- 来源：`volvo-factory`

## 7. 分配与共产品处理

| rule_id | applies_to | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_order` | shared operations | 按工单分离型号、底盘、附件、动力和加注配置；优先直接归属领退、仪表及返工。未分离共用工位采用实测因果工位时间或计量负荷，工单驱动量除以全部覆盖工单驱动量；记录因果依据、时期和分母。不允许不同尺寸型号间无解释等台数分配。 |  |
| `allocation_reuse` | material recovery | 内部复用为库存转移，不作重复新投入。输出钢废料、排出液体及漆渣记录实测数量去向，不自动抵扣避免产品。有价值共产品单独识别，先直接分离，再取得经审查剩余分配。记录时期内试验拒收返工负担纳入验收产出；披露在制库存。 |  |


## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_mass` | acceptance | 验收整机净质量 | weighing_record | 型号；配置；序列号；验收净质量 M；秤编号；校准；配重；铲斗；保留加注；分离交付件；包装皮重 | 使用经校准的秤称量已验收的完整机器，排除运输包装；核对同一配置和验收记录。 | kg | 逐台或同配置代表性批次 | 同工单制造时期 | 声明工厂配置 | 每台验收净质量 | 校准、皮重、部件完整性和验收凭据 |
| `cp_fabrication` | fabrication | 逐原子交换 | measured_order_record | 工单；序列号配置；部件牌号；供应商范围；领用；退回；库存变化；交换量；发动机件数；部件质量；仪表单位；电压；密度温度；验收台数；返工；分配驱动量；废物出口；实测排放质量 | 采集牌号厚度、坯料领退及库存变化；分别称量合格部件产出、未涂层边角料和机加工切屑；对实际工位分表计量。 | 各行声明 kg、MJ 或 Item(s) | 逐工单，批次核对 | 连续声明制造时期 | 结构切割、成形与机加工 | 可归属交换数量 / 验收机器数量 | 物料表、称量、分表校准、试验及移交凭据 |
| `cp_joining` | joining | 逐原子交换 | measured_order_record | 工单；序列号配置；部件牌号；供应商范围；领用；退回；库存变化；交换量；发动机件数；部件质量；仪表单位；电压；密度温度；验收台数；返工；分配驱动量；废物出口；实测排放质量 | 记录焊接规程、焊丝牌号及领退量、焊接检验返工和工位电力；按成分及出口称量已证实残渣。 | 各行声明 kg、MJ 或 Item(s) | 逐工单，批次核对 | 连续声明制造时期 | 结构连接 | 可归属交换数量 / 验收机器数量 | 物料表、称量、分表校准、试验及移交凭据 |
| `cp_finishing` | finishing | 逐原子交换 | measured_order_record | 工单；序列号配置；部件牌号；供应商范围；领用；退回；库存变化；交换量；发动机件数；部件质量；仪表单位；电压；密度温度；验收台数；返工；分配驱动量；废物出口；实测排放质量 | 采集批次配方及安全数据表、每项涂料领退、面积和固化质量、工艺水及实际输出废水、捕集漆渣和喷房电力。 | 各行声明 kg、MJ 或 Item(s) | 逐工单，批次核对 | 连续声明制造时期 | 表面预处理与涂装 | 可归属交换数量 / 验收机器数量 | 物料表、称量、分表校准、试验及移交凭据 |
| `cp_chassis` | chassis | 逐原子交换 | measured_order_record | 工单；序列号配置；部件牌号；供应商范围；领用；退回；库存变化；交换量；发动机件数；部件质量；仪表单位；电压；密度温度；验收台数；返工；分配驱动量；废物出口；实测排放质量 | 追溯下车架、上平台、行走回转部件号、实测安装质量、供应商完整性及轮履配置；内部转入单独核对。 | 各行声明 kg、MJ 或 Item(s) | 逐工单，批次核对 | 连续声明制造时期 | 下车架、行走与回转平台集成 | 可归属交换数量 / 验收机器数量 | 物料表、称量、分表校准、试验及移交凭据 |
| `cp_hydraulics` | hydraulics | 逐原子交换 | measured_order_record | 工单；序列号配置；部件牌号；供应商范围；领用；退回；库存变化；交换量；发动机件数；部件质量；仪表单位；电压；密度温度；验收台数；返工；分配驱动量；废物出口；实测排放质量 | 记录回路及逐部件物料表、泵缸类型、排量压力规格、软管构造、净质量及供应商包含范围；记录清洁度及泄漏试验。 | 各行声明 kg、MJ 或 Item(s) | 逐工单，批次核对 | 连续声明制造时期 | 挖掘连杆与液压集成 | 可归属交换数量 / 验收机器数量 | 物料表、称量、分表校准、试验及移交凭据 |
| `cp_power_cab` | power_cab | 逐原子交换 | measured_order_record | 工单；序列号配置；部件牌号；供应商范围；领用；退回；库存变化；交换量；发动机件数；部件质量；仪表单位；电压；密度温度；验收台数；返工；分配驱动量；废物出口；实测排放质量 | 采集安装发动机件数及单独实测总成质量、驾驶室动力物料表、电池构造、控制器版本和线束质量；核对供应商已含部件。 | 各行声明 kg、MJ 或 Item(s) | 逐工单，批次核对 | 连续声明制造时期 | 柴油动力单元、驾驶室与控制集成 | 可归属交换数量 / 验收机器数量 | 物料表、称量、分表校准、试验及移交凭据 |
| `cp_acceptance` | acceptance | 逐原子交换 | measured_order_record | 工单；序列号配置；部件牌号；供应商范围；领用；退回；库存变化；交换量；发动机件数；部件质量；仪表单位；电压；密度温度；验收台数；返工；分配驱动量；废物出口；实测排放质量 | 测量新液体燃料加入、退回、保留加注及耗用燃料；采集工厂试验单、排放测量及正值校准验收净质量 M，排除载荷和包装。 | 各行声明 kg、MJ 或 Item(s) | 逐工单，批次核对 | 连续声明制造时期 | 首次加注、工厂试验与验收 | 可归属交换数量 / 验收机器数量 | 物料表、称量、分表校准、试验及移交凭据 |
| `cp_packing` | packing | 逐原子交换 | measured_order_record | 工单；序列号配置；部件牌号；供应商范围；领用；退回；库存变化；交换量；发动机件数；部件质量；仪表单位；电压；密度温度；验收台数；返工；分配驱动量；废物出口；实测排放质量 | 称量每项支撑膜投入并记录出厂量、包装皮重及实际周转支撑次数。 | 各行声明 kg、MJ 或 Item(s) | 逐工单，批次核对 | 连续声明制造时期 | 出厂防护 | 可归属交换数量 / 验收机器数量 | 物料表、称量、分表校准、试验及移交凭据 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `normalize_mass` | 所有清单行 | q_ref = q_item / M; q_item = 每台验收成品机器的交换数量; q_ref = 每 1 kg 参考流的交换数量。 | q_item; M; cp_mass | q_ref |  |

对同质配置工单核对领用减退回及实测库存变化，采集实际公用工程排放，采用有记录共用份额，再将可归属总量除以验收台数得到 q_item。按相同实测交付状态 M 归一化。发动机件数分子保持每 kg 的 Item(s)；另测发动机质量用于物料表完整性，不转换其流属性。同兼容配置净质量 M 变化时保留逐序列号记录，将可归属工单交换除以总验收净质量；不兼容配置仍分开。记录计量不确定性、量值缺口及未启用路线；未知不等于零。

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `quality_bom` | all components | 将每项安装结构、执行器、驱动、驾驶室、动力系统及首次加注与配置物料表和供应商边界核对；避免部件坯料及预加液体重复。 | 序列号物料表及供应商范围 |
| `quality_balance` | mass and utilities | 核对库存、部件、安装 M、输出废物、保留液体、试验耗用及返工；实际液体换算实测密度温度。按实测记录设场址配置 QA 限值，不采用假定成材率或目录作业重量。 | 库存称量计量试验凭据 |
| `quality_coverage` | all processes | 声明时期地域、仪表工单覆盖、条件缺席、外包及上游链接。制造商能力配置描述不提供整机净质量或制造交换强度。 | 工单覆盖与证据登记 |


## 9. 校验规则

| rule_id | applies_to | 规则 | source_ids |
| --- | --- | --- | --- |
| `validate_reference` | reference product | 要求验收全回转柴油液压机器正实测 M，明确底盘动臂斗杆铲斗、配重、供应商完整性及交付加注。拒绝作业服务、基础设施摊销或拆解流替代。 |  |
| `validate_identity` | all inventory rows | 要求单一物理明确交换及匹配公开身份、实际参考属性、单位组、路线介质。冲突身份在数据完成前保持未解决；件数不是质量，冷却液不是纯乙二醇，送处理废液不是直接水排放。 |  |
| `validate_conversion` | all inventory rows | 核查采集范围及 normalize_mass 对应相同验收配置和 M；不得重复内部转移、外购完整模块组成或保留试验燃料。未知交换须证据，不设默认零。 |  |
| `validate_emissions` | elementary exchanges | 化石 CO2 须可归属实测工厂燃烧及空气未指定介质；其他已证实物质介质分别识别。不替代生物源碳、服务期油耗或 NO、NO2、N2O 身份。 |  |


## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 配置全回转柴油液压挖掘机前景制造数据集 |
| downstream_use | secondary_dataset；background_dataset，经合格审查且上游覆盖明确后 |
| allowed_use | 相同配置属性门点场址时期的制造供应链建模 |
| excluded_use | 开挖 m3 或寿命期排放服务比较；等质量挖掘等效；其他动力代理；上游缺失时完整摇篮到大门声明 |
| required_metadata | 参考限定、序列号配置物料表、实测 M 加注、实际操作、供应商范围、场址时期门点、采集分配凭据及匹配上游链接 |
| required_quality_disclosure | 缺失身份量值、不确定性、条件缺席行、额外物料表交换、历史证据限制及未链接外包上游阶段 |
| update_trigger | 底盘动力液压动臂铲斗驾驶室变化、供应商完整性、实测 M 加注、涂装路线、工厂地域时期或证据缺口解决 |


## 11. 数据源

| 来源编号 | 类型 | 参考 | 用途 |
| --- | --- | --- | --- |
| `volvo-factory` | literature | [Volvo CE Shippensburg Facility](https://www.volvoce.com/united-states/en-us/about-us/shippensburg-facility/) | What we do 段：具名多产品制造场址列出焊接、机加工、涂装、装配及试验。2026-10-04 UTC 获取。仅场址能力案例；不提供普遍路线、涂料配方、量值或整机净质量。 |
| `volvo-machine` | literature | [Volvo EC220E crawler excavator](https://www.volvoce.com/europe/en/products/excavators/ec220e/) | Optimized hydraulics、Volvo engine、Main Control Valve and Software 及驾驶室段；2026-10-04 UTC 获取。仅配置案例。矛盾发动机阶段营销不作合规依据；作业重量或油耗生产率声明不作制造换算因子。 |
| `liebherr-manufacture` | literature | [170 million euro investment: New Liebherr production site in Alsace](https://www.liebherr.com/shared/media/corporate/news/news-2023/06/21/lfr/liebherr-press-release-eco-rhena-investment-alsace.pdf) | 2023-06-21 新闻稿，PDF 及印刷第 1 页 Two different production activities：计划履带及轮式挖掘机结构焊接机加工与驾驶室装配。仅历史计划活动；不确认开业、现行制造、量值或净质量。 |
