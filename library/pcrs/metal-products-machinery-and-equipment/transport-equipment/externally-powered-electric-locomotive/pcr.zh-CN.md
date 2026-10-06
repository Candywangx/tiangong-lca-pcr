---
pcr_id: pcr.metal-products-machinery-and-equipment.transport-equipment.externally-powered-electric-locomotive
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 接触网交流供电电力机车制造

## 1. 范围与适用性

制造由接触网交流供电、具有牵引变压器、功率变流器及异步牵引电机的新制完整钢制车体电力机车，从声明坯料或外购车体模块至配置特定制造验收。这是 CPC 49511 中较窄路线。必需走行部牵引舾装集成验收与条件厂内车体制造涂装包装分开。参考流不提供运输服务。

排除纯直流/第三轨供电、具直流能力的多系统变型、内燃电力传动/双模式/离线牵引电池配置、自行客车动车组、不完整车体转向架、改装维修转售、运营维护及报废。辅助控制电池不将边界扩大至牵引电池。质量本身不建立等效功率、牵引能力或列车服务性能。

Akiem 列出纯交流配置及异步牵引电机。西门子区分交流直流多系统变型；2013 年历史手册识别条件变流器水冷及变压器酯。阿尔斯通 2019 年仅为直流机车多场址装配案例。两者均不提供普遍配方、当前实际质量、寿命或制造强度。前景仅为接收到放行制造；完整摇篮到大门须披露兼容供应商上游链接。科学审查待完成。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.transport-equipment.externally-powered-electric-locomotive |
| classification_refs | CPC 3.0 49511；较窄接触网纯交流路线，仅背景 |
| covered_products | 制造由接触网交流供电、具有牵引变压器、功率变流器及异步牵引电机的新制完整钢制车体电力机车，从声明坯料或外购车体模块至配置特定制造验收。这是 CPC 49511 中较窄路线。必需走行部牵引舾装集成验收与条件厂内车体制造涂装包装分开。参考流不提供运输服务。 |
| excluded_products | 排除纯直流/第三轨供电、具直流能力的多系统变型、内燃电力传动/双模式/离线牵引电池配置、自行客车动车组、不完整车体转向架、改装维修转售、运营维护及报废。辅助控制电池不将边界扩大至牵引电池。质量本身不建立等效功率、牵引能力或列车服务性能。 |
| representative_product | 一个序列号配置关联的验收完整接触网交流电力机车，具有实测净 M |
| production_route | 条件车体准备连接涂装、走行部交流牵引安装、舾装、制造验收及条件保护 |
| market_state | 声明制造门点新制验收完整配置机车 |


## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 制造完整配置接触网交流供电电力机车 |
| How much | 1 kg 验收完整机车净质量；实际按台交换使用正实测 M 归一化 |
| How well | 实际车辆特定结构电气制动放行要求及适用验收证据；不作等质量牵引能力等效 |
| How long or cycle | 一次制造与制造验收周期；不假定运营寿命 |
| reference_flow_link | finished_machine |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 外接电源作为动力的铁路机车 `1532ccb7-1703-4ca3-bd21-bfe65dac7ded` |
| 参考流属性 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 制造者/型号/序列号及图纸版本；接触网交流电压频率及受电弓配置；变压器变流器电机型式额定值冷却及供应完整性；车体钢牌号路线；转向架轮对齿轮制动配置；司机室控制辅助电池化学；实际初加工作液及固定压铁；由可追溯实际称重记录取得的完整验收净 M（kg）；排除包装人员松散耗材黏着砂临时试验运输夹具；物理实测拆卸整体交付附件；验收试验门点场址时期；供应商上游及共用资源范围 |

声明全部限定信息。公开广义成品机车身份仅用于较窄实际配置。M 包含安装车体走行部牵引控制辅助总成、声明工作液加注及固定设计压铁。排除人员松散黏着砂耗材、备件可拆保护及临时试验运输载荷。物理实测整体拆卸交付件与另售备件分开。目录质量、额定轴重乘轴数或牵引列车重量不能建立 M。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | 参考产品 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | M = 同一配置的一台完整设备的验收净质量,单位 kg; 使用 cp_mass 采集。 |
| `mass_record_provenance` | cp_mass | Mass | kg | 保留当前经校准实际完整车辆称重，或按声明水平方法覆盖同一车辆全部车轮的有记录轮轴载荷称重原件，含校准零点去皮重复性序列号日期操作者不确定性。对实际同时适用轮轴实测求和，核对验收配置、实测工作液固定压铁及逐项临时载荷。仅以可追溯独立实测增加扣除将运转整备称重转换至声明净范围。不得用目录重量、设计轴重上限、总重列车重量或无解释验收数替代。 |
| `unit_conversion` | 公用工程与化学 | original measured property | 逐行实际单位 | 区分质量体积能量数量。电力计量 kWh；经核验能量单位组 1 kWh = 3.6 MJ。体积或外购件数仅以实际同配方密度温度或同配置实测单件质量转换为质量，保留原数。不假定液体密度或部件质量。 |


## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 接收指定钢坯料、外购完整车体转向架牵引辅助模块及声明供应商范围 |
| starting_condition_role | 前景接收到验收制造门点放行 |
| product_classification_scope | 完整接触网纯交流电力机车，不为列车服务 |
| recursive_input_rule | 不生成成品机车作为自身投入。外购车体模块跳过所含操作；厂内件须自身实测部件清单 |
| upstream_dataset_requirement | 匹配实际材料配方、电气配置模块完整性属性、场址时期供应生产；披露未链接上游 |
| disclosure | 制造者/型号/序列号及图纸版本；接触网交流电压频率及受电弓配置；变压器变流器电机型式额定值冷却及供应完整性；车体钢牌号路线；转向架轮对齿轮制动配置；司机室控制辅助电池化学；实际初加工作液及固定压铁；由可追溯实际称重记录取得的完整验收净 M（kg）；排除包装人员松散耗材黏着砂临时试验运输夹具；物理实测拆卸整体交付附件；验收试验门点场址时期；供应商上游及共用资源范围 |

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_foreground` | 全部阶段 | 纳入实际制造可归属返工与门点前工厂验收运行。实际存在时试验用电黏着砂支持热废物分开。排除商业牵引、门点后交付车队维护及寿命再生。外包制造支持服务仅以明确供应商范围服务单位归属纳入；逐服务独立增列。 |  |
| `boundary_completeness` | 外购总成 | 每个接收实体总成连所含部件工作液计一次。含牵引电机完整转向架替代重复电机轮对制动投入。接收完整车体替代所含坯料加工，须独立记录车体投入。完成数据集前补齐全部实际物料表、液体气体溶剂制冷剂工具及废物排放身份；候选行不是普遍穷尽物料表。 |  |


## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `body_fabrication` | 车体坯料准备与连接 | conditional | 实际厂内钢制车体制造。 | foreground | 一台验收配置机车，使用 M 归一化 |
| `surface_finish` | 表面准备与保护涂装 | conditional | 实际前景清洗、抛丸或涂装。 | foreground | 一台验收配置机车，使用 M 归一化 |
| `running_gear` | 转向架与走行部集成 | required | 每台完整验收机车。 | foreground | 一台验收配置机车，使用 M 归一化 |
| `traction_install` | 接触网交流牵引系统安装 | required | 覆盖的接触网交流供电配置。 | foreground | 一台验收配置机车，使用 M 归一化 |
| `outfitting` | 制动、司机室与辅助系统集成 | required | 完整声明验收配置。 | foreground | 一台验收配置机车，使用 M 归一化 |
| `acceptance` | 电气、机械与完整配置验收 | required | 声明制造放行门点之前。 | foreground | 一台验收配置机车，使用 M 归一化 |
| `packing` | 交付保护与拆卸整体附件 | conditional | 实际可拆保护或交付拆卸整体附件。 | foreground | 一台验收配置机车，使用 M 归一化 |

车体制造供入条件表面处理及走行部牵引舾装集成，继而完整配置验收及条件保护。阶段可重叠；资源一次归属。即使必需阶段，各交换行也以实际组成配置为条件。每行为一个物理或化学交换；不强制排放或焊接涂装配方。

### 过程：车体坯料准备与连接 (`body_fabrication`)

按实际认证钢板型材切割成形、装配底架车体顶盖，按有记录焊接规程连接并检验尺寸接头。外购完整车体替代所含坯料制造。实心焊丝保护气行仅适用实际路线；其他切割焊接耗材独立增列。

#### 输入

##### 产品流

###### 热轧低合金钢机车车体板 (`body_plate`)

仅实际存在时记录本指定实体交换；保留供应商规格完整性及独立实测净领用或转移。已证实缺席为 not_applicable，缺失数量为缺口。不同实际变型独立增列。

- 选定流：热轧低合金钢机车车体板
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_body_fabrication。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_body_fabrication`
- 来源：`siemens-electric`

###### 热轧钢机车底架结构型材 (`body_profile`)

仅实际存在时记录本指定实体交换；保留供应商规格完整性及独立实测净领用或转移。已证实缺席为 not_applicable，缺失数量为缺口。不同实际变型独立增列。

- 选定流：热轧钢机车底架结构型材
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_body_fabrication。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_body_fabrication`
- 来源：`siemens-electric`

###### 实心低合金钢气体保护焊丝 (`solid_wire`)

仅实际存在时记录本指定实体交换；保留供应商规格完整性及独立实测净领用或转移。已证实缺席为 not_applicable，缺失数量为缺口。不同实际变型独立增列。

- 选定流：实心低合金钢气体保护焊丝
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_body_fabrication。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_body_fabrication`
- 来源：`siemens-electric`

###### 二氧化碳 (`co2_shield`)

仅匹配公开中国厂内路线实际焊接供入纯 CO2；不替代氩预混或推定化石基础排放。

- 选定流：二氧化碳 `27f41c1c-535e-4d2a-bce9-2c7f4de11549`
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_body_fabrication。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_body_fabrication`
- 来源：`siemens-electric`

###### 氩二氧化碳预混焊接保护气 (`argon_mix`)

仅实际存在时记录本指定实体交换；保留供应商规格完整性及独立实测净领用或转移。已证实缺席为 not_applicable，缺失数量为缺口。不同实际变型独立增列。

- 选定流：氩二氧化碳预混焊接保护气
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_body_fabrication。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_body_fabrication`
- 来源：`siemens-electric`

###### 工厂进线交流电力 (`body_fabrication_electricity`)

实测可归属电力 kWh，在能量单位组按 1 kWh = 3.6 MJ 换算；试验购入送出及厂内发电分别计量。

- 选定流：工厂进线交流电力
- 流属性/单位：Net calorific value / MJ
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_body_fabrication。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_body_fabrication`
- 来源：`siemens-electric`

#### 输出

##### 废物流

###### 钢废料，边角料 (`steel_offcut`)

称量内部复用后输出分类未处理切割边角料，保留接收者，排除下游处理及避免生产抵扣。

- 选定流：钢废料，边角料 `ae44c4ac-bcd5-4a16-b0a5-d674ffeaab6b`
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_body_fabrication。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_body_fabrication`
- 来源：`siemens-electric`

###### 捕集的富氧化铁焊接滤尘 (`weld_dust`)

仅实际存在时记录本指定实体交换；保留供应商规格完整性及独立实测净领用或转移。已证实缺席为 not_applicable，缺失数量为缺口。不同实际变型独立增列。

- 选定流：捕集的富氧化铁焊接滤尘
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_body_fabrication。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_body_fabrication`
- 来源：`siemens-electric`

### 过程：表面准备与保护涂装 (`surface_finish`)

记录实际涂料配方、施涂面积层次与准备。环氧基料固化剂为条件配方，不是必需技术。供应商已涂装总成替代重复涂装；捕集废物不作基础空气排放。

#### 输入

##### 产品流

###### 工艺用水 (`clean_water`)

实际外购处理工艺清洗水，不作环境水资源或内部循环水。

- 选定流：工艺用水 `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_surface_finish。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_surface_finish`
- 来源：`siemens-electric`

###### 球形铸钢抛丸磨料 (`abrasive`)

仅实际存在时记录本指定实体交换；保留供应商规格完整性及独立实测净领用或转移。已证实缺席为 not_applicable，缺失数量为缺口。不同实际变型独立增列。

- 选定流：球形铸钢抛丸磨料
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_surface_finish。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_surface_finish`
- 来源：`siemens-electric`

###### 配方环氧轨道车辆涂料基料组分 (`epoxy_base`)

仅实际存在时记录本指定实体交换；保留供应商规格完整性及独立实测净领用或转移。已证实缺席为 not_applicable，缺失数量为缺口。不同实际变型独立增列。

- 选定流：配方环氧轨道车辆涂料基料组分
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_surface_finish。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_surface_finish`
- 来源：`siemens-electric`

###### 聚胺轨道车辆环氧涂料固化剂配方 (`epoxy_hardener`)

仅实际存在时记录本指定实体交换；保留供应商规格完整性及独立实测净领用或转移。已证实缺席为 not_applicable，缺失数量为缺口。不同实际变型独立增列。

- 选定流：聚胺轨道车辆环氧涂料固化剂配方
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_surface_finish。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_surface_finish`
- 来源：`siemens-electric`

###### 工厂进线交流电力 (`surface_finish_electricity`)

实测可归属电力 kWh，在能量单位组按 1 kWh = 3.6 MJ 换算；试验购入送出及厂内发电分别计量。

- 选定流：工厂进线交流电力
- 流属性/单位：Net calorific value / MJ
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_surface_finish。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_surface_finish`
- 来源：`siemens-electric`

#### 输出

##### 废物流

###### 含去除涂层残渣的废钢抛丸磨料 (`spent_abrasive`)

仅实际存在时记录本指定实体交换；保留供应商规格完整性及独立实测净领用或转移。已证实缺席为 not_applicable，缺失数量为缺口。不同实际变型独立增列。

- 选定流：含去除涂层残渣的废钢抛丸磨料
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_surface_finish。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_surface_finish`
- 来源：`siemens-electric`

###### 转交处理的钢车体清洗水性废液 (`clean_effluent`)

仅实际存在时记录本指定实体交换；保留供应商规格完整性及独立实测净领用或转移。已证实缺席为 not_applicable，缺失数量为缺口。不同实际变型独立增列。

- 选定流：转交处理的钢车体清洗水性废液
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_surface_finish。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_surface_finish`
- 来源：`siemens-electric`

### 过程：转向架与走行部集成 (`running_gear`)

安装记录的转向架轮对、悬挂机械传动，对中检验。外购转向架为一个完整实体总成；记录是否包含轮对电机齿轮制动并禁止重复组成投入。厂内制造时以实测部件过程交换替代总成。

#### 输入

##### 产品流

###### 完整成品钢制机车车体（底架与顶盖） (`body_received`)

仅实际存在时记录本指定实体交换；保留供应商规格完整性及独立实测净领用或转移。已证实缺席为 not_applicable，缺失数量为缺口。不同实际变型独立增列。

- 选定流：完整成品钢制机车车体（底架与顶盖）
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_running_gear。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_running_gear`
- 来源：`siemens-electric`

###### 转向架总成 (`bogie_received`)

外购记录配置完整机车转向架总成：声明轮对制动牵引电机齿轮箱包含，所含件计一次。公开通用转向架身份不提供制造因子或认证轴式。

- 选定流：转向架总成 `ce7fe0f9-b245-44f1-a779-3a364f2234a9`
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_running_gear。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_running_gear`
- 来源：`siemens-electric`

###### 成品锻钢机车轮对（车轴与车轮） (`wheelset`)

仅实际存在时记录本指定实体交换；保留供应商规格完整性及独立实测净领用或转移。已证实缺席为 not_applicable，缺失数量为缺口。不同实际变型独立增列。

- 选定流：成品锻钢机车轮对（车轴与车轮）
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_running_gear。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_running_gear`
- 来源：`siemens-electric`

###### 润滑油 (`gear_oil`)

仅实际齿轮箱初加独立领用石油基配方润滑油；记录牌号，排除总成已含供应商预加。

- 选定流：润滑油 `66628f20-9d33-4997-bd6c-6357453fa268`
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_running_gear。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_running_gear`
- 来源：`siemens-electric`

###### 工厂进线交流电力 (`running_gear_electricity`)

实测可归属电力 kWh，在能量单位组按 1 kWh = 3.6 MJ 换算；试验购入送出及厂内发电分别计量。

- 选定流：工厂进线交流电力
- 流属性/单位：Net calorific value / MJ
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_running_gear。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_running_gear`
- 来源：`siemens-electric`

### 过程：接触网交流牵引系统安装 (`traction_install`)

集成实际受电弓、主断路器、牵引变压器、功率变流器及异步牵引电机，记录高压绝缘、冷却控制。外购总成预加液体计一次。历史西门子酯/水冷案例仅支持条件路线识别；矿物油/合成酯及冷却变型须实际安全数据表和独立交换。

#### 输入

##### 产品流

###### 完整接触网机车受电弓集电器 (`pantograph`)

仅实际存在时记录本指定实体交换；保留供应商规格完整性及独立实测净领用或转移。已证实缺席为 not_applicable，缺失数量为缺口。不同实际变型独立增列。

- 选定流：完整接触网机车受电弓集电器
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_traction_install。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_traction_install`
- 来源：`siemens-environment`

###### 完整机车高压真空主断路器 (`main_breaker`)

仅实际存在时记录本指定实体交换；保留供应商规格完整性及独立实测净领用或转移。已证实缺席为 not_applicable，缺失数量为缺口。不同实际变型独立增列。

- 选定流：完整机车高压真空主断路器
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_traction_install。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_traction_install`
- 来源：`siemens-environment`

###### 完整油浸接触网交流机车牵引变压器 (`traction_transformer`)

仅实际存在时记录本指定实体交换；保留供应商规格完整性及独立实测净领用或转移。已证实缺席为 not_applicable，缺失数量为缺口。不同实际变型独立增列。

- 选定流：完整油浸接触网交流机车牵引变压器
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_traction_install。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_traction_install`
- 来源：`siemens-environment`

###### 完整机车 IGBT 牵引变流器总成 (`traction_converter`)

仅实际存在时记录本指定实体交换；保留供应商规格完整性及独立实测净领用或转移。已证实缺席为 not_applicable，缺失数量为缺口。不同实际变型独立增列。

- 选定流：完整机车 IGBT 牵引变流器总成
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_traction_install。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_traction_install`
- 来源：`siemens-environment`

###### 牵引电机 (`traction_motor`)

实际独立供应完整机车异步牵引电机；接收转向架已含时不另计。公开通用轨道牵引电机以实际型式功率冷却记录限定；不采用候选注释质量份额估计。

- 选定流：牵引电机 `c1704402-e49d-43aa-baef-c84209588243`
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_traction_install。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_traction_install`
- 来源：`siemens-environment`

###### 合成酯变压器绝缘液配方 (`ester_fill`)

仅实际存在时记录本指定实体交换；保留供应商规格完整性及独立实测净领用或转移。已证实缺席为 not_applicable，缺失数量为缺口。不同实际变型独立增列。

- 选定流：合成酯变压器绝缘液配方
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_traction_install。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_traction_install`
- 来源：`siemens-environment`

###### 缓蚀乙二醇水牵引冷却液配方 (`coolant_fill`)

仅实际存在时记录本指定实体交换；保留供应商规格完整性及独立实测净领用或转移。已证实缺席为 not_applicable，缺失数量为缺口。不同实际变型独立增列。

- 选定流：缓蚀乙二醇水牵引冷却液配方
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_traction_install。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_traction_install`
- 来源：`siemens-environment`

###### 工厂进线交流电力 (`traction_install_electricity`)

实测可归属电力 kWh，在能量单位组按 1 kWh = 3.6 MJ 换算；试验购入送出及厂内发电分别计量。

- 选定流：工厂进线交流电力
- 流属性/单位：Net calorific value / MJ
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_traction_install。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_traction_install`
- 来源：`siemens-environment`

### 过程：制动、司机室与辅助系统集成 (`outfitting`)

安装实际气动制动、压缩机车钩、司机室玻璃、布线控制电子及辅助系统。辅助电池仅控制启动支持，排除牵引电池和离线柴油动力。镍镉与铅酸为分开的条件化学行。实际遗漏司机室附件、隔热、紧固件软管控制柜各自增列，含供应商完整性。

#### 输入

##### 产品流

###### 绝缘铜机车电缆线束 (`copper_cable`)

仅实际存在时记录本指定实体交换；保留供应商规格完整性及独立实测净领用或转移。已证实缺席为 not_applicable，缺失数量为缺口。不同实际变型独立增列。

- 选定流：绝缘铜机车电缆线束
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_outfitting。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_outfitting`
- 来源：`siemens-electric`

###### 加液铅酸机车辅助控制电池 (`aux_lead_battery`)

仅实际存在时记录本指定实体交换；保留供应商规格完整性及独立实测净领用或转移。已证实缺席为 not_applicable，缺失数量为缺口。不同实际变型独立增列。

- 选定流：加液铅酸机车辅助控制电池
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_outfitting。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_outfitting`
- 来源：`siemens-electric`

###### 加液镍镉机车辅助控制电池 (`aux_nicd_battery`)

仅实际存在时记录本指定实体交换；保留供应商规格完整性及独立实测净领用或转移。已证实缺席为 not_applicable，缺失数量为缺口。不同实际变型独立增列。

- 选定流：加液镍镉机车辅助控制电池
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_outfitting。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_outfitting`
- 来源：`siemens-electric`

###### 完整电力机车制动空气压缩机组 (`air_compressor`)

仅实际存在时记录本指定实体交换；保留供应商规格完整性及独立实测净领用或转移。已证实缺席为 not_applicable，缺失数量为缺口。不同实际变型独立增列。

- 选定流：完整电力机车制动空气压缩机组
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_outfitting。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_outfitting`
- 来源：`siemens-electric`

###### 完整气动机车制动控制阀块 (`brake_valve`)

仅实际存在时记录本指定实体交换；保留供应商规格完整性及独立实测净领用或转移。已证实缺席为 not_applicable，缺失数量为缺口。不同实际变型独立增列。

- 选定流：完整气动机车制动控制阀块
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_outfitting。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_outfitting`
- 来源：`siemens-electric`

###### 夹层安全玻璃机车司机室前风窗 (`cab_glass`)

仅实际存在时记录本指定实体交换；保留供应商规格完整性及独立实测净领用或转移。已证实缺席为 not_applicable，缺失数量为缺口。不同实际变型独立增列。

- 选定流：夹层安全玻璃机车司机室前风窗
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_outfitting。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_outfitting`
- 来源：`siemens-electric`

###### 成品钢制机车自动车钩总成 (`coupler`)

仅实际存在时记录本指定实体交换；保留供应商规格完整性及独立实测净领用或转移。已证实缺席为 not_applicable，缺失数量为缺口。不同实际变型独立增列。

- 选定流：成品钢制机车自动车钩总成
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_outfitting。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_outfitting`
- 来源：`siemens-electric`

###### 工厂进线交流电力 (`outfitting_electricity`)

实测可归属电力 kWh，在能量单位组按 1 kWh = 3.6 MJ 换算；试验购入送出及厂内发电分别计量。

- 选定流：工厂进线交流电力
- 流属性/单位：Net calorific value / MJ
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_outfitting。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_outfitting`
- 来源：`siemens-electric`

### 过程：电气、机械与完整配置验收 (`acceptance`)

追溯实际绝缘、功能、制动试验及可归属制造验收运行返工。仅门点前纳入试验牵引用电；排除运营牵引及寿命再生能量。实测试验购入送出电量分开；不假定目录再生节约率或本电力机车必然尾气。条件工厂燃烧器支持设独立燃料及有证据物种行。

#### 输入

##### 产品流

###### 干燥分级石英机车黏着砂 (`adhesion_sand`)

仅实际存在时记录本指定实体交换；保留供应商规格完整性及独立实测净领用或转移。已证实缺席为 not_applicable，缺失数量为缺口。不同实际变型独立增列。

- 选定流：干燥分级石英机车黏着砂
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_acceptance。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_acceptance`
- 来源：`siemens-electric`

###### 供工厂燃烧器富甲烷化石管输天然气 (`burner_gas`)

仅实际存在时记录本指定实体交换；保留供应商规格完整性及独立实测净领用或转移。已证实缺席为 not_applicable，缺失数量为缺口。不同实际变型独立增列。

- 选定流：供工厂燃烧器富甲烷化石管输天然气
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_acceptance。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_acceptance`
- 来源：`siemens-electric`

###### 工厂进线交流电力 (`acceptance_electricity`)

实测可归属电力 kWh，在能量单位组按 1 kWh = 3.6 MJ 换算；试验购入送出及厂内发电分别计量。

- 选定流：工厂进线交流电力
- 流属性/单位：Net calorific value / MJ
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_acceptance。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_acceptance`
- 来源：`siemens-electric`

#### 输出

##### 产品流

###### 外接电源作为动力的铁路机车 (`finished_machine`)

验收完整接触网交流供电电力机车，具有实际配置及正实测净 M。公开广义机车身份以全部必需限定信息约束；不推断运输服务或机车质量。

- 选定流：外接电源作为动力的铁路机车 `1532ccb7-1703-4ca3-bd21-bfe65dac7ded`
- 流属性/单位：Mass / kg
- 数量规则：1 千克
- 数值来源模式：`fixed_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`process_output`
- 证据类型：`method_formula`
- 采集协议：`cp_mass`
- 来源：`siemens-electric`

#### 输出

##### 基本流

###### 二氧化碳（化石源） (`burner_co2`)

仅可归属条件工厂支持燃烧有独立证据的化石 CO2向空气未指定即时排放。记录实际物种方法出口；不作机车尾气或总 NOx 替代。

- 选定流：二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_acceptance。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_acceptance`
- 来源：`siemens-electric`

###### 一氧化氮 (`burner_no`)

仅可归属条件工厂支持燃烧有独立证据的NO向空气未指定即时排放。记录实际物种方法出口；不作机车尾气或总 NOx 替代。

- 选定流：一氧化氮 `08a91e70-3ddc-11dd-96ee-0050c2490048`
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_acceptance。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_acceptance`
- 来源：`siemens-electric`

###### 二氧化氮 (`burner_no2`)

仅可归属条件工厂支持燃烧有独立证据的NO2向空气未指定即时排放。记录实际物种方法出口；不作机车尾气或总 NOx 替代。

- 选定流：二氧化氮 `08a91e70-3ddc-11dd-96e5-0050c2490048`
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_acceptance。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_acceptance`
- 来源：`siemens-electric`

### 过程：交付保护与拆卸整体附件 (`packing`)

可拆保护独立计量并从 M 排除。拆卸整体附件须独立物理计量核对同一验收机车配置。排除备件运输夹具及门点后交付。

#### 输入

##### 产品流

###### 低密度聚乙烯薄膜（PE-LD） (`pe_protection`)

仅实际未复合非黏性低密度聚乙烯保护薄膜；独立称重从 M 排除。其他包装材料须独立精确行。

- 选定流：低密度聚乙烯薄膜（PE-LD） `2cecd3a7-d90e-44b4-aec5-1d9dfb907477`
- 流属性/单位：Mass / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_packing。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_packing`
- 来源：`siemens-electric`

###### 工厂进线交流电力 (`packing_electricity`)

实测可归属电力 kWh，在能量单位组按 1 kWh = 3.6 MJ 换算；试验购入送出及厂内发电分别计量。

- 选定流：工厂进线交流电力
- 流属性/单位：Net calorific value / MJ
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_packing。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_packing`
- 来源：`siemens-electric`

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_orders` | 共用制造 | 分开序列号配置工单，优先直接归属实测领退仪表工时试验返工。不可分离共用公用工程采用有证据实测因果操作时间负荷或涂装面积层要求：份额 = 工单驱动量 / 全部覆盖工单驱动量之和。保留时期分母因果。等台数、额定牵引功率轴重不是自动分配规则。 |  |
| `allocation_recovery` | 复用与输出交换 | 内部坯料水复用为转移，不作新投入或自动抵扣。输出废物保留接收者实测转移，不推定避免生产。实际试验购入送出电量分计；仅明确匹配仪表系统边界核算规则、含供应商时期时扣除送出，不采用寿命再生因子。拒收返工在制核对至验收产出。经审查剩余分配前分离可售共产品。 |  |


## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_mass` | acceptance | 验收完整机车净质量 | traceable_weighing_record | 型号；配置；序列号；验收净质量 M；称重原件日期方法；校准仪表；适用时轮轴实测；实测加液固定压铁；实测增加扣除；排除人员黏着砂试验夹具包装；拆卸整体件；签署核对；不确定性 | 使用可追溯的称重记录核对同一配置的验收设备。 | kg | 逐台验收 | 实际制造验收时期 | 声明制造验收门点 | 每台验收净质量 | 原始校准实测与签署配置质量平衡 |
| `cp_body_fabrication` | body_fabrication | 车体坯料准备与连接 | foreground_record | 序列号工单配置；验收台数；精确交换配方属性单位；领退库存变化；实测部件质量；供应商包含预加；电力 kWh 进线试验购入送出；物种出口；废物接收者；共用驱动量分母；方法校准 | 采集序列号/配置关联图纸、供应商完整性、称量领退、校准仪表、工单及试验验收原件。 | 逐行实际单位 | 逐工单批次 | 声明制造时期 | 声明工厂与明示外包 | 可归属交换数量 / 验收设备数量 | 原件称量仪表供应收货试验移交 |
| `cp_surface_finish` | surface_finish | 表面准备与保护涂装 | foreground_record | 序列号工单配置；验收台数；精确交换配方属性单位；领退库存变化；实测部件质量；供应商包含预加；电力 kWh 进线试验购入送出；物种出口；废物接收者；共用驱动量分母；方法校准 | 采集序列号/配置关联图纸、供应商完整性、称量领退、校准仪表、工单及试验验收原件。 | 逐行实际单位 | 逐工单批次 | 声明制造时期 | 声明工厂与明示外包 | 可归属交换数量 / 验收设备数量 | 原件称量仪表供应收货试验移交 |
| `cp_running_gear` | running_gear | 转向架与走行部集成 | foreground_record | 序列号工单配置；验收台数；精确交换配方属性单位；领退库存变化；实测部件质量；供应商包含预加；电力 kWh 进线试验购入送出；物种出口；废物接收者；共用驱动量分母；方法校准 | 采集序列号/配置关联图纸、供应商完整性、称量领退、校准仪表、工单及试验验收原件。 | 逐行实际单位 | 逐工单批次 | 声明制造时期 | 声明工厂与明示外包 | 可归属交换数量 / 验收设备数量 | 原件称量仪表供应收货试验移交 |
| `cp_traction_install` | traction_install | 接触网交流牵引系统安装 | foreground_record | 序列号工单配置；验收台数；精确交换配方属性单位；领退库存变化；实测部件质量；供应商包含预加；电力 kWh 进线试验购入送出；物种出口；废物接收者；共用驱动量分母；方法校准 | 采集序列号/配置关联图纸、供应商完整性、称量领退、校准仪表、工单及试验验收原件。 | 逐行实际单位 | 逐工单批次 | 声明制造时期 | 声明工厂与明示外包 | 可归属交换数量 / 验收设备数量 | 原件称量仪表供应收货试验移交 |
| `cp_outfitting` | outfitting | 制动、司机室与辅助系统集成 | foreground_record | 序列号工单配置；验收台数；精确交换配方属性单位；领退库存变化；实测部件质量；供应商包含预加；电力 kWh 进线试验购入送出；物种出口；废物接收者；共用驱动量分母；方法校准 | 采集序列号/配置关联图纸、供应商完整性、称量领退、校准仪表、工单及试验验收原件。 | 逐行实际单位 | 逐工单批次 | 声明制造时期 | 声明工厂与明示外包 | 可归属交换数量 / 验收设备数量 | 原件称量仪表供应收货试验移交 |
| `cp_acceptance` | acceptance | 电气、机械与完整配置验收 | foreground_record | 序列号工单配置；验收台数；精确交换配方属性单位；领退库存变化；实测部件质量；供应商包含预加；电力 kWh 进线试验购入送出；物种出口；废物接收者；共用驱动量分母；方法校准 | 采集序列号/配置关联图纸、供应商完整性、称量领退、校准仪表、工单及试验验收原件。 | 逐行实际单位 | 逐工单批次 | 声明制造时期 | 声明工厂与明示外包 | 可归属交换数量 / 验收设备数量 | 原件称量仪表供应收货试验移交 |
| `cp_packing` | packing | 交付保护与拆卸整体附件 | foreground_record | 序列号工单配置；验收台数；精确交换配方属性单位；领退库存变化；实测部件质量；供应商包含预加；电力 kWh 进线试验购入送出；物种出口；废物接收者；共用驱动量分母；方法校准 | 采集序列号/配置关联图纸、供应商完整性、称量领退、校准仪表、工单及试验验收原件。 | 逐行实际单位 | 逐工单批次 | 声明制造时期 | 声明工厂与明示外包 | 可归属交换数量 / 验收设备数量 | 原件称量仪表供应收货试验移交 |

### 计算规则

| rule_id | 适用对象 | 公式或规则 | 输入 | 输出 | source_ids |
| --- | --- | --- | --- | --- | --- |
| `normalize_mass` | 所有清单行 | q_ref = q_item / M; q_item = 每台验收成品设备的交换数量; q_ref = 每 1 kg 参考流的交换数量。 | q_item; M; cp_mass | q_ref |  |

逐兼容配置以净领用扣记录退回库存变化及有依据共用分配得到可归属总量，除验收台数得 q_item，再除同一实测净 M 得 q_ref。质量交换保留 kg/kg，电力 MJ/kg。兼容序列号机车质量变化时可归属总量除实测验收净质量总和并保留全部序列记录。分开不同供电电压、牵引冷却轴式车体涂层供应完整性。未知数量为缺口，不作零；不推断牵引功率、额定轴重或目录质量换算。

### 数据质量要求

| requirement_id | 适用对象 | 要求 | 证据 |
| --- | --- | --- | --- |
| `quality_mass` | cp_mass | 依据实际当前可追溯物理称重及逐项净配置核对实施 mass_record_provenance。每项轮轴属同一车辆状态；核对实测拆卸件加液并保证质量不遗漏重复。缺原始方法校准状态修正或正 M 阻止完整量值数据集，须审查或重测。 | 原始称重与配置修正台账 |
| `quality_bom` | 完整配置 | 全部实际车体转向架轮对牵引制动辅助司机室控制工作液质量核对至验收净 M。记录外购总成包含；不重复转向架电机或变压器冷却预加。完成前增列实际遗漏件交换。 | 完整图纸物料表收货称重安全数据表 |
| `quality_balance` | 数量与物种 | 保留校准能量仪表领退复用、实测液体组成密度、废物联单及实际排放方法物种介质。经验 QA 限值来自适用实测记录核验可比来源。不提供普遍制造强度、车辆质量或燃烧器排放因子。 | 实际仪表库存质量平衡与不确定性 |
| `quality_coverage` | 数据集 | 披露时期场址配置条件缺席外包身份量值不确定性范围缺口及供应商上游缺失。历史产品生产案例不建立目前认证或本机车 M。本 PCR 规定后续记录要求；未认证真实机车称重或工厂清单。 | 覆盖与证据限制登记 |


## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validate_reference` | 参考产品 | 要求覆盖完整接触网交流配置及 cp_mass、mass_record_provenance 的正实际净 M。拒绝额定轴重目录质量列车重量运营服务等效及缺配置修正。缺实际记录证据须完整量值数据集前科学数据审查。 |  |
| `validate_atomic` | 全部交换 | 核验原子物理化学身份公开参考属性单位组、路线组成状态供应边界。受电弓不是电池箔，牵引变压器不是额定配电变压器，转向架内电机不作第二投入，酯不是矿物油，工艺水不是环境取水废液。无依据 UUID 留空。 |  |
| `validate_measurement` | 全部数量 | 核验数量原单位采集及 q_item/M 换算、同序列号配置场址时期验收台数校准及有依据分配分母。能量体积件数不得重命名属性变成质量。未知不是零。 |  |
| `validate_species` | 条件基础排放 | 要求实际可归属工厂支持物种介质。选定化石 CO2、NO、NO2 为空气未指定即时排放；CO2 核验化石来源。不得替代总 NOx、N2O、氮亚硝酸盐、生物源 CO2、水土壤长期流。捕集滤尘为废物；本电力牵引路线不强制尾气。 |  |
| `validate_release` | 车辆验收 | 声明时追溯同配置及适用辖区实际结构电气制动试验规程结果返工放行授权。历史手册或其他厂家型号证书不认证本车。不施加普遍电压制动阈值或试验节能率。 |  |


## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 配置特定完整电力机车前景制造 |
| downstream_use | secondary_dataset；background_dataset，经合格审查及声明上游链接后 |
| allowed_use | 匹配交流牵引完整配置实测净范围供应边界门点场址时期的制造供应链模型 |
| excluded_use | 列车服务寿命足迹、等质量牵引比较、其他动力路线或无依据完整摇篮到大门 |
| required_metadata | 制造者/型号/序列号及图纸版本；接触网交流电压频率及受电弓配置；变压器变流器电机型式额定值冷却及供应完整性；车体钢牌号路线；转向架轮对齿轮制动配置；司机室控制辅助电池化学；实际初加工作液及固定压铁；由可追溯实际称重记录取得的完整验收净 M（kg）；排除包装人员松散耗材黏着砂临时试验运输夹具；物理实测拆卸整体交付附件；验收试验门点场址时期；供应商上游及共用资源范围 |
| required_quality_disclosure | 身份量值质量原始依据缺口、不确定性缺席证据完整物料表分配验收未链接上游 |
| update_trigger | 供电牵引冷却辅助化学、车体转向架涂层供应完整性、实测 M 修正试验边界制造场址时期变化 |


## 11. 数据源

| 来源编号 | 类型 | 参考 | 用途 |
| --- | --- | --- | --- |
| `siemens-electric` | literature | [Siemens Vectron X AC/DC/MS](https://www.mobility.siemens.com/global/en/portfolio/rail/rolling-stock/locomotives/vectron/ac-dc-ms.html) | 发布者 AC/DC/MS 变型、交流直流主部件分开及控制电缆可达各标题段落。仅产品配置背景；实际场址记录定义较窄交流路线。不采用目录质量额定值环境因子。 |
| `siemens-environment` | literature | [Siemens: Locomotives, Sustainability on track (2013)](https://static.dc.siemens.com/mobility/webfeature/green-mobility/files/brochure/brochure-locomotives-sustainability-on-track.pdf) | PDF/印刷第 4 页条件变流器水冷及变压器酯，第 8 页声明特征须逐合同确认。仅历史设计案例，不作目前普遍要求。不采用 85 t 案例、可回收率寿命再生节约百分比。 |
| `akiem-vectron` | literature | [Akiem: Vectron BR 193 technical sheet](https://www.akiem.com/wp-content/uploads/2020/09/Fiche-Technique-Vectron-EN.pdf) | PDF 第 1 页技术表识别异步牵引电机并区分纯交流 B18 列与多系统列。仅运营者出租商产品案例；不将运转整备 90 t、电机数电压额定值认证移用于通用机车或净 M。 |
| `alstom-production` | literature | [Alstom: First Prima M4 for ONCF, 30 December 2019](https://www.alstom.com/sites/alstom.com/files/2019/12/30/20191230_PR_Locos_Morocco_EN_0.pdf) | PDF 第 1 页制造装配及转向架电机牵引部件电子各场址职责。历史直流型号不在覆盖交流路线：仅用于区分接收模块装配及下游测试维护。不采用直流电压额定功率或推定配方。 |
