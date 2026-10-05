---
pcr_id: pcr.metal-products-machinery-and-equipment.transport-equipment.steel-high-sided-open-freight-wagon
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 钢制高边铁路敞车制造

## 1. 范围与适用性

本候选 PCR 管理新制完整非自行式钢制高边铁路敞车，具有整体平直地板固定端墙高侧墙侧门及声明无动力转向架制动车钩。Eanoss 制造商原件建立这一实质车体边界。本稿较 CPC49533 窄，不覆盖整个分类叶。排除棚车平车料斗车及卸料闸门设计罐车冷藏车其他车体结构机车客车裸车体转向架改造维修货运服务。

前景从实际接收指定坯料供应商已完模块开始，至声明工厂门点配置空货车验收。制造验收仅纳入实际可归属试验；运行装卸牵引货物产出轨道基础设施全寿命服务在外。不规定经验质量配方工序强度寿命。科学审查待完成。来源：`tatra-model`、`tatra-factory`、`greenbrier-2022`。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.transport-equipment.steel-high-sided-open-freight-wagon |
| classification_refs | CPC3.0 49533；较窄背景，不声明已接受映射 |
| covered_products | 新制完整钢制高边敞车、整体平直地板固定端墙侧门无动力转向架 |
| excluded_products | 其他货运车体结构动力客运车辆独立构件改造服务 |
| representative_product | 一台序列关联空车验收高边敞车；制造商 Eanoss 仅为结构示例 |
| production_route | 实际切割成形焊接底架车体；供应走行部集成；条件涂装；侧门附件；空货车验收 |
| market_state | 完整配置空货车验收保留润滑剂，无货物试验载荷散装备件保护物 |


## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 制造符合声明规格的完整高边敞车 |
| How much | 1 kg 验收净空货车产出；每台制造记录除实际 M |
| How well | 满足实际图纸车体侧门走行部制动车钩放行验收准则。相等质量不等于相同载重强度装载容积运输服务。不强加制造商型号容量合规声明。 |
| How long or cycle | 一次制造验收周期，不规定运行寿命 |
| reference_flow_link | finished_machine |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 验收完整无动力钢制高边铁路敞车 |
| 参考流属性 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量单位 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 制造者型号序列图纸物料版次；高边敞车体整体平直地板固定端墙侧门锁闭通达附件；钢种供应商完成度；轨距转向架轴列轮对悬挂轴承制动车钩；涂层化学实际炉热喷丸路线；完整空车净 M kg、cp_mass、校准轨道轮重实测及签署配置修正；保留轴承润滑剂；排除货物试验载荷人员夹具包装散装备件；实际场址时期门点供应商包含条件缺席外包 |

M 包含实际整体底架地板高侧墙固定端墙侧门锁闭转向架轮对悬挂制动车钩通达附件涂层保留轴承润滑剂。货物载重临时试重人员夹具可拆包装散装备件排除。制造商分别报自重满载重量容量；目录自重仅为配置示例，不是实测验收 M。来源：`tatra-model`。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | M = 同一配置的一台完整设备的验收净质量，单位 kg；使用 cp_mass 采集。 |
| `mass_record_origin` | cp_mass | Mass | kg | 须序列关联实际空货车校准轨道称重或轮重实测原件校准仪表全部轮支承皮重静态步骤。顺序轮重须核对支承覆盖重复性。按实测修正签署物料重量平衡核对实际拆卸整体件临时载荷。目录自重载重满载重量额定轴荷或名义部件质量之和不建立 M。 |
| `energy_conversion` | electricity | Net calorific value | MJ | 计量可归属进线电力，核验 kWh 单位换算为3.6 MJ/kWh。额定 kW 不是能量，须场址电压组合匹配。 |
| `gas_air_volume` | gas; air | Volume | m3 | 保留实际计量参考温压压缩性体积。燃气供应压缩空气试验介质路线分开；任何质量能量换算须实测气组分物理状态，不用通用密度名义容积。 |
| `coating_species` | finish | Mass | kg | 分开实际涂料基料固化剂溶剂钢丸干涂层保留废物。排放混合二甲苯须实际 CAS 分物质证据即时空气介质，总 VOC 或 HAP 不是该物质。化石 CO2 须实际炉热化石碳基准，不用上游清单。 |


## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 接收钢板型材供应商完工车体走行部附件并声明包含 |
| starting_condition_role | 实际接收至空货车制造 |
| product_classification_scope | 仅钢制高边铁路敞车 |
| recursive_input_rule | 购买车体转向架替代已含制造，不将完整货车递归作自身投入 |
| upstream_dataset_requirement | 关联实际供应者坯料钢种路线模块范围；披露上游外包缺口 |
| disclosure | 制造者型号序列图纸物料版次；高边敞车体整体平直地板固定端墙侧门锁闭通达附件；钢种供应商完成度；轨距转向架轴列轮对悬挂轴承制动车钩；涂层化学实际炉热喷丸路线；完整空车净 M kg、cp_mass、校准轨道轮重实测及签署配置修正；保留轴承润滑剂；排除货物试验载荷人员夹具包装散装备件；实际场址时期门点供应商包含条件缺席外包 |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `boundary_stages` | all processes | 实际制造者制造装配可归属验收资源一次计入。完整购入转向架车体替代已含坯料构件工序；定量完成前报告条件缺席遗漏实际物料。 | `tatra-factory`; `tatra-model` |
| `boundary_use` | acceptance/downstream | 仅建造有记录验收在内；营运牵引装卸轨道工程运行维修改造报废在外。若用外部机车试验服务，独立实测服务关联，不作货车发动机燃油。 | `tatra-model` |
| `boundary_upstream` | dataset | 本前景不自动为完整摇篮到工厂门。声明实际外包物理运输服务关联并要求适用上游数据集，记录缺口不以泛称交换或零替代。 |  |


## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `body` | 底架与干货车体制造 | conditional | 声明制造边界内实际进行制造。 | foreground | 每台验收完整设备按 M 归一化 |
| `running_gear` | 走行部制动与车钩集成 | required | 每台验收无动力高边敞车，采用声明转向架和制动配置。 | foreground | 每台验收完整设备按 M 归一化 |
| `finish` | 条件性表面处理与涂装 | conditional | 报告工厂实际喷丸涂装加热。 | foreground | 每台验收完整设备按 M 归一化 |
| `outfit` | 载货附件与最终装配 | required | 每台声明完整干货配置。 | foreground | 每台验收完整设备按 M 归一化 |
| `acceptance` | 空货车检验与验收 | required | 每台完工验收完整空货车。 | foreground | 每台验收完整设备按 M 归一化 |
| `packing` | 条件性交付保护 | conditional | 实际可拆保护物随声明门点交付。 | foreground | 每台验收完整设备按 M 归一化 |

实际车体制造进入走行部集成条件表面处理涂装侧门附件，再空车验收条件保护。声明实际工位顺序供应商完成度。必需过程不要求每个示例化学构件；每行仅实际精确独供或物质适用，逐项增列遗漏实际构件热化学废物实测排放。

### 过程：底架与干货车体制造 (`body`)

切割成形机加工指定钢坯料，焊接底架及声明整体平直地板固定端墙高侧墙侧门。购买完整底架车体替代已包含制造。记录实际钢种焊材保护气配方焊接质量，不假设厂内铸锻热处理。

#### 输入

##### 产品流

###### 热轧碳钢货车板材 (`steel_plate`)

仅为匹配声明组成钢种完整供应范围的实际独立交换。计量净领退或接收转移记录。供应商已含构件一次计入，实际缺席有记录，未知不作零。

- 选定流：热轧碳钢货车板材
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_body。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_body`
- 来源：`tatra-factory`; `greenbrier-2022`

###### 碳钢轧制底架型材 (`steel_section`)

仅为匹配声明组成钢种完整供应范围的实际独立交换。计量净领退或接收转移记录。供应商已含构件一次计入，实际缺席有记录，未知不作零。

- 选定流：碳钢轧制底架型材
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_body。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_body`
- 来源：`tatra-factory`; `greenbrier-2022`

###### 完整焊接钢制干货车体底架总成 (`body_module`)

仅为匹配声明组成钢种完整供应范围的实际独立交换。计量净领退或接收转移记录。供应商已含构件一次计入，实际缺席有记录，未知不作零。

- 选定流：完整焊接钢制干货车体底架总成
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_body。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_body`
- 来源：`tatra-factory`; `greenbrier-2022`

###### 实芯碳钢电弧焊丝 (`weld_wire`)

仅为匹配声明组成钢种完整供应范围的实际独立交换。计量净领退或接收转移记录。供应商已含构件一次计入，实际缺席有记录，未知不作零。

- 选定流：实芯碳钢电弧焊丝
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_body。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_body`
- 来源：`tatra-factory`; `greenbrier-2022`

###### 气态二氧化碳钢焊保护气供应 (`shield_co2`)

仅为匹配声明组成钢种完整供应范围的实际独立交换。计量净领退或接收转移记录。供应商已含构件一次计入，实际缺席有记录，未知不作零。

- 选定流：气态二氧化碳钢焊保护气供应
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_body。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_body`
- 来源：`tatra-factory`; `greenbrier-2022`

###### 交流电 (`electricity_body`)

仅匹配本身份的实际计量中国用户电网平均1–35kV交流电。不同场址地域电压供电组合自发电须另用兼容流；欧洲制造商示例不建立报告工厂地域。逐过程边界计量一次。

- 选定流：交流电 `3d76981f-964a-4865-b588-0e067a2a1163`
- 流属性/单位：净热值 / MJ
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_body。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_body`
- 来源：`tatra-factory`; `greenbrier-2022`

#### 输出

##### 废物流

###### 工业后钢废料 (`steel_offcut`)

仅为匹配声明组成钢种完整供应范围的实际独立交换。计量净领退或接收转移记录。供应商已含构件一次计入，实际缺席有记录，未知不作零。

- 选定流：工业后钢废料 `c143745d-be4f-4d8f-b403-2dcbfe685349`
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_body。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_body`
- 来源：`tatra-factory`; `greenbrier-2022`

###### 转移处理的碳钢机加工切屑 (`steel_chips`)

仅为匹配声明组成钢种完整供应范围的实际独立交换。计量净领退或接收转移记录。供应商已含构件一次计入，实际缺席有记录，未知不作零。

- 选定流：转移处理的碳钢机加工切屑
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_body。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_body`
- 来源：`tatra-factory`; `greenbrier-2022`

### 过程：走行部制动与车钩集成 (`running_gear`)

安装实际轮对轴箱悬挂制动车钩，完整转向架供应一次包含其构件。独立完整转向架供应替代已含轮对轴箱弹簧制动制造，几何轨距轴列制动缓冲车钩按配置。

#### 输入

##### 产品流

###### 转向架总成 (`bogie`)

仅为厂内交付的完整外购无动力货车转向架，记录实际图纸轨距制动及轮对轴箱弹簧包含，已含构件不另作购买交换。

- 选定流：转向架总成 `ce7fe0f9-b245-44f1-a779-3a364f2234a9`
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_running_gear。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_running_gear`
- 来源：`tatra-model`

###### 成品钢制货车轮对 (`wheelset`)

仅为匹配声明组成钢种完整供应范围的实际独立交换。计量净领退或接收转移记录。供应商已含构件一次计入，实际缺席有记录，未知不作零。

- 选定流：成品钢制货车轮对
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_running_gear。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_running_gear`
- 来源：`tatra-model`

###### 完整货车滚动轴承轴箱 (`axlebox`)

仅为匹配声明组成钢种完整供应范围的实际独立交换。计量净领退或接收转移记录。供应商已含构件一次计入，实际缺席有记录，未知不作零。

- 选定流：完整货车滚动轴承轴箱
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_running_gear。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_running_gear`
- 来源：`tatra-model`

###### 成品钢制货车悬挂弹簧 (`spring`)

仅为匹配声明组成钢种完整供应范围的实际独立交换。计量净领退或接收转移记录。供应商已含构件一次计入，实际缺席有记录，未知不作零。

- 选定流：成品钢制货车悬挂弹簧
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_running_gear。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_running_gear`
- 来源：`tatra-model`

###### 完整气动货车制动总成 (`brake`)

仅为匹配声明组成钢种完整供应范围的实际独立交换。计量净领退或接收转移记录。供应商已含构件一次计入，实际缺席有记录，未知不作零。

- 选定流：完整气动货车制动总成
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_running_gear。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_running_gear`
- 来源：`tatra-model`

###### 成品钢制货车车钩总成 (`coupler`)

仅为匹配声明组成钢种完整供应范围的实际独立交换。计量净领退或接收转移记录。供应商已含构件一次计入，实际缺席有记录，未知不作零。

- 选定流：成品钢制货车车钩总成
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_running_gear。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_running_gear`
- 来源：`tatra-model`

###### 石油基锂皂滚动轴承润滑脂 (`grease`)

仅为匹配声明组成钢种完整供应范围的实际独立交换。计量净领退或接收转移记录。供应商已含构件一次计入，实际缺席有记录，未知不作零。

- 选定流：石油基锂皂滚动轴承润滑脂
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_running_gear。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_running_gear`
- 来源：`tatra-model`

###### 交流电 (`electricity_running_gear`)

仅匹配本身份的实际计量中国用户电网平均1–35kV交流电。不同场址地域电压供电组合自发电须另用兼容流；欧洲制造商示例不建立报告工厂地域。逐过程边界计量一次。

- 选定流：交流电 `3d76981f-964a-4865-b588-0e067a2a1163`
- 流属性/单位：净热值 / MJ
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_running_gear。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_running_gear`
- 来源：`tatra-model`

### 过程：条件性表面处理与涂装 (`finish`)

记录实际喷丸清洗涂层化学施涂固化路线废气控制。环氧胺及混合二甲苯仅匹配实际配方时适用，不是必需货车涂层。燃气加热物质排放须实际计量路线物质证据。

#### 输入

##### 产品流

###### 喷丸钢丸磨料 (`grit`)

仅为匹配声明组成钢种完整供应范围的实际独立交换。计量净领退或接收转移记录。供应商已含构件一次计入，实际缺席有记录，未知不作零。

- 选定流：喷丸钢丸磨料
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_finish。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_finish`
- 来源：`greenbrier-2022`

###### 工艺用水 (`water`)

仅为匹配声明组成钢种完整供应范围的实际独立交换。计量净领退或接收转移记录。供应商已含构件一次计入，实际缺席有记录，未知不作零。

- 选定流：工艺用水 `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_finish。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_finish`
- 来源：`greenbrier-2022`

###### 环氧树脂配制货车涂料基料 (`epoxy`)

仅为匹配声明组成钢种完整供应范围的实际独立交换。计量净领退或接收转移记录。供应商已含构件一次计入，实际缺席有记录，未知不作零。

- 选定流：环氧树脂配制货车涂料基料
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_finish。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_finish`
- 来源：`greenbrier-2022`

###### 聚胺配制环氧涂料固化剂 (`hardener`)

仅为匹配声明组成钢种完整供应范围的实际独立交换。计量净领退或接收转移记录。供应商已含构件一次计入，实际缺席有记录，未知不作零。

- 选定流：聚胺配制环氧涂料固化剂
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_finish。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_finish`
- 来源：`greenbrier-2022`

###### 混合异构体二甲苯涂料溶剂 (`xylene`)

仅为匹配声明组成钢种完整供应范围的实际独立交换。计量净领退或接收转移记录。供应商已含构件一次计入，实际缺席有记录，未知不作零。

- 选定流：混合异构体二甲苯涂料溶剂
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_finish。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_finish`
- 来源：`greenbrier-2022`

###### 气态天然气 (`gas`)

仅实际匹配公开身份的化石气态管输消费端供应，记录参考温压压缩性实际气组分仪表修正。液化天然气、液化石油气、井口气、购买热量为不同交换。

- 选定流：气态天然气 `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位：体积 / m3
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_finish。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_finish`
- 来源：`greenbrier-2022`

###### 交流电 (`electricity_finish`)

仅匹配本身份的实际计量中国用户电网平均1–35kV交流电。不同场址地域电压供电组合自发电须另用兼容流；欧洲制造商示例不建立报告工厂地域。逐过程边界计量一次。

- 选定流：交流电 `3d76981f-964a-4865-b588-0e067a2a1163`
- 流属性/单位：净热值 / MJ
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_finish。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_finish`
- 来源：`greenbrier-2022`

#### 输出

##### 废物流

###### 转移处理的废钢丸磨料 (`waste_grit`)

仅为匹配声明组成钢种完整供应范围的实际独立交换。计量净领退或接收转移记录。供应商已含构件一次计入，实际缺席有记录，未知不作零。

- 选定流：转移处理的废钢丸磨料
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_finish。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_finish`
- 来源：`greenbrier-2022`

###### 转移处理的未固化环氧树脂涂料残余物 (`waste_paint`)

仅为匹配声明组成钢种完整供应范围的实际独立交换。计量净领退或接收转移记录。供应商已含构件一次计入，实际缺席有记录，未知不作零。

- 选定流：转移处理的未固化环氧树脂涂料残余物
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_finish。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_finish`
- 来源：`greenbrier-2022`

###### 转移处理的水性货车表面清洗废水 (`effluent`)

仅为匹配声明组成钢种完整供应范围的实际独立交换。计量净领退或接收转移记录。供应商已含构件一次计入，实际缺席有记录，未知不作零。

- 选定流：转移处理的水性货车表面清洗废水
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_finish。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_finish`
- 来源：`greenbrier-2022`

#### 输出

##### 基本流

###### 二甲苯（所有异构体） (`xylene_air`)

仅本厂实际分物质 CAS1330-20-7 混合二甲苯释放，即时空气未指定。不将总 VOC、特定异构体或工人暴露浓度配到本行。按校准排放速率实际运行时期积分并保留检出限。

- 选定流：二甲苯（所有异构体） `fe0acd60-3ddc-11dd-ad91-0050c2490048`
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_finish。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_finish`
- 来源：`greenbrier-2022`

###### 二氧化碳（化石源） (`co2_air`)

仅本厂实际化石燃气加热器直接燃烧，即时未指定空气。采用校准 CO2 实测或实测化石碳平衡及实际气组成氧化状态，保留原方法。不规定排放因子燃烧负荷，排除上游排放生物碳。

- 选定流：二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_finish。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_finish`
- 来源：`greenbrier-2022`

### 过程：载货附件与最终装配 (`outfit`)

安装声明侧门锁闭机构踏步通达附件；车顶和料斗卸料闸门不属于本边界。购买车体整体件一次包含。匹配验收图纸客户放行配置。

#### 输入

##### 产品流

###### 成品钢制货车侧门总成 (`door`)

仅为匹配声明组成钢种完整供应范围的实际独立交换。计量净领退或接收转移记录。供应商已含构件一次计入，实际缺席有记录，未知不作零。

- 选定流：成品钢制货车侧门总成
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_outfit。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_outfit`
- 来源：`tatra-model`

###### 交流电 (`electricity_outfit`)

仅匹配本身份的实际计量中国用户电网平均1–35kV交流电。不同场址地域电压供电组合自发电须另用兼容流；欧洲制造商示例不建立报告工厂地域。逐过程边界计量一次。

- 选定流：交流电 `3d76981f-964a-4865-b588-0e067a2a1163`
- 流属性/单位：净热值 / MJ
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_outfit。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_outfit`
- 来源：`tatra-model`

### 过程：空货车检验与验收 (`acceptance`)

检验配置实际制动车钩几何验收并称量完工空货车。试验牵引压缩空气临时载荷仅实际可归属时记录。外部机车试验能耗独立披露，不虚构货车燃油发动机尾气。

#### 输入

##### 产品流

###### 压缩的空气 (`air`)

仅独立供应的压缩空气体积，记录实际参考温压质量。若厂内制备，独立记录实际压缩机电力进气，不重复购买同一空气。

- 选定流：压缩的空气 `46e2b1e4-5a4e-4579-b6a2-65b03f9ce825`
- 流属性/单位：体积 / m3
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_acceptance。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_acceptance`
- 来源：`tatra-model`; `greenbrier-2022`

###### 交流电 (`electricity_acceptance`)

仅匹配本身份的实际计量中国用户电网平均1–35kV交流电。不同场址地域电压供电组合自发电须另用兼容流；欧洲制造商示例不建立报告工厂地域。逐过程边界计量一次。

- 选定流：交流电 `3d76981f-964a-4865-b588-0e067a2a1163`
- 流属性/单位：净热值 / MJ
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_acceptance。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_acceptance`
- 来源：`tatra-model`; `greenbrier-2022`

#### 输出

##### 产品流

###### 验收完整无动力钢制高边铁路敞车 (`finished_machine`)

仅为匹配声明组成钢种完整供应范围的实际独立交换。计量净领退或接收转移记录。供应商已含构件一次计入，实际缺席有记录，未知不作零。

- 选定流：验收完整无动力钢制高边铁路敞车
- 流属性/单位：质量 / kg
- 数量规则：1 千克
- 数值来源模式：`fixed_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`reference_flow`
- 证据类型：`method_formula`
- 采集协议：`cp_mass`
- 来源：`tatra-model`; `greenbrier-2022`

### 过程：条件性交付保护 (`packing`)

记录实际保护物，无通用包裹托架要求。可拆保护物排除净 M，整体载荷约束保留验收产品。

#### 输入

##### 产品流

###### 低密度聚乙烯薄膜（PE-LD） (`film`)

仅实际非粘性非泡孔无增强无支撑无层压的 PE-LD 薄膜。

- 选定流：低密度聚乙烯薄膜（PE-LD） `2cecd3a7-d90e-44b4-aec5-1d9dfb907477`
- 流属性/单位：质量 / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_packing。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_packing`
- 来源：

###### 交流电 (`electricity_packing`)

仅匹配本身份的实际计量中国用户电网平均1–35kV交流电。不同场址地域电压供电组合自发电须另用兼容流；欧洲制造商示例不建立报告工厂地域。逐过程边界计量一次。

- 选定流：交流电 `3d76981f-964a-4865-b588-0e067a2a1163`
- 流属性/单位：净热值 / MJ
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_packing。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_packing`
- 来源：

## 7. 分配与共产品处理

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `allocation_orders` | shared resources | 先工序细分实际工单序列计量避免分配。剩余共用资源按有因果实测机时、同涂层同操作涂装面积或实测试验用量，保留原分子分母敏感性。不对混合车体按台均分或名义自重分配。 | `ghg-allocation` |
| `allocation_scrap` | steel offcuts | 称量产生废钢退料，厂内循环转移废物一次分开，保留接收法律处理状态实际联产品身份。不自动给避免原生钢或回收抵扣。确为出售联产品须独立审查分配实际因果证据一致上游边界。 | `ghg-allocation` |


## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_mass` | acceptance | 验收完整空货车净质量 | controlled_acceptance_record | 型号；配置；序列号；验收净质量 M；实际原始校准轨道轮重记录；全部支承皮重静态步骤；重复性；保留润滑剂；拆卸整体件；实测货物试验载荷人员夹具保护排除项；签署配置修正质量平衡 | 使用受控的验收质量记录核对同一配置的验收设备。 | kg | 每台验收货车 | 实际制造验收时期 | 声明工厂验收门点 | 每台验收净质量 | 原始实际校准实测核对 |
| `cp_body` | body | 底架与干货车体制造 | foreground_record | 序列工单图纸物料；验收台数；逐交换身份组成属性单位；实际净领退库存变化；供应商已含组分；电力场址电压组合仪表；燃气空气温压压缩性；涂料安全数据表物质介质；废物接收；共用驱动分母；校准试验覆盖 | 逐序列工单称量净坯料焊材保护气领用及实际废钢，核对退料供应商总成包含。 | 逐行实际单位 | 每工单批次 | 声明制造时期 | 声明工厂披露外包 | 可归属交换数量 / 验收设备数量 | 原始供应商称重仪表安全数据表排放转移试验记录 |
| `cp_running_gear` | running_gear | 走行部制动与车钩集成 | foreground_record | 序列工单图纸物料；验收台数；逐交换身份组成属性单位；实际净领退库存变化；供应商已含组分；电力场址电压组合仪表；燃气空气温压压缩性；涂料安全数据表物质介质；废物接收；共用驱动分母；校准试验覆盖 | 保留序列模块范围实测净质量；核对转向架包含与独供轮对轴箱弹簧制动实际车钩。 | 逐行实际单位 | 每工单批次 | 声明制造时期 | 声明工厂披露外包 | 可归属交换数量 / 验收设备数量 | 原始供应商称重仪表安全数据表排放转移试验记录 |
| `cp_finish` | finish | 条件性表面处理与涂装 | foreground_record | 序列工单图纸物料；验收台数；逐交换身份组成属性单位；实际净领退库存变化；供应商已含组分；电力场址电压组合仪表；燃气空气温压压缩性；涂料安全数据表物质介质；废物接收；共用驱动分母；校准试验覆盖 | 分项采集涂料组分溶剂钢丸水及计量炉气记录，实际干燥保留转移残余物、安全数据表、空气分物质测量。 | 逐行实际单位 | 每工单批次 | 声明制造时期 | 声明工厂披露外包 | 可归属交换数量 / 验收设备数量 | 原始供应商称重仪表安全数据表排放转移试验记录 |
| `cp_outfit` | outfit | 载货附件与最终装配 | foreground_record | 序列工单图纸物料；验收台数；逐交换身份组成属性单位；实际净领退库存变化；供应商已含组分；电力场址电压组合仪表；燃气空气温压压缩性；涂料安全数据表物质介质；废物接收；共用驱动分母；校准试验覆盖 | 称量实际独供安装机构，保留物料图纸版次供应商包含净退回。 | 逐行实际单位 | 每工单批次 | 声明制造时期 | 声明工厂披露外包 | 可归属交换数量 / 验收设备数量 | 原始供应商称重仪表安全数据表排放转移试验记录 |
| `cp_acceptance` | acceptance | 空货车检验与验收 | foreground_record | 序列工单图纸物料；验收台数；逐交换身份组成属性单位；实际净领退库存变化；供应商已含组分；电力场址电压组合仪表；燃气空气温压压缩性；涂料安全数据表物质介质；废物接收；共用驱动分母；校准试验覆盖 | 逐货车序列保留实际验收试验称重原件校准仪表资源归属，不用载重满载总重作净 M。 | 逐行实际单位 | 每工单批次 | 声明制造时期 | 声明工厂披露外包 | 可归属交换数量 / 验收设备数量 | 原始供应商称重仪表安全数据表排放转移试验记录 |
| `cp_packing` | packing | 条件性交付保护 | foreground_record | 序列工单图纸物料；验收台数；逐交换身份组成属性单位；实际净领退库存变化；供应商已含组分；电力场址电压组合仪表；燃气空气温压压缩性；涂料安全数据表物质介质；废物接收；共用驱动分母；校准试验覆盖 | 称量实际发运保护薄膜核对退回，将其质量排除空货车 M。 | 逐行实际单位 | 每工单批次 | 声明制造时期 | 声明工厂披露外包 | 可归属交换数量 / 验收设备数量 | 原始供应商称重仪表安全数据表排放转移试验记录 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `normalize_mass` | all inventory rows | q_ref = q_item / M; q_item = 每台验收成品设备的交换数量; q_ref = 每 1 kg 参考流的交换数量。 | q_item; M; cp_mass | q_ref |  |

按实际序列配置采集可归属净交换，扣退回库存变动，论证共用分配，除验收设备数量为 q_item，再除同一实际空车净 M。保留 kg/kg、燃气空气 m3/kg、电力 MJ/kg。兼容序列货车实际 M 波动时用可归属总交换除实测验收净质量之和并保留全部序列。分开不兼容车体轨距转向架制动涂层验收路线。未知保留缺口。

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `quality_mass` | cp_mass | 按 mass_record_origin 实施实际校准完整空车实测签署修正。缺原始实测方法或配置不平衡阻止量值完成。 | 原始序列校准重量物料平衡 |
| `quality_bom` | all processes | 核对底架地板端侧墙门转向架轮对制动车钩通达涂层保留润滑剂。完整供应总成已含组分一次计入，完整性声明前增遗漏实际组分资源。 | 图纸供应商包含实际记录 |
| `quality_species` | finish | 不推断必然 VOC/NOx 物质或炉热燃烧。须实际配方直接出口检出限运行覆盖实测换算基准，分开室内土壤长期异构体与指定即时空气物质。 | 安全数据表分物质出口燃气记录 |
| `quality_evidence` | dataset | 声明场址时期门点原始沿革经验质量界限条件缺席分配不确定性身份量值上游缺口。经验范围来自实际校准记录或独立核验兼容证据，不虚构质量收率寿命。PCR 检查仅建立声明关系，不是科学批准或真实工厂记录。 | 来源覆盖登记 |


## 9. 校验规则

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `validate_reference` | finished_machine; cp_mass | 确认完整钢制高边敞车空车正实际净 M、物理校准 mass_record_origin、精确配置固定1kg产出归一化。拒用货物满载目录自重为 M，拒其他车体。 | `tatra-model` |
| `validate_rows` | all inventory rows | 逐交换一个身份属性单位精确方向类型共用分母关联协议规则。尊重真实公开引用属性介质路线官方中文名，空身份仍为审查缺口，无泛称类别行。 |  |
| `validate_balance` | all processes | 核对库存供应商包含装配验收质量保留废物共用驱动实际试验范围。不重复购入转向架组分或钢回收抵扣。未测量量值条件路线上游缺失阻止无条件完整摇篮到工厂门声明。 | `ghg-allocation` |


## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 配置钢制高边铁路敞车前景制造 |
| downstream_use | secondary_dataset；background_dataset 需合格审查上游关联 |
| allowed_use | 兼容同车体走行部涂层空车净 M 场址时期门点制造供应模型 |
| excluded_use | 整个 CPC49533、其他车体结构运输装卸服务等质量载重等价或无依据摇篮到工厂门 |
| required_metadata | 制造者型号序列图纸物料版次；高边敞车体整体平直地板固定端墙侧门锁闭通达附件；钢种供应商完成度；轨距转向架轴列轮对悬挂轴承制动车钩；涂层化学实际炉热喷丸路线；完整空车净 M kg、cp_mass、校准轨道轮重实测及签署配置修正；保留轴承润滑剂；排除货物试验载荷人员夹具包装散装备件；实际场址时期门点供应商包含条件缺席外包 |
| required_quality_disclosure | 实际净称重量值供应商包含身份缺口条件过程不确定性经验界限上游缺失 |
| update_trigger | 车体门地板钢种转向架制动轨距供应范围涂层燃气空气路线实际验收 M 原件或门点场址时期改变 |


## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `tatra-factory` | literature | [Tatravagonka company profile](https://tatravagonka.sk/company-profile/?lang=en) | 公司介绍切割焊接段落。未注日期制造商能力示例，不采用产能钢种统一制造深度强度。 |
| `tatra-model` | literature | [Tatravagonka Eanoss](https://tatravagonka.sk/wagons/eanoss/?lang=en) | Eanoss 车体段技术表：全金属高边车体整体平直地板固定端墙侧门转向架配置；自重满载载重有别。不采用名义质量数值容量轨距地板厚度法规认证声明。 |
| `greenbrier-2022` | literature | [Greenbrier 2022 ESG report](https://www.gbrx.com/wp-content/uploads/2022/12/Greenbrier-2022-ESG-Report.pdf) | PDF/印刷24、59、61、62：历史2022焊接质量电力天然气切割加热涂料废气残余溶剂管理。混合公司工厂边界，不作敞车单位强度。不采用图表阈值燃气负荷必然 VOC 物质涂层配方罐车专属检验寿命因子。 |
| `ghg-allocation` | official_guidance | [WRI/WBCSD Product Life Cycle Accounting and Reporting Standard,2011](https://ghgprotocol.org/sites/default/files/standards/Product-Life-Cycle-Accounting-Reporting-Standard_041613.pdf) | 印刷63/PDF65表9.1–9.2历史避免细分因果分配层次。实际共用因果驱动实测，不是货车数值分配因子。 |
