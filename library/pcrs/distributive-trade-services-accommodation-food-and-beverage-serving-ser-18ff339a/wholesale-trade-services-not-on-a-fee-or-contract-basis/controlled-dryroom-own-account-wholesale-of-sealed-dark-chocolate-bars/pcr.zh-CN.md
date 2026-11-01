---
pcr_id: pcr.controlled-dryroom-own-account-wholesale-of-sealed-dark-chocolate-bars
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 密封黑巧克力条的控温控湿干燥库自营批发服务

## 1. 范围与适用性

本 PCR 覆盖制造者已放行、独立密封的纯黑巧克力条作为成品商品接收，在实际运行的控温控湿干燥库保存后，自营转售并获企业买方验收的物理服务。库房监测调控与跨温区妥善处理维持声明的巧克力包装质量；仅有密封标签不能证明保鲜干预。

排除可可种植豆类采后、巧克力制造精炼精磨调温成型、夹心白巧克力或牛奶巧克力、主动再熔再调温换装返工、零售、仅佣金代理和纯财务转移。实际意外包损、退回隔离或处置如实记录，不悄悄增加制造路径。制造者特定配方包装及质量说明为实际限定，不套用供应商温度湿度保存期限或货架寿命默认值。

## 2. 产品类别身份

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.controlled-dryroom-own-account-wholesale-of-sealed-dark-chocolate-bars |
| classification_refs | CPC3.0:61025；narrower：密封纯黑巧克力条的控温控湿干燥库物理自营服务 |
| covered_products | 实际已放行密封黑巧克力条及运行干燥库控制条件下，已完成验收的企业商业批次服务 |
| excluded_products | 可可豆巧克力制造；夹心白或奶巧克力；主动返工换装；零售代理；被动所有权转移 |
| representative_product | 一个验收商业批次，记录制造者真实配方可可状态、条数巧克力净质量一层皮重及温湿质量门槛 |
| production_route | 已放行密封成品条接收 -> 真实监测调温控湿库存轮转 -> 订单作业与受控过区发货 -> 买方验收；真实异常损失路径 |
| market_state | 已完成贸易服务，不是新巧克力产品；商品以真实声明状态门槛密封交付 |


## 3. 参考流

| Field | Value |
| --- | --- |
| What | 已完成的密封黑巧克力条控温控湿干燥库自营批发批次服务 |
| How much | 1 Item(s)，一个唯一已完成验收商业批次；不设固定条数千克可可含量或金额利润换算 |
| How well | 按记录的真实例外，验收配方一层包材完整性及买方约定外观包装温湿要求；不作通用安全或货架寿命保证 |
| How long or cycle | 真实接收保存跨区发货验收时间，加上归属待机清洁报告截止与资产完整寿命期间 |
| reference_flow_link | `accepted_service` |

| Field | Value |
| --- | --- |
| reference_amount | 1 |
| reference_product_flow | 已完成的密封黑巧克力条控温控湿干燥库自营批发批次服务 |
| reference_flow_property | 物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` |
| reference_unit_group | 数量单位 `5beb6eed-33a9-47b8-9ede-1dfe8f679159` |
| reference_unit | Item(s) |
| required_qualifiers | manufacturer_released_sealed_plain_dark_bar; actual_SKU_formulation_and_cocoa_state; primary_wrap_and_pack_count; net_chocolate_mass_and_package_tare; lot_manufacture_and_date_conditions; actual_product_room_ambient_temperature; humidity_condensation_and_odour_control; actual_receipt_storage_dispatch_acceptance_times; bloom_and_pack_condition_acceptance_decision; ownership_resale_business_buyer; unique_commercial_consignment; HVAC_provider_transport_and_treatment_scope; reporting_period_and_exclusive_stock_exits; original_released_bar_loss_adjustment_link |

N>0 为有记录冲销后的唯一实际验收批次数。一个服务不是一条包装巧克力。不合格隔离未完成活动消耗真实资源，须归属有依据验收集合或跨期责任；不能因期间无完成销售而消失。

## 4. 计量与单位规则

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| count_reference | 参考产品 | 物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` | Item(s) | 实际合同批次完成仅计一次，参考量采用 1 Item(s)，商品条数质量另记。 |
| bar_mass_state | 商品及不合格品 | 数量与质量 | bars; kg | 记录声明状态的真实条数、含包装毛重、一层皮重及巧克力净质量；用实测品号单件质量换算证据。可可配方或表面起霜不是通用质量得率因子。 |
| quality_state | 外观与环境 | 分类观察及实际测量单位 | 声明温度湿度时间单位 | 区分真实脂霜糖霜、破包、凝露和验收决策与数量出口。迁移相变或溶解重结晶描述不产生新脂肪糖投入、损失数量或基本流排放。 |
| native_units | 实际交换 | 实际原生属性 | 实际原生单位 | 保留物资服务资产单位；数量面积长度时间体积变体须有对应核实交换支持；实测质量视图不再叠加。 |


## 5. 系统边界

受控保鲜节点始于已制造放行的密封巧克力条，经过监测干燥库与声明跨区作业后，止于真实买方验收。记录产品库房环境条件、包装完整及实际检查验收例外。存储起霜技术指南支持这些问题，不提供产品定量配方或合规保证。

### 边界概化

| Field | Value |
| --- | --- |
| declared_starting_condition | 真实生产商品门槛处，已制造放行密封的纯黑巧克力条，批号配方一层包材明确 |
| starting_condition_role | 含原一层包装的非交换商品库存流经量，不在附加服务内耗用巧克力生产 |
| product_classification_scope | CPC61025较窄子集中的密封纯黑巧克力条控温控湿干燥库自营服务 |
| recursive_input_rule | 真实上游仓储控制服务须完整资源范围门槛不重叠；不递归同次销售或重复暖通运输 |
| upstream_dataset_requirement | 实际资源服务商全寿命资产接收处理须兼容。服务外商品基线须匹配已放行密封条；原可可豆不能代表精炼配方调温成型包装后的巧克力条。缺失制造一层包材阶段仅一次在服务外补齐，匹配原交付点损失状态 |
| disclosure | 全部参考限定；真实控制质量库存期间责任证据；正数 N；原放行条损失数量状态单位换算及已含覆盖；服务运输资产工质接收完整边界 |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| boundary_addon | all inventory | 服务交换排除全部交易巧克力制造与原一层包装生产，含损失商品内含上游负担。全链完整前，须在独立商品链分别定量原交付点可售损失负担及一层包装去向且仅一次；真实服务损失搬运处理留在本项内。 |  |
| boundary_condition | controlled_bar_trade | 要求真实运行监测温湿控制及产品库房跨区记录，与实际制造者买方条件匹配。供应商公开文字仅支持条件问题；不套用未看视频说明、数字默认或通用货架寿命安全主张。 | callebaut-chocolate-store-text |
| boundary_bloom | quality and stock exits | 起霜按实际质量状态观察，不自动视为新脂肪糖生产、质量损失、基本流释放或废物。采用真实隔离退回降级验收废弃决策及物理数量，不把夹心迁移配方套到纯巧克力条。 | callebaut-fat-bloom-text; callebaut-sugar-bloom-text |
| boundary_coverage | actual physical duties | 自有外部控制、公用工程运输、共享资产初始充注及接收处理确定实际唯一责任；环境取排水、化学固体工质废物及特定释放按证据展开。缺覆盖阻止最终完整。 |  |


## 6. 过程清单结构

### 过程图

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| controlled_bar_trade | 实际干燥库保鲜与密封黑巧克力条自营贸易 | required | 真实买入转售所有权，加上实际监测库房温湿控制 | 从已放行密封条可用入库到维持状态企业验收的单一有界保鲜节点；拣货发货清洁批次模式，加上持续共享库房控制期间 | `accepted_service` |

收货质量观察及二级订单包装不创建新的巧克力制造或独立分级节点。实际跨区开门调控事件、隔离库存、退回清洁按批次期间链接。条件性角色展开实际品号材料工质物质原生单位接收方；真实角色缺项不是零。本图不允许正常商品主动调温再熔或开封。

### 过程：实际干燥库保鲜与密封黑巧克力条自营贸易 (`controlled_bar_trade`)

#### 输入

##### 产品流

###### 实际使用点交流电 (`room_electricity_ac`)

仅适用于实际跨越本节点边界、且未由完整供应商数据覆盖的交流电。该身份未特指供应方、电压、发电组合或交付线损归属，仍须按要求采集。经核实的电力流以1 MJ电能为基准，其ILCD属性名称为净热值；原生kWh按精确的3.6 MJ/kWh换算，不能套用燃料热值系数。直流电或其他不匹配电力状态保留在余项要求中。

- 选定流：交流电 `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- 流属性/单位：Energy / kWh
- 数量规则：分配的计量电量 / N；cp_room。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_room`

范围证据需求：需真实产品库房环境温湿度、分期电表及全部消费方物理驱动量；供应商存储条件不转为能耗基准。

###### 实际场内搬运设备柴油供应 (`handling_diesel`)

仅实际归属柴油设备，承运燃料范围另定；上游燃料供应、实际燃烧及废物溢漏分开。

固定身份表示以Mass/kg为参考基准的通用供应柴油；实际牌号、配方、供应方及热值仍须记录，不能预设。保留原生升记录；最终换算为kg须有实际相容密度、温度状态、质量体积比单位及来源，目录不提供默认密度。缺密度时体积转质量仍不完整，不能填零或假定值。供应柴油不等于燃烧柴油、运输服务或直接排放。

- 选定流：柴油 `9d258d75-6792-4f1c-9856-81602ed8f816`
- 流属性/单位：Volume / L
- 数量规则：分配的柴油供应 / N；cp_fuel。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_fuel`

范围证据需求：需原生期初净收货期末及真实完整去向记录，不以标称运行或差额推燃烧。

###### 实际液态处理自来水供给 (`cleaning_water_liquid_tap`)

仅在实际来源确为处理后的自来水且用于所声明用途时适用。保留实际供应方、水质、温度状态和供应边界，不假定所有供水都是自来水。冰、瓶装矿泉水、再生水、未经处理的水及环境直接取水保留各自实际身份。沿用原卡原生质量或体积基准；最终换算为质量参考量时须有实际相容密度和状态证据，不能把目录中的次要体积关系作为默认现场密度。

- 选定流：自来水 `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- 流属性/单位：Volume / m3
- 数量规则：实测分配的供应水量 / N；cp_water。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_water`

范围证据需求：需用途、真实出口持留及组成和体积单位状态证据；巧克力凝露不是规定成分或已量化损失。

###### 实际独立记录的合成洗涤剂投入 (`cleaning_supplies_synthetic_detergent`)

仅适用于产品配方、供应状态及用途记录确认的实际合成表面活性洗涤剂。记录扣除包装皮重的材料净量，区分浓缩液与稀释水，整体配方与组分不得相加重复计入。肥皂、消毒剂、抹布、滤材等仍按各自实际身份记录，不预设清洁配方、剂量或发生。

- 选定流：洗涤剂 `1c57d123-df57-49ab-b9d4-957403beb8a5`
- 流属性/单位：Mass / kg
- 数量规则：分配的实际制剂供应量 / N；cp_supplies。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_supplies`

范围证据需求：需活性载体基准稀释原生采购单位密度温度来源及真实使用，不从安全标签取用量或默认药剂释放。

###### 实际独立记录的聚乙烯包装薄膜 (`extra_packing_pe_film`)

仅适用于实际独立供应、供本服务新增包裹或衬垫使用的聚乙烯薄膜，须确认实际聚合物配方与薄膜净量。该身份为工厂门通用生产组合，仍须记录实际供给门、供应方及另负责任的交付负荷。不预设LDPE/HDPE牌号、再生比例、厚度或用量。PVC、PET、PP、多层复合材料、胶黏标签、填充包装及继承商品包装仍按余项独立身份处理；整体供应与组分不得重复计量，不预设发生。

- 选定流：聚乙烯薄膜 `e64eb06c-6dc9-45f1-b003-3dc6c44b27e2`
- 流属性/单位：Mass / kg
- 数量规则：分配的新增包材供应量 / N；cp_supplies。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_supplies`

范围证据需求：需真实数量面积长度质量原生库存退回、实测换算及独立原一层包装，不假定每订单包装量。

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 已完成的密封黑巧克力条控温控湿干燥库自营批发批次服务 (`accepted_service`)

实际企业客户批次按所有权转售、库房产品条件及质量包装门槛唯一验收；巧克力商品和原包材不是服务身份。

- 选定流：已完成的密封黑巧克力条控温控湿干燥库自营批发批次服务
- 流属性/单位：Count / Item(s)
- 数量规则：1 Item(s)
- 数值来源模式：`fixed_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_lots`

范围证据需求：参考次数仅定义服务归一化，不等于条数巧克力净质量利润或统一可可组成；需实际商业批次门槛与品项数量。

##### 废物流

###### 废弃密封黑巧克力条包装整件 (`sealed_bar_rejects_atomic_case`)

仅在实际独立记录确认“废弃密封黑巧克力条包装整件”时适用。本卡只覆盖该命名实物状态及自身实际净量、保留组成和接收门。其他部件、碎片、游离液、独立包装及清理载体仍属于`sealed_bar_rejects`中的强制完成记录；不得移动边界、预设事件、将库存差当废弃，或把仍保留在整体流内的组分另算出口。实际混收流须匹配自身准确身份。原有原生单位数量协议只用于本独占具体情形，其他实际去向分别协调。

- 选定流：废弃密封黑巧克力条包装整件
- 流属性/单位：Mass / kg
- 数量规则：实测分配的整件不合格单元质量 / N；cp_lots。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_lots`

范围证据需求：需真实条数毛一层皮重巧克力净质量状态验收决策及原放行密封条损失换算责任；外观不能定义损失可可脂糖千克或排放。

###### 废弃无包装黑巧克力 (`separated_chocolate_waste_atomic_case`)

仅在实际独立记录确认“废弃无包装黑巧克力”时适用。本卡只覆盖该命名实物状态及自身实际净量、保留组成和接收门。其他部件、碎片、游离液、独立包装及清理载体仍属于`separated_chocolate_waste`中的强制完成记录；不得移动边界、预设事件、将库存差当废弃，或把仍保留在整体流内的组分另算出口。实际混收流须匹配自身准确身份。原有原生单位数量协议只用于本独占具体情形，其他实际去向分别协调。

- 选定流：废弃无包装黑巧克力
- 流属性/单位：Mass / kg
- 数量规则：实测分配的巧克力残余量 / N；cp_loss。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_loss`

范围证据需求：需原批次、实测巧克力与污染清洁材料、状态接收方及独立原交付点损失链接；不把起霜换算为质量损失。

###### 实际单独收集的纸类包装废物 (`packing_waste_paper_pack`)

仅适用于本节点实际独立废弃、单独收集的纸类包装，保留实际湿态或收集状态、组成、接收方及处理运输责任。污染或混收形成的混合流须使用其自身经核实的身份，材料组分仅作不可相加审计。仍在用的周转包装不是本废物，不预设组成、数量、回收或处理。

- 选定流：包装废弃物，纸类 `6b6f1025-cb6a-4c9d-9947-7726c4307a76`
- 流属性/单位：Mass / kg
- 数量规则：实测分配的分离废包材量 / N；cp_waste。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_waste`

范围证据需求：需真实材料皮重污染、整件部分不重复、接收回收处理边界；收集本身不是回收利用或避免生产。


###### 实际单独收集的金属包装废物 (`packing_waste_metal_pack`)

仅适用于本节点实际独立废弃、单独收集的金属包装，保留实际湿态或收集状态、组成、接收方及处理运输责任。污染或混收形成的混合流须使用其自身经核实的身份，材料组分仅作不可相加审计。仍在用的周转包装不是本废物，不预设组成、数量、回收或处理。

- 选定流：金属包装废物 `cdda6013-c0c5-4c72-990a-f5668fe71069`
- 流属性/单位：Mass / kg
- 数量规则：实测分配的分离废包材量 / N；cp_waste。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_waste`

范围证据需求：需真实材料皮重污染、整件部分不重复、接收回收处理边界；收集本身不是回收利用或避免生产。


###### 实际单独收集的塑料包装废物 (`packing_waste_plastic_pack`)

仅适用于实际独立废弃、单独收集的空塑料包装，保留实际组成、含水状态及接收方。含残留商品的混合包装、污染混合流、设备内保温泡沫、一次性抹布及复合包装不使用本分支；整体混合流中的组分仅作不可相加审计，运输处理责任计入一次。不预设排空、回收、发生或数量。

- 选定流：塑料包装废物 `919351c4-3e25-4092-9934-73ecec021a3b`
- 流属性/单位：Mass / kg
- 数量规则：实测分配的分离废包材量 / N；cp_waste。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_waste`

范围证据需求：需真实材料皮重污染、整件部分不重复、接收回收处理边界；收集本身不是回收利用或避免生产。

##### 基本流

###### 实际有独立证据的向空气排放化石二氧化碳 (`other_actual_species_co2_fossil_air`)

仅在实际证据确认化石来源、二氧化碳物种和向空气直接释放时适用。保留报告的碳或CO2基准，碳转CO2须独立有证据的化学计量，不预设系数或发生。 本卡仅记录本节点实际直接释放，不重复计入外购电力上游或供应商已覆盖排放。UUID表示未细分子介质的空气排放，其他实际子介质或来源仍须在余项中匹配，不能改标；缺失数据不等于零。

- 选定流：二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 流属性/单位：Mass / kg
- 数量规则：实测或有据实际活动物种释放量 / N；cp_species。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_species`

范围证据需求：需物质介质实测或兼容活动因子组成去向单位基准来源；不以未知库存差额或气味作为物种量。


###### 实际有独立证据的向空气排放化石甲烷 (`other_actual_species_methane_fossil_air`)

仅在实际证据确认化石来源、甲烷物种和向空气直接释放时适用。生物源或来源未知甲烷仍在余项要求中，不得改标化石源；不预设泄漏发生、气体比例、数量或排放系数。 本卡仅记录本节点实际直接释放，不重复计入外购电力上游或供应商已覆盖排放。UUID表示未细分子介质的空气排放，其他实际子介质或来源仍须在余项中匹配，不能改标；缺失数据不等于零。

- 选定流：甲烷 (化石源) `08a91e70-3ddc-11dd-9610-0050c2490048`
- 流属性/单位：Mass / kg
- 数量规则：实测或有据实际活动物种释放量 / N；cp_species。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_species`

范围证据需求：需物质介质实测或兼容活动因子组成去向单位基准来源；不以未知库存差额或气味作为物种量。


###### 实际有独立证据的向空气排放氧化亚氮 (`other_actual_species_nitrous_oxide_air`)

仅在实际证据确认氧化亚氮物种及向空气直接释放时适用。原生数量为N2O质量，不是氮质量或氮气质量，不预设排放系数或发生。 本卡仅记录本节点实际直接释放，不重复计入外购电力上游或供应商已覆盖排放。UUID表示未细分子介质的空气排放，其他实际子介质或来源仍须在余项中匹配，不能改标；缺失数据不等于零。

- 选定流：一氧化二氮 `08a91e70-3ddc-11dd-94c3-0050c2490048`
- 流属性/单位：Mass / kg
- 数量规则：实测或有据实际活动物种释放量 / N；cp_species。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_species`

范围证据需求：需物质介质实测或兼容活动因子组成去向单位基准来源；不以未知库存差额或气味作为物种量。

## 7. 分配与联产品处理

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| allocation_accepted | all inventory | 采用真实唯一验收集合 N 及有据因果期间批次驱动量，保留失败隔离退回订单、待机清洁资源及未完成跨期结转，不删除活动或用价格利润作物理服务量。 |  |
| allocation_goods | nonexchange merchandise stock | 按互斥状态核对真实归属期初净收货买方退回期末销售退供货方其他外部出口及废弃。隔离为内部移动，起霜本身不移除质量。真实物理损失对应兼容原放行密封条状态及包材去向，具数量单位换算来源、负担责任和已含损失覆盖，独立上游集成仅一次。 |  |
| allocation_supplies | extra supplies and usable_extra_return | 各原生物资用 S=归属期初+真实外部净收货-包含回收结存的期末；内部领用回收不作新收货。总供应输入 S 并单独记录匹配未用外退输出，或仅耗用输入 S-return 且省去同范围匹配退回交换。输入不作S+退回，不再扣减，不删除未退废物溢漏上游负担。 |  |
| allocation_assets | shared_assets | 真实完整资产制造维护清洁更换终结按全部消费方期间的集合兼容驱动量/完整寿命驱动量归属，再除 N 一次。实测寿命或历史加有据剩余终止须兼容单位来源不确定性敏感性更新。完整单位驱动服务是替代视图，不再叠加等价资产。 |  |
| allocation_room_periods | shared control and providers | 各实测兼容期间按集合物理驱动量/全消费方驱动量分配真实完整范围，核对全部消费方、开门待机清洁调控及外部重叠。库存更换终止责任跨截止仅一次。 |  |
| allocation_hvac_fluid | hvac_fluid_supply; usable_hvac_return; hvac_fluid_waste; hvac_air_components | 初始设备充注、储存工质、真实外部收货、内部回收转移、期末充注留存及真实外部去向物理闭合。制造服务已含初始充注工质生产须唯一上游责任。可用外退与回收留存不同；仅证明同范围独立供应库存才可仅耗用扣减。资产来源外送不减无关当期补充或产生负运行投入，只作实际产品转移不自动抵扣。不可用废物释放保留未退上游及实际接收运输处理负担仅一次。 |  |
| allocation_outlets | actual rejects,residues and packing | 采用实际互斥的整件密封单元或已分离巧克力包材清洁残余量及接收路径。退回降级不自动成为废物联产品或避免生产抵扣；整件不加其部分，不单凭起霜气味温度偏离推损失。 |  |



| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| source_scope_normalization | 非交换商品与服务组合 | 原始外部商品库存、来源归属损失及缺阶段新增上游集成量均保留有证据的实际原始作用域。逐量识别一个实际货批、目标服务集合或已经每参考流，并记录来源目标作用域编号与数量口径。来源集合全部出口分母仅把原始量归属该目标范围，不自动等于目标验收服务N。仅与1 Item(s)服务组合时，以同目标范围原始归属量除正数唯一验收source_same_scope_N，记录验收编号时间冲销证据，取得每参考量。有证单货批source_same_scope_N=1，已每参考量不再除。保留实际原始集成量来源链接，不缩小真实上游补阶段量，不用无关N除整个来源集合；N0责任披露不除。 |  |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_lots | controlled_bar_trade | 商业验收、巧克力库存状态与损失链接 | 生产放行所有权库存质量买方记录 | site_id; node_id; period_id; consignment_id; supplier_id; buyer_id; SKU; manufacturer_release; original_gate; plain_dark_formulation; cocoa_state; primary_wrap; bar_count; gross_wrapped_mass; primary_tare; net_chocolate_mass; mass_unit; unit_mass; conversion_factor; conversion_basis; conversion_source; lot_id; manufacture_date; date_conditions; intake_time; dispatch_time; acceptance_time; product_temperature; temperature_unit; humidity; humidity_unit; condensation_event; odour_exposure; bloom_observation; pack_integrity; acceptance_decision; opening; net_receipts; buyer_returns; closing; accepted_sales; supplier_returns; quarantine_internal; other_actual_exits; discarded_whole_units; discarded_mass; commodity_dataset_id; upstream_reference_gate; original_gate_loss_quantity; original_gate_loss_unit; original_gate_loss_state; loss_conversion_basis; loss_conversion_source; assigned_quantity_owner; already_included_loss_coverage; primary_pack_burden_owner; integration_result; receiver_id; N; source_assignment_scope_id; source_assignment_scope_kind; source_quantity_basis; source_target_scope_id; source_same_scope_N; source_same_scope_N_unit; source_same_scope_N_basis; source_same_scope_N_method; source_same_scope_N_state; source_same_scope_N_sample_time; source_same_scope_N_source; source_same_scope_acceptance_ids; source_already_per_reference; raw_integration_scope_link; flow_row_id; actual_identity_case; actual_substance_or_material; actual_state_and_gate; case_activation_evidence; quantity_exclusion_links; whole_total_reconciliation | 统计唯一真实验收企业批次，核对互斥物理库存出口与实际质量决策；保留原放行密封条参考量、状态换算、损失覆盖责任及仅一次商品集成；起霜不是实测物理损失。  原始外部商品库存、来源归属损失及缺阶段新增上游集成量均保留有证据的实际原始作用域。逐量识别一个实际货批、目标服务集合或已经每参考流，并记录来源目标作用域编号与数量口径。来源集合全部出口分母仅把原始量归属该目标范围，不自动等于目标验收服务N。仅与1 Item(s)服务组合时，以同目标范围原始归属量除正数唯一验收source_same_scope_N，记录验收编号时间冲销证据，取得每参考量。有证单货批source_same_scope_N=1，已每参考量不再除。保留实际原始集成量来源链接，不缩小真实上游补阶段量，不用无关N除整个来源集合；N0责任披露不除。 只归属独立确认的实物情形，其他实际去向按来源分别保留；每个原生记录只属于一个交换，任何总量仅作不可相加审计。 | Item(s); bars; kg | 每次收货状态检查验收退回或实际废弃 | 实际生产放行接收至买方验收及截止 | 真实干燥库发货门槛 | 每参考流 | 所有权放行批号校准重量质量温湿记录及定量损失链接 |
| cp_room | controlled_bar_trade | 实际干燥库用电条件期间 | 计量记录仪设备及全部消费方占用 | site_id; node_id; period_id; consignment_id; room_id; equipment_id; meter_id; start_reading; end_reading; energy_unit; product_temperature; room_temperature; ambient_temperature; temperature_unit; humidity; humidity_unit; start_time; end_time; conditioning_event; door_event; idle_event; cleaning_event; cohort_driver; all_consumer_driver; driver_unit; attribution_share; driver_source; provider_overlap; N; flow_row_id; actual_identity_case; actual_substance_or_material; actual_origin_and_medium; actual_state_and_gate; case_activation_evidence; typed_or_residual_quantity; quantity_exclusion_links; whole_total_reconciliation; unresolved_occurrence_not_zero | 测量真实控制搬运使用，将产品库房环境条件与声明要求核对，以有据物理期间比例分配全部消费方，含待机清洁。 按flow_row_id与actual_identity_case划分实际原生记录，仅有证据的分支适用。具体分支与余项在节点内数量互斥，每个实物出入只归属一次，并与相容同范围不可相加总量协调。发生或数量未知仍待采集，不能填零。 | kWh | 每个计量记录控制事件间隔 | 保存发货及归属待机清洁 | 全部实际运行控制搬运设备 | 每参考流 | 电表记录仪校准、全消费方闭合与外部重叠 |
| cp_fuel | controlled_bar_trade | 燃料供应与真实燃烧去向 | 原生燃料库存收货设备使用 | site_id; node_id; period_id; consignment_id; fuel_id; equipment_id; native_unit; opening; gross_receipts; tare; net_receipts; closing_including_recovered; usable_external_return; actual_burn; nonburned_waste; uncontained_loss; all_fates_complete; uncertainty; cohort_driver; all_consumer_driver; driver_unit; N; flow_row_id; actual_identity_case; actual_substance_or_material; actual_origin_and_medium; actual_state_and_gate; case_activation_evidence; typed_or_residual_quantity; quantity_exclusion_links; whole_total_reconciliation; unresolved_occurrence_not_zero | 测量真实原生数量收货，区分实际燃烧退回期末废物未容纳损失；不完整差额须调查，不作差额燃烧。 按flow_row_id与actual_identity_case划分实际原生记录，仅有证据的分支适用。具体分支与余项在节点内数量互斥，每个实物出入只归属一次，并与相容同范围不可相加总量协调。发生或数量未知仍待采集，不能填零。 柴油升转kg须有实际相容密度、温度状态、质量体积比单位及来源，不预设换算。 | L | 每次燃料事件与截止 | 真实归属设备期间 | 实际场内柴油责任 | 每参考流 | 校准库存收货及完整互斥真实去向 |
| cp_water | controlled_bar_trade | 实际水冷凝与容纳废水 | 计量收集组成接收记录 | site_id; node_id; period_id; consignment_id; event_id; origin; purchased_water; volume_unit; collected_cleaning_liquid; collected_condensate; retained_liquid; measured_evaporation; direct_abstraction; direct_outfall; receiving_medium; chocolate_contamination; cleaner_composition; composition_basis; composition_source; density; density_unit; temperature; temperature_unit; receiver_id; treatment_gate; provider_overlap; N; flow_row_id; actual_identity_case; actual_substance_or_material; actual_origin_and_medium; actual_state_and_gate; case_activation_evidence; typed_or_residual_quantity; quantity_exclusion_links; whole_total_reconciliation; unresolved_occurrence_not_zero | 真实购入清洁水和独立冷凝清洁流持留接收方分别测量；直接来源排口须真实水物质展开，不用可见起霜或差额估计。 按flow_row_id与actual_identity_case划分实际原生记录，仅有证据的分支适用。具体分支与余项在节点内数量互斥，每个实物出入只归属一次，并与相容同范围不可相加总量协调。发生或数量未知仍待采集，不能填零。 | m3; actual sampling unit | 每次供应使用收集交接 | 实际作业清洁期间 | 供应及真实容纳处理边界 | 每参考流 | 计量收集状态组成及接收证明 |
| cp_supplies | controlled_bar_trade | 新增物资及匹配可用退回 | 原生品号库存收货使用外退 | site_id; node_id; period_id; consignment_id; SKU; material; native_unit; opening; gross_receipts; tare; net_receipts; closing_including_recovered; usable_external_return; waste; native_quantity; measured_mass; unit_mass; density; density_unit; temperature; temperature_unit; active_fraction; composition_basis; composition_source; dilution; conversion_factor; conversion_unit; conversion_source; matched_supply_id; same_supply_inventory_scope; representation; receiver_id; N; flow_row_id; actual_identity_case; actual_substance_or_material; actual_origin_and_medium; actual_state_and_gate; case_activation_evidence; typed_or_residual_quantity; quantity_exclusion_links; whole_total_reconciliation; unresolved_occurrence_not_zero | 按原生单位采集真实独立新增包材清洁物资及匹配未用退回；总输入单独输出或同范围仅耗用省去退回交换二选一；期末回收为内部，不算新外部移动。 按flow_row_id与actual_identity_case划分实际原生记录，仅有证据的分支适用。具体分支与余项在节点内数量互斥，每个实物出入只归属一次，并与相容同范围不可相加总量协调。发生或数量未知仍待采集，不能填零。 | kg; actual native supply unit | 每次收货使用退回截止 | 实际服务包装清洁期间 | 仅额外服务物资 | 每参考流 | 品号单位库存换算与同范围退回来源 |
| cp_hvac | controlled_bar_trade | 工质供应物理库存及全部外部去向 | 工质设备充注回收维修库存接收记录 | site_id; node_id; period_id; consignment_id; equipment_id; fluid_id; component_id; component_fraction; component_fraction_basis; composition_source; native_unit; opening_stored_fluid; gross_external_receipts; tare; net_external_receipts; initial_equipment_charge; final_equipment_charge; recovered_retained_closing; stored_closing; actual_usable_export; actual_contained_waste; measured_release; wholefluid_release; fate; fate_basis; fate_source; factor_complete; transfer_id; external_owner; fluid_usable_state; container_gross; container_tare; fluid_net; receiver_id; treatment_gate; treatment_dataset; transport_owner; initial_factory_charge_scope; upstream_fluid_burden_owner; asset_or_provider_included_scope; origin_scope; matched_standalone_supply_id; matched_supply_inventory_scope; matched_return_quantity; unmatched_return_quantity; provenance_allocation_source; physical_ledger_closure; uncertainty; cohort_driver; all_consumer_driver; driver_unit; N | 初始设备充注、储存工质、真实外收、内部回收转移及期末充注库存和外部去向闭合；资产服务初始工质生产责任分开，只有同范围独立供应证据才可仅耗用扣退。其他可用外送仅作转移不抵扣或减无关补充。 | kg | 每次真实充注维修回收外送废物释放截止 | 完整实际归属暖通期间 | 实际设备及独立工质责任 | 每参考流 | 维修称重混合物来源接收处理物理闭合证据 |
| cp_provider | controlled_bar_trade | 已物理完成外部服务范围 | 合同完成实际原生资源记录 | site_id; node_id; period_id; consignment_id; provider_id; job_id; completion_gate; actual_quantity; native_unit; scope_start; scope_end; environmental_control_scope; transport_scope; treatment_scope; asset_scope; included_resources; excluded_resources; overlap_owner; cohort_driver; all_consumer_driver; driver_unit; N | 核实计数作业实际完成及完整资源生命周期；其他原生单位须具体交换支持，不强制金额时间转次数。 | Item(s); actual provider native unit | 每次已完成作业 | 实际合同服务期间 | 明确上游下游服务门槛 | 每参考流 | 物理完成原生支持完整重叠责任 |
| cp_assets | controlled_bar_trade | 全寿命共享干燥库运输资产 | 资产台账生命周期兼容使用驱动 | site_id; node_id; period_id; consignment_id; asset_id; asset_native_unit; manufacture_dataset; initial_fluid_included_scope; maintenance_cleaning_scope; replacement_events; end_of_life_scope; driver_id; cohort_driver; cohort_driver_unit; all_consumers; lifetime_driver; lifetime_driver_unit; observed_history_driver; observed_history_unit; evidenced_remainder_driver; remainder_driver_unit; remainder_source; termination_state; uncertainty; sensitivity; update_evidence; provider_overlap; N | 取得真实完整制造维护清洁更换终结；按全部消费方期间兼容寿命使用分配，采用实测寿命或历史加有据剩余终止。已含初始暖通充注与服务资源责任唯一。 | Item(s); actual asset/service unit | 每次购置维护更换使用期间 | 实测历史加有据剩余寿命 | 全部纳入共享资产 | 每参考流 | 完整生命周期原生单位使用剩余来源敏感性更新及重叠账 |
| cp_transport | controlled_bar_trade | 实际归属货运及承运控制 | 称重载荷路线换算范围记录 | site_id; node_id; period_id; consignment_id; transfer_id; mode; gross_load; tare; net_load; mass_unit; actual_distance; distance_unit; mass_factor; mass_factor_unit; mass_factor_source; distance_factor; distance_factor_unit; distance_factor_source; temperature_humidity_scope; empty_return_scope; cohort_driver; all_consumer_driver; driver_unit; share; provider_dataset; overlap_owner; N | 实际载荷距离匹配有据单位换算及有依据共享比例，核实承运温湿控制空返范围，路段资源各仅一次。 | kg*km | 每个实际归属路段 | 声明巧克力物资废物物流 | 每运输范围唯一责任 | 每参考流 | 实测载荷路线因子比例完整承运边界 |
| cp_loss | controlled_bar_trade | 真实意外分离巧克力及损失换算 | 事故物理分离组成去向 | site_id; node_id; period_id; consignment_id; incident_id; source_lot; breached_units; collected_gross; container_tare; collected_net; mass_unit; chocolate_fraction; packing_fraction; cleaning_carrier; composition_basis; composition_source; original_gate_quantity; original_gate_unit; conversion_factor; conversion_basis; conversion_source; whole_unit_overlap; commodity_loss_link; receiver_id; treatment_gate; N; flow_row_id; actual_identity_case; actual_substance_or_material; actual_state_and_gate; case_activation_evidence; quantity_exclusion_links; whole_total_reconciliation | 测量实际意外破包残余，区分巧克力包材清洁比例；定量兼容原放行条损失及接收，不重复整件，不用起霜质量估计。 只归属独立确认的实物情形，其他实际去向按来源分别保留；每个原生记录只属于一个交换，任何总量仅作不可相加审计。 | kg; actual compatible native unit | 每次真实事故清洁交接 | 实际归属事故 | 实际残余收集至处理门槛 | 每参考流 | 事故称重组成原交付点换算接收证据 |
| cp_waste | controlled_bar_trade | 真实分离包材及容纳固体 | 分类称重接收处理 | site_id; node_id; period_id; consignment_id; event_id; material; primary_or_extra_pack; quantity; native_unit; package_tare; chocolate_contamination; wet_state; whole_unit_overlap; receiver_id; receiving_route; treatment_dataset; transport_owner; N; flow_row_id; actual_identity_case; actual_substance_or_material; actual_origin_and_medium; actual_state_and_gate; case_activation_evidence; typed_or_residual_quantity; quantity_exclusion_links; whole_total_reconciliation; unresolved_occurrence_not_zero | 称量实际材料状态接收方，核对原一层包装上游责任及整件部分不重复；真实其他化学清洁固体按身份状态展开。 按flow_row_id与actual_identity_case划分实际原生记录，仅有证据的分支适用。具体分支与余项在节点内数量互斥，每个实物出入只归属一次，并与相容同范围不可相加总量协调。发生或数量未知仍待采集，不能填零。 | kg; actual waste unit | 每次真实分离收集交接 | 实际归属损失清洁期间 | 前景出口至接收处理 | 每参考流 | 称重材料状态及完整接收运输边界 |
| cp_species | controlled_bar_trade | 真实非暖通直接物质介质释放 | 测量或匹配活动因子化学证据 | site_id; node_id; period_id; consignment_id; event_id; substance; receiving_medium; measured_release; release_unit; actual_activity; activity_unit; factor; factor_unit; factor_basis; factor_source; factor_complete; composition; composition_basis; composition_source; fate; fate_basis; fate_source; uncertainty; N; flow_row_id; actual_identity_case; actual_substance_or_material; actual_origin_and_medium; actual_state_and_gate; case_activation_evidence; typed_or_residual_quantity; quantity_exclusion_links; whole_total_reconciliation; unresolved_occurrence_not_zero | 先确认真实物质介质，再用实测释放或兼容活动物种因子、整液组成去向；完整物种因子不再乘组成去向，起霜气味库存短缺不是释放量。 按flow_row_id与actual_identity_case划分实际原生记录，仅有证据的分支适用。具体分支与余项在节点内数量互斥，每个实物出入只归属一次，并与相容同范围不可相加总量协调。发生或数量未知仍待采集，不能填零。 | kg | 每次真实来源释放事件 | 实际归属服务清洁期间 | 仅真实直接来源，不含服务已计释放 | 每参考流 | 真实测量或有据来源基准活动匹配及不确定性 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| normalize_trade | 所有清单行 | 真实归属物理量除正数 N 一次；accepted_service 为 1 Item(s)，不是条数巧克力质量。 | 归属数量; N; 关联协议 | 每参考流交换数量 |  |
| period_share | room_electricity; provider_jobs; freight; room_electricity_ac | 各兼容期间以真实完整资源范围乘集合物理驱动量/全消费方驱动量，汇总不重叠期间后用 normalize_trade。 | 期间数量; 集合驱动量; 全消费方驱动量; 单位; 范围责任 | 归属数量 |  |
| asset_share | shared_assets | 完整资产当量 = 集合兼容驱动量/完整寿命驱动量，再用 normalize_trade 一次；相同实际资产只用资产当量或完整单位驱动服务其中一种。 | 完整资产生命周期; 实际驱动单位; 历史; 有据剩余; 终止; cp_assets | 归属完整资产当量 |  |
| supply_stock | handling_diesel; cleaning_supplies; extra_packing; usable_extra_return; cleaning_supplies_synthetic_detergent; extra_packing_pe_film | S=归属期初+外部净收货-包含回收结存的期末。总输入 S 并单独匹配未用退回输出，或仅耗用输入 S-return 并省去匹配退回交换。实际燃烧废物溢漏为独立去向。 | 期初; 毛皮重净收货; 期末; 匹配同范围退回; 口径; 实际燃料去向; cp_fuel; cp_supplies | 不重复的供应外退数量 |  |
| original_bar_loss | sealed_bar_rejects; separated_chocolate_waste; separated_chocolate_waste_atomic_case; sealed_bar_rejects_atomic_case | 按真实品号批号条数净巧克力一层皮重及处置，在外部商品链定量原放行密封条损失数量负担，匹配状态单位换算来源及包材去向；含已含损失覆盖责任与仅一次集成，不用起霜转质量或原可可直接成品捷径。 | 实际批号放行门槛; 原商品数据集; 归属物理数量; 条数净质量皮重; 损失状态单位换算来源; 其他出口覆盖责任; 集成证明; cp_lots; cp_loss | 独立定量链接的原交付点损失巧克力包材负担 |  |

### 数据质量要求

| requirement_id | applies_to | requirement | evidence |
| --- | --- | --- | --- |
| quality_identity | 全部具体交换 | 最终交换前核实真实流属性单位组状态门槛介质；未决品号服务工质物种支持明确保留。 | 完整兼容详情支持证据 |
| quality_room | controlled_bar_trade | 证明真实运行控制、产品库房环境温湿及相关过区气味包装条件，不用供应商通用默认。 | 记录仪计量制造买方条件与质量决策 |
| quality_merchandise | 条库存及损失 | 测量条数毛皮重净量及互斥库存出口，外观不是物理损失。损失匹配实际放行条一层包装及现有上游损失覆盖。 | 批次谱系称重处置与原交付点换算责任 |
| quality_resources | 全部物理责任 | 真实自有外部运输全寿命资产、完整工质库存初始责任去向及真实废物环境路径各仅一次闭合。 | 期间驱动生命周期来源接收重叠记录 |
| quality_chain | 完整商品链 | 实际放行密封条生产及一层包装基线在服务外须完整，原交付点可售损失负担定量各仅一次；原可可不是成品巧克力。 | 完整商品阶段范围及真实集成记录 |

| requirement_id | applies_to | requirement | evidence |
| --- | --- | --- | --- |
| room_electricity | controlled_bar_trade | 本条是强制完成记录，不是虚构清单交换。须按`cp_room`识别`room_electricity`内每项实际inputs/product物料、服务、资产全寿命职责、废物流或物种来源介质，并在最终数据集使用前分别展开为实物或化学身份明确、具原生数量和覆盖责任方的单独卡片。发生、身份或数量缺失仍待采集并阻断完成，不能填零或删项。原有全部范围、证据、数量范围、库存去向、换算及供应接收职责均保留在下方完整采集定义。 | `cp_room`; 实际来源关联原生记录 |
| cleaning_water | controlled_bar_trade | 本条是强制完成记录，不是虚构清单交换。须按`cp_water`识别`cleaning_water`内每项实际inputs/product物料、服务、资产全寿命职责、废物流或物种来源介质，并在最终数据集使用前分别展开为实物或化学身份明确、具原生数量和覆盖责任方的单独卡片。发生、身份或数量缺失仍待采集并阻断完成，不能填零或删项。原有全部范围、证据、数量范围、库存去向、换算及供应接收职责均保留在下方完整采集定义。 | `cp_water`; 实际来源关联原生记录 |
| cleaning_supplies | controlled_bar_trade | 本条是强制完成记录，不是虚构清单交换。须按`cp_supplies`识别`cleaning_supplies`内每项实际inputs/product物料、服务、资产全寿命职责、废物流或物种来源介质，并在最终数据集使用前分别展开为实物或化学身份明确、具原生数量和覆盖责任方的单独卡片。发生、身份或数量缺失仍待采集并阻断完成，不能填零或删项。原有全部范围、证据、数量范围、库存去向、换算及供应接收职责均保留在下方完整采集定义。 | `cp_supplies`; 实际来源关联原生记录 |
| extra_packing | controlled_bar_trade | 本条是强制完成记录，不是虚构清单交换。须按`cp_supplies`识别`extra_packing`内每项实际inputs/product物料、服务、资产全寿命职责、废物流或物种来源介质，并在最终数据集使用前分别展开为实物或化学身份明确、具原生数量和覆盖责任方的单独卡片。发生、身份或数量缺失仍待采集并阻断完成，不能填零或删项。原有全部范围、证据、数量范围、库存去向、换算及供应接收职责均保留在下方完整采集定义。 | `cp_supplies`; 实际来源关联原生记录 |
| hvac_fluid_supply | controlled_bar_trade | 本条是强制完成记录，不是虚构清单交换。须按`cp_hvac`识别`hvac_fluid_supply`内每项实际inputs/product物料、服务、资产全寿命职责、废物流或物种来源介质，并在最终数据集使用前分别展开为实物或化学身份明确、具原生数量和覆盖责任方的单独卡片。发生、身份或数量缺失仍待采集并阻断完成，不能填零或删项。原有全部范围、证据、数量范围、库存去向、换算及供应接收职责均保留在下方完整采集定义。 | `cp_hvac`; 实际来源关联原生记录 |
| provider_jobs | controlled_bar_trade | 本条是强制完成记录，不是虚构清单交换。须按`cp_provider`识别`provider_jobs`内每项实际inputs/product物料、服务、资产全寿命职责、废物流或物种来源介质，并在最终数据集使用前分别展开为实物或化学身份明确、具原生数量和覆盖责任方的单独卡片。发生、身份或数量缺失仍待采集并阻断完成，不能填零或删项。原有全部范围、证据、数量范围、库存去向、换算及供应接收职责均保留在下方完整采集定义。 | `cp_provider`; 实际来源关联原生记录 |
| shared_assets | controlled_bar_trade | 本条是强制完成记录，不是虚构清单交换。须按`cp_assets`识别`shared_assets`内每项实际inputs/product物料、服务、资产全寿命职责、废物流或物种来源介质，并在最终数据集使用前分别展开为实物或化学身份明确、具原生数量和覆盖责任方的单独卡片。发生、身份或数量缺失仍待采集并阻断完成，不能填零或删项。原有全部范围、证据、数量范围、库存去向、换算及供应接收职责均保留在下方完整采集定义。 | `cp_assets`; 实际来源关联原生记录 |
| freight | controlled_bar_trade | 本条是强制完成记录，不是虚构清单交换。须按`cp_transport`识别`freight`内每项实际inputs/product物料、服务、资产全寿命职责、废物流或物种来源介质，并在最终数据集使用前分别展开为实物或化学身份明确、具原生数量和覆盖责任方的单独卡片。发生、身份或数量缺失仍待采集并阻断完成，不能填零或删项。原有全部范围、证据、数量范围、库存去向、换算及供应接收职责均保留在下方完整采集定义。 | `cp_transport`; 实际来源关联原生记录 |
| usable_extra_return | controlled_bar_trade | 本条是强制完成记录，不是虚构清单交换。须按`cp_supplies`识别`usable_extra_return`内每项实际outputs/product物料、服务、资产全寿命职责、废物流或物种来源介质，并在最终数据集使用前分别展开为实物或化学身份明确、具原生数量和覆盖责任方的单独卡片。发生、身份或数量缺失仍待采集并阻断完成，不能填零或删项。原有全部范围、证据、数量范围、库存去向、换算及供应接收职责均保留在下方完整采集定义。 | `cp_supplies`; 实际来源关联原生记录 |
| usable_hvac_return | controlled_bar_trade | 本条是强制完成记录，不是虚构清单交换。须按`cp_hvac`识别`usable_hvac_return`内每项实际outputs/product物料、服务、资产全寿命职责、废物流或物种来源介质，并在最终数据集使用前分别展开为实物或化学身份明确、具原生数量和覆盖责任方的单独卡片。发生、身份或数量缺失仍待采集并阻断完成，不能填零或删项。原有全部范围、证据、数量范围、库存去向、换算及供应接收职责均保留在下方完整采集定义。 | `cp_hvac`; 实际来源关联原生记录 |
| sealed_bar_rejects | controlled_bar_trade | 本条是强制完成记录，不是虚构清单交换。须按`cp_lots`识别`sealed_bar_rejects`内每项实际outputs/waste物料、服务、资产全寿命职责、废物流或物种来源介质，并在最终数据集使用前分别展开为实物或化学身份明确、具原生数量和覆盖责任方的单独卡片。发生、身份或数量缺失仍待采集并阻断完成，不能填零或删项。`sealed_bar_rejects_atomic_case`只覆盖自身独占实物状态，其他实际去向仍须完成。原有全部范围、证据、数量范围、库存去向、换算及供应接收职责均保留在下方完整采集定义。 | `cp_lots`; 实际来源关联原生记录 |
| separated_chocolate_waste | controlled_bar_trade | 本条是强制完成记录，不是虚构清单交换。须按`cp_loss`识别`separated_chocolate_waste`内每项实际outputs/waste物料、服务、资产全寿命职责、废物流或物种来源介质，并在最终数据集使用前分别展开为实物或化学身份明确、具原生数量和覆盖责任方的单独卡片。发生、身份或数量缺失仍待采集并阻断完成，不能填零或删项。`separated_chocolate_waste_atomic_case`只覆盖自身独占实物状态，其他实际去向仍须完成。原有全部范围、证据、数量范围、库存去向、换算及供应接收职责均保留在下方完整采集定义。 | `cp_loss`; 实际来源关联原生记录 |
| packing_waste | controlled_bar_trade | 本条是强制完成记录，不是虚构清单交换。须按`cp_waste`识别`packing_waste`内每项实际outputs/waste物料、服务、资产全寿命职责、废物流或物种来源介质，并在最终数据集使用前分别展开为实物或化学身份明确、具原生数量和覆盖责任方的单独卡片。发生、身份或数量缺失仍待采集并阻断完成，不能填零或删项。原有全部范围、证据、数量范围、库存去向、换算及供应接收职责均保留在下方完整采集定义。 | `cp_waste`; 实际来源关联原生记录 |
| contained_effluent | controlled_bar_trade | 本条是强制完成记录，不是虚构清单交换。须按`cp_water`识别`contained_effluent`内每项实际outputs/waste物料、服务、资产全寿命职责、废物流或物种来源介质，并在最终数据集使用前分别展开为实物或化学身份明确、具原生数量和覆盖责任方的单独卡片。发生、身份或数量缺失仍待采集并阻断完成，不能填零或删项。原有全部范围、证据、数量范围、库存去向、换算及供应接收职责均保留在下方完整采集定义。 | `cp_water`; 实际来源关联原生记录 |
| hvac_fluid_waste | controlled_bar_trade | 本条是强制完成记录，不是虚构清单交换。须按`cp_hvac`识别`hvac_fluid_waste`内每项实际outputs/waste物料、服务、资产全寿命职责、废物流或物种来源介质，并在最终数据集使用前分别展开为实物或化学身份明确、具原生数量和覆盖责任方的单独卡片。发生、身份或数量缺失仍待采集并阻断完成，不能填零或删项。原有全部范围、证据、数量范围、库存去向、换算及供应接收职责均保留在下方完整采集定义。 | `cp_hvac`; 实际来源关联原生记录 |
| hvac_air_components | controlled_bar_trade | 本条是强制完成记录，不是虚构清单交换。须按`cp_hvac`识别`hvac_air_components`内每项实际outputs/elementary物料、服务、资产全寿命职责、废物流或物种来源介质，并在最终数据集使用前分别展开为实物或化学身份明确、具原生数量和覆盖责任方的单独卡片。发生、身份或数量缺失仍待采集并阻断完成，不能填零或删项。原有全部范围、证据、数量范围、库存去向、换算及供应接收职责均保留在下方完整采集定义。 | `cp_hvac`; 实际来源关联原生记录 |
| other_actual_species | controlled_bar_trade | 本条是强制完成记录，不是虚构清单交换。须按`cp_species`识别`other_actual_species`内每项实际outputs/elementary物料、服务、资产全寿命职责、废物流或物种来源介质，并在最终数据集使用前分别展开为实物或化学身份明确、具原生数量和覆盖责任方的单独卡片。发生、身份或数量缺失仍待采集并阻断完成，不能填零或删项。原有全部范围、证据、数量范围、库存去向、换算及供应接收职责均保留在下方完整采集定义。 | `cp_species`; 实际来源关联原生记录 |


### 强制清单完成记录

以下为强制采集和展开定义，不是交换，也不是填零占位符。正文引用的集合或余项编号对应这些完成要求。最终前景数据集完成前，每个实际情形都须成为具自身证据的原子交换；第6节条件卡不预设发生。独立投入、资产全寿命、互斥供应运输结果、实际废物接收流及每个实际基本流物种介质均须保留，不能因未分配通用UUID而静默漏掉。独占实际情形须与原生总量协调，组分视图不可重复相加。

#### room_electricity

计入实际调温除湿循环通风照明搬运电力及待机化霜开门清洁期间，避免完整外部暖通库房服务已含电力重复。

本卡为独立身份分支`room_electricity_ac`之外的余项清单要求。已计入分支的实际数量不再计入本未解析完成要求，原类目总量仅作不可相加的协调审计。其他实际材料、状态、来源或介质仍须保留自身经核实的身份、原生数量及供应接收责任；记录缺失时，不推定条件分支发生、不发生或数量为零。

- 身份采集要求：实际干燥库环境控制及搬运用电
- 流属性/单位：Energy / kWh
- 数量规则：分配的计量电量 / N；cp_room。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_room`

范围证据需求：需真实产品库房环境温湿度、分期电表及全部消费方物理驱动量；供应商存储条件不转为能耗基准。

#### cleaning_water

正常密封巧克力不加水；记录实际清洁水及独立冷凝废水，环境水源须另列实际来源交换。

本卡为独立身份分支`cleaning_water_liquid_tap`之外的余项清单要求。已计入分支的实际数量不再计入本未解析完成要求，原类目总量仅作不可相加的协调审计。其他实际材料、状态、来源或介质仍须保留自身经核实的身份、原生数量及供应接收责任；记录缺失时，不推定条件分支发生、不发生或数量为零。

- 身份采集要求：实际场地容器清洁购入水
- 流属性/单位：Volume / m3
- 数量规则：实测分配的供应水量 / N；cp_water。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_water`

范围证据需求：需用途、真实出口持留及组成和体积单位状态证据；巧克力凝露不是规定成分或已量化损失。

#### cleaning_supplies

实际场地设备材料品号配方，不是巧克力配方；原生单位变体须具体交换，质量视图需实测换算。

本卡为独立身份分支`cleaning_supplies_synthetic_detergent`之外的余项清单要求。已计入分支的实际数量不再计入本未解析完成要求，原类目总量仅作不可相加的协调审计。其他实际材料、状态、来源或介质仍须保留自身经核实的身份、原生数量及供应接收责任；记录缺失时，不推定条件分支发生、不发生或数量为零。

- 身份采集要求：实际库房商业清洁制剂
- 流属性/单位：Mass / kg
- 数量规则：分配的实际制剂供应量 / N；cp_supplies。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_supplies`

范围证据需求：需活性载体基准稀释原生采购单位密度温度来源及真实使用，不从安全标签取用量或默认药剂释放。

#### extra_packing

仅纳入本项供应的新增外箱衬材标签包裹；制造者密封一层包装属原巧克力商品上游，不每次转售新增。

本卡为独立身份分支`extra_packing_pe_film`之外的余项清单要求。已计入分支的实际数量不再计入本未解析完成要求，原类目总量仅作不可相加的协调审计。其他实际材料、状态、来源或介质仍须保留自身经核实的身份、原生数量及供应接收责任；记录缺失时，不推定条件分支发生、不发生或数量为零。

- 身份采集要求：实际新增批发二级包装物资
- 流属性/单位：Mass / kg
- 数量规则：分配的新增包材供应量 / N；cp_supplies。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_supplies`

范围证据需求：需真实数量面积长度质量原生库存退回、实测换算及独立原一层包装，不假定每订单包装量。

#### hvac_fluid_supply

仅实际具名制冷剂或工质采购及组成确切范围；设备服务制造已含出厂初始充注不再作为运行工质重复购入。

- 身份采集要求：实际独立供应的暖通工质
- 流属性/单位：Mass / kg
- 数量规则：分配的独立供应工质质量 / N；cp_hvac。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_hvac`

范围证据需求：需真实工质身份充注来源责任、库存充注回收外送废物释放及组分基准；补充不等泄漏，回收不算新外部收货。

#### provider_jobs

仅合同已物理完成且上游资源完整的计数作业；按面积时间质量工时能源货运提供的服务须原生核实交换，不用金额或强行次数。

- 身份采集要求：完整计数的外部干燥库支持作业
- 流属性/单位：Count / Item(s)
- 数量规则：分配的已完成服务作业数 / N；cp_provider。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_provider`

范围证据需求：需实际完成门槛、环境控制资源资产处理范围及重叠责任，供应边界缺失则不完整。

#### shared_assets

按全部消费方期间记录真实库房暖通传感器货架托盘筐责任，含完整制造维护清洁更换和寿命终结。

- 身份采集要求：干燥库搬运及周转运输资产完整寿命当量
- 流属性/单位：Count / Item(s)
- 数量规则：分配的完整资产当量 / N；cp_assets。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_assets`

范围证据需求：需兼容集合寿命驱动量、实测使用或历史加有据剩余终止、来源不确定性敏感性更新；不按每次周转新制造托盘，也不因折旧记零。

#### freight

采用实际路段载荷路线及唯一商品服务责任，披露承运已含温湿控制设备与空返负担。

- 身份采集要求：巧克力物资废物实际归属货运
- 流属性/单位：Mass * distance / kg*km
- 数量规则：分配的实际货运千克乘千米 / N；cp_transport。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_transport`

范围证据需求：需毛皮重净载荷距离、兼容因子单位来源及分配比例全部用户驱动量，不假额定载重或路线。

#### usable_extra_return

仅匹配未用物资退给外部所有者；商品库存退回、制造者原一层包装、周转资产与回收期末物资不自动作为本出口。

- 身份采集要求：实际未用新增服务物资外退
- 流属性/单位：Mass / kg
- 数量规则：实测分配的未用物资外送量 / N；cp_supplies。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_supplies`

范围证据需求：需同范围原生供应来源状态数量接收方；总供应输入加独立可用退回输出，或匹配仅耗用供应且省去退回交换；输入不作S+退回，也不重复抵扣。

#### usable_hvac_return

实际回收未用工质只有可用状态及外部接收门槛明确才作为产品；回收留存为期末库存，资产初始充注来源和运行补充须分开。

- 身份采集要求：实际转给外部所有者的可用暖通工质
- 流属性/单位：Mass / kg
- 数量规则：实测分配的实际可用工质外送量 / N；cp_hvac。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_hvac`

范围证据需求：需匹配工质来源充注范围接收方；仅同独立供应库存可按仅耗用扣减。资产来源外送只作真实转移，不减无关补充或自动替代抵扣。

#### sealed_bar_rejects

仅真实有记录废弃决策接收方；起霜到期隔离退货本身不证明废物或物理损失，整条加包装不与已分离部分重复。

- 身份采集要求：废物交接处实际废弃的整件密封巧克力单元
- 流属性/单位：Mass / kg
- 数量规则：实测分配的整件不合格单元质量 / N；cp_lots。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_lots`

范围证据需求：需真实条数毛一层皮重巧克力净质量状态验收决策及原放行密封条损失换算责任；外观不能定义损失可可脂糖千克或排放。

#### separated_chocolate_waste

仅真实破包事故清洁，不代表主动熔化调温回收；巧克力残包材清洁载体分开且不重复整包废物。

- 身份采集要求：意外破包后实际收集的巧克力残余
- 流属性/单位：Mass / kg
- 数量规则：实测分配的巧克力残余量 / N；cp_loss。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_loss`

范围证据需求：需原批次、实测巧克力与污染清洁材料、状态接收方及独立原交付点损失链接；不把起霜换算为质量损失。

#### packing_waste

真实废物接收方的实际材料；原一层包装生产在商品上游，真实损失处理在本服务内；不假定每件收到包材均成为仓库废物。

本卡为独立身份分支`packing_waste_paper_pack`; `packing_waste_metal_pack`; `packing_waste_plastic_pack`之外的余项清单要求。已计入分支的实际数量不再计入本未解析完成要求，原类目总量仅作不可相加的协调审计。其他实际材料、状态、来源或介质仍须保留自身经核实的身份、原生数量及供应接收责任；记录缺失时，不推定条件分支发生、不发生或数量为零。

- 身份采集要求：实际分离的一层包装与新增废包材
- 流属性/单位：Mass / kg
- 数量规则：实测分配的分离废包材量 / N；cp_waste。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_waste`

范围证据需求：需真实材料皮重污染、整件部分不重复、接收回收处理边界；收集本身不是回收利用或避免生产。

#### contained_effluent

仅真实收集液流，分别记录来源与巧克力清洁剂污染；直接排口须真实接收水物质交换，不用容纳态替代。

- 身份采集要求：实际送处理的容纳态清洁或暖通冷凝液
- 流属性/单位：Volume / m3
- 数量规则：实测分配的容纳态液废量 / N；cp_water。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_water`

范围证据需求：需体积状态密度温度组成基准及真实接收方；不从可见糖霜诊断推凝水或糖释放。

#### hvac_fluid_waste

实际不可用工质送核实处理回收，与可用外送、回收留存和大气释放分开，保留接收及上游生产责任。

- 身份采集要求：回收处理门槛处实际容纳态不可用暖通工质
- 流属性/单位：Mass / kg
- 数量规则：实测分配的容纳态废工质质量 / N；cp_hvac。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_hvac`

范围证据需求：需工质组成容器皮重净量、转移处理运输覆盖；废物不扣供应，也不自动抵扣回收。

#### hvac_air_components

仅实际组分物质与空气介质释放按核实测量或有据完整去向展开；补充或充注差额不自动等于泄漏。

- 身份采集要求：实际向空气释放的已识别暖通工质组分
- 流属性/单位：Mass / kg
- 数量规则：实际分配的组分空气释放量 / N；cp_hvac。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_hvac`

范围证据需求：需明确工质组分比例基准来源、真实释放去向及不确定性；完整物种因子不重复乘组成去向。

#### other_actual_species

仅实际燃烧化学溢漏水及其他非暖通释放；脂霜糖霜为质量状态观察，不是直接基本流或新脂肪糖生产。

本卡为独立身份分支`other_actual_species_co2_fossil_air`; `other_actual_species_methane_fossil_air`; `other_actual_species_nitrous_oxide_air`之外的余项清单要求。已计入分支的实际数量不再计入本未解析完成要求，原类目总量仅作不可相加的协调审计。其他实际材料、状态、来源或介质仍须保留自身经核实的身份、原生数量及供应接收责任；记录缺失时，不推定条件分支发生、不发生或数量为零。

- 身份采集要求：其他实际已识别直接物质及接收介质
- 流属性/单位：Mass / kg
- 数量规则：实测或有据实际活动物种释放量 / N；cp_species。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_species`

范围证据需求：需物质介质实测或兼容活动因子组成去向单位基准来源；不以未知库存差额或气味作为物种量。

## 9. 验证规则

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| validate_count | accepted_service | 需真实买入转售企业验收、唯一正数 N 及全部参考限定；商品条数托盘移动隔离取消订单不自动成为已完成服务。 |  |
| validate_control | controlled_bar_trade | 需实际运行监测的干燥库干预及真实巧克力包装质量温湿条件；排除主动制造返工及供应商默认安全保证。 | callebaut-chocolate-store-text |
| validate_quality | stock and bloom | 脂霜糖霜凝露气味到期观察须有实际检查处置记录，不能单独量化质量损失、化学投入、排放或废物。 | callebaut-fat-bloom-text; callebaut-sugar-bloom-text |
| validate_native | all inventory | 保留实际原生单位 N 换算来源及属性支持；不令条数=千克、价格=次数、原可可=成品条，不替用通用能源属性。 |  |
| validate_scope | assets,providers,fluid and freight | 需完整范围、全寿命驱动单位历史剩余终止及全消费方闭合；不重复工厂暖通充注，不把外部回收当新收货，不把资产来源退回扣无关补充，不自动抵扣。 |  |
| validate_outlets | actual waste and releases | 证明真实整件部分互斥残余、接收处理及物质介质。实际直接水化学工质角色须专门交换；未知差额或整剂不能作物种。 |  |
| validate_chain | commodity and service combination | 全部商品制造一层包装含损失上游在服务外；实际原交付点损失状态归属量其他出口现有覆盖及负担责任，须形成仅一次完整商品集成。 |  |


## 10. 发布数据集画像

| Field | Value |
| --- | --- |
| dataset_role | 实际具体交换和数量证据核实后可用作 secondary_dataset; background_dataset |
| downstream_use | 真实已放行密封纯黑巧克力条商品链的物理控温控湿干燥库自营批发附加服务 |
| allowed_use | 声明运行控库企业路径及真实配方可可状态包装条数净质量温湿时间验收分层 |
| excluded_use | 单独完整巧克力足迹；可可巧克力制造；夹心奶白产品；主动再熔调温换装返工；零售代理；金额利润或通用品质或质量换算 |
| required_metadata | 全部参考限定；真实放行商品买方门槛；正数 N；互斥库存其他出口损失换算覆盖；控制服务运输处理及完整资产工质范围 |
| required_quality_disclosure | 未决具体身份支持配置、条件质量测量换算范围限制、真实寿命充注来源及接收服务重叠、商品损失集成不确定性 |
| update_trigger | 配方可可状态包装、控制条件技术、暖通工质或资产寿命、使用服务运输处理范围、观测损失处置基准、验收门槛或证据变化 |


## 11. 数据来源

| source_id | type | reference | used_for |
| --- | --- | --- | --- |
| unsd-cpc3-wholesale-2025 | official_guidance | UNSD.CPC3.0 explanatory notes,division61; https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | 仅用于61025自营可可巧克力糖果批发分类，不作产品事实数量。 |
| callebaut-chocolate-store-text | handbook | Callebaut.Chocolate Academy.How to store chocolate products,public written text; https://www.callebaut.com/en-US/callebaut-chocolate-academy/tutorials/storing/how-to-store | 实际公开文字的稳定温度凝露湿度气味质量问题；不含未看视频或数值作业默认。 |
| callebaut-fat-bloom-text | handbook | Callebaut.The storage temperature was too high,public written text; https://www.callebaut.com/en-US/chocolate-technique/troubleshooting/storage-temperature-high | 仅外观温度变化脂肪迁移背景，夹心机制不作为纯条配方或质量损失安全检测。 |
| callebaut-sugar-bloom-text | handbook | Callebaut.Sugar bloom,a common issue in the world of chocolate,public written text; https://www.callebaut.com/en-US/callebaut-chocolate-academy/tutorials/sugar-bloom | 凝露湿度和表面糖溶解重结晶仅为质量状态背景，不作实际成分水排放量或处置决策。 |
