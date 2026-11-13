---
pcr_id: pcr.distributive-trade-services-accommodation-food-and-beverage-serving-ser-18ff339a.wholesale-trade-services-not-on-a-fee-or-contract-basis.wholesale-trade-services-not-on-a-fee-or-contract-basis-of-yarn-and-fabrics
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 成品棉机织物整卷自营批发

## 1. 范围与适用性

本PCR覆盖供方已完成制造整理、保持原厂完整卷的棉机织物商人所有实体批发，从所有权接收经普通常温仓库管理装卸至真实企业买方验收转售。记录实际纤维组成织纹整理品项卷号、全幅可用幅布边范围长度面积、净布重水分调湿状态、芯包皮重缺陷及采用验收标准，不设标准卷规格或数量质量等价。

排除种植轧棉纺纱织造染整、特殊针织物、裁剪分切重卷替换卷形式、常规洗涤处理、零售收费代理纯仓储。实际独立检验或小分析采样为单独真实执行事件并记录样品去向不确定性，不假定生产裁切或全卷重测。转化或专门环境干预变化须新路线复核。

全部成品布继承芯包制造含损失库存上游制造均在服务外，完整链条需实际单独量化成品来源交接归属需求损失阶段覆盖一次。声明服务实际装卸接收处理作业仅一次，ASTM发布者公开范围摘要不是付费测试程序或强制批发调湿采样配方。

## 2. 产品类别身份

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.distributive-trade-services-accommodation-food-and-beverage-serving-ser-18ff339a.wholesale-trade-services-not-on-a-fee-or-contract-basis.wholesale-trade-services-not-on-a-fee-or-contract-basis-of-yarn-and-fabrics |
| classification_refs | CPC3 61031；所含266内较窄成品棉机织物原卷批发 |
| covered_products | 原厂成品棉机织物卷商人所有企业间常温货批服务 |
| excluded_products | 原棉、皮棉和纱线制造；织造整理裁剪重卷；针织特殊布；代理零售纯仓储 |
| representative_product | 具有实测状态数量限定的实际已识别成品卷货批商业验收 |
| production_route | 成品原卷供方交接 -> 所有权接收常温管理装卸 -> 企业间验收转售 |
| market_state | 计数服务；米平方米调湿净布kg芯包仍属商品审计 |


## 3. 参考流

| Field | Value |
| --- | --- |
| What | 已完成成品棉机织物原卷自营批发货批 |
| How much | 1 Item(s) |
| How well | 实际成品原卷组成整理状态计量基准缺陷及商业验收，不推通用合规承诺 |
| How long or cycle | 实际接收常温存放装卸验收区间，另列库存报表期间及资产寿命阶段 |
| reference_flow_link | `accepted_service` |

| Field | Value |
| --- | --- |
| reference_amount | 1 |
| reference_product_flow | 已完成成品棉机织物原卷自营批发货批 |
| reference_flow_property | 数量 `01846770-4cfe-4a25-8ad9-919d8d378345` |
| reference_unit_group | 数量单位组 `5beb6eed-33a9-47b8-9ede-1dfe8f679159` |
| reference_unit | Item(s) |
| required_qualifiers | consignment_id; merchant_ownership_resale; business_buyer_gate; fabric_SKU_composition_finish; roll_lot_ids; finished_supplier_gate; actual_length_unit_method; full_usable_width_selvage; compatible_area_basis; net_fabric_mass_core_wrap_tare; GSM_method_sample_representativeness; moisture_conditioning_time_temperature; defects_actual_acceptance; actual_start_end_duration_unit; site_campaign_period; original_gate_demand_loss_owner |

N>0为冲回后实际唯一最终验收商业货批，不把卷米平方米kg发票行视为此数量；失败未完成跨期资源仍保留。

## 4. 计量与单位规则

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| service_count | accepted_service | Count | Item(s) | 将唯一实际验收标识与卷数全部布尺寸质量分开。 |
| roll_measurement | 商品审计 | Length; Area; Mass | m；m2；kg；实际GSM单位 | 记录长度方法状态、全或可用幅及布边。面积=L×W仅同实际状态纳入范围，变幅需分段证据。质量=面积×实测GSM仅采样布边调湿范围匹配且有实际单位换算，不假定GSM回潮率或样品代表整货批。 |
| native_units | 全部实际用品服务出口 | 原生兼容属性 | 原生单位 | 按需保留净毛皮重密度温度和全部换算因子单位基准来源，金额缺陷分不是物理量。 |


## 5. 系统边界

### 边界抽象

| Field | Value |
| --- | --- |
| declared_starting_condition | 实际供方完成成品棉机织物原卷，身份整理条件尺寸净重水分采样皮重证据 |
| starting_condition_role | 常温商人服务继承成品商品，不新造布 |
| product_classification_scope | 61031所含266棉机织物较窄商人批发，原棉、皮棉和纱线不是该成品交接 |
| recursive_input_rule | 商品成品布芯包保持非交换库存审计，不在服务内消耗递归再造同卷。 |
| upstream_dataset_requirement | 单独匹配含实际适用纺纱织造染整卷准备的完整成品卷供方交接及实际原交接数量损失覆盖，仅原棉、皮棉来源不完整。 |
| disclosure | 实际尺寸布边GSM采样水分调湿缺陷卷芯包状态；全部货批期间验收来源需求损失资产服务商货运处理边界未知项 |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| commodity_boundary | 卷芯包 | 全部继承制造含损失商品在服务外，实体装卸实际声明接收处理在内一次。 |  |
| metrology_scope | 卷审计 | ASTM公开长度幅宽GSM范围支持分开实际方法范围及样品代表性，不引入调湿时长温湿度采样数或强制全卷重测数字。 | astm-woven-length; astm-fabric-width; astm-fabric-gsm |
| original_presentation | fabric_wholesale | 原卷包覆普通常温存放为继承状态，不是运营保鲜包装转化；实际破损缺陷水分条件拒收需有证据退回降级废弃，加工需新范围。 |  |
| period_stock | 全部实际事件 | 关联真实卷货批作业期间及检验取样清洁闲置拒收未完成事件，配对内部移动验收未完成出口分开，未知长度质量差额不是废物水分或释放物种。 |  |


## 6. 过程清单结构

### 过程图

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| fabric_wholesale | 成品原卷织物商人接收交接 | required | 实际自营成品原卷接收常温装卸并完成企业验收 | 实体商业服务和状态库存责任，不织染裁剪重卷 | `accepted_service` |

卷货批服务与仓库作业及连续辅助期间重叠。按真实卷事件关联接收检验样品清洁切换闲置发运退回拒收未完成和验收资源，不默认每卷重开重测。缺陷破损或水分状态不合格先明确隔离退回降级废弃；实际样品移除及退回有单独数量去向，不当作普通裁剪生产。期间无验收时负担不消失，跨期归属说明后仅按N归一化一次。

### 过程：成品原卷织物商人接收交接 (`fabric_wholesale`)

#### 输入

##### 产品流

###### 实际使用点交流电 (`electricity_ac`)

仅适用于实际跨越本节点边界、且未由完整供应商数据覆盖的交流电。该身份未特指供应方、电压、发电组合或交付线损归属，仍须按要求采集。经核实的电力流以1 MJ电能为基准，其ILCD属性名称为净热值；原生kWh按精确的3.6 MJ/kWh换算，不能套用燃料热值系数。直流电或其他不匹配电力状态保留在余项要求中。

- 选定流：交流电 `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- 流属性/单位：Energy / kWh
- 数量规则：以cp_energy实际量归属本参考货批，保留原生测量兼容换算。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_energy`

范围证据要求：需区间计量及全部卷作业检验闲置共享使用方范围，不支持每米或商业货批标准电耗。

###### 实际液态处理自来水供给 (`facility_water_liquid_tap`)

仅在实际来源确为处理后的自来水且用于所声明用途时适用。保留实际供应方、水质、温度状态和供应边界，不假定所有供水都是自来水。冰、瓶装矿泉水、再生水、未经处理的水及环境直接取水保留各自实际身份。沿用原卡原生质量或体积基准；最终换算为质量参考量时须有实际相容密度和状态证据，不能把目录中的次要体积关系作为默认现场密度。

- 选定流：自来水 `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- 流属性/单位：Volume / m3
- 数量规则：以cp_supplies实际量归属本参考货批，保留原生测量兼容换算。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_supplies`

范围证据要求：需真实用途计量数量外部供方范围，织物回潮调湿湿度废水不是购水直接证据。

###### 实际独立记录的聚乙烯包装薄膜 (`new_outer_protection_pe_film`)

仅适用于实际独立供应、供本服务新增包裹或衬垫使用的聚乙烯薄膜，须确认实际聚合物配方与薄膜净量。该身份为工厂门通用生产组合，仍须记录实际供给门、供应方及另负责任的交付负荷。不预设LDPE/HDPE牌号、再生比例、厚度或用量。PVC、PET、PP、多层复合材料、胶黏标签、填充包装及继承商品包装仍按余项独立身份处理；整体供应与组分不得重复计量，不预设发生。

- 选定流：聚乙烯薄膜 `e64eb06c-6dc9-45f1-b003-3dc6c44b27e2`
- 流属性/单位：Mass / kg
- 数量规则：以cp_supplies实际量归属本参考货批，保留原生测量兼容换算。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_supplies`

范围证据要求：需实际保护品项层级实测量或有证据单件面积换算，与继承纸芯皮重周转设备分开，不默认每售新造全芯包覆。

###### 实际独立记录的合成洗涤剂投入 (`operating_supplies_synthetic_detergent`)

仅适用于产品配方、供应状态及用途记录确认的实际合成表面活性洗涤剂。记录扣除包装皮重的材料净量，区分浓缩液与稀释水，整体配方与组分不得相加重复计入。肥皂、消毒剂、抹布、滤材等仍按各自实际身份记录，不预设清洁配方、剂量或发生。

- 选定流：洗涤剂 `1c57d123-df57-49ab-b9d4-957403beb8a5`
- 流属性/单位：Mass / kg
- 数量规则：以cp_supplies实际量归属本参考货批，保留原生测量兼容换算。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_supplies`

范围证据要求：需实际配方浓度净库存收期末退回及接收释放记录，继承整理剂或SDS所列化学不是新购入实测排放。

###### 实际独立确认的供应柴油 (`fuel_supply_diesel_supply`)

仅适用于本运行燃料要求内实际独立确认的柴油。通用身份为Mass/kg；记录实际配方、供应方、供给门及原生库存范围。原生数量为升时，最终换算kg须有实际相容密度、温度状态、质量体积比单位及来源，不使用目录默认密度或热值。供应库存与燃烧量是不同记录；其他燃料保留余项，购买燃料或未解释库存差不证明燃烧及排放。

- 选定流：柴油 `9d258d75-6792-4f1c-9856-81602ed8f816`
- 流属性/单位：Volume / L
- 数量规则：以cp_supplies实际量归属本参考货批，保留原生测量兼容换算。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_supplies`

范围证据要求：需真实期初净收期末互斥原生去向及适用密度温度因子来源，到场燃料不必等于验收卷燃烧量。

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 已完成成品棉机织物原卷自营批发货批 (`accepted_service`)

一个具有成品原卷身份真实数量状态品质证据、商人所有权转售并由企业买方验收的实际货批，计数服务不是米平方米或制造布kg。

- 选定流：已完成成品棉机织物原卷自营批发货批
- 流属性/单位：Count / Item(s)
- 数量规则：1 Item(s)
- 数值来源模式：`fixed_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_consignment`

范围证据要求：需真实卷品项组成成品状态长度全或可用幅布边面积净重GSM水分调湿皮重日期区间验收，不把一货批等一卷或固定面积。

###### 退回供应方的未使用合成洗涤剂 (`usable_supply_returns_detergent_return`)

仅覆盖本过程有独立实际证据的“退回供应方的未使用合成洗涤剂”。记录自身物态、净量 kg、事件来源及交接门。其他状态或接收方需在`usable_supply_returns`下独立确定身份，本卡不能替代；记录缺失不证明发生或为零。 将未使用材料的配方、供应状态和原生质量严格匹配到投入`operating_supplies_synthetic_detergent`。本卡为可用对外退料，不是废物、期末库存或内部循环。仅在总量供应口径下列此输出；投入已扣除该退料时必须省略对应退料输出，不自动抵扣避免生产。

- 选定流：洗涤剂 `1c57d123-df57-49ab-b9d4-957403beb8a5`
- 流属性/单位：Mass / kg
- 数量规则：`usable_supply_returns_detergent_return`实际独占归属的 kg / 验收 N，仅归一化一次；已按参考流给出的数量不得再次除以 N。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_supplies`

范围证据要求：需事件关联的原生 kg、状态组成、接收或供应门、归属记录及整件组分或对应投入的排他关联，使用协议`cp_supplies`。不提供默认数值或换算因子；其他原生单位须有换算证据后使用。

###### 退回供应方的未使用聚乙烯薄膜 (`usable_supply_returns_pe_film_return`)

仅覆盖本过程有独立实际证据的“退回供应方的未使用聚乙烯薄膜”。记录自身物态、净量 kg、事件来源及交接门。其他状态或接收方需在`usable_supply_returns`下独立确定身份，本卡不能替代；记录缺失不证明发生或为零。 将未使用材料的配方、供应状态和原生质量严格匹配到投入`new_outer_protection_pe_film`。本卡为可用对外退料，不是废物、期末库存或内部循环。仅在总量供应口径下列此输出；投入已扣除该退料时必须省略对应退料输出，不自动抵扣避免生产。

- 选定流：聚乙烯薄膜 `e64eb06c-6dc9-45f1-b003-3dc6c44b27e2`
- 流属性/单位：Mass / kg
- 数量规则：`usable_supply_returns_pe_film_return`实际独占归属的 kg / 验收 N，仅归一化一次；已按参考流给出的数量不得再次除以 N。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_supplies`

范围证据要求：需事件关联的原生 kg、状态组成、接收或供应门、归属记录及整件组分或对应投入的排他关联，使用协议`cp_supplies`。不提供默认数值或换算因子；其他原生单位须有换算证据后使用。

##### 废物流

###### 废弃成品棉梭织布卷 (`discarded_fabric_rolls_atomic_case`)

仅在实际独立记录确认“废弃成品棉梭织布卷”时适用。本卡只覆盖该命名实物状态及自身实际净量、保留组成和接收门。其他部件、碎片、游离液、独立包装及清理载体仍属于`discarded_fabric_rolls`中的身份核实事项；不得移动边界、预设事件、将库存差当废弃，或把仍保留在整体流内的组分另算出口。实际混收流须匹配自身准确身份。原有原生单位数量协议只用于本独占具体情形，其他实际去向分别协调。

- 选定流：废弃成品棉梭织布卷
- 流属性/单位：Mass / kg
- 数量规则：以cp_rolls实际量归属本参考货批，保留原生测量兼容换算。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_rolls`

范围证据要求：需真实废弃接收处理记录及原生质量或有据兼容面积质量测量、原成品来源交接当量，缺陷分数短码水分降低本身不是废弃kg。

###### 废弃成品棉机织物片，不含卷芯或包装 (`discarded_fabric_rolls_fabric_piece`)

仅覆盖本过程有独立实际证据的“废弃成品棉机织物片，不含卷芯或包装”。记录自身物态、净量 kg、事件来源及交接门。其他状态或接收方需在`discarded_fabric_rolls`下独立确定身份，本卡不能替代；记录缺失不证明发生或为零。 仅在实际独立收集并转移至废物接收方时启用，不得用于仍保留在整件、包装或收集混合物中的组分。保留组成只作不可相加记录。不预设开包、切割、拆解、主动干燥、回收率或处理路线，处理及运输责任只归属一次。

- 选定流：废弃成品棉机织物片，不含卷芯或包装
- 流属性/单位：Mass / kg
- 数量规则：`discarded_fabric_rolls_fabric_piece`实际独占归属的 kg / 验收 N，仅归一化一次；已按参考流给出的数量不得再次除以 N。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_rolls`

范围证据要求：需事件关联的原生 kg、状态组成、接收或供应门、归属记录及整件组分或对应投入的排他关联，使用协议`cp_rolls`。不提供默认数值或换算因子；其他原生单位须有换算证据后使用。

###### 收集并送处理的场所清洁水性废水 (`contained_wastewater_aqueous_cleaning`)

仅覆盖本过程有独立实际证据的“收集并送处理的场所清洁水性废水”。记录自身物态、净量 m3、事件来源及交接门。其他状态或接收方需在`contained_wastewater`下独立确定身份，本卡不能替代；记录缺失不证明发生或为零。 仅在实际独立收集并转移至废物接收方时启用，不得用于仍保留在整件、包装或收集混合物中的组分。保留组成只作不可相加记录。不预设开包、切割、拆解、主动干燥、回收率或处理路线，处理及运输责任只归属一次。 本卡为场所清洁水性废水，保留实际溶解或悬浮负荷及实测接收体积。排除独立收集的未稀释商品、非水液体、冷凝水或生活污水；若转移前实际混合，另定该真实混合物身份，不得叠加组分体积或称其为纯清洁水。不从供水量推算本数量。

- 选定流：收集并送处理的场所清洁水性废水
- 流属性/单位：Volume / m3
- 数量规则：`contained_wastewater_aqueous_cleaning`实际独占归属的 m3 / 验收 N，仅归一化一次；已按参考流给出的数量不得再次除以 N。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_fates`

范围证据要求：需事件关联的原生 m3、状态组成、接收或供应门、归属记录及整件组分或对应投入的排他关联，使用协议`cp_fates`。不提供默认数值或换算因子；其他原生单位须有换算证据后使用。

##### 基本流

###### 实际有独立证据的向空气排放化石二氧化碳 (`direct_species_co2_fossil_air`)

仅在实际证据确认化石来源、二氧化碳物种和向空气直接释放时适用。保留报告的碳或CO2基准，碳转CO2须独立有证据的化学计量，不预设系数或发生。 本卡仅记录本节点实际直接释放，不重复计入外购电力上游或供应商已覆盖排放。UUID表示未细分子介质的空气排放，其他实际子介质或来源仍须在余项中匹配，不能改标；缺失数据不等于零。

- 选定流：二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 流属性/单位：Mass / kg
- 数量规则：以cp_releases实际量归属本参考货批，保留原生测量兼容换算。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_releases`

范围证据要求：需实测物种或兼容实际来源活动燃烧、方法因子组成去向换算操作数单位来源，总尘挥发物笼统标签危害限值不能固定UUID或排放kg。


###### 实际有独立证据的向空气排放化石甲烷 (`direct_species_methane_fossil_air`)

仅在实际证据确认化石来源、甲烷物种和向空气直接释放时适用。生物源或来源未知甲烷仍在余项要求中，不得改标化石源；不预设泄漏发生、气体比例、数量或排放系数。 本卡仅记录本节点实际直接释放，不重复计入外购电力上游或供应商已覆盖排放。UUID表示未细分子介质的空气排放，其他实际子介质或来源仍须在余项中匹配，不能改标；缺失数据不等于零。

- 选定流：甲烷 (化石源) `08a91e70-3ddc-11dd-9610-0050c2490048`
- 流属性/单位：Mass / kg
- 数量规则：以cp_releases实际量归属本参考货批，保留原生测量兼容换算。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_releases`

范围证据要求：需实测物种或兼容实际来源活动燃烧、方法因子组成去向换算操作数单位来源，总尘挥发物笼统标签危害限值不能固定UUID或排放kg。


###### 实际有独立证据的向空气排放氧化亚氮 (`direct_species_nitrous_oxide_air`)

仅在实际证据确认氧化亚氮物种及向空气直接释放时适用。原生数量为N2O质量，不是氮质量或氮气质量，不预设排放系数或发生。 本卡仅记录本节点实际直接释放，不重复计入外购电力上游或供应商已覆盖排放。UUID表示未细分子介质的空气排放，其他实际子介质或来源仍须在余项中匹配，不能改标；缺失数据不等于零。

- 选定流：一氧化二氮 `08a91e70-3ddc-11dd-94c3-0050c2490048`
- 流属性/单位：Mass / kg
- 数量规则：以cp_releases实际量归属本参考货批，保留原生测量兼容换算。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_releases`

范围证据要求：需实测物种或兼容实际来源活动燃烧、方法因子组成去向换算操作数单位来源，总尘挥发物笼统标签危害限值不能固定UUID或排放kg。

## 7. 分配与联产品处理

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| direct_shared | 全部服务行 | 先归属直接事件，共享仓库装卸辅助需全部使用方期间含拒收未完成闲置的有证据兼容物理驱动，总量仅除真实正验收N一次，不默认平均卷或收入份额。 |  |
| asset_life | shared_assets | 完整制造维护更换寿命终结、兼容实际已用寿命驱动、观察历史加有证据剩余退役不确定性敏感性，资产当量份额或全寿命服务商一种视图，不并用重复按N。 |  |
| stock_returns | 作业用品 | 实际原生独立品项状态S=归属期初+净外收-期末。二选一：(1)毛S/N记输入，实际配对可用外退量/N单列输出；(2)净耗用(S-匹配可用外退)/N记输入，省略对应退回输出。不得把退回量加到输入或重复抵扣。回收留存为期末，废损保留上游，不作不相关或负值扣减。 |  |
| finished_gate | 商品 | 以原单位状态有证据换算追踪实际完整成品卷原交接归属验收货批及有证据废弃状态变化份额期末可用退回其他出口。新增关联需求=实际所需交接需求减基线同一已含需求损失，在服务外按阶段状态范围匹配一次。仅原棉、皮棉和纱线来源缺纺纱织造整理须在外组装，不设GSM水分收缩缺陷到损失通用乘数。 |  |
| exit_owner | 全部出口 | 实际接收处理仅有一个归属，整废卷组分视图不能重复废物。可用商品退回降级仍为商品审计，不自动避免制造抵扣，原交接接收范围未知阻止完整链条就绪。 |  |
| commodity_link_scope | nonexchange commodity interface | 原交接库存及已完成外部集成保留实际记录的原始数量。声明source_assignment_scope_id、实际target_consignment_ids/target_cohort_id及source_assignment_quantity_basis，分为single_consignment_case、target_cohort_total或already_per_reference。仅当正same_target_scope_N准确覆盖已分配目标范围时，目标群原始总量才按source_link_per_service_quantity=source_link_assigned_raw_quantity/same_target_scope_N形成与1个accepted_service组合且仅用一次的接口，须原生单位状态来源及接收撤销证据。单货批N=1与已每参考量不再除一次。外部实际库存或阶段集成记录不得按服务N缩量，也不得以整个来源群N去除较窄目标已分配量；保留原始量与明确仅一次关联。 |  |


## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_consignment | fabric_wholesale | accepted_service | 商业交接成品卷验收 | site_id; campaign_id; period_id; consignment_id; supplier_id; contract_id; ownership_start; resale_risk; business_buyer; SKU; fibre_composition; weave; finish_state; supplier_release; supplier_finished_gate; roll_ids; actual_quantity_unit; seal_wrap_state; defect_acceptance; quality_criteria; receipt_date; dispatch_date; actual_start; actual_end; time_zone; duration; duration_unit; acceptance_record; reversal_id; N | 核实实际原成品卷身份自营验收转售，保留真实声明数量及采用品质证据。 | Item(s) | 每验收冲回 | 全部实际关联服务库存资产期间 | 实际商人商业交接 | per reference flow | 真实实测原生记录校准范围归属不确定性 |
| cp_rolls | fabric_wholesale | 商品备查; discarded_fabric_rolls | 卷尺寸调湿质量成品交接库存台账 | site_id; campaign_id; period_id; consignment_id; lot_id; roll_id; event_id; event_time; time_zone; SKU; roll_count; roll_unit; length; length_unit; length_conversion_factor; length_factor_unit; length_factor_basis; length_factor_source; width_conversion_factor; width_factor_unit; width_factor_basis; width_factor_source; area_conversion_factor; area_factor_unit; area_factor_basis; area_factor_source; mass_conversion_factor; mass_factor_unit; mass_factor_basis; mass_factor_source; GSM_conversion_factor; GSM_factor_unit; GSM_factor_basis; GSM_factor_source; compatibility_basis; compatibility_source; length_method; length_source; full_width; usable_width; width_unit; width_method; width_source; selvage_inclusion; measured_segments; segment_units; actual_area; area_unit; area_extent; area_method; gross_roll_mass; core_mass; wrap_mass; other_tare; tare_unit; net_fabric_mass; mass_unit; measured_GSM; GSM_unit; GSM_method; GSM_source; specimen_type; sample_location; sample_selection; sample_size; sample_unit; sample_time; sample_removal; sample_return; sample_fate; lot_representativeness; conditioning_state; conditioning_start; conditioning_end; conditioning_duration; conditioning_duration_unit; temperature; temperature_unit; relative_humidity; humidity_unit; moisture; moisture_unit; moisture_wet_dry_basis; moisture_method; moisture_source; calibration; measurement_uncertainty; defects; defect_unit; defect_extent; original_wrap_state; opening; external_receipts; buyer_returns; physical_dispatch; net_accepted_dispatch; closing; supplier_returns; useful_other_exits; actual_discard; discard_unit; discard_composition; discard_receiver; discard_treatment_scope; state_change; state_change_method; state_change_unit; state_change_basis; state_change_source; unexplained_residual; source_gate_quantity; source_gate_unit; source_gate_state; source_gate_dataset; source_gate_conversion_method; source_gate_conversion_factor; conversion_unit; conversion_basis; conversion_source; source_stage_coverage; missing_upstream_stage; assigned_gate_demand; baseline_same_loss_coverage; additional_gate_demand; commodity_owner; adjustment_status; source_assignment_scope_id; source_assignment_quantity_basis; target_consignment_ids; target_cohort_id; source_quantity_already_per_reference; external_raw_integration_quantity_preserved; once_only_service_link_evidence; source_link_assigned_raw_quantity; source_link_assigned_raw_quantity_unit; source_link_assigned_raw_quantity_basis; source_link_assigned_raw_quantity_method; source_link_assigned_raw_quantity_state; source_link_assigned_raw_quantity_source; source_link_assigned_raw_quantity_sample_time; same_target_scope_N; same_target_scope_N_unit; same_target_scope_N_basis; same_target_scope_N_method; same_target_scope_N_state; same_target_scope_N_source; same_target_scope_N_sample_time; source_link_per_service_quantity; source_link_per_service_quantity_unit; source_link_per_service_quantity_basis; source_link_per_service_quantity_method; source_link_per_service_quantity_state; source_link_per_service_quantity_source; source_link_per_service_quantity_sample_time; flow_row_id; actual_identity_case; actual_substance_or_material; actual_state_and_gate; case_activation_evidence; quantity_exclusion_links; whole_total_reconciliation | 保留每个真实测量继承卷样品方法状态范围不确定性，仅布边调湿采样兼容才联系尺寸GSM质量，核对全部库存来源交接需求而不虚构差额去向。 只归属独立确认的实物情形，其他实际去向按来源分别保留；每个原生记录只属于一个交换，任何总量仅作不可相加审计。 | 实际m/m2/kg/GSM及原生库存单位 | 每真实移动计量采样库存边界 | 全部实际关联服务库存资产期间 | 实际卷货批样品及原成品供方范围 | per reference flow | 真实实测原生记录校准范围归属不确定性 |
| cp_energy | fabric_wholesale | electricity; fuel_supply | 实际仓库计量燃烧台账 | site_id; period_id; consignment_id; asset_id; event_id; start_time; end_time; time_zone; duration; duration_unit; meter_id; carrier; reading_start; reading_end; reading_unit; actual_driver; driver_unit; all_consumer_driver; all_consumer_unit; inspection_cleaning_idle_scope; actual_burn; burn_unit; burn_method; nonburned_return; nonburned_waste; nonburned_loss; closing; provider_coverage; uncertainty; flow_row_id; actual_identity_case; actual_substance_or_material; actual_origin_and_medium; actual_state_and_gate; case_activation_evidence; typed_or_residual_quantity; quantity_exclusion_links; whole_total_reconciliation; unresolved_occurrence_not_zero | 记录真实事件期间表差及单独实测燃烧，重建燃烧需完整互斥原生库存去向并调查未知损失。 按flow_row_id与actual_identity_case划分实际原生记录，仅有证据的分支适用。具体分支与余项在节点内数量互斥，每个实物出入只归属一次，并与相容同范围不可相加总量协调。发生或数量未知仍待采集，不能填零。 | 实际能源燃料单位 | 每计量事件区间 | 全部实际关联服务库存资产期间 | 全部实际服务使用方 | per reference flow | 真实实测原生记录校准范围归属不确定性 |
| cp_supplies | fabric_wholesale | facility_water; new_outer_protection; operating_supplies; fuel_supply; usable_supply_returns | 实际原生用品外退库存 | site_id; period_id; consignment_id; event_id; event_time; time_zone; SKU; formulation; concentration; concentration_unit; composition_basis; composition_source; native_unit; opening; receipt_gross; receipt_tare; receipt_net; closing; retained_recovery; usable_external_return; return_recipient; matched_input_id; gross_consumed_view; omit_matched_return_exchange; actual_waste; actual_loss; inherited_new_pack_level; density; density_unit; temperature; temperature_unit; conversion_factor; factor_unit; factor_basis; factor_source; actual_purpose; original_supply_owner; provider_coverage; uncertainty; flow_row_id; actual_identity_case; actual_substance_or_material; actual_origin_and_medium; actual_state_and_gate; case_activation_evidence; typed_or_residual_quantity; quantity_exclusion_links; whole_total_reconciliation; unresolved_occurrence_not_zero | 计量同状态净收库存真实外部去向，继承芯包不是新作业输入，净额需独立供应匹配及省退回交换。 按flow_row_id与actual_identity_case划分实际原生记录，仅有证据的分支适用。具体分支与余项在节点内数量互斥，每个实物出入只归属一次，并与相容同范围不可相加总量协调。发生或数量未知仍待采集，不能填零。 柴油升转kg须有实际相容密度、温度状态、质量体积比单位及来源，不预设换算。 | 实际原生供应单位 | 每收领退盘点 | 全部实际关联服务库存资产期间 | 实际独立服务供应 | per reference flow | 真实实测原生记录校准范围归属不确定性 |
| cp_assets | fabric_wholesale | shared_assets | 全寿命资产使用方期间记录 | site_id; period_id; consignment_id; asset_id; consumer_id; phase_id; event_date; manufacture_dataset; maintenance; replacement; end_of_life; driver_used; driver_used_unit; lifetime_driver; lifetime_driver_unit; observed_history; evidenced_remaining; remainder_source; termination; attribution_view; uncertainty; sensitivity; update_trigger | 列全部仓库装卸周转资产使用方阶段，匹配完整寿命兼容已用寿命单位及有证据剩余。 | Item(s)或实际寿命原生单位 | 每资产事件期间复核 | 全部实际关联服务库存资产期间 | 全部实际使用方完整资产寿命 | per reference flow | 真实实测原生记录校准范围归属不确定性 |
| cp_providers | fabric_wholesale | provider_services | 实际完成实体服务范围 | site_id; period_id; consignment_id; provider_id; service_id; event_date; completed_result; physical_quantity; native_unit; duration; duration_unit; performed_inspection_sample_scope; completion_evidence; material_coverage; energy_coverage; chemical_coverage; asset_lifecycle_coverage; freight_coverage; treatment_coverage; direct_release_coverage; actual_driver; driver_unit; all_consumer_driver; all_consumer_unit; missing_coverage | 核实真实执行成果原生单位完整范围，分开继承供方报告及实际重复检验，核对直接服务商归属。 | 实际服务商物理原生单位 | 每实际成果 | 全部实际关联服务库存资产期间 | 实际合同责任 | per reference flow | 真实实测原生记录校准范围归属不确定性 |
| cp_freight | fabric_wholesale | freight | 实际货载路段服务商覆盖 | site_id; period_id; consignment_id; leg_id; event_date; mode; provider_id; actual_cargo; cargo_unit; fabric_mass; core_mass; wrap_mass; other_included_tare; tare_scope; load_conversion_factor; load_factor_unit; load_factor_basis; load_factor_source; distance; distance_unit; distance_conversion_factor; distance_factor_unit; distance_factor_basis; distance_factor_source; empty_return_scope; actual_driver; driver_unit; all_consumer_driver; all_consumer_unit; provider_native_unit; supplier_delivered_coverage; duplicate_leg_check | 以实际运输布芯包皮重范围距离及明确原生换算全部使用方份额，保留到货交接空返退回范围一次。 | kg*km或实际原生货运单位 | 每纳入真实路段 | 全部实际关联服务库存资产期间 | 实际商品服务废物运输范围 | per reference flow | 真实实测原生记录校准范围归属不确定性 |
| cp_fates | fabric_wholesale | environmental_water; other_wastes; contained_wastewater; water_outfalls | 实际来源接收水废物测量 | site_id; period_id; consignment_id; event_id; event_time; time_zone; material_source; source_location; native_quantity; native_unit; measured_mass; mass_unit; collected_volume; received_volume; volume_unit; density; density_unit; temperature; temperature_unit; composition; concentration; concentration_unit; composition_basis; composition_source; conversion_factor; factor_unit; factor_basis; factor_source; purchased_direct_water; receiver; receiving_medium; treatment_dataset; treatment_coverage; direct_outfall; actual_driver; driver_unit; all_consumer_driver; all_consumer_unit; uncertainty | 计量真实原生来源接收状态数量组成处理归属，取水购水容装转移直接排口分开不可相加。 | 实际原生水废物单位 | 每实际来源接收排口事件 | 全部实际关联服务库存资产期间 | 实际服务来源接收范围 | per reference flow | 真实实测原生记录校准范围归属不确定性 |
| cp_releases | fabric_wholesale | direct_species | 实际来源物种介质测量或因子台账 | site_id; period_id; consignment_id; event_id; start_time; end_time; time_zone; duration; duration_unit; source_role; actual_species; receiving_medium; particle_size_basis; measurement; measurement_unit; actual_activity; activity_unit; actual_burn; burn_unit; factor; factor_unit; factor_basis; factor_source; composition; composition_basis; composition_source; release_fraction; fate_basis; fate_source; gas_volume; volume_unit; pressure; pressure_unit; temperature; temperature_unit; molecular_conversion; conversion_unit; conversion_source; method; method_version; provider_coverage; uncertainty; flow_row_id; actual_identity_case; actual_substance_or_material; actual_origin_and_medium; actual_state_and_gate; case_activation_evidence; typed_or_residual_quantity; quantity_exclusion_links; whole_total_reconciliation; unresolved_occurrence_not_zero | 仅采用真实物种介质证据及适用实际来源方法完整操作数单位来源，完整因子不重复乘组成去向，未知织物水分质量差不是污染物物种方法。 按flow_row_id与actual_identity_case划分实际原生记录，仅有证据的分支适用。具体分支与余项在节点内数量互斥，每个实物出入只归属一次，并与相容同范围不可相加总量协调。发生或数量未知仍待采集，不能填零。 | kg实际物种及原生操作数 | 每真实实测模型区间 | 全部实际关联服务库存资产期间 | 实际来源受纳介质 | per reference flow | 真实实测原生记录校准范围归属不确定性 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| normalization | 全部行 | 将真实事件及兼容全部使用方份额归属实际货批群，保留闲置失败未完成作业，仅除正验收N一次。 | cp_consignment; cp_energy; cp_supplies; cp_assets; cp_providers; cp_freight; cp_fates; cp_releases | 实际每参考服务量 |  |
| dimension_mass | 卷审计 | 对兼容实际同状态范围分段，换m后面积=各长度i×纳入幅宽i之和，全幅可用幅布边面积分开。净布重=毛卷重减实际芯包其他皮重。仅样品货批布边调湿基准单位因子一致才用面积×实测GSM转质量，否则保留各测量差异，不默认密度GSM回潮率。 | cp_rolls | 具有兼容不确定性的实际卷长度面积净重 | astm-woven-length; astm-fabric-width; astm-fabric-gsm |
| stock_demand | 卷备查 | 兼容同状态卷库存：期初+外收+买方退回-期末-实物发运-供方退回-可用其他出口-实际废弃-净样品移除=未知差额。另核真实尺寸质量状态变化，按原单位状态映射成品原交接量至验收需求有证据损失期末可用出口。服务外一次新增关联需求核对同基线阶段损失覆盖，不用差额推废弃或通用缺陷GSM收缩因子。 | cp_rolls; cp_consignment | 审计实际库存及单独关联成品来源交接需求 |  |
| freight_quantity | freight | 实际kg*km=实际纳入货载换kg×实际距离换km，记录不重叠份额供方服务商范围一次，其他原生货运单位保留匹配数据支持。 | cp_freight | 每参考实际归属货运 |  |
| actual_species | direct_species; direct_species_co2_fossil_air; direct_species_methane_fossil_air; direct_species_nitrous_oxide_air | 用真实物种介质测量或兼容来源特定实际活动燃烧因子，所需组成去向换算证据仅一次，气体换算保留实际压力温度组成，完整因子不再乘。库存短缺缺陷安全限值不能量化物种排放。 | cp_releases; cp_energy; cp_rolls | 每参考真实有证据物种 |  |

### 数据质量要求

| requirement_id | applies_to | requirement | evidence |
| --- | --- | --- | --- |
| identity_state | 全部行 | 最终交换前要求实际材料服务物种接收及原生属性支持，数量支持不识别布或服务流。 | 核实详情及真实前景配置 |
| roll_basis | 卷审计 | 保留真实方法兼容全可用幅布边净皮重GSM调湿水分及样品货批代表性，公开范围不提供数字调湿采样默认或付费程序。 | cp_rolls；实际供方采用计量证据 |
| scope_quality | 全部责任 | 直接服务商资产处理范围一次，成品供方阶段基线损失归属需求在服务外，独立可比范围未知差额明确。 | 全部使用方期间接收覆盖计量不确定性 |

| requirement_id | applies_to | requirement | evidence |
| --- | --- | --- | --- |
| electricity | fabric_wholesale | 电表记录对应哪个供电点、交直流状态、电压和供应方数据集？核对已列交流电卡与其他有证据的供电，不得将交流电 UUID 用于其他能源。 计量实际照明卷材装卸设备、真实执行检验及业务辅助，不在本服务插入织造染整能源。 范围证据要求：需区间计量及全部卷作业检验闲置共享使用方范围，不支持每米或商业货批标准电耗。 计量证据：协议`cp_energy`；原记录口径 Energy / kWh。原数量约束“以cp_energy实际量归属本参考货批，保留原生测量兼容换算。”仅逐一适用于身份及单位匹配的独立流，不生成类目合计交换，也不将原记录单位套用于不同物料或服务。已按参考流给出的数量不得再次归一化。 已明确的流卡：`electricity_ac`。其他实际状态须先解决上述具体证据问题，不得套用这些身份。 本记录不是交换，不能生成类目合计数量。 | `cp_energy`; 实际来源关联原生记录 |
| facility_water | fabric_wholesale | 供应记录是否证明为处理自来水，还是其他明确水质或水源？核实供水状态及交接门，不得用自来水卡替代其他水。 实际清洁辅助水与继承织物水分及上游湿整理分开，真实检测样品辅助仅执行有记录时纳入。 范围证据要求：需真实用途计量数量外部供方范围，织物回潮调湿湿度废水不是购水直接证据。 计量证据：协议`cp_supplies`；原记录口径 Volume / m3。原数量约束“以cp_supplies实际量归属本参考货批，保留原生测量兼容换算。”仅逐一适用于身份及单位匹配的独立流，不生成类目合计交换，也不将原记录单位套用于不同物料或服务。已按参考流给出的数量不得再次归一化。 已明确的流卡：`facility_water_liquid_tap`。其他实际状态须先解决上述具体证据问题，不得套用这些身份。 本记录不是交换，不能生成类目合计数量。 | `cp_supplies`; 实际来源关联原生记录 |
| new_outer_protection | fabric_wholesale | 取得包装物料单或规格、材料或复合层身份及新增与继承包装的责任。按该记录逐项确定尚缺的套袋、封口、标签、捆扎带或支撑件身份；一体复合包装不得拆成可相加的材料交换。 仅纳入不分切重卷替换原卷形式而真实新增外膜绑带标签，继承纸芯包覆为商品状态，周转卷架用资产寿命。 范围证据要求：需实际保护品项层级实测量或有证据单件面积换算，与继承纸芯皮重周转设备分开，不默认每售新造全芯包覆。 计量证据：协议`cp_supplies`；原记录口径 Mass / kg。原数量约束“以cp_supplies实际量归属本参考货批，保留原生测量兼容换算。”仅逐一适用于身份及单位匹配的独立流，不生成类目合计交换，也不将原记录单位套用于不同物料或服务。已按参考流给出的数量不得再次归一化。 已明确的流卡：`new_outer_protection_pe_film`。其他实际状态须先解决上述具体证据问题，不得套用这些身份。 本记录不是交换，不能生成类目合计数量。 | `cp_supplies`; 实际来源关联原生记录 |
| operating_supplies | fabric_wholesale | 取得下述清洁或维护职责实际采购品号、配方或安全数据表、供应浓度、物态、用途及库存领用记录。逐项核实洗涤剂以外的实际材料；不得由本 PCR 预设药剂、滤材或剂量。 以原生品项状态展开实际润滑剂清洁剂吸附材计量检测耗材等辅助，染料整理加工化学和自动防虫霉处理在此路线外。 范围证据要求：需实际配方浓度净库存收期末退回及接收释放记录，继承整理剂或SDS所列化学不是新购入实测排放。 计量证据：协议`cp_supplies`；原记录口径 Mass / kg。原数量约束“以cp_supplies实际量归属本参考货批，保留原生测量兼容换算。”仅逐一适用于身份及单位匹配的独立流，不生成类目合计交换，也不将原记录单位套用于不同物料或服务。已按参考流给出的数量不得再次归一化。 已明确的流卡：`operating_supplies_synthetic_detergent`。其他实际状态须先解决上述具体证据问题，不得套用这些身份。 本记录不是交换，不能生成类目合计数量。 | `cp_supplies`; 实际来源关联原生记录 |
| fuel_supply | fabric_wholesale | 库存记录对应哪种燃料牌号、配方及供给门？核实已列柴油以外的实际燃料及原生单位；体积转质量前取得实际密度。 保留实际牌号原生供应库存，燃烧与未燃退回废损另记，完整雇用承运装卸可能已含该燃料。 范围证据要求：需真实期初净收期末互斥原生去向及适用密度温度因子来源，到场燃料不必等于验收卷燃烧量。 计量证据：协议`cp_supplies`；原记录口径 Volume / L。原数量约束“以cp_supplies实际量归属本参考货批，保留原生测量兼容换算。”仅逐一适用于身份及单位匹配的独立流，不生成类目合计交换，也不将原记录单位套用于不同物料或服务。已按参考流给出的数量不得再次归一化。 已明确的流卡：`fuel_supply_diesel_supply`。其他实际状态须先解决上述具体证据问题，不得套用这些身份。 本记录不是交换，不能生成类目合计数量。 | `cp_supplies`; 实际来源关联原生记录 |
| provider_services | fabric_wholesale | 取得本记录中明列各职责的供应商合同或完成结果记录、原生计量物理单位及包含资源。确定各项服务结果身份；检验、清洁、装卸为不同服务，价格或小时不得改称件数。 用原生物理单位计真实完成外包装卸仓储检验检测维护卫生辅助，供方计量报告为继承证据，不证明批发重复检测。 范围证据要求：需实际成果单位执行采样范围及全部材料能源资产货运处理覆盖，不由标准公开范围推全卷检验或付费测试流程。 计量证据：协议`cp_providers`；原记录口径 Count / Item(s)。原数量约束“以cp_providers实际量归属本参考货批，保留原生测量兼容换算。”仅逐一适用于身份及单位匹配的独立流，不生成类目合计交换，也不将原记录单位套用于不同物料或服务。已按参考流给出的数量不得再次归一化。 本记录不是交换，不能生成类目合计数量。 | `cp_providers`; 实际来源关联原生记录 |
| shared_assets | fabric_wholesale | 对本记录中明列的每种资产取得资产编号、配置及匹配的完整生命周期数据集。待补的是各资产或服务身份及全寿命全部使用者分母；仓库、叉车、托盘不能共用一条计数交换，也不能套用默认寿命。 对实际建筑货架卷材叉装卷架计量信息周转运输资产，跨全部使用方覆盖完整制造维护更换寿命终结。 范围证据要求：需兼容已用寿命驱动单位观察历史有证据剩余退役不确定性及全部期间使用方，卷数不等于整资产或固定寿命。 计量证据：协议`cp_assets`；原记录口径 Count / Item(s)。原数量约束“以cp_assets实际量归属本参考货批，保留原生测量兼容换算。”仅逐一适用于身份及单位匹配的独立流，不生成类目合计交换，也不将原记录单位套用于不同物料或服务。已按参考流给出的数量不得再次归一化。 本记录不是交换，不能生成类目合计数量。 | `cp_assets`; 实际来源关联原生记录 |
| freight | fabric_wholesale | 对实际入库、出库、退运及废物运输段取得运输方式或车辆、温控服务、起终点、实际载荷和距离及供应方覆盖。方式或配置未明确前不能选择运输流；不同运输方式不得合成一条 kg*km 流。 用实际织物加纸芯包覆声明皮重货载，而非仅可售面积标称GSM；分开供方到货交接路段退回及实际空返共享旅程。 范围证据要求：需实际载荷皮重纸芯包装范围路段距离兼容换算份额来源，不设每卷幅宽面积或车辆装载通用因子。 计量证据：协议`cp_freight`；原记录口径 Mass*distance / kg*km。原数量约束“以cp_freight实际量归属本参考货批，保留原生测量兼容换算。”仅逐一适用于身份及单位匹配的独立流，不生成类目合计交换，也不将原记录单位套用于不同物料或服务。已按参考流给出的数量不得再次归一化。 本记录不是交换，不能生成类目合计数量。 | `cp_freight`; 实际来源关联原生记录 |
| environmental_water | fabric_wholesale | 按取水许可或计量记录确定实际取水口、地表水体或含水层、位置及水源实测量。地表水和地下水需不同源身份；购买水用量不能证明直接取水。 仅仓库真实直接提取时记录取水来源，继承棉水分或空气调湿状态不是虚构取水。 范围证据要求：需水源地点用途计量及报表边界，购入设施水仍为Product，不采用每米布升水因子。 计量证据：协议`cp_fates`；原记录口径 Volume / m3。原数量约束“以cp_fates实际量归属本参考货批，保留原生测量兼容换算。”仅逐一适用于身份及单位匹配的独立流，不生成类目合计交换，也不将原记录单位套用于不同物料或服务。已按参考流给出的数量不得再次归一化。 本记录不是交换，不能生成类目合计数量。 | `cp_fates`; 实际来源关联原生记录 |
| usable_supply_returns | fabric_wholesale | 将对外退料凭据匹配到唯一投入品号、状态、原生单位及接收方。采用净消耗投入时省略对应退料交换；商品退货及期末库存另作审计记录。 仅真实相同独立供应范围外退匹配作业输入，净消耗口径省略对应退回交换，商人织物芯包退回仍属库存审计。 范围证据要求：需真实原生转移接收输入状态匹配，留存回收内部循环为期末，不负值不匹配输入或自动抵扣。 计量证据：协议`cp_supplies`；原记录口径 Mass / kg。原数量约束“以cp_supplies实际量归属本参考货批，保留原生测量兼容换算。”仅逐一适用于身份及单位匹配的独立流，不生成类目合计交换，也不将原记录单位套用于不同物料或服务。已按参考流给出的数量不得再次归一化。 已明确的流卡：`usable_supply_returns_detergent_return`; `usable_supply_returns_pe_film_return`。其他实际状态须先解决上述具体证据问题，不得套用这些身份。 本记录不是交换，不能生成类目合计数量。 | `cp_supplies`; 实际来源关联原生记录 |
| discarded_fabric_rolls | fabric_wholesale | 取得下述实际出口的独立转移凭据，含来源整件或品号、物态、保留组成、接收方及处理范围。匹配到一张已列实物卡；尚未匹配的部件、液体或污染混合物需自身明确身份，不能把本记录 ID 当废物流。 记录实际接收废弃卷局部样品量及真实布芯包组成，接收混合卷时组分审计不另加重复废物交换，继承制造留在服务外。 范围证据要求：需真实废弃接收处理记录及原生质量或有据兼容面积质量测量、原成品来源交接当量，缺陷分数短码水分降低本身不是废弃kg。 计量证据：协议`cp_rolls`；原记录口径 Mass / kg。原数量约束“以cp_rolls实际量归属本参考货批，保留原生测量兼容换算。”仅逐一适用于身份及单位匹配的独立流，不生成类目合计交换，也不将原记录单位套用于不同物料或服务。已按参考流给出的数量不得再次归一化。 已明确的流卡：`discarded_fabric_rolls_atomic_case`; `discarded_fabric_rolls_fabric_piece`。其他实际状态须先解决上述具体证据问题，不得套用这些身份。 本记录不是交换，不能生成类目合计数量。 | `cp_rolls`; 实际来源关联原生记录 |
| other_wastes | fabric_wholesale | 取得下述实际出口的独立转移凭据，含来源整件或品号、物态、保留组成、接收方及处理范围。匹配到一张已列实物卡；尚未匹配的部件、液体或污染混合物需自身明确身份，不能把本记录 ID 当废物流。 按真实接收状态展开实际辅助清洁组分及服务新增保护，排除整废卷已含组成。 范围证据要求：需实测原生量换算组成处理覆盖，废继承纸芯不自动产生新购芯输入或回收材料抵扣。 计量证据：协议`cp_fates`；原记录口径 Mass / kg。原数量约束“以cp_fates实际量归属本参考货批，保留原生测量兼容换算。”仅逐一适用于身份及单位匹配的独立流，不生成类目合计交换，也不将原记录单位套用于不同物料或服务。已按参考流给出的数量不得再次归一化。 本记录不是交换，不能生成类目合计数量。 | `cp_fates`; 实际来源关联原生记录 |
| contained_wastewater | fabric_wholesale | 取得下述实际出口的独立转移凭据，含来源整件或品号、物态、保留组成、接收方及处理范围。匹配到一张已列实物卡；尚未匹配的部件、液体或污染混合物需自身明确身份，不能把本记录 ID 当废物流。 用实际清洁真实采样辅助产生送处理液体，普通批发不在此洗整织物或产生上游纺织废水。 范围证据要求：需收集接收体积原生组成基准用途来源处理归属，织物水分或全部进水不能代实测废水。 计量证据：协议`cp_fates`；原记录口径 Volume / m3。原数量约束“以cp_fates实际量归属本参考货批，保留原生测量兼容换算。”仅逐一适用于身份及单位匹配的独立流，不生成类目合计交换，也不将原记录单位套用于不同物料或服务。已按参考流给出的数量不得再次归一化。 已明确的流卡：`contained_wastewater_aqueous_cleaning`。其他实际状态须先解决上述具体证据问题，不得套用这些身份。 本记录不是交换，不能生成类目合计数量。 | `cp_fates`; 实际来源关联原生记录 |
| water_outfalls | fabric_wholesale | 确定直接排口、接收水体或土壤介质、实测水量及独立分析的污染物种。送处理的下水道转移不是该排口；接收介质未明时不能确定基本流。 仅实际排入环境介质为此流，与容装Waste转移不同，保留真实水质物种视图不重复体积。 范围证据要求：需真实排口地点区间实测体积组成，污水收集或不明潮湿不是直接排放证据。 计量证据：协议`cp_fates`；原记录口径 Volume / m3。原数量约束“以cp_fates实际量归属本参考货批，保留原生测量兼容换算。”仅逐一适用于身份及单位匹配的独立流，不生成类目合计交换，也不将原记录单位套用于不同物料或服务。已按参考流给出的数量不得再次归一化。 本记录不是交换，不能生成类目合计数量。 | `cp_fates`; 实际来源关联原生记录 |
| direct_species | fabric_wholesale | 按排放或采样记录确定各实测排放的来源事件、化学物或粒径身份、来源属性及接收介质。物种、粒径或介质不明须保留具体证据缺口；化学品总用量或库存损失不能提供这些身份。 仅展开实际有支持燃烧清洁维护或织物来源粉尘水化学物种受纳介质，布质量差额继承整理化学不意味着排放污染物粒径分子式。 范围证据要求：需实测物种或兼容实际来源活动燃烧、方法因子组成去向换算操作数单位来源，总尘挥发物笼统标签危害限值不能固定UUID或排放kg。 计量证据：协议`cp_releases`；原记录口径 Mass / kg。原数量约束“以cp_releases实际量归属本参考货批，保留原生测量兼容换算。”仅逐一适用于身份及单位匹配的独立流，不生成类目合计交换，也不将原记录单位套用于不同物料或服务。已按参考流给出的数量不得再次归一化。 已明确的流卡：`direct_species_co2_fossil_air`; `direct_species_methane_fossil_air`; `direct_species_nitrous_oxide_air`。其他实际状态须先解决上述具体证据问题，不得套用这些身份。 本记录不是交换，不能生成类目合计数量。 | `cp_releases`; 实际来源关联原生记录 |


## 9. 验证规则

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| accepted_count | accepted_service | 核实商人转售最终正验收货批N及全部物理限定，不等卷米平方米kg。 |  |
| roll_compatibility | 商品 | 检查实际长度全可用幅布边净芯包皮重水分温度调湿样品GSM方法匹配换算，基准不一致或不代表性小样不能定货批质量。 | astm-woven-length; astm-fabric-width; astm-fabric-gsm |
| route_exits | fabric_wholesale | 要求真实验收拒收损坏样品退回降级废弃状态接收，不默加裁剪重卷或将未解决拒收卷计验收。 |  |
| upstream_interface | 商品 | 完整实际成品原交接状态归属需求换算期末可用出口与已有同一损失在外匹配一次，仅原棉、皮棉和纱线不足。 |  |
| all_period_owners | 全部服务义务 | 列全部使用方期间事件完整资产阶段兼容已用寿命驱动及观察有证据剩余，失败未完成保留负担，不重复服务商处理货运按N退回抵扣。 |  |
| physical_evidence | 全部行 | 要求实际原生量接收来源单位基准换算物种证明，净消耗省匹配退回，整卷组分水物种不可相加。 |  |
| validate_concrete_identity_decisions | all inventory rows | 将每项实际身份核实事项落实到实物明确的流卡和原生数量，或提供不适用证据。证据检查点 ID 不是交换。发生、物种、状态、接收方或服务配置缺失时阻断最终数据完成，不默认零。按规定保持整体与组分、总量投入与对应退料的排他关系。 |  |

## 10. 发布数据集画像

| Field | Value |
| --- | --- |
| dataset_role | 身份及实际完整性审核后secondary_dataset；background_dataset |
| downstream_use | 单独关联完整成品布供方交接及实际归属需求损失的成品原卷棉机织物批发附加 |
| allowed_use | 实际商人所有常温原卷成品棉机织物货批，尺寸质量调湿兼容且真实买方验收 |
| excluded_use | 独立布足迹；原棉、皮棉和纱线或针织特殊布；制造裁剪重卷；付费测试合规配方；代理零售纯仓储 |
| required_metadata | 实际品项组成织纹整理卷货批商人买方地点期间、长度幅宽布边面积净皮重GSM水分调湿采样缺陷验收、成品交接需求损失归属、真实服务商资产货运处理范围 |
| required_quality_disclosure | 实际流支持缺口尺寸调湿质量采样代表性范围不确定性、缺上游阶段基线损失覆盖、未知库存去向全部使用方寿命假设 |
| update_trigger | 纤维整理形式测量采样状态验收或加工、专门保鲜、供方交接损失接口、资产服务商货运处理责任变化 |


## 11. 数据源

| source_id | type | reference | used_for |
| --- | --- | --- | --- |
| unsd-cpc3-fabric-wholesale | official_guidance | UNSD CPC3 explanatory notes (30 June2025), printed pages301–302,61031/group266. https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | 仅分类支持棉机织物商人服务为纱布批发较窄子集。 |
| astm-woven-length | standard | ASTM D3773/D3773M-10(2024), public publisher abstract/scope only. https://store.astm.org/d3773_d3773m-10r24.html | 整卷布匹与真实长度方法区分，不采用付费程序或强制批发重测。 |
| astm-fabric-width | standard | ASTM D3774-18(2024), public publisher scope only. https://store.astm.org/d3774-18r24.html | 全可用幅及声明布边整卷样品范围，不设通用幅宽采样调湿数字。 |
| astm-fabric-gsm | standard | ASTM D3776/D3776M-20(2025), public publisher abstract/scope only. https://store.astm.org/d3776_d3776m-20r25.html | 单位面积质量样品调湿布边基准及小样代表性限制，需实际采用完整方法货批证据，不设固定GSM。 |
