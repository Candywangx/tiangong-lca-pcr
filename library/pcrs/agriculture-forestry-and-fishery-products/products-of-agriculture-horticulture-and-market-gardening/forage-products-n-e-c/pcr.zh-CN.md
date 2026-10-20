---
pcr_id: pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.forage-products-n-e-c
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 未另分类的饲草产品

## 1. 范围与适用性

本 PCR 适用于一种明确命名、以饲草为生产目的的 CPC 01919 作物或产品，例如饲用甜菜、胡萝卜、芜菁、高粱、三叶草、羽衣甘蓝、羽扇豆、红豆草、野豌豆、干草或饲用芜菁甘蓝。边界从作物建植和生产开始，经过收获，可选择延伸至首次萎蔫、干燥、切碎、打捆、制粒、清理或分级后的交付点。

不包括玉米青贮/饲草、苜蓿、谷物秸秆或颖壳、并非为饲草生产的作物、复合饲料或配方饲料、放牧服务，以及首次调制之后的饲料制造。每个数据包只代表一种指定产品及一个交付状态。

## 2. 产品类别标识

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.forage-products-n-e-c |
| classification_refs | CPC 3.0: 01919（未另分类的饲草产品）; mapping relation: narrower |
| covered_products | 一种明确命名、以饲草为目的的作物或产品，在收获或首次调制交付点 |
| excluded_products | 玉米饲草；苜蓿；谷物秸秆和颖壳；非饲草作物；复合/配方饲料；放牧服务；后续饲料制造 |
| representative_product | 在声明含水率或干物质状态下的一种指定饲草产品 |
| production_route | 建植与管理生产 → 收获/收集 → 可选首次调制 → 交付 |
| market_state | 收获态新鲜饲草，或声明为萎蔫、干燥、切碎、打捆、制粒、清理或分级的首次调制饲草 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 在所选交付点的一种指定饲草产品 |
| How much | 1 kg 净产品 |
| How well | 声明物种/产品、植物部位、形态、等级、含水率或干物质，以及调制状态 |
| How long or cycle | 声明地块和作物期；多年生或多期投入保持期间关联 |
| reference_flow_link | reference_product_at_declared_handoff |

| 字段 | 值 |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | 指定饲草产品（UUID 未解析） |
| 参考流属性 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | 物种/产品；植物部位；收获形态；含水率或干物质；等级；作物期；生产系统；调制状态；交付点 |

每份前景数据包须声明实际路线、终端产品状态和交接门，保留原始称量、质量平衡及批次追溯记录。以该门的唯一交接参考输出归一化，前序工序采用实测转移数量。

唯一参考输出为 `reference_product_at_declared_handoff`，由下列实际路线在声明交接门的产品承接。原路线输出编号用于追溯实际来源和物理状态，不再分别固定为参考数量。

## 4. 计量与单位规则
| rule_id | 适用于 | 必需属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | 参考产品 | Mass（UUID 未解析） | kg | 使用去皮重后的净质量；同时声明含水率或干物质基准。 |
| `moisture_conversion` | 新鲜、萎蔫和干燥产品 | Mass | kg | 仅在记录配对含水率、测定方法和换算公式时进行湿基/干基换算。 |
| `area_time` | 土地占用 | Area*time | m2·year | 根据地块面积和实际占用时长计算，并按同一作物期产出归一化。 |
| `transport_work` | 道路货运 | Transport work | t·km | 净运输吨数乘以满载公里；返空处理必须单独披露。 |

## 5. 系统边界

### 边界抽象

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 指定地块上明确命名的饲草作物在建植或本报告作物期开始时的状态 |
| starting_condition_role | 前景作物生产的起始状态；上游投入使用独立数据集 |
| product_classification_scope | 一种 CPC 01919 指定饲草产品，不跨越被排除的相邻类别 |
| recursive_input_rule | 若同类别饲草作为种植或调制投入，作为已交付的上游产品数据集记录，并按来源、状态和交付点区分；不得递归重建同一产品系统 |
| upstream_dataset_requirement | 种子、肥料、农药、能源、水和服务投入使用适合其供应边界的独立上游数据 |
| disclosure | 声明物种/产品、地块、作物期、生产系统、收获方法、含水率、形态、等级、首次调制作业和所选交付点 |

### 边界规则

| rule_id | 适用于 | 规则 | source_ids |
| --- | --- | --- | --- |
| boundary_named_product | Product scope | Model one named forage species/product and plant part at one declared state and gate. Exclude maize forage, alfalfa, cereal straw or husks, crops not grown for forage, compound feed and grazing services. | unsd-cpc-01919 |
| boundary_gate_choice | Reference gate | Select either harvest handoff or the first declared conditioning handoff. If conditioning is selected, harvested forage is an intermediate and only the conditioned product is the reference output. | fao-grassland-forage |
| boundary_conditional_conditioning | Primary conditioning | Include only operations actually performed before the selected gate; identify the raw input state, conditioned output state, service inputs, residues and rejects. | fao-grassland-forage |
| boundary_periods_assets | Periods and shared assets | Retain establishment, annual or multi-year crop periods and shared machinery or facility use; attribute each burden once to its actual consuming node and period. | iso-14044-allocation |

## 6. 过程清单结构

### 过程图

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| forage_crop_production | 饲草作物建植与生产管理 | required | 栽培饲草必须纳入；田间生产在可收获作物交接点结束。 | 建植并管理指定饲草作物，报告可收获生物量。 | 按地块和作物期计量的可收获饲草质量。 |
| forage_harvest | 饲草收获与田间收集 | required | 割草、切割、起根或其他从生产环境中移除的作业必须纳入。 | 独立记录收获责任，并核对收集产品、田间残留物和损失。 | 离开收获过程的指定饲草产品净质量。 |
| primary_forage_conditioning | 可选的首次饲草调制 | conditional | 仅当所选交付点之前发生萎蔫、干燥、切碎、打捆、制粒、清理或分级时纳入。 | 将收获饲草转为一种明确的首次调制状态，不包括饲料配方加工。 | 在声明含水率、形态和等级下的调制饲草净质量。 |
| declared_reference_handoff | 声明交接门的产品计量 | required |  | foreground | reference_product_at_declared_handoff |

### 过程：饲草作物建植与生产管理 (`forage_crop_production`)

建植并管理指定饲草作物，报告可收获生物量。

#### 输入
##### 产品流

###### 种子或繁殖材料 (`propagation_material`)

记录转入指定饲草作物的种子、根冠、插条或其他种植材料。

- 选定流: Named-crop propagation material; UUID unresolved until species and form are known
- 流属性/单位: Mass / kg or verified count unit
- 数量规则: Measured purchased or internally transferred planting material
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 产品特定 (`product_specific`)
原始活动或阶段基准：每 1 kg 参考饲草，并保留地块和作物期关联.

- 归一化基准：每声明的参考流
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_propagation`

- 数量范围: 暂定路线筛选区间；在评审或 active 使用前用产品、地点和技术特定证据替换
  - 范围角色: 默认估计 (`default_estimate`)
  - 下限: 0
  - 上限: 0.5
  - 单位: kg/kg reference forage
  - 基准: 种植材料按参考饲草归一化的宽泛筛选区间
  - 基准类型: 参考流 (`reference_flow`)
  - 证据类型: 推理估算 (`reasoned_estimate`)

###### 尿素肥料投入（`nutrient_inputs`）

仅当声明的过程实际使用尿素肥料时纳入此条件卡。其他实际产品或能源须各自建立单一交换，记录独立身份和实测数量；不得从本示例推定其必然使用。

- 选定流：尿素肥料
- 数量规则：记录该过程和期间实际使用的尿素肥料数量；只有路线记录证明未使用时，才填零或不适用。
- 流属性/单位：质量 / kg 产品
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 产品特定 (`product_specific`)
原始活动或阶段基准：按地块和作物期记录，再归一化至每 1 kg 参考饲草.

- 归一化基准：每声明的参考流
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_nutrients`

###### 磷酸一铵肥料投入（`nutrient_inputs_monoammonium_phosphate`）

仅当声明的过程实际使用磷酸一铵肥料时纳入此条件卡。其他实际产品或能源须各自建立单一交换，记录独立身份和实测数量；不得从本示例推定其必然使用。

- 选定流：磷酸一铵肥料
- 数量规则：记录该过程和期间实际使用的磷酸一铵肥料数量；只有路线记录证明未使用时，才填零或不适用。
- 流属性/单位：质量 / kg 产品
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 产品特定 (`product_specific`)
原始活动或阶段基准：按地块和作物期记录，再归一化至每 1 kg 参考饲草.

- 归一化基准：每声明的参考流
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_nutrients`

###### 氯化钾肥料投入（`nutrient_inputs_potassium_chloride`）

仅当声明的过程实际使用氯化钾肥料时纳入此条件卡。其他实际产品或能源须各自建立单一交换，记录独立身份和实测数量；不得从本示例推定其必然使用。

- 选定流：氯化钾肥料
- 数量规则：记录该过程和期间实际使用的氯化钾肥料数量；只有路线记录证明未使用时，才填零或不适用。
- 流属性/单位：质量 / kg 产品
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 产品特定 (`product_specific`)
原始活动或阶段基准：按地块和作物期记录，再归一化至每 1 kg 参考饲草.

- 归一化基准：每声明的参考流
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_nutrients`

###### 施用的牛粪肥投入（`nutrient_inputs_cattle_manure`）

仅当声明的过程实际使用施用的牛粪肥时纳入此条件卡。其他实际产品或能源须各自建立单一交换，记录独立身份和实测数量；不得从本示例推定其必然使用。

- 选定流：施用的牛粪肥
- 数量规则：记录该过程和期间实际使用的施用的牛粪肥数量；只有路线记录证明未使用时，才填零或不适用。
- 流属性/单位：质量 / kg 产品
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 产品特定 (`product_specific`)
原始活动或阶段基准：按地块和作物期记录，再归一化至每 1 kg 参考饲草.

- 归一化基准：每声明的参考流
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_nutrients`

###### 农业石灰石投入（`nutrient_inputs_agricultural_limestone`）

仅当声明的过程实际使用农业石灰石时纳入此条件卡。其他实际产品或能源须各自建立单一交换，记录独立身份和实测数量；不得从本示例推定其必然使用。

- 选定流：农业石灰石
- 数量规则：记录该过程和期间实际使用的农业石灰石数量；只有路线记录证明未使用时，才填零或不适用。
- 流属性/单位：质量 / kg 产品
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 产品特定 (`product_specific`)
原始活动或阶段基准：按地块和作物期记录，再归一化至每 1 kg 参考饲草.

- 归一化基准：每声明的参考流
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_nutrients`

作物保护必需记录：完成前景数据包前，逐项列明实际施用的每一种制剂，保留商品名、有效成分、盐或化学形态、浓度、必要时的密度、施用量、日期和处理面积。每项交换选用一个物理上明确的产品身份；有效成分释放按物质及接收区室另行计算。缺少配方身份属于完整性缺口，不得用通用农药、虚构示例或假定为零替代。

###### 灌溉用水 (`irrigation_water`)

记录灌溉供应水量；降雨属于背景信息，不作为产品流投入。

- 选定流: Irrigation water selected from the actual source record
- 流属性/单位: Volume / m3 preferred
- 数量规则: Metered or supplier-recorded irrigation volume
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
原始活动或阶段基准：按每公顷和作物期记录，再归一化至参考饲草产出.

- 归一化基准：每声明的参考流
- 基准类型: 作物周期 (`crop_cycle`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_irrigation`

- 数量范围: 暂定路线筛选区间；在评审或 active 使用前用产品、地点和技术特定证据替换
  - 范围角色: 默认估计 (`default_estimate`)
  - 下限: 0
  - 上限: 15000
  - 单位: m3/ha·crop period
  - 基准: 灌溉水量筛选区间
  - 基准类型: 作物周期 (`crop_cycle`)
  - 证据类型: 推理估算 (`reasoned_estimate`)

###### 中压电力投入（`production_energy`）

仅当声明的过程实际使用中压电力时纳入此条件卡。其他实际产品或能源须各自建立单一交换，记录独立身份和实测数量；不得从本示例推定其必然使用。

- 选定流：中压电力
- 数量规则：记录该过程和期间实际使用的中压电力数量；只有路线记录证明未使用时，才填零或不适用。
- 流属性/单位：能量 / kWh
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 技术特定 (`technology_specific`)
原始活动或阶段基准：按作物期记录并归一化至每 1 kg 参考饲草.

- 归一化基准：每声明的参考流
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_production_energy`

###### 柴油投入（`production_energy_diesel`）

仅当声明的过程实际使用柴油时纳入此条件卡。其他实际产品或能源须各自建立单一交换，记录独立身份和实测数量；不得从本示例推定其必然使用。

- 选定流：柴油
- 数量规则：记录该过程和期间实际使用的柴油数量；只有路线记录证明未使用时，才填零或不适用。
- 流属性/单位：质量 / kg
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 技术特定 (`technology_specific`)
原始活动或阶段基准：按作物期记录并归一化至每 1 kg 参考饲草.

- 归一化基准：每声明的参考流
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_production_energy`

##### 废物流

##### 基本流

###### 农业用地占用 (`land_occupation`)

计算声明作物期的占地面积与时间。

- 选定流: Agricultural land occupation elementary flow; UUID unresolved
- 流属性/单位: Area*time / m2·year
- 数量规则: Field area multiplied by occupation duration
- 数值来源模式: 计算值 (`calculated_value`)
- 适用范围: 场址特定 (`site_specific`)
原始活动或阶段基准：按作物期并归一化至参考产出.

- 归一化基准：每声明的参考流
- 基准类型: 作物周期 (`crop_cycle`)
- 证据类型: 由采集数据计算 (`calculated_from_collection`)
- 采集协议: `cp_land_history`

- 数量范围: 暂定路线筛选区间；在评审或 active 使用前用产品、地点和技术特定证据替换
  - 范围角色: 默认估计 (`default_estimate`)
  - 下限: 0.01
  - 上限: 1000
  - 单位: m2·year/kg reference forage
  - 基准: 面积时间宽泛筛选区间
  - 基准类型: 参考流 (`reference_flow`)
  - 证据类型: 推理估算 (`reasoned_estimate`)

###### 土地转化 (`land_transformation`)

仅记录有证据且归属于声明生产系统的土地覆盖转化。

- 选定流: Land transformation elementary flow by prior and new cover; UUID unresolved
- 流属性/单位: Area / m2
- 数量规则: Mapped transformed area allocated once over the declared attribution period
- 数值来源模式: 计算值 (`calculated_value`)
- 适用范围: 场址特定 (`site_specific`)
原始活动或阶段基准：在声明归属期内每 1 kg 参考饲草.

- 归一化基准：每声明的参考流
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 由采集数据计算 (`calculated_from_collection`)
- 采集协议: `cp_land_history`

- 数量范围: 暂定路线筛选区间；在评审或 active 使用前用产品、地点和技术特定证据替换
  - 范围角色: 默认估计 (`default_estimate`)
  - 下限: 0
  - 上限: 1000
  - 单位: m2/kg reference forage
  - 基准: 土地转化宽泛筛选区间
  - 基准类型: 参考流 (`reference_flow`)
  - 证据类型: 推理估算 (`reasoned_estimate`)

#### 输出
##### 产品流

###### 可收获饲草生物量 (`harvest_ready_forage`)

记录交接至收获过程的指定作物及植物部位，不得同时计为最终参考产品。

- 选定流: Named harvest-ready forage biomass; UUID unresolved
- 流属性/单位: Mass / kg
- 数量规则: Measured net harvest-ready mass at recorded moisture
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 产品特定 (`product_specific`)
原始活动或阶段基准：按地块和作物期.

- 归一化基准：每声明的参考流
- 基准类型: 作物周期 (`crop_cycle`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_harvest_lot`

- 数量范围: 暂定路线筛选区间；在评审或 active 使用前用产品、地点和技术特定证据替换
  - 范围角色: 默认估计 (`default_estimate`)
  - 下限: 0.01
  - 上限: 100
  - 单位: kg/m2 crop area
  - 基准: 可收获生物量产量的宽泛路线筛选区间
  - 基准类型: 作物周期 (`crop_cycle`)
  - 证据类型: 推理估算 (`reasoned_estimate`)

##### 废物流

###### 移除的杂草与非目标生物量 (`production_residue_removed`)

记录从田间移除的生物量，并按实际去向分类。

- 选定流: Removed non-target biomass; UUID unresolved
- 流属性/单位: Mass / kg dry matter preferred
- 数量规则: Measured or sampled removed biomass by destination
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
原始活动或阶段基准：每 1 kg 可收获饲草.

- 归一化基准：每声明的参考流
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_residues`

- 数量范围: 暂定路线筛选区间；在评审或 active 使用前用产品、地点和技术特定证据替换
  - 范围角色: 默认估计 (`default_estimate`)
  - 下限: 0
  - 上限: 5
  - 单位: kg/kg harvest-ready forage
  - 基准: 残留物宽泛筛选区间
  - 基准类型: 参考流 (`reference_flow`)
  - 证据类型: 推理估算 (`reasoned_estimate`)

##### 基本流

###### 土壤直接氧化亚氮 (`soil_n2o`)

仅依据选定清单方法和有记录的氮活动数据计算直接 N2O。

- 选定流: Nitrous oxide to air; UUID unresolved pending exact compartment verification
- 流属性/单位: Mass / kg N2O
- 数量规则: Calculated from collected nitrogen inputs and the declared method
- 数值来源模式: 计算值 (`calculated_value`)
- 适用范围: 场址特定 (`site_specific`)
原始活动或阶段基准：每 1 kg 参考饲草.

- 归一化基准：每声明的参考流
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 由采集数据计算 (`calculated_from_collection`)
- 采集协议: `cp_nutrients`
- 来源: `ipcc-2019-managed-soils`

- 数量范围: 暂定路线筛选区间；在评审或 active 使用前用产品、地点和技术特定证据替换
  - 范围角色: 默认估计 (`default_estimate`)
  - 下限: 0
  - 上限: 0.1
  - 单位: kg N2O/kg reference forage
  - 基准: 方法计算结果的宽泛 QA 筛选区间
  - 基准类型: 参考流 (`reference_flow`)
  - 证据类型: 推理估算 (`reasoned_estimate`)

### 过程：饲草收获与田间收集 (`forage_harvest`)

独立记录收获责任，并核对收集产品、田间残留物和损失。

#### 输入
##### 产品流

###### 可收获饲草批次 (`harvest_ready_batch`)

以相同物种、地块、作物期和批次标识将生产产出转入收获过程。

- 选定流: Named harvest-ready forage biomass; UUID unresolved
- 流属性/单位: Mass / kg
- 数量规则: Inter-process transferred net mass
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 产品特定 (`product_specific`)
原始活动或阶段基准：每个收获批次.

- 归一化基准：每声明的参考流
- 基准类型: 过程产出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_harvest_lot`

- 数量范围: 暂定路线筛选区间；在评审或 active 使用前用产品、地点和技术特定证据替换
  - 范围角色: 默认估计 (`default_estimate`)
  - 下限: 0.01
  - 上限: 1000000
  - 单位: kg/harvest lot
  - 基准: 批量规模筛选区间
  - 基准类型: 过程产出 (`process_output`)
  - 证据类型: 推理估算 (`reasoned_estimate`)

###### 中压电力投入（`harvest_energy`）

仅当声明的过程实际使用中压电力时纳入此条件卡。其他实际产品或能源须各自建立单一交换，记录独立身份和实测数量；不得从本示例推定其必然使用。

- 选定流：中压电力
- 数量规则：记录该过程和期间实际使用的中压电力数量；只有路线记录证明未使用时，才填零或不适用。
- 流属性/单位：能量 / kWh
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 技术特定 (`technology_specific`)
原始活动或阶段基准：每 1 kg 收获饲草.

- 归一化基准：每声明的参考流
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_harvest_energy`

###### 柴油投入（`harvest_energy_diesel`）

仅当声明的过程实际使用柴油时纳入此条件卡。其他实际产品或能源须各自建立单一交换，记录独立身份和实测数量；不得从本示例推定其必然使用。

- 选定流：柴油
- 数量规则：记录该过程和期间实际使用的柴油数量；只有路线记录证明未使用时，才填零或不适用。
- 流属性/单位：质量 / kg
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 技术特定 (`technology_specific`)
原始活动或阶段基准：每 1 kg 收获饲草.

- 归一化基准：每声明的参考流
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_harvest_energy`

##### 废物流

##### 基本流

#### 输出
##### 产品流

###### 收获的指定饲草产品 (`harvested_forage`)

将此预期产出记录为收获交付点合格的指定饲草；若选择初级调制交付点，则将其作为中间产品。

- 选定流: Named harvested forage product; UUID unresolved
- 流属性/单位: Mass / kg
原始产出计量与核对要求：Measured net accepted mass at declared moisture

- 数量规则：实测净转移质量，保留批次、实际产品状态和含水率基准；在声明交接门对账至最终参考输出。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 产品特定 (`product_specific`)
原始活动或阶段基准：每个收获批次.

- 归一化基准：每声明的参考流
- 基准类型: 过程产出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_harvest_lot`

- 数量范围: 暂定路线筛选区间；在评审或 active 使用前用产品、地点和技术特定证据替换
  - 范围角色: 默认估计 (`default_estimate`)
  - 下限: 0
  - 上限: 1.5
  - 单位: kg/kg harvest-ready batch
  - 基准: 收获质量平衡 QA 区间
  - 基准类型: 过程产出 (`process_output`)
  - 证据类型: 推理估算 (`reasoned_estimate`)

###### 可销售的较低等级饲草 (`lower_grade_forage`)

仅当较低等级产品具有可证实的预定用途和交接点时，将此预期产出单独记录。

- 选定流: Named lower-grade forage product; UUID unresolved
- 流属性/单位: Mass / kg
- 数量规则: Measured mass by grade and destination
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 产品特定 (`product_specific`)
原始活动或阶段基准：每个收获批次.

- 归一化基准：每声明的参考流
- 基准类型: 过程产出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_grade_disposition`

- 数量范围: 暂定路线筛选区间；在评审或 active 使用前用产品、地点和技术特定证据替换
  - 范围角色: 默认估计 (`default_estimate`)
  - 下限: 0
  - 上限: 1
  - 单位: kg/kg harvest-ready batch
  - 基准: 质量分数 QA 校验区间
  - 基准类型: 过程产出 (`process_output`)
  - 证据类型: 推理估算 (`reasoned_estimate`)

##### 废物流

###### 收获剔除物与田间损失 (`harvest_rejects`)

记录剔除、掉落或腐败材料及其田间保留、回收或丢弃去向。

- 选定流: Harvest reject or loss material; UUID unresolved
- 流属性/单位: Mass / kg dry matter preferred
- 数量规则: Measured or sampled mass by exclusive destination
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
原始活动或阶段基准：每 1 kg 可收获批次.

- 归一化基准：每声明的参考流
- 基准类型: 过程产出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_grade_disposition`

- 数量范围: 暂定路线筛选区间；在评审或 active 使用前用产品、地点和技术特定证据替换
  - 范围角色: 默认估计 (`default_estimate`)
  - 下限: 0
  - 上限: 1
  - 单位: kg/kg harvest-ready batch
  - 基准: 质量分数 QA 校验区间
  - 基准类型: 过程产出 (`process_output`)
  - 证据类型: 推理估算 (`reasoned_estimate`)

##### 基本流

### 过程：可选的首次饲草调制 (`primary_forage_conditioning`)

将收获饲草转为一种明确的首次调制状态，不包括饲料配方加工。

#### 输入
##### 产品流

###### 原始收获饲草批次 (`raw_forage_batch`)

接收收获产品，并保留物种、植物部位、含水率、形态和批次标识。

- 选定流: Named harvested forage product; UUID unresolved
- 流属性/单位: Mass / kg
- 数量规则: Measured receiving mass and moisture
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 产品特定 (`product_specific`)
原始活动或阶段基准：每个调制批次.

- 归一化基准：每声明的参考流
- 基准类型: 过程产出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_conditioning_batch`

- 数量范围: 暂定路线筛选区间；在评审或 active 使用前用产品、地点和技术特定证据替换
  - 范围角色: 默认估计 (`default_estimate`)
  - 下限: 0.01
  - 上限: 1000000
  - 单位: kg/conditioning batch
  - 基准: 调制批量规模筛选区间
  - 基准类型: 过程产出 (`process_output`)
  - 证据类型: 推理估算 (`reasoned_estimate`)

###### 调制过程用水 (`conditioning_water`)

记录清洗、润湿或其他声明调制作业的新增水；循环水不得重复计入新增投入。

- 选定流: Process water selected from the actual source record
- 流属性/单位: Volume / m3 preferred
- 数量规则: Metered fresh water by conditioning batch
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
原始活动或阶段基准：每 1 kg 调制饲草.

- 归一化基准：每声明的参考流
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_conditioning_water`

- 数量范围: 暂定路线筛选区间；在评审或 active 使用前用产品、地点和技术特定证据替换
  - 范围角色: 默认估计 (`default_estimate`)
  - 下限: 0
  - 上限: 5
  - 单位: m3/t conditioned forage
  - 基准: 过程用水宽泛筛选区间
  - 基准类型: 参考流 (`reference_flow`)
  - 证据类型: 推理估算 (`reasoned_estimate`)

###### 中压电力投入（`conditioning_energy`）

仅当声明的过程实际使用中压电力时纳入此条件卡。其他实际产品或能源须各自建立单一交换，记录独立身份和实测数量；不得从本示例推定其必然使用。

- 选定流：中压电力
- 数量规则：记录该过程和期间实际使用的中压电力数量；只有路线记录证明未使用时，才填零或不适用。
- 流属性/单位：能量 / kWh
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 技术特定 (`technology_specific`)
原始活动或阶段基准：每 1 kg 调制饲草.

- 归一化基准：每声明的参考流
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_conditioning_energy`

###### 柴油投入（`conditioning_energy_diesel`）

仅当声明的过程实际使用柴油时纳入此条件卡。其他实际产品或能源须各自建立单一交换，记录独立身份和实测数量；不得从本示例推定其必然使用。

- 选定流：柴油
- 数量规则：记录该过程和期间实际使用的柴油数量；只有路线记录证明未使用时，才填零或不适用。
- 流属性/单位：质量 / kg
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 技术特定 (`technology_specific`)
原始活动或阶段基准：每 1 kg 调制饲草.

- 归一化基准：每声明的参考流
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_conditioning_energy`

###### 田间至调制点的道路运输服务 (`field_transport`)

仅当田间至调制点运输位于所选边界内时记录购入道路货运服务；避免与自有车辆燃料重复。

- 选定流: Road freight transport service resolved from route records
- 流属性/单位: Transport work / t·km
- 数量规则: Net transported tonnes multiplied by loaded kilometres
- 数值来源模式: 计算值 (`calculated_value`)
- 适用范围: 路线特定 (`route_specific`)
原始活动或阶段基准：每个原始饲草批次.

- 归一化基准：每声明的参考流
- 基准类型: 运输服务 (`transport_service`)
- 证据类型: 由采集数据计算 (`calculated_from_collection`)
- 采集协议: `cp_transport`

- 数量范围: 暂定路线筛选区间；在评审或 active 使用前用产品、地点和技术特定证据替换
  - 范围角色: 默认估计 (`default_estimate`)
  - 下限: 0
  - 上限: 1000
  - 单位: t·km/t raw forage
  - 基准: 道路满载运输距离筛选区间
  - 基准类型: 运输服务 (`transport_service`)
  - 证据类型: 推理估算 (`reasoned_estimate`)

###### 外部废水处理服务 (`wastewater_treatment`)

仅对转交有记录服务商的废水记录外部处理服务。

- 选定流: Wastewater treatment service resolved from provider and route records
- 流属性/单位: Volume / m3 or provider-native service unit
- 数量规则: Treated quantity reconciled to generated wastewater and invoice
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 路线特定 (`route_specific`)
原始活动或阶段基准：每 1 kg 调制饲草.

- 归一化基准：每声明的参考流
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_wastewater`

- 数量范围: 暂定路线筛选区间；在评审或 active 使用前用产品、地点和技术特定证据替换
  - 范围角色: 默认估计 (`default_estimate`)
  - 下限: 0
  - 上限: 5
  - 单位: m3/t conditioned forage
  - 基准: 处理服务 QA 筛选区间
  - 基准类型: 参考流 (`reference_flow`)
  - 证据类型: 推理估算 (`reasoned_estimate`)

##### 废物流

##### 基本流

#### 输出
##### 产品流

###### 首次调制参考饲草 (`conditioned_forage`)

将此预期产出记录为声明含水率、形态、等级和初级调制交付点下的一种指定饲草产品。

- 选定流: Named first-conditioned forage product; UUID unresolved
- 流属性/单位: Mass / kg
原始产出计量与核对要求：Measured net accepted mass at declared moisture

- 数量规则：实测净转移质量，保留批次、实际产品状态和含水率基准；在声明交接门对账至最终参考输出。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 产品特定 (`product_specific`)
原始活动或阶段基准：每个调制批次.

- 归一化基准：每声明的参考流
- 基准类型: 过程产出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_conditioning_batch`

- 数量范围: 暂定路线筛选区间；在评审或 active 使用前用产品、地点和技术特定证据替换
  - 范围角色: 默认估计 (`default_estimate`)
  - 下限: 0
  - 上限: 1.5
  - 单位: kg/kg raw forage input
  - 基准: 调制质量平衡 QA 区间
  - 基准类型: 过程产出 (`process_output`)
  - 证据类型: 推理估算 (`reasoned_estimate`)

###### 较低等级调制饲草 (`conditioned_lower_grade`)

将此预期产出作为较低等级产品，与剔除物或废物分开报告。

- 选定流: Named lower-grade conditioned forage; UUID unresolved
- 流属性/单位: Mass / kg
- 数量规则: Measured mass by grade and destination
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 产品特定 (`product_specific`)
原始活动或阶段基准：每个调制批次.

- 归一化基准：每声明的参考流
- 基准类型: 过程产出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_grade_disposition`

- 数量范围: 暂定路线筛选区间；在评审或 active 使用前用产品、地点和技术特定证据替换
  - 范围角色: 默认估计 (`default_estimate`)
  - 下限: 0
  - 上限: 1
  - 单位: kg/kg raw forage input
  - 基准: 质量分数 QA 校验区间
  - 基准类型: 过程产出 (`process_output`)
  - 证据类型: 推理估算 (`reasoned_estimate`)

##### 废物流

###### 调制剔除物与损失 (`conditioning_rejects`)

按互斥去向记录杂质、腐败生物量、细料及不合格材料。

- 选定流: Conditioning reject material; UUID unresolved
- 流属性/单位: Mass / kg
- 数量规则: Measured reject mass by batch and destination
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
原始活动或阶段基准：每 1 kg 原始饲草投入.

- 归一化基准：每声明的参考流
- 基准类型: 过程产出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_grade_disposition`

- 数量范围: 暂定路线筛选区间；在评审或 active 使用前用产品、地点和技术特定证据替换
  - 范围角色: 默认估计 (`default_estimate`)
  - 下限: 0
  - 上限: 1
  - 单位: kg/kg raw forage input
  - 基准: 质量分数 QA 校验区间
  - 基准类型: 过程产出 (`process_output`)
  - 证据类型: 推理估算 (`reasoned_estimate`)

###### 调制废水 (`conditioning_wastewater`)

将产生的废水与购入处理服务分开记录，并标明去向。

- 选定流: Forage-conditioning wastewater; UUID unresolved
- 流属性/单位: Volume / m3 or Mass / kg
- 数量规则: Metered or calculated generated quantity by batch and route
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
原始活动或阶段基准：每 1 kg 调制饲草.

- 归一化基准：每声明的参考流
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_wastewater`

- 数量范围: 暂定路线筛选区间；在评审或 active 使用前用产品、地点和技术特定证据替换
  - 范围角色: 默认估计 (`default_estimate`)
  - 下限: 0
  - 上限: 5
  - 单位: m3/t conditioned forage
  - 基准: 废水 QA 筛选区间
  - 基准类型: 参考流 (`reference_flow`)
  - 证据类型: 推理估算 (`reasoned_estimate`)

##### 基本流

###### 调制粉尘排放至空气 (`conditioning_dust`)

仅记录实测或按方法计算的颗粒物排放，并保留粒径级别和接收环境。

- 选定流: Particulate matter to air by verified size fraction; UUID unresolved
- 流属性/单位: Mass / kg
- 数量规则: Measured or method-calculated emitted particulate mass
- 数值来源模式: 计算值 (`calculated_value`)
- 适用范围: 技术特定 (`technology_specific`)
原始活动或阶段基准：每 1 kg 调制饲草.

- 归一化基准：每声明的参考流
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 由采集数据计算 (`calculated_from_collection`)
- 采集协议: `cp_conditioning_energy`

- 数量范围: 暂定路线筛选区间；在评审或 active 使用前用产品、地点和技术特定证据替换
  - 范围角色: 默认估计 (`default_estimate`)
  - 下限: 0
  - 上限: 0.1
  - 单位: kg/kg conditioned forage
  - 基准: 颗粒物排放宽泛筛选区间
  - 基准类型: 参考流 (`reference_flow`)
  - 证据类型: 推理估算 (`reasoned_estimate`)


### 过程：声明边界的产品交接计量（`declared_reference_handoff`）
该节点记录既有系统边界上的实际交接数量，用于对账和参考数量归一化。它不代表新增物理工序，不自动引入干燥、冷却、储存、包装或运输。每份数据包须声明一条实际路线、一个终端产品状态、含水率或干物质基准及交接门。仅将该路线在此交接门的合格产品传入本节点；其他路线不得作为额外投入，联产品另行记录并按第 7 节处理。前序工序的投入、损失和排放只计一次。以实际交接净质量作为归一化分母；计量对账节点不改变质量、产率或分配结果。
#### 输入
##### 产品流
###### 实际路线的交接产品（`actual_route_product_for_handoff`）
记录实际终端路线交付的合格产品；与交接门称重和批次记录对账。
- 选定流：指定饲草产品（UUID 未解析）
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
- 选定流：指定饲草产品（UUID 未解析）
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

## 7. 分配与联产品处理

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| allocation_outputs | Multiple intended outputs | 优先细分；共享负担仍存在时，采用可辩护且有据的因果物理关系，否则记录所选基准及敏感性。没有预期产品功能的废物及田间残体不作共产品分配。 | iso-14044-allocation |
| allocation_periods | Establishment and productive periods | 按实测生产历史或明确预测，将建植及多年负担归属声明生产产出，防止在各年度重复归属。 | iso-14044-allocation |
| allocation_rejects | Lower grades, rejects and rework | 将各批次追踪至合格产品、低等级品、返工、回收、还田或废弃；合格物料仅在最终交接计数，返工投入计一次。 | iso-14044-allocation |
| allocation_shared_assets | Shared fields, machinery and conditioning assets | 优先使用计量用量或运行时间，否则采用有据物理驱动；列举使用节点及期间，防止负担重复。 | iso-14044-allocation |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_residual_precedence` | 未规定主方法分支的剩余共同负担 | 本 PCR 要求研究作联产品分配决策但未规定主方法的地方，统一执行以下优先顺序；已明确规定的类别专属主方法保持有效。先直接归属可分开的产出专属作业。剩余共同负担 B 只有在实测作业或生物服务记录证明驱动量 d_i 代表因果消耗时，才采用该物理驱动。产品可称量、有价值或等级较低本身均不构成因果依据，不能在面积、时间、质量和收入间任意切换。可比等级接受相同共同搬运服务时，仅在服务需求、状态及水分基准可比且有据时采用实测处理质量。份额 a_i=d_i/sum(d_j)，B_i=B*a_i。该共同作业没有可辩护的因果物理驱动时，采用同交接点、同期间经济份额 a_i=(q_i*p_i)/sum(q_j*p_j)，纳入全部独立预期产出，匹配数量/价格单位、币种和代表性价格，使用产出专属下游加工之前的价值。缺价格或分母证据使分配结果不完整，不能把产品价格记零或改称单一产出系统。披露合计为一的份额和重要替代方法敏感性；敏感性方法不是可任意替换的主结果。废物、留存残余和内部转移不获得联产品份额，其应归属的生产/处理负担仍保留在产出可售产品的路线中。未分配物理数量和质量平衡另行保留。本分支不自动给予替代信用；单独界定的替代情景须保留总清单及实际被替代功能证据。 | `ghg-protocol-product-standard-2011` |

## 8. 前景数据采集、计算与质量规则

清单完整性：具名条件卡是单项交换示例，不是穷尽配方，也不要求使用这些产品。完成前景数据包前，逐项列出所有实际种植材料、养分产品、作物保护制剂、资产材料、作业服务、载能体、包装材料、废物流及适用的基本物质，使用明确的物理身份、状态、原始属性/单位、来源或接收区室及实测或按方法计算的数量。身份或数量缺失属于完整性缺口，不得假定为零。保留实际批次和阶段基准；不得将中间转移累加为额外最终产出，也不得重复计入采购服务已包含的负荷。

先按各采集协议保留原始场址、批次、周期及阶段数量与分母，并完成库存、损失、含水率和共产品归属核对；随后按实际归属的验收交付产品量归一化：归一化交换量 = 归属原始交换量 × 声明参考数量 / 同一边界和计量基准的验收产品量。多年生建植和共享作业先执行各自分摊规则，不得把内部转移数量设为最终参考数量。每声明的参考流指第 3 节的数量、单位和产品状态；数据包必须声明实际路线和门。


### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_propagation | forage_crop_production | propagation_material | supplier or transfer record | species, variety, form, amount, date, field, source | Reconcile invoices and internal transfers；原始汇总与分配：sum by product, field and crop period | kg or count | each planting | all establishment events | declared field | 每声明的参考流 | invoice, lot and unit checks |
| cp_nutrients | forage_crop_production | nutrient_inputs; soil_n2o | application log and invoice | product, mass, nutrient grade, N form, field, date, crop period | Reconcile purchases, application logs and composition；原始汇总与分配：每种实际施用产品分别记录在原子投入卡中，养分总量仅在分析层计算 | kg product and kg nutrient | each application | all crop periods | declared fields | 每声明的参考流 | invoice, application calibration and method record |
| cp_crop_protection | forage_crop_production | crop_protection_inputs | application and supplier record | product, active ingredient, amount, area, date, target | Reconcile applied quantity with purchases；原始汇总与分配：sum actual applications by lot and period | kg product | each application | all crop periods | declared fields | 每声明的参考流 | label, invoice and operator log |
| cp_irrigation | forage_crop_production | irrigation_water | meter or supplier record | source, volume, date, area, field, crop period | Read calibrated meter or reconcile invoices；原始汇总与分配：sum by field and period; normalize to output | m3 | each event or billing period | each crop period | field and water source | 每声明的参考流 | meter calibration and invoice |
| cp_production_energy | forage_crop_production | production_energy | meter, receipt and equipment log | carrier, amount, unit, operation, date, field, shared use | Reconcile energy and operating records；原始汇总与分配：sum by carrier; allocate shared use by measured operation | native carrier unit | each operation | each crop period | site and equipment | 每声明的参考流 | meter, invoice and equipment log |
| cp_land_history | forage_crop_production | land_occupation; land_transformation | field and geospatial record | boundary, area, dates, prior cover, crop period | Reconcile maps with dated land evidence；原始汇总与分配：calculate area-time and allocate transformation once | ha, ha·year | each crop period and conversion | full attribution period | declared fields | 每声明的参考流 | map, register and dated evidence |
| cp_harvest_lot | forage_crop_production; forage_harvest | harvest_ready_forage; harvest_ready_batch; harvested_forage | lot and scale record | species, plant part, field, dates, gross, tare, net, moisture, destination | Weigh each lot and match handoffs；原始汇总与分配：reconcile inter-process transfers without duplicate final output | kg and moisture | each lot | each harvest | field and receiving node | 每声明的参考流 | scale calibration, lot and moisture record |
| cp_residues | forage_crop_production; forage_harvest | production_residue_removed; residue_to_soil | sample and disposition record | biomass type, wet/dry mass, field, period, destination | Sample or weigh and document destination；原始汇总与分配：partition among soil return, intended output and removal | kg dry matter | each crop period | all included periods | field and residue type | 每声明的参考流 | sampling, dry-matter and destination evidence |
| cp_harvest_energy | forage_harvest | harvest_energy | fuel, meter and machinery log | carrier, amount, equipment, operation, field, lot | Reconcile consumption to harvest lots；原始汇总与分配：sum by carrier and normalize to accepted output | native carrier unit | each operation | each harvest | equipment and field | 每声明的参考流 | invoice, meter and machinery log |
| cp_grade_disposition | forage_harvest; primary_forage_conditioning | lower_grade_forage; harvest_rejects; conditioned_lower_grade; conditioning_rejects | grade, scale and destination record | identity, grade, mass, moisture, intended use, destination, lot | Inspect and weigh each grade and destination；原始汇总与分配：mutually exclusive accepted, lower grade, rework and waste partition | kg | each lot | each harvest or conditioning campaign | lot and handoff | 每声明的参考流 | grade sheet, scale and disposition evidence |
| cp_conditioning_batch | primary_forage_conditioning | raw_forage_batch; conditioned_forage | receiving and output lot record | input/output mass, moisture, species, form, grade, route, lot | Match intake and output lots and measure moisture；原始汇总与分配：reconcile products, rejects, removed water and loss | kg and moisture | each batch | included operations | conditioning site | 每声明的参考流 | calibrated scale, moisture and lot balance |
| cp_conditioning_water | primary_forage_conditioning | conditioning_water | meter or batch record | source, fresh volume, recirculation, batch, date | Meter or reconcile tank and supplier records；原始汇总与分配：separate fresh from recirculated water | m3 | each batch | wet-conditioning periods | conditioning site | 每声明的参考流 | meter/tank calibration and batch log |
| cp_conditioning_energy | primary_forage_conditioning | conditioning_energy; conditioning_dust | meter, fuel and equipment log | carrier, amount, equipment, operation, batch, time, dust measurement | Reconcile measured energy and any emission method to batch；原始汇总与分配：sum by carrier and operation; preserve particulate fraction | native carrier unit and kg dust | each batch | conditioning campaign | site and equipment | 每声明的参考流 | meter, invoice, equipment and sampling record |
| cp_transport | primary_forage_conditioning | field_transport | waybill and route record | mass, origin, destination, loaded distance, vehicle, return trip | Reconcile route and mass to lot；原始汇总与分配：tonnes multiplied by loaded kilometres | t, km and t·km | each transfer | included field-to-site routes | route and lot | 每声明的参考流 | waybill, route and scale record |
| cp_wastewater | primary_forage_conditioning | wastewater_treatment; conditioning_wastewater | meter, discharge and provider record | volume, batch, operation, destination, provider, route | Meter or reconcile generated and treated quantities；原始汇总与分配：reconcile generation, reuse, discharge and treatment | m3 | each batch or billing period | wet-conditioning periods | site and provider | 每声明的参考流 | meter, invoice and treatment evidence |
| `cp_declared_reference_handoff` | declared_reference_handoff | reference_product_at_declared_handoff | 交接计量与验收记录 | route, terminal_output_row_id, product_state, gate, lot, net_mass_kg, moisture_basis, acceptance, tare | 采用校准衡器或可追溯称重记录，将实际终端工序交接批次与验收净质量、产品状态及含水率对账；剔除包装皮重，不汇总前序阶段数量。 | kg | 每交接批次 | 声明报告期 | 声明交接门 | 每声明的参考流 | 校准或称重凭证、验收和批次追溯 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| normalize_reference | All processes | 各过程交换除以所选交接点净参考产品质量，保留作物期间及批次关联。 | Process amount, net reference mass, gate, crop period and lot | Exchange per 1 kg reference forage | mass-balance-identity |
| convert_dry_matter | Fresh, wilted and dried forage | 干物质＝实测湿质量×（1－湿基含水率分数）；反向换算须有目标含水率。 | Wet mass, moisture test and basis | Dry mass or converted product mass | fao-grassland-forage |
| calculate_n2o | Direct soil N2O | 将声明 IPCC 管理土壤方程和因子用于所采氮活动数据，方法要求时将 N2O-N 换算为 N2O。 | N inputs, factor, tier, soil and climate fields | kg direct N2O per reference flow | ipcc-2019-managed-soils |
| reconcile_lot | Harvest and conditioning | 在同一含水率基准上：进料＝预期产出＋低等级品＋拒收物＋残体＋移出水＋实测损失。 | Lot masses, grades, moisture and destinations | Reconciled mutually exclusive lot balance | mass-balance-identity |
| road_transport_work | Field-to-conditioner transport | 运输工作量＝净运输吨数×载货路线公里数；仅有证据时采用返程处理。 | Net mass, loaded distance and return record | t·km by lot | iso-14044-allocation |
| `residue_to_soil_identity_and_fate` | `forage_harvest` | 按实测干湿基和实际去向核对作物残余物、收获损失和生物量。留田或还田生物量是支持分解与养分路径计算的内部残余物台账，不是外购资源或虚构的生物量基本交换。单独收集的材料须有实际产品／废物身份及去向；环境释放须识别物质与接收环境。 本规则替代含糊的聚合交换，不取消采集义务。数据集完整性通过前，每项实际交换须建立具体卡片、核实相容 UUID 或明确保留未解析身份，并记录数量、单位、阶段／期间、去向和证据。依据相连协议恢复可归属原始分子量，再按匹配的合格参考产出归一化一次。缺失数据不等于零，原聚合范围不得作为单项物流默认值。 | `cp_residues` | 按身份区分的交换和对账活动记录 |  |
| `chemical_species_mass_accounting` | `elementary_nutrient_emissions` | 最终基本交换使用已识别物质的质量和一个实际接收环境，养分／活动台账另存：该物种的 N2O-N × 44/28 为 N2O，NH3-N × 17/14 为 NH3，硝酸盐氮 × 62/14 为硝酸盐，磷酸盐磷 × 95/31 为磷酸盐。若选定流为元素磷，则报告 kg P，仅在物种口径有据时将磷酸盐质量乘 31/95。只有方法输出按元素计时才换算一次，实测化合物质量不得再换算。总养分损失不得无据归于单一物种，土壤残余／留存养分不是排放。保留直接／间接路径台账，不重复所选方法或上游清单已经包含的路径。因子不确定性范围只按其声明基准检查因子，不是最终化合物数量或场址排放的允许界限。用合格参考数量和匹配实测产出，将可归属化合物质量归一化一次。活动量、身份或接收环境未知时保留证据缺口，不得宣称完整。 | `cp_nutrients`; 物种特定活动量台账、方法路径和因子基准、匹配合格产出 | 按身份区分的交换和对账活动记录 |  |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| identity_gate | Reference product | 记录单一物种/产品、植物部位、形态、含水率/干物质、等级、作物期间、生产系统及互斥交接点。 | Lot identity, product description and reviewed flow evidence |
| period_coverage | Production periods | 适用时纳入建植及生产期间，保留各期间产量及归属记录。 | Field register, planting/harvest dates and yield history |
| input_completeness | 全部过程投入 | 将繁殖材料、每种独立的养分产品、植保产品、水、能源、运输及处理投入与原始记录逐项核对；不得接受笼统养分交换。 | Invoices, logs, meters and 具体流身份核验 |
| output_reconciliation | All outputs | 将合格产品、低等级品、拒收物、残体、废水及损失划分为互斥去向。 | Scale, grade, moisture and disposition records |
| range_replacement | Provisional ranges | 推理范围仅用于筛查，审查或启用前以产品、地区、技术及交接点特定证据替换。 | Reviewed records or external quantitative evidence |
| unresolved_identity | UUID-bearing flows | 具体产品、属性、单位组及情境未全部确认前 UUID 保持空白，不得替换为配合饲料、苜蓿或放牧服务身份。 | Identity lookup and detail-read audit record |

## 9. 验证规则

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| validate_identity | Reference product | 要求具名饲草物种/产品、植物部位或收获部分、形态、含水率或干物质状态、作物期间、等级及选定交接点。 | unsd-cpc-01919 |
| validate_exclusions | Category boundary | 玉米饲草、苜蓿、谷物秸秆/谷壳、非饲草作物、配合饲料、混合物及放牧服务清单不通过。 | unsd-cpc-01919 |
| validate_gate | Process graph | 要求唯一参考交接点，核对各过程间交接，不将同一物料同时计作中间物及最终产品。 | fao-grassland-forage |
| validate_mass_moisture | Harvest and conditioning lots | 在一致含水率或干物质基准上核对投入、产品、低等级品、残体、废水、移出水分及损失，并调查产出大于进料。 | mass-balance-identity |
| validate_flow_identitys | Product inputs | 分别核验每种实际交换的具体流 UUID、物理状态、流属性和单位；未确认时明确保留未解析身份。 |  |
| validate_periods | Crop periods | 核对建植及生产期间，确保共享资产及多期间负担仅归属一次。 | iso-14044-allocation |
| validate_destinations | Grades, rejects and residues | 要求互斥的预期产品、低等级品、返工、回收、还田及废物去向；拒收物不计合格产品。 | iso-14044-allocation |
| validate_n2o | Direct soil N2O | 要求有记录氮活动数据、所选 IPCC 方程、因子及层级；直接和间接路径分开并防止双计。 | ipcc-2019-managed-soils |
| validate_conditioning | Conditional conditioning routes | 确认每项声明萎蔫、干燥、切碎、打捆、制粒、清理或分级实际发生，且投入、产出状态、损失和交接有记录；省略未启用路线。 | fao-grassland-forage |
| validate_ranges | All inventory cards | 按数量规则、单位、分母及路线条件检查每项范围；推理估算为可替换筛查值，审查或启用前须替换。 |  |

## 10. 发布数据集配置

| 字段 | 值 |
| --- | --- |
| dataset_role | 一种指定饲草产品的初级前景生产和首次交付数据集 |
| downstream_use | 用于前景过程包及其生命周期模型投影的 secondary_dataset；仅在边界和代表性适合时作为 background_dataset |
| allowed_use | 在声明地点、作物期、生产系统、含水率/干物质、形态和交付点下的一种指定 CPC 01919 饲草 |
| excluded_use | 全部饲草的平均数据；玉米饲草、苜蓿、秸秆/颖壳、复合饲料、放牧服务或后续饲料制造 |
| required_metadata | 物种/产品；植物部位；品种（如已知）；地块和地理；作物期；生产与收获路线；含水率/干物质；形态和等级；交付点；投入记录；调制作业；分配方法 |
| required_quality_disclosure | UUID 缺口；测量和来源覆盖；时期归属；Range 证据等级；水分与质量平衡；共享资产分配；排放方法；地点和年份代表性 |
| update_trigger | 新产品或路线；交付点、形态或水分状态变化；新的已验证参考身份；更新的作物期、分配、排放或调制证据；以评审证据替换暂定 Range |

## 11. 数据来源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| unsd-cpc-01919 | official_guidance | UNSD, CPC Version 3.0 Explanatory Notes, code 01919, https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | Classification scope and named examples |
| fao-grassland-forage | handbook | FAO, Grassland Index and forage conservation resources, https://www.fao.org/4/x7660e/x7660e00.htm | Forage production, harvest and first-conservation route structure; moisture and dry-matter reporting prompts |
| ipcc-2019-managed-soils | official_guidance | 2019 Refinement to the 2006 IPCC Guidelines, Volume 4, Chapter 11, https://www.ipcc-nggip.iges.or.jp/public/2019rf/pdf/4_Volume4/19R_V4_Ch11_Soils_N2O_CO2.pdf | Managed-soil direct N2O calculation and nitrogen activity data |
| iso-14044-allocation | standard | ISO 14044:2006, Environmental management — Life cycle assessment — Requirements and guidelines, https://www.iso.org/standard/38498.html | Subdivision, co-product attribution and shared burden decisions |
| mass-balance-identity | method_factor | Physical mass-balance identity on a consistent moisture basis | Lot reconciliation and QA; not a product-specific yield factor |

| source_id | type | reference | used_for |
| --- | --- | --- | --- |
| `declared-handoff-measurement-definition` | `method_factor` | 本 PCR 第 3、6、8 节的净质量归一化定义：同一状态、同一交接门的实测净质量作为自身归一化分母，质量比为 1；交接计量不增加物理工序。 | 同阶段和交接计量恒等式；属于定义，不是实测产率、经验默认值或外部文献。 |
| `ghg-protocol-product-standard-2011` | standard | WRI/WBCSD, Product Life Cycle Accounting and Reporting Standard (2011), Chapter 9, https://ghgprotocol.org/sites/default/files/standards/Product-Life-Cycle-Accounting-Reporting-Standard_041613.pdf | 一般分配优先顺序及可比交接点经济价值基准。适用条件和明确的剩余分支是本 PCR 的方法约定；该来源不规定本产品因果系数、价格或产出数量。 |
