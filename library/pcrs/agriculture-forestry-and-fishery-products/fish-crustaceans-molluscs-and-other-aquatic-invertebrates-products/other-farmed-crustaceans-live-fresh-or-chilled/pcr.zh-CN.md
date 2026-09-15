---
pcr_id: pcr.agriculture-forestry-and-fishery-products.fish-crustaceans-molluscs-and-other-aquatic-invertebrates-products.other-farmed-crustaceans-live-fresh-or-chilled
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 其他养殖甲壳类，活、鲜或冷藏

## 1. 范围与适用性

本 PCR 用于构建其他养殖甲壳类活、鲜或冷藏产品前景数据包，适用于没有更具体养殖甲壳类 PCR 的情况。它覆盖声明的亲本、幼体、后期幼体、幼体、苗种、供应方种群，由报告运营方控制时的孵化和苗种培育，池塘、池槽、网箱、围栏、流水槽、循环水、咸淡水、海水、淡水、综合养殖或其他声明养殖系统，养成或育肥、收获、分级、活体暂养、冷藏、包装和在声明边界的放行。

覆盖产品包括除养殖蟹、龙虾、挪威海螯虾、岩龙虾和其他海螯虾、冷水虾和对虾、其他养殖虾和对虾以外的养殖甲壳类，产品状态为活、鲜或冷藏，并仍为未加工初级产品。排除产品包括野生甲壳类、野捕后仅暂养或冷藏的产品、已有更具体规范 PCR 的所有产品、冷冻、干制、盐渍、盐水浸渍、熟制、罐装、去壳、取肉、预制、保藏、观赏、作为单独投入销售的苗种，以及作为单独产品建模的壳或加工残余物。

这是兜底 PCR。合规数据集必须说明物种或物种组，以及为什么不适用更具体的养殖甲壳类 PCR。

## 2. 产品类别身份

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | `pcr.agriculture-forestry-and-fishery-products.fish-crustaceans-molluscs-and-other-aquatic-invertebrates-products.other-farmed-crustaceans-live-fresh-or-chilled` |
| classification_refs | CPC 3.0 `04392`, `Other farmed crustaceans, live, fresh or chilled` |
| covered_products | 未被更具体规范 PCR 覆盖，并以活、鲜或冷藏状态从声明养殖、苗种培育、养成或育肥系统销售的养殖甲壳类 |
| excluded_products | 养殖蟹；养殖龙虾；养殖挪威海螯虾；养殖岩龙虾和海螯虾；有具体 PCR 的养殖虾和对虾；野生甲壳类；冷冻、干制、盐渍、盐水浸渍、熟制、罐装、去壳、取肉、预制、保藏、观赏或苗种产品；作为单独产品的壳、蜕壳、死亡、废水和残余物 |
| representative_product | 在声明物种或物种组、养殖路线、市场规格、产品形态、暂养条件和边界下的活体或冷藏其他养殖甲壳类 |
| production_route | 亲本、幼体、后期幼体、幼体、苗种或供应方种群投入，受控孵化或苗种培育，养成或育肥管理，收获，分级，活体暂养或冷藏，包装和声明边界放行 |
| market_state | 已声明物种、兜底理由、苗种或亲本来源、养殖系统、产品基准、规格等级、暂养条件、包装状态和边界的活、鲜或冷藏养殖甲壳类 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 作为活、鲜或冷藏市场产品的其他养殖甲壳类 |
| How much | 1 kg |
| How well | 声明物种或物种组、养殖证明、兜底理由、养殖系统、活/鲜/冷藏状态、整只或声明产品基准、规格等级、收获和暂养条件以及边界 |
| How long or cycle | 一个养殖生产批次、育肥批次、收获批次或报告期，并归一化至可销售产品产出 |
| reference_flow_link | 见下方参考数量和产品流 |

| 字段 | 值 |
| --- | --- |
| Reference amount | 1 kg |
| Reference product flow | Crustaceans and Shellfish `429a82ee-b7ad-437e-9cfb-4c4530d82510` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | 物种或物种组；兜底理由；亲本、幼体、后期幼体、幼体、苗种、供应方或育肥种群来源；养殖系统；养殖证明或受控管理期；产品状态；整只、活、鲜、冷藏、软壳、蜕壳、育肥或声明产品基准；规格等级或每 kg 尾数；水分、沥水或不含冰基准；地理位置和声明边界；暂养或冷藏时长；饲料制度；水源、盐度和水交换；健康、生物安全、许可、认证和未解决的 Tiangong UUID 替代项 |

所选 Tiangong 参考流是显示名称较宽的 CPC 04392 候选身份。当 Tiangong 提供精确的 `Other farmed crustaceans, live, fresh or chilled` 流时，应替换它，同时保留本 PCR 身份。

质量是主要参考基准。计数、篮、箱、桶、活体池、池塘、网箱或规格等级记录只有在保留净质量、每 kg 尾数或平均个体质量、产品形态以及抽样或皮重方法时，才可使用。

## 4. 测量与单位规则

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 参考流必须表示为声明活、鲜或冷藏产品形态下的其他养殖甲壳类 kg。 |
| `fallback_identity_check` | all datasets | PCR selection evidence | declared records | 数据集元数据必须说明为什么不适用更具体的养殖甲壳类 PCR，并保留物种或物种组身份以便未来映射。 |
| `farmed_production_evidence` | all datasets | Record identity and production evidence | declared records | 数据集记录必须证明受控养殖、养成、苗种培育或育肥活动，而不是仅野捕后活体暂养、冷藏、分级或发运。 |
| `product_form_mass_basis` | whole, soft-shell, molted, fattened, live, fresh, or chilled records | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 产品质量必须说明活体整只重、冷藏整只重、软壳或蜕壳产品重、沥水重、不含冰质量或其他合同声明基准。只有在有实测得率证据时才可换算。 |
| `count_to_mass_conversion` | stocking, mortality, grading, harvest, sales, and count-grade records | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 基于尾数的记录必须包括每 kg 尾数或平均个体质量、规格等级、抽样方法和产品形态，然后才能归一化到 kg 参考产品。 |
| `life_stage_identity` | broodstock, eggs, larvae, post-larvae, juveniles, seed, molted animals, and transferred stock | Mass or count | kg, item, or life-stage count | 生命阶段记录必须保留物种、生命阶段、供应方或孵化场、批次、尾数、可测质量、健康状态和转运日期。 |
| `feed_mass_basis` | formulated feed, fresh bait, live feed, mollusc meat, trash fish, and supplementary feed | Mass | kg | 饲料记录必须说明湿基、干基、投喂原样、活饵或配合饲料基准。只有在有实测水分、供应方数据或保留养殖配方时才可在不同基准之间换算。 |
| `water_salinity_and_volume` | hatchery, nursery, grow-out, fattening, live holding, washing, chilling, and wastewater | Salinity, mass, or volume | ppt, kg, or m3 | 保留受控水量、盐度、水交换、补水、循环和排放基准。 |
| `energy_fuel_chemical_and_packaging_basis` | pumps, aeration, oxygenation, water exchange, filtration, lighting, chilling, live holding, boats, vehicles, chemicals, packaging, and ice | Energy, fuel, mass, volume, or item | kWh, MJ, L, kg, m3, or item | 在归一化到参考流前记录电力、燃料、氧气、化学品、包装、冰和能源载体原始单位。 |

## 5. 系统边界

默认边界覆盖前景控制的其他养殖甲壳类生产，直到声明的养殖场、收获、包装场、发运或交付边界：

1. 亲本、卵、幼体、后期幼体、幼体、苗种或供应方种群来源，包括由报告运营方控制的现场孵化和苗种培育，或由其他孵化场、采集者、捕捞者或养殖场供应时的外购种群披露。
2. 孵化、苗种培育、养成或育肥管理，包括投放、饲料、水取用和交换、曝气、增氧、过滤、盐度控制、健康管理、生物安全、相关蜕壳管理、死亡和直接控制的维护。
3. 收获、分级、清洗、活体暂养、冷藏、包装和声明边界放行。
4. 当参考流是超过养殖场、收获、发运或包装场边界的交付产品时，包括交付到声明边界。

资本品和长期基础设施只有在声明数据包范围要求时才纳入。购买苗种、幼体、幼体、饲料、包装、冰、氧气、电力、燃料、化学品和运输服务需要上游数据集，除非同一运营方控制并在前景包中报告其生产。

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | declared_broodstock_larval_post_larval_juvenile_seed_or_supplier_stocking_event |
| starting_condition_role | aquaculture_stock_identity_and_biological_starting_condition |
| product_classification_scope | current CPC 3.0 product category `04392`, `Other farmed crustaceans, live, fresh or chilled` |
| recursive_input_rule | 用于生产市场产品的养殖甲壳类亲本、幼体、后期幼体、幼体、苗种、蜕壳动物或育肥种群，作为声明生物起始条件记录，并披露供应方、孵化场、养殖场、生命阶段、来源和健康信息，而不是递归记录为成品参考产品输出 |
| upstream_dataset_requirement | 亲本、孵化、苗种、幼体、蜕壳种群、育肥种群、饲料或供应方数据集，或记录来源、物种、批次、尾数或质量、生命阶段、健康或生物安全状态、转运许可和认证或许可证据的文件 |
| disclosure | 披露物种或物种组、兜底理由、养殖系统、生物起始条件、养殖生产证据、投放密度、饲料制度、水源、盐度和水交换、曝气或增氧、健康处理、蜕壳和死亡记录、收获和暂养条件、产品形态、包装状态、声明边界以及未解决的 Tiangong UUID 替代项 |

## 6. 过程清单结构

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| hatchery_nursery_and_stocking | 孵化、苗种培育和投放 | required | 必须声明生物起始条件；由报告运营方控制的现场孵化和苗种培育行纳入 | foreground/upstream bridge | 进入养成或育肥的可成活幼体、后期幼体、幼体、苗种或投放甲壳类 |
| growout_and_fattening_husbandry | 养成和育肥管理 | required |  | foreground production | 最终处理前的收获规格甲壳类 |
| harvest_live_holding_chilling_and_packout | 收获、活体暂养、冷藏和包装出货 | required |  | foreground conditioning and gate release | 声明的可销售活、鲜或冷藏产品 |
| delivery_to_declared_gate | 交付到声明边界 | conditional | 当参考流是超过养殖场、收获、发运或包装场边界的交付产品时纳入 | foreground transport | 声明边界处的已交付产品 |

### Process: 孵化、苗种培育和投放 (`hatchery_nursery_and_stocking`)

#### Inputs

##### Product flows

###### 生物种群投入 (`biological_stock_input`)

此行记录在声明的过程和系统边界内选定的交换。

- 选定流：Broodstock (aquaculture organisms) `dca0167d-f48e-4260-bebe-0bb5687f08d6`；路线特定幼体、后期幼体、幼体、苗种或育肥种群按前景记录选择
- 流属性/单位：带生命阶段的质量或尾数 / kg、item 或 stage count
- 数量规则：计量尾数、可测质量、生命阶段以及进入孵化、苗种培育、养成或育肥的接受数量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 可销售参考产品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_biological_stocking_records`
- 来源：`asc-farm-standard-2025`
- 数量范围：暂定生物种群筛选估计
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0.001
  - 上限：10
  - 单位：kg biological stock live mass/kg marketable product
  - 基准：相对于可销售产出的亲本、苗种、幼体或育肥种群活体质量宽泛首轮估计
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 孵化和苗种培育投入 (`hatchery_and_nursery_inputs`)

此行记录在声明的过程和系统边界内选定的交换。

- 选定流：Fry feed `3b09065d-9675-4dad-8d0e-1035b5cca324`; Fresh bait `40685ba7-0e7f-41bc-92b0-cec9e6696f19`; Process water `ec205030-248c-496f-9cf2-06d9d26dc6ff`; Electricity `f872677d-2f66-428a-a94e-f0fba61231df`；路线特定活饵、海水、氧气、化学品和苗种培育材料按场址记录选择
- 流属性/单位：质量、体积、能量或计数 / kg、g、L、m3、kWh、dose 或 item
- 数量规则：按批次、生命阶段和基准计量孵化饲料、活饵、水、电力、氧气、化学品和苗种培育材料
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每个孵化或苗种培育批次，并在归一化后每 1,000 kg 可销售参考产品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_hatchery_nursery_input_records`
- 来源：`asc-feed-standard-2026`, `asc-farm-standard-2025`
- 数量范围：孵化和苗种培育投入暂定筛选估计
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0
  - 上限：5000
  - 单位：kg, m3, kWh, dose, or item/1,000 kg marketable product
  - 基准：孵化和苗种培育投入的宽泛首轮检查
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### Waste flows

###### 孵化死亡、蜕壳、污泥和残余物 (`hatchery_mortalities_molts_sludge_and_residue`)

此行记录在声明的过程和系统边界内选定的交换。

- 选定流：Sludge `725c8f6e-7975-4155-a250-1f95ef70c508`；路线特定死亡、蜕壳、壳、饲料残余、生物滤池固体和剔除种群按场址记录选择
- 流属性/单位：质量或尾数 / kg 或 item
- 数量规则：计量死亡尾数、残余物质量、污泥、剔除种群和处置或回收路线
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每个孵化或苗种培育批次，并在归一化后每 1,000 kg 可销售参考产品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_mortality_residue_and_discharge_records`
- 数量范围：孵化残余物暂定筛选估计
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：5
  - 单位：kg residue/kg accepted seed or stocked biomass
  - 基准：孵化和苗种培育死亡、蜕壳、壳、污泥和残余物的宽泛检查
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

#### Outputs

##### Product flows

###### 进入养成或育肥的已接受种群 (`accepted_stock_for_growout_or_fattening`)

此行记录在声明的过程和系统边界内选定的交换。

- 选定流：按前景记录选择路线特定其他养殖甲壳类苗种或幼体
- 流属性/单位：质量或尾数 / kg 或 item
- 数量规则：接收、孵化、苗种培育、分级、驯化和转运损失后的已接受种群计算值
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：进入养成或育肥的已接受种群
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_biological_stocking_records`
- 数量范围：种群接受质量平衡 QA 校验
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1
  - 单位：kg/kg biological stock input
  - 基准：接收、孵化、苗种培育、分级、驯化和转运后的已接受种群比例
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

### Process: 养成和育肥管理 (`growout_and_fattening_husbandry`)

#### Inputs

##### Product flows

###### 养成饲料、水、能源和管理投入 (`growout_feed_water_energy_and_husbandry_inputs`)

此行记录在声明的过程和系统边界内选定的交换。

- 选定流：Fresh bait `40685ba7-0e7f-41bc-92b0-cec9e6696f19`; Fry feed `3b09065d-9675-4dad-8d0e-1035b5cca324`; Process water `ec205030-248c-496f-9cf2-06d9d26dc6ff`; Electricity `f872677d-2f66-428a-a94e-f0fba61231df`; Diesel oil `9d258d75-6792-4f1c-9856-81602ed8f816`；路线特定饲料、饵料、种群、池塘化学品、水、氧气、燃料和养殖材料按场址记录选择
- 流属性/单位：质量、体积、能量、燃料或件数 / kg、m3、kWh、L、MJ、dose 或 item
- 数量规则：按批次和养殖单元计量投放生物量、饲料、饵料、水、能源、燃料、氧气、化学品、养殖材料和场址服务投入
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每个养成或育肥批次，并在归一化后每 1,000 kg 可销售参考产品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_growout_husbandry_records`
- 来源：`asc-feed-standard-2026`, `asc-farm-standard-2025`
- 数量范围：养成投入暂定筛选估计
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0
  - 上限：10000
  - 单位：kg, m3, kWh, L, MJ, dose, or item/1,000 kg marketable product
  - 基准：饲料、水、能源、燃料、化学品和养殖材料投入的宽泛首轮检查
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### Waste flows

###### 死亡、蜕壳、壳、污泥、排放和逃逸 (`mortalities_molts_shells_sludge_discharge_and_escapes`)

此行记录在声明的过程和系统边界内选定的交换。

- 选定流：Sludge `725c8f6e-7975-4155-a250-1f95ef70c508`；路线特定死亡、蜕壳、壳、污泥、废水和逃逸流按场址记录选择
- 流属性/单位：质量、体积或尾数 / kg、m3 或 item
- 数量规则：计量死亡尾数、蜕壳或壳质量、污泥、废水、相关逃逸、处置路线、回收路线和受纳环境
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每个养成或育肥批次，并在归一化后每 1,000 kg 可销售参考产品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_mortality_residue_and_discharge_records`
- 来源：`asc-farm-standard-2025`
- 数量范围：养成残余物暂定筛选估计
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：5
  - 单位：kg residue/kg marketable product
  - 基准：死亡、蜕壳、壳、污泥、排放和逃逸的宽泛检查
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

#### Outputs

##### Product flows

###### 收获规格养殖甲壳类生物量 (`harvest_size_farmed_crustacean_biomass`)

此行记录在声明的过程和系统边界内选定的交换。

- 选定流：Crustaceans and Shellfish `429a82ee-b7ad-437e-9cfb-4c4530d82510`
- 流属性/单位：质量 / kg
- 数量规则：投放、生长、死亡、逃逸、蜕壳或壳损失和分级后的收获规格生物量计算值
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：进入最终处理的收获规格生物量
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_harvest_product_packout_records`
- 数量范围：收获生物量质量平衡 QA 校验
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：50
  - 单位：kg harvest-size biomass/kg stocked biomass
  - 基准：生长、成活和育肥质量平衡的宽泛检查
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

### Process: 收获、活体暂养、冷藏和包装出货 (`harvest_live_holding_chilling_and_packout`)

#### Inputs

##### Product flows

###### 收获甲壳类和最终处理投入 (`harvested_crustaceans_and_final_handling_inputs`)

此行记录在声明的过程和系统边界内选定的交换。

- 选定流：Crustaceans and Shellfish `429a82ee-b7ad-437e-9cfb-4c4530d82510`; Packaging, unspecified `7336a8ee-9e4d-49a6-9fe5-ce285f613245`; Process water `ec205030-248c-496f-9cf2-06d9d26dc6ff`; Electricity `f872677d-2f66-428a-a94e-f0fba61231df`；路线特定冰、氧气、活体包装材料、制冷剂、箱、内衬和托盘按场址记录选择
- 流属性/单位：质量、体积、能量或件数 / kg、m3、kWh 或 item
- 数量规则：计量收获生物量、包装、冰、清洗、活体暂养氧气、电力、制冷剂服务和发运准备数量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_harvest_product_packout_records`
- 来源：`codex-cxc-52-2003`, `asc-farm-standard-2025`
- 数量范围：最终处理投入 QA 校验
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：1
  - 上限：5000
  - 单位：kg, m3, kWh, or item/1,000 kg marketable product
  - 基准：收获生物量、包装、冰、水、活体暂养和冷藏投入的宽泛检查
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### Waste flows

###### 处理剔除物、死亡、壳、废水和包装废物 (`handling_rejects_mortalities_shell_wastewater_and_packaging_waste`)

此行记录在声明的过程和系统边界内选定的交换。

- 选定流：Sludge `725c8f6e-7975-4155-a250-1f95ef70c508`；路线特定剔除甲壳类、死亡、壳、废水、包装废物和残余物按场址记录选择
- 流属性/单位：质量或体积 / kg 或 m3
- 数量规则：计量剔除产品、处理损失、死亡、壳或蜕壳残余物、废水、包装废物、处置路线、回收路线和受纳环境
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_mortality_residue_and_discharge_records`
- 数量范围：最终处理残余物 QA 校验
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：5
  - 单位：kg residue/kg marketable product
  - 基准：剔除、死亡、壳、废水、包装废物和残余物的宽泛检查
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

#### Outputs

##### Product flows

###### 可销售活、鲜或冷藏其他养殖甲壳类 (`marketable_live_fresh_or_chilled_other_farmed_crustacean`)

此行记录在声明的过程和系统边界内选定的交换。

- 选定流：Crustaceans and Shellfish `429a82ee-b7ad-437e-9cfb-4c4530d82510`
- 流属性/单位：质量 / kg
- 数量规则：在声明分级、冷藏、沥水、包装皮重排除和产品形态归一化后的固定参考输出
- 数值来源模式：固定值（`fixed_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：1 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：身份引用（`identity_reference`）
- 数量范围：固定参考输出 QA 校验
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：1
  - 上限：1
  - 单位：kg/kg reference product
  - 基准：固定参考流输出
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：身份引用（`identity_reference`）

### Process: 交付到声明边界 (`delivery_to_declared_gate`)

#### Inputs

##### Product flows

###### 交付燃料和活体或冷藏交付支持 (`delivery_fuel_and_live_or_chilled_delivery_support`)

此行记录在声明的过程和系统边界内选定的交换。

- 选定流：Diesel oil `9d258d75-6792-4f1c-9856-81602ed8f816`; Electricity `f872677d-2f66-428a-a94e-f0fba61231df`；路线特定运输服务、冰、氧气、活体暂养水、制冷剂服务或可重复使用包装支持按场址记录选择
- 流属性/单位：燃料、能量、质量、体积或运输服务 / L、MJ、kWh、kg、m3 或 tonne-km
- 数量规则：仅当声明参考流交付超过养殖场、收获、发运或包装场边界时纳入；记录距离、方式、装载率、活体或冷藏条件和相关返程物流
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 1,000 kg 已交付参考产品或 tonne-km
- 基准类型：运输服务（`transport_service`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_delivery_records`
- 数量范围：交付暂定筛选估计
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0
  - 上限：5000
  - 单位：tonne-km/1,000 kg reference product
  - 基准：交付纳入范围时的宽泛首轮交付活动检查
  - 基准类型：运输服务（`transport_service`）
  - 证据类型：推理估算（`reasoned_estimate`）

#### Outputs

##### Product flows

###### 声明边界处的已交付其他养殖甲壳类 (`delivered_other_farmed_crustacean_at_declared_gate`)

此行记录在声明的过程和系统边界内选定的交换。

- 选定流：Crustaceans and Shellfish `429a82ee-b7ad-437e-9cfb-4c4530d82510`
- 流属性/单位：质量 / kg
- 数量规则：声明边界处的交付质量，不包括运输包装皮重和冰，除非合同将其作为产品基准的一部分
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：已交付参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_delivery_records`
- 数量范围：交付产品质量 QA 校验
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：1
  - 上限：1
  - 单位：kg/kg delivered reference product
  - 基准：经过路线分配和产品基准归一化后的交付参考产品质量
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：由采集记录计算（`calculated_from_collection`）

## 7. 分配与共产品处理

| allocation_id | Applies to | Rule | Required data | Source |
| --- | --- | --- | --- | --- |
| `single_reference_product_default` | marketable live, fresh, or chilled other farmed crustacean output | 除非壳、蜕壳、死亡、残余物或加工输出被有意回收为共产品，否则将声明参考产品作为唯一参考产品。 | 可销售质量、剔除质量、回收共产品质量、目的地，以及声明共产品时的收入或物理关系 | `mass-balance-identity` |
| `fallback_scope_priority` | all datasets | 如果该物种或产品状态存在更具体的规范养殖甲壳类 PCR，则使用该 PCR 而不是本兜底类别。 | 物种、路线、产品状态、分类映射和 PCR 选择说明 | `mass-balance-identity` |
| `shared_system_allocation` | multi-species, multi-lot, polyculture, or shared-service farms | 共享种群、饲料、水、电力、燃料、氧气、化学品、包装和基础设施，应先按直接计量、批次日志、生物量-时间、池塘-时间、网箱-时间、包装件数或其他声明物理驱动因子分配，再使用经济分配。 | 计量表、服务日志、池塘或网箱占用、生物量-时间、收获质量和分配驱动因子 | `asc-farm-standard-2025` |

## 8. 前景数据采集、计算与质量规则

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_biological_stocking_records` | `hatchery_nursery_and_stocking` | biological stock, life stage, accepted stocking | hatchery log, supplier invoice, permit, transfer log, stocking log, mortality log | species, n.e.c. justification, supplier, life stage, count, mean mass, total mass, transfer route, stocking date, pond/cage/tank, accepted count, accepted mass, transfer mortality | 批次记录与养殖单元库存核对 | kg, item, date, permit id | 每次投放事件 | 完整报告期或生产周期 | hatchery, supplier, transfer route, pond, cage, tank, or farm site | 来源种群加转入量减死亡和剔除量，与已接受投放生物量核对；归一化到可销售产出 | 供应方文件、许可、转运日志、养殖单元库存、死亡记录和负责人签字 |
| `cp_hatchery_nursery_input_records` | `hatchery_nursery_and_stocking` | feed, live feed, water, energy, chemicals, nursery materials | feed invoice, live-feed log, water meter, electricity meter, chemical log, nursery log | feed type, supplier, mass, basis, water, salinity, electricity, oxygen, chemical, life stage, batch, culture unit | 发票、计量表、孵化日志和供应方声明 | kg, m3, kWh, L, dose, item, date | 每个批次和每月核对 | 孵化和苗种培育期 | hatchery, nursery, tank, pond, or supplier | 按批次和基准汇总；只有在有实测水分、供应方或配方证据时换算 | 发票、日志、计量读数、供应方规格和操作员复核 |
| `cp_growout_husbandry_records` | `growout_and_fattening_husbandry` | stock, feed, bait, water, energy, fuel, chemicals, husbandry inputs | farm log, feed log, water meter, fuel invoice, electricity meter, chemical log, treatment record | stocked biomass, feed, bait, water, salinity, electricity, fuel, oxygen, chemical, treatment, culture unit, dates | 养殖日志、计量表、发票和处理记录 | kg, m3, kWh, L, MJ, dose, item | 每个批次和每月核对 | 完整养成或育肥周期 | pond, cage, tank, raceway, RAS, or farm site | 共享记录按直接计量、批次日志、生物量-时间、养殖单元-时间或声明物理驱动因子分配 | 养殖日志、发票、计量读数、分配工作表和主管复核 |
| `cp_harvest_product_packout_records` | `growout_and_fattening_husbandry`; `harvest_live_holding_chilling_and_packout` | harvest biomass, product form, packaging, marketable output | harvest log, grading sheet, live-holding log, temperature log, packout record, sales note | harvest date, species, culture unit, live mass, product form, count, size grade, chilled or live state, packaging, ice, rejected mass, marketable mass, destination | 校准秤、分级记录、温度日志、销售记录和包装场核对 | kg, item, grade, date | 每次收获和包装批次 | 完整报告期或周期 | harvest site, live-holding unit, packhouse, or dispatch gate | 收获生物量加采购量减剔除和残余物，与可销售产出核对；全部流归一化到 1 kg 参考产品 | 秤校准、收获单、包装记录、发运记录和销售核对 |
| `cp_mortality_residue_and_discharge_records` | all foreground processes | mortalities, molts, shells, sludge, wastewater, escapes, packaging waste | mortality log, residue log, discharge record, waste ticket, escape report | date, species, count, mass, cause, culture unit, fate, disposal route, recovery route, receiving environment | 养殖记录、事故报告、废物票据和排放记录 | kg, m3, item, date | 每次事件和每月核对 | 完整报告期或周期 | culture unit, hatchery, harvest area, packhouse, or waste route | 按去向汇总和分类；核对种群、残余物和产品质量；归一化到参考输出 | 死亡日志、废物转运单、排放文件、事故记录和主管复核 |
| `cp_delivery_records` | `delivery_to_declared_gate` | delivered product, transport energy, live or chilled delivery condition | delivery note, transport invoice, fuel record, route plan, temperature or live-holding log | origin, destination, distance, mode, load mass, fuel, electricity, ice, oxygen, temperature, live-holding duration, return logistics | 承运文件、车辆日志、计量记录和发运核对 | kg, km, tonne-km, L, kWh, h, deg C | 每条交付路线 | 声明范围内的交付期间 | delivery route, vehicle, vessel, or carrier | 计算 tonne-km，并按装载质量、距离、温控区域和相关返程物流分配燃料或服务 | 承运发票、路线记录、温度日志和发运签字 |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `normalize_to_reference_product` | all inventory rows | normalized amount = collected amount / marketable reference product mass，并保留单位和产品形态基准 | collected amount, marketable product mass, product basis | kg, kWh, L, item, m3, or tonne-km per kg reference product | `mass-balance-identity` |
| `stock_acceptance_balance` | stocking and transfer | accepted stocked biomass = source stock mass + transferred-in mass - transfer mortalities - rejected stock - documented transfer losses | source stock, transfers, mortalities, rejects, transfer loss | accepted stocked biomass | `mass-balance-identity` |
| `growth_and_survival_balance` | grow-out and fattening | harvest-size biomass = stocked biomass + biological growth - mortalities - escapes - rejects，并与收获记录校验 | stocked biomass, feed, mortalities, escapes, harvest records | harvest-size biomass and survival disclosure | `asc-farm-standard-2025` |
| `product_form_yield` | harvested and packed product | marketable product mass = harvested mass - rejected mass - mortality mass - drainage, ice, tare, and handling losses according to declared product basis | harvest mass, rejected mass, product-form records, packout records | marketable live, fresh, or chilled mass | `codex-cxc-52-2003` |
| `delivery_tonne_kilometres` | delivered reference product | tonne-km = delivered product mass in tonnes x one-way or contract-declared route distance；按装载占比分配活体暂养或温控投入 | delivered mass, distance, route, load factor, temperature or live-holding condition | tonne-km and delivered product inventory | `mass-balance-identity` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | reference product and biological stock | 必须明确物种或物种组、兜底理由、养殖状态、生物起始条件、养殖路线、产品形态和声明边界。 | 参考流元数据、投放记录、PCR 选择说明、收获记录以及销售或发运记录 |
| `dq_mass_balance` | stock, feed, mortality, harvest, and packout | 投放、生长、死亡、逃逸、蜕壳或壳残余、收获、剔除和可销售产品记录必须在声明容差内核对；无法解释的差异需要披露。 | 质量平衡工作表、称重单、养殖单元记录、包装记录和主管复核 |
| `dq_feed_and_water_basis` | feed, bait, water, and chemicals | 必须明确饲料和饵料基准、水盐度和交换、处理化学品以及排放路线。 | 发票、饲料声明、养殖日志、水质日志、处理记录和排放记录 |
| `dq_temporal_coverage` | all foreground rows | 数据必须覆盖完整生产、养成、育肥和最终处理期，或披露部分周期、部分批次或代理覆盖。 | 报告日历、批次记录、收获记录和覆盖声明 |
| `dq_boundary_disclosure` | all datasets | 数据集必须披露上游种群、饲料、水、包装、交付、资本品和基础设施是前景、链接上游数据集，还是按范围排除。 | 数据集边界声明、供应方记录、上游数据集链接和范围声明 |

## 9. 验证规则

| rule_id | Rule | Severity | Failure message |
| --- | --- | --- | --- |
| `val_reference_flow_uuid` | 参考产品流 UUID 等于 `429a82ee-b7ad-437e-9cfb-4c4530d82510`，除非记录了更具体的 Tiangong CPC 04392 养殖甲壳类产品流。 | error | 参考流必须使用候选 CPC 04392 甲壳类身份，或记录经审查的替代项。 |
| `val_fallback_scope` | 数据集说明为什么没有更具体的养殖甲壳类 PCR 适用。 | error | 其他养殖甲壳类兜底 PCR 需要物种和 PCR 选择理由。 |
| `val_farmed_proof` | 数据集具有超过野捕和捕后处理的受控养殖、苗种培育、养成或育肥证据。 | error | 仅野捕属于野生甲壳类 PCR，不属于本养殖产品 PCR。 |
| `val_product_state` | 产品状态为活、鲜或冷藏，并排除冷冻、干制、盐渍、盐水浸渍、预制、保藏、观赏或加工产品。 | error | 产品状态超出其他养殖甲壳类活、鲜或冷藏 PCR 范围。 |
| `val_mass_basis` | 产品质量基准声明为活、鲜、冷藏、沥水、不含冰、整只、软壳、蜕壳或其他已说明基准。 | error | 产品质量基准缺失或不清晰。 |
| `val_structured_sync` | 编辑后从双语 Markdown 重新生成 `structured.yaml`。 | error | 结构化投影与已编写 PCR Markdown 不同步。 |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 其他活、鲜或冷藏养殖甲壳类的前景生产数据集 |
| downstream_use | `secondary_dataset`; `background_dataset`; 在保留养殖记录时作为 process 或 lifecyclemodel 构建的前景参考 |
| allowed_use | 对声明的其他养殖甲壳类活、鲜或冷藏产品，在养殖场、收获、发运、包装场或交付边界进行 LCA 建模 |
| excluded_use | 已被更具体甲壳类 PCR 覆盖的产品；野生甲壳类；冷冻、干制、熏制、盐渍、盐水浸渍、熟制、罐装、去壳、取肉、预制、保藏、观赏、苗种、壳、蜕壳、死亡、废水或残余物产品；没有单独审查方法的生态系统服务声明 |
| required_metadata | canonical PCR id；CPC 3.0 代码；物种或物种组；兜底理由；养殖状态；生物起始条件；养殖系统；投放日期和生物量；产品形态；规格等级；活/鲜/冷藏状态；饲料和水基准；死亡和排放披露；收获和暂养条件；包装状态；声明边界；地理位置；报告期；数据所有者；未解决 UUID 替代项 |
| required_quality_disclosure | 候选参考流说明、兜底 PCR 理由、养殖生产证据、质量平衡闭合、饲料和水基准、时间覆盖、分配基准、上游数据集链接、缺失前景记录、代理行，以及仅用于 QA 筛选的推理估算范围 |
| update_trigger | Tiangong 中新增精确 CPC 04392 产品、物种特定甲壳类、幼体、幼体、饲料、饵料、水、氧气、化学品、蜕壳、壳、死亡、残余物、包装、冰、制冷剂或交付服务流身份；关于饲料转化、成活率、燃料、水交换、化学品、包装或冷藏范围的经审查定量证据；新增可替代本兜底的具体 PCR；Codex、ASC、FAO 或法律要求更新；分类映射变化 |

## 11. 数据来源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `codex-cxc-52-2003` | standard | Codex Alimentarius Code of Practice for Fish and Fishery Products, CXC 52-2003, https://www.fao.org/input/download/standards/10273/CXP_052e.pdf | 活、鲜、冷藏甲壳类处理、卫生、运输和产品状态背景 |
| `asc-farm-standard-2025` | standard | Aquaculture Stewardship Council, ASC Farm Standard v1.0.1, 2025, https://programme-centre.asc-aqua.org/app/uploads/2025/08/ASC-STD-001-ASC-Farm-Standard-V1.0.1-Aug-2025.pdf | 养殖场管理、可追溯性、死亡、逃逸、健康、福利和环境披露 |
| `asc-feed-standard-2026` | standard | Aquaculture Stewardship Council, ASC Feed Standard v1.2 update, https://asc-aqua.org/producers/get-certified-feed-mill/asc-feed-standard-v1-2-update/ | 饲料供应方和成分披露背景 |
| `mass-balance-identity` | method_factor | PCR internal mass-balance identity: output equals measured inputs plus biological growth minus mortalities, escapes, rejects, and losses under declared product basis | 归一化、分配、种群平衡、得率和交付计算 |
