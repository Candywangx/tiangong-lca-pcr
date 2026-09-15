---
pcr_id: pcr.metal-products-machinery-and-equipment.basic-metals.platinum-unwrought-or-in-semi-manufactured-forms-or-in-powder-form
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 未锻造、半制成或粉末状的铂

## 1. 范围与适用性

本 PCR 适用于生产设施交付的未锻造、半制成或粉末状商品铂金属。它支持以前景精炼与成形数据为主体的数据集，其声明起始条件是已化验的含铂精炼原料批次。只有披露上游经历及负荷处理方法后，原生和再生原料路线才可适用。

边界包括原料接收、均化、取样和化验；适用的热预处理或熔炼；湿法或火法冶金富集与分离；最终还原或热解制得金属；提纯；贵金属内部回收；废水和残渣管理；以及达到所声明市场形态所需的成形操作。边界终点为放行的铂产品离开工厂大门。

未经精炼转化即销售的铂矿石和精矿、铂化合物、催化剂和催化剂制品、珠宝首饰、已制成的终端用品、废料和碎料，以及钯、铑、钌、铱、锇、金、银或贱金属产品均不属于参考产品边界。共同生产的其他金属仍须作为共产品报告。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.basic-metals.platinum-unwrought-or-in-semi-manufactured-forms-or-in-powder-form |
| classification_refs | CPC 3.0 `41330` — Platinum, unwrought or in semi-manufactured forms, or in powder form |
| covered_products | 以未锻造金属、金属海绵、粉末或所声明的半制成形态（如板、片、带、棒、丝、管或箔）放行的铂金属 |
| excluded_products | 矿石和精矿；铂化合物；催化剂及已制成的催化剂制品；珠宝和成品；废料和碎料；未单独量化铂的混合铂族金属产品 |
| representative_product | 声明铂质量分数和物理形态的商品铂金属 |
| production_route | 贵金属精炼，随后进行路线适用的还原、熔化、粉末精整或半制成加工；原生与再生原料经历分别声明 |
| market_state | 工厂门、商品状态且处于所声明未锻造、半制成或粉末形态的铂；声明纯度、尺寸或粒度规格及包装状态 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 生产一种所声明覆盖物理形态的商品铂金属 |
| How much | 工厂门 1 kg 净铂产品 |
| How well | 符合生产商声明的铂质量分数和形态特定放行规范；不推定统一纯度 |
| How long or cycle | 由同期前景记录表示的一个完整生产批次或核算期 |
| reference_flow_link | 参考数量是清单行 `platinum_product` 所表示放行铂产品的实测净质量 |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 kg |
| 参考产品流 | 未锻造、半制成或粉末状的铂——UUID 未解决 |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 铂质量分数与化验方法；物理形态；适用时的尺寸或粒度规格；原生、再生或混合原料路线；原料来源与负荷处理；设施地理位置；精炼与成形技术；生产期；分配方法；内部回收处理；工厂门包装状态 |

构建前景数据包时，`必需限定信息` 中列出的信息应在数据集元数据、过程说明、参考流备注、产品说明或等效数据包字段中明确声明。缺失必需限定信息的数据包视为参考流定义不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | 参考产品及所有按质量归一化的清单 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 使用放行产品净质量。将所有前景交换归一化到 1 kg 放行铂产品之前保留实测值。 |
| `platinum_content_basis` | 原料、产品、残渣和共产品 | Mass 及报告的铂质量分数 | kg 和 kg Pt/kg 物料 | 记录湿基或干基、取样方法、化验方法和不确定度。不得用总铂族金属含量代替铂含量。 |
| `solution_concentration_basis` | 盐酸和其他水溶液试剂 | Mass 及溶液浓度 | kg 溶液和质量分数 | 分别报告外购或补加溶液质量与浓度；不得把有效酸质量作为溶液质量。内部回收酸不构成新的技术系统投入。 |
| `gas_volume_basis` | 气态天然气 | Volume `93a60a56-a3c8-22da-a746-0800200c9a66` | m3 | 说明气体体积的温度、绝对压力及干湿基，并保留计量体积和任何换算因子。 |
| `electricity_energy_basis` | 外购电力 | Energy | kWh | 以 kWh 记录电表交付电量，并声明电压等级、电网地理位置、合同供电和现场发电处理。不得以电力电压转换服务或电缆流代替电力。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 前景设施接收的已识别、称量、均化或以其他方式代表性取样并化验的含铂精炼原料批次 |
| starting_condition_role | 前景精炼投入；其上游生产或收集及预处理由关联上游数据集表示，或采用有明确依据的再生材料截断方法 |
| product_classification_scope | 未锻造、半制成或粉末状商品铂金属；路线和物理形态不形成独立的规范 PCR 身份 |
| recursive_input_rule | 若覆盖范围内的铂产品重新作为原料进入，则将其连同上游数据集仅记录一次产品投入，并且只建模增量前景精炼或成形；不得在前景过程内递归展开同一 PCR |
| upstream_dataset_requirement | 原生原料按适用情况需要可追溯的上游采矿、选矿、熔炼和贱金属精炼数据集。再生原料需要收集和预处理数据集，除非已声明的截断约定合理地赋予其零输入负荷。 |
| disclosure | 声明原料类别和来源、铂及共存金属化验、原生/再生份额、截断约定、纳入单元操作、内部循环、减排和废水处理、成品形态、地理位置、技术、期间及排除项 |

### 系统边界规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `sb_gate_boundary` | 前景精炼与成形系统 | 从所声明已化验原料的接收到铂在工厂门放行，纳入全部可归属的前景物料、能源、水、废物和直接排放交换。 | `eu-nfm-bat-conclusions-2016`; `ipa-pgm-lca-2017-2022-update` |
| `sb_route_disclosure` | 原生、再生或混合原料 | 将原生和再生原料经历保留为明确元数据；不得在未报告份额及计算方法的情况下平均采用不同上游负荷约定的原料。 | `ipa-pgm-lca-2017-2022-update` |
| `sb_recycle_loops` | 酸、氯、水、贵金属及残渣循环 | 计入跨越前景边界的补加投入和净输出。单独报告内部回收与循环数量，不得将其计作新的外部投入。 | `eu-nfm-bat-conclusions-2016` |
| `sb_forming_condition` | 半制成或粉末产品 | 纳入所声明工厂门产品放行前实施的成形、制粉、熔化、浇铸、轧制、拉拔、挤压、退火或精整操作；将未发生的操作标记为不适用。 | `eu-nfm-bat-conclusions-2016` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `platinum_refining_and_finishing` | 铂精炼与成形 | required | 始终纳入；仅在单项路线条件交换跨越所声明前景边界时记录该交换 | 从已化验精炼原料到放行铂形态的前景生产 | 1 kg 放行铂产品 |

### 过程：铂精炼与成形（`platinum_refining_and_finishing`）

该综合过程避免将保密且反复循环的精炼步骤人为扩展为路线与产品形态的笛卡尔组合。当相应操作实际发生时，单元操作记录仍须识别原料准备、取样与化验、溶解或熔炼、分离与提纯、最终金属回收、内部循环、废液处理和产品形态精整。

#### 输入

##### 产品流

###### 已化验的含铂精炼原料批次（`pt_refinery_feed`）

接收的实体原料批次仅一次跨越前景精炼边界。按实际生产批次记录其状态、来源、干物质、铂化验、其他有价金属化验和上游数据集。

- 选定流：已化验的含铂精炼原料批次——UUID 未解决
- 流属性/单位：Mass / kg
- 数量规则：计量接收质量，并通过代表性取样和化验确定干质量与铂含量；每种存在实质差异的原料批次均保留为独立交换记录。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 1 kg 放行铂产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_feed_mass_assay`
- 来源：`eu-nfm-bat-conclusions-2016`

###### 30% 盐酸溶液（`hydrochloric_acid_30`）

作为精炼补加酸使用时，记录外购或外部供应的 30% 盐酸溶液。内部回收酸在循环台账中报告，不再计作投入。

- 选定流：盐酸 `56414d25-a353-4d67-b362-87212ce6011d`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：汇总进入批次边界的称量或开票 30% 溶液；记录实际浓度，且只采用有记录的溶液质量分数换算。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 放行铂产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_reagent_records`
- 来源：`eu-nfm-bat-conclusions-2016`

###### 氯气（`chlorine_gas`）

采用盐酸/氯溶解或干法氯化路线时，记录外部供应的氯。闭环回收的氯不计作新的投入。

- 选定流：氯气 `1fb2c22c-c189-4e2a-9a9f-810b59c37325`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：计量所表示生产批次中跨越设施过程边界的补加氯。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 放行铂产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_reagent_records`
- 来源：`eu-nfm-bat-conclusions-2016`

###### 氢氧化钠（`sodium_hydroxide`）

将外部供应的氢氧化钠用于可归属于所表示生产批次的原料处理、中和或废水处理时予以记录。溶液浓度和供应状态仍为前景限定信息。

- 选定流：氢氧化钠 `e0abcced-0611-4c24-9290-5a2c5a0c4169`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：汇总进入纳入操作的外购或补加氢氧化钠产品质量；适用时报告溶液浓度。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 放行铂产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_reagent_records`
- 来源：`eu-nfm-bat-conclusions-2016`

###### 工艺用水（`process_water`）

记录跨越边界并用于溶解、洗涤、洗气、产品精整和可归属废水处理的补加工艺用水。单独披露循环水且不得重复计量。

- 选定流：工艺用水 `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：计量或以其他方式核对进入纳入操作的补加工艺用水；如将体积记录换算为质量，披露来源、水质和密度换算。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 放行铂产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_water_records`
- 来源：`eu-nfm-bat-conclusions-2016`; `ipa-pgm-lca-2017-2022-update`

###### 外购电力（`purchased_electricity`）

电表交付电力作为一项能源交换记录。电压、电网地理位置、合同供电和现场发电属于限定信息，而非独立的未核验流身份。

- 选定流：外购交流电——UUID 未解决
- 流属性/单位：Energy / kWh
- 数量规则：汇总可归属于纳入操作的结算级电表读数，扣除有记录的外送电量，并排除上游数据集已包含的电力。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 放行铂产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_electricity_records`
- 来源：`eu-nfm-bat-conclusions-2016`; `ipa-pgm-lca-2017-2022-update`

###### 气态天然气（`gaseous_natural_gas`）

在纳入的干燥、热预处理、还原辅助、熔化、退火或精整操作中燃烧气态天然气时予以记录。保留供应条件和低位热值。

- 选定流：气态天然气 `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位：Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- 数量规则：记录所表示生产批次在规定参考条件下经校准计量的体积。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 放行铂产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_fuel_records`
- 来源：`eu-nfm-bat-conclusions-2016`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 放行铂产品（`platinum_product`）

放行的参考产品仅对应一种所声明物理形态和一项放行规格。不同商品形态或规格应建立独立数据集变体，而不得聚合为一项交换。

- 选定流：未锻造、半制成或粉末状的铂——UUID 未解决
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：计量放行产品净质量并进行化验；将完整清单归一化为该输出恰好 1 kg。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：1 kg 放行铂产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_product_release`
- 来源：`un-cpc-3-structure-2025`; `ipa-pgm-lca-2017-2022-update`

##### 废物流

###### 含铂氢氧化物滤饼（`platinum_filter_cake`）

将离开废水处理环节并送外部回收或处置的氢氧化物滤饼单独记录，不与内部循环的含贵金属残渣混合。化验其残留铂和其他受管制金属浓度。

- 选定流：含铂氢氧化物滤饼——UUID 未解决
- 流属性/单位：Mass / kg
- 数量规则：称量离开前景边界的滤饼，测定干物质和铂浓度，并记录去向与回收状态。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 放行铂产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_residue_records`
- 来源：`eu-nfm-bat-conclusions-2016`

###### 含氯酸性铂精炼废水（`acidic_chloride_wastewater`）

送外部处理或经纳入的现场处理后排放的含氯酸性净废水是一项水相废物交换。内部循环的浸出液和水不计入该净输出。

- 选定流：含氯酸性铂精炼废水——UUID 未解决
- 流属性/单位：Mass / kg
- 数量规则：计量跨越前景边界的净废水，并保留 pH、氯化物、悬浮物、铂及其他受管制金属分析结果。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 放行铂产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wastewater_records`
- 来源：`eu-nfm-bat-conclusions-2016`

##### 基本流

###### 直接化石源二氧化碳（`fossil_carbon_dioxide`）

单独计算纳入操作现场燃烧气态天然气所产生的直接化石源二氧化碳，不含上游电力和燃料供应排放。

- 选定流：二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：根据生产批次天然气用量及有记录的碳含量或供应商排放因子计算化石 CO2；有直接排放监测时进行核对。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 放行铂产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_fuel_records`
- 来源：`eu-nfm-bat-conclusions-2016`

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivision_first` | 可单独计量的操作和生产批次 | 在技术可行时，通过细分生产批次、单元操作和产品形态记录避免分配。 | `eu-nfm-bat-conclusions-2016` |
| `allocation_precious_metals` | 无法细分的贵金属精炼共同负荷 | 按每种单独化验的商品贵金属回收质量分配剩余的共同贵金属精炼负荷，并披露分配因子及其对经济分配替代方案的敏感性。 | `ipa-pgm-lca-2017-2022-update` |
| `allocation_base_and_precious_metals` | 贱金属和贵金属未细分的共同生产 | 采用经核验的上游供应商数据集方法。若前景共同负荷无法细分，则按回收金属含量实施经济分配，记录价格、期间、币种和敏感性；不得无说明地混用方法。 | `ipa-pgm-lca-2017-2022-update` |
| `allocation_internal_recovery` | 内部溶液、残渣、滤饼及不合格金属 | 将在前景边界内返回的物料作为内部循环处理，不给予避免产品抵扣。只有在物料跨越边界、数量实测且去向有记录时，才确认共产品或废物。 | `eu-nfm-bat-conclusions-2016` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_feed_mass_assay` | `platinum_refining_and_finishing` | 已化验精炼原料 | 地磅/批次单和实验室化验 | 批次号；来源；路线；毛重、皮重与净重；水分；Pt 与共存金属化验；取样和化验方法；不确定度；上游数据集 id | 经校准称量，以及代表性取样和有记录的实验室化验 | kg；kg Pt/kg 干原料 | 每个接收批次 | 与产品输出相同的生产批次和期间 | 所有纳入的精炼原料 | 保留不同原料批次；仅在转换至干基并标记路线后汇总质量和所含金属 | 校准记录；监管链；重复样或有证标准物质化验检查 |
| `cp_reagent_records` | `platinum_refining_and_finishing` | 盐酸、氯和氢氧化钠补加 | 储罐、秤、流量计、批次及发票记录 | 试剂 id；浓度/纯度；期初与期末库存；接收；退回；循环回收量；分配键 | 将经校准的储存和投加记录与采购及生产批次核对 | kg 产品 | 每批；每月核对 | 完整表示期间 | 所有纳入操作 | 外部投入 = 期初库存 + 接收 - 期末库存 - 有记录退回；内部循环单独报告 | 仪表/秤校准；供应商证书；库存核对 |
| `cp_water_records` | `platinum_refining_and_finishing` | 工艺水补加 | 水表和水平衡 | 来源；水质；仪表读数；密度；循环；排放 | 经校准补加水表，并与循环和废水记录核对 | kg 或 m3 并换算 | 连续或每批；每月核对 | 完整表示期间 | 所有纳入水系统 | 仅计跨越边界的补加水；保留实测体积和有记录的密度以进行质量换算 | 仪表校准；水平衡；实验室水质结果 |
| `cp_electricity_records` | `platinum_refining_and_finishing` | 外购电力 | 结算/分表记录 | 仪表 id；输入；输出；电压；电网地理位置；合同；现场发电；操作分配 | 结算表和经校准分表；共享负荷采用有记录的分配 | kWh | 连续；每月核对 | 完整表示期间 | 所有纳入操作 | 汇总可归属于纳入操作的输入电力并扣除有记录的输出；不得抵扣无关场址负荷 | 公用事业账单；仪表校准；分表覆盖和核对 |
| `cp_fuel_records` | `platinum_refining_and_finishing` | 气态天然气和直接化石 CO2 | 交接计量表、燃料证书和排放计算 | 气体体积；温度；压力；水分；热值；碳含量；仪表 id；操作；监测结果 | 在规定参考条件下校准计量；根据有记录的碳数据计算 CO2 并与监测核对 | m3 天然气；kg CO2 | 连续或每批；每月核对 | 完整表示期间 | 仅纳入的燃气设备 | 汇总经条件修正的体积；共享设备按有依据的运行记录分配；一致地计算直接化石 CO2 | 仪表校准；供应商证书；计算表；排放监测核对 |
| `cp_product_release` | `platinum_refining_and_finishing` | 放行铂产品 | 终检秤、批次放行和化验记录 | 产品批次；净质量；Pt 化验；物理形态；尺寸/粒度规格；不合格品返回；包装皮重 | 经校准终检称量和有记录的产品放行化验 | kg 产品；kg Pt/kg 产品 | 每个放行批次 | 与投入相同的生产批次和期间 | 一个所声明数据集变体内所有覆盖产品批次 | 汇总合格放行净质量；排除包装皮重、退回或不合格物料；归一化到 1 kg | 秤校准；分析证书；放行规范；批次追溯 |
| `cp_residue_records` | `platinum_refining_and_finishing` | 含铂氢氧化物滤饼 | 废物联单、秤和实验室分析 | 质量；水分；Pt 与受管制金属浓度；去向；回收/处置状态 | 称量每批或每个容器，并采用有记录的非均质固体取样规程 | kg 湿滤饼和干滤饼；kg Pt/kg 干滤饼 | 每次发运或每批 | 完整表示期间 | 所有跨越边界的滤饼 | 按去向汇总干湿质量；内部返回不作为输出 | 秤校准；监管链；实验室 QA/QC；废物联单 |
| `cp_wastewater_records` | `platinum_refining_and_finishing` | 含氯酸性废水 | 流量计和混合样 | 流量；密度；pH；氯化物；悬浮物；Pt 与受管制金属；处理阶段；去向 | 经校准净流量计量及流量比例混合取样 | kg 或 m3；浓度单位 | 连续流量；按许可或每批取混合样 | 完整表示期间 | 跨越前景边界的净废水 | 仅以实测/有记录密度将体积换算成质量；以对应期间流量和浓度计算负荷 | 流量计校准；实验室 QA/QC；处理和排放记录 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_normalise_reference` | 每项清单交换 | 归一化数量 = 生产批次交换数量 / 合格放行铂产品净 kg 数。 | 生产批次交换数量；`cp_product_release` 产品净质量 | 每 1 kg 参考产品的交换 |  |
| `calc_dry_feed_platinum` | `pt_refinery_feed` | 干原料质量 = 湿原料净质量 ×（1 - 水分分数）；所含 Pt = 干原料质量 × 干基 Pt 质量分数。 | `cp_feed_mass_assay` 的称量、水分和化验记录 | kg 干原料和 kg 所含 Pt |  |
| `calc_solution_mass` | 水溶液试剂记录 | 将溶液产品质量保留为交换；有效试剂质量 = 溶液质量 × 实测质量分数是附加计算，不得替代产品交换。 | `cp_reagent_records` 的试剂质量和浓度 | kg 溶液和 kg 有效物质 |  |
| `calc_direct_fossil_co2` | `fossil_carbon_dioxide` | 根据实测燃料和有记录的碳含量或供应商因子计算 CO2；保留因子身份、氧化假设和监测核对。 | `cp_fuel_records` 的天然气记录和碳数据 | kg 化石源 CO2 | `eu-nfm-bat-conclusions-2016` |
| `calc_precious_metal_allocation` | 不可分的共同贵金属精炼负荷 | 金属 i 的分配因子 = 金属 i 的回收商品质量 / 共同加工贵金属的回收商品总质量。 | 所有共同贵金属共产品经化验的放行质量 | 总和为 1 的产品特定分配因子 | `ipa-pgm-lca-2017-2022-update` |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | 参考产品和原料 | 保留批次追溯、物理形态、纯度、原料来源、路线和 Tiangong UUID 状态；不得以仅限丝材的 UUID 替代较宽的参考产品。 | 放行证书、原料单、化验记录及未解决 UUID 审查元数据 |
| `dq_temporal` | 所有前景记录 | 采用统一代表期，通常为至少连续 12 个月或涵盖季节与维护变化的完整生产批次集合；解释较短期间。 | 仪表、库存、生产、维护和批次覆盖记录 |
| `dq_completeness` | 物料、能源、水、废物和直接排放 | 核对所有纳入操作；发布前将每种新增的实际试剂、燃料、废物或直接基本流识别为独立原子交换。 | 质量/金属平衡、公用工程核对、废物联单、排放清单及完整性检查表 |
| `dq_assay` | 含 Pt 原料、产品、共产品和残渣 | 采用代表性取样、有记录的化验方法、单位、检出限和不确定度；可获得时保留重复样或标准物质 QA 结果。 | 取样计划、实验室报告、QA/QC 记录和分析证书 |
| `dq_geography_technology` | 上游数据集及公用工程 | 匹配地理位置、技术、产品状态、浓度和交付边界；披露任何代理，且不得赋予未经核验的 UUID。 | 供应商数据集元数据、合同、过程说明和 UUID 审计记录 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `val_reference_product` | 参考流和 `platinum_product` | 验证归一化后净放行铂产品恰好为 1 kg，并声明铂化验和覆盖物理形态；不得以混合 PGM 质量作为铂参考数量。 | `un-cpc-3-structure-2025` |
| `val_inventory_reconciliation` | 前景清单 | 要求规定的 11 个原子行均为 UUID 已匹配或明确未解决，且适用行均有前景数量；每种新增的实际试剂、燃料、废物或直接排放须增加独立的已审计行。 | `eu-nfm-bat-conclusions-2016` |
| `val_mass_metal_balance` | 原料、产品、共产品、残渣和废水 | 核对投入、放行产品、内部库存/循环、残渣和实测损失的总质量及所含铂；记录不确定度并调查物料不平衡。 | `eu-nfm-bat-conclusions-2016` |
| `val_no_double_counting` | 内部循环和上游数据集 | 验证回收酸、氯、水、溶液、残渣和铂未被计作新投入，且上游负荷未在前景清单中重复。 | `eu-nfm-bat-conclusions-2016` |
| `val_allocation` | 多金属生产批次 | 验证优先尝试了细分，分配负荷的所有分配因子总和为 1，共产品数量和化验为实测，并提供敏感性和方法披露。 | `ipa-pgm-lca-2017-2022-update` |
| `val_waste_emissions` | 废水、滤饼和直接化石 CO2 | 验证废水和滤饼的去向与组成，区分内部回收与边界输出，并将上游电力排放排除在直接化石 CO2 之外。 | `eu-nfm-bat-conclusions-2016` |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 经审查后为 `secondary_dataset` 或 `background_dataset`；候选前景数据包仍为编制输入 |
| downstream_use | 用于需要工厂门铂的产品系统建模，且路线、形态、纯度、地理位置、技术、期间和分配与研究相匹配 |
| allowed_use | 在审查 UUID 缺口、数据质量证据和边界兼容性后，用于所声明原生、再生或混合原料路线及所声明放行产品形态 |
| excluded_use | 直接表示矿石或精矿、铂化合物、催化剂、珠宝、已制成的终端用品、仅废料处理或其他 PGM；无依据地在原生和再生路线之间外推 |
| required_metadata | PCR id；产品形态与纯度；产品及原料化验；原料路线和来源；再生料截断约定；系统边界；地理位置；技术；期间；分配；UUID 状态；来源和采集协议版本 |
| required_quality_disclosure | 记录覆盖、仪表和秤校准、取样和化验 QA/QC、质量与铂平衡、分配敏感性、代理数据集、未解决 UUID 及未解决范围证据需求 |
| update_trigger | 原料组合、负荷约定、精炼或成形技术、能源或供水、回收效率、产品规范、分配、减排、废水处理、地理位置或代表期发生实质变化 |

## 11. 数据源

| 来源 id | 类型 | 引用 | 用途 |
| --- | --- | --- | --- |
| `un-cpc-3-structure-2025` | 官方指南（`official_guidance`） | 联合国统计司，*CPC Version 3.0 Structure*，2025-06-30，官方 CSV，https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv，检索日期 2026-09-04，SHA-256 `5cd2c1c4890dd6be16af48e9bb940fed48efff9865f39ff15edaa921da25fb7c` | CPC 41330 准确分类身份及英文标题；独立性键 `unsd-cpc-3.0-structure-2025` |
| `china-mof-research-goods-list-2026` | 官方指南（`official_guidance`） | 中华人民共和国财政部，*免税科研货物清单*，序号 151 / 品目 7110，https://m.mof.gov.cn/zcfb/202601/P020260114634207037460.pdf，2026，检索日期 2026-09-04，SHA-256 `844ae4413404a9727f8cb805c2ebbfef8959afc2e44db43d421ed9da0ab6b350` | 核验专业中文产品状态术语“铂，未锻造、半制成或粉末状”；独立性键 `china-mof-tax-free-research-goods-list-2026` |
| `eu-nfm-bat-conclusions-2016` | 官方指南（`official_guidance`） | 欧盟委员会，*Commission Implementing Decision (EU) 2016/1032 establishing best available techniques (BAT) conclusions for the non-ferrous metals industries*，《欧盟官方公报》L 174，2016-06-30，官方全文 XHTML，https://publications.europa.eu/resource/cellar/174bd664-3e84-11e6-af30-01aa75ed71a1.0006.03/DOC_1，检索日期 2026-09-04，SHA-256 `1a752d504bcfdbf68ca521d73ab48fa511de01b750923089f1591f95dfa06699` | 原文支持有色金属和贵金属的过程范围、原料选择与混合、预处理、熔炼/熔化、浸出及湿法冶金阶段、能源管理、废水计量/回用/分流/处理/监测以及 HCl/Cl2 控制；独立性键 `eu-commission-implementing-decision-2016-1032` |
| `ipa-pgm-lca-2017-2022-update` | 文献（`literature`） | 国际铂族金属协会，*The Life Cycle Assessment of Platinum Group Metals (PGMs): Reference Year 2017 & 2022 Update*，2022，https://ipa-news.com/assets/pdfs/2022-06-21-lca-fact-sheet-2022-ipa.pdf，检索日期 2026-09-04 | 原文支持从摇篮到工厂门边界、原生/再生路线分别处理、1 kg 铂功能单位先例及质量/经济分配实践；独立性键 `ipa-sphera-pgm-lca-2017-2022-update` |
