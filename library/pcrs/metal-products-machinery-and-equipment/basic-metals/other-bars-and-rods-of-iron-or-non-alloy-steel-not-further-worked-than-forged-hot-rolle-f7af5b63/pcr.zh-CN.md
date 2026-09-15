---
pcr_id: pcr.metal-products-machinery-and-equipment.basic-metals.other-bars-and-rods-of-iron-or-non-alloy-steel-not-further-worked-than-forged-hot-rolle-f7af5b63
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 除锻造、热轧、热拉拔或挤压外未经进一步加工的其他铁或非合金钢条、杆，但包括轧制后扭曲的条、杆

## 1. 范围与适用性

本 PCR 适用于直条交货或其他非不规则盘卷交货的铁或非合金钢条、杆，其最终材料成形工序为锻造、热轧、热拉拔、热挤压或轧制后扭曲。本 PCR 覆盖从已声明钢质原料到热加工设施门口可销售条、杆产品的前景转化过程。

本 PCR 不包括不规则盘卷产品、不锈钢或其他合金钢产品、开口型材、钢丝、冷成形或冷精整条杆，以及经机械加工、涂覆、镀层或其他下游制造进一步加工的条杆。数据集应明确钢号、几何形状、热加工路线、表面状态、交货形式以及是否采用轧制后扭曲。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.basic-metals.other-bars-and-rods-of-iron-or-non-alloy-steel-not-further-worked-than-forged-hot-rolle-f7af5b63 |
| classification_refs | CPC 3.0: 41242 |
| covered_products | 除锻造、热轧、热拉拔或挤压外未经进一步加工的其他铁或非合金钢条、杆，包括轧制后扭曲的条、杆 |
| excluded_products | 不规则盘卷热轧产品；不锈钢或其他合金钢条杆；开口型材；钢丝；冷精整产品；经涂覆、镀层、机械加工或其他方式进一步加工的产品 |
| representative_product | 直条定尺、未经涂覆、可供装运的热加工铁或非合金钢条或杆 |
| production_route | 声明的路线：锻造、热轧、热拉拔、热挤压或热轧后扭曲；应披露路线特定工序和燃料 |
| market_state | 经冷却、矫直、切割、检验和常规无涂层精整后，在热加工设施门口的可销售产品净质量 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 提供处于已声明热加工状态的无涂层铁或非合金钢条或杆 |
| How much | 1,000 kg 可销售产品净质量 |
| How well | 符合已声明的钢号、尺寸、尺寸公差、表面状态、力学性能规范和交货形式 |
| How long or cycle | 在热加工设施门口交付的一个生产批次；不表示使用阶段持续时间 |
| reference_flow_link | `reference_product` |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1,000 kg |
| 参考产品流 | 除锻造、热轧、热拉拔或挤压外未经进一步加工的其他铁或非合金钢条、杆，但包括轧制后扭曲的条、杆 |
| 参考流属性 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量单位 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 铁或非合金钢钢号及成分规范；截面形状和公称尺寸；尺寸公差；热加工路线；再加热技术；表面状态；直条长度或其他交货形式；轧制后扭曲状态；产品净质量；设施地理位置；生产期；上游炼钢路线及再生含量基准 |

构建前景数据包时，`必需限定信息` 中列出的信息应在数据集元数据、过程说明、参考流备注、产品说明或等效数据包字段中明确声明。缺失必需限定信息的数据包视为参考流定义不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | 参考产品和基于质量的材料流 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 使用去除切头尾、氧化铁皮和不合格品后的干态可销售净质量；应采用地磅、经认证的秤或经核对的生产台账质量。 |
| `energy_conversion` | 交流电 | 净热值 `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | 原始记录保留以 kWh 表示的计量电量，并按 1 kWh = 3.6 MJ 转换为 MJ；披露供应商组合、地理位置、电压、技术和交付边界。 |
| `gas_volume_conditions` | 气态天然气 | 体积 `93a60a56-a3c8-22da-a746-0800200c9a66` | m3 | 记录仪表参考温度、压力、压缩因子约定以及数值为标准体积还是实际体积；不得合并不同参考条件下的体积。 |
| `water_balance` | 工艺水和除鳞废水 | 体积 `93a60a56-a3c8-22da-a746-0800200c9a66` | m3 | 区分取水、补充水、循环水、耗水和排放废水；只有跨越产品系统边界的补充水计作输入。 |

## 5. 系统边界

前景边界始于热加工设施接收的、分别识别的钢坯、初轧坯、棒坯或等效铁/非合金钢原料。边界包括实际发生的原料修整、加热或再加热、除鳞、已声明热加工路线、路线特定中间加热或后加热、冷却、矫直、切割、常规无涂层精整、检验、场内物料搬运、直接相关的排放控制，以及可归属于产品的工艺废水处理。

上游炼钢、外购能源和供水以及场外废物处理通过上游或下游数据集链接。下游机械加工、冷精整、涂覆、制造、设施门口之后的配送、使用和寿命终结阶段不在边界内。资本品、研发、商务差旅、行政活动、事故和泄漏不纳入，除非研究目标明确要求纳入。

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 每批接收钢质原料的质量、钢号、成分规范、几何形状、相关时的温度、表面状态、供应商及上游数据集身份 |
| starting_condition_role | 接收原料为前景转化输入；上游炼钢负荷由链接数据集提供，不在热加工过程中重复建立 |
| product_classification_scope | 处于 CPC 41242 热加工且未经进一步加工市场状态的铁或非合金钢条、杆；分类仅为辅助语境，不构成规范 PCR 身份 |
| recursive_input_rule | 已属于同一产品类别的外购输入应作为带有自身数据集的独立上游产品流，不得与产品净输出合并，也不得计作原生半成品原料 |
| upstream_dataset_requirement | 钢质原料、电力、天然气、供水和场外处理应使用供应商特定数据集或在技术和地理方面具有代表性的数据集；披露炼钢路线及再生含量或废钢核算方法 |
| disclosure | 声明纳入的热加工路线和工序、设施地理位置、生产期、燃料和供电、水循环边界、内部废钢和氧化铁皮循环、外部回收、排放控制范围、截断及分配选择 |

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_foreground_steps` | 前景热加工过程 | 纳入从接收钢质原料到可销售条、杆产品净输出的所有已声明场内工序，包括直接相关的公用工程、排放控制和废水处理。 | `eu-fmp-bat-2022`; `eu-sf-bref-2024`; `worldsteel-lci-methodology-2017` |
| `boundary_route_disclosure` | 路线选择 | 声明产品属于锻造、热轧、热拉拔、热挤压或轧制后扭曲，并依据生产证据把每项路线条件交换标记为适用或不适用。 | `un-cpc-3-0-structure-2025`; `eu-fmp-bat-2022`; `eu-sf-bref-2024` |
| `boundary_no_double_counting` | 链接的上游和再循环数据集 | 将上游炼钢以及任何再循环或避免负荷模块与前景热加工分开，防止废钢负荷或寿命终结抵扣重复计算。 | `worldsteel-lci-methodology-2017` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `hot_working_and_finishing` | 铁或非合金钢条、杆的一体化热加工与精整 | `required` | 纳入从原料接收到可销售产品净输出的实际路线工序；只有生产记录支持时才记录路线特定交换 | 前景生产 | 1,000 kg 可销售参考产品净质量 |

### 过程：一体化热加工与精整（`hot_working_and_finishing`）

#### 输入

##### 产品流

###### 钢质原料（`steel_feedstock`）

接收的钢坯、初轧坯、棒坯或等效钢质工件作为一个具有特定钢号和状态的产品输入记录。具体数据集使用性质显著不同的钢号或上游炼钢路线时，应拆分为不同的行。

- 选定流：铁或非合金钢热加工原料
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg；单位组 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：分配给参考产品批次的实测接收质量，扣除加工前退回的原料
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 可销售参考产品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_mass_balance`
- 来源：`worldsteel-lci-methodology-2017`

###### 交流电（`electricity_input`）

跨越设施边界、用于加热、传动、泵、风机、切割、矫直、控制和直接相关处理的电力，作为一个计量产品输入记录。所选 TianGong 流应附供应商和场址电压限定信息。

- 选定流：交流电 `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- 流属性/单位：净热值 `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ；单位组 `93a60a57-a3c8-11da-a746-0800200c9a66`
- 数量规则：分配给产品批次的计量电量，并从 kWh 转换为 MJ
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 可销售参考产品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_electricity_metering`
- 来源：`eu-fmp-bat-2022`; `eu-sf-bref-2024`

###### 气态天然气（`natural_gas_input`）

只有天然气跨越设施边界并用于已声明路线内直接相关的炉窑、加热器或热处理时，才记录本行。不得在本行用其他气体或液体燃料替代。

- 选定流：气态天然气 `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位：体积 `93a60a56-a3c8-22da-a746-0800200c9a66` / m3；单位组 `93a60a57-a3c8-12da-a746-0800200c9a66`
- 数量规则：分配给产品批次的计量天然气体积；只有记录证明未使用天然气时才报告零或不适用
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：在已声明气体体积参考条件下，每 1,000 kg 可销售参考产品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_natural_gas_metering`
- 来源：`eu-fmp-bat-2022`; `eu-sf-bref-2024`

###### 工艺补充水（`process_water`）

淡水或外部供应的补充水跨越边界用于除鳞、冷却、淬火或直接相关处理时，记录本行。设施内循环水不得再次计作输入。水源、水质、交付地域、密度基准和计量边界应作为前景限定信息保留。

- 选定流：工艺用水 `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg；单位组 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：分配给产品批次的计量补充水，不包括内部循环量；体积记录应采用已说明参考条件下的水密度换算为 kg
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 可销售参考产品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_water_balance`
- 来源：`eu-fmp-bat-2022`; `worldsteel-lci-methodology-2017`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 参考条或杆（`reference_product`）

参考产品是经冷却、矫直、切割、检验及装运所需常规精整后，符合要求的无涂层铁或非合金钢条、杆净质量。

- 选定流：其他热加工铁或非合金钢条、杆
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg；单位组 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：按参考流归一化为 1,000 kg 可销售产品净质量
- 数值来源模式：固定值（`fixed_value`）
- 适用范围：通用（`generic`）
- 归一化基准：1,000 kg 可销售参考产品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：方法公式（`method_formula`）
- 来源：`un-cpc-3-0-structure-2025`; `worldsteel-lci-methodology-2017`

##### 废物流

###### 切头尾钢废料（`steel_crop_scrap`）

离开前景过程、进入外部回收或处理的铁或非合金钢切头尾及不合格件，应与内部返回料分开记录。改按产品流处理时，需有市场和质量证据。钢号、切头尾或不合格件来源、污染状态和去向均作为前景限定信息保留。

- 选定流：铁钢成形废料 `11d74955-1634-4ef7-94e9-b9e90783c510`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg；单位组 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：分配给产品批次的外运废钢实测质量；不将内部循环件计作跨边界输出
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 可销售参考产品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_mass_balance`
- 来源：`worldsteel-lci-methodology-2017`

###### 热加工氧化铁皮（`mill_scale`）

再加热、除鳞、热加工或冷却期间实际脱落的氧化铁皮，在跨越前景边界时作为一种独立废物输出记录。所选 UUID 仅适用于热轧和除鳞产生、并从冲渣废水中分离后收集的氧化铁皮；路线或分离状态不同时，应另行核验精确流。

- 选定流：氧化铁皮 `aad763e2-78ab-4fcb-8a3b-8d8525c9e6ca`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg；单位组 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：外运回收或处理的经称量或核对的干质量；氧化铁皮在离开边界前仍保留在内部水处理存量中时不计作输出
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 可销售参考产品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_mass_balance`
- 来源：`eu-fmp-bat-2022`

###### 除鳞废水（`descaling_wastewater`）

含悬浮氧化铁的除鳞和冷却废水，仅在离开前景水处理边界时记录。内部循环水不计入本输出。

- 选定流：含悬浮氧化铁的除鳞废水
- 流属性/单位：体积 `93a60a56-a3c8-22da-a746-0800200c9a66` / m3；单位组 `93a60a57-a3c8-12da-a746-0800200c9a66`
- 数量规则：经内部循环和处理后，分配给产品批次的计量排放体积
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 可销售参考产品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_water_balance`
- 来源：`eu-fmp-bat-2022`; `worldsteel-lci-methodology-2017`

##### 基本流

###### 向空气排放的化石源二氧化碳（`fossil_co2_air`）

分配给纳入热加工路线的燃烧设备直接排放化石源二氧化碳，作为向空气排放的基本流记录。可能存在的生物源二氧化碳不得计入本行。

- 选定流：二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg；单位组 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：按排放源监测或有记录的燃料碳平衡得到并分配给产品批次的质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 可销售参考产品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_direct_air_emissions`
- 来源：`eu-fmp-bat-2022`; `eu-sf-bref-2024`

###### 向空气排放的 PM10（`pm10_air`）

对可归属于加热、除鳞、锻造、轧制、切割和精整的有组织排放及量化无组织排放，记录空气动力学直径不超过 10 微米的颗粒物。

- 选定流：空气动力学直径不超过 10 微米的颗粒物
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg；单位组 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：分配给产品批次的监测或质量平衡排放；原始记录应分别保留有组织和无组织排放量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 可销售参考产品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_direct_air_emissions`
- 来源：`eu-fmp-bat-2022`; `eu-sf-bref-2024`

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivide` | 产品特定热加工负荷 | 在实施任何分配前，优先按生产线、炉窑、路线、钢号生产期和产品批次进行计量或工程细分，以避免分配。 | `worldsteel-lci-methodology-2017` |
| `allocation_mass_reconcile` | 原料、产品、废钢和氧化铁皮 | 核对钢质质量平衡。内部返回料留在边界内且不接受第二次负荷；跨越边界的输出按实测质量和去向分别报告。 | `worldsteel-lci-methodology-2017` |
| `allocation_recovered_outputs` | 外部回收废钢和氧化铁皮 | 不在前景交换数量中嵌入避免负荷抵扣。下游研究采用系统扩展或再循环抵扣时，应单独报告方法、被替代功能、地理位置、质量损失和计算，并防止重复计算。 | `worldsteel-lci-methodology-2017` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_material_mass_balance` | `hot_working_and_finishing` | `steel_feedstock`; `steel_crop_scrap`; `mill_scale`; 参考产品核验 | 地磅、经认证的秤和生产台账 | lot_id; grade; route; feedstock_mass_kg; net_product_mass_kg; external_scrap_mass_kg; internal_return_mass_kg; dry_scale_mass_kg; destination | 记录经校准的称量凭证，并与批次生产记录核对 | kg | 每批采集，按月汇总 | 连续生产至少覆盖连续 12 个代表性月份；批次生产覆盖完整生产期 | 所有纳入生产线及分配给声明产品的共享搬运 | 按批次汇总跨边界质量，内部返回料单列；每项输出归一化至 1,000 kg 可销售产品净质量 | 秤具校准、称量凭证与台账核对、去向记录和签字确认的质量平衡审查 |
| `cp_electricity_metering` | `hot_working_and_finishing` | `electricity_input` | 结算电表/分表读数和分配日志 | meter_id; timestamp; opening_kWh; closing_kWh; line_status; route; lot_mass_kg; supplier; geography; voltage; technology; delivery_boundary | 使用经校准的时间间隔表或班次电表；扣除有记录的非生产负荷，并按有因果关系的运行数据分配共享负荷 | kWh，转换为 MJ | 每班或每批采集，按月汇总 | 至少连续 12 个代表性月份或完整生产期 | 所有纳入设备和直接相关处理 | 汇总分配电量，乘以 3.6 MJ/kWh，并归一化至 1,000 kg 可销售产品净质量 | 电表校准、账单核对、分配工作表、停机日志及电压/供应商证据 |
| `cp_natural_gas_metering` | `hot_working_and_finishing` | `natural_gas_input` | 炉窑气表和燃料账单 | meter_id; timestamp; opening_m3; closing_m3; reference_temperature; reference_pressure; compressibility_basis; furnace_id; route; lot_mass_kg | 使用经校准的炉窑或场址仪表并与账单核对；依据燃烧时间和产量分配共享用量 | 已声明条件下的 m3 | 每班或每批采集，按月汇总 | 至少连续 12 个代表性月份或完整生产期 | 每台纳入的天然气炉窑或加热器 | 在同一已声明参考条件下汇总体积，并归一化至 1,000 kg 可销售产品净质量 | 仪表校准、账单核对、参考条件说明和炉窑运行日志 |
| `cp_water_balance` | `hot_working_and_finishing` | `process_water`; `descaling_wastewater` | 进水、补充水、循环水、排水和生产仪表 | meter_id; timestamp; make_up_m3; water_density_kg_per_m3; density_reference_conditions; recirculated_m3; discharge_m3; treatment_status; route; lot_mass_kg | 读取经校准的水表，记录质量换算所用的密度基准，并核对补充水、循环水、蒸发/耗水和排水 | 水表处为 m3，按有记录的密度换算后为 kg | 每日或每个生产期采集，按月汇总 | 至少连续 12 个代表性月份或完整生产期 | 所有纳入的除鳞、冷却、淬火和废水处理系统 | 仅计算跨边界补充水和排水；工艺用水输入经密度换算后以 kg 报告，废水输出以 m3 报告；按实测生产线流量或有记录的因果产量分配共享系统，并归一化至 1,000 kg 产品 | 水表校准、密度与参考条件记录、水量平衡闭合、排放记录和处理系统运行日志 |
| `cp_direct_air_emissions` | `hot_working_and_finishing` | `fossil_co2_air`; `pm10_air` | 连续或周期监测及有记录的燃料碳平衡 | source_id; pollutant; concentration; gas_flow; sampling_duration; standard_conditions; channelled_or_fugitive; fuel_carbon_mass; oxidation_basis; operating_status; route; lot_mass_kg | 采用排放源特定监测或有记录的燃料碳平衡；分别保留有组织和无组织排放结果 | 每个报告期 kg | 连续汇总或每个合规测试期采集；按月核对 | 至少连续 12 个代表性月份并覆盖代表性运行模式 | 所有可归属的加热、除鳞、锻造、轧制、切割、精整及治理排放源 | 汇总产品运行期间有效的排放源特定质量，按因果关系分配共享排放源，并归一化至 1,000 kg 产品 | 监测方法、仪器校准、采样报告、标准条件换算、燃料证书和运行日志 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_normalize_reference` | 每个可变清单行 | 每参考流数量 = 分配的报告期数量 / 可销售产品净质量 x 1,000 kg | 分配的流数量；可销售产品净质量 | 每 1,000 kg 产品的归一化行数量 | `worldsteel-lci-methodology-2017` |
| `calc_electricity_mj` | `electricity_input` | electricity_MJ = metered_electricity_kWh x 3.6 | 计量 kWh | MJ 电力 |  |
| `calc_material_balance` | 含钢质量流 | unexplained_mass = feedstock_mass - net_product_mass - external_scrap_mass - dry_scale_mass - other separately identified steel-bearing outputs；调查差额，不得强制闭合 | 批次质量记录 | 已披露的质量平衡差额和闭合率 |  |
| `calc_water_boundary` | `process_water`; `descaling_wastewater` | 分别报告补充水输入和最终排水；不得把内部循环水加入任一跨边界数量；采用有记录的密度和参考条件将补充水体积换算为质量 | 补充水体积、水密度、密度参考条件、循环水、估算耗水、排水 | kg 工艺用水输入和 m3 废水输出 | `eu-fmp-bat-2022` |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | 参考产品和钢质原料 | 保留钢号/成分、尺寸、公差、路线、表面状态、交货形式、批次身份和上游数据集链接。 | 材质证明、产品规范、检验记录和供应商数据集标识 |
| `dq_technology` | 热加工过程 | 识别炉窑和成形技术、路线顺序、纳入的精整、燃料、供电、排放控制、水循环及共享服务分配。 | 工艺流程图、设备台账、运行日志、仪表图和分配工作表 |
| `dq_time` | 所有前景行 | 连续生产使用具有代表性的 12 个月；批次生产覆盖完整生产期，并披露代表性限制。 | 带日期记录、生产日历、停机及异常运行日志 |
| `dq_completeness` | 清单 | 核对每项已知含钢输入和输出，并记录每项排除的跨边界交换及其估计重要性；不得用一般截断规则省略已知危险或受监管排放。 | 质量平衡闭合、交换登记表、截断评估和审查签字 |
| `dq_measurement` | 仪表、秤具和排放监测 | 使用经校准仪器，或将次级记录与账单和生产台账核对；保留不确定性及标准条件换算。 | 校准证书、账单、核对工作表、监测报告和不确定性说明 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validate_identity` | 数据集身份 | 铁/非合金钢成分、产品几何形状、热加工路线、未经进一步加工状态或必需参考流限定信息缺失或与声明产品冲突时，拒绝数据集。 | `un-cpc-3-0-structure-2025` |
| `validate_reference_amount` | 参考流 | 确认参考输出恰为 1,000 kg 可销售产品净质量，且每个可变行采用相同归一化分母。 | `worldsteel-lci-methodology-2017` |
| `validate_route_rows` | 路线条件交换 | 每项已声明路线特定燃料、水、废物和排放行均需适用性证据；不得用合并的公用工程、废物或排放类别替代未计量的原子交换。 | `eu-fmp-bat-2022`; `eu-sf-bref-2024` |
| `validate_mass_balance` | 含钢流 | 分别报告原料、产品净质量、外部废钢、内部返回料、氧化铁皮和其他含钢输出，并调查无法解释的质量差额。 | `worldsteel-lci-methodology-2017`; `eu-fmp-bat-2022` |
| `validate_double_counting` | 上游和再循环建模 | 确认上游炼钢、内部废钢循环、外部回收和寿命终结抵扣没有重复计算。 | `worldsteel-lci-methodology-2017` |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 完成方法审查并发布后可作为 `secondary_dataset` 或 `background_dataset` |
| downstream_use | 与有代表性的上游钢、能源、水和处理数据集结合，用于钢产品从摇篮到大门建模；只有路线、钢号、地理位置、时期、分配和数据质量等效时才用于前景比较 |
| allowed_use | 在已声明地理、技术、钢号和市场状态范围内，用于产品碳足迹、环境足迹、EPD 支持研究、供应链筛选和生命周期模型 |
| excluded_use | 不得直接代表不规则盘卷、合金钢或不锈钢、冷精整或涂覆产品、下游制成品、使用阶段功能；没有研究特定功能单位和审查时不得用于公开比较性论断 |
| required_metadata | PCR id 和版本；产品钢号和成分；尺寸和公差；路线和设备；表面及交货状态；设施地理位置；生产期；上游炼钢路线和再生含量基准；供应商/电压/燃料限定信息；分配和截断 |
| required_quality_disclosure | 一手数据占比；时间、地理和技术代表性；仪表和秤具覆盖；质量平衡闭合；水边界；排放监测方法；未解决流身份；不确定性；排除项；外部处理和再循环方法 |
| update_trigger | 钢号组合、路线、炉窑或成形技术、燃料或供电、水系统、排放控制、设施地理位置、分配/再循环方法或产品规范发生实质变化，或前景数据超过五年时 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3-0-structure-2025` | `official_guidance` | 联合国统计司，*CPC 第 3.0 版结构，2025 年 6 月 30 日*，https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv（检索日期：2026-09-03） | 产品分类身份、包含的热加工状态和未经进一步加工边界 |
| `eu-fmp-bat-2022` | `official_guidance` | 欧盟委员会，《欧盟委员会实施决定（EU）2022/2110》，https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32022D2110（检索日期：2026-09-03） | 热轧定义、过程分解、直接排放和水系统范围及监测语境 |
| `eu-sf-bref-2024` | `official_guidance` | 欧盟委员会联合研究中心，*锻造与铸造行业最佳可行技术参考文件*，EUR 40127，DOI: 10.2760/4805267（检索日期：2026-09-03） | 锻造路线过程分解、加热、精整、冷却和直接相关环境控制 |
| `worldsteel-lci-methodology-2017` | `official_guidance` | 世界钢铁协会，*生命周期清单方法报告*，2017，https://worldsteel.org/media/publications/lci-report-2017-pdf/?do_download_id=7f96813a-3756-4842-8dbc-38ce201f2914（检索日期：2026-09-03） | 声明单位、系统边界、辅助过程、共产品处理、再循环披露和数据质量 |
| `cfa-lca-database-guideline-appendix` | `official_guidance` | 碳足迹联盟，*LCA 数据库指南第六章附录*，https://www.carbonfootprint.network/en/docs/cifa-guidelines/lca-database-guideline/chapter-6-appendix/（检索日期：2026-09-03） | 经核验的 CPC 41242 中文产品术语 |
