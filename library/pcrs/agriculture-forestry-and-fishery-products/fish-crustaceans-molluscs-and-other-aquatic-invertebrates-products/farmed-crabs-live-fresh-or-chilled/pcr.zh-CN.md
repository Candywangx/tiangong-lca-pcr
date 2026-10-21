---
pcr_id: pcr.agriculture-forestry-and-fishery-products.fish-crustaceans-molluscs-and-other-aquatic-invertebrates-products.farmed-crabs-live-fresh-or-chilled
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 养殖蟹，活、鲜或冷藏

## 1. 范围与适用性

本 PCR 用于构建 CPC 3.0 `04312` 类别下养殖蟹的前景数据包，产品上市状态为活、鲜或冷藏。适用范围包括蟹类水产养殖路线中的亲蟹或苗种来源、育苗、暂养、养成、由报告主体控制投喂和管理周期的育肥、收获、分级、活体暂养、冷藏、包装，以及在声明门点放行。

覆盖系统可包括池塘、围栏、网箱、单体盒、循环水养殖系统、池槽、咸淡水系统、依法许可的红树林边缘系统、多养种混养，以及声明的一体化养殖系统。不适用产品包括野捕蟹、捕捞后仅暂养或分级的野生蟹、冷冻、干制、盐渍、盐水浸渍、熟制、罐装、拆肉、蟹黄单独产品、调制或保藏蟹产品、作为单独养殖投入出售的蟹苗，以及作为单独产品建模的蟹壳或加工残余物。

合规数据集必须提供由前景主体控制的养殖、育肥、育苗或养成记录。野捕后仅进行活体暂养、冷藏、分级或发运的活动不属于本 PCR，应归入相应野生蟹类别。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | `pcr.agriculture-forestry-and-fishery-products.fish-crustaceans-molluscs-and-other-aquatic-invertebrates-products.farmed-crabs-live-fresh-or-chilled` |
| classification_refs | CPC 3.0 `04312`, `Farmed crabs, live, fresh or chilled` |
| covered_products | 来自声明水产养殖、育苗、养成或育肥系统，并以活、鲜或冷藏状态销售的养殖蟹 |
| excluded_products | 野捕蟹；捕捞后仅暂养、冷藏、分级或发运的野生蟹；冷冻、干制、盐渍、盐水浸渍、熟制、罐装、拆肉、蟹黄单独产品、调制或保藏蟹产品；作为苗种出售的蟹苗；作为单独产品的蟹壳、蜕壳和残余物 |
| representative_product | 达到声明商品规格和声明产品形态的活体或冷藏养殖蟹 |
| production_route | 亲蟹或苗种供应、受报告主体控制的育苗或暂养、养成或育肥管理、收获、分级、活体暂养或冷藏、包装，以及声明门点放行 |
| market_state | 活、鲜或冷藏蟹，并声明物种、苗种或亲蟹来源、养殖系统、规格等级、整只或声明产品基准、暂养或冷藏条件、包装状态和门点 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 作为活、鲜或冷藏商品的养殖蟹 |
| How much | 1 kg |
| How well | 声明物种或物种组、养殖证据、养殖系统、活/鲜/冷藏状态、整只或声明产品基准、规格等级、收获和暂养条件，以及门点 |
| How long or cycle | 归一化至适销产品输出的一个养殖生产批次、育肥批次、收获批次或报告期 |
| reference_flow_link | 见下方参考数量和产品流 |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 kg |
| 参考产品流 | Farmed crabs, live, fresh or chilled `08e7abb8-1abd-4a3f-86ae-991411345115` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | species or species group; broodstock, megalopa, juvenile, soft-shell, fattening, or stocked-crab source; culture system; farmed proof or controlled husbandry period; product state; whole, live, fresh, chilled, soft-shell, fattened, or declared product basis; size grade or count per kg; sex or maturity class when commercially material; moisture or drainage basis; geography and declared gate; holding or chilling duration; feed regime; water salinity and exchange; health, biosecurity, permit, or certification status |

构建前景数据包时，`必需限定信息` 中列出的信息应在数据集元数据、过程说明、参考流备注、产品说明或等效数据包字段中明确声明。缺失必需限定信息的数据包视为参考流定义不完整。

质量是主要参考基准。按只数、篮、箱、桶、活体暂养槽或规格等级记录的数据，只有在保留净质量、每 kg 只数或平均个体质量、产品形态、抽样或皮重方法时，才可用于归一化。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | 参考产品 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 参考流必须表示为声明活、鲜或冷藏产品形态下的 kg 养殖蟹。 |
| `farmed_production_evidence` | 全部数据集 | 记录身份和生产证据 | 声明记录 | 数据集记录必须证明受控水产养殖、养成、暂养或育肥活动，而不是野捕后仅暂养、冷藏、分级或发运。 |
| `product_form_mass_basis` | 整只、软壳、育肥、活、鲜或冷藏记录 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 产品质量必须声明活体整只质量、冷藏整只质量、软壳蟹产品质量、育肥蟹质量、沥干质量或其他合同声明基准。不同基准之间只能用实测得率证据转换。 |
| `count_to_mass_conversion` | 投苗、死亡、分级、收获、销售和按只数规格记录 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 按只数记录的数据在归一化至 kg 参考产品前，必须包含每 kg 只数或平均个体质量、规格等级、抽样方法和产品形态。 |
| `life_stage_identity` | 亲蟹、卵、幼体、大眼幼体、幼蟹、软壳蟹和转移存量 | 质量或只数 | kg、item 或阶段只数 | 生命阶段记录必须保留物种、生命阶段、供应商或育苗场、批次、只数、可测质量、健康状态和转移日期。 |
| `feed_mass_basis` | 杂鱼、贝肉、配合饲料、活饵和补充饲料 | 质量 | kg | 饲料记录必须声明湿基、干基、投喂基、活饵或配合饲料基准。不同基准之间只能用实测水分、供应商数据或保留的养殖配方转换。 |
| `water_salinity_and_volume` | 育苗、暂养、养成、育肥、活体暂养、清洗、冷藏和废水 | 盐度、质量或体积 | ppt、kg 或 m3 | 保留受控用水体积、盐度、换水量、补水量、循环水和排放基准。 |
| `energy_and_fuel_inventory` | 水泵、曝气、增氧、换水、过滤、照明、冷藏、活体暂养、收获、船舶、车辆和配送 | 能源或燃料数量 | kWh、MJ、L 或 kg | 在归一化至参考流之前，记录原始电力、燃料、氧气或能源载体单位。 |
| `chemical_and_health_treatment_basis` | 消毒剂、益生菌、药物、石灰、水处理化学品、氧气和盐 | 质量、体积或有效成分 | kg、L、g active ingredient 或 m3 gas | 记录产品数量、适用时的有效成分、处理目的、诊断或健康计划链接、合法状态和上市合格性影响。 |
| `packaging_and_ice_basis` | 篮、箱、袋、内衬、标签、保温容器、冰、冰袋、充氧袋和托盘 | 质量或件数 | kg 或 item | 包装、冰、活体包装和容器必须保留材料类型、件数、皮重或装填质量、重复使用率和目的地，再进行归一化。 |

## 5. 系统边界

默认边界覆盖由前景主体控制的养殖蟹生产，直至声明的养殖场、收获、包装场、发运或配送门点：

1. 亲蟹、卵、幼体、大眼幼体、幼蟹、蟹苗、软壳蟹或育肥存量来源；当报告主体控制时，包括现场育苗和暂养；若由其他育苗场、捕捞者、收集者或养殖场供应，则需披露购入存量。
2. 育苗、暂养、养成和育肥管理，包括投苗、投喂、进水和换水、曝气、增氧、过滤、盐度控制、健康管理、生物安全、蜕壳管理、死亡和直接受控维护。
3. 收获、分级、清洗、活体暂养、冷藏、包装和声明门点放行。
4. 当参考流是超出养殖场、收获、发运或包装场门点的交付产品时，包括至声明门点的配送。

资本品和长寿命基础设施仅在声明数据包范围要求时纳入。外购饲料、蟹苗、大眼幼体、幼蟹、包装、冰、氧气、电力、燃料和化学品需要上游数据集，除非同一主体控制并在前景数据包中报告其生产。

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | declared_broodstock_larval_megalopa_juvenile_seed_crab_or_fattening_stocking_event |
| starting_condition_role | aquaculture_stock_identity_and_biological_starting_condition |
| product_classification_scope | 当前 CPC 3.0 产品类别 `04312`, `Farmed crabs, live, fresh or chilled` |
| recursive_input_rule | 用于生产商品蟹的养殖亲蟹、幼体、大眼幼体、幼蟹、蟹苗、软壳蟹或育肥存量，作为声明的生物起始条件记录，并披露供应商、育苗场、养殖场、生命阶段、来源和健康信息，不递归建模为成品参考产品输出 |
| upstream_dataset_requirement | 亲蟹、育苗、苗种、幼蟹、软壳蟹、育肥存量或供应商数据集；或记录来源、物种、批次、只数或质量、生命阶段、健康或生物安全状态、移动许可，以及认证或许可证明 |
| disclosure | 披露物种、养殖系统、生物起始条件、养殖生产证据、放养密度、投喂制度、水源、盐度和换水、曝气或增氧、健康处理、蜕壳和死亡记录、收获和暂养条件、产品形态、包装状态、声明门点，以及未解析的 Tiangong UUID 替代项 |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| broodstock_hatchery_nursery_and_stocking | 亲蟹、育苗、暂养与投苗 | required | 必须声明生物起始条件；当报告主体控制现场育苗和暂养时纳入相关行 | 前景/上游桥接 | 进入养成或育肥的可用蟹苗、大眼幼体、幼蟹或投放蟹 |
| growout_and_fattening_husbandry | 养成与育肥管理 | required |  | 前景生产 | 最终处理前的收获规格蟹 |
| harvest_live_holding_chilling_and_packout | 收获、活体暂养、冷藏与包装 | required |  | 前景整理和门点放行 | 声明的适销活、鲜或冷藏蟹 |
| delivery_to_declared_gate | 至声明门点的配送 | conditional | 当参考流为超过养殖场、收获、发运或包装场门点的交付产品时纳入 | 前景运输 | 声明门点的交付产品 |

### 过程：亲蟹、育苗、暂养与投苗（`broodstock_hatchery_nursery_and_stocking`）

#### 输入

##### 产品流

###### 亲蟹、幼体、大眼幼体、幼蟹、蟹苗或育肥存量（`biological_stock_input`）

该行记录进入声明养殖路线的外购或内部生产生物存量。

- 选定流：Broodstock (aquaculture organisms) `dca0167d-f48e-4260-bebe-0bb5687f08d6`；蟹幼体、大眼幼体、幼蟹、蟹苗、软壳蟹或育肥存量仍需按场址选择生物存量流
- 流属性/单位：Mass or count with life stage / kg, item, or stage count
- 数量规则：按批次记录进入育苗、暂养、养成或育肥的实测只数、可测质量、生命阶段和接收数量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 适销参考产品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_biological_stocking_records`
- 来源：`fao-mud-crab-aquaculture-2011`, `seafdec-mud-crab-growout-2017`, `asc-farm-standard-2025`
- 数量范围：暂定生物存量筛查估算
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0.001
  - 上限：10
  - 单位：kg biological stock live mass/kg marketable product
  - 基准：蟹苗、幼蟹、软壳蟹或育肥存量活质量相对于适销产品的宽泛首轮估计
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 育苗、暂养或投苗饲料（`hatchery_nursery_or_stocking_feed`）

该行覆盖活饵、Artemia、贝肉、杂鱼、配合开口料、亲蟹饲料以及类似育苗或暂养饲料。

- 选定流：Fry feed `3b09065d-9675-4dad-8d0e-1035b5cca324`；Fresh bait `40685ba7-0e7f-41bc-92b0-cec9e6696f19`；其他育苗、暂养或投苗饲料按场址记录选择
- 流属性/单位：Mass, volume, or count / kg, g, L, cyst count, or item
- 数量规则：按批次、生命阶段和基准记录实测饲料或活饵数量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每个育苗、暂养或投苗批次，并在归一化后折算至每 1,000 kg 适销参考产品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_feed_records`
- 来源：`fao-mud-crab-aquaculture-2011`, `asc-feed-standard-2025`
- 数量范围：暂定育苗和暂养饲料筛查估算
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0
  - 上限：5000
  - 单位：kg or feed-unit/1,000 kg marketable product
  - 基准：育苗、暂养和投苗饲料投入相对于适销产品的宽泛首轮估计
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 育苗和暂养用水（`hatchery_nursery_water`）

该行覆盖现场育苗和暂养使用的受控海水、淡水、咸淡水、工艺水、补水和循环水补充水。

- 选定流：Process water `ec205030-248c-496f-9cf2-06d9d26dc6ff`
- 流属性/单位：Mass or volume / kg or m3
- 数量规则：记录实测进水、补水、处理水或循环水补充量，并保留盐度基准
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每个育苗或暂养批次，并在归一化后折算至每 1,000 kg 适销参考产品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_water_salinity_and_discharge_records`
- 来源：`fao-mud-crab-aquaculture-2011`, `asc-farm-standard-2025`

###### 育苗和暂养用电（`hatchery_nursery_electricity`）

该行覆盖现场育苗或暂养中水泵、曝气、增氧、过滤、照明、冷却或加热、紫外或其他水处理，以及活饵培养用电。

- 选定流：Electricity `f872677d-2f66-428a-a94e-f0fba61231df`
- 流属性/单位：Energy / kWh
- 数量规则：育苗和暂养操作的计量电力或分摊电力记录
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每个育苗或暂养批次，并在归一化后折算至每 1,000 kg 适销参考产品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_and_fuel_records`
- 来源：`asc-farm-standard-2025`

##### 废物流

###### 育苗死亡、蜕壳、污泥和养殖残余物（`hatchery_mortalities_molts_sludge_and_culture_residue`）

该行记录现场育苗或暂养中的亲蟹死亡、幼体、大眼幼体、蟹苗淘汰、蜕壳、蟹壳、残饵、污泥、生物滤池固体和淘汰存量。

- 选定流：Sludge `725c8f6e-7975-4155-a250-1f95ef70c508`；蟹死亡、蟹壳、蜕壳和其他有机养殖残余物仍需按场址选择废物流
- 流属性/单位：Mass or count / kg or item
- 数量规则：记录实测死亡只数、残余物质量、污泥、淘汰存量，以及处置或回收路径
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每个育苗或暂养批次，并在归一化后折算至每 1,000 kg 适销参考产品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_mortality_molt_residue_and_sludge_records`

##### 基本流

育苗和暂养不设置默认基本流输入。当 Tiangong 身份和场址范围已选定时，按场址情况添加海水取用、土地或水域占用、水体排放或直接制冷剂泄漏流。

#### 输出

##### 产品流

###### 进入养成的接收蟹苗或幼蟹（`accepted_seed_crabs_or_juveniles_for_growout`）

该输出将可用蟹苗、大眼幼体、幼蟹或投放蟹带入养成或育肥。

- 选定流：Broodstock (aquaculture organisms) `dca0167d-f48e-4260-bebe-0bb5687f08d6`；蟹苗、大眼幼体、幼蟹或投放蟹仍需按场址选择生物存量流
- 流属性/单位：Mass or count with mean size / kg, item, or stage count
- 数量规则：根据接收、暂养、分级、驯化和转移损失计算接收存量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：进入养成或育肥的接收存量
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_biological_stocking_records`
- 来源：`mass-balance-identity`

##### 废物流

除育苗死亡、蜕壳、污泥和养殖残余物外，不设置额外废物输出。

##### 基本流

育苗和暂养不设置默认基本流输出。

### 过程：养成与育肥管理（`growout_and_fattening_husbandry`）

#### 输入

##### 产品流

###### 进入养殖单元的接收投放蟹（`accepted_stocked_crabs_entering_culture_units`）

该行记录进入养成或育肥单元的接收蟹苗、幼蟹、软壳蟹或育肥存量。

- 选定流：Broodstock (aquaculture organisms) `dca0167d-f48e-4260-bebe-0bb5687f08d6`；接收投放蟹仍需按场址选择生物存量流
- 流属性/单位：Mass or count / kg or item
- 数量规则：按养殖单元记录进入的实测接收只数和质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每个养殖单元和每 1,000 kg 适销参考产品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_biological_stocking_records`
- 来源：`fao-mud-crab-aquaculture-2011`, `seafdec-mud-crab-growout-2017`
- 数量范围：投放输入 QA 筛查估算
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0.01
  - 上限：20
  - 单位：kg stocked crab live mass/kg harvest-size crab
  - 基准：接收投放蟹质量相对于收获规格蟹输出的宽泛首轮估计
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 养成和育肥饲料（`growout_and_fattening_feed`）

该行记录养成或育肥单元投喂的配合饲料、杂鱼、贝肉、混合农场饲料和补充饲料。

- 选定流：Fry feed `3b09065d-9675-4dad-8d0e-1035b5cca324`；Fresh bait `40685ba7-0e7f-41bc-92b0-cec9e6696f19`；其他蟹养成或育肥饲料按场址记录选择
- 流属性/单位：Mass / kg
- 数量规则：记录实测净投喂量，并保留湿基、干基、投喂基、杂鱼、贝肉或配合饲料基准
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 收获规格蟹输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_feed_records`
- 来源：`fao-mud-crab-aquaculture-2011`, `asc-feed-standard-2025`
- 数量范围：暂定饲料筛查估算
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0
  - 上限：10
  - 单位：kg feed/kg harvest-size crab
  - 基准：饲料投入相对于收获规格蟹输出的宽泛首轮估计
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 养成换水和补水（`growout_water_exchange_and_makeup_water`）

该行记录受控咸淡水、海水、淡水、补水、池塘换水、池槽换水或循环水补充水。

- 选定流：Process water `ec205030-248c-496f-9cf2-06d9d26dc6ff`
- 流属性/单位：Mass or volume / kg or m3
- 数量规则：记录实测进水、补水、换水、循环水补充，或按泵运行计算的水量，并保留盐度和水源
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 收获规格蟹输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_water_salinity_and_discharge_records`
- 来源：`fao-mud-crab-aquaculture-2011`, `asc-farm-standard-2025`

###### 养成用电和燃料（`growout_electricity_and_fuel`）

该行记录水泵、曝气、增氧、换水、船舶、照明、场区运行和备用发电直接控制的电力和燃料。

- 选定流：Electricity `f872677d-2f66-428a-a94e-f0fba61231df`; diesel oil `9d258d75-6792-4f1c-9856-81602ed8f816` where used
- 流属性/单位：Energy or fuel quantity / kWh, MJ, L, or kg
- 数量规则：养成和育肥操作的实测电力、燃料或分摊能源记录
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 收获规格蟹输出
- 基准类型：燃料清单（`fuel_inventory`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_and_fuel_records`
- 来源：`asc-farm-standard-2025`

###### 健康处理、水处理化学品、盐、石灰和氧气（`health_treatments_chemicals_salt_lime_and_oxygen`）

该行记录药物、消毒剂、益生菌、水处理化学品、盐、石灰、氧气和类似处理投入。

- 选定流：Water quality improvers `1dff627b-0317-4ff1-b733-5746b82b3e92`；oxygen `f804eb52-65c3-4db0-9d2d-e463b29e6e4b`；其他蟹养殖处理投入按场址记录选择
- 流属性/单位：Mass, volume, active ingredient, or gas volume / kg, L, g active ingredient, or m3 gas
- 数量规则：按处理事件、目的、适用时的有效成分和养殖单元记录实测施用量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每个养殖单元和每 1,000 kg 收获规格蟹输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_health_treatment_and_chemical_records`
- 来源：`asc-farm-standard-2025`, `fao-mud-crab-aquaculture-2011`
- 数量范围：暂定处理投入筛查估算
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0
  - 上限：100
  - 单位：kg or active-ingredient equivalent/1,000 kg harvest-size crab
  - 基准：健康处理、水处理化学品、盐、石灰和氧气投入相对于收获规格输出的宽泛首轮估计
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

###### 养成死亡、蜕壳、蟹壳、污泥和残饵（`growout_mortalities_molts_shells_sludge_and_feed_residue`）

该行记录死蟹、可计量的同类相食损失、蜕壳、蟹壳、残饵、池塘污泥、生物滤池固体和有机残余物。

- 选定流：Sludge `725c8f6e-7975-4155-a250-1f95ef70c508`；蟹死亡、蜕壳、蟹壳和其他有机养殖残余物仍需按场址选择废物流
- 流属性/单位：Mass or count / kg or item
- 数量规则：按死亡和残余物的只数、质量、原因、去向和养殖单元记录
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 收获规格蟹输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_mortality_molt_residue_and_sludge_records`
- 来源：`fao-mud-crab-aquaculture-2011`, `seafdec-mud-crab-growout-2017`

##### 基本流

###### 养成受控排水（`controlled_growout_water_discharge`）

当池塘、池槽、网箱、围栏、循环水系统或暂养单元排水作为基本水体释放离开前景系统时，使用该行记录。

- 选定流：Controlled aquaculture discharge water；产品水量平衡使用 Process water `ec205030-248c-496f-9cf2-06d9d26dc6ff`，评审使用前需选择场址特定的基本水体排放流
- 流属性/单位：Volume or mass / m3 or kg
- 数量规则：按实测排水，或由进水、换水、循环水、滞留水和污泥带水记录计算排水
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 收获规格蟹输出
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_water_salinity_and_discharge_records`
- 来源：`asc-farm-standard-2025`, `mass-balance-identity`
- 数量范围：受控排水 QA 筛查估算
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0
  - 上限：20000
  - 单位：m3/1,000 kg harvest-size crab output
  - 基准：受控水排放相对于养成输出的宽泛首轮估计
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

#### 输出

##### 产品流

###### 最终处理前的收获规格养殖蟹（`harvest_size_farmed_crabs_before_final_handling`）

该输出将养成或育肥后的收获规格活蟹送入收获、活体暂养、冷藏和包装。

- 选定流：Farmed crabs, live, fresh or chilled `08e7abb8-1abd-4a3f-86ae-991411345115`
- 流属性/单位：Mass / kg
- 数量规则：按养殖单元、产品形态和等级记录最终处理损失前的实测收获规格蟹质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：收获规格蟹输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_harvest_and_product_records`
- 来源：`fao-mud-crab-aquaculture-2011`, `mass-balance-identity`

##### 废物流

除养成死亡、蜕壳、蟹壳、污泥和残饵外，不设置额外废物输出。

##### 基本流

除适用时的受控养成排水外，不设置默认基本流输出。

### 过程：收获、活体暂养、冷藏与包装（`harvest_live_holding_chilling_and_packout`）

#### 输入

##### 产品流

###### 最终处理接收的收获规格蟹（`harvest_size_crabs_received_for_final_handling`）

该行记录进入分级、清洗、活体暂养、冷藏或包装的活体收获规格蟹。

- 选定流：Farmed crabs, live, fresh or chilled `08e7abb8-1abd-4a3f-86ae-991411345115`
- 流属性/单位：Mass / kg
- 数量规则：按收获批次、等级、产品形态和暂养条件记录进入的实测收获规格蟹质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每个包装批次和参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_harvest_and_product_records`
- 来源：`mass-balance-identity`
- 数量范围：最终处理输入质量平衡 QA 校验
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：1
  - 上限：5
  - 单位：kg/kg reference product
  - 基准：扣除淘汰品、暂养损失和非目标等级产品后的收获规格蟹输入相对于最终适销参考产品
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 活体暂养、清洗和冷藏用水（`live_holding_washing_and_chilling_water`）

该行记录最终处理使用的受控活体暂养水、清洗水、冷却水、海水、咸淡水、淡水或冰融水。

- 选定流：Process water `ec205030-248c-496f-9cf2-06d9d26dc6ff`
- 流属性/单位：Mass or volume / kg or m3
- 数量规则：按暂养、清洗、冷藏或清洁活动记录实测或计算用水
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 适销参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_water_salinity_and_discharge_records`
- 来源：`codex-cxc-52-2003`, `asc-farm-standard-2025`
- 数量范围：暂定活体暂养和清洗用水筛查估算
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0
  - 上限：5000
  - 单位：m3/1,000 kg reference product
  - 基准：活体暂养、清洗和冷藏用水相对于适销蟹输出的宽泛首轮估计
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 包装用能、冰、氧气和包装材料（`packout_energy_ice_oxygen_and_packaging`）

该行记录准备用于销售蟹产品的电力、燃料、冰、氧气、篮、箱、袋、内衬、标签、保温容器、冰袋、托盘和可重复使用容器服务。

- 选定流：Electricity `f872677d-2f66-428a-a94e-f0fba61231df`；Packaging materials, unspecified `7336a8ee-9e4d-49a6-9fe5-ce285f613245`；oxygen `f804eb52-65c3-4db0-9d2d-e463b29e6e4b`；冰按场址记录选择
- 流属性/单位：Energy, mass, or item count / kWh, kg, or item
- 数量规则：记录实测包装用能、包装材料、氧气和冰；只有在有皮重或供应商规格时才将件数转换为质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 适销参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_ice_oxygen_and_energy_records`
- 来源：`codex-cxc-52-2003`, `asc-farm-standard-2025`

##### 废物流

###### 包装淘汰品、死蟹、蟹壳和废水（`packout_rejects_dead_crabs_shells_and_wastewater`）

该行记录最终处理中的死蟹、破损产品、淘汰等级、蟹壳、绑扎物、包装废物、废水和清洁残余物。

- 选定流：Sludge `725c8f6e-7975-4155-a250-1f95ef70c508`；Packaging materials, unspecified `7336a8ee-9e4d-49a6-9fe5-ce285f613245`；蟹淘汰品、蟹壳和废水按场址记录选择
- 流属性/单位：Mass or volume / kg or m3
- 数量规则：记录实测淘汰品质量、废水体积、包装废物，以及处置或回收路径
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 适销参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_mortality_molt_residue_and_sludge_records`
- 来源：`codex-cxc-52-2003`, `mass-balance-identity`
- 数量范围：暂定包装淘汰品筛查估算
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0
  - 上限：1
  - 单位：kg/kg harvest-size crab received
  - 基准：死蟹、淘汰品、蟹壳、包装废物和废水质量当量相对于最终处理输入的宽泛首轮估计
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

只有当前景记录显示直接制冷剂泄漏、清洁排放或水体排放跨越环境边界，且未由上游或废物处理数据集代表时，才添加这些基本流。

#### 输出

##### 产品流

###### 适销养殖蟹，活、鲜或冷藏（`marketable_farmed_crabs_live_fresh_or_chilled`）

这是参考产品输出。

- 选定流：Farmed crabs, live, fresh or chilled `08e7abb8-1abd-4a3f-86ae-991411345115`
- 流属性/单位：Mass / kg
- 数量规则：按声明的活、鲜或冷藏形态记录适销产品实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_harvest_and_product_records`
- 数量范围：参考产品恒等式
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：1
  - 上限：1
  - 单位：kg/kg reference product
  - 基准：归一化参考产品输出
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：方法公式（`method_formula`）
  - 来源：`mass-balance-identity`

###### 可销售非目标等级蟹（`offgrade_saleable_crabs`）

该行记录不属于声明参考产品但作为共产品离开系统的可销售等级。

- 选定流：Farmed crabs, live, fresh or chilled `08e7abb8-1abd-4a3f-86ae-991411345115`
- 流属性/单位：Mass / kg
- 数量规则：按等级、产品形态和目的地记录实测可销售非目标等级蟹质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每个包装批次和参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_harvest_and_product_records`
- 数量范围：暂定非目标等级产品筛查估算
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0
  - 上限：5
  - 单位：kg/kg reference product
  - 基准：可销售非目标等级蟹质量相对于声明参考产品的宽泛首轮估计
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

除包装淘汰品、死蟹、蟹壳和废水外，不设置额外废物输出。

##### 基本流

参考包装过程不设置默认基本流输出。

### 过程：至声明门点的配送（`delivery_to_declared_gate`）

#### 输入

##### 产品流

###### 转入受控配送的产品（`product_transferred_to_controlled_delivery`）

当声明参考流是在报告主体控制下配送至养殖场、收获、发运或包装场门点之外的产品时使用该行。

- 选定流：Farmed crabs, live, fresh or chilled `08e7abb8-1abd-4a3f-86ae-991411345115`
- 流属性/单位：Mass / kg
- 数量规则：记录受控配送装载的适销产品实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每条受控配送路线和参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_delivery_records`
- 数量范围：配送装载 QA 校验
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：1
  - 上限：1
  - 单位：kg/kg delivered reference product
  - 基准：扣除声明配送损失后的装载适销产品相对于交付参考产品
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：方法公式（`method_formula`）
  - 来源：`mass-balance-identity`

###### 受控配送燃料或运输服务（`controlled_delivery_fuel_or_transport_service`）

该行记录至声明门点的直接受控配送燃料、冷藏车辆能源、船舶燃料或运输服务。

- 选定流：Diesel oil `9d258d75-6792-4f1c-9856-81602ed8f816`
- 流属性/单位：Fuel quantity or transport service / L, kg, MJ, or tonne-km
- 数量规则：按交付质量、距离、车辆、船舶、制冷、活体暂养和路线记录实测燃料或计算 tonne-km
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 1,000 kg 交付参考产品
- 基准类型：运输服务（`transport_service`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_delivery_records`

##### 废物流

###### 配送淘汰品或死亡（`delivery_rejects_or_mortalities`）

该行记录受控配送期间的产品死亡、包装损坏、活体容器泄漏、退货或温控失效损失。

- 选定流：Sludge `725c8f6e-7975-4155-a250-1f95ef70c508`；Packaging materials, unspecified `7336a8ee-9e4d-49a6-9fe5-ce285f613245`；蟹死亡、淘汰品和有机残余物按场址记录选择
- 流属性/单位：Mass or count / kg or item
- 数量规则：按原因和去向记录实测配送淘汰质量或只数
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 1,000 kg 交付参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_delivery_records`
- 来源：`mass-balance-identity`

##### 基本流

只有当前景配送过程未使用已包含这些排放的数据集时，才添加直接配送燃烧或制冷剂排放。

#### 输出

##### 产品流

###### 已交付养殖蟹（`delivered_farmed_crabs`）

仅当声明门点超过养殖场、收获、发运或包装场门点时使用该输出。

- 选定流：Farmed crabs, live, fresh or chilled `08e7abb8-1abd-4a3f-86ae-991411345115`
- 流属性/单位：Mass / kg
- 数量规则：声明门点的已交付适销产品质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：交付参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_delivery_records`
- 来源：`mass-balance-identity`

##### 废物流

除配送淘汰品或死亡外，不设置额外废物输出。

##### 基本流

配送过程不设置默认基本流输出。

## 7. 分配与共产品处理

当批次记录能够按物种、育苗批次、暂养单元、养成单元、育肥单元、收获批次、规格等级、性别或成熟度、产品形态、活/鲜/冷藏状态或目的地划分负荷时，应避免分配。在应用分配前，应先按实测质量区分活、鲜、冷藏、软壳、育肥、非目标等级和配送产品。

当同一前景批次在 CPC 04312 内产生多个可销售等级时，若没有经评审的市场价值规则，则按声明产品质量分配共享的育苗、暂养、养成、育肥、收获、暂养、冷藏、包装和配送负荷。蟹壳、蜕壳、死亡、废水、污泥、残饵、包装淘汰品和死蟹为废物或处理输出，除非它们以单独产品数据集和参考流销售。

若同一场址在同一池塘、围栏、网箱、单体盒、循环水系统、池槽、车辆、船舶或包装路线中生产多个物种或产品，共享电力、水、饲料制备、增氧、过滤、劳务服务和维护记录应依次优先按实测子过程用量、养殖单元、生物量-时间、面积-时间或产品质量分配。所选分配基准必须披露。

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_biological_stocking_records` | broodstock_hatchery_nursery_and_stocking; growout_and_fattening_husbandry | broodstock, larvae, megalopae, juveniles, seed crabs, soft-shell crabs, stocked crabs, and accepted transfer output | hatchery transfer, supplier invoice, fisher or collector declaration where legally allowed, stocking log, health certificate, batch sheet | species; batch id; life stage; supplier, hatchery, collector, or farm; count; mean size; mean mass where measurable; total mass; sex or maturity class where relevant; health status; biosecurity status; transfer date | supplier records, hatchery logs, transfer documents, stocking count, sampling and weighing | item, stage count, carapace width, and kg | each receipt, hatchery batch, nursery transfer, or stocking event | complete production batch or reporting year | supplier, hatchery, nursery, grow-out unit, pond, pen, cage, box, tank, or RAS module | sum accepted counts and masses by batch; calculate mean size, survival, and transfer losses before harvest normalization | signed transfer records, sampling sheet, weighing record, health certificate, permit, or certification evidence |
| `cp_feed_records` | broodstock_hatchery_nursery_and_stocking; growout_and_fattening_husbandry | live feed, formulated feed, trash fish, mollusc meat, broodstock feed, starter feed, and supplementary feed | feed issue log, supplier invoice, feed formulation, farm recipe, leftover record | feed product; feed type; wet/dry/as-fed basis; quantity issued; leftovers; feed source; marine ingredient fraction where relevant; batch id | feed inventory, supplier declarations, farm recipe, feeding logs | kg, g, L, item, or cyst count | each feed issue or batch summary | hatchery, nursery, grow-out, or fattening period | hatchery, nursery, pond, pen, cage, box, tank, or RAS module | normalize net feed supplied to accepted stock, harvest-size output, and reference product; retain wet/dry/live-feed conversion basis | feed purchase records, supplier formulation, farm recipe, stock movement logs |
| `cp_water_salinity_and_discharge_records` | broodstock_hatchery_nursery_and_stocking; growout_and_fattening_husbandry; harvest_live_holding_chilling_and_packout | controlled water intake, salinity, exchange, recirculation, live holding water, wastewater, and discharge | meter readings, pump logs, sensor records, water-quality tests, discharge permits | intake volume; make-up water; exchanged volume; recirculated volume; discharge volume; salinity; dissolved oxygen; water source; discharge route; treatment | meter, pump runtime calculation, sensor log, permit report, water management log | m3, kg, ppt, kg O2, or test result unit | daily, batch, harvest lot, or reporting period | process-specific operation period | hatchery, nursery, grow-out, fattening unit, live holding, packhouse, and discharge point | reconcile intake, exchange, recirculation, discharge, and retained water; normalize controlled water to process output and reference flow | meter calibration, sensor records, permit report, water-quality monitoring record |
| `cp_energy_and_fuel_records` | broodstock_hatchery_nursery_and_stocking; growout_and_fattening_husbandry; harvest_live_holding_chilling_and_packout | electricity, fuel, aeration, pumping, oxygen generation, filtration, chilling, and non-fuel energy | meter reading, utility bill, fuel invoice, tank drawdown, submeter, equipment log | electricity use; fuel type; meter id; process allocation; operating hours; temperature-control service; vessel or pump use | utility bill, submeter, runtime allocation, equipment log, fuel invoice | kWh, MJ, L, or kg | monthly, batch, or reporting period | reporting period and production batch overlap | farm, hatchery, nursery, grow-out unit, live holding area, packhouse, or directly controlled route | allocate by metered subprocess first, then operating hours, water volume, biomass-time, or product mass | utility bill, submeter records, fuel invoice, equipment log, allocation worksheet |
| `cp_health_treatment_and_chemical_records` | broodstock_hatchery_nursery_and_stocking; growout_and_fattening_husbandry; harvest_live_holding_chilling_and_packout | disinfectants, medicines, probiotics, salt, lime, oxygen, water-treatment chemicals, and health treatments | treatment log, veterinary or health plan, diagnosis record, purchase invoice, safety data sheet, permit record | product; active ingredient; quantity; concentration; target; diagnosis or purpose; treatment area; date; withdrawal or eligibility status | farm application log, health plan, supplier invoice, chemical inventory, permit report | kg, L, g active ingredient, or m3 gas | each application or treatment period | hatchery, nursery, grow-out, fattening, live holding, or pack-out period | treatment unit, pond, pen, cage, box, tank, RAS, storage area, or packhouse | normalize applied product or active ingredient to process output and reference product; retain non-eligible product segregation | application record, diagnosis record, health plan, invoice, permit or certification evidence |
| `cp_mortality_molt_residue_and_sludge_records` | broodstock_hatchery_nursery_and_stocking; growout_and_fattening_husbandry; harvest_live_holding_chilling_and_packout; delivery_to_declared_gate | mortalities, molts, shells, feed residue, sludge, rejects, wastewater, and delivery losses | mortality log, molting log, sludge record, reject sheet, waste manifest, recovery record | count; mass; reason; fate; date; culture unit; shell, molt, sludge, feed residue, wastewater, or reject category | farm log, hatchery log, packhouse reject record, weighing, waste contractor record | item, kg, and m3 | event, batch, harvest lot, delivery route, or reporting period | full production batch, pack-out period, or delivery period | hatchery, nursery, grow-out unit, packhouse, waste handling route, or delivery route | sum by fate and normalize to process output and reference product | signed waste record, mortality log, molting log, sludge record, reject sheet, mass balance |
| `cp_harvest_and_product_records` | growout_and_fattening_husbandry; harvest_live_holding_chilling_and_packout | harvest-size product, marketable reference product, off-grade product, and product state | harvest log, grading sheet, sales invoice, dispatch record, pack-out record | harvest date; culture unit; species; product state; whole or declared basis; grade; count; sex or maturity class; mass; destination | harvest weighing, grader records, live holding records, packhouse records, invoice | kg and item | each harvest, holding, or pack-out batch | declared production batch, harvest lot, or reporting period | harvest unit, live holding area, packhouse, and declared gate | reconcile harvested input, marketable output, off-grade product, rejects, holding losses, and reference product | calibrated scale record, sales invoice, dispatch record, batch reconciliation |
| `cp_packaging_ice_oxygen_and_energy_records` | harvest_live_holding_chilling_and_packout | boxes, baskets, bags, liners, labels, ice, gel packs, oxygenated packs, pallets, reusable containers, and pack-out energy | packaging issue log, ice production or purchase record, oxygen pack record, purchase invoice, bill of materials, energy meter | packaging item; material; item count; tare mass; capacity; reuse rate; ice or gel pack mass; oxygen pack; destination; energy use | warehouse issue record, bill of materials, supplier invoice, weighing, submeter | kg, item, and kWh | each pack-out batch or reporting period | pack-out and delivery preparation period | packhouse and dispatch area | convert count to mass using tare or supplier data; allocate reusable packaging; normalize to reference product | supplier specification, packaging issue sheet, ice record, scale record |
| `cp_delivery_records` | delivery_to_declared_gate | diesel, vessel fuel, vehicle fuel, generator fuel, delivery service, delivered product, and delivery losses | fuel purchase, tank drawdown, vessel log, vehicle log, delivery log, dispatch note, receiving note | fuel type; quantity; route; vehicle or vessel; distance; load; live-holding or refrigeration service; delivery date; rejects; receiving gate | fuel invoice, tank gauge, vehicle or vessel log, GPS or route log, receiving record | L, kg, MJ, tonne-km, and kg product | each trip, work event, delivery route, or reporting period | delivery period | directly controlled routes, vessels, vehicles, equipment, and declared gate | normalize fuel or tonne-km to product mass; calculate delivery losses; avoid double counting supplier-delivered inputs | fuel invoice, odometer, vessel log, delivery manifest, receiving note |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `normalize_to_reference_flow` | all foreground rows | normalized_amount = measured_or_calculated_amount / marketable_reference_product_mass. Preserve raw records and product-form basis. | measured amount; marketable_reference_product_mass | amount per 1 kg reference product | `mass-balance-identity` |
| `calculate_stock_acceptance_and_survival` | broodstock_hatchery_nursery_and_stocking and growout_and_fattening_husbandry | accepted_stock = received_or_produced_stock - rejected_stock; survival_to_harvest = harvested_count / stocked_count when count records are available. Retain count-to-mass conversion separately. | received stock; produced megalopae; rejected stock; stocked count; harvested count; mortality count | accepted stock, survival indicator, and QA check | `mass-balance-identity` |
| `calculate_feed_conversion_indicator` | growout_and_fattening_husbandry | feed_conversion_indicator = net_feed_mass / harvest_size_product_mass on the declared feed mass basis. Do not compare wet, dry, trash-fish, mollusc-meat, and as-fed records without conversion evidence. | feed_mass; feed basis; harvest_size_product_mass | feed mass per kg harvest-size crab | `asc-feed-standard-2025` |
| `calculate_controlled_discharge` | water intake and discharge rows | controlled_discharge = measured_discharge or intake - recirculated_volume - retained_or_removed_water adjustment when meters are incomplete. | intake; discharge; recirculated volume; retained water; sludge water | controlled discharge volume by process | `mass-balance-identity` |
| `reconcile_packout_mass` | harvest_live_holding_chilling_and_packout | harvested_input_mass = reference_product_mass + offgrade_saleable_mass + reject_mass + measured holding, mortality, drainage, or cleaning loss on the same product-form basis. | harvested_input_mass; reference_product_mass; offgrade_mass; reject_mass; holding_loss | pack-out mass balance | `mass-balance-identity` |
| `calculate_packaging_and_ice_mass` | packaging, ice, oxygen, and reusable container rows | material_mass = item_count * tare_or_supplier_mass, adjusted for reuse allocation where applicable. | item count; tare mass; supplier mass; reuse rate; ice mass | kg packaging, ice, oxygen, or container service per reference product | `mass-balance-identity` |
| `calculate_delivery_transport_service` | delivery_to_declared_gate | transport_service = delivered_product_mass_tonnes * one-way controlled delivery distance. | delivered mass; controlled distance; route | tonne-kilometres | `mass-balance-identity` |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `identity_and_scope` | all datasets | Declare CPC code, species, farmed production evidence, biological starting condition, culture system, product state, geography, and declared gate. | dataset metadata, stocking records, hatchery records, product description, permit, certification, or movement evidence |
| `mass_basis_consistency` | reference product, stock, harvest, pack-out, rejects, feed, packaging, and ice | Keep whole, soft-shell, fattened, live, fresh, chilled, drained, wet, dry, trash-fish, count, container, and net mass bases separate unless measured conversion evidence exists. | scale records, product specifications, count per kg records, container tare, moisture or drainage evidence |
| `feed_and_health_disclosure` | hatchery, nursery, grow-out, and fattening rows | Retain feed type, feed basis, feed recipe, supplier formulation, health treatments, medicine eligibility, and biosecurity records where applicable. | feed logs, supplier data, farm recipe, health plan, treatment logs |
| `water_salinity_and_discharge_disclosure` | hatchery, nursery, grow-out, fattening, live holding, and pack-out | Distinguish controlled intake, exchange, recirculation, oxygenation, salinity, live holding, cleaning, and discharge. | water meters, sensor logs, oxygen logs, pump logs, discharge permits, monitoring reports |
| `mortality_molt_residue_and_sludge_completeness` | stock, grow-out, fattening, pack-out, and delivery rows | Record mortalities, molts, shells, feed residue, sludge, rejects, and fate by batch or reporting period. | mortality log, molting log, reject sheet, sludge record, waste manifest, recovery record |
| `allocation_transparency` | multi-species, multi-grade, or shared-system operations | State the partitioning or allocation basis before publishing a secondary or background dataset. | allocation worksheet, grade mass records, pond records, cage records, RAS module records, route logs |
| `temporal_representativeness` | all foreground rows | Cover a complete aquaculture production batch, fattening batch, harvest lot, holding period, delivery route, or representative reporting period; disclose partial-cycle or pilot-scale datasets. | production calendar, stocking and harvest dates, hatchery records, delivery records, reporting-period records |

## 9. 校验规则

前景数据包只有在满足以下条件时才符合本 PCR：

- 参考产品归一化为 1 kg 声明活、鲜或冷藏产品形态下的养殖蟹；
- 声明物种、生物起始条件、养殖生产证据、养殖系统、产品状态、产品形态、规格等级、地理位置、声明门点、暂养时长和包装状态；
- 数据集区分养殖养成、育苗或育肥与野捕，不得将本 PCR 用于野捕后仅贮存、活体暂养、冷藏、分级或发运的情形；
- 亲蟹、幼体、大眼幼体、幼蟹、蟹苗、投放蟹、饲料、受控用水、电力、燃料、健康处理或化学品使用、死亡、蜕壳或残余物、收获、包装、包装材料，以及适用时的配送均已记录，或以理由明确标记为不适用；
- 按只数、篮、箱、池槽、桶或规格等级记录的数据包含实际净质量、每 kg 只数或平均质量、阶段、产品形态、适用时的皮重和抽样方法；
- 水记录区分受控进水、换水、循环水、增氧、盐度、排放和活体暂养用水；
- 饲料记录区分配合饲料、杂鱼、贝类饲料、活饵、湿基、干基和投喂基；
- 包装质量平衡可协调收获投入、参考产品、可销售非目标等级产品、淘汰品，以及暂养、死亡、沥水或清洁损失；
- 同场址多物种、共享池塘、共享围栏、共享网箱、共享单体盒、共享循环水系统、共享包装场或多等级分配，在数据集作为背景或二级数据集使用前已记录。

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 经评审后可作为 `secondary_dataset` 或 `background_dataset` 发布的前景生产包 |
| downstream_use | 作为养殖蟹输入，用于海产品加工、餐饮、零售、冷链、活鲜配送或区域食品产品生命周期模型 |
| allowed_use | 具有声明养殖生产证据、物种、养殖系统、产品状态、门点和质量披露的养殖蟹活、鲜或冷藏数据集 |
| excluded_use | 野捕蟹数据集、捕捞后仅暂养或冷藏的野生蟹、冷冻/干制/盐渍/盐水浸渍/熟制/罐装/拆肉/调制产品、作为苗种出售的蟹苗、蟹壳残余物数据集，以及缺少养殖生产或养殖系统披露的数据集 |
| required_metadata | canonical PCR id; CPC code; species; biological starting condition; farmed production evidence; culture system; product state; whole or declared basis; size grade or count per kg; sex or maturity class where material; geography; declared gate; holding or chilling duration; feed regime; water salinity and exchange basis; packaging state; data period; allocation basis |
| required_quality_disclosure | missing UUIDs; unresolved crab seed, shell, molt, mortality, wastewater, ice, and site-specific treatment flow identities; feed wet/dry/trash-fish conversion; water salinity and discharge records; health treatment eligibility; mortality and molt completeness; pack-out mass balance; partial-cycle, pilot-scale, or proxy data use |
| update_trigger | 当 CPC 映射变化、Tiangong 蟹、苗种、饲料、氧气、水、排放、污泥、蟹壳、包装或处理流身份更新，ASC、Codex、FAO、SEAFDEC 或等效水产养殖和海产品处理指南变化，或经评审前景数据集提供更好的有源范围时修订 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `codex-cxc-52-2003` | standard | <https://www.fao.org/input/download/standards/10273/CXP_052e.pdf> | 鱼类和水产品处理、冷藏水产品、温度控制、损伤预防、水产养殖和海产品卫生背景 |
| `fao-mud-crab-aquaculture-2011` | handbook | <https://www.fao.org/4/ba0110e/ba0110e.pdf> | 泥蟹生物学、育苗、暂养、养成、疾病控制、收获、加工、包装和上市准备过程分解，用作蟹类特定养殖指南 |
| `seafdec-mud-crab-growout-2017` | extension_guidance | <https://repository.seafdec.org.ph/bitstream/handle/10862/3181/3181-GenodepaJG2017.pdf> | 泥蟹养成系统、池塘、围栏、网箱、育肥背景、同类相食和成活管理，以及收获处理指南 |
| `asc-farm-standard-2025` | standard | <https://programme-centre.asc-aqua.org/app/uploads/2025/08/ASC-STD-001-ASC-Farm-Standard-V1.0.1-Aug-2025.pdf> | 当前 ASC 养殖场层面关于场址范围、可追溯性、水、电、健康、法律、环境和饲料相关披露的要求 |
| `asc-feed-standard-2025` | standard | <https://programme-centre.asc-aqua.org/app/uploads/2025/04/ASC-STD-002-ASC-Feed-Standard-V1.1-May-2025.pdf> | 水产饲料供应商、原料、可追溯性和饲料披露背景 |
| `mass-balance-identity` | method_factor | Conservation of mass applied as a PCR calculation identity for stock acceptance, survival, grow-out, discharge, pack-out, packaging, delivery, and reference-flow normalization. | QA 校验、成活、饲料转化、得率、包装质量平衡、包装换算、配送服务计算和归一化规则 |
