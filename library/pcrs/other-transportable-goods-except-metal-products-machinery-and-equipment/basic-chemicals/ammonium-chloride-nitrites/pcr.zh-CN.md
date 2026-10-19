---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.basic-chemicals.ammonium-chloride-nitrites
language: zh-CN
sync_with: pcr.en-US.md
status: candidate
content_maturity: authored_methodology
---

# 水相直接中和路线的不加添加剂结晶氯化铵

## 1. 范围与适用性

本PCR适用于外购无水液氨（含厂内汽化）与外购盐酸水溶液在回用NH4Cl水性母液中反应，经浓缩、冷却结晶、过滤、间接干燥、筛分及实际厂门散装交付或防潮袋灌装，生产不加添加剂的结晶NH4Cl。采用一个一体化前景单元，保留阶段独立计量及完整内部循环账。历史路线见`unido-nh4cl-study` VI.A.1.d印刷P17；`basf-nh4cl-grades`佐证市场存在未加处理剂的晶体。两者均不确立通用等级、收率、配方、能耗强度或排放数量。

排除所有亚硝酸盐、其他铵盐、氨水制造、干混肥、联碱或侯氏共生产、硫酸铵与氯化钠复分解、甘氨酸或钨工艺废液回收、气相升华及有意加入结晶或防结块添加剂。用途标签本身不创造独立身份。CPC3.0 34653为混合类别，仅建议本子集作narrower映射。下述广义原生成品参考没有相反路线、形态或地区限制；实际使用明确为NH4Cl CAS12125-02-9，不是亚硝酸盐或化学混合物。

表示的配置采用外供蒸汽、仅用水洗涤尾气、间接风冷及水性废物厂外处理。实际燃烧、制冷、湿式冷却、化学清洗、添加剂、其他包装组件或直接水排放，须先依据证据增加原子清单才能完成数据集。缺项须有依据，空UUID及条件行不表示零。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.basic-chemicals.ammonium-chloride-nitrites |
| classification_refs | CPC 3.0 34653; narrower |
| covered_products | 不加添加剂的结晶NH4Cl，实际化验及残余水分 |
| excluded_products | 亚硝酸盐；其他铵盐；配方肥料；联碱、复分解、回收及升华路线；添加处理剂的晶体 |
| representative_product | 结晶氯化铵，NH4Cl，CAS12125-02-9 |
| production_route | 外购NH3及盐酸水溶液直接中和、浓缩、冷却结晶、过滤、间接干燥及交付准备 |
| market_state | 验收合格结晶固体，按供货状态，散装或实际防潮包装 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 提供作为化学原料的结晶氯化铵 |
| How much | 1 kg净验收供货产品，不含包装 |
| How well | 声明NH4Cl化验、水分、杂质、酸度、粒形粒径及实际验收规格，不以干活性物或养分基准替换 |
| How long or cycle | 完整声明期间的厂门交付，不设寿命或农艺等效性 |
| reference_flow_link | nh4cl_product |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 氯化铵，亚硝酸盐 `d0574e16-32aa-40cc-a59a-b9aaceab62e7` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | NH4Cl CAS12125-02-9; NH3与盐酸水溶液直接路线; 不加添加剂状态; 供货净质量; 化验及水分方法; 杂质与酸度; 晶体粒径; 散装或包装设计; 场址及期间; 验收及唯一批次号; 原料浓度; 公用工程及处理接口 |

实际数据包须声明每项限定信息。身份不证明供应方或背景数量兼容，也不提供数量默认值。

## 4. 计量与单位规则

| rule_id | applies_to | required_property | required_unit | rule |
| --- | --- | --- | --- | --- |
| reference_mass | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 采用供货状态验收晶体净质量，水分及NH4Cl化验保留为子账。唯一正Q须核对合格生产、库存、发运及退货，不用干NH4Cl或N质量替换Q。 |
| solution_mass | feed_hcl | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 整份外购溶液为采购交换，实测质量分数乘湿质量得到活性HCl，载水及杂质为子账，不重复采购。 |
| electricity_basis | electricity | Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | 保留原生CN 1–35千伏到用户的消费组合，以核实的3.6 MJ/kWh将千瓦时换为兆焦且只换一次。原生净热值名不表示燃料燃烧。 |
| steam_basis | steam_import | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 蒸汽质量不是交付热量。保留绝压或表压、温度、干度、进出质量、焓方法及供应方约定，核对净焓而不重复计蒸汽及供热负荷。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 外购无水液氨、盐酸水溶液及公用工程送达工厂，纳入汽化及完整后续准备 |
| starting_condition_role | foreground_collection_start |
| product_classification_scope | 仅CPC3.0 34653中直接路线不加添加剂结晶NH4Cl子集 |
| recursive_input_rule | 自有母液晶体及捕集粉尘循环保留守恒内部账，不重复采购。外购NH4Cl晶种或返工料须有溯源、继承负荷及新增原子行。 |
| upstream_dataset_requirement | 兼容的交付原料、去离子水、实际供电、蒸汽、包装、运输和厂外处理，核实各供应方参考基准 |
| disclosure | 场址、期间、SKU路线、原料状态浓度、库存在制品、循环、治理、公用工程、运输、基础设施、处理及截断 |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| boundary_complete | nh4cl_manufacture | 纳入接收汽化、反应、浓缩、冷却、过滤、干燥、筛分、除尘水洗、储存、包装和装车，保留阶段计量及失败、零产出和开停工况。内部转移两端数量相同。 | unido-nh4cl-study; jrc-cww-2016 |
| boundary_interfaces | all inventory rows | 追踪全部实际进出。水洗溶质内部回用留在循环账，外送排污冷凝液为整份湿废物，不同时列基本排放。完成前补齐实际处理排放及未表示交换。 | jrc-cww-2016 |
| boundary_upstream | nh4cl_manufacture | 不得预设原料水能源运输包装或基础设施无负荷。保留设备寿命证据、筛选和明确截断，在数据包逐项增加纳入的运输资产。 | jrc-ilcd-2010 |

## 6. 过程清单结构

### 过程图

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| nh4cl_manufacture | 一体化直接中和结晶NH4Cl制造 | required | 实际声明路线状态，无有意加入的处理剂 | foreground_manufacture | nh4cl_product |

### 过程：一体化NH4Cl制造（`nh4cl_manufacture`）

#### 输入

##### 产品流

###### 氨，无水，液体 (`feed_ammonia`)

计量接收及领用的无水液氨、汽化与残液；纳入上游供应及汽化公用工程。

- 选定流：氨，无水，液体 `6928be4f-282b-4448-8f2a-f8c746621303`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：原始单位换算后完整匹配期间实测数量仅除以唯一合格产量Q一次，保留失败及零产出工况和期初期末结转负荷。
- 数值来源模式：foreground_record
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：collected_record
- 采集协议：cp_materials
- 来源：`unido-nh4cl-study`; `jrc-cww-2016`

###### 盐酸 (`feed_hcl`)

计量整份外购盐酸水溶液；HCl及载水化验作为组成子账，不重复计为采购。

- 选定流：盐酸 `a118a682-1600-4855-b959-c78777b75ee8`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：原始单位换算后完整匹配期间实测数量仅除以唯一合格产量Q一次，保留失败及零产出工况和期初期末结转负荷。
- 数值来源模式：foreground_record
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：collected_record
- 采集协议：cp_materials
- 来源：`unido-nh4cl-study`; `jrc-cww-2016`

###### 去离子水 (`water_makeup`)

计量实际外供去离子补水、洗涤及仅用水洗涤尾气的水量；循环液不重复计为采购。

- 选定流：去离子水 `4f197bf0-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：原始单位换算后完整匹配期间实测数量仅除以唯一合格产量Q一次，保留失败及零产出工况和期初期末结转负荷。
- 数值来源模式：foreground_record
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：collected_record
- 采集协议：cp_water
- 来源：`unido-nh4cl-study`; `jrc-cww-2016`

###### 交流电 (`electricity`)

仅限中国CN、1–35千伏、电网平均消费组合到用户。采用全单元及阶段实测电量；其他地区、电压或合同供电须使用兼容身份和供应方。

- 选定流：交流电 `3d76981f-964a-4865-b588-0e067a2a1163`
- 流属性/单位：Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则：原始单位换算后完整匹配期间实测数量仅除以唯一合格产量Q一次，保留失败及零产出工况和期初期末结转负荷。
- 数值来源模式：foreground_record
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：collected_record
- 采集协议：cp_energy
- 来源：`unido-nh4cl-study`; `jrc-cww-2016`

###### 蒸汽 (`steam_import`)

计量供汽质量、压力、温度、干度及汽化器、加热器、干燥器负荷；原生记录未限定压力或地区。另行核实供应方焓及参考基准，不默认11.0或0.45 MPaG。

- 选定流：蒸汽 `7734613a-3ef2-47ce-aff0-9a1bd67906c6`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：原始单位换算后完整匹配期间实测数量仅除以唯一合格产量Q一次，保留失败及零产出工况和期初期末结转负荷。
- 数值来源模式：foreground_record
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：collected_record
- 采集协议：cp_energy
- 来源：`unido-nh4cl-study`; `jrc-cww-2016`

###### 聚丙烯化工产品编织袋 (`pp_sack`)

称量空聚丙烯编织袋并记录实际领用、退回及废弃数量；实际封口组件须另列原子行。不采用种子包装消耗默认值。

- 选定流：聚丙烯化工产品编织袋
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：原始单位换算后完整匹配期间实测数量仅除以唯一合格产量Q一次，保留失败及零产出工况和期初期末结转负荷。
- 数值来源模式：foreground_record
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：collected_record
- 采集协议：cp_pack
- 来源：`unido-nh4cl-study`; `jrc-cww-2016`

###### 聚乙烯薄膜 (`pe_liner`)

仅计量聚乙烯内衬薄膜，包括领用、随货及报废部分。名称、CAS及说明支持PE薄膜；原生CPC29220不一致，须澄清来源。

- 选定流：聚乙烯薄膜 `e64eb06c-6dc9-45f1-b003-3dc6c44b27e2`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：原始单位换算后完整匹配期间实测数量仅除以唯一合格产量Q一次，保留失败及零产出工况和期初期末结转负荷。
- 数值来源模式：foreground_record
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：collected_record
- 采集协议：cp_pack
- 来源：`unido-nh4cl-study`; `jrc-cww-2016`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 氯化铵，亚硝酸盐 (`nh4cl_product`)

1 千克验收合格、不加添加剂的结晶NH4Cl，按供货净质量含实测残余水分和杂质，不含包装。此处将原生广义成品类别限定为该NH4Cl子集，绝非亚硝酸盐或混合物。

- 选定流：氯化铵，亚硝酸盐 `d0574e16-32aa-40cc-a59a-b9aaceab62e7`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：1 千克
- 数值来源模式：foreground_record
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：collected_record
- 采集协议：cp_product
- 来源：`unido-nh4cl-study`; `jrc-cww-2016`

###### 聚丙烯化工产品编织袋 (`delivered_pp`)

在实物账保留随货离厂的聚丙烯袋；包装不作为分配共功能或第二化学参考产出。

- 选定流：聚丙烯化工产品编织袋
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：原始单位换算后完整匹配期间实测数量仅除以唯一合格产量Q一次，保留失败及零产出工况和期初期末结转负荷。
- 数值来源模式：foreground_record
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：collected_record
- 采集协议：cp_pack
- 来源：`unido-nh4cl-study`; `jrc-cww-2016`

###### 聚乙烯薄膜 (`delivered_pe`)

随货聚乙烯内衬质量与NH4Cl净质量分列；这是实物包装，不是独立获得抵扣的共产品。

- 选定流：聚乙烯薄膜 `e64eb06c-6dc9-45f1-b003-3dc6c44b27e2`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：原始单位换算后完整匹配期间实测数量仅除以唯一合格产量Q一次，保留失败及零产出工况和期初期末结转负荷。
- 数值来源模式：foreground_record
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：collected_record
- 采集协议：cp_pack
- 来源：`unido-nh4cl-study`; `jrc-cww-2016`

###### 返回的清洁加热蒸汽凝结水 (`condensate_return`)

仅计量外送的清洁加热蒸汽凝结水，记录接收公用工程及对应热量、质量基准。内部回用凝结水不作为外部产出。

- 选定流：返回的清洁加热蒸汽凝结水
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：原始单位换算后完整匹配期间实测数量仅除以唯一合格产量Q一次，保留失败及零产出工况和期初期末结转负荷。
- 数值来源模式：foreground_record
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：collected_record
- 采集协议：cp_energy
- 来源：`unido-nh4cl-study`; `jrc-cww-2016`

##### 废物流

###### 氯化铵水性母液排污 (`mother_purge`)

称量交外部处理的整份NH4Cl水性母液排污，记录溶盐、酸度、氨、杂质及接收方；不以纯盐身份代替湿混合物。

- 选定流：氯化铵水性母液排污
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：原始单位换算后完整匹配期间实测数量仅除以唯一合格产量Q一次，保留失败及零产出工况和期初期末结转负荷。
- 数值来源模式：foreground_record
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：collected_record
- 采集协议：cp_waste
- 来源：`unido-nh4cl-study`; `jrc-cww-2016`

###### 氯化铵水性清洗废水 (`cleaning_effluent`)

计量收集的水性NH4Cl清洗废水及其固体，不预设直接排入受纳水体。

- 选定流：氯化铵水性清洗废水
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：原始单位换算后完整匹配期间实测数量仅除以唯一合格产量Q一次，保留失败及零产出工况和期初期末结转负荷。
- 数值来源模式：foreground_record
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：collected_record
- 采集协议：cp_waste
- 来源：`unido-nh4cl-study`; `jrc-cww-2016`

###### 受氯化铵污染的过程冷凝液 (`process_condensate`)

浓缩产生的受污染冷凝液与清洁加热蒸汽回水分列；分析夹带的NH4Cl、NH3及HCl，区分内部回用与外部处理。

- 选定流：受氯化铵污染的过程冷凝液
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：原始单位换算后完整匹配期间实测数量仅除以唯一合格产量Q一次，保留失败及零产出工况和期初期末结转负荷。
- 数值来源模式：foreground_record
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：collected_record
- 采集协议：cp_waste
- 来源：`unido-nh4cl-study`; `jrc-cww-2016`

###### 不合格氯化铵晶体 (`rejected_crystals`)

称量弃置的不合格NH4Cl晶体及水分；内部重溶属于返工，不是废物或合格产量。不得将限定化学处理或联碱副产的废物身份用于未经处理的直接路线废晶。

- 选定流：不合格氯化铵晶体
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：原始单位换算后完整匹配期间实测数量仅除以唯一合格产量Q一次，保留失败及零产出工况和期初期末结转负荷。
- 数值来源模式：foreground_record
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：collected_record
- 采集协议：cp_waste
- 来源：`unido-nh4cl-study`; `jrc-cww-2016`

###### 捕集的氯化铵富集粉尘 (`collected_dust`)

计量实际送出厂外的捕集NH4Cl富集粉尘；内部回用仅留循环账，绝不计为空气排放。

- 选定流：捕集的氯化铵富集粉尘
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：原始单位换算后完整匹配期间实测数量仅除以唯一合格产量Q一次，保留失败及零产出工况和期初期末结转负荷。
- 数值来源模式：foreground_record
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：collected_record
- 采集协议：cp_waste
- 来源：`unido-nh4cl-study`; `jrc-cww-2016`

###### 受盐污染的聚丙烯废袋 (`waste_pp`)

计量未经处理、受盐污染的聚丙烯废袋及实际接收方，不预设机械回收或避免生产抵扣。

- 选定流：受盐污染的聚丙烯废袋
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：原始单位换算后完整匹配期间实测数量仅除以唯一合格产量Q一次，保留失败及零产出工况和期初期末结转负荷。
- 数值来源模式：foreground_record
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：collected_record
- 采集协议：cp_waste
- 来源：`unido-nh4cl-study`; `jrc-cww-2016`

###### 受盐污染的聚乙烯内衬废物 (`waste_pe`)

计量未经处理、受盐污染的聚乙烯内衬废物及接收方；回收厂已清洗身份不等于本废物状态。

- 选定流：受盐污染的聚乙烯内衬废物
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：原始单位换算后完整匹配期间实测数量仅除以唯一合格产量Q一次，保留失败及零产出工况和期初期末结转负荷。
- 数值来源模式：foreground_record
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：collected_record
- 采集协议：cp_waste
- 来源：`unido-nh4cl-study`; `jrc-cww-2016`

##### 基本流

###### 氨 (`air_nh3`)

计量治理后实际释放的未反应NH3物种，包括开停及无组织源；氨氮结果须明确由N换算为NH3。介质为空气，未特指。

- 选定流：氨 `08a91e70-3ddc-11dd-a2a9-0050c2490048`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：原始单位换算后完整匹配期间实测数量仅除以唯一合格产量Q一次，保留失败及零产出工况和期初期末结转负荷。
- 数值来源模式：foreground_record
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：collected_record
- 采集协议：cp_air
- 来源：`unido-nh4cl-study`; `jrc-cww-2016`

###### 氯化氢 (`air_hcl`)

计量治理后实际气态HCl；与盐气溶胶及液相氯离子区分。介质为空气，未特指，不能当作氯气。

- 选定流：氯化氢 `fe0acd60-3ddc-11dd-aab0-0050c2490048`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：原始单位换算后完整匹配期间实测数量仅除以唯一合格产量Q一次，保留失败及零产出工况和期初期末结转负荷。
- 数值来源模式：foreground_record
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：collected_record
- 采集协议：cp_air
- 来源：`unido-nh4cl-study`; `jrc-cww-2016`

###### 颗粒物 (PM2.5) (`air_pm25`)

仅记录实际除尘后逸散的PM2.5干颗粒，测定组成用于N、Cl平衡；不叠加累计PM10或捕集粉尘。

- 选定流：颗粒物 (PM2.5) `08a91e70-3ddc-11dd-9293-0050c2490048`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：原始单位换算后完整匹配期间实测数量仅除以唯一合格产量Q一次，保留失败及零产出工况和期初期末结转负荷。
- 数值来源模式：foreground_record
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：collected_record
- 采集协议：cp_air
- 来源：`unido-nh4cl-study`; `jrc-cww-2016`

###### 颗粒物 (PM2.5 - PM10) (`air_pm10`)

仅记录PM2.5至PM10间的逸散干颗粒，使用互斥实测粒径区间，不预设粒径比例。

- 选定流：颗粒物 (PM2.5 - PM10) `08a91e70-3ddc-11dd-9501-0050c2490048`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：原始单位换算后完整匹配期间实测数量仅除以唯一合格产量Q一次，保留失败及零产出工况和期初期末结转负荷。
- 数值来源模式：foreground_record
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：collected_record
- 采集协议：cp_air
- 来源：`unido-nh4cl-study`; `jrc-cww-2016`

###### 颗粒物（> PM10） (`air_pmover10`)

仅记录大于PM10的逸散干颗粒，存在时纳入干燥、筛分、储存及灌装源。

- 选定流：颗粒物（> PM10） `fe0acd60-3ddc-11dd-a70a-0050c2490048`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：原始单位换算后完整匹配期间实测数量仅除以唯一合格产量Q一次，保留失败及零产出工况和期初期末结转负荷。
- 数值来源模式：foreground_record
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：collected_record
- 采集协议：cp_air
- 来源：`unido-nh4cl-study`; `jrc-cww-2016`

###### 颗粒物，粒径未特指 (`air_pm_unsized`)

仅在粒径未测定时记录未特指粒径的干颗粒部分；不得重复前三个粒径区间已表示的同一部分，保留粒径不确定性。

- 选定流：颗粒物，粒径未特指 `0ce3dedb-caca-407b-a856-a90470eb8ec0`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：原始单位换算后完整匹配期间实测数量仅除以唯一合格产量Q一次，保留失败及零产出工况和期初期末结转负荷。
- 数值来源模式：foreground_record
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：collected_record
- 采集协议：cp_air
- 来源：`unido-nh4cl-study`; `jrc-cww-2016`

###### 水蒸气 (`air_water`)

计量实际净释放的水蒸气，排除冷凝和回用水；完成数据集前另行识别任何真实液滴飘失。

- 选定流：水蒸气 `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：原始单位换算后完整匹配期间实测数量仅除以唯一合格产量Q一次，保留失败及零产出工况和期初期末结转负荷。
- 数值来源模式：foreground_record
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：collected_record
- 采集协议：cp_air
- 来源：`unido-nh4cl-study`; `jrc-cww-2016`

## 7. 分配与共产品处理

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| allocation_single | nh4cl_manufacture | 仅定义一个化学产品，直接归属可分作业公用工程及包装。内部母液粉尘返工及废晶不是共产品，随货包装保留实物量但无独立共功能。 | jrc-ilcd-2010 |
| allocation_shared | nh4cl_manufacture | 先细分实测独占作业，剩余共享负荷用已证明的决定性物理因果关系；无法证明时采用匹配数量价格的过程出口市场价值分配并做敏感性分析，不设默认份额或废物抵扣。 | jrc-ilcd-2010 |
| allocation_ledgers | nh4cl_manufacture | 完整未分配实物质量元素水及库存账与环境负荷分配分开，不以分配系数乘实物产品、废物、排放或内部转移。 | jrc-ilcd-2010 |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

全部协议属于nh4cl_manufacture，保留相同路线状态产品的完整原始期间记录，含失败、零产出、开停、退货及返工。核对期初期末在制品及成品数量和结转负荷。由合格生产及库存发运退货核对确定唯一正Q，不重复相加生产及发运，不重复计算再验收。继承及期末库存负荷匹配正确产出群，不通过选成功批次删除失败负荷。Q=0保留原始记录但不产生归一化结果。

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_product | nh4cl_manufacture | 产品验收及Q | foreground_record | 批次；SKU；晶体净千克；化验；水分；酸度；杂质；粒径；拒收；发运；退货；期初期末合格库存在制品；继承负荷；Q | 经校准净称重排除包装并代表性取样，核对唯一合格批次及全部库存发运返工记录。 | kg | 逐批及连续仪表，开停及盘点 | 完整匹配期间含失败及停机 | 相同场址直接路线状态及产品池 | 每 1 kg 参考流 | 校准方法不确定性样品批次库存及转移记录 |
| cp_materials | nh4cl_manufacture | 原料及循环化学 | foreground_record | 供应方；整份溶液千克；NH3及HCl化验；水；杂质；液氨；阶段投料；期初期末原料母液；退回；反应证据 | 校准称重仪表及实际化验，保留整份采购与组成子账、密度温度及内部转移两端。 | kg | 逐批及连续仪表，开停及盘点 | 完整匹配期间含失败及停机 | 相同场址直接路线状态及产品池 | 每 1 kg 参考流 | 校准方法不确定性样品批次库存及转移记录 |
| cp_water | nh4cl_manufacture | 水及相态平衡 | foreground_record | 来源；表计体积；密度温度；盐酸载水；洗涤循环；冷凝；湿度；蒸发；水分；期初期末液体 | 独立测定水冷凝及空气含湿去向，已积分体积用实测密度仅换算一次，区分游离水晶体残水及蒸气水。 | kg | 逐批及连续仪表，开停及盘点 | 完整匹配期间含失败及停机 | 相同场址直接路线状态及产品池 | 每 1 kg 参考流 | 校准方法不确定性样品批次库存及转移记录 |
| cp_energy | nh4cl_manufacture | 蒸汽回水及电力 | foreground_record | 阶段及总千瓦时；汽化器；风机泵；蒸汽千克；绝压或表压；温度；干度；凝结水千克温度；热损；供应方参考 | 校准阶段及进出仪表、共同参考态蒸汽焓方法和账单，核对能量而不以质量等同热量。 | kg; kWh; MJ | 逐批及连续仪表，开停及盘点 | 完整匹配期间含失败及停机 | 相同场址直接路线状态及产品池 | 每 1 kg 参考流 | 校准方法不确定性样品批次库存及转移记录 |
| cp_pack | nh4cl_manufacture | 包装账 | foreground_record | 聚合物；空组件千克；数量；容量；封口；重复使用次数；领用；随货；报废；期初期末库存 | 称量各实际组件并统计领用随货报废件数，保留全实物量，重复使用服务份额仅作用于负荷账。 | kg; items | 逐批及连续仪表，开停及盘点 | 完整匹配期间含失败及停机 | 相同场址直接路线状态及产品池 | 每 1 kg 参考流 | 校准方法不确定性样品批次库存及转移记录 |
| cp_waste | nh4cl_manufacture | 废物及接收方 | foreground_record | 流股号；湿千克；干固体；水；铵及氨氮；Cl；酸度；杂质；粉尘；内部回用；接收处理；联单；库存 | 逐一称量取样外送流，记录实际状态接收处理及库存变化，不用残差造废物量。 | kg | 逐批及连续仪表，开停及盘点 | 完整匹配期间含失败及停机 | 相同场址直接路线状态及产品池 | 每 1 kg 参考流 | 校准方法不确定性样品批次库存及转移记录 |
| cp_air | nh4cl_manufacture | 治理后释放 | foreground_record | 源；物种；干湿基准；实际标态体积；温压；积分体积或流率时长；NH3；HCl；颗粒粒径组成；水蒸气；治理；检出限 | 对正常失败过渡工况作代表性有组织无组织监测，匹配浓度体积温压干湿基准，独立测定去向，不将全部损失推为一种物种。 | kg; mg/m3; m3; m3/h; h | 逐批及连续仪表，开停及盘点 | 完整匹配期间含失败及停机 | 相同场址直接路线状态及产品池 | 每 1 kg 参考流 | 校准方法不确定性样品批次库存及转移记录 |
| cp_assets | nh4cl_manufacture | 运输资产筛选 | foreground_record | 运输质量距离方式；设备清单；安装质量；寿命；处理量；共享服务；维护；截断 | 核实供应接收路线及设备服务记录，各纳入运输资产材料逐项列原子交换并说明截断依据。 | kg; km; t*km; years | 逐批及连续仪表，开停及盘点 | 完整匹配期间含失败及停机 | 相同场址直接路线状态及产品池 | 每 1 kg 参考流 | 校准方法不确定性样品批次库存及转移记录 |

Q定义为匹配产出群中唯一验收供货批次的净千克之和；若期末合格成品负荷留在该群，则其产量纳入Q。期初合格库存仅在连同结转负荷一起纳入时计入；生产与发运是同一批次的不同观察。WIP不是合格产出：保留完整原始期间实物投入及负荷，识别继承在制品负荷，并将期末WIP负荷明确结转到其未来产出群，而不是删除。外部退货及返工保留继承负荷，不因再验收重复计产量。归一化负荷分子为完成这些转入转出归属后经核实的该群总负荷，同时保留不改写的原始期间实物账。

### 计算规则

| rule_id | applies_to | formula_or_rule | inputs | output | source_ids |
| --- | --- | --- | --- | --- | --- |
| calc_period | all inventory rows | 先换算原始单位，组装完整匹配池数量及结转负荷，再仅除以唯一正Q一次。原始总量及继承期末库存负荷可追溯，Q=0无归一化结果。 | cp_product; cp_materials; cp_water; cp_energy; cp_pack; cp_waste; cp_air | 每1 kg参考流的原子交换 | jrc-cww-2016 |
| calc_chemical | feed_ammonia, feed_hcl, nh4cl_product | NH3 + HCl -> NH4Cl不产生净分子水。独立原料产品化验、实际反应证据、N/H/Cl平衡及实测相转移确定转化损失。载水游离水及晶体残水分开记账，不用同一残差拟合未知反应水和未知排出，不用COD闭合质量。 | cp_materials; cp_product; cp_water; cp_waste; cp_air | 原始实物质量元素水账 | unido-nh4cl-study; jrc-cww-2016 |
| calc_load | air_nh3, air_hcl, air_pm25, air_pm10, air_pmover10, air_pm_unsized | 气体条件匹配时，排放千克=sum(C_mg_per_m3 × integrated_V_m3) / 1000000。流率对时间积分得体积，已积分体积不再乘时间。明确NH3与N、干颗粒与湿液滴。 | cp_air | 物种颗粒原始期间千克 | jrc-cww-2016 |
| calc_utilities | electricity, steam_import, condensate_return | 电量MJ=表计kWh × 3.6。净蒸汽焓采用进汽质量乘供汽比焓，扣匹配回水排汽焓及明确接口项，保留热损并核实供应方约定，不重复计质量及热量负荷。 | cp_energy | 期间电量及独立蒸汽质量焓账 | jrc-cww-2016 |
| calc_pack | pp_sack, pe_liner, delivered_pp, delivered_pe | 包装实物千克=实测空组件千克 × 实际数量，核对领用库存交付废物。重复使用分配仅改变服务负荷，不改变实物产出。 | cp_pack | 包装实物及独立服务负荷 | jrc-ilcd-2010 |

### 数据质量要求

| requirement_id | applies_to | requirement | evidence |
| --- | --- | --- | --- |
| quality_closure | nh4cl_manufacture | 用独立计量化学证据核对完整未分配质量及N/H/Cl/O、实际杂质及包装C账。反应相态水与干物质分开，不拟合不明残差或设通用容差。 | cp_materials; cp_water; cp_pack; cp_waste; cp_air |
| quality_identity | all inventory rows | 核查完整原生名称CAS形态路线地区介质及精确属性单位链，身份与供应方数量兼容分开，披露广义参考及来源分类限制。 | cp_product; cp_materials; cp_energy |
| quality_completeness | nh4cl_manufacture | 逐阶段源保留纳入不适用未测截断决定、检出限及不确定性。空UUID不是零，实际额外药剂封口冷却处理液滴运输资产逐项增加原子行。 | cp_air; cp_assets; cp_waste |
| quality_no_defaults | nh4cl_manufacture | 须有实际等级配方化验收率热电及监测记录，旧报告经济性及生产者示例不提供场址数量默认值。 | unido-nh4cl-study; basf-nh4cl-grades |

## 9. 校验规则

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| validate_reference | nh4cl_product | 要求唯一最终化学参考产出、1 kg供货晶体净质量、全部限定信息及唯一正Q，拒绝亚硝酸盐仅养分基准及不兼容路线形态。 | unsd-cpc3-2025; unido-nh4cl-study |
| validate_pool | nh4cl_manufacture | 核对完整输入负荷含开停失败零产出退货返工库存在制品及继承负荷，换算后仅归一化一次，Q=0无归一化值。 | jrc-cww-2016 |
| validate_physics | nh4cl_manufacture | 要求独立实物质量元素水平衡及反应证据，NH3+HCl无净水生成。湿采购与组成化验不同，实物账及分配账分开。 | unido-nh4cl-study; jrc-ilcd-2010; jrc-cww-2016 |
| validate_air | air_nh3, air_hcl, air_pm25, air_pm10, air_pmover10, air_pm_unsized, air_water | 核查物种介质参考体积及治理后负荷。用互斥颗粒区间或不重叠未定粒径余项，捕集回用粉尘非排放；蒸气液滴干盐分开。 | jrc-cww-2016 |
| validate_interfaces | all inventory rows | 核查CN电压限制、蒸汽质量焓供应约定及每项接收处理运输链接。报告未测数据空UUID及跳过检查，PCR检查不等于完整现场清单或科学批准。 | jrc-cww-2016; jrc-ilcd-2010 |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | secondary_dataset; background_dataset |
| downstream_use | 组成状态及直接路线兼容的交付结晶NH4Cl投入 |
| allowed_use | 明确不加添加剂水相直接路线，具实际场址期间SKU及供应方 |
| excluded_use | 其他路线盐亚硝酸盐、纯活性物养分替代、默认工厂数量、使用阶段排放或监管审批 |
| required_metadata | 限定信息阶段流程、完整Q池库存在制品及实物负荷账、化验公用工程包装设计、供应接收运输、处理资产截断、分配版本 |
| required_quality_disclosure | 方法不确定性覆盖、广义参考限制、原生地区电压来源元数据债务、空身份供应接收缺口、实际扩展及审核范围 |
| update_trigger | 路线原料产品等级添加剂、公用工程治理、供应接收包装库存分配证据变化 |

## 11. 数据源

| source_id | type | reference | used_for |
| --- | --- | --- | --- |
| unido-nh4cl-study | official_guidance | UNIDO, Development of a portfolio of industrial opportunity studies for existing industries in Ethiopia, Final Report, scan17160, Ammonium Chloride study, VI.A.1.d, printed P17/PDF1172; undated historical scan. https://downloads.unido.org/ot/48/19/4819516/15001-20000_17160.pdf | 历史直接中和流程：水性回用母液、浓缩、冷却结晶、过滤、干燥和防潮包装。报告最终选择另一条硫酸铵与氯化钠路线；其所选路线配方、经济性、旧市场限制或性能值均不作为默认值。 |
| jrc-cww-2016 | official_guidance | European Commission JRC, CWW BREF,2016, BAT2–4, printed543–544/PDF573–574. https://bureau-industrial-transformation.jrc.ec.europa.eu/sites/default/files/2019-11/CWW_Bref_2016_published.pdf | 化工行业反应、副产品及废物流股清单、流量与污染负荷表征和代表性监测。不提供NH4Cl配方、治理设计、排放因子或合规结论，须采集实际治理及样品。 |
| basf-nh4cl-grades | literature | BASF, Inorganic Chemicals, Ammonium chloride product table, Untreated U Grade; publisher-page snapshot2026-10-16. https://chemicals.basf.com/global/en/Monomers/inorganic-chemicals | 生产者证据支持市场存在不加添加剂的结晶工业NH4Cl，其他等级含防结块添加剂。化验等级和包装规格仅为示例，不是通用规格、实际场址证明或制造路线证据。 |
| jrc-ilcd-2010 | official_guidance | European Commission JRC, ILCD Handbook, General guide for LCA, Detailed guidance, first edition March2010, section7.9.3, printed257–258/PDF277–278. https://eplca.jrc.ec.europa.eu/uploads/ILCD-Handbook-General-guide-for-LCA-DETAILED-GUIDANCE-12March2010-ISBN-fin-v1.0-EN.pdf | 归因型共享负荷的虚拟细分及决定性物理因果关系；剩余负荷采用过程出口市场价值并做敏感性分析。不设固定分配份额、避免生产抵扣或默认数值。 |
| unsd-cpc3-2025 | official_guidance | UNSD, CPC Version3.0 Structure,30June2025, CSV line1493,34653. https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv | 仅支持分类边界：氯化铵和亚硝酸盐。直接路线结晶NH4Cl是较窄子集；分类不证明制造方法或单物种身份。 |
