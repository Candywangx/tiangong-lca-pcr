---
pcr_id: pcr.metal-products-machinery-and-equipment.special-purpose-machinery.cream-separators
status: candidate
language: zh-CN
sync_with: pcr.en-US.md
---

# 乳脂分离机

## 1. 范围与适用性

本PCR覆盖以将乳脂从牛奶中分离为主要功能的完整机器制造，包括手动、小型电动及工业转鼓碟片设备。Janschitz的实际手动与电动配置反证“所有机器均为工业不锈钢撬装”的假定；H7C仅作为工业架构证据，不是类别平均产品。排除通用实验室或矿物离心机、整套乳品厂、独立零件以及下游乳品分离服务。实际技术与材料依交付配置记录；处理能力、乳脂比例及使用寿命不作为工厂制造因子。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.special-purpose-machinery.cream-separators |
| classification_refs | CPC 3.0 44511 |
| covered_products | 完整手动、小型电动及工业乳脂分离机 |
| excluded_products | 通用或矿物离心机；整套乳品厂；独立零件；乳品分离服务 |
| representative_product | 无类别平均；Janschitz手动及电动与H7C工业实例分开 |
| production_route | 实际材料或采购组件→有证据的自制加工→装配→验收→包装；替代路线分开 |
| market_state | 验收完整机器在制造商交付边界，配置及填充状态明确 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 制造可交付的乳脂分离机器 |
| How much | 同配置验收机器的1 kg净质量；采集基准为每台验收成品机器 |
| How well | 符合实际图纸、卫生接触、传动及出厂验收规范；不假定类别性能 |
| How long or cycle | 一个已声明的制造与验收期间；不假定使用寿命 |
| reference_flow_link | finished_separator |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 验收完整乳脂分离机 |
| 参考流属性 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量单位 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 型号；同配置；手动或电动；转鼓与碟片；材质与接触状态；自制或采购；所含电机、传动、控制、框架、卫生模块；净重与工厂填充；验收；场址与期间 |

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | 参考产品 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | M = 同一配置的一台完整机器的验收净质量，单位 kg；采用 cp_mass 采集。 |
| `contained_assay` | 物理材料及物种记录 | Mass | kg | 各物种使用自身实测含量与湿干基；不得应用于电力或运输服务。 |
| `utility_units` | 公用介质记录 | Energy/volume | kWh; MJ; m3 | 保留原始计量与条件；通过有记录热值、密度或焓换算；不使用额定功率替代电耗。 |

## 5. 系统边界

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `factory_gate` | all processes | 采集实际制造至验收制造商出厂边界，包括废料、返工、工厂润滑与验证。乳品场运行、安装、更换和报废是独立下游阶段。 |  |
| `make_buy` | BOM interfaces | 为每项转鼓、碟片、传动、轴承、卫生连接、机壳、撬架及控制记录自制或采购、供货状态、实际合金或聚合物或配方及已包含工序。计入上游成品组件加本地装配，或原料加实际制造；不得两者重复。 | tetrapak-h7c-2025; janschitz-separator-architectures |
| `route_gate` | actual route | 铸造、锻造、热处理、机加工、成形、焊接、钝化、阳极氧化、涂覆与聚合物模塑仅依实际供方或场址工艺证据启用。产品材质不证明加工路线；可选卡片不是默认配方。 | jrc-smitheries-foundries-2024; jrc-fabricated-metals-2020 |
| `extensions` | actual exchanges | 锚点卡片为有条件示例。为每项实际牌号、化学品、气体、废物、公用介质和排放独立建立具体交换，包括独立供货的超级双相、轴钢、密封、皮带、传感器、辅助箱和油。身份缺失为明确缺口，不代表排除或零。 |  |
| `upstream` | external interfaces | 匹配供方地域、期间、供货状态与已完成工序；补充输入运输与外部废物处理链接。抵消成对内部材料或公用介质转移而保留其运行负担。上游链接不完整时不得无披露地宣称完整摇篮到大门结果。 |  |

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 实际供货材料或已完成指定工序的组件 |
| starting_condition_role | 前景供货状态边界 |
| product_classification_scope | 完整乳脂分离设备；分类叶不是制造路线证据 |
| recursive_input_rule | 采购同类别未完成机器只计上游一次，后续场内加工单列；成对内部转移抵消 |
| upstream_dataset_requirement | 实际牌号、配方、状态、技术、地域、期间及供货接口匹配；披露缺口 |
| disclosure | 交付配置、物料清单、自制采购、试验范围、库存、分配、不确定度与排除 |

### 自制或采购及架构矩阵

| 对象 | 规则 |
| --- | --- |
| 转鼓与碟片 | 采购成品或实际坯料加工；铝、双相、超级双相及不锈钢牌号分开；不由材质推断锻造 |
| 手动传动或电机 | 仅实际配置；所供润滑与电气控制已含负担一次；无电机的手动机器不计电机 |
| 卫生部件与机壳 | 容器、出口、封件、连接、铸件或模塑件按图纸与材料声明；泛称塑料或弹性体不确定具体配方 |
| 撬架与控制选件 | 按实际随货框架、传感器、PLC、辅助箱与服务包，确认组件包含范围并排除未供选件 |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `casting` | 有条件的机壳或转鼓坯件铸造 | conditional | 仅纳入有记录的实际场内合金铸造；采购压铸机壳跳过上游铸造 | 前景工厂记录 | 每 1 kg 参考流 |
| `forging` | 有条件的轴或转鼓坯件锻造与热处理 | conditional | 仅由工艺卡证实的锻造或热处理；双相转鼓材质不证明采用锻造 | 前景工厂记录 | 每 1 kg 参考流 |
| `fabrication` | 机加工、碟片成形、板材加工与连接 | conditional | 仅纳入实测零件的实际自制工序；采购成品零件跳过其制造 | 前景工厂记录 | 每 1 kg 参考流 |
| `finishing` | 有条件的清洗、钝化、阳极氧化或涂覆 | conditional | 分别启用有证据的处理并记录实际配方；不得预设通用卫生处理浴 | 前景工厂记录 | 每 1 kg 参考流 |
| `assembly` | 传动、转鼓、卫生流路与配置装配 | required | 所有机器；手动齿轮传动与电动机为替代配置；传感器和撬装选件按交付物料清单 | 前景工厂记录 | 每 1 kg 参考流 |
| `test` | 工厂验收与有条件的湿试验 | required | 所有出厂检查；仅实际进行的牛奶、水或清洗试验计入介质；排除客户运行 | 前景工厂记录 | 每 1 kg 参考流 |
| `utilities` | 剩余共用服务与有条件的场内发电 | conditional | 仅分配同期间未归属的公用负荷；场内发电单独记录 | 前景工厂记录 | 每 1 kg 参考流 |
| `release` | 净重称量、包装与制造商出厂交付 | required | 一个验收完整配置及其交付包装 | 前景工厂记录 | 每 1 kg 参考流 |

### 过程：有条件的机壳或转鼓坯件铸造（`casting`）

仅纳入有记录的实际场内合金铸造；采购压铸机壳跳过上游铸造。

#### 输入

##### 产品流

###### 铝铸造合金炉料（`al_charge`）

仅适用于实际铝铸造批次；声明合金牌号、锭料或回炉料状态与炉料分析。

- 选定流：铝铸造合金炉料
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material`
- 来源：`janschitz-separator-architectures`

###### 工厂外购电力（`cast_power`）

计量实际铸造电耗；电压和电网供电地域须匹配供方。

- 选定流：工厂外购电力
- 流属性/单位：能量 / kWh
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_energy。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy`
- 来源：

#### 输出

##### 废物流

###### 铝铸造浮渣（`al_dross`）

仅计实际移出的浮渣；称量并记录湿干基，独立于炉料测定残留铝含量。

- 选定流：铝铸造浮渣
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_waste。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste`
- 来源：

### 过程：有条件的轴或转鼓坯件锻造与热处理（`forging`）

仅由工艺卡证实的锻造或热处理；双相转鼓材质不证明采用锻造。

#### 输入

##### 产品流

###### 双相不锈钢转鼓坯件（`duplex_blank`）

仅使用实际指定的双相牌号与供货状态；超级双相须单设交换。

- 选定流：双相不锈钢转鼓坯件
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material`
- 来源：`tetrapak-h7c-2025`

###### 工厂外购电力（`forge_power`）

仅适用于实际锻造或电热处理；记录炉体和运行期间。

- 选定流：工厂外购电力
- 流属性/单位：能量 / kWh
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_energy。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy`
- 来源：`jrc-smitheries-foundries-2024`

###### 供应工厂燃烧器的天然气（`forge_gas`）

仅适用于实际燃气加热；保留实测体积、气体组成、状态条件和热值换算。

- 选定流：供应工厂燃烧器的天然气
- 流属性/单位：能量 / MJ
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_energy。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy`
- 来源：`jrc-smitheries-foundries-2024`

#### 输出

##### 废物流

###### 不锈钢锻造氧化皮（`forge_scale`）

实际氧化皮产生量；使用其自身金属和氧组成，不使用名义坯料合金分析。

- 选定流：不锈钢锻造氧化皮
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_waste。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste`
- 来源：

### 过程：机加工、碟片成形、板材加工与连接（`fabrication`）

仅纳入实测零件的实际自制工序；采购成品零件跳过其制造。

#### 输入

##### 产品流

###### AISI 304 不锈钢板（`steel304_sheet`）

仅适用于卫生容器、出口或框架的实际板材；保留厚度及退火或表面供货状态。

- 选定流：AISI 304 不锈钢板
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material`
- 来源：`tetrapak-h7c-2025`

###### AISI 316 不锈钢板（`steel316_sheet`）

仅适用于指定的 AISI316 零件；不得用通用钢材篮子替代304或双相钢。

- 选定流：AISI 316 不锈钢板
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material`
- 来源：`tetrapak-h7c-2025`

###### 分离机碟片用铝板（`al_disc_sheet`）

仅适用于实际自制碟片；合金、状态、表面和碟片图纸须有工厂记录。

- 选定流：分离机碟片用铝板
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material`
- 来源：`janschitz-separator-architectures`

###### 纯矿物油型金属加工油（`machining_oil`）

有条件的实际纯油机加工路线；记录供应配方和补加量；若使用水基浓缩液须另设交换。

- 选定流：纯矿物油型金属加工油
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material`
- 来源：`jrc-fabricated-metals-2020`

###### 氩焊接保护气（`argon`）

仅适用于有证据的实际氩气保护焊；混合气须单设确切身份。

- 选定流：氩焊接保护气
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material`
- 来源：

###### AISI 316L 不锈钢焊丝（`weld_wire`）

仅适用于实际合格焊材与焊接记录；此牌号不是强制焊材。

- 选定流：AISI 316L 不锈钢焊丝
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material`
- 来源：

###### 工厂外购电力（`fab_power`）

实际机加工、成形和连接分表电耗，包括报废与返工。

- 选定流：工厂外购电力
- 流属性/单位：能量 / kWh
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_energy。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy`
- 来源：

#### 输出

##### 废物流

###### 不锈钢机加工切屑（`steel_chips`）

按实际合金及污染分开；实测质量及自身分析，附着油单列。

- 选定流：不锈钢机加工切屑
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_waste。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste`
- 来源：

###### 铝碟片加工废料（`al_scrap`）

实际实测碟片边角料或报废件；内部回熔料的成对转移抵消。

- 选定流：铝碟片加工废料
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_waste。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste`
- 来源：

###### 废矿物油型金属加工油（`spent_oil`）

实际移出处理的量；按分析区分油、水和悬浮金属。

- 选定流：废矿物油型金属加工油
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_waste。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste`
- 来源：

### 过程：有条件的清洗、钝化、阳极氧化或涂覆（`finishing`）

分别启用有证据的处理并记录实际配方；不得预设通用卫生处理浴。

#### 输入

##### 产品流

###### 钝化用柠檬酸（`citric_acid`）

仅在实际配方证实柠檬酸钝化时纳入；记录纯度和溶液浓度；硝酸路线须单设硝酸卡片。

- 选定流：钝化用柠檬酸
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material`
- 来源：

###### 阳极氧化用硫酸（`sulfuric_acid`）

仅适用于有记录且使用此酸的铝阳极氧化；不推断浴温、浓度或时间。

- 选定流：阳极氧化用硫酸
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material`
- 来源：

###### 异丙醇清洗溶剂（`ipa`）

仅适用于实际溶剂清洗；记录纯液或配制状态、纯度与回收库存。

- 选定流：异丙醇清洗溶剂
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_solvent。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_solvent`
- 来源：

###### 环氧粉末涂料（`epoxy_powder`）

仅适用于有证据的实际非接触涂覆件；须有配方、固化和捕集记录；不预设涂层。

- 选定流：环氧粉末涂料
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material`
- 来源：

###### 工厂供应漂洗水（`finish_water`）

实际补充水；内部循环不得再计外购。

- 选定流：工厂供应漂洗水
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_water。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_water`
- 来源：

###### 工厂外购电力（`finish_power`）

实际表面处理电耗；场内发电单独核对。

- 选定流：工厂外购电力
- 流属性/单位：能量 / kWh
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_energy。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy`
- 来源：

#### 输出

##### 废物流

###### 含金属表面处理污泥（`finish_sludge`）

实测污泥水分及各含有金属的自身分析；记录处理去向与回收含量。

- 选定流：含金属表面处理污泥
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_waste。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste`
- 来源：

###### 外送处理的表面处理废水（`finish_effluent`）

实际排出废水；水质量与溶解或悬浮物种独立表征。

- 选定流：外送处理的表面处理废水
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_water。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_water`
- 来源：

###### 含异丙醇的废活性炭（`solvent_capture`）

仅适用于实际捕集；留存溶剂独立于介质总质量测定。

- 选定流：含异丙醇的废活性炭
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_solvent。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_solvent`
- 来源：

##### 基本流

###### 排入空气的异丙醇（`ipa_air`）

实际空气排放测量或经验证的物种衡算；不得默认将溶剂总损失归为空气排放。

- 选定流：排入空气的异丙醇
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_solvent。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_solvent`
- 来源：

### 过程：传动、转鼓、卫生流路与配置装配（`assembly`）

所有机器；手动齿轮传动与电动机为替代配置；传感器和撬装选件按交付物料清单。

#### 输入

##### 产品流

###### 成品乳脂分离机转鼓组件（`bought_bowl`）

仅适用于采购组件；确切材质、碟片配置和供方完成工序须匹配；不得重复计入内含合金。

- 选定流：成品乳脂分离机转鼓组件
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material`
- 来源：`tetrapak-h7c-2025`; `janschitz-separator-architectures`

###### 手动乳脂分离机齿轮与摇柄组件（`manual_drive`）

仅适用于实际手动物料清单；记录齿轮传动与润滑状态，不预设通用蜗杆。

- 选定流：手动乳脂分离机齿轮与摇柄组件
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material`
- 来源：`janschitz-separator-architectures`

###### 电动分离机驱动电动机（`motor`）

仅适用于实际电驱动；须声明电压、电机技术、功率与所供控制状态；不得重复计入内含铜和钢。

- 选定流：电动分离机驱动电动机
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material`
- 来源：`tetrapak-h7c-2025`; `janschitz-separator-architectures`

###### 分离机轴承座组件（`bearing`）

仅适用于实际供货轴承单元与轴接口；材质和含油量取自供方声明。

- 选定流：分离机轴承座组件
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material`
- 来源：`tetrapak-h7c-2025`

###### 成品不锈钢卫生进料模块（`sanitary_module`）

仅适用于实际密闭进料机器的采购模块；声明牌号、连接、完成表面及包含阀门。

- 选定流：成品不锈钢卫生进料模块
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material`
- 来源：`tetrapak-h7c-2025`

###### EPDM 卫生密封件（`epdm_seal`）

仅适用于物料清单证实的EPDM配方及接触许可；FDA许可弹性体声明不证明是EPDM。

- 选定流：EPDM 卫生密封件
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material`
- 来源：

###### 成品铝压铸分离机机壳（`bought_cast_housing`）

仅适用于实际采购压铸机壳；保留合金、所供表面与包含的机加工。其上游铸造负担只计一次，不平行计入场内铸造。

- 选定流：成品铝压铸分离机机壳
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material`
- 来源：`janschitz-separator-architectures`

###### 聚碳酸酯分离机机壳（`pc_housing`）

仅在实际聚合物声明证实聚碳酸酯时使用；制造商泛称塑料不足以证明。

- 选定流：聚碳酸酯分离机机壳
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material`
- 来源：

###### 分离机 PLC 控制柜（`plc`）

仅适用于所供控制包；列明包含的传感器和电气接口，若供方不含辅助箱则单列。

- 选定流：分离机 PLC 控制柜
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material`
- 来源：`tetrapak-h7c-2025`

###### 矿物润滑油工厂填充料（`lube_fill`）

仅计采购组件之外的工厂填充油；记录实际牌号与随货留存填充量；排除用户填油。

- 选定流：矿物润滑油工厂填充料
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material`
- 来源：

###### 工厂外购电力（`assembly_power`）

实际装配电耗，包括电动工具与控制验证。

- 选定流：工厂外购电力
- 流属性/单位：能量 / kWh
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_energy。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy`
- 来源：

### 过程：工厂验收与有条件的湿试验（`test`）

所有出厂检查；仅实际进行的牛奶、水或清洗试验计入介质；排除客户运行。

#### 输入

##### 产品流

###### 工厂外购电力（`test_power`）

仅计实际工厂运行试验；铭牌功率与牛奶处理量不是制造因子。

- 选定流：工厂外购电力
- 流属性/单位：能量 / kWh
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_energy。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy`
- 来源：`tetrapak-h7c-2025`

###### 工厂供应试验水（`test_water`）

仅计实际湿验收或清洗用水；包括启动、排空和返工。

- 选定流：工厂供应试验水
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_water。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_water`
- 来源：

###### 工厂分离试验用全乳（`test_milk`）

仅适用于实际进行的工厂牛奶试验；须有供应组成与乳脂分析；排除正常客户乳品加工。

- 选定流：工厂分离试验用全乳
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material`
- 来源：`tetrapak-h7c-2025`

###### 氢氧化钠清洗剂（`test_naoh`）

仅适用于实际使用此剂的工厂原位清洗；实测纯度与浓度；不预设配方。

- 选定流：氢氧化钠清洗剂
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material`
- 来源：

###### 外购压缩空气（`test_air`）

仅适用于实际外购空气；记录压力、参考状态和泄漏；自有空压机电耗只计一次。

- 选定流：外购压缩空气
- 流属性/单位：体积 / m3
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_energy。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy`
- 来源：

#### 输出

##### 产品流

###### 工厂试验回收稀奶油（`test_cream`）

仅计实际有用外送稀奶油；记录乳脂分析与去向；不自动视为共产品或性能收率。

- 选定流：工厂试验回收稀奶油
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material`
- 来源：

##### 废物流

###### 废弃工厂试验脱脂乳（`test_milk_waste`）

仅计废弃脱脂乳；须有自身固形物与乳脂分析和处理去向。

- 选定流：废弃工厂试验脱脂乳
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_waste。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste`
- 来源：

###### 工厂试验清洗废水（`test_effluent`）

试验后实际废水；分别采集水、残余脂肪、金属与清洗剂物种。

- 选定流：工厂试验清洗废水
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_water。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_water`
- 来源：

### 过程：剩余共用服务与有条件的场内发电（`utilities`）

仅分配同期间未归属的公用负荷；场内发电单独记录。

#### 输入

##### 产品流

###### 工厂外购电力（`shared_power`）

仅计扣除全部工序负荷后的有证据未归属剩余消耗；调查负剩余，不得截为零。

- 选定流：工厂外购电力
- 流属性/单位：能量 / kWh
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_energy。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy`
- 来源：

###### 工厂外购蒸汽（`shared_heat`）

仅计实际外购蒸汽；核对交付焓与冷凝回水；不得叠加于自有锅炉燃料。

- 选定流：工厂外购蒸汽
- 流属性/单位：能量 / MJ
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_purchased_heat。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_purchased_heat`
- 来源：

###### 供应场内发电机的天然气（`gen_gas`）

仅适用于实际场内发电；区分燃料与进口电力，核对实测发电输出。

- 选定流：供应场内发电机的天然气
- 流属性/单位：能量 / MJ
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_energy。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy`
- 来源：

#### 输出

##### 基本流

###### 排入空气的化石二氧化碳（`co2_air`）

仅适用于实际化石燃烧；须有碳输入及每项含碳输出和库存；CO与NOx须独立物种证据。

- 选定流：排入空气的化石二氧化碳
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_emission。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_emission`
- 来源：

### 过程：净重称量、包装与制造商出厂交付（`release`）

一个验收完整配置及其交付包装。

#### 输入

##### 产品流

###### 瓦楞纸板运输纸箱（`cardboard`）

仅计实际纸箱；排除于验收机器净重。

- 选定流：瓦楞纸板运输纸箱
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material`
- 来源：

###### 木制运输托盘（`wood_pallet`）

仅计实际托盘；披露周转所有权与单次运输负担。

- 选定流：木制运输托盘
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material`
- 来源：

###### 聚乙烯保护薄膜（`pe_film`）

仅计实际薄膜；声明聚合物和实测包装用量。

- 选定流：聚乙烯保护薄膜
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：对 q_item 应用 normalize_mass；reference_mass；cp_material。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material`
- 来源：

#### 输出

##### 产品流

###### 验收完整乳脂分离机（`finished_separator`）

交付机器净重配置；按实际随货纳入电机或手动传动、转鼓、控制、框架及工厂留存填充料。

- 选定流：验收完整乳脂分离机
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：1 千克。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考流；采集基准为每台验收成品机器
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_mass`
- 来源：`tetrapak-h7c-2025`; `janschitz-separator-architectures`

## 7. 分配与共产品处理

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `product_separation` | configuration groups | 分配前分开手动、小型电动和工业配置。按有记录的因果机器时间、热需求或工单分配共用实测生产负担；保留驱动量、总量、接受对象与不确定度。不得跨配置平均。 |  |
| `scrap` | external recovered material | 记录实际废料去向与留存油或金属含量。不自动计入避免原生金属信用；独立披露回收模型。内部回料为成对转移，不是外部共产品。 |  |
| `test_products` | factory test outputs | 废弃试验乳与废水为废物。有用试验稀奶油或脱脂乳须有实测量、质量、去向与因果分离，才能分配共产品；不默认销售、收率或乳品工艺分配。 |  |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_mass` | all applicable processes | 参考质量 | foreground_record | 型号；配置；序列号；验收净质量 M | 使用经校准的秤称量已验收的完整机器，排除运输包装；核对同一配置和验收记录。 | kg | 每批次或连续计量 | 同一明确生产期间 | 同配置、场址及工序 | 每台验收净质量 | 校准、匹配采样、工单、库存、不确定度与验收证据 |
| `cp_material` | all applicable processes | 实测交换 | foreground_record | 批次；图纸；自制或采购；牌号；供货状态；领料总量与净量；库存；验收数量；报废数量；分析 | 称量并核对同配置同期间收货、领料或退料记录和物料清单；保留实际所供配方与内含范围。 | kg | 每批次或连续计量 | 同一明确生产期间 | 同配置、场址及工序 | 分配材料 / 验收机器数量 | 校准、匹配采样、工单、库存、不确定度与验收证据 |
| `cp_energy` | all applicable processes | 实测交换 | foreground_record | 计量表；期间；工序负荷；进口；发电；出口；储能；回流；条件；验收数量；分配驱动 | 积分同场址期间校准区间计量；核对全场与分表且无重叠；保留外购与自发供给及实测因果分配。 | kWh; MJ; m3 | 每批次或连续计量 | 同一明确生产期间 | 同配置、场址及工序 | 分配电量 / 验收机器数量 | 校准、匹配采样、工单、库存、不确定度与验收证据 |
| `cp_water` | all applicable processes | 实测交换 | foreground_record | 水表；输入水分；库存；蒸发；排水；反应；成对回流；分析；验收数量 | 测量外部水和每项实际水分或输出，并有成对循环记录；用实测密度与条件换算体积。 | kg | 每批次或连续计量 | 同一明确生产期间 | 同配置、场址及工序 | 分配水量 / 验收机器数量 | 校准、匹配采样、工单、库存、不确定度与验收证据 |
| `cp_waste` | all applicable processes | 实测交换 | foreground_record | 废物批次；去向；实测质量；水分；自身金属或物种分析；库存；成对回料；验收数量 | 各流使用校准称量与代表性匹配采样；分开实际处理与回收去向。 | kg | 每批次或连续计量 | 同一明确生产期间 | 同配置、场址及工序 | 分配废物 / 验收机器数量 | 校准、匹配采样、工单、库存、不确定度与验收证据 |
| `cp_solvent` | all applicable processes | 实测交换 | foreground_record | 溶剂身份；新料质量；浓度；期初期末库存；回收；留存；捕集分析；销毁；空气或非空气释放；验收数量 | 测量物种分辨的溶剂库存与排放或捕集样品；分开保留空气流量积分与销毁反应证据。 | kg | 每批次或连续计量 | 同一明确生产期间 | 同配置、场址及工序 | 分配溶剂 / 验收机器数量 | 校准、匹配采样、工单、库存、不确定度与验收证据 |
| `cp_emission` | all applicable processes | 实测交换 | foreground_record | 物种；环境介质；校准废气流量；浓度；时间；化石碳；库存；采样不确定度；验收数量 | 积分实际匹配浓度与废气流量或经验证的物种衡算；不默认排放因子或空气损失。 | kg | 每批次或连续计量 | 同一明确生产期间 | 同配置、场址及工序 | 分配排放 / 验收机器数量 | 校准、匹配采样、工单、库存、不确定度与验收证据 |
| `cp_purchased_heat` | utilities | 外购蒸汽净交付热量 | foreground_record | 交付蒸汽质量kg；其自身比焓MJ/kg；压力；温度；干度；独立实测冷凝回水质量kg；其自身回水焓MJ/kg；共同焓参考基准；校准热量表；期间；配置；验收数量 | 测量交付蒸汽质量与实际压力、温度、干度下其自身比焓；减去独立实测冷凝回水质量乘以其自身回水焓，两者采用同一焓参考基准，得到净交付MJ。也可使用校准净热量表并记录回水处理。保持同场址期间、验收产出与配置；不得假定焓、将kg等同MJ或同时计入自有锅炉燃料。 | MJ | 每区间 | 同一明确生产期间 | 同配置、场址及工序 | 分配外购热量 / 验收机器数量 | 校准质量或热量表、状态测量、焓推导、回水台账与不确定度 |

对同一配置与期间，Q为含报废与返工负担的可归属期间交换，N为验收数量；M=验收净质量总和/N。先得 q_item=Q/N，再由 normalize_mass 得 q_ref=Q/验收净质量总和。称量包含实际随货组件及工厂留存填充料，排除试验已排出介质、包装与报废质量；不得跨配置平均。

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `normalize_mass` | all inventory rows | q_ref = q_item / M; q_item = 每台验收成品机器的交换数量; q_ref = 每 1 kg 参考流的交换数量。 | q_item; M; cp_mass | q_ref |  |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| configuration | all records | 保持同配置、同期间、同分母与工序覆盖；未知不改为零 | 验收、物料清单、工单 |
| traceable_balance | physical streams | 每项质量与物种分析可追溯至实际采样和库存；综合不确定度指导调查 | 校准、化验、转移台账 |
| source_limit | methodology and providers | 产品手册证明架构，不证明所有工厂路线或供方身份；补充实际工艺与配方记录 | 供方接口、工艺卡 |

## 9. 校验规则

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `identity` | reference product and BOM | 核对一个验收完整乳脂分离机器、实际配置、校准净重、交付填充料、手动或电动架构及物料自制或采购接口。分母排除包装、报废机器与下游牛奶处理量。 |  |
| `physical_mass` | physical material streams | 对同配置同期间，核对外部输入加期初库存加反应增加量与验收产品、报废、废料、渣、浮渣、污泥、废水、释放及期末库存。按转移编号与量匹配每项内部回料；不重复计循环。 |  |
| `contained_species` | contained metal and chemical species records | 对每项实际Al、Fe、Cr、Ni、Mo、碳、乳脂或浴液物种，各项乘以其自身匹配实测含量与湿干基。纳入验收产品、废料、氧化皮、浮渣、污泥、废水和排放以及库存、反应源汇与成对回料。合金总质量不是含元素质量；名义炉料分析不得代替残余物或产品分析。 |  |
| `water_closure` | physical water and moisture records | 核对供水和输入水分加期初库存与反应生成，对应产品或填充料水分、湿废料或污泥、液体废水、蒸发、反应耗水和期末库存。配对循环水、漂洗与冷凝回水；每项湿输入、产品或填充料、废料、污泥、废水及期初期末库存分别使用其自身实测水分或含水比例、体积换算时的密度及匹配湿干基；废水总量不等于其含水量。 |  |
| `solvent_closure` | actual solvent-bearing material records | 对每种实际溶剂，核对新料加期初库存与生成量，对应产品留存、外送回收溶剂、期末库存、空气释放、介质捕集溶剂、废水溶剂与实际销毁或反应产物。捕集是转移，不是销毁；非空气残余量不能默认为空气排放。未解释的衡算残差，包括未测损失，不得自动归为空气排放；应按实际测量、采样、库存与分配合成不确定度调查。 |  |
| `utilities_closure` | utility energy and service-media records | 按匹配单位将全部工序负荷与未归属剩余服务核对至同期间场址计量：外购进口加实际场内发电加期初储能或回流，等于已分配负荷加出口、损失和期末储能。仅分配未归属剩余量；不得将全厂进口叠加于分表。依据期间、单位和合成不确定度调查负剩余；不得截零。 |  |
| `emission_species` | actual combustion and release species records | 化石碳衡算不能确定CO或NOx。区分实测NO、NO2及按NO2当量报告的NOx，保留实际报告约定与分子量换算；不得将聚合报告约定当作单一物种身份。每项声称排放须有自身实测物种、实际环境介质及采样与流量积分；表征废水物种而不将外送处理视为直接基本流排放。 |  |
| `closure_uncertainty` | physical balance residuals | 依据实际秤或计量、采样或分析、库存、反应和分配合成不确定度调查衡算残差并记录纠正证据。不允许通用容差、虚构损失、默认收率或配平项。区分有缺失证据支持的不适用、实测零与未知。 |  |
| `provider` | external flow links | 绑定UUID前核对确切流类型、参考属性、单位、物理化学状态与供货接口；不兼容通用离心机、电池分隔器废料或特定来源发电不得替代。发布前解决候选身份与定量缺口。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | primary_dataset |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | 同配置机器制造输入，下游process或lifecyclemodel投影；完整链接后适用声明的制造边界 |
| excluded_use | 乳品分离服务、通用离心机、整套厂、使用寿命默认值或未经验证类别平均 |
| required_metadata | 配置、净重、架构、牌号、供货状态、自制采购、试验、场址期间、分配及提供者 |
| required_quality_disclosure | 身份与供方缺口、路线或配方证据、不确定度、范围、未知及不适用 |
| update_trigger | 配置、供方状态、工艺、配方、计量或边界变化 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| tetrapak-h7c-2025 | handbook | Tetra Pak Separator H7C; footer 2025-06; https://www.tetrapak.com/content/dam/tetrapak/media-box/global/en/documents/tetra-pak-separator-h7c-pd-leaflet.pdf | 工业架构、接触材质及场内验收；使用阶段水、电、GWP及标称质量不作为制造默认值 |
| janschitz-separator-architectures | handbook | Janschitz, Milky Cream separators — Farmland; undated publisher page; https://business.janschitz-gmbh.at/en/cream-separators.html | 手动及小型电动材质与机壳压铸，作为工业架构反证；不采用额定能力或质量默认值 |
| jrc-smitheries-foundries-2024 | official_guidance | JRC, Smitheries and Foundries Industry BREF, 2024, doi:10.2760/4805267, section1.2.1 | 有条件的锻造与后加工分解；不证明任一转鼓必为锻件 |
| jrc-fabricated-metals-2020 | official_guidance | JRC, Best Environmental Management Practice in Fabricated Metal Products manufacturing, 2020, doi:10.2760/894966, printed190 | 实际金属加工油选择与配方状态；无强制润滑配方或定量范围 |
