---
pcr_id: pcr.offsite-prepared-onsite-finished-plated-meal-service-occasions
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 场外制备、现场完成的分餐膳食服务餐次

## 1. 范围与适用性

实际供出的完整分餐膳食餐次，经过真实场外厨房制备、组分保护包装发运和运输，以及真实现场接收、完成加工与接收者供餐。身份由物理路线和实际完整菜单、组成、份量、服务版本确定。活动、持续合同、客户、品牌、服务员标签本身不定义方法。物理相同的持续合同供餐可以使用本目的中性的物理方法；CPC63391采用proxy，不声称覆盖全叶。[krisp-current-commissary-event-service; box-current-private-dining; silverfeast-current-event-route]

本有界路线排除仅现场制备供餐、仅送达预制食品、仅饮品、食品杂货或批发、容量预订收费，以及完整活动、住宿或娱乐产品。自助或共享食品没有真实匹配的接收者、份量、菜单和交接证据及经审查的物理等价，不能称为相等分餐完整餐次。小食、点心、不等份量或不同菜单不得默认为同一餐。

每个真实接收者、餐次、版本仅有一个最终履行输出。仅制备完成、保温或可供是内部状态，不是最终供给。实际已提供但拒领、未供、部分供出、已接受及撤销各自保留记录。不将吞食量等于实际收到服务，不将计划人数当已供，不自动把拒领变为完整餐，也不抹去已经实际供应的组分。缺道或部分服务依实际版本接受规则判断，并以实际单独输出和责任描述；不设置通用道数、份量、营养、时长或收率。

两个真实节点分别负责场外配料组成、制备、烹饪、包装、发运及归属运输，以及现场接收、完成加工、分份、装盘、供餐、清台和返回。真实配方、处理、包装保留在实际厨房，不虚构工厂。已用可重复物品及可用食品返回有反向配对转移。完整原料和物料上游、库存、食品、水、脂肪、物种去向，清洗洗涤、运输、接收者，以及所有场地、土地、建筑、厨房、车辆、设备、容器餐具、织物全寿命均需互斥责任覆盖。必要闲置、失败取消和零输出时段保留实际责任。

第一方经营者页面只证明定性路线和服务采集问题，示例人数、价格、时间、菜单道数和人员不构成数量范围、温度、食品安全限制、配方、寿命、分配因子或UUID。真实数据与最终具体身份验证仍为必需，缺失不等于零。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.offsite-prepared-onsite-finished-plated-meal-service-occasions |
| classification_refs | CPC3.0:63391 proxy；场外制备、现场完成的分餐完整膳食物理方法可跨活动和持续合同标签 |
| covered_products | 真实场外制备、运输、现场完成并供给一位接收者的一次相容分餐完整膳食服务 |
| excluded_products | 仅现场制备；仅送达；仅饮品；完整活动、营地或住宿；未履行计划人数；不等价自助、共享食品或小食输出 |
| representative_product | 实际经营者、场外厨房、现场任务、接收者、餐次、菜单组成份量、服务版本及已履行组分交接点 |
| production_route | 实际原料 -> 场外制备、配方、烹饪、保温与保护包装 -> 发运、运输、现场接收 -> 完成加工、分餐供给 -> 清台、脏物及可用食品返回和接收 |
| market_state | 实际供出的膳食服务；原生食品质量与真实各道或组分状态独立于Count服务量 |


## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 实际供出的场外制备、现场完成分餐完整膳食餐次 |
| How much | 1 Item(s) |
| How well | 一位真实接收者的一次相容完整分餐菜单、组成、份量及服务版本；实际提供、供出、拒领、部分履行、接受、撤销组分有证据，不是计划人数或吞食质量 |
| How long or cycle | 实际任务、配方、批次、服务时段、起止、时区、UTC偏移、DST及历时；运输、保温、库存、报告及完整资产寿命阶段单独保留，不设固定时长或道数 |
| reference_flow_link | site_fulfilled_meal |

| 字段 | 值 |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | 实际供出的场外制备、现场完成分餐完整膳食餐次 |
| Reference flow property | Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` |
| Reference unit group | Units of items `5beb6eed-33a9-47b8-9ede-1dfe8f679159` |
| Reference unit | Item(s) |
| Required qualifiers | actual_operator_offsite_onsite_job; actual_menu_recipe_composition_portion_service_version; actual_recipient_occasion_complete_plated_gate; actual_course_component_offer_supply_decline_partial_acceptance_reversal; actual_offsite_preparation_dispatch_transport_receipt_finish; actual_native_component_state_quantity_time_pack_temperature_source; matched_return_wash_and_food_redeployment; all_outputs_all_consumers_periods_necessary_idle_failure_N0; full_life_asset_land_provider_receiver_coverage; every_numeric_operand_unit_basis_method_state_sample_time_source |

N_target仅计service_gate下真实履行且画像相同的唯一接收者餐次，并核对实际撤销。Count支持只验证Item(s)，不验证具体膳食身份或等价。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 | source_ids |
| --- | --- | --- | --- | --- | --- |
| service_gate | site_fulfilled_meal | Count | Item(s) | 冻结真实完整菜单、份量、组分、接收者、餐次交接点及接受规则。证明实际供应；仅制备可供属于内部状态。拒领、部分履行、撤销分开记录；计划人数、支付、容量及吞食量不能代替N_target。 | krisp-current-commissary-event-service; box-current-private-dining; silverfeast-current-event-route |
| native_operands | 全部清单行 | 实际有证据支持的原生属性 | 实际原生单位 | 每个独立测量、份额、因子、密度、浓度、时长、寿命、件数操作数有自己的value、unit、basis、method、state、sample_time、source。先核对EACH或TOTAL、属性及量纲兼容，不能用一个全局溯源标志代替。 |  |
| handoff_same_state | offsite_prepared_dispatch; site_prepared_receipt; site_returned_food; offsite_returned_food_receipt; site_dirty_return; offsite_dirty_receipt | Mass and independent Count | kg; actual count | 两节点均有配对transferID、接收者、交接点、时间、原生数量状态和责任。发运到接收的真实损失单列，不强求两个观察值一样。选定接收交接点的输出与输入相等；包装湿载荷不同于净食品或脏物组分审计。相同最终画像N_target仅除一次，不能设固定内部食品质量与餐数比。 | krisp-current-commissary-event-service; box-current-private-dining; silverfeast-current-event-route |
| food_state_basis | actual food and waste | Mass | kg | 保留供货、原料、已制备、实际熟制、保温、已供、湿干、水分、骨皮状态。仅同一样品且仅水定义时，wet_fraction=water_mass/wet_mass和dry_ratio=water_mass/nonwater_dry_mass可得wet_fraction=dry_ratio/(1+dry_ratio)；百分数先换算。含其他挥发物的烘干失重不是水；不给通用收率。 |  |
| water_terminal | water and liquid fates | Volume; Mass | m3; kg | 仅使用真实相容密度温度转换。购入或取用水、配方水、留存内含水、洗涤用途、内部转移、收容接收出口及直接水蒸气是不同视图。终端平衡排除内部用途转移和重复接收视图；实际水物种及介质独立证据。 |  |
| normalization_once | 全部清单行 | Native property and Count | 每参考流 | 实际直接目标责任，或相容原生数量*target_driver/正且完整的all_consumer_driver，再仅除一次正的同范围N_target。仅已经归一到每参考流的量保持不变；仅已归属目标不等于已归一化，已归属目标总量仍须除相同正画像N_target一次；必要闲置、失败、N0责任保留实际责任人、结转和最终解决。 |  |
| freight_work | offsite_freight; site_freight | Mass * Length | t*km | 每唯一实载或返程段采用食品、冰、包装、支撑物、设备完整实际湿载荷，仅除非货物车辆皮重。EACH按实际次数仅一次，TOTAL不重复。记录自身份额置于求和内部，相同正N仅一次；完整供应商或互斥实际自营车队责任。 |  |
| full_life_driver | offsite_asset_life; site_asset_life; offsite_reusables_life; site_reusables_life | Actual compatible native asset service | Native driver; Count only actual counted case | 完整寿命为全部真实使用者和时段的已观察使用加有来源相容剩余使用，或真实终止。制造、安装、维护、更换、终结及真实土地面积*时间和前后状态转变均仅覆盖一次。目标年度N、铭牌容量、虚构年限不是完整寿命。 |  |


## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 实际运营的场外制备厨房和真实服务现场，具有菜单版本、原料组分状态、真实发运接收与责任记录 |
| starting_condition_role | 实际膳食生产服务及完整支持生命周期责任；既有厨房、客户场地、租赁设备不是无负担 |
| product_classification_scope | CPC63391 proxy；以物理路线而非活动或持续合同名称定义身份，不声称完整分类叶覆盖 |
| recursive_input_rule | 不能把相同最终膳食再买作自身输入。内部食品、脏物和可用食品返回按配对真实状态传递先前负担一次。完整供应商仅替代真实覆盖阶段，不重复直接资源资产 |
| upstream_dataset_requirement | 实际食品物料生产和损失，能源、水、运输、供应商和接收者，以及场地土地、建筑、厨房、设备、车辆、可重复物与织物的制造安装维护更换终结完整覆盖。缺失阶段须实际完成整合一次，带来源、原生数量状态时间、责任人、覆盖排除链接，才能完整链使用 |
| disclosure | 实际膳食画像、接收者、交接点、部分履行；双厨房、运输保温、返程洗涤；全部输出使用者时段、闲置失败N0；库存水物种原生平衡；全寿命、供应商、接收者土地覆盖及身份数据缺口 |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| physical_route | 两个节点 | 实际场外多原料配方处理与保护包装、真实运输接收和现场完成分餐供出清台返程必须保留。记录前后状态、全部输入角色、交接及预期输出与残余。配方、烹饪、包装位于实际节点；各冷组装或外购已制备组分保留真实路线。配送是单独声明责任，不称包装。 | krisp-current-commissary-event-service; box-current-private-dining; silverfeast-current-event-route |
| complete_exclusive_coverage | 全部物理职责 | 采用物理相符完整供应商或实际直接底层阶段。真实食品制备、运输、洗涤、资产、接收缺失职责须实际完成并整合一次，不能只有未来补充计划，也不能凭发票删去。覆盖重叠或实际职责未知阻止完整链声明。 |  |
| transport_owner | offsite and onsite interfaces | 每唯一往返或额外运输段及保温、装载、清洁、空驶、资产、燃料、物种责任归一真实责任人。自营车辆完整包含燃料充电、维修、车辆场地、接收者职责；完整承运数据仅替代完全匹配的已覆盖部分。 |  |
| return_wash_owner | food and reusables returns | 实际正反向转移按ID、状态、原生数量、时间及接收者配对。脏载荷的留存食品水是不可加和内含。洗涤在真实责任节点或服务商，保留上游制造寿命；已用返还不是未用信用。 |  |
| full_asset_land | all assets and sites | 枚举实际自有、租赁、客户提供的共享建筑土地、装修、厨房、车辆、临时设备、容器餐具用具织物及每个使用者时段。土地原生面积*时间和真实前后状态转换进入完整资产服务，或实际独立完成接口，不转换为Count。 |  |
| zero_transfer_no_erasure | zero handoff or N_target | 实际食品或返程交接为零时，不能通过虚假正转移传递资源。保留责任池及已完成的互斥来源结转接收补充，向真实最终责任整合一次。N0未分配负担或缺少接收最终解决阻止完整性。 |  |
| qualitative_limits | source use | 经营者页面只用于定性路线问题，示例菜单道数时间价格人数不能变数量、温度法律营养收率寿命因子。真实独立工业保藏、洗涤、发电或新生产需审查路线扩展；正常真实保温清洗烹饪运输仍包含。 | krisp-current-commissary-event-service; box-current-private-dining; silverfeast-current-event-route |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| allocation_projection | all output/resource projections | 全运营ALL-OUTPUT台账为完整归属前证据：每项输出保留实际完整原生量、来源、接收者、交接点状态、实际时间、来源，不作quantity*target_share。先判独立过程细分或真实联合联产品。独立过程先归实际直接职责，再以物理驱动分真实共享职责。联合产品须有实际PCR专属归属决定、责任人和边界；内部食品、脏物和可用返回不是联产品。声明一种投影及allocation_stage：(A)目标已归属LCI仅含目标责任和真实相连内部职责，其他独立客户或非餐输出仅证据，不成为触发二次分配的联产品；(B)单独声明未分配wholepool，保留全部输入和全部输出，仅在指定下游一步归属。禁止混用或再分A。 |  |
| exclusive_food_input_roles | food ingredient receipt and return inputs | site_ingredients仅真实额外外购的独立食品原料，排除site_prepared_receipt已覆盖的同一物理组分阶段。内部配对接收或可用食品返回进本地库存只是来源关联，不再新增外部食品制造输入。offsite_returned_food_receipt与dirty_receipt保留原旧状态食品和可重复物负担，只加实际新增返工洗涤储存运输。每项输入识别source_input_role/internal_external/linked_input_coverage/nativequantity，泛称原料及可重复物制造卡排除同一实物阶段重叠。 |  |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| physical_product_output_quantity | all actual intended product outputs | 原始ALL-OUTPUT台账保留未归一化的真实完整原生量，不乘targetshare，也不是每参考流量。目标已归属LCI中独立其他餐或产品仅审计，不是共同产品交换。若实际有记录的PCR专属决定保留真实联合产品最终交换，则以所选真实物理输出量除相同正画像N_target一次，已每参考流不再除；不得对物理输出量应用通用资源目标份额。本输出规则优先于通用资源归属。单独未分配wholepool保留完整输入及全部输出，仅指定一步归属。 |  |


## 6. 过程清单结构

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| offsite_preparation_dispatch | 场外厨房制备、包装、发运与责任运输 | required | 真实场外组分制备包装发运、运输和返回物品责任 | 实际配方制备烹饪保温包装与接收交接点食品输出；真实承运或自营车队及场外洗涤 | offsite_prepared_dispatch |
| onsite_finish_service | 现场接收、完成加工、分餐供给与返程 | required | 真实接收场外组分并在现场完成分餐供给真实接收者 | 实际接收、完成加工、分份分餐保温供出补餐清台返程接收责任 | site_fulfilled_meal |

实际配方、发运、服务、清台、洗涤批次，与连续制冷、就绪、保温重叠。输入输出、清洗、换批事件均连接真实运行ID和时间，不能重复共享运行负担。场外配方形成实际已制备保护组分；现场可加入真实其他原料形成最终分餐状态。枚举全部组成输入、处理前后状态、包装或呈现前后状态、包装材料接触或保温角色、复用和终结。处理助剂、能源水、制备烹饪溢洒不合格损失分开。制备含冷组装；不强制每个组分混合或加热。[krisp-current-commissary-event-service; box-current-private-dining; silverfeast-current-event-route]

保护食品为实际计量的内部接收交接点输出。发运、运输保温变化损失和现场接收核对；场外输出和现场输入采用同一接收点数量状态transferID。实际净食品、包装完整湿货载和原生件数不同，不相加。返回可用食品和脏物按旧状态和先前责任至真实接收者，不是新采购或额外最终餐次。所有节点采用同一最终N仅归一一次，不设名义原料与餐数比。

每个实际独立预期输出具有自己的outputID、接收者、菜单或产品版本、交接点状态、实际交接时间、来源、原生数量和责任人。包括其他客户菜单、真实员工支持、独立食品饮品及其他产品、部分输出。属性单位不同的交换实际展开，Count其他膳食行不是通用非餐占位符。同一完整餐各组分不是可分配出去的独立联产品。必要员工餐依其支持的实际责任池，不自动作为其他销售删除。

拒收、原料、不合格、过量制备和保温食品、返回物保留原节点批次及真实接受返工、再热、再部署、在制品、可用外部转移、废弃和接收路径。真实回路保留先前负担与新增责任一次，不重复原生投入或完整餐。质量温度保温服务标准必须有实际来源，不设通用安全条件。失败、取消、关闭和闲置工作保留责任，包括零餐次和零交接时段。

### 过程：场外厨房制备、包装、发运与责任运输 (`offsite_preparation_dispatch`)

#### 输入

##### 产品流

###### 实际液态处理自来水供给 (`offsite_recipe_water_liquid_tap`)

仅在实际来源确为处理后的自来水且用于所声明用途时适用。保留实际供应方、水质、温度状态和供应边界，不假定所有供水都是自来水。冰、瓶装矿泉水、再生水、未经处理的水及环境直接取水保留各自实际身份。沿用原卡原生质量或体积基准；最终换算为质量参考量时须有实际相容密度和状态证据，不能把目录中的次要体积关系作为默认现场密度。

- 选定流：自来水 `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- 绑定：`fixed`
- 流属性/单位：Mass / kg
- 数量规则：按 cp_offsite_food 采集的实际互斥目标责任原生数量 / 正的同画像 N_target，仅一次；已为每参考流的记录不再变更；N_target=0 保留责任但不除零。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_offsite_food`
- 来源：`krisp-current-commissary-event-service`; `box-current-private-dining`; `silverfeast-current-event-route`

范围证据需求：实际批次添加量和相容冰液质量基准。 不给通用每餐因子、配方、收率、温度、寿命或零值默认。

###### 实际液态处理自来水供给 (`offsite_operating_water_liquid_tap`)

仅在实际来源确为处理后的自来水且用于所声明用途时适用。保留实际供应方、水质、温度状态和供应边界，不假定所有供水都是自来水。冰、瓶装矿泉水、再生水、未经处理的水及环境直接取水保留各自实际身份。沿用原卡原生质量或体积基准；最终换算为质量参考量时须有实际相容密度和状态证据，不能把目录中的次要体积关系作为默认现场密度。

- 选定流：自来水 `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- 绑定：`fixed`
- 流属性/单位：Volume / m3
- 数量规则：按 cp_offsite_utilities 采集的实际互斥目标责任原生数量 / 正的同画像 N_target，仅一次；已为每参考流的记录不再变更；N_target=0 保留责任但不除零。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_offsite_utilities`
- 来源：`krisp-current-commissary-event-service`; `box-current-private-dining`; `silverfeast-current-event-route`

范围证据需求：供应商、表计边界及实际用途、库存、接收状态。 不给通用每餐因子、配方、收率、温度、寿命或零值默认。

###### 实际使用点交流电 (`offsite_electricity_ac`)

仅适用于实际跨越本节点边界、且未由完整供应商数据覆盖的交流电。该身份未特指供应方、电压、发电组合或交付线损归属，仍须按要求采集。经核实的电力流以1 MJ电能为基准，其ILCD属性名称为净热值；原生kWh按精确的3.6 MJ/kWh换算，不能套用燃料热值系数。直流电或其他不匹配电力状态保留在余项要求中。

- 选定流：交流电 `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- 绑定：`fixed`
- 流属性/单位：Energy / kWh
- 数量规则：按 cp_offsite_utilities 采集的实际互斥目标责任原生数量 / 正的同画像 N_target，仅一次；已为每参考流的记录不再变更；N_target=0 保留责任但不除零。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_offsite_utilities`
- 来源：`krisp-current-commissary-event-service`; `box-current-private-dining`; `silverfeast-current-event-route`

范围证据需求：实际表计或充电时段、覆盖边界、全部使用者及闲置分配。 不给通用每餐因子、配方、收率、温度、寿命或零值默认。

###### 实际外购交付的有效热量 (`offsite_thermal_delivered_heat`)

仅记录有证据能量基准、实际跨越本节点边界交付的有效热量。保留供回状态、温度品位、覆盖范围及实际损失责任。通用热能身份不预设天然气、蒸汽质量、锅炉效率或温度；制冷、燃料能量及缺少蒸汽转能量证据的情形不使用该身份。

- 选定流：热能 `4f19a302-7b3b-11dd-ad8b-0800200c9a66`
- 绑定：`fixed`
- 流属性/单位：Energy / MJ
- 数量规则：按 cp_offsite_utilities 采集的实际互斥目标责任原生数量 / 正的同画像 N_target，仅一次；已为每参考流的记录不再变更；N_target=0 保留责任但不除零。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_offsite_utilities`
- 来源：`krisp-current-commissary-event-service`; `box-current-private-dining`; `silverfeast-current-event-route`

范围证据需求：实交热量、原生单位、温度或服务状态及完整供应商边界。 不给通用每餐因子、配方、收率、温度、寿命或零值默认。

###### 实际独立记录的合成洗涤剂投入 (`offsite_cleaning_materials_synthetic_detergent`)

仅适用于产品配方、供应状态及用途记录确认的实际合成表面活性洗涤剂。记录扣除包装皮重的材料净量，区分浓缩液与稀释水，整体配方与组分不得相加重复计入。肥皂、消毒剂、抹布、滤材等仍按各自实际身份记录，不预设清洁配方、剂量或发生。

- 选定流：洗涤剂 `1c57d123-df57-49ab-b9d4-957403beb8a5`
- 绑定：`fixed`
- 流属性/单位：Mass / kg
- 数量规则：按 cp_offsite_materials 采集的实际互斥目标责任原生数量 / 正的同画像 N_target，仅一次；已为每参考流的记录不再变更；N_target=0 保留责任但不除零。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_offsite_materials`
- 来源：`krisp-current-commissary-event-service`; `box-current-private-dining`; `silverfeast-current-event-route`

范围证据需求：实际收货、库存、稀释、组成、用途和去向。 不给通用每餐因子、配方、收率、温度、寿命或零值默认。

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 现场接收交接点的实际保护包装制备食品组分 (`offsite_prepared_dispatch`)

真实配方批次组分在场外制备、保护包装、发运、运输并在现场接收。接收状态与数量包含真实保温变化并单独记录运输损失。两节点采用同一transferID、原生接收数量状态和责任。发运与接收可因真实损失不同，不能强制观察值相等。

- 选定流：现场接收交接点的实际保护包装制备食品组分
- 流属性/单位：Mass / kg
- 数量规则：按 cp_offsite_handoff 采集的实际互斥目标责任原生数量 / 正的同画像 N_target，仅一次；已为每参考流的记录不再变更；N_target=0 保留责任但不除零。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_offsite_handoff`
- 来源：`krisp-current-commissary-event-service`; `box-current-private-dining`; `silverfeast-current-event-route`

范围证据需求：真实发运和接收原生湿干组成、运输损失、时间状态温度，以及净食品与包装区分。 不给通用每餐因子、配方、收率、温度、寿命或零值默认。

##### 废物流

###### 实际废弃的未供出制备食品 (`offsite_unserved_waste`)

已制备、保温或可供但未供出的食品，须区分未制备库存、在制品、可用出口和餐盘废弃。以真实处置判断废物。

本流身份仅适用于按实际计量状态记录的废弃人类食物或饮料。包装、餐具、清洁化学品和非食用备料残余需要各自的流身份。不同实际接收方的废物流保持分开；若与非食物材料真实混收，应核实整条混合废物流身份，本食物来源视图仅作为不可相加的审计记录。

- 选定流：食物残渣 `55feef47-26fa-48d1-bcf5-1eb581143bd7`
- 绑定：`fixed`
- 流属性/单位：Mass / kg
- 数量规则：按 cp_offsite_food 采集的实际互斥目标责任原生数量 / 正的同画像 N_target，仅一次；已为每参考流的记录不再变更；N_target=0 保留责任但不除零。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_offsite_food`
- 来源：`krisp-current-commissary-event-service`; `box-current-private-dining`; `silverfeast-current-event-route`

范围证据需求：实际制备、期末、可供、供出、拒领、再部署、废弃核对。 不给通用每餐因子、配方、收率、温度、寿命或零值默认。

###### 实际餐盘及已供出食品返回废物 (`offsite_plate_waste`)

食品已供给接收者后返回的餐盘或供餐剩余。实际吃下数量仅为独立证据视图，不作为服务最终分母。按真实菜品、材料和接收者展开。

本流身份仅适用于按实际计量状态记录的废弃人类食物或饮料。包装、餐具、清洁化学品和非食用备料残余需要各自的流身份。不同实际接收方的废物流保持分开；若与非食物材料真实混收，应核实整条混合废物流身份，本食物来源视图仅作为不可相加的审计记录。

- 选定流：食物残渣 `55feef47-26fa-48d1-bcf5-1eb581143bd7`
- 绑定：`fixed`
- 流属性/单位：Mass / kg
- 数量规则：按 cp_offsite_food 采集的实际互斥目标责任原生数量 / 正的同画像 N_target，仅一次；已为每参考流的记录不再变更；N_target=0 保留责任但不除零。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_offsite_food`
- 来源：`krisp-current-commissary-event-service`; `box-current-private-dining`; `silverfeast-current-event-route`

范围证据需求：实际清台采集、供出状态质量与返回量，且不得和未供出重复。 不给通用每餐因子、配方、收率、温度、寿命或零值默认。

###### 实际单独收集的纸类包装废物 (`offsite_pack_waste_paper_pack`)

仅适用于本节点实际独立废弃、单独收集的纸类包装，保留实际湿态或收集状态、组成、接收方及处理运输责任。污染或混收形成的混合流须使用其自身经核实的身份，材料组分仅作不可相加审计。仍在用的周转包装不是本废物，不预设组成、数量、回收或处理。

- 选定流：包装废弃物，纸类 `6b6f1025-cb6a-4c9d-9947-7726c4307a76`
- 绑定：`fixed`
- 流属性/单位：Mass / kg
- 数量规则：按 cp_offsite_fates 采集的实际互斥目标责任原生数量 / 正的同画像 N_target，仅一次；已为每参考流的记录不再变更；N_target=0 保留责任但不除零。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_offsite_fates`
- 来源：`krisp-current-commissary-event-service`; `box-current-private-dining`; `silverfeast-current-event-route`

范围证据需求：实际拆包、污染状态、扣除真实皮重后的称量及接收者。 不给通用每餐因子、配方、收率、温度、寿命或零值默认。

###### 实际单独收集的金属包装废物 (`offsite_pack_waste_metal_pack`)

仅适用于本节点实际独立废弃、单独收集的金属包装，保留实际湿态或收集状态、组成、接收方及处理运输责任。污染或混收形成的混合流须使用其自身经核实的身份，材料组分仅作不可相加审计。仍在用的周转包装不是本废物，不预设组成、数量、回收或处理。

- 选定流：金属包装废物 `cdda6013-c0c5-4c72-990a-f5668fe71069`
- 绑定：`fixed`
- 流属性/单位：Mass / kg
- 数量规则：按 cp_offsite_fates 采集的实际互斥目标责任原生数量 / 正的同画像 N_target，仅一次；已为每参考流的记录不再变更；N_target=0 保留责任但不除零。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_offsite_fates`
- 来源：`krisp-current-commissary-event-service`; `box-current-private-dining`; `silverfeast-current-event-route`

范围证据需求：实际拆包、污染状态、扣除真实皮重后的称量及接收者。 不给通用每餐因子、配方、收率、温度、寿命或零值默认。

##### 基本流

###### 实际排入空气的水蒸气 (`offsite_vapour`)

真实烹饪、保温或洗涤向空气排放的水物种。不能用供水减废水推算未知差额；排气热量不是水质量。

- 选定流：水蒸气 `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- 绑定：`fixed`
- 流属性/单位：Mass / kg
- 数量规则：按 cp_offsite_environment 采集的实际互斥目标责任原生数量 / 正的同画像 N_target，仅一次；已为每参考流的记录不再变更；N_target=0 保留责任但不除零。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_offsite_environment`
- 来源：`krisp-current-commissary-event-service`; `box-current-private-dining`; `silverfeast-current-event-route`

范围证据需求：实际测得或独立支持的水蒸气数量、基准、来源，不以未知残差代替。 不给通用每餐因子、配方、收率、温度、寿命或零值默认。

###### 实际有独立证据的向空气排放化石二氧化碳 (`offsite_species_co2_fossil_air`)

仅在实际证据确认化石来源、二氧化碳物种和向空气直接释放时适用。保留报告的碳或CO2基准，碳转CO2须独立有证据的化学计量，不预设系数或发生。 本卡仅记录本节点实际直接释放，不重复计入外购电力上游或供应商已覆盖排放。UUID表示未细分子介质的空气排放，其他实际子介质或来源仍须在余项中匹配，不能改标；缺失数据不等于零。

- 选定流：二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 绑定：`fixed`
- 流属性/单位：Mass / kg
- 数量规则：按 cp_offsite_environment 采集的实际互斥目标责任原生数量 / 正的同画像 N_target，仅一次；已为每参考流的记录不再变更；N_target=0 保留责任但不除零。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_offsite_environment`
- 来源：`krisp-current-commissary-event-service`; `box-current-private-dining`; `silverfeast-current-event-route`

范围证据需求：实际测量或相容有证据的因子、活动、去向，每个操作数来源以及准确物种介质。 不给通用每餐因子、配方、收率、温度、寿命或零值默认。

###### 实际有独立证据的向空气排放化石甲烷 (`offsite_species_methane_fossil_air`)

仅在实际证据确认化石来源、甲烷物种和向空气直接释放时适用。生物源或来源未知甲烷仍在余项要求中，不得改标化石源；不预设泄漏发生、气体比例、数量或排放系数。 本卡仅记录本节点实际直接释放，不重复计入外购电力上游或供应商已覆盖排放。UUID表示未细分子介质的空气排放，其他实际子介质或来源仍须在余项中匹配，不能改标；缺失数据不等于零。

- 选定流：甲烷 (化石源) `08a91e70-3ddc-11dd-9610-0050c2490048`
- 绑定：`fixed`
- 流属性/单位：Mass / kg
- 数量规则：按 cp_offsite_environment 采集的实际互斥目标责任原生数量 / 正的同画像 N_target，仅一次；已为每参考流的记录不再变更；N_target=0 保留责任但不除零。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_offsite_environment`
- 来源：`krisp-current-commissary-event-service`; `box-current-private-dining`; `silverfeast-current-event-route`

范围证据需求：实际测量或相容有证据的因子、活动、去向，每个操作数来源以及准确物种介质。 不给通用每餐因子、配方、收率、温度、寿命或零值默认。

###### 实际有独立证据的向空气排放氧化亚氮 (`offsite_species_nitrous_oxide_air`)

仅在实际证据确认氧化亚氮物种及向空气直接释放时适用。原生数量为N2O质量，不是氮质量或氮气质量，不预设排放系数或发生。 本卡仅记录本节点实际直接释放，不重复计入外购电力上游或供应商已覆盖排放。UUID表示未细分子介质的空气排放，其他实际子介质或来源仍须在余项中匹配，不能改标；缺失数据不等于零。

- 选定流：一氧化二氮 `08a91e70-3ddc-11dd-94c3-0050c2490048`
- 绑定：`fixed`
- 流属性/单位：Mass / kg
- 数量规则：按 cp_offsite_environment 采集的实际互斥目标责任原生数量 / 正的同画像 N_target，仅一次；已为每参考流的记录不再变更；N_target=0 保留责任但不除零。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_offsite_environment`
- 来源：`krisp-current-commissary-event-service`; `box-current-private-dining`; `silverfeast-current-event-route`

范围证据需求：实际测量或相容有证据的因子、活动、去向，每个操作数来源以及准确物种介质。 不给通用每餐因子、配方、收率、温度、寿命或零值默认。

### 过程：现场接收、完成加工、分餐供给与返程 (`onsite_finish_service`)

#### 输入

##### 产品流

###### 实际液态处理自来水供给 (`site_recipe_water_liquid_tap`)

仅在实际来源确为处理后的自来水且用于所声明用途时适用。保留实际供应方、水质、温度状态和供应边界，不假定所有供水都是自来水。冰、瓶装矿泉水、再生水、未经处理的水及环境直接取水保留各自实际身份。沿用原卡原生质量或体积基准；最终换算为质量参考量时须有实际相容密度和状态证据，不能把目录中的次要体积关系作为默认现场密度。

- 选定流：自来水 `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- 绑定：`fixed`
- 流属性/单位：Mass / kg
- 数量规则：按 cp_site_food 采集的实际互斥目标责任原生数量 / 正的同画像 N_target，仅一次；已为每参考流的记录不再变更；N_target=0 保留责任但不除零。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_site_food`
- 来源：`krisp-current-commissary-event-service`; `box-current-private-dining`; `silverfeast-current-event-route`

范围证据需求：实际批次添加量和相容冰液质量基准。 不给通用每餐因子、配方、收率、温度、寿命或零值默认。

###### 实际液态处理自来水供给 (`site_operating_water_liquid_tap`)

仅在实际来源确为处理后的自来水且用于所声明用途时适用。保留实际供应方、水质、温度状态和供应边界，不假定所有供水都是自来水。冰、瓶装矿泉水、再生水、未经处理的水及环境直接取水保留各自实际身份。沿用原卡原生质量或体积基准；最终换算为质量参考量时须有实际相容密度和状态证据，不能把目录中的次要体积关系作为默认现场密度。

- 选定流：自来水 `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- 绑定：`fixed`
- 流属性/单位：Volume / m3
- 数量规则：按 cp_site_utilities 采集的实际互斥目标责任原生数量 / 正的同画像 N_target，仅一次；已为每参考流的记录不再变更；N_target=0 保留责任但不除零。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_site_utilities`
- 来源：`krisp-current-commissary-event-service`; `box-current-private-dining`; `silverfeast-current-event-route`

范围证据需求：供应商、表计边界及实际用途、库存、接收状态。 不给通用每餐因子、配方、收率、温度、寿命或零值默认。

###### 实际使用点交流电 (`site_electricity_ac`)

仅适用于实际跨越本节点边界、且未由完整供应商数据覆盖的交流电。该身份未特指供应方、电压、发电组合或交付线损归属，仍须按要求采集。经核实的电力流以1 MJ电能为基准，其ILCD属性名称为净热值；原生kWh按精确的3.6 MJ/kWh换算，不能套用燃料热值系数。直流电或其他不匹配电力状态保留在余项要求中。

- 选定流：交流电 `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- 绑定：`fixed`
- 流属性/单位：Energy / kWh
- 数量规则：按 cp_site_utilities 采集的实际互斥目标责任原生数量 / 正的同画像 N_target，仅一次；已为每参考流的记录不再变更；N_target=0 保留责任但不除零。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_site_utilities`
- 来源：`krisp-current-commissary-event-service`; `box-current-private-dining`; `silverfeast-current-event-route`

范围证据需求：实际表计或充电时段、覆盖边界、全部使用者及闲置分配。 不给通用每餐因子、配方、收率、温度、寿命或零值默认。

###### 实际外购交付的有效热量 (`site_thermal_delivered_heat`)

仅记录有证据能量基准、实际跨越本节点边界交付的有效热量。保留供回状态、温度品位、覆盖范围及实际损失责任。通用热能身份不预设天然气、蒸汽质量、锅炉效率或温度；制冷、燃料能量及缺少蒸汽转能量证据的情形不使用该身份。

- 选定流：热能 `4f19a302-7b3b-11dd-ad8b-0800200c9a66`
- 绑定：`fixed`
- 流属性/单位：Energy / MJ
- 数量规则：按 cp_site_utilities 采集的实际互斥目标责任原生数量 / 正的同画像 N_target，仅一次；已为每参考流的记录不再变更；N_target=0 保留责任但不除零。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_site_utilities`
- 来源：`krisp-current-commissary-event-service`; `box-current-private-dining`; `silverfeast-current-event-route`

范围证据需求：实交热量、原生单位、温度或服务状态及完整供应商边界。 不给通用每餐因子、配方、收率、温度、寿命或零值默认。

###### 实际独立记录的合成洗涤剂投入 (`site_cleaning_materials_synthetic_detergent`)

仅适用于产品配方、供应状态及用途记录确认的实际合成表面活性洗涤剂。记录扣除包装皮重的材料净量，区分浓缩液与稀释水，整体配方与组分不得相加重复计入。肥皂、消毒剂、抹布、滤材等仍按各自实际身份记录，不预设清洁配方、剂量或发生。

- 选定流：洗涤剂 `1c57d123-df57-49ab-b9d4-957403beb8a5`
- 绑定：`fixed`
- 流属性/单位：Mass / kg
- 数量规则：按 cp_site_materials 采集的实际互斥目标责任原生数量 / 正的同画像 N_target，仅一次；已为每参考流的记录不再变更；N_target=0 保留责任但不除零。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_site_materials`
- 来源：`krisp-current-commissary-event-service`; `box-current-private-dining`; `silverfeast-current-event-route`

范围证据需求：实际收货、库存、稀释、组成、用途和去向。 不给通用每餐因子、配方、收率、温度、寿命或零值默认。

###### 现场接收交接点的实际保护包装制备食品组分 (`site_prepared_receipt`)

与场外输出匹配的真实现场收货，交接点、状态、数量、transferID相同。运输发运与收货审计不增加最终膳食，不强制内部质量等于最终N。

- 选定流：现场接收交接点的实际保护包装制备食品组分
- 流属性/单位：Mass / kg
- 数量规则：按 cp_site_handoff 采集的实际互斥目标责任原生数量 / 正的同画像 N_target，仅一次；已为每参考流的记录不再变更；N_target=0 保留责任但不除零。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_site_handoff`
- 来源：`krisp-current-commissary-event-service`; `box-current-private-dining`; `silverfeast-current-event-route`

范围证据需求：实际配对转移、组分身份组成状态、原生量及完整上游运输覆盖。 不给通用每餐因子、配方、收率、温度、寿命或零值默认。

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 实际供出的场外制备、现场完成分餐完整膳食餐次 (`site_fulfilled_meal`)

实际完整且相容的分餐菜单和份量服务，于真实接收者餐位及服务时段供出；具有各道或各组分的供应、提供、接受、拒领及撤销记录。餐次身份、履行交接点、部分履行和真实资源池由service_gate管理。Count支持不等于具体服务身份。

- 选定流：实际供出的场外制备、现场完成分餐完整膳食餐次
- 流属性/单位：Count / Item(s)
- 数量规则：1 Item(s)
- 数值来源模式：`fixed_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_site_service`
- 来源：`krisp-current-commissary-event-service`; `box-current-private-dining`; `silverfeast-current-event-route`

范围证据需求：实际唯一接收者、餐次、版本、菜单、组分及完整供给交接记录。 不给通用每餐因子、配方、收率、温度、寿命或零值默认。

##### 废物流

###### 实际废弃的未供出制备食品 (`site_unserved_waste`)

已制备、保温或可供但未供出的食品，须区分未制备库存、在制品、可用出口和餐盘废弃。以真实处置判断废物。

本流身份仅适用于按实际计量状态记录的废弃人类食物或饮料。包装、餐具、清洁化学品和非食用备料残余需要各自的流身份。不同实际接收方的废物流保持分开；若与非食物材料真实混收，应核实整条混合废物流身份，本食物来源视图仅作为不可相加的审计记录。

- 选定流：食物残渣 `55feef47-26fa-48d1-bcf5-1eb581143bd7`
- 绑定：`fixed`
- 流属性/单位：Mass / kg
- 数量规则：按 cp_site_food 采集的实际互斥目标责任原生数量 / 正的同画像 N_target，仅一次；已为每参考流的记录不再变更；N_target=0 保留责任但不除零。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_site_food`
- 来源：`krisp-current-commissary-event-service`; `box-current-private-dining`; `silverfeast-current-event-route`

范围证据需求：实际制备、期末、可供、供出、拒领、再部署、废弃核对。 不给通用每餐因子、配方、收率、温度、寿命或零值默认。

###### 实际餐盘及已供出食品返回废物 (`site_plate_waste`)

食品已供给接收者后返回的餐盘或供餐剩余。实际吃下数量仅为独立证据视图，不作为服务最终分母。按真实菜品、材料和接收者展开。

本流身份仅适用于按实际计量状态记录的废弃人类食物或饮料。包装、餐具、清洁化学品和非食用备料残余需要各自的流身份。不同实际接收方的废物流保持分开；若与非食物材料真实混收，应核实整条混合废物流身份，本食物来源视图仅作为不可相加的审计记录。

- 选定流：食物残渣 `55feef47-26fa-48d1-bcf5-1eb581143bd7`
- 绑定：`fixed`
- 流属性/单位：Mass / kg
- 数量规则：按 cp_site_food 采集的实际互斥目标责任原生数量 / 正的同画像 N_target，仅一次；已为每参考流的记录不再变更；N_target=0 保留责任但不除零。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_site_food`
- 来源：`krisp-current-commissary-event-service`; `box-current-private-dining`; `silverfeast-current-event-route`

范围证据需求：实际清台采集、供出状态质量与返回量，且不得和未供出重复。 不给通用每餐因子、配方、收率、温度、寿命或零值默认。

###### 实际单独收集的纸类包装废物 (`site_pack_waste_paper_pack`)

仅适用于本节点实际独立废弃、单独收集的纸类包装，保留实际湿态或收集状态、组成、接收方及处理运输责任。污染或混收形成的混合流须使用其自身经核实的身份，材料组分仅作不可相加审计。仍在用的周转包装不是本废物，不预设组成、数量、回收或处理。

- 选定流：包装废弃物，纸类 `6b6f1025-cb6a-4c9d-9947-7726c4307a76`
- 绑定：`fixed`
- 流属性/单位：Mass / kg
- 数量规则：按 cp_site_fates 采集的实际互斥目标责任原生数量 / 正的同画像 N_target，仅一次；已为每参考流的记录不再变更；N_target=0 保留责任但不除零。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_site_fates`
- 来源：`krisp-current-commissary-event-service`; `box-current-private-dining`; `silverfeast-current-event-route`

范围证据需求：实际拆包、污染状态、扣除真实皮重后的称量及接收者。 不给通用每餐因子、配方、收率、温度、寿命或零值默认。

###### 实际单独收集的金属包装废物 (`site_pack_waste_metal_pack`)

仅适用于本节点实际独立废弃、单独收集的金属包装，保留实际湿态或收集状态、组成、接收方及处理运输责任。污染或混收形成的混合流须使用其自身经核实的身份，材料组分仅作不可相加审计。仍在用的周转包装不是本废物，不预设组成、数量、回收或处理。

- 选定流：金属包装废物 `cdda6013-c0c5-4c72-990a-f5668fe71069`
- 绑定：`fixed`
- 流属性/单位：Mass / kg
- 数量规则：按 cp_site_fates 采集的实际互斥目标责任原生数量 / 正的同画像 N_target，仅一次；已为每参考流的记录不再变更；N_target=0 保留责任但不除零。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_site_fates`
- 来源：`krisp-current-commissary-event-service`; `box-current-private-dining`; `silverfeast-current-event-route`

范围证据需求：实际拆包、污染状态、扣除真实皮重后的称量及接收者。 不给通用每餐因子、配方、收率、温度、寿命或零值默认。

##### 基本流

###### 实际排入空气的水蒸气 (`site_vapour`)

真实烹饪、保温或洗涤向空气排放的水物种。不能用供水减废水推算未知差额；排气热量不是水质量。

- 选定流：水蒸气 `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- 绑定：`fixed`
- 流属性/单位：Mass / kg
- 数量规则：按 cp_site_environment 采集的实际互斥目标责任原生数量 / 正的同画像 N_target，仅一次；已为每参考流的记录不再变更；N_target=0 保留责任但不除零。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_site_environment`
- 来源：`krisp-current-commissary-event-service`; `box-current-private-dining`; `silverfeast-current-event-route`

范围证据需求：实际测得或独立支持的水蒸气数量、基准、来源，不以未知残差代替。 不给通用每餐因子、配方、收率、温度、寿命或零值默认。

###### 实际有独立证据的向空气排放化石二氧化碳 (`site_species_co2_fossil_air`)

仅在实际证据确认化石来源、二氧化碳物种和向空气直接释放时适用。保留报告的碳或CO2基准，碳转CO2须独立有证据的化学计量，不预设系数或发生。 本卡仅记录本节点实际直接释放，不重复计入外购电力上游或供应商已覆盖排放。UUID表示未细分子介质的空气排放，其他实际子介质或来源仍须在余项中匹配，不能改标；缺失数据不等于零。

- 选定流：二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 绑定：`fixed`
- 流属性/单位：Mass / kg
- 数量规则：按 cp_site_environment 采集的实际互斥目标责任原生数量 / 正的同画像 N_target，仅一次；已为每参考流的记录不再变更；N_target=0 保留责任但不除零。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_site_environment`
- 来源：`krisp-current-commissary-event-service`; `box-current-private-dining`; `silverfeast-current-event-route`

范围证据需求：实际测量或相容有证据的因子、活动、去向，每个操作数来源以及准确物种介质。 不给通用每餐因子、配方、收率、温度、寿命或零值默认。

###### 实际有独立证据的向空气排放化石甲烷 (`site_species_methane_fossil_air`)

仅在实际证据确认化石来源、甲烷物种和向空气直接释放时适用。生物源或来源未知甲烷仍在余项要求中，不得改标化石源；不预设泄漏发生、气体比例、数量或排放系数。 本卡仅记录本节点实际直接释放，不重复计入外购电力上游或供应商已覆盖排放。UUID表示未细分子介质的空气排放，其他实际子介质或来源仍须在余项中匹配，不能改标；缺失数据不等于零。

- 选定流：甲烷 (化石源) `08a91e70-3ddc-11dd-9610-0050c2490048`
- 绑定：`fixed`
- 流属性/单位：Mass / kg
- 数量规则：按 cp_site_environment 采集的实际互斥目标责任原生数量 / 正的同画像 N_target，仅一次；已为每参考流的记录不再变更；N_target=0 保留责任但不除零。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_site_environment`
- 来源：`krisp-current-commissary-event-service`; `box-current-private-dining`; `silverfeast-current-event-route`

范围证据需求：实际测量或相容有证据的因子、活动、去向，每个操作数来源以及准确物种介质。 不给通用每餐因子、配方、收率、温度、寿命或零值默认。

###### 实际有独立证据的向空气排放氧化亚氮 (`site_species_nitrous_oxide_air`)

仅在实际证据确认氧化亚氮物种及向空气直接释放时适用。原生数量为N2O质量，不是氮质量或氮气质量，不预设排放系数或发生。 本卡仅记录本节点实际直接释放，不重复计入外购电力上游或供应商已覆盖排放。UUID表示未细分子介质的空气排放，其他实际子介质或来源仍须在余项中匹配，不能改标；缺失数据不等于零。

- 选定流：一氧化二氮 `08a91e70-3ddc-11dd-94c3-0050c2490048`
- 绑定：`fixed`
- 流属性/单位：Mass / kg
- 数量规则：按 cp_site_environment 采集的实际互斥目标责任原生数量 / 正的同画像 N_target，仅一次；已为每参考流的记录不再变更；N_target=0 保留责任但不除零。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_site_environment`
- 来源：`krisp-current-commissary-event-service`; `box-current-private-dining`; `silverfeast-current-event-route`

范围证据需求：实际测量或相容有证据的因子、活动、去向，每个操作数来源以及准确物种介质。 不给通用每餐因子、配方、收率、温度、寿命或零值默认。

## 7. 分配与联产品处理

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| all_intended_outputs | 两个节点 | 先枚举所有实际独立预期输出及自己的outputID、接收者、交接点状态、实际交接时间、来源及原生数量，再归属。完整餐次各道组分或内部转移不新增最终输出。其他菜单、任务、员工支持、食品、非餐职责及部分输出按真实相容交接点区分；可用产品、库存返工、残余与废物不同。 |  |
| physical_attribution | 每项资源或事件 | 优先实际专属计量目标职责。否则以完整实际全部使用者池的相容原生物理因果驱动量分配，包含员工支持、其他客户、时段、闲置失败。每记录target resource=quantity*target_driver/all_consumer_driver，分母必须正且完整，再仅除一次正的同画像N_target。收入、名义人数、计划人数或容量不能作为未解释替代。记录实际理由、驱动证据和不确定性，不相容画像不得合池。 |  |
| period_and_shared_life | 全部共享运营及资产 | 枚举配方、运行、换批、报告、库存、保温、运输、服务、清洗及资产制造安装维护更换终止终结阶段，逐资源资产输出事件使用者连接时段。共享资产服务按有来源相容寿命驱动量在全部实际节点任务使用者时段分一次；采用已观察使用加有证据剩余，或实际终止总量。目标年度N不是寿命。 |  |
| rework_and_exit | offspec/unused/used/return | 拒收部分输出不能自动变为完整餐。连接来源批次节点旧状态及真实返工降级可用转移废物出口，先前和新增负担仅一次。可用出口回收须有实际责任归属决定，不自动抵扣原生制造或替代信用。总额未用退货与净额省略退货互斥。 |  |
| zero_and_carry | 必要闲置、失败及N0职责 | 目标餐或内部转移为零时仍保留真实责任池、来源结转时段、接收者及最终解决。仅归于有证据的真实责任输出或已完成明确关联补充，不造正输出、不除零、不删资源。未分配或只计划未来解决阻止完整链使用。 |  |
| projection_once | 全部独立预期产出 | 执行allocation_projection：全运营全部输出证据在归属前完整；实际物理输出量不乘targetshare。先按独立过程细分，再分配真实共享职责。真实联合联产品须有实际PCR专属决定。目标已归属与未分配wholepool投影互斥；其他独立输出不能使已经归到目标的输入再次分配。 |  |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| joint_output_precedence | 作为交换保留的真实联合产出 | 原始ALL-OUTPUT台账保留未归一化的真实完整原生量，不乘targetshare，也不是每参考流量。目标已归属LCI中独立其他餐或产品仅审计，不是共同产品交换。若实际有记录的PCR专属决定保留真实联合产品最终交换，则以所选真实物理输出量除相同正画像N_target一次，已每参考流不再除；不得对物理输出量应用通用资源目标份额。本输出规则优先于通用资源归属。单独未分配wholepool保留完整输入及全部输出，仅指定一步归属。 |  |


## 8. 前景数据采集、计算与质量规则

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_offsite_food | offsite_preparation_dispatch | 原料库存、组成制备与全部食品去向 | 批次库存、配方、生产与称重去向记录 | record_id; node_id; site_id; job_id; service_version; batch_id; period_id; source_record_id; owner_id; covered_stage_id; receiver_id; output_id; recipient_id; transfer_id; actual_state; gate; event_start; event_end; timezone; utc_offset; dst_resolution; record_scope; each_or_total; covered_components; excluded_components; carry_source_id; carry_receiver_id; final_resolution_id; ingredient_id; recipe_version; component_id; species_material; supplied_state; actual_operation; food_fate; path_id; upstream_dataset_id; gross_mass; gross_mass_unit; gross_mass_basis; gross_mass_method; gross_mass_state; gross_mass_sample_time; gross_mass_source; tare_mass; tare_mass_unit; tare_mass_basis; tare_mass_method; tare_mass_state; tare_mass_sample_time; tare_mass_source; net_mass; net_mass_unit; net_mass_basis; net_mass_method; net_mass_state; net_mass_sample_time; net_mass_source; opening_mass; opening_mass_unit; opening_mass_basis; opening_mass_method; opening_mass_state; opening_mass_sample_time; opening_mass_source; inbound_mass; inbound_mass_unit; inbound_mass_basis; inbound_mass_method; inbound_mass_state; inbound_mass_sample_time; inbound_mass_source; closing_mass; closing_mass_unit; closing_mass_basis; closing_mass_method; closing_mass_state; closing_mass_sample_time; closing_mass_source; unused_return_mass; unused_return_mass_unit; unused_return_mass_basis; unused_return_mass_method; unused_return_mass_state; unused_return_mass_sample_time; unused_return_mass_source; used_return_mass; used_return_mass_unit; used_return_mass_basis; used_return_mass_method; used_return_mass_state; used_return_mass_sample_time; used_return_mass_source; ingredient_amount; ingredient_amount_unit; ingredient_amount_basis; ingredient_amount_method; ingredient_amount_state; ingredient_amount_sample_time; ingredient_amount_source; recipe_water_mass; recipe_water_mass_unit; recipe_water_mass_basis; recipe_water_mass_method; recipe_water_mass_state; recipe_water_mass_sample_time; recipe_water_mass_source; prepared_mass; prepared_mass_unit; prepared_mass_basis; prepared_mass_method; prepared_mass_state; prepared_mass_sample_time; prepared_mass_source; served_food_mass; served_food_mass_unit; served_food_mass_basis; served_food_mass_method; served_food_mass_state; served_food_mass_sample_time; served_food_mass_source; refill_mass; refill_mass_unit; refill_mass_basis; refill_mass_method; refill_mass_state; refill_mass_sample_time; refill_mass_source; unserved_mass; unserved_mass_unit; unserved_mass_basis; unserved_mass_method; unserved_mass_state; unserved_mass_sample_time; unserved_mass_source; plate_return_mass; plate_return_mass_unit; plate_return_mass_basis; plate_return_mass_method; plate_return_mass_state; plate_return_mass_sample_time; plate_return_mass_source; prep_loss_mass; prep_loss_mass_unit; prep_loss_mass_basis; prep_loss_mass_method; prep_loss_mass_state; prep_loss_mass_sample_time; prep_loss_mass_source; wet_sample_mass; wet_sample_mass_unit; wet_sample_mass_basis; wet_sample_mass_method; wet_sample_mass_state; wet_sample_mass_sample_time; wet_sample_mass_source; nonwater_dry_mass; nonwater_dry_mass_unit; nonwater_dry_mass_basis; nonwater_dry_mass_method; nonwater_dry_mass_state; nonwater_dry_mass_sample_time; nonwater_dry_mass_source; water_mass; water_mass_unit; water_mass_basis; water_mass_method; water_mass_state; water_mass_sample_time; water_mass_source; density; density_unit; density_basis; density_method; density_state; density_sample_time; density_source; temperature; temperature_unit; temperature_basis; temperature_method; temperature_state; temperature_sample_time; temperature_source; each_count; each_count_unit; each_count_basis; each_count_method; each_count_state; each_count_sample_time; each_count_source; target_driver; target_driver_unit; target_driver_basis; target_driver_method; target_driver_state; target_driver_sample_time; target_driver_source; all_consumer_driver; all_consumer_driver_unit; all_consumer_driver_basis; all_consumer_driver_method; all_consumer_driver_state; all_consumer_driver_sample_time; all_consumer_driver_source; projection_variant; allocation_stage; output_evidence_or_exchange; independent_or_joint_output; source_input_role; internal_external; linked_input_coverage; linked_native_input_quantity; linked_native_input_quantity_unit; linked_native_input_quantity_basis; linked_native_input_quantity_method; linked_native_input_quantity_state; linked_native_input_quantity_sample_time; linked_native_input_quantity_source; flow_row_id; actual_identity_case; actual_substance_or_material; actual_origin_and_medium; actual_state_and_gate; case_activation_evidence; typed_or_residual_quantity; quantity_exclusion_links; whole_total_reconciliation; unresolved_occurrence_not_zero | 确认每项实际原料组分、供应商和制备状态边界。分别称量去真实皮重后的期初、入库、期末及配对未用和已用返回；按批次连接真实配方投料、制备烹饪保温完成前后状态。独立称量补餐、未供、餐盘返回、制备损失溢洒、在制品、可用返回和废弃及真实目的地。保留样品水分基准及全部预期输出链接。按food_stock和food_reconcile，不以名义菜单或通用收率代替。 执行exclusive_food_input_roles：现场泛称原料仅真实额外外购；内部接收、旧食品或脏物返回仅库存来源关联，不能再计制造，只加真实新增责任。 | kg及实际相容原生组成单位 | 每个真实收发存、批次、表计、供餐、转移、接收、资产事件；连续时段在实际截止点读取 | 真实任务批次、保温行程、库存报告及完整寿命阶段，带实际时间戳、时区与DST | 仅此真实节点，及实际供应、现场场外、运输、服务商、接收职责与全部使用者 | 每参考流 | 原始来源、校准验收覆盖链接、全部输出使用者完整性、各原生操作数及真实结转最终解决 |
| cp_offsite_utilities | offsite_preparation_dispatch | 节点实际能源、燃料、水与运行库存 | 表计时段、供应商储罐充电及职责日志 | record_id; node_id; site_id; job_id; service_version; batch_id; period_id; source_record_id; owner_id; covered_stage_id; receiver_id; output_id; recipient_id; transfer_id; actual_state; gate; event_start; event_end; timezone; utc_offset; dst_resolution; record_scope; each_or_total; covered_components; excluded_components; carry_source_id; carry_receiver_id; final_resolution_id; carrier_id; grade; meter_id; enduse; asset_id; provider_dataset_id; stock_pool_id; electricity; electricity_unit; electricity_basis; electricity_method; electricity_state; electricity_sample_time; electricity_source; water_volume; water_volume_unit; water_volume_basis; water_volume_method; water_volume_state; water_volume_sample_time; water_volume_source; water_meter_opening_reading; water_meter_opening_reading_unit; water_meter_opening_reading_basis; water_meter_opening_reading_method; water_meter_opening_reading_state; water_meter_opening_reading_sample_time; water_meter_opening_reading_source; water_meter_closing_reading; water_meter_closing_reading_unit; water_meter_closing_reading_basis; water_meter_closing_reading_method; water_meter_closing_reading_state; water_meter_closing_reading_sample_time; water_meter_closing_reading_source; water_stock_opening; water_stock_opening_unit; water_stock_opening_basis; water_stock_opening_method; water_stock_opening_state; water_stock_opening_sample_time; water_stock_opening_source; water_stock_inbound; water_stock_inbound_unit; water_stock_inbound_basis; water_stock_inbound_method; water_stock_inbound_state; water_stock_inbound_sample_time; water_stock_inbound_source; water_stock_closing; water_stock_closing_unit; water_stock_closing_basis; water_stock_closing_method; water_stock_closing_state; water_stock_closing_sample_time; water_stock_closing_source; water_paired_transfer_in; water_paired_transfer_in_unit; water_paired_transfer_in_basis; water_paired_transfer_in_method; water_paired_transfer_in_state; water_paired_transfer_in_sample_time; water_paired_transfer_in_source; water_paired_transfer_out; water_paired_transfer_out_unit; water_paired_transfer_out_basis; water_paired_transfer_out_method; water_paired_transfer_out_state; water_paired_transfer_out_sample_time; water_paired_transfer_out_source; fuel_opening; fuel_opening_unit; fuel_opening_basis; fuel_opening_method; fuel_opening_state; fuel_opening_sample_time; fuel_opening_source; fuel_inbound; fuel_inbound_unit; fuel_inbound_basis; fuel_inbound_method; fuel_inbound_state; fuel_inbound_sample_time; fuel_inbound_source; fuel_closing; fuel_closing_unit; fuel_closing_basis; fuel_closing_method; fuel_closing_state; fuel_closing_sample_time; fuel_closing_source; unused_fuel_return; unused_fuel_return_unit; unused_fuel_return_basis; unused_fuel_return_method; unused_fuel_return_state; unused_fuel_return_sample_time; unused_fuel_return_source; burned_fuel; burned_fuel_unit; burned_fuel_basis; burned_fuel_method; burned_fuel_state; burned_fuel_sample_time; burned_fuel_source; thermal_energy; thermal_energy_unit; thermal_energy_basis; thermal_energy_method; thermal_energy_state; thermal_energy_sample_time; thermal_energy_source; density; density_unit; density_basis; density_method; density_state; density_sample_time; density_source; temperature; temperature_unit; temperature_basis; temperature_method; temperature_state; temperature_sample_time; temperature_source; calorific_value; calorific_value_unit; calorific_value_basis; calorific_value_method; calorific_value_state; calorific_value_sample_time; calorific_value_source; duty_duration; duty_duration_unit; duty_duration_basis; duty_duration_method; duty_duration_state; duty_duration_sample_time; duty_duration_source; target_driver; target_driver_unit; target_driver_basis; target_driver_method; target_driver_state; target_driver_sample_time; target_driver_source; all_consumer_driver; all_consumer_driver_unit; all_consumer_driver_basis; all_consumer_driver_method; all_consumer_driver_state; all_consumer_driver_sample_time; all_consumer_driver_source; each_count; each_count_unit; each_count_basis; each_count_method; each_count_state; each_count_sample_time; each_count_source; projection_variant; allocation_stage; output_evidence_or_exchange; independent_or_joint_output; source_input_role; internal_external; linked_input_coverage; flow_row_id; actual_identity_case; actual_substance_or_material; actual_origin_and_medium; actual_state_and_gate; case_activation_evidence; typed_or_residual_quantity; quantity_exclusion_links; whole_total_reconciliation; unresolved_occurrence_not_zero | 读取本节点实际供应商、表计、储罐和充电时段记录。水表期初期末读数及有来源增量不同于水库存期初期末；有实际储水和责任转移时独立采集。核对来源、用途、冷链、自营运输、服务商覆盖。称量或有来源记录期初、入库、期末和真正配对未用退货，独立核对实际燃烧活动。记录相容原生转换及全部使用者必要闲置池，执行exclusive_coverage和normalize_once。 | kWh; MJ; kg; m3及实际相容原生单位 | 每个真实收发存、批次、表计、供餐、转移、接收、资产事件；连续时段在实际截止点读取 | 真实任务批次、保温行程、库存报告及完整寿命阶段，带实际时间戳、时区与DST | 仅此真实节点，及实际供应、现场场外、运输、服务商、接收职责与全部使用者 | 每参考流 | 原始来源、校准验收覆盖链接、全部输出使用者完整性、各原生操作数及真实结转最终解决 |
| cp_offsite_materials | offsite_preparation_dispatch | 独立耗材、包装与运行流体 | 材料收发存、使用稀释、包装和设备维修日志 | record_id; node_id; site_id; job_id; service_version; batch_id; period_id; source_record_id; owner_id; covered_stage_id; receiver_id; output_id; recipient_id; transfer_id; actual_state; gate; event_start; event_end; timezone; utc_offset; dst_resolution; record_scope; each_or_total; covered_components; excluded_components; carry_source_id; carry_receiver_id; final_resolution_id; material_id; formulation; pack_id; contact_thermal_role; reuse_status; equipment_id; species_id; stock_pool_id; retained_content_role; old_state_transfer_id; gross_mass; gross_mass_unit; gross_mass_basis; gross_mass_method; gross_mass_state; gross_mass_sample_time; gross_mass_source; tare_mass; tare_mass_unit; tare_mass_basis; tare_mass_method; tare_mass_state; tare_mass_sample_time; tare_mass_source; net_mass; net_mass_unit; net_mass_basis; net_mass_method; net_mass_state; net_mass_sample_time; net_mass_source; opening_mass; opening_mass_unit; opening_mass_basis; opening_mass_method; opening_mass_state; opening_mass_sample_time; opening_mass_source; inbound_mass; inbound_mass_unit; inbound_mass_basis; inbound_mass_method; inbound_mass_state; inbound_mass_sample_time; inbound_mass_source; other_receipt_mass; other_receipt_mass_unit; other_receipt_mass_basis; other_receipt_mass_method; other_receipt_mass_state; other_receipt_mass_sample_time; other_receipt_mass_source; paired_transfer_in_mass; paired_transfer_in_mass_unit; paired_transfer_in_mass_basis; paired_transfer_in_mass_method; paired_transfer_in_mass_state; paired_transfer_in_mass_sample_time; paired_transfer_in_mass_source; paired_transfer_out_mass; paired_transfer_out_mass_unit; paired_transfer_out_mass_basis; paired_transfer_out_mass_method; paired_transfer_out_mass_state; paired_transfer_out_mass_sample_time; paired_transfer_out_mass_source; closing_mass; closing_mass_unit; closing_mass_basis; closing_mass_method; closing_mass_state; closing_mass_sample_time; closing_mass_source; unused_return_mass; unused_return_mass_unit; unused_return_mass_basis; unused_return_mass_method; unused_return_mass_state; unused_return_mass_sample_time; unused_return_mass_source; used_recovered_mass; used_recovered_mass_unit; used_recovered_mass_basis; used_recovered_mass_method; used_recovered_mass_state; used_recovered_mass_sample_time; used_recovered_mass_source; material_mass; material_mass_unit; material_mass_basis; material_mass_method; material_mass_state; material_mass_sample_time; material_mass_source; concentrate_mass; concentrate_mass_unit; concentrate_mass_basis; concentrate_mass_method; concentrate_mass_state; concentrate_mass_sample_time; concentrate_mass_source; solution_mass; solution_mass_unit; solution_mass_basis; solution_mass_method; solution_mass_state; solution_mass_sample_time; solution_mass_source; active_mass; active_mass_unit; active_mass_basis; active_mass_method; active_mass_state; active_mass_sample_time; active_mass_source; dilution_water_mass; dilution_water_mass_unit; dilution_water_mass_basis; dilution_water_mass_method; dilution_water_mass_state; dilution_water_mass_sample_time; dilution_water_mass_source; wholeequipment_content_exit_mass; wholeequipment_content_exit_mass_unit; wholeequipment_content_exit_mass_basis; wholeequipment_content_exit_mass_method; wholeequipment_content_exit_mass_state; wholeequipment_content_exit_mass_sample_time; wholeequipment_content_exit_mass_source; each_count; each_count_unit; each_count_basis; each_count_method; each_count_state; each_count_sample_time; each_count_source; unit_mass; unit_mass_unit; unit_mass_basis; unit_mass_method; unit_mass_state; unit_mass_sample_time; unit_mass_source; concentration; concentration_unit; concentration_basis; concentration_method; concentration_state; concentration_sample_time; concentration_source; density; density_unit; density_basis; density_method; density_state; density_sample_time; density_source; temperature; temperature_unit; temperature_basis; temperature_method; temperature_state; temperature_sample_time; temperature_source; factory_content_mass; factory_content_mass_unit; factory_content_mass_basis; factory_content_mass_method; factory_content_mass_state; factory_content_mass_sample_time; factory_content_mass_source; installed_content_mass; installed_content_mass_unit; installed_content_mass_basis; installed_content_mass_method; installed_content_mass_state; installed_content_mass_sample_time; installed_content_mass_source; recovered_closing_mass; recovered_closing_mass_unit; recovered_closing_mass_basis; recovered_closing_mass_method; recovered_closing_mass_state; recovered_closing_mass_sample_time; recovered_closing_mass_source; target_driver; target_driver_unit; target_driver_basis; target_driver_method; target_driver_state; target_driver_sample_time; target_driver_source; all_consumer_driver; all_consumer_driver_unit; all_consumer_driver_basis; all_consumer_driver_method; all_consumer_driver_state; all_consumer_driver_sample_time; all_consumer_driver_source; projection_variant; allocation_stage; output_evidence_or_exchange; independent_or_joint_output; source_input_role; internal_external; linked_input_coverage; flow_row_id; actual_identity_case; actual_substance_or_material; actual_origin_and_medium; actual_state_and_gate; case_activation_evidence; typed_or_residual_quantity; quantity_exclusion_links; whole_total_reconciliation; unresolved_occurrence_not_zero | 逐实际独立材料、包装、配方、物种、库存池记录，仅扣真实包装皮重，外部退货前计收货。配对真正未用退货。记录包装前后食品保护状态、拒收、复用与终结。gross/tare/net、浓缩液/溶液/活性物/稀释水、每项其他收货配对转移、完整设备留存内容出口均有独立原生数量及七字段证据。区分出厂内含充注、独立供应、储存安装回收内含和全部去向，执行food_stock及fluid_exclusivity；已用回收不净扣原生制造。 | kg、实际件数及相容浓度体积单位 | 每个真实收发存、批次、表计、供餐、转移、接收、资产事件；连续时段在实际截止点读取 | 真实任务批次、保温行程、库存报告及完整寿命阶段，带实际时间戳、时区与DST | 仅此真实节点，及实际供应、现场场外、运输、服务商、接收职责与全部使用者 | 每参考流 | 原始来源、校准验收覆盖链接、全部输出使用者完整性、各原生操作数及真实结转最终解决 |
| cp_offsite_assets | offsite_preparation_dispatch | 全部使用者的场地、土地、设备与可重复物完整寿命 | 资产登记、采购安装、维修退役及原生寿命记录 | record_id; node_id; site_id; job_id; service_version; batch_id; period_id; source_record_id; owner_id; covered_stage_id; receiver_id; output_id; recipient_id; transfer_id; actual_state; gate; event_start; event_end; timezone; utc_offset; dst_resolution; record_scope; each_or_total; covered_components; excluded_components; carry_source_id; carry_receiver_id; final_resolution_id; asset_id; asset_material; lifecycle_stage; consumer_id; consumer_node; life_phase; remaining_source_id; land_prior_state; land_after_state; provider_dataset_id; physical_coverage; asset_count; asset_count_unit; asset_count_basis; asset_count_method; asset_count_state; asset_count_sample_time; asset_count_source; manufacture_quantity; manufacture_quantity_unit; manufacture_quantity_basis; manufacture_quantity_method; manufacture_quantity_state; manufacture_quantity_sample_time; manufacture_quantity_source; installation_quantity; installation_quantity_unit; installation_quantity_basis; installation_quantity_method; installation_quantity_state; installation_quantity_sample_time; installation_quantity_source; maintenance_quantity; maintenance_quantity_unit; maintenance_quantity_basis; maintenance_quantity_method; maintenance_quantity_state; maintenance_quantity_sample_time; maintenance_quantity_source; replacement_quantity; replacement_quantity_unit; replacement_quantity_basis; replacement_quantity_method; replacement_quantity_state; replacement_quantity_sample_time; replacement_quantity_source; eol_quantity; eol_quantity_unit; eol_quantity_basis; eol_quantity_method; eol_quantity_state; eol_quantity_sample_time; eol_quantity_source; observed_driver; observed_driver_unit; observed_driver_basis; observed_driver_method; observed_driver_state; observed_driver_sample_time; observed_driver_source; remaining_driver; remaining_driver_unit; remaining_driver_basis; remaining_driver_method; remaining_driver_state; remaining_driver_sample_time; remaining_driver_source; terminated_total_driver; terminated_total_driver_unit; terminated_total_driver_basis; terminated_total_driver_method; terminated_total_driver_state; terminated_total_driver_sample_time; terminated_total_driver_source; target_life_driver; target_life_driver_unit; target_life_driver_basis; target_life_driver_method; target_life_driver_state; target_life_driver_sample_time; target_life_driver_source; all_life_driver; all_life_driver_unit; all_life_driver_basis; all_life_driver_method; all_life_driver_state; all_life_driver_sample_time; all_life_driver_source; land_area; land_area_unit; land_area_basis; land_area_method; land_area_state; land_area_sample_time; land_area_source; occupation_duration; occupation_duration_unit; occupation_duration_basis; occupation_duration_method; occupation_duration_state; occupation_duration_sample_time; occupation_duration_source; transformed_area; transformed_area_unit; transformed_area_basis; transformed_area_method; transformed_area_state; transformed_area_sample_time; transformed_area_source; each_count; each_count_unit; each_count_basis; each_count_method; each_count_state; each_count_sample_time; each_count_source; projection_variant; allocation_stage; output_evidence_or_exchange; independent_or_joint_output; source_input_role; internal_external; linked_input_coverage | 识别实际场地建筑、装修、厨房制冷、车辆、临时设备、餐具容器织物及全部使用者节点时段。查采购安装维护更换终结、已观察历史及有来源相容剩余，或实际终止。采原生土地面积、时间及有证据前后转变。按asset_life与exclusive_coverage实际完成缺失阶段一次，不能用目标年度数或铭牌容量代替完整寿命。 | 实际相容原生资产土地服务单位；Count仅真实可计数服务 | 每个真实收发存、批次、表计、供餐、转移、接收、资产事件；连续时段在实际截止点读取 | 真实任务批次、保温行程、库存报告及完整寿命阶段，带实际时间戳、时区与DST | 仅此真实节点，及实际供应、现场场外、运输、服务商、接收职责与全部使用者 | 每参考流 | 原始来源、校准验收覆盖链接、全部输出使用者完整性、各原生操作数及真实结转最终解决 |
| cp_offsite_providers | offsite_preparation_dispatch | 真实完整供应商与互斥缺失阶段 | 已完成验收、关联数据集及组分覆盖矩阵 | record_id; node_id; site_id; job_id; service_version; batch_id; period_id; source_record_id; owner_id; covered_stage_id; receiver_id; output_id; recipient_id; transfer_id; actual_state; gate; event_start; event_end; timezone; utc_offset; dst_resolution; record_scope; each_or_total; covered_components; excluded_components; carry_source_id; carry_receiver_id; final_resolution_id; provider_id; provider_dataset_id; completion_id; stage_id; component_id; exclusion_id; direct_record_link; missing_stage_dataset_id; coverage_owner_id; provider_native_amount; provider_native_amount_unit; provider_native_amount_basis; provider_native_amount_method; provider_native_amount_state; provider_native_amount_sample_time; provider_native_amount_source; missing_stage_quantity; missing_stage_quantity_unit; missing_stage_quantity_basis; missing_stage_quantity_method; missing_stage_quantity_state; missing_stage_quantity_sample_time; missing_stage_quantity_source; each_count; each_count_unit; each_count_basis; each_count_method; each_count_state; each_count_sample_time; each_count_source; target_driver; target_driver_unit; target_driver_basis; target_driver_method; target_driver_state; target_driver_sample_time; target_driver_source; all_consumer_driver; all_consumer_driver_unit; all_consumer_driver_basis; all_consumer_driver_method; all_consumer_driver_state; all_consumer_driver_sample_time; all_consumer_driver_source; projection_variant; allocation_stage; output_evidence_or_exchange; independent_or_joint_output; source_input_role; internal_external; linked_input_coverage | 取得食品、运输、洗涤、织物清洁、资产、接收处理、支持的真实已完成结果、原生量及数据范围。逐物理阶段组分场所时间与直接记录对照。完整服务商或已完成互斥缺失阶段须有来源、责任人、量、状态、时间链接。缺失重叠不清则不完整；执行exclusive_coverage，不将发票转换为Count。 | 实际服务商原生单位；Item(s)仅真实可计数相容服务 | 每个真实收发存、批次、表计、供餐、转移、接收、资产事件；连续时段在实际截止点读取 | 真实任务批次、保温行程、库存报告及完整寿命阶段，带实际时间戳、时区与DST | 仅此真实节点，及实际供应、现场场外、运输、服务商、接收职责与全部使用者 | 每参考流 | 原始来源、校准验收覆盖链接、全部输出使用者完整性、各原生操作数及真实结转最终解决 |
| cp_offsite_freight | offsite_preparation_dispatch | 真实完整湿货载的唯一往返与接收运输段 | 载荷清单、车辆或承运商行程表计及接收日志 | record_id; node_id; site_id; job_id; service_version; batch_id; period_id; source_record_id; owner_id; covered_stage_id; receiver_id; output_id; recipient_id; transfer_id; actual_state; gate; event_start; event_end; timezone; utc_offset; dst_resolution; record_scope; each_or_total; covered_components; excluded_components; carry_source_id; carry_receiver_id; final_resolution_id; load_id; leg_id; mode; vehicle_id; carrier_id; outbound_return; payload_components; holding_record_id; empty_run_id; provider_dataset_id; cargo_gross_mass; cargo_gross_mass_unit; cargo_gross_mass_basis; cargo_gross_mass_method; cargo_gross_mass_state; cargo_gross_mass_sample_time; cargo_gross_mass_source; noncargo_tare; noncargo_tare_unit; noncargo_tare_basis; noncargo_tare_method; noncargo_tare_state; noncargo_tare_sample_time; noncargo_tare_source; packed_payload_mass; packed_payload_mass_unit; packed_payload_mass_basis; packed_payload_mass_method; packed_payload_mass_state; packed_payload_mass_sample_time; packed_payload_mass_source; distance; distance_unit; distance_basis; distance_method; distance_state; distance_sample_time; distance_source; repeat_count; repeat_count_unit; repeat_count_basis; repeat_count_method; repeat_count_state; repeat_count_sample_time; repeat_count_source; record_share; record_share_unit; record_share_basis; record_share_method; record_share_state; record_share_sample_time; record_share_source; fuel_quantity; fuel_quantity_unit; fuel_quantity_basis; fuel_quantity_method; fuel_quantity_state; fuel_quantity_sample_time; fuel_quantity_source; electricity_quantity; electricity_quantity_unit; electricity_quantity_basis; electricity_quantity_method; electricity_quantity_state; electricity_quantity_sample_time; electricity_quantity_source; target_driver; target_driver_unit; target_driver_basis; target_driver_method; target_driver_state; target_driver_sample_time; target_driver_source; all_consumer_driver; all_consumer_driver_unit; all_consumer_driver_basis; all_consumer_driver_method; all_consumer_driver_state; all_consumer_driver_sample_time; all_consumer_driver_source; projection_variant; allocation_stage; output_evidence_or_exchange; independent_or_joint_output; source_input_role; internal_external; linked_input_coverage | 逐真实load+leg清单，称完整湿货物食品冰包装容器支撑设备，仅扣实际非货物车辆皮重，并取得实际距离。核对发运接收和EACH或TOTAL重复。记录自身份额放freight_sum求和内部；采用真实完整服务商，或互斥自营燃料充电、维修、资产、物种、接收及必要空驶职责。不能只用干食品载荷。零货物kgkm不能承载必要空载返程、失败配送、闲置车辆责任：须实际匹配完整承运覆盖这些职责，或原生计量车辆能源、资产、维修、物种等并互斥整合一次。 | kg/t; km; t*km及实际相容承运单位 | 每个真实收发存、批次、表计、供餐、转移、接收、资产事件；连续时段在实际截止点读取 | 真实任务批次、保温行程、库存报告及完整寿命阶段，带实际时间戳、时区与DST | 仅此真实节点，及实际供应、现场场外、运输、服务商、接收职责与全部使用者 | 每参考流 | 原始来源、校准验收覆盖链接、全部输出使用者完整性、各原生操作数及真实结转最终解决 |
| cp_offsite_environment | offsite_preparation_dispatch | 实际源取水与准确物种直接排放 | 校准环境测量或有支持的活动因子去向记录 | record_id; node_id; site_id; job_id; service_version; batch_id; period_id; source_record_id; owner_id; covered_stage_id; receiver_id; output_id; recipient_id; transfer_id; actual_state; gate; event_start; event_end; timezone; utc_offset; dst_resolution; record_scope; each_or_total; covered_components; excluded_components; carry_source_id; carry_receiver_id; final_resolution_id; species_id; particle_size; receiving_medium; environment_source; measurement_id; factor_id; factor_scope; fate_id; covered_provider_id; withdrawal_volume; withdrawal_volume_unit; withdrawal_volume_basis; withdrawal_volume_method; withdrawal_volume_state; withdrawal_volume_sample_time; withdrawal_volume_source; species_mass; species_mass_unit; species_mass_basis; species_mass_method; species_mass_state; species_mass_sample_time; species_mass_source; water_vapour_mass; water_vapour_mass_unit; water_vapour_mass_basis; water_vapour_mass_method; water_vapour_mass_state; water_vapour_mass_sample_time; water_vapour_mass_source; activity_amount; activity_amount_unit; activity_amount_basis; activity_amount_method; activity_amount_state; activity_amount_sample_time; activity_amount_source; emission_factor; emission_factor_unit; emission_factor_basis; emission_factor_method; emission_factor_state; emission_factor_sample_time; emission_factor_source; concentration; concentration_unit; concentration_basis; concentration_method; concentration_state; concentration_sample_time; concentration_source; stream_volume; stream_volume_unit; stream_volume_basis; stream_volume_method; stream_volume_state; stream_volume_sample_time; stream_volume_source; density; density_unit; density_basis; density_method; density_state; density_sample_time; density_source; temperature; temperature_unit; temperature_basis; temperature_method; temperature_state; temperature_sample_time; temperature_source; target_driver; target_driver_unit; target_driver_basis; target_driver_method; target_driver_state; target_driver_sample_time; target_driver_source; all_consumer_driver; all_consumer_driver_unit; all_consumer_driver_basis; all_consumer_driver_method; all_consumer_driver_state; all_consumer_driver_sample_time; all_consumer_driver_source; projection_variant; allocation_stage; output_evidence_or_exchange; independent_or_joint_output; source_input_role; internal_external; linked_input_coverage; flow_row_id; actual_identity_case; actual_substance_or_material; actual_origin_and_medium; actual_state_and_gate; case_activation_evidence; typed_or_residual_quantity; quantity_exclusion_links; whole_total_reconciliation; unresolved_occurrence_not_zero | 先识别真实取水水源或准确排放物种、粒径、基准、接收介质，再选数量与UUID。独立测量或论证相容因子活动去向及各原生操作数；空气水蒸气不同于收容废水及未知残差。仅计未被覆盖的真实自营运输、烹饪、制冷剂责任。执行terminal_reconcile，不能从补充量、异味或差额推断泄漏或零。 | kg物种、m3取水及实际有支持因子活动单位 | 每个真实收发存、批次、表计、供餐、转移、接收、资产事件；连续时段在实际截止点读取 | 真实任务批次、保温行程、库存报告及完整寿命阶段，带实际时间戳、时区与DST | 仅此真实节点，及实际供应、现场场外、运输、服务商、接收职责与全部使用者 | 每参考流 | 原始来源、校准验收覆盖链接、全部输出使用者完整性、各原生操作数及真实结转最终解决 |
| cp_offsite_fates | offsite_preparation_dispatch | 全部独立产品退回、收容废物与终端去向 | 实际收集称重、库存回收和接收处理验收 | record_id; node_id; site_id; job_id; service_version; batch_id; period_id; source_record_id; owner_id; covered_stage_id; receiver_id; output_id; recipient_id; transfer_id; actual_state; gate; event_start; event_end; timezone; utc_offset; dst_resolution; record_scope; each_or_total; covered_components; excluded_components; carry_source_id; carry_receiver_id; final_resolution_id; terminal_record_id; terminal_membership_id; paired_receiver_record_id; closing_membership_id; internal_or_external; stream_id; material_species_id; mixture_id; whole_component_relation; unused_or_used; original_receipt_id; receiver_treatment_id; path_id; terminal_role; stock_pool_id; whole_stream_mass; whole_stream_mass_unit; whole_stream_mass_basis; whole_stream_mass_method; whole_stream_mass_state; whole_stream_mass_sample_time; whole_stream_mass_source; component_mass; component_mass_unit; component_mass_basis; component_mass_method; component_mass_state; component_mass_sample_time; component_mass_source; water_content_mass; water_content_mass_unit; water_content_mass_basis; water_content_mass_method; water_content_mass_state; water_content_mass_sample_time; water_content_mass_source; terminal_exit_quantity; terminal_exit_quantity_unit; terminal_exit_quantity_basis; terminal_exit_quantity_method; terminal_exit_quantity_state; terminal_exit_quantity_sample_time; terminal_exit_quantity_source; closing_stock_quantity; closing_stock_quantity_unit; closing_stock_quantity_basis; closing_stock_quantity_method; closing_stock_quantity_state; closing_stock_quantity_sample_time; closing_stock_quantity_source; paired_receiver_quantity; paired_receiver_quantity_unit; paired_receiver_quantity_basis; paired_receiver_quantity_method; paired_receiver_quantity_state; paired_receiver_quantity_sample_time; paired_receiver_quantity_source; unused_return_mass; unused_return_mass_unit; unused_return_mass_basis; unused_return_mass_method; unused_return_mass_state; unused_return_mass_sample_time; unused_return_mass_source; used_return_mass; used_return_mass_unit; used_return_mass_basis; used_return_mass_method; used_return_mass_state; used_return_mass_sample_time; used_return_mass_source; retained_closing_mass; retained_closing_mass_unit; retained_closing_mass_basis; retained_closing_mass_method; retained_closing_mass_state; retained_closing_mass_sample_time; retained_closing_mass_source; recovered_export_mass; recovered_export_mass_unit; recovered_export_mass_basis; recovered_export_mass_method; recovered_export_mass_state; recovered_export_mass_sample_time; recovered_export_mass_source; receiver_amount; receiver_amount_unit; receiver_amount_basis; receiver_amount_method; receiver_amount_state; receiver_amount_sample_time; receiver_amount_source; density; density_unit; density_basis; density_method; density_state; density_sample_time; density_source; temperature; temperature_unit; temperature_basis; temperature_method; temperature_state; temperature_sample_time; temperature_source; target_driver; target_driver_unit; target_driver_basis; target_driver_method; target_driver_state; target_driver_sample_time; target_driver_source; all_consumer_driver; all_consumer_driver_unit; all_consumer_driver_basis; all_consumer_driver_method; all_consumer_driver_state; all_consumer_driver_sample_time; all_consumer_driver_source; each_count; each_count_unit; each_count_basis; each_count_method; each_count_state; each_count_sample_time; each_count_source; projection_variant; allocation_stage; output_evidence_or_exchange; independent_or_joint_output; source_input_role; internal_external; linked_input_coverage; flow_row_id; actual_identity_case; actual_substance_or_material; actual_origin_and_medium; actual_state_and_gate; case_activation_evidence; typed_or_residual_quantity; quantity_exclusion_links; whole_total_reconciliation; unresolved_occurrence_not_zero | 计量分类每个真实旧状态可用出口、匹配未用退货、独立材料包装捕集物完整资产流体废水及真实接收者。真实混合物整体与组分留存内容审计不可加和。连接处理责任、结转和最终解决。每个终端外部出口与真实期末成员有可寻址记录ID、材料水状态、原生量及配对接收记录量；终端平衡排除内部用途转移和重复接收视图。执行fluid_exclusivity和terminal_reconcile，未知残差不是排放。 | kg及实际相容原生接收单位 | 每个真实收发存、批次、表计、供餐、转移、接收、资产事件；连续时段在实际截止点读取 | 真实任务批次、保温行程、库存报告及完整寿命阶段，带实际时间戳、时区与DST | 仅此真实节点，及实际供应、现场场外、运输、服务商、接收职责与全部使用者 | 每参考流 | 原始来源、校准验收覆盖链接、全部输出使用者完整性、各原生操作数及真实结转最终解决 |
| cp_offsite_handoff | offsite_preparation_dispatch | 配对食品、脏可重复物与可用食品转移 | 配对发运、接收、返程洗涤与批次状态台账 | record_id; node_id; site_id; job_id; service_version; batch_id; period_id; source_record_id; owner_id; covered_stage_id; receiver_id; output_id; recipient_id; transfer_id; actual_state; gate; event_start; event_end; timezone; utc_offset; dst_resolution; record_scope; each_or_total; covered_components; excluded_components; carry_source_id; carry_receiver_id; final_resolution_id; handoff_role; component_id; recipe_version; source_node; receiving_node; receipt_gate; dispatch_gate; wash_event_id; reuse_destination_id; stock_pool_id; native_quantity_record_id; native_food_mass; native_food_mass_unit; native_food_mass_basis; native_food_mass_method; native_food_mass_state; native_food_mass_sample_time; native_food_mass_source; packed_wet_payload; packed_wet_payload_unit; packed_wet_payload_basis; packed_wet_payload_method; packed_wet_payload_state; packed_wet_payload_sample_time; packed_wet_payload_source; item_count; item_count_unit; item_count_basis; item_count_method; item_count_state; item_count_sample_time; item_count_source; wet_item_mass; wet_item_mass_unit; wet_item_mass_basis; wet_item_mass_method; wet_item_mass_state; wet_item_mass_sample_time; wet_item_mass_source; dry_substrate_mass; dry_substrate_mass_unit; dry_substrate_mass_basis; dry_substrate_mass_method; dry_substrate_mass_state; dry_substrate_mass_sample_time; dry_substrate_mass_source; retained_food_mass; retained_food_mass_unit; retained_food_mass_basis; retained_food_mass_method; retained_food_mass_state; retained_food_mass_sample_time; retained_food_mass_source; retained_water_mass; retained_water_mass_unit; retained_water_mass_basis; retained_water_mass_method; retained_water_mass_state; retained_water_mass_sample_time; retained_water_mass_source; dispatch_mass; dispatch_mass_unit; dispatch_mass_basis; dispatch_mass_method; dispatch_mass_state; dispatch_mass_sample_time; dispatch_mass_source; receipt_mass; receipt_mass_unit; receipt_mass_basis; receipt_mass_method; receipt_mass_state; receipt_mass_sample_time; receipt_mass_source; transit_loss_mass; transit_loss_mass_unit; transit_loss_mass_basis; transit_loss_mass_method; transit_loss_mass_state; transit_loss_mass_sample_time; transit_loss_mass_source; temperature; temperature_unit; temperature_basis; temperature_method; temperature_state; temperature_sample_time; temperature_source; duration; duration_unit; duration_basis; duration_method; duration_state; duration_sample_time; duration_source; target_driver; target_driver_unit; target_driver_basis; target_driver_method; target_driver_state; target_driver_sample_time; target_driver_source; all_consumer_driver; all_consumer_driver_unit; all_consumer_driver_basis; all_consumer_driver_method; all_consumer_driver_state; all_consumer_driver_sample_time; all_consumer_driver_source; projection_variant; allocation_stage; output_evidence_or_exchange; independent_or_joint_output; source_input_role; internal_external; linked_input_coverage; linked_native_input_quantity; linked_native_input_quantity_unit; linked_native_input_quantity_basis; linked_native_input_quantity_method; linked_native_input_quantity_state; linked_native_input_quantity_sample_time; linked_native_input_quantity_source | 在真实交接点识别计量每次正反转移，两个节点配对transferID、责任人、接收者、时间、状态及原生接收量。发运接收差异用真实运输损失核对，不造损失。食品净质量、脏湿载荷、不可加和内容及货载不同。保留实际洗涤返工责任、负担及结转。执行paired_handoff和normalize_once，不强制内部质量等于finalN。 执行exclusive_food_input_roles：现场泛称原料仅真实额外外购；内部接收、旧食品或脏物返回仅库存来源关联，不能再计制造，只加真实新增责任。 | 实际kg及独立实际件数、温度时间原生单位 | 每个真实收发存、批次、表计、供餐、转移、接收、资产事件；连续时段在实际截止点读取 | 真实任务批次、保温行程、库存报告及完整寿命阶段，带实际时间戳、时区与DST | 仅此真实节点，及实际供应、现场场外、运输、服务商、接收职责与全部使用者 | 每参考流 | 原始来源、校准验收覆盖链接、全部输出使用者完整性、各原生操作数及真实结转最终解决 |
| cp_offsite_outputs | offsite_preparation_dispatch | 全部预期输出、其他菜单客户员工与部分输出 | 实际产品服务交接与完整使用者台账 | record_id; node_id; site_id; job_id; service_version; batch_id; period_id; source_record_id; owner_id; covered_stage_id; receiver_id; output_id; recipient_id; transfer_id; actual_state; gate; event_start; event_end; timezone; utc_offset; dst_resolution; record_scope; each_or_total; covered_components; excluded_components; carry_source_id; carry_receiver_id; final_resolution_id; output_version; output_property; intended_or_residue; provided_gate; acceptance_id; component_ids; support_responsibility; other_job_id; native_output_amount; native_output_amount_unit; native_output_amount_basis; native_output_amount_method; native_output_amount_state; native_output_amount_sample_time; native_output_amount_source; fulfilled_count; fulfilled_count_unit; fulfilled_count_basis; fulfilled_count_method; fulfilled_count_state; fulfilled_count_sample_time; fulfilled_count_source; partial_count; partial_count_unit; partial_count_basis; partial_count_method; partial_count_state; partial_count_sample_time; partial_count_source; reversal_count; reversal_count_unit; reversal_count_basis; reversal_count_method; reversal_count_state; reversal_count_sample_time; reversal_count_source; target_driver; target_driver_unit; target_driver_basis; target_driver_method; target_driver_state; target_driver_sample_time; target_driver_source; all_consumer_driver; all_consumer_driver_unit; all_consumer_driver_basis; all_consumer_driver_method; all_consumer_driver_state; all_consumer_driver_sample_time; all_consumer_driver_source; service_duration; service_duration_unit; service_duration_basis; service_duration_method; service_duration_state; service_duration_sample_time; service_duration_source; projection_variant; allocation_stage; output_evidence_or_exchange; independent_or_joint_output; source_input_role; internal_external; linked_input_coverage | 识别每项实际独立预期输出及接收者、版本、交接点、状态、来源时间、原生量，包含其他客户菜单和真实员工支持。核对实际交接部分撤销及共享资源，不删非餐输出，也不把不相容单位强制Count。按all_intended_outputs与physical_attribution记录优先顺序和物理驱动。 在归属前保留每种输出完整原生量及projection_variant、allocation_stage、证据或交换角色、独立或联合输出判断。物理输出不乘targetshare。按allocation_projection，目标已归属LCI不把其他独立输出当交换或联产品；未分配wholepool保持完整输入与全部输出，仅在指定一步归属。 | 原生输出属性单位；Item(s)仅可计数餐次服务 | 每个真实收发存、批次、表计、供餐、转移、接收、资产事件；连续时段在实际截止点读取 | 真实任务批次、保温行程、库存报告及完整寿命阶段，带实际时间戳、时区与DST | 仅此真实节点，及实际供应、现场场外、运输、服务商、接收职责与全部使用者 | 每参考流 | 原始来源、校准验收覆盖链接、全部输出使用者完整性、各原生操作数及真实结转最终解决 |
| cp_site_food | onsite_finish_service | 原料库存、组成制备与全部食品去向 | 批次库存、配方、生产与称重去向记录 | record_id; node_id; site_id; job_id; service_version; batch_id; period_id; source_record_id; owner_id; covered_stage_id; receiver_id; output_id; recipient_id; transfer_id; actual_state; gate; event_start; event_end; timezone; utc_offset; dst_resolution; record_scope; each_or_total; covered_components; excluded_components; carry_source_id; carry_receiver_id; final_resolution_id; ingredient_id; recipe_version; component_id; species_material; supplied_state; actual_operation; food_fate; path_id; upstream_dataset_id; gross_mass; gross_mass_unit; gross_mass_basis; gross_mass_method; gross_mass_state; gross_mass_sample_time; gross_mass_source; tare_mass; tare_mass_unit; tare_mass_basis; tare_mass_method; tare_mass_state; tare_mass_sample_time; tare_mass_source; net_mass; net_mass_unit; net_mass_basis; net_mass_method; net_mass_state; net_mass_sample_time; net_mass_source; opening_mass; opening_mass_unit; opening_mass_basis; opening_mass_method; opening_mass_state; opening_mass_sample_time; opening_mass_source; inbound_mass; inbound_mass_unit; inbound_mass_basis; inbound_mass_method; inbound_mass_state; inbound_mass_sample_time; inbound_mass_source; closing_mass; closing_mass_unit; closing_mass_basis; closing_mass_method; closing_mass_state; closing_mass_sample_time; closing_mass_source; unused_return_mass; unused_return_mass_unit; unused_return_mass_basis; unused_return_mass_method; unused_return_mass_state; unused_return_mass_sample_time; unused_return_mass_source; used_return_mass; used_return_mass_unit; used_return_mass_basis; used_return_mass_method; used_return_mass_state; used_return_mass_sample_time; used_return_mass_source; ingredient_amount; ingredient_amount_unit; ingredient_amount_basis; ingredient_amount_method; ingredient_amount_state; ingredient_amount_sample_time; ingredient_amount_source; recipe_water_mass; recipe_water_mass_unit; recipe_water_mass_basis; recipe_water_mass_method; recipe_water_mass_state; recipe_water_mass_sample_time; recipe_water_mass_source; prepared_mass; prepared_mass_unit; prepared_mass_basis; prepared_mass_method; prepared_mass_state; prepared_mass_sample_time; prepared_mass_source; served_food_mass; served_food_mass_unit; served_food_mass_basis; served_food_mass_method; served_food_mass_state; served_food_mass_sample_time; served_food_mass_source; refill_mass; refill_mass_unit; refill_mass_basis; refill_mass_method; refill_mass_state; refill_mass_sample_time; refill_mass_source; unserved_mass; unserved_mass_unit; unserved_mass_basis; unserved_mass_method; unserved_mass_state; unserved_mass_sample_time; unserved_mass_source; plate_return_mass; plate_return_mass_unit; plate_return_mass_basis; plate_return_mass_method; plate_return_mass_state; plate_return_mass_sample_time; plate_return_mass_source; prep_loss_mass; prep_loss_mass_unit; prep_loss_mass_basis; prep_loss_mass_method; prep_loss_mass_state; prep_loss_mass_sample_time; prep_loss_mass_source; wet_sample_mass; wet_sample_mass_unit; wet_sample_mass_basis; wet_sample_mass_method; wet_sample_mass_state; wet_sample_mass_sample_time; wet_sample_mass_source; nonwater_dry_mass; nonwater_dry_mass_unit; nonwater_dry_mass_basis; nonwater_dry_mass_method; nonwater_dry_mass_state; nonwater_dry_mass_sample_time; nonwater_dry_mass_source; water_mass; water_mass_unit; water_mass_basis; water_mass_method; water_mass_state; water_mass_sample_time; water_mass_source; density; density_unit; density_basis; density_method; density_state; density_sample_time; density_source; temperature; temperature_unit; temperature_basis; temperature_method; temperature_state; temperature_sample_time; temperature_source; each_count; each_count_unit; each_count_basis; each_count_method; each_count_state; each_count_sample_time; each_count_source; target_driver; target_driver_unit; target_driver_basis; target_driver_method; target_driver_state; target_driver_sample_time; target_driver_source; all_consumer_driver; all_consumer_driver_unit; all_consumer_driver_basis; all_consumer_driver_method; all_consumer_driver_state; all_consumer_driver_sample_time; all_consumer_driver_source; projection_variant; allocation_stage; output_evidence_or_exchange; independent_or_joint_output; source_input_role; internal_external; linked_input_coverage; linked_native_input_quantity; linked_native_input_quantity_unit; linked_native_input_quantity_basis; linked_native_input_quantity_method; linked_native_input_quantity_state; linked_native_input_quantity_sample_time; linked_native_input_quantity_source; flow_row_id; actual_identity_case; actual_substance_or_material; actual_origin_and_medium; actual_state_and_gate; case_activation_evidence; typed_or_residual_quantity; quantity_exclusion_links; whole_total_reconciliation; unresolved_occurrence_not_zero | 确认每项实际原料组分、供应商和制备状态边界。分别称量去真实皮重后的期初、入库、期末及配对未用和已用返回；按批次连接真实配方投料、制备烹饪保温完成前后状态。独立称量补餐、未供、餐盘返回、制备损失溢洒、在制品、可用返回和废弃及真实目的地。保留样品水分基准及全部预期输出链接。按food_stock和food_reconcile，不以名义菜单或通用收率代替。 执行exclusive_food_input_roles：现场泛称原料仅真实额外外购；内部接收、旧食品或脏物返回仅库存来源关联，不能再计制造，只加真实新增责任。 | kg及实际相容原生组成单位 | 每个真实收发存、批次、表计、供餐、转移、接收、资产事件；连续时段在实际截止点读取 | 真实任务批次、保温行程、库存报告及完整寿命阶段，带实际时间戳、时区与DST | 仅此真实节点，及实际供应、现场场外、运输、服务商、接收职责与全部使用者 | 每参考流 | 原始来源、校准验收覆盖链接、全部输出使用者完整性、各原生操作数及真实结转最终解决 |
| cp_site_utilities | onsite_finish_service | 节点实际能源、燃料、水与运行库存 | 表计时段、供应商储罐充电及职责日志 | record_id; node_id; site_id; job_id; service_version; batch_id; period_id; source_record_id; owner_id; covered_stage_id; receiver_id; output_id; recipient_id; transfer_id; actual_state; gate; event_start; event_end; timezone; utc_offset; dst_resolution; record_scope; each_or_total; covered_components; excluded_components; carry_source_id; carry_receiver_id; final_resolution_id; carrier_id; grade; meter_id; enduse; asset_id; provider_dataset_id; stock_pool_id; electricity; electricity_unit; electricity_basis; electricity_method; electricity_state; electricity_sample_time; electricity_source; water_volume; water_volume_unit; water_volume_basis; water_volume_method; water_volume_state; water_volume_sample_time; water_volume_source; water_meter_opening_reading; water_meter_opening_reading_unit; water_meter_opening_reading_basis; water_meter_opening_reading_method; water_meter_opening_reading_state; water_meter_opening_reading_sample_time; water_meter_opening_reading_source; water_meter_closing_reading; water_meter_closing_reading_unit; water_meter_closing_reading_basis; water_meter_closing_reading_method; water_meter_closing_reading_state; water_meter_closing_reading_sample_time; water_meter_closing_reading_source; water_stock_opening; water_stock_opening_unit; water_stock_opening_basis; water_stock_opening_method; water_stock_opening_state; water_stock_opening_sample_time; water_stock_opening_source; water_stock_inbound; water_stock_inbound_unit; water_stock_inbound_basis; water_stock_inbound_method; water_stock_inbound_state; water_stock_inbound_sample_time; water_stock_inbound_source; water_stock_closing; water_stock_closing_unit; water_stock_closing_basis; water_stock_closing_method; water_stock_closing_state; water_stock_closing_sample_time; water_stock_closing_source; water_paired_transfer_in; water_paired_transfer_in_unit; water_paired_transfer_in_basis; water_paired_transfer_in_method; water_paired_transfer_in_state; water_paired_transfer_in_sample_time; water_paired_transfer_in_source; water_paired_transfer_out; water_paired_transfer_out_unit; water_paired_transfer_out_basis; water_paired_transfer_out_method; water_paired_transfer_out_state; water_paired_transfer_out_sample_time; water_paired_transfer_out_source; fuel_opening; fuel_opening_unit; fuel_opening_basis; fuel_opening_method; fuel_opening_state; fuel_opening_sample_time; fuel_opening_source; fuel_inbound; fuel_inbound_unit; fuel_inbound_basis; fuel_inbound_method; fuel_inbound_state; fuel_inbound_sample_time; fuel_inbound_source; fuel_closing; fuel_closing_unit; fuel_closing_basis; fuel_closing_method; fuel_closing_state; fuel_closing_sample_time; fuel_closing_source; unused_fuel_return; unused_fuel_return_unit; unused_fuel_return_basis; unused_fuel_return_method; unused_fuel_return_state; unused_fuel_return_sample_time; unused_fuel_return_source; burned_fuel; burned_fuel_unit; burned_fuel_basis; burned_fuel_method; burned_fuel_state; burned_fuel_sample_time; burned_fuel_source; thermal_energy; thermal_energy_unit; thermal_energy_basis; thermal_energy_method; thermal_energy_state; thermal_energy_sample_time; thermal_energy_source; density; density_unit; density_basis; density_method; density_state; density_sample_time; density_source; temperature; temperature_unit; temperature_basis; temperature_method; temperature_state; temperature_sample_time; temperature_source; calorific_value; calorific_value_unit; calorific_value_basis; calorific_value_method; calorific_value_state; calorific_value_sample_time; calorific_value_source; duty_duration; duty_duration_unit; duty_duration_basis; duty_duration_method; duty_duration_state; duty_duration_sample_time; duty_duration_source; target_driver; target_driver_unit; target_driver_basis; target_driver_method; target_driver_state; target_driver_sample_time; target_driver_source; all_consumer_driver; all_consumer_driver_unit; all_consumer_driver_basis; all_consumer_driver_method; all_consumer_driver_state; all_consumer_driver_sample_time; all_consumer_driver_source; each_count; each_count_unit; each_count_basis; each_count_method; each_count_state; each_count_sample_time; each_count_source; projection_variant; allocation_stage; output_evidence_or_exchange; independent_or_joint_output; source_input_role; internal_external; linked_input_coverage; flow_row_id; actual_identity_case; actual_substance_or_material; actual_origin_and_medium; actual_state_and_gate; case_activation_evidence; typed_or_residual_quantity; quantity_exclusion_links; whole_total_reconciliation; unresolved_occurrence_not_zero | 读取本节点实际供应商、表计、储罐和充电时段记录。水表期初期末读数及有来源增量不同于水库存期初期末；有实际储水和责任转移时独立采集。核对来源、用途、冷链、自营运输、服务商覆盖。称量或有来源记录期初、入库、期末和真正配对未用退货，独立核对实际燃烧活动。记录相容原生转换及全部使用者必要闲置池，执行exclusive_coverage和normalize_once。 | kWh; MJ; kg; m3及实际相容原生单位 | 每个真实收发存、批次、表计、供餐、转移、接收、资产事件；连续时段在实际截止点读取 | 真实任务批次、保温行程、库存报告及完整寿命阶段，带实际时间戳、时区与DST | 仅此真实节点，及实际供应、现场场外、运输、服务商、接收职责与全部使用者 | 每参考流 | 原始来源、校准验收覆盖链接、全部输出使用者完整性、各原生操作数及真实结转最终解决 |
| cp_site_materials | onsite_finish_service | 独立耗材、包装与运行流体 | 材料收发存、使用稀释、包装和设备维修日志 | record_id; node_id; site_id; job_id; service_version; batch_id; period_id; source_record_id; owner_id; covered_stage_id; receiver_id; output_id; recipient_id; transfer_id; actual_state; gate; event_start; event_end; timezone; utc_offset; dst_resolution; record_scope; each_or_total; covered_components; excluded_components; carry_source_id; carry_receiver_id; final_resolution_id; material_id; formulation; pack_id; contact_thermal_role; reuse_status; equipment_id; species_id; stock_pool_id; retained_content_role; old_state_transfer_id; gross_mass; gross_mass_unit; gross_mass_basis; gross_mass_method; gross_mass_state; gross_mass_sample_time; gross_mass_source; tare_mass; tare_mass_unit; tare_mass_basis; tare_mass_method; tare_mass_state; tare_mass_sample_time; tare_mass_source; net_mass; net_mass_unit; net_mass_basis; net_mass_method; net_mass_state; net_mass_sample_time; net_mass_source; opening_mass; opening_mass_unit; opening_mass_basis; opening_mass_method; opening_mass_state; opening_mass_sample_time; opening_mass_source; inbound_mass; inbound_mass_unit; inbound_mass_basis; inbound_mass_method; inbound_mass_state; inbound_mass_sample_time; inbound_mass_source; other_receipt_mass; other_receipt_mass_unit; other_receipt_mass_basis; other_receipt_mass_method; other_receipt_mass_state; other_receipt_mass_sample_time; other_receipt_mass_source; paired_transfer_in_mass; paired_transfer_in_mass_unit; paired_transfer_in_mass_basis; paired_transfer_in_mass_method; paired_transfer_in_mass_state; paired_transfer_in_mass_sample_time; paired_transfer_in_mass_source; paired_transfer_out_mass; paired_transfer_out_mass_unit; paired_transfer_out_mass_basis; paired_transfer_out_mass_method; paired_transfer_out_mass_state; paired_transfer_out_mass_sample_time; paired_transfer_out_mass_source; closing_mass; closing_mass_unit; closing_mass_basis; closing_mass_method; closing_mass_state; closing_mass_sample_time; closing_mass_source; unused_return_mass; unused_return_mass_unit; unused_return_mass_basis; unused_return_mass_method; unused_return_mass_state; unused_return_mass_sample_time; unused_return_mass_source; used_recovered_mass; used_recovered_mass_unit; used_recovered_mass_basis; used_recovered_mass_method; used_recovered_mass_state; used_recovered_mass_sample_time; used_recovered_mass_source; material_mass; material_mass_unit; material_mass_basis; material_mass_method; material_mass_state; material_mass_sample_time; material_mass_source; concentrate_mass; concentrate_mass_unit; concentrate_mass_basis; concentrate_mass_method; concentrate_mass_state; concentrate_mass_sample_time; concentrate_mass_source; solution_mass; solution_mass_unit; solution_mass_basis; solution_mass_method; solution_mass_state; solution_mass_sample_time; solution_mass_source; active_mass; active_mass_unit; active_mass_basis; active_mass_method; active_mass_state; active_mass_sample_time; active_mass_source; dilution_water_mass; dilution_water_mass_unit; dilution_water_mass_basis; dilution_water_mass_method; dilution_water_mass_state; dilution_water_mass_sample_time; dilution_water_mass_source; wholeequipment_content_exit_mass; wholeequipment_content_exit_mass_unit; wholeequipment_content_exit_mass_basis; wholeequipment_content_exit_mass_method; wholeequipment_content_exit_mass_state; wholeequipment_content_exit_mass_sample_time; wholeequipment_content_exit_mass_source; each_count; each_count_unit; each_count_basis; each_count_method; each_count_state; each_count_sample_time; each_count_source; unit_mass; unit_mass_unit; unit_mass_basis; unit_mass_method; unit_mass_state; unit_mass_sample_time; unit_mass_source; concentration; concentration_unit; concentration_basis; concentration_method; concentration_state; concentration_sample_time; concentration_source; density; density_unit; density_basis; density_method; density_state; density_sample_time; density_source; temperature; temperature_unit; temperature_basis; temperature_method; temperature_state; temperature_sample_time; temperature_source; factory_content_mass; factory_content_mass_unit; factory_content_mass_basis; factory_content_mass_method; factory_content_mass_state; factory_content_mass_sample_time; factory_content_mass_source; installed_content_mass; installed_content_mass_unit; installed_content_mass_basis; installed_content_mass_method; installed_content_mass_state; installed_content_mass_sample_time; installed_content_mass_source; recovered_closing_mass; recovered_closing_mass_unit; recovered_closing_mass_basis; recovered_closing_mass_method; recovered_closing_mass_state; recovered_closing_mass_sample_time; recovered_closing_mass_source; target_driver; target_driver_unit; target_driver_basis; target_driver_method; target_driver_state; target_driver_sample_time; target_driver_source; all_consumer_driver; all_consumer_driver_unit; all_consumer_driver_basis; all_consumer_driver_method; all_consumer_driver_state; all_consumer_driver_sample_time; all_consumer_driver_source; projection_variant; allocation_stage; output_evidence_or_exchange; independent_or_joint_output; source_input_role; internal_external; linked_input_coverage; flow_row_id; actual_identity_case; actual_substance_or_material; actual_origin_and_medium; actual_state_and_gate; case_activation_evidence; typed_or_residual_quantity; quantity_exclusion_links; whole_total_reconciliation; unresolved_occurrence_not_zero | 逐实际独立材料、包装、配方、物种、库存池记录，仅扣真实包装皮重，外部退货前计收货。配对真正未用退货。记录包装前后食品保护状态、拒收、复用与终结。gross/tare/net、浓缩液/溶液/活性物/稀释水、每项其他收货配对转移、完整设备留存内容出口均有独立原生数量及七字段证据。区分出厂内含充注、独立供应、储存安装回收内含和全部去向，执行food_stock及fluid_exclusivity；已用回收不净扣原生制造。 | kg、实际件数及相容浓度体积单位 | 每个真实收发存、批次、表计、供餐、转移、接收、资产事件；连续时段在实际截止点读取 | 真实任务批次、保温行程、库存报告及完整寿命阶段，带实际时间戳、时区与DST | 仅此真实节点，及实际供应、现场场外、运输、服务商、接收职责与全部使用者 | 每参考流 | 原始来源、校准验收覆盖链接、全部输出使用者完整性、各原生操作数及真实结转最终解决 |
| cp_site_assets | onsite_finish_service | 全部使用者的场地、土地、设备与可重复物完整寿命 | 资产登记、采购安装、维修退役及原生寿命记录 | record_id; node_id; site_id; job_id; service_version; batch_id; period_id; source_record_id; owner_id; covered_stage_id; receiver_id; output_id; recipient_id; transfer_id; actual_state; gate; event_start; event_end; timezone; utc_offset; dst_resolution; record_scope; each_or_total; covered_components; excluded_components; carry_source_id; carry_receiver_id; final_resolution_id; asset_id; asset_material; lifecycle_stage; consumer_id; consumer_node; life_phase; remaining_source_id; land_prior_state; land_after_state; provider_dataset_id; physical_coverage; asset_count; asset_count_unit; asset_count_basis; asset_count_method; asset_count_state; asset_count_sample_time; asset_count_source; manufacture_quantity; manufacture_quantity_unit; manufacture_quantity_basis; manufacture_quantity_method; manufacture_quantity_state; manufacture_quantity_sample_time; manufacture_quantity_source; installation_quantity; installation_quantity_unit; installation_quantity_basis; installation_quantity_method; installation_quantity_state; installation_quantity_sample_time; installation_quantity_source; maintenance_quantity; maintenance_quantity_unit; maintenance_quantity_basis; maintenance_quantity_method; maintenance_quantity_state; maintenance_quantity_sample_time; maintenance_quantity_source; replacement_quantity; replacement_quantity_unit; replacement_quantity_basis; replacement_quantity_method; replacement_quantity_state; replacement_quantity_sample_time; replacement_quantity_source; eol_quantity; eol_quantity_unit; eol_quantity_basis; eol_quantity_method; eol_quantity_state; eol_quantity_sample_time; eol_quantity_source; observed_driver; observed_driver_unit; observed_driver_basis; observed_driver_method; observed_driver_state; observed_driver_sample_time; observed_driver_source; remaining_driver; remaining_driver_unit; remaining_driver_basis; remaining_driver_method; remaining_driver_state; remaining_driver_sample_time; remaining_driver_source; terminated_total_driver; terminated_total_driver_unit; terminated_total_driver_basis; terminated_total_driver_method; terminated_total_driver_state; terminated_total_driver_sample_time; terminated_total_driver_source; target_life_driver; target_life_driver_unit; target_life_driver_basis; target_life_driver_method; target_life_driver_state; target_life_driver_sample_time; target_life_driver_source; all_life_driver; all_life_driver_unit; all_life_driver_basis; all_life_driver_method; all_life_driver_state; all_life_driver_sample_time; all_life_driver_source; land_area; land_area_unit; land_area_basis; land_area_method; land_area_state; land_area_sample_time; land_area_source; occupation_duration; occupation_duration_unit; occupation_duration_basis; occupation_duration_method; occupation_duration_state; occupation_duration_sample_time; occupation_duration_source; transformed_area; transformed_area_unit; transformed_area_basis; transformed_area_method; transformed_area_state; transformed_area_sample_time; transformed_area_source; each_count; each_count_unit; each_count_basis; each_count_method; each_count_state; each_count_sample_time; each_count_source; projection_variant; allocation_stage; output_evidence_or_exchange; independent_or_joint_output; source_input_role; internal_external; linked_input_coverage | 识别实际场地建筑、装修、厨房制冷、车辆、临时设备、餐具容器织物及全部使用者节点时段。查采购安装维护更换终结、已观察历史及有来源相容剩余，或实际终止。采原生土地面积、时间及有证据前后转变。按asset_life与exclusive_coverage实际完成缺失阶段一次，不能用目标年度数或铭牌容量代替完整寿命。 | 实际相容原生资产土地服务单位；Count仅真实可计数服务 | 每个真实收发存、批次、表计、供餐、转移、接收、资产事件；连续时段在实际截止点读取 | 真实任务批次、保温行程、库存报告及完整寿命阶段，带实际时间戳、时区与DST | 仅此真实节点，及实际供应、现场场外、运输、服务商、接收职责与全部使用者 | 每参考流 | 原始来源、校准验收覆盖链接、全部输出使用者完整性、各原生操作数及真实结转最终解决 |
| cp_site_providers | onsite_finish_service | 真实完整供应商与互斥缺失阶段 | 已完成验收、关联数据集及组分覆盖矩阵 | record_id; node_id; site_id; job_id; service_version; batch_id; period_id; source_record_id; owner_id; covered_stage_id; receiver_id; output_id; recipient_id; transfer_id; actual_state; gate; event_start; event_end; timezone; utc_offset; dst_resolution; record_scope; each_or_total; covered_components; excluded_components; carry_source_id; carry_receiver_id; final_resolution_id; provider_id; provider_dataset_id; completion_id; stage_id; component_id; exclusion_id; direct_record_link; missing_stage_dataset_id; coverage_owner_id; provider_native_amount; provider_native_amount_unit; provider_native_amount_basis; provider_native_amount_method; provider_native_amount_state; provider_native_amount_sample_time; provider_native_amount_source; missing_stage_quantity; missing_stage_quantity_unit; missing_stage_quantity_basis; missing_stage_quantity_method; missing_stage_quantity_state; missing_stage_quantity_sample_time; missing_stage_quantity_source; each_count; each_count_unit; each_count_basis; each_count_method; each_count_state; each_count_sample_time; each_count_source; target_driver; target_driver_unit; target_driver_basis; target_driver_method; target_driver_state; target_driver_sample_time; target_driver_source; all_consumer_driver; all_consumer_driver_unit; all_consumer_driver_basis; all_consumer_driver_method; all_consumer_driver_state; all_consumer_driver_sample_time; all_consumer_driver_source; projection_variant; allocation_stage; output_evidence_or_exchange; independent_or_joint_output; source_input_role; internal_external; linked_input_coverage | 取得食品、运输、洗涤、织物清洁、资产、接收处理、支持的真实已完成结果、原生量及数据范围。逐物理阶段组分场所时间与直接记录对照。完整服务商或已完成互斥缺失阶段须有来源、责任人、量、状态、时间链接。缺失重叠不清则不完整；执行exclusive_coverage，不将发票转换为Count。 | 实际服务商原生单位；Item(s)仅真实可计数相容服务 | 每个真实收发存、批次、表计、供餐、转移、接收、资产事件；连续时段在实际截止点读取 | 真实任务批次、保温行程、库存报告及完整寿命阶段，带实际时间戳、时区与DST | 仅此真实节点，及实际供应、现场场外、运输、服务商、接收职责与全部使用者 | 每参考流 | 原始来源、校准验收覆盖链接、全部输出使用者完整性、各原生操作数及真实结转最终解决 |
| cp_site_freight | onsite_finish_service | 真实完整湿货载的唯一往返与接收运输段 | 载荷清单、车辆或承运商行程表计及接收日志 | record_id; node_id; site_id; job_id; service_version; batch_id; period_id; source_record_id; owner_id; covered_stage_id; receiver_id; output_id; recipient_id; transfer_id; actual_state; gate; event_start; event_end; timezone; utc_offset; dst_resolution; record_scope; each_or_total; covered_components; excluded_components; carry_source_id; carry_receiver_id; final_resolution_id; load_id; leg_id; mode; vehicle_id; carrier_id; outbound_return; payload_components; holding_record_id; empty_run_id; provider_dataset_id; cargo_gross_mass; cargo_gross_mass_unit; cargo_gross_mass_basis; cargo_gross_mass_method; cargo_gross_mass_state; cargo_gross_mass_sample_time; cargo_gross_mass_source; noncargo_tare; noncargo_tare_unit; noncargo_tare_basis; noncargo_tare_method; noncargo_tare_state; noncargo_tare_sample_time; noncargo_tare_source; packed_payload_mass; packed_payload_mass_unit; packed_payload_mass_basis; packed_payload_mass_method; packed_payload_mass_state; packed_payload_mass_sample_time; packed_payload_mass_source; distance; distance_unit; distance_basis; distance_method; distance_state; distance_sample_time; distance_source; repeat_count; repeat_count_unit; repeat_count_basis; repeat_count_method; repeat_count_state; repeat_count_sample_time; repeat_count_source; record_share; record_share_unit; record_share_basis; record_share_method; record_share_state; record_share_sample_time; record_share_source; fuel_quantity; fuel_quantity_unit; fuel_quantity_basis; fuel_quantity_method; fuel_quantity_state; fuel_quantity_sample_time; fuel_quantity_source; electricity_quantity; electricity_quantity_unit; electricity_quantity_basis; electricity_quantity_method; electricity_quantity_state; electricity_quantity_sample_time; electricity_quantity_source; target_driver; target_driver_unit; target_driver_basis; target_driver_method; target_driver_state; target_driver_sample_time; target_driver_source; all_consumer_driver; all_consumer_driver_unit; all_consumer_driver_basis; all_consumer_driver_method; all_consumer_driver_state; all_consumer_driver_sample_time; all_consumer_driver_source; projection_variant; allocation_stage; output_evidence_or_exchange; independent_or_joint_output; source_input_role; internal_external; linked_input_coverage | 逐真实load+leg清单，称完整湿货物食品冰包装容器支撑设备，仅扣实际非货物车辆皮重，并取得实际距离。核对发运接收和EACH或TOTAL重复。记录自身份额放freight_sum求和内部；采用真实完整服务商，或互斥自营燃料充电、维修、资产、物种、接收及必要空驶职责。不能只用干食品载荷。零货物kgkm不能承载必要空载返程、失败配送、闲置车辆责任：须实际匹配完整承运覆盖这些职责，或原生计量车辆能源、资产、维修、物种等并互斥整合一次。 | kg/t; km; t*km及实际相容承运单位 | 每个真实收发存、批次、表计、供餐、转移、接收、资产事件；连续时段在实际截止点读取 | 真实任务批次、保温行程、库存报告及完整寿命阶段，带实际时间戳、时区与DST | 仅此真实节点，及实际供应、现场场外、运输、服务商、接收职责与全部使用者 | 每参考流 | 原始来源、校准验收覆盖链接、全部输出使用者完整性、各原生操作数及真实结转最终解决 |
| cp_site_environment | onsite_finish_service | 实际源取水与准确物种直接排放 | 校准环境测量或有支持的活动因子去向记录 | record_id; node_id; site_id; job_id; service_version; batch_id; period_id; source_record_id; owner_id; covered_stage_id; receiver_id; output_id; recipient_id; transfer_id; actual_state; gate; event_start; event_end; timezone; utc_offset; dst_resolution; record_scope; each_or_total; covered_components; excluded_components; carry_source_id; carry_receiver_id; final_resolution_id; species_id; particle_size; receiving_medium; environment_source; measurement_id; factor_id; factor_scope; fate_id; covered_provider_id; withdrawal_volume; withdrawal_volume_unit; withdrawal_volume_basis; withdrawal_volume_method; withdrawal_volume_state; withdrawal_volume_sample_time; withdrawal_volume_source; species_mass; species_mass_unit; species_mass_basis; species_mass_method; species_mass_state; species_mass_sample_time; species_mass_source; water_vapour_mass; water_vapour_mass_unit; water_vapour_mass_basis; water_vapour_mass_method; water_vapour_mass_state; water_vapour_mass_sample_time; water_vapour_mass_source; activity_amount; activity_amount_unit; activity_amount_basis; activity_amount_method; activity_amount_state; activity_amount_sample_time; activity_amount_source; emission_factor; emission_factor_unit; emission_factor_basis; emission_factor_method; emission_factor_state; emission_factor_sample_time; emission_factor_source; concentration; concentration_unit; concentration_basis; concentration_method; concentration_state; concentration_sample_time; concentration_source; stream_volume; stream_volume_unit; stream_volume_basis; stream_volume_method; stream_volume_state; stream_volume_sample_time; stream_volume_source; density; density_unit; density_basis; density_method; density_state; density_sample_time; density_source; temperature; temperature_unit; temperature_basis; temperature_method; temperature_state; temperature_sample_time; temperature_source; target_driver; target_driver_unit; target_driver_basis; target_driver_method; target_driver_state; target_driver_sample_time; target_driver_source; all_consumer_driver; all_consumer_driver_unit; all_consumer_driver_basis; all_consumer_driver_method; all_consumer_driver_state; all_consumer_driver_sample_time; all_consumer_driver_source; projection_variant; allocation_stage; output_evidence_or_exchange; independent_or_joint_output; source_input_role; internal_external; linked_input_coverage; flow_row_id; actual_identity_case; actual_substance_or_material; actual_origin_and_medium; actual_state_and_gate; case_activation_evidence; typed_or_residual_quantity; quantity_exclusion_links; whole_total_reconciliation; unresolved_occurrence_not_zero | 先识别真实取水水源或准确排放物种、粒径、基准、接收介质，再选数量与UUID。独立测量或论证相容因子活动去向及各原生操作数；空气水蒸气不同于收容废水及未知残差。仅计未被覆盖的真实自营运输、烹饪、制冷剂责任。执行terminal_reconcile，不能从补充量、异味或差额推断泄漏或零。 | kg物种、m3取水及实际有支持因子活动单位 | 每个真实收发存、批次、表计、供餐、转移、接收、资产事件；连续时段在实际截止点读取 | 真实任务批次、保温行程、库存报告及完整寿命阶段，带实际时间戳、时区与DST | 仅此真实节点，及实际供应、现场场外、运输、服务商、接收职责与全部使用者 | 每参考流 | 原始来源、校准验收覆盖链接、全部输出使用者完整性、各原生操作数及真实结转最终解决 |
| cp_site_fates | onsite_finish_service | 全部独立产品退回、收容废物与终端去向 | 实际收集称重、库存回收和接收处理验收 | record_id; node_id; site_id; job_id; service_version; batch_id; period_id; source_record_id; owner_id; covered_stage_id; receiver_id; output_id; recipient_id; transfer_id; actual_state; gate; event_start; event_end; timezone; utc_offset; dst_resolution; record_scope; each_or_total; covered_components; excluded_components; carry_source_id; carry_receiver_id; final_resolution_id; terminal_record_id; terminal_membership_id; paired_receiver_record_id; closing_membership_id; internal_or_external; stream_id; material_species_id; mixture_id; whole_component_relation; unused_or_used; original_receipt_id; receiver_treatment_id; path_id; terminal_role; stock_pool_id; whole_stream_mass; whole_stream_mass_unit; whole_stream_mass_basis; whole_stream_mass_method; whole_stream_mass_state; whole_stream_mass_sample_time; whole_stream_mass_source; component_mass; component_mass_unit; component_mass_basis; component_mass_method; component_mass_state; component_mass_sample_time; component_mass_source; water_content_mass; water_content_mass_unit; water_content_mass_basis; water_content_mass_method; water_content_mass_state; water_content_mass_sample_time; water_content_mass_source; terminal_exit_quantity; terminal_exit_quantity_unit; terminal_exit_quantity_basis; terminal_exit_quantity_method; terminal_exit_quantity_state; terminal_exit_quantity_sample_time; terminal_exit_quantity_source; closing_stock_quantity; closing_stock_quantity_unit; closing_stock_quantity_basis; closing_stock_quantity_method; closing_stock_quantity_state; closing_stock_quantity_sample_time; closing_stock_quantity_source; paired_receiver_quantity; paired_receiver_quantity_unit; paired_receiver_quantity_basis; paired_receiver_quantity_method; paired_receiver_quantity_state; paired_receiver_quantity_sample_time; paired_receiver_quantity_source; unused_return_mass; unused_return_mass_unit; unused_return_mass_basis; unused_return_mass_method; unused_return_mass_state; unused_return_mass_sample_time; unused_return_mass_source; used_return_mass; used_return_mass_unit; used_return_mass_basis; used_return_mass_method; used_return_mass_state; used_return_mass_sample_time; used_return_mass_source; retained_closing_mass; retained_closing_mass_unit; retained_closing_mass_basis; retained_closing_mass_method; retained_closing_mass_state; retained_closing_mass_sample_time; retained_closing_mass_source; recovered_export_mass; recovered_export_mass_unit; recovered_export_mass_basis; recovered_export_mass_method; recovered_export_mass_state; recovered_export_mass_sample_time; recovered_export_mass_source; receiver_amount; receiver_amount_unit; receiver_amount_basis; receiver_amount_method; receiver_amount_state; receiver_amount_sample_time; receiver_amount_source; density; density_unit; density_basis; density_method; density_state; density_sample_time; density_source; temperature; temperature_unit; temperature_basis; temperature_method; temperature_state; temperature_sample_time; temperature_source; target_driver; target_driver_unit; target_driver_basis; target_driver_method; target_driver_state; target_driver_sample_time; target_driver_source; all_consumer_driver; all_consumer_driver_unit; all_consumer_driver_basis; all_consumer_driver_method; all_consumer_driver_state; all_consumer_driver_sample_time; all_consumer_driver_source; each_count; each_count_unit; each_count_basis; each_count_method; each_count_state; each_count_sample_time; each_count_source; projection_variant; allocation_stage; output_evidence_or_exchange; independent_or_joint_output; source_input_role; internal_external; linked_input_coverage; flow_row_id; actual_identity_case; actual_substance_or_material; actual_origin_and_medium; actual_state_and_gate; case_activation_evidence; typed_or_residual_quantity; quantity_exclusion_links; whole_total_reconciliation; unresolved_occurrence_not_zero | 计量分类每个真实旧状态可用出口、匹配未用退货、独立材料包装捕集物完整资产流体废水及真实接收者。真实混合物整体与组分留存内容审计不可加和。连接处理责任、结转和最终解决。每个终端外部出口与真实期末成员有可寻址记录ID、材料水状态、原生量及配对接收记录量；终端平衡排除内部用途转移和重复接收视图。执行fluid_exclusivity和terminal_reconcile，未知残差不是排放。 | kg及实际相容原生接收单位 | 每个真实收发存、批次、表计、供餐、转移、接收、资产事件；连续时段在实际截止点读取 | 真实任务批次、保温行程、库存报告及完整寿命阶段，带实际时间戳、时区与DST | 仅此真实节点，及实际供应、现场场外、运输、服务商、接收职责与全部使用者 | 每参考流 | 原始来源、校准验收覆盖链接、全部输出使用者完整性、各原生操作数及真实结转最终解决 |
| cp_site_handoff | onsite_finish_service | 配对食品、脏可重复物与可用食品转移 | 配对发运、接收、返程洗涤与批次状态台账 | record_id; node_id; site_id; job_id; service_version; batch_id; period_id; source_record_id; owner_id; covered_stage_id; receiver_id; output_id; recipient_id; transfer_id; actual_state; gate; event_start; event_end; timezone; utc_offset; dst_resolution; record_scope; each_or_total; covered_components; excluded_components; carry_source_id; carry_receiver_id; final_resolution_id; handoff_role; component_id; recipe_version; source_node; receiving_node; receipt_gate; dispatch_gate; wash_event_id; reuse_destination_id; stock_pool_id; native_quantity_record_id; native_food_mass; native_food_mass_unit; native_food_mass_basis; native_food_mass_method; native_food_mass_state; native_food_mass_sample_time; native_food_mass_source; packed_wet_payload; packed_wet_payload_unit; packed_wet_payload_basis; packed_wet_payload_method; packed_wet_payload_state; packed_wet_payload_sample_time; packed_wet_payload_source; item_count; item_count_unit; item_count_basis; item_count_method; item_count_state; item_count_sample_time; item_count_source; wet_item_mass; wet_item_mass_unit; wet_item_mass_basis; wet_item_mass_method; wet_item_mass_state; wet_item_mass_sample_time; wet_item_mass_source; dry_substrate_mass; dry_substrate_mass_unit; dry_substrate_mass_basis; dry_substrate_mass_method; dry_substrate_mass_state; dry_substrate_mass_sample_time; dry_substrate_mass_source; retained_food_mass; retained_food_mass_unit; retained_food_mass_basis; retained_food_mass_method; retained_food_mass_state; retained_food_mass_sample_time; retained_food_mass_source; retained_water_mass; retained_water_mass_unit; retained_water_mass_basis; retained_water_mass_method; retained_water_mass_state; retained_water_mass_sample_time; retained_water_mass_source; dispatch_mass; dispatch_mass_unit; dispatch_mass_basis; dispatch_mass_method; dispatch_mass_state; dispatch_mass_sample_time; dispatch_mass_source; receipt_mass; receipt_mass_unit; receipt_mass_basis; receipt_mass_method; receipt_mass_state; receipt_mass_sample_time; receipt_mass_source; transit_loss_mass; transit_loss_mass_unit; transit_loss_mass_basis; transit_loss_mass_method; transit_loss_mass_state; transit_loss_mass_sample_time; transit_loss_mass_source; temperature; temperature_unit; temperature_basis; temperature_method; temperature_state; temperature_sample_time; temperature_source; duration; duration_unit; duration_basis; duration_method; duration_state; duration_sample_time; duration_source; target_driver; target_driver_unit; target_driver_basis; target_driver_method; target_driver_state; target_driver_sample_time; target_driver_source; all_consumer_driver; all_consumer_driver_unit; all_consumer_driver_basis; all_consumer_driver_method; all_consumer_driver_state; all_consumer_driver_sample_time; all_consumer_driver_source; projection_variant; allocation_stage; output_evidence_or_exchange; independent_or_joint_output; source_input_role; internal_external; linked_input_coverage; linked_native_input_quantity; linked_native_input_quantity_unit; linked_native_input_quantity_basis; linked_native_input_quantity_method; linked_native_input_quantity_state; linked_native_input_quantity_sample_time; linked_native_input_quantity_source | 在真实交接点识别计量每次正反转移，两个节点配对transferID、责任人、接收者、时间、状态及原生接收量。发运接收差异用真实运输损失核对，不造损失。食品净质量、脏湿载荷、不可加和内容及货载不同。保留实际洗涤返工责任、负担及结转。执行paired_handoff和normalize_once，不强制内部质量等于finalN。 执行exclusive_food_input_roles：现场泛称原料仅真实额外外购；内部接收、旧食品或脏物返回仅库存来源关联，不能再计制造，只加真实新增责任。 | 实际kg及独立实际件数、温度时间原生单位 | 每个真实收发存、批次、表计、供餐、转移、接收、资产事件；连续时段在实际截止点读取 | 真实任务批次、保温行程、库存报告及完整寿命阶段，带实际时间戳、时区与DST | 仅此真实节点，及实际供应、现场场外、运输、服务商、接收职责与全部使用者 | 每参考流 | 原始来源、校准验收覆盖链接、全部输出使用者完整性、各原生操作数及真实结转最终解决 |
| cp_site_service | onsite_finish_service | 最终履行完整分餐膳食餐次交接点 | 真实接收者版本、各道份量、供出接受撤销台账 | record_id; node_id; site_id; job_id; service_version; batch_id; period_id; source_record_id; owner_id; covered_stage_id; receiver_id; output_id; recipient_id; transfer_id; actual_state; gate; event_start; event_end; timezone; utc_offset; dst_resolution; record_scope; each_or_total; covered_components; excluded_components; carry_source_id; carry_receiver_id; final_resolution_id; recipient_occasion_id; menu_version; recipe_version; course_id; portion_version; component_id; offer_record_id; supply_handoff_id; decline_reason; physical_acceptance_rule; acceptance_id; refill_id; reversal_id; fulfilled_count; fulfilled_count_unit; fulfilled_count_basis; fulfilled_count_method; fulfilled_count_state; fulfilled_count_sample_time; fulfilled_count_source; offered_declined_count; offered_declined_count_unit; offered_declined_count_basis; offered_declined_count_method; offered_declined_count_state; offered_declined_count_sample_time; offered_declined_count_source; unserved_count; unserved_count_unit; unserved_count_basis; unserved_count_method; unserved_count_state; unserved_count_sample_time; unserved_count_source; partial_count; partial_count_unit; partial_count_basis; partial_count_method; partial_count_state; partial_count_sample_time; partial_count_source; reversal_count; reversal_count_unit; reversal_count_basis; reversal_count_method; reversal_count_state; reversal_count_sample_time; reversal_count_source; component_portion_mass; component_portion_mass_unit; component_portion_mass_basis; component_portion_mass_method; component_portion_mass_state; component_portion_mass_sample_time; component_portion_mass_source; refill_mass; refill_mass_unit; refill_mass_basis; refill_mass_method; refill_mass_state; refill_mass_sample_time; refill_mass_source; served_mass; served_mass_unit; served_mass_basis; served_mass_method; served_mass_state; served_mass_sample_time; served_mass_source; plate_return_mass; plate_return_mass_unit; plate_return_mass_basis; plate_return_mass_method; plate_return_mass_state; plate_return_mass_sample_time; plate_return_mass_source; service_duration; service_duration_unit; service_duration_basis; service_duration_method; service_duration_state; service_duration_sample_time; service_duration_source; target_driver; target_driver_unit; target_driver_basis; target_driver_method; target_driver_state; target_driver_sample_time; target_driver_source; all_consumer_driver; all_consumer_driver_unit; all_consumer_driver_basis; all_consumer_driver_method; all_consumer_driver_state; all_consumer_driver_sample_time; all_consumer_driver_source; projection_variant; allocation_stage; output_evidence_or_exchange; independent_or_joint_output; source_input_role; internal_external; linked_input_coverage | 冻结实际完整菜单、组成、份量、服务版本与接收者时段交接点。把真实各道组分交接、提供拒领、部分履行、接受撤销与供餐制备返程台账交叉核对。按service_gate唯一计真实相容接收者餐次。仅制备可供、计划人数、收费或吃下质量不足。拒领未供部分责任真实保留，不能虚构完整输出。 在归属前保留每种输出完整原生量及projection_variant、allocation_stage、证据或交换角色、独立或联合输出判断。物理输出不乘targetshare。按allocation_projection，目标已归属LCI不把其他独立输出当交换或联产品；未分配wholepool保持完整输入与全部输出，仅在指定一步归属。 | Item(s)及独立实际kg、时间、份量单位 | 每个真实收发存、批次、表计、供餐、转移、接收、资产事件；连续时段在实际截止点读取 | 真实任务批次、保温行程、库存报告及完整寿命阶段，带实际时间戳、时区与DST | 仅此真实节点，及实际供应、现场场外、运输、服务商、接收职责与全部使用者 | 每参考流 | 原始来源、校准验收覆盖链接、全部输出使用者完整性、各原生操作数及真实结转最终解决 |
| cp_site_outputs | onsite_finish_service | 全部预期输出、其他菜单客户员工与部分输出 | 实际产品服务交接与完整使用者台账 | record_id; node_id; site_id; job_id; service_version; batch_id; period_id; source_record_id; owner_id; covered_stage_id; receiver_id; output_id; recipient_id; transfer_id; actual_state; gate; event_start; event_end; timezone; utc_offset; dst_resolution; record_scope; each_or_total; covered_components; excluded_components; carry_source_id; carry_receiver_id; final_resolution_id; output_version; output_property; intended_or_residue; provided_gate; acceptance_id; component_ids; support_responsibility; other_job_id; native_output_amount; native_output_amount_unit; native_output_amount_basis; native_output_amount_method; native_output_amount_state; native_output_amount_sample_time; native_output_amount_source; fulfilled_count; fulfilled_count_unit; fulfilled_count_basis; fulfilled_count_method; fulfilled_count_state; fulfilled_count_sample_time; fulfilled_count_source; partial_count; partial_count_unit; partial_count_basis; partial_count_method; partial_count_state; partial_count_sample_time; partial_count_source; reversal_count; reversal_count_unit; reversal_count_basis; reversal_count_method; reversal_count_state; reversal_count_sample_time; reversal_count_source; target_driver; target_driver_unit; target_driver_basis; target_driver_method; target_driver_state; target_driver_sample_time; target_driver_source; all_consumer_driver; all_consumer_driver_unit; all_consumer_driver_basis; all_consumer_driver_method; all_consumer_driver_state; all_consumer_driver_sample_time; all_consumer_driver_source; service_duration; service_duration_unit; service_duration_basis; service_duration_method; service_duration_state; service_duration_sample_time; service_duration_source; projection_variant; allocation_stage; output_evidence_or_exchange; independent_or_joint_output; source_input_role; internal_external; linked_input_coverage | 识别每项实际独立预期输出及接收者、版本、交接点、状态、来源时间、原生量，包含其他客户菜单和真实员工支持。核对实际交接部分撤销及共享资源，不删非餐输出，也不把不相容单位强制Count。按all_intended_outputs与physical_attribution记录优先顺序和物理驱动。 在归属前保留每种输出完整原生量及projection_variant、allocation_stage、证据或交换角色、独立或联合输出判断。物理输出不乘targetshare。按allocation_projection，目标已归属LCI不把其他独立输出当交换或联产品；未分配wholepool保持完整输入与全部输出，仅在指定一步归属。 | 原生输出属性单位；Item(s)仅可计数餐次服务 | 每个真实收发存、批次、表计、供餐、转移、接收、资产事件；连续时段在实际截止点读取 | 真实任务批次、保温行程、库存报告及完整寿命阶段，带实际时间戳、时区与DST | 仅此真实节点，及实际供应、现场场外、运输、服务商、接收职责与全部使用者 | 每参考流 | 原始来源、校准验收覆盖链接、全部输出使用者完整性、各原生操作数及真实结转最终解决 |

### Calculation Rules

| rule_id | 适用对象 | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| food_stock | food fuel materials and fluid stock | 对同一匹配状态库存池，gross_drawn S = attributed opening + actual net receipts - attributed closing加真实配对责任转移。净收货仅去包装或非货物皮重，在外部退货前计算。选S输入并列匹配UNUSED输出，或(S-UNUSED)净输入并省略该输出。USED回收脏物返回不减新供应制造；可用返回和在制品保留真实负担来源。 | 实际期初、入库、期末、配对未用及已用返回记录和各原生操作数 | 互斥实际库存领用及返回交换 |  |
| food_reconcile | each recipe/batch/occasion | 将实际原料、水添加及返回食品，与已制备和留存状态、真实供出补餐、可用出口返工、未供废弃、制备烹饪溢洒损失、餐盘返回及独立支持的水和其他直接排放核对。留存、吞食、混合物整体与组分视图不可加和。无通用收率，不将未知残差当损失排放；未定去向保留缺口。 | 节点食品与配对转移记录，真实组成水分和独立食品去向 | 完整状态及责任人关联食品审计 |  |
| paired_handoff | each actual forward/reverse transfer | 同一选定接收交接点，场外输出数量状态transferID等于现场输入；现场脏物或可用食品返回等于真实场外接收点。发运接收为独立观察，以真实运输损失和保温变化核对。保留原生测量数量，不把食品脏物返回固定到最终Count。两节点同一最终画像仅归一一次。 | 配对来源、接收者、交接、状态、时间、原生测量和损失记录 | 一项真实关联内部数量与责任 |  |
| normalize_once | 全部清单行 | 先保留真实直接目标专属量，或计算同池quantity*target_driver/正且完整all_consumer_driver。汇总唯一相容已归属记录后仅除一次正同画像N_target；已为每参考流不再变更。N_target=0保留真实责任人来源接收最终解决，不除零，不造输出。 | 每原生数量驱动量自身元数据、实际全部使用者时段及N_target | 每参考流 |  |
| freight_sum | offsite_freight; site_freight | freight_per_reference = sum_unique_load_leg(actual_packed_wet_payload_t * actual_distance_km * actual_EACH_repeat_or_TOTAL_once * THAT_record_actual_share) / positive_same_profile_N_target。仅去实际非货物车辆皮重；食品冰包装容器支撑设备载荷保留。完整承运或实际互斥自营能源资产物种接收空驶责任；已每参考流不再改变。 | 原生毛重皮重载荷距离重复份额各自元数据和唯一load-leg ID | 每参考流真实t*km及互斥完整运输责任 |  |
| exclusive_coverage | all provider/direct/asset/receiver duties | 逐物理阶段、组分、场所、时间、责任人、原生量对照完整匹配服务商数据或直接责任。实际缺失阶段必须完成并整合一次，具有来源、原生量状态时间、责任人和覆盖排除，才能完整链使用。重叠未知或只计划补充不完整。 | 已完成服务商和直接阶段矩阵、数据集、原生数量和排除项 | 完整互斥物理责任 |  |
| asset_life | all actual shared assets and land | 按实际target_life_driver/正且完整all_life_driver分配制造安装维护更换终结数量，覆盖每个使用者节点时段。完整驱动=实际已观察加有来源相容剩余，或实际终止总量，两者不重复用。土地面积*时间和有证据前后状态转换为独立相容接口。年度目标N、铭牌容量、默认年限不是完整寿命。 | 实际资产阶段、全部使用者历史、有来源剩余或终止及土地记录 | 实际完整寿命目标责任一次，再至每参考流 |  |
| fluid_exclusivity | each material/species stock and equipment | 各独立期初新供应、储存安装回收期末、配对UNUSED退货、可用回收旧状态出口、收容废物和有独立证据直接释放互斥。每项其他收货、配对进出、完整设备留存内容出口具有自己的实际原生数量元数据。出厂新内含若不在独立期初则归设备。整体资产内容和组分审计不可加和；未知差额不是排放。USED出口不能扣原生制造或自动给信用。 | 设备维修、材料库存、完整内含、接收者、环境记录和各原生操作数 | 互斥物种库存内含去向审计 |  |
| terminal_reconcile | water mixtures pollutants and receivers | 按匹配材料物种状态责任时间核对独立测得输入、库存、留存和终端输出。终端总和排除内部用途转移和重复接收视图；真实整体混合物以一股流记录并保留不可加和组分。无关独立流、物种和介质分别展开。空气水蒸气为Elementary Mass，收容废水为Waste，未知残差保留。 | 原生独立测得水、混合物、内含、物种、库存、去向记录及真实接收链接 | 不重复的实际终端责任与明确缺口 |  |

### Data Quality Requirements

| requirement_id | 适用对象 | Requirement | Evidence |
| --- | --- | --- | --- |
| reference_complete | site_fulfilled_meal | 实际完整且相容菜单份量、接收者餐次供应，全部组分拒领部分撤销核对；Count不是食品等价。 | 供餐台账、物理交接点及真实接受规则 |
| native_complete | 每个数值操作数 | 每个操作数独立value/unit/basis/method/state/sample_time/source及真实each-total和转换证据，原生键不是一个全局溯源旗标。 | 原生仪器记录和转换来源 |
| outputs_complete | 两个实际节点 | 每项独立预期输出、接收者、交接点状态、实际时间、来源、原生量，以及完整全部使用者；员工支持不自动删为其他销售。 | 输出使用者和归属台账 |
| physical_complete | all actual lifecycle duties | 食品运输洗涤接收资产土地完整供应商或已完成互斥缺失阶段；不遗漏不重复。 | 实际阶段覆盖矩阵和已完成整合链接 |
| state_and_fate | food water material fluids | 实际供货制备已供、库存湿干、留存内含、废物可用物、物种介质分开，真实整体组分审计不可加和。 | 配对批次库存、样品接收环境记录 |
| period_and_life | full alluser life and N0 | 已观察加有来源相容剩余，或真实终止，覆盖全部使用者时段；闲置失败来源结转接收最终解决明确。未分配责任不完整。 | 完整资产历史寿命来源与已解决资源池 |
| identity_restriction | 全部交换 | 最终具体交换须有已验证UUID支持属性单位及交接相容证据，语义集合须展开为实际类型。经核实的电力或热能流可按其有证据的能量基准使用ILCD名为净热值的能量属性，不能套用燃料特定热值系数或不匹配状态。 | 真实身份详情支持验证和明确未解决元数据 |
| complete_offsite_ingredients | offsite_preparation_dispatch | 最终使用前，按下方完整采集定义将`offsite_ingredients`的每项真实情形展开为独立身份交换，完成原生数量、状态、来源、接收方及覆盖证据。缺UUID或数量不能作零；保留固定情形的数量须从余项排除。 | `cp_offsite_food` |
| complete_offsite_recipe_water | offsite_preparation_dispatch | 最终使用前，按下方完整采集定义将`offsite_recipe_water`的每项真实情形展开为独立身份交换，完成原生数量、状态、来源、接收方及覆盖证据。缺UUID或数量不能作零；保留固定情形的数量须从余项排除。 | `cp_offsite_food` |
| complete_offsite_operating_water | offsite_preparation_dispatch | 最终使用前，按下方完整采集定义将`offsite_operating_water`的每项真实情形展开为独立身份交换，完成原生数量、状态、来源、接收方及覆盖证据。缺UUID或数量不能作零；保留固定情形的数量须从余项排除。 | `cp_offsite_utilities` |
| complete_offsite_electricity | offsite_preparation_dispatch | 最终使用前，按下方完整采集定义将`offsite_electricity`的每项真实情形展开为独立身份交换，完成原生数量、状态、来源、接收方及覆盖证据。缺UUID或数量不能作零；保留固定情形的数量须从余项排除。 | `cp_offsite_utilities` |
| complete_offsite_fuel | offsite_preparation_dispatch | 最终使用前，按下方完整采集定义将`offsite_fuel`的每项真实情形展开为独立身份交换，完成原生数量、状态、来源、接收方及覆盖证据。缺UUID或数量不能作零；保留固定情形的数量须从余项排除。 | `cp_offsite_utilities` |
| complete_offsite_thermal | offsite_preparation_dispatch | 最终使用前，按下方完整采集定义将`offsite_thermal`的每项真实情形展开为独立身份交换，完成原生数量、状态、来源、接收方及覆盖证据。缺UUID或数量不能作零；保留固定情形的数量须从余项排除。 | `cp_offsite_utilities` |
| complete_offsite_cleaning_materials | offsite_preparation_dispatch | 最终使用前，按下方完整采集定义将`offsite_cleaning_materials`的每项真实情形展开为独立身份交换，完成原生数量、状态、来源、接收方及覆盖证据。缺UUID或数量不能作零；保留固定情形的数量须从余项排除。 | `cp_offsite_materials` |
| complete_offsite_packaging | offsite_preparation_dispatch | 最终使用前，按下方完整采集定义将`offsite_packaging`的每项真实情形展开为独立身份交换，完成原生数量、状态、来源、接收方及覆盖证据。缺UUID或数量不能作零；保留固定情形的数量须从余项排除。 | `cp_offsite_materials` |
| complete_offsite_asset_life | offsite_preparation_dispatch | 最终使用前，按下方完整采集定义将`offsite_asset_life`的每项真实情形展开为独立身份交换，完成原生数量、状态、来源、接收方及覆盖证据。缺UUID或数量不能作零；保留固定情形的数量须从余项排除。 | `cp_offsite_assets` |
| complete_offsite_reusables_life | offsite_preparation_dispatch | 最终使用前，按下方完整采集定义将`offsite_reusables_life`的每项真实情形展开为独立身份交换，完成原生数量、状态、来源、接收方及覆盖证据。缺UUID或数量不能作零；保留固定情形的数量须从余项排除。 | `cp_offsite_assets` |
| complete_offsite_provider | offsite_preparation_dispatch | 最终使用前，按下方完整采集定义将`offsite_provider`的每项真实情形展开为独立身份交换，完成原生数量、状态、来源、接收方及覆盖证据。缺UUID或数量不能作零；保留固定情形的数量须从余项排除。 | `cp_offsite_providers` |
| complete_offsite_freight | offsite_preparation_dispatch | 最终使用前，按下方完整采集定义将`offsite_freight`的每项真实情形展开为独立身份交换，完成原生数量、状态、来源、接收方及覆盖证据。缺UUID或数量不能作零；保留固定情形的数量须从余项排除。 | `cp_offsite_freight` |
| complete_offsite_fluid_supply | offsite_preparation_dispatch | 最终使用前，按下方完整采集定义将`offsite_fluid_supply`的每项真实情形展开为独立身份交换，完成原生数量、状态、来源、接收方及覆盖证据。缺UUID或数量不能作零；保留固定情形的数量须从余项排除。 | `cp_offsite_materials` |
| complete_offsite_returned_food_receipt | offsite_preparation_dispatch | 最终使用前，按下方完整采集定义将`offsite_returned_food_receipt`的每项真实情形展开为独立身份交换，完成原生数量、状态、来源、接收方及覆盖证据。缺UUID或数量不能作零；保留固定情形的数量须从余项排除。 | `cp_offsite_handoff` |
| complete_offsite_dirty_receipt | offsite_preparation_dispatch | 最终使用前，按下方完整采集定义将`offsite_dirty_receipt`的每项真实情形展开为独立身份交换，完成原生数量、状态、来源、接收方及覆盖证据。缺UUID或数量不能作零；保留固定情形的数量须从余项排除。 | `cp_offsite_handoff` |
| complete_offsite_withdrawal | offsite_preparation_dispatch | 最终使用前，按下方完整采集定义将`offsite_withdrawal`的每项真实情形展开为独立身份交换，完成原生数量、状态、来源、接收方及覆盖证据。缺UUID或数量不能作零；保留固定情形的数量须从余项排除。 | `cp_offsite_environment` |
| complete_offsite_unused_return | offsite_preparation_dispatch | 最终使用前，按下方完整采集定义将`offsite_unused_return`的每项真实情形展开为独立身份交换，完成原生数量、状态、来源、接收方及覆盖证据。缺UUID或数量不能作零；保留固定情形的数量须从余项排除。 | `cp_offsite_fates` |
| complete_offsite_useful_food | offsite_preparation_dispatch | 最终使用前，按下方完整采集定义将`offsite_useful_food`的每项真实情形展开为独立身份交换，完成原生数量、状态、来源、接收方及覆盖证据。缺UUID或数量不能作零；保留固定情形的数量须从余项排除。 | `cp_offsite_food` |
| complete_offsite_usable_reusables | offsite_preparation_dispatch | 最终使用前，按下方完整采集定义将`offsite_usable_reusables`的每项真实情形展开为独立身份交换，完成原生数量、状态、来源、接收方及覆盖证据。缺UUID或数量不能作零；保留固定情形的数量须从余项排除。 | `cp_offsite_fates` |
| complete_offsite_recovered_fluid | offsite_preparation_dispatch | 最终使用前，按下方完整采集定义将`offsite_recovered_fluid`的每项真实情形展开为独立身份交换，完成原生数量、状态、来源、接收方及覆盖证据。缺UUID或数量不能作零；保留固定情形的数量须从余项排除。 | `cp_offsite_fates` |
| complete_offsite_other_meals | offsite_preparation_dispatch | 最终使用前，按下方完整采集定义将`offsite_other_meals`的每项真实情形展开为独立身份交换，完成原生数量、状态、来源、接收方及覆盖证据。缺UUID或数量不能作零；保留固定情形的数量须从余项排除。 | `cp_offsite_outputs` |
| complete_offsite_prep_waste | offsite_preparation_dispatch | 最终使用前，按下方完整采集定义将`offsite_prep_waste`的每项真实情形展开为独立身份交换，完成原生数量、状态、来源、接收方及覆盖证据。缺UUID或数量不能作零；保留固定情形的数量须从余项排除。 | `cp_offsite_food` |
| complete_offsite_pack_waste | offsite_preparation_dispatch | 最终使用前，按下方完整采集定义将`offsite_pack_waste`的每项真实情形展开为独立身份交换，完成原生数量、状态、来源、接收方及覆盖证据。缺UUID或数量不能作零；保留固定情形的数量须从余项排除。 | `cp_offsite_fates` |
| complete_offsite_cleaning_solids | offsite_preparation_dispatch | 最终使用前，按下方完整采集定义将`offsite_cleaning_solids`的每项真实情形展开为独立身份交换，完成原生数量、状态、来源、接收方及覆盖证据。缺UUID或数量不能作零；保留固定情形的数量须从余项排除。 | `cp_offsite_fates` |
| complete_offsite_asset_waste | offsite_preparation_dispatch | 最终使用前，按下方完整采集定义将`offsite_asset_waste`的每项真实情形展开为独立身份交换，完成原生数量、状态、来源、接收方及覆盖证据。缺UUID或数量不能作零；保留固定情形的数量须从余项排除。 | `cp_offsite_fates` |
| complete_offsite_effluent | offsite_preparation_dispatch | 最终使用前，按下方完整采集定义将`offsite_effluent`的每项真实情形展开为独立身份交换，完成原生数量、状态、来源、接收方及覆盖证据。缺UUID或数量不能作零；保留固定情形的数量须从余项排除。 | `cp_offsite_fates` |
| complete_offsite_fluid_waste | offsite_preparation_dispatch | 最终使用前，按下方完整采集定义将`offsite_fluid_waste`的每项真实情形展开为独立身份交换，完成原生数量、状态、来源、接收方及覆盖证据。缺UUID或数量不能作零；保留固定情形的数量须从余项排除。 | `cp_offsite_fates` |
| complete_offsite_species | offsite_preparation_dispatch | 最终使用前，按下方完整采集定义将`offsite_species`的每项真实情形展开为独立身份交换，完成原生数量、状态、来源、接收方及覆盖证据。缺UUID或数量不能作零；保留固定情形的数量须从余项排除。 | `cp_offsite_environment` |
| complete_site_ingredients | onsite_finish_service | 最终使用前，按下方完整采集定义将`site_ingredients`的每项真实情形展开为独立身份交换，完成原生数量、状态、来源、接收方及覆盖证据。缺UUID或数量不能作零；保留固定情形的数量须从余项排除。 | `cp_site_food` |
| complete_site_recipe_water | onsite_finish_service | 最终使用前，按下方完整采集定义将`site_recipe_water`的每项真实情形展开为独立身份交换，完成原生数量、状态、来源、接收方及覆盖证据。缺UUID或数量不能作零；保留固定情形的数量须从余项排除。 | `cp_site_food` |
| complete_site_operating_water | onsite_finish_service | 最终使用前，按下方完整采集定义将`site_operating_water`的每项真实情形展开为独立身份交换，完成原生数量、状态、来源、接收方及覆盖证据。缺UUID或数量不能作零；保留固定情形的数量须从余项排除。 | `cp_site_utilities` |
| complete_site_electricity | onsite_finish_service | 最终使用前，按下方完整采集定义将`site_electricity`的每项真实情形展开为独立身份交换，完成原生数量、状态、来源、接收方及覆盖证据。缺UUID或数量不能作零；保留固定情形的数量须从余项排除。 | `cp_site_utilities` |
| complete_site_fuel | onsite_finish_service | 最终使用前，按下方完整采集定义将`site_fuel`的每项真实情形展开为独立身份交换，完成原生数量、状态、来源、接收方及覆盖证据。缺UUID或数量不能作零；保留固定情形的数量须从余项排除。 | `cp_site_utilities` |
| complete_site_thermal | onsite_finish_service | 最终使用前，按下方完整采集定义将`site_thermal`的每项真实情形展开为独立身份交换，完成原生数量、状态、来源、接收方及覆盖证据。缺UUID或数量不能作零；保留固定情形的数量须从余项排除。 | `cp_site_utilities` |
| complete_site_cleaning_materials | onsite_finish_service | 最终使用前，按下方完整采集定义将`site_cleaning_materials`的每项真实情形展开为独立身份交换，完成原生数量、状态、来源、接收方及覆盖证据。缺UUID或数量不能作零；保留固定情形的数量须从余项排除。 | `cp_site_materials` |
| complete_site_packaging | onsite_finish_service | 最终使用前，按下方完整采集定义将`site_packaging`的每项真实情形展开为独立身份交换，完成原生数量、状态、来源、接收方及覆盖证据。缺UUID或数量不能作零；保留固定情形的数量须从余项排除。 | `cp_site_materials` |
| complete_site_asset_life | onsite_finish_service | 最终使用前，按下方完整采集定义将`site_asset_life`的每项真实情形展开为独立身份交换，完成原生数量、状态、来源、接收方及覆盖证据。缺UUID或数量不能作零；保留固定情形的数量须从余项排除。 | `cp_site_assets` |
| complete_site_reusables_life | onsite_finish_service | 最终使用前，按下方完整采集定义将`site_reusables_life`的每项真实情形展开为独立身份交换，完成原生数量、状态、来源、接收方及覆盖证据。缺UUID或数量不能作零；保留固定情形的数量须从余项排除。 | `cp_site_assets` |
| complete_site_provider | onsite_finish_service | 最终使用前，按下方完整采集定义将`site_provider`的每项真实情形展开为独立身份交换，完成原生数量、状态、来源、接收方及覆盖证据。缺UUID或数量不能作零；保留固定情形的数量须从余项排除。 | `cp_site_providers` |
| complete_site_freight | onsite_finish_service | 最终使用前，按下方完整采集定义将`site_freight`的每项真实情形展开为独立身份交换，完成原生数量、状态、来源、接收方及覆盖证据。缺UUID或数量不能作零；保留固定情形的数量须从余项排除。 | `cp_site_freight` |
| complete_site_fluid_supply | onsite_finish_service | 最终使用前，按下方完整采集定义将`site_fluid_supply`的每项真实情形展开为独立身份交换，完成原生数量、状态、来源、接收方及覆盖证据。缺UUID或数量不能作零；保留固定情形的数量须从余项排除。 | `cp_site_materials` |
| complete_site_withdrawal | onsite_finish_service | 最终使用前，按下方完整采集定义将`site_withdrawal`的每项真实情形展开为独立身份交换，完成原生数量、状态、来源、接收方及覆盖证据。缺UUID或数量不能作零；保留固定情形的数量须从余项排除。 | `cp_site_environment` |
| complete_site_unused_return | onsite_finish_service | 最终使用前，按下方完整采集定义将`site_unused_return`的每项真实情形展开为独立身份交换，完成原生数量、状态、来源、接收方及覆盖证据。缺UUID或数量不能作零；保留固定情形的数量须从余项排除。 | `cp_site_fates` |
| complete_site_useful_food | onsite_finish_service | 最终使用前，按下方完整采集定义将`site_useful_food`的每项真实情形展开为独立身份交换，完成原生数量、状态、来源、接收方及覆盖证据。缺UUID或数量不能作零；保留固定情形的数量须从余项排除。 | `cp_site_food` |
| complete_site_usable_reusables | onsite_finish_service | 最终使用前，按下方完整采集定义将`site_usable_reusables`的每项真实情形展开为独立身份交换，完成原生数量、状态、来源、接收方及覆盖证据。缺UUID或数量不能作零；保留固定情形的数量须从余项排除。 | `cp_site_fates` |
| complete_site_recovered_fluid | onsite_finish_service | 最终使用前，按下方完整采集定义将`site_recovered_fluid`的每项真实情形展开为独立身份交换，完成原生数量、状态、来源、接收方及覆盖证据。缺UUID或数量不能作零；保留固定情形的数量须从余项排除。 | `cp_site_fates` |
| complete_site_returned_food | onsite_finish_service | 最终使用前，按下方完整采集定义将`site_returned_food`的每项真实情形展开为独立身份交换，完成原生数量、状态、来源、接收方及覆盖证据。缺UUID或数量不能作零；保留固定情形的数量须从余项排除。 | `cp_site_handoff` |
| complete_site_dirty_return | onsite_finish_service | 最终使用前，按下方完整采集定义将`site_dirty_return`的每项真实情形展开为独立身份交换，完成原生数量、状态、来源、接收方及覆盖证据。缺UUID或数量不能作零；保留固定情形的数量须从余项排除。 | `cp_site_handoff` |
| complete_site_other_meals | onsite_finish_service | 最终使用前，按下方完整采集定义将`site_other_meals`的每项真实情形展开为独立身份交换，完成原生数量、状态、来源、接收方及覆盖证据。缺UUID或数量不能作零；保留固定情形的数量须从余项排除。 | `cp_site_outputs` |
| complete_site_prep_waste | onsite_finish_service | 最终使用前，按下方完整采集定义将`site_prep_waste`的每项真实情形展开为独立身份交换，完成原生数量、状态、来源、接收方及覆盖证据。缺UUID或数量不能作零；保留固定情形的数量须从余项排除。 | `cp_site_food` |
| complete_site_pack_waste | onsite_finish_service | 最终使用前，按下方完整采集定义将`site_pack_waste`的每项真实情形展开为独立身份交换，完成原生数量、状态、来源、接收方及覆盖证据。缺UUID或数量不能作零；保留固定情形的数量须从余项排除。 | `cp_site_fates` |
| complete_site_cleaning_solids | onsite_finish_service | 最终使用前，按下方完整采集定义将`site_cleaning_solids`的每项真实情形展开为独立身份交换，完成原生数量、状态、来源、接收方及覆盖证据。缺UUID或数量不能作零；保留固定情形的数量须从余项排除。 | `cp_site_fates` |
| complete_site_asset_waste | onsite_finish_service | 最终使用前，按下方完整采集定义将`site_asset_waste`的每项真实情形展开为独立身份交换，完成原生数量、状态、来源、接收方及覆盖证据。缺UUID或数量不能作零；保留固定情形的数量须从余项排除。 | `cp_site_fates` |
| complete_site_effluent | onsite_finish_service | 最终使用前，按下方完整采集定义将`site_effluent`的每项真实情形展开为独立身份交换，完成原生数量、状态、来源、接收方及覆盖证据。缺UUID或数量不能作零；保留固定情形的数量须从余项排除。 | `cp_site_fates` |
| complete_site_fluid_waste | onsite_finish_service | 最终使用前，按下方完整采集定义将`site_fluid_waste`的每项真实情形展开为独立身份交换，完成原生数量、状态、来源、接收方及覆盖证据。缺UUID或数量不能作零；保留固定情形的数量须从余项排除。 | `cp_site_fates` |
| complete_site_species | onsite_finish_service | 最终使用前，按下方完整采集定义将`site_species`的每项真实情形展开为独立身份交换，完成原生数量、状态、来源、接收方及覆盖证据。缺UUID或数量不能作零；保留固定情形的数量须从余项排除。 | `cp_site_environment` |


### 强制清单完成记录

以下记录是强制物理采集和情形展开要求，不是单条清单交换。原有节点、方向、流类型、数量基准、采集协议、库存去向、供应接收和来源义务全部继续有效。正文对这些编号的引用对应这些完成要求。前景数据集完成前，必须将每项真实物料、服务、资产全寿命、废物流或物种介质分别展开为具原生数量和排他覆盖的独立身份交换。保留固定卡只覆盖其真实受支持情形，其余真实情形须无重叠协调。身份、发生或数量缺失仍待采集，不能填零或删项。内部配对交接和组分审计视图不可相加；必要全寿命与供应商阶段必须实际完成一次。

#### offsite_ingredients

责任节点与原流角色：offsite_preparation_dispatch / inputs / product

按实际物种、材料、配方、批次和供货状态展开；保留实际水分、骨皮及真实制备损失。外购已制备组分保留完整上游食品与制备范围。食品不与包装皮重合并。

- 选定流：实际各类食品、饮品与配方原料
- 流属性/单位：Mass / kg
- 数量规则：按 cp_offsite_food 采集的实际互斥目标责任原生数量 / 正的同画像 N_target，仅一次；已为每参考流的记录不再变更；N_target=0 保留责任但不除零。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_offsite_food`
- 来源：`krisp-current-commissary-event-service`; `box-current-private-dining`; `silverfeast-current-event-route`

范围证据需求：实际收发存、供应批次状态、配方投料及食品去向。 不给通用每餐因子、配方、收率、温度、寿命或零值默认。

#### offsite_recipe_water

责任节点与原流角色：offsite_preparation_dispatch / inputs / product

仅记录真实进入膳食组成的水和冰，采集相态及实际融化、留存。清洗运行水单列，不再计为配方输入。

本卡为独立身份分支`offsite_recipe_water_liquid_tap`之外的余项清单要求。已计入分支的实际数量不再计入本余项交换，原类目总量仅作不可相加的协调审计。其他实际材料、状态、来源或介质仍须保留自身经核实的身份、原生数量及供应接收责任；记录缺失时，不推定条件分支发生、不发生或数量为零。

- 选定流：实际配方添加水与冰
- 流属性/单位：Mass / kg
- 数量规则：按 cp_offsite_food 采集的实际互斥目标责任原生数量 / 正的同画像 N_target，仅一次；已为每参考流的记录不再变更；N_target=0 保留责任但不除零。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_offsite_food`
- 来源：`krisp-current-commissary-event-service`; `box-current-private-dining`; `silverfeast-current-event-route`

范围证据需求：实际批次添加量和相容冰液质量基准。 不给通用每餐因子、配方、收率、温度、寿命或零值默认。

#### offsite_operating_water

责任节点与原流角色：offsite_preparation_dispatch / inputs / product

记录购入清洗、洗碗、卫生、保温与清洁用水，不默认等于废水或水蒸气。直接环境取水有独立基本流。

本卡为独立身份分支`offsite_operating_water_liquid_tap`之外的余项清单要求。已计入分支的实际数量不再计入本余项交换，原类目总量仅作不可相加的协调审计。其他实际材料、状态、来源或介质仍须保留自身经核实的身份、原生数量及供应接收责任；记录缺失时，不推定条件分支发生、不发生或数量为零。

- 选定流：实际购入的制备、清洗与设备用水
- 流属性/单位：Volume / m3
- 数量规则：按 cp_offsite_utilities 采集的实际互斥目标责任原生数量 / 正的同画像 N_target，仅一次；已为每参考流的记录不再变更；N_target=0 保留责任但不除零。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_offsite_utilities`
- 来源：`krisp-current-commissary-event-service`; `box-current-private-dining`; `silverfeast-current-event-route`

范围证据需求：供应商、表计边界及实际用途、库存、接收状态。 不给通用每餐因子、配方、收率、温度、寿命或零值默认。

#### offsite_electricity

责任节点与原流角色：offsite_preparation_dispatch / inputs / product

仅归入本节点的真实用电及必要待机。场外节点可含真实自营冷链或车辆充电，但不得重复完整供应商已覆盖用电；现场临时厨房和场地电力同样仅计一次。

本卡为独立身份分支`offsite_electricity_ac`之外的余项清单要求。已计入分支的实际数量不再计入本余项交换，原类目总量仅作不可相加的协调审计。其他实际材料、状态、来源或介质仍须保留自身经核实的身份、原生数量及供应接收责任；记录缺失时，不推定条件分支发生、不发生或数量为零。

- 选定流：实际厨房、运输、保温、完成加工与清洁用电
- 流属性/单位：Energy / kWh
- 数量规则：按 cp_offsite_utilities 采集的实际互斥目标责任原生数量 / 正的同画像 N_target，仅一次；已为每参考流的记录不再变更；N_target=0 保留责任但不除零。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_offsite_utilities`
- 来源：`krisp-current-commissary-event-service`; `box-current-private-dining`; `silverfeast-current-event-route`

范围证据需求：实际表计或充电时段、覆盖边界、全部使用者及闲置分配。 不给通用每餐因子、配方、收率、温度、寿命或零值默认。

#### offsite_fuel

责任节点与原流角色：offsite_preparation_dispatch / inputs / product

按实际燃料载体、等级、状态及用途展开。供应库存与燃烧量不同；完整运输或供应商已覆盖燃料不重复。不从服务名称推定炉具、车辆或发电机。

- 选定流：实际各类烹饪、运输与设备燃料供应
- 流属性/单位：Mass / kg
- 数量规则：按 cp_offsite_utilities 采集的实际互斥目标责任原生数量 / 正的同画像 N_target，仅一次；已为每参考流的记录不再变更；N_target=0 保留责任但不除零。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_offsite_utilities`
- 来源：`krisp-current-commissary-event-service`; `box-current-private-dining`; `silverfeast-current-event-route`

范围证据需求：期初、净收货、期末、配对未用退货，以及独立支持的消耗和排放证据。 不给通用每餐因子、配方、收率、温度、寿命或零值默认。

#### offsite_thermal

责任节点与原流角色：offsite_preparation_dispatch / inputs / product

仅计实际已交付且状态和交接点明确的有用热冷服务，不重复供应商燃料、装置和损失；普通烹饪不意味着独立能源厂。

本卡为独立身份分支`offsite_thermal_delivered_heat`之外的余项清单要求。已计入分支的实际数量不再计入本余项交换，原类目总量仅作不可相加的协调审计。其他实际材料、状态、来源或介质仍须保留自身经核实的身份、原生数量及供应接收责任；记录缺失时，不推定条件分支发生、不发生或数量为零。

- 选定流：实际外购有用供热或供冷服务
- 流属性/单位：Energy / MJ
- 数量规则：按 cp_offsite_utilities 采集的实际互斥目标责任原生数量 / 正的同画像 N_target，仅一次；已为每参考流的记录不再变更；N_target=0 保留责任但不除零。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_offsite_utilities`
- 来源：`krisp-current-commissary-event-service`; `box-current-private-dining`; `silverfeast-current-event-route`

范围证据需求：实交热量、原生单位、温度或服务状态及完整供应商边界。 不给通用每餐因子、配方、收率、温度、寿命或零值默认。

#### offsite_cleaning_materials

责任节点与原流角色：offsite_preparation_dispatch / inputs / product

各实际清洁剂、消毒剂、抹布、吸附材料、助剂按材料配方及库存分别采集。仅匹配的未用退货可净扣，使用后的脏物返回不能如此处理。

本卡为独立身份分支`offsite_cleaning_materials_synthetic_detergent`之外的余项清单要求。已计入分支的实际数量不再计入本余项交换，原类目总量仅作不可相加的协调审计。其他实际材料、状态、来源或介质仍须保留自身经核实的身份、原生数量及供应接收责任；记录缺失时，不推定条件分支发生、不发生或数量为零。

- 选定流：实际独立清洗、消毒与支持材料
- 流属性/单位：Mass / kg
- 数量规则：按 cp_offsite_materials 采集的实际互斥目标责任原生数量 / 正的同画像 N_target，仅一次；已为每参考流的记录不再变更；N_target=0 保留责任但不除零。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_offsite_materials`
- 来源：`krisp-current-commissary-event-service`; `box-current-private-dining`; `silverfeast-current-event-route`

范围证据需求：实际收货、库存、稀释、组成、用途和去向。 不给通用每餐因子、配方、收率、温度、寿命或零值默认。

#### offsite_packaging

责任节点与原流角色：offsite_preparation_dispatch / inputs / product

包装前食品状态和包装后的保护状态通过实际容器、盖、衬层、标签及接触或保温角色连接。一次性消耗、拒收与废弃不同于可重复物品全寿命和返回；配送不等于包装活动。

- 选定流：实际独立一次性食品保护与供餐包装
- 流属性/单位：Mass / kg
- 数量规则：按 cp_offsite_materials 采集的实际互斥目标责任原生数量 / 正的同画像 N_target，仅一次；已为每参考流的记录不再变更；N_target=0 保留责任但不除零。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_offsite_materials`
- 来源：`krisp-current-commissary-event-service`; `box-current-private-dining`; `silverfeast-current-event-route`

范围证据需求：实际包装材料、尺寸、件数、质量、EACH或TOTAL、食品接触状态及重复使用和终端记录。 不给通用每餐因子、配方、收率、温度、寿命或零值默认。

#### offsite_asset_life

责任节点与原流角色：offsite_preparation_dispatch / inputs / product

仅在真实可计数且相容的资产服务案例采用Count。覆盖建筑、场地、装修、厨房、制冷、车辆、临时烤箱、保温箱、洗涤及信息设备的制造、安装、维护、更换、终结。土地使用原生面积和时间，不转换为Count；未被完整覆盖的真实土地接口须单列展开。

- 选定流：实际场地、厨房、运输与设备完整寿命服务
- 流属性/单位：Count / Item(s)
- 数量规则：按 cp_offsite_assets 采集的实际互斥目标责任原生数量 / 正的同画像 N_target，仅一次；已为每参考流的记录不再变更；N_target=0 保留责任但不除零。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_offsite_assets`
- 来源：`krisp-current-commissary-event-service`; `box-current-private-dining`; `silverfeast-current-event-route`

范围证据需求：实际资产、覆盖边界、所有使用者的已观察使用加有来源且相容的剩余使用，或真实终止，以及原生驱动量。 不给通用每餐因子、配方、收率、温度、寿命或零值默认。

#### offsite_reusables_life

责任节点与原流角色：offsite_preparation_dispatch / inputs / product

各真实可计数物品服务须包含制造、适用安装、维护、更换和终结，并覆盖全部使用者寿命。脏物返回是旧状态转移，不是新制造或自动负信用。洗涤与服务商覆盖互斥。

- 选定流：实际可重复容器、餐具、用具与织物的完整寿命
- 流属性/单位：Count / Item(s)
- 数量规则：按 cp_offsite_assets 采集的实际互斥目标责任原生数量 / 正的同画像 N_target，仅一次；已为每参考流的记录不再变更；N_target=0 保留责任但不除零。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_offsite_assets`
- 来源：`krisp-current-commissary-event-service`; `box-current-private-dining`; `silverfeast-current-event-route`

范围证据需求：实际物品材料、已观察及有来源的剩余循环或真实终止总量、清洗和退役覆盖。 不给通用每餐因子、配方、收率、温度、寿命或零值默认。

#### offsite_provider

责任节点与原流角色：offsite_preparation_dispatch / inputs / product

仅真正已完成且相容的计数服务采用Item(s)。使用完整物理覆盖，或已实际完成的互斥缺失阶段补充。服务商若采用原生质量、能量、距离或时间单位，须展开相应已验证属性单位，不强制Count。通用发票或外包名称不能吞并厨房、运输、洗涤或资产责任。

- 选定流：实际完整的补充物理服务
- 流属性/单位：Count / Item(s)
- 数量规则：按 cp_offsite_providers 采集的实际互斥目标责任原生数量 / 正的同画像 N_target，仅一次；已为每参考流的记录不再变更；N_target=0 保留责任但不除零。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_offsite_providers`
- 来源：`krisp-current-commissary-event-service`; `box-current-private-dining`; `silverfeast-current-event-route`

范围证据需求：阶段责任人、已覆盖及排除组分矩阵、实际完成数量和服务数据链接。 不给通用每餐因子、配方、收率、温度、寿命或零值默认。

#### offsite_freight

责任节点与原流角色：offsite_preparation_dispatch / inputs / product

逐实载或返程货物和运输段，保留食品、冰、包装、容器、支撑物、设备的完整湿载荷。场外节点默认负责往返接口，除非现场有明确不重叠范围。完整承运覆盖或互斥自营车队能源、资产、物种排放和接收责任，不能两者重复。

- 选定流：实际唯一食品、设备、物料与接收运输
- 流属性/单位：Mass * Length / t*km
- 数量规则：按 cp_offsite_freight 采集的实际互斥目标责任原生数量 / 正的同画像 N_target，仅一次；已为每参考流的记录不再变更；N_target=0 保留责任但不除零。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_offsite_freight`
- 来源：`krisp-current-commissary-event-service`; `box-current-private-dining`; `silverfeast-current-event-route`

范围证据需求：实际湿载荷、距离、EACH或TOTAL重复次数、记录自身份额置于求和内部及相同最终N仅除一次。 不给通用每餐因子、配方、收率、温度、寿命或零值默认。

#### offsite_fluid_supply

责任节点与原流角色：offsite_preparation_dispatch / inputs / product

按真实独立材料、物种、等级采集补充或新独立库存。全新设备的出厂内含充注若不在独立期初库存中，属于设备内容，不能再作新独立流体。储存、安装和回收角色互斥。

- 选定流：实际独立运行制冷剂与传热流体供应
- 流属性/单位：Mass / kg
- 数量规则：按 cp_offsite_materials 采集的实际互斥目标责任原生数量 / 正的同画像 N_target，仅一次；已为每参考流的记录不再变更；N_target=0 保留责任但不除零。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_offsite_materials`
- 来源：`krisp-current-commissary-event-service`; `box-current-private-dining`; `silverfeast-current-event-route`

范围证据需求：准确物种、库存、设备维修、未用退回、留存充注及全部去向。 不给通用每餐因子、配方、收率、温度、寿命或零值默认。

#### offsite_returned_food_receipt

责任节点与原流角色：offsite_preparation_dispatch / inputs / product

采用与现场退回同一transferID、状态及原生量；采集真实接收去向，保留先前负担与库存来源。不是负制造量或额外原生供应。 保留原负担及关联原生量覆盖，不再增加原料或可重复物制造，仅计真实新增返工洗涤储存运输责任。

- 选定流：实际返回场外厨房的可用未供食品
- 流属性/单位：Mass / kg
- 数量规则：按 cp_offsite_handoff 采集的实际互斥目标责任原生数量 / 正的同画像 N_target，仅一次；已为每参考流的记录不再变更；N_target=0 保留责任但不除零。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_offsite_handoff`
- 来源：`krisp-current-commissary-event-service`; `box-current-private-dining`; `silverfeast-current-event-route`

范围证据需求：实际配对旧状态返回、返工、在制品留存与独立废弃去向。 不给通用每餐因子、配方、收率、温度、寿命或零值默认。

#### offsite_dirty_receipt

责任节点与原流角色：offsite_preparation_dispatch / inputs / product

匹配现场脏物退回transferID、湿状态和原生量至真实场外洗涤接收。留存食品和水是整体载荷的不可加和内容；真实新增洗涤能源、材料、水及接收去向在此仅记录一次。 保留原负担及关联原生量覆盖，不再增加原料或可重复物制造，仅计真实新增返工洗涤储存运输责任。

- 选定流：实际返回场外洗涤的已用可重复物品
- 流属性/单位：Mass / kg
- 数量规则：按 cp_offsite_handoff 采集的实际互斥目标责任原生数量 / 正的同画像 N_target，仅一次；已为每参考流的记录不再变更；N_target=0 保留责任但不除零。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_offsite_handoff`
- 来源：`krisp-current-commissary-event-service`; `box-current-private-dining`; `silverfeast-current-event-route`

范围证据需求：实际返回件数、湿质量、真实洗涤事件和完整责任接收边界。 不给通用每餐因子、配方、收率、温度、寿命或零值默认。

#### offsite_withdrawal

责任节点与原流角色：offsite_preparation_dispatch / inputs / elementary

仅实际直接环境来源与介质。外购供水不得再次作为环境资源取水；不同水源独立展开。

- 选定流：实际按水源区分的直接取水
- 流属性/单位：Volume / m3
- 数量规则：按 cp_offsite_environment 采集的实际互斥目标责任原生数量 / 正的同画像 N_target，仅一次；已为每参考流的记录不再变更；N_target=0 保留责任但不除零。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_offsite_environment`
- 来源：`krisp-current-commissary-event-service`; `box-current-private-dining`; `silverfeast-current-event-route`

范围证据需求：实际水源、许可、表计、事件、地理与源介质身份。 不给通用每餐因子、配方、收率、温度、寿命或零值默认。

#### offsite_unused_return

责任节点与原流角色：offsite_preparation_dispatch / outputs / product

仅真正未使用且交给实际接收者的供应物，匹配原材料状态与库存池。采用总额S输入并列UNUSED输出，或采用S-UNUSED净输入并省略输出，不能混用。使用后的物品或流体不属于未用。

- 选定流：实际匹配的未用食品和物料外部退货
- 流属性/单位：Mass / kg
- 数量规则：按 cp_offsite_fates 采集的实际互斥目标责任原生数量 / 正的同画像 N_target，仅一次；已为每参考流的记录不再变更；N_target=0 保留责任但不除零。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_offsite_fates`
- 来源：`krisp-current-commissary-event-service`; `box-current-private-dining`; `silverfeast-current-event-route`

范围证据需求：原收货、库存、退货原生质量状态、接收者、时间和选定记账惯例。 不给通用每餐因子、配方、收率、温度、寿命或零值默认。

#### offsite_useful_food

责任节点与原流角色：offsite_preparation_dispatch / outputs / product

按真实可接受、合法可用的产品、捐赠或再部署边界出口记录实际组成状态、接收者和原生数量。这不是目标膳食服务，也不自动成为废物或替代信用。内部食品返程采用独立配对转移。 原始ALL-OUTPUT台账保留未归一化的真实完整原生量，不乘targetshare，也不是每参考流量。目标已归属LCI中独立其他餐或产品仅审计，不是共同产品交换。若实际有记录的PCR专属决定保留真实联合产品最终交换，则以所选真实物理输出量除相同正画像N_target一次，已每参考流不再除；不得对物理输出量应用通用资源目标份额。本输出规则优先于通用资源归属。单独未分配wholepool保留完整输入及全部输出，仅指定一步归属。

- 选定流：实际已接收的可用制备食品外部交接
- 流属性/单位：Mass / kg
- 数量规则：归属前台账保留完整未归一化真实原生物理输出。目标已归属LCI中独立输出仅审计。仅真实PCR专属决定保留的真实联合输出，以所选实际物理量除相同正画像N_target一次，已每参考流不再除。不套资源targetshare；physical_product_output_quantity优先。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_offsite_food`
- 来源：`krisp-current-commissary-event-service`; `box-current-private-dining`; `silverfeast-current-event-route`

范围证据需求：实际处置、接收者、交接、质量、数量状态及负担责任。 不给通用每餐因子、配方、收率、温度、寿命或零值默认。

#### offsite_usable_reusables

责任节点与原流角色：offsite_preparation_dispatch / outputs / product

实际保有可用性的旧状态资产或材料出口，不自动形成避免新制造。内部脏物返回单列配对；供应商已覆盖的可重复物品寿命不重复。 原始ALL-OUTPUT台账保留未归一化的真实完整原生量，不乘targetshare，也不是每参考流量。目标已归属LCI中独立其他餐或产品仅审计，不是共同产品交换。若实际有记录的PCR专属决定保留真实联合产品最终交换，则以所选真实物理输出量除相同正画像N_target一次，已每参考流不再除；不得对物理输出量应用通用资源目标份额。本输出规则优先于通用资源归属。单独未分配wholepool保留完整输入及全部输出，仅指定一步归属。

- 选定流：实际可用的重复使用设备和织物外部转移
- 流属性/单位：Mass / kg
- 数量规则：归属前台账保留完整未归一化真实原生物理输出。目标已归属LCI中独立输出仅审计。仅真实PCR专属决定保留的真实联合输出，以所选实际物理量除相同正画像N_target一次，已每参考流不再除。不套资源targetshare；physical_product_output_quantity优先。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_offsite_fates`
- 来源：`krisp-current-commissary-event-service`; `box-current-private-dining`; `silverfeast-current-event-route`

范围证据需求：实际组分材料状态、先前负担责任、接收者、原生量及去向。 不给通用每餐因子、配方、收率、温度、寿命或零值默认。

#### offsite_recovered_fluid

责任节点与原流角色：offsite_preparation_dispatch / outputs / product

仅准确物种、实际独立回收并被接收者接受的旧状态可用流体；不同于未用供应退货和收容废物。不能减去原生制造或自动给予信用。 原始ALL-OUTPUT台账保留未归一化的真实完整原生量，不乘targetshare，也不是每参考流量。目标已归属LCI中独立其他餐或产品仅审计，不是共同产品交换。若实际有记录的PCR专属决定保留真实联合产品最终交换，则以所选真实物理输出量除相同正画像N_target一次，已每参考流不再除；不得对物理输出量应用通用资源目标份额。本输出规则优先于通用资源归属。单独未分配wholepool保留完整输入及全部输出，仅指定一步归属。

- 选定流：实际可用回收设备流体出口
- 流属性/单位：Mass / kg
- 数量规则：归属前台账保留完整未归一化真实原生物理输出。目标已归属LCI中独立输出仅审计。仅真实PCR专属决定保留的真实联合输出，以所选实际物理量除相同正画像N_target一次，已每参考流不再除。不套资源targetshare；physical_product_output_quantity优先。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_offsite_fates`
- 来源：`krisp-current-commissary-event-service`; `box-current-private-dining`; `silverfeast-current-event-route`

范围证据需求：回收工单、物种、质量、留存状态、接收质量及全部内含去向。 不给通用每餐因子、配方、收率、温度、寿命或零值默认。

#### offsite_other_meals

责任节点与原流角色：offsite_preparation_dispatch / outputs / product

各真实独立的其他菜单、服务版本和接收者输出，须有自己的身份、实际供给交接点、时间来源和撤销后原生Count。内部组分与返回不作最终服务。其他真实食品货物用useful_food；独立非餐产品应展开其真实属性和单位，不强制Count，不从共享驱动量中删去。 这是完整归属前全运营证据，不自动成为目标已归属LCI的联产品。实际物理输出不乘目标份额；独立细分与真实联合产出依allocation_projection。 原始ALL-OUTPUT台账保留未归一化的真实完整原生量，不乘targetshare，也不是每参考流量。目标已归属LCI中独立其他餐或产品仅审计，不是共同产品交换。若实际有记录的PCR专属决定保留真实联合产品最终交换，则以所选真实物理输出量除相同正画像N_target一次，已每参考流不再除；不得对物理输出量应用通用资源目标份额。本输出规则优先于通用资源归属。单独未分配wholepool保留完整输入及全部输出，仅指定一步归属。

- 选定流：实际其他独立供出的膳食服务餐次
- 流属性/单位：Count / Item(s)
- 数量规则：归属前台账保留完整未归一化真实原生物理输出。目标已归属LCI中独立输出仅审计。仅真实PCR专属决定保留的真实联合输出，以所选实际物理量除相同正画像N_target一次，已每参考流不再除。不套资源targetshare；physical_product_output_quantity优先。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_offsite_outputs`
- 来源：`krisp-current-commissary-event-service`; `box-current-private-dining`; `silverfeast-current-event-route`

范围证据需求：全部预期输出台账，包括其他客户任务、员工支持责任、部分输出及相容原生数量状态交接。 不给通用每餐因子、配方、收率、温度、寿命或零值默认。

#### offsite_prep_waste

责任节点与原流角色：offsite_preparation_dispatch / outputs / waste

按实际材料及接收处理分别展开修整物、皮骨、溢洒、不合格与烹饪残余。返工、在制品留存、可用退回不同于废弃。

- 选定流：实际制备、烹饪、搬运与运输食品残余废物
- 流属性/单位：Mass / kg
- 数量规则：按 cp_offsite_food 采集的实际互斥目标责任原生数量 / 正的同画像 N_target，仅一次；已为每参考流的记录不再变更；N_target=0 保留责任但不除零。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_offsite_food`
- 来源：`krisp-current-commissary-event-service`; `box-current-private-dining`; `silverfeast-current-event-route`

范围证据需求：来源批次、原生湿干组成、真实路径与接收者。 不给通用每餐因子、配方、收率、温度、寿命或零值默认。

#### offsite_pack_waste

责任节点与原流角色：offsite_preparation_dispatch / outputs / waste

各真实材料、食品残留和接收状态分别处理。完整收容载荷和包装或组分审计不可加和；可重复物清洗和返还不是一次性废弃。

本卡为独立身份分支`offsite_pack_waste_paper_pack`; `offsite_pack_waste_metal_pack`之外的余项清单要求。已计入分支的实际数量不再计入本余项交换，原类目总量仅作不可相加的协调审计。其他实际材料、状态、来源或介质仍须保留自身经核实的身份、原生数量及供应接收责任；记录缺失时，不推定条件分支发生、不发生或数量为零。

- 选定流：实际独立食品与供餐包装废物
- 流属性/单位：Mass / kg
- 数量规则：按 cp_offsite_fates 采集的实际互斥目标责任原生数量 / 正的同画像 N_target，仅一次；已为每参考流的记录不再变更；N_target=0 保留责任但不除零。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_offsite_fates`
- 来源：`krisp-current-commissary-event-service`; `box-current-private-dining`; `silverfeast-current-event-route`

范围证据需求：实际拆包、污染状态、扣除真实皮重后的称量及接收者。 不给通用每餐因子、配方、收率、温度、寿命或零值默认。

#### offsite_cleaning_solids

责任节点与原流角色：offsite_preparation_dispatch / outputs / waste

真正混合物整体和基材、食品、脂肪、化学物、流体内含审计不可加和。独立物种材料或不同去向应展开，不可全部合并。

- 选定流：实际使用后的抹布、过滤物、吸附物与捕集固体
- 流属性/单位：Mass / kg
- 数量规则：按 cp_offsite_fates 采集的实际互斥目标责任原生数量 / 正的同画像 N_target，仅一次；已为每参考流的记录不再变更；N_target=0 保留责任但不除零。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_offsite_fates`
- 来源：`krisp-current-commissary-event-service`; `box-current-private-dining`; `silverfeast-current-event-route`

范围证据需求：实际基材、捕集来源及测得原生质量、组分和接收者。 不给通用每餐因子、配方、收率、温度、寿命或零值默认。

#### offsite_asset_waste

责任节点与原流角色：offsite_preparation_dispatch / outputs / waste

实际完整保有内含物的资产出口，或实际拆出的部件出口；整体与部件不得重复相加。出厂流体和留存内容保留为不可加和的内容审计。

- 选定流：实际废弃设备、容器、用具、织物及部件
- 流属性/单位：Mass / kg
- 数量规则：按 cp_offsite_fates 采集的实际互斥目标责任原生数量 / 正的同画像 N_target，仅一次；已为每参考流的记录不再变更；N_target=0 保留责任但不除零。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_offsite_fates`
- 来源：`krisp-current-commissary-event-service`; `box-current-private-dining`; `silverfeast-current-event-route`

范围证据需求：真实退役、修理、更换、资产完整责任与接收者。 不给通用每餐因子、配方、收率、温度、寿命或零值默认。

#### offsite_effluent

责任节点与原流角色：offsite_preparation_dispatch / outputs / waste

实际液体、食品、油脂、化学物状态交给下水道、储罐或处理服务商，不是环境水蒸气，也不默认购水差额。真实单独分离油或固体须展开自己的交换。

- 选定流：实际收容的制备、洗涤与清洁废水
- 流属性/单位：Mass / kg
- 数量规则：按 cp_offsite_fates 采集的实际互斥目标责任原生数量 / 正的同画像 N_target，仅一次；已为每参考流的记录不再变更；N_target=0 保留责任但不除零。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_offsite_fates`
- 来源：`krisp-current-commissary-event-service`; `box-current-private-dining`; `silverfeast-current-event-route`

范围证据需求：实际接收交接、组成、存量及处理覆盖和终端水视图。 不给通用每餐因子、配方、收率、温度、寿命或零值默认。

#### offsite_fluid_waste

责任节点与原流角色：offsite_preparation_dispatch / outputs / waste

按准确物种、状态、接收者记录真实收集废物；区分直接空气排放或可用回收出口。完整设备留存充注仅为不可加和内含物。

- 选定流：实际收容的制冷剂或传热流体废物
- 流属性/单位：Mass / kg
- 数量规则：按 cp_offsite_fates 采集的实际互斥目标责任原生数量 / 正的同画像 N_target，仅一次；已为每参考流的记录不再变更；N_target=0 保留责任但不除零。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_offsite_fates`
- 来源：`krisp-current-commissary-event-service`; `box-current-private-dining`; `silverfeast-current-event-route`

范围证据需求：维修回收、库存、完整设备及最终接收证据。 不给通用每餐因子、配方、收率、温度、寿命或零值默认。

#### offsite_species

责任节点与原流角色：offsite_preparation_dispatch / outputs / elementary

按每个真实污染物、物种、粒径、基准及接收介质展开，包括有证据且未被服务商覆盖的自营运输、烹饪、清洁、制冷剂排放。排除水蒸气行防重复。收容废物不是直接排放；异味或补充量既不能证明释放，也不能证明为零。

本卡为独立身份分支`offsite_species_co2_fossil_air`; `offsite_species_methane_fossil_air`; `offsite_species_nitrous_oxide_air`之外的余项清单要求。已计入分支的实际数量不再计入本余项交换，原类目总量仅作不可相加的协调审计。其他实际材料、状态、来源或介质仍须保留自身经核实的身份、原生数量及供应接收责任；记录缺失时，不推定条件分支发生、不发生或数量为零。

- 选定流：实际各准确物种的环境排放
- 流属性/单位：Mass / kg
- 数量规则：按 cp_offsite_environment 采集的实际互斥目标责任原生数量 / 正的同画像 N_target，仅一次；已为每参考流的记录不再变更；N_target=0 保留责任但不除零。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_offsite_environment`
- 来源：`krisp-current-commissary-event-service`; `box-current-private-dining`; `silverfeast-current-event-route`

范围证据需求：实际测量或相容有证据的因子、活动、去向，每个操作数来源以及准确物种介质。 不给通用每餐因子、配方、收率、温度、寿命或零值默认。

#### site_ingredients

责任节点与原流角色：onsite_finish_service / inputs / product

按实际物种、材料、配方、批次和供货状态展开；保留实际水分、骨皮及真实制备损失。外购已制备组分保留完整上游食品与制备范围。食品不与包装皮重合并。 仅真实额外外购独立食品原料；site_prepared_receipt已覆盖的同一组分阶段排除。内部接收或旧状态返回进入库存仅来源关联，不再新增上游制造。

- 选定流：实际各类食品、饮品与配方原料
- 流属性/单位：Mass / kg
- 数量规则：按 cp_site_food 采集的实际互斥目标责任原生数量 / 正的同画像 N_target，仅一次；已为每参考流的记录不再变更；N_target=0 保留责任但不除零。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_site_food`
- 来源：`krisp-current-commissary-event-service`; `box-current-private-dining`; `silverfeast-current-event-route`

范围证据需求：实际收发存、供应批次状态、配方投料及食品去向。 不给通用每餐因子、配方、收率、温度、寿命或零值默认。

#### site_recipe_water

责任节点与原流角色：onsite_finish_service / inputs / product

仅记录真实进入膳食组成的水和冰，采集相态及实际融化、留存。清洗运行水单列，不再计为配方输入。

本卡为独立身份分支`site_recipe_water_liquid_tap`之外的余项清单要求。已计入分支的实际数量不再计入本余项交换，原类目总量仅作不可相加的协调审计。其他实际材料、状态、来源或介质仍须保留自身经核实的身份、原生数量及供应接收责任；记录缺失时，不推定条件分支发生、不发生或数量为零。

- 选定流：实际配方添加水与冰
- 流属性/单位：Mass / kg
- 数量规则：按 cp_site_food 采集的实际互斥目标责任原生数量 / 正的同画像 N_target，仅一次；已为每参考流的记录不再变更；N_target=0 保留责任但不除零。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_site_food`
- 来源：`krisp-current-commissary-event-service`; `box-current-private-dining`; `silverfeast-current-event-route`

范围证据需求：实际批次添加量和相容冰液质量基准。 不给通用每餐因子、配方、收率、温度、寿命或零值默认。

#### site_operating_water

责任节点与原流角色：onsite_finish_service / inputs / product

记录购入清洗、洗碗、卫生、保温与清洁用水，不默认等于废水或水蒸气。直接环境取水有独立基本流。

本卡为独立身份分支`site_operating_water_liquid_tap`之外的余项清单要求。已计入分支的实际数量不再计入本余项交换，原类目总量仅作不可相加的协调审计。其他实际材料、状态、来源或介质仍须保留自身经核实的身份、原生数量及供应接收责任；记录缺失时，不推定条件分支发生、不发生或数量为零。

- 选定流：实际购入的制备、清洗与设备用水
- 流属性/单位：Volume / m3
- 数量规则：按 cp_site_utilities 采集的实际互斥目标责任原生数量 / 正的同画像 N_target，仅一次；已为每参考流的记录不再变更；N_target=0 保留责任但不除零。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_site_utilities`
- 来源：`krisp-current-commissary-event-service`; `box-current-private-dining`; `silverfeast-current-event-route`

范围证据需求：供应商、表计边界及实际用途、库存、接收状态。 不给通用每餐因子、配方、收率、温度、寿命或零值默认。

#### site_electricity

责任节点与原流角色：onsite_finish_service / inputs / product

仅归入本节点的真实用电及必要待机。场外节点可含真实自营冷链或车辆充电，但不得重复完整供应商已覆盖用电；现场临时厨房和场地电力同样仅计一次。

本卡为独立身份分支`site_electricity_ac`之外的余项清单要求。已计入分支的实际数量不再计入本余项交换，原类目总量仅作不可相加的协调审计。其他实际材料、状态、来源或介质仍须保留自身经核实的身份、原生数量及供应接收责任；记录缺失时，不推定条件分支发生、不发生或数量为零。

- 选定流：实际厨房、运输、保温、完成加工与清洁用电
- 流属性/单位：Energy / kWh
- 数量规则：按 cp_site_utilities 采集的实际互斥目标责任原生数量 / 正的同画像 N_target，仅一次；已为每参考流的记录不再变更；N_target=0 保留责任但不除零。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_site_utilities`
- 来源：`krisp-current-commissary-event-service`; `box-current-private-dining`; `silverfeast-current-event-route`

范围证据需求：实际表计或充电时段、覆盖边界、全部使用者及闲置分配。 不给通用每餐因子、配方、收率、温度、寿命或零值默认。

#### site_fuel

责任节点与原流角色：onsite_finish_service / inputs / product

按实际燃料载体、等级、状态及用途展开。供应库存与燃烧量不同；完整运输或供应商已覆盖燃料不重复。不从服务名称推定炉具、车辆或发电机。

- 选定流：实际各类烹饪、运输与设备燃料供应
- 流属性/单位：Mass / kg
- 数量规则：按 cp_site_utilities 采集的实际互斥目标责任原生数量 / 正的同画像 N_target，仅一次；已为每参考流的记录不再变更；N_target=0 保留责任但不除零。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_site_utilities`
- 来源：`krisp-current-commissary-event-service`; `box-current-private-dining`; `silverfeast-current-event-route`

范围证据需求：期初、净收货、期末、配对未用退货，以及独立支持的消耗和排放证据。 不给通用每餐因子、配方、收率、温度、寿命或零值默认。

#### site_thermal

责任节点与原流角色：onsite_finish_service / inputs / product

仅计实际已交付且状态和交接点明确的有用热冷服务，不重复供应商燃料、装置和损失；普通烹饪不意味着独立能源厂。

本卡为独立身份分支`site_thermal_delivered_heat`之外的余项清单要求。已计入分支的实际数量不再计入本余项交换，原类目总量仅作不可相加的协调审计。其他实际材料、状态、来源或介质仍须保留自身经核实的身份、原生数量及供应接收责任；记录缺失时，不推定条件分支发生、不发生或数量为零。

- 选定流：实际外购有用供热或供冷服务
- 流属性/单位：Energy / MJ
- 数量规则：按 cp_site_utilities 采集的实际互斥目标责任原生数量 / 正的同画像 N_target，仅一次；已为每参考流的记录不再变更；N_target=0 保留责任但不除零。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_site_utilities`
- 来源：`krisp-current-commissary-event-service`; `box-current-private-dining`; `silverfeast-current-event-route`

范围证据需求：实交热量、原生单位、温度或服务状态及完整供应商边界。 不给通用每餐因子、配方、收率、温度、寿命或零值默认。

#### site_cleaning_materials

责任节点与原流角色：onsite_finish_service / inputs / product

各实际清洁剂、消毒剂、抹布、吸附材料、助剂按材料配方及库存分别采集。仅匹配的未用退货可净扣，使用后的脏物返回不能如此处理。

本卡为独立身份分支`site_cleaning_materials_synthetic_detergent`之外的余项清单要求。已计入分支的实际数量不再计入本余项交换，原类目总量仅作不可相加的协调审计。其他实际材料、状态、来源或介质仍须保留自身经核实的身份、原生数量及供应接收责任；记录缺失时，不推定条件分支发生、不发生或数量为零。

- 选定流：实际独立清洗、消毒与支持材料
- 流属性/单位：Mass / kg
- 数量规则：按 cp_site_materials 采集的实际互斥目标责任原生数量 / 正的同画像 N_target，仅一次；已为每参考流的记录不再变更；N_target=0 保留责任但不除零。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_site_materials`
- 来源：`krisp-current-commissary-event-service`; `box-current-private-dining`; `silverfeast-current-event-route`

范围证据需求：实际收货、库存、稀释、组成、用途和去向。 不给通用每餐因子、配方、收率、温度、寿命或零值默认。

#### site_packaging

责任节点与原流角色：onsite_finish_service / inputs / product

包装前食品状态和包装后的保护状态通过实际容器、盖、衬层、标签及接触或保温角色连接。一次性消耗、拒收与废弃不同于可重复物品全寿命和返回；配送不等于包装活动。

- 选定流：实际独立一次性食品保护与供餐包装
- 流属性/单位：Mass / kg
- 数量规则：按 cp_site_materials 采集的实际互斥目标责任原生数量 / 正的同画像 N_target，仅一次；已为每参考流的记录不再变更；N_target=0 保留责任但不除零。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_site_materials`
- 来源：`krisp-current-commissary-event-service`; `box-current-private-dining`; `silverfeast-current-event-route`

范围证据需求：实际包装材料、尺寸、件数、质量、EACH或TOTAL、食品接触状态及重复使用和终端记录。 不给通用每餐因子、配方、收率、温度、寿命或零值默认。

#### site_asset_life

责任节点与原流角色：onsite_finish_service / inputs / product

仅在真实可计数且相容的资产服务案例采用Count。覆盖建筑、场地、装修、厨房、制冷、车辆、临时烤箱、保温箱、洗涤及信息设备的制造、安装、维护、更换、终结。土地使用原生面积和时间，不转换为Count；未被完整覆盖的真实土地接口须单列展开。

- 选定流：实际场地、厨房、运输与设备完整寿命服务
- 流属性/单位：Count / Item(s)
- 数量规则：按 cp_site_assets 采集的实际互斥目标责任原生数量 / 正的同画像 N_target，仅一次；已为每参考流的记录不再变更；N_target=0 保留责任但不除零。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_site_assets`
- 来源：`krisp-current-commissary-event-service`; `box-current-private-dining`; `silverfeast-current-event-route`

范围证据需求：实际资产、覆盖边界、所有使用者的已观察使用加有来源且相容的剩余使用，或真实终止，以及原生驱动量。 不给通用每餐因子、配方、收率、温度、寿命或零值默认。

#### site_reusables_life

责任节点与原流角色：onsite_finish_service / inputs / product

各真实可计数物品服务须包含制造、适用安装、维护、更换和终结，并覆盖全部使用者寿命。脏物返回是旧状态转移，不是新制造或自动负信用。洗涤与服务商覆盖互斥。

- 选定流：实际可重复容器、餐具、用具与织物的完整寿命
- 流属性/单位：Count / Item(s)
- 数量规则：按 cp_site_assets 采集的实际互斥目标责任原生数量 / 正的同画像 N_target，仅一次；已为每参考流的记录不再变更；N_target=0 保留责任但不除零。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_site_assets`
- 来源：`krisp-current-commissary-event-service`; `box-current-private-dining`; `silverfeast-current-event-route`

范围证据需求：实际物品材料、已观察及有来源的剩余循环或真实终止总量、清洗和退役覆盖。 不给通用每餐因子、配方、收率、温度、寿命或零值默认。

#### site_provider

责任节点与原流角色：onsite_finish_service / inputs / product

仅真正已完成且相容的计数服务采用Item(s)。使用完整物理覆盖，或已实际完成的互斥缺失阶段补充。服务商若采用原生质量、能量、距离或时间单位，须展开相应已验证属性单位，不强制Count。通用发票或外包名称不能吞并厨房、运输、洗涤或资产责任。

- 选定流：实际完整的补充物理服务
- 流属性/单位：Count / Item(s)
- 数量规则：按 cp_site_providers 采集的实际互斥目标责任原生数量 / 正的同画像 N_target，仅一次；已为每参考流的记录不再变更；N_target=0 保留责任但不除零。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_site_providers`
- 来源：`krisp-current-commissary-event-service`; `box-current-private-dining`; `silverfeast-current-event-route`

范围证据需求：阶段责任人、已覆盖及排除组分矩阵、实际完成数量和服务数据链接。 不给通用每餐因子、配方、收率、温度、寿命或零值默认。

#### site_freight

责任节点与原流角色：onsite_finish_service / inputs / product

逐实载或返程货物和运输段，保留食品、冰、包装、容器、支撑物、设备的完整湿载荷。场外节点默认负责往返接口，除非现场有明确不重叠范围。完整承运覆盖或互斥自营车队能源、资产、物种排放和接收责任，不能两者重复。

- 选定流：实际唯一食品、设备、物料与接收运输
- 流属性/单位：Mass * Length / t*km
- 数量规则：按 cp_site_freight 采集的实际互斥目标责任原生数量 / 正的同画像 N_target，仅一次；已为每参考流的记录不再变更；N_target=0 保留责任但不除零。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_site_freight`
- 来源：`krisp-current-commissary-event-service`; `box-current-private-dining`; `silverfeast-current-event-route`

范围证据需求：实际湿载荷、距离、EACH或TOTAL重复次数、记录自身份额置于求和内部及相同最终N仅除一次。 不给通用每餐因子、配方、收率、温度、寿命或零值默认。

#### site_fluid_supply

责任节点与原流角色：onsite_finish_service / inputs / product

按真实独立材料、物种、等级采集补充或新独立库存。全新设备的出厂内含充注若不在独立期初库存中，属于设备内容，不能再作新独立流体。储存、安装和回收角色互斥。

- 选定流：实际独立运行制冷剂与传热流体供应
- 流属性/单位：Mass / kg
- 数量规则：按 cp_site_materials 采集的实际互斥目标责任原生数量 / 正的同画像 N_target，仅一次；已为每参考流的记录不再变更；N_target=0 保留责任但不除零。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_site_materials`
- 来源：`krisp-current-commissary-event-service`; `box-current-private-dining`; `silverfeast-current-event-route`

范围证据需求：准确物种、库存、设备维修、未用退回、留存充注及全部去向。 不给通用每餐因子、配方、收率、温度、寿命或零值默认。

#### site_withdrawal

责任节点与原流角色：onsite_finish_service / inputs / elementary

仅实际直接环境来源与介质。外购供水不得再次作为环境资源取水；不同水源独立展开。

- 选定流：实际按水源区分的直接取水
- 流属性/单位：Volume / m3
- 数量规则：按 cp_site_environment 采集的实际互斥目标责任原生数量 / 正的同画像 N_target，仅一次；已为每参考流的记录不再变更；N_target=0 保留责任但不除零。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_site_environment`
- 来源：`krisp-current-commissary-event-service`; `box-current-private-dining`; `silverfeast-current-event-route`

范围证据需求：实际水源、许可、表计、事件、地理与源介质身份。 不给通用每餐因子、配方、收率、温度、寿命或零值默认。

#### site_unused_return

责任节点与原流角色：onsite_finish_service / outputs / product

仅真正未使用且交给实际接收者的供应物，匹配原材料状态与库存池。采用总额S输入并列UNUSED输出，或采用S-UNUSED净输入并省略输出，不能混用。使用后的物品或流体不属于未用。

- 选定流：实际匹配的未用食品和物料外部退货
- 流属性/单位：Mass / kg
- 数量规则：按 cp_site_fates 采集的实际互斥目标责任原生数量 / 正的同画像 N_target，仅一次；已为每参考流的记录不再变更；N_target=0 保留责任但不除零。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_site_fates`
- 来源：`krisp-current-commissary-event-service`; `box-current-private-dining`; `silverfeast-current-event-route`

范围证据需求：原收货、库存、退货原生质量状态、接收者、时间和选定记账惯例。 不给通用每餐因子、配方、收率、温度、寿命或零值默认。

#### site_useful_food

责任节点与原流角色：onsite_finish_service / outputs / product

按真实可接受、合法可用的产品、捐赠或再部署边界出口记录实际组成状态、接收者和原生数量。这不是目标膳食服务，也不自动成为废物或替代信用。内部食品返程采用独立配对转移。 原始ALL-OUTPUT台账保留未归一化的真实完整原生量，不乘targetshare，也不是每参考流量。目标已归属LCI中独立其他餐或产品仅审计，不是共同产品交换。若实际有记录的PCR专属决定保留真实联合产品最终交换，则以所选真实物理输出量除相同正画像N_target一次，已每参考流不再除；不得对物理输出量应用通用资源目标份额。本输出规则优先于通用资源归属。单独未分配wholepool保留完整输入及全部输出，仅指定一步归属。

- 选定流：实际已接收的可用制备食品外部交接
- 流属性/单位：Mass / kg
- 数量规则：归属前台账保留完整未归一化真实原生物理输出。目标已归属LCI中独立输出仅审计。仅真实PCR专属决定保留的真实联合输出，以所选实际物理量除相同正画像N_target一次，已每参考流不再除。不套资源targetshare；physical_product_output_quantity优先。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_site_food`
- 来源：`krisp-current-commissary-event-service`; `box-current-private-dining`; `silverfeast-current-event-route`

范围证据需求：实际处置、接收者、交接、质量、数量状态及负担责任。 不给通用每餐因子、配方、收率、温度、寿命或零值默认。

#### site_usable_reusables

责任节点与原流角色：onsite_finish_service / outputs / product

实际保有可用性的旧状态资产或材料出口，不自动形成避免新制造。内部脏物返回单列配对；供应商已覆盖的可重复物品寿命不重复。 原始ALL-OUTPUT台账保留未归一化的真实完整原生量，不乘targetshare，也不是每参考流量。目标已归属LCI中独立其他餐或产品仅审计，不是共同产品交换。若实际有记录的PCR专属决定保留真实联合产品最终交换，则以所选真实物理输出量除相同正画像N_target一次，已每参考流不再除；不得对物理输出量应用通用资源目标份额。本输出规则优先于通用资源归属。单独未分配wholepool保留完整输入及全部输出，仅指定一步归属。

- 选定流：实际可用的重复使用设备和织物外部转移
- 流属性/单位：Mass / kg
- 数量规则：归属前台账保留完整未归一化真实原生物理输出。目标已归属LCI中独立输出仅审计。仅真实PCR专属决定保留的真实联合输出，以所选实际物理量除相同正画像N_target一次，已每参考流不再除。不套资源targetshare；physical_product_output_quantity优先。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_site_fates`
- 来源：`krisp-current-commissary-event-service`; `box-current-private-dining`; `silverfeast-current-event-route`

范围证据需求：实际组分材料状态、先前负担责任、接收者、原生量及去向。 不给通用每餐因子、配方、收率、温度、寿命或零值默认。

#### site_recovered_fluid

责任节点与原流角色：onsite_finish_service / outputs / product

仅准确物种、实际独立回收并被接收者接受的旧状态可用流体；不同于未用供应退货和收容废物。不能减去原生制造或自动给予信用。 原始ALL-OUTPUT台账保留未归一化的真实完整原生量，不乘targetshare，也不是每参考流量。目标已归属LCI中独立其他餐或产品仅审计，不是共同产品交换。若实际有记录的PCR专属决定保留真实联合产品最终交换，则以所选真实物理输出量除相同正画像N_target一次，已每参考流不再除；不得对物理输出量应用通用资源目标份额。本输出规则优先于通用资源归属。单独未分配wholepool保留完整输入及全部输出，仅指定一步归属。

- 选定流：实际可用回收设备流体出口
- 流属性/单位：Mass / kg
- 数量规则：归属前台账保留完整未归一化真实原生物理输出。目标已归属LCI中独立输出仅审计。仅真实PCR专属决定保留的真实联合输出，以所选实际物理量除相同正画像N_target一次，已每参考流不再除。不套资源targetshare；physical_product_output_quantity优先。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_site_fates`
- 来源：`krisp-current-commissary-event-service`; `box-current-private-dining`; `silverfeast-current-event-route`

范围证据需求：回收工单、物种、质量、留存状态、接收质量及全部内含去向。 不给通用每餐因子、配方、收率、温度、寿命或零值默认。

#### site_returned_food

责任节点与原流角色：onsite_finish_service / outputs / product

仅真实接受、仍可用并在同一系统内有记录再使用或再部署的旧状态食品。保留存储、在制品和负担责任；变质、不安全或废弃食品是废物。返程回路不形成新购原料或额外最终膳食。

- 选定流：实际返回场外厨房的可用未供食品
- 流属性/单位：Mass / kg
- 数量规则：按 cp_site_handoff 采集的实际互斥目标责任原生数量 / 正的同画像 N_target，仅一次；已为每参考流的记录不再变更；N_target=0 保留责任但不除零。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_site_handoff`
- 来源：`krisp-current-commissary-event-service`; `box-current-private-dining`; `silverfeast-current-event-route`

范围证据需求：配对食品批次、状态数量、责任人、来源接收时间及实际再用或终端去向。 不给通用每餐因子、配方、收率、温度、寿命或零值默认。

#### site_dirty_return

责任节点与原流角色：onsite_finish_service / outputs / product

真实脏容器、餐具、用具、织物转移，含实际留存食品和水。转移既有物品至场外洗涤，不代表制造或新增寿命。返回前已去除食品仍有其真实废物行。

- 选定流：实际返回场外洗涤的已用可重复物品
- 流属性/单位：Mass / kg
- 数量规则：按 cp_site_handoff 采集的实际互斥目标责任原生数量 / 正的同画像 N_target，仅一次；已为每参考流的记录不再变更；N_target=0 保留责任但不除零。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_site_handoff`
- 来源：`krisp-current-commissary-event-service`; `box-current-private-dining`; `silverfeast-current-event-route`

范围证据需求：实际件数、湿质量、干基材及留存组分，配对接收者与洗涤责任。 不给通用每餐因子、配方、收率、温度、寿命或零值默认。

#### site_other_meals

责任节点与原流角色：onsite_finish_service / outputs / product

各真实独立的其他菜单、服务版本和接收者输出，须有自己的身份、实际供给交接点、时间来源和撤销后原生Count。内部组分与返回不作最终服务。其他真实食品货物用useful_food；独立非餐产品应展开其真实属性和单位，不强制Count，不从共享驱动量中删去。 这是完整归属前全运营证据，不自动成为目标已归属LCI的联产品。实际物理输出不乘目标份额；独立细分与真实联合产出依allocation_projection。 原始ALL-OUTPUT台账保留未归一化的真实完整原生量，不乘targetshare，也不是每参考流量。目标已归属LCI中独立其他餐或产品仅审计，不是共同产品交换。若实际有记录的PCR专属决定保留真实联合产品最终交换，则以所选真实物理输出量除相同正画像N_target一次，已每参考流不再除；不得对物理输出量应用通用资源目标份额。本输出规则优先于通用资源归属。单独未分配wholepool保留完整输入及全部输出，仅指定一步归属。

- 选定流：实际其他独立供出的膳食服务餐次
- 流属性/单位：Count / Item(s)
- 数量规则：归属前台账保留完整未归一化真实原生物理输出。目标已归属LCI中独立输出仅审计。仅真实PCR专属决定保留的真实联合输出，以所选实际物理量除相同正画像N_target一次，已每参考流不再除。不套资源targetshare；physical_product_output_quantity优先。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_site_outputs`
- 来源：`krisp-current-commissary-event-service`; `box-current-private-dining`; `silverfeast-current-event-route`

范围证据需求：全部预期输出台账，包括其他客户任务、员工支持责任、部分输出及相容原生数量状态交接。 不给通用每餐因子、配方、收率、温度、寿命或零值默认。

#### site_prep_waste

责任节点与原流角色：onsite_finish_service / outputs / waste

按实际材料及接收处理分别展开修整物、皮骨、溢洒、不合格与烹饪残余。返工、在制品留存、可用退回不同于废弃。

- 选定流：实际制备、烹饪、搬运与运输食品残余废物
- 流属性/单位：Mass / kg
- 数量规则：按 cp_site_food 采集的实际互斥目标责任原生数量 / 正的同画像 N_target，仅一次；已为每参考流的记录不再变更；N_target=0 保留责任但不除零。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_site_food`
- 来源：`krisp-current-commissary-event-service`; `box-current-private-dining`; `silverfeast-current-event-route`

范围证据需求：来源批次、原生湿干组成、真实路径与接收者。 不给通用每餐因子、配方、收率、温度、寿命或零值默认。

#### site_pack_waste

责任节点与原流角色：onsite_finish_service / outputs / waste

各真实材料、食品残留和接收状态分别处理。完整收容载荷和包装或组分审计不可加和；可重复物清洗和返还不是一次性废弃。

本卡为独立身份分支`site_pack_waste_paper_pack`; `site_pack_waste_metal_pack`之外的余项清单要求。已计入分支的实际数量不再计入本余项交换，原类目总量仅作不可相加的协调审计。其他实际材料、状态、来源或介质仍须保留自身经核实的身份、原生数量及供应接收责任；记录缺失时，不推定条件分支发生、不发生或数量为零。

- 选定流：实际独立食品与供餐包装废物
- 流属性/单位：Mass / kg
- 数量规则：按 cp_site_fates 采集的实际互斥目标责任原生数量 / 正的同画像 N_target，仅一次；已为每参考流的记录不再变更；N_target=0 保留责任但不除零。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_site_fates`
- 来源：`krisp-current-commissary-event-service`; `box-current-private-dining`; `silverfeast-current-event-route`

范围证据需求：实际拆包、污染状态、扣除真实皮重后的称量及接收者。 不给通用每餐因子、配方、收率、温度、寿命或零值默认。

#### site_cleaning_solids

责任节点与原流角色：onsite_finish_service / outputs / waste

真正混合物整体和基材、食品、脂肪、化学物、流体内含审计不可加和。独立物种材料或不同去向应展开，不可全部合并。

- 选定流：实际使用后的抹布、过滤物、吸附物与捕集固体
- 流属性/单位：Mass / kg
- 数量规则：按 cp_site_fates 采集的实际互斥目标责任原生数量 / 正的同画像 N_target，仅一次；已为每参考流的记录不再变更；N_target=0 保留责任但不除零。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_site_fates`
- 来源：`krisp-current-commissary-event-service`; `box-current-private-dining`; `silverfeast-current-event-route`

范围证据需求：实际基材、捕集来源及测得原生质量、组分和接收者。 不给通用每餐因子、配方、收率、温度、寿命或零值默认。

#### site_asset_waste

责任节点与原流角色：onsite_finish_service / outputs / waste

实际完整保有内含物的资产出口，或实际拆出的部件出口；整体与部件不得重复相加。出厂流体和留存内容保留为不可加和的内容审计。

- 选定流：实际废弃设备、容器、用具、织物及部件
- 流属性/单位：Mass / kg
- 数量规则：按 cp_site_fates 采集的实际互斥目标责任原生数量 / 正的同画像 N_target，仅一次；已为每参考流的记录不再变更；N_target=0 保留责任但不除零。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_site_fates`
- 来源：`krisp-current-commissary-event-service`; `box-current-private-dining`; `silverfeast-current-event-route`

范围证据需求：真实退役、修理、更换、资产完整责任与接收者。 不给通用每餐因子、配方、收率、温度、寿命或零值默认。

#### site_effluent

责任节点与原流角色：onsite_finish_service / outputs / waste

实际液体、食品、油脂、化学物状态交给下水道、储罐或处理服务商，不是环境水蒸气，也不默认购水差额。真实单独分离油或固体须展开自己的交换。

- 选定流：实际收容的制备、洗涤与清洁废水
- 流属性/单位：Mass / kg
- 数量规则：按 cp_site_fates 采集的实际互斥目标责任原生数量 / 正的同画像 N_target，仅一次；已为每参考流的记录不再变更；N_target=0 保留责任但不除零。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_site_fates`
- 来源：`krisp-current-commissary-event-service`; `box-current-private-dining`; `silverfeast-current-event-route`

范围证据需求：实际接收交接、组成、存量及处理覆盖和终端水视图。 不给通用每餐因子、配方、收率、温度、寿命或零值默认。

#### site_fluid_waste

责任节点与原流角色：onsite_finish_service / outputs / waste

按准确物种、状态、接收者记录真实收集废物；区分直接空气排放或可用回收出口。完整设备留存充注仅为不可加和内含物。

- 选定流：实际收容的制冷剂或传热流体废物
- 流属性/单位：Mass / kg
- 数量规则：按 cp_site_fates 采集的实际互斥目标责任原生数量 / 正的同画像 N_target，仅一次；已为每参考流的记录不再变更；N_target=0 保留责任但不除零。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_site_fates`
- 来源：`krisp-current-commissary-event-service`; `box-current-private-dining`; `silverfeast-current-event-route`

范围证据需求：维修回收、库存、完整设备及最终接收证据。 不给通用每餐因子、配方、收率、温度、寿命或零值默认。

#### site_species

责任节点与原流角色：onsite_finish_service / outputs / elementary

按每个真实污染物、物种、粒径、基准及接收介质展开，包括有证据且未被服务商覆盖的自营运输、烹饪、清洁、制冷剂排放。排除水蒸气行防重复。收容废物不是直接排放；异味或补充量既不能证明释放，也不能证明为零。

本卡为独立身份分支`site_species_co2_fossil_air`; `site_species_methane_fossil_air`; `site_species_nitrous_oxide_air`之外的余项清单要求。已计入分支的实际数量不再计入本余项交换，原类目总量仅作不可相加的协调审计。其他实际材料、状态、来源或介质仍须保留自身经核实的身份、原生数量及供应接收责任；记录缺失时，不推定条件分支发生、不发生或数量为零。

- 选定流：实际各准确物种的环境排放
- 流属性/单位：Mass / kg
- 数量规则：按 cp_site_environment 采集的实际互斥目标责任原生数量 / 正的同画像 N_target，仅一次；已为每参考流的记录不再变更；N_target=0 保留责任但不除零。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_site_environment`
- 来源：`krisp-current-commissary-event-service`; `box-current-private-dining`; `silverfeast-current-event-route`

范围证据需求：实际测量或相容有证据的因子、活动、去向，每个操作数来源以及准确物种介质。 不给通用每餐因子、配方、收率、温度、寿命或零值默认。


## 9. 验证规则

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| validate_gate | actual reference/output | 必须实际完整菜单版本、接收者餐次、份量、交接点及提供供出拒领部分撤销证据。唯一真实已履行同画像N_target，不是合同人数、预订容量或吃下质量。不支持的菜单时长或质量等价禁止。 |  |
| validate_route_modules | 两个真实厨房 | 真实组成输入角色、处理及包装呈现前后状态、材料服务角色、保护食品接收交接点、最终分餐点齐全。批次连续模式、运行换批清洁保温以及拒收返工返回路径完整。不造独立节点，不用通用服务吞新生产。 | krisp-current-commissary-event-service; box-current-private-dining; silverfeast-current-event-route |
| validate_pairs | each internal transfer | 同一选定接收点ID数量状态时间责任接收两侧相符；真实发运差额损失单列，不设内部与最终N固定比。脏物食品水包装载荷不可加和，旧状态返回不作原生信用。 |  |
| validate_outputs_allusers | all intended output/resource pools | 全部实际预期输出交接原生量、全部使用者节点时段及真实归属决定。驱动分母正且完整相容，相同正最终N一次。必要闲置失败关闭取消N0保留已解决来源结转接收，不能抹去或造输出。 |  |
| validate_native_stocks | food supplies fluids assets | 每独立数字操作数有自身unit/basis/method/state/sampletime/source。总额供应加UNUSED输出或净额省略互斥；已用回收、安装储存出厂内含分开；原生湿干百分比密度温度each-total及完整寿命字段相容。 |  |
| validate_transport | freight and ownfleet/provider | 唯一实载运输段采用食品冰包装支撑设备完整湿载荷；只去非货物车辆皮重，重复一次，自身份额在求和内，最终N一次。完整承运或实际自营能源车辆维护物种接收空驶责任仅一次。 |  |
| validate_life_coverage | full physical boundary | 实际全部使用者已观察加有来源相容剩余全寿命，或真实终止；完整资产土地阶段矩阵及已完成缺失阶段整合。待完成计划、目标年度数不闭合边界。厨房场地设备可重复物洗涤接收责任不能用合同名称删掉。 |  |
| validate_fates | food water direct species | 实际原料已制备已供、未供餐盘制备返回返工去向核对；终端水平衡排除内部和重复接收视图，整体与组分不可加和。空气水蒸气为Elementary Mass，收容废水为Waste。物种介质准确，未知残差不作释放或零。 |  |
| validate_identity_and_readiness | final data production | 最终交换前验证真实具体流与支持身份属性单位、状态交接点方向。缺口明确限制使用。候选方法和检查通过不是外部UUID验证或发布就绪；示例数字不是默认因子。 |  |
| validate_projection_stage | 全部投入产出表示方式 | 必须声明projection_variant/allocation_stage、完整归属前全部输出台账以及独立或联合输出判断。完整输出原生量来源交接不乘targetshare。目标已归属LCI不把其他独立证据作交换或联产品；wholepool投影具有全部输入输出且只指定一步分配。内部接收返回不是联产品。 |  |
| validate_input_role_exclusivity | ingredient/internal/returned input cards | 逐项核对source_input_role/internal_external/linked_input_coverage/nativequantity。现场泛称原料排除同一物理已制备接收的数量阶段。内部接收、旧状态食品和可重复物返回不形成第二个外部制造投入，仅真实新增返工洗涤储存一次。 |  |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| validate_product_quantity_precedence | output ledger and real joint exchanges | 原始ALL-OUTPUT台账保留未归一化的真实完整原生量，不乘targetshare，也不是每参考流量。目标已归属LCI中独立其他餐或产品仅审计，不是共同产品交换。若实际有记录的PCR专属决定保留真实联合产品最终交换，则以所选真实物理输出量除相同正画像N_target一次，已每参考流不再除；不得对物理输出量应用通用资源目标份额。本输出规则优先于通用资源归属。单独未分配wholepool保留完整输入及全部输出，仅指定一步归属。 |  |


## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | secondary_dataset；仅真实声明边界及证据完整时可作background_dataset |
| downstream_use | 先形成前景采集包，再投影process与lifecyclemodel；保留真实接收、最终供餐及返程交接和同一最终参考 |
| allowed_use | 物理匹配的目的中性场外制备、运输、现场完成完整分餐餐次，真实相容接收者服务画像及完整互斥物理链 |
| excluded_use | 未验证具体交换，缺真实数据、完整寿命、服务商接收者或N0责任；完整活动或全CPC63391覆盖；仅送达、仅现场、不等价共享食品；默认配方收率营养温度寿命 |
| required_metadata | 实际经营者场所、任务、菜单配方组成份量、服务版本、接收者餐次交接时区；每原生操作数来源；全部输出使用者时段库存转移去向；全寿命完整服务商接收者覆盖 |
| required_quality_disclosure | 实际projection_variant/allocation_stage、归属前全部输出台账、独立或联合判断及一步归属；真实采集校准不确定性等价分配、已完成缺失阶段链接及未解决身份范围来源。职责未分配不得完整链声明 |
| update_trigger | 实际菜单份量交接路线、包装保温洗涤运输、服务商场地资产接收者、寿命身份变化；每个独立扩展路线审查 |


## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| unsd-cpc3-2025 | official_guidance | UNSD Central Product Classification Version3.0 explanatory notes30Jun2025, printed356–358; https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | 官方63391及邻近63310/20/92/93定义排除，仅分类语境，不作物理路线数量证据 |
| krisp-current-commissary-event-service | handbook | Krisp Events, current operator route/menu/services; https://www.krispevents.com/ | 第一方自有厨房制备、运送、现场完成、分餐菜单、人员设备、布置拆除定性证据，不作数字因子 |
| box-current-private-dining | handbook | The Box Events and Catering, current Private Dining; https://theboxeventsandcatering.co.uk/private-dining/ | 第一方厨房制备、运输、现场完成、布置供餐清洁定性证据；示例道数非要求 |
| silverfeast-current-event-route | handbook | Silver Feast Catering, current operator route/run of show; https://silverfeastcatering.ca/ | 第一方组分冷链设备发运、现场烤箱保温箱分餐、供餐清洁、租赁物回收定性证据；时间人数价格非因子 |
| sodexo-central-kitchen-2024 | handbook | Sodexo Indonesia, Introducing Central Kitchen,6Feb2024; https://id.sodexo.com/newsroom/2024/sodexo-central-kitchen | 第一方2024中央厨房同时服务活动和日常员工餐定性语境；标签不定义方法，公告不是实际客户合同数量 |
