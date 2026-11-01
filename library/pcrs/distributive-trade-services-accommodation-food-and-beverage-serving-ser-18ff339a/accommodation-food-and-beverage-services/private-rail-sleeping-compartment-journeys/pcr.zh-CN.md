---
pcr_id: pcr.private-rail-sleeping-compartment-journeys
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 铁路独占卧铺包厢旅程住宿服务

## 1. 范围与适用性

适用于移动铁路服务中实际履行的独占私人卧铺包厢住宿。以真实运营库存、车辆车厢包厢配置、分配、已准备睡眠设施、可进入状态与验收记录确定产品。交付依据整间包厢独占，而不是特定床数、卫浴形状、品牌或票价。排除独立销售的共享床位、普通或可躺座椅、固定分配住宅房间、单纯客运、单纯餐饮以及未履行预订和容量。付费附加票或组合票均不能证明物理履行或环境负荷分配。[unsd-cpc3-63290; cs-room-supplements; nightjet-sleeping; nightjet-private]

独立方法需要在于按区段移动的住宿，与其他服务用户共享车体、牵引、辅助供能、轨道车站车库设施及空驶准备职责。追踪真实车组分合、各区段车厢成员以及住宿与运输阶段责任。纳入住宿有据物理份额的运行与全寿命资产，不因车票另售而删除，也不再叠加第二份整列车运输数据。供应商所有的实际职责仍须负责。[cs-current-trains; cs-traction-depot-eir-2025]

本已审路线采用实际完成的第三方牵引铁路运行及车厢车库服务接口，明确完整物理覆盖，或独占完成缺失阶段补充。不得预设自营机车、工业洗涤、发电或食品生产技术。实际普通房间准备、清洁、公用资源、乘务响应、布草交接与卫生职责仍强制采集。真实未覆盖独立转换生产须先审查路线模块扩展，不能删边界。实际包内早餐食品、休息室等需真实完整供应链，或审查真实生产并补齐缺失阶段；独购餐饮是另一产出。[cs-during-trip; nightjet-sleeping]

一参考是一个声明旅程服务版本和供应质量下实际履行的独占包厢住宿服务期，非一客、一床、一票、客公里、酒店夜或固定24小时。实际路线区段距离时间、人数备品分开采集。实质不同的时长路线配置套餐未经物理等价审查不能合并。中断、部分履行、改房须按实际供应验收核对；延误或改房本身不删除已供应住宿，收费也不证明未交付住宿。取消未到、失败、空车移动、停放准备的必要负荷保留实际责任，即使N_target=0。

第一方来源仅支持定性产品路线问题。公开容量票价服务时刻餐食例子不是通用清单因子、寿命、物理比例或保证。缺通用范围或UUID须明确证据缺口、强制实际采集并最终核验具体交换，不能编值或置零。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.private-rail-sleeping-compartment-journeys |
| classification_refs | CPC3.0:63290 narrower 实际私人独占卧铺包厢服务，非全部未另列住宿叶 |
| covered_products | 声明并履行铁路旅程服务期实际独占供应且备妥的卧铺包厢住宿 |
| excluded_products | 共享单床、仅座位、固定住宅或访客住宿、单纯运输餐饮、未履行预订容量 |
| representative_product | 实际列车车厢包厢、独占分配供应状态验收、旅程版本区段编组时长人数套餐与完整物理职责矩阵 |
| production_route | 实际车厢包厢准备供应交接 -> 声明区段实际独占卧铺住宿 -> 实际服务验收周转及接收维修结转 |
| market_state | 已供应住宿服务，车辆轨道内装织物为服务资产，非每旅程新商品 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 实际履行铁路独占卧铺包厢旅程住宿服务 |
| How much | 1 Item(s) |
| How well | 声明验收等价旅程服务版本下实际独占供应一间卧铺包厢，真实睡眠准备可进入乘务套餐验收配置；非客床座数量 |
| How long or cycle | 实际住宿服务期起止时区UTC偏移夏令时与经过时长、实际运行区段改车、准备库存报告及全资产寿命阶段；非固定夜或24小时 |
| reference_flow_link | fulfilled_private_sleeping_compartment_journey |

| 字段 | 值 |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | 实际履行铁路独占卧铺包厢旅程住宿服务 |
| Reference flow property | 物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` |
| Reference unit group | 物品单位 `5beb6eed-33a9-47b8-9ede-1dfe8f679159` |
| Reference unit | Item(s) |
| Required qualifiers | actual_operator_train_coach_compartment_configuration; actual_exclusive_sleeping_not_sharedberth_or_seat; declared_equivalent_journey_service_version_package; actual_supplied_access_ready_acceptance_and_partial_state; actual_episode_segments_splitjoin_moves_reversals; native_start_end_timezone_DST_distance_duration; actual_guests_berths_seats_separate_not_reference; alluser_transport_lodging_dining_staff_and_other_consumers; necessary_empty_reposition_stabling_idle_failure_owner_and_carry; complete_provider_or_exclusive_completed_missing_stage_matrix; alluser_full_rollingstock_rail_station_depot_fitout_textile_life; actual_food_linen_water_refrigerant_material_species_receiver_scope; each_operand_native_unit_basis_method_state_time_source |

## 4. 计量与单位规则

| rule_id | 适用于 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| journey_identity | fulfilled_private_sleeping_compartment_journey | Count | Item(s) | N_target计声明等价服务版本下，物理分配改房区段中断撤销核对后的唯一实际履行独占包厢住宿期。分车或换厢同一期计一次，独立供应不同包厢服务期另计。不乘客床座或路线公里；费用名义容量不证明交付。真实部分履行须另述供应产出和责任，不自动是完整参考或零。 |
| native_operands | 全部数值 | 实际支持原生属性 | 实际原生单位 | 每独立计量、分子分母、份额换算、浓度密度、因子时长寿命操作数均有自身native_unit;basis;method;state;sample_time;source_ref和原值编号不确定性，非全行一个来源徽标。先核材料阶段时间场址兼容和量纲再算。 |
| segment_units | complete_traction_movement_service | 实际支持服务属性；真正计件时Count | 实际原生作业单位，仅真实计件用Item(s) | 实际列车车厢区段运行、客运、包厢住宿、床座昼夜转换和货运量不同。床座等价或客公里换包厢必须有实际状态成员物理驱动证据，不能按钱换物理服务。 |
| water_state | supplied_water, contained_wastewater, water_vapour_air, direct_water_outfall; supplied_water_liquid_tap | Volume; Mass | m3; kg | 真实源区水箱接收环境和含水状态决定身份量，仅用实际兼容密度温度换算。供水、留存水分库存、截留交付、直接液态出水、水汽与溶解组分为不同非加和视图，未知残差不是排放或零。 |
| freight_units | supply_freight | Mass * distance | kg*km | 各真实独立货段载荷含湿货物包装支持物，只去实际非货物车皮。EACH实际重复次数乘一次，TOTAL不变。该记录target_share置求和内，同范围正N最后归一化一次。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 实际可运营私人卧铺包厢及真实列车车厢区段服务，备妥门禁布草供水套餐状态和完整牵引车库供应阶段证据 |
| starting_condition_role | 住宿运营与完整物理服务资产寿命；既有租赁车厢轨道车站车库非无负荷 |
| product_classification_scope | narrower63290实际独占卧铺包厢，不含固定boardinghouse/residentialclub、独售床位座位或单纯运输餐饮 |
| recursive_input_rule | 不再将相同最终住宿当自身投入。真实完整牵引车厢布草食品支持供应仅替代匹配物理职责，同覆盖不再通过直接能源资产接收重复 |
| upstream_dataset_requirement | 实际完整能源水材料食品织物供应生产和车辆内装设备轨道车站车库制造安装维护更换报废，全部用户期间一次。真实缺失职责必须以已完成来源、原生量状态时间、责任和明确覆盖排重联系整合一次后才可全链使用 |
| disclosure | 实际独占服务版本验收部分履行改房编组与全体用户；原生区段服务库存作业寿命账；必要空驶待机失败责任和结转；完整阶段供应接收与来源身份缺口 |

| rule_id | 适用于 | 规则 | source_ids |
| --- | --- | --- | --- |
| exclusive_service | sleeping_compartment_service | 实际独占睡眠住宿验收决定交付，商业附加或车票组合不定数量物理归属，排独售共享床位和座位等价。 | cs-room-supplements; nightjet-sleeping; nightjet-private |
| moving_shared_boundary | 全部移动职责 | 列实际列车车厢区段成员分合、睡眠座位餐饮工作人员及其他真实用户和住宿客运产出。实际牵引辅助空驶调车准备与全车辆轨道车站车库寿命按原生有据职责因果驱动分配一次，非票价名义床数或另一完整列车背景。 | cs-current-trains; cs-traction-depot-eir-2025 |
| provider_complete | 供应与自负阶段 | 建实际阶段责任覆盖矩阵：物理阶段、资产作业区段场址时间、供应数据集原生数量、已含组分与排除。选完整匹配供应或独占底层职责，实际缺失须用完成证据整合，待补列表外包名号或缺报告不算完成。重叠不明或缺阶段阻断完整全链。 | cs-traction-depot-eir-2025 |
| included_package | 实际食品及附属 | 实际套餐食品卫生布草休息室响应及上游制备运营废物资产运输一次完整纳入；独购餐饮另产出共享实际资源。供应名称不能删除未盖烹饪保温上餐，真实未审独立生产牵引路线须先审扩展。 | cs-during-trip; nightjet-sleeping |
| complete_asset_land | 资产土地 | 完整全用户车辆内装设备织物轨道车站车库寿命及真实土地占用转换阶段接口一次，已含供应资产土地不重复。已观测和有源剩余寿命等价服务或实际终止总量闭合全负荷，年度目标N非资产寿命。 |  |

## 6. 过程清单结构

### 过程图

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| sleeping_compartment_service | 铁路独占卧铺包厢住宿及实际支持 | required | 实际履行独占卧铺包厢和声明等价旅程服务版本 | 连续车厢公共准备和真实区段运行、准备周转布草维保事件；全用户运输住宿责任 | fulfilled_private_sleeping_compartment_journey |

一个综合住宿节点，不因分车换厢清洁或供应交接另造参考。真实服务期与连续车辆公共运营和不同作业批次交叠。先在cp_journeys/cp_rail枚举全部睡眠、共享床位、座位、运输餐饮休息室等意图产出及关口，再取目标清单；有用已用材料和废物不同。失效包厢、未完准备、拒收布草物资和中断服务保留原事件来源编号，关联真实维修重洁调配未用退回有用交付留存或接收路径。未知失败不是验收住宿，真实保留负荷不删除。

### 过程：铁路独占卧铺包厢住宿及实际支持（`sleeping_compartment_service`）

#### 输入

##### 产品流

###### 实际使用点交流电 (`accommodation_electricity_ac`)

仅适用于实际跨越本节点边界、且未由完整供应商数据覆盖的交流电。该身份未特指供应方、电压、发电组合或交付线损归属，仍须按要求采集。经核实的电力流以1 MJ电能为基准，其ILCD属性名称为净热值；原生kWh按精确的3.6 MJ/kWh换算，不能套用燃料热值系数。直流电或其他不匹配电力状态保留在余项要求中。

- 选定流：交流电 `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- 绑定：`fixed`
- 流属性/单位：Energy / kWh
- 数量规则：按cp_energy将实际独占归属且兼容的原生数量除以同范围正N_target一次；已按参考归一化者不再除，N_target=0保留不相除
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_energy`
- 范围证据需求：电源地域电压、实际表计区间、全体列车车厢用户及上游覆盖；无每客电量或铭牌默认值。

###### 实际外购交付的有效热量 (`purchased_useful_heat_delivered_heat`)

仅记录有证据能量基准、实际跨越本节点边界交付的有效热量。保留供回状态、温度品位、覆盖范围及实际损失责任。通用热能身份不预设天然气、蒸汽质量、锅炉效率或温度；制冷、燃料能量及缺少蒸汽转能量证据的情形不使用该身份。

- 选定流：热能 `4f19a302-7b3b-11dd-ad8b-0800200c9a66`
- 绑定：`fixed`
- 流属性/单位：Energy / MJ
- 数量规则：按cp_energy将实际独占归属且兼容的原生数量除以同范围正N_target一次；已按参考归一化者不再除，N_target=0保留不相除
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_energy`
- 范围证据需求：实际有效交付量、原生温度焓及独立换算元数据、供应损失和设备覆盖。

###### 实际液态处理自来水供给 (`supplied_water_liquid_tap`)

仅在实际来源确为处理后的自来水且用于所声明用途时适用。保留实际供应方、水质、温度状态和供应边界，不假定所有供水都是自来水。冰、瓶装矿泉水、再生水、未经处理的水及环境直接取水保留各自实际身份。沿用原卡原生质量或体积基准；最终换算为质量参考量时须有实际相容密度和状态证据，不能把目录中的次要体积关系作为默认现场密度。

- 选定流：自来水 `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- 绑定：`fixed`
- 流属性/单位：Volume / m3
- 数量规则：按cp_water将实际独占归属且兼容的原生数量除以同范围正N_target一次；已按参考归一化者不再除，N_target=0保留不相除
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_water`
- 范围证据需求：实际水源水箱库存表计、转移编号和全用户事件联系；无每客升数或预设截留技术。

###### 实际独立记录的合成洗涤剂投入 (`cleaning_supplies_synthetic_detergent`)

仅适用于产品配方、供应状态及用途记录确认的实际合成表面活性洗涤剂。记录扣除包装皮重的材料净量，区分浓缩液与稀释水，整体配方与组分不得相加重复计入。肥皂、消毒剂、抹布、滤材等仍按各自实际身份记录，不预设清洁配方、剂量或发生。

- 选定流：洗涤剂 `1c57d123-df57-49ab-b9d4-957403beb8a5`
- 绑定：`fixed`
- 流属性/单位：Mass / kg
- 数量规则：按cp_stock将实际独占归属且兼容的原生数量除以同范围正N_target一次；已按参考归一化者不再除，N_target=0保留不相除
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_stock`
- 范围证据需求：SKU成分状态、毛净皮重、配液和原生EACH/TOTAL换算、匹配未用退回。

###### 实际完整且归属匹配的牵引铁路运行服务（`complete_traction_movement_service`）

仅实际供应商定义并完成的列车或车厢区段物理作业，按已证范围含牵引辅助能源、上游能源、相关车辆轨道车站车库寿命与空驶准备；Count为真实作业单位而非票或账单。非计件原生服务须实际支持的具体交换及审查后的量纲核对；全链使用前独占补齐缺失阶段。

- 选定流：实际完整且归属匹配的牵引铁路运行服务
- 流属性/单位：Count / Item(s)
- 数量规则：按cp_rail将实际独占归属且兼容的原生数量除以同范围正N_target一次；已按参考归一化者不再除，N_target=0保留不相除
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_rail`
- 范围证据需求：实际合同物理交付原生单位、车组车厢区段、距离时间、辅助范围、全用户与完整阶段矩阵；无票价比或名义床位比。

###### 实际完整车厢准备与车库维保服务（`complete_coach_depot_service`）

实际按件完成的清洁检修准备停放作业且范围明确；铁路供应已覆盖调车不重复，直接资源仅载未覆盖职责。

- 选定流：实际完整车厢准备与车库维保服务
- 流属性/单位：Count / Item(s)
- 数量规则：按cp_providers将实际独占归属且兼容的原生数量除以同范围正N_target一次；已按参考归一化者不再除，N_target=0保留不相除
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_providers`
- 范围证据需求：实际已完成作业量和原生基准、车库车厢事件编号及设备水化学品能源污水资产运输覆盖。

###### 实际完成外部或中央布草护理（`external_linen_care`）

以kg计时采用实际干织物基准的已完成洗烘熨，不能用湿污毛重；供应商洗涤资源设备运输租赁制造与自补职责互斥。其他合同原生基准须有据换算，无每夜kg默认。

- 选定流：实际完成外部或中央布草护理
- 流属性/单位：Mass / kg
- 数量规则：按cp_linen将实际独占归属且兼容的原生数量除以同范围正N_target一次；已按参考归一化者不再除，N_target=0保留不相除
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_linen`
- 范围证据需求：批次和自身干基含水方法、实际重洗次数、库存流转及供应商全寿命与洗涤污水覆盖。

###### 实际完整包内食品供应服务（`included_food_service`）

按真实包内预制食品或供餐作业条件纳入，不默认每旅程有餐，也非吃下份数。实际食材制备保温上餐餐具废物资产运输须真实供应商完整覆盖或审查真实生产扩展，独购餐饮保留自身负荷。

- 选定流：实际完整包内食品供应服务
- 流属性/单位：Count / Item(s)
- 数量规则：按cp_package将实际独占归属且兼容的原生数量除以同范围正N_target一次；已按参考归一化者不再除，N_target=0保留不相除
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_package`
- 范围证据需求：实际套餐供餐验收、原生服务量及完整物理来源阶段接收覆盖；无通用餐数配方，不能以外包标签代替缺失职责。

###### 实际完成外部客用支持服务（`external_guest_support`）

实际门禁响应休息室等支持作业条件纳入，以完成的原生基准和完整供应范围为准；费用不能证明物理交换或删除公共资源。

- 选定流：实际完成外部客用支持服务
- 流属性/单位：Count / Item(s)
- 数量规则：按cp_providers将实际独占归属且兼容的原生数量除以同范围正N_target一次；已按参考归一化者不再除，N_target=0保留不相除
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_providers`
- 范围证据需求：实际作业验收记录、用户及设备ICT材料能源资产运输范围。

##### 基本流

#### 输出

##### 产品流

###### 实际履行铁路独占卧铺包厢旅程住宿服务（`fulfilled_private_sleeping_compartment_journey`）

按声明并验收的住宿服务期实际独占供应一间卧铺包厢，非客床座数量、票、固定夜或客公里；核对换房共享转独占、中断部分供应及物理验收，同一期不重复。

- 选定流：实际履行铁路独占卧铺包厢旅程住宿服务
- 流属性/单位：Count / Item(s)
- 数量规则：1 Item(s)
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_journeys`
- 范围证据需求：实际车辆车厢包厢身份、服务版本区间路线、独占和供应状态验收。

##### 废物流

###### 实际单独收集的纸类包装废物 (`packaging_discard_paper_pack`)

仅适用于本节点实际独立废弃、单独收集的纸类包装，保留实际湿态或收集状态、组成、接收方及处理运输责任。污染或混收形成的混合流须使用其自身经核实的身份，材料组分仅作不可相加审计。仍在用的周转包装不是本废物，不预设组成、数量、回收或处理。

- 选定流：包装废弃物，纸类 `6b6f1025-cb6a-4c9d-9947-7726c4307a76`
- 绑定：`fixed`
- 流属性/单位：Mass / kg
- 数量规则：按cp_fates将实际独占归属且兼容的原生数量除以同范围正N_target一次；已按参考归一化者不再除，N_target=0保留不相除
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_fates`
- 范围证据需求：实际材质污染干湿接收记录及计件换质量，无全废物合并身份。

###### 实际单独收集的金属包装废物 (`packaging_discard_metal_pack`)

仅适用于本节点实际独立废弃、单独收集的金属包装，保留实际湿态或收集状态、组成、接收方及处理运输责任。污染或混收形成的混合流须使用其自身经核实的身份，材料组分仅作不可相加审计。仍在用的周转包装不是本废物，不预设组成、数量、回收或处理。

- 选定流：金属包装废物 `cdda6013-c0c5-4c72-990a-f5668fe71069`
- 绑定：`fixed`
- 流属性/单位：Mass / kg
- 数量规则：按cp_fates将实际独占归属且兼容的原生数量除以同范围正N_target一次；已按参考归一化者不再除，N_target=0保留不相除
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_fates`
- 范围证据需求：实际材质污染干湿接收记录及计件换质量，无全废物合并身份。

###### 实际单独收集的废润滑油 (`discarded_cleaning_maintenance_material_used_lubricating_oil`)

仅适用于实际经使用受污染、独立收集并转移的石油基或合成润滑油。保留实际组成、含水或污染状态及接收方。新油、食用油、制冷剂、水性废水和仍滞留滤材或设备中的残余不使用该身份，不预设再生或处置路线。

- 选定流：废润滑油 `55d93375-7f04-4166-b2a2-88ce929051a5`
- 绑定：`fixed`
- 流属性/单位：Mass / kg
- 数量规则：按cp_fates将实际独占归属且兼容的原生数量除以同范围正N_target一次；已按参考归一化者不再除，N_target=0保留不相除
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_fates`
- 范围证据需求：实际物种材质混合物污染危险说明和接收证据，未知不得改成惰性泛流。

##### 基本流

###### 实际向空气排放水蒸气（`water_vapour_air`）

仅有据实际越过空气边界的蒸发水汽，不是接收液体废物或无法解释水平衡残差。

- 选定流：水蒸气 `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- 绑定：`fixed`
- 流属性/单位：Mass / kg
- 数量规则：按cp_water将实际独占归属且兼容的原生数量除以同范围正N_target一次；已按参考归一化者不再除，N_target=0保留不相除
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_water`
- 范围证据需求：实际兼容水含水计量或有源模型各操作数元数据及介质，不令供水等于蒸发。

###### 实际有独立证据的向空气排放化石二氧化碳 (`direct_air_species_co2_fossil_air`)

仅在实际证据确认化石来源、二氧化碳物种和向空气直接释放时适用。保留报告的碳或CO2基准，碳转CO2须独立有证据的化学计量，不预设系数或发生。 本卡仅记录本节点实际直接释放，不重复计入外购电力上游或供应商已覆盖排放。UUID表示未细分子介质的空气排放，其他实际子介质或来源仍须在余项中匹配，不能改标；缺失数据不等于零。

- 选定流：二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 绑定：`fixed`
- 流属性/单位：Mass / kg
- 数量规则：按cp_emissions将实际独占归属且兼容的原生数量除以同范围正N_target一次；已按参考归一化者不再除，N_target=0保留不相除
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_emissions`
- 范围证据需求：实际计量或有源适用因子、活动单位状态基准时间和组分换算，必要排放缺失保留强制补证。

###### 实际有独立证据的向空气排放化石甲烷 (`direct_air_species_methane_fossil_air`)

仅在实际证据确认化石来源、甲烷物种和向空气直接释放时适用。生物源或来源未知甲烷仍在余项要求中，不得改标化石源；不预设泄漏发生、气体比例、数量或排放系数。 本卡仅记录本节点实际直接释放，不重复计入外购电力上游或供应商已覆盖排放。UUID表示未细分子介质的空气排放，其他实际子介质或来源仍须在余项中匹配，不能改标；缺失数据不等于零。

- 选定流：甲烷 (化石源) `08a91e70-3ddc-11dd-9610-0050c2490048`
- 绑定：`fixed`
- 流属性/单位：Mass / kg
- 数量规则：按cp_emissions将实际独占归属且兼容的原生数量除以同范围正N_target一次；已按参考归一化者不再除，N_target=0保留不相除
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_emissions`
- 范围证据需求：实际计量或有源适用因子、活动单位状态基准时间和组分换算，必要排放缺失保留强制补证。

###### 实际有独立证据的向空气排放氧化亚氮 (`direct_air_species_nitrous_oxide_air`)

仅在实际证据确认氧化亚氮物种及向空气直接释放时适用。原生数量为N2O质量，不是氮质量或氮气质量，不预设排放系数或发生。 本卡仅记录本节点实际直接释放，不重复计入外购电力上游或供应商已覆盖排放。UUID表示未细分子介质的空气排放，其他实际子介质或来源仍须在余项中匹配，不能改标；缺失数据不等于零。

- 选定流：一氧化二氮 `08a91e70-3ddc-11dd-94c3-0050c2490048`
- 绑定：`fixed`
- 流属性/单位：Mass / kg
- 数量规则：按cp_emissions将实际独占归属且兼容的原生数量除以同范围正N_target一次；已按参考归一化者不再除，N_target=0保留不相除
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_emissions`
- 范围证据需求：实际计量或有源适用因子、活动单位状态基准时间和组分换算，必要排放缺失保留强制补证。

## 7. 分配与共产品处理

| rule_id | 适用于 | 规则 | source_ids |
| --- | --- | --- | --- |
| physical_precedence | 全部数量 | 先按实际独立计量事件资产职责和物理阶段细分；剩余不可分职责采用实际有据因果驱动，含全部真实用户期间。记录方法、每项原生驱动单位基准状态时间来源及敏感性。无通用票价收入床客比例，不同职责可用不同驱动；比较可信替代方法，归属无据保留阻断。 |  |
| rail_partition | 列车车厢区段职责 | 每职责k记录B_k、真实区段编组配置及完整用户集。用独占责任阶段划分与有据目标份额a_target,k，每份额对应同职责区间基准，非负且全部责任用户份额无重叠闭合B_k。在共享车体牵引中分清住宿与客运物理责任，不能双计全负荷。实际计量辅助能源和独占准备先细分，再分共享运行。座位昼夜转换取真实配置时间成员，非名义床等于座。 | cs-current-trains; cs-room-supplements |
| necessary_pool | 待机空驶失败N0 | 实际未售失败关闭停放空车调库事件记录必要性、因果责任和负荷池责任方。必要池以一致全用户物理驱动分真实责任产品期间；日历容量时间法分子分母均含真实闲置份额。产出驱动法须将全部必要闲置负荷给有据责任产品并闭合整池。N_target=0保留来源责任阶段原生量与实际结转终止，不相除、不造旅程、不把无关工作塞入目标。责任最终去向未定阻断完整使用。 | cs-traction-depot-eir-2025 |
| asset_life | 全部资产织物设施 | 各实际资产阶段j用完整未覆盖负荷和兼容目标寿命服务份额，依据已观测全用户历史加有源剩余等价生产服务，或实际终止总量。每个独立原生量、等价驱动、敏感性不确定性更新及期间归属有据；全部用户期间闭合整负荷。不能年度目标N作寿命，也不因维修调配内转重造制造。闲置日历分配按necessary_pool。 |  |
| provider_gate | 全部供应自负职责 | 选一个完整寿命匹配供应或独占已补齐的底层阶段，匹配物理职责资产阶段区段场址时间与来源接收，完整全链前真实补齐量数据集并排重。相同最终住宿不是自身递归投入。计件服务须真实物理作业，其他实际原生交付保留支持单位并审查量纲核对。 | cs-traction-depot-eir-2025 |
| stock_exclusive | 未用已用物资退回 | 外部入库净包装容器皮重仍含真实未用外退。毛额投入是stock_balance定义同范围毛领用S，非本期收货单独值。选S投入加配对同源同身份同状态UNUSED退回输出，或(S减匹配UNUSED)投入且删除输出，不能两次扣、不能跨无关库存净额。已用回收有用出口为独立去向保留原负荷，非未用新品退回或默认避免制造。期末与既有归属保留源编号结转。 |  |
| stream_fates | 产出失败 | 真实意图服务产出、部分履行、有用已用材料、内转、废物基本流保留实际关口。重洁维修关联原失败与保留负荷，不造第二验收旅程。不同材料物种介质接收分开，仅真实混收可为单流且成分视图非加和。残差或泛混合废物不是去向、零或抵扣证据。 |  |

## 8. 前景数据采集、计算与质量规则

每独立原始数值、因子和派生操作数均须自身记录：operand_id;value;native_unit;basis;method;state;sample_time;source_ref;uncertainty，并关联真实事件材料用户资产区间。全协议单位或引用不能代替各操作数字段。保留原始、换算、归属和已按参考表示及量纲转换。以下raw_fields对每真实数值保留独立值键及其_unit/_basis/_method/_state/_sample_time/_source/_uncertainty，纯类别编号不假装数值。全部协议仅归sleeping_compartment_service节点，供应接收编号为物理接口而非虚构过程节点。最终全链数据须实际数值和已完成补充，不是未来采集计划。

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_journeys | sleeping_compartment_service | 参考与全部实际服务用户 | 分配服务验收账 | episode_id; service_version; operator; train_id; coach_id; compartment_id; configuration_version; exclusive_assignment_intervals; access_ready_state; actual_supplied_start_end; timezone_UTCoffset_DST; actual_guest_ids; move_id; segment_ids; actual_interruption_partial_acceptance; booking_charge_state; other_intended_output_id; other_output_recipient; other_output_gate; other_output_state; actual_handoff_time; actual_handoff_source; N_target; duplicate_reversal_id; N_target_unit; N_target_basis; N_target_method; N_target_state; N_target_sample_time; N_target_source; N_target_uncertainty; other_output_quantity; other_output_quantity_unit; other_output_quantity_basis; other_output_quantity_method; other_output_quantity_state; other_output_quantity_sample_time; other_output_quantity_source; other_output_quantity_uncertainty; actual_guest_count; actual_guest_count_unit; actual_guest_count_basis; actual_guest_count_method; actual_guest_count_state; actual_guest_count_sample_time; actual_guest_count_source; actual_guest_count_uncertainty; actual_episode_elapsed_duration; actual_episode_elapsed_duration_unit; actual_episode_elapsed_duration_basis; actual_episode_elapsed_duration_method; actual_episode_elapsed_duration_state; actual_episode_elapsed_duration_sample_time; actual_episode_elapsed_duration_source; actual_episode_elapsed_duration_uncertainty; actual_segment_distance; actual_segment_distance_unit; actual_segment_distance_basis; actual_segment_distance_method; actual_segment_distance_state; actual_segment_distance_sample_time; actual_segment_distance_source; actual_segment_distance_uncertainty; actual_segment_duration; actual_segment_duration_unit; actual_segment_duration_basis; actual_segment_duration_method; actual_segment_duration_state; actual_segment_duration_sample_time; actual_segment_duration_source; actual_segment_duration_uncertainty; supplied_partial_duration; supplied_partial_duration_unit; supplied_partial_duration_basis; supplied_partial_duration_method; supplied_partial_duration_state; supplied_partial_duration_sample_time; supplied_partial_duration_source; supplied_partial_duration_uncertainty | 用实际分配、登车门禁准备、乘务验收与包厢列车图核对，沿原episode追踪改房变化，区分完整验收版本、另述部分、失败未供。每真实独立其他意图产出独立outputID、接收关口状态、真实交付时间来源及other_output_quantity原生元数据；部分座位客运餐饮数量不由人数或目标N推算，同ID链接cp_rail成员驱动。包内床餐组分不是第二独立共产品。 聚合执行：唯一验收等价目标期求N_target，其他原生产出量关口分开，仅同范围按normalize_once | Item(s); 实际原生时间距离限定 | 各实际分配服务期改房中断验收，报告关闭核对 | 实际服务准备报告及取消失败结转 | 真实列车车厢区段包厢和用户 | 每参考流 | 来源图纸分配验收、改房撤销排除态全量审计 |
| cp_rail | sleeping_compartment_service | 共享移动车辆牵引客运接口 | 编组区段职责覆盖账 | train_id; coach_id; formation_version; segment_id; segment_start_end; from_to_location; split_join_event; actual_service_mode; seat_day_conversion; sleeping_seated_dining_staff_other_members; linked_other_intended_output_id; actual_traction_auxiliary_meter_scope; physical_duty_id; provider_operation_id; covered_stage_ids; uncovered_stage_ids; necessary_empty_reposition_stabling_failure; pool_owner; carry_id; B_k; B_k_unit; B_k_basis; B_k_method; B_k_state; B_k_sample_time; B_k_source; B_k_uncertainty; actual_distance; actual_distance_unit; actual_distance_basis; actual_distance_method; actual_distance_state; actual_distance_sample_time; actual_distance_source; actual_distance_uncertainty; actual_duration; actual_duration_unit; actual_duration_basis; actual_duration_method; actual_duration_state; actual_duration_sample_time; actual_duration_source; actual_duration_uncertainty; actual_coach_mass; actual_coach_mass_unit; actual_coach_mass_basis; actual_coach_mass_method; actual_coach_mass_state; actual_coach_mass_sample_time; actual_coach_mass_source; actual_coach_mass_uncertainty; actual_carried_payload_mass; actual_carried_payload_mass_unit; actual_carried_payload_mass_basis; actual_carried_payload_mass_method; actual_carried_payload_mass_state; actual_carried_payload_mass_sample_time; actual_carried_payload_mass_source; actual_carried_payload_mass_uncertainty; actual_space_time; actual_space_time_unit; actual_space_time_basis; actual_space_time_method; actual_space_time_state; actual_space_time_sample_time; actual_space_time_source; actual_space_time_uncertainty; actual_seat_day_duration; actual_seat_day_duration_unit; actual_seat_day_duration_basis; actual_seat_day_duration_method; actual_seat_day_duration_state; actual_seat_day_duration_sample_time; actual_seat_day_duration_source; actual_seat_day_duration_uncertainty; actual_configuration_capacity; actual_configuration_capacity_unit; actual_configuration_capacity_basis; actual_configuration_capacity_method; actual_configuration_capacity_state; actual_configuration_capacity_sample_time; actual_configuration_capacity_source; actual_configuration_capacity_uncertainty; provider_native_quantity; provider_native_quantity_unit; provider_native_quantity_basis; provider_native_quantity_method; provider_native_quantity_state; provider_native_quantity_sample_time; provider_native_quantity_source; provider_native_quantity_uncertainty; actual_causal_driver; actual_causal_driver_unit; actual_causal_driver_basis; actual_causal_driver_method; actual_causal_driver_state; actual_causal_driver_sample_time; actual_causal_driver_source; actual_causal_driver_uncertainty; each_consumer_driver; each_consumer_driver_unit; each_consumer_driver_basis; each_consumer_driver_method; each_consumer_driver_state; each_consumer_driver_sample_time; each_consumer_driver_source; each_consumer_driver_uncertainty; all_consumer_driver_total; all_consumer_driver_total_unit; all_consumer_driver_total_basis; all_consumer_driver_total_method; all_consumer_driver_total_state; all_consumer_driver_total_sample_time; all_consumer_driver_total_source; all_consumer_driver_total_uncertainty; exclusive_stage_share; exclusive_stage_share_unit; exclusive_stage_share_basis; exclusive_stage_share_method; exclusive_stage_share_state; exclusive_stage_share_sample_time; exclusive_stage_share_source; exclusive_stage_share_uncertainty; actual_empty_duration; actual_empty_duration_unit; actual_empty_duration_basis; actual_empty_duration_method; actual_empty_duration_state; actual_empty_duration_sample_time; actual_empty_duration_source; actual_empty_duration_uncertainty; actual_reposition_distance; actual_reposition_distance_unit; actual_reposition_distance_basis; actual_reposition_distance_method; actual_reposition_distance_state; actual_reposition_distance_sample_time; actual_reposition_distance_source; actual_reposition_distance_uncertainty; actual_target_share; actual_target_share_unit; actual_target_share_basis; actual_target_share_method; actual_target_share_state; actual_target_share_sample_time; actual_target_share_source; actual_target_share_uncertainty | 实际车组时间地点分合与牵引交付能源范围连接，在真实编组用户状态变化处分段，分别建住宿与客运共享职责责任。按真实职责计量有据因果驱动，如计量辅助能、移动质量距离、物理空间时间或服务使用；不同职责无默认优先驱动，须论证并比较替代。缺供应阶段用已完成独占资源资产接收记录补齐才整合。 聚合执行：按rail_partition/provider_gate闭合每职责全用户责任，无票价比例、整车重复、床座等价或整项零值 | 实际支持作业单位; 原生km时间质量能源; 真实定义作业才Count | 每列车车厢区段状态变更供应交付及关闭 | 运营空驶调库停放失败及报告寿命期间 | 真实编组区段及牵引车库轨道车站供应 | 每参考流 | 真实编组运行计量供应原生记录、驱动单位敏感性全用户覆盖核对 |
| cp_energy | sleeping_compartment_service | 未覆盖电热燃料 | 表计燃料库存运营账 | energy_source; carrier_grade; supply_location_voltage; meter_id; actual_interval; reset_export_import; power_interval; thermal_delivery_state; equipment_duty; provider_exclusion; register_start; register_start_unit; register_start_basis; register_start_method; register_start_state; register_start_sample_time; register_start_source; register_start_uncertainty; register_end; register_end_unit; register_end_basis; register_end_method; register_end_state; register_end_sample_time; register_end_source; register_end_uncertainty; actual_average_power; actual_average_power_unit; actual_average_power_basis; actual_average_power_method; actual_average_power_state; actual_average_power_sample_time; actual_average_power_source; actual_average_power_uncertainty; actual_elapsed_time; actual_elapsed_time_unit; actual_elapsed_time_basis; actual_elapsed_time_method; actual_elapsed_time_state; actual_elapsed_time_sample_time; actual_elapsed_time_source; actual_elapsed_time_uncertainty; actual_thermal_quantity; actual_thermal_quantity_unit; actual_thermal_quantity_basis; actual_thermal_quantity_method; actual_thermal_quantity_state; actual_thermal_quantity_sample_time; actual_thermal_quantity_source; actual_thermal_quantity_uncertainty; actual_supply_temperature; actual_supply_temperature_unit; actual_supply_temperature_basis; actual_supply_temperature_method; actual_supply_temperature_state; actual_supply_temperature_sample_time; actual_supply_temperature_source; actual_supply_temperature_uncertainty; actual_return_temperature; actual_return_temperature_unit; actual_return_temperature_basis; actual_return_temperature_method; actual_return_temperature_state; actual_return_temperature_sample_time; actual_return_temperature_source; actual_return_temperature_uncertainty; actual_supply_enthalpy; actual_supply_enthalpy_unit; actual_supply_enthalpy_basis; actual_supply_enthalpy_method; actual_supply_enthalpy_state; actual_supply_enthalpy_sample_time; actual_supply_enthalpy_source; actual_supply_enthalpy_uncertainty; actual_return_enthalpy; actual_return_enthalpy_unit; actual_return_enthalpy_basis; actual_return_enthalpy_method; actual_return_enthalpy_state; actual_return_enthalpy_sample_time; actual_return_enthalpy_source; actual_return_enthalpy_uncertainty; fuel_opening; fuel_opening_unit; fuel_opening_basis; fuel_opening_method; fuel_opening_state; fuel_opening_sample_time; fuel_opening_source; fuel_opening_uncertainty; fuel_receipts_tare_only; fuel_receipts_tare_only_unit; fuel_receipts_tare_only_basis; fuel_receipts_tare_only_method; fuel_receipts_tare_only_state; fuel_receipts_tare_only_sample_time; fuel_receipts_tare_only_source; fuel_receipts_tare_only_uncertainty; fuel_closing; fuel_closing_unit; fuel_closing_basis; fuel_closing_method; fuel_closing_state; fuel_closing_sample_time; fuel_closing_source; fuel_closing_uncertainty; fuel_actual_burn; fuel_actual_burn_unit; fuel_actual_burn_basis; fuel_actual_burn_method; fuel_actual_burn_state; fuel_actual_burn_sample_time; fuel_actual_burn_source; fuel_actual_burn_uncertainty; actual_native_density; actual_native_density_unit; actual_native_density_basis; actual_native_density_method; actual_native_density_state; actual_native_density_sample_time; actual_native_density_source; actual_native_density_uncertainty; density_temperature; density_temperature_unit; density_temperature_basis; density_temperature_method; density_temperature_state; density_temperature_sample_time; density_temperature_source; density_temperature_uncertainty; calorific_factor; calorific_factor_unit; calorific_factor_basis; calorific_factor_method; calorific_factor_state; calorific_factor_sample_time; calorific_factor_source; calorific_factor_uncertainty; actual_unit_conversion; actual_unit_conversion_unit; actual_unit_conversion_basis; actual_unit_conversion_method; actual_unit_conversion_state; actual_unit_conversion_sample_time; actual_unit_conversion_source; actual_unit_conversion_uncertainty; actual_target_driver; actual_target_driver_unit; actual_target_driver_basis; actual_target_driver_method; actual_target_driver_state; actual_target_driver_sample_time; actual_target_driver_source; actual_target_driver_uncertainty; actual_alluser_driver; actual_alluser_driver_unit; actual_alluser_driver_basis; actual_alluser_driver_method; actual_alluser_driver_state; actual_alluser_driver_sample_time; actual_alluser_driver_source; actual_alluser_driver_uncertainty; actual_target_share; actual_target_share_unit; actual_target_share_basis; actual_target_share_method; actual_target_share_state; actual_target_share_sample_time; actual_target_share_source; actual_target_share_uncertainty; flow_row_id; actual_identity_case; actual_substance_or_material; actual_origin_and_medium; actual_state_and_gate; case_activation_evidence; typed_or_residual_quantity; quantity_exclusion_links; whole_total_reconciliation; unresolved_occurrence_not_zero | 取对齐可追溯表差，或有据同区间平均功率乘该区间时长一次后量纲换算，不再积分kWh。核实际热交付燃料库存燃烧，采购非排放；按cp_rail分牵引辅助车库和供应已含职责。 聚合执行：兼容量按每记录目标份额求和及rail_partition/normalize_once，不兼容载体状态时间分开 | kWh; MJ; kg; 实际原生计量换算 | 各表计区间补燃烧和实际交付事件 | 对齐真实运行岸电车库准备区间与关闭 | 实际负责包厢车厢公共车库职责 | 每参考流 | 校准表计库存原生换算与供应排重 |
| cp_water | sleeping_compartment_service | 供水库存接收环境 | 源区水箱去向账 | source_id; source_type; tank_id; meter_id; fill_transfer_id; paired_receiver_transfer_id; internal_or_external_role; actual_stock_membership_id; terminal_fate_role; retained_moisture_closing_membership; enduse; contained_transfer_id; outfall_location_medium; pollutant_sample_link; provider_exclusion; source_supplied_quantity; source_supplied_quantity_unit; source_supplied_quantity_basis; source_supplied_quantity_method; source_supplied_quantity_state; source_supplied_quantity_sample_time; source_supplied_quantity_source; source_supplied_quantity_uncertainty; actual_direct_abstraction; actual_direct_abstraction_unit; actual_direct_abstraction_basis; actual_direct_abstraction_method; actual_direct_abstraction_state; actual_direct_abstraction_sample_time; actual_direct_abstraction_source; actual_direct_abstraction_uncertainty; tank_opening; tank_opening_unit; tank_opening_basis; tank_opening_method; tank_opening_state; tank_opening_sample_time; tank_opening_source; tank_opening_uncertainty; tank_closing; tank_closing_unit; tank_closing_basis; tank_closing_method; tank_closing_state; tank_closing_sample_time; tank_closing_source; tank_closing_uncertainty; fill_quantity; fill_quantity_unit; fill_quantity_basis; fill_quantity_method; fill_quantity_state; fill_quantity_sample_time; fill_quantity_source; fill_quantity_uncertainty; actual_enduse_quantity; actual_enduse_quantity_unit; actual_enduse_quantity_basis; actual_enduse_quantity_method; actual_enduse_quantity_state; actual_enduse_quantity_sample_time; actual_enduse_quantity_source; actual_enduse_quantity_uncertainty; cleaning_solution_water; cleaning_solution_water_unit; cleaning_solution_water_basis; cleaning_solution_water_method; cleaning_solution_water_state; cleaning_solution_water_sample_time; cleaning_solution_water_source; cleaning_solution_water_uncertainty; retained_moisture; retained_moisture_unit; retained_moisture_basis; retained_moisture_method; retained_moisture_state; retained_moisture_sample_time; retained_moisture_source; retained_moisture_uncertainty; actual_density; actual_density_unit; actual_density_basis; actual_density_method; actual_density_state; actual_density_sample_time; actual_density_source; actual_density_uncertainty; density_temperature; density_temperature_unit; density_temperature_basis; density_temperature_method; density_temperature_state; density_temperature_sample_time; density_temperature_source; density_temperature_uncertainty; actual_evaporation; actual_evaporation_unit; actual_evaporation_basis; actual_evaporation_method; actual_evaporation_state; actual_evaporation_sample_time; actual_evaporation_source; actual_evaporation_uncertainty; contained_transfer_quantity; contained_transfer_quantity_unit; contained_transfer_quantity_basis; contained_transfer_quantity_method; contained_transfer_quantity_state; contained_transfer_quantity_sample_time; contained_transfer_quantity_source; contained_transfer_quantity_uncertainty; receiver_quantity; receiver_quantity_unit; receiver_quantity_basis; receiver_quantity_method; receiver_quantity_state; receiver_quantity_sample_time; receiver_quantity_source; receiver_quantity_uncertainty; direct_outfall_quantity; direct_outfall_quantity_unit; direct_outfall_quantity_basis; direct_outfall_quantity_method; direct_outfall_quantity_state; direct_outfall_quantity_sample_time; direct_outfall_quantity_source; direct_outfall_quantity_uncertainty; stored_carry_quantity; stored_carry_quantity_unit; stored_carry_quantity_basis; stored_carry_quantity_method; stored_carry_quantity_state; stored_carry_quantity_sample_time; stored_carry_quantity_source; stored_carry_quantity_uncertainty; actual_target_driver; actual_target_driver_unit; actual_target_driver_basis; actual_target_driver_method; actual_target_driver_state; actual_target_driver_sample_time; actual_target_driver_source; actual_target_driver_uncertainty; actual_alluser_driver; actual_alluser_driver_unit; actual_alluser_driver_basis; actual_alluser_driver_method; actual_alluser_driver_state; actual_alluser_driver_sample_time; actual_alluser_driver_source; actual_alluser_driver_uncertainty; actual_target_share; actual_target_share_unit; actual_target_share_basis; actual_target_share_method; actual_target_share_state; actual_target_share_sample_time; actual_target_share_source; actual_target_share_uncertainty; flow_row_id; actual_identity_case; actual_substance_or_material; actual_origin_and_medium; actual_state_and_gate; case_activation_evidence; typed_or_residual_quantity; quantity_exclusion_links; whole_total_reconciliation; unresolved_occurrence_not_zero | 计量真实水源水箱补水期初末接收，保持状态区间兼容。关联各端用事件和实际计量或模型环境去向，直接排放出水独立证明，残差保持未知；同一声明边界期间仅加互斥外部终端出口与期末库；端用为内部中间视图，界内供水至水箱补充为配对内转，截留交付与同接收验收仅同一量，不能重进出。留水若已在期末物料水库存不另加。转移和库存成员职责唯一，保真实未知去向，再按全用户归属。 聚合执行：water_fates与rail_partition/normalize_once，真实混合物成分非加和，接收处理一次 | m3; kg; 原生密度温度时间样本单位 | 各补排水表计端用排口事件与期末 | 真实水箱端用接收区间及跨期储存 | 实际水源车厢车库公共系统接收排口 | 每参考流 | 实际水箱源区表计接收、样本时间状态、去向闭合及未解差 |
| cp_stock | sleeping_compartment_service | 物资清洁剂零件未用退回 | 材料物理库存账 | SKU_material_formulation; supplier_source; lot; condition_unused_used; external_receipt_id; actual_outbound_unused_return_id; same_source_state_match; consumed_input_choice; used_recovery_id; transfer_id; EACH_TOTAL; opening_stock; opening_stock_unit; opening_stock_basis; opening_stock_method; opening_stock_state; opening_stock_sample_time; opening_stock_source; opening_stock_uncertainty; actual_external_receipt_tare_only; actual_external_receipt_tare_only_unit; actual_external_receipt_tare_only_basis; actual_external_receipt_tare_only_method; actual_external_receipt_tare_only_state; actual_external_receipt_tare_only_sample_time; actual_external_receipt_tare_only_source; actual_external_receipt_tare_only_uncertainty; actual_packaging_tare; actual_packaging_tare_unit; actual_packaging_tare_basis; actual_packaging_tare_method; actual_packaging_tare_state; actual_packaging_tare_sample_time; actual_packaging_tare_source; actual_packaging_tare_uncertainty; actual_unused_outbound_return; actual_unused_outbound_return_unit; actual_unused_outbound_return_basis; actual_unused_outbound_return_method; actual_unused_outbound_return_state; actual_unused_outbound_return_sample_time; actual_unused_outbound_return_source; actual_unused_outbound_return_uncertainty; actual_internal_in; actual_internal_in_unit; actual_internal_in_basis; actual_internal_in_method; actual_internal_in_state; actual_internal_in_sample_time; actual_internal_in_source; actual_internal_in_uncertainty; actual_internal_out; actual_internal_out_unit; actual_internal_out_basis; actual_internal_out_method; actual_internal_out_state; actual_internal_out_sample_time; actual_internal_out_source; actual_internal_out_uncertainty; closing_stock; closing_stock_unit; closing_stock_basis; closing_stock_method; closing_stock_state; closing_stock_sample_time; closing_stock_source; closing_stock_uncertainty; gross_drawn_supply_S; gross_drawn_supply_S_unit; gross_drawn_supply_S_basis; gross_drawn_supply_S_method; gross_drawn_supply_S_state; gross_drawn_supply_S_sample_time; gross_drawn_supply_S_source; gross_drawn_supply_S_uncertainty; consumed_input_quantity; consumed_input_quantity_unit; consumed_input_quantity_basis; consumed_input_quantity_method; consumed_input_quantity_state; consumed_input_quantity_sample_time; consumed_input_quantity_source; consumed_input_quantity_uncertainty; used_recovery_quantity; used_recovery_quantity_unit; used_recovery_quantity_basis; used_recovery_quantity_method; used_recovery_quantity_state; used_recovery_quantity_sample_time; used_recovery_quantity_source; used_recovery_quantity_uncertainty; actual_issue_use; actual_issue_use_unit; actual_issue_use_basis; actual_issue_use_method; actual_issue_use_state; actual_issue_use_sample_time; actual_issue_use_source; actual_issue_use_uncertainty; prepared_solution_quantity; prepared_solution_quantity_unit; prepared_solution_quantity_basis; prepared_solution_quantity_method; prepared_solution_quantity_state; prepared_solution_quantity_sample_time; prepared_solution_quantity_source; prepared_solution_quantity_uncertainty; dilution_water; dilution_water_unit; dilution_water_basis; dilution_water_method; dilution_water_state; dilution_water_sample_time; dilution_water_source; dilution_water_uncertainty; active_fraction; active_fraction_unit; active_fraction_basis; active_fraction_method; active_fraction_state; active_fraction_sample_time; active_fraction_source; active_fraction_uncertainty; actual_count; actual_count_unit; actual_count_basis; actual_count_method; actual_count_state; actual_count_sample_time; actual_count_source; actual_count_uncertainty; actual_unit_mass; actual_unit_mass_unit; actual_unit_mass_basis; actual_unit_mass_method; actual_unit_mass_state; actual_unit_mass_sample_time; actual_unit_mass_source; actual_unit_mass_uncertainty; actual_repeat_count; actual_repeat_count_unit; actual_repeat_count_basis; actual_repeat_count_method; actual_repeat_count_state; actual_repeat_count_sample_time; actual_repeat_count_source; actual_repeat_count_uncertainty; actual_density; actual_density_unit; actual_density_basis; actual_density_method; actual_density_state; actual_density_sample_time; actual_density_source; actual_density_uncertainty; density_temperature; density_temperature_unit; density_temperature_basis; density_temperature_method; density_temperature_state; density_temperature_sample_time; density_temperature_source; density_temperature_uncertainty; responsibility_transfer_quantity; responsibility_transfer_quantity_unit; responsibility_transfer_quantity_basis; responsibility_transfer_quantity_method; responsibility_transfer_quantity_state; responsibility_transfer_quantity_sample_time; responsibility_transfer_quantity_source; responsibility_transfer_quantity_uncertainty; prior_burden_carry_quantity; prior_burden_carry_quantity_unit; prior_burden_carry_quantity_basis; prior_burden_carry_quantity_method; prior_burden_carry_quantity_state; prior_burden_carry_quantity_sample_time; prior_burden_carry_quantity_source; prior_burden_carry_quantity_uncertainty; actual_target_share; actual_target_share_unit; actual_target_share_basis; actual_target_share_method; actual_target_share_state; actual_target_share_sample_time; actual_target_share_source; actual_target_share_uncertainty; flow_row_id; actual_identity_case; actual_substance_or_material; actual_origin_and_medium; actual_state_and_gate; case_activation_evidence; typed_or_residual_quantity; quantity_exclusion_links; whole_total_reconciliation; unresolved_occurrence_not_zero | 按状态数称实际收货库存，外部NET仅净包装皮重，非已扣未用或已用外退。配同源身份状态UNUSED；按stock_balance核同范围期初流入期末责任转移为S，选S投入加未用输出，或S减未用后投入且删除输出。已用回收去向原负荷独立，记录配液成分非加和。 聚合执行：先stock_exclusive再实际归属normalize_once；内转非新购，无负残差或已用退回原生抵扣 | kg; Item(s); 实际浓度体积密度 | 各收货领用未用退回已用回收及关闭 | 实际批事件报告留存结转 | 实际物资维保清洁和供应接收 | 每参考流 | 实际称件SKU原生换算、同源状态收退和明确毛额消耗表示 |
| cp_providers | sleeping_compartment_service | 完成车厢车库支持服务 | 物理交付覆盖职责矩阵 | provider_id; operation_id; accepted_delivery; actual_counted_operation_definition; native_service_unit; covered_duty_stage_ids; asset_equipment_energy_material_water_effluent_freight_life_scope; actual_otherusers; direct_stage_exclusion; completed_missing_stage_record; source_dataset_link; region_technology_period; provider_native_quantity; provider_native_quantity_unit; provider_native_quantity_basis; provider_native_quantity_method; provider_native_quantity_state; provider_native_quantity_sample_time; provider_native_quantity_source; provider_native_quantity_uncertainty; actual_counted_operation_quantity; actual_counted_operation_quantity_unit; actual_counted_operation_quantity_basis; actual_counted_operation_quantity_method; actual_counted_operation_quantity_state; actual_counted_operation_quantity_sample_time; actual_counted_operation_quantity_source; actual_counted_operation_quantity_uncertainty; covered_stage_burden; covered_stage_burden_unit; covered_stage_burden_basis; covered_stage_burden_method; covered_stage_burden_state; covered_stage_burden_sample_time; covered_stage_burden_source; covered_stage_burden_uncertainty; actual_completed_missing_stage_quantity; actual_completed_missing_stage_quantity_unit; actual_completed_missing_stage_quantity_basis; actual_completed_missing_stage_quantity_method; actual_completed_missing_stage_quantity_state; actual_completed_missing_stage_quantity_sample_time; actual_completed_missing_stage_quantity_source; actual_completed_missing_stage_quantity_uncertainty; actual_target_driver; actual_target_driver_unit; actual_target_driver_basis; actual_target_driver_method; actual_target_driver_state; actual_target_driver_sample_time; actual_target_driver_source; actual_target_driver_uncertainty; actual_alluser_driver; actual_alluser_driver_unit; actual_alluser_driver_basis; actual_alluser_driver_method; actual_alluser_driver_state; actual_alluser_driver_sample_time; actual_alluser_driver_source; actual_alluser_driver_uncertainty; actual_target_share; actual_target_share_unit; actual_target_share_basis; actual_target_share_method; actual_target_share_state; actual_target_share_sample_time; actual_target_share_source; actual_target_share_uncertainty | 读实际验收物理范围而非单看账单，逐阶段作业资产区段时间匹配数据集与自负记录，核实际数量原生基准。未覆盖阶段以已完成原生证据和排重整合一次，Count仅真实定义物理作业；其他原生交付须审量纲交换。 聚合执行：provider_gate，完整供应或已补齐独占底层阶段，计划不算完成 | 真实计件才Item(s); 实际供应原生单位 | 各验收作业数据集范围变化 | 实际作业覆盖区间和供应资产寿命 | 实际车厢车库公共客用和完整供应链 | 每参考流 | 实际验收、详细覆盖和补齐排重证据 |
| cp_linen | sleeping_compartment_service | 实际已完成布草护理 | 织物批组库存护理账 | item_cohort_material_construction; piece_id; EACH_TOTAL; dry_method; moisture_state; batch_id; rewash_event; native_service_basis; actual_provider_stage_scope; rental_manufacture_scope; receiver_effluent; transfer_id; actual_piece_count; actual_piece_count_unit; actual_piece_count_basis; actual_piece_count_method; actual_piece_count_state; actual_piece_count_sample_time; actual_piece_count_source; actual_piece_count_uncertainty; actual_unit_dry_mass; actual_unit_dry_mass_unit; actual_unit_dry_mass_basis; actual_unit_dry_mass_method; actual_unit_dry_mass_state; actual_unit_dry_mass_sample_time; actual_unit_dry_mass_source; actual_unit_dry_mass_uncertainty; actual_moisture; actual_moisture_unit; actual_moisture_basis; actual_moisture_method; actual_moisture_state; actual_moisture_sample_time; actual_moisture_source; actual_moisture_uncertainty; clean_opening; clean_opening_unit; clean_opening_basis; clean_opening_method; clean_opening_state; clean_opening_sample_time; clean_opening_source; clean_opening_uncertainty; clean_closing; clean_closing_unit; clean_closing_basis; clean_closing_method; clean_closing_state; clean_closing_sample_time; clean_closing_source; clean_closing_uncertainty; soiled_opening; soiled_opening_unit; soiled_opening_basis; soiled_opening_method; soiled_opening_state; soiled_opening_sample_time; soiled_opening_source; soiled_opening_uncertainty; soiled_closing; soiled_closing_unit; soiled_closing_basis; soiled_closing_method; soiled_closing_state; soiled_closing_sample_time; soiled_closing_source; soiled_closing_uncertainty; inwash_opening; inwash_opening_unit; inwash_opening_basis; inwash_opening_method; inwash_opening_state; inwash_opening_sample_time; inwash_opening_source; inwash_opening_uncertainty; inwash_closing; inwash_closing_unit; inwash_closing_basis; inwash_closing_method; inwash_closing_state; inwash_closing_sample_time; inwash_closing_source; inwash_closing_uncertainty; held_opening; held_opening_unit; held_opening_basis; held_opening_method; held_opening_state; held_opening_sample_time; held_opening_source; held_opening_uncertainty; held_closing; held_closing_unit; held_closing_basis; held_closing_method; held_closing_state; held_closing_sample_time; held_closing_source; held_closing_uncertainty; returned_quantity; returned_quantity_unit; returned_quantity_basis; returned_quantity_method; returned_quantity_state; returned_quantity_sample_time; returned_quantity_source; returned_quantity_uncertainty; rejected_quantity; rejected_quantity_unit; rejected_quantity_basis; rejected_quantity_method; rejected_quantity_state; rejected_quantity_sample_time; rejected_quantity_source; rejected_quantity_uncertainty; actual_completed_dry_mass; actual_completed_dry_mass_unit; actual_completed_dry_mass_basis; actual_completed_dry_mass_method; actual_completed_dry_mass_state; actual_completed_dry_mass_sample_time; actual_completed_dry_mass_source; actual_completed_dry_mass_uncertainty; actual_completed_washes; actual_completed_washes_unit; actual_completed_washes_basis; actual_completed_washes_method; actual_completed_washes_state; actual_completed_washes_sample_time; actual_completed_washes_source; actual_completed_washes_uncertainty; actual_rewash_count; actual_rewash_count_unit; actual_rewash_count_basis; actual_rewash_count_method; actual_rewash_count_state; actual_rewash_count_sample_time; actual_rewash_count_source; actual_rewash_count_uncertainty; actual_provider_native_quantity; actual_provider_native_quantity_unit; actual_provider_native_quantity_basis; actual_provider_native_quantity_method; actual_provider_native_quantity_state; actual_provider_native_quantity_sample_time; actual_provider_native_quantity_source; actual_provider_native_quantity_uncertainty; actual_target_share; actual_target_share_unit; actual_target_share_basis; actual_target_share_method; actual_target_share_state; actual_target_share_sample_time; actual_target_share_source; actual_target_share_uncertainty | 核实际物件批组清污在洗库存与完成护理重洗，kg需真实干基方法非湿毛重或材料纯度。核洗烘熨水化学能污水设备运输租赁寿命覆盖，未含真实职责补一次。 聚合执行：兼容基准已完成护理按真实用户归属，制造另寿命份额，重洗非新品 | kg干织物或实际合同原生基准有据换算; 真实件数 | 各转移护理批重洗及关闭 | 完成批次报告全织物寿命阶段 | 实际住宿布草和真实外部中央护理 | 每参考流 | 批验收干基兼容含水、库存及供应覆盖 |
| cp_assets | sleeping_compartment_service | 车辆固定设施内装织物全寿命 | 资产批组阶段全用户寿命账 | asset_id; serial_cohort; actual_unit_material_configuration; manufacture_install_stage; maintenance_replacement_events; useful_repair_redeploy; actual_retirement_EOLevent; stage_owner; covered_provider_dataset; uncovered_stage_record; uncertainty_sensitivity; actual_asset_count; actual_asset_count_unit; actual_asset_count_basis; actual_asset_count_method; actual_asset_count_state; actual_asset_count_sample_time; actual_asset_count_source; actual_asset_count_uncertainty; actual_material_dry_mass; actual_material_dry_mass_unit; actual_material_dry_mass_basis; actual_material_dry_mass_method; actual_material_dry_mass_state; actual_material_dry_mass_sample_time; actual_material_dry_mass_source; actual_material_dry_mass_uncertainty; actual_stage_burden; actual_stage_burden_unit; actual_stage_burden_basis; actual_stage_burden_method; actual_stage_burden_state; actual_stage_burden_sample_time; actual_stage_burden_source; actual_stage_burden_uncertainty; observed_alluser_history; observed_alluser_history_unit; observed_alluser_history_basis; observed_alluser_history_method; observed_alluser_history_state; observed_alluser_history_sample_time; observed_alluser_history_source; observed_alluser_history_uncertainty; sourced_remaining_equivalent_service; sourced_remaining_equivalent_service_unit; sourced_remaining_equivalent_service_basis; sourced_remaining_equivalent_service_method; sourced_remaining_equivalent_service_state; sourced_remaining_equivalent_service_sample_time; sourced_remaining_equivalent_service_source; sourced_remaining_equivalent_service_uncertainty; actual_terminated_total; actual_terminated_total_unit; actual_terminated_total_basis; actual_terminated_total_method; actual_terminated_total_state; actual_terminated_total_sample_time; actual_terminated_total_source; actual_terminated_total_uncertainty; target_life_driver; target_life_driver_unit; target_life_driver_basis; target_life_driver_method; target_life_driver_state; target_life_driver_sample_time; target_life_driver_source; target_life_driver_uncertainty; alluser_life_driver; alluser_life_driver_unit; alluser_life_driver_basis; alluser_life_driver_method; alluser_life_driver_state; alluser_life_driver_sample_time; alluser_life_driver_source; alluser_life_driver_uncertainty; actual_equivalence_factor; actual_equivalence_factor_unit; actual_equivalence_factor_basis; actual_equivalence_factor_method; actual_equivalence_factor_state; actual_equivalence_factor_sample_time; actual_equivalence_factor_source; actual_equivalence_factor_uncertainty; actual_idle_driver; actual_idle_driver_unit; actual_idle_driver_basis; actual_idle_driver_method; actual_idle_driver_state; actual_idle_driver_sample_time; actual_idle_driver_source; actual_idle_driver_uncertainty; actual_replacement_quantity; actual_replacement_quantity_unit; actual_replacement_quantity_basis; actual_replacement_quantity_method; actual_replacement_quantity_state; actual_replacement_quantity_sample_time; actual_replacement_quantity_source; actual_replacement_quantity_uncertainty; actual_retirement_mass; actual_retirement_mass_unit; actual_retirement_mass_basis; actual_retirement_mass_method; actual_retirement_mass_state; actual_retirement_mass_sample_time; actual_retirement_mass_source; actual_retirement_mass_uncertainty; prior_burden_carry_quantity; prior_burden_carry_quantity_unit; prior_burden_carry_quantity_basis; prior_burden_carry_quantity_method; prior_burden_carry_quantity_state; prior_burden_carry_quantity_sample_time; prior_burden_carry_quantity_source; prior_burden_carry_quantity_uncertainty; actual_target_share; actual_target_share_unit; actual_target_share_basis; actual_target_share_method; actual_target_share_state; actual_target_share_sample_time; actual_target_share_source; actual_target_share_uncertainty | 清点真实资产完整阶段，读供应资产逐阶段覆盖，实际补未含制造维护更换报废一次。定已观测全用户历史加有源剩余等价服务及不确定性更新，或终止实际总量；每量独立。原生日历空间时间分子也含闲置。追织物部件更换接收，勿重寿命采购。 聚合执行：asset_life/provider_gate后normalize_once，年目标N非寿命；全部用户期间闭合 | Item(s)实际资产; kg实际干材; 原生服务时间距离驱动 | 各资产阶段使用维修更换退役及更新 | 全用户制造安装使用维护更换报废全寿命及各报告期 | 真实机车车厢内装设备织物与相关轨道车站车库 | 每参考流 | 实际清册阶段数据已观测历史有源剩余假设敏感性责任接收闭合 |
| cp_package | sleeping_compartment_service | 实际包内食品附属范围 | 服务版本供应阶段账 | journey_service_version; actual_included_food_support; provision_event; actual_acceptance_decline; independent_purchase_flag; food_prepared_state; real_provider_or_direct_route; actual_ingredients_upstream_preparation_holding_serving_dishes; waste_assets_freight_coverage; completed_missing_stage_ids; otherconsumer_driver; actual_native_provision_quantity; actual_native_provision_quantity_unit; actual_native_provision_quantity_basis; actual_native_provision_quantity_method; actual_native_provision_quantity_state; actual_native_provision_quantity_sample_time; actual_native_provision_quantity_source; actual_native_provision_quantity_uncertainty; actual_accepted_provision_count; actual_accepted_provision_count_unit; actual_accepted_provision_count_basis; actual_accepted_provision_count_method; actual_accepted_provision_count_state; actual_accepted_provision_count_sample_time; actual_accepted_provision_count_source; actual_accepted_provision_count_uncertainty; actual_declined_provision_count; actual_declined_provision_count_unit; actual_declined_provision_count_basis; actual_declined_provision_count_method; actual_declined_provision_count_state; actual_declined_provision_count_sample_time; actual_declined_provision_count_source; actual_declined_provision_count_uncertainty; actual_food_mass; actual_food_mass_unit; actual_food_mass_basis; actual_food_mass_method; actual_food_mass_state; actual_food_mass_sample_time; actual_food_mass_source; actual_food_mass_uncertainty; actual_ingredient_mass; actual_ingredient_mass_unit; actual_ingredient_mass_basis; actual_ingredient_mass_method; actual_ingredient_mass_state; actual_ingredient_mass_sample_time; actual_ingredient_mass_source; actual_ingredient_mass_uncertainty; actual_preparation_resource_quantity; actual_preparation_resource_quantity_unit; actual_preparation_resource_quantity_basis; actual_preparation_resource_quantity_method; actual_preparation_resource_quantity_state; actual_preparation_resource_quantity_sample_time; actual_preparation_resource_quantity_source; actual_preparation_resource_quantity_uncertainty; actual_discard_mass; actual_discard_mass_unit; actual_discard_mass_basis; actual_discard_mass_method; actual_discard_mass_state; actual_discard_mass_sample_time; actual_discard_mass_source; actual_discard_mass_uncertainty; actual_completed_missing_stage_quantity; actual_completed_missing_stage_quantity_unit; actual_completed_missing_stage_quantity_basis; actual_completed_missing_stage_quantity_method; actual_completed_missing_stage_quantity_state; actual_completed_missing_stage_quantity_sample_time; actual_completed_missing_stage_quantity_source; actual_completed_missing_stage_quantity_uncertainty; actual_target_driver; actual_target_driver_unit; actual_target_driver_basis; actual_target_driver_method; actual_target_driver_state; actual_target_driver_sample_time; actual_target_driver_source; actual_target_driver_uncertainty; actual_alluser_driver; actual_alluser_driver_unit; actual_alluser_driver_basis; actual_alluser_driver_method; actual_alluser_driver_state; actual_alluser_driver_sample_time; actual_alluser_driver_source; actual_alluser_driver_uncertainty; actual_target_share; actual_target_share_unit; actual_target_share_basis; actual_target_share_method; actual_target_share_state; actual_target_share_sample_time; actual_target_share_source; actual_target_share_uncertainty | 实际套餐已供食品支持记录对供应物理阶段，拒领真正提供食品与没供应不同。完整食材损失制备保温运营餐具废物资产运输。未盖真实独立食品生产须审路线模块扩展，餐名或将来计划不算。 聚合执行：included_package/provider_gate，独购分开共享实际归属，无名义餐客乘数 | Item(s)实际定义供应作业; 实际原生食品服务数量 | 各套餐供应部分履行独购和供应范围变化 | 实际旅程供餐批次与完整供应资产寿命 | 实际包厢套餐及供应公共餐饮用户 | 每参考流 | 实际供应验收独立产出和已完成来源供应接收矩阵 |
| cp_refrigerant | sleeping_compartment_service | 独立供应装填回收大气去向 | 物种设备库存事件账 | substance_blend_components; cylinder_id; equipment_id; factory_charge_owner; event_id; source_method; uncertainty; provider_exclusion; standalone_opening; standalone_opening_unit; standalone_opening_basis; standalone_opening_method; standalone_opening_state; standalone_opening_sample_time; standalone_opening_source; standalone_opening_uncertainty; standalone_closing; standalone_closing_unit; standalone_closing_basis; standalone_closing_method; standalone_closing_state; standalone_closing_sample_time; standalone_closing_source; standalone_closing_uncertainty; installed_opening; installed_opening_unit; installed_opening_basis; installed_opening_method; installed_opening_state; installed_opening_sample_time; installed_opening_source; installed_opening_uncertainty; installed_closing; installed_closing_unit; installed_closing_basis; installed_closing_method; installed_closing_state; installed_closing_sample_time; installed_closing_source; installed_closing_uncertainty; recovered_opening; recovered_opening_unit; recovered_opening_basis; recovered_opening_method; recovered_opening_state; recovered_opening_sample_time; recovered_opening_source; recovered_opening_uncertainty; recovered_closing; recovered_closing_unit; recovered_closing_basis; recovered_closing_method; recovered_closing_state; recovered_closing_sample_time; recovered_closing_source; recovered_closing_uncertainty; new_factory_charge_entry; new_factory_charge_entry_unit; new_factory_charge_entry_basis; new_factory_charge_entry_method; new_factory_charge_entry_state; new_factory_charge_entry_sample_time; new_factory_charge_entry_source; new_factory_charge_entry_uncertainty; standalone_external_receipts_tare_only; standalone_external_receipts_tare_only_unit; standalone_external_receipts_tare_only_basis; standalone_external_receipts_tare_only_method; standalone_external_receipts_tare_only_state; standalone_external_receipts_tare_only_sample_time; standalone_external_receipts_tare_only_source; standalone_external_receipts_tare_only_uncertainty; other_external_receipts; other_external_receipts_unit; other_external_receipts_basis; other_external_receipts_method; other_external_receipts_state; other_external_receipts_sample_time; other_external_receipts_source; other_external_receipts_uncertainty; unused_same_source_state_returns; unused_same_source_state_returns_unit; unused_same_source_state_returns_basis; unused_same_source_state_returns_method; unused_same_source_state_returns_state; unused_same_source_state_returns_sample_time; unused_same_source_state_returns_source; unused_same_source_state_returns_uncertainty; useful_used_export; useful_used_export_unit; useful_used_export_basis; useful_used_export_method; useful_used_export_state; useful_used_export_sample_time; useful_used_export_source; useful_used_export_uncertainty; contained_waste_quantity; contained_waste_quantity_unit; contained_waste_quantity_basis; contained_waste_quantity_method; contained_waste_quantity_state; contained_waste_quantity_sample_time; contained_waste_quantity_source; contained_waste_quantity_uncertainty; whole_equipment_retained_exit_charge; whole_equipment_retained_exit_charge_unit; whole_equipment_retained_exit_charge_basis; whole_equipment_retained_exit_charge_method; whole_equipment_retained_exit_charge_state; whole_equipment_retained_exit_charge_sample_time; whole_equipment_retained_exit_charge_source; whole_equipment_retained_exit_charge_uncertainty; actual_installed_addition; actual_installed_addition_unit; actual_installed_addition_basis; actual_installed_addition_method; actual_installed_addition_state; actual_installed_addition_sample_time; actual_installed_addition_source; actual_installed_addition_uncertainty; actual_internal_recovery_transfer; actual_internal_recovery_transfer_unit; actual_internal_recovery_transfer_basis; actual_internal_recovery_transfer_method; actual_internal_recovery_transfer_state; actual_internal_recovery_transfer_sample_time; actual_internal_recovery_transfer_source; actual_internal_recovery_transfer_uncertainty; actual_independently_evidenced_air_release; actual_independently_evidenced_air_release_unit; actual_independently_evidenced_air_release_basis; actual_independently_evidenced_air_release_method; actual_independently_evidenced_air_release_state; actual_independently_evidenced_air_release_sample_time; actual_independently_evidenced_air_release_source; actual_independently_evidenced_air_release_uncertainty; other_identified_external_fates; other_identified_external_fates_unit; other_identified_external_fates_basis; other_identified_external_fates_method; other_identified_external_fates_state; other_identified_external_fates_sample_time; other_identified_external_fates_source; other_identified_external_fates_uncertainty; unresolved_difference; unresolved_difference_unit; unresolved_difference_basis; unresolved_difference_method; unresolved_difference_state; unresolved_difference_sample_time; unresolved_difference_source; unresolved_difference_uncertainty; actual_component_fraction; actual_component_fraction_unit; actual_component_fraction_basis; actual_component_fraction_method; actual_component_fraction_state; actual_component_fraction_sample_time; actual_component_fraction_source; actual_component_fraction_uncertainty; actual_container_tare; actual_container_tare_unit; actual_container_tare_basis; actual_container_tare_method; actual_container_tare_state; actual_container_tare_sample_time; actual_container_tare_source; actual_container_tare_uncertainty; actual_density; actual_density_unit; actual_density_basis; actual_density_method; actual_density_state; actual_density_sample_time; actual_density_source; actual_density_uncertainty; density_temperature; density_temperature_unit; density_temperature_basis; density_temperature_method; density_temperature_state; density_temperature_sample_time; density_temperature_source; density_temperature_uncertainty; gross_drawn_supply_S; gross_drawn_supply_S_unit; gross_drawn_supply_S_basis; gross_drawn_supply_S_method; gross_drawn_supply_S_state; gross_drawn_supply_S_sample_time; gross_drawn_supply_S_source; gross_drawn_supply_S_uncertainty; consumed_input_quantity; consumed_input_quantity_unit; consumed_input_quantity_basis; consumed_input_quantity_method; consumed_input_quantity_state; consumed_input_quantity_sample_time; consumed_input_quantity_source; consumed_input_quantity_uncertainty; prior_burden_carry_quantity; prior_burden_carry_quantity_unit; prior_burden_carry_quantity_basis; prior_burden_carry_quantity_method; prior_burden_carry_quantity_state; prior_burden_carry_quantity_sample_time; prior_burden_carry_quantity_source; prior_burden_carry_quantity_uncertainty; actual_target_share; actual_target_share_unit; actual_target_share_basis; actual_target_share_method; actual_target_share_state; actual_target_share_sample_time; actual_target_share_source; actual_target_share_uncertainty | 按真实物质状态称读容器设备维修。独立供应、设备、回收三库存分开，回收期初末不含在独立库。新进入设备出厂充注仅不在设备期初时记，另记实际其他外收、整设备保留含量出界、已用有用输出、截留废物和独证空气或未知去向各关口时间。收货仅净容器皮重，除非明确选择消耗表示。UNUSED按stock_exclusive；已用回收非未用新品退回。实际去向核完，补充或残差不能证气损。 聚合执行：refrigerant_fates/stock_balance/stock_exclusive/provider_gate；合并库存审计与制造服务交换及整设备含量非加和；物种阶段责任唯一，回收旧源负荷结转一次后归一化 | kg; 实际容器设备读数及必要密度状态 | 各供应充注回收转移释放和关闭 | 实际事件设备报告与回收库结转 | 负责暖通制冷设备及服务接收界 | 每参考流 | 实际物种组分库存装填接收、兼容闭合或有据直接计量模型 |
| cp_freight | sleeping_compartment_service | 未覆盖真实货运 | 载荷货段成员账 | shipment_id; leg_id; origin_destination; carrier; payload_basis; distance_method; EACH_TOTAL; actual_target_membership; source_time; provider_coverage; actual_carried_wet_goods_mass; actual_carried_wet_goods_mass_unit; actual_carried_wet_goods_mass_basis; actual_carried_wet_goods_mass_method; actual_carried_wet_goods_mass_state; actual_carried_wet_goods_mass_sample_time; actual_carried_wet_goods_mass_source; actual_carried_wet_goods_mass_uncertainty; actual_packaging_support_mass; actual_packaging_support_mass_unit; actual_packaging_support_mass_basis; actual_packaging_support_mass_method; actual_packaging_support_mass_state; actual_packaging_support_mass_sample_time; actual_packaging_support_mass_source; actual_packaging_support_mass_uncertainty; actual_vehicle_noncargo_tare; actual_vehicle_noncargo_tare_unit; actual_vehicle_noncargo_tare_basis; actual_vehicle_noncargo_tare_method; actual_vehicle_noncargo_tare_state; actual_vehicle_noncargo_tare_sample_time; actual_vehicle_noncargo_tare_source; actual_vehicle_noncargo_tare_uncertainty; actual_payload_mass; actual_payload_mass_unit; actual_payload_mass_basis; actual_payload_mass_method; actual_payload_mass_state; actual_payload_mass_sample_time; actual_payload_mass_source; actual_payload_mass_uncertainty; actual_distance; actual_distance_unit; actual_distance_basis; actual_distance_method; actual_distance_state; actual_distance_sample_time; actual_distance_source; actual_distance_uncertainty; actual_repeat_count; actual_repeat_count_unit; actual_repeat_count_basis; actual_repeat_count_method; actual_repeat_count_state; actual_repeat_count_sample_time; actual_repeat_count_source; actual_repeat_count_uncertainty; actual_record_target_share; actual_record_target_share_unit; actual_record_target_share_basis; actual_record_target_share_method; actual_record_target_share_state; actual_record_target_share_sample_time; actual_record_target_share_source; actual_record_target_share_uncertainty; actual_target_membership_quantity; actual_target_membership_quantity_unit; actual_target_membership_quantity_basis; actual_target_membership_quantity_method; actual_target_membership_quantity_state; actual_target_membership_quantity_sample_time; actual_target_membership_quantity_source; actual_target_membership_quantity_uncertainty | 读真实载荷路线称重，保留湿材水包装支持，仅去非货皮重。货段去重核重复，先定该载荷目标份额和供应已含运输，再算兼容质量距离。 聚合执行：freight_sum: sum(actual_payload_k * actual_distance_k * actual_repeat_k * actual_target_share_k) / 同范围正N一次；TOTAL的repeat=1只是记录表示恒等，无求和外重复份额 | kg*km; 原生质量距离 | 各真实独立货段载荷状态变化 | 真实运输及报告库存结转区间 | 供应布草车库接收货运，非客运 | 每参考流 | 实际路线载荷质量计件范围和供应排重，每因子自身原生元数据 |
| cp_fates | sleeping_compartment_service | 真实有用废物交付 | 流别接收账 | origin_event; stream_id; material_species_components; condition_dry_wet; actual_mixture_boundary; component_nonadditive_view; useful_or_waste_gate; receiver_id; transfer_acceptance; actual_treatment_dataset; provider_covered_stage; stored_open_close; unresolved_fate; actual_stream_quantity; actual_stream_quantity_unit; actual_stream_quantity_basis; actual_stream_quantity_method; actual_stream_quantity_state; actual_stream_quantity_sample_time; actual_stream_quantity_source; actual_stream_quantity_uncertainty; actual_component_fraction; actual_component_fraction_unit; actual_component_fraction_basis; actual_component_fraction_method; actual_component_fraction_state; actual_component_fraction_sample_time; actual_component_fraction_source; actual_component_fraction_uncertainty; actual_native_unit_mass; actual_native_unit_mass_unit; actual_native_unit_mass_basis; actual_native_unit_mass_method; actual_native_unit_mass_state; actual_native_unit_mass_sample_time; actual_native_unit_mass_source; actual_native_unit_mass_uncertainty; actual_native_density; actual_native_density_unit; actual_native_density_basis; actual_native_density_method; actual_native_density_state; actual_native_density_sample_time; actual_native_density_source; actual_native_density_uncertainty; density_temperature; density_temperature_unit; density_temperature_basis; density_temperature_method; density_temperature_state; density_temperature_sample_time; density_temperature_source; density_temperature_uncertainty; stored_opening; stored_opening_unit; stored_opening_basis; stored_opening_method; stored_opening_state; stored_opening_sample_time; stored_opening_source; stored_opening_uncertainty; stored_closing; stored_closing_unit; stored_closing_basis; stored_closing_method; stored_closing_state; stored_closing_sample_time; stored_closing_source; stored_closing_uncertainty; useful_handover_quantity; useful_handover_quantity_unit; useful_handover_quantity_basis; useful_handover_quantity_method; useful_handover_quantity_state; useful_handover_quantity_sample_time; useful_handover_quantity_source; useful_handover_quantity_uncertainty; waste_handover_quantity; waste_handover_quantity_unit; waste_handover_quantity_basis; waste_handover_quantity_method; waste_handover_quantity_state; waste_handover_quantity_sample_time; waste_handover_quantity_source; waste_handover_quantity_uncertainty; actual_receiver_treatment_quantity; actual_receiver_treatment_quantity_unit; actual_receiver_treatment_quantity_basis; actual_receiver_treatment_quantity_method; actual_receiver_treatment_quantity_state; actual_receiver_treatment_quantity_sample_time; actual_receiver_treatment_quantity_source; actual_receiver_treatment_quantity_uncertainty; prior_burden_carry_quantity; prior_burden_carry_quantity_unit; prior_burden_carry_quantity_basis; prior_burden_carry_quantity_method; prior_burden_carry_quantity_state; prior_burden_carry_quantity_sample_time; prior_burden_carry_quantity_source; prior_burden_carry_quantity_uncertainty; actual_target_share; actual_target_share_unit; actual_target_share_basis; actual_target_share_method; actual_target_share_state; actual_target_share_sample_time; actual_target_share_source; actual_target_share_uncertainty; flow_row_id; actual_identity_case; actual_substance_or_material; actual_origin_and_medium; actual_state_and_gate; case_activation_evidence; typed_or_residual_quantity; quantity_exclusion_links; whole_total_reconciliation; unresolved_occurrence_not_zero | 查实际材料状态各界验收，不同物质材质接收分开，除非真实单一混收；总混合物与组分审计非加和。已完成真实处理和上游损失一次，解留存结转，有用已用材料无默认原生抵扣。 聚合执行：stream_fates/provider_gate/normalize_once，无残差或回收标签代替验收去向 | kg; 实际原生件体积换算 | 各真实废弃回收转移验收及关闭 | 原事件储存接收处理阶段 | 真实套餐车厢车库及接收 | 每参考流 | 实际称票材料接收处理验收、组分闭合原负荷链接 |
| cp_emissions | sleeping_compartment_service | 实际物种实际介质直接排放 | 来源物种介质事件账 | physical_source_duty; species_or_particle_size; reporting_basis; receiving_medium_compartment; factor_native_unit_scope_source; provider_coverage; uncertainty; actual_activity; actual_activity_unit; actual_activity_basis; actual_activity_method; actual_activity_state; actual_activity_sample_time; actual_activity_source; actual_activity_uncertainty; actual_measured_amount; actual_measured_amount_unit; actual_measured_amount_basis; actual_measured_amount_method; actual_measured_amount_state; actual_measured_amount_sample_time; actual_measured_amount_source; actual_measured_amount_uncertainty; actual_concentration; actual_concentration_unit; actual_concentration_basis; actual_concentration_method; actual_concentration_state; actual_concentration_sample_time; actual_concentration_source; actual_concentration_uncertainty; actual_same_sample_flow; actual_same_sample_flow_unit; actual_same_sample_flow_basis; actual_same_sample_flow_method; actual_same_sample_flow_state; actual_same_sample_flow_sample_time; actual_same_sample_flow_source; actual_same_sample_flow_uncertainty; actual_factor_value; actual_factor_value_unit; actual_factor_value_basis; actual_factor_value_method; actual_factor_value_state; actual_factor_value_sample_time; actual_factor_value_source; actual_factor_value_uncertainty; actual_species_conversion; actual_species_conversion_unit; actual_species_conversion_basis; actual_species_conversion_method; actual_species_conversion_state; actual_species_conversion_sample_time; actual_species_conversion_source; actual_species_conversion_uncertainty; actual_contained_recovery; actual_contained_recovery_unit; actual_contained_recovery_basis; actual_contained_recovery_method; actual_contained_recovery_state; actual_contained_recovery_sample_time; actual_contained_recovery_source; actual_contained_recovery_uncertainty; actual_unit_conversion; actual_unit_conversion_unit; actual_unit_conversion_basis; actual_unit_conversion_method; actual_unit_conversion_state; actual_unit_conversion_sample_time; actual_unit_conversion_source; actual_unit_conversion_uncertainty; actual_target_share; actual_target_share_unit; actual_target_share_basis; actual_target_share_method; actual_target_share_state; actual_target_share_sample_time; actual_target_share_source; actual_target_share_uncertainty; flow_row_id; actual_identity_case; actual_substance_or_material; actual_origin_and_medium; actual_state_and_gate; case_activation_evidence; typed_or_residual_quantity; quantity_exclusion_links; whole_total_reconciliation; unresolved_occurrence_not_zero | 实测或用独立来源且适配实际职责技术状态地域期间与活动单位因子；浓度链接同样本区间兼容流量，保物质元素基准及介质。必要计量因子缺失是强制缺口，非零或泛合物种。 聚合执行：species_amount/stream_fates后normalize_once，每物种介质分开，避免载体组分相加 | kg已识别物种; 各活动浓度因子样本原生单位 | 各实测事件或有据代表区间 | 真实负责源样本作业区间和时间覆盖 | 真实自负空气水土源，排相同供应已盖 | 每参考流 | 实际校准样本因子适用、各操作数量纲基准和未解必要排放 |
| cp_land | sleeping_compartment_service | 未覆盖实际占用改地 | 空间阶段责任账 | land_interface_id; polygon; category_before_after; actual_start_end; transformation_event_id; site_asset_provider_stage; actual_consumer_driver; prior_covered_land_interface; source_uncertainty; actual_area; actual_area_unit; actual_area_basis; actual_area_method; actual_area_state; actual_area_sample_time; actual_area_source; actual_area_uncertainty; actual_interval_duration; actual_interval_duration_unit; actual_interval_duration_basis; actual_interval_duration_method; actual_interval_duration_state; actual_interval_duration_sample_time; actual_interval_duration_source; actual_interval_duration_uncertainty; actual_calendar_conversion; actual_calendar_conversion_unit; actual_calendar_conversion_basis; actual_calendar_conversion_method; actual_calendar_conversion_state; actual_calendar_conversion_sample_time; actual_calendar_conversion_source; actual_calendar_conversion_uncertainty; actual_transformation_from_area; actual_transformation_from_area_unit; actual_transformation_from_area_basis; actual_transformation_from_area_method; actual_transformation_from_area_state; actual_transformation_from_area_sample_time; actual_transformation_from_area_source; actual_transformation_from_area_uncertainty; actual_transformation_to_area; actual_transformation_to_area_unit; actual_transformation_to_area_basis; actual_transformation_to_area_method; actual_transformation_to_area_state; actual_transformation_to_area_sample_time; actual_transformation_to_area_source; actual_transformation_to_area_uncertainty; actual_consumer_driver_unit; actual_consumer_driver_basis; actual_consumer_driver_method; actual_consumer_driver_state; actual_consumer_driver_sample_time; actual_consumer_driver_source; actual_consumer_driver_uncertainty; actual_alluser_driver; actual_alluser_driver_unit; actual_alluser_driver_basis; actual_alluser_driver_method; actual_alluser_driver_state; actual_alluser_driver_sample_time; actual_alluser_driver_source; actual_alluser_driver_uncertainty; actual_target_share; actual_target_share_unit; actual_target_share_basis; actual_target_share_method; actual_target_share_state; actual_target_share_sample_time; actual_target_share_source; actual_target_share_uncertainty | 读实际地籍场址轨道车库地块事件，定不重叠真实地块类别区间与转换前后状态。按阶段核全寿命资产供应土地，未知历史不从铁路标签推断。 聚合执行：land_phase/rail_partition/normalize_once，无同供应资产土地重复或每旅程改地 | 占用m2*a; 转换m2; 原生面积时间 | 各真实地块状态区间转换覆盖变更 | 实际占用区间和真实转换日，资产供应阶段分开 | 责任匹配轨道车站车库地块，非自动全园区 | 每参考流 | 真实空间时间状态来源、原生量纲、转换配对及阶段排重 |

### 计算规则

| rule_id | 适用于 | 公式或规则 | 输入 | 输出 | source_ids |
| --- | --- | --- | --- | --- | --- |
| normalize_once | 全部非参考交换 | Q_target = sum(actual compatible Q_k * actual a_target,k)，真实事件职责唯一且份额求和内；仅同范围N_target > 0时Q_ref = Q_target / N_target，已按参考不变。先stock_exclusive，N_target=0按necessary_pool不除。每Q份额N换算均独立原生元数据来源。 | 真实原生记录; cp_journeys; rail_partition | 实际每参考量或有责未归一化结转 |  |
| accepted_episodes | 参考服务 | N_target = count唯一物理验收等价独占包厢服务期，核真实改房编组修订中断部分履行。计住宿履行非价格客距离；不同部分履行为另述产出责任池，非任意完整服务分数。 | cp_journeys; journey_identity | N_target |  |
| rail_duty_closure | 移动共享职责 | 真实列车车厢区段配置时间责任划分，各同职责责任用户分配闭合全B_k。先physical_precedence/rail_partition再normalize_once；阶段供应覆盖实际驱动决定份额，无规定数值或默认扣运输。 | cp_rail; cp_energy; cp_providers; 全部真实用户 | 实际住宿与其他产出独占职责及闭合 |  |
| lifetime_service | 资产阶段 | 按asset_life以兼容实际目标全用户寿命驱动分未盖全寿命阶段负荷。已观测加有源剩余等价使用或实际终止总量闭合全部负荷，含必要闲置；不同全寿命阶段、年度分配和当前更换不得重造已含制造报废。 | cp_assets; 各已观测剩余目标驱动原生量; provider_gate | 实际已完成寿命归属 |  |
| stock_balance | 物资材料状态 | 同来源材料状态负荷阶段和归属池内，S = attributed opening stock + inbound external receipts仅净包装容器皮重 + source-linked internal-in和有号必要责任转移 - attributed closing stock - actual internal-out责任转移。期末未用和回收库按兼容状态分账，回收不得同时含在独立期末库。先前来源阶段负荷和留库带到实际下一责任期间，不造制造。S为毛领用非单购货；S加配对UNUSED输出或S减配对UNUSED且删除输出互斥。已用出口回收留库保旧阶段负荷和服务结转，不能当未用新品退回净减或避免新制造；真实状态转换配转移编号及非加和父组分审计，不跨状态任减。实际耗用去向损失责任核清，未知差额或缺最终结转阻断完整使用。 | cp_stock; cp_refrigerant; stock_exclusive | 兼容库存闭合及独占交换量 |  |
| energy_quantity | 实际能源 | 实际表末减初且核真实复位进出口，或同区间实际平均功率乘时长后量纲换一次。热燃料用实际状态独立有源原生因子，积分能量不再乘时间，采购不自动燃烧。 | cp_energy; 各能源时间换算原生量 | 实际未盖兼容能燃料量 |  |
| water_fates | 实际水 | 同一声明边界期间和兼容水含水状态：期初库 + 真实外部入流 = 互斥真实外部终端出口 + 期末库 + 未解差额。端用是内部中间视图，非额外终端；内部供水水箱补充、截留交付同接收验收分别配对同一数量，不重进出。留存水分已在期末物料水库存中不另加，唯一转移ID、内外部终端库存成员职责证明排重。真实水汽排口需独证计量或有据模型，残差未知。真实载水混合物与物种成分审计非加和，非供水等于污水蒸发。 | cp_water; 各样本水源水箱接收操作数 | 实际不同水去向和未解差额 |  |
| refrigerant_fates | 实际制冷剂 | 同物种组分边界阶段期间，三互斥库：O_installed + O_standalone + O_recovered + new_factory_charge_entry + standalone_external_receipts_tare_only + other_external_receipts = C_installed + C_standalone + C_recovered + matched_UNUSED_returns + useful_USED_export + contained_waste + whole_equipment_retained_exit_charge + independently_evidenced_air_release + other_identified_external_fates + unresolved_difference。new factory仅本期进界且不在O_installed的设备，其制造装填归设备供应一次，非又一次独立制冷剂制造。回收O/C独立且不含在standalone内；内部添加回收转移仅合并审计抵消，非新进出。整设备保留出口含量为该设备交付非加和组分，非另计制冷剂废物。已用回收保原负荷不抵新制造；不匹配残差不能视释放，即使总账闭合，缺独证去向仍未知。核原生组分份额、新入厂时间、全部外部关口和已盖阶段；stock_exclusive/stock_balance决定实际制造服务交换表示，不重此非加和审计。 | cp_refrigerant; stock_balance; 实际充注回收接收量 | 实际供应有用截留空气储存去向无重复 |  |
| freight_sum | 材料货运 | Q_target_freight = sum(actual carried payload_k * actual leg_distance_k * actual repeat_k * actual target_share_k)，独立实际货段EACH乘重复一次，TOTAL不变。载荷含湿内容包装支持，仅去车皮非货皮；求和后normalize_once一次，乘客不是货物。 | cp_freight; 各独立质量距离重复份额 | 兼容单位每参考kg*km |  |
| species_amount | 实际直接污染物 | 实测物种量，或实际活动乘独立有源适用因子，量纲状态基准换算；浓度仅乘同样本区间兼容流量。保物质元素基准粒径介质供应排重，各实际交换独立，缺必要物种因子阻断完整使用非默认零。 | cp_emissions; cp_refrigerant; 各活动因子样本换算原生量 | 实际物种介质量 |  |
| land_phase | 实际土地 | occupation = sum(不重叠实际面积乘兼容区间时长)，按类别责任分；from/to转换同真实事件地块非年夜重复。归属前核供应资产当前全寿命土地阶段，再原生换算normalize_once；未知地块类别历史为采集缺口。 | cp_land; 各原生面积时间日历事件量 | 独占实际m2*a占用及m2转换 |  |

### 数据质量要求

| requirement_id | 适用于 | 要求 | 证据 |
| --- | --- | --- | --- |
| physical_service | 参考限定 | 实际等价版本独占睡眠准备门禁配置供应区段套餐验收改房撤销部分履行，非固定数量商业代理。 | cp_journeys真实图纸验收 |
| native_each_operand | 各原派生量 | 各量独立native_unit,basis,method,state,sample_time,source_ref,value,uncertainty，算前核量纲状态时间用户兼容，非共用全行badge或臆测换算。 | 全协议独立操作数字段 |
| actual_shared_closure | 移动能源资产池 | 实际编组分合时间成员、全部用户产出、因果驱动阶段责任闭合全职责。必要空驶停放失败闲置和N0结转有真实最终责任去向。 | cp_rail; physical_precedence; necessary_pool |
| full_life_actual | 供应资本 | 全链矩阵含全用户制造安装维护更换报废、上游资源真实接收，缺阶段实际补一次排同覆盖后才完整最终数据。 | cp_providers/cp_assets已完成数据来源原生责任链接 |
| stock_state_fates | 物资水制冷剂 | 同源状态UNUSED毛额加退回或消耗投入删输出互斥，已用回收保负荷；真实混合物非加和成分介质接收有证，残差未知。 | cp_stock/water/refrigerant/fates真实验收 |
| uncertainty_identity | 范围身份 | 无无据范围寿命因子、默认缺投入或缺数零，最终TIDAS前核具体身份属性单位，条件卡按真实材质物种状态介质展开。 | 实际来源计量核实身份与缺口用途限制 |
| representative_route | 时长路线套餐聚合 | 单声明等价真实版本，不暗平均异路线时长套餐配置。物理等价权重须审，保所有贡献、原生驱动来源敏感性。 | 实际贡献区段版本及等价论证 |
| complete_accommodation_electricity | sleeping_compartment_service | 最终使用前，按下方完整采集定义将`accommodation_electricity`的每项真实情形展开为独立身份交换，完成原生数量、状态、来源、接收方及覆盖证据。缺UUID或数量不能作零；保留固定情形的数量须从余项排除。 | `cp_energy` |
| complete_purchased_useful_heat | sleeping_compartment_service | 最终使用前，按下方完整采集定义将`purchased_useful_heat`的每项真实情形展开为独立身份交换，完成原生数量、状态、来源、接收方及覆盖证据。缺UUID或数量不能作零；保留固定情形的数量须从余项排除。 | `cp_energy` |
| complete_uncovered_operating_fuel | sleeping_compartment_service | 最终使用前，按下方完整采集定义将`uncovered_operating_fuel`的每项真实情形展开为独立身份交换，完成原生数量、状态、来源、接收方及覆盖证据。缺UUID或数量不能作零；保留固定情形的数量须从余项排除。 | `cp_energy` |
| complete_supplied_water | sleeping_compartment_service | 最终使用前，按下方完整采集定义将`supplied_water`的每项真实情形展开为独立身份交换，完成原生数量、状态、来源、接收方及覆盖证据。缺UUID或数量不能作零；保留固定情形的数量须从余项排除。 | `cp_water` |
| complete_cleaning_supplies | sleeping_compartment_service | 最终使用前，按下方完整采集定义将`cleaning_supplies`的每项真实情形展开为独立身份交换，完成原生数量、状态、来源、接收方及覆盖证据。缺UUID或数量不能作零；保留固定情形的数量须从余项排除。 | `cp_stock` |
| complete_included_nonfood_supplies | sleeping_compartment_service | 最终使用前，按下方完整采集定义将`included_nonfood_supplies`的每项真实情形展开为独立身份交换，完成原生数量、状态、来源、接收方及覆盖证据。缺UUID或数量不能作零；保留固定情形的数量须从余项排除。 | `cp_stock` |
| complete_reusable_textile_lifecycle | sleeping_compartment_service | 最终使用前，按下方完整采集定义将`reusable_textile_lifecycle`的每项真实情形展开为独立身份交换，完成原生数量、状态、来源、接收方及覆盖证据。缺UUID或数量不能作零；保留固定情形的数量须从余项排除。 | `cp_assets` |
| complete_rolling_stock_full_life | sleeping_compartment_service | 最终使用前，按下方完整采集定义将`rolling_stock_full_life`的每项真实情形展开为独立身份交换，完成原生数量、状态、来源、接收方及覆盖证据。缺UUID或数量不能作零；保留固定情形的数量须从余项排除。 | `cp_assets` |
| complete_rail_station_depot_full_life | sleeping_compartment_service | 最终使用前，按下方完整采集定义将`rail_station_depot_full_life`的每项真实情形展开为独立身份交换，完成原生数量、状态、来源、接收方及覆盖证据。缺UUID或数量不能作零；保留固定情形的数量须从余项排除。 | `cp_assets` |
| complete_maintenance_materials | sleeping_compartment_service | 最终使用前，按下方完整采集定义将`maintenance_materials`的每项真实情形展开为独立身份交换，完成原生数量、状态、来源、接收方及覆盖证据。缺UUID或数量不能作零；保留固定情形的数量须从余项排除。 | `cp_stock` |
| complete_standalone_refrigerant_makeup | sleeping_compartment_service | 最终使用前，按下方完整采集定义将`standalone_refrigerant_makeup`的每项真实情形展开为独立身份交换，完成原生数量、状态、来源、接收方及覆盖证据。缺UUID或数量不能作零；保留固定情形的数量须从余项排除。 | `cp_refrigerant` |
| complete_supply_freight | sleeping_compartment_service | 最终使用前，按下方完整采集定义将`supply_freight`的每项真实情形展开为独立身份交换，完成原生数量、状态、来源、接收方及覆盖证据。缺UUID或数量不能作零；保留固定情形的数量须从余项排除。 | `cp_freight` |
| complete_direct_water_abstraction | sleeping_compartment_service | 最终使用前，按下方完整采集定义将`direct_water_abstraction`的每项真实情形展开为独立身份交换，完成原生数量、状态、来源、接收方及覆盖证据。缺UUID或数量不能作零；保留固定情形的数量须从余项排除。 | `cp_water` |
| complete_land_occupation | sleeping_compartment_service | 最终使用前，按下方完整采集定义将`land_occupation`的每项真实情形展开为独立身份交换，完成原生数量、状态、来源、接收方及覆盖证据。缺UUID或数量不能作零；保留固定情形的数量须从余项排除。 | `cp_land` |
| complete_land_transformation_from | sleeping_compartment_service | 最终使用前，按下方完整采集定义将`land_transformation_from`的每项真实情形展开为独立身份交换，完成原生数量、状态、来源、接收方及覆盖证据。缺UUID或数量不能作零；保留固定情形的数量须从余项排除。 | `cp_land` |
| complete_matched_unused_supply_returns | sleeping_compartment_service | 最终使用前，按下方完整采集定义将`matched_unused_supply_returns`的每项真实情形展开为独立身份交换，完成原生数量、状态、来源、接收方及覆盖证据。缺UUID或数量不能作零；保留固定情形的数量须从余项排除。 | `cp_stock` |
| complete_useful_used_material_handover | sleeping_compartment_service | 最终使用前，按下方完整采集定义将`useful_used_material_handover`的每项真实情形展开为独立身份交换，完成原生数量、状态、来源、接收方及覆盖证据。缺UUID或数量不能作零；保留固定情形的数量须从余项排除。 | `cp_fates` |
| complete_contained_wastewater | sleeping_compartment_service | 最终使用前，按下方完整采集定义将`contained_wastewater`的每项真实情形展开为独立身份交换，完成原生数量、状态、来源、接收方及覆盖证据。缺UUID或数量不能作零；保留固定情形的数量须从余项排除。 | `cp_water` |
| complete_food_discard | sleeping_compartment_service | 最终使用前，按下方完整采集定义将`food_discard`的每项真实情形展开为独立身份交换，完成原生数量、状态、来源、接收方及覆盖证据。缺UUID或数量不能作零；保留固定情形的数量须从余项排除。 | `cp_fates` |
| complete_packaging_discard | sleeping_compartment_service | 最终使用前，按下方完整采集定义将`packaging_discard`的每项真实情形展开为独立身份交换，完成原生数量、状态、来源、接收方及覆盖证据。缺UUID或数量不能作零；保留固定情形的数量须从余项排除。 | `cp_fates` |
| complete_discarded_cleaning_maintenance_material | sleeping_compartment_service | 最终使用前，按下方完整采集定义将`discarded_cleaning_maintenance_material`的每项真实情形展开为独立身份交换，完成原生数量、状态、来源、接收方及覆盖证据。缺UUID或数量不能作零；保留固定情形的数量须从余项排除。 | `cp_fates` |
| complete_retired_textile | sleeping_compartment_service | 最终使用前，按下方完整采集定义将`retired_textile`的每项真实情形展开为独立身份交换，完成原生数量、状态、来源、接收方及覆盖证据。缺UUID或数量不能作零；保留固定情形的数量须从余项排除。 | `cp_assets` |
| complete_retired_asset_material | sleeping_compartment_service | 最终使用前，按下方完整采集定义将`retired_asset_material`的每项真实情形展开为独立身份交换，完成原生数量、状态、来源、接收方及覆盖证据。缺UUID或数量不能作零；保留固定情形的数量须从余项排除。 | `cp_assets` |
| complete_contained_refrigerant_waste | sleeping_compartment_service | 最终使用前，按下方完整采集定义将`contained_refrigerant_waste`的每项真实情形展开为独立身份交换，完成原生数量、状态、来源、接收方及覆盖证据。缺UUID或数量不能作零；保留固定情形的数量须从余项排除。 | `cp_refrigerant` |
| complete_direct_water_outfall | sleeping_compartment_service | 最终使用前，按下方完整采集定义将`direct_water_outfall`的每项真实情形展开为独立身份交换，完成原生数量、状态、来源、接收方及覆盖证据。缺UUID或数量不能作零；保留固定情形的数量须从余项排除。 | `cp_water` |
| complete_direct_air_species | sleeping_compartment_service | 最终使用前，按下方完整采集定义将`direct_air_species`的每项真实情形展开为独立身份交换，完成原生数量、状态、来源、接收方及覆盖证据。缺UUID或数量不能作零；保留固定情形的数量须从余项排除。 | `cp_emissions` |
| complete_direct_water_pollutants | sleeping_compartment_service | 最终使用前，按下方完整采集定义将`direct_water_pollutants`的每项真实情形展开为独立身份交换，完成原生数量、状态、来源、接收方及覆盖证据。缺UUID或数量不能作零；保留固定情形的数量须从余项排除。 | `cp_emissions` |
| complete_direct_soil_species | sleeping_compartment_service | 最终使用前，按下方完整采集定义将`direct_soil_species`的每项真实情形展开为独立身份交换，完成原生数量、状态、来源、接收方及覆盖证据。缺UUID或数量不能作零；保留固定情形的数量须从余项排除。 | `cp_emissions` |
| complete_direct_refrigerant_air | sleeping_compartment_service | 最终使用前，按下方完整采集定义将`direct_refrigerant_air`的每项真实情形展开为独立身份交换，完成原生数量、状态、来源、接收方及覆盖证据。缺UUID或数量不能作零；保留固定情形的数量须从余项排除。 | `cp_refrigerant` |
| complete_land_transformation_to | sleeping_compartment_service | 最终使用前，按下方完整采集定义将`land_transformation_to`的每项真实情形展开为独立身份交换，完成原生数量、状态、来源、接收方及覆盖证据。缺UUID或数量不能作零；保留固定情形的数量须从余项排除。 | `cp_land` |


### 强制清单完成记录

以下记录是强制物理采集和情形展开要求，不是单条清单交换。原有节点、方向、流类型、数量基准、采集协议、库存去向、供应接收和来源义务全部继续有效。正文对这些编号的引用对应这些完成要求。前景数据集完成前，必须将每项真实物料、服务、资产全寿命、废物流或物种介质分别展开为具原生数量和排他覆盖的独立身份交换。保留固定卡只覆盖其真实受支持情形，其余真实情形须无重叠协调。身份、发生或数量缺失仍待采集，不能填零或删项。内部配对交接和组分审计视图不可相加；必要全寿命与供应商阶段必须实际完成一次。

#### accommodation_electricity

责任节点与原流角色：sleeping_compartment_service / inputs / product

实际包厢照明插座、暖通、热水辅助、卫生、接待和准备待机职责；区分车载辅助供电、岸电或车库供电和供应商已覆盖牵引及辅助电力，不重复已整合电量。

本卡为独立身份分支`accommodation_electricity_ac`之外的余项清单要求。已计入分支的实际数量不再计入本余项交换，原类目总量仅作不可相加的协调审计。其他实际材料、状态、来源或介质仍须保留自身经核实的身份、原生数量及供应接收责任；记录缺失时，不推定条件分支发生、不发生或数量为零。

- 选定流：实际住宿及其应归属辅助电力
- 流属性/单位：Energy / kWh
- 数量规则：按cp_energy将实际独占归属且兼容的原生数量除以同范围正N_target一次；已按参考归一化者不再除，N_target=0保留不相除
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_energy`
- 范围证据需求：电源地域电压、实际表计区间、全体列车车厢用户及上游覆盖；无每客电量或铭牌默认值。

#### purchased_useful_heat

责任节点与原流角色：sleeping_compartment_service / inputs / product

仅记录真实状态和设备边界的实际交付热冷；不重复服务已覆盖电力或燃料。

本卡为独立身份分支`purchased_useful_heat_delivered_heat`之外的余项清单要求。已计入分支的实际数量不再计入本余项交换，原类目总量仅作不可相加的协调审计。其他实际材料、状态、来源或介质仍须保留自身经核实的身份、原生数量及供应接收责任；记录缺失时，不推定条件分支发生、不发生或数量为零。

- 选定流：实际外供有效热或冷服务
- 流属性/单位：Energy / MJ
- 数量规则：按cp_energy将实际独占归属且兼容的原生数量除以同范围正N_target一次；已按参考归一化者不再除，N_target=0保留不相除
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_energy`
- 范围证据需求：实际有效交付量、原生温度焓及独立换算元数据、供应损失和设备覆盖。

#### uncovered_operating_fuel

责任节点与原流角色：sleeping_compartment_service / inputs / product

按实际未覆盖维修支持燃料条件纳入；第三方牵引燃料属完整匹配供应或明确审查的独占补充，不叠加全套运输服务与泛化机车燃料。

- 选定流：实际未被覆盖的运营燃料载体
- 流属性/单位：Mass / kg
- 数量规则：按cp_energy将实际独占归属且兼容的原生数量除以同范围正N_target一次；已按参考归一化者不再除，N_target=0保留不相除
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_energy`
- 范围证据需求：实际品级、库存核对、燃烧与入库区分、体积密度温度及燃烧覆盖；无默认柴电比例。

#### supplied_water

责任节点与原流角色：sleeping_compartment_service / inputs / product

实际车载补水、淋浴盥洗如厕清洁及负责的车库公共用水；补水不自动等于耗用、污水、蒸发或同期间归属。

本卡为独立身份分支`supplied_water_liquid_tap`之外的余项清单要求。已计入分支的实际数量不再计入本余项交换，原类目总量仅作不可相加的协调审计。其他实际材料、状态、来源或介质仍须保留自身经核实的身份、原生数量及供应接收责任；记录缺失时，不推定条件分支发生、不发生或数量为零。

- 选定流：实际住宿与准备供水
- 流属性/单位：Volume / m3
- 数量规则：按cp_water将实际独占归属且兼容的原生数量除以同范围正N_target一次；已按参考归一化者不再除，N_target=0保留不相除
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_water`
- 范围证据需求：实际水源水箱库存表计、转移编号和全用户事件联系；无每客升数或预设截留技术。

#### cleaning_supplies

责任节点与原流角色：sleeping_compartment_service / inputs / product

按实际供应状态逐项展开清洁剂消毒剂抹布吸附物滤材；浓缩品、稀释水、活性份额为非加和视图，包装不计入净配方。

本卡为独立身份分支`cleaning_supplies_synthetic_detergent`之外的余项清单要求。已计入分支的实际数量不再计入本余项交换，原类目总量仅作不可相加的协调审计。其他实际材料、状态、来源或介质仍须保留自身经核实的身份、原生数量及供应接收责任；记录缺失时，不推定条件分支发生、不发生或数量为零。

- 选定流：实际清洁卫生配方与材料
- 流属性/单位：Mass / kg
- 数量规则：按cp_stock将实际独占归属且兼容的原生数量除以同范围正N_target一次；已按参考归一化者不再除，N_target=0保留不相除
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_stock`
- 范围证据需求：SKU成分状态、毛净皮重、配液和原生EACH/TOTAL换算、匹配未用退回。

#### included_nonfood_supplies

责任节点与原流角色：sleeping_compartment_service / inputs / product

实际洗护、纸品、备品及其他供应物按材质SKU展开；无默认套装或一次性使用，可重用容器支持物属全寿命资产。

- 选定流：实际包内非食品客用物品
- 流属性/单位：Mass / kg
- 数量规则：按cp_stock将实际独占归属且兼容的原生数量除以同范围正N_target一次；已按参考归一化者不再除，N_target=0保留不相除
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_stock`
- 范围证据需求：实际供应耗用未用库存退回状态及有源单件质量，不按名义人数代替。

#### reusable_textile_lifecycle

责任节点与原流角色：sleeping_compartment_service / inputs / product

仅供应租赁洗涤尚未覆盖的制造运输维护更换报废份额；实际干织物质量材质结构与全用户寿命不同于已洗质量。

- 选定流：实际未覆盖可复用织物全寿命服务
- 流属性/单位：Mass / kg
- 数量规则：按cp_assets将实际独占归属且兼容的原生数量除以同范围正N_target一次；已按参考归一化者不再除，N_target=0保留不相除
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_assets`
- 范围证据需求：实际物件库存批组干重、已观测及有源剩余服务寿命或实际终止总量；不以质量残差判丢失。

#### rolling_stock_full_life

责任节点与原流角色：sleeping_compartment_service / inputs / product

实际机车车体车厢内装床垫卫生暖通家具设备支持物按阶段独占；计实际资产件及寿命服务份额，非每旅程新造车厢；仅有实际覆盖证明才扣供应已含制造维保报废。

- 选定流：实际未覆盖车辆与住宿内装全寿命
- 流属性/单位：Count / Item(s)
- 数量规则：按cp_assets将实际独占归属且兼容的原生数量除以同范围正N_target一次；已按参考归一化者不再除，N_target=0保留不相除
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_assets`
- 范围证据需求：实际资产清册序号配置质量或件数、全用户寿命历史剩余等价及实际制造安装维保更换退役范围。

#### rail_station_depot_full_life

责任节点与原流角色：sleeping_compartment_service / inputs / product

实际相关轨道车站休息接入车库固定支持资产，每物理阶段唯一责任方且全用户原生寿命驱动；非每趟整项设施，也非既有设施土地无负荷。

- 选定流：实际未覆盖轨道车站车库基础设施全寿命
- 流属性/单位：Count / Item(s)
- 数量规则：按cp_assets将实际独占归属且兼容的原生数量除以同范围正N_target一次；已按参考归一化者不再除，N_target=0保留不相除
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_assets`
- 范围证据需求：实际相关设施清册供应阶段矩阵、区段服务使用寿命驱动，原生土地接口独立核对重叠。

#### maintenance_materials

责任节点与原流角色：sleeping_compartment_service / inputs / product

实际油润滑剂零件配方按材料状态逐项展开，寿命或供应已含的新件不再收费，已用退回回收是独立去向。

- 选定流：实际未覆盖维保流体与替换材料
- 流属性/单位：Mass / kg
- 数量规则：按cp_stock将实际独占归属且兼容的原生数量除以同范围正N_target一次；已按参考归一化者不再除，N_target=0保留不相除
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_stock`
- 范围证据需求：实际部件作业更换、材质混合物及自身净库存密度基准、全新未用退回与已用回收区分。

#### standalone_refrigerant_makeup

责任节点与原流角色：sleeping_compartment_service / inputs / product

实际物质或配比及状态的供应，出厂装填仅属设备供应一次；补充量不自动等于泄漏。

- 选定流：实际已覆盖设备之外独立制冷剂供应
- 流属性/单位：Mass / kg
- 数量规则：按cp_refrigerant将实际独占归属且兼容的原生数量除以同范围正N_target一次；已按参考归一化者不再除，N_target=0保留不相除
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_refrigerant`
- 范围证据需求：实际钢瓶净库存、设备期初末、回收未用退回及每事件物种状态；无默认泄漏率。

#### supply_freight

责任节点与原流角色：sleeping_compartment_service / inputs / product

实际独立载货段，含所运物资、湿布草水分、包装支持物的载荷；不把客运视为货运，也不重复供应已含运输。

- 选定流：实际未覆盖物资与布草货运
- 流属性/单位：Mass * distance / kg*km
- 数量规则：按cp_freight将实际独占归属且兼容的原生数量除以同范围正N_target一次；已按参考归一化者不再除，N_target=0保留不相除
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_freight`
- 范围证据需求：自身原生载荷距离方法时间来源、EACH重复与TOTAL、求和内部实际目标成员份额。

#### direct_water_abstraction

责任节点与原流角色：sleeping_compartment_service / inputs / elementary

仅实际源区环境取水，与购买供水及已含供应取水互斥。

- 选定流：实际直接环境取水
- 流属性/单位：Volume / m3
- 数量规则：按cp_water将实际独占归属且兼容的原生数量除以同范围正N_target一次；已按参考归一化者不再除，N_target=0保留不相除
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_water`
- 范围证据需求：实际水源场址表计、自身原生归属和环境区室，未知水源不补造。

#### land_occupation

责任节点与原流角色：sleeping_compartment_service / inputs / elementary

仅实际责任内轨道车站车库按类别不重叠地块区间占用，供应资产已含土地不重复。

- 选定流：实际未覆盖土地占用
- 流属性/单位：Area * time / m2*a
- 数量规则：按cp_land将实际独占归属且兼容的原生数量除以同范围正N_target一次；已按参考归一化者不再除，N_target=0保留不相除
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_land`
- 范围证据需求：实际多边形类别面积区间日历换算、兼容全用户职责和责任方；无全园区或票价份额默认。

#### land_transformation_from

责任节点与原流角色：sleeping_compartment_service / inputs / elementary

仅有源真实改地事件与原类别，关联实际资产场址且排除已含阶段，不每趟重计。

- 选定流：实际未覆盖土地原状态转出
- 流属性/单位：Area / m2
- 数量规则：按cp_land将实际独占归属且兼容的原生数量除以同范围正N_target一次；已按参考归一化者不再除，N_target=0保留不相除
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_land`
- 范围证据需求：真实前后事件日期地块类别及原生计量来源，未知转换非零也不预设。

#### matched_unused_supply_returns

责任节点与原流角色：sleeping_compartment_service / outputs / product

仅投入为stock_balance同范围毛领用S时配对同来源同身份同状态未用退回；投入已净扣则删除本输出。已用回收不属此行且不获新制造抵扣。

- 选定流：实际毛额核算匹配未用物资退回
- 流属性/单位：Mass / kg
- 数量规则：按cp_stock将实际独占归属且兼容的原生数量除以同范围正N_target一次；已按参考归一化者不再除，N_target=0保留不相除
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_stock`
- 范围证据需求：匹配收退编号、状态来源期间、毛净选择及同一物理身份，不能用无法解释负库存残差。

#### useful_used_material_handover

责任节点与原流角色：sleeping_compartment_service / outputs / product

实际接收验收的已用材料零件回收物，逐实际材质状态关口展开，原负荷按声明归属保留，不默认避免原生新制造。

- 选定流：实际有用已用材料交付
- 流属性/单位：Mass / kg
- 数量规则：按cp_fates将实际独占归属且兼容的原生数量除以同范围正N_target一次；已按参考归一化者不再除，N_target=0保留不相除
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_fates`
- 范围证据需求：实际质量用途接收关口原生量和既有负荷结转联系，不由标签推断回收。

#### contained_wastewater

责任节点与原流角色：sleeping_compartment_service / outputs / waste

实际截留如厕盥洗清洁水按兼容混合物和接收路线，含实际清箱事件；供水补水不等于排水，勿合并无关废物，处理一次。

- 选定流：实际截留污水接收交付
- 流属性/单位：Volume / m3
- 数量规则：按cp_water将实际独占归属且兼容的原生数量除以同范围正N_target一次；已按参考归一化者不再除，N_target=0保留不相除
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_water`
- 范围证据需求：实际水箱期初末含水接收计量成分转移编号、储存结转及真实完整接收处理。

#### food_discard

责任节点与原流角色：sleeping_compartment_service / outputs / waste

仅套餐责任内实际食品或餐盘未供餐废弃，记录可食不可食制备和含水状态，不预设全客供餐。

- 选定流：实际交接处理的食品废弃物
- 流属性/单位：Mass / kg
- 数量规则：按cp_fates将实际独占归属且兼容的原生数量除以同范围正N_target一次；已按参考归一化者不再除，N_target=0保留不相除
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_fates`
- 范围证据需求：实际事件流量接收来源与供应自负废物覆盖，上游损失食品不删除。

#### packaging_discard

责任节点与原流角色：sleeping_compartment_service / outputs / waste

各实际材质废包装按来源；周转支持物不因每次使用变废物或新购包装，真实混收保留非加和成分审计。

本卡为独立身份分支`packaging_discard_paper_pack`; `packaging_discard_metal_pack`之外的余项清单要求。已计入分支的实际数量不再计入本余项交换，原类目总量仅作不可相加的协调审计。其他实际材料、状态、来源或介质仍须保留自身经核实的身份、原生数量及供应接收责任；记录缺失时，不推定条件分支发生、不发生或数量为零。

- 选定流：实际包装废物交接
- 流属性/单位：Mass / kg
- 数量规则：按cp_fates将实际独占归属且兼容的原生数量除以同范围正N_target一次；已按参考归一化者不再除，N_target=0保留不相除
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_fates`
- 范围证据需求：实际材质污染干湿接收记录及计件换质量，无全废物合并身份。

#### discarded_cleaning_maintenance_material

责任节点与原流角色：sleeping_compartment_service / outputs / waste

按真实已用清洁剂油滤材吸附物零件废物的身份状态接收路线逐项；本条件卡须展开不同交换，不能混合无关化学品废物。

本卡为独立身份分支`discarded_cleaning_maintenance_material_used_lubricating_oil`之外的余项清单要求。已计入分支的实际数量不再计入本余项交换，原类目总量仅作不可相加的协调审计。其他实际材料、状态、来源或介质仍须保留自身经核实的身份、原生数量及供应接收责任；记录缺失时，不推定条件分支发生、不发生或数量为零。

- 选定流：实际清洁或维保材料废弃流
- 流属性/单位：Mass / kg
- 数量规则：按cp_fates将实际独占归属且兼容的原生数量除以同范围正N_target一次；已按参考归一化者不再除，N_target=0保留不相除
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_fates`
- 范围证据需求：实际物种材质混合物污染危险说明和接收证据，未知不得改成惰性泛流。

#### retired_textile

责任节点与原流角色：sleeping_compartment_service / outputs / waste

实际干湿状态退役织物仅在供应或全寿命报废未覆盖时纳入，洗涤质量与退役材料质量不同。

- 选定流：实际未覆盖退役织物接收交付
- 流属性/单位：Mass / kg
- 数量规则：按cp_assets将实际独占归属且兼容的原生数量除以同范围正N_target一次；已按参考归一化者不再除，N_target=0保留不相除
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_assets`
- 范围证据需求：实际退役批组物件状态材质质量含水接收、寿命责任与排重矩阵。

#### retired_asset_material

责任节点与原流角色：sleeping_compartment_service / outputs / waste

各实际退役资产零件材质接收流，排除已整合供应资产报废；再用维修有用交付不自动成为废物或新增住宿。

- 选定流：实际未覆盖退役资产材料流
- 流属性/单位：Mass / kg
- 数量规则：按cp_assets将实际独占归属且兼容的原生数量除以同范围正N_target一次；已按参考归一化者不再除，N_target=0保留不相除
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_assets`
- 范围证据需求：实际资产事件材质质量接收去向、既有寿命负荷与全用户责任归属。

#### contained_refrigerant_waste

责任节点与原流角色：sleeping_compartment_service / outputs / waste

实际物质配比状态的截留回收废弃制冷剂按接收交付，不自动视为大气排放有用输出或原生抵扣。

- 选定流：实际截留制冷剂废物接收交付
- 流属性/单位：Mass / kg
- 数量规则：按cp_refrigerant将实际独占归属且兼容的原生数量除以同范围正N_target一次；已按参考归一化者不再除，N_target=0保留不相除
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_refrigerant`
- 范围证据需求：原生回收期初末、接收验收处理去向、物种分离及完整供应范围。

#### direct_water_outfall

责任节点与原流角色：sleeping_compartment_service / outputs / elementary

仅真实按接收区室和水身份的直接环境排水，与截留接收交付和污染物成分视图区分。

- 选定流：实际直接环境出水
- 流属性/单位：Volume / m3
- 数量规则：按cp_water将实际独占归属且兼容的原生数量除以同范围正N_target一次；已按参考归一化者不再除，N_target=0保留不相除
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_water`
- 范围证据需求：实际排口地点区间状态成分计量及自负处理，未知去向不能当直接排放。

#### direct_air_species

责任节点与原流角色：sleeping_compartment_service / outputs / elementary

实际自负职责物质颗粒基准与空气区室条件纳入，物种逐项；无通用CO2、氮氧化物、硫氧化物或VOC因子，不因购燃料推燃烧，勿重复供应排放。

本卡为独立身份分支`direct_air_species_co2_fossil_air`; `direct_air_species_methane_fossil_air`; `direct_air_species_nitrous_oxide_air`之外的余项清单要求。已计入分支的实际数量不再计入本余项交换，原类目总量仅作不可相加的协调审计。其他实际材料、状态、来源或介质仍须保留自身经核实的身份、原生数量及供应接收责任；记录缺失时，不推定条件分支发生、不发生或数量为零。

- 选定流：实际直接向空气排放的非制冷剂物种
- 流属性/单位：Mass / kg
- 数量规则：按cp_emissions将实际独占归属且兼容的原生数量除以同范围正N_target一次；已按参考归一化者不再除，N_target=0保留不相除
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_emissions`
- 范围证据需求：实际计量或有源适用因子、活动单位状态基准时间和组分换算，必要排放缺失保留强制补证。

#### direct_water_pollutants

责任节点与原流角色：sleeping_compartment_service / outputs / elementary

仅实际已识别水污染物基准与接收区室，组分负荷与真实载水混合物非加和，并非另一污水接收流。

- 选定流：实际直接向水排放的物种
- 流属性/单位：Mass / kg
- 数量规则：按cp_emissions将实际独占归属且兼容的原生数量除以同范围正N_target一次；已按参考归一化者不再除，N_target=0保留不相除
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_emissions`
- 范围证据需求：实际浓度及同样本区间水量或质量计量、各自原生元数据和真实区室。

#### direct_soil_species

责任节点与原流角色：sleeping_compartment_service / outputs / elementary

按真实土壤释放的已识别物质状态区室条件纳入，泄漏库存差异不能独证释放量或零。

- 选定流：实际直接向土壤排放的物种
- 流属性/单位：Mass / kg
- 数量规则：按cp_emissions将实际独占归属且兼容的原生数量除以同范围正N_target一次；已按参考归一化者不再除，N_target=0保留不相除
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_emissions`
- 范围证据需求：实际泄漏截留回收边界记录及兼容量去向物种来源。

#### direct_refrigerant_air

责任节点与原流角色：sleeping_compartment_service / outputs / elementary

仅实际设备事件有据大气物种释放，必要时按真实混配组分展开；独立库存、设备装填、出厂含量、回收接收库存分离，补充不等于泄漏。

- 选定流：实际向空气排放制冷剂物种
- 流属性/单位：Mass / kg
- 数量规则：按cp_refrigerant将实际独占归属且兼容的原生数量除以同范围正N_target一次；已按参考归一化者不再除，N_target=0保留不相除
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_refrigerant`
- 范围证据需求：实际完整兼容质量状态事件核对或有源直接计量模型、空气介质和不确定性。

#### land_transformation_to

责任节点与原流角色：sleeping_compartment_service / outputs / elementary

实际配对事件转入有据新土地类别，同地块事件前后配对，不将持续占用重作转换。

- 选定流：实际未覆盖土地转入新状态
- 流属性/单位：Area / m2
- 数量规则：按cp_land将实际独占归属且兼容的原生数量除以同范围正N_target一次；已按参考归一化者不再除，N_target=0保留不相除
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_land`
- 范围证据需求：同真实事件地块日期及兼容面积单位来源、阶段责任和供应排重。


## 9. 验证规则

| rule_id | 适用于 | 规则 | source_ids |
| --- | --- | --- | --- |
| validate_reference | 最终产出 | 实际输出卡名参考链接一致、1 Item(s)、核Count支持和独占睡眠限定；无票客公里床座夜等价、换房分车重复产出或未履行未知计数。 |  |
| validate_rail_partition | 移动共享 | 必须真实列车车厢区段配置时间全用户、分合驱动覆盖责任账，住宿运输餐饮闭合一次，无整车重复或票价删负荷。真实闲置空驶调库停放失败及N0结转最终责任完备。 | cs-current-trains; cs-traction-depot-eir-2025 |
| validate_providers_life | 供应资产 | 拒绝缺真实阶段完成、泛外包、待补当实际、目标N寿命分母或漏车辆轨道车站车库内装布草全寿命。核全用户已观测加有源剩余或实际终止总量、原生兼容不确定性及不重复供应自负制造报废。 |  |
| validate_native | 各操作数公式 | 每原值因子份额时长寿命换算独立单位基准方法状态时间来源。拒不兼容材料时间单位状态、瞬时铭牌能源、kWh再乘时间、货运份额重复置错和二次归一化。 |  |
| validate_stock_fates | 物资水制冷剂接收 | 外收净量仅去皮，除非明确消耗表示。匹配同源同状态UNUSED毛额加退回或扣未用删输出互斥，已用回收非未用原生抵扣。拒未识别合流介质错、水汽当液废、库存残差当排放和缺必要采集当零。 |  |
| validate_failed_outputs | 失败部分作业 | 各失败准备失效拒收布草材料中断事件链接真实维修重洁调配退回留存接收和责任。失败未知非完整验收，整改清洁交接不是新旅程。 |  |
| validate_package_route | 包内食品支持 | 真实包内物品食品休息室卫生及全物理阶段完整一次，独购餐饮为真实其他产出。未审实际独立机车厨房洗涤转换或缺真实覆盖阻断完整套餐，无虚构通用路线每客量。 | cs-during-trip; nightjet-sleeping |
| validate_evidence | 最终数据双语投影 | EN/ZH生成投影同边界卡规则协议编号单位必要元数据，来源支持实际主张。通用范围UUID缺口明确用途与强制实际采集，不能造匹配因子引用或无据全链发布宣称。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 实际铁路独占卧铺包厢住宿前景数据包，下游process/lifecyclemodel投影 |
| downstream_use | secondary_dataset; background_dataset仅在实际物理阶段补齐、来源身份核验和等价版本路线套餐审查后 |
| allowed_use | 有据移动车辆运输全用户供应寿命边界与实际原生量下独占卧铺服务 |
| excluded_use | 共享床位座位固定房日夜、完整客运或餐饮单项；异旅程套餐默认等价、商业分配、缺实际阶段必要量或未核最终交换当完整验证数据 |
| required_metadata | 实际运营地域时间列车车厢包厢版本区段配置独占验收部分、全用户人数套餐、供应阶段接收资产土地责任、各原生操作数与分配结转归一化表示 |
| required_quality_disclosure | 实际来源覆盖、物理驱动替代敏感性、全用户寿命假设不确定性、N0闲置调库失败责任最终去向、真实完成缺阶段排重、未知量去向身份及限定用途 |
| update_trigger | 实际服务路线编组配置时长套餐供应资产寿命或资源接收驱动来源身份变化；原生数据支持覆盖变化或未解阶段补齐 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| unsd-cpc3-63290 | official_guidance | https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf ; printed356,30June2025 | 63290卧铺与固定半永久住宿、63310餐车独立分类，仅分类范围 |
| cs-room-supplements | handbook | https://www.sleeper.scot/tickets/room-supplements | 实际商业分开组合住宿运输，非物理分配因子 |
| cs-current-trains | handbook | https://www.sleeper.scot/about/our-trains/ | 实际卧铺座位餐饮无障碍配置、分合变动区段编组，无通用车队容量清单 |
| cs-traction-depot-eir-2025 | official_guidance | https://www.sleeper.scot/media/w10n35wj/csl088-3b-eir-response-s10-4-a-refusal-notice-class-66-locomotive-idling-in-inverness-csl.pdf ;3June2025,2pages | 实际第三方牵引车库与调车；怠速信息未持有，非零或数量 |
| cs-during-trip | handbook | https://www.sleeper.scot/help-support/during-your-trip/ | 实际包内另购食品房内餐车服务不同，无通用餐数菜单技术 |
| nightjet-sleeping | handbook | https://www.nightjet.com/en/komfortkategorien/schlafwagen | 实际睡眠布草乘务食品及共享私人区分，按真实列车变化 |
| nightjet-private | handbook | https://www.nightjet.com/en/komfortkategorien/ganzes-abteil-buchen | 实际独占卧铺包厢区别躺卧共享座位，无默认床数 |
