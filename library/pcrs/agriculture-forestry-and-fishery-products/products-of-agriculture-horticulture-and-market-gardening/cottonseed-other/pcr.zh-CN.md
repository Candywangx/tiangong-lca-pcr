---
pcr_id: pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.cottonseed-other
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 其他棉籽

## 1. 范围与适用性

本 PCR 适用于棉花轧花时从籽棉中分离、在轧花厂门或农场门交付的完整带绒非播种用棉籽。由于皮棉与棉籽在轧花前不可分且均为有意联产品，边界包括棉花种植、收获、籽棉处理和轧花。数据集须声明品种、地区、作物年度、灌溉、收获方式、轧花技术、棉籽湿度、杂质、脱绒状态、储存/通风、分配方法和终点。

排除播种用棉籽、机械或化学脱绒种子、短绒、棉籽壳、油、饼粕、压榨、萃取、饲料配制和下游运输。脱绒商品须使用其他路线和身份。

## 2. 产品类别身份

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.cottonseed-other |
| classification_refs | CPC 3.0: 01432 Cottonseed, other; mapping relation: narrower |
| covered_products | 轧花分离且保留天然短绒的完整非播种用棉籽 |
| excluded_products | 播种或脱绒棉籽；皮棉、短绒、壳、油、饼粕和配合饲料 |
| representative_product | 非播种用途的轧花毛棉籽 |
| production_route | 棉花受控种植和收获、籽棉处理与清理、机械轧花分离 |
| market_state | 轧花厂门/农场门完整毛棉籽，声明湿度、杂质、储存、批次、等级和交付点 |

雨养/灌溉、机采方式、锯齿/皮辊轧花和短期通风储存属于替代路线；没有产量权重证据不得混合。

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 在轧花厂分离的完整毛绒非播种用棉籽 |
| How much | 1,000 kg 收货状态棉籽 |
| How well | 声明品种、作物年度、湿基水分、杂质、毛绒/脱绒状态、等级、储存/通风和验收规范 |
| How long or cycle | 一个匹配作物周期与轧花季或可追溯轧花批次 |
| reference_flow_link | reference_product_at_declared_handoff |

| 字段 | 值 |
| --- | --- |
| Reference amount | 1000 |
| Reference product flow | Cottonseed, other, production mix at farm gate, fresh unprocessed |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | 非播种用途；完整毛绒状态；排除脱绒；品种；作物年度；地区；湿基水分；杂质；等级；储存/通风；轧花技术；交付点；分配 |

固定 UUID 仅适用于该鲜品/未加工农场门身份下的完整非播种棉籽。

每份前景数据包须声明实际路线、终端产品状态和交接门，保留原始称量、质量平衡及批次追溯记录。以该门的唯一交接参考输出归一化，前序工序采用实测转移数量。

唯一参考输出为 `reference_product_at_declared_handoff`，由下列实际路线在声明交接门的产品承接。原路线输出编号用于追溯实际来源和物理状态，不再分别固定为参考数量。

## 4. 计量与单位规则
| rule_id | 适用对象 | 所需属性 | 所需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass_as_received` | 参考棉籽 | Mass | kg | 报告收货质量和实测湿基水分，并保留干物质换算。 |
| `field_to_seed_cotton_conversion` | 田间清单 | Area and mass | ha and kg | 先将面积与同周期验收籽棉核对，再换算至轧花批次。 |
| `gin_mass_balance` | 轧花 | Mass | kg | 核对籽棉、皮棉、棉籽、利用物、废物及水分变化。 |
| `nutrient_content_basis` | 养分投入 | Product and nutrient mass | kg product; kg N; kg P2O5; kg K2O | 保留产品、配方、含量和基准且不得重复计量。 |
| `allocation_value_basis` | 联产品 | Mass and economic value | kg and declared currency | 使用匹配数量和代表性价格，并披露质量调整和敏感性。 |

## 5. 系统边界

### 边界抽象

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 作物周期开始时已整备棉田，种子与外购投入跨越边界 |
| starting_condition_role | 受控棉花生物生产起点 |
| product_classification_scope | CPC 01432 非播种用棉籽 |
| recursive_input_rule | 播种种子链接独立种子生产数据集，不递归至本 PCR |
| upstream_dataset_requirement | 兼容的种植材料、养分、植保、灌溉、能源、水、包装和处理数据集 |
| disclosure | 地区；品种；日期；面积；产量；灌溉；收获；籽棉储存；轧花；批次平衡；水分；杂质；毛绒状态；储存；联产品价格；分配；交付点 |

### 边界规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_crop_cycle` | 种植和收获 | 包括建植、田间管理、适用灌溉、收获和直接田间排放，至籽棉交接。 | `feedipedia-cottonseed`; `ncc-seedcotton-handling` |
| `boundary_ginning` | 轧花 | 包括接收、卸料、干燥/调湿、清理、轧花分离、输送、场内通风储存和交付前处理。 | `cotton-ginners-handbook-2016`; `cottonseed-storage-2018` |
| `boundary_product_state` | 参考产品 | 参考棉籽为完整毛棉籽；排除脱绒、压榨、萃取、粕/饲料及播种种子处理。 | `feedipedia-cottonseed`; `cottonseed-storage-2018` |
| `boundary_route_alternatives` | 所有路线 | 除非有产量权重，否则种植、收获、轧花和储存替代路线分别建模。 | `cotton-ginners-handbook-2016` |
| `boundary_single_period` | 所有路线 | 每个匹配作物与轧花季仅使用一个报告期；不允许库存跨期或跨期归属。 |  |
| `boundary_direct_emissions` | 田间和轧花 | 包括与活动记录匹配的受控土壤排放和报告的轧花颗粒物。 | `ipcc-2019-managed-soils`; `cotton-ginners-handbook-2016` |

## 6. 过程清单结构

### 过程图

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `cotton_field_production` | 棉花种植与收获 | required | always | 受控生产与籽棉收获 | 公顷和验收籽棉质量 |
| `cotton_ginning` | 籽棉接收、清理与轧花 | required | always | 通过材料处理分离皮棉和棉籽；声明批次模式或连续运行以及替代技术路线差异 | 投入批次与核对输出 |
| `cottonseed_handling_storage` | 棉籽初级处理、分级、稳定化、包装与储存 | conditional | 交付前发生 | 交付前进行初级处理、分级/分选、保鲜/稳定化和包装呈现 | 投入批次与验收终端质量 |
| declared_reference_handoff | 声明交接门的产品计量 | required |  | foreground | reference_product_at_declared_handoff |

### Process: 棉花种植与收获 (`cotton_field_production`)

#### 输入
##### 产品流

###### 棉花播种用种 (`cotton_planting_seed_input`)

记录该流的实际身份、状态、数量和去向，并与同一批次或作物周期保持可追溯。

- 选定流：棉籽种子（用于种植） `5ec327e3-1046-4478-9010-0733b798aa56`
- 流属性/单位: Mass / kg
- 数量规则: measured seed mass by cultivar, treatment and sowing event
- 数值来源模式: 前景记录（`foreground_record`）
- 适用范围: 产品特定（`product_specific`）
原始活动或阶段基准：per cultivated hectare and crop cycle.

- 归一化基准：每声明的参考流
- 基准类型: 作物周期（`crop_cycle`）
- 证据类型: 采集记录（`collected_record`）
- 采集协议: `cp_field_activity`
- 数量范围：Provisional sowing-rate screen
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：2
  - 上限：40
  - 单位：kg/ha
  - 基准：one crop cycle; actual establishment system governs
  - 基准类型：作物周期（`crop_cycle`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 灌溉水 (`field_irrigation_input`)

记录该流的实际身份、状态、数量和去向，并与同一批次或作物周期保持可追溯。

- 选定流：灌溉供水
- 流属性/单位: Volume / m3
- 数量规则: metered or calculated applied irrigation water
- 数值来源模式: 前景记录（`foreground_record`）
- 适用范围: 场址特定（`site_specific`）
原始活动或阶段基准：per cultivated hectare and crop cycle.

- 归一化基准：每声明的参考流
- 基准类型: 作物周期（`crop_cycle`）
- 证据类型: 采集记录（`collected_record`）
- 采集协议: `cp_field_activity`
- 数量范围：Provisional irrigation screen
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：15000
  - 单位：m3/ha
  - 基准：one crop cycle; rainfed route may be zero
  - 基准类型：作物周期（`crop_cycle`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 柴油 (`field_energy_input_diesel`)

实际柴油田间机械进行棉花建植、照护及采收；棉花共产品按现有分配规则归属。

仅在本节点设备及采购记录确认使用此燃料时启用。记录牌号、配方、供应商及实际质量，体积按有证据的密度换算，不用默认密度。UUID标识燃料产品，不是燃烧服务或排放因子；实际前景燃烧另行计入，避免重复已含燃烧的上游服务。

- 选定流：柴油 `9d258d75-6792-4f1c-9856-81602ed8f816`
- 流属性 / 单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：按`cp_field_activity`仅采集归属本节点的该载能体数量。包含能耗的服务及共用量仅对账归属一次；归属量乘声明参考数量，再除以相同产品单位下匹配的最终合格产出数量。保留过程原生吞吐记录，不对最终参考量再次归一化。
- 数值来源模式：`calculated_value`
- 特异性：`site_specific`
- 归一化基准：per declared reference flow
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_field_activity`
- 来源：`route-energy-fao`

执行第8节`field_energy_input_identification`要求。不继承原集合卡的数值范围或默认值。

##### 废物流

##### 基本流

#### 输出
##### 产品流

###### 已收获籽棉 (`harvested_seed_cotton_output`)

记录该流的实际身份、状态、数量和去向，并与同一批次或作物周期保持可追溯。

- 选定流：轧花前已收获籽棉
- 流属性/单位: Mass / kg
- 数量规则: measured accepted mass with moisture and trash fraction
- 数值来源模式: 前景记录（`foreground_record`）
- 适用范围: 场址特定（`site_specific`）
原始活动或阶段基准：per cultivated hectare and crop cycle.

- 归一化基准：每声明的参考流
- 基准类型: 作物周期（`crop_cycle`）
- 证据类型: 采集记录（`collected_record`）
- 采集协议: `cp_harvest_balance`
- 数量范围：Provisional seed-cotton yield screen
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：300
  - 上限：10000
  - 单位：kg/ha
  - 基准：accepted as-harvested seed cotton for one crop cycle
  - 基准类型：作物周期（`crop_cycle`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

###### 田间残余物和拒收籽棉 (`field_residue_waste_output`)

记录该流的实际身份、状态、数量和去向，并与同一批次或作物周期保持可追溯。

- 选定流：棉田残余物及废弃籽棉
- 流属性/单位: Mass / kg
- 数量规则: field balance by residue class, removal and fate
- 数值来源模式: 计算值（`calculated_value`）
- 适用范围: 场址特定（`site_specific`）
原始活动或阶段基准：per hectare and crop cycle.

- 归一化基准：每声明的参考流
- 基准类型: 作物周期（`crop_cycle`）
- 证据类型: 根据采集数据计算（`calculated_from_collection`）
- 采集协议: `cp_harvest_balance`
- 数量范围：Provisional exported-residue screen
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：10000
  - 单位：kg/ha
  - 基准：material physically leaving the field boundary
  - 基准类型：作物周期（`crop_cycle`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

###### 向空气排放的一氧化二氮 (`field_n2o_air_output`)

记录该流的实际身份、状态、数量和去向，并与同一批次或作物周期保持可追溯。

- 选定流：一氧化二氮 `08a91e70-3ddc-11dd-94c3-0050c2490048`
- 流属性/单位: Mass / kg N2O
- 数量规则: applicable method for direct and indirect nitrogen pathways
- 数值来源模式: 计算值（`calculated_value`）
- 适用范围: 场址特定（`site_specific`）
原始活动或阶段基准：per hectare and crop cycle.

- 归一化基准：每声明的参考流
- 基准类型: 氮投入（`n_input`）
- 证据类型: 根据采集数据计算（`calculated_from_collection`）
- 采集协议: `cp_field_emissions`
- 来源: `ipcc-2019-managed-soils`
- 数量范围：Broad method-result screen
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：100
  - 单位：kg N2O/ha
  - 基准：one crop cycle; method result governs
  - 基准类型：作物周期（`crop_cycle`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 向空气排放的氨 (`field_ammonia_air_output`)

记录该流的实际身份、状态、数量和去向，并与同一批次或作物周期保持可追溯。

- 选定流：氨 `08a91e70-3ddc-11dd-a2a9-0050c2490048`
- 流属性/单位: Mass / kg NH3
- 数量规则: method calculation by nutrient product and event
- 数值来源模式: 计算值（`calculated_value`）
- 适用范围: 场址特定（`site_specific`）
原始活动或阶段基准：per hectare and crop cycle.

- 归一化基准：每声明的参考流
- 基准类型: 氮投入（`n_input`）
- 证据类型: 根据采集数据计算（`calculated_from_collection`）
- 采集协议: `cp_field_emissions`
- 来源: `emep-eea-2023-guidebook`
- 数量范围：Broad method-result screen
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：250
  - 单位：kg NH3/ha
  - 基准：one crop cycle; method result governs
  - 基准类型：作物周期（`crop_cycle`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 向水体排放的硝酸盐 (`field_nitrate_water_output`)

记录该流的实际身份、状态、数量和去向，并与同一批次或作物周期保持可追溯。

- 选定流：硝酸根 `fe0acd60-3ddc-11dd-aa31-0050c2490048`
- 流属性/单位: Mass / kg nitrate
- 数量规则: monitored loss or method calculation from matched nitrogen and water records
- 数值来源模式: 计算值（`calculated_value`）
- 适用范围: 场址特定（`site_specific`）
原始活动或阶段基准：per hectare and crop cycle.

- 归一化基准：每声明的参考流
- 基准类型: 氮投入（`n_input`）
- 证据类型: 根据采集数据计算（`calculated_from_collection`）
- 采集协议: `cp_field_emissions`
- 来源: `ipcc-2019-managed-soils`
- 数量范围：Broad method-result screen
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1500
  - 单位：kg nitrate/ha
  - 基准：one crop cycle; method result governs
  - 基准类型：作物周期（`crop_cycle`）
  - 证据类型：推理估算（`reasoned_estimate`）

### Process: 籽棉接收、清理与轧花 (`cotton_ginning`)

#### 输入
##### 产品流

###### 已收获籽棉 (`seed_cotton_input`)

记录该流的实际身份、状态、数量和去向，并与同一批次或作物周期保持可追溯。

- 选定流：轧花前已收获籽棉
- 流属性/单位: Mass / kg
- 数量规则: receiving-scale mass with moisture, trash, origin and lot link
- 数值来源模式: 前景记录（`foreground_record`）
- 适用范围: 场址特定（`site_specific`）
原始活动或阶段基准：per gin lot.

- 归一化基准：每声明的参考流
- 基准类型: 过程输出（`process_output`）
- 证据类型: 采集记录（`collected_record`）
- 采集协议: `cp_gin_lot_balance`
- 数量范围：Seed-cotton input balance
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：1500
  - 上限：5000
  - 单位：kg/1,000 kg cottonseed
  - 基准：incoming as-received seed cotton for a reconciled gin lot
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 交流电 (`gin_energy_input_electricity`)

实际轧花电动机械、输送风机及控制设备。干燥热须确认已安装燃烧器及供能；保留现有棉籽与皮棉分配，不向两种产品各计整厂能耗。

仅对本节点有记录的交流用电启用。该身份未特指电压、技术及供应方，须记录并选择兼容上游供应。保留实测kWh，按1 kWh = 3.6 MJ准确换算为MJ；不得将电能视为燃烧燃料或有效热。

- 选定流：交流电 `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- 流属性 / 单位：能量（数据库参考属性：净热值） `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则：按`cp_gin_utility`仅采集归属本节点的该载能体数量。包含能耗的服务及共用量仅对账归属一次；归属量乘声明参考数量，再除以相同产品单位下匹配的最终合格产出数量。保留过程原生吞吐记录，不对最终参考量再次归一化。
- 数值来源模式：`calculated_value`
- 特异性：`site_specific`
- 归一化基准：per declared reference flow
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_gin_utility`
- 来源：`cotton-gin-energy`

执行第8节`gin_energy_input_identification`要求。不继承原集合卡的数值范围或默认值。

###### 轧花工艺用水 (`gin_process_water_input`)

记录该流的实际身份、状态、数量和去向，并与同一批次或作物周期保持可追溯。

- 选定流：生产用水供应
- 流属性/单位: Volume / m3
- 数量规则: metered or batch-calculated net water entering the gin
- 数值来源模式: 前景记录（`foreground_record`）
- 适用范围: 场址特定（`site_specific`）
原始活动或阶段基准：per 1,000 kg accepted cottonseed.

- 归一化基准：每声明的参考流
- 基准类型: 过程输出（`process_output`）
- 证据类型: 采集记录（`collected_record`）
- 采集协议: `cp_gin_utility`
- 数量范围：Provisional process-water screen
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：5
  - 单位：m3/1,000 kg cottonseed
  - 基准：gin process only; inactive route may be zero
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

#### 输出
##### 产品流

###### 轧花毛棉籽 (`gin_run_cottonseed_output`)

将验收的完整毛棉籽作为有意联产品记录，并保持批次可追溯。

- 选定流：其他棉籽 `5ec72013-512e-4bb6-a5e6-648551f35d9d`
- 流属性/单位: Mass / kg
原始产出计量与核对要求：measured accepted mass at declared moisture, foreign matter and gate

- 数量规则：实测净转移质量，保留批次、实际产品状态和含水率基准；在声明交接门对账至最终参考输出。
- 数值来源模式: 前景记录（`foreground_record`）
- 适用范围: 场址特定（`site_specific`）
原始活动或阶段基准：per gin lot; scale to 1,000 kg reference.

- 归一化基准：每声明的参考流
- 基准类型: 过程输出（`process_output`）
- 证据类型: 采集记录（`collected_record`）
- 采集协议: `cp_gin_lot_balance`
- 来源: `cottonseed-storage-2018`
- 数量范围：作者暂定棉籽与皮棉比例估计；引用的全国均值不能确立这些端点
  - 范围角色：典型范围（`typical_range`）
  - 下限：1100
  - 上限：1800
  - 单位：kg cottonseed/1,000 kg lint
  - 基准：same reconciled gin lot
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估计 (`reasoned_estimate`)

###### 皮棉联产品 (`cotton_lint_output`)

记录该流的实际身份、状态、数量和去向，并与同一批次或作物周期保持可追溯。

- 选定流：轧花皮棉
- 流属性/单位: Mass / kg
- 数量规则: measured bale mass linked to the gin lot
- 数值来源模式: 前景记录（`foreground_record`）
- 适用范围: 场址特定（`site_specific`）
原始活动或阶段基准：per gin lot and 1,000 kg cottonseed.

- 归一化基准：每声明的参考流
- 基准类型: 过程输出（`process_output`）
- 证据类型: 采集记录（`collected_record`）
- 采集协议: `cp_gin_lot_balance`
- 数量范围：Lint co-product screen
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：400
  - 上限：1000
  - 单位：kg lint/1,000 kg cottonseed
  - 基准：same reconciled gin lot
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

###### 轧花杂质和拒收物 (`gin_residual_waste_output`)

记录该流的实际身份、状态、数量和去向，并与同一批次或作物周期保持可追溯。

- 选定流：轧花杂物及废弃材料
- 流属性/单位: Mass / kg
- 数量规则: measured or reconciled mass by material class and destination
- 数值来源模式: 计算值（`calculated_value`）
- 适用范围: 场址特定（`site_specific`）
原始活动或阶段基准：per 1,000 kg accepted cottonseed.

- 归一化基准：每声明的参考流
- 基准类型: 过程输出（`process_output`）
- 证据类型: 根据采集数据计算（`calculated_from_collection`）
- 采集协议: `cp_gin_lot_balance`
- 数量范围：Provisional gin-residual screen
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1000
  - 单位：kg/1,000 kg cottonseed
  - 基准：residuals leaving the gin lot balance
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

###### 轧花颗粒物排放 (`gin_particulate_air_output`)

记录该流的实际身份、状态、数量和去向，并与同一批次或作物周期保持可追溯。

- 选定流：记录的轧花颗粒物向空气排放
- 流属性/单位: Mass / kg
- 数量规则: monitoring or permit method by particle-size fraction
- 数值来源模式: 计算值（`calculated_value`）
- 适用范围: 场址特定（`site_specific`）
原始活动或阶段基准：per 1,000 kg accepted cottonseed.

- 归一化基准：每声明的参考流
- 基准类型: 过程输出（`process_output`）
- 证据类型: 根据采集数据计算（`calculated_from_collection`）
- 采集协议: `cp_gin_emissions`
- 来源: `cotton-ginners-handbook-2016`
- 数量范围：Provisional particulate screen
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：20
  - 单位：kg/1,000 kg cottonseed
  - 基准：reported controlled or uncontrolled basis
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

### Process: 棉籽初级处理、分级、稳定化、包装与储存 (`cottonseed_handling_storage`)

#### 输入
##### 产品流

###### 轧花毛棉籽转移 (`cottonseed_transfer_input`)

记录该流的实际身份、状态、数量和去向，并与同一批次或作物周期保持可追溯。

- 选定流：其他棉籽 `5ec72013-512e-4bb6-a5e6-648551f35d9d`
- 流属性/单位: Mass / kg
- 数量规则: measured incoming fuzzy-cottonseed mass, moisture and temperature
- 数值来源模式: 前景记录（`foreground_record`）
- 适用范围: 场址特定（`site_specific`）
原始活动或阶段基准：per storage lot.

- 归一化基准：每声明的参考流
- 基准类型: 过程输出（`process_output`）
- 证据类型: 采集记录（`collected_record`）
- 采集协议: `cp_storage_lot`
- 数量范围：Storage-lot input balance
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：1000
  - 上限：1200
  - 单位：kg/1,000 kg accepted cottonseed
  - 基准：incoming wet mass before loss and rejection
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 交流电 (`storage_energy_input_electricity`)

所声明储存期内实际电动棉籽输送、通风及温控；无储存路线不虚构储存负荷。

仅对本节点有记录的交流用电启用。该身份未特指电压、技术及供应方，须记录并选择兼容上游供应。保留实测kWh，按1 kWh = 3.6 MJ准确换算为MJ；不得将电能视为燃烧燃料或有效热。

- 选定流：交流电 `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- 流属性 / 单位：能量（数据库参考属性：净热值） `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则：按`cp_storage_lot`仅采集归属本节点的该载能体数量。包含能耗的服务及共用量仅对账归属一次；归属量乘声明参考数量，再除以相同产品单位下匹配的最终合格产出数量。保留过程原生吞吐记录，不对最终参考量再次归一化。
- 数值来源模式：`calculated_value`
- 特异性：`site_specific`
- 归一化基准：per declared reference flow
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_storage_lot`
- 来源：`route-energy-fao`

执行第8节`storage_energy_input_identification`要求。不继承原集合卡的数值范围或默认值。

##### 废物流

##### 基本流

#### 输出
##### 产品流

###### 验收储存棉籽 (`accepted_cottonseed_output`)

记录该流的实际身份、状态、数量和去向，并与同一批次或作物周期保持可追溯。

- 选定流：其他棉籽 `5ec72013-512e-4bb6-a5e6-648551f35d9d`
- 流属性/单位: Mass / kg
原始产出计量与核对要求：measured accepted mass with moisture, temperature, foreign matter and duration

- 数量规则：实测净转移质量，保留批次、实际产品状态和含水率基准；在声明交接门对账至最终参考输出。
- 数值来源模式: 前景记录（`foreground_record`）
- 适用范围: 场址特定（`site_specific`）
原始活动或阶段基准：1,000 kg reference product.

- 归一化基准：每声明的参考流
- 基准类型: 参考流（`reference_flow`）
- 证据类型: 采集记录（`collected_record`）
- 采集协议: `cp_storage_lot`
- 来源: `cottonseed-storage-2018`
- 数量范围：Reference output check
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：1000
  - 上限：1000
  - 单位：kg
  - 基准：reference flow at final declared gate
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：方法公式（`method_formula`）
  - 来源：`pcr-reference-definition`

##### 废物流

###### 储存损失和拒收棉籽 (`storage_loss_waste_output`)

记录该流的实际身份、状态、数量和去向，并与同一批次或作物周期保持可追溯。

- 选定流：储存废弃或损失棉籽
- 流属性/单位: Mass / kg
- 数量规则: mass-balance difference supported by inspection and disposition
- 数值来源模式: 计算值（`calculated_value`）
- 适用范围: 场址特定（`site_specific`）
原始活动或阶段基准：per 1,000 kg accepted cottonseed.

- 归一化基准：每声明的参考流
- 基准类型: 过程输出（`process_output`）
- 证据类型: 根据采集数据计算（`calculated_from_collection`）
- 采集协议: `cp_storage_lot`
- 数量范围：Provisional storage-loss screen
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：200
  - 单位：kg/1,000 kg accepted cottonseed
  - 基准：declared storage period and moisture basis
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流


### 过程：声明边界的产品交接计量（`declared_reference_handoff`）
该节点记录既有系统边界上的实际交接数量，用于对账和参考数量归一化。它不代表新增物理工序，不自动引入干燥、冷却、储存、包装或运输。每份数据包须声明一条实际路线、一个终端产品状态、含水率或干物质基准及交接门。仅将该路线在此交接门的合格产品传入本节点；其他路线不得作为额外投入，联产品另行记录并按第 7 节处理。前序工序的投入、损失和排放只计一次。以实际交接净质量作为归一化分母；计量对账节点不改变质量、产率或分配结果。
#### 输入
##### 产品流
###### 实际路线的交接产品（`actual_route_product_for_handoff`）
记录实际终端路线交付的合格产品；与交接门称重和批次记录对账。
- 选定流：其他棉籽，农场门生产混合，新鲜且未经加工
- 流属性 / 单位：质量 / kg
- 数量规则：实际交接门的实测合格产品净质量，按参考数量归一化；不得汇总前序各阶段数量，不得计入其他路线或联产品。
- 数值来源模式：前景记录（`foreground_record`）
- 特异性：场址特定（`site_specific`）
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
- 选定流：其他棉籽，农场门生产混合，新鲜且未经加工
- 流属性 / 单位：质量 / kg
- 数量规则：1000 kg
- 数值来源模式：前景记录（`foreground_record`）
- 特异性：场址特定（`site_specific`）
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

## 7. 分配与联产品处理

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_gin_coproducts` | cultivation and ginning | 将皮棉和棉籽视为有意联产品。先细分可计量过程负荷，其余不可分负荷按匹配数量和代表性价格进行经济分配。 | `cottonseed-storage-2018` |
| `allocation_sensitivity` | lint/cottonseed | 报告质量分配敏感性及价格、币种、期间、水分、等级和价值份额；不得默认替代信用。 |  |
| `allocation_residuals` | gin/storage outputs | 废物不获得联产品信用；仅在有意用途、正价值和独立交接时将回收物视为产品。 |  |
| `allocation_shared_assets` | shared infrastructure | 按实测使用、运行时间、吞吐量或其他因果驱动分摊，每项负荷只计一次。 |  |
| `allocation_rework_rejects` | rejects | 返工物返回原节点；降级可售输出仍为产品，丢弃物仍为废物。 |  |

## 8. 前景数据采集、计算与质量规则

### 完成数据集前确认具体投入身份

依据供应商规格、设备及原始记录确认本作业的实际投入。这是必需的采集要求，不是一条交换。完成数据集前，每种实际材料、配方产品、载能体或独立外购服务须分别建立物理身份具体的卡片，并记录原生数量及属性；核验兼容UUID，或明确保留未解析身份且不得宣称数据集已完整链接。不以条件式示例替代未知实际投入，不编造配方，不漏掉必需用量，不由缺失记录推定零消耗。共用投入、复用资产及服务包含项仅归属一次，保留原有阶段、期间及衔接最终参考产出的实测吞吐。原集合范围不作为单项投入上限或用量默认值。

| requirement_id | collection_protocol_id | 保留的采集范围 |
| --- | --- | --- |
| `field_nutrient_inputs_specific_input` | `cp_field_activity` | 作业 cotton_field_production：记录该流的实际身份、状态、数量和去向，并与同一批次或作物周期保持可追溯。 原数量方法：collect each applied product once and calculate nutrients from assay |
| `field_crop_protection_input_specific_input` | `cp_field_activity` | 作业 cotton_field_production：记录该流的实际身份、状态、数量和去向，并与同一批次或作物周期保持可追溯。 原数量方法：measured formulation by product and application event |
| `cottonseed_packaging_input_specific_input` | `cp_storage_lot` | 作业 cottonseed_handling_storage：记录该流的实际身份、状态、数量和去向，并与同一批次或作物周期保持可追溯。 原数量方法：measured packaging divided by verified reuse cycles |


### 按实际路线确认能源身份

按实际产品状态、作业、设备及供能记录选择能源交换。下列条件式卡片不是必用或穷尽的燃料清单。逐项记录适用性、所用载能体、供应商、服务期间、原生数量及分配；对于尚未表示的实际投入，须另建物理身份具体的卡片并核验UUID。未识别投入仍是明确的完整性缺口，不得记为零或笼统能源交换。人工、环境干燥或绕过某节点的证据，仅能支持相应作业的未使用结论。即使未列示例卡，也须保留全部必需作业的调查。

区分外购供能与现场转换。自产电力通过内部连接衔接前景发电过程，其实际燃料及排放只在发电节点计入一次；同一内部转移不得再计外购电力供应。外购热亦不得重复计入供应商侧燃料。将共用电表、承包服务已含能耗与现有卡片对账，同一物理数量仅归属一次。保留原始量、输出吞吐、共用服务分配及出口后活动排除要求。逐载能体仅进行一次期间与输出归属，以相同产品单位下匹配的最终合格产出缩放至声明参考数量，不再次归一化已归一化数量。过程原生强度须通过实测吞吐衔接最终产出。这些要求不设用量默认值，也不证明数据集完整。

| requirement_id | collection_protocol_id | 必需作业及证据 |
| --- | --- | --- |
| `field_energy_input_identification` | `cp_field_activity` | 实际柴油田间机械进行棉花建植、照护及采收；棉花共产品按现有分配规则归属。 原始活动或阶段基准：per cultivated hectare and crop cycle. (`route-energy-fao`) |
| `gin_energy_input_identification` | `cp_gin_utility` | 实际轧花电动机械、输送风机及控制设备。干燥热须确认已安装燃烧器及供能；保留现有棉籽与皮棉分配，不向两种产品各计整厂能耗。 原始活动或阶段基准：per 1,000 kg accepted cottonseed. (`cotton-gin-energy`) |
| `storage_energy_input_identification` | `cp_storage_lot` | 所声明储存期内实际电动棉籽输送、通风及温控；无储存路线不虚构储存负荷。 原始活动或阶段基准：per 1,000 kg accepted cottonseed. (`route-energy-fao`) |


先按各采集协议保留原始场址、批次、周期及阶段数量与分母，并完成库存、损失、含水率和共产品归属核对；随后按实际归属的验收交付产品量归一化：归一化交换量 = 归属原始交换量 × 声明参考数量 / 同一边界和计量基准的验收产品量。多年生建植和共享作业先执行各自分摊规则，不得把内部转移数量设为最终参考数量。每声明的参考流指第 3 节的数量、单位和产品状态；数据包必须声明实际路线和门。


### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_field_activity` | `cotton_field_production` | inputs | collected | field; area; cultivar; dates; product; assay; amount; meter; carrier | invoices, logs and meters；原始汇总与分配：sum by field and identity 按路线确认要求：`field_energy_input_identification`: 实际柴油田间机械进行棉花建植、照护及采收；棉花共产品按现有分配规则归属。 原始活动或阶段基准：per cultivated hectare and crop cycle. (`route-energy-fao`) 对每项适用投入核验实际使用、设备及供能，完成数据集前须按每种实际载能体分别建立具体交换。身份或数量证据缺失仍为待补证，不记为零。区分外购供应、内部发电及承包服务包含项，仅计入一次能耗；不以条件式示例替代未核实路线。 `field_nutrient_inputs_specific_input`: 作业 cotton_field_production：记录该流的实际身份、状态、数量和去向，并与同一批次或作物周期保持可追溯。 原数量方法：collect each applied product once and calculate nutrients from assay 依据供应商规格、设备及原始记录确认本作业的实际投入。这是必需的采集要求，不是一条交换。完成数据集前，每种实际材料、配方产品、载能体或独立外购服务须分别建立物理身份具体的卡片，并记录原生数量及属性；核验兼容UUID，或明确保留未解析身份且不得宣称数据集已完整链接。不以条件式示例替代未知实际投入，不编造配方，不漏掉必需用量，不由缺失记录推定零消耗。共用投入、复用资产及服务包含项仅归属一次，保留原有阶段、期间及衔接最终参考产出的实测吞吐。原集合范围不作为单项投入上限或用量默认值。 `field_crop_protection_input_specific_input`: 作业 cotton_field_production：记录该流的实际身份、状态、数量和去向，并与同一批次或作物周期保持可追溯。 原数量方法：measured formulation by product and application event 依据供应商规格、设备及原始记录确认本作业的实际投入。这是必需的采集要求，不是一条交换。完成数据集前，每种实际材料、配方产品、载能体或独立外购服务须分别建立物理身份具体的卡片，并记录原生数量及属性；核验兼容UUID，或明确保留未解析身份且不得宣称数据集已完整链接。不以条件式示例替代未知实际投入，不编造配方，不漏掉必需用量，不由缺失记录推定零消耗。共用投入、复用资产及服务包含项仅归属一次，保留原有阶段、期间及衔接最终参考产出的实测吞吐。原集合范围不作为单项投入上限或用量默认值。 | ha; kg; L; m3; kWh; MJ | each event | full crop cycle | each field/farm | 每声明的参考流 | invoices, calibration, logs, field map |
| `cp_harvest_balance` | `cotton_field_production` | seed cotton/residues | collected/calculated | field; mass; module; moisture; trash; reject; residue; fate | scales, tickets, samples, balance；原始汇总与分配：sum accepted lot; separate fate | kg; % | each harvest/lot | full harvest | each field/harvest unit | 每声明的参考流 | scale checks, tickets, samples |
| `cp_field_emissions` | `cotton_field_production` | soil emissions | calculated | N products; assay; timing; residues; soil; climate; irrigation; factors | approved method on matched records；原始汇总与分配：calculate pathways then sum | kg | crop cycle | full crop cycle | each field | 每声明的参考流 | input trace, factors, worksheet |
| `cp_gin_lot_balance` | `cotton_ginning` | input/outputs/residuals | collected/calculated | lot; origin; input/output mass/moisture/grade; reject; destination | scales, sampling, reconciliation；原始汇总与分配：reconcile lot then aggregate | kg; %; item | each lot/shift | full campaign | each gin line/site | 每声明的参考流 | calibration, tickets, grade, balance |
| `cp_gin_utility` | `cotton_ginning` | energy/water | collected/calculated | meter; purchase; runtime; power; water; period | meters, invoices, runtime；原始汇总与分配：allocate shared total once 按路线确认要求：`gin_energy_input_identification`: 实际轧花电动机械、输送风机及控制设备。干燥热须确认已安装燃烧器及供能；保留现有棉籽与皮棉分配，不向两种产品各计整厂能耗。 原始活动或阶段基准：per 1,000 kg accepted cottonseed. (`cotton-gin-energy`) 对每项适用投入核验实际使用、设备及供能，完成数据集前须按每种实际载能体分别建立具体交换。身份或数量证据缺失仍为待补证，不记为零。区分外购供应、内部发电及承包服务包含项，仅计入一次能耗；不以条件式示例替代未核实路线。 | kWh; MJ; kg; L; m3 | shift/bill | full campaign | each gin/meter | 每声明的参考流 | calibration, invoice, log |
| `cp_gin_emissions` | `cotton_ginning` | particulate | measured/calculated | source; control; fraction; concentration; flow; runtime; factor | test or approved permit method；原始汇总与分配：calculate by source/fraction without overlap | kg; mg/m3; m3; h | test/period | representative campaign | each source | 每声明的参考流 | report, permit, controls, runtime |
| `cp_storage_lot` | `cottonseed_handling_storage` | cottonseed/energy/package/loss | collected/calculated | lot; mass; moisture; temperature; foreign matter; duration; runtime; package; reject | scales, probes, meters, logs；原始汇总与分配：reconcile input, accepted, reject, moisture 按路线确认要求：`storage_energy_input_identification`: 所声明储存期内实际电动棉籽输送、通风及温控；无储存路线不虚构储存负荷。 原始活动或阶段基准：per 1,000 kg accepted cottonseed. (`route-energy-fao`) 对每项适用投入核验实际使用、设备及供能，完成数据集前须按每种实际载能体分别建立具体交换。身份或数量证据缺失仍为待补证，不记为零。区分外购供应、内部发电及承包服务包含项，仅计入一次能耗；不以条件式示例替代未核实路线。 `cottonseed_packaging_input_specific_input`: 作业 cottonseed_handling_storage：记录该流的实际身份、状态、数量和去向，并与同一批次或作物周期保持可追溯。 原数量方法：measured packaging divided by verified reuse cycles 依据供应商规格、设备及原始记录确认本作业的实际投入。这是必需的采集要求，不是一条交换。完成数据集前，每种实际材料、配方产品、载能体或独立外购服务须分别建立物理身份具体的卡片，并记录原生数量及属性；核验兼容UUID，或明确保留未解析身份且不得宣称数据集已完整链接。不以条件式示例替代未知实际投入，不编造配方，不漏掉必需用量，不由缺失记录推定零消耗。共用投入、复用资产及服务包含项仅归属一次，保留原有阶段、期间及衔接最终参考产出的实测吞吐。原集合范围不作为单项投入上限或用量默认值。 | kg; %; C; h; kWh; item | receipt/daily/dispatch | full storage period | each bin/pile/site | 每声明的参考流 | calibration, monitoring, inspection, ticket |
| `cp_declared_reference_handoff` | declared_reference_handoff | reference_product_at_declared_handoff | 交接计量与验收记录 | route, terminal_output_row_id, product_state, gate, lot, net_mass_kg, moisture_basis, acceptance, tare | 采用校准衡器或可追溯称重记录，将实际终端工序交接批次与验收净质量、产品状态及含水率对账；剔除包装皮重，不汇总前序阶段数量。 | kg | 每交接批次 | 声明报告期 | 声明交接门 | 每声明的参考流 | 校准或称重凭证、验收和批次追溯 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_field_normalization` | field flows | field flow / accepted seed-cotton mass × seed-cotton need per 1,000 kg cottonseed | field flow, area, yield, gin balance | normalized field flow |  |
| `calc_gin_balance` | gin lot | input = lint + cottonseed + recovered outputs + waste + moisture reconciliation | matched mass/moisture | reconciled yield | `cotton-ginners-handbook-2016` |
| `calc_storage_balance` | storage | incoming dry matter = accepted + rejected/lost dry matter ± justified uncertainty | mass and moisture | accepted seed/loss | `cottonseed-storage-2018` |
| `calc_economic_allocation` | co-products | share_i = quantity_i × price_i / sum(quantity × price) | quantities, grades, prices | burden shares |  |
| `calc_shared_services` | shared assets | total service × documented causal share, counted once | total and driver | node/lot amount |  |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | reference | Prove non-planting, whole/fuzzy state, cultivar, crop year, moisture, foreign matter, grade, storage and gate. | specification, lot ticket, inspection |
| `dq_traceability` | chain | 分别核验每种实际交换的具体流 UUID、物理状态、流属性和单位；未确认时明确保留未解析身份。 | 具体流身份核验证据 |
| `dq_mass_balance` | gin/storage | Reconcile wet and dry balances and investigate gaps beyond justified uncertainty. | scales, moisture tests, balance |
| `dq_allocation` | co-products | Retain quantities, grades, prices, period, currency, shares and mass sensitivity. | sales/market evidence, worksheet |
| `dq_temporal` | all | Cover a complete crop cycle and gin/storage period; disclose proxies and abnormal events. | dates and exception log |
| `dq_completeness` | all cards | Report applicable value or documented zero/not-applicable and retain concrete selections for sets. | completeness and binding evidence |

## 9. 验证规则

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_reference_identity` | reference | Reject planting, delinted or crushed seed and derived products; require whole fuzzy non-planting cottonseed and qualifiers. |  |
| `validate_process_chain` | map | Require cultivation/harvest and ginning; include storage only when before gate and impose no inactive-route amount. |  |
| `validate_gin_balance` | ginning | Require matched input and complete lint, cottonseed, useful output, waste and moisture reconciliation. | `cotton-ginners-handbook-2016` |
| `validate_coproduct_allocation` | crop/gin | Require explicit lint/cottonseed attribution, economic inputs and mass sensitivity; reject double allocation. |  |
| `validate_flow_identitys` | inputs | 分别核验每种实际交换的具体流 UUID、物理状态、流属性和单位；未确认时明确保留未解析身份。 |  |
| `validate_ranges` | cards | Require role, bounds, unit, basis and evidence; lower <= upper and inactive conditional routes impose no amount. |  |
| `validate_reject_routing` | rejects | Route each off-spec stream once and exclude rejected mass from accepted output. |  |
| `validate_shared_burdens` | shared services | Require a causal driver and prove each shared burden is counted once. |  |

## 10. 发布数据集配置

| Field | Value |
| --- | --- |
| dataset_role | foreground cottonseed production dataset with explicit co-product attribution |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | LCA of whole fuzzy non-planting cottonseed at the declared gin/farm gate |
| excluded_use | planting or delinted seed; lint, linters, hulls, oil, cake, meal, crushing, extraction or feed manufacture |
| required_metadata | cultivar; geography; crop year; irrigation; harvest; gin; lot; moisture; foreign matter; fuzz state; storage; gate; balance; allocation |
| required_quality_disclosure | coverage, uncertainty, proxies, mixed origins, unresolved identities, allocation sensitivity and representativeness |
| update_trigger | material change in region, production, harvest, gin, yield, moisture/storage, product state, price or allocation |

## 11. 数据来源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `feedipedia-cottonseed` | extension_guidance | Feedipedia, Cotton seeds, https://feedipedia.review.fao.org/node/742 | identity, route, uses and exclusions |
| `cotton-ginners-handbook-2016` | handbook | National Cotton Council, Cotton Ginners Handbook, https://journal.cotton.org/article/20-2-154/ | gin boundary, separation, moisture, energy, waste and air emissions |
| `cottonseed-storage-2018` | literature | Ashley et al., Cottonseed Air-Handling and Storage Requirements, Journal of Cotton Science 22:47-59, https://www.cotton.org/journal/2018-22/1/47.cfm | co-product ratio, moisture, aeration, handling and storage |
| `ncc-seedcotton-handling` | extension_guidance | National Cotton Council, Recommendations for Handling Seedcotton Exposed to Excessive Rainfall, https://www.cotton.org/tech/quality/rainfallandseedcotton.cfm | harvest moisture, seed-cotton storage and seed condition |
| `ipcc-2019-managed-soils` | method_factor | IPCC 2019 Refinement, Volume 4, Chapter 11 | managed-soil emissions |
| `emep-eea-2023-guidebook` | method_factor | EMEP/EEA Air Pollutant Emission Inventory Guidebook 2023 | fertilizer ammonia |
| `pcr-reference-definition` | standard | This PCR, Reference Flow section | exact 1,000 kg output range |

| source_id | type | reference | used_for |
| --- | --- | --- | --- |
| `declared-handoff-measurement-definition` | `method_factor` | 本 PCR 第 3、6、8 节的净质量归一化定义：同一状态、同一交接门的实测净质量作为自身归一化分母，质量比为 1；交接计量不增加物理工序。 | 同阶段和交接计量恒等式；属于定义，不是实测产率、经验默认值或外部文献。 |
| `cotton-gin-energy` | handbook | Funk and Hardin (2017), Energy Utilization and Conservation in Cotton Gins, Cotton Ginners Handbook. https://www.cotton.org/journal/2017-21/2/156.cfm | 支持电动输送、轧花设备及独立干燥需求，不强制采用每包强度或特定燃料身份。 |
| `route-energy-fao` | official_guidance | FAO, Energy-smart food for people and climate (2011), Annex 2; and Energy use in agriculture and industry, Annex IV. https://www.fao.org/4/i2454e/i2454e00.pdf ; https://www.fao.org/4/Q1085e/q1085e0d.htm | 仅支持设备及载能体可能性，适用性由现场记录确定；不采用能耗强度、燃料比例或默认组合。 |
