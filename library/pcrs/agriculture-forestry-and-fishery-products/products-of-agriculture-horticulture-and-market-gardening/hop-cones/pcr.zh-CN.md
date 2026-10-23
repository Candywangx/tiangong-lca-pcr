---
pcr_id: pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.hop-cones
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 啤酒花球果

## 1. 范围与适用性

本 PCR 覆盖多年生受管理啤酒花园从建园至声明农场门交付的完整球果。包括建园、作物管理、收获、球果分离、清理和分级。常规路线可止于合格湿鲜球果；仅当声明交付物为干燥完整球果且干燥由报告农场或纳入的前景经营者控制时，才纳入干燥。

管理对象为支撑系统上种植的雌性 *Humulus lupulus*。人工选择性采摘与机械整蔓收获是收获活动的替代实现，其拓扑、能源、收集物料和糠屑不同。数据集必须声明路线，不得在缺少实测权重时合并互斥作业。造粒、粉碎、萃取、酿造、商户储藏、下游包装和出门运输均排除。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.hop-cones |
| classification_refs | CPC 3.0:01659 Hop cones; mapping relation: exact |
| covered_products | 农场门合格完整啤酒花球果，状态为湿鲜或路线声明的干燥完整球果 |
| excluded_products | 颗粒、粉末、萃取物、精油、酿造产品、繁殖植株、嫩芽、叶、蔓和根 |
| representative_product | 多年生受管理啤酒花园生产的可销售完整球果 |
| production_route | 多年生生产、收获、球果分离和分级；人工与机械收获作为声明的替代路线并存；干燥为条件过程 |
| market_state | 供即时使用的合格湿鲜球果，或仅在明确纳入干燥时的干燥完整球果 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 路线声明的农场门合格啤酒花球果 |
| How much | 净质量 1 kg |
| How well | 符合所报告验收规格的完整球果，不含叶、茎、糠屑和不合格球果 |
| How long or cycle | 在按有证据的生产寿命分摊建园和共享资产的模型内，一个声明的收获期 |
| reference_flow_link | reference_product_at_declared_handoff |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | Hop cones |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Mass units `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 湿鲜或干燥完整球果状态；水分或干物质基准及测试方法；品种；收获路线；收获日期或批次；地理位置；验收等级；农场门交付点；是否纳入干燥 |
| 绑定模式 | `fixed` |

所有限定信息均为必填。参考流是声明状态下的合格球果质量，不是田间作物、整蔓、收获机混合物、糠屑、不合格物或干物质。

每份前景数据包须声明实际路线、终端产品状态和交接门，保留原始称量、质量平衡及批次追溯记录。以该门的唯一交接参考输出归一化，前序工序采用实测转移数量。

唯一参考输出为 `reference_product_at_declared_handoff`，由下列实际路线在声明交接门的产品承接。原路线输出编号用于追溯实际来源和物理状态，不再分别固定为参考数量。

## 4. 计量与单位规则
| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | 参考产出 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 分级后计量合格球果净质量；扣除容器皮重并排除叶、茎、糠屑和不合格物。 |
| `moisture_state` | 湿鲜和干燥路线 | 质量分数或干物质分数 | kg/kg 或 % | 记录取样与测试方法和时间；没有批次特定水分分数时不得换算状态。 |
| `area_period_conversion` | 园地清单 | 每占地面积和期间的质量或服务 | 声明单位/ha/year | 归一化至合格产出前，把每条记录关联至园地面积、作物年份和生命周期阶段。 |
| `drying_reconciliation` | 条件干燥 | 质量 | kg | 在同一批次基准下核算湿料投入、干燥合格产出、不合格物和移除水分。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 啤酒花建园入口处已整备农业土地，种植材料、基础设施、养分、水、植保产品和能源作为投入跨越边界 |
| starting_condition_role | 多年生啤酒花园前景系统起点 |
| product_classification_scope | CPC 3.0:01659 完整啤酒花球果 |
| recursive_input_rule | 外购同类球果作为独立上游产品投入，不得重新标记为自有农场生产；种植根茎或植株是种植材料而非球果参考流 |
| upstream_dataset_requirement | 对种植材料、基础设施材料、能源、水、养分和植保产品采用可追溯上游数据集，并在建模时解析为具体 UUID |
| disclosure | 园地位置和面积、建园年份、所代表阶段、品种、棚架和灌溉配置、收获路线、湿鲜/干燥交付、干燥所有权、报告期及排除的资本品 |

### 边界规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_perennial_yard` | 园地生产 | 纳入建园、种植、棚架/支撑和灌溉基础设施、作物管理及田间排放；把各项关联至建园、生产、替换或终止期间。 | `cornell-hop-yard-2017`; `cordella-hop-lca-2026` |
| `boundary_harvest_separate` | 收获 | 独立建模收获，因为它从多年生生产中移出产物，且人工与机械路线形成不同收集状态和负荷。 | `uf-ifas-hop-harvest-2019` |
| `boundary_conditioning` | 分离与分级 | 纳入球果分离、叶和糠屑移除、分级及即时透气处置。 | `uf-ifas-hop-harvest-2019`; `penn-state-hop-production` |
| `boundary_wet_route` | 湿鲜路线 | 止于合格分级湿鲜球果；排除干燥、烘房资产和后续储藏。 | `penn-state-hop-production` |
| `boundary_dried_route` | 干燥路线 | 仅对明确声明、由前景控制的干燥完整球果交付纳入干燥；记录前状态、水分、能源、损失和后状态。 | `cornell-hop-yard-2017` |
| `boundary_rejects` | 分级与干燥 | 分开合格、降级、单次返工、不合格和糠屑状态，并记录每项去向。 | `penn-state-hop-production` |
| `boundary_downstream` | 所有路线 | 排除造粒、萃取、酿造、商户储藏、下游包装和出门运输。 | `penn-state-hop-production` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `yard_production` | 啤酒花建园与多年生生产 | required | 所有路线 | 建立并管理雌性啤酒花植株，将成熟含球果作物交付收获 | 占地公顷和作物年份，与归属窗口内合格产出核对 |
| `harvest_capture` | 收获与捕集 | required | 所有路线 | 移出球果或含球果整蔓并形成按批次索引的收集状态 | 各批次或收获期的收获投入与收集混合物 |
| `grading_handoff` | 球果分离、清理、分级和湿鲜交付 | required | 所有路线 | 分离球果并分类合格、降级、返工、不合格和糠屑状态 | 批次质量平衡 |
| `conditional_drying` | 完整球果干燥与稳定化 | conditional | 仅干燥完整球果交付 | 稳定合格湿鲜球果并交付干燥完整球果 | 批次湿料、能源、移除水分和干燥产出 |
| declared_reference_handoff | 声明交接门的产品计量 | required |  | foreground | reference_product_at_declared_handoff |

### 过程：啤酒花建园与多年生生产（`yard_production`）

该季节性过程按园地和作物年份索引。建园、未成熟、生产、替换和终止阶段保持可区分。

#### 输入
##### 产品流

资产清单必需记录：按具体材质和实测材料清单分别记录实际使用的立柱、金属丝、锚固件、支撑件、灌溉资产、安装及更换；按有记录的服务寿命及所有受益作物和过程分摊每项资产一次。不得以种植材料代替基础设施。

###### 雌性啤酒花苗木（`establishment_infrastructure`）

仅在雌性啤酒花苗木跨越声明的过程边界时记录；保留批次、物理状态、适用时的组成及实际去向。其他材料独立记录，不得将本卡用作选择器或材料集合。 建植和补植仅归属于其服务的生产期间；没有相应事件的既有种植地不得虚构此投入。
原始活动或阶段基准：声明生产寿命情景内每 1 kg 路线声明的农场门合格啤酒花球果。

- 选定流：雌性啤酒花苗木
- 流属性/单位：质量 / kg
- 数量规则：实测雌性啤酒花苗木的净数量，与关联批次和过程平衡核对后，仅归一到声明参考输出一次；保留含水率及适用的密度换算证据。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每声明的参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_yard_assets`
- 来源：`cornell-hop-yard-2017`; `cordella-hop-lca-2026`

###### 尿素肥料投入（`agricultural_nutrient_supply`）

仅当声明的过程实际使用尿素肥料时纳入此条件卡。其他实际产品或能源须各自建立单一交换，记录独立身份和实测数量；不得从本示例推定其必然使用。

- 选定流：尿素肥料
- 流属性/单位：质量 / kg 产品
- 数量规则：记录该过程和期间实际使用的尿素肥料数量；只有路线记录证明未使用时，才填零或不适用。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
原始活动或阶段基准：每占地公顷和作物年份，再归一化至同一归属期间的合格产出.

- 归一化基准：每声明的参考流
- 基准类型：作物周期（`crop_cycle`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_nutrient_inputs`

###### 磷酸一铵肥料投入（`agricultural_nutrient_supply_monoammonium_phosphate`）

仅当声明的过程实际使用磷酸一铵肥料时纳入此条件卡。其他实际产品或能源须各自建立单一交换，记录独立身份和实测数量；不得从本示例推定其必然使用。

- 选定流：磷酸一铵肥料
- 流属性/单位：质量 / kg 产品
- 数量规则：记录该过程和期间实际使用的磷酸一铵肥料数量；只有路线记录证明未使用时，才填零或不适用。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
原始活动或阶段基准：每占地公顷和作物年份，再归一化至同一归属期间的合格产出.

- 归一化基准：每声明的参考流
- 基准类型：作物周期（`crop_cycle`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_nutrient_inputs`

###### 氯化钾肥料投入（`agricultural_nutrient_supply_potassium_chloride`）

仅当声明的过程实际使用氯化钾肥料时纳入此条件卡。其他实际产品或能源须各自建立单一交换，记录独立身份和实测数量；不得从本示例推定其必然使用。

- 选定流：氯化钾肥料
- 流属性/单位：质量 / kg 产品
- 数量规则：记录该过程和期间实际使用的氯化钾肥料数量；只有路线记录证明未使用时，才填零或不适用。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
原始活动或阶段基准：每占地公顷和作物年份，再归一化至同一归属期间的合格产出.

- 归一化基准：每声明的参考流
- 基准类型：作物周期（`crop_cycle`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_nutrient_inputs`

###### 施用的牛粪肥投入（`agricultural_nutrient_supply_cattle_manure`）

仅当声明的过程实际使用施用的牛粪肥时纳入此条件卡。其他实际产品或能源须各自建立单一交换，记录独立身份和实测数量；不得从本示例推定其必然使用。

- 选定流：施用的牛粪肥
- 流属性/单位：质量 / kg 产品
- 数量规则：记录该过程和期间实际使用的施用的牛粪肥数量；只有路线记录证明未使用时，才填零或不适用。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
原始活动或阶段基准：每占地公顷和作物年份，再归一化至同一归属期间的合格产出.

- 归一化基准：每声明的参考流
- 基准类型：作物周期（`crop_cycle`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_nutrient_inputs`

###### 农业石灰石投入（`agricultural_nutrient_supply_agricultural_limestone`）

仅当声明的过程实际使用农业石灰石时纳入此条件卡。其他实际产品或能源须各自建立单一交换，记录独立身份和实测数量；不得从本示例推定其必然使用。

- 选定流：农业石灰石
- 流属性/单位：质量 / kg 产品
- 数量规则：记录该过程和期间实际使用的农业石灰石数量；只有路线记录证明未使用时，才填零或不适用。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
原始活动或阶段基准：每占地公顷和作物年份，再归一化至同一归属期间的合格产出.

- 归一化基准：每声明的参考流
- 基准类型：作物周期（`crop_cycle`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_nutrient_inputs`

###### 灌溉水（`irrigation_water`）

本卡记录该流跨越所述过程边界的情况，并使其数量与声明的批次、期间或路线保持关联。


- 选定流：灌溉水
- 流属性/单位：体积 / m3
- 数量规则：按地块和日期计量或计算输送水量；降雨不是供应的产品流。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
原始活动或阶段基准：每占地公顷和灌溉周，再归一化至作物年份合格产出.

- 归一化基准：每声明的参考流
- 基准类型：作物周期（`crop_cycle`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_yard_operations`
- 来源：`penn-state-hop-production`
- 数量范围：来源支持的每周灌溉背景范围
  - 范围角色：典型范围（`typical_range`）
  - 下限：254
  - 上限：508
  - 单位：m3/ha/week
  - 基准：一个灌溉周内每公顷输送 1 至 2 英寸水
  - 基准类型：作物周期（`crop_cycle`）
  - 证据类型：外部来源（`external_source`）
  - 来源：`penn-state-hop-production`

作物保护必需记录：完成前景数据包前，逐项列明实际施用的每一种制剂，保留商品名、有效成分、盐或化学形态、浓度、必要时的密度、施用量、日期和处理面积。每项交换选用一个物理上明确的产品身份；有效成分释放按物质及接收区室另行计算。缺少配方身份属于完整性缺口，不得用通用农药、虚构示例或假定为零替代。

###### 中压电力投入（`field_energy`）

仅当声明的过程实际使用中压电力时纳入此条件卡。其他实际产品或能源须各自建立单一交换，记录独立身份和实测数量；不得从本示例推定其必然使用。

- 选定流：中压电力
- 流属性/单位：能量 / kWh
- 数量规则：记录该过程和期间实际使用的中压电力数量；只有路线记录证明未使用时，才填零或不适用。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
原始活动或阶段基准：每占地公顷和作物年份，再归一化至合格产出.

- 归一化基准：每声明的参考流
- 基准类型：作物周期（`crop_cycle`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_yard_operations`

###### 柴油投入（`field_energy_diesel`）

仅当声明的过程实际使用柴油时纳入此条件卡。其他实际产品或能源须各自建立单一交换，记录独立身份和实测数量；不得从本示例推定其必然使用。

- 选定流：柴油
- 流属性/单位：质量 / kg
- 数量规则：记录该过程和期间实际使用的柴油数量；只有路线记录证明未使用时，才填零或不适用。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
原始活动或阶段基准：每占地公顷和作物年份，再归一化至合格产出.

- 归一化基准：每声明的参考流
- 基准类型：作物周期（`crop_cycle`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_yard_operations`

##### 废物流

##### 基本流

#### 输出
##### 产品流

###### 交付收获的成熟含球果作物（`mature_crop_handoff`）

本卡记录该流跨越所述过程边界的情况，并使其数量与声明的批次、期间或路线保持关联。


- 选定流：收获接口处成熟含球果整蔓或选择性采摘球果
- 流属性/单位：质量 / kg
- 数量规则：按路线一致地计量收获湿物料，并关联园地、品种和批次。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
原始活动或阶段基准：每 1 kg 路线声明的农场门合格啤酒花球果.

- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_harvest_balance`
- 来源：`uf-ifas-hop-harvest-2019`
- 数量范围：暂定作物交付比例
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：1
  - 上限：50
  - 单位：kg wet harvested material/kg accepted hop cones
  - 基准：每 1 kg 合格产出跨越收获接口的物料
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

###### 田间残余物和未收集损失（`field_residues_losses`）

本卡记录该流跨越所述过程边界的情况，并使其数量与声明的批次、期间或路线保持关联。


- 选定流：留在田间或未收集的修剪物、叶、废蔓和球果
- 流属性/单位：质量 / kg
- 数量规则：分别记录每种状态和去向，并从合格产品中排除。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
原始活动或阶段基准：每 1 kg 路线声明的农场门合格啤酒花球果.

- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_harvest_balance`
- 数量范围：暂定残余与损失校验范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：50
  - 单位：kg wet residue/kg accepted hop cones
  - 基准：每 1 kg 合格产出的已报告残余和损失
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

#### 输出

##### 基本流

###### 向空气排放的一氧化二氮（`direct_field_emissions`）

条件性单物质交换：仅在实际路线和记录证明使用或排放向空气排放的一氧化二氮时纳入。其他产品、燃料、废物或排放物种须分别建立原子清单行，独立记录数量、状态和身份；不得从示例推定必然使用。

- 选定流：向空气排放的一氧化二氮
- 流属性/单位：质量 / kg N2O
- 数量规则：依据实际路线记录，仅计量或计算本过程与期间的向空气排放的一氧化二氮；不得混合其他物种或能源。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
原始活动或阶段基准：每占地公顷和作物年份，再归一化至合格产出.

- 归一化基准：每声明的参考流
- 基准类型：作物周期（`crop_cycle`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_field_emissions`

### 过程：收获与捕集（`harvest_capture`）

田间人工采摘、室内人工采摘和机械剥离是按批次索引的替代实例。投入、产出、清洗和换型事件仅归属于实际实例一次。

#### 输入
##### 产品流

###### 中压电力（`harvest_energy`）

仅在本过程实际使用中压电力时纳入本交换；其他实际载能体各自独立记录。采购作业服务时保留供应商边界，服务中已包含的燃料或电力不得再次计入。
原始活动或阶段基准：每 kg 交付分离的物料。

- 选定流：中压电力
- 流属性/单位：能量 / kWh
- 数量规则：计量本过程和期间实际使用的中压电力，仅归一到声明参考输出一次；必要时使用有记录的密度、热值或仪表约定换算载能体原始单位。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每声明的参考流
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_harvest_operations`
- 来源：`uf-ifas-hop-harvest-2019`

###### 柴油（`harvest_energy_diesel`）

仅在本过程实际使用柴油时纳入本交换；其他实际载能体各自独立记录。采购作业服务时保留供应商边界，服务中已包含的燃料或电力不得再次计入。
原始活动或阶段基准：每 kg 交付分离的物料。

- 选定流：柴油
- 流属性/单位：质量 / kg
- 数量规则：计量本过程和期间实际使用的柴油，仅归一到声明参考输出一次；必要时使用有记录的密度、热值或仪表约定换算载能体原始单位。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每声明的参考流
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_harvest_operations`
- 来源：`uf-ifas-hop-harvest-2019`

##### 废物流

##### 基本流

#### 输出
##### 产品流

###### 收集的收获混合物（`collected_harvest_mixture`）

本卡记录该流跨越所述过程边界的情况，并使其数量与声明的批次、期间或路线保持关联。


- 选定流：选择性采摘湿鲜球果或机械收集的球果、叶和茎混合物
- 流属性/单位：质量 / kg
- 数量规则：分离前称重并声明物理状态和收获路线。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
原始活动或阶段基准：每 1 kg 路线声明的农场门合格啤酒花球果.

- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_harvest_balance`
- 来源：`uf-ifas-hop-harvest-2019`
- 数量范围：暂定收集混合物比例
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：1
  - 上限：30
  - 单位：kg wet mixture/kg accepted hop cones
  - 基准：每 1 kg 合格产出交付分离的收集物料
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

###### 收获损失和伴随物料（`harvest_losses`）

本卡记录该流跨越所述过程边界的情况，并使其数量与声明的批次、期间或路线保持关联。


- 选定流：切蔓、放蔓、移动或采摘期间损失或在分离交付前移除的物料
- 流属性/单位：质量 / kg
- 数量规则：核对收获投入和收集产出，并记录去向或田间留存。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：路线特定（`route_specific`）
原始活动或阶段基准：每 kg 收获投入.

- 归一化基准：每声明的参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_harvest_balance`
- 数量范围：暂定收获损失分数
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.5
  - 单位：kg/kg harvest input
  - 基准：损失和伴随物料质量除以收获投入质量
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

### 过程：球果分离、清理、分级和湿鲜交付（`grading_handoff`）

进入物料为声明的收获产出。所有产出均归为合格湿鲜球果、有去向的降级球果、单次返工返回、不合格球果或送往声明路线的糠屑/残余物。

#### 输入
##### 产品流

###### 中压电力（`separation_energy`）

条件性单物质交换：仅在实际路线和记录证明使用或排放中压电力时纳入。其他产品、燃料、废物或排放物种须分别建立原子清单行，独立记录数量、状态和身份；不得从示例推定必然使用。

- 选定流：中压电力
- 流属性/单位：能量 / kWh
- 数量规则：依据实际路线记录，仅计量或计算本过程与期间的中压电力；不得混合其他物种或能源。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
原始活动或阶段基准：每 kg 分离投入.

- 归一化基准：每声明的参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_grading_batch`

###### 柴油（`separation_energy_diesel`）

条件性单物质交换：仅在实际路线和记录证明使用或排放柴油时纳入。其他产品、燃料、废物或排放物种须分别建立原子清单行，独立记录数量、状态和身份；不得从示例推定必然使用。

- 选定流：柴油
- 流属性/单位：质量 / kg
- 数量规则：依据实际路线记录，仅计量或计算本过程与期间的柴油；不得混合其他物种或能源。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
原始活动或阶段基准：每 kg 分离投入.

- 归一化基准：每声明的参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_grading_batch`

##### 废物流

##### 基本流

#### 输出
##### 产品流

###### 合格湿鲜啤酒花球果（`accepted_wet_cones`）

本卡记录该流跨越所述过程边界的情况，并使其数量与声明的批次、期间或路线保持关联。


- 选定流：Hop cones `17e491b0-4419-4898-8a8b-c67b0e035470`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
原始产出计量与核对要求：分级后称量合格湿鲜球果净质量；湿鲜路线以此为参考产出，干燥路线以此为干燥投入。

- 数量规则：实测净转移质量，保留批次、实际产品状态和含水率基准；在声明交接门对账至最终参考输出。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
原始活动或阶段基准：每 1 kg 合格湿鲜啤酒花球果.

- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_grading_batch`
- 来源：`penn-state-hop-production`
- 数量范围：同阶段产出计量对账
  - 范围角色：质量检查边界（`qa_guardrail`）
  - 下限：1
  - 上限：1
  - 单位：kg/kg 同阶段净验收产出
  - 基准：同阶段称重分子与分母的计量一致性；不是阶段产率或相对最终参考输出的固定比值
  - 基准类型：过程输出（`process_output`）
  - 证据类型：方法公式（`method_formula`）
  - 来源：`mass-balance-identity`

###### 降级或可返工球果（`downgraded_cones`）

本卡记录该流跨越所述过程边界的情况，并使其数量与声明的批次、期间或路线保持关联。


- 选定流：有已记录降级、回收或单次返工去向的规格外完整球果
- 流属性/单位：质量 / kg
- 数量规则：按处置称量；把返工关联至产生批次，成功再分级前不得计为合格。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
原始活动或阶段基准：每 kg 分离投入.

- 归一化基准：每声明的参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_grading_batch`
- 数量范围：暂定降级与返工分数
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.5
  - 单位：kg/kg separation input
  - 基准：降级或可返工球果质量除以分离投入质量
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

###### 糠屑与不合格球果（`chaff_rejects`）

本卡记录该流跨越所述过程边界的情况，并使其数量与声明的批次、期间或路线保持关联。


- 选定流：分级后分离的叶、茎、糠屑和不合格球果
- 流属性/单位：质量 / kg
- 数量规则：分别称量糠屑和不合格球果并记录还田、回收、处理或处置去向；全部从合格产出排除。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
原始活动或阶段基准：每 kg 分离投入.

- 归一化基准：每声明的参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_grading_batch`
- 来源：`penn-state-hop-production`
- 数量范围：暂定糠屑与不合格分数
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.95
  - 单位：kg/kg separation input
  - 基准：糠屑和不合格球果合计质量除以分离投入质量，同时仍分别记录组成
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

### 过程：完整球果干燥与稳定化（`conditional_drying`）

湿鲜路线不启用该节点。其可用投入是合格湿鲜球果，稳定化交付物是合格干燥完整球果。能源、清洗和共享干燥机负荷仅归属实际批次或服务期一次。

#### 输入
##### 产品流

###### 供干燥的合格湿鲜球果（`wet_cones_for_drying`）

本卡记录该流跨越所述过程边界的情况，并使其数量与声明的批次、期间或路线保持关联。


- 选定流：Hop cones `17e491b0-4419-4898-8a8b-c67b0e035470`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：称量投入，并在干燥前立即测试批次水分或干物质。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
原始活动或阶段基准：每 1 kg 初始球果干物质.

- 归一化基准：每声明的参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_drying_batch`
- 来源：`cornell-hop-yard-2017`
- 数量范围：来源支持的干燥前湿质量比例
  - 范围角色：典型范围（`typical_range`）
  - 下限：3.85
  - 上限：5
  - 单位：kg wet cones/kg initial cone dry matter
  - 基准：干燥前球果干物质为 20 至 26%
  - 基准类型：过程输出（`process_output`）
  - 证据类型：外部来源（`external_source`）
  - 来源：`cornell-hop-yard-2017`

###### 中压电力投入（`drying_energy`）

仅当声明的过程实际使用中压电力时纳入此条件卡。其他实际产品或能源须各自建立单一交换，记录独立身份和实测数量；不得从本示例推定其必然使用。

- 选定流：中压电力
- 流属性/单位：能量 / kWh
- 数量规则：记录该过程和期间实际使用的中压电力数量；只有路线记录证明未使用时，才填零或不适用。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
原始活动或阶段基准：每 kg 合格干燥完整啤酒花球果.

- 归一化基准：每声明的参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_drying_batch`

###### 柴油投入（`drying_energy_diesel`）

仅当声明的过程实际使用柴油时纳入此条件卡。其他实际产品或能源须各自建立单一交换，记录独立身份和实测数量；不得从本示例推定其必然使用。

- 选定流：柴油
- 流属性/单位：质量 / kg
- 数量规则：记录该过程和期间实际使用的柴油数量；只有路线记录证明未使用时，才填零或不适用。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
原始活动或阶段基准：每 kg 合格干燥完整啤酒花球果.

- 归一化基准：每声明的参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_drying_batch`

##### 废物流

##### 基本流

#### 输出
##### 产品流

###### 合格干燥完整啤酒花球果（`accepted_dried_cones`）

本卡记录该流跨越所述过程边界的情况，并使其数量与声明的批次、期间或路线保持关联。


- 选定流：干燥完整啤酒花球果
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
原始产出计量与核对要求：在声明水分下称量干燥与最终分级后的合格完整球果；仅在干燥路线中作为参考产出。

- 数量规则：实测净转移质量，保留批次、实际产品状态和含水率基准；在声明交接门对账至最终参考输出。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
原始活动或阶段基准：每 1 kg 合格干燥完整啤酒花球果.

- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_drying_batch`
- 来源：`cornell-hop-yard-2017`
- 数量范围：同阶段产出计量对账
  - 范围角色：质量检查边界（`qa_guardrail`）
  - 下限：1
  - 上限：1
  - 单位：kg/kg 同阶段净验收产出
  - 基准：同阶段称重分子与分母的计量一致性；不是阶段产率或相对最终参考输出的固定比值
  - 基准类型：过程输出（`process_output`）
  - 证据类型：方法公式（`method_formula`）
  - 来源：`mass-balance-identity`

身份适用性：按所选实际物种/器官、播种或商品用途、鲜/调制/干燥及带壳状态、等级、供应方和声明交接点核对具体身份及Mass/kg支持。本PCR保留语义路线和计量定义，但不宣称一个固定UUID覆盖全部替代状态。鲜态流不能自动绑定调制/干燥产物，含义不清的果核/果仁流不能证明两种状态，商品籽不能证明播种种子身份。已有核验绑定仅用于其有据状态，否则明确保持UUID未决，直至详情确认。不得为强制匹配而改变产品边界、数量或路线。

##### 废物流

###### 干燥不合格物（`drying_rejects`）

本卡记录该流跨越所述过程边界的情况，并使其数量与声明的批次、期间或路线保持关联。


- 选定流：干燥后不合格且有声明去向的球果或碎片
- 流属性/单位：质量 / kg
- 数量规则：按批次称量并从合格产出排除。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
原始活动或阶段基准：每 kg 进入干燥的湿鲜球果.

- 归一化基准：每声明的参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_drying_batch`
- 数量范围：暂定干燥不合格分数
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.2
  - 单位：kg/kg wet cones entering drying
  - 基准：干燥不合格质量除以湿料投入质量
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

###### 干燥移除水分（`drying_water_to_air`）

本卡记录该流跨越所述过程边界的情况，并使其数量与声明的批次、期间或路线保持关联。


- 选定流：干燥期间由球果水分形成的空气排水
- 流属性/单位: Mass / kg water
- 数量规则：在闭合水质量控制体上确定有据蒸发量：进入材料的水 + 实际加水 + 期初水库存 - 全部合格品/联产品/拒收物/残体出口带水 - 单独液体排出/转出水 - 期末水库存。逐材料流采用实测湿质量乘湿基含水率，液体体积采用兼容密度；内部循环抵销。适用时保留实际降雨/复湿，总鲜干质量差并非全为水。各项和蒸发路径须独立有据；未解释或负平衡需调查，不能强记为水蒸气释放或截为零。水量与干物质损失及其他挥发物分开，按原匹配最终参考量归属并归一化一次。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
原始活动或阶段基准：每 kg 进入干燥的湿鲜球果.

- 归一化基准：每声明的参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_drying_batch`
- 来源：`mass-balance-identity`; `cornell-hop-yard-2017`
- 数量范围：物理水分损失分数
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1
  - 单位：kg water/kg wet cones entering drying
  - 基准：移除水分除以湿料投入质量
  - 基准类型：过程输出（`process_output`）
  - 证据类型：方法公式（`method_formula`）
  - 来源：`mass-balance-identity`


### 过程：声明边界的产品交接计量（`declared_reference_handoff`）
该节点记录既有系统边界上的实际交接数量，用于对账和参考数量归一化。它不代表新增物理工序，不自动引入干燥、冷却、储存、包装或运输。每份数据包须声明一条实际路线、一个终端产品状态、含水率或干物质基准及交接门。仅将该路线在此交接门的合格产品传入本节点；其他路线不得作为额外投入，联产品另行记录并按第 7 节处理。前序工序的投入、损失和排放只计一次。以实际交接净质量作为归一化分母；计量对账节点不改变质量、产率或分配结果。
#### 输入
##### 产品流
###### 实际路线的交接产品（`actual_route_product_for_handoff`）
记录实际终端路线交付的合格产品；与交接门称重和批次记录对账。
- 选定流：啤酒花球果
- 流属性 / 单位：质量 / kg
- 数量规则：实际交接门的实测合格产品净质量，按参考数量归一化；不得汇总前序各阶段数量，不得计入其他路线或联产品。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_declared_reference_handoff`
- 数量范围：交接数量归一化恒等式
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：1
  - 上限：1
  - 单位：kg/kg 同状态交接净质量
  - 基准：同一交接状态的实测净质量归一化；不表示物理工序的产率
  - 基准类型：过程输出（`process_output`）
  - 证据类型：方法公式（`method_formula`）
  - 来源：`declared-handoff-measurement-definition`

##### 废物流
该计量节点不产生新的废物投入。
##### 基本流
该计量节点不产生新的资源投入。
#### 输出
##### 产品流
###### 声明交接门的参考产品（`reference_product_at_declared_handoff`）
- 选定流：啤酒花球果
- 流属性 / 单位：质量 / kg
- 数量规则：1 kg
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_declared_reference_handoff`
实际状态的产品 UUID 须独立核实；当前未确认时保持待核实，不继承前序或其他路线的 UUID。
- 数量范围：交接数量归一化恒等式
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：1
  - 上限：1
  - 单位：kg/kg 同状态交接净质量
  - 基准：同一交接状态的实测净质量归一化；不表示物理工序的产率
  - 基准类型：过程输出（`process_output`）
  - 证据类型：方法公式（`method_formula`）
  - 来源：`declared-handoff-measurement-definition`

##### 废物流
实际损失已在发生工序记录；不得在此重复记录。
##### 基本流
实际排放已在发生工序记录；不得在此重复记录。

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_no_co_product_default` | 生产 | 合格球果是唯一参考产品。残余物、糠屑、不合格物和田间损失不获得避免负荷，除非有记录的有价产出要求经论证的分配。 |  |
| `allocation_productive_life` | 多年生阶段 | 在声明情景内汇总建园、未成熟、生产、替换和终止记录，并除以同期合格产出；不得重复分摊建园。 | `cordella-hop-lca-2026` |
| `allocation_shared_infrastructure` | 共享资产 | 把棚架、灌溉、收获和干燥资产关联至所有使用节点和服务期；按服务面积时间、实测使用或产能时间仅归属一次。 | `cordella-hop-lca-2026` |
| `allocation_batches` | 收获、分级与干燥 | 直接记录归入实际批次；启动、清洗和换型按实测使用、处理质量或产能时间仅分配一次。 |  |
| `allocation_rework_rejects` | 规格外状态 | 保留至产生节点的负荷。单次返工仅增加返工负荷且不是第二份合格产出；边界退出及抵扣均需去向和方法。 |  |
| `allocation_route_exclusivity` | 湿鲜与干燥路线 | 每数据集选择一个参考路线。湿鲜路线排除干燥；干燥路线仅一次纳入湿鲜球果链和干燥。 | `penn-state-hop-production` |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_residual_precedence` | 未规定主方法分支的剩余共同负担 | 本 PCR 要求研究作联产品分配决策但未规定主方法的地方，统一执行以下优先顺序；已明确规定的类别专属主方法保持有效。先直接归属可分开的产出专属作业。剩余共同负担 B 只有在实测作业或生物服务记录证明驱动量 d_i 代表因果消耗时，才采用该物理驱动。产品可称量、有价值或等级较低本身均不构成因果依据，不能在面积、时间、质量和收入间任意切换。可比等级接受相同共同搬运服务时，仅在服务需求、状态及水分基准可比且有据时采用实测处理质量。份额 a_i=d_i/sum(d_j)，B_i=B*a_i。该共同作业没有可辩护的因果物理驱动时，采用同交接点、同期间经济份额 a_i=(q_i*p_i)/sum(q_j*p_j)，纳入全部独立预期产出，匹配数量/价格单位、币种和代表性价格，使用产出专属下游加工之前的价值。缺价格或分母证据使分配结果不完整，不能把产品价格记零或改称单一产出系统。披露合计为一的份额和重要替代方法敏感性；敏感性方法不是可任意替换的主结果。废物、留存残余和内部转移不获得联产品份额，其应归属的生产/处理负担仍保留在产出可售产品的路线中。未分配物理数量和质量平衡另行保留。本分支不自动给予替代信用；单独界定的替代情景须保留总清单及实际被替代功能证据。 | `ghg-protocol-product-standard-2011` |

## 8. 前景数据采集、计算与质量规则

清单完整性：具名条件卡是单项交换示例，不是穷尽配方，也不要求使用这些产品。完成前景数据包前，逐项列出所有实际种植材料、养分产品、作物保护制剂、资产材料、作业服务、载能体、包装材料、废物流及适用的基本物质，使用明确的物理身份、状态、原始属性/单位、来源或接收区室及实测或按方法计算的数量。身份或数量缺失属于完整性缺口，不得假定为零。保留实际批次和阶段基准；不得将中间转移累加为额外最终产出，也不得重复计入采购服务已包含的负荷。

先按各采集协议保留原始场址、批次、周期及阶段数量与分母，并完成库存、损失、含水率和共产品归属核对；随后按实际归属的验收交付产品量归一化：归一化交换量 = 归属原始交换量 × 声明参考数量 / 同一边界和计量基准的验收产品量。多年生建植和共享作业先执行各自分摊规则，不得把内部转移数量设为最终参考数量。每声明的参考流指第 3 节的数量、单位和产品状态；数据包必须声明实际路线和门。


### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_yard_assets` | `yard_production` | 建园、种植和共享资产 | 发票、地图、材料表和替换日志 | yard_id; area; phase; cultivar; material_uuid; count; mass; installation_year; replacement_year; service_area; consuming_nodes; service_life | 关联至地图地块的实物清单；原始汇总与分配：在服务面积和期间仅归属一次 | count; kg; ha; year | 每次安装或替换 | 完整声明情景 | 资产和服务地块 | 每声明的参考流 | 有日期的发票、图纸、日志和照片 |
| `cp_nutrient_inputs` | `yard_production` | 所有养分产品 | 采购和施用记录 | product_uuid; name; product_mass; nutrient_analysis; dry_matter; date; block; method; treated_area | 每项实际产品/配方分开采集，保留其原子输入卡、实物产品质量、组成、供应方、施用事件和原始单位。核对库存和实际施用，分析计算养分而不重复产品交换，每个有据数量通过匹配最终合格产出归属并归一化一次。 | kg product; kg nutrient; ha | 每次施用 | 每个代表年份 | 处理地块 | 每声明的参考流 | 发票、标签和校准施用日志 |
| `cp_yard_operations` | `yard_production` | 水、植保、冠层投入和田间能源 | 仪表、施用、燃料和作业日志 | date; block; input_uuid; active_ingredient; quantity; unit; water_volume; equipment; operation; runtime | 仪表或校准施用记录；原始汇总与分配：按具体投入和年份汇总，不合并不同单位 | m3; kg; L; kWh; MJ; h | 每次作业 | 每个代表年份 | 地块和设备 | 每声明的参考流 | 校准、发票和日志 |
| `cp_field_emissions` | `yard_production` | 直接排放 | 计算输入 | input identity; nutrient or active amount; soil; weather; irrigation; incorporation; method; compartment | 应用声明的物质特定方法；原始汇总与分配：按物质和介质计算 | kg substance/ha/year | 每次施用及年度计算 | 每个代表年份 | 处理地块 | 每声明的参考流 | 完整计算表和方法版本 |
| `cp_harvest_balance` | `yard_production`; `harvest_capture` | 交付、收集物、残余和损失 | 批次票和称重日志 | lot_id; yard_id; cultivar; route; input_mass; collected_mass; residue_mass; loss; destination; timestamps | 校准称重或有记录的核算；原始汇总与分配：核对投入与唯一产出、残余和损失 | kg wet mass | 每批次 | 每次收获 | 园地和批次 | 每声明的参考流 | 校准和监管链 |
| `cp_harvest_operations` | `harvest_capture` | 能源、清洗和换型 | 燃料、仪表和机器日志 | lot_id; route; machine; carrier_uuid; quantity; runtime; event | 关联运行的仪表或载体领用记录；原始汇总与分配：共享事件仅归属一次 | L; kWh; MJ; h | 每次运行和事件 | 每次收获 | 机器和批次 | 每声明的参考流 | 仪表和运行日志 |
| `cp_grading_batch` | `grading_handoff` | 所有等级状态和能源 | 批次、称重、分级和仪表记录 | lot_id; input_mass; accepted_mass; downgraded_mass; rework_mass; reject_mass; chaff_mass; destination; moisture; carrier_uuid; energy | 校准称重、去向编码和仪表记录；原始汇总与分配：核对所有唯一状态，不重复计算返回 | kg; %; MJ | 每批次和返工 | 每次收获 | 批次和设备 | 每声明的参考流 | 校准、分级单和收据 |
| `cp_drying_batch` | `conditional_drying` | 湿料、水分、能源、干燥产出和水 | 批次单、称、含水测试和仪表 | batch_id; lot_id; wet_mass; initial_moisture; test_method; carrier_uuid; energy; temperature; duration; dried_mass; final_moisture; reject_mass ；含拒收物/残体的全部进出水；实际加水/降雨；单独液体转出；期初期末水库存；含水率及密度；有据蒸发| 按批次称量、取样水分和计量能源；原始汇总与分配：闭合干物质和总质量，能源仅归属一次 | kg; %; MJ; °C; h | 每批次 | 每次干燥路线收获 | 批次和干燥机 | 每声明的参考流 | 校准和经验证水分记录 |
| `cp_declared_reference_handoff` | declared_reference_handoff | reference_product_at_declared_handoff | 交接计量与验收记录 | route, terminal_output_row_id, product_state, gate, lot, net_mass_kg, moisture_basis, acceptance, tare | 采用校准衡器或可追溯称重记录，将实际终端工序交接批次与验收净质量、产品状态及含水率对账；剔除包装皮重，不汇总前序阶段数量。 | kg | 每交接批次 | 声明报告期 | 声明交接门 | 每声明的参考流 | 校准或称重凭证、验收和批次追溯 |
| `cp_phase1_environment_coverage` | yard_production | 按实际节点的管理环境覆盖 | 场址活动方法台账 | 实际生产节点；土壤/介质路线；气候土壤；肥料产品量及组成；残体去向及氮；相关矿化/有机土/排泄活动；方法层级方程版本；路径因子及单位；石灰尿素；实际燃料；物质/环境；供应覆盖 | 按实际负责生产节点及匹配批次/期间采集原始记录，保留来源、方法适用性和不确定性。与现有协议及供应覆盖核对，不新增重复事件；不适用须明示有据，缺少证据属于缺口。 | 适用的原生活动单位、kg N或物质、面积/时间 | 事件及年度/批次核对 | 匹配生产/队列期间 | 全部实际管理生产节点 | 执行适用覆盖核算后最终归一化一次 | 原始记录、方法工作表及适用性证据 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_productive_life` | 建园和资产 | 汇总情景内各阶段归属负荷，并除以同面积、同期间累计合格质量。 | phase, asset, area, period and accepted-output records | burden/kg accepted cones | `cordella-hop-lca-2026` |
| `calc_route_yield` | 作物年份和路线 | 农场门合格质量除以占地面积，并报告状态和水分。 | accepted mass; area; state; moisture | kg/ha/year | `penn-state-hop-production` |
| `calc_grading_balance` | 收获和分级 | 投入减去唯一的合格、降级、不合格、糠屑和损失状态；返工返回是转移。 | all lot masses and state codes | closure mass and ratio | `mass-balance-identity` |
| `calc_drying_water` | 干燥 | 在闭合水质量控制体上确定有据蒸发量：进入材料的水 + 实际加水 + 期初水库存 - 全部合格品/联产品/拒收物/残体出口带水 - 单独液体排出/转出水 - 期末水库存。逐材料流采用实测湿质量乘湿基含水率，液体体积采用兼容密度；内部循环抵销。适用时保留实际降雨/复湿，总鲜干质量差并非全为水。各项和蒸发路径须独立有据；未解释或负平衡需调查，不能强记为水蒸气释放或截为零。水量与干物质损失及其他挥发物分开，按原匹配最终参考量归属并归一化一次。 | cp_drying_batch；所有物料流的湿质量/含水率、实际加水/液体外排、期初期末水库存及有据蒸发 | kg water to air | `mass-balance-identity` |
| `chemical_species_mass_accounting` | `elementary_nutrient_emissions` | 最终基本交换使用已识别物质的质量和一个实际接收环境，养分／活动台账另存：该物种的 N2O-N × 44/28 为 N2O，NH3-N × 17/14 为 NH3，硝酸盐氮 × 62/14 为硝酸盐，磷酸盐磷 × 95/31 为磷酸盐。若选定流为元素磷，则报告 kg P，仅在物种口径有据时将磷酸盐质量乘 31/95。只有方法输出按元素计时才换算一次，实测化合物质量不得再换算。总养分损失不得无据归于单一物种，土壤残余／留存养分不是排放。保留直接／间接路径台账，不重复所选方法或上游清单已经包含的路径。因子不确定性范围只按其声明基准检查因子，不是最终化合物数量或场址排放的允许界限。用合格参考数量和匹配实测产出，将可归属化合物质量归一化一次。活动量、身份或接收环境未知时保留证据缺口，不得宣称完整。 | `cp_field_emissions`; 物种特定活动量台账、方法路径和因子基准、匹配合格产出 | 按身份区分的交换和对账活动记录 |  |

### 环境覆盖计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_managed_environment_coverage` | 实际管理生产节点 | 针对实际自主管理生产节点，逐项记录土壤直接 N2O、挥发/沉降间接 N2O、淋溶/径流间接 N2O、NH3/NOx 与养分损失，以及实际施石灰/尿素 CO2 的适用性。主核算依次采用有代表性的路径实测、经验证且适用于作物/土壤/管理的场址或国家方法；否则 N2O 与石灰/尿素 CO2 采用适用的2006 IPCC及2019修订管理土壤方程，按气候和投入类别选因子。保留确切版本、方程、层级、活动量及因子单位和气候/管理适用性，不规定通用剂量或因子。无土/设施路线须采用适用于实际介质的方法，不强套土壤因子。化肥、有机投入、残体、实际相关矿化/有机土和排泄物路径使用同一田块期间氮台账；路径不适用须证明，缺数不能填零。直接及各间接分量分别计算，逐项只分配到匹配的现有或新增具体卡一次，不将总量与组成重复相加。N2O-N 乘44/28转分子 N2O 一次。NH3、NOx及养分/农药损失采用适用实测或有据物质/去向模型；总N/P或未解释平衡差不等于某化合物释放。保留实际接收环境及分子、元素或报告口径，间接形成不能在来源台账再扣同一氮。实际本地燃烧另按燃料特定的燃烧方法记录；外购电、热和服务承接上游覆盖一次。有据释放按具体身份建卡，复用现有匹配卡，采用已核实UUID或明确未决身份。适用方法、活动量、因子或身份缺失会阻止完整性，不构成有据零值；原始活动/释放总量归属后按匹配合格参考产出归一化一次。 | cp_phase1_environment_coverage | 按匹配最终参考量的应归属原生环境数量 | `review-ipcc-soils-2019` |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | 参考产品 | 与固定 UUID 一并保留品种、状态、等级、水分、收获日期和交付。 | 批次规格 |
| `dq_temporal` | 多年生系统 | 覆盖声明建园和生产寿命情景，或识别外推年份及替换假设。 | 多年记录 |
| `dq_completeness` | 清单 | 纳入建园、养分、水、植保、田间能源、基础设施、排放、收获、不合格物和条件干燥。 | 过程/协议矩阵 |
| `dq_measurement` | 质量、水和能源 | 可用时使用校准仪器，并披露估算、取样和不确定性。 | 校准和计算 |
| `dq_route` | 替代路线 | 人工/机械收获及湿鲜/干燥交付保持分开，除非提供有证据的权重。 | 路线记录 |
| `dq_flow_resolution` | 投入与排放 | 实际产品投入解析为经验证 UUID；基本流保留物质和介质特异性。 | 解析记录 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validate_reference_identity` | 参考流 | 按所选实际物种/器官、播种或商品用途、鲜/调制/干燥及带壳状态、等级、供应方和声明交接点核对具体身份及Mass/kg支持。本PCR保留语义路线和计量定义，但不宣称一个固定UUID覆盖全部替代状态。鲜态流不能自动绑定调制/干燥产物，含义不清的果核/果仁流不能证明两种状态，商品籽不能证明播种种子身份。已有核验绑定仅用于其有据状态，否则明确保持UUID未决，直至详情确认。不得为强制匹配而改变产品边界、数量或路线。 |  |
| `validate_route_exclusivity` | 路线 | 只允许一个湿鲜或干燥交付；湿鲜无干燥清单，干燥有一个关联干燥节点并声明父活动和路线差异。 | `penn-state-hop-production` |
| `validate_periods` | 多年期归属 | 要求阶段处理、累计产出、归属期间和证据，并拒绝重复归属。 | `cordella-hop-lca-2026` |
| `validate_shared_assets` | 共享基础设施 | 要求资产身份、使用节点和期间、服务边界、归属驱动及重复负荷检查。 |  |
| `validate_nutrient_cardinality` | 每个过程 | 分别核验每种实际交换的具体流 UUID、物理状态、流属性和单位；未确认时明确保留未解析身份。 |  |
| `validate_batch_linkage` | 收获、分级与干燥 | 投入、产出、能源、清洗和换型均需批次 ID，并拒绝重复计算共享负荷。 |  |
| `validate_mass_balance` | 收获、分级与干燥 | 在披露不确定度内核对合格、降级、返工、不合格、糠屑、损失和水分状态。 | `mass-balance-identity` |
| `validate_reject_routing` | 规格外物料 | 每项降级、返工、回收或丢弃状态具有一个产生节点和下一状态；未解决不合格物不得进入合格产出。 |  |
| `validate_drying` | 干燥路线 | 要求初/终水分、测试方法、批次质量、能源和验收状态。20–26% 初始干物质和 8–10% 目标水分仅作 QA 背景，不是通用限值。 | `cornell-hop-yard-2017` |
| `validate_ranges` | 所有流卡 | 逐条检查已提供范围的上下限、单位、基准、证据及双语一致性。任何强制界限均须有相容定量证据；无支持界限时保留实测数量并明确报告范围筛查不可用，不得编造范围或宣称该项检查完整。调查偏离，不以范围覆盖实测值。 | |
| `validate_exclusions` | 边界 | 拒绝造粒、萃取、酿造、商户储藏、下游包装和出门运输。 | `penn-state-hop-production` |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 路线声明农场门啤酒花球果的前景生产数据集 |
| downstream_use | 匹配状态、地理、品种、时间和边界后用作二手或背景数据集 |
| allowed_use | 湿鲜或干燥完整球果农场门归因建模；仅与状态和多年期归属兼容的数据集比较 |
| excluded_use | 颗粒、萃取物、酿造产品、种植材料或需要已排除下游过程的系统 |
| required_metadata | PCR id/version；固定流 UUID；地理；园地面积和建园年；归属期；品种；收获路线；状态；水分方法/结果；等级；基础设施处理；年份和来源 |
| required_quality_disclosure | 前景覆盖、估算比例、缺失年份、生产寿命假设、UUID 解析、质量平衡闭合、校准、路线权重和推理估算 |
| update_trigger | 园地配置、品种、产量、养分或灌溉制度、收获技术、基础设施寿命、干燥、交付状态、规格或证据发生实质变化 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `uf-ifas-hop-harvest-2019` | extension_guidance | University of Florida IFAS Extension, Campbell and Pearson, *Harvest Techniques for Hops (Humulus lupulus)*, ENH1314/EP578, https://doi.org/10.32473/edis-ep578-219 | 多年生/棚架背景、收获路线、分离、伴随物料和即时处理 |
| `penn-state-hop-production` | extension_guidance | Penn State Extension, *Hop Production*, https://extension.psu.edu/hop-production | 湿鲜/干燥路线、灌溉、养分管理、成熟度及叶/糠屑移除 |
| `cornell-hop-yard-2017` | extension_guidance | Cornell Hops, Weldon, Gent and Gadoury, *Five considerations before ever planting your first hop*, November 2017, https://hops.cals.cornell.edu/grower-resources/five-considerations-before-ever-planting-your-first-hop/ | 永久园地、建园、共享设备、初始干物质及干燥终点背景 |
| `cordella-hop-lca-2026` | literature | Cordella et al., *Uncovering the environmental burden of hops: a spatially resolved agricultural LCA for modern beer supply chains*, International Journal of Life Cycle Assessment (2026), https://doi.org/10.1007/s11367-026-02651-y | 农场门过程覆盖、建园、棚架、田间作业、干燥和多年期归属 |
| `mass-balance-identity` | method_factor | 应用于批次记录的质量守恒恒等式 | 收获、分级与干燥核算及水分计算 |

| source_id | type | reference | used_for |
| --- | --- | --- | --- |
| `declared-handoff-measurement-definition` | `method_factor` | 本 PCR 第 3、6、8 节的净质量归一化定义：同一状态、同一交接门的实测净质量作为自身归一化分母，质量比为 1；交接计量不增加物理工序。 | 同阶段和交接计量恒等式；属于定义，不是实测产率、经验默认值或外部文献。 |
| `ghg-protocol-product-standard-2011` | standard | WRI/WBCSD, Product Life Cycle Accounting and Reporting Standard (2011), Chapter 9, https://ghgprotocol.org/sites/default/files/standards/Product-Life-Cycle-Accounting-Reporting-Standard_041613.pdf | 一般分配优先顺序及可比交接点经济价值基准。适用条件和明确的剩余分支是本 PCR 的方法约定；该来源不规定本产品因果系数、价格或产出数量。 |
| `review-ipcc-soils-2019` | official_guidance | IPCC 2019 Refinement, Volume 4, Chapter 11, https://www.ipcc-nggip.iges.or.jp/public/2019rf/pdf/4_Volume4/19R_V4_Ch11_Soils_N2O_CO2.pdf | 管理土壤直接/间接N2O及石灰/尿素CO2方法语境；因子须匹配实际适用性及场址活动，不是产品默认值。 |
