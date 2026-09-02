---
pcr_id: pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.wheat-other
language: zh-CN
status: candidate
content_maturity: authored_methodology
translation_status: aligned
sync_with: pcr.en-US.md
---

# 其他小麦

## 1. 范围与适用性

本 PCR 适用于 CPC 3.0 代码 01112 所涵盖的非种用小麦籽粒，包括普通小麦、硬粒小麦、密穗小麦、红硬粒小麦以及归入该分类叶的其他已声明小麦类型。它支持从整地、播种和田间种植，经收获、干燥、清理、搬运，直至生产所选天工参考产品所需的调质或润麦环节的前景数据包；参考产品位于调质工序出口。

种用小麦、面粉、粗粒粉、麸皮、作为声明产品的秸秆以及其他小麦加工品不属于本 PCR 的规范产品身份。但是，当种子、收集秸秆或其他产品穿越已建模过程边界时，可作为输入或联产品流记录。下游制粉、食品制造、零售、使用和生命末期均不包括在内。

前景数据包必须声明地理区域、作物季、物种或品种、预定用途、灌溉制度、耕作和轮作背景、水分基准、市场等级、收获后操作以及最终系统门。供人类食品加工的籽粒，其质量声明必须依据适用目的地规则核查。CXS 199-1995 仅作为其明示范围内普通小麦和硬粒小麦的默认规范；密穗小麦、红硬粒小麦及该标准排除的其他类型须另行标明适用规范。

## 2. 产品类别身份

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.wheat-other |
| classification_refs | CPC 3.0:01112 Wheat, other |
| covered_products | CPC 3.0 代码 01112 内的非种用小麦籽粒，包括普通小麦、硬粒小麦、密穗小麦、红硬粒小麦以及其他已声明小麦类型；包括已声明的收获、干燥、清理、搬运或调质状态 |
| excluded_products | 种用小麦；面粉；粗粒粉；麸皮；作为声明产品的秸秆；食品及其他小麦制品 |
| representative_product | 经调质、用于制粉的润麦籽粒 |
| production_route | 田间种植、收获、收获后干燥和清理，以及已声明的调质或润麦 |
| market_state | 在声明的农场、仓储或调质出口处可销售的散装籽粒；须声明水分、等级、目的地和调质状态 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 作为经调质制粉用润麦籽粒交付的非种用小麦籽粒 |
| How much | 按声明收货水分基准计的 1,000 kg 净可销售籽粒 |
| How well | 适合声明加工用途的小麦；CXS 199-1995 范围内供人类食品加工的普通小麦和硬粒小麦水分不高于 14.5% m/m，并满足该标准的质量和安全限定条件；其他小麦类型遵循另行声明的目的地规范 |
| How long or cycle | 一个声明作物周期及其配套的收获后调质批次；除非明确建模，否则不包括声明系统门后的储存 |
| reference_flow_link | 参考产品输出行 `tempered_wheat_reference_product` 的数量等于 1,000 kg |

| 字段 | 值 |
| --- | --- |
| Reference amount | 1,000 kg |
| Reference product flow | Tempered wheat grain `78bd12e1-801c-4f96-a880-dba39e22783c` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | 物种或品种；种用状态；预定用途；地理区域；作物季；灌溉制度；耕作和轮作背景；水分含量和测量方法；市场等级；干燥和清理状态；润麦状态；最终系统门 |

构建前景数据包时，必须在数据集元数据、过程说明、参考流注释、产品描述或等效数据包字段中声明 `Required qualifiers` 所列项目。缺少任一必需限定项时，该数据包的参考流定义不完整。

## 4. 测量与单位规则

| rule_id | 适用对象 | 必需属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | 参考产品和所有籽粒质量平衡 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 参考量按净可销售籽粒质量记录，不包括包装、车辆皮重和剔除物。 |
| `moisture_basis` | 籽粒输入、中间籽粒和参考产品 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg 和 % m/m 水分 | 保留实测收货质量和水分。换算到统一水分基准时采用干物质守恒，并同时保留实测值与换算值。对 `codex-cxs-199-1995` 明示范围内供人类食品加工的普通小麦和硬粒小麦，按 14.5% m/m 上限校验最终批次；其他类型采用另行声明的目的地规范。 |
| `area_normalization` | 按面积记录的种植数据 | Area | ha | 每项作物周期数据按“每公顷数量 × 1,000 ÷ 每公顷净可销售籽粒产量（kg）”归一化至 1,000 kg 参考产品。 |
| `nutrient_mass` | 矿质和有机养分输入 | Nutrient mass | kg N、kg P2O5 或 kg K2O | 同时记录产品质量和声明养分分析；排放计算不得以配方产品质量替代养分质量。 |
| `energy_consistency` | 燃料、电力、干燥和搬运能源 | Energy or fuel mass/volume | MJ、kWh、kg 或 L | 保留账单或仪表的原始计量单位，并记录归一化所用低位热值或电力换算因子。 |

## 5. 系统边界

### 边界抽象

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 声明作物周期开始时已准备播种的田地，并声明此前土地利用、前茬、土壤条件和留田残余物状态 |
| starting_condition_role | 前景种植起点 |
| product_classification_scope | CPC 3.0 代码 01112 非种用小麦籽粒；CPC 01111 种用小麦是上游输入类别而非参考产品 |
| recursive_input_rule | 若 CPC 01112 小麦产品进入前景系统，仅在物理接收过程记录一次并链接独立上游数据集；不得在同一前景数据包内再次展开本 PCR |
| upstream_dataset_requirement | 外购种子、肥料、改良剂、植保产品、燃料、电力、供水和运输服务均需链接地理与时间适配的上游数据集 |
| disclosure | 声明土地利用历史、轮作、耕作、灌溉、肥料与残余物管理、产量、籽粒水分、联产品处理、收获后操作、所含储存时长和最终系统门 |

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_crop_cycle` | foreground_system_boundary | 包括达到声明参考籽粒状态所需的整地、播种、作物管理、适用时的灌溉、施肥和植保、收获以及收获后操作。 | `fao-leap-animal-feeds-2016` |
| `boundary_upstream_inputs` | upstream_dataset_links | 为每项外购物料和能源输入链接上游生产与交付数据集；农场或收获后的使用环节保留在前景清单中。 | `eu-pef-2021-2279`; `fao-leap-animal-feeds-2016` |
| `boundary_field_emissions` | direct_field_emissions | 包括受管理土壤的直接和间接氮排放、返田作物残余物氮，以及适用时石灰和尿素产生的 CO2；使用声明的 IPCC 层级或经评审区域方法并避免重复计算。 | `ipcc-2019-managed-soils` |
| `boundary_postharvest_gate` | postharvest_operations | 仅包括达到声明系统门所需的干燥、清理、搬运、储存和润麦；披露排除的储存或调质，不包括制粉和食品制造。 | `codex-cxs-199-1995`; `eu-pef-2021-2279` |
| `boundary_data_gaps` | completeness | 不得仅因缺少原始数据而省略环境相关流。采用有记录的代理或暂定估算，披露数据缺口和不确定性，并优先以原始数据替换。 | `eu-pef-2021-2279`; `fao-leap-animal-feeds-2016` |

## 6. 过程清单结构

### 过程图

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `crop_cultivation` | 小麦种植与收获 | required |  | 前景作物生产；天工过程 `d145ea84-0aa6-4fca-a8f8-99ef3684d016` | 一个声明作物周期和实测收获籽粒产出 |
| `postharvest_conditioning` | 籽粒干燥、清理、搬运和润麦 | required |  | 前景收获后处理；天工过程 `7279cfd0-c54b-4799-b15b-3564219d1907` 和 `e080aa90-8ea0-473d-881e-1fcc99d84ee0` | 1,000 kg 净可销售润麦籽粒 |

### 过程：小麦种植与收获（`crop_cultivation`）

#### 输入

##### 产品流

###### 播种用小麦种子（`wheat_seed_input`）

记录进入作物周期的外购或自留播种种子。具体种子流 UUID 尚待按声明种子类型和地理区域选定。

- Selected flow: 播种用小麦种子
- Flow property / unit: Mass / kg
- Amount rule: 声明田地面积实际领用的种子量
- Value mode: 前景记录（`foreground_record`）
- Specificity: 场地特定（`site_specific`）
- Normalization basis: 每 1,000 kg 净可销售籽粒产出
- Basis kind: 作物周期（`crop_cycle`）
- Evidence kind: 收集记录（`collected_record`）
- Collection protocol: `cp_crop_inputs`
- Range: 暂定宽范围播种量筛查
  - Range role: QA 护栏（`qa_guardrail`）
  - Lower: 50
  - Upper: 350
  - Unit: kg/ha
  - Basis: 声明作物周期内每公顷种子施用量
  - Basis kind: 作物周期（`crop_cycle`）
  - Evidence kind: 推理估算（`reasoned_estimate`）

###### 肥料和土壤改良剂（`fertiliser_and_amendment_inputs`）

分别记录矿质肥料、粪肥、堆肥、石灰、尿素及其他改良剂的产品质量、养分分析、施用日期和田地面积。

- Selected flow: 肥料和土壤改良剂产品
- Flow property / unit: Mass / kg product and kg declared nutrient
- Amount rule: 与田间施用记录核对的实测采购、领用或施用质量
- Value mode: 前景记录（`foreground_record`）
- Specificity: 场地特定（`site_specific`）
- Normalization basis: 每 1,000 kg 净可销售籽粒产出
- Basis kind: 作物周期（`crop_cycle`）
- Evidence kind: 收集记录（`collected_record`）
- Collection protocol: `cp_crop_inputs`
- Range: 暂定总养分输入筛查
  - Range role: QA 护栏（`qa_guardrail`）
  - Lower: 0
  - Upper: 800
  - Unit: kg declared nutrient/ha
  - Basis: 每公顷施用的 N、P2O5 和 K2O 合计量
  - Basis kind: 作物周期（`crop_cycle`）
  - Evidence kind: 推理估算（`reasoned_estimate`）

###### 植物保护产品（`crop_protection_inputs`）

分别记录配制除草剂、杀菌剂、杀虫剂、生长调节剂和种子处理产品；可获得时记录有效成分浓度。

- Selected flow: 植物保护产品
- Flow property / unit: Mass / kg formulated product and kg active ingredient
- Amount rule: 实测领用或施用的配制产品质量
- Value mode: 前景记录（`foreground_record`）
- Specificity: 场地特定（`site_specific`）
- Normalization basis: 每 1,000 kg 净可销售籽粒产出
- Basis kind: 作物周期（`crop_cycle`）
- Evidence kind: 收集记录（`collected_record`）
- Collection protocol: `cp_crop_inputs`
- Range: 暂定宽范围配制产品筛查
  - Range role: QA 护栏（`qa_guardrail`）
  - Lower: 0
  - Upper: 50
  - Unit: kg formulated product/ha
  - Basis: 每公顷施用的植保产品总量
  - Basis kind: 作物周期（`crop_cycle`）
  - Evidence kind: 推理估算（`reasoned_estimate`）

###### 灌溉水（`irrigation_water_input`）

仅在发生灌溉时纳入灌溉水。记录送达水量；研究要求时另记资源取水量和水源类型，不得重复计算。

- Selected flow: 灌溉供水
- Flow property / unit: Volume / m3
- Amount rule: 仪表、泵运行时间推算或水务账单记录的田间供水量
- Value mode: 前景记录（`foreground_record`）
- Specificity: 场地特定（`site_specific`）
- Normalization basis: 每 1,000 kg 净可销售籽粒产出
- Basis kind: 作物周期（`crop_cycle`）
- Evidence kind: 收集记录（`collected_record`）
- Collection protocol: `cp_crop_inputs`
- Range: 暂定灌溉量筛查
  - Range role: QA 护栏（`qa_guardrail`）
  - Lower: 0
  - Upper: 12000
  - Unit: m3/ha
  - Basis: 每公顷田地的灌溉供水量
  - Basis kind: 作物周期（`crop_cycle`）
  - Evidence kind: 推理估算（`reasoned_estimate`）

###### 田间燃料和能源（`field_energy_inputs`）

按作业分别记录柴油、汽油、电力和其他能源载体；保留采购或仪表物理单位及能源汇总换算方法。

- Selected flow: 田间燃料和电力供应
- Flow property / unit: Energy / MJ
- Amount rule: 实测燃料领用和电表记录，按已披露因子换算为 MJ
- Value mode: 计算值（`calculated_value`）
- Specificity: 场地特定（`site_specific`）
- Normalization basis: 每 1,000 kg 净可销售籽粒产出
- Basis kind: 作物周期（`crop_cycle`）
- Evidence kind: 基于收集数据计算（`calculated_from_collection`）
- Collection protocol: `cp_crop_inputs`
- Range: 暂定田间总能源筛查
  - Range role: QA 护栏（`qa_guardrail`）
  - Lower: 0
  - Upper: 50000
  - Unit: MJ/ha
  - Basis: 每公顷田地直接能源合计
  - Basis kind: 作物周期（`crop_cycle`）
  - Evidence kind: 推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 收获小麦籽粒（`harvested_wheat_output`）

记录总收获籽粒及扣除田间剔除物后的净可销售数量。每个代表批次均须测量水分。

- Selected flow: 收获的非种用小麦籽粒
- Flow property / unit: Mass / kg
- Amount rule: 收获量和可销售籽粒量的实测磅单或校准质量记录
- Value mode: 前景记录（`foreground_record`）
- Specificity: 场地特定（`site_specific`）
- Normalization basis: 每公顷、每作物周期
- Basis kind: 作物周期（`crop_cycle`）
- Evidence kind: 收集记录（`collected_record`）
- Collection protocol: `cp_harvest_outputs`
- Sources: `faostat-ag-production-2000-2020`; `fao-wheat-crop-information`
- Range: 暂定宽范围产量合理性筛查
  - Range role: QA 护栏（`qa_guardrail`）
  - Lower: 0.8
  - Upper: 9
  - Unit: t/ha
  - Basis: 参考已报告区域均值和良好灌溉产量背景而设的刻意宽范围；须以经评审区域证据替换，不得视为允许符合区间
  - Basis kind: 作物周期（`crop_cycle`）
  - Evidence kind: 推理估算（`reasoned_estimate`）

###### 收集秸秆或其他作物联产品（`collected_crop_coproduct`）

仅在秸秆或其他作物产品被有意收集并作为产品离田时记录。留田或翻入土壤的残余物不是输出产品。

- Selected flow: 收集小麦秸秆或声明作物联产品
- Flow property / unit: Mass / kg dry matter
- Amount rule: 实测或计算的收集干质量，不含返田残余物
- Value mode: 计算值（`calculated_value`）
- Specificity: 场地特定（`site_specific`）
- Normalization basis: 每 1,000 kg 净可销售籽粒产出
- Basis kind: 作物周期（`crop_cycle`）
- Evidence kind: 基于收集数据计算（`calculated_from_collection`）
- Collection protocol: `cp_harvest_outputs`
- Range: 暂定收集残余物质量筛查
  - Range role: QA 护栏（`qa_guardrail`）
  - Lower: 0
  - Upper: 3
  - Unit: kg dry matter/kg net saleable grain
  - Basis: 收集残余物干质量与可销售籽粒质量之比
  - Basis kind: 作物周期（`crop_cycle`）
  - Evidence kind: 推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

###### 受管理土壤氮排放（`managed_soil_n_emissions`）

依据收集的氮输入、残余物管理和区域条件，采用声明的 IPCC 层级或认可区域方法，计算直接和间接 N2O 及相关氮损失路径。

- Selected flow: 按环境介质区分的一氧化二氮和相关受管理土壤氮排放
- Flow property / unit: Mass / kg emitted substance
- Amount rule: 分别计算直接 N2O、挥发与沉降、淋溶与径流路径
- Value mode: 计算值（`calculated_value`）
- Specificity: 场地特定（`site_specific`）
- Normalization basis: 每 1,000 kg 净可销售籽粒产出
- Basis kind: 作物周期（`crop_cycle`）
- Evidence kind: 基于收集数据计算（`calculated_from_collection`）
- Collection protocol: `cp_nitrogen_activity`
- Sources: `ipcc-2019-managed-soils`
- Range: 非负方法约束
  - Range role: QA 护栏（`qa_guardrail`）
  - Lower: 0
  - Upper: 本 PCR 不设固定上限
  - Unit: kg emitted substance/ha
  - Basis: 每公顷、每作物周期计算排放量
  - Basis kind: 作物周期（`crop_cycle`）
  - Evidence kind: 方法公式（`method_formula`）
  - Sources: `ipcc-2019-managed-soils`

###### 石灰和尿素产生的二氧化碳（`lime_urea_co2`）

发生石灰或尿素施用时，依据收集的施用质量和所选 IPCC 方法计算 CO2。

- Selected flow: 石灰和尿素施用产生的空气中二氧化碳
- Flow property / unit: Mass / kg CO2
- Amount rule: 根据石灰和尿素实测施用质量以及声明含碳量或默认因子计算
- Value mode: 计算值（`calculated_value`）
- Specificity: 场地特定（`site_specific`）
- Normalization basis: 每 1,000 kg 净可销售籽粒产出
- Basis kind: 作物周期（`crop_cycle`）
- Evidence kind: 基于收集数据计算（`calculated_from_collection`）
- Collection protocol: `cp_nitrogen_activity`
- Sources: `ipcc-2019-managed-soils`
- Range: 非负方法约束
  - Range role: QA 护栏（`qa_guardrail`）
  - Lower: 0
  - Upper: 本 PCR 不设固定上限
  - Unit: kg CO2/ha
  - Basis: 每公顷、每作物周期计算排放量
  - Basis kind: 作物周期（`crop_cycle`）
  - Evidence kind: 方法公式（`method_formula`）
  - Sources: `ipcc-2019-managed-soils`

### 过程：籽粒干燥、清理、搬运和润麦（`postharvest_conditioning`）

#### 输入

##### 产品流

###### 接收的收获小麦（`received_wheat_input`）

记录每个接收批次的实测质量和水分，并与种植输出或上游小麦数据集核对。

- Selected flow: 收获的非种用小麦籽粒
- Flow property / unit: Mass / kg
- Amount rule: 清理和调质前按批次测量的接收质量
- Value mode: 前景记录（`foreground_record`）
- Specificity: 场地特定（`site_specific`）
- Normalization basis: 每 1,000 kg 净可销售润麦籽粒产出
- Basis kind: 过程输出（`process_output`）
- Evidence kind: 收集记录（`collected_record`）
- Collection protocol: `cp_postharvest_inputs`
- Range: 暂定接收量与产品量比值筛查
  - Range role: QA 护栏（`qa_guardrail`）
  - Lower: 0.95
  - Upper: 1.30
  - Unit: kg received grain/kg reference product
  - Basis: 清理、干燥和润麦前按收货状态计的籽粒
  - Basis kind: 过程输出（`process_output`）
  - Evidence kind: 推理估算（`reasoned_estimate`）

###### 调质用水（`conditioning_water_input`）

记录润麦加水量以及单独计量的清洗用水。没有水分平衡时，不得仅从籽粒质量差推断吸水量。

- Selected flow: 工艺用水
- Flow property / unit: Mass / kg
- Amount rule: 按批次测量的加水量
- Value mode: 前景记录（`foreground_record`）
- Specificity: 场地特定（`site_specific`）
- Normalization basis: 每 1,000 kg 净可销售润麦籽粒产出
- Basis kind: 过程输出（`process_output`）
- Evidence kind: 收集记录（`collected_record`）
- Collection protocol: `cp_postharvest_inputs`
- Range: 暂定润麦用水筛查
  - Range role: QA 护栏（`qa_guardrail`）
  - Lower: 0
  - Upper: 0.10
  - Unit: kg water/kg reference product
  - Basis: 声明清理和润麦操作中的加水量
  - Basis kind: 过程输出（`process_output`）
  - Evidence kind: 推理估算（`reasoned_estimate`）

###### 收获后能源（`postharvest_energy_input`）

分别记录用于干燥、输送、通风、清理、搬运和润麦的电力与燃料。

- Selected flow: 收获后操作的电力和燃料供应
- Flow property / unit: Energy / MJ
- Amount rule: 实测仪表、账单或设备日志数据，按已披露因子换算为 MJ
- Value mode: 计算值（`calculated_value`）
- Specificity: 场地特定（`site_specific`）
- Normalization basis: 每 1,000 kg 净可销售润麦籽粒产出
- Basis kind: 过程输出（`process_output`）
- Evidence kind: 基于收集数据计算（`calculated_from_collection`）
- Collection protocol: `cp_postharvest_inputs`
- Range: 暂定收获后能源筛查
  - Range role: QA 护栏（`qa_guardrail`）
  - Lower: 0
  - Upper: 3
  - Unit: MJ/kg reference product
  - Basis: 截至声明系统门的收获后直接能源合计
  - Basis kind: 过程输出（`process_output`）
  - Evidence kind: 推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 润麦参考产品（`tempered_wheat_reference_product`）

这是经所含干燥、清理、搬运和润麦操作后的声明参考产品。

- Selected flow: Tempered wheat grain `78bd12e1-801c-4f96-a880-dba39e22783c`
- Flow property / unit: Mass / kg
- Amount rule: 按声明水分基准计恰好 1,000 kg 净可销售产品
- Value mode: 固定值（`fixed_value`）
- Specificity: 产品特定（`product_specific`）
- Normalization basis: PCR 参考流
- Basis kind: 参考流（`reference_flow`）
- Evidence kind: 来源规则（`source_rule`）
- Range: 参考流恒等约束
  - Range role: 允许范围（`allowed_range`）
  - Lower: 1000
  - Upper: 1000
  - Unit: kg
  - Basis: PCR 参考产品量
  - Basis kind: 参考流（`reference_flow`）
  - Evidence kind: 来源规则（`source_rule`）

##### 废物流

###### 筛下物和剔除籽粒（`screenings_and_rejects`）

记录筛下物、石块、作为废物收集的粉尘以及从可销售产品中剔除的籽粒。出售或作为联产品利用的物料应改记为产品流。

- Selected flow: 小麦清理筛下物和剔除物
- Flow property / unit: Mass / kg
- Amount rule: 按批次测量的剔除或收集废物质量
- Value mode: 前景记录（`foreground_record`）
- Specificity: 场地特定（`site_specific`）
- Normalization basis: 每 1,000 kg 净可销售润麦籽粒产出
- Basis kind: 过程输出（`process_output`）
- Evidence kind: 收集记录（`collected_record`）
- Collection protocol: `cp_postharvest_outputs`
- Range: 暂定清理损失筛查
  - Range role: QA 护栏（`qa_guardrail`）
  - Lower: 0
  - Upper: 0.20
  - Unit: kg waste/kg received grain
  - Basis: 废物和剔除物相对于接收籽粒质量
  - Basis kind: 过程输出（`process_output`）
  - Evidence kind: 推理估算（`reasoned_estimate`）

##### 基本流

###### 未捕集籽粒粉尘（`grain_dust_to_air`）

记录干燥、输送和清理产生的实测或计算未捕集颗粒物排放；不得包括已计入收集筛下物的粉尘。

- Selected flow: 籽粒搬运产生的空气颗粒物
- Flow property / unit: Mass / kg
- Amount rule: 实测排放，或根据设备特定因子和处理量计算排放
- Value mode: 计算值（`calculated_value`）
- Specificity: 技术特定（`technology_specific`）
- Normalization basis: 每 1,000 kg 净可销售润麦籽粒产出
- Basis kind: 过程输出（`process_output`）
- Evidence kind: 基于收集数据计算（`calculated_from_collection`）
- Collection protocol: `cp_postharvest_outputs`
- Range: 暂定粉尘排放筛查
  - Range role: QA 护栏（`qa_guardrail`）
  - Lower: 0
  - Upper: 0.01
  - Unit: kg particulate/kg received grain
  - Basis: 未捕集粉尘相对于接收籽粒质量
  - Basis kind: 过程输出（`process_output`）
  - Evidence kind: 推理估算（`reasoned_estimate`）

## 7. 分配与联产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_avoid` | multifunctional_processes | 通过细分种植和收获后操作并将实测输入、输出和排放直接归属到引起它们的产品或操作，优先避免分配。 | `eu-pef-2021-2279` |
| `allocation_crop_coproducts` | collected_straw_and_other_coproducts | 返田残余物不承担产品分配。秸秆或其他联产品离田且无法细分时，采用反映因果关系并有记录的物理关系；不存在可辩护物理关系时，采用地理和时期特定价格进行经济分配并报告敏感性。 | `eu-pef-2021-2279`; `fao-leap-animal-feeds-2016` |
| `allocation_rotation` | shared_rotation_operations | 作物特定操作直接归属。真正跨作物或跨年度共享的操作按处理面积、作业时间或实测用量等物理驱动量分配，并披露驱动量和时期。 | `fao-leap-animal-feeds-2016` |
| `allocation_waste` | postharvest_rejects | 无预期市场或内部生产用途的物料作为废物。筛下物或剔除籽粒若销售或用于生产，应改记为产品流并应用多功能性层级。 | `eu-pef-2021-2279` |

## 8. 前景数据收集、计算与质量规则

### 数据收集规程

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_crop_inputs` | `crop_cultivation` | 种子、肥料、改良剂、植保、灌溉、燃料和电力输入 | 发票、领用单、施用日志、仪表、田间记录 | 产品身份；数量；养分或有效成分分析；田地面积；日期；作业；仪表或发票编号 | 将采购和领用量与田间施用及仪表记录核对 | 原始单位，以及经记录换算后的 kg、m3、kWh 或 MJ | 每次施用或作业 | 完整声明作物周期 | 每块代表田地或同质田组 | 按产品和田块求和，再按净可销售籽粒产量归一化 | 发票或领用记录、校准仪表、施用日志、田地图和换算因子来源 |
| `cp_harvest_outputs` | `crop_cultivation` | 收获籽粒和收集作物联产品 | 磅单、产量监测仪、水分检测、田间与仓储日志 | 总质量；净质量；水分；田地面积；批次号；剔除质量；收集秸秆质量和干物质比例 | 校准衡器或经验证产量监测仪，并与入库单核对 | kg、% m/m 水分、ha | 每个收获批次 | 声明作物周期的完整收获期 | 每块代表田地和每个仓储接收点 | 分别汇总批次干物质与收货质量，保留产量加权水分 | 衡器校准、水分仪校准、批次核对和田间至仓储质量平衡 |
| `cp_nitrogen_activity` | `crop_cultivation` | 受管理土壤氮和碳活动数据 | 肥料记录、改良剂分析、产量和残余物记录、土壤和管理记录 | 合成 N；有机 N；残余物产量和含 N 量；移除比例；尿素；石灰；土壤类型；气候；灌溉；方法层级 | 汇编声明 IPCC 或认可区域方法所需活动数据 | kg N、kg 产品、kg 干物质、ha | 每次施用和年度作物周期计算 | 完整作物周期及适用排放期 | 每块代表田地或同质排放分层 | 分层计算后汇总排放，再按可销售籽粒产出归一化 | 来源记录、实验室分析、方法版本、因子、公式和独立复算 |
| `cp_postharvest_inputs` | `postharvest_conditioning` | 接收籽粒、调质水、电力和燃料 | 接收单、水分检测、水与能源仪表、发票、批次日志 | 批次号；接收质量和水分；加水量；电力；燃料；作业；起止时间 | 校准衡器、水分检测、仪表、发票或设备日志 | kg、% m/m 水分、m3、kWh、MJ | 每批次和账单期 | 数据集代表的全部批次和操作 | 每个代表性接收与调质场地 | 共享仪表总量按实测处理量或运行时间分配并披露方法 | 衡器和仪表校准、发票、批次表和仪表核对 |
| `cp_postharvest_outputs` | `postharvest_conditioning` | 可销售籽粒、筛下物、剔除物和粉尘 | 出库单、水分与等级检测、废物单、排放测量或设备因子 | 可销售质量；水分；等级；废物质量；去向；颗粒物结果或因子；处理量 | 校准衡器和实验室或检验记录；优先实测排放 | kg 和 % m/m 水分 | 每个成品批次和废物流转 | 全部代表性收获后批次 | 每个代表性发运、仓储与废物处理场地 | 按湿基和干基核对来料籽粒、加水、可销售产出、废物和水分变化 | 衡器校准、检测报告、废物接收单、质量平衡检查及所用因子来源 |

### 计算规则

| rule_id | 适用对象 | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | 所有作物周期与过程数量 | 归一化数量 = 记录数量 × 1,000 ÷ 同一水分基准下的净可销售参考产品质量（kg） | 记录数量；净可销售籽粒质量；水分基准 | 每 1,000 kg 参考产品的数量 |  |
| `calc_moisture_conversion` | 籽粒质量换算 | 干物质 = 收货质量 ×（1 − 水分比例）；目标水分下换算质量 = 干物质 ÷（1 − 目标水分比例）。 | 收货质量；实测水分；目标水分 | 干物质和明确标注的换算质量 | `codex-cxs-199-1995` |
| `calc_managed_soil_emissions` | 受管理土壤氮排放 | 将声明 IPCC 层级公式用于合成与有机 N、作物残余物 N、挥发、沉降、淋溶和径流活动数据；需要时将 N2O-N 换算为 N2O，并避免路径间重复计算。 | 氮活动字段；残余物数据；区域条件；所选因子 | 直接和间接 N2O 及相关氮损失流 | `ipcc-2019-managed-soils` |
| `calc_lime_urea_co2` | 石灰和尿素施用 | 依据收集的石灰和尿素施用量及声明 IPCC 含碳量或排放因子计算 CO2。 | 石灰类型和质量；尿素质量；所选因子 | 每作物周期 kg CO2 | `ipcc-2019-managed-soils` |
| `calc_postharvest_mass_balance` | 收获后调质 | 核对接收干物质与可销售产品干物质、收集联产品、废物和实测损失；加水和除水须与干物质损失分开报告。 | 接收与输出质量；水分；加水；废物与联产品质量 | 含未解释差额的湿质量和干物质平衡 |  |

### 数据质量要求

| requirement_id | 适用对象 | 要求 | 证据 |
| --- | --- | --- | --- |
| `dq_identity` | 产品与过程身份 | 保留批次、田地、作物季、地理区域、品种或物种、预定用途、种用状态、市场等级、水分基准、操作和最终系统门。 | 关联的田间、批次、检测和发运记录 |
| `dq_temporal` | 时间代表性 | 使用完整作物周期和全部代表性收获后批次。多年平均值须保留年度值、覆盖范围和权重。 | 带日期记录和覆盖核对 |
| `dq_geography_technology` | 地理与技术代表性 | 灌溉、耕作、田间作业、电力、燃料、干燥、清理和润麦技术须匹配代表区域和时期。 | 田地图、设备清单、供应商地理信息和数据集元数据 |
| `dq_completeness` | 清单完整性 | 核对采购和领用输入、收获和发运输出、联产品、废物、水和能源；解释每个重大缺口或代理。 | 质量、养分、水和能源核对以及缺口登记 |
| `dq_measurement` | 测量质量 | 保留衡器、水分仪、水和能源仪表及实验室分析的校准或验证证据。 | 校准证书、检测报告和仪表检查 |
| `dq_sources_uncertainty` | 二手数据与估算 | 为每个二手数据集、因子、代理和推理估算记录来源、版本、地理、时间、方法和不确定性。进入 active 评审前替换暂定范围，除非明确批准保留。 | 来源登记、不确定性记录和评审处置 |

## 9. 验证规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validation_reference_identity` | reference_product | 确认参考输出为流 `78bd12e1-801c-4f96-a880-dba39e22783c` 的 1,000 kg，流属性为 Mass `93a60a56-a3c8-11da-a746-0800200b9a66`，单位组为 Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`，并具备全部必需限定项。 |  |
| `validation_product_quality` | grain_quality | 对 CXS 199-1995 范围内声明适合人类食品加工的普通小麦和硬粒小麦，验证实测水分不高于 14.5% m/m。所有小麦类型均须保留另行适用的目的地质量与安全证据，不得将 CXS 199-1995 扩展至其排除类型。 | `codex-cxs-199-1995` |
| `validation_crop_coverage` | crop_cultivation | 要求物料与能源输入、收获输出、残余物管理和田间直接排放覆盖完整作物周期；所有省略或代理均须披露。 | `eu-pef-2021-2279`; `fao-leap-animal-feeds-2016` |
| `validation_nitrogen_method` | managed_soil_emissions | 将氮活动数据与声明排放公式核对，标明 IPCC 层级或区域方法和因子，并检查直接及间接路径的遗漏与重复计算。 | `ipcc-2019-managed-soils` |
| `validation_mass_balance` | postharvest_conditioning | 要求接收籽粒、加水或除水、产品、联产品、废物和实测损失之间的湿质量与干物质平衡；调查所有未解释差额。 |  |
| `validation_allocation` | multifunctionality | 确认分配前已尝试直接归属或细分；若仍需分配，保留物理或经济分配驱动量、时期、因子和敏感性。 | `eu-pef-2021-2279`; `fao-leap-animal-feeds-2016` |
| `validation_reasoned_estimates` | provisional_ranges | 将每个 `reasoned_estimate` 标记为暂定；除非评审记录明确接受继续使用，否则须在激活前以经区域评审的证据替换。 |  |

## 10. 发布数据集概况

| 字段 | 值 |
| --- | --- |
| dataset_role | 贯穿至声明收获后调质系统门的非种用小麦籽粒前景生产数据包 |
| downstream_use | 经评审后可发布为 `secondary_dataset` 或 `background_dataset`，用于构建 process 和 lifecyclemodel |
| allowed_use | 在地理、时期、技术、水分基准、产品质量和分配背景匹配时，对声明的小麦种植与调质路线进行归因型建模 |
| excluded_use | 小麦种子生产；面粉或粗粒粉制造；身份不明的全球替代；缺少必需限定项、代表性或分配敏感性时的比较声明 |
| required_metadata | PCR id 和版本状态；地理区域；作物季；田地和批次覆盖；品种或物种；预定用途；灌溉和耕作；轮作；水分基准；等级；系统门；过程路线；分配；来源和数据集版本 |
| required_quality_disclosure | 原始数据覆盖；校准状态；质量与养分核对；时间、地理和技术代表性；代理；推理估算；不确定性；分配敏感性；未解决 UUID |
| update_trigger | 新的经区域评审证据、修订的 Codex 或 IPCC 规则、重大技术或市场状态变化、UUID 替换、分配实践变化，或筛查范围不具代表性的证据 |

## 11. 数据来源

| Source id | Type | Reference | 用途 |
| --- | --- | --- | --- |
| `codex-cxs-199-1995` | 标准（`standard`） | Codex Alimentarius, CXS 199-1995, Standard for Wheat and Durum Wheat, amended 2019 with 2025 corrigendum, https://www.fao.org/fao-who-codexalimentarius/sh-proxy/en/?lnk=1&url=https%3A%2F%2Fworkspace.fao.org%2Fsites%2Fcodex%2FStandards%2FCXS+199-1995%2FCXS_199e.pdf, retrieved 2026-08-07 | 产品范围、物种、加工用途质量、水分上限、污染物、卫生和批次限定项 |
| `eu-pef-2021-2279` | 官方指南（`official_guidance`） | European Commission Recommendation (EU) 2021/2279, Product Environmental Footprint method and PEFCR requirements, https://eur-lex.europa.eu/eli/reco/2021/2279/2021-12-30, retrieved 2026-08-07 | 系统边界完整性、数据缺口、原始和二手数据质量以及多功能性层级 |
| `fao-leap-animal-feeds-2016` | 官方指南（`official_guidance`） | FAO LEAP Partnership, Environmental performance of animal feeds supply chains: Guidelines for assessment, 2016, https://openknowledge.fao.org/server/api/core/bitstreams/040bf0e7-e652-4eda-807c-37172c403671/content, retrieved 2026-08-07 | 作物生产过程覆盖、分配、原始数据优先、数据管理、代表性、完整性和不确定性 |
| `ipcc-2019-managed-soils` | 方法因子（`method_factor`） | IPCC, 2019 Refinement to the 2006 IPCC Guidelines, Volume 4, Chapter 11: N2O Emissions from Managed Soils, and CO2 Emissions from Lime and Urea Application, https://www.ipcc-nggip.iges.or.jp/public/2019rf/pdf/4_Volume4/19R_V4_Ch11_Soils_N2O_CO2.pdf, retrieved 2026-08-07 | 氮活动数据、直接和间接 N2O、作物残余物氮、挥发、淋溶与径流，以及石灰和尿素 CO2 计算 |
| `faostat-ag-production-2000-2020` | 数据集（`dataset`） | FAO, Agricultural production statistics 2000-2020, FAOSTAT Analytical Brief 41, https://openknowledge.fao.org/server/api/core/bitstreams/b75223dd-4e30-43aa-85a9-4c587753b027/content, retrieved 2026-08-07 | 区域小麦平均产量，仅作为宽范围合理性背景 |
| `fao-wheat-crop-information` | 官方指南（`official_guidance`） | FAO Land and Water, Wheat crop information, https://www.fao.org/land-water/databases-and-software/crop-information/wheat/en/, retrieved 2026-08-07 | 良好灌溉小麦产量背景，仅用于宽范围产量合理性筛查 |
