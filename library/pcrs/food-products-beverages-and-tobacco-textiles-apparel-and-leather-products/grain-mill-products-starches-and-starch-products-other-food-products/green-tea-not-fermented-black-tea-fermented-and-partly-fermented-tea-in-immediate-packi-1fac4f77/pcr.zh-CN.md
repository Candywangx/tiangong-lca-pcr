---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.grain-mill-products-starches-and-starch-products-other-food-products.green-tea-not-fermented-black-tea-fermented-and-partly-fermented-tea-in-immediate-packi-1fac4f77
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 绿茶（未发酵）、红茶（发酵）及部分发酵茶，采用内容量不超过3千克的即时包装

## 1. 范围与适用性

本 PCR 覆盖以声明净含量不超过 3 kg 的即时包装投放市场的干燥绿茶、红茶和部分发酵茶，支持制茶、适用时的精制或拼配以及即时包装的前景数据包。生产者必须声明数据集代表的具体茶叶形态、氧化或发酵状态、加工路线、配料或处理方式以及包装配置。

草本浸泡饮品、马黛茶、茶提取物、香精、浓缩物、速溶茶制品、即饮饮料以及超过 3 kg 的即时包装不属于本类别。调味、窨香、脱咖啡因、烘焙或拼配产品仅在其声明产品仍归入 CPC 3.0 代码 23913 时覆盖；此时必须纳入并披露所有附加配料和加工步骤。

下方选定的天工参考产品流是 CPC 23913 的精确类别标注代表流，但不能证明每种具体绿茶、红茶、部分发酵茶、散叶、碎茶或茶包产品都具有同一身份。数据生产者必须在存在更匹配实际产品形态的真实天工产品流时改用该流，绝不能把代表 UUID 静默用于不同形态。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.grain-mill-products-starches-and-starch-products-other-food-products.green-tea-not-fermented-black-tea-fermented-and-partly-fermented-tea-in-immediate-packi-1fac4f77 |
| classification_refs | CPC 3.0: 23913 |
| covered_products | 采用声明净含量不超过 3 kg 即时包装的绿茶（未发酵）、红茶（发酵）和部分发酵茶；仅当仍归入 CPC 23913 时包括路线特定的调味、窨香、脱咖啡因、烘焙或拼配变体 |
| excluded_products | 草本浸泡饮品；马黛茶；茶提取物、香精、浓缩物和速溶茶制品；即饮茶饮料；超过 3 kg 的即时包装；归入 CPC 23913 之外的产品 |
| representative_product | 采用不超过 3 kg 即时包装的精确类别标注干茶；具体数据集必须识别绿茶、红茶或部分发酵茶及其实际形态 |
| production_route | 从接收鲜茶原料或外购成品茶开始进行路线特定转换，随后进行适用的精制或拼配和即时包装 |
| market_state | 以声明的即时包装配置供销售的干茶，净含量不超过 3 kg |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 以其声明即时包装配置供应的干燥绿茶、红茶或部分发酵茶 |
| How much | 1 kg 茶叶净含量，不含包装质量 |
| How well | 符合声明的茶叶身份、加工路线、商业规格、配料声明和包装配置 |
| How long or cycle | 非耐用品在包装输出门的一次交付，不赋予服务期限 |
| reference_flow_link | 参考流是实现功能单位所需的净合格包装茶输出 |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 即时包装输出门的 1 kg 茶叶净含量 |
| 参考产品流 | Green tea (not fermented), black tea (fermented) and partly fermented tea, in immediate packings of a content not exceeding 3 kg `549f6c0d-6dd6-488d-a7c4-b1d5821fe309` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 具体茶叶形态；发酵状态（绿茶 / 红茶 / 部分发酵）；呈现方式（散装 / 袋装 / 其他）；每个即时包装的净含量；包装材料和组件配置；鲜叶或成品茶起始条件；加工和精制路线；配料与处理；生产地域；报告期；水分基准；分配方法 |

构建前景数据包时，`必需限定信息` 中的每项信息必须在数据集元数据、过程说明、参考流备注、产品说明或等效数据包字段中声明。缺少限定信息会使参考流不完整。分配代表 UUID 前，必须检索并在其匹配声明茶叶形态时使用更具体的真实产品流；若保留代表流，必须说明它是类别级代表，且不得暗示更窄的产品身份。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_net_mass` | 包装茶参考输出 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 将数据集归一化到包装输出门 1 kg 净合格茶叶；参考数量排除全部包装质量。 |
| `packaging_mass_separation` | 即时包装组件 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 将各包装组件与茶叶净质量分开计量或计算，并按 1 kg 参考流报告。 |
| `package_content_limit` | 所代表的每种即时包装 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 通过生产或标签记录核实所代表每种即时包装格式的声明净含量均不大于 3 kg。 |
| `moisture_basis` | 茶叶原料、中间体和输出 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 为物料质量比较记录实测或规格水分，并披露数值采用收到状态还是干物质基准；没有记录水分值时不得换算基准。 |
| `energy_conversion` | 计量电力和燃料 | 声明的能量或燃料属性 | 声明的原始单位，换算时使用 MJ 或 kWh | 保留原始计量或采购单位并记录每个换算因子；不得用无引用的通用能耗强度替代路线特定实测值。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 当前景控制初制时为接收鲜茶芽叶；当前景经营者从成品茶开始时为接收外购成品茶 |
| starting_condition_role | 进入受控前景系统的首个物理计量茶叶原料输入 |
| product_classification_scope | CPC 3.0 代码 23913 输出：采用净含量不超过 3 kg 即时包装的绿茶、红茶或部分发酵茶 |
| recursive_input_rule | 如果输入本身是 CPC 23913 包装茶产品，将其记录为具有上游数据集的独立技术圈输入并披露重新包装或进一步加工；不得在同一过程中递归重建其既往生产，也不得将其重新标为新制茶。 |
| upstream_dataset_requirement | 受控前景之外产生的每项鲜叶、外购成品茶、配料、包装、能源、水、运输和废物处理输入都必须关联地域和时间具有代表性的上游数据集，或明确记录数据缺口。 |
| disclosure | 声明起始物料状态、受控过程步骤、排除步骤、茶类和形态、包装格式与净含量、地域、报告期、供应商数据覆盖范围及所有替代或代理。 |

| rule_id | 适用对象 | 规则 | 来源 |
| --- | --- | --- | --- |
| `boundary_route_steps` | 受控制茶 | 纳入从声明起始条件到成品茶之间实际实施的每个路线步骤，包括路线适用的萎凋或热处理、揉捻或破碎、氧化或发酵、干燥、分级和搬运；不适用步骤应明确标注，不得假定所有茶叶形态采用同一路线。 | `fao-tea-processing-2005` |
| `boundary_packaging` | 即时包装产品 | 纳入适用时的填充、茶包或内包装成型、即时容器组件、标签和封口、可归属的二级或三级包装、包装损耗以及将参考产品投放市场所需的包装线能源。 | `eu-pef-2021`; `iso-3720-2011`; `iso-11287-2011` |
| `boundary_upstream_links` | 前景控制之外的输入 | 通过明确的上游数据集关联被排除的上游生产、入厂运输、公用工程、配料、包装制造和废物处理；说明并披露任何省略过程。 | `eu-pef-2021` |
| `boundary_outputs` | 前景输出 | 识别参考包装茶、可销售共产品、可回收副产品、降级茶、茶渣、包装废料、废水、粉尘以及发生时的直接燃烧或过程排放。 | `eu-pef-2021` |
| `boundary_no_silent_scope_shift` | 产品身份和起始条件 | 不得用类别代表流掩盖不同茶叶形态、超过 3 kg 的包装、提取物或饮料，也不得掩盖缺失所需上游数据集关联的门到门起始条件。 | `un-cpc-v3-23913` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `tea_primary_manufacture` | 路线特定制茶 | `conditional` | 当前景系统接收鲜茶芽叶并控制其转化为成品茶时纳入。 | 前景制造 | 离开初制过程的成品茶 kg |
| `tea_finishing_blending` | 茶叶精制、分级或拼配 | `conditional` | 当声明 CPC 23913 产品路线中实施筛分、分级、拼配、烘焙、脱咖啡因、窨香、调味或其他精制操作时纳入。 | 前景精制 | 送至包装的精制茶 kg |
| `tea_immediate_packaging` | 茶叶即时包装 | `required` | 对类别输出始终纳入。 | 前景包装与定量参考过程 | 1 kg 净合格包装茶输出 |

### 过程：路线特定制茶（`tea_primary_manufacture`）

#### 输入

##### 产品流

###### 接收鲜茶芽叶（`fresh_tea_shoots_leaves`）

单独记录该交换，确保一行只识别一个物理或化学流。

- 适用性：声明路线中存在该原子交换时纳入；仅在有记录证明未发生时省略。
- 选定流：新鲜茶树芽叶
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：依据所引用前景采集协议计量、核对或计算该原子交换数量
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：产品特定 (`product_specific`)
- 归一化基准：每 kg 本过程实测成品茶输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_tea_material_receipts`
- 来源：
- 数量范围：宽泛暂定筛选范围
  - 范围角色：默认估计 (`default_estimate`)
  - 下限：0
  - 上限：10
  - 单位：kg
  - 基准：每 kg 本过程实测成品茶输出
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算 (`reasoned_estimate`)

###### 初制外购绿茶（`primary_purchased_green_tea`）

单独记录该交换，确保一行只识别一个物理或化学流。

- 适用性：本次转移中存在绿茶时纳入；保留形态和含水率基准。
- 选定流：未包装绿茶，未发酵
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：依据所引用前景采集协议计量、核对或计算该原子交换数量
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：产品特定 (`product_specific`)
- 归一化基准：每 kg 本过程实测成品茶输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_tea_material_receipts`
- 来源：
- 数量范围：宽泛暂定筛选范围
  - 范围角色：默认估计 (`default_estimate`)
  - 下限：0
  - 上限：10
  - 单位：kg
  - 基准：每 kg 本过程实测成品茶输出
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算 (`reasoned_estimate`)

###### 初制外购红茶（`primary_purchased_black_tea`）

单独记录该交换，确保一行只识别一个物理或化学流。

- 适用性：本次转移中存在红茶时纳入；保留形态和含水率基准。
- 选定流：未包装红茶，已发酵
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：依据所引用前景采集协议计量、核对或计算该原子交换数量
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：产品特定 (`product_specific`)
- 归一化基准：每 kg 本过程实测成品茶输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_tea_material_receipts`
- 来源：
- 数量范围：宽泛暂定筛选范围
  - 范围角色：默认估计 (`default_estimate`)
  - 下限：0
  - 上限：10
  - 单位：kg
  - 基准：每 kg 本过程实测成品茶输出
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算 (`reasoned_estimate`)

###### 初制外购部分发酵茶（`primary_purchased_partly_fermented_tea`）

单独记录该交换，确保一行只识别一个物理或化学流。

- 适用性：本次转移中存在部分发酵茶时纳入；保留形态和含水率基准。
- 选定流：未包装部分发酵茶
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：依据所引用前景采集协议计量、核对或计算该原子交换数量
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：产品特定 (`product_specific`)
- 归一化基准：每 kg 本过程实测成品茶输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_tea_material_receipts`
- 来源：
- 数量范围：宽泛暂定筛选范围
  - 范围角色：默认估计 (`default_estimate`)
  - 下限：0
  - 上限：10
  - 单位：kg
  - 基准：每 kg 本过程实测成品茶输出
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算 (`reasoned_estimate`)

###### 制茶高压电力（`primary_electricity_high_voltage`）

单独记录该交换，确保一行只识别一个物理或化学流。

- 适用性：适用于计量的 35–330 kV 电网供电点；不得把同一供电点重复计入其他电压卡。
- 选定流：高压交流电，35–330 kV，消费组合
- 流属性/单位：能量 / kWh
- 数量规则：依据所引用前景采集协议计量、核对或计算该原子交换数量
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 kg 本过程实测成品茶输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_energy_and_fuel_records`
- 来源：
- 数量范围：宽泛暂定筛选范围
  - 范围角色：默认估计 (`default_estimate`)
  - 下限：0
  - 上限：20
  - 单位：kWh
  - 基准：每 kg 本过程实测成品茶输出
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算 (`reasoned_estimate`)

###### 制茶中压电力（`primary_electricity_medium_voltage`）

单独记录该交换，确保一行只识别一个物理或化学流。

- 适用性：适用于计量的 1–35 kV 电网供电点；不得把同一供电点重复计入其他电压卡。
- 选定流：中压交流电，1–35 kV，消费组合
- 流属性/单位：能量 / kWh
- 数量规则：依据所引用前景采集协议计量、核对或计算该原子交换数量
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 kg 本过程实测成品茶输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_energy_and_fuel_records`
- 来源：
- 数量范围：宽泛暂定筛选范围
  - 范围角色：默认估计 (`default_estimate`)
  - 下限：0
  - 上限：20
  - 单位：kWh
  - 基准：每 kg 本过程实测成品茶输出
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算 (`reasoned_estimate`)

###### 制茶低压电力（`primary_electricity_low_voltage`）

单独记录该交换，确保一行只识别一个物理或化学流。

- 适用性：适用于计量的低于 1 kV 电网供电点；不得把同一供电点重复计入其他电压卡。
- 选定流：低压交流电，低于 1 kV，消费组合
- 流属性/单位：能量 / kWh
- 数量规则：依据所引用前景采集协议计量、核对或计算该原子交换数量
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 kg 本过程实测成品茶输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_energy_and_fuel_records`
- 来源：
- 数量范围：宽泛暂定筛选范围
  - 范围角色：默认估计 (`default_estimate`)
  - 下限：0
  - 上限：20
  - 单位：kWh
  - 基准：每 kg 本过程实测成品茶输出
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算 (`reasoned_estimate`)

###### 制茶场内光伏电力（`primary_electricity_onsite_photovoltaic`）

单独记录该交换，确保一行只识别一个物理或化学流。

- 适用性：仅适用于在声明前景边界内发电并消耗的光伏电力；不计外送电量。
- 选定流：场内光伏交流电
- 流属性/单位：能量 / kWh
- 数量规则：依据所引用前景采集协议计量、核对或计算该原子交换数量
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 kg 本过程实测成品茶输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_energy_and_fuel_records`
- 来源：
- 数量范围：宽泛暂定筛选范围
  - 范围角色：默认估计 (`default_estimate`)
  - 下限：0
  - 上限：20
  - 单位：kWh
  - 基准：每 kg 本过程实测成品茶输出
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算 (`reasoned_estimate`)

###### 制茶外购蒸汽热（`primary_purchased_steam`）

单独记录该交换，确保一行只识别一个物理或化学流。

- 适用性：仅在蒸汽热跨越前景边界时纳入；场内燃料卡已完整表示供热时省略。
- 选定流：蒸汽供热 `cbc1f372-5c64-4ad5-a938-89b9396758c9`
- 流属性/单位：总热值 `93a60a56-a3c8-14da-a746-0800200c9a66` / MJ
- 数量规则：依据所引用前景采集协议计量、核对或计算该原子交换数量
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：技术特定 (`technology_specific`)
- 归一化基准：每 kg 本过程实测成品茶输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_energy_and_fuel_records`
- 来源：
- 数量范围：宽泛暂定筛选范围
  - 范围角色：默认估计 (`default_estimate`)
  - 下限：0
  - 上限：50
  - 单位：MJ
  - 基准：每 kg 本过程实测成品茶输出
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算 (`reasoned_estimate`)

###### 制茶外购热水热（`primary_purchased_hot_water`）

单独记录该交换，确保一行只识别一个物理或化学流。

- 适用性：仅在作为热力供应的热水跨越前景边界时纳入；与蒸汽热分开记录。
- 选定流：外购热水热
- 流属性/单位：能量 / MJ
- 数量规则：依据所引用前景采集协议计量、核对或计算该原子交换数量
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：技术特定 (`technology_specific`)
- 归一化基准：每 kg 本过程实测成品茶输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_energy_and_fuel_records`
- 来源：
- 数量范围：宽泛暂定筛选范围
  - 范围角色：默认估计 (`default_estimate`)
  - 下限：0
  - 上限：50
  - 单位：MJ
  - 基准：每 kg 本过程实测成品茶输出
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算 (`reasoned_estimate`)

###### 制茶天然气（`primary_natural_gas`）

单独记录该交换，确保一行只识别一个物理或化学流。

- 适用性：仅在声明过程消耗气态天然气时纳入。
- 选定流：气态天然气 `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：依据所引用前景采集协议计量、核对或计算该原子交换数量
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：技术特定 (`technology_specific`)
- 归一化基准：每 kg 本过程实测成品茶输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_energy_and_fuel_records`
- 来源：
- 数量范围：宽泛暂定筛选范围
  - 范围角色：默认估计 (`default_estimate`)
  - 下限：0
  - 上限：10
  - 单位：kg
  - 基准：每 kg 本过程实测成品茶输出
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算 (`reasoned_estimate`)

###### 制茶液化石油气（`primary_lpg`）

单独记录该交换，确保一行只识别一个物理或化学流。

- 适用性：仅在声明过程消耗液化石油气时纳入。
- 选定流：液化石油气 `d54ae71a-1245-4e3f-b694-dbf2b22bbf7d`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：依据所引用前景采集协议计量、核对或计算该原子交换数量
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：技术特定 (`technology_specific`)
- 归一化基准：每 kg 本过程实测成品茶输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_energy_and_fuel_records`
- 来源：
- 数量范围：宽泛暂定筛选范围
  - 范围角色：默认估计 (`default_estimate`)
  - 下限：0
  - 上限：10
  - 单位：kg
  - 基准：每 kg 本过程实测成品茶输出
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算 (`reasoned_estimate`)

###### 制茶柴油（`primary_diesel`）

单独记录该交换，确保一行只识别一个物理或化学流。

- 适用性：仅在声明过程消耗柴油时纳入。
- 选定流：柴油 `9d258d75-6792-4f1c-9856-81602ed8f816`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：依据所引用前景采集协议计量、核对或计算该原子交换数量
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：技术特定 (`technology_specific`)
- 归一化基准：每 kg 本过程实测成品茶输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_energy_and_fuel_records`
- 来源：
- 数量范围：宽泛暂定筛选范围
  - 范围角色：默认估计 (`default_estimate`)
  - 下限：0
  - 上限：10
  - 单位：kg
  - 基准：每 kg 本过程实测成品茶输出
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算 (`reasoned_estimate`)

###### 制茶重质燃料油（`primary_heavy_fuel_oil`）

单独记录该交换，确保一行只识别一个物理或化学流。

- 适用性：仅在消耗所述硫含量等级的重质燃料油时纳入；不同等级须另行复核并单列。
- 选定流：重质燃料油，硫含量 1.0 wt.% `53afe53a-7bbc-4b82-8e39-df2c6bbb2c46`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：依据所引用前景采集协议计量、核对或计算该原子交换数量
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：技术特定 (`technology_specific`)
- 归一化基准：每 kg 本过程实测成品茶输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_energy_and_fuel_records`
- 来源：
- 数量范围：宽泛暂定筛选范围
  - 范围角色：默认估计 (`default_estimate`)
  - 下限：0
  - 上限：10
  - 单位：kg
  - 基准：每 kg 本过程实测成品茶输出
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算 (`reasoned_estimate`)

###### 制茶硬煤（`primary_hard_coal`）

单独记录该交换，确保一行只识别一个物理或化学流。

- 适用性：仅在消耗声明的硬煤等级时纳入；不得用于其他煤种。
- 选定流：硬煤
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：依据所引用前景采集协议计量、核对或计算该原子交换数量
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：技术特定 (`technology_specific`)
- 归一化基准：每 kg 本过程实测成品茶输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_energy_and_fuel_records`
- 来源：
- 数量范围：宽泛暂定筛选范围
  - 范围角色：默认估计 (`default_estimate`)
  - 下限：0
  - 上限：10
  - 单位：kg
  - 基准：每 kg 本过程实测成品茶输出
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算 (`reasoned_estimate`)

###### 制茶生物质致密成型燃料（`primary_biomass_briquette`）

单独记录该交换，确保一行只识别一个物理或化学流。

- 适用性：仅在消耗生物质致密成型燃料时纳入；在交换文件中保留原料和含水率等级。
- 选定流：生物质致密成型燃料
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：依据所引用前景采集协议计量、核对或计算该原子交换数量
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：技术特定 (`technology_specific`)
- 归一化基准：每 kg 本过程实测成品茶输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_energy_and_fuel_records`
- 来源：
- 数量范围：宽泛暂定筛选范围
  - 范围角色：默认估计 (`default_estimate`)
  - 下限：0
  - 上限：10
  - 单位：kg
  - 基准：每 kg 本过程实测成品茶输出
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算 (`reasoned_estimate`)

###### 制茶沼气（`primary_biogas`）

单独记录该交换，确保一行只识别一个物理或化学流。

- 适用性：仅在消耗所述甲烷含量范围的沼气时纳入；记录参考温度和压力。
- 选定流：沼气，甲烷含量 50–80%
- 流属性/单位：体积 `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- 数量规则：依据所引用前景采集协议计量、核对或计算该原子交换数量
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：技术特定 (`technology_specific`)
- 归一化基准：每 kg 本过程实测成品茶输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_energy_and_fuel_records`
- 来源：
- 数量范围：宽泛暂定筛选范围
  - 范围角色：默认估计 (`default_estimate`)
  - 下限：0
  - 上限：10
  - 单位：m3
  - 基准：每 kg 本过程实测成品茶输出
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算 (`reasoned_estimate`)

###### 制茶压缩空气（`primary_compressed_air`）

单独记录该交换，确保一行只识别一个物理或化学流。

- 适用性：仅在压缩空气跨越声明过程边界时纳入；记录压力和参考条件。
- 选定流：压缩空气 `46e2b1e4-5a4e-4579-b6a2-65b03f9ce825`
- 流属性/单位：体积 `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- 数量规则：依据所引用前景采集协议计量、核对或计算该原子交换数量
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：技术特定 (`technology_specific`)
- 归一化基准：每 kg 本过程实测成品茶输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_energy_and_fuel_records`
- 来源：
- 数量范围：宽泛暂定筛选范围
  - 范围角色：默认估计 (`default_estimate`)
  - 下限：0
  - 上限：100
  - 单位：m3
  - 基准：每 kg 本过程实测成品茶输出
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算 (`reasoned_estimate`)

###### 制茶R-134a 制冷剂补充（`primary_r134a_makeup`）

单独记录该交换，确保一行只识别一个物理或化学流。

- 适用性：仅在向范围内制冷设备补充 R-134a 时纳入。
- 选定流：制冷剂，R134a `86e15f5d-a7dd-40be-8dc4-ac9fa826a309`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：依据所引用前景采集协议计量、核对或计算该原子交换数量
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：技术特定 (`technology_specific`)
- 归一化基准：每 kg 本过程实测成品茶输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_energy_and_fuel_records`
- 来源：
- 数量范围：宽泛暂定筛选范围
  - 范围角色：默认估计 (`default_estimate`)
  - 下限：0
  - 上限：1
  - 单位：kg
  - 基准：每 kg 本过程实测成品茶输出
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算 (`reasoned_estimate`)

###### 制茶R-404A 制冷剂补充（`primary_r404a_makeup`）

单独记录该交换，确保一行只识别一个物理或化学流。

- 适用性：仅在向范围内制冷设备补充 R-404A 时纳入。
- 选定流：制冷剂，R404A `76513c71-a148-484e-865f-2ab54afb4331`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：依据所引用前景采集协议计量、核对或计算该原子交换数量
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：技术特定 (`technology_specific`)
- 归一化基准：每 kg 本过程实测成品茶输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_energy_and_fuel_records`
- 来源：
- 数量范围：宽泛暂定筛选范围
  - 范围角色：默认估计 (`default_estimate`)
  - 下限：0
  - 上限：1
  - 单位：kg
  - 基准：每 kg 本过程实测成品茶输出
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算 (`reasoned_estimate`)

###### 制茶氨制冷剂补充（`primary_ammonia_refrigerant_makeup`）

单独记录该交换，确保一行只识别一个物理或化学流。

- 适用性：仅在向范围内设备补充无水氨制冷剂时纳入。
- 选定流：无水氨制冷剂
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：依据所引用前景采集协议计量、核对或计算该原子交换数量
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：技术特定 (`technology_specific`)
- 归一化基准：每 kg 本过程实测成品茶输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_energy_and_fuel_records`
- 来源：
- 数量范围：宽泛暂定筛选范围
  - 范围角色：默认估计 (`default_estimate`)
  - 下限：0
  - 上限：1
  - 单位：kg
  - 基准：每 kg 本过程实测成品茶输出
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算 (`reasoned_estimate`)

###### 制茶地下水源饮用水（`primary_groundwater_drinking_water`）

单独记录该交换，确保一行只识别一个物理或化学流。

- 适用性：仅适用于地下水来源的处理水；不得把同一水量重复计入地表水卡。
- 选定流：饮用水，取自地下水 `4f197bf2-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：依据所引用前景采集协议计量、核对或计算该原子交换数量
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 kg 本过程实测成品茶输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_water_records`
- 来源：
- 数量范围：宽泛暂定筛选范围
  - 范围角色：默认估计 (`default_estimate`)
  - 下限：0
  - 上限：20
  - 单位：kg
  - 基准：每 kg 本过程实测成品茶输出
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算 (`reasoned_estimate`)

###### 制茶地表水源饮用水（`primary_surface_water_drinking_water`）

单独记录该交换，确保一行只识别一个物理或化学流。

- 适用性：仅适用于地表水来源的处理水；不得把同一水量重复计入地下水卡。
- 选定流：饮用水，取自地表水 `4f197bf3-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：依据所引用前景采集协议计量、核对或计算该原子交换数量
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 kg 本过程实测成品茶输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_water_records`
- 来源：
- 数量范围：宽泛暂定筛选范围
  - 范围角色：默认估计 (`default_estimate`)
  - 下限：0
  - 上限：20
  - 单位：kg
  - 基准：每 kg 本过程实测成品茶输出
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算 (`reasoned_estimate`)

###### 制茶去离子水（`primary_deionized_water`）

单独记录该交换，确保一行只识别一个物理或化学流。

- 适用性：仅在去离子水跨越过程边界时纳入；与饮用水供应分开记录。
- 选定流：去离子水 `5b3acbab-2518-4406-8736-d21f222d757a`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：依据所引用前景采集协议计量、核对或计算该原子交换数量
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 kg 本过程实测成品茶输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_water_records`
- 来源：
- 数量范围：宽泛暂定筛选范围
  - 范围角色：默认估计 (`default_estimate`)
  - 下限：0
  - 上限：20
  - 单位：kg
  - 基准：每 kg 本过程实测成品茶输出
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算 (`reasoned_estimate`)

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 初制输出绿茶（`made_green_tea`）

单独记录该交换，确保一行只识别一个物理或化学流。

- 适用性：本次转移中存在绿茶时纳入；保留形态和含水率基准。
- 选定流：未包装绿茶，未发酵
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：依据所引用前景采集协议计量、核对或计算该原子交换数量
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：产品特定 (`product_specific`)
- 归一化基准：每 kg 本过程实测成品茶输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_output_and_inventory_records`
- 来源：
- 数量范围：宽泛暂定筛选范围
  - 范围角色：默认估计 (`default_estimate`)
  - 下限：0
  - 上限：10
  - 单位：kg
  - 基准：每 kg 本过程实测成品茶输出
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算 (`reasoned_estimate`)

###### 初制输出红茶（`made_black_tea`）

单独记录该交换，确保一行只识别一个物理或化学流。

- 适用性：本次转移中存在红茶时纳入；保留形态和含水率基准。
- 选定流：未包装红茶，已发酵
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：依据所引用前景采集协议计量、核对或计算该原子交换数量
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：产品特定 (`product_specific`)
- 归一化基准：每 kg 本过程实测成品茶输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_output_and_inventory_records`
- 来源：
- 数量范围：宽泛暂定筛选范围
  - 范围角色：默认估计 (`default_estimate`)
  - 下限：0
  - 上限：10
  - 单位：kg
  - 基准：每 kg 本过程实测成品茶输出
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算 (`reasoned_estimate`)

###### 初制输出部分发酵茶（`made_partly_fermented_tea`）

单独记录该交换，确保一行只识别一个物理或化学流。

- 适用性：本次转移中存在部分发酵茶时纳入；保留形态和含水率基准。
- 选定流：未包装部分发酵茶
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：依据所引用前景采集协议计量、核对或计算该原子交换数量
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：产品特定 (`product_specific`)
- 归一化基准：每 kg 本过程实测成品茶输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_output_and_inventory_records`
- 来源：
- 数量范围：宽泛暂定筛选范围
  - 范围角色：默认估计 (`default_estimate`)
  - 下限：0
  - 上限：10
  - 单位：kg
  - 基准：每 kg 本过程实测成品茶输出
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算 (`reasoned_estimate`)

##### 废物流

###### 制茶茶梗废物（`primary_tea_stalk_waste`）

单独记录该交换，确保一行只识别一个物理或化学流。

- 适用性：声明路线中存在该原子交换时纳入；仅在有记录证明未发生时省略。
- 选定流：茶梗废物
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：依据所引用前景采集协议计量、核对或计算该原子交换数量
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 kg 本过程实测成品茶输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_waste_and_emission_records`
- 来源：
- 数量范围：宽泛暂定筛选范围
  - 范围角色：默认估计 (`default_estimate`)
  - 下限：0
  - 上限：5
  - 单位：kg
  - 基准：每 kg 本过程实测成品茶输出
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算 (`reasoned_estimate`)

###### 制茶茶纤维废物（`primary_tea_fibre_waste`）

单独记录该交换，确保一行只识别一个物理或化学流。

- 适用性：声明路线中存在该原子交换时纳入；仅在有记录证明未发生时省略。
- 选定流：茶纤维废物
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：依据所引用前景采集协议计量、核对或计算该原子交换数量
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 kg 本过程实测成品茶输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_waste_and_emission_records`
- 来源：
- 数量范围：宽泛暂定筛选范围
  - 范围角色：默认估计 (`default_estimate`)
  - 下限：0
  - 上限：5
  - 单位：kg
  - 基准：每 kg 本过程实测成品茶输出
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算 (`reasoned_estimate`)

###### 制茶降级茶废物（`primary_offgrade_tea_waste`）

单独记录该交换，确保一行只识别一个物理或化学流。

- 适用性：声明路线中存在该原子交换时纳入；仅在有记录证明未发生时省略。
- 选定流：降级茶废物
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：依据所引用前景采集协议计量、核对或计算该原子交换数量
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 kg 本过程实测成品茶输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_waste_and_emission_records`
- 来源：
- 数量范围：宽泛暂定筛选范围
  - 范围角色：默认估计 (`default_estimate`)
  - 下限：0
  - 上限：5
  - 单位：kg
  - 基准：每 kg 本过程实测成品茶输出
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算 (`reasoned_estimate`)

###### 制茶捕集茶尘废物（`primary_captured_tea_dust_waste`）

单独记录该交换，确保一行只识别一个物理或化学流。

- 适用性：声明路线中存在该原子交换时纳入；仅在有记录证明未发生时省略。
- 选定流：捕集茶尘废物
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：依据所引用前景采集协议计量、核对或计算该原子交换数量
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 kg 本过程实测成品茶输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_waste_and_emission_records`
- 来源：
- 数量范围：宽泛暂定筛选范围
  - 范围角色：默认估计 (`default_estimate`)
  - 下限：0
  - 上限：5
  - 单位：kg
  - 基准：每 kg 本过程实测成品茶输出
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算 (`reasoned_estimate`)

###### 制茶工艺废水（`primary_tea_process_wastewater`）

单独记录该交换，确保一行只识别一个物理或化学流。

- 适用性：声明路线中存在该原子交换时纳入；仅在有记录证明未发生时省略。
- 选定流：茶加工废水
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：依据所引用前景采集协议计量、核对或计算该原子交换数量
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 kg 本过程实测成品茶输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_water_records`
- 来源：
- 数量范围：宽泛暂定筛选范围
  - 范围角色：默认估计 (`default_estimate`)
  - 下限：0
  - 上限：20
  - 单位：kg
  - 基准：每 kg 本过程实测成品茶输出
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算 (`reasoned_estimate`)

##### 基本流

###### 化石源二氧化碳排入空气（`primary_carbon_dioxide_fossil_air`）

单独记录该交换，确保一行只识别一个物理或化学流。

- 适用性：仅在有实测排放，或依据已采集活动数据和有引用的因子方法计算排放时纳入。
- 选定流：二氧化碳，化石源，排入未指明空气 `08a91e70-3ddc-11dd-923d-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：依据所引用前景采集协议计量、核对或计算该原子交换数量
- 数值来源模式：计算值 (`calculated_value`)
- 适用范围：技术特定 (`technology_specific`)
- 归一化基准：每 kg 本过程实测成品茶输出
- 基准类型：过程输出（`process_output`）
- 证据类型：根据采集计算 (`calculated_from_collection`)
- 采集协议：`cp_waste_and_emission_records`
- 来源：
- 数量范围：宽泛暂定筛选范围
  - 范围角色：默认估计 (`default_estimate`)
  - 下限：0
  - 上限：5
  - 单位：kg
  - 基准：每 kg 本过程实测成品茶输出
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算 (`reasoned_estimate`)

###### 生物源二氧化碳排入空气（`primary_carbon_dioxide_biogenic_air`）

单独记录该交换，确保一行只识别一个物理或化学流。

- 适用性：仅在有实测排放，或依据已采集活动数据和有引用的因子方法计算排放时纳入。
- 选定流：二氧化碳，生物源，排入未指明空气 `08a91e70-3ddc-11dd-9c15-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：依据所引用前景采集协议计量、核对或计算该原子交换数量
- 数值来源模式：计算值 (`calculated_value`)
- 适用范围：技术特定 (`technology_specific`)
- 归一化基准：每 kg 本过程实测成品茶输出
- 基准类型：过程输出（`process_output`）
- 证据类型：根据采集计算 (`calculated_from_collection`)
- 采集协议：`cp_waste_and_emission_records`
- 来源：
- 数量范围：宽泛暂定筛选范围
  - 范围角色：默认估计 (`default_estimate`)
  - 下限：0
  - 上限：5
  - 单位：kg
  - 基准：每 kg 本过程实测成品茶输出
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算 (`reasoned_estimate`)

###### 化石源一氧化碳排入空气（`primary_carbon_monoxide_fossil_air`）

单独记录该交换，确保一行只识别一个物理或化学流。

- 适用性：仅在有实测排放，或依据已采集活动数据和有引用的因子方法计算排放时纳入。
- 选定流：一氧化碳，化石源，排入未指明空气 `08a91e70-3ddc-11dd-924e-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：依据所引用前景采集协议计量、核对或计算该原子交换数量
- 数值来源模式：计算值 (`calculated_value`)
- 适用范围：技术特定 (`technology_specific`)
- 归一化基准：每 kg 本过程实测成品茶输出
- 基准类型：过程输出（`process_output`）
- 证据类型：根据采集计算 (`calculated_from_collection`)
- 采集协议：`cp_waste_and_emission_records`
- 来源：
- 数量范围：宽泛暂定筛选范围
  - 范围角色：默认估计 (`default_estimate`)
  - 下限：0
  - 上限：5
  - 单位：kg
  - 基准：每 kg 本过程实测成品茶输出
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算 (`reasoned_estimate`)

###### 二氧化氮排入空气（`primary_nitrogen_dioxide_air`）

单独记录该交换，确保一行只识别一个物理或化学流。

- 适用性：仅在有实测排放，或依据已采集活动数据和有引用的因子方法计算排放时纳入。
- 选定流：二氧化氮，排入未指明空气 `08a91e70-3ddc-11dd-96e5-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：依据所引用前景采集协议计量、核对或计算该原子交换数量
- 数值来源模式：计算值 (`calculated_value`)
- 适用范围：技术特定 (`technology_specific`)
- 归一化基准：每 kg 本过程实测成品茶输出
- 基准类型：过程输出（`process_output`）
- 证据类型：根据采集计算 (`calculated_from_collection`)
- 采集协议：`cp_waste_and_emission_records`
- 来源：
- 数量范围：宽泛暂定筛选范围
  - 范围角色：默认估计 (`default_estimate`)
  - 下限：0
  - 上限：5
  - 单位：kg
  - 基准：每 kg 本过程实测成品茶输出
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算 (`reasoned_estimate`)

###### 一氧化氮排入空气（`primary_nitrogen_monoxide_air`）

单独记录该交换，确保一行只识别一个物理或化学流。

- 适用性：仅在有实测排放，或依据已采集活动数据和有引用的因子方法计算排放时纳入。
- 选定流：一氧化氮，排入未指明空气 `08a91e70-3ddc-11dd-96ee-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：依据所引用前景采集协议计量、核对或计算该原子交换数量
- 数值来源模式：计算值 (`calculated_value`)
- 适用范围：技术特定 (`technology_specific`)
- 归一化基准：每 kg 本过程实测成品茶输出
- 基准类型：过程输出（`process_output`）
- 证据类型：根据采集计算 (`calculated_from_collection`)
- 采集协议：`cp_waste_and_emission_records`
- 来源：
- 数量范围：宽泛暂定筛选范围
  - 范围角色：默认估计 (`default_estimate`)
  - 下限：0
  - 上限：5
  - 单位：kg
  - 基准：每 kg 本过程实测成品茶输出
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算 (`reasoned_estimate`)

###### 二氧化硫排入空气（`primary_sulfur_dioxide_air`）

单独记录该交换，确保一行只识别一个物理或化学流。

- 适用性：仅在有实测排放，或依据已采集活动数据和有引用的因子方法计算排放时纳入。
- 选定流：二氧化硫，排入未指明空气
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：依据所引用前景采集协议计量、核对或计算该原子交换数量
- 数值来源模式：计算值 (`calculated_value`)
- 适用范围：技术特定 (`technology_specific`)
- 归一化基准：每 kg 本过程实测成品茶输出
- 基准类型：过程输出（`process_output`）
- 证据类型：根据采集计算 (`calculated_from_collection`)
- 采集协议：`cp_waste_and_emission_records`
- 来源：
- 数量范围：宽泛暂定筛选范围
  - 范围角色：默认估计 (`default_estimate`)
  - 下限：0
  - 上限：5
  - 单位：kg
  - 基准：每 kg 本过程实测成品茶输出
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算 (`reasoned_estimate`)

###### 化石源甲烷排入空气（`primary_methane_fossil_air`）

单独记录该交换，确保一行只识别一个物理或化学流。

- 适用性：仅在有实测排放，或依据已采集活动数据和有引用的因子方法计算排放时纳入。
- 选定流：甲烷，化石源，排入未指明空气 `08a91e70-3ddc-11dd-9610-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：依据所引用前景采集协议计量、核对或计算该原子交换数量
- 数值来源模式：计算值 (`calculated_value`)
- 适用范围：技术特定 (`technology_specific`)
- 归一化基准：每 kg 本过程实测成品茶输出
- 基准类型：过程输出（`process_output`）
- 证据类型：根据采集计算 (`calculated_from_collection`)
- 采集协议：`cp_waste_and_emission_records`
- 来源：
- 数量范围：宽泛暂定筛选范围
  - 范围角色：默认估计 (`default_estimate`)
  - 下限：0
  - 上限：5
  - 单位：kg
  - 基准：每 kg 本过程实测成品茶输出
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算 (`reasoned_estimate`)

###### 一氧化二氮排入空气（`primary_nitrous_oxide_air`）

单独记录该交换，确保一行只识别一个物理或化学流。

- 适用性：仅在有实测排放，或依据已采集活动数据和有引用的因子方法计算排放时纳入。
- 选定流：一氧化二氮，排入未指明空气 `08a91e70-3ddc-11dd-94c3-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：依据所引用前景采集协议计量、核对或计算该原子交换数量
- 数值来源模式：计算值 (`calculated_value`)
- 适用范围：技术特定 (`technology_specific`)
- 归一化基准：每 kg 本过程实测成品茶输出
- 基准类型：过程输出（`process_output`）
- 证据类型：根据采集计算 (`calculated_from_collection`)
- 采集协议：`cp_waste_and_emission_records`
- 来源：
- 数量范围：宽泛暂定筛选范围
  - 范围角色：默认估计 (`default_estimate`)
  - 下限：0
  - 上限：5
  - 单位：kg
  - 基准：每 kg 本过程实测成品茶输出
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算 (`reasoned_estimate`)

###### PM10 颗粒物排入空气（`primary_particles_pm10_air`）

单独记录该交换，确保一行只识别一个物理或化学流。

- 适用性：仅在有实测排放，或依据已采集活动数据和有引用的因子方法计算排放时纳入。
- 选定流：颗粒物，PM10，排入空气
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：依据所引用前景采集协议计量、核对或计算该原子交换数量
- 数值来源模式：计算值 (`calculated_value`)
- 适用范围：技术特定 (`technology_specific`)
- 归一化基准：每 kg 本过程实测成品茶输出
- 基准类型：过程输出（`process_output`）
- 证据类型：根据采集计算 (`calculated_from_collection`)
- 采集协议：`cp_waste_and_emission_records`
- 来源：
- 数量范围：宽泛暂定筛选范围
  - 范围角色：默认估计 (`default_estimate`)
  - 下限：0
  - 上限：5
  - 单位：kg
  - 基准：每 kg 本过程实测成品茶输出
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算 (`reasoned_estimate`)

###### PM2.5 颗粒物排入空气（`primary_particles_pm25_air`）

单独记录该交换，确保一行只识别一个物理或化学流。

- 适用性：仅在有实测排放，或依据已采集活动数据和有引用的因子方法计算排放时纳入。
- 选定流：颗粒物，PM2.5，排入未指明空气 `08a91e70-3ddc-11dd-9293-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：依据所引用前景采集协议计量、核对或计算该原子交换数量
- 数值来源模式：计算值 (`calculated_value`)
- 适用范围：技术特定 (`technology_specific`)
- 归一化基准：每 kg 本过程实测成品茶输出
- 基准类型：过程输出（`process_output`）
- 证据类型：根据采集计算 (`calculated_from_collection`)
- 采集协议：`cp_waste_and_emission_records`
- 来源：
- 数量范围：宽泛暂定筛选范围
  - 范围角色：默认估计 (`default_estimate`)
  - 下限：0
  - 上限：5
  - 单位：kg
  - 基准：每 kg 本过程实测成品茶输出
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算 (`reasoned_estimate`)

###### HFC-134a 排入空气（`primary_hfc134a_air`）

单独记录该交换，确保一行只识别一个物理或化学流。

- 适用性：仅在有实测排放，或依据已采集活动数据和有引用的因子方法计算排放时纳入。
- 选定流：HFC-134a，排入未指明空气 `fe0acd60-3ddc-11dd-a6d2-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：依据所引用前景采集协议计量、核对或计算该原子交换数量
- 数值来源模式：计算值 (`calculated_value`)
- 适用范围：技术特定 (`technology_specific`)
- 归一化基准：每 kg 本过程实测成品茶输出
- 基准类型：过程输出（`process_output`）
- 证据类型：根据采集计算 (`calculated_from_collection`)
- 采集协议：`cp_waste_and_emission_records`
- 来源：
- 数量范围：宽泛暂定筛选范围
  - 范围角色：默认估计 (`default_estimate`)
  - 下限：0
  - 上限：5
  - 单位：kg
  - 基准：每 kg 本过程实测成品茶输出
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算 (`reasoned_estimate`)

###### R-404A 排入空气（`primary_r404a_air`）

单独记录该交换，确保一行只识别一个物理或化学流。

- 适用性：仅在有实测排放，或依据已采集活动数据和有引用的因子方法计算排放时纳入。
- 选定流：R-404A 制冷剂，排入空气
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：依据所引用前景采集协议计量、核对或计算该原子交换数量
- 数值来源模式：计算值 (`calculated_value`)
- 适用范围：技术特定 (`technology_specific`)
- 归一化基准：每 kg 本过程实测成品茶输出
- 基准类型：过程输出（`process_output`）
- 证据类型：根据采集计算 (`calculated_from_collection`)
- 采集协议：`cp_waste_and_emission_records`
- 来源：
- 数量范围：宽泛暂定筛选范围
  - 范围角色：默认估计 (`default_estimate`)
  - 下限：0
  - 上限：5
  - 单位：kg
  - 基准：每 kg 本过程实测成品茶输出
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算 (`reasoned_estimate`)

###### 氨排入空气（`primary_ammonia_air`）

单独记录该交换，确保一行只识别一个物理或化学流。

- 适用性：仅在有实测排放，或依据已采集活动数据和有引用的因子方法计算排放时纳入。
- 选定流：氨，排入未指明空气 `08a91e70-3ddc-11dd-a2a9-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：依据所引用前景采集协议计量、核对或计算该原子交换数量
- 数值来源模式：计算值 (`calculated_value`)
- 适用范围：技术特定 (`technology_specific`)
- 归一化基准：每 kg 本过程实测成品茶输出
- 基准类型：过程输出（`process_output`）
- 证据类型：根据采集计算 (`calculated_from_collection`)
- 采集协议：`cp_waste_and_emission_records`
- 来源：
- 数量范围：宽泛暂定筛选范围
  - 范围角色：默认估计 (`default_estimate`)
  - 下限：0
  - 上限：5
  - 单位：kg
  - 基准：每 kg 本过程实测成品茶输出
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算 (`reasoned_estimate`)

### 过程：茶叶精制、分级或拼配（`tea_finishing_blending`）

#### 输入

##### 产品流

###### 精制接收绿茶（`finishing_input_green_tea`）

单独记录该交换，确保一行只识别一个物理或化学流。

- 适用性：本次转移中存在绿茶时纳入；保留形态和含水率基准。
- 选定流：未包装绿茶，未发酵
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：依据所引用前景采集协议计量、核对或计算该原子交换数量
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：产品特定 (`product_specific`)
- 归一化基准：每 kg 本过程实测精制茶输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_tea_material_receipts`
- 来源：
- 数量范围：宽泛暂定筛选范围
  - 范围角色：默认估计 (`default_estimate`)
  - 下限：0
  - 上限：10
  - 单位：kg
  - 基准：每 kg 本过程实测精制茶输出
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算 (`reasoned_estimate`)

###### 精制接收红茶（`finishing_input_black_tea`）

单独记录该交换，确保一行只识别一个物理或化学流。

- 适用性：本次转移中存在红茶时纳入；保留形态和含水率基准。
- 选定流：未包装红茶，已发酵
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：依据所引用前景采集协议计量、核对或计算该原子交换数量
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：产品特定 (`product_specific`)
- 归一化基准：每 kg 本过程实测精制茶输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_tea_material_receipts`
- 来源：
- 数量范围：宽泛暂定筛选范围
  - 范围角色：默认估计 (`default_estimate`)
  - 下限：0
  - 上限：10
  - 单位：kg
  - 基准：每 kg 本过程实测精制茶输出
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算 (`reasoned_estimate`)

###### 精制接收部分发酵茶（`finishing_input_partly_fermented_tea`）

单独记录该交换，确保一行只识别一个物理或化学流。

- 适用性：本次转移中存在部分发酵茶时纳入；保留形态和含水率基准。
- 选定流：未包装部分发酵茶
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：依据所引用前景采集协议计量、核对或计算该原子交换数量
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：产品特定 (`product_specific`)
- 归一化基准：每 kg 本过程实测精制茶输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_tea_material_receipts`
- 来源：
- 数量范围：宽泛暂定筛选范围
  - 范围角色：默认估计 (`default_estimate`)
  - 下限：0
  - 上限：10
  - 单位：kg
  - 基准：每 kg 本过程实测精制茶输出
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算 (`reasoned_estimate`)

###### 窨制用茉莉花（`finishing_jasmine_flowers`）

单独记录该交换，确保一行只识别一个物理或化学流。

- 适用性：声明路线中存在该原子交换时纳入；仅在有记录证明未发生时省略。
- 选定流：食品级茉莉花
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：依据所引用前景采集协议计量、核对或计算该原子交换数量
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：产品特定 (`product_specific`)
- 归一化基准：每 kg 本过程实测精制茶输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_recipe_and_route_records`
- 来源：
- 数量范围：宽泛暂定筛选范围
  - 范围角色：默认估计 (`default_estimate`)
  - 下限：0
  - 上限：10
  - 单位：kg
  - 基准：每 kg 本过程实测精制茶输出
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算 (`reasoned_estimate`)

###### 调味用佛手柑精油（`finishing_bergamot_oil`）

单独记录该交换，确保一行只识别一个物理或化学流。

- 适用性：声明路线中存在该原子交换时纳入；仅在有记录证明未发生时省略。
- 选定流：食品级佛手柑精油
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：依据所引用前景采集协议计量、核对或计算该原子交换数量
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：产品特定 (`product_specific`)
- 归一化基准：每 kg 本过程实测精制茶输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_recipe_and_route_records`
- 来源：
- 数量范围：宽泛暂定筛选范围
  - 范围角色：默认估计 (`default_estimate`)
  - 下限：0
  - 上限：10
  - 单位：kg
  - 基准：每 kg 本过程实测精制茶输出
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算 (`reasoned_estimate`)

###### 脱咖啡因用乙酸乙酯（`finishing_ethyl_acetate`）

单独记录该交换，确保一行只识别一个物理或化学流。

- 适用性：声明路线中存在该原子交换时纳入；仅在有记录证明未发生时省略。
- 选定流：食品级乙酸乙酯
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：依据所引用前景采集协议计量、核对或计算该原子交换数量
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：产品特定 (`product_specific`)
- 归一化基准：每 kg 本过程实测精制茶输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_recipe_and_route_records`
- 来源：
- 数量范围：宽泛暂定筛选范围
  - 范围角色：默认估计 (`default_estimate`)
  - 下限：0
  - 上限：10
  - 单位：kg
  - 基准：每 kg 本过程实测精制茶输出
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算 (`reasoned_estimate`)

###### 脱咖啡因用食品级二氧化碳（`finishing_food_grade_carbon_dioxide`）

单独记录该交换，确保一行只识别一个物理或化学流。

- 适用性：声明路线中存在该原子交换时纳入；仅在有记录证明未发生时省略。
- 选定流：食品级二氧化碳
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：依据所引用前景采集协议计量、核对或计算该原子交换数量
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：产品特定 (`product_specific`)
- 归一化基准：每 kg 本过程实测精制茶输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_recipe_and_route_records`
- 来源：
- 数量范围：宽泛暂定筛选范围
  - 范围角色：默认估计 (`default_estimate`)
  - 下限：0
  - 上限：10
  - 单位：kg
  - 基准：每 kg 本过程实测精制茶输出
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算 (`reasoned_estimate`)

###### 茶叶精制高压电力（`finishing_electricity_high_voltage`）

单独记录该交换，确保一行只识别一个物理或化学流。

- 适用性：适用于计量的 35–330 kV 电网供电点；不得把同一供电点重复计入其他电压卡。
- 选定流：高压交流电，35–330 kV，消费组合
- 流属性/单位：能量 / kWh
- 数量规则：依据所引用前景采集协议计量、核对或计算该原子交换数量
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 kg 本过程实测精制茶输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_energy_and_fuel_records`
- 来源：
- 数量范围：宽泛暂定筛选范围
  - 范围角色：默认估计 (`default_estimate`)
  - 下限：0
  - 上限：20
  - 单位：kWh
  - 基准：每 kg 本过程实测精制茶输出
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算 (`reasoned_estimate`)

###### 茶叶精制中压电力（`finishing_electricity_medium_voltage`）

单独记录该交换，确保一行只识别一个物理或化学流。

- 适用性：适用于计量的 1–35 kV 电网供电点；不得把同一供电点重复计入其他电压卡。
- 选定流：中压交流电，1–35 kV，消费组合
- 流属性/单位：能量 / kWh
- 数量规则：依据所引用前景采集协议计量、核对或计算该原子交换数量
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 kg 本过程实测精制茶输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_energy_and_fuel_records`
- 来源：
- 数量范围：宽泛暂定筛选范围
  - 范围角色：默认估计 (`default_estimate`)
  - 下限：0
  - 上限：20
  - 单位：kWh
  - 基准：每 kg 本过程实测精制茶输出
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算 (`reasoned_estimate`)

###### 茶叶精制低压电力（`finishing_electricity_low_voltage`）

单独记录该交换，确保一行只识别一个物理或化学流。

- 适用性：适用于计量的低于 1 kV 电网供电点；不得把同一供电点重复计入其他电压卡。
- 选定流：低压交流电，低于 1 kV，消费组合
- 流属性/单位：能量 / kWh
- 数量规则：依据所引用前景采集协议计量、核对或计算该原子交换数量
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 kg 本过程实测精制茶输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_energy_and_fuel_records`
- 来源：
- 数量范围：宽泛暂定筛选范围
  - 范围角色：默认估计 (`default_estimate`)
  - 下限：0
  - 上限：20
  - 单位：kWh
  - 基准：每 kg 本过程实测精制茶输出
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算 (`reasoned_estimate`)

###### 茶叶精制场内光伏电力（`finishing_electricity_onsite_photovoltaic`）

单独记录该交换，确保一行只识别一个物理或化学流。

- 适用性：仅适用于在声明前景边界内发电并消耗的光伏电力；不计外送电量。
- 选定流：场内光伏交流电
- 流属性/单位：能量 / kWh
- 数量规则：依据所引用前景采集协议计量、核对或计算该原子交换数量
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 kg 本过程实测精制茶输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_energy_and_fuel_records`
- 来源：
- 数量范围：宽泛暂定筛选范围
  - 范围角色：默认估计 (`default_estimate`)
  - 下限：0
  - 上限：20
  - 单位：kWh
  - 基准：每 kg 本过程实测精制茶输出
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算 (`reasoned_estimate`)

###### 茶叶精制外购蒸汽热（`finishing_purchased_steam`）

单独记录该交换，确保一行只识别一个物理或化学流。

- 适用性：仅在蒸汽热跨越前景边界时纳入；场内燃料卡已完整表示供热时省略。
- 选定流：蒸汽供热 `cbc1f372-5c64-4ad5-a938-89b9396758c9`
- 流属性/单位：总热值 `93a60a56-a3c8-14da-a746-0800200c9a66` / MJ
- 数量规则：依据所引用前景采集协议计量、核对或计算该原子交换数量
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：技术特定 (`technology_specific`)
- 归一化基准：每 kg 本过程实测精制茶输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_energy_and_fuel_records`
- 来源：
- 数量范围：宽泛暂定筛选范围
  - 范围角色：默认估计 (`default_estimate`)
  - 下限：0
  - 上限：50
  - 单位：MJ
  - 基准：每 kg 本过程实测精制茶输出
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算 (`reasoned_estimate`)

###### 茶叶精制外购热水热（`finishing_purchased_hot_water`）

单独记录该交换，确保一行只识别一个物理或化学流。

- 适用性：仅在作为热力供应的热水跨越前景边界时纳入；与蒸汽热分开记录。
- 选定流：外购热水热
- 流属性/单位：能量 / MJ
- 数量规则：依据所引用前景采集协议计量、核对或计算该原子交换数量
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：技术特定 (`technology_specific`)
- 归一化基准：每 kg 本过程实测精制茶输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_energy_and_fuel_records`
- 来源：
- 数量范围：宽泛暂定筛选范围
  - 范围角色：默认估计 (`default_estimate`)
  - 下限：0
  - 上限：50
  - 单位：MJ
  - 基准：每 kg 本过程实测精制茶输出
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算 (`reasoned_estimate`)

###### 茶叶精制天然气（`finishing_natural_gas`）

单独记录该交换，确保一行只识别一个物理或化学流。

- 适用性：仅在声明过程消耗气态天然气时纳入。
- 选定流：气态天然气 `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：依据所引用前景采集协议计量、核对或计算该原子交换数量
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：技术特定 (`technology_specific`)
- 归一化基准：每 kg 本过程实测精制茶输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_energy_and_fuel_records`
- 来源：
- 数量范围：宽泛暂定筛选范围
  - 范围角色：默认估计 (`default_estimate`)
  - 下限：0
  - 上限：10
  - 单位：kg
  - 基准：每 kg 本过程实测精制茶输出
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算 (`reasoned_estimate`)

###### 茶叶精制液化石油气（`finishing_lpg`）

单独记录该交换，确保一行只识别一个物理或化学流。

- 适用性：仅在声明过程消耗液化石油气时纳入。
- 选定流：液化石油气 `d54ae71a-1245-4e3f-b694-dbf2b22bbf7d`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：依据所引用前景采集协议计量、核对或计算该原子交换数量
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：技术特定 (`technology_specific`)
- 归一化基准：每 kg 本过程实测精制茶输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_energy_and_fuel_records`
- 来源：
- 数量范围：宽泛暂定筛选范围
  - 范围角色：默认估计 (`default_estimate`)
  - 下限：0
  - 上限：10
  - 单位：kg
  - 基准：每 kg 本过程实测精制茶输出
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算 (`reasoned_estimate`)

###### 茶叶精制柴油（`finishing_diesel`）

单独记录该交换，确保一行只识别一个物理或化学流。

- 适用性：仅在声明过程消耗柴油时纳入。
- 选定流：柴油 `9d258d75-6792-4f1c-9856-81602ed8f816`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：依据所引用前景采集协议计量、核对或计算该原子交换数量
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：技术特定 (`technology_specific`)
- 归一化基准：每 kg 本过程实测精制茶输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_energy_and_fuel_records`
- 来源：
- 数量范围：宽泛暂定筛选范围
  - 范围角色：默认估计 (`default_estimate`)
  - 下限：0
  - 上限：10
  - 单位：kg
  - 基准：每 kg 本过程实测精制茶输出
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算 (`reasoned_estimate`)

###### 茶叶精制重质燃料油（`finishing_heavy_fuel_oil`）

单独记录该交换，确保一行只识别一个物理或化学流。

- 适用性：仅在消耗所述硫含量等级的重质燃料油时纳入；不同等级须另行复核并单列。
- 选定流：重质燃料油，硫含量 1.0 wt.% `53afe53a-7bbc-4b82-8e39-df2c6bbb2c46`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：依据所引用前景采集协议计量、核对或计算该原子交换数量
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：技术特定 (`technology_specific`)
- 归一化基准：每 kg 本过程实测精制茶输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_energy_and_fuel_records`
- 来源：
- 数量范围：宽泛暂定筛选范围
  - 范围角色：默认估计 (`default_estimate`)
  - 下限：0
  - 上限：10
  - 单位：kg
  - 基准：每 kg 本过程实测精制茶输出
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算 (`reasoned_estimate`)

###### 茶叶精制硬煤（`finishing_hard_coal`）

单独记录该交换，确保一行只识别一个物理或化学流。

- 适用性：仅在消耗声明的硬煤等级时纳入；不得用于其他煤种。
- 选定流：硬煤
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：依据所引用前景采集协议计量、核对或计算该原子交换数量
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：技术特定 (`technology_specific`)
- 归一化基准：每 kg 本过程实测精制茶输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_energy_and_fuel_records`
- 来源：
- 数量范围：宽泛暂定筛选范围
  - 范围角色：默认估计 (`default_estimate`)
  - 下限：0
  - 上限：10
  - 单位：kg
  - 基准：每 kg 本过程实测精制茶输出
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算 (`reasoned_estimate`)

###### 茶叶精制生物质致密成型燃料（`finishing_biomass_briquette`）

单独记录该交换，确保一行只识别一个物理或化学流。

- 适用性：仅在消耗生物质致密成型燃料时纳入；在交换文件中保留原料和含水率等级。
- 选定流：生物质致密成型燃料
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：依据所引用前景采集协议计量、核对或计算该原子交换数量
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：技术特定 (`technology_specific`)
- 归一化基准：每 kg 本过程实测精制茶输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_energy_and_fuel_records`
- 来源：
- 数量范围：宽泛暂定筛选范围
  - 范围角色：默认估计 (`default_estimate`)
  - 下限：0
  - 上限：10
  - 单位：kg
  - 基准：每 kg 本过程实测精制茶输出
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算 (`reasoned_estimate`)

###### 茶叶精制沼气（`finishing_biogas`）

单独记录该交换，确保一行只识别一个物理或化学流。

- 适用性：仅在消耗所述甲烷含量范围的沼气时纳入；记录参考温度和压力。
- 选定流：沼气，甲烷含量 50–80%
- 流属性/单位：体积 `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- 数量规则：依据所引用前景采集协议计量、核对或计算该原子交换数量
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：技术特定 (`technology_specific`)
- 归一化基准：每 kg 本过程实测精制茶输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_energy_and_fuel_records`
- 来源：
- 数量范围：宽泛暂定筛选范围
  - 范围角色：默认估计 (`default_estimate`)
  - 下限：0
  - 上限：10
  - 单位：m3
  - 基准：每 kg 本过程实测精制茶输出
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算 (`reasoned_estimate`)

###### 茶叶精制压缩空气（`finishing_compressed_air`）

单独记录该交换，确保一行只识别一个物理或化学流。

- 适用性：仅在压缩空气跨越声明过程边界时纳入；记录压力和参考条件。
- 选定流：压缩空气 `46e2b1e4-5a4e-4579-b6a2-65b03f9ce825`
- 流属性/单位：体积 `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- 数量规则：依据所引用前景采集协议计量、核对或计算该原子交换数量
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：技术特定 (`technology_specific`)
- 归一化基准：每 kg 本过程实测精制茶输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_energy_and_fuel_records`
- 来源：
- 数量范围：宽泛暂定筛选范围
  - 范围角色：默认估计 (`default_estimate`)
  - 下限：0
  - 上限：100
  - 单位：m3
  - 基准：每 kg 本过程实测精制茶输出
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算 (`reasoned_estimate`)

###### 茶叶精制R-134a 制冷剂补充（`finishing_r134a_makeup`）

单独记录该交换，确保一行只识别一个物理或化学流。

- 适用性：仅在向范围内制冷设备补充 R-134a 时纳入。
- 选定流：制冷剂，R134a `86e15f5d-a7dd-40be-8dc4-ac9fa826a309`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：依据所引用前景采集协议计量、核对或计算该原子交换数量
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：技术特定 (`technology_specific`)
- 归一化基准：每 kg 本过程实测精制茶输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_energy_and_fuel_records`
- 来源：
- 数量范围：宽泛暂定筛选范围
  - 范围角色：默认估计 (`default_estimate`)
  - 下限：0
  - 上限：1
  - 单位：kg
  - 基准：每 kg 本过程实测精制茶输出
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算 (`reasoned_estimate`)

###### 茶叶精制R-404A 制冷剂补充（`finishing_r404a_makeup`）

单独记录该交换，确保一行只识别一个物理或化学流。

- 适用性：仅在向范围内制冷设备补充 R-404A 时纳入。
- 选定流：制冷剂，R404A `76513c71-a148-484e-865f-2ab54afb4331`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：依据所引用前景采集协议计量、核对或计算该原子交换数量
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：技术特定 (`technology_specific`)
- 归一化基准：每 kg 本过程实测精制茶输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_energy_and_fuel_records`
- 来源：
- 数量范围：宽泛暂定筛选范围
  - 范围角色：默认估计 (`default_estimate`)
  - 下限：0
  - 上限：1
  - 单位：kg
  - 基准：每 kg 本过程实测精制茶输出
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算 (`reasoned_estimate`)

###### 茶叶精制氨制冷剂补充（`finishing_ammonia_refrigerant_makeup`）

单独记录该交换，确保一行只识别一个物理或化学流。

- 适用性：仅在向范围内设备补充无水氨制冷剂时纳入。
- 选定流：无水氨制冷剂
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：依据所引用前景采集协议计量、核对或计算该原子交换数量
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：技术特定 (`technology_specific`)
- 归一化基准：每 kg 本过程实测精制茶输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_energy_and_fuel_records`
- 来源：
- 数量范围：宽泛暂定筛选范围
  - 范围角色：默认估计 (`default_estimate`)
  - 下限：0
  - 上限：1
  - 单位：kg
  - 基准：每 kg 本过程实测精制茶输出
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算 (`reasoned_estimate`)

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 送至包装绿茶（`finished_green_tea`）

单独记录该交换，确保一行只识别一个物理或化学流。

- 适用性：本次转移中存在绿茶时纳入；保留形态和含水率基准。
- 选定流：未包装绿茶，未发酵
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：依据所引用前景采集协议计量、核对或计算该原子交换数量
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：产品特定 (`product_specific`)
- 归一化基准：每 kg 本过程实测精制茶输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_output_and_inventory_records`
- 来源：
- 数量范围：宽泛暂定筛选范围
  - 范围角色：默认估计 (`default_estimate`)
  - 下限：0
  - 上限：10
  - 单位：kg
  - 基准：每 kg 本过程实测精制茶输出
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算 (`reasoned_estimate`)

###### 送至包装红茶（`finished_black_tea`）

单独记录该交换，确保一行只识别一个物理或化学流。

- 适用性：本次转移中存在红茶时纳入；保留形态和含水率基准。
- 选定流：未包装红茶，已发酵
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：依据所引用前景采集协议计量、核对或计算该原子交换数量
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：产品特定 (`product_specific`)
- 归一化基准：每 kg 本过程实测精制茶输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_output_and_inventory_records`
- 来源：
- 数量范围：宽泛暂定筛选范围
  - 范围角色：默认估计 (`default_estimate`)
  - 下限：0
  - 上限：10
  - 单位：kg
  - 基准：每 kg 本过程实测精制茶输出
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算 (`reasoned_estimate`)

###### 送至包装部分发酵茶（`finished_partly_fermented_tea`）

单独记录该交换，确保一行只识别一个物理或化学流。

- 适用性：本次转移中存在部分发酵茶时纳入；保留形态和含水率基准。
- 选定流：未包装部分发酵茶
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：依据所引用前景采集协议计量、核对或计算该原子交换数量
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：产品特定 (`product_specific`)
- 归一化基准：每 kg 本过程实测精制茶输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_output_and_inventory_records`
- 来源：
- 数量范围：宽泛暂定筛选范围
  - 范围角色：默认估计 (`default_estimate`)
  - 下限：0
  - 上限：10
  - 单位：kg
  - 基准：每 kg 本过程实测精制茶输出
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算 (`reasoned_estimate`)

##### 废物流

###### 窨制后废茉莉花（`finishing_spent_jasmine_flowers`）

单独记录该交换，确保一行只识别一个物理或化学流。

- 适用性：声明路线中存在该原子交换时纳入；仅在有记录证明未发生时省略。
- 选定流：废茉莉花
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：依据所引用前景采集协议计量、核对或计算该原子交换数量
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 kg 本过程实测精制茶输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_waste_and_emission_records`
- 来源：
- 数量范围：宽泛暂定筛选范围
  - 范围角色：默认估计 (`default_estimate`)
  - 下限：0
  - 上限：5
  - 单位：kg
  - 基准：每 kg 本过程实测精制茶输出
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算 (`reasoned_estimate`)

###### 精制降级茶废物（`finishing_offgrade_tea_waste`）

单独记录该交换，确保一行只识别一个物理或化学流。

- 适用性：声明路线中存在该原子交换时纳入；仅在有记录证明未发生时省略。
- 选定流：降级茶废物
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：依据所引用前景采集协议计量、核对或计算该原子交换数量
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 kg 本过程实测精制茶输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_waste_and_emission_records`
- 来源：
- 数量范围：宽泛暂定筛选范围
  - 范围角色：默认估计 (`default_estimate`)
  - 下限：0
  - 上限：5
  - 单位：kg
  - 基准：每 kg 本过程实测精制茶输出
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算 (`reasoned_estimate`)

###### 精制捕集茶尘废物（`finishing_captured_tea_dust_waste`）

单独记录该交换，确保一行只识别一个物理或化学流。

- 适用性：声明路线中存在该原子交换时纳入；仅在有记录证明未发生时省略。
- 选定流：捕集茶尘废物
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：依据所引用前景采集协议计量、核对或计算该原子交换数量
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 kg 本过程实测精制茶输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_waste_and_emission_records`
- 来源：
- 数量范围：宽泛暂定筛选范围
  - 范围角色：默认估计 (`default_estimate`)
  - 下限：0
  - 上限：5
  - 单位：kg
  - 基准：每 kg 本过程实测精制茶输出
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算 (`reasoned_estimate`)

###### 脱咖啡因废水（`finishing_decaffeination_wastewater`）

单独记录该交换，确保一行只识别一个物理或化学流。

- 适用性：声明路线中存在该原子交换时纳入；仅在有记录证明未发生时省略。
- 选定流：脱咖啡因废水
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：依据所引用前景采集协议计量、核对或计算该原子交换数量
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 kg 本过程实测精制茶输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_water_records`
- 来源：
- 数量范围：宽泛暂定筛选范围
  - 范围角色：默认估计 (`default_estimate`)
  - 下限：0
  - 上限：20
  - 单位：kg
  - 基准：每 kg 本过程实测精制茶输出
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算 (`reasoned_estimate`)

###### 脱咖啡因废乙酸乙酯（`finishing_spent_ethyl_acetate`）

单独记录该交换，确保一行只识别一个物理或化学流。

- 适用性：声明路线中存在该原子交换时纳入；仅在有记录证明未发生时省略。
- 选定流：废乙酸乙酯
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：依据所引用前景采集协议计量、核对或计算该原子交换数量
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 kg 本过程实测精制茶输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_waste_and_emission_records`
- 来源：
- 数量范围：宽泛暂定筛选范围
  - 范围角色：默认估计 (`default_estimate`)
  - 下限：0
  - 上限：5
  - 单位：kg
  - 基准：每 kg 本过程实测精制茶输出
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算 (`reasoned_estimate`)

##### 基本流

###### PM10 颗粒物排入空气（`finishing_particles_pm10_air`）

单独记录该交换，确保一行只识别一个物理或化学流。

- 适用性：仅在有实测排放，或依据已采集活动数据和有引用的因子方法计算排放时纳入。
- 选定流：颗粒物，PM10，排入空气
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：依据所引用前景采集协议计量、核对或计算该原子交换数量
- 数值来源模式：计算值 (`calculated_value`)
- 适用范围：技术特定 (`technology_specific`)
- 归一化基准：每 kg 本过程实测精制茶输出
- 基准类型：过程输出（`process_output`）
- 证据类型：根据采集计算 (`calculated_from_collection`)
- 采集协议：`cp_waste_and_emission_records`
- 来源：
- 数量范围：宽泛暂定筛选范围
  - 范围角色：默认估计 (`default_estimate`)
  - 下限：0
  - 上限：5
  - 单位：kg
  - 基准：每 kg 本过程实测精制茶输出
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算 (`reasoned_estimate`)

###### PM2.5 颗粒物排入空气（`finishing_particles_pm25_air`）

单独记录该交换，确保一行只识别一个物理或化学流。

- 适用性：仅在有实测排放，或依据已采集活动数据和有引用的因子方法计算排放时纳入。
- 选定流：颗粒物，PM2.5，排入未指明空气 `08a91e70-3ddc-11dd-9293-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：依据所引用前景采集协议计量、核对或计算该原子交换数量
- 数值来源模式：计算值 (`calculated_value`)
- 适用范围：技术特定 (`technology_specific`)
- 归一化基准：每 kg 本过程实测精制茶输出
- 基准类型：过程输出（`process_output`）
- 证据类型：根据采集计算 (`calculated_from_collection`)
- 采集协议：`cp_waste_and_emission_records`
- 来源：
- 数量范围：宽泛暂定筛选范围
  - 范围角色：默认估计 (`default_estimate`)
  - 下限：0
  - 上限：5
  - 单位：kg
  - 基准：每 kg 本过程实测精制茶输出
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算 (`reasoned_estimate`)

###### HFC-134a 排入空气（`finishing_hfc134a_air`）

单独记录该交换，确保一行只识别一个物理或化学流。

- 适用性：仅在有实测排放，或依据已采集活动数据和有引用的因子方法计算排放时纳入。
- 选定流：HFC-134a，排入未指明空气 `fe0acd60-3ddc-11dd-a6d2-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：依据所引用前景采集协议计量、核对或计算该原子交换数量
- 数值来源模式：计算值 (`calculated_value`)
- 适用范围：技术特定 (`technology_specific`)
- 归一化基准：每 kg 本过程实测精制茶输出
- 基准类型：过程输出（`process_output`）
- 证据类型：根据采集计算 (`calculated_from_collection`)
- 采集协议：`cp_waste_and_emission_records`
- 来源：
- 数量范围：宽泛暂定筛选范围
  - 范围角色：默认估计 (`default_estimate`)
  - 下限：0
  - 上限：5
  - 单位：kg
  - 基准：每 kg 本过程实测精制茶输出
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算 (`reasoned_estimate`)

###### R-404A 排入空气（`finishing_r404a_air`）

单独记录该交换，确保一行只识别一个物理或化学流。

- 适用性：仅在有实测排放，或依据已采集活动数据和有引用的因子方法计算排放时纳入。
- 选定流：R-404A 制冷剂，排入空气
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：依据所引用前景采集协议计量、核对或计算该原子交换数量
- 数值来源模式：计算值 (`calculated_value`)
- 适用范围：技术特定 (`technology_specific`)
- 归一化基准：每 kg 本过程实测精制茶输出
- 基准类型：过程输出（`process_output`）
- 证据类型：根据采集计算 (`calculated_from_collection`)
- 采集协议：`cp_waste_and_emission_records`
- 来源：
- 数量范围：宽泛暂定筛选范围
  - 范围角色：默认估计 (`default_estimate`)
  - 下限：0
  - 上限：5
  - 单位：kg
  - 基准：每 kg 本过程实测精制茶输出
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算 (`reasoned_estimate`)

###### 氨排入空气（`finishing_ammonia_air`）

单独记录该交换，确保一行只识别一个物理或化学流。

- 适用性：仅在有实测排放，或依据已采集活动数据和有引用的因子方法计算排放时纳入。
- 选定流：氨，排入未指明空气 `08a91e70-3ddc-11dd-a2a9-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：依据所引用前景采集协议计量、核对或计算该原子交换数量
- 数值来源模式：计算值 (`calculated_value`)
- 适用范围：技术特定 (`technology_specific`)
- 归一化基准：每 kg 本过程实测精制茶输出
- 基准类型：过程输出（`process_output`）
- 证据类型：根据采集计算 (`calculated_from_collection`)
- 采集协议：`cp_waste_and_emission_records`
- 来源：
- 数量范围：宽泛暂定筛选范围
  - 范围角色：默认估计 (`default_estimate`)
  - 下限：0
  - 上限：5
  - 单位：kg
  - 基准：每 kg 本过程实测精制茶输出
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算 (`reasoned_estimate`)

### 过程：茶叶即时包装（`tea_immediate_packaging`）

#### 输入

##### 产品流

###### 供应至即时包装绿茶（`packaging_input_green_tea`）

单独记录该交换，确保一行只识别一个物理或化学流。

- 适用性：本次转移中存在绿茶时纳入；保留形态和含水率基准。
- 选定流：未包装绿茶，未发酵
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：依据所引用前景采集协议计量、核对或计算该原子交换数量
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：产品特定 (`product_specific`)
- 归一化基准：每 1 kg 净合格包装茶输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_output_and_inventory_records`
- 来源：
- 数量范围：宽泛暂定筛选范围
  - 范围角色：默认估计 (`default_estimate`)
  - 下限：0
  - 上限：10
  - 单位：kg
  - 基准：每 1 kg 净合格包装茶输出
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算 (`reasoned_estimate`)

###### 供应至即时包装红茶（`packaging_input_black_tea`）

单独记录该交换，确保一行只识别一个物理或化学流。

- 适用性：本次转移中存在红茶时纳入；保留形态和含水率基准。
- 选定流：未包装红茶，已发酵
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：依据所引用前景采集协议计量、核对或计算该原子交换数量
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：产品特定 (`product_specific`)
- 归一化基准：每 1 kg 净合格包装茶输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_output_and_inventory_records`
- 来源：
- 数量范围：宽泛暂定筛选范围
  - 范围角色：默认估计 (`default_estimate`)
  - 下限：0
  - 上限：10
  - 单位：kg
  - 基准：每 1 kg 净合格包装茶输出
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算 (`reasoned_estimate`)

###### 供应至即时包装部分发酵茶（`packaging_input_partly_fermented_tea`）

单独记录该交换，确保一行只识别一个物理或化学流。

- 适用性：本次转移中存在部分发酵茶时纳入；保留形态和含水率基准。
- 选定流：未包装部分发酵茶
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：依据所引用前景采集协议计量、核对或计算该原子交换数量
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：产品特定 (`product_specific`)
- 归一化基准：每 1 kg 净合格包装茶输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_output_and_inventory_records`
- 来源：
- 数量范围：宽泛暂定筛选范围
  - 范围角色：默认估计 (`default_estimate`)
  - 下限：0
  - 上限：10
  - 单位：kg
  - 基准：每 1 kg 净合格包装茶输出
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算 (`reasoned_estimate`)

###### 茶包滤纸（`packaging_tea_bag_filter_paper`）

单独记录该交换，确保一行只识别一个物理或化学流。

- 适用性：声明路线中存在该原子交换时纳入；仅在有记录证明未发生时省略。
- 选定流：茶包滤纸
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：依据所引用前景采集协议计量、核对或计算该原子交换数量
- 数值来源模式：计算值 (`calculated_value`)
- 适用范围：产品特定 (`product_specific`)
- 归一化基准：每 1 kg 净合格包装茶输出
- 基准类型：过程输出（`process_output`）
- 证据类型：根据采集计算 (`calculated_from_collection`)
- 采集协议：`cp_packaging_bom_records`
- 来源：
- 数量范围：宽泛暂定筛选范围
  - 范围角色：默认估计 (`default_estimate`)
  - 下限：0
  - 上限：2
  - 单位：kg
  - 基准：每 1 kg 净合格包装茶输出
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算 (`reasoned_estimate`)

###### 棉质茶包线（`packaging_cotton_thread`）

单独记录该交换，确保一行只识别一个物理或化学流。

- 适用性：声明路线中存在该原子交换时纳入；仅在有记录证明未发生时省略。
- 选定流：棉质茶包线
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：依据所引用前景采集协议计量、核对或计算该原子交换数量
- 数值来源模式：计算值 (`calculated_value`)
- 适用范围：产品特定 (`product_specific`)
- 归一化基准：每 1 kg 净合格包装茶输出
- 基准类型：过程输出（`process_output`）
- 证据类型：根据采集计算 (`calculated_from_collection`)
- 采集协议：`cp_packaging_bom_records`
- 来源：
- 数量范围：宽泛暂定筛选范围
  - 范围角色：默认估计 (`default_estimate`)
  - 下限：0
  - 上限：2
  - 单位：kg
  - 基准：每 1 kg 净合格包装茶输出
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算 (`reasoned_estimate`)

###### 铝制订钉线（`packaging_aluminium_staple_wire`）

单独记录该交换，确保一行只识别一个物理或化学流。

- 适用性：声明路线中存在该原子交换时纳入；仅在有记录证明未发生时省略。
- 选定流：铝线 `89db8507-09bd-45f8-ba96-4e459058412c`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：依据所引用前景采集协议计量、核对或计算该原子交换数量
- 数值来源模式：计算值 (`calculated_value`)
- 适用范围：产品特定 (`product_specific`)
- 归一化基准：每 1 kg 净合格包装茶输出
- 基准类型：过程输出（`process_output`）
- 证据类型：根据采集计算 (`calculated_from_collection`)
- 采集协议：`cp_packaging_bom_records`
- 来源：
- 数量范围：宽泛暂定筛选范围
  - 范围角色：默认估计 (`default_estimate`)
  - 下限：0
  - 上限：2
  - 单位：kg
  - 基准：每 1 kg 净合格包装茶输出
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算 (`reasoned_estimate`)

###### 聚丙烯即时包装膜（`packaging_polypropylene_film`）

单独记录该交换，确保一行只识别一个物理或化学流。

- 适用性：声明路线中存在该原子交换时纳入；仅在有记录证明未发生时省略。
- 选定流：聚丙烯包装膜
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：依据所引用前景采集协议计量、核对或计算该原子交换数量
- 数值来源模式：计算值 (`calculated_value`)
- 适用范围：产品特定 (`product_specific`)
- 归一化基准：每 1 kg 净合格包装茶输出
- 基准类型：过程输出（`process_output`）
- 证据类型：根据采集计算 (`calculated_from_collection`)
- 采集协议：`cp_packaging_bom_records`
- 来源：
- 数量范围：宽泛暂定筛选范围
  - 范围角色：默认估计 (`default_estimate`)
  - 下限：0
  - 上限：2
  - 单位：kg
  - 基准：每 1 kg 净合格包装茶输出
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算 (`reasoned_estimate`)

###### 聚乙烯即时包装膜（`packaging_polyethylene_film`）

单独记录该交换，确保一行只识别一个物理或化学流。

- 适用性：声明路线中存在该原子交换时纳入；仅在有记录证明未发生时省略。
- 选定流：聚乙烯包装膜
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：依据所引用前景采集协议计量、核对或计算该原子交换数量
- 数值来源模式：计算值 (`calculated_value`)
- 适用范围：产品特定 (`product_specific`)
- 归一化基准：每 1 kg 净合格包装茶输出
- 基准类型：过程输出（`process_output`）
- 证据类型：根据采集计算 (`calculated_from_collection`)
- 采集协议：`cp_packaging_bom_records`
- 来源：
- 数量范围：宽泛暂定筛选范围
  - 范围角色：默认估计 (`default_estimate`)
  - 下限：0
  - 上限：2
  - 单位：kg
  - 基准：每 1 kg 净合格包装茶输出
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算 (`reasoned_estimate`)

###### 铝箔（`packaging_aluminium_foil`）

单独记录该交换，确保一行只识别一个物理或化学流。

- 适用性：声明路线中存在该原子交换时纳入；仅在有记录证明未发生时省略。
- 选定流：铝箔 `d3e373a5-987f-4e3a-9f5b-8feaa9aa01e2`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：依据所引用前景采集协议计量、核对或计算该原子交换数量
- 数值来源模式：计算值 (`calculated_value`)
- 适用范围：产品特定 (`product_specific`)
- 归一化基准：每 1 kg 净合格包装茶输出
- 基准类型：过程输出（`process_output`）
- 证据类型：根据采集计算 (`calculated_from_collection`)
- 采集协议：`cp_packaging_bom_records`
- 来源：
- 数量范围：宽泛暂定筛选范围
  - 范围角色：默认估计 (`default_estimate`)
  - 下限：0
  - 上限：2
  - 单位：kg
  - 基准：每 1 kg 净合格包装茶输出
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算 (`reasoned_estimate`)

###### 纸板即时包装盒（`packaging_paperboard_carton`）

单独记录该交换，确保一行只识别一个物理或化学流。

- 适用性：声明路线中存在该原子交换时纳入；仅在有记录证明未发生时省略。
- 选定流：纸板包装盒 `12d5d744-7725-4dbc-b102-43c80547f777`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：依据所引用前景采集协议计量、核对或计算该原子交换数量
- 数值来源模式：计算值 (`calculated_value`)
- 适用范围：产品特定 (`product_specific`)
- 归一化基准：每 1 kg 净合格包装茶输出
- 基准类型：过程输出（`process_output`）
- 证据类型：根据采集计算 (`calculated_from_collection`)
- 采集协议：`cp_packaging_bom_records`
- 来源：
- 数量范围：宽泛暂定筛选范围
  - 范围角色：默认估计 (`default_estimate`)
  - 下限：0
  - 上限：2
  - 单位：kg
  - 基准：每 1 kg 净合格包装茶输出
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算 (`reasoned_estimate`)

###### 钢制茶叶罐（`packaging_steel_food_can`）

单独记录该交换，确保一行只识别一个物理或化学流。

- 适用性：声明路线中存在该原子交换时纳入；仅在有记录证明未发生时省略。
- 选定流：钢制食品罐 `f09b782f-b3db-4b1e-8473-597edcc5b6d7`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：依据所引用前景采集协议计量、核对或计算该原子交换数量
- 数值来源模式：计算值 (`calculated_value`)
- 适用范围：产品特定 (`product_specific`)
- 归一化基准：每 1 kg 净合格包装茶输出
- 基准类型：过程输出（`process_output`）
- 证据类型：根据采集计算 (`calculated_from_collection`)
- 采集协议：`cp_packaging_bom_records`
- 来源：
- 数量范围：宽泛暂定筛选范围
  - 范围角色：默认估计 (`default_estimate`)
  - 下限：0
  - 上限：2
  - 单位：kg
  - 基准：每 1 kg 净合格包装茶输出
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算 (`reasoned_estimate`)

###### 玻璃茶叶罐（`packaging_glass_jar`）

单独记录该交换，确保一行只识别一个物理或化学流。

- 适用性：声明路线中存在该原子交换时纳入；仅在有记录证明未发生时省略。
- 选定流：玻璃瓶罐 `eca48ea8-ab83-444f-98b2-15ab82570c80`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：依据所引用前景采集协议计量、核对或计算该原子交换数量
- 数值来源模式：计算值 (`calculated_value`)
- 适用范围：产品特定 (`product_specific`)
- 归一化基准：每 1 kg 净合格包装茶输出
- 基准类型：过程输出（`process_output`）
- 证据类型：根据采集计算 (`calculated_from_collection`)
- 采集协议：`cp_packaging_bom_records`
- 来源：
- 数量范围：宽泛暂定筛选范围
  - 范围角色：默认估计 (`default_estimate`)
  - 下限：0
  - 上限：2
  - 单位：kg
  - 基准：每 1 kg 净合格包装茶输出
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算 (`reasoned_estimate`)

###### 纸质包装标签（`packaging_paper_label`）

单独记录该交换，确保一行只识别一个物理或化学流。

- 适用性：仅适用于与已核验标签流匹配的中国生产组合；其他供应地域须使用另行复核的原子行。
- 选定流：纸质包装标签 `d5890643-6859-42b5-9e05-556b072c6a8c`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：依据所引用前景采集协议计量、核对或计算该原子交换数量
- 数值来源模式：计算值 (`calculated_value`)
- 适用范围：产品特定 (`product_specific`)
- 归一化基准：每 1 kg 净合格包装茶输出
- 基准类型：过程输出（`process_output`）
- 证据类型：根据采集计算 (`calculated_from_collection`)
- 采集协议：`cp_packaging_bom_records`
- 来源：
- 数量范围：宽泛暂定筛选范围
  - 范围角色：默认估计 (`default_estimate`)
  - 下限：0
  - 上限：2
  - 单位：kg
  - 基准：每 1 kg 净合格包装茶输出
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算 (`reasoned_estimate`)

###### 水性食品包装胶黏剂（`packaging_water_based_adhesive`）

单独记录该交换，确保一行只识别一个物理或化学流。

- 适用性：声明路线中存在该原子交换时纳入；仅在有记录证明未发生时省略。
- 选定流：水性食品包装胶黏剂
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：依据所引用前景采集协议计量、核对或计算该原子交换数量
- 数值来源模式：计算值 (`calculated_value`)
- 适用范围：产品特定 (`product_specific`)
- 归一化基准：每 1 kg 净合格包装茶输出
- 基准类型：过程输出（`process_output`）
- 证据类型：根据采集计算 (`calculated_from_collection`)
- 采集协议：`cp_packaging_bom_records`
- 来源：
- 数量范围：宽泛暂定筛选范围
  - 范围角色：默认估计 (`default_estimate`)
  - 下限：0
  - 上限：2
  - 单位：kg
  - 基准：每 1 kg 净合格包装茶输出
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算 (`reasoned_estimate`)

###### 食品接触包装油墨（`packaging_food_contact_printing_ink`）

单独记录该交换，确保一行只识别一个物理或化学流。

- 适用性：声明路线中存在该原子交换时纳入；仅在有记录证明未发生时省略。
- 选定流：食品接触包装油墨
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：依据所引用前景采集协议计量、核对或计算该原子交换数量
- 数值来源模式：计算值 (`calculated_value`)
- 适用范围：产品特定 (`product_specific`)
- 归一化基准：每 1 kg 净合格包装茶输出
- 基准类型：过程输出（`process_output`）
- 证据类型：根据采集计算 (`calculated_from_collection`)
- 采集协议：`cp_packaging_bom_records`
- 来源：
- 数量范围：宽泛暂定筛选范围
  - 范围角色：默认估计 (`default_estimate`)
  - 下限：0
  - 上限：2
  - 单位：kg
  - 基准：每 1 kg 净合格包装茶输出
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算 (`reasoned_estimate`)

###### 塑料包装封口件（`packaging_plastic_closure`）

单独记录该交换，确保一行只识别一个物理或化学流。

- 适用性：仅适用于与已核验塑料封口件流匹配的中国生产组合；其他供应地域须使用另行复核的原子行。
- 选定流：一次包装，塑料封口件 `0161e346-2ac3-48be-b61d-e94ebb6f4b0f`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：依据所引用前景采集协议计量、核对或计算该原子交换数量
- 数值来源模式：计算值 (`calculated_value`)
- 适用范围：产品特定 (`product_specific`)
- 归一化基准：每 1 kg 净合格包装茶输出
- 基准类型：过程输出（`process_output`）
- 证据类型：根据采集计算 (`calculated_from_collection`)
- 采集协议：`cp_packaging_bom_records`
- 来源：
- 数量范围：宽泛暂定筛选范围
  - 范围角色：默认估计 (`default_estimate`)
  - 下限：0
  - 上限：2
  - 单位：kg
  - 基准：每 1 kg 净合格包装茶输出
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算 (`reasoned_estimate`)

###### 瓦楞纸板运输包装（`distribution_corrugated_board`）

单独记录该交换，确保一行只识别一个物理或化学流。

- 适用性：声明路线中存在该原子交换时纳入；仅在有记录证明未发生时省略。
- 选定流：瓦楞纸板 `8bde297e-98df-463f-bcb4-0db52bf6e0b5`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：依据所引用前景采集协议计量、核对或计算该原子交换数量
- 数值来源模式：计算值 (`calculated_value`)
- 适用范围：产品特定 (`product_specific`)
- 归一化基准：每 1 kg 净合格包装茶输出
- 基准类型：过程输出（`process_output`）
- 证据类型：根据采集计算 (`calculated_from_collection`)
- 采集协议：`cp_packaging_bom_records`
- 来源：
- 数量范围：宽泛暂定筛选范围
  - 范围角色：默认估计 (`default_estimate`)
  - 下限：0
  - 上限：2
  - 单位：kg
  - 基准：每 1 kg 净合格包装茶输出
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算 (`reasoned_estimate`)

###### 低密度聚乙烯缠绕膜（`distribution_ldpe_stretch_film`）

单独记录该交换，确保一行只识别一个物理或化学流。

- 适用性：声明路线中存在该原子交换时纳入；仅在有记录证明未发生时省略。
- 选定流：低密度聚乙烯缠绕膜
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：依据所引用前景采集协议计量、核对或计算该原子交换数量
- 数值来源模式：计算值 (`calculated_value`)
- 适用范围：产品特定 (`product_specific`)
- 归一化基准：每 1 kg 净合格包装茶输出
- 基准类型：过程输出（`process_output`）
- 证据类型：根据采集计算 (`calculated_from_collection`)
- 采集协议：`cp_packaging_bom_records`
- 来源：
- 数量范围：宽泛暂定筛选范围
  - 范围角色：默认估计 (`default_estimate`)
  - 下限：0
  - 上限：2
  - 单位：kg
  - 基准：每 1 kg 净合格包装茶输出
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算 (`reasoned_estimate`)

###### 木制运输托盘（`distribution_wooden_pallet`）

单独记录该交换，确保一行只识别一个物理或化学流。

- 适用性：声明路线中存在该原子交换时纳入；仅在有记录证明未发生时省略。
- 选定流：木制托盘 `4b49871e-95be-4e0c-9223-9902f9eaa763`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：依据所引用前景采集协议计量、核对或计算该原子交换数量
- 数值来源模式：计算值 (`calculated_value`)
- 适用范围：产品特定 (`product_specific`)
- 归一化基准：每 1 kg 净合格包装茶输出
- 基准类型：过程输出（`process_output`）
- 证据类型：根据采集计算 (`calculated_from_collection`)
- 采集协议：`cp_packaging_bom_records`
- 来源：
- 数量范围：宽泛暂定筛选范围
  - 范围角色：默认估计 (`default_estimate`)
  - 下限：0
  - 上限：2
  - 单位：kg
  - 基准：每 1 kg 净合格包装茶输出
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算 (`reasoned_estimate`)

###### 模塑纸浆包装内衬（`distribution_moulded_pulp_insert`）

单独记录该交换，确保一行只识别一个物理或化学流。

- 适用性：仅适用于与已核验模塑纸浆内衬流匹配的中国生产组合；其他供应地域须使用另行复核的原子行。
- 选定流：模塑纸浆包装内衬 `2452c680-7e60-4e7d-b170-fb98ac7a9fe2`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：依据所引用前景采集协议计量、核对或计算该原子交换数量
- 数值来源模式：计算值 (`calculated_value`)
- 适用范围：产品特定 (`product_specific`)
- 归一化基准：每 1 kg 净合格包装茶输出
- 基准类型：过程输出（`process_output`）
- 证据类型：根据采集计算 (`calculated_from_collection`)
- 采集协议：`cp_packaging_bom_records`
- 来源：
- 数量范围：宽泛暂定筛选范围
  - 范围角色：默认估计 (`default_estimate`)
  - 下限：0
  - 上限：2
  - 单位：kg
  - 基准：每 1 kg 净合格包装茶输出
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算 (`reasoned_estimate`)

###### 即时包装高压电力（`packaging_electricity_high_voltage`）

单独记录该交换，确保一行只识别一个物理或化学流。

- 适用性：适用于计量的 35–330 kV 电网供电点；不得把同一供电点重复计入其他电压卡。
- 选定流：高压交流电，35–330 kV，消费组合
- 流属性/单位：能量 / kWh
- 数量规则：依据所引用前景采集协议计量、核对或计算该原子交换数量
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 净合格包装茶输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_energy_and_fuel_records`
- 来源：
- 数量范围：宽泛暂定筛选范围
  - 范围角色：默认估计 (`default_estimate`)
  - 下限：0
  - 上限：20
  - 单位：kWh
  - 基准：每 1 kg 净合格包装茶输出
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算 (`reasoned_estimate`)

###### 即时包装中压电力（`packaging_electricity_medium_voltage`）

单独记录该交换，确保一行只识别一个物理或化学流。

- 适用性：适用于计量的 1–35 kV 电网供电点；不得把同一供电点重复计入其他电压卡。
- 选定流：中压交流电，1–35 kV，消费组合
- 流属性/单位：能量 / kWh
- 数量规则：依据所引用前景采集协议计量、核对或计算该原子交换数量
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 净合格包装茶输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_energy_and_fuel_records`
- 来源：
- 数量范围：宽泛暂定筛选范围
  - 范围角色：默认估计 (`default_estimate`)
  - 下限：0
  - 上限：20
  - 单位：kWh
  - 基准：每 1 kg 净合格包装茶输出
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算 (`reasoned_estimate`)

###### 即时包装低压电力（`packaging_electricity_low_voltage`）

单独记录该交换，确保一行只识别一个物理或化学流。

- 适用性：适用于计量的低于 1 kV 电网供电点；不得把同一供电点重复计入其他电压卡。
- 选定流：低压交流电，低于 1 kV，消费组合
- 流属性/单位：能量 / kWh
- 数量规则：依据所引用前景采集协议计量、核对或计算该原子交换数量
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 净合格包装茶输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_energy_and_fuel_records`
- 来源：
- 数量范围：宽泛暂定筛选范围
  - 范围角色：默认估计 (`default_estimate`)
  - 下限：0
  - 上限：20
  - 单位：kWh
  - 基准：每 1 kg 净合格包装茶输出
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算 (`reasoned_estimate`)

###### 即时包装场内光伏电力（`packaging_electricity_onsite_photovoltaic`）

单独记录该交换，确保一行只识别一个物理或化学流。

- 适用性：仅适用于在声明前景边界内发电并消耗的光伏电力；不计外送电量。
- 选定流：场内光伏交流电
- 流属性/单位：能量 / kWh
- 数量规则：依据所引用前景采集协议计量、核对或计算该原子交换数量
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 净合格包装茶输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_energy_and_fuel_records`
- 来源：
- 数量范围：宽泛暂定筛选范围
  - 范围角色：默认估计 (`default_estimate`)
  - 下限：0
  - 上限：20
  - 单位：kWh
  - 基准：每 1 kg 净合格包装茶输出
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算 (`reasoned_estimate`)

###### 即时包装外购蒸汽热（`packaging_purchased_steam`）

单独记录该交换，确保一行只识别一个物理或化学流。

- 适用性：仅在蒸汽热跨越前景边界时纳入；场内燃料卡已完整表示供热时省略。
- 选定流：蒸汽供热 `cbc1f372-5c64-4ad5-a938-89b9396758c9`
- 流属性/单位：总热值 `93a60a56-a3c8-14da-a746-0800200c9a66` / MJ
- 数量规则：依据所引用前景采集协议计量、核对或计算该原子交换数量
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：技术特定 (`technology_specific`)
- 归一化基准：每 1 kg 净合格包装茶输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_energy_and_fuel_records`
- 来源：
- 数量范围：宽泛暂定筛选范围
  - 范围角色：默认估计 (`default_estimate`)
  - 下限：0
  - 上限：50
  - 单位：MJ
  - 基准：每 1 kg 净合格包装茶输出
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算 (`reasoned_estimate`)

###### 即时包装外购热水热（`packaging_purchased_hot_water`）

单独记录该交换，确保一行只识别一个物理或化学流。

- 适用性：仅在作为热力供应的热水跨越前景边界时纳入；与蒸汽热分开记录。
- 选定流：外购热水热
- 流属性/单位：能量 / MJ
- 数量规则：依据所引用前景采集协议计量、核对或计算该原子交换数量
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：技术特定 (`technology_specific`)
- 归一化基准：每 1 kg 净合格包装茶输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_energy_and_fuel_records`
- 来源：
- 数量范围：宽泛暂定筛选范围
  - 范围角色：默认估计 (`default_estimate`)
  - 下限：0
  - 上限：50
  - 单位：MJ
  - 基准：每 1 kg 净合格包装茶输出
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算 (`reasoned_estimate`)

###### 即时包装天然气（`packaging_natural_gas`）

单独记录该交换，确保一行只识别一个物理或化学流。

- 适用性：仅在声明过程消耗气态天然气时纳入。
- 选定流：气态天然气 `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：依据所引用前景采集协议计量、核对或计算该原子交换数量
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：技术特定 (`technology_specific`)
- 归一化基准：每 1 kg 净合格包装茶输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_energy_and_fuel_records`
- 来源：
- 数量范围：宽泛暂定筛选范围
  - 范围角色：默认估计 (`default_estimate`)
  - 下限：0
  - 上限：10
  - 单位：kg
  - 基准：每 1 kg 净合格包装茶输出
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算 (`reasoned_estimate`)

###### 即时包装液化石油气（`packaging_lpg`）

单独记录该交换，确保一行只识别一个物理或化学流。

- 适用性：仅在声明过程消耗液化石油气时纳入。
- 选定流：液化石油气 `d54ae71a-1245-4e3f-b694-dbf2b22bbf7d`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：依据所引用前景采集协议计量、核对或计算该原子交换数量
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：技术特定 (`technology_specific`)
- 归一化基准：每 1 kg 净合格包装茶输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_energy_and_fuel_records`
- 来源：
- 数量范围：宽泛暂定筛选范围
  - 范围角色：默认估计 (`default_estimate`)
  - 下限：0
  - 上限：10
  - 单位：kg
  - 基准：每 1 kg 净合格包装茶输出
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算 (`reasoned_estimate`)

###### 即时包装柴油（`packaging_diesel`）

单独记录该交换，确保一行只识别一个物理或化学流。

- 适用性：仅在声明过程消耗柴油时纳入。
- 选定流：柴油 `9d258d75-6792-4f1c-9856-81602ed8f816`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：依据所引用前景采集协议计量、核对或计算该原子交换数量
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：技术特定 (`technology_specific`)
- 归一化基准：每 1 kg 净合格包装茶输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_energy_and_fuel_records`
- 来源：
- 数量范围：宽泛暂定筛选范围
  - 范围角色：默认估计 (`default_estimate`)
  - 下限：0
  - 上限：10
  - 单位：kg
  - 基准：每 1 kg 净合格包装茶输出
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算 (`reasoned_estimate`)

###### 即时包装重质燃料油（`packaging_heavy_fuel_oil`）

单独记录该交换，确保一行只识别一个物理或化学流。

- 适用性：仅在消耗所述硫含量等级的重质燃料油时纳入；不同等级须另行复核并单列。
- 选定流：重质燃料油，硫含量 1.0 wt.% `53afe53a-7bbc-4b82-8e39-df2c6bbb2c46`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：依据所引用前景采集协议计量、核对或计算该原子交换数量
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：技术特定 (`technology_specific`)
- 归一化基准：每 1 kg 净合格包装茶输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_energy_and_fuel_records`
- 来源：
- 数量范围：宽泛暂定筛选范围
  - 范围角色：默认估计 (`default_estimate`)
  - 下限：0
  - 上限：10
  - 单位：kg
  - 基准：每 1 kg 净合格包装茶输出
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算 (`reasoned_estimate`)

###### 即时包装硬煤（`packaging_hard_coal`）

单独记录该交换，确保一行只识别一个物理或化学流。

- 适用性：仅在消耗声明的硬煤等级时纳入；不得用于其他煤种。
- 选定流：硬煤
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：依据所引用前景采集协议计量、核对或计算该原子交换数量
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：技术特定 (`technology_specific`)
- 归一化基准：每 1 kg 净合格包装茶输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_energy_and_fuel_records`
- 来源：
- 数量范围：宽泛暂定筛选范围
  - 范围角色：默认估计 (`default_estimate`)
  - 下限：0
  - 上限：10
  - 单位：kg
  - 基准：每 1 kg 净合格包装茶输出
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算 (`reasoned_estimate`)

###### 即时包装生物质致密成型燃料（`packaging_biomass_briquette`）

单独记录该交换，确保一行只识别一个物理或化学流。

- 适用性：仅在消耗生物质致密成型燃料时纳入；在交换文件中保留原料和含水率等级。
- 选定流：生物质致密成型燃料
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：依据所引用前景采集协议计量、核对或计算该原子交换数量
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：技术特定 (`technology_specific`)
- 归一化基准：每 1 kg 净合格包装茶输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_energy_and_fuel_records`
- 来源：
- 数量范围：宽泛暂定筛选范围
  - 范围角色：默认估计 (`default_estimate`)
  - 下限：0
  - 上限：10
  - 单位：kg
  - 基准：每 1 kg 净合格包装茶输出
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算 (`reasoned_estimate`)

###### 即时包装沼气（`packaging_biogas`）

单独记录该交换，确保一行只识别一个物理或化学流。

- 适用性：仅在消耗所述甲烷含量范围的沼气时纳入；记录参考温度和压力。
- 选定流：沼气，甲烷含量 50–80%
- 流属性/单位：体积 `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- 数量规则：依据所引用前景采集协议计量、核对或计算该原子交换数量
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：技术特定 (`technology_specific`)
- 归一化基准：每 1 kg 净合格包装茶输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_energy_and_fuel_records`
- 来源：
- 数量范围：宽泛暂定筛选范围
  - 范围角色：默认估计 (`default_estimate`)
  - 下限：0
  - 上限：10
  - 单位：m3
  - 基准：每 1 kg 净合格包装茶输出
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算 (`reasoned_estimate`)

###### 即时包装压缩空气（`packaging_compressed_air`）

单独记录该交换，确保一行只识别一个物理或化学流。

- 适用性：仅在压缩空气跨越声明过程边界时纳入；记录压力和参考条件。
- 选定流：压缩空气 `46e2b1e4-5a4e-4579-b6a2-65b03f9ce825`
- 流属性/单位：体积 `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- 数量规则：依据所引用前景采集协议计量、核对或计算该原子交换数量
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：技术特定 (`technology_specific`)
- 归一化基准：每 1 kg 净合格包装茶输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_energy_and_fuel_records`
- 来源：
- 数量范围：宽泛暂定筛选范围
  - 范围角色：默认估计 (`default_estimate`)
  - 下限：0
  - 上限：100
  - 单位：m3
  - 基准：每 1 kg 净合格包装茶输出
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算 (`reasoned_estimate`)

###### 即时包装R-134a 制冷剂补充（`packaging_r134a_makeup`）

单独记录该交换，确保一行只识别一个物理或化学流。

- 适用性：仅在向范围内制冷设备补充 R-134a 时纳入。
- 选定流：制冷剂，R134a `86e15f5d-a7dd-40be-8dc4-ac9fa826a309`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：依据所引用前景采集协议计量、核对或计算该原子交换数量
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：技术特定 (`technology_specific`)
- 归一化基准：每 1 kg 净合格包装茶输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_energy_and_fuel_records`
- 来源：
- 数量范围：宽泛暂定筛选范围
  - 范围角色：默认估计 (`default_estimate`)
  - 下限：0
  - 上限：1
  - 单位：kg
  - 基准：每 1 kg 净合格包装茶输出
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算 (`reasoned_estimate`)

###### 即时包装R-404A 制冷剂补充（`packaging_r404a_makeup`）

单独记录该交换，确保一行只识别一个物理或化学流。

- 适用性：仅在向范围内制冷设备补充 R-404A 时纳入。
- 选定流：制冷剂，R404A `76513c71-a148-484e-865f-2ab54afb4331`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：依据所引用前景采集协议计量、核对或计算该原子交换数量
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：技术特定 (`technology_specific`)
- 归一化基准：每 1 kg 净合格包装茶输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_energy_and_fuel_records`
- 来源：
- 数量范围：宽泛暂定筛选范围
  - 范围角色：默认估计 (`default_estimate`)
  - 下限：0
  - 上限：1
  - 单位：kg
  - 基准：每 1 kg 净合格包装茶输出
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算 (`reasoned_estimate`)

###### 即时包装氨制冷剂补充（`packaging_ammonia_refrigerant_makeup`）

单独记录该交换，确保一行只识别一个物理或化学流。

- 适用性：仅在向范围内设备补充无水氨制冷剂时纳入。
- 选定流：无水氨制冷剂
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：依据所引用前景采集协议计量、核对或计算该原子交换数量
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：技术特定 (`technology_specific`)
- 归一化基准：每 1 kg 净合格包装茶输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_energy_and_fuel_records`
- 来源：
- 数量范围：宽泛暂定筛选范围
  - 范围角色：默认估计 (`default_estimate`)
  - 下限：0
  - 上限：1
  - 单位：kg
  - 基准：每 1 kg 净合格包装茶输出
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算 (`reasoned_estimate`)

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 即时包装合格茶（`packaged_tea_output`）

单独记录该交换，确保一行只识别一个物理或化学流。

- 适用性：每个合格数据包都必须包含该定量参考输出。
- 选定流：绿茶（未发酵）、红茶（已发酵）及部分发酵茶，即时包装内容量不超过 3 kg `549f6c0d-6dd6-488d-a7c4-b1d5821fe309`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：净合格茶内容物恰为 1 kg，不含包装质量
- 数值来源模式：固定值 (`fixed_value`)
- 适用范围：产品特定 (`product_specific`)
- 归一化基准：每 1 kg 净合格包装茶输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：身份引用 (`identity_reference`)
- 采集协议：
- 来源：
- 数量范围：宽泛暂定筛选范围
  - 范围角色：允许范围 (`allowed_range`)
  - 下限：1
  - 上限：1
  - 单位：kg
  - 基准：每 1 kg 净合格包装茶输出
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：身份引用 (`identity_reference`)

##### 废物流

###### 废弃茶包滤纸（`packaging_waste_filter_paper`）

单独记录该交换，确保一行只识别一个物理或化学流。

- 适用性：声明路线中存在该原子交换时纳入；仅在有记录证明未发生时省略。
- 选定流：废弃茶包滤纸
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：依据所引用前景采集协议计量、核对或计算该原子交换数量
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 净合格包装茶输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_waste_and_emission_records`
- 来源：
- 数量范围：宽泛暂定筛选范围
  - 范围角色：默认估计 (`default_estimate`)
  - 下限：0
  - 上限：2
  - 单位：kg
  - 基准：每 1 kg 净合格包装茶输出
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算 (`reasoned_estimate`)

###### 废弃聚乙烯包装（`packaging_waste_polyethylene`）

单独记录该交换，确保一行只识别一个物理或化学流。

- 适用性：仅当废弃聚乙烯包装进入经清洁的机械回收路线时使用该流；不得将此 UUID 用于其他路线，其他路线仍是未解析身份缺口。
- 选定流：废聚乙烯 `7e78f0a8-c042-47ca-a742-3bac92be1477`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：依据所引用前景采集协议计量、核对或计算该原子交换数量
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 净合格包装茶输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_waste_and_emission_records`
- 来源：
- 数量范围：宽泛暂定筛选范围
  - 范围角色：默认估计 (`default_estimate`)
  - 下限：0
  - 上限：2
  - 单位：kg
  - 基准：每 1 kg 净合格包装茶输出
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算 (`reasoned_estimate`)

###### 废弃聚丙烯包装（`packaging_waste_polypropylene`）

单独记录该交换，确保一行只识别一个物理或化学流。

- 适用性：仅当废弃聚丙烯包装进入机械回收路线时使用该流；不得将此 UUID 用于其他路线，其他路线仍是未解析身份缺口。
- 选定流：聚丙烯废料 `88215d1b-e6b6-4ec7-af7f-83375e80637b`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：依据所引用前景采集协议计量、核对或计算该原子交换数量
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 净合格包装茶输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_waste_and_emission_records`
- 来源：
- 数量范围：宽泛暂定筛选范围
  - 范围角色：默认估计 (`default_estimate`)
  - 下限：0
  - 上限：2
  - 单位：kg
  - 基准：每 1 kg 净合格包装茶输出
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算 (`reasoned_estimate`)

###### 废弃纸板包装（`packaging_waste_cardboard`）

单独记录该交换，确保一行只识别一个物理或化学流。

- 适用性：声明路线中存在该原子交换时纳入；仅在有记录证明未发生时省略。
- 选定流：包装废弃物，纸板 `72270223-04b1-4986-a546-94e5a0821317`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：依据所引用前景采集协议计量、核对或计算该原子交换数量
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 净合格包装茶输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_waste_and_emission_records`
- 来源：
- 数量范围：宽泛暂定筛选范围
  - 范围角色：默认估计 (`default_estimate`)
  - 下限：0
  - 上限：2
  - 单位：kg
  - 基准：每 1 kg 净合格包装茶输出
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算 (`reasoned_estimate`)

###### 废弃铝包装（`packaging_waste_aluminium`）

单独记录该交换，确保一行只识别一个物理或化学流。

- 适用性：仅当废弃铝包装进入铝废料回收路线时使用该流；不得将此 UUID 用于其他路线，其他路线仍是未解析身份缺口。
- 选定流：铝废料 `96c5f842-ea53-419b-b1cd-c02c479efb45`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：依据所引用前景采集协议计量、核对或计算该原子交换数量
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 净合格包装茶输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_waste_and_emission_records`
- 来源：
- 数量范围：宽泛暂定筛选范围
  - 范围角色：默认估计 (`default_estimate`)
  - 下限：0
  - 上限：2
  - 单位：kg
  - 基准：每 1 kg 净合格包装茶输出
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算 (`reasoned_estimate`)

###### 废弃镀锡钢包装（`packaging_waste_tinplate_steel`）

单独记录该交换，确保一行只识别一个物理或化学流。

- 适用性：仅当废弃镀锡钢包装进入有记录的钢废料分选路线时使用该流；不得将此 UUID 用于其他路线，其他路线仍是未解析身份缺口。
- 选定流：钢或镀锡板废料 `8a2f76f2-95c1-4c2c-8997-e84be2114a87`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：依据所引用前景采集协议计量、核对或计算该原子交换数量
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 净合格包装茶输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_waste_and_emission_records`
- 来源：
- 数量范围：宽泛暂定筛选范围
  - 范围角色：默认估计 (`default_estimate`)
  - 下限：0
  - 上限：2
  - 单位：kg
  - 基准：每 1 kg 净合格包装茶输出
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算 (`reasoned_estimate`)

###### 废弃玻璃包装（`packaging_waste_glass`）

单独记录该交换，确保一行只识别一个物理或化学流。

- 适用性：声明路线中存在该原子交换时纳入；仅在有记录证明未发生时省略。
- 选定流：玻璃包装废物
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：依据所引用前景采集协议计量、核对或计算该原子交换数量
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 净合格包装茶输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_waste_and_emission_records`
- 来源：
- 数量范围：宽泛暂定筛选范围
  - 范围角色：默认估计 (`default_estimate`)
  - 下限：0
  - 上限：2
  - 单位：kg
  - 基准：每 1 kg 净合格包装茶输出
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算 (`reasoned_estimate`)

###### 废弃木制托盘（`packaging_waste_wooden_pallet`）

单独记录该交换，确保一行只识别一个物理或化学流。

- 适用性：声明路线中存在该原子交换时纳入；仅在有记录证明未发生时省略。
- 选定流：废弃木制托盘
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：依据所引用前景采集协议计量、核对或计算该原子交换数量
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 净合格包装茶输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_waste_and_emission_records`
- 来源：
- 数量范围：宽泛暂定筛选范围
  - 范围角色：默认估计 (`default_estimate`)
  - 下限：0
  - 上限：2
  - 单位：kg
  - 基准：每 1 kg 净合格包装茶输出
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算 (`reasoned_estimate`)

###### 包装过程废弃茶叶（`packaging_rejected_tea_waste`）

单独记录该交换，确保一行只识别一个物理或化学流。

- 适用性：声明路线中存在该原子交换时纳入；仅在有记录证明未发生时省略。
- 选定流：废弃茶叶
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：依据所引用前景采集协议计量、核对或计算该原子交换数量
- 数值来源模式：前景记录 (`foreground_record`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每 1 kg 净合格包装茶输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录 (`collected_record`)
- 采集协议：`cp_waste_and_emission_records`
- 来源：
- 数量范围：宽泛暂定筛选范围
  - 范围角色：默认估计 (`default_estimate`)
  - 下限：0
  - 上限：5
  - 单位：kg
  - 基准：每 1 kg 净合格包装茶输出
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算 (`reasoned_estimate`)

##### 基本流

###### PM10 颗粒物排入空气（`packaging_particles_pm10_air`）

单独记录该交换，确保一行只识别一个物理或化学流。

- 适用性：仅在有实测排放，或依据已采集活动数据和有引用的因子方法计算排放时纳入。
- 选定流：颗粒物，PM10，排入空气
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：依据所引用前景采集协议计量、核对或计算该原子交换数量
- 数值来源模式：计算值 (`calculated_value`)
- 适用范围：技术特定 (`technology_specific`)
- 归一化基准：每 1 kg 净合格包装茶输出
- 基准类型：过程输出（`process_output`）
- 证据类型：根据采集计算 (`calculated_from_collection`)
- 采集协议：`cp_waste_and_emission_records`
- 来源：
- 数量范围：宽泛暂定筛选范围
  - 范围角色：默认估计 (`default_estimate`)
  - 下限：0
  - 上限：5
  - 单位：kg
  - 基准：每 1 kg 净合格包装茶输出
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算 (`reasoned_estimate`)

###### PM2.5 颗粒物排入空气（`packaging_particles_pm25_air`）

单独记录该交换，确保一行只识别一个物理或化学流。

- 适用性：仅在有实测排放，或依据已采集活动数据和有引用的因子方法计算排放时纳入。
- 选定流：颗粒物，PM2.5，排入未指明空气 `08a91e70-3ddc-11dd-9293-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：依据所引用前景采集协议计量、核对或计算该原子交换数量
- 数值来源模式：计算值 (`calculated_value`)
- 适用范围：技术特定 (`technology_specific`)
- 归一化基准：每 1 kg 净合格包装茶输出
- 基准类型：过程输出（`process_output`）
- 证据类型：根据采集计算 (`calculated_from_collection`)
- 采集协议：`cp_waste_and_emission_records`
- 来源：
- 数量范围：宽泛暂定筛选范围
  - 范围角色：默认估计 (`default_estimate`)
  - 下限：0
  - 上限：5
  - 单位：kg
  - 基准：每 1 kg 净合格包装茶输出
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算 (`reasoned_estimate`)

###### HFC-134a 排入空气（`packaging_hfc134a_air`）

单独记录该交换，确保一行只识别一个物理或化学流。

- 适用性：仅在有实测排放，或依据已采集活动数据和有引用的因子方法计算排放时纳入。
- 选定流：HFC-134a，排入未指明空气 `fe0acd60-3ddc-11dd-a6d2-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：依据所引用前景采集协议计量、核对或计算该原子交换数量
- 数值来源模式：计算值 (`calculated_value`)
- 适用范围：技术特定 (`technology_specific`)
- 归一化基准：每 1 kg 净合格包装茶输出
- 基准类型：过程输出（`process_output`）
- 证据类型：根据采集计算 (`calculated_from_collection`)
- 采集协议：`cp_waste_and_emission_records`
- 来源：
- 数量范围：宽泛暂定筛选范围
  - 范围角色：默认估计 (`default_estimate`)
  - 下限：0
  - 上限：5
  - 单位：kg
  - 基准：每 1 kg 净合格包装茶输出
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算 (`reasoned_estimate`)

###### R-404A 排入空气（`packaging_r404a_air`）

单独记录该交换，确保一行只识别一个物理或化学流。

- 适用性：仅在有实测排放，或依据已采集活动数据和有引用的因子方法计算排放时纳入。
- 选定流：R-404A 制冷剂，排入空气
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：依据所引用前景采集协议计量、核对或计算该原子交换数量
- 数值来源模式：计算值 (`calculated_value`)
- 适用范围：技术特定 (`technology_specific`)
- 归一化基准：每 1 kg 净合格包装茶输出
- 基准类型：过程输出（`process_output`）
- 证据类型：根据采集计算 (`calculated_from_collection`)
- 采集协议：`cp_waste_and_emission_records`
- 来源：
- 数量范围：宽泛暂定筛选范围
  - 范围角色：默认估计 (`default_estimate`)
  - 下限：0
  - 上限：5
  - 单位：kg
  - 基准：每 1 kg 净合格包装茶输出
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算 (`reasoned_estimate`)

###### 氨排入空气（`packaging_ammonia_air`）

单独记录该交换，确保一行只识别一个物理或化学流。

- 适用性：仅在有实测排放，或依据已采集活动数据和有引用的因子方法计算排放时纳入。
- 选定流：氨，排入未指明空气 `08a91e70-3ddc-11dd-a2a9-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：依据所引用前景采集协议计量、核对或计算该原子交换数量
- 数值来源模式：计算值 (`calculated_value`)
- 适用范围：技术特定 (`technology_specific`)
- 归一化基准：每 1 kg 净合格包装茶输出
- 基准类型：过程输出（`process_output`）
- 证据类型：根据采集计算 (`calculated_from_collection`)
- 采集协议：`cp_waste_and_emission_records`
- 来源：
- 数量范围：宽泛暂定筛选范围
  - 范围角色：默认估计 (`default_estimate`)
  - 下限：0
  - 上限：5
  - 单位：kg
  - 基准：每 1 kg 净合格包装茶输出
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算 (`reasoned_estimate`)
## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | 来源 |
| --- | --- | --- | --- |
| `allocation_avoid` | 共享前景过程 | 首先通过分别计量和细分路线、产品及包装操作避免分配；仅在被替代功能和数据集明确且有充分理由时采用系统扩展。 | `eu-pef-2021` |
| `allocation_physical` | 无法避免的共享负荷 | 无法细分或采用有充分理由的系统扩展时，使用能反映共享输入或过程负荷如何随产品变化的可测物理关系，并记录因子和期间。 | `eu-pef-2021` |
| `allocation_other_relationship` | 缺少可辩护物理关系的共享负荷 | 仅作为最后手段采用其他关系（包括经济分配），并披露产品价值、参考期、币种、因子计算和敏感性检查。 | `eu-pef-2021` |
| `allocation_residue_status` | 茶渣、降级茶、回收粉尘、返工和包装废料 | 在实施分配或抵扣前确定并记录每项输出是共产品、副产品、返工、可回收材料还是废物；不得仅因输出离开场址就赋予避免负荷。 | `eu-pef-2021` |
| `allocation_consistency` | 多产品报告期 | 对所有共享前景公用工程、清洗、储存和包装区负荷一致采用一套声明分配层级，并将分配总量与未分配场址总量核对。 | `eu-pef-2021` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_recipe_and_route_records` | `tea_primary_manufacture`; `tea_finishing_blending` | 茶叶身份、配方和路线 | 批次路线单和批准产品规格 | batch_id; tea_type; material_form; oxidation_or_fermentation_state; process_steps; ingredient_ids; ingredient_quantities; treatment; moisture_basis | 核对批准配方与实际批次路线，保留偏差和放行决定 | kg 和声明路线字段 | 每批 | 与前景清单相同期间 | 每个所代表场址和产品路线 | 按净合格输出质量加权路线记录，不合并未声明茶叶形态 | 签署路线单；批准规格；批次放行记录 |
| `cp_tea_material_receipts` | `tea_primary_manufacture`; `tea_finishing_blending` | 接收鲜叶、成品茶和配料 | 校准秤单、收货单、供应商批次记录 | date; supplier; lot_id; material_identity; origin; gross_mass; tare; net_mass; moisture; accepted_mass; rejected_mass; upstream_dataset_id | 将秤单与收货单和批次库存核对 | kg 收到状态；水分采用声明基准 | 每次接收或每批 | 与前景清单相同期间 | 所代表全部供应商和场址 | 按物料身份和路线汇总验收质量，保留供应商覆盖 | 秤校准；收货核对；适用时供应商证书 |
| `cp_energy_and_fuel_records` | `tea_primary_manufacture`; `tea_finishing_blending`; `tea_immediate_packaging` | 电力、燃料和外购热 | 分表、总表、燃料收据、运行时间分配记录 | meter_id; opening; closing; unit; fuel_identity; purchased_quantity; stock_change; process_time; allocation_key; conversion_factor | 优先过程分表，将分配值与场址总表和采购量核对 | 原始计量或采购单位；需要时换算 kWh 或 MJ | 每批、每班或每个计量间隔 | 至少一个代表年度或完整较短生产期 | 每个所代表场址 | 按能源载体汇总，仅按第 7 节分配剩余共享用量 | 仪表校准；发票核对；分配工作表 |
| `cp_water_records` | `tea_primary_manufacture`; `tea_finishing_blending` | 供水和废水 | 水表、排水表、清洗日志、处理记录 | source; opening; closing; use_area; discharge_volume; stock_or_evaporation_basis; destination; treatment | 尽可能计量工艺和清洗用水，否则核对有记录的水平衡 | m3 或 kg | 每个计量间隔和清洗事件 | 与前景清单相同期间 | 每个所代表场址 | 按来源和去向汇总供水与排水，归一化到过程输出 | 仪表校准；水平衡；处理发票或日志 |
| `cp_packaging_bom_records` | `tea_immediate_packaging` | 即时、二级和三级包装 | 批准 BOM、组件规格、单件质量测试、领退料记录 | sku; package_net_content; component_id; material; unit_mass; units_issued; units_returned; conforming_packs; rejects; shipment_allocation | 核实组件单件质量并核对 BOM 领料、退料、输出和废物 | 每组件 g 或 kg；包装净含量 kg | 每个 SKU 和生产期 | 与前景清单相同期间 | 所代表全部包装格式 | 计算每净 kg 输出的组件质量，保持组件和材料分列 | 批准 BOM；校准单件质量测试；库存核对；标签记录 |
| `cp_output_and_inventory_records` | `tea_primary_manufacture`; `tea_finishing_blending`; `tea_immediate_packaging` | 中间和最终产品输出 | 校准秤、生产计数、库存和放行记录 | batch_id; product_identity; gross_mass; tare; net_tea_mass; packaging_mass; pack_count; net_content_per_pack; moisture; stock_change; disposition | 将称量输出和包装计数与放行库存及声明净含量核对 | 茶叶净质量 kg；包装 kg；数量 | 每批 | 与前景清单相同期间 | 每个所代表产品和场址 | 汇总合格净输出，将包装质量和不合格去向分开 | 秤校准；法定计量或标签检查；放行与库存核对 |
| `cp_waste_and_emission_records` | `tea_primary_manufacture`; `tea_finishing_blending`; `tea_immediate_packaging` | 残渣、不合格品、包装废物、废水和直接排放 | 废物秤单、转移联单、处理发票、排放监测、燃料计算记录 | material_or_substance; mass_or_volume; origin_process; disposition; treatment; compartment; monitor_result; activity_data; factor_source | 计量转移物料；仅使用采集活动数据和引用因子方法计算排放 | kg、m3 或实测浓度和流量 | 每次转移或监测间隔 | 与前景清单相同期间 | 每个所代表场址 | 按身份、去向、处理和环境区室分别汇总 | 秤单；转移联单；处理凭证；监测仪校准；引用计算表 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_net_reference_output` | 包装茶输出 | 净参考输出 = 合格包装数量乘以核实的每包茶叶净含量之和；与放行产品净质量交叉核对并排除全部包装质量。 | conforming_packs; net_content_per_pack; released_net_tea_mass | 净合格包装茶 kg | `un-cpc-v3-23913` |
| `calc_packaging_component_mass` | 每个包装组件 | 每 kg 参考流组件质量 =（领用数量减退回数量减单独记录的未用库存）乘以核实单件质量，再除以净合格包装茶输出。 | units_issued; units_returned; unused_stock; unit_mass; net_reference_output | 每 kg 净包装茶的组件 kg | |
| `calc_flow_normalization` | 前景输入和输出行 | 归一化数量 = 报告期可归属该产品的数量除以同期间净合格参考输出。 | attributable_flow_amount; net_reference_output | 每 kg 净包装茶的流数量 | |
| `calc_tea_mass_balance` | 每个受控茶叶过程 | 质量平衡差异 = 茶叶原料输入加适用配料，减合格茶输出、单独记录的共产品、返工转移、样品、废物和库存变化；调查并披露无法解释差异，不得强制归零。 | tea_material_inputs; ingredient_inputs; product_outputs; co_products; rework; samples; waste; stock_change | 差异 kg 及占茶叶原料输入百分比 | |
| `calc_shared_burden_allocation` | 共享前景公用工程和服务 | 分配量 = 已核对共享总量乘以按第 7 节选择并记录的分配因子；除披露的舍入外，各产品之和必须等于共享总量。 | shared_total; allocation_basis_by_product; selected_method | 各产品分配量 | `eu-pef-2021` |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_product_identity` | 参考产品和茶叶输入 | 在批次或 SKU 层级保留茶类、形态、路线、配料或处理状态、产地、水分基准、包装配置和 CPC 适用性。 | 批准规格、路线单、标签、供应商批次记录，以及适用的 `iso-3720-2011` 或 `iso-11287-2011` |
| `dq_temporal_coverage` | 全部前景数量 | 使用连续且具有代表性的报告期，通常至少 12 个月；使用较短生产期时披露季节性、起止日期及其代表性理由。 | 仪表间隔、生产日历、批次登记和覆盖声明 |
| `dq_site_supplier_coverage` | 多场址和外购物料数据集 | 声明各场址和供应商所代表的生产份额；识别缺口，不得把未覆盖路线呈现为实测。 | 场址输出总量、采购台账、供应商数据集登记和覆盖计算 |
| `dq_measurement_traceability` | 质量、水、能源、包装和排放记录 | 保留仪器身份、校准状态、原始单位、换算因子及与独立总量的核对。 | 校准证书、原始导出、发票、秤单、BOM 测试和核对工作表 |
| `dq_background_representativeness` | 上游数据集 | 尽可能选择与声明地域、技术、物料身份和时间匹配的数据集；披露每个代理和重大数据缺口。 | 数据集引用、选择理由、代理日志和 `eu-pef-2021` 数据质量评估 |
| `dq_completeness` | 前景清单 | 证明覆盖全部受控路线和包装步骤、全部含质量的茶叶与包装流、能源、水、废物及相关直接排放；量化或说明排除项。 | 过程图、质量与能源核对、废物登记、边界图和排除日志 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | 来源 |
| --- | --- | --- | --- |
| `validate_category_scope` | 声明参考产品 | 确认产品是采用净含量不大于 3 kg 即时包装的绿茶、红茶或部分发酵茶，且不是排除的提取物、速溶制品、饮料、草本浸泡饮品或马黛茶。 | `un-cpc-v3-23913` |
| `validate_specific_form` | 产品身份 | 要求具体茶叶形态、发酵或氧化状态、呈现方式、加工路线、配料或处理以及包装配置；拒绝未具体说明的纯类别身份。 | `iso-3720-2011`; `iso-11287-2011` |
| `validate_representative_flow_use` | 天工参考流 | 要求记录对更具体真实产品流的检索；保留类别标注 UUID 时必须将其标为代表流，并拒绝其静默识别不同更窄茶叶形态的任何声称。 | |
| `validate_reference_mass` | 定量参考 | 确认参考数量恰为 1 kg 净合格茶叶，并且全部即时和运输包装质量均排除在该数量之外并单独列入清单。 | |
| `validate_starting_condition` | 前景边界 | 要求声明鲜叶或成品茶起始条件，并关联前景控制之外全部生产的上游数据集；拒绝未披露的门到门范围变更。 | `eu-pef-2021` |
| `validate_route_coverage` | 过程清单 | 确认每个受控且路线适用的制造、精制和包装步骤均有表示，并明确标注不适用步骤。 | `fao-tea-processing-2005`; `eu-pef-2021` |
| `validate_packaging_bom` | 包装清单 | 对每种所代表格式，将即时、二级和三级包装组件数量与 BOM、领退料记录、包装计数、废物及净输出核对。 | `eu-pef-2021` |
| `validate_mass_balance` | 茶叶物料清单 | 计算并报告过程层级茶叶质量平衡差异；调查无法解释损失，绝不通过插入无记录流强制平衡。 | |
| `validate_allocation` | 共享前景负荷 | 确认先考虑细分或系统扩展，记录所有剩余分配因子，并将分配总量与设施总量核对。 | `eu-pef-2021` |
| `validate_data_quality` | 报告期数据集 | 报告时间、地域、技术、场址、供应商和计量覆盖；把代理、排除、缺失上游数据集和未完成检查列为限制。 | `eu-pef-2021` |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 基于实测或核对记录构建、具有明确上游数据集关联的前景包装茶生产数据集 |
| downstream_use | `secondary_dataset`; `background_dataset` |
| allowed_use | 用于声明茶叶形态、路线、地域、报告期和包装配置的 LCA 过程与生命周期模型投影；仅在核对功能单位、范围、数据质量和分配等效后进行比较 |
| excluded_use | 静默替代其他茶叶形态或包装规格；用于草本浸泡饮品、马黛茶、提取物、速溶茶或即饮饮料；作出超出所代表场址、供应商、路线或期间的声称；把代表 UUID 用作更窄产品身份的证明 |
| required_metadata | PCR id 和版本状态；CPC 适用性；具体茶叶形态和路线；起始条件；地域；报告期；场址和供应商覆盖；净含量和完整包装 BOM；水分基准；上游数据集和代理；分配方法；参考流身份决定 |
| required_quality_disclosure | 原始记录覆盖；校准与核对状态；质量平衡差异；时间、地域和技术代表性；排除；缺失上游关联；分配敏感性；类别代表流使用；未解决数据缺口 |
| update_trigger | 茶类或形态、起始原料、路线或技术、配料或处理、包装格式或净含量、场址或供应商组合、能源系统、废物处理、分配基准、天工身份可用性或实测清单发生重大变化 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-v3-23913` | 官方指南（`official_guidance`） | United Nations Statistics Division, CPC Ver. 3.0 Structure (30 June 2025), code 23913, https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv（仓库来源检索日期 2026-06-23） | 类别原文、所含发酵状态、即时包装条件和 3 kg 上限 |
| `eu-pef-2021` | 官方指南（`official_guidance`） | Commission Recommendation (EU) 2021/2279 of 15 December 2021 on the use of the Environmental Footprint methods, ELI http://data.europa.eu/eli/reco/2021/2279/oj（检索日期 2026-08-10） | 功能单位框架、供应链系统边界、包装纳入、多功能层级、企业特定数据、排除和数据质量规则 |
| `fao-tea-processing-2005` | 官方指南（`official_guidance`） | FAO/WHO Joint Meeting on Pesticide Residues, CCP: TE 05/7, Processing of Tea, https://www.fao.org/tempref/docrep/fao/meeting/009/j5314e.pdf（检索日期 2026-08-10） | 绿茶与红茶路线不同以及路线适用的揉捻、萎凋、氧化或发酵和干燥过程分解；不采用其中农残因子或加工时长 |
| `iso-3720-2011` | 标准（`standard`） | ISO 3720:2011, Black tea - Definition and basic requirements, https://www.iso.org/standard/51541.html（检索日期 2026-08-10） | 红茶产品身份及保留适用产品、包装和标识规格的要求；不复述专有定量要求 |
| `iso-11287-2011` | 标准（`standard`） | ISO 11287:2011, Green tea - Definition and basic requirements, https://www.iso.org/standard/51540.html（检索日期 2026-08-10） | 绿茶产品身份及保留适用产品、包装和标识规格的要求；不复述专有定量要求 |
