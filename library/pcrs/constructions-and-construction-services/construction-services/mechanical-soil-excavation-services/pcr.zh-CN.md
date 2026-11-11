---
pcr_id: pcr.constructions-and-construction-services.construction-services.mechanical-soil-excavation-services
language: zh-CN
translation_status: aligned
status: candidate
sync_with: pcr.en-US.md
---

# 未污染土壤机械开挖服务

## 1. 范围与适用性

本PCR适用于承包方在已清场、可进入施工场址对已查明的未污染土壤实施机械开挖。包括挖掘、几何修整，以及仅在合同申报范围内的装载或场内转移。开挖几何验收且移出土壤交给申报堆场或车辆责任方时服务结束。排除岩石爆破、污染土修复、初始场地清理、填筑压实、基础施工、支护工程及交接后的场外土壤运输和处理。需要降水、支护或其他临时工程时，申报关联且单独量化的工作包，披露其归属并在全项目汇总中纳入。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.constructions-and-construction-services.construction-services.mechanical-soil-excavation-services |
| classification_refs | cpc:3.0:54330 |
| covered_products | 申报场址交接门处的常规未污染土机械开挖服务 |
| excluded_products | 土壤商品；完整建造资产；岩石爆破；修复；清场；填筑；基础；交接后场外运输 |
| representative_product | 未污染土壤机械开挖服务 |
| production_route | 工作批/班次机械挖掘与修整、申报装载/场内转移、检查及交接 |
| market_state | 按原状开挖体积计量的已验收施工服务 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| 功能对象 (`What`) | 未污染土壤机械开挖服务 |
| 数量 (`How much`) | 1 m3已验收原状开挖空腔 |
| 质量要求 (`How well`) | 申报几何/容差及土类；按项目规格签署验收 |
| 持续时间或周期 (`How long or cycle`) | 一次完成的开挖与交接事件；不含建筑寿命或重复开挖周期 |
| reference_flow_link | `accepted_excavation_service` |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 已验收机械土方开挖服务 |
| 参考流属性 | 体积 `93a60a56-a3c8-22da-a746-0800200c9a66` |
| 参考单位组 | 体积单位 `93a60a57-a3c8-12da-a746-0800200c9a66` |
| 参考单位 | m3 |
| 必需限定信息 | 场址与期间；土类及污染表征；开挖深度及几何/容差；测量与验收方法；机械及燃料路线；装载/场内转移责任及距离；交接责任方；土壤再用/废物去向；降水/支护归属 |

前景数据包须保留限定信息；物理体积是本服务的活动计量，不表示松散开挖土具有相同体积。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_volume` | reference product | 体积 | m3 | 采用验收原状体积；保留设计修订及测量边界，排除未授权超挖，每个验收空腔仅计一次。 |
| `soil_volume_state` | reusable_soil_handover; waste_soil_handover | 质量 | kg | 区分原状、松散及压实状态；质量/体积或含水换算须使用实测且相容的密度、含水率与状态，不假定通用膨胀系数；见`fhwa-earthwork-representation-2025`。 |
| `emission_basis` | `engine_species_air_carbon_monoxide`; `engine_species_air_nitrogen_monoxide`; `engine_species_air_nitrogen_dioxide`; `engine_species_air_sulfur_dioxide`; soil_dust_pm25_air; soil_dust_coarse_air | 质量 | kg | 保留化学物种、NOx报告基准及空气动力学粒径；包含细粒的PM10与PM2.5不得同时作为可加总量。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 已测量、清场、可进入且原生土污染状况已查明无污染、设计已批准的场址 |
| starting_condition_role | 初始工地状态，不是购入原生土投入，也不表示全项目零负荷 |
| product_classification_scope | CPC54330内较窄的机械土开挖服务，不覆盖全部土方服务 |
| recursive_input_rule | 同类分包服务作为披露边界的上游服务投入；按实际责任划分，避免重复开挖输出及运行负荷 |
| upstream_dataset_requirement | 关联具有技术、地域、期间及边界相容性的燃料、电力、水、机械使用及进退场供应数据集；母项目另行关联清场、支护及下游土壤去向 |
| disclosure | 申报每个排除工作包的责任方、初始土壤/状态、实际接收方及土壤去向；缺失记录保留为缺口 |

### 边界规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `scope_eligibility` | foreground_system_boundary | 本PCR适用于承包方在已清场、可进入施工场址对已查明的未污染土壤实施机械开挖。包括挖掘、几何修整，以及仅在合同申报范围内的装载或场内转移。开挖几何验收且移出土壤交给申报堆场或车辆责任方时服务结束。排除岩石爆破、污染土修复、初始场地清理、填筑压实、基础施工、支护工程及交接后的场外土壤运输和处理。需要降水、支护或其他临时工程时，申报关联且单独量化的工作包，披露其归属并在全项目汇总中纳入。 |  |
| `boundary_service` | excavate | 采集挖掘、修整、怠速/返工能源及申报装载/场内移动，直至验收与材料交接；移除责任独立于后续填筑、处理及基础生产。 | `fhwa-fp24-original-position` |
| `boundary_material` | excavate | 原生土属于来源条件；建立再用土、废物、留存库存及土尘的实物流转台账；不得构造任意购入土投入，也不得将材料交接等同于服务参考。 |  |
| `boundary_shared` | excavate | 纳入归属机械使用、进退场及共享支持；对共享挖掘机、装载机、运输机械、供水及进退场行程，列出本节点及全部其他使用工作包/节点和服务期间；每事件保留一个归属方。 |  |
| `boundary_emissions` | excavate | 纳入交接前实际直接尾气及分作业土尘；径流及维护废物须有实际组成与去向，不得因未测量而认定无排放。 | `epa-ap42-construction-dust`; `epa-nonroad-exhaust` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `excavate` | 机械土开挖与验收 | required | 每个纳入开挖工作批 | 独立移除服务，包括申报内部移动及返工回路 | `accepted_excavation_service` |

生产模式为按场址、几何及班次索引的离散工作批，不是连续商品工厂。几何/标高不合格在excavate内纠正；额外挖掘、怠速及重复倒运保留为验收批负荷。未授权超挖不进入验收体积。不符合预期再用要求的土壤在相同转移编号下由reusable_soil_handover改记waste_soil_handover。清洗维护事件及共享作业转移保留资产、班次与归属关联。

### 过程：机械土开挖与验收（`excavate`）

#### 输入

##### 产品流

###### 开挖机械用柴油（`excavation_diesel`）

仅当使用化石柴油动力设备时发生：交付挖掘机及申报范围内装载、场内转移机械的化石柴油；生物柴油混合物须单列并保留组成。

- 选定流：柴油 `9d258d75-6792-4f1c-9856-81602ed8f816`
- 绑定模式：`fixed`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 质量单位 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：采集发油量，扣除退油及油箱库存增加量；按机械作业记录归属。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_energy`
- 数量范围：作者暂定筛选估计；须以审查证据替换
  - 范围角色：`qa_guardrail`
  - 下限：0
  - 上限：5
  - 单位：kg
  - 基准：每参考流
  - 基准类型：`reference_flow`
  - 证据类型：`reasoned_estimate`

###### 动力设备电力（`excavation_electricity`）

仅在本服务包使用电动挖掘机、泵或其他设备时发生；区分电网与发电机供电，发电燃料及直接尾气只能有一个归属方。

- 选定流：动力设备电力
- 流属性/单位：能量 / kWh
- 数量规则：计量实际归属电量，排除已计入购入服务的电量。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_energy`
- 数量范围：作者暂定筛选估计；须以审查证据替换
  - 范围角色：`qa_guardrail`
  - 下限：0
  - 上限：20
  - 单位：kWh
  - 基准：每参考流
  - 基准类型：`reference_flow`
  - 证据类型：`reasoned_estimate`

###### 不含运行能源的挖掘机使用服务 (`plant_use_excavator`)

仅记录本项独立识别的“不含运行能源的挖掘机使用服务”，保留实际状态和供应或接收交付点。只有实际记录证明本项独立对象发生时才启用；须识别准确SKU、配方或完整交付混合物、所有权、接收方或服务方以及每次原始及返工事件。未发生须有证据；身份、数量或条件缺失均为阻断完成的数据缺口。不得由其他子流推定本项发生或数量。完整供货及污染载体内含的部件和物料仅计一次。

- 选定流：不含运行能源的挖掘机使用服务
- 流属性/单位：Duration / h
- 数量规则：按本项实际机具逐资产、班次及任务独立记录生产、怠速和返工小时，核对全部使用者的实测分配及完整生命周期范围，排除另记燃料电力和进退场运输；采用实际匹配每小时机具服务数据，按已验收原状开挖体积仅归一化一次，不将其他物理参考强转小时。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_plant`

数量范围证据需求：须有本项实际交换身份匹配的独立数量证据及不确定性。集合总量或旧集合区间不是子流数量、分配份额或自动有效的子流QA区间。

###### 不含运行能源的装载机使用服务 (`plant_use_loader`)

仅记录本项独立识别的“不含运行能源的装载机使用服务”，保留实际状态和供应或接收交付点。只有实际记录证明本项独立对象发生时才启用；须识别准确SKU、配方或完整交付混合物、所有权、接收方或服务方以及每次原始及返工事件。未发生须有证据；身份、数量或条件缺失均为阻断完成的数据缺口。不得由其他子流推定本项发生或数量。完整供货及污染载体内含的部件和物料仅计一次。

- 选定流：不含运行能源的装载机使用服务
- 流属性/单位：Duration / h
- 数量规则：按本项实际机具逐资产、班次及任务独立记录生产、怠速和返工小时，核对全部使用者的实测分配及完整生命周期范围，排除另记燃料电力和进退场运输；采用实际匹配每小时机具服务数据，按已验收原状开挖体积仅归一化一次，不将其他物理参考强转小时。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_plant`

数量范围证据需求：须有本项实际交换身份匹配的独立数量证据及不确定性。集合总量或旧集合区间不是子流数量、分配份额或自动有效的子流QA区间。

###### 不含运行能源的场内运输机具使用服务 (`plant_use_onsite_haul_plant`)

仅记录本项独立识别的“不含运行能源的场内运输机具使用服务”，保留实际状态和供应或接收交付点。只有实际记录证明本项独立对象发生时才启用；须识别准确SKU、配方或完整交付混合物、所有权、接收方或服务方以及每次原始及返工事件。未发生须有证据；身份、数量或条件缺失均为阻断完成的数据缺口。不得由其他子流推定本项发生或数量。完整供货及污染载体内含的部件和物料仅计一次。

- 选定流：不含运行能源的场内运输机具使用服务
- 流属性/单位：Duration / h
- 数量规则：按本项实际机具逐资产、班次及任务独立记录生产、怠速和返工小时，核对全部使用者的实测分配及完整生命周期范围，排除另记燃料电力和进退场运输；采用实际匹配每小时机具服务数据，按已验收原状开挖体积仅归一化一次，不将其他物理参考强转小时。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_plant`

数量范围证据需求：须有本项实际交换身份匹配的独立数量证据及不确定性。集合总量或旧集合区间不是子流数量、分配份额或自动有效的子流QA区间。

###### 开挖机械进退场运输（`plant_mobilization`）

机械自身的运输服务，包括申报承担的返程及空驶责任；移出土壤的场外运输是另一项服务，在交接门之后排除。

- 选定流：开挖机械进退场运输
- 流属性/单位：质量*距离 `118f2a40-50ec-457c-aa60-9bc6b6af9931`; kg*km单位 `3620148f-c5db-48ce-9065-a10092089aca` / t*km
- 数量规则：采集运输机械质量及载货距离；供应商计入的空驶仅归属一次。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_mobilization`
- 数量范围：作者暂定筛选估计；须以审查证据替换
  - 范围角色：`qa_guardrail`
  - 下限：0
  - 上限：100
  - 单位：t*km
  - 基准：每参考流
  - 基准类型：`reference_flow`
  - 证据类型：`reasoned_estimate`

###### 抑尘供水（`dust_water`）

仅计向开挖及申报场内移动区域施用的外供抑尘水；直接取水须另设实际基本资源流，不得虚构水源。

- 选定流：抑尘供水
- 流属性/单位：体积 `93a60a56-a3c8-22da-a746-0800200c9a66`; 体积单位 `93a60a57-a3c8-12da-a746-0800200c9a66` / m3
- 数量规则：计量交付量或罐体积并扣除未使用退回量；区分蒸发、土壤滞留与收集径流。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_water`
- 来源：`fhwa-fp24-dust-water`
- 数量范围：作者暂定筛选估计；须以审查证据替换
  - 范围角色：`qa_guardrail`
  - 下限：0
  - 上限：0.5
  - 单位：m3
  - 基准：每参考流
  - 基准类型：`reference_flow`
  - 证据类型：`reasoned_estimate`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 已验收机械土方开挖服务（`accepted_excavation_service`）

完成测量确定的设计开挖几何形状，并将移出土壤交给申报下一责任方的施工服务；输出是针对1 m3原状土完成的服务，而不是出售1 m3土壤。

验收批总量除以同一验收批总量得到服务归一化恒等结果1；1 m3是申报约定，不是观察到的批次大小。

- 选定流：已验收机械土方开挖服务
- 流属性/单位：体积 `93a60a56-a3c8-22da-a746-0800200c9a66`; 体积单位 `93a60a57-a3c8-12da-a746-0800200c9a66` / m3
- 数量规则：1 m3
- 数值来源模式：`fixed_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_acceptance`
- 来源：`fhwa-fp24-original-position`
- 数量范围：精确申报服务归一化
  - 范围角色：`allowed_range`
  - 下限：1
  - 上限：1
  - 单位：m3
  - 基准：每参考流
  - 基准类型：`reference_flow`
  - 证据类型：`calculated_from_collection`

###### 确认再利用的未污染开挖土（`reusable_soil_handover`）

具有接收方、规格及再利用去向记录时，按松散土实际交接；它是区别于收费开挖服务的材料核算输出，同一土壤不得同时计为废物。

- 选定流：确认再利用的未污染开挖土
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 质量单位 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：称量移交再用土；保留含水基准，并与开挖量、库存及其他去向核对。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_soil`
- 数量范围：作者暂定筛选估计；须以审查证据替换
  - 范围角色：`qa_guardrail`
  - 下限：0
  - 上限：3000
  - 单位：kg
  - 基准：每参考流
  - 基准类型：`reference_flow`
  - 证据类型：`reasoned_estimate`

##### 废物流

###### 作为废物交接的开挖土（`waste_soil_handover`）

仅计依法交给废物责任方的未污染多余或不适用土；施工中发现污染须重新审查范围，不得默默纳入本PCR。

- 选定流：作为废物交接的开挖土
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 质量单位 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：称量废物交接并记录类别、转移编号及去向，不预设固定废土比例。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_soil`
- 数量范围：作者暂定筛选估计；须以审查证据替换
  - 范围角色：`qa_guardrail`
  - 下限：0
  - 上限：3000
  - 单位：kg
  - 基准：每参考流
  - 基准类型：`reference_flow`
  - 证据类型：`reasoned_estimate`

###### 送往处理的废润滑油 (`spent_lubricating_oil_waste`)

仅在本具体交换确实发生于现有作业边界内时适用。记录准确物料或设备身份、供应/当前状态、原生数量及实际接收方或上游覆盖。不推定发生、数量、新工艺或 UUID。完整供应组件与其已包含部件是互斥采购表示。计量实际移出的废润滑油，保留污染状态及处理接收记录；排除仍留在设备中或已被机具服务生命周期覆盖的油。

- 选定流：送往处理的废润滑油
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 质量单位 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：分别计量各项实际废物，并确认上游机械使用服务是否已承担处理。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_waste`
- 数量范围：作者暂定筛选估计；须以审查证据替换
  - 范围角色：`qa_guardrail`
  - 下限：0
  - 上限：100
  - 单位：kg
  - 基准：每参考流
  - 基准类型：`reference_flow`
  - 证据类型：`reasoned_estimate`

###### 送往处理的废机油滤芯 (`spent_oil_filter_waste`)

仅在本具体交换确实发生于现有作业边界内时适用。记录准确物料或设备身份、供应/当前状态、原生数量及实际接收方或上游覆盖。不推定发生、数量、新工艺或 UUID。完整供应组件与其已包含部件是互斥采购表示。按实际发运状态保留滤芯组件及残油组成，不把同一残油另计一次外运。

- 选定流：送往处理的废机油滤芯
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 质量单位 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：分别计量各项实际废物，并确认上游机械使用服务是否已承担处理。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_waste`
- 数量范围：作者暂定筛选估计；须以审查证据替换
  - 范围角色：`qa_guardrail`
  - 下限：0
  - 上限：100
  - 单位：kg
  - 基准：每参考流
  - 基准类型：`reference_flow`
  - 证据类型：`reasoned_estimate`

###### 送往处理的含油吸附材料 (`oil_contaminated_absorbent_waste`)

仅在本具体交换确实发生于现有作业边界内时适用。记录准确物料或设备身份、供应/当前状态、原生数量及实际接收方或上游覆盖。不推定发生、数量、新工艺或 UUID。完整供应组件与其已包含部件是互斥采购表示。记录实际吸附载体、含油量、危险状态和接收方；载体与其所含油不得重复作为可加废物交换。

- 选定流：送往处理的含油吸附材料
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 质量单位 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：分别计量各项实际废物，并确认上游机械使用服务是否已承担处理。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_waste`
- 数量范围：作者暂定筛选估计；须以审查证据替换
  - 范围角色：`qa_guardrail`
  - 下限：0
  - 上限：100
  - 单位：kg
  - 基准：每参考流
  - 基准类型：`reference_flow`
  - 证据类型：`reasoned_estimate`

###### 送往处理的捕集含泥水 (`captured_sediment_water_waste`)

仅在本具体交换确实发生于现有作业边界内时适用。记录准确物料或设备身份、供应/当前状态、原生数量及实际接收方或上游覆盖。不推定发生、数量、新工艺或 UUID。完整供应组件与其已包含部件是互斥采购表示。采用保管权交接时的真实捕集混合物流，记录固体/水组成及处理去向；区别于直接环境排放和独立发运的干沉积物。

- 选定流：送往处理的捕集含泥水
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 质量单位 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：分别计量各项实际废物，并确认上游机械使用服务是否已承担处理。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_waste`
- 数量范围：作者暂定筛选估计；须以审查证据替换
  - 范围角色：`qa_guardrail`
  - 下限：0
  - 上限：100
  - 单位：kg
  - 基准：每参考流
  - 基准类型：`reference_flow`
  - 证据类型：`reasoned_estimate`


##### 基本流

###### 现场燃烧排入空气的化石二氧化碳（`fossil_co2_air`）

仅计开挖责任范围内耗油设备直接向室外空气排放的化石二氧化碳；使用混合燃料时须单列生物源二氧化碳。

- 选定流：二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 绑定模式：`fixed`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 质量单位 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：由可归属的实际化石燃料燃烧量和有文件依据的燃料碳/氧化方法或适用发动机排放模型计算；保留因子单位及来源。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_emissions`
- 来源：`epa-nonroad-exhaust`
- 数量范围：作者暂定筛选估计；须以审查证据替换
  - 范围角色：`qa_guardrail`
  - 下限：0
  - 上限：20
  - 单位：kg
  - 基准：每参考流
  - 基准类型：`reference_flow`
  - 证据类型：`reasoned_estimate`

###### 实际开挖发动机燃烧向空气排放的一氧化碳 (`engine_species_air_carbon_monoxide`)

仅记录本项独立识别的“实际开挖发动机燃烧向空气排放的一氧化碳”，保留实际状态和供应或接收交付点。只有实际记录证明本项独立对象发生时才启用；须识别准确SKU、配方或完整交付混合物、所有权、接收方或服务方以及每次原始及返工事件。未发生须有证据；身份、数量或条件缺失均为阻断完成的数据缺口。不得由其他子流推定本项发生或数量。完整供货及污染载体内含的部件和物料仅计一次。

- 选定流：实际开挖发动机燃烧向空气排放的一氧化碳
- 流属性/单位：Mass / kg
- 数量规则：仅在实际方法识别本项真实物种时，独立测量物种质量或采用适用的该物种发动机方法；保留活动量、因子单位来源及控制状态。不从NOx按NO2当量记录推定真实NO或NO2，不设物种比例，按原验收体积仅归一化一次。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_emissions`
- 来源：`epa-nonroad-exhaust`

数量范围证据需求：须有本项实际交换身份匹配的独立数量证据及不确定性。集合总量或旧集合区间不是子流数量、分配份额或自动有效的子流QA区间。

###### 实际开挖发动机燃烧向空气排放的一氧化氮 (`engine_species_air_nitrogen_monoxide`)

仅记录本项独立识别的“实际开挖发动机燃烧向空气排放的一氧化氮”，保留实际状态和供应或接收交付点。只有实际记录证明本项独立对象发生时才启用；须识别准确SKU、配方或完整交付混合物、所有权、接收方或服务方以及每次原始及返工事件。未发生须有证据；身份、数量或条件缺失均为阻断完成的数据缺口。不得由其他子流推定本项发生或数量。完整供货及污染载体内含的部件和物料仅计一次。

- 选定流：实际开挖发动机燃烧向空气排放的一氧化氮
- 流属性/单位：Mass / kg
- 数量规则：仅在实际方法识别本项真实物种时，独立测量物种质量或采用适用的该物种发动机方法；保留活动量、因子单位来源及控制状态。不从NOx按NO2当量记录推定真实NO或NO2，不设物种比例，按原验收体积仅归一化一次。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_emissions`
- 来源：`epa-nonroad-exhaust`

数量范围证据需求：须有本项实际交换身份匹配的独立数量证据及不确定性。集合总量或旧集合区间不是子流数量、分配份额或自动有效的子流QA区间。

###### 实际开挖发动机燃烧向空气排放的二氧化氮 (`engine_species_air_nitrogen_dioxide`)

仅记录本项独立识别的“实际开挖发动机燃烧向空气排放的二氧化氮”，保留实际状态和供应或接收交付点。只有实际记录证明本项独立对象发生时才启用；须识别准确SKU、配方或完整交付混合物、所有权、接收方或服务方以及每次原始及返工事件。未发生须有证据；身份、数量或条件缺失均为阻断完成的数据缺口。不得由其他子流推定本项发生或数量。完整供货及污染载体内含的部件和物料仅计一次。

- 选定流：实际开挖发动机燃烧向空气排放的二氧化氮
- 流属性/单位：Mass / kg
- 数量规则：仅在实际方法识别本项真实物种时，独立测量物种质量或采用适用的该物种发动机方法；保留活动量、因子单位来源及控制状态。不从NOx按NO2当量记录推定真实NO或NO2，不设物种比例，按原验收体积仅归一化一次。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_emissions`
- 来源：`epa-nonroad-exhaust`

数量范围证据需求：须有本项实际交换身份匹配的独立数量证据及不确定性。集合总量或旧集合区间不是子流数量、分配份额或自动有效的子流QA区间。

###### 实际开挖发动机燃烧向空气排放的二氧化硫 (`engine_species_air_sulfur_dioxide`)

仅记录本项独立识别的“实际开挖发动机燃烧向空气排放的二氧化硫”，保留实际状态和供应或接收交付点。只有实际记录证明本项独立对象发生时才启用；须识别准确SKU、配方或完整交付混合物、所有权、接收方或服务方以及每次原始及返工事件。未发生须有证据；身份、数量或条件缺失均为阻断完成的数据缺口。不得由其他子流推定本项发生或数量。完整供货及污染载体内含的部件和物料仅计一次。

- 选定流：实际开挖发动机燃烧向空气排放的二氧化硫
- 流属性/单位：Mass / kg
- 数量规则：仅在实际方法识别本项真实物种时，独立测量物种质量或采用适用的该物种发动机方法；保留活动量、因子单位来源及控制状态。不从NOx按NO2当量记录推定真实NO或NO2，不设物种比例，按原验收体积仅归一化一次。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_emissions`
- 来源：`epa-nonroad-exhaust`

数量范围证据需求：须有本项实际交换身份匹配的独立数量证据及不确定性。集合总量或旧集合区间不是子流数量、分配份额或自动有效的子流QA区间。

###### 排入空气的粒径不大于2.5微米土尘（`soil_dust_pm25_air`）

仅计挖掘、倒运及申报场内行驶过程中向室外空气释放的空气动力学粒径不大于2.5微米矿物土尘，排除发动机尾气和交接后的活动。

- 选定流：颗粒物 (PM2.5) `08a91e70-3ddc-11dd-9293-0050c2490048`
- 绑定模式：`fixed`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 质量单位 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：使用实测排放或适用分作业扬尘模型，采集实际含水率、粉土含量、作业量、风及控制记录；不得在无粒径比例依据时将TSP转为PM2.5。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_emissions`
- 来源：`epa-ap42-construction-dust`
- 数量范围：作者暂定筛选估计；须以审查证据替换
  - 范围角色：`qa_guardrail`
  - 下限：0
  - 上限：0.1
  - 单位：kg
  - 基准：每参考流
  - 基准类型：`reference_flow`
  - 证据类型：`reasoned_estimate`

###### 排入空气的粒径大于2.5且不大于10微米土尘（`soil_dust_coarse_air`）

仅计向室外空气排放的粗粒矿物扬尘，与细粒组分互斥。方法报告包含细粒的PM10时，须有配对且有依据的细粒估计才能相减；否则保留报告基准并避免重复计数。

- 选定流：颗粒物 (PM2.5 - PM10) `08a91e70-3ddc-11dd-9501-0050c2490048`
- 绑定模式：`fixed`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 质量单位 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：按与细土尘相同的活动边界及控制假设采集或模拟实际粗粒组分。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_emissions`
- 来源：`epa-ap42-construction-dust`
- 数量范围：作者暂定筛选估计；须以审查证据替换
  - 范围角色：`qa_guardrail`
  - 下限：0
  - 上限：0.5
  - 单位：kg
  - 基准：每参考流
  - 基准类型：`reference_flow`
  - 证据类型：`reasoned_estimate`

暂定范围是宽泛作者筛选辅助，不是实测值，也不是允许默认填零。条件性行按实际记录判定发生与否，未知不是零。超过暂定范围须调查及审查证据，不得删去真实结果。总括卡范围逐项用于具体交换，不是通用可加总量。

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivide` | excavate | 优先按工作包与实测活动细分；无法分表的共享燃料、水或机械期间，按有记录的物理台时/负荷或交付水量分配事件，列出全部使用方并保证份额和为一；合同金额不是默认物理驱动。 |  |
| `allocation_mobilization` | plant_mobilization; `plant_use_excavator`; `plant_use_loader`; `plant_use_onsite_haul_plant` | 按有记录服务期间台时，将各机械行程及共享支持期间仅一次分配至实际使用节点及任务；供应商机械数据集含燃料、运输或维护时，关联前须与单独卡核对。 |  |
| `allocation_rework` | excavate | 几何不合格纠正、重复搬运及怠速负荷保留在验收工作批；不得将不合格作业遍数另计为验收服务。单独授权设计变更须记录其新验收边界。 |  |
| `allocation_soil` | reusable_soil_handover; waste_soil_handover | 本较窄服务包的采购目的是开挖服务；移出土壤是伴随实物交接，不自动成为获抵扣共产品。开挖负荷保留于服务，不给予替代填料/处置抵扣。有证据证明独立销售土壤共产品时，使用前须专门审查并披露替代分配，不得默默转移负荷。 |  |

## 8. 前景数据采集、计算与质量规则


维护及径流采集必须完整：条件卡未列名但实际发生的废物仍须按材料、状态、危险性和去向识别，独立计量，并在数据集完成前形成具体交换。机具服务已包含的处理只能有一个负担归属方。既有暂定筛选仍是可替换的逐交换作者指引，不是实测产率或废物总量限值。

### 数据采集协议

| protocol_id | process_id | 流角色（`flow_role`） | 记录类型（`record_type`） | 原始字段（`raw_fields`） | 采集方法（`collection_method`） | 单位（`unit`） | 频率（`frequency`） | 时间覆盖（`temporal_coverage`） | 场址范围（`site_scope`） | 汇总规则（`aggregation_rule`） | 质量证据（`quality_evidence`） |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_acceptance` | `excavate` | 验收服务 | 测量与验收文件 | work-package id; lot id; original and final survey; design limits; accepted volume; exclusions; date; approver; 工作包编号；批次编号；原始及完工测量；设计边界；验收体积；排除量；日期；批准人 | 测量开挖前后表面或采用可追溯断面；核对批准几何与签署验收，排除未授权超挖及重复作业。 | m3 | 每验收批 | 完整批次，包括准备、怠速、纠正及结算 | 申报场址及工作包；披露其他使用方 | 每参考流 | 测量控制；设计修订；签署验收 |
| `cp_energy` | `excavate` | 燃料与电力 | 燃料与电表台账 | asset; fuel type; meter readings; issues; returns; stocks; operating/idle/rework time; all consuming packages; period; burned_fuel_mass_kg; fuel_opening_kg; fuel_issued_kg; fuel_returned_kg; fuel_closing_kg; noncombusted_waste_kg; uncontained_release_kg; other_evidenced_fuel_exit_kg; recovered_fuel_in_closing_kg; fuel_balance_gap_kg; burn_fate_method; burn_fate_evidence; burn_uncertainty; 资产；燃料类型；表读数；发料；退料；库存；运行/怠速/返工时间；全部消耗工作包；期间 | 采用校准仪表和交付库存核对；按实测活动分割共享设备期间，并明确发电机归属。  区分实际供给/领用燃料与实际燃烧量。独立计量燃烧活动，或按 fuel_fate_separation 核对同资产/班次的完整库存及互斥非燃烧去向，保留适用方法、观察和不确定性。丢弃、退回、保留或未燃释放的燃料不是尾气活动；未知损失保留为燃料平衡缺口，不假定为燃烧。 | kg; kWh | 每班及每次交付 | 完整批次，包括准备、怠速、纠正及结算 | 申报场址及工作包；披露其他使用方 | 每参考流 | 仪表校准；发票；资产时间核对 |
| `cp_plant` | `excavate` | 机械使用 | 资产台时登记 | asset; model; shift; productive/idle/rework hours; all consumers; shared maintenance coverage; upstream dataset; 资产；型号；班次；生产/怠速/返工台时；全部使用方；共享维护覆盖；上游数据集; concrete_exchange_id; physical_event_id; actual_identity_id; actual_state; receiver_or_provider_gate; native_quantity; native_unit; unique_property; measurement_method_id; uncertainty | 按工作包及期间记录每台机械，核对可用台时及供应商覆盖；识别其他场址使用方。 按身份、实物事件、状态、交付点和期间独立记录每项实际子流或后续细化交换。即使尚未确定具体交换身份，原全部采集和闭合义务仍保留。不得分摊集合总量或把数值区间复制给子流，不得重复计算载体及其内含物，也不得将发生情况、数量或原生参考缺失填成零。每项具体交换只能有一种属性和一个单位；CP其他读数仅作辅助且须有证据换算。必要细化缺失会阻断数据集完成。 | h | 每班 | 完整批次，包括准备、怠速、纠正及结算 | 申报场址及工作包；披露其他使用方 | 每参考流 | 资产日志；供应商边界；分配台账 |
| `cp_mobilization` | `excavate` | 机械运输 | 调度与质量记录 | journey id; plant mass; distance; loaded/empty legs; all users; attribution period; supplier boundary; 行程编号；机械质量；距离；重载/空载段；全部使用方；归属期间；供应商边界 | 核对调度、路线及质量记录；按服务期间有记录的机械台时将同一行程分配给实际使用方。 | t*km | 每行程 | 完整批次，包括准备、怠速、纠正及结算 | 申报场址及工作包；披露其他使用方 | 每参考流 | 调度证据；路线轨迹；使用方台账 |
| `cp_water` | `excavate` | 抑尘 | 供水与施用日志 | source; meter/tank volume; returns; area; shift; application; runoff capture; other consumers; 水源；计量/罐体积；退回；区域；班次；施用；径流收集；其他使用方 | 计量实际外供水量，仅归属开挖相关施用；记录天气及水进入土壤、空气或收集废物的去向。 | m3 | 每交付及班次 | 完整批次，包括准备、怠速、纠正及结算 | 申报场址及工作包；披露其他使用方 | 每参考流 | 仪表检查；交付单；施用日志 |
| `cp_soil` | `excavate` | 土壤交接 | 土方流转台账 | lot; transfer id; surveyed bank volume; loose volume; wet mass; moisture; density; reuse/waste status; recipient; destination; opening/closing stock; 批次；转移编号；测量原状体积；松散体积；湿质量；含水率；密度；再用/废物状态；接收方；去向；期初期末库存 | 称量交接，体积换算时记录含水率及密度；核对全部去向及留存库存；每次转移只分类一次。 | kg; m3 | 每转移及批次结算 | 完整批次，包括准备、怠速、纠正及结算 | 申报场址及工作包；披露其他使用方 | 每参考流 | 地磅校准；接收凭证；密度/含水率试验 |
| `cp_waste` | `excavate` | 维护废物及收集径流 | 废物登记 | event id; asset; actual substance; composition; mass; moisture; producing shift; custodian; treatment; upstream ownership; 事件编号；资产；实际物质；组成；质量；含水率；产生班次；责任方；处理；上游归属 | 称量或使用可追溯废物转移记录；拆分每种不同废物并排除已归属上游服务的数量。 | kg | 每事件 | 完整批次，包括准备、怠速、纠正及结算 | 申报场址及工作包；披露其他使用方 | 每参考流 | 废物单据；组成；归属核对 |
| `cp_emissions` | `excavate` | 直接排放 | 活动与因子文件 | asset/activity; fuel; load; hours; engine class; pollutant/speciation; factor value/unit/source; receiving air; soil moisture/silt; meteorology; controls; uncertainty; burned_fuel_mass_kg; fuel_opening_kg; fuel_issued_kg; fuel_returned_kg; fuel_closing_kg; noncombusted_waste_kg; uncontained_release_kg; other_evidenced_fuel_exit_kg; recovered_fuel_in_closing_kg; fuel_balance_gap_kg; burn_fate_method; burn_fate_evidence; burn_uncertainty; 资产/活动；燃料；负荷；时间；发动机类别；污染物/物种；因子数值/单位/来源；受纳空气；土壤含水率/粉土；气象；控制；不确定性; concrete_exchange_id; physical_event_id; actual_identity_id; actual_state; receiver_or_provider_gate; native_quantity; native_unit; unique_property; measurement_method_id | 将测量或适用模型关联至相同班次及工作包；保留物种与粒径基准，记录全部单位及适用限制。  区分实际供给/领用燃料与实际燃烧量。独立计量燃烧活动，或按 fuel_fate_separation 核对同资产/班次的完整库存及互斥非燃烧去向，保留适用方法、观察和不确定性。丢弃、退回、保留或未燃释放的燃料不是尾气活动；未知损失保留为燃料平衡缺口，不假定为燃烧。 按身份、实物事件、状态、交付点和期间独立记录每项实际子流或后续细化交换。即使尚未确定具体交换身份，原全部采集和闭合义务仍保留。不得分摊集合总量或把数值区间复制给子流，不得重复计算载体及其内含物，也不得将发生情况、数量或原生参考缺失填成零。每项具体交换只能有一种属性和一个单位；CP其他读数仅作辅助且须有证据换算。必要细化缺失会阻断数据集完成。 | kg; method-specific activity units | 每班及模型条件变化时 | 完整批次，包括准备、怠速、纠正及结算 | 申报场址及工作包；披露其他使用方 | 每参考流 | 方法适用性；因子来源；测量质量；不确定性 |

### 计算规则

| rule_id | 适用对象 | 公式或规则（`formula_or_rule`） | 输入（`inputs`） | 输出（`output`） | source_ids |
| --- | --- | --- | --- | --- | --- |
| `normalize_lot` | all inventory rows | 将各归属批次总量除以相同验收原状体积，以每参考流表示；保留原始单位及验收体积记录。 | attributable lot amount; accepted volume; cp_acceptance | exchange per reference flow |  |
| `soil_reconcile` | reusable_soil_handover; waste_soil_handover | 用全部交接、留存库存变化及损失的干质量当量核对移出干土；记录密度/含水率及不确定性，不强制松散体积等于原状体积。 | cp_soil; cp_emissions | physical movement reconciliation |  |
| `transport_activity` | plant_mobilization | 载货运输量按机械吨数乘路线公里计算；保留关联供应商服务的空驶处理及有记录归属份额。 | cp_mobilization | attributable transport service |  |
| `fuel_fate_separation` | excavation_diesel; fossil_co2_air; `engine_species_air_carbon_monoxide`; `engine_species_air_nitrogen_monoxide`; `engine_species_air_nitrogen_dioxide`; `engine_species_air_sulfur_dioxide` | 供油分子与 burned_fuel_mass_kg 分开。同资产/班次且相同原生 kg 基准下，燃料领用 = fuel_opening_kg + fuel_issued_kg - fuel_returned_kg - fuel_closing_kg，并将其核对为有独立证据的 burned_fuel_mass_kg + noncombusted_waste_kg + uncontained_release_kg + other_evidenced_fuel_exit_kg + 带符号 fuel_balance_gap_kg。已计入期末库存的回收燃料不再作为另一出口或二次扣减。仅在非燃烧去向完整、互斥且有独立证据及不确定性记录时允许库存推导燃烧量；未解释平衡缺口不得归为燃烧。实际未退回废弃/损失燃料的上游负担仍留在供应分子。化石 CO2 和燃料基尾气因子仅使用相容燃烧活动及实际化石份额，不采用净发油总量；完整物种因子与组分/氧化路线为替代方法，不重复相乘。实际未燃废物/释放在最终完成前须按真实接收路线/介质建立单独识别的交换，不得静默遗漏已发生去向或虚构 UUID。每项实际分子均仅按验收作业体积归一化一次。 | cp_energy; cp_emissions; fuel_opening_kg; fuel_issued_kg; fuel_returned_kg; fuel_closing_kg; burned_fuel_mass_kg; noncombusted_waste_kg; uncontained_release_kg; other_evidenced_fuel_exit_kg; fuel_balance_gap_kg | 已核对的供应、燃烧与非燃烧去向分子 |  |
| `direct_emissions` | fossil_co2_air; `engine_species_air_carbon_monoxide`; `engine_species_air_nitrogen_monoxide`; `engine_species_air_nitrogen_dioxide`; `engine_species_air_sulfur_dioxide`; soil_dust_pm25_air; soil_dust_coarse_air | 对归属活动采用有文件依据且适用的测量/模型方法；在数据集证据中保留完整方程、因子单位、物种/粒径基准及控制假设，不规定通用因子。 | cp_emissions; cp_energy; cp_soil | direct emission by substance and receiving medium | `epa-ap42-construction-dust`; `epa-nonroad-exhaust` |

### 数据质量要求

| requirement_id | 适用对象 | 要求（`requirement`） | 证据（`evidence`） |
| --- | --- | --- | --- |
| `quality_lot` | excavate | 所有记录采用一致批次/场址/期间及验收边界，包括不合格作业及未发生证明。 | 签署验收及班次/事件台账 |
| `quality_identity` | all inventory rows | 最终过程发布前将各实际交换解析为已核实具体流、属性及单位；记录未决身份及总括/物种缺口。 | 身份核实及单位支持 |
| `quality_ranges` | all inventory rows | 以现场记录及审查证据替换暂定筛选估计；披露估计方法、缺失及不确定性。 | 记录完整性及独立审查参考证据 |
| `quality_upstream` | excavate | 披露各供应商数据集边界及排除相邻工作包责任方，避免全项目负荷缺口。 | 供应商声明及母项目边界台账 |
| `refine_plant_use` | `plant_use_excavator`; `plant_use_loader`; `plant_use_onsite_haul_plant` | 本范围属于强制前景数据采集与闭合要求，不是泛化流交换。须保留原对象、条件、实际发生、物态、供应或接收交付点、库存退回、废物释放及资源负担义务。每项实际交换须独立确定准确身份、真实服务参考、唯一属性和单位、独立数量及适用方法、不确定性和保管去向；CP辅助单位不产生额外交换视图。未知不等于零，不得虚构材料、物种或服务方名册，不得分摊集合总量。筛选证据须匹配具体交换，旧集合区间不得复制或分给子流。 原适用范围及证据要求：记录挖掘机、装载机及场内运输机械的台时；关联的上游机械使用数据集须披露机械制造及维护覆盖，并排除单独采集的运行能源。 未由已知条件子卡完整规定的实际身份、真实原生参考和数量须继续强制细化；未完成时阻断数据集完成。此要求本身不创建交换，不以未绑定占位卡替代细化。 | `cp_plant`; 实际独立记录及身份／单位证据 |
| `refine_engine_species_air` | `engine_species_air_carbon_monoxide`; `engine_species_air_nitrogen_monoxide`; `engine_species_air_nitrogen_dioxide`; `engine_species_air_sulfur_dioxide` | 本范围属于强制前景数据采集与闭合要求，不是泛化流交换。须保留原对象、条件、实际发生、物态、供应或接收交付点、库存退回、废物释放及资源负担义务。每项实际交换须独立确定准确身份、真实服务参考、唯一属性和单位、独立数量及适用方法、不确定性和保管去向；CP辅助单位不产生额外交换视图。未知不等于零，不得虚构材料、物种或服务方名册，不得分摊集合总量。筛选证据须匹配具体交换，旧集合区间不得复制或分给子流。 原适用范围及证据要求：条件性总括卡：将报告的一氧化碳、一氧化氮、二氧化氮或二氧化硫等物质分别解析为向室外空气的排放。报告为NOx按NO2当量时保留其基准，不虚构NO/NO2拆分；缺少物种构成属于数据缺口。尾气颗粒物须保留实际粒径组分，并与土尘区分。 未由已知条件子卡完整规定的实际身份、真实原生参考和数量须继续强制细化；未完成时阻断数据集完成。此要求本身不创建交换，不以未绑定占位卡替代细化。 | `cp_emissions`; 实际独立记录及身份／单位证据 |
| `atomic_exchange_identity_unit` | all inventory rows | 每项具体流卡只识别一种实际独立供给的产品SKU或配方、完整组件、完整单一职能或真实完整有界服务方服务、实际废物整体及状态接收方，或物质粒径及接收介质，且只有一种属性和一个单位。实际不同身份须有独立数量和记录，不得合为集合交换。完整产品或载体含其内含物一次。同一未改变SKU状态的供给与可用退回，以及实物匹配的内部发送接收，使用同一选定属性单位；kg和件数、MJ和kWh等辅助读数不加和，不产生重复交换。身份、发生、数量或原生参考缺失是缺口，不是零。 任何合并分母均须保留原验收配置分层、状态交付点及因果归属；不得把不等价线路、路线、产品或工单按等价数量盲目相除。 | 实际身份、单位、保管及独立数量证据 |
| `asset_final_normalization_once` | all inventory rows | 资产当量公式已除以N、D或A时，其结果就是最终每参考流数量。全寿命份额及验收产出归一化与通用归一化规则是同一次操作，不再除一次该分母。完整生命周期上游负担只应用一次。实际完整服务方事件仍计真实事件量，不套用自有资产份额。 | 实际身份、单位、保管及独立数量证据 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validate_reference` | accepted_excavation_service | 要求与参考关联的唯一验收服务输出、1 m3原状基准及全部限定信息；土质量或松散体积均不能替代服务。 |  |
| `validate_transfers` | excavate | 每个土转移编号及去向仅核对一次，保留库存变化及损失，并检查含水/状态换算；同一实物土的再用和废物去向互斥。 |  |
| `validate_mode_rework` | excavate | 检查全部投入、输出、切换、清洗及维护的批次/班次关联；保留返工燃料/台时，同时排除重复验收体积及未授权超挖。 |  |
| `validate_shared` | excavate | 检查全部使用方及期间、物理归属份额及事件唯一归属；核对机械服务、运输、燃料及维护边界，防止重复计数。 |  |
| `validate_emissions` | excavate | 要求污染物种/报告基准、受纳空气、适用活动/模型及互不重叠粒径组分；缺失数据不得以零或通用固定身份替代。 | `epa-ap42-construction-dust`; `epa-nonroad-exhaust` |
| `validate_completion` | all inventory rows | 要求节点专属采集关联、单位、双语规则/卡对齐及当前投影；超范围须调查，未决身份及不支持换算须明确不完整覆盖。 |  |
| `atomization_plant_use_complete` | `plant_use_excavator`; `plant_use_loader`; `plant_use_onsite_haul_plant` | 逐项要求适用实际交换有独立数量、准确身份状态交付点以及唯一属性和单位，保留原完整协议、归一化、库存退回、废物释放及共享资源归属。必要子流、原生参考或数量未知时不得完成数据集；有证据的未发生与缺失区分。不得分摊集合总量、复制集合数值范围，或重复计算载体内含物及供货包已含部件。 须以实际记录完成`refine_plant_use`；必要细化尚未解决时阻断数据集。 |  |
| `atomization_engine_species_air_complete` | `engine_species_air_carbon_monoxide`; `engine_species_air_nitrogen_monoxide`; `engine_species_air_nitrogen_dioxide`; `engine_species_air_sulfur_dioxide` | 逐项要求适用实际交换有独立数量、准确身份状态交付点以及唯一属性和单位，保留原完整协议、归一化、库存退回、废物释放及共享资源归属。必要子流、原生参考或数量未知时不得完成数据集；有证据的未发生与缺失区分。不得分摊集合总量、复制集合数值范围，或重复计算载体内含物及供货包已含部件。 须以实际记录完成`refine_engine_species_air`；必要细化尚未解决时阻断数据集。 | `epa-nonroad-exhaust` |
| `validate_atomic_exchange_unit_and_normalization` | all inventory rows | 每项具体流卡只识别一种实际独立供给的产品SKU或配方、完整组件、完整单一职能或真实完整有界服务方服务、实际废物整体及状态接收方，或物质粒径及接收介质，且只有一种属性和一个单位。实际不同身份须有独立数量和记录，不得合为集合交换。完整产品或载体含其内含物一次。同一未改变SKU状态的供给与可用退回，以及实物匹配的内部发送接收，使用同一选定属性单位；kg和件数、MJ和kWh等辅助读数不加和，不产生重复交换。身份、发生、数量或原生参考缺失是缺口，不是零。 资产当量公式已除以N、D或A时，其结果就是最终每参考流数量。全寿命份额及验收产出归一化与通用归一化规则是同一次操作，不再除一次该分母。完整生命周期上游负担只应用一次。实际完整服务方事件仍计真实事件量，不套用自有资产份额。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 前景承包方开挖服务数据包 |
| downstream_use | 施工process及lifecyclemodel投影，并关联母工作包 |
| allowed_use | 几何、场址及交接相容的申报未污染土机械开挖 |
| excluded_use | 通用全部土方/建筑数据集；土壤制造；修复/爆破；无依据寿命或避免处置声称 |
| required_metadata | 必需参考限定信息；工作批；测量/验收；全部责任工作包；全部上游边界；路线及土壤去向 |
| required_quality_disclosure | 实测/估计份额；暂定范围；未决UUID/支持项；排放物种；缺失土记录；不确定性；已执行/跳过校验 |
| update_trigger | 土类/污染、设备、电力/燃料路线、交接、范围、测量方法、证据或上游覆盖变化 |

## 11. 数据源

| 来源（`source_id`） | 类型（`type`） | 参考（`reference`） | 用途（`used_for`） |
| --- | --- | --- | --- |
| `fhwa-fp24-original-position` | official_guidance | FHWA FP-24 (2024), sections 109 and 204.15–204.16; https://highways.dot.gov/sites/fhwa.dot.gov/files/FP-24.pdf | 原状计量及验收接口；类比适用于本较窄服务，不采纳全部道路工作项 |
| `fhwa-fp24-dust-water` | official_guidance | FHWA FP-24 (2024), section 158; https://highways.dot.gov/sites/fhwa.dot.gov/files/FP-24.pdf | 条件性抑尘水责任及交付体积计量 |
| `epa-ap42-construction-dust` | official_guidance | US EPA AP-42 13.2.3 Heavy Construction Operations; https://www.epa.gov/sites/default/files/2020-10/documents/13.2.3_heavy_construction_operations.pdf | 分作业扬尘驱动及粒径报告限制；不采纳通用因子 |
| `epa-nonroad-exhaust` | official_guidance | US EPA Nonroad Engines and Air Pollution, EPA420-F-94-003 (1994); https://nepis.epa.gov/Exe/ZyPURL.cgi?Dockey=P1009Z11.TXT | 非道路燃烧排放类别，不提供数量因子或物种拆分 |
| `fhwa-earthwork-representation-2025` | official_guidance | FHWA CFLHD Earthwork Representation: Grading Summaries and Mass Haul Diagrams (cover April 2025), pages 2–7; https://highways.fhwa.dot.gov/federal-lands/design/tools/cfl/earthwork-representation-guide.pdf | 土方状态、土工依据、流转与测量接口；不采用固定膨胀数值 |
