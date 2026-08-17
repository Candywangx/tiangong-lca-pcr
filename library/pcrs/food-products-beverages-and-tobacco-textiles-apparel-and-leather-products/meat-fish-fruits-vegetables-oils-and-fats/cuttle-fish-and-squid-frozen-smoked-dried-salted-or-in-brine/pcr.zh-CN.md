---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.cuttle-fish-and-squid-frozen-smoked-dried-salted-or-in-brine
language: zh-CN
status: candidate
content_maturity: authored_methodology
translation_status: aligned
sync_with: pcr.en-US.md
---

# 冷冻、烟熏、干制、盐腌或盐水渍墨鱼和鱿鱼

## 1. 范围与适用性

本 PCR 仅为 CPC 3.0 代码 21266 内的**干制头足类产品提供较窄的代表性方法学**。适用于食用墨鱼或鱿鱼原料进入加工场址，经预处理、采用一种已声明的干燥技术进行干燥、整理并包装，形成工厂门口的耐储存干制产品。

天工产品流 `Dried cephalopod products` 的范围窄于 CPC 完整标题。本 PCR **不**为以冷冻、烟熏、盐腌或盐水渍方式保存并销售的产品提供方法学覆盖。由于盐可能天然存在或作为配方助剂使用，必须报告盐含量；但以盐腌或盐水渍为定义性保存工序的路线不在范围内。冰衣和沥干质量通常不适用于干制路线；非零冰衣或以液体包装销售是超出范围的信号，不构成使用本 PCR 的许可。

前景边界为加工场址门到门。上游捕捞或养殖、卸货、初次冷却及进厂运输通过相连的上游数据集保持可见。配送、零售、烹调、消费及生命末期不属于前景边界。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.cuttle-fish-and-squid-frozen-smoked-dried-salted-or-in-brine |
| classification_refs | CPC 3.0：21266 — 冷冻、烟熏、干制、盐腌或盐水渍墨鱼和鱿鱼 |
| covered_products | 已声明保存方式和市场状态为干制的食用墨鱼和鱿鱼产品 |
| excluded_products | 冷冻产品；烟熏产品；盐腌产品；以盐水保存或销售的产品；没有可分离头足类记录的混合海产品；非食品产品 |
| representative_product | 干制头足类产品；CPC 21266 内范围更窄的天工代表流 |
| production_route | 接收与预处理，然后选择且仅选择一种已声明的干燥技术路线，最后整理与包装；受控日晒/露天路线与热风路线互斥，除非明确声明并实测混合路线 |
| market_state | 工厂门口合格可销售的干制产品，不含包装质量 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 提供采用已声明干制产品路线生产的可销售干制墨鱼或鱿鱼产品 |
| How much | 1 kg 合格可销售产品净质量，不含包装 |
| How well | 满足生产者声明的物种、等级、水分、盐含量、食品安全和市场规格；不是冷冻、烟熏、盐腌或盐水保存产品 |
| How long or cycle | 一个生产批次直至工厂门口；不计入货架期服务 |
| reference_flow_link | 下表定义的 1 kg 参考产品流 |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 工厂门口 1 kg 合格可销售产品净质量，不含包装 |
| 参考产品流 | Dried cephalopod products `ae437668-712c-407b-b8d5-7f3daf53040e` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 物种或声明的物种组；干制保存路线；接收时原料状态；声明的干燥技术；批次和场址；不含包装的净质量基准；按声明湿基或干基的水分含量及测试方法；盐含量或盐度及测试方法；冰衣比例声明为零或不适用；沥干质量声明为不适用；产品等级；地理和时间覆盖范围 |

构建前景数据包时，所有必需限定信息必须在元数据、过程说明、参考流备注、产品说明或等效字段中声明。非零冰衣、适用的沥干质量基准，或冷冻、烟熏、盐腌、盐水渍市场状态均不符合本代表性 PCR 的范围。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_net_mass` | 参考产品 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 归一化到工厂门口 1 kg 可销售干制产品净质量；排除包装、托盘、非产品冰衣和游离液体。 |
| `mass_state_consistency` | 所有头足类物料流 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 按实测物料状态记录湿质量，并保留水分含量和测试基准，防止干物质与湿质量平衡混用。 |
| `moisture_reporting` | 进厂、干制散装和参考产品批次 | 质量分数 | kg/kg | 报告水分含量、湿基或干基标识、采样点、方法和批次覆盖范围；转换基准时必须展示公式。 |
| `salt_glaze_drained_mass` | 参考产品 | 质量分数和质量 | kg/kg 和 kg | 报告盐含量或盐度。干制路线的冰衣应声明为零或不适用，沥干质量应声明为不适用；相反的声明会触发范围复核。 |
| `energy_carrier_separation` | 干燥公用工程 | 各能源载体能量 | kWh 或 MJ | 电力与每种热燃料或外购热量分别记录；没有记录换算且确保不重复计算时，不得合并一次燃料能量和交付热量。 |

## 5. 系统边界

| rule_id | 适用对象 | 规则 | 来源 |
| --- | --- | --- | --- |
| `boundary_foreground_operations` | 加工场址前景 | 纳入原料接收、食用部分预处理、路线特定干燥、整理、分级和包装，以及直接计量的公用工程、过程用水、不合格品、残余物、废水和场内排放。 | `codex-cxc-52-2003`; `eu-pef-2021-2279` |
| `boundary_upstream_links` | 外购投入 | 将接收的头足类原料、能源载体、水、包装和其他外购投入保留为产品流，并连接代表性上游数据集；披露地理、技术和数据年龄。 | `eu-pef-2021-2279` |
| `boundary_route_limit` | 产品适用性 | 仅适用于干制代表路线。尽管 CPC 21266 名称包含冷冻、烟熏、盐腌和盐水渍产品，这些产品仍被排除。 | `unsd-cpc-3-0-21266` |
| `boundary_downstream_exclusion` | 下游阶段 | 排除出厂配送、零售、消费者储存和烹调、消费及生命末期；研究明确扩展边界时，须单独报告新增阶段。 | `eu-pef-2021-2279` |

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 食用墨鱼或鱿鱼原料进入加工场址门口，同时声明物种组、供应商、来源、捕捞或养殖状态、接收质量、温度或保存状态、水分基准（如有）及任何先前加工 |
| starting_condition_role | 前景加工从接收开始；上游生产、卸货、初次冷却和进厂运输由相连的上游数据集表示 |
| product_classification_scope | CPC 3.0 代码 21266 分类语境，但方法学范围缩窄为仅干制头足类产品 |
| recursive_input_rule | 外购干制头足类投入保持为显式产品投入并连接上游干制产品数据集，不在本前景系统中递归再生成 |
| upstream_dataset_requirement | 为来源头足类、电力、燃料或热量、水、包装、运输和废物处理使用在地理、技术、时间上有代表性的数据集；披露替代和数据缺口 |
| disclosure | 声明干燥路线、任何混合能源拆分、原料状态、被排除的 CPC 21266 保存路线、水分和盐含量基准、净质量基准、冰衣状态、沥干质量适用性、截断、分配及全部上游数据集选择 |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `raw_material_reception_and_preparation` | 原料接收与预处理 | `required` | 对接收的头足类原料始终适用 | 前景接收、清洗、修整、切分和其他声明的食用部分预处理 | 转移到干燥的预处理头足类物料 |
| `route_specific_drying` | 路线特定干燥 | `required` | 每批选择一种路线：受控日晒/露天、热风或明确实测的混合路线 | 前景水分去除与干燥控制 | 干制散装头足类产品 |
| `finishing_and_packaging` | 整理与包装 | `required` | 对可销售包装输出始终适用 | 前景均湿、分选、分级、包装和放行 | 1 kg 合格可销售干制产品净质量 |

所有标为 `reasoned_estimate` 的范围都是有意设宽的候选阶段筛选护栏，不是生产默认值。仅当所述物料状态和技术条件匹配时适用。在本 PCR 超越候选方法学之前，须以第 8 节协议采集的批次或场址记录，或经评审的路线特定定量证据替换这些范围。

### 过程：原料接收与预处理（`raw_material_reception_and_preparation`）

#### 输入

##### 产品流

###### 接收的食用头足类原料（`received_cephalopod_material`）

记录跨越场址门口的食用墨鱼或鱿鱼原料质量和状态。保留供应商、来源、物种组、捕捞或养殖状态、先前保存方式、温度、水分基准（如有）和批次身份。

- 选定流：Received edible cephalopod material
- 流属性/单位：Mass / kg
- 数量规则：分配到已声明干制产品批次的实测接收质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格可销售干制参考产品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_reception_mass_and_state`
- 数量范围：暂定接收原料筛选护栏
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：1.0
  - 上限：10.0
  - 单位：kg/kg 参考产品
  - 基准：用于湿态或部分干燥投入的候选筛选；以批次质量平衡或经评审的物料状态证据替换
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 预处理用水（`preparation_water`）

记录因清洗、仅在进料暂时冷冻时的解冻、清洁或设备接触而跨越前景边界并归属于本批次的用水。临时解冻不使冷冻成品进入本 PCR 范围。

- 选定流：Process water
- 流属性/单位：Mass / kg
- 数量规则：实测或按批分配的用水，记录循环使用且同一水量不得重复计算
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格可销售干制参考产品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_preparation_utilities`
- 数量范围：暂定预处理用水筛选护栏
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：10
  - 单位：kg/kg 参考产品
  - 基准：适用于有水接触预处理的候选筛选；以水表、批次记录或经评审的场址证据替换
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 预处理用电（`preparation_electricity`）

记录归属于接收、清洗、切分、泵送及其他预处理设备的实测或分配电力。

- 选定流：Electricity, site supply
- 流属性/单位：Energy / kWh
- 数量规则：实测电力，或依据设备功率和运行时间计算的份额
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格可销售干制参考产品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集计算（`calculated_from_collection`）
- 采集协议：`cp_preparation_utilities`
- 数量范围：暂定预处理用电筛选护栏
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1
  - 单位：kWh/kg 参考产品
  - 基准：用于预处理设备的候选筛选；以分表数据或经评审的设备计算替换
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 预处理头足类物料（`prepared_cephalopod_material`）

分别计量残余物及其他输出后，计算转移到干燥的食用预处理物料。

- 选定流：Prepared edible cephalopod material
- 流属性/单位：Mass / kg
- 数量规则：实测转移质量；核对接收原料、残余物、废水携带固体和留存物料
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格可销售干制参考产品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_reception_mass_and_state`
- 数量范围：暂定预处理物料筛选护栏
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：1.0
  - 上限：10.0
  - 单位：kg/kg 参考产品
  - 基准：跨接收水分状态的候选筛选；以实测转移质量和成品质量替换
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

###### 预处理残余物（`preparation_residues`）

按实际去向和副产品状态记录头、内脏、皮、软甲、修整料、腐败物料或其他残余物；不得将可销售共产品列为废物。

- 选定流：Cephalopod preparation residues
- 流属性/单位：Mass / kg
- 数量规则：按去向和监管状态实测残余物质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格可销售干制参考产品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_residue_and_wastewater`
- 数量范围：暂定预处理残余物筛选护栏
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：5
  - 单位：kg/kg 参考产品
  - 基准：取决于进料预处理状态的候选筛选；以称量的残余物记录和去向证据替换
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 预处理废水（`preparation_wastewater`）

记录离开场址边界或进入场内处理的废水，包括实测或估算水量，以及接收处理数据集要求的监测负荷。

- 选定流：Wastewater from cephalopod preparation
- 流属性/单位：Mass / kg
- 数量规则：实测排水或水量平衡计算，并连接实际处理去向
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格可销售干制参考产品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集计算（`calculated_from_collection`）
- 采集协议：`cp_residue_and_wastewater`
- 数量范围：暂定废水筛选护栏
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：10
  - 单位：kg/kg 参考产品
  - 基准：适用于有水接触预处理的候选筛选；以排水计量或有记录的场址水量平衡替换
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

### 过程：路线特定干燥（`route_specific_drying`）

#### 输入

##### 产品流

###### 进入干燥的预处理头足类物料（`drying_feed`）

记录进入已声明干燥路线的实测预处理质量和水分基准。

- 选定流：Prepared edible cephalopod material
- 流属性/单位：Mass / kg
- 数量规则：实测进料质量，并记录水分含量和采样基准
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格可销售干制参考产品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_drying_batch_controls`
- 数量范围：暂定干燥进料筛选护栏
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：1.0
  - 上限：10.0
  - 单位：kg/kg 参考产品
  - 基准：跨声明进料水分状态的候选筛选；以批次进料质量和水分测试替换
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 干燥用电（`drying_electricity`）

记录归属于所选路线的风机、加热器、控制器、输送、除湿和辅助用电。受控日晒/露天干燥只纳入实测辅助用电；热风干燥纳入实测过程电力；混合路线必须披露实测拆分。

- 选定流：Electricity, site supply
- 流属性/单位：Energy / kWh
- 数量规则：路线特定实测电力，或依据设备功率与运行时间计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 合格可销售干制参考产品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集计算（`calculated_from_collection`）
- 采集协议：`cp_drying_energy`
- 数量范围：暂定干燥用电筛选护栏
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：15
  - 单位：kWh/kg 参考产品
  - 基准：仅用于已声明干燥技术的候选筛选；以路线特定电表数据或经评审的技术证据替换
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 干燥热能载体（`drying_thermal_energy`）

对热风或已声明混合干燥，分别记录每种燃料或外购热量。未加热的日晒/露天路线本行应为零或不适用；同一能量不得同时按燃料投入和交付热量计算。

- 选定流：Declared thermal fuel or purchased heat
- 流属性/单位：Energy / MJ
- 数量规则：实测载体数量，并按已披露的低位热值或交付热量基准换算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 合格可销售干制参考产品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集计算（`calculated_from_collection`）
- 采集协议：`cp_drying_energy`
- 数量范围：暂定热能筛选护栏
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：50
  - 单位：MJ/kg 参考产品
  - 基准：仅用于热风或已声明混合干燥的候选筛选；以燃料、热表和换算记录替换
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 干制散装头足类产品（`dried_bulk_product`）

记录最终分级包装前的干制散装输出，并记录水分含量、盐含量和批次身份。

- 选定流：Dried bulk cephalopod product
- 流属性/单位：Mass / kg
- 数量规则：按声明水分和盐含量基准实测干制散装质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格可销售干制参考产品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_drying_batch_controls`
- 数量范围：暂定干制散装输出筛选护栏
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：1.0
  - 上限：1.5
  - 单位：kg/kg 参考产品
  - 基准：用于包装前整理损失的候选筛选；以实测干制散装和可销售质量替换
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

###### 干燥不合格品（`drying_rejects`）

按去向记录焦化、污染、掉落或其他被拒收的干制物料；退回返工的物料须单独识别。

- 选定流：Rejected dried cephalopod material
- 流属性/单位：Mass / kg
- 数量规则：按批次、原因和去向实测不合格品质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 合格可销售干制参考产品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_drying_batch_controls`
- 数量范围：暂定干燥不合格品筛选护栏
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.5
  - 单位：kg/kg 参考产品
  - 基准：用于已声明干燥技术的候选筛选；以批次不合格品和返工记录替换
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

###### 去除到空气的水（`water_removed_to_air`）

依据实测进料和输出质量及水分含量计算蒸发水。不得把该计算水量平衡视为实测排放因子。

- 选定流：Water to air
- 流属性/单位：Mass / kg
- 数量规则：按 `calc_drying_water_loss` 的湿质量和水分平衡计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格可销售干制参考产品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集计算（`calculated_from_collection`）
- 采集协议：`cp_drying_batch_controls`
- 数量范围：暂定蒸发水筛选护栏
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：9
  - 单位：kg/kg 参考产品
  - 基准：用于以水分去除为主要质量损失的候选筛选；以批次质量和水分计算替换
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

### 过程：整理与包装（`finishing_and_packaging`）

#### 输入

##### 产品流

###### 进入整理的干制散装产品（`finishing_feed`）

记录进入均湿、分选、分级和包装且与干燥批次关联的干制散装产品。

- 选定流：Dried bulk cephalopod product
- 流属性/单位：Mass / kg
- 数量规则：与干燥批次关联的实测转移质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格可销售干制参考产品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_finished_product_release`
- 数量范围：暂定整理进料筛选护栏
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：1.0
  - 上限：1.5
  - 单位：kg/kg 参考产品
  - 基准：用于分级和包装损失的候选筛选；以实测转移和可销售质量替换
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 包装材料（`packaging_materials`）

按材料和实测质量记录一级、二级和三级包装；包装不属于 1 kg 参考产品质量。

- 选定流：Packaging materials by material type
- 流属性/单位：Mass / kg
- 数量规则：外购或领用包装质量减去有记录的退回量，再按可销售产品归一化
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格可销售干制参考产品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集计算（`calculated_from_collection`）
- 采集协议：`cp_packaging_and_finishing_utilities`
- 数量范围：暂定包装筛选护栏
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.5
  - 单位：kg/kg 参考产品
  - 基准：用于零售或散装包装的候选筛选；以物料清单和包装领用记录替换
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 整理用电（`finishing_electricity`）

记录归属于批次的均湿控制、分选、封口、打码和包装用电。

- 选定流：Electricity, site supply
- 流属性/单位：Energy / kWh
- 数量规则：实测电力，或依据设备功率和运行时间计算的份额
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格可销售干制参考产品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集计算（`calculated_from_collection`）
- 采集协议：`cp_packaging_and_finishing_utilities`
- 数量范围：暂定整理用电筛选护栏
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1
  - 单位：kWh/kg 参考产品
  - 基准：用于整理和包装设备的候选筛选；以分表或经评审的设备数据替换
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 合格可销售干制头足类产品（`reference_dried_cephalopod_product`）

这是定量参考输出。记录最终质量放行后的产品净质量，并排除全部包装。

- 选定流：Dried cephalopod products `ae437668-712c-407b-b8d5-7f3daf53040e`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：每参考流固定为 1 kg 合格可销售产品净质量
- 数值来源模式：固定值（`fixed_value`）
- 适用范围：通用（`generic`）
- 归一化基准：1 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：来源规则（`source_rule`）
- 来源：`eu-pef-2021-2279`
- 数量范围：参考流恒等值
  - 范围角色：允许范围（`allowed_range`）
  - 下限：1
  - 上限：1
  - 单位：kg
  - 基准：排除包装后的精确净参考数量
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：外部来源（`external_source`）
  - 来源：`eu-pef-2021-2279`

##### 废物流

###### 整理不合格品和包装废物（`finishing_and_packaging_waste`）

按材料和去向分别记录产品不合格品、返工转移和包装边角料；返回某过程的返工料保持为可见内部转移。

- 选定流：Finishing rejects and packaging waste by type
- 流属性/单位：Mass / kg
- 数量规则：按批次、材料、原因和去向实测废物或返工质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格可销售干制参考产品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_and_finishing_utilities`
- 数量范围：暂定整理废物筛选护栏
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.5
  - 单位：kg/kg 参考产品
  - 基准：用于分级不合格品和包装边角料的候选筛选；以称量的废物和返工记录替换
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | 来源 |
| --- | --- | --- | --- |
| `allocation_subdivide_routes` | 所有批次和路线技术 | 首先采用物理批次隔离和过程细分。不得把受控日晒/露天与热风清单或任何被排除保存路线合并为一个平均值，除非明确记录实测混合批次及能源拆分。 | `eu-pef-2021-2279` |
| `allocation_rework_and_residues` | 返工料、残余物和共产品 | 内部返工按内部转移处理，不重复承担负荷。按去向记录废物处理。如果残余物是可销售共产品，首先寻求可分离过程或物理关系；记录并论证任何剩余分配。 | `eu-pef-2021-2279` |
| `allocation_fallback` | 无法避免的共享投入或输出 | 当过程细分和合理物理关系都不能解决多功能过程时，使用同期价格进行经济分配，披露价格基准和期间并进行敏感性分析；不得静默采用该后备方法。 | `eu-pef-2021-2279` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_reception_mass_and_state` | `raw_material_reception_and_preparation` | 接收和预处理头足类质量及状态 | 批次接收和转移记录 | 批次 id；物种组；来源；捕捞或养殖状态；供应商；接收质量；预处理质量；温度；先前保存方式；水分结果及基准 | 经校准秤具以及接收和转移日志 | kg；°C；kg/kg | 每批 | 有代表性的生产期间，通常连续 12 个月；较短季节生产则覆盖完整生产期 | 每个纳入场址和生产线 | 保留批次值，再按可销售输出质量加权；不得在未披露情况下平均不相容物料状态 | 秤具校准；供应商文件；实验室方法；核对签字 |
| `cp_preparation_utilities` | `raw_material_reception_and_preparation` | 预处理水和电力 | 仪表、分表或设备日志 | 表计期初和期末；循环用水；设备功率；运行时间；批次分配动因 | 优先直接计量；否则采用有记录的工程计算 | kg 水；kWh | 每批，或至少每日并合理分配 | 与参考产品输出相同期间 | 每个纳入场址和公用工程系统 | 有记录的循环量仅扣除一次；共享用量按实测时间、质量吞吐量或其他披露动因分配 | 仪表校准；发票；设备规格；分配工作表 |
| `cp_residue_and_wastewater` | `raw_material_reception_and_preparation` | 残余物和废水 | 称量单、排放计量、处理和去向记录 | 残余物类型；质量；副产品或废物状态；去向；排水量；可用时的监测负荷 | 每批称量或核对容器；计量排水或计算场址水量平衡 | kg | 每批或每次处置 | 与生产相同期间 | 每个场址和处理路线 | 按物料状态和去向分别汇总；连接处理数据集时不得合并不同路线 | 秤具或仪表校准；转移联单；处理发票；水量平衡核对 |
| `cp_drying_batch_controls` | `route_specific_drying` | 进料、干制输出、水分、盐、不合格品及运行控制 | 批次生产和实验室记录 | 路线 id；进料和输出质量；进出料水分及基准；盐含量；时间；温度；湿度或等效控制；不合格品；返工 | 经校准秤具和有记录的测试方法；保留符合 Codex 规范的路线控制日志 | kg；kg/kg；°C；h | 每批 | 按技术路线覆盖有代表性的生产期间 | 每台干燥设备、生产线或受控干燥区域 | 各路线分开；仅汇总技术相同且产品规格相容的批次 | 秤具和传感器校准；测试报告；路线日志；放行记录 |
| `cp_drying_energy` | `route_specific_drying` | 按载体计的电力和热能 | 仪表、燃料采购与库存、热表、设备日志 | 路线 id；电量；燃料数量；低位热值；外购热量；期初期末库存；运行时间；分配动因 | 优先直接计量；核对燃料库存和发票；记录换算 | kWh；MJ；载体单位 | 每批，或至少每日并分配到批次 | 与路线特定输出相同期间 | 每台干燥设备和能源系统 | 各载体分别报告；禁止燃料和交付热量重复计算；披露混合拆分 | 仪表校准；发票；罐存核对；换算来源；分配工作表 |
| `cp_finished_product_release` | `finishing_and_packaging` | 可销售净质量和必需限定信息 | 批次放行、称量和实验室记录 | 批次 id；干制散装投入；可销售净质量；等级；水分及基准；盐含量；冰衣声明；沥干质量适用性；不合格品 | 放行前使用经校准秤具和有记录的质量测试 | kg；kg/kg | 每批 | 与纳入生产相同期间 | 每条整理线和产品规格 | 仅汇总合格可销售产品净质量；排除包装；保留产品特定水分和盐含量结果 | 秤具校准；实验室报告；放行授权；标签规格 |
| `cp_packaging_and_finishing_utilities` | `finishing_and_packaging` | 包装、整理用电和废物 | 物料清单、领用记录、仪表或设备日志、废物记录 | 包装材料和质量；退回量；电力；设备时间；产品不合格品；包装边角料；去向 | 实测领用和退回；计量或有记录的计算；废物称量 | kg；kWh | 每批或每生产日 | 与可销售输出相同期间 | 每条整理线 | 将包装净用量和公用工程份额归一化到可销售产品净质量；各材料和去向分别记录 | 供应商规格；库存核对；仪表或设备证据；废物联单 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_net_mass` | 参考产品 | 可销售产品净质量等于包装后总质量减包装和任何非产品质量。冰衣必须为零或不适用，沥干质量必须不适用；否则停止并复核范围。 | 包装后总质量；包装质量；冰衣声明；沥干质量适用性；放行状态 | kg 合格可销售干制产品净质量 | `eu-pef-2021-2279` |
| `calc_normalize_inventory` | 所有清单行 | 用批次可归属流量除以批次合格可销售产品净质量，报告每 1 kg 参考流的数量。 | 批次流量；批次可销售产品净质量 | 归一化清单数量 | `eu-pef-2021-2279` |
| `calc_drying_water_loss` | 干燥水量平衡 | 去除水量等于进料湿质量乘进料水分质量分数，减干制输出湿质量乘输出水分质量分数；先将两者统一到湿基，并分别计入取样、不合格品或转移物料。 | 进料质量和水分；干制输出质量和水分；不合格品及转移质量和水分 | kg 计算去除水量 |  |
| `calc_process_mass_balance` | 各前景过程 | 核对实测投入质量与产品、废物、转移、库存变化及计算水量输出；调查物料差异，不得强制平账。 | 全部批次质量记录；库存变化；水分结果 | 有记录的过程质量平衡残差 |  |
| `calc_route_energy` | 干燥能源 | 电力和每种热能载体分别报告。采用已披露的热值基准换算燃料，同一燃料产生的交付热量不得重复相加。 | 电表；燃料记录；热值；外购热量；混合路线拆分 | 按载体计的 kWh 和 MJ/kg 参考产品 | `eu-pef-2021-2279` |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_scope_identity` | 产品和批次身份 | 证明产品为干制墨鱼或鱿鱼，而不是冷冻、烟熏、盐腌或盐水渍产品；保留全部参考流必需限定信息。 | 产品规格；标签；批次放行；路线声明；`unsd-cpc-3-0-21266` |
| `dq_route_separation` | 干燥技术 | 保持受控日晒/露天、热风和实测混合批次可区分；披露任何混合拆分，排除混合不相容技术的路线平均值。 | 路线日志；能源记录；批次谱系 |
| `dq_measurement` | 质量、水分、盐、温度和公用工程 | 在声明采样点使用经校准仪器或有记录的方法，并保留单位、水分基准、相关检出限及换算公式。 | 校准证书；实验室报告；仪表记录；`codex-cxc-52-2003` |
| `dq_temporal_coverage` | 前景平均值 | 优先连续 12 个月；若代表季节性生产或较短生产期，应覆盖完整生产期，并披露遗漏期间、异常停机和产量加权。 | 生产日历；批次登记；覆盖计算 |
| `dq_completeness` | 前景清单 | 核对产品、残余物、废水、水和能源记录；披露缺失流、截断、替代和质量平衡残差，不得静默替换。 | 核对工作表；数据缺口登记；`eu-pef-2021-2279` |
| `dq_estimate_replacement` | 所有 `reasoned_estimate` 范围 | 推理估算只能作为候选筛选护栏。在方法学激活或数据集正常使用放行前，以协议采集的前景记录或经评审的路线特定证据替换每个被使用的估算。 | 记录到范围替换日志；评审决定；被引用的替代来源 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | 来源 |
| --- | --- | --- | --- |
| `validation_scope` | 产品适用性 | 确认输出为干制墨鱼或鱿鱼，且不存在冷冻、烟熏、盐腌和盐水渍市场路线；非零冰衣或适用的沥干质量不符合范围。 | `unsd-cpc-3-0-21266` |
| `validation_reference_flow` | 定量参考 | 确认恰好 1 kg 合格可销售产品净输出使用产品流 UUID ae437668-712c-407b-b8d5-7f3daf53040e、Mass UUID 93a60a56-a3c8-11da-a746-0800200b9a66、Units of mass UUID 93a60a57-a4c8-11da-a746-0800200c9a66 和 kg，并声明全部必需限定信息。 | `eu-pef-2021-2279` |
| `validation_route_exclusivity` | 干燥过程 | 确认每批一种技术路线。受控日晒/露天与热风组合仅允许作为明确记录且具有实测能源拆分的混合路线；不得把任何被排除保存路线平均进数据集。 |  |
| `validation_mass_and_quality` | 过程和产品记录 | 核对接收、预处理、干制散装、可销售、不合格品、残余物、废水、库存变化及计算水分损失记录；核验水分和盐含量基准并解释物料残差。 | `codex-cxc-52-2003` |
| `validation_energy` | 干燥公用工程 | 确认电力和每种热能载体分别报告，换算已披露，且燃料未与该燃料产生的热量重复计算。 | `eu-pef-2021-2279` |
| `validation_estimates` | 候选定量筛选 | 标记仍依赖 `reasoned_estimate` 的每个数值；该值为暂定值，在被采集记录或经评审的路线特定证据替换前，不能满足正常使用放行要求。 |  |
| `validation_sources_and_destinations` | 上游与废物连接 | 确认每种物料投入、能源载体、包装投入、废水、残余物、不合格品及其他废物都有已识别的来源或去向数据集，并披露替代和分配。 | `eu-pef-2021-2279` |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 面向一种已声明干制头足类产品和干燥技术的前景生产数据包 |
| downstream_use | 经评审、完整连接上游且替换所依赖推理估算后，可发布为 `secondary_dataset` 或 `background_dataset` |
| allowed_use | 对匹配所声明物种组、原料状态、干燥技术、水分、盐含量、净质量、地理和时间期间的干制墨鱼或鱿鱼产品进行工厂门口建模 |
| excluded_use | 冷冻、烟熏、盐腌或盐水渍产品；液体包装产品；具有非零冰衣的产品；没有可分离记录的混合海产品；将全部 CPC 21266 路线笼统表示 |
| required_metadata | PCR id；产品流 UUID；物种组；来源和捕捞或养殖状态；场址；期间；原料状态；干燥技术及任何混合拆分；净质量基准；水分含量及基准；盐含量；冰衣声明；沥干质量适用性；等级；分配；上游数据集；废物去向 |
| required_quality_disclosure | 数据覆盖；仪器和方法证据；批次加权；质量和能源核对；截断；替代；分配；推理估算替换状态；路线排除；不确定性和数据缺口 |
| update_trigger | 物种组成、原料状态、干燥技术或能源载体、产品水分或盐规格、包装、场址、分配、上游数据集、法规或经评审证据发生变化；任何观测值超出筛选护栏也触发复核，而非自动拒绝 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `unsd-cpc-3-0-21266` | 官方指南（`official_guidance`） | 联合国统计司，《Central Product Classification Version 3.0》，子类 21266，CPC 官方分类材料，https://unstats.un.org/unsd/classifications/Econ/cpc，检索日期 2026-08-11 | CPC 官方身份和完整分类标题；用于说明本方法学有意窄于分类标签 |
| `codex-cxc-52-2003` | 标准（`standard`） | Codex Alimentarius，CXC 52-2003，《Code of Practice for Fish and Fishery Products》，Codex 官方文本，https://www.fao.org/fao-who-codexalimentarius/codex-texts/codes-of-practice/en/，检索日期 2026-08-11 | 水产品接收、卫生加工、干燥控制、监测和产品质量记录结构；不作为定量 LCI 证据 |
| `eu-pef-2021-2279` | 官方指南（`official_guidance`） | European Commission Recommendation (EU) 2021/2279 on the use of the Environmental Footprint methods，https://eur-lex.europa.eu/eli/reco/2021/2279/oj，检索日期 2026-08-11 | 功能单位和参考流框架、清单完整性、数据质量、上游数据集连接、分配层级和披露 |
