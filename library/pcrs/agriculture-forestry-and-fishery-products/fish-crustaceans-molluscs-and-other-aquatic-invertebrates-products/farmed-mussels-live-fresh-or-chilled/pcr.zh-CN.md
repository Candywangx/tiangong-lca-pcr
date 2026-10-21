---
pcr_id: pcr.agriculture-forestry-and-fishery-products.fish-crustaceans-molluscs-and-other-aquatic-invertebrates-products.farmed-mussels-live-fresh-or-chilled
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 养殖贻贝，活、鲜或冷藏

## 1. 范围与适用性

本 PCR 用于指导构建以活、鲜或冷藏状态投放市场的养殖贻贝前景数据包。范围覆盖苗种或稚贝供应、由报告主体控制时的育苗和中间培育、绳索、网套、延绳、筏架、木桩、架、盘、底播单元或其他声明水产养殖系统中的养成、采收、清洗、分级、必要时暂养或净化、活体暂养、冷藏、包装以及至声明边界的放行。

排除产品包括野生采捕贻贝；冷冻、烟熏、干制、盐腌、盐水浸泡、熟制、罐装或其他加工保藏贻贝；作为水产养殖投入销售的贻贝苗种或稚贝；作为非食品产品销售的贻贝壳或壳料；以及牡蛎、扇贝、蛤、鸟蛤、赤贝、鲍鱼或其他已有单独 PCR 的贝类类别。

本 PCR 面向前景数据集生产。除非前景研究中声明了单独经审查的方法和有来源支撑的数量，否则不得为过滤、水体营养盐去除、碳储存或栖息地影响授予生态系统服务抵扣。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | `pcr.agriculture-forestry-and-fishery-products.fish-crustaceans-molluscs-and-other-aquatic-invertebrates-products.farmed-mussels-live-fresh-or-chilled` |
| classification_refs | CPC 3.0 `04432`, `Farmed mussels, live, fresh or chilled` |
| covered_products | 由水产养殖系统生产、以活、鲜或冷藏状态销售的养殖贻贝，包括声明的 Mytilus、Perna、Choromytilus、Aulacomya 或相近贻贝类群 |
| excluded_products | 野生采捕贻贝；冷冻、烟熏、干制、盐腌、盐水浸泡、熟制、罐装、加工或保藏贻贝；作为苗种销售的贻贝稚贝；非食品贝壳产品；牡蛎、扇贝、蛤、鸟蛤、赤贝、鲍鱼和其他已有单独 PCR 的贝类类别 |
| representative_product | 达到声明市场规格和产品形态的带壳活体或冷藏养殖贻贝 |
| production_route | 稚贝或苗种供应、相关中间培育、声明悬挂式、木桩、筏架、底播、架、盘或综合系统中的养成管理、采收、清洗、分级、必要时净化或暂养、活体暂养或冷藏、包装和声明边界放行 |
| market_state | 声明物种、养殖系统、采收区、规格或计数等级、净化状态、包装状态、温度或暂养条件和边界的活、鲜或冷藏带壳产品 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 作为活、鲜或冷藏市场产品的养殖贻贝 |
| How much | 1 kg |
| How well | 声明物种或物种组、活/鲜/冷藏状态、带壳或其他声明产品基准、规格或计数等级、采收区、净化或暂养状态以及养殖系统 |
| How long or cycle | 归一化到市场化产品输出的一个生产批次、采收批次或报告期 |
| reference_flow_link | 见下方参考数量和产品流 |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 kg |
| 参考产品流 | Farmed mussels, live, fresh or chilled `fbe2435d-13e6-4119-beaa-b157a7d95f58` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 物种或物种组；养殖系统；稚贝或苗种来源；养成场址或养殖单元；采收区分类或许可状态；产品状态；带壳或声明产品基准；规格或计数等级；净化或暂养状态；含水或沥水基准；地理范围和声明边界；暂养或冷藏时长；包装状态；许可或认证状态 |

构建前景数据包时，`必需限定信息` 中列出的信息必须在数据集元数据、过程说明、参考流备注、产品说明或等效数据包字段中声明。缺少这些限定信息的数据包视为参考流定义不完整。

质量是主要参考基准。计数、袋、网袋、篮、箱、绳索、网套、簇或体积记录仅可在保留个体数、实际净质量和抽样或皮重方法时使用，以便前景数据包归一化为 kg 参考产品。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | 参考产品 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 参考流必须以声明活、鲜或冷藏产品形态下的 kg 养殖贻贝表示。 |
| `product_state_and_shell_basis` | 带壳活体、鲜品、冷藏、沥水或其他声明产品记录 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 产品质量必须声明是带壳活重、带壳冷藏质量、清洗或净化后的沥水质量、去足丝或清洁后质量，或其他合同声明基准。只有在有实测得率或沥水证据时才可换算。 |
| `count_to_mass_conversion` | 苗种、投放、采收、分级、销售、袋、网袋、箱、簇和计数等级记录 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 基于计数或容器的记录必须包含净质量、平均个体质量或每 kg 个数、容器皮重、规格等级和抽样方法，之后才可归一化为 kg 产品。 |
| `spat_lot_identity` | 人工育苗稚贝、纳入养殖控制的野外采集稚贝、中间培育苗和转入苗批次 | Mass or count | kg and item | 稚贝和苗种记录必须保留供应商、育苗场或采集区、物种、批次、数量、平均规格或质量、转移日期、健康或转运许可，以及死亡或剔除记录。 |
| `no_external_feed_default` | 养成管理 | Mass | kg | 滤食性养成默认无外部饲料投入。任何有意投喂、施肥、池塘增肥或补充藻类投入都必须作为产品投入记录数量、用途和来源证据。 |
| `water_volume_or_mass` | 育苗、中间培育、净化、暂养、活体暂养、清洗、冷藏和废水 | Mass or volume | kg or m3 | 仅记录由前景控制的泵送、供应、计量、处理、循环或排放水。开放悬挂、筏架、木桩、底播或架式系统中的环境海水交换属于边界条件，不作为工艺用水投入。 |
| `culture_area_time` | 延绳、筏架、木桩、架、盘、底播区或其他养成区域 | Area-time | ha-year or m2-day | 当需要用于放养密度、栖息地披露或共享场址分配时，记录许可或占用养殖面积和有效养殖时长。 |
| `gear_and_socking_material_basis` | 绳索、网套、延绳、浮子、浮标、锚、木桩、架、盘、夹具、扎带和可复用器具 | Mass or item count | kg or item | 器具记录必须保留材料类型、件数、质量、布设期、使用寿命、回收、复用、回收利用、处置或遗失去向，然后才可分配到参考流。 |
| `energy_and_fuel_inventory` | 泵送、曝气、育苗、中间培育、船舶、车辆、清洗、净化、冷藏、活体暂养和交付能源 | Energy or fuel quantity | kWh, MJ, L, or kg | 在归一化到参考流之前记录原始电力、燃料或能源载体单位。不要重复计算已包含在采购投入中的供应商运输。 |
| `packaging_and_ice_basis` | 袋、网袋、箱、标签、内衬、冰、凝胶冰袋、托盘和可复用容器 | Mass or item count | kg or item | 包装和冰记录必须保留材料类型、件数、皮重或填充质量、复用率和去向，然后才能换算为每 kg 参考产品。 |

关键产品属性作为质量参考流的前景限定信息记录：

| 属性 | 常用单位 | 必需处理 |
| --- | --- | --- |
| 物种或物种组 | 学名和通用名 | 所有数据集必填 |
| 养殖系统 | 绳索、网套、延绳、筏架、木桩、架、盘、底播、综合水产养殖系统或声明变体 | 用于边界、面积、器具、水和分配解释，必填 |
| 产品状态 | 活、鲜、冷藏、清洗、去足丝、净化、暂养、吐沙或声明变体 | 用于 Codex 风格产品和贮存解释，必填 |
| 规格或计数等级 | 每 kg 个数、壳长、等级、袋规格、网袋规格或市场等级 | 使用计数、等级或容器记录时必填 |
| 净化状态 | 来自批准区域直接采收、净化、暂养、吐沙或不适用 | 用于产品质量、暂养和用水解释，必填 |

## 5. 系统边界

默认边界覆盖前景可控的养殖贻贝生产至声明养殖场、采收区、发运中心、包装场或交付边界：

1. 稚贝或苗种来源；当报告主体控制育苗和中间培育时纳入场内育苗和中间培育活动；外购稚贝和纳入声明养殖控制的野外采集稚贝时披露供应育苗场、采集者或中间培育来源。
2. 养成管理，包括养殖单元准备、稚贝采集或投放、装套或重新装套、疏苗、必要时海上分级、器具布设和回收、防污和防捕食管理、受控水体移动、死亡量以及直接控制的维护。
3. 当这些操作在参考产品离开前景边界之前完成时，纳入采收、清洗、分级、必要时去足丝、净化、暂养、吐沙、活体暂养、冷藏、包装和声明边界放行。
4. 当参考流为送达产品而非养殖场门、采收区、发运中心或包装场门产品时，纳入至声明边界的交付。

资本品、长寿命基础设施和长期栖息地改变仅在声明的数据包范围要求时纳入。稚贝、苗种、器具、包装、冰、电力、燃料和其他采购投入需要上游数据集，除非同一运营者控制并在前景包中报告其生产。

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | declared_spat_or_seed_stocking_event |
| starting_condition_role | aquaculture_stock_identity_and_biological_starting_condition |
| product_classification_scope | 当前 CPC 3.0 产品类别 `04432`, `Farmed mussels, live, fresh or chilled` |
| recursive_input_rule | 用于生产商品产品的养殖贻贝稚贝、苗种或中间培育苗，记录为带供应商、育苗场、采集区、中间培育或转移披露的声明苗种起点，不递归作为成品参考产品输出追溯 |
| upstream_dataset_requirement | 稚贝或苗种供应商数据集、场内育苗记录，或记录来源、物种、批次、质量或数量、规格、健康或转运许可、认证或许可证据的文件 |
| disclosure | 披露物种或物种组、养殖系统、稚贝或苗种来源、养成场址或养殖单元、放养密度、养成时长、净化或暂养状态、受控系统水源和排放路径、死亡和剔除量、器具使用和遗失、采收和暂养条件、产品状态、包装状态、声明边界以及未解析的 Tiangong UUID 替代项 |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 数据角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| spat_supply_hatchery_and_nursery | 稚贝供应、育苗与中间培育 | required | 必须声明稚贝、苗种或幼体来源；当报告主体控制场内育苗和中间培育时纳入相应行 | 前景/上游衔接 | 进入养成的可用稚贝或苗种 |
| growout_husbandry | 养成管理 | required |  | 前景生产 | 最终调理前的采收规格养殖贻贝 |
| harvest_washing_depuration_and_packout | 采收、清洗、净化与包装出货 | required |  | 前景调理和边界放行 | 声明的市场化活、鲜或冷藏产品 |
| delivery_to_declared_gate | 至声明边界交付 | conditional | 当参考流为超出养殖场、采收区、发运中心或包装场门的送达产品时纳入 | 前景运输 | 声明边界的送达产品 |

### 过程：稚贝供应、育苗与中间培育（`spat_supply_hatchery_and_nursery`）

#### 输入

##### 产品流

###### 贻贝稚贝、苗种或中间培育苗投入（`spat_seed_or_nursery_stock_input`）

本行记录进入声明生产路径的外购人工稚贝、已纳入养殖控制的野外采集稚贝、转入中间培育苗或内部生产苗。

- 选定流：Mussel spat `75906dc4-d380-471f-99fa-20183a3921bd`
- 流属性/单位：Mass or count with mean size / kg, item, or shell length class
- 数量规则：进入声明养成或中间培育批次的实测稚贝或苗种数量、质量、规格和接收量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 市场化参考产品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_spat_stocking_records`
- 来源：`fao-hatchery-culture-bivalves-2004`, `asc-farm-standard-2025`
- 数量范围：暂定稚贝或苗种投入筛选估计
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0.001
  - 上限：2
  - 单位：kg spat or seed live mass/kg marketable product
  - 基准：相对市场化输出的宽泛首轮稚贝或苗种质量投入
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 场内育苗或中间培育培养投入（`hatchery_nursery_culture_inputs`）

仅当报告主体控制使用微藻、培养基、附着基、采苗器或类似育苗投入的育苗、幼体、附着或中间培育操作时使用本行。

- 选定流：Microalgae, culture medium, collector, settlement substrate, or hatchery input selected from site records
- 流属性/单位：Mass, volume, or item count / kg, L, or item
- 数量规则：按批次和用途计量的育苗或中间培育投入数量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每个苗种或稚贝批次，并在归一化后折算到每 1,000 kg 市场化参考产品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_hatchery_nursery_records`
- 来源：`fao-hatchery-culture-bivalves-2004`, `fao-mediterranean-mussel-factsheet`

###### 育苗和中间培育用水（`hatchery_nursery_water`）

本行覆盖场内育苗和中间培育使用的计量海水、淡水、工艺用水、补充水或循环系统置换水。

- 选定流：Process water `ec205030-248c-496f-9cf2-06d9d26dc6ff`
- 流属性/单位：Mass or volume / kg or m3
- 数量规则：实测取水、补充水、处理水或循环置换水量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每个苗种或稚贝批次，并在归一化后折算到每 1,000 kg 市场化参考产品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_water_quality_and_discharge_records`
- 来源：`fao-hatchery-culture-bivalves-2004`, `asc-farm-standard-2025`

###### 育苗和中间培育电力（`hatchery_nursery_electricity`）

本行覆盖场内育苗或中间培育中泵、曝气、过滤、藻类培养、照明、控温、附着系统和水处理用电。

- 选定流：Electricity `f872677d-2f66-428a-a94e-f0fba61231df`
- 流属性/单位：Energy / kWh
- 数量规则：育苗和中间培育操作的计量或分配电力记录
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每个苗种或稚贝批次，并在归一化后折算到每 1,000 kg 市场化参考产品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_and_fuel_records`
- 来源：`fao-hatchery-culture-bivalves-2004`, `asc-farm-standard-2025`

##### 废物流

###### 育苗死亡、附着残留和剔除稚贝（`hatchery_mortalities_settlement_residue_and_rejected_spat`）

本行记录场内育苗或中间培育产生的卵、幼体、稚贝、附着基残留、有机残留、壳碎片以及剔除或死亡苗种。

- 选定流：Route-specific bivalve mortality or organic aquaculture residue
- 流属性/单位：Mass or count / kg or item
- 数量规则：实测或估算死亡数量、残留质量、剔除苗种以及处置或回收路径
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每个苗种或稚贝批次，并在归一化后折算到每 1,000 kg 市场化参考产品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_mortality_residue_and_gear_records`

##### 基本流

稚贝供应不设置默认基本输入。只有在已选择 Tiangong 身份并明确场址范围时，才加入场址特定海水取用、水体排放或土地/海域占用流。

#### 输出

##### 产品流

###### 进入养成的可用稚贝或苗种（`accepted_spat_or_seed_for_growout`）

本输出将可用稚贝、苗种或中间培育苗带入养成过程。

- 选定流：Mussel spat `75906dc4-d380-471f-99fa-20183a3921bd`
- 流属性/单位：Mass or count with mean size / kg, item, or shell length class
- 数量规则：根据接收、分级、中间培育转移和剔除损失计算可用稚贝或苗种数量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：进入养成的可用稚贝或苗种
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_spat_stocking_records`
- 数量范围：稚贝接收质量平衡 QA 校验
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1
  - 单位：kg/kg spat or seed input
  - 基准：接收、分级和中间培育转移后的可用稚贝或苗种比例
  - 基准类型：过程输出（`process_output`）
  - 证据类型：方法公式（`method_formula`）
  - 来源：`mass-balance-identity`

##### 废物流

除已记录的育苗死亡、残留和剔除稚贝外，不设置其他默认废物输出。

##### 基本流

稚贝供应不设置默认基本输出。只有在实测时才加入场址特定水处理、化学品使用或燃料燃烧直接排放。

### 过程：养成管理（`growout_husbandry`）

#### 输入

##### 产品流

###### 可用稚贝或苗种转入养成（`accepted_spat_or_seed_transfer_to_growout`）

本行将可用稚贝或苗种转入声明养成区域或养殖单元。

- 选定流：Mussel spat `75906dc4-d380-471f-99fa-20183a3921bd`
- 流属性/单位：Mass or count with mean size / kg, item, or shell length class
- 数量规则：按延绳、网套、绳索、筏架、木桩、架、盘、底播区或养殖单元记录可用稚贝或苗种质量或数量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：采收归一化前的每个养成批次
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_spat_stocking_records`

###### 养成绳索、网套、浮子、锚和养殖器具（`growout_ropes_socks_floats_anchors_and_culture_gear`）

本行记录用于养殖单元准备、支撑、固定、防捕食、防污管理或采收通行而跨越前景边界的器具和材料。

- 选定流：Aquaculture rope, socking material, float, buoy, anchor, pole, rack, tray, clip, tie, or gear material selected from site records
- 流属性/单位：Mass or item count / kg or item
- 数量规则：声明生产期内实测领用、布设、遗失、更换、回收或消耗的材料；可复用器具必须保留使用寿命和分配基准
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 采收规格产品输出，或按生产期分配的器具服务量
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_culture_gear_and_area_records`
- 来源：`fao-mediterranean-mussel-factsheet`, `asc-farm-standard-2025`

###### 养成电力（`growout_electricity`）

本行覆盖泵、传感器、照明、养殖场分级、液压设备、与养成相连的陆上暂养或其他直接控制养成操作用电。被动开放水域养殖无动力养成操作时，记录为零或带理由的不适用。

- 选定流：Electricity `f872677d-2f66-428a-a94e-f0fba61231df`
- 流属性/单位：Energy / kWh
- 数量规则：养成操作的计量或分配电力记录
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 采收规格产品输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_and_fuel_records`
- 来源：`asc-farm-standard-2025`

###### 养成燃料和作业船能源（`growout_fuel_and_workboat_energy`）

本行覆盖作业船、拖拉机、叉车、发电机、养殖场车辆、采收支持、器具维护或直接控制维护活动使用的柴油或其他燃料。

- 选定流：Diesel oil `9d258d75-6792-4f1c-9856-81602ed8f816`
- 流属性/单位：Fuel quantity / L, kg, or MJ
- 数量规则：实测燃料采购、油罐记录、船舶日志、车辆日志或分配设备燃料
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路径特定（`route_specific`）
- 归一化基准：每 1,000 kg 采收规格产品输出
- 基准类型：燃料清单（`fuel_inventory`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_and_fuel_records`
- 来源：`asc-farm-standard-2025`

###### 有意投喂、施肥或藻类投入（`intentional_feed_fertilizer_or_algal_input`）

仅当贻贝养成有意使用饲料、施肥、池塘增肥、补充藻类或类似物料投入时使用本行。若未使用，数据集必须明确声明适用无外部饲料默认规则。

- 选定流：Site-specific feed, fertilizer, algal input, or enrichment material selected from foreground records
- 流属性/单位：Mass or volume / kg, L, or active ingredient unit
- 数量规则：实测产品量、必要时的有效成分、施用目的和许可状态
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：按养成区域、批次，并在归一化后折算到每 1,000 kg 市场化产品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_feed_fertilizer_and_chemical_records`
- 来源：`asc-farm-standard-2025`

##### 废物流

###### 养成死亡、壳残留、生物污损和捕食损伤贻贝（`growout_mortalities_shell_residue_biofouling_and_predator_damaged_mussels`）

本行记录养成期间去除的死亡、脱落贻贝、破壳、捕食损伤个体、生物污损残留、分选损失和有机残留。

- 选定流：Bivalve shell and organic aquaculture residue
- 流属性/单位：Mass or count / kg or item
- 数量规则：实测死亡数量、死亡质量、壳残留、生物污损残留以及处置、堆肥、回收或回投路径
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：按养成批次，并在归一化后折算到每 1,000 kg 市场化输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_mortality_residue_and_gear_records`
- 来源：`asc-farm-standard-2025`

###### 回收或遗失的养成器具废物（`recovered_or_lost_growout_gear_waste`）

本行记录废弃绳索、网套、网具、浮子、浮标、锚、木桩、夹具、扎带、破损器具和有记录的器具遗失。

- 选定流：Plastic, rope, netting, or mixed aquaculture gear waste selected from site records
- 流属性/单位：Mass or item count / kg or item
- 数量规则：实测废弃、回收、循环利用、复用、处置或遗失器具材料及其去向
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 采收规格产品输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_mortality_residue_and_gear_records`
- 来源：`asc-farm-standard-2025`

##### 基本流

###### 海域占用（`marine_area_occupation`）

当选定 LCA 模型要求面积-时间或栖息地占用流时，本行记录许可或占用养殖面积和时长。

- 选定流：Marine aquaculture area occupation flow selected by local model
- 流属性/单位：Area-time / ha-year or m2-day
- 数量规则：根据有效养殖面积和养殖时长计算，并披露共享场址分配
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 采收规格产品输出
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_culture_gear_and_area_records`
- 来源：`fao-mediterranean-mussel-factsheet`, `asc-farm-standard-2025`

#### 输出

##### 产品流

###### 采收规格养殖贻贝（`harvest_size_farmed_mussels`）

本行记录最终清洗、分级、净化、暂养、活体暂养、冷藏或包装损失之前的养成输出。

- 选定流：Farmed mussels, live, fresh or chilled `fbe2435d-13e6-4119-beaa-b157a7d95f58`
- 流属性/单位：Mass / kg
- 数量规则：按批次、物种、养殖单元、规格等级和包装前产品形态实测采收活体质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：养成过程定量参考
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_harvest_depuration_and_product_records`
- 数量范围：养成采收质量平衡 QA 校验
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1
  - 单位：kg/kg total live biomass before harvest adjustment
  - 基准：声明批次中可得生物量的采收市场规格比例
  - 基准类型：过程输出（`process_output`）
  - 证据类型：方法公式（`method_formula`）
  - 来源：`mass-balance-identity`

##### 废物流

除已记录的养成死亡、残留和器具废物外，不设置其他默认废物输出。

##### 基本流

只有在实测、当地建模规则要求且已支撑选定流身份时，才加入直接营养盐、化学品、生物沉积、沉积物或栖息地相互作用基本流。

### 过程：采收、清洗、净化与包装出货（`harvest_washing_depuration_and_packout`）

#### 输入

##### 产品流

###### 进入包装出货的采收贻贝（`harvested_mussels_input_to_packout`）

本行将采收规格贻贝转入清洗、分级、去足丝、净化、暂养、活体暂养、冷藏和包装出货。

- 选定流：Farmed mussels, live, fresh or chilled `fbe2435d-13e6-4119-beaa-b157a7d95f58`
- 流属性/单位：Mass / kg
- 数量规则：进入采后处理和包装出货的实测采收质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每个包装出货批次
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_harvest_depuration_and_product_records`
- 来源：`codex-cxs-292-2008`, `fao-bivalve-depuration-2008`

###### 清洗、净化、暂养和活体暂养用水（`washing_depuration_relaying_and_live_holding_water`）

本行记录采后使用的水、海水、融冰水或活体暂养系统用水。

- 选定流：Process water `ec205030-248c-496f-9cf2-06d9d26dc6ff`
- 流属性/单位：Mass or volume / kg or m3
- 数量规则：清洗、吐沙、净化、暂养支持、活体暂养、冷藏和清洁用水实测量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_water_quality_and_discharge_records`
- 来源：`fao-bivalve-depuration-2008`, `who-fao-growing-area-guidance-2018`

###### 包装出货电力（`packout_electricity`）

本行覆盖泵、净化系统、紫外或水处理、活体暂养、冷藏、分级设备、称重、清洗和包装用电。

- 选定流：Electricity `f872677d-2f66-428a-a94e-f0fba61231df`
- 流属性/单位：Energy / kWh
- 数量规则：采收、清洗、净化、暂养支持、活体暂养、冷藏和包装出货的计量或分配电力
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_and_fuel_records`
- 来源：`fao-bivalve-depuration-2008`, `asc-farm-standard-2025`

###### 包装、冰和发运材料（`packaging_ice_and_dispatch_materials`）

本行记录随产品跨越前景边界或用于活体/冷藏发运的袋、网袋、箱、内衬、保温容器、标签、托盘、扎带、冰、凝胶冰袋和可复用包装。

- 选定流：Packaging materials, unspecified `7336a8ee-9e4d-49a6-9fe5-ce285f613245`
- 流属性/单位：Mass or item count / kg or item
- 数量规则：实测包装件数和材料质量；计数记录需包含容量、皮重、冰质量和复用率
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_and_ice_records`
- 来源：`codex-cxs-292-2008`

##### 废物流

###### 包装出货中的降级、损伤、死亡或破损贻贝（`offgrade_damaged_dead_or_broken_mussels_packout`）

本行记录清洗、净化、分级或包装期间移除的非市场化贻贝、包装死亡、破壳、分选剔除、异物、沉积物和残留。

- 选定流：Bivalve shell and organic aquaculture residue
- 流属性/单位：Mass or count / kg or item
- 数量规则：按去向和原因实测剔除质量或数量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_mortality_residue_and_gear_records`
- 来源：`codex-cxs-292-2008`, `fao-bivalve-depuration-2008`

###### 包装出货废水和污泥（`packout_wastewater_and_sludge`）

本行记录采后操作排出的清洁、清洗、净化、暂养支持、冷藏或活体暂养用水和污泥。

- 选定流：Sludge `725c8f6e-7975-4155-a250-1f95ef70c508`
- 流属性/单位：Volume or mass / m3 or kg
- 数量规则：实测或计算排放体积、污泥质量和处理路径
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_water_quality_and_discharge_records`
- 来源：`fao-bivalve-depuration-2008`, `who-fao-growing-area-guidance-2018`

##### 基本流

包装出货不设置默认基本输出。只有在实测或选定建模规则要求时，才加入直接制冷剂损失、燃烧排放、消毒剂排放或水体排放。

#### 输出

##### 产品流

###### 市场化养殖贻贝参考产品（`marketable_farmed_mussel_reference_product`）

本行是声明参考产品输出。

- 选定流：Farmed mussels, live, fresh or chilled `fbe2435d-13e6-4119-beaa-b157a7d95f58`
- 流属性/单位：Mass / kg
- 数量规则：清洗、分级、必要时净化或暂养、包装出货后的实测市场化活、鲜或冷藏产品质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_harvest_depuration_and_product_records`
- 来源：`codex-cxs-292-2008`
- 数量范围：参考产品身份
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：1
  - 上限：1
  - 单位：kg/kg reference product
  - 基准：归一化参考产品输出
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：方法公式（`method_formula`）
  - 来源：`mass-balance-identity`

###### 可销售降级贻贝共产品（`saleable_offgrade_mussel_coproduct`）

仅当降级活、鲜或冷藏贻贝仍作为同一产品族的单独等级销售时使用本行。

- 选定流：Farmed mussels, live, fresh or chilled `fbe2435d-13e6-4119-beaa-b157a7d95f58`
- 流属性/单位：Mass / kg
- 数量规则：按等级和去向实测可销售降级质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每个包装出货批次，并在分配或分割后折算到参考产品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_harvest_depuration_and_product_records`

##### 废物流

除包装出货剔除、废水和污泥外，不设置其他废物输出。

##### 基本流

参考包装出货过程不设置默认基本输出。

### 过程：至声明边界交付（`delivery_to_declared_gate`）

#### 输入

##### 产品流

###### 转入受控交付的产品（`product_transferred_to_controlled_delivery`）

当声明参考流是在报告主体控制下交付至养殖场、采收区、发运中心或包装场门以外的产品时使用本行。

- 选定流：Farmed mussels, live, fresh or chilled `fbe2435d-13e6-4119-beaa-b157a7d95f58`
- 流属性/单位：Mass / kg
- 数量规则：装载用于受控交付的实测市场化产品质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路径特定（`route_specific`）
- 归一化基准：每条受控交付路线和参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_delivery_and_route_records`

###### 受控交付燃料或运输服务（`controlled_delivery_fuel_or_transport_service`）

本行记录至声明边界的直接受控交付燃料、冷藏车辆能源、船舶燃料或运输服务。

- 选定流：Diesel oil `9d258d75-6792-4f1c-9856-81602ed8f816`
- 流属性/单位：Fuel quantity or transport service / L, kg, MJ, or tonne-km
- 数量规则：根据交付质量、距离、车辆和路线记录实测燃料或计算吨公里
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路径特定（`route_specific`）
- 归一化基准：每 1,000 kg 送达参考产品
- 基准类型：运输服务（`transport_service`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_delivery_and_route_records`

##### 废物流

###### 交付剔除或死亡（`delivery_rejects_or_mortalities`）

本行记录受控交付期间的产品死亡、包装损坏、容器泄漏或被拒收产品。

- 选定流：Bivalve shell and organic aquaculture residue
- 流属性/单位：Mass or count / kg or item
- 数量规则：按原因和去向实测交付剔除质量或数量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路径特定（`route_specific`）
- 归一化基准：每 1,000 kg 送达参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_delivery_and_route_records`

##### 基本流

仅当前景交付过程未使用已包含燃烧排放的燃料数据集时，才加入直接交付燃烧排放。

#### 输出

##### 产品流

###### 送达养殖贻贝（`delivered_farmed_mussels`）

仅当声明边界超出养殖场、采收区、发运中心或包装场门时使用本输出。

- 选定流：Farmed mussels, live, fresh or chilled `fbe2435d-13e6-4119-beaa-b157a7d95f58`
- 流属性/单位：Mass / kg
- 数量规则：声明边界处的送达市场化产品质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路径特定（`route_specific`）
- 归一化基准：送达参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_delivery_and_route_records`

##### 废物流

除交付剔除或死亡外，不设置其他废物输出。

##### 基本流

交付过程不设置默认基本输出。

## 7. 分配与共产品处理

如果批次记录能够按养殖区域、养殖单元、物种、采收批次、规格等级、产品形态、净化路径或去向分割负荷，应避免分配。在应用分配前，应先按实测质量区分活、鲜、冷藏、规格等级、降级和交付产品。

当一个前景批次在 CPC 04432 内产生多个可销售等级时，除非记录了经审查的市场价值规则，否则按声明产品质量分配共享稚贝、器具、养成、采收、清洗、净化、暂养、冷藏、包装和交付负荷。贝壳、死亡、废水、污泥、沉积物、生物污损残留、废弃器具以及破损或死亡产品属于废物或处理输出，除非其以单独产品数据集和参考流销售。

如果同一场址在同一区域、筏架、绳索系统、木桩区、架、底播区或船舶路线中养殖多个物种或其他水产产品，应按直接计量的养殖单元服务量、面积-时间、生物量-时间或产品质量依次优先分配共享记录。除非单独经审查的生态系统服务方法在范围内且未重复计入被抵扣服务，否则不得将过滤、营养盐去除、碳储存或栖息地服务抵扣分配给参考产品。

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_spat_stocking_records` | spat_supply_hatchery_and_nursery; growout_husbandry | spat, seed, nursery stock input and accepted stock output | hatchery transfer, spat collection record, supplier invoice, stocking log, movement or health certificate | species; batch id; supplier, hatchery, nursery, or collection area; count; mean size; mean mass where available; total mass; size grade; health or movement status; transfer date | supplier records, hatchery logs, collection permits, stocking count, sampling and weighing | item, shell length, and kg | each spat receipt, spat collection, nursery transfer, or stocking event | complete production batch or reporting year | supplier, hatchery, nursery, collection area, and grow-out unit | sum accepted spat counts and masses by batch; calculate mean size, mean mass, and survival to grow-out or harvest | signed transfer records, permit or collection evidence, sampling sheet, weighing record, health or movement document |
| `cp_hatchery_nursery_records` | spat_supply_hatchery_and_nursery | on-site hatchery and nursery microalgae, culture media, settlement substrate, collectors, and seed-production inputs | hatchery log, algal culture log, substrate issue record, collector deployment record, supplier invoice | input type; quantity; concentration where relevant; batch id; purpose; date; settlement or nursery unit | hatchery batch records, supplier documents, metering, weighing, or inventory issue | kg, L, item, or concentration unit | each batch or reporting period | seed-production or nursery period linked to market batch | on-site hatchery, larval room, settlement unit, collector line, or nursery | normalize seed-production inputs to accepted spat or seed and then to reference product | hatchery batch sheet, supplier invoice, inventory log, production reconciliation |
| `cp_culture_gear_and_area_records` | growout_husbandry | culture area, ropes, socks, longlines, floats, buoys, anchors, poles, rafts, racks, trays, and shared-site allocation | lease record, farm map, gear issue log, service-life record, maintenance record | culture area; coordinates or plot id; gear type; material; item count; mass; service life; deployment date; retrieval date; loss or reuse fate | lease documents, GIS map, farm log, gear inventory, weighing, maintenance record | ha, m2, item, kg, ha-year, or m2-day | deployment event, retrieval event, or reporting period | grow-out period and shared-site allocation period | licensed area, raft, line, pole field, rack, tray, bottom plot, or vessel-supported area | calculate area-time and allocated material use by culture unit, batch, or product mass | permit or lease, gear inventory, maintenance log, retrieval record |
| `cp_feed_fertilizer_and_chemical_records` | growout_husbandry | intentional feed, fertilizer, supplemental algae, pond enrichment, predator-control chemicals, disinfectants, or other material applications | application log, purchase invoice, safety data sheet, permit record | product; active ingredient; quantity; concentration; target; application area; date; legal or certification status | farm application log, supplier invoice, chemical inventory, permit report | kg, L, or active ingredient unit | each application | grow-out, pond, or treatment period | grow-out area, pond, treatment unit, or storage area | normalize applied product or active ingredient to culture area and marketable output; record zero only when no external-feed declaration is present | application record, invoice, permit or certification evidence, inventory reconciliation |
| `cp_water_quality_and_discharge_records` | spat_supply_hatchery_and_nursery; growout_husbandry; harvest_washing_depuration_and_packout | water intake, pumped seawater, depuration water, live holding water, water-quality monitoring, wastewater, sludge, and discharge | meter readings, pump logs, depuration records, water-quality tests, discharge permits | intake volume; make-up water; recirculated volume; discharge volume; sludge mass; water source; discharge route; treatment; salinity; temperature; microbial or biotoxin monitoring where relevant | meter, pump runtime calculation, depuration log, water-quality testing, permit report, or water management log | m3, kg, or test result unit | daily, batch, harvest lot, or reporting period | process-specific operation period | hatchery, grow-out, depuration, relaying, live holding, packhouse, and discharge point | reconcile intake, recirculation, discharge, and ambient water exclusions; normalize controlled water, wastewater, and sludge to process output and reference flow | meter calibration, depuration log, laboratory result, permit report, water-quality monitoring record |
| `cp_energy_and_fuel_records` | spat_supply_hatchery_and_nursery; growout_husbandry; harvest_washing_depuration_and_packout; delivery_to_declared_gate | electricity, diesel, vessel fuel, vehicle fuel, generator fuel, refrigerated vehicle energy, and farm equipment energy | utility bill, submeter, fuel purchase, tank drawdown, vessel log, tractor log, equipment log | electricity use; fuel type; quantity; meter id; process allocation; operating hours; route; vessel or equipment; distance; process purpose | utility bill, submeter, fuel invoice, tank gauge, vehicle or vessel log, equipment runtime | kWh, MJ, L, kg, or tonne-km | monthly, each trip, work event, batch, or reporting period | reporting period and production batch overlap | farm, hatchery, grow-out unit, depuration centre, live holding area, packhouse, route, vessel, vehicle, or equipment | allocate by metered subprocess first, then operating hours, culture area-time, route service, or product mass | utility bill, submeter records, fuel invoice, odometer, vessel log, equipment log, allocation worksheet |
| `cp_mortality_residue_and_gear_records` | spat_supply_hatchery_and_nursery; growout_husbandry; harvest_washing_depuration_and_packout; delivery_to_declared_gate | mortalities, shells, residues, rejects, biofouling, discarded or lost gear, and delivery losses | mortality log, reject sheet, waste manifest, gear loss record, recovery record | count; mass; reason; fate; date; culture unit; shell, organic residue, sediment, foreign matter, or gear category | farm log, packhouse reject record, weighing, waste contractor record, retrieval log | item and kg | event, batch, harvest lot, delivery route, or reporting period | full production batch, pack-out period, or delivery period | hatchery, grow-out unit, packhouse, waste handling route, or delivery route | sum by fate and normalize to process output and reference product | signed waste record, farm mortality log, gear retrieval record, mass balance |
| `cp_harvest_depuration_and_product_records` | growout_husbandry; harvest_washing_depuration_and_packout | harvest-size product, marketable reference product, off-grade product, depuration release, and product state | harvest log, grading sheet, depuration release record, sales invoice, dispatch record, pack-out record | harvest date; culture unit; species; product state; shell-on or declared basis; purification status; grade; count; mass; destination | harvest weighing, grader records, depuration or dispatch records, packhouse records, invoice | kg and item | each harvest, depuration release, or pack-out batch | declared production batch, harvest lot, or reporting period | harvest area, depuration or dispatch centre, packhouse, and declared gate | reconcile harvested input, marketable output, off-grade product, rejects, holding losses, and reference product | calibrated scale record, sales invoice, dispatch record, batch reconciliation |
| `cp_packaging_and_ice_records` | harvest_washing_depuration_and_packout | sacks, mesh bags, boxes, liners, labels, ice, gel packs, pallets, and reusable containers | packaging issue log, ice production or purchase record, purchase invoice, bill of materials | packaging item; material; item count; tare mass; capacity; reuse rate; ice or gel pack mass; destination | warehouse issue record, bill of materials, supplier invoice, weighing | kg and item | each pack-out batch or reporting period | pack-out and delivery preparation period | packhouse and dispatch area | convert count to mass using tare or supplier data; allocate reusable packaging; normalize to reference product | supplier specification, packaging issue sheet, ice record, scale record |
| `cp_delivery_and_route_records` | delivery_to_declared_gate | controlled delivery load, fuel, transport service, rejects, and delivered product | delivery log, vehicle or vessel log, fuel record, dispatch note, receiving note | delivered mass; route; distance; vehicle or vessel; fuel; refrigeration or ice service; rejects; delivery date; receiving gate | dispatch record, GPS or route log, fuel invoice, receiving record | kg, L, MJ, tonne-km, and item | each controlled delivery route | delivery period linked to production batch | controlled delivery route and declared gate | calculate tonne-kilometres and delivery losses; normalize to delivered reference product | delivery manifest, receiving note, fuel record, route evidence |

### 计算规则

| rule_id | 适用对象 | 公式或规则 | 输入 | 输出 | source_ids |
| --- | --- | --- | --- | --- | --- |
| `normalize_to_reference_flow` | all foreground rows | normalized_amount = measured_or_calculated_amount / marketable_reference_product_mass. Preserve raw records and product-state basis. | measured amount; marketable_reference_product_mass | amount per 1 kg reference product | `mass-balance-identity` |
| `calculate_spat_acceptance_and_survival` | spat_supply_hatchery_and_nursery and growout_husbandry | accepted_spat_or_seed = received_or_collected_spat - rejected_spat; survival_to_harvest = harvested_count / accepted_spat_count when count records are available. Retain count-to-mass conversion separately. | received spat; collected spat; rejected spat; stocked count; harvested count; mortality count | accepted spat or seed, survival indicator, and QA check | `mass-balance-identity` |
| `calculate_area_time_intensity` | growout_husbandry | area_time = active_culture_area * active_culture_duration; allocate shared area by culture-unit records, biomass-time, or product mass as declared. | culture area; active days; allocation basis; product mass | ha-year or m2-day per reference product | `mass-balance-identity` |
| `apply_no_external_feed_default` | growout_husbandry | grow-out feed amount is zero only when no intentional feed, fertilization, pond enrichment, or supplemental algal input is recorded. If such inputs are used, record them as product inputs and disclose purpose and quantity. | feed records; enrichment records; farm declaration | feed or enrichment applicability flag and material amount | `asc-farm-standard-2025` |
| `reconcile_packout_mass` | harvest_washing_depuration_and_packout | harvested_input_mass = reference_product_mass + offgrade_saleable_mass + reject_mass + measured holding or drainage loss on the same product-form basis. | harvested_input_mass; reference_product_mass; offgrade_mass; reject_mass; holding_loss | pack-out mass balance | `mass-balance-identity` |
| `calculate_controlled_discharge` | water intake and discharge rows | controlled_discharge = measured_discharge or intake - recirculated_volume - retained_or_removed_water adjustment when meters are incomplete. Ambient open-water exchange is excluded. | intake; discharge; recirculated volume; retained water; removed water | controlled discharge volume by process | `mass-balance-identity` |
| `calculate_packaging_and_ice_mass` | packaging and ice rows | material_mass = item_count * tare_or_supplier_mass, adjusted for reuse allocation where applicable. | item count; tare mass; supplier mass; reuse rate; ice mass | kg packaging or ice per reference product | `mass-balance-identity` |
| `calculate_delivery_transport_service` | delivery_to_declared_gate | transport_service = delivered_product_mass_tonnes * one-way controlled delivery distance. | delivered mass; controlled distance; route | tonne-kilometres | `mass-balance-identity` |

### 数据质量要求

| requirement_id | 适用对象 | 要求 | 证据 |
| --- | --- | --- | --- |
| `identity_and_scope` | all datasets | 声明 CPC 代码、物种或物种组、养殖系统、稚贝或苗种来源、采收区、产品状态、净化状态、地理范围和声明边界。 | 数据集元数据、投放记录、采收记录、产品说明、许可、认证或转运证据 |
| `mass_basis_consistency` | reference product, spat, harvest, pack-out, rejects, packaging, and ice | 区分带壳、活、鲜、冷藏、沥水、清洗、湿、干、计数、容器和净质量基准，除非有实测换算证据。 | 称量记录、产品规格、每 kg 个数记录、容器皮重、沥水或含水证据 |
| `no_feed_and_material_disclosure` | grow-out rows | 声明是否使用外部饲料、施肥、池塘增肥、补充藻类、防捕食化学品、消毒剂或其他养成物料投入。无饲料必须是明确前景声明，不是省略记录。 | 养殖场声明、施用记录、化学品库存、认证审核、供应商记录 |
| `water_and_purification_disclosure` | hatchery, grow-out, depuration, relaying, washing, and live holding | 区分环境开放水体交换与受控取水、处理、循环、净化、活体暂养和排放。 | 水表、泵日志、净化记录、实验室结果、许可报告 |
| `mortality_residue_and_gear_completeness` | spat, grow-out, pack-out, and delivery rows | 按批次或报告期记录死亡、剔除、贝壳、沉积物、生物污损残留、废弃或遗失器具及其去向。 | 死亡日志、剔除单、废物联单、器具回收记录、回收记录 |
| `allocation_transparency` | multi-species, multi-grade, or shared-site systems | 作为二级或背景数据集发布前，说明分割或分配基准。 | 分配工作表、等级质量记录、面积-时间记录、养殖单元记录 |
| `temporal_representativeness` | all foreground rows | 覆盖完整生产批次、采收批次、净化周期、交付路线或代表性报告期；披露部分周期数据集。 | 生产日历、投放和采收日期、净化记录、交付记录、报告期记录 |

## 9. 验证规则

前景数据包仅在满足以下条件时符合本 PCR：

- 参考产品归一化为声明活、鲜或冷藏产品形态下的 1 kg 养殖贻贝；
- 声明物种或物种组、养殖系统、稚贝或苗种来源、采收区、产品状态、带壳或声明产品基准、规格或计数等级、净化或暂养状态、地理范围、声明边界、暂养时长和包装状态；
- 稚贝或苗种投入、养殖面积或器具、能源、燃料、受控用水、死亡或残留、采收、包装出货、包装以及相关交付均存在，或明确标记为不适用并给出理由；
- 计数、袋、网袋、箱、绳索、网套、簇或体积记录包含实际净质量、皮重、每 kg 个数、平均规格或其他透明 kg 换算；
- 养成记录明确说明是否使用外部饲料、有意施肥、池塘增肥、补充藻类、防捕食化学品或消毒剂；
- 水记录区分泵送、供应、处理、净化、活体暂养和排放水与环境开放水体交换；
- 包装出货质量平衡能够核对采收投入、参考产品、可销售降级产品、剔除以及暂养或沥水损失；
- 同场址多物种、共享区域、共享器具或多等级分配在数据集作为背景或二级数据集使用前完成记录；
- 任何过滤、营养盐去除、碳储存或栖息地服务主张均排除在产品清单之外，除非声明了单独经审查的方法和有来源支撑的数量。

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 经审查后可发布为 `secondary_dataset` 或 `background_dataset` 的前景生产包 |
| downstream_use | 作为养殖贻贝投入用于海产品加工、餐饮、零售、冷链、活体海产品流通或区域食品产品生命周期模型 |
| allowed_use | 具有声明物种、养殖系统、产品状态、采收区、净化状态、边界和质量披露的养殖贻贝活、鲜或冷藏数据集 |
| excluded_use | 野生采捕、冷冻/烟熏/干制/盐腌/盐水浸泡/加工贻贝、通用贝类数据集、牡蛎、扇贝、蛤、鸟蛤、赤贝、鲍鱼、作为苗种销售的稚贝、贝壳产品数据集，以及缺少物种、养殖系统或产品状态披露的数据集 |
| required_metadata | canonical PCR id; CPC code; species or species group; culture system; spat or seed source; harvest area; product state; shell-on or declared basis; size or count grade; purification or depuration status; geography; declared gate; holding or chilling duration; packaging state; data period; allocation basis |
| required_quality_disclosure | missing UUIDs; unresolved mussel product, spat, shell residue, gear, habitat, seawater, discharge, or depuration treatment flow identities; no-feed declaration; water and purification records; gear loss records; mortality completeness; pack-out mass balance; partial-cycle or proxy data use |
| update_trigger | 当 CPC 映射变化，Tiangong 贻贝、稚贝、壳残留、水、排放、器具或栖息地流身份更新，Codex、FAO、ASC 或同等水产养殖与卫生指导变化，或经审查前景数据集提供更好的来源支撑范围时修订 |

## 11. 数据来源

| Source id | 类型 | 引用 | 用途 |
| --- | --- | --- | --- |
| `codex-cxs-292-2008` | standard | <https://www.fao.org/fao-who-codexalimentarius/sh-proxy/ru/?lnk=1&url=https%253A%252F%252Fworkspace.fao.org%252Fsites%252Fcodex%252FStandards%252FCXS%2B292-2008%252FCXS_292e.pdf> | 活体和生食双壳贝产品定义、活体产品处理、标签、净含量声明、净化背景、卫生和质量因素 |
| `fao-hatchery-culture-bivalves-2004` | handbook | <https://openknowledge.fao.org/handle/20.500.14283/y5720e> | 双壳贝育苗、幼体、附着、中间培育、苗种生产、用水和培养投入过程背景 |
| `fao-bivalve-depuration-2008` | handbook | <https://www.fao.org/4/i0201e/i0201e.pdf> | 净化中心运行、过程控制、水处理、采后活体暂养和 HACCP 导向的净化背景 |
| `who-fao-growing-area-guidance-2018` | official_guidance | <https://www.who.int/publications/i/item/9789241514750> | 养殖区监测、卫生计划背景、采收区分类以及 Codex 要求与双壳贝生产控制之间的联系 |
| `fao-mediterranean-mussel-factsheet` | official_guidance | <https://www.fao.org/fishery/culturedspecies/mytilus_galloprovincialis/en> | 地中海贻贝式系统的筏架、绳索、采苗器和养成路径背景 |
| `asc-farm-standard-2025` | standard | <https://programme-centre.asc-aqua.org/app/uploads/2025/08/ASC-STD-001-ASC-Farm-Standard-V1.0.1-Aug-2025.pdf> | 当前 ASC 养成场址范围、运营过程边界、追溯、水、能源、健康、法律、器具和环境数据要求 |
| `mass-balance-identity` | method_factor | Conservation of mass applied as a PCR calculation identity for spat acceptance, grow-out, pack-out, discharge, delivery, and reference-flow normalization. | QA 校验、存活、得率、包装出货核对、包装换算、交付服务计算和归一化规则 |
