---
pcr_id: pcr.own-account-uncoated-annealed-float-sheet-wholesale
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 供应商成品未镀膜退火浮法玻璃原片自营批发服务

## 1. 范围与适用性

适用于实际原始供应商成品未镀膜退火浮法原片在真实原隔片包装架配置中的自营企业间批发服务。保留原片片垛身份、几何计数、净玻璃质量密度基准和整货载包装支撑区别。普通存放搬运后真实买方验收，不含批发加工去渍。

厂家资料仅支持实际储存状态和产品状态核查（`pilkington-ats104`；`pilkington-float`），非统一储存几何密度化学数值、必需清洗加工或自动回收。实际冷凝擦伤污渍破损观察不同于实测物料损失、接收废弃或直接物种。

全部原玻璃制造退火供给尺寸操作及原隔片包装上游，含真实损失商品隐含负荷，在服务外。完整链前关联量化原门槛实际分配需求及唯一真实损失覆盖一次；服务处置处理仍按真实发生一次。

## 2. 产品类别身份

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.own-account-uncoated-annealed-float-sheet-wholesale |
| classification_refs | CPC 3.0:61061（narrower）；商品37113属于3711 |
| covered_products | 实际原始供应商成品未镀膜退火浮法原片在声明原包装架配置中的自营企业间批发服务。 |
| excluded_products | 镀膜夹层钢化磨抛玻璃路线，批发切割磨边研磨抛光钢化夹层镀膜玻璃洗涤去渍安装，收费代理零售独立仓储。 |
| representative_product | 实际来源原片等级ID尺寸、退火未镀膜状态及片垛隔片包装架配置，不采用统一玻璃尺寸密度。 |
| production_route | 供应商原成品原片放行；批发实际接收包装状态记录、普通常温存放电动搬运发货及企业买方真实验收。 |
| market_state | 已完成商业服务；购销玻璃原厂包装是非交换商品库存，不是服务耗用输入。 |


## 3. 参考流

| Field | Value |
| --- | --- |
| What | 对声明原浮法玻璃货批进行商业接收、普通常温存放搬运及实际企业间验收交接。 |
| How much | 1个真实完成商业货批；实际原片片垛包装计数、面积及净玻璃包装质量另作原生数量。 |
| How well | 真实供应商放行状态等级与原片片垛包装架记录、破损污渍冷凝擦伤观察及真实买方标准。不统一规定湿度时长强度安全数值或破坏性测试。 |
| How long or cycle | 实际来源放行收货存放发货验收时刻时区持续量原生单位及代表性环境原片状态观察；跨期未完成拒收尝试保留资源归属。 |
| reference_flow_link | `accepted_service` |

| Field | Value |
| --- | --- |
| reference_amount | 1 |
| reference_product_flow | 已完成的供应商成品未镀膜退火浮法玻璃原片自营批发货批服务 |
| reference_flow_property | Count `01846770-4cfe-4a25-8ad9-919d8d378345` |
| reference_unit_group | Count `5beb6eed-33a9-47b8-9ede-1dfe8f679159` |
| reference_unit | Item(s) |
| required_qualifiers | consignment_id; manufacturer; original_supplier_release_gate; glass_grade; uncoated_annealed_float_state; original_sheet_ids; stack_pack_rack_ids; width_height_thickness_basis; actual_sheet_count; actual_area_basis; net_glass_mass_basis; density_state_source; inherited_interleave_pack_tare; condition_acceptance; ambient_hold_records; receipt_dispatch_acceptance_times; buyer_acceptance; site_period |


## 4. 计量与单位规则

| rule_id | Applies to | Required property | Required unit | Rule | source_ids |
| --- | --- | --- | --- | --- | --- |
| commercial_count | accepted_service | Count | Item(s) | N仅一次计数实际最终企业买方验收的唯一商业货批ID，不是原片垛架碎片平方米千克或货币。 |  |
| sheet_geometry_mass | 商品审计 | Length;Area;Mass;Count | 实际原生长度;m2;kg;Item(s) | 宽高厚度片数保留实际单位方法来源及EACH/TOTAL范围。仅实际几何支持矩形时采用A=converted_width_m*converted_height_m；其他形状或厚度变化需真实代表面积体积证据。推算玻璃质量=compatible_area_m2*compatible_thickness_m*actual_density_kg_per_m3，需实际密度状态温度单位方法来源取样时刻及不确定性，不采用统一钠钙玻璃密度。实际称重净量独立于推算量。 |  |
| pack_and_extent | 玻璃供给出口运输 | Mass;Count | kg;Item(s) | 净玻璃与原隔片包装架支撑分开。EACH原生量仅乘一次相容实际数，TOTAL总量不可再乘。货载保留真实随货支撑包装，只扣秤票车辆集装箱非货物皮重。整流组分视图不重复相加。 |  |
| native_components | 全部物理换算 | 实际所需属性 | 原生及目标单位 | 每操作数保留单位基准状态方法来源时刻、实际单件质量与换算单位来源；体积质量换算需密度单位温度单位来源。保留液水分组分数量需独立单位基准方法来源取样时刻，不继承整流单位。 |  |
| condition_species | 状态及direct_species | 实际状态;Mass | 原生温度湿度时间;kg物种 | 记录真实环境原片温度、湿度单位方法来源时刻及冷凝擦伤污渍。来源背景不是统一数值操作目标、主动气候工艺、化学诊断、物种释放或默认损失。身份绑定前独立识别真实物种颗粒及介质。 | pilkington-ats104 |


## 5. 系统边界

### 边界抽象

| Field | Value |
| --- | --- |
| declared_starting_condition | 实际供应商按原供给尺寸完成的未镀膜退火浮法原片，含声明原隔片包装架支撑与状态。 |
| starting_condition_role | 批发附加服务的原成品原片供应商放行门槛，不是原硅砂碎玻璃或后续切割钢化安装品。 |
| product_classification_scope | CPC 3.0:61061较窄自营平板玻璃批发服务；37113是商品背景，不是服务数量。 |
| recursive_input_rule | 同类购销原片保留非交换库存；服务外追溯相容原门槛商品需求，不递归用批发服务作为玻璃。 |
| upstream_dataset_requirement | 关联商品仅一次覆盖真实原料熔化浮法退火、供应商切至原供给尺寸、完成状态及原隔片包装直至真实门槛。原硅砂碎玻璃或不匹配下游加工玻璃不足；服务外核对实际缺失阶段。 |
| disclosure | 声明原门槛状态等级几何单位来源、原始分配量及真实换算直接分配或完整竞争出口群组、损失唯一责任调整已含覆盖和缺失阶段。服务单独不确立完整产品链。 |

### 边界规则

| rule_id | Rule | source_ids |
| --- | --- | --- |
| merchant_scope | 纳入实际接收库存包装状态记录、普通常温存放电动搬运、仓库卫生事故围控、新外运输防护、分配基础设施运输及真实废物搬运处理。原供应商间距及环境监测本身既不能证明批发保存干预已经发生，也不能证明其缺席；须实际行动及责任记录。 |  |
| no_processing | 不假设切割磨边研磨抛光钢化夹层镀膜玻璃洗涤去渍安装或专用气候干预。真实此类操作含外包需审查扩展；厂家后续加工应用不产生批发操作。 | pilkington-float |
| condition_context | 玻璃储存资料仅支持实际水分擦伤间距观察及相关存放记录，不统一规定湿度时长数值或去渍配方、化学身份排放系数强度可回收结果。 | pilkington-ats104 |
| commodity_outside_once | 全部原片生产、原供给尺寸操作及原包装隔片上游，含真实损失商品隐含上游，在服务外。完整链前须关联量化原门槛分配需求及唯一真实损失调整原生基准来源责任已有覆盖一次；真实服务处置处理在此一次，未知损失不是零。 |  |
| physical_fates | 真实完整原片、关联原片碎片、独立包装、混合清理及收集液转移互斥。组分保留液视图含于整流，不另加物种。破损污渍未知质量不意味着整片废弃碎玻璃回收排放或避免生产抵扣。 |  |


## 6. 过程清单结构

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| sheet_wholesale | 原浮法玻璃片批发 | required | 实际指定原供应商未镀膜退火浮法原片货批 | final_service | accepted_service |


### 过程：原浮法玻璃片批发 (`sheet_wholesale`)

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

数量范围证据需求：需有实际计量区间、全部用户物理驱动及交付电力来源属性支持；不采用每片或每平方米用电默认。

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

数量范围证据需求：需有原生公用水体积或有据密度换算、真实卫生区间及全部用户份额；不推定玻璃清洗或冷凝体积系数。

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

数量范围证据需求：每种实际使用物料需有配方SKU、数量范围库存配对未用退回及原生组成换算来源。

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 已完成的供应商成品未镀膜退火浮法玻璃原片自营批发货批服务 (`accepted_service`)

针对声明原始供应商成品未镀膜退火浮法原片，在企业买方真实验收后完成的一次商业货批服务。服务计数不是片垛架碎片数量、玻璃平方米千克或利润。几何质量状态限定服务，不预设固定商品量。

- 选定流：已完成的供应商成品未镀膜退火浮法玻璃原片自营批发货批服务
- 流属性/单位：Count / Item(s)
- 数量规则：1 Item(s)
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_sheets`

数量范围证据需求：需有真实商业验收和原片片垛配置、计数面积净玻璃质量与包装支撑区别及存放期间限定；不固定每服务片数平方米吨数。

##### 废物流

###### 废弃原片未镀膜退火浮法玻璃 (`intact_sheet_waste_atomic_case`)

仅在实际独立记录确认“废弃原片未镀膜退火浮法玻璃”时适用。本卡只覆盖该命名实物状态及自身实际净量、保留组成和接收门。其他部件、碎片、游离液、独立包装及清理载体仍属于`intact_sheet_waste`中的强制完成记录；不得移动边界、预设事件、将库存差当废弃，或把仍保留在整体流内的组分另算出口。实际混收流须匹配自身准确身份。原有原生单位数量协议只用于本独占具体情形，其他实际去向分别协调。

- 选定流：废弃原片未镀膜退火浮法玻璃
- 流属性/单位：Mass / kg
- 数量规则：actual_compatible_outlet_net_quantity/N
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_outlets`

数量范围证据需求：需有实际来源原片ID、状态数量边界、所含包装和接收分类处理；不推定整片拒收或循环率。

###### 收集的未镀膜退火浮法玻璃碎片 (`fragment_waste_atomic_case`)

仅在实际独立记录确认“收集的未镀膜退火浮法玻璃碎片”时适用。本卡只覆盖该命名实物状态及自身实际净量、保留组成和接收门。其他部件、碎片、游离液、独立包装及清理载体仍属于`fragment_waste`中的强制完成记录；不得移动边界、预设事件、将库存差当废弃，或把仍保留在整体流内的组分另算出口。实际混收流须匹配自身准确身份。原有原生单位数量协议只用于本独占具体情形，其他实际去向分别协调。

- 选定流：收集的未镀膜退火浮法玻璃碎片
- 流属性/单位：Mass / kg
- 数量规则：actual_compatible_outlet_net_quantity/N
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_outlets`

数量范围证据需求：需有原片父关联、实际收集净质量范围组成状态接收去向；碎片数不确立原片数面积或大气物种。

###### 实际单独收集的纸类包装废物 (`packing_waste_paper_pack`)

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

数量范围证据需求：需有真实独立材质状态原生净量范围、保留液玻璃及接收来源责任；原包装不是转售时再次购入。


###### 实际单独收集的金属包装废物 (`packing_waste_metal_pack`)

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

数量范围证据需求：需有真实独立材质状态原生净量范围、保留液玻璃及接收来源责任；原包装不是转售时再次购入。


###### 实际单独收集的塑料包装废物 (`packing_waste_plastic_pack`)

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

数量范围证据需求：需有真实独立材质状态原生净量范围、保留液玻璃及接收来源责任；原包装不是转售时再次购入。

##### 基本流

## 7. 分配与联产品处理

| rule_id | Rule | source_ids |
| --- | --- | --- |
| stocks_attempts_genealogy | 按实际期间记录原片垛包装架和碎片父谱系：期初收货期末、可用商业退回其他可用出口、保留拒收及真实接收损失。内部移动保留回收不是外送。N仅计撤销后实际最终自营购销企业间验收服务；撤销拒收保留真实资源事件期间归属，不重复另一N；未完成拒收尝试跨期保留资源和明确去向。 仅在N>0且存在实际最终验收证据时除以N；否则保留未完成拒收资源及事件期间归属，不虚构服务参考或执行除法。 |  |
| original_source_assignment | 采用有据来源至目标直接映射，或完整相容来源群组：assigned_source_gate_quantity=cohort_source_quantity*target_exit_driver/sum_exit_drivers。真实相容全部终端出口记录含期末其他可用退回和实际损失，保留原生单位基准方法来源责任及原片等价。分母须正且完整，不用仅验收分母、不漏竞争记录、不以碎片数代原片等价。 |  |
| commodity_gate_demand | commodity_source_gate_demand=assigned_source_gate_quantity，对应实际原成品供给尺寸状态并含有据状态变化份额。原生来源分配数量单位状态来源换算分配及真实损失调整单位基准来源责任已有覆盖必需。最终交付质量加废物不替代原需求；商品系统在服务外唯一负责上游损失调整。  每项关联原门槛需求或损失量须记录assignment_scope_ids、quantity_basis（raw_target_cohort或per_reference）、same_target_scope_N及来源。真实外部库存阶段损失集成使用原始实体量一次。仅与1 Item(s)服务组合时派生q_per_reference=q_raw_of_that_same_scope/正数same_target_scope_N；已归一量不再除，单货批原始范围N=1，N=0无归一值。 |  |
| supply_and_return | S=opening+net_receipts-closing含保留回收未用品。选择总S/N输入并单独记录实际配对未用外送，或仅耗用(S-usable_outward_return)/N且省匹配输出。同一独立供给身份边界配对；不可用原隔片架玻璃冲减无关新物料，不再抵扣。 |  |
| all_consumer_resources | 实际表计原生资源按有据同单位因果服务与全部用户空间时间搬运物理驱动分配，覆盖全部用户期间及相关空闲卫生未完成尝试。记录分子分母单位基准来源不确定性；均分、片数、玻璃质量需真实因果证据，货币非物理驱动。 |  |
| complete_asset_life | 一个匹配生命周期含制造实际维护更换退役寿命终结、全部用户已观测历史及有来源剩余驱动，附原生单位基准等价来源不确定性敏感性更新。job_driver/lifetime_all_user_driver再除N一次。非每次移动新架，无供应商批发租赁承包承运重复责任。 |  |
| one_owner_nonadditive | 直接承包承运资产接收处理矩阵指定每物理事件唯一责任。货载保留真实隔片包装随货支撑，只扣非货物秤票皮重，EACH/TOTAL及真实物理份额/N各一次。整片碎片包装清理液组分及处理不重复；真实可用转移无默认替代抵扣。 |  |


## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_sheets | sheet_wholesale | 原片及已完成服务 | 供应商几何状态库存买方记录 | consignment_id; merchant_id; ownership_resale_evidence; business_buyer_id; acceptance_gate; acceptance_source; acceptance_reversal_ids; manufacturer; glass_grade; original_supplier_release_gate; uncoated_annealed_float_state; state_source; original_sheet_ids; parent_sheet_ids; fragment_parent_link; stack_id; pack_id; rack_id; support_owner; inherited_interleave_state; packing_state_source; width; width_unit; width_method; width_source; height; height_unit; height_method; height_source; thickness; thickness_unit; thickness_basis; thickness_method; thickness_source; geometry_shape; geometry_source; area; area_unit; area_basis; area_method; area_source; volume; volume_unit; volume_method; volume_source; sheet_count; count_unit; count_method; count_source; quantity_reporting_extent; count_multiplier; multiplier_unit; multiplier_source; glass_net_mass; mass_unit; mass_basis; mass_method; mass_source; measured_or_derived; glass_density; density_unit; density_state; density_temperature; density_temperature_unit; density_method; density_source; density_sample_time; geometry_conversion_factor; geometry_conversion_unit; geometry_conversion_source; mass_conversion_factor; mass_conversion_unit; mass_conversion_source; derived_mass_uncertainty; inherited_pack_mass; pack_mass_unit; pack_mass_basis; pack_mass_method; pack_mass_source; inherited_support_mass; support_mass_unit; support_mass_basis; support_mass_method; support_mass_source; whole_cargo_mass; cargo_mass_unit; cargo_mass_source; observed_condition; observation_time; ambient_temperature; ambient_temperature_unit; ambient_temperature_method; ambient_temperature_source; ambient_temperature_time; sheet_temperature; sheet_temperature_unit; sheet_temperature_method; sheet_temperature_source; sheet_temperature_time; humidity; humidity_unit; humidity_method; humidity_source; humidity_time; condensation_observation; spacing_observation; acceptance_criterion_source; buyer_acceptance_id; source_release_time; receipt_time; dispatch_time; acceptance_time; time_zone; duration; duration_unit; duration_source; opening_stock; receipts; closing_stock; stock_unit; stock_state; stock_source; return_ids; return_quantity; return_unit; return_state; return_method; return_source; return_owner; useful_other_exit_ids; useful_other_exit_quantity; useful_other_exit_unit; useful_other_exit_state; useful_other_exit_method; useful_other_exit_source; useful_other_exit_owner; actual_loss_quantity; actual_loss_unit; actual_loss_state; actual_loss_basis; actual_loss_method; actual_loss_source; actual_loss_fate; unfinished_resource_attribution; carried_resource_link; source_gate_input_quantity; source_gate_input_unit; source_gate_input_state; source_gate_quantity_source; source_gate_allocation_mode; direct_assignment_source_ids; direct_assignment_quantity; direct_assignment_unit; direct_assignment_source; allocation_cohort_id; cohort_source_quantity; cohort_source_unit; cohort_source_state; cohort_source_record; target_exit_driver; sum_exit_drivers; exit_driver_unit; exit_driver_basis; exit_driver_method; exit_driver_source; all_terminal_exit_ids; all_terminal_exit_driver_records; exit_owner; exit_original_sheet_equivalent; exit_equivalence_unit; exit_equivalence_source; assigned_source_gate_quantity; assigned_source_gate_unit; assigned_source_gate_state; source_gate_allocation_basis; source_gate_allocation_source; source_gate_conversion; source_gate_conversion_unit; source_gate_conversion_source; exclusive_other_exit_coverage; loss_adjustment_quantity; loss_adjustment_unit; loss_adjustment_basis; loss_adjustment_source; loss_owner; already_included_loss_coverage; upstream_missing_stages; upstream_stage_owner; assignment_scope_ids; quantity_basis; same_target_scope_N; same_scope_N_source | 核实实际批发商所有权转售证据及企业买方身份、真实验收门槛来源与撤销；撤销后仅计唯一最终自营购销企业间货批，不仅凭供应收货推定。追溯真实原片ID状态、供应商几何质量隔片包装架及真实水分擦伤间距存放记录。校准称量或代表几何密度方法，原生单位来源时刻与实测推算不确定性明确。完整链前匹配全部终端出口和原生来源分配。  每项关联原门槛需求或损失量须记录assignment_scope_ids、quantity_basis（raw_target_cohort或per_reference）、same_target_scope_N及来源。真实外部库存阶段损失集成使用原始实体量一次。仅与1 Item(s)服务组合时派生q_per_reference=q_raw_of_that_same_scope/正数same_target_scope_N；已归一量不再除，单货批原始范围N=1，N=0无归一值。 | Item(s)、原生尺寸、m2、kg及记录的密度温度湿度时间驱动单位 | 每次收货状态移动发货验收及期间关账 | 原来源放行到全部终端出口、跨期库存未完成尝试 | 实际供应批发买方门槛，sheet_wholesale节点 | 每参考流 | 供给放行等级、几何密度状态来源、校准方法、真实状态买方记录及互斥全部出口来源覆盖 实际N一次，完整原片碎片谱系来源库存驱动证据，未解释余额不作损失。 |
| cp_supplies | sheet_wholesale | 真实新物料与配对未用退回 | 独立供给外部转移登记 | supply_id; material_SKU; formulation; composition; composition_unit; composition_basis; composition_source; opening; net_receipts; closing; stock_unit; stock_source; retained_recovery; unused_outward_return; return_unit; return_receiver; same_supply_pairing; supply_convention; native_quantity; quantity_unit; quantity_basis; quantity_method; quantity_source; reporting_extent; count_multiplier; multiplier_unit; multiplier_source; per_piece_mass; per_piece_mass_unit; per_piece_mass_source; density; density_unit; density_temperature; density_temperature_unit; density_source; conversion_factor; conversion_unit; conversion_source; service_driver; all_user_driver; driver_unit; driver_basis; driver_source; service_driver_share; period; owner; embedded_provider_coverage; N; flow_row_id; actual_identity_case; actual_substance_or_material; actual_origin_and_medium; actual_state_and_gate; case_activation_evidence; typed_or_residual_quantity; quantity_exclusion_links; whole_total_reconciliation; unresolved_occurrence_not_zero | 记录真实配方SKU期初收货期末、单件总量单位换算及同源配对可用未用外送。总S输入加真实独立输出，或仅耗用扣配对且省输出；原隔片支撑不可冲无关输入。 按flow_row_id与actual_identity_case划分实际原生记录，仅有证据的分支适用。具体分支与余项在节点内数量互斥，每个实物出入只归属一次，并与相容同范围不可相加总量协调。发生或数量未知仍待采集，不能填零。 | 原生物料单位及相容目标换算 | 逐实际库存使用转移关账 | 实际供给期间及保留回收期末 | 批发新供给及真实接收方 | 每参考流 | 收据校准库存、原生换算密度来源与同库存配对 实际原生数量因果份额/N一次，不假设退回替代抵扣。 |
| cp_utilities | sheet_wholesale | 实际仓库公用工程份额 | 表计及同基准全部用户驱动 | utility_id; provider; geography; meter_id; native_interval_quantity; quantity_unit; quantity_basis; quantity_method; quantity_source; interval_start; interval_end; time_zone; service_driver; all_user_driver; driver_unit; driver_basis; driver_method; driver_source; service_driver_share; actual_utility_quantity; density; density_unit; density_temperature; density_temperature_unit; density_source; conversion_factor; conversion_unit; conversion_source; included_provider_scope; overlap_exclusions; N; flow_row_id; actual_identity_case; actual_substance_or_material; actual_origin_and_medium; actual_state_and_gate; case_activation_evidence; typed_or_residual_quantity; quantity_exclusion_links; whole_total_reconciliation; unresolved_occurrence_not_zero | 采用原生计量时段、实际服务与全部用户因果驱动单位基准来源，明确换算后除N；区分直接实测分配和承包重叠。 按flow_row_id与actual_identity_case划分实际原生记录，仅有证据的分支适用。具体分支与余项在节点内数量互斥，每个实物出入只归属一次，并与相容同范围不可相加总量协调。发生或数量未知仍待采集，不能填零。 | kWh、m3及实际原生时段驱动换算单位 | 每公用工程驱动区间 | 实际采集区间含所属空闲未完成资源 | 真实仓库搬运表计及全部用户 | 每参考流 | 表计来源、全部用户因果驱动及原生单位换算证据 当前公用工程不隐藏供应浮法制造或玻璃清洗资源。 |
| cp_provider | sheet_wholesale | 真实互斥承包服务 | 物理等价及覆盖事件记录 | package_id; provider; physical_scope; actual_native_package_quantity; package_unit; quantity_basis; quantity_method; quantity_source; physical_equivalence; equivalence_unit; equivalence_source; documented_share; share_numerator; share_denominator; share_driver_unit; share_driver_basis; share_driver_source; covered_events; covered_energy; covered_materials; covered_assets; covered_transport; covered_treatment; excluded_scope; direct_resource_owner; service_period; all_users; evidence_record; N | 取得真实原生服务包物理等价、份额分子分母基准来源及能源物料资产承运处理排除；外包真实额外加工仍需路线审查。 | 原生物理包及相容份额单位 | 逐实际承包事件范围变化 | 实际服务方期间 | 真实批发关联承包范围 | 每参考流 | 服务方物理单位来源、真实等价事件和唯一责任矩阵 原生数量乘真实份额/N一次，无价格换算或重复资源。 |
| cp_assets | sheet_wholesale | 完整寿命共享基础设施 | 资产服务历史生命周期登记 | asset_id; asset_dataset_scope; manufacture_coverage; maintenance; replacement_events; retirement; end_of_life; event_quantity; event_unit; event_source; job_driver; job_driver_unit; job_driver_basis; job_driver_method; job_driver_source; observed_all_user_driver; observed_driver_unit; observed_driver_basis; observed_driver_method; observed_driver_source; remaining_driver; remaining_driver_unit; remaining_basis; remaining_method; remaining_source; lifetime_all_user_driver; lifetime_driver_unit; lifetime_driver_basis; lifetime_driver_source; driver_equivalence; equivalence_unit; equivalence_source; all_consumers; all_periods; idle_and_open_use; uncertainty; sensitivity; update_trigger; supplier_merchant_provider_carrier_overlap; N | 匹配完整制造实际维护更换退役寿命终结、全部用户已观测驱动及有来源剩余服务，含原生单位基准方法来源等价不确定性敏感性更新。供应商回收架与直接承包承运责任互斥。 | 原生资产等价及相容工作寿命驱动单位 | 逐真实资产事件期间更新 | 全部用户已观测完整寿命加有来源剩余及寿命终结 | 实际共享仓库设备支撑使用者 | 每参考流 | 资产完整数据集边界、事件历史、剩余来源原生驱动不确定性 工作寿命比再除N，不每移动新架或重复租赁完整资产负担。 |
| cp_freight | sheet_wholesale | 真实包装架装玻璃运输 | 秤票载荷路线承运记录 | segment_id; mode; carrier; origin; destination; route_scope; actual_count; count_unit; count_source; cargo_mass_quantity; cargo_mass_unit; cargo_mass_reporting_extent; cargo_mass_count_multiplier; multiplier_unit; multiplier_source; actual_sheet_pack_state; inherited_interleave_pack_mass; inherited_pack_mass_unit; inherited_pack_mass_basis; inherited_pack_mass_method; inherited_pack_mass_source; added_outer_pack_mass; added_pack_mass_unit; added_pack_mass_basis; added_pack_mass_method; added_pack_mass_source; actual_carried_support_mass; support_mass_unit; support_mass_basis; support_mass_method; support_mass_source; noncargo_vehicle_container_tare; tare_unit; tare_source; payload_scope_source; whole_pack_payload; payload_unit; payload_method; payload_source; payload_conversion; payload_conversion_unit; payload_conversion_source; distance; distance_unit; distance_method; distance_source; distance_conversion; distance_conversion_unit; distance_conversion_source; actual_transport_work; work_unit; work_source; documented_service_share; share_numerator; share_denominator; share_driver_unit; share_driver_basis; share_driver_source; empty_return_coverage; carrier_fuel_assets; warehouse_overlap; N | 记录真实原片隔片包装随货支撑货载，只扣非货物皮重。EACH载荷乘相容实际数量一次，TOTAL不变。原生换算工作量后物理份额/N一次，空返燃料资产一次覆盖。 | 原生质量计数距离工作量及t*km换算 | 逐实际运输返程段 | 真实纳入路线期间 | 真实承运路线并排除仓库重叠 | 每参考流 | 秤票边界包装单原生范围数量来源与真实路线承运覆盖 循环随货支撑仍为货载，净玻璃非完整载荷。 |
| cp_outlets | sheet_wholesale | 真实物理接收转移 | 接收验收及整流组分计量 | transfer_id; receiver; receiver_classification; treatment_boundary; treatment_owner; original_sheet_ids; parent_sheet_ids; fragment_parent_link; pack_support_membership; stream_identity; physical_state; native_quantity; quantity_unit; quantity_basis; quantity_method; quantity_source; reporting_extent; count_multiplier; multiplier_unit; multiplier_source; transfer_time; whole_sheet_exclusion; separate_fragment_exclusion; separate_pack_exclusion; retained_component_identity; component_quantity; component_unit; component_basis; component_method; component_source; component_sample_time; component_fate; retained_moisture; retained_moisture_unit; retained_moisture_basis; retained_moisture_method; retained_moisture_source; retained_moisture_sample_time; retained_fluid; retained_fluid_unit; retained_fluid_basis; retained_fluid_method; retained_fluid_source; retained_fluid_sample_time; density; density_unit; density_temperature; density_temperature_unit; density_method; density_source; conversion_factor; conversion_unit; conversion_source; usable_transfer_record; waste_acceptance_record; source_stock_pairing; no_double_credit; N; flow_row_id; actual_identity_case; actual_substance_or_material; actual_origin_and_medium; actual_state_and_gate; case_activation_evidence; typed_or_residual_quantity; quantity_exclusion_links; whole_total_reconciliation; unresolved_occurrence_not_zero; flow_row_id; actual_identity_case; actual_substance_or_material; actual_state_and_gate; case_activation_evidence; quantity_exclusion_links; whole_total_reconciliation | 关联原片碎片父谱系和实际包装支撑成员；计量原生整流范围及独立保留组分水分液体单位基准方法来源取样时刻去向。真实可用或废物分类控制，不推定碎玻璃回收。 按flow_row_id与actual_identity_case划分实际原生记录，仅有证据的分支适用。具体分支与余项在节点内数量互斥，每个实物出入只归属一次，并与相容同范围不可相加总量协调。发生或数量未知仍待采集，不能填零。 只归属独立确认的实物情形，其他实际去向按来源分别保留；每个原生记录只属于一个交换，任何总量仅作不可相加审计。 | 原生整流Item(s)、kg、m3及独立组分液体单位 | 每真实外送事故 | 真实接收期间；保留期末库存另列 | 批发出口及实际接收处理边界 | 每参考流 | 接收分类验收、真实净量皮重状态来源与处理一次 整片碎片包装混合清理液体互斥；原生净量/N一次，保留组分不另加交换。 |
| cp_environment | sheet_wholesale | 条件性真实直接释放 | 物种介质测量或适用系数 | event_id; species_identity; particle_basis; receiving_medium; direct_measurement; measurement_unit; measurement_basis; measurement_method; measurement_source; sample_time; activity; activity_unit; activity_basis; activity_method; activity_source; factor; factor_unit; factor_basis; factor_source; factor_scope_complete; composition; composition_unit; composition_basis; composition_method; composition_source; composition_sample_time; release_fraction; fate_basis; fate_method; fate_source; whole_stream_quantity; whole_stream_unit; whole_stream_source; density; density_unit; density_temperature; density_temperature_unit; density_source; conversion_factor; conversion_unit; conversion_source; retained_captured_quantity; retained_captured_unit; retained_captured_basis; retained_captured_source; contained_transfer_exclusion; stock_unknowns; provider_overlap; N | 独立识别物种颗粒介质，实际测量或证明真实活动系数及必要组成去向原生换算。完整系数不再相乘；捕集收集排除，状态非化学诊断。 | kg物种及原生活动系数组成温度单位 | 每实际实测或有据事件 | 实际事件取样区间代表性 | 批发边界外实际接收介质 | 每参考流 | 实际测量分析来源或系数适用活动及介质去向证据 实测物种/N或适用系数路线/N，无玻璃粉尘碱溶剂默认。 |

### 计算规则

| rule_id | Applies to | Rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| completed_count | accepted_service | N为真实验收撤销后最终批发商自有转售企业间货批的唯一验收ID数；需批发商身份所有权转售证据、企业买方、门槛验收来源，不仅凭供应收货推定。不以片垛架碎片平方米或货币计服务数。 | cp_sheets真实货批验收状态时刻 | N与1 Item(s)服务参考 |  |
| sheet_geometry | 非交换玻璃审计 | 有据矩形原片A_each=converted_width_m*converted_height_m，否则采用实际代表性面积计量。EACH面积乘相容真实数一次，TOTAL面积保持总量。保留原生厚度几何变化及单位换算来源。 | cp_sheets真实几何计数范围原生单位换算 | 真实原片面积体积审计，无统一尺寸 |  |
| glass_mass | 非交换玻璃审计 | 仅代表实际几何密度状态支持时推算glass_mass_kg=compatible_area_m2*compatible_thickness_m*actual_density_kg_per_m3，保留密度方法来源取样时刻温度单位及不确定性。实测净玻璃与推算估计区分，无隐含默认密度或包装质量。 | cp_sheets原生面积厚度密度状态方法来源换算 | 可追溯净玻璃质量审计，不是耗用物料 |  |
| original_gate_demand | 服务外商品 | commodity_source_gate_demand=assigned_source_gate_quantity；有据直接分配，或assigned_source_gate_quantity=cohort_source_quantity*target_exit_driver/sum_exit_drivers，采用实际完整相容终端出口和正分母，包含期末其他可用退回真实损失。实际原生来源状态等价责任已有覆盖服务外核对一次。  每项关联原门槛需求或损失量须记录assignment_scope_ids、quantity_basis（raw_target_cohort或per_reference）、same_target_scope_N及来源。真实外部库存阶段损失集成使用原始实体量一次。仅与1 Item(s)服务组合时派生q_per_reference=q_raw_of_that_same_scope/正数same_target_scope_N；已归一量不再除，单货批原始范围N=1，N=0无归一值。 | cp_sheets来源量全部原生终端驱动换算覆盖 | 量化原成品供给原片需求及唯一损失接口 |  |
| supply_convention | 实际新增供给 | S=opening+net_receipts-closing；总S/N输入加实际配对usable_outward_return/N输出，或仅耗用(S-usable_outward_return)/N且省配对输出。不用原玻璃隔片架抵扣当前供给。 | cp_supplies原生库存数量范围换算同供给接收配对 | 互斥真实供给及外送退回交换 |  |
| utility_allocation | 真实公用工程 | 匹配因果原生基准service_driver_share=service_driver/all_user_driver；相容换算后allocated_utility=native_interval_quantity*service_driver_share/N。 | cp_utilities原生计量时段与全部用户驱动来源 | 每服务真实实测或分配公用工程 |  |
| provider_allocation | provider_packages | 物理等价及互斥覆盖后provider_quantity=actual_native_package_quantity*documented_share/N；documented_share=share_numerator/share_denominator，驱动原生基准来源相容。 | cp_provider真实范围等价原生份额责任 | 每货批互斥真实承包服务 |  |
| asset_allocation | shared_assets | asset_equivalent=job_driver/lifetime_all_user_driver/N；lifetime_all_user_driver=compatible_observed_all_user_driver+compatible_sourced_remaining_driver。实际完整制造维护更换退役寿命终结唯一负责，明确原生等价不确定性敏感性更新。 | cp_assets匹配完整生命周期历史剩余原生驱动来源 | 每服务全部用户完整寿命资产归属 |  |
| cargo_work | freight | EACH时cargo_total=actual_each_compatible_cargo_mass*actual_compatible_count；TOTAL时cargo_total=actual_total_compatible_cargo_mass不变。货载保留真实隔片包装随货支撑，只扣车辆集装箱非货物皮重。actual_transport_work=cargo_total_tonnes*actual_distance_km，或有据等价承运原生量；freight_quantity=actual_transport_work*documented_service_share/N一次。 | cp_freight真实货载皮重范围计数路程换算份额覆盖 | 每服务真实承运量，无重复乘数份额N |  |
| actual_outlets | 物理转移 | outlet_quantity=actual_compatible_net_quantity/N；EACH量仅乘一次相容计数，TOTAL不变。整流含保留组分液体；独立碎片包装收集液体实际物种与整片互斥。 | cp_outlets整流原生组分范围父关联接收去向 | 真实接收转移，不推定碎玻璃或重复组分 |  |
| actual_release | direct_species | release_quantity=actual_measured_species_quantity/N或compatible_activity*applicable_factor*required_composition*required_release_fraction/N。省去完整物种释放系数已含额外乘数并排除捕集收集物。 | cp_environment原生测量活动系数组成去向介质来源 | 真实已识别物种接收介质，无污渍破损默认 |  |

### 数据质量要求

| requirement_id | applies_to | requirement | evidence |
| --- | --- | --- | --- |
| native_evidence | 每操作数 | 保留原生单位状态基准方法来源取样时刻、几何密度温度换算及EACH/TOTAL范围。保留液组分原生单位独立，未知状态库存保留未定。 | 全部节点CP原始记录换算 |
| representative_state | 供应原片及环境记录 | 真实未镀膜退火原供给状态等级几何包装间距存放证据控制。无厂家统一湿度时长密度强度回收保证、玻璃清洗化学或物种系数。 | 实际供应放行计量状态及来源适用 |
| linked_full_chain | 商品接口 | 原制造供给尺寸包装阶段、原始分配量、正且完整终端驱动及损失责任已有覆盖在服务外一次后方可完整链。 | cp_sheets关联商品读回 |
| final_identity | 展开交换 | 最终包前真实物料服务资产接收物种需具体核实流身份属性单位。候选语义卡或Count支持不确立真实流UUID。 | 真实详情支持及前景数量证据 |

| requirement_id | applies_to | requirement | evidence |
| --- | --- | --- | --- |
| electricity | sheet_wholesale | 本条是强制完成记录，不是虚构清单交换。须按`cp_utilities`识别`electricity`内每项实际inputs/product物料、服务、资产全寿命职责、废物流或物种来源介质，并在最终数据集使用前分别展开为实物或化学身份明确、具原生数量和覆盖责任方的单独卡片。发生、身份或数量缺失仍待采集并阻断完成，不能填零或删项。原有全部范围、证据、数量范围、库存去向、换算及供应接收职责均保留在下方完整采集定义。 | `cp_utilities`; 实际来源关联原生记录 |
| hygiene_water | sheet_wholesale | 本条是强制完成记录，不是虚构清单交换。须按`cp_utilities`识别`hygiene_water`内每项实际inputs/product物料、服务、资产全寿命职责、废物流或物种来源介质，并在最终数据集使用前分别展开为实物或化学身份明确、具原生数量和覆盖责任方的单独卡片。发生、身份或数量缺失仍待采集并阻断完成，不能填零或删项。原有全部范围、证据、数量范围、库存去向、换算及供应接收职责均保留在下方完整采集定义。 | `cp_utilities`; 实际来源关联原生记录 |
| hygiene_materials | sheet_wholesale | 本条是强制完成记录，不是虚构清单交换。须按`cp_supplies`识别`hygiene_materials`内每项实际inputs/product物料、服务、资产全寿命职责、废物流或物种来源介质，并在最终数据集使用前分别展开为实物或化学身份明确、具原生数量和覆盖责任方的单独卡片。发生、身份或数量缺失仍待采集并阻断完成，不能填零或删项。原有全部范围、证据、数量范围、库存去向、换算及供应接收职责均保留在下方完整采集定义。 | `cp_supplies`; 实际来源关联原生记录 |
| added_outer_protection | sheet_wholesale | 本条是强制完成记录，不是虚构清单交换。须按`cp_supplies`识别`added_outer_protection`内每项实际inputs/product物料、服务、资产全寿命职责、废物流或物种来源介质，并在最终数据集使用前分别展开为实物或化学身份明确、具原生数量和覆盖责任方的单独卡片。发生、身份或数量缺失仍待采集并阻断完成，不能填零或删项。原有全部范围、证据、数量范围、库存去向、换算及供应接收职责均保留在下方完整采集定义。 | `cp_supplies`; 实际来源关联原生记录 |
| provider_packages | sheet_wholesale | 本条是强制完成记录，不是虚构清单交换。须按`cp_provider`识别`provider_packages`内每项实际inputs/product物料、服务、资产全寿命职责、废物流或物种来源介质，并在最终数据集使用前分别展开为实物或化学身份明确、具原生数量和覆盖责任方的单独卡片。发生、身份或数量缺失仍待采集并阻断完成，不能填零或删项。原有全部范围、证据、数量范围、库存去向、换算及供应接收职责均保留在下方完整采集定义。 | `cp_provider`; 实际来源关联原生记录 |
| shared_assets | sheet_wholesale | 本条是强制完成记录，不是虚构清单交换。须按`cp_assets`识别`shared_assets`内每项实际inputs/product物料、服务、资产全寿命职责、废物流或物种来源介质，并在最终数据集使用前分别展开为实物或化学身份明确、具原生数量和覆盖责任方的单独卡片。发生、身份或数量缺失仍待采集并阻断完成，不能填零或删项。原有全部范围、证据、数量范围、库存去向、换算及供应接收职责均保留在下方完整采集定义。 | `cp_assets`; 实际来源关联原生记录 |
| freight | sheet_wholesale | 本条是强制完成记录，不是虚构清单交换。须按`cp_freight`识别`freight`内每项实际inputs/product物料、服务、资产全寿命职责、废物流或物种来源介质，并在最终数据集使用前分别展开为实物或化学身份明确、具原生数量和覆盖责任方的单独卡片。发生、身份或数量缺失仍待采集并阻断完成，不能填零或删项。原有全部范围、证据、数量范围、库存去向、换算及供应接收职责均保留在下方完整采集定义。 | `cp_freight`; 实际来源关联原生记录 |
| unused_count_returns | sheet_wholesale | 本条是强制完成记录，不是虚构清单交换。须按`cp_supplies`识别`unused_count_returns`内每项实际outputs/product物料、服务、资产全寿命职责、废物流或物种来源介质，并在最终数据集使用前分别展开为实物或化学身份明确、具原生数量和覆盖责任方的单独卡片。发生、身份或数量缺失仍待采集并阻断完成，不能填零或删项。原有全部范围、证据、数量范围、库存去向、换算及供应接收职责均保留在下方完整采集定义。 | `cp_supplies`; 实际来源关联原生记录 |
| unused_mass_returns | sheet_wholesale | 本条是强制完成记录，不是虚构清单交换。须按`cp_supplies`识别`unused_mass_returns`内每项实际outputs/product物料、服务、资产全寿命职责、废物流或物种来源介质，并在最终数据集使用前分别展开为实物或化学身份明确、具原生数量和覆盖责任方的单独卡片。发生、身份或数量缺失仍待采集并阻断完成，不能填零或删项。原有全部范围、证据、数量范围、库存去向、换算及供应接收职责均保留在下方完整采集定义。 | `cp_supplies`; 实际来源关联原生记录 |
| intact_sheet_waste | sheet_wholesale | 本条是强制完成记录，不是虚构清单交换。须按`cp_outlets`识别`intact_sheet_waste`内每项实际outputs/waste物料、服务、资产全寿命职责、废物流或物种来源介质，并在最终数据集使用前分别展开为实物或化学身份明确、具原生数量和覆盖责任方的单独卡片。发生、身份或数量缺失仍待采集并阻断完成，不能填零或删项。`intact_sheet_waste_atomic_case`只覆盖自身独占实物状态，其他实际去向仍须完成。原有全部范围、证据、数量范围、库存去向、换算及供应接收职责均保留在下方完整采集定义。 | `cp_outlets`; 实际来源关联原生记录 |
| fragment_waste | sheet_wholesale | 本条是强制完成记录，不是虚构清单交换。须按`cp_outlets`识别`fragment_waste`内每项实际outputs/waste物料、服务、资产全寿命职责、废物流或物种来源介质，并在最终数据集使用前分别展开为实物或化学身份明确、具原生数量和覆盖责任方的单独卡片。发生、身份或数量缺失仍待采集并阻断完成，不能填零或删项。`fragment_waste_atomic_case`只覆盖自身独占实物状态，其他实际去向仍须完成。原有全部范围、证据、数量范围、库存去向、换算及供应接收职责均保留在下方完整采集定义。 | `cp_outlets`; 实际来源关联原生记录 |
| packing_waste | sheet_wholesale | 本条是强制完成记录，不是虚构清单交换。须按`cp_outlets`识别`packing_waste`内每项实际outputs/waste物料、服务、资产全寿命职责、废物流或物种来源介质，并在最终数据集使用前分别展开为实物或化学身份明确、具原生数量和覆盖责任方的单独卡片。发生、身份或数量缺失仍待采集并阻断完成，不能填零或删项。原有全部范围、证据、数量范围、库存去向、换算及供应接收职责均保留在下方完整采集定义。 | `cp_outlets`; 实际来源关联原生记录 |
| hygiene_waste | sheet_wholesale | 本条是强制完成记录，不是虚构清单交换。须按`cp_outlets`识别`hygiene_waste`内每项实际outputs/waste物料、服务、资产全寿命职责、废物流或物种来源介质，并在最终数据集使用前分别展开为实物或化学身份明确、具原生数量和覆盖责任方的单独卡片。发生、身份或数量缺失仍待采集并阻断完成，不能填零或删项。原有全部范围、证据、数量范围、库存去向、换算及供应接收职责均保留在下方完整采集定义。 | `cp_outlets`; 实际来源关联原生记录 |
| contained_liquid | sheet_wholesale | 本条是强制完成记录，不是虚构清单交换。须按`cp_outlets`识别`contained_liquid`内每项实际outputs/waste物料、服务、资产全寿命职责、废物流或物种来源介质，并在最终数据集使用前分别展开为实物或化学身份明确、具原生数量和覆盖责任方的单独卡片。发生、身份或数量缺失仍待采集并阻断完成，不能填零或删项。原有全部范围、证据、数量范围、库存去向、换算及供应接收职责均保留在下方完整采集定义。 | `cp_outlets`; 实际来源关联原生记录 |
| direct_species | sheet_wholesale | 本条是强制完成记录，不是虚构清单交换。须按`cp_environment`识别`direct_species`内每项实际outputs/elementary物料、服务、资产全寿命职责、废物流或物种来源介质，并在最终数据集使用前分别展开为实物或化学身份明确、具原生数量和覆盖责任方的单独卡片。发生、身份或数量缺失仍待采集并阻断完成，不能填零或删项。原有全部范围、证据、数量范围、库存去向、换算及供应接收职责均保留在下方完整采集定义。 | `cp_environment`; 实际来源关联原生记录 |


### 强制清单完成记录

以下为强制采集和展开定义，不是交换，也不是填零占位符。正文引用的集合或余项编号对应这些完成要求。最终前景数据集完成前，每个实际情形都须成为具自身证据的原子交换；第6节条件卡不预设发生。独立投入、资产全寿命、互斥供应运输结果、实际废物接收流及每个实际基本流物种介质均须保留，不能因未分配通用UUID而静默漏掉。独占实际情形须与原生总量协调，组分视图不可重复相加。

#### electricity

采用实际仓库照明电动搬运计量或有据因果分配。供应商熔化浮法退火切割电力属于商品上游，不是当前服务。不假设磨抛玻璃洗涤或专用气候干预。

本卡为独立身份分支`electricity_ac`之外的余项清单要求。已计入分支的实际数量不再计入本未解析完成要求，原类目总量仅作不可相加的协调审计。其他实际材料、状态、来源或介质仍须保留自身经核实的身份、原生数量及供应接收责任；记录缺失时，不推定条件分支发生、不发生或数量为零。

- 身份采集要求：实际仓储与电动玻璃搬运用电
- 流属性/单位：Energy / kWh
- 数量规则：native_interval_quantity*service_driver_share/N
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_utilities`

数量范围证据需求：需有实际计量区间、全部用户物理驱动及交付电力来源属性支持；不采用每片或每平方米用电默认。

#### hygiene_water

仅含实际供给批发仓库卫生或事故围控的水，不是原片洗涤去渍、片间积水或自动环境取水。需明确实际表计水源承包边界。

本卡为独立身份分支`hygiene_water_liquid_tap`之外的余项清单要求。已计入分支的实际数量不再计入本未解析完成要求，原类目总量仅作不可相加的协调审计。其他实际材料、状态、来源或介质仍须保留自身经核实的身份、原生数量及供应接收责任；记录缺失时，不推定条件分支发生、不发生或数量为零。

- 身份采集要求：实际仓库表面卫生用水
- 流属性/单位：Volume / m3
- 数量规则：actual_utility_quantity*service_driver_share/N
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_utilities`

数量范围证据需求：需有原生公用水体积或有据密度换算、真实卫生区间及全部用户份额；不推定玻璃清洗或冷凝体积系数。

#### hygiene_materials

仅展开实际仓库清洁剂擦拭物吸附物过滤物SKU和库存。不规定玻璃抛光剂蚀刻剂溶剂干燥剂或剂量。供应商原有隔片间距材料粉末包装属于商品，不是新耗用输入。

本卡为独立身份分支`hygiene_materials_synthetic_detergent`之外的余项清单要求。已计入分支的实际数量不再计入本未解析完成要求，原类目总量仅作不可相加的协调审计。其他实际材料、状态、来源或介质仍须保留自身经核实的身份、原生数量及供应接收责任；记录缺失时，不推定条件分支发生、不发生或数量为零。

- 身份采集要求：实际仓库卫生与围控物料
- 流属性/单位：Mass / kg
- 数量规则：selected_supply_input/N
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_supplies`

数量范围证据需求：每种实际使用物料需有配方SKU、数量范围库存配对未用退回及原生组成换算来源。

#### added_outer_protection

仅含跨入服务边界的真实新外部运输护件封口物或防护。区分原厂隔片箱和循环架与新供给。不规定开包重隔片或玻璃处理。

- 身份采集要求：实际新增外部运输防护
- 流属性/单位：Count / Item(s)
- 数量规则：selected_supply_input/N
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_supplies`

数量范围证据需求：需有真实新增外物单位材质单件质量单件总量范围和责任；不假设每片隔块纸面积包装单位。

#### provider_packages

采用真实原生物理服务单位、完整搬运资源资产承运处理边界及有据份额，费用不计量服务。供应或外包切割磨边洗涤去渍镀膜安装真实发生时需另审路线。

- 身份采集要求：实际互斥玻璃仓储承包服务包
- 流属性/单位：Count / Item(s)
- 数量规则：actual_native_package_quantity*documented_share/N
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_provider`

数量范围证据需求：需有服务方物理等价、实际驱动分子分母及资源责任覆盖；不固定通用玻璃加工包或货币代理。

#### shared_assets

实际建筑架具起吊电动搬运设备循环运输架秤监测器按完整制造维护更换退役寿命终结分配全部用户期间。供应商所有循环支撑保持唯一责任边界，不每次移动新购架。

- 身份采集要求：仓库货架搬运资产的完整寿命服务
- 流属性/单位：Count / Item(s)
- 数量规则：job_driver/lifetime_all_user_driver/N
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_assets`

数量范围证据需求：需有匹配完整资产生命周期、原生工作寿命驱动、全部用户已观测历史及有来源剩余服务不确定性；不统一规定架寿命或每周转资产数。

#### freight

采用真实随货原片隔片包装架支撑载荷和实际分配承运段。货载毛量保留真实随货支撑，只扣车辆集装箱非货物秤票皮重。EACH相容载荷仅乘一次实际数量，TOTAL保持总量；原生工作量份额N及空返责任分别处理。

- 身份采集要求：原包装或架装浮法原片的实际运输
- 流属性/单位：Freight transport / t*km
- 数量规则：actual_transport_work*documented_service_share/N
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_freight`

数量范围证据需求：需有真实货载支撑隔片包装及非货物皮重边界、单件总量范围计数来源、路程换算物理份额空返覆盖；净玻璃不是完整货载。

#### unused_count_returns

仅含同一独立新增供给库存实际外送的可用未用单位。保留回收期末库存不是外送。供应商商品隔片架具退回在非交换商品支撑台账及资产责任中记录，不自动抵扣当前新材料。配对仅耗用输入时省去此输出。

- 身份采集要求：实际配对未用新增外防护外送退回
- 流属性/单位：Count / Item(s)
- 数量规则：actual_matched_unused_outward_units/N
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_supplies`

数量范围证据需求：需有真实原供给身份单位状态同源库存接收配对；不可默认供应商退箱架或完好玻璃是未用当前包装。

#### unused_mass_returns

同一独立负担库存中真实外送的可用未用仓库物料，保留原生净量。总输入保留配对输出；仅耗用输入扣配对量且省输出。不作第二次或默认避免生产抵扣。

- 身份采集要求：实际配对未用卫生物料外送退回
- 流属性/单位：Mass / kg
- 数量规则：actual_matched_unused_outward_mass/N
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_supplies`

数量范围证据需求：需有实际物料状态净量单位、必要时密度及同源供给外送接收配对；原玻璃隔片组分不可冲减无关新材料。

#### intact_sheet_waste

仅含接收方真实接收废弃的可识别原片，记录实际破损污渍状态，仅在真实共同转移时包含包装。商业拒收退货或观察污渍不是处置；记录原片谱系及实际原生净量，不由缺失质量推整片。

- 身份采集要求：实际废弃的可识别原片流
- 流属性/单位：Mass / kg
- 数量规则：actual_compatible_outlet_net_quantity/N
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_outlets`

数量范围证据需求：需有实际来源原片ID、状态数量边界、所含包装和接收分类处理；不推定整片拒收或循环率。

#### fragment_waste

实际收集独立转移的碎片细料关联原片片垛及接收分类。不假设批发切割研磨。不重复整片或混合卫生流已含碎片，不把所有碎片称为碎玻璃回收或空气二氧化硅。

- 身份采集要求：实际独立转移的玻璃碎片流
- 流属性/单位：Mass / kg
- 数量规则：actual_compatible_outlet_net_quantity/N
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_outlets`

数量范围证据需求：需有原片父关联、实际收集净质量范围组成状态接收去向；碎片数不确立原片数面积或大气物种。

#### packing_waste

实际分离纸隔片薄膜木材护件，区分原厂包装新材料与保留循环支撑。实际污染保留玻璃含于实测整流，不另计；排除与玻璃或混合清理共同转移包装。

本卡为独立身份分支`packing_waste_paper_pack`; `packing_waste_metal_pack`; `packing_waste_plastic_pack`之外的余项清单要求。已计入分支的实际数量不再计入本未解析完成要求，原类目总量仅作不可相加的协调审计。其他实际材料、状态、来源或介质仍须保留自身经核实的身份、原生数量及供应接收责任；记录缺失时，不推定条件分支发生、不发生或数量为零。

- 身份采集要求：实际独立转移的隔片包装废物
- 流属性/单位：Mass / kg
- 数量规则：actual_compatible_outlet_net_quantity/N
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_outlets`

数量范围证据需求：需有真实独立材质状态原生净量范围、保留液玻璃及接收来源责任；原包装不是转售时再次购入。

#### hygiene_waste

实际已用擦拭吸附过滤物或混合事故围控按整流记录，含保留液玻璃。原生购入干物、使用后湿整流和保留组分是不可重复相加视图；不表示日常玻璃清洗酸溶剂去渍。

- 身份采集要求：实际使用后的仓库卫生围控固体
- 流属性/单位：Mass / kg
- 数量规则：actual_compatible_outlet_net_quantity/N
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_outlets`

数量范围证据需求：需有实际已用净湿计量及保留水分液组分的单位基准方法来源取样时刻和接收证据；供给物料本身不证明已用废物。

#### contained_liquid

仅含送至真实接收处理边界的实际仓库卫生事故收集液，不是自动玻璃洗涤废水或径流。观察冷凝不提供此数量或释放物种；量化保留玻璃溶质需真实相容来源去向证据。

- 身份采集要求：实际收集的仓库卫生液体
- 流属性/单位：Volume / m3
- 数量规则：actual_compatible_outlet_net_quantity/N
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_outlets`

数量范围证据需求：需有真实收集体积或相容质量密度温度换算、物流组成负荷及接收处理；不假设取水等于出水或污渍等于溶解物种。

#### direct_species

仅展开独立识别的物种颗粒介质，采用实际测量或适用活动系数组成去向证据。破损污渍、玻璃组成SDS或未解释库存差不确立空气二氧化硅碱性排水金属溶剂排放。捕集收集仍是物理转移。

- 身份采集要求：实际已识别物种或颗粒的直接释放
- 流属性/单位：Mass / kg
- 数量规则：actual_measured_species_quantity/N OR actual_activity*applicable_factor*required_composition*required_release_fraction/N
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_environment`

数量范围证据需求：需有真实物种介质取样或适用原生系数活动组成去向换算来源；完整释放系数已含组成去向时不可再乘，不采用通用玻璃粉尘系数。

## 9. 验证规则

| rule_id | Rule | source_ids |
| --- | --- | --- |
| reference_gate_check | 实际批发商所有权转售与企业买方身份、验收门槛来源撤销记录核实撤销后N，供应收货本身不足。实际参考名链接Count量及真实最终买方验收唯一N须与来源原片几何等级包装状态期间限定一致。 |  |
| source_gate_check | 需真实完整原成品未镀膜退火供给尺寸门槛，实际缺阶段服务外一次，以及原生直接映射或完整正分母全部终端出口含期末其他可用退回真实损失、责任等价来源覆盖。不可仅原硅砂或最终质量加废物替代。  每项关联原门槛需求或损失量须记录assignment_scope_ids、quantity_basis（raw_target_cohort或per_reference）、same_target_scope_N及来源。真实外部库存阶段损失集成使用原始实体量一次。仅与1 Item(s)服务组合时派生q_per_reference=q_raw_of_that_same_scope/正数same_target_scope_N；已归一量不再除，单货批原始范围N=1，N=0无归一值。 |  |
| scope_check | 无隐含批发切割磨边研磨抛光钢化夹层镀膜玻璃洗涤去渍安装气候干预，外包同样。原间距环境记录本身不确立主动保存。 |  |
| state_stream_check | 破损污渍未知库存差不是损失废弃回收物种或零。真实原片至碎片谱系、接收分类、整流组分隔片包装清理液互斥及物种介质去向均需证据。 |  |
| resource_extent_check | 核对原生几何密度实测区别、EACH/TOTAL计数，实际货载保留随货包装支撑仅扣非货物皮重，同基准物理份额/N一次。全部用户完整资产已观测有来源剩余寿命终结不确定性、总供给加配对输出或仅耗用省输出符合唯一责任矩阵。 |  |
| actual_binding_check | 最终交换需真实数量换算来源及核实具体身份属性单位。披露候选未定身份数量范围；检查通过不表示可发布或完整链就绪。 |  |


## 10. 发布数据集画像

| Field | Value |
| --- | --- |
| dataset_role | 真实验收原供应商未镀膜退火浮法原片自营货批的附加服务前景。 |
| downstream_use | 互斥服务与匹配原成品供给原片商品系统及量化原需求损失在服务外仅组合一次。 |
| allowed_use | 真实声明供应商原片等级几何未镀膜退火包装架状态常温批发路线及原生资源接收记录。 |
| excluded_use | 独立完整玻璃足迹、原生产或加工安装玻璃、批发化学去渍洗涤加工气候干预、零售收费代理。 |
| required_metadata | 真实原供应门槛原片垛包装架ID几何计数面积净量密度基准隔片皮重状态环境存放验收时刻场址期间、原生原需求全部终端出口责任覆盖和服务资源资产承运处理范围。 |
| required_quality_disclosure | 真实身份支持数量范围未定，实测与几何推算质量密度不确定性、原片碎片谱系库存未知、分配资产剩余来源及单件总量货载皮重换算证据。 |
| update_trigger | 真实原片状态等级尺寸来源门槛、批发操作气候服务资产接收物种变化、修订几何密度分配损失来源或核实具体身份。 |


## 11. 数据来源

| source_id | type | reference | used_for |
| --- | --- | --- | --- |
| pilkington-ats104 | handbook | Pilkington North America ATS-104，Protecting Flat Glass Surfaces，2013-01-14。 https://www.pilkington.com/-/media/pilkington/site-content/usa/window-manufacturers/technical-bulletins/ats104protectingflatglasssurfaces20130114.pdf | 仅支持实际水分擦伤间距存放状态定性核查，不作统一湿度时长、清洗去渍配方化学诊断释放量或强度寿命承诺。 |
| pilkington-float | literature | Pilkington Optifloat Clear，英国厂家产品页。 https://www.pilkington.com/en-GB/united-kingdom/architectural-and-technical-glass/product-categories/thermal-insulation/pilkington-optifloat-clear | 仅定性支持浮法成品与后续钢化夹层镀膜区别；真实未镀膜退火供应状态另证。无尺寸密度性能合规回收默认。 |
