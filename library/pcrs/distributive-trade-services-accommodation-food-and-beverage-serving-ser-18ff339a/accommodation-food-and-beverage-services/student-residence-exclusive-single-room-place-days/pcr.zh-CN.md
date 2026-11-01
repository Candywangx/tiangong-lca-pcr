---
pcr_id: pcr.student-residence-exclusive-single-room-place-days
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 学生宿舍独占单人房居住位日服务

## 1. 适用范围与适用性

本PCR仅适用于学校或大学附属学生宿舍中，为学生分配、配备家具的自炊私人单人卧室。每个服务时段均须核实实际学生住宿用途以及宿舍与学校的隶属关系。暑期访客、会议参加者、工人住宿和其他居住用途均是独立产出，即使复用同一房间也不得计入本参考流。学生住宿资格不能替代真实接收交接和持续独占进入、可用状态的证据。整套公寓、共享睡眠房、家庭房和含餐生产路线不属于所选单房路线。

N_target 为同一固定兼容场址/服务画像中，实际不重叠履约的独占居住房间位经过时间除以有来源的匹配服务日时长之和。每个住户-分配-服务日 ID 及真实开始/结束、时区、UTC 偏移、夏令时和经过时间仅核算一次。首次真实交接/接收并建立入室安排后，只有该私人单人卧室实际可用、可进入、排他保留且真实住宿义务持续交付的时段才计入。临时离宿仅在真实进入权限/准备就绪/排他保留持续有证据时可计，不要求每夜人在房内。初次未接收的要约、付费未到、取消/终止/退房/关闭/不可用或另作他用时段都不是履约。持续同一住户服务中的真实替代房间时段只形成一份不重叠位时间输出，并保留两房真实资源；不能叠加旧新房，不能把两班轮住者算成两个独占整房日。交接、条件、进入、排他或时间未知即阻断输出，不默认履约。服务日惯例与真实时长须有来源；不默认24小时，不把费用、周、学期、月或实际入住夜直接换成房间日。

纳入真实房间可用/准备就绪、实际住户共享电器用能等公用事业、出入/响应、已履行/失败/拒绝的周转/清洁/维护、真实运营商布草/洗衣及跨全部实际用户/期间的完整场址/建筑/装修/床床垫/家具/暖通/纺织品/公共设备寿命责任。必要空闲/不可用/失败/未到义务保留在责任资源池中，不产生输出，也不随入住统计消失。

所选路线是自炊单人房居住住宿运营，具有实际共享厨房/用餐/卫浴/公共设施、家具、公用事业、出入/支持、清洁和洗衣责任。住户自行购买并自制食物的采购/制造和普通私人出行在所选住宿产品之外；实际运营商供给的套餐义务和住户来源物处理仍保留。真实包含餐食、交通或其他附属义务时，必须有物理匹配的完整供应商覆盖，或实际排他补齐缺失底层阶段一次，保留原生数量/来源/责任人/覆盖链接。真实自营厨房、运输、能源转换或工业洗衣生产须先完成已复核模块/过程扩展才能应用；通用服务卡不能吞掉它们。数量或覆盖缺口阻断完整套餐。餐厅存在、雇员福利或现金额度本身既不证明住房套餐含该义务，也不允许删除真实义务。当前含餐工人营村的报价不能自动全部套用。

当前学校和工人住所实例支持物理采集问题，不是通用数值或法律规则。价格、月/学期长度、清洁/布草频率、餐数、房间数、入住率、服务寿命、化学/泄漏因子或 UUID 均不推定。不完整身份、数量或义务保留为明确真实数据/使用限制；缺 UUID 或通用范围本身不是原则性错误。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.student-residence-exclusive-single-room-place-days |
| classification_refs | CPC 3.0:63210 (narrower) |
| covered_products | 本PCR仅适用于学校或大学附属学生宿舍中，为学生分配、配备家具的自炊私人单人卧室。每个服务时段均须核实实际学生住宿用途以及宿舍与学校的隶属关系。暑期访客、会议参加者、工人住宿和其他居住用途均是独立产出，即使复用同一房间也不得计入本参考流。学生住宿资格不能替代真实接收交接和持续独占进入、可用状态的证据。整套公寓、共享睡眠房、家庭房和含餐生产路线不属于所选单房路线。 |
| excluded_products | 初次未接收或付费未到要约；已退/关闭/不可用/另作他用时段；共享卧室/热床轮班周转/双人家庭/整套自包含单元；访客入住夜或名义容量换算；移动卧铺或娱乐营套餐；真实未复核现场生产或不完整包含餐食/交通/套餐范围 |
| representative_product | 实际交付的学生宿舍独占单人房居住位日 |
| production_route | 真实房间接收交接 -> 连续维护独占私人房间居住可用性及真实公共服务 -> 真实移动/退房/终止和后续用途/接收方物理交接 |
| market_state | 已交付持续维护居住住宿服务，不是出售房间/床/资产、所有权、雇员福利、纸面许可或预订 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 实际交付的学生宿舍独占单人房居住位日 |
| How much | 1 Item(s) |
| How well | 一个已建立住户的一间真实排他保留、可用私人单人卧室，真实持续进入/就绪且完整自炊住宿/套餐义务；不要求每夜人在房内 |
| How long or cycle | 有来源的真实当地居住服务日时长及实际不重叠履约时间，保留时区/UTC 偏移/夏令时/经过时间；学期/假期/轮班/任务/库存/报告/全寿命阶段分开 |
| reference_flow_link | student_residence_room_day |

| 字段 | 值 |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | 实际交付的学生宿舍独占单人房居住位日 |
| Reference flow property | Count `01846770-4cfe-4a25-8ad9-919d8d378345` |
| Reference unit group | Units of items `5beb6eed-33a9-47b8-9ede-1dfe8f679159` |
| Reference unit | Item(s) |
| Required qualifiers |actual_site_operator_and_purpose_neutral_residential_scope; actual_private_single_person_bedroom_configuration; resident_assignment_and_initial_received_handover; actual_operable_readiness_access_exclusive_retention; eligible_absence_and_closed_released_terminated_exclusion; service_day_source_start_end_timezone_UTC_DST_elapsed; move_segments_unique_resident_place_time; actual_selfcatering_shared_kitchen_bathroom_common_facilities; actual_provider_cleaning_laundry_package_fullstage_coverage; all_resident_visitor_conference_nonresident_consumers; necessary_idle_failed_N0_pool_final_resolution; full_alluser_building_furnishing_textile_asset_life; every_native_operand_unit_basis_method_state_time_source; actual_receiver_substance_medium_and_onceonly_handoff; verified_student_purpose_and_institution_residence_relationship |

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `assigned_room_reference` | student_residence_room_day | Count | Item(s) | 将 physical_residential_delivery 用于真实初次接收交接及持续排他可用/进入/就绪。采用 fulfilled_place_days 唯一住户分配/服务日时间片；实际离宿/在场状态不同于交付。初次未接收/未到或关闭/退房/另作他用时段即使收费也不能计入。换房持续一份住户输出，保留两段真实房间资源。 |
| `exclusive_room_time` | student_residence_room_day 及全部房间资源 | Count 及真实原生时间/面积 | Item(s) 及真实原生时间/面积单位 | 采用真实私人单卧室 ID 与不重叠住户分配、房间就绪和服务日时间片。共享家庭厨房/卫浴不代表共享睡眠卧室。热床、日内轮班周转、双人/家庭/多睡眠空间或整套公寓不得按名义床房数换算。真实轮班睡眠时刻本身不改变持续分配居住产品。部分时间须有来源、同画像时长与全部实际义务；无支持等效阻断应用。 |
| `linen_state_conversion` | laundry_service; linen_lifetime; freight | 质量及真实原生纺织品计数 | 真实干纺织品 kg；独立湿/调湿/载荷单位 | 实际干质量服务、调湿布、使用后湿货运及可重复制造不同。先有同样品仅水定义及百分数转比例证据，再作干湿换算。其他挥发性干燥失重/污物不等于纯水或纤维。 |
| `native_operands` | 全部清单行 | 真实兼容原生属性 | 真实原生单位 | 每个数量、分子/分母、重复、转换、密度/温度、资产等效、活动/因子/组成/去向都有独立原生单位/基准/方法/状态/样品时间/来源。未知基准或无支持物理等效阻断计算/绑定，不作零。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 实际运营自炊住所，识别私人单人卧室、已建立真实接收交接/分配及持续真实独占可用/进入/就绪记录 |
| starting_condition_role | 真实持续维护住宿与完整服务资产责任；现有所有权/设施不是无负荷起点 |
| product_classification_scope | 本PCR仅适用于学校或大学附属学生宿舍中，为学生分配、配备家具的自炊私人单人卧室。每个服务时段均须核实实际学生住宿用途以及宿舍与学校的隶属关系。暑期访客、会议参加者、工人住宿和其他居住用途均是独立产出，即使复用同一房间也不得计入本参考流。学生住宿资格不能替代真实接收交接和持续独占进入、可用状态的证据。整套公寓、共享睡眠房、家庭房和含餐生产路线不属于所选单房路线。 |
| recursive_input_rule | 不得把完全相同的最终分配位日作为自身输入。完整真实供应商只替代其实际物理匹配的底层责任，不删除或重复建模独立住所 |
| upstream_dataset_requirement | 真实公用事业/材料/供应商供给；完整场址/建筑/装修/家具/床床垫/暖通/纺织品制造安装维护更换寿命终结跨全部用户/期间一次。真实包含义务须完整物理供应商，或已复核真实生产路线扩展并排他实际补齐缺失阶段 |
| disclosure | 真实分配/初次接收/进入/就绪/排他保留/离宿/不可用/时间/换房/退房；实际套餐、全部真实产出/消费者交接和必要空闲/失败/N0闭合；原生数量/来源/寿命/供应商/接收方/物质/介质缺口 |

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `physical_residential_delivery` | residence_operation | N_target 为同一固定兼容场址/服务画像中，实际不重叠履约的独占居住房间位经过时间除以有来源的匹配服务日时长之和。每个住户-分配-服务日 ID 及真实开始/结束、时区、UTC 偏移、夏令时和经过时间仅核算一次。首次真实交接/接收并建立入室安排后，只有该私人单人卧室实际可用、可进入、排他保留且真实住宿义务持续交付的时段才计入。临时离宿仅在真实进入权限/准备就绪/排他保留持续有证据时可计，不要求每夜人在房内。初次未接收的要约、付费未到、取消/终止/退房/关闭/不可用或另作他用时段都不是履约。持续同一住户服务中的真实替代房间时段只形成一份不重叠位时间输出，并保留两房真实资源；不能叠加旧新房，不能把两班轮住者算成两个独占整房日。交接、条件、进入、排他或时间未知即阻断输出，不默认履约。服务日惯例与真实时长须有来源；不默认24小时，不把费用、周、学期、月或实际入住夜直接换成房间日。 | southampton-2026-27; stantony-2026-27; ucl-home-2026-27 |
| `complete_life` | 全部资产和资源 | 采集建筑、床/床垫、家具、设备、纺织品和可重复支撑物跨全部用户/期间的完整制造、安装、装修、维护、真实更换与寿命终结。兼容寿命驱动为真实全用户已观察历史+有来源的剩余生产等效服务，或实际终止总量；每个独立原生数量/等效/单位/基准/方法/状态/时间/来源、不确定性/敏感性/更新均保留。年度 N_target 不是寿命。日历/容量时间驱动须在目标分子也保留空闲责任；生产服务驱动须完整真实及有来源剩余使用与负荷闭合。选择完整资产/供应商覆盖或排他补齐缺失阶段，不能并用；完整链使用前须实际集成真实缺失阶段一次，保留原生数量/来源/责任人/覆盖链接。 |  |
| `actual_package_route` | 住宿与实际供应商 | 所选路线是自炊单人房居住住宿运营，具有实际共享厨房/用餐/卫浴/公共设施、家具、公用事业、出入/支持、清洁和洗衣责任。住户自行购买并自制食物的采购/制造和普通私人出行在所选住宿产品之外；实际运营商供给的套餐义务和住户来源物处理仍保留。真实包含餐食、交通或其他附属义务时，必须有物理匹配的完整供应商覆盖，或实际排他补齐缺失底层阶段一次，保留原生数量/来源/责任人/覆盖链接。真实自营厨房、运输、能源转换或工业洗衣生产须先完成已复核模块/过程扩展才能应用；通用服务卡不能吞掉它们。数量或覆盖缺口阻断完整套餐。餐厅存在、雇员福利或现金额度本身既不证明住房套餐含该义务，也不允许删除真实义务。当前含餐工人营村的报价不能自动全部套用。 | exeter-residences; ucl-home-2026-27; skilouise-staff; stayover-route-limit |
| `complete_consumers_and_periods` | 全部资源 | 声明全部住户/访客/会议/租户和公共设施非住户用户，覆盖学期、假期、轮班、真实离宿/就绪、维护、更换、空闲和资产寿命期间。优先真实任务追踪，记录各资源兼容物理归属、结转来源/接收/最终解决和完整资源池闭合。不以仅学生入住夜、年度 N、付款或名义房容量作通用全用户/寿命分母。执行 physical_pool_closure。 | exeter-residences |
| `route_and_evidence_limits` | 全部方法 | 来源只证明真实房间/服务安排和采集问题；不强加租金、税、法律期限、日长、房数尺寸、清洁频率、餐数、寿命、入住或排放因子。这些是前景采集及拟定核算规则，不声称公式出自运营商。真实独立生产技术须已复核范围/模块扩展；不推定锅炉/制冷/发电/工业洗衣/现场厨房。 |  |
| `actual_land_interfaces` | 场址建筑和供应商 | 真实场址/土地占用及有证据的历史或新增转化是不同于 Count 资产的物理接口。采集真实面积、占用时长/区间、土地状态/来源/位置，以及真实转化前后状态/日期/面积、生命周期阶段和责任人。占用采用原生面积*时间；真实转化采用原生面积，确需转换时须有来源。不得推断栖息地/土壤类别、土地类型转换因子，不能仅因场址存在就推定转化；适用的历史/新增转化未知是数据缺口。完整建筑/场址/供应商内已覆盖土地必须链接同一物理接口，不能再加一遍。完整链使用前须实际补齐真实缺失土地义务一次；披露或资产计数不能替代面积/时间。 |  |
| dedicated_classification_gate | student_residence_room_day | 本PCR仅适用于学校或大学附属学生宿舍中，为学生分配、配备家具的自炊私人单人卧室。每个服务时段均须核实实际学生住宿用途以及宿舍与学校的隶属关系。暑期访客、会议参加者、工人住宿和其他居住用途均是独立产出，即使复用同一房间也不得计入本参考流。学生住宿资格不能替代真实接收交接和持续独占进入、可用状态的证据。整套公寓、共享睡眠房、家庭房和含餐生产路线不属于所选单房路线。 专属范围资格和真实履约交接必须同时有证据。其他分类及不兼容配置不得计入N_target，但全部真实其他消费者、空闲义务和完整寿命负荷须保留于相应资源池。资格未知即阻断使用，不作零。 | unsd-cpc3-residential |

## 6. 过程清单结构

### 过程映射

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| residence_operation | 持续分配单人房居住住宿及实际公共支持 | required | 真实初次接收私人房间交接及持续履约排他可用/进入/就绪 | 连续居住可用性与真实任务/周转/维修/布草/离宿/学期/假期/轮班期间 | student_residence_room_day |

一个整合住宿节点拥有真实房间/公共责任及任务批次。cp_residence 在提取目标之前枚举每项预期居住、访客/会议、租户和附属输出/交接及每个公共非住户用户。可用材料、残余和废物分开。失败房间/布草/任务状态保留原 ID 和真实重清洁/修理/再部署/外转/待定/废弃路径，不形成新已接受输出。共享自炊电器仍属住宿责任；真实独立现场生产应用前须按 actual_package_route 完成已复核路线/模块/节点扩展。

### 过程：持续分配单人房居住住宿及实际公共支持 (`residence_operation`)

#### 输入

##### 产品流

###### 实际使用点交流电 (`electricity_ac`)

仅适用于实际跨越本节点边界、且未由完整供应商数据覆盖的交流电。该身份未特指供应方、电压、发电组合或交付线损归属，仍须按要求采集。经核实的电力流以1 MJ电能为基准，其ILCD属性名称为净热值；原生kWh按精确的3.6 MJ/kWh换算，不能套用燃料热值系数。直流电或其他不匹配电力状态保留在余项要求中。

- 选定流：交流电 `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- 绑定：`fixed`
- 流属性/单位：Energy / kWh
- 数量规则：采用 cp_utilities，真实排他归属的兼容原生数量仅除一次正值同范围 N_target；已按参考流不再除，N_target=0 保留且不除
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_utilities`
- 范围证据需求：真实仪表/区间或同区间平均功率/时间、房间住户边界、完整竞争用户与必要资源池责任。

###### 实际外购交付的有效热量 (`purchased_useful_heat_delivered_heat`)

仅记录有证据能量基准、实际跨越本节点边界交付的有效热量。保留供回状态、温度品位、覆盖范围及实际损失责任。通用热能身份不预设天然气、蒸汽质量、锅炉效率或温度；制冷、燃料能量及缺少蒸汽转能量证据的情形不使用该身份。

- 选定流：热能 `4f19a302-7b3b-11dd-ad8b-0800200c9a66`
- 绑定：`fixed`
- 流属性/单位：Energy / MJ
- 数量规则：采用 cp_utilities，真实排他归属的兼容原生数量仅除一次正值同范围 N_target；已按参考流不再除，N_target=0 保留且不除
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_utilities`
- 范围证据需求：真实有效交付数量/原生单位、状态/温度/参考方法及供应商损失/能源/资产覆盖，完整用户驱动。

###### 实际液态处理自来水供给 (`water_supply_liquid_tap`)

仅在实际来源确为处理后的自来水且用于所声明用途时适用。保留实际供应方、水质、温度状态和供应边界，不假定所有供水都是自来水。冰、瓶装矿泉水、再生水、未经处理的水及环境直接取水保留各自实际身份。沿用原卡原生质量或体积基准；最终换算为质量参考量时须有实际相容密度和状态证据，不能把目录中的次要体积关系作为默认现场密度。

- 选定流：自来水 `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- 绑定：`fixed`
- 流属性/单位：Volume / m3
- 数量规则：采用 cp_utilities，真实排他归属的兼容原生数量仅除一次正值同范围 N_target；已按参考流不再除，N_target=0 保留且不除
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_utilities`
- 范围证据需求：真实水源/供应商/表计区间/原生量、冷热水/用途及全用户责任，独立采集去向。

###### 实际独立记录的合成洗涤剂投入 (`operating_materials_synthetic_detergent`)

仅适用于产品配方、供应状态及用途记录确认的实际合成表面活性洗涤剂。记录扣除包装皮重的材料净量，区分浓缩液与稀释水，整体配方与组分不得相加重复计入。肥皂、消毒剂、抹布、滤材等仍按各自实际身份记录，不预设清洁配方、剂量或发生。

- 选定流：洗涤剂 `1c57d123-df57-49ab-b9d4-957403beb8a5`
- 绑定：`fixed`
- 流属性/单位：Mass / kg
- 数量规则：采用 cp_supplies，真实排他归属的兼容原生数量仅除一次正值同范围 N_target；已按参考流不再除，N_target=0 保留且不除
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_supplies`
- 范围证据需求：真实SKU/组成/用途/排除容器皮重后的材料库存，实际EACH/TOTAL及单件/密度因子、匹配未使用退货和包装制造覆盖；入库净质量未扣出库退货。

###### 真实已完成运营商布草洗衣服务 (`laundry_service`)

以有支持干纺织品处理量或真实兼容原生供应商结果计实际完成服务，不是新纺织品或湿载荷。真实洗/干/整理/能源/水/化学品/污水/完整资产/运输/租赁覆盖，或真实缺失补充一次。

- 选定流：真实已完成运营商布草洗衣服务
- 流属性/单位：Mass / kg
- 数量规则：采用 cp_linen，真实排他归属的兼容原生数量仅除一次正值同范围 N_target；已按参考流不再除，N_target=0 保留且不除
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_linen`
- 范围证据需求：真实批次/纺织品/房间分配链接，干/调湿/湿定义、样品/调湿与转换来源、重洗和完整全部客户覆盖；不用kg/夜或默认百分数。

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 实际交付的学生宿舍独占单人房居住位日 (`student_residence_room_day`)

按 physical_residential_delivery 和 fulfilled_place_days 的真实已建立住户私人房间服务：一份已接收单卧室分配，在实际履约时间持续可用/进入就绪/排他。符合条件离宿可计；初次未接收付费未到、关闭、退房或重派不可计。持续换房保留一份输出和两段资源。

- Selected flow: 实际交付的学生宿舍独占单人房居住位日
- 流属性/单位：Count / Item(s)
- 数量规则：1 Item(s)
- 数值来源模式：`fixed_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_residence`
- 范围证据需求：真实私人单卧室/场址/配置；住户分配与初次交接接收；可用就绪/排他保留/进入；有来源当地服务日/真实时间/夏令时；离宿、关闭/退房/替代/终止/撤销及完整套餐/全用户责任。

##### 废物流

###### 实际单独收集的废润滑油 (`independent_maintenance_waste_used_lubricating_oil`)

仅适用于实际经使用受污染、独立收集并转移的石油基或合成润滑油。保留实际组成、含水或污染状态及接收方。新油、食用油、制冷剂、水性废水和仍滞留滤材或设备中的残余不使用该身份，不预设再生或处置路线。

- 选定流：废润滑油 `55d93375-7f04-4166-b2a2-88ce929051a5`
- 绑定：`fixed`
- 流属性/单位：Mass / kg
- 数量规则：采用 cp_fates，真实排他归属的兼容原生数量仅除一次正值同范围 N_target；已按参考流不再除，N_target=0 保留且不除
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_fates`
- 范围证据需求：真实来源任务/SKU/原生净量/组成/需要时密度温度、接收方覆盖与整物/部件/混合物不可相加排除链接。

##### 基本流

###### 实际有独立证据的向空气排放化石二氧化碳 (`direct_species_co2_fossil_air`)

仅在实际证据确认化石来源、二氧化碳物种和向空气直接释放时适用。保留报告的碳或CO2基准，碳转CO2须独立有证据的化学计量，不预设系数或发生。 本卡仅记录本节点实际直接释放，不重复计入外购电力上游或供应商已覆盖排放。UUID表示未细分子介质的空气排放，其他实际子介质或来源仍须在余项中匹配，不能改标；缺失数据不等于零。

- 选定流：二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 绑定：`fixed`
- 流属性/单位：Mass / kg
- 数量规则：采用 cp_species，真实排他归属的兼容原生数量仅除一次正值同范围 N_target；已按参考流不再除，N_target=0 保留且不除
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_species`
- 范围证据需求：精确物质/基准/颗粒/介质及独立实测原生量，或兼容真实活动-因子及每个操作数原生元数据；组成/去向/气体状态仅需一次，供应商排重。

###### 实际有独立证据的向空气排放化石甲烷 (`direct_species_methane_fossil_air`)

仅在实际证据确认化石来源、甲烷物种和向空气直接释放时适用。生物源或来源未知甲烷仍在余项要求中，不得改标化石源；不预设泄漏发生、气体比例、数量或排放系数。 本卡仅记录本节点实际直接释放，不重复计入外购电力上游或供应商已覆盖排放。UUID表示未细分子介质的空气排放，其他实际子介质或来源仍须在余项中匹配，不能改标；缺失数据不等于零。

- 选定流：甲烷 (化石源) `08a91e70-3ddc-11dd-9610-0050c2490048`
- 绑定：`fixed`
- 流属性/单位：Mass / kg
- 数量规则：采用 cp_species，真实排他归属的兼容原生数量仅除一次正值同范围 N_target；已按参考流不再除，N_target=0 保留且不除
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_species`
- 范围证据需求：精确物质/基准/颗粒/介质及独立实测原生量，或兼容真实活动-因子及每个操作数原生元数据；组成/去向/气体状态仅需一次，供应商排重。

###### 实际有独立证据的向空气排放氧化亚氮 (`direct_species_nitrous_oxide_air`)

仅在实际证据确认氧化亚氮物种及向空气直接释放时适用。原生数量为N2O质量，不是氮质量或氮气质量，不预设排放系数或发生。 本卡仅记录本节点实际直接释放，不重复计入外购电力上游或供应商已覆盖排放。UUID表示未细分子介质的空气排放，其他实际子介质或来源仍须在余项中匹配，不能改标；缺失数据不等于零。

- 选定流：一氧化二氮 `08a91e70-3ddc-11dd-94c3-0050c2490048`
- 绑定：`fixed`
- 流属性/单位：Mass / kg
- 数量规则：采用 cp_species，真实排他归属的兼容原生数量仅除一次正值同范围 N_target；已按参考流不再除，N_target=0 保留且不除
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_species`
- 范围证据需求：精确物质/基准/颗粒/介质及独立实测原生量，或兼容真实活动-因子及每个操作数原生元数据；组成/去向/气体状态仅需一次，供应商排重。

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `delivered_resident_scope` | 全部住宿资源 | 只有 physical_residential_delivery 下 fulfilled_place_days 才能进入 N_target。住户用途、账单、名义容量或访客入住夜不能替代实际交付房间位时间。同范围物理输出与完整责任必需。 |  |
| `complete_output_set` | 目标及其他消费者 | 枚举全部真实分配居住、访客/会议、租户和其他物理服务输出与交接及原生量/配置/时间。非住户厨房/公共/用餐用户实际存在时仍是共享资源消费者。预期住宿/附属输出不同于可用材料、残余和废物。不把房间及其包含床位重复输出，不默认住户=访客夜，不按费用/收入/雇员学生身份分配，不自动给回收收益。各资源优先实际直接追踪，或有证据的兼容完整物理驱动。 |  |
| `physical_pool_closure` | 全部资源 | 优先真实直接任务/仪表追踪，或按该资源范围兼容原生量*target_driver/正值完整 all_consumer_driver。枚举全部真实分配住户、其他房间/访客/会议/附属/租户及公共设施非住户用户和期间。必要同资源池空闲、待机、封房、失败/取消/未到义务先进入资源总量，再归属真实产出责任。名义容量、仅列空闲记录或删停业日不能使负荷无主。跨期结转须有来源、接收期和最终解决链接；责任未决阻断完整包。目标归属总量只除一次严格同范围正值 N_target；已按参考流不再除；N_target=0 保留原生资源不除。 |  |
| `complete_asset_life` | 资产、纺织品及供应商 | 将 complete_life 与 actual_asset_equivalent 用于完整全用户真实已观察及有来源剩余寿命或实际终止寿命，完整场址/建筑/装修/家具/纺织品制造安装维护更换寿命终结一次。日历/空闲与生产使用驱动责任须兼容；真实缺失阶段必须完成，不是只披露。 |  |
| `material_stock_choice` | 独立供应的运营物料 | S=归属期初+入库外部收货的原料净质量（仅扣容器皮重，尚未扣任何出库退货）-含保留回收物的期末。必须二选一：gross 方式以 S/N_target 作为输入并将真实匹配未使用外退/N_target 单列输出；或 consumed-only 方式以 (S-matched_unused_return)/N_target 为输入且省略该匹配退货输出。不得把退货加到输入、重复扣减、以无关量净抵或自动给避免制造收益。内部循环不是新外部供给；已使用物仍保留原供给负荷。 |  |
| `fluid_provenance_fates` | 制冷剂供应、回收及出口 | 按 actual_fluid_ledger 记录排他真实来源、安装/储存状态与出口。只有未使用同来源供给退货可用匹配 consumed-only 扣减/省略。已使用回收外转保留原制造负荷，不是新未使用液体，不自动给收益。 |  |
| `failed_and_reworked_routes` | 房间、布草及支持事件 | 识别真实未就绪/封闭/失败房间或布草状态及起始任务/期间。记录真实重清洁、修理、退回/再部署、可用外转、保留待定或废弃路径。重洗/重清洁资源保留一次，不增加已接受房间日或新纺织品采购。未决未交付时间不能进入 N_target；必要失败/空闲资源保留在责任池。仅拒绝清洁不取消实际交付。已退房间供他人用是另一真实输出，不是原住户继续保留离宿。 |  |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_residence | residence_operation | student_residence_room_day and all physical service denominators | 真实单人房分配交付、可用性及全用户台账 | record_id; source_record_links; property_id; operator_id; case_id; reporting_period; resource_pool_id; physical_scope_id; all_consumer_records; attribution_owner; provider_coverage; overlap_exclusion; raw_converted_attributed_perreference_state; event_start; event_end; time_zone; UTC_offset_start; UTC_offset_end; DST_resolution; time_source; uncertainty; sensitivity; update_trigger; target_driver; target_driver_unit; target_driver_basis; target_driver_method; target_driver_state; target_driver_sample_time; target_driver_source; all_consumer_driver; all_consumer_driver_unit; all_consumer_driver_basis; all_consumer_driver_method; all_consumer_driver_state; all_consumer_driver_sample_time; all_consumer_driver_source; native_conversion_factor; native_conversion_factor_unit; native_conversion_factor_basis; native_conversion_factor_method; native_conversion_factor_state; native_conversion_factor_sample_time; native_conversion_factor_source; N_target; N_target_unit; N_target_basis; N_target_method; N_target_state; N_target_sample_time; N_target_source; fulfilled_place_time; fulfilled_place_time_unit; fulfilled_place_time_basis; fulfilled_place_time_method; fulfilled_place_time_state; fulfilled_place_time_sample_time; fulfilled_place_time_source; local_service_day_duration; local_service_day_duration_unit; local_service_day_duration_basis; local_service_day_duration_method; local_service_day_duration_state; local_service_day_duration_sample_time; local_service_day_duration_source; fulfilled_room_days; fulfilled_room_days_unit; fulfilled_room_days_basis; fulfilled_room_days_method; fulfilled_room_days_state; fulfilled_room_days_sample_time; fulfilled_room_days_source; occupied_resident_nights; occupied_resident_nights_unit; occupied_resident_nights_basis; occupied_resident_nights_method; occupied_resident_nights_state; occupied_resident_nights_sample_time; occupied_resident_nights_source; actual_resident_count; actual_resident_count_unit; actual_resident_count_basis; actual_resident_count_method; actual_resident_count_state; actual_resident_count_sample_time; actual_resident_count_source; room_area; room_area_unit; room_area_basis; room_area_method; room_area_state; room_area_sample_time; room_area_source; actual_assignment_duration; actual_assignment_duration_unit; actual_assignment_duration_basis; actual_assignment_duration_method; actual_assignment_duration_state; actual_assignment_duration_sample_time; actual_assignment_duration_source; competing_output_quantity; competing_output_quantity_unit; competing_output_quantity_basis; competing_output_quantity_method; competing_output_quantity_state; competing_output_quantity_sample_time; competing_output_quantity_source; room_id; building_id; configuration_version; configuration_effective_start; configuration_effective_end; actual_plan_source; single_private_bedroom_evidence; resident_id; resident_purpose_source; assignment_id; assignment_effective_start; assignment_effective_end; initial_handover_id; initial_handover_time; actual_resident_receipt_source; entry_key_access_source; exclusive_room_retention_source; actual_operability_readiness_source; actual_service_obligation_source; temporary_absence_start; temporary_absence_end; retained_access_absence_source; actual_closure_unavailability_intervals; actual_room_release_repurpose_source; cancellation_termination_keyreturn_records; delivered_assignment_service_day_id; local_service_day_definition; local_service_day_source; move_segment_ids; move_reversal_links; physical_fulfillment_source; complimentary_status; cleaning_declined_source; all_actual_other_consumers; all_intended_output_ids; output_handoff_records; necessary_idle_failure_pool_evidence; carry_source_record; carry_receiving_period; carry_final_resolution | 检查真实房间平面/单卧室配置，将住户分配链接至已接收交接、钥匙/进入、房间就绪和服务义务记录。将真实开始结束/偏移/夏令时、离宿、关闭、退房、替代房和终止撤销记录连接为不重叠住户时间片。执行 assigned_room_reference 和 fulfilled_place_days，真实换房保留同一持续服务ID及两房资源段。枚举其他每项预期输出交接与公共用户及原生量/驱动。按 physical_pool_closure；交接/进入/状态/时间未知阻断履约。 | Item(s)真实单住户私人房位日；独立原生房位时间、当地日时长、入住夜、面积和其他产出单位 | 每项真实分配/状态/任务/批次/仪表/库存/生命周期事件及服务区间 | 真实服务日/离宿/学期/假期/轮班/任务/报告/库存/全寿命阶段；来源/结转/接收/最终解决链接 | 真实私人房间/场址；全部真实住户/访客/会议/租户/公共非住户用户；真实供应商/接收方 | 每参考流 | 每个独立原生操作数单位/基准/方法/状态/样品时间/来源及范围/校准/覆盖/不确定性；未知/不兼容物理数据阻断最终使用 |
| cp_utilities | residence_operation | electricity; purchased_useful_heat; water_supply | 真实对齐仪表与有效公用事业交付 | record_id; source_record_links; property_id; operator_id; case_id; reporting_period; resource_pool_id; physical_scope_id; all_consumer_records; attribution_owner; provider_coverage; overlap_exclusion; raw_converted_attributed_perreference_state; event_start; event_end; time_zone; UTC_offset_start; UTC_offset_end; DST_resolution; time_source; uncertainty; sensitivity; update_trigger; target_driver; target_driver_unit; target_driver_basis; target_driver_method; target_driver_state; target_driver_sample_time; target_driver_source; all_consumer_driver; all_consumer_driver_unit; all_consumer_driver_basis; all_consumer_driver_method; all_consumer_driver_state; all_consumer_driver_sample_time; all_consumer_driver_source; native_conversion_factor; native_conversion_factor_unit; native_conversion_factor_basis; native_conversion_factor_method; native_conversion_factor_state; native_conversion_factor_sample_time; native_conversion_factor_source; N_target; N_target_unit; N_target_basis; N_target_method; N_target_state; N_target_sample_time; N_target_source; register_start; register_start_unit; register_start_basis; register_start_method; register_start_state; register_start_sample_time; register_start_source; register_end; register_end_unit; register_end_basis; register_end_method; register_end_state; register_end_sample_time; register_end_source; register_adjustment; register_adjustment_unit; register_adjustment_basis; register_adjustment_method; register_adjustment_state; register_adjustment_sample_time; register_adjustment_source; meter_multiplier; meter_multiplier_unit; meter_multiplier_basis; meter_multiplier_method; meter_multiplier_state; meter_multiplier_sample_time; meter_multiplier_source; interval_quantity; interval_quantity_unit; interval_quantity_basis; interval_quantity_method; interval_quantity_state; interval_quantity_sample_time; interval_quantity_source; interval_average_power; interval_average_power_unit; interval_average_power_basis; interval_average_power_method; interval_average_power_state; interval_average_power_sample_time; interval_average_power_source; elapsed_duration; elapsed_duration_unit; elapsed_duration_basis; elapsed_duration_method; elapsed_duration_state; elapsed_duration_sample_time; elapsed_duration_source; density; density_unit; density_basis; density_method; density_state; density_sample_time; density_source; density_temperature; density_temperature_unit; density_temperature_basis; density_temperature_method; density_temperature_state; density_temperature_sample_time; density_temperature_source; thermal_delivery_temperature; thermal_delivery_temperature_unit; thermal_delivery_temperature_basis; thermal_delivery_temperature_method; thermal_delivery_temperature_state; thermal_delivery_temperature_sample_time; thermal_delivery_temperature_source; utility_identity; source_or_provider_id; meter_id; meter_interval; calibration_source; valid_version; reset_rollover_source; already_applied_factor; residence_room_shared_lighting_HVAC_scope; room_outlet_scope; bathroom_hotwater_scope; resident_kitchen_appliance_scope; useful_thermal_delivery_gate; provider_loss_asset_scope; flow_row_id; actual_identity_case; actual_substance_or_material; actual_origin_and_medium; actual_state_and_gate; case_activation_evidence; typed_or_residual_quantity; quantity_exclusion_links; whole_total_reconciliation; unresolved_occurrence_not_zero | 读取真实兼容起止表计、复位/回卷证据、仪表因子或实际区间总量，不并用。已积分kWh不再乘时间。只有同区间平均功率含实际循环/待机及有来源时长转换才可替代。采集私人房、公共厨房/卫浴/洗衣/暖通/支持边界及完整兼容其他用户。独立记录真实购入有效热冷交付状态及供应商损失/资产范围，与底层载能体分开；供水不是污水。执行 actual_utility 和 physical_pool_closure。 | 原生kWh/MJ或真实有效热单位、供水m3及独立原生转换/物理驱动 | 每项真实分配/状态/任务/批次/仪表/库存/生命周期事件及服务区间 | 真实服务日/离宿/学期/假期/轮班/任务/报告/库存/全寿命阶段；来源/结转/接收/最终解决链接 | 真实私人房间/场址；全部真实住户/访客/会议/租户/公共非住户用户；真实供应商/接收方 | 每参考流 | 每个独立原生操作数单位/基准/方法/状态/样品时间/来源及范围/校准/覆盖/不确定性；未知/不兼容物理数据阻断最终使用 |
| cp_supplies | residence_operation | operating_materials; actual_fuels; unused_supply_returns | 真实原生材料和燃料库存 | record_id; source_record_links; property_id; operator_id; case_id; reporting_period; resource_pool_id; physical_scope_id; all_consumer_records; attribution_owner; provider_coverage; overlap_exclusion; raw_converted_attributed_perreference_state; event_start; event_end; time_zone; UTC_offset_start; UTC_offset_end; DST_resolution; time_source; uncertainty; sensitivity; update_trigger; target_driver; target_driver_unit; target_driver_basis; target_driver_method; target_driver_state; target_driver_sample_time; target_driver_source; all_consumer_driver; all_consumer_driver_unit; all_consumer_driver_basis; all_consumer_driver_method; all_consumer_driver_state; all_consumer_driver_sample_time; all_consumer_driver_source; native_conversion_factor; native_conversion_factor_unit; native_conversion_factor_basis; native_conversion_factor_method; native_conversion_factor_state; native_conversion_factor_sample_time; native_conversion_factor_source; N_target; N_target_unit; N_target_basis; N_target_method; N_target_state; N_target_sample_time; N_target_source; opening; opening_unit; opening_basis; opening_method; opening_state; opening_sample_time; opening_source; receipt_gross; receipt_gross_unit; receipt_gross_basis; receipt_gross_method; receipt_gross_state; receipt_gross_sample_time; receipt_gross_source; container_tare; container_tare_unit; container_tare_basis; container_tare_method; container_tare_state; container_tare_sample_time; container_tare_source; net_external_receipts; net_external_receipts_unit; net_external_receipts_basis; net_external_receipts_method; net_external_receipts_state; net_external_receipts_sample_time; net_external_receipts_source; closing_including_recovery; closing_including_recovery_unit; closing_including_recovery_basis; closing_including_recovery_method; closing_including_recovery_state; closing_including_recovery_sample_time; closing_including_recovery_source; matched_unused_return; matched_unused_return_unit; matched_unused_return_basis; matched_unused_return_method; matched_unused_return_state; matched_unused_return_sample_time; matched_unused_return_source; material_used; material_used_unit; material_used_basis; material_used_method; material_used_state; material_used_sample_time; material_used_source; fuel_burn; fuel_burn_unit; fuel_burn_basis; fuel_burn_method; fuel_burn_state; fuel_burn_sample_time; fuel_burn_source; per_item_mass; per_item_mass_unit; per_item_mass_basis; per_item_mass_method; per_item_mass_state; per_item_mass_sample_time; per_item_mass_source; item_count; item_count_unit; item_count_basis; item_count_method; item_count_state; item_count_sample_time; item_count_source; density; density_unit; density_basis; density_method; density_state; density_sample_time; density_source; density_temperature; density_temperature_unit; density_temperature_basis; density_temperature_method; density_temperature_state; density_temperature_sample_time; density_temperature_source; composition_fraction; composition_fraction_unit; composition_fraction_basis; composition_fraction_method; composition_fraction_state; composition_fraction_sample_time; composition_fraction_source; material_SKU; formulation_identity; material_use; stock_scope; EACH_TOTAL_extent; actual_recipe_source_if_used; concentrate_prepared_solution_nonadditive_view; unused_return_input_match; return_receiver; stock_convention; internal_transfer_ids; provider_included_supplies_scope; flow_row_id; actual_identity_case; actual_substance_or_material; actual_origin_and_medium; actual_state_and_gate; case_activation_evidence; typed_or_residual_quantity; quantity_exclusion_links; whole_total_reconciliation; unresolved_occurrence_not_zero | 按每种真实SKU/配方/用途记录期初、入库原料净质量、含保留回收物期末、实际用量/燃烧和同状态未使用匹配退货。入库仅扣容器皮重，尚未扣任何出库退货；EACH/TOTAL、密度温度与计数转质量须真实兼容来源。成品溶液与浓缩物/水/组分不可相加，供应商已覆盖供给不重复。执行 actual_supply_stock 和 physical_pool_closure，不推燃料设备或等级。 | 真实原生材料/燃料质量体积计数及适用比例；kg仅通过有支持转换 | 每项真实分配/状态/任务/批次/仪表/库存/生命周期事件及服务区间 | 真实服务日/离宿/学期/假期/轮班/任务/报告/库存/全寿命阶段；来源/结转/接收/最终解决链接 | 真实私人房间/场址；全部真实住户/访客/会议/租户/公共非住户用户；真实供应商/接收方 | 每参考流 | 每个独立原生操作数单位/基准/方法/状态/样品时间/来源及范围/校准/覆盖/不确定性；未知/不兼容物理数据阻断最终使用 |
| cp_linen | residence_operation | laundry_service | 真实完成洗衣批次及纺织品状态 | record_id; source_record_links; property_id; operator_id; case_id; reporting_period; resource_pool_id; physical_scope_id; all_consumer_records; attribution_owner; provider_coverage; overlap_exclusion; raw_converted_attributed_perreference_state; event_start; event_end; time_zone; UTC_offset_start; UTC_offset_end; DST_resolution; time_source; uncertainty; sensitivity; update_trigger; target_driver; target_driver_unit; target_driver_basis; target_driver_method; target_driver_state; target_driver_sample_time; target_driver_source; all_consumer_driver; all_consumer_driver_unit; all_consumer_driver_basis; all_consumer_driver_method; all_consumer_driver_state; all_consumer_driver_sample_time; all_consumer_driver_source; native_conversion_factor; native_conversion_factor_unit; native_conversion_factor_basis; native_conversion_factor_method; native_conversion_factor_state; native_conversion_factor_sample_time; native_conversion_factor_source; N_target; N_target_unit; N_target_basis; N_target_method; N_target_state; N_target_sample_time; N_target_source; dry_textile_mass_processed; dry_textile_mass_processed_unit; dry_textile_mass_processed_basis; dry_textile_mass_processed_method; dry_textile_mass_processed_state; dry_textile_mass_processed_sample_time; dry_textile_mass_processed_source; conditioned_textile_mass; conditioned_textile_mass_unit; conditioned_textile_mass_basis; conditioned_textile_mass_method; conditioned_textile_mass_state; conditioned_textile_mass_sample_time; conditioned_textile_mass_source; wet_cargo_mass; wet_cargo_mass_unit; wet_cargo_mass_basis; wet_cargo_mass_method; wet_cargo_mass_state; wet_cargo_mass_sample_time; wet_cargo_mass_source; container_tare; container_tare_unit; container_tare_basis; container_tare_method; container_tare_state; container_tare_sample_time; container_tare_source; water_mass; water_mass_unit; water_mass_basis; water_mass_method; water_mass_state; water_mass_sample_time; water_mass_source; as_received_sample_mass; as_received_sample_mass_unit; as_received_sample_mass_basis; as_received_sample_mass_method; as_received_sample_mass_state; as_received_sample_mass_sample_time; as_received_sample_mass_source; wet_water_fraction; wet_water_fraction_unit; wet_water_fraction_basis; wet_water_fraction_method; wet_water_fraction_state; wet_water_fraction_sample_time; wet_water_fraction_source; dry_water_ratio; dry_water_ratio_unit; dry_water_ratio_basis; dry_water_ratio_method; dry_water_ratio_state; dry_water_ratio_sample_time; dry_water_ratio_source; percent_to_ratio_factor; percent_to_ratio_factor_unit; percent_to_ratio_factor_basis; percent_to_ratio_factor_method; percent_to_ratio_factor_state; percent_to_ratio_factor_sample_time; percent_to_ratio_factor_source; rewash_quantity; rewash_quantity_unit; rewash_quantity_basis; rewash_quantity_method; rewash_quantity_state; rewash_quantity_sample_time; rewash_quantity_source; returned_textile_quantity; returned_textile_quantity_unit; returned_textile_quantity_basis; returned_textile_quantity_method; returned_textile_quantity_state; returned_textile_quantity_sample_time; returned_textile_quantity_source; unresolved_linen_difference; unresolved_linen_difference_unit; unresolved_linen_difference_basis; unresolved_linen_difference_method; unresolved_linen_difference_state; unresolved_linen_difference_sample_time; unresolved_linen_difference_source; linen_pool_id; textile_item_ids; provider_id; batch_id; task_id; transfer_id; served_room_stay_links; dry_mass_definition; sample_id; conditioning_method; sample_population; water_only_definition_source; other_volatile_soil_exclusion; wash_dry_finish_scope; energy_water_chemicals_effluent_scope; rental_textile_asset_freight_treatment_scope; complete_all_client_records; completed_missing_duty_links; rewash_parent_event | 将真实已完成运营商布草供应商批次链接至分配/任务/纺织品、服务范围及全部客户。测量有支持真实干处理量或兼容原生服务结果；转换前采集湿/调湿/干定义及真实水/其他挥发物/污物样品证据。重洗/失败资源保留，不加房间日。记录洗干整理/资源/污水/运输/设备/租赁寿命覆盖及排他已完成缺失阶段。住户自助洗衣是不同真实公共设备/公用事业使用。执行 actual_linen_basis 和 physical_pool_closure；独立工业洗衣需已复核扩展。 | 真实干纺织品kg或有支持供应商原生单位；独立湿/调湿/样品/运输状态 | 每项真实分配/状态/任务/批次/仪表/库存/生命周期事件及服务区间 | 真实服务日/离宿/学期/假期/轮班/任务/报告/库存/全寿命阶段；来源/结转/接收/最终解决链接 | 真实私人房间/场址；全部真实住户/访客/会议/租户/公共非住户用户；真实供应商/接收方 | 每参考流 | 每个独立原生操作数单位/基准/方法/状态/样品时间/来源及范围/校准/覆盖/不确定性；未知/不兼容物理数据阻断最终使用 |
| cp_assets | residence_operation | linen_lifetime; building_room_assets; usable_asset_exports; retired_linen; retired_equipment; site_land_occupation; site_land_transformation | 完整全用户资产与生命周期事件 | record_id; source_record_links; property_id; operator_id; case_id; reporting_period; resource_pool_id; physical_scope_id; all_consumer_records; attribution_owner; provider_coverage; overlap_exclusion; raw_converted_attributed_perreference_state; event_start; event_end; time_zone; UTC_offset_start; UTC_offset_end; DST_resolution; time_source; uncertainty; sensitivity; update_trigger; target_driver; target_driver_unit; target_driver_basis; target_driver_method; target_driver_state; target_driver_sample_time; target_driver_source; all_consumer_driver; all_consumer_driver_unit; all_consumer_driver_basis; all_consumer_driver_method; all_consumer_driver_state; all_consumer_driver_sample_time; all_consumer_driver_source; native_conversion_factor; native_conversion_factor_unit; native_conversion_factor_basis; native_conversion_factor_method; native_conversion_factor_state; native_conversion_factor_sample_time; native_conversion_factor_source; N_target; N_target_unit; N_target_basis; N_target_method; N_target_state; N_target_sample_time; N_target_source; asset_native_quantity; asset_native_quantity_unit; asset_native_quantity_basis; asset_native_quantity_method; asset_native_quantity_state; asset_native_quantity_sample_time; asset_native_quantity_source; component_native_quantity; component_native_quantity_unit; component_native_quantity_basis; component_native_quantity_method; component_native_quantity_state; component_native_quantity_sample_time; component_native_quantity_source; job_used_driver; job_used_driver_unit; job_used_driver_basis; job_used_driver_method; job_used_driver_state; job_used_driver_sample_time; job_used_driver_source; observed_life_driver; observed_life_driver_unit; observed_life_driver_basis; observed_life_driver_method; observed_life_driver_state; observed_life_driver_sample_time; observed_life_driver_source; remaining_life_driver; remaining_life_driver_unit; remaining_life_driver_basis; remaining_life_driver_method; remaining_life_driver_state; remaining_life_driver_sample_time; remaining_life_driver_source; lifetime_all_user_driver; lifetime_all_user_driver_unit; lifetime_all_user_driver_basis; lifetime_all_user_driver_method; lifetime_all_user_driver_state; lifetime_all_user_driver_sample_time; lifetime_all_user_driver_source; driver_equivalence_factor; driver_equivalence_factor_unit; driver_equivalence_factor_basis; driver_equivalence_factor_method; driver_equivalence_factor_state; driver_equivalence_factor_sample_time; driver_equivalence_factor_source; retirement_net_mass; retirement_net_mass_unit; retirement_net_mass_basis; retirement_net_mass_method; retirement_net_mass_state; retirement_net_mass_sample_time; retirement_net_mass_source; usable_transfer_net_mass; usable_transfer_net_mass_unit; usable_transfer_net_mass_basis; usable_transfer_net_mass_method; usable_transfer_net_mass_state; usable_transfer_net_mass_sample_time; usable_transfer_net_mass_source; retained_component_quantity; retained_component_quantity_unit; retained_component_quantity_basis; retained_component_quantity_method; retained_component_quantity_state; retained_component_quantity_sample_time; retained_component_quantity_source; asset_id; component_id; asset_BOM_source; bed_mattress_locker_equipment_role; actual_room_bed_membership; manufacture_install_scope; maintenance_replacement_event_ids; EOL_scope; all_user_all_period_records; observed_history_source; remaining_life_source; actual_termination_source; idle_responsibility_in_numerators; equivalence_method_source; provider_rental_overlap; usable_or_waste_receiver; remaining_life_transfer_owner; whole_component_nonadditive_links; already_covered_EOL_transport_treatment; carry_source_record; carry_receiving_period; carry_final_resolution; site_occupied_area; site_occupied_area_unit; site_occupied_area_basis; site_occupied_area_method; site_occupied_area_state; site_occupied_area_sample_time; site_occupied_area_source; site_occupation_duration; site_occupation_duration_unit; site_occupation_duration_basis; site_occupation_duration_method; site_occupation_duration_state; site_occupation_duration_sample_time; site_occupation_duration_source; site_occupation_area_time; site_occupation_area_time_unit; site_occupation_area_time_basis; site_occupation_area_time_method; site_occupation_area_time_state; site_occupation_area_time_sample_time; site_occupation_area_time_source; land_transformation_area; land_transformation_area_unit; land_transformation_area_basis; land_transformation_area_method; land_transformation_area_state; land_transformation_area_sample_time; land_transformation_area_source; land_location; occupation_start; occupation_end; occupation_time_convention_source; land_state_source; transformation_from_state; transformation_to_state; transformation_date; historical_or_new_transformation_evidence; land_interface_id; land_lifecycle_stage; land_responsibility_owner; land_provider_asset_sameinterface_exclusion; land_missing_stage_completed_link; land_applicability_unknown_status | 按整物/部件/事件谱系盘点真实场址/建筑/装修、床床垫家具/公共设备及供给纺织品。采集真实原生量、有支持量纲等效、真实该次使用及全用户已观察+有来源兼容剩余寿命或真实终止。链接制造安装维护更换寿命终结、真实接收方、空闲期间与剩余寿命责任人。整部件视图和租赁已覆盖纺织阶段不可相加。执行 complete_life、actual_asset_equivalent 与 physical_pool_closure；年度N不是寿命。采集真实原生占用面积/时间及独立有证据历史/新增转化前后/日期/面积、阶段/责任人/位置/来源，与供应商/资产匹配同土地接口。执行 actual_land_interfaces，不推栖息地/土壤/因子，不把土地转Count。 | 真实原生资产/部件/等效/使用寿命驱动、实际外转/废物单位；真实原生土地面积/时间/面积时间，不是Count | 每项真实分配/状态/任务/批次/仪表/库存/生命周期事件及服务区间 | 真实服务日/离宿/学期/假期/轮班/任务/报告/库存/全寿命阶段；来源/结转/接收/最终解决链接 | 真实私人房间/场址；全部真实住户/访客/会议/租户/公共非住户用户；真实供应商/接收方 | 每参考流 | 每个独立原生操作数单位/基准/方法/状态/样品时间/来源及范围/校准/覆盖/不确定性；未知/不兼容物理数据阻断最终使用 |
| cp_tasks | residence_operation | operating tasks and bed/linen dispositions | 真实连续任务及周转/重清洁事件 | record_id; source_record_links; property_id; operator_id; case_id; reporting_period; resource_pool_id; physical_scope_id; all_consumer_records; attribution_owner; provider_coverage; overlap_exclusion; raw_converted_attributed_perreference_state; event_start; event_end; time_zone; UTC_offset_start; UTC_offset_end; DST_resolution; time_source; uncertainty; sensitivity; update_trigger; target_driver; target_driver_unit; target_driver_basis; target_driver_method; target_driver_state; target_driver_sample_time; target_driver_source; all_consumer_driver; all_consumer_driver_unit; all_consumer_driver_basis; all_consumer_driver_method; all_consumer_driver_state; all_consumer_driver_sample_time; all_consumer_driver_source; native_conversion_factor; native_conversion_factor_unit; native_conversion_factor_basis; native_conversion_factor_method; native_conversion_factor_state; native_conversion_factor_sample_time; native_conversion_factor_source; N_target; N_target_unit; N_target_basis; N_target_method; N_target_state; N_target_sample_time; N_target_source; performed_task_quantity; performed_task_quantity_unit; performed_task_quantity_basis; performed_task_quantity_method; performed_task_quantity_state; performed_task_quantity_sample_time; performed_task_quantity_source; task_duration; task_duration_unit; task_duration_basis; task_duration_method; task_duration_state; task_duration_sample_time; task_duration_source; cleaned_area; cleaned_area_unit; cleaned_area_basis; cleaned_area_method; cleaned_area_state; cleaned_area_sample_time; cleaned_area_source; actual_repeat_count; actual_repeat_count_unit; actual_repeat_count_basis; actual_repeat_count_method; actual_repeat_count_state; actual_repeat_count_sample_time; actual_repeat_count_source; served_room_days; served_room_days_unit; served_room_days_basis; served_room_days_method; served_room_days_state; served_room_days_sample_time; served_room_days_source; reclean_material_quantity; reclean_material_quantity_unit; reclean_material_quantity_basis; reclean_material_quantity_method; reclean_material_quantity_state; reclean_material_quantity_sample_time; reclean_material_quantity_source; task_id; task_kind; original_task_id; batch_or_continuous_interval; room_assignment_event_links; scheduled_performed_declined_failed_status; offspec_room_linen_state; actual_reclean_repair_redeploy_return_discard_decision; receiver_or_next_use_link; provider_direct_scope | 按原事件和分配/期间采集真实房间/公共出入就绪、清洁周转/维修/布草任务。区分要求/已做/拒绝/失败/重复状态及真实重清洁/修理/再部署/可用转移/待定/废弃路径。连续居住包含实际学期/假期/轮班/离宿阶段，不设通用清洁频率。失败工作保留负荷不产已接受输出；仅拒清洁不撤销真实交付。按 failed_and_reworked_routes 和 physical_pool_closure。 | 真实任务/结果原生单位及实际物理驱动 | 每项真实分配/状态/任务/批次/仪表/库存/生命周期事件及服务区间 | 真实服务日/离宿/学期/假期/轮班/任务/报告/库存/全寿命阶段；来源/结转/接收/最终解决链接 | 真实私人房间/场址；全部真实住户/访客/会议/租户/公共非住户用户；真实供应商/接收方 | 每参考流 | 每个独立原生操作数单位/基准/方法/状态/样品时间/来源及范围/校准/覆盖/不确定性；未知/不兼容物理数据阻断最终使用 |
| cp_providers | residence_operation | contracted_support; included_ancillary_service | 已完成物理供应商及包含附属责任 | record_id; source_record_links; property_id; operator_id; case_id; reporting_period; resource_pool_id; physical_scope_id; all_consumer_records; attribution_owner; provider_coverage; overlap_exclusion; raw_converted_attributed_perreference_state; event_start; event_end; time_zone; UTC_offset_start; UTC_offset_end; DST_resolution; time_source; uncertainty; sensitivity; update_trigger; target_driver; target_driver_unit; target_driver_basis; target_driver_method; target_driver_state; target_driver_sample_time; target_driver_source; all_consumer_driver; all_consumer_driver_unit; all_consumer_driver_basis; all_consumer_driver_method; all_consumer_driver_state; all_consumer_driver_sample_time; all_consumer_driver_source; native_conversion_factor; native_conversion_factor_unit; native_conversion_factor_basis; native_conversion_factor_method; native_conversion_factor_state; native_conversion_factor_sample_time; native_conversion_factor_source; N_target; N_target_unit; N_target_basis; N_target_method; N_target_state; N_target_sample_time; N_target_source; actual_native_service_quantity; actual_native_service_quantity_unit; actual_native_service_quantity_basis; actual_native_service_quantity_method; actual_native_service_quantity_state; actual_native_service_quantity_sample_time; actual_native_service_quantity_source; physical_equivalence_factor; physical_equivalence_factor_unit; physical_equivalence_factor_basis; physical_equivalence_factor_method; physical_equivalence_factor_state; physical_equivalence_factor_sample_time; physical_equivalence_factor_source; completed_missing_quantity; completed_missing_quantity_unit; completed_missing_quantity_basis; completed_missing_quantity_method; completed_missing_quantity_state; completed_missing_quantity_sample_time; completed_missing_quantity_source; actual_meal_quantity; actual_meal_quantity_unit; actual_meal_quantity_basis; actual_meal_quantity_method; actual_meal_quantity_state; actual_meal_quantity_sample_time; actual_meal_quantity_source; actual_activity_quantity; actual_activity_quantity_unit; actual_activity_quantity_basis; actual_activity_quantity_method; actual_activity_quantity_state; actual_activity_quantity_sample_time; actual_activity_quantity_source; unused_included_service_obligation; unused_included_service_obligation_unit; unused_included_service_obligation_basis; unused_included_service_obligation_method; unused_included_service_obligation_state; unused_included_service_obligation_sample_time; unused_included_service_obligation_source; provider_id; contract_package_id; actual_completed_task_ids; actual_package_inclusion_source; physical_native_unit_definition; quality_and_service_scope; actual_use_availability_obligation_basis; included_meal_ingredient_cooking_waste_coverage; included_activity_transport_asset_scope; materials_energy_water_assets_freight_receiver_matrix; complete_all_client_records; raw_already_converted_attributed_state; operator_direct_overlap; missing_stage_ids; completed_integration_dataset_link; integration_time; integration_time_zone; integration_source; integration_owner; integration_coverage_once; reviewed_kitchen_route_if_direct | 取得真实已交付物理支持/附属量、原生单位/质量/等效及合同/包含/服务记录。为材料、能源水、资产、残余、运输与最终处理建真实全客户覆盖/责任矩阵；每项义务排他匹配完整供应商或实际完成缺失底层阶段。费用/工资/福利/标签不是数量。执行 actual_provider_service 和 actual_package_route；真实自营食物/运输/转换/工业洗衣须先完成已复核路线/模块/节点扩展。 | 真实已完成服务原生质量/数量/等效和独立原生驱动 | 每项真实分配/状态/任务/批次/仪表/库存/生命周期事件及服务区间 | 真实服务日/离宿/学期/假期/轮班/任务/报告/库存/全寿命阶段；来源/结转/接收/最终解决链接 | 真实私人房间/场址；全部真实住户/访客/会议/租户/公共非住户用户；真实供应商/接收方 | 每参考流 | 每个独立原生操作数单位/基准/方法/状态/样品时间/来源及范围/校准/覆盖/不确定性；未知/不兼容物理数据阻断最终使用 |
| cp_refrigerants | residence_operation | refrigerant_supply; recovered_fluid_exports; contained_refrigerant_waste | 排他真实制冷剂来源库存和去向角色 | record_id; source_record_links; property_id; operator_id; case_id; reporting_period; resource_pool_id; physical_scope_id; all_consumer_records; attribution_owner; provider_coverage; overlap_exclusion; raw_converted_attributed_perreference_state; event_start; event_end; time_zone; UTC_offset_start; UTC_offset_end; DST_resolution; time_source; uncertainty; sensitivity; update_trigger; target_driver; target_driver_unit; target_driver_basis; target_driver_method; target_driver_state; target_driver_sample_time; target_driver_source; all_consumer_driver; all_consumer_driver_unit; all_consumer_driver_basis; all_consumer_driver_method; all_consumer_driver_state; all_consumer_driver_sample_time; all_consumer_driver_source; native_conversion_factor; native_conversion_factor_unit; native_conversion_factor_basis; native_conversion_factor_method; native_conversion_factor_state; native_conversion_factor_sample_time; native_conversion_factor_source; N_target; N_target_unit; N_target_basis; N_target_method; N_target_state; N_target_sample_time; N_target_source; opening_installed; opening_installed_unit; opening_installed_basis; opening_installed_method; opening_installed_state; opening_installed_sample_time; opening_installed_source; opening_stored_total; opening_stored_total_unit; opening_stored_total_basis; opening_stored_total_method; opening_stored_total_state; opening_stored_total_sample_time; opening_stored_total_source; new_factory_charge_entry; new_factory_charge_entry_unit; new_factory_charge_entry_basis; new_factory_charge_entry_method; new_factory_charge_entry_state; new_factory_charge_entry_sample_time; new_factory_charge_entry_source; net_standalone_receipts; net_standalone_receipts_unit; net_standalone_receipts_basis; net_standalone_receipts_method; net_standalone_receipts_state; net_standalone_receipts_sample_time; net_standalone_receipts_source; other_external_receipts; other_external_receipts_unit; other_external_receipts_basis; other_external_receipts_method; other_external_receipts_state; other_external_receipts_sample_time; other_external_receipts_source; closing_installed; closing_installed_unit; closing_installed_basis; closing_installed_method; closing_installed_state; closing_installed_sample_time; closing_installed_source; closing_stored_total; closing_stored_total_unit; closing_stored_total_basis; closing_stored_total_method; closing_stored_total_state; closing_stored_total_sample_time; closing_stored_total_source; unused_external_returns; unused_external_returns_unit; unused_external_returns_basis; unused_external_returns_method; unused_external_returns_state; unused_external_returns_sample_time; unused_external_returns_source; used_usable_export; used_usable_export_unit; used_usable_export_basis; used_usable_export_method; used_usable_export_state; used_usable_export_sample_time; used_usable_export_source; contained_waste_export; contained_waste_export_unit; contained_waste_export_basis; contained_waste_export_method; contained_waste_export_state; contained_waste_export_sample_time; contained_waste_export_source; retained_equipment_exit; retained_equipment_exit_unit; retained_equipment_exit_basis; retained_equipment_exit_method; retained_equipment_exit_state; retained_equipment_exit_sample_time; retained_equipment_exit_source; independently_evidenced_direct_release; independently_evidenced_direct_release_unit; independently_evidenced_direct_release_basis; independently_evidenced_direct_release_method; independently_evidenced_direct_release_state; independently_evidenced_direct_release_sample_time; independently_evidenced_direct_release_source; explicit_unknown; explicit_unknown_unit; explicit_unknown_basis; explicit_unknown_method; explicit_unknown_state; explicit_unknown_sample_time; explicit_unknown_source; opening_unused; opening_unused_unit; opening_unused_basis; opening_unused_method; opening_unused_state; opening_unused_sample_time; opening_unused_source; closing_unused; closing_unused_unit; closing_unused_basis; closing_unused_method; closing_unused_state; closing_unused_sample_time; closing_unused_source; retained_recovery_nonadditive; retained_recovery_nonadditive_unit; retained_recovery_nonadditive_basis; retained_recovery_nonadditive_method; retained_recovery_nonadditive_state; retained_recovery_nonadditive_sample_time; retained_recovery_nonadditive_source; blend_component_fraction; blend_component_fraction_unit; blend_component_fraction_basis; blend_component_fraction_method; blend_component_fraction_state; blend_component_fraction_sample_time; blend_component_fraction_source; system_id; chemical_or_blend_identity; composition_basis_source; lot_charge_role_ids; exclusive_stock_membership; factory_entry_opening_receipt_exclusion; other_receipt_exit_exclusion_ids; initial_charge_production_owner; unused_same_source_state_substock_evidence; matched_unused_return_id; used_recovery_transfer_ids; actual_used_export_state_source; internal_charge_recovery_ids; receiver_and_useful_acceptance; whole_part_mixed_content_exclusion; transport_treatment_provider_scope | 识别实际化学品/混合物及排他来源充注谱系。采集已安装/储存期初期末（保留回收物已在储存总量）、尚未含期初的出厂进入、仅扣皮重且未扣任何出库退货的独立/其他入库、匹配未使用退货、真实已使用可用外转、独立废物/设备保留出口及独立实测释放；未解释差额保留未知。记录实际接收方/状态/覆盖。执行 actual_fluid_ledger、需要时 actual_species_amount 和 physical_pool_closure；补充/回收不是泄漏测量。 | 真实化学品/混合物净质量及独立组分/状态 | 每项真实分配/状态/任务/批次/仪表/库存/生命周期事件及服务区间 | 真实服务日/离宿/学期/假期/轮班/任务/报告/库存/全寿命阶段；来源/结转/接收/最终解决链接 | 真实私人房间/场址；全部真实住户/访客/会议/租户/公共非住户用户；真实供应商/接收方 | 每参考流 | 每个独立原生操作数单位/基准/方法/状态/样品时间/来源及范围/校准/覆盖/不确定性；未知/不兼容物理数据阻断最终使用 |
| cp_freight | residence_operation | freight | 排他真实带包装载荷路段及其自身份额 | record_id; source_record_links; property_id; operator_id; case_id; reporting_period; resource_pool_id; physical_scope_id; all_consumer_records; attribution_owner; provider_coverage; overlap_exclusion; raw_converted_attributed_perreference_state; event_start; event_end; time_zone; UTC_offset_start; UTC_offset_end; DST_resolution; time_source; uncertainty; sensitivity; update_trigger; target_driver; target_driver_unit; target_driver_basis; target_driver_method; target_driver_state; target_driver_sample_time; target_driver_source; all_consumer_driver; all_consumer_driver_unit; all_consumer_driver_basis; all_consumer_driver_method; all_consumer_driver_state; all_consumer_driver_sample_time; all_consumer_driver_source; native_conversion_factor; native_conversion_factor_unit; native_conversion_factor_basis; native_conversion_factor_method; native_conversion_factor_state; native_conversion_factor_sample_time; native_conversion_factor_source; N_target; N_target_unit; N_target_basis; N_target_method; N_target_state; N_target_sample_time; N_target_source; payload; payload_unit; payload_basis; payload_method; payload_state; payload_sample_time; payload_source; vehicle_gross; vehicle_gross_unit; vehicle_gross_basis; vehicle_gross_method; vehicle_gross_state; vehicle_gross_sample_time; vehicle_gross_source; vehicle_noncargo_tare; vehicle_noncargo_tare_unit; vehicle_noncargo_tare_basis; vehicle_noncargo_tare_method; vehicle_noncargo_tare_state; vehicle_noncargo_tare_sample_time; vehicle_noncargo_tare_source; distance; distance_unit; distance_basis; distance_method; distance_state; distance_sample_time; distance_source; repeat_count; repeat_count_unit; repeat_count_basis; repeat_count_method; repeat_count_state; repeat_count_sample_time; repeat_count_source; payload_conversion; payload_conversion_unit; payload_conversion_basis; payload_conversion_method; payload_conversion_state; payload_conversion_sample_time; payload_conversion_source; gross_conversion; gross_conversion_unit; gross_conversion_basis; gross_conversion_method; gross_conversion_state; gross_conversion_sample_time; gross_conversion_source; tare_conversion; tare_conversion_unit; tare_conversion_basis; tare_conversion_method; tare_conversion_state; tare_conversion_sample_time; tare_conversion_source; distance_conversion; distance_conversion_unit; distance_conversion_basis; distance_conversion_method; distance_conversion_state; distance_conversion_sample_time; distance_conversion_source; that_record_target_driver; that_record_target_driver_unit; that_record_target_driver_basis; that_record_target_driver_method; that_record_target_driver_state; that_record_target_driver_sample_time; that_record_target_driver_source; that_record_all_consumer_driver; that_record_all_consumer_driver_unit; that_record_all_consumer_driver_basis; that_record_all_consumer_driver_method; that_record_all_consumer_driver_state; that_record_all_consumer_driver_sample_time; that_record_all_consumer_driver_source; that_record_share; that_record_share_unit; that_record_share_basis; that_record_share_method; that_record_share_state; that_record_share_sample_time; that_record_share_source; load_id; leg_id; unique_load_leg_key; EACH_TOTAL_extent; cargo_item_ids; actual_wet_dry_state; carried_pack_support_scope; noncargo_tare_definition_source; provider_laundry_upstream_receiver_overlap; actual_empty_return_coverage | 测每个真实唯一带包装载荷路段，含湿内容物/包装/支撑物；直接载荷或兼容总车重减仅车辆非货物皮重。取得实际距离/原生因子、EACH重复/TOTAL及求和内该记录目标与完整全用户物理驱动来源。追踪供应商/洗衣/接收方/空返覆盖，保留失败责任。执行 actual_record_freight 和 physical_pool_closure。住户普通出行在货运之外；真实包含运输仍属 actual_package_route 责任。 | 真实带包装载荷原生质量、距离、次数与运输功及该记录份额 | 每项真实分配/状态/任务/批次/仪表/库存/生命周期事件及服务区间 | 真实服务日/离宿/学期/假期/轮班/任务/报告/库存/全寿命阶段；来源/结转/接收/最终解决链接 | 真实私人房间/场址；全部真实住户/访客/会议/租户/公共非住户用户；真实供应商/接收方 | 每参考流 | 每个独立原生操作数单位/基准/方法/状态/样品时间/来源及范围/校准/覆盖/不确定性；未知/不兼容物理数据阻断最终使用 |
| cp_fates | residence_operation | residence_solid_waste; spent_cleanup_mixture; independent_maintenance_waste | 真实不同材料接收方及真实混合视图 | record_id; source_record_links; property_id; operator_id; case_id; reporting_period; resource_pool_id; physical_scope_id; all_consumer_records; attribution_owner; provider_coverage; overlap_exclusion; raw_converted_attributed_perreference_state; event_start; event_end; time_zone; UTC_offset_start; UTC_offset_end; DST_resolution; time_source; uncertainty; sensitivity; update_trigger; target_driver; target_driver_unit; target_driver_basis; target_driver_method; target_driver_state; target_driver_sample_time; target_driver_source; all_consumer_driver; all_consumer_driver_unit; all_consumer_driver_basis; all_consumer_driver_method; all_consumer_driver_state; all_consumer_driver_sample_time; all_consumer_driver_source; native_conversion_factor; native_conversion_factor_unit; native_conversion_factor_basis; native_conversion_factor_method; native_conversion_factor_state; native_conversion_factor_sample_time; native_conversion_factor_source; N_target; N_target_unit; N_target_basis; N_target_method; N_target_state; N_target_sample_time; N_target_source; received_net_quantity; received_net_quantity_unit; received_net_quantity_basis; received_net_quantity_method; received_net_quantity_state; received_net_quantity_sample_time; received_net_quantity_source; whole_mixture_mass; whole_mixture_mass_unit; whole_mixture_mass_basis; whole_mixture_mass_method; whole_mixture_mass_state; whole_mixture_mass_sample_time; whole_mixture_mass_source; carrier_mass; carrier_mass_unit; carrier_mass_basis; carrier_mass_method; carrier_mass_state; carrier_mass_sample_time; carrier_mass_source; absorbed_liquid_mass; absorbed_liquid_mass_unit; absorbed_liquid_mass_basis; absorbed_liquid_mass_method; absorbed_liquid_mass_state; absorbed_liquid_mass_sample_time; absorbed_liquid_mass_source; captured_fragment_mass; captured_fragment_mass_unit; captured_fragment_mass_basis; captured_fragment_mass_method; captured_fragment_mass_state; captured_fragment_mass_sample_time; captured_fragment_mass_source; component_quantity; component_quantity_unit; component_quantity_basis; component_quantity_method; component_quantity_state; component_quantity_sample_time; component_quantity_source; density; density_unit; density_basis; density_method; density_state; density_sample_time; density_source; density_temperature; density_temperature_unit; density_temperature_basis; density_temperature_method; density_temperature_state; density_temperature_sample_time; density_temperature_source; composition_fraction; composition_fraction_unit; composition_fraction_basis; composition_fraction_method; composition_fraction_state; composition_fraction_sample_time; composition_fraction_source; actual_stream_id; origin_resident_operator_provider; source_item_asset_event; actual_material_identity; receiver_id; receiver_status_source; collection_responsibility; separate_stream_or_true_mixture; mixture_membership_source; whole_component_nonadditive_links; contained_free_liquid_exclusion; retained_asset_content_exclusion; provider_EOL_transport_treatment_coverage; actual_usable_acceptance_source; flow_row_id; actual_identity_case; actual_substance_or_material; actual_origin_and_medium; actual_state_and_gate; case_activation_evidence; typed_or_residual_quantity; quantity_exclusion_links; whole_total_reconciliation; unresolved_occurrence_not_zero | 按起始任务/材料/状态及接收方采集真实每种不同接收物流、原生净量、真实混合物/组分归属及接受/处理/运输责任人。真正整混合物与审计组分不可相加；设备保留或吸附液不是另一独立出口。实际有住户来源处理责任时仍保留，不引入全部个人商品制造。执行 actual_received_streams 和 physical_pool_closure；去向未知不是零或推断排放。 | 各真实接收材料/混合物/组分独立原生质量/体积/计数 | 每项真实分配/状态/任务/批次/仪表/库存/生命周期事件及服务区间 | 真实服务日/离宿/学期/假期/轮班/任务/报告/库存/全寿命阶段；来源/结转/接收/最终解决链接 | 真实私人房间/场址；全部真实住户/访客/会议/租户/公共非住户用户；真实供应商/接收方 | 每参考流 | 每个独立原生操作数单位/基准/方法/状态/样品时间/来源及范围/校准/覆盖/不确定性；未知/不兼容物理数据阻断最终使用 |
| cp_waterstate | residence_operation | water_withdrawal; contained_wastewater; direct_water_outfall | 实际水源、封闭接收方与直接界面 | record_id; source_record_links; property_id; operator_id; case_id; reporting_period; resource_pool_id; physical_scope_id; all_consumer_records; attribution_owner; provider_coverage; overlap_exclusion; raw_converted_attributed_perreference_state; event_start; event_end; time_zone; UTC_offset_start; UTC_offset_end; DST_resolution; time_source; uncertainty; sensitivity; update_trigger; target_driver; target_driver_unit; target_driver_basis; target_driver_method; target_driver_state; target_driver_sample_time; target_driver_source; all_consumer_driver; all_consumer_driver_unit; all_consumer_driver_basis; all_consumer_driver_method; all_consumer_driver_state; all_consumer_driver_sample_time; all_consumer_driver_source; native_conversion_factor; native_conversion_factor_unit; native_conversion_factor_basis; native_conversion_factor_method; native_conversion_factor_state; native_conversion_factor_sample_time; native_conversion_factor_source; N_target; N_target_unit; N_target_basis; N_target_method; N_target_state; N_target_sample_time; N_target_source; withdrawal_volume; withdrawal_volume_unit; withdrawal_volume_basis; withdrawal_volume_method; withdrawal_volume_state; withdrawal_volume_sample_time; withdrawal_volume_source; contained_receiver_volume; contained_receiver_volume_unit; contained_receiver_volume_basis; contained_receiver_volume_method; contained_receiver_volume_state; contained_receiver_volume_sample_time; contained_receiver_volume_source; direct_outfall_volume; direct_outfall_volume_unit; direct_outfall_volume_basis; direct_outfall_volume_method; direct_outfall_volume_state; direct_outfall_volume_sample_time; direct_outfall_volume_source; water_supply_volume; water_supply_volume_unit; water_supply_volume_basis; water_supply_volume_method; water_supply_volume_state; water_supply_volume_sample_time; water_supply_volume_source; retained_water_mass; retained_water_mass_unit; retained_water_mass_basis; retained_water_mass_method; retained_water_mass_state; retained_water_mass_sample_time; retained_water_mass_source; density; density_unit; density_basis; density_method; density_state; density_sample_time; density_source; density_temperature; density_temperature_unit; density_temperature_basis; density_temperature_method; density_temperature_state; density_temperature_sample_time; density_temperature_source; component_quantity; component_quantity_unit; component_quantity_basis; component_quantity_method; component_quantity_state; component_quantity_sample_time; component_quantity_source; opening_water_stock; opening_water_stock_unit; opening_water_stock_basis; opening_water_stock_method; opening_water_stock_state; opening_water_stock_sample_time; opening_water_stock_source; closing_water_stock; closing_water_stock_unit; closing_water_stock_basis; closing_water_stock_method; closing_water_stock_state; closing_water_stock_sample_time; closing_water_stock_source; water_source_identity; source_location; meter_interval; receiver_id; contained_or_direct; actual_receiving_medium; actual_stream_composition_source; sample_id; free_liquid_vs_absorbed_scope; provider_laundry_effluent_overlap; transport_treatment_owner; unknown_water_balance_status | 独立采集来源特定取水或供水，以及真实封闭污水/液体接收方、直接环境排口、材料/库存保留水和独立有证据空气水蒸气质量。各原生体积/质量、仅需转换时密度温度、组成、位置介质、表计/样品/时间及处理责任人有来源。不以水账单减未知差额推去向。按 actual_received_streams、水蒸气 actual_species_amount 和 physical_pool_closure；供应商污水不重复。 | 真实独立水源/接收方体积、原生质量及需要时密度温度 | 每项真实分配/状态/任务/批次/仪表/库存/生命周期事件及服务区间 | 真实服务日/离宿/学期/假期/轮班/任务/报告/库存/全寿命阶段；来源/结转/接收/最终解决链接 | 真实私人房间/场址；全部真实住户/访客/会议/租户/公共非住户用户；真实供应商/接收方 | 每参考流 | 每个独立原生操作数单位/基准/方法/状态/样品时间/来源及范围/校准/覆盖/不确定性；未知/不兼容物理数据阻断最终使用 |
| cp_species | residence_operation | direct_species | 真实精确物质与接收介质测量 | record_id; source_record_links; property_id; operator_id; case_id; reporting_period; resource_pool_id; physical_scope_id; all_consumer_records; attribution_owner; provider_coverage; overlap_exclusion; raw_converted_attributed_perreference_state; event_start; event_end; time_zone; UTC_offset_start; UTC_offset_end; DST_resolution; time_source; uncertainty; sensitivity; update_trigger; target_driver; target_driver_unit; target_driver_basis; target_driver_method; target_driver_state; target_driver_sample_time; target_driver_source; all_consumer_driver; all_consumer_driver_unit; all_consumer_driver_basis; all_consumer_driver_method; all_consumer_driver_state; all_consumer_driver_sample_time; all_consumer_driver_source; native_conversion_factor; native_conversion_factor_unit; native_conversion_factor_basis; native_conversion_factor_method; native_conversion_factor_state; native_conversion_factor_sample_time; native_conversion_factor_source; N_target; N_target_unit; N_target_basis; N_target_method; N_target_state; N_target_sample_time; N_target_source; measured_species_quantity; measured_species_quantity_unit; measured_species_quantity_basis; measured_species_quantity_method; measured_species_quantity_state; measured_species_quantity_sample_time; measured_species_quantity_source; actual_activity; actual_activity_unit; actual_activity_basis; actual_activity_method; actual_activity_state; actual_activity_sample_time; actual_activity_source; species_factor; species_factor_unit; species_factor_basis; species_factor_method; species_factor_state; species_factor_sample_time; species_factor_source; composition_fraction; composition_fraction_unit; composition_fraction_basis; composition_fraction_method; composition_fraction_state; composition_fraction_sample_time; composition_fraction_source; fate_fraction; fate_fraction_unit; fate_fraction_basis; fate_fraction_method; fate_fraction_state; fate_fraction_sample_time; fate_fraction_source; gas_conversion_factor; gas_conversion_factor_unit; gas_conversion_factor_basis; gas_conversion_factor_method; gas_conversion_factor_state; gas_conversion_factor_sample_time; gas_conversion_factor_source; gas_temperature; gas_temperature_unit; gas_temperature_basis; gas_temperature_method; gas_temperature_state; gas_temperature_sample_time; gas_temperature_source; gas_pressure; gas_pressure_unit; gas_pressure_basis; gas_pressure_method; gas_pressure_state; gas_pressure_sample_time; gas_pressure_source; measured_water_vapour_mass; measured_water_vapour_mass_unit; measured_water_vapour_mass_basis; measured_water_vapour_mass_method; measured_water_vapour_mass_state; measured_water_vapour_mass_sample_time; measured_water_vapour_mass_source; event_id; actual_source_operation; exact_species_or_particle_identity; reported_substance_basis; receiving_medium; location; factor_coverage_source; composition_basis_source; fate_method_source; contained_capture_exclusion; provider_asset_release_overlap; unknown_residual_status; flow_row_id; actual_identity_case; actual_substance_or_material; actual_origin_and_medium; actual_state_and_gate; case_activation_evidence; typed_or_residual_quantity; quantity_exclusion_links; whole_total_reconciliation; unresolved_occurrence_not_zero | 采集独立实测精确化学品/混合组分/颗粒质量与介质，或真实兼容活动和有来源因子，物质基准/范围/组成去向及需要的气体温度压力转换各自有证据。采集每个原生操作数元数据、释放位置时间及捕集/供应商排重；释放混合物不必等于供给组成。执行 actual_species_amount 和 physical_pool_closure；采购/气味/补充/差额/缺测既不证明发生也不证明零。 | 真实精确物质原生质量及独立活动/因子/组成/去向/气体状态单位 | 每项真实分配/状态/任务/批次/仪表/库存/生命周期事件及服务区间 | 真实服务日/离宿/学期/假期/轮班/任务/报告/库存/全寿命阶段；来源/结转/接收/最终解决链接 | 真实私人房间/场址；全部真实住户/访客/会议/租户/公共非住户用户；真实供应商/接收方 | 每参考流 | 每个独立原生操作数单位/基准/方法/状态/样品时间/来源及范围/校准/覆盖/不确定性；未知/不兼容物理数据阻断最终使用 |

### 计算规则

| rule_id | 适用对象 | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `fulfilled_place_days` | student_residence_room_day | N_target=SUM(unique compatible resident-assignment-service-day:actual fulfilled exclusive operable room-place elapsed time/source-backed matching service-day duration)。按 physical_residential_delivery 保留原生兼容区间/时长单位及真实当地日惯例。初次交接/进入/就绪/排他、关闭/退房和真实换房/撤销台账决定履约。同一住户时间片只计一次；不用费用/月/学期换算或默认24小时。 | cp_residence | 实际交付单人房居住位日 N_target |  |
| `actual_resource_pool` | 全部服务行 | 执行 physical_pool_closure：优先真实直接追踪，否则对该资源范围采用兼容 raw_quantity*target_driver/positive_complete_all_consumer_driver；保留必要空闲/失败/取消责任及真实结转/N0最终解决。随后只除一次严格同范围正值 N_target，已按参考流不再除。 | cp_residence; cp_utilities; cp_tasks; cp_providers | 真实排他归属的每参考流数量 |  |
| `actual_utility` | electricity; purchased_useful_heat; water_supply; electricity_ac; purchased_useful_heat_delivered_heat; water_supply_liquid_tap | 真实公用事业量采用兼容 (register_end-register_start+register_adjustment)*meter_multiplier*native_conversion_factor 或 interval_quantity*native_conversion_factor，不能并用。已应用因子不再乘。真实区间平均功率*匹配 elapsed_duration 仅在尚未积分且转换兼容时使用，不默认铭牌。购入有效热交付与底层载能体/资产分开。完整真实用户归属后只除一次正值同范围 N_target。 | cp_utilities; cp_residence | 每居住位日真实公用事业供给 |  |
| `actual_supply_stock` | operating_materials; actual_fuels; unused_supply_returns; operating_materials_synthetic_detergent | S=归属期初+入库外部收货的原料净质量（仅扣容器皮重，尚未扣任何出库退货）-含保留回收物的期末。必须二选一：gross 方式以 S/N_target 作为输入并将真实匹配未使用外退/N_target 单列输出；或 consumed-only 方式以 (S-matched_unused_return)/N_target 为输入且省略该匹配退货输出。不得把退货加到输入、重复扣减、以无关量净抵或自动给避免制造收益。内部循环不是新外部供给；已使用物仍保留原供给负荷。 保留回收物已含期末；真实燃烧、废物和材料用量独立核对，不等同采购。 | cp_supplies; cp_residence | 排他的供给/未使用退货表示 |  |
| `actual_linen_basis` | laundry_service; linen_lifetime; freight | laundry_service 为真实完成干纺织品处理量或有支持的真实原生服务结果，含有证据的重洗一次。对同样品仅水定义 w_wet=water_mass/as_received_sample_mass、r_dry=water_mass/nonwater_mass，则 w_wet=r_dry/(1+r_dry)，nonwater_mass=as_received_sample_mass*(1-w_wet)；百分数先用有来源 percent_to_ratio_factor。其他挥发物/污物不等于水或清洁纤维。湿货运不是干服务或新制造。真实供应商寿命/运行/租赁/运输/污水覆盖一次，真实缺失义务实际完成后才使用。 | cp_linen; cp_assets; cp_residence | 实际独立纺织品服务状态及资产证据 |  |
| `actual_asset_equivalent` | linen_lifetime; building_room_assets | 在有支持兼容量纲等效及正值完整 lifetime_all_user_driver 下，asset_equivalent=asset_native_quantity*driver_equivalence_factor*job_used_driver/lifetime_all_user_driver。寿命驱动为兼容 observed_life_driver+有来源 remaining_life_driver 或实际终止总量，覆盖全部用户/期间。真实完整生命周期一次，供应商已覆盖阶段不重复。空闲/日历驱动责任保留在目标分子，年度 N 或名义容量不能充当寿命。完整链使用前完成真实缺失阶段与结转链接；已归属期间/批次等效量仅除一次正值同范围 N_target，已按参考流不再除。 | cp_assets; cp_residence; cp_providers | 每参考流有支持完整寿命资产服务 |  |
| `actual_provider_service` | contracted_support; included_ancillary_service | 真实供应商量=SUM(exclusive actual native quantity*supported physical equivalence only if not already converted*actual compatible documented share only if not already attributed)。须符合 actual_package_route 完整物理责任、原生服务质量与全部客户范围；真实缺失阶段已完成一次。随后只除一次严格同范围正值 N_target，已按参考流不再除。 | cp_providers; cp_tasks; cp_residence | 完整物理供应商和真实附属服务 |  |
| `actual_record_freight` | freight | 每个唯一真实载荷-路段，带包装载荷直接测量，或原生转换后兼容 vehicle_gross-vehicle_noncargo_tare。保留真实湿内容物/包装/支撑物。EACH 乘真实 repeat_count 一次，TOTAL 不变。Assigned_work=SUM(unique load-leg:payload*distance*THAT_record_share)，保持兼容原生功单位，其中该记录份额在求和内部采用真实兼容目标/正值完整全消费者驱动。随后只除一次严格同范围正值 N_target；已归属/已按参考流不重复。真实供应商/洗衣/接收方/空返覆盖与必要失败资源池责任保留。 | cp_freight; cp_residence | 每参考流真实唯一运输功 |  |
| `actual_fluid_ledger` | refrigerant_supply; recovered_fluid_exports; contained_refrigerant_waste | 核对 opening_installed+opening_stored_total+new_factory_charge_entry+net_standalone_receipts+other_external_receipts 与 closing_installed+closing_stored_total+unused_external_returns+used_usable_export+contained_waste_export+retained_equipment_exit+independently_evidenced_direct_release+explicit_unknown。储存总量包含保留回收子库存；回收是不可相加视图，不能再加一份库存。批次/充注/角色 ID 排他；新出厂充注只在不属期初或其他收货时进入，其他收发排除所有已列项，内部充注/回收抵销。出厂充注生产由完整资产或明确缺失阶段补充覆盖一次。consumed-only 扣减/省略只适用于有证据的同来源同状态未使用独立供给子库存及其匹配未使用退货。全部已使用回收液，无论原厂充注或后续补充，都按真实可用外转状态记录，不自动等同未使用新料，不扣减新料制造，不作负输入或自动收益。整机/部件/混合废物保留内容不可相加，不另增液体出口。补充、回收或未解释差额既不能证明直接释放，也不能证明零。net_standalone_receipts 是仅扣容器皮重后的入库原料质量，尚未扣出库未使用退货、已使用回收外转或废物出口。其他外部收货同样仅指入库，并排除所有另列入库项。 | cp_refrigerants; cp_assets; cp_species | 排他真实液体来源库存与去向 |  |
| `actual_received_streams` | 全部接收端接口 | 每种真实不同接收材料/状态/接收方均有自身原生净量/来源。选择真正整混合物或排他组分交换；审计组分不可相加。布中或整设备保留液体不另列自由液体出口。封闭污水/自由液体交接用 Waste；实际环境液体排口用有实际介质的 Elementary；真实向空气水蒸气须 Mass 物质。购水减未知差额不是污水/排口/水蒸气或零。供应商/完整资产寿命终结/运输/处理一次，实际缺失接收方责任明确完成。 | cp_fates; cp_waterstate; cp_assets; cp_providers | 真实互斥 Product Waste Elementary 接口 |  |
| `actual_species_amount` | direct_species; direct_species_co2_fossil_air; direct_species_methane_fossil_air; direct_species_nitrous_oxide_air | Species_quantity=独立实测真实物质数量或兼容 actual_activity*species_factor。每个操作数有原生单位/基准/方法/状态/样品时间/来源和精确报告物质/颗粒/介质。实际组成/去向/气体转换仅在需要且未覆盖时应用；气体温度/压力各自有来源及兼容单位。实际排放混合组成不默认供给组成。不以库存差额/补充/采购/气味证明释放或零。完整资源归属后仅除一次正值同目标 N_target，已按参考流除外；供应商实际释放不重复。 | cp_species; cp_refrigerants; cp_residence | 有证据的每参考流精确原生物质 |  |
| `actual_land_quantities` | site_land_occupation; site_land_transformation | 采用源支持原生面积时间，记录真实唯一兼容占用面积*实际有证据时长，或直接真实面积时间记录，不能并用。仅对有证据的转化前后事件记录真实转化面积。按 actual_land_interfaces 处理全部阶段/全用户责任与同一接口资产/供应商排重，再除一次严格同范围正值 N_target。不把土地数量换成 Count，不推断土地类别。 | cp_assets; cp_residence; cp_providers | 每参考流真实原生土地占用/转化 |  |

### 数据质量要求

| requirement_id | 适用对象 | Requirement | Evidence |
| --- | --- | --- | --- |
| `real_delivery_identity` | student_residence_room_day | 真实初次交接/接收、私人单房、持续真实进入/就绪/排他保留、当地日/时间及全部撤销/移动/关闭/离宿证据必需。身份用途、付费许可或留物本身不是产出证明。 | 实际房间配置、分配、出入/交接及运行状态/来源台账 |
| `native_quantities` | 全部独立数量 | 每个原始数量、分子/分母、重复、转换/等效、密度及温度、活动、因子、组成/去向与时长具有自身单位/基准/方法/状态/样品时间/来源和兼容真实总体/覆盖。未知数据阻断计算，不作零。 | 节点拥有的完整原始协议及可追溯校准/来源/覆盖 |
| `full_scope_closure` | resource pools providers and asset lives | 真实全用户/跨期完整生命周期、必要空闲/失败/N0责任及实际包含义务须闭合。真实缺失阶段须已完成一次，不是计划。供应商/来源/接收方及结转至最终解决缺口阻断完整链使用。 | 真实物理范围/责任人/覆盖矩阵、已观察及有来源剩余寿命、已完成补充、不确定性/敏感性/更新 |
| `range_and_identity_evidence` | 全部流卡 | 不强制通用数值范围。若声称来源区间，须可追溯且物理兼容；经验 QA 护栏需独立可比证据，不以同数据极值自证。最终交换前仍须具体身份/支持核实和实际原生数据。 | 实际场址记录、独立可比接受证据和已核实身份；不编因子或 UUID |
| complete_electricity | residence_operation | 最终使用前，按下方完整采集定义将`electricity`的每项真实情形展开为独立身份交换，完成原生数量、状态、来源、接收方及覆盖证据。缺UUID或数量不能作零；保留固定情形的数量须从余项排除。 | `cp_utilities` |
| complete_purchased_useful_heat | residence_operation | 最终使用前，按下方完整采集定义将`purchased_useful_heat`的每项真实情形展开为独立身份交换，完成原生数量、状态、来源、接收方及覆盖证据。缺UUID或数量不能作零；保留固定情形的数量须从余项排除。 | `cp_utilities` |
| complete_water_supply | residence_operation | 最终使用前，按下方完整采集定义将`water_supply`的每项真实情形展开为独立身份交换，完成原生数量、状态、来源、接收方及覆盖证据。缺UUID或数量不能作零；保留固定情形的数量须从余项排除。 | `cp_utilities` |
| complete_actual_fuels | residence_operation | 最终使用前，按下方完整采集定义将`actual_fuels`的每项真实情形展开为独立身份交换，完成原生数量、状态、来源、接收方及覆盖证据。缺UUID或数量不能作零；保留固定情形的数量须从余项排除。 | `cp_supplies` |
| complete_operating_materials | residence_operation | 最终使用前，按下方完整采集定义将`operating_materials`的每项真实情形展开为独立身份交换，完成原生数量、状态、来源、接收方及覆盖证据。缺UUID或数量不能作零；保留固定情形的数量须从余项排除。 | `cp_supplies` |
| complete_linen_lifetime | residence_operation | 最终使用前，按下方完整采集定义将`linen_lifetime`的每项真实情形展开为独立身份交换，完成原生数量、状态、来源、接收方及覆盖证据。缺UUID或数量不能作零；保留固定情形的数量须从余项排除。 | `cp_assets` |
| complete_building_room_assets | residence_operation | 最终使用前，按下方完整采集定义将`building_room_assets`的每项真实情形展开为独立身份交换，完成原生数量、状态、来源、接收方及覆盖证据。缺UUID或数量不能作零；保留固定情形的数量须从余项排除。 | `cp_assets` |
| complete_contracted_support | residence_operation | 最终使用前，按下方完整采集定义将`contracted_support`的每项真实情形展开为独立身份交换，完成原生数量、状态、来源、接收方及覆盖证据。缺UUID或数量不能作零；保留固定情形的数量须从余项排除。 | `cp_providers` |
| complete_included_ancillary_service | residence_operation | 最终使用前，按下方完整采集定义将`included_ancillary_service`的每项真实情形展开为独立身份交换，完成原生数量、状态、来源、接收方及覆盖证据。缺UUID或数量不能作零；保留固定情形的数量须从余项排除。 | `cp_providers` |
| complete_refrigerant_supply | residence_operation | 最终使用前，按下方完整采集定义将`refrigerant_supply`的每项真实情形展开为独立身份交换，完成原生数量、状态、来源、接收方及覆盖证据。缺UUID或数量不能作零；保留固定情形的数量须从余项排除。 | `cp_refrigerants` |
| complete_freight | residence_operation | 最终使用前，按下方完整采集定义将`freight`的每项真实情形展开为独立身份交换，完成原生数量、状态、来源、接收方及覆盖证据。缺UUID或数量不能作零；保留固定情形的数量须从余项排除。 | `cp_freight` |
| complete_water_withdrawal | residence_operation | 最终使用前，按下方完整采集定义将`water_withdrawal`的每项真实情形展开为独立身份交换，完成原生数量、状态、来源、接收方及覆盖证据。缺UUID或数量不能作零；保留固定情形的数量须从余项排除。 | `cp_waterstate` |
| complete_site_land_occupation | residence_operation | 最终使用前，按下方完整采集定义将`site_land_occupation`的每项真实情形展开为独立身份交换，完成原生数量、状态、来源、接收方及覆盖证据。缺UUID或数量不能作零；保留固定情形的数量须从余项排除。 | `cp_assets` |
| complete_site_land_transformation | residence_operation | 最终使用前，按下方完整采集定义将`site_land_transformation`的每项真实情形展开为独立身份交换，完成原生数量、状态、来源、接收方及覆盖证据。缺UUID或数量不能作零；保留固定情形的数量须从余项排除。 | `cp_assets` |
| complete_unused_supply_returns | residence_operation | 最终使用前，按下方完整采集定义将`unused_supply_returns`的每项真实情形展开为独立身份交换，完成原生数量、状态、来源、接收方及覆盖证据。缺UUID或数量不能作零；保留固定情形的数量须从余项排除。 | `cp_supplies` |
| complete_usable_asset_exports | residence_operation | 最终使用前，按下方完整采集定义将`usable_asset_exports`的每项真实情形展开为独立身份交换，完成原生数量、状态、来源、接收方及覆盖证据。缺UUID或数量不能作零；保留固定情形的数量须从余项排除。 | `cp_assets` |
| complete_recovered_fluid_exports | residence_operation | 最终使用前，按下方完整采集定义将`recovered_fluid_exports`的每项真实情形展开为独立身份交换，完成原生数量、状态、来源、接收方及覆盖证据。缺UUID或数量不能作零；保留固定情形的数量须从余项排除。 | `cp_refrigerants` |
| complete_residence_solid_waste | residence_operation | 最终使用前，按下方完整采集定义将`residence_solid_waste`的每项真实情形展开为独立身份交换，完成原生数量、状态、来源、接收方及覆盖证据。缺UUID或数量不能作零；保留固定情形的数量须从余项排除。 | `cp_fates` |
| complete_spent_cleanup_mixture | residence_operation | 最终使用前，按下方完整采集定义将`spent_cleanup_mixture`的每项真实情形展开为独立身份交换，完成原生数量、状态、来源、接收方及覆盖证据。缺UUID或数量不能作零；保留固定情形的数量须从余项排除。 | `cp_fates` |
| complete_retired_linen | residence_operation | 最终使用前，按下方完整采集定义将`retired_linen`的每项真实情形展开为独立身份交换，完成原生数量、状态、来源、接收方及覆盖证据。缺UUID或数量不能作零；保留固定情形的数量须从余项排除。 | `cp_assets` |
| complete_retired_equipment | residence_operation | 最终使用前，按下方完整采集定义将`retired_equipment`的每项真实情形展开为独立身份交换，完成原生数量、状态、来源、接收方及覆盖证据。缺UUID或数量不能作零；保留固定情形的数量须从余项排除。 | `cp_assets` |
| complete_contained_wastewater | residence_operation | 最终使用前，按下方完整采集定义将`contained_wastewater`的每项真实情形展开为独立身份交换，完成原生数量、状态、来源、接收方及覆盖证据。缺UUID或数量不能作零；保留固定情形的数量须从余项排除。 | `cp_waterstate` |
| complete_independent_maintenance_waste | residence_operation | 最终使用前，按下方完整采集定义将`independent_maintenance_waste`的每项真实情形展开为独立身份交换，完成原生数量、状态、来源、接收方及覆盖证据。缺UUID或数量不能作零；保留固定情形的数量须从余项排除。 | `cp_fates` |
| complete_contained_refrigerant_waste | residence_operation | 最终使用前，按下方完整采集定义将`contained_refrigerant_waste`的每项真实情形展开为独立身份交换，完成原生数量、状态、来源、接收方及覆盖证据。缺UUID或数量不能作零；保留固定情形的数量须从余项排除。 | `cp_refrigerants` |
| complete_direct_water_outfall | residence_operation | 最终使用前，按下方完整采集定义将`direct_water_outfall`的每项真实情形展开为独立身份交换，完成原生数量、状态、来源、接收方及覆盖证据。缺UUID或数量不能作零；保留固定情形的数量须从余项排除。 | `cp_waterstate` |
| complete_direct_species | residence_operation | 最终使用前，按下方完整采集定义将`direct_species`的每项真实情形展开为独立身份交换，完成原生数量、状态、来源、接收方及覆盖证据。缺UUID或数量不能作零；保留固定情形的数量须从余项排除。 | `cp_species` |


### 强制清单完成记录

以下记录是强制物理采集和情形展开要求，不是单条清单交换。原有节点、方向、流类型、数量基准、采集协议、库存去向、供应接收和来源义务全部继续有效。正文对这些编号的引用对应这些完成要求。前景数据集完成前，必须将每项真实物料、服务、资产全寿命、废物流或物种介质分别展开为具原生数量和排他覆盖的独立身份交换。保留固定卡只覆盖其真实受支持情形，其余真实情形须无重叠协调。身份、发生或数量缺失仍待采集，不能填零或删项。内部配对交接和组分审计视图不可相加；必要全寿命与供应商阶段必须实际完成一次。

#### electricity

责任节点与原流角色：residence_operation / inputs / product

真实私人房间和共享照明/暖通、卫浴/热水辅助、自炊厨房电器、住户洗衣/公共/出入/待机责任。在实际供电时住户个人电器能耗仍是房间/公共电量。不按入住夜转电量，不按费用或名义房数分摊；完整供应商已覆盖电量不重复。

本卡为独立身份分支`electricity_ac`之外的余项清单要求。已计入分支的实际数量不再计入本余项交换，原类目总量仅作不可相加的协调审计。其他实际材料、状态、来源或介质仍须保留自身经核实的身份、原生数量及供应接收责任；记录缺失时，不推定条件分支发生、不发生或数量为零。

- 选定流：真实私人房间与共享住宿用电
- 流属性/单位：Energy / kWh
- 数量规则：采用 cp_utilities，真实排他归属的兼容原生数量仅除一次正值同范围 N_target；已按参考流不再除，N_target=0 保留且不除
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_utilities`
- 范围证据需求：真实仪表/区间或同区间平均功率/时间、房间住户边界、完整竞争用户与必要资源池责任。

#### purchased_useful_heat

责任节点与原流角色：residence_operation / inputs / product

条件性计量实际交付状态/供应商边界的有效热服务；不能同时计运行制冷机的电和同一购冷。真实现场独立转换需已复核扩展。

本卡为独立身份分支`purchased_useful_heat_delivered_heat`之外的余项清单要求。已计入分支的实际数量不再计入本余项交换，原类目总量仅作不可相加的协调审计。其他实际材料、状态、来源或介质仍须保留自身经核实的身份、原生数量及供应接收责任；记录缺失时，不推定条件分支发生、不发生或数量为零。

- 选定流：真实外部交付有效热或冷
- 流属性/单位：Energy / MJ
- 数量规则：采用 cp_utilities，真实排他归属的兼容原生数量仅除一次正值同范围 N_target；已按参考流不再除，N_target=0 保留且不除
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_utilities`
- 范围证据需求：真实有效交付数量/原生单位、状态/温度/参考方法及供应商损失/能源/资产覆盖，完整用户驱动。

#### water_supply

责任节点与原流角色：residence_operation / inputs / product

真实住户卫浴、厨房、清洁及声明支持供水，与直接取水和供应商已覆盖洗衣水分开。供水体积不等于污水体积。

本卡为独立身份分支`water_supply_liquid_tap`之外的余项清单要求。已计入分支的实际数量不再计入本余项交换，原类目总量仅作不可相加的协调审计。其他实际材料、状态、来源或介质仍须保留自身经核实的身份、原生数量及供应接收责任；记录缺失时，不推定条件分支发生、不发生或数量为零。

- 选定流：真实购入住宿与共享设施用水
- 流属性/单位：Volume / m3
- 数量规则：采用 cp_utilities，真实排他归属的兼容原生数量仅除一次正值同范围 N_target；已按参考流不再除，N_target=0 保留且不除
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_utilities`
- 范围证据需求：真实水源/供应商/表计区间/原生量、冷热水/用途及全用户责任，独立采集去向。

#### actual_fuels

责任节点与原流角色：residence_operation / inputs / product

仅实际运营且已复核设备/移动责任的真实载能体/等级。不推定发电机、锅炉、住户普通出行或燃料混合；上游燃料一次，燃烧和物质释放独立有证据。

- 选定流：真实住宿支持燃料供给
- 流属性/单位：Mass / kg
- 数量规则：采用 cp_supplies，真实排他归属的兼容原生数量仅除一次正值同范围 N_target；已按参考流不再除，N_target=0 保留且不除
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_supplies`
- 范围证据需求：真实库存/入库/期末/原生等级、实际燃烧和有支持密度温度/状态转换；入库净质量仅扣容器皮重，未扣出库退货。

#### operating_materials

责任节点与原流角色：residence_operation / inputs / product

按真实SKU/配方展开清洁剂、肥皂纸品、擦布/吸附物/过滤物和支持材料；不规定剂量/配方。成品溶液/浓缩物/水/组分视图不可相加。供应商已覆盖投入与耐用布草不重复。

本卡为独立身份分支`operating_materials_synthetic_detergent`之外的余项清单要求。已计入分支的实际数量不再计入本余项交换，原类目总量仅作不可相加的协调审计。其他实际材料、状态、来源或介质仍须保留自身经核实的身份、原生数量及供应接收责任；记录缺失时，不推定条件分支发生、不发生或数量为零。

- 选定流：真实清洁住户用品和支持消耗物
- 流属性/单位：Mass / kg
- 数量规则：采用 cp_supplies，真实排他归属的兼容原生数量仅除一次正值同范围 N_target；已按参考流不再除，N_target=0 保留且不除
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_supplies`
- 范围证据需求：真实SKU/组成/用途/排除容器皮重后的材料库存，实际EACH/TOTAL及单件/密度因子、匹配未使用退货和包装制造覆盖；入库净质量未扣出库退货。

#### linen_lifetime

责任节点与原流角色：residence_operation / inputs / product

仅真实运营商所有或租赁床品/布草/纺织品支持的完整制造、照护、更换和寿命终结责任。住户自有个人床品制造在自炊住宿供给之外，除非实际供给/包含；供给床床垫及真实公用事业/废物义务保留。洗衣不等于新制造；租赁已覆盖制造/寿命不重复。

- 选定流：完整寿命可重复运营商床品和布草服务
- 流属性/单位：Count / Item(s)
- 数量规则：采用 cp_assets，真实排他归属的兼容原生数量仅除一次正值同范围 N_target；已按参考流不再除，N_target=0 保留且不除
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_assets`
- 范围证据需求：真实纺织品身份/材料/原生件数质量/等效、实际使用及已观察+有来源剩余完整寿命/终止/不确定性与覆盖；不默认周期/年数。

#### building_room_assets

责任节点与原流角色：residence_operation / inputs / product

真实场址/土地改造、建筑壳体/装修、卧室床架床垫家具、厨房/卫浴/暖通/热水/洗衣/信息/出入/公共设备与可重复支撑物。制造安装维护更换寿命终结跨实际全部用户/期间，与所有权无关。整物/部件/事件视图不可相加；年度住户N不是寿命。真实土地接口单独按 actual_land_interfaces，Count资产不能替代面积/时间；完整资产/供应商覆盖土地不重复。

- 选定流：完整寿命建筑床架床垫与住宿设备
- 流属性/单位：Count / Item(s)
- 数量规则：采用 cp_assets，真实排他归属的兼容原生数量仅除一次正值同范围 N_target；已按参考流不再除，N_target=0 保留且不除
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_assets`
- 范围证据需求：真实BOM/原生量/属性/等效、房间场址归属、完整全用户已观察+有来源剩余使用/终止及制造安装维护更换寿命终结覆盖；年度N不是寿命。

#### contracted_support

责任节点与原流角色：residence_operation / inputs / product

原生质量/单位下真实已完成清洁、维护、出入/就绪与物理响应，不是工资、许可费、账单或计划任务。完整匹配材料/公用事业/资产/运输/接收方阶段仅替代其真实底层责任一次；运营商布草服务另有证据。

- 选定流：真实物理清洁维护出入和响应服务
- 流属性/单位：Count / Item(s)
- 数量规则：采用 cp_providers，真实排他归属的兼容原生数量仅除一次正值同范围 N_target；已按参考流不再除，N_target=0 保留且不除
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_providers`
- 范围证据需求：真实任务/结果及房间场址分配/期间链接，原生单位/等效，供应商全客户与已覆盖/缺失责任矩阵。

#### included_ancillary_service

责任节点与原流角色：residence_operation / inputs / product

仅真实包含的物理附属义务，按 actual_package_route 完整原生供应商覆盖或排他完成底层缺失阶段。真实食物/运输生产需已复核路线/模块/节点扩展；通用名称、雇员福利或现金费用不证明物理履约或范围完整。

- 选定流：真实包含且物理完整的附属供应商义务
- 流属性/单位：Count / Item(s)
- 数量规则：采用 cp_providers，真实排他归属的兼容原生数量仅除一次正值同范围 N_target；已按参考流不再除，N_target=0 保留且不除
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_providers`
- 范围证据需求：真实合同/住房包含和物理交付/可用义务、原生质量/数量/供应商覆盖/其他用户。不默认餐数/日/活动或费用转换；未决厨房/生产范围阻断完整套餐。

#### refrigerant_supply

责任节点与原流角色：residence_operation / inputs / product

独立供给已复核住宿系统的真实精确化学品/混合物。资产寿命内已覆盖初始出厂充注不再采购一遍；补充量不是泄漏量。

- 选定流：真实独立运行制冷剂供给
- 流属性/单位：Mass / kg
- 数量规则：采用 cp_refrigerants，真实排他归属的兼容原生数量仅除一次正值同范围 N_target；已按参考流不再除，N_target=0 保留且不除
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_refrigerants`
- 范围证据需求：真实化学品/状态/SKU/扣皮重但未扣出库退货的入库量、库存/充注谱系、未使用供给与已使用回收、出厂/独立供给上游责任及独立接收/释放证据。

#### freight

责任节点与原流角色：residence_operation / inputs / product

仅在上游/供应商/接收方排重后的真实服务边界唯一载荷路段。载荷保留真实湿布草、包装和支撑物，不是按干基纺织品质量计的洗衣处理服务量、普通住户出行或每夜固定发运。

- 选定流：真实住宿供货布草资产与接收方货运
- 流属性/单位：Mass * distance / t*km
- 数量规则：采用 cp_freight，真实排他归属的兼容原生数量仅除一次正值同范围 N_target；已按参考流不再除，N_target=0 保留且不除
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_freight`
- 范围证据需求：真实载荷/路段/货物/时间、带包装载荷或兼容总重减仅车辆非货物皮重、距离、EACH/TOTAL/次数、原生转换与求和内部该记录完整份额/N一次。

#### water_withdrawal

责任节点与原流角色：residence_operation / inputs / elementary

条件性实际运营环境取水，区别于购水或供应商取水。精确水源/位置与实际责任用户必需。

- 选定流：真实来源特定直接住宿取水
- 流属性/单位：Volume / m3
- 数量规则：采用 cp_waterstate，真实排他归属的兼容原生数量仅除一次正值同范围 N_target；已按参考流不再除，N_target=0 保留且不除
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_waterstate`
- 范围证据需求：真实水源/介质/位置原生体积/表计区间和全用户责任；不以水费、人数或差额代取水。

#### site_land_occupation

责任节点与原流角色：residence_operation / inputs / elementary

按 actual_land_interfaces 完整住宿场址寿命及全用户责任中的真实物理土地面积时间。完整建筑/场址/供应商内覆盖是同一物理接口，不是第二项基本流交换。

- 选定流：按真实责任计的场址土地占用
- 流属性/单位：面积*时间 / 真实原生面积时间单位
- 数量规则：采用 cp_assets，真实排他归属的兼容原生数量仅除一次正值同范围 N_target；已按参考流不再除，N_target=0 保留且不除
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_assets`
- 范围证据需求：真实场址位置/土地状态/面积、时间区间/时长惯例、原生操作数/转换、生命周期阶段/责任人、完整全用户寿命归属及匹配供应商/资产覆盖。

#### site_land_transformation

责任节点与原流角色：residence_operation / inputs / elementary

条件性有证据的转化前后状态、面积、事件日期及责任人下真实土地转化。现有所有权或建设本身不证明特定生态转化；适用历史未知仍为缺口。

- 选定流：真实有证据历史或新增场址土地转化
- 流属性/单位：面积 / 真实原生面积单位
- 数量规则：采用 cp_assets，真实排他归属的兼容原生数量仅除一次正值同范围 N_target；已按参考流不再除，N_target=0 保留且不除
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_assets`
- 范围证据需求：真实历史/新增事件与土地状态/来源/面积/日期/位置、每项原生基准/方法、阶段/责任人及同接口供应商/资产排重；不推土壤/栖息地类别或转换因子。

#### unused_supply_returns

责任节点与原流角色：residence_operation / outputs / product

真实同来源同状态未使用独立供给外退。gross供给单列此输出；consumed-only供给扣匹配未使用退货且省略此输出。内部回收/期末、已使用制冷剂和继承布草不是未使用供给。

- 选定流：真实匹配未使用独立供给退货
- 流属性/单位：Mass / kg
- 数量规则：采用 cp_supplies，真实排他归属的兼容原生数量仅除一次正值同范围 N_target；已按参考流不再除，N_target=0 保留且不除
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_supplies`
- 范围证据需求：真实来源匹配SKU/净量/接收方/未使用接受及排他库存惯例，不作无关净抵或自动收益。

#### usable_asset_exports

责任节点与原流角色：residence_operation / outputs / product

真实外部可用整物/部件在实际接收状态和剩余寿命责任下转移。退役/维修/内部调配不自动等于可用外转或收益；整物/部件质量不可相加。

- 选定流：真实可用纺织品家具或设备转移
- 流属性/单位：Mass / kg
- 数量规则：采用 cp_assets，真实排他归属的兼容原生数量仅除一次正值同范围 N_target；已按参考流不再除，N_target=0 保留且不除
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_assets`
- 范围证据需求：真实整物谱系/原生净质量或有支持件数转换、接收方/接受/时间、剩余寿命及已覆盖制造/寿命终结责任人。

#### recovered_fluid_exports

责任节点与原流角色：residence_operation / outputs / product

原始充注或后续补充来源的真实已使用回收化学品/混合物可用外转。保留回收仍是库存。不自动是未使用新料，不扣新制造/当前无关供给，不作负输入或自动避免制造收益。

- 选定流：真实可用已使用回收制冷剂外转
- 流属性/单位：Mass / kg
- 数量规则：采用 cp_refrigerants，真实排他归属的兼容原生数量仅除一次正值同范围 N_target；已按参考流不再除，N_target=0 保留且不除
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_refrigerants`
- 范围证据需求：真实化学品/混合物/组成/原生净量、已使用状态质量/接收方接受、充注来源和回收保留/外转区分；未使用退货仅走独立匹配卡。

#### residence_solid_waste

责任节点与原流角色：residence_operation / outputs / waste

运营商有收集责任的真实纸/食物/卫生/包装等独立接收住宿物流，各不同物流/接收方分别展开。真实共收混合物保留整质量与不可相加组成。住户来源处理不引入全部自购商品制造。

- 选定流：真实住户与运营商住宿固废交接
- 流属性/单位：Mass / kg
- 数量规则：采用 cp_fates，真实排他归属的兼容原生数量仅除一次正值同范围 N_target；已按参考流不再除，N_target=0 保留且不除
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_fates`
- 范围证据需求：真实物流/来源/收集责任/原生净量/状态/组成/接收方及供应商/生命周期排重后的运输处理责任；不用人均废物默认。

#### spent_cleanup_mixture

责任节点与原流角色：residence_operation / outputs / waste

仅真实接收擦布/过滤物/吸附物及其中保留液体/碎片。载体/组分/吸附液是同一真实混合物不可相加审计视图；独立自由液体或无关废物分开。

- 选定流：真实混合废弃清洁载体
- 流属性/单位：Mass / kg
- 数量规则：采用 cp_fates，真实排他归属的兼容原生数量仅除一次正值同范围 N_target；已按参考流不再除，N_target=0 保留且不除
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_fates`
- 范围证据需求：真实任务/材料/混合物来源、毛重/皮重/净重及独立组分原生元数据、接收方身份/状态/运输处理；不推捕集效率或残余污染物。

#### retired_linen

责任节点与原流角色：residence_operation / outputs / waste

实际独立废弃布草/纺织品的真实状态/接收方，不是每项污/拒收/重洗件、缺件或洗涤事件。完整资产/租赁已覆盖寿命终结时为链接物理审计，不再加处理负荷。

- 选定流：真实废弃运营商床品和可重复纺织品
- 流属性/单位：Mass / kg
- 数量规则：采用 cp_assets，真实排他归属的兼容原生数量仅除一次正值同范围 N_target；已按参考流不再除，N_target=0 保留且不除
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_assets`
- 范围证据需求：真实退役/后续用途决定/纺织品谱系、原生接收湿干/污物/组成/来源和唯一寿命终结运输处理责任人。

#### retired_equipment

责任节点与原流角色：residence_operation / outputs / waste

完整寿命责任下真实整物/部件废弃。同一转移物内保留液体、电池、纺织品不可相加，不再作组分出口；实际独立流有独立接收方。

- 选定流：真实废弃床床垫家具或设备物流
- 流属性/单位：Mass / kg
- 数量规则：采用 cp_assets，真实排他归属的兼容原生数量仅除一次正值同范围 N_target；已按参考流不再除，N_target=0 保留且不除
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_assets`
- 范围证据需求：真实资产/部件/床垫身份、废弃状态/净量/接收方、保留内容归属及已覆盖寿命终结运输处理。

#### contained_wastewater

责任节点与原流角色：residence_operation / outputs / waste

真实污水管网/接收方或独立封闭自由液体，保留自身状态/组成/数量，不是直接环境排口、水蒸气或总供水。供应商已覆盖洗衣污水不重复。

- 选定流：真实封闭卫生清洁与支持污水转移
- 流属性/单位：Volume / m3
- 数量规则：采用 cp_waterstate，真实排他归属的兼容原生数量仅除一次正值同范围 N_target；已按参考流不再除，N_target=0 保留且不除
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_waterstate`
- 范围证据需求：实际接收/计量原生体积与物流/组成/接收方/处理/运输来源，仅转换时使用兼容密度温度；区分保留水及真实混合/独立液体。

#### independent_maintenance_waste

责任节点与原流角色：residence_operation / outputs / waste

按真实身份/状态/接收方展开实际分收非水液体/残余/耗材，不把全部液体并成通用废物。整设备/混合物保留内容不属独立出口；封闭液体不是空气排放。

本卡为独立身份分支`independent_maintenance_waste_used_lubricating_oil`之外的余项清单要求。已计入分支的实际数量不再计入本余项交换，原类目总量仅作不可相加的协调审计。其他实际材料、状态、来源或介质仍须保留自身经核实的身份、原生数量及供应接收责任；记录缺失时，不推定条件分支发生、不发生或数量为零。

- 选定流：真实独立维护材料与非水废物流
- 流属性/单位：Mass / kg
- 数量规则：采用 cp_fates，真实排他归属的兼容原生数量仅除一次正值同范围 N_target；已按参考流不再除，N_target=0 保留且不除
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_fates`
- 范围证据需求：真实来源任务/SKU/原生净量/组成/需要时密度温度、接收方覆盖与整物/部件/混合物不可相加排除链接。

#### contained_refrigerant_waste

责任节点与原流角色：residence_operation / outputs / waste

实际独立转移处理的不可用回收化学品/混合物，区别于保留库存、已使用可用外转、设备内保留和直接向空气释放。回收/补充本身不判定废物或泄漏。

- 选定流：真实独立不可用回收制冷剂废物
- 流属性/单位：Mass / kg
- 数量规则：采用 cp_refrigerants，真实排他归属的兼容原生数量仅除一次正值同范围 N_target；已按参考流不再除，N_target=0 保留且不除
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_refrigerants`
- 范围证据需求：真实化学品/原生废物净量/状态/接收方/运输处理/来源及谱系；不推销毁因子或收益。

#### direct_water_outfall

责任节点与原流角色：residence_operation / outputs / elementary

仅真实液态水直接跨至已知环境。封闭污水/处理交接仍是 Waste。未知差额或购水不能制造排口；向空气水蒸气为独立质量物质角色。

- 选定流：有实际介质的真实直接住宿排水
- 流属性/单位：Volume / m3
- 数量规则：采用 cp_waterstate，真实排他归属的兼容原生数量仅除一次正值同范围 N_target；已按参考流不再除，N_target=0 保留且不除
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_waterstate`
- 范围证据需求：真实位置/接收介质/原生直接体积/区间/组成/去向/来源和责任；不默认地下水/海/河身份。

#### direct_species

责任节点与原流角色：residence_operation / outputs / elementary

真实运营责任/事故中独立有证据的精确化学品/混合组分/颗粒及接收介质。水蒸气须实际质量向空气；封闭液体/水仍是废物。采购、气味、补充、缺测或差额既不证明发生也不证明零。

本卡为独立身份分支`direct_species_co2_fossil_air`; `direct_species_methane_fossil_air`; `direct_species_nitrous_oxide_air`之外的余项清单要求。已计入分支的实际数量不再计入本余项交换，原类目总量仅作不可相加的协调审计。其他实际材料、状态、来源或介质仍须保留自身经核实的身份、原生数量及供应接收责任；记录缺失时，不推定条件分支发生、不发生或数量为零。

- 选定流：有实际介质的真实精确住宿物质释放
- 流属性/单位：Mass / kg
- 数量规则：采用 cp_species，真实排他归属的兼容原生数量仅除一次正值同范围 N_target；已按参考流不再除，N_target=0 保留且不除
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_species`
- 范围证据需求：精确物质/基准/颗粒/介质及独立实测原生量，或兼容真实活动-因子及每个操作数原生元数据；组成/去向/气体状态仅需一次，供应商排重。


## 9. 验证规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `valid_actual_assignment` | student_residence_room_day | 以真实已接收房间交接、持续就绪/进入/排他保留及全部真实离宿/关闭/退房/替代/终止，复核 physical_residential_delivery、assigned_room_reference 和 fulfilled_place_days。初次未接收或付费未到输出无效。同住户换房仅保留一份履约时间输出及两房真实资源。 |  |
| `valid_full_output_set` | 产出及共享范围 | 枚举全部真实分配居住、访客/会议、租户和其他物理服务输出与交接及原生量/配置/时间。非住户厨房/公共/用餐用户实际存在时仍是共享资源消费者。预期住宿/附属输出不同于可用材料、残余和废物。不把房间及其包含床位重复输出，不默认住户=访客夜，不按费用/收入/雇员学生身份分配，不自动给回收收益。各资源优先实际直接追踪，或有证据的兼容完整物理驱动。 |  |
| `valid_resource_responsibility` | 全部资源 | 复核 physical_pool_closure、actual_resource_pool，完整兼容其他用户/期间与不可相加共享责任归属。必要空闲/失败/N0责任须有真实结转至最终解决；未知负荷不得消失。严格同范围正值 N_target 仅除实际目标归属资源总量一次。 |  |
| `valid_complete_life_package` | 资产及供应商 | 复核 complete_life、complete_asset_life、actual_asset_equivalent 的完整已观察+有来源剩余寿命，完整真实供应商/底层阶段覆盖和实际已完成补充。按 actual_package_route 不删除真实包含食物/交通，不用通用服务标签替代自营生产。真实生产扩展未复核或套餐不完整即阻断。 |  |
| `valid_stock_and_fluid` | 物料及制冷剂 | 复核 actual_supply_stock 和 actual_fluid_ledger。期初/入库/期末/未使用退货排他；gross+return 与 consumed-only/OMIT 不得混用。已使用液体回收/外转是不同真实接收状态，不扣减新材料制造。内部循环/储存回收及整设备保留内容不可相加。 |  |
| `valid_distinct_streams` | 接收端及环境流 | 展开每种真实不同材料/状态/接收方。真正整混合物/组分/整物内容不可相加。封闭污水/液体是 Waste；真实直接液体排放用实际环境介质；真实水蒸气按 Mass 向空气。精确物质与独立来源/测量或兼容因子必需。未知差额或身份查询失败不证明不存在或零。供应商/完整资产/货运/处理阶段一次。 |  |
| `valid_basis_and_operations` | 纺织品、公用资源、货运及每个操作数 | 真实干纺织品洗衣不是新纺织品或湿货运。同样品仅水干湿转换与有来源百分数转比例必需；EACH 重复一次，TOTAL 不变。带包装载荷保留内容/支撑物；仅扣车辆非货物皮重。该记录兼容全用户份额置唯一载荷路段求和内部，再除一次正值同范围 N_target。无支持真实等效、介质、数量或供应商阶段阻断数据使用。 |  |
| `valid_truthful_candidate` | 全部具体交换 | 最终每项交换须已核实实际身份/状态/配置/属性单位支持及原生实测/来源数量，声明义务已完整。缺 UUID 或通用数值范围可以保留为受限候选缺口；禁止编值或近似 UUID。检查器通过不证明外部绑定、科学复核或发布就绪。 |  |
| `valid_land_interfaces` | site_land_occupation; site_land_transformation | 真实场址/土地占用及有证据的历史或新增转化是不同于 Count 资产的物理接口。采集真实面积、占用时长/区间、土地状态/来源/位置，以及真实转化前后状态/日期/面积、生命周期阶段和责任人。占用采用原生面积*时间；真实转化采用原生面积，确需转换时须有来源。不得推断栖息地/土壤类别、土地类型转换因子，不能仅因场址存在就推定转化；适用的历史/新增转化未知是数据缺口。完整建筑/场址/供应商内已覆盖土地必须链接同一物理接口，不能再加一遍。完整链使用前须实际补齐真实缺失土地义务一次；披露或资产计数不能替代面积/时间。 |  |
| validate_dedicated_classification_gate | student_residence_room_day | 本PCR仅适用于学校或大学附属学生宿舍中，为学生分配、配备家具的自炊私人单人卧室。每个服务时段均须核实实际学生住宿用途以及宿舍与学校的隶属关系。暑期访客、会议参加者、工人住宿和其他居住用途均是独立产出，即使复用同一房间也不得计入本参考流。学生住宿资格不能替代真实接收交接和持续独占进入、可用状态的证据。整套公寓、共享睡眠房、家庭房和含餐生产路线不属于所选单房路线。 专属范围资格和真实履约交接必须同时有证据。其他分类及不兼容配置不得计入N_target，但全部真实其他消费者、空闲义务和完整寿命负荷须保留于相应资源池。资格未知即阻断使用，不作零。 | unsd-cpc3-residential |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | secondary_dataset; background_dataset，须实际身份和完整性复核后 |
| downstream_use | 一个参考单位的前景及下游模型：实际交付的学生宿舍独占单人房居住位日 |
| allowed_use | 本PCR仅适用于学校或大学附属学生宿舍中，为学生分配、配备家具的自炊私人单人卧室。每个服务时段均须核实实际学生住宿用途以及宿舍与学校的隶属关系。暑期访客、会议参加者、工人住宿和其他居住用途均是独立产出，即使复用同一房间也不得计入本参考流。学生住宿资格不能替代真实接收交接和持续独占进入、可用状态的证据。整套公寓、共享睡眠房、家庭房和含餐生产路线不属于所选单房路线。 |
| excluded_use | 初次未接收或付费未到要约；已退/关闭/不可用/另作他用时段；共享卧室/热床轮班周转/双人家庭/整套自包含单元；访客入住夜或名义容量换算；移动卧铺或娱乐营套餐；真实未复核现场生产或不完整包含餐食/交通/套餐范围 |
| required_metadata | 真实运营商/场址/私人卧室/配置和住户分配交接/进入/就绪/排他保留，真实接收/离宿/关闭/退房/替代/终止/撤销；有来源日开始结束/时区/UTC偏移/夏令时/经过时间；真实自炊/公共/供应商/套餐义务；全部真实住户/访客/会议/租户/非住户输出交接；原生全用户物理驱动、完整资产布草寿命/供应商/接收方覆盖及已解决跨期资源池；真实土地占用面积/时间和有证据历史/新增转化前后/来源/日期/阶段/责任人及同接口供应商资产覆盖/已完成缺失责任 |
| required_quality_disclosure | 真实实测与估计的原生单位/基准/方法/状态/样品时间/来源/校准/覆盖/不确定性/敏感性/更新；具体/支持身份、原生数量、物质介质/寿命/分配/覆盖缺口。缺通用范围本身不证明错误或零；未解决实质物理责任阻断最终链使用；适用土地历史/状态/数量/责任人/覆盖未决同样阻断 |
| update_trigger | 真实分配/排他/房间拓扑或服务日惯例；套餐餐食/交通/供应商/洗衣/公共用户义务；真实独立生产新路线；完整资产寿命、库存来源/去向/接收方、计量或身份证据改变 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| unsd-cpc3-residential | official_guidance | UNSD CPC3.0说明，2025年6月30日，印刷355–356页；https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | 仅用于分类：63210学校学生住所明确排除暑期访客和会议住宿至6311；63220工人可季节性/短期。不定义本物理参考或分配公式。 |
| stantony-2026-27 | handbook | https://www.sant.ox.ac.uk/study-here/accommodation/ | 当前2026–27连续住所安排可跨圣诞/复活节；配家具房及共厨卫支持真实物理范围。不导入许可时长/租金/家具默认。 |
| exeter-residences | handbook | https://www.exeter.ox.ac.uk/students/accommodation/ | 假期换房、会议/招生使用、自炊研究生共厨、非住户公共用户及独立家庭公寓需要真实期间/输出边界。不默认住期/费用或生命周期值。 |
| southampton-2026-27 | handbook | https://www.southampton.ac.uk/student-life/accommodation/fees-contracts/halls/agreement | 一当前运营商定义实际分配/替代房、钥匙、维修服务责任、晚到取消重派和套餐相关食物交通。付款不是物理产出。不作法律结论，不强加法律/时间/餐数默认。 |
| ucl-home-2026-27 | handbook | https://www.ucl.ac.uk/study/accommodation/current-residents/moving/welcome-information | 当前2026–27入住房间盘点、真实锁外出入支持/维修/检查、供应商公共清洁与住户整理区别、另付洗衣供应商及住户自带材料支持采集问题。不默认频率或营业时刻。 |
| skilouise-staff | handbook | https://www.skilouise.com/contact-us/careers-employment/ | 当前CharlestonResidence有可锁单人卧室、共享配备厨房/起居/卫浴/洗衣，确认分配/租约不同于申请。其他合住/双人配置及雇员班车/福利须实际产品套餐证据；不导入房数/租金/轮班，不宣称来源已证明完成具体服务。 |
| stayover-route-limit | handbook | https://stayover.com.au/accommodation | 当前工人报价包含现场厨师做餐、多房型、房间照护/洗衣及退房钥匙与permanentroom例外。这限制自动套用：真实包含食物/生产不能删除或统称被本住宿法覆盖。permanentroom标签本身不证明持续进入/就绪。 |
