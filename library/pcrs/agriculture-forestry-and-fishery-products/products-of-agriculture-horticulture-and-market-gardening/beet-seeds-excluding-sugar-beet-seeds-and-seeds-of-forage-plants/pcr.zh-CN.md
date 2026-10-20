---
pcr_id: pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.beet-seeds-excluding-sugar-beet-seeds-and-seeds-of-forage-plants
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 甜菜种子（糖用甜菜种子除外）及饲草植物种子

## 1. 范围与适用性

本 PCR 适用于糖用甜菜种子以外的播种级甜菜种子，以及申报饲草植物物种种子的商业生产。前景边界从亲本种子和田间投入开始，到种子生产者或加工者交付点放行的清洁、有活力种子结束。一个数据集代表一个申报物种、品种、繁殖等级、路线和批次；不得在没有透明权重的情况下平均物理性质不同的物种。

排除糖用甜菜种子、作为饲料销售的粮食或饲草生物量、营养繁殖材料、本 CPC 类别以外的花卉种子，以及没有前景记录的种子繁殖或加工阶段。包衣或化学处理仅在申报交付点之前实施且有批次记录时纳入。

## 2. 产品类别身份

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.beet-seeds-excluding-sugar-beet-seeds-and-seeds-of-forage-plants |
| classification_refs | CPC 3.0 `01940`; mapping relation: exact |
| covered_products | 播种级非糖用甜菜种子，以及饲草禾本科、豆科和其他申报饲草植物种子 |
| excluded_products | 糖用甜菜种子；饲料粮；收获饲草生物量；营养繁殖材料；未经核实的物种聚合 |
| representative_product | 一个申报的清洁、有活力播种种子批次 |
| production_route | 亲本种子建植→田间繁殖→收获/脱粒→干燥/调理→清选/分级→包装/储存交付 |
| market_state | 用于播种的清洁种子，并申报物种/品种、纯度、发芽率或活力、水分、处理和认证状态 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| 对象 | 在生产者或加工者交付点的清洁、有活力甜菜或饲草播种种子 |
| 数量 | 1 kg |
| 质量 | 申报物种/品种、物理纯度、发芽率或活力、水分、处理、认证等级和合格批次状态 |
| 时间或周期 | 一个可追溯繁殖与加工批次；涉及多年生建植时按申报生产期分摊 |
| reference_flow_link | accepted_planting_seed |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | Beet seeds (excluding sugar beet seeds) and seeds of forage plants |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必填限定信息 | 物种和品种；种子等级；纯度；发芽率或活力；水分；处理/包衣；认证；生产地理；交付点 |

类别级固定 UUID 仍未解析。现有白羽扇豆（*Lupinus albus*）流仅适用于单一物种，不得代表该复合类别。

## 4. 计量与单位规则
| rule_id | 适用于 | 必需属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | 参考和中间种子流 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 按申报水分基准记录净质量；包装毛重单独报告。 |
| `quality_basis` | 合格种子 | 批次检验结果 | 申报检验单位 | 纯度、发芽率/活力和水分必须对应同一放行批次。 |

## 5. 系统边界

### 边界抽象

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 申报亲本种子、田间状态和任何多年生植株年龄 |
| starting_condition_role | 繁殖周期的前景起始条件 |
| product_classification_scope | CPC 3.0 01940 内一个申报成员产品 |
| recursive_input_rule | 同类别亲本种子作为来自独立上游种子数据集的输入交换；不得递归回当前批次 |
| upstream_dataset_requirement | 上游数据集的物种/品种、种子等级、地理、交付点和质量状态必须与亲本种子投入匹配 |
| disclosure | 申报一年生或多年生路线、田间和加工地、作物周期、批次关联、不合格物去向及纳入的处理/储存 |

### 边界规则

| rule_id | 适用于 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_route` | 所有数据集 | 仅纳入申报交付点之前有证据的田间繁殖、收获、脱粒、调理、分级、包装和储存操作。 | `fao-seed-production-1993`; `fao-ilri-forage-seed-1996` |
| `boundary_parent_seed` | 亲本种子 | 将同类别亲本种子作为关联上游投入，并防止递归回当前批次。 |  |
| `boundary_rejects` | 不合格物料 | 从合格输出中排除不合格或降级物料，并披露每个去向。 | `fao-ilri-forage-seed-1996` |
| `boundary_treatment` | 种子处理 | 仅在交付前实施且有批次记录时纳入处理或包衣。 |  |
| `boundary_period` | 多年生饲草种子田 | 在记录的种子生产期内分摊建植和终止负担，并避免重复计算。 |  |

## 6. 过程清单结构

### 过程图

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `field_multiplication` | 种子作物建植与田间繁殖 | `required` | 在一个作物周期内生产申报的甜菜或饲草种子作物 | 受控生物生产 | 1 kg 可收获种子作物 |
| `harvest_thresh` | 收获与脱粒 | `required` | 从田间作物收获含种子物料并脱粒分离 | 收获与获取 | 1 kg 脱粒原种子 |
| `dry_condition` | 干燥与初级调理 | `required` | 分级前进行水分稳定、风选或初级清理 | 保藏与初级调理 | 1 kg 调理种子 |
| `grade_pack` | 清选、分级、包装与交付 | `required` | 最终除杂、批次分级、适用时的批准处理、包装、储存和种子级交付 | 物料处理与分级 | 1 kg 合格播种种子 |

### 过程：种子作物建植与田间繁殖 (`field_multiplication`)

#### 输入
##### 产品流

###### 用于繁殖的亲本种子（`parent_seed`）

申报物种/品种的亲本、基础种子或认证种子进入繁殖田。

- 选定流：Beet or forage parent planting seed
- 流属性/单位：Mass / kg
- 数量规则：measured mass placed in the field
- 数值来源模式：`foreground_record`
- 适用范围：`product_specific`
原始活动或阶段基准：per crop cycle producing the reported harvestable seed.

- 归一化基准：每声明的参考流
- 基准类型：`crop_cycle`
- 证据类型：`collected_record`
- 采集协议：`cp_parent_seed`
- 来源：`fao-seed-production-1993`

- 数量范围：用于繁殖的亲本种子 QA 范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0.001
  - 上限：0.30
  - 单位：kg
  - 基准：per kg harvestable seed crop
  - 基准类型：`crop_cycle`
  - 证据类型：`reasoned_estimate`

###### 尿素肥料投入（`nutrient_supply`）

仅当声明的过程实际使用尿素肥料时纳入此条件卡。其他实际产品或能源须各自建立单一交换，记录独立身份和实测数量；不得从本示例推定其必然使用。

- 选定流：尿素肥料
- 流属性/单位：质量 / kg 产品
- 数量规则：记录该过程和期间实际使用的尿素肥料数量；只有路线记录证明未使用时，才填零或不适用。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
原始活动或阶段基准：per kg harvestable seed crop.

- 归一化基准：每声明的参考流
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_field_inputs`


###### 磷酸一铵肥料投入（`nutrient_supply_monoammonium_phosphate`）

仅当声明的过程实际使用磷酸一铵肥料时纳入此条件卡。其他实际产品或能源须各自建立单一交换，记录独立身份和实测数量；不得从本示例推定其必然使用。

- 选定流：磷酸一铵肥料
- 流属性/单位：质量 / kg 产品
- 数量规则：记录该过程和期间实际使用的磷酸一铵肥料数量；只有路线记录证明未使用时，才填零或不适用。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
原始活动或阶段基准：per kg harvestable seed crop.

- 归一化基准：每声明的参考流
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_field_inputs`


###### 氯化钾肥料投入（`nutrient_supply_potassium_chloride`）

仅当声明的过程实际使用氯化钾肥料时纳入此条件卡。其他实际产品或能源须各自建立单一交换，记录独立身份和实测数量；不得从本示例推定其必然使用。

- 选定流：氯化钾肥料
- 流属性/单位：质量 / kg 产品
- 数量规则：记录该过程和期间实际使用的氯化钾肥料数量；只有路线记录证明未使用时，才填零或不适用。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
原始活动或阶段基准：per kg harvestable seed crop.

- 归一化基准：每声明的参考流
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_field_inputs`


###### 施用的牛粪肥投入（`nutrient_supply_cattle_manure`）

仅当声明的过程实际使用施用的牛粪肥时纳入此条件卡。其他实际产品或能源须各自建立单一交换，记录独立身份和实测数量；不得从本示例推定其必然使用。

- 选定流：施用的牛粪肥
- 流属性/单位：质量 / kg 产品
- 数量规则：记录该过程和期间实际使用的施用的牛粪肥数量；只有路线记录证明未使用时，才填零或不适用。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
原始活动或阶段基准：per kg harvestable seed crop.

- 归一化基准：每声明的参考流
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_field_inputs`


###### 农业石灰石投入（`nutrient_supply_agricultural_limestone`）

仅当声明的过程实际使用农业石灰石时纳入此条件卡。其他实际产品或能源须各自建立单一交换，记录独立身份和实测数量；不得从本示例推定其必然使用。

- 选定流：农业石灰石
- 流属性/单位：质量 / kg 产品
- 数量规则：记录该过程和期间实际使用的农业石灰石数量；只有路线记录证明未使用时，才填零或不适用。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
原始活动或阶段基准：per kg harvestable seed crop.

- 归一化基准：每声明的参考流
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_field_inputs`


###### 灌溉水供应（`irrigation_water`）

发生灌溉时记录供应给种子作物的灌溉水。

- 选定流：Irrigation water
- 流属性/单位：Mass / kg
- 数量规则：metered or calculated irrigation water delivered
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
原始活动或阶段基准：per kg harvestable seed crop.

- 归一化基准：每声明的参考流
- 基准类型：`process_output`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_irrigation`

- 数量范围：灌溉水供应 QA 范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：20
  - 单位：m3
  - 基准：per kg harvestable seed crop
  - 基准类型：`process_output`
  - 证据类型：`reasoned_estimate`

###### 中压电力（`field_energy`）

仅在本过程实际使用中压电力时纳入本交换；其他实际载能体各自独立记录。采购作业服务时保留供应商边界，服务中已包含的燃料或电力不得再次计入。
原始活动或阶段基准：per kg harvestable seed crop。

- 选定流：中压电力
- 流属性/单位：能量 / kWh
- 数量规则：计量本过程和期间实际使用的中压电力，仅归一到声明参考输出一次；必要时使用有记录的密度、热值或仪表约定换算载能体原始单位。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每声明的参考流
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_energy`

###### 柴油（`field_energy_diesel`）

仅在本过程实际使用柴油时纳入本交换；其他实际载能体各自独立记录。采购作业服务时保留供应商边界，服务中已包含的燃料或电力不得再次计入。
原始活动或阶段基准：per kg harvestable seed crop。

- 选定流：柴油
- 流属性/单位：质量 / kg
- 数量规则：计量本过程和期间实际使用的柴油，仅归一到声明参考输出一次；必要时使用有记录的密度、热值或仪表约定换算载能体原始单位。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每声明的参考流
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_energy`

##### 废物流

未单独申报必需卡片。

##### 基本流

未单独申报必需卡片。

#### 输出
##### 产品流

###### 可收获的甜菜或饲草种子作物（`harvestable_seed_crop`）

成熟的含种子作物离开田间繁殖过程，进入收获与脱粒。

- 选定流：Harvestable beet or forage seed crop
- 流属性/单位：Mass / kg
- 数量规则：measured harvested wet mass attributable to the seed lot
- 数值来源模式：`foreground_record`
- 适用范围：`product_specific`
原始活动或阶段基准：per crop cycle and field lot.

- 归一化基准：每声明的参考流
- 基准类型：`crop_cycle`
- 证据类型：`collected_record`
- 采集协议：`cp_harvest_mass`
- 来源：`fao-seed-production-1993`

- 数量范围：可收获的甜菜或饲草种子作物 QA 范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：1
  - 上限：8
  - 单位：kg
  - 基准：per kg raw threshed seed
  - 基准类型：`crop_cycle`
  - 证据类型：`reasoned_estimate`

##### 废物流

未单独申报必需卡片。

##### 基本流

未单独申报必需卡片。

### 过程：收获与脱粒 (`harvest_thresh`)

#### 输入
##### 产品流

###### 接收的可收获种子作物（`harvestable_crop_input`）

申报田间批次进入收获与脱粒，不得由饲用牧草生物量替代。

- 选定流：Harvestable beet or forage seed crop
- 流属性/单位：Mass / kg
- 数量规则：linked mass from field multiplication output
- 数值来源模式：`foreground_record`
- 适用范围：`product_specific`
原始活动或阶段基准：per kg raw threshed seed.

- 归一化基准：每声明的参考流
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_harvest_mass`

- 数量范围：接收的可收获种子作物 QA 范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：1
  - 上限：8
  - 单位：kg
  - 基准：per kg raw threshed seed
  - 基准类型：`process_output`
  - 证据类型：`reasoned_estimate`

###### 中压电力（`harvest_energy`）

仅在本过程实际使用中压电力时纳入本交换；其他实际载能体各自独立记录。采购作业服务时保留供应商边界，服务中已包含的燃料或电力不得再次计入。
原始活动或阶段基准：per kg raw threshed seed。

- 选定流：中压电力
- 流属性/单位：能量 / kWh
- 数量规则：计量本过程和期间实际使用的中压电力，仅归一到声明参考输出一次；必要时使用有记录的密度、热值或仪表约定换算载能体原始单位。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每声明的参考流
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_energy`

###### 柴油（`harvest_energy_diesel`）

仅在本过程实际使用柴油时纳入本交换；其他实际载能体各自独立记录。采购作业服务时保留供应商边界，服务中已包含的燃料或电力不得再次计入。
原始活动或阶段基准：per kg raw threshed seed。

- 选定流：柴油
- 流属性/单位：质量 / kg
- 数量规则：计量本过程和期间实际使用的柴油，仅归一到声明参考输出一次；必要时使用有记录的密度、热值或仪表约定换算载能体原始单位。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每声明的参考流
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_energy`

##### 废物流

未单独申报必需卡片。

##### 基本流

未单独申报必需卡片。

#### 输出
##### 产品流

###### 脱粒原种子（`raw_threshed_seed`）

脱粒分离后、干燥风选和最终清选前的种子。

- 选定流：Raw threshed beet or forage seed
- 流属性/单位：Mass / kg
- 数量规则：measured mass transferred to conditioning
- 数值来源模式：`foreground_record`
- 适用范围：`product_specific`
原始活动或阶段基准：per harvest lot.

- 归一化基准：每声明的参考流
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_lot_mass_quality`
- 来源：`fao-ilri-forage-seed-1996`

- 数量范围：脱粒原种子 QA 范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：1
  - 上限：1.5
  - 单位：kg
  - 基准：per kg conditioned seed
  - 基准类型：`process_output`
  - 证据类型：`reasoned_estimate`

##### 废物流

###### 收获与脱粒残余物（`harvest_residue`）

离开种子产品路线的颖壳、秸秆和未回收物料按去向报告。

- 选定流：Harvest and threshing residue
- 流属性/单位：Mass / kg
- 数量规则：mass balance difference supported by measured or estimated destination records
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
原始活动或阶段基准：per kg raw threshed seed.

- 归一化基准：每声明的参考流
- 基准类型：`process_output`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_residue_route`

- 数量范围：收获与脱粒残余物 QA 范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：10
  - 单位：kg
  - 基准：per kg raw threshed seed
  - 基准类型：`process_output`
  - 证据类型：`reasoned_estimate`

##### 基本流

未单独申报必需卡片。

### 过程：干燥与初级调理 (`dry_condition`)

#### 输入
##### 产品流

###### 接收的脱粒原种子（`raw_seed_input`）

可追溯的原种子批次进入水分稳定和初级调理。

- 选定流：Raw threshed beet or forage seed
- 流属性/单位：Mass / kg
- 数量规则：linked input mass from threshing
- 数值来源模式：`foreground_record`
- 适用范围：`product_specific`
原始活动或阶段基准：per conditioning batch.

- 归一化基准：每声明的参考流
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_lot_mass_quality`

- 数量范围：接收的脱粒原种子 QA 范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：1
  - 上限：1.5
  - 单位：kg
  - 基准：per kg conditioned seed
  - 基准类型：`process_output`
  - 证据类型：`reasoned_estimate`

###### 中压电力（`conditioning_energy`）

仅在本过程实际使用中压电力时纳入本交换；其他实际载能体各自独立记录。采购作业服务时保留供应商边界，服务中已包含的燃料或电力不得再次计入。
原始活动或阶段基准：per kg conditioned seed。

- 选定流：中压电力
- 流属性/单位：能量 / kWh
- 数量规则：计量本过程和期间实际使用的中压电力，仅归一到声明参考输出一次；必要时使用有记录的密度、热值或仪表约定换算载能体原始单位。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每声明的参考流
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_energy`

###### 柴油（`conditioning_energy_diesel`）

仅在本过程实际使用柴油时纳入本交换；其他实际载能体各自独立记录。采购作业服务时保留供应商边界，服务中已包含的燃料或电力不得再次计入。
原始活动或阶段基准：per kg conditioned seed。

- 选定流：柴油
- 流属性/单位：质量 / kg
- 数量规则：计量本过程和期间实际使用的柴油，仅归一到声明参考输出一次；必要时使用有记录的密度、热值或仪表约定换算载能体原始单位。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每声明的参考流
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_energy`

##### 废物流

未单独申报必需卡片。

##### 基本流

未单独申报必需卡片。

#### 输出
##### 产品流

###### 最终分级前的调理种子（`conditioned_seed`）

水分稳定并完成初级清理的种子转入最终清选和分级。

- 选定流：Conditioned beet or forage seed
- 流属性/单位：Mass / kg
- 数量规则：measured batch output at declared moisture
- 数值来源模式：`foreground_record`
- 适用范围：`product_specific`
原始活动或阶段基准：per conditioning batch.

- 归一化基准：每声明的参考流
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_lot_mass_quality`
- 来源：`fao-ilri-forage-seed-1996`

- 数量范围：最终分级前的调理种子 QA 范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：1
  - 上限：1.3
  - 单位：kg
  - 基准：per kg accepted planting seed
  - 基准类型：`process_output`
  - 证据类型：`reasoned_estimate`

##### 废物流

未单独申报必需卡片。

##### 基本流

未单独申报必需卡片。

### 过程：清选、分级、包装与交付 (`grade_pack`)

#### 输入
##### 产品流

###### 接收的调理种子（`conditioned_seed_input`）

调理后的批次进入最终清选、分离、分级和种子质量放行。

- 选定流：Conditioned beet or forage seed
- 流属性/单位：Mass / kg
- 数量规则：linked mass from conditioning output
- 数值来源模式：`foreground_record`
- 适用范围：`product_specific`
原始活动或阶段基准：per grading lot.

- 归一化基准：每声明的参考流
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_lot_mass_quality`

- 数量范围：接收的调理种子 QA 范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：1
  - 上限：1.4
  - 单位：kg
  - 基准：per kg accepted planting seed
  - 基准类型：`process_output`
  - 证据类型：`reasoned_estimate`

###### 中压电力（`grading_energy`）

仅在本过程实际使用中压电力时纳入本交换；其他实际载能体各自独立记录。采购作业服务时保留供应商边界，服务中已包含的燃料或电力不得再次计入。
原始活动或阶段基准：per kg accepted planting seed。

- 选定流：中压电力
- 流属性/单位：能量 / kWh
- 数量规则：计量本过程和期间实际使用的中压电力，仅归一到声明参考输出一次；必要时使用有记录的密度、热值或仪表约定换算载能体原始单位。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每声明的参考流
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_energy`

###### 柴油（`grading_energy_diesel`）

仅在本过程实际使用柴油时纳入本交换；其他实际载能体各自独立记录。采购作业服务时保留供应商边界，服务中已包含的燃料或电力不得再次计入。
原始活动或阶段基准：per kg accepted planting seed。

- 选定流：柴油
- 流属性/单位：质量 / kg
- 数量规则：计量本过程和期间实际使用的柴油，仅归一到声明参考输出一次；必要时使用有记录的密度、热值或仪表约定换算载能体原始单位。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每声明的参考流
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_energy`

###### 种子包装（`seed_packaging`）

按实际包装记录选择用于保护放行种子批次的袋或其他柔性包装。

- 选定流：Flexible packaging
- 流属性/单位：Mass / kg
- 数量规则：measured packaging mass consumed
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
原始活动或阶段基准：per kg accepted planting seed.

- 归一化基准：每声明的参考流
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_packaging`

- 数量范围：种子包装 QA 范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.20
  - 单位：kg
  - 基准：per kg accepted planting seed
  - 基准类型：`process_output`
  - 证据类型：`reasoned_estimate`

##### 废物流

未单独申报必需卡片。

##### 基本流

未单独申报必需卡片。

#### 输出
##### 产品流

###### 合格的甜菜或饲草播种种子（`accepted_planting_seed`）

在加工者或生产者交付点放行用于播种的清洁、有活力种子；不得用单一物种流代表整个类别。

- 选定流：Beet seeds (excluding sugar beet seeds) and seeds of forage plants
- 流属性/单位：Mass / kg
原始产出计量与核对要求：measured net released mass

- 数量规则：1 千克
- 数值来源模式：`foreground_record`
- 适用范围：`product_specific`
原始活动或阶段基准：per released seed lot.

- 归一化基准：每声明的参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_release_tests`

- 数量范围：合格的甜菜或饲草播种种子 QA 范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：1
  - 上限：1
  - 单位：kg
  - 基准：per 1 kg reference flow
  - 基准类型：`reference_flow`
  - 证据类型：`collected_record`

##### 废物流

###### 种子清选废弃物（`rejected_seed_material`）

作为废物离开的不合格种子、筛下物和杂质从合格种子中排除，并按再利用、回收或处置去向报告。可销售的降级产品在具体前景数据集中作为目标产品单独记录。

- 选定流：Seed cleaning rejects `6bfe90ae-a960-45dd-b1fa-89581c562763`
- 流属性/单位：Mass / kg
- 数量规则：measured reject mass by destination
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
原始活动或阶段基准：per kg accepted planting seed.

- 归一化基准：每声明的参考流
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_reject_route`

- 数量范围：不合格或降级的种子物料 QA 范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.60
  - 单位：kg
  - 基准：per kg accepted planting seed
  - 基准类型：`process_output`
  - 证据类型：`reasoned_estimate`

##### 基本流

未单独申报必需卡片。

## 7. 分配与联产品处理

| rule_id | 适用于 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_mass_balance` | each process | 对每个过程按申报质量和水分基准核对投入、目标产出、水分变化、残余物和不合格物。 |  |
| `allocation_rejects` | cleaning and grading | 不得将不合格批次或筛下物计为合格种子；在应用任何避免产品处理之前记录去向。 | `fao-ilri-forage-seed-1996` |
| `allocation_coproduct` | saleable secondary outputs | 优先使用细分或直接物理归属；仍需分配时披露产出、价格、期间、公式和敏感性。 |  |
| `allocation_period` | perennial production | 按有记录的生产期种子产量年化建植和终止负担，并保留逐年产量和损失记录。 |  |
| `allocation_batches` | shared runs and storage | 采用实测运行时间、质量吞吐量或其他有记录的因果驱动因素分配清洗、换批、检验和储存负担，且不得重复计算。 |  |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_residual_precedence` | 未规定主方法分支的剩余共同负担 | 本 PCR 要求研究作联产品分配决策但未规定主方法的地方，统一执行以下优先顺序；已明确规定的类别专属主方法保持有效。先直接归属可分开的产出专属作业。剩余共同负担 B 只有在实测作业或生物服务记录证明驱动量 d_i 代表因果消耗时，才采用该物理驱动。产品可称量、有价值或等级较低本身均不构成因果依据，不能在面积、时间、质量和收入间任意切换。可比等级接受相同共同搬运服务时，仅在服务需求、状态及水分基准可比且有据时采用实测处理质量。份额 a_i=d_i/sum(d_j)，B_i=B*a_i。该共同作业没有可辩护的因果物理驱动时，采用同交接点、同期间经济份额 a_i=(q_i*p_i)/sum(q_j*p_j)，纳入全部独立预期产出，匹配数量/价格单位、币种和代表性价格，使用产出专属下游加工之前的价值。缺价格或分母证据使分配结果不完整，不能把产品价格记零或改称单一产出系统。披露合计为一的份额和重要替代方法敏感性；敏感性方法不是可任意替换的主结果。废物、留存残余和内部转移不获得联产品份额，其应归属的生产/处理负担仍保留在产出可售产品的路线中。未分配物理数量和质量平衡另行保留。本分支不自动给予替代信用；单独界定的替代情景须保留总清单及实际被替代功能证据。 | `ghg-protocol-product-standard-2011` |

## 8. 前景数据采集、计算与质量规则

清单完整性：具名条件卡是单项交换示例，不是穷尽配方，也不要求使用这些产品。完成前景数据包前，逐项列出所有实际种植材料、养分产品、作物保护制剂、资产材料、作业服务、载能体、包装材料、废物流及适用的基本物质，使用明确的物理身份、状态、原始属性/单位、来源或接收区室及实测或按方法计算的数量。身份或数量缺失属于完整性缺口，不得假定为零。保留实际批次和阶段基准；不得将中间转移累加为额外最终产出，也不得重复计入采购服务已包含的负荷。

先按各采集协议保留原始场址、批次、周期及阶段数量与分母，并完成库存、损失、含水率和共产品归属核对；随后按实际归属的验收交付产品量归一化：归一化交换量 = 归属原始交换量 × 声明参考数量 / 同一边界和计量基准的验收产品量。多年生建植和共享作业先执行各自分摊规则，不得把内部转移数量设为最终参考数量。每声明的参考流指第 3 节的数量、单位和产品状态；数据包必须声明实际路线和门。


### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_parent_seed` | `field_multiplication` | `parent seed` | purchase and sowing record | species, cultivar, class, supplier, mass, field, date | invoice and calibrated scale；原始汇总与分配：sum accepted parent seed by field lot | kg | each sowing event | complete crop cycle | each field lot | 每声明的参考流 | invoice, lot label, scale check |
| `cp_field_inputs` | `field_multiplication` | `nutrients and amendments` | application log | product, nutrient composition, mass, date, field | invoice plus application record；原始汇总与分配：sum by actual product and retain composition | kg product | each application | complete crop cycle | each field lot | 每声明的参考流 | invoice and application log |
| `cp_irrigation` | `field_multiplication` | `irrigation water` | meter or pumping record | volume, source, field, date, runtime | meter preferred; pump calculation documented；原始汇总与分配：sum delivered water | m3 | each event | complete crop cycle | each field lot | 每声明的参考流 | meter calibration or pump specification |
| `cp_energy` | `all processes` | `energy` | fuel, meter and equipment log | carrier, quantity, unit, run, process, lot | invoice, meter and equipment log；原始汇总与分配：convert carriers and allocate causally to lot | MJ or kWh | each run or reporting interval | complete lot route | each field and facility | 每声明的参考流 | invoice, meter reading, run log |
| `cp_harvest_mass` | `field_multiplication; harvest_thresh` | `crop and raw seed mass` | harvest ticket | field, lot, date, gross mass, tare, moisture | calibrated scale；原始汇总与分配：net mass by linked lot | kg | each load | complete harvest | each field lot | 每声明的参考流 | weigh ticket and scale check |
| `cp_lot_mass_quality` | `harvest_thresh; dry_condition; grade_pack` | `intermediate seed mass and moisture` | batch record | lot, input mass, output mass, moisture, timestamp | calibrated scale and moisture test；原始汇总与分配：retain stage-specific mass; no cross-lot substitution | kg; % | each batch | complete processing route | each lot and process | 每声明的参考流 | batch sheet, calibration, sample id |
| `cp_packaging` | `grade_pack` | `packaging` | packaging issue record | package type, net package mass, count, lot | stock issue plus weighing；原始汇总与分配：sum packaging consumed net of documented returns | kg | each lot | complete released lot | each packaging line and lot | 每声明的参考流 | stock record and package specification |
| `cp_release_tests` | `grade_pack` | `accepted seed` | release and laboratory record | species, cultivar, class, purity, germination or viability, moisture, treatment, certification, net mass | lot sampling and recognized seed test method；原始汇总与分配：accept only mass covered by release decision | kg; % | each released lot | release date | each processing lot | 每声明的参考流 | certificate, laboratory result, sample chain |
| `cp_residue_route` | `harvest_thresh` | `residues` | destination record | type, mass, destination, date, lot | scale or documented mass balance；原始汇总与分配：sum by destination | kg | each removal | complete harvest lot | each field/facility | 每声明的参考流 | ticket, receiver record or mass balance |
| `cp_reject_route` | `grade_pack` | `rejects and downgraded material` | sorting and destination record | reason, grade, mass, destination, lot | scale and dispatch record；原始汇总与分配：sum by reason and destination | kg | each lot | complete grading lot | each line and lot | 每声明的参考流 | grading report and destination evidence |
| `cp_phase1_environment_coverage` | field_multiplication | 按实际节点的管理环境覆盖 | 场址活动方法台账 | 实际生产节点；土壤/介质路线；气候土壤；肥料产品量及组成；残体去向及氮；相关矿化/有机土/排泄活动；方法层级方程版本；路径因子及单位；石灰尿素；实际燃料；物质/环境；供应覆盖; 场址及实际管理节点；面积；有日期占用区间；共同使用者；建植/未产期历史；实际前后土地类别及转化日期/面积；碳核算覆盖；上游土地覆盖 | 按实际负责生产节点及匹配批次/期间采集原始记录，保留来源、方法适用性和不确定性。与现有协议及供应覆盖核对，不新增重复事件；不适用须明示有据，缺少证据属于缺口。 | 适用的原生活动单位、kg N或物质、面积/时间 | 事件及年度/批次核对 | 匹配生产/队列期间 | 全部实际管理生产节点 | 执行适用覆盖核算后最终归一化一次 | 原始记录、方法工作表及适用性证据 |

### 计算规则

| rule_id | 适用于 | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_normalize` | all inventory rows | amount per reference kg = lot amount / net accepted seed mass | lot amount; accepted net mass | normalized amount per kg |  |
| `calc_water` | irrigation | delivered water = metered volume, or pump rate × verified runtime when no meter exists | meter or pump rate and runtime | m3 delivered water |  |
| `calc_energy` | energy inputs | 将各实测载能体换算为声明能源单位，再按因果批次驱动分配。 | carrier quantity; conversion; lot driver | MJ or kWh per kg |  |
| `calc_loss` | each process | 损失或残体＝期初进料＋添加量－预期产出－期末库存，并按含水率核对。 | mass and moisture records | loss/residue mass |  |
| `calc_period` | perennial field | 年化建植负担＝建植投入总量×本年度种子产量÷有据生产期间种子产量。 | establishment inputs; annual yields | current-year attributed burden |  |

### 环境覆盖计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_managed_environment_coverage` | 实际管理生产节点 | 针对实际自主管理生产节点，逐项记录土壤直接 N2O、挥发/沉降间接 N2O、淋溶/径流间接 N2O、NH3/NOx 与养分损失，以及实际施石灰/尿素 CO2 的适用性。主核算依次采用有代表性的路径实测、经验证且适用于作物/土壤/管理的场址或国家方法；否则 N2O 与石灰/尿素 CO2 采用适用的2006 IPCC及2019修订管理土壤方程，按气候和投入类别选因子。保留确切版本、方程、层级、活动量及因子单位和气候/管理适用性，不规定通用剂量或因子。无土/设施路线须采用适用于实际介质的方法，不强套土壤因子。化肥、有机投入、残体、实际相关矿化/有机土和排泄物路径使用同一田块期间氮台账；路径不适用须证明，缺数不能填零。直接及各间接分量分别计算，逐项只分配到匹配的现有或新增具体卡一次，不将总量与组成重复相加。N2O-N 乘44/28转分子 N2O 一次。NH3、NOx及养分/农药损失采用适用实测或有据物质/去向模型；总N/P或未解释平衡差不等于某化合物释放。保留实际接收环境及分子、元素或报告口径，间接形成不能在来源台账再扣同一氮。实际本地燃烧另按燃料特定的燃烧方法记录；外购电、热和服务承接上游覆盖一次。有据释放按具体身份建卡，复用现有匹配卡，采用已核实UUID或明确未决身份。适用方法、活动量、因子或身份缺失会阻止完整性，不构成有据零值；原始活动/释放总量归属后按匹配合格参考产出归一化一次。 | cp_phase1_environment_coverage | 按匹配最终参考量的应归属原生环境数量 | `review-ipcc-soils-2019` |
| `calc_managed_land_coverage` | 实际管理生产节点 | 逐实际自主管理生产场址采集占用面积及有日期的占用区间，包括应归属的建植/未产期与生产期。占用量为面积乘实际时长，明确换为所选面积时间单位（1 ha=10,000 m2，时间按年）；只有每作物周期公顷数而无时长不能得到面积时间。建立、管理区间重叠时划分区间或取并集，同一面积时间只计一次，实际共同使用者份额合计为一。土地转化按声明土地利用方法，另记实际前/后土地类别、事件面积和日期；转化使用面积单位，不能与占用量相加。种植、持续占用或前土地资料缺失不能证明发生转化，也不能证明零转化。适用时保留历史事件归属及碳库/排放方法覆盖，不编造转化或通用固碳信用。分别建立兼容基本流身份，采用已核实UUID或明确未决身份，归属一次后按匹配最终参考产出归一化。外购已完成的生物投入承接兼容上游土地覆盖一次，不在本地重复。适用土地身份、面积、时长或前状态证据缺失属于完整性缺口；有据无转化可记录为不适用。 | cp_phase1_environment_coverage | 按匹配最终参考量的应归属原生环境数量 |  |

### 数据质量要求

| requirement_id | 适用于 | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | reference lot | 明确物种、品种、种子等级及 CPC 范围；物种特定 UUID 不代表其他物种或完整类别。 | lot label and identity review |
| `dq_mass_balance` | each process | Mass balance shall reconcile within a disclosed tolerance and moisture basis. | weighing and moisture records |
| `dq_completeness` | foreground route | 采集至少95%的记录运营日及全部放行/拒收批次，披露估算缺口。 | coverage calculation |
| `dq_temporal` | crop and processing cycle | 采用覆盖完整繁种及加工周期的数据，多年生群落保留年龄及逐年产量。 | field and batch dates |
| `dq_flow_binding` | all cards | 分别核验每种实际交换的具体流 UUID、物理状态、流属性和单位；未确认时明确保留未解析身份。 | binding review record |

## 9. 验证规则

| rule_id | 适用于 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validate_scope` | reference product | 拒绝糖用甜菜种子、饲用生物量、营养繁殖材料以及未申报物种或品种的批次。 |  |
| `validate_reference` | reference flow | 要求恰好 1 kg 净合格种子及全部质量限定信息；在核实类别兼容流之前保持类别 UUID 为空。 |  |
| `validate_lot_link` | all processes | 要求田间、收获、调理和放行批次关联不中断。 |  |
| `validate_rejects` | grade_pack | 合格产出加按去向区分的不合格物应与调理种子投入和记录的库存变化核对。 |  |
| `validate_period` | perennial route | 要求生产期证据，并防止建植负担被重复计入。 |  |
| `validate_coproduct` | secondary outputs | 在抵扣或分配前要求明确目标产出状态和归属方法。 |  |
| `validate_nutrients` | field_multiplication | 分别核验每种实际交换的具体流 UUID、物理状态、流属性和单位；未确认时明确保留未解析身份。 |  |
| `validate_ranges` | all flow cards | 对每个已提供的数量筛查核对具体交换、上下界、相容单位和分母、基准、适用性、证据类型及外部来源，中英文和投影保持等义。临时推理范围仅为非强制复核提示，不是默认数量、允许损失或完整性证据。没有相容数量界限依据时明确报告无法进行范围筛查，复核计量、匹配组分平衡和不确定性；不得为满足检查虚构范围。最终参照归一化保持精确，并非实证产率。实际交换数量、采集协议及相容单位/换算证据独立于范围要求。 |  |
| `validate_binding` | all flows | 分别核验每种实际交换的具体流 UUID、物理状态、流属性和单位；未确认时明确保留未解析身份。 |  |

## 10. 发布数据集档案

| 字段 | 值 |
| --- | --- |
| dataset_role | 前景产品系统数据包和过程投影 |
| downstream_use | `secondary_dataset`; `background_dataset` |
| allowed_use | 与研究中的申报物种/品种、路线、地理、种子等级和交付点兼容 |
| excluded_use | 作为糖用甜菜种子、饲用生物量、另一种种子或无限定类别平均值的代理 |
| required_metadata | 物种/品种；一年生/多年生路线；亲本种子等级；田间和加工地理；作物年份；纯度；发芽率/活力；水分；处理；认证；批次和交付点 |
| required_quality_disclosure | 前景覆盖率；估算缺口；超范围情况；未解析流身份；分配和不合格物去向 |
| update_trigger | 新的经审查物种路线证据、已核实类别流 UUID、具体流身份核验|

## 11. 数据来源

| 来源 id | 类型 | 参考 | 用途 |
| --- | --- | --- | --- |
| `fao-seed-production-1993` | `official_guidance` | FAO, Quality Declared Seed / seed production guidance, AGRIS record https://agris.fao.org/search/zh/records/672364348aa2fad1ce470e8a | 田间繁殖、收获、调理和质量控制路线 |
| `fao-ilri-forage-seed-1996` | `handbook` | FAO/ILRI, *Forage Seed Production*, https://www.fao.org/4/x3996e/x3996e41.htm | 收获、脱粒、干燥、清选、储存、不合格物和批次质量控制 |
| `ghg-protocol-product-standard-2011` | standard | WRI/WBCSD, Product Life Cycle Accounting and Reporting Standard (2011), Chapter 9, https://ghgprotocol.org/sites/default/files/standards/Product-Life-Cycle-Accounting-Reporting-Standard_041613.pdf | 一般分配优先顺序及可比交接点经济价值基准。适用条件和明确的剩余分支是本 PCR 的方法约定；该来源不规定本产品因果系数、价格或产出数量。 |
| `review-ipcc-soils-2019` | official_guidance | IPCC 2019 Refinement, Volume 4, Chapter 11, https://www.ipcc-nggip.iges.or.jp/public/2019rf/pdf/4_Volume4/19R_V4_Ch11_Soils_N2O_CO2.pdf | 管理土壤直接/间接N2O及石灰/尿素CO2方法语境；因子须匹配实际适用性及场址活动，不是产品默认值。 |
