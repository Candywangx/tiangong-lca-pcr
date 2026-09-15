---
pcr_id: pcr.metal-products-machinery-and-equipment.basic-metals.unwrought-aluminium
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 未锻轧铝

## 1. 范围与适用性

本 PCR 适用于铸造设施门口呈铸态初级形状的固态未锻轧铝及铝合金，例如锭、坯、板坯、铝块或等效铸态形状。前景边界始于送入保温、精炼和铸造环节的路线特定液态铝。液态铝投入可以来自原铝电解生产、再生铝重熔或经记录的混合路线，但其上游负荷必须由与路线和地理范围相匹配的关联数据集表示。

本 PCR 不包括作为产品的氧化铝、铝粉及铝片、轧制、挤压、拉拔、锻造或以其他方式加工的铝半成品、制成品以及下游使用或寿命终止阶段，也不包括未经凝固即销售的液态铝。必须声明合金成分、铸态形状、原铝或再生铝路线份额、液态铝来源、铸造技术、地理范围、基准年和产品质量规范。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.basic-metals.unwrought-aluminium |
| classification_refs | CPC 3.0: 41431, Unwrought aluminium |
| covered_products | 呈未锻轧铸态初级形状的固态非合金铝和铝合金 |
| excluded_products | 氧化铝；铝粉或铝片；锻轧半成品；制成品；未经凝固即销售的液态铝 |
| representative_product | 铸造设施门口的铸铝锭 |
| production_route | 对原铝、再生铝或混合路线的路线特定液态铝进行保温、可选炉内处理和铸造 |
| market_state | 符合已声明合金、纯度、尺寸和质量规范的固态未锻轧铸态形状 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 供应具有已声明合金或纯度牌号和铸态初级形状的固态未锻轧铝 |
| How much | 铸造设施门口 1,000 kg 净合格产品 |
| How well | 符合已声明的化学成分、铸态形状、尺寸、表面和验收规范 |
| How long or cycle | 一个生产核算期；材料产品不规定使用时长 |
| reference_flow_link | `cast_unwrought_aluminium_output` |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1,000 kg |
| 参考产品流 | 未锻轧铝 |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 合金或纯度牌号；铸态形状；原铝、再生铝和混合液态金属份额；液态金属来源数据集；铸造技术；地理范围；基准年；产品质量规范；表面处理或包装的纳入情况 |

构建前景数据包时，`必需限定信息` 中列出的信息应在数据集元数据、过程说明、参考流备注、产品说明或等效数据包字段中明确声明。缺失必需限定信息的数据包视为参考流定义不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_product_mass` | 合格未锻轧铝输出 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 报告凝固并移除非产品浮渣后的产品净质量；将所有清单交换归一化至 1,000 kg 合格输出。 |
| `liquid_metal_mass` | 液态铝投入 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 通过经校准称量或有记录的质量平衡方法计量液态金属投入，并保留其原铝、再生铝和混合路线份额。 |
| `gas_volume_conditions` | 气态天然气和工业氧气 | Volume `93a60a56-a3c8-22da-a746-0800200c9a66` | m3 | 声明所有气体体积的温度、压力、干湿基和换算方法；不得合并天然气和氧气。 |
| `electricity_conversion` | 跨越过程边界的外购或自发电力 | Net calorific value `93a60a56-a3c8-11da-a746-0800200b9a66` | kWh | 保留计量的 kWh；若原始记录使用其他能量单位，归一化前必须记录换算系数及其来源。 |
| `water_net_input` | 工艺用水 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 报告跨越边界的产品水净投入，并说明循环水是被排除还是单独计量。 |

## 5. 系统边界

前景系统包括液态金属接收、保温、可选合金调整或炉内处理、铸造或连续铸造成未锻轧初级形状、冷却、浮渣移除以及直至产品门口的内部搬运。设施公用工程、直接产生的排放和废物在跨越边界时纳入。经核验的来源材料描述了原铝向保温炉转移和铸造，以及再生铝熔炼、精炼、撇渣和浇注过程。

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `boundary_liquid_metal_start` | foreground_start | 前景清单始于进入保温或铸造工序的路线特定液态铝；不得将液态铝表示为无负荷投入。 | `us-epa-ap42-primary-aluminium-1998`; `us-epa-ap42-secondary-aluminium-1986` |
| `boundary_actual_operations` | included_operations | 纳入实际使用的每项现场保温、处理、铸造、冷却、浮渣处理和公用工程操作；对未使用的所列操作声明不适用。 | `us-epa-ap42-primary-aluminium-1998`; `us-epa-ap42-secondary-aluminium-1986`; `eu-jrc-nfm-bref-2016` |
| `boundary_upstream_linkage` | upstream_inputs | 将液态金属投入以及所有外购能源和材料关联到与产品状态、生产路线、地理范围、技术和基准年匹配的上游数据集。 | `iai-lifecycle` |
| `boundary_direct_emissions` | direct_emissions | 仅记录前景操作的直接排放；上游电力和材料排放保留在其关联的上游数据集中。 | `us-epa-ap42-primary-aluminium-1998`; `us-epa-ap42-secondary-aluminium-1986` |

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 保温或铸造工序处的路线特定液态铝，并声明成分、温度、来源设施及原铝、再生铝或混合份额 |
| starting_condition_role | 由关联数据集表示其生产负荷的上游产品投入 |
| product_classification_scope | 固态未锻轧铸铝及铝合金；下游半成品和制成品不在范围内 |
| recursive_input_rule | 对现场重熔的同类别固态未锻轧铝，作为单独产品投入记录并关联其上游数据集；不得针对同一投入递归复制本 PCR |
| upstream_dataset_requirement | 对液态铝、电力、燃料、氧气、水和任何其他材料投入，要求采用与路线、状态、地理、技术和时间具有代表性的数据集 |
| disclosure | 声明液态金属路线份额、上游数据集中包含的废铝归属、合金或纯度牌号、铸态形状、炉型和铸造技术、地理和时间覆盖、内部返回料、浮渣处理及截断 |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `unwrought_casting` | 液态铝保温与铸造 | `required` | 对本 PCR 覆盖的固态未锻轧铝始终纳入 | 前景生产和凝固 | 1,000 kg 合格未锻轧铝输出 |

### 过程：液态铝保温与铸造（`unwrought_casting`）

#### 输入

##### 产品流

###### 路线特定液态铝（`cast_liquid_aluminium`）

液态铝来自单独建模的原铝、再生铝或混合生产路线。其成分、温度、质量、来源和路线份额随前景记录保留。

- 选定流：液态铝
- 流属性/单位：Mass / kg
- 数量规则：经计量并按库存变化调整的保温与铸造液态铝装入量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 合格未锻轧铝输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_casting_material_balance`
- 来源：`us-epa-ap42-primary-aluminium-1998`; `us-epa-ap42-secondary-aluminium-1986`

###### 保温与铸造用电力（`cast_electricity`）

跨越前景边界的电力与燃料和氧气分开记录。计量电力覆盖已纳入的保温、铸造、冷却和内部搬运设备。

- 选定流：电力 `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- 流属性/单位：Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / kWh
- 数量规则：已纳入前景操作消耗的计量电力
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 合格未锻轧铝输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_casting_electricity`
- 来源：`iai-lifecycle`

###### 燃气设备用气态天然气（`cast_natural_gas`）

仅在燃气保温、处理或铸造设备消耗天然气时记录该流。必须声明体积参考条件和计量边界。

- 选定流：气态天然气 `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位：Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- 数量规则：已纳入前景设备消耗的计量气态天然气
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 合格未锻轧铝输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_casting_fuel_gases`
- 来源：`us-epa-ap42-primary-aluminium-1998`; `us-epa-ap42-secondary-aluminium-1986`

###### 富氧燃烧用工业氧气（`cast_industrial_oxygen`）

仅在采用富氧或纯氧燃烧时记录工业氧气。不得将其与助燃空气或天然气合并。

- 选定流：工业氧气 `bd4b0f96-2090-4806-a648-335ab20ff401`
- 流属性/单位：Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- 数量规则：供应给已纳入燃气设备的计量工业氧气
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 合格未锻轧铝输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_casting_fuel_gases`
- 来源：`eu-jrc-nfm-bref-2016`

###### 跨越前景边界的工艺用水（`cast_process_water`）

工艺用水在用于直接冷却、设备冷却或其他已纳入前景用途时记录。内部循环水不得重复计数。

- 选定流：工艺用水 `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：跨越前景边界的计量工艺用水净投入
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 合格未锻轧铝输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_casting_water`
- 来源：`eu-jrc-nfm-bref-2016`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 合格未锻轧铝（`cast_unwrought_aluminium_output`）

参考产品是在设施门口符合已声明产品规范的固态铸铝或铸造铝合金初级形状。

- 选定流：未锻轧铝
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：经称量的合格产品净输出
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：1,000 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_casting_material_balance`
- 来源：`un-cpc-3-0-structure-2025`; `us-epa-ap42-primary-aluminium-1998`; `us-epa-ap42-secondary-aluminium-1986`

##### 废物流

###### 离开前景边界的铝浮渣（`cast_aluminium_dross`）

仅在铝浮渣离开前景系统送往处理、处置或回收时将其记录为废物输出。内部返回的金属计入质量平衡，不作为外部废物流重复计数。

- 选定流：铝浮渣
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：经称量并运出前景边界的铝浮渣
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 合格未锻轧铝输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_casting_material_balance`
- 来源：`us-epa-ap42-primary-aluminium-1998`; `us-epa-ap42-secondary-aluminium-1986`

##### 基本流

###### 前景燃料燃烧直接排放的化石源二氧化碳（`cast_fossil_carbon_dioxide`）

本行仅记录已纳入前景设备燃料燃烧直接排放的化石源二氧化碳。上游电力和燃料供应排放保留在关联的上游数据集中。

- 选定流：二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：根据前景燃料消耗以及有记录并经设施批准的碳含量和氧化因子计算，或直接测量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 合格未锻轧铝输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_casting_combustion_emissions`
- 来源：`us-epa-ap42-primary-aluminium-1998`; `us-epa-ap42-secondary-aluminium-1986`

当其他实际原子材料、能源、废物和基本流交换跨越已声明边界时，必须将其加入前景数据包。不得将其合并成伞形行，并应分别记录每项交换的身份、数量、适用条件和上游数据集。

## 7. 分配与共产品处理

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivide_first` | shared_casting_operations | 应先按产品牌号、铸态形状、生产线或生产批次进行细分或单独计量，再采用分配。 |  |
| `allocation_internal_returns` | internal_metal_returns | 内部返回的液态金属和回收的过程内金属作为内部循环处理；不得给予外部共产品抵扣，也不得再次计为新的液态金属投入。 |  |
| `allocation_shared_mass` | inseparable_shared_operations | 无法细分时，按合格未锻轧产品的实测净质量分配共享前景投入、直接排放和废物，并披露产品、期间、数量和分配结果。 |  |
| `allocation_exported_recovery` | exported_dross_or_residues | 将外运浮渣或残渣保留为废物输出并记录所选下游回收或处置模型；除非研究目标明确要求并披露单独的后果型情景，否则不得在本前景过程中采用避免负荷抵扣。 |  |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_casting_material_balance` | `unwrought_casting` | 液态金属、合格输出、浮渣、库存变化、内部返回料 | 地磅、批次、库存和质量放行记录 | 投入质量；输出质量；浮渣质量；返回料质量；期初和期末库存；合金或纯度；铸态形状；合格和不合格质量 | 经校准称量并与批次和核算期库存核对 | kg | 每批次，按月和年度汇总 | 有代表性的连续 12 个月或已声明批次 | 所有已纳入保温和铸造生产线 | 按牌号和路线求和，核对库存变化，再按合格输出归一化 | 校准证书；批次单据；库存核对；质量放行记录 |
| `cp_casting_electricity` | `unwrought_casting` | 电力 | 公用事业和分表记录 | 电表编号；期初和期末读数；输入；输出；分配键；停机时间 | 经校准电表读数 | kWh | 连续或每月 | 与产品输出相同期间 | 所有已纳入设备和共用公用工程 | 净输入减去有记录的输出，细分后分配并归一化 | 发票；电表校准；分表覆盖图 |
| `cp_casting_fuel_gases` | `unwrought_casting` | 天然气和工业氧气 | 供应商发票和经校准计量记录 | 分别记录的气体体积；温度；压力；干湿基；仪表编号；设备；运行时间 | 分别使用经校准仪表或核对后的供应商记录 | m3 | 每批次或每月 | 与产品输出相同期间 | 所有已纳入燃气设备 | 将每种气体分别换算至已声明参考条件并归一化 | 发票；校准记录；参考条件换算；设备日志 |
| `cp_casting_water` | `unwrought_casting` | 工艺用水 | 进水和排水计量记录 | 进水质量或体积；排水；循环量；水源；用途；密度换算 | 经校准计量和水量平衡核对 | kg | 每月 | 与产品输出相同期间 | 所有已纳入冷却和工艺用水用户 | 计算边界净投入，排除内部循环并归一化 | 仪表校准；水量平衡；密度和换算记录 |
| `cp_casting_combustion_emissions` | `unwrought_casting` | 直接化石源二氧化碳 | 燃料记录、供应商分析、烟道测量或经批准因子记录 | 燃料量；碳含量；氧化因子；实测 CO2；方法版本 | 直接测量或根据前景燃料记录计算 | kg CO2 | 每批次或每月 | 与产品输出相同期间 | 所有已纳入燃烧源 | 汇总源级直接排放并归一化；排除上游供应排放 | 测量 QA 记录或批准因子、供应商分析和计算工作表 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_normalize_reference` | 每项清单交换 | 归一化数量 = 核算期交换数量 × 1,000 kg / 核算期合格产品净质量 | 交换数量；合格输出净质量 | 每 1,000 kg 参考产品的交换数量 |  |
| `calc_casting_mass_balance` | 含铝物料平衡 | 液态铝投入 + 期初铝库存 = 合格输出 + 外运铝浮渣 + 不合格输出 + 期末铝库存，同时单独报告有记录的内部返回料 | 所有含铝质量和库存变化 | 经核对的铸造期质量平衡及未解释差值 |  |
| `calc_direct_fossil_co2` | `cast_fossil_carbon_dioxide` | 有效时使用直接实测 CO2；否则对每个化石燃料源求和：燃料量 × 有记录碳含量因子 × 氧化因子 × 44/12 | 前景燃料量；设施批准因子 | 直接化石源 CO2 质量 | `us-epa-ap42-primary-aluminium-1998`; `us-epa-ap42-secondary-aluminium-1986` |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_product_identity` | 参考产品 | 声明合金或纯度、铸态形状、产品规范、验收准则和排除的不合格质量。 | 产品规范；实验室证书；放行记录 |
| `dq_route_identity` | 液态铝投入 | 声明原铝、再生铝和混合份额，并将每一份额关联到与产品状态、地理、技术和时间具有代表性的上游数据集。 | 供应商声明；质量平衡记录；上游数据集元数据 |
| `dq_measurement` | 所有前景数量 | 使用经校准仪表或核对后的记录，并保留换算、分配键、库存调整以及不确定性或数据缺口处理。 | 校准和核对记录；计算工作表 |
| `dq_temporal` | 前景数据集 | 除非较短生产批次有理由并已披露，否则使用有代表性的连续 12 个月；将所有交换和产品总量对齐到同一期间。 | 生产日历；覆盖声明；批次理由 |
| `dq_completeness` | 前景清单 | 纳入跨越边界的每项实际原子交换；核对铝质量，并解释遗漏、估算或低于检出限的交换。 | 完整性审查；质量平衡；遗漏日志 |
| `dq_direct_upstream_split` | 排放和上游数据集 | 将前景直接排放与上游电力、燃料、液态金属、水和材料负荷分开。 | 过程边界图；交换映射；数据集关联 |

## 9. 校验规则

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `validate_reference_identity` | reference_flow | 确认输出是固态未锻轧铸态初级形状，并已声明其合金或纯度、形状、规范和净质量。 | `un-cpc-3-0-structure-2025` |
| `validate_reference_amount` | reference_flow | 确认所有交换均归一化至恰好 1,000 kg 净合格输出，且参考数量不包括不合格品或浮渣质量。 |  |
| `validate_route_linkage` | liquid_metal_input | 拒绝将液态铝留作无负荷投入，或遗漏原铝、再生铝和混合份额及其上游数据集关联的数据集。 | `iai-lifecycle` |
| `validate_atomic_inventory` | process_inventory | 适用时，确认电力、每种燃气、氧气、水、每项废物和每种直接基本流排放均表示为单独原子交换。 |  |
| `validate_mass_balance` | aluminium_balance | 要求经核对的核算期铝质量平衡，并披露未解释差值。 |  |
| `validate_gas_conditions` | gas_inputs | 确认天然气和氧气体积分别使用已声明的参考条件，且未被合并。 |  |
| `validate_direct_emissions` | direct_emissions | 确认 `cast_fossil_carbon_dioxide` 仅包含前景直接化石源 CO2，并排除上游电力和供应链排放。 | `us-epa-ap42-primary-aluminium-1998`; `us-epa-ap42-secondary-aluminium-1986` |
| `validate_unresolved_identities` | uuid_references | 审查或发布前，解决或明确审查每个 UUID 为空的清单行，并确认准确产品状态、流类型、属性和单位组。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 经审查和发布后作为 `secondary_dataset` 或 `background_dataset` |
| downstream_use | 需要铸造设施门口未锻轧铝的归因型前景数据包、过程数据集和生命周期模型 |
| allowed_use | 产品牌号、铸态形状、液态金属路线份额、技术、地理、时间、系统边界和数据质量与研究匹配时使用 |
| excluded_use | 不得用于氧化铝、未经铸造即销售的液态铝、铝半成品或制成品，也不得将上游路线表示为无负荷 |
| required_metadata | 规范 PCR id；产品牌号和形状；参考质量；设施和地理；基准期；原铝、再生铝和混合份额；关联上游数据集；铸造技术；分配；截断；审查状态 |
| required_quality_disclosure | 计量覆盖和校准；物料平衡闭合；仪表分配；数据缺口和估算；路线份额证据；直接与上游排放拆分；未解决身份 |
| update_trigger | 液态金属路线组合、合金或铸态形状、炉型或铸造技术、能源供应、设施边界、分配、上游数据集、地理或代表期发生变化 |

## 11. 数据源

| 来源 id | 类型 | 参考文献 | 用途 |
| --- | --- | --- | --- |
| `un-cpc-3-0-structure-2025` | 官方指南（`official_guidance`） | 联合国统计司，CPC 3.0 版结构，2025 年 6 月 30 日，https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv | 正式类别身份以及与氧化铝和铝半成品的区分 |
| `china-sat-unwrought-aluminium-terminology` | 官方指南（`official_guidance`） | 中国财政部、国家税务总局，出口退税官方通知，2003 年 10 月 13 日，https://www.chinatax.gov.cn/n810341/n810765/n812198/n813051/c1205357/content.html | HS 税目 7601 的专业中文术语“未锻轧铝” |
| `us-epa-ap42-primary-aluminium-1998` | 官方指南（`official_guidance`） | 美国环境保护署，AP-42 第 12.1 节 Primary Aluminum Production，https://www.epa.gov/sites/production/files/2020-11/documents/c12s01.pdf | 原铝液态金属生产背景、保温与铸造过程、直接排放和浮渣形成 |
| `us-epa-ap42-secondary-aluminium-1986` | 官方指南（`official_guidance`） | 美国环境保护署，AP-42 第 12.8 节 Secondary Aluminum Operations，https://www.epa.gov/sites/default/files/2020-11/documents/c12s08.pdf | 再生铝熔炼、精炼、撇渣、浇注、燃烧排放和浮渣背景 |
| `eu-jrc-nfm-bref-2016` | 官方指南（`official_guidance`） | 欧盟委员会联合研究中心，《有色金属工业最佳可行技术参考文件》，2016 年 6 月通过，https://bureau-industrial-transformation.jrc.ec.europa.eu/sites/default/files/2020-01/JRC107041_NFM_bref2017.pdf | 原生和再生有色金属范围、过程和公用工程完整性，以及富氧燃烧和铸造冷却水的条件性要求 |
| `iai-lifecycle` | 官方指南（`official_guidance`） | 国际铝业协会，Lifecycle 工作领域，https://international-aluminium.org/work-areas/lifecycle/ | 从铝土矿开采至铝锭制造的上游从摇篮到工厂门关联和清单完整性背景 |
