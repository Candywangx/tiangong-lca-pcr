---
pcr_id: pcr.stationary-full-waiter-service-meal-occasions
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 固定场所完整侍应供餐场次服务

## 1. 范围与适用性

本PCR仅适用于固定餐厅、咖啡餐饮场所或类似设施现场制备食物及配套饮品，并为坐在餐桌、柜台座位或卡座的顾客提供完整侍应服务。记录实际完整服务及各项包含内容的物理交接；品牌、应用送餐按钮或付款均不足以证明。设座自助或仅柜台服务、无座外带、持续合同或特许食堂、活动餐饮、运输运营商配餐及仅饮品服务不属于本专属路线。移动餐车和船上运营需要各自复核的路线，不属于此固定场所子集。

一个参考单位为一次实际完成且按菜单、组分、配方、份量和服务包版本冻结的等效供餐场次，不自动等于一名食客、一盘菜、一桌、一托盘、发票、订单或食用量。共享菜品或多道套餐保留真实参考对象及完成证据。所有包含的食物、配套饮品和实际服务职责均须到达有记录的物理交接点；在自助取咖啡前结账不能证明咖啡已供应。拒绝可选组分或添餐按真实服务包完成条件判断，不假定零使用或额外虚造参考单位。

一个综合现场供餐节点承担实际食物配方处理、供餐、餐区支持及清洁。独立实际完成的供应商只能替代匹配的物理阶段，不得虚购完整餐饮服务删除厨房。异地中央厨房制备后经运输冷链到场完成、移动餐车船车、仅饮品服务、独立住宿营地组合包及未经审查的工业保藏、能源转换、水处理或洗衣路线不属本方法，需审查扩展。

覆盖所有实际供应及上游损失、配料和预制食品存货、添餐返工去向、水汽脂及其他物种、包装洗碗清洁、场地建筑厨房和重复用品完整寿命以及所有用户期间的实际接收端。最终数据集使用以真实原生证据、实际补全未覆盖阶段及具体交换身份核验为条件。来源仅提供定性路线例子，不猜测通用餐量、营养、配方得率、时间、温度、资产寿命、因子、范围或UUID。

共享场址的其他服务配置是独立产出。完整全用户分母保留其真实原生数量及资源消费，不计入本专属参考流。配送仅在实际合同、物理交接和已完成供应商覆盖要求时纳入。

餐盘剩余不撤销已经物理完成的供餐；实际配料、备料和未供餐损失保留在责任服务分子。食物水分、配料组分水、清洁溶液浓缩活性成分及整机液体是独立不可相加核对视图，不是额外重复购入。重复煎炸油记录实际期初期末内部循环存货，不能每轮当新油投入或自动抵减新制。真实不同配料采购状态必须展开具体交换，不能绑定固定总称UUID。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.stationary-full-waiter-service-meal-occasions |
| classification_refs | CPC 3.0:63310 (narrower) |
| covered_products | 本PCR仅适用于固定餐厅、咖啡餐饮场所或类似设施现场制备食物及配套饮品，并为坐在餐桌、柜台座位或卡座的顾客提供完整侍应服务。记录实际完整服务及各项包含内容的物理交接；品牌、应用送餐按钮或付款均不足以证明。设座自助或仅柜台服务、无座外带、持续合同或特许食堂、活动餐饮、运输运营商配餐及仅饮品服务不属于本专属路线。移动餐车和船上运营需要各自复核的路线，不属于此固定场所子集。 |
| excluded_products | 移动餐饮、异地制备运输到场完成、仅饮品、单纯订单付款或容量、未经证据证明等效的配方份量配置、住宿营地包 |
| representative_product | 实际完成的固定场所完整侍应供餐场次 |
| production_route | 实际收货存货→现场配方备料烹饪或冷制→保温分餐供餐→接受方完整交接及退回洗碗清洁 |
| market_state | 物理供应完成的声明食物相关服务；食物组分数量和资产保持独立原生视图 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 实际完成的固定场所完整侍应供餐场次 |
| How much | 1 Item(s) |
| How well | 一种声明等效菜单组分配方份量服务版本在接受方交接实际供应完成，包含真实配套饮品添餐职责并核对撤回，不通用等同人数盘数 |
| How long or cycle | 实际场次组分批次起止本地时间UTC偏移时区夏令时及历时，连续待备库存报告和完整资产寿命分别保留，不设默认时长 |
| reference_flow_link | full_waiter_meal_service |

| 字段 | 值 |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | 实际完成的固定场所完整侍应供餐场次 |
| Reference flow property | Count `01846770-4cfe-4a25-8ad9-919d8d378345` |
| Reference unit group | Units of items `5beb6eed-33a9-47b8-9ede-1dfe8f679159` |
| Reference unit | Item(s) |
| Required qualifiers |actual_site_operator_stationary_onsite_preparation; actual_menu_component_recipe_portion_version; equivalent_quality_and_service_configuration; actual_recipient_serviceoccasion_handoff_state_time; completed_all_included_food_related_beverage_service_gate; partial_declined_refill_recook_reversal_records; actual_raw_prepared_cooked_held_served_food_stocks_fates; actual_native_wet_dry_water_fat_other_component_basis; all_customer_staff_other_output_period_consumers; necessary_idle_failure_N0_source_carry_resolution; full_alluser_site_building_equipment_reusable_life; provider_direct_exclusive_completed_missing_stages; native_each_operand_unit_basis_method_state_sampletime_source; actual_receiver_species_medium_and_identity_gaps; actual_seated_individual_customer_full_waiter_service |

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| meal_reference | full_waiter_meal_service | Count | Item(s) | 按service_gate核对组分交接、重做和撤回后，统计兼容场次唯一实际完成标识。不得通用等同餐、食客、道数、付款人数或食用质量。 |
| native_food_state | food_ingredients; recipe_water_ice; food fates; recipe_water_ice_liquid_tap | Mass; actual water content | kg 实际状态 | 收货净量仅扣皮重且先于外退；保留生鲜解冻熟制保温供餐及湿干可食骨皮脂溶质状态，不设通用得率。仅同样品纯水湿基w=m_water/m_wet及干基比r=m_water/m_nonwater时可w=r/(1+r)，百分数先换比；含其他挥发物的干燥失重不是水。 |
| native_operand | 全部清单行 | 实际相容属性 | 实际原生单位 | 每个独立操作数自带值、单位、基准、方法、状态、采样时间及来源。EACH单件量乘实际次数一次，TOTAL不变。体积密度温度和能源热值转换须实际匹配取证；积分kWh不再乘小时。 |
| same_reference_once | 全部清单行 | 该行原生属性 | 每 Item(s) 服务 | 按all_user_pool把真实职责归属兼容目标配置后，只除同范围正N_target一次。已按参考单位归一化记录不再除。N_target=0保留来源、池、接受方和解决链，不除零或虚造输出。 |
| fluid_roles | equipment_fluid_supply; fluid fates | Mass | kg 实际流体状态 | 存储、安装及回收角色互斥；回收为内部转移或实际可用废物外部去向。留存回收已在安装存储总量内，不能另算损失或采购。整机内含物不可相加。排放须独立证据，未知差额不是空气释放。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 实际固定餐厅或咖啡餐饮厨房，声明现场配方制备处理和实际完成供餐配置 |
| starting_condition_role | 真实待用运行设施且承担完整资产寿命，既有建筑并非无负担 |
| product_classification_scope | 本PCR仅适用于固定餐厅、咖啡餐饮场所或类似设施现场制备食物及配套饮品，并为坐在餐桌、柜台座位或卡座的顾客提供完整侍应服务。记录实际完整服务及各项包含内容的物理交接；品牌、应用送餐按钮或付款均不足以证明。设座自助或仅柜台服务、无座外带、持续合同或特许食堂、活动餐饮、运输运营商配餐及仅饮品服务不属于本专属路线。移动餐车和船上运营需要各自复核的路线，不属于此固定场所子集。 |
| recursive_input_rule | 不得用递归同一完整餐饮投入替代真实厨房；真实配套供应商仅替代准确覆盖职责；内部转移保持同原生状态数量且一次 |
| upstream_dataset_requirement | 完整实际食品、公用工程、物料、资产、供应商及接收端生产和完整寿命；全链使用前须按来源、原生数量状态时间、责任方及排除范围实际补全缺失阶段一次 |
| disclosure | 披露实际菜单配方份量服务交接、所有用户期间职责、原生食物存货去向及全部资产土地供应商身份和证据缺口 |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| service_gate | onsite_meal_service | 只有实际完成且兼容的供餐才是最终产品。记录全部合同或包含组分、接受方、完成交接、状态时间及偏差；可选拒绝和添餐权按实际包证据处理。订单付款或厨房待出餐本身不足。冷盘和熟制道菜保留真实配方处理状态，不设通用营养份量。 | marriott-manho-service-current; ikea-counter-service-current |
| actual_kitchen_boundary | onsite_meal_service | 食物及配套饮品固液、油脂、调味和配方水冰为真实组成角色；实际配方关联制备熟制保温供餐状态。真实同一厨房承担投入状态转化、分餐交接和清洁，不虚分两节点。实际不合格、返工、留存、可用及废物状态分别关联原批次。 | ivy-kitchen-current; marriott-signature-kitchen-current |
| complete_duties | 全部职责 | 纳入真实上游供应损失、场地建筑装修设备重复用品制造安装维护更换寿命终结及废物接收端。只能完整供应商或独占底层阶段之一；缺失真实阶段须实际补全一次，不能仅留未来计划或披露。移动、中央厨房或独立工业路线需审查扩展。 |  |
| food_fate_boundary | food stocks and fates | 生料预制保温供餐的期初收货期末存货、添餐返工备料未供餐餐盘废物、水汽脂溶质包装及真实接收可用外流保持独立原生记录。整餐组分内含物及服务食用质量视图不可相加；终端平衡排除内部转移、终端使用和接收端重复视图。未知差额不是废物或排放。 |  |
| all_user_pool | 全部共享资源 | 优先直接物理追踪，或逐记录按兼容原始量乘目标驱动除完整正所有消费者驱动后求和。涵盖目标及其他菜单模式顾客职工活动外带和建筑非食物用户及全部期间。必要闲置失败取消未到闭店待备职责先进入责任池再分配。N0保留来源结转接受最终解决，未知责任方阻断完整性。分配总量只除同配置正N_target一次，已归一化不变。 |  |
| full_life_land | asset_lifecycle; reusable_lifecycle; land interfaces | 完整资产供应商场地寿命覆盖所有已观察使用加有来源兼容剩余服务，或实际终结总量及更换维护终结，不用年度N_target、名义容量或虚构年数。土地占用原生面积乘时间及有证据转化前后状态日期面积责任方保留精确物理覆盖链接；供应商资产已覆盖同一土地不重计，缺失实际土地职责在完整使用前补全一次。 |  |
| other_output_native_gate | all intended outputs and useful transfers | 每项目标或其他餐饮非食物输出分别记录自身标识、接受方、交接点、状态、时间、来源及实际other_output_native_quantity和自身原生元数据，全部输出台账不限于餐数食物千克。匹配实际可用食物重复用品液体转移标识、原生转移量和接受记录；整体服务与下属转移核对不可相加。 |  |
| terminal_water_closure | all actual water interfaces | 记录实际水库存期初期末、配对转移及外部终端去向接受标识和原生量。只闭合终端平衡：食物水分配方水、清洁溶液水、用途充注内部转移及期末库存内含水是同一物理来源不可相加视图，不是新增投入外流。独立终端外转水、水汽、废水及期末留存归属保留真实链接原生证据，未知差额不是水汽。 |  |
| empty_duty_complete | freight and actual necessary empty returns | 零kg*km不能传递必要空载车辆职责。采用实际匹配完整承运服务覆盖真实空返调位，或实际整合未覆盖独占车辆运行燃料资产原生职责数量一次，带来源状态时间责任覆盖。必要真实空载资产供应商阶段须实际补全，不得删除或用虚构货载餐次替代。 |  |
| fluid_native_roles | equipment-fluid ledgers | 每充注批次供受配对角色有真实标识及paired_transfer_quantity，其他真实收货保留角色来源及原生other_receipt_quantity，整机外转保留真实内含物退出标识和whole_equipment_retained_content_exit量，与设备安装库存视图不可相加。纳入全部真实非空气去向及独立测量释放，unknown_balance不得作排放或新制造收益。 |  |
| presentation_boundary | onsite_meal_service | 呈现前食物为实际制备熟制保温可即食状态；实际分餐盘装托盘呈现或受保护外带状态到达声明接受交接，保留实际组成份量温度包装状态。可重复盘托盘刀叉杯布草及一次杯盒包材纸巾各有材料重复使用角色、存货损失清洗终端使用和真实接受方。食物包装界面保留原生量且不可相加。同一现场运行承担呈现，不虚增节点。只有实际交接覆盖要求时才另声明配送物流货运供应商职责，不能作为包装活动或默认末端配送。 | marriott-manho-service-current; ikea-counter-service-current; mcdonalds-pickup-2023-current |
| output_projection_once | 全部预期产出台账及最终投影 | 完整所有输出台账为分配前物理证据：每个其他客户菜单非食物输出保留真实原生交接量，不得将原量乘目标份额当其物理数量。声明output_role、实际过程细分或真实联合共产品、allocation_stage、lineage和实际PCR特定决定。在目标已分配LCI中，其他独立生产餐饮服务仅是分配证据，不是目标共产品交换；配套道菜添餐内部转移不是共产品。只有完整投入及全部原生输出、且在指定一步分配一次时才保留未分配整池；不得将整池输出与已归目标资源混用或再次分配。输出数量专用优先级：原始台账保留未归一化真实原生实物量；只有实际决定保留的真实联合输出最终交换，才将所选原生实物输出量除正同配置N_target一次，绝不乘资源目标份额；已按参考单位记录不再除。本输出规则优先于通用归属资源归一化。 |  |
| dedicated_classification_gate | full_waiter_meal_service | 本PCR仅适用于固定餐厅、咖啡餐饮场所或类似设施现场制备食物及配套饮品，并为坐在餐桌、柜台座位或卡座的顾客提供完整侍应服务。记录实际完整服务及各项包含内容的物理交接；品牌、应用送餐按钮或付款均不足以证明。设座自助或仅柜台服务、无座外带、持续合同或特许食堂、活动餐饮、运输运营商配餐及仅饮品服务不属于本专属路线。移动餐车和船上运营需要各自复核的路线，不属于此固定场所子集。 专属范围资格和真实履约交接必须同时有证据。其他分类及不兼容配置不得计入N_target，但全部真实其他消费者、空闲义务和完整寿命负荷须保留于相应资源池。资格未知即阻断使用，不作零。 | unsd-cpc3-meal |

## 6. 过程清单结构

### 过程图

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| onsite_meal_service | 实际现场制备供餐清洁 | required | 实际固定现场制备食品及兼容完成服务交接 | 一个真实综合厨房餐区运行，承担配方处理及完整支持职责 | full_waiter_meal_service |

实际批次运行周期标识把配料组成和处理前状态连接真实清洗解冻混合冷制加热烹饪保温分餐及可即食供餐状态。投入输出、配方换线清洁和连续冷藏待备期间保持关联，并非每道菜经过全部操作。枚举真实配方组分及上下游交接状态数量时间，同节点内部事件为核对链接而非重复外部交换。不合格退回未供餐餐盘残余按实际再热返工留存可用转交或丢弃关联源批次。比较配方得率前须证明真实冷热操作和水脂溶质去向。

### 过程：实际现场制备供餐清洁 (`onsite_meal_service`)

#### 输入

##### 产品流

###### 实际液态处理自来水供给 (`recipe_water_ice_liquid_tap`)

仅在实际来源确为处理后的自来水且用于所声明用途时适用。保留实际供应方、水质、温度状态和供应边界，不假定所有供水都是自来水。冰、瓶装矿泉水、再生水、未经处理的水及环境直接取水保留各自实际身份。沿用原卡原生质量或体积基准；最终换算为质量参考量时须有实际相容密度和状态证据，不能把目录中的次要体积关系作为默认现场密度。

- 选定流：自来水 `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- 绑定：`fixed`
- 流属性/单位：Mass / kg
- 数量规则：按cp_food记录每参考流实际独占归属原生量，执行same_reference_once及真实条件启用，N_target=0保留不除。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_food`

数量范围证据需求：必须真实匹配原生场址供应商状态数量证据，不支持通用数值范围或因子；实际数据缺失限制使用且不是零。

###### 实际使用点交流电 (`electricity_ac`)

仅适用于实际跨越本节点边界、且未由完整供应商数据覆盖的交流电。该身份未特指供应方、电压、发电组合或交付线损归属，仍须按要求采集。经核实的电力流以1 MJ电能为基准，其ILCD属性名称为净热值；原生kWh按精确的3.6 MJ/kWh换算，不能套用燃料热值系数。直流电或其他不匹配电力状态保留在余项要求中。

- 选定流：交流电 `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- 绑定：`fixed`
- 流属性/单位：Energy / kWh
- 数量规则：按cp_energy记录每参考流实际独占归属原生量，执行same_reference_once及真实条件启用，N_target=0保留不除。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_energy`

数量范围证据需求：必须真实匹配原生场址供应商状态数量证据，不支持通用数值范围或因子；实际数据缺失限制使用且不是零。

###### 实际外购交付的有效热量 (`purchased_thermal_delivered_heat`)

仅记录有证据能量基准、实际跨越本节点边界交付的有效热量。保留供回状态、温度品位、覆盖范围及实际损失责任。通用热能身份不预设天然气、蒸汽质量、锅炉效率或温度；制冷、燃料能量及缺少蒸汽转能量证据的情形不使用该身份。

- 选定流：热能 `4f19a302-7b3b-11dd-ad8b-0800200c9a66`
- 绑定：`fixed`
- 流属性/单位：Energy / MJ
- 数量规则：按cp_energy记录每参考流实际独占归属原生量，执行same_reference_once及真实条件启用，N_target=0保留不除。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_energy`

数量范围证据需求：必须真实匹配原生场址供应商状态数量证据，不支持通用数值范围或因子；实际数据缺失限制使用且不是零。

###### 实际液态处理自来水供给 (`operating_water_liquid_tap`)

仅在实际来源确为处理后的自来水且用于所声明用途时适用。保留实际供应方、水质、温度状态和供应边界，不假定所有供水都是自来水。冰、瓶装矿泉水、再生水、未经处理的水及环境直接取水保留各自实际身份。沿用原卡原生质量或体积基准；最终换算为质量参考量时须有实际相容密度和状态证据，不能把目录中的次要体积关系作为默认现场密度。

- 选定流：自来水 `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- 绑定：`fixed`
- 流属性/单位：Volume / m3
- 数量规则：按cp_water记录每参考流实际独占归属原生量，执行same_reference_once及真实条件启用，N_target=0保留不除。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_water`

数量范围证据需求：必须真实匹配原生场址供应商状态数量证据，不支持通用数值范围或因子；实际数据缺失限制使用且不是零。

###### 实际独立记录的合成洗涤剂投入 (`cleaning_supplies_synthetic_detergent`)

仅适用于产品配方、供应状态及用途记录确认的实际合成表面活性洗涤剂。记录扣除包装皮重的材料净量，区分浓缩液与稀释水，整体配方与组分不得相加重复计入。肥皂、消毒剂、抹布、滤材等仍按各自实际身份记录，不预设清洁配方、剂量或发生。

- 选定流：洗涤剂 `1c57d123-df57-49ab-b9d4-957403beb8a5`
- 绑定：`fixed`
- 流属性/单位：Mass / kg
- 数量规则：按cp_supplies记录每参考流实际独占归属原生量，执行same_reference_once及真实条件启用，N_target=0保留不除。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_supplies`

数量范围证据需求：必须真实匹配原生场址供应商状态数量证据，不支持通用数值范围或因子；实际数据缺失限制使用且不是零。

##### 废物流

不预设此类常规交换；实际新增界面须明确原生证据并审查扩展，不能默认零。

##### 基本流

#### 输出

##### 产品流

###### 实际完成的固定场所完整侍应供餐场次 (`full_waiter_meal_service`)

最终产品以实际接受方完整获得声明等效菜单、组分、份量和服务版本的交接为准。配套组分及添餐记录关联同一次服务；每个餐盘或付款不另造最终服务。

- Selected flow: 实际完成的固定场所完整侍应供餐场次
- 流属性/单位：Count `01846770-4cfe-4a25-8ad9-919d8d378345` / Item(s)
- 数量规则：1 Item(s)
- 数值来源模式：`fixed_value`
- 适用范围：`product_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_service`
- 来源：`marriott-manho-service-current`; `ikea-counter-service-current`

##### 废物流

###### 实际丢弃的未供餐已制备食物 (`unserved_food_waste`)

实际冷制、熟制或保温已制备食物在交付接受方之前丢弃；排除留存可用存货及真实可用转交。拒收或重做状态关联生产批次。

本流身份仅适用于按实际计量状态记录的废弃人类食物或饮料。包装、餐具、清洁化学品和非食用备料残余需要各自的流身份。不同实际接收方的废物流保持分开；若与非食物材料真实混收，应核实整条混合废物流身份，本食物来源视图仅作为不可相加的审计记录。

- 选定流：食物残渣 `55feef47-26fa-48d1-bcf5-1eb581143bd7`
- 绑定：`fixed`
- 流属性/单位：Mass / kg
- 数量规则：按cp_fates记录每参考流实际独占归属原生量，执行same_reference_once及真实条件启用，N_target=0保留不除。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_fates`

数量范围证据需求：必须真实匹配原生场址供应商状态数量证据，不支持通用数值范围或因子；实际数据缺失限制使用且不是零。

###### 实际退回餐盘及用餐剩余废物 (`plate_waste`)

按组分、状态及接受方记录供餐后实际剩余食物；独立称量餐具包装皮重、液体及留存脂水。食用量不等于最终服务次数。

本流身份仅适用于按实际计量状态记录的废弃人类食物或饮料。包装、餐具、清洁化学品和非食用备料残余需要各自的流身份。不同实际接收方的废物流保持分开；若与非食物材料真实混收，应核实整条混合废物流身份，本食物来源视图仅作为不可相加的审计记录。

- 选定流：食物残渣 `55feef47-26fa-48d1-bcf5-1eb581143bd7`
- 绑定：`fixed`
- 流属性/单位：Mass / kg
- 数量规则：按cp_fates记录每参考流实际独占归属原生量，执行same_reference_once及真实条件启用，N_target=0保留不除。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_fates`

数量范围证据需求：必须真实匹配原生场址供应商状态数量证据，不支持通用数值范围或因子；实际数据缺失限制使用且不是零。

###### 实际单独收集的纸类包装废物 (`packaging_waste_paper_pack`)

仅适用于本节点实际独立废弃、单独收集的纸类包装，保留实际湿态或收集状态、组成、接收方及处理运输责任。污染或混收形成的混合流须使用其自身经核实的身份，材料组分仅作不可相加审计。仍在用的周转包装不是本废物，不预设组成、数量、回收或处理。

- 选定流：包装废弃物，纸类 `6b6f1025-cb6a-4c9d-9947-7726c4307a76`
- 绑定：`fixed`
- 流属性/单位：Mass / kg
- 数量规则：按cp_fates记录每参考流实际独占归属原生量，执行same_reference_once及真实条件启用，N_target=0保留不除。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_fates`

数量范围证据需求：必须真实匹配原生场址供应商状态数量证据，不支持通用数值范围或因子；实际数据缺失限制使用且不是零。

###### 实际单独收集的金属包装废物 (`packaging_waste_metal_pack`)

仅适用于本节点实际独立废弃、单独收集的金属包装，保留实际湿态或收集状态、组成、接收方及处理运输责任。污染或混收形成的混合流须使用其自身经核实的身份，材料组分仅作不可相加审计。仍在用的周转包装不是本废物，不预设组成、数量、回收或处理。

- 选定流：金属包装废物 `cdda6013-c0c5-4c72-990a-f5668fe71069`
- 绑定：`fixed`
- 流属性/单位：Mass / kg
- 数量规则：按cp_fates记录每参考流实际独占归属原生量，执行same_reference_once及真实条件启用，N_target=0保留不除。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_fates`

数量范围证据需求：必须真实匹配原生场址供应商状态数量证据，不支持通用数值范围或因子；实际数据缺失限制使用且不是零。

##### 基本流

###### 实际排入空气的水蒸气 (`water_vapour_to_air`)

按明确空气环境分室记录实际食物、烹饪、保温、干燥水汽。要求源特定测量或匹配的纯水组成去向证据；总挥发损失不是全量水。

- 选定流：水蒸气 `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- 绑定：`fixed`
- 流属性/单位：Mass / kg
- 数量规则：按cp_air记录每参考流实际独占归属原生量，执行same_reference_once及真实条件启用，N_target=0保留不除。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_air`

数量范围证据需求：必须真实匹配原生场址供应商状态数量证据，不支持通用数值范围或因子；实际数据缺失限制使用且不是零。

###### 实际有独立证据的向空气排放化石二氧化碳 (`other_direct_species_co2_fossil_air`)

仅在实际证据确认化石来源、二氧化碳物种和向空气直接释放时适用。保留报告的碳或CO2基准，碳转CO2须独立有证据的化学计量，不预设系数或发生。 本卡仅记录本节点实际直接释放，不重复计入外购电力上游或供应商已覆盖排放。UUID表示未细分子介质的空气排放，其他实际子介质或来源仍须在余项中匹配，不能改标；缺失数据不等于零。

- 选定流：二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 绑定：`fixed`
- 流属性/单位：Mass / kg
- 数量规则：按cp_air记录每参考流实际独占归属原生量，执行same_reference_once及真实条件启用，N_target=0保留不除。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_air`

数量范围证据需求：必须真实匹配原生场址供应商状态数量证据，不支持通用数值范围或因子；实际数据缺失限制使用且不是零。

###### 实际有独立证据的向空气排放化石甲烷 (`other_direct_species_methane_fossil_air`)

仅在实际证据确认化石来源、甲烷物种和向空气直接释放时适用。生物源或来源未知甲烷仍在余项要求中，不得改标化石源；不预设泄漏发生、气体比例、数量或排放系数。 本卡仅记录本节点实际直接释放，不重复计入外购电力上游或供应商已覆盖排放。UUID表示未细分子介质的空气排放，其他实际子介质或来源仍须在余项中匹配，不能改标；缺失数据不等于零。

- 选定流：甲烷 (化石源) `08a91e70-3ddc-11dd-9610-0050c2490048`
- 绑定：`fixed`
- 流属性/单位：Mass / kg
- 数量规则：按cp_air记录每参考流实际独占归属原生量，执行same_reference_once及真实条件启用，N_target=0保留不除。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_air`

数量范围证据需求：必须真实匹配原生场址供应商状态数量证据，不支持通用数值范围或因子；实际数据缺失限制使用且不是零。

###### 实际有独立证据的向空气排放氧化亚氮 (`other_direct_species_nitrous_oxide_air`)

仅在实际证据确认氧化亚氮物种及向空气直接释放时适用。原生数量为N2O质量，不是氮质量或氮气质量，不预设排放系数或发生。 本卡仅记录本节点实际直接释放，不重复计入外购电力上游或供应商已覆盖排放。UUID表示未细分子介质的空气排放，其他实际子介质或来源仍须在余项中匹配，不能改标；缺失数据不等于零。

- 选定流：一氧化二氮 `08a91e70-3ddc-11dd-94c3-0050c2490048`
- 绑定：`fixed`
- 流属性/单位：Mass / kg
- 数量规则：按cp_air记录每参考流实际独占归属原生量，执行same_reference_once及真实条件启用，N_target=0保留不除。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_air`

数量范围证据需求：必须真实匹配原生场址供应商状态数量证据，不支持通用数值范围或因子；实际数据缺失限制使用且不是零。

## 7. 分配及联产品处理

| rule_id | applies_to | rule |
| --- | --- | --- |
| output_completeness | 全部产出 | 枚举每项目标及其他实际菜单版本份量服务顾客职工免费或非食物输出，带自身标识、接受方、交接点状态、时间来源原生数量。区分其他可用输出、残余废物和内部返工。不设菜品或食物质量到服务通用比例。 |
| physical_precedence | 全部资源 | 按all_user_pool优先资源特定任务计量追踪，否则使用有证据兼容完整物理驱动并记录决定和敏感性。价格营养、不等餐计数或模式标签不能替代因果证据；独立交接点不得把同一服务重计。 |
| run_period_closure | all runs periods assets | 备料烹饪保温供餐清洁换线批次关联连续冷藏待备期间和真实库存结算。共享批次和配方变更保留兼容输出分配与原负担，不设通用得率、不将拒收当最终产品、不把内部返工再算新投入负担。跨期结转须有真实来源接受方最终解决。 |
| returns_exclusive | actual supplies and fluids | S为归属期初加实际收货减期末并计配对责任转移。只能用总S投入加匹配未用外退输出，或投入S减该未用量且省略退料输出之一。净收货仅在退料前扣皮重。使用后可用回收保留旧状态及原负担，不得当未用新料或自动收益。 |
| full_life_once | assets providers land | 按full_life_land及all_user_pool处理完整所有用户寿命分子和兼容已观察加有来源剩余或终结分母。物理供应商底层阶段矩阵防重叠。日历容量时间分配须保留必要闲置分子，生产服务分配须完整有证据寿命服务，不能用目标年度N。 |
| output_stage_precedence | all intended products and useful transfers | 执行output_projection_once，优先取证可用真实独立物理细分；真实联合共产品需实际PCR特定负担决定、输出原生量质量交接及决定优先顺序。不得按目标份额缩放其他独立物理输出量，不得从全部用户台账自动造共产品，也不得再分配目标已分配LCI。未分配整池须全部投入输出且指定一步分配一次，保留角色阶段谱系证据。 |

## 8. 前景数据采集计算与质量规则

### 数据采集协议

下列数字原始键是实际独立操作数槽位，各自展开_unit、_basis、_method、_state、_sample_time、_source字段；元数据属于该值，不是协议整体标记。分类标识不是数量。方法引用上述稳定规则，不隐藏不完整计算。每个协议只属于真实onsite_meal_service节点。

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_service | onsite_meal_service | 实际最终及其他输出 | 物理完成台账 | service_id; recipient_id; site_id; menu_version; recipe_version; component_id; portion_spec; service_mode; gate_evidence; state; handoff_time; reversal_id; partial_id; other_output_id; idle_pool_id; carry_source_id; receiving_period_id; final_resolution; other_output_recipient_id; other_output_gate; other_output_state; other_output_handoff_time; other_output_source_id; food_transfer_id; reusable_transfer_id; fluid_transfer_id; output_role; allocation_stage; lineage_source_id; physical_process_id; subdivision_id; joint_coproduct_decision_id; projection_treatment; allocation_step_id; resource_allocation_applied; fulfilled_count; fulfilled_count_unit; fulfilled_count_basis; fulfilled_count_method; fulfilled_count_state; fulfilled_count_sample_time; fulfilled_count_source; component_mass; component_mass_unit; component_mass_basis; component_mass_method; component_mass_state; component_mass_sample_time; component_mass_source; refill_mass; refill_mass_unit; refill_mass_basis; refill_mass_method; refill_mass_state; refill_mass_sample_time; refill_mass_source; component_count; component_count_unit; component_count_basis; component_count_method; component_count_state; component_count_sample_time; component_count_source; portion_mass; portion_mass_unit; portion_mass_basis; portion_mass_method; portion_mass_state; portion_mass_sample_time; portion_mass_source; elapsed_duration; elapsed_duration_unit; elapsed_duration_basis; elapsed_duration_method; elapsed_duration_state; elapsed_duration_sample_time; elapsed_duration_source; other_output_native_quantity; other_output_native_quantity_unit; other_output_native_quantity_basis; other_output_native_quantity_method; other_output_native_quantity_state; other_output_native_quantity_sample_time; other_output_native_quantity_source; food_transfer_native_quantity; food_transfer_native_quantity_unit; food_transfer_native_quantity_basis; food_transfer_native_quantity_method; food_transfer_native_quantity_state; food_transfer_native_quantity_sample_time; food_transfer_native_quantity_source; reusable_transfer_native_quantity; reusable_transfer_native_quantity_unit; reusable_transfer_native_quantity_basis; reusable_transfer_native_quantity_method; reusable_transfer_native_quantity_state; reusable_transfer_native_quantity_sample_time; reusable_transfer_native_quantity_source; fluid_transfer_native_quantity; fluid_transfer_native_quantity_unit; fluid_transfer_native_quantity_basis; fluid_transfer_native_quantity_method; fluid_transfer_native_quantity_state; fluid_transfer_native_quantity_sample_time; fluid_transfer_native_quantity_source | 观察接受方真实组分道菜添餐交接、可用状态及完整包条件；用订单厨房服务证据核对重做退回撤回。枚举全部其他实际输出、真实职工免费餐和失败，不用POS付款替代。执行service_gate及all_user_pool。 每项独立输出及关联可用食物重复用品液体交接执行other_output_native_gate。 | Item(s); independent native food kg and actual time | 每次交接组分及连续关联报告期 | 实际完整报告库存批次区间及全部关联历史有来源剩余寿命，保留来源结转接受解决 | 本协议相关真实场地厨房餐区供应接受供应商及完整所有用户范围 | 每参考流 | 可追溯原始来源、校准或有来源测量、独立操作数元数据、匹配交接状态时间及完整责任供应商覆盖 |
| cp_food | onsite_meal_service | 食物组成处理及存货 | 批次配方状态台账 | source_id; supplier_id; lot_id; recipe_version; composition_role; species_sku; raw_prepared_state; operation_id; batch_id; run_id; changeover_id; handoff_id; receiver_id; rework_parent; retained_stock_id; sample_id; fate_id; opening_mass; opening_mass_unit; opening_mass_basis; opening_mass_method; opening_mass_state; opening_mass_sample_time; opening_mass_source; inbound_mass; inbound_mass_unit; inbound_mass_basis; inbound_mass_method; inbound_mass_state; inbound_mass_sample_time; inbound_mass_source; closing_mass; closing_mass_unit; closing_mass_basis; closing_mass_method; closing_mass_state; closing_mass_sample_time; closing_mass_source; paired_transfer_mass; paired_transfer_mass_unit; paired_transfer_mass_basis; paired_transfer_mass_method; paired_transfer_mass_state; paired_transfer_mass_sample_time; paired_transfer_mass_source; unused_return_mass; unused_return_mass_unit; unused_return_mass_basis; unused_return_mass_method; unused_return_mass_state; unused_return_mass_sample_time; unused_return_mass_source; recipe_input_mass; recipe_input_mass_unit; recipe_input_mass_basis; recipe_input_mass_method; recipe_input_mass_state; recipe_input_mass_sample_time; recipe_input_mass_source; prepared_mass; prepared_mass_unit; prepared_mass_basis; prepared_mass_method; prepared_mass_state; prepared_mass_sample_time; prepared_mass_source; served_mass; served_mass_unit; served_mass_basis; served_mass_method; served_mass_state; served_mass_sample_time; served_mass_source; refill_mass; refill_mass_unit; refill_mass_basis; refill_mass_method; refill_mass_state; refill_mass_sample_time; refill_mass_source; retained_mass; retained_mass_unit; retained_mass_basis; retained_mass_method; retained_mass_state; retained_mass_sample_time; retained_mass_source; water_mass; water_mass_unit; water_mass_basis; water_mass_method; water_mass_state; water_mass_sample_time; water_mass_source; nonwater_mass; nonwater_mass_unit; nonwater_mass_basis; nonwater_mass_method; nonwater_mass_state; nonwater_mass_sample_time; nonwater_mass_source; moisture_value; moisture_value_unit; moisture_value_basis; moisture_value_method; moisture_value_state; moisture_value_sample_time; moisture_value_source; piece_count; piece_count_unit; piece_count_basis; piece_count_method; piece_count_state; piece_count_sample_time; piece_count_source; unit_mass; unit_mass_unit; unit_mass_basis; unit_mass_method; unit_mass_state; unit_mass_sample_time; unit_mass_source; density; density_unit; density_basis; density_method; density_state; density_sample_time; density_source; temperature; temperature_unit; temperature_basis; temperature_method; temperature_state; temperature_sample_time; temperature_source; raw_quantity; raw_quantity_unit; raw_quantity_basis; raw_quantity_method; raw_quantity_state; raw_quantity_sample_time; raw_quantity_source; target_driver; target_driver_unit; target_driver_basis; target_driver_method; target_driver_state; target_driver_sample_time; target_driver_source; all_consumer_driver; all_consumer_driver_unit; all_consumer_driver_basis; all_consumer_driver_method; all_consumer_driver_state; all_consumer_driver_sample_time; all_consumer_driver_source; gross_mass; gross_mass_unit; gross_mass_basis; gross_mass_method; gross_mass_state; gross_mass_sample_time; gross_mass_source; tare_mass; tare_mass_unit; tare_mass_basis; tare_mass_method; tare_mass_state; tare_mass_sample_time; tare_mass_source; net_mass; net_mass_unit; net_mass_basis; net_mass_method; net_mass_state; net_mass_sample_time; net_mass_source; flow_row_id; actual_identity_case; actual_substance_or_material; actual_origin_and_medium; actual_state_and_gate; case_activation_evidence; typed_or_residual_quantity; quantity_exclusion_links; whole_total_reconciliation; unresolved_occurrence_not_zero | 分别称收货净量及皮重，逐配料、配方水冰及配套饮品角色关联版本配方和实际冷制加热保温供餐状态。称预制留存添餐转移状态，返工不合格关联源批次和目的地。按food_fate_boundary及returns_exclusive核对状态流，不假定配方得率。 | kg actual state; independent pieces/composition/density/temperature | 每批次配方状态变化及库存截点 | 实际完整报告库存批次区间及全部关联历史有来源剩余寿命，保留来源结转接受解决 | 本协议相关真实场地厨房餐区供应接受供应商及完整所有用户范围 | 每参考流 | 可追溯原始来源、校准或有来源测量、独立操作数元数据、匹配交接状态时间及完整责任供应商覆盖 |
| cp_energy | onsite_meal_service | 电燃料有效热 | 真实计量库存设备台账 | meter_id; carrier_id; equipment_id; event_id; run_id; interval_start; interval_end; provider_id; coverage_id; consumer_id; pool_id; idle_reason; carry_source_id; receiving_period_id; final_resolution; opening_reading; opening_reading_unit; opening_reading_basis; opening_reading_method; opening_reading_state; opening_reading_sample_time; opening_reading_source; closing_reading; closing_reading_unit; closing_reading_basis; closing_reading_method; closing_reading_state; closing_reading_sample_time; closing_reading_source; interval_average_power; interval_average_power_unit; interval_average_power_basis; interval_average_power_method; interval_average_power_state; interval_average_power_sample_time; interval_average_power_source; duration; duration_unit; duration_basis; duration_method; duration_state; duration_sample_time; duration_source; fuel_opening; fuel_opening_unit; fuel_opening_basis; fuel_opening_method; fuel_opening_state; fuel_opening_sample_time; fuel_opening_source; fuel_inbound; fuel_inbound_unit; fuel_inbound_basis; fuel_inbound_method; fuel_inbound_state; fuel_inbound_sample_time; fuel_inbound_source; fuel_closing; fuel_closing_unit; fuel_closing_basis; fuel_closing_method; fuel_closing_state; fuel_closing_sample_time; fuel_closing_source; density; density_unit; density_basis; density_method; density_state; density_sample_time; density_source; temperature; temperature_unit; temperature_basis; temperature_method; temperature_state; temperature_sample_time; temperature_source; calorific_value; calorific_value_unit; calorific_value_basis; calorific_value_method; calorific_value_state; calorific_value_sample_time; calorific_value_source; delivered_heat; delivered_heat_unit; delivered_heat_basis; delivered_heat_method; delivered_heat_state; delivered_heat_sample_time; delivered_heat_source; raw_quantity; raw_quantity_unit; raw_quantity_basis; raw_quantity_method; raw_quantity_state; raw_quantity_sample_time; raw_quantity_source; target_driver; target_driver_unit; target_driver_basis; target_driver_method; target_driver_state; target_driver_sample_time; target_driver_source; all_consumer_driver; all_consumer_driver_unit; all_consumer_driver_basis; all_consumer_driver_method; all_consumer_driver_state; all_consumer_driver_sample_time; all_consumer_driver_source; conversion_factor; conversion_factor_unit; conversion_factor_basis; conversion_factor_method; conversion_factor_state; conversion_factor_sample_time; conversion_factor_source; flow_row_id; actual_identity_case; actual_substance_or_material; actual_origin_and_medium; actual_state_and_gate; case_activation_evidence; typed_or_residual_quantity; quantity_exclusion_links; whole_total_reconciliation; unresolved_occurrence_not_zero | 读取校准同区间计量或真实区间平均功率及实际历时，积分能量不变；核对燃料存货原生基准和有效热交接。追踪真实设备批次闲置其他消费者及准确供应商阶段。执行native_operand和all_user_pool；燃烧因子物种须cp_air取证。 | kWh; MJ; kg or independently converted native fuel units | 每个实际计量区间库存期事件 | 实际完整报告库存批次区间及全部关联历史有来源剩余寿命，保留来源结转接受解决 | 本协议相关真实场地厨房餐区供应接受供应商及完整所有用户范围 | 每参考流 | 可追溯原始来源、校准或有来源测量、独立操作数元数据、匹配交接状态时间及完整责任供应商覆盖 |
| cp_water | onsite_meal_service | 水源组成用途去向 | 真实水源计量去向台账 | source_id; water_type; meter_id; run_id; enduse_id; sample_id; state; receiver_id; medium; coverage_id; consumer_id; pool_id; carry_source_id; receiving_period_id; final_resolution; water_stock_id; paired_water_transfer_id; terminal_fate_id; terminal_receiver_id; closing_membership_id; content_water_view_id; opening_reading; opening_reading_unit; opening_reading_basis; opening_reading_method; opening_reading_state; opening_reading_sample_time; opening_reading_source; closing_reading; closing_reading_unit; closing_reading_basis; closing_reading_method; closing_reading_state; closing_reading_sample_time; closing_reading_source; supply_volume; supply_volume_unit; supply_volume_basis; supply_volume_method; supply_volume_state; supply_volume_sample_time; supply_volume_source; withdrawal_volume; withdrawal_volume_unit; withdrawal_volume_basis; withdrawal_volume_method; withdrawal_volume_state; withdrawal_volume_sample_time; withdrawal_volume_source; reuse_volume; reuse_volume_unit; reuse_volume_basis; reuse_volume_method; reuse_volume_state; reuse_volume_sample_time; reuse_volume_source; recipe_water_mass; recipe_water_mass_unit; recipe_water_mass_basis; recipe_water_mass_method; recipe_water_mass_state; recipe_water_mass_sample_time; recipe_water_mass_source; retained_water_mass; retained_water_mass_unit; retained_water_mass_basis; retained_water_mass_method; retained_water_mass_state; retained_water_mass_sample_time; retained_water_mass_source; vapour_mass; vapour_mass_unit; vapour_mass_basis; vapour_mass_method; vapour_mass_state; vapour_mass_sample_time; vapour_mass_source; effluent_volume; effluent_volume_unit; effluent_volume_basis; effluent_volume_method; effluent_volume_state; effluent_volume_sample_time; effluent_volume_source; dissolved_mass; dissolved_mass_unit; dissolved_mass_basis; dissolved_mass_method; dissolved_mass_state; dissolved_mass_sample_time; dissolved_mass_source; density; density_unit; density_basis; density_method; density_state; density_sample_time; density_source; temperature; temperature_unit; temperature_basis; temperature_method; temperature_state; temperature_sample_time; temperature_source; raw_quantity; raw_quantity_unit; raw_quantity_basis; raw_quantity_method; raw_quantity_state; raw_quantity_sample_time; raw_quantity_source; target_driver; target_driver_unit; target_driver_basis; target_driver_method; target_driver_state; target_driver_sample_time; target_driver_source; all_consumer_driver; all_consumer_driver_unit; all_consumer_driver_basis; all_consumer_driver_method; all_consumer_driver_state; all_consumer_driver_sample_time; all_consumer_driver_source; water_stock_opening; water_stock_opening_unit; water_stock_opening_basis; water_stock_opening_method; water_stock_opening_state; water_stock_opening_sample_time; water_stock_opening_source; water_stock_closing; water_stock_closing_unit; water_stock_closing_basis; water_stock_closing_method; water_stock_closing_state; water_stock_closing_sample_time; water_stock_closing_source; paired_water_transfer_quantity; paired_water_transfer_quantity_unit; paired_water_transfer_quantity_basis; paired_water_transfer_quantity_method; paired_water_transfer_quantity_state; paired_water_transfer_quantity_sample_time; paired_water_transfer_quantity_source; terminal_fate_quantity; terminal_fate_quantity_unit; terminal_fate_quantity_basis; terminal_fate_quantity_method; terminal_fate_quantity_state; terminal_fate_quantity_sample_time; terminal_fate_quantity_source; terminal_water_quantity; terminal_water_quantity_unit; terminal_water_quantity_basis; terminal_water_quantity_method; terminal_water_quantity_state; terminal_water_quantity_sample_time; terminal_water_quantity_source; flow_row_id; actual_identity_case; actual_substance_or_material; actual_origin_and_medium; actual_state_and_gate; case_activation_evidence; typed_or_residual_quantity; quantity_exclusion_links; whole_total_reconciliation; unresolved_occurrence_not_zero | 分别计量购水和取水，关联食物清洗组成洗碗清洁设备回用及真实废水接收端。独立采样质量组成状态；核对回用留存水汽废水，不推断供水等于排水。执行food_fate_boundary、native_operand及all_user_pool。 按terminal_water_closure核对真实期初期末水库存和配对接收去向。 | native m3; independent kg/components/temperature | 每水源用途区间批次及排放事件 | 实际完整报告库存批次区间及全部关联历史有来源剩余寿命，保留来源结转接受解决 | 本协议相关真实场地厨房餐区供应接受供应商及完整所有用户范围 | 每参考流 | 可追溯原始来源、校准或有来源测量、独立操作数元数据、匹配交接状态时间及完整责任供应商覆盖 |
| cp_supplies | onsite_meal_service | 清洁包装未用退料 | 真实物料库存领退台账 | sku_id; lot_id; material_identity; composition; concentrate_solution_active_state; pack_id; event_id; run_id; consumer_id; paired_return_id; receiver_id; coverage_id; pool_id; opening_mass; opening_mass_unit; opening_mass_basis; opening_mass_method; opening_mass_state; opening_mass_sample_time; opening_mass_source; inbound_mass; inbound_mass_unit; inbound_mass_basis; inbound_mass_method; inbound_mass_state; inbound_mass_sample_time; inbound_mass_source; closing_mass; closing_mass_unit; closing_mass_basis; closing_mass_method; closing_mass_state; closing_mass_sample_time; closing_mass_source; paired_transfer_mass; paired_transfer_mass_unit; paired_transfer_mass_basis; paired_transfer_mass_method; paired_transfer_mass_state; paired_transfer_mass_sample_time; paired_transfer_mass_source; unused_return_mass; unused_return_mass_unit; unused_return_mass_basis; unused_return_mass_method; unused_return_mass_state; unused_return_mass_sample_time; unused_return_mass_source; piece_count; piece_count_unit; piece_count_basis; piece_count_method; piece_count_state; piece_count_sample_time; piece_count_source; unit_mass; unit_mass_unit; unit_mass_basis; unit_mass_method; unit_mass_state; unit_mass_sample_time; unit_mass_source; active_fraction; active_fraction_unit; active_fraction_basis; active_fraction_method; active_fraction_state; active_fraction_sample_time; active_fraction_source; density; density_unit; density_basis; density_method; density_state; density_sample_time; density_source; temperature; temperature_unit; temperature_basis; temperature_method; temperature_state; temperature_sample_time; temperature_source; raw_quantity; raw_quantity_unit; raw_quantity_basis; raw_quantity_method; raw_quantity_state; raw_quantity_sample_time; raw_quantity_source; target_driver; target_driver_unit; target_driver_basis; target_driver_method; target_driver_state; target_driver_sample_time; target_driver_source; all_consumer_driver; all_consumer_driver_unit; all_consumer_driver_basis; all_consumer_driver_method; all_consumer_driver_state; all_consumer_driver_sample_time; all_consumer_driver_source; gross_mass; gross_mass_unit; gross_mass_basis; gross_mass_method; gross_mass_state; gross_mass_sample_time; gross_mass_source; tare_mass; tare_mass_unit; tare_mass_basis; tare_mass_method; tare_mass_state; tare_mass_sample_time; tare_mass_source; net_mass; net_mass_unit; net_mass_basis; net_mass_method; net_mass_state; net_mass_sample_time; net_mass_source; supplied_concentrate_mass; supplied_concentrate_mass_unit; supplied_concentrate_mass_basis; supplied_concentrate_mass_method; supplied_concentrate_mass_state; supplied_concentrate_mass_sample_time; supplied_concentrate_mass_source; prepared_solution_mass; prepared_solution_mass_unit; prepared_solution_mass_basis; prepared_solution_mass_method; prepared_solution_mass_state; prepared_solution_mass_sample_time; prepared_solution_mass_source; active_mass; active_mass_unit; active_mass_basis; active_mass_method; active_mass_state; active_mass_sample_time; active_mass_source; solution_water_mass; solution_water_mass_unit; solution_water_mass_basis; solution_water_mass_method; solution_water_mass_state; solution_water_mass_sample_time; solution_water_mass_source; flow_row_id; actual_identity_case; actual_substance_or_material; actual_origin_and_medium; actual_state_and_gate; case_activation_evidence; typed_or_residual_quantity; quantity_exclusion_links; whole_total_reconciliation; unresolved_occurrence_not_zero | 盘点每个真实SKU批次及包装来源；外退前称净量并记皮重、实际领用配置未用已用状态及目的地。展开浓缩溶液活性独立量；按returns_exclusive不用使用后回收抵减，执行native_operand和all_user_pool。 食物组分水和solution_water_mass关联同一真实物理水源，不重复购水。 | native kg; independent count/fraction/volume | 每次收领退使用及库存截点 | 实际完整报告库存批次区间及全部关联历史有来源剩余寿命，保留来源结转接受解决 | 本协议相关真实场地厨房餐区供应接受供应商及完整所有用户范围 | 每参考流 | 可追溯原始来源、校准或有来源测量、独立操作数元数据、匹配交接状态时间及完整责任供应商覆盖 |
| cp_assets | onsite_meal_service | 场地设备重复用品完整寿命 | 真实完整资产寿命台账 | asset_id; component_id; material_state; life_phase; manufacture_source; install_event; maintenance_event; replacement_event; termination_event; all_user_id; provider_id; covered_stage; uncovered_stage; actual_completion_id; usable_or_waste_receiver; content_view_id; period_id; asset_count; asset_count_unit; asset_count_basis; asset_count_method; asset_count_state; asset_count_sample_time; asset_count_source; component_mass; component_mass_unit; component_mass_basis; component_mass_method; component_mass_state; component_mass_sample_time; component_mass_source; piece_count; piece_count_unit; piece_count_basis; piece_count_method; piece_count_state; piece_count_sample_time; piece_count_source; unit_mass; unit_mass_unit; unit_mass_basis; unit_mass_method; unit_mass_state; unit_mass_sample_time; unit_mass_source; life_burden_quantity; life_burden_quantity_unit; life_burden_quantity_basis; life_burden_quantity_method; life_burden_quantity_state; life_burden_quantity_sample_time; life_burden_quantity_source; observed_alluser_driver; observed_alluser_driver_unit; observed_alluser_driver_basis; observed_alluser_driver_method; observed_alluser_driver_state; observed_alluser_driver_sample_time; observed_alluser_driver_source; sourced_remaining_driver; sourced_remaining_driver_unit; sourced_remaining_driver_basis; sourced_remaining_driver_method; sourced_remaining_driver_state; sourced_remaining_driver_sample_time; sourced_remaining_driver_source; terminated_total_driver; terminated_total_driver_unit; terminated_total_driver_basis; terminated_total_driver_method; terminated_total_driver_state; terminated_total_driver_sample_time; terminated_total_driver_source; target_driver; target_driver_unit; target_driver_basis; target_driver_method; target_driver_state; target_driver_sample_time; target_driver_source; all_consumer_driver; all_consumer_driver_unit; all_consumer_driver_basis; all_consumer_driver_method; all_consumer_driver_state; all_consumer_driver_sample_time; all_consumer_driver_source; conversion_factor; conversion_factor_unit; conversion_factor_basis; conversion_factor_method; conversion_factor_state; conversion_factor_sample_time; conversion_factor_source | 采集实际资产制造安装维护更换终结和所有用户历史，加有来源兼容剩余服务或实际终结总量。记录完整建筑场地厨房餐区重复用品范围及材料原生量，不能仅发票年度N或容量。执行full_life_land、full_life_once、all_user_pool；整机内含物不可相加。 | actual native asset/piece count; kg and full-life driver units | 各寿命阶段事件及完整历史和有来源剩余期间 | 实际完整报告库存批次区间及全部关联历史有来源剩余寿命，保留来源结转接受解决 | 本协议相关真实场地厨房餐区供应接受供应商及完整所有用户范围 | 每参考流 | 可追溯原始来源、校准或有来源测量、独立操作数元数据、匹配交接状态时间及完整责任供应商覆盖 |
| cp_providers | onsite_meal_service | 已完成配套供应商 | 真实阶段交接覆盖台账 | provider_id; dataset_id; service_id; physical_stage; gate; state; time; source_id; site_id; asset_id; consumer_id; covered_stage; excluded_stage; missing_stage; actual_completion_id; owner_id; delivered_native_quantity; delivered_native_quantity_unit; delivered_native_quantity_basis; delivered_native_quantity_method; delivered_native_quantity_state; delivered_native_quantity_sample_time; delivered_native_quantity_source; equivalent_count; equivalent_count_unit; equivalent_count_basis; equivalent_count_method; equivalent_count_state; equivalent_count_sample_time; equivalent_count_source; raw_quantity; raw_quantity_unit; raw_quantity_basis; raw_quantity_method; raw_quantity_state; raw_quantity_sample_time; raw_quantity_source; target_driver; target_driver_unit; target_driver_basis; target_driver_method; target_driver_state; target_driver_sample_time; target_driver_source; all_consumer_driver; all_consumer_driver_unit; all_consumer_driver_basis; all_consumer_driver_method; all_consumer_driver_state; all_consumer_driver_sample_time; all_consumer_driver_source; conversion_factor; conversion_factor_unit; conversion_factor_basis; conversion_factor_method; conversion_factor_state; conversion_factor_sample_time; conversion_factor_source | 取得实际完成原生服务交接数量及完整供应运行资产接收寿命阶段。每个缺口须实际整合独占有证据底层阶段及数量状态时间来源责任排除；计划补充仍不完整。completed_support_providers仅匹配真实职责，不虚购完整餐饮。 | actual contracted native unit; evidenced Item(s) equivalent only | 每次完成交付及寿命覆盖变更 | 实际完整报告库存批次区间及全部关联历史有来源剩余寿命，保留来源结转接受解决 | 本协议相关真实场地厨房餐区供应接受供应商及完整所有用户范围 | 每参考流 | 可追溯原始来源、校准或有来源测量、独立操作数元数据、匹配交接状态时间及完整责任供应商覆盖 |
| cp_freight | onsite_meal_service | 唯一货运段 | 真实载货路线台账 | leg_id; source_id; receiver_id; carrier_id; cargo_id; condition; pack_id; support_id; each_total_extent; covered_leg_id; consumer_id; period_id; empty_duty_id; empty_return_provider_id; empty_duty_coverage_id; uncovered_vehicle_operation_id; uncovered_asset_id; actual_missing_stage_completion_id; packed_wet_payload; packed_wet_payload_unit; packed_wet_payload_basis; packed_wet_payload_method; packed_wet_payload_state; packed_wet_payload_sample_time; packed_wet_payload_source; food_wet_mass; food_wet_mass_unit; food_wet_mass_basis; food_wet_mass_method; food_wet_mass_state; food_wet_mass_sample_time; food_wet_mass_source; packaging_mass; packaging_mass_unit; packaging_mass_basis; packaging_mass_method; packaging_mass_state; packaging_mass_sample_time; packaging_mass_source; support_mass; support_mass_unit; support_mass_basis; support_mass_method; support_mass_state; support_mass_sample_time; support_mass_source; noncargo_vehicle_tare; noncargo_vehicle_tare_unit; noncargo_vehicle_tare_basis; noncargo_vehicle_tare_method; noncargo_vehicle_tare_state; noncargo_vehicle_tare_sample_time; noncargo_vehicle_tare_source; distance; distance_unit; distance_basis; distance_method; distance_state; distance_sample_time; distance_source; repetition; repetition_unit; repetition_basis; repetition_method; repetition_state; repetition_sample_time; repetition_source; record_share; record_share_unit; record_share_basis; record_share_method; record_share_state; record_share_sample_time; record_share_source; conversion_factor; conversion_factor_unit; conversion_factor_basis; conversion_factor_method; conversion_factor_state; conversion_factor_sample_time; conversion_factor_source; empty_native_operation_quantity; empty_native_operation_quantity_unit; empty_native_operation_quantity_basis; empty_native_operation_quantity_method; empty_native_operation_quantity_state; empty_native_operation_quantity_sample_time; empty_native_operation_quantity_source; empty_native_fuel_quantity; empty_native_fuel_quantity_unit; empty_native_fuel_quantity_basis; empty_native_fuel_quantity_method; empty_native_fuel_quantity_state; empty_native_fuel_quantity_sample_time; empty_native_fuel_quantity_source; empty_native_asset_quantity; empty_native_asset_quantity_unit; empty_native_asset_quantity_basis; empty_native_asset_quantity_method; empty_native_asset_quantity_state; empty_native_asset_quantity_sample_time; empty_native_asset_quantity_source | 匹配实际货载分段距离和湿包装载荷，只扣非货物车重。EACH仅重复一次，TOTAL不变；每条记录分配比例在分段求和前乘入。准确排除供应商已覆盖段后执行same_reference_once；干可食质量不是运输毛货载。 执行empty_duty_complete；零载荷不能传递必要空载运行负担。 | kg*km; separate actual kg/km/count/share | 每条实际唯一货运段及归属空载职责 | 实际完整报告库存批次区间及全部关联历史有来源剩余寿命，保留来源结转接受解决 | 本协议相关真实场地厨房餐区供应接受供应商及完整所有用户范围 | 每参考流 | 可追溯原始来源、校准或有来源测量、独立操作数元数据、匹配交接状态时间及完整责任供应商覆盖 |
| cp_fluids | onsite_meal_service | 液体供应存货回收去向 | 真实物种充注库存回收台账 | fluid_species; composition; lot_id; equipment_id; event_id; role; new_recovered_state; opening_membership; factory_charge_coverage; recovery_id; receiver_id; whole_equipment_view; period_id; owner_id; paired_role_id; paired_source_event_id; paired_receiver_event_id; other_receipt_source_id; other_receipt_role; whole_equipment_exit_id; retained_content_exit_id; stored_opening; stored_opening_unit; stored_opening_basis; stored_opening_method; stored_opening_state; stored_opening_sample_time; stored_opening_source; installed_opening; installed_opening_unit; installed_opening_basis; installed_opening_method; installed_opening_state; installed_opening_sample_time; installed_opening_source; standalone_receipt; standalone_receipt_unit; standalone_receipt_basis; standalone_receipt_method; standalone_receipt_state; standalone_receipt_sample_time; standalone_receipt_source; factory_new_entry; factory_new_entry_unit; factory_new_entry_basis; factory_new_entry_method; factory_new_entry_state; factory_new_entry_sample_time; factory_new_entry_source; stored_closing; stored_closing_unit; stored_closing_basis; stored_closing_method; stored_closing_state; stored_closing_sample_time; stored_closing_source; installed_closing; installed_closing_unit; installed_closing_basis; installed_closing_method; installed_closing_state; installed_closing_sample_time; installed_closing_source; retained_recovery; retained_recovery_unit; retained_recovery_basis; retained_recovery_method; retained_recovery_state; retained_recovery_sample_time; retained_recovery_source; unused_return; unused_return_unit; unused_return_basis; unused_return_method; unused_return_state; unused_return_sample_time; unused_return_source; usable_export; usable_export_unit; usable_export_basis; usable_export_method; usable_export_state; usable_export_sample_time; usable_export_source; waste_export; waste_export_unit; waste_export_basis; waste_export_method; waste_export_state; waste_export_sample_time; waste_export_source; measured_release; measured_release_unit; measured_release_basis; measured_release_method; measured_release_state; measured_release_sample_time; measured_release_source; unknown_balance; unknown_balance_unit; unknown_balance_basis; unknown_balance_method; unknown_balance_state; unknown_balance_sample_time; unknown_balance_source; density; density_unit; density_basis; density_method; density_state; density_sample_time; density_source; temperature; temperature_unit; temperature_basis; temperature_method; temperature_state; temperature_sample_time; temperature_source; fraction; fraction_unit; fraction_basis; fraction_method; fraction_state; fraction_sample_time; fraction_source; other_receipt_quantity; other_receipt_quantity_unit; other_receipt_quantity_basis; other_receipt_quantity_method; other_receipt_quantity_state; other_receipt_quantity_sample_time; other_receipt_quantity_source; paired_transfer_quantity; paired_transfer_quantity_unit; paired_transfer_quantity_basis; paired_transfer_quantity_method; paired_transfer_quantity_state; paired_transfer_quantity_sample_time; paired_transfer_quantity_source; whole_equipment_retained_content_exit; whole_equipment_retained_content_exit_unit; whole_equipment_retained_content_exit_basis; whole_equipment_retained_content_exit_method; whole_equipment_retained_content_exit_state; whole_equipment_retained_content_exit_sample_time; whole_equipment_retained_content_exit_source; other_actual_fate_quantity; other_actual_fate_quantity_unit; other_actual_fate_quantity_basis; other_actual_fate_quantity_method; other_actual_fate_quantity_state; other_actual_fate_quantity_sample_time; other_actual_fate_quantity_source | 测实际存储安装总量及互斥批次充注角色，留存回收已含总量内。仅期初其他收货无且完整设备未覆盖时记出厂新进入。核对全部去向其他收货转移，整机内含液不可相加。空气释放须cp_air独立证明，未知保留未知。执行returns_exclusive及fluid_roles。 按fluid_native_roles匹配每个配对角色供受事件、其他实际收货及整机内含物外退。 | kg actual species/state; independent fraction/density/temperature | 每收货充注回收外转及库存截点 | 实际完整报告库存批次区间及全部关联历史有来源剩余寿命，保留来源结转接受解决 | 本协议相关真实场地厨房餐区供应接受供应商及完整所有用户范围 | 每参考流 | 可追溯原始来源、校准或有来源测量、独立操作数元数据、匹配交接状态时间及完整责任供应商覆盖 |
| cp_fates | onsite_meal_service | 备料未供餐餐盘包装及其他废物 | 真实接收称量去向台账 | stream_id; source_lot; recipe_batch; service_id; state; component_identity; mixture_view_id; receiver_id; handoff_time; treatment_route; coverage_id; rework_parent; sample_id; period_id; gross_mass; gross_mass_unit; gross_mass_basis; gross_mass_method; gross_mass_state; gross_mass_sample_time; gross_mass_source; tare_mass; tare_mass_unit; tare_mass_basis; tare_mass_method; tare_mass_state; tare_mass_sample_time; tare_mass_source; net_mass; net_mass_unit; net_mass_basis; net_mass_method; net_mass_state; net_mass_sample_time; net_mass_source; water_mass; water_mass_unit; water_mass_basis; water_mass_method; water_mass_state; water_mass_sample_time; water_mass_source; nonwater_mass; nonwater_mass_unit; nonwater_mass_basis; nonwater_mass_method; nonwater_mass_state; nonwater_mass_sample_time; nonwater_mass_source; fat_mass; fat_mass_unit; fat_mass_basis; fat_mass_method; fat_mass_state; fat_mass_sample_time; fat_mass_source; solute_mass; solute_mass_unit; solute_mass_basis; solute_mass_method; solute_mass_state; solute_mass_sample_time; solute_mass_source; component_fraction; component_fraction_unit; component_fraction_basis; component_fraction_method; component_fraction_state; component_fraction_sample_time; component_fraction_source; piece_count; piece_count_unit; piece_count_basis; piece_count_method; piece_count_state; piece_count_sample_time; piece_count_source; unit_mass; unit_mass_unit; unit_mass_basis; unit_mass_method; unit_mass_state; unit_mass_sample_time; unit_mass_source; raw_quantity; raw_quantity_unit; raw_quantity_basis; raw_quantity_method; raw_quantity_state; raw_quantity_sample_time; raw_quantity_source; target_driver; target_driver_unit; target_driver_basis; target_driver_method; target_driver_state; target_driver_sample_time; target_driver_source; all_consumer_driver; all_consumer_driver_unit; all_consumer_driver_basis; all_consumer_driver_method; all_consumer_driver_state; all_consumer_driver_sample_time; all_consumer_driver_source; flow_row_id; actual_identity_case; actual_substance_or_material; actual_origin_and_medium; actual_state_and_gate; case_activation_evidence; typed_or_residual_quantity; quantity_exclusion_links; whole_total_reconciliation; unresolved_occurrence_not_zero | 逐实际备料未供餐餐盘包装清洁物流称毛皮净及状态，确认接收交接及真实处理责任。独立追踪拒收重做返工留存可用路径。整流和采样组分不可相加，按food_fate_boundary终端平衡排除内部使用重复视图；不允许消失或自动废物收益。 | kg actual wet/dry state; independent fractions/counts | 每批次收集交接及完整期间结算 | 实际完整报告库存批次区间及全部关联历史有来源剩余寿命，保留来源结转接受解决 | 本协议相关真实场地厨房餐区供应接受供应商及完整所有用户范围 | 每参考流 | 可追溯原始来源、校准或有来源测量、独立操作数元数据、匹配交接状态时间及完整责任供应商覆盖 |
| cp_air | onsite_meal_service | 实际物种介质水汽 | 真实测量或来源因子台账 | species_id; particle_size_class; medium; source_event; equipment_id; sample_id; reported_basis; factor_reference_id; composition_source; fate_source; capture_stream_id; coverage_id; period_id; particle_size_value; particle_size_value_unit; particle_size_value_basis; particle_size_value_method; particle_size_value_state; particle_size_value_sample_time; particle_size_value_source; measured_release; measured_release_unit; measured_release_basis; measured_release_method; measured_release_state; measured_release_sample_time; measured_release_source; activity_quantity; activity_quantity_unit; activity_quantity_basis; activity_quantity_method; activity_quantity_state; activity_quantity_sample_time; activity_quantity_source; factor; factor_unit; factor_basis; factor_method; factor_state; factor_sample_time; factor_source; component_fraction; component_fraction_unit; component_fraction_basis; component_fraction_method; component_fraction_state; component_fraction_sample_time; component_fraction_source; release_fraction; release_fraction_unit; release_fraction_basis; release_fraction_method; release_fraction_state; release_fraction_sample_time; release_fraction_source; capture_mass; capture_mass_unit; capture_mass_basis; capture_mass_method; capture_mass_state; capture_mass_sample_time; capture_mass_source; water_mass; water_mass_unit; water_mass_basis; water_mass_method; water_mass_state; water_mass_sample_time; water_mass_source; nonwater_mass; nonwater_mass_unit; nonwater_mass_basis; nonwater_mass_method; nonwater_mass_state; nonwater_mass_sample_time; nonwater_mass_source; duration; duration_unit; duration_basis; duration_method; duration_state; duration_sample_time; duration_source; raw_quantity; raw_quantity_unit; raw_quantity_basis; raw_quantity_method; raw_quantity_state; raw_quantity_sample_time; raw_quantity_source; target_driver; target_driver_unit; target_driver_basis; target_driver_method; target_driver_state; target_driver_sample_time; target_driver_source; all_consumer_driver; all_consumer_driver_unit; all_consumer_driver_basis; all_consumer_driver_method; all_consumer_driver_state; all_consumer_driver_sample_time; all_consumer_driver_source; flow_row_id; actual_identity_case; actual_substance_or_material; actual_origin_and_medium; actual_state_and_gate; case_activation_evidence; typed_or_residual_quantity; quantity_exclusion_links; whole_total_reconciliation; unresolved_occurrence_not_zero | 测实际物种空气水土分室或用有文件兼容活动因子组成去向且每操作数独立原生元数据。水汽须纯水证据，捕集油尘属废物，不将差额当排放；不能把NOx、VOC、PM总称绑定具体物种。保留不确定性及未知。 | kg species to actual medium; factor/activity own units | 每实际源批次事件采样期间 | 实际完整报告库存批次区间及全部关联历史有来源剩余寿命，保留来源结转接受解决 | 本协议相关真实场地厨房餐区供应接受供应商及完整所有用户范围 | 每参考流 | 可追溯原始来源、校准或有来源测量、独立操作数元数据、匹配交接状态时间及完整责任供应商覆盖 |
| cp_land | onsite_meal_service | 实际占用及转化 | 真实空间时间土地台账 | site_polygon; land_state; location_source; owner_id; life_stage; provider_coverage; from_state; to_state; event_id; event_date; period_start; period_end; actual_completion_id; consumer_id; occupation_area; occupation_area_unit; occupation_area_basis; occupation_area_method; occupation_area_state; occupation_area_sample_time; occupation_area_source; occupation_duration; occupation_duration_unit; occupation_duration_basis; occupation_duration_method; occupation_duration_state; occupation_duration_sample_time; occupation_duration_source; transformed_area; transformed_area_unit; transformed_area_basis; transformed_area_method; transformed_area_state; transformed_area_sample_time; transformed_area_source; raw_quantity; raw_quantity_unit; raw_quantity_basis; raw_quantity_method; raw_quantity_state; raw_quantity_sample_time; raw_quantity_source; target_driver; target_driver_unit; target_driver_basis; target_driver_method; target_driver_state; target_driver_sample_time; target_driver_source; all_consumer_driver; all_consumer_driver_unit; all_consumer_driver_basis; all_consumer_driver_method; all_consumer_driver_state; all_consumer_driver_sample_time; all_consumer_driver_source; conversion_factor; conversion_factor_unit; conversion_factor_basis; conversion_factor_method; conversion_factor_state; conversion_factor_sample_time; conversion_factor_source | 取得实际空间范围状态和有来源占用期间，仅有证据时采真实转化前后事件并匹配面积日期责任。准确匹配建筑供应商覆盖，实际补全未覆盖职责一次。原生面积乘时间及面积区别于Count；执行full_life_land和all_user_pool。 | m2*a actual interval conversion; independent m2 | 实际占用期间及转化事件 | 实际完整报告库存批次区间及全部关联历史有来源剩余寿命，保留来源结转接受解决 | 本协议相关真实场地厨房餐区供应接受供应商及完整所有用户范围 | 每参考流 | 可追溯原始来源、校准或有来源测量、独立操作数元数据、匹配交接状态时间及完整责任供应商覆盖 |

### 计算规则

| rule_id | 适用对象 | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| fulfilled_count | full_waiter_meal_service | N_target为service_gate下实际组分交接撤回核对后的唯一兼容完成场次，部分供餐保留独立范围。 | service_id; gate_evidence; component_id; reversal_id; cp_service | N_target |  |
| attribute_pool | 全部清单行 | 逐记录按all_user_pool直接追踪，或兼容原始量乘该记录目标驱动除完整正所有用户驱动后求和，保留必要闲置N0结转责任。 | raw_quantity; target_driver; all_consumer_driver; coverage_id | assigned_target_quantity |  |
| normalize_once | 全部清单行 | 同配置目标归属量只除同范围正N_target一次，已归一化不变，N_target=0保留来源接受解决链不除。 | assigned_target_quantity; N_target | per_reference_quantity |  |
| stock_returns | actual supplies fluids food | 按真实期初收货期末配对转移执行returns_exclusive，总领用加未用退料输出或净耗用省略该输出，不能并用。 | opening_mass; inbound_mass; closing_mass; paired_transfer_mass; unused_return_mass | exclusive_stock_quantity |  |
| food_reconcile | food stocks and fates | 按food_fate_boundary核对同基准库存批次食物组分水状态，包括配方投入供餐添餐留存可用废物空气去向；内部转移及整体组分不可相加，不明差额保留未知。 | cp_food; cp_water; cp_fates; cp_air | state_balance_and_gaps |  |
| freight_sum | freight | 求和实际唯一分段湿货载乘距离、适用EACH次数及该记录份额，份额在和内，TOTAL不变；已覆盖段只排除一次，最后才normalize_once。 | packed_wet_payload; distance; repetition; record_share; cp_freight | attributable_freight |  |
| asset_life | asset_lifecycle; reusable_lifecycle | 按full_life_land及full_life_once使用完整寿命分子和兼容历史加有来源剩余服务或实际终结总量，保留所有用户更换终结及独占供应商阶段覆盖。 | cp_assets; cp_land; cp_providers | attributable_full_life_duty |  |
| fluid_reconcile | equipment_fluid_supply; fluid fates | 按fluid_roles核对互斥期初收货出厂进入期末回收外转释放角色，出厂新进入不得同时在期初其他收货；整机内含物不可相加，未知不是释放。 | cp_fluids; cp_air; cp_assets | exclusive_fluid_balance |  |
| source_species | direct_water_withdrawal; other_direct_species; water_vapour_to_air; other_direct_species_co2_fossil_air; other_direct_species_methane_fossil_air; other_direct_species_nitrous_oxide_air | 仅用实际兼容测量或有来源活动因子组成去向且各自具备单位基准方法状态采样时间来源，不虚造因子得率物种或介质。 | cp_air; cp_water | actual_species_quantities |  |

### 数据质量要求

| requirement_id | 适用对象 | Requirement | Evidence |
| --- | --- | --- | --- |
| identity_native | 全部交换 | 有条件卡须展开真实具体材料物种状态交接方向类型属性单位接受方，并在最终交换前核验。Count仅支持Item(s)，不证明餐等效或服务身份。 | 实际详情支持证据及原生记录来源 |
| menu_gate_quality | full_waiter_meal_service | 必须实际声明菜单组分配方份量服务版本及完整供应交接，不等配置不得用通用餐数人数合并。 | cp_service; service_gate |
| native_operand_quality | 全部采集协议 | 每个独立数字字段自带单位基准方法状态采样时间来源，包括样品组成因子面积时间寿命驱动目标所有用户份额及次数，缺量不是零。 | 原始元数据字段审计 |
| full_scope_quality | 全部职责 | 完整使用前必须闭合实际全部输出期间责任池、完整资产土地供应商接收阶段、更换留存物料和N0来源接受最终解决。 | 覆盖矩阵及真实补全阶段 |
| honest_source_quality | 全部证据 | 运营方网页仅为定性来源例子，不据其认定通用配方餐量营养时间温度寿命因子范围；必须真实兼容现场记录。身份数值未知保留缺口并限制使用。 | 来源范围及实际日期场址适用性 |
| complete_food_ingredients | onsite_meal_service | 最终使用前，按下方完整采集定义将`food_ingredients`的每项真实情形展开为独立身份交换，完成原生数量、状态、来源、接收方及覆盖证据。缺UUID或数量不能作零；保留固定情形的数量须从余项排除。 | `cp_food` |
| complete_recipe_water_ice | onsite_meal_service | 最终使用前，按下方完整采集定义将`recipe_water_ice`的每项真实情形展开为独立身份交换，完成原生数量、状态、来源、接收方及覆盖证据。缺UUID或数量不能作零；保留固定情形的数量须从余项排除。 | `cp_food` |
| complete_electricity | onsite_meal_service | 最终使用前，按下方完整采集定义将`electricity`的每项真实情形展开为独立身份交换，完成原生数量、状态、来源、接收方及覆盖证据。缺UUID或数量不能作零；保留固定情形的数量须从余项排除。 | `cp_energy` |
| complete_operating_fuels | onsite_meal_service | 最终使用前，按下方完整采集定义将`operating_fuels`的每项真实情形展开为独立身份交换，完成原生数量、状态、来源、接收方及覆盖证据。缺UUID或数量不能作零；保留固定情形的数量须从余项排除。 | `cp_energy` |
| complete_purchased_thermal | onsite_meal_service | 最终使用前，按下方完整采集定义将`purchased_thermal`的每项真实情形展开为独立身份交换，完成原生数量、状态、来源、接收方及覆盖证据。缺UUID或数量不能作零；保留固定情形的数量须从余项排除。 | `cp_energy` |
| complete_operating_water | onsite_meal_service | 最终使用前，按下方完整采集定义将`operating_water`的每项真实情形展开为独立身份交换，完成原生数量、状态、来源、接收方及覆盖证据。缺UUID或数量不能作零；保留固定情形的数量须从余项排除。 | `cp_water` |
| complete_cleaning_supplies | onsite_meal_service | 最终使用前，按下方完整采集定义将`cleaning_supplies`的每项真实情形展开为独立身份交换，完成原生数量、状态、来源、接收方及覆盖证据。缺UUID或数量不能作零；保留固定情形的数量须从余项排除。 | `cp_supplies` |
| complete_single_use_serving | onsite_meal_service | 最终使用前，按下方完整采集定义将`single_use_serving`的每项真实情形展开为独立身份交换，完成原生数量、状态、来源、接收方及覆盖证据。缺UUID或数量不能作零；保留固定情形的数量须从余项排除。 | `cp_supplies` |
| complete_asset_lifecycle | onsite_meal_service | 最终使用前，按下方完整采集定义将`asset_lifecycle`的每项真实情形展开为独立身份交换，完成原生数量、状态、来源、接收方及覆盖证据。缺UUID或数量不能作零；保留固定情形的数量须从余项排除。 | `cp_assets` |
| complete_reusable_lifecycle | onsite_meal_service | 最终使用前，按下方完整采集定义将`reusable_lifecycle`的每项真实情形展开为独立身份交换，完成原生数量、状态、来源、接收方及覆盖证据。缺UUID或数量不能作零；保留固定情形的数量须从余项排除。 | `cp_assets` |
| complete_completed_support_providers | onsite_meal_service | 最终使用前，按下方完整采集定义将`completed_support_providers`的每项真实情形展开为独立身份交换，完成原生数量、状态、来源、接收方及覆盖证据。缺UUID或数量不能作零；保留固定情形的数量须从余项排除。 | `cp_providers` |
| complete_freight | onsite_meal_service | 最终使用前，按下方完整采集定义将`freight`的每项真实情形展开为独立身份交换，完成原生数量、状态、来源、接收方及覆盖证据。缺UUID或数量不能作零；保留固定情形的数量须从余项排除。 | `cp_freight` |
| complete_equipment_fluid_supply | onsite_meal_service | 最终使用前，按下方完整采集定义将`equipment_fluid_supply`的每项真实情形展开为独立身份交换，完成原生数量、状态、来源、接收方及覆盖证据。缺UUID或数量不能作零；保留固定情形的数量须从余项排除。 | `cp_fluids` |
| complete_direct_water_withdrawal | onsite_meal_service | 最终使用前，按下方完整采集定义将`direct_water_withdrawal`的每项真实情形展开为独立身份交换，完成原生数量、状态、来源、接收方及覆盖证据。缺UUID或数量不能作零；保留固定情形的数量须从余项排除。 | `cp_water` |
| complete_land_occupation | onsite_meal_service | 最终使用前，按下方完整采集定义将`land_occupation`的每项真实情形展开为独立身份交换，完成原生数量、状态、来源、接收方及覆盖证据。缺UUID或数量不能作零；保留固定情形的数量须从余项排除。 | `cp_land` |
| complete_land_transformation_from | onsite_meal_service | 最终使用前，按下方完整采集定义将`land_transformation_from`的每项真实情形展开为独立身份交换，完成原生数量、状态、来源、接收方及覆盖证据。缺UUID或数量不能作零；保留固定情形的数量须从余项排除。 | `cp_land` |
| complete_unused_supply_return | onsite_meal_service | 最终使用前，按下方完整采集定义将`unused_supply_return`的每项真实情形展开为独立身份交换，完成原生数量、状态、来源、接收方及覆盖证据。缺UUID或数量不能作零；保留固定情形的数量须从余项排除。 | `cp_supplies` |
| complete_usable_food_transfer | onsite_meal_service | 最终使用前，按下方完整采集定义将`usable_food_transfer`的每项真实情形展开为独立身份交换，完成原生数量、状态、来源、接收方及覆盖证据。缺UUID或数量不能作零；保留固定情形的数量须从余项排除。 | `cp_food` |
| complete_usable_reusable_transfer | onsite_meal_service | 最终使用前，按下方完整采集定义将`usable_reusable_transfer`的每项真实情形展开为独立身份交换，完成原生数量、状态、来源、接收方及覆盖证据。缺UUID或数量不能作零；保留固定情形的数量须从余项排除。 | `cp_assets` |
| complete_usable_recovered_fluid | onsite_meal_service | 最终使用前，按下方完整采集定义将`usable_recovered_fluid`的每项真实情形展开为独立身份交换，完成原生数量、状态、来源、接收方及覆盖证据。缺UUID或数量不能作零；保留固定情形的数量须从余项排除。 | `cp_fluids` |
| complete_preparation_waste | onsite_meal_service | 最终使用前，按下方完整采集定义将`preparation_waste`的每项真实情形展开为独立身份交换，完成原生数量、状态、来源、接收方及覆盖证据。缺UUID或数量不能作零；保留固定情形的数量须从余项排除。 | `cp_fates` |
| complete_packaging_waste | onsite_meal_service | 最终使用前，按下方完整采集定义将`packaging_waste`的每项真实情形展开为独立身份交换，完成原生数量、状态、来源、接收方及覆盖证据。缺UUID或数量不能作零；保留固定情形的数量须从余项排除。 | `cp_fates` |
| complete_cleaning_capture_waste | onsite_meal_service | 最终使用前，按下方完整采集定义将`cleaning_capture_waste`的每项真实情形展开为独立身份交换，完成原生数量、状态、来源、接收方及覆盖证据。缺UUID或数量不能作零；保留固定情形的数量须从余项排除。 | `cp_fates` |
| complete_retired_asset_waste | onsite_meal_service | 最终使用前，按下方完整采集定义将`retired_asset_waste`的每项真实情形展开为独立身份交换，完成原生数量、状态、来源、接收方及覆盖证据。缺UUID或数量不能作零；保留固定情形的数量须从余项排除。 | `cp_assets` |
| complete_contained_wastewater | onsite_meal_service | 最终使用前，按下方完整采集定义将`contained_wastewater`的每项真实情形展开为独立身份交换，完成原生数量、状态、来源、接收方及覆盖证据。缺UUID或数量不能作零；保留固定情形的数量须从余项排除。 | `cp_water` |
| complete_contained_fluid_waste | onsite_meal_service | 最终使用前，按下方完整采集定义将`contained_fluid_waste`的每项真实情形展开为独立身份交换，完成原生数量、状态、来源、接收方及覆盖证据。缺UUID或数量不能作零；保留固定情形的数量须从余项排除。 | `cp_fluids` |
| complete_other_direct_species | onsite_meal_service | 最终使用前，按下方完整采集定义将`other_direct_species`的每项真实情形展开为独立身份交换，完成原生数量、状态、来源、接收方及覆盖证据。缺UUID或数量不能作零；保留固定情形的数量须从余项排除。 | `cp_air` |
| complete_land_transformation_to | onsite_meal_service | 最终使用前，按下方完整采集定义将`land_transformation_to`的每项真实情形展开为独立身份交换，完成原生数量、状态、来源、接收方及覆盖证据。缺UUID或数量不能作零；保留固定情形的数量须从余项排除。 | `cp_land` |


### 强制清单完成记录

以下记录是强制物理采集和情形展开要求，不是单条清单交换。原有节点、方向、流类型、数量基准、采集协议、库存去向、供应接收和来源义务全部继续有效。正文对这些编号的引用对应这些完成要求。前景数据集完成前，必须将每项真实物料、服务、资产全寿命、废物流或物种介质分别展开为具原生数量和排他覆盖的独立身份交换。保留固定卡只覆盖其真实受支持情形，其余真实情形须无重叠协调。身份、发生或数量缺失仍待采集，不能填零或删项。内部配对交接和组分审计视图不可相加；必要全寿命与供应商阶段必须实际完成一次。

#### food_ingredients

责任节点与原流角色：onsite_meal_service / inputs / product

按配方角色、物种、SKU、批次及生鲜、冷藏、冷冻、熟制状态分别记录动植物配料、预制组分、油脂、酱料、调味料及配套饮品固液组分。只有实际组分记录证明时才认定多投入配方；整体混合物与配料是不可相加的核对视图。

- 选定流：实际供应状态的食物配料及配套饮品组分
- 流属性/单位：Mass / kg
- 数量规则：按cp_food记录每参考流实际独占归属原生量，执行same_reference_once及真实条件启用，N_target=0保留不除。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_food`
- 来源：`ivy-kitchen-current`; `marriott-signature-kitchen-current`

数量范围证据需求：必须真实匹配原生场址供应商状态数量证据，不支持通用数值范围或因子；实际数据缺失限制使用且不是零。

#### recipe_water_ice

责任节点与原流角色：onsite_meal_service / inputs / product

实际加入或保留于食物饮品组成中的水和冰；区分购水、特定水源直接取水及独立清洁用水。蒸发水单列真实去向，不采用通用得率损失。

本卡为独立身份分支`recipe_water_ice_liquid_tap`之外的余项清单要求。已计入分支的实际数量不再计入本余项交换，原类目总量仅作不可相加的协调审计。其他实际材料、状态、来源或介质仍须保留自身经核实的身份、原生数量及供应接收责任；记录缺失时，不推定条件分支发生、不发生或数量为零。

- 选定流：实际参与食物组成的水与冰
- 流属性/单位：Mass / kg
- 数量规则：按cp_food记录每参考流实际独占归属原生量，执行same_reference_once及真实条件启用，N_target=0保留不除。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_food`

数量范围证据需求：必须真实匹配原生场址供应商状态数量证据，不支持通用数值范围或因子；实际数据缺失限制使用且不是零。

#### electricity

责任节点与原流角色：onsite_meal_service / inputs / product

实际备料、烹饪、保温、冷藏、通风、照明、供餐系统、洗涤餐具及必要待备闲置用电。相同供应商已覆盖用电只排除一次；不用铭牌值或通用每餐因子。

本卡为独立身份分支`electricity_ac`之外的余项清单要求。已计入分支的实际数量不再计入本余项交换，原类目总量仅作不可相加的协调审计。其他实际材料、状态、来源或介质仍须保留自身经核实的身份、原生数量及供应接收责任；记录缺失时，不推定条件分支发生、不发生或数量为零。

- 选定流：实际厨房餐区及支持用电
- 流属性/单位：Energy / kWh
- 数量规则：按cp_energy记录每参考流实际独占归属原生量，执行same_reference_once及真实条件启用，N_target=0保留不除。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_energy`

数量范围证据需求：必须真实匹配原生场址供应商状态数量证据，不支持通用数值范围或因子；实际数据缺失限制使用且不是零。

#### operating_fuels

责任节点与原流角色：onsite_meal_service / inputs / product

仅记录有证据的真实燃料及设备使用。原生体积、密度、温度和热值基准分别取证；实际燃烧物种及介质须测量或采用匹配来源，不能藏于燃料质量中。

- 选定流：实际烹饪及支持燃料供应
- 流属性/单位：Mass / kg
- 数量规则：按cp_energy记录每参考流实际独占归属原生量，执行same_reference_once及真实条件启用，N_target=0保留不除。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_energy`

数量范围证据需求：必须真实匹配原生场址供应商状态数量证据，不支持通用数值范围或因子；实际数据缺失限制使用且不是零。

#### purchased_thermal

责任节点与原流角色：onsite_meal_service / inputs / product

如实际存在，按明确计量、状态、温度和焓值交接点记录外供有效冷热服务。不得重复供应商燃料、装置、损失，也不得把直接电制冷再记为购买冷量。

本卡为独立身份分支`purchased_thermal_delivered_heat`之外的余项清单要求。已计入分支的实际数量不再计入本余项交换，原类目总量仅作不可相加的协调审计。其他实际材料、状态、来源或介质仍须保留自身经核实的身份、原生数量及供应接收责任；记录缺失时，不推定条件分支发生、不发生或数量为零。

- 选定流：实际外供有效供热或供冷
- 流属性/单位：Energy / MJ
- 数量规则：按cp_energy记录每参考流实际独占归属原生量，执行same_reference_once及真实条件启用，N_target=0保留不除。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_energy`

数量范围证据需求：必须真实匹配原生场址供应商状态数量证据，不支持通用数值范围或因子；实际数据缺失限制使用且不是零。

#### operating_water

责任节点与原流角色：onsite_meal_service / inputs / product

按用途记录食物清洗、洗碗、消毒、清洁和设备用水。同一水回用或配方水不再算一次供水；购入用水不等于排污量。

本卡为独立身份分支`operating_water_liquid_tap`之外的余项清单要求。已计入分支的实际数量不再计入本余项交换，原类目总量仅作不可相加的协调审计。其他实际材料、状态、来源或介质仍须保留自身经核实的身份、原生数量及供应接收责任；记录缺失时，不推定条件分支发生、不发生或数量为零。

- 选定流：实际购买的清洗清洁及设备用水
- 流属性/单位：Volume / m3
- 数量规则：按cp_water记录每参考流实际独占归属原生量，执行same_reference_once及真实条件启用，N_target=0保留不除。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_water`

数量范围证据需求：必须真实匹配原生场址供应商状态数量证据，不支持通用数值范围或因子；实际数据缺失限制使用且不是零。

#### cleaning_supplies

责任节点与原流角色：onsite_meal_service / inputs / product

逐项记录清洁剂、擦拭物、过滤物、吸附物的SKU、浓缩品、配置溶液或活性物状态、组成及包装。溶液质量不是全量活性成分。

本卡为独立身份分支`cleaning_supplies_synthetic_detergent`之外的余项清单要求。已计入分支的实际数量不再计入本余项交换，原类目总量仅作不可相加的协调审计。其他实际材料、状态、来源或介质仍须保留自身经核实的身份、原生数量及供应接收责任；记录缺失时，不推定条件分支发生、不发生或数量为零。

- 选定流：实际清洁消毒及卫生材料
- 流属性/单位：Mass / kg
- 数量规则：按cp_supplies记录每参考流实际独占归属原生量，执行same_reference_once及真实条件启用，N_target=0保留不除。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_supplies`

数量范围证据需求：必须真实匹配原生场址供应商状态数量证据，不支持通用数值范围或因子；实际数据缺失限制使用且不是零。

#### single_use_serving

责任节点与原流角色：onsite_meal_service / inputs / product

如使用，记录实际纸巾、包材、杯盒及其他耗材。原料供应已覆盖的包装建立链接，不能再次采购计入。可重复使用餐具属于全寿命资产。

- 选定流：实际一次性供餐及包装用品
- 流属性/单位：Mass / kg
- 数量规则：按cp_supplies记录每参考流实际独占归属原生量，执行same_reference_once及真实条件启用，N_target=0保留不除。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_supplies`
- 来源：`ikea-counter-service-current`

数量范围证据需求：必须真实匹配原生场址供应商状态数量证据，不支持通用数值范围或因子；实际数据缺失限制使用且不是零。

#### asset_lifecycle

责任节点与原流角色：onsite_meal_service / inputs / product

实际建筑、场地工程、装修、烹饪保温制冷通风洗碗设备、家具及系统，覆盖制造、安装、维护、更换和寿命终结以及所有用户和期间。土地原生界面不能用资产Count替代。

- 选定流：完整寿命的场地建筑厨房及餐区资产
- 流属性/单位：Count / Item(s)
- 数量规则：按cp_assets记录每参考流实际独占归属原生量，执行same_reference_once及真实条件启用，N_target=0保留不除。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_assets`

数量范围证据需求：必须真实匹配原生场址供应商状态数量证据，不支持通用数值范围或因子；实际数据缺失限制使用且不是零。

#### reusable_lifecycle

责任节点与原流角色：onsite_meal_service / inputs / product

按材料、状态和单件标识或有证据的等效量记录盘、刀叉、杯、托盘、布草和重复载具。清洗是真实运行，不是重复新制造；遗失破损及可用留存物须有真实去向。

- 选定流：完整寿命的重复使用餐具织物及服务载具
- 流属性/单位：Count / Item(s)
- 数量规则：按cp_assets记录每参考流实际独占归属原生量，执行same_reference_once及真实条件启用，N_target=0保留不除。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_assets`
- 来源：`marriott-manho-service-current`; `ikea-counter-service-current`

数量范围证据需求：必须真实匹配原生场址供应商状态数量证据，不支持通用数值范围或因子；实际数据缺失限制使用且不是零。

#### completed_support_providers

责任节点与原流角色：onsite_meal_service / inputs / product

有条件记录维护、已完成外部布草护理、清洁等支持，要求原生交付点与完整准确生命周期覆盖。不得购买笼统完整餐饮服务掩盖真实现场厨房；未覆盖阶段必须实际补全一次。

- 选定流：实际完成的配套支持供应商服务
- 流属性/单位：Count / Item(s)
- 数量规则：按cp_providers记录每参考流实际独占归属原生量，执行same_reference_once及真实条件启用，N_target=0保留不除。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_providers`

数量范围证据需求：必须真实匹配原生场址供应商状态数量证据，不支持通用数值范围或因子；实际数据缺失限制使用且不是零。

#### freight

责任节点与原流角色：onsite_meal_service / inputs / product

记录真实供受方分段及带水分食物、包装和载具的实际湿货载。只扣非货物车重。按准确链接排除供应商已覆盖分段；不默认纳入顾客出行。

- 选定流：实际唯一的原料物料资产及接收端货运
- 流属性/单位：Mass*distance / kg*km
- 数量规则：按cp_freight记录每参考流实际独占归属原生量，执行same_reference_once及真实条件启用，N_target=0保留不除。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_freight`

数量范围证据需求：必须真实匹配原生场址供应商状态数量证据，不支持通用数值范围或因子；实际数据缺失限制使用且不是零。

#### equipment_fluid_supply

责任节点与原流角色：onsite_meal_service / inputs / product

记录实际物种、组成、批次及新液、留存回收液或购入回收液状态。出厂充注属于完整设备或独占补充阶段；记为新进入量时不得同时存在期初及其他收货。

- 选定流：实际独立运行制冷剂及传热液供应
- 流属性/单位：Mass / kg
- 数量规则：按cp_fluids记录每参考流实际独占归属原生量，执行same_reference_once及真实条件启用，N_target=0保留不除。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_fluids`

数量范围证据需求：必须真实匹配原生场址供应商状态数量证据，不支持通用数值范围或因子；实际数据缺失限制使用且不是零。

#### direct_water_withdrawal

责任节点与原流角色：onsite_meal_service / inputs / elementary

有条件记录直接环境取水的水源、位置和水类型；不作为购水。实际数量和源生态系统证据决定具体基本流身份。

- 选定流：实际特定水源直接取水
- 流属性/单位：Volume / m3
- 数量规则：按cp_water记录每参考流实际独占归属原生量，执行same_reference_once及真实条件启用，N_target=0保留不除。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_water`

数量范围证据需求：必须真实匹配原生场址供应商状态数量证据，不支持通用数值范围或因子；实际数据缺失限制使用且不是零。

#### land_occupation

责任节点与原流角色：onsite_meal_service / inputs / elementary

记录实际场地范围、状态、位置、可归属占用期间及原生面积乘时间。供应商或建筑已覆盖的同一土地不可相加；不能因存在餐厅推断生境类型、固定年度时长或转化。

- 选定流：实际有证据期间的土地占用
- 流属性/单位：Area*time / m2*a
- 数量规则：按cp_land记录每参考流实际独占归属原生量，执行same_reference_once及真实条件启用，N_target=0保留不除。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_land`

数量范围证据需求：必须真实匹配原生场址供应商状态数量证据，不支持通用数值范围或因子；实际数据缺失限制使用且不是零。

#### land_transformation_from

责任节点与原流角色：onsite_meal_service / inputs / elementary

仅记录有证据的历史或新转化前状态、日期、面积和责任方，与转化后行配对。适用历史未知是缺口，不能虚构转化。

- 选定流：实际有证据的转化前土地状态
- 流属性/单位：Area / m2
- 数量规则：按cp_land记录每参考流实际独占归属原生量，执行same_reference_once及真实条件启用，N_target=0保留不除。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_land`

数量范围证据需求：必须真实匹配原生场址供应商状态数量证据，不支持通用数值范围或因子；实际数据缺失限制使用且不是零。

#### unused_supply_return

责任节点与原流角色：onsite_meal_service / outputs / product

仅记录与原批次投入可追溯配对的原状态未用外退。只能采用总领用投入加退料输出，或净耗用投入且省略退料输出之一；使用后回收不得冒充未用新料。

- 选定流：实际配对的未使用食物或物料外退
- 流属性/单位：Mass / kg
- 数量规则：按cp_supplies记录每参考流实际独占归属原生量，执行same_reference_once及真实条件启用，N_target=0保留不除。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_supplies`

数量范围证据需求：必须真实匹配原生场址供应商状态数量证据，不支持通用数值范围或因子；实际数据缺失限制使用且不是零。

#### usable_food_transfer

责任节点与原流角色：onsite_meal_service / outputs / product

实际被接收的其他可用输出保留状态、质量、接受方以及原配方负担链接。内部返工或留存食物不是外部输出或新餐；不假设捐赠或回收收益。 按output_projection_once判明实际输出角色及投影阶段；其他独立输出是分配前原生证据，除真实联合输出决定外不得进入目标已分配共产品交换。

- 选定流：实际被接收的可用预制食物外部交接
- 流属性/单位：Mass / kg
- 数量规则：按cp_food及output_projection_once，原始台账保留未归一化真实交接原生数量状态单位；仅实际决定保留的真实联合输出最终交换用所选原生实物输出量除正同配置N_target一次，不乘资源目标份额；已按参考单位记录不再除。本输出专用优先级覆盖归属资源归一化。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_food`

数量范围证据需求：必须真实匹配原生场址供应商状态数量证据，不支持通用数值范围或因子；实际数据缺失限制使用且不是零。

#### usable_reusable_transfer

责任节点与原流角色：onsite_meal_service / outputs / product

按接受方、状态、原生单位和寿命负担处理记录真实可用旧状态产权交接；不能按折旧认定废物或扣新制造。 按output_projection_once判明实际输出角色及投影阶段；其他独立输出是分配前原生证据，除真实联合输出决定外不得进入目标已分配共产品交换。

- 选定流：实际可用设备及重复服务用品外转
- 流属性/单位：Count / Item(s)
- 数量规则：按cp_assets及output_projection_once，原始台账保留未归一化真实交接原生数量状态单位；仅实际决定保留的真实联合输出最终交换用所选原生实物输出量除正同配置N_target一次，不乘资源目标份额；已按参考单位记录不再除。本输出专用优先级覆盖归属资源归一化。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_assets`

数量范围证据需求：必须真实匹配原生场址供应商状态数量证据，不支持通用数值范围或因子；实际数据缺失限制使用且不是零。

#### usable_recovered_fluid

责任节点与原流角色：onsite_meal_service / outputs / product

实际可用旧状态液体外转，区分内部留存回收、未用退料和收集废液；不自动抵减制造。 按output_projection_once判明实际输出角色及投影阶段；其他独立输出是分配前原生证据，除真实联合输出决定外不得进入目标已分配共产品交换。

- 选定流：实际可用回收设备液外转
- 流属性/单位：Mass / kg
- 数量规则：按cp_fluids及output_projection_once，原始台账保留未归一化真实交接原生数量状态单位；仅实际决定保留的真实联合输出最终交换用所选原生实物输出量除正同配置N_target一次，不乘资源目标份额；已按参考单位记录不再除。本输出专用优先级覆盖归属资源归一化。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_fluids`

数量范围证据需求：必须真实匹配原生场址供应商状态数量证据，不支持通用数值范围或因子；实际数据缺失限制使用且不是零。

#### preparation_waste

责任节点与原流角色：onsite_meal_service / outputs / waste

分别识别骨、皮、边角、变质投入、烹饪固体或废煎炸油的湿态、组成及实际接受方。捕集油脂或颗粒是废物，不是环境排放。

- 选定流：实际配料预备及烹饪废物
- 流属性/单位：Mass / kg
- 数量规则：按cp_fates记录每参考流实际独占归属原生量，执行same_reference_once及真实条件启用，N_target=0保留不除。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_fates`

数量范围证据需求：必须真实匹配原生场址供应商状态数量证据，不支持通用数值范围或因子；实际数据缺失限制使用且不是零。

#### packaging_waste

责任节点与原流角色：onsite_meal_service / outputs / waste

记录独立源包装及供餐包装的种类、污染状态和接受路径；继承材料负担在上游只计一次。不得把混合食物废物流内组分再次计废物。

本卡为独立身份分支`packaging_waste_paper_pack`; `packaging_waste_metal_pack`之外的余项清单要求。已计入分支的实际数量不再计入本余项交换，原类目总量仅作不可相加的协调审计。其他实际材料、状态、来源或介质仍须保留自身经核实的身份、原生数量及供应接收责任；记录缺失时，不推定条件分支发生、不发生或数量为零。

- 选定流：实际独立包装及一次供餐用品废物
- 流属性/单位：Mass / kg
- 数量规则：按cp_fates记录每参考流实际独占归属原生量，执行same_reference_once及真实条件启用，N_target=0保留不除。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_fates`

数量范围证据需求：必须真实匹配原生场址供应商状态数量证据，不支持通用数值范围或因子；实际数据缺失限制使用且不是零。

#### cleaning_capture_waste

责任节点与原流角色：onsite_meal_service / outputs / waste

记录实际擦拭物、过滤物、吸附物和油脂捕集物及其组成原生状态；独立测得组分是不可相加视图。

- 选定流：实际废清洁材料过滤物及捕集残余
- 流属性/单位：Mass / kg
- 数量规则：按cp_fates记录每参考流实际独占归属原生量，执行same_reference_once及真实条件启用，N_target=0保留不除。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_fates`

数量范围证据需求：必须真实匹配原生场址供应商状态数量证据，不支持通用数值范围或因子；实际数据缺失限制使用且不是零。

#### retired_asset_waste

责任节点与原流角色：onsite_meal_service / outputs / waste

记录实际退役或破损的接收交接、材料、组分、保留内含物及覆盖责任方。整机与内部液体或材料视图不可相加。

- 选定流：实际报废的场地厨房餐区及重复用品组分
- 流属性/单位：Mass / kg
- 数量规则：按cp_assets记录每参考流实际独占归属原生量，执行same_reference_once及真实条件启用，N_target=0保留不除。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_assets`

数量范围证据需求：必须真实匹配原生场址供应商状态数量证据，不支持通用数值范围或因子；实际数据缺失限制使用且不是零。

#### contained_wastewater

责任节点与原流角色：onsite_meal_service / outputs / waste

按实际排水收集处理交接及接受方记录，污染物、固体、液体、盐和脂肪分别测量。购水量不是废水量，收集废水不是直接基本流排放。

- 选定流：实际收集的备料洗碗及清洁废水
- 流属性/单位：Volume / m3
- 数量规则：按cp_water记录每参考流实际独占归属原生量，执行same_reference_once及真实条件启用，N_target=0保留不除。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_water`

数量范围证据需求：必须真实匹配原生场址供应商状态数量证据，不支持通用数值范围或因子；实际数据缺失限制使用且不是零。

#### contained_fluid_waste

责任节点与原流角色：onsite_meal_service / outputs / waste

实际收集待处理废液带物种、组成和接受方；排除可用回收液及整机外转中保留液。未知差额不是废物或空气排放。

- 选定流：实际收集的制冷剂或设备废液
- 流属性/单位：Mass / kg
- 数量规则：按cp_fluids记录每参考流实际独占归属原生量，执行same_reference_once及真实条件启用，N_target=0保留不除。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_fluids`

数量范围证据需求：必须真实匹配原生场址供应商状态数量证据，不支持通用数值范围或因子；实际数据缺失限制使用且不是零。

#### other_direct_species

责任节点与原流角色：onsite_meal_service / outputs / elementary

仅记录独立取证的燃烧、制冷剂、工艺或废物释放物种及实际空气、水或土壤介质；NOx、VOC、PM等混称须先明确物种、基准或粒径。不得将不明液体或食物质量差额当排放。

本卡为独立身份分支`other_direct_species_co2_fossil_air`; `other_direct_species_methane_fossil_air`; `other_direct_species_nitrous_oxide_air`之外的余项清单要求。已计入分支的实际数量不再计入本余项交换，原类目总量仅作不可相加的协调审计。其他实际材料、状态、来源或介质仍须保留自身经核实的身份、原生数量及供应接收责任；记录缺失时，不推定条件分支发生、不发生或数量为零。

- 选定流：实际向明确介质释放的特定物种
- 流属性/单位：Mass / kg
- 数量规则：按cp_air记录每参考流实际独占归属原生量，执行same_reference_once及真实条件启用，N_target=0保留不除。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_air`

数量范围证据需求：必须真实匹配原生场址供应商状态数量证据，不支持通用数值范围或因子；实际数据缺失限制使用且不是零。

#### land_transformation_to

责任节点与原流角色：onsite_meal_service / outputs / elementary

实际转化后状态、日期、面积须与转化前事件及独占责任方匹配。转化前后及占用是独立原生界面，不能用资产计数。

- 选定流：实际有证据的转化后土地状态
- 流属性/单位：Area / m2
- 数量规则：按cp_land记录每参考流实际独占归属原生量，执行same_reference_once及真实条件启用，N_target=0保留不除。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_land`

数量范围证据需求：必须真实匹配原生场址供应商状态数量证据，不支持通用数值范围或因子；实际数据缺失限制使用且不是零。


## 9. 验证规则

| rule_id | applies_to | rule |
| --- | --- | --- |
| reference_complete | 最终产出 | 检查实际兼容服务版本份量组分及完整接受交接、撤回重做部分供餐和同范围正N_target，不用付款订单容量食用量替代。 |
| route_complete | onsite_meal_service | 检查实际配料配方处理前后状态、真实冷制热制操作、供餐交接及备料保温添餐拒收返工留存可用废物路径，不能以笼统服务隐藏异地移动工业路线。 |
| native_complete | 全部交换 | 检查每独立原生操作数元数据、EACH/TOTAL一次、状态匹配转换、湿干水区别、互斥存货退料液体和全部湿包装货运及逐记录和内份额。 |
| output_period_complete | 全部资源 | 检查所有目标输出接受交接原生量、资源特定完整用户期间驱动及必要闲置失败闭店职责、N0结转最终解决、同正N一次。未归属真实职责阻断完整使用。 |
| life_provider_complete | assets providers land | 检查完整制造安装维护更换终结、所有用户历史加有来源剩余或终结寿命、土地原生面积时间和转化证据、实际补全缺失一次及准确供应商排除。年度N或计划补充不能通过。 |
| fate_species_complete | waste elementary | 检查收集废水废物接受方与真实基本流物种介质、水汽质量、污染物基准粒径、独立释放证据、整体组分不可相加和终端平衡缺口，未知差额不是排放或零。 |
| bilingual_projection_identity | 全部方法规则 | 检查中英相同标识交接限定节点卡原生单位协议规则及确定性当前投影；最终交换前必须解决具体身份支持缺口。检查器通过本身不等于科学审查或可发布。 |
| output_stage_check | 全部产出和投影 | 投影前检查output_role、allocation_stage、谱系来源及实际细分或真实联合共产品决定。其他独立输出原生量保持物理台账证据，不得在资源分配后成为目标份额产品或目标共产品。拒绝整池和目标已分配混基准或重复分配；未分配整池须完整投入输出闭合并指定一步分配。 |
| validate_dedicated_classification_gate | full_waiter_meal_service | 本PCR仅适用于固定餐厅、咖啡餐饮场所或类似设施现场制备食物及配套饮品，并为坐在餐桌、柜台座位或卡座的顾客提供完整侍应服务。记录实际完整服务及各项包含内容的物理交接；品牌、应用送餐按钮或付款均不足以证明。设座自助或仅柜台服务、无座外带、持续合同或特许食堂、活动餐饮、运输运营商配餐及仅饮品服务不属于本专属路线。移动餐车和船上运营需要各自复核的路线，不属于此固定场所子集。 专属范围资格和真实履约交接必须同时有证据。其他分类及不兼容配置不得计入N_target，但全部真实其他消费者、空闲义务和完整寿命负荷须保留于相应资源池。资格未知即阻断使用，不作零。 | unsd-cpc3-meal |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 完成实际身份及完整性审查后用于secondary_dataset及background_dataset |
| downstream_use | 一个参考单位的前景及下游模型：实际完成的固定场所完整侍应供餐场次 |
| allowed_use | 本PCR仅适用于固定餐厅、咖啡餐饮场所或类似设施现场制备食物及配套饮品，并为坐在餐桌、柜台座位或卡座的顾客提供完整侍应服务。记录实际完整服务及各项包含内容的物理交接；品牌、应用送餐按钮或付款均不足以证明。设座自助或仅柜台服务、无座外带、持续合同或特许食堂、活动餐饮、运输运营商配餐及仅饮品服务不属于本专属路线。移动餐车和船上运营需要各自复核的路线，不属于此固定场所子集。 |
| excluded_use | 未经审查移动异地制备运输完成独立工业路线、仅饮品住宿包、通用餐营养得率及不完整交接资产责任池供应商身份数据 |
| required_metadata | actual_site_operator_stationary_onsite_preparation; actual_menu_component_recipe_portion_version; equivalent_quality_and_service_configuration; actual_recipient_serviceoccasion_handoff_state_time; completed_all_included_food_related_beverage_service_gate; partial_declined_refill_recook_reversal_records; actual_raw_prepared_cooked_held_served_food_stocks_fates; actual_native_wet_dry_water_fat_other_component_basis; all_customer_staff_other_output_period_consumers; necessary_idle_failure_N0_source_carry_resolution; full_alluser_site_building_equipment_reusable_life; provider_direct_exclusive_completed_missing_stages; native_each_operand_unit_basis_method_state_sampletime_source; actual_receiver_species_medium_and_identity_gaps |
| required_quality_disclosure | 实际场址日期配方服务来源适用性、实测建模原生量、不确定性及全部未决身份数值范围物种介质寿命供应商责任池土地接收端缺口和使用限制 |
| update_trigger | 配方组分份量服务交接状态场址真实厨房路线、所有用户输出供应商资产土地范围、更换终结原生转换去向身份依据变更 |

## 11. 数据源

| source_id | type | reference | used_for |
| --- | --- | --- | --- |
| unsd-cpc3-2025 | official_guidance | UNSD CPC3 explanatory notes30June2025 printed356–358. https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | 仅63310及63320和相邻食物饮品合同分类范围，不提供路线数量默认值。 |
| marriott-manho-service-current | handbook | Current Marriott ManHo F&B Service Expert job26126497, accessed2026-10-20, operational duties. https://careers.marriott.com/f-b-service-expert-man-ho/job/P1-7075895-0 | 定性实际桌边点单厨房沟通交付回收、重复用品存货清洁；混合活动客房任务不普遍施加。 |
| ivy-kitchen-current | handbook | Current IvyTempleRowBirmingham Chef dePartie page, accessed2026-10-20. https://careers.ivycollection.com/job/6hLlXY9hbVfTwKQ9e8R6GQ | 定性真实同厨房备料团队配方烹饪配料库存清洁，不提供数值配方得率。 |
| marriott-signature-kitchen-current | handbook | Current SingaporeEDITION SignatureRestaurantKitchen job26126377, accessed2026-10-20. https://careers.marriott.com/chef-de-partie-signature-restaurant-kitchen-the-singapore-edition/job/P1-7075872-0 | 定性真实解冻冷热食品份量呈现日志及剩余沟通；不同物业不移植为目标清单。 |
| ikea-counter-service-current | handbook | IKEAFrance official restaurant procedure, accessed2026-10-20, actual steps1–4. https://www.ikea.com/fr/fr/customer-service/knowledge/articles/9ac94d4c-ba28-4d4d-b351-7fcda6b6b68e.html | 实际托盘刀叉杯纸巾、柜台热菜服务及随后自助咖啡证明不同组分交接；员工柜台供菜不能证明完整桌边服务。 |
| mcdonalds-pickup-2023-current | handbook | McDonalds current hosted FAQ dated31March2023, accessed2026-10-20, actual pickup methods. https://www.mcdonalds.com/us/en-us/faq/how-do-i-complete-and-pick-up-my-order.html | 定性桌边柜台路边得来速选项随店和时段变化；物理交接区别于应用收费，不证明完整服务员分类。 |
| chipotle-kitchen-current | handbook | Current WestHartford KitchenLeader job, accessed2026-10-20, operative27–49. https://jobs.chipotle.com/job/west-hartford/kitchen-leader/282/71274739232 | 真实备料烤炒、食物废物库存、清洁及设备维护仅佐证物理厨房职责，不提供目标配方数量。 |
| chipotle-digital-design-2021 | handbook | Chipotle own release16December2021, design45–51, accessed2026-10-20. https://ir.chipotle.com/2021-12-16-CHIPOTLE-TO-OPEN-FIRST-CHIPOTLANE-DIGITAL-KITCHEN | 历史原型有数字专线、窗口得来速、无室内餐厅但有露台座位；只是历史设计例子，不证明当前运营或无座位分类。 |


| unsd-cpc3-meal | official_guidance | UNSD CPC Version 3.0 explanatory notes, 30 June 2025, pp.355–357; https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | 仅用于分类范围，不提供数值因子或服务等效。 |
