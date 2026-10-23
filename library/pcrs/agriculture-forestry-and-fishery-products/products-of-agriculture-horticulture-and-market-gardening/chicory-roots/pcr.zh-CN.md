---
pcr_id: pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.chicory-roots
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 菊苣根

## 1. 范围与适用性

本 PCR 适用于农场门交付的鲜、未加工栽培菊苣（*Cichorium intybus* L.）根，包括建植、田间管理、起挖、去叶/修整、去土、分级和交付。强制栽培菊苣芽球、叶用或饲用菊苣、种子、供强制栽培贮藏的根，以及切片、干燥、烘焙或提取产品不在范围内。强制栽培、烘焙、咖啡替代品制造和菊粉提取属于下游。

## 2. 产品类别身份

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.chicory-roots |
| classification_refs | CPC 3.0: 01691 菊苣根; mapping relation: exact |
| covered_products | 起挖、修整、去土和分级后的鲜栽培菊苣主根 |
| excluded_products | 强制栽培芽球；叶用或饲用菊苣；种子；干燥、切片或烘焙根；咖啡替代品；菊粉及其他提取物 |
| representative_product | 符合声明等级、交付含水与洁净状态的可销售鲜菊苣根 |
| production_route | 受控田间生产、起挖、初级整理与分级；直播/移栽和人工/机械起挖为须声明的替代路线 |
| market_state | 农场门鲜、未加工农产品 |

受控生产父活动为 `field_production`。直播与移栽可用于不同批次，但同一田块批次只能选择其一；两者的种植材料记录和根形可能不同。人工和机械起挖同样需分批记录，因为设备能源、损失和带土量可能不同。每项路线差异均须由当前记录支持。

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 农场门交付的可销售鲜、未加工菊苣根 |
| How much | 1 kg net mass |
| How well | 符合等级，并声明品种/用途路线、建植路线、起挖方式、修整约定、洁净与含水状态 |
| How long or cycle | 一个作物周期，不含贮藏，并纳入截至农场门交付的全部可归属操作 |
| reference_flow_link | accepted_chicory_roots |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 菊苣根 `8691795b-78fb-4573-9e09-d4957c166bb4` |
| 参考流属性 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 品种或商品类型；根用途路线；建植路线；收获日期与起挖方式；等级；修整与附着土约定；交付含水状态；地域；目的地 |
| 绑定模式 | `fixed` |

## 4. 计量与单位规则
| rule_id | 适用于 | 必需属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | 合格根 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 计量修整、去土和分级后的交付净根质量；排除容器、游离土、叶部和拒收物。 |
| `area_to_mass` | 田间记录 | 质量与面积 | kg 和 ha | 用同一批次面积和经核对的合格产量归一化作物周期记录；披露含水状态与换算。 |
| `internal_mass_state` | 过程转移 | 质量 | kg | 在同一声明湿质量状态下核对转移，并分别记录叶部、土、降级根、拒收物和损失。 |

## 5. 系统边界

前景边界始于种植材料和可归属于本作物的田间投入，止于合格根在农场门交付。种植材料、养分产品、植保产品、能源、供水和外部处理使用上游数据集。强制栽培及后续加工排除在外。

### 边界抽象

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 一个作物周期内接收菊苣种子或移栽苗的已准备田地 |
| starting_condition_role | 前景入口；纳入可归属于本作物的整地并披露继承土壤条件 |
| product_classification_scope | 对应 CPC 3.0 01691 的鲜未加工菊苣根 |
| recursive_input_rule | 外购菊苣根作为上游产品投入，不递归表示为本参考产出的生产 |
| upstream_dataset_requirement | 种植材料、养分、植保、能源、水和外部处理的代表性上游数据集 |
| disclosure | 品种/用途路线、田块与日期、前茬、地域、建植、灌溉、起挖、修整、去土、等级去向及农场门状态 |

### 边界规则

| rule_id | 适用于 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_field_cycle` | `field_production` | 纳入可归属本作物的整地、建植、养分与植保施用、灌溉及直至可收获状态的田间操作。 | `umn-forcing-chicories-2023`; `omafra-root-chicory` |
| `boundary_lifting` | `root_lifting` | 起挖将生物根从田间移出且有独立能源、损失和带土记录，故须单独建模。 | `umn-forcing-chicories-2023` |
| `boundary_conditioning` | `primary_conditioning` | 纳入去叶/修整和农场级去土；仅在交付前实际进行时纳入清洗。 | `umn-forcing-chicories-2023`; `ucd-witloof-chicory` |
| `boundary_grading` | `grading_farm_gate` | 记录合格、降级和拒收状态及其各自去向；仅合格根为参考产出。 | `umn-forcing-chicories-2023` |
| `boundary_downstream` | downstream | 排除强制栽培、为强制栽培而贮藏、芽球生产、切片、干燥、烘焙和提取。 | `umn-forcing-chicories-2023`; `ucd-witloof-chicory` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 包含性 | 包含条件 | 作用 | 定量基准 |
| --- | --- | --- | --- | --- | --- |
| `field_production` | 受控生物田间生产 | 必需 | 一个批次/周期，采用批次模式；声明直播或移栽路线差异 | 生产待收获根；分类全部管理投入 | ha 和 kg 待收获根 |
| `root_lifting` | 根起挖与收获 | 必需 | 声明人工或机械替代技术路线差异 | 独立于生产收获根并转入整理 | kg 进入起挖的根 |
| `primary_conditioning` | 初级整理：修整与去土 | 必需 | 仅农场实际清洗时 | 将已起挖根转为整理后根；分离叶部、土和废水 | kg 已起挖根 |
| `grading_farm_gate` | 分级与交付 | 必需 | 声明每个等级/去向 | 分离合格、降级和拒收根 | kg prepared roots |

所有操作按批次和作物周期索引。共享机械、清洁和换线负荷按实测用量、时间、面积或质量仅归属一次。在算出路线特定产量与损失前，替代路线批次须保持分离。

### 过程：受控田间生产 (`field_production`)

#### 输入
##### 产品流

###### 尿素肥料投入（`nutrient_supply`）

仅当声明的过程实际使用尿素肥料时纳入此条件卡。其他实际产品或能源须各自建立单一交换，记录独立身份和实测数量；不得从本示例推定其必然使用。

- 选定流：尿素肥料
- 流属性/单位：质量 / kg 产品
- 数量规则：记录该过程和期间实际使用的尿素肥料数量；只有路线记录证明未使用时，才填零或不适用。
- 数值来源模式： 前景记录（`foreground_record`）
- 适用范围： 场址特定（`site_specific`）
原始活动或阶段基准：每公顷每作物周期.

- 归一化基准：每声明的参考流
- 基准类型： 作物周期（`crop_cycle`）
- 证据类型： 采集记录（`collected_record`）
- 采集协议： `cp_field_inputs`

###### 磷酸一铵肥料投入（`nutrient_supply_monoammonium_phosphate`）

仅当声明的过程实际使用磷酸一铵肥料时纳入此条件卡。其他实际产品或能源须各自建立单一交换，记录独立身份和实测数量；不得从本示例推定其必然使用。

- 选定流：磷酸一铵肥料
- 流属性/单位：质量 / kg 产品
- 数量规则：记录该过程和期间实际使用的磷酸一铵肥料数量；只有路线记录证明未使用时，才填零或不适用。
- 数值来源模式： 前景记录（`foreground_record`）
- 适用范围： 场址特定（`site_specific`）
原始活动或阶段基准：每公顷每作物周期.

- 归一化基准：每声明的参考流
- 基准类型： 作物周期（`crop_cycle`）
- 证据类型： 采集记录（`collected_record`）
- 采集协议： `cp_field_inputs`

###### 氯化钾肥料投入（`nutrient_supply_potassium_chloride`）

仅当声明的过程实际使用氯化钾肥料时纳入此条件卡。其他实际产品或能源须各自建立单一交换，记录独立身份和实测数量；不得从本示例推定其必然使用。

- 选定流：氯化钾肥料
- 流属性/单位：质量 / kg 产品
- 数量规则：记录该过程和期间实际使用的氯化钾肥料数量；只有路线记录证明未使用时，才填零或不适用。
- 数值来源模式： 前景记录（`foreground_record`）
- 适用范围： 场址特定（`site_specific`）
原始活动或阶段基准：每公顷每作物周期.

- 归一化基准：每声明的参考流
- 基准类型： 作物周期（`crop_cycle`）
- 证据类型： 采集记录（`collected_record`）
- 采集协议： `cp_field_inputs`

###### 施用的牛粪肥投入（`nutrient_supply_cattle_manure`）

仅当声明的过程实际使用施用的牛粪肥时纳入此条件卡。其他实际产品或能源须各自建立单一交换，记录独立身份和实测数量；不得从本示例推定其必然使用。

- 选定流：施用的牛粪肥
- 流属性/单位：质量 / kg 产品
- 数量规则：记录该过程和期间实际使用的施用的牛粪肥数量；只有路线记录证明未使用时，才填零或不适用。
- 数值来源模式： 前景记录（`foreground_record`）
- 适用范围： 场址特定（`site_specific`）
原始活动或阶段基准：每公顷每作物周期.

- 归一化基准：每声明的参考流
- 基准类型： 作物周期（`crop_cycle`）
- 证据类型： 采集记录（`collected_record`）
- 采集协议： `cp_field_inputs`

###### 农业石灰石投入（`nutrient_supply_agricultural_limestone`）

仅当声明的过程实际使用农业石灰石时纳入此条件卡。其他实际产品或能源须各自建立单一交换，记录独立身份和实测数量；不得从本示例推定其必然使用。

- 选定流：农业石灰石
- 流属性/单位：质量 / kg 产品
- 数量规则：记录该过程和期间实际使用的农业石灰石数量；只有路线记录证明未使用时，才填零或不适用。
- 数值来源模式： 前景记录（`foreground_record`）
- 适用范围： 场址特定（`site_specific`）
原始活动或阶段基准：每公顷每作物周期.

- 归一化基准：每声明的参考流
- 基准类型： 作物周期（`crop_cycle`）
- 证据类型： 采集记录（`collected_record`）
- 采集协议： `cp_field_inputs`

作物保护必需记录：完成前景数据包前，逐项列明实际施用的每一种制剂，保留商品名、有效成分、盐或化学形态、浓度、必要时的密度、施用量、日期和处理面积。每项交换选用一个物理上明确的产品身份；有效成分释放按物质及接收区室另行计算。缺少配方身份属于完整性缺口，不得用通用农药、虚构示例或假定为零替代。

处理材料必需记录：数据包完成前，按具体组成、产品身份、数量和使用事件逐项列出实际使用的田间处理产品或沤制助剂；不得发布通用处理材料交换，身份缺失时不得假定为零。

###### 灌溉水 (`irrigation_water`)

在所声明过程边界按已索引批次或运行记录此流；按指定协议定量，并明确其物理状态与去向。

- 选定流： 灌溉水
- 流属性/单位：体积 / m3
- 数量规则： 计量或计算总供水量并识别水源与系统。
- 数值来源模式： 前景记录（`foreground_record`）
- 适用范围： 场址特定（`site_specific`）
原始活动或阶段基准：每公顷每作物周期.

- 归一化基准：每声明的参考流
- 基准类型： 作物周期（`crop_cycle`）
- 证据类型： 采集记录（`collected_record`）
- 采集协议： `cp_irrigation`
- 来源： `omafra-root-chicory`; `usu-chicory-garden`
- 数量范围： 暂定灌溉筛查范围
  - 范围角色： QA 校验范围（`qa_guardrail`）
  - 下限： 0
  - 上限： 10000
  - 单位： m3/ha
  - 基准： 每公顷作物周期总灌溉量
  - 基准类型： 作物周期（`crop_cycle`）
  - 证据类型： 推理估算（`reasoned_estimate`）

###### 中压电力投入（`field_energy`）

仅当声明的过程实际使用中压电力时纳入此条件卡。其他实际产品或能源须各自建立单一交换，记录独立身份和实测数量；不得从本示例推定其必然使用。

- 选定流：中压电力
- 流属性/单位：能量 / kWh
- 数量规则：记录该过程和期间实际使用的中压电力数量；只有路线记录证明未使用时，才填零或不适用。
- 数值来源模式： 前景记录（`foreground_record`）
- 适用范围： 技术特定（`technology_specific`）
原始活动或阶段基准：每公顷每作物周期.

- 归一化基准：每声明的参考流
- 基准类型： 作物周期（`crop_cycle`）
- 证据类型： 采集记录（`collected_record`）
- 采集协议： `cp_energy`

###### 柴油投入（`field_energy_diesel`）

仅当声明的过程实际使用柴油时纳入此条件卡。其他实际产品或能源须各自建立单一交换，记录独立身份和实测数量；不得从本示例推定其必然使用。

- 选定流：柴油
- 流属性/单位：质量 / kg
- 数量规则：记录该过程和期间实际使用的柴油数量；只有路线记录证明未使用时，才填零或不适用。
- 数值来源模式： 前景记录（`foreground_record`）
- 适用范围： 技术特定（`technology_specific`）
原始活动或阶段基准：每公顷每作物周期.

- 归一化基准：每声明的参考流
- 基准类型： 作物周期（`crop_cycle`）
- 证据类型： 采集记录（`collected_record`）
- 采集协议： `cp_energy`

##### 废物流

##### 基本流

#### 输出
##### 产品流

###### 待收获根 (`harvest_ready_roots`)

在所声明过程边界按已索引批次或运行记录此流；按指定协议定量，并明确其物理状态与去向。

- 选定流： 土中待收获菊苣根
- 流属性/单位：质量 / kg
- 数量规则： 在统一湿质量基准上由已起挖根、抽样田间损失和残余物计算。
- 数值来源模式： 计算值（`calculated_value`）
- 适用范围： 场址特定（`site_specific`）
原始活动或阶段基准：每公顷每作物周期.

- 归一化基准：每声明的参考流
- 基准类型： 作物周期（`crop_cycle`）
- 证据类型： 由采集数据计算（`calculated_from_collection`）
- 采集协议： `cp_mass_balance`
- 来源： `cwalina-root-chicory-n-2022`
- 数量范围： 鲜根产量 QA 校验范围
  - 范围角色： QA 校验范围（`qa_guardrail`）
  - 下限： 5
  - 上限： 100
  - 单位： Mg/ha
  - 基准： 每公顷待收获鲜根质量
  - 基准类型： 作物周期（`crop_cycle`）
  - 证据类型： 外部来源（`external_source`）
  - 来源： `cwalina-root-chicory-n-2022`

##### 废物流

###### 田间残余物与损失 (`field_residues`)

在所声明过程边界按已索引批次或运行记录此流；按指定协议定量，并明确其物理状态与去向。

- 选定流： 留田叶部、未收获生物质和根
- 流属性/单位：质量 / kg
- 数量规则： 通过代表性抽样估算，并声明留田、移除或处理。
- 数值来源模式： 计算值（`calculated_value`）
- 适用范围： 场址特定（`site_specific`）
原始活动或阶段基准：每 kg 待收获根.

- 归一化基准：每声明的参考流
- 基准类型： 过程产出（`process_output`）
- 证据类型： 由采集数据计算（`calculated_from_collection`）
- 采集协议： `cp_mass_balance`
- 数量范围： 暂定残余物比例
  - 范围角色： QA 校验范围（`qa_guardrail`）
  - 下限： 0
  - 上限： 2
  - 单位： kg/kg harvest-ready roots
  - 基准： 每 kg 待收获根对应湿残余物与损失
  - 基准类型： 过程产出（`process_output`）
  - 证据类型： 推理估算（`reasoned_estimate`）

##### 基本流

###### 氧化亚氮，排放至空气（`direct_field_emissions`）

仅在实测或所选适用方法确认该排放路径时，将氧化亚氮，排放至空气作为单一物质和接收介质交换记录。保留实际接收区室并核实具体流身份；其他物质单独建卡，本卡不预设必有排放。
原始活动或阶段基准：每公顷每作物周期。

- 选定流：氧化亚氮，排放至空气
- 流属性/单位：质量 / kg N2O
- 数量规则：实测或按方法计算氧化亚氮，排放至空气的质量，保留活动数据、因子、物质基准和接收区室；仅归一到声明参考输出一次。 以 N2O-N 报告时，按 44/28 换算为 N2O 一次。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每声明的参考流
- 基准类型：`crop_cycle`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_field_emissions`
- 来源：`ipcc-2019-refinement-volume4`

###### 氨，排放至空气（`direct_field_emissions_nh3`）

仅在实测或所选适用方法确认该排放路径时，将氨，排放至空气作为单一物质和接收介质交换记录。保留实际接收区室并核实具体流身份；其他物质单独建卡，本卡不预设必有排放。
原始活动或阶段基准：每公顷每作物周期。

- 选定流：氨，排放至空气
- 流属性/单位：质量 / kg NH3
- 数量规则：实测或按方法计算氨，排放至空气的质量，保留活动数据、因子、物质基准和接收区室；仅归一到声明参考输出一次。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每声明的参考流
- 基准类型：`crop_cycle`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_field_emissions`
- 来源：`ipcc-2019-refinement-volume4`

###### 一氧化氮，排放至空气（`direct_field_emissions_no`）

仅在实测或所选适用方法确认该排放路径时，将一氧化氮，排放至空气作为单一物质和接收介质交换记录。保留实际接收区室并核实具体流身份；其他物质单独建卡，本卡不预设必有排放。
原始活动或阶段基准：每公顷每作物周期。

- 选定流：一氧化氮，排放至空气
- 流属性/单位：质量 / kg NO
- 数量规则：实测或按方法计算一氧化氮，排放至空气的质量，保留活动数据、因子、物质基准和接收区室；仅归一到声明参考输出一次。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每声明的参考流
- 基准类型：`crop_cycle`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_field_emissions`
- 来源：`ipcc-2019-refinement-volume4`

###### 硝酸根，排放至水体（`direct_field_emissions_nitrate`）

仅在实测或所选适用方法确认该排放路径时，将硝酸根，排放至水体作为单一物质和接收介质交换记录。保留实际接收区室并核实具体流身份；其他物质单独建卡，本卡不预设必有排放。
原始活动或阶段基准：每公顷每作物周期。

- 选定流：硝酸根，排放至水体
- 流属性/单位：质量 / kg NO3-
- 数量规则：实测或按方法计算硝酸根，排放至水体的质量，保留活动数据、因子、物质基准和接收区室；仅归一到声明参考输出一次。 以硝酸盐氮报告时，按 62/14 换算为 NO3- 一次。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每声明的参考流
- 基准类型：`crop_cycle`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_field_emissions`
- 来源：`ipcc-2019-refinement-volume4`

###### 化石二氧化碳，排放至空气（`direct_field_emissions_co2_fossil`）

仅在实测或所选适用方法确认该排放路径时，将化石二氧化碳，排放至空气作为单一物质和接收介质交换记录。保留实际接收区室并核实具体流身份；其他物质单独建卡，本卡不预设必有排放。
原始活动或阶段基准：每公顷每作物周期。

- 选定流：化石二氧化碳，排放至空气
- 流属性/单位：质量 / kg CO2
- 数量规则：实测或按方法计算化石二氧化碳，排放至空气的质量，保留活动数据、因子、物质基准和接收区室；仅归一到声明参考输出一次。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每声明的参考流
- 基准类型：`crop_cycle`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_field_emissions`
- 来源：`ipcc-2019-refinement-volume4`

### 过程：根起挖与收获 (`root_lifting`)

#### 输入
##### 产品流

###### 待收获根 entering lifting (`roots_to_lifting`)

在所声明过程边界按已索引批次或运行记录此流；按指定协议定量，并明确其物理状态与去向。

- 选定流： 土中待收获菊苣根
- 流属性/单位：质量 / kg
- 数量规则： 使用同批次经核对的 `harvest_ready_roots` 产出。
- 数值来源模式： 计算值（`calculated_value`）
- 适用范围： 场址特定（`site_specific`）
原始活动或阶段基准：每 kg 进入起挖的根.

- 归一化基准：每声明的参考流
- 基准类型： 过程产出（`process_output`）
- 证据类型： 由采集数据计算（`calculated_from_collection`）
- 采集协议： `cp_mass_balance`
- 数量范围： 内部转移恒等范围
  - 范围角色： 允许范围（`allowed_range`）
  - 下限： 1
  - 上限： 1
  - 单位： kg/kg roots entering lifting
  - 基准： 同批次上游产出与下游投入相等
  - 基准类型： 过程产出（`process_output`）
  - 证据类型： 方法公式（`method_formula`）
  - 来源： `mass-balance-identity`

###### 中压电力投入（`lifting_energy`）

仅当声明的过程实际使用中压电力时纳入此条件卡。其他实际产品或能源须各自建立单一交换，记录独立身份和实测数量；不得从本示例推定其必然使用。

- 选定流：中压电力
- 流属性/单位：能量 / kWh
- 数量规则：记录该过程和期间实际使用的中压电力数量；只有路线记录证明未使用时，才填零或不适用。
- 数值来源模式： 前景记录（`foreground_record`）
- 适用范围： 技术特定（`technology_specific`）
原始活动或阶段基准：每 kg 进入起挖的根.

- 归一化基准：每声明的参考流
- 基准类型： 过程产出（`process_output`）
- 证据类型： 采集记录（`collected_record`）
- 采集协议： `cp_energy`

###### 柴油投入（`lifting_energy_diesel`）

仅当声明的过程实际使用柴油时纳入此条件卡。其他实际产品或能源须各自建立单一交换，记录独立身份和实测数量；不得从本示例推定其必然使用。

- 选定流：柴油
- 流属性/单位：质量 / kg
- 数量规则：记录该过程和期间实际使用的柴油数量；只有路线记录证明未使用时，才填零或不适用。
- 数值来源模式： 前景记录（`foreground_record`）
- 适用范围： 技术特定（`technology_specific`）
原始活动或阶段基准：每 kg 进入起挖的根.

- 归一化基准：每声明的参考流
- 基准类型： 过程产出（`process_output`）
- 证据类型： 采集记录（`collected_record`）
- 采集协议： `cp_energy`

##### 废物流

##### 基本流

#### 输出
##### 产品流

###### 已起挖根 (`lifted_roots`)

在所声明过程边界按已索引批次或运行记录此流；按指定协议定量，并明确其物理状态与去向。

- 选定流： 带附着土和叶部的已起挖菊苣根
- 流属性/单位：质量 / kg
- 数量规则： 称量整理过程接收的流。
- 数值来源模式： 前景记录（`foreground_record`）
- 适用范围： 场址特定（`site_specific`）
原始活动或阶段基准：每 kg 进入起挖的根.

- 归一化基准：每声明的参考流
- 基准类型： 过程产出（`process_output`）
- 证据类型： 采集记录（`collected_record`）
- 采集协议： `cp_mass_balance`
- 数量范围： 已起挖根平衡范围
  - 范围角色： 允许范围（`allowed_range`）
  - 下限： 0
  - 上限： 1
  - 单位： kg/kg roots entering lifting
  - 基准： 每 kg 待收获根对应已起挖流
  - 基准类型： 过程产出（`process_output`）
  - 证据类型： 方法公式（`method_formula`）
  - 来源： `mass-balance-identity`

##### 废物流

###### 起挖损失 (`lifting_losses`)

在所声明过程边界按已索引批次或运行记录此流；按指定协议定量，并明确其物理状态与去向。

- 选定流： 未回收或受损根及夹带物
- 流属性/单位：质量 / kg
- 数量规则： 由田间抽样估算并声明留田或移除。
- 数值来源模式： 计算值（`calculated_value`）
- 适用范围： 技术特定（`technology_specific`）
原始活动或阶段基准：每 kg 进入起挖的根.

- 归一化基准：每声明的参考流
- 基准类型： 过程产出（`process_output`）
- 证据类型： 由采集数据计算（`calculated_from_collection`）
- 采集协议： `cp_mass_balance`
- 数量范围： 暂定起挖损失比例
  - 范围角色： QA 校验范围（`qa_guardrail`）
  - 下限： 0
  - 上限： 0.5
  - 单位： kg/kg roots entering lifting
  - 基准： loss 每 kg 进入起挖的根
  - 基准类型： 过程产出（`process_output`）
  - 证据类型： 推理估算（`reasoned_estimate`）

##### 基本流

### 过程：修整与去土 (`primary_conditioning`)

#### 输入
##### 产品流

###### 已起挖根 entering conditioning (`roots_to_conditioning`)

在所声明过程边界按已索引批次或运行记录此流；按指定协议定量，并明确其物理状态与去向。

- 选定流： 带附着土和叶部的已起挖菊苣根
- 流属性/单位：质量 / kg
- 数量规则： 使用同批次实测 `lifted_roots`。
- 数值来源模式： 前景记录（`foreground_record`）
- 适用范围： 场址特定（`site_specific`）
原始活动或阶段基准：每 kg 已起挖根.

- 归一化基准：每声明的参考流
- 基准类型： 过程产出（`process_output`）
- 证据类型： 采集记录（`collected_record`）
- 采集协议： `cp_conditioning`
- 数量范围： 内部转移恒等范围
  - 范围角色： 允许范围（`allowed_range`）
  - 下限： 1
  - 上限： 1
  - 单位： kg/kg lifted roots
  - 基准： 同批次起挖产出与整理投入相等
  - 基准类型： 过程产出（`process_output`）
  - 证据类型： 方法公式（`method_formula`）
  - 来源： `mass-balance-identity`

###### 初级整理用水 (`conditioning_water`)

在所声明过程边界按已索引批次或运行记录此流；按指定协议定量，并明确其物理状态与去向。

- 选定流： 去土和可选清洗使用的工艺水
- 流属性/单位：体积 / m3
- 数量规则： 计量总进水量与回用量；未清洗时数量为零。
- 数值来源模式： 前景记录（`foreground_record`）
- 适用范围： 技术特定（`technology_specific`）
原始活动或阶段基准：每 kg 已起挖根.

- 归一化基准：每声明的参考流
- 基准类型： 过程产出（`process_output`）
- 证据类型： 采集记录（`collected_record`）
- 采集协议： `cp_conditioning`
- 数量范围： 暂定初级整理用水筛查范围
  - 范围角色： QA 校验范围（`qa_guardrail`）
  - 下限： 0
  - 上限： 20
  - 单位： L/kg lifted roots
  - 基准： 每 kg 已起挖根的总进水量
  - 基准类型： 过程产出（`process_output`）
  - 证据类型： 推理估算（`reasoned_estimate`）

###### 中压电力投入（`conditioning_energy`）

仅当声明的过程实际使用中压电力时纳入此条件卡。其他实际产品或能源须各自建立单一交换，记录独立身份和实测数量；不得从本示例推定其必然使用。

- 选定流：中压电力
- 流属性/单位：能量 / kWh
- 数量规则：记录该过程和期间实际使用的中压电力数量；只有路线记录证明未使用时，才填零或不适用。
- 数值来源模式： 前景记录（`foreground_record`）
- 适用范围： 技术特定（`technology_specific`）
原始活动或阶段基准：每 kg 已起挖根.

- 归一化基准：每声明的参考流
- 基准类型： 过程产出（`process_output`）
- 证据类型： 采集记录（`collected_record`）
- 采集协议： `cp_conditioning`

###### 柴油投入（`conditioning_energy_diesel`）

仅当声明的过程实际使用柴油时纳入此条件卡。其他实际产品或能源须各自建立单一交换，记录独立身份和实测数量；不得从本示例推定其必然使用。

- 选定流：柴油
- 流属性/单位：质量 / kg
- 数量规则：记录该过程和期间实际使用的柴油数量；只有路线记录证明未使用时，才填零或不适用。
- 数值来源模式： 前景记录（`foreground_record`）
- 适用范围： 技术特定（`technology_specific`）
原始活动或阶段基准：每 kg 已起挖根.

- 归一化基准：每声明的参考流
- 基准类型： 过程产出（`process_output`）
- 证据类型： 采集记录（`collected_record`）
- 采集协议： `cp_conditioning`

##### 废物流

##### 基本流

#### 输出
##### 产品流

###### 整理后根 (`prepared_roots`)

在所声明过程边界按已索引批次或运行记录此流；按指定协议定量，并明确其物理状态与去向。

- 选定流： 经修整和去土的鲜菊苣根
- 流属性/单位：质量 / kg
- 数量规则： 在分级交接点称量。
- 数值来源模式： 前景记录（`foreground_record`）
- 适用范围： 场址特定（`site_specific`）
原始活动或阶段基准：每 kg 已起挖根.

- 归一化基准：每声明的参考流
- 基准类型： 过程产出（`process_output`）
- 证据类型： 采集记录（`collected_record`）
- 采集协议： `cp_conditioning`
- 数量范围： 整理后根平衡范围
  - 范围角色： 允许范围（`allowed_range`）
  - 下限： 0
  - 上限： 1
  - 单位： kg/kg lifted roots
  - 基准： 每 kg 已起挖根对应整理后根
  - 基准类型： 过程产出（`process_output`）
  - 证据类型： 方法公式（`method_formula`）
  - 来源： `mass-balance-identity`

##### 废物流

###### 菊苣修整固体残渣，送往处理（`conditioning_residues`）

仅在菊苣修整固体残渣，送往处理跨越声明的过程边界时记录；保留批次、物理状态、适用时的组成及实际去向。其他材料独立记录，不得将本卡用作选择器或材料集合。
原始活动或阶段基准：每 kg 已起挖根。

- 选定流：菊苣修整固体残渣，送往处理
- 流属性/单位：质量 / kg
- 数量规则：实测菊苣修整固体残渣，送往处理的净数量，与关联批次和过程平衡核对后，仅归一到声明参考输出一次；保留含水率及适用的密度换算证据。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每声明的参考流
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_conditioning`

###### 菊苣根清理出的土壤，送往处置（`conditioning_residues_chicory_soil`）

仅在菊苣根清理出的土壤，送往处置跨越声明的过程边界时记录；保留批次、物理状态、适用时的组成及实际去向。其他材料独立记录，不得将本卡用作选择器或材料集合。
原始活动或阶段基准：每 kg 已起挖根。

- 选定流：菊苣根清理出的土壤，送往处置
- 流属性/单位：质量 / kg
- 数量规则：实测菊苣根清理出的土壤，送往处置的净数量，与关联批次和过程平衡核对后，仅归一到声明参考输出一次；保留含水率及适用的密度换算证据。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每声明的参考流
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_conditioning`

###### 菊苣清洗废水，送往处理（`conditioning_residues_chicory_wastewater`）

仅在菊苣清洗废水，送往处理跨越声明的过程边界时记录；保留批次、物理状态、适用时的组成及实际去向。其他材料独立记录，不得将本卡用作选择器或材料集合。
原始活动或阶段基准：每 kg 已起挖根。

- 选定流：菊苣清洗废水，送往处理
- 流属性/单位：体积 / m3
- 数量规则：实测菊苣清洗废水，送往处理的净数量，与关联批次和过程平衡核对后，仅归一到声明参考输出一次；保留含水率及适用的密度换算证据。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每声明的参考流
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_conditioning`

##### 基本流

### 过程：分级与交付 (`grading_farm_gate`)

#### 输入
##### 产品流

###### 整理后根 entering grading (`roots_to_grading`)

在所声明过程边界按已索引批次或运行记录此流；按指定协议定量，并明确其物理状态与去向。

- 选定流： 经修整和去土的鲜菊苣根
- 流属性/单位：质量 / kg
- 数量规则： 使用同批次和运行的 `prepared_roots`。
- 数值来源模式： 前景记录（`foreground_record`）
- 适用范围： 场址特定（`site_specific`）
原始活动或阶段基准：每 kg 整理后根.

- 归一化基准：每声明的参考流
- 基准类型： 过程产出（`process_output`）
- 证据类型： 采集记录（`collected_record`）
- 采集协议： `cp_grading`
- 数量范围： 内部转移恒等范围
  - 范围角色： 允许范围（`allowed_range`）
  - 下限： 1
  - 上限： 1
  - 单位： kg/kg prepared roots
  - 基准： 同批次整理产出与分级投入相等
  - 基准类型： 过程产出（`process_output`）
  - 证据类型： 方法公式（`method_formula`）
  - 来源： `mass-balance-identity`

##### 废物流

##### 基本流

#### 输出
##### 产品流

###### 合格鲜菊苣根 (`accepted_chicory_roots`)

在所声明过程边界按已索引批次或运行记录此流；按指定协议定量，并明确其物理状态与去向。

- 选定流： 菊苣根 `8691795b-78fb-4573-9e09-d4957c166bb4`
- 流属性/单位： 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
原始产出计量与核对要求：计量交付时符合声明等级的净质量；此为参考产出。

- 数量规则：1 千克
- 数值来源模式： 前景记录（`foreground_record`）
- 适用范围： 场址特定（`site_specific`）
原始活动或阶段基准：每 1 kg 参考产品.

- 归一化基准：每声明的参考流
- 基准类型： 参考流（`reference_flow`）
- 证据类型： 采集记录（`collected_record`）
- 采集协议： `cp_grading`
- 数量范围： 参考产出恒等范围
  - 范围角色： 允许范围（`allowed_range`）
  - 下限： 1
  - 上限： 1
  - 单位： kg
  - 基准： 每 1 kg 参考产品
  - 基准类型： 参考流（`reference_flow`）
  - 证据类型： 方法公式（`method_formula`）
  - 来源： `reference-flow-identity`

###### 降级根 (`downgraded_roots`)

在所声明过程边界按已索引批次或运行记录此流；按指定协议定量，并明确其物理状态与去向。

- 选定流： 送往已声明低等级或加工目的地的鲜根
- 流属性/单位：质量 / kg
- 数量规则： 称量仍为产品但不符合参考等级的根；记录去向并从合格产出中排除。
- 数值来源模式： 前景记录（`foreground_record`）
- 适用范围： 场址特定（`site_specific`）
原始活动或阶段基准：每 kg 整理后根.

- 归一化基准：每声明的参考流
- 基准类型： 过程产出（`process_output`）
- 证据类型： 采集记录（`collected_record`）
- 采集协议： `cp_grading`
- 数量范围： 降级量平衡范围
  - 范围角色： 允许范围（`allowed_range`）
  - 下限： 0
  - 上限： 1
  - 单位： kg/kg prepared roots
  - 基准： 每 kg 整理后根对应降级产品
  - 基准类型： 过程产出（`process_output`）
  - 证据类型： 方法公式（`method_formula`）
  - 来源： `mass-balance-identity`

##### 废物流

###### 分级拒收根 (`grading_rejects`)

在所声明过程边界按已索引批次或运行记录此流；按指定协议定量，并明确其物理状态与去向。

- 选定流： 退出产品用途的规格外、受损或腐败根
- 流属性/单位：质量 / kg
- 数量规则： 称量并声明重新分级、返回整理、回收、饲用、处理或处置；每个返工循环仅计一次。
- 数值来源模式： 前景记录（`foreground_record`）
- 适用范围： 场址特定（`site_specific`）
原始活动或阶段基准：每 kg 整理后根.

- 归一化基准：每声明的参考流
- 基准类型： 过程产出（`process_output`）
- 证据类型： 采集记录（`collected_record`）
- 采集协议： `cp_grading`
- 数量范围： 拒收量平衡范围
  - 范围角色： 允许范围（`allowed_range`）
  - 下限： 0
  - 上限： 1
  - 单位： kg/kg prepared roots
  - 基准： 每 kg 整理后根对应拒收物
  - 基准类型： 过程产出（`process_output`）
  - 证据类型： 方法公式（`method_formula`）
  - 来源： `mass-balance-identity`

##### 基本流

## 7. 分配与联产品处理

| rule_id | 适用于 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_avoid` | all nodes | 优先按批次和运行细分并直接测量。 | `iso-14044-2006` |
| `allocation_grades` | accepted and downgraded roots | 分别报告质量；若两者均有价值且无法细分，应声明研究采用的分配方法并提供未分配清单。不得将降级根计入合格根。 | `iso-14044-2006` |
| `allocation_residues` | tops, soil, losses and rejects | 除非有文件证明产品功能和去向可支持分配，否则负荷保留在产生节点。 | `iso-14044-2006` |
| `allocation_runs_rework` | shared runs and rework | 共享负荷按实测用量、时间、面积或质量仅分配一次；返回材料保留既有负荷且只增加返工负荷。 | `mass-balance-identity` |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_residual_precedence` | 未规定主方法分支的剩余共同负担 | 本 PCR 要求研究作联产品分配决策但未规定主方法的地方，统一执行以下优先顺序；已明确规定的类别专属主方法保持有效。先直接归属可分开的产出专属作业。剩余共同负担 B 只有在实测作业或生物服务记录证明驱动量 d_i 代表因果消耗时，才采用该物理驱动。产品可称量、有价值或等级较低本身均不构成因果依据，不能在面积、时间、质量和收入间任意切换。可比等级接受相同共同搬运服务时，仅在服务需求、状态及水分基准可比且有据时采用实测处理质量。份额 a_i=d_i/sum(d_j)，B_i=B*a_i。该共同作业没有可辩护的因果物理驱动时，采用同交接点、同期间经济份额 a_i=(q_i*p_i)/sum(q_j*p_j)，纳入全部独立预期产出，匹配数量/价格单位、币种和代表性价格，使用产出专属下游加工之前的价值。缺价格或分母证据使分配结果不完整，不能把产品价格记零或改称单一产出系统。披露合计为一的份额和重要替代方法敏感性；敏感性方法不是可任意替换的主结果。废物、留存残余和内部转移不获得联产品份额，其应归属的生产/处理负担仍保留在产出可售产品的路线中。未分配物理数量和质量平衡另行保留。本分支不自动给予替代信用；单独界定的替代情景须保留总清单及实际被替代功能证据。 | `ghg-protocol-product-standard-2011` |

## 8. 前景数据采集、计算与质量规则

清单完整性：具名条件卡是单项交换示例，不是穷尽配方，也不要求使用这些产品。完成前景数据包前，逐项列出所有实际种植材料、养分产品、作物保护制剂、资产材料、作业服务、载能体、包装材料、废物流及适用的基本物质，使用明确的物理身份、状态、原始属性/单位、来源或接收区室及实测或按方法计算的数量。身份或数量缺失属于完整性缺口，不得假定为零。保留实际批次和阶段基准；不得将中间转移累加为额外最终产出，也不得重复计入采购服务已包含的负荷。

先按各采集协议保留原始场址、批次、周期及阶段数量与分母，并完成库存、损失、含水率和共产品归属核对；随后按实际归属的验收交付产品量归一化：归一化交换量 = 归属原始交换量 × 声明参考数量 / 同一边界和计量基准的验收产品量。多年生建植和共享作业先执行各自分摊规则，不得把内部转移数量设为最终参考数量。每声明的参考流指第 3 节的数量、单位和产品状态；数据包必须声明实际路线和门。


### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_field_inputs` | `field_production` | planting, each nutrient and crop-protection product | invoice/application/field records | lot; route; product; nutrient/active content; wet/dry basis; quantity; area; date | 每项实际产品/配方分开采集，保留其原子输入卡、实物产品质量、组成、供应方、施用事件和原始单位。核对库存和实际施用，分析计算养分而不重复产品交换，每个有据数量通过匹配最终合格产出归属并归一化一次。 | kg, kg active, ha | each operation | full cycle | field lot | 每声明的参考流 | invoice; label; applicator record |
| `cp_irrigation` | `field_production` | irrigation | meter/pump records | source; readings or flow/runtime; area; reuse | 在所定义接收边界计量实际外部交付灌溉产品，保留来源、责任方、计量位置、期间和损失。不将取水源表直接等同交付量，也不从已测外部交付量再扣内部循环/回用。水源供水网损失、回流和库存单独核对。实际自有直接取水采用单独相容基本资源流，声明边界内输水为内部转移；外购供水的上游取水只覆盖一次。有据原始数量按匹配合格产出归属并归一化一次。 | m3, ha | each event | full cycle | field lot | 每声明的参考流 | calibration; irrigation log |
| `cp_energy` | all processes | energy by operation | fuel/meter/machine logs | carrier; quantity; operation; runtime; area/mass; lot/run | Meter or reconcile fuel; assign shared use once；原始汇总与分配：Retain carrier exchange; normalize by causal driver | L, kg, kWh, MJ | each operation | full cycle through hand-off | lot/run | 每声明的参考流 | invoice; meter; equipment log |
| `cp_mass_balance` | field and lifting | roots, residues, losses, transfers | scale/sampling records | lot; gross/tare/net; moisture; tops; soil; loss; time | Calibrated weighing and representative sampling；原始汇总与分配：Reconcile inputs, outputs, residues and losses | kg, ha | each lot/handoff | harvest through lifting | field lot | 每声明的参考流 | calibration; sampling plan |
| `cp_field_emissions` | `field_production` | exact emissions | calculation record | nutrient form/N; application; soil/climate; substance; compartment; method | Apply named method to collected records；原始汇总与分配：Sum by substance and compartment | kg substance, kg N | each application/calculation | full cycle | field lot | 每声明的参考流 | inputs; method; audit trail |
| `cp_conditioning` | `primary_conditioning` | utilities, roots, residues, wastewater | meter/scale/run log | run/lot; roots; water; energy; tops; soil; wastewater; destinations | Meter utilities and weigh material states；原始汇总与分配：Reconcile solids and water separately | kg, L, kWh | each run | all included runs | site/run | 每声明的参考流 | calibration; run sheet; receipt |
| `cp_grading` | `grading_farm_gate` | accepted, downgraded, rejected, reworked | grade/dispatch log | run/lot; grade; each output mass; destination; rework; date | Calibrated weighing by output state；原始汇总与分配：Reconcile prepared input and outputs; count rework once | kg | each run/dispatch | all included runs | site/run | 每声明的参考流 | calibration; grade; dispatch |
| `cp_phase1_environment_coverage` | field_production | 按实际节点的管理环境覆盖 | 场址活动方法台账 | 场址及实际管理节点；面积；有日期占用区间；共同使用者；建植/未产期历史；实际前后土地类别及转化日期/面积；碳核算覆盖；上游土地覆盖 | 按实际负责生产节点及匹配批次/期间采集原始记录，保留来源、方法适用性和不确定性。与现有协议及供应覆盖核对，不新增重复事件；不适用须明示有据，缺少证据属于缺口。 | 适用的原生活动单位、kg N或物质、面积/时间 | 事件及年度/批次核对 | 匹配生产/队列期间 | 全部实际管理生产节点 | 执行适用覆盖核算后最终归一化一次 | 原始记录、方法工作表及适用性证据 |

### 计算规则

| rule_id | 适用于 | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_area_normalization` | field flows | amount per kg accepted roots = crop-cycle amount / accepted mass from the same area | amount; area; accepted mass | normalized exchange | `mass-balance-identity` |
| `calc_process_balance` | each hand-off | input mass = products + residues/rejects + measured loss on one mass state | calibrated masses; samples | closure difference | `mass-balance-identity` |
| `calc_direct_emissions` | field emissions | Apply the declared current method separately by substance and compartment | input and field records | kg substance by compartment | `ipcc-2019-refinement-volume4` |
| `calc_shared_energy` | shared equipment | consumption × causal share; shares sum to 1 | energy; time/area/mass | assigned energy | `mass-balance-identity` |
| `planting_material_identity_and_fate` | `field_production` | 对于本作业原有 planting_material 采集角色，建立交换前须确定实际物理形态、物种／材料、组成、状态及供给／处理边界。与该角色相关且实际使用／产生的各种种子批次、移栽苗、根冠、插条、幼虫阶段、配方、包衣、保藏剂或分离残余物须各有具体卡片；这些例子是备选，不是必需配方。保留原采集记录和路线特定来源证据。计数种植记录匹配按质量的供应数据时，须使用实测或供应商支持的单位质量；计数与质量是关联属性，不是两次采购。不得合并独立果壳／外皮或不同药剂；真实混合物流须有组成与接收者证据且只计一次。完整性通过前，记录每项适用数量和原生单位、链接相容的已核验 UUID 或明确未解析身份，保留库存／退回归属，并将可归属原始数量按合格参考产出归一化一次。缺失记录不是零，原聚合范围不是单项投入默认值。 | `cp_field_inputs` | 按身份区分的交换和对账活动记录 | `umn-forcing-chicories-2023` |
| `chemical_species_mass_accounting` | `elementary_nutrient_emissions` | 最终基本交换使用已识别物质的质量和一个实际接收环境，养分／活动台账另存：该物种的 N2O-N × 44/28 为 N2O，NH3-N × 17/14 为 NH3，硝酸盐氮 × 62/14 为硝酸盐，磷酸盐磷 × 95/31 为磷酸盐。若选定流为元素磷，则报告 kg P，仅在物种口径有据时将磷酸盐质量乘 31/95。只有方法输出按元素计时才换算一次，实测化合物质量不得再换算。总养分损失不得无据归于单一物种，土壤残余／留存养分不是排放。保留直接／间接路径台账，不重复所选方法或上游清单已经包含的路径。因子不确定性范围只按其声明基准检查因子，不是最终化合物数量或场址排放的允许界限。用合格参考数量和匹配实测产出，将可归属化合物质量归一化一次。活动量、身份或接收环境未知时保留证据缺口，不得宣称完整。 | `cp_field_emissions`; 物种特定活动量台账、方法路径和因子基准、匹配合格产出 | 按身份区分的交换和对账活动记录 |  |

### 环境覆盖计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_managed_land_coverage` | 实际管理生产节点 | 逐实际自主管理生产场址采集占用面积及有日期的占用区间，包括应归属的建植/未产期与生产期。占用量为面积乘实际时长，明确换为所选面积时间单位（1 ha=10,000 m2，时间按年）；只有每作物周期公顷数而无时长不能得到面积时间。建立、管理区间重叠时划分区间或取并集，同一面积时间只计一次，实际共同使用者份额合计为一。土地转化按声明土地利用方法，另记实际前/后土地类别、事件面积和日期；转化使用面积单位，不能与占用量相加。种植、持续占用或前土地资料缺失不能证明发生转化，也不能证明零转化。适用时保留历史事件归属及碳库/排放方法覆盖，不编造转化或通用固碳信用。分别建立兼容基本流身份，采用已核实UUID或明确未决身份，归属一次后按匹配最终参考产出归一化。外购已完成的生物投入承接兼容上游土地覆盖一次，不在本地重复。适用土地身份、面积、时长或前状态证据缺失属于完整性缺口；有据无转化可记录为不适用。 | cp_phase1_environment_coverage | 按匹配最终参考量的应归属原生环境数量 |  |

### 数据质量要求

| requirement_id | 适用于 | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | reference product | 将品种/用途、等级、修整、洁净和含水状态关联到每一批质量。 | grade, lot and dispatch records |
| `dq_coverage` | inventory | 覆盖一个完整作物周期及所有贡献的起挖、整理和分级运行。 | dated field/run logs |
| `dq_measurement` | mass, water, energy | 使用校准仪器，或记录计算、抽样与不确定性。 | calibration and sampling records |
| `dq_route` | alternatives | 在完成路线特定投入、产量和损失计算前保持建植与起挖路线分离。 | route-indexed records |
| `dq_completeness` | nutrients and outputs | 将种植材料、每种实际肥料/改良剂配方、植保产品、水、能源、产出、降级/拒收、残余和排放驱动与原始记录核对。每种实际肥料/改良剂采用单独原子产品输入卡，保留产品质量、组成和施用记录；养分当量为属性/计算输入，不是重复产品数量。UUID缺失保留明确待核验状态。 | input ledger; balance report |

## 9. 验证规则

| rule_id | 适用于 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validate_identity` | reference flow | 确认 UUID、1 kg 净质量、鲜未加工根状态和限定信息；拒绝芽球、叶、烘焙根或提取物数据集。 | `ucd-witloof-chicory`; `umn-forcing-chicories-2023` |
| `validate_topology` | process graph | 要求田间、起挖、整理和分级交接；清洗为条件过程，强制栽培及后续加工不得出现。 | `umn-forcing-chicories-2023` |
| `validate_route_delta` | alternatives | 要求父过程、批次级路线及种植、能源、损失或整理记录变化的证据；同一批次不得混合互斥路线。 | `umn-forcing-chicories-2023` |
| `validate_nutrients` | field inputs | 分别核验每种实际交换的具体流 UUID、物理状态、流属性和单位；未确认时明确保留未解析身份。 | `omafra-root-chicory` |
| `validate_mass_balance` | hand-offs | 在同一状态核对投入与产品、残余物/拒收物及损失；调查无法解释的平衡差。 | `mass-balance-identity` |
| `validate_reject_routing` | grade/rework | 为每个降级或拒收状态指定去向；返回材料仅增加增量负荷，并须重新通过等级后方可成为合格产出。 | `mass-balance-identity` |
| `validate_run_attribution` | shared operations | 验证批次/运行索引且份额之和为 1，确保清洁、能源与返工仅计一次。 | `mass-balance-identity` |
| `validate_ranges` | inventory | 逐条检查已提供范围的上下限、单位、基准、证据及双语一致性。任何强制界限均须有相容定量证据；无支持界限时保留实测数量并明确报告范围筛查不可用，不得编造范围或宣称该项检查完整。调查偏离，不以范围覆盖实测值。 | |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 农场门鲜未加工菊苣根前景生产数据集 |
| downstream_use | `secondary_dataset`；具有代表性时可作 `background_dataset` |
| allowed_use | 鲜根及自行添加农场后过程的强制栽培、食品、饲料或配料系统 LCA |
| excluded_use | 不得直接代表强制芽球、叶用菊苣、烘焙菊苣、咖啡替代品、提取物、种子或加工根 |
| 必需_metadata | 地域；批次/周期；品种/用途；建植与起挖路线；产量；灌溉；养分台账；整理；等级去向；含水状态；年份 |
| 必需_quality_disclosure | 原始数据占比；代表性；平衡闭合；路线分离；不确定性；超出范围的处理 |
| update_trigger | 路线、技术、灌溉/养分、产量、整理、等级、拒收去向、地域或数据时效发生实质变化 |

## 11. 数据来源

| 来源 id | 类型 | 文献 | 用途 |
| --- | --- | --- | --- |
| `umn-forcing-chicories-2023` | extension_guidance | University of Minnesota Extension (2023), “Forcing Chicories,” https://blog-fruit-vegetable-ipm.extension.umn.edu/2023/01/forcing-chicories-opportunity-for.html | 建植、起挖、修整及强制栽培区分 |
| `ucd-witloof-chicory` | official_guidance | USDA/UC Davis, “Chicory (Belgian Endive or Witloof Chicory),” https://www.govinfo.gov/content/pkg/GOVPUB-A-PURL-gpo87416/pdf/GOVPUB-A-PURL-gpo87416.pdf | 根/芽球身份及强制栽培排除 |
| `omafra-root-chicory` | official_guidance | Ontario Ministry of Agriculture, “Specialty Cropportunities — Root Chicory,” https://www.omafra.gov.on.ca/CropOp/en/indus_misc/pharm/chic.html | 田间、灌溉与养分背景 |
| `usu-chicory-garden` | extension_guidance | Utah State University Extension, “How to Grow Chicory in Your Garden,” https://extension.usu.edu/yardandgarden/research/chicory-in-the-garden | 灌溉与作物管理背景 |
| `cwalina-root-chicory-n-2022` | literature | Cwalina-Ambroziak et al. (2022), doi:10.24326/asphc.2022.5.8 | 根产量校验范围与氮响应差异 |
| `ipcc-2019-refinement-volume4` | method_factor | IPCC 2019 Refinement, Volume 4 | 受管土壤排放方法身份 |
| `iso-14044-2006` | standard | ISO 14044:2006 | 分配层级 |
| `mass-balance-identity` | method_factor | Conservation of mass on declared states | 转移、平衡与共享归属 |
| `reference-flow-identity` | method_factor | PCR reference-flow normalization identity | 精确参考产出 |
| `ghg-protocol-product-standard-2011` | standard | WRI/WBCSD, Product Life Cycle Accounting and Reporting Standard (2011), Chapter 9, https://ghgprotocol.org/sites/default/files/standards/Product-Life-Cycle-Accounting-Reporting-Standard_041613.pdf | 一般分配优先顺序及可比交接点经济价值基准。适用条件和明确的剩余分支是本 PCR 的方法约定；该来源不规定本产品因果系数、价格或产出数量。 |
