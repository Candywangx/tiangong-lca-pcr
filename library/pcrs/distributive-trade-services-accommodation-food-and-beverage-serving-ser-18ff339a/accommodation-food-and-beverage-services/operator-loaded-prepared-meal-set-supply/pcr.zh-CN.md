---
pcr_id: pcr.operator-loaded-prepared-meal-set-supply
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 向运营方装载交付的已制备餐食组合供应

## 1. 范围与适用性

适用于真实场外厨房制备、保护包装、运输并装载至指定运营方厨房舱位/接收关口的餐食组合供应。实际等效菜单配方组分份量包装状态服务版本、质量及完整运营方接收界定输出。航空或其他客户、合同期限品牌CPC标签本身不形成方法。一个真实等效组合可含多个分别追踪组分；航班餐车旅客餐盘发票不自动等于一个组合。 [gategroup-finalizer-current; gategroup-transport-current]

一个一体供应者过程负责真实配制预处理烹调或冷配、保护包装储存发运地面运输运营方装载，及实际合同负责的交付后回收分类清洗清理接收。每真实阶段批次货段退回各有责任与原生记录，不虚构独立厨房产品再购买。参考关口是运营方接收已装载供应，不声称旅客装盘食用或普遍整航班客运。运营方负责的机上储存复热供应单独披露；扩大至已供餐服务须审查实际阶段与新关口。 [gategroup-cook-current; gategroup-equipment-current; gategroup-wash-current; ekfc-airline-current]

包含全部真实食物供应损耗上游及场址土地建筑厨房制冷地面车辆升降车设备复用器具织物全寿命、必要待机失败取消N0责任和接收范围。受保护食物包装餐车数量湿载荷库存含水脂溶质水去向为独立不重复相加视图。不合格部分撤销供应不制造合格输出。不推断通用配方份量营养温度时长航班退回废物寿命因子。

纯现场制备供餐、场外制备现场完成就餐者分餐、仅饮料、完整客运旅程、工业保存冷冻制造及无关休息室零售洗衣能源水生产排除，除非实际审查扩展。普通真实烹调冷藏清洗合同退回仍纳入。公开运营职责描述仅支持定性路线问题，不是目标合同签收或法定安全阈值。缺实际数量身份为受限缺口，不是零。

运营方已接收的装载供应后来未用退回或成为余食，不自动减少完成N_target。实际拒收不合格取消或有证据的接收关口撤销，与交付后退回不同。交付后食物谱系及真实供应方运输清洗去向责任保留，不另增最终输出或自动负信用。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.operator-loaded-prepared-meal-set-supply |
| classification_refs | CPC3.0:63392 proxy |
| covered_products | 运营方实际装载接收关口的等效已制备受保护餐食供应及实际供应方回收清洗责任 |
| excluded_products | 旅客供餐食用整航班纯现场服务、不等效份量组分、计划能力及未审查工业路线 |
| representative_product | 实际向运营方装载交付并接收的等效已制备餐食组合供应，实际菜单配方份量包装状态版本 |
| production_route | 实际原料->厨房配制处理->保护包装储存->地面运输装载运营方接收->实际合同退回清洗接收 |
| market_state | 实际物理装载被接收的已制备供应，无通用冷热熟制状态 |


## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 实际向运营方装载交付并接收的等效已制备餐食组合供应 |
| How much | 1 Item(s) |
| How well | 一个真实等效完整组分份量菜单配方包装状态版本，经operator_gate实际装载接收，质量变更部分撤销核清 |
| How long or cycle | 真实批次装载接收退回清洗库存报告期间全寿命阶段及时区UTC偏移夏令时实际时长；无默认航时 |
| reference_flow_link | meal_set_supply |

| 字段 | 值 |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | 实际向运营方装载交付并接收的等效已制备餐食组合供应 |
| Reference flow property | Count `01846770-4cfe-4a25-8ad9-919d8d378345` |
| Reference unit group | Units of items `5beb6eed-33a9-47b8-9ede-1dfe8f679159` |
| Reference unit | Item(s) |
| Required qualifiers | actual_provider_kitchen_loading_operator_galley; actual_menu_recipe_components_portion_pack_service_version; actual_operator_loaded_receipt_state_time_acceptance; actual_required_quantity_quality_and_order_changes; no_assumed_flight_trolley_passenger_equivalence; actual_contract_owned_return_wash_receiver_duties; actual_food_pack_wet_cargo_stock_water_native_views; all_outputs_users_periods_idle_failed_N0_resolution; complete_alluser_asset_land_reusable_life; exclusive_completed_provider_missing_stages; each_numeric_operand_unit_basis_method_state_sample_time_source |


## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| reference_gate | meal_set_supply | Count | Item(s) | 仅计入实际装载至指定运营方厨房舱位并被接收的完整等效已制备餐食组合；核对组成、质量、数量、订单变更及接收/撤销。实际合同交付关口须有记录；公开岗位页不是签收凭证。备餐可用量、计划餐量、航班、旅客、餐车、发票或食用质量均不能替代。 |
| native_operand | 全部清单行 | 实际相容原生属性 | 实际原生单位 | 每独立数字自有值单位基准方法状态取样时间来源，含份额因子库存寿命。仅有来源状态兼容换算；EACH重复一次，TOTAL不重复。 |
| food_water_state | ingredients; recipe_water; food fates; recipe_water_liquid_tap | Mass; actual water content | kg 实际状态 | 保留生料解冻已制备烹调储存装载退回各湿干可食骨皮水脂溶质状态、配方库存量，不设通用得率。同样本纯水湿基w=水/湿质量、干基r=水/非水干质量才满足w=r/(1+r)，先换百分数；含其他挥发物的干燥失重不等于水。终端衡算仅实际外部终端流出及真实期末库存；内部用途移交、组分含量和重复接收视图不可相加。水蒸气是向空气的水物种质量基本流，容纳废水是废物流。须独立物种介质粒径基准因子证据；未知差额不是排放或零。 |
| normalization_once | 全部清单行 | 原生属性 | 每 Item(s) | 先直接物理追溯及独立过程划分。真实共享责任按每条兼容量乘该条目标驱动量除完整正全部使用者驱动量后再求和。包含每客户菜单航班任务员工非餐使用者和期间；必要待机失败取消停业准备资源仍在责任池。N_target=0或零移交保留来源、结转、接收和最终归属，不除零、不造输出；责任未明不得完整。已归属目标总量仍除相同正目标N一次；仅已按参考流归一量不变。 |
| stock_exclusivity | all stocks and fluids | Mass | kg 实际状态 | 收货净量仅扣皮重，先不扣外退。毛领用S=归属期初+入库-期末，并计实际成对责任移交。采用S投入加匹配未用退货输出，或(S-未用退货)投入并省略该输出。已用器具食物流体保留原负荷，不抵新料、不自动给信用。流体储存安装回收角色互斥；期初不存在的新设备原装充注为设备入场，不是再次采购。追踪全部有用废物整机保留含量及独立直接释放；整物组分不可相加，未知差额不是排放。 |


## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 实际运营厨房提供者及指定运营方装载接收、等效受保护餐食状态版本 |
| starting_condition_role | 真实已制备供应生产及支持全寿命责任，既有资产不免费 |
| product_classification_scope | CPC63392 proxy; actual bounded operator-loaded supply route |
| recursive_input_rule | 不递归采购同最终供应；外购已制备组分保留上游，内部收货退回传原负荷一次 |
| upstream_dataset_requirement | 包含实际食物材料公用工程上游及损耗，以及场址建筑装修厨房车辆升降车制冷设备复用器具织物的制造安装维护更换终末处理。每物理阶段由一个完整提供者或实际直接责任覆盖；缺失阶段须以原生量、状态、来源、时间、责任及覆盖排除链接实际补齐并合并一次，方可完整使用。发票、租赁或未来计划不充分。 |
| disclosure | 实际合同运营方关口责任质量版本、完整使用者期间资产提供者接收原生库存缺口 |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| operator_gate | 最终产出 | 仅计入实际装载至指定运营方厨房舱位并被接收的完整等效已制备餐食组合；核对组成、质量、数量、订单变更及接收/撤销。实际合同交付关口须有记录；公开岗位页不是签收凭证。备餐可用量、计划餐量、航班、旅客、餐车、发票或食用质量均不能替代。 | gategroup-cook-current; gategroup-finalizer-current; gategroup-transport-current; gategroup-equipment-current; gategroup-wash-current; ekfc-airline-current |
| physical_route | meal_set_supply | 各原料、已制备组分、配方水冰、油脂调味料进入真实厨房配制、预处理、烹调或冷配。记录配制/处理前后状态、实际损耗/不合格去向及保护包装状态。保温冷藏、发运、地面运输和客户指定装载在一体供应过程中各保留事件/责任链接；不得虚构额外工厂或再次购买相同最终供应。 | gategroup-cook-current; gategroup-finalizer-current; gategroup-transport-current; gategroup-equipment-current; gategroup-wash-current; ekfc-airline-current |
| packing_logistics | food and package interfaces | 包装前实际已制备食物与装载关口的受保护餐食、包装、餐盘、餐车关联；明确包装材料、接触/保温/标签/复用、废品和终端去向。配送运输装载单独记录，不作为包装转化。食物净质量、包装数量、湿载荷和餐车数独立且不可重复相加；不设固定每车餐量。 | gategroup-cook-current; gategroup-finalizer-current; gategroup-transport-current; gategroup-equipment-current; gategroup-wash-current; ekfc-airline-current |
| contract_boundary | 全部阶段 | 最终产品是向运营方装载交付的已制备餐食供应，不是旅客分餐或食用服务。实际供应方合同负责的交付后回收、分类、食物/废物处置、清洗和接收方均保留在其分子。运营方负责的机上储存复热装盘供应另列责任；不得声称已完成这些阶段或普遍计入整航班客运牵引。若声称完整旅客餐饮服务，须审查实际扩展阶段与不同关口。 | gategroup-cook-current; gategroup-finalizer-current; gategroup-transport-current; gategroup-equipment-current; gategroup-wash-current; ekfc-airline-current |
| exclusive_coverage | all inputs assets providers | 包含实际食物材料公用工程上游及损耗，以及场址建筑装修厨房车辆升降车制冷设备复用器具织物的制造安装维护更换终末处理。每物理阶段由一个完整提供者或实际直接责任覆盖；缺失阶段须以原生量、状态、来源、时间、责任及覆盖排除链接实际补齐并合并一次，方可完整使用。发票、租赁或未来计划不充分。 |  |
| all_user_pool | resource duties | 先直接物理追溯及独立过程划分。真实共享责任按每条兼容量乘该条目标驱动量除完整正全部使用者驱动量后再求和。包含每客户菜单航班任务员工非餐使用者和期间；必要待机失败取消停业准备资源仍在责任池。N_target=0或零移交保留来源、结转、接收和最终归属，不除零、不造输出；责任未明不得完整。已归属目标总量仍除相同正目标N一次；仅已按参考流归一量不变。 |  |
| full_life_land | assets land reusables | 列举真实资产服务的使用者节点、寿命阶段、库存报告维护更换终止及接收期间。使用全部使用者实测寿命加有来源兼容剩余服务，或实际终止总寿命；不得以年度目标N、铭牌容量或虚构年数替代。土地占用面积乘时间及有证据的前后状态事件日期面积为原生量，不是Count；已覆盖土地寿命不重复，缺段实际补齐一次。 |  |
| stock_return_fluid | 全部库存池 | 收货净量仅扣皮重，先不扣外退。毛领用S=归属期初+入库-期末，并计实际成对责任移交。采用S投入加匹配未用退货输出，或(S-未用退货)投入并省略该输出。已用器具食物流体保留原负荷，不抵新料、不自动给信用。流体储存安装回收角色互斥；期初不存在的新设备原装充注为设备入场，不是再次采购。追踪全部有用废物整机保留含量及独立直接释放；整物组分不可相加，未知差额不是排放。 |  |
| native_food_water | food water air and fates | 保留生料解冻已制备烹调储存装载退回各湿干可食骨皮水脂溶质状态、配方库存量，不设通用得率。同样本纯水湿基w=水/湿质量、干基r=水/非水干质量才满足w=r/(1+r)，先换百分数；含其他挥发物的干燥失重不等于水。终端衡算仅实际外部终端流出及真实期末库存；内部用途移交、组分含量和重复接收视图不可相加。水蒸气是向空气的水物种质量基本流，容纳废水是废物流。须独立物种介质粒径基准因子证据；未知差额不是排放或零。 |  |
| freight_empty | transport and loading | 每真实独立货段载荷包含湿食物冰包装支撑器具，只扣非货车辆皮重。EACH单次数量乘实际重复次数一次，TOTAL不重复；份额在逐条求和内。完整匹配承运者或实际自营燃料电力装载储存维护全寿命资产物种接收责任互斥计一次。零载荷kg*km不能承载必要空驶定位回程失败责任；须完整覆盖或原生底层责任补齐一次，不造载荷输出。 |  |
| output_projection | 全部预期产出 | 完整分配前全部输出台账为每输出ID、接收者、关口、状态、交接时间来源保留其完整未归一原生数量，包括其他餐非餐资产流体。先区分独立划分和真正联产品；记录实际PCR特定分配决策、物理证据、责任、谱系和分配阶段。目标分配后LCI中其他独立餐服务仅作证据，不在资源归属后又作联产品。保留的真实联产品最终交换采用选定实际物理量除同正目标N一次，不乘资源目标份额；已按参考流量不变。另列未分配整池须完整投入全部输出且仅一次指定分配。此输出规则优先于通用资源规则。 |  |
| reject_rework | food pack returns and batches | 各生料已制备储存装载不合格部分撤销退回状态均连原批次及实际返工复热调配留存有用外送废弃和接收方。原负荷保留，仅加真实新增作业运输清洗储存。内部旧食物脏物退回是谱系，不是新制造或新增餐食数。成对移交两侧同接收关口原生量状态时间及来源接收者，途中差额独立证据；不合格不计合格输出。 |  |


货运优先freight_empty：record_share就是同一有证据target_driver/all_consumer_driver份额，仅在逐货段求和内用一次（直接物理目标追溯份额=1）。已由freight_sum归属的货运总量不再按all_user_pool缩放，仅除同正兼容N_target一次。已按参考流货运不变，不将record_share和相同通用目标份额重复乘。

## 6. 过程清单结构

### 过程图

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| meal_set_supply | 一体厨房已制备供应装载及实际回收清洗责任 | required | 实际配方制备包装地面装载运营方接收合同责任 | 真实供应者厨房配制处理包装和地面物流装载回收清洗，各真实阶段ID责任 | meal_set_supply |

配方备餐包装装载清洗批次与连续冷藏准备重叠。各投入输出清洗换线连真实批次期间，同一共享负荷只一个责任。配制处理前后食物、接触保温包装状态及装载关口必须明确。配制处理包装可在同真实厨房，非所有组分都混合加热。

实际发收退回配对保留两侧来源接收节点移交ID状态时间与相同接收量；发运差损另证。内部食物脏器具有用退回传原负荷；净食物湿包装载荷脏载荷组分非相加。谱系移交非独立最终输出或新外部制造。按output_projection列各真实输出全部使用者期间原生台账。

### 过程：一体供应者餐食制备装载及实际退回清洗 (`meal_set_supply`)

#### 输入

##### 产品流

###### 实际液态处理自来水供给 (`recipe_water_liquid_tap`)

仅在实际来源确为处理后的自来水且用于所声明用途时适用。保留实际供应方、水质、温度状态和供应边界，不假定所有供水都是自来水。冰、瓶装矿泉水、再生水、未经处理的水及环境直接取水保留各自实际身份。沿用原卡原生质量或体积基准；最终换算为质量参考量时须有实际相容密度和状态证据，不能把目录中的次要体积关系作为默认现场密度。

- 选定流：自来水 `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- 绑定：`fixed`
- 流属性/单位：Mass / kg
- 数量规则：依cp_food及all_user_pool取得实际互斥责任原生量，除同正配置N_target一次；已按参考流量不变；N_target=0保留不除。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_food`
- 来源：`gategroup-cook-current`; `gategroup-finalizer-current`; `gategroup-transport-current`; `gategroup-equipment-current`; `gategroup-wash-current`; `ekfc-airline-current`

范围证据需求：须真实兼容前景数量库存来源完整物理责任及已验证具体身份；无通用每餐餐车航班配方得率温度废物寿命因子或零默认。

###### 实际使用点交流电 (`electricity_ac`)

仅适用于实际跨越本节点边界、且未由完整供应商数据覆盖的交流电。该身份未特指供应方、电压、发电组合或交付线损归属，仍须按要求采集。经核实的电力流以1 MJ电能为基准，其ILCD属性名称为净热值；原生kWh按精确的3.6 MJ/kWh换算，不能套用燃料热值系数。直流电或其他不匹配电力状态保留在余项要求中。

- 选定流：交流电 `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- 绑定：`fixed`
- 流属性/单位：Energy / kWh
- 数量规则：依cp_utilities及all_user_pool取得实际互斥责任原生量，除同正配置N_target一次；已按参考流量不变；N_target=0保留不除。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_utilities`
- 来源：`gategroup-cook-current`; `gategroup-finalizer-current`; `gategroup-transport-current`; `gategroup-equipment-current`; `gategroup-wash-current`; `ekfc-airline-current`

范围证据需求：须真实兼容前景数量库存来源完整物理责任及已验证具体身份；无通用每餐餐车航班配方得率温度废物寿命因子或零默认。

###### 实际外购交付的有效热量 (`thermal_delivered_heat`)

仅记录有证据能量基准、实际跨越本节点边界交付的有效热量。保留供回状态、温度品位、覆盖范围及实际损失责任。通用热能身份不预设天然气、蒸汽质量、锅炉效率或温度；制冷、燃料能量及缺少蒸汽转能量证据的情形不使用该身份。

- 选定流：热能 `4f19a302-7b3b-11dd-ad8b-0800200c9a66`
- 绑定：`fixed`
- 流属性/单位：Energy / MJ
- 数量规则：依cp_utilities及all_user_pool取得实际互斥责任原生量，除同正配置N_target一次；已按参考流量不变；N_target=0保留不除。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_utilities`
- 来源：`gategroup-cook-current`; `gategroup-finalizer-current`; `gategroup-transport-current`; `gategroup-equipment-current`; `gategroup-wash-current`; `ekfc-airline-current`

范围证据需求：须真实兼容前景数量库存来源完整物理责任及已验证具体身份；无通用每餐餐车航班配方得率温度废物寿命因子或零默认。

###### 实际液态处理自来水供给 (`water_supply_liquid_tap`)

仅在实际来源确为处理后的自来水且用于所声明用途时适用。保留实际供应方、水质、温度状态和供应边界，不假定所有供水都是自来水。冰、瓶装矿泉水、再生水、未经处理的水及环境直接取水保留各自实际身份。沿用原卡原生质量或体积基准；最终换算为质量参考量时须有实际相容密度和状态证据，不能把目录中的次要体积关系作为默认现场密度。

- 选定流：自来水 `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- 绑定：`fixed`
- 流属性/单位：Volume / m3
- 数量规则：依cp_water及all_user_pool取得实际互斥责任原生量，除同正配置N_target一次；已按参考流量不变；N_target=0保留不除。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_water`
- 来源：`gategroup-cook-current`; `gategroup-finalizer-current`; `gategroup-transport-current`; `gategroup-equipment-current`; `gategroup-wash-current`; `ekfc-airline-current`

范围证据需求：须真实兼容前景数量库存来源完整物理责任及已验证具体身份；无通用每餐餐车航班配方得率温度废物寿命因子或零默认。

###### 实际独立记录的合成洗涤剂投入 (`materials_synthetic_detergent`)

仅适用于产品配方、供应状态及用途记录确认的实际合成表面活性洗涤剂。记录扣除包装皮重的材料净量，区分浓缩液与稀释水，整体配方与组分不得相加重复计入。肥皂、消毒剂、抹布、滤材等仍按各自实际身份记录，不预设清洁配方、剂量或发生。

- 选定流：洗涤剂 `1c57d123-df57-49ab-b9d4-957403beb8a5`
- 绑定：`fixed`
- 流属性/单位：Mass / kg
- 数量规则：依cp_materials及all_user_pool取得实际互斥责任原生量，除同正配置N_target一次；已按参考流量不变；N_target=0保留不除。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_materials`
- 来源：`gategroup-cook-current`; `gategroup-finalizer-current`; `gategroup-transport-current`; `gategroup-equipment-current`; `gategroup-wash-current`; `ekfc-airline-current`

范围证据需求：须真实兼容前景数量库存来源完整物理责任及已验证具体身份；无通用每餐餐车航班配方得率温度废物寿命因子或零默认。

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 实际向运营方装载交付并接收的等效已制备餐食组合供应 (`meal_set_supply`)

按operator_gate在实际运营方装载接收关口完成的受保护等效已制备餐食组合；不是旅客装盘食用服务。

- 选定流：实际向运营方装载交付并接收的等效已制备餐食组合供应
- 流属性/单位：Count / Item(s)
- 数量规则：1 Item(s)
- 数值来源模式：`fixed_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_service`
- 来源：`gategroup-cook-current`; `gategroup-finalizer-current`; `gategroup-transport-current`; `gategroup-equipment-current`; `gategroup-wash-current`; `ekfc-airline-current`

范围证据需求：须真实兼容前景数量库存来源完整物理责任及已验证具体身份；无通用每餐餐车航班配方得率温度废物寿命因子或零默认。

##### 废物流

###### 实际废弃已制备但未供应食物 (`unserved_waste`)

实际储存装载未接收拒收退回未供食物按处置，已制备不等于熟制，退回不全是废物。

本流身份仅适用于按实际计量状态记录的废弃人类食物或饮料。包装、餐具、清洁化学品和非食用备料残余需要各自的流身份。不同实际接收方的废物流保持分开；若与非食物材料真实混收，应核实整条混合废物流身份，本食物来源视图仅作为不可相加的审计记录。

- 选定流：食物残渣 `55feef47-26fa-48d1-bcf5-1eb581143bd7`
- 绑定：`fixed`
- 流属性/单位：Mass / kg
- 数量规则：依cp_fates及all_user_pool取得实际互斥责任原生量，除同正配置N_target一次；已按参考流量不变；N_target=0保留不除。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_fates`
- 来源：`gategroup-cook-current`; `gategroup-finalizer-current`; `gategroup-transport-current`; `gategroup-equipment-current`; `gategroup-wash-current`; `ekfc-airline-current`

范围证据需求：须真实兼容前景数量库存来源完整物理责任及已验证具体身份；无通用每餐餐车航班配方得率温度废物寿命因子或零默认。

###### 实际供应方负责回收的已供餐食余物 (`plate_waste`)

仅实际合同负责的供应后回收余食；运营方关口仍为最终关口，余食不自动撤销已交供应。未供与餐后及其他任务回物区分。

本流身份仅适用于按实际计量状态记录的废弃人类食物或饮料。包装、餐具、清洁化学品和非食用备料残余需要各自的流身份。不同实际接收方的废物流保持分开；若与非食物材料真实混收，应核实整条混合废物流身份，本食物来源视图仅作为不可相加的审计记录。

- 选定流：食物残渣 `55feef47-26fa-48d1-bcf5-1eb581143bd7`
- 绑定：`fixed`
- 流属性/单位：Mass / kg
- 数量规则：依cp_fates及all_user_pool取得实际互斥责任原生量，除同正配置N_target一次；已按参考流量不变；N_target=0保留不除。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_fates`
- 来源：`gategroup-cook-current`; `gategroup-finalizer-current`; `gategroup-transport-current`; `gategroup-equipment-current`; `gategroup-wash-current`; `ekfc-airline-current`

范围证据需求：须真实兼容前景数量库存来源完整物理责任及已验证具体身份；无通用每餐餐车航班配方得率温度废物寿命因子或零默认。

###### 实际单独收集的纸类包装废物 (`pack_waste_paper_pack`)

仅适用于本节点实际独立废弃、单独收集的纸类包装，保留实际湿态或收集状态、组成、接收方及处理运输责任。污染或混收形成的混合流须使用其自身经核实的身份，材料组分仅作不可相加审计。仍在用的周转包装不是本废物，不预设组成、数量、回收或处理。

- 选定流：包装废弃物，纸类 `6b6f1025-cb6a-4c9d-9947-7726c4307a76`
- 绑定：`fixed`
- 流属性/单位：Mass / kg
- 数量规则：依cp_fates及all_user_pool取得实际互斥责任原生量，除同正配置N_target一次；已按参考流量不变；N_target=0保留不除。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_fates`
- 来源：`gategroup-cook-current`; `gategroup-finalizer-current`; `gategroup-transport-current`; `gategroup-equipment-current`; `gategroup-wash-current`; `ekfc-airline-current`

范围证据需求：须真实兼容前景数量库存来源完整物理责任及已验证具体身份；无通用每餐餐车航班配方得率温度废物寿命因子或零默认。

###### 实际单独收集的金属包装废物 (`pack_waste_metal_pack`)

仅适用于本节点实际独立废弃、单独收集的金属包装，保留实际湿态或收集状态、组成、接收方及处理运输责任。污染或混收形成的混合流须使用其自身经核实的身份，材料组分仅作不可相加审计。仍在用的周转包装不是本废物，不预设组成、数量、回收或处理。

- 选定流：金属包装废物 `cdda6013-c0c5-4c72-990a-f5668fe71069`
- 绑定：`fixed`
- 流属性/单位：Mass / kg
- 数量规则：依cp_fates及all_user_pool取得实际互斥责任原生量，除同正配置N_target一次；已按参考流量不变；N_target=0保留不除。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_fates`
- 来源：`gategroup-cook-current`; `gategroup-finalizer-current`; `gategroup-transport-current`; `gategroup-equipment-current`; `gategroup-wash-current`; `ekfc-airline-current`

范围证据需求：须真实兼容前景数量库存来源完整物理责任及已验证具体身份；无通用每餐餐车航班配方得率温度废物寿命因子或零默认。

##### 基本流

###### 实际向空气释放的水蒸气 (`water_vapour`)

独立实际水物种向空气量基准，未知终端差额不是水蒸气。

- 选定流：水蒸气 `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- 绑定：`fixed`
- 流属性/单位：Mass / kg
- 数量规则：依cp_air及all_user_pool取得实际互斥责任原生量，除同正配置N_target一次；已按参考流量不变；N_target=0保留不除。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_air`
- 来源：`gategroup-cook-current`; `gategroup-finalizer-current`; `gategroup-transport-current`; `gategroup-equipment-current`; `gategroup-wash-current`; `ekfc-airline-current`

范围证据需求：须真实兼容前景数量库存来源完整物理责任及已验证具体身份；无通用每餐餐车航班配方得率温度废物寿命因子或零默认。

###### 实际有独立证据的向空气排放化石二氧化碳 (`direct_species_co2_fossil_air`)

仅在实际证据确认化石来源、二氧化碳物种和向空气直接释放时适用。保留报告的碳或CO2基准，碳转CO2须独立有证据的化学计量，不预设系数或发生。 本卡仅记录本节点实际直接释放，不重复计入外购电力上游或供应商已覆盖排放。UUID表示未细分子介质的空气排放，其他实际子介质或来源仍须在余项中匹配，不能改标；缺失数据不等于零。

- 选定流：二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 绑定：`fixed`
- 流属性/单位：Mass / kg
- 数量规则：依cp_air及all_user_pool取得实际互斥责任原生量，除同正配置N_target一次；已按参考流量不变；N_target=0保留不除。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_air`
- 来源：`gategroup-cook-current`; `gategroup-finalizer-current`; `gategroup-transport-current`; `gategroup-equipment-current`; `gategroup-wash-current`; `ekfc-airline-current`

范围证据需求：须真实兼容前景数量库存来源完整物理责任及已验证具体身份；无通用每餐餐车航班配方得率温度废物寿命因子或零默认。

###### 实际有独立证据的向空气排放化石甲烷 (`direct_species_methane_fossil_air`)

仅在实际证据确认化石来源、甲烷物种和向空气直接释放时适用。生物源或来源未知甲烷仍在余项要求中，不得改标化石源；不预设泄漏发生、气体比例、数量或排放系数。 本卡仅记录本节点实际直接释放，不重复计入外购电力上游或供应商已覆盖排放。UUID表示未细分子介质的空气排放，其他实际子介质或来源仍须在余项中匹配，不能改标；缺失数据不等于零。

- 选定流：甲烷 (化石源) `08a91e70-3ddc-11dd-9610-0050c2490048`
- 绑定：`fixed`
- 流属性/单位：Mass / kg
- 数量规则：依cp_air及all_user_pool取得实际互斥责任原生量，除同正配置N_target一次；已按参考流量不变；N_target=0保留不除。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_air`
- 来源：`gategroup-cook-current`; `gategroup-finalizer-current`; `gategroup-transport-current`; `gategroup-equipment-current`; `gategroup-wash-current`; `ekfc-airline-current`

范围证据需求：须真实兼容前景数量库存来源完整物理责任及已验证具体身份；无通用每餐餐车航班配方得率温度废物寿命因子或零默认。

###### 实际有独立证据的向空气排放氧化亚氮 (`direct_species_nitrous_oxide_air`)

仅在实际证据确认氧化亚氮物种及向空气直接释放时适用。原生数量为N2O质量，不是氮质量或氮气质量，不预设排放系数或发生。 本卡仅记录本节点实际直接释放，不重复计入外购电力上游或供应商已覆盖排放。UUID表示未细分子介质的空气排放，其他实际子介质或来源仍须在余项中匹配，不能改标；缺失数据不等于零。

- 选定流：一氧化二氮 `08a91e70-3ddc-11dd-94c3-0050c2490048`
- 绑定：`fixed`
- 流属性/单位：Mass / kg
- 数量规则：依cp_air及all_user_pool取得实际互斥责任原生量，除同正配置N_target一次；已按参考流量不变；N_target=0保留不除。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_air`
- 来源：`gategroup-cook-current`; `gategroup-finalizer-current`; `gategroup-transport-current`; `gategroup-equipment-current`; `gategroup-wash-current`; `ekfc-airline-current`

范围证据需求：须真实兼容前景数量库存来源完整物理责任及已验证具体身份；无通用每餐餐车航班配方得率温度废物寿命因子或零默认。

## 7. 分配与联产品处理

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| all_user_pool | resource duties | 先直接物理追溯及独立过程划分。真实共享责任按每条兼容量乘该条目标驱动量除完整正全部使用者驱动量后再求和。包含每客户菜单航班任务员工非餐使用者和期间；必要待机失败取消停业准备资源仍在责任池。N_target=0或零移交保留来源、结转、接收和最终归属，不除零、不造输出；责任未明不得完整。已归属目标总量仍除相同正目标N一次；仅已按参考流归一量不变。 |  |
| full_life_land | assets land reusables | 列举真实资产服务的使用者节点、寿命阶段、库存报告维护更换终止及接收期间。使用全部使用者实测寿命加有来源兼容剩余服务，或实际终止总寿命；不得以年度目标N、铭牌容量或虚构年数替代。土地占用面积乘时间及有证据的前后状态事件日期面积为原生量，不是Count；已覆盖土地寿命不重复，缺段实际补齐一次。 |  |
| stock_return_fluid | 全部库存池 | 收货净量仅扣皮重，先不扣外退。毛领用S=归属期初+入库-期末，并计实际成对责任移交。采用S投入加匹配未用退货输出，或(S-未用退货)投入并省略该输出。已用器具食物流体保留原负荷，不抵新料、不自动给信用。流体储存安装回收角色互斥；期初不存在的新设备原装充注为设备入场，不是再次采购。追踪全部有用废物整机保留含量及独立直接释放；整物组分不可相加，未知差额不是排放。 |  |
| output_projection | 全部预期产出 | 完整分配前全部输出台账为每输出ID、接收者、关口、状态、交接时间来源保留其完整未归一原生数量，包括其他餐非餐资产流体。先区分独立划分和真正联产品；记录实际PCR特定分配决策、物理证据、责任、谱系和分配阶段。目标分配后LCI中其他独立餐服务仅作证据，不在资源归属后又作联产品。保留的真实联产品最终交换采用选定实际物理量除同正目标N一次，不乘资源目标份额；已按参考流量不变。另列未分配整池须完整投入全部输出且仅一次指定分配。此输出规则优先于通用资源规则。 |  |
| reject_rework | food pack returns and batches | 各生料已制备储存装载不合格部分撤销退回状态均连原批次及实际返工复热调配留存有用外送废弃和接收方。原负荷保留，仅加真实新增作业运输清洗储存。内部旧食物脏物退回是谱系，不是新制造或新增餐食数。成对移交两侧同接收关口原生量状态时间及来源接收者，途中差额独立证据；不合格不计合格输出。 |  |


货运优先freight_empty：record_share就是同一有证据target_driver/all_consumer_driver份额，仅在逐货段求和内用一次（直接物理目标追溯份额=1）。已由freight_sum归属的货运总量不再按all_user_pool缩放，仅除同正兼容N_target一次。已按参考流货运不变，不将record_share和相同通用目标份额重复乘。

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_service | meal_set_supply | service | 实际service台账 | record_id; actual_stage_id; period_start; period_end; timezone; utc_offset; dst_resolution; run_id; owner_id; output_id_link; source_record_id; source_carry_id; receiving_pool_id; final_resolution_id; direct_or_shared; each_or_total; output_id; operator_id; recipient_galley; contract_gate; menu_recipe_portion_pack_version; required_components; actual_acceptance_id; order_change_id; reversal_id; load_id; quality_source; fulfilled_count; fulfilled_count_unit; fulfilled_count_basis; fulfilled_count_method; fulfilled_count_state; fulfilled_count_sample_time; fulfilled_count_source; component_quantity; component_quantity_unit; component_quantity_basis; component_quantity_method; component_quantity_state; component_quantity_sample_time; component_quantity_source; portion_mass; portion_mass_unit; portion_mass_basis; portion_mass_method; portion_mass_state; portion_mass_sample_time; portion_mass_source; temperature; temperature_unit; temperature_basis; temperature_method; temperature_state; temperature_sample_time; temperature_source; holding_duration; holding_duration_unit; holding_duration_basis; holding_duration_method; holding_duration_state; holding_duration_sample_time; holding_duration_source; reversal_count; reversal_count_unit; reversal_count_basis; reversal_count_method; reversal_count_state; reversal_count_sample_time; reversal_count_source; partial_count; partial_count_unit; partial_count_basis; partial_count_method; partial_count_state; partial_count_sample_time; partial_count_source; raw_quantity; raw_quantity_unit; raw_quantity_basis; raw_quantity_method; raw_quantity_state; raw_quantity_sample_time; raw_quantity_source; target_driver; target_driver_unit; target_driver_basis; target_driver_method; target_driver_state; target_driver_sample_time; target_driver_source; all_consumer_driver; all_consumer_driver_unit; all_consumer_driver_basis; all_consumer_driver_method; all_consumer_driver_state; all_consumer_driver_sample_time; all_consumer_driver_source; repeat_count; repeat_count_unit; repeat_count_basis; repeat_count_method; repeat_count_state; repeat_count_sample_time; repeat_count_source | 逐组成核对实际装载、客户质量数量要求、订单变更、运营方接收撤销；先固定等效配置再数独立完成供应ID。不合格部分保留实际资源。执行operator_gate、reject_rework。 | 各算子真实兼容原生单位；Item(s)仅真计数 | 每真实批次载荷库存收货退回计量样本资产接收事件 | 真实完整批次装载退回库存报告间隔及实测加有来源剩余或终止全寿命 | 真实厨房装载供应者及全部贡献供应接收使用者期间 | 每参考流 | 可追溯来源校准接收、原生七字段、覆盖责任结转最终归属 |
| cp_food | meal_set_supply | food | 实际food台账 | record_id; actual_stage_id; period_start; period_end; timezone; utc_offset; dst_resolution; run_id; owner_id; output_id_link; source_record_id; source_carry_id; receiving_pool_id; final_resolution_id; direct_or_shared; each_or_total; food_id; species_material; recipe_id; batch_id; input_role; internal_external; linked_input_coverage; stock_pool; food_state; wet_dry_basis; edible_bone_skin; handoff_id; source_node; receiving_node; receiver_id; dispatch_gate; receipt_gate; handoff_time; transfer_state; dispatch_food_mass; dispatch_food_mass_unit; dispatch_food_mass_basis; dispatch_food_mass_method; dispatch_food_mass_state; dispatch_food_mass_sample_time; dispatch_food_mass_source; receipt_food_mass; receipt_food_mass_unit; receipt_food_mass_basis; receipt_food_mass_method; receipt_food_mass_state; receipt_food_mass_sample_time; receipt_food_mass_source; transit_food_loss_mass; transit_food_loss_mass_unit; transit_food_loss_mass_basis; transit_food_loss_mass_method; transit_food_loss_mass_state; transit_food_loss_mass_sample_time; transit_food_loss_mass_source; gross_mass; gross_mass_unit; gross_mass_basis; gross_mass_method; gross_mass_state; gross_mass_sample_time; gross_mass_source; tare_mass; tare_mass_unit; tare_mass_basis; tare_mass_method; tare_mass_state; tare_mass_sample_time; tare_mass_source; net_mass; net_mass_unit; net_mass_basis; net_mass_method; net_mass_state; net_mass_sample_time; net_mass_source; opening_mass; opening_mass_unit; opening_mass_basis; opening_mass_method; opening_mass_state; opening_mass_sample_time; opening_mass_source; inbound_mass; inbound_mass_unit; inbound_mass_basis; inbound_mass_method; inbound_mass_state; inbound_mass_sample_time; inbound_mass_source; closing_mass; closing_mass_unit; closing_mass_basis; closing_mass_method; closing_mass_state; closing_mass_sample_time; closing_mass_source; paired_transfer_mass; paired_transfer_mass_unit; paired_transfer_mass_basis; paired_transfer_mass_method; paired_transfer_mass_state; paired_transfer_mass_sample_time; paired_transfer_mass_source; unused_mass; unused_mass_unit; unused_mass_basis; unused_mass_method; unused_mass_state; unused_mass_sample_time; unused_mass_source; recipe_component_mass; recipe_component_mass_unit; recipe_component_mass_basis; recipe_component_mass_method; recipe_component_mass_state; recipe_component_mass_sample_time; recipe_component_mass_source; water_mass; water_mass_unit; water_mass_basis; water_mass_method; water_mass_state; water_mass_sample_time; water_mass_source; nonwater_dry_mass; nonwater_dry_mass_unit; nonwater_dry_mass_basis; nonwater_dry_mass_method; nonwater_dry_mass_state; nonwater_dry_mass_sample_time; nonwater_dry_mass_source; fat_mass; fat_mass_unit; fat_mass_basis; fat_mass_method; fat_mass_state; fat_mass_sample_time; fat_mass_source; solute_mass; solute_mass_unit; solute_mass_basis; solute_mass_method; solute_mass_state; solute_mass_sample_time; solute_mass_source; wet_fraction; wet_fraction_unit; wet_fraction_basis; wet_fraction_method; wet_fraction_state; wet_fraction_sample_time; wet_fraction_source; dry_ratio; dry_ratio_unit; dry_ratio_basis; dry_ratio_method; dry_ratio_state; dry_ratio_sample_time; dry_ratio_source; piece_count; piece_count_unit; piece_count_basis; piece_count_method; piece_count_state; piece_count_sample_time; piece_count_source; unit_mass; unit_mass_unit; unit_mass_basis; unit_mass_method; unit_mass_state; unit_mass_sample_time; unit_mass_source; raw_quantity; raw_quantity_unit; raw_quantity_basis; raw_quantity_method; raw_quantity_state; raw_quantity_sample_time; raw_quantity_source; target_driver; target_driver_unit; target_driver_basis; target_driver_method; target_driver_state; target_driver_sample_time; target_driver_source; all_consumer_driver; all_consumer_driver_unit; all_consumer_driver_basis; all_consumer_driver_method; all_consumer_driver_state; all_consumer_driver_sample_time; all_consumer_driver_source; repeat_count; repeat_count_unit; repeat_count_basis; repeat_count_method; repeat_count_state; repeat_count_sample_time; repeat_count_source; flow_row_id; actual_identity_case; actual_substance_or_material; actual_origin_and_medium; actual_state_and_gate; case_activation_evidence; typed_or_residual_quantity; quantity_exclusion_links; whole_total_reconciliation; unresolved_occurrence_not_zero | 校准称重各收货库存配方批次状态皮重来源组分，记录添加水冰及含水湿干脂溶质视图、处理前后至包装状态、损耗返工及有用废物接收。内部收货旧食物是谱系不再制造。执行physical_route、native_food_water、stock_return_fluid。 | 各算子真实兼容原生单位；Item(s)仅真计数 | 每真实批次载荷库存收货退回计量样本资产接收事件 | 真实完整批次装载退回库存报告间隔及实测加有来源剩余或终止全寿命 | 真实厨房装载供应者及全部贡献供应接收使用者期间 | 每参考流 | 可追溯来源校准接收、原生七字段、覆盖责任结转最终归属 |
| cp_utilities | meal_set_supply | utilities | 实际utilities台账 | record_id; actual_stage_id; period_start; period_end; timezone; utc_offset; dst_resolution; run_id; owner_id; output_id_link; source_record_id; source_carry_id; receiving_pool_id; final_resolution_id; direct_or_shared; each_or_total; meter_id; fuel_id; stock_pool; energy_carrier; equipment_id; operation_id; provider_coverage; opening_reading; opening_reading_unit; opening_reading_basis; opening_reading_method; opening_reading_state; opening_reading_sample_time; opening_reading_source; closing_reading; closing_reading_unit; closing_reading_basis; closing_reading_method; closing_reading_state; closing_reading_sample_time; closing_reading_source; electricity; electricity_unit; electricity_basis; electricity_method; electricity_state; electricity_sample_time; electricity_source; fuel_opening; fuel_opening_unit; fuel_opening_basis; fuel_opening_method; fuel_opening_state; fuel_opening_sample_time; fuel_opening_source; fuel_inbound; fuel_inbound_unit; fuel_inbound_basis; fuel_inbound_method; fuel_inbound_state; fuel_inbound_sample_time; fuel_inbound_source; fuel_closing; fuel_closing_unit; fuel_closing_basis; fuel_closing_method; fuel_closing_state; fuel_closing_sample_time; fuel_closing_source; fuel_burned; fuel_burned_unit; fuel_burned_basis; fuel_burned_method; fuel_burned_state; fuel_burned_sample_time; fuel_burned_source; useful_thermal; useful_thermal_unit; useful_thermal_basis; useful_thermal_method; useful_thermal_state; useful_thermal_sample_time; useful_thermal_source; duration; duration_unit; duration_basis; duration_method; duration_state; duration_sample_time; duration_source; conversion_factor; conversion_factor_unit; conversion_factor_basis; conversion_factor_method; conversion_factor_state; conversion_factor_sample_time; conversion_factor_source; density; density_unit; density_basis; density_method; density_state; density_sample_time; density_source; temperature; temperature_unit; temperature_basis; temperature_method; temperature_state; temperature_sample_time; temperature_source; calorific_value; calorific_value_unit; calorific_value_basis; calorific_value_method; calorific_value_state; calorific_value_sample_time; calorific_value_source; raw_quantity; raw_quantity_unit; raw_quantity_basis; raw_quantity_method; raw_quantity_state; raw_quantity_sample_time; raw_quantity_source; target_driver; target_driver_unit; target_driver_basis; target_driver_method; target_driver_state; target_driver_sample_time; target_driver_source; all_consumer_driver; all_consumer_driver_unit; all_consumer_driver_basis; all_consumer_driver_method; all_consumer_driver_state; all_consumer_driver_sample_time; all_consumer_driver_source; repeat_count; repeat_count_unit; repeat_count_basis; repeat_count_method; repeat_count_state; repeat_count_sample_time; repeat_count_source; flow_row_id; actual_identity_case; actual_substance_or_material; actual_origin_and_medium; actual_state_and_gate; case_activation_evidence; typed_or_residual_quantity; quantity_exclusion_links; whole_total_reconciliation; unresolved_occurrence_not_zero | 按实际作业及必要待机间隔读取表燃料库存充电热冷记录，供应与燃烧区分。换算各有来源状态，积分kWh不再乘时长；按exclusive_coverage排提供者重复及范围外飞机责任。 | 各算子真实兼容原生单位；Item(s)仅真计数 | 每真实批次载荷库存收货退回计量样本资产接收事件 | 真实完整批次装载退回库存报告间隔及实测加有来源剩余或终止全寿命 | 真实厨房装载供应者及全部贡献供应接收使用者期间 | 每参考流 | 可追溯来源校准接收、原生七字段、覆盖责任结转最终归属 |
| cp_water | meal_set_supply | water | 实际water台账 | record_id; actual_stage_id; period_start; period_end; timezone; utc_offset; dst_resolution; run_id; owner_id; output_id_link; source_record_id; source_carry_id; receiving_pool_id; final_resolution_id; direct_or_shared; each_or_total; source_id; meter_id; stock_pool; enduse_id; terminal_exit_id; closing_membership_id; paired_receiver_id; transfer_id; internal_external; receiver_id; opening_reading; opening_reading_unit; opening_reading_basis; opening_reading_method; opening_reading_state; opening_reading_sample_time; opening_reading_source; closing_reading; closing_reading_unit; closing_reading_basis; closing_reading_method; closing_reading_state; closing_reading_sample_time; closing_reading_source; opening_stock; opening_stock_unit; opening_stock_basis; opening_stock_method; opening_stock_state; opening_stock_sample_time; opening_stock_source; inbound_water; inbound_water_unit; inbound_water_basis; inbound_water_method; inbound_water_state; inbound_water_sample_time; inbound_water_source; closing_stock; closing_stock_unit; closing_stock_basis; closing_stock_method; closing_stock_state; closing_stock_sample_time; closing_stock_source; enduse_water; enduse_water_unit; enduse_water_basis; enduse_water_method; enduse_water_state; enduse_water_sample_time; enduse_water_source; internal_transfer_water; internal_transfer_water_unit; internal_transfer_water_basis; internal_transfer_water_method; internal_transfer_water_state; internal_transfer_water_sample_time; internal_transfer_water_source; terminal_water; terminal_water_unit; terminal_water_basis; terminal_water_method; terminal_water_state; terminal_water_sample_time; terminal_water_source; paired_receiver_water; paired_receiver_water_unit; paired_receiver_water_basis; paired_receiver_water_method; paired_receiver_water_state; paired_receiver_water_sample_time; paired_receiver_water_source; effluent_mass; effluent_mass_unit; effluent_mass_basis; effluent_mass_method; effluent_mass_state; effluent_mass_sample_time; effluent_mass_source; water_content_mass; water_content_mass_unit; water_content_mass_basis; water_content_mass_method; water_content_mass_state; water_content_mass_sample_time; water_content_mass_source; density; density_unit; density_basis; density_method; density_state; density_sample_time; density_source; temperature; temperature_unit; temperature_basis; temperature_method; temperature_state; temperature_sample_time; temperature_source; withdrawal_volume; withdrawal_volume_unit; withdrawal_volume_basis; withdrawal_volume_method; withdrawal_volume_state; withdrawal_volume_sample_time; withdrawal_volume_source; raw_quantity; raw_quantity_unit; raw_quantity_basis; raw_quantity_method; raw_quantity_state; raw_quantity_sample_time; raw_quantity_source; target_driver; target_driver_unit; target_driver_basis; target_driver_method; target_driver_state; target_driver_sample_time; target_driver_source; all_consumer_driver; all_consumer_driver_unit; all_consumer_driver_basis; all_consumer_driver_method; all_consumer_driver_state; all_consumer_driver_sample_time; all_consumer_driver_source; repeat_count; repeat_count_unit; repeat_count_basis; repeat_count_method; repeat_count_state; repeat_count_sample_time; repeat_count_source; flow_row_id; actual_identity_case; actual_substance_or_material; actual_origin_and_medium; actual_state_and_gate; case_activation_evidence; typed_or_residual_quantity; quantity_exclusion_links; whole_total_reconciliation; unresolved_occurrence_not_zero | 水库存与表读数独立，测外购直接投入、内部用途移交、外部终端去向；配对接收与期末成员，独立取样密度含水，废水整体和水组分不加。执行native_food_water，取水来源与容纳废水类型区分。 | 各算子真实兼容原生单位；Item(s)仅真计数 | 每真实批次载荷库存收货退回计量样本资产接收事件 | 真实完整批次装载退回库存报告间隔及实测加有来源剩余或终止全寿命 | 真实厨房装载供应者及全部贡献供应接收使用者期间 | 每参考流 | 可追溯来源校准接收、原生七字段、覆盖责任结转最终归属 |
| cp_materials | meal_set_supply | materials | 实际materials台账 | record_id; actual_stage_id; period_start; period_end; timezone; utc_offset; dst_resolution; run_id; owner_id; output_id_link; source_record_id; source_carry_id; receiving_pool_id; final_resolution_id; direct_or_shared; each_or_total; material_id; pack_id; food_contact_thermal_role; formulation; stock_pool; unused_return_id; receiver_id; reuse_enduse; before_after_pack_state; gross_mass; gross_mass_unit; gross_mass_basis; gross_mass_method; gross_mass_state; gross_mass_sample_time; gross_mass_source; tare_mass; tare_mass_unit; tare_mass_basis; tare_mass_method; tare_mass_state; tare_mass_sample_time; tare_mass_source; net_mass; net_mass_unit; net_mass_basis; net_mass_method; net_mass_state; net_mass_sample_time; net_mass_source; opening_mass; opening_mass_unit; opening_mass_basis; opening_mass_method; opening_mass_state; opening_mass_sample_time; opening_mass_source; inbound_mass; inbound_mass_unit; inbound_mass_basis; inbound_mass_method; inbound_mass_state; inbound_mass_sample_time; inbound_mass_source; closing_mass; closing_mass_unit; closing_mass_basis; closing_mass_method; closing_mass_state; closing_mass_sample_time; closing_mass_source; paired_transfer_mass; paired_transfer_mass_unit; paired_transfer_mass_basis; paired_transfer_mass_method; paired_transfer_mass_state; paired_transfer_mass_sample_time; paired_transfer_mass_source; unused_mass; unused_mass_unit; unused_mass_basis; unused_mass_method; unused_mass_state; unused_mass_sample_time; unused_mass_source; pack_count; pack_count_unit; pack_count_basis; pack_count_method; pack_count_state; pack_count_sample_time; pack_count_source; unit_mass; unit_mass_unit; unit_mass_basis; unit_mass_method; unit_mass_state; unit_mass_sample_time; unit_mass_source; concentrate_mass; concentrate_mass_unit; concentrate_mass_basis; concentrate_mass_method; concentrate_mass_state; concentrate_mass_sample_time; concentrate_mass_source; prepared_solution_mass; prepared_solution_mass_unit; prepared_solution_mass_basis; prepared_solution_mass_method; prepared_solution_mass_state; prepared_solution_mass_sample_time; prepared_solution_mass_source; active_mass; active_mass_unit; active_mass_basis; active_mass_method; active_mass_state; active_mass_sample_time; active_mass_source; dilution_water_mass; dilution_water_mass_unit; dilution_water_mass_basis; dilution_water_mass_method; dilution_water_mass_state; dilution_water_mass_sample_time; dilution_water_mass_source; concentration; concentration_unit; concentration_basis; concentration_method; concentration_state; concentration_sample_time; concentration_source; raw_quantity; raw_quantity_unit; raw_quantity_basis; raw_quantity_method; raw_quantity_state; raw_quantity_sample_time; raw_quantity_source; target_driver; target_driver_unit; target_driver_basis; target_driver_method; target_driver_state; target_driver_sample_time; target_driver_source; all_consumer_driver; all_consumer_driver_unit; all_consumer_driver_basis; all_consumer_driver_method; all_consumer_driver_state; all_consumer_driver_sample_time; all_consumer_driver_source; repeat_count; repeat_count_unit; repeat_count_basis; repeat_count_method; repeat_count_state; repeat_count_sample_time; repeat_count_source; flow_row_id; actual_identity_case; actual_substance_or_material; actual_origin_and_medium; actual_state_and_gate; case_activation_evidence; typed_or_residual_quantity; quantity_exclusion_links; whole_total_reconciliation; unresolved_occurrence_not_zero | 记录各物料包装库存配方及保护角色，称毛皮净量，独立数单重浓缩剂溶液有效成分稀释水。匹配真正未用退货废品终端，已用器具非未用物。执行packing_logistics、stock_return_fluid。 | 各算子真实兼容原生单位；Item(s)仅真计数 | 每真实批次载荷库存收货退回计量样本资产接收事件 | 真实完整批次装载退回库存报告间隔及实测加有来源剩余或终止全寿命 | 真实厨房装载供应者及全部贡献供应接收使用者期间 | 每参考流 | 可追溯来源校准接收、原生七字段、覆盖责任结转最终归属 |
| cp_assets | meal_set_supply | assets | 实际assets台账 | record_id; actual_stage_id; period_start; period_end; timezone; utc_offset; dst_resolution; run_id; owner_id; output_id_link; source_record_id; source_carry_id; receiving_pool_id; final_resolution_id; direct_or_shared; each_or_total; asset_id; asset_material; consumer_id; consumer_node; life_phase; stage_id; period_id; replacement_id; termination_id; provider_dataset; land_from_state; land_to_state; land_event_id; land_event_date; manufacture_quantity; manufacture_quantity_unit; manufacture_quantity_basis; manufacture_quantity_method; manufacture_quantity_state; manufacture_quantity_sample_time; manufacture_quantity_source; installation_quantity; installation_quantity_unit; installation_quantity_basis; installation_quantity_method; installation_quantity_state; installation_quantity_sample_time; installation_quantity_source; maintenance_quantity; maintenance_quantity_unit; maintenance_quantity_basis; maintenance_quantity_method; maintenance_quantity_state; maintenance_quantity_sample_time; maintenance_quantity_source; replacement_quantity; replacement_quantity_unit; replacement_quantity_basis; replacement_quantity_method; replacement_quantity_state; replacement_quantity_sample_time; replacement_quantity_source; eol_quantity; eol_quantity_unit; eol_quantity_basis; eol_quantity_method; eol_quantity_state; eol_quantity_sample_time; eol_quantity_source; observed_service; observed_service_unit; observed_service_basis; observed_service_method; observed_service_state; observed_service_sample_time; observed_service_source; remaining_service; remaining_service_unit; remaining_service_basis; remaining_service_method; remaining_service_state; remaining_service_sample_time; remaining_service_source; terminated_total; terminated_total_unit; terminated_total_basis; terminated_total_method; terminated_total_state; terminated_total_sample_time; terminated_total_source; target_life_driver; target_life_driver_unit; target_life_driver_basis; target_life_driver_method; target_life_driver_state; target_life_driver_sample_time; target_life_driver_source; all_life_driver; all_life_driver_unit; all_life_driver_basis; all_life_driver_method; all_life_driver_state; all_life_driver_sample_time; all_life_driver_source; land_area; land_area_unit; land_area_basis; land_area_method; land_area_state; land_area_sample_time; land_area_source; occupation_duration; occupation_duration_unit; occupation_duration_basis; occupation_duration_method; occupation_duration_state; occupation_duration_sample_time; occupation_duration_source; transformed_area; transformed_area_unit; transformed_area_basis; transformed_area_method; transformed_area_state; transformed_area_sample_time; transformed_area_source; conversion_factor; conversion_factor_unit; conversion_factor_basis; conversion_factor_method; conversion_factor_state; conversion_factor_sample_time; conversion_factor_source; raw_quantity; raw_quantity_unit; raw_quantity_basis; raw_quantity_method; raw_quantity_state; raw_quantity_sample_time; raw_quantity_source; target_driver; target_driver_unit; target_driver_basis; target_driver_method; target_driver_state; target_driver_sample_time; target_driver_source; all_consumer_driver; all_consumer_driver_unit; all_consumer_driver_basis; all_consumer_driver_method; all_consumer_driver_state; all_consumer_driver_sample_time; all_consumer_driver_source; repeat_count; repeat_count_unit; repeat_count_basis; repeat_count_method; repeat_count_state; repeat_count_sample_time; repeat_count_source | 核查建筑厨房冷库升降车车辆器具织物制造安装维护更换终末及全部节点使用者期间。取得全部实测使用加有来源兼容剩余服务或实际终止总量；采土地面积时间前后事件。执行full_life_land、exclusive_coverage，实际补缺一次。 | 各算子真实兼容原生单位；Item(s)仅真计数 | 每真实批次载荷库存收货退回计量样本资产接收事件 | 真实完整批次装载退回库存报告间隔及实测加有来源剩余或终止全寿命 | 真实厨房装载供应者及全部贡献供应接收使用者期间 | 每参考流 | 可追溯来源校准接收、原生七字段、覆盖责任结转最终归属 |
| cp_providers | meal_set_supply | providers | 实际providers台账 | record_id; actual_stage_id; period_start; period_end; timezone; utc_offset; dst_resolution; run_id; owner_id; output_id_link; source_record_id; source_carry_id; receiving_pool_id; final_resolution_id; direct_or_shared; each_or_total; provider_id; dataset_id; stage_id; component_id; coverage_id; excluded_stage; completion_id; missing_stage_dataset; direct_record_link; provider_native_quantity; provider_native_quantity_unit; provider_native_quantity_basis; provider_native_quantity_method; provider_native_quantity_state; provider_native_quantity_sample_time; provider_native_quantity_source; completed_missing_stage_quantity; completed_missing_stage_quantity_unit; completed_missing_stage_quantity_basis; completed_missing_stage_quantity_method; completed_missing_stage_quantity_state; completed_missing_stage_quantity_sample_time; completed_missing_stage_quantity_source; repeat_count; repeat_count_unit; repeat_count_basis; repeat_count_method; repeat_count_state; repeat_count_sample_time; repeat_count_source; raw_quantity; raw_quantity_unit; raw_quantity_basis; raw_quantity_method; raw_quantity_state; raw_quantity_sample_time; raw_quantity_source; target_driver; target_driver_unit; target_driver_basis; target_driver_method; target_driver_state; target_driver_sample_time; target_driver_source; all_consumer_driver; all_consumer_driver_unit; all_consumer_driver_basis; all_consumer_driver_method; all_consumer_driver_state; all_consumer_driver_sample_time; all_consumer_driver_source | 将实际验收提供者及精确组分阶段场址时间覆盖与直接记录交叉核对。完整提供者或真实完成互斥缺段，按原生量状态来源责任合并，不用未来计划；执行exclusive_coverage。异原生单位须展开而非强制计数。 | 各算子真实兼容原生单位；Item(s)仅真计数 | 每真实批次载荷库存收货退回计量样本资产接收事件 | 真实完整批次装载退回库存报告间隔及实测加有来源剩余或终止全寿命 | 真实厨房装载供应者及全部贡献供应接收使用者期间 | 每参考流 | 可追溯来源校准接收、原生七字段、覆盖责任结转最终归属 |
| cp_freight | meal_set_supply | freight | 实际freight台账 | record_id; actual_stage_id; period_start; period_end; timezone; utc_offset; dst_resolution; run_id; owner_id; output_id_link; source_record_id; source_carry_id; receiving_pool_id; final_resolution_id; direct_or_shared; each_or_total; leg_id; load_id; vehicle_id; carrier_id; provider_coverage; outbound_return_empty; payload_components; dispatch_gate; receipt_gate; ownfleet_link; gross_load_mass; gross_load_mass_unit; gross_load_mass_basis; gross_load_mass_method; gross_load_mass_state; gross_load_mass_sample_time; gross_load_mass_source; noncargo_vehicle_tare; noncargo_vehicle_tare_unit; noncargo_vehicle_tare_basis; noncargo_vehicle_tare_method; noncargo_vehicle_tare_state; noncargo_vehicle_tare_sample_time; noncargo_vehicle_tare_source; packed_wet_payload; packed_wet_payload_unit; packed_wet_payload_basis; packed_wet_payload_method; packed_wet_payload_state; packed_wet_payload_sample_time; packed_wet_payload_source; distance; distance_unit; distance_basis; distance_method; distance_state; distance_sample_time; distance_source; repeat_count; repeat_count_unit; repeat_count_basis; repeat_count_method; repeat_count_state; repeat_count_sample_time; repeat_count_source; record_share; record_share_unit; record_share_basis; record_share_method; record_share_state; record_share_sample_time; record_share_source; fuel_quantity; fuel_quantity_unit; fuel_quantity_basis; fuel_quantity_method; fuel_quantity_state; fuel_quantity_sample_time; fuel_quantity_source; electricity_quantity; electricity_quantity_unit; electricity_quantity_basis; electricity_quantity_method; electricity_quantity_state; electricity_quantity_sample_time; electricity_quantity_source; empty_operation_quantity; empty_operation_quantity_unit; empty_operation_quantity_basis; empty_operation_quantity_method; empty_operation_quantity_state; empty_operation_quantity_sample_time; empty_operation_quantity_source; dispatch_quantity; dispatch_quantity_unit; dispatch_quantity_basis; dispatch_quantity_method; dispatch_quantity_state; dispatch_quantity_sample_time; dispatch_quantity_source; receipt_quantity; receipt_quantity_unit; receipt_quantity_basis; receipt_quantity_method; receipt_quantity_state; receipt_quantity_sample_time; receipt_quantity_source; transit_loss; transit_loss_unit; transit_loss_basis; transit_loss_method; transit_loss_state; transit_loss_sample_time; transit_loss_source; raw_quantity; raw_quantity_unit; raw_quantity_basis; raw_quantity_method; raw_quantity_state; raw_quantity_sample_time; raw_quantity_source; target_driver; target_driver_unit; target_driver_basis; target_driver_method; target_driver_state; target_driver_sample_time; target_driver_source; all_consumer_driver; all_consumer_driver_unit; all_consumer_driver_basis; all_consumer_driver_method; all_consumer_driver_state; all_consumer_driver_sample_time; all_consumer_driver_source | 读独立真实载荷货段清单距离，湿载荷含食物冰包装餐车支撑，只扣非货车皮。逐条EACH/TOTAL和份额后求和；空驶失败定位回程由完整承运者或实际自营燃料充电装载资产物种原生责任覆盖一次。执行freight_empty并核发收损耗。 货运优先freight_empty：record_share就是同一有证据target_driver/all_consumer_driver份额，仅在逐货段求和内用一次（直接物理目标追溯份额=1）。已由freight_sum归属的货运总量不再按all_user_pool缩放，仅除同正兼容N_target一次。已按参考流货运不变，不将record_share和相同通用目标份额重复乘。 | 各算子真实兼容原生单位；Item(s)仅真计数 | 每真实批次载荷库存收货退回计量样本资产接收事件 | 真实完整批次装载退回库存报告间隔及实测加有来源剩余或终止全寿命 | 真实厨房装载供应者及全部贡献供应接收使用者期间 | 每参考流 | 可追溯来源校准接收、原生七字段、覆盖责任结转最终归属 |
| cp_fluids | meal_set_supply | fluids | 实际fluids台账 | record_id; actual_stage_id; period_start; period_end; timezone; utc_offset; dst_resolution; run_id; owner_id; output_id_link; source_record_id; source_carry_id; receiving_pool_id; final_resolution_id; direct_or_shared; each_or_total; equipment_id; species_id; charge_lot; stored_installed_recovered; factory_entry_id; stock_pool; receiver_id; paired_transfer_id; retained_content_exit_id; coverage_id; opening_mass; opening_mass_unit; opening_mass_basis; opening_mass_method; opening_mass_state; opening_mass_sample_time; opening_mass_source; standalone_inbound; standalone_inbound_unit; standalone_inbound_basis; standalone_inbound_method; standalone_inbound_state; standalone_inbound_sample_time; standalone_inbound_source; factory_new_charge; factory_new_charge_unit; factory_new_charge_basis; factory_new_charge_method; factory_new_charge_state; factory_new_charge_sample_time; factory_new_charge_source; closing_installed; closing_installed_unit; closing_installed_basis; closing_installed_method; closing_installed_state; closing_installed_sample_time; closing_installed_source; closing_stored; closing_stored_unit; closing_stored_basis; closing_stored_method; closing_stored_state; closing_stored_sample_time; closing_stored_source; recovered_retained; recovered_retained_unit; recovered_retained_basis; recovered_retained_method; recovered_retained_state; recovered_retained_sample_time; recovered_retained_source; paired_transfer_quantity; paired_transfer_quantity_unit; paired_transfer_quantity_basis; paired_transfer_quantity_method; paired_transfer_quantity_state; paired_transfer_quantity_sample_time; paired_transfer_quantity_source; other_receipt_quantity; other_receipt_quantity_unit; other_receipt_quantity_basis; other_receipt_quantity_method; other_receipt_quantity_state; other_receipt_quantity_sample_time; other_receipt_quantity_source; unused_return_mass; unused_return_mass_unit; unused_return_mass_basis; unused_return_mass_method; unused_return_mass_state; unused_return_mass_sample_time; unused_return_mass_source; useful_export_mass; useful_export_mass_unit; useful_export_mass_basis; useful_export_mass_method; useful_export_mass_state; useful_export_mass_sample_time; useful_export_mass_source; contained_waste_mass; contained_waste_mass_unit; contained_waste_mass_basis; contained_waste_mass_method; contained_waste_mass_state; contained_waste_mass_sample_time; contained_waste_mass_source; wholeequipment_retained_content_exit; wholeequipment_retained_content_exit_unit; wholeequipment_retained_content_exit_basis; wholeequipment_retained_content_exit_method; wholeequipment_retained_content_exit_state; wholeequipment_retained_content_exit_sample_time; wholeequipment_retained_content_exit_source; independent_release_mass; independent_release_mass_unit; independent_release_mass_basis; independent_release_mass_method; independent_release_mass_state; independent_release_mass_sample_time; independent_release_mass_source; raw_quantity; raw_quantity_unit; raw_quantity_basis; raw_quantity_method; raw_quantity_state; raw_quantity_sample_time; raw_quantity_source; target_driver; target_driver_unit; target_driver_basis; target_driver_method; target_driver_state; target_driver_sample_time; target_driver_source; all_consumer_driver; all_consumer_driver_unit; all_consumer_driver_basis; all_consumer_driver_method; all_consumer_driver_state; all_consumer_driver_sample_time; all_consumer_driver_source; repeat_count; repeat_count_unit; repeat_count_basis; repeat_count_method; repeat_count_state; repeat_count_sample_time; repeat_count_source | 测流体互斥角色库存服务物种及每收货移交未用退回回收终端；原装充注不再独立买料。整机保留含量非相加审计，直接释放独立证据未知非泄漏。执行stock_return_fluid。 | 各算子真实兼容原生单位；Item(s)仅真计数 | 每真实批次载荷库存收货退回计量样本资产接收事件 | 真实完整批次装载退回库存报告间隔及实测加有来源剩余或终止全寿命 | 真实厨房装载供应者及全部贡献供应接收使用者期间 | 每参考流 | 可追溯来源校准接收、原生七字段、覆盖责任结转最终归属 |
| cp_fates | meal_set_supply | fates | 实际fates台账 | record_id; actual_stage_id; period_start; period_end; timezone; utc_offset; dst_resolution; run_id; owner_id; output_id_link; source_record_id; source_carry_id; receiving_pool_id; final_resolution_id; direct_or_shared; each_or_total; stream_id; food_batch; whole_component_relation; material_species; receiver_id; treatment_dataset; terminal_membership; paired_receiver_id; retained_closing_membership; rework_path; producing_node; stock_pool; gross_mass; gross_mass_unit; gross_mass_basis; gross_mass_method; gross_mass_state; gross_mass_sample_time; gross_mass_source; tare_mass; tare_mass_unit; tare_mass_basis; tare_mass_method; tare_mass_state; tare_mass_sample_time; tare_mass_source; net_mass; net_mass_unit; net_mass_basis; net_mass_method; net_mass_state; net_mass_sample_time; net_mass_source; whole_stream_mass; whole_stream_mass_unit; whole_stream_mass_basis; whole_stream_mass_method; whole_stream_mass_state; whole_stream_mass_sample_time; whole_stream_mass_source; component_mass; component_mass_unit; component_mass_basis; component_mass_method; component_mass_state; component_mass_sample_time; component_mass_source; water_mass; water_mass_unit; water_mass_basis; water_mass_method; water_mass_state; water_mass_sample_time; water_mass_source; dry_mass; dry_mass_unit; dry_mass_basis; dry_mass_method; dry_mass_state; dry_mass_sample_time; dry_mass_source; fat_mass; fat_mass_unit; fat_mass_basis; fat_mass_method; fat_mass_state; fat_mass_sample_time; fat_mass_source; solute_mass; solute_mass_unit; solute_mass_basis; solute_mass_method; solute_mass_state; solute_mass_sample_time; solute_mass_source; terminal_exit_quantity; terminal_exit_quantity_unit; terminal_exit_quantity_basis; terminal_exit_quantity_method; terminal_exit_quantity_state; terminal_exit_quantity_sample_time; terminal_exit_quantity_source; paired_receiver_quantity; paired_receiver_quantity_unit; paired_receiver_quantity_basis; paired_receiver_quantity_method; paired_receiver_quantity_state; paired_receiver_quantity_sample_time; paired_receiver_quantity_source; retained_closing_quantity; retained_closing_quantity_unit; retained_closing_quantity_basis; retained_closing_quantity_method; retained_closing_quantity_state; retained_closing_quantity_sample_time; retained_closing_quantity_source; useful_exit_quantity; useful_exit_quantity_unit; useful_exit_quantity_basis; useful_exit_quantity_method; useful_exit_quantity_state; useful_exit_quantity_sample_time; useful_exit_quantity_source; raw_quantity; raw_quantity_unit; raw_quantity_basis; raw_quantity_method; raw_quantity_state; raw_quantity_sample_time; raw_quantity_source; target_driver; target_driver_unit; target_driver_basis; target_driver_method; target_driver_state; target_driver_sample_time; target_driver_source; all_consumer_driver; all_consumer_driver_unit; all_consumer_driver_basis; all_consumer_driver_method; all_consumer_driver_state; all_consumer_driver_sample_time; all_consumer_driver_source; repeat_count; repeat_count_unit; repeat_count_basis; repeat_count_method; repeat_count_state; repeat_count_sample_time; repeat_count_source; flow_row_id; actual_identity_case; actual_substance_or_material; actual_origin_and_medium; actual_state_and_gate; case_activation_evidence; typed_or_residual_quantity; quantity_exclusion_links; whole_total_reconciliation; unresolved_occurrence_not_zero | 按实际状态接收方称各预处理未供已供回收包装清洁退役废物及有用外送。各不合格返工调配留存连原批次；整体混合物组分保留含量不加。终端外流及期末独立闭合，排内部用途移交重复接收视图。执行reject_rework、native_food_water。 | 各算子真实兼容原生单位；Item(s)仅真计数 | 每真实批次载荷库存收货退回计量样本资产接收事件 | 真实完整批次装载退回库存报告间隔及实测加有来源剩余或终止全寿命 | 真实厨房装载供应者及全部贡献供应接收使用者期间 | 每参考流 | 可追溯来源校准接收、原生七字段、覆盖责任结转最终归属 |
| cp_air | meal_set_supply | air | 实际air台账 | record_id; actual_stage_id; period_start; period_end; timezone; utc_offset; dst_resolution; run_id; owner_id; output_id_link; source_record_id; source_carry_id; receiving_pool_id; final_resolution_id; direct_or_shared; each_or_total; source_event; species_id; particle_size_class; reported_basis; receiving_medium; factor_reference_id; capture_stream; provider_coverage; measured_release; measured_release_unit; measured_release_basis; measured_release_method; measured_release_state; measured_release_sample_time; measured_release_source; water_vapour; water_vapour_unit; water_vapour_basis; water_vapour_method; water_vapour_state; water_vapour_sample_time; water_vapour_source; activity_quantity; activity_quantity_unit; activity_quantity_basis; activity_quantity_method; activity_quantity_state; activity_quantity_sample_time; activity_quantity_source; factor; factor_unit; factor_basis; factor_method; factor_state; factor_sample_time; factor_source; component_fraction; component_fraction_unit; component_fraction_basis; component_fraction_method; component_fraction_state; component_fraction_sample_time; component_fraction_source; release_fraction; release_fraction_unit; release_fraction_basis; release_fraction_method; release_fraction_state; release_fraction_sample_time; release_fraction_source; particle_size; particle_size_unit; particle_size_basis; particle_size_method; particle_size_state; particle_size_sample_time; particle_size_source; captured_mass; captured_mass_unit; captured_mass_basis; captured_mass_method; captured_mass_state; captured_mass_sample_time; captured_mass_source; duration; duration_unit; duration_basis; duration_method; duration_state; duration_sample_time; duration_source; raw_quantity; raw_quantity_unit; raw_quantity_basis; raw_quantity_method; raw_quantity_state; raw_quantity_sample_time; raw_quantity_source; target_driver; target_driver_unit; target_driver_basis; target_driver_method; target_driver_state; target_driver_sample_time; target_driver_source; all_consumer_driver; all_consumer_driver_unit; all_consumer_driver_basis; all_consumer_driver_method; all_consumer_driver_state; all_consumer_driver_sample_time; all_consumer_driver_source; repeat_count; repeat_count_unit; repeat_count_basis; repeat_count_method; repeat_count_state; repeat_count_sample_time; repeat_count_source; flow_row_id; actual_identity_case; actual_substance_or_material; actual_origin_and_medium; actual_state_and_gate; case_activation_evidence; typed_or_residual_quantity; quantity_exclusion_links; whole_total_reconciliation; unresolved_occurrence_not_zero | 独立测实际释放物与介质，或有来源兼容活动因子组分去向证据，各算子自带原生元数据。水蒸气质量向空气与废水区分，捕集物按实际废物，不以未知作释放。执行native_food_water；最终交换前展开具体物种。 | 各算子真实兼容原生单位；Item(s)仅真计数 | 每真实批次载荷库存收货退回计量样本资产接收事件 | 真实完整批次装载退回库存报告间隔及实测加有来源剩余或终止全寿命 | 真实厨房装载供应者及全部贡献供应接收使用者期间 | 每参考流 | 可追溯来源校准接收、原生七字段、覆盖责任结转最终归属 |
| cp_outputs | meal_set_supply | outputs | 实际outputs台账 | record_id; actual_stage_id; period_start; period_end; timezone; utc_offset; dst_resolution; run_id; owner_id; output_id_link; source_record_id; source_carry_id; receiving_pool_id; final_resolution_id; direct_or_shared; each_or_total; output_id; recipient_id; gate; output_state; handoff_time; source_record; native_property; output_role; allocation_stage; lineage; actual_subdivision; joint_decision_id; job_flight_menu; partial_reversal_id; native_output_quantity; native_output_quantity_unit; native_output_quantity_basis; native_output_quantity_method; native_output_quantity_state; native_output_quantity_sample_time; native_output_quantity_source; fulfilled_count; fulfilled_count_unit; fulfilled_count_basis; fulfilled_count_method; fulfilled_count_state; fulfilled_count_sample_time; fulfilled_count_source; target_driver; target_driver_unit; target_driver_basis; target_driver_method; target_driver_state; target_driver_sample_time; target_driver_source; all_consumer_driver; all_consumer_driver_unit; all_consumer_driver_basis; all_consumer_driver_method; all_consumer_driver_state; all_consumer_driver_sample_time; all_consumer_driver_source; joint_selected_quantity; joint_selected_quantity_unit; joint_selected_quantity_basis; joint_selected_quantity_method; joint_selected_quantity_state; joint_selected_quantity_sample_time; joint_selected_quantity_source; raw_quantity; raw_quantity_unit; raw_quantity_basis; raw_quantity_method; raw_quantity_state; raw_quantity_sample_time; raw_quantity_source; repeat_count; repeat_count_unit; repeat_count_basis; repeat_count_method; repeat_count_state; repeat_count_sample_time; repeat_count_source | 每真实餐非餐资产流体输出各列原生量接收状态关口时间来源，完整物理台账分配前未归一。实际直接划分后共享证据；目标LCI其他独立输出仅审计。保留真联产品优先output_projection不乘资源份额。完整整池另列只一次指定分配。 | 各算子真实兼容原生单位；Item(s)仅真计数 | 每真实批次载荷库存收货退回计量样本资产接收事件 | 真实完整批次装载退回库存报告间隔及实测加有来源剩余或终止全寿命 | 真实厨房装载供应者及全部贡献供应接收使用者期间 | 每参考流 | 可追溯来源校准接收、原生七字段、覆盖责任结转最终归属 |

### 计算规则

| rule_id | 适用对象 | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| fulfilled_count | meal_set_supply | N_target为按operator_gate完整组分质量数量变更接收撤销核清后的真实兼容完成装载接收供应ID数。 | cp_service; output_id; actual_acceptance_id | N_target |  |
| assign_resource | 全部清单行 | 先直接物理追溯及独立过程划分。真实共享责任按每条兼容量乘该条目标驱动量除完整正全部使用者驱动量后再求和。包含每客户菜单航班任务员工非餐使用者和期间；必要待机失败取消停业准备资源仍在责任池。N_target=0或零移交保留来源、结转、接收和最终归属，不除零、不造输出；责任未明不得完整。已归属目标总量仍除相同正目标N一次；仅已按参考流归一量不变。 | raw_quantity; target_driver; all_consumer_driver | assigned_target_total |  |
| normalize_once | 全部清单行 | 归属目标总量除同正目标N_target一次；已按参考流量不变；N0不除且实际结转最终归属。 | assigned_target_total; N_target | per_reference_quantity |  |
| stock_quantity | all stocks and fluids | 收货净量仅扣皮重，先不扣外退。毛领用S=归属期初+入库-期末，并计实际成对责任移交。采用S投入加匹配未用退货输出，或(S-未用退货)投入并省略该输出。已用器具食物流体保留原负荷，不抵新料、不自动给信用。流体储存安装回收角色互斥；期初不存在的新设备原装充注为设备入场，不是再次采购。追踪全部有用废物整机保留含量及独立直接释放；整物组分不可相加，未知差额不是排放。 | cp_food; cp_materials; cp_fluids | exclusive_stock_quantity |  |
| terminal_balance | food water and fates | 保留生料解冻已制备烹调储存装载退回各湿干可食骨皮水脂溶质状态、配方库存量，不设通用得率。同样本纯水湿基w=水/湿质量、干基r=水/非水干质量才满足w=r/(1+r)，先换百分数；含其他挥发物的干燥失重不等于水。终端衡算仅实际外部终端流出及真实期末库存；内部用途移交、组分含量和重复接收视图不可相加。水蒸气是向空气的水物种质量基本流，容纳废水是废物流。须独立物种介质粒径基准因子证据；未知差额不是排放或零。 | cp_food; cp_water; cp_fates; cp_air | actual_terminal_balance_and_gaps |  |
| freight_sum | freight | 每真实独立货段载荷包含湿食物冰包装支撑器具，只扣非货车辆皮重。EACH单次数量乘实际重复次数一次，TOTAL不重复；份额在逐条求和内。完整匹配承运者或实际自营燃料电力装载储存维护全寿命资产物种接收责任互斥计一次。零载荷kg*km不能承载必要空驶定位回程失败责任；须完整覆盖或原生底层责任补齐一次，不造载荷输出。 | cp_freight; packed_wet_payload; distance; repeat_count; record_share | assigned_transport_duty |  |
| asset_life | assets; reusables | 列举真实资产服务的使用者节点、寿命阶段、库存报告维护更换终止及接收期间。使用全部使用者实测寿命加有来源兼容剩余服务，或实际终止总寿命；不得以年度目标N、铭牌容量或虚构年数替代。土地占用面积乘时间及有证据的前后状态事件日期面积为原生量，不是Count；已覆盖土地寿命不重复，缺段实际补齐一次。 | cp_assets; cp_providers | actual_full_life_duty |  |
| physical_output | 全部产品产出 | 完整分配前全部输出台账为每输出ID、接收者、关口、状态、交接时间来源保留其完整未归一原生数量，包括其他餐非餐资产流体。先区分独立划分和真正联产品；记录实际PCR特定分配决策、物理证据、责任、谱系和分配阶段。目标分配后LCI中其他独立餐服务仅作证据，不在资源归属后又作联产品。保留的真实联产品最终交换采用选定实际物理量除同正目标N一次，不乘资源目标份额；已按参考流量不变。另列未分配整池须完整投入全部输出且仅一次指定分配。此输出规则优先于通用资源规则。 | cp_outputs; cp_service; native_output_quantity; joint_selected_quantity | selected_output_quantity |  |

### 数据质量要求

| requirement_id | 适用对象 | Requirement | Evidence |
| --- | --- | --- | --- |
| identity_quality | 全部交换 | 最终交换前验证各具体材料服务物种状态类型方向关口原生属性单位及支持身份。Count仅支持Item(s)，不证明食物服务身份。 | Actual detail/support and foreground record evidence |
| gate_quality | meal_set_supply | 仅计入实际装载至指定运营方厨房舱位并被接收的完整等效已制备餐食组合；核对组成、质量、数量、订单变更及接收/撤销。实际合同交付关口须有记录；公开岗位页不是签收凭证。备餐可用量、计划餐量、航班、旅客、餐车、发票或食用质量均不能替代。 | cp_service; actual contract and loading receipt |
| native_quality | 全部采集协议 | 每数值自带七字段，真实零缺口状态不确定性及兼容换算。 | Actual source and raw-field audit |
| full_scope_quality | 全部职责 | 包含实际食物材料公用工程上游及损耗，以及场址建筑装修厨房车辆升降车制冷设备复用器具织物的制造安装维护更换终末处理。每物理阶段由一个完整提供者或实际直接责任覆盖；缺失阶段须以原生量、状态、来源、时间、责任及覆盖排除链接实际补齐并合并一次，方可完整使用。发票、租赁或未来计划不充分。 | Completed coverage matrix and native stage evidence |
| source_quality | 全部来源使用 | 来源为各真实场址的定性路线佐证，不是一处目标实测清单。不声称公开已签目标合同或通用因子配方得率温度寿命范围；缺口限制使用。 | Source actual extent and target applicability |
| complete_ingredients | meal_set_supply | 最终使用前，按下方完整采集定义将`ingredients`的每项真实情形展开为独立身份交换，完成原生数量、状态、来源、接收方及覆盖证据。缺UUID或数量不能作零；保留固定情形的数量须从余项排除。 | `cp_food` |
| complete_recipe_water | meal_set_supply | 最终使用前，按下方完整采集定义将`recipe_water`的每项真实情形展开为独立身份交换，完成原生数量、状态、来源、接收方及覆盖证据。缺UUID或数量不能作零；保留固定情形的数量须从余项排除。 | `cp_food` |
| complete_electricity | meal_set_supply | 最终使用前，按下方完整采集定义将`electricity`的每项真实情形展开为独立身份交换，完成原生数量、状态、来源、接收方及覆盖证据。缺UUID或数量不能作零；保留固定情形的数量须从余项排除。 | `cp_utilities` |
| complete_fuel | meal_set_supply | 最终使用前，按下方完整采集定义将`fuel`的每项真实情形展开为独立身份交换，完成原生数量、状态、来源、接收方及覆盖证据。缺UUID或数量不能作零；保留固定情形的数量须从余项排除。 | `cp_utilities` |
| complete_thermal | meal_set_supply | 最终使用前，按下方完整采集定义将`thermal`的每项真实情形展开为独立身份交换，完成原生数量、状态、来源、接收方及覆盖证据。缺UUID或数量不能作零；保留固定情形的数量须从余项排除。 | `cp_utilities` |
| complete_water_supply | meal_set_supply | 最终使用前，按下方完整采集定义将`water_supply`的每项真实情形展开为独立身份交换，完成原生数量、状态、来源、接收方及覆盖证据。缺UUID或数量不能作零；保留固定情形的数量须从余项排除。 | `cp_water` |
| complete_materials | meal_set_supply | 最终使用前，按下方完整采集定义将`materials`的每项真实情形展开为独立身份交换，完成原生数量、状态、来源、接收方及覆盖证据。缺UUID或数量不能作零；保留固定情形的数量须从余项排除。 | `cp_materials` |
| complete_packaging | meal_set_supply | 最终使用前，按下方完整采集定义将`packaging`的每项真实情形展开为独立身份交换，完成原生数量、状态、来源、接收方及覆盖证据。缺UUID或数量不能作零；保留固定情形的数量须从余项排除。 | `cp_materials` |
| complete_assets | meal_set_supply | 最终使用前，按下方完整采集定义将`assets`的每项真实情形展开为独立身份交换，完成原生数量、状态、来源、接收方及覆盖证据。缺UUID或数量不能作零；保留固定情形的数量须从余项排除。 | `cp_assets` |
| complete_reusables | meal_set_supply | 最终使用前，按下方完整采集定义将`reusables`的每项真实情形展开为独立身份交换，完成原生数量、状态、来源、接收方及覆盖证据。缺UUID或数量不能作零；保留固定情形的数量须从余项排除。 | `cp_assets` |
| complete_providers | meal_set_supply | 最终使用前，按下方完整采集定义将`providers`的每项真实情形展开为独立身份交换，完成原生数量、状态、来源、接收方及覆盖证据。缺UUID或数量不能作零；保留固定情形的数量须从余项排除。 | `cp_providers` |
| complete_freight | meal_set_supply | 最终使用前，按下方完整采集定义将`freight`的每项真实情形展开为独立身份交换，完成原生数量、状态、来源、接收方及覆盖证据。缺UUID或数量不能作零；保留固定情形的数量须从余项排除。 | `cp_freight` |
| complete_fluid_supply | meal_set_supply | 最终使用前，按下方完整采集定义将`fluid_supply`的每项真实情形展开为独立身份交换，完成原生数量、状态、来源、接收方及覆盖证据。缺UUID或数量不能作零；保留固定情形的数量须从余项排除。 | `cp_fluids` |
| complete_water_withdrawal | meal_set_supply | 最终使用前，按下方完整采集定义将`water_withdrawal`的每项真实情形展开为独立身份交换，完成原生数量、状态、来源、接收方及覆盖证据。缺UUID或数量不能作零；保留固定情形的数量须从余项排除。 | `cp_water` |
| complete_land_occupation | meal_set_supply | 最终使用前，按下方完整采集定义将`land_occupation`的每项真实情形展开为独立身份交换，完成原生数量、状态、来源、接收方及覆盖证据。缺UUID或数量不能作零；保留固定情形的数量须从余项排除。 | `cp_assets` |
| complete_land_transformation_from | meal_set_supply | 最终使用前，按下方完整采集定义将`land_transformation_from`的每项真实情形展开为独立身份交换，完成原生数量、状态、来源、接收方及覆盖证据。缺UUID或数量不能作零；保留固定情形的数量须从余项排除。 | `cp_assets` |
| complete_other_outputs | meal_set_supply | 最终使用前，按下方完整采集定义将`other_outputs`的每项真实情形展开为独立身份交换，完成原生数量、状态、来源、接收方及覆盖证据。缺UUID或数量不能作零；保留固定情形的数量须从余项排除。 | `cp_outputs` |
| complete_unused_return | meal_set_supply | 最终使用前，按下方完整采集定义将`unused_return`的每项真实情形展开为独立身份交换，完成原生数量、状态、来源、接收方及覆盖证据。缺UUID或数量不能作零；保留固定情形的数量须从余项排除。 | `cp_materials` |
| complete_usable_food | meal_set_supply | 最终使用前，按下方完整采集定义将`usable_food`的每项真实情形展开为独立身份交换，完成原生数量、状态、来源、接收方及覆盖证据。缺UUID或数量不能作零；保留固定情形的数量须从余项排除。 | `cp_fates` |
| complete_usable_ware | meal_set_supply | 最终使用前，按下方完整采集定义将`usable_ware`的每项真实情形展开为独立身份交换，完成原生数量、状态、来源、接收方及覆盖证据。缺UUID或数量不能作零；保留固定情形的数量须从余项排除。 | `cp_fates` |
| complete_recovered_fluid | meal_set_supply | 最终使用前，按下方完整采集定义将`recovered_fluid`的每项真实情形展开为独立身份交换，完成原生数量、状态、来源、接收方及覆盖证据。缺UUID或数量不能作零；保留固定情形的数量须从余项排除。 | `cp_fluids` |
| complete_prep_waste | meal_set_supply | 最终使用前，按下方完整采集定义将`prep_waste`的每项真实情形展开为独立身份交换，完成原生数量、状态、来源、接收方及覆盖证据。缺UUID或数量不能作零；保留固定情形的数量须从余项排除。 | `cp_fates` |
| complete_pack_waste | meal_set_supply | 最终使用前，按下方完整采集定义将`pack_waste`的每项真实情形展开为独立身份交换，完成原生数量、状态、来源、接收方及覆盖证据。缺UUID或数量不能作零；保留固定情形的数量须从余项排除。 | `cp_fates` |
| complete_cleaning_waste | meal_set_supply | 最终使用前，按下方完整采集定义将`cleaning_waste`的每项真实情形展开为独立身份交换，完成原生数量、状态、来源、接收方及覆盖证据。缺UUID或数量不能作零；保留固定情形的数量须从余项排除。 | `cp_fates` |
| complete_asset_waste | meal_set_supply | 最终使用前，按下方完整采集定义将`asset_waste`的每项真实情形展开为独立身份交换，完成原生数量、状态、来源、接收方及覆盖证据。缺UUID或数量不能作零；保留固定情形的数量须从余项排除。 | `cp_fates` |
| complete_effluent | meal_set_supply | 最终使用前，按下方完整采集定义将`effluent`的每项真实情形展开为独立身份交换，完成原生数量、状态、来源、接收方及覆盖证据。缺UUID或数量不能作零；保留固定情形的数量须从余项排除。 | `cp_water` |
| complete_fluid_waste | meal_set_supply | 最终使用前，按下方完整采集定义将`fluid_waste`的每项真实情形展开为独立身份交换，完成原生数量、状态、来源、接收方及覆盖证据。缺UUID或数量不能作零；保留固定情形的数量须从余项排除。 | `cp_fluids` |
| complete_direct_species | meal_set_supply | 最终使用前，按下方完整采集定义将`direct_species`的每项真实情形展开为独立身份交换，完成原生数量、状态、来源、接收方及覆盖证据。缺UUID或数量不能作零；保留固定情形的数量须从余项排除。 | `cp_air` |
| complete_land_transformation_to | meal_set_supply | 最终使用前，按下方完整采集定义将`land_transformation_to`的每项真实情形展开为独立身份交换，完成原生数量、状态、来源、接收方及覆盖证据。缺UUID或数量不能作零；保留固定情形的数量须从余项排除。 | `cp_assets` |


### 强制清单完成记录

以下记录是强制物理采集和情形展开要求，不是单条清单交换。原有节点、方向、流类型、数量基准、采集协议、库存去向、供应接收和来源义务全部继续有效。正文对这些编号的引用对应这些完成要求。前景数据集完成前，必须将每项真实物料、服务、资产全寿命、废物流或物种介质分别展开为具原生数量和排他覆盖的独立身份交换。保留固定卡只覆盖其真实受支持情形，其余真实情形须无重叠协调。身份、发生或数量缺失仍待采集，不能填零或删项。内部配对交接和组分审计视图不可相加；必要全寿命与供应商阶段必须实际完成一次。

#### ingredients

责任节点与原流角色：meal_set_supply / inputs / product

仅实际额外外购原料，按物种材料配方批次状态分别展开；外购已制备组分保留完整上游。内部收货退回仅传原负荷，不再采购计制造。

- 选定流：实际各类食物饮料配制原料
- 流属性/单位：Mass / kg
- 数量规则：依cp_food及all_user_pool取得实际互斥责任原生量，除同正配置N_target一次；已按参考流量不变；N_target=0保留不除。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_food`
- 来源：`gategroup-cook-current`; `gategroup-finalizer-current`; `gategroup-transport-current`; `gategroup-equipment-current`; `gategroup-wash-current`; `ekfc-airline-current`

范围证据需求：须真实兼容前景数量库存来源完整物理责任及已验证具体身份；无通用每餐餐车航班配方得率温度废物寿命因子或零默认。

#### recipe_water

责任节点与原流角色：meal_set_supply / inputs / product

实际配方添加及相态，与原料含水及清洗用水区分。

本卡为独立身份分支`recipe_water_liquid_tap`之外的余项清单要求。已计入分支的实际数量不再计入本余项交换，原类目总量仅作不可相加的协调审计。其他实际材料、状态、来源或介质仍须保留自身经核实的身份、原生数量及供应接收责任；记录缺失时，不推定条件分支发生、不发生或数量为零。

- 选定流：实际配方水和冰
- 流属性/单位：Mass / kg
- 数量规则：依cp_food及all_user_pool取得实际互斥责任原生量，除同正配置N_target一次；已按参考流量不变；N_target=0保留不除。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_food`
- 来源：`gategroup-cook-current`; `gategroup-finalizer-current`; `gategroup-transport-current`; `gategroup-equipment-current`; `gategroup-wash-current`; `ekfc-airline-current`

范围证据需求：须真实兼容前景数量库存来源完整物理责任及已验证具体身份；无通用每餐餐车航班配方得率温度废物寿命因子或零默认。

#### electricity

责任节点与原流角色：meal_set_supply / inputs / product

实际计量充电及必要待机，积分电量不再乘时长。

本卡为独立身份分支`electricity_ac`之外的余项清单要求。已计入分支的实际数量不再计入本余项交换，原类目总量仅作不可相加的协调审计。其他实际材料、状态、来源或介质仍须保留自身经核实的身份、原生数量及供应接收责任；记录缺失时，不推定条件分支发生、不发生或数量为零。

- 选定流：实际未覆盖厨房储存清洗装载车辆用电
- 流属性/单位：Energy / kWh
- 数量规则：依cp_utilities及all_user_pool取得实际互斥责任原生量，除同正配置N_target一次；已按参考流量不变；N_target=0保留不除。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_utilities`
- 来源：`gategroup-cook-current`; `gategroup-finalizer-current`; `gategroup-transport-current`; `gategroup-equipment-current`; `gategroup-wash-current`; `ekfc-airline-current`

范围证据需求：须真实兼容前景数量库存来源完整物理责任及已验证具体身份；无通用每餐餐车航班配方得率温度废物寿命因子或零默认。

#### fuel

责任节点与原流角色：meal_set_supply / inputs / product

实际品级状态供应库存与燃烧活动区分；不重复完整提供者已含燃料，不普遍纳入范围外客运飞机牵引。

- 选定流：实际各烹调和地面车辆燃料
- 流属性/单位：Mass / kg
- 数量规则：依cp_utilities及all_user_pool取得实际互斥责任原生量，除同正配置N_target一次；已按参考流量不变；N_target=0保留不除。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_utilities`
- 来源：`gategroup-cook-current`; `gategroup-finalizer-current`; `gategroup-transport-current`; `gategroup-equipment-current`; `gategroup-wash-current`; `ekfc-airline-current`

范围证据需求：须真实兼容前景数量库存来源完整物理责任及已验证具体身份；无通用每餐餐车航班配方得率温度废物寿命因子或零默认。

#### thermal

责任节点与原流角色：meal_set_supply / inputs / product

实际交付热冷属性状态和范围，不由烹调推断独立能厂。

本卡为独立身份分支`thermal_delivered_heat`之外的余项清单要求。已计入分支的实际数量不再计入本余项交换，原类目总量仅作不可相加的协调审计。其他实际材料、状态、来源或介质仍须保留自身经核实的身份、原生数量及供应接收责任；记录缺失时，不推定条件分支发生、不发生或数量为零。

- 选定流：实际外购有用热冷服务
- 流属性/单位：Energy / MJ
- 数量规则：依cp_utilities及all_user_pool取得实际互斥责任原生量，除同正配置N_target一次；已按参考流量不变；N_target=0保留不除。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_utilities`
- 来源：`gategroup-cook-current`; `gategroup-finalizer-current`; `gategroup-transport-current`; `gategroup-equipment-current`; `gategroup-wash-current`; `ekfc-airline-current`

范围证据需求：须真实兼容前景数量库存来源完整物理责任及已验证具体身份；无通用每餐餐车航班配方得率温度废物寿命因子或零默认。

#### water_supply

责任节点与原流角色：meal_set_supply / inputs / product

实际预处理洗涤清洁设备用途；表读数不是水库存。

本卡为独立身份分支`water_supply_liquid_tap`之外的余项清单要求。已计入分支的实际数量不再计入本余项交换，原类目总量仅作不可相加的协调审计。其他实际材料、状态、来源或介质仍须保留自身经核实的身份、原生数量及供应接收责任；记录缺失时，不推定条件分支发生、不发生或数量为零。

- 选定流：实际外购操作用水
- 流属性/单位：Volume / m3
- 数量规则：依cp_water及all_user_pool取得实际互斥责任原生量，除同正配置N_target一次；已按参考流量不变；N_target=0保留不除。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_water`
- 来源：`gategroup-cook-current`; `gategroup-finalizer-current`; `gategroup-transport-current`; `gategroup-equipment-current`; `gategroup-wash-current`; `ekfc-airline-current`

范围证据需求：须真实兼容前景数量库存来源完整物理责任及已验证具体身份；无通用每餐餐车航班配方得率温度废物寿命因子或零默认。

#### materials

责任节点与原流角色：meal_set_supply / inputs / product

各浓缩剂配好溶液有效成分稀释水角色展开并非重复相加；收货未用退回有库存身份。

本卡为独立身份分支`materials_synthetic_detergent`之外的余项清单要求。已计入分支的实际数量不再计入本余项交换，原类目总量仅作不可相加的协调审计。其他实际材料、状态、来源或介质仍须保留自身经核实的身份、原生数量及供应接收责任；记录缺失时，不推定条件分支发生、不发生或数量为零。

- 选定流：实际各清洁和辅助材料
- 流属性/单位：Mass / kg
- 数量规则：依cp_materials及all_user_pool取得实际互斥责任原生量，除同正配置N_target一次；已按参考流量不变；N_target=0保留不除。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_materials`
- 来源：`gategroup-cook-current`; `gategroup-finalizer-current`; `gategroup-transport-current`; `gategroup-equipment-current`; `gategroup-wash-current`; `ekfc-airline-current`

范围证据需求：须真实兼容前景数量库存来源完整物理责任及已验证具体身份；无通用每餐餐车航班配方得率温度废物寿命因子或零默认。

#### packaging

责任节点与原流角色：meal_set_supply / inputs / product

真实接触保温盖衬标签包覆角色及废品去向，包装质量数量独立测量。

- 选定流：实际一次性食物保护展示装载包装
- 流属性/单位：Mass / kg
- 数量规则：依cp_materials及all_user_pool取得实际互斥责任原生量，除同正配置N_target一次；已按参考流量不变；N_target=0保留不除。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_materials`
- 来源：`gategroup-cook-current`; `gategroup-finalizer-current`; `gategroup-transport-current`; `gategroup-equipment-current`; `gategroup-wash-current`; `ekfc-airline-current`

范围证据需求：须真实兼容前景数量库存来源完整物理责任及已验证具体身份；无通用每餐餐车航班配方得率温度废物寿命因子或零默认。

#### assets

责任节点与原流角色：meal_set_supply / inputs / product

Item(s)仅真实可数兼容完整资产服务；真实质量面积时间服务单位须另展，不强转Count。含升降车制冷清洗设施全阶段。

- 选定流：实际全寿命场址厨房地面装载设备服务
- 流属性/单位：Count / Item(s)
- 数量规则：依cp_assets及all_user_pool取得实际互斥责任原生量，除同正配置N_target一次；已按参考流量不变；N_target=0保留不除。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_assets`
- 来源：`gategroup-cook-current`; `gategroup-finalizer-current`; `gategroup-transport-current`; `gategroup-equipment-current`; `gategroup-wash-current`; `ekfc-airline-current`

范围证据需求：须真实兼容前景数量库存来源完整物理责任及已验证具体身份；无通用每餐餐车航班配方得率温度废物寿命因子或零默认。

#### reusables

责任节点与原流角色：meal_set_supply / inputs / product

真实制造维护更换终末处理按全部使用者寿命；清洗退回不再买新器具。

- 选定流：实际全寿命餐盘餐车餐具容器织物服务
- 流属性/单位：Count / Item(s)
- 数量规则：依cp_assets及all_user_pool取得实际互斥责任原生量，除同正配置N_target一次；已按参考流量不变；N_target=0保留不除。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_assets`
- 来源：`gategroup-cook-current`; `gategroup-finalizer-current`; `gategroup-transport-current`; `gategroup-equipment-current`; `gategroup-wash-current`; `ekfc-airline-current`

范围证据需求：须真实兼容前景数量库存来源完整物理责任及已验证具体身份；无通用每餐餐车航班配方得率温度废物寿命因子或零默认。

#### providers

责任节点与原流角色：meal_set_supply / inputs / product

仅真实可数兼容服务，按各提供者原生单位展开；食品制备运输清洗洗衣接收全寿命覆盖及实际缺段补齐，发票不等于完整。

- 选定流：实际补充的完整物理提供者服务
- 流属性/单位：Count / Item(s)
- 数量规则：依cp_providers及all_user_pool取得实际互斥责任原生量，除同正配置N_target一次；已按参考流量不变；N_target=0保留不除。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_providers`
- 来源：`gategroup-cook-current`; `gategroup-finalizer-current`; `gategroup-transport-current`; `gategroup-equipment-current`; `gategroup-wash-current`; `ekfc-airline-current`

范围证据需求：须真实兼容前景数量库存来源完整物理责任及已验证具体身份；无通用每餐餐车航班配方得率温度废物寿命因子或零默认。

#### freight

责任节点与原流角色：meal_set_supply / inputs / product

各真实供货装载回程接收货段；自营能源资产与完整承运者互斥，空驶责任真实覆盖。 货运优先freight_empty：record_share就是同一有证据target_driver/all_consumer_driver份额，仅在逐货段求和内用一次（直接物理目标追溯份额=1）。已由freight_sum归属的货运总量不再按all_user_pool缩放，仅除同正兼容N_target一次。已按参考流货运不变，不将record_share和相同通用目标份额重复乘。

- 选定流：实际完整湿包装载荷运输工作
- 流属性/单位：Mass * Length / t*km
- 数量规则：依cp_freight及freight_empty用同一真实份额归属一次的货运总量，仅除同正兼容N_target一次；不再all_user_pool缩放；已按参考流量不变；N0保留。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_freight`
- 来源：`gategroup-cook-current`; `gategroup-finalizer-current`; `gategroup-transport-current`; `gategroup-equipment-current`; `gategroup-wash-current`; `ekfc-airline-current`

范围证据需求：须真实兼容前景数量库存来源完整物理责任及已验证具体身份；无通用每餐餐车航班配方得率温度废物寿命因子或零默认。

#### fluid_supply

责任节点与原流角色：meal_set_supply / inputs / product

各确切物种材料状态，设备原装充注另角色，存储安装回收不重复。

- 选定流：实际独立制冷剂和传热流体供应
- 流属性/单位：Mass / kg
- 数量规则：依cp_fluids及all_user_pool取得实际互斥责任原生量，除同正配置N_target一次；已按参考流量不变；N_target=0保留不除。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_fluids`
- 来源：`gategroup-cook-current`; `gategroup-finalizer-current`; `gategroup-transport-current`; `gategroup-equipment-current`; `gategroup-wash-current`; `ekfc-airline-current`

范围证据需求：须真实兼容前景数量库存来源完整物理责任及已验证具体身份；无通用每餐餐车航班配方得率温度废物寿命因子或零默认。

#### water_withdrawal

责任节点与原流角色：meal_set_supply / inputs / elementary

仅实际环境来源介质，外购水不重复记取水。

- 选定流：实际特定来源直接取水
- 流属性/单位：Volume / m3
- 数量规则：依cp_water及all_user_pool取得实际互斥责任原生量，除同正配置N_target一次；已按参考流量不变；N_target=0保留不除。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_water`
- 来源：`gategroup-cook-current`; `gategroup-finalizer-current`; `gategroup-transport-current`; `gategroup-equipment-current`; `gategroup-wash-current`; `ekfc-airline-current`

范围证据需求：须真实兼容前景数量库存来源完整物理责任及已验证具体身份；无通用每餐餐车航班配方得率温度废物寿命因子或零默认。

#### land_occupation

责任节点与原流角色：meal_set_supply / inputs / elementary

仅实际未由完整资产提供者覆盖的场址土地占用。真实面积及有来源占用期间，全部使用者期间全寿命归属，不转Count不造零或历史。

- 选定流：实际未覆盖土地完整服务期间占用
- 流属性/单位：Area * Time / m2*a
- 数量规则：仅实际未覆盖原生土地量，依full_life_land及cp_assets归属；除同正目标N_target一次；已按参考流量不变；未知不作零。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_assets`

范围证据需求：实际面积期间事件前后状态来源及完整物理覆盖；不设通用面积寿命或土地变化。

#### land_transformation_from

责任节点与原流角色：meal_set_supply / inputs / elementary

仅真实有证据转化事件，原生面积原状态事件日期责任来源及匹配后状态记录。既有场址不证明转化；提供者已含同事件不重复。

- 选定流：实际有证据的土地转化原状态
- 流属性/单位：Area / m2
- 数量规则：仅实际未覆盖原生土地量，依full_life_land及cp_assets归属；除同正目标N_target一次；已按参考流量不变；未知不作零。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_assets`

范围证据需求：实际面积期间事件前后状态来源及完整物理覆盖；不设通用面积寿命或土地变化。

#### other_outputs

责任节点与原流角色：meal_set_supply / outputs / product

条件Count仅真实其他餐服务；每其他餐非餐复用物流体输出均有自有原生属性量关口，异单位展开。目标LCI中其他独立输出仅证据，优先output_projection。

- 选定流：实际其他预期输出与有用移交
- 流属性/单位：Count / Item(s)
- 数量规则：依output_projection及cp_outputs选择实际原生量；除同正兼容N_target一次；已按参考流量不变。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_outputs`
- 来源：`gategroup-cook-current`; `gategroup-finalizer-current`; `gategroup-transport-current`; `gategroup-equipment-current`; `gategroup-wash-current`; `ekfc-airline-current`

范围证据需求：须真实兼容前景数量库存来源完整物理责任及已验证具体身份；无通用每餐餐车航班配方得率温度废物寿命因子或零默认。

#### unused_return

责任节点与原流角色：meal_set_supply / outputs / product

仅匹配原库存原状态未用物；毛投入加本输出或净消耗投入省本输出，排除已用退回。

- 选定流：实际匹配未用供应外退
- 流属性/单位：Mass / kg
- 数量规则：依cp_materials及all_user_pool取得实际互斥责任原生量，除同正配置N_target一次；已按参考流量不变；N_target=0保留不除。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_materials`
- 来源：`gategroup-cook-current`; `gategroup-finalizer-current`; `gategroup-transport-current`; `gategroup-equipment-current`; `gategroup-wash-current`; `ekfc-airline-current`

范围证据需求：须真实兼容前景数量库存来源完整物理责任及已验证具体身份；无通用每餐餐车航班配方得率温度废物寿命因子或零默认。

#### usable_food

责任节点与原流角色：meal_set_supply / outputs / product

真实接收方状态的有用食物，不计目标合格组合、不自动废物信用；内部调配仅谱系。

- 选定流：实际接收的有用已制备食物外送
- 流属性/单位：Mass / kg
- 数量规则：依output_projection及cp_fates选择实际原生量；除同正兼容N_target一次；已按参考流量不变。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_fates`
- 来源：`gategroup-cook-current`; `gategroup-finalizer-current`; `gategroup-transport-current`; `gategroup-equipment-current`; `gategroup-wash-current`; `ekfc-airline-current`

范围证据需求：须真实兼容前景数量库存来源完整物理责任及已验证具体身份；无通用每餐餐车航班配方得率温度废物寿命因子或零默认。

#### usable_ware

责任节点与原流角色：meal_set_supply / outputs / product

真实接收方质量旧负荷及原生量，不自动抵新制造。

- 选定流：实际有用旧态器具设备织物外送
- 流属性/单位：Mass / kg
- 数量规则：依output_projection及cp_fates选择实际原生量；除同正兼容N_target一次；已按参考流量不变。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_fates`
- 来源：`gategroup-cook-current`; `gategroup-finalizer-current`; `gategroup-transport-current`; `gategroup-equipment-current`; `gategroup-wash-current`; `ekfc-airline-current`

范围证据需求：须真实兼容前景数量库存来源完整物理责任及已验证具体身份；无通用每餐餐车航班配方得率温度废物寿命因子或零默认。

#### recovered_fluid

责任节点与原流角色：meal_set_supply / outputs / product

确切回收物种和实际接收；内部留存回收库存不另作外送或新料信用。

- 选定流：实际有用回收流体外送
- 流属性/单位：Mass / kg
- 数量规则：依output_projection及cp_fluids选择实际原生量；除同正兼容N_target一次；已按参考流量不变。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_fluids`
- 来源：`gategroup-cook-current`; `gategroup-finalizer-current`; `gategroup-transport-current`; `gategroup-equipment-current`; `gategroup-wash-current`; `ekfc-airline-current`

范围证据需求：须真实兼容前景数量库存来源完整物理责任及已验证具体身份；无通用每餐餐车航班配方得率温度废物寿命因子或零默认。

#### prep_waste

责任节点与原流角色：meal_set_supply / outputs / waste

真实修整骨溢洒不合格废弃接收；留存返工有用物另列，整体与组分审计不相加。

- 选定流：实际预处理烹调包装运输食物废物
- 流属性/单位：Mass / kg
- 数量规则：依cp_fates及all_user_pool取得实际互斥责任原生量，除同正配置N_target一次；已按参考流量不变；N_target=0保留不除。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_fates`
- 来源：`gategroup-cook-current`; `gategroup-finalizer-current`; `gategroup-transport-current`; `gategroup-equipment-current`; `gategroup-wash-current`; `ekfc-airline-current`

范围证据需求：须真实兼容前景数量库存来源完整物理责任及已验证具体身份；无通用每餐餐车航班配方得率温度废物寿命因子或零默认。

#### pack_waste

责任节点与原流角色：meal_set_supply / outputs / waste

按真实材料接触污染接收方分列，不重复整物组分、不把复用物假定废弃。

本卡为独立身份分支`pack_waste_paper_pack`; `pack_waste_metal_pack`之外的余项清单要求。已计入分支的实际数量不再计入本余项交换，原类目总量仅作不可相加的协调审计。其他实际材料、状态、来源或介质仍须保留自身经核实的身份、原生数量及供应接收责任；记录缺失时，不推定条件分支发生、不发生或数量为零。

- 选定流：实际各类包装废物
- 流属性/单位：Mass / kg
- 数量规则：依cp_fates及all_user_pool取得实际互斥责任原生量，除同正配置N_target一次；已按参考流量不变；N_target=0保留不除。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_fates`
- 来源：`gategroup-cook-current`; `gategroup-finalizer-current`; `gategroup-transport-current`; `gategroup-equipment-current`; `gategroup-wash-current`; `ekfc-airline-current`

范围证据需求：须真实兼容前景数量库存来源完整物理责任及已验证具体身份；无通用每餐餐车航班配方得率温度废物寿命因子或零默认。

#### cleaning_waste

责任节点与原流角色：meal_set_supply / outputs / waste

真实混合物整体及食物脂肪化学流体组分不相加；独立物料去向分列。

- 选定流：实际废清洁基材滤材和捕集固体
- 流属性/单位：Mass / kg
- 数量规则：依cp_fates及all_user_pool取得实际互斥责任原生量，除同正配置N_target一次；已按参考流量不变；N_target=0保留不除。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_fates`
- 来源：`gategroup-cook-current`; `gategroup-finalizer-current`; `gategroup-transport-current`; `gategroup-equipment-current`; `gategroup-wash-current`; `ekfc-airline-current`

范围证据需求：须真实兼容前景数量库存来源完整物理责任及已验证具体身份；无通用每餐餐车航班配方得率温度废物寿命因子或零默认。

#### asset_waste

责任节点与原流角色：meal_set_supply / outputs / waste

整机保留含量和拆出部件互斥；全寿命已覆盖处置不重复。

- 选定流：实际退役器具设备织物和部件
- 流属性/单位：Mass / kg
- 数量规则：依cp_fates及all_user_pool取得实际互斥责任原生量，除同正配置N_target一次；已按参考流量不变；N_target=0保留不除。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_fates`
- 来源：`gategroup-cook-current`; `gategroup-finalizer-current`; `gategroup-transport-current`; `gategroup-equipment-current`; `gategroup-wash-current`; `ekfc-airline-current`

范围证据需求：须真实兼容前景数量库存来源完整物理责任及已验证具体身份；无通用每餐餐车航班配方得率温度废物寿命因子或零默认。

#### effluent

责任节点与原流角色：meal_set_supply / outputs / waste

真实罐污水管提供者接收及水食物脂化学状态，分离脂固体各实际去向；不以供水减蒸气猜量。

- 选定流：实际容纳的清洗和预处理废水
- 流属性/单位：Mass / kg
- 数量规则：依cp_water及all_user_pool取得实际互斥责任原生量，除同正配置N_target一次；已按参考流量不变；N_target=0保留不除。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_water`
- 来源：`gategroup-cook-current`; `gategroup-finalizer-current`; `gategroup-transport-current`; `gategroup-equipment-current`; `gategroup-wash-current`; `ekfc-airline-current`

范围证据需求：须真实兼容前景数量库存来源完整物理责任及已验证具体身份；无通用每餐餐车航班配方得率温度废物寿命因子或零默认。

#### fluid_waste

责任节点与原流角色：meal_set_supply / outputs / waste

确切物种容纳接收去向，与有用回收空气释放整机保留含量区分。

- 选定流：实际容纳的设备流体废物
- 流属性/单位：Mass / kg
- 数量规则：依cp_fluids及all_user_pool取得实际互斥责任原生量，除同正配置N_target一次；已按参考流量不变；N_target=0保留不除。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_fluids`
- 来源：`gategroup-cook-current`; `gategroup-finalizer-current`; `gategroup-transport-current`; `gategroup-equipment-current`; `gategroup-wash-current`; `ekfc-airline-current`

范围证据需求：须真实兼容前景数量库存来源完整物理责任及已验证具体身份；无通用每餐餐车航班配方得率温度废物寿命因子或零默认。

#### direct_species

责任节点与原流角色：meal_set_supply / outputs / elementary

实际燃烧烹调流体释放按确切物种粒径基准介质展开；VOC/NOx/PM泛称及补充量不证明具体物种释放。

本卡为独立身份分支`direct_species_co2_fossil_air`; `direct_species_methane_fossil_air`; `direct_species_nitrous_oxide_air`之外的余项清单要求。已计入分支的实际数量不再计入本余项交换，原类目总量仅作不可相加的协调审计。其他实际材料、状态、来源或介质仍须保留自身经核实的身份、原生数量及供应接收责任；记录缺失时，不推定条件分支发生、不发生或数量为零。

- 选定流：实际各物质向明确介质释放
- 流属性/单位：Mass / kg
- 数量规则：依cp_air及all_user_pool取得实际互斥责任原生量，除同正配置N_target一次；已按参考流量不变；N_target=0保留不除。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_air`
- 来源：`gategroup-cook-current`; `gategroup-finalizer-current`; `gategroup-transport-current`; `gategroup-equipment-current`; `gategroup-wash-current`; `ekfc-airline-current`

范围证据需求：须真实兼容前景数量库存来源完整物理责任及已验证具体身份；无通用每餐餐车航班配方得率温度废物寿命因子或零默认。

#### land_transformation_to

责任节点与原流角色：meal_set_supply / outputs / elementary

仅与land_transformation_from同实际有证据事件的真实后状态原生面积日期责任来源。同空间覆盖事件匹配，未知历史不猜变化或零，排提供者重复。

- 选定流：实际有证据的土地转化后状态
- 流属性/单位：Area / m2
- 数量规则：仅实际未覆盖原生土地量，依full_life_land及cp_assets归属；除同正目标N_target一次；已按参考流量不变；未知不作零。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_assets`

范围证据需求：实际面积期间事件前后状态来源及完整物理覆盖；不设通用面积寿命或土地变化。


## 9. 验证规则

| rule_id | applies_to | rule |
| --- | --- | --- |
| gate_complete | meal_set_supply | 仅计入实际装载至指定运营方厨房舱位并被接收的完整等效已制备餐食组合；核对组成、质量、数量、订单变更及接收/撤销。实际合同交付关口须有记录；公开岗位页不是签收凭证。备餐可用量、计划餐量、航班、旅客、餐车、发票或食用质量均不能替代。 |
| route_complete | meal_set_supply | 各原料、已制备组分、配方水冰、油脂调味料进入真实厨房配制、预处理、烹调或冷配。记录配制/处理前后状态、实际损耗/不合格去向及保护包装状态。保温冷藏、发运、地面运输和客户指定装载在一体供应过程中各保留事件/责任链接；不得虚构额外工厂或再次购买相同最终供应。 |
| contract_complete | 全部阶段 | 最终产品是向运营方装载交付的已制备餐食供应，不是旅客分餐或食用服务。实际供应方合同负责的交付后回收、分类、食物/废物处置、清洗和接收方均保留在其分子。运营方负责的机上储存复热装盘供应另列责任；不得声称已完成这些阶段或普遍计入整航班客运牵引。若声称完整旅客餐饮服务，须审查实际扩展阶段与不同关口。 |
| scope_life_complete | assets providers land | 包含实际食物材料公用工程上游及损耗，以及场址建筑装修厨房车辆升降车制冷设备复用器具织物的制造安装维护更换终末处理。每物理阶段由一个完整提供者或实际直接责任覆盖；缺失阶段须以原生量、状态、来源、时间、责任及覆盖排除链接实际补齐并合并一次，方可完整使用。发票、租赁或未来计划不充分。 列举真实资产服务的使用者节点、寿命阶段、库存报告维护更换终止及接收期间。使用全部使用者实测寿命加有来源兼容剩余服务，或实际终止总寿命；不得以年度目标N、铭牌容量或虚构年数替代。土地占用面积乘时间及有证据的前后状态事件日期面积为原生量，不是Count；已覆盖土地寿命不重复，缺段实际补齐一次。 |
| native_terminal_complete | 全部交换 | 保留生料解冻已制备烹调储存装载退回各湿干可食骨皮水脂溶质状态、配方库存量，不设通用得率。同样本纯水湿基w=水/湿质量、干基r=水/非水干质量才满足w=r/(1+r)，先换百分数；含其他挥发物的干燥失重不等于水。终端衡算仅实际外部终端流出及真实期末库存；内部用途移交、组分含量和重复接收视图不可相加。水蒸气是向空气的水物种质量基本流，容纳废水是废物流。须独立物种介质粒径基准因子证据；未知差额不是排放或零。 收货净量仅扣皮重，先不扣外退。毛领用S=归属期初+入库-期末，并计实际成对责任移交。采用S投入加匹配未用退货输出，或(S-未用退货)投入并省略该输出。已用器具食物流体保留原负荷，不抵新料、不自动给信用。流体储存安装回收角色互斥；期初不存在的新设备原装充注为设备入场，不是再次采购。追踪全部有用废物整机保留含量及独立直接释放；整物组分不可相加，未知差额不是排放。 |
| output_period_complete | 全部资源 | 先直接物理追溯及独立过程划分。真实共享责任按每条兼容量乘该条目标驱动量除完整正全部使用者驱动量后再求和。包含每客户菜单航班任务员工非餐使用者和期间；必要待机失败取消停业准备资源仍在责任池。N_target=0或零移交保留来源、结转、接收和最终归属，不除零、不造输出；责任未明不得完整。已归属目标总量仍除相同正目标N一次；仅已按参考流归一量不变。 |
| freight_complete | freight | 每真实独立货段载荷包含湿食物冰包装支撑器具，只扣非货车辆皮重。EACH单次数量乘实际重复次数一次，TOTAL不重复；份额在逐条求和内。完整匹配承运者或实际自营燃料电力装载储存维护全寿命资产物种接收责任互斥计一次。零载荷kg*km不能承载必要空驶定位回程失败责任；须完整覆盖或原生底层责任补齐一次，不造载荷输出。 |
| output_stage_complete | 全部产出 | 完整分配前全部输出台账为每输出ID、接收者、关口、状态、交接时间来源保留其完整未归一原生数量，包括其他餐非餐资产流体。先区分独立划分和真正联产品；记录实际PCR特定分配决策、物理证据、责任、谱系和分配阶段。目标分配后LCI中其他独立餐服务仅作证据，不在资源归属后又作联产品。保留的真实联产品最终交换采用选定实际物理量除同正目标N一次，不乘资源目标份额；已按参考流量不变。另列未分配整池须完整投入全部输出且仅一次指定分配。此输出规则优先于通用资源规则。 |
| rework_complete | food pack returns | 各生料已制备储存装载不合格部分撤销退回状态均连原批次及实际返工复热调配留存有用外送废弃和接收方。原负荷保留，仅加真实新增作业运输清洗储存。内部旧食物脏物退回是谱系，不是新制造或新增餐食数。成对移交两侧同接收关口原生量状态时间及来源接收者，途中差额独立证据；不合格不计合格输出。 |
| bilingual_complete | 全部方法规则 | 要求英中卡节点规则协议ID关口状态原生单位必填字段一致及当前确定投影；缺具体身份数量不得最终用，检查通过不等于科学审查发布。 |


检查实际土地占用面积时间及有证据前后状态转化基本流，只记录真实未覆盖责任；检查货运逐条份额归属后不重复分配。

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | secondary_dataset; background_dataset after actual identity and completeness review |
| downstream_use | 实际向运营方装载交付并接收的等效已制备餐食组合供应 |
| allowed_use | 有证据的实际运营方装载接收等效受保护组合及真实完整供应方责任 |
| excluded_use | 旅客供餐食用整航班声称、未审查路线、缺接收身份原生量全寿命责任覆盖 |
| required_metadata | actual_provider_kitchen_loading_operator_galley; actual_menu_recipe_components_portion_pack_service_version; actual_operator_loaded_receipt_state_time_acceptance; actual_required_quantity_quality_and_order_changes; no_assumed_flight_trolley_passenger_equivalence; actual_contract_owned_return_wash_receiver_duties; actual_food_pack_wet_cargo_stock_water_native_views; all_outputs_users_periods_idle_failed_N0_resolution; complete_alluser_asset_land_reusable_life; exclusive_completed_provider_missing_stages; each_numeric_operand_unit_basis_method_state_sample_time_source |
| required_quality_disclosure | 真实来源场址日期适用性、测量模型量不确定性及全部身份数值范围库存物种介质资产土地提供者接收缺口与限制 |
| update_trigger | 菜单组分配方份量包装状态版本运营方关口合同回收责任、路线提供者资产土地全输出期间去向身份改变 |


## 11. 数据源

| source_id | type | reference | used_for |
| --- | --- | --- | --- |
| unsd-cpc3-2025 | official_guidance | https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf; accessed2026-10-20 | 63392包括为航空公司及其他运输公司按合同备制和供应食品。63391对应特定活动餐饮，63393对应其他客户指定地点的持续供餐或特许经营；63399涉及无座或移动餐饮，63400为仅饮品服务。仅用于分类范围，不能证明物理路线、通用产品、数量或生命周期边界。 |
| gategroup-finalizer-current | handbook | https://jobs.gategroup.com/en/job/inwood/flight-finalizer-24-50-weekly-pay/49234/91463570224; accessed2026-10-20 | 航班配餐核对岗位按客户要求检查已提供餐食的质量、数量及订单变更履行情况，支持实际客户指定版本及已履约数量的交接条件，不能用计划旅客数或航班数替代。岗位描述只支持定性检查，不是实际客户合同、签收记录、食物数量、温度或份量证据。 |
| gategroup-transport-current | handbook | https://jobs.gategroup.com/en/job/new-york/transportation-supervisor/49234/102017487952; accessed2026-10-20 | 描述厨房与驾驶员、装卸口协调，依据控制单向实际飞机或航班分派驾驶员，更新航空服务和设备变化，以及厨房舱设备运输、车辆清洁、航空公司图示规格和车队维护。页面发布、提交及关闭日期不一致，不依赖其职位仍在招聘的状态；仅证明当前托管页面描述的运营职责，不提供定量路线、航班因子或所有权合同。 |
| gategroup-wash-current | handbook | https://jobs.gategroup.com/en/job/denver/dishroom-attendant-23-00-hr/49234/90811028672; accessed2026-10-20 | 可洗托盘、碗、盘、杯、玻璃器皿和餐具分别分类，经输送带清洗、取出并存放；部分包装按客户图示完成。不提供每清洗周期的水、化学品、能源因子或设备寿命，也不能证明所有场地都使用相同设备。 |
| gategroup-cook-current | handbook | https://jobs.gategroup.com/en/job/seattle/specialty-cook-chinese-cuisine-28-00-hr/49234/91320795040; accessed2026-10-20 | 描述实际航空公司规格菜单和配方、烹调设备与呈现、食物洗切、储存区与工作区间转移，以及餐饮设备和设施清洁。特定菜系岗位只支持路线职责，不强制冷食组分烹调，也不提供通用配方、得率或温度。 |
| ekfc-airline-current | handbook | https://www.emiratesflightcatering.com/services/airline-and-airport-services/; accessed2026-10-20 | 描述运行中的中央厨房及烘焙、客户定制机上菜单、设备和库存处理、维护及升降车运输，并另列休息室和其他支持服务。场地总量示例不作PCR因子；页面不公开实际合同交接关口、份量或签收证据。洗衣等附属服务是独立职责，不能自动视为已完整包含在餐食投入中。 |
| lsg-trolley-historical | handbook | https://www.lsg-group.com/news/day-life-trolley-lsg-sky-chefs/; accessed2026-10-20; historical operator description, publication date not verified | 历史第一方运营描述包括已用餐车返回、分类、清空、清洗，托盘和器具清洗，备好托盘装车、冷却、卡车运输以及机上装载固定。仅为历史佐证，不是唯一当前路线证据；不提供通用当前安全温度、洗涤耗用量、周期或负担因子。 |
| gategroup-equipment-current | handbook | https://jobs.gategroup.com/en/job/schiller-park/equipment-supervisor/49234/101157537872; accessed2026-10-20 | 洗碗、预装载、饮料和运输区域支持配餐，涉及实际客户航空公司图示规格、客户物料库存、每日温度记录、库存供应和设备维护。仅为定性真实职责来源，不提供通用机上配置、因子、温度限值或目标合同。该岗位场地与其他运营职责佐证的场地不同，不能声称是一份实际观察的同厂数据集。 |
