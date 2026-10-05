---
pcr_id: pcr.metal-products-machinery-and-equipment.transport-equipment.marine-floating-structure
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 非自航钢质浮式工作平台制造

## 1. 范围与适用性

本候选 PCR 覆盖新制完整非自航钢质浮箱式工作平台及明确声明的联接模块结构配置，用于浮式工作支撑。固定整体连接/通行附件纳入，甲板支承的工作装备排除。前景始于指定坯料/成品模块及外购附件，止于配置特定制造验收/交付，包括可归属完整性试验。排除现场安装及水上工程服务。有依据时链接供应商上游；接收到交付的采集前景本身不为完整摇篮到大门。[来源：`pontonmade-steel`、`damen-modular`]

排除动力船舶、载货或液货驳船、浮坞/浮吊或钻采/风能平台、浮标/筏、非钢或泡沫填充浮体路线、已安装土建基础设施、维修/改装/转售及运营起吊/疏浚/打桩/运输/维护/报废。名称“浮箱/浮台”不建立同一边界：Koole 载货浮台案例运输货物与燃油，予以排除。本范围窄于 CPC 49390。密性结构浮力、模块联接及干净配置验收与钢材料或机动车车身 PCR 有实质区别。旧脚手架保持只读；科学审查待完成。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.transport-equipment.marine-floating-structure |
| classification_refs | CPC 3.0 49390；较窄非自航钢质浮箱式工作平台，仅背景 |
| covered_products | 新制完整钢质浮箱模块或明确联接结构工作平台 |
| excluded_products | 排除动力船舶、载货或液货驳船、浮坞/浮吊或钻采/风能平台、浮标/筏、非钢或泡沫填充浮体路线、已安装土建基础设施、维修/改装/转售及运营起吊/疏浚/打桩/运输/维护/报废。名称“浮箱/浮台”不建立同一边界：Koole 载货浮台案例运输货物与燃油，予以排除。本范围窄于 CPC 49390。密性结构浮力、模块联接及干净配置验收与钢材料或机动车车身 PCR 有实质区别。旧脚手架保持只读；科学审查待完成。 |
| representative_product | 一个序列号/配置关联验收完整浮箱模块或平台，具有实际干净 M |
| production_route | 条件坯料准备、密性外壳/甲板装配、条件表面处理、联接/舾装集成及完整性验收 |
| market_state | 制造门点验收完整结构单元及实际整体交付附件 |


## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 制造配置完整非自航钢质浮式工作平台 |
| How much | 1 kg 验收完整配置干净质量；实际按艘记录除以正受控 M |
| How well | 船舶特定结构安装调试放行准则，声明时追溯适用船旗船级验收。等质量不等于甲板载荷或浮力性能 |
| How long or cycle | 一次制造建造验收周期，不假定浮式平台寿命 |
| reference_flow_link | finished_machine |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 验收完整非自航钢质浮式工作平台 |
| 参考流属性 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 建造者/型号、序列号及图纸版本；钢牌号/厚度、外壳/甲板/隔舱形式、密性舱室及供应模块完整性；验收单模块或明确计数联接平台配置；固定联接板/销、人孔盖/密封及条件护舷/系缆桩/护栏/阳极；涂料配方及制造场址/时期/门点；当前受控验收记录正干净 M，单位 kg，依据实际重量/轻量检验、可追溯物理方法/校准及签署逐项配置核对；整体交付拆卸附件；排除外部工作装备、生活模块、人员、松散货物、压载/水/燃油、可拆保护、临时测试内容物及现场土建/锚固；可归属制造试验及支持资源范围；实际验收制度及上游链接 |

在元数据或等效参考备注声明所有限定。泛指公开船舶产品身份须限至实际浮式平台配置。净 M 包含完整安装钢制外壳/甲板/隔舱及整体交付附件。交付拆卸整体件按实测质量核对。排除人员松散载荷消耗性燃油淡水压载可拆保护临时试航载荷工装。总净吨位载重量目录质量满载排水量满燃油状态不能替代 M。实际检验状态测量只能经下述可追溯净配置修正记录用于 M。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | M = 同一配置的一台完整设备的验收净质量，单位 kg；采用 cp_mass 采集。 |
| `mass_record_provenance` | controlled acceptance mass records | Mass | kg | 受控验收记录是采集接口。要求当前实际干重量/轻量检验原件及序列号/配置/交付状态记录，具有可追溯物理方法、校准及逐项质量平衡。独立称量的完整模块及整体附件可核对至精确验收联接配置，签署增加/扣除项且不重复所含组成。采用实际浮态检验时，保留观测吃水/干舷、实测水密度、核验静水力资料及实测舱液/测试内容物，随后修正至本干净范围。不推断整个平台台秤，不以目录自重、甲板容量、浮力、排水量、载重量或吨位替代净 M。历史 NMA 程序仅为条件方法背景。[来源：nma-lightship] |
| `energy_conversion` | electricity | Net calorific value | MJ | 实际实测 kWh 按已核验单位身份 3.6 MJ/kWh 换算，保留进线电压场址路线。生产设备铭牌 kW 不是实测能量。 |
| `formulation_mass` | liquid formulations | Mass | kg | 分别称实际涂料基料固化剂燃料工作液配方。体积质量换算须声明组成状态温度下实测密度，不用油舱容量目录涂料覆盖率因子。 |


## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 接收指定钢坯料/成品浮箱模块及附件及实际供应商包含 |
| starting_condition_role | 前景接收到验收船舶交付制造 |
| product_classification_scope | 非自航钢质浮箱式工作平台，声明单模块/联接结构配置 |
| recursive_input_rule | 不递归生成完整浮式平台为自身投入，外购成品分段模块跳过所含操作 |
| upstream_dataset_requirement | 匹配实际牌号配方模块完整性/布置时期地域属性，披露供应商生产缺失 |
| disclosure | 建造者/型号、序列号及图纸版本；钢牌号/厚度、外壳/甲板/隔舱形式、密性舱室及供应模块完整性；验收单模块或明确计数联接平台配置；固定联接板/销、人孔盖/密封及条件护舷/系缆桩/护栏/阳极；涂料配方及制造场址/时期/门点；当前受控验收记录正干净 M，单位 kg，依据实际重量/轻量检验、可追溯物理方法/校准及签署逐项配置核对；整体交付拆卸附件；排除外部工作装备、生活模块、人员、松散货物、压载/水/燃油、可拆保护、临时测试内容物及现场土建/锚固；可归属制造试验及支持资源范围；实际验收制度及上游链接 |

| rule_id | applies_to | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_construction` | all processes | 纳入实际制造可归属返工下水建造调试至声明验收门。分配独立实测生产支持试航资源，排除水上作业服务研发运营维护。纳入时实际拖曳船坞起重服务燃料须独立声明交换，含服务边界时长供应商范围。不推断寿命航次负担。 |  |
| `boundary_modules` | purchased components | 成品船体分段浮箱模块结构/通行总成连组成预加液体计一次。所含供入替代组成行。实际厂内制造须实测部件清单。数据集放行前补齐全部实际物料表条件化学已证实物质，候选行不是穷尽船舶物料表。 |  |


## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `stock_form` | 钢制外壳、甲板与隔舱板准备 | conditional | 报告制造厂内实际坯料切割/成形。 | foreground | 一个验收配置完整结构单元，使用 M 归一化 |
| `hull_join` | 密性浮箱外壳与甲板装配 | required | 每个完整验收浮箱模块或声明平台。 | foreground | 一个验收配置完整结构单元，使用 M 归一化 |
| `surface_finish` | 表面准备与保护涂层 | conditional | 实际前景表面准备/涂装。 | foreground | 一个验收配置完整结构单元，使用 M 归一化 |
| `outfit` | 模块联接与实体舾装 | required | 完整声明模块或平台配置。 | foreground | 一个验收配置完整结构单元，使用 M 归一化 |
| `acceptance` | 完整性试验与完整配置验收 | required | 声明制造交付门点之前。 | foreground | 一个验收配置完整结构单元，使用 M 归一化 |
| `packing` | 交付保护与整体拆卸附件 | conditional | 实际可拆保护或整体交付拆卸附件。 | foreground | 一个验收配置完整结构单元，使用 M 归一化 |

实际坯料成形供入船体连接条件表面处理联接/附件集成及完整性验收，再条件交付保护。阶段可重叠，资源一次归属实际操作供应商范围。即使必需阶段，每行也须精确组成状态配置。遗漏实际部件燃料化学及已证实废物排放各自独立增列。不声称普遍焊接涂装配方或强制排放。

### 过程：钢制外壳、甲板与隔舱板准备 (`stock_form`)

追溯钢牌号、厚度、甲板/防滑表面及实际外壳/隔舱图纸。外购完整浮箱模块替代所含坯料与制造。实际切割气体、工具耗材和实测部件制造须分别增列。

#### 输入

##### 产品流

###### 热轧普通强度认证造船钢板 (`normal_hull_plate`)

仅记录实际使用的本项物理/组成交换；保留供应商范围/规格及独立实测领退或废物转移质量。记录条件缺席，不编造数量；不同实际变型须另列。

- 选定流：热轧普通强度认证造船钢板
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_stock_form。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_stock_form`
- 来源：`pontonmade-steel`

###### 热轧低合金高强厚造船钢板 (`hsla_plate`)

仅记录实际使用的本项物理/组成交换；保留供应商范围/规格及独立实测领退或废物转移质量。记录条件缺席，不编造数量；不同实际变型须另列。

- 选定流：热轧低合金高强厚造船钢板
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_stock_form。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_stock_form`
- 来源：`pontonmade-steel`

###### 热轧钢制船体加强筋型材 (`hull_profile`)

仅记录实际使用的本项物理/组成交换；保留供应商范围/规格及独立实测领退或废物转移质量。记录条件缺席，不编造数量；不同实际变型须另列。

- 选定流：热轧钢制船体加强筋型材
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_stock_form。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_stock_form`
- 来源：`pontonmade-steel`

###### 声明制造厂进线供入交流电力 (`electricity_stock_form`)

采集实测工位电力 kWh、进线电压/地域及实测共用资源驱动量分母；额定 kW 不是能量。

- 选定流：声明制造厂进线供入交流电力
- 流属性/单位：Net calorific value / MJ
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_stock_form。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_stock_form`
- 来源：`pontonmade-steel`

#### 输出

##### 废物流

###### 钢废料，边角料 (`steel_offcut`)

内部复用后输出分类未处理钢切割边角料，称实际量保留接收者，不含后续处理。
公开身份保留参考流属性 `93a60a56-a3c8-11da-a746-0800200b9a66`、单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` 及交换单位 kg。

- 选定流：钢废料，边角料 `ae44c4ac-bcd5-4a16-b0a5-d674ffeaab6b`
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_stock_form。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_stock_form`
- 来源：`pontonmade-steel`

### 过程：密性浮箱外壳与甲板装配 (`hull_join`)

装配并焊接实际外壳板、骨架、隔舱、甲板及一体联接槽。记录尺寸检验、焊接规程和实际返工。模块数量及舱室布置按实际图纸，不强制数值舱数或普遍焊接气体配方。

#### 输入

##### 产品流

###### 实心低合金钢气体保护焊丝 (`solid_wire`)

仅记录实际使用的本项物理/组成交换；保留供应商范围/规格及独立实测领退或废物转移质量。记录条件缺席，不编造数量；不同实际变型须另列。

- 选定流：实心低合金钢气体保护焊丝
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_hull_join。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_hull_join`
- 来源：`pontonmade-steel`

###### 二氧化碳 (`co2_shield`)

仅匹配本中国厂内路线身份实际使用供入纯 CO2 保护气。采集实测消耗质量，不替代氩预混液态或推定化石排放。
公开身份保留参考流属性 `93a60a56-a3c8-11da-a746-0800200b9a66`、单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` 及交换单位 kg。

- 选定流：二氧化碳 `27f41c1c-535e-4d2a-bce9-2c7f4de11549`
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_hull_join。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_hull_join`
- 来源：`pontonmade-steel`

###### 氩二氧化碳预混焊接保护气 (`argon_mix`)

仅记录实际使用的本项物理/组成交换；保留供应商范围/规格及独立实测领退或废物转移质量。记录条件缺席，不编造数量；不同实际变型须另列。

- 选定流：氩二氧化碳预混焊接保护气
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_hull_join。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_hull_join`
- 来源：`pontonmade-steel`

###### 声明制造厂进线供入交流电力 (`electricity_hull_join`)

采集实测工位电力 kWh、进线电压/地域及实测共用资源驱动量分母；额定 kW 不是能量。

- 选定流：声明制造厂进线供入交流电力
- 流属性/单位：Net calorific value / MJ
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_hull_join。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_hull_join`
- 来源：`pontonmade-steel`

#### 输出

##### 废物流

###### 捕集的富氧化铁船体焊接滤尘 (`weld_dust`)

仅记录实际使用的本项物理/组成交换；保留供应商范围/规格及独立实测领退或废物转移质量。记录条件缺席，不编造数量；不同实际变型须另列。

- 选定流：捕集的富氧化铁船体焊接滤尘
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_hull_join。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_hull_join`
- 来源：`pontonmade-steel`

### 过程：表面准备与保护涂层 (`surface_finish`)

记录实际准备、内外表面及独立涂层基料/固化剂。外购已涂装模块替代重复操作。环氧及氧化亚铜防污行仅实际采用相应配方时纳入；其他涂层或镀锌路线须独立实际交换及范围。

#### 输入

##### 产品流

###### 工艺用水 (`clean_water`)

实际清洗供入处理工业工艺水，排除内部循环环境资源取用。
公开身份保留参考流属性 `93a60a56-a3c8-11da-a746-0800200b9a66`、单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` 及交换单位 kg。

- 选定流：工艺用水 `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_surface_finish。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_surface_finish`
- 来源：`pontonmade-steel`

###### 球形铸钢船体抛丸磨料 (`abrasive`)

仅记录实际使用的本项物理/组成交换；保留供应商范围/规格及独立实测领退或废物转移质量。记录条件缺席，不编造数量；不同实际变型须另列。

- 选定流：球形铸钢船体抛丸磨料
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_surface_finish。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_surface_finish`
- 来源：`pontonmade-steel`

###### 配方环氧船用涂料基料组分 (`epoxy_base`)

仅记录实际使用的本项物理/组成交换；保留供应商范围/规格及独立实测领退或废物转移质量。记录条件缺席，不编造数量；不同实际变型须另列。

- 选定流：配方环氧船用涂料基料组分
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_surface_finish。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_surface_finish`
- 来源：`pontonmade-steel`

###### 聚胺船用环氧涂料固化剂配方 (`epoxy_hardener`)

仅记录实际使用的本项物理/组成交换；保留供应商范围/规格及独立实测领退或废物转移质量。记录条件缺席，不编造数量；不同实际变型须另列。

- 选定流：聚胺船用环氧涂料固化剂配方
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_surface_finish。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_surface_finish`
- 来源：`pontonmade-steel`

###### 氧化亚铜自抛光船用防污涂料配方 (`cu2o_paint`)

仅记录实际使用的本项物理/组成交换；保留供应商范围/规格及独立实测领退或废物转移质量。记录条件缺席，不编造数量；不同实际变型须另列。

- 选定流：氧化亚铜自抛光船用防污涂料配方
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_surface_finish。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_surface_finish`
- 来源：`pontonmade-steel`

###### 声明制造厂进线供入交流电力 (`electricity_surface_finish`)

采集实测工位电力 kWh、进线电压/地域及实测共用资源驱动量分母；额定 kW 不是能量。

- 选定流：声明制造厂进线供入交流电力
- 流属性/单位：Net calorific value / MJ
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_surface_finish。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_surface_finish`
- 来源：`pontonmade-steel`

#### 输出

##### 废物流

###### 含去除船体涂层残渣的废钢抛丸磨料 (`spent_abrasive`)

仅记录实际使用的本项物理/组成交换；保留供应商范围/规格及独立实测领退或废物转移质量。记录条件缺席，不编造数量；不同实际变型须另列。

- 选定流：含去除船体涂层残渣的废钢抛丸磨料
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_surface_finish。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_surface_finish`
- 来源：`pontonmade-steel`

###### 转交处理的钢船体清洗水性废液 (`clean_effluent`)

仅记录实际使用的本项物理/组成交换；保留供应商范围/规格及独立实测领退或废物转移质量。记录条件缺席，不编造数量；不同实际变型须另列。

- 选定流：转交处理的钢船体清洗水性废液
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_surface_finish。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_surface_finish`
- 来源：`pontonmade-steel`

### 过程：模块联接与实体舾装 (`outfit`)

实际联接板/销及检修盖分别安装，外购总成包含时不另计。护舷、系缆桩、护栏及锌阳极为实际条件变型。整体交付固定通行/连接五金纳入；外部起重、钻探/疏浚设备、生活模块及现场锚固/土建排除于本结构平台范围。厂内制造件与外购总成不重复计入。

#### 输入

##### 产品流

###### 成品钢制模块浮箱联接板 (`connection_plate`)

仅记录实际使用的本项物理/组成交换；保留供应商范围/规格及独立实测领退或废物转移质量。记录条件缺席，不编造数量；不同实际变型须另列。

- 选定流：成品钢制模块浮箱联接板
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_outfit。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_outfit`
- 来源：`pontonmade-steel`

###### 成品钢制模块浮箱联接销 (`connection_pin`)

仅记录实际使用的本项物理/组成交换；保留供应商范围/规格及独立实测领退或废物转移质量。记录条件缺席，不编造数量；不同实际变型须另列。

- 选定流：成品钢制模块浮箱联接销
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_outfit。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_outfit`
- 来源：`pontonmade-steel`

###### 成品钢制密性浮箱检修人孔盖 (`inspection_cover`)

仅记录实际使用的本项物理/组成交换；保留供应商范围/规格及独立实测领退或废物转移质量。记录条件缺席，不编造数量；不同实际变型须另列。

- 选定流：成品钢制密性浮箱检修人孔盖
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_outfit。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_outfit`
- 来源：`pontonmade-steel`

###### 成品 EPDM 橡胶浮箱人孔密封垫 (`epdm_seal`)

仅记录实际使用的本项物理/组成交换；保留供应商范围/规格及独立实测领退或废物转移质量。记录条件缺席，不编造数量；不同实际变型须另列。

- 选定流：成品 EPDM 橡胶浮箱人孔密封垫
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_outfit。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_outfit`
- 来源：`pontonmade-steel`

###### 成品焊接钢制浮箱系缆桩 (`bollard`)

仅记录实际使用的本项物理/组成交换；保留供应商范围/规格及独立实测领退或废物转移质量。记录条件缺席，不编造数量；不同实际变型须另列。

- 选定流：成品焊接钢制浮箱系缆桩
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_outfit。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_outfit`
- 来源：`pontonmade-steel`

###### 成品硫化橡胶圆柱形浮箱护舷 (`rubber_fender`)

仅记录实际使用的本项物理/组成交换；保留供应商范围/规格及独立实测领退或废物转移质量。记录条件缺席，不编造数量；不同实际变型须另列。

- 选定流：成品硫化橡胶圆柱形浮箱护舷
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_outfit。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_outfit`
- 来源：`pontonmade-steel`

###### 成品涂层钢制浮箱护栏段 (`guardrail`)

仅记录实际使用的本项物理/组成交换；保留供应商范围/规格及独立实测领退或废物转移质量。记录条件缺席，不编造数量；不同实际变型须另列。

- 选定流：成品涂层钢制浮箱护栏段
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_outfit。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_outfit`
- 来源：`pontonmade-steel`

###### 成品带安装嵌件牺牲锌浮箱阳极 (`zinc_anode`)

仅记录实际使用的本项物理/组成交换；保留供应商范围/规格及独立实测领退或废物转移质量。记录条件缺席，不编造数量；不同实际变型须另列。

- 选定流：成品带安装嵌件牺牲锌浮箱阳极
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_outfit。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_outfit`
- 来源：`pontonmade-steel`

###### 声明制造厂进线供入交流电力 (`electricity_outfit`)

采集实测工位电力 kWh、进线电压/地域及实测共用资源驱动量分母；额定 kW 不是能量。

- 选定流：声明制造厂进线供入交流电力
- 流属性/单位：Net calorific value / MJ
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_outfit。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_outfit`
- 来源：`pontonmade-steel`

### 过程：完整性试验与完整配置验收 (`acceptance`)

追溯实际舱室密性、尺寸/联接/涂层验收与返工。压力、测试介质与载荷方法来自实际有记录的适用设计；制造商载荷额定值不是普遍试验规定或净 M。仅纳入交付前实际发生的可归属生产支持起吊/下水试验资源，服务纳入时独立声明。柴油及基础排放行为可选实测厂内支持燃烧，不代表必需船载发动机或运营寿命。

#### 输入

##### 产品流

###### 供厂内支持建造试验的化石低硫柴油 (`test_diesel`)

仅记录实际使用的本项物理/组成交换；保留供应商范围/规格及独立实测领退或废物转移质量。记录条件缺席，不编造数量；不同实际变型须另列。

- 选定流：供厂内支持建造试验的化石低硫柴油
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_acceptance。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_acceptance`
- 来源：`pontonmade-steel`

###### 声明制造厂进线供入交流电力 (`electricity_acceptance`)

采集实测工位电力 kWh、进线电压/地域及实测共用资源驱动量分母；额定 kW 不是能量。

- 选定流：声明制造厂进线供入交流电力
- 流属性/单位：Net calorific value / MJ
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_acceptance。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_acceptance`
- 来源：`pontonmade-steel`

#### 输出

##### 产品流

###### 验收完整非自航钢质浮式工作平台 (`finished_machine`)

制造门点处验收完整声明浮箱模块或结构平台干净质量一千克，核对安装整体附件及交付拆卸件。排除工作装备、压载、水/燃油、人员、松散载荷、临时测试内容物及可拆包装。不含安装或运营水上作业服务。

- 选定流：验收完整非自航钢质浮式工作平台
- 流属性/单位：Mass / kg
- 数量规则：1 千克
- 数值来源模式：`fixed_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`process_output`
- 证据类型：`method_formula`
- 采集协议：`cp_mass`
- 来源：`pontonmade-steel`

#### 输出

##### 基本流

###### 二氧化碳（化石源） (`fossil_co2`)

仅实测可归属厂内支持建造燃料燃烧 CO2 排至空气未指定即时介质，且有已证实化石来源。不假定船载推进或必然燃烧。
公开身份保留参考流属性 `93a60a56-a3c8-11da-a746-0800200b9a66`、单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` 及交换单位 kg。

- 选定流：二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_acceptance。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_acceptance`
- 来源：`pontonmade-steel`

###### 一氧化氮 (`nitric_oxide`)

仅独立实测可归属厂内支持建造 NO 排至空气未指定即时介质。未分物种总 NOx 不建立本量，不假定必然排放。
公开身份保留参考流属性 `93a60a56-a3c8-11da-a746-0800200b9a66`、单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` 及交换单位 kg。

- 选定流：一氧化氮 `08a91e70-3ddc-11dd-96ee-0050c2490048`
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_acceptance。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_acceptance`
- 来源：`pontonmade-steel`

###### 二氧化氮 (`nitrogen_dioxide`)

仅独立实测可归属厂内支持建造 NO2 排至空气未指定即时介质。未分物种总 NOx 不建立本量，不假定必然排放。
公开身份保留参考流属性 `93a60a56-a3c8-11da-a746-0800200b9a66`、单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` 及交换单位 kg。

- 选定流：二氧化氮 `08a91e70-3ddc-11dd-96e5-0050c2490048`
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_acceptance。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_acceptance`
- 来源：`pontonmade-steel`

### 过程：交付保护与整体拆卸附件 (`packing`)

可拆保护独立计量并从 M 排除。整体拆卸联接件或附件须物理计量核对同一验收模块/平台配置。排除单独销售备件及门点后物流。

#### 输入

##### 产品流

###### 低密度聚乙烯薄膜（PE-LD） (`film`)

仅可拆非自黏、非泡沫、未增强/未层压 PE-LD 保护膜。实际领退独立计量并从 M 排除。
公开身份保留参考流属性 `93a60a56-a3c8-11da-a746-0800200b9a66`、单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` 及交换单位 kg。

- 选定流：低密度聚乙烯薄膜（PE-LD） `2cecd3a7-d90e-44b4-aec5-1d9dfb907477`
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_packing。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_packing`
- 来源：

###### 声明制造厂进线供入交流电力 (`electricity_packing`)

采集实测工位电力 kWh、进线电压/地域及实测共用资源驱动量分母；额定 kW 不是能量。

- 选定流：声明制造厂进线供入交流电力
- 流属性/单位：Net calorific value / MJ
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_packing。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_packing`
- 来源：

## 7. 分配与共产品处理

| rule_id | applies_to | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_orders` | shared shipyard resources | 按船体工单配置分开，优先直接归属实测坯料领退成品模块/附件收货工时仪表试航返工。不可分离共用资源采用已证实实测因果驱动量如操作时间负荷涂装面积层要求：份额 = 工单驱动量 / 全部覆盖工单驱动量总和。保留时期分母因果，吨位标称排水量等艘数不自动作因果驱动。 |  |
| `allocation_recovery` | internal reuse and waste | 内部复用坯料水试验燃料为转移，不重复新投入自动抵扣。输出废物保留实测量接收者，不假定避免生产效益。经记录审查剩余分配前分离可售共产品。将报告期拒收返工建造在制核对至验收产出。 |  |


## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_mass` | acceptance | 验收完整配置干净质量 | controlled_acceptance_record | 型号；配置；序列号；验收净质量 M；验收重量报告原件编号日期；实际轻船重量检验方法；仪表校准；交付状态；整体安装附件；逐项增加扣除质量；排除货物人员燃油淡水压载试验载荷；拆卸整体件；核验者；质量平衡 | 使用受控的验收质量记录核对同一配置的验收设备。 | kg | 逐完整配置验收 | 该配置实际制造验收时期 | 声明船厂验收门点 | 每台验收净质量 | 原始实际检验配置修正质量平衡核验记录 |
| `cp_stock_form` | stock_form | 钢制外壳、甲板与隔舱板准备 | foreground_record | 模块/平台序列号工单；配置；验收完整单元数量；交换身份状态属性单位；领退库存变化；供应商包含；模块数量及逐项实测干质量；电力 kWh 进线；燃料领退消耗保留；实际物质介质；废物接收者；共用驱动量分母；仪表校准 | 采集配置关联图纸原件、供应商范围、实测领退、仪表及完整性试验记录。 | 逐行实际单位 | 逐工单批次 | 声明制造时期 | 声明船厂明示外包 | 可归属交换数量 / 验收设备数量 | 原件称量仪表供应商试验移交验收 |
| `cp_hull_join` | hull_join | 密性浮箱外壳与甲板装配 | foreground_record | 模块/平台序列号工单；配置；验收完整单元数量；交换身份状态属性单位；领退库存变化；供应商包含；模块数量及逐项实测干质量；电力 kWh 进线；燃料领退消耗保留；实际物质介质；废物接收者；共用驱动量分母；仪表校准 | 采集配置关联图纸原件、供应商范围、实测领退、仪表及完整性试验记录。 | 逐行实际单位 | 逐工单批次 | 声明制造时期 | 声明船厂明示外包 | 可归属交换数量 / 验收设备数量 | 原件称量仪表供应商试验移交验收 |
| `cp_surface_finish` | surface_finish | 表面准备与保护涂层 | foreground_record | 模块/平台序列号工单；配置；验收完整单元数量；交换身份状态属性单位；领退库存变化；供应商包含；模块数量及逐项实测干质量；电力 kWh 进线；燃料领退消耗保留；实际物质介质；废物接收者；共用驱动量分母；仪表校准 | 采集配置关联图纸原件、供应商范围、实测领退、仪表及完整性试验记录。 | 逐行实际单位 | 逐工单批次 | 声明制造时期 | 声明船厂明示外包 | 可归属交换数量 / 验收设备数量 | 原件称量仪表供应商试验移交验收 |
| `cp_outfit` | outfit | 模块联接与实体舾装 | foreground_record | 模块/平台序列号工单；配置；验收完整单元数量；交换身份状态属性单位；领退库存变化；供应商包含；模块数量及逐项实测干质量；电力 kWh 进线；燃料领退消耗保留；实际物质介质；废物接收者；共用驱动量分母；仪表校准 | 采集配置关联图纸原件、供应商范围、实测领退、仪表及完整性试验记录。 | 逐行实际单位 | 逐工单批次 | 声明制造时期 | 声明船厂明示外包 | 可归属交换数量 / 验收设备数量 | 原件称量仪表供应商试验移交验收 |
| `cp_acceptance` | acceptance | 完整性试验与完整配置验收 | foreground_record | 模块/平台序列号工单；配置；验收完整单元数量；交换身份状态属性单位；领退库存变化；供应商包含；模块数量及逐项实测干质量；电力 kWh 进线；燃料领退消耗保留；实际物质介质；废物接收者；共用驱动量分母；仪表校准 | 采集配置关联图纸原件、供应商范围、实测领退、仪表及完整性试验记录。 | 逐行实际单位 | 逐工单批次 | 声明制造时期 | 声明船厂明示外包 | 可归属交换数量 / 验收设备数量 | 原件称量仪表供应商试验移交验收 |
| `cp_packing` | packing | 交付保护与整体拆卸附件 | foreground_record | 模块/平台序列号工单；配置；验收完整单元数量；交换身份状态属性单位；领退库存变化；供应商包含；模块数量及逐项实测干质量；电力 kWh 进线；燃料领退消耗保留；实际物质介质；废物接收者；共用驱动量分母；仪表校准 | 采集配置关联图纸原件、供应商范围、实测领退、仪表及完整性试验记录。 | 逐行实际单位 | 逐工单批次 | 声明制造时期 | 声明船厂明示外包 | 可归属交换数量 / 验收设备数量 | 原件称量仪表供应商试验移交验收 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `normalize_mass` | 所有清单行 | q_ref = q_item / M; q_item = 每台验收成品设备的交换数量; q_ref = 每 1 kg 参考流的交换数量。 | q_item; M; cp_mass | q_ref |  |

逐船体配置工单采集可归属净坯料领用独立模块公用工程建造试航消耗废物实际排放，扣记录退回库存变化并合理共用分配，再除验收完整单元数量得 q_item，除同一受控实测净 M。完整模块实测质量及质量交换 kg/kg，电力 MJ/kg。兼容序列号船舶实测质量变化时可归属总量除验收净质量之和，保留全部序列号记录。分开不兼容模块数量/布置、钢结构及附件涂装试航范围。未知为缺口，不作零，不推断吨位容量额定功率寿命换算。

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `quality_mass_origin` | cp_mass | 当前原件须实施 mass_record_provenance。核对模块实测质量、精确模块数量/布置、安装/拆卸联接件实测质量及全部净范围修正。保留原始仪表/方法/校准及签署交付质量平衡。不确定内容物或配置改变须新测量/核对；实际记录缺失阻止完整量值数据，不能以目录估计替代。 | 原件与修正台账；nma-lightship 仅方法案例 |
| `quality_bom` | complete vessel | 将实际外壳/甲板/隔舱图纸、模块/联接范围、人孔盖/密封及各整体条件附件/表面核对至交付干净质量。完成前增列全部实际缺失组成及制造操作；外购成品模块与厂内组成只计一次。排除外部工作装备及现场安装。 | 图纸原件称量供应商完整性 |
| `quality_balances` | flows and trials | 保留校准物料领退复用实际配方密度厂内支持试验消耗与退回燃料实测物质介质出口。QA 限值来自适用实际记录核验可比证据，不编造收率强度范围普遍调试耗用。 | 库存仪表安全数据表试验移交 |
| `quality_coverage` | dataset | 披露实际地域时期配置条件缺席外包身份量值不确定性经验范围缺口上游缺失适用验收制度。历史制造者主管案例不证明目前证书现行法律完整性本平台实际 M。PCR 检查核验声明关系，不验证真实平台重量记录科学批准。 | 覆盖证据限制登记 |


## 9. 校验规则

| rule_id | applies_to | 规则 | source_ids |
| --- | --- | --- | --- |
| `validate_reference` | reference | 要求配置完整非自航钢质浮式平台及实施 mass_record_provenance 的受控记录正实际净 M。排除运营货物人员燃油淡水压载临时载荷，保留声明整体安装附件。拒绝吨位载重量目录满载排水量满燃油质量替代。底层方法平衡缺失须审查并阻止量值数据完成。 |  |
| `validate_identity` | all rows | 核对每个单一物理/化学交换、公开参考属性/单位组、精确路线/状态及供应范围。模块数量不能作净质量；接收完整模块替代所含坯料及工作。CuO 不是 Cu2O 涂料，产品工艺水不是废液或环境取水。无依据 UUID 留空登记精确行原因，包括参考产品；数据完成前增列实际遗漏交换。 |  |
| `validate_measurement` | all rows | 逐数量采集换算核验同配置实际时期场址验收完整单元数量净 M。核对安装预加液体消耗厂内支持试验燃料供应商组成无重复；核验校准密度单位换算共用分母。未知不得作零。 |  |
| `validate_species` | elementary rows | 仅采用已证实可归属建造试航物质实际环境介质。本 CO2/NO/NO2 身份为空气未指定即时排放，化石 CO2 须化石来源。未分物种总 NOx、N2O、氮亚硝酸盐生物源 CO2 水土壤长期排放不得替代。捕集滤尘保留废物。 |  |
| `validate_structure` | float modules and coupled layout | 核对实际模块序列号/数量/布置、外壳/甲板/隔舱图纸、一体联接槽、供入板/销、人孔盖/密封及干净交付范围。追溯实际焊接及舱室完整性方法、校准测试仪表、声明介质及可归属出口/返工。制造商载荷/浮力性能不是净 M、普遍试验压力或当前产品认证证明。临时试验与后续现场部署保持区别。 | `pontonmade-steel` |
| `validate_acceptance` | claimed flag/class acceptance | 声明时追溯实际船舶特定检验证书适用主管船级制度。制造商案例不认证本件浮式平台，不采用普遍数值标准试验载荷。 | `pontonmade-steel` |


## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 配置完整非自航钢质浮式平台前景制造数据集 |
| downstream_use | secondary_dataset；background_dataset，经合格审查及声明上游链接后 |
| allowed_use | 匹配模块布置/结构/附件/涂装受控净质量范围建造完整性试验边界门点场址时期制造供应链模型 |
| excluded_use | 水上作业/运输服务或寿命比较、等质量载荷/浮力等效、其他材料/平台用途及无依据完整摇篮到大门声明 |
| required_metadata | 建造者/型号、序列号及图纸版本；钢牌号/厚度、外壳/甲板/隔舱形式、密性舱室及供应模块完整性；验收单模块或明确计数联接平台配置；固定联接板/销、人孔盖/密封及条件护舷/系缆桩/护栏/阳极；涂料配方及制造场址/时期/门点；当前受控验收记录正干净 M，单位 kg，依据实际重量/轻量检验、可追溯物理方法/校准及签署逐项配置核对；整体交付拆卸附件；排除外部工作装备、生活模块、人员、松散货物、压载/水/燃油、可拆保护、临时测试内容物及现场土建/锚固；可归属制造试验及支持资源范围；实际验收制度及上游链接 |
| required_quality_disclosure | 身份量值质量原始依据缺口不确定性条件缺席完整物料表分配实际验收范围未链接上游 |
| update_trigger | 模块布置/结构/附件/涂装供应商模块实际 M 证据修正建造试验状态/边界制造验收制度场址时期变化 |


## 11. 数据源

| 来源编号 | 类型 | 参考 | 用途 |
| --- | --- | --- | --- |
| `pontonmade-steel` | literature | [Ponton Made: Steel 1.5-1.2-1.0](https://www.pontonmade.com/en/work-pontoons/steel-1-5-1-2-1-0/) | General 与 Coupling system 各段：焊接/保护接缝、密性舱室及钢制联接板/销。仅制造商设计案例。不采用自重表、甲板额定载荷、证书声明或模块数量作为实际 M、普遍要求或制造因子。 |
| `damen-modular` | literature | [Damen: Modular Pontoons](https://www.damen.com/vessels/pontoons-and-barges/modular-pontoons?view=models) | Fit for purpose 与 Versatile solution 各段描述模块化工作平台及独立装备设计。用于声明模块/平台及装备边界；液压桩腿、起重及生活模块不在本结构范围。不采用尺寸、性能、运输或寿命因子。 |
| `koole-cargo-counterexample` | literature | [Koole: K4512 & K4512-2](https://www.koole.eu/wp-content/uploads/2024/08/Technical-details-K4512-2.pdf) | PDF 第 1 页标识非自航甲板载货与 MDO 运输，第 2 页燃油驳船分类。反例：商业“浮台”名称不建立本工作平台边界。不采用制造配方、载重量、舱容或数值。 |
| `nma-lightship` | official_guidance | [NMA KS-0179-1E Rev.07.01.2020](https://www.sdir.no/siteassets/skjema/ks-0179-1-procedure-for-inclining-test-and-determination-of-lightship-displace-eng.pdf) | PDF/印刷第 5–7 页第 3.2–3.4 节船况、舱液、水密度及吃水/干舷观测。仅为适用时可追溯检验的历史挪威方法案例；仍须当前物理干净重量/检验及配置核对。不采用普遍法律或数值阈值。 |
