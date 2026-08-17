---
schema_version: 1
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.grain-mill-products-starches-and-starch-products-other-food-products.ginger-processed
language: zh-CN
status: candidate
content_maturity: authored_methodology
translation_status: aligned
sync_with: pcr.en-US.md
---

# 加工姜

## 1. 范围与适用性

本 PCR 适用于 CPC 23927“加工姜”的场址特定前景数据包。每个数据包必须锁定恰好一条路线：干制加工，或盐水浸制；同时锁定一种姜原料状态、一种制备方式、最终形态、适用时的粒度以及包装规格。干粉与盐水姜不得合并或平均。

范围包括加工场址内的接收、清洗与修整、条件性刮皮/去皮/切片、干制预处理、干燥、干式清理与分级、条件性破碎/研磨/筛分、盐水配制、灌装与封口、条件性热处理、包装放行、清洁卫生以及条件性场内废水处理。种植、入厂运输、外购投入的生产、出厂运输、零售、使用和寿命终止不属于前景边界。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.grain-mill-products-starches-and-starch-products-other-food-products.ginger-processed |
| classification_refs | CPC 3.0: 23927 — Ginger, processed |
| covered_products | 干燥/脱水姜，包括整粒、片/块、切丁或切片、破碎、研磨/粉末形态；以及盐水姜。 |
| excluded_products | 未加工姜；姜精油或油树脂；糖渍姜及不属于声明干制或盐水形态的产品。 |
| representative_product | 锁定单一原料状态、路线、形态、粒度/盐水规格及包装的场址特定加工姜。 |
| production_route | 互斥选择：干制加工；或盐水浸制。干制品与盐水品不得平均。 |
| market_state | 按声明规格包装、质量检验合格并在加工场址门口放行。 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 在锁定干制或盐水路线下达到声明放行规格的加工姜。 |
| How much | 1 kg 净合格产品；排除包装质量。盐水路线按声明销售净含量口径计量，并另报沥干姜质量。 |
| How well | 满足声明的植物学身份、产品形态、水分或盐水介质、粒度、卫生、添加剂授权和包装规格。 |
| How long or cycle | 一个可追溯生产批次在加工场址质量放行时。 |
| reference_flow_link | `reference_processed_ginger` |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 kg 净合格加工姜，包装质量除外。 |
| 参考产品流 | Ginger, processed `5dfbf3ec-4630-4bae-bbc6-fc931194cf64` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | route; botanical species; raw-material state; preparation style; final form; moisture basis; particle-size specification and result when applicable; brine composition, thermal treatment, net contents and drained ginger mass when applicable; packaging specification; site; line; production period; release specification |

构建前景数据包时，`必需限定信息` 中的项目必须在数据集元数据、过程注释、参考流注释、产品描述或等效字段中声明。缺失任一必需限定项即表示该数据包的参考流定义不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 | source_ids |
| --- | --- | --- | --- | --- | --- |
| `reference_mass` | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 将每项交换归一化至锁定路线放行的 1 kg 净合格加工姜；排除包装质量。 | `un-cpc-3-0-2025`; `eu-pef-2021-2279` |
| `route_exclusivity` | 前景数据包 | Route identity | text | 声明干制加工或盐水姜中的恰好一条路线；不得跨路线平均。 | `codex-cxs-343-2021`; `codex-cxs-260-2007`; `eu-pef-2021-2279` |
| `raw_material_state` | 姜投入 | Material state | text | 声明成熟鲜姜根茎、嫩鲜姜根茎或外购整粒干姜，并保留供应商或接收证据。 | `fao-ginger-postharvest-operations`; `codex-cxs-343-2021`; `codex-cxs-260-2007` |
| `dry_product_form` | 干制加工姜 | Product form | text | 声明一种形态：整粒、片/块、破碎或研磨/粉末；记录形成该形态的制备和粒度减小路线。 | `codex-cxs-343-2021`; `fao-ginger-postharvest-operations` |
| `moisture_basis` | 干姜及残留物 | Mass and moisture fraction | kg and kg/kg | 按声明的湿基或干基计量质量与水分；不得将 Codex 质量限值转作 LCI 默认量。 | `codex-cxs-343-2021`; `fao-ginger-postharvest-operations` |
| `particle_size` | 破碎或研磨姜 | Particle-size result | mm or µm | 报告声明的筛网或粒度规格、试验方法和批次结果。 | `codex-cxs-343-2021`; `fao-ginger-postharvest-operations` |
| `brine_mass_basis` | 盐水姜 | Mass | kg | 分别报告净含量和沥干姜质量，并说明 1 kg 销售产品口径是否包括灌装介质。 | `codex-cxs-260-2007` |
| `ingredient_dose` | 每种盐、酸、防腐剂或加工助剂 | Mass | kg | 逐项记录每种具名物质的实际批次投加量和商品浓度；适用时要求当前授权。 | `codex-cxs-343-2021`; `codex-cxs-260-2007`; `codex-gsfa-04-2-2-3-2025`; `eu-pef-2021-2279` |
| `utility_measurement` | 每项阶段特定公用工程 | Energy or mass | kWh, MJ or kg | 使用分表、交付计量、发票或有记录的因果分配；电力、蒸汽、热水和每种燃料保持分开。 | `jrc-fdm-bref-2019`; `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279` |
| `refrigerant_balance` | 每种已安装制冷剂 | Mass | kg | 分别记录 R717、R744 或 R404A 的补充、回收和库存变化，并按回路质量平衡计算每种损失。 | `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279` |
| `wastewater_load` | 每种废水污染物 | Mass | kg | 由实测水流量和有代表性的实测浓度计算每种污染物负荷；保持来源水流和污染物分开。 | `eu-fdm-bat-2019-2031` |
| `packaging_mass` | 每种包装部件 | Mass | kg | 按材料记录每种包装部件，并从参考产品量中排除全部包装质量。 | `fao-ginger-postharvest-operations`; `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279` |
| `batch_mass_balance` | 每个锁定路线批次 | Mass | kg | 归一化前核对姜、灌装介质、产品、脱除水分、残留物、废水固形物和实测损失。 | `fao-ginger-postharvest-operations`; `eu-pef-2021-2279` |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 声明状态的姜原料已在加工场址接收、称量并形成批次身份。 |
| starting_condition_role | 前景边界门：种植、供应商加工和入厂运输由相应上游数据集表示。 |
| product_classification_scope | CPC 23927 加工姜，限本 PCR 声明的干制形态或盐水姜。 |
| recursive_input_rule | 外购干姜作为同类别投入时，保留为可见产品投入并链接独立限定的上游数据集，不递归展开本 PCR。 |
| upstream_dataset_requirement | 每项外购姜、配料、包装、公用工程、燃料和制冷剂均链接与实际产品及供应市场相符的上游数据集。 |
| disclosure | 声明场址、生产线、路线、原料状态、批次、数据期、包装、截止项、共享服务分配以及场外处理边界。 |

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `sb_route_lock` | all foreground packages | 每个数据包仅使用一条干制加工路线或一条盐水姜路线；其原料、公用工程、产率、包装、废物和排放均不得平均。 | `un-cpc-3-0-2025`; `codex-cxs-343-2021`; `codex-cxs-260-2007` |
| `sb_foreground_gate` | foreground system | 从声明状态的姜在加工场址接收开始，纳入受控制备、保藏、包装、清洁及条件性场内废水处理。 | `fao-ginger-postharvest-operations`; `jrc-fdm-bref-2019`; `eu-fdm-bat-2019-2031` |
| `sb_upstream_links` | purchased products | 种植、外购姜生产、配料制造、包装制造以及电力、热、燃料和制冷剂生产位于前景之外，并将每项外购投入链接至上游数据集。 | `eu-pef-2021-2279` |
| `sb_downstream_exclusion` | downstream stages | 出厂配送、零售、制备或消费以及寿命终止不纳入前景；任何更宽研究边界应另行披露。 | `eu-pef-2021-2279` |
| `sb_recursive_input` | same-category purchased dried ginger | 仅研磨路线使用同一加工姜类别的外购干姜时，将其保留为可见产品投入并链接独立限定的上游数据集，不递归展开本 PCR。 | `eu-pef-2021-2279` |
| `sb_release_basis` | reference product release | 参考量仅包含净合格加工姜；排除包装质量，盐水仅在声明销售产品及净含量口径包括它时纳入。 | `codex-cxs-260-2007`; `eu-fdm-bat-2019-2031` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `route_scope_receiving` | 路线与原料状态锁定；接收 | `required` | 每个数据包必须声明恰好一条路线、一种未加工姜投入状态或外购干姜状态、产品形态、适用时的粒度以及包装规格。 | foreground gate | 1 kg net conforming processed ginger output |
| `washing_trimming` | 清洗与修整 | `required` | 鲜姜根茎路线必需；仅研磨外购干姜的路线应声明本报告场址不运行该过程。 | foreground transformation | 1 kg net conforming processed ginger output |
| `scraping_peeling_slicing` | 刮皮、去皮与切片 | `conditional` | 仅纳入干制或盐水浸制前实际采用的一种制备方式。 | foreground transformation | 1 kg net conforming processed ginger output |
| `drying_pretreatment` | 干制预处理 | `conditional` | 仅在锁定干制路线且实际采用烫漂或氧化钙漂白时纳入。 | foreground transformation | 1 kg net conforming dry processed ginger output |
| `drying` | 干燥 | `conditional` | 干制加工姜路线纳入；声明干燥设备、热载体、燃料、停留时间和终点水分。 | foreground transformation | 1 kg net conforming dry processed ginger output |
| `dry_cleaning_grading` | 干式清理与分级 | `conditional` | 干姜在放行或粒度减小前进行风选、分离、清理或分级时纳入。 | foreground transformation | 1 kg net conforming dry processed ginger output |
| `crushing_grinding_sieving` | 破碎、研磨与筛分 | `conditional` | 仅在声明的干制产品为破碎品或粉末时纳入；锁定设备和声明粒度规格。 | foreground transformation | 1 kg net conforming crushed or ground ginger output |
| `brine_preparation` | 盐水配制 | `conditional` | 仅对盐水姜纳入；记录一个实际配方，并逐项记录每一种获准配料。 | foreground transformation | 1 kg net conforming ginger-in-brine output |
| `brine_filling_thermal` | 盐水灌装、封口及条件性热处理 | `conditional` | 仅对盐水姜纳入；声明容器、封口件、灌装介质以及采用巴氏处理、商业灭菌或不热处理。 | foreground transformation | 1 kg net conforming ginger-in-brine output |
| `packaging_release` | 包装、规格检查与放行 | `required` | 按锁定的单一产品形态包装，并按水分、粒度或盐水介质规格放行；不得合并干制品与盐水品。 | foreground release | 1 kg net conforming processed ginger output |
| `cleaning_sanitation` | 清洗与卫生消毒 | `required` | 纳入可归属于声明路线的实际湿式或干式清洁；每种清洁化学品和公用工程均保持原子化。 | foreground support | 1 kg net conforming processed ginger output |
| `onsite_wastewater_treatment` | 场内废水处理 | `conditional` | 仅在报告场址运行处理设施时纳入；否则将每股未处理废水产品流记录至外部处理边界。 | foreground support | 1 kg net conforming processed ginger output |

### 过程：路线与原料状态锁定；接收 (`route_scope_receiving`)

#### 输入

##### 产品流

###### 干制路线接收的成熟鲜姜根茎 (`recv_fresh_mature_ginger`)

当 Fresh mature ginger rhizomes 跨越“路线与原料状态锁定；接收”前景边界时，将其作为一个原子产品投入记录；仅在锁定路线和场址记录证明该交换存在时纳入。

- 选定流: Fresh mature ginger rhizomes
- 流属性/单位: Mass / kg
- 数量规则: 按批次接收称量并扣除皮重。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 按声明路线批次记录，并归一化至 1 kg 净合格 Ginger, processed 产出，包装质量除外
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_route_scope_receiving`
- 来源: `un-cpc-3-0-2025`; `fao-ginger-postharvest-operations`; `eu-pef-2021-2279`

###### 盐水路线接收的嫩鲜姜根茎 (`recv_fresh_tender_ginger`)

当 Fresh tender ginger rhizomes 跨越“路线与原料状态锁定；接收”前景边界时，将其作为一个原子产品投入记录；仅在锁定路线和场址记录证明该交换存在时纳入。

- 选定流: Fresh tender ginger rhizomes
- 流属性/单位: Mass / kg
- 数量规则: 按批次接收称量并扣除皮重。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 按声明路线批次记录，并归一化至 1 kg 净合格 Ginger, processed 产出，包装质量除外
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_route_scope_receiving`
- 来源: `un-cpc-3-0-2025`; `codex-cxs-260-2007`; `eu-pef-2021-2279`

###### 仅研磨路线接收的外购整粒干姜 (`recv_purchased_dried_whole_ginger`)

当 Purchased dried whole ginger 跨越“路线与原料状态锁定；接收”前景边界时，将其作为一个原子产品投入记录；仅在锁定路线和场址记录证明该交换存在时纳入。

- 选定流: Purchased dried whole ginger
- 流属性/单位: Mass / kg
- 数量规则: 依据接收称量和供应商文件计量干姜净质量。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 按声明路线批次记录，并归一化至 1 kg 净合格 Ginger, processed 产出，包装质量除外
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_route_scope_receiving`
- 来源: `un-cpc-3-0-2025`; `codex-cxs-343-2021`; `eu-pef-2021-2279`

###### 接收与检验用电网电力 (`recv_grid_electricity`)

当 Grid electricity 跨越“路线与原料状态锁定；接收”前景边界时，将其作为一个原子产品投入记录；仅在锁定路线和场址记录证明该交换存在时纳入。

- 选定流: Grid electricity
- 流属性/单位: Energy / kWh
- 数量规则: 读取接收区分表，或依据有记录的设备运行时间分配共享电表。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 按声明路线批次记录，并归一化至 1 kg 净合格 Ginger, processed 产出，包装质量除外
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_route_scope_receiving`
- 来源: `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`

###### 接收设备用柴油 (`recv_diesel`)

当 Diesel fuel 跨越“路线与原料状态锁定；接收”前景边界时，将其作为一个原子产品投入记录；仅在锁定路线和场址记录证明该交换存在时纳入。

- 选定流: Diesel fuel
- 流属性/单位: Mass / kg
- 数量规则: 记录可归属于接收设备的采购或油罐领用柴油。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 按声明路线批次记录，并归一化至 1 kg 净合格 Ginger, processed 产出，包装质量除外
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_route_scope_receiving`
- 来源: `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`

###### 接收设备用液化石油气 (`recv_lpg`)

当 Liquefied petroleum gas 跨越“路线与原料状态锁定；接收”前景边界时，将其作为一个原子产品投入记录；仅在锁定路线和场址记录证明该交换存在时纳入。

- 选定流: Liquefied petroleum gas
- 流属性/单位: Mass / kg
- 数量规则: 记录可归属于接收设备的钢瓶或储罐领用量。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 按声明路线批次记录，并归一化至 1 kg 净合格 Ginger, processed 产出，包装质量除外
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_route_scope_receiving`
- 来源: `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 验收合格的成熟姜根茎 (`recv_accepted_mature_ginger`)

当 Accepted mature ginger rhizomes 跨越“路线与原料状态锁定；接收”前景边界时，将其作为一个原子产品产出记录；仅在锁定路线和场址记录证明该交换存在时纳入。

- 选定流: Accepted mature ginger rhizomes
- 流属性/单位: Mass / kg
- 数量规则: 检验并分批后称量验收合格净质量。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 按声明路线批次记录，并归一化至 1 kg 净合格 Ginger, processed 产出，包装质量除外
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_route_scope_receiving`
- 来源: `fao-ginger-postharvest-operations`; `eu-pef-2021-2279`

###### 验收合格的嫩姜根茎 (`recv_accepted_tender_ginger`)

当 Accepted tender ginger rhizomes 跨越“路线与原料状态锁定；接收”前景边界时，将其作为一个原子产品产出记录；仅在锁定路线和场址记录证明该交换存在时纳入。

- 选定流: Accepted tender ginger rhizomes
- 流属性/单位: Mass / kg
- 数量规则: 检验并分批后称量验收合格净质量。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 按声明路线批次记录，并归一化至 1 kg 净合格 Ginger, processed 产出，包装质量除外
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_route_scope_receiving`
- 来源: `codex-cxs-260-2007`; `eu-pef-2021-2279`

###### 验收合格的外购整粒干姜 (`recv_accepted_dried_whole_ginger`)

当 Accepted purchased dried whole ginger 跨越“路线与原料状态锁定；接收”前景边界时，将其作为一个原子产品产出记录；仅在锁定路线和场址记录证明该交换存在时纳入。

- 选定流: Accepted purchased dried whole ginger
- 流属性/单位: Mass / kg
- 数量规则: 称量验收合格净质量，并保留水分或状态证据。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 按声明路线批次记录，并归一化至 1 kg 净合格 Ginger, processed 产出，包装质量除外
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_route_scope_receiving`
- 来源: `codex-cxs-343-2021`; `eu-pef-2021-2279`

##### 废物流

###### 不合格成熟姜根茎 (`recv_rejected_mature_ginger`)

当 Rejected mature ginger rhizomes 跨越“路线与原料状态锁定；接收”前景边界时，将其作为一个原子废物产出记录；仅在锁定路线和场址记录证明该交换存在时纳入。

- 选定流: Rejected mature ginger rhizomes
- 流属性/单位: Mass / kg
- 数量规则: 按去向称量不合格成熟姜根茎。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 按声明路线批次记录，并归一化至 1 kg 净合格 Ginger, processed 产出，包装质量除外
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_route_scope_receiving`
- 来源: `fao-ginger-postharvest-operations`; `eu-fdm-bat-2019-2031`

###### 不合格嫩姜根茎 (`recv_rejected_tender_ginger`)

当 Rejected tender ginger rhizomes 跨越“路线与原料状态锁定；接收”前景边界时，将其作为一个原子废物产出记录；仅在锁定路线和场址记录证明该交换存在时纳入。

- 选定流: Rejected tender ginger rhizomes
- 流属性/单位: Mass / kg
- 数量规则: 按去向称量不合格嫩姜根茎。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 按声明路线批次记录，并归一化至 1 kg 净合格 Ginger, processed 产出，包装质量除外
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_route_scope_receiving`
- 来源: `codex-cxs-260-2007`; `eu-fdm-bat-2019-2031`

###### 不合格外购干姜 (`recv_rejected_dried_ginger`)

当 Rejected purchased dried ginger 跨越“路线与原料状态锁定；接收”前景边界时，将其作为一个原子废物产出记录；仅在锁定路线和场址记录证明该交换存在时纳入。

- 选定流: Rejected purchased dried ginger
- 流属性/单位: Mass / kg
- 数量规则: 按去向称量不合格外购干姜。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 按声明路线批次记录，并归一化至 1 kg 净合格 Ginger, processed 产出，包装质量除外
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_route_scope_receiving`
- 来源: `codex-cxs-343-2021`; `eu-fdm-bat-2019-2031`

###### 废弃黄麻姜袋 (`recv_jute_sack_waste`)

当 Discarded jute ginger sack 跨越“路线与原料状态锁定；接收”前景边界时，将其作为一个原子废物产出记录；仅在锁定路线和场址记录证明该交换存在时纳入。

- 选定流: Discarded jute ginger sack
- 流属性/单位: Mass / kg
- 数量规则: 与其他包装废物分开称量废弃黄麻袋。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 按声明路线批次记录，并归一化至 1 kg 净合格 Ginger, processed 产出，包装质量除外
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_route_scope_receiving`
- 来源: `fao-ginger-postharvest-operations`; `eu-fdm-bat-2019-2031`

###### 废弃聚乙烯姜袋 (`recv_polyethylene_sack_waste`)

当 Discarded polyethylene ginger sack 跨越“路线与原料状态锁定；接收”前景边界时，将其作为一个原子废物产出记录；仅在锁定路线和场址记录证明该交换存在时纳入。

- 选定流: Discarded polyethylene ginger sack
- 流属性/单位: Mass / kg
- 数量规则: 与其他包装废物分开称量废弃聚乙烯袋。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 按声明路线批次记录，并归一化至 1 kg 净合格 Ginger, processed 产出，包装质量除外
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_route_scope_receiving`
- 来源: `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`

##### 基本流

### 过程：清洗与修整 (`washing_trimming`)

#### 输入

##### 产品流

###### 进入清洗的合格成熟姜根茎 (`wash_accepted_mature_ginger`)

当 Accepted mature ginger rhizomes 跨越“清洗与修整”前景边界时，将其作为一个原子产品投入记录；仅在锁定路线和场址记录证明该交换存在时纳入。

- 选定流: Accepted mature ginger rhizomes
- 流属性/单位: Mass / kg
- 数量规则: 承接接收批次记录中的合格质量。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 按声明路线批次记录，并归一化至 1 kg 净合格 Ginger, processed 产出，包装质量除外
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_washing_trimming`
- 来源: `fao-ginger-postharvest-operations`; `eu-pef-2021-2279`

###### 进入清洗的合格嫩姜根茎 (`wash_accepted_tender_ginger`)

当 Accepted tender ginger rhizomes 跨越“清洗与修整”前景边界时，将其作为一个原子产品投入记录；仅在锁定路线和场址记录证明该交换存在时纳入。

- 选定流: Accepted tender ginger rhizomes
- 流属性/单位: Mass / kg
- 数量规则: 承接接收批次记录中的合格质量。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 按声明路线批次记录，并归一化至 1 kg 净合格 Ginger, processed 产出，包装质量除外
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_washing_trimming`
- 来源: `codex-cxs-260-2007`; `eu-pef-2021-2279`

###### 姜清洗用工艺水 (`wash_process_water`)

当 Process water for ginger washing 跨越“清洗与修整”前景边界时，将其作为一个原子产品投入记录；仅在锁定路线和场址记录证明该交换存在时纳入。

- 选定流: Process water for ginger washing
- 流属性/单位: Mass / kg
- 数量规则: 计量进入姜清洗机或清洗槽的补充水。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 按声明路线批次记录，并归一化至 1 kg 净合格 Ginger, processed 产出，包装质量除外
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_washing_trimming`
- 来源: `fao-ginger-postharvest-operations`; `eu-fdm-bat-2019-2031`

###### 清洗与修整用电网电力 (`wash_grid_electricity`)

当 Grid electricity 跨越“清洗与修整”前景边界时，将其作为一个原子产品投入记录；仅在锁定路线和场址记录证明该交换存在时纳入。

- 选定流: Grid electricity
- 流属性/单位: Energy / kWh
- 数量规则: 读取清洗修整分表，或记录因果分配。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 按声明路线批次记录，并归一化至 1 kg 净合格 Ginger, processed 产出，包装质量除外
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_washing_trimming`
- 来源: `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 洗净成熟姜根茎 (`wash_washed_mature_ginger`)

当 Washed mature ginger rhizomes 跨越“清洗与修整”前景边界时，将其作为一个原子产品产出记录；仅在锁定路线和场址记录证明该交换存在时纳入。

- 选定流: Washed mature ginger rhizomes
- 流属性/单位: Mass / kg
- 数量规则: 在批次转序时称量洗净成熟姜质量。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 按声明路线批次记录，并归一化至 1 kg 净合格 Ginger, processed 产出，包装质量除外
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_washing_trimming`
- 来源: `fao-ginger-postharvest-operations`; `eu-pef-2021-2279`

###### 洗净嫩姜根茎 (`wash_washed_tender_ginger`)

当 Washed tender ginger rhizomes 跨越“清洗与修整”前景边界时，将其作为一个原子产品产出记录；仅在锁定路线和场址记录证明该交换存在时纳入。

- 选定流: Washed tender ginger rhizomes
- 流属性/单位: Mass / kg
- 数量规则: 在批次转序时称量洗净嫩姜质量。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 按声明路线批次记录，并归一化至 1 kg 净合格 Ginger, processed 产出，包装质量除外
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_washing_trimming`
- 来源: `codex-cxs-260-2007`; `eu-pef-2021-2279`

##### 废物流

###### 去除的姜芽 (`wash_ginger_shoot_waste`)

当 Removed ginger shoots 跨越“清洗与修整”前景边界时，将其作为一个原子废物产出记录；仅在锁定路线和场址记录证明该交换存在时纳入。

- 选定流: Removed ginger shoots
- 流属性/单位: Mass / kg
- 数量规则: 在储存或外运前称量去除的姜芽。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 按声明路线批次记录，并归一化至 1 kg 净合格 Ginger, processed 产出，包装质量除外
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_washing_trimming`
- 来源: `fao-ginger-postharvest-operations`; `eu-fdm-bat-2019-2031`

###### 去除的姜根 (`wash_ginger_root_waste`)

当 Removed ginger roots 跨越“清洗与修整”前景边界时，将其作为一个原子废物产出记录；仅在锁定路线和场址记录证明该交换存在时纳入。

- 选定流: Removed ginger roots
- 流属性/单位: Mass / kg
- 数量规则: 在储存或外运前称量去除的姜根。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 按声明路线批次记录，并归一化至 1 kg 净合格 Ginger, processed 产出，包装质量除外
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_washing_trimming`
- 来源: `fao-ginger-postharvest-operations`; `eu-fdm-bat-2019-2031`

###### 姜中去除的矿物土 (`wash_mineral_soil_waste`)

当 Mineral soil removed from ginger 跨越“清洗与修整”前景边界时，将其作为一个原子废物产出记录；仅在锁定路线和场址记录证明该交换存在时纳入。

- 选定流: Mineral soil removed from ginger
- 流属性/单位: Mass / kg
- 数量规则: 按批次称量清洗机或集污装置收集的矿物土。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 按声明路线批次记录，并归一化至 1 kg 净合格 Ginger, processed 产出，包装质量除外
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_washing_trimming`
- 来源: `fao-ginger-postharvest-operations`; `eu-fdm-bat-2019-2031`

###### 姜中去除的石块 (`wash_stone_waste`)

当 Stones removed from ginger 跨越“清洗与修整”前景边界时，将其作为一个原子废物产出记录；仅在锁定路线和场址记录证明该交换存在时纳入。

- 选定流: Stones removed from ginger
- 流属性/单位: Mass / kg
- 数量规则: 将姜中去除的石块与矿物土分开称量。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 按声明路线批次记录，并归一化至 1 kg 净合格 Ginger, processed 产出，包装质量除外
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_washing_trimming`
- 来源: `fao-ginger-postharvest-operations`; `eu-fdm-bat-2019-2031`

###### 姜清洗废水 (`wash_wastewater`)

当 Ginger washing wastewater 跨越“清洗与修整”前景边界时，将其作为一个原子废物产出记录；仅在锁定路线和场址记录证明该交换存在时纳入。

- 选定流: Ginger washing wastewater
- 流属性/单位: Mass / kg
- 数量规则: 在场内或外部处理前计量该股废水体积或质量。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 按声明路线批次记录，并归一化至 1 kg 净合格 Ginger, processed 产出，包装质量除外
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_washing_trimming`
- 来源: `eu-fdm-bat-2019-2031`; `jrc-fdm-bref-2019`

##### 基本流

###### 随清洗水排放的姜固形物 (`wash_ginger_solids_to_water`)

当 Ginger solids to water 跨越“清洗与修整”前景边界时，将其作为一个原子基本产出记录；仅在锁定路线和场址记录证明该交换存在时纳入。

- 选定流: Ginger solids to water
- 流属性/单位: Mass / kg
- 数量规则: 由排放点实测姜悬浮固体浓度和清洗水流量计算。
- 数值来源模式: 计算值 (`calculated_value`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 按声明路线批次记录，并归一化至 1 kg 净合格 Ginger, processed 产出，包装质量除外
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 依据采集记录计算 (`calculated_from_collection`)
- 采集协议: `cp_washing_trimming`
- 来源: `eu-fdm-bat-2019-2031`

### 过程：刮皮、去皮与切片 (`scraping_peeling_slicing`)

#### 输入

##### 产品流

###### 进入制备的洗净成熟姜 (`prep_washed_mature_ginger`)

当 Washed mature ginger rhizomes 跨越“刮皮、去皮与切片”前景边界时，将其作为一个原子产品投入记录；仅在锁定路线和场址记录证明该交换存在时纳入。

- 选定流: Washed mature ginger rhizomes
- 流属性/单位: Mass / kg
- 数量规则: 承接清洗工序的批次实测质量。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 按声明路线批次记录，并归一化至 1 kg 净合格 Ginger, processed 产出，包装质量除外
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_scraping_peeling_slicing`
- 来源: `fao-ginger-postharvest-operations`; `eu-pef-2021-2279`

###### 进入制备的洗净嫩姜 (`prep_washed_tender_ginger`)

当 Washed tender ginger rhizomes 跨越“刮皮、去皮与切片”前景边界时，将其作为一个原子产品投入记录；仅在锁定路线和场址记录证明该交换存在时纳入。

- 选定流: Washed tender ginger rhizomes
- 流属性/单位: Mass / kg
- 数量规则: 承接清洗工序的批次实测质量。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 按声明路线批次记录，并归一化至 1 kg 净合格 Ginger, processed 产出，包装质量除外
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_scraping_peeling_slicing`
- 来源: `codex-cxs-260-2007`; `eu-pef-2021-2279`

###### 姜制备用工艺水 (`prep_process_water`)

当 Process water for ginger preparation 跨越“刮皮、去皮与切片”前景边界时，将其作为一个原子产品投入记录；仅在锁定路线和场址记录证明该交换存在时纳入。

- 选定流: Process water for ginger preparation
- 流属性/单位: Mass / kg
- 数量规则: 计量进入声明刮皮、去皮或切片操作的水。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 按声明路线批次记录，并归一化至 1 kg 净合格 Ginger, processed 产出，包装质量除外
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_scraping_peeling_slicing`
- 来源: `fao-ginger-postharvest-operations`; `eu-fdm-bat-2019-2031`

###### 刮皮、去皮或切片用电网电力 (`prep_grid_electricity`)

当 Grid electricity 跨越“刮皮、去皮与切片”前景边界时，将其作为一个原子产品投入记录；仅在锁定路线和场址记录证明该交换存在时纳入。

- 选定流: Grid electricity
- 流属性/单位: Energy / kWh
- 数量规则: 读取制备设备分表，或记录因果分配。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 按声明路线批次记录，并归一化至 1 kg 净合格 Ginger, processed 产出，包装质量除外
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_scraping_peeling_slicing`
- 来源: `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 刮皮整粒成熟姜 (`prep_scraped_mature_whole_ginger`)

当 Scraped whole mature ginger 跨越“刮皮、去皮与切片”前景边界时，将其作为一个原子产品产出记录；仅在锁定路线和场址记录证明该交换存在时纳入。

- 选定流: Scraped whole mature ginger
- 流属性/单位: Mass / kg
- 数量规则: 在批次转序时称量声明的刮皮整粒产出。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 按声明路线批次记录，并归一化至 1 kg 净合格 Ginger, processed 产出，包装质量除外
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_scraping_peeling_slicing`
- 来源: `fao-ginger-postharvest-operations`; `codex-cxs-343-2021`

###### 成熟姜片 (`prep_sliced_mature_ginger`)

当 Sliced mature ginger 跨越“刮皮、去皮与切片”前景边界时，将其作为一个原子产品产出记录；仅在锁定路线和场址记录证明该交换存在时纳入。

- 选定流: Sliced mature ginger
- 流属性/单位: Mass / kg
- 数量规则: 称量成熟姜片质量并记录切片规格。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 按声明路线批次记录，并归一化至 1 kg 净合格 Ginger, processed 产出，包装质量除外
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_scraping_peeling_slicing`
- 来源: `fao-ginger-postharvest-operations`; `codex-cxs-343-2021`

###### 刮皮整粒嫩姜 (`prep_scraped_tender_whole_ginger`)

当 Scraped whole tender ginger 跨越“刮皮、去皮与切片”前景边界时，将其作为一个原子产品产出记录；仅在锁定路线和场址记录证明该交换存在时纳入。

- 选定流: Scraped whole tender ginger
- 流属性/单位: Mass / kg
- 数量规则: 称量声明的刮皮整粒嫩姜产出。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 按声明路线批次记录，并归一化至 1 kg 净合格 Ginger, processed 产出，包装质量除外
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_scraping_peeling_slicing`
- 来源: `codex-cxs-260-2007`; `eu-pef-2021-2279`

###### 嫩姜片 (`prep_sliced_tender_ginger`)

当 Sliced tender ginger 跨越“刮皮、去皮与切片”前景边界时，将其作为一个原子产品产出记录；仅在锁定路线和场址记录证明该交换存在时纳入。

- 选定流: Sliced tender ginger
- 流属性/单位: Mass / kg
- 数量规则: 称量嫩姜片质量并记录切片规格。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 按声明路线批次记录，并归一化至 1 kg 净合格 Ginger, processed 产出，包装质量除外
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_scraping_peeling_slicing`
- 来源: `codex-cxs-260-2007`; `eu-pef-2021-2279`

##### 废物流

###### 姜皮 (`prep_ginger_peel_waste`)

当 Ginger peel 跨越“刮皮、去皮与切片”前景边界时，将其作为一个原子废物产出记录；仅在锁定路线和场址记录证明该交换存在时纳入。

- 选定流: Ginger peel
- 流属性/单位: Mass / kg
- 数量规则: 在收集点单独称量姜皮。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 按声明路线批次记录，并归一化至 1 kg 净合格 Ginger, processed 产出，包装质量除外
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_scraping_peeling_slicing`
- 来源: `fao-ginger-postharvest-operations`; `eu-fdm-bat-2019-2031`

###### 姜修整碎片 (`prep_ginger_trim_waste`)

当 Ginger trimming pieces 跨越“刮皮、去皮与切片”前景边界时，将其作为一个原子废物产出记录；仅在锁定路线和场址记录证明该交换存在时纳入。

- 选定流: Ginger trimming pieces
- 流属性/单位: Mass / kg
- 数量规则: 将修整碎片与姜皮及不合格整根姜分开称量。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 按声明路线批次记录，并归一化至 1 kg 净合格 Ginger, processed 产出，包装质量除外
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_scraping_peeling_slicing`
- 来源: `fao-ginger-postharvest-operations`; `eu-fdm-bat-2019-2031`

###### 姜制备废水 (`prep_wastewater`)

当 Ginger preparation wastewater 跨越“刮皮、去皮与切片”前景边界时，将其作为一个原子废物产出记录；仅在锁定路线和场址记录证明该交换存在时纳入。

- 选定流: Ginger preparation wastewater
- 流属性/单位: Mass / kg
- 数量规则: 在处理或外运前计量制备废水流。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 按声明路线批次记录，并归一化至 1 kg 净合格 Ginger, processed 产出，包装质量除外
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_scraping_peeling_slicing`
- 来源: `eu-fdm-bat-2019-2031`; `jrc-fdm-bref-2019`

##### 基本流

### 过程：干制预处理 (`drying_pretreatment`)

#### 输入

##### 产品流

###### 干制预处理用刮皮整粒成熟姜 (`pretreat_scraped_whole_mature_ginger`)

当 Scraped whole mature ginger 跨越“干制预处理”前景边界时，将其作为一个原子产品投入记录；仅在锁定路线和场址记录证明该交换存在时纳入。

- 选定流: Scraped whole mature ginger
- 流属性/单位: Mass / kg
- 数量规则: 承接制备工序的刮皮整粒实测质量。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 按声明路线批次记录，并归一化至 1 kg 净合格 Ginger, processed 产出，包装质量除外
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_drying_pretreatment`
- 来源: `fao-ginger-postharvest-operations`; `codex-cxs-343-2021`

###### 干制预处理用成熟姜片 (`pretreat_sliced_mature_ginger`)

当 Sliced mature ginger 跨越“干制预处理”前景边界时，将其作为一个原子产品投入记录；仅在锁定路线和场址记录证明该交换存在时纳入。

- 选定流: Sliced mature ginger
- 流属性/单位: Mass / kg
- 数量规则: 承接制备工序的姜片实测质量。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 按声明路线批次记录，并归一化至 1 kg 净合格 Ginger, processed 产出，包装质量除外
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_drying_pretreatment`
- 来源: `fao-ginger-postharvest-operations`; `codex-cxs-343-2021`

###### 姜烫漂用工艺水 (`pretreat_scalding_water`)

当 Process water for ginger scalding 跨越“干制预处理”前景边界时，将其作为一个原子产品投入记录；仅在锁定路线和场址记录证明该交换存在时纳入。

- 选定流: Process water for ginger scalding
- 流属性/单位: Mass / kg
- 数量规则: 计量进入烫漂容器的水。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 按声明路线批次记录，并归一化至 1 kg 净合格 Ginger, processed 产出，包装质量除外
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_drying_pretreatment`
- 来源: `fao-ginger-postharvest-operations`; `eu-fdm-bat-2019-2031`

###### 漂白加工助剂氧化钙 (`pretreat_calcium_oxide`)

当 Calcium oxide 跨越“干制预处理”前景边界时，将其作为一个原子产品投入记录；仅在锁定路线和场址记录证明该交换存在时纳入。

- 选定流: Calcium oxide
- 流属性/单位: Mass / kg
- 数量规则: 依据批次投料记录记录氧化钙实际质量；不得采用默认投加量。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 按声明路线批次记录，并归一化至 1 kg 净合格 Ginger, processed 产出，包装质量除外
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_drying_pretreatment`
- 来源: `fao-ginger-postharvest-operations`; `codex-cxs-343-2021`

###### 干制预处理用电网电力 (`pretreat_grid_electricity`)

当 Grid electricity 跨越“干制预处理”前景边界时，将其作为一个原子产品投入记录；仅在锁定路线和场址记录证明该交换存在时纳入。

- 选定流: Grid electricity
- 流属性/单位: Energy / kWh
- 数量规则: 读取预处理分表，或记录因果分配。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 按声明路线批次记录，并归一化至 1 kg 净合格 Ginger, processed 产出，包装质量除外
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_drying_pretreatment`
- 来源: `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`

###### 姜预处理用外购饱和蒸汽 (`pretreat_purchased_steam`)

当 Purchased saturated steam 跨越“干制预处理”前景边界时，将其作为一个原子产品投入记录；仅在锁定路线和场址记录证明该交换存在时纳入。

- 选定流: Purchased saturated steam
- 流属性/单位: Energy / MJ
- 数量规则: 计量输送至预处理边界的外购蒸汽能量。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 按声明路线批次记录，并归一化至 1 kg 净合格 Ginger, processed 产出，包装质量除外
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_drying_pretreatment`
- 来源: `jrc-fdm-bref-2019`; `eu-fdm-bat-2019-2031`

###### 姜预处理用外购热水 (`pretreat_purchased_hot_water`)

当 Purchased hot water 跨越“干制预处理”前景边界时，将其作为一个原子产品投入记录；仅在锁定路线和场址记录证明该交换存在时纳入。

- 选定流: Purchased hot water
- 流属性/单位: Energy / MJ
- 数量规则: 计量输送至预处理边界的外购热水能量。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 按声明路线批次记录，并归一化至 1 kg 净合格 Ginger, processed 产出，包装质量除外
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_drying_pretreatment`
- 来源: `jrc-fdm-bref-2019`; `eu-fdm-bat-2019-2031`

###### 姜预处理用天然气 (`pretreat_natural_gas`)

当 Natural gas 跨越“干制预处理”前景边界时，将其作为一个原子产品投入记录；仅在锁定路线和场址记录证明该交换存在时纳入。

- 选定流: Natural gas
- 流属性/单位: Mass / kg
- 数量规则: 计量进入预处理加热器的天然气。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 按声明路线批次记录，并归一化至 1 kg 净合格 Ginger, processed 产出，包装质量除外
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_drying_pretreatment`
- 来源: `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`

###### 姜预处理用柴油 (`pretreat_diesel`)

当 Diesel fuel 跨越“干制预处理”前景边界时，将其作为一个原子产品投入记录；仅在锁定路线和场址记录证明该交换存在时纳入。

- 选定流: Diesel fuel
- 流属性/单位: Mass / kg
- 数量规则: 计量进入预处理加热器的柴油。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 按声明路线批次记录，并归一化至 1 kg 净合格 Ginger, processed 产出，包装质量除外
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_drying_pretreatment`
- 来源: `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`

###### 姜预处理用液化石油气 (`pretreat_lpg`)

当 Liquefied petroleum gas 跨越“干制预处理”前景边界时，将其作为一个原子产品投入记录；仅在锁定路线和场址记录证明该交换存在时纳入。

- 选定流: Liquefied petroleum gas
- 流属性/单位: Mass / kg
- 数量规则: 计量进入预处理加热器的液化石油气。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 按声明路线批次记录，并归一化至 1 kg 净合格 Ginger, processed 产出，包装质量除外
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_drying_pretreatment`
- 来源: `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 烫漂整粒成熟姜 (`pretreat_scalded_whole_ginger`)

当 Scalded whole mature ginger 跨越“干制预处理”前景边界时，将其作为一个原子产品产出记录；仅在锁定路线和场址记录证明该交换存在时纳入。

- 选定流: Scalded whole mature ginger
- 流属性/单位: Mass / kg
- 数量规则: 在转入干燥时称量烫漂整粒姜质量。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 按声明路线批次记录，并归一化至 1 kg 净合格 Ginger, processed 产出，包装质量除外
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_drying_pretreatment`
- 来源: `fao-ginger-postharvest-operations`; `codex-cxs-343-2021`

###### 烫漂成熟姜片 (`pretreat_scalded_sliced_ginger`)

当 Scalded sliced mature ginger 跨越“干制预处理”前景边界时，将其作为一个原子产品产出记录；仅在锁定路线和场址记录证明该交换存在时纳入。

- 选定流: Scalded sliced mature ginger
- 流属性/单位: Mass / kg
- 数量规则: 在转入干燥时称量烫漂姜片质量。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 按声明路线批次记录，并归一化至 1 kg 净合格 Ginger, processed 产出，包装质量除外
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_drying_pretreatment`
- 来源: `fao-ginger-postharvest-operations`; `codex-cxs-343-2021`

##### 废物流

###### 姜烫漂废水 (`pretreat_spent_scalding_water`)

当 Spent ginger scalding water 跨越“干制预处理”前景边界时，将其作为一个原子废物产出记录；仅在锁定路线和场址记录证明该交换存在时纳入。

- 选定流: Spent ginger scalding water
- 流属性/单位: Mass / kg
- 数量规则: 在处理或外运前计量烫漂废水。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 按声明路线批次记录，并归一化至 1 kg 净合格 Ginger, processed 产出，包装质量除外
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_drying_pretreatment`
- 来源: `eu-fdm-bat-2019-2031`; `jrc-fdm-bref-2019`

###### 含钙姜预处理废水 (`pretreat_calcium_wastewater`)

当 Calcium-containing ginger pretreatment wastewater 跨越“干制预处理”前景边界时，将其作为一个原子废物产出记录；仅在锁定路线和场址记录证明该交换存在时纳入。

- 选定流: Calcium-containing ginger pretreatment wastewater
- 流属性/单位: Mass / kg
- 数量规则: 使用氧化钙漂白时单独计量该股废水。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 按声明路线批次记录，并归一化至 1 kg 净合格 Ginger, processed 产出，包装质量除外
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_drying_pretreatment`
- 来源: `codex-cxs-343-2021`; `eu-fdm-bat-2019-2031`

##### 基本流

### 过程：干燥 (`drying`)

#### 输入

##### 产品流

###### 直接干燥的刮皮整粒成熟姜 (`drying_scraped_whole_mature_ginger`)

当 Scraped whole mature ginger 跨越“干燥”前景边界时，将其作为一个原子产品投入记录；仅在锁定路线和场址记录证明该交换存在时纳入。

- 选定流: Scraped whole mature ginger
- 流属性/单位: Mass / kg
- 数量规则: 不运行预处理时承接制备实测质量。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 按声明路线批次记录，并归一化至 1 kg 净合格 Ginger, processed 产出，包装质量除外
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_drying`
- 来源: `fao-ginger-postharvest-operations`; `codex-cxs-343-2021`

###### 直接干燥的成熟姜片 (`drying_sliced_mature_ginger`)

当 Sliced mature ginger 跨越“干燥”前景边界时，将其作为一个原子产品投入记录；仅在锁定路线和场址记录证明该交换存在时纳入。

- 选定流: Sliced mature ginger
- 流属性/单位: Mass / kg
- 数量规则: 不运行预处理时承接制备实测质量。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 按声明路线批次记录，并归一化至 1 kg 净合格 Ginger, processed 产出，包装质量除外
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_drying`
- 来源: `fao-ginger-postharvest-operations`; `codex-cxs-343-2021`

###### 进入干燥的烫漂整粒成熟姜 (`drying_scalded_whole_ginger`)

当 Scalded whole mature ginger 跨越“干燥”前景边界时，将其作为一个原子产品投入记录；仅在锁定路线和场址记录证明该交换存在时纳入。

- 选定流: Scalded whole mature ginger
- 流属性/单位: Mass / kg
- 数量规则: 承接预处理实测质量。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 按声明路线批次记录，并归一化至 1 kg 净合格 Ginger, processed 产出，包装质量除外
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_drying`
- 来源: `fao-ginger-postharvest-operations`; `codex-cxs-343-2021`

###### 进入干燥的烫漂成熟姜片 (`drying_scalded_sliced_ginger`)

当 Scalded sliced mature ginger 跨越“干燥”前景边界时，将其作为一个原子产品投入记录；仅在锁定路线和场址记录证明该交换存在时纳入。

- 选定流: Scalded sliced mature ginger
- 流属性/单位: Mass / kg
- 数量规则: 承接预处理实测质量。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 按声明路线批次记录，并归一化至 1 kg 净合格 Ginger, processed 产出，包装质量除外
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_drying`
- 来源: `fao-ginger-postharvest-operations`; `codex-cxs-343-2021`

###### 姜干燥用电网电力 (`drying_grid_electricity`)

当 Grid electricity 跨越“干燥”前景边界时，将其作为一个原子产品投入记录；仅在锁定路线和场址记录证明该交换存在时纳入。

- 选定流: Grid electricity
- 流属性/单位: Energy / kWh
- 数量规则: 读取干燥机和风机分表，或记录因果分配。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 按声明路线批次记录，并归一化至 1 kg 净合格 Ginger, processed 产出，包装质量除外
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_drying`
- 来源: `fao-ginger-postharvest-operations`; `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`

###### 姜干燥用外购饱和蒸汽 (`drying_purchased_steam`)

当 Purchased saturated steam 跨越“干燥”前景边界时，将其作为一个原子产品投入记录；仅在锁定路线和场址记录证明该交换存在时纳入。

- 选定流: Purchased saturated steam
- 流属性/单位: Energy / MJ
- 数量规则: 计量输送至干燥换热器的蒸汽能量。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 按声明路线批次记录，并归一化至 1 kg 净合格 Ginger, processed 产出，包装质量除外
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_drying`
- 来源: `jrc-fdm-bref-2019`; `eu-fdm-bat-2019-2031`

###### 姜干燥用外购热水 (`drying_purchased_hot_water`)

当 Purchased hot water 跨越“干燥”前景边界时，将其作为一个原子产品投入记录；仅在锁定路线和场址记录证明该交换存在时纳入。

- 选定流: Purchased hot water
- 流属性/单位: Energy / MJ
- 数量规则: 计量输送至干燥系统的热水能量。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 按声明路线批次记录，并归一化至 1 kg 净合格 Ginger, processed 产出，包装质量除外
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_drying`
- 来源: `jrc-fdm-bref-2019`; `eu-fdm-bat-2019-2031`

###### 姜干燥用天然气 (`drying_natural_gas`)

当 Natural gas 跨越“干燥”前景边界时，将其作为一个原子产品投入记录；仅在锁定路线和场址记录证明该交换存在时纳入。

- 选定流: Natural gas
- 流属性/单位: Mass / kg
- 数量规则: 在干燥机燃烧器处计量天然气。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 按声明路线批次记录，并归一化至 1 kg 净合格 Ginger, processed 产出，包装质量除外
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_drying`
- 来源: `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`

###### 姜干燥用柴油 (`drying_diesel`)

当 Diesel fuel 跨越“干燥”前景边界时，将其作为一个原子产品投入记录；仅在锁定路线和场址记录证明该交换存在时纳入。

- 选定流: Diesel fuel
- 流属性/单位: Mass / kg
- 数量规则: 在干燥机燃烧器或发电机处计量柴油。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 按声明路线批次记录，并归一化至 1 kg 净合格 Ginger, processed 产出，包装质量除外
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_drying`
- 来源: `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`

###### 姜干燥用液化石油气 (`drying_lpg`)

当 Liquefied petroleum gas 跨越“干燥”前景边界时，将其作为一个原子产品投入记录；仅在锁定路线和场址记录证明该交换存在时纳入。

- 选定流: Liquefied petroleum gas
- 流属性/单位: Mass / kg
- 数量规则: 在干燥机燃烧器处计量液化石油气。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 按声明路线批次记录，并归一化至 1 kg 净合格 Ginger, processed 产出，包装质量除外
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_drying`
- 来源: `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`

###### 干燥热泵或冷却回路补充氨制冷剂（R717） (`drying_r717_makeup`)

当 Ammonia refrigerant (R717) 跨越“干燥”前景边界时，将其作为一个原子产品投入记录；仅在锁定路线和场址记录证明该交换存在时纳入。

- 选定流: Ammonia refrigerant (R717)
- 流属性/单位: Mass / kg
- 数量规则: 依据维护日志记录干燥回路补充质量。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 按声明路线批次记录，并归一化至 1 kg 净合格 Ginger, processed 产出，包装质量除外
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_drying`
- 来源: `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`

###### 干燥热泵或冷却回路补充二氧化碳制冷剂（R744） (`drying_r744_makeup`)

当 Carbon dioxide refrigerant (R744) 跨越“干燥”前景边界时，将其作为一个原子产品投入记录；仅在锁定路线和场址记录证明该交换存在时纳入。

- 选定流: Carbon dioxide refrigerant (R744)
- 流属性/单位: Mass / kg
- 数量规则: 依据维护日志记录干燥回路补充质量。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 按声明路线批次记录，并归一化至 1 kg 净合格 Ginger, processed 产出，包装质量除外
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_drying`
- 来源: `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`

###### 现有干燥热泵或冷却回路补充 R404A 制冷剂 (`drying_r404a_makeup`)

当 R404A refrigerant 跨越“干燥”前景边界时，将其作为一个原子产品投入记录；仅在锁定路线和场址记录证明该交换存在时纳入。

- 选定流: R404A refrigerant
- 流属性/单位: Mass / kg
- 数量规则: 仅在安装该确切制冷剂时依据维护日志记录补充质量。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 按声明路线批次记录，并归一化至 1 kg 净合格 Ginger, processed 产出，包装质量除外
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_drying`
- 来源: `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 整粒干姜 (`drying_dried_whole_ginger`)

当 Dried whole ginger 跨越“干燥”前景边界时，将其作为一个原子产品产出记录；仅在锁定路线和场址记录证明该交换存在时纳入。

- 选定流: Dried whole ginger
- 流属性/单位: Mass / kg
- 数量规则: 称量整粒干姜质量并记录水分放行结果。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 按声明路线批次记录，并归一化至 1 kg 净合格 Ginger, processed 产出，包装质量除外
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_drying`
- 来源: `codex-cxs-343-2021`; `fao-ginger-postharvest-operations`

###### 干姜片或块 (`drying_dried_ginger_pieces`)

当 Dried ginger pieces 跨越“干燥”前景边界时，将其作为一个原子产品产出记录；仅在锁定路线和场址记录证明该交换存在时纳入。

- 选定流: Dried ginger pieces
- 流属性/单位: Mass / kg
- 数量规则: 称量干姜片或块质量，并记录形态和水分放行结果。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 按声明路线批次记录，并归一化至 1 kg 净合格 Ginger, processed 产出，包装质量除外
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_drying`
- 来源: `codex-cxs-343-2021`; `fao-ginger-postharvest-operations`

##### 废物流

###### 不合格干姜 (`drying_offspec_dried_ginger`)

当 Off-specification dried ginger 跨越“干燥”前景边界时，将其作为一个原子废物产出记录；仅在锁定路线和场址记录证明该交换存在时纳入。

- 选定流: Off-specification dried ginger
- 流属性/单位: Mass / kg
- 数量规则: 按处置去向单独称量不合格干姜。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 按声明路线批次记录，并归一化至 1 kg 净合格 Ginger, processed 产出，包装质量除外
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_drying`
- 来源: `codex-cxs-343-2021`; `eu-fdm-bat-2019-2031`

##### 基本流

###### 姜干燥释放至空气的水蒸气 (`drying_water_vapour_air`)

当 Water vapour to air 跨越“干燥”前景边界时，将其作为一个原子基本产出记录；仅在锁定路线和场址记录证明该交换存在时纳入。

- 选定流: Water vapour to air
- 流属性/单位: Mass / kg
- 数量规则: 依据核对后的投入与干品水分质量计算，或计量冷凝当量损失。
- 数值来源模式: 计算值 (`calculated_value`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 按声明路线批次记录，并归一化至 1 kg 净合格 Ginger, processed 产出，包装质量除外
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 依据采集记录计算 (`calculated_from_collection`)
- 采集协议: `cp_drying`
- 来源: `fao-ginger-postharvest-operations`; `eu-pef-2021-2279`

###### 干燥排放至空气的姜颗粒物 (`drying_ginger_dust_air`)

当 Ginger particulate matter to air 跨越“干燥”前景边界时，将其作为一个原子基本产出记录；仅在锁定路线和场址记录证明该交换存在时纳入。

- 选定流: Ginger particulate matter to air
- 流属性/单位: Mass / kg
- 数量规则: 依据监测出口浓度与气流量或有记录的场址质量平衡计算。
- 数值来源模式: 计算值 (`calculated_value`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 按声明路线批次记录，并归一化至 1 kg 净合格 Ginger, processed 产出，包装质量除外
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 依据采集记录计算 (`calculated_from_collection`)
- 采集协议: `cp_drying`
- 来源: `eu-fdm-bat-2019-2031`

###### 干燥燃烧产生的化石二氧化碳 (`drying_fossil_co2_air`)

当 Carbon dioxide, fossil, to air 跨越“干燥”前景边界时，将其作为一个原子基本产出记录；仅在锁定路线和场址记录证明该交换存在时纳入。

- 选定流: Carbon dioxide, fossil, to air
- 流属性/单位: Mass / kg
- 数量规则: 依据实测燃料用量和有记录的场址特定或适用排放因子分别计算。
- 数值来源模式: 计算值 (`calculated_value`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 按声明路线批次记录，并归一化至 1 kg 净合格 Ginger, processed 产出，包装质量除外
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 依据采集记录计算 (`calculated_from_collection`)
- 采集协议: `cp_drying`
- 来源: `eu-fdm-bat-2019-2031`

###### 干燥燃烧产生的一氧化氮 (`drying_no_air`)

当 Nitrogen monoxide to air 跨越“干燥”前景边界时，将其作为一个原子基本产出记录；仅在锁定路线和场址记录证明该交换存在时纳入。

- 选定流: Nitrogen monoxide to air
- 流属性/单位: Mass / kg
- 数量规则: 依据实测燃料用量和有记录的场址特定或适用排放因子分别计算。
- 数值来源模式: 计算值 (`calculated_value`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 按声明路线批次记录，并归一化至 1 kg 净合格 Ginger, processed 产出，包装质量除外
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 依据采集记录计算 (`calculated_from_collection`)
- 采集协议: `cp_drying`
- 来源: `eu-fdm-bat-2019-2031`

###### 干燥燃烧产生的二氧化氮 (`drying_no2_air`)

当 Nitrogen dioxide to air 跨越“干燥”前景边界时，将其作为一个原子基本产出记录；仅在锁定路线和场址记录证明该交换存在时纳入。

- 选定流: Nitrogen dioxide to air
- 流属性/单位: Mass / kg
- 数量规则: 依据实测燃料用量和有记录的场址特定或适用排放因子分别计算。
- 数值来源模式: 计算值 (`calculated_value`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 按声明路线批次记录，并归一化至 1 kg 净合格 Ginger, processed 产出，包装质量除外
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 依据采集记录计算 (`calculated_from_collection`)
- 采集协议: `cp_drying`
- 来源: `eu-fdm-bat-2019-2031`

###### 干燥燃烧产生的二氧化硫 (`drying_so2_air`)

当 Sulfur dioxide to air 跨越“干燥”前景边界时，将其作为一个原子基本产出记录；仅在锁定路线和场址记录证明该交换存在时纳入。

- 选定流: Sulfur dioxide to air
- 流属性/单位: Mass / kg
- 数量规则: 依据实测燃料用量和有记录的场址特定或适用排放因子分别计算。
- 数值来源模式: 计算值 (`calculated_value`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 按声明路线批次记录，并归一化至 1 kg 净合格 Ginger, processed 产出，包装质量除外
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 依据采集记录计算 (`calculated_from_collection`)
- 采集协议: `cp_drying`
- 来源: `eu-fdm-bat-2019-2031`

###### 干燥燃烧产生的 PM2.5 (`drying_pm25_air`)

当 Particulate matter, diameter below 2.5 µm, to air 跨越“干燥”前景边界时，将其作为一个原子基本产出记录；仅在锁定路线和场址记录证明该交换存在时纳入。

- 选定流: Particulate matter, diameter below 2.5 µm, to air
- 流属性/单位: Mass / kg
- 数量规则: 依据实测燃料用量和有记录的场址特定或适用排放因子分别计算。
- 数值来源模式: 计算值 (`calculated_value`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 按声明路线批次记录，并归一化至 1 kg 净合格 Ginger, processed 产出，包装质量除外
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 依据采集记录计算 (`calculated_from_collection`)
- 采集协议: `cp_drying`
- 来源: `eu-fdm-bat-2019-2031`

###### 氨制冷剂（R717）泄漏至空气 (`drying_r717_air`)

当 Ammonia (R717) to air 跨越“干燥”前景边界时，将其作为一个原子基本产出记录；仅在锁定路线和场址记录证明该交换存在时纳入。

- 选定流: Ammonia (R717) to air
- 流属性/单位: Mass / kg
- 数量规则: 依据回路库存和回收记录计算该制冷剂单项损失。
- 数值来源模式: 计算值 (`calculated_value`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 按声明路线批次记录，并归一化至 1 kg 净合格 Ginger, processed 产出，包装质量除外
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 依据采集记录计算 (`calculated_from_collection`)
- 采集协议: `cp_drying`
- 来源: `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`

###### 二氧化碳制冷剂（R744）泄漏至空气 (`drying_r744_air`)

当 Carbon dioxide refrigerant (R744) to air 跨越“干燥”前景边界时，将其作为一个原子基本产出记录；仅在锁定路线和场址记录证明该交换存在时纳入。

- 选定流: Carbon dioxide refrigerant (R744) to air
- 流属性/单位: Mass / kg
- 数量规则: 依据回路库存和回收记录计算该制冷剂单项损失。
- 数值来源模式: 计算值 (`calculated_value`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 按声明路线批次记录，并归一化至 1 kg 净合格 Ginger, processed 产出，包装质量除外
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 依据采集记录计算 (`calculated_from_collection`)
- 采集协议: `cp_drying`
- 来源: `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`

###### R404A 制冷剂泄漏至空气 (`drying_r404a_air`)

当 R404A refrigerant to air 跨越“干燥”前景边界时，将其作为一个原子基本产出记录；仅在锁定路线和场址记录证明该交换存在时纳入。

- 选定流: R404A refrigerant to air
- 流属性/单位: Mass / kg
- 数量规则: 依据回路库存和回收记录计算该制冷剂单项损失。
- 数值来源模式: 计算值 (`calculated_value`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 按声明路线批次记录，并归一化至 1 kg 净合格 Ginger, processed 产出，包装质量除外
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 依据采集记录计算 (`calculated_from_collection`)
- 采集协议: `cp_drying`
- 来源: `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`

### 过程：干式清理与分级 (`dry_cleaning_grading`)

#### 输入

##### 产品流

###### 进入清理分级的整粒干姜 (`grade_dried_whole_ginger`)

当 Dried whole ginger 跨越“干式清理与分级”前景边界时，将其作为一个原子产品投入记录；仅在锁定路线和场址记录证明该交换存在时纳入。

- 选定流: Dried whole ginger
- 流属性/单位: Mass / kg
- 数量规则: 承接干燥工序实测质量。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 按声明路线批次记录，并归一化至 1 kg 净合格 Ginger, processed 产出，包装质量除外
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_dry_cleaning_grading`
- 来源: `codex-cxs-343-2021`; `fao-ginger-postharvest-operations`

###### 进入清理分级的干姜片或块 (`grade_dried_ginger_pieces`)

当 Dried ginger pieces 跨越“干式清理与分级”前景边界时，将其作为一个原子产品投入记录；仅在锁定路线和场址记录证明该交换存在时纳入。

- 选定流: Dried ginger pieces
- 流属性/单位: Mass / kg
- 数量规则: 承接干燥工序实测质量。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 按声明路线批次记录，并归一化至 1 kg 净合格 Ginger, processed 产出，包装质量除外
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_dry_cleaning_grading`
- 来源: `codex-cxs-343-2021`; `fao-ginger-postharvest-operations`

###### 干式清理与分级用电网电力 (`grade_grid_electricity`)

当 Grid electricity 跨越“干式清理与分级”前景边界时，将其作为一个原子产品投入记录；仅在锁定路线和场址记录证明该交换存在时纳入。

- 选定流: Grid electricity
- 流属性/单位: Energy / kWh
- 数量规则: 读取风筛和分离设备分表，或记录因果分配。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 按声明路线批次记录，并归一化至 1 kg 净合格 Ginger, processed 产出，包装质量除外
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_dry_cleaning_grading`
- 来源: `fao-ginger-postharvest-operations`; `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`

###### 干姜清理用压缩空气 (`grade_compressed_air`)

当 Compressed air 跨越“干式清理与分级”前景边界时，将其作为一个原子产品投入记录；仅在锁定路线和场址记录证明该交换存在时纳入。

- 选定流: Compressed air
- 流属性/单位: Volume / m3
- 数量规则: 计量压缩空气体积，并在需要时依据有记录的空压机比能耗关系换算。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 按声明路线批次记录，并归一化至 1 kg 净合格 Ginger, processed 产出，包装质量除外
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_dry_cleaning_grading`
- 来源: `codex-cxc-75-2015`; `eu-fdm-bat-2019-2031`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 清理分级后的整粒干姜 (`grade_cleaned_whole_ginger`)

当 Cleaned graded dried whole ginger 跨越“干式清理与分级”前景边界时，将其作为一个原子产品产出记录；仅在锁定路线和场址记录证明该交换存在时纳入。

- 选定流: Cleaned graded dried whole ginger
- 流属性/单位: Mass / kg
- 数量规则: 按声明等级称量清理后的整粒干姜。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 按声明路线批次记录，并归一化至 1 kg 净合格 Ginger, processed 产出，包装质量除外
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_dry_cleaning_grading`
- 来源: `codex-cxs-343-2021`; `fao-ginger-postharvest-operations`

###### 清理分级后的干姜片或块 (`grade_cleaned_ginger_pieces`)

当 Cleaned graded dried ginger pieces 跨越“干式清理与分级”前景边界时，将其作为一个原子产品产出记录；仅在锁定路线和场址记录证明该交换存在时纳入。

- 选定流: Cleaned graded dried ginger pieces
- 流属性/单位: Mass / kg
- 数量规则: 按声明形态和等级称量清理后的干姜片或块。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 按声明路线批次记录，并归一化至 1 kg 净合格 Ginger, processed 产出，包装质量除外
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_dry_cleaning_grading`
- 来源: `codex-cxs-343-2021`; `fao-ginger-postharvest-operations`

##### 废物流

###### 干姜筛下物 (`grade_dried_ginger_screenings`)

当 Dried ginger screenings 跨越“干式清理与分级”前景边界时，将其作为一个原子废物产出记录；仅在锁定路线和场址记录证明该交换存在时纳入。

- 选定流: Dried ginger screenings
- 流属性/单位: Mass / kg
- 数量规则: 在分离设备排出口称量筛下物。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 按声明路线批次记录，并归一化至 1 kg 净合格 Ginger, processed 产出，包装质量除外
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_dry_cleaning_grading`
- 来源: `fao-ginger-postharvest-operations`; `eu-fdm-bat-2019-2031`

###### 干姜中去除的异物 (`grade_foreign_matter_waste`)

当 Foreign matter removed from dried ginger 跨越“干式清理与分级”前景边界时，将其作为一个原子废物产出记录；仅在锁定路线和场址记录证明该交换存在时纳入。

- 选定流: Foreign matter removed from dried ginger
- 流属性/单位: Mass / kg
- 数量规则: 将异物与干姜筛下物分开称量。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 按声明路线批次记录，并归一化至 1 kg 净合格 Ginger, processed 产出，包装质量除外
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_dry_cleaning_grading`
- 来源: `fao-ginger-postharvest-operations`; `codex-cxs-343-2021`

###### 收集的姜粉尘 (`grade_collected_ginger_dust`)

当 Collected ginger dust 跨越“干式清理与分级”前景边界时，将其作为一个原子废物产出记录；仅在锁定路线和场址记录证明该交换存在时纳入。

- 选定流: Collected ginger dust
- 流属性/单位: Mass / kg
- 数量规则: 称量真空、旋风或过滤装置收集的姜粉尘。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 按声明路线批次记录，并归一化至 1 kg 净合格 Ginger, processed 产出，包装质量除外
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_dry_cleaning_grading`
- 来源: `codex-cxc-75-2015`; `eu-fdm-bat-2019-2031`

##### 基本流

###### 清理分级排放至空气的姜颗粒物 (`grade_ginger_dust_air`)

当 Ginger particulate matter to air 跨越“干式清理与分级”前景边界时，将其作为一个原子基本产出记录；仅在锁定路线和场址记录证明该交换存在时纳入。

- 选定流: Ginger particulate matter to air
- 流属性/单位: Mass / kg
- 数量规则: 依据实测出口浓度与气流量或有记录的粉尘质量平衡计算。
- 数值来源模式: 计算值 (`calculated_value`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 按声明路线批次记录，并归一化至 1 kg 净合格 Ginger, processed 产出，包装质量除外
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 依据采集记录计算 (`calculated_from_collection`)
- 采集协议: `cp_dry_cleaning_grading`
- 来源: `eu-fdm-bat-2019-2031`

### 过程：破碎、研磨与筛分 (`crushing_grinding_sieving`)

#### 输入

##### 产品流

###### 进入粒度减小的清洁整粒干姜 (`mill_cleaned_whole_ginger`)

当 Cleaned graded dried whole ginger 跨越“破碎、研磨与筛分”前景边界时，将其作为一个原子产品投入记录；仅在锁定路线和场址记录证明该交换存在时纳入。

- 选定流: Cleaned graded dried whole ginger
- 流属性/单位: Mass / kg
- 数量规则: 承接干式清理分级或接收工序实测质量。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 按声明路线批次记录，并归一化至 1 kg 净合格 Ginger, processed 产出，包装质量除外
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_crushing_grinding_sieving`
- 来源: `codex-cxs-343-2021`; `fao-ginger-postharvest-operations`

###### 进入粒度减小的清洁干姜片或块 (`mill_cleaned_ginger_pieces`)

当 Cleaned graded dried ginger pieces 跨越“破碎、研磨与筛分”前景边界时，将其作为一个原子产品投入记录；仅在锁定路线和场址记录证明该交换存在时纳入。

- 选定流: Cleaned graded dried ginger pieces
- 流属性/单位: Mass / kg
- 数量规则: 承接干式清理分级实测质量。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 按声明路线批次记录，并归一化至 1 kg 净合格 Ginger, processed 产出，包装质量除外
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_crushing_grinding_sieving`
- 来源: `codex-cxs-343-2021`; `fao-ginger-postharvest-operations`

###### 破碎、研磨与筛分用电网电力 (`mill_grid_electricity`)

当 Grid electricity 跨越“破碎、研磨与筛分”前景边界时，将其作为一个原子产品投入记录；仅在锁定路线和场址记录证明该交换存在时纳入。

- 选定流: Grid electricity
- 流属性/单位: Energy / kWh
- 数量规则: 读取磨机和筛分设备分表，或记录因果分配。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 按声明路线批次记录，并归一化至 1 kg 净合格 Ginger, processed 产出，包装质量除外
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_crushing_grinding_sieving`
- 来源: `fao-ginger-postharvest-operations`; `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 破碎干姜 (`mill_crushed_dried_ginger`)

当 Crushed dried ginger 跨越“破碎、研磨与筛分”前景边界时，将其作为一个原子产品产出记录；仅在锁定路线和场址记录证明该交换存在时纳入。

- 选定流: Crushed dried ginger
- 流属性/单位: Mass / kg
- 数量规则: 称量破碎姜质量，并记录设备和粒度规格。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 按声明路线批次记录，并归一化至 1 kg 净合格 Ginger, processed 产出，包装质量除外
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_crushing_grinding_sieving`
- 来源: `codex-cxs-343-2021`; `fao-ginger-postharvest-operations`

###### 干姜粉 (`mill_ground_ginger_powder`)

当 Ground dried ginger powder 跨越“破碎、研磨与筛分”前景边界时，将其作为一个原子产品产出记录；仅在锁定路线和场址记录证明该交换存在时纳入。

- 选定流: Ground dried ginger powder
- 流属性/单位: Mass / kg
- 数量规则: 称量干姜粉质量，并记录磨机和粒度规格。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 按声明路线批次记录，并归一化至 1 kg 净合格 Ginger, processed 产出，包装质量除外
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_crushing_grinding_sieving`
- 来源: `codex-cxs-343-2021`; `fao-ginger-postharvest-operations`

###### 用于内部再研磨的粗粒干姜 (`mill_oversize_ginger_recycle`)

当 Oversize dried ginger particles for internal regrinding 跨越“破碎、研磨与筛分”前景边界时，将其作为一个原子产品产出记录；仅在锁定路线和场址记录证明该交换存在时纳入。

- 选定流: Oversize dried ginger particles for internal regrinding
- 流属性/单位: Mass / kg
- 数量规则: 计量返回同一锁定批次的粗粒，并避免重复计算。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 按声明路线批次记录，并归一化至 1 kg 净合格 Ginger, processed 产出，包装质量除外
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_crushing_grinding_sieving`
- 来源: `fao-ginger-postharvest-operations`; `eu-pef-2021-2279`

##### 废物流

###### 姜粉细筛下物 (`mill_undersize_ginger_screenings`)

当 Undersize ginger powder screenings 跨越“破碎、研磨与筛分”前景边界时，将其作为一个原子废物产出记录；仅在锁定路线和场址记录证明该交换存在时纳入。

- 选定流: Undersize ginger powder screenings
- 流属性/单位: Mass / kg
- 数量规则: 按去向称量离开产品路线的细筛下物。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 按声明路线批次记录，并归一化至 1 kg 净合格 Ginger, processed 产出，包装质量除外
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_crushing_grinding_sieving`
- 来源: `fao-ginger-postharvest-operations`; `eu-fdm-bat-2019-2031`

###### 收集的姜研磨粉尘 (`mill_collected_ginger_dust`)

当 Collected ginger grinding dust 跨越“破碎、研磨与筛分”前景边界时，将其作为一个原子废物产出记录；仅在锁定路线和场址记录证明该交换存在时纳入。

- 选定流: Collected ginger grinding dust
- 流属性/单位: Mass / kg
- 数量规则: 称量磨机除尘系统收集的粉尘。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 按声明路线批次记录，并归一化至 1 kg 净合格 Ginger, processed 产出，包装质量除外
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_crushing_grinding_sieving`
- 来源: `codex-cxc-75-2015`; `eu-fdm-bat-2019-2031`

##### 基本流

###### 破碎研磨筛分排放至空气的姜颗粒物 (`mill_ginger_dust_air`)

当 Ginger particulate matter to air 跨越“破碎、研磨与筛分”前景边界时，将其作为一个原子基本产出记录；仅在锁定路线和场址记录证明该交换存在时纳入。

- 选定流: Ginger particulate matter to air
- 流属性/单位: Mass / kg
- 数量规则: 依据实测出口浓度与气流量或有记录的粉尘质量平衡计算。
- 数值来源模式: 计算值 (`calculated_value`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 按声明路线批次记录，并归一化至 1 kg 净合格 Ginger, processed 产出，包装质量除外
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 依据采集记录计算 (`calculated_from_collection`)
- 采集协议: `cp_crushing_grinding_sieving`
- 来源: `eu-fdm-bat-2019-2031`

### 过程：盐水配制 (`brine_preparation`)

#### 输入

##### 产品流

###### 氯化钠盐水配制用工艺水 (`brine_water`)

当 Process water for sodium chloride brine 跨越“盐水配制”前景边界时，将其作为一个原子产品投入记录；仅在锁定路线和场址记录证明该交换存在时纳入。

- 选定流: Process water for sodium chloride brine
- 流属性/单位: Mass / kg
- 数量规则: 计量投入盐水配制罐的水。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 按声明路线批次记录，并归一化至 1 kg 净合格 Ginger, processed 产出，包装质量除外
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_brine_preparation`
- 来源: `codex-cxs-260-2007`; `eu-fdm-bat-2019-2031`

###### 姜盐水用氯化钠 (`brine_sodium_chloride`)

当 Sodium chloride 跨越“盐水配制”前景边界时，将其作为一个原子产品投入记录；仅在锁定路线和场址记录证明该交换存在时纳入。

- 选定流: Sodium chloride
- 流属性/单位: Mass / kg
- 数量规则: 依据锁定批次配方记录氯化钠实际质量。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 按声明路线批次记录，并归一化至 1 kg 净合格 Ginger, processed 产出，包装质量除外
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_brine_preparation`
- 来源: `codex-cxs-260-2007`; `eu-pef-2021-2279`

###### 盐水姜配方用乙酸 (`brine_acetic_acid`)

当 Acetic acid 跨越“盐水配制”前景边界时，将其作为一个原子产品投入记录；仅在锁定路线和场址记录证明该交换存在时纳入。

- 选定流: Acetic acid
- 流属性/单位: Mass / kg
- 数量规则: 仅在规格要求且当前获准时记录实际投加量；不得由类别许可推定用量。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 按声明路线批次记录，并归一化至 1 kg 净合格 Ginger, processed 产出，包装质量除外
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_brine_preparation`
- 来源: `codex-cxs-260-2007`; `codex-gsfa-04-2-2-3-2025`; `eu-pef-2021-2279`

###### 盐水姜配方用柠檬酸 (`brine_citric_acid`)

当 Citric acid 跨越“盐水配制”前景边界时，将其作为一个原子产品投入记录；仅在锁定路线和场址记录证明该交换存在时纳入。

- 选定流: Citric acid
- 流属性/单位: Mass / kg
- 数量规则: 仅在规格要求且当前获准时记录实际投加量；不得由类别许可推定用量。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 按声明路线批次记录，并归一化至 1 kg 净合格 Ginger, processed 产出，包装质量除外
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_brine_preparation`
- 来源: `codex-cxs-260-2007`; `codex-gsfa-04-2-2-3-2025`; `eu-pef-2021-2279`

###### 盐水姜用苯甲酸钠防腐剂 (`brine_sodium_benzoate`)

当 Sodium benzoate 跨越“盐水配制”前景边界时，将其作为一个原子产品投入记录；仅在锁定路线和场址记录证明该交换存在时纳入。

- 选定流: Sodium benzoate
- 流属性/单位: Mass / kg
- 数量规则: 仅在实际使用该确切防腐剂且其对产品和市场当前获准时记录实际投加量。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 按声明路线批次记录，并归一化至 1 kg 净合格 Ginger, processed 产出，包装质量除外
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_brine_preparation`
- 来源: `codex-cxs-260-2007`; `codex-gsfa-04-2-2-3-2025`; `eu-pef-2021-2279`

###### 盐水姜用山梨酸钾防腐剂 (`brine_potassium_sorbate`)

当 Potassium sorbate 跨越“盐水配制”前景边界时，将其作为一个原子产品投入记录；仅在锁定路线和场址记录证明该交换存在时纳入。

- 选定流: Potassium sorbate
- 流属性/单位: Mass / kg
- 数量规则: 仅在实际使用该确切防腐剂且其对产品和市场当前获准时记录实际投加量。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 按声明路线批次记录，并归一化至 1 kg 净合格 Ginger, processed 产出，包装质量除外
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_brine_preparation`
- 来源: `codex-cxs-260-2007`; `codex-gsfa-04-2-2-3-2025`; `eu-pef-2021-2279`

###### 盐水配制用电网电力 (`brine_grid_electricity`)

当 Grid electricity 跨越“盐水配制”前景边界时，将其作为一个原子产品投入记录；仅在锁定路线和场址记录证明该交换存在时纳入。

- 选定流: Grid electricity
- 流属性/单位: Energy / kWh
- 数量规则: 读取盐水间分表，或记录因果分配。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 按声明路线批次记录，并归一化至 1 kg 净合格 Ginger, processed 产出，包装质量除外
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_brine_preparation`
- 来源: `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`

###### 盐水配制用外购饱和蒸汽 (`brine_purchased_steam`)

当 Purchased saturated steam 跨越“盐水配制”前景边界时，将其作为一个原子产品投入记录；仅在锁定路线和场址记录证明该交换存在时纳入。

- 选定流: Purchased saturated steam
- 流属性/单位: Energy / MJ
- 数量规则: 计量输送至盐水配制罐的外购蒸汽能量。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 按声明路线批次记录，并归一化至 1 kg 净合格 Ginger, processed 产出，包装质量除外
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_brine_preparation`
- 来源: `jrc-fdm-bref-2019`; `eu-fdm-bat-2019-2031`

###### 盐水配制用外购热水 (`brine_purchased_hot_water`)

当 Purchased hot water 跨越“盐水配制”前景边界时，将其作为一个原子产品投入记录；仅在锁定路线和场址记录证明该交换存在时纳入。

- 选定流: Purchased hot water
- 流属性/单位: Energy / MJ
- 数量规则: 计量输送至盐水配制工序的外购热水能量。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 按声明路线批次记录，并归一化至 1 kg 净合格 Ginger, processed 产出，包装质量除外
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_brine_preparation`
- 来源: `jrc-fdm-bref-2019`; `eu-fdm-bat-2019-2031`

###### 盐水配制用天然气 (`brine_natural_gas`)

当 Natural gas 跨越“盐水配制”前景边界时，将其作为一个原子产品投入记录；仅在锁定路线和场址记录证明该交换存在时纳入。

- 选定流: Natural gas
- 流属性/单位: Mass / kg
- 数量规则: 计量进入盐水加热器的天然气。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 按声明路线批次记录，并归一化至 1 kg 净合格 Ginger, processed 产出，包装质量除外
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_brine_preparation`
- 来源: `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`

###### 盐水配制用柴油 (`brine_diesel`)

当 Diesel fuel 跨越“盐水配制”前景边界时，将其作为一个原子产品投入记录；仅在锁定路线和场址记录证明该交换存在时纳入。

- 选定流: Diesel fuel
- 流属性/单位: Mass / kg
- 数量规则: 计量进入盐水加热器或发电机的柴油。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 按声明路线批次记录，并归一化至 1 kg 净合格 Ginger, processed 产出，包装质量除外
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_brine_preparation`
- 来源: `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`

###### 盐水配制用液化石油气 (`brine_lpg`)

当 Liquefied petroleum gas 跨越“盐水配制”前景边界时，将其作为一个原子产品投入记录；仅在锁定路线和场址记录证明该交换存在时纳入。

- 选定流: Liquefied petroleum gas
- 流属性/单位: Mass / kg
- 数量规则: 计量进入盐水加热器的液化石油气。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 按声明路线批次记录，并归一化至 1 kg 净合格 Ginger, processed 产出，包装质量除外
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_brine_preparation`
- 来源: `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 配制完成的姜保藏用氯化钠盐水 (`brine_prepared_sodium_chloride_brine`)

当 Sodium chloride brine for ginger preservation 跨越“盐水配制”前景边界时，将其作为一个原子产品产出记录；仅在锁定路线和场址记录证明该交换存在时纳入。

- 选定流: Sodium chloride brine for ginger preservation
- 流属性/单位: Mass / kg
- 数量规则: 计量配制盐水质量，并保留锁定配方、浓度和 pH 记录。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 按声明路线批次记录，并归一化至 1 kg 净合格 Ginger, processed 产出，包装质量除外
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_brine_preparation`
- 来源: `codex-cxs-260-2007`; `codex-gsfa-04-2-2-3-2025`

##### 废物流

###### 不合格氯化钠盐水 (`brine_offspec_brine`)

当 Off-specification sodium chloride brine 跨越“盐水配制”前景边界时，将其作为一个原子废物产出记录；仅在锁定路线和场址记录证明该交换存在时纳入。

- 选定流: Off-specification sodium chloride brine
- 流属性/单位: Mass / kg
- 数量规则: 在回收、处理或处置前单独计量不合格盐水。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 按声明路线批次记录，并归一化至 1 kg 净合格 Ginger, processed 产出，包装质量除外
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_brine_preparation`
- 来源: `codex-cxs-260-2007`; `eu-fdm-bat-2019-2031`

##### 基本流

### 过程：盐水灌装、封口及条件性热处理 (`brine_filling_thermal`)

#### 输入

##### 产品流

###### 盐水灌装用刮皮整粒嫩姜 (`fill_scraped_whole_tender_ginger`)

当 Scraped whole tender ginger 跨越“盐水灌装、封口及条件性热处理”前景边界时，将其作为一个原子产品投入记录；仅在锁定路线和场址记录证明该交换存在时纳入。

- 选定流: Scraped whole tender ginger
- 流属性/单位: Mass / kg
- 数量规则: 承接锁定整粒形态的实测制备质量。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 按声明路线批次记录，并归一化至 1 kg 净合格 Ginger, processed 产出，包装质量除外
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_brine_filling_thermal`
- 来源: `codex-cxs-260-2007`; `eu-pef-2021-2279`

###### 盐水灌装用嫩姜片 (`fill_sliced_tender_ginger`)

当 Sliced tender ginger 跨越“盐水灌装、封口及条件性热处理”前景边界时，将其作为一个原子产品投入记录；仅在锁定路线和场址记录证明该交换存在时纳入。

- 选定流: Sliced tender ginger
- 流属性/单位: Mass / kg
- 数量规则: 承接锁定切片形态的实测制备质量。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 按声明路线批次记录，并归一化至 1 kg 净合格 Ginger, processed 产出，包装质量除外
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_brine_filling_thermal`
- 来源: `codex-cxs-260-2007`; `eu-pef-2021-2279`

###### 灌装用配制氯化钠盐水 (`fill_prepared_brine`)

当 Sodium chloride brine for ginger preservation 跨越“盐水灌装、封口及条件性热处理”前景边界时，将其作为一个原子产品投入记录；仅在锁定路线和场址记录证明该交换存在时纳入。

- 选定流: Sodium chloride brine for ginger preservation
- 流属性/单位: Mass / kg
- 数量规则: 计量进入灌装机的盐水，并核对洒漏量和产品中保留的灌装介质。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 按声明路线批次记录，并归一化至 1 kg 净合格 Ginger, processed 产出，包装质量除外
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_brine_filling_thermal`
- 来源: `codex-cxs-260-2007`; `eu-pef-2021-2279`

###### 盐水姜用玻璃罐 (`fill_glass_jar`)

当 Glass jar 跨越“盐水灌装、封口及条件性热处理”前景边界时，将其作为一个原子产品投入记录；仅在锁定路线和场址记录证明该交换存在时纳入。

- 选定流: Glass jar
- 流属性/单位: Mass / kg
- 数量规则: 记录实际玻璃罐皮重和耗用数量。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 按声明路线批次记录，并归一化至 1 kg 净合格 Ginger, processed 产出，包装质量除外
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_brine_filling_thermal`
- 来源: `codex-cxs-260-2007`; `eu-pef-2021-2279`

###### 盐水姜用镀锡钢罐盖 (`fill_steel_lid`)

当 Tinplate steel jar lid 跨越“盐水灌装、封口及条件性热处理”前景边界时，将其作为一个原子产品投入记录；仅在锁定路线和场址记录证明该交换存在时纳入。

- 选定流: Tinplate steel jar lid
- 流属性/单位: Mass / kg
- 数量规则: 记录实际罐盖质量和耗用数量。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 按声明路线批次记录，并归一化至 1 kg 净合格 Ginger, processed 产出，包装质量除外
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_brine_filling_thermal`
- 来源: `codex-cxs-260-2007`; `eu-pef-2021-2279`

###### 盐水姜用高密度聚乙烯桶 (`fill_hdpe_pail`)

当 High-density polyethylene pail 跨越“盐水灌装、封口及条件性热处理”前景边界时，将其作为一个原子产品投入记录；仅在锁定路线和场址记录证明该交换存在时纳入。

- 选定流: High-density polyethylene pail
- 流属性/单位: Mass / kg
- 数量规则: 记录实际桶质量和耗用数量。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 按声明路线批次记录，并归一化至 1 kg 净合格 Ginger, processed 产出，包装质量除外
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_brine_filling_thermal`
- 来源: `codex-cxs-260-2007`; `eu-pef-2021-2279`

###### 盐水姜用聚丙烯桶盖 (`fill_polypropylene_lid`)

当 Polypropylene pail lid 跨越“盐水灌装、封口及条件性热处理”前景边界时，将其作为一个原子产品投入记录；仅在锁定路线和场址记录证明该交换存在时纳入。

- 选定流: Polypropylene pail lid
- 流属性/单位: Mass / kg
- 数量规则: 记录实际桶盖质量和耗用数量。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 按声明路线批次记录，并归一化至 1 kg 净合格 Ginger, processed 产出，包装质量除外
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_brine_filling_thermal`
- 来源: `codex-cxs-260-2007`; `eu-pef-2021-2279`

###### 盐水灌装、封口与热处理用电网电力 (`fill_grid_electricity`)

当 Grid electricity 跨越“盐水灌装、封口及条件性热处理”前景边界时，将其作为一个原子产品投入记录；仅在锁定路线和场址记录证明该交换存在时纳入。

- 选定流: Grid electricity
- 流属性/单位: Energy / kWh
- 数量规则: 读取灌装、封口和热处理分表，或记录因果分配。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 按声明路线批次记录，并归一化至 1 kg 净合格 Ginger, processed 产出，包装质量除外
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_brine_filling_thermal`
- 来源: `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`

###### 盐水姜热处理用外购饱和蒸汽 (`fill_purchased_steam`)

当 Purchased saturated steam 跨越“盐水灌装、封口及条件性热处理”前景边界时，将其作为一个原子产品投入记录；仅在锁定路线和场址记录证明该交换存在时纳入。

- 选定流: Purchased saturated steam
- 流属性/单位: Energy / MJ
- 数量规则: 计量输送至热处理过程的外购蒸汽能量。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 按声明路线批次记录，并归一化至 1 kg 净合格 Ginger, processed 产出，包装质量除外
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_brine_filling_thermal`
- 来源: `jrc-fdm-bref-2019`; `eu-fdm-bat-2019-2031`

###### 盐水姜热处理用外购热水 (`fill_purchased_hot_water`)

当 Purchased hot water 跨越“盐水灌装、封口及条件性热处理”前景边界时，将其作为一个原子产品投入记录；仅在锁定路线和场址记录证明该交换存在时纳入。

- 选定流: Purchased hot water
- 流属性/单位: Energy / MJ
- 数量规则: 计量输送至热处理过程的外购热水能量。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 按声明路线批次记录，并归一化至 1 kg 净合格 Ginger, processed 产出，包装质量除外
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_brine_filling_thermal`
- 来源: `jrc-fdm-bref-2019`; `eu-fdm-bat-2019-2031`

###### 盐水姜热处理用天然气 (`fill_natural_gas`)

当 Natural gas 跨越“盐水灌装、封口及条件性热处理”前景边界时，将其作为一个原子产品投入记录；仅在锁定路线和场址记录证明该交换存在时纳入。

- 选定流: Natural gas
- 流属性/单位: Mass / kg
- 数量规则: 计量进入热处理加热器的天然气。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 按声明路线批次记录，并归一化至 1 kg 净合格 Ginger, processed 产出，包装质量除外
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_brine_filling_thermal`
- 来源: `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`

###### 盐水姜热处理用柴油 (`fill_diesel`)

当 Diesel fuel 跨越“盐水灌装、封口及条件性热处理”前景边界时，将其作为一个原子产品投入记录；仅在锁定路线和场址记录证明该交换存在时纳入。

- 选定流: Diesel fuel
- 流属性/单位: Mass / kg
- 数量规则: 计量进入热处理加热器或发电机的柴油。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 按声明路线批次记录，并归一化至 1 kg 净合格 Ginger, processed 产出，包装质量除外
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_brine_filling_thermal`
- 来源: `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`

###### 盐水姜热处理用液化石油气 (`fill_lpg`)

当 Liquefied petroleum gas 跨越“盐水灌装、封口及条件性热处理”前景边界时，将其作为一个原子产品投入记录；仅在锁定路线和场址记录证明该交换存在时纳入。

- 选定流: Liquefied petroleum gas
- 流属性/单位: Mass / kg
- 数量规则: 计量进入热处理加热器的液化石油气。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 按声明路线批次记录，并归一化至 1 kg 净合格 Ginger, processed 产出，包装质量除外
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_brine_filling_thermal`
- 来源: `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`

###### 密封盐水姜用工艺冷却水 (`fill_cooling_water`)

当 Process cooling water 跨越“盐水灌装、封口及条件性热处理”前景边界时，将其作为一个原子产品投入记录；仅在锁定路线和场址记录证明该交换存在时纳入。

- 选定流: Process cooling water
- 流属性/单位: Mass / kg
- 数量规则: 计量进入冷却边界的补充水。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 按声明路线批次记录，并归一化至 1 kg 净合格 Ginger, processed 产出，包装质量除外
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_brine_filling_thermal`
- 来源: `eu-fdm-bat-2019-2031`; `jrc-fdm-bref-2019`

###### 盐水姜冷却补充氨制冷剂（R717） (`fill_r717_makeup`)

当 Ammonia refrigerant (R717) 跨越“盐水灌装、封口及条件性热处理”前景边界时，将其作为一个原子产品投入记录；仅在锁定路线和场址记录证明该交换存在时纳入。

- 选定流: Ammonia refrigerant (R717)
- 流属性/单位: Mass / kg
- 数量规则: 依据维护日志记录冷却回路补充质量。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 按声明路线批次记录，并归一化至 1 kg 净合格 Ginger, processed 产出，包装质量除外
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_brine_filling_thermal`
- 来源: `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`

###### 盐水姜冷却补充二氧化碳制冷剂（R744） (`fill_r744_makeup`)

当 Carbon dioxide refrigerant (R744) 跨越“盐水灌装、封口及条件性热处理”前景边界时，将其作为一个原子产品投入记录；仅在锁定路线和场址记录证明该交换存在时纳入。

- 选定流: Carbon dioxide refrigerant (R744)
- 流属性/单位: Mass / kg
- 数量规则: 依据维护日志记录冷却回路补充质量。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 按声明路线批次记录，并归一化至 1 kg 净合格 Ginger, processed 产出，包装质量除外
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_brine_filling_thermal`
- 来源: `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`

###### 现有盐水姜冷却回路补充 R404A 制冷剂 (`fill_r404a_makeup`)

当 R404A refrigerant 跨越“盐水灌装、封口及条件性热处理”前景边界时，将其作为一个原子产品投入记录；仅在锁定路线和场址记录证明该交换存在时纳入。

- 选定流: R404A refrigerant
- 流属性/单位: Mass / kg
- 数量规则: 仅在安装该确切制冷剂时依据维护日志记录补充质量。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 按声明路线批次记录，并归一化至 1 kg 净合格 Ginger, processed 产出，包装质量除外
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_brine_filling_thermal`
- 来源: `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 密封玻璃罐装盐水姜 (`fill_glass_packed_brined_ginger`)

当 Ginger in brine in a sealed glass jar 跨越“盐水灌装、封口及条件性热处理”前景边界时，将其作为一个原子产品产出记录；仅在锁定路线和场址记录证明该交换存在时纳入。

- 选定流: Ginger in brine in a sealed glass jar
- 流属性/单位: Mass / kg
- 数量规则: 将产品净含量与玻璃罐及钢盖皮重分开计量；记录沥干姜质量。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 按声明路线批次记录，并归一化至 1 kg 净合格 Ginger, processed 产出，包装质量除外
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_brine_filling_thermal`
- 来源: `codex-cxs-260-2007`; `eu-pef-2021-2279`

###### 密封高密度聚乙烯桶装盐水姜 (`fill_hdpe_packed_brined_ginger`)

当 Ginger in brine in a sealed high-density polyethylene pail 跨越“盐水灌装、封口及条件性热处理”前景边界时，将其作为一个原子产品产出记录；仅在锁定路线和场址记录证明该交换存在时纳入。

- 选定流: Ginger in brine in a sealed high-density polyethylene pail
- 流属性/单位: Mass / kg
- 数量规则: 将产品净含量与桶及桶盖皮重分开计量；记录沥干姜质量。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 按声明路线批次记录，并归一化至 1 kg 净合格 Ginger, processed 产出，包装质量除外
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_brine_filling_thermal`
- 来源: `codex-cxs-260-2007`; `eu-pef-2021-2279`

##### 废物流

###### 废氯化钠盐水 (`fill_spent_brine`)

当 Spent sodium chloride brine 跨越“盐水灌装、封口及条件性热处理”前景边界时，将其作为一个原子废物产出记录；仅在锁定路线和场址记录证明该交换存在时纳入。

- 选定流: Spent sodium chloride brine
- 流属性/单位: Mass / kg
- 数量规则: 在再利用、处理或外运前计量废盐水。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 按声明路线批次记录，并归一化至 1 kg 净合格 Ginger, processed 产出，包装质量除外
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_brine_filling_thermal`
- 来源: `codex-cxs-260-2007`; `eu-fdm-bat-2019-2031`

###### 盐水灌装废水 (`fill_brine_filling_wastewater`)

当 Brine filling wastewater 跨越“盐水灌装、封口及条件性热处理”前景边界时，将其作为一个原子废物产出记录；仅在锁定路线和场址记录证明该交换存在时纳入。

- 选定流: Brine filling wastewater
- 流属性/单位: Mass / kg
- 数量规则: 将盐水灌装废水与冷却、清洗及设备清洁废水分开计量。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 按声明路线批次记录，并归一化至 1 kg 净合格 Ginger, processed 产出，包装质量除外
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_brine_filling_thermal`
- 来源: `eu-fdm-bat-2019-2031`; `jrc-fdm-bref-2019`

###### 盐水姜冷却废水 (`fill_cooling_wastewater`)

当 Brined-ginger cooling wastewater 跨越“盐水灌装、封口及条件性热处理”前景边界时，将其作为一个原子废物产出记录；仅在锁定路线和场址记录证明该交换存在时纳入。

- 选定流: Brined-ginger cooling wastewater
- 流属性/单位: Mass / kg
- 数量规则: 将盐水姜冷却废水与灌装、清洗及设备清洁废水分开计量。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 按声明路线批次记录，并归一化至 1 kg 净合格 Ginger, processed 产出，包装质量除外
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_brine_filling_thermal`
- 来源: `eu-fdm-bat-2019-2031`; `jrc-fdm-bref-2019`

###### 不合格盐水姜 (`fill_offspec_brined_ginger`)

当 Off-specification ginger in brine 跨越“盐水灌装、封口及条件性热处理”前景边界时，将其作为一个原子废物产出记录；仅在锁定路线和场址记录证明该交换存在时纳入。

- 选定流: Off-specification ginger in brine
- 流属性/单位: Mass / kg
- 数量规则: 按去向称量不合格盐水姜及其中保留的盐水。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 按声明路线批次记录，并归一化至 1 kg 净合格 Ginger, processed 产出，包装质量除外
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_brine_filling_thermal`
- 来源: `codex-cxs-260-2007`; `eu-fdm-bat-2019-2031`

###### 破损玻璃罐废物 (`fill_broken_glass_waste`)

当 Broken glass jar waste 跨越“盐水灌装、封口及条件性热处理”前景边界时，将其作为一个原子废物产出记录；仅在锁定路线和场址记录证明该交换存在时纳入。

- 选定流: Broken glass jar waste
- 流属性/单位: Mass / kg
- 数量规则: 单独称量破损玻璃，并从该包装废物行中排除所含姜或盐水。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 按声明路线批次记录，并归一化至 1 kg 净合格 Ginger, processed 产出，包装质量除外
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_brine_filling_thermal`
- 来源: `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`

###### 镀锡钢罐盖废物 (`fill_steel_lid_waste`)

当 Tinplate steel lid waste 跨越“盐水灌装、封口及条件性热处理”前景边界时，将其作为一个原子废物产出记录；仅在锁定路线和场址记录证明该交换存在时纳入。

- 选定流: Tinplate steel lid waste
- 流属性/单位: Mass / kg
- 数量规则: 单独称量报废钢盖。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 按声明路线批次记录，并归一化至 1 kg 净合格 Ginger, processed 产出，包装质量除外
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_brine_filling_thermal`
- 来源: `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`

###### 高密度聚乙烯桶废物 (`fill_hdpe_pail_waste`)

当 High-density polyethylene pail waste 跨越“盐水灌装、封口及条件性热处理”前景边界时，将其作为一个原子废物产出记录；仅在锁定路线和场址记录证明该交换存在时纳入。

- 选定流: High-density polyethylene pail waste
- 流属性/单位: Mass / kg
- 数量规则: 单独称量报废高密度聚乙烯桶。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 按声明路线批次记录，并归一化至 1 kg 净合格 Ginger, processed 产出，包装质量除外
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_brine_filling_thermal`
- 来源: `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`

###### 聚丙烯桶盖废物 (`fill_pp_lid_waste`)

当 Polypropylene pail-lid waste 跨越“盐水灌装、封口及条件性热处理”前景边界时，将其作为一个原子废物产出记录；仅在锁定路线和场址记录证明该交换存在时纳入。

- 选定流: Polypropylene pail-lid waste
- 流属性/单位: Mass / kg
- 数量规则: 单独称量报废聚丙烯桶盖。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 按声明路线批次记录，并归一化至 1 kg 净合格 Ginger, processed 产出，包装质量除外
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_brine_filling_thermal`
- 来源: `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`

##### 基本流

###### 盐水姜热处理产生的化石二氧化碳 (`fill_fossil_co2_air`)

当 Carbon dioxide, fossil, to air 跨越“盐水灌装、封口及条件性热处理”前景边界时，将其作为一个原子基本产出记录；仅在锁定路线和场址记录证明该交换存在时纳入。

- 选定流: Carbon dioxide, fossil, to air
- 流属性/单位: Mass / kg
- 数量规则: 依据实测燃料用量和有记录的场址特定或适用排放因子分别计算。
- 数值来源模式: 计算值 (`calculated_value`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 按声明路线批次记录，并归一化至 1 kg 净合格 Ginger, processed 产出，包装质量除外
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 依据采集记录计算 (`calculated_from_collection`)
- 采集协议: `cp_brine_filling_thermal`
- 来源: `eu-fdm-bat-2019-2031`

###### 盐水姜热处理产生的一氧化氮 (`fill_no_air`)

当 Nitrogen monoxide to air 跨越“盐水灌装、封口及条件性热处理”前景边界时，将其作为一个原子基本产出记录；仅在锁定路线和场址记录证明该交换存在时纳入。

- 选定流: Nitrogen monoxide to air
- 流属性/单位: Mass / kg
- 数量规则: 依据实测燃料用量和有记录的场址特定或适用排放因子分别计算。
- 数值来源模式: 计算值 (`calculated_value`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 按声明路线批次记录，并归一化至 1 kg 净合格 Ginger, processed 产出，包装质量除外
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 依据采集记录计算 (`calculated_from_collection`)
- 采集协议: `cp_brine_filling_thermal`
- 来源: `eu-fdm-bat-2019-2031`

###### 盐水姜热处理产生的二氧化氮 (`fill_no2_air`)

当 Nitrogen dioxide to air 跨越“盐水灌装、封口及条件性热处理”前景边界时，将其作为一个原子基本产出记录；仅在锁定路线和场址记录证明该交换存在时纳入。

- 选定流: Nitrogen dioxide to air
- 流属性/单位: Mass / kg
- 数量规则: 依据实测燃料用量和有记录的场址特定或适用排放因子分别计算。
- 数值来源模式: 计算值 (`calculated_value`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 按声明路线批次记录，并归一化至 1 kg 净合格 Ginger, processed 产出，包装质量除外
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 依据采集记录计算 (`calculated_from_collection`)
- 采集协议: `cp_brine_filling_thermal`
- 来源: `eu-fdm-bat-2019-2031`

###### 盐水姜热处理产生的二氧化硫 (`fill_so2_air`)

当 Sulfur dioxide to air 跨越“盐水灌装、封口及条件性热处理”前景边界时，将其作为一个原子基本产出记录；仅在锁定路线和场址记录证明该交换存在时纳入。

- 选定流: Sulfur dioxide to air
- 流属性/单位: Mass / kg
- 数量规则: 依据实测燃料用量和有记录的场址特定或适用排放因子分别计算。
- 数值来源模式: 计算值 (`calculated_value`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 按声明路线批次记录，并归一化至 1 kg 净合格 Ginger, processed 产出，包装质量除外
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 依据采集记录计算 (`calculated_from_collection`)
- 采集协议: `cp_brine_filling_thermal`
- 来源: `eu-fdm-bat-2019-2031`

###### 盐水姜热处理产生的 PM2.5 (`fill_pm25_air`)

当 Particulate matter, diameter below 2.5 µm, to air 跨越“盐水灌装、封口及条件性热处理”前景边界时，将其作为一个原子基本产出记录；仅在锁定路线和场址记录证明该交换存在时纳入。

- 选定流: Particulate matter, diameter below 2.5 µm, to air
- 流属性/单位: Mass / kg
- 数量规则: 依据实测燃料用量和有记录的场址特定或适用排放因子分别计算。
- 数值来源模式: 计算值 (`calculated_value`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 按声明路线批次记录，并归一化至 1 kg 净合格 Ginger, processed 产出，包装质量除外
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 依据采集记录计算 (`calculated_from_collection`)
- 采集协议: `cp_brine_filling_thermal`
- 来源: `eu-fdm-bat-2019-2031`

###### 氨制冷剂（R717）泄漏至空气 (`fill_r717_air`)

当 Ammonia (R717) to air 跨越“盐水灌装、封口及条件性热处理”前景边界时，将其作为一个原子基本产出记录；仅在锁定路线和场址记录证明该交换存在时纳入。

- 选定流: Ammonia (R717) to air
- 流属性/单位: Mass / kg
- 数量规则: 依据回路库存和回收记录计算该制冷剂单项损失。
- 数值来源模式: 计算值 (`calculated_value`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 按声明路线批次记录，并归一化至 1 kg 净合格 Ginger, processed 产出，包装质量除外
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 依据采集记录计算 (`calculated_from_collection`)
- 采集协议: `cp_brine_filling_thermal`
- 来源: `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`

###### 二氧化碳制冷剂（R744）泄漏至空气 (`fill_r744_air`)

当 Carbon dioxide refrigerant (R744) to air 跨越“盐水灌装、封口及条件性热处理”前景边界时，将其作为一个原子基本产出记录；仅在锁定路线和场址记录证明该交换存在时纳入。

- 选定流: Carbon dioxide refrigerant (R744) to air
- 流属性/单位: Mass / kg
- 数量规则: 依据回路库存和回收记录计算该制冷剂单项损失。
- 数值来源模式: 计算值 (`calculated_value`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 按声明路线批次记录，并归一化至 1 kg 净合格 Ginger, processed 产出，包装质量除外
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 依据采集记录计算 (`calculated_from_collection`)
- 采集协议: `cp_brine_filling_thermal`
- 来源: `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`

###### R404A 制冷剂泄漏至空气 (`fill_r404a_air`)

当 R404A refrigerant to air 跨越“盐水灌装、封口及条件性热处理”前景边界时，将其作为一个原子基本产出记录；仅在锁定路线和场址记录证明该交换存在时纳入。

- 选定流: R404A refrigerant to air
- 流属性/单位: Mass / kg
- 数量规则: 依据回路库存和回收记录计算该制冷剂单项损失。
- 数值来源模式: 计算值 (`calculated_value`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 按声明路线批次记录，并归一化至 1 kg 净合格 Ginger, processed 产出，包装质量除外
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 依据采集记录计算 (`calculated_from_collection`)
- 采集协议: `cp_brine_filling_thermal`
- 来源: `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`

### 过程：包装、规格检查与放行 (`packaging_release`)

#### 输入

##### 产品流

###### 最终包装用清洁整粒干姜 (`pack_dried_whole_ginger`)

当 Cleaned graded dried whole ginger 跨越“包装、规格检查与放行”前景边界时，将其作为一个原子产品投入记录；仅在锁定路线和场址记录证明该交换存在时纳入。

- 选定流: Cleaned graded dried whole ginger
- 流属性/单位: Mass / kg
- 数量规则: 承接锁定单一产品形态的实测合格产品质量。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 按声明路线批次记录，并归一化至 1 kg 净合格 Ginger, processed 产出，包装质量除外
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_packaging_release`
- 来源: `codex-cxs-343-2021`; `codex-cxs-260-2007`; `eu-pef-2021-2279`

###### 最终包装用清洁干姜片或块 (`pack_dried_ginger_pieces`)

当 Cleaned graded dried ginger pieces 跨越“包装、规格检查与放行”前景边界时，将其作为一个原子产品投入记录；仅在锁定路线和场址记录证明该交换存在时纳入。

- 选定流: Cleaned graded dried ginger pieces
- 流属性/单位: Mass / kg
- 数量规则: 承接锁定单一产品形态的实测合格产品质量。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 按声明路线批次记录，并归一化至 1 kg 净合格 Ginger, processed 产出，包装质量除外
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_packaging_release`
- 来源: `codex-cxs-343-2021`; `codex-cxs-260-2007`; `eu-pef-2021-2279`

###### 最终包装用破碎干姜 (`pack_crushed_dried_ginger`)

当 Crushed dried ginger 跨越“包装、规格检查与放行”前景边界时，将其作为一个原子产品投入记录；仅在锁定路线和场址记录证明该交换存在时纳入。

- 选定流: Crushed dried ginger
- 流属性/单位: Mass / kg
- 数量规则: 承接锁定单一产品形态的实测合格产品质量。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 按声明路线批次记录，并归一化至 1 kg 净合格 Ginger, processed 产出，包装质量除外
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_packaging_release`
- 来源: `codex-cxs-343-2021`; `codex-cxs-260-2007`; `eu-pef-2021-2279`

###### 最终包装用干姜粉 (`pack_ground_ginger_powder`)

当 Ground dried ginger powder 跨越“包装、规格检查与放行”前景边界时，将其作为一个原子产品投入记录；仅在锁定路线和场址记录证明该交换存在时纳入。

- 选定流: Ground dried ginger powder
- 流属性/单位: Mass / kg
- 数量规则: 承接锁定单一产品形态的实测合格产品质量。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 按声明路线批次记录，并归一化至 1 kg 净合格 Ginger, processed 产出，包装质量除外
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_packaging_release`
- 来源: `codex-cxs-343-2021`; `codex-cxs-260-2007`; `eu-pef-2021-2279`

###### 最终放行用密封玻璃罐装盐水姜 (`pack_glass_brined_ginger`)

当 Ginger in brine in a sealed glass jar 跨越“包装、规格检查与放行”前景边界时，将其作为一个原子产品投入记录；仅在锁定路线和场址记录证明该交换存在时纳入。

- 选定流: Ginger in brine in a sealed glass jar
- 流属性/单位: Mass / kg
- 数量规则: 承接锁定单一产品形态的实测合格产品质量。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 按声明路线批次记录，并归一化至 1 kg 净合格 Ginger, processed 产出，包装质量除外
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_packaging_release`
- 来源: `codex-cxs-343-2021`; `codex-cxs-260-2007`; `eu-pef-2021-2279`

###### 最终放行用密封高密度聚乙烯桶装盐水姜 (`pack_hdpe_brined_ginger`)

当 Ginger in brine in a sealed high-density polyethylene pail 跨越“包装、规格检查与放行”前景边界时，将其作为一个原子产品投入记录；仅在锁定路线和场址记录证明该交换存在时纳入。

- 选定流: Ginger in brine in a sealed high-density polyethylene pail
- 流属性/单位: Mass / kg
- 数量规则: 承接锁定单一产品形态的实测合格产品质量。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 按声明路线批次记录，并归一化至 1 kg 净合格 Ginger, processed 产出，包装质量除外
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_packaging_release`
- 来源: `codex-cxs-343-2021`; `codex-cxs-260-2007`; `eu-pef-2021-2279`

###### 牛皮纸复合多层袋 (`pack_kraft_laminated_bag`)

当 Kraft-paper laminated multiwall bag 跨越“包装、规格检查与放行”前景边界时，将其作为一个原子产品投入记录；仅在锁定路线和场址记录证明该交换存在时纳入。

- 选定流: Kraft-paper laminated multiwall bag
- 流属性/单位: Mass / kg
- 数量规则: 记录合格放行产品实际耗用的该包装部件质量。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 按声明路线批次记录，并归一化至 1 kg 净合格 Ginger, processed 产出，包装质量除外
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_packaging_release`
- 来源: `fao-ginger-postharvest-operations`; `codex-cxs-343-2021`; `codex-cxs-260-2007`; `eu-pef-2021-2279`

###### 低密度聚乙烯内衬袋 (`pack_ldpe_liner`)

当 Low-density polyethylene inner liner 跨越“包装、规格检查与放行”前景边界时，将其作为一个原子产品投入记录；仅在锁定路线和场址记录证明该交换存在时纳入。

- 选定流: Low-density polyethylene inner liner
- 流属性/单位: Mass / kg
- 数量规则: 记录合格放行产品实际耗用的该包装部件质量。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 按声明路线批次记录，并归一化至 1 kg 净合格 Ginger, processed 产出，包装质量除外
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_packaging_release`
- 来源: `fao-ginger-postharvest-operations`; `codex-cxs-343-2021`; `codex-cxs-260-2007`; `eu-pef-2021-2279`

###### 瓦楞纸箱 (`pack_corrugated_box`)

当 Corrugated fibreboard box 跨越“包装、规格检查与放行”前景边界时，将其作为一个原子产品投入记录；仅在锁定路线和场址记录证明该交换存在时纳入。

- 选定流: Corrugated fibreboard box
- 流属性/单位: Mass / kg
- 数量规则: 记录合格放行产品实际耗用的该包装部件质量。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 按声明路线批次记录，并归一化至 1 kg 净合格 Ginger, processed 产出，包装质量除外
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_packaging_release`
- 来源: `fao-ginger-postharvest-operations`; `codex-cxs-343-2021`; `codex-cxs-260-2007`; `eu-pef-2021-2279`

###### 纸质产品标签 (`pack_paper_label`)

当 Paper product label 跨越“包装、规格检查与放行”前景边界时，将其作为一个原子产品投入记录；仅在锁定路线和场址记录证明该交换存在时纳入。

- 选定流: Paper product label
- 流属性/单位: Mass / kg
- 数量规则: 记录合格放行产品实际耗用的该包装部件质量。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 按声明路线批次记录，并归一化至 1 kg 净合格 Ginger, processed 产出，包装质量除外
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_packaging_release`
- 来源: `fao-ginger-postharvest-operations`; `codex-cxs-343-2021`; `codex-cxs-260-2007`; `eu-pef-2021-2279`

###### 木托盘 (`pack_wood_pallet`)

当 Wooden pallet 跨越“包装、规格检查与放行”前景边界时，将其作为一个原子产品投入记录；仅在锁定路线和场址记录证明该交换存在时纳入。

- 选定流: Wooden pallet
- 流属性/单位: Mass / kg
- 数量规则: 记录合格放行产品实际耗用的该包装部件质量。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 按声明路线批次记录，并归一化至 1 kg 净合格 Ginger, processed 产出，包装质量除外
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_packaging_release`
- 来源: `fao-ginger-postharvest-operations`; `codex-cxs-343-2021`; `codex-cxs-260-2007`; `eu-pef-2021-2279`

###### 线性低密度聚乙烯缠绕膜 (`pack_lldpe_stretch_film`)

当 Linear low-density polyethylene stretch film 跨越“包装、规格检查与放行”前景边界时，将其作为一个原子产品投入记录；仅在锁定路线和场址记录证明该交换存在时纳入。

- 选定流: Linear low-density polyethylene stretch film
- 流属性/单位: Mass / kg
- 数量规则: 记录合格放行产品实际耗用的该包装部件质量。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 按声明路线批次记录，并归一化至 1 kg 净合格 Ginger, processed 产出，包装质量除外
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_packaging_release`
- 来源: `fao-ginger-postharvest-operations`; `codex-cxs-343-2021`; `codex-cxs-260-2007`; `eu-pef-2021-2279`

###### 包装与放行用电网电力 (`pack_grid_electricity`)

当 Grid electricity 跨越“包装、规格检查与放行”前景边界时，将其作为一个原子产品投入记录；仅在锁定路线和场址记录证明该交换存在时纳入。

- 选定流: Grid electricity
- 流属性/单位: Energy / kWh
- 数量规则: 读取包装线分表，或记录因果分配。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 按声明路线批次记录，并归一化至 1 kg 净合格 Ginger, processed 产出，包装质量除外
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_packaging_release`
- 来源: `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 参考产出：加工姜 (`reference_processed_ginger`)

这是唯一的 CPC 23927 参考产品交换。它表示锁定的一个干制或盐水姜产品形态并排除包装质量；已核验的天工产品 UUID 仅用于本行。

- 选定流: Ginger, processed `5dfbf3ec-4630-4bae-bbc6-fc931194cf64`
- 流属性/单位: Mass / kg
- 数量规则: 由锁定路线下核对后的净合格放行产品质量计算 1 kg；排除包装质量，并在适用时披露盐水质量口径。
- 数值来源模式: 计算值 (`calculated_value`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 按声明路线批次记录，并归一化至 1 kg 净合格 Ginger, processed 产出，包装质量除外
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 依据采集记录计算 (`calculated_from_collection`)
- 采集协议: `cp_packaging_release`
- 来源: `un-cpc-3-0-2025`; `codex-cxs-343-2021`; `codex-cxs-260-2007`; `eu-pef-2021-2279`

##### 废物流

###### 不合格包装加工姜 (`pack_offspec_processed_ginger`)

当 Off-specification packaged processed ginger 跨越“包装、规格检查与放行”前景边界时，将其作为一个原子废物产出记录；仅在锁定路线和场址记录证明该交换存在时纳入。

- 选定流: Off-specification packaged processed ginger
- 流属性/单位: Mass / kg
- 数量规则: 将产品内容物与每一种废弃包装部件分开称量。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 按声明路线批次记录，并归一化至 1 kg 净合格 Ginger, processed 产出，包装质量除外
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_packaging_release`
- 来源: `codex-cxs-343-2021`; `codex-cxs-260-2007`; `eu-fdm-bat-2019-2031`

###### 牛皮纸复合袋废物 (`pack_kraft_bag_waste`)

当 Kraft-paper laminated bag waste 跨越“包装、规格检查与放行”前景边界时，将其作为一个原子废物产出记录；仅在锁定路线和场址记录证明该交换存在时纳入。

- 选定流: Kraft-paper laminated bag waste
- 流属性/单位: Mass / kg
- 数量规则: 在包装线单独称量该包装废物。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 按声明路线批次记录，并归一化至 1 kg 净合格 Ginger, processed 产出，包装质量除外
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_packaging_release`
- 来源: `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`

###### 低密度聚乙烯内衬袋废物 (`pack_ldpe_liner_waste`)

当 Low-density polyethylene liner waste 跨越“包装、规格检查与放行”前景边界时，将其作为一个原子废物产出记录；仅在锁定路线和场址记录证明该交换存在时纳入。

- 选定流: Low-density polyethylene liner waste
- 流属性/单位: Mass / kg
- 数量规则: 在包装线单独称量该包装废物。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 按声明路线批次记录，并归一化至 1 kg 净合格 Ginger, processed 产出，包装质量除外
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_packaging_release`
- 来源: `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`

###### 瓦楞纸箱废物 (`pack_corrugated_box_waste`)

当 Corrugated fibreboard box waste 跨越“包装、规格检查与放行”前景边界时，将其作为一个原子废物产出记录；仅在锁定路线和场址记录证明该交换存在时纳入。

- 选定流: Corrugated fibreboard box waste
- 流属性/单位: Mass / kg
- 数量规则: 在包装线单独称量该包装废物。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 按声明路线批次记录，并归一化至 1 kg 净合格 Ginger, processed 产出，包装质量除外
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_packaging_release`
- 来源: `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`

###### 纸标签废物 (`pack_paper_label_waste`)

当 Paper label waste 跨越“包装、规格检查与放行”前景边界时，将其作为一个原子废物产出记录；仅在锁定路线和场址记录证明该交换存在时纳入。

- 选定流: Paper label waste
- 流属性/单位: Mass / kg
- 数量规则: 在包装线单独称量该包装废物。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 按声明路线批次记录，并归一化至 1 kg 净合格 Ginger, processed 产出，包装质量除外
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_packaging_release`
- 来源: `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`

###### 木托盘废物 (`pack_wood_pallet_waste`)

当 Wood pallet waste 跨越“包装、规格检查与放行”前景边界时，将其作为一个原子废物产出记录；仅在锁定路线和场址记录证明该交换存在时纳入。

- 选定流: Wood pallet waste
- 流属性/单位: Mass / kg
- 数量规则: 在包装线单独称量该包装废物。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 按声明路线批次记录，并归一化至 1 kg 净合格 Ginger, processed 产出，包装质量除外
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_packaging_release`
- 来源: `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`

###### 线性低密度聚乙烯缠绕膜废物 (`pack_lldpe_film_waste`)

当 Linear low-density polyethylene stretch-film waste 跨越“包装、规格检查与放行”前景边界时，将其作为一个原子废物产出记录；仅在锁定路线和场址记录证明该交换存在时纳入。

- 选定流: Linear low-density polyethylene stretch-film waste
- 流属性/单位: Mass / kg
- 数量规则: 在包装线单独称量该包装废物。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 按声明路线批次记录，并归一化至 1 kg 净合格 Ginger, processed 产出，包装质量除外
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_packaging_release`
- 来源: `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`

##### 基本流

### 过程：清洗与卫生消毒 (`cleaning_sanitation`)

#### 输入

##### 产品流

###### 设备清洁用工艺水 (`clean_process_water`)

当 Process water for equipment cleaning 跨越“清洗与卫生消毒”前景边界时，将其作为一个原子产品投入记录；仅在锁定路线和场址记录证明该交换存在时纳入。

- 选定流: Process water for equipment cleaning
- 流属性/单位: Mass / kg
- 数量规则: 按清洁事件和路线归属计量清洁补充水。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 按声明路线批次记录，并归一化至 1 kg 净合格 Ginger, processed 产出，包装质量除外
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_cleaning_sanitation`
- 来源: `codex-cxc-75-2015`; `eu-fdm-bat-2019-2031`

###### 清洗与卫生消毒用电网电力 (`clean_grid_electricity`)

当 Grid electricity 跨越“清洗与卫生消毒”前景边界时，将其作为一个原子产品投入记录；仅在锁定路线和场址记录证明该交换存在时纳入。

- 选定流: Grid electricity
- 流属性/单位: Energy / kWh
- 数量规则: 读取卫生消毒分表，或按清洁时间记录因果分配。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 按声明路线批次记录，并归一化至 1 kg 净合格 Ginger, processed 产出，包装质量除外
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_cleaning_sanitation`
- 来源: `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`

###### 清洗与卫生消毒用外购饱和蒸汽 (`clean_purchased_steam`)

当 Purchased saturated steam 跨越“清洗与卫生消毒”前景边界时，将其作为一个原子产品投入记录；仅在锁定路线和场址记录证明该交换存在时纳入。

- 选定流: Purchased saturated steam
- 流属性/单位: Energy / MJ
- 数量规则: 计量输送至清洁过程的外购蒸汽能量。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 按声明路线批次记录，并归一化至 1 kg 净合格 Ginger, processed 产出，包装质量除外
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_cleaning_sanitation`
- 来源: `jrc-fdm-bref-2019`; `eu-fdm-bat-2019-2031`

###### 清洗与卫生消毒用外购热水 (`clean_purchased_hot_water`)

当 Purchased hot water 跨越“清洗与卫生消毒”前景边界时，将其作为一个原子产品投入记录；仅在锁定路线和场址记录证明该交换存在时纳入。

- 选定流: Purchased hot water
- 流属性/单位: Energy / MJ
- 数量规则: 计量输送至清洁过程的外购热水能量。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 按声明路线批次记录，并归一化至 1 kg 净合格 Ginger, processed 产出，包装质量除外
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_cleaning_sanitation`
- 来源: `jrc-fdm-bref-2019`; `eu-fdm-bat-2019-2031`

###### 清洁水加热用天然气 (`clean_natural_gas`)

当 Natural gas 跨越“清洗与卫生消毒”前景边界时，将其作为一个原子产品投入记录；仅在锁定路线和场址记录证明该交换存在时纳入。

- 选定流: Natural gas
- 流属性/单位: Mass / kg
- 数量规则: 计量进入清洁水加热器的天然气。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 按声明路线批次记录，并归一化至 1 kg 净合格 Ginger, processed 产出，包装质量除外
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_cleaning_sanitation`
- 来源: `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`

###### 清洁水加热用柴油 (`clean_diesel`)

当 Diesel fuel 跨越“清洗与卫生消毒”前景边界时，将其作为一个原子产品投入记录；仅在锁定路线和场址记录证明该交换存在时纳入。

- 选定流: Diesel fuel
- 流属性/单位: Mass / kg
- 数量规则: 计量进入清洁水加热器或发电机的柴油。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 按声明路线批次记录，并归一化至 1 kg 净合格 Ginger, processed 产出，包装质量除外
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_cleaning_sanitation`
- 来源: `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`

###### 清洁水加热用液化石油气 (`clean_lpg`)

当 Liquefied petroleum gas 跨越“清洗与卫生消毒”前景边界时，将其作为一个原子产品投入记录；仅在锁定路线和场址记录证明该交换存在时纳入。

- 选定流: Liquefied petroleum gas
- 流属性/单位: Mass / kg
- 数量规则: 计量进入清洁水加热器的液化石油气。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 按声明路线批次记录，并归一化至 1 kg 净合格 Ginger, processed 产出，包装质量除外
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_cleaning_sanitation`
- 来源: `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`

###### 氢氧化钠清洁剂 (`clean_sodium_hydroxide`)

当 Sodium hydroxide 跨越“清洗与卫生消毒”前景边界时，将其作为一个原子产品投入记录；仅在锁定路线和场址记录证明该交换存在时纳入。

- 选定流: Sodium hydroxide
- 流属性/单位: Mass / kg
- 数量规则: 依据清洁事件记录化学品实际质量；标明浓度，并从该化学品行排除载体水。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 按声明路线批次记录，并归一化至 1 kg 净合格 Ginger, processed 产出，包装质量除外
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_cleaning_sanitation`
- 来源: `codex-cxc-75-2015`; `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`

###### 硝酸清洁剂 (`clean_nitric_acid`)

当 Nitric acid 跨越“清洗与卫生消毒”前景边界时，将其作为一个原子产品投入记录；仅在锁定路线和场址记录证明该交换存在时纳入。

- 选定流: Nitric acid
- 流属性/单位: Mass / kg
- 数量规则: 依据清洁事件记录化学品实际质量；标明浓度，并从该化学品行排除载体水。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 按声明路线批次记录，并归一化至 1 kg 净合格 Ginger, processed 产出，包装质量除外
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_cleaning_sanitation`
- 来源: `codex-cxc-75-2015`; `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`

###### 磷酸清洁剂 (`clean_phosphoric_acid`)

当 Phosphoric acid 跨越“清洗与卫生消毒”前景边界时，将其作为一个原子产品投入记录；仅在锁定路线和场址记录证明该交换存在时纳入。

- 选定流: Phosphoric acid
- 流属性/单位: Mass / kg
- 数量规则: 依据清洁事件记录化学品实际质量；标明浓度，并从该化学品行排除载体水。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 按声明路线批次记录，并归一化至 1 kg 净合格 Ginger, processed 产出，包装质量除外
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_cleaning_sanitation`
- 来源: `codex-cxc-75-2015`; `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`

###### 过氧乙酸消毒剂 (`clean_peracetic_acid`)

当 Peracetic acid 跨越“清洗与卫生消毒”前景边界时，将其作为一个原子产品投入记录；仅在锁定路线和场址记录证明该交换存在时纳入。

- 选定流: Peracetic acid
- 流属性/单位: Mass / kg
- 数量规则: 依据清洁事件记录化学品实际质量；标明浓度，并从该化学品行排除载体水。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 按声明路线批次记录，并归一化至 1 kg 净合格 Ginger, processed 产出，包装质量除外
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_cleaning_sanitation`
- 来源: `codex-cxc-75-2015`; `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`

###### 次氯酸钠消毒剂 (`clean_sodium_hypochlorite`)

当 Sodium hypochlorite 跨越“清洗与卫生消毒”前景边界时，将其作为一个原子产品投入记录；仅在锁定路线和场址记录证明该交换存在时纳入。

- 选定流: Sodium hypochlorite
- 流属性/单位: Mass / kg
- 数量规则: 依据清洁事件记录化学品实际质量；标明浓度，并从该化学品行排除载体水。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 按声明路线批次记录，并归一化至 1 kg 净合格 Ginger, processed 产出，包装质量除外
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_cleaning_sanitation`
- 来源: `codex-cxc-75-2015`; `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`

###### 受控干区清洁用乙醇卫生剂 (`clean_ethanol`)

当 Ethanol 跨越“清洗与卫生消毒”前景边界时，将其作为一个原子产品投入记录；仅在锁定路线和场址记录证明该交换存在时纳入。

- 选定流: Ethanol
- 流属性/单位: Mass / kg
- 数量规则: 依据清洁事件记录化学品实际质量；标明浓度，并从该化学品行排除载体水。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 按声明路线批次记录，并归一化至 1 kg 净合格 Ginger, processed 产出，包装质量除外
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_cleaning_sanitation`
- 来源: `codex-cxc-75-2015`; `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

###### 废氢氧化钠清洁液 (`clean_spent_sodium_hydroxide`)

当 Spent sodium hydroxide cleaning solution 跨越“清洗与卫生消毒”前景边界时，将其作为一个原子废物产出记录；仅在锁定路线和场址记录证明该交换存在时纳入。

- 选定流: Spent sodium hydroxide cleaning solution
- 流属性/单位: Mass / kg
- 数量规则: 在混合、回收或处理前单独计量该废液。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 按声明路线批次记录，并归一化至 1 kg 净合格 Ginger, processed 产出，包装质量除外
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_cleaning_sanitation`
- 来源: `codex-cxc-75-2015`; `eu-fdm-bat-2019-2031`

###### 废硝酸清洁液 (`clean_spent_nitric_acid`)

当 Spent nitric acid cleaning solution 跨越“清洗与卫生消毒”前景边界时，将其作为一个原子废物产出记录；仅在锁定路线和场址记录证明该交换存在时纳入。

- 选定流: Spent nitric acid cleaning solution
- 流属性/单位: Mass / kg
- 数量规则: 在混合、回收或处理前单独计量该废液。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 按声明路线批次记录，并归一化至 1 kg 净合格 Ginger, processed 产出，包装质量除外
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_cleaning_sanitation`
- 来源: `codex-cxc-75-2015`; `eu-fdm-bat-2019-2031`

###### 废磷酸清洁液 (`clean_spent_phosphoric_acid`)

当 Spent phosphoric acid cleaning solution 跨越“清洗与卫生消毒”前景边界时，将其作为一个原子废物产出记录；仅在锁定路线和场址记录证明该交换存在时纳入。

- 选定流: Spent phosphoric acid cleaning solution
- 流属性/单位: Mass / kg
- 数量规则: 在混合、回收或处理前单独计量该废液。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 按声明路线批次记录，并归一化至 1 kg 净合格 Ginger, processed 产出，包装质量除外
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_cleaning_sanitation`
- 来源: `codex-cxc-75-2015`; `eu-fdm-bat-2019-2031`

###### 废过氧乙酸消毒液 (`clean_spent_peracetic_acid`)

当 Spent peracetic acid disinfecting solution 跨越“清洗与卫生消毒”前景边界时，将其作为一个原子废物产出记录；仅在锁定路线和场址记录证明该交换存在时纳入。

- 选定流: Spent peracetic acid disinfecting solution
- 流属性/单位: Mass / kg
- 数量规则: 在混合、回收或处理前单独计量该废液。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 按声明路线批次记录，并归一化至 1 kg 净合格 Ginger, processed 产出，包装质量除外
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_cleaning_sanitation`
- 来源: `codex-cxc-75-2015`; `eu-fdm-bat-2019-2031`

###### 废次氯酸钠消毒液 (`clean_spent_hypochlorite`)

当 Spent sodium hypochlorite disinfecting solution 跨越“清洗与卫生消毒”前景边界时，将其作为一个原子废物产出记录；仅在锁定路线和场址记录证明该交换存在时纳入。

- 选定流: Spent sodium hypochlorite disinfecting solution
- 流属性/单位: Mass / kg
- 数量规则: 在混合、回收或处理前单独计量该废液。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 按声明路线批次记录，并归一化至 1 kg 净合格 Ginger, processed 产出，包装质量除外
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_cleaning_sanitation`
- 来源: `codex-cxc-75-2015`; `eu-fdm-bat-2019-2031`

###### 废乙醇卫生液 (`clean_spent_ethanol`)

当 Spent ethanol sanitising solution 跨越“清洗与卫生消毒”前景边界时，将其作为一个原子废物产出记录；仅在锁定路线和场址记录证明该交换存在时纳入。

- 选定流: Spent ethanol sanitising solution
- 流属性/单位: Mass / kg
- 数量规则: 在混合、回收或处理前单独计量该废液。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 按声明路线批次记录，并归一化至 1 kg 净合格 Ginger, processed 产出，包装质量除外
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_cleaning_sanitation`
- 来源: `codex-cxc-75-2015`; `eu-fdm-bat-2019-2031`

###### 姜加工设备清洁废水 (`clean_equipment_wastewater`)

当 Ginger-processing equipment cleaning wastewater 跨越“清洗与卫生消毒”前景边界时，将其作为一个原子废物产出记录；仅在锁定路线和场址记录证明该交换存在时纳入。

- 选定流: Ginger-processing equipment cleaning wastewater
- 流属性/单位: Mass / kg
- 数量规则: 将湿式清洁废水与姜清洗废水和盐水灌装废水分开计量。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 按声明路线批次记录，并归一化至 1 kg 净合格 Ginger, processed 产出，包装质量除外
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_cleaning_sanitation`
- 来源: `eu-fdm-bat-2019-2031`; `jrc-fdm-bref-2019`

###### 干式收集的姜加工残留物 (`clean_dry_collected_residue`)

当 Dry-collected ginger processing residue 跨越“清洗与卫生消毒”前景边界时，将其作为一个原子废物产出记录；仅在锁定路线和场址记录证明该交换存在时纳入。

- 选定流: Dry-collected ginger processing residue
- 流属性/单位: Mass / kg
- 数量规则: 在湿式清洁前称量刷扫、刮除或真空收集的残留物。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 按声明路线批次记录，并归一化至 1 kg 净合格 Ginger, processed 产出，包装质量除外
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_cleaning_sanitation`
- 来源: `codex-cxc-75-2015`; `eu-fdm-bat-2019-2031`

##### 基本流

###### 清洁水加热产生的化石二氧化碳 (`clean_fossil_co2_air`)

当 Carbon dioxide, fossil, to air 跨越“清洗与卫生消毒”前景边界时，将其作为一个原子基本产出记录；仅在锁定路线和场址记录证明该交换存在时纳入。

- 选定流: Carbon dioxide, fossil, to air
- 流属性/单位: Mass / kg
- 数量规则: 依据实测燃料用量和有记录的场址特定或适用排放因子分别计算。
- 数值来源模式: 计算值 (`calculated_value`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 按声明路线批次记录，并归一化至 1 kg 净合格 Ginger, processed 产出，包装质量除外
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 依据采集记录计算 (`calculated_from_collection`)
- 采集协议: `cp_cleaning_sanitation`
- 来源: `eu-fdm-bat-2019-2031`

###### 清洁水加热产生的一氧化氮 (`clean_no_air`)

当 Nitrogen monoxide to air 跨越“清洗与卫生消毒”前景边界时，将其作为一个原子基本产出记录；仅在锁定路线和场址记录证明该交换存在时纳入。

- 选定流: Nitrogen monoxide to air
- 流属性/单位: Mass / kg
- 数量规则: 依据实测燃料用量和有记录的场址特定或适用排放因子分别计算。
- 数值来源模式: 计算值 (`calculated_value`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 按声明路线批次记录，并归一化至 1 kg 净合格 Ginger, processed 产出，包装质量除外
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 依据采集记录计算 (`calculated_from_collection`)
- 采集协议: `cp_cleaning_sanitation`
- 来源: `eu-fdm-bat-2019-2031`

###### 清洁水加热产生的二氧化氮 (`clean_no2_air`)

当 Nitrogen dioxide to air 跨越“清洗与卫生消毒”前景边界时，将其作为一个原子基本产出记录；仅在锁定路线和场址记录证明该交换存在时纳入。

- 选定流: Nitrogen dioxide to air
- 流属性/单位: Mass / kg
- 数量规则: 依据实测燃料用量和有记录的场址特定或适用排放因子分别计算。
- 数值来源模式: 计算值 (`calculated_value`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 按声明路线批次记录，并归一化至 1 kg 净合格 Ginger, processed 产出，包装质量除外
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 依据采集记录计算 (`calculated_from_collection`)
- 采集协议: `cp_cleaning_sanitation`
- 来源: `eu-fdm-bat-2019-2031`

###### 清洁水加热产生的二氧化硫 (`clean_so2_air`)

当 Sulfur dioxide to air 跨越“清洗与卫生消毒”前景边界时，将其作为一个原子基本产出记录；仅在锁定路线和场址记录证明该交换存在时纳入。

- 选定流: Sulfur dioxide to air
- 流属性/单位: Mass / kg
- 数量规则: 依据实测燃料用量和有记录的场址特定或适用排放因子分别计算。
- 数值来源模式: 计算值 (`calculated_value`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 按声明路线批次记录，并归一化至 1 kg 净合格 Ginger, processed 产出，包装质量除外
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 依据采集记录计算 (`calculated_from_collection`)
- 采集协议: `cp_cleaning_sanitation`
- 来源: `eu-fdm-bat-2019-2031`

###### 清洁水加热产生的 PM2.5 (`clean_pm25_air`)

当 Particulate matter, diameter below 2.5 µm, to air 跨越“清洗与卫生消毒”前景边界时，将其作为一个原子基本产出记录；仅在锁定路线和场址记录证明该交换存在时纳入。

- 选定流: Particulate matter, diameter below 2.5 µm, to air
- 流属性/单位: Mass / kg
- 数量规则: 依据实测燃料用量和有记录的场址特定或适用排放因子分别计算。
- 数值来源模式: 计算值 (`calculated_value`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 按声明路线批次记录，并归一化至 1 kg 净合格 Ginger, processed 产出，包装质量除外
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 依据采集记录计算 (`calculated_from_collection`)
- 采集协议: `cp_cleaning_sanitation`
- 来源: `eu-fdm-bat-2019-2031`

### 过程：场内废水处理 (`onsite_wastewater_treatment`)

#### 输入

##### 产品流

###### 场内废水处理用电网电力 (`wwt_grid_electricity`)

当 Grid electricity 跨越“场内废水处理”前景边界时，将其作为一个原子产品投入记录；仅在锁定路线和场址记录证明该交换存在时纳入。

- 选定流: Grid electricity
- 流属性/单位: Energy / kWh
- 数量规则: 读取处理设施分表，或记录因果分配。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 按声明路线批次记录，并归一化至 1 kg 净合格 Ginger, processed 产出，包装质量除外
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_onsite_wastewater_treatment`
- 来源: `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`

###### 场内废水处理用氯化铁 (`wwt_ferric_chloride`)

当 Ferric chloride 跨越“场内废水处理”前景边界时，将其作为一个原子产品投入记录；仅在锁定路线和场址记录证明该交换存在时纳入。

- 选定流: Ferric chloride
- 流属性/单位: Mass / kg
- 数量规则: 依据投加记录记录氯化铁实际质量；注明商品浓度。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 按声明路线批次记录，并归一化至 1 kg 净合格 Ginger, processed 产出，包装质量除外
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_onsite_wastewater_treatment`
- 来源: `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`

###### 场内废水处理用聚丙烯酰胺絮凝剂 (`wwt_polyacrylamide`)

当 Polyacrylamide flocculant 跨越“场内废水处理”前景边界时，将其作为一个原子产品投入记录；仅在锁定路线和场址记录证明该交换存在时纳入。

- 选定流: Polyacrylamide flocculant
- 流属性/单位: Mass / kg
- 数量规则: 依据投加记录记录聚丙烯酰胺实际质量；注明配方。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 按声明路线批次记录，并归一化至 1 kg 净合格 Ginger, processed 产出，包装质量除外
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_onsite_wastewater_treatment`
- 来源: `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`

###### 废水 pH 调节用氢氧化钠 (`wwt_sodium_hydroxide`)

当 Sodium hydroxide 跨越“场内废水处理”前景边界时，将其作为一个原子产品投入记录；仅在锁定路线和场址记录证明该交换存在时纳入。

- 选定流: Sodium hydroxide
- 流属性/单位: Mass / kg
- 数量规则: 依据处理投加记录记录氢氧化钠实际质量。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 按声明路线批次记录，并归一化至 1 kg 净合格 Ginger, processed 产出，包装质量除外
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_onsite_wastewater_treatment`
- 来源: `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`

##### 废物流

###### 进入场内处理的姜清洗废水 (`wwt_washing_wastewater`)

当 Ginger washing wastewater 跨越“场内废水处理”前景边界时，将其作为一个原子废物投入记录；仅在锁定路线和场址记录证明该交换存在时纳入。

- 选定流: Ginger washing wastewater
- 流属性/单位: Mass / kg
- 数量规则: 在处理入口单独计量该股来水；不得在清单行中与其他废水来源合并。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 按声明路线批次记录，并归一化至 1 kg 净合格 Ginger, processed 产出，包装质量除外
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_onsite_wastewater_treatment`
- 来源: `eu-fdm-bat-2019-2031`; `jrc-fdm-bref-2019`

###### 进入场内处理的姜制备废水 (`wwt_preparation_wastewater`)

当 Ginger preparation wastewater 跨越“场内废水处理”前景边界时，将其作为一个原子废物投入记录；仅在锁定路线和场址记录证明该交换存在时纳入。

- 选定流: Ginger preparation wastewater
- 流属性/单位: Mass / kg
- 数量规则: 在处理入口单独计量该股来水；不得在清单行中与其他废水来源合并。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 按声明路线批次记录，并归一化至 1 kg 净合格 Ginger, processed 产出，包装质量除外
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_onsite_wastewater_treatment`
- 来源: `eu-fdm-bat-2019-2031`; `jrc-fdm-bref-2019`

###### 进入场内处理的姜烫漂废水 (`wwt_scalding_wastewater`)

当 Spent ginger scalding water 跨越“场内废水处理”前景边界时，将其作为一个原子废物投入记录；仅在锁定路线和场址记录证明该交换存在时纳入。

- 选定流: Spent ginger scalding water
- 流属性/单位: Mass / kg
- 数量规则: 在处理入口单独计量该股来水；不得在清单行中与其他废水来源合并。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 按声明路线批次记录，并归一化至 1 kg 净合格 Ginger, processed 产出，包装质量除外
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_onsite_wastewater_treatment`
- 来源: `eu-fdm-bat-2019-2031`; `jrc-fdm-bref-2019`

###### 进入场内处理的含钙预处理废水 (`wwt_calcium_wastewater`)

当 Calcium-containing ginger pretreatment wastewater 跨越“场内废水处理”前景边界时，将其作为一个原子废物投入记录；仅在锁定路线和场址记录证明该交换存在时纳入。

- 选定流: Calcium-containing ginger pretreatment wastewater
- 流属性/单位: Mass / kg
- 数量规则: 在处理入口单独计量该股来水；不得在清单行中与其他废水来源合并。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 按声明路线批次记录，并归一化至 1 kg 净合格 Ginger, processed 产出，包装质量除外
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_onsite_wastewater_treatment`
- 来源: `eu-fdm-bat-2019-2031`; `jrc-fdm-bref-2019`

###### 进入场内处理的盐水灌装废水 (`wwt_brine_filling_wastewater`)

当 Brine filling wastewater 跨越“场内废水处理”前景边界时，将其作为一个原子废物投入记录；仅在锁定路线和场址记录证明该交换存在时纳入。

- 选定流: Brine filling wastewater
- 流属性/单位: Mass / kg
- 数量规则: 在处理入口单独计量盐水灌装废水。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 按声明路线批次记录，并归一化至 1 kg 净合格 Ginger, processed 产出，包装质量除外
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_onsite_wastewater_treatment`
- 来源: `eu-fdm-bat-2019-2031`; `jrc-fdm-bref-2019`

###### 进入场内处理的盐水姜冷却废水 (`wwt_cooling_wastewater`)

当 Brined-ginger cooling wastewater 跨越“场内废水处理”前景边界时，将其作为一个原子废物投入记录；仅在锁定路线和场址记录证明该交换存在时纳入。

- 选定流: Brined-ginger cooling wastewater
- 流属性/单位: Mass / kg
- 数量规则: 在处理入口单独计量盐水姜冷却废水。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 按声明路线批次记录，并归一化至 1 kg 净合格 Ginger, processed 产出，包装质量除外
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_onsite_wastewater_treatment`
- 来源: `eu-fdm-bat-2019-2031`; `jrc-fdm-bref-2019`

###### 进入场内处理的设备清洁废水 (`wwt_cleaning_wastewater`)

当 Ginger-processing equipment cleaning wastewater 跨越“场内废水处理”前景边界时，将其作为一个原子废物投入记录；仅在锁定路线和场址记录证明该交换存在时纳入。

- 选定流: Ginger-processing equipment cleaning wastewater
- 流属性/单位: Mass / kg
- 数量规则: 在处理入口单独计量该股来水；不得在清单行中与其他废水来源合并。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 按声明路线批次记录，并归一化至 1 kg 净合格 Ginger, processed 产出，包装质量除外
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_onsite_wastewater_treatment`
- 来源: `eu-fdm-bat-2019-2031`; `jrc-fdm-bref-2019`

###### 进入场内处理的废氯化钠盐水 (`wwt_spent_brine`)

当 Spent sodium chloride brine 跨越“场内废水处理”前景边界时，将其作为一个原子废物投入记录；仅在锁定路线和场址记录证明该交换存在时纳入。

- 选定流: Spent sodium chloride brine
- 流属性/单位: Mass / kg
- 数量规则: 在处理入口单独计量该股来水；不得在清单行中与其他废水来源合并。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 按声明路线批次记录，并归一化至 1 kg 净合格 Ginger, processed 产出，包装质量除外
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_onsite_wastewater_treatment`
- 来源: `eu-fdm-bat-2019-2031`; `jrc-fdm-bref-2019`

##### 基本流

#### 输出

##### 产品流

##### 废物流

###### 处理后的姜加工废水 (`wwt_treated_wastewater`)

当 Treated ginger-processing wastewater 跨越“场内废水处理”前景边界时，将其作为一个原子废物产出记录；仅在锁定路线和场址记录证明该交换存在时纳入。

- 选定流: Treated ginger-processing wastewater
- 流属性/单位: Mass / kg
- 数量规则: 在排放边界计量处理后出水质量或体积。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 按声明路线批次记录，并归一化至 1 kg 净合格 Ginger, processed 产出，包装质量除外
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_onsite_wastewater_treatment`
- 来源: `eu-fdm-bat-2019-2031`; `jrc-fdm-bref-2019`

###### 姜加工废水栅渣 (`wwt_screenings`)

当 Ginger-processing wastewater screenings 跨越“场内废水处理”前景边界时，将其作为一个原子废物产出记录；仅在锁定路线和场址记录证明该交换存在时纳入。

- 选定流: Ginger-processing wastewater screenings
- 流属性/单位: Mass / kg
- 数量规则: 脱水后称量栅渣，并记录湿基或干基。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 按声明路线批次记录，并归一化至 1 kg 净合格 Ginger, processed 产出，包装质量除外
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_onsite_wastewater_treatment`
- 来源: `eu-fdm-bat-2019-2031`; `jrc-fdm-bref-2019`

###### 姜加工废水处理污泥 (`wwt_sludge`)

当 Ginger-processing wastewater treatment sludge 跨越“场内废水处理”前景边界时，将其作为一个原子废物产出记录；仅在锁定路线和场址记录证明该交换存在时纳入。

- 选定流: Ginger-processing wastewater treatment sludge
- 流属性/单位: Mass / kg
- 数量规则: 按外运批次称量污泥并记录固含量。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 按声明路线批次记录，并归一化至 1 kg 净合格 Ginger, processed 产出，包装质量除外
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_onsite_wastewater_treatment`
- 来源: `eu-fdm-bat-2019-2031`; `jrc-fdm-bref-2019`

###### 浓缩氯化钠盐水废物 (`wwt_brine_concentrate`)

当 Concentrated sodium chloride brine waste 跨越“场内废水处理”前景边界时，将其作为一个原子废物产出记录；仅在锁定路线和场址记录证明该交换存在时纳入。

- 选定流: Concentrated sodium chloride brine waste
- 流属性/单位: Mass / kg
- 数量规则: 盐水被分流或浓缩时单独计量浓缩液。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 按声明路线批次记录，并归一化至 1 kg 净合格 Ginger, processed 产出，包装质量除外
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_onsite_wastewater_treatment`
- 来源: `eu-fdm-bat-2019-2031`; `jrc-fdm-bref-2019`

##### 基本流

###### 处理后出水中的化学需氧量 (`wwt_cod_water`)

当 Chemical oxygen demand to water 跨越“场内废水处理”前景边界时，将其作为一个原子基本产出记录；仅在锁定路线和场址记录证明该交换存在时纳入。

- 选定流: Chemical oxygen demand to water
- 流属性/单位: Mass / kg
- 数量规则: 依据实测出水流量和有代表性的实测浓度计算该单项污染物负荷。
- 数值来源模式: 计算值 (`calculated_value`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 按声明路线批次记录，并归一化至 1 kg 净合格 Ginger, processed 产出，包装质量除外
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 依据采集记录计算 (`calculated_from_collection`)
- 采集协议: `cp_onsite_wastewater_treatment`
- 来源: `eu-fdm-bat-2019-2031`

###### 处理后出水中的五日生化需氧量 (`wwt_bod5_water`)

当 Biochemical oxygen demand, 5 days, to water 跨越“场内废水处理”前景边界时，将其作为一个原子基本产出记录；仅在锁定路线和场址记录证明该交换存在时纳入。

- 选定流: Biochemical oxygen demand, 5 days, to water
- 流属性/单位: Mass / kg
- 数量规则: 依据实测出水流量和有代表性的实测浓度计算该单项污染物负荷。
- 数值来源模式: 计算值 (`calculated_value`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 按声明路线批次记录，并归一化至 1 kg 净合格 Ginger, processed 产出，包装质量除外
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 依据采集记录计算 (`calculated_from_collection`)
- 采集协议: `cp_onsite_wastewater_treatment`
- 来源: `eu-fdm-bat-2019-2031`

###### 处理后出水中的总有机碳 (`wwt_toc_water`)

当 Total organic carbon to water 跨越“场内废水处理”前景边界时，将其作为一个原子基本产出记录；仅在锁定路线和场址记录证明该交换存在时纳入。

- 选定流: Total organic carbon to water
- 流属性/单位: Mass / kg
- 数量规则: 依据实测出水流量和有代表性的实测浓度计算该单项污染物负荷。
- 数值来源模式: 计算值 (`calculated_value`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 按声明路线批次记录，并归一化至 1 kg 净合格 Ginger, processed 产出，包装质量除外
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 依据采集记录计算 (`calculated_from_collection`)
- 采集协议: `cp_onsite_wastewater_treatment`
- 来源: `eu-fdm-bat-2019-2031`

###### 处理后出水中的总悬浮固体 (`wwt_tss_water`)

当 Total suspended solids to water 跨越“场内废水处理”前景边界时，将其作为一个原子基本产出记录；仅在锁定路线和场址记录证明该交换存在时纳入。

- 选定流: Total suspended solids to water
- 流属性/单位: Mass / kg
- 数量规则: 依据实测出水流量和有代表性的实测浓度计算该单项污染物负荷。
- 数值来源模式: 计算值 (`calculated_value`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 按声明路线批次记录，并归一化至 1 kg 净合格 Ginger, processed 产出，包装质量除外
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 依据采集记录计算 (`calculated_from_collection`)
- 采集协议: `cp_onsite_wastewater_treatment`
- 来源: `eu-fdm-bat-2019-2031`

###### 处理后出水中的总氮 (`wwt_tn_water`)

当 Total nitrogen to water 跨越“场内废水处理”前景边界时，将其作为一个原子基本产出记录；仅在锁定路线和场址记录证明该交换存在时纳入。

- 选定流: Total nitrogen to water
- 流属性/单位: Mass / kg
- 数量规则: 依据实测出水流量和有代表性的实测浓度计算该单项污染物负荷。
- 数值来源模式: 计算值 (`calculated_value`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 按声明路线批次记录，并归一化至 1 kg 净合格 Ginger, processed 产出，包装质量除外
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 依据采集记录计算 (`calculated_from_collection`)
- 采集协议: `cp_onsite_wastewater_treatment`
- 来源: `eu-fdm-bat-2019-2031`

###### 处理后出水中的总磷 (`wwt_tp_water`)

当 Total phosphorus to water 跨越“场内废水处理”前景边界时，将其作为一个原子基本产出记录；仅在锁定路线和场址记录证明该交换存在时纳入。

- 选定流: Total phosphorus to water
- 流属性/单位: Mass / kg
- 数量规则: 依据实测出水流量和有代表性的实测浓度计算该单项污染物负荷。
- 数值来源模式: 计算值 (`calculated_value`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 按声明路线批次记录，并归一化至 1 kg 净合格 Ginger, processed 产出，包装质量除外
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 依据采集记录计算 (`calculated_from_collection`)
- 采集协议: `cp_onsite_wastewater_treatment`
- 来源: `eu-fdm-bat-2019-2031`

###### 处理后出水中的氯化物 (`wwt_chloride_water`)

当 Chloride to water 跨越“场内废水处理”前景边界时，将其作为一个原子基本产出记录；仅在锁定路线和场址记录证明该交换存在时纳入。

- 选定流: Chloride to water
- 流属性/单位: Mass / kg
- 数量规则: 依据实测出水流量和有代表性的实测浓度计算该单项污染物负荷。
- 数值来源模式: 计算值 (`calculated_value`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 按声明路线批次记录，并归一化至 1 kg 净合格 Ginger, processed 产出，包装质量除外
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 依据采集记录计算 (`calculated_from_collection`)
- 采集协议: `cp_onsite_wastewater_treatment`
- 来源: `eu-fdm-bat-2019-2031`

###### 场内生物废水处理产生的甲烷 (`wwt_methane_air`)

当 Methane to air 跨越“场内废水处理”前景边界时，将其作为一个原子基本产出记录；仅在锁定路线和场址记录证明该交换存在时纳入。

- 选定流: Methane to air
- 流属性/单位: Mass / kg
- 数量规则: 依据场址监测或有记录的设施特定处理模型计算；不得采用未说明的默认值。
- 数值来源模式: 计算值 (`calculated_value`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 按声明路线批次记录，并归一化至 1 kg 净合格 Ginger, processed 产出，包装质量除外
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 依据采集记录计算 (`calculated_from_collection`)
- 采集协议: `cp_onsite_wastewater_treatment`
- 来源: `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`

###### 场内生物废水处理产生的一氧化二氮 (`wwt_nitrous_oxide_air`)

当 Dinitrogen monoxide to air 跨越“场内废水处理”前景边界时，将其作为一个原子基本产出记录；仅在锁定路线和场址记录证明该交换存在时纳入。

- 选定流: Dinitrogen monoxide to air
- 流属性/单位: Mass / kg
- 数量规则: 依据场址监测或有记录的设施特定处理模型计算；不得采用未说明的默认值。
- 数值来源模式: 计算值 (`calculated_value`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 按声明路线批次记录，并归一化至 1 kg 净合格 Ginger, processed 产出，包装质量除外
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 依据采集记录计算 (`calculated_from_collection`)
- 采集协议: `cp_onsite_wastewater_treatment`
- 来源: `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`

## 7. 分配与副产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `alloc_route_subdivision` | shared or alternative routes | 在分配共享负荷前，将干制加工与盐水加工分开，并进一步按不同产品形态细分；组合平均不合规。 | `eu-pef-2021-2279` |
| `alloc_direct_measurement` | directly metered exchanges | 将直接计量的原料、公用工程、废物和排放分配至产生它们的批次或生产线。 | `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279` |
| `alloc_shared_services` | shared utilities and cleaning | 无法避免的共享交换应使用有记录的物理因果驱动量，例如分表能源、设备运行时间、清洁面积-时间或实测废水量；披露驱动量且不设 PCR 默认因子。 | `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279` |
| `alloc_residues` | ginger residues and off-spec material | 姜皮、筛下物、粉尘、不合格姜和废盐水默认作为废物；只有记录证明其为可销售副产品时才作为副产品，并披露物理关系和分配方法，不采用未经核验的避免负荷抵扣。 | `eu-pef-2021-2279` |
| `alloc_mass_balance` | all product and residue outputs | 归一化前将路线特定投入质量与合格产品、保留灌装介质、脱除水分、产品残留物、废水固形物和记录损失核对。 | `fao-ginger-postharvest-operations`; `eu-pef-2021-2279` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_route_scope_receiving` | `route_scope_receiving` | 全部原子交换 | batch record, meter, invoice, laboratory result, waste ticket or emission calculation record | batch_id; route_id; product_form; timestamp; flow_name; quantity; unit; meter_or_ticket_id; measurement_method; allocation_driver; evidence_file | 在交换发生点采集路线特定的一手记录；与批次质量平衡核对并保留原始凭证。 | native recorded unit and normalized unit | each batch or continuous meter interval, aggregated monthly | representative consecutive production period with dates disclosed | reporting site and named line | 仅汇总路线、原料状态、产品形态、粒度规格和包装相同的同质批次；核对后再归一化。 | 校准记录、发票或联单、实验室方法、批次追溯、平衡核对及复核签字 |
| `cp_washing_trimming` | `washing_trimming` | 全部原子交换 | batch record, meter, invoice, laboratory result, waste ticket or emission calculation record | batch_id; route_id; product_form; timestamp; flow_name; quantity; unit; meter_or_ticket_id; measurement_method; allocation_driver; evidence_file | 在交换发生点采集路线特定的一手记录；与批次质量平衡核对并保留原始凭证。 | native recorded unit and normalized unit | each batch or continuous meter interval, aggregated monthly | representative consecutive production period with dates disclosed | reporting site and named line | 仅汇总路线、原料状态、产品形态、粒度规格和包装相同的同质批次；核对后再归一化。 | 校准记录、发票或联单、实验室方法、批次追溯、平衡核对及复核签字 |
| `cp_scraping_peeling_slicing` | `scraping_peeling_slicing` | 全部原子交换 | batch record, meter, invoice, laboratory result, waste ticket or emission calculation record | batch_id; route_id; product_form; timestamp; flow_name; quantity; unit; meter_or_ticket_id; measurement_method; allocation_driver; evidence_file | 在交换发生点采集路线特定的一手记录；与批次质量平衡核对并保留原始凭证。 | native recorded unit and normalized unit | each batch or continuous meter interval, aggregated monthly | representative consecutive production period with dates disclosed | reporting site and named line | 仅汇总路线、原料状态、产品形态、粒度规格和包装相同的同质批次；核对后再归一化。 | 校准记录、发票或联单、实验室方法、批次追溯、平衡核对及复核签字 |
| `cp_drying_pretreatment` | `drying_pretreatment` | 全部原子交换 | batch record, meter, invoice, laboratory result, waste ticket or emission calculation record | batch_id; route_id; product_form; timestamp; flow_name; quantity; unit; meter_or_ticket_id; measurement_method; allocation_driver; evidence_file | 在交换发生点采集路线特定的一手记录；与批次质量平衡核对并保留原始凭证。 | native recorded unit and normalized unit | each batch or continuous meter interval, aggregated monthly | representative consecutive production period with dates disclosed | reporting site and named line | 仅汇总路线、原料状态、产品形态、粒度规格和包装相同的同质批次；核对后再归一化。 | 校准记录、发票或联单、实验室方法、批次追溯、平衡核对及复核签字 |
| `cp_drying` | `drying` | 全部原子交换 | batch record, meter, invoice, laboratory result, waste ticket or emission calculation record | batch_id; route_id; product_form; timestamp; flow_name; quantity; unit; meter_or_ticket_id; measurement_method; allocation_driver; evidence_file | 在交换发生点采集路线特定的一手记录；与批次质量平衡核对并保留原始凭证。 | native recorded unit and normalized unit | each batch or continuous meter interval, aggregated monthly | representative consecutive production period with dates disclosed | reporting site and named line | 仅汇总路线、原料状态、产品形态、粒度规格和包装相同的同质批次；核对后再归一化。 | 校准记录、发票或联单、实验室方法、批次追溯、平衡核对及复核签字 |
| `cp_dry_cleaning_grading` | `dry_cleaning_grading` | 全部原子交换 | batch record, meter, invoice, laboratory result, waste ticket or emission calculation record | batch_id; route_id; product_form; timestamp; flow_name; quantity; unit; meter_or_ticket_id; measurement_method; allocation_driver; evidence_file | 在交换发生点采集路线特定的一手记录；与批次质量平衡核对并保留原始凭证。 | native recorded unit and normalized unit | each batch or continuous meter interval, aggregated monthly | representative consecutive production period with dates disclosed | reporting site and named line | 仅汇总路线、原料状态、产品形态、粒度规格和包装相同的同质批次；核对后再归一化。 | 校准记录、发票或联单、实验室方法、批次追溯、平衡核对及复核签字 |
| `cp_crushing_grinding_sieving` | `crushing_grinding_sieving` | 全部原子交换 | batch record, meter, invoice, laboratory result, waste ticket or emission calculation record | batch_id; route_id; product_form; timestamp; flow_name; quantity; unit; meter_or_ticket_id; measurement_method; allocation_driver; evidence_file | 在交换发生点采集路线特定的一手记录；与批次质量平衡核对并保留原始凭证。 | native recorded unit and normalized unit | each batch or continuous meter interval, aggregated monthly | representative consecutive production period with dates disclosed | reporting site and named line | 仅汇总路线、原料状态、产品形态、粒度规格和包装相同的同质批次；核对后再归一化。 | 校准记录、发票或联单、实验室方法、批次追溯、平衡核对及复核签字 |
| `cp_brine_preparation` | `brine_preparation` | 全部原子交换 | batch record, meter, invoice, laboratory result, waste ticket or emission calculation record | batch_id; route_id; product_form; timestamp; flow_name; quantity; unit; meter_or_ticket_id; measurement_method; allocation_driver; evidence_file | 在交换发生点采集路线特定的一手记录；与批次质量平衡核对并保留原始凭证。 | native recorded unit and normalized unit | each batch or continuous meter interval, aggregated monthly | representative consecutive production period with dates disclosed | reporting site and named line | 仅汇总路线、原料状态、产品形态、粒度规格和包装相同的同质批次；核对后再归一化。 | 校准记录、发票或联单、实验室方法、批次追溯、平衡核对及复核签字 |
| `cp_brine_filling_thermal` | `brine_filling_thermal` | 全部原子交换 | batch record, meter, invoice, laboratory result, waste ticket or emission calculation record | batch_id; route_id; product_form; timestamp; flow_name; quantity; unit; meter_or_ticket_id; measurement_method; allocation_driver; evidence_file | 在交换发生点采集路线特定的一手记录；与批次质量平衡核对并保留原始凭证。 | native recorded unit and normalized unit | each batch or continuous meter interval, aggregated monthly | representative consecutive production period with dates disclosed | reporting site and named line | 仅汇总路线、原料状态、产品形态、粒度规格和包装相同的同质批次；核对后再归一化。 | 校准记录、发票或联单、实验室方法、批次追溯、平衡核对及复核签字 |
| `cp_packaging_release` | `packaging_release` | 全部原子交换 | batch record, meter, invoice, laboratory result, waste ticket or emission calculation record | batch_id; route_id; product_form; timestamp; flow_name; quantity; unit; meter_or_ticket_id; measurement_method; allocation_driver; evidence_file | 在交换发生点采集路线特定的一手记录；与批次质量平衡核对并保留原始凭证。 | native recorded unit and normalized unit | each batch or continuous meter interval, aggregated monthly | representative consecutive production period with dates disclosed | reporting site and named line | 仅汇总路线、原料状态、产品形态、粒度规格和包装相同的同质批次；核对后再归一化。 | 校准记录、发票或联单、实验室方法、批次追溯、平衡核对及复核签字 |
| `cp_cleaning_sanitation` | `cleaning_sanitation` | 全部原子交换 | batch record, meter, invoice, laboratory result, waste ticket or emission calculation record | batch_id; route_id; product_form; timestamp; flow_name; quantity; unit; meter_or_ticket_id; measurement_method; allocation_driver; evidence_file | 在交换发生点采集路线特定的一手记录；与批次质量平衡核对并保留原始凭证。 | native recorded unit and normalized unit | each batch or continuous meter interval, aggregated monthly | representative consecutive production period with dates disclosed | reporting site and named line | 仅汇总路线、原料状态、产品形态、粒度规格和包装相同的同质批次；核对后再归一化。 | 校准记录、发票或联单、实验室方法、批次追溯、平衡核对及复核签字 |
| `cp_onsite_wastewater_treatment` | `onsite_wastewater_treatment` | 全部原子交换 | batch record, meter, invoice, laboratory result, waste ticket or emission calculation record | batch_id; route_id; product_form; timestamp; flow_name; quantity; unit; meter_or_ticket_id; measurement_method; allocation_driver; evidence_file | 在交换发生点采集路线特定的一手记录；与批次质量平衡核对并保留原始凭证。 | native recorded unit and normalized unit | each batch or continuous meter interval, aggregated monthly | representative consecutive production period with dates disclosed | reporting site and named line | 仅汇总路线、原料状态、产品形态、粒度规格和包装相同的同质批次；核对后再归一化。 | 校准记录、发票或联单、实验室方法、批次追溯、平衡核对及复核签字 |

### 计算规则

| rule_id | 适用对象 | 公式或规则 | 投入 | 产出 | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | all foreground exchanges | 归一化量 = 核对后的路线特定交换量 / 按声明口径放行的净合格加工姜质量 | 核对后的交换量；放行净产品质量 | 每 1 kg 参考产品的交换量 | `eu-pef-2021-2279` |
| `calc_brine_mass_disclosure` | ginger in brine | 分别报告净含量和沥干姜质量；仅用实测容器净含量及沥干质量计算沥干比例 | 实测净含量；实测沥干姜质量 | 声明的盐水路线质量描述项 | `codex-cxs-260-2007` |
| `calc_mass_balance` | each production batch | 质量平衡差 = 实测产品投入总量 - 实测产品产出总量 - 实测废物产出总量 - 计算的基本质量转移 | 路线特定投入；产品；废物；实测或计算质量转移 | 批次质量平衡差 | `fao-ginger-postharvest-operations`; `eu-pef-2021-2279` |
| `calc_combustion_emissions` | each fired utility | 排放质量 = 实测燃料量 × 场址特定或有记录的供应商/监管排放因子；CO2、NO、NO2、SO2 和 PM2.5 分开 | 燃料量；燃料属性；因子来源 | 单项燃烧排放质量 | `eu-fdm-bat-2019-2031` |
| `calc_refrigerant_loss` | each refrigerant circuit | 制冷剂损失 = 期初库存 + 补充量 - 期末库存 - 有记录的回收量；每种制冷剂分别计算 | 期初库存；补充量；期末库存；回收量 | 单项制冷剂排放质量 | `eu-fdm-bat-2019-2031` |
| `calc_wastewater_load` | each discharged pollutant | 污染物负荷 = 实测废水体积 × 有代表性的实测浓度，采样期与方法须匹配 | 水流体积；污染物浓度；采样期 | 单项污染物质量 | `eu-fdm-bat-2019-2031` |

### 数据质量要求

| requirement_id | 适用对象 | 要求 | 证据 |
| --- | --- | --- | --- |
| `dq_route_representativeness` | all activity data | 数据应代表声明的场址、生产线、路线、原料状态、产品形态、粒度规格和包装；混合路线平均不具代表性。 | 路线键、批次谱系和生产日期 |
| `dq_temporal_coverage` | foreground records | 使用覆盖正常运行及相关清洁周期的已披露连续期间；披露停机、试验和异常批次。 | 带日期的计量区间、批次记录和清洁日志 |
| `dq_metering` | utilities and water | 保留经校准的计量或发票证据，并记录共享表计的任何因果分配。 | 校准证书、发票、分表记录和分配工作表 |
| `dq_mass_and_quality` | ginger products | 保留适用于锁定产品规格的称量、水分试验、粒度结果及盐水净含量/沥干质量检查。 | 秤具检查、实验室方法、分析证书和放行记录 |
| `dq_waste_and_emissions` | wastes and emissions | 保留废物联单、废水流量与浓度记录、排放因子来源及制冷剂维护日志。 | 联单、实验室报告、监测报告和维护日志 |
| `dq_verification` | complete data package | 独立复核人员应验证路线互斥、来源追溯、公式实施、质量平衡、分配及双语机器字段对齐。 | 签署的复核清单和已关闭问题 |

## 9. 验证规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `val_identity` | product identity | 确认 CPC 23927 加工姜，并拒绝未加工姜、姜油、油树脂、糖渍保藏品及声明干制或盐水形态以外的产品。 | `un-cpc-3-0-2025`; `codex-cxs-343-2021`; `codex-cxs-260-2007` |
| `val_route_exclusivity` | route metadata | 必须有恰好一个路线标记、一种原料状态、一种制备形态、一种最终产品形态和一种包装规格；拒绝干制/盐水平均。 | `codex-cxs-343-2021`; `codex-cxs-260-2007`; `eu-pef-2021-2279` |
| `val_reference_uuid` | reference flow identity | 要求参考产品 UUID、Mass 流属性 UUID、Units of mass 单位组 UUID 和 kg 单位与本 PCR 参考定义一致。 |  |
| `val_reference_mass` | reference amount | 归一化至 1 kg 净合格加工姜并排除包装；盐水姜还须披露净含量、灌装介质处理和沥干姜质量。 | `codex-cxs-260-2007`; `eu-fdm-bat-2019-2031` |
| `val_atomic_inventory` | inventory exchanges | 每行仅允许一个具体交换；拒绝选择器或集合标签，并要求每个未解析非参考 UUID 保持空白且由 manifest 审查元数据闭合。 | `eu-pef-2021-2279` |
| `val_primary_data` | foreground amounts | 仅允许来自已采集前景记录的 foreground_record 或 calculated_value；拒绝无文件依据的默认值、范围和推理估计。 | `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279` |
| `val_mass_balance` | route mass balance | 要求核对批次质量平衡，并解释损失、脱除水分、灌装介质、残留物和废水固形物。 | `fao-ginger-postharvest-operations`; `eu-pef-2021-2279` |
| `val_utility_and_emissions` | utilities and emissions | 要求记录实际存在的阶段特定电力、蒸汽、热水、每种燃料、制冷剂、废水流、污染物和空气排放；对省略的条件性交换要求明确不适用证据。 | `jrc-fdm-bref-2019`; `eu-fdm-bat-2019-2031` |
| `val_additives` | brine formulation | 每种酸或防腐剂必须有实际投加记录、配料身份和当前产品/辖区授权；Codex 类别许可不是默认配方。 | `codex-cxs-260-2007`; `codex-gsfa-04-2-2-3-2025` |
| `val_bilingual_structure` | bilingual record | 英文和中文的 process_id、row_id、选定流身份、UUID、受控词元、采集协议和 source-id 顺序必须一致。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 一种锁定加工姜路线和产品规格的场址特定前景数据包。 |
| downstream_use | 用于构建加工姜产品流、单位过程和生命周期模型，并供后续 LCA 研究在明确边界下使用。 |
| allowed_use | 路线、原料状态、产品形态、质量口径、场址、数据期、包装和数据质量均与目标研究匹配时使用。 |
| excluded_use | 不得作为干制品与盐水品的混合平均；不得代表未加工姜、姜油、油树脂或糖渍姜；不得将本 PCR 当作行业默认清单。 |
| required_metadata | CPC；参考 UUID；路线；植物学身份；原料状态；制备方式；产品形态；水分或盐水质量口径；粒度；包装；场址；生产线；数据期；技术；分配；截止项；上游链接。 |
| required_quality_disclosure | 覆盖期、批次数、表计和校准、化验方法、质量平衡差、共享服务分配、废物去向、排放计算因子、未解析 UUID 及复核状态。 |
| update_trigger | 路线、原料状态、配方、添加剂授权、设备、热载体、燃料、制冷剂、包装、场址、质量规格或代表性数据期发生实质变化。 |

## 11. 数据来源

| 来源 ID | 类型 | 参考文献 | 用途 |
| --- | --- | --- | --- |
| `un-cpc-3-0-2025` | standard | United Nations Statistics Division, Central Product Classification Version 3.0; retained repository row `23927,"Ginger, processed"` in `classifications/systems/cpc/3.0/raw/CPC_Ver_3.0_Structure_30Jun2025.csv`; [official classification entry](https://unstats.un.org/unsd/classifications/Family/Detail/2107). | 界定 CPC 23927 的精确身份，并区分加工姜与未加工姜。 |
| `codex-cxs-343-2021` | standard | Codex Alimentarius, CXS 343-2021, Standard for Dried or Dehydrated Ginger, amended 2025; [official PDF](https://www.fao.org/fao-who-codexalimentarius/sh-proxy/en/?lnk=1&url=https%3A%2F%2Fworkspace.fao.org%2Fsites%2Fcodex%2FStandards%2FCXS%2B343-2021%2FCXS_343e.pdf). | 支持干姜植物学身份、整粒/片块/破碎/研磨形态、卫生、形态声明及条件性氧化钙加工助剂处理；任何质量限值均不作为 LCI 默认值。 |
| `codex-cxs-260-2007` | standard | Codex Alimentarius, CXS 260-2007, Standard for Pickled Fruits and Vegetables; [official PDF](https://www.fao.org/fao-who-codexalimentarius/sh-proxy/en/?lnk=1&url=https%3A%2F%2Fworkspace.fao.org%2Fsites%2Fcodex%2FStandards%2FCXS%2B260-2007%2FCXS_260e.pdf). | 支持盐水姜、灌装介质身份、盐及酸性介质配方、卫生、净含量/沥干质量披露和产品命名。 |
| `codex-gsfa-04-2-2-3-2025` | dataset | Codex GSFA Online, food category 04.2.2.3, updated through CAC48 (2025); [official category page](https://www.fao.org/gsfaonline/foods/details.html?id=80). | 确认腌制姜属于盐水蔬菜类别，并标识苯甲酸盐和山梨酸盐的当前类别条款；场址配方和适用市场法规仍为控制依据。 |
| `codex-cxc-75-2015` | official_guidance | Codex Alimentarius, CXC 75-2015, Code of Hygienic Practice for Low-Moisture Foods, Annex III for spices; [official PDF](https://www.fao.org/fao-who-codexalimentarius/sh-proxy/en/?lnk=1&url=https%3A%2F%2Fworkspace.fao.org%2Fsites%2Fcodex%2FStandards%2FCXC%2B75-2015%2FCXC_075e.pdf). | 支持干制香辛料加工中受控干区清洁、干残留物清除、真空或过滤空气清洁以及条件性湿式或醇基卫生消毒。 |
| `fao-ginger-postharvest-operations` | extension_guidance | FAO INPhO, *Ginger: Post-harvest Operations*; [official PDF](https://www.fao.org/fileadmin/user_upload/inpho/docs/Post_Harvest_Compendium_-_Ginger.pdf). | 支持接收、去除杂物/芽/根、清洗、烫漂、刮皮/去皮/切片、氧化钙漂白、干燥、风筛、粒度减小、分级及具体干制品包装形态；示例数量不作为默认值。 |
| `jrc-fdm-bref-2019` | official_guidance | European Commission Joint Research Centre, *Best Available Techniques (BAT) Reference Document for the Food, Drink and Milk Industries*, JRC118627, DOI [10.2760/243911](https://doi.org/10.2760/243911); [JRC record](https://publications.jrc.ec.europa.eu/repository/handle/JRC118627). | 支持食品加工公用工程、水和能源清单、清洁、制冷、废物、废水及空气排放过程结构，不提供类别默认清单量。 |
| `eu-fdm-bat-2019-2031` | standard | Commission Implementing Decision (EU) 2019/2031 establishing BAT conclusions for the food, drink and milk industries; [EUR-Lex full text](https://eur-lex.europa.eu/eli/dec_impl/2019/2031/oj). | 要求建立水、能源、原料、废水和废气清单；支持分别记录 COD、BOD、TOC、TSS、TN、TP、氯化物、粉尘、NOx 和 SOx，以及制冷控制和实测/计算监测。 |
| `eu-pef-2021-2279` | method_factor | Commission Recommendation (EU) 2021/2279 on Environmental Footprint methods; [EUR-Lex full text](https://eur-lex.europa.eu/eli/reco/2021/2279/oj/eng). | 要求产品特定物料清单和企业特定制造数据、完整 LCI、透明分配、数据质量、报告及验证。 |
