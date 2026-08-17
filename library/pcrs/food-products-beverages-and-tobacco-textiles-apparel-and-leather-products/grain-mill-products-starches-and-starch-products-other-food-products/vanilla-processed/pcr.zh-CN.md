---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.grain-mill-products-starches-and-starch-products-other-food-products.vanilla-processed
language: zh-CN
status: candidate
content_maturity: authored_methodology
translation_status: aligned
sync_with: pcr.en-US.md
---

# 香草，加工

## 1. 范围与适用性

本 PCR 规定从熟化设施接收成熟鲜香草荚开始，经热水杀青、发汗/熟化、分阶段干燥、调湿/均衡、分级、选定的机械形态加工，直至工厂大门包装完成的前景数据生产要求。参考路线生产熟化干燥香草；每个前景数据包须声明一个 `selected_product_form`：`whole`、`split`、`cut`、`ground_or_powdered` 或 `pulp_and_seeds`。条件性形态加工过程只能由该声明启用，且不得相互平均。

本 PCR 适用于由已声明 *Vanilla* 物种生产的加工香草，前提是进厂鲜荚批次、熟化路线、最终形态、水分基准、等级/级别和包装配置均可追溯。农业种植及至熟化设施的运输属于上游，其数据集连接至接收的鲜荚输入。排除乙醇或其他溶剂提取、浸渍、油树脂生产、分离或合成香兰素、香草味配方和成品食品。尤其不得将提取物路线附加到本 PCR 的熟化香草荚路线或与其平均。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.grain-mill-products-starches-and-starch-products-other-food-products.vanilla-processed |
| classification_refs | CPC:3.0:23928 (`exact`) |
| covered_products | 以完整荚或自然开裂荚形态存在的熟化干燥香草；切段香草；仅由熟化香草荚机械减小尺寸所得的研磨或粉末香草；从熟化香草荚机械分离的香草果肉与籽。 |
| excluded_products | 鲜香草或其他未加工香草（CPC 01658）；乙醇或其他溶剂提取物；油树脂；分离或合成香兰素；配制香草调味料；下游食品；未声明物种和选定产品形态的批次。 |
| representative_product | 经熟化干燥的 *Vanilla planifolia* 完整香草荚，声明等级/级别和水分，在熟化/加工工厂大门完成包装。 |
| production_route | 成熟鲜荚 → 接收与分拣 → 热水杀青 → 发汗/熟化 → 分阶段干燥 → 调湿/均衡 → 分级与形态选择 → 条件性切段、研磨或开荚 → 包装。 |
| market_state | 工厂大门处的食品级加工香草；声明选定形态、物种、等级/级别、水分、产地、批次和包装配置。 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 以所声明物理形态提供特征性香草配料的加工香草。 |
| How much | 1,000 kg 净加工香草，不含包装。 |
| How well | 声明物种、`selected_product_form`、等级/级别、湿基水分、声称时的香兰素规格、无活虫、包装配置和符合性依据。 |
| How long or cycle | 工厂大门处一个完整生产批次；不指定使用期限。 |
| reference_flow_link | `rf_processed_vanilla` |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1,000 kg 净产品 |
| 参考产品流 | Vanilla, processed `34e7961c-4ef0-42f4-a62c-6231e257cd65` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | species; cultivar or trade name when known; country of origin; country and year of harvest when available; `selected_product_form`; class/grade; measured moisture wet basis; vanillin specification and method when claimed; killing method; sweating regime; drying technology; conditioning duration; package configuration; net product mass; production lot; temporal coverage |

构建前景数据包时，`必需限定信息` 中的每一项都必须在数据集元数据、过程说明、参考流备注、产品说明或等效数据包字段中声明。缺失必需限定信息会使参考流不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | 参考产品 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 将全部清单归一化至工厂大门处 1,000 kg 净加工香草。 |
| `net_product_mass` | 包装产出 | Mass | kg | 参考数量不含初级、次级和三级包装；毛包装质量和每个包装组件质量均保留为独立原始字段。 |
| `fresh_to_processed_mass_ratio` | 鲜荚输入与包装产品 | Mass | kg/kg | 使用实测合格鲜荚质量和实测净加工香草质量计算批次特定比率。4.5:1 至 6:1 仅作外部典型 QA 区间，绝不可替代前景质量记录。 |
| `killing_time_temperature` | 热水杀青 | Temperature and elapsed time | °C; min | 记录每批次的时间加权水温和浸泡时间。60–70 °C 和 1.5–5 min 的证据包络是路线 QA 比较量而非通用固定配方；不得平均不同处理程序。 |
| `product_moisture` | 最终加工香草 | Moisture on wet basis | % w/w | 按声明方法测量，并采用已采纳 Codex 香草标准中对应物种/形态/级别的单元格。对代表性 *V. planifolia* 完整荚 Class I 形态，引用区间为 30–36% w/w。不得跨物种、形态或等级平均水分规格。 |
| `energy_conversion` | 计量电力 | Energy | kWh | 保留计量 kWh。若源记录使用 MJ，则按 1 kWh = 3.6 MJ 换算，并保留原始读数和换算。 |
| `form_route_gate` | 条件性形态加工 | Mass | kg | 仅启用与 `selected_product_form` 匹配的过程；自然开裂荚不启用切段，提取也绝不启用本 PCR 的任何过程。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 送达并由熟化设施验收的成熟鲜香草荚，声明物种、产地、收获批次、接收质量、成熟度/状态和上游数据集引用。 |
| starting_condition_role | 前景门口输入；种植和进厂运输仍为相连接的上游系统。 |
| product_classification_scope | 以 CPC 3.0 代码 23928 表示的加工香草，并限定于本 PCR 覆盖的形态和熟化路线。 |
| recursive_input_rule | 购入或转入且已属于本产品类别的熟化香草必须作为具有自身上游数据集的单独输入记录；不得递归重跑鲜荚熟化清单，也不得将其重新标记为鲜荚。 |
| upstream_dataset_requirement | 为鲜荚连接农业生产与进厂运输；为实际使用的外购热水、电力、包装组件、清洗化学品及任何其他产品输入连接上游数据集。 |
| disclosure | 声明设施及地域、物种、收获产地/期间、进料状态、杀青程序、发汗程序、干燥技术、调湿时长、选定形态、包装配置、分配、排除项、数据缺口，以及所有零值/不适用路线决定。 |

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_fresh_pod_start` | 覆盖路线 | 从验收的成熟鲜荚开始，纳入直至工厂大门包装产品的全部熟化与精加工过程。 | `fao-vanilla-postharvest`; `uf-ifas-vanilla-production`; `sanchez-2008-vanilla-killing` |
| `boundary_complete_curing_chain` | 覆盖路线 | 杀青、发汗/熟化、分阶段干燥和调湿/均衡是独立的必需前景过程；任何一步均不得隐藏于汇总加工行。 | `fao-vanilla-postharvest`; `sanchez-2008-vanilla-killing`; `budiastra-2025-vanilla-curing` |
| `boundary_selected_form` | 产品形态 | 仅纳入与 `selected_product_form` 匹配的条件性机械加工；每种形态作为单独批次或模型报告。 | `codex-rep25-sch-vanilla`; `iso-5565-1-1999` |
| `boundary_extract_exclusion` | 提取 | 排除溶剂提取、浸渍、油树脂生产和分离香兰素；须另用 PCR 或明确扩展模型。 | `iso-5565-1-1999`; `uf-ifas-vanilla-production` |
| `boundary_used_inputs` | 公用工程与材料 | 将每一种实际使用的公用工程、燃料、制冷剂、配料、清洗化学品和包装组件作为独立原子交换纳入。若下列代表卡未覆盖实际使用项目，应增加一个化学或物理上明确的卡，而非集合标签。 | `iso-14044-2006` |
| `boundary_waste_emissions` | 直接产出 | 将每项实测固体废物、废水流和直接基本流排放分别纳入；不得把直接排放隐藏在处理服务输入中。 | `iso-14044-2006` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `fresh_pod_receiving` | 鲜荚接收与分拣 | `required` | 每个覆盖批次。 | 前景接收、身份控制及剔除不合格香草荚和植物残余。 | kg 合格鲜荚 |
| `hot_water_killing` | 热水杀青/烫漂 | `required` | 选定参考路线使用热水杀青；其他杀青技术需要单独评审路线，不得平均。 | 停止香草荚发育并启动熟化反应。 | kg 杀青荚 |
| `sweating_curing` | 发汗/熟化 | `required` | 每个杀青后的覆盖批次。 | 受控温暖高湿熟化以及香气/颜色形成。 | kg 发汗后香草荚 |
| `staged_drying` | 分阶段干燥 | `required` | 每个覆盖批次；声明的被动、太阳能辅助或受控空气技术决定电力使用。 | 在保持声明质量的同时降低水分。 | kg 干燥香草荚 |
| `conditioning_equilibration` | 调湿与水分均衡 | `required` | 每个干燥后覆盖批次。 | 分级前稳定香气与水分。 | kg 调湿后香草荚 |
| `grading_form_selection` | 最终分拣、分级与形态选择 | `required` | 每个调湿批次。 | 分离合格产品、声明的可销售等级、废品及选定精加工路线。 | kg 合格调湿香草 |
| `cutting` | 熟化香草切段 | `conditional` | 仅当 `selected_product_form = cut` 时纳入。 | 机械减小尺寸至切段形态。 | kg 切段香草 |
| `grinding` | 熟化香草研磨 | `conditional` | 仅当 `selected_product_form = ground_or_powdered` 时纳入。 | 机械减小尺寸至研磨/粉末形态。 | kg 研磨或粉末香草 |
| `pod_opening` | 开荚及果肉/籽分离 | `conditional` | 仅当 `selected_product_form = pulp_and_seeds` 时纳入。 | 不使用溶剂提取，以机械方式回收果肉与籽。 | kg 香草果肉与籽 |
| `packaging` | 包装与标签 | `required` | 每种选定产品形态；仅启用实际包装组件卡。 | 在工厂大门交付声明的净产品。 | 1,000 kg 净包装产品 |
| `lot_sanitation` | 批次可归属的设备与表面清洁 | `required` | 每批纳入直接记录或明确分配的共用清洁；仅在使用相应化学品时适用该化学品卡。 | 分配至覆盖批次的食品卫生支持。 | 1,000 kg 净包装产品 |

下列全部 `reasoned_estimate` 区间均为临时筛选区间，而非默认值或符合性限值。其推理基础是物理非负性，并刻意宽幅覆盖批量、被动与受控操作以及大宗与零售包装差异。须以经评审的来源证据或前景记录替换；凡该行具有实质性，均须在敏感性分析中测试上下限。

### 过程：鲜荚接收与分拣（`fresh_pod_receiving`）

#### 输入

##### 产品流

###### 接收的成熟鲜香草荚（`received_fresh_vanilla_pods`）

设施门口质量仅包括熟化前可追溯的已收获香草荚批次。

- 选定流：Mature fresh vanilla pods
- 方向：输入（`input`）
- 流类型：产品流（`product`）
- 流属性/单位：Mass / kg
- 数量规则：分拣前称量每个接收批次，并归一化至净包装产品。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 净加工香草
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_receiving_records`
- 来源：`fao-vanilla-postharvest`; `uf-ifas-vanilla-production`
- 数量范围：鲜荚至调湿成品质量比 QA 区间
  - 范围角色：典型区间（`typical_range`）
  - 下限：4500
  - 上限：6000
  - 单位：kg
  - 基准：每 1,000 kg 净加工香草
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：外部来源（`external_source`）
  - 来源：`fao-vanilla-postharvest`

#### 输出

##### 产品流

###### 合格鲜香草荚（`accepted_fresh_vanilla_pods`）

合格荚是转入热水杀青的实测鲜荚产出。

- 选定流：Accepted fresh vanilla pods
- 方向：输出（`output`）
- 流类型：产品流（`product`）
- 流属性/单位：Mass / kg
- 数量规则：接收鲜荚质量减去废弃鲜荚质量和植物残余质量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 净加工香草
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_receiving_records`
- 来源：

###### 废弃鲜香草荚（`rejected_fresh_vanilla_pods`）

因未成熟、腐烂、严重开裂、虫害或其他有记录的不符合项而废弃的香草荚须分别称量。

- 选定流：Rejected fresh vanilla pods
- 方向：输出（`output`）
- 流类型：产品流（`product`）
- 流属性/单位：Mass / kg
- 数量规则：按批称量废弃物并记录去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 净加工香草
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_receiving_records`
- 来源：`uf-ifas-vanilla-production`
- 数量范围：临时接收废弃筛选区间
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1000
  - 单位：kg
  - 基准：每 1,000 kg 净加工香草
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 接收时去除的香草植物残余（`vanilla_plant_debris`）

从香草荚批次去除的茎、叶及其他香草植物物质构成一项固体废物流，不与废弃香草荚合并。

- 选定流：Vanilla plant debris
- 方向：输出（`output`）
- 流类型：产品流（`product`）
- 流属性/单位：Mass / kg
- 数量规则：按批称量收集的植物残余。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 净加工香草
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_receiving_records`
- 来源：`codex-rep25-sch-vanilla`

### 过程：热水杀青/烫漂（`hot_water_killing`）

#### 输入

##### 产品流

###### 用于杀青的合格鲜荚（`killing_fresh_pod_input`）

合格鲜荚进入有记录的热水处理批次。

- 选定流：Accepted fresh vanilla pods
- 方向：输入（`input`）
- 流类型：产品流（`product`）
- 流属性/单位：Mass / kg
- 数量规则：测量批次投料质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 净加工香草
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_killing_records`
- 来源：`fao-vanilla-postharvest`; `sanchez-2008-vanilla-killing`; `budiastra-2025-vanilla-curing`

###### 杀青浴所供热水（`killing_hot_water`）

跨越过程边界的热水与电力分别记录；循环水仅在补水时计入一次，并记录其复用。

- 选定流：Hot water, 60–70 °C
- 方向：输入（`input`）
- 流类型：产品流（`product`）
- 流属性/单位：Mass / kg
- 数量规则：计量或称量杀青批次所供补充热水。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 净加工香草
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_killing_records`
- 来源：`fao-vanilla-postharvest`; `sanchez-2008-vanilla-killing`; `budiastra-2025-vanilla-curing`
- 数量范围：临时热水补水筛选区间
  - 范围角色：默认估算（`default_estimate`）
  - 下限：500
  - 上限：15000
  - 单位：kg
  - 基准：每 1,000 kg 净加工香草
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 杀青设备用电（`killing_electricity`）

泵、控制装置和直接计量电加热的电力作为一项电力交换记录；此处不得重复计入外购热水的能量。

- 选定流：Electricity, low voltage
- 方向：输入（`input`）
- 流类型：产品流（`product`）
- 流属性/单位：Energy / kWh
- 数量规则：计量杀青设备电力并扣除有记录的非路线负荷。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 净加工香草
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_killing_records`
- 来源：
- 数量范围：临时杀青电力筛选区间
  - 范围角色：默认估算（`default_estimate`）
  - 下限：0
  - 上限：500
  - 单位：kWh
  - 基准：每 1,000 kg 净加工香草
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

#### 输出

##### 产品流

###### 热水杀青香草荚（`killed_vanilla_pods`）

杀青荚在发汗前称量；也可由封闭批次质量平衡计算。

- 选定流：Hot-water-killed vanilla pods
- 方向：输出（`output`）
- 流类型：产品流（`product`）
- 流属性/单位：Mass / kg
- 数量规则：测量批次产出质量；无法立即称量时，由输入香草荚和实测持留/损失水量计算，并标记所用方法。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 净加工香草
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_killing_records`
- 来源：`sanchez-2008-vanilla-killing`

##### 废物流

###### 废杀青浴废水（`killing_wastewater`）

送处理或排放的废杀青水为独立水相废物流。

- 选定流：Wastewater from vanilla hot-water killing
- 方向：输出（`output`）
- 流类型：废物流（`waste`）
- 流属性/单位：Mass / kg
- 数量规则：计量排出的浴水，并记录目的地与处理。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 净加工香草
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_killing_records`
- 来源：

##### 基本流

###### 杀青期间蒸发水（`killing_water_to_air`）

开放热水浴向室内或室外空气损失的水与废水分别计算。

- 选定流：Water, to air
- 方向：输出（`output`）
- 流类型：基本流（`elementary`）
- 流属性/单位：Mass / kg
- 数量规则：通过水与香草荚质量平衡计算，并扣除废水和香草荚持留水。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 净加工香草
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_killing_records`
- 来源：

### 过程：发汗/熟化（`sweating_curing`）

#### 输入

##### 产品流

###### 用于发汗的杀青荚（`sweating_killed_pod_input`）

杀青荚作为单独计量的中间产品投入温暖高湿的发汗阶段。

- 选定流：Hot-water-killed vanilla pods
- 方向：输入（`input`）
- 流类型：产品流（`product`）
- 流属性/单位：Mass / kg
- 数量规则：测量进入发汗阶段的批次质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 净加工香草
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_sweating_records`
- 来源：`fao-vanilla-postharvest`; `uf-ifas-vanilla-production`; `sanchez-2008-vanilla-killing`

###### 发汗期间用电（`sweating_electricity`）

受控室、风机、传感器或增湿仅在实际使用时记录电力；有记录的被动发汗路线记录零值。

- 选定流：Electricity, low voltage
- 方向：输入（`input`）
- 流类型：产品流（`product`）
- 流属性/单位：Energy / kWh
- 数量规则：计量可归属于发汗设备的电力。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 净加工香草
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_sweating_records`
- 来源：`uf-ifas-vanilla-production`; `budiastra-2025-vanilla-curing`
- 数量范围：临时发汗电力筛选区间
  - 范围角色：默认估算（`default_estimate`）
  - 下限：0
  - 上限：1000
  - 单位：kWh
  - 基准：每 1,000 kg 净加工香草
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

#### 输出

##### 产品流

###### 发汗后香草荚（`sweated_vanilla_pods`）

完成所声明发汗程序的香草荚在分阶段干燥前称量。

- 选定流：Sweated vanilla pods
- 方向：输出（`output`）
- 流类型：产品流（`product`）
- 流属性/单位：Mass / kg
- 数量规则：测量发汗后的批次产出质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 净加工香草
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_sweating_records`
- 来源：`fao-vanilla-postharvest`; `sanchez-2008-vanilla-killing`

##### 废物流

###### 发汗期间剔除的变质香草荚（`sweating_spoiled_pods`）

发汗期间剔除的霉变、腐烂或其他不合格香草荚须分别称量并与合格荚隔离。

- 选定流：Spoiled vanilla pods from sweating
- 方向：输出（`output`）
- 流类型：废物流（`waste`）
- 流属性/单位：Mass / kg
- 数量规则：称量剔除物并记录去向和原因。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 净加工香草
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_sweating_records`
- 来源：`fao-vanilla-postharvest`
- 数量范围：临时发汗损失筛选区间
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：200
  - 单位：kg
  - 基准：每 1,000 kg 净加工香草
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

###### 发汗期间释放的水（`sweating_water_to_air`）

香草荚在发汗期间向空气排出的水分按阶段质量平衡计算。

- 选定流：Water, to air
- 方向：输出（`output`）
- 流类型：基本流（`elementary`）
- 流属性/单位：Mass / kg
- 数量规则：输入杀青荚质量减去发汗后香草荚质量、固体废弃物和收集的液体损失。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 净加工香草
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_sweating_records`
- 来源：

### 过程：分阶段干燥（`staged_drying`）

#### 输入

##### 产品流

###### 用于干燥的发汗后香草荚（`drying_sweated_pod_input`）

发汗后香草荚进入声明的日晒、太阳能辅助、环境空气或受控空气干燥序列。

- 选定流：Sweated vanilla pods
- 方向：输入（`input`）
- 流类型：产品流（`product`）
- 流属性/单位：Mass / kg
- 数量规则：测量进入分阶段干燥的批次质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 净加工香草
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_drying_records`
- 来源：`fao-vanilla-postharvest`; `uf-ifas-vanilla-production`; `budiastra-2025-vanilla-curing`

###### 干燥期间用电（`drying_electricity`）

风机、托盘干燥器、控制和除湿仅在实际使用时记录电力；被动太阳能和环境空气时段记录零值，不得与受控干燥平均。

- 选定流：Electricity, low voltage
- 方向：输入（`input`）
- 流类型：产品流（`product`）
- 流属性/单位：Energy / kWh
- 数量规则：按批计量干燥设备用电，或由分表运行小时和额定负荷分配。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 净加工香草
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_drying_records`
- 来源：`budiastra-2025-vanilla-curing`
- 数量范围：临时干燥电力筛选区间
  - 范围角色：默认估算（`default_estimate`）
  - 下限：0
  - 上限：5000
  - 单位：kWh
  - 基准：每 1,000 kg 净加工香草
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

#### 输出

##### 产品流

###### 干燥香草荚（`dried_vanilla_pods`）

完成分阶段干燥的香草荚须称量，并保留水分和柔韧性/状态观察结果。

- 选定流：Dried vanilla pods
- 方向：输出（`output`）
- 流类型：产品流（`product`）
- 流属性/单位：Mass / kg
- 数量规则：在干燥终点测量批次产出质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 净加工香草
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_drying_records`
- 来源：`fao-vanilla-postharvest`; `codex-rep25-sch-vanilla`; `budiastra-2025-vanilla-curing`

##### 废物流

###### 干燥期间剔除的香草荚（`drying_rejected_pods`）

干燥期间剔除的霉变、焦枯、脆化或其他不合格香草荚须分别称量。

- 选定流：Rejected vanilla pods from drying
- 方向：输出（`output`）
- 流类型：废物流（`waste`）
- 流属性/单位：Mass / kg
- 数量规则：称量干燥废弃物并记录原因和去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 净加工香草
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_drying_records`
- 来源：`fao-vanilla-postharvest`
- 数量范围：临时干燥废弃筛选区间
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：200
  - 单位：kg
  - 基准：每 1,000 kg 净加工香草
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

###### 干燥期间释放的水（`drying_water_to_air`）

干燥期间从香草荚移除并排放的水作为独立基本流产出计算。

- 选定流：Water, to air
- 方向：输出（`output`）
- 流类型：基本流（`elementary`）
- 流属性/单位：Mass / kg
- 数量规则：发汗后香草荚输入质量减去干燥香草荚产出、固体废弃物及任何收集的冷凝水。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 净加工香草
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_drying_records`
- 来源：

### 过程：调湿与水分均衡（`conditioning_equilibration`）

#### 输入

##### 产品流

###### 用于调湿的干燥香草荚（`conditioning_dried_pod_input`）

干燥香草荚投入声明的调湿容器或房间。

- 选定流：Dried vanilla pods
- 方向：输入（`input`）
- 流类型：产品流（`product`）
- 流属性/单位：Mass / kg
- 数量规则：测量进入调湿的质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 净加工香草
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_conditioning_records`
- 来源：`fao-vanilla-postharvest`; `uf-ifas-vanilla-production`

###### 调湿期间用电（`conditioning_electricity`）

通风、温湿度控制和监测仅在实际使用时记录电力；环境条件调湿记录零值。

- 选定流：Electricity, low voltage
- 方向：输入（`input`）
- 流类型：产品流（`product`）
- 流属性/单位：Energy / kWh
- 数量规则：在记录的停留时间内计量或分配调湿设备用电。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 净加工香草
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_conditioning_records`
- 来源：`uf-ifas-vanilla-production`
- 数量范围：临时调湿电力筛选区间
  - 范围角色：默认估算（`default_estimate`）
  - 下限：0
  - 上限：1500
  - 单位：kWh
  - 基准：每 1,000 kg 净加工香草
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

#### 输出

##### 产品流

###### 调湿后香草荚（`conditioned_vanilla_pods`）

调湿后的香草荚在声明的停留期和水分均衡后称量。

- 选定流：Conditioned vanilla pods
- 方向：输出（`output`）
- 流类型：产品流（`product`）
- 流属性/单位：Mass / kg
- 数量规则：测量批次产出质量及关联的水分结果。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 净加工香草
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_conditioning_records`
- 来源：`fao-vanilla-postharvest`; `codex-rep25-sch-vanilla`

##### 废物流

###### 调湿期间剔除的香草荚（`conditioning_rejected_pods`）

霉变或其他不合格的调湿香草荚须隔离并称量。

- 选定流：Rejected vanilla pods from conditioning
- 方向：输出（`output`）
- 流类型：废物流（`waste`）
- 流属性/单位：Mass / kg
- 数量规则：称量剔除物并记录原因和去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 净加工香草
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_conditioning_records`
- 来源：`fao-vanilla-postharvest`; `codex-rep25-sch-vanilla`
- 数量范围：临时调湿废弃筛选区间
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：100
  - 单位：kg
  - 基准：每 1,000 kg 净加工香草
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

###### 调湿期间释放的水（`conditioning_water_to_air`）

调湿期间的净水分损失与废弃香草荚质量分别计算。

- 选定流：Water, to air
- 方向：输出（`output`）
- 流类型：基本流（`elementary`）
- 流属性/单位：Mass / kg
- 数量规则：干燥香草荚输入质量减去调湿香草荚产出、固体废弃物和收集的冷凝水。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 净加工香草
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_conditioning_records`
- 来源：

### 过程：最终分拣、分级与形态选择（`grading_form_selection`）

#### 输入

##### 产品流

###### 用于分级的调湿香草荚（`grading_conditioned_pod_input`）

调湿香草荚在保留批次身份的情况下进入最终检验。

- 选定流：Conditioned vanilla pods
- 方向：输入（`input`）
- 流类型：产品流（`product`）
- 流属性/单位：Mass / kg
- 数量规则：测量进入分级的质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 净加工香草
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_grading_records`
- 来源：`fao-vanilla-postharvest`; `codex-rep25-sch-vanilla`

###### 分级设备用电（`grading_electricity`）

照明、输送机、秤或光学分选的电力在可归属该批次时记录。

- 选定流：Electricity, low voltage
- 方向：输入（`input`）
- 流类型：产品流（`product`）
- 流属性/单位：Energy / kWh
- 数量规则：计量设备电力或按运行时间分配。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 净加工香草
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_grading_records`
- 来源：

#### 输出

##### 产品流

###### 合格分级香草荚（`graded_vanilla_pods`）

满足所声明物种、形态、等级、水分和质量规格的香草荚进入选定形态路线或包装。

- 选定流：Conforming graded vanilla pods
- 方向：输出（`output`）
- 流类型：产品流（`product`）
- 流属性/单位：Mass / kg
- 数量规则：分别称量每个合格等级；在分配和披露前不得合并等级。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 净加工香草
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_grading_records`
- 来源：`codex-rep25-sch-vanilla`; `iso-5565-1-1999`

###### 可销售的低等级熟化香草荚（`saleable_offgrade_vanilla_pods`）

为声明的下游香草用途出售的低等级香草荚作为单独产品产出记录，而非废物。

- 选定流：Saleable off-grade cured vanilla pods
- 方向：输出（`output`）
- 流类型：产品流（`product`）
- 流属性/单位：Mass / kg
- 数量规则：称量可销售低等级产出，并保留等级、去向和收入记录。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 净加工香草
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_grading_records`
- 来源：`fao-vanilla-postharvest`; `codex-rep25-sch-vanilla`

##### 废物流

###### 分级时去除的香草植物外来物（`grading_extraneous_matter`）

不作为最终香草接收的植物性物质须与可销售低等级产品分别称量。

- 选定流：Extraneous vanilla-plant matter
- 方向：输出（`output`）
- 流类型：废物流（`waste`）
- 流属性/单位：Mass / kg
- 数量规则：称量最终检验期间去除的物质。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 净加工香草
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_grading_records`
- 来源：`codex-rep25-sch-vanilla`

##### 废物流

### 过程：熟化香草切段（`cutting`）

#### 输入

##### 产品流

###### 用于切段的分级香草荚（`cutting_pod_input`）

本输入仅适用于声明 `selected_product_form = cut` 的批次。

- 选定流：Conforming graded vanilla pods
- 方向：输入（`input`）
- 流类型：产品流（`product`）
- 流属性/单位：Mass / kg
- 数量规则：测量投入切段机的香草荚质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 净加工香草
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cutting_records`
- 来源：`codex-rep25-sch-vanilla`; `iso-5565-1-1999`

###### 切段用电（`cutting_electricity`）

可归属于切段设备的电力须单独记录。

- 选定流：Electricity, low voltage
- 方向：输入（`input`）
- 流类型：产品流（`product`）
- 流属性/单位：Energy / kWh
- 数量规则：计量，或根据经核实的设备负荷和运行时间计算。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 净加工香草
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cutting_records`
- 来源：

#### 输出

##### 产品流

###### 切段香草（`cut_vanilla_output`）

切段香草是该条件路线的实测主要产出。

- 选定流：Cut cured vanilla
- 方向：输出（`output`）
- 流类型：产品流（`product`）
- 流属性/单位：Mass / kg
- 数量规则：称量合格切段产品。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 净加工香草
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cutting_records`
- 来源：`codex-rep25-sch-vanilla`; `iso-5565-1-1999`

###### 切段回收的香草细屑（`cutting_recovered_fines`）

作为香草销售或内部使用的可食用捕集细屑须作为独立产品产出记录。

- 选定流：Recovered vanilla fines
- 方向：输出（`output`）
- 流类型：产品流（`product`）
- 流属性/单位：Mass / kg
- 数量规则：称量捕集的可销售细屑并记录去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 净加工香草
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cutting_records`
- 来源：

##### 废物流

###### 切段废弃香草细屑（`discarded_cutting_fines`）

不可销售且不内部复用的捕集细屑作为独立固体废物记录；不得重复计入回收产品质量。

- 选定流：Discarded vanilla fines
- 方向：输出（`output`）
- 流类型：废物流（`waste`）
- 流属性/单位：Mass / kg
- 数量规则：称量废弃细屑并记录处理或处置目的地。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 净加工香草
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cutting_records`
- 来源：

### 过程：熟化香草研磨（`grinding`）

#### 输入

##### 产品流

###### 研磨用熟化香草进料（`grinding_vanilla_input`）

本进料仅适用于声明 `selected_product_form = ground_or_powdered` 的批次。

- 选定流：Cured vanilla pods for grinding
- 方向：输入（`input`）
- 流类型：产品流（`product`）
- 流属性/单位：Mass / kg
- 数量规则：测量投入研磨机的熟化香草质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 净加工香草
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_grinding_records`
- 来源：`codex-rep25-sch-vanilla`; `iso-5565-1-1999`

###### 研磨用电（`grinding_electricity`）

研磨机、筛分和粉尘控制的电力作为一项计量电力交换记录。

- 选定流：Electricity, low voltage
- 方向：输入（`input`）
- 流类型：产品流（`product`）
- 流属性/单位：Energy / kWh
- 数量规则：计量，或根据经核实的设备负荷和运行时间计算。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 净加工香草
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_grinding_records`
- 来源：

#### 输出

##### 产品流

###### 研磨或粉末香草（`ground_vanilla_output`）

研磨或粉末香草在声明的粒径控制后称量。

- 选定流：Ground or powdered cured vanilla
- 方向：输出（`output`）
- 流类型：产品流（`product`）
- 流属性/单位：Mass / kg
- 数量规则：称量合格研磨/粉末产出。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 净加工香草
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_grinding_records`
- 来源：`codex-rep25-sch-vanilla`; `iso-5565-1-1999`

###### 捕集的香草粉尘（`grinding_captured_dust`）

由除尘器回收并回用或出售的香草粉须作为产品产出单独计量。

- 选定流：Captured vanilla powder dust
- 方向：输出（`output`）
- 流类型：产品流（`product`）
- 流属性/单位：Mass / kg
- 数量规则：称量收集的可食用粉尘并记录复用或销售。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 净加工香草
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_grinding_records`
- 来源：

##### 废物流

###### 废弃的捕集香草粉尘（`discarded_grinding_dust`）

未回用或出售的捕集粉末作为独立固体废物记录，不得与无组织空气排放合并。

- 选定流：Discarded captured vanilla powder dust
- 方向：输出（`output`）
- 流类型：废物流（`waste`）
- 流属性/单位：Mass / kg
- 数量规则：称量废弃的捕集粉末并记录处理或处置目的地。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 净加工香草
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_grinding_records`
- 来源：

##### 基本流

###### 研磨无组织颗粒物（`grinding_particulate_to_air`）

此处仅报告跨越设施边界的未捕集空气颗粒物；不得重复计入捕集粉尘。

- 选定流：Particulate matter, >10 µm, to air
- 方向：输出（`output`）
- 流类型：基本流（`elementary`）
- 流属性/单位：Mass / kg
- 数量规则：在排气处测量，或根据有记录的粉尘控制质量平衡计算。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 净加工香草
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_grinding_records`
- 来源：

### 过程：开荚及果肉/籽分离（`pod_opening`）

#### 输入

##### 产品流

###### 用于开荚的熟化香草荚（`pod_opening_input`）

本输入仅适用于声明 `selected_product_form = pulp_and_seeds` 的批次。

- 选定流：Conditioned cured vanilla pods for opening
- 方向：输入（`input`）
- 流类型：产品流（`product`）
- 流属性/单位：Mass / kg
- 数量规则：测量投入开荚/分离的熟化香草荚质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 净加工香草
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_pod_opening_records`
- 来源：`codex-rep25-sch-vanilla`

###### 开荚用电（`pod_opening_electricity`）

使用设备时记录机械开荚与分离的电力。

- 选定流：Electricity, low voltage
- 方向：输入（`input`）
- 流类型：产品流（`product`）
- 流属性/单位：Energy / kWh
- 数量规则：计量，或根据经核实的设备负荷和运行时间计算。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 净加工香草
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_pod_opening_records`
- 来源：

#### 输出

##### 产品流

###### 香草果肉与籽（`vanilla_pulp_seeds_output`）

果肉与籽不使用溶剂而以机械方式回收，并作为主要条件性产品称量。

- 选定流：Vanilla pulp and seeds
- 方向：输出（`output`）
- 流类型：产品流（`product`）
- 流属性/单位：Mass / kg
- 数量规则：称量合格果肉与籽产出。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 净加工香草
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_pod_opening_records`
- 来源：`codex-rep25-sch-vanilla`

###### 清空的熟化香草荚皮（`emptied_vanilla_pod_skins`）

保留用于销售或内部香草用途的清空荚皮是单独产品产出。

- 选定流：Emptied cured vanilla pod skins
- 方向：输出（`output`）
- 流类型：产品流（`product`）
- 流属性/单位：Mass / kg
- 数量规则：仅称量可销售或内部复用的清空荚皮并记录去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 净加工香草
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_pod_opening_records`
- 来源：

##### 废物流

###### 废弃的清空香草荚皮（`discarded_emptied_pod_skins`）

未出售或内部复用的清空荚皮作为独立固体废物记录；不得重复计入产品产出质量。

- 选定流：Discarded emptied vanilla pod skins
- 方向：输出（`output`）
- 流类型：废物流（`waste`）
- 流属性/单位：Mass / kg
- 数量规则：称量废弃清空荚皮并记录处理或处置目的地。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 净加工香草
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_pod_opening_records`
- 来源：

### 过程：包装与标签（`packaging`）

#### 输入

##### 产品流

###### 包装用完整熟化香草荚（`packaging_whole_pod_input`）

本输入仅在 `selected_product_form = whole` 时存在。

- 选定流：Whole cured vanilla pods
- 方向：输入（`input`）
- 流类型：产品流（`product`）
- 流属性/单位：Mass / kg
- 数量规则：称量进入包装线的未包装合格完整荚。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 净加工香草
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_records`
- 来源：`codex-rep25-sch-vanilla`

###### 包装用自然开裂熟化香草荚（`packaging_split_pod_input`）

本输入仅在 `selected_product_form = split` 时存在；自然开裂荚不经过切段过程。

- 选定流：Naturally split cured vanilla pods
- 方向：输入（`input`）
- 流类型：产品流（`product`）
- 流属性/单位：Mass / kg
- 数量规则：称量进入包装线的未包装合格自然开裂荚。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 净加工香草
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_records`
- 来源：`codex-rep25-sch-vanilla`

###### 包装用切段熟化香草（`packaging_cut_vanilla_input`）

本输入仅在 `selected_product_form = cut` 时存在，且为 `cutting` 的产出。

- 选定流：Cut cured vanilla
- 方向：输入（`input`）
- 流类型：产品流（`product`）
- 流属性/单位：Mass / kg
- 数量规则：称量进入包装线的未包装合格切段香草。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 净加工香草
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_records`
- 来源：`codex-rep25-sch-vanilla`

###### 包装用研磨香草粉（`packaging_ground_vanilla_input`）

本输入仅在 `selected_product_form = ground_or_powdered` 时存在，且为 `grinding` 的产出。

- 选定流：Ground vanilla powder
- 方向：输入（`input`）
- 流类型：产品流（`product`）
- 流属性/单位：Mass / kg
- 数量规则：称量进入包装线的未包装合格研磨香草粉。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 净加工香草
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_records`
- 来源：`codex-rep25-sch-vanilla`

###### 包装用香草果肉与籽（`packaging_pulp_seeds_input`）

本输入仅在 `selected_product_form = pulp_and_seeds` 时存在，且为 `pod_opening` 的产出。

- 选定流：Vanilla pulp and seeds
- 方向：输入（`input`）
- 流类型：产品流（`product`）
- 流属性/单位：Mass / kg
- 数量规则：称量进入包装线的未包装合格香草果肉与籽。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 净加工香草
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_records`
- 来源：`codex-rep25-sch-vanilla`

###### 包装用电（`packaging_electricity`）

灌装、封口、称量和贴标用电须单独记录。

- 选定流：Electricity, low voltage
- 方向：输入（`input`）
- 流类型：产品流（`product`）
- 流属性/单位：Energy / kWh
- 数量规则：计量，或按运行时间和吞吐量分配包装线电力。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 净加工香草
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_records`
- 来源：

###### 蜡纸衬里（`packaging_waxed_paper`）

仅当蜡纸是声明包装配置中的实际衬里或裹荚材料时记录。

- 选定流：Waxed paper packaging liner
- 方向：输入（`input`）
- 流类型：产品流（`product`）
- 流属性/单位：Mass / kg
- 数量规则：称量发放衬里材料减去退回未使用材料。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 净加工香草
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_records`
- 来源：`fao-vanilla-postharvest`
- 数量范围：临时蜡纸筛选区间
  - 范围角色：默认估算（`default_estimate`）
  - 下限：0
  - 上限：20
  - 单位：kg
  - 基准：每 1,000 kg 净加工香草
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 镀锡板包装容器（`packaging_tinplate_container`）

仅对实际采用金属容器的大宗或零售配置记录镀锡板容器质量。

- 选定流：Tinplate packaging container
- 方向：输入（`input`）
- 流类型：产品流（`product`）
- 流属性/单位：Mass / kg
- 数量规则：根据物料清单汇总容器皮重，或以经核实的单件质量乘以数量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 净加工香草
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_packaging_records`
- 来源：`fao-vanilla-postharvest`
- 数量范围：临时镀锡板容器筛选区间
  - 范围角色：默认估算（`default_estimate`）
  - 下限：0
  - 上限：300
  - 单位：kg
  - 基准：每 1,000 kg 净加工香草
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 瓦楞纸板箱（`packaging_paperboard_box`）

仅在使用实际外箱或直接接触纸箱时记录纸板。

- 选定流：Corrugated paperboard packaging box
- 方向：输入（`input`）
- 流类型：产品流（`product`）
- 流属性/单位：Mass / kg
- 数量规则：汇总经核实的单件质量乘以箱数。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 净加工香草
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_packaging_records`
- 来源：`fao-vanilla-postharvest`
- 数量范围：临时纸板箱筛选区间
  - 范围角色：默认估算（`default_estimate`）
  - 下限：0
  - 上限：200
  - 单位：kg
  - 基准：每 1,000 kg 净加工香草
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 聚乙烯包装袋（`packaging_polyethylene_pouch`）

仅当声明配置使用聚乙烯薄膜或预制袋时记录其质量。

- 选定流：Polyethylene packaging pouch
- 方向：输入（`input`）
- 流类型：产品流（`product`）
- 流属性/单位：Mass / kg
- 数量规则：经核实的包装袋质量乘以使用数量，再加实测薄膜边料。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 净加工香草
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_packaging_records`
- 来源：`fao-vanilla-postharvest`
- 数量范围：临时聚乙烯袋筛选区间
  - 范围角色：默认估算（`default_estimate`）
  - 下限：0
  - 上限：100
  - 单位：kg
  - 基准：每 1,000 kg 净加工香草
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 纸质包装标签（`packaging_paper_label`）

使用纸质标签时，将其作为独立包装组件记录。

- 选定流：Paper package label
- 方向：输入（`input`）
- 流类型：产品流（`product`）
- 流属性/单位：Mass / kg
- 数量规则：汇总经核实的标签质量乘以贴用数量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 净加工香草
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_packaging_records`
- 来源：`codex-rep25-sch-vanilla`

#### 输出

##### 产品流

###### 包装加工香草（`packaged_processed_vanilla`）

这是工厂大门处的净加工香草产出；参考数量不含包装质量。

- 选定流：Packaged processed vanilla, net product
- 方向：输出（`output`）
- 流类型：产品流（`product`）
- 流属性/单位：Mass / kg
- 数量规则：由实测包装毛质量减去全部包装组件质量，将归一化净产品设为 1,000 kg。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：1,000 kg 净加工香草
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_packaging_records`
- 来源：`codex-rep25-sch-vanilla`

##### 废物流

###### 废蜡纸边料（`waste_waxed_paper_offcuts`）

未进入包装的蜡纸裁边和破损衬里材料须分别称量。

- 选定流：Waste waxed-paper packaging offcuts
- 方向：输出（`output`）
- 流类型：废物流（`waste`）
- 流属性/单位：Mass / kg
- 数量规则：称量边料并记录回收或处置路线。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 净加工香草
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_records`
- 来源：

###### 废纸板边料（`waste_paperboard_offcuts`）

纸板裁边与破损纸箱应与蜡纸和塑料废物分别记录。

- 选定流：Waste corrugated paperboard offcuts
- 方向：输出（`output`）
- 流类型：废物流（`waste`）
- 流属性/单位：Mass / kg
- 数量规则：称量纸板废物并记录回收或处置路线。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 净加工香草
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_records`
- 来源：

###### 废聚乙烯薄膜（`waste_polyethylene_film`）

聚乙烯裁边和废弃包装袋作为独立塑料废物流记录。

- 选定流：Waste polyethylene packaging film
- 方向：输出（`output`）
- 流类型：废物流（`waste`）
- 流属性/单位：Mass / kg
- 数量规则：称量聚乙烯废物并记录回收或处置路线。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 净加工香草
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_records`
- 来源：

### 过程：批次可归属的设备与表面清洁（`lot_sanitation`）

#### 输入

##### 产品流

###### 清洁用工艺水（`sanitation_process_water`）

清洗食品接触设备和表面的水与热水杀青浴分别记录。

- 选定流：Potable process water
- 方向：输入（`input`）
- 流类型：产品流（`product`）
- 流属性/单位：Mass / kg
- 数量规则：计量直接清洁用水，或按有记录的清洁事件和设备面积分配共用水表。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 净加工香草
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_sanitation_records`
- 来源：`codex-rep25-sch-vanilla`
- 数量范围：临时清洁用水筛选区间
  - 范围角色：默认估算（`default_estimate`）
  - 下限：0
  - 上限：5000
  - 单位：kg
  - 基准：每 1,000 kg 净加工香草
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 清洁用氢氧化钠（`sanitation_sodium_hydroxide`）

仅当实际清洗配方含氢氧化钠时记录，并换算为 100% 活性 NaOH 质量。

- 选定流：Sodium hydroxide, 100% active substance
- 方向：输入（`input`）
- 流类型：产品流（`product`）
- 流属性/单位：Mass / kg
- 数量规则：采购配方质量 × 供应商声明的 NaOH 质量分数，并分配至该批次。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 净加工香草
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_sanitation_records`
- 来源：

###### 清洁用过氧乙酸（`sanitation_peracetic_acid`）

仅当实际消毒剂含过氧乙酸时记录，并换算为 100% 活性过氧乙酸质量。

- 选定流：Peracetic acid, 100% active substance
- 方向：输入（`input`）
- 流类型：产品流（`product`）
- 流属性/单位：Mass / kg
- 数量规则：采购配方质量 × 供应商声明的过氧乙酸质量分数，并分配至该批次。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 净加工香草
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_sanitation_records`
- 来源：

###### 清洁用电（`sanitation_electricity`）

高压冲洗、就地清洗泵或干燥用电仅在实际使用时记录。

- 选定流：Electricity, low voltage
- 方向：输入（`input`）
- 流类型：产品流（`product`）
- 流属性/单位：Energy / kWh
- 数量规则：计量，或按有记录的运行时间分配清洁设备用电。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 净加工香草
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_sanitation_records`
- 来源：

#### 输出

##### 废物流

###### 清洁废水（`sanitation_wastewater`）

清洁废水与废杀青浴分别测量，并连接至其处理或排放目的地。

- 选定流：Wastewater from vanilla-processing sanitation
- 方向：输出（`output`）
- 流类型：废物流（`waste`）
- 流属性/单位：Mass / kg
- 数量规则：计量废水，或由清洁用水输入减去有记录的蒸发水和持留水计算。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 净加工香草
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_sanitation_records`
- 来源：`codex-rep25-sch-vanilla`

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_avoid_by_separation` | 全部批次与选定形态 | 首先通过物理或时间分隔物种、等级、选定形态、过程路线和生产批次来避免分配。绝不得平均完整荚、切段、粉末、果肉与籽或提取物生产。 | `iso-14044-2006` |
| `allocation_common_curing_mass` | 等级分离前的共用熟化 | 若共同生产多个可销售熟化等级且无法通过单独测量划分共用负担，则按实测调湿产品干物质质量分配共用负担；披露水分换算。 | `iso-14044-2006` |
| `allocation_value_sensitivity` | 可销售等级或荚皮/细屑共产品 | 当产品商业功能或价值存在实质差异时，以同期批次收入报告经济分配敏感性，同时保留干物质质量分配作为基准情形。 | `iso-14044-2006` |
| `allocation_waste_no_credit` | 废弃荚、残余、废水、包装废物 | 将废物处理分配给产生过程。除非明确建模有记录的回收系统和可替代产品，否则不得给予避免产品抵扣。 | `iso-14044-2006` |
| `allocation_shared_sanitation` | 共用清洁事件 | 按有记录的设备清洁时间、食品接触面积或加工吞吐量分配共用清洁；声明所选驱动因素，并在具有实质性时测试替代方案。 | `iso-14044-2006` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_receiving_records` | `fresh_pod_receiving` | `received_fresh_vanilla_pods`; `accepted_fresh_vanilla_pods`; `rejected_fresh_vanilla_pods`; `vanilla_plant_debris` | 地磅/秤及检验日志 | lot_id; species; origin; harvest_date; received_kg; rejected_kg; debris_kg; rejection_reason; disposition | 校准秤和批次检验 | kg | 每个接收批次 | 至少连续 12 个月；较短生产季则覆盖全部批次 | 范围内每个设施 | 按批汇总质量；计算合格质量；按净包装产出归一化 | 校准证书；签字检验日志；批次照片；去向记录 |
| `cp_killing_records` | `hot_water_killing` | `killing_fresh_pod_input`; `killing_hot_water`; `killing_electricity`; `killed_vanilla_pods`; `killing_wastewater`; `killing_water_to_air` | 批次表、计量表和质量平衡 | batch_id; pod_input_kg; water_makeup_kg; water_temperature_C_time_series; immersion_min; electricity_kWh; pod_output_kg; wastewater_kg; retained_water_kg | 校准秤、水表、温度记录器、计时器、电力分表 | kg; °C; min; kWh | 每个杀青批次 | 与参考产品相同期间 | 范围内每个杀青单元 | 汇总批次记录；以闭合质量平衡计算排入空气的水；拒绝负残差 | 仪表校准；记录器文件；操作员签字；质量平衡闭合 |
| `cp_sweating_records` | `sweating_curing` | `sweating_killed_pod_input`; `sweating_electricity`; `sweated_vanilla_pods`; `sweating_spoiled_pods`; `sweating_water_to_air` | 批次表及环境记录器 | lot_id; input_kg; output_kg; reject_kg; electricity_kWh; temperature_C; relative_humidity_percent; duration_h; rejection_reason | 校准秤、分表、温度/RH 记录器 | kg; kWh; °C; %; h | 每批及每个发汗周期 | 与参考产品相同期间 | 范围内每个发汗房/室 | 汇总能源与质量；时间加权条件；按质量平衡计算失水 | 校准；原始记录器导出；废弃日志；质量平衡闭合 |
| `cp_drying_records` | `staged_drying` | `drying_sweated_pod_input`; `drying_electricity`; `dried_vanilla_pods`; `drying_rejected_pods`; `drying_water_to_air` | 批次表、计量表和水分记录 | lot_id; technology; input_kg; output_kg; reject_kg; electricity_kWh; drying_hours; temperature_C; relative_humidity_percent; moisture_percent; condensate_kg | 校准秤、电力分表、环境记录器、声明的水分方法 | kg; kWh; h; °C; % | 每批及每个干燥阶段 | 与参考产品相同期间 | 范围内每个干燥器/架系统 | 被动和受控阶段保持分离；仅在声明路线内求和；计算失水 | 校准；记录器导出；水分测试；质量平衡闭合 |
| `cp_conditioning_records` | `conditioning_equilibration` | `conditioning_dried_pod_input`; `conditioning_electricity`; `conditioned_vanilla_pods`; `conditioning_rejected_pods`; `conditioning_water_to_air` | 调湿批次表 | lot_id; input_kg; output_kg; reject_kg; electricity_kWh; start_time; end_time; temperature_C; relative_humidity_percent; moisture_percent | 校准秤、分表、环境记录器、水分测试 | kg; kWh; h; °C; % | 每个调湿批次 | 与参考产品相同期间 | 范围内每个调湿房/容器 | 停留时间加权条件；按质量平衡计算失水 | 校准；记录器导出；水分结果；检验记录 |
| `cp_grading_records` | `grading_form_selection` | `grading_conditioned_pod_input`; `grading_electricity`; `graded_vanilla_pods`; `saleable_offgrade_vanilla_pods`; `grading_extraneous_matter` | 等级与收率记录 | lot_id; species; form; grade; input_kg; conforming_kg_by_grade; offgrade_kg; extraneous_matter_kg; electricity_kWh; disposition; revenue | 校准秤和有记录的等级检验 | kg; kWh; currency | 每批 | 与参考产品相同期间 | 范围内每条分级线 | 保留每个等级；输入与全部产出对账 | 校准；测试证书；等级表；销售/去向证据 |
| `cp_cutting_records` | `cutting` | `cutting_pod_input`; `cutting_electricity`; `cut_vanilla_output`; `cutting_recovered_fines`; `discarded_cutting_fines` | 生产与设备日志 | lot_id; input_kg; output_kg; recovered_fines_kg; discarded_fines_kg; electricity_kWh; particle_or_length_specification; disposition | 校准秤和分表 | kg; kWh | 每个切段形态批次 | 与参考产品相同期间 | 范围内每台切段机 | 输入、切段产出、回收细屑、废弃细屑及实测损失对账 | 校准；批次表；产品规格；去向记录 |
| `cp_grinding_records` | `grinding` | `grinding_vanilla_input`; `grinding_electricity`; `ground_vanilla_output`; `grinding_captured_dust`; `discarded_grinding_dust`; `grinding_particulate_to_air` | 生产、计量和粉尘控制日志 | lot_id; input_kg; product_kg; recovered_dust_kg; discarded_dust_kg; exhaust_dust_kg; electricity_kWh; particle_size; disposition | 校准秤、分表及排气测量或有记录的粉尘质量平衡 | kg; kWh | 每个研磨/粉末批次 | 与参考产品相同期间 | 范围内每台研磨机及粉尘控制单元 | 产品、回收粉尘、废弃粉尘和空气排放与输入对账 | 校准；批次记录；筛分结果；粉尘控制及去向证据 |
| `cp_pod_opening_records` | `pod_opening` | `pod_opening_input`; `pod_opening_electricity`; `vanilla_pulp_seeds_output`; `emptied_vanilla_pod_skins`; `discarded_emptied_pod_skins` | 生产与设备日志 | lot_id; input_kg; pulp_seeds_kg; saleable_pod_skins_kg; discarded_pod_skins_kg; electricity_kWh; pod_skin_disposition | 校准秤和分表 | kg; kWh | 每个果肉与籽批次 | 与参考产品相同期间 | 范围内每个开荚/分离单元 | 输入与果肉/籽、可销售荚皮、废弃荚皮及实测损失对账 | 校准；批次表；去向记录 |
| `cp_packaging_records` | `packaging` | `packaging_whole_pod_input`; `packaging_split_pod_input`; `packaging_cut_vanilla_input`; `packaging_ground_vanilla_input`; `packaging_pulp_seeds_input`; `packaging_electricity`; `packaging_waxed_paper`; `packaging_tinplate_container`; `packaging_paperboard_box`; `packaging_polyethylene_pouch`; `packaging_paper_label`; `packaged_processed_vanilla`; `waste_waxed_paper_offcuts`; `waste_paperboard_offcuts`; `waste_polyethylene_film` | 包装 BOM、计数、秤及计量表 | lot_id; selected_product_form; unpackaged_product_kg; gross_packed_kg; component_id; component_unit_mass_kg; component_count; trim_kg; electricity_kWh; net_product_kg | 经核实物料清单、校准秤、计数、分表 | kg; count; kWh | 每个包装批次 | 与参考产品相同期间 | 范围内每条包装线及贮存区域 | 仅启用一个形态输入和实际组件；按材料汇总；单独计算净产品 | 供应商规格；皮重核查；校准；对账 |
| `cp_sanitation_records` | `lot_sanitation` | `sanitation_process_water`; `sanitation_sodium_hydroxide`; `sanitation_peracetic_acid`; `sanitation_electricity`; `sanitation_wastewater` | 清洁事件、采购、配方、计量和分配日志 | event_id; affected_equipment; water_kg; formulation_name; formulation_kg; active_mass_fraction; electricity_kWh; wastewater_kg; allocation_driver; allocated_share | 计量表、领料记录、供应商配方证书、有记录的分配 | kg; kWh; fraction | 可归属于覆盖生产的每次清洁事件 | 与参考产品相同期间 | 覆盖批次使用的全部设备与表面 | 活性质量换算配方；共用事件仅分配一次；水量对账 | 仪表校准；供应商证书；清洁签字；分配工作表 |
| `cp_quality_records` | `grading_form_selection` | final product identity and conformance | 实验室及检验记录 | lot_id; species; selected_product_form; class_grade; moisture_percent_wet_basis; vanillin_g_per_100g_when_claimed; extraneous_matter_percent; live_insect_count; method; laboratory | 代表性取样和引用/声明的分析方法 | % w/w; g/100 g; count | 每个成品批次或有论证的抽样计划 | 与参考产品相同期间 | 范围内每个成品批次及实验室 | 不跨物种/形态/等级单元平均；将结果连接至包装批次 | 实验室报告；监管链；方法版本；取样计划 |

### 计算规则

| rule_id | 适用对象 | 公式或规则 | 输入 | 输出 | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_normalize_reference` | 每个清单行 | `normalized_amount = lot_amount / net_packaged_processed_vanilla_kg × 1000` | lot_amount; net_packaged_processed_vanilla_kg | 每 1,000 kg 参考流的数量 | — |
| `calc_accepted_fresh_pods` | 接收 | `accepted_fresh_pods_kg = received_fresh_pods_kg - rejected_fresh_pods_kg - vanilla_plant_debris_kg` | received_fresh_pods_kg; rejected_fresh_pods_kg; vanilla_plant_debris_kg | accepted_fresh_pods_kg | — |
| `calc_stage_water_loss` | 杀青、发汗、干燥、调湿 | `water_to_air_kg = input_mass_kg + water_input_kg - product_output_kg - solid_waste_kg - wastewater_or_condensate_kg`；调查负残差且不得发布。 | 阶段输入/产出质量；水输入；固体废物；废水/冷凝水 | water_to_air_kg | — |
| `calc_net_packaged_product` | 包装 | `net_packaged_processed_vanilla_kg = gross_packed_lot_kg - sum(packaging_component_mass_kg)` | 包装毛质量；各包装组件质量 | 净包装加工香草质量 | `codex-rep25-sch-vanilla` |
| `calc_fresh_to_product_ratio` | 整条路线 | `fresh_to_product_ratio = accepted_fresh_pods_kg / net_packaged_processed_vanilla_kg` | 合格鲜荚；净包装产品 | kg/kg 比率 | `fao-vanilla-postharvest` |
| `calc_active_cleaning_chemical` | 清洁化学品 | `active_chemical_kg = formulation_kg × supplier_declared_active_mass_fraction` | 配方质量；活性质量分数 | 活性 NaOH 或过氧乙酸质量 | — |
| `calc_dry_mass_allocation` | 联产可销售熟化产品 | `allocation_share_i = product_i_kg × (1 - moisture_fraction_i) / sum(product_j_kg × (1 - moisture_fraction_j))` | 产品质量；水分分数 | 干物质质量分配份额 | `iso-14044-2006` |

### 数据质量要求

| requirement_id | 适用对象 | 要求 | 证据 |
| --- | --- | --- | --- |
| `dq_identity` | 参考产品与中间产品 | 保留鲜荚至包装产品的批次连接，并声明物种、产地、选定形态、等级、水分和包装配置。 | 接收、过程、实验室和包装批次记录 |
| `dq_temporal` | 前景清单 | 全年生产时至少覆盖连续 12 个月；较短生产季须覆盖全部批次并披露生产季日期。 | 带日期原始记录和生产日历 |
| `dq_technology` | 杀青、发汗、干燥、调湿、精加工 | 报告实际设备和程序；不得将被动与受控路线或互斥形态过程混成一个无条件平均值。 | 设备清单、路线门禁、记录器导出、批次表 |
| `dq_mass_balance` | 每个质量转化过程 | 实测输入须与产品、废物、废水/冷凝水和计算失水对账；调查物料残差并披露修正。 | 签字质量平衡工作表和校准证据 |
| `dq_energy` | 电力 | 优先使用分表；否则使用经核实的设备功率 × 运行时间并披露分配。不得使用合并热能数量。 | 仪表导出或设备计算工作表 |
| `dq_atomicity` | 全部清单 | 一张卡等于一项物理或化学交换。实际使用而未在代表卡中出现的任何燃料、蒸汽、热水、制冷剂、化学品、包装组件、废物或排放，均须增加为 UUID 留空的具体原子交换，直至完成核验。 | 原子流审计及采购/排放记录 |
| `dq_quality_test` | 成品 | 使用声明的方法及物种/形态/级别规格；保留样品身份、结果、湿/干基、方法版本和实验室。 | 实验室报告和样品监管链 |
| `dq_sources` | 外部约束 | 保留来源 ID 和检索引用；绝不得将搜索摘要用作定量证据。 | 与第 11 节一致的来源登记 |
| `dq_reasoned_estimate` | 临时区间 | 在将各 `reasoned_estimate` 用作发布关键符合性区间前，以前景或经评审外部证据替换；具有实质性时测试两个边界。 | 敏感性工作表及替换状态 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validate_identity` | 前景数据包 | PCR id、参考流 UUID、物种、选定产品形态、净参考质量或生产批次缺失或不一致时失败。 | `unsd-cpc3-23928`; `codex-rep25-sch-vanilla` |
| `validate_route_chain` | 过程覆盖 | 批次未包含接收、热水杀青、发汗、分阶段干燥、调湿、分级/形态选择、包装和清洁时失败。 | `fao-vanilla-postharvest`; `sanchez-2008-vanilla-killing` |
| `validate_form_gate` | 条件过程 | 同一参考产出启用切段、研磨或开荚中的多个过程，或启用过程与 `selected_product_form` 不符时失败。 | `codex-rep25-sch-vanilla`; `iso-5565-1-1999` |
| `validate_extraction_excluded` | 边界 | 参考路线包含乙醇、其他提取溶剂、提取物、油树脂、分离香兰素或提取残余物时失败。 | `iso-5565-1-1999`; `uf-ifas-vanilla-production` |
| `validate_atomic_flows` | 清单 | 任何选定流合并多种公用工程、燃料、制冷剂、材料、化学品、包装组件、废物、废水或排放时失败。 | — |
| `validate_uuid_policy` | UUID 引用 | 第 3 节参考身份以外的清单流携带未经核验 UUID 时失败；未解决原子流名称在完成 Tiangong 精确核验前保持 UUID 留空。 | — |
| `validate_mass_balance` | 每个过程 | 负质量或无法解释的重复计数时失败；任何超出设施有记录秤不确定度的实质质量残差须标记。 | — |
| `validate_moisture_quality` | 成品 | 声明水分结果缺失，或按平均/错误的物种、形态、级别要求校验时失败；对代表性 *V. planifolia* 完整荚 Class I，要求 30–36% w/w。 | `codex-rep25-sch-vanilla` |
| `validate_pest_extraneous` | 成品 | 要求活虫计数和适用的外来物结果；引用 Codex 表对覆盖形态规定活虫为零。 | `codex-rep25-sch-vanilla` |
| `validate_packaging` | 包装 | 包装毛质量与净产品质量混淆，或启用的包装配置缺少组件级质量时失败。 | `fao-vanilla-postharvest`; `codex-rep25-sch-vanilla` |
| `validate_used_utility_coverage` | 公用工程与直接排放 | 运行或采购记录显示某燃料、蒸汽、制冷剂、清洗化学品或直接排放，但没有具体原子行和采集方法时失败。 | `iso-14044-2006` |
| `validate_source_closure` | 证据 | 规则或卡中的非空来源 ID 未出现在第 11 节，或定量外部区间缺少引用来源时失败。 | — |
| `validate_protocol_coverage` | 采集/计算行 | `collected_record` 或 `calculated_from_collection` 卡缺少匹配采集协议和必需原始字段时失败。 | — |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 加工香草及其 process/lifecyclemodel 投影的前景生产数据包。 |
| downstream_use | 经评审和发布控制后的 `secondary_dataset`; `background_dataset`。 |
| allowed_use | 对声明物种、形态、等级、水分、路线、地域、期间和包装配置的熟化及机械精加工香草开展 LCA。 |
| excluded_use | 香草提取物、油树脂、分离或合成香兰素、未加工香草、未声明的形态/路线混合物，或超出所代表技术与地域的比较声明。 |
| required_metadata | PCR id/version；参考流 UUID；物种；产地与收获事实；批次；选定形态；等级；水分/方法；杀青/发汗/干燥/调湿程序；包装 BOM；分配；地域；期间；来源 ID；数据缺口。 |
| required_quality_disclosure | 前景覆盖；质量平衡闭合；仪表与秤校准；实验室方法；路线特定零值/不适用决定；未解决 UUID；推理估算敏感性；分配敏感性；排除项。 |
| update_trigger | 新的经评审过程/收率证据；Codex 或 ISO 香草规格变化；新的杀青/干燥/形态技术；包装重新设计；能源、水、损失、水分或分配发生实质变化；清单 UUID 得到解决。 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `unsd-cpc3-23928` | `official_guidance` | United Nations Statistics Division, Draft CPC Version 3.0 Explanatory Notes, code 23928, pp. 109–110. https://unstats.un.org/unsd/classifications/Meetings/UNCEISC2024_2nd/Session7_Bk2_CPC3_Exp_Notes_1Nov2024.pdf (retrieved 2026-08-13) | 分类范围：纳入加工形态，排除未加工香草。 |
| `codex-rep25-sch-vanilla` | `standard` | Codex Alimentarius Commission, REP25/SCH, Appendix III, Standard for spices derived from dried or dehydrated fruits and berries—requirements for vanilla, pp. 24–29. https://www.fao.org/fao-who-codexalimentarius/sh-proxy/fr/?lnk=1&url=https%253A%252F%252Fworkspace.fao.org%252Fsites%252Fcodex%252FMeetings%252FCX-736-08%252F%25E2%2598%2585Final%252520report%252FREP25_SCHe.pdf (retrieved 2026-08-13) | 物种与产品形态；水分/香兰素单元格；外来物与活虫；卫生；包装与标签事实；分析方法。 |
| `codex-cac49-vanilla-adoption` | `official_guidance` | Codex Alimentarius, “CAC49 / New and revised science-based standards now added to the Codex Alimentarius,” 12 July 2026. https://www.fao.org/fao-who-codexalimentarius/news-and-events/news-details/en/c/1760016/ (retrieved 2026-08-13) | 确认 CAC49 采纳香草标准文本。 |
| `iso-5565-1-1999` | `standard` | ISO 5565-1:1999, Vanilla—Part 1: Specification. https://www.iso.org/standard/22116.html (retrieved 2026-08-13) | 覆盖荚、散装、切段、粉末形态，并明确排除香草提取物。 |
| `fao-vanilla-postharvest` | `official_guidance` | Food and Agriculture Organization of the United Nations, *Vanilla: Post-harvest Operations*. https://www.fao.org/fileadmin/user_upload/inpho/docs/Post_Harvest_Compendium_-_Vanilla.pdf (retrieved 2026-08-13) | 接收、杀青、发汗、日晒/慢速干燥、调湿、分级、包装、监测及 4.5:1–6:1 鲜绿荚至调湿成品质量比。 |
| `uf-ifas-vanilla-production` | `extension_guidance` | University of Florida IFAS Extension, *Natural Vanilla Extract Production*, EP656. https://ask.ifas.ufl.edu/publication/EP656 (retrieved 2026-08-13) | 熟化阶段拆分、代表性条件、分级/水分背景、调湿/储存以及与后续乙醇提取分离。 |
| `sanchez-2008-vanilla-killing` | `literature` | Sánchez, H. A. Zavaleta, K. N. Waliszewski, and V. Sánchez (2008), “The effect of killing conditions on the structural changes in vanilla pods during the curing process,” *International Journal of Food Science & Technology* 43(8):1452–1457. https://doi.org/10.1111/j.1365-2621.2007.01691.x | 四阶段熟化链、杀青目的、热水程序以及杀青与发汗/干燥/调湿的分离。 |
| `budiastra-2025-vanilla-curing` | `literature` | Budiastra, Nelwan, and Distriani (2025), “Improvement of cured vanilla pod qualities with a combination of advanced sweating and drying methods,” *Jurnal Keteknikan Pertanian* 13(1):147–161. https://doi.org/10.19028/jtep.013.1.147-161 | 热水萎凋、发汗/干燥路线拆分、水分终点背景及技术特定时长证据。 |
| `iso-14044-2006` | `standard` | ISO 14044:2006, Environmental management—Life cycle assessment—Requirements and guidelines (confirmed current in 2022; Amendments 1 and 2 noted by ISO). https://www.iso.org/standard/38498.html (retrieved 2026-08-13) | 目标与范围、清单、分配、数据质量、报告和评审框架。 |
