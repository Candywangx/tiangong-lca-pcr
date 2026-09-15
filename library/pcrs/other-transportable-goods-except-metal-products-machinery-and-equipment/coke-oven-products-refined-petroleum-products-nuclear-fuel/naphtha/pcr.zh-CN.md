---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.coke-oven-products-refined-petroleum-products-nuclear-fuel.naphtha
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 石脑油

## 1. 范围与适用性

本 PCR 适用于炼油厂门口作为可销售石油馏分或石化原料的石脑油生产。产品包括轻石脑油、重石脑油和全馏程石脑油，其声明规格应落入 CPC 3.0 子类 33330：馏程为 30 °C 至 210 °C、但不符合车用汽油规格的轻质或中质油。生产者必须声明实际馏程、牌号、处理路线、主要合同质量属性和交接点；CPC 馏程区间是类别边界，不能替代生产者的产品规格。

前景系统从原油或未成品炼厂进料进入炼厂边界开始，包括可归因于参考产品的分离、按条件实施的处理、储存、仅为满足声明石脑油规格而实施的调和，以及装载。原油开采与运输以及外购能源、氢气、水和化学品通过上游数据集连接。下游蒸汽裂解、催化重整、芳烃生产、汽油调和、炼厂门口之后的配送，以及燃烧或其他使用不在边界内。

本 PCR 不覆盖车用汽油、航空汽油、汽油型或煤油型喷气燃料、煤油、石油溶剂油（white spirit）或特种沸点工业溶剂油、作为独立产品销售的天然气液体、裂解汽油以及下游石化产品。处于声明 30–210 °C 类别边界之外或符合适用车用汽油规格的石油物流，应采用其他 PCR 或进行明确的人工复核。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.coke-oven-products-refined-petroleum-products-nuclear-fuel.naphtha |
| classification_refs | CPC 3.0 `33330` 石脑油（`exact`） |
| covered_products | 在炼厂销售的轻石脑油、重石脑油或全馏程石脑油；当最终物流仍处于声明的石脑油类别边界内时，包括直馏、裂化、加氢处理、甜化或调和石脑油。 |
| excluded_products | 车用汽油；航空汽油；汽油型和煤油型喷气燃料；煤油；石油溶剂油（white spirit）和特种沸点溶剂油；单独销售的天然气液体；裂解汽油；苯、甲苯、二甲苯、烯烃及其他下游转化产品。 |
| representative_product | 炼厂装载点或交接点的可销售石脑油。 |
| production_route | 原油或未成品炼厂进料接收、炼厂分馏分离、按条件实施稳定或加氢处理/甜化、规格调和、储存和装载。 |
| market_state | 炼厂门口的液态石油馏分，并声明牌号、处理状态、馏程和合同质量规格。 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 提供作为石油馏分或石化原料的炼厂门口石脑油。 |
| How much | 1,000 kg 净可销售石脑油。 |
| How well | 符合买方、炼厂或法规声明规格，保持在 CPC 33330 类别边界内，并披露实际馏程、牌号、处理状态和主要质量属性。 |
| How long or cycle | 一个有代表性的生产批次或报告期，并核对期初和期末库存。 |
| reference_flow_link | 在声明的炼厂门口交接点转移的合格石脑油净质量。 |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1,000 kg |
| 参考产品流 | 石脑油 `91cc5451-cf5d-48c7-9dcc-b054eda6fbb0` |
| 参考流属性 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量单位 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 实际初馏点和终馏点或声明馏程；轻质、重质或全馏程牌号；直馏、裂化、加氢处理、甜化或调和路线；硫、苯或其他合同组成限值；有规定时的水分和沉淀物基准；炼厂技术和进料构成；地理范围；参考年份；分配方法；交接点；采用体积转质量时的密度和参考温度 |

构建前景数据包时，`必需限定信息` 中列出的信息必须在数据集元数据、过程说明、参考流备注、产品说明或等效数据包字段中声明。缺失必需限定信息会使该数据包的参考流定义不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | 参考产品和全部炼厂物料平衡物流 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 以净质量报告参考产品。归一化至 1,000 kg 前，按照期初和期末罐存、退货、不合格品转移及内部循环修正总表读数。 |
| `volume_to_mass` | 最初按体积计量的任何液体物流 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 使用同一物流在声明参考温度下的实测或规格支持密度将体积换算为质量；保留原始体积、密度、温度和换算公式。 |
| `energy_carriers` | 外购电力、蒸汽、燃料和回收炼厂能源 | 能量 | 按记录使用 MJ 或 kWh | 保留原始载能体和单位，只用有记录的因子换算，避免重复计算回收能源，并识别炼厂燃料气是内部共产品还是外购输入。 |
| `water_balance` | 工艺水、冷却水、锅炉给水和废水 | 质量或体积 | kg 或 m3 | 分别记录取水、循环、蒸发和排放，不得把循环冷却水总量作为净取水量。 |

## 5. 系统边界

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_refinery_gate` | 石脑油前景生产 | 纳入从接收原油或未成品炼厂进料到分离、适用的产品处理、储存、规格调和，以及在声明炼厂门口交接点装载的炼厂活动。 | `us-epa-ap42-refining-2015`; `us-epa-refinery-effluent-guidelines` |
| `boundary_upstream_links` | 外购和进口输入 | 将原油开采与运输、进口炼厂中间体、外购石脑油、电力、燃料、蒸汽、氢气、水和化学品连接至有代表性的上游数据集，不得默默并入未限定的炼厂平均数据。 | `eu-pef-2021` |
| `boundary_direct_releases` | 受控和无组织炼厂排放 | 纳入可归因于所含过程的直接燃烧和工艺排放、放空、火炬、设备泄漏、储存与装载损失、废水排放和处理废物。 | `us-epa-ap42-refining-2015`; `eu-refinery-bat-2014` |
| `boundary_exclusions` | 下游转化和使用 | 排除下游蒸汽裂解、催化重整、芳烃或烯烃生产、超出声明石脑油规格的汽油调和、炼厂门口后的配送以及产品使用或燃烧。 | `us-epa-ap42-refining-2015`; `unsd-cpc-3-2025` |
| `boundary_cutoff_disclosure` | 被省略的流 | 量化所有具有环境相关性的物料、能源、废物和基本流。任何有理由的排除均须披露依据，并进行敏感性或重要性检查；法律或许可要求报告的排放不得截断。 | `eu-pef-2021`; `eu-refinery-bat-2014` |

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 原油及任何未成品炼厂进料进入炼厂边界，并记录进料身份、来源、数量和质量基础。 |
| starting_condition_role | 前景炼厂入口条件。 |
| product_classification_scope | CPC 3.0 子类 33330 下的石脑油，仅限声明的合格石油馏分，不包括单独分类的成品燃料、溶剂和下游化学品。 |
| recursive_input_rule | 进入所含过程的外购或内部转移石脑油，作为独立产品输入记录，并具有自身上游数据集或有记录的内部转移；不得在同一过程内递归重建其上游石脑油生产。 |
| upstream_dataset_requirement | 对原油开采与运输、进口未成品进料、外购氢气、电力、蒸汽、燃料、水、化学品和外供石脑油使用有代表性的数据集。 |
| disclosure | 声明进料构成、路线和处理状态、所含装置、共享公用工程、分配方法与因子、储罐和装载边界、地理范围、时期、数据缺口及每项被排除的炼厂活动。 |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `refinery_separation` | 炼厂进料准备与石脑油分离 | required | 炼厂生产石脑油时始终纳入；进口石脑油应改作披露的上游产品输入。 | 前景原油或未成品进料准备与分馏。Tiangong 过程身份：`e6baedfb-bafc-454a-a24e-751ebf3eea4d`。 | 转移至处理或储存的净分离石脑油，并归一化至最终 1,000 kg 参考产品。 |
| `naphtha_treatment` | 石脑油稳定与处理 | conditional | 销售前实施稳定、加氢处理、甜化、馏程调整或规格调和时纳入。 | 前景产品调质和杂质去除。 | 离开处理的净合格石脑油，并归一化至最终 1,000 kg 参考产品。 |
| `storage_and_loading` | 石脑油储存、调和与炼厂门口装载 | required | 纳入声明交接点采用的储罐、循环、规格调和和装载方式。 | 前景最终处理与发运。 | 发运 1,000 kg 净合格石脑油。 |

### 过程：炼厂进料准备与石脑油分离（`refinery_separation`）

#### 输入

##### 产品流

###### 原油和未成品炼厂进料（`refinery_feed`）

记录进入所含分离装置的每种原油或未成品石油进料；上游负荷或质量明显不同时，分开记录进料等级或进口中间体。

- 选定流：路线特定的原油或未成品炼厂进料
- 流属性/单位：质量 / kg
- 数量规则：库存核对后计量的所含装置净进料量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 炼厂门口净可销售石脑油
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_refinery_mass_balance`
- 来源：`us-epa-ap42-refining-2015`

###### 分离能源与公用工程（`separation_energy`）

记录进料准备和分馏消耗的电力、蒸汽、工艺热、燃料气及其他载能体；保持回收热和内部燃料可见以防重复计算。

- 选定流：载能体特定的电力、蒸汽、工艺热和燃料
- 流属性/单位：能量 / 按记录使用 MJ 或 kWh
- 数量规则：归属于所含装置的计量或工程核算载能体消耗。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 炼厂门口净可销售石脑油
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_records`
- 来源：`us-epa-ap42-refining-2015`

###### 分离用水和工艺化学品（`separation_water_chemicals`）

记录跨越前景边界的净工艺水、锅炉给水、脱盐化学品、缓蚀剂及其他外购化学品。

- 选定流：载体或物质特定的水和工艺化学品
- 流属性/单位：质量或体积 / kg 或 m3
- 数量规则：归属于所含装置的外购量或净取用量，不含内部循环。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 炼厂门口净可销售石脑油
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_and_water_records`
- 来源：`eu-refinery-bat-2014`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 分离石脑油中间体（`separated_naphtha`）

记录从分离转移到处理或储存的净石脑油馏分；具体数据包必须声明牌号和馏程，不得把所有侧线馏分视为可互换。

- 选定流：石脑油 `91cc5451-cf5d-48c7-9dcc-b054eda6fbb0`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg；单位组 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：对内部循环和罐存变化核对后的净计量转移质量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 炼厂门口净可销售石脑油
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_refinery_mass_balance`
- 来源：`unsd-cpc-3-2025`

###### 其他炼厂馏分和共产品（`separation_coproducts`）

记录离开分离装置的每种共生产石油馏分、炼厂气、作为产品再利用的水流或可销售物料；这些数量用于定义多功能过程和分配因子。

- 选定流：产品特定的炼厂共产品流
- 流属性/单位：与产品相符的质量或能量 / kg 或 MJ
- 数量规则：按产品牌号和去向计量的净共产品输出。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：分配前每报告期处理量
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_refinery_mass_balance`
- 来源：`us-epa-ap42-refining-2015`; `eu-pef-2021`

##### 废物流

###### 分离污泥和废弃残余物（`separation_waste`）

按去向和处理路线记录所含进料准备与分离装置产生的脱盐污泥、罐体或分离器残余物、废过滤器及其他废物。

- 选定流：针对所记录废物及处理路线选择的 Tiangong 废物流
- 流属性/单位：质量 / kg
- 数量规则：称量值或由处置和处理记录支持的质量平衡估算值。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 炼厂门口净可销售石脑油
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_records`
- 来源：`eu-refinery-bat-2014`

##### 基本流

###### 分离过程大气排放（`separation_air_emissions`）

按监测或计算的物质报告直接燃烧与工艺排放、火炬、放空和设备泄漏；每种物质选择单独 Tiangong 基本流，不得使用未说明的汇总排放流。

- 选定流：物质特定的向空气基本流
- 流属性/单位：质量 / kg
- 数量规则：所含装置的实测或与许可一致的计算排放，包括经分配的共享源。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 炼厂门口净可销售石脑油
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_direct_emissions`
- 来源：`us-epa-ap42-refining-2015`; `eu-refinery-bat-2014`

###### 分离过程水排放（`separation_water_emissions`）

按物质和接收环境报告处理后的直接水排放；送到其他前景处理单元的废水在最终排放前保留为内部转移。

- 选定流：物质和环境介质特定的向水基本流
- 流属性/单位：质量 / kg
- 数量规则：实测排放浓度乘以对应排放体积，修正内部循环并关联至同一时期。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 炼厂门口净可销售石脑油
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_wastewater_releases`
- 来源：`us-epa-refinery-effluent-guidelines`; `eu-refinery-bat-2014`

### 过程：石脑油稳定与处理（`naphtha_treatment`）

#### 输入

##### 产品流

###### 进入处理的石脑油（`naphtha_to_treatment`）

记录进入稳定、加氢处理、甜化、馏程调整或规格调和的实际石脑油物流。

- 选定流：石脑油 `91cc5451-cf5d-48c7-9dcc-b054eda6fbb0`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg；单位组 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：库存和循环核对后的净计量输入质量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 炼厂门口净可销售石脑油
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_treatment_mass_balance`
- 来源：`us-epa-ap42-refining-2015`

###### 氢气、化学品和处理公用工程（`treatment_inputs`）

按载体或物质分别记录氢气、碱液或其他处理化学品、电力、蒸汽、燃料和水；只记录实际实施处理所需的输入。

- 选定流：载体或物质特定的处理输入流
- 流属性/单位：质量、能量或体积 / kg、MJ、kWh 或 m3
- 数量规则：归属于处理装置和报告期的计量或外购数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 炼厂门口净可销售石脑油
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_treatment_inputs`
- 来源：`us-epa-ap42-refining-2015`; `eu-refinery-bat-2014`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 处理后合格石脑油（`treated_naphtha`）

记录离开处理的净合格石脑油，并将不合格品、循环和库存变化保持可见。

- 选定流：石脑油 `91cc5451-cf5d-48c7-9dcc-b054eda6fbb0`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg；单位组 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：不合格品转移、循环和库存变化修正后的净计量合格输出。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 炼厂门口净可销售石脑油
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_treatment_mass_balance`
- 来源：`unsd-cpc-3-2025`

###### 处理共产品和回收物流（`treatment_coproducts`）

按物流和去向记录从处理路线产生并离开该装置的燃料气、硫化物流、回收油或其他共产品。

- 选定流：产品特定的回收流或共产品流
- 流属性/单位：质量或能量 / kg 或 MJ
- 数量规则：按物流和去向计量的净输出。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：分配前每报告期处理量
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_treatment_mass_balance`
- 来源：`us-epa-ap42-refining-2015`; `eu-refinery-bat-2014`

##### 废物流

###### 废处理材料（`spent_treatment_materials`）

记录废催化剂、废碱液、吸附剂、过滤介质及处理路线产生的其他废物，并声明去向。

- 选定流：针对所记录材料及处理路线选择的 Tiangong 废物流
- 流属性/单位：质量 / kg
- 数量规则：分配至所代表运行期的称量更换量或处置量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 炼厂门口净可销售石脑油
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_waste_records`
- 来源：`eu-refinery-bat-2014`

##### 基本流

###### 处理过程大气和水排放（`treatment_releases`）

按物质、环境介质和来源报告处理路线的燃烧、工艺、放空和水排放。

- 选定流：物质和环境介质特定的基本流
- 流属性/单位：质量 / kg
- 数量规则：归属于所含处理路线的实测或与许可一致的计算排放。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 炼厂门口净可销售石脑油
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_direct_emissions`
- 来源：`us-epa-ap42-refining-2015`; `eu-refinery-bat-2014`

### 过程：石脑油储存、调和与炼厂门口装载（`storage_and_loading`）

#### 输入

##### 产品流

###### 进入最终处理的石脑油（`naphtha_to_storage`）

记录进入最终产品储罐、规格调和和装载系统的石脑油。

- 选定流：石脑油 `91cc5451-cf5d-48c7-9dcc-b054eda6fbb0`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg；单位组 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：经期初和期末库存核对后的净计量接收质量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 炼厂门口净可销售石脑油
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_storage_dispatch`
- 来源：`eu-refinery-bat-2014`

###### 处理能源和辅助材料（`handling_inputs`）

记录石脑油储存、泵送、调和、蒸气控制和装载消耗的电力、燃料、惰性气体及其他材料。

- 选定流：载体或物质特定的最终处理输入流
- 流属性/单位：质量或能量 / kg、MJ 或 kWh
- 数量规则：归属于石脑油储存和装载的计量或外购数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 炼厂门口净可销售石脑油
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_records`
- 来源：`eu-refinery-bat-2014`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 发运参考石脑油（`reference_naphtha`）

这是声明交接点的参考产品；必须由可追溯的罐存和交接记录支持质量与规格符合性。

- 选定流：石脑油 `91cc5451-cf5d-48c7-9dcc-b054eda6fbb0`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg；单位组 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：将核对后的合格石脑油净交接质量精确归一化至 1,000 kg。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：1,000 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_storage_dispatch`
- 来源：`unsd-cpc-3-2025`

##### 废物流

###### 罐底物、不合格品处置和装载废物（`handling_waste`）

记录最终储存和装载边界产生的罐底物、清洗残余物、过滤材料、不合格品处置及其他废物。

- 选定流：针对所记录废物及处理路线选择的 Tiangong 废物流
- 流属性/单位：质量 / kg
- 数量规则：代表期的称量处置量或有库存支持的质量平衡值。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 炼厂门口净可销售石脑油
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_records`
- 来源：`eu-refinery-bat-2014`

##### 基本流

###### 储存和装载向空气排放（`handling_air_emissions`）

按物质和来源报告储罐呼吸与工作损失、装载损失、蒸气控制残余排放和相关设备泄漏。

- 选定流：物质特定的向空气基本流，适用时包括报告的非甲烷挥发性有机物和苯
- 流属性/单位：质量 / kg
- 数量规则：实测蒸气控制出口排放，或使用实际处理量、蒸气属性、装载方式、捕集效率、控制效率和停机时间进行与许可一致的计算。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 炼厂门口净可销售石脑油
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_storage_voc`
- 来源：`us-epa-ap42-petroleum-liquids-2008`; `eu-refinery-bat-2014`

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivide_first` | 炼厂装置和直接计量物流 | 优先通过细分单元操作并把直接计量的进料、能源、材料、废物和排放分派给造成它们的过程和产品，以避免分配。 | `eu-pef-2021` |
| `allocation_physical_relationship` | 不可分离的多功能炼厂操作 | 无法细分或进行有理由的系统扩展时，使用反映共享输入和排放如何关联于各共产品功能的、可记录且可量化的物理关系；不得仅因方便而选择质量或能量含量。 | `eu-pef-2021` |
| `allocation_other_relationship` | 无可辩护物理关系的操作 | 采用经济分配等其他关系时，应记录拒绝细分、系统扩展和物理分配的理由；使用共生产阶段价格，并检验分配基准和价格时期的敏感性。 | `eu-pef-2021` |
| `allocation_internal_energy` | 炼厂气、回收热、蒸汽、氢气和内部循环 | 保持回收能源和内部转移可见，按照选定分配方法一致分派共享公用工程负荷，防止重复计算抵扣或避免负荷。 | `eu-pef-2021`; `us-epa-ap42-refining-2015` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_refinery_mass_balance` | `refinery_separation` | 炼厂进料、分离石脑油和共产品 | 交接仪表、液位计、实验室放行记录和生产台账 | stream_id; grade; opening_inventory; receipts; transfers; recycle; closing_inventory; saleable_output; meter_unit; density; reference_temperature | 校准质量流量计，或结合密度并与储罐及生产记录匹配的体积流量计。 | kg；保留源单位 | 每批或每班，月度核对 | 至少一个有代表性的 12 个月期间；批次生产覆盖全部批次 | 全部所含分离装置及相连储罐 | 同期核对进料与输出，调查未解释差额，在分配后归一化。 | 校准记录；罐存核对；实验室放行证书；签署生产台账 |
| `cp_treatment_mass_balance` | `naphtha_treatment` | 石脑油输入、合格输出、循环、不合格品和共产品 | 装置仪表、液位计、实验室记录和运行日志 | stream_id; input_mass; output_mass; recycle_mass; offspec_mass; inventory_change; treatment_route; quality_result | 校准仪表与批次或期间质量平衡核对。 | kg | 每批或每班，月度核对 | 与代表处理批次相同期间 | 每个所含处理装置 | 核对全部烃类输入和输出，分别保留不合格品及循环。 | 仪表校准；实验室分析；运行日志；核对批准记录 |
| `cp_treatment_inputs` | `naphtha_treatment` | 氢气、处理化学品、水和处理公用工程 | 流量计、公用工程仪表、领用记录、采购记录和库存台账 | input_id; quantity; concentration; meter_start; meter_end; opening_stock; receipts; issues; closing_stock; unit | 优先按载体或物质直接计量，否则对代表处理装置核对采购、领用和库存变化。 | kg；m3；kWh；MJ；保留源单位 | 连续或每次领用，月度核对 | 与代表处理批次相同期间 | 每个所含处理装置及其专用输入储存区 | 按载体或物质分别计算净消耗，分开记录回收或退回物料，并仅在厂区平衡后分配共享公用工程。 | 仪表校准；发票；领用记录；盘点；公用工程平衡；分配记录 |
| `cp_storage_dispatch` | `storage_and_loading` | 石脑油接收、罐存、调和转移和发运 | 液位计、交接仪表、提单和放行证书 | tank_id; opening_inventory; receipts; blend_transfers; returns; closing_inventory; dispatch_mass; grade; destination; custody_point | 交接质量流量计，或使用物流特定密度和参考温度的体积流量计。 | kg；具换算证据时可用 L 或 m3 | 每次转移，月度核对 | 与生产相同报告期 | 全部成品罐和装载系统 | 净发运量为实测发运量减退货，并核对库存和内部转移。 | 仪表检定；液位记录；提单；质量放行证书 |
| `cp_energy_records` | `refinery_separation`; `naphtha_treatment`; `storage_and_loading` | 电力、蒸汽、热、燃料和回收能源 | 公用工程仪表、燃料台账和工程分配记录 | carrier; meter_start; meter_end; heating_value; import; export; recovered_energy; unit; allocation_driver | 优先直接分表计量，否则依据完整厂区公用工程平衡进行有记录的工程分配。 | kWh；MJ；kg 蒸汽；保留源单位 | 连续或每班读数，月度核对 | 与代表生产相同期间 | 所含装置和共享公用工程 | 各载能体分别取净值，完成厂区平衡后分配共享公用工程，不得跨载能体抵销。 | 仪表校准；发票；公用工程平衡；分配工作表 |
| `cp_material_and_water_records` | `refinery_separation`; `naphtha_treatment` | 水、氢气、催化剂、碱液和处理化学品 | 采购、领用、仪表和库存记录 | material_id; quantity; concentration; opening_stock; receipts; issues; closing_stock; recycle; unit | 按物质和浓度计量使用量或进行库存变化核对。 | kg；m3；保留源单位 | 每次领用或连续计量，月度核对 | 与代表生产相同期间 | 所含装置和储存区 | 净消耗等于期初库存加接收量减期末库存、已记录转移或退货。 | 发票；仪表校准；盘点；规格或分析证书 |
| `cp_direct_emissions` | `refinery_separation`; `naphtha_treatment` | 燃烧、工艺、放空、火炬和无组织排放 | 连续监测、烟囱测试、泄漏检测、火炬与活动记录和许可计算 | source_id; pollutant; measured_concentration; flow_rate; duration; activity; factor; control_efficiency; downtime; method | 优先采用适用的直接测量，否则用现行场址活动数据和有记录的法规或工程方法。 | kg 污染物；保留源单位 | 依许可或方法规定频率，至少覆盖每种重要运行模式 | 与代表生产相同期间，包括开停工和异常事件 | 全部可归因直接源及分配后的共享源 | 对实测排放随时间积分；其他排放由活动和方法计算；只扣除经验证的捕集或回收。 | 监测 QA/QC；烟囱测试；泄漏检测记录；火炬日志；许可报告；计算文件 |
| `cp_wastewater_releases` | `refinery_separation`; `naphtha_treatment` | 废水和最终向水排放 | 流量计、混合样、实验室结果和处理日志 | discharge_point; volume; pollutant; concentration; sample_time; detection_limit; treatment_route; receiving_compartment | 适用时采用流量比例混合采样，并配对对应排放体积。 | m3；mg/L；kg | 许可频率及重大工艺变更后 | 与代表生产相同期间 | 全部所含排放口和外包处理转移 | 污染物质量等于浓度乘以对应体积；按披露规则处理未检出值；避免重复计算内部转移。 | 认可实验室结果；采样日志；流量计校准；许可报告 |
| `cp_waste_records` | `refinery_separation`; `naphtha_treatment`; `storage_and_loading` | 污泥、废处理材料、罐底物和其他废物 | 地磅单、废物联单、承包商记录和库存台账 | waste_id; composition; mass; date; origin_unit; destination; treatment_route; opening_stock; closing_stock | 优先直接称量，否则采用有记录的库存变化质量平衡。 | kg | 每次外运和月度库存 | 与代表生产相同期间；只有理由充分时才将批次废物年化 | 全部所含装置和临时废物储存 | 汇总外运废物和库存变化，分别记录回收、利用、处理和处置路线。 | 地磅校准；联单；承包商证书；盘点 |
| `cp_storage_voc` | `storage_and_loading` | 储罐、装载和设备泄漏排放 | 储罐参数、处理量、蒸气属性、装载方式、蒸气控制监测和泄漏检测 | source_id; throughput; liquid_temperature; vapor_pressure; vapor_molecular_weight; loading_mode; capture_efficiency; control_efficiency; downtime; measured_outlet; leak_rate | 有要求时直接监测，否则使用场址特定输入按有记录的 AP-42 或许可一致方法计算。 | kg 污染物；保留源单位 | 每次装载或每月计算；安装控制设施时连续监测 | 与代表发运相同期间 | 全部石脑油储罐、装车台及相关设备 | 按源和物质计算，加上控制残余和非受控停机排放，将回收蒸气保留为内部流。 | 控制监测；计算文件；泄漏检测；处理量和蒸气属性记录 |

### 计算规则

| rule_id | 适用对象 | 公式或规则 | 输入 | 输出 | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_net_naphtha_output` | 每个所含过程和最终参考输出 | 净合格输出 = 实测外送量 + 期末合格库存 − 期初合格库存 − 退回或内部循环量；可按场址台账惯例透明调整符号。 | 外送量；期初库存；期末库存；退货；内部循环；不合格品转移 | 净合格石脑油质量 | `eu-pef-2021` |
| `calc_volume_to_mass` | 按体积记录的液体物流 | 质量 = 实测或修正至参考温度的体积 × 适用于同一物流和温度基准的密度。 | 体积；密度；测量温度；参考温度；修正方法 | 以 kg 表示的物流质量 | `unsd-cpc-3-2025` |
| `calc_normalized_inventory` | 每个清单行 | 归一化数量 = 已分配的报告期行数量 ÷ 报告期净合格石脑油输出 × 1,000 kg。 | 行数量；分配因子；净合格输出 | 每 1,000 kg 参考产品的数量 | `eu-pef-2021` |
| `calc_pollutant_release` | 计算的基本流 | 污染物质量 = 实测质量速率积分值，或活动量 × 适用因子并按经验证的捕集和控制效率调整；保留方法、因子版本、运行模式和停机时间。 | 监测数据或活动量；因子；捕集效率；控制效率；停机时间 | 按来源和环境介质列出的污染物质量 | `us-epa-ap42-refining-2015`; `us-epa-ap42-petroleum-liquids-2008`; `eu-refinery-bat-2014` |
| `calc_allocation_factor` | 共享炼厂装置或公用工程负荷 | 分配因子 = 石脑油的声明分配驱动值 ÷ 全部共产品该驱动值之和；对共享输入、废物和排放一致应用，并记录例外。 | 共产品数量；物理或经济驱动；使用时的价格和价格期 | 石脑油分配因子 | `eu-pef-2021` |

### 数据质量要求

| requirement_id | 适用对象 | 要求 | 证据 |
| --- | --- | --- | --- |
| `dq_product_identity` | 参考产品和中间石脑油物流 | 保留牌号、实际馏程、处理路线、合同质量结果、采用时的密度基准和交接点；证明输出仍属于石脑油类别，而非单独分类的燃料、溶剂或下游化学品。 | 实验室证书；产品规格；流身份；批次与转移记录 |
| `dq_temporal` | 全部前景数据 | 使用共同代表期，通常不少于 12 个月，除非批次生产有充分理由；对齐物料、公用工程、排放、废水和废物数据，并披露停工、开工和异常事件。 | 时期覆盖表；运行日历；核对报告 |
| `dq_technology` | 分离、处理、储存和控制系统 | 识别实际分馏、处理、储罐、装载、蒸气控制、废水和排放控制技术，并证明所选次级数据集具有代表性。 | 工艺流程图；设备清单；技术到数据集映射 |
| `dq_geography` | 上游数据集和直接排放 | 在重要时使用地理特定的上游供应和法规背景；披露炼厂位置、原油来源、电力、氢气及其他上游数据集之间的不匹配。 | 供应商来源；数据集元数据；地理缺口评估 |
| `dq_completeness` | 清单和边界 | 核对总烃质量，纳入重要能源和水载体、直接及无组织排放、废水排放和废物，并为每项排除提供理由。 | 质量与能量平衡；完整性清单；许可到清单对照 |
| `dq_precision_uncertainty` | 实测、计算和分配值 | 保留校准、采样、检出限、因子、分配和不确定性信息；区分实测数据和计算值，并评估重要分配选择的敏感性。 | 校准与 QA/QC 记录；计算文件；不确定性和敏感性结果 |
| `dq_representativeness` | 完成的前景数据集 | 评估技术、地理和时间代表性及精度，并报告完整性和方法一致性。 | 与 `eu-pef-2021` 一致的有记录数据质量评估 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validate_reference_identity` | 参考产品 | 产品流 UUID、质量属性 UUID、质量单位组 UUID、1,000 kg 参考数量、CPC 边界、牌号、馏程、处理路线和交接点必须存在且相互一致。 | `unsd-cpc-3-2025` |
| `validate_process_coverage` | 前景过程图 | 必须包含分离和最终储存/装载；声明路线包含稳定、加氢处理、甜化、馏程调整或规格调和时，必须包含处理过程。 | `us-epa-ap42-refining-2015`; `eu-refinery-bat-2014` |
| `validate_mass_balance` | 每个过程和报告期 | 归一化前必须核对烃类输入、输出、循环、库存变化、不合格品转移、废物和未解释差额；未解决的重要质量不平衡是错误。 | `eu-pef-2021` |
| `validate_allocation` | 多功能炼厂操作和共享公用工程 | 披露并一致应用所选分配层级、驱动、因子、共产品集合、适用时的价格时期和敏感性结果；重复计算回收能源或内部转移是错误。 | `eu-pef-2021` |
| `validate_direct_releases` | 空气、水和废物清单 | 直接燃烧与工艺排放、火炬、放空、无组织泄漏、储存/装载损失、最终水排放和处理废物必须按物质及去向纳入，或具有有记录的不适用判定。 | `us-epa-ap42-refining-2015`; `us-epa-refinery-effluent-guidelines`; `eu-refinery-bat-2014` |
| `validate_period_and_quality` | 完成的前景数据集 | 所有前景记录必须覆盖一致的声明期间；保留校准、采样、计算、代表性、完整性和不确定性证据，并披露重要缺口。 | `eu-pef-2021` |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 石脑油炼厂门口生产前景数据集。 |
| downstream_use | `secondary_dataset`; `background_dataset` |
| allowed_use | 需要炼厂门口石脑油作为原料的产品碳足迹和 LCA 模型，前提是牌号、路线、地理范围、时期和分配与研究相容。 |
| excluded_use | 未经协调直接比较不同石脑油牌号或炼厂路线；代表车用汽油、喷气燃料、煤油、石油溶剂油（white spirit）、裂解汽油或下游石化产品；没有下游模型的使用阶段燃烧。 |
| required_metadata | canonical PCR id；产品流 UUID；牌号和馏程；处理路线；主要质量规格；进料构成；炼厂技术；地理范围；参考期；交接点；分配层级、驱动和因子；所含装置；上游数据集身份；数据所有者和复核状态 |
| required_quality_disclosure | 质量平衡闭合；仪表和实验室 QA/QC；时间、技术和地理代表性；直接与计算数据占比；排放和废水方法；分配敏感性；完整性；不确定性；排除和未解决缺口 |
| update_trigger | 进料构成、产品牌号或规格、分馏或处理路线、储罐/装载或控制技术、分配方法、上游供应、适用许可方法或代表期发生重要变化，或出现重要数据质量发现。 |

## 11. 数据源

| 来源编号 | 类型 | 文献 | 用途 |
| --- | --- | --- | --- |
| `unsd-cpc-3-2025` | 官方指南（`official_guidance`） | 联合国统计司，CPC 3.0 版说明，2025 年 6 月 30 日，第 155 页，https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf；检索日期 2026-08-09 | CPC 33330 产品边界、石脑油身份及其与车用汽油的区别。 |
| `us-epa-ap42-refining-2015` | 官方指南（`official_guidance`） | 美国环保署，AP-42 第 5.1 节《石油炼制》，2015 年 4 月，https://www.epa.gov/sites/default/files/2020-09/documents/5.1_petroleum_refining.pdf；检索日期 2026-08-09 | 炼厂过程分解、分离与处理操作、公用工程、直接与无组织排放源、废水处理及前景清单覆盖。 |
| `us-epa-ap42-petroleum-liquids-2008` | 官方指南（`official_guidance`） | 美国环保署，AP-42 第 5.2 节《石油液体的运输与销售》，2008 年 6 月，https://www.epa.gov/sites/default/files/2020-09/documents/5.2_transportation_and_marketing_of_petroleum_liquids.pdf；检索日期 2026-08-09 | 装载损失计算输入、装载方式、蒸气回收以及储存/装载排放记录。 |
| `us-epa-refinery-effluent-guidelines` | 官方指南（`official_guidance`） | 美国环保署，《石油炼制废水排放指南》40 CFR Part 419 概览，https://www.epa.gov/eg/petroleum-refining-effluent-guidelines；检索日期 2026-08-09 | 炼厂产品与过程范围、废水边界、排放和处理覆盖。 |
| `eu-refinery-bat-2014` | 标准（`standard`） | 欧盟委员会，实施决定 2014/738/EU（矿物油和天然气炼制最佳可行技术结论），ELI http://data.europa.eu/eli/dec_impl/2014/738/oj；检索日期 2026-08-09 | 空气和水排放监测与纳入、蒸馏废气和酸性水处理、产品处理、储存、装载、蒸气回收、废物和控制系统记录。 |
| `eu-pef-2021` | 官方指南（`official_guidance`） | 欧盟委员会，建议（EU）2021/2279，附件 I 产品环境足迹方法，ELI http://data.europa.eu/eli/reco/2021/2279/oj；检索日期 2026-08-09 | 功能单位和参考流、完整性、多功能性层级、分配披露、数据采集、代表性、精度和质量要求。 |
