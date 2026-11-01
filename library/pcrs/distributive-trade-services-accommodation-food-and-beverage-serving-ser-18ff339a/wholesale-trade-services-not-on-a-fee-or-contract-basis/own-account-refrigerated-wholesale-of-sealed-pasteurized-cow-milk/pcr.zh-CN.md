---
pcr_id: pcr.own-account-refrigerated-wholesale-of-sealed-pasteurized-cow-milk
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 密封巴氏杀菌牛饮用乳的自营冷藏批发服务

## 1. 范围与适用性

本 PCR 定义生产者已放行、已密封预包装的巴氏杀菌牛饮用乳自营购入转售给企业买方的物理批发附加服务。批发商实际经营受监测的冷藏保存与发货，商业输出为一个已验收批次，并声明真实乳品、包装、批号、温度和时间限定。正常批发作业中包装保持未开封。

排除生乳、鲜壳蛋、超高温灭菌或常温稳定乳、其他动物乳、发酵浓缩干燥乳品、乳品制造巴氏杀菌灌装换装返工、零售、佣金代理和纯财务转移。意外渗漏、不合格隔离及真实损失处置不代表制造回收路径；主动开封或返工须另行审查范围。Codex 乳品指南支持按产品条件承担冷链责任和遵守制造者存储条件，但本项不提供通用温度、货架寿命或损耗因子。

## 2. 产品类别身份

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.own-account-refrigerated-wholesale-of-sealed-pasteurized-cow-milk |
| classification_refs | CPC3.0:61022；narrower：密封预包装巴氏牛饮用乳的自营冷藏批发服务 |
| covered_products | 已放行未开封巴氏牛饮用乳的已完成企业客户自营冷藏批发批次服务 |
| excluded_products | 生乳与鲜壳蛋；超高温常温乳；其他乳品；制造灌装返工；零售或收费代理 |
| representative_product | 一个已验收合同批次，具有指定品号脂肪状态、包数、标签体积、实际乳质量、一层包装封口批号及温度条件 |
| production_route | 已放行冷藏包装品入库 -> 实际监测冷藏与库存轮转 -> 订单处理冷链发货 -> 企业客户验收；追踪实际退回与损失 |
| market_state | 已验收分销服务；乳品仍为声明交付状态的密封已加工商品，不是服务流本身 |


## 3. 参考流

| Field | Value |
| --- | --- |
| What | 已完成的密封巴氏牛饮用乳自营冷藏批发批次服务 |
| How much | 1 Item(s)，即一个唯一完成的合同批次；无固定包数、升、千克、吨或利润换算 |
| How well | 记录实际生产放行、标签存储要求、一层封口完整性、品号脂肪批号及验收时间温度；本 PCR 不保证微生物或剩余货架寿命结果 |
| How long or cycle | 实际收货保存发货至买方验收，含相关待机化霜清洁、报告截止及资产完整寿命期间 |
| reference_flow_link | `accepted_service` |

| Field | Value |
| --- | --- |
| reference_amount | 1 |
| reference_product_flow | 已完成的密封巴氏牛饮用乳自营冷藏批发批次服务 |
| reference_flow_property | 物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` |
| reference_unit_group | 数量单位 `5beb6eed-33a9-47b8-9ede-1dfe8f679159` |
| reference_unit | Item(s) |
| required_qualifiers | sealed_pasteurized_cow_drinking_milk; manufacturer_release_and_original_gate; SKU_fat_state_and_primary_pack; pack_count_and_label_volume_unit; measured_net_milk_mass_density_temperature; lot_date_and_shelf_life_conditions; intake_storage_transport_acceptance_times; actual_product_and_room_temperature_records; seal_integrity_and_quarantine_disposition; ownership_resale_business_buyer; unique_accepted_consignment; cold_room_carrier_provider_responsibility; additional_packing_and_reusable_crate_scope; reporting_period_and_loss_adjustment_link |

N>0 为真实冲销后的唯一已完成且验收商业批次数。包数和乳品净数量描述服务分层，不自动使不同批次等价。隔离、取消订单、失败交付或内部筐转移不作验收参考输出；其实际资源保留在有依据的集合或跨期责任中。

## 4. 计量与单位规则

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| ref_count | 参考产品 | 物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` | Item(s) | 采用真实唯一已完成验收单位；输出为 1 Item(s)。实际包数为独立商品账，不是 N。 |
| milk_measurement | 商品及实际损失 | 体积与质量 | L; kg | 标签灌装体积不是实测乳质量。保留真实包数、毛皮重净内容物、密度及其温度状态单位来源、批次换算与不确定性。不假定1L=1kg或统一包材皮重。 |
| native_exchange | 所有清单 | 实际原生属性 | 实际原生单位 | 保留供应商服务商容器原生单位并核实实际换算；已灌装一层包装在商品上游，实际新增二级包材与周转筐生命周期另行负责。 |
| cold_fates | 制冷剂及废物释放行 | 质量及实际组成 | kg; 实际单位 | 区分明确工质供应、充注、回收、容纳废物、退回与真实组分释放；区分整件密封包装和实际分离乳、包、水流，不重复总量与部分，也不默认差额为泄漏。 |


## 5. 系统边界

有界保鲜干预接收已放行冷藏密封乳品，按实际产品条件运行监测制冷与库存轮转，在声明冷链责任范围交付未开封验收商品。本服务不制造更安全乳品或重置货架寿命。实际温度偏离、封口失败、隔离、退回、清洁化霜均追溯到责任批次期间。

### 边界概化

| Field | Value |
| --- | --- |
| declared_starting_condition | 在指定商品交付点、品号批次状态下，已生产放行、已灌装密封并冷藏的巴氏牛饮用乳 |
| starting_condition_role | 含原一层包装的商品库存流经审计，不作为本服务耗用的商品生产交换 |
| product_classification_scope | CPC61022中密封预包装巴氏牛饮用乳的自营冷藏物理服务子集 |
| recursive_input_rule | 真实上游分销冷却服务须合同资源不重叠；不对同一批次递归，不重复承运制冷 |
| upstream_dataset_requirement | 实际资源服务商全寿命资产接收处理数据集须兼容；独立商品基线须匹配生产者放行的巴氏乳及实际一层包装内已灌装密封状态。农场生乳数据集单独使用并不完整，须仅一次补齐缺失的加工巴氏杀菌灌装及一层包装范围。原交付点损失调整须匹配该加工包装状态与实际包材去向 |
| disclosure | 全部参考限定；来源验收门槛；正数 N；密封包库存批号密度温度损失；实际冷链责任；资源服务物流废物范围与商品损失集成 |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| boundary_addon | all inventory | 本服务附加项排除全部交易乳品生产及已灌装原一层包装的上游负担，含损失部分内含上游负担。全链完整前，独立商品系统须分别定量计入原交付点损失调整与可售商品负担且各仅一次；真实服务损失处理仍在本项内。 |  |
| boundary_cold | sealed_milk_distribution | 对入库验收密封乳品采用实际制造者说明、有依据的产品存储条件及观测时间温度作业记录。本 PCR 不提供通用设定温度、货架寿命或自动法律卫生合规主张。 | codex-milk-hygiene-2004 |
| boundary_contents | returns and losses | 不得开封正常商品、新增原灌装或凭到期退回标签推断处置。实际退回隔离可售降级废弃须可追溯接收门槛；真实意外分离内容物包材后不得再计相同整包不合格品。 |  |
| boundary_owner | all physical responsibilities | 对实际自有外部制冷电力燃料运输、资产制造清洁维护更换终结与接收处理确定唯一责任。实际环境取排水、化学制冷剂废物和物质释放须按真实状态介质展开。未知真实范围阻止最终数据完整。 |  |


## 6. 过程清单结构

### 过程图

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| sealed_milk_distribution | 实际冷藏保鲜与密封乳品自营分销 | required | 真实已放行密封巴氏牛饮用乳的所有权转售与实际受监测冷藏保存 | 从已放行冷藏密封入库到有记录企业冷链交付的单一保鲜责任；拣货发货清洁采用批次模式，共享制冷连续运行 | `accepted_service` |

不得因收货检查和拣单创建制造包装分级节点。记录真实待机化霜退回清洁事件，识别每个服务资源责任方。条件性角色须由实际品号工质物质单位接收方范围证据展开；真实环境水和固体化学工质废物缺项不当作零。完全承担实际冷藏干预的外部服务须披露其完整上游范围，不重复直接制冷资源。

### 过程：实际冷藏保鲜与密封乳品自营分销 (`sealed_milk_distribution`)

#### 输入

##### 产品流

###### 实际使用点交流电 (`electricity_ac`)

仅适用于实际跨越本节点边界、且未由完整供应商数据覆盖的交流电。该身份未特指供应方、电压、发电组合或交付线损归属，仍须按要求采集。经核实的电力流以1 MJ电能为基准，其ILCD属性名称为净热值；原生kWh按精确的3.6 MJ/kWh换算，不能套用燃料热值系数。直流电或其他不匹配电力状态保留在余项要求中。

- 选定流：交流电 `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- 流属性/单位：Energy / kWh
- 数量规则：分配的实测电量 / N；cp_cold。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_cold`

范围证据需求：需实际库温乳品温度环境条件、计量占用及待机化霜换批记录与物理全消费方驱动量；不设每包或每吨通用耗电量。

###### 实际场内乳品搬运设备柴油 (`diesel`)

仅适用于实际场内柴油供应，与实测燃烧分开；运输制冷燃料须有明确责任方和实际单位。

固定身份表示以Mass/kg为参考基准的通用供应柴油；实际牌号、配方、供应方及热值仍须记录，不能预设。保留原生升记录；最终换算为kg须有实际相容密度、温度状态、质量体积比单位及来源，目录不提供默认密度。缺密度时体积转质量仍不完整，不能填零或假定值。供应柴油不等于燃烧柴油、运输服务或直接排放。

- 选定流：柴油 `9d258d75-6792-4f1c-9856-81602ed8f816`
- 流属性/单位：Volume / L
- 数量规则：归属的柴油供应量 / N；cp_fuel。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_fuel`

范围证据需求：需毛收货皮重净收货及原生库存、燃烧退回废物和未容纳损失，不从缺量推断燃烧。

###### 实际液态处理自来水供给 (`cleaning_water_liquid_tap`)

仅在实际来源确为处理后的自来水且用于所声明用途时适用。保留实际供应方、水质、温度状态和供应边界，不假定所有供水都是自来水。冰、瓶装矿泉水、再生水、未经处理的水及环境直接取水保留各自实际身份。沿用原卡原生质量或体积基准；最终换算为质量参考量时须有实际相容密度和状态证据，不能把目录中的次要体积关系作为默认现场密度。

- 选定流：自来水 `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- 流属性/单位：Volume / m3
- 数量规则：实际计量分配的水量 / N；cp_water。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_water`

范围证据需求：需用途出口与持留证据，含实际乳品污染清洁状态；废水体积不等于纯水或默认乳损。

###### 实际独立记录的合成洗涤剂投入 (`cleaning_products_synthetic_detergent`)

仅适用于产品配方、供应状态及用途记录确认的实际合成表面活性洗涤剂。记录扣除包装皮重的材料净量，区分浓缩液与稀释水，整体配方与组分不得相加重复计入。肥皂、消毒剂、抹布、滤材等仍按各自实际身份记录，不预设清洁配方、剂量或发生。

- 选定流：洗涤剂 `1c57d123-df57-49ab-b9d4-957403beb8a5`
- 流属性/单位：Mass / kg
- 数量规则：分配的制剂供应量 / N；cp_supplies。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_supplies`

范围证据需求：需原生数量、活性载体组成、实际稀释及单位密度温度来源；不从安全标签推定用量排放。

###### 实际独立记录的聚乙烯包装薄膜 (`secondary_packing_pe_film`)

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

范围证据需求：需实际数量面积长度质量原生单位及库存退回证据；展开原生单位，质量视图不叠加，不假定每订单包材用量。

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 已完成的密封巴氏牛饮用乳自营冷藏批发批次服务 (`accepted_service`)

实际企业客户批次在所有权转售、冷链封口批次状态验收后完成；乳品及已灌装一层包装是审计商品，不是本服务流身份。

- 选定流：已完成的密封巴氏牛饮用乳自营冷藏批发批次服务
- 流属性/单位：Count / Item(s)
- 数量规则：1 Item(s)
- 数值来源模式：`fixed_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_lots`

范围证据需求：一个参考单位仅为服务归一化定义，不等于包数升千克或金额；须有唯一验收合同批次及实际品项数量门槛。

##### 废物流

###### 废弃密封巴氏杀菌牛乳包装整件 (`sealed_rejects_atomic_case`)

仅在实际独立记录确认“废弃密封巴氏杀菌牛乳包装整件”时适用。本卡只覆盖该命名实物状态及自身实际净量、保留组成和接收门。其他部件、碎片、游离液、独立包装及清理载体仍属于`sealed_rejects`中的强制完成记录；不得移动边界、预设事件、将库存差当废弃，或把仍保留在整体流内的组分另算出口。实际混收流须匹配自身准确身份。原有原生单位数量协议只用于本独占具体情形，其他实际去向分别协调。

- 选定流：废弃密封巴氏杀菌牛乳包装整件
- 流属性/单位：Mass / kg
- 数量规则：实测分配的整件密封不合格单元质量 / N；cp_lots。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_lots`

范围证据需求：需实际处置包数毛皮重净内容物、标签体积与实测乳质量密度温度，以及独立原交付点损失链接；未开封包装不当作废水。

###### 废弃独立收集的巴氏杀菌牛乳 (`collected_milk_loss_atomic_case`)

仅在实际独立记录确认“废弃独立收集的巴氏杀菌牛乳”时适用。本卡只覆盖该命名实物状态及自身实际净量、保留组成和接收门。其他部件、碎片、游离液、独立包装及清理载体仍属于`collected_milk_loss`中的强制完成记录；不得移动边界、预设事件、将库存差当废弃，或把仍保留在整体流内的组分另算出口。实际混收流须匹配自身准确身份。原有原生单位数量协议只用于本独占具体情形，其他实际去向分别协调。

- 选定流：废弃独立收集的巴氏杀菌牛乳
- 流属性/单位：Mass / kg
- 数量规则：实测分配的已收集液态乳废物 / N；cp_loss。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_loss`

范围证据需求：需真实组成、乳质量密度温度、混入清洁水及接收方；混合液总质量不等于原乳，不重复整包废物。

###### 实际单独收集的纸类包装废物 (`packing_waste_paper_pack`)

仅适用于本节点实际独立废弃、单独收集的纸类包装，保留实际湿态或收集状态、组成、接收方及处理运输责任。污染或混收形成的混合流须使用其自身经核实的身份，材料组分仅作不可相加审计。仍在用的周转包装不是本废物，不预设组成、数量、回收或处理。

- 选定流：包装废弃物，纸类 `6b6f1025-cb6a-4c9d-9947-7726c4307a76`
- 流属性/单位：Mass / kg
- 数量规则：实测分配的已分离废包装量 / N；cp_waste。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_waste`

范围证据需求：需真实材料皮重污染及接收回收证据；不自动抵扣替代，也不假定全部接收一层包装成为仓库废物。


###### 实际单独收集的金属包装废物 (`packing_waste_metal_pack`)

仅适用于本节点实际独立废弃、单独收集的金属包装，保留实际湿态或收集状态、组成、接收方及处理运输责任。污染或混收形成的混合流须使用其自身经核实的身份，材料组分仅作不可相加审计。仍在用的周转包装不是本废物，不预设组成、数量、回收或处理。

- 选定流：金属包装废物 `cdda6013-c0c5-4c72-990a-f5668fe71069`
- 流属性/单位：Mass / kg
- 数量规则：实测分配的已分离废包装量 / N；cp_waste。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_waste`

范围证据需求：需真实材料皮重污染及接收回收证据；不自动抵扣替代，也不假定全部接收一层包装成为仓库废物。


###### 实际单独收集的塑料包装废物 (`packing_waste_plastic_pack`)

仅适用于实际独立废弃、单独收集的空塑料包装，保留实际组成、含水状态及接收方。含残留商品的混合包装、污染混合流、设备内保温泡沫、一次性抹布及复合包装不使用本分支；整体混合流中的组分仅作不可相加审计，运输处理责任计入一次。不预设排空、回收、发生或数量。

- 选定流：塑料包装废物 `919351c4-3e25-4092-9934-73ecec021a3b`
- 流属性/单位：Mass / kg
- 数量规则：实测分配的已分离废包装量 / N；cp_waste。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_waste`

范围证据需求：需真实材料皮重污染及接收回收证据；不自动抵扣替代，也不假定全部接收一层包装成为仓库废物。

##### 基本流

###### 实际有独立证据的向空气排放化石二氧化碳 (`other_direct_species_co2_fossil_air`)

仅在实际证据确认化石来源、二氧化碳物种和向空气直接释放时适用。保留报告的碳或CO2基准，碳转CO2须独立有证据的化学计量，不预设系数或发生。 本卡仅记录本节点实际直接释放，不重复计入外购电力上游或供应商已覆盖排放。UUID表示未细分子介质的空气排放，其他实际子介质或来源仍须在余项中匹配，不能改标；缺失数据不等于零。

- 选定流：二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 流属性/单位：Mass / kg
- 数量规则：实测或有据实际活动物种释放量 / N；cp_emissions。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_emissions`

范围证据需求：需物质介质及真实释放或匹配因子组成去向操作数、单位基准来源；缺库存或乳质量不推为气水排放。


###### 实际有独立证据的向空气排放化石甲烷 (`other_direct_species_methane_fossil_air`)

仅在实际证据确认化石来源、甲烷物种和向空气直接释放时适用。生物源或来源未知甲烷仍在余项要求中，不得改标化石源；不预设泄漏发生、气体比例、数量或排放系数。 本卡仅记录本节点实际直接释放，不重复计入外购电力上游或供应商已覆盖排放。UUID表示未细分子介质的空气排放，其他实际子介质或来源仍须在余项中匹配，不能改标；缺失数据不等于零。

- 选定流：甲烷 (化石源) `08a91e70-3ddc-11dd-9610-0050c2490048`
- 流属性/单位：Mass / kg
- 数量规则：实测或有据实际活动物种释放量 / N；cp_emissions。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_emissions`

范围证据需求：需物质介质及真实释放或匹配因子组成去向操作数、单位基准来源；缺库存或乳质量不推为气水排放。


###### 实际有独立证据的向空气排放氧化亚氮 (`other_direct_species_nitrous_oxide_air`)

仅在实际证据确认氧化亚氮物种及向空气直接释放时适用。原生数量为N2O质量，不是氮质量或氮气质量，不预设排放系数或发生。 本卡仅记录本节点实际直接释放，不重复计入外购电力上游或供应商已覆盖排放。UUID表示未细分子介质的空气排放，其他实际子介质或来源仍须在余项中匹配，不能改标；缺失数据不等于零。

- 选定流：一氧化二氮 `08a91e70-3ddc-11dd-94c3-0050c2490048`
- 流属性/单位：Mass / kg
- 数量规则：实测或有据实际活动物种释放量 / N；cp_emissions。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_emissions`

范围证据需求：需物质介质及真实释放或匹配因子组成去向操作数、单位基准来源；缺库存或乳质量不推为气水排放。

## 7. 分配与联产品处理

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| allocation_count | all inventory | 将真实失败隔离拒收订单、退回处理、待机化霜清洁资源归属有依据的正数验收集合 N 或已披露未完成跨期责任；未有验收输出不删除负担。金额利润不能作为物理服务单位。 |  |
| allocation_merchandise | milk stock and loss linkage | 按期初净收货买方退回期末销售退供应方、隔离释放及废弃，核对包数品号批次状态与兼容实测乳液整包数量。隔离移动为内部库存，不是新收货或验收输出。按真实单位密度温度换算基准来源、责任及已含范围，量化原交付点损失乳和相应一层包材负担，在本服务之外仅链接一次。 |  |
| allocation_supply | extra supplies and usable_extra_returns | 各真实原生物资采用 S=归属期初+外部净收货-包含回收结存的期末；净收货在适用时采用实测毛皮重。选择总供应输入 S 并单独记录匹配可用外退输出；或选择仅耗用输入 S-return 并省去该匹配退回交换。不重复扣减，不将期末库存当外退，不删除废物溢漏上游供应负担。 |  |
| allocation_assets | shared_assets | 完整寿命资产当量为集合兼容使用驱动量 / 全部消费批次场址期间的完整寿命驱动量，再除 N 一次。包含制造清洁维护更换终结；采用实测寿命或历史加有据剩余使用终止、兼容驱动单位、不确定性敏感性更新。完整单位驱动服务为替代视图，不再叠加同一资产负担。 |  |
| allocation_period | shared refrigeration and providers | 各兼容计量作业期间，以集合物理驱动量 / 全消费方驱动量分配实测完整范围；纳入待机化霜开门清洁，并核对全部集合范围总量。未完成库存和更换跨期仅结转一次。 |  |
| allocation_waste | actual loss and packing paths | 真实未开封复合不合格包、真实渗漏乳、清洁废水及分离包材数量互不重复。商品退回不是新的服务物资退回；不自动视为废物回收联产品或避免生产抵扣。废物处理须匹配真实服务商边界，含运输仅一次。 |  |


| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| allocation_refrigerant | refrigerant_makeup; usable_refrigerant_return; refrigerant_waste; refrigerant_air | 设备制造或完整外部服务数据集已含的实际出厂充注及工质生产负担须确定唯一责任方，不再新增相同工质投入。回收后留作期末者为库存；实际可用外退须有接收方状态证据才作单独产品出口；实际不可用工质以废物送有记录回收处理。采用总供应输入并单记匹配可用外退输出，或仅耗用输入减该外退并省去匹配退回交换。未退废物释放保留上游负担，实际运输处理仅一次，不自动获得回收替代抵扣。仅当退回量匹配同一独立供应的运行工质库存及其上游负担范围时，才允许仅耗用口径扣减。若回收可用工质源自资产或外部服务数据集已含的设备出厂初始充注，不得扣减无关的运行补充供应；只记录实际产品外送，不自动抵扣，保留资产工质负担责任。初始设备充注、储存工质、真实外部收货、内部回收转移、期末充注及留存库存须物理闭合；回收为内部移动，不是新增外部收货。来源未知或混合时，须先有来源追溯或分摊证据才可扣减供应，不得形成无关补充投入的负值。 |  |



| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| source_scope_normalization | 非交换商品与服务组合 | 原始外部商品库存、来源归属损失及缺阶段新增上游集成量均保留有证据的实际原始作用域。逐量识别一个实际货批、目标服务集合或已经每参考流，并记录来源目标作用域编号与数量口径。来源集合全部出口分母仅把原始量归属该目标范围，不自动等于目标验收服务N。仅与1 Item(s)服务组合时，以同目标范围原始归属量除正数唯一验收source_same_scope_N，记录验收编号时间冲销证据，取得每参考量。有证单货批source_same_scope_N=1，已每参考量不再除。保留实际原始集成量来源链接，不缩小真实上游补阶段量，不用无关N除整个来源集合；N0责任披露不除。 |  |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_lots | sealed_milk_distribution | 验收服务、闭包库存与损失商品链接 | 购入放行库存温度检查销售记录 | site_id; node_id; period_id; consignment_id; supplier_id; buyer_id; SKU; milk_species; pasteurized_state; fat_state; primary_pack_type; batch_lot; manufacturer_release; original_gate; pack_count; labelled_volume; labelled_volume_unit; gross_pack_mass; packaging_tare; net_liquid_mass; mass_unit; density; density_unit; temperature; temperature_unit; density_basis; density_source; fill_or_conversion_factor; conversion_unit; conversion_basis; conversion_source; manufacture_date; expiry_date; manufacturer_storage_conditions; intake_time; acceptance_time; seal_integrity; excursion_id; quarantine_disposition; opening_packs; received_packs; buyer_return_packs; closing_packs; accepted_sold_packs; supplier_return_packs; downgraded_packs; discarded_packs; whole_reject_mass; commodity_dataset_id; upstream_reference_gate; original_gate_loss_quantity; original_gate_loss_unit; original_gate_loss_state; loss_conversion_basis; loss_conversion_source; primary_pack_burden_owner; loss_burden_owner; already_included_scope; integration_result; receiver_id; N; source_assignment_scope_id; source_assignment_scope_kind; source_quantity_basis; source_target_scope_id; source_same_scope_N; source_same_scope_N_unit; source_same_scope_N_basis; source_same_scope_N_method; source_same_scope_N_state; source_same_scope_N_sample_time; source_same_scope_N_source; source_same_scope_acceptance_ids; source_already_per_reference; raw_integration_scope_link; flow_row_id; actual_identity_case; actual_substance_or_material; actual_state_and_gate; case_activation_evidence; quantity_exclusion_links; whole_total_reconciliation | 统计唯一验收企业批次，保留真实密封品号温度状态及批次谱系，按实际处置处理退回隔离，定量链接独立原交付点乳及一层包装上游损失，不重复整包与部分废物。  原始外部商品库存、来源归属损失及缺阶段新增上游集成量均保留有证据的实际原始作用域。逐量识别一个实际货批、目标服务集合或已经每参考流，并记录来源目标作用域编号与数量口径。来源集合全部出口分母仅把原始量归属该目标范围，不自动等于目标验收服务N。仅与1 Item(s)服务组合时，以同目标范围原始归属量除正数唯一验收source_same_scope_N，记录验收编号时间冲销证据，取得每参考量。有证单货批source_same_scope_N=1，已每参考量不再除。保留实际原始集成量来源链接，不缩小真实上游补阶段量，不用无关N除整个来源集合；N0责任披露不除。 只归属独立确认的实物情形，其他实际去向按来源分别保留；每个原生记录只属于一个交换，任何总量仅作不可相加审计。 | Item(s); packs; L; kg | 每次入库验收库存移动退回或拒收 | 生产放行商品接收至企业验收及截止 | 实际冷库交付点 | 每参考流 | 所有权放行验收追溯、秤密度温度证据及定量损失集成 |
| cp_cold | sealed_milk_distribution | 电力及制冷服务期间 | 计量设备温度及实际占用记录 | site_id; node_id; period_id; consignment_id; room_id; equipment_id; meter_id; start_reading; end_reading; energy_unit; product_temperature; room_temperature; ambient_temperature; temperature_unit; start_time; end_time; defrost_event; idle_event; door_event; cohort_driver; all_consumer_driver; driver_unit; attribution_share; driver_source; provider_overlap; N; flow_row_id; actual_identity_case; actual_substance_or_material; actual_origin_and_medium; actual_state_and_gate; case_activation_evidence; typed_or_residual_quantity; quantity_exclusion_links; whole_total_reconciliation; unresolved_occurrence_not_zero | 计量实际冷库搬运运行，以有依据兼容物理驱动量核对全部消费方及待机化霜换批期间，不按订单价格。 按flow_row_id与actual_identity_case划分实际原生记录，仅有证据的分支适用。具体分支与余项在节点内数量互斥，每个实物出入只归属一次，并与相容同范围不可相加总量协调。发生或数量未知仍待采集，不能填零。 | kWh | 每个计量控制间隔及事件 | 收货保存发货及归属待机清洁 | 实际运行制冷搬运范围 | 每参考流 | 校准计量记录、驱动闭合与服务覆盖 |
| cp_fuel | sealed_milk_distribution | 柴油投入及实际燃烧 | 罐体设备与燃料去向记录 | site_id; node_id; period_id; consignment_id; fuel_id; equipment_id; native_unit; opening; gross_receipts; tare; net_receipts; closing_including_recovered; outward_usable_return; nonburned_waste; actual_uncontained_loss; actual_burn; burn_method; all_fates_complete; uncertainty; cohort_driver; all_consumer_driver; driver_unit; N; flow_row_id; actual_identity_case; actual_substance_or_material; actual_origin_and_medium; actual_state_and_gate; case_activation_evidence; typed_or_residual_quantity; quantity_exclusion_links; whole_total_reconciliation; unresolved_occurrence_not_zero | 测量原生库存净收货，采用实际燃烧或完整互斥去向审计，分别保留废物退回期末真实损失；调查未知差额。 按flow_row_id与actual_identity_case划分实际原生记录，仅有证据的分支适用。具体分支与余项在节点内数量互斥，每个实物出入只归属一次，并与相容同范围不可相加总量协调。发生或数量未知仍待采集，不能填零。 柴油升转kg须有实际相容密度、温度状态、质量体积比单位及来源，不预设换算。 | L | 每次收货使用及截止 | 实际纳入搬运期间 | 仅实际归属柴油设备 | 每参考流 | 库存收货校准及完整去向驱动证据 |
| cp_water | sealed_milk_distribution | 清洁水及实际容纳废水 | 水表收集组成接收记录 | site_id; node_id; period_id; consignment_id; event_id; liquid_origin; supplied_water; volume_unit; collected_effluent; defrost_water; retained_liquid; actual_evaporation; direct_abstraction; direct_outfall; receiving_medium; milk_fraction; chemical_composition; composition_basis; composition_source; density; density_unit; temperature; temperature_unit; receiver_id; treatment_gate; provider_overlap; N; flow_row_id; actual_identity_case; actual_substance_or_material; actual_origin_and_medium; actual_state_and_gate; case_activation_evidence; typed_or_residual_quantity; quantity_exclusion_links; whole_total_reconciliation; unresolved_occurrence_not_zero | 区分真实供应清洁化霜出口及污染，测量容纳体积接收方。直接取排水须来源介质独立交换与证据，不以差额推算。 按flow_row_id与actual_identity_case划分实际原生记录，仅有证据的分支适用。具体分支与余项在节点内数量互斥，每个实物出入只归属一次，并与相容同范围不可相加总量协调。发生或数量未知仍待采集，不能填零。 | m3; actual sampling unit | 每次用水收集交接 | 真实归属保存清洁期间 | 供应至容纳处理交付 | 每参考流 | 计量收集采样接收证明 |
| cp_supplies | sealed_milk_distribution | 新增二级包材清洁剂及可用退回 | 原生品号库存收货退回记录 | site_id; node_id; period_id; consignment_id; SKU; material; native_unit; opening; gross_receipts; tare; net_receipts; closing_including_recovered; outward_usable_return; waste; native_quantity; measured_mass; unit_mass; density; density_unit; temperature; temperature_unit; active_fraction; composition_basis; composition_source; dilution; conversion_factor; conversion_unit; conversion_source; representation; receiver_id; N; flow_row_id; actual_identity_case; actual_substance_or_material; actual_origin_and_medium; actual_state_and_gate; case_activation_evidence; typed_or_residual_quantity; quantity_exclusion_links; whole_total_reconciliation; unresolved_occurrence_not_zero | 计量真实原生新增物资及对应未用退回，保留上游单位与已核实换算；与已灌装一层包装、周转筐资产分开，不再新增计为耗材。 按flow_row_id与actual_identity_case划分实际原生记录，仅有证据的分支适用。具体分支与余项在节点内数量互斥，每个实物出入只归属一次，并与相容同范围不可相加总量协调。发生或数量未知仍待采集，不能填零。 | kg; actual native unit | 每次供应使用退回及截止 | 实际新增包装清洁期间 | 仅额外服务耗材 | 每参考流 | 品号单位库存退回匹配与实测换算 |
| cp_refrigerant | sealed_milk_distribution | 明确工质供应及实际组分空气释放 | 充注回收库存维修泄漏记录 | site_id; node_id; period_id; consignment_id; equipment_id; service_event_id; fluid_id; component_id; component_fraction; component_fraction_basis; composition_source; native_unit; opening_stock; gross_receipts; tare; net_receipts; closing_stock; initial_charge; final_charge; charged_amount; recovered_amount; contained_waste; external_return; measured_release; wholefluid_release; fate; fate_basis; fate_source; uncertainty; factor_complete; cohort_driver; all_consumer_driver; driver_unit; transfer_id; external_owner; fluid_usable_state; container_gross; container_tare; fluid_net; receiver_id; receiving_treatment_gate; treatment_dataset; transport_owner; initial_factory_charge_scope; upstream_fluid_production_owner; already_included_asset_or_provider_scope; supply_return_representation; fluid_origin_scope; initial_factory_charge_origin; matched_standalone_supply_id; matched_supply_inventory_scope; matched_return_quantity; unmatched_return_quantity; supply_origin_allocation_source; recovered_retained_stock; physical_fluid_ledger_closure; N | 采用真实明确工质库存及设备充注回收维修证据，区分各去向和组分比例；调查未知差额，不使补充或差额自动等于空气释放。 | kg | 每次充注维修回收泄漏及截止 | 完整归属设备期间 | 实际自有制冷范围 | 每参考流 | 维修称重混合物去向证据与不确定性 |
| cp_provider | sealed_milk_distribution | 完整合同服务作业 | 物理完成合同资源范围记录 | site_id; node_id; period_id; consignment_id; provider_id; job_id; actual_completion_gate; physical_quantity; native_unit; cold_scope; carrier_scope; treatment_scope; asset_scope; included_resources; excluded_resources; overlap_owner; cohort_driver; all_consumer_driver; driver_unit; N | 核实完整计数作业及全部生命周期资源；其他原生计量服务及真实完成须各自具体交换支持，不将工时付款替作次数。 | Item(s); actual provider unit | 每次实际完成作业 | 合同履行期间 | 明确服务起止门槛 | 每参考流 | 完成记录原生单位及无重叠资源覆盖 |
| cp_assets | sealed_milk_distribution | 制冷库房周转筐完整寿命 | 资产清单生命周期与实际驱动记录 | site_id; node_id; period_id; consignment_id; asset_id; asset_native_unit; manufacture_dataset; cleaning_maintenance_scope; replacement_events; end_of_life_scope; driver_id; cohort_driver; cohort_driver_unit; all_consumers; lifetime_driver; lifetime_driver_unit; observed_history_driver; observed_history_driver_unit; evidenced_remainder_driver; remainder_driver_unit; remainder_source; termination_state; uncertainty; sensitivity; update_evidence; provider_overlap; N | 纳入资产制造清洁维护更换终结，按全部用户期间实际兼容服务使用分配；采用实测寿命或历史加有据剩余终止，不假定筐周转次数或折旧后零负担。 | Item(s); actual asset/service unit | 每次资产事件及使用期间 | 实测历史及有据剩余寿命 | 全部纳入共享冷库搬运周转筐资产 | 每参考流 | 生命周期清单兼容单位寿命敏感性更新及无外部重叠 |
| cp_freight | sealed_milk_distribution | 实际归属承运活动 | 载荷路线温度范围记录 | site_id; node_id; period_id; consignment_id; transfer_id; transport_mode; gross_load; tare; net_load; mass_unit; distance; distance_unit; mass_factor; mass_factor_unit; mass_factor_source; distance_factor; distance_factor_unit; distance_factor_source; temperature_control_scope; empty_return_scope; cohort_driver; all_consumer_driver; driver_unit; attribution_share; provider_dataset; overlap_owner; N; load_id; leg_id; gross_basis; tare_basis; tare_source; packed_payload_scope; load_each_or_total; repeated_load_count; repeated_load_count_unit; repeated_load_count_source; that_record_share; that_record_share_basis; that_record_share_source; unique_leg_check | 匹配唯一归属路段真实载荷距离及兼容换算，完整承运制冷空返只计一次；保留实际交接温度时间。  实际包装货载含乳内容物、原一层包、真实二级包及周转筐支撑货物，不重复整件部分。从车辆毛重仅减车辆非货皮，不扣货包，记录毛皮基准。唯一载荷路段每次量乘真实重复数一次而总量不变，各实际包装kg乘km乘该记录完整全消费方份额置求和内再正最终N一次，已归属不再分配。 | kg*km | 每个真实路段 | 明确进出货资源废物运输范围 | 每路段唯一责任方 | 每参考流 | 称重路线因子及完整承运范围 |
| cp_loss | sealed_milk_distribution | 实际破包液态损失 | 事故收集内容物去向记录 | site_id; node_id; period_id; consignment_id; incident_id; source_pack_lot; breached_packs; collected_liquid_gross; container_tare; collected_liquid_net; mass_unit; milk_fraction; added_cleaning_water; primary_pack_status; density; density_unit; temperature; temperature_unit; composition_basis; composition_source; original_gate_quantity; original_gate_unit; conversion_factor; conversion_basis; conversion_source; whole_pack_waste_overlap; commodity_loss_link; receiver_id; treatment_gate; N; flow_row_id; actual_identity_case; actual_substance_or_material; actual_state_and_gate; case_activation_evidence; quantity_exclusion_links; whole_total_reconciliation | 计量真实渗漏收集和混合；分别保留内容物一层包材清洁载体量及原交付点链接，实际分离后不再加同一整包。 只归属独立确认的实物情形，其他实际去向按来源分别保留；每个原生记录只属于一个交换，任何总量仅作不可相加审计。 | kg; actual compatible liquid unit | 每次真实破包清洁交接 | 归属期间真实事故 | 事故收集至实际处理接收方 | 每参考流 | 事故校准数量组成及整包部分不重复 |
| cp_waste | sealed_milk_distribution | 实际分离包材及清洁固体 | 分类计量接收处理记录 | site_id; node_id; period_id; consignment_id; event_id; material; primary_or_added_pack; waste_quantity; native_unit; packaging_tare; milk_contamination; wet_state; whole_pack_waste_overlap; receiver_id; receiving_route; treatment_dataset; transport_owner; N; flow_row_id; actual_identity_case; actual_substance_or_material; actual_origin_and_medium; actual_state_and_gate; case_activation_evidence; typed_or_residual_quantity; quantity_exclusion_links; whole_total_reconciliation; unresolved_occurrence_not_zero | 计量真实分离材料残余及接收方，保留污染与原一层包装上游排除，同时实际废物作业仅计一次。 按flow_row_id与actual_identity_case划分实际原生记录，仅有证据的分支适用。具体分支与余项在节点内数量互斥，每个实物出入只归属一次，并与相容同范围不可相加总量协调。发生或数量未知仍待采集，不能填零。 | kg; actual waste unit | 每次分离收集交接 | 全部归属真实损失清洁期间 | 实际前景废物出口处理边界 | 每参考流 | 质量材料状态接收及整包不重复 |
| cp_emissions | sealed_milk_distribution | 实际其他直接物种 | 测量或匹配活动因子证据 | site_id; node_id; period_id; consignment_id; event_id; substance; receiving_medium; measured_release; release_unit; actual_activity; activity_unit; factor; factor_unit; factor_basis; factor_source; factor_complete; composition; composition_basis; composition_source; fate; fate_basis; fate_source; uncertainty; N; flow_row_id; actual_identity_case; actual_substance_or_material; actual_origin_and_medium; actual_state_and_gate; case_activation_evidence; typed_or_residual_quantity; quantity_exclusion_links; whole_total_reconciliation; unresolved_occurrence_not_zero | 确认真实物质介质，采用实测释放或兼容活动物种因子、整液组成去向；完整因子不重复乘组成，不把乳总量化学需氧量库存差额转为排放。 按flow_row_id与actual_identity_case划分实际原生记录，仅有证据的分支适用。具体分支与余项在节点内数量互斥，每个实物出入只归属一次，并与相容同范围不可相加总量协调。发生或数量未知仍待采集，不能填零。 | kg | 每次实际来源释放事件 | 真实归属运行清洁期间 | 仅直接真实来源，不含服务已计部分 | 每参考流 | 测量或来源活动基准匹配及不确定性 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| normalize_consignment | 所有清单行 | 归属物理交换量除以正数 N 一次；accepted_service 为 1 Item(s)，不是包数或乳体积。 | 归属数量; N; 关联采集协议 | 每参考流交换数量 |  |
| period_driver | electricity; provider_jobs; freight; electricity_ac | 各兼容期间用实测完整范围乘集合驱动量/全消费方驱动量，汇总不重叠期间后采用 normalize_consignment。 | 期间数量; 集合驱动量; 全消费方驱动量; 兼容单位; 范围责任 | 归属物理数量 |  |
| asset_driver | shared_assets | 采用集合兼容寿命使用驱动量除完整寿命驱动量作为资产当量，再应用 normalize_consignment 一次；同一资产等价完整单位驱动服务范围不得另加。 | 完整资产生命周期; 集合驱动量; 寿命驱动及单位; 历史; 有据剩余; 终止; cp_assets | 归属完整资产当量 |  |
| stock_supply | diesel; cleaning_products; secondary_packing; usable_extra_returns; cleaning_products_synthetic_detergent; secondary_packing_pe_film | S=归属期初+外部净收货-包含回收结存的期末。采用总供应输入 S 并单独记录匹配未用退回输出，或仅耗用输入 S-return 并省去该退回交换。燃烧废物未容纳损失为独立实际去向。 | 期初; 毛皮重收货; 净收货; 期末; 匹配可用退回; 口径; 实际燃烧; cp_fuel; cp_supplies | 不重复供应退回数量 |  |
| milk_loss_link | sealed_rejects; collected_milk_loss; collected_milk_loss_atomic_case; sealed_rejects_atomic_case | 用实际品号批次包装谱系及内容物一层包装去向，在链接商品链中量化本项排除的原交付点损失数量负担。匹配实际单位净乳质量密度温度换算证据责任；不从全部清洁液推原乳，不重复整包部分。 | 真实来源批次; 原交付点数据集; 包数; 标签体积; 实际乳质量密度温度; 一层包装状态; 换算基准来源; 损失责任与已含范围; 集成结果; cp_lots; cp_loss | 独立定量的原交付点乳及一层包装损失调整 |  |

### 数据质量要求

| requirement_id | applies_to | requirement | evidence |
| --- | --- | --- | --- |
| quality_identity | 全部实际交换 | 最终交换前核实确切流属性单位组状态介质门槛，明确保留真实配置与支持缺口。 | 完整详情支持兼容证据 |
| quality_cold | sealed_milk_distribution | 真实放行封口制造条件、时间温度偏离及隔离验收可追溯；PCR通过不重置货架寿命或保证安全。 | 批号标签记录仪决策 |
| quality_quantities | 乳品与损失 | 标签体积、实际乳质量密度温度、包数一层皮重及清洁水混合保持独立，有实测来源。 | 称重组成换算及库存核对 |
| quality_resources | 全部实际资源 | 核实自有外部运输冷链、完整资产寿命及实际环境废物范围仅一次，调查缺口而不假零。 | 覆盖期间驱动接收寿命记录 |
| quality_chain | 完整商品链 | 全链使用前，原一层包装在内的可售损失商品上游须在本附加项外定量计入且仅一次。 | 原交付点换算与实际集成范围证据 |

| requirement_id | applies_to | requirement | evidence |
| --- | --- | --- | --- |
| electricity | sealed_milk_distribution | 本条是强制完成记录，不是虚构清单交换。须按`cp_cold`识别`electricity`内每项实际inputs/product物料、服务、资产全寿命职责、废物流或物种来源介质，并在最终数据集使用前分别展开为实物或化学身份明确、具原生数量和覆盖责任方的单独卡片。发生、身份或数量缺失仍待采集并阻断完成，不能填零或删项。原有全部范围、证据、数量范围、库存去向、换算及供应接收职责均保留在下方完整采集定义。 | `cp_cold`; 实际来源关联原生记录 |
| cleaning_water | sealed_milk_distribution | 本条是强制完成记录，不是虚构清单交换。须按`cp_water`识别`cleaning_water`内每项实际inputs/product物料、服务、资产全寿命职责、废物流或物种来源介质，并在最终数据集使用前分别展开为实物或化学身份明确、具原生数量和覆盖责任方的单独卡片。发生、身份或数量缺失仍待采集并阻断完成，不能填零或删项。原有全部范围、证据、数量范围、库存去向、换算及供应接收职责均保留在下方完整采集定义。 | `cp_water`; 实际来源关联原生记录 |
| cleaning_products | sealed_milk_distribution | 本条是强制完成记录，不是虚构清单交换。须按`cp_supplies`识别`cleaning_products`内每项实际inputs/product物料、服务、资产全寿命职责、废物流或物种来源介质，并在最终数据集使用前分别展开为实物或化学身份明确、具原生数量和覆盖责任方的单独卡片。发生、身份或数量缺失仍待采集并阻断完成，不能填零或删项。原有全部范围、证据、数量范围、库存去向、换算及供应接收职责均保留在下方完整采集定义。 | `cp_supplies`; 实际来源关联原生记录 |
| secondary_packing | sealed_milk_distribution | 本条是强制完成记录，不是虚构清单交换。须按`cp_supplies`识别`secondary_packing`内每项实际inputs/product物料、服务、资产全寿命职责、废物流或物种来源介质，并在最终数据集使用前分别展开为实物或化学身份明确、具原生数量和覆盖责任方的单独卡片。发生、身份或数量缺失仍待采集并阻断完成，不能填零或删项。原有全部范围、证据、数量范围、库存去向、换算及供应接收职责均保留在下方完整采集定义。 | `cp_supplies`; 实际来源关联原生记录 |
| refrigerant_makeup | sealed_milk_distribution | 本条是强制完成记录，不是虚构清单交换。须按`cp_refrigerant`识别`refrigerant_makeup`内每项实际inputs/product物料、服务、资产全寿命职责、废物流或物种来源介质，并在最终数据集使用前分别展开为实物或化学身份明确、具原生数量和覆盖责任方的单独卡片。发生、身份或数量缺失仍待采集并阻断完成，不能填零或删项。原有全部范围、证据、数量范围、库存去向、换算及供应接收职责均保留在下方完整采集定义。 | `cp_refrigerant`; 实际来源关联原生记录 |
| provider_jobs | sealed_milk_distribution | 本条是强制完成记录，不是虚构清单交换。须按`cp_provider`识别`provider_jobs`内每项实际inputs/product物料、服务、资产全寿命职责、废物流或物种来源介质，并在最终数据集使用前分别展开为实物或化学身份明确、具原生数量和覆盖责任方的单独卡片。发生、身份或数量缺失仍待采集并阻断完成，不能填零或删项。原有全部范围、证据、数量范围、库存去向、换算及供应接收职责均保留在下方完整采集定义。 | `cp_provider`; 实际来源关联原生记录 |
| shared_assets | sealed_milk_distribution | 本条是强制完成记录，不是虚构清单交换。须按`cp_assets`识别`shared_assets`内每项实际inputs/product物料、服务、资产全寿命职责、废物流或物种来源介质，并在最终数据集使用前分别展开为实物或化学身份明确、具原生数量和覆盖责任方的单独卡片。发生、身份或数量缺失仍待采集并阻断完成，不能填零或删项。原有全部范围、证据、数量范围、库存去向、换算及供应接收职责均保留在下方完整采集定义。 | `cp_assets`; 实际来源关联原生记录 |
| freight | sealed_milk_distribution | 本条是强制完成记录，不是虚构清单交换。须按`cp_freight`识别`freight`内每项实际inputs/product物料、服务、资产全寿命职责、废物流或物种来源介质，并在最终数据集使用前分别展开为实物或化学身份明确、具原生数量和覆盖责任方的单独卡片。发生、身份或数量缺失仍待采集并阻断完成，不能填零或删项。原有全部范围、证据、数量范围、库存去向、换算及供应接收职责均保留在下方完整采集定义。 | `cp_freight`; 实际来源关联原生记录 |
| usable_extra_returns | sealed_milk_distribution | 本条是强制完成记录，不是虚构清单交换。须按`cp_supplies`识别`usable_extra_returns`内每项实际outputs/product物料、服务、资产全寿命职责、废物流或物种来源介质，并在最终数据集使用前分别展开为实物或化学身份明确、具原生数量和覆盖责任方的单独卡片。发生、身份或数量缺失仍待采集并阻断完成，不能填零或删项。原有全部范围、证据、数量范围、库存去向、换算及供应接收职责均保留在下方完整采集定义。 | `cp_supplies`; 实际来源关联原生记录 |
| usable_refrigerant_return | sealed_milk_distribution | 本条是强制完成记录，不是虚构清单交换。须按`cp_refrigerant`识别`usable_refrigerant_return`内每项实际outputs/product物料、服务、资产全寿命职责、废物流或物种来源介质，并在最终数据集使用前分别展开为实物或化学身份明确、具原生数量和覆盖责任方的单独卡片。发生、身份或数量缺失仍待采集并阻断完成，不能填零或删项。原有全部范围、证据、数量范围、库存去向、换算及供应接收职责均保留在下方完整采集定义。 | `cp_refrigerant`; 实际来源关联原生记录 |
| sealed_rejects | sealed_milk_distribution | 本条是强制完成记录，不是虚构清单交换。须按`cp_lots`识别`sealed_rejects`内每项实际outputs/waste物料、服务、资产全寿命职责、废物流或物种来源介质，并在最终数据集使用前分别展开为实物或化学身份明确、具原生数量和覆盖责任方的单独卡片。发生、身份或数量缺失仍待采集并阻断完成，不能填零或删项。`sealed_rejects_atomic_case`只覆盖自身独占实物状态，其他实际去向仍须完成。原有全部范围、证据、数量范围、库存去向、换算及供应接收职责均保留在下方完整采集定义。 | `cp_lots`; 实际来源关联原生记录 |
| collected_milk_loss | sealed_milk_distribution | 本条是强制完成记录，不是虚构清单交换。须按`cp_loss`识别`collected_milk_loss`内每项实际outputs/waste物料、服务、资产全寿命职责、废物流或物种来源介质，并在最终数据集使用前分别展开为实物或化学身份明确、具原生数量和覆盖责任方的单独卡片。发生、身份或数量缺失仍待采集并阻断完成，不能填零或删项。`collected_milk_loss_atomic_case`只覆盖自身独占实物状态，其他实际去向仍须完成。原有全部范围、证据、数量范围、库存去向、换算及供应接收职责均保留在下方完整采集定义。 | `cp_loss`; 实际来源关联原生记录 |
| packing_waste | sealed_milk_distribution | 本条是强制完成记录，不是虚构清单交换。须按`cp_waste`识别`packing_waste`内每项实际outputs/waste物料、服务、资产全寿命职责、废物流或物种来源介质，并在最终数据集使用前分别展开为实物或化学身份明确、具原生数量和覆盖责任方的单独卡片。发生、身份或数量缺失仍待采集并阻断完成，不能填零或删项。原有全部范围、证据、数量范围、库存去向、换算及供应接收职责均保留在下方完整采集定义。 | `cp_waste`; 实际来源关联原生记录 |
| cleaning_effluent | sealed_milk_distribution | 本条是强制完成记录，不是虚构清单交换。须按`cp_water`识别`cleaning_effluent`内每项实际outputs/waste物料、服务、资产全寿命职责、废物流或物种来源介质，并在最终数据集使用前分别展开为实物或化学身份明确、具原生数量和覆盖责任方的单独卡片。发生、身份或数量缺失仍待采集并阻断完成，不能填零或删项。原有全部范围、证据、数量范围、库存去向、换算及供应接收职责均保留在下方完整采集定义。 | `cp_water`; 实际来源关联原生记录 |
| refrigerant_waste | sealed_milk_distribution | 本条是强制完成记录，不是虚构清单交换。须按`cp_refrigerant`识别`refrigerant_waste`内每项实际outputs/waste物料、服务、资产全寿命职责、废物流或物种来源介质，并在最终数据集使用前分别展开为实物或化学身份明确、具原生数量和覆盖责任方的单独卡片。发生、身份或数量缺失仍待采集并阻断完成，不能填零或删项。原有全部范围、证据、数量范围、库存去向、换算及供应接收职责均保留在下方完整采集定义。 | `cp_refrigerant`; 实际来源关联原生记录 |
| refrigerant_air | sealed_milk_distribution | 本条是强制完成记录，不是虚构清单交换。须按`cp_refrigerant`识别`refrigerant_air`内每项实际outputs/elementary物料、服务、资产全寿命职责、废物流或物种来源介质，并在最终数据集使用前分别展开为实物或化学身份明确、具原生数量和覆盖责任方的单独卡片。发生、身份或数量缺失仍待采集并阻断完成，不能填零或删项。原有全部范围、证据、数量范围、库存去向、换算及供应接收职责均保留在下方完整采集定义。 | `cp_refrigerant`; 实际来源关联原生记录 |
| other_direct_species | sealed_milk_distribution | 本条是强制完成记录，不是虚构清单交换。须按`cp_emissions`识别`other_direct_species`内每项实际outputs/elementary物料、服务、资产全寿命职责、废物流或物种来源介质，并在最终数据集使用前分别展开为实物或化学身份明确、具原生数量和覆盖责任方的单独卡片。发生、身份或数量缺失仍待采集并阻断完成，不能填零或删项。原有全部范围、证据、数量范围、库存去向、换算及供应接收职责均保留在下方完整采集定义。 | `cp_emissions`; 实际来源关联原生记录 |


### 强制清单完成记录

以下为强制采集和展开定义，不是交换，也不是填零占位符。正文引用的集合或余项编号对应这些完成要求。最终前景数据集完成前，每个实际情形都须成为具自身证据的原子交换；第6节条件卡不预设发生。独立投入、资产全寿命、互斥供应运输结果、实际废物接收流及每个实际基本流物种介质均须保留，不能因未分配通用UUID而静默漏掉。独占实际情形须与原生总量协调，组分视图不可重复相加。

#### electricity

包括实际冷库压缩机、风机、化霜、照明与搬运计量用电及消费期间；不重复承运或服务商已含电力。

本卡为独立身份分支`electricity_ac`之外的余项清单要求。已计入分支的实际数量不再计入本未解析完成要求，原类目总量仅作不可相加的协调审计。其他实际材料、状态、来源或介质仍须保留自身经核实的身份、原生数量及供应接收责任；记录缺失时，不推定条件分支发生、不发生或数量为零。

- 身份采集要求：实际乳品冷链设备购入电力
- 流属性/单位：Energy / kWh
- 数量规则：分配的实测电量 / N；cp_cold。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_cold`

范围证据需求：需实际库温乳品温度环境条件、计量占用及待机化霜换批记录与物理全消费方驱动量；不设每包或每吨通用耗电量。

#### cleaning_water

记录实际场地容器清洁，不处理或稀释乳品；正常服务中水不进入未开封商品。实际环境取水须有来源明确的投入。

本卡为独立身份分支`cleaning_water_liquid_tap`之外的余项清单要求。已计入分支的实际数量不再计入本未解析完成要求，原类目总量仅作不可相加的协调审计。其他实际材料、状态、来源或介质仍须保留自身经核实的身份、原生数量及供应接收责任；记录缺失时，不推定条件分支发生、不发生或数量为零。

- 身份采集要求：实际冷库清洁购入水
- 流属性/单位：Volume / m3
- 数量规则：实际计量分配的水量 / N；cp_water。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_water`

范围证据需求：需用途出口与持留证据，含实际乳品污染清洁状态；废水体积不等于纯水或默认乳损。

#### cleaning_products

按地面设备实际品号配方记录，不规定食品接触药剂，也不作乳品成分。原生体积数量供应须各自交换或有据换算。

本卡为独立身份分支`cleaning_products_synthetic_detergent`之外的余项清单要求。已计入分支的实际数量不再计入本未解析完成要求，原类目总量仅作不可相加的协调审计。其他实际材料、状态、来源或介质仍须保留自身经核实的身份、原生数量及供应接收责任；记录缺失时，不推定条件分支发生、不发生或数量为零。

- 身份采集要求：实际供应的冷库清洁制剂
- 流属性/单位：Mass / kg
- 数量规则：分配的制剂供应量 / N；cp_supplies。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_supplies`

范围证据需求：需原生数量、活性载体组成、实际稀释及单位密度温度来源；不从安全标签推定用量排放。

#### secondary_packing

仅计批发商实际增添的膜衬标签纸箱；已灌装瓶盒及原封口属于商品上游链，不按每次转售再新增包装投入。

本卡为独立身份分支`secondary_packing_pe_film`之外的余项清单要求。已计入分支的实际数量不再计入本未解析完成要求，原类目总量仅作不可相加的协调审计。其他实际材料、状态、来源或介质仍须保留自身经核实的身份、原生数量及供应接收责任；记录缺失时，不推定条件分支发生、不发生或数量为零。

- 身份采集要求：实际增添的二级包装材料
- 流属性/单位：Mass / kg
- 数量规则：分配的新增包材供应量 / N；cp_supplies。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_supplies`

范围证据需求：需实际数量面积长度质量原生单位及库存退回证据；展开原生单位，质量视图不叠加，不假定每订单包材用量。

#### refrigerant_makeup

实际供应工质与组成同设备充注回收废物释放分开记录；不默认工质类型，也不令补充量等于排放。

- 身份采集要求：按明确工质记录的实际购入制冷剂补充量
- 流属性/单位：Mass / kg
- 数量规则：分配的供应制冷剂质量 / N；cp_refrigerant。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_refrigerant`

范围证据需求：需混合物身份、组分比例基准、维修库存及实际充注回收去向和单位；未知差额须调查，不默认向大气泄漏。

#### provider_jobs

仅在资源范围完整时采用物理定义的已完成计数作业；按托盘日、工时、质量、能源或货运销售的服务须实际原生单位交换及支持。

- 身份采集要求：完整计数的合同分销支持作业
- 流属性/单位：Count / Item(s)
- 数量规则：归属的已完成外部作业数量 / N；cp_provider。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_provider`

范围证据需求：需完成门槛、资源资产温控处理范围及重叠责任；付款不等于物理完成，时间不等于次数。

#### shared_assets

实际冷藏库房搬运监测资产与周转筐，按全部用户期间计制造、清洁维护、更换和寿命终结。

- 身份采集要求：冷库及周转筐资产的完整寿命当量
- 流属性/单位：Count / Item(s)
- 数量规则：归属的完整资产当量 / N；cp_assets。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_assets`

范围证据需求：需实际兼容寿命驱动量、实测历史及有据剩余使用终止；筐周转次数属于服务使用，不是每次制造新筐。

#### freight

实际相关载荷路段须有唯一商品承运服务责任，明确含制冷空返范围；完整承运或直接资源只计一次。

- 身份采集要求：归属的实际冷藏及其他货运活动
- 流属性/单位：Mass * distance / kg*km
- 数量规则：分配的实际千克乘千米 / N；cp_freight。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_freight`

范围证据需求：需实际载荷皮重距离、因子单位来源及分配比例全消费方驱动量；记录冷链交接与温控责任。

#### usable_extra_returns

仅指对应实际未用新增包材清洁物资退给外部所有者；商品退回、周转筐循环与期末库存另有账。

- 身份采集要求：未使用的新增服务物资外退
- 流属性/单位：Mass / kg
- 数量规则：实测分配的可用物资外退量 / N；cp_supplies。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_supplies`

范围证据需求：需原供应身份原生数量状态及接收方；采用总投入加单独退回输出，或仅耗用投入并省去匹配退回交换。

#### usable_refrigerant_return

仅指实测可用工质向有记录外部所有者门槛跨界外送。回收后留作期末库存的工质不是外送；无状态接收证据不认定回收工质可用。须识别原充注供应来源；资产已承担的初始充注不能扣减运行补充供应。

- 身份采集要求：实际退给外部所有者的可用制冷工质
- 流属性/单位：Mass / kg
- 数量规则：实测分配的实际可用工质外送量 / N；cp_refrigerant。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_refrigerant`

范围证据需求：需匹配工质组成原生质量、转移接收方及原供应责任。选择总供应输入加单独可用退回输出，或仅耗用供应且省去该匹配退回交换；不再扣减或自动抵扣替代。仅耗用扣减须匹配同范围独立供应库存；含资产初始充注在内的其他来源只作实际产品转移，不自动抵扣或减无关投入；回收留存为内部库存，不作新收货。

#### sealed_rejects

仅适用于实际有证据废弃，不自动把到期隔离退回单元全视为废物。记录乳品加包装复合质量状态接收方；分离内容物包材后不再重复计整单元。

- 身份采集要求：送已核实废物接收方的实际未开封乳品不合格包装单元
- 流属性/单位：Mass / kg
- 数量规则：实测分配的整件密封不合格单元质量 / N；cp_lots。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_lots`

范围证据需求：需实际处置包数毛皮重净内容物、标签体积与实测乳质量密度温度，以及独立原交付点损失链接；未开封包装不当作废水。

#### collected_milk_loss

仅指真实意外破损渗漏并被收集的含乳液；正常未开封服务不意味着主动倒奶、返工或废水排放。

- 身份采集要求：实际容纳并作液态废物外送的渗漏乳
- 流属性/单位：Mass / kg
- 数量规则：实测分配的已收集液态乳废物 / N；cp_loss。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_loss`

范围证据需求：需真实组成、乳质量密度温度、混入清洁水及接收方；混合液总质量不等于原乳，不重复整包废物。

#### packing_waste

仅实际损失处理中分离的包材或本项新增已用包材。一层包装生产在本服务之外，真实废物处理在内且不重复整包。

本卡为独立身份分支`packing_waste_paper_pack`; `packing_waste_metal_pack`; `packing_waste_plastic_pack`之外的余项清单要求。已计入分支的实际数量不再计入本未解析完成要求，原类目总量仅作不可相加的协调审计。其他实际材料、状态、来源或介质仍须保留自身经核实的身份、原生数量及供应接收责任；记录缺失时，不推定条件分支发生、不发生或数量为零。

- 身份采集要求：实际分离的一层或二级废包装
- 流属性/单位：Mass / kg
- 数量规则：实测分配的已分离废包装量 / N；cp_waste。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_waste`

范围证据需求：需真实材料皮重污染及接收回收证据；不自动抵扣替代，也不假定全部接收一层包装成为仓库废物。

#### cleaning_effluent

实际收集清洁化霜液，分别记录乳品药剂污染；直接环境排放须实际接收水与物质交换，不能用本容纳态废物代替。

- 身份采集要求：实际送处理的容纳态清洁废水
- 流属性/单位：Volume / m3
- 数量规则：计量或实测分配的容纳态废水量 / N；cp_water。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_water`

范围证据需求：需来源真实体积组成密度温度、容纳及处理边界；排水不等于纯乳或自动物种排放。

#### refrigerant_waste

实际不可用工质送经核实接收的回收处理工序，与可用退回、回收后留存及大气组分分开；不把每次回收都当废物或排放。

- 身份采集要求：回收处理交接处的实际容纳态废制冷工质
- 流属性/单位：Mass / kg
- 数量规则：实测分配的容纳态废工质质量 / N；cp_refrigerant。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_refrigerant`

范围证据需求：需实际工质混合组成、容器皮重净工质、转移及接收处理门槛，运输资源覆盖完整且仅一次；未退回部分保留工质上游生产及实际接收回收处置负担，不自动抵扣。

#### refrigerant_air

按真实组分质量与接收空气身份展开；回收剩余充注容纳态废工质及外退分别核算；单凭补充量不证明释放。

- 身份采集要求：向空气实际释放的已识别制冷剂组分
- 流属性/单位：Mass / kg
- 数量规则：实测或审计的真实组分向空气释放量 / N；cp_refrigerant。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_refrigerant`

范围证据需求：需充注库存回收去向核对及混合比例基准来源、不确定性和差额调查；完整物种因子不重复相乘。

#### other_direct_species

按实际介质记录真实燃烧化学溢漏水或其他非制冷剂物质释放。乳、化学需氧量、总清洁剂不是默认基本流物种；真实直接水路径须专门交换。

本卡为独立身份分支`other_direct_species_co2_fossil_air`; `other_direct_species_methane_fossil_air`; `other_direct_species_nitrous_oxide_air`之外的余项清单要求。已计入分支的实际数量不再计入本未解析完成要求，原类目总量仅作不可相加的协调审计。其他实际材料、状态、来源或介质仍须保留自身经核实的身份、原生数量及供应接收责任；记录缺失时，不推定条件分支发生、不发生或数量为零。

- 身份采集要求：向声明介质释放的其他实际已识别物质
- 流属性/单位：Mass / kg
- 数量规则：实测或有据实际活动物种释放量 / N；cp_emissions。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_emissions`

范围证据需求：需物质介质及真实释放或匹配因子组成去向操作数、单位基准来源；缺库存或乳质量不推为气水排放。

## 9. 验证规则

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| validate_reference | accepted_service | 要求唯一正数实际企业验收及参考限定；包、发票行、托盘或取消隔离订单不自动作为完成批次。 |  |
| validate_state | sealed_milk_distribution | 核实已放行巴氏牛饮用乳、未开封一层封口、真实制造者条件及观测冷链批次时间门槛；不替用生乳、超高温常温、返工或其他乳品。 | codex-milk-hygiene-2004 |
| validate_units | all inventory | 保留真实供应服务单位、兼容换算、N和支持；不令1L=1kg、标称包装=实测乳、利润=次数，不替用能源属性。 |  |
| validate_fates | stock and losses | 退回隔离为实际批次状态；密封包废物、真实分离乳包和污染清洁水须数量互斥且有接收证据。质量差额或补充量本身不证明排放。 |  |
| validate_resources | shared assets and providers | 完整寿命制造清洁维护更换终结、兼容驱动历史剩余终止均须证据；全消费方计量期间总量范围责任闭合。 |  |
| validate_release | actual fluid/species exchanges | 需真实明确制冷剂物质、介质、活动因子组成去向单位基准来源及不确定性未知项；完整物种因子不再次乘组分去向。 |  |
| validate_chain | commodity and service integration | 本附加项内无交易乳品或原已灌装包装生产；全链完整前，以密度温度包装基准在外部定量原交付点可售损失负担各仅一次，且运输处理不重叠。 |  |


## 10. 发布数据集画像

| Field | Value |
| --- | --- |
| dataset_role | 具体交换身份及真实证据完整后可用作 secondary_dataset; background_dataset |
| downstream_use | 兼容密封巴氏牛饮用乳商品链的物理批发附加服务，声明完成批次分层 |
| allowed_use | 声明自营冷藏企业客户路径及真实品号包装质量体积状态时间门槛与期间条件 |
| excluded_use | 单独完整乳品足迹；生乳超高温常温其他乳品、制造杀菌灌装零售代理；金额利润；无证包装升千克等价 |
| required_metadata | 全部参考限定；真实原商品验收门槛；正数 N；批号封口温度；原生单位包装密度状态；实际服务冷链物流废物资产寿命范围；损失链接 |
| required_quality_disclosure | 未决身份支持与实际配置展开；测量换算因子范围限制；冷链偏离；资源服务资产寿命覆盖；商品损失集成不确定性 |
| update_trigger | 品号脂肪包装温控条件、实际制冷设备工质、资产寿命使用、服务运输处理范围、损失换算基准、验收门槛或证据变化 |


## 11. 数据来源

| source_id | type | reference | used_for |
| --- | --- | --- | --- |
| unsd-cpc3-wholesale-2025 | official_guidance | UNSD. CPC3.0 explanatory notes,division61; https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | 仅用于自营已加工乳批发分类；生乳鲜壳蛋不属于本61022产品子集。 |
| codex-milk-hygiene-2004 | official_guidance | Codex. Code of Hygienic Practice for Milk and Milk Products,CAC/RCP57-2004,amendment2009,sections2.4,5.2.1.2–3,8.1–2; https://www.fao.org/input/download/standards/10087/CXP_057e.pdf | 支持分销责任、成品冷藏乳产品特定时间温度及制造条件运输控制问题；不作本地法律保证、通用温度数值货架寿命或生命周期排放因子。 |
