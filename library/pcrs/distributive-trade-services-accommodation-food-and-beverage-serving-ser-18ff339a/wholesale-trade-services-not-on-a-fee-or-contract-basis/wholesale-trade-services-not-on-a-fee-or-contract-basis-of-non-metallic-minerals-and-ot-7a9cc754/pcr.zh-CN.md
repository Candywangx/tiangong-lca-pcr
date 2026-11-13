---
pcr_id: pcr.distributive-trade-services-accommodation-food-and-beverage-serving-ser-18ff339a.wholesale-trade-services-not-on-a-fee-or-contract-basis.wholesale-trade-services-not-on-a-fee-or-contract-basis-of-non-metallic-minerals-and-ot-7a9cc754
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 原袋装已洗选分级天然石英砂自营批发服务

## 1. 范围与适用性

本PCR覆盖供方已完成洗选分级、按实际水分呈现状态以原封袋收到的天然石英硅砂，一次真实完成的自营企业间批发批次。识别实际款批等级、天然石英与其他矿相、已完成洗选分级及供方实际有做的干燥、袋包装封闭和净湿砂毛包皮重。包括普通常温收货记录袋况检查持有电动搬运；场址通风清理仅实际运行才含。厂家准备非商家技术。不含商家洗砂筛分干燥涂覆研磨混合开袋重装新化验铸造砂再生或客户使用。散装硅微粉方石英煅烧树脂涂覆混配及改变呈现须另复核，不合并供方产品组合选项。来源仅支持定性路线问题，非统一纯度颗粒比例袋量密度持有损失或现行法律医疗意见。[sibelco-silica; holcim-silica-sds-2024]

## 2. 产品类别识别

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.distributive-trade-services-accommodation-food-and-beverage-serving-ser-18ff339a.wholesale-trade-services-not-on-a-fee-or-contract-basis.wholesale-trade-services-not-on-a-fee-or-contract-basis-of-non-metallic-minerals-and-ot-7a9cc754 |
| classification_refs | CPC 3.0:61099较窄；实际商品15310天然砂属153 |
| covered_products | 实际原封袋已洗选分级天然石英砂在最终企业买方接收门槛的批发服务 |
| excluded_products | 散装微粉方石英煅烧涂覆混配产品、商家加工重装使用、收费代理零售独立矿物处理 |
| representative_product | 实际款批天然石英洗选等级供方是否干燥证据原封袋样品定义水分析粒级净皮重状态 |
| production_route | 供方完成开采洗选分级实际有做才含干燥填装原包放行→自营收货常温持有电动搬运→扣撤销最终企业接收 |
| market_state | 已完成商业服务；原砂水袋作为非交换商品流经库存审计，非服务消耗投入 |


## 3. 参考流

| Field | Value |
| --- | --- |
| what | 实际向企业买方完成自有购入转售原封袋供方完成洗选分级天然石英砂批次 |
| how_much | 1 Item(s) |
| how_well | 实际商家所有转售买方最终门槛凭据撤销、款批等级矿物身份原袋封闭净皮重水样及分析粒级基准；无默认纯度筛目袋重 |
| how_long_or_cycle | 实际供方放行收货持有发货最终接收撤销时间时区来源及库存计量完整资产期间；配对结转保留原来源身份，非新N需求 |
| reference_flow_link | `accepted_service` |

| Field | Value |
| --- | --- |
| reference_amount | 1 |
| reference_product_flow | 原袋装已洗选分级天然石英砂已完成自营批发批次 |
| reference_flow_property | Count `01846770-4cfe-4a25-8ad9-919d8d378345` |
| reference_unit_group | Count `5beb6eed-33a9-47b8-9ede-1dfe8f679159` |
| reference_unit | Item(s) |
| required_qualifiers | merchant_id; ownership_purchase_resale_evidence; business_buyer_id; acceptance_gate; acceptance_source; acceptance_reversal_ids; supplier; actual_SKU; actual_grade; source_lot; bag_ids; natural_quartz_evidence; supplier_wash_grade_evidence; supplier_dry_actual_or_not; original_closed_bag_evidence; original_presentation_state; net_as_received_sand_mass; bag_pack_tare; sample_component_scope; water_wet_or_dry_basis; oxide_normalized_or_absolute_basis; composition_sum_basis; particle_class_definition; density_temperature_unit; receipt_time; dispatch_time; acceptance_time; period_id; time_zone |


## 4. 计量与单位规则

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| final_count | accepted_service | Count | Item(s) | 扣撤销唯一最终自有购销企业批次N>0；非袋数或kg砂 |
| native_mass | all Mass cards | Mass | kg | 实际同状态净毛皮重EACH/TOTAL换算，组成整件成员互斥 |
| water_utility | site_water; site_water_liquid_tap | Volume | m3 | 实际供水体积或实际密度温度相容质量换算，非继承袋水分 |
| electricity_unit | electricity; electricity_ac | Energy | kWh | 实际送达场址电力；无燃料特定热值系数替代或供方干加工系数 经核实的电力流可按独立确认的电能基准及单位组使用ILCD名为净热值的参考属性；该属性名称不授权套用燃料热值系数。 |
| freight_work | freight | Mass*Length | t*km | 实际整包货物及原生区段距离换算，各份额在唯一SUM/N内 |


## 5. 系统边界

### 边界概化

| Field | Value |
| --- | --- |
| declared_starting_condition | 实际天然石英砂供方完成开采洗选分级及有做才含供方干燥、原填装封袋，声明真实水分呈现包装状态 |
| starting_condition_role | 批发服务附加层收到完整包装商品门槛，非原采场砂或当前商家矿物加工 |
| product_classification_scope | CPC 3.0:61099较窄批发服务；实际天然砂15310。硅产品组合化学身份不构成共同款门槛 |
| recursive_input_rule | 购销砂保留水原袋包装留非交换商品库存流经；不递归投入另一批发服务或以原石英代完整商品 |
| upstream_dataset_requirement | 关联实际完整开采洗选分级实际有做的供方干燥原袋填装包装放行门槛，非仅原采场砂。全部交易商品上游含原生产损失量均在此服务外，以相容原状态量化阶段损失责任基线覆盖。实际缺失供方门槛阶段或新增原砂需求，在完整链使用前必须在本服务外实际集成且仅一次，须已完成状态、数据集关联、时间时区、来源、互斥责任、已集成原生量及匹配阶段损失覆盖和唯一计入证据；待办计划或仅记数量不足。 |
| disclosure | 声明实际供方路线水分等级矿相分析粒级基准原包毛净所有买方门槛时间；原来源分配结转全部末端基线新增损失已完成集成、服务商资产运输接收责任及未明证据 |

### 边界规则

| rule_id | Rule |
| --- | --- |
| actual_route | 仅声明收货常温持有搬运及实际有条件场址通风卫生事件换班。承包的排除加工仍排除；实际额外作业须路线扩展复核。不普遍规定开袋新化验。[sibelco-silica; holcim-silica-sds-2024] |
| merchandise_outside | 原砂水包装非服务消耗；来源阶段损失需求外部一次，实际服务搬运接收处理内部一次；完整采场到封包门槛匹配收到状态 |
| analysis_and_fates | 水湿干归一化氧化物XRF矿相粒级堆积真实密度为独立原生证据。库存差溢砂产品细粒石英比例非自动损失废物直接物种零。保留整件部件捕集液体环境交换互斥 |
| periods_rejects | 明确实际收到持有最终接收撤销来源资产接收期间；未完成拒收撤销量保留真实归属。最终有效N排未明拒收；真实退回期末有用出口丢弃来源关联，无自动回收抵扣 |
| owners | 各直接服务商承运接收材料公用资产处理事件唯一责任。完整寿命仓库搬运通风支承覆盖全部消费者，非每袋新托盘；原袋制造留商品 |


## 6. 过程清单结构

### 过程图

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| original_bagged_quartz_sand_wholesale | 原封袋天然石英砂自营批发 | required | 实际原供方完成封袋砂自有企业购销最终接收 | foreground | accepted_service |

实际收货持有搬运场址卫生及有条件通风事件换班关联原批袋群期间时区责任。拒收退回期末丢弃路径保留资源归属；不推当前砂加工生产。

### 过程：原封袋天然石英砂自营批发 (`original_bagged_quartz_sand_wholesale`)

#### 输入

##### 产品流

###### 实际使用点交流电 (`electricity_ac`)

仅适用于实际跨越本节点边界、且未由完整供应商数据覆盖的交流电。该身份未特指供应方、电压、发电组合或交付线损归属，仍须按要求采集。经核实的电力流以1 MJ电能为基准，其ILCD属性名称为净热值；原生kWh按精确的3.6 MJ/kWh换算，不能套用燃料热值系数。直流电或其他不匹配电力状态保留在余项要求中。

- 选定流：交流电 `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- 流属性/单位：Energy / kWh
- 数量规则：实际相容计量电力*documented_share/N
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_utilities`

范围证据需求：须实际区间kWh、计量供方边界、全使用者原生份额最终N才能建场址分布；无统一每袋电耗或石英加工基准。

###### 实际液态处理自来水供给 (`site_water_liquid_tap`)

仅在实际来源确为处理后的自来水且用于所声明用途时适用。保留实际供应方、水质、温度状态和供应边界，不假定所有供水都是自来水。冰、瓶装矿泉水、再生水、未经处理的水及环境直接取水保留各自实际身份。沿用原卡原生质量或体积基准；最终换算为质量参考量时须有实际相容密度和状态证据，不能把目录中的次要体积关系作为默认现场密度。

- 选定流：自来水 `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- 流属性/单位：Volume / m3
- 数量规则：实际供水*documented_share/N并作有据原生换算
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_utilities`

范围证据需求：须净计量水量体积或实际密度温度相容质量换算、清理事件份额；无供方洗水或统一每吨水量。

###### 实际独立记录的合成洗涤剂投入 (`service_consumables_synthetic_detergent`)

仅适用于产品配方、供应状态及用途记录确认的实际合成表面活性洗涤剂。记录扣除包装皮重的材料净量，区分浓缩液与稀释水，整体配方与组分不得相加重复计入。肥皂、消毒剂、抹布、滤材等仍按各自实际身份记录，不预设清洁配方、剂量或发生。

- 选定流：洗涤剂 `1c57d123-df57-49ab-b9d4-957403beb8a5`
- 流属性/单位：Mass / kg
- 数量规则：实际净S*documented_share/N或仅耗用配对退回口径
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_supplies`

范围证据需求：各实际材料分别须真实款组成净收货期初末回收未耗退回EACH/TOTAL密度单件换算；无统一吸收滤材耗率。

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 原袋装已洗选分级天然石英砂已完成自营批发批次 (`accepted_service`)

实际企业买方最终门槛扣除撤销后商业接收的一批，具有真实自有购入转售及供方完成原封袋天然石英批次。非一袋一kg砂氧化物化验或发票行。

- 选定流：原袋装已洗选分级天然石英砂已完成自营批发批次
- 流属性/单位：Count / Item(s)
- 数量规则：1 Item(s)
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_sand`

范围证据需求：须真实商家买方门槛凭据撤销标识、实际款批次洗选分级供方是否干燥袋净砂状态、样品水及分析颗粒类别定义期间记录才建有效N；无每批默认袋数吨数。

###### 退回供应方的未使用合成洗涤剂 (`unused_supply_return_detergent_return`)

仅覆盖本过程有独立实际证据的“退回供应方的未使用合成洗涤剂”。记录自身物态、净量 kg、事件来源及交接门。其他状态或接收方需在`unused_supply_return`下独立确定身份，本卡不能替代；记录缺失不证明发生或为零。 将未使用材料的配方、供应状态和原生质量严格匹配到投入`service_consumables_synthetic_detergent`。本卡为可用对外退料，不是废物、期末库存或内部循环。仅在总量供应口径下列此输出；投入已扣除该退料时必须省略对应退料输出，不自动抵扣避免生产。

- 选定流：洗涤剂 `1c57d123-df57-49ab-b9d4-957403beb8a5`
- 流属性/单位：Mass / kg
- 数量规则：`unused_supply_return_detergent_return`实际独占归属的 kg / 验收 N，仅归一化一次；已按参考流给出的数量不得再次除以 N。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_outlets`

范围证据要求：需事件关联的原生 kg、状态组成、接收或供应门、归属记录及整件组分或对应投入的排他关联，使用协议`cp_outlets`。不提供默认数值或换算因子；其他原生单位须有换算证据后使用。

##### 废物流

###### 废弃装有水洗分级天然石英砂的原袋整件 (`whole_bag_waste_atomic_case`)

仅在实际独立记录确认“废弃装有水洗分级天然石英砂的原袋整件”时适用。本卡只覆盖该命名实物状态及自身实际净量、保留组成和接收门。其他部件、碎片、游离液、独立包装及清理载体仍属于`whole_bag_waste`中的身份核实事项；不得移动边界、预设事件、将库存差当废弃，或把仍保留在整体流内的组分另算出口。实际混收流须匹配自身准确身份。原有原生单位数量协议只用于本独占具体情形，其他实际去向分别协调。

- 选定流：废弃装有水洗分级天然石英砂的原袋整件
- 流属性/单位：Mass / kg
- 数量规则：实际相容废整袋转移量/N
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_outlets`

范围证据需求：须实际丢弃决定父批袋整净毛皮重保留组成覆盖接收运输处理；无统一拒收百分比或湿袋自动丢弃。

###### 废弃散装水洗分级天然石英砂 (`separate_sand_waste_atomic_case`)

仅在实际独立记录确认“废弃散装水洗分级天然石英砂”时适用。本卡只覆盖该命名实物状态及自身实际净量、保留组成和接收门。其他部件、碎片、游离液、独立包装及清理载体仍属于`separate_sand_waste`中的身份核实事项；不得移动边界、预设事件、将库存差当废弃，或把仍保留在整体流内的组分另算出口。实际混收流须匹配自身准确身份。原有原生单位数量协议只用于本独占具体情形，其他实际去向分别协调。

- 选定流：废弃散装水洗分级天然石英砂
- 流属性/单位：Mass / kg
- 数量规则：实际互斥松散废砂细粒量/N
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_outlets`

范围证据需求：须实际事件父批原生湿干样品组成量接收分类处理；产品粒径比例库存亏差非丢弃量或可吸入释放。

###### 实际单独收集的纸类包装废物 (`pack_waste_paper_pack`)

仅适用于本节点实际独立废弃、单独收集的纸类包装，保留实际湿态或收集状态、组成、接收方及处理运输责任。污染或混收形成的混合流须使用其自身经核实的身份，材料组分仅作不可相加审计。仍在用的周转包装不是本废物，不预设组成、数量、回收或处理。

- 选定流：包装废弃物，纸类 `6b6f1025-cb6a-4c9d-9947-7726c4307a76`
- 流属性/单位：Mass / kg
- 数量规则：实际独立包装含有据残留量/N
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_outlets`

范围证据需求：须真实包装组成皮重残留原生量原新增覆盖接收；不以标签量当净砂或假定清洁回收抵扣。


###### 实际单独收集的金属包装废物 (`pack_waste_metal_pack`)

仅适用于本节点实际独立废弃、单独收集的金属包装，保留实际湿态或收集状态、组成、接收方及处理运输责任。污染或混收形成的混合流须使用其自身经核实的身份，材料组分仅作不可相加审计。仍在用的周转包装不是本废物，不预设组成、数量、回收或处理。

- 选定流：金属包装废物 `cdda6013-c0c5-4c72-990a-f5668fe71069`
- 流属性/单位：Mass / kg
- 数量规则：实际独立包装含有据残留量/N
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_outlets`

范围证据需求：须真实包装组成皮重残留原生量原新增覆盖接收；不以标签量当净砂或假定清洁回收抵扣。


###### 实际单独收集的塑料包装废物 (`pack_waste_plastic_pack`)

仅适用于实际独立废弃、单独收集的空塑料包装，保留实际组成、含水状态及接收方。含残留商品的混合包装、污染混合流、设备内保温泡沫、一次性抹布及复合包装不使用本分支；整体混合流中的组分仅作不可相加审计，运输处理责任计入一次。不预设排空、回收、发生或数量。

- 选定流：塑料包装废物 `919351c4-3e25-4092-9934-73ecec021a3b`
- 流属性/单位：Mass / kg
- 数量规则：实际独立包装含有据残留量/N
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_outlets`

范围证据需求：须真实包装组成皮重残留原生量原新增覆盖接收；不以标签量当净砂或假定清洁回收抵扣。

###### 收集的水洗天然石英砂细料，封闭固体 (`separate_sand_waste_quartz_sand_fines`)

仅覆盖本过程有独立实际证据的“收集的水洗天然石英砂细料，封闭固体”。记录自身物态、净量 kg、事件来源及交接门。其他状态或接收方需在`separate_sand_waste`下独立确定身份，本卡不能替代；记录缺失不证明发生或为零。 仅在实际独立收集并转移至废物接收方时启用，不得用于仍保留在整件、包装或收集混合物中的组分。保留组成只作不可相加记录。不预设开包、切割、拆解、主动干燥、回收率或处理路线，处理及运输责任只归属一次。

- 选定流：收集的水洗天然石英砂细料，封闭固体
- 流属性/单位：Mass / kg
- 数量规则：`separate_sand_waste_quartz_sand_fines`实际独占归属的 kg / 验收 N，仅归一化一次；已按参考流给出的数量不得再次除以 N。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_outlets`

范围证据要求：需事件关联的原生 kg、状态组成、接收或供应门、归属记录及整件组分或对应投入的排他关联，使用协议`cp_outlets`。不提供默认数值或换算因子；其他原生单位须有换算证据后使用。

##### 基本流

## 7. 分配与联产品处理

| rule_id | Rule |
| --- | --- |
| completed_reference | N为扣撤销唯一最终真实自有购销企业商业批次接收；须实际商家所有购销企业买方接收门槛来源撤销。N>0才除，不等价袋kg价格发票行 |
| source_assignment | 实际原门槛直接追踪或正值完整相容来源群末端分配，含最终期末其他有用退回证明损失各原生驱动关联责任。含原来源量有据普通水分状态改变份额，非最终净kg加废kg。内部期末期初承继原量状态来源责任，无新需求或两个末端  每项关联原门槛需求或损失量须记录assignment_scope_ids、quantity_basis（raw_target_cohort或per_reference）、same_target_scope_N及来源。真实外部库存阶段损失集成使用原始实体量一次。仅与1 Item(s)服务组合时派生q_per_reference=q_raw_of_that_same_scope/正数same_target_scope_N；已归一量不再除，单货批原始范围N=1，N=0无归一值。 |
| causal_service_share | 先原生事件直接归属，否则documented_share=numerator_driver/denominator_driver正值相容全使用者因果基准，含未完拒收闲置实际期间。不默认毛利干石英纯度颗粒产率驱动 |
| net_supply_returns | S=opening+net_receipts-closing并单独调节保留回收；净材料收货排容器皮重。总S/N输入单列配对未耗输出，或仅耗(S-unused_outward_return)/N输入且省配对退回交换。仅同范围独立供应，不抵扣继承商品 |
| complete_life_assets | 各资产完整制造维护更换退役寿命终结全部使用者期间。原生相容job_driver/(observed_all_user_driver+remaining_driver)，有来源剩余寿命等价不确定性敏感性更新；寿命总池非仅当前观察 |
| unique_freight_receivers | 各唯一实际装载区段本货物覆盖原生份额在SUM内再/N一次。真实整袋松散包装捕集液体可用退回物种去向互斥；接收运输处理服务商范围一次，不默认避免生产抵扣 |


## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_sand | original_bagged_quartz_sand_wholesale | 实际节点交换事件及非交换商品审计 | 原封袋天然石英砂批次原生分析库存与来源门槛台账 | bag_count; bag_count_unit; bag_count_basis; bag_count_method; bag_count_state; bag_count_source; bag_count_sample_time; actual_count; actual_count_unit; actual_count_basis; actual_count_method; actual_count_state; actual_count_source; actual_count_sample_time; count_multiplier; count_multiplier_unit; count_multiplier_basis; count_multiplier_method; count_multiplier_state; count_multiplier_source; count_multiplier_sample_time; whole_bag_gross_mass; whole_bag_gross_mass_unit; whole_bag_gross_mass_basis; whole_bag_gross_mass_method; whole_bag_gross_mass_state; whole_bag_gross_mass_source; whole_bag_gross_mass_sample_time; net_as_received_sand_mass; net_as_received_sand_mass_unit; net_as_received_sand_mass_basis; net_as_received_sand_mass_method; net_as_received_sand_mass_state; net_as_received_sand_mass_source; net_as_received_sand_mass_sample_time; bag_pack_tare; bag_pack_tare_unit; bag_pack_tare_basis; bag_pack_tare_method; bag_pack_tare_state; bag_pack_tare_source; bag_pack_tare_sample_time; retained_water; retained_water_unit; retained_water_basis; retained_water_method; retained_water_state; retained_water_source; retained_water_sample_time; wet_sample_mass; wet_sample_mass_unit; wet_sample_mass_basis; wet_sample_mass_method; wet_sample_mass_state; wet_sample_mass_source; wet_sample_mass_sample_time; water_quantity; water_quantity_unit; water_quantity_basis; water_quantity_method; water_quantity_state; water_quantity_source; water_quantity_sample_time; dry_nonwater_mass; dry_nonwater_mass_unit; dry_nonwater_mass_basis; dry_nonwater_mass_method; dry_nonwater_mass_state; dry_nonwater_mass_source; dry_nonwater_mass_sample_time; w_wet; w_wet_unit; w_wet_basis; w_wet_method; w_wet_state; w_wet_source; w_wet_sample_time; w_dry; w_dry_unit; w_dry_basis; w_dry_method; w_dry_state; w_dry_source; w_dry_sample_time; percent_to_ratio_factor; percent_to_ratio_factor_unit; percent_to_ratio_factor_basis; percent_to_ratio_factor_method; percent_to_ratio_factor_state; percent_to_ratio_factor_source; percent_to_ratio_factor_sample_time; LOI_quantity; LOI_quantity_unit; LOI_quantity_basis; LOI_quantity_method; LOI_quantity_state; LOI_quantity_source; LOI_quantity_sample_time; oxide_result; oxide_result_unit; oxide_result_basis; oxide_result_method; oxide_result_state; oxide_result_source; oxide_result_sample_time; analysis_normalization_total; analysis_normalization_total_unit; analysis_normalization_total_basis; analysis_normalization_total_method; analysis_normalization_total_state; analysis_normalization_total_source; analysis_normalization_total_sample_time; absolute_component_quantity; absolute_component_quantity_unit; absolute_component_quantity_basis; absolute_component_quantity_method; absolute_component_quantity_state; absolute_component_quantity_source; absolute_component_quantity_sample_time; quartz_phase_fraction; quartz_phase_fraction_unit; quartz_phase_fraction_basis; quartz_phase_fraction_method; quartz_phase_fraction_state; quartz_phase_fraction_source; quartz_phase_fraction_sample_time; particle_class_quantity; particle_class_quantity_unit; particle_class_quantity_basis; particle_class_quantity_method; particle_class_quantity_state; particle_class_quantity_source; particle_class_quantity_sample_time; grain_true_density; grain_true_density_unit; grain_true_density_basis; grain_true_density_method; grain_true_density_state; grain_true_density_source; grain_true_density_sample_time; bulk_packed_density; bulk_packed_density_unit; bulk_packed_density_basis; bulk_packed_density_method; bulk_packed_density_state; bulk_packed_density_source; bulk_packed_density_sample_time; bulk_volume; bulk_volume_unit; bulk_volume_basis; bulk_volume_method; bulk_volume_state; bulk_volume_source; bulk_volume_sample_time; void_fraction; void_fraction_unit; void_fraction_basis; void_fraction_method; void_fraction_state; void_fraction_source; void_fraction_sample_time; density_temperature; density_temperature_unit; density_temperature_basis; density_temperature_method; density_temperature_state; density_temperature_source; density_temperature_sample_time; conversion_factor; conversion_factor_unit; conversion_factor_basis; conversion_factor_method; conversion_factor_state; conversion_factor_source; conversion_factor_sample_time; duration; duration_unit; duration_basis; duration_method; duration_state; duration_source; duration_sample_time; ambient_temperature; ambient_temperature_unit; ambient_temperature_basis; ambient_temperature_method; ambient_temperature_state; ambient_temperature_source; ambient_temperature_sample_time; opening_stock; opening_stock_unit; opening_stock_basis; opening_stock_method; opening_stock_state; opening_stock_source; opening_stock_sample_time; receipts; receipts_unit; receipts_basis; receipts_method; receipts_state; receipts_source; receipts_sample_time; closing_stock; closing_stock_unit; closing_stock_basis; closing_stock_method; closing_stock_state; closing_stock_source; closing_stock_sample_time; return_quantity; return_quantity_unit; return_quantity_basis; return_quantity_method; return_quantity_state; return_quantity_source; return_quantity_sample_time; useful_other_exit_quantity; useful_other_exit_quantity_unit; useful_other_exit_quantity_basis; useful_other_exit_quantity_method; useful_other_exit_quantity_state; useful_other_exit_quantity_source; useful_other_exit_quantity_sample_time; proven_loss_quantity; proven_loss_quantity_unit; proven_loss_quantity_basis; proven_loss_quantity_method; proven_loss_quantity_state; proven_loss_quantity_source; proven_loss_quantity_sample_time; source_gate_input_quantity; source_gate_input_quantity_unit; source_gate_input_quantity_basis; source_gate_input_quantity_method; source_gate_input_quantity_state; source_gate_input_quantity_source; source_gate_input_quantity_sample_time; direct_assignment_quantity; direct_assignment_quantity_unit; direct_assignment_quantity_basis; direct_assignment_quantity_method; direct_assignment_quantity_state; direct_assignment_quantity_source; direct_assignment_quantity_sample_time; cohort_source_quantity; cohort_source_quantity_unit; cohort_source_quantity_basis; cohort_source_quantity_method; cohort_source_quantity_state; cohort_source_quantity_source; cohort_source_quantity_sample_time; target_exit_driver; target_exit_driver_unit; target_exit_driver_basis; target_exit_driver_method; target_exit_driver_state; target_exit_driver_source; target_exit_driver_sample_time; sum_exit_drivers; sum_exit_drivers_unit; sum_exit_drivers_basis; sum_exit_drivers_method; sum_exit_drivers_state; sum_exit_drivers_source; sum_exit_drivers_sample_time; exit_driver_quantity; exit_driver_quantity_unit; exit_driver_quantity_basis; exit_driver_quantity_method; exit_driver_quantity_state; exit_driver_quantity_source; exit_driver_quantity_sample_time; assigned_source_gate_quantity; assigned_source_gate_quantity_unit; assigned_source_gate_quantity_basis; assigned_source_gate_quantity_method; assigned_source_gate_quantity_state; assigned_source_gate_quantity_source; assigned_source_gate_quantity_sample_time; source_gate_conversion; source_gate_conversion_unit; source_gate_conversion_basis; source_gate_conversion_method; source_gate_conversion_state; source_gate_conversion_source; source_gate_conversion_sample_time; baseline_quantity; baseline_quantity_unit; baseline_quantity_basis; baseline_quantity_method; baseline_quantity_state; baseline_quantity_source; baseline_quantity_sample_time; additional_stage_quantity; additional_stage_quantity_unit; additional_stage_quantity_basis; additional_stage_quantity_method; additional_stage_quantity_state; additional_stage_quantity_source; additional_stage_quantity_sample_time; loss_adjustment_quantity; loss_adjustment_quantity_unit; loss_adjustment_quantity_basis; loss_adjustment_quantity_method; loss_adjustment_quantity_state; loss_adjustment_quantity_source; loss_adjustment_quantity_sample_time; integrated_additional_stage_quantity; integrated_additional_stage_quantity_unit; integrated_additional_stage_quantity_basis; integrated_additional_stage_quantity_method; integrated_additional_stage_quantity_state; integrated_additional_stage_quantity_source; integrated_additional_stage_quantity_sample_time; carry_original_source_quantity; carry_original_source_quantity_unit; carry_original_source_quantity_basis; carry_original_source_quantity_method; carry_original_source_quantity_state; carry_original_source_quantity_source; carry_original_source_quantity_sample_time; merchant_id; ownership_purchase_resale_evidence; business_buyer_id; acceptance_id; acceptance_gate; acceptance_source; acceptance_reversal_ids; supplier; actual_SKU; actual_grade; source_lot; bag_ids; natural_quartz_evidence; supplier_wash_grade_evidence; supplier_dry_actual_or_not; original_closed_bag_evidence; original_presentation_state; net_tare_membership; sample_component_scope; water_definition_source; water_wet_or_dry_basis; LOI_other_volatiles_exclusion; analysis_method_identity; oxide_normalized_or_absolute_basis; composition_sum_basis; mineral_phase_method_source; particle_class_definition; no_new_merchant_sampling_processing; grain_vs_bulk_void_moisture_compatibility; source_gate_state; source_gate_allocation_mode; direct_assignment_source_ids; all_terminal_exit_ids; all_terminal_exit_driver_records; terminal_exit_link; terminal_exit_owner; terminal_horizon_id; cohort_horizon_start_end; carry_transfer_id; carry_original_state; carry_original_source_owner; closing_opening_pair_source; carry_not_new_source_demand; carry_not_new_service_acceptance; carry_not_two_terminal_exits; exclusive_other_exit_coverage; baseline_stage_coverage; baseline_loss_coverage; additional_stage_owner; loss_owner; already_included_loss_coverage; actual_missing_stage_ids; additional_stage_integration_status; additional_stage_integration_dataset_link; additional_stage_integration_time; additional_stage_integration_time_zone; additional_stage_integration_source; additional_stage_integration_owner; additional_stage_integration_coverage; additional_stage_integration_once_evidence; receipt_time; dispatch_time; acceptance_time; period_id; cohort_id; time_zone; time_source; assignment_scope_ids; quantity_basis; same_target_scope_N; same_scope_N_source | 追踪真实自有购入转售及最终企业买方接收凭据撤销。记录实际天然石英洗选分级原供方批次封袋，仅实际已做才记供方干燥；利用已有供方批次凭据，不规定批发开袋取样处理。各量有本原生单位基准方法状态来源取样时点、毛净皮重覆盖及代表样品组成。水湿干百分定义限同相容样品专属水分；灼减不自动是水。区分归一化氧化物XRF、绝对化学组成与实测矿相颗粒类别，无相容独立证据不从氧化物推游离石英、元素Si或释放。颗粒真实密度不作堆积体积换算，除非实际空隙水分堆积口径支持。真实来源直接追踪或正值完整相容全部末端原生出口记录含最终期末其他有用退回证明损失。原期末期初配对承继原数量状态来源责任，非新需求N或两个末端出口。实际缺失供方门槛阶段或新增原砂需求，在完整链使用前必须在本服务外实际集成且仅一次，须已完成状态、数据集关联、时间时区、来源、互斥责任、已集成原生量及匹配阶段损失覆盖和唯一计入证据；待办计划或仅记数量不足。  每项关联原门槛需求或损失量须记录assignment_scope_ids、quantity_basis（raw_target_cohort或per_reference）、same_target_scope_N及来源。真实外部库存阶段损失集成使用原始实体量一次。仅与1 Item(s)服务组合时派生q_per_reference=q_raw_of_that_same_scope/正数same_target_scope_N；已归一量不再除，单货批原始范围N=1，N=0无归一值。 | 实际原生量单位及有据相容换算，保留日期时区 | 每实际事件及库存计量完整资产区间 | 真实来源收货发货接收及跨期保留资源 | 真实节点场址明确责任交接与全部相关使用者 | 每参考流 | 原始凭据方法校准原生单位基准状态来源取样时点互斥责任不确定性；未知不得按零处理 |
| cp_supplies | original_bagged_quartz_sand_wholesale | 实际节点交换事件及非交换商品审计 | 实际净卫生捕集用品及新增外防护 | native_quantity; native_quantity_unit; native_quantity_basis; native_quantity_method; native_quantity_state; native_quantity_source; native_quantity_sample_time; count_multiplier; count_multiplier_unit; count_multiplier_basis; count_multiplier_method; count_multiplier_state; count_multiplier_source; count_multiplier_sample_time; per_piece_mass; per_piece_mass_unit; per_piece_mass_basis; per_piece_mass_method; per_piece_mass_state; per_piece_mass_source; per_piece_mass_sample_time; composition; composition_unit; composition_basis; composition_method; composition_state; composition_source; composition_sample_time; opening; opening_unit; opening_basis; opening_method; opening_state; opening_source; opening_sample_time; net_receipts; net_receipts_unit; net_receipts_basis; net_receipts_method; net_receipts_state; net_receipts_source; net_receipts_sample_time; closing; closing_unit; closing_basis; closing_method; closing_state; closing_source; closing_sample_time; retained_recovery; retained_recovery_unit; retained_recovery_basis; retained_recovery_method; retained_recovery_state; retained_recovery_source; retained_recovery_sample_time; unused_outward_return; unused_outward_return_unit; unused_outward_return_basis; unused_outward_return_method; unused_outward_return_state; unused_outward_return_source; unused_outward_return_sample_time; density; density_unit; density_basis; density_method; density_state; density_source; density_sample_time; density_temperature; density_temperature_unit; density_temperature_basis; density_temperature_method; density_temperature_state; density_temperature_source; density_temperature_sample_time; conversion_factor; conversion_factor_unit; conversion_factor_basis; conversion_factor_method; conversion_factor_state; conversion_factor_source; conversion_factor_sample_time; documented_share; documented_share_unit; documented_share_basis; documented_share_method; documented_share_state; documented_share_source; documented_share_sample_time; numerator_driver; numerator_driver_unit; numerator_driver_basis; numerator_driver_method; numerator_driver_state; numerator_driver_source; numerator_driver_sample_time; denominator_driver; denominator_driver_unit; denominator_driver_basis; denominator_driver_method; denominator_driver_state; denominator_driver_source; denominator_driver_sample_time; material_identity; net_material_receipt_excluding_container_tare; standalone_stock_scope; matched_return_ids; unused_return_convention; inherited_sand_pack_exclusion; owner; period_id; time_zone; time_source; flow_row_id; actual_identity_case; actual_substance_or_material; actual_origin_and_medium; actual_state_and_gate; case_activation_evidence; typed_or_residual_quantity; quantity_exclusion_links; whole_total_reconciliation; unresolved_occurrence_not_zero | 仅实际使用时记录抹布吸收材料滤材卫生用品新增外防护；原砂原袋仍为商品。净收货排容器皮重。保留EACH/TOTAL、有据件数质量密度组成及原生份额。总供给输入单列配对未耗外送输出，或仅耗用输入省配对退回交换；无规定抑尘配方或重新装袋用料。 按flow_row_id与actual_identity_case划分实际原生记录，仅有证据的分支适用。具体分支与余项在节点内数量互斥，每个实物出入只归属一次，并与相容同范围不可相加总量协调。发生或数量未知仍待采集，不能填零。 | 实际原生量单位及有据相容换算，保留日期时区 | 每实际事件及库存计量完整资产区间 | 真实来源收货发货接收及跨期保留资源 | 真实节点场址明确责任交接与全部相关使用者 | 每参考流 | 原始凭据方法校准原生单位基准状态来源取样时点互斥责任不确定性；未知不得按零处理 |
| cp_utilities | original_bagged_quartz_sand_wholesale | 实际节点交换事件及非交换商品审计 | 实际常温场址电动搬运及已运行通风清理公用工程 | native_interval_quantity; native_interval_quantity_unit; native_interval_quantity_basis; native_interval_quantity_method; native_interval_quantity_state; native_interval_quantity_source; native_interval_quantity_sample_time; actual_utility_quantity; actual_utility_quantity_unit; actual_utility_quantity_basis; actual_utility_quantity_method; actual_utility_quantity_state; actual_utility_quantity_source; actual_utility_quantity_sample_time; documented_share; documented_share_unit; documented_share_basis; documented_share_method; documented_share_state; documented_share_source; documented_share_sample_time; numerator_driver; numerator_driver_unit; numerator_driver_basis; numerator_driver_method; numerator_driver_state; numerator_driver_source; numerator_driver_sample_time; denominator_driver; denominator_driver_unit; denominator_driver_basis; denominator_driver_method; denominator_driver_state; denominator_driver_source; denominator_driver_sample_time; density; density_unit; density_basis; density_method; density_state; density_source; density_sample_time; density_temperature; density_temperature_unit; density_temperature_basis; density_temperature_method; density_temperature_state; density_temperature_source; density_temperature_sample_time; conversion_factor; conversion_factor_unit; conversion_factor_basis; conversion_factor_method; conversion_factor_state; conversion_factor_source; conversion_factor_sample_time; meter_id; utility_identity; provider; all_consumers; interval_start; interval_end; provider_carrier_overlap; time_zone; time_source; flow_row_id; actual_identity_case; actual_substance_or_material; actual_origin_and_medium; actual_state_and_gate; case_activation_evidence; typed_or_residual_quantity; quantity_exclusion_links; whole_total_reconciliation; unresolved_occurrence_not_zero | 实际计量区间全部使用者因果原生份额区分实测分配。仅已运行才记仓库通风清理，不纳供方洗砂筛分干燥研磨煅烧或买方使用。服务供水区别保留水分交易砂与直接水释放；排服务商承运重叠。 按flow_row_id与actual_identity_case划分实际原生记录，仅有证据的分支适用。具体分支与余项在节点内数量互斥，每个实物出入只归属一次，并与相容同范围不可相加总量协调。发生或数量未知仍待采集，不能填零。 | 实际原生量单位及有据相容换算，保留日期时区 | 每实际事件及库存计量完整资产区间 | 真实来源收货发货接收及跨期保留资源 | 真实节点场址明确责任交接与全部相关使用者 | 每参考流 | 原始凭据方法校准原生单位基准状态来源取样时点互斥责任不确定性；未知不得按零处理 |
| cp_provider | original_bagged_quartz_sand_wholesale | 实际节点交换事件及非交换商品审计 | 实际限定仓储服务商包 | actual_native_package_quantity; actual_native_package_quantity_unit; actual_native_package_quantity_basis; actual_native_package_quantity_method; actual_native_package_quantity_state; actual_native_package_quantity_source; actual_native_package_quantity_sample_time; physical_equivalence; physical_equivalence_unit; physical_equivalence_basis; physical_equivalence_method; physical_equivalence_state; physical_equivalence_source; physical_equivalence_sample_time; documented_share; documented_share_unit; documented_share_basis; documented_share_method; documented_share_state; documented_share_source; documented_share_sample_time; numerator_driver; numerator_driver_unit; numerator_driver_basis; numerator_driver_method; numerator_driver_state; numerator_driver_source; numerator_driver_sample_time; denominator_driver; denominator_driver_unit; denominator_driver_basis; denominator_driver_method; denominator_driver_state; denominator_driver_source; denominator_driver_sample_time; provider_id; contract_id; operation_scope; excluded_operations; utility_asset_freight_treatment_coverage; event_ids; owner; period_id; time_zone; time_source | 记录实际物理包等价作业期间份额及供应公用资产运输处理覆盖。承包洗选筛分干燥涂覆研磨混合重装仍为须范围复核的实际额外作业；无矿物加工服务或金额转质量替代常温批发。 | 实际原生量单位及有据相容换算，保留日期时区 | 每实际事件及库存计量完整资产区间 | 真实来源收货发货接收及跨期保留资源 | 真实节点场址明确责任交接与全部相关使用者 | 每参考流 | 原始凭据方法校准原生单位基准状态来源取样时点互斥责任不确定性；未知不得按零处理 |
| cp_assets | original_bagged_quartz_sand_wholesale | 实际节点交换事件及非交换商品审计 | 完整寿命仓库搬运及实际重复支承 | event_quantity; event_quantity_unit; event_quantity_basis; event_quantity_method; event_quantity_state; event_quantity_source; event_quantity_sample_time; full_life_asset_event; full_life_asset_event_unit; full_life_asset_event_basis; full_life_asset_event_method; full_life_asset_event_state; full_life_asset_event_source; full_life_asset_event_sample_time; job_driver; job_driver_unit; job_driver_basis; job_driver_method; job_driver_state; job_driver_source; job_driver_sample_time; observed_all_user_driver; observed_all_user_driver_unit; observed_all_user_driver_basis; observed_all_user_driver_method; observed_all_user_driver_state; observed_all_user_driver_source; observed_all_user_driver_sample_time; remaining_driver; remaining_driver_unit; remaining_driver_basis; remaining_driver_method; remaining_driver_state; remaining_driver_source; remaining_driver_sample_time; lifetime_all_user_driver; lifetime_all_user_driver_unit; lifetime_all_user_driver_basis; lifetime_all_user_driver_method; lifetime_all_user_driver_state; lifetime_all_user_driver_source; lifetime_all_user_driver_sample_time; driver_equivalence; driver_equivalence_unit; driver_equivalence_basis; driver_equivalence_method; driver_equivalence_state; driver_equivalence_source; driver_equivalence_sample_time; asset_id; manufacture; maintenance; replacement; retirement; end_of_life; all_consumers; all_periods; remaining_life_source; observed_boundary; uncertainty; sensitivity; update_trigger; provider_carrier_overlap; inherited_pack_exclusion; period_id; time_zone; time_source | 真实仓库货架电动搬运已运行通风重复支承：完整制造维护更换退役寿命终结。全部使用者期间含未完成拒收闲置归属，原生相容作业、已观察全用户加有据剩余等价寿命驱动；不确定性敏感性更新及唯一服务商承运责任。无每袋新托盘或在服务重计继承袋制造。 | 实际原生量单位及有据相容换算，保留日期时区 | 每实际事件及库存计量完整资产区间 | 真实来源收货发货接收及跨期保留资源 | 真实节点场址明确责任交接与全部相关使用者 | 每参考流 | 原始凭据方法校准原生单位基准状态来源取样时点互斥责任不确定性；未知不得按零处理 |
| cp_freight | original_bagged_quartz_sand_wholesale | 实际节点交换事件及非交换商品审计 | 唯一实际包装湿态砂装载区段运输 | actual_count; actual_count_unit; actual_count_basis; actual_count_method; actual_count_state; actual_count_source; actual_count_sample_time; cargo_mass_quantity; cargo_mass_quantity_unit; cargo_mass_quantity_basis; cargo_mass_quantity_method; cargo_mass_quantity_state; cargo_mass_quantity_source; cargo_mass_quantity_sample_time; cargo_mass_count_multiplier; cargo_mass_count_multiplier_unit; cargo_mass_count_multiplier_basis; cargo_mass_count_multiplier_method; cargo_mass_count_multiplier_state; cargo_mass_count_multiplier_source; cargo_mass_count_multiplier_sample_time; received_wet_sand_mass; received_wet_sand_mass_unit; received_wet_sand_mass_basis; received_wet_sand_mass_method; received_wet_sand_mass_state; received_wet_sand_mass_source; received_wet_sand_mass_sample_time; inherited_added_pack_mass; inherited_added_pack_mass_unit; inherited_added_pack_mass_basis; inherited_added_pack_mass_method; inherited_added_pack_mass_state; inherited_added_pack_mass_source; inherited_added_pack_mass_sample_time; actual_carried_support_mass; actual_carried_support_mass_unit; actual_carried_support_mass_basis; actual_carried_support_mass_method; actual_carried_support_mass_state; actual_carried_support_mass_source; actual_carried_support_mass_sample_time; noncargo_vehicle_container_tare; noncargo_vehicle_container_tare_unit; noncargo_vehicle_container_tare_basis; noncargo_vehicle_container_tare_method; noncargo_vehicle_container_tare_state; noncargo_vehicle_container_tare_source; noncargo_vehicle_container_tare_sample_time; whole_pack_payload; whole_pack_payload_unit; whole_pack_payload_basis; whole_pack_payload_method; whole_pack_payload_state; whole_pack_payload_source; whole_pack_payload_sample_time; payload_conversion; payload_conversion_unit; payload_conversion_basis; payload_conversion_method; payload_conversion_state; payload_conversion_source; payload_conversion_sample_time; distance; distance_unit; distance_basis; distance_method; distance_state; distance_source; distance_sample_time; distance_conversion; distance_conversion_unit; distance_conversion_basis; distance_conversion_method; distance_conversion_state; distance_conversion_source; distance_conversion_sample_time; actual_transport_work; actual_transport_work_unit; actual_transport_work_basis; actual_transport_work_method; actual_transport_work_state; actual_transport_work_source; actual_transport_work_sample_time; documented_service_share; documented_service_share_unit; documented_service_share_basis; documented_service_share_method; documented_service_share_state; documented_service_share_source; documented_service_share_sample_time; numerator_driver; numerator_driver_unit; numerator_driver_basis; numerator_driver_method; numerator_driver_state; numerator_driver_source; numerator_driver_sample_time; denominator_driver; denominator_driver_unit; denominator_driver_basis; denominator_driver_method; denominator_driver_state; denominator_driver_source; denominator_driver_sample_time; load_id; leg_id; unique_load_leg_key; cargo_mass_reporting_extent; actual_sand_pack_membership; wet_moisture_pack_coverage; record_owner; empty_return_coverage; carrier_asset_fuel_coverage; N; time_zone; time_source | 货物含实际收到砂与保留水分、全部原新增袋包装实际随货支承一次。EACH相容质量乘实际件数一次，TOTAL不变；仅扣非货物承运皮重，非实际货物袋支承。真实颗粒密度或干石英质量非整包载荷。各唯一装载区段本原生有据份额在运输工作求和内，后/N一次，保留实际换算空返服务商接收覆盖。 | 实际原生量单位及有据相容换算，保留日期时区 | 每实际事件及库存计量完整资产区间 | 真实来源收货发货接收及跨期保留资源 | 真实节点场址明确责任交接与全部相关使用者 | 每参考流 | 原始凭据方法校准原生单位基准状态来源取样时点互斥责任不确定性；未知不得按零处理 |
| cp_outlets | original_bagged_quartz_sand_wholesale | 实际节点交换事件及非交换商品审计 | 互斥实际整袋砂包装及受控收集出口 | native_quantity; native_quantity_unit; native_quantity_basis; native_quantity_method; native_quantity_state; native_quantity_source; native_quantity_sample_time; actual_compatible_native_transfer_quantity; actual_compatible_native_transfer_quantity_unit; actual_compatible_native_transfer_quantity_basis; actual_compatible_native_transfer_quantity_method; actual_compatible_native_transfer_quantity_state; actual_compatible_native_transfer_quantity_source; actual_compatible_native_transfer_quantity_sample_time; count_multiplier; count_multiplier_unit; count_multiplier_basis; count_multiplier_method; count_multiplier_state; count_multiplier_source; count_multiplier_sample_time; component_quantity; component_quantity_unit; component_quantity_basis; component_quantity_method; component_quantity_state; component_quantity_source; component_quantity_sample_time; retained_sand; retained_sand_unit; retained_sand_basis; retained_sand_method; retained_sand_state; retained_sand_source; retained_sand_sample_time; retained_quartz; retained_quartz_unit; retained_quartz_basis; retained_quartz_method; retained_quartz_state; retained_quartz_source; retained_quartz_sample_time; retained_moisture; retained_moisture_unit; retained_moisture_basis; retained_moisture_method; retained_moisture_state; retained_moisture_source; retained_moisture_sample_time; retained_fluid; retained_fluid_unit; retained_fluid_basis; retained_fluid_method; retained_fluid_state; retained_fluid_source; retained_fluid_sample_time; density; density_unit; density_basis; density_method; density_state; density_source; density_sample_time; density_temperature; density_temperature_unit; density_temperature_basis; density_temperature_method; density_temperature_state; density_temperature_source; density_temperature_sample_time; conversion_factor; conversion_factor_unit; conversion_factor_basis; conversion_factor_method; conversion_factor_state; conversion_factor_source; conversion_factor_sample_time; event_id; transfer_id; parent_bag_lot_ids; loose_material_ids; whole_bag_exclusion; separate_sand_exclusion; separate_pack_exclusion; mixed_capture_exclusion; free_fluid_exclusion; component_identity; sample_component_scope; water_definition_source; receiver_id; receiver_classification; receiver_status_evidence; treatment_owner; retained_content_fate; usable_supply_return_link; actual_export_not_closing; no_automatic_credit; period_id; time_zone; time_source; flow_row_id; actual_identity_case; actual_substance_or_material; actual_origin_and_medium; actual_state_and_gate; case_activation_evidence; typed_or_residual_quantity; quantity_exclusion_links; whole_total_reconciliation; unresolved_occurrence_not_zero; flow_row_id; actual_identity_case; actual_substance_or_material; actual_state_and_gate; case_activation_evidence; quantity_exclusion_links; whole_total_reconciliation | 追踪破损拒收退回期末丢弃决定与实际接收方，不因潮湿包装污渍库存余差自动推损失废物释放零。有用商品砂退回留非交换商品台账及来源关联。整废袋含保留砂水分；独立真实松散砂空包装混合捕集自由受控液排整袋其他成员。各保留组成本原生量单位基准方法状态来源取样时点。无推定开袋回收抵扣处理路线；接收处理运输唯一责任。仅耗用供应省配对未耗退回，期末非外送。 按flow_row_id与actual_identity_case划分实际原生记录，仅有证据的分支适用。具体分支与余项在节点内数量互斥，每个实物出入只归属一次，并与相容同范围不可相加总量协调。发生或数量未知仍待采集，不能填零。 只归属独立确认的实物情形，其他实际去向按来源分别保留；每个原生记录只属于一个交换，任何总量仅作不可相加审计。 | 实际原生量单位及有据相容换算，保留日期时区 | 每实际事件及库存计量完整资产区间 | 真实来源收货发货接收及跨期保留资源 | 真实节点场址明确责任交接与全部相关使用者 | 每参考流 | 原始凭据方法校准原生单位基准状态来源取样时点互斥责任不确定性；未知不得按零处理 |
| cp_environment | original_bagged_quartz_sand_wholesale | 实际节点交换事件及非交换商品审计 | 实际释放物种颗粒类别及接收环境 | direct_measurement; direct_measurement_unit; direct_measurement_basis; direct_measurement_method; direct_measurement_state; direct_measurement_source; direct_measurement_sample_time; measured_species_mass; measured_species_mass_unit; measured_species_mass_basis; measured_species_mass_method; measured_species_mass_state; measured_species_mass_source; measured_species_mass_sample_time; activity; activity_unit; activity_basis; activity_method; activity_state; activity_source; activity_sample_time; factor; factor_unit; factor_basis; factor_method; factor_state; factor_source; factor_sample_time; applicable_species_factor; applicable_species_factor_unit; applicable_species_factor_basis; applicable_species_factor_method; applicable_species_factor_state; applicable_species_factor_source; applicable_species_factor_sample_time; composition; composition_unit; composition_basis; composition_method; composition_state; composition_source; composition_sample_time; release_fraction; release_fraction_unit; release_fraction_basis; release_fraction_method; release_fraction_state; release_fraction_source; release_fraction_sample_time; fate_quantity; fate_quantity_unit; fate_quantity_basis; fate_quantity_method; fate_quantity_state; fate_quantity_source; fate_quantity_sample_time; whole_stream_quantity; whole_stream_quantity_unit; whole_stream_quantity_basis; whole_stream_quantity_method; whole_stream_quantity_state; whole_stream_quantity_source; whole_stream_quantity_sample_time; density; density_unit; density_basis; density_method; density_state; density_source; density_sample_time; density_temperature; density_temperature_unit; density_temperature_basis; density_temperature_method; density_temperature_state; density_temperature_source; density_temperature_sample_time; conversion_factor; conversion_factor_unit; conversion_factor_basis; conversion_factor_method; conversion_factor_state; conversion_factor_source; conversion_factor_sample_time; retained_captured_quantity; retained_captured_quantity_unit; retained_captured_quantity_basis; retained_captured_quantity_method; retained_captured_quantity_state; retained_captured_quantity_source; retained_captured_quantity_sample_time; species_identity; particle_basis; receiving_medium; factor_scope_complete; composition_basis_source; contained_transfer_exclusion; release_owner; measurement_location; time_zone; time_source | 须实际排放物种颗粒类别接收环境，实测物种量或相容活动系数且仅必要组成去向比例。完整物种系数已含比例不再重复乘。产品细粒可吸入粒级比例氧化物XRF安全表组分捕集尘溢砂非直接空气可吸入排放。受控液接收非直接排口；未知不得按零处理。 | 实际原生量单位及有据相容换算，保留日期时区 | 每实际事件及库存计量完整资产区间 | 真实来源收货发货接收及跨期保留资源 | 真实节点场址明确责任交接与全部相关使用者 | 每参考流 | 原始凭据方法校准原生单位基准状态来源取样时点互斥责任不确定性；未知不得按零处理 |

### 计算规则

| rule_id | Applies to | Rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| completed_count | cp_sand | N=count_unique_final_owned_resold_B2B_acceptances_after_reversals且须真实商家所有购销企业买方最终门槛凭据。N>0才除。未完成拒收撤销资源保留实际期间；库存结转非新接收。 | 所有权买方最终门槛撤销时间凭据 | 真实唯一完成服务分母N |  |
| wet_bag_components | cp_sand | 实际whole_bag_gross_mass/net_as_received_sand_mass/bag_pack_tare及原包成员。EACH相容质量*actual_count一次，TOTAL不变；组成仅互斥原生视图才求和。库存水分余差非已证砂损失污染物。 | 原生袋件数毛净皮重组成凭据 | 相容收到砂及整包质量视图 |  |
| water_analysis_density | cp_sand | dry_nonwater_mass=wet_sample_mass*(1-w_wet)仅同明确样品组成实际水/收到湿质量分数。同定义干基水/非水比w_wet=w_dry/(1+w_dry)，先实际percent_to_ratio_factor。含其他挥发物灼减非水。按analysis_normalization_total归一的oxide_result非absolute_component_quantity、quartz_phase_fraction或元素Si；须独立分析矿物基准composition_sum_basis，无默认化学换算。bulk_volume*bulk_packed_density仅相容实际空隙水状态；grain_true_density非堆积密度。 | 同样品水灼减氧化物矿相粒级密度原生定义来源 | 独立相容干非水分析堆积质量视图，不推释放 |  |
| original_source_demand | cp_sand | 实际直接追踪或assigned_source_gate_quantity=cohort_source_quantity*target_exit_driver/sum_exit_drivers，正值完整相容全部末端原生记录含最终期末其他有用退回证明损失，各单位基准方法状态时间来源关联责任。commodity_source_gate_demand=assigned_source_gate_quantity按原完整包装状态含有据水分状态改变份额，非发货加丢弃。同原期末期初配对承继carry_original_source_quantity/状态来源责任，非新来源需求N两个末端。原生baseline_quantity/additional_stage_quantity/loss_adjustment_quantity及互斥原阶段损失覆盖外部一次。  每项关联原门槛需求或损失量须记录assignment_scope_ids、quantity_basis（raw_target_cohort或per_reference）、same_target_scope_N及来源。真实外部库存阶段损失集成使用原始实体量一次。仅与1 Item(s)服务组合时派生q_per_reference=q_raw_of_that_same_scope/正数same_target_scope_N；已归一量不再除，单货批原始范围N=1，N=0无归一值。 | 原门槛直接或完整末端驱动结转基线新增损失台账 | 批发服务外已分配相容原来源需求 |  |
| completed_source_integration | cp_sand | 实际缺失供方门槛阶段或新增原砂需求，在完整链使用前必须在本服务外实际集成且仅一次，须已完成状态、数据集关联、时间时区、来源、互斥责任、已集成原生量及匹配阶段损失覆盖和唯一计入证据；待办计划或仅记数量不足。 | 实际缺失阶段已集成量完成关联时间来源责任覆盖 | 完整链使用前已完成互斥关联商品集成 |  |
| utility_share | cp_utilities | documented_share=numerator_driver/denominator_driver须正值相容全使用者原生基准。utility_per_service=sum(actual_utility_quantity*documented_share)/N，采用实际区间换算服务商排除；无供方洗选干燥或假定通风负荷。 | 真实计量公用区间原生份额换算 | 每完成批次实际公用量 |  |
| net_supply_stock | cp_supplies | S=opening+net_receipts-closing并调节retained_recovery，净收货排容器皮重。总S/N输入单列配对unused_outward_return/N输出，或仅耗(S-unused_outward_return)/N输入且省配对退回交换。EACH件数一次TOTAL不变，实际per_piece_mass/density/conversion及documented_share=numerator_driver/denominator_driver。 | 净供应库存真实未耗退回原生材料换算份额 | 退回互斥的真实总供给或仅耗用服务供应 |  |
| provider_share | cp_provider | provider_per_service=sum(actual_native_package_quantity*physical_equivalence*documented_share)/N仅实际等价适用时。documented_share=numerator_driver/denominator_driver正值原生相容基准；公用资产运输处理调节一次，无金额换算。 | 真实服务包原生量等价覆盖份额 | 每完成批次物理限定服务商服务 |  |
| asset_lifetime_share | cp_assets | lifetime_all_user_driver=observed_all_user_driver+remaining_driver须有据原生相容等价。job_driver/lifetime_all_user_driver用于完整制造维护更换退役寿命终结事件全部使用者期间，含不确定性敏感性更新服务商承运排除；求和后/N一次。 | 完整资产事件作业已观察有据剩余等价寿命驱动 | 每完成批次完整寿命全使用者资产归属 |  |
| unique_freight_sum | cp_freight | 实际整货物保留收到砂水全部原新增包装随货支承一次。EACH相容cargo_mass_quantity*actual_count一次，TOTAL不变，仅扣非货物承运皮重。有据原生质量距离换算到actual_transport_work；documented_service_share=numerator_driver/denominator_driver。freight_per_service=sum_unique_load_leg(actual_transport_work*documented_service_share)/N本记录份额在SUM内后N一次；实际空返服务商接收覆盖互斥。 | 唯一装载区段真实整包载荷距离原生份额换算 | 每完成批次实际归属运输工作 |  |
| actual_outlets_release | cp_outlets; cp_environment | outlet_per_service=actual_compatible_native_transfer_quantity/N采用实际有据EACH/TOTAL净皮重密度换算。整袋松砂包装混合捕集自由受控液保留组成互斥，接收处理一次，期末非外送，仅耗用省未耗退回。release_mass=measured_species_mass或相容activity*applicable_species_factor且只加必要composition/release_fraction；完整系数已含比例不再重复乘。实际物种颗粒环境样品状态来源捕集排除后/N一次，不按产品细粒XRF安全表库存差推释放。 | 实际转移接收及实测物种或适用原生系数证据 | 每完成批次互斥真实接收转移直接物种 |  |

### 数据质量要求

| requirement_id | applies_to | requirement | evidence |
| --- | --- | --- | --- |
| native_analysis | cp_sand | 实际天然石英洗选等级原袋供方完成门槛；各水灼减氧化物矿相颗粒密度视图保留本代表样品单位基准方法状态来源时点。未知不强定纯度水释放零 | 实际供方批放行称重样品方法凭据，不统一用组合安全表数值 |
| source_chain | cp_sand | 完整实际完成门槛原分配来源损失覆盖完整末端结转原生台账；完整链前已完成新增集成互斥来源责任 | 直接或完整末端、基线新增损失原生换算完成集成关联时间责任证据 |
| service_fates | all protocols | 真实扣撤销最终自有企业N全使用者原生份额完整资产寿命唯一运输；有条件供应接收物种身份及实际数量须实际数据。未明必要证据阻止最终包就绪。 最终数据包须有实际数量、相容原生单位基准及可追溯来源，并核实具体身份与属性单位支持。通用数值Range本身不是独立必备门槛。实际声明或采用的规格或外源区间须可追溯且相容的证据和基准；经验性警戒区间另须独立可比观测。保留实际验收标准、必要样品不确定性及已披露缺口，不编造数值；仅缺通用区间不否决其他证据完备的数据包。 | 实际原始凭据校准方法互斥责任接收范围不确定性敏感性更新 |

| requirement_id | applies_to | requirement | evidence |
| --- | --- | --- | --- |
| electricity | original_bagged_quartz_sand_wholesale | 电表记录对应哪个供电点、交直流状态、电压和供应方数据集？核对已列交流电卡与其他有证据的供电，不得将交流电 UUID 用于其他能源。 实际送达本批发场址照明搬运及已运行通风的电力。供方开采洗选分级干燥和客户使用在服务外，不按砂身份带入加工能耗系数。 范围证据需求：须实际区间kWh、计量供方边界、全使用者原生份额最终N才能建场址分布；无统一每袋电耗或石英加工基准。 计量证据：协议`cp_utilities`；原记录口径 Energy / kWh。原数量约束“实际相容计量电力*documented_share/N”仅逐一适用于身份及单位匹配的独立流，不生成类目合计交换，也不将原记录单位套用于不同物料或服务。已按参考流给出的数量不得再次归一化。 已明确的流卡：`electricity_ac`。其他实际状态须先解决上述具体证据问题，不得套用这些身份。 本记录不是交换，不能生成类目合计数量。 | `cp_utilities`; 实际来源关联原生记录 |
| site_water | original_bagged_quartz_sand_wholesale | 供应记录是否证明为处理自来水，还是其他明确水质或水源？核实供水状态及交接门，不得用自来水卡替代其他水。 仅声明作业内实际场址清理事件处理供水；不规定润湿洗砂调湿，不把交易袋中保留水作服务耗用。 范围证据需求：须净计量水量体积或实际密度温度相容质量换算、清理事件份额；无供方洗水或统一每吨水量。 计量证据：协议`cp_utilities`；原记录口径 Volume / m3。原数量约束“实际供水*documented_share/N并作有据原生换算”仅逐一适用于身份及单位匹配的独立流，不生成类目合计交换，也不将原记录单位套用于不同物料或服务。已按参考流给出的数量不得再次归一化。 已明确的流卡：`site_water_liquid_tap`。其他实际状态须先解决上述具体证据问题，不得套用这些身份。 本记录不是交换，不能生成类目合计数量。 | `cp_utilities`; 实际来源关联原生记录 |
| service_consumables | original_bagged_quartz_sand_wholesale | 取得下述清洁或维护职责实际采购品号、配方或安全数据表、供应浓度、物态、用途及库存领用记录。逐项核实洗涤剂以外的实际材料；不得由本 PCR 预设药剂、滤材或剂量。 有条件原生材料统项：识别各真实清理捕集材料及相容净供应库存。不由供方安全表建议规定润湿药剂呼吸器更换或每袋新滤材。 范围证据需求：各实际材料分别须真实款组成净收货期初末回收未耗退回EACH/TOTAL密度单件换算；无统一吸收滤材耗率。 计量证据：协议`cp_supplies`；原记录口径 Mass / kg。原数量约束“实际净S*documented_share/N或仅耗用配对退回口径”仅逐一适用于身份及单位匹配的独立流，不生成类目合计交换，也不将原记录单位套用于不同物料或服务。已按参考流给出的数量不得再次归一化。 已明确的流卡：`service_consumables_synthetic_detergent`。其他实际状态须先解决上述具体证据问题，不得套用这些身份。 本记录不是交换，不能生成类目合计数量。 | `cp_supplies`; 实际来源关联原生记录 |
| added_protection | original_bagged_quartz_sand_wholesale | 取得包装物料单或规格、材料或复合层身份及新增与继承包装的责任。按该记录逐项确定尚缺的套袋、封口、标签、捆扎带或支撑件身份；一体复合包装不得拆成可相加的材料交换。 仅商家实际新增外防护包装扎带，保留供方原封袋。原袋填装留商品上游，刻意重装袋须范围复核。 范围证据需求：须新增材料身份质量件数来源事件原新增成员及未耗退回库存凭据；无自动托盘膜或替袋数量。 计量证据：协议`cp_supplies`；原记录口径 Mass / kg。原数量约束“实际新增防护净供应*documented_share/N采用配对退回口径”仅逐一适用于身份及单位匹配的独立流，不生成类目合计交换，也不将原记录单位套用于不同物料或服务。已按参考流给出的数量不得再次归一化。 本记录不是交换，不能生成类目合计数量。 | `cp_supplies`; 实际来源关联原生记录 |
| provider_package | original_bagged_quartz_sand_wholesale | 取得本记录中明列各职责的供应商合同或完成结果记录、原生计量物理单位及包含资源。确定各项服务结果身份；检验、清洁、装卸为不同服务，价格或小时不得改称件数。 真实承包收货持有搬运或场址清理包有物理边界，供应公用资产运输处理互斥。承包方做排除砂加工不能将其改作普通持有。 范围证据需求：须供方包单位物理等价来源覆盖全使用者份额；无币值毛利等价或通用矿物处理包。 计量证据：协议`cp_provider`；原记录口径 Count / Item(s)。原数量约束“适用等价时sum(actual_native_package_quantity*physical_equivalence*documented_share)/N”仅逐一适用于身份及单位匹配的独立流，不生成类目合计交换，也不将原记录单位套用于不同物料或服务。已按参考流给出的数量不得再次归一化。 本记录不是交换，不能生成类目合计数量。 | `cp_provider`; 实际来源关联原生记录 |
| service_assets | original_bagged_quartz_sand_wholesale | 对本记录中明列的每种资产取得资产编号、配置及匹配的完整生命周期数据集。待补的是各资产或服务身份及全寿命全部使用者分母；仓库、叉车、托盘不能共用一条计数交换，也不能套用默认寿命。 真实场所搬运已运行通风支承资产涵完整寿命全部使用者。交易天然砂及原一次袋是商品，非当前服务资产。 范围证据需求：须真实完整资产制造维护更换退役寿命终结清单、全用户已观察加有据剩余寿命驱动、不确定性更新证据；无每袋新托盘或假定资产年限。 计量证据：协议`cp_assets`；原记录口径 Count / Item(s)。原数量约束“sum(full_life_asset_event*job_driver/lifetime_all_user_driver)/N并原生等价”仅逐一适用于身份及单位匹配的独立流，不生成类目合计交换，也不将原记录单位套用于不同物料或服务。已按参考流给出的数量不得再次归一化。 本记录不是交换，不能生成类目合计数量。 | `cp_assets`; 实际来源关联原生记录 |
| freight | original_bagged_quartz_sand_wholesale | 对实际入库、出库、退运及废物运输段取得运输方式或车辆、温控服务、起终点、实际载荷和距离及供应方覆盖。方式或配置未明确前不能选择运输流；不同运输方式不得合成一条 kg*km 流。 实际货物含湿态砂全部随货原新增袋包装支承一次。明确EACH/TOTAL及非货物承运皮重；仅实际复核运输，排接收服务商重叠。 范围证据需求：须整包货物原生净毛皮重件数区段距离换算及各装载区段因果份额空返覆盖；颗粒密度标称袋量干石英量不自动作载荷。 计量证据：协议`cp_freight`；原记录口径 Mass*Length / t*km。原数量约束“sum_unique_load_leg(actual_transport_work*documented_service_share)/N”仅逐一适用于身份及单位匹配的独立流，不生成类目合计交换，也不将原记录单位套用于不同物料或服务。已按参考流给出的数量不得再次归一化。 本记录不是交换，不能生成类目合计数量。 | `cp_freight`; 实际来源关联原生记录 |
| unused_supply_return | original_bagged_quartz_sand_wholesale | 将对外退料凭据匹配到唯一投入品号、状态、原生单位及接收方。采用净消耗投入时省略对应退料交换；商品退货及期末库存另作审计记录。 仅总输入配对同独立服务供应库存的真实相容未耗退回；仅耗用供应省此交换。有用原砂退回留非交换商品，期末非外送。 范围证据需求：须实际材料退回关联净原生量接收方同范围供应库存来源；不从余库存推退回或抵扣原砂包装负担。 计量证据：协议`cp_outlets`；原记录口径 Mass / kg。原数量约束“总输入口径下实际配对未耗外送原生材料量/N”仅逐一适用于身份及单位匹配的独立流，不生成类目合计交换，也不将原记录单位套用于不同物料或服务。已按参考流给出的数量不得再次归一化。 已明确的流卡：`unused_supply_return_detergent_return`。其他实际状态须先解决上述具体证据问题，不得套用这些身份。 本记录不是交换，不能生成类目合计数量。 | `cp_outlets`; 实际来源关联原生记录 |
| usable_service_material_export | original_bagged_quartz_sand_wholesale | 取得下述具体回收出口的独立交接记录、实际材料或复合状态、质量验收及接收方。按真实交接判定产品或废物，不预设回收产品身份或替代抵扣。 有条件实际可用服务材料外送，区别未耗退回废物。须真实接收保留组成状态；无自动回收抵扣或原砂转售作第二服务输出。 范围证据需求：须外送事实材料质量组成原生相容质量接收凭据；非保留期末假定回收石英或避免原生材料。 计量证据：协议`cp_outlets`；原记录口径 Mass / kg。原数量约束“实际互斥可用服务材料转移量/N”仅逐一适用于身份及单位匹配的独立流，不生成类目合计交换，也不将原记录单位套用于不同物料或服务。已按参考流给出的数量不得再次归一化。 本记录不是交换，不能生成类目合计数量。 | `cp_outlets`; 实际来源关联原生记录 |
| whole_bag_waste | original_bagged_quartz_sand_wholesale | 取得下述实际出口的独立转移凭据，含来源整件或品号、物态、保留组成、接收方及处理范围。匹配到一张已列实物卡；尚未匹配的部件、液体或污染混合物需自身明确身份，不能把本记录 ID 当废物流。 仅真实丢弃接收证据使拒收破损整袋成废物。实测范围含保留砂水原包装，不另把其组成质量输出。 范围证据需求：须实际丢弃决定父批袋整净毛皮重保留组成覆盖接收运输处理；无统一拒收百分比或湿袋自动丢弃。 计量证据：协议`cp_outlets`；原记录口径 Mass / kg。原数量约束“实际相容废整袋转移量/N”仅逐一适用于身份及单位匹配的独立流，不生成类目合计交换，也不将原记录单位套用于不同物料或服务。已按参考流给出的数量不得再次归一化。 已明确的流卡：`whole_bag_waste_atomic_case`。其他实际状态须先解决上述具体证据问题，不得套用这些身份。 本记录不是交换，不能生成类目合计数量。 | `cp_outlets`; 实际来源关联原生记录 |
| separate_sand_waste | original_bagged_quartz_sand_wholesale | 取得下述实际出口的独立转移凭据，含来源整件或品号、物态、保留组成、接收方及处理范围。匹配到一张已列实物卡；尚未匹配的部件、液体或污染混合物需自身明确身份，不能把本记录 ID 当废物流。 仅真实松散砂细粒送废物接收，排整袋保留砂混合捕集。不规定开袋筛分再生，非直接空气粉尘。 范围证据需求：须实际事件父批原生湿干样品组成量接收分类处理；产品粒径比例库存亏差非丢弃量或可吸入释放。 计量证据：协议`cp_outlets`；原记录口径 Mass / kg。原数量约束“实际互斥松散废砂细粒量/N”仅逐一适用于身份及单位匹配的独立流，不生成类目合计交换，也不将原记录单位套用于不同物料或服务。已按参考流给出的数量不得再次归一化。 已明确的流卡：`separate_sand_waste_atomic_case`; `separate_sand_waste_quartz_sand_fines`。其他实际状态须先解决上述具体证据问题，不得套用这些身份。 本记录不是交换，不能生成类目合计数量。 | `cp_outlets`; 实际来源关联原生记录 |
| pack_waste | original_bagged_quartz_sand_wholesale | 取得下述实际出口的独立转移凭据，含来源整件或品号、物态、保留组成、接收方及处理范围。匹配到一张已列实物卡；尚未匹配的部件、液体或污染混合物需自身明确身份，不能把本记录 ID 当废物流。 实际事件已分离包装，声明残留砂水接收路线。排整袋捕集成员，不统一规定开袋或纯聚合物身份。 范围证据需求：须真实包装组成皮重残留原生量原新增覆盖接收；不以标签量当净砂或假定清洁回收抵扣。 计量证据：协议`cp_outlets`；原记录口径 Mass / kg。原数量约束“实际独立包装含有据残留量/N”仅逐一适用于身份及单位匹配的独立流，不生成类目合计交换，也不将原记录单位套用于不同物料或服务。已按参考流给出的数量不得再次归一化。 已明确的流卡：`pack_waste_paper_pack`; `pack_waste_metal_pack`; `pack_waste_plastic_pack`。其他实际状态须先解决上述具体证据问题，不得套用这些身份。 本记录不是交换，不能生成类目合计数量。 | `cp_outlets`; 实际来源关联原生记录 |
| mixed_capture_waste | original_bagged_quartz_sand_wholesale | 取得下述实际出口的独立转移凭据，含来源整件或品号、物态、保留组成、接收方及处理范围。匹配到一张已列实物卡；尚未匹配的部件、液体或污染混合物需自身明确身份，不能把本记录 ID 当废物流。 有条件真实废清理滤材流，整流量含保留砂水流体。排独立转移自由液整袋松散砂直接排放物种。 范围证据需求：须投入事件关联整量保留组成原生基准来源取样时点接收处理；无安全表粉尘比例或干质量余差当捕集废物。 计量证据：协议`cp_outlets`；原记录口径 Mass / kg。原数量约束“实际互斥废混合捕集转移量/N”仅逐一适用于身份及单位匹配的独立流，不生成类目合计交换，也不将原记录单位套用于不同物料或服务。已按参考流给出的数量不得再次归一化。 本记录不是交换，不能生成类目合计数量。 | `cp_outlets`; 实际来源关联原生记录 |
| free_contained_fluid | original_bagged_quartz_sand_wholesale | 取得下述实际出口的独立转移凭据，含来源整件或品号、物态、保留组成、接收方及处理范围。匹配到一张已列实物卡；尚未匹配的部件、液体或污染混合物需自身明确身份，不能把本记录 ID 当废物流。 仅真实分收含实际砂组成的液体转移接收。非商品吸收材料保留水、公用输入或直接环境排口；接收处理唯一责任。 范围证据需求：须收集接收事件整液质量或相容密度温度体积换算固水覆盖；无每吨砂默认废水。 计量证据：协议`cp_outlets`；原记录口径 Mass / kg。原数量约束“实际互斥自由受控液原生量/N并相容换算”仅逐一适用于身份及单位匹配的独立流，不生成类目合计交换，也不将原记录单位套用于不同物料或服务。已按参考流给出的数量不得再次归一化。 本记录不是交换，不能生成类目合计数量。 | `cp_outlets`; 实际来源关联原生记录 |
| direct_species_release | original_bagged_quartz_sand_wholesale | 按排放或采样记录确定各实测排放的来源事件、化学物或粒径身份、来源属性及接收介质。物种、粒径或介质不明须保留具体证据缺口；化学品总用量或库存损失不能提供这些身份。 仅真实释放证据的有条件物种环境统项。石英矿相产品细粒归一氧化物气味库存差捕集尘非自动元素Si可吸入石英水排放或零排放。 范围证据需求：须真实物种颗粒定义接收环境原生实测或适用系数活动组成去向覆盖及捕集排除；不以组分安全表XRF比例作排放系数。 计量证据：协议`cp_environment`；原记录口径 Mass / kg。原数量约束“实际实测物种或相容activity*applicable_species_factor且仅必要组成去向，再/N”仅逐一适用于身份及单位匹配的独立流，不生成类目合计交换，也不将原记录单位套用于不同物料或服务。已按参考流给出的数量不得再次归一化。 本记录不是交换，不能生成类目合计数量。 | `cp_environment`; 实际来源关联原生记录 |


## 9. 验证规则

| rule_id | Rule |
| --- | --- |
| final_reference | 须唯一最终真实所有转售企业接收凭据撤销N>0及原供方完成封袋天然石英状态；参考名关联单位实际限定对齐 |
| native_analysis | 水湿干同样品先百分换算，不以灼减等水归一氧化物等绝对石英Si真密度等堆积或产品细粒等空气释放；须代表方法来源单位 |
| source_integration | 完整实际原门槛分配需求损失，直接或完整正值全部末端原生驱动含最终期末其他有用退回证明损失。内部同原结转非新需求N两个末端。完整链前实际缺失阶段新增需求已在外部集成一次，有完成关联时间来源责任原生覆盖  每项关联原门槛需求或损失量须记录assignment_scope_ids、quantity_basis（raw_target_cohort或per_reference）、same_target_scope_N及来源。真实外部库存阶段损失集成使用原始实体量一次。仅与1 Item(s)服务组合时派生q_per_reference=q_raw_of_that_same_scope/正数same_target_scope_N；已归一量不再除，单货批原始范围N=1，N=0无归一值。 |
| service_owners | 净供应总输入配对未耗输出或仅耗省配对输出、完整全使用者已观察有据剩余资产寿命、各记录唯一运输份额SUM内/N一次；服务商承运接收覆盖互斥 |
| fates_and_gaps | 实际整袋松散包装捕集液组成物种互斥接收环境处理一次；未知不得按零处理，无默认损失回收抵扣。 最终数据包须有实际数量、相容原生单位基准及可追溯来源，并核实具体身份与属性单位支持。通用数值Range本身不是独立必备门槛。实际声明或采用的规格或外源区间须可追溯且相容的证据和基准；经验性警戒区间另须独立可比观测。保留实际验收标准、必要样品不确定性及已披露缺口，不编造数值；仅缺通用区间不否决其他证据完备的数据包。候选不等于发布就绪 |
| validate_concrete_identity_decisions | all inventory rows | 将每项实际身份核实事项落实到实物明确的流卡和原生数量，或提供不适用证据。证据检查点 ID 不是交换。发生、物种、状态、接收方或服务配置缺失时阻断最终数据完成，不默认零。按规定保持整体与组分、总量投入与对应退料的排他关系。 |  |

## 10. 发布数据集画像

| Field | Value |
| --- | --- |
| dataset_role | 每实际完成企业批次前景自营批发服务附加层 |
| downstream_use | 关联一次实际完整开采洗选分级实际有做干燥原填装封袋商品门槛，原需求损失及已完成新增集成在服务外 |
| allowed_use | 实际供方完成原封袋洗选分级天然石英砂按收到水分等级包装状态常温自有企业转售 |
| excluded_use | 仅完整砂材料足迹、把原采场前体作完整封包门槛、散装微粉方石英涂覆煅烧混配商品、商家加工重装使用、待办缺阶段集成当完成 |
| required_metadata | merchant_id; ownership_purchase_resale_evidence; business_buyer_id; acceptance_gate; acceptance_source; acceptance_reversal_ids; supplier; actual_SKU; actual_grade; source_lot; bag_ids; natural_quartz_evidence; supplier_wash_grade_evidence; supplier_dry_actual_or_not; original_closed_bag_evidence; original_presentation_state; net_as_received_sand_mass; bag_pack_tare; sample_component_scope; water_wet_or_dry_basis; oxide_normalized_or_absolute_basis; composition_sum_basis; particle_class_definition; density_temperature_unit; receipt_time; dispatch_time; acceptance_time; period_id; time_zone |
| required_quality_disclosure | 实际量身份范围、同样品水灼减氧化物矿相颗粒堆积密度基准、原来源完整末端结转基线新增损失集成、全用户资产剩余原生份额实际接收不确定性 |
| update_trigger | 实际款批供方路线干燥等级矿相水分包装、商家作业来源边界分配覆盖资产服务商接收物种换算证据变化 |


## 11. 数据源

| source_id | type | reference | used_for |
| --- | --- | --- | --- |
| sibelco-silica | literature | https://www.sibelco.com/en/materials/silica | 实际硅产品组合区别仅支持路线身份问题；石英方石英砂微粉干湿涂覆煅烧原料非同一款。无统一纯度物理默认。 |
| holcim-silica-sds-2024 | literature | https://www.holcim.com.au/sites/australia/files/docs/holcim-sds-glass-grade-silica-sand.pdf | 六页供方安全表修订1.1日期2024年10月14日：洗选玻璃级砂石英身份及定性封容器状态实际收集搬运问题；非目标批组成现行法律医疗建议统一石英可吸入比例密度暴露排放系数。 |
