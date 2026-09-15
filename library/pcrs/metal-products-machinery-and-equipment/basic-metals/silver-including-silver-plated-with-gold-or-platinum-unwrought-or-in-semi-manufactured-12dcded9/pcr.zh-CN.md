---
pcr_id: pcr.metal-products-machinery-and-equipment.basic-metals.silver-including-silver-plated-with-gold-or-platinum-unwrought-or-in-semi-manufactured-12dcded9
language: zh-CN
status: candidate
content_maturity: authored_methodology
translation_status: aligned
sync_with: pcr.en-US.md
---

# 银（包括镀金、镀铂的银），未锻造、半制成或粉末状

## 1. 范围与适用性

本 PCR 适用于以未锻造、半制成或粉末状态在工厂门口供应的银金属前景数据包，也包括表面镀金或镀铂的银。声明的产品形态与生产路线决定适用的条件过程。数据包必须至少纳入一项路线过程，并完整表示报告设施内部的生产链。

纳入精炼银晶体、银粒、银锭、银条、银坯、银板、银带、银箔、银杆、银丝、其他已声明的银半制成品、银粉及这些形态的镀金或镀铂产品。排除银矿砂与精矿、作为化学品出售的银化合物、银浆及其他配制混合物、成品首饰或制成品、作为回收料出售的废银，以及仅以贱金属为基底的包银材料。

前景边界始于已声明含银进料或外购银进入报告设施，止于工厂门口的净合格产品。外购材料和能源的上游生产必须由关联上游数据集表示，不得暗中并入前景数量。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.basic-metals.silver-including-silver-plated-with-gold-or-platinum-unwrought-or-in-semi-manufactured-12dcded9 |
| classification_refs | CPC 3.0：41310（精确分类语境） |
| covered_products | 已声明为未锻造、半制成、粉末、镀金银或镀铂银状态的银金属 |
| excluded_products | 银矿砂与精矿；银化合物；银浆或配制混合物；制成品；作为回收料出售的废银；以贱金属为基底的包银材料 |
| representative_product | 已声明形态、纯度、镀层状态与规格的合格银金属产品 |
| production_route | 已声明的精炼、熔化铸造、成形、制粉以及镀金或镀铂过程组合 |
| market_state | 工厂门口净合格产品，不含运输包装 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 供应处于本 PCR 边界内且形态已声明的银金属产品 |
| How much | 工厂门口 1 kg 净合格产品 |
| How well | 符合已声明的物理形态、银纯度或牌号、尺寸或粒径规格，以及适用时的金/铂镀层规格 |
| How long or cycle | 一个生产批次；不指定使用阶段持续时间 |
| reference_flow_link | `silver_product_reference` |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 kg 净合格产品 |
| 参考产品流 | 银 `7db0c01b-7605-4e92-90a1-c4bc6dd8e157` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 产品形态；银质量分数及分析基准；合金元素；镀层或无镀层状态；适用时的金或铂镀层身份及质量分数；尺寸或粒径分布；粉末水分与表面处理状态；生产路线；再生进料份额及核算方法；设施地理范围；技术；报告期；工厂门口状态 |

构建前景数据包时，必须在元数据、过程说明、参考流备注、产品说明或等效字段中声明所有必需限定信息。通用 Tiangong 流身份不能替代这些限定信息。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | 参考产品 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 采用工厂门口产品交付状态的净质量，不含运输包装；声明称量方法以及任何水分校正。 |
| `plated_product_mass` | 镀金或镀铂银 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 参考质量包括银基体和沉积的金或铂；分别报告基体质量、镀层金属质量及过程损失。 |
| `powder_mass_basis` | 银粉 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 报告供货状态的粉末质量，并披露水分、有机表面处理物及非银添加物；银浆不在范围内。 |
| `gas_volume_conditions` | 天然气、氧气或氮气记录 | 适用时为 Volume | m3 | 保留计量参考温度、压力和干/湿基准；仅使用有记录的条件与系数换算体积。 |
| `electricity_conversion` | 交流电 | Energy | kWh | 保留电表记录的 kWh；能源数据集要求 MJ 时采用 1 kWh = 3.6 MJ，且不得把能量误标为质量。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 进入设施的含银多雷合金、精炼用银废料或外购银金属，并声明纯度、形态、所有权及交付状态 |
| starting_condition_role | 报告设施接收入厂物料的前景起点 |
| product_classification_scope | 属于上述语义边界的银金属产品；分类代码仅提供语境，不决定规范身份 |
| recursive_input_rule | 已属于本 PCR 类别的银投入只作为带上游数据集的产品投入记录一次；不得在接收过程中递归重建其上游银生产链。 |
| upstream_dataset_requirement | 每项外购银进料、银金属、化学品、燃料、电力、水、金及铂投入均须关联地理和技术具有代表性的上游数据集。 |
| disclosure | 声明进料身份和化验结果、再生料份额、纳入的路线过程、产品形态和纯度、镀层状态、设施地理范围、技术、分配方法、内部回收回路、废物去向及任何排除的场内活动。 |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `sb_facility_gate` | foreground_system_boundary | 纳入已声明进料的接收与准备、所有适用的精炼、铸造、成形、制粉和电镀作业、场内减排、内部回收、直接排放、废物以及净合格产品放行。 | eu-jrc-nfm-bref-2017; eu-jrc-stm-bref-2006 |
| `sb_upstream_links` | purchased_inputs | 外购投入的上游生产不并入前景数量，但每项外购投入和能源载体都必须关联上游数据集。 |  |
| `sb_silver_loops` | silver_bearing_returns | 分别跟踪含银粉尘、矿渣、污泥、电解液残渣、浮渣和过程废料；报告内部返回量且不得重复计数，外运流按实际回收或处理边界建模。 | eu-jrc-nfm-bref-2017 |
| `sb_route_integrity` | conditional_routes | 只纳入条件成立的路线卡片；除非披露按产量加权的记录及平均依据，否则不得把不同产品形态或技术合并为一个平均值。 | un-cpc-3-0-structure-2025 |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `silver_refining` | 含银进料精炼 | conditional | 报告设施内精炼多雷合金或银废料时纳入。 | 前景提纯与贵金属回收 | kg 精炼银输出 |
| `silver_charge_preparation` | 银炉料准备 | conditional | 银在场内配料并转入熔化铸造时纳入。 | 前景进料称量与转运 | kg 银炉料 |
| `melting_casting` | 银熔化与铸造 | conditional | 银被熔化或铸造成银粒、银锭、银条、银坯或成形进料时纳入。 | 前景热转化与铸造 | kg 铸态银输出 |
| `semi_manufacturing` | 银成形 | conditional | 进行轧制、挤压、拉拔或其他已声明半制成加工时纳入。 | 前景形状转化 | kg 合格银半制成品 |
| `powder_manufacturing` | 银粉制造 | conditional | 采用气体雾化或湿法化学制粉时纳入，并声明一种实际技术。 | 前景粉末转化 | kg 合格银粉 |
| `precious_metal_plating` | 银镀金或镀铂 | conditional | 仅当合格银产品镀金或镀铂时纳入。 | 前景表面处理 | kg 合格镀层银 |

### 过程：含银进料精炼（`silver_refining`）

#### 输入

##### 产品流

###### 含银多雷合金进料（`dr_dore_feed`）

仅记录跨越精炼厂边界且已化验的多雷合金；多雷合金路线适用时纳入。

- 选定流：含银多雷合金
- 流属性/单位：Mass / kg
- 数量规则：按批次计量的接收质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 kg 精炼银输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_refining_records`
- 来源：eu-jrc-nfm-bref-2017

###### 银废料进料（`dr_silver_scrap_feed`）

记录作为精炼进料接收且已化验的银废料；仅适用于二次生产路线。

- 选定流：回收用银废料
- 流属性/单位：Mass / kg
- 数量规则：按批次计量接收质量，并另行记录银品位
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 kg 精炼银输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_refining_records`
- 来源：eu-jrc-nfm-bref-2017

###### 精炼电力（`dr_refining_electricity`）

记录精炼、电解、泵送、抽风和减排设备的交流电用量。

- 选定流：交流电
- 流属性/单位：Energy / kWh
- 数量规则：分表计量；无法分表时采用有记录的设施总表分配
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 精炼银输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_refining_records`
- 来源：eu-jrc-nfm-bref-2017

###### 精炼天然气（`dr_refining_natural_gas`）

仅纳入精炼炉或干燥器燃烧的气态天然气。

- 选定流：气态天然气 `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位：Volume / m3
- 数量规则：按已记录参考条件计量的体积
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 精炼银输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_refining_records`
- 来源：eu-jrc-nfm-bref-2017

###### 精炼用氧气（`dr_refining_oxygen`）

纳入氧化、灰吹或富氧燃烧设备所用工业氧气。

- 选定流：工业氧气 `bd4b0f96-2090-4806-a648-335ab20ff401`
- 流属性/单位：Volume / m3
- 数量规则：按已记录参考条件计量或供应商记录的体积
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 精炼银输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_refining_records`
- 来源：eu-jrc-nfm-bref-2017

###### 精炼工艺用水（`dr_refining_process_water`）

记录电解、洗涤、浸出及湿法减排的补充水，不与废水相抵。

- 选定流：工艺用水 `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- 流属性/单位：Mass / kg
- 数量规则：计量补充水质量，或用有记录密度把体积换算为质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 精炼银输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_refining_records`
- 来源：eu-jrc-nfm-bref-2017

###### 精炼用硝酸（`dr_refining_nitric_acid`）

仅在已声明浸出或溶解路线使用硝酸时纳入供货状态质量，并记录浓度。

- 选定流：硝酸
- 流属性/单位：Mass / kg
- 数量规则：计量供货状态质量和有效酸浓度
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 精炼银输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_refining_records`
- 来源：eu-jrc-nfm-bref-2017

###### 精炼与减排用氢氧化钠（`dr_refining_sodium_hydroxide`）

纳入处理、中和或碱洗所用氢氧化钠，并记录溶液浓度。

- 选定流：氢氧化钠 `e0abcced-0611-4c24-9290-5a2c5a0c4169`
- 流属性/单位：Mass / kg
- 数量规则：计量供货状态质量和浓度
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 精炼银输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_refining_records`
- 来源：eu-jrc-nfm-bref-2017

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 精炼银输出（`dr_refined_silver`）

记录离开本过程进入销售或后续前景加工的净精炼银。

- 选定流：银 `7db0c01b-7605-4e92-90a1-c4bc6dd8e157`
- 流属性/单位：Mass / kg
- 数量规则：扣除内部返回后的干基合格或转移质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 精炼银输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_refining_records`
- 来源：eu-jrc-nfm-bref-2017

##### 废物流

###### 精炼矿渣（`dr_refining_slag`）

记录内部贵金属回收后离开精炼过程的矿渣，并披露品位和去向。

- 选定流：矿渣 `d7184b4f-1fa2-4f86-b004-3b1e9752f060`
- 流属性/单位：Mass / kg
- 数量规则：内部回收后的外运质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 精炼银输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_refining_records`
- 来源：eu-jrc-nfm-bref-2017

###### 精炼废水（`dr_refining_wastewater`）

记录送往场内或外部处理的废水，并披露溶解金属和去向。

- 选定流：废水 `d2d44ce1-c0f4-461d-9413-f4b33e0d200f`
- 流属性/单位：Mass / kg
- 数量规则：计量排放质量，或用有记录密度把体积换算为质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 精炼银输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_refining_records`
- 来源：eu-jrc-nfm-bref-2017

##### 基本流

###### 精炼化石二氧化碳（`dr_refining_fossil_co2`）

报告场内燃料或含碳还原剂产生的直接化石二氧化碳；排除上游电力排放。

- 选定流：二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 流属性/单位：Mass / kg
- 数量规则：依据 `calc_fossil_co2` 用计量的化石碳氧化量计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 精炼银输出
- 基准类型：过程输出（`process_output`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_refining_records`
- 来源：

###### 精炼颗粒物（`dr_refining_particulate`）

记录减排后直接排入空气且粒径未特指的颗粒物。

- 选定流：颗粒物，粒径未特指 `0ce3dedb-caca-407b-a856-a90470eb8ec0`
- 流属性/单位：Mass / kg
- 数量规则：实测烟囱排放质量，或由监测浓度和干烟气量计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 精炼银输出
- 基准类型：过程输出（`process_output`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_refining_records`
- 来源：eu-jrc-nfm-bref-2017

###### 精炼氮氧化物（`dr_refining_nox`）

按设施报告基准记录减排后直接排入空气的氮氧化物。

- 选定流：氮氧化物 `f79d0f8f-2b0e-49cb-bed0-b1ea0fbd8625`
- 流属性/单位：Mass / kg
- 数量规则：实测烟囱排放质量，或由监测浓度和干烟气量计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 精炼银输出
- 基准类型：过程输出（`process_output`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_refining_records`
- 来源：eu-jrc-nfm-bref-2017

### 过程：银炉料准备（`silver_charge_preparation`）

#### 输入

##### 产品流

###### 熔铸用银进料（`mc_silver_feed`）

记录转入或购入熔炼的银，并保留上游数据集链接。

- 选定流：银 `7db0c01b-7605-4e92-90a1-c4bc6dd8e157`
- 流属性/单位：Mass / kg
- 数量规则：实测投料质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 铸态银输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_casting_records`
- 来源：eu-jrc-nfm-bref-2017

### 过程：银材成形（`semi_manufacturing`）

#### 输入

##### 产品流

###### 成形用银进料（`sm_silver_feed`）

记录进入轧制、挤压或拉拔的银坯、银棒、银粒或其他已声明进料形态。

- 选定流：银 `7db0c01b-7605-4e92-90a1-c4bc6dd8e157`
- 流属性/单位：Mass / kg
- 数量规则：实测投料质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 合格半制成银产品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_forming_records`
- 来源：eu-jrc-nfm-bref-2017

###### 成形用电（`sm_electricity`）

记录成形、退火、精整、抽排及辅助设备使用的交流电。

- 选定流：交流电
- 流属性/单位：Energy / kWh
- 数量规则：分表计量值或有记录的分摊电表用量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 合格半制成银产品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_forming_records`
- 来源：eu-jrc-nfm-bref-2017

###### 成形润滑油（`sm_lubricating_oil`）

计入被消耗或随废物离开的外购润滑油，并记录牌号和循环使用情况。

- 选定流：润滑油
- 流属性/单位：Mass / kg
- 数量规则：补充油库存平衡
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 合格半制成银产品
- 基准类型：过程输出（`process_output`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_forming_records`
- 来源：

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 半制成银产品（`sm_silver_product`）

记录一种已声明的合格板、带、箔、棒、线或其他半制成形态。

- 选定流：银 `7db0c01b-7605-4e92-90a1-c4bc6dd8e157`
- 流属性/单位：Mass / kg
- 数量规则：实测净合格产品质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 合格半制成银产品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_forming_records`
- 来源：eu-jrc-nfm-bref-2017

##### 废物流

###### 含银成形废料（`sm_silver_scrap`）

记录离开过程的固体边角料、切边料或不合格成形银；内部返回量仅纳入质量平衡，不重复计量。

- 选定流：含银过程废料
- 流属性/单位：Mass / kg
- 数量规则：扣除内部返回后的实测外运质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 合格半制成银产品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_forming_records`
- 来源：

##### 基本流

### 过程：银粉制造（`powder_manufacturing`）

#### 输入

##### 产品流

###### 制粉用银进料（`pw_silver_feed`）

记录进入已声明制粉技术的银金属。

- 选定流：银 `7db0c01b-7605-4e92-90a1-c4bc6dd8e157`
- 流属性/单位：Mass / kg
- 数量规则：实测投料质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 合格银粉
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_powder_records`
- 来源：eu-jrc-nfm-bref-2017

###### 制粉用电（`pw_electricity`）

记录雾化或湿法处理、干燥、分级、通风和减排使用的交流电。

- 选定流：交流电
- 流属性/单位：Energy / kWh
- 数量规则：分表计量值或有记录的分摊电表用量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 合格银粉
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_powder_records`
- 来源：eu-jrc-nfm-bref-2017

###### 制粉雾化用气态氮（`pw_nitrogen_gas`）

仅当已声明的雾化或惰化技术消耗气态氮时计入。

- 选定流：气态氮
- 流属性/单位：Volume / m3
- 数量规则：在有记录参考条件下计量或供应商记录的体积
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 合格银粉
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_powder_records`
- 来源：

###### 湿法制粉工艺用水（`pw_process_water`）

仅当已声明的湿化学制粉路线用水时，计入补充水。

- 选定流：工艺用水 `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- 流属性/单位：Mass / kg
- 数量规则：实测补充水质量，或用有记录密度把体积换算为质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 合格银粉
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_powder_records`
- 来源：eu-jrc-nfm-bref-2017

###### 湿法制粉用硝酸（`pw_nitric_acid`）

仅当已声明的溶解或沉淀路线使用时，计入供应状态的硝酸并记录浓度。

- 选定流：硝酸
- 流属性/单位：Mass / kg
- 数量规则：实测供应状态质量和有效酸浓度
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 合格银粉
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_powder_records`
- 来源：eu-jrc-nfm-bref-2017

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 银粉产品（`pw_silver_powder`）

记录净合格银粉，并声明粒度分布、水分、纯度和表面处理。

- 选定流：银 `7db0c01b-7605-4e92-90a1-c4bc6dd8e157`
- 流属性/单位：Mass / kg
- 数量规则：实测净合格粉末质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 合格银粉
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_powder_records`
- 来源：un-cpc-3-0-structure-2025

##### 废物流

###### 制粉废水（`pw_wastewater`）

仅湿法路线计入废水，并披露溶解银、处理方式和去向。

- 选定流：废水 `d2d44ce1-c0f4-461d-9413-f4b33e0d200f`
- 流属性/单位：Mass / kg
- 数量规则：实测排放质量，或用有记录密度把体积换算为质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 合格银粉
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_powder_records`
- 来源：eu-jrc-nfm-bref-2017

##### 基本流

###### 湿法制粉氮氧化物（`pw_nox`）

仅当硝酸处理产生直接空气排放时，计入减排后的氮氧化物。

- 选定流：氮氧化物 `f79d0f8f-2b0e-49cb-bed0-b1ea0fbd8625`
- 流属性/单位：Mass / kg
- 数量规则：实测烟囱排放质量，或由监测浓度和干烟气量计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 合格银粉
- 基准类型：过程输出（`process_output`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_powder_records`
- 来源：eu-jrc-nfm-bref-2017

### 过程：银的镀金或镀铂（`precious_metal_plating`）

#### 输入

##### 产品流

###### 电镀用银基材（`pl_silver_substrate`）

记录进入电镀线的已清洁银基材。

- 选定流：银 `7db0c01b-7605-4e92-90a1-c4bc6dd8e157`
- 流属性/单位：Mass / kg
- 数量规则：实测基材质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 合格镀层银产品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_plating_records`
- 来源：eu-jrc-stm-bref-2006

###### 沉积于银上的金（`pl_gold_input`）

仅镀金时计入；量化进入产品的净金量以及所有供应的含金材料所产生的实测金损失。

- 选定流：金 `4ceb691b-15cf-4775-b55e-06a0370973a7`
- 流属性/单位：Mass / kg
- 数量规则：由镀液补加、库存变化、回收金、废物和镀层化验建立金质量平衡
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 合格镀金银产品
- 基准类型：过程输出（`process_output`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_plating_records`
- 来源：eu-jrc-stm-bref-2006

###### 沉积于银上的铂（`pl_platinum_input`）

仅镀铂时计入；量化进入产品的净铂量以及所有供应的含铂材料所产生的实测铂损失。

- 选定流：铂
- 流属性/单位：Mass / kg
- 数量规则：由镀液补加、库存变化、回收铂、废物和镀层化验建立铂质量平衡
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 合格镀铂银产品
- 基准类型：过程输出（`process_output`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_plating_records`
- 来源：eu-jrc-stm-bref-2006

###### 电镀用电（`pl_electricity`）

记录电化学处理、泵送、加热、干燥、通风和减排使用的交流电。

- 选定流：交流电
- 流属性/单位：Energy / kWh
- 数量规则：分表计量值或有记录的分摊电表用量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 合格镀层银产品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_plating_records`
- 来源：eu-jrc-stm-bref-2006

###### 电镀工艺用水（`pl_process_water`）

记录预处理、镀槽、漂洗和减排的补充水，不与废水净额相抵。

- 选定流：工艺用水 `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- 流属性/单位：Mass / kg
- 数量规则：实测补充水质量，或用有记录密度把体积换算为质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 合格镀层银产品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_plating_records`
- 来源：eu-jrc-stm-bref-2006

###### 电镀及减排用氢氧化钠（`pl_sodium_hydroxide`）

计入清洗、pH 调节或废水及废气处理所用氢氧化钠，并记录浓度。

- 选定流：氢氧化钠 `e0abcced-0611-4c24-9290-5a2c5a0c4169`
- 流属性/单位：Mass / kg
- 数量规则：实测供应状态质量和浓度
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 合格镀层银产品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_plating_records`
- 来源：eu-jrc-stm-bref-2006

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 镀层银产品（`pl_plated_silver`）

记录净合格镀金或镀铂银，并明确仅一种镀层金属及其规格。

- 选定流：银 `7db0c01b-7605-4e92-90a1-c4bc6dd8e157`
- 流属性/单位：Mass / kg
- 数量规则：实测产品总质量，并分别报告基材和镀层质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 合格镀层银产品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_plating_records`
- 来源：un-cpc-3-0-structure-2025; eu-jrc-stm-bref-2006

##### 废物流

###### 电镀废水（`pl_wastewater`）

记录送往处理的废水，并酌情披露金、铂、银、氰化物及去向。

- 选定流：废水 `d2d44ce1-c0f4-461d-9413-f4b33e0d200f`
- 流属性/单位：Mass / kg
- 数量规则：实测排放质量，或用有记录密度把体积换算为质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 合格镀层银产品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_plating_records`
- 来源：eu-jrc-stm-bref-2006

##### 基本流

### 过程：银熔炼与铸造（`melting_casting`）

#### 输入

##### 产品流

###### 铸造用电（`mc_electricity`）

记录熔炼、保温、铸造、抽排和减排设备使用的交流电。

- 选定流：交流电
- 流属性/单位：Energy / kWh
- 数量规则：分表计量值或有记录的分摊电表用量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 铸态银输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_casting_records`
- 来源：eu-jrc-nfm-bref-2017

###### 铸造天然气（`mc_natural_gas`）

仅计入熔炼炉或保温炉燃烧的气态天然气。

- 选定流：气态天然气 `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位：Volume / m3
- 数量规则：在有记录参考条件下计量的体积
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 铸态银输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_casting_records`
- 来源：eu-jrc-nfm-bref-2017

###### 铸造用氧（`mc_oxygen`）

仅当已声明的铸造路线包括富氧燃烧或氧化步骤时，计入工业氧气。

- 选定流：工业氧气 `bd4b0f96-2090-4806-a648-335ab20ff401`
- 流属性/单位：Volume / m3
- 数量规则：在有记录参考条件下计量或供应商记录的体积
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 铸态银输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_casting_records`
- 来源：eu-jrc-nfm-bref-2017

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 铸态银产品（`mc_cast_silver`）

记录净银粒、银锭、银条或银坯；数据集中仅声明一种输出形态。

- 选定流：银 `7db0c01b-7605-4e92-90a1-c4bc6dd8e157`
- 流属性/单位：Mass / kg
- 数量规则：扣除内部返回后的实测净铸态产品质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 铸态银输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_casting_records`
- 来源：eu-jrc-nfm-bref-2017

##### 废物流

###### 铸造矿渣（`mc_slag`）

记录内部银回收后离开铸造的矿渣或浮渣，并披露化验结果和去向。

- 选定流：矿渣 `d7184b4f-1fa2-4f86-b004-3b1e9752f060`
- 流属性/单位：Mass / kg
- 数量规则：扣除内部循环后的实测外运质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 铸态银输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_casting_records`
- 来源：eu-jrc-nfm-bref-2017

##### 基本流

###### 铸造化石二氧化碳（`mc_fossil_co2`）

报告场内铸造燃料产生的直接化石二氧化碳；排除上游电力排放。

- 选定流：二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 流属性/单位：Mass / kg
- 数量规则：依据 `calc_fossil_co2` 用计量的化石碳氧化量计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 铸态银输出
- 基准类型：过程输出（`process_output`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_casting_records`
- 来源：

###### 铸造颗粒物（`mc_particulate`）

记录减排后直接排入空气且粒径未特指的颗粒物。

- 选定流：颗粒物，粒径未特指 `0ce3dedb-caca-407b-a856-a90470eb8ec0`
- 流属性/单位：Mass / kg
- 数量规则：实测烟囱排放质量，或由监测浓度和干烟气量计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 铸态银输出
- 基准类型：过程输出（`process_output`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_casting_records`
- 来源：eu-jrc-nfm-bref-2017

## 7. 分配与共产品处理

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `alloc_subdivide` | foreground_processes | 只要能够分别计量输入和输出，应通过分别计量精炼、铸造、成形、制粉、电镀、减排和内部回收作业来避免分配。 |  |
| `alloc_internal_returns` | internal_silver_loops | 将内部含银返回料作为前景系统内转移：记录其质量和回收损失，但不形成第二个承担负荷的产品输出。 | eu-jrc-nfm-bref-2017 |
| `alloc_multi_metal` | inseparable_precious_metal_outputs | 无法细分且没有有记录的物理因果关系时，按生产期净收入在可销售银、金和铂族金属输出间分配共同负荷；披露价格、期间、币种、下游扣减，并给出质量分配敏感性结果。 | eu-jrc-nfm-bref-2017 |
| `alloc_waste_recovery` | exported_residues | 仅当外运物流符合接收市场产品规格且净收入为正时，方可将其归为共产品；否则按废物建模至有记录的处理或回收边界。 |  |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_refining_records` | `silver_refining` | 全部精炼交换 | 仪表、地磅、化验、批次、发票和烟囱记录 | 批号；进料质量及化验；公用工程；试剂；产品；残余物；废水；烟囱数据 | 将批次记录与经校准仪表和化验结果核对 | 每 kg 精炼银的原始单位 | 每批或每班，按月汇总 | 具有代表性的连续 12 个月，或完整较短生产期 | 精炼设施及其减排系统 | 汇总有效记录，扣除内部返回量，再除以净输出 | 校准、化验、覆盖率、缺失数据日志、质量平衡 |
| `cp_casting_records` | `melting_casting` | 全部铸造交换 | 批次、仪表、秤量、燃料和烟囱记录 | 炉次；炉料；公用工程；产品；矿渣；碳；烟囱数据 | 将炉次表与仪表和秤量记录核对 | 每 kg 铸态银的原始单位 | 每炉次，按月汇总 | 具有代表性的连续 12 个月，或完整较短生产期 | 熔炼、铸造、抽排和减排 | 有效炉次汇总后除以净铸态输出 | 校准、炉次核对、化验、监测质量保证 |
| `cp_forming_records` | `semi_manufacturing` | 成形交换 | 订单、仪表、秤量和库存记录 | 订单；形态；输入；输出；废料；电力；润滑油库存 | 核对订单和库存 | 每 kg 产品的 kg 和 kWh | 每订单，按月汇总 | 具有代表性的连续 12 个月，或完整较短生产期 | 已声明成形及辅助设备 | 按产量加权汇总后除以净输出 | 校准、库存核对、不合格品日志 |
| `cp_powder_records` | `powder_manufacturing` | 制粉交换 | 批次、仪表、秤量、实验室和烟囱记录 | 技术；进料；公用工程；试剂；粉末；粒度；水分；废水；烟囱数据 | 核对批次、仪表、秤量、实验室和减排记录 | 每 kg 粉末的原始单位 | 每批，按月汇总 | 具有代表性的连续 12 个月，或完整较短生产期 | 已声明制粉技术及减排系统 | 雾化和湿法路线保持分开；如加权汇总须披露产量权重 | 校准、化验、粒度与水分方法、质量平衡 |
| `cp_plating_records` | `precious_metal_plating` | 电镀交换 | 订单、镀槽、仪表、秤量、化验和废水记录 | 订单；镀层金属；基材；镀液补加和库存；回收；镀层化验；公用工程；产品；废水 | 将订单和镀液金属平衡与镀层化验核对 | 每 kg 镀层银的原始单位 | 每订单和每次镀液补加，按月汇总 | 具有代表性的连续 12 个月，或完整较短生产期 | 预处理至处理 | 分别计算沉积和损失的镀层金属，再除以净输出 | 校准、镀液核对、镀层化验、废水分析 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_normalize_output` | 每个清单行 | 归一化数量 = 报告期有效交换量 ÷ 净合格过程输出；保留原单位和换算记录 | 交换量；净过程输出 | 每 kg 过程输出的数量 |  |
| `calc_silver_balance` | 每个银过程 | 进料银 = 产品银 + 外运残余物或废物银 + 实测银排放 + 库存变化；报告无法解释的差额 | 质量与化验；期初和期末在制品 | 银质量平衡及闭合度 | eu-jrc-nfm-bref-2017 |
| `calc_fossil_co2` | 直接化石碳氧化 | 化石 CO2 质量 = 完全氧化的化石碳质量 × 44/12；如不完全氧化具有实质性则单独量化 | 燃料或还原剂；化石碳比例；氧化比例 | kg 化石 CO2 |  |
| `calc_stack_mass` | 颗粒物和氮氧化物 | 排放质量 = 时间匹配的减排后浓度 × 干烟气量，并记录参考条件和含氧量修正 | 浓度；烟气流量；运行时间；修正项 | kg 污染物排放 | eu-jrc-nfm-bref-2017 |
| `calc_plating_metal` | 镀金或镀铂 | 镀层金属输入 = 供应金属含量 + 期初镀液库存 - 期末镀液库存；核对沉积、回收、废物、带出和无法解释的损失 | 镀液补加及化验；库存；镀层化验；回收和废物 | 按去向划分的 kg 金或铂 | eu-jrc-stm-bref-2006 |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | 参考产品及输入 | 声明形态、化验基准、纯度、镀层状态、进料来源、路线、技术、地理和时期；无 UUID 的行须保持显式未解决状态。 | 规格、化验、供应商记录、过程声明 |
| `dq_temporal` | 前景数据 | 连续生产采用具有代表性的连续 12 个月；较短生产期须覆盖全期并说明代表性。 | 注明日期的生产、仪表和维护记录 |
| `dq_completeness` | 过程清单 | 至少核对 95% 的运行时间和生产质量；披露排除项、估算、停机和缺失记录。 | 覆盖率计算和缺失数据日志 |
| `dq_mass_balance` | 银和镀层金属 | 调查并披露具有实质性的无法解释金属平衡差额；不得通过更改实测量强制闭合。 | 签署的核对表和化验不确定性 |
| `dq_route_separation` | 制粉和电镀路线 | 雾化、湿化学制粉、镀金和镀铂记录应分开，除非必须按产量加权汇总且各组成仍分别披露。 | 路线级产量和分配工作表 |

## 9. 校验规则

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `val_reference_flow` | reference_product | 确认恰为 1 kg 净合格产品，并声明形态、纯度、镀层状态、尺寸或粒度、路线、地理和时期。 | un-cpc-3-0-structure-2025 |
| `val_route_processes` | process_map | 确认每个适用设施过程均有详细清单，且每个条件行仅在其路线条件成立时出现。 | eu-jrc-nfm-bref-2017; eu-jrc-stm-bref-2006 |
| `val_atomic_inventory` | process_inventory | 确认每行仅为一种原子交换，每个 UUID 与流类型、属性和单位相符，且 UUID 为空的行保持未解决而不使用代理。 |  |
| `val_metal_balance` | silver_gold_platinum_balances | 重新计算银及适用镀层金属平衡，报告闭合度和不确定性，并调查无法解释的差额。 | eu-jrc-nfm-bref-2017; eu-jrc-stm-bref-2006 |
| `val_no_double_counting` | internal_recovery_and_upstream | 确认内部返回料不重复承担产品负荷，且上游电力排放未作为直接前景排放。 |  |
| `val_ranges` | quantitative_ranges | 除非两项独立原始来源具有兼容边界、单位、产品状态、地理和技术，否则拒绝外部推断范围；未解决需求继续作为采集要求。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 路线已声明银产品的前景生产数据集 |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | 与已声明形态、路线、纯度、镀层状态、地理、技术和时期一致的工厂门银模型 |
| excluded_use | 缺少采矿数据的矿石开采；银化合物或银浆；制成品；未披露的不兼容路线平均；缺少镀层金属平衡的镀层产品 |
| required_metadata | PCR 标识和版本；产品形态和规格；银化验；镀层金属和质量；进料来源和再生比例；过程标识；地理；技术；时期；分配；上游链接；废物去向；未解决 UUID |
| required_quality_disclosure | 仪表和化验覆盖率；时间代表性；质量平衡闭合度和不确定性；缺失数据和估算；路线汇总；来源与范围限制 |
| update_trigger | 形态、纯度、镀层、进料组合、再生比例、路线、技术、能源供应、减排、分配、地理或用于解决 UUID/范围需求的证据发生变化 |

## 11. 数据源

| Source id | Type | Reference | Used for | independence_key |
| --- | --- | --- | --- | --- |
| `un-cpc-3-0-structure-2025` | 官方指南（`official_guidance`） | 联合国统计司，《产品总分类（CPC）3.0 版结构》，2025 年 6 月 30 日。https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv（检索于 2026-09-04） | CPC 41310 英文标识和产品形态边界 | un-cpc-version-3-0-structure-2025 |
| `china-mof-research-goods-list-2026` | 官方指南（`official_guidance`） | 中华人民共和国财政部，采用 2026 年税则税目的科研用品清单。https://m.mof.gov.cn/zcfb/202601/P020260114634207037460.pdf（检索于 2026-09-04） | 经核验的中文产品边界术语 | china-mof-2026-research-goods-list |
| `eu-jrc-nfm-bref-2017` | 官方指南（`official_guidance`） | 欧盟委员会联合研究中心，《有色金属工业最佳可行技术参考文件》，JRC107041，2017。https://publications.jrc.ec.europa.eu/repository/bitstream/JRC107041/kjna28648enn.pdf（检索于 2026-09-04） | 银进料、精炼、电解、熔炼、铸造、回收、公用工程、残余物和排放 | eu-jrc-nfm-bref-jrc107041 |
| `eu-jrc-stm-bref-2006` | 官方指南（`official_guidance`） | 欧盟委员会，《金属与塑料表面处理最佳可行技术参考文件》，2006 年 8 月。https://bureau-industrial-transformation.jrc.ec.europa.eu/sites/default/files/2019-11/stm_bref_0806.pdf（检索于 2026-09-04） | 电镀预处理、加工、漂洗、干燥、能源、水、材料、废水和废物 | eu-jrc-stm-bref-2006 |
