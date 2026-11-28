---
pcr_id: pcr.distributive-trade-services-accommodation-food-and-beverage-serving-ser-18ff339a.wholesale-trade-services-not-on-a-fee-or-contract-basis.wholesale-trade-services-not-on-a-fee-or-contract-basis-of-fertilizers-and-agrochemical-products
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 原厂成品袋装粒状尿素肥料自营批发服务

## 1. 范围与适用性

适用于原厂成品原袋粒状尿素肥料自营企业间常温批发。采用真实SKU批等级配方、粒状而非造丸（prilled）状态、原袋衬标签、净肥料湿干氮水分分析及状态，不统一标签组成袋容量松装密度。批发接收存放搬运结束于撤销后实际最终买方验收。

厂家一手资料支持原等级袋及水分结块颗粒细粉状态问题（`yara-granular-pds`；`yara-bag-label`；`yara-physical-properties`），不产生批发干燥造粒包衣加抑制剂混配溶解田间施用湿度处方或化学释放。真实氮尿素水组分审计不同于NH3/N2O/CO2颗粒直接排放，捕集收集物按接收去向记录。

完整成品配制造粒原袋上游及真实损失商品隐含负荷在服务外。完整链前量化相容真实原门槛需求与唯一基线阶段损失覆盖责任一次。实际仓库捕集处置处理在此一次，整流组分细粉液体物种不重复交换。

## 2. 产品类别识别

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.distributive-trade-services-accommodation-food-and-beverage-serving-ser-18ff339a.wholesale-trade-services-not-on-a-fee-or-contract-basis.wholesale-trade-services-not-on-a-fee-or-contract-basis-of-fertilizers-and-agrochemical-products |
| classification_refs | CPC 3.0:61072（narrower）；实际商品34611尿素属于346 |
| covered_products | 真实原厂成品原袋粒状尿素肥料自营企业间常温批发服务，声明等级组成包装状态。 |
| excluded_products | 散装产品、造丸（prilled）产品、混配或未审包衣抑制剂等级；批发干燥造粒造丸包衣加抑制剂混配溶解换袋田间施用；收费代理零售独立仓储。 |
| representative_product | 真实SKU批次等级、原袋衬标签净肥料氮水分基准结块颗粒状态，不统一组成袋重松装密度。 |
| production_route | 原成品配制造粒袋装供应放行，批发所有权转售企业收货状态记录、普通常温存放电动搬运至撤销后真实最终验收。 |
| market_state | 已完成服务；购销肥料原袋水分保留非交换商品库存，不是耗用养分尿素输入。 |


## 3. 参考流

| Field | Value |
| --- | --- |
| What | 声明原袋粒状尿素肥料货批的真实接收普通常温存放搬运及最终企业验收交接。 |
| How much | 1个完成商业货批；实际袋数净肥料质量水分干物质氮及整货载独立审计。 |
| How well | 真实厂家最终粒状等级分析批次袋记录、观察封口结块细粉水分暴露和真实买方标准。不统一氮水分粒度松装密度强度湿度储存时长规格，不强制开袋取样。 |
| How long or cycle | 实际来源放行收货存放发货验收撤销时刻时区时间来源持续量及真实代表状态取样记录；未完成取消拒收撤销资源保留群组期间。 |
| reference_flow_link | `accepted_service` |

| Field | Value |
| --- | --- |
| reference_amount | 1 |
| reference_product_flow | 已完成的原厂成品袋装粒状尿素肥料自营批发货批服务 |
| reference_flow_property | Count `01846770-4cfe-4a25-8ad9-919d8d378345` |
| reference_unit_group | Count `5beb6eed-33a9-47b8-9ede-1dfe8f679159` |
| reference_unit | Item(s) |
| required_qualifiers | consignment_id; merchant_ownership_purchase_resale; business_buyer; final_acceptance_after_reversals; original_supplier_release_gate; manufacturer_SKU_batch_grade; original_bagged_granular_urea_state; actual_N_moisture_basis; caking_fines_condition; bag_seal_pack_support_state; actual_bag_count; net_fertilizer_mass_basis; gross_cargo_tare; source_assigned_quantity_coverage; receipt_hold_dispatch_acceptance_times; site_period |


## 4. 计量与单位规则

| rule_id | Applies to | Required property | Required unit | Rule | source_ids |
| --- | --- | --- | --- | --- | --- |
| commercial_count | accepted_service | Count | Item(s) | N为撤销后真实批发自有转售企业间最终唯一货批验收数。采集商家所有权购销买方门槛来源撤销ID，收货本身不足。仅N>0且有真实最终证据才归一，否则保留事件资源不虚构输出除法。 |  |
| wet_dry_moisture | 非交换肥料审计 | Mass;实际水分分数 | kg;明确湿基或干基原生分数 | 区分原生净肥料质量袋皮重湿量干物质。实际湿基水分w_wet=water_mass/wet_mass，干基w_dry=water_mass/dry_matter_mass；仅相容水干定义支持w_wet=w_dry/(1+w_dry)及dry_matter_mass=wet_mass*(1-w_wet)。记录百分比分数单位换算方法状态取样来源，不普用标称水分，不由水分变化推干尿素损失。 |  |
| nitrogen_basis | 非交换氮审计 | Mass;实际氮组成 | kg N;带湿干基准的原生氮质量分数 | Nitrogen_mass=actual_matching_basis_mass*actual_N_mass_fraction，明确真实等级分析湿干基准单位方法状态取样来源。湿量不可默认乘不匹配干基分析或典型保证标签数。氮不是另一肥料产品或NH3/N2O/CO2排放。 | yara-granular-pds; yara-bag-label |
| physical_extent | 全部物理量 | Mass;Volume;Count | 原生及目标单位 | 每数量组分去向换算保留原生单位基准方法状态取样来源。EACH相容质量乘实际数一次，TOTAL不变。松装密度体积换算仅实际适用松散颗粒堆积水分状态，附温度单位方法来源，不作材料真密度或标称袋量。整货载保留肥料包装支撑，只扣非货物皮重。 |  |
| condition_species | 状态和direct_species | 实际状态;Mass | 原生湿度温度时间;kg物种 | 记录真实结块颗粒细粉包装水分暴露方法来源。物性背景非统一湿度调控或批发防结块干燥操作化学排放机制。真实物种粒径介质释放份额独立取证；氮尿素组成未知损失非排放零。 | yara-physical-properties |


## 5. 系统边界

### 边界概化

| Field | Value |
| --- | --- |
| declared_starting_condition | 来源放行的实际完整原厂配制造粒原袋尿素肥料，声明批次等级氮水分基准颗粒包装状态。 |
| starting_condition_role | 批发附加服务的原成品粒状肥料袋装门槛，不是氨原未造粒尿素、造丸（prilled）散装或田间施用品。 |
| product_classification_scope | CPC 3.0:61072较窄自营肥料批发服务，34611商品背景非服务参考量。 |
| recursive_input_rule | 购销同类肥料袋保留非交换库存，服务外追溯真实原成品粒状袋装门槛需求，不递归批发或原料代理整个商品。 |
| upstream_dataset_requirement | 关联商品仅一次覆盖真实原料尿素制造配制造粒整理原袋装及包装直至供应放行。氨原尿素或不匹配造丸（prilled）包衣混配田间系统不足；服务外补真实缺阶段原生量不重叠。 |
| disclosure | 声明实际来源门槛等级状态原生数量单位基准方法来源，原分配需求直接映射或完整正终端出口、基线补阶段原生量换算和真实损失唯一责任调整基线阶段损失覆盖；服务单独非完整肥料产品链。 |

### 边界规则

| rule_id | Rule | source_ids |
| --- | --- | --- |
| actual_merchant_scope | 纳入实际所有权企业收货状态库存、普通常温存放电动搬运、真实仓库卫生事故捕集新外运输防护、完整基础设施运输和实际接收搬运处理。原颗粒袋装状态与观察非主动保存调理。 |  |
| no_product_processing | 不批发干燥造粒造丸包衣加抑制剂混配溶解换袋田间施用或专用气候干预。真实额外工作含外包需审路线，不以散装造丸（prilled）混配包衣抑制剂产品替代。 |  |
| source_condition_context | 一手产品标签物性仅支持真实等级颗粒袋氮水分结块问题。典型氮水分SGN筛分松装密度袋量湿度目标、厂家农艺医疗法律火灾混配指引均不作服务数量程序排放系数。 | yara-granular-pds; yara-bag-label; yara-physical-properties |
| commodity_outside_once | 全部成品配制造粒原袋上游及真实损失肥料隐含负荷在服务外。完整链前需量化相容原门槛分配需求及唯一真实损失原生数量基准来源责任基线阶段损失覆盖一次；真实服务捕集处置处理在此一次。未知损失非零。 |  |
| physical_fate_exclusivity | 整袋保留肥料水分、独立散颗粒细粉、独立包装混合卫生固体收集液和真实物种介质互斥。整流内组分氮水审计不另加交换；结块库存差细粉不证明干损失回收农用复用直接排放抵扣。 |  |


## 6. 过程清单结构

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| bagged_urea_wholesale | 原袋粒状尿素批发 | required | 实际指定原袋粒状尿素自营企业间货批 | final_service | accepted_service |


### 过程：原袋粒状尿素批发 (`bagged_urea_wholesale`)

#### 输入

##### 产品流

###### 实际使用点交流电 (`electricity_ac`)

仅适用于实际跨越本节点边界、且未由完整供应商数据覆盖的交流电。该身份未特指供应方、电压、发电组合或交付线损归属，仍须按要求采集。经核实的电力流以1 MJ电能为基准，其ILCD属性名称为净热值；原生kWh按精确的3.6 MJ/kWh换算，不能套用燃料热值系数。直流电或其他不匹配电力状态保留在余项要求中。

- 选定流：交流电 `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- 流属性/单位：Energy / kWh
- 数量规则：native_interval_quantity*service_driver_share/N
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_utilities`

数量范围证据需求：需真实区间表计全部用户原生驱动和交付电力来源属性支持；不默认每袋吨或千克氮用电。

###### 实际液态处理自来水供给 (`hygiene_water_liquid_tap`)

仅在实际来源确为处理后的自来水且用于所声明用途时适用。保留实际供应方、水质、温度状态和供应边界，不假定所有供水都是自来水。冰、瓶装矿泉水、再生水、未经处理的水及环境直接取水保留各自实际身份。沿用原卡原生质量或体积基准；最终换算为质量参考量时须有实际相容密度和状态证据，不能把目录中的次要体积关系作为默认现场密度。

- 选定流：自来水 `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- 流属性/单位：Volume / m3
- 数量规则：actual_utility_quantity*service_driver_share/N
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_utilities`

数量范围证据需求：需原生计量体积或相容密度换算、真实卫生区间全部用户分配和水源；水分增量不等于清洁水。

###### 实际独立记录的合成洗涤剂投入 (`hygiene_materials_synthetic_detergent`)

仅适用于产品配方、供应状态及用途记录确认的实际合成表面活性洗涤剂。记录扣除包装皮重的材料净量，区分浓缩液与稀释水，整体配方与组分不得相加重复计入。肥皂、消毒剂、抹布、滤材等仍按各自实际身份记录，不预设清洁配方、剂量或发生。

- 选定流：洗涤剂 `1c57d123-df57-49ab-b9d4-957403beb8a5`
- 流属性/单位：Mass / kg
- 数量规则：selected_supply_input/N
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_supplies`

数量范围证据需求：需真实物料组成原生量范围库存及配对未用外送；清洁设备标签不规定批发化学用品量。

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 已完成的原厂成品袋装粒状尿素肥料自营批发货批服务 (`accepted_service`)

撤销后真实最终买方验收完成的批发自有转售企业间商业货批，限定真实原厂成品原袋粒状尿素等级批次氮水分状态包装。袋吨千克氮或发票不是此服务数。

- 选定流：已完成的原厂成品袋装粒状尿素肥料自营批发货批服务
- 流属性/单位：Count / Item(s)
- 数量规则：1 Item(s)
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_urea`

数量范围证据需求：需所有权购销买方门槛来源撤销证据及原粒状袋装状态计数净肥料质量水分氮基准期间；不固定每服务氮量或袋数。

###### 退回供应方的未使用合成洗涤剂 (`unused_mass_returns_detergent_return`)

仅覆盖本过程有独立实际证据的“退回供应方的未使用合成洗涤剂”。记录自身物态、净量 kg、事件来源及交接门。其他状态或接收方需在`unused_mass_returns`下独立确定身份，本卡不能替代；记录缺失不证明发生或为零。 将未使用材料的配方、供应状态和原生质量严格匹配到投入`hygiene_materials_synthetic_detergent`。本卡为可用对外退料，不是废物、期末库存或内部循环。仅在总量供应口径下列此输出；投入已扣除该退料时必须省略对应退料输出，不自动抵扣避免生产。

- 选定流：洗涤剂 `1c57d123-df57-49ab-b9d4-957403beb8a5`
- 流属性/单位：Mass / kg
- 数量规则：`unused_mass_returns_detergent_return`实际独占归属的 kg / 验收 N，仅归一化一次；已按参考流给出的数量不得再次除以 N。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_supplies`

范围证据要求：需事件关联的原生 kg、状态组成、接收或供应门、归属记录及整件组分或对应投入的排他关联，使用协议`cp_supplies`。不提供默认数值或换算因子；其他原生单位须有换算证据后使用。

##### 废物流

###### 废弃装有颗粒尿素的原袋整件 (`whole_bag_waste_atomic_case`)

仅在实际独立记录确认“废弃装有颗粒尿素的原袋整件”时适用。本卡只覆盖该命名实物状态及自身实际净量、保留组成和接收门。其他部件、碎片、游离液、独立包装及清理载体仍属于`whole_bag_waste`中的身份核实事项；不得移动边界、预设事件、将库存差当废弃，或把仍保留在整体流内的组分另算出口。实际混收流须匹配自身准确身份。原有原生单位数量协议只用于本独占具体情形，其他实际去向分别协调。

- 选定流：废弃装有颗粒尿素的原袋整件
- 流属性/单位：Mass / kg
- 数量规则：actual_compatible_outlet_net_quantity/N
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_outlets`

数量范围证据需求：需来源袋批次等级水分状态、原生整流净量范围及接收分类处理；不推定整袋损失或肥料回收系数。

###### 废弃散装颗粒尿素 (`loose_fertilizer_waste_atomic_case`)

仅在实际独立记录确认“废弃散装颗粒尿素”时适用。本卡只覆盖该命名实物状态及自身实际净量、保留组成和接收门。其他部件、碎片、游离液、独立包装及清理载体仍属于`loose_fertilizer_waste`中的身份核实事项；不得移动边界、预设事件、将库存差当废弃，或把仍保留在整体流内的组分另算出口。实际混收流须匹配自身准确身份。原有原生单位数量协议只用于本独占具体情形，其他实际去向分别协调。

- 选定流：废弃散装颗粒尿素
- 流属性/单位：Mass / kg
- 数量规则：actual_compatible_outlet_net_quantity/N
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_outlets`

数量范围证据需求：需实际收集原生净质量水分组成状态父流接收；袋库存差或可见粉尘不确立捕集量、干尿素氮损失或空气释放。

###### 实际单独收集的纸类包装废物 (`packaging_waste_paper_pack`)

仅适用于本节点实际独立废弃、单独收集的纸类包装，保留实际湿态或收集状态、组成、接收方及处理运输责任。污染或混收形成的混合流须使用其自身经核实的身份，材料组分仅作不可相加审计。仍在用的周转包装不是本废物，不预设组成、数量、回收或处理。

- 选定流：包装废弃物，纸类 `6b6f1025-cb6a-4c9d-9947-7726c4307a76`
- 流属性/单位：Mass / kg
- 数量规则：actual_compatible_outlet_net_quantity/N
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_outlets`

数量范围证据需求：需实际材质整流净量范围保留肥料液体来源接收分类；原袋不是转售再次新购输入。


###### 实际单独收集的金属包装废物 (`packaging_waste_metal_pack`)

仅适用于本节点实际独立废弃、单独收集的金属包装，保留实际湿态或收集状态、组成、接收方及处理运输责任。污染或混收形成的混合流须使用其自身经核实的身份，材料组分仅作不可相加审计。仍在用的周转包装不是本废物，不预设组成、数量、回收或处理。

- 选定流：金属包装废物 `cdda6013-c0c5-4c72-990a-f5668fe71069`
- 流属性/单位：Mass / kg
- 数量规则：actual_compatible_outlet_net_quantity/N
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_outlets`

数量范围证据需求：需实际材质整流净量范围保留肥料液体来源接收分类；原袋不是转售再次新购输入。


###### 实际单独收集的塑料包装废物 (`packaging_waste_plastic_pack`)

仅适用于实际独立废弃、单独收集的空塑料包装，保留实际组成、含水状态及接收方。含残留商品的混合包装、污染混合流、设备内保温泡沫、一次性抹布及复合包装不使用本分支；整体混合流中的组分仅作不可相加审计，运输处理责任计入一次。不预设排空、回收、发生或数量。

- 选定流：塑料包装废物 `919351c4-3e25-4092-9934-73ecec021a3b`
- 流属性/单位：Mass / kg
- 数量规则：actual_compatible_outlet_net_quantity/N
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_outlets`

数量范围证据需求：需实际材质整流净量范围保留肥料液体来源接收分类；原袋不是转售再次新购输入。

###### 收集的颗粒尿素细粉，封闭固体 (`loose_fertilizer_waste_urea_fines`)

仅覆盖本过程有独立实际证据的“收集的颗粒尿素细粉，封闭固体”。记录自身物态、净量 kg、事件来源及交接门。其他状态或接收方需在`loose_fertilizer_waste`下独立确定身份，本卡不能替代；记录缺失不证明发生或为零。 仅在实际独立收集并转移至废物接收方时启用，不得用于仍保留在整件、包装或收集混合物中的组分。保留组成只作不可相加记录。不预设开包、切割、拆解、主动干燥、回收率或处理路线，处理及运输责任只归属一次。

- 选定流：收集的颗粒尿素细粉，封闭固体
- 流属性/单位：Mass / kg
- 数量规则：`loose_fertilizer_waste_urea_fines`实际独占归属的 kg / 验收 N，仅归一化一次；已按参考流给出的数量不得再次除以 N。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_outlets`

范围证据要求：需事件关联的原生 kg、状态组成、接收或供应门、归属记录及整件组分或对应投入的排他关联，使用协议`cp_outlets`。不提供默认数值或换算因子；其他原生单位须有换算证据后使用。

###### 废弃场所清洁擦拭物，保留实际污染物 (`hygiene_waste_spent_wipe`)

仅覆盖本过程有独立实际证据的“废弃场所清洁擦拭物，保留实际污染物”。记录自身物态、净量 kg、事件来源及交接门。其他状态或接收方需在`hygiene_waste`下独立确定身份，本卡不能替代；记录缺失不证明发生或为零。 仅在实际独立收集并转移至废物接收方时启用，不得用于仍保留在整件、包装或收集混合物中的组分。保留组成只作不可相加记录。不预设开包、切割、拆解、主动干燥、回收率或处理路线，处理及运输责任只归属一次。 按接收状态确定实际擦拭物基材及保留污染物。滤芯、散装吸附材料或独立收集液体不是本擦拭物流。废弃整体质量含保留污染物一次，干擦拭物供应质量只作组分审计。

- 选定流：废弃场所清洁擦拭物，保留实际污染物
- 流属性/单位：Mass / kg
- 数量规则：`hygiene_waste_spent_wipe`实际独占归属的 kg / 验收 N，仅归一化一次；已按参考流给出的数量不得再次除以 N。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_outlets`

范围证据要求：需事件关联的原生 kg、状态组成、接收或供应门、归属记录及整件组分或对应投入的排他关联，使用协议`cp_outlets`。不提供默认数值或换算因子；其他原生单位须有换算证据后使用。

###### 收集并送处理的场所清洁水性废水 (`contained_liquid_aqueous_cleaning`)

仅覆盖本过程有独立实际证据的“收集并送处理的场所清洁水性废水”。记录自身物态、净量 m3、事件来源及交接门。其他状态或接收方需在`contained_liquid`下独立确定身份，本卡不能替代；记录缺失不证明发生或为零。 仅在实际独立收集并转移至废物接收方时启用，不得用于仍保留在整件、包装或收集混合物中的组分。保留组成只作不可相加记录。不预设开包、切割、拆解、主动干燥、回收率或处理路线，处理及运输责任只归属一次。 本卡为场所清洁水性废水，保留实际溶解或悬浮负荷及实测接收体积。排除独立收集的未稀释商品、非水液体、冷凝水或生活污水；若转移前实际混合，另定该真实混合物身份，不得叠加组分体积或称其为纯清洁水。不从供水量推算本数量。

- 选定流：收集并送处理的场所清洁水性废水
- 流属性/单位：Volume / m3
- 数量规则：`contained_liquid_aqueous_cleaning`实际独占归属的 m3 / 验收 N，仅归一化一次；已按参考流给出的数量不得再次除以 N。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_outlets`

范围证据要求：需事件关联的原生 m3、状态组成、接收或供应门、归属记录及整件组分或对应投入的排他关联，使用协议`cp_outlets`。不提供默认数值或换算因子；其他原生单位须有换算证据后使用。

##### 基本流

## 7. 分配与联产品处理

| rule_id | Rule | source_ids |
| --- | --- | --- |
| stock_count_events | 真实SKU批次袋等级来源事件ID按期间核对期初收货期末、可用退回其他终端保留拒收实际撒落损失及接收去向。所有权企业最终门槛来源撤销明确，N仅撤销后真实最终唯一验收且N>0才除。取消未完成拒收撤销资源保留群组期间，不虚构输出零资源。内部保留回收非外部退回。 |  |
| original_source_assignment | 有据来源目标直接映射，或完整相容群组：assigned_source_gate_quantity=cohort_source_quantity*target_exit_driver/sum_exit_drivers。正且完整终端含期末其他可用退回真实损失，每项原生量单位基准方法状态来源链接责任和原粒状袋等价。氮水分基准换算真实，不仅验收分母、不余额即损失。 |  |
| original_commodity_demand | commodity_source_gate_demand=assigned_source_gate_quantity，对应实际完整原成品粒状袋装门槛，含有据普通状态水分变化份额。来源分配基线补阶段量的原生单位基准方法状态来源换算必需。已有阶段损失覆盖及唯一真实上游损失调整责任在服务外一次；最终发货加废物非原需求，水分差不自动丢失干尿素氮。  每项关联原门槛需求或损失量须记录assignment_scope_ids、quantity_basis（raw_target_cohort或per_reference）、same_target_scope_N及来源。真实外部库存阶段损失集成使用原始实体量一次。仅与1 Item(s)服务组合时派生q_per_reference=q_raw_of_that_same_scope/正数same_target_scope_N；已归一量不再除，单货批原始范围N=1，N=0无归一值。 |  |
| new_supplies_returns | S=opening+net_receipts-closing含保留可用回收。总S/N输入加独立真实配对未用外送，或仅耗用(S-usable_outward_return)/N且省配对输出。仅同独立负担供给身份边界，不用原肥料袋资产冲无关新输入，不默认二次替代抵扣。 |  |
| all_consumer_resources | 直接实测或同单位服务全部用户因果原生物理驱动覆盖全部用户期间及所属空闲卫生未完成资源。真实分子分母基准方法状态来源不确定性；袋吨服务均分需因果证据，养分等级价格非默认物理驱动。 |  |
| full_asset_lifecycle | 匹配完整制造实际维护更换退役寿命终结和全部用户工作已观测历史有来源剩余寿命驱动，原生单位基准方法状态来源等价不确定性敏感性更新。job_driver/lifetime_all_user_driver再除N一次。非每搬新托盘，不重复供应承包承运租赁完整资产。 |  |
| unique_load_leg_owner | 每直接承包承运资产接收处理事件唯一责任。EACH货载质量乘相容实际数一次，TOTAL不变；真实肥料包装随货支撑保留，只扣非货物皮重。唯一load+leg运输量乘自身份额在和内，再除N一次；整流组分捕集液物种处理不重复，可用转移无自动抵扣。 |  |


## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_urea | bagged_urea_wholesale | 商品及真实最终企业间服务 | 原厂等级袋分析与批发买方库存记录 | consignment_id; merchant_id; ownership_purchase_resale_evidence; business_buyer_id; acceptance_gate; acceptance_source; acceptance_reversal_ids; manufacturer; SKU; batch; grade; formulation_source; original_granular_bag_state; granular_not_prilled_evidence; coating_inhibitor_blend_status; supplier_release_gate; bag_ids; bag_liner_label_state; bag_count; bag_count_unit; bag_count_basis; bag_count_method; bag_count_state; bag_count_source; bag_count_sample_time; net_fertilizer_mass; net_fertilizer_mass_unit; net_fertilizer_mass_basis; net_fertilizer_mass_method; net_fertilizer_mass_state; net_fertilizer_mass_source; net_fertilizer_mass_sample_time; quantity_reporting_extent; count_multiplier; count_multiplier_unit; count_multiplier_basis; count_multiplier_method; count_multiplier_state; count_multiplier_source; count_multiplier_sample_time; bag_pack_tare; bag_pack_tare_unit; bag_pack_tare_basis; bag_pack_tare_method; bag_pack_tare_state; bag_pack_tare_source; bag_pack_tare_sample_time; whole_cargo_mass; whole_cargo_mass_unit; whole_cargo_mass_basis; whole_cargo_mass_method; whole_cargo_mass_state; whole_cargo_mass_source; whole_cargo_mass_sample_time; moisture; moisture_unit; moisture_basis; moisture_method; moisture_state; moisture_source; moisture_sample_time; moisture_wet_or_dry_basis; moisture_definition_source; water_mass; water_mass_unit; water_mass_basis; water_mass_method; water_mass_state; water_mass_source; water_mass_sample_time; dry_matter_mass; dry_matter_mass_unit; dry_matter_mass_basis; dry_matter_mass_method; dry_matter_mass_state; dry_matter_mass_source; dry_matter_mass_sample_time; N_mass_fraction; N_mass_fraction_unit; N_mass_fraction_basis; N_mass_fraction_method; N_mass_fraction_state; N_mass_fraction_source; N_mass_fraction_sample_time; N_wet_or_dry_basis; N_species_basis; N_analysis_source; nitrogen_mass; nitrogen_mass_unit; nitrogen_mass_basis; nitrogen_mass_method; nitrogen_mass_state; nitrogen_mass_source; nitrogen_mass_sample_time; bulk_density; bulk_density_unit; bulk_density_basis; bulk_density_method; bulk_density_state; bulk_density_source; bulk_density_sample_time; density_temperature; density_temperature_unit; density_packing_state; component_quantity; component_quantity_unit; component_quantity_basis; component_quantity_method; component_quantity_state; component_quantity_source; component_quantity_sample_time; component_identity; component_fate; composition_unknowns; conversion_factor; conversion_factor_unit; conversion_factor_basis; conversion_factor_method; conversion_factor_state; conversion_factor_source; conversion_factor_sample_time; conversion_unit_source; caking_observation; fines_granule_observation; pack_damage_observation; ambient_temperature; ambient_temperature_unit; ambient_temperature_basis; ambient_temperature_method; ambient_temperature_state; ambient_temperature_source; ambient_temperature_sample_time; ambient_humidity; ambient_humidity_unit; ambient_humidity_basis; ambient_humidity_method; ambient_humidity_state; ambient_humidity_source; ambient_humidity_sample_time; condition_time; source_release_time; receipt_time; dispatch_time; acceptance_time; reversal_time; time_zone; time_source; duration; duration_unit; duration_basis; duration_method; duration_state; duration_source; duration_sample_time; opening_stock; opening_stock_unit; opening_stock_basis; opening_stock_method; opening_stock_state; opening_stock_source; opening_stock_sample_time; receipts; receipts_unit; receipts_basis; receipts_method; receipts_state; receipts_source; receipts_sample_time; closing_stock; closing_stock_unit; closing_stock_basis; closing_stock_method; closing_stock_state; closing_stock_source; closing_stock_sample_time; return_ids; return_quantity; return_quantity_unit; return_quantity_basis; return_quantity_method; return_quantity_state; return_quantity_source; return_quantity_sample_time; return_owner; useful_other_exit_ids; useful_other_exit_quantity; useful_other_exit_quantity_unit; useful_other_exit_quantity_basis; useful_other_exit_quantity_method; useful_other_exit_quantity_state; useful_other_exit_quantity_source; useful_other_exit_quantity_sample_time; useful_other_exit_owner; actual_loss_quantity; actual_loss_quantity_unit; actual_loss_quantity_basis; actual_loss_quantity_method; actual_loss_quantity_state; actual_loss_quantity_source; actual_loss_quantity_sample_time; actual_loss_fate; unfinished_resource_attribution; carried_resource_link; source_gate_input_quantity; source_gate_input_quantity_unit; source_gate_input_quantity_basis; source_gate_input_quantity_method; source_gate_input_quantity_state; source_gate_input_quantity_source; source_gate_input_quantity_sample_time; source_gate_allocation_mode; direct_assignment_source_ids; direct_assignment_quantity; direct_assignment_quantity_unit; direct_assignment_quantity_basis; direct_assignment_quantity_method; direct_assignment_quantity_state; direct_assignment_quantity_source; direct_assignment_quantity_sample_time; allocation_cohort_id; cohort_source_quantity; cohort_source_quantity_unit; cohort_source_quantity_basis; cohort_source_quantity_method; cohort_source_quantity_state; cohort_source_quantity_source; cohort_source_quantity_sample_time; target_exit_driver; sum_exit_drivers; exit_driver_quantity; exit_driver_quantity_unit; exit_driver_quantity_basis; exit_driver_quantity_method; exit_driver_quantity_state; exit_driver_quantity_source; exit_driver_quantity_sample_time; all_terminal_exit_ids; all_terminal_exit_driver_records; terminal_exit_link; terminal_exit_owner; exit_original_granular_bag_equivalent; exit_original_granular_bag_equivalent_unit; exit_original_granular_bag_equivalent_basis; exit_original_granular_bag_equivalent_method; exit_original_granular_bag_equivalent_state; exit_original_granular_bag_equivalent_source; exit_original_granular_bag_equivalent_sample_time; assigned_source_gate_quantity; assigned_source_gate_quantity_unit; assigned_source_gate_quantity_basis; assigned_source_gate_quantity_method; assigned_source_gate_quantity_state; assigned_source_gate_quantity_source; assigned_source_gate_quantity_sample_time; source_gate_allocation_source; source_gate_conversion; source_gate_conversion_unit; source_gate_conversion_basis; source_gate_conversion_method; source_gate_conversion_state; source_gate_conversion_source; source_gate_conversion_sample_time; exclusive_other_exit_coverage; baseline_quantity; baseline_quantity_unit; baseline_quantity_basis; baseline_quantity_method; baseline_quantity_state; baseline_quantity_source; baseline_quantity_sample_time; baseline_stage_coverage; baseline_loss_coverage; additional_stage_quantity; additional_stage_quantity_unit; additional_stage_quantity_basis; additional_stage_quantity_method; additional_stage_quantity_state; additional_stage_quantity_source; additional_stage_quantity_sample_time; additional_stage_owner; loss_adjustment_quantity; loss_adjustment_quantity_unit; loss_adjustment_quantity_basis; loss_adjustment_quantity_method; loss_adjustment_quantity_state; loss_adjustment_quantity_source; loss_adjustment_quantity_sample_time; loss_owner; already_included_loss_coverage; assignment_scope_ids; quantity_basis; same_target_scope_N; same_scope_N_source | 核实商家所有权购销企业买方最终门槛来源撤销，匹配原厂成品袋装粒状等级批次袋态、真实氮水分湿干单位方法状态取样来源及结块细粉环境。不强制开袋取样调理；核对实际来源分配基线补量与完整正终端。  每项关联原门槛需求或损失量须记录assignment_scope_ids、quantity_basis（raw_target_cohort或per_reference）、same_target_scope_N及来源。真实外部库存阶段损失集成使用原始实体量一次。仅与1 Item(s)服务组合时派生q_per_reference=q_raw_of_that_same_scope/正数same_target_scope_N；已归一量不再除，单货批原始范围N=1，N=0无归一值。 | Item(s)、kg及真实氮水分密度温度湿度时间驱动原生单位 | 每真实收货状态移动发货验收撤销及期间关账 | 原门槛至全部终端及跨期未完成取消资源 | 真实供应批发买方门槛，bagged_urea_wholesale节点 | 每参考流 | 供应原颗粒袋分析及真实所有权企业证据、校准原生数量基准方法状态取样来源和完整来源出口损失覆盖 N>0且最终证据才归一，未知状态库存保留，水分差非干损失。 |
| cp_supplies | bagged_urea_wholesale | 真实新物料未用退回 | 独立供给库存外部转移 | supply_id; material_SKU; formulation; composition; composition_unit; composition_basis; composition_method; composition_state; composition_source; composition_sample_time; opening; opening_unit; opening_basis; opening_method; opening_state; opening_source; opening_sample_time; net_receipts; net_receipts_unit; net_receipts_basis; net_receipts_method; net_receipts_state; net_receipts_source; net_receipts_sample_time; closing; closing_unit; closing_basis; closing_method; closing_state; closing_source; closing_sample_time; retained_recovery; retained_recovery_unit; retained_recovery_basis; retained_recovery_method; retained_recovery_state; retained_recovery_source; retained_recovery_sample_time; unused_outward_return; unused_outward_return_unit; unused_outward_return_basis; unused_outward_return_method; unused_outward_return_state; unused_outward_return_source; unused_outward_return_sample_time; return_receiver; same_supply_pairing; supply_convention; native_quantity; native_quantity_unit; native_quantity_basis; native_quantity_method; native_quantity_state; native_quantity_source; native_quantity_sample_time; reporting_extent; count_multiplier; count_multiplier_unit; count_multiplier_basis; count_multiplier_method; count_multiplier_state; count_multiplier_source; count_multiplier_sample_time; per_piece_mass; per_piece_mass_unit; per_piece_mass_basis; per_piece_mass_method; per_piece_mass_state; per_piece_mass_source; per_piece_mass_sample_time; density; density_unit; density_basis; density_method; density_state; density_source; density_sample_time; density_temperature; density_temperature_unit; conversion_factor; conversion_factor_unit; conversion_factor_basis; conversion_factor_method; conversion_factor_state; conversion_factor_source; conversion_factor_sample_time; service_driver; all_user_driver; driver_quantity; driver_quantity_unit; driver_quantity_basis; driver_quantity_method; driver_quantity_state; driver_quantity_source; driver_quantity_sample_time; service_driver_share; period; owner; embedded_provider_coverage; N; flow_row_id; actual_identity_case; actual_substance_or_material; actual_origin_and_medium; actual_state_and_gate; case_activation_evidence; typed_or_residual_quantity; quantity_exclusion_links; whole_total_reconciliation; unresolved_occurrence_not_zero | 采集实际SKU配方原生数量库存EACH/TOTAL范围及同源配对可用外送接收；总S加真实配对输出，或仅耗用扣配对且省输出，不用原肥袋冲新料。 按flow_row_id与actual_identity_case划分实际原生记录，仅有证据的分支适用。具体分支与余项在节点内数量互斥，每个实物出入只归属一次，并与相容同范围不可相加总量协调。发生或数量未知仍待采集，不能填零。 | 真实原生供给单位及相容换算 | 逐真实供给使用转移关账 | 实际库存区间含保留回收期末 | 批发独立新输入及真实外接收 | 每参考流 | 收据校准库存原生单位基准方法状态来源及同供给配对 原生量因果份额/N一次，无自动抵扣。 |
| cp_utilities | bagged_urea_wholesale | 实际仓库公用分配 | 原生表计区间全部用户因果记录 | utility_id; provider; geography; meter_id; native_interval_quantity; native_interval_quantity_unit; native_interval_quantity_basis; native_interval_quantity_method; native_interval_quantity_state; native_interval_quantity_source; native_interval_quantity_sample_time; interval_start; interval_end; time_zone; time_source; service_driver; all_user_driver; driver_quantity; driver_quantity_unit; driver_quantity_basis; driver_quantity_method; driver_quantity_state; driver_quantity_source; driver_quantity_sample_time; service_driver_share; actual_utility_quantity; actual_utility_quantity_unit; actual_utility_quantity_basis; actual_utility_quantity_method; actual_utility_quantity_state; actual_utility_quantity_source; actual_utility_quantity_sample_time; density; density_unit; density_basis; density_method; density_state; density_source; density_sample_time; density_temperature; density_temperature_unit; conversion_factor; conversion_factor_unit; conversion_factor_basis; conversion_factor_method; conversion_factor_state; conversion_factor_source; conversion_factor_sample_time; included_provider_scope; overlap_exclusions; N; flow_row_id; actual_identity_case; actual_substance_or_material; actual_origin_and_medium; actual_state_and_gate; case_activation_evidence; typed_or_residual_quantity; quantity_exclusion_links; whole_total_reconciliation; unresolved_occurrence_not_zero | 计量真实时段资源及服务全部用户同单位物理驱动，明确原生换算后除N；区分实测分配承包。原水分农田灌水非当前公用工程。 按flow_row_id与actual_identity_case划分实际原生记录，仅有证据的分支适用。具体分支与余项在节点内数量互斥，每个实物出入只归属一次，并与相容同范围不可相加总量协调。发生或数量未知仍待采集，不能填零。 | kWh、m3及原生期间驱动换算单位 | 每真实计量驱动区间 | 真实采集含所属空闲卫生未完成资源 | 真实仓库电动搬运表计全部用户 | 每参考流 | 原生表计驱动方法状态取样来源和真实因果范围 仅真实范围资源份额，无产品干燥溶解施用输入。 |
| cp_provider | bagged_urea_wholesale | 真实互斥物理服务包 | 服务方原生等价事件边界 | package_id; provider; physical_scope; actual_native_package_quantity; actual_native_package_quantity_unit; actual_native_package_quantity_basis; actual_native_package_quantity_method; actual_native_package_quantity_state; actual_native_package_quantity_source; actual_native_package_quantity_sample_time; physical_equivalence; physical_equivalence_unit; physical_equivalence_basis; physical_equivalence_method; physical_equivalence_state; physical_equivalence_source; physical_equivalence_sample_time; documented_share; share_numerator; share_denominator; share_driver_quantity; share_driver_quantity_unit; share_driver_quantity_basis; share_driver_quantity_method; share_driver_quantity_state; share_driver_quantity_source; share_driver_quantity_sample_time; covered_events; covered_energy; covered_materials; covered_assets; covered_transport; covered_treatment; excluded_scope; direct_resource_owner; service_period; time_zone; time_source; all_users; evidence_record; N | 取得真实物理量等价及份额分子分母原生来源，所有资源资产承运处理覆盖；无隐藏干燥造粒混配包衣溶解。 | 原生物理服务等价及匹配驱动单位 | 每真实承包事件范围变更 | 实际服务区间时间来源 | 真实批发关联承包范围 | 每参考流 | 服务真实等价事件原生证据及唯一责任覆盖矩阵 原生物理包乘份额/N一次，无费用或重复资源。 |
| cp_assets | bagged_urea_wholesale | 完整寿命共享设施 | 资产生命周期历史剩余原生登记 | asset_id; asset_dataset_scope; manufacture_coverage; maintenance; replacement_events; retirement; end_of_life; event_quantity; event_quantity_unit; event_quantity_basis; event_quantity_method; event_quantity_state; event_quantity_source; event_quantity_sample_time; event_time; time_zone; time_source; job_driver; job_driver_unit; job_driver_basis; job_driver_method; job_driver_state; job_driver_source; job_driver_sample_time; observed_all_user_driver; observed_all_user_driver_unit; observed_all_user_driver_basis; observed_all_user_driver_method; observed_all_user_driver_state; observed_all_user_driver_source; observed_all_user_driver_sample_time; remaining_driver; remaining_driver_unit; remaining_driver_basis; remaining_driver_method; remaining_driver_state; remaining_driver_source; remaining_driver_sample_time; lifetime_all_user_driver; lifetime_all_user_driver_unit; lifetime_all_user_driver_basis; lifetime_all_user_driver_method; lifetime_all_user_driver_state; lifetime_all_user_driver_source; lifetime_all_user_driver_sample_time; driver_equivalence; driver_equivalence_unit; driver_equivalence_basis; driver_equivalence_method; driver_equivalence_state; driver_equivalence_source; driver_equivalence_sample_time; all_consumers; all_periods; idle_and_open_use; uncertainty; sensitivity; update_trigger; supplier_merchant_provider_carrier_overlap; N | 匹配完整制造实际维护更换退役寿命终结、全部用户工作已观测剩余寿命驱动等价原生单位基准方法状态来源不确定性敏感性更新，责任互斥。 | 原生资产等价及相容工作寿命驱动单位 | 每实际资产事件期间更新 | 完整全部用户历史加有来源剩余寿命终结 | 真实共享仓库设备循环支撑使用者 | 每参考流 | 完整周期边界事件历史、有来源剩余原生等价不确定性 工作寿命比再除N一次，非每搬新资产或租赁承包承运重复。 |
| cp_freight | bagged_urea_wholesale | 唯一真实载荷段运输 | 货载秤票路线份额原生记录 | load_id; leg_id; unique_load_leg_key; mode; carrier; origin; destination; route_scope; actual_count; actual_count_unit; actual_count_basis; actual_count_method; actual_count_state; actual_count_source; actual_count_sample_time; cargo_mass_quantity; cargo_mass_quantity_unit; cargo_mass_quantity_basis; cargo_mass_quantity_method; cargo_mass_quantity_state; cargo_mass_quantity_source; cargo_mass_quantity_sample_time; cargo_mass_reporting_extent; cargo_mass_count_multiplier; cargo_mass_count_multiplier_unit; cargo_mass_count_multiplier_basis; cargo_mass_count_multiplier_method; cargo_mass_count_multiplier_state; cargo_mass_count_multiplier_source; cargo_mass_count_multiplier_sample_time; actual_granular_bag_moisture_state; fertilizer_mass; fertilizer_mass_unit; fertilizer_mass_basis; fertilizer_mass_method; fertilizer_mass_state; fertilizer_mass_source; fertilizer_mass_sample_time; bag_liner_label_mass; bag_liner_label_mass_unit; bag_liner_label_mass_basis; bag_liner_label_mass_method; bag_liner_label_mass_state; bag_liner_label_mass_source; bag_liner_label_mass_sample_time; actual_carried_outer_pack_support_mass; actual_carried_outer_pack_support_mass_unit; actual_carried_outer_pack_support_mass_basis; actual_carried_outer_pack_support_mass_method; actual_carried_outer_pack_support_mass_state; actual_carried_outer_pack_support_mass_source; actual_carried_outer_pack_support_mass_sample_time; noncargo_vehicle_container_tare; noncargo_vehicle_container_tare_unit; noncargo_vehicle_container_tare_basis; noncargo_vehicle_container_tare_method; noncargo_vehicle_container_tare_state; noncargo_vehicle_container_tare_source; noncargo_vehicle_container_tare_sample_time; payload_scope_source; whole_pack_payload; whole_pack_payload_unit; whole_pack_payload_basis; whole_pack_payload_method; whole_pack_payload_state; whole_pack_payload_source; whole_pack_payload_sample_time; payload_conversion; payload_conversion_unit; payload_conversion_basis; payload_conversion_method; payload_conversion_state; payload_conversion_source; payload_conversion_sample_time; distance; distance_unit; distance_basis; distance_method; distance_state; distance_source; distance_sample_time; distance_conversion; distance_conversion_unit; distance_conversion_basis; distance_conversion_method; distance_conversion_state; distance_conversion_source; distance_conversion_sample_time; actual_transport_work; actual_transport_work_unit; actual_transport_work_basis; actual_transport_work_method; actual_transport_work_state; actual_transport_work_source; actual_transport_work_sample_time; documented_service_share; share_numerator; share_denominator; share_driver_quantity; share_driver_quantity_unit; share_driver_quantity_basis; share_driver_quantity_method; share_driver_quantity_state; share_driver_quantity_source; share_driver_quantity_sample_time; record_allocation_owner; empty_return_coverage; carrier_fuel_assets; warehouse_overlap; event_time; time_zone; time_source; N | 记录唯一load+leg、真实肥料水分质量及袋衬包装随货支撑，仅扣非货物皮重。EACH乘实际相容数一次，TOTAL不变。每记录真实量乘其物理份额在唯一和内部，再除N一次，空返燃料资产互斥。 | 原生货载质量计数距离工作量及t*km换算 | 每实际唯一load+leg返程 | 真实纳入路线事件区间时间来源 | 真实承运路线排除仓库重叠 | 每参考流 | 实际秤票边界单件总量计数原生来源、路线记录分配覆盖 sum_unique_load_leg(actual_transport_work*documented_service_share)/N；仅氮含量非载荷。 |
| cp_outlets | bagged_urea_wholesale | 真实互斥接收转移 | 整流内含净量与接收验收 | transfer_id; receiver; receiver_classification; treatment_boundary; treatment_owner; source_bag_batch_ids; parent_stream_id; bag_pack_membership; stream_identity; physical_state; native_quantity; native_quantity_unit; native_quantity_basis; native_quantity_method; native_quantity_state; native_quantity_source; native_quantity_sample_time; reporting_extent; count_multiplier; count_multiplier_unit; count_multiplier_basis; count_multiplier_method; count_multiplier_state; count_multiplier_source; count_multiplier_sample_time; transfer_time; time_zone; time_source; whole_bag_exclusion; loose_fertilizer_exclusion; separate_pack_exclusion; mixed_solids_exclusion; contained_liquid_exclusion; retained_fertilizer_quantity; retained_fertilizer_quantity_unit; retained_fertilizer_quantity_basis; retained_fertilizer_quantity_method; retained_fertilizer_quantity_state; retained_fertilizer_quantity_source; retained_fertilizer_quantity_sample_time; retained_content_fate; component_identity; component_quantity; component_quantity_unit; component_quantity_basis; component_quantity_method; component_quantity_state; component_quantity_source; component_quantity_sample_time; component_wet_dry_N_basis; retained_moisture; retained_moisture_unit; retained_moisture_basis; retained_moisture_method; retained_moisture_state; retained_moisture_source; retained_moisture_sample_time; moisture_wet_or_dry_basis; retained_fluid; retained_fluid_unit; retained_fluid_basis; retained_fluid_method; retained_fluid_state; retained_fluid_source; retained_fluid_sample_time; density; density_unit; density_basis; density_method; density_state; density_source; density_sample_time; density_temperature; density_temperature_unit; conversion_factor; conversion_factor_unit; conversion_factor_basis; conversion_factor_method; conversion_factor_state; conversion_factor_source; conversion_factor_sample_time; usable_transfer_record; waste_acceptance_record; source_stock_pairing; no_double_credit; N; flow_row_id; actual_identity_case; actual_substance_or_material; actual_origin_and_medium; actual_state_and_gate; case_activation_evidence; typed_or_residual_quantity; quantity_exclusion_links; whole_total_reconciliation; unresolved_occurrence_not_zero; flow_row_id; actual_identity_case; actual_substance_or_material; actual_state_and_gate; case_activation_evidence; quantity_exclusion_links; whole_total_reconciliation | 关联原袋批次父流，分类整袋散颗粒细粉独立包装混合固体收集液。真实原生整流范围和独立保留肥料氮水分液体单位基准方法状态取样来源去向；接收分类处理一次，不推定农用再利用回收。 按flow_row_id与actual_identity_case划分实际原生记录，仅有证据的分支适用。具体分支与余项在节点内数量互斥，每个实物出入只归属一次，并与相容同范围不可相加总量协调。发生或数量未知仍待采集，不能填零。 只归属独立确认的实物情形，其他实际去向按来源分别保留；每个原生记录只属于一个交换，任何总量仅作不可相加审计。 | 原生整流kg、m3、Item(s)及独立组分分数单位 | 每真实转移事故 | 真实接收期间，保留期末另列 | 实际批发出口接收处理边界 | 每参考流 | 真实接收分类验收、实测净量皮重保留组分原生证据及唯一去向责任 相容净量/N一次，整流保留肥和独立物流不可重复相加。 |
| cp_environment | bagged_urea_wholesale | 条件性真实物种直接释放 | 物种介质测量或适用活动系数 | event_id; species_identity; particle_basis; receiving_medium; direct_measurement; direct_measurement_unit; direct_measurement_basis; direct_measurement_method; direct_measurement_state; direct_measurement_source; direct_measurement_sample_time; activity; activity_unit; activity_basis; activity_method; activity_state; activity_source; activity_sample_time; factor; factor_unit; factor_basis; factor_method; factor_state; factor_source; factor_sample_time; factor_scope_complete; composition; composition_unit; composition_basis; composition_method; composition_state; composition_source; composition_sample_time; composition_wet_dry_N_basis; release_fraction; release_fraction_unit; release_fraction_basis; release_fraction_method; release_fraction_state; release_fraction_source; release_fraction_sample_time; fate_quantity; fate_quantity_unit; fate_quantity_basis; fate_quantity_method; fate_quantity_state; fate_quantity_source; fate_quantity_sample_time; whole_stream_quantity; whole_stream_quantity_unit; whole_stream_quantity_basis; whole_stream_quantity_method; whole_stream_quantity_state; whole_stream_quantity_source; whole_stream_quantity_sample_time; density; density_unit; density_basis; density_method; density_state; density_source; density_sample_time; density_temperature; density_temperature_unit; conversion_factor; conversion_factor_unit; conversion_factor_basis; conversion_factor_method; conversion_factor_state; conversion_factor_source; conversion_factor_sample_time; retained_captured_quantity; retained_captured_quantity_unit; retained_captured_quantity_basis; retained_captured_quantity_method; retained_captured_quantity_state; retained_captured_quantity_source; retained_captured_quantity_sample_time; contained_transfer_exclusion; stock_unknowns; provider_overlap; event_time; time_zone; time_source; N | 独立识别真实物种颗粒介质，以实测或真实适用原生活动系数组成必要去向。氮尿素SDS库存差田间因子不是仓库排放零，捕集收集排除，完整系数不再相乘。 | kg物种及原生活动系数组成去向温度时间单位 | 每真实实测有据事件 | 实际事件取样期间代表性 | 批发外真实接收介质 | 每参考流 | 取样分析或适用系数来源及真实活动基准状态粒径介质去向证据 实际物种测量/N或有据原生系数路线/N。 |

### 计算规则

| rule_id | Applies to | Rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| completed_count | accepted_service | N为有商家所有权买方门槛来源记录支持、撤销后真实自有转售企业间最终唯一验收数。仅N>0归一，其他事件资源保留，不虚构输出除法。 | cp_urea真实所有权企业最终验收撤销证据 | N与1 Item(s)服务参考 |  |
| moisture_basis_audit | 非交换肥料 | 真实相容水干定义下w_wet=water_mass/wet_mass；w_dry=water_mass/dry_matter_mass；w_wet=w_dry/(1+w_dry)；dry_matter_mass=wet_mass*(1-w_wet)。原生百分比分数换算方法状态取样来源明确，水分差本身非干尿素损失。 | cp_urea原生净量水分定义湿干基换算 | 实际不可重复湿干水审计，无水分默认 |  |
| nitrogen_audit | 非交换养分 | 仅匹配实际实测或有据分析湿干基准单位状态方法取样来源时nitrogen_mass=actual_matching_basis_mass*actual_N_mass_fraction；不乘典型标签。氮含量不产生另肥料输出或NH3/N2O/CO2释放。 | cp_urea实际质量氮基准分析来源换算 | 实际氮不可重复审计，非排放因子 |  |
| original_gate_demand | 服务外商品 | commodity_source_gate_demand=assigned_source_gate_quantity；实际直接映射，或assigned_source_gate_quantity=cohort_source_quantity*target_exit_driver/sum_exit_drivers，实际正且完整终端含期末退回其他可用真实损失。原生来源分配基线补阶段量等价阶段损失责任覆盖服务外一次，含有据水分状态份额。  每项关联原门槛需求或损失量须记录assignment_scope_ids、quantity_basis（raw_target_cohort或per_reference）、same_target_scope_N及来源。真实外部库存阶段损失集成使用原始实体量一次。仅与1 Item(s)服务组合时派生q_per_reference=q_raw_of_that_same_scope/正数same_target_scope_N；已归一量不再除，单货批原始范围N=1，N=0无归一值。 | cp_urea原完整粒状袋门槛来源全部终端原生分配覆盖 | 量化原成品粒状袋需求及唯一次上游损失接口 |  |
| supply_convention | 新增供给 | S=opening+net_receipts-closing；总S/N加同库存实际usable_outward_return/N输出，或仅耗用(S-usable_outward_return)/N且省配对输出。原商品资产不可冲无关供给或再抵扣。 | cp_supplies真实原生库存范围换算接收配对 | 互斥新增供给和未用外送退回 |  |
| utility_allocation | 真实公用工程 | 匹配因果原生基准service_driver_share=service_driver/all_user_driver；真实换算后allocated_utility=native_interval_quantity*service_driver_share/N。 | cp_utilities原生区间驱动方法状态来源 | 每服务实际实测或分配仓库公用工程 |  |
| provider_allocation | provider_packages | 物理等价覆盖后provider_quantity=actual_native_package_quantity*documented_share/N；documented_share=share_numerator/share_denominator，匹配原生驱动基准来源。 | cp_provider物理原生等价份额责任记录 | 每服务互斥真实承包包 |  |
| asset_allocation | shared_assets | asset_equivalent=job_driver/lifetime_all_user_driver/N；lifetime_all_user_driver=compatible_observed_all_user_driver+compatible_sourced_remaining_driver。匹配完整周期寿命终结及全部工作观测剩余寿命等价原生方法状态来源不确定性更新明确。 | cp_assets完整全部用户周期原生驱动 | 每服务全部用户完整寿命资产份额 |  |
| unique_freight_sum | freight | EACH时cargo_total=actual_each_compatible_cargo_mass*actual_compatible_count一次；TOTAL时cargo_total=actual_total_compatible_cargo_mass不变。货载保留真实肥水包装支撑仅扣非货物皮重。逐唯一load+leg的actual_transport_work=cargo_total_tonnes*actual_distance_km或匹配承运原生量；freight_quantity=sum_unique_load_leg(actual_transport_work*documented_service_share)/N，每记录份额在和内。 | cp_freight唯一段原生货载范围计数路程换算记录份额覆盖 | 每服务真实承运量，计数份额N各一次 |  |
| actual_outlets | 接收流 | outlet_quantity=actual_compatible_net_quantity/N；EACH仅乘相容实际数一次，TOTAL不变。整袋保留肥水氮、散颗粒细粉、包装残料混合清理收集液组分直接物种视图互斥。 | cp_outlets原生整流组分水分范围状态父流接收去向 | 真实净接收量，无重复组分处理 |  |
| actual_release | direct_species | release_quantity=actual_measured_species_quantity/N或compatible_activity*applicable_factor*required_composition*required_release_fraction/N。完整物种系数已含氮组成去向不再乘，排除捕集收集库存。 | cp_environment真实原生测量活动系数组成去向介质来源 | 真实物种介质量，无尿素氮田间默认 |  |

### 数据质量要求

| requirement_id | applies_to | requirement | evidence |
| --- | --- | --- | --- |
| native_evidence | 全部操作数 | 每物料组分去向驱动保留真实原生单位基准方法状态取样来源及相容换算。湿干氮水分和真密度松装密度匹配真实状态，未知非零。 | 节点CP原记录真实换算 |
| actual_state | 原粒状袋 | 真实供应成品配方等级颗粒袋分析控制；典型标签PDS氮水分松装密度筛分值非统一。物性背景不产生调理防结块抑制剂施用或排放配方。 | 真实放行等级分析包装来源适用 |
| complete_commodity | 原门槛接口 | 完整制造造粒袋门槛及来源分配基线补阶段原生量、正完整全部终端、真实损失责任阶段覆盖在服务外一次后才完整链。 | cp_urea关联商品读回 |
| final_binding | 真实展开交换 | 最终交换前实际SKU服务资产出口物种需具体流身份属性单位详情，Count支持候选卡非身份核实。 | 真实详情支持原生量接收证据 |

| requirement_id | applies_to | requirement | evidence |
| --- | --- | --- | --- |
| electricity | bagged_urea_wholesale | 电表记录对应哪个供电点、交直流状态、电压和供应方数据集？核对已列交流电卡与其他有证据的供电，不得将交流电 UUID 用于其他能源。 仅实际仓库照明搬运计量或因果分配。供应制造造粒袋装及批发干燥混合溶解田间施用不假设为当前用电。承包承运覆盖互斥。 数量范围证据需求：需真实区间表计全部用户原生驱动和交付电力来源属性支持；不默认每袋吨或千克氮用电。 计量证据：协议`cp_utilities`；原记录口径 Energy / kWh。原数量约束“native_interval_quantity*service_driver_share/N”仅逐一适用于身份及单位匹配的独立流，不生成类目合计交换，也不将原记录单位套用于不同物料或服务。已按参考流给出的数量不得再次归一化。 已明确的流卡：`electricity_ac`。其他实际状态须先解决上述具体证据问题，不得套用这些身份。 本记录不是交换，不能生成类目合计数量。 | `cp_utilities`; 实际来源关联原生记录 |
| hygiene_water | bagged_urea_wholesale | 供应记录是否证明为处理自来水，还是其他明确水质或水源？核实供水状态及交接门，不得用自来水卡替代其他水。 仅真实供给仓库表面卫生事故水。商品水分非公用水，不日常溶肥洗涤再调理或农用灌水。需真实水源处理承包边界。 数量范围证据需求：需原生计量体积或相容密度换算、真实卫生区间全部用户分配和水源；水分增量不等于清洁水。 计量证据：协议`cp_utilities`；原记录口径 Volume / m3。原数量约束“actual_utility_quantity*service_driver_share/N”仅逐一适用于身份及单位匹配的独立流，不生成类目合计交换，也不将原记录单位套用于不同物料或服务。已按参考流给出的数量不得再次归一化。 已明确的流卡：`hygiene_water_liquid_tap`。其他实际状态须先解决上述具体证据问题，不得套用这些身份。 本记录不是交换，不能生成类目合计数量。 | `cp_utilities`; 实际来源关联原生记录 |
| hygiene_materials | bagged_urea_wholesale | 取得下述清洁或维护职责实际采购品号、配方或安全数据表、供应浓度、物态、用途及库存领用记录。逐项核实洗涤剂以外的实际材料；不得由本 PCR 预设药剂、滤材或剂量。 仅实际使用时展开真实清洁剂擦拭吸附过滤物SKU及独立负担库存。不要求防结块剂抑制剂涂层干燥剂或剂量，原肥料包装内含属于商品。使用后整流需独立证据。 数量范围证据需求：需真实物料组成原生量范围库存及配对未用外送；清洁设备标签不规定批发化学用品量。 计量证据：协议`cp_supplies`；原记录口径 Mass / kg。原数量约束“selected_supply_input/N”仅逐一适用于身份及单位匹配的独立流，不生成类目合计交换，也不将原记录单位套用于不同物料或服务。已按参考流给出的数量不得再次归一化。 已明确的流卡：`hygiene_materials_synthetic_detergent`。其他实际状态须先解决上述具体证据问题，不得套用这些身份。 本记录不是交换，不能生成类目合计数量。 | `cp_supplies`; 实际来源关联原生记录 |
| added_outer_packing | bagged_urea_wholesale | 取得包装物料单或规格、材料或复合层身份及新增与继承包装的责任。按该记录逐项确定尚缺的套袋、封口、标签、捆扎带或支撑件身份；一体复合包装不得拆成可相加的材料交换。 仅真实新增外护薄膜封口物；原袋衬标签供应包装属于商品。循环托盘笼为完整寿命资产，不规定换袋开袋或产品包衣。 数量范围证据需求：需真实外部单位材质单件质量原生范围责任；不默认袋重每吨托盘或缠绕剂量。 计量证据：协议`cp_supplies`；原记录口径 Count / Item(s)。原数量约束“selected_supply_input/N”仅逐一适用于身份及单位匹配的独立流，不生成类目合计交换，也不将原记录单位套用于不同物料或服务。已按参考流给出的数量不得再次归一化。 本记录不是交换，不能生成类目合计数量。 | `cp_supplies`; 实际来源关联原生记录 |
| provider_packages | bagged_urea_wholesale | 取得本记录中明列各职责的供应商合同或完成结果记录、原生计量物理单位及包含资源。确定各项服务结果身份；检验、清洁、装卸为不同服务，价格或小时不得改称件数。 真实原生物理服务等价和资源资产承运处理边界及因果份额，费用不是数量。外包干燥造粒造丸包衣加抑制剂混配溶解换袋仍需路线审查，非隐藏物流。 数量范围证据需求：需真实服务物理单位等价、份额原生驱动及唯一责任；无通用调理或货币代理。 计量证据：协议`cp_provider`；原记录口径 Count / Item(s)。原数量约束“actual_native_package_quantity*documented_share/N”仅逐一适用于身份及单位匹配的独立流，不生成类目合计交换，也不将原记录单位套用于不同物料或服务。已按参考流给出的数量不得再次归一化。 本记录不是交换，不能生成类目合计数量。 | `cp_provider`; 实际来源关联原生记录 |
| shared_assets | bagged_urea_wholesale | 对本记录中明列的每种资产取得资产编号、配置及匹配的完整生命周期数据集。待补的是各资产或服务身份及全寿命全部使用者分母；仓库、叉车、托盘不能共用一条计数交换，也不能套用默认寿命。 真实建筑货架电动搬运循环托盘容器秤监测器覆盖全部用户期间与完整制造实际维护更换退役寿命终结。不默认袋为新共享设施；供应承包承运责任互斥。 数量范围证据需求：需匹配完整资产周期及原生工作已观测剩余寿命驱动来源等价不确定性；非每搬新托盘或统一寿命。 计量证据：协议`cp_assets`；原记录口径 Count / Item(s)。原数量约束“job_driver/lifetime_all_user_driver/N”仅逐一适用于身份及单位匹配的独立流，不生成类目合计交换，也不将原记录单位套用于不同物料或服务。已按参考流给出的数量不得再次归一化。 本记录不是交换，不能生成类目合计数量。 | `cp_assets`; 实际来源关联原生记录 |
| freight | bagged_urea_wholesale | 对实际入库、出库、退运及废物运输段取得运输方式或车辆、温控服务、起终点、实际载荷和距离及供应方覆盖。方式或配置未明确前不能选择运输流；不同运输方式不得合成一条 kg*km 流。 货载含真实水分状态肥料和袋衬标签外包装随货支撑，不仅养分N。仅扣车辆集装箱非货物皮重。EACH相容货载质量乘真实数一次，TOTAL不变。唯一载荷段工作量乘该记录物理份额在和内，再除N一次，空返燃料资产唯一负责。 数量范围证据需求：需真实货载内容水分包装支撑皮重边界、范围计数、唯一段路程换算记录份额空返；松装密度袋标签非整货计量。 计量证据：协议`cp_freight`；原记录口径 Freight transport / t*km。原数量约束“sum_unique_load_leg(actual_transport_work*documented_service_share)/N”仅逐一适用于身份及单位匹配的独立流，不生成类目合计交换，也不将原记录单位套用于不同物料或服务。已按参考流给出的数量不得再次归一化。 本记录不是交换，不能生成类目合计数量。 | `cp_freight`; 实际来源关联原生记录 |
| unused_count_returns | bagged_urea_wholesale | 将对外退料凭据匹配到唯一投入品号、状态、原生单位及接收方。采用净消耗投入时省略对应退料交换；商品退货及期末库存另作审计记录。 同一独立库存真实外送可用未用新单位，回收期末非外送。商品肥料原袋退回为非交换商品，不是当前包装抵扣；仅耗用输入扣同配对退回时省此输出。 数量范围证据需求：需原供给单位状态同库存外接收配对；原袋循环托盘不能变成未用新料抵扣。 计量证据：协议`cp_supplies`；原记录口径 Count / Item(s)。原数量约束“actual_matched_unused_outward_units/N”仅逐一适用于身份及单位匹配的独立流，不生成类目合计交换，也不将原记录单位套用于不同物料或服务。已按参考流给出的数量不得再次归一化。 本记录不是交换，不能生成类目合计数量。 | `cp_supplies`; 实际来源关联原生记录 |
| unused_mass_returns | bagged_urea_wholesale | 将对外退料凭据匹配到唯一投入品号、状态、原生单位及接收方。采用净消耗投入时省略对应退料交换；商品退货及期末库存另作审计记录。 同一独立负担来源库存真实可用未用卫生物料外送原生净质量。总输入加配对输出，或仅耗用减同退回且省输出，不二次或自动避免生产抵扣。肥料不是当前卫生用品。 数量范围证据需求：需实际SKU状态净量单位来源及同库存接收证据；原肥损失退回不冲无关清洁物。 计量证据：协议`cp_supplies`；原记录口径 Mass / kg。原数量约束“actual_matched_unused_outward_mass/N”仅逐一适用于身份及单位匹配的独立流，不生成类目合计交换，也不将原记录单位套用于不同物料或服务。已按参考流给出的数量不得再次归一化。 已明确的流卡：`unused_mass_returns_detergent_return`。其他实际状态须先解决上述具体证据问题，不得套用这些身份。 本记录不是交换，不能生成类目合计数量。 | `cp_supplies`; 实际来源关联原生记录 |
| whole_bag_waste | bagged_urea_wholesale | 取得下述实际出口的独立转移凭据，含来源整件或品号、物态、保留组成、接收方及处理范围。匹配到一张已列实物卡；尚未匹配的部件、液体或污染混合物需自身明确身份，不能把本记录 ID 当废物流。 真实接收废弃整袋或部分装料原袋，仅按实际共同转移包含肥料水分衬包装。结块水分差破袋拒收退货本身不是处置。保留肥料氮水组分审计含于整流。 数量范围证据需求：需来源袋批次等级水分状态、原生整流净量范围及接收分类处理；不推定整袋损失或肥料回收系数。 计量证据：协议`cp_outlets`；原记录口径 Mass / kg。原数量约束“actual_compatible_outlet_net_quantity/N”仅逐一适用于身份及单位匹配的独立流，不生成类目合计交换，也不将原记录单位套用于不同物料或服务。已按参考流给出的数量不得再次归一化。 已明确的流卡：`whole_bag_waste_atomic_case`。其他实际状态须先解决上述具体证据问题，不得套用这些身份。 本记录不是交换，不能生成类目合计数量。 | `cp_outlets`; 实际来源关联原生记录 |
| loose_fertilizer_waste | bagged_urea_wholesale | 取得下述实际出口的独立转移凭据，含来源整件或品号、物态、保留组成、接收方及处理范围。匹配到一张已列实物卡；尚未匹配的部件、液体或污染混合物需自身明确身份，不能把本记录 ID 当废物流。 关联来源批次并真实独立收集转移的撒落颗粒细粉，区分整袋包装残留混合清理已含肥料。不假设开袋换袋筛分研磨。捕集细粉非空气颗粒，不自动农用再利用或回收。 数量范围证据需求：需实际收集原生净质量水分组成状态父流接收；袋库存差或可见粉尘不确立捕集量、干尿素氮损失或空气释放。 计量证据：协议`cp_outlets`；原记录口径 Mass / kg。原数量约束“actual_compatible_outlet_net_quantity/N”仅逐一适用于身份及单位匹配的独立流，不生成类目合计交换，也不将原记录单位套用于不同物料或服务。已按参考流给出的数量不得再次归一化。 已明确的流卡：`loose_fertilizer_waste_atomic_case`; `loose_fertilizer_waste_urea_fines`。其他实际状态须先解决上述具体证据问题，不得套用这些身份。 本记录不是交换，不能生成类目合计数量。 | `cp_outlets`; 实际来源关联原生记录 |
| packaging_waste | bagged_urea_wholesale | 取得下述实际出口的独立转移凭据，含来源整件或品号、物态、保留组成、接收方及处理范围。匹配到一张已列实物卡；尚未匹配的部件、液体或污染混合物需自身明确身份，不能把本记录 ID 当废物流。 真实分离袋衬标签外包装，记录原生残肥水分父流接收，不日常倒袋换袋。排除整袋或混合清理已含包装；理论净袋皮重非实际污染废物质量。 数量范围证据需求：需实际材质整流净量范围保留肥料液体来源接收分类；原袋不是转售再次新购输入。 计量证据：协议`cp_outlets`；原记录口径 Mass / kg。原数量约束“actual_compatible_outlet_net_quantity/N”仅逐一适用于身份及单位匹配的独立流，不生成类目合计交换，也不将原记录单位套用于不同物料或服务。已按参考流给出的数量不得再次归一化。 已明确的流卡：`packaging_waste_paper_pack`; `packaging_waste_metal_pack`; `packaging_waste_plastic_pack`。其他实际状态须先解决上述具体证据问题，不得套用这些身份。 本记录不是交换，不能生成类目合计数量。 | `cp_outlets`; 实际来源关联原生记录 |
| hygiene_waste | bagged_urea_wholesale | 取得下述实际出口的独立转移凭据，含来源整件或品号、物态、保留组成、接收方及处理范围。匹配到一张已列实物卡；尚未匹配的部件、液体或污染混合物需自身明确身份，不能把本记录 ID 当废物流。 真实已用擦拭吸附过滤或混合捕集固体，含保留肥水。购入干料、使用后湿整流和组分尿素氮水分审计不可重复相加，不规定干燥处置配方或默认物化处理。 数量范围证据需求：需实际已用湿净量范围、保留肥液组分原生单位基准方法状态来源取样去向接收；收货用品或推定溢洒不足。 计量证据：协议`cp_outlets`；原记录口径 Mass / kg。原数量约束“actual_compatible_outlet_net_quantity/N”仅逐一适用于身份及单位匹配的独立流，不生成类目合计交换，也不将原记录单位套用于不同物料或服务。已按参考流给出的数量不得再次归一化。 已明确的流卡：`hygiene_waste_spent_wipe`。其他实际状态须先解决上述具体证据问题，不得套用这些身份。 本记录不是交换，不能生成类目合计数量。 | `cp_outlets`; 实际来源关联原生记录 |
| contained_liquid | bagged_urea_wholesale | 取得下述实际出口的独立转移凭据，含来源整件或品号、物态、保留组成、接收方及处理范围。匹配到一张已列实物卡；尚未匹配的部件、液体或污染混合物需自身明确身份，不能把本记录 ID 当废物流。 送接收方的真实卫生事故收集液或浆，不是日常溶肥田间施用或直接纯水排放。真实溶解悬浮尿素氮水基准负荷需记录，与吸附固体整袋内容互斥。 数量范围证据需求：需真实体积或相容质量密度温度换算、原生组分负荷状态来源接收处理；水分增量或取水不能决定废水量组成。 计量证据：协议`cp_outlets`；原记录口径 Volume / m3。原数量约束“actual_compatible_outlet_net_quantity/N”仅逐一适用于身份及单位匹配的独立流，不生成类目合计交换，也不将原记录单位套用于不同物料或服务。已按参考流给出的数量不得再次归一化。 已明确的流卡：`contained_liquid_aqueous_cleaning`。其他实际状态须先解决上述具体证据问题，不得套用这些身份。 本记录不是交换，不能生成类目合计数量。 | `cp_outlets`; 实际来源关联原生记录 |
| direct_species | bagged_urea_wholesale | 按排放或采样记录确定各实测排放的来源事件、化学物或粒径身份、来源属性及接收介质。物种、粒径或介质不明须保留具体证据缺口；化学品总用量或库存损失不能提供这些身份。 独立识别物种粒径真实介质，采用实测或适用活动系数组成去向。尿素氮含量标签SDS、结块水分库存差不是NH3/N2O/CO2或粉尘排放因子或零。捕集颗粒细粉和收集液仍为转移，不导入田间水解土壤排放。 数量范围证据需求：需真实物种粒径介质及原生测量或有据活动系数组成去向换算；完整物种系数已含氮组成去向不再相乘，无通用全部损失入空气或纯度系数。 计量证据：协议`cp_environment`；原记录口径 Mass / kg。原数量约束“actual_measured_species_quantity/N OR actual_activity*applicable_factor*required_composition*required_release_fraction/N”仅逐一适用于身份及单位匹配的独立流，不生成类目合计交换，也不将原记录单位套用于不同物料或服务。已按参考流给出的数量不得再次归一化。 本记录不是交换，不能生成类目合计数量。 | `cp_environment`; 实际来源关联原生记录 |


## 9. 验证规则

| rule_id | Rule | source_ids |
| --- | --- | --- |
| reference_gate_check | 参考输出名链接Count和N匹配真实自有转售企业最终撤销后验收及原袋粒状氮水分状态包装限定；N>0后除，取消未完成资源保留。 |  |
| source_gate_check | 实际完整成品配制造粒袋装门槛，原分配基线补阶段原生量状态来源，直接映射或正完整终端含期末其他可用退回真实损失及原等价阶段损失覆盖唯一责任在服务外一次。不仅原氨尿素，不余额等于损失。  每项关联原门槛需求或损失量须记录assignment_scope_ids、quantity_basis（raw_target_cohort或per_reference）、same_target_scope_N及来源。真实外部库存阶段损失集成使用原始实体量一次。仅与1 Item(s)服务组合时派生q_per_reference=q_raw_of_that_same_scope/正数same_target_scope_N；已归一量不再除，单货批原始范围N=1，N=0无归一值。 |  |
| scope_check | 无隐藏批发干燥造粒造丸包衣加抑制剂混配溶解换袋田间施用主动气候，包括外包。未经审扩展不替换散装造丸（prilled）混配包衣抑制剂。 |  |
| basis_fate_check | 真实湿干水分氮基准单位状态来源一致，水分差不自动干尿素损失。整袋散细粉包装混合清理收集液保留组分物种接收处理互斥。氮含尿素化学库存差不是NH3N2OCO2排放或零。 |  |
| resource_record_check | EACH/TOTAL真实货载保留肥料实际水分包装随货支撑仅扣非货物皮重，唯一载荷段量乘自身物理份额在和内再除N一次。全部用户完整资产工作已观测剩余寿命原生证据寿命终结不确定性及总S加配对输出或仅耗用省输出匹配唯一责任。 |  |
| actual_binding_check | 最终交换需真实量换算来源及具体核实身份属性单位；候选未定身份范围不由检查映射审查豁免，不宣称发布完整链就绪。 |  |
| validate_concrete_identity_decisions | all inventory rows | 将每项实际身份核实事项落实到实物明确的流卡和原生数量，或提供不适用证据。证据检查点 ID 不是交换。发生、物种、状态、接收方或服务配置缺失时阻断最终数据完成，不默认零。按规定保持整体与组分、总量投入与对应退料的排他关系。 |  |

## 10. 发布数据集画像

| Field | Value |
| --- | --- |
| dataset_role | 真实最终验收原袋粒状尿素商业货批的自营企业间附加服务前景。 |
| downstream_use | 互斥实际批发操作与匹配完整原成品粒状袋商品系统及量化唯一原需求损失在服务外仅组合一次。 |
| allowed_use | 真实指定原厂成品原袋粒状等级批次氮水分状态包装普通常温批发及真实所有权验收资源接收。 |
| excluded_use | 独立完整肥料足迹，散装造丸（prilled）混配包衣抑制剂路线、制造调理田间使用、代理零售或未审额外操作。 |
| required_metadata | 真实所有权购销企业最终门槛来源撤销、原粒状袋SKU批等级分析湿干氮水分袋数净量皮重状态时刻场址期间，原分配基线补阶段完整终端原生记录损失阶段覆盖、资源完整资产唯一载荷段接收责任。 |
| required_quality_disclosure | 真实身份支持数量范围及原生方法状态取样来源缺口，湿干水分氮基准库存未知，分配换算唯一运输记录份额完整资产剩余不确定性。 |
| update_trigger | 实际等级颗粒包装来源配方批发操作服务资产段接收物种变化，修订氮水分驱动损失覆盖等价或具体身份。 |


## 11. 数据源

| source_id | type | reference | used_for |
| --- | --- | --- | --- |
| yara-granular-pds | handbook | YaraVera Granular Urea PDS，1页典型分析。 https://www.yara.us/contentassets/280676bbae1c466799e9d22b57225584/granular-urea-pds/ | 仅支持实际颗粒等级氮水分粒度松装密度计量问题，无数值默认或损失排放系数。 |
| yara-bag-label | literature | YaraVera Urea原产品袋标签，1页。 https://www.yara.us/contentassets/280676bbae1c466799e9d22b57225584/yaravera-urea-bag-label.pdf | 特定原袋尿素氮来源状态问题，不统一氮袋重或批发农艺医疗法律火灾程序。 |
| yara-physical-properties | literature | Yara，Physical properties of fertilizers。 https://www.yara.us/crop-nutrition/fertilizer-handling-and-safety/physical-properties-of-fertilizers/ | 仅实际吸湿结块颗粒细粉搬运状态定性背景，无湿度阈值调理防结块混配氮反应排放默认。 |
