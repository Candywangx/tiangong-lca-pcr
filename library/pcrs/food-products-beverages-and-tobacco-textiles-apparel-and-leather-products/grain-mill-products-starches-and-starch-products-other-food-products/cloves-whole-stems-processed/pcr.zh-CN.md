---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.grain-mill-products-starches-and-starch-products-other-food-products.cloves-whole-stems-processed
language: zh-CN
status: candidate
content_maturity: authored_methodology
translation_status: aligned
sync_with: pcr.en-US.md
---

# 加工丁香（完整花梗）

## 1. 范围与适用性

本 PCR 适用于以单独识别的 CPC 01656 未加工完整丁香批次为原料、生产 CPC 23926 加工丁香的前景数据包。数据包必须代表一个植物学身份、一种来料状态、一个最终产品形态、一项粒度规格、一条加工路线和一种包装配置。不得对完整、破碎、研磨和粉末产品进行平均，也不得对经处理与未经处理路线进行平均。

覆盖的前景操作包括接收和批次验收、干式清理与分选、条件性湿洗、条件性工厂干燥或水分调理、条件性破碎或研磨与粒度分级、条件性蒸汽微生物减除、条件性无定形二氧化硅投料、包装、受控贮存、卫生清洁、粉尘控制以及条件性场内废水处理。农业生产、收获、CPC 01656 投入的既往生产过程和入厂运输属于上游；分销、零售、烹饪使用和寿命终止属于下游。

当上市产品落入 Codex CXS 344-2021 范围时，该标准用于植物学身份、完整及研磨/粉末形态、质量属性和食品卫生衔接。它不取代保留的 CPC 23926 边界，也不删除经天工参考身份确认的破碎及其他加工形态。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.grain-mill-products-starches-and-starch-products-other-food-products.cloves-whole-stems-processed |
| classification_refs | CPC 3.0: 23926，exact |
| covered_products | 来自已声明 CPC 01656 生丁香批次且仅采用一种形态的加工丁香：加工完整丁香、碎丁香、研磨丁香或丁香粉；声明使用 INS 551 的研磨或粉末配方仅通过独立投料路线覆盖。 |
| excluded_products | CPC 01656 生丁香；混合香辛料或调味品；丁香精油、油树脂或提取物；另一植物学香辛料；对多个产品形态、粒度规格或微生物减除路线进行平均的数据集。 |
| representative_product | 一批具有已声明植物学身份、最终形态、粒度、水分状态、处理历史和包装的批次特定加工丁香。 |
| production_route | 接收 → 干式清理与分选 → 条件性湿洗 → 条件性干燥 → 条件性粒度加工 → 条件性蒸汽微生物减除 → 条件性 INS 551 投料 → 包装、贮存与放行。每个条件步骤的纳入或省略均需声明。 |
| market_state | 以一种已声明散装或零售包装放行的干燥食用香辛料；净产品质量不含包装。 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 提供具有已声明香气、滋味、清洁度、形态、粒度和卫生属性的加工丁香。 |
| How much | 1 kg 净合格放行产品，不含任何包装。 |
| How well | 声明形态符合适用的身份、水分、物理缺陷、污染物、微生物控制和粒度规格；禁止跨形态或跨路线平均。 |
| How long or cycle | 一个前景生产批次直至包装产品放行；声明贮存时长和条件，不另计服务寿命收益。 |
| reference_flow_link | `packaging_storage_release` 的固定产出行 `reference_product_output`。 |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 kg 净放行产品 |
| 参考产品流 | 丁香（全茎），加工 `c848928e-35e4-4713-aba4-2f2d01ac641d` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 植物学身份和学名；来料 CPC 01656 状态及水分；产地和批次；最终形态；粒度或筛分规格；干燥路线和条件；微生物减除处理状态；添加剂身份和浓度；包装材料清单；贮存条件；地域和参考期 |

构建前景数据包时，`必需限定信息` 中每项信息均应在数据集元数据、过程说明、参考流备注、产品说明或等效字段中声明。缺少限定信息时，参考流定义不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_net_mass` | 放行参考产品 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 以 1 kg 净产品作为放行基准；包装、托盘和标签不计入参考质量，并单独列入清单。 |
| `incoming_mass_state` | CPC 01656 投入 | Mass | kg | 按实测基准记录来料批次质量和水分；不得把加工投入默认为生丁香。 |
| `moisture_balance` | 干燥和蒸汽处理 | Mass | kg 水和 kg 产品 | 保留进、出口水分测量值并计算去除水分，不设默认水分值。 |
| `particle_size_identity` | 破碎、研磨和粉末形态 | 质量分数和筛孔 | % 和 mm 或 µm | 记录声明的筛分方法和分布；仅有营销名称不能替代实测粒度规格。 |
| `utility_energy` | 电力、蒸汽、热水和热风 | Energy | kWh 或 MJ | 保留计量单位和换算因子；不得在一个数量中合并电力与热能。 |
| `wastewater_load` | 直接水排放 | Mass | kg | 用同一期间的实测流量与浓度分别计算每项污染物负荷；送往排水管网或处理的废水不得同时记作直接环境排放。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 一批跨越前景工厂门槛的 CPC 01656 未加工完整丁香，已声明植物学身份、供应商、产地、水分、物理状态和既往采后历史。 |
| starting_condition_role | 上游产品投入及加工丁香前景操作的可审计起点。 |
| product_classification_scope | 仅 CPC 23926 加工丁香，并以一个已声明形态和一条路线表示。 |
| recursive_input_rule | 已符合 CPC 23926 的外购投入属于加工丁香中间品，而非生原料起点。应披露该投入，使用上游数据集表示已完成加工，并省略重复的前景阶段。 |
| upstream_dataset_requirement | 种植、收获、接收前完成的生丁香采后操作、包装和化学品生产、电力与燃料供应以及入厂运输，在研究范围内时需要上游数据集。 |
| disclosure | 声明产品形态、粒度、所有纳入和省略的条件过程、处理顺序、水分历史、包装、贮存条件、地域、期间、供应商覆盖及任何上游加工丁香投入。 |

### 系统边界规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_raw_start` | 前景起点 | 从声明 CPC 01656 批次的实物接收开始；不得在前景过程图中纳入种植或收获。 | `un-cpc-3-0-2025`、`eu-pef-2021-2279` |
| `boundary_form_route_lock` | 全部前景过程 | 每个产品形态、粒度规格和处理路线使用单独数据集或单独参数化路线；禁止跨形态和跨路线平均。 | `codex-cxs-344-2021-2025`、`codex-cxc-75-2015-2018`、`eu-pef-2021-2279` |
| `boundary_hygiene_operations` | 清理至放行 | 纳入前景工厂实际开展的清理、粉尘控制、微生物减除、包装和卫生清洁操作。 | `codex-cxc-75-2015-2018`、`jrc-fdm-bref-2019` |
| `boundary_complete_lci` | 前景清单 | 收集已纳入过程中所有已知的材料、能源、产品、共产品、废物以及直接空气和水交换。 | `eu-pef-2021-2279` |
| `boundary_downstream` | 分销与使用 | 本门到门前景 PCR 不含分销、零售、烹饪使用和最终废物管理，除非研究明确增加下游模块。 | `eu-pef-2021-2279` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `raw_clove_receipt` | 生丁香接收与批次验收 | required | 每个数据集均以单独识别的未加工完整丁香来料批次为起点。 | 前景材料接收与质量分流 | 每 1 kg 净放行参考产品 |
| `clove_cleaning_sorting` | 丁香清理与分选 | required | 必须开展干式挑选、筛分、分级与异物去除；仅在有记录的湿洗路线中使用湿洗卡。 | 前景预处理与物理危害去除 | 每 1 kg 净放行参考产品 |
| `clove_drying_conditioning` | 丁香干燥与水分调理 | conditional | 仅在前景工厂于接收、湿洗或其他声明工序后改变产品水分时纳入。 | 前景水分控制 | 每 1 kg 净放行参考产品 |
| `clove_size_reduction` | 丁香破碎、研磨与粒度分级 | conditional | 碎丁香、研磨丁香或丁香粉路线纳入；加工完整形态路线不纳入。 | 前景形态与粒度加工 | 每 1 kg 净放行参考产品 |
| `steam_microbial_reduction` | 蒸汽微生物减除 | conditional | 仅当前景工厂实施经验证的蒸汽处理时纳入；不得与未经处理、熏蒸或辐照路线平均。 | 前景病原体减除处理 | 每 1 kg 净放行参考产品 |
| `anticaking_agent_dosing` | 无定形二氧化硅投料 | conditional | 仅在适用食品规则下、声明使用 INS 551 的研磨或粉末配方中纳入。 | 前景配方过程 | 每 1 kg 净放行参考产品 |
| `onsite_heat_generation` | 场内蒸汽、热水与干燥热风生产 | conditional | 仅当燃料在前景边界内燃烧或热力在场内生产时纳入；外购热力保留在使用过程。 | 前景公用工程生产 | 每 1 kg 净放行参考产品 |
| `packaging_storage_release` | 包装、受控贮存与产品放行 | required | 每个数据集均记录唯一放行产品形态、准确包装材料清单及任何受控贮存操作。 | 前景最终加工与参考产品放行 | 每 1 kg 净放行参考产品 |
| `sanitation_wastewater_control` | 卫生清洁、粉尘收集与废水控制 | required | 必须开展干式卫生清洁与粉尘控制；仅在实际发生时使用湿式卫生清洁、废水处理和直接排放卡。 | 前景卫生与环境控制 | 每 1 kg 净放行参考产品 |

### 过程：生丁香接收与批次验收（`raw_clove_receipt`）

#### 输入

##### 产品流

###### 作为投入的 Unprocessed whole cloves (CPC 01656)（`receipt_raw_whole_cloves`）

Unprocessed whole cloves (CPC 01656) 作为一个独立产品流进入生丁香接收与批次验收。仅记录声明的产品形态、粒度和处理路线，不得同另一形态或路线合并。

- 选定流：Unprocessed whole cloves (CPC 01656)
- 流属性/单位：Mass / kg
- 数量规则：记录进入本过程的净数量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净放行参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_receipt_lot_records`
- 来源：`un-cpc-3-0-2025`、`codex-cxs-344-2021-2025`、`codex-cxc-75-2015-2018`、`eu-pef-2021-2279`

###### 作为投入的 Grid electricity（`receipt_grid_electricity`）

Grid electricity 作为一个单独产品流进入生丁香接收与批次验收。仅在声明过程实际发生这一具体交换时记录，并与所有其他交换分开计量。

- 选定流：电网电力
- 流属性/单位：Energy / kWh
- 数量规则：记录本过程计量的电力消耗
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净放行参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_receipt_lot_records`
- 来源：`un-cpc-3-0-2025`、`codex-cxs-344-2021-2025`、`codex-cxc-75-2015-2018`、`eu-pef-2021-2279`

##### 废物流

_本过程在此方向未定义废物流原子交换。_

##### 基本流

_本过程在此方向未定义基本流原子交换。_

#### 输出

##### 产品流

###### 作为产品产出的 Accepted unprocessed whole cloves（`receipt_accepted_whole_cloves`）

Accepted unprocessed whole cloves 作为一个独立产品流离开生丁香接收与批次验收。仅记录声明的产品形态、粒度和处理路线，不得同另一形态或路线合并。

- 选定流：Accepted unprocessed whole cloves
- 流属性/单位：Mass / kg
- 数量规则：记录离开本过程的净数量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净放行参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_receipt_lot_records`
- 来源：`un-cpc-3-0-2025`、`codex-cxs-344-2021-2025`、`codex-cxc-75-2015-2018`、`eu-pef-2021-2279`

##### 废物流

###### 作为废物流产出的 Mould-damaged clove rejects（`receipt_mould_rejects`）

Mould-damaged clove rejects 作为一个单独废物流离开生丁香接收与批次验收。应独立称量或测量，并与不同材料、缺陷类别或去向的废物流分开。

- 选定流：Mould-damaged clove rejects
- 流属性/单位：Mass / kg
- 数量规则：记录单独称量或以其他方式测量的离开本过程数量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净放行参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_receipt_lot_records`
- 来源：`un-cpc-3-0-2025`、`codex-cxs-344-2021-2025`、`codex-cxc-75-2015-2018`、`eu-pef-2021-2279`

###### 作为废物流产出的 Insect-damaged clove rejects（`receipt_insect_rejects`）

Insect-damaged clove rejects 作为一个单独废物流离开生丁香接收与批次验收。应独立称量或测量，并与不同材料、缺陷类别或去向的废物流分开。

- 选定流：Insect-damaged clove rejects
- 流属性/单位：Mass / kg
- 数量规则：记录单独称量或以其他方式测量的离开本过程数量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净放行参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_receipt_lot_records`
- 来源：`un-cpc-3-0-2025`、`codex-cxs-344-2021-2025`、`codex-cxc-75-2015-2018`、`eu-pef-2021-2279`

###### 作为废物流产出的 Headless clove rejects（`receipt_headless_rejects`）

Headless clove rejects 作为一个单独废物流离开生丁香接收与批次验收。应独立称量或测量，并与不同材料、缺陷类别或去向的废物流分开。

- 选定流：Headless clove rejects
- 流属性/单位：Mass / kg
- 数量规则：记录单独称量或以其他方式测量的离开本过程数量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净放行参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_receipt_lot_records`
- 来源：`un-cpc-3-0-2025`、`codex-cxs-344-2021-2025`、`codex-cxc-75-2015-2018`、`eu-pef-2021-2279`

###### 作为废物流产出的 Mother clove rejects（`receipt_mother_clove_rejects`）

Mother clove rejects 作为一个单独废物流离开生丁香接收与批次验收。应独立称量或测量，并与不同材料、缺陷类别或去向的废物流分开。

- 选定流：Mother clove rejects
- 流属性/单位：Mass / kg
- 数量规则：记录单独称量或以其他方式测量的离开本过程数量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净放行参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_receipt_lot_records`
- 来源：`un-cpc-3-0-2025`、`codex-cxs-344-2021-2025`、`codex-cxc-75-2015-2018`、`eu-pef-2021-2279`

###### 作为废物流产出的 Khoker clove rejects（`receipt_khoker_clove_rejects`）

Khoker clove rejects 作为一个单独废物流离开生丁香接收与批次验收。应独立称量或测量，并与不同材料、缺陷类别或去向的废物流分开。

- 选定流：Khoker clove rejects
- 流属性/单位：Mass / kg
- 数量规则：记录单独称量或以其他方式测量的离开本过程数量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净放行参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_receipt_lot_records`
- 来源：`un-cpc-3-0-2025`、`codex-cxs-344-2021-2025`、`codex-cxc-75-2015-2018`、`eu-pef-2021-2279`

###### 作为废物流产出的 Animal-excreta-contaminated clove rejects（`receipt_excreta_contaminated_rejects`）

Animal-excreta-contaminated clove rejects 作为一个单独废物流离开生丁香接收与批次验收。应独立称量或测量，并与不同材料、缺陷类别或去向的废物流分开。

- 选定流：Animal-excreta-contaminated clove rejects
- 流属性/单位：Mass / kg
- 数量规则：记录单独称量或以其他方式测量的离开本过程数量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净放行参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_receipt_lot_records`
- 来源：`un-cpc-3-0-2025`、`codex-cxs-344-2021-2025`、`codex-cxc-75-2015-2018`、`eu-pef-2021-2279`

###### 作为废物流产出的 Discarded jute sacks（`receipt_jute_sack_waste`）

Discarded jute sacks 作为一个单独废物流离开生丁香接收与批次验收。应独立称量或测量，并与不同材料、缺陷类别或去向的废物流分开。

- 选定流：Discarded jute sacks
- 流属性/单位：Mass / kg
- 数量规则：记录单独称量或以其他方式测量的离开本过程数量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净放行参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_receipt_lot_records`
- 来源：`un-cpc-3-0-2025`、`codex-cxs-344-2021-2025`、`codex-cxc-75-2015-2018`、`eu-pef-2021-2279`

###### 作为废物流产出的 Discarded polypropylene woven sacks（`receipt_pp_sack_waste`）

Discarded polypropylene woven sacks 作为一个单独废物流离开生丁香接收与批次验收。应独立称量或测量，并与不同材料、缺陷类别或去向的废物流分开。

- 选定流：Discarded polypropylene woven sacks
- 流属性/单位：Mass / kg
- 数量规则：记录单独称量或以其他方式测量的离开本过程数量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净放行参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_receipt_lot_records`
- 来源：`un-cpc-3-0-2025`、`codex-cxs-344-2021-2025`、`codex-cxc-75-2015-2018`、`eu-pef-2021-2279`

##### 基本流

_本过程在此方向未定义基本流原子交换。_


### 过程：丁香清理与分选（`clove_cleaning_sorting`）

#### 输入

##### 产品流

###### 作为投入的 Accepted unprocessed whole cloves（`cleaning_accepted_whole_cloves`）

Accepted unprocessed whole cloves 作为一个独立产品流进入丁香清理与分选。仅记录声明的产品形态、粒度和处理路线，不得同另一形态或路线合并。

- 选定流：Accepted unprocessed whole cloves
- 流属性/单位：Mass / kg
- 数量规则：记录进入本过程的净数量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净放行参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cleaning_sorting_records`
- 来源：`codex-cxs-344-2021-2025`、`codex-cxc-75-2015-2018`、`jrc-fdm-bref-2019`、`eu-pef-2021-2279`

###### 作为投入的 Grid electricity（`cleaning_grid_electricity`）

Grid electricity 作为一个单独产品流进入丁香清理与分选。仅在声明过程实际发生这一具体交换时记录，并与所有其他交换分开计量。

- 选定流：电网电力
- 流属性/单位：Energy / kWh
- 数量规则：记录本过程计量的电力消耗
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净放行参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cleaning_sorting_records`
- 来源：`codex-cxs-344-2021-2025`、`codex-cxc-75-2015-2018`、`jrc-fdm-bref-2019`、`eu-pef-2021-2279`

###### 作为投入的 Dry filtered compressed air（`cleaning_compressed_air`）

Dry filtered compressed air 作为一个单独产品流进入丁香清理与分选。仅在声明过程实际发生这一具体交换时记录，并与所有其他交换分开计量。

- 选定流：Dry filtered compressed air
- 流属性/单位：Volume / Nm3
- 数量规则：记录本过程计量的干燥压缩空气用量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净放行参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cleaning_sorting_records`
- 来源：`codex-cxs-344-2021-2025`、`codex-cxc-75-2015-2018`、`jrc-fdm-bref-2019`、`eu-pef-2021-2279`

###### 作为投入的 Potable cleaning water（`cleaning_potable_water`）

Potable cleaning water 作为一个单独产品流进入丁香清理与分选。仅在声明过程实际发生这一具体交换时记录，并与所有其他交换分开计量。

- 选定流：Potable cleaning water
- 流属性/单位：Mass / kg
- 数量规则：记录进入本过程的净数量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净放行参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cleaning_sorting_records`
- 来源：`codex-cxs-344-2021-2025`、`codex-cxc-75-2015-2018`、`jrc-fdm-bref-2019`、`eu-pef-2021-2279`

###### 作为投入的 Sodium hypochlorite aqueous solution（`cleaning_sodium_hypochlorite`）

Sodium hypochlorite aqueous solution 作为一个单独产品流进入丁香清理与分选。仅在声明过程实际发生这一具体交换时记录，并与所有其他交换分开计量。

- 选定流：Sodium hypochlorite aqueous solution
- 流属性/单位：Mass / kg
- 数量规则：记录进入本过程的净数量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净放行参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cleaning_sorting_records`
- 来源：`codex-cxs-344-2021-2025`、`codex-cxc-75-2015-2018`、`jrc-fdm-bref-2019`、`eu-pef-2021-2279`

###### 作为投入的 Peracetic acid aqueous solution（`cleaning_peracetic_acid`）

Peracetic acid aqueous solution 作为一个单独产品流进入丁香清理与分选。仅在声明过程实际发生这一具体交换时记录，并与所有其他交换分开计量。

- 选定流：Peracetic acid aqueous solution
- 流属性/单位：Mass / kg
- 数量规则：记录进入本过程的净数量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净放行参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cleaning_sorting_records`
- 来源：`codex-cxs-344-2021-2025`、`codex-cxc-75-2015-2018`、`jrc-fdm-bref-2019`、`eu-pef-2021-2279`

###### 作为投入的 Purchased hot water（`cleaning_hot_water`）

Purchased hot water 作为一个单独产品流进入丁香清理与分选。仅在声明过程实际发生这一具体交换时记录，并与所有其他交换分开计量。

- 选定流：外购热水
- 流属性/单位：Energy / MJ
- 数量规则：记录本过程消耗的外购或内部转移热能
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净放行参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cleaning_sorting_records`
- 来源：`codex-cxs-344-2021-2025`、`codex-cxc-75-2015-2018`、`jrc-fdm-bref-2019`、`eu-pef-2021-2279`

##### 废物流

_本过程在此方向未定义废物流原子交换。_

##### 基本流

_本过程在此方向未定义基本流原子交换。_

#### 输出

##### 产品流

###### 作为产品产出的 Processed whole cloves（`cleaning_processed_whole_cloves`）

Processed whole cloves 作为一个独立产品流离开丁香清理与分选。仅记录声明的产品形态、粒度和处理路线，不得同另一形态或路线合并。

- 选定流：Processed whole cloves
- 流属性/单位：Mass / kg
- 数量规则：记录离开本过程的净数量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净放行参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cleaning_sorting_records`
- 来源：`codex-cxs-344-2021-2025`、`codex-cxc-75-2015-2018`、`jrc-fdm-bref-2019`、`eu-pef-2021-2279`

###### 作为产品产出的 Saleable clove stem screenings（`cleaning_saleable_stem_screenings`）

Saleable clove stem screenings 作为一个单独产品流离开丁香清理与分选。仅在声明过程实际发生这一具体交换时记录，并与所有其他交换分开计量。

- 选定流：Saleable clove stem screenings
- 流属性/单位：Mass / kg
- 数量规则：记录离开本过程的净数量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净放行参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cleaning_sorting_records`
- 来源：`codex-cxs-344-2021-2025`、`codex-cxc-75-2015-2018`、`jrc-fdm-bref-2019`、`eu-pef-2021-2279`

##### 废物流

###### 作为废物流产出的 Clove stem screenings for disposal（`cleaning_stem_screenings_waste`）

Clove stem screenings for disposal 作为一个单独废物流离开丁香清理与分选。应独立称量或测量，并与不同材料、缺陷类别或去向的废物流分开。

- 选定流：Clove stem screenings for disposal
- 流属性/单位：Mass / kg
- 数量规则：记录单独称量或以其他方式测量的离开本过程数量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净放行参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cleaning_sorting_records`
- 来源：`codex-cxs-344-2021-2025`、`codex-cxc-75-2015-2018`、`jrc-fdm-bref-2019`、`eu-pef-2021-2279`

###### 作为废物流产出的 Foreign plant debris removed from cloves（`cleaning_foreign_plant_debris`）

Foreign plant debris removed from cloves 作为一个单独废物流离开丁香清理与分选。应独立称量或测量，并与不同材料、缺陷类别或去向的废物流分开。

- 选定流：Foreign plant debris removed from cloves
- 流属性/单位：Mass / kg
- 数量规则：记录单独称量或以其他方式测量的离开本过程数量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净放行参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cleaning_sorting_records`
- 来源：`codex-cxs-344-2021-2025`、`codex-cxc-75-2015-2018`、`jrc-fdm-bref-2019`、`eu-pef-2021-2279`

###### 作为废物流产出的 Stones and mineral grit removed from cloves（`cleaning_stone_grit_waste`）

Stones and mineral grit removed from cloves 作为一个单独废物流离开丁香清理与分选。应独立称量或测量，并与不同材料、缺陷类别或去向的废物流分开。

- 选定流：Stones and mineral grit removed from cloves
- 流属性/单位：Mass / kg
- 数量规则：记录单独称量或以其他方式测量的离开本过程数量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净放行参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cleaning_sorting_records`
- 来源：`codex-cxs-344-2021-2025`、`codex-cxc-75-2015-2018`、`jrc-fdm-bref-2019`、`eu-pef-2021-2279`

###### 作为废物流产出的 Ferrous metal fragments removed from cloves（`cleaning_ferrous_metal_waste`）

Ferrous metal fragments removed from cloves 作为一个单独废物流离开丁香清理与分选。应独立称量或测量，并与不同材料、缺陷类别或去向的废物流分开。

- 选定流：Ferrous metal fragments removed from cloves
- 流属性/单位：Mass / kg
- 数量规则：记录单独称量或以其他方式测量的离开本过程数量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净放行参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cleaning_sorting_records`
- 来源：`codex-cxs-344-2021-2025`、`codex-cxc-75-2015-2018`、`jrc-fdm-bref-2019`、`eu-pef-2021-2279`

###### 作为废物流产出的 Non-ferrous metal fragments removed from cloves（`cleaning_nonferrous_metal_waste`）

Non-ferrous metal fragments removed from cloves 作为一个单独废物流离开丁香清理与分选。应独立称量或测量，并与不同材料、缺陷类别或去向的废物流分开。

- 选定流：Non-ferrous metal fragments removed from cloves
- 流属性/单位：Mass / kg
- 数量规则：记录单独称量或以其他方式测量的离开本过程数量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净放行参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cleaning_sorting_records`
- 来源：`codex-cxs-344-2021-2025`、`codex-cxc-75-2015-2018`、`jrc-fdm-bref-2019`、`eu-pef-2021-2279`

###### 作为废物流产出的 Captured clove dust from cleaning（`cleaning_captured_clove_dust`）

Captured clove dust from cleaning 作为一个单独废物流离开丁香清理与分选。应独立称量或测量，并与不同材料、缺陷类别或去向的废物流分开。

- 选定流：Captured clove dust from cleaning
- 流属性/单位：Mass / kg
- 数量规则：记录单独称量或以其他方式测量的离开本过程数量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净放行参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cleaning_sorting_records`
- 来源：`codex-cxs-344-2021-2025`、`codex-cxc-75-2015-2018`、`jrc-fdm-bref-2019`、`eu-pef-2021-2279`

###### 作为废物流产出的 Wastewater from clove wet cleaning（`cleaning_wash_wastewater`）

Wastewater from clove wet cleaning 作为一个单独废物流离开丁香清理与分选。应独立称量或测量，并与不同材料、缺陷类别或去向的废物流分开。

- 选定流：Wastewater from clove wet cleaning
- 流属性/单位：Mass / kg
- 数量规则：记录单独称量或以其他方式测量的离开本过程数量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净放行参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cleaning_sorting_records`
- 来源：`codex-cxs-344-2021-2025`、`codex-cxc-75-2015-2018`、`jrc-fdm-bref-2019`、`eu-pef-2021-2279`

###### 作为废物流产出的 Settled clove wash solids（`cleaning_settled_solids`）

Settled clove wash solids 作为一个单独废物流离开丁香清理与分选。应独立称量或测量，并与不同材料、缺陷类别或去向的废物流分开。

- 选定流：Settled clove wash solids
- 流属性/单位：Mass / kg
- 数量规则：记录单独称量或以其他方式测量的离开本过程数量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净放行参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cleaning_sorting_records`
- 来源：`codex-cxs-344-2021-2025`、`codex-cxc-75-2015-2018`、`jrc-fdm-bref-2019`、`eu-pef-2021-2279`

##### 基本流

###### 作为基本流排放的 Clove particulate matter to air（`cleaning_clove_pm_air`）

Clove particulate matter to air 作为一个单项空气排放离开丁香清理与分选。记录末端控制后的实际释放质量，并与所有其他物质或粒径分数分开。

- 选定流：Clove particulate matter to air
- 流属性/单位：Mass / kg
- 数量规则：依据直接监测或已采集活动数据，按指定计算规则计算该单项排放质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净放行参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：从采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_cleaning_sorting_records`
- 来源：`codex-cxs-344-2021-2025`、`codex-cxc-75-2015-2018`、`jrc-fdm-bref-2019`、`eu-pef-2021-2279`

###### 作为基本流排放的 Chemical oxygen demand to water（`cleaning_cod_water`）

Chemical oxygen demand to water 作为一个单项水环境排放离开丁香清理与分选。仅记录最终直接排放边界的实际负荷；同一水流若作为废水送往下游处理，则不得重复记作直接排放。

- 选定流：化学需氧量，排入水体
- 流属性/单位：Mass / kg
- 数量规则：依据直接监测或已采集活动数据，按指定计算规则计算该单项排放质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净放行参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：从采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_cleaning_sorting_records`
- 来源：`codex-cxs-344-2021-2025`、`codex-cxc-75-2015-2018`、`jrc-fdm-bref-2019`、`eu-pef-2021-2279`

###### 作为基本流排放的 Biochemical oxygen demand, 5 days, to water（`cleaning_bod5_water`）

Biochemical oxygen demand, 5 days, to water 作为一个单项水环境排放离开丁香清理与分选。仅记录最终直接排放边界的实际负荷；同一水流若作为废水送往下游处理，则不得重复记作直接排放。

- 选定流：Biochemical oxygen demand, 5 days, to water
- 流属性/单位：Mass / kg
- 数量规则：依据直接监测或已采集活动数据，按指定计算规则计算该单项排放质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净放行参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：从采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_cleaning_sorting_records`
- 来源：`codex-cxs-344-2021-2025`、`codex-cxc-75-2015-2018`、`jrc-fdm-bref-2019`、`eu-pef-2021-2279`

###### 作为基本流排放的 Total suspended solids to water（`cleaning_tss_water`）

Total suspended solids to water 作为一个单项水环境排放离开丁香清理与分选。仅记录最终直接排放边界的实际负荷；同一水流若作为废水送往下游处理，则不得重复记作直接排放。

- 选定流：总悬浮固体，排入水体
- 流属性/单位：Mass / kg
- 数量规则：依据直接监测或已采集活动数据，按指定计算规则计算该单项排放质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净放行参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：从采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_cleaning_sorting_records`
- 来源：`codex-cxs-344-2021-2025`、`codex-cxc-75-2015-2018`、`jrc-fdm-bref-2019`、`eu-pef-2021-2279`

###### 作为基本流排放的 Chloride to water（`cleaning_chloride_water`）

Chloride to water 作为一个单项水环境排放离开丁香清理与分选。仅记录最终直接排放边界的实际负荷；同一水流若作为废水送往下游处理，则不得重复记作直接排放。

- 选定流：氯化物，排入水体
- 流属性/单位：Mass / kg
- 数量规则：依据直接监测或已采集活动数据，按指定计算规则计算该单项排放质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净放行参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：从采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_cleaning_sorting_records`
- 来源：`codex-cxs-344-2021-2025`、`codex-cxc-75-2015-2018`、`jrc-fdm-bref-2019`、`eu-pef-2021-2279`

###### 作为基本流排放的 Free chlorine to water（`cleaning_free_chlorine_water`）

Free chlorine to water 作为一个单项水环境排放离开丁香清理与分选。仅记录最终直接排放边界的实际负荷；同一水流若作为废水送往下游处理，则不得重复记作直接排放。

- 选定流：Free chlorine to water
- 流属性/单位：Mass / kg
- 数量规则：依据直接监测或已采集活动数据，按指定计算规则计算该单项排放质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净放行参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：从采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_cleaning_sorting_records`
- 来源：`codex-cxs-344-2021-2025`、`codex-cxc-75-2015-2018`、`jrc-fdm-bref-2019`、`eu-pef-2021-2279`


### 过程：丁香干燥与水分调理（`clove_drying_conditioning`）

#### 输入

##### 产品流

###### 作为投入的 Processed whole cloves（`drying_processed_whole_cloves`）

Processed whole cloves 作为一个独立产品流进入丁香干燥与水分调理。仅记录声明的产品形态、粒度和处理路线，不得同另一形态或路线合并。

- 选定流：Processed whole cloves
- 流属性/单位：Mass / kg
- 数量规则：记录进入本过程的净数量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净放行参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_drying_records`
- 来源：`codex-cxc-75-2015-2018`、`jrc-fdm-bref-2019`、`eu-pef-2021-2279`

###### 作为投入的 Grid electricity（`drying_grid_electricity`）

Grid electricity 作为一个单独产品流进入丁香干燥与水分调理。仅在声明过程实际发生这一具体交换时记录，并与所有其他交换分开计量。

- 选定流：电网电力
- 流属性/单位：Energy / kWh
- 数量规则：记录本过程计量的电力消耗
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净放行参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_drying_records`
- 来源：`codex-cxc-75-2015-2018`、`jrc-fdm-bref-2019`、`eu-pef-2021-2279`

###### 作为投入的 Purchased saturated steam（`drying_purchased_steam`）

Purchased saturated steam 作为一个单独产品流进入丁香干燥与水分调理。仅在声明过程实际发生这一具体交换时记录，并与所有其他交换分开计量。

- 选定流：外购饱和蒸汽
- 流属性/单位：Energy / MJ
- 数量规则：记录本过程消耗的外购或内部转移热能
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净放行参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_drying_records`
- 来源：`codex-cxc-75-2015-2018`、`jrc-fdm-bref-2019`、`eu-pef-2021-2279`

###### 作为投入的 Purchased hot water（`drying_purchased_hot_water`）

Purchased hot water 作为一个单独产品流进入丁香干燥与水分调理。仅在声明过程实际发生这一具体交换时记录，并与所有其他交换分开计量。

- 选定流：外购热水
- 流属性/单位：Energy / MJ
- 数量规则：记录本过程消耗的外购或内部转移热能
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净放行参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_drying_records`
- 来源：`codex-cxc-75-2015-2018`、`jrc-fdm-bref-2019`、`eu-pef-2021-2279`

###### 作为投入的 Heated drying air（`drying_heated_air`）

Heated drying air 作为一个单独产品流进入丁香干燥与水分调理。仅在声明过程实际发生这一具体交换时记录，并与所有其他交换分开计量。

- 选定流：Heated drying air
- 流属性/单位：Energy / MJ
- 数量规则：记录本过程消耗的外购或内部转移热能
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净放行参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_drying_records`
- 来源：`codex-cxc-75-2015-2018`、`jrc-fdm-bref-2019`、`eu-pef-2021-2279`

##### 废物流

_本过程在此方向未定义废物流原子交换。_

##### 基本流

_本过程在此方向未定义基本流原子交换。_

#### 输出

##### 产品流

###### 作为产品产出的 Processed whole cloves（`drying_processed_whole_cloves_output`）

Processed whole cloves 作为一个独立产品流离开丁香干燥与水分调理。仅记录声明的产品形态、粒度和处理路线，不得同另一形态或路线合并。

- 选定流：Processed whole cloves
- 流属性/单位：Mass / kg
- 数量规则：记录离开本过程的净数量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净放行参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_drying_records`
- 来源：`codex-cxc-75-2015-2018`、`jrc-fdm-bref-2019`、`eu-pef-2021-2279`

##### 废物流

###### 作为废物流产出的 Heat-damaged clove rejects（`drying_heat_damaged_rejects`）

Heat-damaged clove rejects 作为一个单独废物流离开丁香干燥与水分调理。应独立称量或测量，并与不同材料、缺陷类别或去向的废物流分开。

- 选定流：Heat-damaged clove rejects
- 流属性/单位：Mass / kg
- 数量规则：记录单独称量或以其他方式测量的离开本过程数量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净放行参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_drying_records`
- 来源：`codex-cxc-75-2015-2018`、`jrc-fdm-bref-2019`、`eu-pef-2021-2279`

###### 作为废物流产出的 Dryer condensate wastewater（`drying_condensate_wastewater`）

Dryer condensate wastewater 作为一个单独废物流离开丁香干燥与水分调理。应独立称量或测量，并与不同材料、缺陷类别或去向的废物流分开。

- 选定流：Dryer condensate wastewater
- 流属性/单位：Mass / kg
- 数量规则：记录单独称量或以其他方式测量的离开本过程数量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净放行参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_drying_records`
- 来源：`codex-cxc-75-2015-2018`、`jrc-fdm-bref-2019`、`eu-pef-2021-2279`

##### 基本流

###### 作为基本流排放的 Water vapour to air（`drying_water_vapour_air`）

Water vapour to air 作为一个单项空气排放离开丁香干燥与水分调理。记录末端控制后的实际释放质量，并与所有其他物质或粒径分数分开。

- 选定流：Water vapour to air
- 流属性/单位：Mass / kg
- 数量规则：依据直接监测或已采集活动数据，按指定计算规则计算该单项排放质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净放行参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：从采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_drying_records`
- 来源：`codex-cxc-75-2015-2018`、`jrc-fdm-bref-2019`、`eu-pef-2021-2279`

###### 作为基本流排放的 Clove particulate matter to air（`drying_clove_pm_air`）

Clove particulate matter to air 作为一个单项空气排放离开丁香干燥与水分调理。记录末端控制后的实际释放质量，并与所有其他物质或粒径分数分开。

- 选定流：Clove particulate matter to air
- 流属性/单位：Mass / kg
- 数量规则：依据直接监测或已采集活动数据，按指定计算规则计算该单项排放质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净放行参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：从采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_drying_records`
- 来源：`codex-cxc-75-2015-2018`、`jrc-fdm-bref-2019`、`eu-pef-2021-2279`


### 过程：丁香破碎、研磨与粒度分级（`clove_size_reduction`）

#### 输入

##### 产品流

###### 作为投入的 Processed whole cloves（`size_reduction_processed_whole_cloves`）

Processed whole cloves 作为一个独立产品流进入丁香破碎、研磨与粒度分级。仅记录声明的产品形态、粒度和处理路线，不得同另一形态或路线合并。

- 选定流：Processed whole cloves
- 流属性/单位：Mass / kg
- 数量规则：记录进入本过程的净数量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净放行参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_size_reduction_records`
- 来源：`codex-cxs-344-2021-2025`、`codex-cxc-75-2015-2018`、`jrc-fdm-bref-2019`、`eu-pef-2021-2279`

###### 作为投入的 Grid electricity（`size_reduction_grid_electricity`）

Grid electricity 作为一个单独产品流进入丁香破碎、研磨与粒度分级。仅在声明过程实际发生这一具体交换时记录，并与所有其他交换分开计量。

- 选定流：电网电力
- 流属性/单位：Energy / kWh
- 数量规则：记录本过程计量的电力消耗
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净放行参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_size_reduction_records`
- 来源：`codex-cxs-344-2021-2025`、`codex-cxc-75-2015-2018`、`jrc-fdm-bref-2019`、`eu-pef-2021-2279`

###### 作为投入的 Dry filtered compressed air（`size_reduction_compressed_air`）

Dry filtered compressed air 作为一个单独产品流进入丁香破碎、研磨与粒度分级。仅在声明过程实际发生这一具体交换时记录，并与所有其他交换分开计量。

- 选定流：Dry filtered compressed air
- 流属性/单位：Volume / Nm3
- 数量规则：记录本过程计量的干燥压缩空气用量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净放行参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_size_reduction_records`
- 来源：`codex-cxs-344-2021-2025`、`codex-cxc-75-2015-2018`、`jrc-fdm-bref-2019`、`eu-pef-2021-2279`

##### 废物流

_本过程在此方向未定义废物流原子交换。_

##### 基本流

_本过程在此方向未定义基本流原子交换。_

#### 输出

##### 产品流

###### 作为产品产出的 Crushed cloves（`size_reduction_crushed_cloves`）

Crushed cloves 作为一个独立产品流离开丁香破碎、研磨与粒度分级。仅记录声明的产品形态、粒度和处理路线，不得同另一形态或路线合并。

- 选定流：Crushed cloves
- 流属性/单位：Mass / kg
- 数量规则：记录离开本过程的净数量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净放行参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_size_reduction_records`
- 来源：`codex-cxs-344-2021-2025`、`codex-cxc-75-2015-2018`、`jrc-fdm-bref-2019`、`eu-pef-2021-2279`

###### 作为产品产出的 Ground cloves（`size_reduction_ground_cloves`）

Ground cloves 作为一个独立产品流离开丁香破碎、研磨与粒度分级。仅记录声明的产品形态、粒度和处理路线，不得同另一形态或路线合并。

- 选定流：Ground cloves
- 流属性/单位：Mass / kg
- 数量规则：记录离开本过程的净数量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净放行参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_size_reduction_records`
- 来源：`codex-cxs-344-2021-2025`、`codex-cxc-75-2015-2018`、`jrc-fdm-bref-2019`、`eu-pef-2021-2279`

###### 作为产品产出的 Clove powder（`size_reduction_clove_powder`）

Clove powder 作为一个独立产品流离开丁香破碎、研磨与粒度分级。仅记录声明的产品形态、粒度和处理路线，不得同另一形态或路线合并。

- 选定流：Clove powder
- 流属性/单位：Mass / kg
- 数量规则：记录离开本过程的净数量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净放行参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_size_reduction_records`
- 来源：`codex-cxs-344-2021-2025`、`codex-cxc-75-2015-2018`、`jrc-fdm-bref-2019`、`eu-pef-2021-2279`

###### 作为产品产出的 Saleable clove stem screenings（`size_reduction_saleable_stem_screenings`）

Saleable clove stem screenings 作为一个单独产品流离开丁香破碎、研磨与粒度分级。仅在声明过程实际发生这一具体交换时记录，并与所有其他交换分开计量。

- 选定流：Saleable clove stem screenings
- 流属性/单位：Mass / kg
- 数量规则：记录离开本过程的净数量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净放行参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_size_reduction_records`
- 来源：`codex-cxs-344-2021-2025`、`codex-cxc-75-2015-2018`、`jrc-fdm-bref-2019`、`eu-pef-2021-2279`

##### 废物流

###### 作为废物流产出的 Clove stem screenings for disposal（`size_reduction_stem_screenings_waste`）

Clove stem screenings for disposal 作为一个单独废物流离开丁香破碎、研磨与粒度分级。应独立称量或测量，并与不同材料、缺陷类别或去向的废物流分开。

- 选定流：Clove stem screenings for disposal
- 流属性/单位：Mass / kg
- 数量规则：记录单独称量或以其他方式测量的离开本过程数量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净放行参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_size_reduction_records`
- 来源：`codex-cxs-344-2021-2025`、`codex-cxc-75-2015-2018`、`jrc-fdm-bref-2019`、`eu-pef-2021-2279`

###### 作为废物流产出的 Oversized clove particles for disposal（`size_reduction_oversize_waste`）

Oversized clove particles for disposal 作为一个单独废物流离开丁香破碎、研磨与粒度分级。应独立称量或测量，并与不同材料、缺陷类别或去向的废物流分开。

- 选定流：Oversized clove particles for disposal
- 流属性/单位：Mass / kg
- 数量规则：记录单独称量或以其他方式测量的离开本过程数量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净放行参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_size_reduction_records`
- 来源：`codex-cxs-344-2021-2025`、`codex-cxc-75-2015-2018`、`jrc-fdm-bref-2019`、`eu-pef-2021-2279`

###### 作为废物流产出的 Captured clove dust from size reduction（`size_reduction_captured_dust`）

Captured clove dust from size reduction 作为一个单独废物流离开丁香破碎、研磨与粒度分级。应独立称量或测量，并与不同材料、缺陷类别或去向的废物流分开。

- 选定流：Captured clove dust from size reduction
- 流属性/单位：Mass / kg
- 数量规则：记录单独称量或以其他方式测量的离开本过程数量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净放行参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_size_reduction_records`
- 来源：`codex-cxs-344-2021-2025`、`codex-cxc-75-2015-2018`、`jrc-fdm-bref-2019`、`eu-pef-2021-2279`

###### 作为废物流产出的 Ferrous metal fragments removed after milling（`size_reduction_ferrous_metal_waste`）

Ferrous metal fragments removed after milling 作为一个单独废物流离开丁香破碎、研磨与粒度分级。应独立称量或测量，并与不同材料、缺陷类别或去向的废物流分开。

- 选定流：Ferrous metal fragments removed after milling
- 流属性/单位：Mass / kg
- 数量规则：记录单独称量或以其他方式测量的离开本过程数量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净放行参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_size_reduction_records`
- 来源：`codex-cxs-344-2021-2025`、`codex-cxc-75-2015-2018`、`jrc-fdm-bref-2019`、`eu-pef-2021-2279`

###### 作为废物流产出的 Non-ferrous metal fragments removed after milling（`size_reduction_nonferrous_metal_waste`）

Non-ferrous metal fragments removed after milling 作为一个单独废物流离开丁香破碎、研磨与粒度分级。应独立称量或测量，并与不同材料、缺陷类别或去向的废物流分开。

- 选定流：Non-ferrous metal fragments removed after milling
- 流属性/单位：Mass / kg
- 数量规则：记录单独称量或以其他方式测量的离开本过程数量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净放行参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_size_reduction_records`
- 来源：`codex-cxs-344-2021-2025`、`codex-cxc-75-2015-2018`、`jrc-fdm-bref-2019`、`eu-pef-2021-2279`

###### 作为废物流产出的 Spent polyester dust-filter bags（`size_reduction_spent_filter_bags`）

Spent polyester dust-filter bags 作为一个单独废物流离开丁香破碎、研磨与粒度分级。应独立称量或测量，并与不同材料、缺陷类别或去向的废物流分开。

- 选定流：Spent polyester dust-filter bags
- 流属性/单位：Mass / kg
- 数量规则：记录单独称量或以其他方式测量的离开本过程数量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净放行参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_size_reduction_records`
- 来源：`codex-cxs-344-2021-2025`、`codex-cxc-75-2015-2018`、`jrc-fdm-bref-2019`、`eu-pef-2021-2279`

##### 基本流

###### 作为基本流排放的 Clove particulate matter to air（`size_reduction_clove_pm_air`）

Clove particulate matter to air 作为一个单项空气排放离开丁香破碎、研磨与粒度分级。记录末端控制后的实际释放质量，并与所有其他物质或粒径分数分开。

- 选定流：Clove particulate matter to air
- 流属性/单位：Mass / kg
- 数量规则：依据直接监测或已采集活动数据，按指定计算规则计算该单项排放质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净放行参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：从采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_size_reduction_records`
- 来源：`codex-cxs-344-2021-2025`、`codex-cxc-75-2015-2018`、`jrc-fdm-bref-2019`、`eu-pef-2021-2279`


### 过程：蒸汽微生物减除（`steam_microbial_reduction`）

#### 输入

##### 产品流

###### 作为投入的 Processed whole cloves（`steam_treatment_whole_cloves_input`）

Processed whole cloves 作为一个独立产品流进入蒸汽微生物减除。仅记录声明的产品形态、粒度和处理路线，不得同另一形态或路线合并。

- 选定流：Processed whole cloves
- 流属性/单位：Mass / kg
- 数量规则：记录进入本过程的净数量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净放行参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_steam_treatment_records`
- 来源：`codex-cxc-75-2015-2018`、`jrc-fdm-bref-2019`、`eu-pef-2021-2279`

###### 作为投入的 Crushed cloves（`steam_treatment_crushed_cloves_input`）

Crushed cloves 作为一个独立产品流进入蒸汽微生物减除。仅记录声明的产品形态、粒度和处理路线，不得同另一形态或路线合并。

- 选定流：Crushed cloves
- 流属性/单位：Mass / kg
- 数量规则：记录进入本过程的净数量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净放行参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_steam_treatment_records`
- 来源：`codex-cxc-75-2015-2018`、`jrc-fdm-bref-2019`、`eu-pef-2021-2279`

###### 作为投入的 Ground cloves（`steam_treatment_ground_cloves_input`）

Ground cloves 作为一个独立产品流进入蒸汽微生物减除。仅记录声明的产品形态、粒度和处理路线，不得同另一形态或路线合并。

- 选定流：Ground cloves
- 流属性/单位：Mass / kg
- 数量规则：记录进入本过程的净数量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净放行参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_steam_treatment_records`
- 来源：`codex-cxc-75-2015-2018`、`jrc-fdm-bref-2019`、`eu-pef-2021-2279`

###### 作为投入的 Clove powder（`steam_treatment_powder_input`）

Clove powder 作为一个独立产品流进入蒸汽微生物减除。仅记录声明的产品形态、粒度和处理路线，不得同另一形态或路线合并。

- 选定流：Clove powder
- 流属性/单位：Mass / kg
- 数量规则：记录进入本过程的净数量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净放行参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_steam_treatment_records`
- 来源：`codex-cxc-75-2015-2018`、`jrc-fdm-bref-2019`、`eu-pef-2021-2279`

###### 作为投入的 Purchased saturated steam（`steam_treatment_purchased_steam`）

Purchased saturated steam 作为一个单独产品流进入蒸汽微生物减除。仅在声明过程实际发生这一具体交换时记录，并与所有其他交换分开计量。

- 选定流：外购饱和蒸汽
- 流属性/单位：Energy / MJ
- 数量规则：记录本过程消耗的外购或内部转移热能
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净放行参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_steam_treatment_records`
- 来源：`codex-cxc-75-2015-2018`、`jrc-fdm-bref-2019`、`eu-pef-2021-2279`

###### 作为投入的 Grid electricity（`steam_treatment_grid_electricity`）

Grid electricity 作为一个单独产品流进入蒸汽微生物减除。仅在声明过程实际发生这一具体交换时记录，并与所有其他交换分开计量。

- 选定流：电网电力
- 流属性/单位：Energy / kWh
- 数量规则：记录本过程计量的电力消耗
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净放行参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_steam_treatment_records`
- 来源：`codex-cxc-75-2015-2018`、`jrc-fdm-bref-2019`、`eu-pef-2021-2279`

##### 废物流

_本过程在此方向未定义废物流原子交换。_

##### 基本流

_本过程在此方向未定义基本流原子交换。_

#### 输出

##### 产品流

###### 作为产品产出的 Processed whole cloves（`steam_treatment_whole_cloves_output`）

Processed whole cloves 作为一个独立产品流离开蒸汽微生物减除。仅记录声明的产品形态、粒度和处理路线，不得同另一形态或路线合并。

- 选定流：Processed whole cloves
- 流属性/单位：Mass / kg
- 数量规则：记录离开本过程的净数量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净放行参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_steam_treatment_records`
- 来源：`codex-cxc-75-2015-2018`、`jrc-fdm-bref-2019`、`eu-pef-2021-2279`

###### 作为产品产出的 Crushed cloves（`steam_treatment_crushed_cloves_output`）

Crushed cloves 作为一个独立产品流离开蒸汽微生物减除。仅记录声明的产品形态、粒度和处理路线，不得同另一形态或路线合并。

- 选定流：Crushed cloves
- 流属性/单位：Mass / kg
- 数量规则：记录离开本过程的净数量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净放行参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_steam_treatment_records`
- 来源：`codex-cxc-75-2015-2018`、`jrc-fdm-bref-2019`、`eu-pef-2021-2279`

###### 作为产品产出的 Ground cloves（`steam_treatment_ground_cloves_output`）

Ground cloves 作为一个独立产品流离开蒸汽微生物减除。仅记录声明的产品形态、粒度和处理路线，不得同另一形态或路线合并。

- 选定流：Ground cloves
- 流属性/单位：Mass / kg
- 数量规则：记录离开本过程的净数量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净放行参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_steam_treatment_records`
- 来源：`codex-cxc-75-2015-2018`、`jrc-fdm-bref-2019`、`eu-pef-2021-2279`

###### 作为产品产出的 Clove powder（`steam_treatment_powder_output`）

Clove powder 作为一个独立产品流离开蒸汽微生物减除。仅记录声明的产品形态、粒度和处理路线，不得同另一形态或路线合并。

- 选定流：Clove powder
- 流属性/单位：Mass / kg
- 数量规则：记录离开本过程的净数量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净放行参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_steam_treatment_records`
- 来源：`codex-cxc-75-2015-2018`、`jrc-fdm-bref-2019`、`eu-pef-2021-2279`

##### 废物流

###### 作为废物流产出的 Steam-treatment condensate wastewater（`steam_treatment_condensate_wastewater`）

Steam-treatment condensate wastewater 作为一个单独废物流离开蒸汽微生物减除。应独立称量或测量，并与不同材料、缺陷类别或去向的废物流分开。

- 选定流：Steam-treatment condensate wastewater
- 流属性/单位：Energy / MJ
- 数量规则：记录单独称量或以其他方式测量的离开本过程数量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净放行参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_steam_treatment_records`
- 来源：`codex-cxc-75-2015-2018`、`jrc-fdm-bref-2019`、`eu-pef-2021-2279`

###### 作为废物流产出的 Off-spec steam-treated whole clove waste（`steam_treatment_whole_rejects`）

Off-spec steam-treated whole clove waste 作为一个单独废物流离开蒸汽微生物减除。应独立称量或测量，并与不同材料、缺陷类别或去向的废物流分开。

- 选定流：Off-spec steam-treated whole clove waste
- 流属性/单位：Energy / MJ
- 数量规则：记录单独称量或以其他方式测量的离开本过程数量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净放行参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_steam_treatment_records`
- 来源：`codex-cxc-75-2015-2018`、`jrc-fdm-bref-2019`、`eu-pef-2021-2279`

###### 作为废物流产出的 Off-spec steam-treated crushed clove waste（`steam_treatment_crushed_rejects`）

Off-spec steam-treated crushed clove waste 作为一个单独废物流离开蒸汽微生物减除。应独立称量或测量，并与不同材料、缺陷类别或去向的废物流分开。

- 选定流：Off-spec steam-treated crushed clove waste
- 流属性/单位：Energy / MJ
- 数量规则：记录单独称量或以其他方式测量的离开本过程数量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净放行参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_steam_treatment_records`
- 来源：`codex-cxc-75-2015-2018`、`jrc-fdm-bref-2019`、`eu-pef-2021-2279`

###### 作为废物流产出的 Off-spec steam-treated ground clove waste（`steam_treatment_ground_rejects`）

Off-spec steam-treated ground clove waste 作为一个单独废物流离开蒸汽微生物减除。应独立称量或测量，并与不同材料、缺陷类别或去向的废物流分开。

- 选定流：Off-spec steam-treated ground clove waste
- 流属性/单位：Energy / MJ
- 数量规则：记录单独称量或以其他方式测量的离开本过程数量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净放行参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_steam_treatment_records`
- 来源：`codex-cxc-75-2015-2018`、`jrc-fdm-bref-2019`、`eu-pef-2021-2279`

###### 作为废物流产出的 Off-spec steam-treated clove powder waste（`steam_treatment_powder_rejects`）

Off-spec steam-treated clove powder waste 作为一个单独废物流离开蒸汽微生物减除。应独立称量或测量，并与不同材料、缺陷类别或去向的废物流分开。

- 选定流：Off-spec steam-treated clove powder waste
- 流属性/单位：Energy / MJ
- 数量规则：记录单独称量或以其他方式测量的离开本过程数量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净放行参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_steam_treatment_records`
- 来源：`codex-cxc-75-2015-2018`、`jrc-fdm-bref-2019`、`eu-pef-2021-2279`

##### 基本流

###### 作为基本流排放的 Water vapour to air（`steam_treatment_water_vapour_air`）

Water vapour to air 作为一个单项空气排放离开蒸汽微生物减除。记录末端控制后的实际释放质量，并与所有其他物质或粒径分数分开。

- 选定流：Water vapour to air
- 流属性/单位：Mass / kg
- 数量规则：依据直接监测或已采集活动数据，按指定计算规则计算该单项排放质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净放行参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：从采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_steam_treatment_records`
- 来源：`codex-cxc-75-2015-2018`、`jrc-fdm-bref-2019`、`eu-pef-2021-2279`

###### 作为基本流排放的 Clove particulate matter to air（`steam_treatment_clove_pm_air`）

Clove particulate matter to air 作为一个单项空气排放离开蒸汽微生物减除。记录末端控制后的实际释放质量，并与所有其他物质或粒径分数分开。

- 选定流：Clove particulate matter to air
- 流属性/单位：Mass / kg
- 数量规则：依据直接监测或已采集活动数据，按指定计算规则计算该单项排放质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净放行参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：从采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_steam_treatment_records`
- 来源：`codex-cxc-75-2015-2018`、`jrc-fdm-bref-2019`、`eu-pef-2021-2279`


### 过程：无定形二氧化硅投料（`anticaking_agent_dosing`）

#### 输入

##### 产品流

###### 作为投入的 Ground cloves（`additive_ground_cloves_input`）

Ground cloves 作为一个独立产品流进入无定形二氧化硅投料。仅记录声明的产品形态、粒度和处理路线，不得同另一形态或路线合并。

- 选定流：Ground cloves
- 流属性/单位：Mass / kg
- 数量规则：记录进入本过程的净数量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净放行参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_additive_dosing_records`
- 来源：`codex-cxs-344-2021-2025`、`codex-gsfa-ins-551-2025`、`eu-pef-2021-2279`

###### 作为投入的 Clove powder（`additive_powder_input`）

Clove powder 作为一个独立产品流进入无定形二氧化硅投料。仅记录声明的产品形态、粒度和处理路线，不得同另一形态或路线合并。

- 选定流：Clove powder
- 流属性/单位：Mass / kg
- 数量规则：记录进入本过程的净数量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净放行参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_additive_dosing_records`
- 来源：`codex-cxs-344-2021-2025`、`codex-gsfa-ins-551-2025`、`eu-pef-2021-2279`

###### 作为投入的 Amorphous silicon dioxide (INS 551)（`additive_amorphous_silica`）

Amorphous silicon dioxide (INS 551) 作为一个单独产品流进入无定形二氧化硅投料。仅在声明过程实际发生这一具体交换时记录，并与所有其他交换分开计量。

- 选定流：Amorphous silicon dioxide (INS 551)
- 流属性/单位：Mass / kg
- 数量规则：记录进入本过程的净数量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净放行参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_additive_dosing_records`
- 来源：`codex-cxs-344-2021-2025`、`codex-gsfa-ins-551-2025`、`eu-pef-2021-2279`

###### 作为投入的 Grid electricity（`additive_grid_electricity`）

Grid electricity 作为一个单独产品流进入无定形二氧化硅投料。仅在声明过程实际发生这一具体交换时记录，并与所有其他交换分开计量。

- 选定流：电网电力
- 流属性/单位：Energy / kWh
- 数量规则：记录本过程计量的电力消耗
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净放行参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_additive_dosing_records`
- 来源：`codex-cxs-344-2021-2025`、`codex-gsfa-ins-551-2025`、`eu-pef-2021-2279`

##### 废物流

_本过程在此方向未定义废物流原子交换。_

##### 基本流

_本过程在此方向未定义基本流原子交换。_

#### 输出

##### 产品流

###### 作为产品产出的 Ground cloves with amorphous silicon dioxide（`additive_ground_cloves_output`）

Ground cloves with amorphous silicon dioxide 作为一个独立产品流离开无定形二氧化硅投料。仅记录声明的产品形态、粒度和处理路线，不得同另一形态或路线合并。

- 选定流：Ground cloves with amorphous silicon dioxide
- 流属性/单位：Mass / kg
- 数量规则：记录离开本过程的净数量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净放行参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_additive_dosing_records`
- 来源：`codex-cxs-344-2021-2025`、`codex-gsfa-ins-551-2025`、`eu-pef-2021-2279`

###### 作为产品产出的 Clove powder with amorphous silicon dioxide（`additive_powder_output`）

Clove powder with amorphous silicon dioxide 作为一个独立产品流离开无定形二氧化硅投料。仅记录声明的产品形态、粒度和处理路线，不得同另一形态或路线合并。

- 选定流：Clove powder with amorphous silicon dioxide
- 流属性/单位：Mass / kg
- 数量规则：记录离开本过程的净数量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净放行参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_additive_dosing_records`
- 来源：`codex-cxs-344-2021-2025`、`codex-gsfa-ins-551-2025`、`eu-pef-2021-2279`

##### 废物流

###### 作为废物流产出的 Spilled ground clove waste（`additive_ground_clove_spill`）

Spilled ground clove waste 作为一个单独废物流离开无定形二氧化硅投料。应独立称量或测量，并与不同材料、缺陷类别或去向的废物流分开。

- 选定流：Spilled ground clove waste
- 流属性/单位：Mass / kg
- 数量规则：记录单独称量或以其他方式测量的离开本过程数量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净放行参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_additive_dosing_records`
- 来源：`codex-cxs-344-2021-2025`、`codex-gsfa-ins-551-2025`、`eu-pef-2021-2279`

###### 作为废物流产出的 Spilled clove powder waste（`additive_powder_spill`）

Spilled clove powder waste 作为一个单独废物流离开无定形二氧化硅投料。应独立称量或测量，并与不同材料、缺陷类别或去向的废物流分开。

- 选定流：Spilled clove powder waste
- 流属性/单位：Mass / kg
- 数量规则：记录单独称量或以其他方式测量的离开本过程数量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净放行参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_additive_dosing_records`
- 来源：`codex-cxs-344-2021-2025`、`codex-gsfa-ins-551-2025`、`eu-pef-2021-2279`

###### 作为废物流产出的 Spilled amorphous silicon dioxide waste（`additive_silica_spill`）

Spilled amorphous silicon dioxide waste 作为一个单独废物流离开无定形二氧化硅投料。应独立称量或测量，并与不同材料、缺陷类别或去向的废物流分开。

- 选定流：Spilled amorphous silicon dioxide waste
- 流属性/单位：Mass / kg
- 数量规则：记录单独称量或以其他方式测量的离开本过程数量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净放行参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_additive_dosing_records`
- 来源：`codex-cxs-344-2021-2025`、`codex-gsfa-ins-551-2025`、`eu-pef-2021-2279`

##### 基本流

###### 作为基本流排放的 Amorphous silicon dioxide particulate matter to air（`additive_silica_pm_air`）

Amorphous silicon dioxide particulate matter to air 作为一个单项空气排放离开无定形二氧化硅投料。记录末端控制后的实际释放质量，并与所有其他物质或粒径分数分开。

- 选定流：Amorphous silicon dioxide particulate matter to air
- 流属性/单位：Mass / kg
- 数量规则：依据直接监测或已采集活动数据，按指定计算规则计算该单项排放质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净放行参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：从采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_additive_dosing_records`
- 来源：`codex-cxs-344-2021-2025`、`codex-gsfa-ins-551-2025`、`eu-pef-2021-2279`

###### 作为基本流排放的 Clove particulate matter to air（`additive_clove_pm_air`）

Clove particulate matter to air 作为一个单项空气排放离开无定形二氧化硅投料。记录末端控制后的实际释放质量，并与所有其他物质或粒径分数分开。

- 选定流：Clove particulate matter to air
- 流属性/单位：Mass / kg
- 数量规则：依据直接监测或已采集活动数据，按指定计算规则计算该单项排放质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净放行参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：从采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_additive_dosing_records`
- 来源：`codex-cxs-344-2021-2025`、`codex-gsfa-ins-551-2025`、`eu-pef-2021-2279`


### 过程：场内蒸汽、热水与干燥热风生产（`onsite_heat_generation`）

#### 输入

##### 产品流

###### 作为投入的 Potable boiler makeup water（`utility_makeup_water`）

Potable boiler makeup water 作为一个单独产品流进入场内蒸汽、热水与干燥热风生产。仅在声明过程实际发生这一具体交换时记录，并与所有其他交换分开计量。

- 选定流：Potable boiler makeup water
- 流属性/单位：Mass / kg
- 数量规则：记录进入本过程的净数量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净放行参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_utility_generation_records`
- 来源：`jrc-fdm-bref-2019`、`eu-pef-2021-2279`

###### 作为投入的 Grid electricity（`utility_grid_electricity`）

Grid electricity 作为一个单独产品流进入场内蒸汽、热水与干燥热风生产。仅在声明过程实际发生这一具体交换时记录，并与所有其他交换分开计量。

- 选定流：电网电力
- 流属性/单位：Energy / kWh
- 数量规则：记录本过程计量的电力消耗
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净放行参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_utility_generation_records`
- 来源：`jrc-fdm-bref-2019`、`eu-pef-2021-2279`

###### 作为投入的 Natural gas（`utility_natural_gas`）

Natural gas 作为一个单独产品流进入场内蒸汽、热水与干燥热风生产。仅在声明过程实际发生这一具体交换时记录，并与所有其他交换分开计量。

- 选定流：天然气
- 流属性/单位：Mass / kg
- 数量规则：记录进入本过程的净数量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净放行参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_utility_generation_records`
- 来源：`jrc-fdm-bref-2019`、`eu-pef-2021-2279`

###### 作为投入的 Diesel fuel（`utility_diesel`）

Diesel fuel 作为一个单独产品流进入场内蒸汽、热水与干燥热风生产。仅在声明过程实际发生这一具体交换时记录，并与所有其他交换分开计量。

- 选定流：柴油燃料
- 流属性/单位：Mass / kg
- 数量规则：记录进入本过程的净数量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净放行参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_utility_generation_records`
- 来源：`jrc-fdm-bref-2019`、`eu-pef-2021-2279`

###### 作为投入的 Liquefied petroleum gas（`utility_lpg`）

Liquefied petroleum gas 作为一个单独产品流进入场内蒸汽、热水与干燥热风生产。仅在声明过程实际发生这一具体交换时记录，并与所有其他交换分开计量。

- 选定流：液化石油气
- 流属性/单位：Mass / kg
- 数量规则：记录进入本过程的净数量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净放行参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_utility_generation_records`
- 来源：`jrc-fdm-bref-2019`、`eu-pef-2021-2279`

##### 废物流

_本过程在此方向未定义废物流原子交换。_

##### 基本流

_本过程在此方向未定义基本流原子交换。_

#### 输出

##### 产品流

###### 作为产品产出的 Saturated steam（`utility_saturated_steam`）

Saturated steam 作为一个单独产品流离开场内蒸汽、热水与干燥热风生产。仅在声明过程实际发生这一具体交换时记录，并与所有其他交换分开计量。

- 选定流：Saturated steam
- 流属性/单位：Energy / MJ
- 数量规则：记录离开本过程的净数量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净放行参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_utility_generation_records`
- 来源：`jrc-fdm-bref-2019`、`eu-pef-2021-2279`

###### 作为产品产出的 Hot water（`utility_hot_water`）

Hot water 作为一个单独产品流离开场内蒸汽、热水与干燥热风生产。仅在声明过程实际发生这一具体交换时记录，并与所有其他交换分开计量。

- 选定流：热水
- 流属性/单位：Energy / MJ
- 数量规则：记录离开本过程的净数量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净放行参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_utility_generation_records`
- 来源：`jrc-fdm-bref-2019`、`eu-pef-2021-2279`

###### 作为产品产出的 Heated drying air（`utility_heated_drying_air`）

Heated drying air 作为一个单独产品流离开场内蒸汽、热水与干燥热风生产。仅在声明过程实际发生这一具体交换时记录，并与所有其他交换分开计量。

- 选定流：Heated drying air
- 流属性/单位：Energy / MJ
- 数量规则：记录离开本过程的净数量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净放行参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_utility_generation_records`
- 来源：`jrc-fdm-bref-2019`、`eu-pef-2021-2279`

##### 废物流

###### 作为废物流产出的 Boiler blowdown wastewater（`utility_boiler_blowdown`）

Boiler blowdown wastewater 作为一个单独废物流离开场内蒸汽、热水与干燥热风生产。应独立称量或测量，并与不同材料、缺陷类别或去向的废物流分开。

- 选定流：锅炉排污废水
- 流属性/单位：Mass / kg
- 数量规则：记录单独称量或以其他方式测量的离开本过程数量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净放行参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_utility_generation_records`
- 来源：`jrc-fdm-bref-2019`、`eu-pef-2021-2279`

##### 基本流

###### 作为基本流排放的 Carbon dioxide, fossil, to air（`utility_fossil_co2_air`）

Carbon dioxide, fossil, to air 作为一个单项空气排放离开场内蒸汽、热水与干燥热风生产。记录末端控制后的实际释放质量，并与所有其他物质或粒径分数分开。

- 选定流：化石源二氧化碳，排入空气
- 流属性/单位：Mass / kg
- 数量规则：依据直接监测或已采集活动数据，按指定计算规则计算该单项排放质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净放行参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：从采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_utility_generation_records`
- 来源：`jrc-fdm-bref-2019`、`eu-pef-2021-2279`

###### 作为基本流排放的 Nitrogen monoxide to air（`utility_nitrogen_monoxide_air`）

Nitrogen monoxide to air 作为一个单项空气排放离开场内蒸汽、热水与干燥热风生产。记录末端控制后的实际释放质量，并与所有其他物质或粒径分数分开。

- 选定流：一氧化氮，排入空气
- 流属性/单位：Mass / kg
- 数量规则：依据直接监测或已采集活动数据，按指定计算规则计算该单项排放质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净放行参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：从采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_utility_generation_records`
- 来源：`jrc-fdm-bref-2019`、`eu-pef-2021-2279`

###### 作为基本流排放的 Nitrogen dioxide to air（`utility_nitrogen_dioxide_air`）

Nitrogen dioxide to air 作为一个单项空气排放离开场内蒸汽、热水与干燥热风生产。记录末端控制后的实际释放质量，并与所有其他物质或粒径分数分开。

- 选定流：二氧化氮，排入空气
- 流属性/单位：Mass / kg
- 数量规则：依据直接监测或已采集活动数据，按指定计算规则计算该单项排放质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净放行参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：从采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_utility_generation_records`
- 来源：`jrc-fdm-bref-2019`、`eu-pef-2021-2279`

###### 作为基本流排放的 Sulfur dioxide to air（`utility_sulfur_dioxide_air`）

Sulfur dioxide to air 作为一个单项空气排放离开场内蒸汽、热水与干燥热风生产。记录末端控制后的实际释放质量，并与所有其他物质或粒径分数分开。

- 选定流：二氧化硫，排入空气
- 流属性/单位：Mass / kg
- 数量规则：依据直接监测或已采集活动数据，按指定计算规则计算该单项排放质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净放行参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：从采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_utility_generation_records`
- 来源：`jrc-fdm-bref-2019`、`eu-pef-2021-2279`

###### 作为基本流排放的 Sulfur trioxide to air（`utility_sulfur_trioxide_air`）

Sulfur trioxide to air 作为一个单项空气排放离开场内蒸汽、热水与干燥热风生产。记录末端控制后的实际释放质量，并与所有其他物质或粒径分数分开。

- 选定流：Sulfur trioxide to air
- 流属性/单位：Mass / kg
- 数量规则：依据直接监测或已采集活动数据，按指定计算规则计算该单项排放质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净放行参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：从采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_utility_generation_records`
- 来源：`jrc-fdm-bref-2019`、`eu-pef-2021-2279`

###### 作为基本流排放的 Particulate matter, less than 2.5 micrometres, to air（`utility_pm25_air`）

Particulate matter, less than 2.5 micrometres, to air 作为一个单项空气排放离开场内蒸汽、热水与干燥热风生产。记录末端控制后的实际释放质量，并与所有其他物质或粒径分数分开。

- 选定流：粒径小于2.5微米的颗粒物，排入空气
- 流属性/单位：Mass / kg
- 数量规则：依据直接监测或已采集活动数据，按指定计算规则计算该单项排放质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净放行参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：从采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_utility_generation_records`
- 来源：`jrc-fdm-bref-2019`、`eu-pef-2021-2279`

###### 作为基本流排放的 Particulate matter, 2.5 to 10 micrometres, to air（`utility_pm_coarse_air`）

Particulate matter, 2.5 to 10 micrometres, to air 作为一个单项空气排放离开场内蒸汽、热水与干燥热风生产。记录末端控制后的实际释放质量，并与所有其他物质或粒径分数分开。

- 选定流：Particulate matter, 2.5 to 10 micrometres, to air
- 流属性/单位：Mass / kg
- 数量规则：依据直接监测或已采集活动数据，按指定计算规则计算该单项排放质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净放行参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：从采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_utility_generation_records`
- 来源：`jrc-fdm-bref-2019`、`eu-pef-2021-2279`


### 过程：包装、受控贮存与产品放行（`packaging_storage_release`）

#### 输入

##### 产品流

###### 作为投入的 Processed whole cloves（`packaging_whole_cloves_input`）

Processed whole cloves 作为一个独立产品流进入包装、受控贮存与产品放行。仅记录声明的产品形态、粒度和处理路线，不得同另一形态或路线合并。

- 选定流：Processed whole cloves
- 流属性/单位：Mass / kg
- 数量规则：记录进入本过程的净数量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净放行参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_release_records`
- 来源：`codex-cxs-344-2021-2025`、`codex-cxc-75-2015-2018`、`eu-pef-2021-2279`

###### 作为投入的 Crushed cloves（`packaging_crushed_cloves_input`）

Crushed cloves 作为一个独立产品流进入包装、受控贮存与产品放行。仅记录声明的产品形态、粒度和处理路线，不得同另一形态或路线合并。

- 选定流：Crushed cloves
- 流属性/单位：Mass / kg
- 数量规则：记录进入本过程的净数量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净放行参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_release_records`
- 来源：`codex-cxs-344-2021-2025`、`codex-cxc-75-2015-2018`、`eu-pef-2021-2279`

###### 作为投入的 Ground cloves（`packaging_ground_cloves_input`）

Ground cloves 作为一个独立产品流进入包装、受控贮存与产品放行。仅记录声明的产品形态、粒度和处理路线，不得同另一形态或路线合并。

- 选定流：Ground cloves
- 流属性/单位：Mass / kg
- 数量规则：记录进入本过程的净数量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净放行参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_release_records`
- 来源：`codex-cxs-344-2021-2025`、`codex-cxc-75-2015-2018`、`eu-pef-2021-2279`

###### 作为投入的 Clove powder（`packaging_powder_input`）

Clove powder 作为一个独立产品流进入包装、受控贮存与产品放行。仅记录声明的产品形态、粒度和处理路线，不得同另一形态或路线合并。

- 选定流：Clove powder
- 流属性/单位：Mass / kg
- 数量规则：记录进入本过程的净数量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净放行参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_release_records`
- 来源：`codex-cxs-344-2021-2025`、`codex-cxc-75-2015-2018`、`eu-pef-2021-2279`

###### 作为投入的 Ground cloves with amorphous silicon dioxide（`packaging_ground_silica_input`）

Ground cloves with amorphous silicon dioxide 作为一个独立产品流进入包装、受控贮存与产品放行。仅记录声明的产品形态、粒度和处理路线，不得同另一形态或路线合并。

- 选定流：Ground cloves with amorphous silicon dioxide
- 流属性/单位：Mass / kg
- 数量规则：记录进入本过程的净数量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净放行参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_release_records`
- 来源：`codex-cxs-344-2021-2025`、`codex-cxc-75-2015-2018`、`eu-pef-2021-2279`

###### 作为投入的 Clove powder with amorphous silicon dioxide（`packaging_powder_silica_input`）

Clove powder with amorphous silicon dioxide 作为一个独立产品流进入包装、受控贮存与产品放行。仅记录声明的产品形态、粒度和处理路线，不得同另一形态或路线合并。

- 选定流：Clove powder with amorphous silicon dioxide
- 流属性/单位：Mass / kg
- 数量规则：记录进入本过程的净数量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净放行参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_release_records`
- 来源：`codex-cxs-344-2021-2025`、`codex-cxc-75-2015-2018`、`eu-pef-2021-2279`

###### 作为投入的 Grid electricity（`packaging_grid_electricity`）

Grid electricity 作为一个单独产品流进入包装、受控贮存与产品放行。仅在声明过程实际发生这一具体交换时记录，并与所有其他交换分开计量。

- 选定流：电网电力
- 流属性/单位：Energy / kWh
- 数量规则：记录本过程计量的电力消耗
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净放行参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_release_records`
- 来源：`codex-cxs-344-2021-2025`、`codex-cxc-75-2015-2018`、`eu-pef-2021-2279`

###### 作为投入的 Low-density polyethylene inner liner（`packaging_ldpe_liner`）

Low-density polyethylene inner liner 作为一个单独包装组件进入包装、受控贮存与产品放行。仅当该准确组件列入声明产品的包装材料清单时记录。

- 选定流：Low-density polyethylene inner liner
- 流属性/单位：Mass / kg
- 数量规则：记录进入本过程的净数量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净放行参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_release_records`
- 来源：`codex-cxs-344-2021-2025`、`codex-cxc-75-2015-2018`、`eu-pef-2021-2279`

###### 作为投入的 Polypropylene woven sack（`packaging_pp_woven_sack`）

Polypropylene woven sack 作为一个单独包装组件进入包装、受控贮存与产品放行。仅当该准确组件列入声明产品的包装材料清单时记录。

- 选定流：Polypropylene woven sack
- 流属性/单位：Mass / kg
- 数量规则：记录进入本过程的净数量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净放行参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_release_records`
- 来源：`codex-cxs-344-2021-2025`、`codex-cxc-75-2015-2018`、`eu-pef-2021-2279`

###### 作为投入的 Multiwall kraft paper sack（`packaging_kraft_sack`）

Multiwall kraft paper sack 作为一个单独包装组件进入包装、受控贮存与产品放行。仅当该准确组件列入声明产品的包装材料清单时记录。

- 选定流：Multiwall kraft paper sack
- 流属性/单位：Mass / kg
- 数量规则：记录进入本过程的净数量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净放行参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_release_records`
- 来源：`codex-cxs-344-2021-2025`、`codex-cxc-75-2015-2018`、`eu-pef-2021-2279`

###### 作为投入的 Biaxially oriented polypropylene pouch（`packaging_bopp_pouch`）

Biaxially oriented polypropylene pouch 作为一个单独包装组件进入包装、受控贮存与产品放行。仅当该准确组件列入声明产品的包装材料清单时记录。

- 选定流：Biaxially oriented polypropylene pouch
- 流属性/单位：Mass / kg
- 数量规则：记录进入本过程的净数量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净放行参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_release_records`
- 来源：`codex-cxs-344-2021-2025`、`codex-cxc-75-2015-2018`、`eu-pef-2021-2279`

###### 作为投入的 Corrugated fibreboard box（`packaging_corrugated_box`）

Corrugated fibreboard box 作为一个单独包装组件进入包装、受控贮存与产品放行。仅当该准确组件列入声明产品的包装材料清单时记录。

- 选定流：瓦楞纸箱
- 流属性/单位：Mass / kg
- 数量规则：记录进入本过程的净数量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净放行参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_release_records`
- 来源：`codex-cxs-344-2021-2025`、`codex-cxc-75-2015-2018`、`eu-pef-2021-2279`

###### 作为投入的 Wooden pallet（`packaging_wooden_pallet`）

Wooden pallet 作为一个单独包装组件进入包装、受控贮存与产品放行。仅当该准确组件列入声明产品的包装材料清单时记录。

- 选定流：木托盘
- 流属性/单位：Mass / kg
- 数量规则：记录进入本过程的净数量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净放行参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_release_records`
- 来源：`codex-cxs-344-2021-2025`、`codex-cxc-75-2015-2018`、`eu-pef-2021-2279`

###### 作为投入的 Linear low-density polyethylene stretch film（`packaging_lldpe_stretch_film`）

Linear low-density polyethylene stretch film 作为一个单独包装组件进入包装、受控贮存与产品放行。仅当该准确组件列入声明产品的包装材料清单时记录。

- 选定流：Linear low-density polyethylene stretch film
- 流属性/单位：Mass / kg
- 数量规则：记录进入本过程的净数量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净放行参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_release_records`
- 来源：`codex-cxs-344-2021-2025`、`codex-cxc-75-2015-2018`、`eu-pef-2021-2279`

###### 作为投入的 Paper pressure-sensitive label（`packaging_paper_label`）

Paper pressure-sensitive label 作为一个单独包装组件进入包装、受控贮存与产品放行。仅当该准确组件列入声明产品的包装材料清单时记录。

- 选定流：Paper pressure-sensitive label
- 流属性/单位：Mass / kg
- 数量规则：记录进入本过程的净数量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净放行参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_release_records`
- 来源：`codex-cxs-344-2021-2025`、`codex-cxc-75-2015-2018`、`eu-pef-2021-2279`

###### 作为投入的 R-717 ammonia refrigerant（`storage_r717_makeup`）

R-717 ammonia refrigerant 在包装、受控贮存与产品放行中作为一个单独交换记录。仅当设备实际使用这一准确制冷剂时记录，补充量与向空气直接释放量不得同其他制冷剂合并。

- 选定流：R-717 ammonia refrigerant
- 流属性/单位：Mass / kg
- 数量规则：记录进入本过程的净数量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净放行参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_release_records`
- 来源：`eu-climate-industrial-refrigeration-2025`、`eu-pef-2021-2279`

###### 作为投入的 R-744 carbon dioxide refrigerant（`storage_r744_makeup`）

R-744 carbon dioxide refrigerant 在包装、受控贮存与产品放行中作为一个单独交换记录。仅当设备实际使用这一准确制冷剂时记录，补充量与向空气直接释放量不得同其他制冷剂合并。

- 选定流：R-744 carbon dioxide refrigerant
- 流属性/单位：Mass / kg
- 数量规则：记录进入本过程的净数量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净放行参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_release_records`
- 来源：`eu-climate-industrial-refrigeration-2025`、`eu-pef-2021-2279`

###### 作为投入的 R-290 propane refrigerant（`storage_r290_makeup`）

R-290 propane refrigerant 在包装、受控贮存与产品放行中作为一个单独交换记录。仅当设备实际使用这一准确制冷剂时记录，补充量与向空气直接释放量不得同其他制冷剂合并。

- 选定流：R-290 propane refrigerant
- 流属性/单位：Mass / kg
- 数量规则：记录进入本过程的净数量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净放行参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_release_records`
- 来源：`eu-climate-industrial-refrigeration-2025`、`eu-pef-2021-2279`

###### 作为投入的 R-449A refrigerant blend（`storage_r449a_makeup`）

R-449A refrigerant blend 在包装、受控贮存与产品放行中作为一个单独交换记录。仅当设备实际使用这一准确制冷剂时记录，补充量与向空气直接释放量不得同其他制冷剂合并。

- 选定流：R-449A refrigerant blend
- 流属性/单位：Mass / kg
- 数量规则：记录进入本过程的净数量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净放行参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_release_records`
- 来源：`eu-climate-industrial-refrigeration-2025`、`eu-pef-2021-2279`

###### 作为投入的 R-1234ze(E) refrigerant（`storage_r1234ze_makeup`）

R-1234ze(E) refrigerant 在包装、受控贮存与产品放行中作为一个单独交换记录。仅当设备实际使用这一准确制冷剂时记录，补充量与向空气直接释放量不得同其他制冷剂合并。

- 选定流：R-1234ze(E) refrigerant
- 流属性/单位：Mass / kg
- 数量规则：记录进入本过程的净数量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净放行参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_release_records`
- 来源：`eu-climate-industrial-refrigeration-2025`、`eu-pef-2021-2279`

##### 废物流

_本过程在此方向未定义废物流原子交换。_

##### 基本流

_本过程在此方向未定义基本流原子交换。_

#### 输出

##### 产品流

###### 作为产品产出的 Cloves (whole stems), processed（`reference_product_output`）

Cloves (whole stems), processed 作为唯一参考产品流从包装、受控贮存与产品放行放行。数据包只选择一个声明产品形态和一条加工路线，参考数量为不含包装的 1 kg 净产品。

- 选定流：丁香（全茎），加工 `c848928e-35e4-4713-aba4-2f2d01ac641d`
- 流属性/单位：Mass / kg
- 数量规则：1 kg 净放行产品
- 数值来源模式：固定值（`fixed_value`）
- 适用范围：不适用（`not_applicable`）
- 归一化基准：每 1 kg 净放行参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：身份引用（`identity_reference`）
- 采集协议：`cp_packaging_release_records`
- 来源：`un-cpc-3-0-2025`、`codex-cxs-344-2021-2025`

##### 废物流

###### 作为废物流产出的 Spilled processed whole clove waste（`packaging_whole_clove_spill`）

Spilled processed whole clove waste 作为一个单独废物流离开包装、受控贮存与产品放行。应独立称量或测量，并与不同材料、缺陷类别或去向的废物流分开。

- 选定流：Spilled processed whole clove waste
- 流属性/单位：Mass / kg
- 数量规则：记录单独称量或以其他方式测量的离开本过程数量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净放行参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_release_records`
- 来源：`codex-cxs-344-2021-2025`、`codex-cxc-75-2015-2018`、`eu-pef-2021-2279`

###### 作为废物流产出的 Spilled crushed clove waste（`packaging_crushed_clove_spill`）

Spilled crushed clove waste 作为一个单独废物流离开包装、受控贮存与产品放行。应独立称量或测量，并与不同材料、缺陷类别或去向的废物流分开。

- 选定流：Spilled crushed clove waste
- 流属性/单位：Mass / kg
- 数量规则：记录单独称量或以其他方式测量的离开本过程数量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净放行参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_release_records`
- 来源：`codex-cxs-344-2021-2025`、`codex-cxc-75-2015-2018`、`eu-pef-2021-2279`

###### 作为废物流产出的 Spilled ground clove waste（`packaging_ground_clove_spill`）

Spilled ground clove waste 作为一个单独废物流离开包装、受控贮存与产品放行。应独立称量或测量，并与不同材料、缺陷类别或去向的废物流分开。

- 选定流：Spilled ground clove waste
- 流属性/单位：Mass / kg
- 数量规则：记录单独称量或以其他方式测量的离开本过程数量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净放行参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_release_records`
- 来源：`codex-cxs-344-2021-2025`、`codex-cxc-75-2015-2018`、`eu-pef-2021-2279`

###### 作为废物流产出的 Spilled clove powder waste（`packaging_powder_spill`）

Spilled clove powder waste 作为一个单独废物流离开包装、受控贮存与产品放行。应独立称量或测量，并与不同材料、缺陷类别或去向的废物流分开。

- 选定流：Spilled clove powder waste
- 流属性/单位：Mass / kg
- 数量规则：记录单独称量或以其他方式测量的离开本过程数量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净放行参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_release_records`
- 来源：`codex-cxs-344-2021-2025`、`codex-cxc-75-2015-2018`、`eu-pef-2021-2279`

###### 作为废物流产出的 Low-density polyethylene film scrap（`packaging_ldpe_scrap`）

Low-density polyethylene film scrap 作为一个单独废物流离开包装、受控贮存与产品放行。应独立称量或测量，并与不同材料、缺陷类别或去向的废物流分开。

- 选定流：Low-density polyethylene film scrap
- 流属性/单位：Mass / kg
- 数量规则：记录单独称量或以其他方式测量的离开本过程数量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净放行参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_release_records`
- 来源：`codex-cxs-344-2021-2025`、`codex-cxc-75-2015-2018`、`eu-pef-2021-2279`

###### 作为废物流产出的 Polypropylene woven-sack scrap（`packaging_pp_sack_scrap`）

Polypropylene woven-sack scrap 作为一个单独废物流离开包装、受控贮存与产品放行。应独立称量或测量，并与不同材料、缺陷类别或去向的废物流分开。

- 选定流：Polypropylene woven-sack scrap
- 流属性/单位：Mass / kg
- 数量规则：记录单独称量或以其他方式测量的离开本过程数量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净放行参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_release_records`
- 来源：`codex-cxs-344-2021-2025`、`codex-cxc-75-2015-2018`、`eu-pef-2021-2279`

###### 作为废物流产出的 Kraft paper sack scrap（`packaging_kraft_scrap`）

Kraft paper sack scrap 作为一个单独废物流离开包装、受控贮存与产品放行。应独立称量或测量，并与不同材料、缺陷类别或去向的废物流分开。

- 选定流：Kraft paper sack scrap
- 流属性/单位：Mass / kg
- 数量规则：记录单独称量或以其他方式测量的离开本过程数量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净放行参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_release_records`
- 来源：`codex-cxs-344-2021-2025`、`codex-cxc-75-2015-2018`、`eu-pef-2021-2279`

###### 作为废物流产出的 Biaxially oriented polypropylene film scrap（`packaging_bopp_scrap`）

Biaxially oriented polypropylene film scrap 作为一个单独废物流离开包装、受控贮存与产品放行。应独立称量或测量，并与不同材料、缺陷类别或去向的废物流分开。

- 选定流：Biaxially oriented polypropylene film scrap
- 流属性/单位：Mass / kg
- 数量规则：记录单独称量或以其他方式测量的离开本过程数量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净放行参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_release_records`
- 来源：`codex-cxs-344-2021-2025`、`codex-cxc-75-2015-2018`、`eu-pef-2021-2279`

###### 作为废物流产出的 Corrugated fibreboard scrap（`packaging_corrugated_scrap`）

Corrugated fibreboard scrap 作为一个单独废物流离开包装、受控贮存与产品放行。应独立称量或测量，并与不同材料、缺陷类别或去向的废物流分开。

- 选定流：Corrugated fibreboard scrap
- 流属性/单位：Mass / kg
- 数量规则：记录单独称量或以其他方式测量的离开本过程数量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净放行参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_release_records`
- 来源：`codex-cxs-344-2021-2025`、`codex-cxc-75-2015-2018`、`eu-pef-2021-2279`

###### 作为废物流产出的 Damaged wooden pallet（`packaging_damaged_pallet`）

Damaged wooden pallet 作为一个单独废物流离开包装、受控贮存与产品放行。应独立称量或测量，并与不同材料、缺陷类别或去向的废物流分开。

- 选定流：Damaged wooden pallet
- 流属性/单位：Mass / kg
- 数量规则：记录单独称量或以其他方式测量的离开本过程数量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净放行参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_release_records`
- 来源：`codex-cxs-344-2021-2025`、`codex-cxc-75-2015-2018`、`eu-pef-2021-2279`

###### 作为废物流产出的 Linear low-density polyethylene stretch-film scrap（`packaging_lldpe_scrap`）

Linear low-density polyethylene stretch-film scrap 作为一个单独废物流离开包装、受控贮存与产品放行。应独立称量或测量，并与不同材料、缺陷类别或去向的废物流分开。

- 选定流：Linear low-density polyethylene stretch-film scrap
- 流属性/单位：Mass / kg
- 数量规则：记录单独称量或以其他方式测量的离开本过程数量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净放行参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_release_records`
- 来源：`codex-cxs-344-2021-2025`、`codex-cxc-75-2015-2018`、`eu-pef-2021-2279`

###### 作为废物流产出的 Paper label waste（`packaging_label_waste`）

Paper label waste 作为一个单独废物流离开包装、受控贮存与产品放行。应独立称量或测量，并与不同材料、缺陷类别或去向的废物流分开。

- 选定流：Paper label waste
- 流属性/单位：Mass / kg
- 数量规则：记录单独称量或以其他方式测量的离开本过程数量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净放行参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_release_records`
- 来源：`codex-cxs-344-2021-2025`、`codex-cxc-75-2015-2018`、`eu-pef-2021-2279`

##### 基本流

###### 作为基本流排放的 R-717 ammonia refrigerant to air（`storage_r717_air`）

R-717 ammonia refrigerant to air 在包装、受控贮存与产品放行中作为一个单独交换记录。仅当设备实际使用这一准确制冷剂时记录，补充量与向空气直接释放量不得同其他制冷剂合并。

- 选定流：R-717 ammonia refrigerant to air
- 流属性/单位：Mass / kg
- 数量规则：依据直接监测或已采集活动数据，按指定计算规则计算该单项排放质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净放行参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：从采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_packaging_release_records`
- 来源：`eu-climate-industrial-refrigeration-2025`、`eu-pef-2021-2279`

###### 作为基本流排放的 R-744 carbon dioxide refrigerant to air（`storage_r744_air`）

R-744 carbon dioxide refrigerant to air 在包装、受控贮存与产品放行中作为一个单独交换记录。仅当设备实际使用这一准确制冷剂时记录，补充量与向空气直接释放量不得同其他制冷剂合并。

- 选定流：R-744 carbon dioxide refrigerant to air
- 流属性/单位：Mass / kg
- 数量规则：依据直接监测或已采集活动数据，按指定计算规则计算该单项排放质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净放行参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：从采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_packaging_release_records`
- 来源：`eu-climate-industrial-refrigeration-2025`、`eu-pef-2021-2279`

###### 作为基本流排放的 R-290 propane refrigerant to air（`storage_r290_air`）

R-290 propane refrigerant to air 在包装、受控贮存与产品放行中作为一个单独交换记录。仅当设备实际使用这一准确制冷剂时记录，补充量与向空气直接释放量不得同其他制冷剂合并。

- 选定流：R-290 propane refrigerant to air
- 流属性/单位：Mass / kg
- 数量规则：依据直接监测或已采集活动数据，按指定计算规则计算该单项排放质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净放行参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：从采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_packaging_release_records`
- 来源：`eu-climate-industrial-refrigeration-2025`、`eu-pef-2021-2279`

###### 作为基本流排放的 R-449A refrigerant blend to air（`storage_r449a_air`）

R-449A refrigerant blend to air 在包装、受控贮存与产品放行中作为一个单独交换记录。仅当设备实际使用这一准确制冷剂时记录，补充量与向空气直接释放量不得同其他制冷剂合并。

- 选定流：R-449A refrigerant blend to air
- 流属性/单位：Mass / kg
- 数量规则：依据直接监测或已采集活动数据，按指定计算规则计算该单项排放质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净放行参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：从采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_packaging_release_records`
- 来源：`eu-climate-industrial-refrigeration-2025`、`eu-pef-2021-2279`

###### 作为基本流排放的 R-1234ze(E) refrigerant to air（`storage_r1234ze_air`）

R-1234ze(E) refrigerant to air 在包装、受控贮存与产品放行中作为一个单独交换记录。仅当设备实际使用这一准确制冷剂时记录，补充量与向空气直接释放量不得同其他制冷剂合并。

- 选定流：R-1234ze(E) refrigerant to air
- 流属性/单位：Mass / kg
- 数量规则：依据直接监测或已采集活动数据，按指定计算规则计算该单项排放质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净放行参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：从采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_packaging_release_records`
- 来源：`eu-climate-industrial-refrigeration-2025`、`eu-pef-2021-2279`

###### 作为基本流排放的 Clove particulate matter to air（`packaging_clove_pm_air`）

Clove particulate matter to air 作为一个单项空气排放离开包装、受控贮存与产品放行。记录末端控制后的实际释放质量，并与所有其他物质或粒径分数分开。

- 选定流：Clove particulate matter to air
- 流属性/单位：Mass / kg
- 数量规则：依据直接监测或已采集活动数据，按指定计算规则计算该单项排放质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净放行参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：从采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_packaging_release_records`
- 来源：`codex-cxs-344-2021-2025`、`codex-cxc-75-2015-2018`、`eu-pef-2021-2279`


### 过程：卫生清洁、粉尘收集与废水控制（`sanitation_wastewater_control`）

#### 输入

##### 产品流

###### 作为投入的 Grid electricity（`sanitation_grid_electricity`）

Grid electricity 作为一个单独产品流进入卫生清洁、粉尘收集与废水控制。仅在声明过程实际发生这一具体交换时记录，并与所有其他交换分开计量。

- 选定流：电网电力
- 流属性/单位：Energy / kWh
- 数量规则：记录本过程计量的电力消耗
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净放行参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_sanitation_environment_records`
- 来源：`codex-cxc-75-2015-2018`、`jrc-fdm-bref-2019`、`eu-pef-2021-2279`

###### 作为投入的 Dry filtered compressed air（`sanitation_compressed_air`）

Dry filtered compressed air 作为一个单独产品流进入卫生清洁、粉尘收集与废水控制。仅在声明过程实际发生这一具体交换时记录，并与所有其他交换分开计量。

- 选定流：Dry filtered compressed air
- 流属性/单位：Volume / Nm3
- 数量规则：记录本过程计量的干燥压缩空气用量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净放行参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_sanitation_environment_records`
- 来源：`codex-cxc-75-2015-2018`、`jrc-fdm-bref-2019`、`eu-pef-2021-2279`

###### 作为投入的 Potable sanitation water（`sanitation_potable_water`）

Potable sanitation water 作为一个单独产品流进入卫生清洁、粉尘收集与废水控制。仅在声明过程实际发生这一具体交换时记录，并与所有其他交换分开计量。

- 选定流：Potable sanitation water
- 流属性/单位：Mass / kg
- 数量规则：记录进入本过程的净数量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净放行参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_sanitation_environment_records`
- 来源：`codex-cxc-75-2015-2018`、`jrc-fdm-bref-2019`、`eu-pef-2021-2279`

###### 作为投入的 Ethanol disinfectant solution, 70 percent by mass（`sanitation_ethanol_solution`）

Ethanol disinfectant solution, 70 percent by mass 作为一个单独产品流进入卫生清洁、粉尘收集与废水控制。仅在声明过程实际发生这一具体交换时记录，并与所有其他交换分开计量。

- 选定流：Ethanol disinfectant solution, 70 percent by mass
- 流属性/单位：Mass / kg
- 数量规则：记录进入本过程的净数量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净放行参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_sanitation_environment_records`
- 来源：`codex-cxc-75-2015-2018`、`jrc-fdm-bref-2019`、`eu-pef-2021-2279`

###### 作为投入的 Sodium hydroxide aqueous solution（`sanitation_sodium_hydroxide`）

Sodium hydroxide aqueous solution 作为一个单独产品流进入卫生清洁、粉尘收集与废水控制。仅在声明过程实际发生这一具体交换时记录，并与所有其他交换分开计量。

- 选定流：Sodium hydroxide aqueous solution
- 流属性/单位：Mass / kg
- 数量规则：记录进入本过程的净数量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净放行参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_sanitation_environment_records`
- 来源：`codex-cxc-75-2015-2018`、`jrc-fdm-bref-2019`、`eu-pef-2021-2279`

###### 作为投入的 Sodium hypochlorite aqueous solution（`sanitation_sodium_hypochlorite`）

Sodium hypochlorite aqueous solution 作为一个单独产品流进入卫生清洁、粉尘收集与废水控制。仅在声明过程实际发生这一具体交换时记录，并与所有其他交换分开计量。

- 选定流：Sodium hypochlorite aqueous solution
- 流属性/单位：Mass / kg
- 数量规则：记录进入本过程的净数量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净放行参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_sanitation_environment_records`
- 来源：`codex-cxc-75-2015-2018`、`jrc-fdm-bref-2019`、`eu-pef-2021-2279`

###### 作为投入的 Peracetic acid aqueous solution（`sanitation_peracetic_acid`）

Peracetic acid aqueous solution 作为一个单独产品流进入卫生清洁、粉尘收集与废水控制。仅在声明过程实际发生这一具体交换时记录，并与所有其他交换分开计量。

- 选定流：Peracetic acid aqueous solution
- 流属性/单位：Mass / kg
- 数量规则：记录进入本过程的净数量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净放行参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_sanitation_environment_records`
- 来源：`codex-cxc-75-2015-2018`、`jrc-fdm-bref-2019`、`eu-pef-2021-2279`

###### 作为投入的 Ferric chloride aqueous solution（`wastewater_ferric_chloride`）

Ferric chloride aqueous solution 作为一个单独产品流进入卫生清洁、粉尘收集与废水控制。仅在声明过程实际发生这一具体交换时记录，并与所有其他交换分开计量。

- 选定流：Ferric chloride aqueous solution
- 流属性/单位：Mass / kg
- 数量规则：记录进入本过程的净数量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净放行参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_sanitation_environment_records`
- 来源：`codex-cxc-75-2015-2018`、`jrc-fdm-bref-2019`、`eu-pef-2021-2279`

###### 作为投入的 Anionic polyacrylamide flocculant（`wastewater_anionic_polyacrylamide`）

Anionic polyacrylamide flocculant 作为一个单独产品流进入卫生清洁、粉尘收集与废水控制。仅在声明过程实际发生这一具体交换时记录，并与所有其他交换分开计量。

- 选定流：Anionic polyacrylamide flocculant
- 流属性/单位：Mass / kg
- 数量规则：记录进入本过程的净数量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净放行参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_sanitation_environment_records`
- 来源：`codex-cxc-75-2015-2018`、`jrc-fdm-bref-2019`、`eu-pef-2021-2279`

##### 废物流

_本过程在此方向未定义废物流原子交换。_

##### 基本流

_本过程在此方向未定义基本流原子交换。_

#### 输出

##### 产品流

_本过程在此方向未定义产品流原子交换。_

##### 废物流

###### 作为废物流产出的 Wastewater from controlled wet sanitation（`sanitation_wastewater`）

Wastewater from controlled wet sanitation 作为一个单独废物流离开卫生清洁、粉尘收集与废水控制。应独立称量或测量，并与不同材料、缺陷类别或去向的废物流分开。

- 选定流：Wastewater from controlled wet sanitation
- 流属性/单位：Mass / kg
- 数量规则：记录单独称量或以其他方式测量的离开本过程数量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净放行参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_sanitation_environment_records`
- 来源：`codex-cxc-75-2015-2018`、`jrc-fdm-bref-2019`、`eu-pef-2021-2279`

###### 作为废物流产出的 Captured clove dust from sanitation（`sanitation_captured_clove_dust`）

Captured clove dust from sanitation 作为一个单独废物流离开卫生清洁、粉尘收集与废水控制。应独立称量或测量，并与不同材料、缺陷类别或去向的废物流分开。

- 选定流：Captured clove dust from sanitation
- 流属性/单位：Mass / kg
- 数量规则：记录单独称量或以其他方式测量的离开本过程数量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净放行参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_sanitation_environment_records`
- 来源：`codex-cxc-75-2015-2018`、`jrc-fdm-bref-2019`、`eu-pef-2021-2279`

###### 作为废物流产出的 Spent polyester dust-filter bags（`sanitation_spent_filter_bags`）

Spent polyester dust-filter bags 作为一个单独废物流离开卫生清洁、粉尘收集与废水控制。应独立称量或测量，并与不同材料、缺陷类别或去向的废物流分开。

- 选定流：Spent polyester dust-filter bags
- 流属性/单位：Mass / kg
- 数量规则：记录单独称量或以其他方式测量的离开本过程数量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净放行参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_sanitation_environment_records`
- 来源：`codex-cxc-75-2015-2018`、`jrc-fdm-bref-2019`、`eu-pef-2021-2279`

###### 作为废物流产出的 Spent cotton cleaning cloths（`sanitation_spent_cleaning_cloths`）

Spent cotton cleaning cloths 作为一个单独废物流离开卫生清洁、粉尘收集与废水控制。应独立称量或测量，并与不同材料、缺陷类别或去向的废物流分开。

- 选定流：Spent cotton cleaning cloths
- 流属性/单位：Mass / kg
- 数量规则：记录单独称量或以其他方式测量的离开本过程数量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净放行参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_sanitation_environment_records`
- 来源：`codex-cxc-75-2015-2018`、`jrc-fdm-bref-2019`、`eu-pef-2021-2279`

###### 作为废物流产出的 Clove solids from wastewater screening（`wastewater_screenings`）

Clove solids from wastewater screening 作为一个单独废物流离开卫生清洁、粉尘收集与废水控制。应独立称量或测量，并与不同材料、缺陷类别或去向的废物流分开。

- 选定流：Clove solids from wastewater screening
- 流属性/单位：Mass / kg
- 数量规则：记录单独称量或以其他方式测量的离开本过程数量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净放行参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_sanitation_environment_records`
- 来源：`codex-cxc-75-2015-2018`、`jrc-fdm-bref-2019`、`eu-pef-2021-2279`

###### 作为废物流产出的 Dewatered biological wastewater sludge（`wastewater_biological_sludge`）

Dewatered biological wastewater sludge 作为一个单独废物流离开卫生清洁、粉尘收集与废水控制。应独立称量或测量，并与不同材料、缺陷类别或去向的废物流分开。

- 选定流：Dewatered biological wastewater sludge
- 流属性/单位：Mass / kg
- 数量规则：记录单独称量或以其他方式测量的离开本过程数量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净放行参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_sanitation_environment_records`
- 来源：`codex-cxc-75-2015-2018`、`jrc-fdm-bref-2019`、`eu-pef-2021-2279`

###### 作为废物流产出的 Treated process wastewater sent to municipal sewer（`wastewater_treated_to_sewer`）

Treated process wastewater sent to municipal sewer 作为一个单独废物流离开卫生清洁、粉尘收集与废水控制。应独立称量或测量，并与不同材料、缺陷类别或去向的废物流分开。

- 选定流：Treated process wastewater sent to municipal sewer
- 流属性/单位：Mass / kg
- 数量规则：记录单独称量或以其他方式测量的离开本过程数量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净放行参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_sanitation_environment_records`
- 来源：`codex-cxc-75-2015-2018`、`jrc-fdm-bref-2019`、`eu-pef-2021-2279`

##### 基本流

###### 作为基本流排放的 Ethanol to air（`sanitation_ethanol_air`）

Ethanol to air 作为一个单项空气排放离开卫生清洁、粉尘收集与废水控制。记录末端控制后的实际释放质量，并与所有其他物质或粒径分数分开。

- 选定流：Ethanol to air
- 流属性/单位：Mass / kg
- 数量规则：依据直接监测或已采集活动数据，按指定计算规则计算该单项排放质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净放行参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：从采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_sanitation_environment_records`
- 来源：`codex-cxc-75-2015-2018`、`jrc-fdm-bref-2019`、`eu-pef-2021-2279`

###### 作为基本流排放的 Clove particulate matter to air（`sanitation_clove_pm_air`）

Clove particulate matter to air 作为一个单项空气排放离开卫生清洁、粉尘收集与废水控制。记录末端控制后的实际释放质量，并与所有其他物质或粒径分数分开。

- 选定流：Clove particulate matter to air
- 流属性/单位：Mass / kg
- 数量规则：依据直接监测或已采集活动数据，按指定计算规则计算该单项排放质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净放行参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：从采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_sanitation_environment_records`
- 来源：`codex-cxc-75-2015-2018`、`jrc-fdm-bref-2019`、`eu-pef-2021-2279`

###### 作为基本流排放的 Chemical oxygen demand to water（`wastewater_cod_water`）

Chemical oxygen demand to water 作为一个单项水环境排放离开卫生清洁、粉尘收集与废水控制。仅记录最终直接排放边界的实际负荷；同一水流若作为废水送往下游处理，则不得重复记作直接排放。

- 选定流：化学需氧量，排入水体
- 流属性/单位：Mass / kg
- 数量规则：依据直接监测或已采集活动数据，按指定计算规则计算该单项排放质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净放行参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：从采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_sanitation_environment_records`
- 来源：`codex-cxc-75-2015-2018`、`jrc-fdm-bref-2019`、`eu-pef-2021-2279`

###### 作为基本流排放的 Biochemical oxygen demand, 5 days, to water（`wastewater_bod5_water`）

Biochemical oxygen demand, 5 days, to water 作为一个单项水环境排放离开卫生清洁、粉尘收集与废水控制。仅记录最终直接排放边界的实际负荷；同一水流若作为废水送往下游处理，则不得重复记作直接排放。

- 选定流：Biochemical oxygen demand, 5 days, to water
- 流属性/单位：Mass / kg
- 数量规则：依据直接监测或已采集活动数据，按指定计算规则计算该单项排放质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净放行参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：从采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_sanitation_environment_records`
- 来源：`codex-cxc-75-2015-2018`、`jrc-fdm-bref-2019`、`eu-pef-2021-2279`

###### 作为基本流排放的 Total suspended solids to water（`wastewater_tss_water`）

Total suspended solids to water 作为一个单项水环境排放离开卫生清洁、粉尘收集与废水控制。仅记录最终直接排放边界的实际负荷；同一水流若作为废水送往下游处理，则不得重复记作直接排放。

- 选定流：总悬浮固体，排入水体
- 流属性/单位：Mass / kg
- 数量规则：依据直接监测或已采集活动数据，按指定计算规则计算该单项排放质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净放行参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：从采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_sanitation_environment_records`
- 来源：`codex-cxc-75-2015-2018`、`jrc-fdm-bref-2019`、`eu-pef-2021-2279`

###### 作为基本流排放的 Total nitrogen to water（`wastewater_total_nitrogen_water`）

Total nitrogen to water 作为一个单项水环境排放离开卫生清洁、粉尘收集与废水控制。仅记录最终直接排放边界的实际负荷；同一水流若作为废水送往下游处理，则不得重复记作直接排放。

- 选定流：总氮，排入水体
- 流属性/单位：Mass / kg
- 数量规则：依据直接监测或已采集活动数据，按指定计算规则计算该单项排放质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净放行参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：从采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_sanitation_environment_records`
- 来源：`codex-cxc-75-2015-2018`、`jrc-fdm-bref-2019`、`eu-pef-2021-2279`

###### 作为基本流排放的 Total phosphorus to water（`wastewater_total_phosphorus_water`）

Total phosphorus to water 作为一个单项水环境排放离开卫生清洁、粉尘收集与废水控制。仅记录最终直接排放边界的实际负荷；同一水流若作为废水送往下游处理，则不得重复记作直接排放。

- 选定流：总磷，排入水体
- 流属性/单位：Mass / kg
- 数量规则：依据直接监测或已采集活动数据，按指定计算规则计算该单项排放质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净放行参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：从采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_sanitation_environment_records`
- 来源：`codex-cxc-75-2015-2018`、`jrc-fdm-bref-2019`、`eu-pef-2021-2279`

###### 作为基本流排放的 Chloride to water（`wastewater_chloride_water`）

Chloride to water 作为一个单项水环境排放离开卫生清洁、粉尘收集与废水控制。仅记录最终直接排放边界的实际负荷；同一水流若作为废水送往下游处理，则不得重复记作直接排放。

- 选定流：氯化物，排入水体
- 流属性/单位：Mass / kg
- 数量规则：依据直接监测或已采集活动数据，按指定计算规则计算该单项排放质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净放行参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：从采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_sanitation_environment_records`
- 来源：`codex-cxc-75-2015-2018`、`jrc-fdm-bref-2019`、`eu-pef-2021-2279`

###### 作为基本流排放的 Methane to air（`wastewater_methane_air`）

Methane to air 作为一个单项空气排放离开卫生清洁、粉尘收集与废水控制。记录末端控制后的实际释放质量，并与所有其他物质或粒径分数分开。

- 选定流：甲烷，排入空气
- 流属性/单位：Mass / kg
- 数量规则：依据直接监测或已采集活动数据，按指定计算规则计算该单项排放质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净放行参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：从采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_sanitation_environment_records`
- 来源：`codex-cxc-75-2015-2018`、`jrc-fdm-bref-2019`、`eu-pef-2021-2279`

###### 作为基本流排放的 Nitrous oxide to air（`wastewater_nitrous_oxide_air`）

Nitrous oxide to air 作为一个单项空气排放离开卫生清洁、粉尘收集与废水控制。记录末端控制后的实际释放质量，并与所有其他物质或粒径分数分开。

- 选定流：氧化亚氮，排入空气
- 流属性/单位：Mass / kg
- 数量规则：依据直接监测或已采集活动数据，按指定计算规则计算该单项排放质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净放行参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：从采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_sanitation_environment_records`
- 来源：`codex-cxc-75-2015-2018`、`jrc-fdm-bref-2019`、`eu-pef-2021-2279`

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivision_first` | 共用生产线和公用工程 | 分配前优先采用过程细分、专用计量、批次记录或基于设备时间的记录。 | `eu-pef-2021-2279` |
| `allocation_mass_balance` | 全部丁香材料产出 | 分配负荷前，将验收丁香与放行产品、可售花梗筛下物、收集粉尘、剔除物、洒落物和水分变化进行核对。本 PCR 不提供默认产率。 | `codex-cxc-75-2015-2018`、`eu-pef-2021-2279` |
| `allocation_saleable_stem_screenings` | 可售丁香花梗筛下物 | 单独上市的花梗筛下物按共产品处理；无法通过细分避免分配时，应披露所用物理或因果分配关系。 | `eu-pef-2021-2279` |
| `allocation_discarded_residues` | 废弃筛下物、粉尘和剔除物 | 废弃材料保留为带处理去向的废物流；不得仅因其含丁香材料而赋予共产品收益。 | `eu-pef-2021-2279` |
| `allocation_rework` | 内部返工 | 在同一过程链内部返回的材料不是第二项产出；仅记录净损失并披露返工回路。 | `eu-pef-2021-2279` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_receipt_lot_records` | `raw_clove_receipt` | 生原料批次、验收质量、缺陷剔除物和来料包装废物 | 地磅、台秤、检验和实验室记录 | 批次号；供应商；产地；学名；来料质量；水分；验收质量；各剔除类别；包装皮重和废弃质量 | 校准称量及批次特定的目视与实验室验收记录 | kg、% | 每批 | 完整参考期 | 每个纳入工厂及供应商批次 | 按批求和，保持剔除类别分开后再归一化 | 校准、抽样方案、照片或检验记录、水分和检测报告 |
| `cp_cleaning_sorting_records` | `clove_cleaning_sorting` | 干式和湿式清理交换 | 计量表、投料日志、台秤、探测器和排放记录 | 进出口质量；电力；压缩空气；水；各化学品；热水；各筛下物；各异物；粉尘；废水量；污染物浓度 | 分阶段计量和批次日志，并设置独立废物容器和排放采样 | kg、kWh、Nm3、MJ | 每批及每次排放 | 完整参考期 | 每条纳入清理线 | 按批汇总每个原子交换；纯干式批次不填湿洗路线值 | 计量校准、化学品发票、探测记录、废物联单和实验室报告 |
| `cp_drying_records` | `clove_drying_conditioning` | 干燥投入、产出和水分 | 批次日志、计量表、台秤和水分检测 | 进出口产品质量；进出口水分；电力；蒸汽；热水；热风；冷凝水；剔除物；排气粉尘 | 校准质量与水分检测及公用工程计量 | kg、%、kWh、MJ | 每个干燥批次 | 完整参考期 | 每台纳入干燥设备 | 计算批次特定去除水量并从同一批次归一化 | 校准、水分方法、时间-温度-湿度日志和尾气控制记录 |
| `cp_size_reduction_records` | `clove_size_reduction` | 破碎、研磨、筛分和粉尘 | 台秤、电表、压缩空气表和筛分检测 | 完整形态投入；声明产出形态；粒度分布；电力；压缩空气；各筛下物；金属；粉尘；滤袋 | 批次称量、计量读数和留存筛分分析 | kg、kWh、Nm3、%、mm 或 µm | 每批 | 完整参考期 | 每台纳入磨机或破碎机 | 保持破碎、研磨和粉末批次分开并闭合质量平衡 | 校准、筛分方法、探测记录、滤袋维护日志和批次追溯 |
| `cp_steam_treatment_records` | `steam_microbial_reduction` | 处理投入、产出、剔除物和排放 | 处理批次记录、计量表、台秤和验证记录 | 形态；产品质量；蒸汽；电力；时间；温度；压力；冷凝水；进出口水分；各形态剔除物；水蒸气；粉尘 | 与产品批次关联的经验证处理日志和公用工程计量 | kg、kWh、MJ、°C、时间、压力 | 每个处理批次 | 完整参考期 | 每台纳入处理设备 | 每种产品形态和处理配方分别记录 | 现行验证、关键限值记录、校准和纠正措施记录 |
| `cp_additive_dosing_records` | `anticaking_agent_dosing` | INS 551 配方和损失 | 配方、台秤、发票和批次记录 | 产品形态；丁香投入；INS 551 质量和规格；电力；配方产出；各洒落物；粉尘 | 校准投料和批次核对 | kg、kWh | 每个配方批次 | 完整参考期 | 每条纳入投料线 | 按声明产品批次计算添加剂浓度 | 供应商规格、法规适用性检查、台秤校准和批次放行记录 |
| `cp_utility_generation_records` | `onsite_heat_generation` | 燃料、水、产热、排污水和烟气物种 | 燃料表、发票、水表、热量表和烟气记录 | 每种燃料；水；电力；蒸汽；热水；热风；排污水；各空气物种；运行小时 | 专用计量或基于共用公用工程记录的书面分配；烟气测量或经批准计算 | kg、kWh、MJ | 连续或每个运行班次 | 完整参考期 | 每台纳入锅炉或加热器 | 每种燃料和物种分别保留；仅在穷尽细分后分配 | 计量校准、燃料证书、热平衡、烟气报告和因子来源 |
| `cp_packaging_release_records` | `packaging_storage_release` | 最终形态、包装、贮存、制冷剂和放行 | 批次、包装 BOM、台秤、电力、制冷和放行记录 | 准确丁香形态；净产品；各包装组件；电力；贮存时长和湿度；各制冷剂充注、购买、回收和期末库存；各废料；各洒落物；放行质量 | 与仓储和制冷日志关联的产品特定 BOM 和批次台秤 | kg、kWh、时间、温度、湿度 | 每个包装批次；制冷剂按维护事件和期末 | 完整参考期 | 每个纳入包装和贮存场址 | 每条路线仅一个形态和包装；仅汇总匹配设备与期间的维护记录 | 台秤校准、BOM、供应商发票、包装规格、泄漏/维护日志和放行证书 |
| `cp_sanitation_environment_records` | `sanitation_wastewater_control` | 卫生化学品、粉尘、废水、污泥和直接排放 | 清洁日志、计量表、化学品日志、废物联单、处理和实验室记录 | 电力；压缩空气；水；各化学品；各废物；废水量；各污染物浓度；甲烷和氧化亚氮活动数据 | 书面干式或受控湿式卫生清洁及流量比例或代表性排放采样 | kg、kWh、Nm3、m3 | 每次卫生清洁；每次排放采样；期末 | 完整参考期 | 每个纳入卫生区域和处理单元 | 干式和湿式事件分开；以匹配流量和时间计算各污染物负荷 | 清洁验证、校准、化学品发票、实验室 QA、废物联单和处理日志 |

### 计算规则

| rule_id | 适用对象 | 公式或规则 | 输入 | 输出 | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | 每个非参考行 | 归一化数量 = 同一范围和期间内归属于声明形态及路线的期间数量 ÷ 净放行参考产品 kg。 | 原子流数量；净放行产品质量 | 每 1 kg 参考产品的数量 | `eu-pef-2021-2279` |
| `calc_clove_mass_balance` | 接收至放行 | 验收丁香 = 放行产品 + 可售花梗筛下物 + 全部含丁香废物 + 洒落物 + 实测水分质量变化，并校正期初期末在制品。 | 批次质量；水分；库存变化 | 批次质量平衡残差 | `codex-cxc-75-2015-2018`、`eu-pef-2021-2279` |
| `calc_removed_water` | 干燥和蒸汽处理 | 去除水 = 入口产品 × 入口水分分数 − 出口产品 × 出口水分分数 − 收集液态水，所有项使用一致水分基准。 | 进出口质量和水分；冷凝水 | 水蒸气或未解释水分残差 | `codex-cxc-75-2015-2018` |
| `calc_particle_size` | 破碎、研磨和粉末产出 | 报告每个声明筛孔上的留存质量分数并关联放行批次；不规定默认切割粒径。 | 筛孔；留存质量；样品质量 | 粒度分布 | `codex-cxs-344-2021-2025`、`codex-cxc-75-2015-2018` |
| `calc_combustion_species` | 场内热力生产 | 有直接烟气质量时采用实测值；否则将每种单独计量燃料乘以有书面来源的、适用于司法辖区和设备的因子，不合并物种。 | 每种燃料；因子或烟气数据；运行期间 | 一种指定空气物种的质量 | `jrc-fdm-bref-2019`、`eu-pef-2021-2279` |
| `calc_refrigerant_loss` | 受控贮存 | 直接释放 = 期初充注量 + 补充量 − 期末充注量 − 回收量 − 转移量；每种制冷剂身份分别计算。 | 一种制冷剂的充注和维护记录 | 该制冷剂向空气释放的质量 | `eu-climate-industrial-refrigeration-2025`、`eu-pef-2021-2279` |
| `calc_wastewater_pollutant` | 直接水排放 | 污染物质量 = 排放体积 × 时间匹配浓度，并记录单位换算和处理边界。 | 体积；浓度；采样期间 | 一种指定污染物向水排放的质量 | `jrc-fdm-bref-2019`、`eu-pef-2021-2279` |
| `calc_packaging_exclusion` | 参考产品 | 毛包装质量 − 实测包装皮重 = 净参考产品质量。 | 毛质量；各包装组件皮重 | 净放行丁香 kg | `codex-cxs-344-2021-2025`、`eu-pef-2021-2279` |

### 数据质量要求

| requirement_id | 适用对象 | 要求 | 证据 |
| --- | --- | --- | --- |
| `dq_identity_form` | 参考产品和来料批次 | 保持批次追溯、学名、CPC 起始状态、最终形态、粒度、处理历史和配方。 | 供应商规格、留样、批次记录和放行证书 |
| `dq_route_separation` | 全部过程 | 在获得路线特定结果前，不得聚合干式与湿式清理、干燥与未干燥、处理与未处理，或完整、破碎、研磨与粉末路线。 | 带路线编码的生产和计量记录 |
| `dq_temporal_site` | 前景活动数据 | 覆盖每个纳入工厂的代表性期间，并披露停机、季节性批次和缺失记录。 | 期间台账和场址清单 |
| `dq_meter_calibration` | 质量、能源、水、压力和浓度数据 | 使用经校准或受质量控制的测量系统，并保留换算因子。 | 校准和实验室 QA 记录 |
| `dq_inventory_completeness` | 每个纳入过程 | 核对已知投入和产出，包括产品、共产品、废物和直接排放，并记录任何重大残差。 | 质量、水分、能源和废水平衡 |
| `dq_source_applicability` | 外部方法规则 | 记录哪些 Codex、JRC、欧盟和当地法规适用于实际产品与地域；外部方法来源不产生默认数量。 | 适用性评估和来源登记 |
| `dq_uuid_status` | 每个清单流 | 在准确语义流完成两项规定身份核验前，非参考天工 UUID 保持空白。 | manifest 未决流条目或已完成身份审查 |
| `dq_no_default_amounts` | 每个非参考行 | 首个数值由前景记录或指定计算规则产生；本候选 PCR 不提供推理估算范围。 | 采集协议和计算工作表 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validation_reference_identity` | 参考流 | 放行前确认参考 UUID、Product 流类型、CPC 23926 身份、Mass 属性、Units of mass 单位组和 kg 单位。 | `un-cpc-3-0-2025` |
| `validation_single_form_route` | 数据集身份 | 若数据集平均产品形态、粒度规格、处理路线或包装配置，且未分别报告路线结果，则拒绝该数据集。 | `codex-cxs-344-2021-2025`、`codex-cxc-75-2015-2018`、`eu-pef-2021-2279` |
| `validation_process_conditions` | 过程图 | 每个 conditional 过程均应有真/假声明和工厂记录；required 过程均应有清单章节和数据。 | `codex-cxc-75-2015-2018`、`eu-pef-2021-2279` |
| `validation_atomic_exchange` | 过程清单 | 每张卡只含一个具体交换。公用工程、燃料、化学品、包装组件、废物、制冷剂和排放物种均应保持分开。 | `eu-pef-2021-2279` |
| `validation_mass_moisture_balance` | 产品链 | 发布前调查并披露无法解释的验收丁香、产品、残余物和水分不平衡。 | `codex-cxc-75-2015-2018`、`eu-pef-2021-2279` |
| `validation_wastewater_boundary` | 废水 | 拒绝同一水流和处理边界同时记录废水废物流与直接环境排放。 | `jrc-fdm-bref-2019`、`eu-pef-2021-2279` |
| `validation_refrigerant_identity` | 受控贮存 | 要求准确制冷剂身份，并分别记录补充量和直接释放量；未列出的制冷剂在数据集发布前需要新增其自身原子行。 | `eu-climate-industrial-refrigeration-2025`、`eu-pef-2021-2279` |
| `validation_no_unsupported_defaults` | 数量和范围 | 拒绝未由前景协议、指定计算或引用外部证据产生的数量或范围。 | `eu-pef-2021-2279` |
| `validation_traceability` | 外部沟通 | 保留验证所需的来源记录、计算、数据质量证据和路线元数据。 | `eu-pef-2021-2279` |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 候选前景数据集，经方法学和数据审查后可成为 `secondary_dataset` 或 `background_dataset`。 |
| downstream_use | 包装工厂门口加工丁香的产品形态和路线特定建模。 |
| allowed_use | 用于声明的植物学身份、产品形态、粒度、处理路线、配方、包装、地域、技术和参考期。 |
| excluded_use | 生丁香、另一香辛料、丁香提取物或油、混合调味品、未声明处理路线，或跨产品形态与包装的平均值。 |
| required_metadata | PCR id 和版本；CPC 坐标；参考 UUID；学名；原料状态；批次和产地；最终形态；粒度；水分；纳入过程；处理验证；添加剂配方；包装 BOM；贮存；地域；期间；场址和供应商覆盖；分配；未决 UUID 状态。 |
| required_quality_disclosure | 前景覆盖、计量和实验室质量、质量/水分/能源平衡、采样、分配、缺失数据、来源适用性、直接排放方法和不确定性。 |
| update_trigger | 植物学/原料状态、形态、粒度规格、过程顺序、微生物处理、添加剂、燃料或电力供应、制冷剂、包装、场址、供应商组合、分配、适用产品标准、参考流身份或重大前景绩效发生变化。 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3-0-2025` | official_guidance | 联合国统计司，CPC 3.0 官方分类入口及仓库保留原始 CSV，https://unstats.un.org/unsd/classifications/Econ/CPC（检索于 2026-08-13） | CPC 23926 加工丁香边界及 CPC 01656 生丁香排除项。 |
| `codex-cxs-344-2021-2025` | standard | Codex Alimentarius CXS 344-2021《干燥花部：丁香标准》，2025 年修订，https://openknowledge.fao.org/handle/20.500.14283/cd9046en（检索于 2026-08-13） | 植物学身份、完整及研磨/粉末形态、水分和缺陷属性、包装与卫生衔接。 |
| `codex-cxc-75-2015-2018` | standard | Codex Alimentarius CXC 75-2015《低水分食品卫生操作规范》及香辛料和干燥烹饪香草附件，2018 年修订，https://www.fao.org/fao-who-codexalimentarius/sh-proxy/pl/?lnk=1&url=https%253A%252F%252Fworkspace.fao.org%252Fsites%252Fcodex%252FStandards%252FCXC%2B75-2015%252FCXC_075e.pdf（检索于 2026-08-13） | 清理、分选、干燥、研磨、蒸汽处理、粉尘控制、干式卫生清洁、受控湿洗、包装和贮存过程要求。 |
| `codex-gsfa-ins-551-2025` | standard | Codex GSFA Online，无定形二氧化硅 INS 551，更新至 CAC48（2025），https://www.fao.org/gsfaonline/additives/details.html?d-3586470-o=1&d-3586470-s=5&d-3988876-o=1&id=284&lang=&print=true（检索于 2026-08-13） | 声明研磨或粉末配方中准确的条件性抗结剂身份。 |
| `jrc-fdm-bref-2019` | official_guidance | 欧盟委员会联合研究中心，食品、饮料和乳品行业最佳可行技术参考文件，JRC118627，EUR 29978 EN，DOI 10.2760/243911，https://publications.jrc.ec.europa.eu/repository/handle/JRC118627（检索于 2026-08-13） | 通用食品过程分解、能源和用水、粉尘、水排放、减排与环境监测。 |
| `eu-pef-2021-2279` | official_guidance | Commission Recommendation (EU) 2021/2279，合并版产品环境足迹方法，https://eur-lex.europa.eu/legal-content/EN/ALL/?uri=CELEX%3A02021H2279-20211230（检索于 2026-08-13） | 产品特定 BOM、企业特定制造数据、完整 LCI、分配、数据质量、透明度和验证。 |
| `eu-climate-industrial-refrigeration-2025` | official_guidance | 欧盟委员会气候行动总司，Climate-friendly alternatives to F-gases: industrial refrigeration，https://climate.ec.europa.eu/areas-action/fluorinated-greenhouse-gases/climate-friendly-alternatives-f-gases/refrigeration_en（更新于 2025-04-09；检索于 2026-08-13） | 准确制冷剂候选及受控贮存设备保留制冷剂身份的要求。 |
