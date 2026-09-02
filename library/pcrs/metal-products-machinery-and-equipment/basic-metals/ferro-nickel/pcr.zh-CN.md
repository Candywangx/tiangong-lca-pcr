---
pcr_id: pcr.metal-products-machinery-and-equipment.basic-metals.ferro-nickel
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 镍铁

## 1. 范围与适用性

本 PCR 适用于商业镍铁的前景生产，产品以锭、块、丸或粒状形式在生产厂门交付，用于钢铁生产或铸造。所覆盖路线包括以红土镍矿为原料的原生路线（包括回转窑—电炉 RKEF 路线），以及以含镍二次残余物为原料的路线，但后二者的输出必须是符合下述产品身份、可进入市场的镍铁合金。

前景系统从生产场址接收含镍原料、还原剂、熔剂、能源载体和辅助材料开始。供应侧采矿、选矿、能源生产和材料生产由上游数据集表示；仅当这些作业由报告场址运营且明确作为前景过程建模时，才纳入前景系统。系统止于成品镍铁在厂门交付，并包括原料制备、适用的热预处理、电炉熔炼、精炼、浇铸或水淬造粒、直接排放、用水、废水、炉渣、粉尘及内部循环。

本 PCR 不适用于精炼镍、镍锍、氧化镍烧结物、归入 CPC 41114 以外的通用镍合金、以镍铁为原料生产的钢铁或铸造产品、未达到镍铁产品身份的炉渣或粉尘，以及含镍排放物和废物。作为独立产品销售和规定技术条件的镍生铁，在本候选 PCR 完成方法学评审前不纳入范围。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | `pcr.metal-products-machinery-and-equipment.basic-metals.ferro-nickel` |
| classification_refs | CPC 3.0 `41114` Ferro-nickel（`exact`） |
| covered_products | 具有明确化学成分和生产路线、以锭、块、丸或粒状形式交付的可销售镍铁合金 |
| excluded_products | 精炼镍；镍锍；氧化镍烧结物；通用镍合金；独立销售的镍生铁；下游钢铁/铸造产品；炉渣、粉尘、废水及含镍废物 |
| representative_product | 以红土镍矿为原料，经过原料制备、回转窑预处理、电炉熔炼、精炼以及浇铸或造粒生产的原生路线镍铁 |
| production_route | 原生红土矿 RKEF；符合条件的含镍二次残余物预处理和电炉熔炼；必须声明路线 |
| market_state | 生产厂门交付的成品合金，按交付状态质量并声明成分 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | CPC 3.0 `41114` 镍铁合金 |
| How much | 生产厂门交付的 1,000 kg 交付状态镍铁 |
| How well | 声明镍质量分数、铁平衡及规定杂质；声明产品形态；代表所声明的路线、场址、地域和参考期 |
| How long or cycle | 一个生产批次或商业批，汇总至具有代表性的报告期 |
| reference_flow_link | 天工产品流 `0e9b30a3-8769-480e-a8ff-e7f1aa3f752f`（Ferronickel / 镍铁；产品流；CPC 41114；state code 100） |

| 字段 | 值 |
| --- | --- |
| 参考数量 | `1000 kg` |
| 参考产品流 | Ferronickel / 镍铁 `0e9b30a3-8769-480e-a8ff-e7f1aa3f752f` |
| 参考流属性 | Mass — `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass — `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | `kg` |
| 必需限定信息 | 镍质量分数及分析基准；规定杂质或产品规格；产品形态；原生或二次生产路线；含镍原料类型及再生原料比例；湿基/干基/交付状态质量基准；场址和地域；参考期；分配选择；残余物及循环去向；厂门位置 |

构建前景数据包时，`必需限定信息` 中列出的信息应在数据集元数据、过程说明、参考流备注、产品说明或等效数据包字段中明确声明。缺失必需限定信息的数据包视为参考流定义不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `measure_reference_product` | 成品镍铁 | 质量 | kg | 在声明的门点采用校准计量确定交付状态质量；将验收批或生产批总量归一化为 1,000 kg。 |
| `measure_feed_mass` | 含镍原料、还原剂、熔剂、电极、辅料、炉渣、粉尘和废物 | 质量 | kg | 记录湿质量；当含水率具有实质影响时，同时记录干质量和水分质量分数，并保留换算记录。 |
| `measure_composition` | 镍铁和含镍原料 | 质量分数 | kg/kg 或质量 % | 使用有代表性的批次取样和化学分析；声明结果采用湿基、干基或交付状态基准。 |
| `measure_electricity` | 外购及自发电力 | 能量 | kWh | 按过程计量；若不能直接计量，则依据第 7 节分配规则从经核对的场址总表分配。 |
| `measure_fuels` | 具有能源含量的燃料和还原剂 | 质量和低位发热量 | kg 和 MJ/kg | 按载体记录质量；计算燃烧能量时优先使用供应商或批次特定的低位发热量。 |
| `measure_water` | 取水、循环水和排水 | 体积或质量 | m3 或 kg | 区分取水、内部循环、蒸发和排放；循环水不得重复计作外部输入。 |
| `measure_direct_emissions` | 烟囱、无组织空气、水和土壤排放 | 污染物质量 | kg | 优先采用经校准的连续监测或代表性测试；将计算排放与活动数据及治理设施运行情况核对。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 报告场址接收的含镍矿石、精矿、焙砂、残余物或其他符合条件的原料，以及外购能源、还原剂、熔剂、电极、氧气、水和辅料 |
| starting_condition_role | 镍铁前景系统的上游产品输入 |
| product_classification_scope | 输出必须仍是可销售的 CPC 3.0 `41114` 镍铁合金 |
| recursive_input_rule | 作为输入的镍铁应记录为可见产品输入并链接上游数据集；不得在同一前景数据包中递归展开另一镍铁生产系统 |
| upstream_dataset_requirement | 对每项跨越边界的外购原料、能源载体、材料、供水及运输服务提供地域和技术适宜的上游数据集 |
| disclosure | 声明路线、一体化上游作业、排除项、截断、内部循环、残余物去向、分配、地域和参考期 |

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_starting_condition` | 所有数据集 | 从场址接收含镍原料及其他外购输入开始；只有由报告组织运营且明确声明时，才纳入场内采矿或选矿。 | `ec-jrc-nfm-bref-2017`; `bartzas-komnitsas-ferronickel-lca-2015` |
| `boundary_unit_processes` | 前景系统 | 纳入原料制备、适用的热预处理、电炉熔炼、精炼、成型、污染治理、公用工程和内部物料搬运。 | `ec-jrc-nfm-bref-2017` |
| `boundary_upstream` | 外购输入 | 每项外购输入和运输服务均链接上游数据集；省略项必须有量化的实质性证据，且不得掩盖危险或有毒排放。 | `eu-pef-method-2021` |
| `boundary_emissions_residues` | 所有前景过程 | 纳入烟囱和无组织直接排放、废水、炉渣、粉尘、废耐火材料及其他残余物；声明各残余物的循环、回收、销售、处理或处置去向。 | `ec-jrc-nfm-bref-2017`; `bartzas-komnitsas-ferronickel-lca-2015` |
| `boundary_transport` | 进厂及场内运输 | 纳入物料进厂运输；场内运输在单独计量或具有实质性时纳入；声明所排除的次要运输。 | `bartzas-komnitsas-ferronickel-lca-2015` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `feed_preparation` | 原料接收与制备 | required | 所有路线 | 接收、取样、干燥或调质、混合并制备含镍原料及循环物料 | 送往下一路线步骤的制备原料 |
| `thermal_pretreatment` | 回转窑或等效热预处理 | conditional | 原生红土矿 RKEF 及采用焙烧或煅烧的二次路线 | 熔炼前对原料进行干燥、脱水、煅烧、预还原或去污 | 焙砂或经热处理原料 |
| `electric_smelting` | 电炉还原熔炼 | required | 所有覆盖路线 | 还原和熔化原料，分离粗合金与炉渣，并捕集炉气固体 | 送往精炼的粗镍铁 |
| `refining_finishing` | 精炼、浇铸与造粒 | required | 所有覆盖路线 | 调整成分、脱除杂质、浇铸或造粒、冷却、取样和出厂 | 厂门交付的 1,000 kg 成品镍铁 |

### 过程：原料接收与制备（`feed_preparation`）

#### 输入

##### 产品流

###### 含镍原料（`nickel_bearing_feed`）

分别记录每种矿石、精矿、焙砂、残余物或再生含镍原料。测量接收质量、水分、镍含量、来源及废物/产品状态。

- 选定流：为每项原料选择语义匹配的天工产品流或废物流；本候选 PCR 不规定原料 UUID。
- 流属性/单位：质量 / kg；成分采用 kg/kg 或质量 %
- 数量规则：将接收质量换算至声明的湿基或干基，并归一化至参考流。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：1,000 kg 成品镍铁
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_feed_receipt`
- 来源：`ec-jrc-nfm-bref-2017`; `bartzas-komnitsas-ferronickel-lca-2015`
- 数量范围：原生红土矿原料筛查范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：10000
  - 上限：40000
  - 单位：kg
  - 基准：1,000 kg 成品镍铁；仅适用于原生红土矿路线
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估计（`reasoned_estimate`）

###### 原料制备能源和辅料（`feed_preparation_energy_auxiliaries`）

将电力、热力燃料、粘结剂、水和其他制备辅料按载体或材料分别记录为独立交换。

- 选定流：为每项材料或能源输入选择路线、地域和载体匹配的天工流。
- 流属性/单位：能量 / kWh 或 MJ；质量 / kg；水 / m3
- 数量规则：原料制备过程的计量值或经采购核对的数量，归一化至参考流。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：1,000 kg 成品镍铁
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_materials`
- 来源：`ec-jrc-nfm-bref-2017`

#### 输出

##### 产品流

###### 制备后的含镍原料（`prepared_feed`）

记录送往热预处理或直接送往电炉熔炼的原料质量、水分和镍含量。

- 选定流：由前景模型定义的内部产品流。
- 流属性/单位：质量 / kg
- 数量规则：称量的转移量或由质量平衡计算的转移量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：1,000 kg 成品镍铁
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集后计算（`calculated_from_collection`）
- 采集协议：`cp_feed_receipt`
- 来源：`ec-jrc-nfm-bref-2017`

##### 废物流

###### 制备剔除物和捕集固体（`feed_preparation_rejects`）

按去向记录剔除物、洒落物和捕集粉尘；仅可按内部循环规则扣除在同一核算期内有证据表明已返回的物料。

- 选定流：选择去向特定的废物流或回收产品流；明确危险废物属性。
- 流属性/单位：质量 / kg
- 数量规则：称量的移出量加库存变化核对，归一化至参考流。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：1,000 kg 成品镍铁
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_residue_fate`
- 来源：`ec-jrc-nfm-bref-2017`

##### 基本流

###### 原料制备直接排放（`feed_preparation_emissions`）

记录经治理后的干燥、搬运和贮存环节颗粒物及其他直接排放；不得以捕集粉尘代替排放颗粒物。

- 选定流：选择污染物和环境介质特定的天工基本流。
- 流属性/单位：质量 / kg
- 数量规则：报告期监测结果或排放计算值，归一化至参考流。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：1,000 kg 成品镍铁
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集后计算（`calculated_from_collection`）
- 采集协议：`cp_air_emissions`
- 来源：`ec-jrc-nfm-bref-2017`

### 过程：回转窑或等效热预处理（`thermal_pretreatment`）

#### 输入

##### 产品流

###### 送入预处理的制备原料（`pretreatment_feed`）

记录进入回转窑、焙烧炉、干燥器或等效装置的制备原料，包括内部循环的球团化粉尘。

- 选定流：由前景模型定义的内部制备原料流。
- 流属性/单位：质量 / kg
- 数量规则：称量的转移量或经核对的质量平衡。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：1,000 kg 成品镍铁
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_thermal_pretreatment`
- 来源：`ec-jrc-nfm-bref-2017`

###### 预处理燃料和还原剂（`pretreatment_fuels_reductants`）

分别记录煤、焦炭、燃料、还原剂、电力和粘结剂；区分燃料用途与保留在中间体中的材料碳。

- 选定流：选择载体和地域特定的天工产品流。
- 流属性/单位：质量 / kg；能量 / MJ 或 kWh
- 数量规则：计量、称量或经采购核对的数量，归一化至参考流。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：1,000 kg 成品镍铁
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_materials`
- 来源：`ec-jrc-nfm-bref-2017`; `bartzas-komnitsas-ferronickel-lca-2015`
- 数量范围：含碳物料合计筛查范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：500
  - 上限：8000
  - 单位：kg
  - 基准：1,000 kg 成品镍铁；全部含碳燃料和还原剂合计
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估计（`reasoned_estimate`）

#### 输出

##### 产品流

###### 焙砂或经热处理原料（`treated_feed`）

记录转移至熔炼时的质量、水分，以及可获得时的煅烧或预还原程度。

- 选定流：由前景模型定义的内部中间产品流。
- 流属性/单位：质量 / kg
- 数量规则：称量的转移量或经核对的干质量平衡。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：1,000 kg 成品镍铁
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集后计算（`calculated_from_collection`）
- 采集协议：`cp_thermal_pretreatment`
- 来源：`ec-jrc-nfm-bref-2017`

##### 废物流

###### 捕集的预处理粉尘（`captured_pretreatment_dust`）

记录循环、回收或处置前的捕集粉尘，并声明最终去向。

- 选定流：选择去向特定的废物流或回收产品流。
- 流属性/单位：质量 / kg
- 数量规则：称量的捕集量加库存变化核对，同时报告内部返回前的总量和扣除有据返回后的净量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：1,000 kg 成品镍铁
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_residue_fate`
- 来源：`ec-jrc-nfm-bref-2017`; `bartzas-komnitsas-ferronickel-lca-2015`
- 数量范围：捕集预处理粉尘筛查范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：3000
  - 单位：kg
  - 基准：1,000 kg 成品镍铁；内部循环前
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估计（`reasoned_estimate`）

##### 基本流

###### 预处理直接排放（`pretreatment_emissions`）

按污染物记录烟囱和无组织排放，包括适用时的颗粒物、含镍颗粒物、硫氧化物、氮氧化物、一氧化碳和温室气体。

- 选定流：选择污染物和环境介质特定的天工基本流。
- 流属性/单位：质量 / kg
- 数量规则：经治理后的监测值或源特定计算值，归一化至参考流。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：1,000 kg 成品镍铁
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集后计算（`calculated_from_collection`）
- 采集协议：`cp_air_emissions`
- 来源：`ec-jrc-nfm-bref-2017`

### 过程：电炉还原熔炼（`electric_smelting`）

#### 输入

##### 产品流

###### 熔炼原料（`smelting_feed`）

记录进入各电炉的经处理原生原料或符合条件的二次原料，包括质量和成分。

- 选定流：由前景模型定义的内部中间流。
- 流属性/单位：质量 / kg
- 数量规则：称量的转移量或经核对的质量平衡。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：1,000 kg 成品镍铁
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_electric_smelting`
- 来源：`ec-jrc-nfm-bref-2017`

###### 熔炼电力（`smelting_electricity`）

采用地域适宜的电力供应组合记录炉体及可直接归属的辅助电力。

- 选定流：选择地域和电压等级特定的天工电力产品流。
- 流属性/单位：能量 / kWh
- 数量规则：炉体计量电力加可归属辅助电力，归一化至参考流。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：1,000 kg 成品镍铁
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_materials`
- 来源：`ec-jrc-nfm-bref-2017`; `bartzas-komnitsas-ferronickel-lca-2015`
- 数量范围：熔炼和精炼电力筛查范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：5000
  - 上限：20000
  - 单位：kWh
  - 基准：1,000 kg 成品镍铁；声明所含辅助用电
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估计（`reasoned_estimate`）

###### 熔炼还原剂、电极和熔剂（`smelting_materials`）

按材料身份分别记录所有还原剂、消耗电极、熔剂和耐火材料补加。

- 选定流：选择材料特定的天工产品流。
- 流属性/单位：质量 / kg
- 数量规则：称量的领用量或经库存核对的消耗量，归一化至参考流。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：1,000 kg 成品镍铁
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_materials`
- 来源：`ec-jrc-nfm-bref-2017`; `bartzas-komnitsas-ferronickel-lca-2015`
- 数量范围：消耗性碳电极筛查范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：20
  - 上限：100
  - 单位：kg
  - 基准：1,000 kg 成品镍铁；仅消耗性电极
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估计（`reasoned_estimate`）

#### 输出

##### 产品流

###### 粗镍铁（`crude_ferronickel`）

记录精炼前出炉粗合金的质量和镍成分。

- 选定流：由前景模型定义的内部粗合金产品流。
- 流属性/单位：质量 / kg
- 数量规则：称量，或依据出炉质量和代表性成分计算。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：1,000 kg 成品镍铁
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集后计算（`calculated_from_collection`）
- 采集协议：`cp_electric_smelting`
- 来源：`ec-jrc-nfm-bref-2017`

##### 废物流

###### 电炉渣和捕集粉尘（`smelting_residues`）

将炉渣和捕集粉尘分别记录，并声明成分及最终去向；不得仅因残余物离开场址就将其归为共产品。

- 选定流：选择残余物和去向特定的废物流或回收产品流。
- 流属性/单位：质量 / kg
- 数量规则：称量或由体积—密度计算的质量，并与库存及内部循环核对。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：1,000 kg 成品镍铁
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_residue_fate`
- 来源：`ec-jrc-nfm-bref-2017`; `bartzas-komnitsas-ferronickel-lca-2015`
- 数量范围：电炉渣筛查范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：10000
  - 上限：30000
  - 单位：kg
  - 基准：1,000 kg 成品镍铁；外部回收或处置前的炉渣
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估计（`reasoned_estimate`）

##### 基本流

###### 熔炼直接排放（`smelting_emissions`）

记录经治理后烟囱和无组织排放，包括适用时的含金属颗粒物、一氧化碳、硫氧化物和温室气体。

- 选定流：选择污染物和环境介质特定的天工基本流。
- 流属性/单位：质量 / kg
- 数量规则：监测结果或源特定质量平衡计算值，归一化至参考流。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：1,000 kg 成品镍铁
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集后计算（`calculated_from_collection`）
- 采集协议：`cp_air_emissions`
- 来源：`ec-jrc-nfm-bref-2017`

### 过程：精炼、浇铸与造粒（`refining_finishing`）

#### 输入

##### 产品流

###### 粗合金和精炼辅料（`refining_inputs`）

将粗镍铁、氧气、熔剂、能源载体、水及其他精炼或成型材料分别记录为独立交换。

- 选定流：粗合金使用内部流；外购输入选择材料、能源和地域特定的天工流。
- 流属性/单位：质量 / kg；能量 / kWh 或 MJ；水 / m3
- 数量规则：计量、称量或经库存核对的数量，归一化至参考流。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：1,000 kg 成品镍铁
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_refining_finishing`
- 来源：`ec-jrc-nfm-bref-2017`

#### 输出

##### 产品流

###### 成品镍铁（`finished_ferronickel`）

将验收且完成取样的商业产品归一化至参考数量，并在前景记录中保留未归一化的生产总量。

- 选定流：Ferronickel / 镍铁 `0e9b30a3-8769-480e-a8ff-e7f1aa3f752f`
- 流属性/单位：Mass — `93a60a56-a3c8-11da-a746-0800200b9a66` / kg — 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：将验收的厂门产品总量归一化后设为 1,000 kg。
- 数值来源模式：固定值（`fixed_value`）
- 适用范围：通用（`generic`）
- 归一化基准：1,000 kg 成品镍铁
- 基准类型：参考流（`reference_flow`）
- 证据类型：方法公式（`method_formula`）
- 来源：`eu-pef-method-2021`; `iso-6501-2020`

##### 废物流

###### 精炼渣、粉尘、废水和废材料（`refining_residues`）

分别记录各残余物的成分、废物状态、处理、回收及最终去向。

- 选定流：选择残余物、处理方式和去向特定的天工废物流或回收产品流。
- 流属性/单位：质量 / kg；废水 / m3 或 kg
- 数量规则：称量、计量或经核对的数量，归一化至参考流。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：1,000 kg 成品镍铁
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_residue_fate`
- 来源：`ec-jrc-nfm-bref-2017`; `bartzas-komnitsas-ferronickel-lca-2015`
- 数量范围：精炼渣和捕集粉尘筛查范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：3000
  - 单位：kg
  - 基准：1,000 kg 成品镍铁；外部回收或处置前
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估计（`reasoned_estimate`）

##### 基本流

###### 精炼和成型直接排放（`refining_emissions`）

按污染物记录精炼、浇铸、造粒、冷却和治理环节的空气及水排放，并扣除捕集物料。

- 选定流：选择污染物和环境介质特定的天工基本流。
- 流属性/单位：质量 / kg
- 数量规则：监测结果、废水分析或源特定计算值，归一化至参考流。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：1,000 kg 成品镍铁
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集后计算（`calculated_from_collection`）
- 采集协议：`cp_air_water_emissions`
- 来源：`ec-jrc-nfm-bref-2017`

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivide` | 共用作业和公用工程 | 首先通过细分计量、生产批、炉体和处理线，或在能够证明替代功能时通过系统扩展避免分配。 | `eu-pef-method-2021` |
| `allocation_physical` | 无法避免的共用负荷 | 若细分或系统扩展不可行，采用有记录的物理因果关系分配，例如独立计量的能源需求、干原料质量或镍质量通量；说明所选驱动因子。 | `eu-pef-method-2021` |
| `allocation_other` | 无可辩护的物理关系 | 仅在说明物理因果关系不可用后，才可采用经济价值等其他有记录的关系；披露价格、平均期和敏感性。 | `eu-pef-method-2021` |
| `allocation_recycled_dust` | 内部循环的粉尘、炉渣和金属 | 将在同一前景系统及核算期内返回的物料视为内部循环：报告产生总量和返回量，但不得产生外部避免产品抵扣。 | `ec-jrc-nfm-bref-2017` |
| `allocation_waste_status` | 炉渣、粉尘、残余物和二次原料 | 按适用法域和实际交易判定废物或产品状态。残余物离场并不自动成为共产品；必须证明功能、市场和质量规格，并一致记录处理负荷。 | `eu-pef-method-2021`; `bartzas-komnitsas-ferronickel-lca-2015` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_feed_receipt` | `feed_preparation` | 含镍原料和制备原料 | 地磅、取样记录、实验室、库存台账 | 毛/净质量；水分；Ni、Fe 及杂质含量；来源；废物状态；库存变化 | 校准称重，加代表性批次取样和化学分析 | kg；质量 % | 每批，按月汇总 | 通常至少连续 12 个代表性月份；批次生产须说明 | 声明场址范围内全部生产线 | 按质量加权成分，并核对期初/期末库存 | 校准证书、取样计划、实验室 QA/QC、库存核对 |
| `cp_energy_materials` | 所有适用过程 | 电力、燃料、还原剂、电极、熔剂、辅料 | 仪表、发票、领用记录、库存台账 | 数量；载体/材料身份；仪表；发热量；库存变化 | 优先过程计量，否则从场址总量核对分配 | kWh；MJ；kg；m3 | 连续或每次领用，按月汇总 | 与产品分母相同 | 声明生产线及可归属公用工程 | 按载体求和并扣除有据的非生产用途 | 仪表校准、发票核对、分配工作表 |
| `cp_thermal_pretreatment` | `thermal_pretreatment` | 原料、焙砂、粉尘、能源、运行状态 | 皮带秤、批次日志、实验室、控制系统 | 输入/输出质量；水分；温度；成分；运行小时 | 计量转移和经核对的干质量平衡 | kg；°C；h | 每批或连续班次记录 | 与产品分母相同 | 每台纳入的窑、焙烧炉或干燥器 | 按装置和路线汇总；保留停机和旁路 | 仪表校准、实验室结果、质量平衡闭合 |
| `cp_electric_smelting` | `electric_smelting` | 炉料、电力、粗合金、炉渣 | 炉体仪表、出炉记录、实验室、库存台账 | 原料质量/成分；kWh；出炉质量/成分；炉渣质量；运行小时 | 计量电力、称量或计算的出炉量、代表性取样 | kg；kWh；质量 % | 每炉或每班 | 与产品分母相同 | 每台纳入的电炉 | 按炉体和路线汇总；核对镍和干质量 | 仪表校准、炉次日志、实验室 QA/QC、平衡闭合 |
| `cp_refining_finishing` | `refining_finishing` | 粗合金、辅料、成品 | 炉次/批次日志、秤、实验室、公用工程仪表 | 输入/输出质量；镍和杂质；产品形态；不合格品；能源/水 | 校准称重、代表性批次取样和直接计量 | kg；质量 %；kWh；m3 | 每炉或每批 | 与产品分母相同 | 所有纳入的精炼和成型线 | 仅汇总验收产品；返工和不合格品单列 | 取样证明、校准、产品规格、生产核对 |
| `cp_air_emissions` | `feed_preparation`; `thermal_pretreatment`; `electric_smelting` | 烟囱和无组织直接空气排放 | CEMS、烟气测试、治理日志、活动数据 | 污染物浓度；烟气流量；运行时间；捕集效率；旁路事件 | 连续监测或代表性测试；仅采用源特定因子计算 | kg；mg/Nm3；Nm3/h | 连续或按许可要求测试 | 代表报告期和运行状态 | 每个实质性排放点及已声明无组织源 | 对浓度和流量积分；包括启停和旁路 | 校准、认可测试报告、检出限、不确定性、治理设施可用率 |
| `cp_air_water_emissions` | `refining_finishing` | 直接空气和水排放 | CEMS/测试、废水流量计和分析、治理日志 | 污染物浓度；流量；运行时间；排放水量 | 监测及污染物特定质量计算 | kg；mg/Nm3；mg/L；m3 | 连续或按许可要求测试 | 代表报告期 | 所有精炼、浇铸、造粒和废水出口 | 对浓度和流量积分；空气与水介质分开 | 校准、实验室 QA/QC、检出限、不确定性 |
| `cp_residue_fate` | 所有适用过程 | 炉渣、粉尘、剔除物、废水污泥、废材料 | 秤、联单、发票、库存台账 | 产生总量；内部返回；外运；成分；去向；法律状态 | 称量或经验证的体积—密度换算，加库存核对 | kg；m3 | 每次移动，按月汇总 | 与产品分母相同 | 整个声明场址 | 分列总产生、内部返回、外部回收、处理和处置 | 磅单、联单、接收方证明、库存平衡、分类记录 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calculate_normalization` | 所有清单交换 | `归一化交换量 = 报告期交换量 × 1000 / 验收镍铁质量(kg)` | 报告期交换量；验收的厂门镍铁质量 | 每 1,000 kg 参考流的交换量 | `eu-pef-method-2021` |
| `calculate_dry_mass` | 含水原料和残余物 | `干质量 = 湿质量 × (1 - 水分质量分数)`；保留湿质量和实测水分 | 湿质量；水分质量分数 | 干质量及声明基准 | `ec-jrc-nfm-bref-2017` |
| `calculate_nickel_balance` | 整个前景系统及主要单元过程 | 核对原料、产品、粉尘、炉渣、库存、废水和实测排放中的镍；验收前调查未解释的不平衡 | 所有相关流的质量和镍分数；库存变化 | 镍平衡及闭合率 | `bartzas-komnitsas-ferronickel-lca-2015` |
| `calculate_monitored_emission` | 直接排放 | `污染物质量 = 时间积分(浓度 × 标准状态流量)`，记录单位、水分、氧含量及参比状态修正 | 浓度、烟气或水流量、运行时间、修正因子 | 按环境介质的污染物质量 | `ec-jrc-nfm-bref-2017` |
| `calculate_internal_recycle` | 粉尘、炉渣、合金和制备物料循环 | 记录总产生和总返回；外部废物或产品输出等于总产生加期初库存，减内部返回和期末库存，并按经验证转移调整 | 产生、返回、库存变化、转移 | 外部净残余物及可见内部循环 | `ec-jrc-nfm-bref-2017` |
| `calculate_shared_burdens` | 共用公用工程和处理 | 采用第 7 节层级并记录所选因果驱动或经济关系；分配份额之和必须为 1 | 共用负荷；生产量；分配驱动 | 归属于镍铁的负荷 | `eu-pef-method-2021` |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_technology` | 所有前景记录 | 数据应代表声明的原生或二次路线、炉型技术、治理设施和产品形态；不得在不单独加权的情况下合并实质不同路线。 | 过程说明、路线份额、设备清单、运行日志 |
| `dq_geography` | 能源、运输、上游材料及直接排放 | 使用场址特定前景数据和地域适宜的上游数据集；披露代理数据和电网地域不匹配。 | 场址位置、供应商来源、数据集地域、代理清单 |
| `dq_time` | 所有记录 | 使用一致的代表期，通常至少连续 12 个月；说明较短生产批次，并识别异常停机或启动。 | 报告日期、生产日志、代表性声明 |
| `dq_precision` | 实测和计算数量 | 保留校准、取样不确定性、检出限、缺失数据处理及物料/能源平衡闭合；具有实质性的未解决不平衡不能通过校验。 | QA/QC 文件、不确定性记录、平衡工作表 |
| `dq_completeness` | 所有前景过程 | 核算所有实质性原料、能源载体、直接排放、炉渣、粉尘、废水和危险流；任何省略均须量化并说明。 | 完整性清单、场址核对、排除记录 |
| `dq_source_identity` | 关联的上游数据 | 记录数据集 UUID 或持久标识、数据包所用版本、提供方、地域、技术和访问日期。 | 数据源登记和交换链接 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validate_identity` | 参考产品 | 确认 CPC 3.0 `41114`、产品名称、产品形态、厂门状态及参考流 UUID；拒绝以精炼镍、镍锍、通用合金或废物流替代。 | `iso-6501-2020` |
| `validate_reference_amount` | 参考流 | 确认归一化后恰为 1,000 kg，并采用质量属性 `93a60a56-a3c8-11da-a746-0800200b9a66`、质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` 和单位 kg。 | `eu-pef-method-2021` |
| `validate_composition` | 产品和含镍原料 | 要求代表性取样、声明分析基准、镍含量、规定杂质及批次关联；没有取样证据的成分数据不完整。 | `iso-8049-2016`; `iso-8050-1988` |
| `validate_route_boundary` | 数据集范围 | 确认路线声明，并纳入所有适用的 required/conditional 过程、治理设施、直接排放、残余物和关联上游输入。 | `ec-jrc-nfm-bref-2017` |
| `validate_inventory_balance` | 前景清单 | 核对产品质量、干质量、镍、能源、库存及内部循环；对具有实质性的未解释不平衡及超出筛查范围的值进行调查，不得裁剪实测值。 | `bartzas-komnitsas-ferronickel-lca-2015` |
| `validate_allocation` | 共用作业和输出 | 确认遵循分配层级、份额之和为 1、内部循环未获得避免产品抵扣，且废物/共产品状态有证据支持。 | `eu-pef-method-2021` |
| `validate_data_quality` | 所有证据 | 确认技术、地域、时间、精度、完整性和来源身份的证据；披露代理和不确定性限制。 | `eu-pef-method-2021` |
| `validate_reasoned_ranges` | 候选 QA 校验范围 | 推理估计范围仅作为评审触发器；异常值应给出解释和源特定证据，绝不得用范围边界替换采集值。 | `ec-jrc-nfm-bref-2017`; `bartzas-komnitsas-ferronickel-lca-2015` |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 厂门成品镍铁生产的前景数据包 |
| downstream_use | 构建天工 `process` 数据集及用于合金摇篮到大门供应的 `lifecyclemodel` 投影 |
| allowed_use | 路线和场址具有代表性，且声明成分、地域、期间、上游链接、分配和残余物去向的镍铁清单 |
| excluded_use | 精炼镍、镍锍、独立销售的镍生铁、通用镍合金、下游钢铁产品，或以候选筛查范围替代实测数据 |
| required_metadata | PCR id；CPC 代码；参考流 UUID；镍含量及分析基准；产品形态；路线；原料类型及再生比例；场址/地域；期间；分配；门点；上游数据集身份 |
| required_quality_disclosure | 取样和校准证据；直接排放方法；质量、镍及能源平衡闭合；排除项；代理；不确定性；筛查范围异常；废物/共产品决策 |
| update_trigger | 产品规格、路线、炉型或治理技术、原料组合、分配、场址地域或实质性清单参数发生变化；其他情况下至少每年评审 |

## 11. 数据源

| source_id | 类型 | Reference | 用途 |
| --- | --- | --- | --- |
| `ec-jrc-nfm-bref-2017` | `official_guidance` | Cusano, G. et al. (2017), *Best Available Techniques (BAT) Reference Document for the Non-Ferrous Metals Industries*, EUR 28648 EN, European Commission Joint Research Centre; https://publications.jrc.ec.europa.eu/repository/handle/JRC107041; DOI: 10.2760/8224 | 原生和二次镍铁工艺顺序、输入、排放、治理、粉尘循环和场址基准背景 |
| `iso-6501-2020` | `standard` | ISO 6501:2020, *Ferronickel — Specification and delivery requirements*; https://www.iso.org/standard/77250.html | 产品形态、商业产品身份、规格和交付背景 |
| `iso-8049-2016` | `standard` | ISO 8049:2016, *Ferronickel shot — Sampling for analysis*; https://www.iso.org/standard/65091.html | 镍铁丸商业批次的代表性化学分析取样 |
| `iso-8050-1988` | `standard` | ISO 8050:1988, *Ferronickel ingots or pieces — Sampling for analysis*; https://www.iso.org/standard/15065.html | 镍铁锭和块化学成分的代表性取样 |
| `eu-pef-method-2021` | `official_guidance` | European Commission Recommendation (EU) 2021/2279 on the use of the Environmental Footprint methods; http://data.europa.eu/eli/reco/2021/2279/oj | 参考流归一化、分配层级、完整性和数据质量维度 |
| `bartzas-komnitsas-ferronickel-lca-2015` | `literature` | Bartzas, G. and Komnitsas, K. (2015), “Life cycle assessment of ferronickel production in Greece,” *Resources, Conservation and Recycling* 105, 113–122; DOI: 10.1016/j.resconrec.2015.10.016; https://sln.eramet.com/wp-content/uploads/sites/5/2023/09/40_LIF1.pdf | 摇篮到大门前景结构、物料和能量平衡、原生路线场址数据、炉渣/粉尘处理及数据质量证据 |
