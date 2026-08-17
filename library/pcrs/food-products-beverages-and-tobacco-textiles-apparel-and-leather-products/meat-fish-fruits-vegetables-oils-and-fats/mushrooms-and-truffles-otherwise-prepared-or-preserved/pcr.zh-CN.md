---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.mushrooms-and-truffles-otherwise-prepared-or-preserved
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 其他方法制备或保存的蘑菇和松露

## 1. 范围与适用性

本 PCR 适用于食用蘑菇和松露在加工厂门经过醋或乙酸保存以外的方法实质性制备或保存的生产。范围包括栽培或野生食用种、完整或切分产品、已申报组成物种的混合产品，以及作为销售产品组成部分的可食用填充介质或配方原料。

前景数据包必须且只能选择三个互斥路线代码之一：`thermal_container`、`fermented_non_acetic` 或 `other_prepared`。路线按实际保存机理而非笼统产品名称选择。通过密封容器内热处理实现稳定性时，优先归入 `thermal_container`；以乳酸发酵为主要转化时归入 `fermented_non_acetic`，包括已申报的发酵后稳定化；仅在不符合前两项且通过实质性烹调、调味、油配方或类似制备形成销售产品时，才归入 `other_prepared`。

醋或乙酸保存产品、简单冷冻或仅在冷冻前水煮/蒸制的产品、干制产品、仅临时保存且不可立即食用的产品、均质蔬菜制品、提取物或浓缩物以及完整预制菜肴或膳食均不在范围内。栽培与采收以进厂蘑菇或松露的上游数据集表示；除非研究明确扩展边界，配送、零售、使用和寿命终止均不属于前景门到门范围。

## 2. 产品类别标识

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.mushrooms-and-truffles-otherwise-prepared-or-preserved |
| classification_refs | CPC 3.0：21397 — 其他方法制备或保存的蘑菇和松露 |
| covered_products | 以醋或乙酸保存以外的方法实质性制备或保存的食用蘑菇和松露，包括密封热稳定产品、非乙酸发酵产品，以及其他经实质性烹调、调味或油配方的产品 |
| excluded_products | 鲜品；简单冷冻品；干制品；醋或乙酸保存品；不可立即食用的临时保存品；提取物和浓缩物；均质蔬菜制品；完整菜肴或膳食 |
| representative_product | 在加工厂门、按销售形态和配方提供的已申报物种制备或保存蘑菇或松露产品 |
| production_route | `thermal_container`、`fermented_non_acetic` 或 `other_prepared` 三者之一；必须申报路线优先判定和保存机理 |
| market_state | 工厂门合格销售产品；必须说明储存制度、净含量基准、填充介质或配方、容器形式和声明货架期 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 提供采用已申报范围内路线制备或保存、可食用且可销售的蘑菇或松露产品 |
| How much | 1 kg 净产品，包括作为产品出售的可食用填充介质或配方，不包括初级包装 |
| How well | 符合已申报的物种、形态、配方、保存路线、储存制度、食品安全放行标准和适用质量规范 |
| How long or cycle | 在已申报储存条件下，自工厂放行至生产者声明货架期终点持续符合产品规范 |
| reference_flow_link | 在加工厂门按 1 kg 归一化的精确通用 CPC 分类参考产品流 |

| 字段 | 值 |
| --- | --- |
| Reference amount | 工厂门 1 kg 制备或保存净产品 |
| Reference product flow | Mushrooms and truffles, otherwise prepared or preserved `a73856a4-8862-40be-b505-65863a6cfb66` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | 蘑菇或松露物种及栽培或野生来源；产品形态和颗粒形式；路线代码；保存机理；配方及可食用填充介质占比；净含量基准；初级容器；储存制度；生产地域和技术；声明货架期 |

构建前景数据包时，所有必需限定信息必须在数据集元数据、过程注释、参考流注释、产品描述或等效数据包字段中申报。缺少任何必需限定信息时，参考流定义不完整。

## 4. 测量与单位规则

| rule_id | 适用对象 | 必需属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | 参考产品 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 报告不含初级、次级和三级包装的净产品质量。包括作为产品出售的可食用填充介质或配方，并申报其质量占比。 |
| `wet_mass_basis` | 蘑菇、松露、中间体、原料、产品和固体残余物 | Mass | kg | 记录接收或产出时的湿质量。若同时使用干物质，应报告实测水分或固形物并保留换算；不得以干质量替代参考质量。 |
| `route_separation` | 所有前景记录 | 路线代码 | 一个已申报路线代码 | 每个生产批次仅分配至一条路线。共用前处理可以分配至所选路线，但不得把备选路线清单相加进同一产品系统。 |
| `energy_conversion` | 电力、蒸汽、热力和燃料 | 能量或载能体特定属性 | kWh 或 MJ，并保留原始单位 | 保留原始计量或发票单位并记录全部换算因子。在保留载能体身份和来源前，不得合并电力与热能。 |
| `mass_balance` | 每条所选路线 | Mass | kg | 在相同批次和水分基准下核对投入蘑菇或松露、可食用原料与介质、合格产品、可回收共产品、实测废水相关固体以及固体损失。 |

## 5. 系统边界

### 边界抽象

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 加工厂接收的食用蘑菇或松露，并申报物种、来源类型、来料保存状态、可得时的水分或固形物基准、供应商、地域及运输交接点 |
| starting_condition_role | `processing_gate_input` |
| product_classification_scope | CPC 3.0 子类 21397 仅作分类参考；规范 PCR 范围仍由第 1 和第 2 节的语义产品边界确定 |
| recursive_input_rule | 若投入已经属于本 PCR 产品类别，则以直接技术圈投入记录一次，附其上游数据集并申报制备状态；不得在此前景数据包中递归展开其生产 |
| upstream_dataset_requirement | 为蘑菇或松露、配料、填充介质、包装材料、电力、燃料、供水和入厂运输使用有代表性的上游数据集；可得时保留地域、技术、时间和供应商特异性 |
| disclosure | 申报路线代码和优先判定、物种和来源、来料状态、加工与保存机理、可食用填充介质、容器、储存制度、货架期、排除阶段、数据缺口、代理、共产品及分配决定 |

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_gate_to_gate` | 前景生产 | 包括接收、分选、清洗、修整、路线特定的制备或保存、灌装或配方、容器处理、稳定化、适用时的冷却，以及前景废物在加工厂门内的处理或转移。栽培、配料、公用工程、包装生产和入厂运输作为上游投入表示。 | `eu-pef-2021`; `codex-cxs-38-1981`; `codex-cxs-297-2009` |
| `boundary_route_exclusivity` | 路线选择 | 只能选择一个路线过程。不得把三个路线过程作为同一参考流的连续或同时步骤。以乳酸发酵为主要转化的批次即使存在已申报的发酵后稳定化，仍为 `fermented_non_acetic`；密封热稳定且非发酵的产品为 `thermal_container`。 | `codex-cxs-38-1981`; `codex-cxs-297-2009` |
| `boundary_classification_exclusions` | 产品资格 | 排除醋或乙酸保存、简单冷冻或干燥、临时保存、提取物或浓缩物、均质蔬菜制品以及完整菜肴或膳食。 | `unsd-cpc-3-0`; `codex-cxs-38-1981` |
| `boundary_capital_goods` | 设备和基础设施 | 默认从前景清单排除资本品，除非目标与范围要求纳入或筛选显示其具有实质性；对所有比较情景一致披露该决定。 | `eu-pef-2021` |

## 6. 过程清单结构

### 过程图

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `preprocessing` | 接收、分选、清洗和规格处理 | required | 适用于所有路线；实际未发生的操作记为零，不得虚构 | 共用前景前处理 | kg 已处理蘑菇或松露中间体 |
| `thermal_container` | 灌装、密封和热稳定化 | conditional | 仅当路线代码为 `thermal_container` 时纳入 | 互斥保存路线 | kg 合格净参考产品 |
| `fermented_non_acetic` | 非乙酸发酵和后处理 | conditional | 仅当路线代码为 `fermented_non_acetic` 时纳入 | 互斥保存路线 | kg 合格净参考产品 |
| `other_prepared` | 其他实质性烹调或配方及包装 | conditional | 仅当路线代码为 `other_prepared` 且不符合前两条路线定义时纳入 | 互斥制备路线 | kg 合格净参考产品 |

### 过程：接收、分选、清洗和规格处理（`preprocessing`）

#### 投入

##### 产品流

###### 进厂食用蘑菇或松露（`raw_fungi_input`）

来料跨越加工厂边界，并携带栽培或采集及入厂供应链负荷。

- 选定流：食用蘑菇或松露，申报物种和来料状态
- 流属性/单位：Mass / kg
- 数量规则：实测进入前处理的合格批次质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 已处理中间体产出
- 基准类型：过程产出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_preprocessing_batch`
- 来源：`codex-cxs-38-1981`

###### 清洗和漂烫用水（`preprocessing_water`）

记录共用前处理阶段清洗、洗涤、漂烫或冷却所供应的水。

- 选定流：Process water
- 流属性/单位：Mass / kg
- 数量规则：计量或按批次分摊的供水量，扣除有记录的闭路循环量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 已处理中间体产出
- 基准类型：过程产出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_preprocessing_utilities`
- 来源：`codex-cxs-38-1981`; `codex-cxs-297-2009`

###### 前处理能源（`preprocessing_energy`）

输送、清洗、切分、漂烫、冷却和卫生清洁所用电力与热力载能体应分别保留。

- 选定流：电力和热力载能体，申报供应商和载能体
- 流属性/单位：Energy / kWh 或 MJ，并保留原始单位
- 数量规则：实测计量、设备分表或有记录的批次分摊
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 已处理中间体产出
- 基准类型：过程产出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_preprocessing_utilities`

##### 废物流

##### 基本流

#### 产出

##### 产品流

###### 已处理蘑菇或松露中间体（`prepared_fungi_intermediate`）

该中间体是清洗、分选并切分或规格处理后仅转入一条所选路线的物料。

- 选定流：已处理蘑菇或松露中间体，申报物种和物理状态
- 流属性/单位：Mass / kg
- 数量规则：实测转入所选路线的质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 已处理中间体产出
- 基准类型：过程产出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_preprocessing_batch`

##### 废物流

###### 分选和修整残余物（`preprocessing_solid_residues`）

按实际管理去向记录剔除菌体、带土修整物及其他分离有机物。

- 选定流：有机加工残余物，申报处理路线
- 流属性/单位：Mass / kg
- 数量规则：实测残余物质量；无法直接称量时采用质量平衡结果
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 已处理中间体产出
- 基准类型：过程产出（`process_output`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_preprocessing_batch`

###### 前处理废水（`preprocessing_wastewater`）

记录转入场内或场外处理的废水及其去向和实测体积或质量。

- 选定流：食品加工废水，申报处理去向
- 流属性/单位：Mass or volume / kg 或 m3
- 数量规则：实测排放量或有记录的水量平衡结果
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 已处理中间体产出
- 基准类型：过程产出（`process_output`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_preprocessing_utilities`

##### 基本流

### 过程：灌装、密封和热稳定化（`thermal_container`）

#### 投入

##### 产品流

###### 转入热处理路线的已处理菌体（`thermal_fungi_input`）

仅分配至 `thermal_container` 的已处理中间体进入本路线。

- 选定流：已处理蘑菇或松露中间体
- 流属性/单位：Mass / kg
- 数量规则：实测批次投入
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 合格净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_thermal_batch`

###### 填充介质和配方原料（`thermal_ingredients`）

按物料分别记录水、盐、油、酱汁、调味料或其他可食用原料；不得以醋或乙酸作为本 PCR 中的保存机理。

- 选定流：已申报可食用填充介质和配方原料
- 流属性/单位：Mass / kg
- 数量规则：实测领用质量减有记录的退库质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 合格净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_thermal_batch`
- 来源：`codex-cxs-297-2009`

###### 容器和封口材料（`thermal_packaging`）

按材料和质量记录初级容器、封口、标签和可归属本路线的次级包装。

- 选定流：按材料和形式区分的包装材料
- 流属性/单位：Mass / kg
- 数量规则：采购或领用记录与合格包装件数核对
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 合格净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_thermal_batch`

###### 热处理路线能源（`thermal_energy`）

灌装、封口、杀菌釜或等效热处理、冷却和卫生清洁使用的电力与热力载能体应分别保留。

- 选定流：电力和热力载能体，申报供应商和载能体
- 流属性/单位：Energy / kWh 或 MJ，并保留原始单位
- 数量规则：实测计量或有记录的批次分摊
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 合格净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_thermal_energy`
- 来源：`codex-cxs-38-1981`; `codex-cxs-297-2009`

##### 废物流

##### 基本流

#### 产出

##### 产品流

###### 合格热处理路线产品（`thermal_reference_product`）

路线产出使用精确通用 CPC 分类流，并且仅计入合格销售单元。

- 选定流：Mushrooms and truffles, otherwise prepared or preserved `a73856a4-8862-40be-b505-65863a6cfb66`
- 流属性/单位：Mass / kg
- 数量规则：不含包装的实测净产品质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：1 kg 合格净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_thermal_batch`

##### 废物流

###### 热处理路线不合格产品与包装（`thermal_rejects`）

按材料和处理去向分别记录不合格产品、填充介质和包装。

- 选定流：按材料和处理去向区分的路线废品
- 流属性/单位：Mass / kg
- 数量规则：实测废品或批次质量平衡结果
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 合格净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_thermal_batch`

##### 基本流

###### 热处理路线直接大气排放（`thermal_direct_air_emissions`）

直接燃烧和制冷剂排放在跨越环境边界时按物质分别报告。

- 选定流：物质特定的直接大气排放
- 流属性/单位：Mass / kg
- 数量规则：实测排放，或用有记录因子根据采集的燃料和制冷剂记录计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 合格净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_thermal_energy`
- 来源：`eu-pef-2021`

### 过程：非乙酸发酵和后处理（`fermented_non_acetic`）

#### 投入

##### 产品流

###### 转入发酵路线的已处理菌体（`fermentation_fungi_input`）

仅分配至 `fermented_non_acetic` 的已处理中间体进入本路线。

- 选定流：已处理蘑菇或松露中间体
- 流属性/单位：Mass / kg
- 数量规则：实测批次投入
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 合格净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_fermentation_batch`

###### 发酵与后处理原料（`fermentation_ingredients`）

分别记录盐、水、使用时的发酵剂、香辛料、油及其他非乙酸原料；以添加醋或乙酸为保存机理的产品不合格。

- 选定流：已申报发酵与后处理原料
- 流属性/单位：Mass / kg
- 数量规则：实测领用质量减有记录的退库质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 合格净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_fermentation_batch`
- 来源：`codex-cxs-38-1981`

###### 发酵产品包装（`fermentation_packaging`）

按材料和质量记录初级容器、封口、标签和可归属本路线的次级包装。

- 选定流：按材料和形式区分的包装材料
- 流属性/单位：Mass / kg
- 数量规则：采购或领用记录与合格包装件数核对
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 合格净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_fermentation_batch`

###### 发酵路线能源（`fermentation_energy`）

发酵控制、泵送、后处理、已申报的发酵后稳定化、冷却和卫生清洁所用电力与热力载能体应分别保留。

- 选定流：电力和热力载能体，申报供应商和载能体
- 流属性/单位：Energy / kWh 或 MJ，并保留原始单位
- 数量规则：实测计量或有记录的批次分摊
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 合格净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_fermentation_energy`
- 来源：`codex-cxs-38-1981`

##### 废物流

##### 基本流

#### 产出

##### 产品流

###### 合格发酵路线产品（`fermentation_reference_product`）

路线产出使用精确通用 CPC 分类流，并且仅计入合格销售单元。

- 选定流：Mushrooms and truffles, otherwise prepared or preserved `a73856a4-8862-40be-b505-65863a6cfb66`
- 流属性/单位：Mass / kg
- 数量规则：不含包装的实测净产品质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：1 kg 合格净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_fermentation_batch`

##### 废物流

###### 发酵盐水、废品与包装损失（`fermentation_wastes`）

按废物类型和处理去向分别记录废盐水或废液、不合格产品和包装损失。

- 选定流：按材料和处理去向区分的发酵废物
- 流属性/单位：Mass / kg
- 数量规则：实测废物或批次质量平衡结果
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 合格净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_fermentation_batch`

##### 基本流

###### 发酵路线直接大气排放（`fermentation_direct_air_emissions`）

适用时按物质分别报告直接燃料、制冷剂和过程排放。

- 选定流：物质特定的直接大气排放
- 流属性/单位：Mass / kg
- 数量规则：实测排放，或用有记录因子根据采集的活动记录计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 合格净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_fermentation_energy`
- 来源：`eu-pef-2021`

### 过程：其他实质性烹调或配方及包装（`other_prepared`）

#### 投入

##### 产品流

###### 转入其他制备路线的已处理菌体（`other_fungi_input`）

仅分配至 `other_prepared` 的已处理中间体进入本路线。

- 选定流：已处理蘑菇或松露中间体
- 流属性/单位：Mass / kg
- 数量规则：实测批次投入
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 合格净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_other_batch`

###### 烹调、调味或油配方原料（`other_ingredients`）

分别记录所有可食用原料。配方不得构成完整菜肴或膳食，也不得以醋或乙酸作为保存机理。

- 选定流：已申报烹调、调味或配方原料
- 流属性/单位：Mass / kg
- 数量规则：实测领用质量减有记录的退库质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 合格净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_other_batch`
- 来源：`codex-cxs-38-1981`

###### 其他制备产品包装（`other_packaging`）

按材料和质量记录初级容器、封口、标签和可归属本路线的次级包装。

- 选定流：按材料和形式区分的包装材料
- 流属性/单位：Mass / kg
- 数量规则：采购或领用记录与合格包装件数核对
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 合格净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_other_batch`

###### 其他制备路线能源（`other_energy`）

烹调、混合、灌装、冷却、需要时的冷藏和卫生清洁所用电力与热力载能体应分别保留。

- 选定流：电力和热力载能体，申报供应商和载能体
- 流属性/单位：Energy / kWh 或 MJ，并保留原始单位
- 数量规则：实测计量或有记录的批次分摊
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 合格净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_other_energy`

##### 废物流

##### 基本流

#### 产出

##### 产品流

###### 合格其他制备路线产品（`other_reference_product`）

路线产出使用精确通用 CPC 分类流，并且仅计入合格销售单元。

- 选定流：Mushrooms and truffles, otherwise prepared or preserved `a73856a4-8862-40be-b505-65863a6cfb66`
- 流属性/单位：Mass / kg
- 数量规则：不含包装的实测净产品质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：1 kg 合格净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_other_batch`

##### 废物流

###### 其他制备路线废品与损失（`other_wastes`）

按材料和处理去向分别记录烹调损失、不合格产品、废水和包装损失。

- 选定流：按材料和处理去向区分的路线废物
- 流属性/单位：Mass / kg
- 数量规则：实测废物或批次质量平衡结果
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 合格净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_other_batch`

##### 基本流

###### 其他制备路线直接大气排放（`other_direct_air_emissions`）

适用时按物质分别报告直接燃烧和制冷剂排放。

- 选定流：物质特定的直接大气排放
- 流属性/单位：Mass / kg
- 数量规则：实测排放，或用有记录因子根据采集的活动记录计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 合格净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_other_energy`
- 来源：`eu-pef-2021`

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_avoid` | 共用及多功能前景操作 | 首先通过批次、产线、时间、计量或配方细分避免分配。保持路线特定操作分离，并以实测批次转移量把共用前处理分配到所选路线。 | `eu-pef-2021` |
| `allocation_co_products` | 参考产品以外的可销售共产品 | 无法细分时，采用反映过程因果使用的有记录物理关系。若不存在可辩护的物理关系，则采用同期工厂门价格进行经济分配并开展敏感性分析。 | `eu-pef-2021` |
| `allocation_wastes` | 残余物和废物处理 | 不得仅因残余物离厂就分配避免负荷。记录其处理或回收路线；仅在下游研究中采用替代或循环模型，并披露方法、质量和被替代产品。 | `eu-pef-2021` |
| `allocation_packing_medium` | 可食用填充介质和配方原料 | 随产品销售的可食用介质属于参考产品质量而非共产品。包装作为单独投入，不计入参考质量。 | `codex-cxs-297-2009` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_preprocessing_batch` | `preprocessing` | 来料、中间体和残余物 | 批次生产记录 | batch_id; species; origin_type; supplier; incoming_state; input_mass; intermediate_mass; residue_mass; moisture_or_solids_if_measured; disposition | 校准秤、收货单、生产记录和废物记录 | kg 湿质量 | 每批 | 有代表性的连续 12 个月，或已申报较短生产季的全部生产 | 每个纳入设施和产线 | 按批次汇总同类流，核对质量平衡，再除以已处理中间体产量 | 秤校准；签署批次记录；供应商规范；核对记录 |
| `cp_preprocessing_utilities` | `preprocessing` | 水、能源和废水 | 计量与分摊记录 | meter_id; period; water_in; water_recirculated; wastewater_out; electricity; steam; fuel; production_hours; batch_id; allocation_driver | 优先分表；否则采用有记录的工程或生产分摊 | 原始单位及 kg 水、m3 废水、kWh 电力和 MJ 热能 | 每批或至少每月 | 与生产数据相同期间 | 每个纳入设施和公用工程系统 | 循环水仅扣除一次，按因果驱动分摊共用总量，并按已处理中间体归一化 | 仪表校准；发票；分摊工作表；完整性检查 |
| `cp_thermal_batch` | `thermal_container` | 路线物料投入、包装、产品和废品 | 批次与包装记录 | batch_id; route_code; intermediate_mass; ingredient_mass_by_material; packaging_mass_by_material; filled_units; net_content; accepted_units; rejected_product; rejected_packaging; treatment_destination | 配方单、领料记录、检重或净含量记录、包装清单和废品记录 | kg 和件数 | 每批 | 有代表性的连续 12 个月，或已申报较短生产季的全部生产 | 每条热处理线和容器形式 | 保留物料身份，计算合格净产品质量，核对路线质量并按合格净产品归一化 | 校准秤；批准配方；净含量核验；容器规范；废品记录 |
| `cp_thermal_energy` | `thermal_container` | 路线能源和直接排放 | 计量、燃料、制冷剂和过程记录 | batch_id; meter_id; electricity; steam; fuel_by_type; retort_or_heat_cycle; cooling; refrigerant_makeup; measured_emissions; factor_source | 分表和周期记录；无分表时才使用发票和有记录分摊 | 原始单位及 kWh、MJ 和 kg 排放 | 每批或至少每月 | 与热处理路线生产相同期间 | 每条热处理线和公用工程系统 | 分开保留载能体，按因果周期或运行时间分摊，计算物质特定排放，并按合格净产品归一化 | 仪表校准；周期记录；燃料发票；制冷剂记录；因子引用；计算表 |
| `cp_fermentation_batch` | `fermented_non_acetic` | 路线物料投入、包装、产品和废物 | 发酵批记录 | lot_id; route_code; species; intermediate_mass; water; salt; starter; ingredient_mass_by_material; fermentation_time; control_measurements; packaging_mass; net_product_mass; spent_liquid; rejects; destinations | 批准配方、领料记录、罐体记录、控制日志、秤和包装记录 | kg、小时及已申报控制单位 | 每批 | 有代表性的连续 12 个月，或已申报较短生产季的全部生产 | 每个发酵容器、后处理线和产品配方 | 保留原料身份，仅汇总可比批次，核对质量并按合格净产品归一化 | 校准仪器；批准配方；发酵控制日志；放行记录；废物转移记录 |
| `cp_fermentation_energy` | `fermented_non_acetic` | 路线能源和直接排放 | 计量、燃料、制冷剂和过程记录 | lot_id; meter_id; electricity; heat; cooling; fuel_by_type; refrigerant_makeup; stabilization_cycle_if_any; measured_emissions; factor_source | 分表和设备记录；无法直接计量时采用有记录分摊 | 原始单位及 kWh、MJ 和 kg 排放 | 每批或至少每月 | 与发酵路线生产相同期间 | 每个发酵和后处理系统 | 分开保留载能体，按因果运行时间或容器使用分摊，计算物质特定排放，并按合格净产品归一化 | 仪表校准；设备记录；燃料发票；制冷剂记录；因子引用；计算表 |
| `cp_other_batch` | `other_prepared` | 路线物料投入、包装、产品和废物 | 批次与包装记录 | batch_id; route_code; preparation_description; intermediate_mass; ingredient_mass_by_material; packaging_mass_by_material; net_product_mass; rejects; wastewater; destinations | 批准配方、领料记录、校准秤、包装记录和废物记录 | kg 和件数 | 每批 | 有代表性的连续 12 个月，或已申报较短生产季的全部生产 | 每条烹调或配方线和产品形态 | 保留原料身份，仅汇总配方和储存制度可比的批次，核对质量并按合格净产品归一化 | 校准秤；批准配方；放行记录；容器规范；废物记录 |
| `cp_other_energy` | `other_prepared` | 路线能源和直接排放 | 计量、燃料、制冷剂和过程记录 | batch_id; meter_id; electricity; heat; cooling; cold_holding_time; fuel_by_type; refrigerant_makeup; measured_emissions; factor_source | 分表和设备记录；无法直接计量时采用有记录分摊 | 原始单位及 kWh、MJ 和 kg 排放 | 每批或至少每月 | 与其他制备路线生产相同期间 | 每个烹调、配方、冷却和储存系统 | 分开保留载能体，按因果周期或运行时间分摊，计算物质特定排放，并按合格净产品归一化 | 仪表校准；设备记录；燃料发票；制冷剂记录；因子引用；计算表 |

### 计算规则

| rule_id | 适用对象 | 公式或规则 | 输入 | 输出 | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | 所选路线 | 归一化数量 = 期间或批次数量 / 合格净产品质量 kg；分母排除包装并包括作为产品出售的可食用填充介质 | 流数量；合格件数；实测净含量；可食用介质状态 | 每 1 kg 参考产品的数量 | `eu-pef-2021`; `codex-cxs-297-2009` |
| `calc_preprocessing_transfer` | 共用前处理 | 路线归属前处理数量 = 前处理总量 × 转入所选路线的实测中间体质量 / 已处理中间体总质量；有记录时采用更具因果性的实测驱动 | 共用前处理记录；路线转移质量 | 分配至所选路线的前处理清单 | `eu-pef-2021` |
| `calc_route_mass_balance` | 每条所选路线 | 质量平衡差 = 实测质量投入总量 − 合格净产品 − 单独实测共产品 − 单独实测废物；应调查而非把无法解释的物料差静默分配 | 同一基准的批次物料、产品、共产品和废物质量 | 已披露核对差和完整性标志 | `eu-pef-2021` |
| `calc_direct_emissions` | 场内燃料和制冷剂使用 | 分物质排放 = 采集活动量 × 有记录适用因子，并保留氧化率、密度和单位换算；有直接测量时优先使用 | 按载能体燃料；制冷剂补充；实测排放；因子和换算记录 | 每 kg 参考产品的 kg 物质特定基本流 | `eu-pef-2021` |

### 数据质量要求

| requirement_id | 适用对象 | 要求 | 证据 |
| --- | --- | --- | --- |
| `dq_identity` | 产品和路线 | 核验精确通用参考流 UUID、物种或已申报混合物、产品形态、来料状态、路线代码、保存机理、容器、储存制度和货架期。 | 产品规范、批准配方、标签、批次放行和路线判定记录 |
| `dq_route_exclusivity` | 过程图 | 证明只有一条路线过程供应参考产品，且不存在备选路线清单。 | 批次路线代码、过程流程图和清单完整性复核 |
| `dq_measurement` | 质量、水和能源 | 使用校准仪器或经核对的供应商记录；保留原始单位、换算、分摊驱动和计量覆盖。 | 校准证书、发票、仪表图、批次记录和计算表 |
| `dq_temporal` | 前景数据集 | 优先采用有代表性的连续 12 个月；较短季节或生产季必须覆盖完整生产季并说明代表性。 | 带日期生产日历和覆盖率计算 |
| `dq_completeness` | 前景清单 | 核对物料平衡，纳入公用工程和直接排放，并识别每项排除流、缺失月份、代理和废物去向。 | 质量平衡、公用工程核对、排放因子登记表和缺口日志 |
| `dq_provisional_estimates` | 缺失前景数量 | 本 PCR 不提供默认数值。若临时填补数据缺口，必须标记为 `reasoned_estimate`，说明适用路线、技术、地域和基准，声明其临时性，并在获得代表性批次记录、校准测量、供应商一次数据或经评审证据后替换。此类估算不得支持经核验的比较性声明。 | 假设登记表、适用性说明、不确定性披露、责任人和明确替换触发器 |

## 9. 验证规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validate_reference_identity` | 参考流 | 必须使用产品流 UUID `a73856a4-8862-40be-b505-65863a6cfb66`、Mass 属性 UUID `93a60a56-a3c8-11da-a746-0800200b9a66`、Units of mass UUID `93a60a57-a4c8-11da-a746-0800200c9a66` 和参考单位 kg。 |  |
| `validate_scope` | 产品资格 | 拒绝鲜品、简单冷冻、干制、醋或乙酸保存、临时保存、提取物或浓缩物、均质制品以及完整膳食。 | `unsd-cpc-3-0`; `codex-cxs-38-1981` |
| `validate_route` | 路线过程 | 要求 `thermal_container`、`fermented_non_acetic` 或 `other_prepared` 中且仅有一条产生参考流。拒绝把备选路线相加或缺少路线优先判定的数据集。 | `codex-cxs-38-1981`; `codex-cxs-297-2009` |
| `validate_reference_mass` | 定量参考 | 要求 1 kg 合格净产品，不含包装并包括作为产品出售的可食用介质或配方；要求申报可食用介质占比和净含量基准。 | `codex-cxs-297-2009` |
| `validate_inventory` | 前景完整性 | 要求纳入进厂蘑菇或松露、配料和介质、包装、使用时的水、分载能体能源、合格产出、残余物、产生时的废水、废品和适用的直接排放；要求期间和质量基准一致。 | `eu-pef-2021` |
| `validate_mass_balance` | 物料清单 | 要求有记录的路线质量平衡并调查无法解释的差异；不得通过未说明的废物流静默配平。 | `eu-pef-2021` |
| `validate_data_quality` | 数据集生产 | 要求时间覆盖、场址与技术代表性、校准或核对证据、上游数据集元数据、代理披露，以及每项 `reasoned_estimate` 的替换触发器。 | `eu-pef-2021` |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 一种已申报制备或保存蘑菇或松露产品及一条互斥路线的工厂门前景数据包 |
| downstream_use | `secondary_dataset`；在复核代表性、投影可用性和数据质量后可作 `background_dataset` |
| allowed_use | 用于与已申报物种、配方、路线、地域、技术、储存制度和参考质量基准匹配产品的产品碳足迹或环境足迹建模、供应链清单、过程改进和情景分析 |
| excluded_use | 鲜品、简单冷冻、干制、醋或乙酸保存、临时保存、提取物或浓缩物、均质制品或完整膳食；互斥路线聚合；基于未经评审代理或 `reasoned_estimate` 数值的经核验比较性声明 |
| required_metadata | PCR id 和版本状态；精确流 UUID；物种和来源类型；产品形态；路线代码及优先判定；保存机理；配方和可食用介质占比；净含量基准；容器；储存制度；货架期；设施地域；技术；数据期间；上游数据集身份；分配方法 |
| required_quality_disclosure | 计量和批次覆盖；校准与核对；质量平衡差；排除流；缺失数据；代理和临时估算；因子来源；不确定性；代表性限制；共产品和废物去向 |
| update_trigger | 产品流身份、分类范围、保存路线、配方或可食用介质占比、容器、储存制度、技术、供应商或地域、实质性分配基准或影响规则的证据发生变化，或代表性批次、供应商或经评审证据替换临时估算 |

## 11. 数据来源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `unsd-cpc-3-0` | official_guidance | 联合国统计司，《Central Product Classification Version 3.0, Explanatory Notes》，2025-06-30，https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf（检索日期 2026-08-11） | CPC 身份，以及醋或乙酸保存、简单冷冻、干燥、临时保存和完整菜肴的排除边界 |
| `codex-cxs-38-1981` | standard | Codex Alimentarius，CXS 38-1981，《General Standard for Edible Fungi and Fungus Products》，2022 和 2023 年修订，https://workspace.fao.org/sites/codex/Standards/CXS%2038-1981/CXS_038e.pdf（检索日期 2026-08-11） | 食用菌身份、原料质量，以及非乙酸发酵、热稳定化和油中保存路线的过程分解 |
| `codex-cxs-297-2009` | standard | Codex Alimentarius，CXS 297-2009，《Standard for Certain Canned Vegetables》及蘑菇附件，2022 和 2023 年修订，https://workspace.fao.org/sites/codex/Standards/CXS%20297-2009/CXS_297e.pdf（检索日期 2026-08-11） | 罐藏路线过程分解、净产品与填充介质解释、蘑菇形态、灌装、密封和热稳定化 |
| `eu-pef-2021` | official_guidance | 欧盟委员会 2021 年 12 月 15 日关于环境足迹方法的 Recommendation (EU) 2021/2279，附件 I Product Environmental Footprint Method，CELEX 32021H2279，https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32021H2279（检索日期 2026-08-11） | 功能单位、系统边界、企业特定清单、分配层级、数据质量、建模和披露规则 |
