---
pcr_id: pcr.agriculture-forestry-and-fishery-products.fish-crustaceans-molluscs-and-other-aquatic-invertebrates-products.farmed-rock-lobster-and-other-sea-crawfish-live-fresh-or-chilled
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 养殖岩龙虾和其他海螯虾，活、鲜或冷藏

## 1. 范围和适用性

本 PCR 用于指导 CPC 3.0 `04322` 中养殖岩龙虾和其他海螯虾的前景数据包构建，产品状态为活、鲜或冷藏。适用范围包括 Palinurus spp.、Panulirus spp.、Jasus spp. 以及其他岩龙虾或海螯虾类群，只要报告方控制孵化、育苗、眼幼体或稚体接收、养成、海笼、池塘、池槽、牧场化、活养、冷藏、包装或交付活动。

覆盖产品包括来自养殖路线、以整只或声明产品基准销售的岩龙虾和海螯虾，可带壳或去壳，状态为活、鲜或冷藏。默认路线覆盖生物起始存量来源、受控孵化或育苗、养成管理、采收、分级、活养或冷藏、包装，以及在声明门点放行。

排除产品包括野生岩龙虾和其他海螯虾、Homarus 龙虾、挪威海螯虾、螃蟹、虾、对虾、不属于本 CPC 类别的淡水螯虾、冷冻、干制、盐渍、盐水浸泡、熟制、罐藏、仅肉制品、预制或保藏产品，作为单独投入销售的苗种，以及作为单独产品建模的壳、蜕壳或加工残渣。

由于商业化刺龙虾和岩龙虾养殖往往依赖区域特定的眼幼体、稚体、孵化或养成供应链，合规数据集必须证明受控养殖活动。仅有野生捕捞后活养、冷藏、分级或发运的系统不属于本 PCR。

## 2. 产品类别身份

| Field | Value |
| --- | --- |
| canonical_pcr_id | `pcr.agriculture-forestry-and-fishery-products.fish-crustaceans-molluscs-and-other-aquatic-invertebrates-products.farmed-rock-lobster-and-other-sea-crawfish-live-fresh-or-chilled` |
| classification_refs | CPC 3.0 `04322`, `Farmed rock lobster and other sea crawfish, live, fresh or chilled` |
| covered_products | 来自声明养殖、孵化、育苗、养成、海笼、池塘、池槽、牧场化或增殖系统的 Palinurus spp.、Panulirus spp.、Jasus spp. 以及其他岩龙虾或海螯虾，状态为活、鲜或冷藏 |
| excluded_products | 野生岩龙虾和海螯虾；Homarus 龙虾；挪威海螯虾；不属于 CPC `04322` 的螃蟹、虾、对虾和淡水螯虾；冷冻、干制、盐渍、盐水浸泡、熟制、罐藏、仅肉制品、预制或保藏产品；作为单独产品销售的苗种或稚体；作为单独产品的壳、蜕壳和残渣 |
| representative_product | 达到声明上市规格和声明产品形态的活或冷藏养殖岩龙虾或海螯虾 |
| production_route | 生物起始存量来源、受控孵化或育苗、养成管理、采收、分级、活养或冷藏、包装和声明门点放行 |
| market_state | 活、鲜或冷藏岩龙虾或海螯虾，并声明物种、存量来源、养殖系统、规格等级、产品基准、活养或冷藏状态、包装状态和门点 |

## 3. 参考流

| Field | Value |
| --- | --- |
| What | 作为活、鲜或冷藏市场产品的养殖岩龙虾和其他海螯虾 |
| How much | 1 kg |
| How well | 声明物种或类群、养殖证明、养殖系统、活/鲜/冷藏状态、整只或声明产品基准、规格等级、采收和活养条件以及门点 |
| How long or cycle | 一个养殖生产批次、养成批次、采收批次或报告期，并归一化到可销售产品输出 |
| reference_flow_link | 下方参考量和产品流 |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg |
| Reference product flow | Farmed rock lobster and other sea crawfish, live, fresh or chilled `5ec1e534-2b3b-4ef7-a934-15d67185b9c7` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | 物种或类群；眼幼体、后期幼体、稚体、亲体、孵化场、采集者或养成存量来源；养殖系统；养殖证明或受控养殖期；产品状态；整只、活、鲜、冷藏、明确声明的尾部产品或声明产品基准；规格等级、头胸甲长、个体质量或每 kg 只数；适用时的带壳或去壳基准；水分或沥水基准；地理位置和声明门点；活养或冷藏时长；投喂制度或天然饵料声明；水温、盐度和换水；健康、生物安全、许可或认证状态 |

构建前景数据包时，`Required qualifiers` 中的项目必须在数据集元数据、过程注释、参考流说明、产品描述或等效数据包字段中声明。缺少必需限定信息会使该数据包的参考流定义不完整。

质量是主要参考基准。只数、周转箱、活鱼箱、笼、池、池槽、眼幼体、稚体、规格等级、头胸甲长或个体质量记录，只有在保留净质量、每 kg 只数或平均个体质量、产品形态、抽样方法和皮重方法时才能使用。

## 4. 计量和单位规则

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 参考流必须表示为声明活、鲜或冷藏产品形态下的 kg 养殖岩龙虾或海螯虾。 |
| `farmed_production_evidence` | all datasets | Record identity and production evidence | declared records | 数据集记录必须证明受控养殖生产，而不是仅有野生捕捞后的活养、冷藏、分级或发运。 |
| `product_form_mass_basis` | whole, live, fresh, chilled, tailed, drained, or packed records | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 产品质量必须说明活体整只质量、冷藏整只质量、沥水质量、特殊声明的尾部质量或其他合同声明基准。只有具备实测得率证据时才能转换。 |
| `count_to_mass_conversion` | stocking, mortality, grading, harvest, sales, and count-grade records | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 只数记录在归一化前必须包括每 kg 只数或平均个体质量、头胸甲长或规格等级、抽样方法和产品形态。 |
| `life_stage_identity` | broodstock, pueruli, postlarvae, juveniles, and transferred stock | Mass or count | kg, item, puerulus count, postlarval count, or juvenile count | 生命阶段记录必须保留类群、生命阶段、供应方或孵化场、批次、只数、可计量时的质量、发育阶段、健康状态和转移日期。 |
| `feed_mass_basis` | live feed, trash fish, mussel, formulated feed, supplements, and natural-feed claims | Mass, count, or service basis | kg, g, item, or cage-day | 饲料记录必须说明湿基、干基、投喂基准、活饵、配合饲料或天然饵料基准。声明天然饵料养成系统时，必须证明未添加饲料并保留养成服务基准。 |
| `water_temperature_salinity_and_volume` | hatchery, nursery, grow-out, live holding, washing, chilling, and wastewater | Temperature, salinity, mass, or volume | deg C, ppt, kg, or m3 | 保留受控水量、水温、盐度、换水、循环、补水和排放基准。若能耗依赖冷却或加热，必须声明温控条件。 |
| `energy_and_fuel_inventory` | pumps, aeration, oxygenation, chilling, heating, filtration, lighting, vessels, vehicles, and delivery | Energy or fuel quantity | kWh, MJ, L, or kg | 在归一化到参考流前保留电力、燃料、氧气或能源载体原始单位。 |
| `chemical_and_health_treatment_basis` | disinfectants, probiotics, medicines, water-treatment chemicals, oxygen, anesthetic, and salt | Mass, volume, or active ingredient | kg, L, g active ingredient, or m3 gas | 记录产品用量、适用时的有效成分、处理目的、诊断或健康计划链接、法律状态以及对上市资格的影响。 |
| `packaging_and_ice_basis` | crates, boxes, bags, liners, bands, labels, insulated containers, ice, gel packs, oxygenated bags, and pallets | Mass or item count | kg or item | 包装、冰、活运包装和容器在归一化前必须保留材料类型、件数、皮重或填充质量、重复使用率和目的地。 |

关键产品属性作为前景限定信息与质量参考流一并记录：

| Attribute | Common unit | Required handling |
| --- | --- | --- |
| Species or taxon | scientific and common name | 所有数据集必需 |
| Culture system | hatchery, nursery, pond, tank, RAS, sea cage, suspended cage, ranching area, enhancement area, or declared variant | 用于边界、水、饲料、死亡和排放解释 |
| Biological starting condition | broodstock, hatchery seed, pueruli, postlarvae, juveniles, wild-collected seed, supplier stock, or grow-out transfer | 用于区分养殖生产和野生捕捞 |
| Product form | live whole, fresh whole, chilled whole, shell-on, shell-off, tail-only if exceptionally declared, or declared variant | 用于质量基准解释 |
| Size grade | count per kg, mean individual mass, carapace length, sex, maturity class, or market grade | 使用只数或等级记录时必需 |

## 5. 系统边界

默认边界覆盖受前景控制的养殖岩龙虾和海螯虾生产，直到声明农场、孵化场、采收、包装场、发运或交付门点：

1. 亲体、孵化苗、眼幼体、后期幼体、稚体或养成存量来源，包括报告方控制的现场孵化和育苗活动；若由其他孵化场、渔民、采集者或养殖场供应，则披露采购或采集存量。
2. 孵化、育苗、养成、笼养、池塘、池槽、RAS、牧场化或增殖管理，包括投放、饲料或天然饵料管理、取水和换水、曝气、充氧、过滤、温控、盐度控制、庇护结构、健康管理、生物安全、死亡、蜕壳和直接受控维护。
3. 采收、分级、清洗、活养、冷藏、包装和声明门点放行。
4. 当参考流是交付产品而不是农场、采收、发运或包装场门点产品时，纳入到声明门点的交付。

资本品和长期基础设施仅在声明数据包范围要求时纳入。外购饲料、活饵、生物存量、笼具、网具、庇护结构、包装、冰、氧气、电力、燃料和化学品需要上游数据集，除非同一运营方控制并在前景包中报告其生产。

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | declared_broodstock_hatchery_seed_puerulus_postlarval_juvenile_or_growout_stocking_event |
| starting_condition_role | aquaculture_stock_identity_and_biological_starting_condition |
| product_classification_scope | current CPC 3.0 product category `04322`, `Farmed rock lobster and other sea crawfish, live, fresh or chilled` |
| recursive_input_rule | 用于生产市场产品的养殖岩龙虾亲体、孵化苗、眼幼体、后期幼体、稚体或养成存量，应记录为带有供应方、孵化场、采集者、养殖场、生命阶段、来源和健康披露的生物起始条件，而不是递归作为成品参考产品输出 |
| upstream_dataset_requirement | 亲体、孵化、眼幼体、后期幼体、稚体、养成存量或供应方数据集，或记录来源、物种、批次、只数或质量、生命阶段、健康或生物安全状态、转移许可和认证或许可证据 |
| disclosure | 披露物种或类群、养殖系统、生物起始条件、养殖生产证据、放养密度或笼数、投喂制度或天然饵料声明、水源、水温、盐度和换水、曝气或充氧、健康处理、死亡和蜕壳记录、采收和活养条件、产品形态、包装状态、声明门点以及未解决的 Tiangong UUID 替代 |

## 6. 过程清单结构

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| biological_stock_hatchery_nursery_and_stocking | Biological Stock, Hatchery, Nursery, and Stocking | required | 必须声明生物起始条件；现场孵化和育苗由报告方控制时纳入 | foreground/upstream bridge | 进入养成的可存活眼幼体、后期幼体、稚体或投放岩龙虾 |
| growout_and_husbandry | Grow-out and Husbandry | required | 纳入池塘、池槽、RAS、笼、海笼、牧场化、增殖或声明养成系统 | foreground production | 最终处理前的采收规格岩龙虾或海螯虾 |
| harvest_live_holding_chilling_and_packout | Harvest, Live Holding, Chilling, and Pack-out | required |  | foreground conditioning and gate release | 声明的可销售活、鲜或冷藏岩龙虾或海螯虾 |
| delivery_to_declared_gate | Delivery to Declared Gate | conditional | 当参考流为农场、采收、发运或包装场之外的交付产品时纳入 | foreground transport | 声明门点交付产品 |

### Process: 生物存量、孵化、育苗和投放 (`biological_stock_hatchery_nursery_and_stocking`)

#### Inputs

##### Product flows

###### 亲体、孵化苗、眼幼体、后期幼体或稚体（`biological_stock_input`）

本行记录进入声明养殖路线的外购、采集或内部生产生物存量。

- Selected flow: Rock lobster broodstock, pueruli, postlarvae, juveniles, or grow-out stock selected from foreground records
- Flow property / unit: Mass or count with life stage / kg, item, puerulus count, postlarval count, or juvenile count
- Amount rule: 进入孵化、育苗、养成、牧场化或笼养的实测只数、可计量质量、生命阶段和验收数量
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg marketable reference product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_biological_stocking_records`
- Sources: `fao-panulirus-homarus-factsheet`, `qld-spiny-lobster-aquaculture-2009`, `fisheries-puerulus-2026`, `asc-farm-standard-2025`
- Range: 暂定生物存量筛查估算
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0.001
  - Upper: 10
  - Unit: kg biological stock live mass/kg marketable product
  - Basis: 亲体、眼幼体、后期幼体或稚体活体质量相对于可销售输出的宽泛首轮估算
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### 孵化和育苗饲料（`hatchery_nursery_feed`）

本行覆盖活饵、丰年虫、鱼类、贻贝、配合开口料、亲体饲料以及类似孵化或育苗饲料。

- Selected flow: Fry feed `3b09065d-9675-4dad-8d0e-1035b5cca324`; Fresh bait `40685ba7-0e7f-41bc-92b0-cec9e6696f19`; other hatchery or nursery feed selected from site records
- Flow property / unit: Mass, volume, or count / kg, g, L, cyst count, or item
- Amount rule: 按批次、生命阶段和基准计量饲料或活饵用量
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per hatchery or nursery batch and per 1,000 kg marketable reference product after normalization
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_feed_records`
- Sources: `qld-spiny-lobster-aquaculture-2009`, `asc-farm-standard-2025`
- Range: 暂定孵化饲料筛查估算
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 5000
  - Unit: kg or feed-unit/1,000 kg marketable product
  - Basis: 孵化和育苗饲料投入相对于可销售输出的宽泛首轮估算
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### 孵化和育苗用水与能源（`hatchery_nursery_water_and_energy`）

本行覆盖现场孵化和育苗中的受控海水、半咸水、过程水、循环补水、电力、燃料、曝气、充氧、过滤和温控。

- Selected flow: Process water `ec205030-248c-496f-9cf2-06d9d26dc6ff`; Electricity `f872677d-2f66-428a-a94e-f0fba61231df`; diesel oil `9d258d75-6792-4f1c-9856-81602ed8f816` where used
- Flow property / unit: Mass, volume, energy, or fuel quantity / kg, m3, kWh, MJ, L, or kg
- Amount rule: 实测取水、补水、电力、燃料、充氧、冷却、加热或分摊设备服务，并保留水温和盐度基准
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per hatchery or nursery batch and per 1,000 kg marketable reference product after normalization
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_energy_and_fuel_records`
- Sources: `qld-spiny-lobster-aquaculture-2009`, `asc-farm-standard-2025`
- Range: 暂定孵化用水与能源筛查估算
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 50000
  - Unit: m3 water or kWh/MJ-equivalent/1,000 kg marketable product
  - Basis: 受控孵化和育苗服务相对于可销售输出的宽泛首轮估算
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### 孵化死亡、蜕壳、污泥和拒收存量（`hatchery_mortalities_molts_sludge_and_rejected_stock`）

此行记录在声明的过程和系统边界内选定的交换。

- Selected flow: Sludge `725c8f6e-7975-4155-a250-1f95ef70c508`; mortality, molt, shell, and other organic aquaculture residue selected from site records
- Flow property / unit: Mass or count / kg or item
- Amount rule: 实测死亡只数、残渣质量、污泥、拒收存量以及处置或回收路线
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per hatchery or nursery batch and per 1,000 kg marketable reference product after normalization
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_mortality_molt_residue_and_sludge_records`
- Range: 暂定孵化残渣筛查估算
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 2
  - Unit: kg residue/kg accepted juveniles or postlarvae
  - Basis: 残渣或死亡质量相对于验收稚体或后期幼体的宽泛首轮估算
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

孵化和育苗默认不指定元素投入。只有当选定 Tiangong 身份和场址范围后，才加入场址特定海水取用、水体排放、制冷剂直接损失或海域占用流。

#### Outputs

##### Product flows

###### 进入养成的验收眼幼体、后期幼体或稚体（`accepted_pueruli_postlarvae_or_juveniles_for_growout`）

此行记录在声明的过程和系统边界内选定的交换。

- Selected flow: Pueruli, postlarvae, juveniles, or stocked rock lobster selected from foreground records
- Flow property / unit: Mass or count with mean size / kg, item, puerulus count, postlarval count, or juvenile count
- Amount rule: 接收、孵化、育苗、分级、暂养和转移损失后的验收存量
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: accepted stock entering grow-out or ranching
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_biological_stocking_records`
- Range: 存量验收质量平衡 QA 校验
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1
  - Unit: kg/kg biological stock input
  - Basis: 接收、分级和育苗转移后的验收存量比例
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `qld-spiny-lobster-aquaculture-2009`

### Process: 养成和养殖管理 (`growout_and_husbandry`)

#### Inputs

##### Product flows

###### 养成饲料、饵料、天然饵料支持和补充物（`growout_feed_bait_natural_feed_and_supplements`）

此行记录在声明的过程和系统边界内选定的交换。

- Selected flow: Fry feed `3b09065d-9675-4dad-8d0e-1035b5cca324`; Fresh bait `40685ba7-0e7f-41bc-92b0-cec9e6696f19`; other grow-out feed selected from site records
- Flow property / unit: Mass or service basis / kg, g, item, cage-day, pond-day, or tank-day
- Amount rule: 按批次计量饲料或饵料用量；若声明零添加饲料，必须记录笼、池、池槽、投放和暴露条件
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per grow-out batch and per 1,000 kg marketable reference product after normalization
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_feed_records`
- Sources: `fao-panulirus-homarus-factsheet`, `qld-spiny-lobster-aquaculture-2009`, `asc-farm-standard-2025`
- Range: 暂定养成饲料筛查估算
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 10000
  - Unit: kg feed/1,000 kg marketable product
  - Basis: 添加饲料投入的宽泛首轮估算；只有保留天然饵料系统证据时才可为零
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### 养成用水、笼具服务、电力和燃料（`growout_water_cage_service_electricity_and_fuel`）

此行记录在声明的过程和系统边界内选定的交换。

- Selected flow: Process water `ec205030-248c-496f-9cf2-06d9d26dc6ff`; Electricity `f872677d-2f66-428a-a94e-f0fba61231df`; Diesel oil `9d258d75-6792-4f1c-9856-81602ed8f816` where used
- Flow property / unit: Mass, volume, energy, fuel quantity, or service basis / kg, m3, kWh, MJ, L, cage-day, pond-day, or tank-day
- Amount rule: 实测取水、换水、笼具服务、船只作业、泵送、曝气、充氧、过滤、燃料和分摊设备服务，并保留水温、盐度和养殖单元
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per grow-out batch and per 1,000 kg marketable reference product after normalization
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_energy_and_fuel_records`
- Sources: `qld-spiny-lobster-aquaculture-2009`, `asc-farm-standard-2025`
- Range: 暂定养成服务筛查估算
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 50000
  - Unit: m3 water or kWh/MJ-equivalent/1,000 kg marketable product
  - Basis: 用水、笼具、能源和燃料使用相对于可销售输出的宽泛首轮估算
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### 健康、生物安全和水处理投入（`health_biosecurity_and_water_treatment_inputs`）

此行记录在声明的过程和系统边界内选定的交换。

- Selected flow: Site-specific health, biosecurity, oxygen, salt, anesthetic, or water-treatment input selected from foreground records
- Flow property / unit: Mass, volume, active ingredient, or gas volume / kg, L, g active ingredient, or m3
- Amount rule: 实测产品用量、适用时的有效成分、处理原因、法律状态和上市资格影响
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per treatment event and per 1,000 kg marketable reference product after normalization
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_treatment_biosecurity_and_health_records`
- Sources: `asc-farm-standard-2025`
- Range: 暂定处理投入筛查估算
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 500
  - Unit: kg or L product/1,000 kg marketable product
  - Basis: 健康和水处理产品投入的宽泛首轮估算
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### 养成死亡、蜕壳、壳、污泥和残渣（`growout_mortalities_molts_shells_sludge_and_residues`）

此行记录在声明的过程和系统边界内选定的交换。

- Selected flow: Sludge `725c8f6e-7975-4155-a250-1f95ef70c508`; mortality, molt, shell, and organic aquaculture residue selected from site records
- Flow property / unit: Mass or count / kg or item
- Amount rule: 实测死亡只数、残渣质量、移除的生物污损、污泥、剔除物以及处置或回收路线
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per grow-out batch and per 1,000 kg marketable reference product after normalization
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_mortality_molt_residue_and_sludge_records`
- Sources: `asc-farm-standard-2025`
- Range: 暂定养成残渣筛查估算
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 5
  - Unit: kg residue/kg marketable product
  - Basis: 死亡、蜕壳、污泥和残渣质量相对于可销售输出的宽泛首轮估算
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

###### 直接水体排放和逃逸（`direct_waterborne_emissions_and_escapes`）

此行记录在声明的过程和系统边界内选定的交换。

- Selected flow: Site-specific waterborne emission or escape flow selected from foreground records
- Flow property / unit: Mass, count, or concentration-load / kg, g, item, or kg nutrient
- Amount rule: 根据水质记录、排水量、处理记录、已知逃逸只数和质量平衡检查实测或计算负荷
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg marketable reference product
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_water_energy_and_fuel_records`
- Sources: `asc-farm-standard-2025`
- Range: 暂定直接释放筛查估算
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 500
  - Unit: kg released material/1,000 kg marketable product
  - Basis: 直接水体释放、固体、营养物或逃逸负荷的宽泛首轮估算
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

#### Outputs

##### Product flows

###### 采收规格养殖岩龙虾和海螯虾（`harvest_size_farmed_rock_lobster_and_sea_crawfish`）

此行记录在声明的过程和系统边界内选定的交换。

- Selected flow: Farmed rock lobster and other sea crawfish, live, fresh or chilled `5ec1e534-2b3b-4ef7-a934-15d67185b9c7`
- Flow property / unit: Mass / kg
- Amount rule: 最终处理前实测采收规格活体质量，并保留只数、规格等级和产品基准
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: grow-out output entering harvest and final handling
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_harvest_and_product_mass_records`
- Range: 采收质量平衡 QA 校验
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1
  - Unit: kg/kg stocked biomass plus biomass gain
  - Basis: 扣除死亡、剔除和分级后的可采收生物量比例
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `qld-spiny-lobster-aquaculture-2009`, `asc-farm-standard-2025`

### Process: 采收、活养、冷藏和包装（`harvest_live_holding_chilling_and_packout`）

#### Inputs

##### Product flows

###### 活养水、冰、氧气和包装（`holding_water_ice_oxygen_and_packaging`）

此行记录在声明的过程和系统边界内选定的交换。

- Selected flow: Process water `ec205030-248c-496f-9cf2-06d9d26dc6ff`; Packaging materials, unspecified `7336a8ee-9e4d-49a6-9fe5-ce285f613245`; ice, oxygen, bands, and live-pack materials selected from site records
- Flow property / unit: Mass, volume, gas volume, or item count / kg, m3, L, m3 gas, or item
- Amount rule: 实测材料、水、冰、氧气和包装用量，并保留重复使用率、皮重和产品基准
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg marketable reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_live_holding_and_chilling_records`
- Sources: `codex-cxc-52-2003`, `asc-farm-standard-2025`
- Range: 暂定包装材料筛查估算
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 1000
  - Unit: kg material or water/1,000 kg marketable product
  - Basis: 活养水、冰、氧气和包装投入的宽泛首轮估算
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### 活养、冷藏和包装能源（`live_holding_chilling_and_packout_energy`）

此行记录在声明的过程和系统边界内选定的交换。

- Selected flow: Electricity `f872677d-2f66-428a-a94e-f0fba61231df`; diesel oil `9d258d75-6792-4f1c-9856-81602ed8f816` where used
- Flow property / unit: Energy or fuel quantity / kWh, MJ, L, or kg
- Amount rule: 用于活养、冷藏和包装的实测电力、燃料采购或分摊能源记录
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg marketable reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_energy_and_fuel_records`
- Sources: `asc-farm-standard-2025`
- Range: 暂定活养和包装能源筛查估算
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 20000
  - Unit: kWh or MJ-equivalent/1,000 kg marketable product
  - Basis: 活养、冷藏和包装能源使用的宽泛首轮估算
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### 包装剔除、死亡、废水和使用后包装（`packout_rejects_mortalities_wastewater_and_used_packaging`）

此行记录在声明的过程和系统边界内选定的交换。

- Selected flow: Sludge `725c8f6e-7975-4155-a250-1f95ef70c508`; packaging materials, wastewater, rejects, and organic residue selected from site records
- Flow property / unit: Mass, volume, or count / kg, m3, or item
- Amount rule: 实测剔除质量或只数、废水量、使用后包装质量以及处置或回收路线
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg marketable reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_mortality_molt_residue_and_sludge_records`
- Range: 暂定包装废物筛查估算
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 2
  - Unit: kg waste/kg marketable product
  - Basis: 剔除物、废水固体和使用后包装质量的宽泛首轮估算
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

最终处理默认不指定元素流。当研究范围要求或有实测数据时，加入制冷剂损失、废水排放或直接空气排放。

#### Outputs

##### Product flows

###### 可销售养殖岩龙虾和海螯虾参考产品（`marketable_farmed_rock_lobster_and_sea_crawfish_reference_product`）

此行记录在声明的过程和系统边界内选定的交换。

- Selected flow: Farmed rock lobster and other sea crawfish, live, fresh or chilled `5ec1e534-2b3b-4ef7-a934-15d67185b9c7`
- Flow property / unit: Mass / kg
- Amount rule: 分级和包装后的实测净可销售活、鲜或冷藏产品质量
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_harvest_and_product_mass_records`
- Range: 参考流身份
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1
  - Upper: 1
  - Unit: kg/kg reference product
  - Basis: PCR reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `asc-farm-standard-2025`

### Process: 交付至声明门点（`delivery_to_declared_gate`）

#### Inputs

##### Product flows

###### 交付燃料、电力、制冷服务和活运补给（`delivery_fuel_energy_and_live_transport_supplies`）

此行记录在声明的过程和系统边界内选定的交换。

- Selected flow: Diesel oil `9d258d75-6792-4f1c-9856-81602ed8f816`; electricity, ice, oxygen, water, refrigerant, or transport service selected from route records
- Flow property / unit: Fuel, energy, mass, volume, or transport service / L, kg, kWh, MJ, m3, or tonne-km
- Amount rule: 路线特定的实测燃料、能源、运输服务或补给用量，并保留距离、装载率、活运条件和分配基准
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per delivered 1,000 kg reference product or tonne-km where transport is modelled as service
- Basis kind: Transport service (`transport_service`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_delivery_and_route_records`
- Range: 暂定交付筛查估算
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 5000
  - Unit: tonne-km/1,000 kg delivered product
  - Basis: 交付运输服务的宽泛首轮估算
  - Basis kind: Transport service (`transport_service`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### 交付死亡、拒收产品和运输残渣（`delivery_mortalities_rejected_product_and_transport_residue`）

此行记录在声明的过程和系统边界内选定的交换。

- Selected flow: Sludge `725c8f6e-7975-4155-a250-1f95ef70c508`; mortality, rejected product, and transport residue selected from site records
- Flow property / unit: Mass, volume, or count / kg, m3, or item
- Amount rule: 实测交付损失、死亡只数、拒收质量、残渣数量和处置或回收路线
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per delivered 1,000 kg reference product
- Basis kind: Transport service (`transport_service`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_delivery_and_route_records`
- Range: 暂定交付损失筛查估算
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 0.5
  - Unit: kg loss/kg delivered product
  - Basis: 路线损失相对于交付产品的宽泛首轮估算
  - Basis kind: Transport service (`transport_service`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

交付默认不指定元素流。仅当建模方法要求在前景记录车辆直接排放，而不是通过上游燃料或运输过程记录时，加入直接车辆排放。

#### Outputs

##### Product flows

###### 已交付养殖岩龙虾和海螯虾（`delivered_farmed_rock_lobster_and_sea_crawfish`）

此行记录在声明的过程和系统边界内选定的交换。

- Selected flow: Farmed rock lobster and other sea crawfish, live, fresh or chilled `5ec1e534-2b3b-4ef7-a934-15d67185b9c7`
- Flow property / unit: Mass / kg
- Amount rule: 声明门点的交付净可销售质量
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: delivered product quantity
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_delivery_and_route_records`
- Range: 交付质量平衡 QA 校验
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1
  - Unit: kg/kg packed product loaded for delivery
  - Basis: 扣除路线损失后的交付产品比例
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `asc-farm-standard-2025`

## 7. 分配和共产品处理

应尽可能通过分别采集批次、池塘、池槽、笼、孵化、育苗、活养和包装记录来避免分配。同一前景系统生产多个可销售物种、规格等级、苗种、稚体、市场产品、壳、蜕壳或其他产品时，按以下层级处理：

1. 当记录可识别独立养殖单元、批次、物种、规格等级或处理批次时，使用物理拆分。
2. 当资源使用由实测生物量、只数、笼具占用、摄食量、水量、活养时长、吨公里或活养服务驱动时，使用因果物理分配。
3. 只有当物理拆分和因果物理分配不可行时，才使用经济分配；必须披露价格、期间、市场和敏感性。
4. 死亡、剔除物、蜕壳、废水、污泥和废包装默认作为废物流；只有在带有市场价值并作为可销售共产品离开系统时，才作为共产品处理。

野生岩龙虾、Homarus 龙虾、挪威海螯虾、不属于本 CPC 类别的淡水螯虾，以及加工甲壳类产品必须分离到各自 PCR 类别，或作为共产品进行明确分类披露。

## 8. 前景数据采集、计算和质量规则

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_biological_stocking_records` | `biological_stock_hatchery_nursery_and_stocking` | biological starting stock, accepted stock, stocking, transfers | hatchery logs, supplier invoices, collection records, movement permits, batch records | species, life stage, source, batch id, count, mass where available, mean size, health status, movement date, accepted count, rejected count | 从孵化、育苗、供应方、采集者、投放和转移记录采集 | kg, item, puerulus count, postlarval count, juvenile count | 每批次或每次转移 | 完整生产批次或报告期 | 进入声明生产路线的所有生物存量 | 按物种、生命阶段和批次汇总验收存量和损失后归一化到参考产品 | supplier document, hatchery log, collector record, health certificate, movement permit, count or weighing record |
| `cp_feed_records` | `biological_stock_hatchery_nursery_and_stocking`; `growout_and_husbandry` | feed, bait, live feed, natural-feed claim | feed invoices, recipes, feeding logs, cage or pond records | feed type, supplier, batch, wet/dry/as-fed basis, live-feed counts, quantity, feeding date, target life stage, zero-added-feed evidence where claimed | 从发票、孵化配方、投喂日志和养成记录采集 | kg, g, L, item, cage-day, pond-day, tank-day | 每次投喂或批次汇总 | 完整生产批次或报告期 | 纳入生产单元的所有饲料和天然饵料证据 | 按饲料类型和基准汇总；仅用实测水分或供应商数据转换 | invoice, recipe, feed log, natural-feed system record, mass or count measurement |
| `cp_water_energy_and_fuel_records` | all foreground processes | water, temperature, salinity, discharge, electricity, fuel, oxygenation, direct releases, escapes | water meter, pump log, salinity and temperature records, water-quality tests, energy invoices, fuel receipts, discharge records, escape logs | intake volume, exchange volume, recirculation, temperature, salinity, dissolved oxygen where measured, energy carrier, quantity, equipment or process, effluent volume, nutrient or solids concentration, escape count | 从仪表、监测日志、实验室测试、发票、设备日志和事件记录采集 | m3, kg, deg C, ppt, mg/L, kg load, kWh, MJ, L, item | 至少每批次，以及排放或逃逸事件发生时 | 完整生产批次或报告期 | 所有受控水、能源、燃料和直接释放系统 | 将取水、排放、能源、燃料和计算负荷归一化到参考产品；保留盐度和温度基准 | meter records, monitoring sheets, lab reports, invoice, fuel receipt, incident report |
| `cp_treatment_biosecurity_and_health_records` | `growout_and_husbandry` | health, disinfectant, treatment, biosecurity | treatment logs, veterinary records, chemical invoices, health plans | product name, active ingredient, dose, quantity, target unit, diagnosis or reason, legal status, date, withdrawal or harvest eligibility | 从处理记录、处方、健康计划和发票采集 | kg, L, g active ingredient, m3 gas | 每次处理事件 | 完整生产批次或报告期 | 所有纳入养殖单元和活养系统 | 按产品和有效成分汇总，并保留事件目的和法律状态 | treatment log, health plan, veterinary record, invoice |
| `cp_mortality_molt_residue_and_sludge_records` | all foreground processes | mortality, molts, shells, sludge, culls, residues, rejects | mortality logs, grading records, cleaning logs, waste transfer notes | count, mass, life stage, process, reason, disposal route, recovery route, date | 从死亡、清洗、分级和废物记录采集 | kg, item, m3 | 每次事件或批次汇总 | 完整生产批次或报告期 | 所有纳入生产和处理单元 | 按残渣类型和去向汇总；计算相对验收或可销售质量的损失比例 | mortality log, waste note, weighing record, disposal certificate |
| `cp_harvest_and_product_mass_records` | `growout_and_husbandry`; `harvest_live_holding_chilling_and_packout` | harvest-size output, reference product, product grade | harvest records, grading logs, sales records, packing records | harvest date, species, count, net mass, size grade, product state, mortality, culls, packed mass, gate | 从采收称重、分级、包装和销售记录采集 | kg, item, count per kg | 每次采收或包装批次 | 完整生产批次或报告期 | 参考流包括的所有产品批次 | 归一化前核对采收、包装、剔除和交付质量 | scale ticket, packing record, sales note, batch reconciliation |
| `cp_packaging_live_holding_and_chilling_records` | `harvest_live_holding_chilling_and_packout` | packaging, holding water, ice, oxygen, live transport preparation | packaging inventory, live tank logs, ice logs, oxygen logs | material type, item count, mass, reuse rate, water volume, oxygen quantity, ice mass, holding duration | 从库存、活养箱日志和包装记录采集 | kg, item, m3, L, m3 gas, hour | 每个包装批次 | 完整生产批次或报告期 | 所有最终处理和包装活动 | 按产品批次质量、活养时长或直接领用记录分摊 | inventory issue, live tank log, weighing record, oxygen invoice |
| `cp_delivery_and_route_records` | `delivery_to_declared_gate` | delivery transport and route losses | delivery log, vehicle record, fuel receipt, customer receipt | origin, destination, distance, product mass, vehicle or service, fuel, electricity, ice, oxygen, delivery condition, loss count or mass | 从交付、车辆、货运和签收记录采集 | km, tonne-km, L, kg, kWh, item | 每条交付路线 | 报告期内交付 | 纳入声明门点的所有交付路线 | 计算吨公里或直接路线清单，并归一化到交付质量 | route log, fuel receipt, freight invoice, delivery receipt |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_product_mass` | reference product | 净可销售产品质量 = 声明产品边界内包装或交付合格质量减去剔除和死亡 | `cp_harvest_and_product_mass_records`; `cp_packaging_live_holding_and_chilling_records`; `cp_delivery_and_route_records` when delivery is included | kg reference product |  |
| `calc_count_to_mass` | count-based records | mass = count x measured mean individual mass, 或 count / measured count per kg；保留抽样方法和等级 | `cp_biological_stocking_records`; `cp_harvest_and_product_mass_records` | kg equivalent mass |  |
| `calc_stock_acceptance_and_survival` | biological stock and grow-out | 验收或存活比例 = 同一生命阶段和批次的验收或存活只数/生物量除以输入只数/生物量 | `cp_biological_stocking_records`; `cp_mortality_molt_residue_and_sludge_records`; `cp_harvest_and_product_mass_records` | accepted stock, survival, loss, and residue indicators | `qld-spiny-lobster-aquaculture-2009`; `fisheries-puerulus-2026` |
| `calc_waterborne_load` | discharge and direct releases | load = discharge volume x measured concentration，并按记录进行单位和背景修正 | `cp_water_energy_and_fuel_records` | kg nutrient, solids, treatment residue, or other load | `asc-farm-standard-2025` |
| `calc_energy_allocation` | shared energy systems | 优先用直接仪表；否则按设备小时、批次时长、水量、笼具占用或产品质量分摊，并披露所选分摊键 | `cp_water_energy_and_fuel_records`; `cp_harvest_and_product_mass_records` | kWh, MJ, or fuel per reference flow | `asc-farm-standard-2025` |
| `calc_delivery_transport_service` | delivery | tonne-km = 交付产品吨数 x 路线距离 km；有直接路线记录时可用路线特定燃料替代吨公里 | `cp_delivery_and_route_records` | tonne-km or direct delivery inventory per reference flow |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_species_and_category_identity` | all datasets | 数据集必须识别物种或类群，并证明参考产品属于 CPC `04322`，而不是野生岩龙虾、Homarus 龙虾、挪威海螯虾或加工甲壳类类别。 | species records, classification mapping, product description, sales record |
| `dq_farmed_proof` | all datasets | 数据集必须通过孵化、育苗、养成、笼、池塘、池槽、牧场化或增殖记录证明受控养殖生产。 | stocking log, hatchery record, grow-out record, permit, production plan |
| `dq_mass_balance` | biological stock, harvest, reference product | 生物投入、死亡、剔除、残渣、采收、包装和交付产品记录必须在批次或报告期层面核对。 | batch reconciliation, scale tickets, mortality logs, packing records |
| `dq_water_and_energy_completeness` | water, discharge, energy, fuel | 水、水温、盐度、排放、电力、燃料、充氧和温控记录必须覆盖范围内全部前景过程。 | meter logs, invoices, monitoring records, allocation worksheet |
| `dq_treatment_and_biosecurity_traceability` | health and treatment inputs | 处理剂、消毒剂、麻醉剂、氧气、盐和水质投入必须保留目的、适用时的有效成分、法律状态和上市资格影响。 | treatment log, health plan, veterinary record |
| `dq_live_product_handling` | final product and delivery | 活养、冷藏、包装、交付时长以及死亡或拒收必须可追溯到最终产品批次。 | live tank log, pack-out record, delivery receipt |
| `dq_unresolved_uuid_disclosure` | any row with site-specific flow selection | 任何空白或通用流身份都必须在评审发布前披露，并在可用时替换为选定 Tiangong UUID。 | manifest review metadata, UUID review record |

## 9. 验证规则

| validation_id | Severity | Rule |
| --- | --- | --- |
| `val_reference_flow_uuid` | error | 参考产品流必须使用 `5ec1e534-2b3b-4ef7-a934-15d67185b9c7`，除非记录了同等 CPC `04322` 含义的已批准 Tiangong 替代。 |
| `val_reference_unit` | error | 参考量必须以 kg 表示，并使用 Mass `93a60a56-a3c8-11da-a746-0800200b9a66` 和 Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`。 |
| `val_farmed_not_wild` | error | 仅基于野生捕捞、野生卸港或捕捞后活养而无受控养殖生产的数据集不合规。 |
| `val_adjacent_categories` | error | Homarus 龙虾、挪威海螯虾、野生岩龙虾、冷冻、干制、盐渍、盐水浸泡、熟制、罐藏或其他加工甲壳类产品不得作为主参考产品报告在本 PCR 下。 |
| `val_required_qualifiers` | error | 必须提供物种或类群、养殖系统、生物起始条件、产品状态、规格或只数基准、声明门点和养殖证明。 |
| `val_collection_protocol_coverage` | error | 每个 `foreground_record` 或 `calculated_value` 前景清单行必须链接采集协议或计算规则。 |
| `val_mass_balance` | warning | 生物存量、死亡、残渣、采收、包装、剔除和交付质量应核对；无法解释的不平衡必须披露。 |
| `val_range_review` | warning | 推理估算范围是候选 QA 筛查，评审或发布使用前必须替换或说明。 |

## 10. 发布数据集画像

| Field | Value |
| --- | --- |
| dataset_role | 养殖岩龙虾和其他海螯虾前景生产数据集 |
| downstream_use | secondary_dataset; background_dataset when reviewed and geographically representative |
| allowed_use | 对声明门点的活、鲜或冷藏养殖岩龙虾和其他海螯虾进行 LCA 建模，并披露生产路线、产品状态和质量限定信息 |
| excluded_use | 野生岩龙虾和海螯虾；Homarus 龙虾；挪威海螯虾；冷冻、干制、盐渍、盐水浸泡、熟制、罐藏、仅肉制品、预制或保藏甲壳类产品；仅苗种生产；无单独建模的壳、蜕壳或残渣共产品 |
| required_metadata | canonical PCR id; CPC code; species or taxon group; culture system; biological starting condition; farmed production evidence; product form; size grade; mass basis; water temperature and salinity basis; feed regime or natural-feed claim; health and treatment disclosure; packaging state; declared gate; geography; reporting period; allocation method; unresolved UUID substitutions |
| required_quality_disclosure | 生物存量、饲料、水、能源、健康处理、死亡、残渣、产品质量、包装、交付和分配记录的来源与完整性；推理估算范围使用；缺失 Tiangong UUID；对默认边界的偏离 |
| update_trigger | 当 Tiangong 流身份、CPC 映射、已评审岩龙虾养殖证据、来源支撑范围或生产路线发生实质变化时更新 |

## 11. 数据来源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `fao-panulirus-homarus-factsheet` | official_guidance | FAO Fisheries and Aquaculture. Cultured Aquatic Species Information Programme: Panulirus homarus. https://www.fao.org/fishery/culturedspecies/panulirus_homarus/en | 物种范围、刺龙虾养殖路线、苗种、养成和产品身份背景 |
| `qld-spiny-lobster-aquaculture-2009` | literature | Jones, C. et al. Spiny lobster aquaculture development in Indonesia, Vietnam and Australia. Queensland Department of Primary Industries and Fisheries. https://era.dpi.qld.gov.au/id/eprint/2291/1/pr145-main_report-web-final.pdf | 眼幼体和稚体供应、育苗、养成系统、饲料、笼具和生产路线证据 |
| `fisheries-puerulus-2026` | literature | Sustainability of Puerulus Fisheries Supporting Spiny Lobster Aquaculture in Southeast Asia. Fishes 2026. https://www.mdpi.com/2410-3888/11/3/182 | 野外采集眼幼体依赖、苗种来源披露以及渔业-养殖接口风险 |
| `codex-cxc-52-2003` | standard | Codex Alimentarius. Code of Practice for Fish and Fishery Products, CXC 52-2003. https://www.fao.org/input/download/standards/10273/CXP_052e.pdf | 处理、卫生、活/鲜/冷藏水产品范围、贮存、运输和零售处理背景 |
| `asc-farm-standard-2025` | standard | Aquaculture Stewardship Council. ASC Farm Standard, ASC-STD-001, Version 1.0.1, 2025. https://programme-centre.asc-aqua.org/app/uploads/2025/08/ASC-STD-001-ASC-Farm-Standard-V1.0.1-Aug-2025.pdf | 水产养殖数据质量、环境管理、水质、能源、饲料、健康、福利、逃逸、生物固体和认证相关采集规则 |
