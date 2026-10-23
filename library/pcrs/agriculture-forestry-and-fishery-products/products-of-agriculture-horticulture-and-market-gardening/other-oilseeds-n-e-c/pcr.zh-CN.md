---
schema_version: 1
pcr_id: pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.other-oilseeds-n-e-c
language: zh-CN
status: candidate
content_maturity: authored_methodology
translation_status: aligned
sync_with: pcr.en-US.md
---
# 其他未另分类油籽

## 1. 范围与适用性
本 PCR 规定 CPC 01449 中具名剩余油籽物种从种植到声明门点的前景数据规则。每个数据集只能声明一个物种、用途、水分基础、等级和门点。

## 2. 产品类别身份

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.other-oilseeds-n-e-c |
| classification_system | CPC |
| classification_version | 3.0 |
| classification_code | 01449 |
| classification_title | 其他未另分类油籽 |
| included_products | CPC 3.0 01449 中一个具名剩余油籽物种，例如 crambe 籽或火麻籽，以收获或整理后籽粒交付；蓖麻籽另属 CPC 3.0 01447，不纳入本 PCR。 |
| excluded_products | 具有单独 CPC 叶节点的油籽；专门用于播种并认证的种子；提取油；油粕；食品和制成品。 |
| representative_product | 农场门或整理门点交付的一个具名剩余油籽物种的整理后籽粒。 |
| production_route | 物种特定的受控种植、收获、籽粒脱出、可选干燥清理、分级、可选包装储存。 |
| market_state | 声明物种、用途、水分、纯度或等级及门点的收获或整理后油籽。 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| what | 在声明农场门或整理门点提供一种已声明 CPC 01449 油籽。 |
| how_much | 声明水分下 1 kg 净油籽质量。 |
| how_well | 必须声明具名物种、用途、水分基础、等级或纯度、路线和门点。 |
| how_long_or_cycle | 一个作物周期及关联整理批次，按合格产品归一化。 |
| reference_flow_link | `reference_product_at_declared_handoff` |

| 字段 | 值 |
| --- | --- |
| reference_amount | 1 |
| reference_product_flow | 其他油籽（未另说明） `b547a596-eefe-42d3-82b9-78cbbb445eb6` |
| reference_flow_property | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` |
| reference_unit_group | 质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| reference_unit | kg |
| required_qualifiers | 一个具名物种；用途；水分基础；等级或纯度；生产与整理路线；声明门点 |

唯一参考产出为 `declared_reference_handoff` 的 `reference_product_at_declared_handoff`，它仅对既有声明交接点的实际合格产品作必需计量。`grading_packaging_and_storage` 的实体活动仍为条件性活动；省略该活动不取消参考产出。选择实际最后纳入的产品交接并记录过程/产出 id，物种、物理状态、等级、含水率基准及交接点必须与第3节一致。原 `reference_product` 行仅在其作业实际发生时记录该作业实测产出，不是另一笔最终销售。旁路不新增加工、得率假设或负担，也不改变产品边界。

## 4. 计量与单位规则
| rule_id | 适用对象 | 必需属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| net_mass | 参考产品及质量流 | 质量 | kg | 使用净质量并保留毛重、皮重和秤证据。 |
| moisture | 籽粒和残余物 | 质量及水分 | kg 及湿基或干基百分数 | 声明水分约定，仅以实测水分换算。 |
| field_normalization | 田间投入 | 面积及质量 | ha 及 kg | 保留田块记录，再以同一作物周期合格产品归一化。 |
| energy | 机械、干燥及储存 | 能量、体积或质量 | kWh、MJ、L 或 kg | 换算前保留原载体及单位。 |

## 5. 系统边界

边界始于进入作物周期的种植材料及前景控制的整地，包括受控种植、收获、物种特定脱粒或籽粒脱出、可选干燥通风清理、分级、前景包装、储存和装车至声明门点。排除播种种子认证、榨油、精炼、油粕制造、下游运输和使用。替代生产或整理技术必须单独声明路线；未启用的条件过程不得含交换。

### 边界抽象

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 进入声明作物周期的种植材料 |
| starting_condition_role | 一个具名剩余油籽物种的前景受控生物生产起点。 |
| product_classification_scope | 仅 CPC 01449；具有单独分类的油籽不在范围内。 |
| recursive_input_rule | 外购 CPC 01449 油籽作为投入时，仍须按物种、状态和供应商数据集单独记录。 |
| upstream_dataset_requirement | 种植材料和外购投入应链接供应商数据集，或披露来源、地域和质量。 |
| disclosure | 物种、已知品种、用途、田间模式、收获与脱出技术、水分、等级、门点、联产品、弃物、返工及共享资产归属。 |

## 6. 过程清单结构

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| managed_production | 受控种植生产 | required | 始终纳入。 | 种植已声明的具名剩余油籽物种并记录田间作业。 | 已声明露地或设施系统中的可收获作物。 |
| harvest_and_extraction | 收获与籽粒脱出 | required | 始终纳入；脱粒、开荚或脱果壳依物种路线。 | 收集作物并将油籽籽粒与田间生物质分离。 | 收获的含籽物料总量。 |
| drying_and_conditioning | 干燥与初级整理 | conditional | 农场门交付前发生干燥、通风、清理或稳定化时纳入。 | 达到声明的安全水分并去除杂质。 | 声明水分条件下的整理后油籽质量。 |
| grading_packaging_and_storage | 分级、包装与储存 | conditional | 发生前景控制的分级、装袋、散装储存或装车时纳入。 | 在声明门点交付一个明确等级和用途路线。 | 声明门点的净参考产品。 |
| `declared_reference_handoff` | 声明交接点合格产品计量 | required | 每条实际选定路线，包括条件处理/包装/储存的旁路 | 仅计量及核对，不新增实体加工 | 1 kg 同一声明交接点净合格产品 |


### 过程：受控种植生产 (`managed_production`)

#### 输入
##### 产品流

###### 种植材料 (`planting_material`)

仅在实际种植 Crambe abyssinica 时使用本卡；其他物种须分别建立种植材料交换并核实身份。不得把收获商品的流身份充当播种种子。

- 选定流: 播种用 Crambe abyssinica 种子
- 流属性 / 单位: kg
- 数量规则: 计量实际播种的 Crambe abyssinica 种子质量。
- 数值来源模式: 前景记录（`foreground_record`）
- 适用范围: site_specific（`site_specific`）
原始活动或阶段基准：per crop cycle, normalized by accepted oilseed output。

- 归一化基准：每声明的参考流
- 基准类型: `crop_cycle`
- 证据类型: collected_record（`collected_record`）
- 采集协议: `cp_field`
- 数量范围: 暂定筛选区间；实际前景记录决定数值
  - 范围角色: QA guardrail（`qa_guardrail`）
  - 下限: 0
  - 上限: 0.1
  - 单位: kg/kg product
  - 基础: per crop cycle, normalized by accepted oilseed output
  - 基准类型: `crop_cycle`
  - 证据类型: Reasoned estimate（`reasoned_estimate`）

###### 尿素肥料投入（`nutrient_products`）

仅当声明的过程实际使用尿素肥料时纳入此条件卡。其他实际产品或能源须各自建立单一交换，记录独立身份和实测数量；不得从本示例推定其必然使用。

- 选定流：尿素肥料
- 数量规则：记录该过程和期间实际使用的尿素肥料数量；只有路线记录证明未使用时，才填零或不适用。
- 流属性/单位：质量 / kg 产品
- 数值来源模式: 前景记录（`foreground_record`）
- 适用范围: site_specific（`site_specific`）
原始活动或阶段基准：per crop cycle, normalized by accepted oilseed output。

- 归一化基准：每声明的参考流
- 基准类型: `crop_cycle`
- 证据类型: collected_record（`collected_record`）
- 采集协议: `cp_field`

###### 磷酸一铵肥料投入（`nutrient_products_monoammonium_phosphate`）

仅当声明的过程实际使用磷酸一铵肥料时纳入此条件卡。其他实际产品或能源须各自建立单一交换，记录独立身份和实测数量；不得从本示例推定其必然使用。

- 选定流：磷酸一铵肥料
- 数量规则：记录该过程和期间实际使用的磷酸一铵肥料数量；只有路线记录证明未使用时，才填零或不适用。
- 流属性/单位：质量 / kg 产品
- 数值来源模式: 前景记录（`foreground_record`）
- 适用范围: site_specific（`site_specific`）
原始活动或阶段基准：per crop cycle, normalized by accepted oilseed output。

- 归一化基准：每声明的参考流
- 基准类型: `crop_cycle`
- 证据类型: collected_record（`collected_record`）
- 采集协议: `cp_field`

###### 氯化钾肥料投入（`nutrient_products_potassium_chloride`）

仅当声明的过程实际使用氯化钾肥料时纳入此条件卡。其他实际产品或能源须各自建立单一交换，记录独立身份和实测数量；不得从本示例推定其必然使用。

- 选定流：氯化钾肥料
- 数量规则：记录该过程和期间实际使用的氯化钾肥料数量；只有路线记录证明未使用时，才填零或不适用。
- 流属性/单位：质量 / kg 产品
- 数值来源模式: 前景记录（`foreground_record`）
- 适用范围: site_specific（`site_specific`）
原始活动或阶段基准：per crop cycle, normalized by accepted oilseed output。

- 归一化基准：每声明的参考流
- 基准类型: `crop_cycle`
- 证据类型: collected_record（`collected_record`）
- 采集协议: `cp_field`

###### 施用的牛粪肥投入（`nutrient_products_cattle_manure`）

仅当声明的过程实际使用施用的牛粪肥时纳入此条件卡。其他实际产品或能源须各自建立单一交换，记录独立身份和实测数量；不得从本示例推定其必然使用。

- 选定流：施用的牛粪肥
- 数量规则：记录该过程和期间实际使用的施用的牛粪肥数量；只有路线记录证明未使用时，才填零或不适用。
- 流属性/单位：质量 / kg 产品
- 数值来源模式: 前景记录（`foreground_record`）
- 适用范围: site_specific（`site_specific`）
原始活动或阶段基准：per crop cycle, normalized by accepted oilseed output。

- 归一化基准：每声明的参考流
- 基准类型: `crop_cycle`
- 证据类型: collected_record（`collected_record`）
- 采集协议: `cp_field`

###### 农业石灰石投入（`nutrient_products_agricultural_limestone`）

仅当声明的过程实际使用农业石灰石时纳入此条件卡。其他实际产品或能源须各自建立单一交换，记录独立身份和实测数量；不得从本示例推定其必然使用。

- 选定流：农业石灰石
- 数量规则：记录该过程和期间实际使用的农业石灰石数量；只有路线记录证明未使用时，才填零或不适用。
- 流属性/单位：质量 / kg 产品
- 数值来源模式: 前景记录（`foreground_record`）
- 适用范围: site_specific（`site_specific`）
原始活动或阶段基准：per crop cycle, normalized by accepted oilseed output。

- 归一化基准：每声明的参考流
- 基准类型: `crop_cycle`
- 证据类型: collected_record（`collected_record`）
- 采集协议: `cp_field`

###### 地下水灌溉用水投入（`irrigation_water`）

条件性单物质交换：仅当过程记录证明使用地下水灌溉用水时纳入。其他实际能源、水源或材料须分别建立交换，独立记录数量及已核实或明确待核实的身份。本示例不代表必然使用。

- 选定流：地下水灌溉用水
- 流属性 / 单位: 体积 / m3
- 数量规则: 计量本过程及期间实际使用的地下水灌溉用水数量。
- 数值来源模式: 前景记录（`foreground_record`）
- 适用范围: route_specific（`route_specific`）
原始活动或阶段基准：per crop cycle, normalized by accepted oilseed output。

- 归一化基准：每声明的参考流
- 基准类型: `crop_cycle`
- 证据类型: collected_record（`collected_record`）
- 采集协议: `cp_field`

作物保护必需记录：完成前景数据包前，逐项列明实际施用的每一种制剂，保留商品名、有效成分、盐或化学形态、浓度、必要时的密度、施用量、日期和处理面积。每项交换选用一个物理上明确的产品身份；有效成分释放按物质及接收区室另行计算。缺少配方身份属于完整性缺口，不得用通用农药、虚构示例或假定为零替代。

###### 柴油投入（`field_energy`）

条件性单物质交换：仅当过程记录证明使用柴油时纳入。其他实际能源、水源或材料须分别建立交换，独立记录数量及已核实或明确待核实的身份。本示例不代表必然使用。

- 选定流：柴油
- 流属性 / 单位: 质量 / kg
- 数量规则: 计量本过程及期间实际使用的柴油数量。
- 数值来源模式: 前景记录（`foreground_record`）
- 适用范围: site_specific（`site_specific`）
原始活动或阶段基准：per crop cycle, normalized by accepted oilseed output。

- 归一化基准：每声明的参考流
- 基准类型: `crop_cycle`
- 证据类型: collected_record（`collected_record`）
- 采集协议: `cp_energy`

###### 中压电力投入（`field_energy_electricity`）

条件性单物质交换：仅当过程记录证明使用中压电力时纳入。其他实际能源、水源或材料须分别建立交换，独立记录数量及已核实或明确待核实的身份。本示例不代表必然使用。

- 选定流：中压电力
- 流属性 / 单位: 能量 / kWh
- 数量规则: 计量本过程及期间实际使用的中压电力数量。
- 数值来源模式: 前景记录（`foreground_record`）
- 适用范围: site_specific（`site_specific`）
原始活动或阶段基准：per crop cycle, normalized by accepted oilseed output。

- 归一化基准：每声明的参考流
- 基准类型: `crop_cycle`
- 证据类型: collected_record（`collected_record`）
- 采集协议: `cp_energy`

##### 废物流

无。

##### 基本流

无。

#### 输出
##### 产品流

###### 待采收的油料作物，声明物种（`standing_crop`）

本卡记录该过程角色的真实物理流；仅在路线启用时按声明批次或作物周期建模。

- 选定流: 待采收的油料作物，声明物种
- 流属性 / 单位: 质量 / kg
- 数量规则：根据实测地块/作物记录计算交付收获的可采收作物质量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围: site_specific（`site_specific`）
原始活动或阶段基准：harvestable mass at field maturity。

- 归一化基准：每声明的参考流
- 基准类型: `process_output`
- 证据类型: calculated_from_collection（`calculated_from_collection`）
- 采集协议: `cp_yield`
- 数量范围: 暂定筛选区间；实际前景记录决定数值
  - 范围角色: QA guardrail（`qa_guardrail`）
  - 下限: 1
  - 上限: 5
  - 单位: kg/kg accepted product
  - 基础: harvestable mass at field maturity
  - 基准类型: `process_output`
  - 证据类型: Reasoned estimate（`reasoned_estimate`）

##### 废物流

无。

##### 基本流

###### 土壤直接氧化亚氮 (`soil_n2o_emission`)

本卡记录该过程角色的真实物理流；仅在路线启用时按声明批次或作物周期建模。

- 选定流: 按声明物种、状态、介质和去向选择具体流
- 流属性 / 单位: kg N2O
- 数量规则：根据记录的实际氮输入，按声明的地区适用方法计算，不从筛选范围填入排放量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围: route_specific（`route_specific`）
原始活动或阶段基准：per crop cycle, normalized by accepted oilseed output。

- 归一化基准：每声明的参考流
- 基准类型: `crop_cycle`
- 证据类型: calculated_from_collection（`calculated_from_collection`）
- 采集协议: `cp_emissions`
- 数量范围: 暂定筛选区间；实际前景记录决定数值
  - 范围角色: QA guardrail（`qa_guardrail`）
  - 下限: 0
  - 上限: 0.02
  - 单位: kg N2O/kg product
  - 基础: per crop cycle, normalized by accepted oilseed output
  - 基准类型: `crop_cycle`
  - 证据类型: Reasoned estimate（`reasoned_estimate`）

###### 进入水体的硝酸盐损失 (`nitrate_loss_to_water`)

本卡记录该过程角色的真实物理流；仅在路线启用时按声明批次或作物周期建模。

- 选定流: 按声明物种、状态、介质和去向选择具体流
- 流属性/单位: Mass / kg NO3-
- 数量规则：仅在声明适用方法、活动数据和实际接收水环境有据时计算硝酸盐排放。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围: route_specific（`route_specific`）
原始活动或阶段基准：per crop cycle, normalized by accepted oilseed output。

- 归一化基准：每声明的参考流
- 基准类型: `crop_cycle`
- 证据类型: calculated_from_collection（`calculated_from_collection`）
- 采集协议: `cp_emissions`
- 数量范围: 暂定筛选区间；实际前景记录决定数值
  - 范围角色: QA guardrail（`qa_guardrail`）
  - 下限: 0
  - 上限: 0.2
  - 单位: kg nitrate-N/kg product
  - 基础: per crop cycle, normalized by accepted oilseed output
  - 基准类型: `crop_cycle`
  - 证据类型: Reasoned estimate（`reasoned_estimate`）

最终交换质量为 kg NO3-；按 N 计的活动量、因子和筛查保留在独立台账。仅对归属于该化学物种的 N 质量乘 62/14，换算一次后按合格参考产出归一化一次。不得将养分总平衡、土壤留存或不明差额当作该排放。各实际接收环境分别记录；气体体积记录须有实测温压及有据质量换算，不能与化合物质量互换。

### 过程：收获与籽粒脱出 (`harvest_and_extraction`)

#### 输入
##### 产品流

###### 待采收的油料作物，声明物种（`standing_crop_input`）

本卡记录该过程角色的真实物理流；仅在路线启用时按声明批次或作物周期建模。

- 选定流: 待采收的油料作物，声明物种
- 流属性 / 单位: 质量 / kg
- 数量规则：转移来自受管理生产的同批可采收作物实测/有据计算质量，与上游输出配对。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围: site_specific（`site_specific`）
原始活动或阶段基准：gross harvestable crop entering harvest。

- 归一化基准：每声明的参考流
- 基准类型: `process_output`
- 证据类型: calculated_from_collection（`calculated_from_collection`）
- 采集协议: `cp_yield`
- 数量范围: 暂定筛选区间；实际前景记录决定数值
  - 范围角色: QA guardrail（`qa_guardrail`）
  - 下限: 1
  - 上限: 5
  - 单位: kg/kg accepted product
  - 基础: gross harvestable crop entering harvest
  - 基准类型: `process_output`
  - 证据类型: Reasoned estimate（`reasoned_estimate`）

###### 柴油投入（`harvest_energy`）

条件性单物质交换：仅当过程记录证明使用柴油时纳入。其他实际能源、水源或材料须分别建立交换，独立记录数量及已核实或明确待核实的身份。本示例不代表必然使用。

- 选定流：柴油
- 流属性 / 单位: 质量 / kg
- 数量规则: 计量本过程及期间实际使用的柴油数量。
- 数值来源模式: 前景记录（`foreground_record`）
- 适用范围: technology_specific（`technology_specific`）
原始活动或阶段基准：per harvested lot。

- 归一化基准：每声明的参考流
- 基准类型: `crop_cycle`
- 证据类型: collected_record（`collected_record`）
- 采集协议: `cp_energy`

###### 中压电力投入（`harvest_energy_electricity`）

条件性单物质交换：仅当过程记录证明使用中压电力时纳入。其他实际能源、水源或材料须分别建立交换，独立记录数量及已核实或明确待核实的身份。本示例不代表必然使用。

- 选定流：中压电力
- 流属性 / 单位: 能量 / kWh
- 数量规则: 计量本过程及期间实际使用的中压电力数量。
- 数值来源模式: 前景记录（`foreground_record`）
- 适用范围: technology_specific（`technology_specific`）
原始活动或阶段基准：per harvested lot。

- 归一化基准：每声明的参考流
- 基准类型: `crop_cycle`
- 证据类型: collected_record（`collected_record`）
- 采集协议: `cp_energy`

##### 废物流

无。

##### 基本流

无。

#### 输出
##### 产品流

###### 脱出后的原始油籽 (`raw_oilseed_grain`)

本卡记录该过程角色的真实物理流；仅在路线启用时按声明批次或作物周期建模。

- 选定流: 其他未另分类油籽
- 流属性 / 单位: kg
- 数量规则：计量按实际物种提取后、整理前的原始籽粒质量。
- 数值来源模式: 前景记录（`foreground_record`）
- 适用范围: product_specific（`product_specific`）
原始活动或阶段基准：gross raw seed at measured moisture。

- 归一化基准：每声明的参考流
- 基准类型: `process_output`
- 证据类型: collected_record（`collected_record`）
- 采集协议: `cp_harvest`
- 数量范围: 暂定筛选区间；实际前景记录决定数值
  - 范围角色: QA guardrail（`qa_guardrail`）
  - 下限: 1
  - 上限: 3
  - 单位: kg/kg accepted product
  - 基础: gross raw seed at measured moisture
  - 基准类型: `process_output`
  - 证据类型: Reasoned estimate（`reasoned_estimate`）

该行的实际中间状态或联产品等级须独立核实 UUID，不使用参考输出 UUID 代替。

##### 废物流

###### 收获与脱出残余物 (`harvest_residue`)

仅当 Crambe abyssinica 茎秆作为废物离开过程时使用；出售的茎秆须另列产品输出并决定负担分配。其他残余物须各自确定物质和去向。

- 选定流: 废弃的 Crambe abyssinica 茎秆
- 流属性 / 单位: kg
- 数量规则: 计量送往已声明废物处理路线的 Crambe abyssinica 茎秆质量。
- 数值来源模式: 前景记录（`foreground_record`）
- 适用范围: route_specific（`route_specific`）
原始活动或阶段基准：per harvested lot。

- 归一化基准：每声明的参考流
- 基准类型: `process_output`
- 证据类型: collected_record（`collected_record`）
- 采集协议: `cp_harvest`
- 数量范围: 暂定筛选区间；实际前景记录决定数值
  - 范围角色: QA guardrail（`qa_guardrail`）
  - 下限: 0
  - 上限: 4
  - 单位: kg/kg raw seed
  - 基础: per harvested lot
  - 基准类型: `process_output`
  - 证据类型: Reasoned estimate（`reasoned_estimate`）

按物种、批次和去向在收获质量平衡中计量田间及操作损失。留在田间的未收集物料属于已计量损失或土地管理投入，不是可售产品，也不是通用天工废物流。只有具体物质实际跨越过程边界时才建立单独的原子交换。

##### 基本流

无。

### 过程：干燥与初级整理 (`drying_and_conditioning`)

#### 输入
##### 产品流

###### 原始油籽投入 (`raw_oilseed_input`)

本卡记录该过程角色的真实物理流；仅在路线启用时按声明批次或作物周期建模。

- 选定流: 其他油籽（未另说明） `b547a596-eefe-42d3-82b9-78cbbb445eb6`
- 流属性 / 单位: kg
- 数量规则：按进入时水分状态转移实测原始种子质量。
- 数值来源模式: 前景记录（`foreground_record`）
- 适用范围: product_specific（`product_specific`）
原始活动或阶段基准：incoming conditioning lot。

- 归一化基准：每声明的参考流
- 基准类型: `process_output`
- 证据类型: collected_record（`collected_record`）
- 采集协议: `cp_conditioning`
- 数量范围: 暂定筛选区间；实际前景记录决定数值
  - 范围角色: QA guardrail（`qa_guardrail`）
  - 下限: 1
  - 上限: 3
  - 单位: kg/kg conditioned seed
  - 基础: incoming conditioning lot
  - 基准类型: `process_output`
  - 证据类型: Reasoned estimate（`reasoned_estimate`）

###### 柴油投入（`conditioning_energy`）

条件性单物质交换：仅当过程记录证明使用柴油时纳入。其他实际能源、水源或材料须分别建立交换，独立记录数量及已核实或明确待核实的身份。本示例不代表必然使用。

- 选定流：柴油
- 流属性 / 单位: 质量 / kg
- 数量规则: 计量本过程及期间实际使用的柴油数量。
- 数值来源模式: 前景记录（`foreground_record`）
- 适用范围: technology_specific（`technology_specific`）
原始活动或阶段基准：per conditioned lot。

- 归一化基准：每声明的参考流
- 基准类型: `process_output`
- 证据类型: collected_record（`collected_record`）
- 采集协议: `cp_energy`

###### 中压电力投入（`conditioning_energy_electricity`）

条件性单物质交换：仅当过程记录证明使用中压电力时纳入。其他实际能源、水源或材料须分别建立交换，独立记录数量及已核实或明确待核实的身份。本示例不代表必然使用。

- 选定流：中压电力
- 流属性 / 单位: 能量 / kWh
- 数量规则: 计量本过程及期间实际使用的中压电力数量。
- 数值来源模式: 前景记录（`foreground_record`）
- 适用范围: technology_specific（`technology_specific`）
原始活动或阶段基准：per conditioned lot。

- 归一化基准：每声明的参考流
- 基准类型: `process_output`
- 证据类型: collected_record（`collected_record`）
- 采集协议: `cp_energy`

###### 自来水工艺用水投入（`cleaning_water`）

条件性单物质交换：仅当过程记录证明使用自来水工艺用水时纳入。其他实际能源、水源或材料须分别建立交换，独立记录数量及已核实或明确待核实的身份。本示例不代表必然使用。

- 选定流：自来水工艺用水
- 流属性 / 单位: 体积 / m3
- 数量规则: 计量本过程及期间实际使用的自来水工艺用水数量。
- 数值来源模式: 前景记录（`foreground_record`）
- 适用范围: route_specific（`route_specific`）
原始活动或阶段基准：per conditioned lot。

- 归一化基准：每声明的参考流
- 基准类型: `process_output`
- 证据类型: collected_record（`collected_record`）
- 采集协议: `cp_conditioning`

##### 废物流

无。

##### 基本流

无。

#### 输出
##### 产品流

###### 整理后油籽 (`conditioned_oilseed`)

本卡记录该过程角色的真实物理流；仅在路线启用时按声明批次或作物周期建模。

- 选定流: 其他未另分类油籽
- 流属性 / 单位: kg
- 数量规则：计量声明水分和纯度下的整理后种子质量。
- 数值来源模式: 前景记录（`foreground_record`）
- 适用范围: product_specific（`product_specific`）
原始活动或阶段基准：conditioned lot output。

- 归一化基准：每声明的参考流
- 基准类型: `process_output`
- 证据类型: collected_record（`collected_record`）
- 采集协议: `cp_conditioning`
- 数量范围: 暂定筛选区间；实际前景记录决定数值
  - 范围角色: QA guardrail（`qa_guardrail`）
  - 下限: 0.5
  - 上限: 1
  - 单位: kg/kg raw seed
  - 基础: conditioned lot output
  - 基准类型: `process_output`
  - 证据类型: Reasoned estimate（`reasoned_estimate`）

该行的实际中间状态或联产品等级须独立核实 UUID，不使用参考输出 UUID 代替。

##### 废物流

###### 清理弃物与杂质 (`cleaning_rejects`)

仅当 Crambe abyssinica 种子筛下物作为废物丢弃时使用；出售的降级种子须另列产品输出。其他杂质须另列废物身份。

- 选定流: 废弃的 Crambe abyssinica 种子筛下物
- 流属性 / 单位: kg
- 数量规则: 计量送往已声明处理路线的 Crambe abyssinica 种子筛下物质量。
- 数值来源模式: 前景记录（`foreground_record`）
- 适用范围: site_specific（`site_specific`）
原始活动或阶段基准：per conditioned lot。

- 归一化基准：每声明的参考流
- 基准类型: `process_output`
- 证据类型: collected_record（`collected_record`）
- 采集协议: `cp_conditioning`
- 数量范围: 暂定筛选区间；实际前景记录决定数值
  - 范围角色: QA guardrail（`qa_guardrail`）
  - 下限: 0
  - 上限: 0.5
  - 单位: kg/kg raw seed
  - 基础: per conditioned lot
  - 基准类型: `process_output`
  - 证据类型: Reasoned estimate（`reasoned_estimate`）

##### 基本流

###### 干式操作粉尘 (`dust_release`)

本卡记录该过程角色的真实物理流；仅在路线启用时按声明批次或作物周期建模。

- 选定流: 按声明物种、状态、介质和去向选择具体流
- 流属性 / 单位: kg
- 数量规则：计量或按有据方法计算捕集后的实际释放粉尘；不使用未核验的通用颗粒物UUID，不将捕集固体重复作空气排放。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围: technology_specific（`technology_specific`）
原始活动或阶段基准：per conditioned lot。

- 归一化基准：每声明的参考流
- 基准类型: `process_output`
- 证据类型: calculated_from_collection（`calculated_from_collection`）
- 采集协议: `cp_conditioning`
- 数量范围: 暂定筛选区间；实际前景记录决定数值
  - 范围角色: QA guardrail（`qa_guardrail`）
  - 下限: 0
  - 上限: 0.05
  - 单位: kg/kg conditioned seed
  - 基础: per conditioned lot
  - 基准类型: `process_output`
  - 证据类型: Reasoned estimate（`reasoned_estimate`）

### 过程：分级、包装与储存 (`grading_packaging_and_storage`)

#### 输入
##### 产品流

###### 整理后油籽投入 (`conditioned_oilseed_input`)

本卡记录该过程角色的真实物理流；仅在路线启用时按声明批次或作物周期建模。

- 选定流: 其他油籽（未另说明） `b547a596-eefe-42d3-82b9-78cbbb445eb6`
- 流属性 / 单位: kg
- 数量规则：将同批整理后种子的实测质量转移至分级、储存或装运。
- 数值来源模式: 前景记录（`foreground_record`）
- 适用范围: product_specific（`product_specific`）
原始活动或阶段基准：incoming finalization lot。

- 归一化基准：每声明的参考流
- 基准类型: `process_output`
- 证据类型: collected_record（`collected_record`）
- 采集协议: `cp_final`
- 数量范围: 暂定筛选区间；实际前景记录决定数值
  - 范围角色: QA guardrail（`qa_guardrail`）
  - 下限: 1
  - 上限: 1.5
  - 单位: kg/kg product
  - 基础: incoming finalization lot
  - 基准类型: `process_output`
  - 证据类型: Reasoned estimate（`reasoned_estimate`）

###### 瓦楞纸箱投入（`packaging_materials`）

条件性单物质交换：仅当过程记录证明使用瓦楞纸箱时纳入。其他实际能源、水源或材料须分别建立交换，独立记录数量及已核实或明确待核实的身份。本示例不代表必然使用。

- 选定流：瓦楞纸箱
- 流属性 / 单位: 质量 / kg
- 数量规则: 计量本过程及期间实际使用的瓦楞纸箱数量。
- 数值来源模式: 前景记录（`foreground_record`）
- 适用范围: product_specific（`product_specific`）
原始活动或阶段基准：per final product lot。

- 归一化基准：每声明的参考流
- 基准类型: `reference_flow`
- 证据类型: collected_record（`collected_record`）
- 采集协议: `cp_packaging`

###### 聚乙烯包装薄膜投入（`packaging_materials_plastic_film`）

条件性单物质交换：仅当过程记录证明使用聚乙烯包装薄膜时纳入。其他实际能源、水源或材料须分别建立交换，独立记录数量及已核实或明确待核实的身份。本示例不代表必然使用。

- 选定流：聚乙烯包装薄膜
- 流属性 / 单位: 质量 / kg
- 数量规则: 计量本过程及期间实际使用的聚乙烯包装薄膜数量。
- 数值来源模式: 前景记录（`foreground_record`）
- 适用范围: product_specific（`product_specific`）
原始活动或阶段基准：per final product lot。

- 归一化基准：每声明的参考流
- 基准类型: `reference_flow`
- 证据类型: collected_record（`collected_record`）
- 采集协议: `cp_packaging`

###### 柴油投入（`storage_energy`）

条件性单物质交换：仅当过程记录证明使用柴油时纳入。其他实际能源、水源或材料须分别建立交换，独立记录数量及已核实或明确待核实的身份。本示例不代表必然使用。

- 选定流：柴油
- 流属性 / 单位: 质量 / kg
- 数量规则: 计量本过程及期间实际使用的柴油数量。
- 数值来源模式: 前景记录（`foreground_record`）
- 适用范围: site_specific（`site_specific`）
原始活动或阶段基准：per final product lot。

- 归一化基准：每声明的参考流
- 基准类型: `reference_flow`
- 证据类型: collected_record（`collected_record`）
- 采集协议: `cp_energy`

###### 中压电力投入（`storage_energy_electricity`）

条件性单物质交换：仅当过程记录证明使用中压电力时纳入。其他实际能源、水源或材料须分别建立交换，独立记录数量及已核实或明确待核实的身份。本示例不代表必然使用。

- 选定流：中压电力
- 流属性 / 单位: 能量 / kWh
- 数量规则: 计量本过程及期间实际使用的中压电力数量。
- 数值来源模式: 前景记录（`foreground_record`）
- 适用范围: site_specific（`site_specific`）
原始活动或阶段基准：per final product lot。

- 归一化基准：每声明的参考流
- 基准类型: `reference_flow`
- 证据类型: collected_record（`collected_record`）
- 采集协议: `cp_energy`

##### 废物流

无。

##### 基本流

无。

#### 输出
##### 产品流

###### 门点声明的其他油籽 (`reference_product`)

仅在 `grading_packaging_and_storage` 作业实际发生时记录该作业实测合格产出，保留物种、状态、等级、含水率、批次和真实移出交接点。此稳定行 id 表示实际路线产出；唯一最终参考产出为 reference_product_at_declared_handoff。保留原始产出并关联选定最终批次，不作为另一份最终产品重复计数。所列 UUID 仅适用于已独立确认的物理状态/交接点；不相容的上游/中间状态须另行核实或明确保持身份未解析。保留原阶段计量及采集记录。

- 选定流: 其他油籽（未另说明） `b547a596-eefe-42d3-82b9-78cbbb445eb6`
- 流属性 / 单位: kg
原始产出计量及核对：按 `cp_final` 称量实际作业净合格批次产出，保留毛重/皮重、拒收、库存、含水率及匹配后续批次记录，在最终归一化前核对。

- 数量规则：按 `cp_final` 实测实际作业净合格产出；保留原始批次数量及实际阶段处理量，依第8节最终交接归一化规则换算一次，不规定固定中间得率
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
原始活动或阶段基准：实测实际作业/批次产出及处理量，在一次最终参考归一化前保留。

- 归一化基准：每声明的参考流
- 基准类型: `reference_flow`
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_final`

###### 降级但可销售的油籽 (`downgraded_oilseed`)

本卡记录该过程角色的真实物理流；仅在路线启用时按声明批次或作物周期建模。

- 选定流: 其他未另分类油籽
- 流属性 / 单位: kg
- 数量规则：较低等级确仍作为油料商品销售时，分开计量其实际质量和交付去向。
- 数值来源模式: 前景记录（`foreground_record`）
- 适用范围: product_specific（`product_specific`）
原始活动或阶段基准：per grading lot。

- 归一化基准：每声明的参考流
- 基准类型: `process_output`
- 证据类型: collected_record（`collected_record`）
- 采集协议: `cp_final`
- 数量范围: 暂定筛选区间；实际前景记录决定数值
  - 范围角色: QA guardrail（`qa_guardrail`）
  - 下限: 0
  - 上限: 1
  - 单位: kg/kg graded input
  - 基础: per grading lot
  - 基准类型: `process_output`
  - 证据类型: Reasoned estimate（`reasoned_estimate`）

该行的实际中间状态或联产品等级须独立核实 UUID，不使用参考输出 UUID 代替。

##### 废物流

###### Crambe abyssinica 种子筛下废物（`final_rejects`）

条件性单物质交换：仅在实际路线和记录证明使用或排放Crambe abyssinica 种子筛下废物时纳入。其他产品、燃料、废物或排放物种须分别建立原子清单行，独立记录数量、状态和身份；不得从示例推定必然使用。

- 选定流：Crambe abyssinica 种子筛下废物
- 流属性/单位：质量 / kg
- 数量规则：依据实际路线记录，仅计量或计算本过程与期间的Crambe abyssinica 种子筛下废物；不得混合其他物种或能源。
- 数值来源模式: 前景记录（`foreground_record`）
- 适用范围: site_specific（`site_specific`）
原始活动或阶段基准：per final product lot。

- 归一化基准：每声明的参考流
- 基准类型: `reference_flow`
- 证据类型: collected_record（`collected_record`）
- 采集协议: `cp_final`

##### 基本流

无。

### 过程：声明交接点合格产品计量（`declared_reference_handoff`）
本计量不新增加工、废物产生或排放。保留全部真实上游作业和损失，仅旁路有据未发生的活动。选择一个实际终端产品批次，系统汇总时将其成对内部转移抵销一次；不得把未启用路线、共产品或来源产出与交接产出相加为合格最终产出。

#### 输入
##### 产品流
###### 同一交接点实际路线合格产品 (`actual_route_product_for_handoff`)

仅计量既有声明交接点的合格产品，并匹配一份实际终端来源记录。成对内部转移与本参考表示同一事件，不是两笔销售。按实际物种/状态/交接点独立核实身份；仅对鲜态农场门产品确认的标识不能代表不相容调理状态或独立包装场状态。身份缺失须明确保留，不得靠复制相邻产出的 UUID 解决。
- 选定流：其他油籽（未另说明） `b547a596-eefe-42d3-82b9-78cbbb445eb6`
- 流属性/单位：质量 / kg
- 数量规则：本同一交接点实测净合格质量，按 R/R × 1 kg 归一化；成对投入与合格产出相等，保留原始 R
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_declared_reference_handoff`

##### 废物流
##### 基本流
#### 输出
##### 产品流
###### 声明交接点参考产品 (`reference_product_at_declared_handoff`)

仅计量既有声明交接点的合格产品，并匹配一份实际终端来源记录。成对内部转移与本参考表示同一事件，不是两笔销售。按实际物种/状态/交接点独立核实身份；仅对鲜态农场门产品确认的标识不能代表不相容调理状态或独立包装场状态。身份缺失须明确保留，不得靠复制相邻产出的 UUID 解决。
- 选定流：其他油籽（未另说明） `b547a596-eefe-42d3-82b9-78cbbb445eb6`
- 流属性/单位：质量 / kg
- 数量规则：1 kg
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_declared_reference_handoff`

##### 废物流
实际废物保留在其产生作业，不在此重复。
##### 基本流
实际释放保留在其负责的实体作业，不在此重复。

## 7. 分配与联产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| direct_assignment | 所有节点 | 可测量的物种、地块、批次、等级及用途专属投入直接归属。 | mass-balance-identity |
| multi_output | 可销售籽粒等级及物种特定联产品 | 分别记录所有预期产出；共享负荷默认按声明水分基础的质量分配，采用经济分配须提供复核证据。 | mass-balance-identity |
| residue_fate | 秸秆、果壳、荚壳和弃物 | 仅有独立可销售去向及参考流时作为联产品；否则作为残余或废物并记录去向。 | mass-balance-identity |
| shared_assets | 共享机械、干燥和储存 | 按实测运行小时、能耗或处理质量归属一次，防止田间与整理节点重复计算。 | mass-balance-identity |

## 8. 前景数据采集、计算与质量规则

清单完整性：具名条件卡是单项交换示例，不是穷尽配方，也不要求使用这些产品。完成前景数据包前，逐项列出所有实际种植材料、养分产品、作物保护制剂、资产材料、作业服务、载能体、包装材料、废物流及适用的基本物质，使用明确的物理身份、状态、原始属性/单位、来源或接收区室及实测或按方法计算的数量。身份或数量缺失属于完整性缺口，不得假定为零。保留实际批次和阶段基准；不得将中间转移累加为额外最终产出，也不得重复计入采购服务已包含的负荷。

先按各采集协议保留原始场址、批次、周期及阶段数量与分母，并完成库存、损失、含水率和共产品归属核对；随后按实际归属的验收交付产品量归一化：归一化交换量 = 归属原始交换量 × 声明参考数量 / 同一边界和计量基准的验收产品量。多年生建植和共享作业先执行各自分摊规则，不得把内部转移数量设为最终参考数量。每声明的参考流指第 3 节的数量、单位和产品状态；数据包必须声明实际路线和门。


所有范围均为暂定 QA 筛选区间，不是默认清单值或合规限值。

### 数据采集协议
| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_field | managed_production | field inputs | primary activity record | species, field area, planting, product IDs, nutrient composition, water and protection products | field log, invoices and meters；原始汇总与分配：sum by product and field-cycle; each nutrient product once | ha; kg; m3; L | each operation | complete crop cycle | declared field or protected unit | 每声明的参考流 | invoices, labels, calibrated meters |
| cp_energy | all processes | energy carriers | meter or allocation record | carrier, quantity, unit, equipment, hours and process | meter, fuel ticket or equipment log；原始汇总与分配：sum by carrier and assign once to process | kWh; MJ; L; kg | each operation or batch | complete crop cycle and conditioning lots | named field and facility | 每声明的参考流 | meter calibration, invoices, machine logs |
| cp_yield | managed_production | crop yield | weighing and survey record | standing estimate, harvested mass, area and loss | calibrated scale and field survey；原始汇总与分配：reconcile standing, harvested and field-loss mass | kg; ha | each harvest lot | complete harvest window | field and lot | 每声明的参考流 | scale certificate and survey sheet |
| cp_emissions | managed_production | soil emissions | calculation input record | N inputs, species, medium, soil and method factors | nutrient ledger and declared method；原始汇总与分配：calculate separately by species and receiving medium | kg N; kg emission | each crop cycle | all managed periods | field | 每声明的参考流 | nutrient ledger and method sheet |
| cp_harvest | harvest_and_extraction | seed and residues | lot mass record | gross crop, raw seed, residues, losses, technology and destination | calibrated weighing and lot log；原始汇总与分配：mass reconcile all outputs and stock change | kg | each lot | complete harvest window | field and lot | 每声明的参考流 | scale certificate and lot tickets |
| cp_conditioning | drying_and_conditioning | moisture, product and rejects | batch record | incoming and outgoing mass, moisture, foreign matter, dust, water and route | scale, moisture test, meter and batch log；原始汇总与分配：dry-matter and wet-mass reconciliation by batch | kg; %; m3 | each batch | all conditioning batches | conditioning line and batch | 每声明的参考流 | scale and moisture calibration, batch sheet |
| cp_packaging | grading_packaging_and_storage | packaging | material issue record | material type, mass, count, reuse and product lot | warehouse issue and packaging log；原始汇总与分配：sum virgin and reused materials separately | kg; item | each lot | all packed lots | packing line and lot | 每声明的参考流 | invoice, issue ticket, count check |
| cp_final | grading_packaging_and_storage | grades and reference product | final lot record | species, use, moisture, grade, accepted, downgraded, rejected and stock change | calibrated scale, grade test and dispatch ticket；原始汇总与分配：reconcile incoming with grades, rejects and stock change | kg; % | each lot | all released lots | facility, store and lot | 每声明的参考流 | scale certificate, lab or grade report, dispatch ticket |
| `cp_phase1_environment_coverage` | managed_production | 按实际节点的管理环境覆盖 | 场址活动方法台账 | 实际生产节点；土壤/介质路线；气候土壤；肥料产品量及组成；残体去向及氮；相关矿化/有机土/排泄活动；方法层级方程版本；路径因子及单位；石灰尿素；实际燃料；物质/环境；供应覆盖; 场址及实际管理节点；面积；有日期占用区间；共同使用者；建植/未产期历史；实际前后土地类别及转化日期/面积；碳核算覆盖；上游土地覆盖 | 按实际负责生产节点及匹配批次/期间采集原始记录，保留来源、方法适用性和不确定性。与现有协议及供应覆盖核对，不新增重复事件；不适用须明示有据，缺少证据属于缺口。 | 适用的原生活动单位、kg N或物质、面积/时间 | 事件及年度/批次核对 | 匹配生产/队列期间 | 全部实际管理生产节点 | 执行适用覆盖核算后最终归一化一次 | 原始记录、方法工作表及适用性证据 |

### 计算规则

| rule_id | 适用对象 | Formula or rule | Inputs | 产出 | source_ids |
| --- | --- | --- | --- | --- | --- |
| normalize | 全部投入 | 同一作物周期或批次投入除以声明门点合格产品净质量。 | 活动记录及产品质量 | 每 kg 参考产品清单 |  |
| moisture_balance | 干燥 | 干物质守恒；以实测进出水分计算除水量并核对损失。 | 进出质量及水分 | 干物质差异 | mass-balance-identity |
| lot_balance | 收获及整理 | 投入加库存减少等于所有产品、残余、废物、排放及库存增加。 | 全部实测批次流 | 质量差异 | mass-balance-identity |
| nutrient_expand | 养分投入 | 每个物理产品只生成一次交换，并保留组成用于分析 N/P/K，禁止重复。 | 产品 ID、质量及组成 | 具体产品交换及养分台账 |  |
| `chemical_species_mass_accounting` | `elementary_nutrient_emissions` | 最终基本交换使用已识别物质的质量和一个实际接收环境，养分／活动台账另存：该物种的 N2O-N × 44/28 为 N2O，NH3-N × 17/14 为 NH3，硝酸盐氮 × 62/14 为硝酸盐，磷酸盐磷 × 95/31 为磷酸盐。若选定流为元素磷，则报告 kg P，仅在物种口径有据时将磷酸盐质量乘 31/95。只有方法输出按元素计时才换算一次，实测化合物质量不得再换算。总养分损失不得无据归于单一物种，土壤残余／留存养分不是排放。保留直接／间接路径台账，不重复所选方法或上游清单已经包含的路径。因子不确定性范围只按其声明基准检查因子，不是最终化合物数量或场址排放的允许界限。用合格参考数量和匹配实测产出，将可归属化合物质量归一化一次。活动量、身份或接收环境未知时保留证据缺口，不得宣称完整。 | `cp_emissions`; 物种特定活动量台账、方法路径和因子基准、匹配合格产出 | 按身份区分的交换和对账活动记录 |  |

### 环境覆盖计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_managed_environment_coverage` | 实际管理生产节点 | 针对实际自主管理生产节点，逐项记录土壤直接 N2O、挥发/沉降间接 N2O、淋溶/径流间接 N2O、NH3/NOx 与养分损失，以及实际施石灰/尿素 CO2 的适用性。主核算依次采用有代表性的路径实测、经验证且适用于作物/土壤/管理的场址或国家方法；否则 N2O 与石灰/尿素 CO2 采用适用的2006 IPCC及2019修订管理土壤方程，按气候和投入类别选因子。保留确切版本、方程、层级、活动量及因子单位和气候/管理适用性，不规定通用剂量或因子。无土/设施路线须采用适用于实际介质的方法，不强套土壤因子。化肥、有机投入、残体、实际相关矿化/有机土和排泄物路径使用同一田块期间氮台账；路径不适用须证明，缺数不能填零。直接及各间接分量分别计算，逐项只分配到匹配的现有或新增具体卡一次，不将总量与组成重复相加。N2O-N 乘44/28转分子 N2O 一次。NH3、NOx及养分/农药损失采用适用实测或有据物质/去向模型；总N/P或未解释平衡差不等于某化合物释放。保留实际接收环境及分子、元素或报告口径，间接形成不能在来源台账再扣同一氮。实际本地燃烧另按燃料特定的燃烧方法记录；外购电、热和服务承接上游覆盖一次。有据释放按具体身份建卡，复用现有匹配卡，采用已核实UUID或明确未决身份。适用方法、活动量、因子或身份缺失会阻止完整性，不构成有据零值；原始活动/释放总量归属后按匹配合格参考产出归一化一次。 | cp_phase1_environment_coverage | 按匹配最终参考量的应归属原生环境数量 | `review-ipcc-soils-2019` |
| `calc_managed_land_coverage` | 实际管理生产节点 | 逐实际自主管理生产场址采集占用面积及有日期的占用区间，包括应归属的建植/未产期与生产期。占用量为面积乘实际时长，明确换为所选面积时间单位（1 ha=10,000 m2，时间按年）；只有每作物周期公顷数而无时长不能得到面积时间。建立、管理区间重叠时划分区间或取并集，同一面积时间只计一次，实际共同使用者份额合计为一。土地转化按声明土地利用方法，另记实际前/后土地类别、事件面积和日期；转化使用面积单位，不能与占用量相加。种植、持续占用或前土地资料缺失不能证明发生转化，也不能证明零转化。适用时保留历史事件归属及碳库/排放方法覆盖，不编造转化或通用固碳信用。分别建立兼容基本流身份，采用已核实UUID或明确未决身份，归属一次后按匹配最终参考产出归一化。外购已完成的生物投入承接兼容上游土地覆盖一次，不在本地重复。适用土地身份、面积、时长或前状态证据缺失属于完整性缺口；有据无转化可记录为不适用。 | cp_phase1_environment_coverage | 按匹配最终参考量的应归属原生环境数量 |  |

### 数据质量要求

| requirement_id | 适用对象 | Requirement | Evidence |
| --- | --- | --- | --- |
| dq_identity | 参考产品 | 物种、用途、水分、等级、路线及门点均非空。 | 批次和发运记录 |
| dq_mass | 全过程 | 校准秤并核对田间、收获、整理和最终批次质量平衡。 | 校准证书与平衡表 |
| dq_route | 条件过程 | 仅启用实际发生的整理、包装和储存路线。 | 作业和批次日志 |
| dq_binding | 全部交换 | 分别核验每种实际交换的具体流 UUID、物理状态、流属性和单位；未确认时明确保留未解析身份。 | 流身份审计 |

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_declared_reference_handoff` | `declared_reference_handoff` | 实际合格终端产品及成对转移 | 称量/批次/验收记录 | 物种；状态；等级；含水率/基准；交接点；actual_terminal_process_id；actual_terminal_output_row_id；lot/transfer_id；毛/皮/净质量 R；阶段原始总量/吞吐量；库存、拒收及去向 | 在既有交接点称量净合格 R，匹配唯一实际同批次/同状态终端来源，并核对前序损失及库存。若未发生条件性准备，采用最后实际纳入的适格产品产出，不虚构该准备作业。保留原活动记录及全部必需限定项。 | kg 及原生活动单位 | 每个合格批次 | 匹配生产及交接期间 | 既有声明生产者/初级交接点 | 每声明的参考流 | 校准称量、验收/等级记录、批次链、启用/旁路证据及闭合平衡 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_final_handoff_normalization` | 全部前景数量及实际路线产出 | R 为匹配单一物种/状态/等级/交接点/期间且实测为正的合格最终质量 kg，剔除皮重、拒收、共产品及留存库存。物理台账＝原始物理数量/R×1 kg，不乘负荷分配份额；归属清单贡献＝可归属原始数量/R×1 kg，保留分子原生单位及原有产品/期间归属。阶段强度 q_i＝Q_i/O_i 须先按实际关联 O_i 还原 Q_i＝q_i×O_i；已最终归一化后不得再次除以 R。交接两侧均为同一实测事件 R/R×1 kg，不是另一实体得率。仅纳入实际启用作业，旁路须记录并有据。R 缺失/非正或终端记录未关联会阻断完整归一化结果，不能记零。保留原始阶段数据，成对内部转移抵销一次。 | cp_declared_reference_handoff; original linked collection protocols | 按声明最终参考报告的原生数量 | `declared-handoff-measurement-definition` |

## 9. 验证规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| validate_other | 产品身份 | 具名物种必须落在 CPC 01449，且不得已有单独 CPC 油籽叶节点。 | unsd-cpc-30 |
| validate_reference | 参考流 | 核对 1 kg 净质量及物种、用途、水分、等级和门点限定。 | mass-balance-identity |
| validate_balance | 各批次 | 核对投入、产出、损失、库存变化及水分变化，不得重复计算转移流。 | mass-balance-identity |
| validate_ranges | 每张卡 | 超出筛选区间须调查，但有支持的真实测量不得仅因此被拒绝。 |  |
| validate_sets | 参数化投入 | 分别核验每种实际交换的具体流 UUID、物理状态、流属性和单位；未确认时明确保留未解析身份。 |  |


| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_final_handoff_bypass` | 实际选定路线及全部条件旁路状态 | 按实际记录检查可选处理/包装/储存启用及省略两种状态：始终保留唯一必需交接参考；来源产品/状态/交接点与第3节一致；启用的实体行保留实测吞吐量，未启用实体活动不新增交换。要求原始合格质量、上游闭合、唯一转移配对及一次最终归一化；未知状态或缺少身份不得当作已成立分支。 | `declared-handoff-measurement-definition` |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 物种、田块及批次特定的其他油籽前景数据包 |
| downstream_use | `secondary_dataset`；经地域、技术和时间匹配后可作 `background_dataset` |
| allowed_use | 一个具名 CPC 01449 油籽从种植至声明门点的建模 |
| excluded_use | 不用于其他 CPC 油籽、播种专用种子、油、粕或多物种平均 |
| required_metadata | 物种、用途、水分、等级、地域、周期、生产技术、整理路线、门点及分配 |
| required_quality_disclosure | 称量与水分核对、具体流身份核验、未解析身份、暂定范围和数据缺口 |
| update_trigger | 物种、用途、技术、水分、等级、门点、分配或方法因子变化 |

## 11. 数据来源

| Source id | 类型 | 参考文献 | 用途 |
| --- | --- | --- | --- |
| unsd-cpc-30 | official_guidance | United Nations Statistics Division, CPC Version 3.0, https://unstats.un.org/unsd/classifications/Econ/cpc | 类别边界及剩余类别判断 |
| fao-grain-storage | official_guidance | FAO, Grain storage techniques, https://www.fao.org/4/s1250e/S1250E0u.htm | 干燥、清理、储存及水分记录路线 |
| mass-balance-identity | method_factor | 质量投入与产出、损失及库存变化的守恒关系 | 批次及水分质量核对 |
| `review-ipcc-soils-2019` | official_guidance | IPCC 2019 Refinement, Volume 4, Chapter 11, https://www.ipcc-nggip.iges.or.jp/public/2019rf/pdf/4_Volume4/19R_V4_Ch11_Soils_N2O_CO2.pdf | 管理土壤直接/间接N2O及石灰/尿素CO2方法语境；因子须匹配实际适用性及场址活动，不是产品默认值。 |

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `declared-handoff-measurement-definition` | method_factor | 本 PCR 第3、6及8节：同一合格交接质量除以自身再乘声明参考数量；属于物理转移配对及量纲归一化恒等式，不是经验得率或新增实体操作。 | 唯一合格参考及实测路线吞吐关联 |
