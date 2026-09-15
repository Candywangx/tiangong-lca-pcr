---
pcr_id: pcr.metal-products-machinery-and-equipment.basic-metals.lead-unwrought
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 未锻轧铅

## 1. 范围与适用性

本 PCR 适用于以粗铅、精炼铅、软铅、硬铅或合金铅等形态离开生产者，且以铅锭、大锭或其他初次铸造形态供应的未锻轧铅前景数据包。其涵盖从含铅精矿生产的原生铅和从铅废料生产的再生铅；数据包应选择并披露一条路线，或在采集前保持路线清晰分离的前提下透明建模经实测的场址特定混合路线。

边界终止于精炼、必要时的合金成分调整及铸造完成后的生产者大门。作为产品的铅矿石及精矿、作为最终产品的铅废料、铅氧化物、铅板/片/带/箔/粉等半成品、铅制品、蓄电池以及下游轧制、挤压或制品制造均不在本 PCR 范围内。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.basic-metals.lead-unwrought |
| classification_refs | CPC 3.0：41441，Lead, unwrought（仅作为映射背景） |
| covered_products | 以铅锭、大锭或其他初次铸造形态供应的粗制或精炼、非合金或已声明合金牌号的未锻轧铅金属 |
| excluded_products | 铅矿石及精矿；作为废料销售的铅废料；铅氧化物；铅半成品；铅制品；蓄电池；下游成形与制造 |
| representative_product | 粗铅，且应声明实际纯度、合金成分、铸造形态和可销售牌号 |
| production_route | 从含铅精矿进行原生冶炼和精炼，或从铅废料进行再生回收、冶炼、精炼和铸造 |
| market_state | 生产者大门处的固态未锻轧铅，不含运输包装 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 供应作为下游加工或合金用途原料的未锻轧铅金属 |
| How much | 生产者大门处 1 kg 净可销售未锻轧铅 |
| How well | 已声明铅含量、杂质或合金成分、产品牌号规范、原生/再生路线、铸造形态及符合性状态 |
| How long or cycle | 一个生产批次或报告期产出；不表示使用阶段服务寿命 |
| reference_flow_link | 按所声明路线选择 `primary_lead_product` 或 `secondary_lead_product` |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 kg |
| 参考产品流 | 粗铅 `063889a6-fcdf-48f8-a229-992a07bc2b0a` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 原生、再生或实测混合路线；铅纯度及完整声明的合金/杂质成分；产品牌号/规范；铸造形态；生产者地理位置；生产技术与炉型；报告期；再生含量核算约定；净质量及水分/污染物基准；生产者大门边界 |

构建前景数据包时，`必需限定信息` 中列出的信息应在数据集元数据、过程说明、参考流备注、产品说明或等效数据包字段中明确声明。缺失必需限定信息的数据包视为参考流定义不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_net_mass` | 参考产品 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 在生产者大门计量可销售金属净质量，不含托盘、捆带、铸模涂层和运输包装。 |
| `grade_composition_basis` | 含铅投入与产品 | Mass | kg | 分别记录湿基或收到状态的进料质量、干质量和含铅量；以一致质量基准报告产品铅含量及每种有意加入的合金元素。 |
| `electricity_energy_basis` | 外购电力 | Energy | MJ | 记录计量电力以及电网/合同地理位置和电压；按 1 kWh = 3.6 MJ 转换，且保留原始电表记录。 |
| `fuel_energy_basis` | 天然气和焦炭 | Volume 或 Mass | m3 或 kg | 保留采购数量和声明的参考条件；仅使用供应商或场址特定低位热值计算能量并保留该因子。 |
| `direct_emission_basis` | 直接基本流输出 | Mass | kg | 仅报告前景作业产生的释放；捕集并回用的物料以及电力或燃料供应链上游排放不得计入直接排放行。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 原生路线：以收到状态进入冶炼厂大门的含铅精矿。再生路线：以收到状态进入回收/冶炼厂大门的已分选铅废料。 |
| starting_condition_role | 进入前景生产者的外购或转入含铅原料 |
| product_classification_scope | 独立于外部分类树的未锻轧铅金属；CPC 41441 仅作为映射背景 |
| recursive_input_rule | 同一报告系统内回熔的未锻轧铅为内部循环，不重复作为上游产品投入；外购未锻轧铅应作为独立投入并链接上游数据集。 |
| upstream_dataset_requirement | 对跨越边界的每种外购物料、燃料、电力、氧气、水、试剂及外部处理残余物，提供在地理和时间上具有代表性的上游数据集。 |
| disclosure | 声明路线、进料来源与成分、炉型/精炼技术、烟气与粉尘控制、硫管理、共产品去向、废物处理、产品牌号以及所有排除项。 |

### 边界规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_primary_route` | 原生生产 | 纳入精矿接收与处理、采用时的配料或烧结、冶炼/还原、采用时的烟气净化与硫回收、粗铅精炼、合金调整、铸造、场内残余物处理以及生产者大门前的直接释放。 | `us-epa-ap42-primary-lead-1995`; `eu-jrc-nfm-bref-2017` |
| `boundary_secondary_route` | 再生生产 | 纳入生产者实施的废料接收与预处理、冶炼/还原、烟气净化、精炼或合金调整、铸造、场内残余物处理以及生产者大门前的直接释放。 | `us-epa-ap42-secondary-lead-2010`; `eu-jrc-nfm-bref-2017` |
| `boundary_upstream_inputs` | 外购投入 | 按实际交付牌号、状态、地理位置和参考条件链接上游供应数据集；不得再将其上游排放计为前景直接释放。 |  |
| `boundary_exclusions` | 下游阶段 | 除非更广研究将其作为单独过程加入，否则排除生产者大门后的场外运输、下游成形/加工、产品使用和寿命终止。 |  |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `primary_unwrought_lead` | 原生未锻轧铅生产 | `conditional` | 当含铅精矿为主要进料时纳入；声明烧结/鼓风炉、直接冶炼或其他经核实炉型配置。 | 前景原生冶炼、精炼与铸造 | 净可销售未锻轧铅 kg |
| `secondary_unwrought_lead` | 再生未锻轧铅生产 | `conditional` | 当铅废料为主要进料时纳入；声明废料预处理和炉型配置。 | 前景再生回收、冶炼、精炼与铸造 | 净可销售未锻轧铅 kg |

通常仅选择一条路线。兼有两条路线的生产者只有在分别记录路线产出和共享作业且无交换重复计数时，才可报告实测的场址特定混合路线。

### 过程：原生未锻轧铅生产（`primary_unwrought_lead`）

#### 输入

##### 产品流

###### 含铅精矿（`primary_lead_concentrate`）

记录交付至原生冶炼厂的精矿干基和收到状态质量及含铅量化验结果。

- 选定流：铅精矿
- 流属性/单位：Mass / kg
- 数量规则：计量接收并消耗的精矿，核算干质量和含铅量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净可销售原生未锻轧铅
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_primary_materials`
- 来源：`us-epa-ap42-primary-lead-1995`; `eu-jrc-nfm-bref-2017`

###### 冶金焦（`primary_coke`）

记录作为还原剂或工艺燃料使用的焦炭；不计入未跨越系统边界的内部循环焦炭。

- 选定流：冶金焦 `a94c42b1-7fa9-42f3-a9d1-1e7353e8490d`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：计量前景炉窑消耗的交付焦炭
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 净可销售原生未锻轧铅
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_primary_materials`
- 来源：`us-epa-ap42-primary-lead-1995`; `eu-jrc-nfm-bref-2017`

###### 石灰石熔剂（`primary_limestone`）

记录作为熔剂加入的石灰石，并声明品级和碳酸盐含量。

- 选定流：石灰石 `6cf9f186-6e7e-40b5-800e-6759a429e7a8`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：计量加入的石灰石
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 净可销售原生未锻轧铅
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_primary_materials`
- 来源：`us-epa-ap42-primary-lead-1995`

###### 硅砂熔剂（`primary_silica_sand`）

记录作为熔剂加入的硅砂，并声明二氧化硅含量。

- 选定流：硅砂 `854527a0-1a8f-43af-b7c5-8c20d22e61ff`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：计量加入的硅砂
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 净可销售原生未锻轧铅
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_primary_materials`
- 来源：`us-epa-ap42-primary-lead-1995`; `eu-jrc-nfm-bref-2017`

###### 工业氧气（`primary_oxygen`）

采用富氧或喷氧时记录外购氧气，并声明纯度、压力和参考条件。

- 选定流：工业氧气 `bd4b0f96-2090-4806-a648-335ab20ff401`
- 流属性/单位：Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / Units of volume `93a60a57-a3c8-12da-a746-0800200c9a66` / m3
- 数量规则：按声明参考条件计量外购氧气；仅在证实未使用时记零
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 净可销售原生未锻轧铅
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_primary_utilities`
- 来源：`eu-jrc-nfm-bref-2017`

###### 工艺用水（`primary_process_water`）

记录跨越设施边界的工艺用水；除非补充水作为工艺用水计量，否则本行不表示冷却水循环。

- 选定流：工艺用水 `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：计量净工艺用水投入
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净可销售原生未锻轧铅
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_primary_utilities`
- 来源：`eu-jrc-nfm-bref-2017`

###### 外购电力（`primary_electricity`）

记录供应至设施的计量交流电，并声明电压以及电网或合同地理位置。

- 选定流：交流电供应
- 流属性/单位：Energy / MJ
- 数量规则：计量外购电力，必要时由 kWh 转为 MJ
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净可销售原生未锻轧铅
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_primary_utilities`
- 来源：`eu-jrc-nfm-bref-2017`

###### 气态天然气（`primary_natural_gas`）

记录在精炼锅、干燥器或其他直接燃烧前景设备中燃烧的天然气。

- 选定流：气态天然气 `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位：Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / Units of volume `93a60a57-a3c8-12da-a746-0800200c9a66` / m3
- 数量规则：按声明参考条件计量天然气
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净可销售原生未锻轧铅
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_primary_utilities`
- 来源：`us-epa-ap42-primary-lead-1995`; `eu-jrc-nfm-bref-2017`

###### 氢氧化钠精炼试剂（`primary_sodium_hydroxide`）

记录用于去除残余杂质的氢氧化钠，并声明溶液浓度和供应状态。

- 选定流：氢氧化钠 `e0abcced-0611-4c24-9290-5a2c5a0c4169`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：计量氢氧化钠产品质量，并保留有效成分浓度
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净可销售原生未锻轧铅
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_primary_materials`
- 来源：`us-epa-ap42-primary-lead-1995`

##### 废物流

不规定废物投入。任何用作进料的外部残余物均应以其自身化学和物理特定的产品流或废物流表示，不得与精矿合并。

##### 基本流

设施边界不规定基本流投入；除非所选建模约定要求一致记录，否则燃烧空气不列入清单。

#### 输出

##### 产品流

###### 可销售原生未锻轧铅（`primary_lead_product`）

本行是原生路线数据包的定量参考输出。

- 选定流：粗铅 `063889a6-fcdf-48f8-a229-992a07bc2b0a`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：按计量的净可销售产出归一化后为 1 kg
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：1 kg 净可销售原生未锻轧铅
- 基准类型：参考流（`reference_flow`）
- 证据类型：依据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_primary_outputs`
- 来源：`un-cpc-3-0-structure-2025`; `us-epa-ap42-primary-lead-1995`

###### 硫酸共产品（`primary_sulfuric_acid`）

当含硫原生进料产生的二氧化硫在场内制酸装置中转化为可销售硫酸时记录；否则应单独记录实际硫控制输出。

- 选定流：硫酸 `7ee2e3c3-bee7-4520-92b7-3e23afbfcd6f`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：计量跨越生产者边界的可销售硫酸；仅在未生产可销售硫酸时记零
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 净可销售原生未锻轧铅
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_primary_outputs`
- 来源：`us-epa-ap42-primary-lead-1995`; `eu-jrc-nfm-bref-2017`

##### 废物流

###### 铅冶炼渣（`primary_lead_smelting_slag`）

记录离开原生过程、送往回收、处理、利用或处置的炉渣，并声明铅含量和去向。

- 选定流：铅冶炼渣
- 流属性/单位：Mass / kg
- 数量规则：计量离开前景系统的炉渣质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 净可销售原生未锻轧铅
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_primary_outputs`
- 来源：`us-epa-ap42-primary-lead-1995`; `eu-jrc-nfm-bref-2017`

###### 铅精炼浮渣（`primary_lead_refining_dross`）

记录离开前景系统的精炼浮渣，并声明成分、回收路线和最终去向。

- 选定流：铅精炼浮渣
- 流属性/单位：Mass / kg
- 数量规则：计量离开前景系统的浮渣质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 净可销售原生未锻轧铅
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_primary_outputs`
- 来源：`us-epa-ap42-primary-lead-1995`

###### 铜硫化物锍（`primary_copper_matte`）

将送往金属回收的锍作为独立输出记录，不得并入炉渣。

- 选定流：铅冶炼产生的铜硫化物锍
- 流属性/单位：Mass / kg
- 数量规则：计量离开前景系统的锍质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净可销售原生未锻轧铅
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_primary_outputs`
- 来源：`us-epa-ap42-primary-lead-1995`; `eu-jrc-nfm-bref-2017`

###### 砷锑黄渣（`primary_speiss`）

将送往回收或处理的黄渣作为独立输出记录，并声明砷、锑成分。

- 选定流：铅冶炼产生的砷锑黄渣
- 流属性/单位：Mass / kg
- 数量规则：计量离开前景系统的黄渣质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净可销售原生未锻轧铅
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_primary_outputs`
- 来源：`us-epa-ap42-primary-lead-1995`

##### 基本流

###### 直接化石源二氧化碳（`primary_carbon_dioxide_fossil`）

记录场内焦炭及燃料燃烧或还原产生的直接化石源二氧化碳；排除燃料和电力的上游排放。

- 选定流：二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：计量直接释放，或以场址特定碳平衡与前景化石碳投入核对
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净可销售原生未锻轧铅
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_primary_emissions`
- 来源：`eu-jrc-nfm-bref-2017`

###### 排入空气的二氧化硫（`primary_sulfur_dioxide_air`）

记录经烟气收集、制酸、洗涤和其他控制后的二氧化硫释放；保留在产品或残余物中的硫不得计入本行。

- 选定流：排入空气（未指定）的二氧化硫
- 流属性/单位：Mass / kg
- 数量规则：计量控制排放和无组织前景释放之和，且不得重复计数
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净可销售原生未锻轧铅
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_primary_emissions`
- 来源：`us-epa-ap42-primary-lead-1995`; `eu-jrc-nfm-bref-2017`

###### 排入空气的铅（`primary_lead_air`）

记录从有组织排气筒和量化无组织源释放到空气中的铅。

- 选定流：铅 `4d9a8790-3ddd-11dd-91dc-0050c2490048`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：计量排入未指定空气区室的铅，包括已量化无组织排放
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净可销售原生未锻轧铅
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_primary_emissions`
- 来源：`us-epa-ap42-primary-lead-1995`; `eu-jrc-nfm-bref-2017`

###### 排入空气的颗粒物（`primary_particulate_air`）

记录控制后排放的未指定粒径总颗粒物；实测粒径组分应保留为独立支撑字段，不得用其代替总量。

- 选定流：排入空气的未指定粒径颗粒物
- 流属性/单位：Mass / kg
- 数量规则：计量排气筒及量化无组织源的总颗粒物释放
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净可销售原生未锻轧铅
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_primary_emissions`
- 来源：`us-epa-ap42-primary-lead-1995`; `eu-jrc-nfm-bref-2017`

### 过程：再生未锻轧铅生产（`secondary_unwrought_lead`）

#### 输入

##### 产品流

###### 铅废料（`secondary_lead_scrap`）

记录交付至再生生产者的已分选铅废料；蓄电池来源进料应在分离后以本行所表示的实际含铅组分声明。

- 选定流：铅废料 `c814e493-f6ff-48a6-9b92-caba670f15e3`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：计量交付铅废料质量，并记录含铅量、水分、硫、塑料和污染物
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净可销售再生未锻轧铅
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_secondary_materials`
- 来源：`us-epa-ap42-secondary-lead-2010`; `eu-jrc-nfm-bref-2017`

###### 冶金焦（`secondary_coke`）

记录所选再生炉型中作为燃料或还原剂加入的焦炭。

- 选定流：冶金焦 `a94c42b1-7fa9-42f3-a9d1-1e7353e8490d`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：计量前景作业消耗的焦炭
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 净可销售再生未锻轧铅
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_secondary_materials`
- 来源：`us-epa-ap42-secondary-lead-2010`; `eu-jrc-nfm-bref-2017`

###### 石灰石熔剂（`secondary_limestone`）

记录所选再生冶炼路线中加入的石灰石。

- 选定流：石灰石 `6cf9f186-6e7e-40b5-800e-6759a429e7a8`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：计量加入的石灰石
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 净可销售再生未锻轧铅
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_secondary_materials`
- 来源：`us-epa-ap42-secondary-lead-2010`

###### 钢铁废碎料炉料（`secondary_scrap_steel`）

记录用于固硫、成渣或传热的钢铁废碎料，不得与铅废料合并。

- 选定流：钢铁废碎料 `6cb5e364-ba39-4009-8b40-a76fdc88bc42`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：计量加入的钢铁废碎料
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 净可销售再生未锻轧铅
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_secondary_materials`
- 来源：`us-epa-ap42-secondary-lead-2010`; `eu-jrc-nfm-bref-2017`

###### 工业氧气（`secondary_oxygen`）

采用富氧时记录外购氧气，并声明纯度、压力和参考条件。

- 选定流：工业氧气 `bd4b0f96-2090-4806-a648-335ab20ff401`
- 流属性/单位：Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / Units of volume `93a60a57-a3c8-12da-a746-0800200c9a66` / m3
- 数量规则：按声明参考条件计量外购氧气；仅在证实未使用时记零
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 净可销售再生未锻轧铅
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_secondary_utilities`
- 来源：`eu-jrc-nfm-bref-2017`

###### 工艺用水（`secondary_process_water`）

记录跨越再生生产者边界的工艺用水，不含闭路循环水。

- 选定流：工艺用水 `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：计量净工艺用水投入
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净可销售再生未锻轧铅
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_secondary_utilities`
- 来源：`eu-jrc-nfm-bref-2017`

###### 外购电力（`secondary_electricity`）

记录供应至设施的计量交流电，并声明电压以及电网或合同地理位置。

- 选定流：交流电供应
- 流属性/单位：Energy / MJ
- 数量规则：计量外购电力，必要时由 kWh 转为 MJ
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净可销售再生未锻轧铅
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_secondary_utilities`
- 来源：`eu-jrc-nfm-bref-2017`

###### 气态天然气（`secondary_natural_gas`）

记录废料预处理、冶炼、精炼或铸造设备中燃烧的天然气。

- 选定流：气态天然气 `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位：Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / Units of volume `93a60a57-a3c8-12da-a746-0800200c9a66` / m3
- 数量规则：按声明参考条件计量天然气
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净可销售再生未锻轧铅
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_secondary_utilities`
- 来源：`us-epa-ap42-secondary-lead-2010`; `eu-jrc-nfm-bref-2017`

###### 碳酸钠熔剂（`secondary_sodium_carbonate`）

记录用于铅膏脱硫、固硫或炉料熔剂的碳酸钠，并声明供应品级。

- 选定流：碳酸钠
- 流属性/单位：Mass / kg
- 数量规则：计量加入的碳酸钠产品质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 净可销售再生未锻轧铅
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_secondary_materials`
- 来源：`us-epa-ap42-secondary-lead-2010`; `eu-jrc-nfm-bref-2017`

###### 氢氧化钠精炼试剂（`secondary_sodium_hydroxide`）

记录用于铅膏处理或精炼的氢氧化钠，并声明溶液浓度、供应状态和工艺作用。

- 选定流：氢氧化钠 `e0abcced-0611-4c24-9290-5a2c5a0c4169`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：计量氢氧化钠产品质量，并保留有效成分浓度
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 净可销售再生未锻轧铅
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_secondary_materials`
- 来源：`us-epa-ap42-secondary-lead-2010`; `eu-jrc-nfm-bref-2017`

##### 废物流

不规定废物投入。若接收残余物作为进料，应以其具体身份、成分和进场处理状态单独记录。

##### 基本流

设施边界不规定基本流投入；燃烧空气按所选建模约定一致处理。

#### 输出

##### 产品流

###### 可销售再生未锻轧铅（`secondary_lead_product`）

本行是再生路线数据包的定量参考输出。

- 选定流：粗铅 `063889a6-fcdf-48f8-a229-992a07bc2b0a`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：按计量的净可销售产出归一化后为 1 kg
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：1 kg 净可销售再生未锻轧铅
- 基准类型：参考流（`reference_flow`）
- 证据类型：依据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_secondary_outputs`
- 来源：`un-cpc-3-0-structure-2025`; `us-epa-ap42-secondary-lead-2010`

##### 废物流

###### 再生铅冶炼渣（`secondary_lead_smelting_slag`）

记录离开再生过程的炉渣，并声明铅含量、固硫作用、回收状态和去向。

- 选定流：再生铅冶炼渣
- 流属性/单位：Mass / kg
- 数量规则：计量离开前景系统的炉渣质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 净可销售再生未锻轧铅
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_secondary_outputs`
- 来源：`us-epa-ap42-secondary-lead-2010`; `eu-jrc-nfm-bref-2017`

###### 再生铅精炼浮渣（`secondary_lead_refining_dross`）

记录离开再生精炼系统的浮渣，并声明成分、回收路线和去向。

- 选定流：再生铅精炼浮渣
- 流属性/单位：Mass / kg
- 数量规则：计量离开前景系统的浮渣质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 净可销售再生未锻轧铅
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_secondary_outputs`
- 来源：`us-epa-ap42-secondary-lead-2010`

##### 基本流

###### 直接化石源二氧化碳（`secondary_carbon_dioxide_fossil`）

记录场内焦炭及燃料燃烧或还原产生的直接化石源二氧化碳；排除燃料和电力的上游排放。

- 选定流：二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：计量直接释放，或以场址特定碳平衡与前景化石碳投入核对
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净可销售再生未锻轧铅
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_secondary_emissions`
- 来源：`eu-jrc-nfm-bref-2017`

###### 排入空气的二氧化硫（`secondary_sulfur_dioxide_air`）

记录经铅膏脱硫、固硫、洗涤、制酸和其他控制后的二氧化硫释放。

- 选定流：排入空气（未指定）的二氧化硫
- 流属性/单位：Mass / kg
- 数量规则：计量控制排放和无组织前景释放之和，且不得重复计数
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净可销售再生未锻轧铅
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_secondary_emissions`
- 来源：`us-epa-ap42-secondary-lead-2010`; `eu-jrc-nfm-bref-2017`

###### 排入空气的铅（`secondary_lead_air`）

记录从有组织排气筒和量化无组织源释放到空气中的铅。

- 选定流：铅 `4d9a8790-3ddd-11dd-91dc-0050c2490048`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：计量排入未指定空气区室的铅，包括已量化无组织排放
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净可销售再生未锻轧铅
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_secondary_emissions`
- 来源：`us-epa-ap42-secondary-lead-2010`; `eu-jrc-nfm-bref-2017`

###### 排入空气的颗粒物（`secondary_particulate_air`）

记录控制后排放的未指定粒径总颗粒物，并单独保留实测粒径组分。

- 选定流：排入空气的未指定粒径颗粒物
- 流属性/单位：Mass / kg
- 数量规则：计量排气筒及量化无组织源的总颗粒物释放
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净可销售再生未锻轧铅
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_secondary_emissions`
- 来源：`us-epa-ap42-secondary-lead-2010`; `eu-jrc-nfm-bref-2017`

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivision_first` | 共享作业和路线混合 | 只要记录允许，应细分原生与再生路线以及单独计量的精炼、硫回收和残余物回收；不得仅为避免细分而平均不同路线。 |  |
| `allocation_internal_recycling` | 内部铅、粉尘、炉渣和浮渣循环 | 内部循环交换不得计入外部清单总量，但应保留质量平衡所需的总记录；不得向内部循环分配独立负荷。 | `us-epa-ap42-primary-lead-1995`; `us-epa-ap42-secondary-lead-2010`; `eu-jrc-nfm-bref-2017` |
| `allocation_scrap_input` | 再生铅进料 | 对交付铅废料采用所选上游数据集，并在其边界内包括收集和预处理；不得在前景生产者内部另加替代原生铅的避免负荷抵扣。 |  |
| `allocation_coproducts` | 硫酸或其他可销售共产品 | 优先采用单独计量的细分或有文件支持的因果物理关系。若均不可行，则采用同期生产者大门价值进行经济分配，披露期间和价格基准并报告敏感性结果；无市场的残余物作为废物输出而非共产品。 |  |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | 流角色 | 记录类型 | 原始字段 | 采集方法 | 单位 | 频率 | 时间覆盖 | 场址范围 | 汇总规则 | 质量证据 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_primary_materials` | `primary_unwrought_lead` | 精矿、焦炭、熔剂和精炼试剂 | 地磅、批次加料、化验及采购记录 | gross_mass; tare_mass; moisture; Pb_assay; material_grade; active_content; batch_id | 按物料核对交付、退回、库存和加料量 | kg | 每次交付和炉次 | 完整报告期 | 生产者边界内全部原生路线单元 | 按物料汇总净消耗质量；分别保留干质量和含铅量计算 | 经校准衡器；实验室证书；库存核对；批次日志 |
| `cp_primary_utilities` | `primary_unwrought_lead` | 氧气、水、电力和天然气 | 公用工程仪表和发票 | meter_open; meter_close; import; export; reference_conditions; NCV; allocation_key | 将分表合计与设施发票和共享服务分配核对 | m3; kg; kWh; MJ | 连续或计费周期 | 完整报告期 | 全部前景原生作业及已记录共享服务 | 净输入减经核实输出；仅按第 4 节转换单位 | 仪表校准；发票；参考条件和低位热值记录；分配工作表 |
| `cp_primary_outputs` | `primary_unwrought_lead` | 铅、硫酸、炉渣、浮渣、锍和黄渣 | 产品衡器、出货记录、残余物联单和化验 | output_mass; grade; composition; destination; recovery_status; batch_id | 核对产出、出货、库存、内部循环和废弃输出 | kg | 每批或每次出货 | 完整报告期 | 全部前景原生输出 | 按身份和去向汇总外部输出；内部循环单列 | 衡器校准；分析证书；出货和废物记录；库存核对 |
| `cp_primary_emissions` | `primary_unwrought_lead` | 直接 CO2、SO2、铅和颗粒物 | 连续/定期监测、经验证烟道测试、无组织估算及燃料/碳平衡 | source_id; pollutant; concentration; gas_flow; duration; capture_status; fuel_carbon; uncertainty | 按排放源计算质量释放并核对捕集和旁路事件 | kg | 监测间隔及每次应报告事件 | 包括启停和异常事件的完整报告期 | 全部有组织和无组织前景源 | 每个源的直接释放只汇总一次；排除捕集回用和上游排放 | 校准和 QA 记录；测试报告；运行小时；碳硫平衡；不确定性说明 |
| `cp_secondary_materials` | `secondary_unwrought_lead` | 铅废料、焦炭、石灰石、钢铁废碎料、碳酸钠和氢氧化钠 | 地磅、分选、化验、批次加料和采购记录 | net_mass; moisture; Pb_content; sulfur; plastics; contamination; material_grade; batch_id | 按物料核对交付、拒收、库存、分离和加料量 | kg | 每次交付和炉次 | 完整报告期 | 生产者边界内全部再生路线单元 | 按具体物料汇总净消耗质量；分离的非铅组分单列 | 经校准衡器；分选记录；实验室化验；库存核对；批次日志 |
| `cp_secondary_utilities` | `secondary_unwrought_lead` | 氧气、水、电力和天然气 | 公用工程仪表和发票 | meter_open; meter_close; import; export; reference_conditions; NCV; allocation_key | 将分表合计与设施发票和共享服务分配核对 | m3; kg; kWh; MJ | 连续或计费周期 | 完整报告期 | 全部前景再生作业及已记录共享服务 | 净输入减经核实输出；仅按第 4 节转换单位 | 仪表校准；发票；参考条件和低位热值记录；分配工作表 |
| `cp_secondary_outputs` | `secondary_unwrought_lead` | 铅、炉渣和浮渣 | 产品衡器、出货记录、残余物联单和化验 | output_mass; grade; composition; destination; recovery_status; batch_id | 核对产出、出货、库存、内部循环和废弃输出 | kg | 每批或每次出货 | 完整报告期 | 全部前景再生输出 | 按身份和去向汇总外部输出；内部循环单列 | 衡器校准；分析证书；出货和废物记录；库存核对 |
| `cp_secondary_emissions` | `secondary_unwrought_lead` | 直接 CO2、SO2、铅和颗粒物 | 连续/定期监测、经验证烟道测试、无组织估算及燃料/碳平衡 | source_id; pollutant; concentration; gas_flow; duration; capture_status; fuel_carbon; uncertainty | 按排放源计算质量释放并核对控制、旁路和后燃烧事件 | kg | 监测间隔及每次应报告事件 | 包括启停和异常事件的完整报告期 | 全部有组织和无组织前景源 | 每个源的直接释放只汇总一次；排除捕集回用和上游排放 | 校准和 QA 记录；测试报告；运行小时；碳硫平衡；不确定性说明 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | 每个清单行 | 归一化数量 = 报告期交换量 / 报告期净可销售未锻轧铅质量 | 交换总量；净可销售铅产出 | 每 1 kg 参考产品的数量 |  |
| `calc_dry_concentrate` | `primary_lead_concentrate` | 干质量 = 收到状态质量 ×（1 - 实测水分分数）；含铅量 = 干质量 × 干基 Pb 化验值 | 收到状态质量；水分；Pb 化验值 | 干精矿质量和含铅量 |  |
| `calc_scrap_contained_lead` | `secondary_lead_scrap` | 含铅量 = 各接收废料组分质量 × 其实测 Pb 含量；仅汇总接收的含铅组分 | 组分质量；Pb 化验；拒收记录 | 再生进料含铅量 |  |
| `calc_direct_emission_mass` | 直接 SO2、铅和颗粒物 | 源释放量 = 浓度 × 干烟气流量 × 运行时间，仅按有文件支持的参考条件转换进行调整；汇总排气筒源和单独量化的无组织源 | 监测数据；烟气流量；持续时间；参考条件 | 污染物释放质量 | `us-epa-ap42-primary-lead-1995`; `us-epa-ap42-secondary-lead-2010`; `eu-jrc-nfm-bref-2017` |
| `calc_carbon_balance` | 无连续 CO2 质量监测时的直接化石源 CO2 | 采用有文件支持的碳平衡，将场址特定化石碳消耗及保留在产品/残余物中的实测碳转换为直接化石源 CO2；未经来源审查不得采用通用排放因子。 | 燃料和焦炭碳；保留碳；实测烟气信息 | 直接化石源 CO2 质量 |  |
| `calc_mass_balance` | 每条路线 | 质量平衡闭合率 =（已识别外部输出 + 直接质量释放 + 库存变化）/ 已识别外部投入；报告未核算质量并调查重大差异，不得强行闭合。 | 物料投入；产品；废物；排放；期初和期末库存 | 路线质量平衡证据 |  |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_product_identity` | 参考产品 | 保留产品牌号、铅含量、完整声明的合金/杂质成分、铸造形态、路线、批次或期间以及符合性证据。 | 分析证书；产品规范；批次和出货记录 |
| `dq_feed_identity` | 含铅进料 | 报告进料来源、物态、水分、铅含量、硫、相关杂质以及再生/原生状态；不得以总括进料标签代替。 | 供应商证书；采样计划；实验室化验；分选记录 |
| `dq_temporal_coverage` | 所有行 | 覆盖有代表性的连续报告期并包括启停、维护、旁路和异常事件；披露缺口和外推。 | 仪表完整性报告；生产日历；事件日志 |
| `dq_mass_balance` | 每条路线 | 核对投入、产品、内部循环、残余物、排放和库存变化中的铅及总质量；调查而非隐匿无法解释的差异。 | 铅平衡；总质量平衡；库存核对；纠正措施说明 |
| `dq_emission_coverage` | 直接排放 | 包括有组织排气筒释放和量化无组织释放，识别粒径组分和区室，并排除捕集后返回过程的物料。 | 监测计划；烟道测试；无组织排放方法；控制设备记录 |
| `dq_upstream_representativeness` | 外购投入 | 使用与交付地理位置、牌号、技术和参考条件相匹配的上游数据集，并披露替代。 | 数据集选择日志；供应商数据；代表性评价 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validate_reference_identity` | 参考流 | 确认定量参考输出为未锻轧铅，采用经核实的粗铅 UUID 和 Mass/kg 支撑链，并声明全部必需限定信息。 | `un-cpc-3-0-structure-2025` |
| `validate_route_selection` | 过程图 | 要求声明原生、再生或明确实测的场址混合路线；拒绝默默合并路线默认值或不兼容炉型情景的数据集。 | `eu-jrc-nfm-bref-2017` |
| `validate_inventory_atomicity` | 清单 | 要求每个交换保留单一化学或物理身份、方向、流类型、属性、单位、路线条件和去向；拒绝总括公用工程、物料、废物或排放。 |  |
| `validate_uuid_support` | 带 UUID 及未解决行 | 按公开 state 100 重新核查每个最终 UUID 的中英文 baseName、流类型、分类、属性和单位组；未解决行必须保持准确身份，并在发布前获得经审查 UUID。 |  |
| `validate_no_double_counting` | 公用工程和排放 | 确认前景直接 CO2、SO2、铅和颗粒物不含上游供应链排放，且内部粉尘、炉渣、浮渣或金属回用循环不计为外部流。 | `us-epa-ap42-primary-lead-1995`; `us-epa-ap42-secondary-lead-2010`; `eu-jrc-nfm-bref-2017` |
| `validate_balance_and_coverage` | 数据集完整性 | 审查铅平衡、总质量平衡、时间覆盖、库存变化、缺失记录、控制旁路、共产品分配及废物去向；未解决差异或无文件排除项导致校验失败。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 用于生产者大门未锻轧铅的 `secondary_dataset` 或 `background_dataset` |
| downstream_use | 当牌号和路线匹配时，作为铅加工、合金、蓄电池、建筑、屏蔽、化学品或其他下游生命周期模型的前景投入 |
| allowed_use | 需要生产者大门处 1 kg 已声明牌号未锻轧铅，且路线、地理、技术、分配及再生含量约定相匹配的产品系统 |
| excluded_use | 铅矿石/精矿、铅废料、铅氧化物、铅半成品、铅制品、蓄电池、身份不明混合铅产品，或未增加上游/下游过程的从摇篮到坟墓声明 |
| required_metadata | 产品牌号和成分；粗制/精炼/合金状态；铸造形态；原生/再生/混合路线；进料来源；炉型和精炼技术；地理位置；报告期；分配方法；再生含量约定；控制技术；数据源；未解决替代 |
| required_quality_disclosure | 初级数据占比；仪表和化验覆盖；铅和总质量平衡结果；时间缺口；无组织排放方法；不确定性；共产品处理；残余物去向；上游数据集代表性 |
| update_trigger | 进料组合、原生/再生占比、炉型或精炼技术、产品牌号、硫或粉尘控制、能源供应、分配方法、残余物去向、报告期或重大质量平衡/质量发现发生变化 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3-0-structure-2025` | `official_guidance` | 联合国统计司，CPC Version 3.0 Structure，2025-06-30，https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv（检索于 2026-09-04） | 官方分类身份 CPC 41441，Lead, unwrought |
| `us-epa-ap42-primary-lead-1995` | `official_guidance` | 美国环境保护署，AP-42 Section 12.6, Primary Lead Smelting，1995 年 1 月，https://www.epa.gov/sites/production/files/2020-11/documents/c12s06.pdf（检索于 2026-09-04） | 原生路线过程分解、具体炉料、精炼/铸造、残余物和直接空气排放候选 |
| `us-epa-ap42-secondary-lead-2010` | `official_guidance` | 美国环境保护署，AP-42 Section 12.11, Secondary Lead Processing，1986 年 10 月，1995 年 1 月重排版，表格于 2010 年 9 月更新，https://www.epa.gov/sites/production/files/2020-11/documents/c12s11_2010.pdf（检索于 2026-09-04） | 再生路线废料预处理、冶炼、精炼/铸造、炉料、残余物和直接空气排放候选 |
| `eu-jrc-nfm-bref-2017` | `official_guidance` | 欧盟委员会联合研究中心，Best Available Techniques Reference Document for the Non-Ferrous Metals Industries，2017，https://bureau-industrial-transformation.jrc.ec.europa.eu/sites/default/files/2020-01/JRC107041_NFM_bref2017.pdf（检索于 2026-09-04） | 原生/再生路线区分、直接冶炼与蓄电池回收变体、公用工程、残余物、排放、控制及前景限定信息 |
