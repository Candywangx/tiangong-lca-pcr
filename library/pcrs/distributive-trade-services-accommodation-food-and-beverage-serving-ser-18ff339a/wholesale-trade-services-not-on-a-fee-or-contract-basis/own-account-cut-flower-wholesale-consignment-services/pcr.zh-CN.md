---
pcr_id: pcr.own-account-cut-flower-wholesale-consignment-services
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 自营切花批发批次服务

## 1. 范围与适用性

本 PCR 定义在自营购入并转售给企业客户、且实际经营冷藏保存与作业场所的鲜切花批发环节中，按物理活动核算的模块化服务附加项。一个已完成的商业批次为计数参考服务。包括入库检查、物种适用的保鲜、实际实施的补水与修剪、不构成花艺制品制造的订单整理、搬运、清洁、相关物理公共投入及明确归属的物流。

排除种植与采收、活体盆栽、种植材料、花束与花环制造、零售陈列、消费者养护、仅收佣金的代理、无商品买入转售的独立仓储，以及纯财务所有权转移。无物理作业责任的经营者不得使用本 PCR。混合物种须按批次追踪；不规定统一温度、寿命、药剂配方或损耗率。UMass 作业指南与 UC Davis 唐菖蒲实例仅支持物种特定的保鲜问题，不提供通用数量因子。

## 2. 产品类别身份

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.own-account-cut-flower-wholesale-consignment-services |
| classification_refs | CPC 3.0:61012；narrower：自营冷藏切花批发，不含活体植物 |
| covered_products | 具有入库与保鲜记录、自营买入转售及企业客户验收交付的切花批次服务 |
| excluded_products | 栽培切花商品本身；活体盆栽；花艺制品制造；收费代理；零售；仅仓储服务 |
| representative_product | 一个物种与品种、枝长等级、物理数量和冷藏补水状态明确的已验收商业批次 |
| production_route | 自有商品入库与质量检查 -> 物种适用的冷藏保存及实际湿藏或干藏处理 -> 订单作业与企业客户验收；追踪实际不合格品与退回 |
| market_state | 服务在客户验收处完成；切花为声明的商品流经量，记录实际温度、补水及质量交付条件 |


## 3. 参考流

| Field | Value |
| --- | --- |
| What | 已完成的自营切花物理批发批次服务 |
| How much | 1 Item(s)，即一个唯一已完成且验收的批次；不设枝数、千克、订单价格或利润的通用等价关系 |
| How well | 企业客户按实际声明的物种、品种、成熟度、等级、枝长、损伤病害及温度与补水要求验收；本 PCR 不保证未来瓶插寿命 |
| How long or cycle | 实际入库至验收期间，加上归属的待机、清洁、资产寿命及报告期截止负担 |
| reference_flow_link | `accepted_service` |

| Field | Value |
| --- | --- |
| reference_amount | 1 |
| reference_product_flow | 已完成的自营切花批发批次服务 |
| reference_flow_property | 物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` |
| reference_unit_group | 数量单位 `5beb6eed-33a9-47b8-9ede-1dfe8f679159` |
| reference_unit | Item(s) |
| required_qualifiers | ownership_resale_gate; consignment_id; business_buyer; species_cultivar; stem_count; stem_length_grade; net_flower_mass_and_hydration_state; intake_and_acceptance_dates; temperature_and_humidity_records; ethylene_exposure_control; hydration_or_dry_route; treatment_identity_and_actual_use; room_and_transport_scope; reporting_period; loss_adjustment_link |

N 为该批次集合在记录冲销和分配后，唯一已验收商业批次的正数量。不得人为拆分一个订单的交货以稀释负担；保留实际合同与交付单位。商品枝数、质量和含水状态是可比性限定信息，不会自动把一个服务转化为一吨商品。

## 4. 计量与单位规则

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| reference_count | 参考产品 | 物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` | Item(s) | 统计唯一实际验收批次；每参考流的已完成服务数量为 1 Item(s)。失败或取消订单不增加验收输出，其归属作业仍保留在批次集合负担中。 |
| merchandise_basis | 商品审计与残余 | 数量与质量 | stems; kg | 保留枝数、实测净质量、补水沥水状态、物种、等级和时间。修剪碎段改变质量，不自动改变整枝数；无固定每枝质量换算。 |
| native_supply | 所有供应资源 | 实际交换属性 | 实际原生单位 | 按数量、面积、长度、体积或时间供应的物资或服务须对应实际交换并核实支持身份；质量视图须有兼容实测值且不得重复相加。 |
| cold_water_state | 水与花卉记录 | 体积、质量和温度 | m3; kg; 声明的温度单位 | 区分补水吸收、持留液、直接取排水、容纳态废水与实际蒸发。状态、温度与密度须支持换算；不得从差额推断物种释放。 |


## 5. 系统边界

一个前景责任节点按有记录的物种适用冷藏、湿藏或干藏条件保存入库可用切花，并交付已验收的批发批次。干预前为入库购入鲜切花，保鲜后为符合声明客户门槛的切花。入库不合格、冷链偏离、处理事件、清洁换批以及所有实际不合格品和退回出口，均归属本节点。资产制造、维护、更换及寿命终结跨实际服务期间分配。

### 边界概化

| Field | Value |
| --- | --- |
| declared_starting_condition | 已种植并采切的购入商品，声明供应商交付点、物种等级、物理数量和质量、温度、补水状态 |
| starting_condition_role | 商品审计流经量，不是本服务附加项耗用的商品投入，也不重复计入栽培负担 |
| product_classification_scope | 自营企业客户冷藏切花批发服务，为 CPC61012 的语义子集 |
| recursive_input_rule | 同类别外部服务仅可在实际合同上游责任与交付点明确、资源覆盖不重叠时计入；不得对同一批次递归核算 |
| upstream_dataset_requirement | 资源、供应商、资产与处理数据集须与实际单位及生命周期范围兼容；商品生产及损失调整为独立链接的数据集 |
| disclosure | 入库至交付与报告期间、买入转售所有权证据、正数 N、商品损失退回账、上游损失调整链接、冷藏补水处理范围、外部服务与物流重叠归属 |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| boundary_service | all inventory | 本项为服务附加项。排除可售及损失商品的上游生产负担；保留所有实际服务资源、直接释放与损失处理负担。全链数据包完整前，须在独立商品系统量化并且仅一次链接损失商品的上游负担；本服务本身不是完整切花足迹。 |  |
| boundary_preservation | preserved_wholesale | 声明实际物种适用的保鲜状态、库房及批次温湿度记录、乙烯控制、湿藏或干藏路径及实际药剂身份。文献实例不能设定通用温度、浓度、货架寿命或处理许可。 | umass-cutflower-handling; ucdavis-gladiolus-2004 |
| boundary_coverage | all actual responsibilities | 为每项场内作业、外部服务、货运、制冷、维护与处理负担登记责任方；每项实际资源完整且仅计一次。外部服务或直接环境范围不明时，数据不能视为完整。 |  |
| boundary_outlets | all outlets | 可售、降级和退回商品仅记于商品账；退回及废弃均不产生第二个批发服务输出。实际未容纳的水、化学品和燃料损失须按真实介质和物质另建交换并提供证据，不得忽略或假定为零。 |  |


## 6. 过程清单结构

### 过程图

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| preserved_wholesale | 综合冷藏保鲜与自营批发 | required | 实际承担所有权买入转售及冷藏保存责任 | 从入库可用切花状态到企业客户验收的保鲜节点；按批次与期间索引，拥有实际退回与不合格品路径 | `accepted_service` |

本综合节点承担这些活动；不得仅因出现一个动作名称就重复设立保鲜、包装或分级节点。清洁与处理可按物种和库房分批运行，而制冷连续服务多个重叠批次；每次运行、换批与消费期间均须链接。独立签约的上游服务以覆盖明确的投入表示，不重复作为自有活动。条件性卡仅在实际记录证明具体物资、服务、物种、原生单位与接收点时展开；遗漏的实际环境水或气体角色须展开，不得当作零。

### 过程：综合冷藏保鲜与自营批发 (`preserved_wholesale`)

#### 输入

##### 产品流

###### 实际使用点交流电 (`electricity_ac`)

仅适用于实际跨越本节点边界、且未由完整供应商数据覆盖的交流电。该身份未特指供应方、电压、发电组合或交付线损归属，仍须按要求采集。经核实的电力流以1 MJ电能为基准，其ILCD属性名称为净热值；原生kWh按精确的3.6 MJ/kWh换算，不能套用燃料热值系数。直流电或其他不匹配电力状态保留在余项要求中。

- 选定流：交流电 `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- 流属性/单位：Energy / kWh
- 数量规则：实测分配电量千瓦时 / N；cp_energy。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_energy`

范围证据需求：需有库温、环境温度、占用情况和分期间计量及分配依据，包括待机与换批能耗；不设每枝通用耗电量。

###### 场内搬运设备柴油供应 (`diesel_supply`)

仅在实际使用柴油设备时适用；柴油上游供应与实际燃烧分别记录。其他燃料须按原生单位另列交换。

固定身份表示以Mass/kg为参考基准的通用供应柴油；实际牌号、配方、供应方及热值仍须记录，不能预设。保留原生升记录；最终换算为kg须有实际相容密度、温度状态、质量体积比单位及来源，目录不提供默认密度。缺密度时体积转质量仍不完整，不能填零或假定值。供应柴油不等于燃烧柴油、运输服务或直接排放。

- 选定流：柴油 `9d258d75-6792-4f1c-9856-81602ed8f816`
- 流属性/单位：Volume / L
- 数量规则：分配的柴油供应升数 / N；cp_fuel。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_fuel`

范围证据需求：需实测库存、收货、燃烧及互斥的退回、未燃烧废物和损失去向；不得把溢漏推作燃烧。

###### 实际液态处理自来水供给 (`water_supply_liquid_tap`)

仅在实际来源确为处理后的自来水且用于所声明用途时适用。保留实际供应方、水质、温度状态和供应边界，不假定所有供水都是自来水。冰、瓶装矿泉水、再生水、未经处理的水及环境直接取水保留各自实际身份。沿用原卡原生质量或体积基准；最终换算为质量参考量时须有实际相容密度和状态证据，不能把目录中的次要体积关系作为默认现场密度。

- 选定流：自来水 `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- 流属性/单位：Volume / m3
- 数量规则：实测分配的供应水立方米 / N；cp_water。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_water`

范围证据需求：需进水、用途、出水记录及保存、沥水时间和水状态；植物吸水、废水与蒸发不得合并为一个差额。

###### 实际独立记录的聚乙烯包装薄膜 (`packaging_supplies_pe_film`)

仅适用于实际独立供应、供本服务新增包裹或衬垫使用的聚乙烯薄膜，须确认实际聚合物配方与薄膜净量。该身份为工厂门通用生产组合，仍须记录实际供给门、供应方及另负责任的交付负荷。不预设LDPE/HDPE牌号、再生比例、厚度或用量。PVC、PET、PP、多层复合材料、胶黏标签、填充包装及继承商品包装仍按余项独立身份处理；整体供应与组分不得重复计量，不预设发生。

- 选定流：聚乙烯薄膜 `e64eb06c-6dc9-45f1-b003-3dc6c44b27e2`
- 流属性/单位：Mass / kg
- 数量规则：分配的包材供应千克 / N；cp_supplies。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_supplies`

范围证据需求：需品项、材料、原生单位及库存与退回证据；单独质量视图须有实测单件质量或几何与密度，不得重复交换。

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 已完成的自营切花批发批次服务 (`accepted_service`)

经记录证明完成保鲜与作业、所有权买入转售及企业客户验收的一次唯一商业批次服务。切花为商品审计流经量，不是本服务的输出身份。

- 选定流：已完成的自营切花批发批次服务
- 流属性/单位：Count / Item(s)
- 数量规则：1 Item(s)
- 数值来源模式：`fixed_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_lots`

范围证据需求：一个参考单位仅为归一化定义；需验收编号、实际枝数、等级、批次质量与时间；一个批次没有通用枝数或质量。

##### 废物流

###### 废弃鲜切花枝 (`flower_residues_atomic_case`)

仅在实际独立记录确认“废弃鲜切花枝”时适用。本卡只覆盖该命名实物状态及自身实际净量、保留组成和接收门。其他部件、碎片、游离液、独立包装及清理载体仍属于`flower_residues`中的强制完成记录；不得移动边界、预设事件、将库存差当废弃，或把仍保留在整体流内的组分另算出口。实际混收流须匹配自身准确身份。原有原生单位数量协议只用于本独占具体情形，其他实际去向分别协调。

- 选定流：废弃鲜切花枝
- 流属性/单位：Mass / kg
- 数量规则：实测分配的花卉残余千克 / N；cp_lots。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_lots`

范围证据需求：需实际湿润状态、沥水与去向；废弃商品应追溯上游批次数量另作商品损失调整，不得把湿废物质量当作栽培生物量。

###### 实际单独收集的纸类包装废物 (`packaging_waste_paper_pack`)

仅适用于本节点实际独立废弃、单独收集的纸类包装，保留实际湿态或收集状态、组成、接收方及处理运输责任。污染或混收形成的混合流须使用其自身经核实的身份，材料组分仅作不可相加审计。仍在用的周转包装不是本废物，不预设组成、数量、回收或处理。

- 选定流：包装废弃物，纸类 `6b6f1025-cb6a-4c9d-9947-7726c4307a76`
- 流属性/单位：Mass / kg
- 数量规则：实测分配的废包装千克 / N；cp_waste。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_waste`

范围证据需求：需称重分类流、污染情况和接收记录；排除完好周转容器与转入期末的库存。


###### 实际单独收集的金属包装废物 (`packaging_waste_metal_pack`)

仅适用于本节点实际独立废弃、单独收集的金属包装，保留实际湿态或收集状态、组成、接收方及处理运输责任。污染或混收形成的混合流须使用其自身经核实的身份，材料组分仅作不可相加审计。仍在用的周转包装不是本废物，不预设组成、数量、回收或处理。

- 选定流：金属包装废物 `cdda6013-c0c5-4c72-990a-f5668fe71069`
- 流属性/单位：Mass / kg
- 数量规则：实测分配的废包装千克 / N；cp_waste。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_waste`

范围证据需求：需称重分类流、污染情况和接收记录；排除完好周转容器与转入期末的库存。


###### 实际单独收集的塑料包装废物 (`packaging_waste_plastic_pack`)

仅适用于实际独立废弃、单独收集的空塑料包装，保留实际组成、含水状态及接收方。含残留商品的混合包装、污染混合流、设备内保温泡沫、一次性抹布及复合包装不使用本分支；整体混合流中的组分仅作不可相加审计，运输处理责任计入一次。不预设排空、回收、发生或数量。

- 选定流：塑料包装废物 `919351c4-3e25-4092-9934-73ecec021a3b`
- 流属性/单位：Mass / kg
- 数量规则：实测分配的废包装千克 / N；cp_waste。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_waste`

范围证据需求：需称重分类流、污染情况和接收记录；排除完好周转容器与转入期末的库存。

##### 基本流

###### 实际有独立证据的向空气排放化石二氧化碳 (`direct_species_co2_fossil_air`)

仅在实际证据确认化石来源、二氧化碳物种和向空气直接释放时适用。保留报告的碳或CO2基准，碳转CO2须独立有证据的化学计量，不预设系数或发生。 本卡仅记录本节点实际直接释放，不重复计入外购电力上游或供应商已覆盖排放。UUID表示未细分子介质的空气排放，其他实际子介质或来源仍须在余项中匹配，不能改标；缺失数据不等于零。

- 选定流：二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 流属性/单位：Mass / kg
- 数量规则：实测或有效活动因子核算的物种释放千克 / N；cp_emissions。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_emissions`

范围证据需求：需物质、基准、介质及实测释放或匹配实际活动的因子；整剂与组分物种不得相加，危害限值不能作排放量。


###### 实际有独立证据的向空气排放化石甲烷 (`direct_species_methane_fossil_air`)

仅在实际证据确认化石来源、甲烷物种和向空气直接释放时适用。生物源或来源未知甲烷仍在余项要求中，不得改标化石源；不预设泄漏发生、气体比例、数量或排放系数。 本卡仅记录本节点实际直接释放，不重复计入外购电力上游或供应商已覆盖排放。UUID表示未细分子介质的空气排放，其他实际子介质或来源仍须在余项中匹配，不能改标；缺失数据不等于零。

- 选定流：甲烷 (化石源) `08a91e70-3ddc-11dd-9610-0050c2490048`
- 流属性/单位：Mass / kg
- 数量规则：实测或有效活动因子核算的物种释放千克 / N；cp_emissions。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_emissions`

范围证据需求：需物质、基准、介质及实测释放或匹配实际活动的因子；整剂与组分物种不得相加，危害限值不能作排放量。


###### 实际有独立证据的向空气排放氧化亚氮 (`direct_species_nitrous_oxide_air`)

仅在实际证据确认氧化亚氮物种及向空气直接释放时适用。原生数量为N2O质量，不是氮质量或氮气质量，不预设排放系数或发生。 本卡仅记录本节点实际直接释放，不重复计入外购电力上游或供应商已覆盖排放。UUID表示未细分子介质的空气排放，其他实际子介质或来源仍须在余项中匹配，不能改标；缺失数据不等于零。

- 选定流：一氧化二氮 `08a91e70-3ddc-11dd-94c3-0050c2490048`
- 流属性/单位：Mass / kg
- 数量规则：实测或有效活动因子核算的物种释放千克 / N；cp_emissions。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_emissions`

范围证据需求：需物质、基准、介质及实测释放或匹配实际活动的因子；整剂与组分物种不得相加，危害限值不能作排放量。

## 7. 分配与联产品处理

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| allocation_cohort | all inventory | 按有记录的因果关系，将实际失败订单、不合格批次、清洁与待机负担归属同期正数验收批次集合 N。保留供应批次与销售链接；未决不合格品不得计入验收服务。 |  |
| allocation_merchandise | merchandise and loss ledger | 不得按金额或利润分配物理服务，也不得把全部切花采购作为耗用投入。以兼容单位核对期初、收货、买方退回、期末、验收销售、退供货方、降级和整枝废弃。修剪及水分与呼吸变化另需质量证据。原交付点损失商品数量与上游负担在服务之外定量链接且仅计一次；湿废弃质量不自动等于原栽培切花质量。 |  |
| allocation_stock | supply rows and usable_supply_returns | 各物资的 S 为归属的期初库存加外部收货减包含回收结存的期末库存；内部领用不是新采购。采用总供应含出口 S/N 并匹配可用外送退回，或采用仅耗用 (S-usable_return)/N 并从交换总量省去匹配退回，二者只能选一。不得重复扣退料、从上游供应扣废物，或把期末库存当外送退回。 |  |
| allocation_assets | shared_assets | 按本批次集合实际驱动量 / 全寿命总驱动量归属资产制造、维护、更换与寿命终结，再除以 N 一次。证据为实测寿命使用量，或已发生历史加有依据的剩余使用及终止处理；声明不确定性、敏感性并随使用变化更新。生命周期完整的单位驱动量服务是另一种原生交换视图，不得与同一资产当量相加。 |  |
| allocation_period | all shared resources | 索引期间、重叠批次、库房占用及服务阶段；按同期间实测负担乘批次集合驱动量 / 所有消费方驱动量汇总。包括启动、待机和换批，库存跨期结转，更换事件仅计一次；期间合计须与实测范围闭合。 |  |
| allocation_rejects | flower_residues; packaging_waste; wastewater; packaging_waste_paper_pack; packaging_waste_metal_pack; packaging_waste_plastic_pack; flower_residues_atomic_case | 采用实际不合格品、退供货方、降级、回收或废弃路径及对应接收方。物理处理负担仅计一次，不因有用出口而自动获得替代抵扣或联产品分配。物资退回与废物路径完整，未退回部分保留资源上游负担。 |  |



| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| source_scope_normalization | 非交换商品与服务组合 | 原始外部商品库存、来源归属损失及缺阶段新增上游集成量均保留有证据的实际原始作用域。逐量识别一个实际货批、目标服务集合或已经每参考流，并记录来源目标作用域编号与数量口径。来源集合全部出口分母仅把原始量归属该目标范围，不自动等于目标验收服务N。仅与1 Item(s)服务组合时，以同目标范围原始归属量除正数唯一验收source_same_scope_N，记录验收编号时间冲销证据，取得每参考量。有证单货批source_same_scope_N=1，已每参考量不再除。保留实际原始集成量来源链接，不缩小真实上游补阶段量，不用无关N除整个来源集合；N0责任披露不除。 |  |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_lots | preserved_wholesale | 服务验收与商品审计 | 销售、批次与残余记录 | site_id; node_id; period_id; consignment_id; source_lot_id; supplier_id; ownership_evidence; buyer_id; intake_time; acceptance_time; reversal_id; species; cultivar; grade; stem_length; stem_count; net_flower_mass; mass_unit; hydration_state; drainage_time; temperature; temperature_unit; humidity; ethylene_control; opening_stems; received_stems; buyer_return_stems; closing_stems; accepted_sold_stems; supplier_return_stems; downgraded_stems; rejected_whole_stems; trimming_mass; discard_mass; loss_adjustment_link; conversion_source; receiver_id; N; commodity_dataset_id; upstream_reference_gate; original_gate_loss_quantity; original_gate_loss_unit; original_gate_loss_state; original_gate_loss_basis; yield_or_conversion_evidence; yield_or_conversion_source; loss_burden_owner; already_included_scope; integration_result; source_assignment_scope_id; source_assignment_scope_kind; source_quantity_basis; source_target_scope_id; source_same_scope_N; source_same_scope_N_unit; source_same_scope_N_basis; source_same_scope_N_method; source_same_scope_N_state; source_same_scope_N_sample_time; source_same_scope_N_source; source_same_scope_acceptance_ids; source_already_per_reference; raw_integration_scope_link; flow_row_id; actual_identity_case; actual_substance_or_material; actual_state_and_gate; case_activation_evidence; quantity_exclusion_links; whole_total_reconciliation | 统计唯一已验收企业客户批次，核对供应批次、冲销、枝数、实测质量和实际废弃路径；不套用通用每枝质量。  原始外部商品库存、来源归属损失及缺阶段新增上游集成量均保留有证据的实际原始作用域。逐量识别一个实际货批、目标服务集合或已经每参考流，并记录来源目标作用域编号与数量口径。来源集合全部出口分母仅把原始量归属该目标范围，不自动等于目标验收服务N。仅与1 Item(s)服务组合时，以同目标范围原始归属量除正数唯一验收source_same_scope_N，记录验收编号时间冲销证据，取得每参考量。有证单货批source_same_scope_N=1，已每参考量不再除。保留实际原始集成量来源链接，不缩小真实上游补阶段量，不用无关N除整个来源集合；N0责任披露不除。 只归属独立确认的实物情形，其他实际去向按来源分别保留；每个原生记录只属于一个交换，任何总量仅作不可相加审计。 | Item(s); stems; kg | 每个批次及废物事件 | 入库至验收及报告期截止 | 全部纳入库房与交付区域 | 每参考流 | 所有权与验收凭证、校准称重与计数审计、温度状态记录及对应损失调整集成记录 |
| cp_energy | preserved_wholesale | 购入电力 | 电表与分配记录 | site_id; node_id; period_id; consignment_id; room_id; meter_id; start_reading; end_reading; energy_unit; temperature; temperature_unit; occupancy_driver; all_consumers_driver; attributed_energy; provider_scope; N; flow_row_id; actual_identity_case; actual_substance_or_material; actual_origin_and_medium; actual_state_and_gate; case_activation_evidence; typed_or_residual_quantity; quantity_exclusion_links; whole_total_reconciliation; unresolved_occurrence_not_zero | 读取校准的分期电表；按有证据的驱动量向所有消费批次分配制冷、照明、搬运、待机与清洁，并核对外部服务覆盖。 按flow_row_id与actual_identity_case划分实际原生记录，仅有证据的分支适用。具体分支与余项在节点内数量互斥，每个实物出入只归属一次，并与相容同范围不可相加总量协调。发生或数量未知仍待采集，不能填零。 | kWh | 每个计量期间 | 收货至交付、待机与清洁期间 | 全部纳入的用电设备 | 每参考流 | 电表校准、整库核对与驱动量完整性 |
| cp_fuel | preserved_wholesale | 柴油供应与实际燃烧 | 油罐与设备燃料记录 | site_id; node_id; period_id; consignment_id; equipment_id; fuel_id; native_unit; opening; receipts; closing_including_recovered_stock; outward_usable_return; nonburned_waste; uncontained_loss; actual_burn; burn_method; uncertainty; driver; all_consumers_driver; N; flow_row_id; actual_identity_case; actual_substance_or_material; actual_origin_and_medium; actual_state_and_gate; case_activation_evidence; typed_or_residual_quantity; quantity_exclusion_links; whole_total_reconciliation; unresolved_occurrence_not_zero | 测量原生单位库存与收货；采用实测燃烧量或完整互斥去向审计，分别链接实际发动机与有效物种因子。 按flow_row_id与actual_identity_case划分实际原生记录，仅有证据的分支适用。具体分支与余项在节点内数量互斥，每个实物出入只归属一次，并与相容同范围不可相加总量协调。发生或数量未知仍待采集，不能填零。 柴油升转kg须有实际相容密度、温度状态、质量体积比单位及来源，不预设换算。 | L | 每次收货、使用与库存截止 | 所有归属的搬运期间 | 仅实际场内柴油设备 | 每参考流 | 库存读数、设备记录、互斥去向证据与未解释差额调查 |
| cp_water | preserved_wholesale | 购入水与容纳态水性废物 | 水表、配制与接收记录 | site_id; node_id; period_id; consignment_id; event_id; use_id; water_source; supplied_volume; volume_unit; hydration_or_dry_state; holding_duration; collected_waste_volume; direct_discharge_volume; uptake_measurement; evaporation_measurement; composition; composition_basis; composition_source; density; density_unit; temperature; temperature_unit; receiving_medium; receiver_id; provider_scope; N; flow_row_id; actual_identity_case; actual_substance_or_material; actual_origin_and_medium; actual_state_and_gate; case_activation_evidence; typed_or_residual_quantity; quantity_exclusion_links; whole_total_reconciliation; unresolved_occurrence_not_zero | 测量实际用途与各个容纳态出口。直接取排水仅在实际来源与介质明确后展开交换；不得用未匹配差额推定蒸发或吸收。 按flow_row_id与actual_identity_case划分实际原生记录，仅有证据的分支适用。具体分支与余项在节点内数量互斥，每个实物出入只归属一次，并与相容同范围不可相加总量协调。发生或数量未知仍待采集，不能填零。 | m3 | 每次补水、清洁或排放事件 | 入库至验收及清洁 | 实际配制、桶与清洁用水点 | 每参考流 | 水表、配制与质量记录及容纳和接收方证据 |
| cp_supplies | preserved_wholesale | 处理制剂、包材供应与可用退回 | 品号库存与外送退回记录 | site_id; node_id; period_id; consignment_id; event_id; sku_id; material; native_unit; opening; receipts; closing_including_recovered_stock; outward_usable_return; waste; measured_native_quantity; measured_mass; unit_mass; density; density_unit; temperature; temperature_unit; active_fraction; carrier; dilution; composition_basis; composition_source; conversion_source; representation; supplier_id; receiver_id; N; flow_row_id; actual_identity_case; actual_substance_or_material; actual_origin_and_medium; actual_state_and_gate; case_activation_evidence; typed_or_residual_quantity; quantity_exclusion_links; whole_total_reconciliation; unresolved_occurrence_not_zero | 按品号采集原生库存、领用与退回证据。保留原生上游交换，仅用实际兼容测量进行质量换算，不得把两个视图相加。 按flow_row_id与actual_identity_case划分实际原生记录，仅有证据的分支适用。具体分支与余项在节点内数量互斥，每个实物出入只归属一次，并与相容同范围不可相加总量协调。发生或数量未知仍待采集，不能填零。 | kg; actual native SKU unit | 每次收货、使用、退回与库存截止 | 相关保存、包装与清洁期间 | 实际配制与作业点 | 每参考流 | 品号标签、供应原生单位记录、换算依据与对应可用退回 |
| cp_refrigerant | preserved_wholesale | 工质供应与实际组分释放 | 设备充注、泄漏、回收与维修记录 | site_id; node_id; period_id; consignment_id; equipment_id; event_id; fluid_id; component_id; component_mass_fraction; composition_source; opening_stock; fluid_receipts; closing_stock; initial_charge; final_charge; recovered_fluid; contained_waste; measured_release; uncertainty; driver; all_consumers_driver; N; component_fraction_basis; wholefluid_release; release_fate; release_fate_basis; release_fate_source; fluid_quantity_unit; fluid_quantity_basis; fluid_quantity_method; fluid_quantity_state; fluid_quantity_sample_time; fluid_quantity_source; retained_recovery; usable_outward_transfer; outward_recipient; contained_waste_receiver; receiver_transport_scope; receiver_treatment_scope; provider_coverage; initial_charge_upstream_owner; initial_charge_dataset_coverage; makeup_supply_provenance; gross_or_consumed_view; matched_unused_supply_return; origin_substock_id; period_opening_scope; new_factory_charge_entry; factory_entry_source; opening_entry_exclusion_check; substock_matched_return | 核对库存、设备充注量、补充供应、实际回收及有证据的释放；调查未知差额，按实际大气释放组分展开。  实际留存回收、可用外转、容装废物、大气物种逐项互斥核对；可用外转另建Product、容装工质另建Waste，各实际混合物状态接收路径独立。原厂充注生产若已含完整资产数据集，保留该上游归属不重复补充供应；回收原厂充注不得扣无关当期补充供应。仅同范围独立未用供应可选净耗并省匹配外退，不负输入。 为各工质数量明确共用或独立原生单位基准方法状态取样时间来源。原充注作为期初或本期新设备原厂充注进入，二者互斥不重复；独立未用供应的净耗仅同来源子库存匹配退回，不能跨原厂充注、期初和补充供应抵扣。 | kg | 每次维修、泄漏、回收与截止 | 全部归属设备期间 | 全部相关制冷设备 | 每参考流 | 维修报告、称重充注记录、回收证明与混合物组成依据 |
| cp_provider | preserved_wholesale | 完整外部服务作业 | 合同与物理完成记录 | site_id; node_id; period_id; consignment_id; provider_id; contract_id; completed_job_id; completion_gate; quantity; native_unit; upstream_scope; included_resources; excluded_resources; overlap_owner; driver; all_consumers_driver; N | 核实实际完成的服务及完整资源范围；非计数服务须采用实际原生单位交换并另行核实支持身份。 | Item(s); actual provider native unit | 每个已完成合同事件 | 实际服务报告期间 | 声明的外部或场内责任 | 每参考流 | 合同范围、实际物理交付与不重叠核对 |
| cp_assets | preserved_wholesale | 完整寿命资产 | 资产清单与寿命驱动量记录 | site_id; node_id; period_id; consignment_id; asset_id; asset_native_unit; manufacturing_dataset; maintenance; replacements; end_of_life; observed_history_driver; evidenced_remaining_driver; lifetime_driver; cohort_driver; all_consumers; termination_state; remainder_source; uncertainty; provider_overlap; N; driver_id; cohort_driver_unit; lifetime_driver_unit; observed_history_driver_unit; evidenced_remaining_driver_unit; sensitivity_evidence; update_evidence | 逐项收集制造、维护、更换和寿命终结范围；以本批次集合驱动量占全寿命全部消费方与期间驱动量的比例归属，再除以 N 一次。 | Item(s); native asset/service unit | 每次购置、维护、更换及期间 | 已发生历史加有依据的剩余阶段至终止 | 全部纳入的共享冷库与搬运资产 | 每参考流 | 资产台账、寿命与剩余使用来源、敏感性、更换与终结及外部覆盖 |
| cp_freight | preserved_wholesale | 范围内商品、物资及废物运输 | 运输与外部服务范围记录 | site_id; node_id; period_id; consignment_id; transfer_id; mode; load_mass; mass_unit; distance; distance_unit; actual_route; refrigeration_scope; empty_return_scope; provider_id; provider_dataset; overlap_owner; N; load_mass_conversion_factor; load_mass_conversion_unit; load_mass_conversion_source; distance_conversion_factor; distance_conversion_unit; distance_conversion_source; attribution_share; cohort_driver; all_consumers_driver; driver_unit | 按归属路段使用实际兼容载荷质量和距离；核对已包含的制冷、承运服务及商品运输责任。 | kg*km | 每个实际路段 | 声明的入库至交付与废物物流责任 | 仅明确纳入的路段 | 每参考流 | 交付重量、路线依据、运输方式与承运覆盖声明 |
| cp_waste | preserved_wholesale | 包装及其他实际废物 | 称重与接收处理记录 | site_id; node_id; period_id; consignment_id; waste_id; material; quantity; native_unit; wet_state; contamination; receiver_id; treatment_gate; treatment_dataset; transport_owner; N; flow_row_id; actual_identity_case; actual_substance_or_material; actual_origin_and_medium; actual_state_and_gate; case_activation_evidence; typed_or_residual_quantity; quantity_exclusion_links; whole_total_reconciliation; unresolved_occurrence_not_zero | 计量实际分类出口并核实接收处理与运输责任；按实际状态展开其他化学品、容器和工质废物。 按flow_row_id与actual_identity_case划分实际原生记录，仅有证据的分支适用。具体分支与余项在节点内数量互斥，每个实物出入只归属一次，并与相容同范围不可相加总量协调。发生或数量未知仍待采集，不能填零。 | kg; actual stream native unit | 每次转移 | 全部归属保存与清洁期间 | 实际收集至接收处理边界 | 每参考流 | 称重与容器依据及处理接收确认 |
| cp_emissions | preserved_wholesale | 已识别直接环境物种 | 测量或匹配活动因子记录 | site_id; node_id; period_id; consignment_id; source_event_id; species; medium; measured_release; release_unit; actual_activity; activity_unit; factor; factor_unit; factor_basis; factor_source; composition; composition_basis; composition_source; fate; fate_source; uncertainty; N; fate_basis; factor_complete; flow_row_id; actual_identity_case; actual_substance_or_material; actual_origin_and_medium; actual_state_and_gate; case_activation_evidence; typed_or_residual_quantity; quantity_exclusion_links; whole_total_reconciliation; unresolved_occurrence_not_zero | 确定实际物质与介质，采用实测释放或与实际活动匹配的有效物种因子。完整物种因子不得再次乘组成或去向比例。 按flow_row_id与actual_identity_case划分实际原生记录，仅有证据的分支适用。具体分支与余项在节点内数量互斥，每个实物出入只归属一次，并与相容同范围不可相加总量协调。发生或数量未知仍待采集，不能填零。 | kg | 每个实际来源或释放事件 | 全部归属的保鲜、作业与清洁期间 | 仅实际直接来源，排除外部服务已包含的释放 | 每参考流 | 测量或有依据的因子来源、活动匹配与不确定性 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| normalize_service | 所有清单行 | 各交换的实测或有依据归属物理数量除以 N 一次；固定 accepted_service 为 1 Item(s)。 | 归属数量; N; 该行采集协议 | 每参考流数量 |  |
| period_share | electricity; provider_services; freight; electricity_ac | 各期间将实测完整范围乘批次集合的兼容驱动量，再除以全部消费方驱动量；期间无重叠汇总后应用 normalize_service。 | 期间实测数量; 批次集合驱动量; 全部消费方驱动量; 范围责任 | 归属期间数量 |  |
| asset_share | shared_assets | 批次集合的完整资产当量为其寿命兼容驱动量除以全寿命驱动量；应用 normalize_service 一次。生命周期完整的单位驱动量外部服务仅为替代视图。 | 资产生命周期; 批次集合驱动量; 全寿命驱动量; 更换; 寿命终结; cp_assets | 归属资产当量 |  |
| stock_supply | diesel_supply; treatment_supplies; packaging_supplies; usable_supply_returns; packaging_supplies_pe_film | S = 归属期初 + 外部收货 - 包含回收结存的期末。记录总供应含出口 S 及匹配可用外送退回，或仅耗用 S 减匹配可用退回，二者不可并用。燃烧量仍为单独实测或审计去向。 | 期初; 收货; 期末; 可用外送退回; 核算口径; 实际燃烧; cp_fuel; cp_supplies | 归属供应与非叠加退回口径 |  |
| merchandise_loss_link | flower_residues; flower_residues_atomic_case | 以批次谱系和兼容的原交付点枝数与物理数量，在链接商品系统中定量调整本项排除的损失商品上游负担。记录整枝、修剪和水分状态及仅一次集成的证据；不得将补水后废物质量当原生物量。 | 来源批次; 期初; 收货; 期末; 销售; 退回; 降级; 不合格枝数; 修剪; 补水状态; 上游数据集; 损失调整记录; cp_lots | 商品损失审计与独立链接的商品负担 |  |

### 数据质量要求

| requirement_id | applies_to | requirement | evidence |
| --- | --- | --- | --- |
| quality_identity | 所有具体交换 | 最终数据集发布前核实实际流 UUID、属性单位组及交付点；保留真实未决缺口，不用替代身份填补。 | 完整实际详情、支持与兼容证据 |
| quality_merchandise | cp_lots | 结合补水、状态、修剪差异核对枝数及兼容实测质量；验收 N 为正且每个批次有买入转售所有权证据。 | 批次谱系、称重计数与客户验收 |
| quality_coldchain | preserved_wholesale | 记录实际物种等级条件、偏离与约定验收处置；文献实例阈值不能视作通用合规保证。 | 时间温湿度、检查及处理记录 |
| quality_complete | 所有清单 | 实际公用工程、物资、资产、外部服务、货运、废物及环境取排放完整且仅计一次；未发生的主张需有观测范围证据。 | 范围账与期间驱动量核对 |
| quality_chain | 全链集成 | 原交付点商品生产与损失调整以及处理边界匹配均须完成且仅计一次；单独服务不能宣称完整切花足迹。 | 下游集成与接收数据集核对 |

| requirement_id | applies_to | requirement | evidence |
| --- | --- | --- | --- |
| electricity | preserved_wholesale | 本条是强制完成记录，不是虚构清单交换。须按`cp_energy`识别`electricity`内每项实际inputs/product物料、服务、资产全寿命职责、废物流或物种来源介质，并在最终数据集使用前分别展开为实物或化学身份明确、具原生数量和覆盖责任方的单独卡片。发生、身份或数量缺失仍待采集并阻断完成，不能填零或删项。原有全部范围、证据、数量范围、库存去向、换算及供应接收职责均保留在下方完整采集定义。 | `cp_energy`; 实际来源关联原生记录 |
| water_supply | preserved_wholesale | 本条是强制完成记录，不是虚构清单交换。须按`cp_water`识别`water_supply`内每项实际inputs/product物料、服务、资产全寿命职责、废物流或物种来源介质，并在最终数据集使用前分别展开为实物或化学身份明确、具原生数量和覆盖责任方的单独卡片。发生、身份或数量缺失仍待采集并阻断完成，不能填零或删项。原有全部范围、证据、数量范围、库存去向、换算及供应接收职责均保留在下方完整采集定义。 | `cp_water`; 实际来源关联原生记录 |
| treatment_supplies | preserved_wholesale | 本条是强制完成记录，不是虚构清单交换。须按`cp_supplies`识别`treatment_supplies`内每项实际inputs/product物料、服务、资产全寿命职责、废物流或物种来源介质，并在最终数据集使用前分别展开为实物或化学身份明确、具原生数量和覆盖责任方的单独卡片。发生、身份或数量缺失仍待采集并阻断完成，不能填零或删项。原有全部范围、证据、数量范围、库存去向、换算及供应接收职责均保留在下方完整采集定义。 | `cp_supplies`; 实际来源关联原生记录 |
| packaging_supplies | preserved_wholesale | 本条是强制完成记录，不是虚构清单交换。须按`cp_supplies`识别`packaging_supplies`内每项实际inputs/product物料、服务、资产全寿命职责、废物流或物种来源介质，并在最终数据集使用前分别展开为实物或化学身份明确、具原生数量和覆盖责任方的单独卡片。发生、身份或数量缺失仍待采集并阻断完成，不能填零或删项。原有全部范围、证据、数量范围、库存去向、换算及供应接收职责均保留在下方完整采集定义。 | `cp_supplies`; 实际来源关联原生记录 |
| refrigerant_supply | preserved_wholesale | 本条是强制完成记录，不是虚构清单交换。须按`cp_refrigerant`识别`refrigerant_supply`内每项实际inputs/product物料、服务、资产全寿命职责、废物流或物种来源介质，并在最终数据集使用前分别展开为实物或化学身份明确、具原生数量和覆盖责任方的单独卡片。发生、身份或数量缺失仍待采集并阻断完成，不能填零或删项。原有全部范围、证据、数量范围、库存去向、换算及供应接收职责均保留在下方完整采集定义。 | `cp_refrigerant`; 实际来源关联原生记录 |
| provider_services | preserved_wholesale | 本条是强制完成记录，不是虚构清单交换。须按`cp_provider`识别`provider_services`内每项实际inputs/product物料、服务、资产全寿命职责、废物流或物种来源介质，并在最终数据集使用前分别展开为实物或化学身份明确、具原生数量和覆盖责任方的单独卡片。发生、身份或数量缺失仍待采集并阻断完成，不能填零或删项。原有全部范围、证据、数量范围、库存去向、换算及供应接收职责均保留在下方完整采集定义。 | `cp_provider`; 实际来源关联原生记录 |
| shared_assets | preserved_wholesale | 本条是强制完成记录，不是虚构清单交换。须按`cp_assets`识别`shared_assets`内每项实际inputs/product物料、服务、资产全寿命职责、废物流或物种来源介质，并在最终数据集使用前分别展开为实物或化学身份明确、具原生数量和覆盖责任方的单独卡片。发生、身份或数量缺失仍待采集并阻断完成，不能填零或删项。原有全部范围、证据、数量范围、库存去向、换算及供应接收职责均保留在下方完整采集定义。 | `cp_assets`; 实际来源关联原生记录 |
| freight | preserved_wholesale | 本条是强制完成记录，不是虚构清单交换。须按`cp_freight`识别`freight`内每项实际inputs/product物料、服务、资产全寿命职责、废物流或物种来源介质，并在最终数据集使用前分别展开为实物或化学身份明确、具原生数量和覆盖责任方的单独卡片。发生、身份或数量缺失仍待采集并阻断完成，不能填零或删项。原有全部范围、证据、数量范围、库存去向、换算及供应接收职责均保留在下方完整采集定义。 | `cp_freight`; 实际来源关联原生记录 |
| usable_supply_returns | preserved_wholesale | 本条是强制完成记录，不是虚构清单交换。须按`cp_supplies`识别`usable_supply_returns`内每项实际outputs/product物料、服务、资产全寿命职责、废物流或物种来源介质，并在最终数据集使用前分别展开为实物或化学身份明确、具原生数量和覆盖责任方的单独卡片。发生、身份或数量缺失仍待采集并阻断完成，不能填零或删项。原有全部范围、证据、数量范围、库存去向、换算及供应接收职责均保留在下方完整采集定义。 | `cp_supplies`; 实际来源关联原生记录 |
| usable_recovered_refrigerant | preserved_wholesale | 本条是强制完成记录，不是虚构清单交换。须按`cp_refrigerant`识别`usable_recovered_refrigerant`内每项实际outputs/product物料、服务、资产全寿命职责、废物流或物种来源介质，并在最终数据集使用前分别展开为实物或化学身份明确、具原生数量和覆盖责任方的单独卡片。发生、身份或数量缺失仍待采集并阻断完成，不能填零或删项。原有全部范围、证据、数量范围、库存去向、换算及供应接收职责均保留在下方完整采集定义。 | `cp_refrigerant`; 实际来源关联原生记录 |
| flower_residues | preserved_wholesale | 本条是强制完成记录，不是虚构清单交换。须按`cp_lots`识别`flower_residues`内每项实际outputs/waste物料、服务、资产全寿命职责、废物流或物种来源介质，并在最终数据集使用前分别展开为实物或化学身份明确、具原生数量和覆盖责任方的单独卡片。发生、身份或数量缺失仍待采集并阻断完成，不能填零或删项。`flower_residues_atomic_case`只覆盖自身独占实物状态，其他实际去向仍须完成。原有全部范围、证据、数量范围、库存去向、换算及供应接收职责均保留在下方完整采集定义。 | `cp_lots`; 实际来源关联原生记录 |
| packaging_waste | preserved_wholesale | 本条是强制完成记录，不是虚构清单交换。须按`cp_waste`识别`packaging_waste`内每项实际outputs/waste物料、服务、资产全寿命职责、废物流或物种来源介质，并在最终数据集使用前分别展开为实物或化学身份明确、具原生数量和覆盖责任方的单独卡片。发生、身份或数量缺失仍待采集并阻断完成，不能填零或删项。原有全部范围、证据、数量范围、库存去向、换算及供应接收职责均保留在下方完整采集定义。 | `cp_waste`; 实际来源关联原生记录 |
| wastewater | preserved_wholesale | 本条是强制完成记录，不是虚构清单交换。须按`cp_water`识别`wastewater`内每项实际outputs/waste物料、服务、资产全寿命职责、废物流或物种来源介质，并在最终数据集使用前分别展开为实物或化学身份明确、具原生数量和覆盖责任方的单独卡片。发生、身份或数量缺失仍待采集并阻断完成，不能填零或删项。原有全部范围、证据、数量范围、库存去向、换算及供应接收职责均保留在下方完整采集定义。 | `cp_water`; 实际来源关联原生记录 |
| contained_refrigerant_waste | preserved_wholesale | 本条是强制完成记录，不是虚构清单交换。须按`cp_refrigerant`识别`contained_refrigerant_waste`内每项实际outputs/waste物料、服务、资产全寿命职责、废物流或物种来源介质，并在最终数据集使用前分别展开为实物或化学身份明确、具原生数量和覆盖责任方的单独卡片。发生、身份或数量缺失仍待采集并阻断完成，不能填零或删项。原有全部范围、证据、数量范围、库存去向、换算及供应接收职责均保留在下方完整采集定义。 | `cp_refrigerant`; 实际来源关联原生记录 |
| direct_species | preserved_wholesale | 本条是强制完成记录，不是虚构清单交换。须按`cp_emissions`识别`direct_species`内每项实际outputs/elementary物料、服务、资产全寿命职责、废物流或物种来源介质，并在最终数据集使用前分别展开为实物或化学身份明确、具原生数量和覆盖责任方的单独卡片。发生、身份或数量缺失仍待采集并阻断完成，不能填零或删项。原有全部范围、证据、数量范围、库存去向、换算及供应接收职责均保留在下方完整采集定义。 | `cp_emissions`; 实际来源关联原生记录 |
| refrigerant_release | preserved_wholesale | 本条是强制完成记录，不是虚构清单交换。须按`cp_refrigerant`识别`refrigerant_release`内每项实际outputs/elementary物料、服务、资产全寿命职责、废物流或物种来源介质，并在最终数据集使用前分别展开为实物或化学身份明确、具原生数量和覆盖责任方的单独卡片。发生、身份或数量缺失仍待采集并阻断完成，不能填零或删项。原有全部范围、证据、数量范围、库存去向、换算及供应接收职责均保留在下方完整采集定义。 | `cp_refrigerant`; 实际来源关联原生记录 |


### 强制清单完成记录

以下为强制采集和展开定义，不是交换，也不是填零占位符。正文引用的集合或余项编号对应这些完成要求。最终前景数据集完成前，每个实际情形都须成为具自身证据的原子交换；第6节条件卡不预设发生。独立投入、资产全寿命、互斥供应运输结果、实际废物接收流及每个实际基本流物种介质均须保留，不能因未分配通用UUID而静默漏掉。独占实际情形须与原生总量协调，组分视图不可重复相加。

#### electricity

分配给验收批次集合的冷库、照明和搬运计量电力；排除已计入完整外购服务的电力。

本卡为独立身份分支`electricity_ac`之外的余项清单要求。已计入分支的实际数量不再计入本未解析完成要求，原类目总量仅作不可相加的协调审计。其他实际材料、状态、来源或介质仍须保留自身经核实的身份、原生数量及供应接收责任；记录缺失时，不推定条件分支发生、不发生或数量为零。

- 身份采集要求：冷藏批发作业购入电力
- 流属性/单位：Energy / kWh
- 数量规则：实测分配电量千瓦时 / N；cp_energy。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_energy`

范围证据需求：需有库温、环境温度、占用情况和分期间计量及分配依据，包括待机与换批能耗；不设每枝通用耗电量。

#### water_supply

仅记录实际购入的产品水并按用途计量；干藏品种不得假定补水。环境取水须另列实际来源交换。

本卡为独立身份分支`water_supply_liquid_tap`之外的余项清单要求。已计入分支的实际数量不再计入本未解析完成要求，原类目总量仅作不可相加的协调审计。其他实际材料、状态、来源或介质仍须保留自身经核实的身份、原生数量及供应接收责任；记录缺失时，不推定条件分支发生、不发生或数量为零。

- 身份采集要求：实际补水保鲜与清洗购入水
- 流属性/单位：Volume / m3
- 数量规则：实测分配的供应水立方米 / N；cp_water。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_water`

范围证据需求：需进水、用途、出水记录及保存、沥水时间和水状态；植物吸水、废水与蒸发不得合并为一个差额。

#### treatment_supplies

实际使用时按制剂品号、组成和状态分别建具体交换；不规定统一保鲜剂或含银处理。

- 身份采集要求：实际商业补水保鲜或清洁消毒制剂
- 流属性/单位：Mass / kg
- 数量规则：分配的供应制剂千克 / N；cp_supplies。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_supplies`

范围证据需求：需实际标签适用性、活性比例、载体、稀释、原生采购单位及实测质量或密度换算；成分视图不得与整剂相加。

#### packaging_supplies

本作业实际供应、按质量核算的套袋、纸与纸箱。上游交换采用数量、面积或长度时，应展开对应原生单位交换，不得假定质量换算。

本卡为独立身份分支`packaging_supplies_pe_film`之外的余项清单要求。已计入分支的实际数量不再计入本未解析完成要求，原类目总量仅作不可相加的协调审计。其他实际材料、状态、来源或介质仍须保留自身经核实的身份、原生数量及供应接收责任；记录缺失时，不推定条件分支发生、不发生或数量为零。

- 身份采集要求：按质量核算的一次性花卉包材与纸箱
- 流属性/单位：Mass / kg
- 数量规则：分配的包材供应千克 / N；cp_supplies。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_supplies`

范围证据需求：需品项、材料、原生单位及库存与退回证据；单独质量视图须有实测单件质量或几何与密度，不得重复交换。

#### refrigerant_supply

仅按实际混合物与组成记录分配的购入或补充工质；供应量不等于向大气释放量。

- 身份采集要求：实际供应的制冷工质补充量
- 流属性/单位：Mass / kg
- 数量规则：分配的制冷剂供应千克 / N；cp_refrigerant。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_refrigerant`

范围证据需求：需库存、充注、回收、设备充注量与维修记录及组分质量比例；不设通用年泄漏率。

#### provider_services

仅适用于合同明确、已完成且完整披露上游覆盖的计数作业；按时间、电量、货运或质量签订的服务须用实际原生单位交换。

- 身份采集要求：完整计数的外部批发支持服务作业
- 流属性/单位：Count / Item(s)
- 数量规则：分配的已完成外部服务作业数 / N；cp_provider。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_provider`

范围证据需求：需供应商范围、物理完成证据、边界、单位和覆盖重叠核对；价格、发票或工时本身不能证明一次完整服务。

#### shared_assets

冷库、制冷设备、桶、推车及信息与搬运资产跨批次和期间共享；每项实际资产须具备原生完整寿命清单。

- 身份采集要求：分配的批发资产完整寿命当量
- 流属性/单位：Count / Item(s)
- 数量规则：分配的完整资产当量 / N；cp_assets。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_assets`

范围证据需求：需制造、维护、更换和寿命终结负担，以及实测寿命驱动量或已发生记录加有证据的剩余部分；不得假定寿命或重复计入租赁。

#### freight

按约定的供应商、商品与服务边界，分别归属实际进出货与返程。冷链运输的能源与制冷负担须完整且仅计一次。

- 身份采集要求：批发责任范围内实际货运活动
- 流属性/单位：Mass * distance / kg*km
- 数量规则：分配的实际千克乘千米 / N；cp_freight。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_freight`

范围证据需求：需载荷基准下的质量、距离、方式、制冷与空返范围和供应商覆盖；不得用订单数乘猜测距离。

#### usable_supply_returns

仅指实际退给外部所有者的未用物资；期末库存与内部循环不属于外送退回。可重复容器按数量的移动记入资产账，独立转移时展开原生单位交换。

- 身份采集要求：可用未耗用且按质量核算的物资外送退回
- 流属性/单位：Mass / kg
- 数量规则：实测分配的未用物资外送千克 / N；cp_supplies。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_supplies`

范围证据需求：需对应原供应、接收所有者与状态，并选定总供应含出口或仅耗用口径；不得重复扣减。

#### usable_recovered_refrigerant

仅真实向外转移的可用工质，按实际混合物、状态、原充注或独立补充供应来源及接收方逐项展开 Product 交换；留存回收进入期末库存而非出口。不自动替代抵扣。

- 身份采集要求：实际向外转移的可用回收制冷剂
- 流属性/单位：Mass / kg
- 数量规则：实际互斥归属质量 / N；cp_refrigerant。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_refrigerant`

范围证据需求：需实测外转质量、混合物组成、来源充注覆盖及接收证明。仅同范围独立未用供应的净耗口径可省匹配退回；原厂充注回收不能扣无关补充供应或形成负输入。

#### flower_residues

按批次和实际接收路径区分整枝不合格花与修剪残余；可售降级花及退供货方商品属于商品审计出口，不自动视为废物。

- 身份采集要求：实际处理交接处的废弃切花与切茎残余
- 流属性/单位：Mass / kg
- 数量规则：实测分配的花卉残余千克 / N；cp_lots。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_lots`

范围证据需求：需实际湿润状态、沥水与去向；废弃商品应追溯上游批次数量另作商品损失调整，不得把湿废物质量当作栽培生物量。

#### packaging_waste

按实际材料与接收处理展开；仅收集不能获得材料替代抵扣，垃圾桶颜色不能确定处理身份。

本卡为独立身份分支`packaging_waste_paper_pack`; `packaging_waste_metal_pack`; `packaging_waste_plastic_pack`之外的余项清单要求。已计入分支的实际数量不再计入本未解析完成要求，原类目总量仅作不可相加的协调审计。其他实际材料、状态、来源或介质仍须保留自身经核实的身份、原生数量及供应接收责任；记录缺失时，不推定条件分支发生、不发生或数量为零。

- 身份采集要求：实际废物交接处的分类废包装
- 流属性/单位：Mass / kg
- 数量规则：实测分配的废包装千克 / N；cp_waste。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_waste`

范围证据需求：需称重分类流、污染情况和接收记录；排除完好周转容器与转入期末的库存。

#### wastewater

实际收集并送已核实处理方的水性废物，应记录处理药剂等组成；不得视为直接环境释放。

- 身份采集要求：送处理的容纳态废保鲜液与清洗水
- 流属性/单位：Volume / m3
- 数量规则：实测分配的容纳态水性废物立方米 / N；cp_water。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_water`

范围证据需求：需实测体积、组成、换算所需密度、容纳与接收方；直接排放须另列实际接收介质的水与物种交换。

#### contained_refrigerant_waste

真实弃置容装工质按实际混合物、状态及接收处理路径逐项展开 Waste 交换；与可用外转、留存回收及大气物种释放互斥。

- 身份采集要求：实际送接收处理的容装制冷剂废物
- 流属性/单位：Mass / kg
- 数量规则：实际互斥归属质量 / N；cp_refrigerant。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_refrigerant`

范围证据需求：需实测交接质量组成、接收运输处理与服务商覆盖，处理负担仅一次；回收量或充注差额不自动废物或大气释放。

#### direct_species

须按实际物种和空气、水或土壤介质展开经核实的燃烧、花卉呼吸、处理或溢漏释放；不得从花卉或柴油供应套用通用挥发物或二氧化碳默认量。

本卡为独立身份分支`direct_species_co2_fossil_air`; `direct_species_methane_fossil_air`; `direct_species_nitrous_oxide_air`之外的余项清单要求。已计入分支的实际数量不再计入本未解析完成要求，原类目总量仅作不可相加的协调审计。其他实际材料、状态、来源或介质仍须保留自身经核实的身份、原生数量及供应接收责任；记录缺失时，不推定条件分支发生、不发生或数量为零。

- 身份采集要求：向声明介质实际释放的已识别非制冷剂物种
- 流属性/单位：Mass / kg
- 数量规则：实测或有效活动因子核算的物种释放千克 / N；cp_emissions。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_emissions`

范围证据需求：需物质、基准、介质及实测释放或匹配实际活动的因子；整剂与组分物种不得相加，危害限值不能作排放量。

#### refrigerant_release

按实际释放组分展开，不用通用混合制冷剂或充注量替代；回收工质与容纳态废物为独立实际去向。

- 身份采集要求：实际向空气释放的制冷剂组分
- 流属性/单位：Mass / kg
- 数量规则：实测或经审计的组分释放千克 / N；cp_refrigerant。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_refrigerant`

范围证据需求：需充注、回收、库存与剩余充注量的完整核对及不确定性；未知差额须调查，不自动当作大气泄漏。

## 9. 验证规则

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| validate_gate | accepted_service | 要求唯一验收正数 N、实际企业客户买入转售门槛及完整参考限定信息；失败或取消批次不得计作验收输出。 |  |
| validate_preservation | preserved_wholesale | 要求实际入库可用状态、维持条件、物种适用路径、验收门槛与声明的偏离及不合格处置，并遵守来源适用范围。 | umass-cutflower-handling; ucdavis-gladiolus-2004 |
| validate_units | all inventory | 原生交换单位、实测换算及同一个 N 须一致；不得令数量等于质量、订单等于吨、价格等于服务，不得替用能源或时间属性或隐含混合物物种身份。 |  |
| validate_paths | all returns/rejects | 每项不合格、降级、退回和废弃批次须有产生责任与实际接收路径；不重复验收服务，不自动视为废物或给予替代抵扣。 |  |
| validate_scope | all shared resources | 期间驱动量合计、外部服务原生单位与资产完整寿命覆盖须闭合，包括维护、更换与终结；寿命、剩余使用或责任方不明则数据包不完整。 |  |
| validate_water_release | actual environmental exchanges | 须明确容纳状态、直接介质、实际物质及活动、因子、组成、去向基准和不确定性。供应商安全说明书、加水量、制冷剂充注量或未解释差额本身均不能证明释放量。 |  |
| validate_chain | service and linked commodity system | 本附加项不计任何商品栽培负担；全链完整前须分别定量计入损失商品上游负担与可售商品负担且各仅一次，同时物流与处理不重叠。 |  |


## 10. 发布数据集画像

| Field | Value |
| --- | --- |
| dataset_role | 实际交换身份与数量证据核实后可作为 secondary_dataset; background_dataset |
| downstream_use | 兼容切花商品链的物理批发服务附加项，以声明的验收批次为参考 |
| allowed_use | 声明的自营企业客户冷藏切花路径及记录的质量、数量与时间分层，透明披露未决限制 |
| excluded_use | 本身作为完整切花足迹；零售或栽培；盆栽；收费代理；金额利润；枝数、吨数或瓶插寿命的通用换算 |
| required_metadata | 全部参考限定信息；服务与供应交付点；正数 N；期间库房场址；原生交换；损失调整及重叠责任；完整资产寿命证据 |
| required_quality_disclosure | 身份与支持缺口；测量换算；条件性遗漏；范围证据需求；物种条件与验收限制；外部服务、商品损失及不确定性覆盖 |
| update_trigger | 物种或路径、库房电力或设备、处理包材、供应与处理范围、资产寿命使用、实测损失结构、参考交付点或证据变化 |


## 11. 数据来源

| source_id | type | reference | used_for |
| --- | --- | --- | --- |
| unsd-cpc3-wholesale-2025 | official_guidance | UNSD. CPC Version 3.0 explanatory notes, division 61; https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | 自营企业客户批发服务分类，不提供物理清单或排放因子。 |
| umass-cutflower-handling | extension_guidance | UMass Amherst Extension. Harvesting and Handling Cut Flowers; https://www.umass.edu/agriculture-food-environment/greenhouse-floriculture/fact-sheets/harvesting-handling-cut-flowers | 仅支持物种适用的温度、补水、乙烯、卫生与凝露质量问题；不作通用配方、法规主张或损耗能耗默认值。 |
| ucdavis-gladiolus-2004 | extension_guidance | Reid, M. S. (2004). Gladiolus. UC Davis Postharvest Research and Extension Center; https://postharvest.ucdavis.edu/produce-facts-sheets/gladiolus | 仅以唐菖蒲为成熟度、机械状态、朝向、冷链和品种敏感性的有限实例；阈值不移用到全部切花。 |
