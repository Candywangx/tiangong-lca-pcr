---
pcr_id: pcr.residential-multi-activity-camp-participant-sessions
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 含现场供餐的住宿式多活动营参与者营期服务

## 1. 范围与适用性

适用于实际交付的住宿式一般多活动休闲度假营完整服务包，包含过夜住宿、膳食提供和娱乐，并真实现场备制食材、烹饪。须有真实经营者方案、服务记录和物理厨房路线证据。专项体育教学营、日营、单住宿、裸营位、常住学生/工人住所、临床照护以及仅预约/费用/名义容量不适用。有娱乐或附带教学不自动成为专项体育教学，以真实项目目的及完整包判断；CPC3.0 63130与92912区分不能只凭营销词。

参考流为一个预先声明等价方案版本/时长/画像内真实履约的参与者营期。不同两日或一周、营养/年龄/活动/膳食画像，不经独立复核物理等价和限定信息不能混作等价营期。实际时长必采，不统一夜数、小时、餐次、活动或人数。参与者拒绝真实已提供的餐食/活动可仍已履约；预约、名义菜单、厨房容量或付款不证明已提供。部分履行有自己真实物理范围/责任，不能当完整营期或零资源。

两节点分别保留住宿待命/活动支持以及食品储存备料调配烹饪保温供餐洗餐具清洁。厨房向营期交接实际有据膳食提供服务，不新增另一最终营期。食品质量、已供/拒食covers、补充份、预制库存、备料废、未供丢弃、餐后返回、包装及向空气蒸气各为独立原生视图。供应商和直接职责相同阶段只有一个负担owner，重叠追踪仅非相加。

纳入真实运行投入、含损失的上游食品物资、全部建筑/场地工程/装修FF&E/厨房/活动装备/餐具/织物寿命、必要闲置失败及真实接收职责，覆盖全部用户期间。独立工业食品加工、稳定保藏、水处理、能量转换或工业洗衣须复核路线扩展；不能借此删普通真实清洗、保温、烹饪或洗涤。游客交通及其自带产品制造仅在真实声明职责内纳入。

经营者一手资料支持定性路线，不提供通用配方、产率、温度、安全食品法律条件、每日餐数或寿命/清单范围。缺身份和通用范围须诚实保留、强制实际采集，不允许猜UUID/数字或当零。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.residential-multi-activity-camp-participant-sessions |
| classification_refs | CPC3.0:63130 narrower，实际一般多活动住宿营含现场供餐；体育教学营92912排除 |
| covered_products | 真实履约、声明等价方案版本/时长/画像、含过夜住宿膳食娱乐的参与者营期 |
| excluded_products | 日营、单住宿、裸营位、专项体育教学、常住、纸面权利/预约/费用/名义容量；不同画像直接等价 |
| representative_product | 实际参与者/方案版本/时长/画像的一次营期，含真实住宿、证实膳食提供、娱乐和支持 |
| production_route | 真实方案备供待命 -> 现场食品备制及实际膳食交接 -> 实际履约住宿多活动营期及确认冲回 |
| market_state | 物理实际履约的完整参与者营期；真实食品供应状态/服务可供接受/时长保留，费用预约非交换追踪 |


## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 实际履约住宿式多活动营参与者营期 |
| How much | 1 Item(s) |
| How well | 声明等价方案版本/时长/画像的过夜住宿、实际供餐及娱乐，具有参与者接受与冲回证据，非预约或吃掉餐数 |
| How long or cycle | 实际项目开始结束/当地时区/UTC偏移/DST及实际时长；餐次、库存报告期和全资产寿命分别采集，无fixed24hours固定二十四小时或默认夜数 |
| reference_flow_link | `camp_participant_session` |

| 字段 | 值 |
| --- | --- |
| reference_amount | 1 |
| reference_product_flow | 实际履约住宿式多活动营参与者营期 |
| reference_flow_property | Count `01846770-4cfe-4a25-8ad9-919d8d378345` |
| reference_unit_group | Count unit group `5beb6eed-33a9-47b8-9ede-1dfe8f679159` |
| reference_unit | Item(s) |
| required_qualifiers | actual_camp_operator_site_programme_package_version; equivalent_duration_profile_and_cohort; actual_overnight_accommodation_food_recreation_bundle; general_multi_activity_not_specialist_sports_instruction; actual_on_site_ingredient_preparation_cooking; actual_start_end_time_zone_UTC_offset_DST_resolution; fulfilled_participant_acceptance_and_reversals; partial_output_own_scope_and_pool_failure_responsibility; actual_meal_provision_gate_prepared_ready_held_available; internal_transfer_same_state_native_quantity_finalN_once; served_declined_refill_prepared_remaining_plate_native_views; ingredient_supplied_state_moisture_bone_skin_packaging_distinction; all_guest_support_staff_visitors_other_session_consumers; full_life_asset_all_user_observed_sourced_remaining_driver; provider_direct_stage_exclusivity_completed_missing_stage_integration; native_quantity_unit_basis_method_state_sampletime_source; zero_N_and_zero_handoff_actual_responsibility_resolution |

N_target为相同声明方案版本/时长/画像内冲回后唯一实际履约参与者数量。同日或部分服务不是完整营期；拒绝真实已提供膳食不自动取消营期，以实际服务门槛判断。不同实际画像/群体可共享资源，不能直接用无区分分母。Count属性单位验证计量支持，不验证参与者营期产品身份。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 | source_ids |
| --- | --- | --- | --- | --- | --- |
| session_profile_count | 最终输出 | Count | Item(s) 参与者营期 | 真实履约唯一参与者/方案版本/时长/画像及冲回，须有过夜膳食娱乐门槛和时间；非预约、人日、餐数、容量或fixed24h固定二十四小时。不同营期保留限定或单独输出。 | unsd-cpc3-2025; pgl-multiactivity-current |
| meal_transfer_native | 厨房营期内部 | Count 及独立 Mass | 实际膳食提供份数或事件 Item(s)，独立记录食品 kg | 双方同一transferID/状态/原生量/接收范围及同正N_target仅一次。真实已备制就绪持有可供，不只计划菜单或吃掉量；已供拒食补充份和各食品质量独立。Count非等营养或等食物质量。 | pgl-menus-current |
| native_food_states | 食材食品废物 | Mass；实际组分水分 | 实际收货态、制备态、供餐态 kg，以及独立干基和水分基准 | 真实生/预制/熟供应态、水分骨皮与包装皮重区分。仅同样品纯水定义w_wet=m_water/m_as_received及r_dry=m_water/m_nonwater可得w_wet=r_dry/(1+r_dry)，百分数先转。含其他挥发物LOD非水，无通用产率。 | pgl-chef-job |
| native_physical_conversion | 实际量因子 | 实际相容属性 | 原生质量、体积、密度、能源、时间、件数及因子单位 | 每个独立运算量保留value/unit/basis/method/state/sampletime/source。EACH实际件数一次，TOTAL不变。密度对应实际状态温度；kWh/MJ/燃料热值种类有据换算且不重复。 |  |
| once_same_target | 全部资源 | 该行原生属性及 Count 分母 | 每 Item(s) 实际参与者营期的物理资源 | 直接实际目标归属或相容实际quantity*target_driver/正完整all_consumer_driver，再除正相同画像N_target一次。必要同池闲置失败真实输出责任纳入；已归一不再除，N0保留源接收解决链接，未归属则不完整。 |  |
| asset_life_service | 资产复用供应商 | 实际原生资产量及寿命驱动量 | 相容的任务量及全用户完整寿命单位（已观察使用加有来源的剩余使用） | 制造安装维护实际更换终末全寿命；完整全用户寿命分母采用已观察使用加有来源的相容剩余服务，或采用实际终止总使用量；不是年度营期、名义容量或编造的年数。已覆盖供应商与实际底层阶段互斥。 |  |


## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 真实一般多活动住宿营及现场供餐路线，声明方案版本/时长/画像与物理供应职责 |
| starting_condition_role | 营地厨房就绪运行起始状态，全寿命资产责任仍在边界，已有建筑非无负担 |
| product_classification_scope | narrower63130过夜膳食娱乐包，独立语义产品/物理方法需要，不因分类叶直接新建 |
| recursive_input_rule | 不再买同一最终营期或完整内部餐。食材/供应商备制与直接职责准确门口互斥，内部交接同一原生服务非两个外部负担 |
| upstream_dataset_requirement | 实际供应态食品物资能水、供应商/资产制造安装维护更换终末匹配真实范围。真实缺阶段须实际完成源/原生量/状态/时间/owner一次集成后才完整使用 |
| disclosure | 真实等价方案时长群体及部分、实际膳食提供/食物去向、全部客人支持员工游客其他营期责任、共享资产/供应商、必要闲置失败及N0/零交接解决、证据身份未决 |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| bundle_route_gate | 目标完整包 | 过夜住宿食品娱乐均保留，排除专项体育教学。现场食材备制烹饪真实存在，不能为省流程假定外包。 | unsd-cpc3-2025; pgl-multiactivity-current; pgl-chefs-current |
| complete_exclusive_life | 全部职责 | 真实食品含上游损失、住宿活动支持清洁、全资产复用寿命和接收端纳入。完整供应商或底层职责互斥；实际缺职责须在完整使用前完成原生量状态源时间owner覆盖集成。 | pgl-code-practice-2025 |
| zero_handoff_no_erasure | 厨房营期集成 | 零实际交接不能经零交换转厨房负担。营地真实必要厨房职责须经互斥有据资源补充/聚合实量集成一次，含源/接收/owner/覆盖链接，无虚构正膳食。未完成则完整包不可用。 |  |
| qualitative_source_limit | 全部来源 | PGL当前网页及2025年6月《Code of Practice》支持定性路线。示例夜数、每日餐数、份量、配方温度安全法律或寿命不作通用规则因子，需实际现场证据。 | pgl-multiactivity-current; pgl-menus-current; pgl-code-practice-2025 |

实际营地、活动场地及厨房的土地占用和真实土地转变接口，在选定全链职责内时须列入场地/资产/供应商覆盖矩阵。采集真实空间时间边界、前后土地状态、原生面积/时间或转变数量及独立单位/基准/方法/状态/采样时间/来源和覆盖owner；相同资产/供应商已含接口不重复。实际未覆盖接口必须在全链使用前完成有据原生量/状态/时间/owner/覆盖集成，否则不完整。不从营地营销推土地类别、转变或因子，不将土地数量当Count资产单位。

## 6. 过程清单结构

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| camp_session_service | 住宿式多活动营期服务整合 | required | 真实等价过夜膳食娱乐住宿营期履约 | 最终参与者营期，含住宿活动支持和互斥内部供餐接收 | `camp_participant_session` |
| on_site_meal_preparation | 实际现场食品备制及膳食提供 | required | 营地及真实其他消费者的现场食材备制烹饪 | 储存备料调配烹饪持有供餐清洁和内部膳食交接，真实原生量非每营期固定一餐 | `kitchen_meal_handoff` |

实际营期/时间画像与连续待命冷藏，交叠真实配方备制烹饪持有供餐洗涤清洁批次。采集真实配方版本组成、购入态食材、实际操作（非每道必须混两料或加热）、厨房节点投入到预制状态改变、完成服务门槛和各备制/分发/余量/餐盘记录。普通清洗冷藏持有烹饪不自动变独立保藏产品、初加工或能量转换工厂；真实新独立工序须复核扩展。

交接双方同一transferID、真实已备制就绪持有可供状态、餐次/参与者/接收接受范围、原生计数和同一最终N仅一次。菜单预约容量营养不是测得输出。已供补充份拒食质量视图非相加；必要支持员工餐保留真实营地责任，其他营期/访客有自身输出责任，不自动删。

真实异常/原料/多备/预制/持有食品沿实际返工重热调配、在制留存、接受可用转交或丢弃路线记录源批次/量/状态/时间。内部返工非新上游或新最终营期。被拒绝/部分履行保留真实资源及独立范围；必要同池失败取消未到待命纳入总量及真实输出归属。跨期源/接收/解决链接及未知保留，未归属则最终不完整。

### 过程：住宿式多活动营期服务整合 (`camp_session_service`)

#### 输入

##### 产品流

###### 实际使用点交流电 (`camp_electricity_ac`)

仅适用于实际跨越本节点边界、且未由完整供应商数据覆盖的交流电。该身份未特指供应方、电压、发电组合或交付线损归属，仍须按要求采集。经核实的电力流以1 MJ电能为基准，其ILCD属性名称为净热值；原生kWh按精确的3.6 MJ/kWh换算，不能套用燃料热值系数。直流电或其他不匹配电力状态保留在余项要求中。

- 选定流：交流电 `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- 绑定：`fixed`
- 流属性/单位：Energy / kWh
- 数量规则：在 cp_camp_utilities 下，实际独占目标责任数量 / 正的相同画像 N_target 一次；已每参考流记录不变，N_target=0保留不除。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_camp_utilities`

范围证据需求：实际电表区间、复位调整、已应用倍率、实际平均功率与同区间时长，完整用户/待机责任和归一化状态。 缺通用数值范围不允许猜值，实际量/身份/覆盖未明确时限制最终使用。

###### 实际液态处理自来水供给 (`camp_water_liquid_tap`)

仅在实际来源确为处理后的自来水且用于所声明用途时适用。保留实际供应方、水质、温度状态和供应边界，不假定所有供水都是自来水。冰、瓶装矿泉水、再生水、未经处理的水及环境直接取水保留各自实际身份。沿用原卡原生质量或体积基准；最终换算为质量参考量时须有实际相容密度和状态证据，不能把目录中的次要体积关系作为默认现场密度。

- 选定流：自来水 `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- 绑定：`fixed`
- 流属性/单位：Volume / m3
- 数量规则：在 cp_camp_utilities 下，实际独占目标责任数量 / 正的相同画像 N_target 一次；已每参考流记录不变，N_target=0保留不除。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_camp_utilities`

范围证据需求：实际源、表计/原生体积、期间、完整用户与厨房排除；转换密度/温度仅在实际需要时有据使用。 缺通用数值范围不允许猜值，实际量/身份/覆盖未明确时限制最终使用。

###### 实际外购交付的有效热量 (`camp_purchased_thermal_delivered_heat`)

仅记录有证据能量基准、实际跨越本节点边界交付的有效热量。保留供回状态、温度品位、覆盖范围及实际损失责任。通用热能身份不预设天然气、蒸汽质量、锅炉效率或温度；制冷、燃料能量及缺少蒸汽转能量证据的情形不使用该身份。

- 选定流：热能 `4f19a302-7b3b-11dd-ad8b-0800200c9a66`
- 绑定：`fixed`
- 流属性/单位：Energy / MJ
- 数量规则：在 cp_camp_utilities 下，实际独占目标责任数量 / 正的相同画像 N_target 一次；已每参考流记录不变，N_target=0保留不除。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_camp_utilities`

范围证据需求：实际供应商、表计、有用能量、状态/温度、期间、完整用户与覆盖排除，无默认锅炉/制冷技术。 缺通用数值范围不允许猜值，实际量/身份/覆盖未明确时限制最终使用。

###### 实际独立记录的合成洗涤剂投入 (`camp_consumables_synthetic_detergent`)

仅适用于产品配方、供应状态及用途记录确认的实际合成表面活性洗涤剂。记录扣除包装皮重的材料净量，区分浓缩液与稀释水，整体配方与组分不得相加重复计入。肥皂、消毒剂、抹布、滤材等仍按各自实际身份记录，不预设清洁配方、剂量或发生。

- 选定流：洗涤剂 `1c57d123-df57-49ab-b9d4-957403beb8a5`
- 绑定：`fixed`
- 流属性/单位：Mass / kg
- 数量规则：在 cp_camp_supplies 下，实际独占目标责任数量 / 正的相同画像 N_target 一次；已每参考流记录不变，N_target=0保留不除。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_camp_supplies`

范围证据需求：实际净库存/用途/未用退回/配方/计数与原生转换；总量TOTAL不再乘数量，逐件EACH只乘实际件数一次。 缺通用数值范围不允许猜值，实际量/身份/覆盖未明确时限制最终使用。

###### 实际营地织物洗涤服务 (`camp_laundry_service`)

实际完成的洗涤服务按匹配干织物或有据原生服务量，非每洗一次新布料，也非含水货运质量。重洗及必要失败负担保留。

- 选定流：实际营地织物洗涤服务
- 流属性/单位：Mass / kg
- 数量规则：在 cp_camp_textiles 下，实际独占目标责任数量 / 正的相同画像 N_target 一次；已每参考流记录不变，N_target=0保留不除。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_camp_textiles`

范围证据需求：实际织物/任务/干湿基、同样品水分、真实供应商洗烘整理/化学品/能水/污水/资产/运输覆盖及已完成缺阶段集成。 缺通用数值范围不允许猜值，实际量/身份/覆盖未明确时限制最终使用。

###### 实际内部膳食提供服务接收 (`camp_internal_meals`)

接收现场厨房实际已备制、就绪、保温/持有及可供且有实际餐次/参与者/服务门槛证据的交接；与kitchen_meal_handoff同一transferID/状态/原生量和最终N一次。并非仅吃掉量或另购同一完整餐。

- 选定流：实际内部膳食提供服务接收
- 流属性/单位：Count / Item(s)
- 数量规则：在 cp_camp_meal_receipts 下，实际独占目标责任数量 / 正的相同画像 N_target 一次；已每参考流记录不变，N_target=0保留不除。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_camp_meal_receipts`

范围证据需求：真实批次/餐次/对象/接收及可供证据；已供/拒食/补充份、提供及就餐质量/剩余独立；不固定一餐/营期或等营养量。零交接实际职责须实量链接集成一次。 缺通用数值范围不允许猜值，实际量/身份/覆盖未明确时限制最终使用。

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 实际履约住宿式多活动营参与者营期 (`camp_participant_session`)

一个真实履约、预先声明等价方案版本/时长/画像的参与者营期，含过夜住宿、膳食提供和多活动娱乐及支持。实际拒食或拒绝已提供活动不自动取消履约；预约容量非输出。

- 选定流：实际履约住宿式多活动营参与者营期
- 流属性/单位：Count / Item(s)
- 数量规则：1 Item(s)
- 数值来源模式：`fixed_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_camp_sessions`

范围证据需求：实际方案/参与者唯一ID、实际开始结束/时区偏移DST、履约与冲回证据；不同营期不能无限定等价，部分履行保留真实范围及责任。 缺通用数值范围不允许猜值，实际量/身份/覆盖未明确时限制最终使用。

##### 废物流

##### 基本流

###### 实际有独立证据的向空气排放化石二氧化碳 (`camp_direct_species_co2_fossil_air`)

仅在实际证据确认化石来源、二氧化碳物种和向空气直接释放时适用。保留报告的碳或CO2基准，碳转CO2须独立有证据的化学计量，不预设系数或发生。 本卡仅记录本节点实际直接释放，不重复计入外购电力上游或供应商已覆盖排放。UUID表示未细分子介质的空气排放，其他实际子介质或来源仍须在余项中匹配，不能改标；缺失数据不等于零。

- 选定流：二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 绑定：`fixed`
- 流属性/单位：Mass / kg
- 数量规则：在 cp_camp_releases 下，实际独占目标责任数量 / 正的相同画像 N_target 一次；已每参考流记录不变，N_target=0保留不除。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_camp_releases`

范围证据需求：确切物种/基准/颗粒/介质及原生测量或实际活动因子，独立组成/去向/状态元数据；完整因子不重复乘份额。 缺通用数值范围不允许猜值，实际量/身份/覆盖未明确时限制最终使用。

###### 实际有独立证据的向空气排放化石甲烷 (`camp_direct_species_methane_fossil_air`)

仅在实际证据确认化石来源、甲烷物种和向空气直接释放时适用。生物源或来源未知甲烷仍在余项要求中，不得改标化石源；不预设泄漏发生、气体比例、数量或排放系数。 本卡仅记录本节点实际直接释放，不重复计入外购电力上游或供应商已覆盖排放。UUID表示未细分子介质的空气排放，其他实际子介质或来源仍须在余项中匹配，不能改标；缺失数据不等于零。

- 选定流：甲烷 (化石源) `08a91e70-3ddc-11dd-9610-0050c2490048`
- 绑定：`fixed`
- 流属性/单位：Mass / kg
- 数量规则：在 cp_camp_releases 下，实际独占目标责任数量 / 正的相同画像 N_target 一次；已每参考流记录不变，N_target=0保留不除。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_camp_releases`

范围证据需求：确切物种/基准/颗粒/介质及原生测量或实际活动因子，独立组成/去向/状态元数据；完整因子不重复乘份额。 缺通用数值范围不允许猜值，实际量/身份/覆盖未明确时限制最终使用。

###### 实际有独立证据的向空气排放氧化亚氮 (`camp_direct_species_nitrous_oxide_air`)

仅在实际证据确认氧化亚氮物种及向空气直接释放时适用。原生数量为N2O质量，不是氮质量或氮气质量，不预设排放系数或发生。 本卡仅记录本节点实际直接释放，不重复计入外购电力上游或供应商已覆盖排放。UUID表示未细分子介质的空气排放，其他实际子介质或来源仍须在余项中匹配，不能改标；缺失数据不等于零。

- 选定流：一氧化二氮 `08a91e70-3ddc-11dd-94c3-0050c2490048`
- 绑定：`fixed`
- 流属性/单位：Mass / kg
- 数量规则：在 cp_camp_releases 下，实际独占目标责任数量 / 正的相同画像 N_target 一次；已每参考流记录不变，N_target=0保留不除。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_camp_releases`

范围证据需求：确切物种/基准/颗粒/介质及原生测量或实际活动因子，独立组成/去向/状态元数据；完整因子不重复乘份额。 缺通用数值范围不允许猜值，实际量/身份/覆盖未明确时限制最终使用。

### 过程：实际现场食品备制及膳食提供 (`on_site_meal_preparation`)

#### 输入

##### 产品流

###### 实际液态处理自来水供给 (`kitchen_recipe_water_liquid_tap`)

仅在实际来源确为处理后的自来水且用于所声明用途时适用。保留实际供应方、水质、温度状态和供应边界，不假定所有供水都是自来水。冰、瓶装矿泉水、再生水、未经处理的水及环境直接取水保留各自实际身份。沿用原卡原生质量或体积基准；最终换算为质量参考量时须有实际相容密度和状态证据，不能把目录中的次要体积关系作为默认现场密度。

- 选定流：自来水 `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- 绑定：`fixed`
- 流属性/单位：Volume / m3
- 数量规则：在 cp_kitchen_recipes 下，实际独占目标责任数量 / 正的相同画像 N_target 一次；已每参考流记录不变，N_target=0保留不除。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_kitchen_recipes`

范围证据需求：实际配方/批次/加入原生量/状态/来源，转换才用独立兼容密度温度/组成，不默认全部保留或废弃。 缺通用数值范围不允许猜值，实际量/身份/覆盖未明确时限制最终使用。

###### 实际液态处理自来水供给 (`kitchen_operating_water_liquid_tap`)

仅在实际来源确为处理后的自来水且用于所声明用途时适用。保留实际供应方、水质、温度状态和供应边界，不假定所有供水都是自来水。冰、瓶装矿泉水、再生水、未经处理的水及环境直接取水保留各自实际身份。沿用原卡原生质量或体积基准；最终换算为质量参考量时须有实际相容密度和状态证据，不能把目录中的次要体积关系作为默认现场密度。

- 选定流：自来水 `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- 绑定：`fixed`
- 流属性/单位：Volume / m3
- 数量规则：在 cp_kitchen_utilities 下，实际独占目标责任数量 / 正的相同画像 N_target 一次；已每参考流记录不变，N_target=0保留不除。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_kitchen_utilities`

范围证据需求：实际源/表计/用途/原生体积/时间、配方水排除和独立污水/保留/直接去向，无供水全去污水假设。 缺通用数值范围不允许猜值，实际量/身份/覆盖未明确时限制最终使用。

###### 实际使用点交流电 (`kitchen_electricity_ac`)

仅适用于实际跨越本节点边界、且未由完整供应商数据覆盖的交流电。该身份未特指供应方、电压、发电组合或交付线损归属，仍须按要求采集。经核实的电力流以1 MJ电能为基准，其ILCD属性名称为净热值；原生kWh按精确的3.6 MJ/kWh换算，不能套用燃料热值系数。直流电或其他不匹配电力状态保留在余项要求中。

- 选定流：交流电 `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- 绑定：`fixed`
- 流属性/单位：Energy / kWh
- 数量规则：在 cp_kitchen_utilities 下，实际独占目标责任数量 / 正的相同画像 N_target 一次；已每参考流记录不变，N_target=0保留不除。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_kitchen_utilities`

范围证据需求：实际电表/区间平均功率及匹配时长/转换、全部用户/期间和营地共表排除。 缺通用数值范围不允许猜值，实际量/身份/覆盖未明确时限制最终使用。

###### 实际外购交付的有效热量 (`kitchen_purchased_thermal_delivered_heat`)

仅记录有证据能量基准、实际跨越本节点边界交付的有效热量。保留供回状态、温度品位、覆盖范围及实际损失责任。通用热能身份不预设天然气、蒸汽质量、锅炉效率或温度；制冷、燃料能量及缺少蒸汽转能量证据的情形不使用该身份。

- 选定流：热能 `4f19a302-7b3b-11dd-ad8b-0800200c9a66`
- 绑定：`fixed`
- 流属性/单位：Energy / MJ
- 数量规则：在 cp_kitchen_utilities 下，实际独占目标责任数量 / 正的相同画像 N_target 一次；已每参考流记录不变，N_target=0保留不除。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_kitchen_utilities`

范围证据需求：实际供应商/有用交付能量/原生表计状态温度来源、全部用户份额与相同直接覆盖排除。 缺通用数值范围不允许猜值，实际量/身份/覆盖未明确时限制最终使用。

###### 实际独立记录的合成洗涤剂投入 (`kitchen_cleaning_materials_synthetic_detergent`)

仅适用于产品配方、供应状态及用途记录确认的实际合成表面活性洗涤剂。记录扣除包装皮重的材料净量，区分浓缩液与稀释水，整体配方与组分不得相加重复计入。肥皂、消毒剂、抹布、滤材等仍按各自实际身份记录，不预设清洁配方、剂量或发生。

- 选定流：洗涤剂 `1c57d123-df57-49ab-b9d4-957403beb8a5`
- 绑定：`fixed`
- 流属性/单位：Mass / kg
- 数量规则：在 cp_kitchen_supplies 下，实际独占目标责任数量 / 正的相同画像 N_target 一次；已每参考流记录不变，N_target=0保留不除。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_kitchen_supplies`

范围证据需求：实际原生净库存排包装皮重、匹配未用退回、职责及需要时组成密度；无统一消毒配方剂量/假定排放。 缺通用数值范围不允许猜值，实际量/身份/覆盖未明确时限制最终使用。

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 实际内部膳食提供服务交接 (`kitchen_meal_handoff`)

真实厨房提供在确定餐次/群体/参与者范围完成，有可供门槛、已供拒食及真实cover证据，备制/供应/剩余食品质量独立。与camp_internal_meals准确配对，不是另一最终营期或另一供应商负担。

- 选定流：实际内部膳食提供服务交接
- 流属性/单位：Count / Item(s)
- 数量规则：在 cp_kitchen_meal_deliveries 下，实际独占目标责任数量 / 正的相同画像 N_target 一次；已每参考流记录不变，N_target=0保留不除。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_kitchen_meal_deliveries`

范围证据需求：真实transfer/批次/目的方案/服务接受和物理膳食证据；Count不表示等食物质量/营养或每营期一餐。 缺通用数值范围不允许猜值，实际量/身份/覆盖未明确时限制最终使用。

##### 废物流

###### 实际未供预制食品废弃 (`kitchen_unserved_food_waste`)

实际预制但未供且确已丢弃的食品，独立于留存可用库存、被接受转移和备料废物。真实共桶只一接收总量，来源组分非相加。

本流身份仅适用于按实际计量状态记录的废弃人类食物或饮料。包装、餐具、清洁化学品和非食用备料残余需要各自的流身份。不同实际接收方的废物流保持分开；若与非食物材料真实混收，应核实整条混合废物流身份，本食物来源视图仅作为不可相加的审计记录。

- 选定流：食物残渣 `55feef47-26fa-48d1-bcf5-1eb581143bd7`
- 绑定：`fixed`
- 流属性/单位：Mass / kg
- 数量规则：在 cp_kitchen_fates 下，实际独占目标责任数量 / 正的相同画像 N_target 一次；已每参考流记录不变，N_target=0保留不除。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_kitchen_fates`

范围证据需求：真实批次/备制状态/库存去向/原生净量/接收覆盖；未供不自动废物或可用。 缺通用数值范围不允许猜值，实际量/身份/覆盖未明确时限制最终使用。

###### 实际就餐后餐盘剩余及返回废物 (`kitchen_plate_waste`)

实际服务后餐盘剩余/返回独立采集，不冲回已交付膳食提供服务，不成为第二次食材上游。与未供余量/备料残渣/包装区分，实际混收非相加。

本流身份仅适用于按实际计量状态记录的废弃人类食物或饮料。包装、餐具、清洁化学品和非食用备料残余需要各自的流身份。不同实际接收方的废物流保持分开；若与非食物材料真实混收，应核实整条混合废物流身份，本食物来源视图仅作为不可相加的审计记录。

- 选定流：食物残渣 `55feef47-26fa-48d1-bcf5-1eb581143bd7`
- 绑定：`fixed`
- 流属性/单位：Mass / kg
- 数量规则：在 cp_kitchen_fates 下，实际独占目标责任数量 / 正的相同画像 N_target 一次；已每参考流记录不变，N_target=0保留不除。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_kitchen_fates`

范围证据需求：实际餐次/供给群体/返回状态/原生量/接收及混桶来源视图，无每餐废物因子或消费推断。 缺通用数值范围不允许猜值，实际量/身份/覆盖未明确时限制最终使用。

###### 实际单独收集的纸类包装废物 (`kitchen_packaging_waste_paper_pack`)

仅适用于本节点实际独立废弃、单独收集的纸类包装，保留实际湿态或收集状态、组成、接收方及处理运输责任。污染或混收形成的混合流须使用其自身经核实的身份，材料组分仅作不可相加审计。仍在用的周转包装不是本废物，不预设组成、数量、回收或处理。

- 选定流：包装废弃物，纸类 `6b6f1025-cb6a-4c9d-9947-7726c4307a76`
- 绑定：`fixed`
- 流属性/单位：Mass / kg
- 数量规则：在 cp_kitchen_fates 下，实际独占目标责任数量 / 正的相同画像 N_target 一次；已每参考流记录不变，N_target=0保留不除。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_kitchen_fates`

范围证据需求：真实源/包装身份/原生净量/实际接收及覆盖；不按采购量或食品质量直接推废包装。 缺通用数值范围不允许猜值，实际量/身份/覆盖未明确时限制最终使用。

###### 实际单独收集的金属包装废物 (`kitchen_packaging_waste_metal_pack`)

仅适用于本节点实际独立废弃、单独收集的金属包装，保留实际湿态或收集状态、组成、接收方及处理运输责任。污染或混收形成的混合流须使用其自身经核实的身份，材料组分仅作不可相加审计。仍在用的周转包装不是本废物，不预设组成、数量、回收或处理。

- 选定流：金属包装废物 `cdda6013-c0c5-4c72-990a-f5668fe71069`
- 绑定：`fixed`
- 流属性/单位：Mass / kg
- 数量规则：在 cp_kitchen_fates 下，实际独占目标责任数量 / 正的相同画像 N_target 一次；已每参考流记录不变，N_target=0保留不除。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_kitchen_fates`

范围证据需求：真实源/包装身份/原生净量/实际接收及覆盖；不按采购量或食品质量直接推废包装。 缺通用数值范围不允许猜值，实际量/身份/覆盖未明确时限制最终使用。

##### 基本流

###### 实际有独立证据的向空气排放化石二氧化碳 (`kitchen_direct_species_co2_fossil_air`)

仅在实际证据确认化石来源、二氧化碳物种和向空气直接释放时适用。保留报告的碳或CO2基准，碳转CO2须独立有证据的化学计量，不预设系数或发生。 本卡仅记录本节点实际直接释放，不重复计入外购电力上游或供应商已覆盖排放。UUID表示未细分子介质的空气排放，其他实际子介质或来源仍须在余项中匹配，不能改标；缺失数据不等于零。

- 选定流：二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 绑定：`fixed`
- 流属性/单位：Mass / kg
- 数量规则：在 cp_kitchen_releases 下，实际独占目标责任数量 / 正的相同画像 N_target 一次；已每参考流记录不变，N_target=0保留不除。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_kitchen_releases`

范围证据需求：确切物种基准/颗粒/介质、原生量/活动因子及必要组成去向温压元数据，完整因子不重复乘份额。 缺通用数值范围不允许猜值，实际量/身份/覆盖未明确时限制最终使用。

###### 实际有独立证据的向空气排放化石甲烷 (`kitchen_direct_species_methane_fossil_air`)

仅在实际证据确认化石来源、甲烷物种和向空气直接释放时适用。生物源或来源未知甲烷仍在余项要求中，不得改标化石源；不预设泄漏发生、气体比例、数量或排放系数。 本卡仅记录本节点实际直接释放，不重复计入外购电力上游或供应商已覆盖排放。UUID表示未细分子介质的空气排放，其他实际子介质或来源仍须在余项中匹配，不能改标；缺失数据不等于零。

- 选定流：甲烷 (化石源) `08a91e70-3ddc-11dd-9610-0050c2490048`
- 绑定：`fixed`
- 流属性/单位：Mass / kg
- 数量规则：在 cp_kitchen_releases 下，实际独占目标责任数量 / 正的相同画像 N_target 一次；已每参考流记录不变，N_target=0保留不除。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_kitchen_releases`

范围证据需求：确切物种基准/颗粒/介质、原生量/活动因子及必要组成去向温压元数据，完整因子不重复乘份额。 缺通用数值范围不允许猜值，实际量/身份/覆盖未明确时限制最终使用。

###### 实际有独立证据的向空气排放氧化亚氮 (`kitchen_direct_species_nitrous_oxide_air`)

仅在实际证据确认氧化亚氮物种及向空气直接释放时适用。原生数量为N2O质量，不是氮质量或氮气质量，不预设排放系数或发生。 本卡仅记录本节点实际直接释放，不重复计入外购电力上游或供应商已覆盖排放。UUID表示未细分子介质的空气排放，其他实际子介质或来源仍须在余项中匹配，不能改标；缺失数据不等于零。

- 选定流：一氧化二氮 `08a91e70-3ddc-11dd-94c3-0050c2490048`
- 绑定：`fixed`
- 流属性/单位：Mass / kg
- 数量规则：在 cp_kitchen_releases 下，实际独占目标责任数量 / 正的相同画像 N_target 一次；已每参考流记录不变，N_target=0保留不除。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_kitchen_releases`

范围证据需求：确切物种基准/颗粒/介质、原生量/活动因子及必要组成去向温压元数据，完整因子不重复乘份额。 缺通用数值范围不允许猜值，实际量/身份/覆盖未明确时限制最终使用。

## 7. 分配与联产品处理

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| real_outputs_not_components | 营地及厨房产出 | 最终营期住宿膳食活动不是可删负担的共产品。真实其他营期/访客/接受可用食品有自己输出责任；必要支持员工餐按实际营地支持，不自动外部删去。真实部分履行有自身物理范围，不能每失败都当另一产品或盲摊所有真实部分给完整营期。 |  |
| complete_pool_responsibility | 全部资源池 | 实际直接追踪或相容实际quantity*target_driver/正且完整all_consumer_driver，包含所有客人支持员工访客其他项目期间。必要同池闲置待命取消未到失败仍进总量及实际负责真实输出，名义容量或仅记未分配台账不能删负担。未知归属阻断完整包。 |  |
| once_same_profile | 全部交换行 | 实际目标责任量除正的准确相同方案版本/时长/画像N_target一次。已每参考流不变，N0保留源接收解决不除；不同画像用自己量及分母非无限定平均营期。 |  |
| internal_meal_pair | 两节点交接 | 厨房kitchen_meal_handoff和营地camp_internal_meals同一实际transferID/提供态/对象餐次接收门槛/原生量及最终N一次。厨房清单通过真实内部服务一次归属，不能再加同职责完整购餐，不要求内部餐量等于1营期。 |  |
| zero_meal_real_integration | 实际内部产出为零时 | 零交接不传厨房负担。真实必要营地厨房职责必须通过互斥有据原生资源补充/聚合完成一次，含源接收时间owner覆盖；不编正膳食，缺实际集成阻断完整包。 |  |
| full_life_alluser | assets/providers | 建筑装修FF&E厨房活动复用完整制造安装维护实际更换终末，使用相容任务/完整全用户寿命驱动，已观察加有据剩余/终止不确定性更新。必要闲置属于真实池，年度N/名义容量非寿命；完整供应商或底层同职责互斥，实际缺阶段完成一次后使用。 |  |
| stock_and_returns | ingredients/materials/fuel | 同库存S=期初+净外收-期末含留存回收。毛S/N输入加匹配UNUSED同源同态退回/N输出，或耗用(S-return)/N输入并OMIT匹配输出；无双扣、损失删除、已用流体抵扣、跨库存抵或自动避免产品信用。 |  |
| receiver_nonadditive | food/fluids/assets/fates | 每个真实接收流按物质状态接收展开；真实共收一整流加非相加组分来源。整物/组成/内含/捕集/自由液区分，同资产供应商已含相同运输处理一次。可用转交须真实可用接受，不凭回收捐赠标签。 |  |


## 8. 前景数据采集、计算与质量规则

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_camp_utilities | camp_session_service | 实际本节点能水燃料 | 实际原始事件/表计/批次/库存/寿命记录 | record_id; node_id; site_id; programme_id; package_version; profile_id; cohort_id; participant_scope; reporting_period; interval_start; interval_end; time_zone; UTC_offset_start; UTC_offset_end; DST_resolution_source; source_record_links; actual_scope_population; actual_consumer_ids; all_consumer_record_links; raw_attributed_perreference_state; actual_direct_assignment_source; allocation_method_source; covered_provider_stages; coverage_owner; excluded_overlap_ids; uncertainty; sensitivity; update_trigger; necessary_idle_failed_pool_responsibility; carry_source_record; carry_receiving_record; carry_resolution_link; unassigned_responsibility_blocker; raw_quantity; raw_quantity_unit; raw_quantity_basis; raw_quantity_method; raw_quantity_state; raw_quantity_sample_time; raw_quantity_source; target_driver; target_driver_unit; target_driver_basis; target_driver_method; target_driver_state; target_driver_sample_time; target_driver_source; all_consumer_driver; all_consumer_driver_unit; all_consumer_driver_basis; all_consumer_driver_method; all_consumer_driver_state; all_consumer_driver_sample_time; all_consumer_driver_source; conversion_factor; conversion_factor_unit; conversion_factor_basis; conversion_factor_method; conversion_factor_state; conversion_factor_sample_time; conversion_factor_source; N_target; N_target_unit; N_target_basis; N_target_method; N_target_state; N_target_sample_time; N_target_source; utility_identity; carrier_SKU; supplier_gate; meter_id; register_or_interval; meter_valid_version; reset_rollover_adjustment_source; already_applied_multiplier; actual_estimate_status; averaging_population; actual_device_cycling_idle_scope; actual_thermal_delivery_state; thermal_provider_scope; fuel_stock_scope; matched_unused_fuel_return; actual_source_location; purchased_or_direct_source; camp_kitchen_meter_boundary; recipe_water_exclusion; register_open; register_open_unit; register_open_basis; register_open_method; register_open_state; register_open_sample_time; register_open_source; register_close; register_close_unit; register_close_basis; register_close_method; register_close_state; register_close_sample_time; register_close_source; register_adjustment; register_adjustment_unit; register_adjustment_basis; register_adjustment_method; register_adjustment_state; register_adjustment_sample_time; register_adjustment_source; meter_multiplier; meter_multiplier_unit; meter_multiplier_basis; meter_multiplier_method; meter_multiplier_state; meter_multiplier_sample_time; meter_multiplier_source; interval_quantity; interval_quantity_unit; interval_quantity_basis; interval_quantity_method; interval_quantity_state; interval_quantity_sample_time; interval_quantity_source; interval_average_power; interval_average_power_unit; interval_average_power_basis; interval_average_power_method; interval_average_power_state; interval_average_power_sample_time; interval_average_power_source; elapsed_duration; elapsed_duration_unit; elapsed_duration_basis; elapsed_duration_method; elapsed_duration_state; elapsed_duration_sample_time; elapsed_duration_source; fuel_opening; fuel_opening_unit; fuel_opening_basis; fuel_opening_method; fuel_opening_state; fuel_opening_sample_time; fuel_opening_source; net_fuel_receipts; net_fuel_receipts_unit; net_fuel_receipts_basis; net_fuel_receipts_method; net_fuel_receipts_state; net_fuel_receipts_sample_time; net_fuel_receipts_source; fuel_closing_including_recovery; fuel_closing_including_recovery_unit; fuel_closing_including_recovery_basis; fuel_closing_including_recovery_method; fuel_closing_including_recovery_state; fuel_closing_including_recovery_sample_time; fuel_closing_including_recovery_source; unused_fuel_return; unused_fuel_return_unit; unused_fuel_return_basis; unused_fuel_return_method; unused_fuel_return_state; unused_fuel_return_sample_time; unused_fuel_return_source; actual_burn; actual_burn_unit; actual_burn_basis; actual_burn_method; actual_burn_state; actual_burn_sample_time; actual_burn_source; density; density_unit; density_basis; density_method; density_state; density_sample_time; density_source; density_temperature; density_temperature_unit; density_temperature_basis; density_temperature_method; density_temperature_state; density_temperature_sample_time; density_temperature_source; density_pressure; density_pressure_unit; density_pressure_basis; density_pressure_method; density_pressure_state; density_pressure_sample_time; density_pressure_source; useful_thermal_energy; useful_thermal_energy_unit; useful_thermal_energy_basis; useful_thermal_energy_method; useful_thermal_energy_state; useful_thermal_energy_sample_time; useful_thermal_energy_source; delivered_temperature; delivered_temperature_unit; delivered_temperature_basis; delivered_temperature_method; delivered_temperature_state; delivered_temperature_sample_time; delivered_temperature_source; water_supply_volume; water_supply_volume_unit; water_supply_volume_basis; water_supply_volume_method; water_supply_volume_state; water_supply_volume_sample_time; water_supply_volume_source; flow_row_id; actual_identity_case; actual_substance_or_material; actual_origin_and_medium; actual_state_and_gate; case_activation_evidence; typed_or_residual_quantity; quantity_exclusion_links; whole_total_reconciliation; unresolved_occurrence_not_zero | 读取相容真实表底及复位翻转调整，或实际积分区间量；未应用过时才乘倍率/转换。功率乘时长仅同实际区间平均且含循环保温待机，非铭牌瞬时，已kWh不能再乘时长。燃料库存和燃烧量独立；净收货排包装/钢瓶皮重，留存回收在期末。实际转换须独立体积密度温压来源；购有用热冷与其燃料/转换设施互斥。营地真实住宿活动卫浴热水支持就绪及厨房真实备制烹饪冷藏保温排风洗涤清洁按自己节点及共表分项排除，配方水按真实用途独立，供水不能测污水。 真实目标直接追踪，或兼容实际quantity*target_driver/正且完整all_consumer_driver，每个运算量具有原生单位/基准/方法/状态/采样时间/来源。必要同池待命关闭取消未到失败纳入总量，再归真实输出责任，不留无主容量份额。真实其他/部分输出有自身有据范围，不能全盲摊给无关完整营期。目标归属量除正相同画像N_target一次；已每参考流不变，N0保留源/接收/解决链接，未归属阻断完整使用。 | Actual energy kWh/MJ, fuel mass/volume, water m3 and each native conversion/state/time unit | 每个真实事件/批次/交接及相容表计库存寿命期间 | 实际营期餐次任务库存报告及全资产寿命阶段，跨期源接收解决链接 | 真实营地厨房及职责内全部消费者供应商接收端 | 每参考流 | 每个独立运算量原生单位/基准/方法/状态/采样时间/来源；实际接受校准覆盖全用户及不确定性，未知非零 |
| cp_camp_supplies | camp_session_service | 实际本节点物资库存退回 | 实际原始事件/表计/批次/库存/寿命记录 | record_id; node_id; site_id; programme_id; package_version; profile_id; cohort_id; participant_scope; reporting_period; interval_start; interval_end; time_zone; UTC_offset_start; UTC_offset_end; DST_resolution_source; source_record_links; actual_scope_population; actual_consumer_ids; all_consumer_record_links; raw_attributed_perreference_state; actual_direct_assignment_source; allocation_method_source; covered_provider_stages; coverage_owner; excluded_overlap_ids; uncertainty; sensitivity; update_trigger; necessary_idle_failed_pool_responsibility; carry_source_record; carry_receiving_record; carry_resolution_link; unassigned_responsibility_blocker; raw_quantity; raw_quantity_unit; raw_quantity_basis; raw_quantity_method; raw_quantity_state; raw_quantity_sample_time; raw_quantity_source; target_driver; target_driver_unit; target_driver_basis; target_driver_method; target_driver_state; target_driver_sample_time; target_driver_source; all_consumer_driver; all_consumer_driver_unit; all_consumer_driver_basis; all_consumer_driver_method; all_consumer_driver_state; all_consumer_driver_sample_time; all_consumer_driver_source; conversion_factor; conversion_factor_unit; conversion_factor_basis; conversion_factor_method; conversion_factor_state; conversion_factor_sample_time; conversion_factor_source; N_target; N_target_unit; N_target_basis; N_target_method; N_target_state; N_target_sample_time; N_target_source; material_SKU; formulation_identity; actual_purpose; source_input_row; stock_scope_id; gross_or_consumed_view; matched_unused_return_id; actual_receiver_acceptance; internal_recovery_ids; EACH_or_TOTAL; composition_definition; composition_source; prepared_solution_concentrate_nonadditive; waste_fate_links; opening_stock; opening_stock_unit; opening_stock_basis; opening_stock_method; opening_stock_state; opening_stock_sample_time; opening_stock_source; receipt_gross; receipt_gross_unit; receipt_gross_basis; receipt_gross_method; receipt_gross_state; receipt_gross_sample_time; receipt_gross_source; receipt_container_tare; receipt_container_tare_unit; receipt_container_tare_basis; receipt_container_tare_method; receipt_container_tare_state; receipt_container_tare_sample_time; receipt_container_tare_source; net_external_receipts; net_external_receipts_unit; net_external_receipts_basis; net_external_receipts_method; net_external_receipts_state; net_external_receipts_sample_time; net_external_receipts_source; closing_stock_including_recovery; closing_stock_including_recovery_unit; closing_stock_including_recovery_basis; closing_stock_including_recovery_method; closing_stock_including_recovery_state; closing_stock_including_recovery_sample_time; closing_stock_including_recovery_source; matched_unused_return; matched_unused_return_unit; matched_unused_return_basis; matched_unused_return_method; matched_unused_return_state; matched_unused_return_sample_time; matched_unused_return_source; actual_count; actual_count_unit; actual_count_basis; actual_count_method; actual_count_state; actual_count_sample_time; actual_count_source; per_piece_mass; per_piece_mass_unit; per_piece_mass_basis; per_piece_mass_method; per_piece_mass_state; per_piece_mass_sample_time; per_piece_mass_source; actual_use; actual_use_unit; actual_use_basis; actual_use_method; actual_use_state; actual_use_sample_time; actual_use_source; actual_loss; actual_loss_unit; actual_loss_basis; actual_loss_method; actual_loss_state; actual_loss_sample_time; actual_loss_source; density; density_unit; density_basis; density_method; density_state; density_sample_time; density_source; density_temperature; density_temperature_unit; density_temperature_basis; density_temperature_method; density_temperature_state; density_temperature_sample_time; density_temperature_source; composition_fraction; composition_fraction_unit; composition_fraction_basis; composition_fraction_method; composition_fraction_state; composition_fraction_sample_time; composition_fraction_source; flow_row_id; actual_identity_case; actual_substance_or_material; actual_origin_and_medium; actual_state_and_gate; case_activation_evidence; typed_or_residual_quantity; quantity_exclusion_links; whole_total_reconciliation; unresolved_occurrence_not_zero | 每个实际独立SKU/状态库存，净外部收货排供应容器皮重且状态单位兼容，期初加净收减期末含留存回收一次。选毛S/N输入加同源同态UNUSED未用退回/N输出，或耗用(S-unused_return)/N输入并OMIT省略匹配输出。禁止双扣、已用流体/复用资产/无关库存混抵。成品溶液或浓缩剂加稀释组分择一，已含水不另加；EACH实际件数一次、TOTAL不变，废物保留原供给负担。 真实目标直接追踪，或兼容实际quantity*target_driver/正且完整all_consumer_driver，每个运算量具有原生单位/基准/方法/状态/采样时间/来源。必要同池待命关闭取消未到失败纳入总量，再归真实输出责任，不留无主容量份额。真实其他/部分输出有自身有据范围，不能全盲摊给无关完整营期。目标归属量除正相同画像N_target一次；已每参考流不变，N0保留源/接收/解决链接，未归属阻断完整使用。 | Each actual material-native quantity, kg if compatible; independent item/volume/density/composition units | 每个真实事件/批次/交接及相容表计库存寿命期间 | 实际营期餐次任务库存报告及全资产寿命阶段，跨期源接收解决链接 | 真实营地厨房及职责内全部消费者供应商接收端 | 每参考流 | 每个独立运算量原生单位/基准/方法/状态/采样时间/来源；实际接受校准覆盖全用户及不确定性，未知非零 |
| cp_camp_assets | camp_session_service | 实际本节点全寿命资产场地 | 实际原始事件/表计/批次/库存/寿命记录 | record_id; node_id; site_id; programme_id; package_version; profile_id; cohort_id; participant_scope; reporting_period; interval_start; interval_end; time_zone; UTC_offset_start; UTC_offset_end; DST_resolution_source; source_record_links; actual_scope_population; actual_consumer_ids; all_consumer_record_links; raw_attributed_perreference_state; actual_direct_assignment_source; allocation_method_source; covered_provider_stages; coverage_owner; excluded_overlap_ids; uncertainty; sensitivity; update_trigger; necessary_idle_failed_pool_responsibility; carry_source_record; carry_receiving_record; carry_resolution_link; unassigned_responsibility_blocker; raw_quantity; raw_quantity_unit; raw_quantity_basis; raw_quantity_method; raw_quantity_state; raw_quantity_sample_time; raw_quantity_source; target_driver; target_driver_unit; target_driver_basis; target_driver_method; target_driver_state; target_driver_sample_time; target_driver_source; all_consumer_driver; all_consumer_driver_unit; all_consumer_driver_basis; all_consumer_driver_method; all_consumer_driver_state; all_consumer_driver_sample_time; all_consumer_driver_source; conversion_factor; conversion_factor_unit; conversion_factor_basis; conversion_factor_method; conversion_factor_state; conversion_factor_sample_time; conversion_factor_source; N_target; N_target_unit; N_target_basis; N_target_method; N_target_state; N_target_sample_time; N_target_source; asset_id; component_id; asset_BOM_role; actual_asset_state; actual_site_land_occupation_transformation_scope; land_prior_after_state; land_coverage_owner; actual_land_dataset_link; land_quantity; land_quantity_unit; land_quantity_basis; land_quantity_method; land_quantity_state; land_quantity_sample_time; land_quantity_source; physical_owner; operator_responsibility; node_component_scope; all_user_all_period_records; manufacture_install_scope; maintenance_event_ids; replacement_event_ids; EOL_scope; observed_history_source; remaining_service_source; termination_method_source; equivalence_definition_source; idle_capacity_responsibility_in_numerator; provider_fullasset_overlap; actual_retirement_or_usable_transfer; receiver_id; remaining_life_owner; whole_part_retained_content_exclusion; identical_EOL_transport_treatment_coverage; asset_native_quantity; asset_native_quantity_unit; asset_native_quantity_basis; asset_native_quantity_method; asset_native_quantity_state; asset_native_quantity_sample_time; asset_native_quantity_source; component_native_quantity; component_native_quantity_unit; component_native_quantity_basis; component_native_quantity_method; component_native_quantity_state; component_native_quantity_sample_time; component_native_quantity_source; job_used_driver; job_used_driver_unit; job_used_driver_basis; job_used_driver_method; job_used_driver_state; job_used_driver_sample_time; job_used_driver_source; observed_all_user_driver; observed_all_user_driver_unit; observed_all_user_driver_basis; observed_all_user_driver_method; observed_all_user_driver_state; observed_all_user_driver_sample_time; observed_all_user_driver_source; sourced_remaining_driver; sourced_remaining_driver_unit; sourced_remaining_driver_basis; sourced_remaining_driver_method; sourced_remaining_driver_state; sourced_remaining_driver_sample_time; sourced_remaining_driver_source; complete_lifetime_driver; complete_lifetime_driver_unit; complete_lifetime_driver_basis; complete_lifetime_driver_method; complete_lifetime_driver_state; complete_lifetime_driver_sample_time; complete_lifetime_driver_source; driver_equivalence; driver_equivalence_unit; driver_equivalence_basis; driver_equivalence_method; driver_equivalence_state; driver_equivalence_sample_time; driver_equivalence_source; actual_item_count; actual_item_count_unit; actual_item_count_basis; actual_item_count_method; actual_item_count_state; actual_item_count_sample_time; actual_item_count_source; native_unit_mass; native_unit_mass_unit; native_unit_mass_basis; native_unit_mass_method; native_unit_mass_state; native_unit_mass_sample_time; native_unit_mass_source; retired_net_mass; retired_net_mass_unit; retired_net_mass_basis; retired_net_mass_method; retired_net_mass_state; retired_net_mass_sample_time; retired_net_mass_source; retained_component_mass; retained_component_mass_unit; retained_component_mass_basis; retained_component_mass_method; retained_component_mass_state; retained_component_mass_sample_time; retained_component_mass_source | 清点营地建筑场地工程装修FF&E共享系统活动结构/器材安全ICT织物支持，以及厨房餐厅建筑份额冷/热/排风/洗涤设备台面器具餐具支持的完整制造安装维护实际更换终末，各按自己节点覆盖。使用任务、已观察、来源支持剩余及全用户完整寿命驱动各具独立原生证据/等价/终止/不确定性更新；Lifetime=observed+sourced remaining相容全用户责任，非年度N/省闲置容量。容量日历驱动也须归必要闲置待命给真实池。全资产或完整供应商择一，真实缺职责实际完成一次集成。整物组成混合内含非相加，实际可用/废弃及剩余责任真实，相同终末运输处理一次。实际营地、活动场地及厨房的土地占用和真实土地转变接口，在选定全链职责内时须列入场地/资产/供应商覆盖矩阵。采集真实空间时间边界、前后土地状态、原生面积/时间或转变数量及独立单位/基准/方法/状态/采样时间/来源和覆盖owner；相同资产/供应商已含接口不重复。实际未覆盖接口必须在全链使用前完成有据原生量/状态/时间/owner/覆盖集成，否则不完整。不从营地营销推土地类别、转变或因子，不将土地数量当Count资产单位。 真实目标直接追踪，或兼容实际quantity*target_driver/正且完整all_consumer_driver，每个运算量具有原生单位/基准/方法/状态/采样时间/来源。必要同池待命关闭取消未到失败纳入总量，再归真实输出责任，不留无主容量份额。真实其他/部分输出有自身有据范围，不能全盲摊给无关完整营期。目标归属量除正相同画像N_target一次；已每参考流不变，N0保留源/接收/解决链接，未归属阻断完整使用。 | Actual asset/component native quantity and compatible job/observed/remaining/lifetime driver; Item(s) equivalents only with evidence | 每个真实事件/批次/交接及相容表计库存寿命期间 | 实际营期餐次任务库存报告及全资产寿命阶段，跨期源接收解决链接 | 真实营地厨房及职责内全部消费者供应商接收端 | 每参考流 | 每个独立运算量原生单位/基准/方法/状态/采样时间/来源；实际接受校准覆盖全用户及不确定性，未知非零 |
| cp_camp_providers | camp_session_service | 实际本节点互补物理服务 | 实际原始事件/表计/批次/库存/寿命记录 | record_id; node_id; site_id; programme_id; package_version; profile_id; cohort_id; participant_scope; reporting_period; interval_start; interval_end; time_zone; UTC_offset_start; UTC_offset_end; DST_resolution_source; source_record_links; actual_scope_population; actual_consumer_ids; all_consumer_record_links; raw_attributed_perreference_state; actual_direct_assignment_source; allocation_method_source; covered_provider_stages; coverage_owner; excluded_overlap_ids; uncertainty; sensitivity; update_trigger; necessary_idle_failed_pool_responsibility; carry_source_record; carry_receiving_record; carry_resolution_link; unassigned_responsibility_blocker; raw_quantity; raw_quantity_unit; raw_quantity_basis; raw_quantity_method; raw_quantity_state; raw_quantity_sample_time; raw_quantity_source; target_driver; target_driver_unit; target_driver_basis; target_driver_method; target_driver_state; target_driver_sample_time; target_driver_source; all_consumer_driver; all_consumer_driver_unit; all_consumer_driver_basis; all_consumer_driver_method; all_consumer_driver_state; all_consumer_driver_sample_time; all_consumer_driver_source; conversion_factor; conversion_factor_unit; conversion_factor_basis; conversion_factor_method; conversion_factor_state; conversion_factor_sample_time; conversion_factor_source; N_target; N_target_unit; N_target_basis; N_target_method; N_target_state; N_target_sample_time; N_target_source; provider_id; contract_service_id; actual_result_id; performed_available_declined_failed_status; actual_result_gate; native_result_definition; source_quality_acceptance; actual_other_clients; actual_service_covered_material_energy_water; covered_assets_laundry_freight_receiver; missing_actual_stages; completed_integration_dataset_link; integration_time; integration_time_zone; integration_owner_source; raw_converted_attributed_perreference_package_state; actual_direct_overlap_exclusions; actual_native_result; actual_native_result_unit; actual_native_result_basis; actual_native_result_method; actual_native_result_state; actual_native_result_sample_time; actual_native_result_source; physical_equivalence; physical_equivalence_unit; physical_equivalence_basis; physical_equivalence_method; physical_equivalence_state; physical_equivalence_sample_time; physical_equivalence_source; completed_missing_stage_quantity; completed_missing_stage_quantity_unit; completed_missing_stage_quantity_basis; completed_missing_stage_quantity_method; completed_missing_stage_quantity_state; completed_missing_stage_quantity_sample_time; completed_missing_stage_quantity_source | 采集真实互补物理服务结果/质量/范围，费用工资订单小时不自动等Item(s)。实际结果/可供门槛、材料能水/资产洗涤运输接收及全部客户明确。营地真实外包活动清洁支持不删完整膳食住宿娱乐；厨房不能虚构完整外包餐替代现场备制或重复已含食材烹饪。未已转换归属时才应用等价/份额。真实缺职责须在全链使用前完成原生量/来源/时间/owner/覆盖链接一次集成，计划补充不算完成。 真实目标直接追踪，或兼容实际quantity*target_driver/正且完整all_consumer_driver，每个运算量具有原生单位/基准/方法/状态/采样时间/来源。必要同池待命关闭取消未到失败纳入总量，再归真实输出责任，不留无主容量份额。真实其他/部分输出有自身有据范围，不能全盲摊给无关完整营期。目标归属量除正相同画像N_target一次；已每参考流不变，N0保留源/接收/解决链接，未归属阻断完整使用。 | Actual provider-native result and evidenced dimensional equivalence; Item(s) only when truly supported | 每个真实事件/批次/交接及相容表计库存寿命期间 | 实际营期餐次任务库存报告及全资产寿命阶段，跨期源接收解决链接 | 真实营地厨房及职责内全部消费者供应商接收端 | 每参考流 | 每个独立运算量原生单位/基准/方法/状态/采样时间/来源；实际接受校准覆盖全用户及不确定性，未知非零 |
| cp_camp_fluids | camp_session_service | 实际本节点流体库存去向 | 实际原始事件/表计/批次/库存/寿命记录 | record_id; node_id; site_id; programme_id; package_version; profile_id; cohort_id; participant_scope; reporting_period; interval_start; interval_end; time_zone; UTC_offset_start; UTC_offset_end; DST_resolution_source; source_record_links; actual_scope_population; actual_consumer_ids; all_consumer_record_links; raw_attributed_perreference_state; actual_direct_assignment_source; allocation_method_source; covered_provider_stages; coverage_owner; excluded_overlap_ids; uncertainty; sensitivity; update_trigger; necessary_idle_failed_pool_responsibility; carry_source_record; carry_receiving_record; carry_resolution_link; unassigned_responsibility_blocker; raw_quantity; raw_quantity_unit; raw_quantity_basis; raw_quantity_method; raw_quantity_state; raw_quantity_sample_time; raw_quantity_source; target_driver; target_driver_unit; target_driver_basis; target_driver_method; target_driver_state; target_driver_sample_time; target_driver_source; all_consumer_driver; all_consumer_driver_unit; all_consumer_driver_basis; all_consumer_driver_method; all_consumer_driver_state; all_consumer_driver_sample_time; all_consumer_driver_source; conversion_factor; conversion_factor_unit; conversion_factor_basis; conversion_factor_method; conversion_factor_state; conversion_factor_sample_time; conversion_factor_source; N_target; N_target_unit; N_target_basis; N_target_method; N_target_state; N_target_sample_time; N_target_source; system_id; fluid_chemical_blend_SKU; composition_definition_source; lot_charge_role_id; disjoint_stock_role_membership; factory_charge_asset_owner; new_factory_receipt_not_opening_or_other_receipt; other_receipt_exit_named_exclusion_ids; standalone_supply_source; UNUSED_substock_id; same_source_same_state_unused_evidence; matched_unused_return_id; used_recovery_source_state; internal_charge_recovery_transfer_ids; retained_recovery_or_external_exit; receiver_id; usable_Waste_acceptance; whole_asset_part_capture_retained_content_exclusion; exact_species_medium_release_link; stock_view; treatment_transport_asset_provider_coverage; opening_installed; opening_installed_unit; opening_installed_basis; opening_installed_method; opening_installed_state; opening_installed_sample_time; opening_installed_source; opening_stored_excluding_recovered; opening_stored_excluding_recovered_unit; opening_stored_excluding_recovered_basis; opening_stored_excluding_recovered_method; opening_stored_excluding_recovered_state; opening_stored_excluding_recovered_sample_time; opening_stored_excluding_recovered_source; opening_recovered; opening_recovered_unit; opening_recovered_basis; opening_recovered_method; opening_recovered_state; opening_recovered_sample_time; opening_recovered_source; new_factory_charge_receipt; new_factory_charge_receipt_unit; new_factory_charge_receipt_basis; new_factory_charge_receipt_method; new_factory_charge_receipt_state; new_factory_charge_receipt_sample_time; new_factory_charge_receipt_source; net_standalone_receipts; net_standalone_receipts_unit; net_standalone_receipts_basis; net_standalone_receipts_method; net_standalone_receipts_state; net_standalone_receipts_sample_time; net_standalone_receipts_source; other_actual_receipts_excluding_named; other_actual_receipts_excluding_named_unit; other_actual_receipts_excluding_named_basis; other_actual_receipts_excluding_named_method; other_actual_receipts_excluding_named_state; other_actual_receipts_excluding_named_sample_time; other_actual_receipts_excluding_named_source; closing_installed; closing_installed_unit; closing_installed_basis; closing_installed_method; closing_installed_state; closing_installed_sample_time; closing_installed_source; closing_stored_excluding_recovered; closing_stored_excluding_recovered_unit; closing_stored_excluding_recovered_basis; closing_stored_excluding_recovered_method; closing_stored_excluding_recovered_state; closing_stored_excluding_recovered_sample_time; closing_stored_excluding_recovered_source; closing_recovered; closing_recovered_unit; closing_recovered_basis; closing_recovered_method; closing_recovered_state; closing_recovered_sample_time; closing_recovered_source; unused_standalone_return; unused_standalone_return_unit; unused_standalone_return_basis; unused_standalone_return_method; unused_standalone_return_state; unused_standalone_return_sample_time; unused_standalone_return_source; usable_used_recovery_export; usable_used_recovery_export_unit; usable_used_recovery_export_basis; usable_used_recovery_export_method; usable_used_recovery_export_state; usable_used_recovery_export_sample_time; usable_used_recovery_export_source; contained_fluid_waste; contained_fluid_waste_unit; contained_fluid_waste_basis; contained_fluid_waste_method; contained_fluid_waste_state; contained_fluid_waste_sample_time; contained_fluid_waste_source; retained_in_whole_asset_waste; retained_in_whole_asset_waste_unit; retained_in_whole_asset_waste_basis; retained_in_whole_asset_waste_method; retained_in_whole_asset_waste_state; retained_in_whole_asset_waste_sample_time; retained_in_whole_asset_waste_source; retained_in_part_waste; retained_in_part_waste_unit; retained_in_part_waste_basis; retained_in_part_waste_method; retained_in_part_waste_state; retained_in_part_waste_sample_time; retained_in_part_waste_source; actual_direct_release; actual_direct_release_unit; actual_direct_release_basis; actual_direct_release_method; actual_direct_release_state; actual_direct_release_sample_time; actual_direct_release_source; other_actual_exits_excluding_named; other_actual_exits_excluding_named_unit; other_actual_exits_excluding_named_basis; other_actual_exits_excluding_named_method; other_actual_exits_excluding_named_state; other_actual_exits_excluding_named_sample_time; other_actual_exits_excluding_named_source; explicit_unknown_residual; explicit_unknown_residual_unit; explicit_unknown_residual_basis; explicit_unknown_residual_method; explicit_unknown_residual_state; explicit_unknown_residual_sample_time; explicit_unknown_residual_source; component_fraction; component_fraction_unit; component_fraction_basis; component_fraction_method; component_fraction_state; component_fraction_sample_time; component_fraction_source | 追踪真实化学物/混合物/系统与互斥库存充注批次角色。储存不含另列回收库存，工厂新充注仅真实新进入，不能又期初或OTHER收货；其他项排所有已命名项。内部充回抵消不当新供应。独立实际收货库存输出废物整物内含测量及明确未知对账；未知/补充非排放或零。工厂充注上游只全资产或真实补充一次。仅UNUSED同源同态独立子库存且真实匹配未用退回可耗用扣除并OMIT输出；所有USED已用回收流体不论工厂或独立来源均真实状态独立输出，不能当新料抵制造/负输入/自动信用。实际收集Waste与直接物种介质分开，整物组成非相加。 真实目标直接追踪，或兼容实际quantity*target_driver/正且完整all_consumer_driver，每个运算量具有原生单位/基准/方法/状态/采样时间/来源。必要同池待命关闭取消未到失败纳入总量，再归真实输出责任，不留无主容量份额。真实其他/部分输出有自身有据范围，不能全盲摊给无关完整营期。目标归属量除正相同画像N_target一次；已每参考流不变，N0保留源/接收/解决链接，未归属阻断完整使用。 | Actual native chemical/blend/component mass and compatible sourced conversion; no default composition or leakage | 每个真实事件/批次/交接及相容表计库存寿命期间 | 实际营期餐次任务库存报告及全资产寿命阶段，跨期源接收解决链接 | 真实营地厨房及职责内全部消费者供应商接收端 | 每参考流 | 每个独立运算量原生单位/基准/方法/状态/采样时间/来源；实际接受校准覆盖全用户及不确定性，未知非零 |
| cp_camp_freight | camp_session_service | 实际本节点唯一实际运输 | 实际原始事件/表计/批次/库存/寿命记录 | record_id; node_id; site_id; programme_id; package_version; profile_id; cohort_id; participant_scope; reporting_period; interval_start; interval_end; time_zone; UTC_offset_start; UTC_offset_end; DST_resolution_source; source_record_links; actual_scope_population; actual_consumer_ids; all_consumer_record_links; raw_attributed_perreference_state; actual_direct_assignment_source; allocation_method_source; covered_provider_stages; coverage_owner; excluded_overlap_ids; uncertainty; sensitivity; update_trigger; necessary_idle_failed_pool_responsibility; carry_source_record; carry_receiving_record; carry_resolution_link; unassigned_responsibility_blocker; raw_quantity; raw_quantity_unit; raw_quantity_basis; raw_quantity_method; raw_quantity_state; raw_quantity_sample_time; raw_quantity_source; target_driver; target_driver_unit; target_driver_basis; target_driver_method; target_driver_state; target_driver_sample_time; target_driver_source; all_consumer_driver; all_consumer_driver_unit; all_consumer_driver_basis; all_consumer_driver_method; all_consumer_driver_state; all_consumer_driver_sample_time; all_consumer_driver_source; conversion_factor; conversion_factor_unit; conversion_factor_basis; conversion_factor_method; conversion_factor_state; conversion_factor_sample_time; conversion_factor_source; N_target; N_target_unit; N_target_basis; N_target_method; N_target_state; N_target_sample_time; N_target_source; load_id; leg_id; unique_load_leg_key; cargo_membership_ids; EACH_or_TOTAL; actual_packed_wet_dry_state; original_added_pack_supports; gross_scope; noncargo_tare_scope; provider_delivered_coverage; receiver_transport_coverage; empty_return_coverage; direct_already_attributed_state; record_share_source; payload; payload_unit; payload_basis; payload_method; payload_state; payload_sample_time; payload_source; vehicle_gross; vehicle_gross_unit; vehicle_gross_basis; vehicle_gross_method; vehicle_gross_state; vehicle_gross_sample_time; vehicle_gross_source; vehicle_noncargo_tare; vehicle_noncargo_tare_unit; vehicle_noncargo_tare_basis; vehicle_noncargo_tare_method; vehicle_noncargo_tare_state; vehicle_noncargo_tare_sample_time; vehicle_noncargo_tare_source; repeated_load_count; repeated_load_count_unit; repeated_load_count_basis; repeated_load_count_method; repeated_load_count_state; repeated_load_count_sample_time; repeated_load_count_source; distance; distance_unit; distance_basis; distance_method; distance_state; distance_sample_time; distance_source; payload_conversion; payload_conversion_unit; payload_conversion_basis; payload_conversion_method; payload_conversion_state; payload_conversion_sample_time; payload_conversion_source; gross_conversion; gross_conversion_unit; gross_conversion_basis; gross_conversion_method; gross_conversion_state; gross_conversion_sample_time; gross_conversion_source; tare_conversion; tare_conversion_unit; tare_conversion_basis; tare_conversion_method; tare_conversion_state; tare_conversion_sample_time; tare_conversion_source; distance_conversion; distance_conversion_unit; distance_conversion_basis; distance_conversion_method; distance_conversion_state; distance_conversion_sample_time; distance_conversion_source; that_record_share; that_record_share_unit; that_record_share_basis; that_record_share_method; that_record_share_state; that_record_share_sample_time; that_record_share_source | 真实整个运载载荷或相容同态车辆毛重仅减非货物车辆皮重，保留食物织物水分及所有载运包装容器支撑；可食干物/干织物洗量非载荷。EACH真实次数一次，TOTAL不变。该记录相容目标/正完整全用户物理份额在唯一SUM(payload*distance*that_record_share)内部，先原生换算再合计后正同目标N一次。已归属/已份额/每参考流不重复。供应商交付接收空返职责一次，不能把游客交通伪装货运。 真实目标直接追踪，或兼容实际quantity*target_driver/正且完整all_consumer_driver，每个运算量具有原生单位/基准/方法/状态/采样时间/来源。必要同池待命关闭取消未到失败纳入总量，再归真实输出责任，不留无主容量份额。真实其他/部分输出有自身有据范围，不能全盲摊给无关完整营期。目标归属量除正相同画像N_target一次；已每参考流不变，N0保留源/接收/解决链接，未归属阻断完整使用。 | Each actual native mass/distance/count and compatible kg*km conversion | 每个真实事件/批次/交接及相容表计库存寿命期间 | 实际营期餐次任务库存报告及全资产寿命阶段，跨期源接收解决链接 | 真实营地厨房及职责内全部消费者供应商接收端 | 每参考流 | 每个独立运算量原生单位/基准/方法/状态/采样时间/来源；实际接受校准覆盖全用户及不确定性，未知非零 |
| cp_camp_fates | camp_session_service | 实际本节点真实接收环境接口 | 实际原始事件/表计/批次/库存/寿命记录 | record_id; node_id; site_id; programme_id; package_version; profile_id; cohort_id; participant_scope; reporting_period; interval_start; interval_end; time_zone; UTC_offset_start; UTC_offset_end; DST_resolution_source; source_record_links; actual_scope_population; actual_consumer_ids; all_consumer_record_links; raw_attributed_perreference_state; actual_direct_assignment_source; allocation_method_source; covered_provider_stages; coverage_owner; excluded_overlap_ids; uncertainty; sensitivity; update_trigger; necessary_idle_failed_pool_responsibility; carry_source_record; carry_receiving_record; carry_resolution_link; unassigned_responsibility_blocker; raw_quantity; raw_quantity_unit; raw_quantity_basis; raw_quantity_method; raw_quantity_state; raw_quantity_sample_time; raw_quantity_source; target_driver; target_driver_unit; target_driver_basis; target_driver_method; target_driver_state; target_driver_sample_time; target_driver_source; all_consumer_driver; all_consumer_driver_unit; all_consumer_driver_basis; all_consumer_driver_method; all_consumer_driver_state; all_consumer_driver_sample_time; all_consumer_driver_source; conversion_factor; conversion_factor_unit; conversion_factor_basis; conversion_factor_method; conversion_factor_state; conversion_factor_sample_time; conversion_factor_source; N_target; N_target_unit; N_target_basis; N_target_method; N_target_state; N_target_sample_time; N_target_source; actual_stream_id; origin_material_asset_batch_participant; origin_guest_operator_provider; collection_responsibility; source_event_id; receiver_id; actual_useful_Waste_status_source; actual_usable_acceptance; contained_or_direct_medium; environmental_source_location; mixture_or_separate_stream; mixture_membership_source; nonadditive_origin_component_view; actual_plate_return_not_unserved; retained_prepared_stock_exclusion; whole_part_content_exclusions; actual_treatment_transport_owner; identical_asset_provider_EOL_coverage; unused_supply_return_match; composition_definition_source; actual_fate_source; actual_received_net_quantity; actual_received_net_quantity_unit; actual_received_net_quantity_basis; actual_received_net_quantity_method; actual_received_net_quantity_state; actual_received_net_quantity_sample_time; actual_received_net_quantity_source; actual_source_withdrawal_volume; actual_source_withdrawal_volume_unit; actual_source_withdrawal_volume_basis; actual_source_withdrawal_volume_method; actual_source_withdrawal_volume_state; actual_source_withdrawal_volume_sample_time; actual_source_withdrawal_volume_source; contained_effluent_volume; contained_effluent_volume_unit; contained_effluent_volume_basis; contained_effluent_volume_method; contained_effluent_volume_state; contained_effluent_volume_sample_time; contained_effluent_volume_source; whole_stream_mass; whole_stream_mass_unit; whole_stream_mass_basis; whole_stream_mass_method; whole_stream_mass_state; whole_stream_mass_sample_time; whole_stream_mass_source; component_quantity; component_quantity_unit; component_quantity_basis; component_quantity_method; component_quantity_state; component_quantity_sample_time; component_quantity_source; food_retained_water; food_retained_water_unit; food_retained_water_basis; food_retained_water_method; food_retained_water_state; food_retained_water_sample_time; food_retained_water_source; retained_chemical_fluid; retained_chemical_fluid_unit; retained_chemical_fluid_basis; retained_chemical_fluid_method; retained_chemical_fluid_state; retained_chemical_fluid_sample_time; retained_chemical_fluid_source; density; density_unit; density_basis; density_method; density_state; density_sample_time; density_source; density_temperature; density_temperature_unit; density_temperature_basis; density_temperature_method; density_temperature_state; density_temperature_sample_time; density_temperature_source; actual_usable_transfer_mass; actual_usable_transfer_mass_unit; actual_usable_transfer_mass_basis; actual_usable_transfer_mass_method; actual_usable_transfer_mass_state; actual_usable_transfer_mass_sample_time; actual_usable_transfer_mass_source; actual_unserved_discard_mass; actual_unserved_discard_mass_unit; actual_unserved_discard_mass_basis; actual_unserved_discard_mass_method; actual_unserved_discard_mass_state; actual_unserved_discard_mass_sample_time; actual_unserved_discard_mass_source; actual_plate_return_mass; actual_plate_return_mass_unit; actual_plate_return_mass_basis; actual_plate_return_mass_method; actual_plate_return_mass_state; actual_plate_return_mass_sample_time; actual_plate_return_mass_source; actual_packaging_mass; actual_packaging_mass_unit; actual_packaging_mass_basis; actual_packaging_mass_method; actual_packaging_mass_state; actual_packaging_mass_sample_time; actual_packaging_mass_source | 营地真实参与者/经营者垃圾清洁包装污水职责不导入游客自购食品材料制造。厨房独立识别真实备料废、未供预制丢弃、就餐后餐盘返回、包装、用过清洁和废水；餐后剩余不冲回已履约膳食，不新增食材上游。真实共同桶ONE一个接收总量加非相加来源组成，非几个可加输出。留存预制库存或有据接收可用转交非自动废物。每个真实不同接收流展开；真实混合整流或互斥组成择一。收集污水流体Waste，直接蒸气须Mass空气物种证据，不以供水减未知当污水。实际直接取水与购水独立，有真实独立设施须复核。相同资产供应商已含接收运输处理一次，真实缺处理须完成集成。 真实目标直接追踪，或兼容实际quantity*target_driver/正且完整all_consumer_driver，每个运算量具有原生单位/基准/方法/状态/采样时间/来源。必要同池待命关闭取消未到失败纳入总量，再归真实输出责任，不留无主容量份额。真实其他/部分输出有自身有据范围，不能全盲摊给无关完整营期。目标归属量除正相同画像N_target一次；已每参考流不变，N0保留源/接收/解决链接，未归属阻断完整使用。 | Each actual stream/component native mass/volume/content; independent compatible density/temperature if used | 每个真实事件/批次/交接及相容表计库存寿命期间 | 实际营期餐次任务库存报告及全资产寿命阶段，跨期源接收解决链接 | 真实营地厨房及职责内全部消费者供应商接收端 | 每参考流 | 每个独立运算量原生单位/基准/方法/状态/采样时间/来源；实际接受校准覆盖全用户及不确定性，未知非零 |
| cp_camp_releases | camp_session_service | 实际本节点物种介质排放 | 实际原始事件/表计/批次/库存/寿命记录 | record_id; node_id; site_id; programme_id; package_version; profile_id; cohort_id; participant_scope; reporting_period; interval_start; interval_end; time_zone; UTC_offset_start; UTC_offset_end; DST_resolution_source; source_record_links; actual_scope_population; actual_consumer_ids; all_consumer_record_links; raw_attributed_perreference_state; actual_direct_assignment_source; allocation_method_source; covered_provider_stages; coverage_owner; excluded_overlap_ids; uncertainty; sensitivity; update_trigger; necessary_idle_failed_pool_responsibility; carry_source_record; carry_receiving_record; carry_resolution_link; unassigned_responsibility_blocker; raw_quantity; raw_quantity_unit; raw_quantity_basis; raw_quantity_method; raw_quantity_state; raw_quantity_sample_time; raw_quantity_source; target_driver; target_driver_unit; target_driver_basis; target_driver_method; target_driver_state; target_driver_sample_time; target_driver_source; all_consumer_driver; all_consumer_driver_unit; all_consumer_driver_basis; all_consumer_driver_method; all_consumer_driver_state; all_consumer_driver_sample_time; all_consumer_driver_source; conversion_factor; conversion_factor_unit; conversion_factor_basis; conversion_factor_method; conversion_factor_state; conversion_factor_sample_time; conversion_factor_source; N_target; N_target_unit; N_target_basis; N_target_method; N_target_state; N_target_sample_time; N_target_source; event_id; actual_operation_system_batch; exact_species_identity; reported_component_or_blend_basis; particle_size_class; receiving_medium; environmental_location; measurement_population; factor_identity_source; factor_complete_composition_fate_coverage; composition_method_source; actual_fate_basis_source; gas_state_method; unknown_residual_status; contained_capture_exclusion; provider_asset_release_coverage; measured_species_quantity; measured_species_quantity_unit; measured_species_quantity_basis; measured_species_quantity_method; measured_species_quantity_state; measured_species_quantity_sample_time; measured_species_quantity_source; actual_activity; actual_activity_unit; actual_activity_basis; actual_activity_method; actual_activity_state; actual_activity_sample_time; actual_activity_source; emission_factor; emission_factor_unit; emission_factor_basis; emission_factor_method; emission_factor_state; emission_factor_sample_time; emission_factor_source; composition_fraction; composition_fraction_unit; composition_fraction_basis; composition_fraction_method; composition_fraction_state; composition_fraction_sample_time; composition_fraction_source; fate_fraction; fate_fraction_unit; fate_fraction_basis; fate_fraction_method; fate_fraction_state; fate_fraction_sample_time; fate_fraction_source; gas_conversion_factor; gas_conversion_factor_unit; gas_conversion_factor_basis; gas_conversion_factor_method; gas_conversion_factor_state; gas_conversion_factor_sample_time; gas_conversion_factor_source; gas_temperature; gas_temperature_unit; gas_temperature_basis; gas_temperature_method; gas_temperature_state; gas_temperature_sample_time; gas_temperature_source; gas_pressure; gas_pressure_unit; gas_pressure_basis; gas_pressure_method; gas_pressure_state; gas_pressure_sample_time; gas_pressure_source; actual_elapsed_duration; actual_elapsed_duration_unit; actual_elapsed_duration_basis; actual_elapsed_duration_method; actual_elapsed_duration_state; actual_elapsed_duration_sample_time; actual_elapsed_duration_source; flow_row_id; actual_identity_case; actual_substance_or_material; actual_origin_and_medium; actual_state_and_gate; case_activation_evidence; typed_or_residual_quantity; quantity_exclusion_links; whole_total_reconciliation; unresolved_occurrence_not_zero | 具体绑定前确认确切真实物质/基准/颗粒及空气水土介质。独立测得物种量或兼容实际活动乘适用因子，每个量有原生单位/基准/方法/状态/时间/源。仅真实方法需要且完整因子未含时应用组成/去向/气体换算一次。水蒸气实际Mass-to-air，非收集Waste；食品水损沸腾补充库存差气味本身不定量或证明零。排放混合制冷剂组成不能默认供应组成，捕集收集/供应商已含不是第二直接排放。 真实目标直接追踪，或兼容实际quantity*target_driver/正且完整all_consumer_driver，每个运算量具有原生单位/基准/方法/状态/采样时间/来源。必要同池待命关闭取消未到失败纳入总量，再归真实输出责任，不留无主容量份额。真实其他/部分输出有自身有据范围，不能全盲摊给无关完整营期。目标归属量除正相同画像N_target一次；已每参考流不变，N0保留源/接收/解决链接，未归属阻断完整使用。 | Each actual native species/activity/factor/fraction/gas temperature-pressure unit | 每个真实事件/批次/交接及相容表计库存寿命期间 | 实际营期餐次任务库存报告及全资产寿命阶段，跨期源接收解决链接 | 真实营地厨房及职责内全部消费者供应商接收端 | 每参考流 | 每个独立运算量原生单位/基准/方法/状态/采样时间/来源；实际接受校准覆盖全用户及不确定性，未知非零 |
| cp_kitchen_utilities | on_site_meal_preparation | 实际本节点能水燃料 | 实际原始事件/表计/批次/库存/寿命记录 | record_id; node_id; site_id; programme_id; package_version; profile_id; cohort_id; participant_scope; reporting_period; interval_start; interval_end; time_zone; UTC_offset_start; UTC_offset_end; DST_resolution_source; source_record_links; actual_scope_population; actual_consumer_ids; all_consumer_record_links; raw_attributed_perreference_state; actual_direct_assignment_source; allocation_method_source; covered_provider_stages; coverage_owner; excluded_overlap_ids; uncertainty; sensitivity; update_trigger; necessary_idle_failed_pool_responsibility; carry_source_record; carry_receiving_record; carry_resolution_link; unassigned_responsibility_blocker; raw_quantity; raw_quantity_unit; raw_quantity_basis; raw_quantity_method; raw_quantity_state; raw_quantity_sample_time; raw_quantity_source; target_driver; target_driver_unit; target_driver_basis; target_driver_method; target_driver_state; target_driver_sample_time; target_driver_source; all_consumer_driver; all_consumer_driver_unit; all_consumer_driver_basis; all_consumer_driver_method; all_consumer_driver_state; all_consumer_driver_sample_time; all_consumer_driver_source; conversion_factor; conversion_factor_unit; conversion_factor_basis; conversion_factor_method; conversion_factor_state; conversion_factor_sample_time; conversion_factor_source; N_target; N_target_unit; N_target_basis; N_target_method; N_target_state; N_target_sample_time; N_target_source; utility_identity; carrier_SKU; supplier_gate; meter_id; register_or_interval; meter_valid_version; reset_rollover_adjustment_source; already_applied_multiplier; actual_estimate_status; averaging_population; actual_device_cycling_idle_scope; actual_thermal_delivery_state; thermal_provider_scope; fuel_stock_scope; matched_unused_fuel_return; actual_source_location; purchased_or_direct_source; camp_kitchen_meter_boundary; recipe_water_exclusion; register_open; register_open_unit; register_open_basis; register_open_method; register_open_state; register_open_sample_time; register_open_source; register_close; register_close_unit; register_close_basis; register_close_method; register_close_state; register_close_sample_time; register_close_source; register_adjustment; register_adjustment_unit; register_adjustment_basis; register_adjustment_method; register_adjustment_state; register_adjustment_sample_time; register_adjustment_source; meter_multiplier; meter_multiplier_unit; meter_multiplier_basis; meter_multiplier_method; meter_multiplier_state; meter_multiplier_sample_time; meter_multiplier_source; interval_quantity; interval_quantity_unit; interval_quantity_basis; interval_quantity_method; interval_quantity_state; interval_quantity_sample_time; interval_quantity_source; interval_average_power; interval_average_power_unit; interval_average_power_basis; interval_average_power_method; interval_average_power_state; interval_average_power_sample_time; interval_average_power_source; elapsed_duration; elapsed_duration_unit; elapsed_duration_basis; elapsed_duration_method; elapsed_duration_state; elapsed_duration_sample_time; elapsed_duration_source; fuel_opening; fuel_opening_unit; fuel_opening_basis; fuel_opening_method; fuel_opening_state; fuel_opening_sample_time; fuel_opening_source; net_fuel_receipts; net_fuel_receipts_unit; net_fuel_receipts_basis; net_fuel_receipts_method; net_fuel_receipts_state; net_fuel_receipts_sample_time; net_fuel_receipts_source; fuel_closing_including_recovery; fuel_closing_including_recovery_unit; fuel_closing_including_recovery_basis; fuel_closing_including_recovery_method; fuel_closing_including_recovery_state; fuel_closing_including_recovery_sample_time; fuel_closing_including_recovery_source; unused_fuel_return; unused_fuel_return_unit; unused_fuel_return_basis; unused_fuel_return_method; unused_fuel_return_state; unused_fuel_return_sample_time; unused_fuel_return_source; actual_burn; actual_burn_unit; actual_burn_basis; actual_burn_method; actual_burn_state; actual_burn_sample_time; actual_burn_source; density; density_unit; density_basis; density_method; density_state; density_sample_time; density_source; density_temperature; density_temperature_unit; density_temperature_basis; density_temperature_method; density_temperature_state; density_temperature_sample_time; density_temperature_source; density_pressure; density_pressure_unit; density_pressure_basis; density_pressure_method; density_pressure_state; density_pressure_sample_time; density_pressure_source; useful_thermal_energy; useful_thermal_energy_unit; useful_thermal_energy_basis; useful_thermal_energy_method; useful_thermal_energy_state; useful_thermal_energy_sample_time; useful_thermal_energy_source; delivered_temperature; delivered_temperature_unit; delivered_temperature_basis; delivered_temperature_method; delivered_temperature_state; delivered_temperature_sample_time; delivered_temperature_source; water_supply_volume; water_supply_volume_unit; water_supply_volume_basis; water_supply_volume_method; water_supply_volume_state; water_supply_volume_sample_time; water_supply_volume_source; flow_row_id; actual_identity_case; actual_substance_or_material; actual_origin_and_medium; actual_state_and_gate; case_activation_evidence; typed_or_residual_quantity; quantity_exclusion_links; whole_total_reconciliation; unresolved_occurrence_not_zero | 读取相容真实表底及复位翻转调整，或实际积分区间量；未应用过时才乘倍率/转换。功率乘时长仅同实际区间平均且含循环保温待机，非铭牌瞬时，已kWh不能再乘时长。燃料库存和燃烧量独立；净收货排包装/钢瓶皮重，留存回收在期末。实际转换须独立体积密度温压来源；购有用热冷与其燃料/转换设施互斥。营地真实住宿活动卫浴热水支持就绪及厨房真实备制烹饪冷藏保温排风洗涤清洁按自己节点及共表分项排除，配方水按真实用途独立，供水不能测污水。 真实目标直接追踪，或兼容实际quantity*target_driver/正且完整all_consumer_driver，每个运算量具有原生单位/基准/方法/状态/采样时间/来源。必要同池待命关闭取消未到失败纳入总量，再归真实输出责任，不留无主容量份额。真实其他/部分输出有自身有据范围，不能全盲摊给无关完整营期。目标归属量除正相同画像N_target一次；已每参考流不变，N0保留源/接收/解决链接，未归属阻断完整使用。 | Actual energy kWh/MJ, fuel mass/volume, water m3 and each native conversion/state/time unit | 每个真实事件/批次/交接及相容表计库存寿命期间 | 实际营期餐次任务库存报告及全资产寿命阶段，跨期源接收解决链接 | 真实营地厨房及职责内全部消费者供应商接收端 | 每参考流 | 每个独立运算量原生单位/基准/方法/状态/采样时间/来源；实际接受校准覆盖全用户及不确定性，未知非零 |
| cp_kitchen_supplies | on_site_meal_preparation | 实际本节点物资库存退回 | 实际原始事件/表计/批次/库存/寿命记录 | record_id; node_id; site_id; programme_id; package_version; profile_id; cohort_id; participant_scope; reporting_period; interval_start; interval_end; time_zone; UTC_offset_start; UTC_offset_end; DST_resolution_source; source_record_links; actual_scope_population; actual_consumer_ids; all_consumer_record_links; raw_attributed_perreference_state; actual_direct_assignment_source; allocation_method_source; covered_provider_stages; coverage_owner; excluded_overlap_ids; uncertainty; sensitivity; update_trigger; necessary_idle_failed_pool_responsibility; carry_source_record; carry_receiving_record; carry_resolution_link; unassigned_responsibility_blocker; raw_quantity; raw_quantity_unit; raw_quantity_basis; raw_quantity_method; raw_quantity_state; raw_quantity_sample_time; raw_quantity_source; target_driver; target_driver_unit; target_driver_basis; target_driver_method; target_driver_state; target_driver_sample_time; target_driver_source; all_consumer_driver; all_consumer_driver_unit; all_consumer_driver_basis; all_consumer_driver_method; all_consumer_driver_state; all_consumer_driver_sample_time; all_consumer_driver_source; conversion_factor; conversion_factor_unit; conversion_factor_basis; conversion_factor_method; conversion_factor_state; conversion_factor_sample_time; conversion_factor_source; N_target; N_target_unit; N_target_basis; N_target_method; N_target_state; N_target_sample_time; N_target_source; material_SKU; formulation_identity; actual_purpose; source_input_row; stock_scope_id; gross_or_consumed_view; matched_unused_return_id; actual_receiver_acceptance; internal_recovery_ids; EACH_or_TOTAL; composition_definition; composition_source; prepared_solution_concentrate_nonadditive; waste_fate_links; opening_stock; opening_stock_unit; opening_stock_basis; opening_stock_method; opening_stock_state; opening_stock_sample_time; opening_stock_source; receipt_gross; receipt_gross_unit; receipt_gross_basis; receipt_gross_method; receipt_gross_state; receipt_gross_sample_time; receipt_gross_source; receipt_container_tare; receipt_container_tare_unit; receipt_container_tare_basis; receipt_container_tare_method; receipt_container_tare_state; receipt_container_tare_sample_time; receipt_container_tare_source; net_external_receipts; net_external_receipts_unit; net_external_receipts_basis; net_external_receipts_method; net_external_receipts_state; net_external_receipts_sample_time; net_external_receipts_source; closing_stock_including_recovery; closing_stock_including_recovery_unit; closing_stock_including_recovery_basis; closing_stock_including_recovery_method; closing_stock_including_recovery_state; closing_stock_including_recovery_sample_time; closing_stock_including_recovery_source; matched_unused_return; matched_unused_return_unit; matched_unused_return_basis; matched_unused_return_method; matched_unused_return_state; matched_unused_return_sample_time; matched_unused_return_source; actual_count; actual_count_unit; actual_count_basis; actual_count_method; actual_count_state; actual_count_sample_time; actual_count_source; per_piece_mass; per_piece_mass_unit; per_piece_mass_basis; per_piece_mass_method; per_piece_mass_state; per_piece_mass_sample_time; per_piece_mass_source; actual_use; actual_use_unit; actual_use_basis; actual_use_method; actual_use_state; actual_use_sample_time; actual_use_source; actual_loss; actual_loss_unit; actual_loss_basis; actual_loss_method; actual_loss_state; actual_loss_sample_time; actual_loss_source; density; density_unit; density_basis; density_method; density_state; density_sample_time; density_source; density_temperature; density_temperature_unit; density_temperature_basis; density_temperature_method; density_temperature_state; density_temperature_sample_time; density_temperature_source; composition_fraction; composition_fraction_unit; composition_fraction_basis; composition_fraction_method; composition_fraction_state; composition_fraction_sample_time; composition_fraction_source; flow_row_id; actual_identity_case; actual_substance_or_material; actual_origin_and_medium; actual_state_and_gate; case_activation_evidence; typed_or_residual_quantity; quantity_exclusion_links; whole_total_reconciliation; unresolved_occurrence_not_zero | 每个实际独立SKU/状态库存，净外部收货排供应容器皮重且状态单位兼容，期初加净收减期末含留存回收一次。选毛S/N输入加同源同态UNUSED未用退回/N输出，或耗用(S-unused_return)/N输入并OMIT省略匹配输出。禁止双扣、已用流体/复用资产/无关库存混抵。成品溶液或浓缩剂加稀释组分择一，已含水不另加；EACH实际件数一次、TOTAL不变，废物保留原供给负担。 真实目标直接追踪，或兼容实际quantity*target_driver/正且完整all_consumer_driver，每个运算量具有原生单位/基准/方法/状态/采样时间/来源。必要同池待命关闭取消未到失败纳入总量，再归真实输出责任，不留无主容量份额。真实其他/部分输出有自身有据范围，不能全盲摊给无关完整营期。目标归属量除正相同画像N_target一次；已每参考流不变，N0保留源/接收/解决链接，未归属阻断完整使用。 | Each actual material-native quantity, kg if compatible; independent item/volume/density/composition units | 每个真实事件/批次/交接及相容表计库存寿命期间 | 实际营期餐次任务库存报告及全资产寿命阶段，跨期源接收解决链接 | 真实营地厨房及职责内全部消费者供应商接收端 | 每参考流 | 每个独立运算量原生单位/基准/方法/状态/采样时间/来源；实际接受校准覆盖全用户及不确定性，未知非零 |
| cp_kitchen_assets | on_site_meal_preparation | 实际本节点全寿命资产场地 | 实际原始事件/表计/批次/库存/寿命记录 | record_id; node_id; site_id; programme_id; package_version; profile_id; cohort_id; participant_scope; reporting_period; interval_start; interval_end; time_zone; UTC_offset_start; UTC_offset_end; DST_resolution_source; source_record_links; actual_scope_population; actual_consumer_ids; all_consumer_record_links; raw_attributed_perreference_state; actual_direct_assignment_source; allocation_method_source; covered_provider_stages; coverage_owner; excluded_overlap_ids; uncertainty; sensitivity; update_trigger; necessary_idle_failed_pool_responsibility; carry_source_record; carry_receiving_record; carry_resolution_link; unassigned_responsibility_blocker; raw_quantity; raw_quantity_unit; raw_quantity_basis; raw_quantity_method; raw_quantity_state; raw_quantity_sample_time; raw_quantity_source; target_driver; target_driver_unit; target_driver_basis; target_driver_method; target_driver_state; target_driver_sample_time; target_driver_source; all_consumer_driver; all_consumer_driver_unit; all_consumer_driver_basis; all_consumer_driver_method; all_consumer_driver_state; all_consumer_driver_sample_time; all_consumer_driver_source; conversion_factor; conversion_factor_unit; conversion_factor_basis; conversion_factor_method; conversion_factor_state; conversion_factor_sample_time; conversion_factor_source; N_target; N_target_unit; N_target_basis; N_target_method; N_target_state; N_target_sample_time; N_target_source; asset_id; component_id; asset_BOM_role; actual_asset_state; actual_site_land_occupation_transformation_scope; land_prior_after_state; land_coverage_owner; actual_land_dataset_link; land_quantity; land_quantity_unit; land_quantity_basis; land_quantity_method; land_quantity_state; land_quantity_sample_time; land_quantity_source; physical_owner; operator_responsibility; node_component_scope; all_user_all_period_records; manufacture_install_scope; maintenance_event_ids; replacement_event_ids; EOL_scope; observed_history_source; remaining_service_source; termination_method_source; equivalence_definition_source; idle_capacity_responsibility_in_numerator; provider_fullasset_overlap; actual_retirement_or_usable_transfer; receiver_id; remaining_life_owner; whole_part_retained_content_exclusion; identical_EOL_transport_treatment_coverage; asset_native_quantity; asset_native_quantity_unit; asset_native_quantity_basis; asset_native_quantity_method; asset_native_quantity_state; asset_native_quantity_sample_time; asset_native_quantity_source; component_native_quantity; component_native_quantity_unit; component_native_quantity_basis; component_native_quantity_method; component_native_quantity_state; component_native_quantity_sample_time; component_native_quantity_source; job_used_driver; job_used_driver_unit; job_used_driver_basis; job_used_driver_method; job_used_driver_state; job_used_driver_sample_time; job_used_driver_source; observed_all_user_driver; observed_all_user_driver_unit; observed_all_user_driver_basis; observed_all_user_driver_method; observed_all_user_driver_state; observed_all_user_driver_sample_time; observed_all_user_driver_source; sourced_remaining_driver; sourced_remaining_driver_unit; sourced_remaining_driver_basis; sourced_remaining_driver_method; sourced_remaining_driver_state; sourced_remaining_driver_sample_time; sourced_remaining_driver_source; complete_lifetime_driver; complete_lifetime_driver_unit; complete_lifetime_driver_basis; complete_lifetime_driver_method; complete_lifetime_driver_state; complete_lifetime_driver_sample_time; complete_lifetime_driver_source; driver_equivalence; driver_equivalence_unit; driver_equivalence_basis; driver_equivalence_method; driver_equivalence_state; driver_equivalence_sample_time; driver_equivalence_source; actual_item_count; actual_item_count_unit; actual_item_count_basis; actual_item_count_method; actual_item_count_state; actual_item_count_sample_time; actual_item_count_source; native_unit_mass; native_unit_mass_unit; native_unit_mass_basis; native_unit_mass_method; native_unit_mass_state; native_unit_mass_sample_time; native_unit_mass_source; retired_net_mass; retired_net_mass_unit; retired_net_mass_basis; retired_net_mass_method; retired_net_mass_state; retired_net_mass_sample_time; retired_net_mass_source; retained_component_mass; retained_component_mass_unit; retained_component_mass_basis; retained_component_mass_method; retained_component_mass_state; retained_component_mass_sample_time; retained_component_mass_source | 清点营地建筑场地工程装修FF&E共享系统活动结构/器材安全ICT织物支持，以及厨房餐厅建筑份额冷/热/排风/洗涤设备台面器具餐具支持的完整制造安装维护实际更换终末，各按自己节点覆盖。使用任务、已观察、来源支持剩余及全用户完整寿命驱动各具独立原生证据/等价/终止/不确定性更新；Lifetime=observed+sourced remaining相容全用户责任，非年度N/省闲置容量。容量日历驱动也须归必要闲置待命给真实池。全资产或完整供应商择一，真实缺职责实际完成一次集成。整物组成混合内含非相加，实际可用/废弃及剩余责任真实，相同终末运输处理一次。实际营地、活动场地及厨房的土地占用和真实土地转变接口，在选定全链职责内时须列入场地/资产/供应商覆盖矩阵。采集真实空间时间边界、前后土地状态、原生面积/时间或转变数量及独立单位/基准/方法/状态/采样时间/来源和覆盖owner；相同资产/供应商已含接口不重复。实际未覆盖接口必须在全链使用前完成有据原生量/状态/时间/owner/覆盖集成，否则不完整。不从营地营销推土地类别、转变或因子，不将土地数量当Count资产单位。 真实目标直接追踪，或兼容实际quantity*target_driver/正且完整all_consumer_driver，每个运算量具有原生单位/基准/方法/状态/采样时间/来源。必要同池待命关闭取消未到失败纳入总量，再归真实输出责任，不留无主容量份额。真实其他/部分输出有自身有据范围，不能全盲摊给无关完整营期。目标归属量除正相同画像N_target一次；已每参考流不变，N0保留源/接收/解决链接，未归属阻断完整使用。 | Actual asset/component native quantity and compatible job/observed/remaining/lifetime driver; Item(s) equivalents only with evidence | 每个真实事件/批次/交接及相容表计库存寿命期间 | 实际营期餐次任务库存报告及全资产寿命阶段，跨期源接收解决链接 | 真实营地厨房及职责内全部消费者供应商接收端 | 每参考流 | 每个独立运算量原生单位/基准/方法/状态/采样时间/来源；实际接受校准覆盖全用户及不确定性，未知非零 |
| cp_kitchen_providers | on_site_meal_preparation | 实际本节点互补物理服务 | 实际原始事件/表计/批次/库存/寿命记录 | record_id; node_id; site_id; programme_id; package_version; profile_id; cohort_id; participant_scope; reporting_period; interval_start; interval_end; time_zone; UTC_offset_start; UTC_offset_end; DST_resolution_source; source_record_links; actual_scope_population; actual_consumer_ids; all_consumer_record_links; raw_attributed_perreference_state; actual_direct_assignment_source; allocation_method_source; covered_provider_stages; coverage_owner; excluded_overlap_ids; uncertainty; sensitivity; update_trigger; necessary_idle_failed_pool_responsibility; carry_source_record; carry_receiving_record; carry_resolution_link; unassigned_responsibility_blocker; raw_quantity; raw_quantity_unit; raw_quantity_basis; raw_quantity_method; raw_quantity_state; raw_quantity_sample_time; raw_quantity_source; target_driver; target_driver_unit; target_driver_basis; target_driver_method; target_driver_state; target_driver_sample_time; target_driver_source; all_consumer_driver; all_consumer_driver_unit; all_consumer_driver_basis; all_consumer_driver_method; all_consumer_driver_state; all_consumer_driver_sample_time; all_consumer_driver_source; conversion_factor; conversion_factor_unit; conversion_factor_basis; conversion_factor_method; conversion_factor_state; conversion_factor_sample_time; conversion_factor_source; N_target; N_target_unit; N_target_basis; N_target_method; N_target_state; N_target_sample_time; N_target_source; provider_id; contract_service_id; actual_result_id; performed_available_declined_failed_status; actual_result_gate; native_result_definition; source_quality_acceptance; actual_other_clients; actual_service_covered_material_energy_water; covered_assets_laundry_freight_receiver; missing_actual_stages; completed_integration_dataset_link; integration_time; integration_time_zone; integration_owner_source; raw_converted_attributed_perreference_package_state; actual_direct_overlap_exclusions; actual_native_result; actual_native_result_unit; actual_native_result_basis; actual_native_result_method; actual_native_result_state; actual_native_result_sample_time; actual_native_result_source; physical_equivalence; physical_equivalence_unit; physical_equivalence_basis; physical_equivalence_method; physical_equivalence_state; physical_equivalence_sample_time; physical_equivalence_source; completed_missing_stage_quantity; completed_missing_stage_quantity_unit; completed_missing_stage_quantity_basis; completed_missing_stage_quantity_method; completed_missing_stage_quantity_state; completed_missing_stage_quantity_sample_time; completed_missing_stage_quantity_source | 采集真实互补物理服务结果/质量/范围，费用工资订单小时不自动等Item(s)。实际结果/可供门槛、材料能水/资产洗涤运输接收及全部客户明确。营地真实外包活动清洁支持不删完整膳食住宿娱乐；厨房不能虚构完整外包餐替代现场备制或重复已含食材烹饪。未已转换归属时才应用等价/份额。真实缺职责须在全链使用前完成原生量/来源/时间/owner/覆盖链接一次集成，计划补充不算完成。 真实目标直接追踪，或兼容实际quantity*target_driver/正且完整all_consumer_driver，每个运算量具有原生单位/基准/方法/状态/采样时间/来源。必要同池待命关闭取消未到失败纳入总量，再归真实输出责任，不留无主容量份额。真实其他/部分输出有自身有据范围，不能全盲摊给无关完整营期。目标归属量除正相同画像N_target一次；已每参考流不变，N0保留源/接收/解决链接，未归属阻断完整使用。 | Actual provider-native result and evidenced dimensional equivalence; Item(s) only when truly supported | 每个真实事件/批次/交接及相容表计库存寿命期间 | 实际营期餐次任务库存报告及全资产寿命阶段，跨期源接收解决链接 | 真实营地厨房及职责内全部消费者供应商接收端 | 每参考流 | 每个独立运算量原生单位/基准/方法/状态/采样时间/来源；实际接受校准覆盖全用户及不确定性，未知非零 |
| cp_kitchen_fluids | on_site_meal_preparation | 实际本节点流体库存去向 | 实际原始事件/表计/批次/库存/寿命记录 | record_id; node_id; site_id; programme_id; package_version; profile_id; cohort_id; participant_scope; reporting_period; interval_start; interval_end; time_zone; UTC_offset_start; UTC_offset_end; DST_resolution_source; source_record_links; actual_scope_population; actual_consumer_ids; all_consumer_record_links; raw_attributed_perreference_state; actual_direct_assignment_source; allocation_method_source; covered_provider_stages; coverage_owner; excluded_overlap_ids; uncertainty; sensitivity; update_trigger; necessary_idle_failed_pool_responsibility; carry_source_record; carry_receiving_record; carry_resolution_link; unassigned_responsibility_blocker; raw_quantity; raw_quantity_unit; raw_quantity_basis; raw_quantity_method; raw_quantity_state; raw_quantity_sample_time; raw_quantity_source; target_driver; target_driver_unit; target_driver_basis; target_driver_method; target_driver_state; target_driver_sample_time; target_driver_source; all_consumer_driver; all_consumer_driver_unit; all_consumer_driver_basis; all_consumer_driver_method; all_consumer_driver_state; all_consumer_driver_sample_time; all_consumer_driver_source; conversion_factor; conversion_factor_unit; conversion_factor_basis; conversion_factor_method; conversion_factor_state; conversion_factor_sample_time; conversion_factor_source; N_target; N_target_unit; N_target_basis; N_target_method; N_target_state; N_target_sample_time; N_target_source; system_id; fluid_chemical_blend_SKU; composition_definition_source; lot_charge_role_id; disjoint_stock_role_membership; factory_charge_asset_owner; new_factory_receipt_not_opening_or_other_receipt; other_receipt_exit_named_exclusion_ids; standalone_supply_source; UNUSED_substock_id; same_source_same_state_unused_evidence; matched_unused_return_id; used_recovery_source_state; internal_charge_recovery_transfer_ids; retained_recovery_or_external_exit; receiver_id; usable_Waste_acceptance; whole_asset_part_capture_retained_content_exclusion; exact_species_medium_release_link; stock_view; treatment_transport_asset_provider_coverage; opening_installed; opening_installed_unit; opening_installed_basis; opening_installed_method; opening_installed_state; opening_installed_sample_time; opening_installed_source; opening_stored_excluding_recovered; opening_stored_excluding_recovered_unit; opening_stored_excluding_recovered_basis; opening_stored_excluding_recovered_method; opening_stored_excluding_recovered_state; opening_stored_excluding_recovered_sample_time; opening_stored_excluding_recovered_source; opening_recovered; opening_recovered_unit; opening_recovered_basis; opening_recovered_method; opening_recovered_state; opening_recovered_sample_time; opening_recovered_source; new_factory_charge_receipt; new_factory_charge_receipt_unit; new_factory_charge_receipt_basis; new_factory_charge_receipt_method; new_factory_charge_receipt_state; new_factory_charge_receipt_sample_time; new_factory_charge_receipt_source; net_standalone_receipts; net_standalone_receipts_unit; net_standalone_receipts_basis; net_standalone_receipts_method; net_standalone_receipts_state; net_standalone_receipts_sample_time; net_standalone_receipts_source; other_actual_receipts_excluding_named; other_actual_receipts_excluding_named_unit; other_actual_receipts_excluding_named_basis; other_actual_receipts_excluding_named_method; other_actual_receipts_excluding_named_state; other_actual_receipts_excluding_named_sample_time; other_actual_receipts_excluding_named_source; closing_installed; closing_installed_unit; closing_installed_basis; closing_installed_method; closing_installed_state; closing_installed_sample_time; closing_installed_source; closing_stored_excluding_recovered; closing_stored_excluding_recovered_unit; closing_stored_excluding_recovered_basis; closing_stored_excluding_recovered_method; closing_stored_excluding_recovered_state; closing_stored_excluding_recovered_sample_time; closing_stored_excluding_recovered_source; closing_recovered; closing_recovered_unit; closing_recovered_basis; closing_recovered_method; closing_recovered_state; closing_recovered_sample_time; closing_recovered_source; unused_standalone_return; unused_standalone_return_unit; unused_standalone_return_basis; unused_standalone_return_method; unused_standalone_return_state; unused_standalone_return_sample_time; unused_standalone_return_source; usable_used_recovery_export; usable_used_recovery_export_unit; usable_used_recovery_export_basis; usable_used_recovery_export_method; usable_used_recovery_export_state; usable_used_recovery_export_sample_time; usable_used_recovery_export_source; contained_fluid_waste; contained_fluid_waste_unit; contained_fluid_waste_basis; contained_fluid_waste_method; contained_fluid_waste_state; contained_fluid_waste_sample_time; contained_fluid_waste_source; retained_in_whole_asset_waste; retained_in_whole_asset_waste_unit; retained_in_whole_asset_waste_basis; retained_in_whole_asset_waste_method; retained_in_whole_asset_waste_state; retained_in_whole_asset_waste_sample_time; retained_in_whole_asset_waste_source; retained_in_part_waste; retained_in_part_waste_unit; retained_in_part_waste_basis; retained_in_part_waste_method; retained_in_part_waste_state; retained_in_part_waste_sample_time; retained_in_part_waste_source; actual_direct_release; actual_direct_release_unit; actual_direct_release_basis; actual_direct_release_method; actual_direct_release_state; actual_direct_release_sample_time; actual_direct_release_source; other_actual_exits_excluding_named; other_actual_exits_excluding_named_unit; other_actual_exits_excluding_named_basis; other_actual_exits_excluding_named_method; other_actual_exits_excluding_named_state; other_actual_exits_excluding_named_sample_time; other_actual_exits_excluding_named_source; explicit_unknown_residual; explicit_unknown_residual_unit; explicit_unknown_residual_basis; explicit_unknown_residual_method; explicit_unknown_residual_state; explicit_unknown_residual_sample_time; explicit_unknown_residual_source; component_fraction; component_fraction_unit; component_fraction_basis; component_fraction_method; component_fraction_state; component_fraction_sample_time; component_fraction_source | 追踪真实化学物/混合物/系统与互斥库存充注批次角色。储存不含另列回收库存，工厂新充注仅真实新进入，不能又期初或OTHER收货；其他项排所有已命名项。内部充回抵消不当新供应。独立实际收货库存输出废物整物内含测量及明确未知对账；未知/补充非排放或零。工厂充注上游只全资产或真实补充一次。仅UNUSED同源同态独立子库存且真实匹配未用退回可耗用扣除并OMIT输出；所有USED已用回收流体不论工厂或独立来源均真实状态独立输出，不能当新料抵制造/负输入/自动信用。实际收集Waste与直接物种介质分开，整物组成非相加。 真实目标直接追踪，或兼容实际quantity*target_driver/正且完整all_consumer_driver，每个运算量具有原生单位/基准/方法/状态/采样时间/来源。必要同池待命关闭取消未到失败纳入总量，再归真实输出责任，不留无主容量份额。真实其他/部分输出有自身有据范围，不能全盲摊给无关完整营期。目标归属量除正相同画像N_target一次；已每参考流不变，N0保留源/接收/解决链接，未归属阻断完整使用。 | Actual native chemical/blend/component mass and compatible sourced conversion; no default composition or leakage | 每个真实事件/批次/交接及相容表计库存寿命期间 | 实际营期餐次任务库存报告及全资产寿命阶段，跨期源接收解决链接 | 真实营地厨房及职责内全部消费者供应商接收端 | 每参考流 | 每个独立运算量原生单位/基准/方法/状态/采样时间/来源；实际接受校准覆盖全用户及不确定性，未知非零 |
| cp_kitchen_freight | on_site_meal_preparation | 实际本节点唯一实际运输 | 实际原始事件/表计/批次/库存/寿命记录 | record_id; node_id; site_id; programme_id; package_version; profile_id; cohort_id; participant_scope; reporting_period; interval_start; interval_end; time_zone; UTC_offset_start; UTC_offset_end; DST_resolution_source; source_record_links; actual_scope_population; actual_consumer_ids; all_consumer_record_links; raw_attributed_perreference_state; actual_direct_assignment_source; allocation_method_source; covered_provider_stages; coverage_owner; excluded_overlap_ids; uncertainty; sensitivity; update_trigger; necessary_idle_failed_pool_responsibility; carry_source_record; carry_receiving_record; carry_resolution_link; unassigned_responsibility_blocker; raw_quantity; raw_quantity_unit; raw_quantity_basis; raw_quantity_method; raw_quantity_state; raw_quantity_sample_time; raw_quantity_source; target_driver; target_driver_unit; target_driver_basis; target_driver_method; target_driver_state; target_driver_sample_time; target_driver_source; all_consumer_driver; all_consumer_driver_unit; all_consumer_driver_basis; all_consumer_driver_method; all_consumer_driver_state; all_consumer_driver_sample_time; all_consumer_driver_source; conversion_factor; conversion_factor_unit; conversion_factor_basis; conversion_factor_method; conversion_factor_state; conversion_factor_sample_time; conversion_factor_source; N_target; N_target_unit; N_target_basis; N_target_method; N_target_state; N_target_sample_time; N_target_source; load_id; leg_id; unique_load_leg_key; cargo_membership_ids; EACH_or_TOTAL; actual_packed_wet_dry_state; original_added_pack_supports; gross_scope; noncargo_tare_scope; provider_delivered_coverage; receiver_transport_coverage; empty_return_coverage; direct_already_attributed_state; record_share_source; payload; payload_unit; payload_basis; payload_method; payload_state; payload_sample_time; payload_source; vehicle_gross; vehicle_gross_unit; vehicle_gross_basis; vehicle_gross_method; vehicle_gross_state; vehicle_gross_sample_time; vehicle_gross_source; vehicle_noncargo_tare; vehicle_noncargo_tare_unit; vehicle_noncargo_tare_basis; vehicle_noncargo_tare_method; vehicle_noncargo_tare_state; vehicle_noncargo_tare_sample_time; vehicle_noncargo_tare_source; repeated_load_count; repeated_load_count_unit; repeated_load_count_basis; repeated_load_count_method; repeated_load_count_state; repeated_load_count_sample_time; repeated_load_count_source; distance; distance_unit; distance_basis; distance_method; distance_state; distance_sample_time; distance_source; payload_conversion; payload_conversion_unit; payload_conversion_basis; payload_conversion_method; payload_conversion_state; payload_conversion_sample_time; payload_conversion_source; gross_conversion; gross_conversion_unit; gross_conversion_basis; gross_conversion_method; gross_conversion_state; gross_conversion_sample_time; gross_conversion_source; tare_conversion; tare_conversion_unit; tare_conversion_basis; tare_conversion_method; tare_conversion_state; tare_conversion_sample_time; tare_conversion_source; distance_conversion; distance_conversion_unit; distance_conversion_basis; distance_conversion_method; distance_conversion_state; distance_conversion_sample_time; distance_conversion_source; that_record_share; that_record_share_unit; that_record_share_basis; that_record_share_method; that_record_share_state; that_record_share_sample_time; that_record_share_source | 真实整个运载载荷或相容同态车辆毛重仅减非货物车辆皮重，保留食物织物水分及所有载运包装容器支撑；可食干物/干织物洗量非载荷。EACH真实次数一次，TOTAL不变。该记录相容目标/正完整全用户物理份额在唯一SUM(payload*distance*that_record_share)内部，先原生换算再合计后正同目标N一次。已归属/已份额/每参考流不重复。供应商交付接收空返职责一次，不能把游客交通伪装货运。 真实目标直接追踪，或兼容实际quantity*target_driver/正且完整all_consumer_driver，每个运算量具有原生单位/基准/方法/状态/采样时间/来源。必要同池待命关闭取消未到失败纳入总量，再归真实输出责任，不留无主容量份额。真实其他/部分输出有自身有据范围，不能全盲摊给无关完整营期。目标归属量除正相同画像N_target一次；已每参考流不变，N0保留源/接收/解决链接，未归属阻断完整使用。 | Each actual native mass/distance/count and compatible kg*km conversion | 每个真实事件/批次/交接及相容表计库存寿命期间 | 实际营期餐次任务库存报告及全资产寿命阶段，跨期源接收解决链接 | 真实营地厨房及职责内全部消费者供应商接收端 | 每参考流 | 每个独立运算量原生单位/基准/方法/状态/采样时间/来源；实际接受校准覆盖全用户及不确定性，未知非零 |
| cp_kitchen_fates | on_site_meal_preparation | 实际本节点真实接收环境接口 | 实际原始事件/表计/批次/库存/寿命记录 | record_id; node_id; site_id; programme_id; package_version; profile_id; cohort_id; participant_scope; reporting_period; interval_start; interval_end; time_zone; UTC_offset_start; UTC_offset_end; DST_resolution_source; source_record_links; actual_scope_population; actual_consumer_ids; all_consumer_record_links; raw_attributed_perreference_state; actual_direct_assignment_source; allocation_method_source; covered_provider_stages; coverage_owner; excluded_overlap_ids; uncertainty; sensitivity; update_trigger; necessary_idle_failed_pool_responsibility; carry_source_record; carry_receiving_record; carry_resolution_link; unassigned_responsibility_blocker; raw_quantity; raw_quantity_unit; raw_quantity_basis; raw_quantity_method; raw_quantity_state; raw_quantity_sample_time; raw_quantity_source; target_driver; target_driver_unit; target_driver_basis; target_driver_method; target_driver_state; target_driver_sample_time; target_driver_source; all_consumer_driver; all_consumer_driver_unit; all_consumer_driver_basis; all_consumer_driver_method; all_consumer_driver_state; all_consumer_driver_sample_time; all_consumer_driver_source; conversion_factor; conversion_factor_unit; conversion_factor_basis; conversion_factor_method; conversion_factor_state; conversion_factor_sample_time; conversion_factor_source; N_target; N_target_unit; N_target_basis; N_target_method; N_target_state; N_target_sample_time; N_target_source; actual_stream_id; origin_material_asset_batch_participant; origin_guest_operator_provider; collection_responsibility; source_event_id; receiver_id; actual_useful_Waste_status_source; actual_usable_acceptance; contained_or_direct_medium; environmental_source_location; mixture_or_separate_stream; mixture_membership_source; nonadditive_origin_component_view; actual_plate_return_not_unserved; retained_prepared_stock_exclusion; whole_part_content_exclusions; actual_treatment_transport_owner; identical_asset_provider_EOL_coverage; unused_supply_return_match; composition_definition_source; actual_fate_source; actual_received_net_quantity; actual_received_net_quantity_unit; actual_received_net_quantity_basis; actual_received_net_quantity_method; actual_received_net_quantity_state; actual_received_net_quantity_sample_time; actual_received_net_quantity_source; actual_source_withdrawal_volume; actual_source_withdrawal_volume_unit; actual_source_withdrawal_volume_basis; actual_source_withdrawal_volume_method; actual_source_withdrawal_volume_state; actual_source_withdrawal_volume_sample_time; actual_source_withdrawal_volume_source; contained_effluent_volume; contained_effluent_volume_unit; contained_effluent_volume_basis; contained_effluent_volume_method; contained_effluent_volume_state; contained_effluent_volume_sample_time; contained_effluent_volume_source; whole_stream_mass; whole_stream_mass_unit; whole_stream_mass_basis; whole_stream_mass_method; whole_stream_mass_state; whole_stream_mass_sample_time; whole_stream_mass_source; component_quantity; component_quantity_unit; component_quantity_basis; component_quantity_method; component_quantity_state; component_quantity_sample_time; component_quantity_source; food_retained_water; food_retained_water_unit; food_retained_water_basis; food_retained_water_method; food_retained_water_state; food_retained_water_sample_time; food_retained_water_source; retained_chemical_fluid; retained_chemical_fluid_unit; retained_chemical_fluid_basis; retained_chemical_fluid_method; retained_chemical_fluid_state; retained_chemical_fluid_sample_time; retained_chemical_fluid_source; density; density_unit; density_basis; density_method; density_state; density_sample_time; density_source; density_temperature; density_temperature_unit; density_temperature_basis; density_temperature_method; density_temperature_state; density_temperature_sample_time; density_temperature_source; actual_usable_transfer_mass; actual_usable_transfer_mass_unit; actual_usable_transfer_mass_basis; actual_usable_transfer_mass_method; actual_usable_transfer_mass_state; actual_usable_transfer_mass_sample_time; actual_usable_transfer_mass_source; actual_unserved_discard_mass; actual_unserved_discard_mass_unit; actual_unserved_discard_mass_basis; actual_unserved_discard_mass_method; actual_unserved_discard_mass_state; actual_unserved_discard_mass_sample_time; actual_unserved_discard_mass_source; actual_plate_return_mass; actual_plate_return_mass_unit; actual_plate_return_mass_basis; actual_plate_return_mass_method; actual_plate_return_mass_state; actual_plate_return_mass_sample_time; actual_plate_return_mass_source; actual_packaging_mass; actual_packaging_mass_unit; actual_packaging_mass_basis; actual_packaging_mass_method; actual_packaging_mass_state; actual_packaging_mass_sample_time; actual_packaging_mass_source; flow_row_id; actual_identity_case; actual_substance_or_material; actual_origin_and_medium; actual_state_and_gate; case_activation_evidence; typed_or_residual_quantity; quantity_exclusion_links; whole_total_reconciliation; unresolved_occurrence_not_zero | 营地真实参与者/经营者垃圾清洁包装污水职责不导入游客自购食品材料制造。厨房独立识别真实备料废、未供预制丢弃、就餐后餐盘返回、包装、用过清洁和废水；餐后剩余不冲回已履约膳食，不新增食材上游。真实共同桶ONE一个接收总量加非相加来源组成，非几个可加输出。留存预制库存或有据接收可用转交非自动废物。每个真实不同接收流展开；真实混合整流或互斥组成择一。收集污水流体Waste，直接蒸气须Mass空气物种证据，不以供水减未知当污水。实际直接取水与购水独立，有真实独立设施须复核。相同资产供应商已含接收运输处理一次，真实缺处理须完成集成。 真实目标直接追踪，或兼容实际quantity*target_driver/正且完整all_consumer_driver，每个运算量具有原生单位/基准/方法/状态/采样时间/来源。必要同池待命关闭取消未到失败纳入总量，再归真实输出责任，不留无主容量份额。真实其他/部分输出有自身有据范围，不能全盲摊给无关完整营期。目标归属量除正相同画像N_target一次；已每参考流不变，N0保留源/接收/解决链接，未归属阻断完整使用。 | Each actual stream/component native mass/volume/content; independent compatible density/temperature if used | 每个真实事件/批次/交接及相容表计库存寿命期间 | 实际营期餐次任务库存报告及全资产寿命阶段，跨期源接收解决链接 | 真实营地厨房及职责内全部消费者供应商接收端 | 每参考流 | 每个独立运算量原生单位/基准/方法/状态/采样时间/来源；实际接受校准覆盖全用户及不确定性，未知非零 |
| cp_kitchen_releases | on_site_meal_preparation | 实际本节点物种介质排放 | 实际原始事件/表计/批次/库存/寿命记录 | record_id; node_id; site_id; programme_id; package_version; profile_id; cohort_id; participant_scope; reporting_period; interval_start; interval_end; time_zone; UTC_offset_start; UTC_offset_end; DST_resolution_source; source_record_links; actual_scope_population; actual_consumer_ids; all_consumer_record_links; raw_attributed_perreference_state; actual_direct_assignment_source; allocation_method_source; covered_provider_stages; coverage_owner; excluded_overlap_ids; uncertainty; sensitivity; update_trigger; necessary_idle_failed_pool_responsibility; carry_source_record; carry_receiving_record; carry_resolution_link; unassigned_responsibility_blocker; raw_quantity; raw_quantity_unit; raw_quantity_basis; raw_quantity_method; raw_quantity_state; raw_quantity_sample_time; raw_quantity_source; target_driver; target_driver_unit; target_driver_basis; target_driver_method; target_driver_state; target_driver_sample_time; target_driver_source; all_consumer_driver; all_consumer_driver_unit; all_consumer_driver_basis; all_consumer_driver_method; all_consumer_driver_state; all_consumer_driver_sample_time; all_consumer_driver_source; conversion_factor; conversion_factor_unit; conversion_factor_basis; conversion_factor_method; conversion_factor_state; conversion_factor_sample_time; conversion_factor_source; N_target; N_target_unit; N_target_basis; N_target_method; N_target_state; N_target_sample_time; N_target_source; event_id; actual_operation_system_batch; exact_species_identity; reported_component_or_blend_basis; particle_size_class; receiving_medium; environmental_location; measurement_population; factor_identity_source; factor_complete_composition_fate_coverage; composition_method_source; actual_fate_basis_source; gas_state_method; unknown_residual_status; contained_capture_exclusion; provider_asset_release_coverage; measured_species_quantity; measured_species_quantity_unit; measured_species_quantity_basis; measured_species_quantity_method; measured_species_quantity_state; measured_species_quantity_sample_time; measured_species_quantity_source; actual_activity; actual_activity_unit; actual_activity_basis; actual_activity_method; actual_activity_state; actual_activity_sample_time; actual_activity_source; emission_factor; emission_factor_unit; emission_factor_basis; emission_factor_method; emission_factor_state; emission_factor_sample_time; emission_factor_source; composition_fraction; composition_fraction_unit; composition_fraction_basis; composition_fraction_method; composition_fraction_state; composition_fraction_sample_time; composition_fraction_source; fate_fraction; fate_fraction_unit; fate_fraction_basis; fate_fraction_method; fate_fraction_state; fate_fraction_sample_time; fate_fraction_source; gas_conversion_factor; gas_conversion_factor_unit; gas_conversion_factor_basis; gas_conversion_factor_method; gas_conversion_factor_state; gas_conversion_factor_sample_time; gas_conversion_factor_source; gas_temperature; gas_temperature_unit; gas_temperature_basis; gas_temperature_method; gas_temperature_state; gas_temperature_sample_time; gas_temperature_source; gas_pressure; gas_pressure_unit; gas_pressure_basis; gas_pressure_method; gas_pressure_state; gas_pressure_sample_time; gas_pressure_source; actual_elapsed_duration; actual_elapsed_duration_unit; actual_elapsed_duration_basis; actual_elapsed_duration_method; actual_elapsed_duration_state; actual_elapsed_duration_sample_time; actual_elapsed_duration_source; flow_row_id; actual_identity_case; actual_substance_or_material; actual_origin_and_medium; actual_state_and_gate; case_activation_evidence; typed_or_residual_quantity; quantity_exclusion_links; whole_total_reconciliation; unresolved_occurrence_not_zero | 具体绑定前确认确切真实物质/基准/颗粒及空气水土介质。独立测得物种量或兼容实际活动乘适用因子，每个量有原生单位/基准/方法/状态/时间/源。仅真实方法需要且完整因子未含时应用组成/去向/气体换算一次。水蒸气实际Mass-to-air，非收集Waste；食品水损沸腾补充库存差气味本身不定量或证明零。排放混合制冷剂组成不能默认供应组成，捕集收集/供应商已含不是第二直接排放。 真实目标直接追踪，或兼容实际quantity*target_driver/正且完整all_consumer_driver，每个运算量具有原生单位/基准/方法/状态/采样时间/来源。必要同池待命关闭取消未到失败纳入总量，再归真实输出责任，不留无主容量份额。真实其他/部分输出有自身有据范围，不能全盲摊给无关完整营期。目标归属量除正相同画像N_target一次；已每参考流不变，N0保留源/接收/解决链接，未归属阻断完整使用。 | Each actual native species/activity/factor/fraction/gas temperature-pressure unit | 每个真实事件/批次/交接及相容表计库存寿命期间 | 实际营期餐次任务库存报告及全资产寿命阶段，跨期源接收解决链接 | 真实营地厨房及职责内全部消费者供应商接收端 | 每参考流 | 每个独立运算量原生单位/基准/方法/状态/采样时间/来源；实际接受校准覆盖全用户及不确定性，未知非零 |
| cp_camp_sessions | camp_session_service | 实际本节点服务食品原生职责 | 实际原始事件/表计/批次/库存/寿命记录 | intended_output_id; intended_output_scope; intended_output_recipient; actual_output_handoff_id; actual_output_gate_state; output_quantity; output_quantity_unit; output_quantity_basis; output_quantity_method; output_quantity_state; output_quantity_sample_time; output_quantity_source; record_id; node_id; site_id; programme_id; package_version; profile_id; cohort_id; participant_scope; reporting_period; interval_start; interval_end; time_zone; UTC_offset_start; UTC_offset_end; DST_resolution_source; source_record_links; actual_scope_population; actual_consumer_ids; all_consumer_record_links; raw_attributed_perreference_state; actual_direct_assignment_source; allocation_method_source; covered_provider_stages; coverage_owner; excluded_overlap_ids; uncertainty; sensitivity; update_trigger; necessary_idle_failed_pool_responsibility; carry_source_record; carry_receiving_record; carry_resolution_link; unassigned_responsibility_blocker; raw_quantity; raw_quantity_unit; raw_quantity_basis; raw_quantity_method; raw_quantity_state; raw_quantity_sample_time; raw_quantity_source; target_driver; target_driver_unit; target_driver_basis; target_driver_method; target_driver_state; target_driver_sample_time; target_driver_source; all_consumer_driver; all_consumer_driver_unit; all_consumer_driver_basis; all_consumer_driver_method; all_consumer_driver_state; all_consumer_driver_sample_time; all_consumer_driver_source; conversion_factor; conversion_factor_unit; conversion_factor_basis; conversion_factor_method; conversion_factor_state; conversion_factor_sample_time; conversion_factor_source; N_target; N_target_unit; N_target_basis; N_target_method; N_target_state; N_target_sample_time; N_target_source; participant_id; booking_id_nonexchange; actual_session_id; programme_purpose_general_recreation_not_sport_only; package_scope_source; actual_declared_duration_profile; arrival_departure_records; local_overnight_definition_source; physical_lodging_record_links; meal_provision_event_links; actual_activity_provision_event_links; performed_available_declined_failed_replaced_state; actual_duty_acceptance; session_reversal_links; partial_delivery_scope_and_output; other_partial_output_responsibility; complimentary_status; cancel_noshow_closed_capacity_status; actual_pool_scope_id; crossprofile_non_equivalence_source; unique_fulfilled_participants; unique_fulfilled_participants_unit; unique_fulfilled_participants_basis; unique_fulfilled_participants_method; unique_fulfilled_participants_state; unique_fulfilled_participants_sample_time; unique_fulfilled_participants_source; actual_elapsed_duration; actual_elapsed_duration_unit; actual_elapsed_duration_basis; actual_elapsed_duration_method; actual_elapsed_duration_state; actual_elapsed_duration_sample_time; actual_elapsed_duration_source; actual_nights; actual_nights_unit; actual_nights_basis; actual_nights_method; actual_nights_state; actual_nights_sample_time; actual_nights_source; actual_meal_provision_covers; actual_meal_provision_covers_unit; actual_meal_provision_covers_basis; actual_meal_provision_covers_method; actual_meal_provision_covers_state; actual_meal_provision_covers_sample_time; actual_meal_provision_covers_source; actual_served_covers; actual_served_covers_unit; actual_served_covers_basis; actual_served_covers_method; actual_served_covers_state; actual_served_covers_sample_time; actual_served_covers_source; actual_activity_duration; actual_activity_duration_unit; actual_activity_duration_basis; actual_activity_duration_method; actual_activity_duration_state; actual_activity_duration_sample_time; actual_activity_duration_source | 逐一枚举全部真实预期项目/画像/部分服务输出、营地支持员工餐职责、其他营期访客膳食输出及接受可用食品交接，各有outputID、接收人、实际门槛状态和原生量/单位/基准/方法/采样时间/来源。最终营期组分不是新共产品，其他真实输出保留自身范围，物资退回残余废物独立区分。同一声明等价方案/时长/画像及有据营地目的内，每个真实履约参与者营期计一次，住宿膳食多娱乐职责完整。预约付款容量日营体育教学非目标，不同内容时长不能无画像混平均。真实已提供餐活动被拒不自动冲回；部分供应记录真实组分服务及修改后输出责任，仅实际等价履约进N，不能编分数营期或自动全摊另一完整产品。免费真实履约保留，实际时戳时区UTC偏移DST非24hour固定时长。 真实目标直接追踪，或兼容实际quantity*target_driver/正且完整all_consumer_driver，每个运算量具有原生单位/基准/方法/状态/采样时间/来源。必要同池待命关闭取消未到失败纳入总量，再归真实输出责任，不留无主容量份额。真实其他/部分输出有自身有据范围，不能全盲摊给无关完整营期。目标归属量除正相同画像N_target一次；已每参考流不变，N0保留源/接收/解决链接，未归属阻断完整使用。 | Participant-session Item(s) plus independent actual time/night/meal/activity native units | 每个真实事件/批次/交接及相容表计库存寿命期间 | 实际营期餐次任务库存报告及全资产寿命阶段，跨期源接收解决链接 | 真实营地厨房及职责内全部消费者供应商接收端 | 每参考流 | 每个独立运算量原生单位/基准/方法/状态/采样时间/来源；实际接受校准覆盖全用户及不确定性，未知非零 |
| cp_camp_textiles | camp_session_service | 实际本节点服务食品原生职责 | 实际原始事件/表计/批次/库存/寿命记录 | record_id; node_id; site_id; programme_id; package_version; profile_id; cohort_id; participant_scope; reporting_period; interval_start; interval_end; time_zone; UTC_offset_start; UTC_offset_end; DST_resolution_source; source_record_links; actual_scope_population; actual_consumer_ids; all_consumer_record_links; raw_attributed_perreference_state; actual_direct_assignment_source; allocation_method_source; covered_provider_stages; coverage_owner; excluded_overlap_ids; uncertainty; sensitivity; update_trigger; necessary_idle_failed_pool_responsibility; carry_source_record; carry_receiving_record; carry_resolution_link; unassigned_responsibility_blocker; raw_quantity; raw_quantity_unit; raw_quantity_basis; raw_quantity_method; raw_quantity_state; raw_quantity_sample_time; raw_quantity_source; target_driver; target_driver_unit; target_driver_basis; target_driver_method; target_driver_state; target_driver_sample_time; target_driver_source; all_consumer_driver; all_consumer_driver_unit; all_consumer_driver_basis; all_consumer_driver_method; all_consumer_driver_state; all_consumer_driver_sample_time; all_consumer_driver_source; conversion_factor; conversion_factor_unit; conversion_factor_basis; conversion_factor_method; conversion_factor_state; conversion_factor_sample_time; conversion_factor_source; N_target; N_target_unit; N_target_basis; N_target_method; N_target_state; N_target_sample_time; N_target_source; textile_id_pool; actual_material_construction; owned_rental_coverage; laundry_provider_batch_id; unique_transfer_ids; actual_linen_change_rewash_task; dry_mass_definition; conditioned_asreceived_state; water_only_sample_definition; same_sample_nonwater_definition; sample_population_source; actual_provider_all_client_records; wash_dry_finish_coverage; energy_water_chemicals_effluent_asset_freight_scope; rental_textile_manufacture_EOL_scope; completed_missing_duty_links; loss_repair_retirement_source; actual_laundry_service_quantity; actual_laundry_service_quantity_unit; actual_laundry_service_quantity_basis; actual_laundry_service_quantity_method; actual_laundry_service_quantity_state; actual_laundry_service_quantity_sample_time; actual_laundry_service_quantity_source; dry_textile_mass; dry_textile_mass_unit; dry_textile_mass_basis; dry_textile_mass_method; dry_textile_mass_state; dry_textile_mass_sample_time; dry_textile_mass_source; wet_carried_textile_mass; wet_carried_textile_mass_unit; wet_carried_textile_mass_basis; wet_carried_textile_mass_method; wet_carried_textile_mass_state; wet_carried_textile_mass_sample_time; wet_carried_textile_mass_source; actual_item_count; actual_item_count_unit; actual_item_count_basis; actual_item_count_method; actual_item_count_state; actual_item_count_sample_time; actual_item_count_source; actual_item_mass; actual_item_mass_unit; actual_item_mass_basis; actual_item_mass_method; actual_item_mass_state; actual_item_mass_sample_time; actual_item_mass_source; water_mass; water_mass_unit; water_mass_basis; water_mass_method; water_mass_state; water_mass_sample_time; water_mass_source; asreceived_sample_mass; asreceived_sample_mass_unit; asreceived_sample_mass_basis; asreceived_sample_mass_method; asreceived_sample_mass_state; asreceived_sample_mass_sample_time; asreceived_sample_mass_source; dry_nonwater_sample_mass; dry_nonwater_sample_mass_unit; dry_nonwater_sample_mass_basis; dry_nonwater_sample_mass_method; dry_nonwater_sample_mass_state; dry_nonwater_sample_mass_sample_time; dry_nonwater_sample_mass_source; wet_water_fraction; wet_water_fraction_unit; wet_water_fraction_basis; wet_water_fraction_method; wet_water_fraction_state; wet_water_fraction_sample_time; wet_water_fraction_source; dry_water_ratio; dry_water_ratio_unit; dry_water_ratio_basis; dry_water_ratio_method; dry_water_ratio_state; dry_water_ratio_sample_time; dry_water_ratio_source; percent_to_ratio_factor; percent_to_ratio_factor_unit; percent_to_ratio_factor_basis; percent_to_ratio_factor_method; percent_to_ratio_factor_state; percent_to_ratio_factor_sample_time; percent_to_ratio_factor_source | 实际完成且匹配干织物/有据原生供应商服务，非湿载荷或每洗新织物。同样品水定义w_wet=m_water/m_asreceived和r_dry=m_water/m_nonwater，实际百分数转后w_wet=r_dry/(1+r_dry)；其他挥发物LOD/污物非水或纯纤维。重洗失败未用职责真实资源一次不新增营期。完整洗烘整理化学品能水废水资产运输租赁织物寿命服务，或真实完成缺阶段集成一次。现场工业洗衣须复核，无标准kg/营期或寿命次数。 真实目标直接追踪，或兼容实际quantity*target_driver/正且完整all_consumer_driver，每个运算量具有原生单位/基准/方法/状态/采样时间/来源。必要同池待命关闭取消未到失败纳入总量，再归真实输出责任，不留无主容量份额。真实其他/部分输出有自身有据范围，不能全盲摊给无关完整营期。目标归属量除正相同画像N_target一次；已每参考流不变，N0保留源/接收/解决链接，未归属阻断完整使用。 | Actual dry-textile service kg or supported native laundry unit, independent item/wet mass/water units | 每个真实事件/批次/交接及相容表计库存寿命期间 | 实际营期餐次任务库存报告及全资产寿命阶段，跨期源接收解决链接 | 真实营地厨房及职责内全部消费者供应商接收端 | 每参考流 | 每个独立运算量原生单位/基准/方法/状态/采样时间/来源；实际接受校准覆盖全用户及不确定性，未知非零 |
| cp_camp_meal_receipts | camp_session_service | 实际本节点服务食品原生职责 | 实际原始事件/表计/批次/库存/寿命记录 | record_id; node_id; site_id; programme_id; package_version; profile_id; cohort_id; participant_scope; reporting_period; interval_start; interval_end; time_zone; UTC_offset_start; UTC_offset_end; DST_resolution_source; source_record_links; actual_scope_population; actual_consumer_ids; all_consumer_record_links; raw_attributed_perreference_state; actual_direct_assignment_source; allocation_method_source; covered_provider_stages; coverage_owner; excluded_overlap_ids; uncertainty; sensitivity; update_trigger; necessary_idle_failed_pool_responsibility; carry_source_record; carry_receiving_record; carry_resolution_link; unassigned_responsibility_blocker; raw_quantity; raw_quantity_unit; raw_quantity_basis; raw_quantity_method; raw_quantity_state; raw_quantity_sample_time; raw_quantity_source; target_driver; target_driver_unit; target_driver_basis; target_driver_method; target_driver_state; target_driver_sample_time; target_driver_source; all_consumer_driver; all_consumer_driver_unit; all_consumer_driver_basis; all_consumer_driver_method; all_consumer_driver_state; all_consumer_driver_sample_time; all_consumer_driver_source; conversion_factor; conversion_factor_unit; conversion_factor_basis; conversion_factor_method; conversion_factor_state; conversion_factor_sample_time; conversion_factor_source; N_target; N_target_unit; N_target_basis; N_target_method; N_target_state; N_target_sample_time; N_target_source; transfer_id; kitchen_source_node; camp_receiver_node; kitchen_batch_ids; actual_meal_occasion_id; actual_target_profile_participants; other_consumer_scope; actual_prepared_ready_held_available_evidence; actual_service_gate_and_acceptance; actual_performed_failed_declined_status; actual_transfer_state; actual_same_scope_native_amount_source; actual_served_vs_available_cover_definition; refill_not_extra_cover_source; actual_food_mass_state_and_composition; already_prepared_input_coverage; internal_not_external_provider; same_N_target_scope_source; zero_handoff_resource_integration_link; explicit_supplement_scope_owner; no_fictitious_positive_handoff; fulfilled_provision_covers; fulfilled_provision_covers_unit; fulfilled_provision_covers_basis; fulfilled_provision_covers_method; fulfilled_provision_covers_state; fulfilled_provision_covers_sample_time; fulfilled_provision_covers_source; actual_served_covers; actual_served_covers_unit; actual_served_covers_basis; actual_served_covers_method; actual_served_covers_state; actual_served_covers_sample_time; actual_served_covers_source; actual_declined_covers; actual_declined_covers_unit; actual_declined_covers_basis; actual_declined_covers_method; actual_declined_covers_state; actual_declined_covers_sample_time; actual_declined_covers_source; actual_refill_portions; actual_refill_portions_unit; actual_refill_portions_basis; actual_refill_portions_method; actual_refill_portions_state; actual_refill_portions_sample_time; actual_refill_portions_source; prepared_food_mass; prepared_food_mass_unit; prepared_food_mass_basis; prepared_food_mass_method; prepared_food_mass_state; prepared_food_mass_sample_time; prepared_food_mass_source; offered_food_mass; offered_food_mass_unit; offered_food_mass_basis; offered_food_mass_method; offered_food_mass_state; offered_food_mass_sample_time; offered_food_mass_source; as_served_food_mass; as_served_food_mass_unit; as_served_food_mass_basis; as_served_food_mass_method; as_served_food_mass_state; as_served_food_mass_sample_time; as_served_food_mass_source; retained_unserved_mass; retained_unserved_mass_unit; retained_unserved_mass_basis; retained_unserved_mass_method; retained_unserved_mass_state; retained_unserved_mass_sample_time; retained_unserved_mass_source; actual_plate_return_mass; actual_plate_return_mass_unit; actual_plate_return_mass_basis; actual_plate_return_mass_method; actual_plate_return_mass_state; actual_plate_return_mass_sample_time; actual_plate_return_mass_source; same_transfer_native_quantity; same_transfer_native_quantity_unit; same_transfer_native_quantity_basis; same_transfer_native_quantity_method; same_transfer_native_quantity_state; same_transfer_native_quantity_sample_time; same_transfer_native_quantity_source | 双方同一实际transferID/源接收节点/参与者画像餐次范围/实际提供服务门槛状态/原生量及最终N。膳食提供须真实已备制就绪持有可供及真实参与者服务事件接受证据，非计划菜单名义容量预约人数。已供拒食可供covers、补充份、提供/就餐质量组成剩余餐盘返回分别采集；补充份非默认新cover，Count非营养/物理影响等价。不得固定每营期一餐或再买同一完整供应商餐；内部厨房负担与营期接收链接一次，非新外部生产。零实际交接不能经零交换传负担，真实营地必要厨房职责须以互斥有源资源补充/聚合实量完成一次且有owner覆盖链接，无虚构正膳食，未完成即不完整。 真实目标直接追踪，或兼容实际quantity*target_driver/正且完整all_consumer_driver，每个运算量具有原生单位/基准/方法/状态/采样时间/来源。必要同池待命关闭取消未到失败纳入总量，再归真实输出责任，不留无主容量份额。真实其他/部分输出有自身有据范围，不能全盲摊给无关完整营期。目标归属量除正相同画像N_target一次；已每参考流不变，N0保留源/接收/解决链接，未归属阻断完整使用。 | Actual supported meal-provision occasion/cover Item(s), separate native food/state quantities, same actual final camp reference | 每个真实事件/批次/交接及相容表计库存寿命期间 | 实际营期餐次任务库存报告及全资产寿命阶段，跨期源接收解决链接 | 真实营地厨房及职责内全部消费者供应商接收端 | 每参考流 | 每个独立运算量原生单位/基准/方法/状态/采样时间/来源；实际接受校准覆盖全用户及不确定性，未知非零 |
| cp_kitchen_meal_deliveries | on_site_meal_preparation | 实际本节点服务食品原生职责 | 实际原始事件/表计/批次/库存/寿命记录 | intended_output_id; intended_output_scope; intended_output_recipient; actual_output_handoff_id; actual_output_gate_state; output_quantity; output_quantity_unit; output_quantity_basis; output_quantity_method; output_quantity_state; output_quantity_sample_time; output_quantity_source; record_id; node_id; site_id; programme_id; package_version; profile_id; cohort_id; participant_scope; reporting_period; interval_start; interval_end; time_zone; UTC_offset_start; UTC_offset_end; DST_resolution_source; source_record_links; actual_scope_population; actual_consumer_ids; all_consumer_record_links; raw_attributed_perreference_state; actual_direct_assignment_source; allocation_method_source; covered_provider_stages; coverage_owner; excluded_overlap_ids; uncertainty; sensitivity; update_trigger; necessary_idle_failed_pool_responsibility; carry_source_record; carry_receiving_record; carry_resolution_link; unassigned_responsibility_blocker; raw_quantity; raw_quantity_unit; raw_quantity_basis; raw_quantity_method; raw_quantity_state; raw_quantity_sample_time; raw_quantity_source; target_driver; target_driver_unit; target_driver_basis; target_driver_method; target_driver_state; target_driver_sample_time; target_driver_source; all_consumer_driver; all_consumer_driver_unit; all_consumer_driver_basis; all_consumer_driver_method; all_consumer_driver_state; all_consumer_driver_sample_time; all_consumer_driver_source; conversion_factor; conversion_factor_unit; conversion_factor_basis; conversion_factor_method; conversion_factor_state; conversion_factor_sample_time; conversion_factor_source; N_target; N_target_unit; N_target_basis; N_target_method; N_target_state; N_target_sample_time; N_target_source; transfer_id; kitchen_source_node; camp_receiver_node; kitchen_batch_ids; actual_meal_occasion_id; actual_target_profile_participants; other_consumer_scope; actual_prepared_ready_held_available_evidence; actual_service_gate_and_acceptance; actual_performed_failed_declined_status; actual_transfer_state; actual_same_scope_native_amount_source; actual_served_vs_available_cover_definition; refill_not_extra_cover_source; actual_food_mass_state_and_composition; already_prepared_input_coverage; internal_not_external_provider; same_N_target_scope_source; zero_handoff_resource_integration_link; explicit_supplement_scope_owner; no_fictitious_positive_handoff; fulfilled_provision_covers; fulfilled_provision_covers_unit; fulfilled_provision_covers_basis; fulfilled_provision_covers_method; fulfilled_provision_covers_state; fulfilled_provision_covers_sample_time; fulfilled_provision_covers_source; actual_served_covers; actual_served_covers_unit; actual_served_covers_basis; actual_served_covers_method; actual_served_covers_state; actual_served_covers_sample_time; actual_served_covers_source; actual_declined_covers; actual_declined_covers_unit; actual_declined_covers_basis; actual_declined_covers_method; actual_declined_covers_state; actual_declined_covers_sample_time; actual_declined_covers_source; actual_refill_portions; actual_refill_portions_unit; actual_refill_portions_basis; actual_refill_portions_method; actual_refill_portions_state; actual_refill_portions_sample_time; actual_refill_portions_source; prepared_food_mass; prepared_food_mass_unit; prepared_food_mass_basis; prepared_food_mass_method; prepared_food_mass_state; prepared_food_mass_sample_time; prepared_food_mass_source; offered_food_mass; offered_food_mass_unit; offered_food_mass_basis; offered_food_mass_method; offered_food_mass_state; offered_food_mass_sample_time; offered_food_mass_source; as_served_food_mass; as_served_food_mass_unit; as_served_food_mass_basis; as_served_food_mass_method; as_served_food_mass_state; as_served_food_mass_sample_time; as_served_food_mass_source; retained_unserved_mass; retained_unserved_mass_unit; retained_unserved_mass_basis; retained_unserved_mass_method; retained_unserved_mass_state; retained_unserved_mass_sample_time; retained_unserved_mass_source; actual_plate_return_mass; actual_plate_return_mass_unit; actual_plate_return_mass_basis; actual_plate_return_mass_method; actual_plate_return_mass_state; actual_plate_return_mass_sample_time; actual_plate_return_mass_source; same_transfer_native_quantity; same_transfer_native_quantity_unit; same_transfer_native_quantity_basis; same_transfer_native_quantity_method; same_transfer_native_quantity_state; same_transfer_native_quantity_sample_time; same_transfer_native_quantity_source | 逐一枚举全部真实预期项目/画像/部分服务输出、营地支持员工餐职责、其他营期访客膳食输出及接受可用食品交接，各有outputID、接收人、实际门槛状态和原生量/单位/基准/方法/采样时间/来源。最终营期组分不是新共产品，其他真实输出保留自身范围，物资退回残余废物独立区分。双方同一实际transferID/源接收节点/参与者画像餐次范围/实际提供服务门槛状态/原生量及最终N。膳食提供须真实已备制就绪持有可供及真实参与者服务事件接受证据，非计划菜单名义容量预约人数。已供拒食可供covers、补充份、提供/就餐质量组成剩余餐盘返回分别采集；补充份非默认新cover，Count非营养/物理影响等价。不得固定每营期一餐或再买同一完整供应商餐；内部厨房负担与营期接收链接一次，非新外部生产。零实际交接不能经零交换传负担，真实营地必要厨房职责须以互斥有源资源补充/聚合实量完成一次且有owner覆盖链接，无虚构正膳食，未完成即不完整。 真实目标直接追踪，或兼容实际quantity*target_driver/正且完整all_consumer_driver，每个运算量具有原生单位/基准/方法/状态/采样时间/来源。必要同池待命关闭取消未到失败纳入总量，再归真实输出责任，不留无主容量份额。真实其他/部分输出有自身有据范围，不能全盲摊给无关完整营期。目标归属量除正相同画像N_target一次；已每参考流不变，N0保留源/接收/解决链接，未归属阻断完整使用。 | Actual supported meal-provision occasion/cover Item(s), separate native food/state quantities, same actual final camp reference | 每个真实事件/批次/交接及相容表计库存寿命期间 | 实际营期餐次任务库存报告及全资产寿命阶段，跨期源接收解决链接 | 真实营地厨房及职责内全部消费者供应商接收端 | 每参考流 | 每个独立运算量原生单位/基准/方法/状态/采样时间/来源；实际接受校准覆盖全用户及不确定性，未知非零 |
| cp_kitchen_food_stocks | on_site_meal_preparation | 实际本节点服务食品原生职责 | 实际原始事件/表计/批次/库存/寿命记录 | record_id; node_id; site_id; programme_id; package_version; profile_id; cohort_id; participant_scope; reporting_period; interval_start; interval_end; time_zone; UTC_offset_start; UTC_offset_end; DST_resolution_source; source_record_links; actual_scope_population; actual_consumer_ids; all_consumer_record_links; raw_attributed_perreference_state; actual_direct_assignment_source; allocation_method_source; covered_provider_stages; coverage_owner; excluded_overlap_ids; uncertainty; sensitivity; update_trigger; necessary_idle_failed_pool_responsibility; carry_source_record; carry_receiving_record; carry_resolution_link; unassigned_responsibility_blocker; raw_quantity; raw_quantity_unit; raw_quantity_basis; raw_quantity_method; raw_quantity_state; raw_quantity_sample_time; raw_quantity_source; target_driver; target_driver_unit; target_driver_basis; target_driver_method; target_driver_state; target_driver_sample_time; target_driver_source; all_consumer_driver; all_consumer_driver_unit; all_consumer_driver_basis; all_consumer_driver_method; all_consumer_driver_state; all_consumer_driver_sample_time; all_consumer_driver_source; conversion_factor; conversion_factor_unit; conversion_factor_basis; conversion_factor_method; conversion_factor_state; conversion_factor_sample_time; conversion_factor_source; N_target; N_target_unit; N_target_basis; N_target_method; N_target_state; N_target_sample_time; N_target_source; ingredient_SKU; food_identity; purchased_raw_prepared_cooked_state; actual_supplier_gate; food_edible_asreceived_definition; food_water_bone_skin_definition; packaging_tare_definition; recipe_issue_batch_id; stock_pool_id; stock_internal_return_ids; same_source_state_unused_substock; matched_unused_external_return_id; nonfood_stock_record_link; actual_matched_stock_protocol; matched_source_row_id; gross_or_consumed_supply_convention; actual_storage_loss_receiver; food_upstream_preparation_coverage; component_membership_nonadditive; opening_food_stock; opening_food_stock_unit; opening_food_stock_basis; opening_food_stock_method; opening_food_stock_state; opening_food_stock_sample_time; opening_food_stock_source; gross_external_receipts; gross_external_receipts_unit; gross_external_receipts_basis; gross_external_receipts_method; gross_external_receipts_state; gross_external_receipts_sample_time; gross_external_receipts_source; supply_packaging_tare; supply_packaging_tare_unit; supply_packaging_tare_basis; supply_packaging_tare_method; supply_packaging_tare_state; supply_packaging_tare_sample_time; supply_packaging_tare_source; net_food_receipts; net_food_receipts_unit; net_food_receipts_basis; net_food_receipts_method; net_food_receipts_state; net_food_receipts_sample_time; net_food_receipts_source; internal_return_to_stock; internal_return_to_stock_unit; internal_return_to_stock_basis; internal_return_to_stock_method; internal_return_to_stock_state; internal_return_to_stock_sample_time; internal_return_to_stock_source; closing_food_stock; closing_food_stock_unit; closing_food_stock_basis; closing_food_stock_method; closing_food_stock_state; closing_food_stock_sample_time; closing_food_stock_source; issued_to_recipe; issued_to_recipe_unit; issued_to_recipe_basis; issued_to_recipe_method; issued_to_recipe_state; issued_to_recipe_sample_time; issued_to_recipe_source; unused_external_return; unused_external_return_unit; unused_external_return_basis; unused_external_return_method; unused_external_return_state; unused_external_return_sample_time; unused_external_return_source; actual_storage_discard; actual_storage_discard_unit; actual_storage_discard_basis; actual_storage_discard_method; actual_storage_discard_state; actual_storage_discard_sample_time; actual_storage_discard_source; other_actual_exits; other_actual_exits_unit; other_actual_exits_basis; other_actual_exits_method; other_actual_exits_state; other_actual_exits_sample_time; other_actual_exits_source; unknown_stock_residual; unknown_stock_residual_unit; unknown_stock_residual_basis; unknown_stock_residual_method; unknown_stock_residual_state; unknown_stock_residual_sample_time; unknown_stock_residual_source; asreceived_food_mass; asreceived_food_mass_unit; asreceived_food_mass_basis; asreceived_food_mass_method; asreceived_food_mass_state; asreceived_food_mass_sample_time; asreceived_food_mass_source; edible_food_mass; edible_food_mass_unit; edible_food_mass_basis; edible_food_mass_method; edible_food_mass_state; edible_food_mass_sample_time; edible_food_mass_source; food_water_mass; food_water_mass_unit; food_water_mass_basis; food_water_mass_method; food_water_mass_state; food_water_mass_sample_time; food_water_mass_source; bone_skin_mass; bone_skin_mass_unit; bone_skin_mass_basis; bone_skin_mass_method; bone_skin_mass_state; bone_skin_mass_sample_time; bone_skin_mass_source; dry_nonwater_mass; dry_nonwater_mass_unit; dry_nonwater_mass_basis; dry_nonwater_mass_method; dry_nonwater_mass_state; dry_nonwater_mass_sample_time; dry_nonwater_mass_source; actual_item_count; actual_item_count_unit; actual_item_count_basis; actual_item_count_method; actual_item_count_state; actual_item_count_sample_time; actual_item_count_source; per_item_mass; per_item_mass_unit; per_item_mass_basis; per_item_mass_method; per_item_mass_state; per_item_mass_sample_time; per_item_mass_source; density; density_unit; density_basis; density_method; density_state; density_sample_time; density_source; density_temperature; density_temperature_unit; density_temperature_basis; density_temperature_method; density_temperature_state; density_temperature_sample_time; density_temperature_source | 逐实际食材饮料SKU与供应态门口、原生收货/可食/干湿/骨皮基准；净食物收货排包装皮重，不排真实骨皮水。期初+净收+内部返回对期末/领用/未用外退/储存废/其他退出/未知，内部领用返回在外部上游供应需求抵消非新制造。毛S=期初+净外收-期末含留存，配同源同态UNUSED退回独立输出，或耗用S-unused_return并OMIT匹配输出。真实损失保留上游，预制剩余餐盘非未用原食材。非食品退回完整链接cp_kitchen_supplies真实source stock及同源态匹配，禁止跨SKU混抵或重复原职责。已预制购食的上游烹制覆盖明确同一步不重计。 真实目标直接追踪，或兼容实际quantity*target_driver/正且完整all_consumer_driver，每个运算量具有原生单位/基准/方法/状态/采样时间/来源。必要同池待命关闭取消未到失败纳入总量，再归真实输出责任，不留无主容量份额。真实其他/部分输出有自身有据范围，不能全盲摊给无关完整营期。目标归属量除正相同画像N_target一次；已每参考流不变，N0保留源/接收/解决链接，未归属阻断完整使用。 | Each actual ingredient/material native quantity and state, supported net kg/item/volume conversions | 每个真实事件/批次/交接及相容表计库存寿命期间 | 实际营期餐次任务库存报告及全资产寿命阶段，跨期源接收解决链接 | 真实营地厨房及职责内全部消费者供应商接收端 | 每参考流 | 每个独立运算量原生单位/基准/方法/状态/采样时间/来源；实际接受校准覆盖全用户及不确定性，未知非零 |
| cp_kitchen_recipes | on_site_meal_preparation | 实际本节点服务食品原生职责 | 实际原始事件/表计/批次/库存/寿命记录 | record_id; node_id; site_id; programme_id; package_version; profile_id; cohort_id; participant_scope; reporting_period; interval_start; interval_end; time_zone; UTC_offset_start; UTC_offset_end; DST_resolution_source; source_record_links; actual_scope_population; actual_consumer_ids; all_consumer_record_links; raw_attributed_perreference_state; actual_direct_assignment_source; allocation_method_source; covered_provider_stages; coverage_owner; excluded_overlap_ids; uncertainty; sensitivity; update_trigger; necessary_idle_failed_pool_responsibility; carry_source_record; carry_receiving_record; carry_resolution_link; unassigned_responsibility_blocker; raw_quantity; raw_quantity_unit; raw_quantity_basis; raw_quantity_method; raw_quantity_state; raw_quantity_sample_time; raw_quantity_source; target_driver; target_driver_unit; target_driver_basis; target_driver_method; target_driver_state; target_driver_sample_time; target_driver_source; all_consumer_driver; all_consumer_driver_unit; all_consumer_driver_basis; all_consumer_driver_method; all_consumer_driver_state; all_consumer_driver_sample_time; all_consumer_driver_source; conversion_factor; conversion_factor_unit; conversion_factor_basis; conversion_factor_method; conversion_factor_state; conversion_factor_sample_time; conversion_factor_source; N_target; N_target_unit; N_target_basis; N_target_method; N_target_state; N_target_sample_time; N_target_source; recipe_id_version; actual_batch_id; actual_ingredient_issue_records; each_composition_input_role; pre_treatment_ingredient_state; actual_wash_cut_mix_cook_hold_operations; post_treatment_prepared_state; actual_handoff_links; recipe_composition_basis; actual_heat_time_temperature_method; actual_food_safety_acceptance_source; actual_bone_skin_peel_separation; actual_water_only_definition; same_sample_nonwater_definition; sample_population_source; actual_offspec_state; rework_reheat_return_parent_batch; actual_safe_reuse_or_discard_evidence; actual_residual_receiver; prepared_vs_served_vs_consumed_disjoint_states; no_residual_to_vapour_inference; opening_inprocess_mass; opening_inprocess_mass_unit; opening_inprocess_mass_basis; opening_inprocess_mass_method; opening_inprocess_mass_state; opening_inprocess_mass_sample_time; opening_inprocess_mass_source; net_ingredient_feed; net_ingredient_feed_unit; net_ingredient_feed_basis; net_ingredient_feed_method; net_ingredient_feed_state; net_ingredient_feed_sample_time; net_ingredient_feed_source; added_recipe_water; added_recipe_water_unit; added_recipe_water_basis; added_recipe_water_method; added_recipe_water_state; added_recipe_water_sample_time; added_recipe_water_source; other_actual_composition_input; other_actual_composition_input_unit; other_actual_composition_input_basis; other_actual_composition_input_method; other_actual_composition_input_state; other_actual_composition_input_sample_time; other_actual_composition_input_source; prepared_output_mass; prepared_output_mass_unit; prepared_output_mass_basis; prepared_output_mass_method; prepared_output_mass_state; prepared_output_mass_sample_time; prepared_output_mass_source; prep_separation_waste; prep_separation_waste_unit; prep_separation_waste_basis; prep_separation_waste_method; prep_separation_waste_state; prep_separation_waste_sample_time; prep_separation_waste_source; other_process_waste; other_process_waste_unit; other_process_waste_basis; other_process_waste_method; other_process_waste_state; other_process_waste_sample_time; other_process_waste_source; measured_evaporated_water_mass; measured_evaporated_water_mass_unit; measured_evaporated_water_mass_basis; measured_evaporated_water_mass_method; measured_evaporated_water_mass_state; measured_evaporated_water_mass_sample_time; measured_evaporated_water_mass_source; other_evidenced_direct_release; other_evidenced_direct_release_unit; other_evidenced_direct_release_basis; other_evidenced_direct_release_method; other_evidenced_direct_release_state; other_evidenced_direct_release_sample_time; other_evidenced_direct_release_source; closing_inprocess_mass; closing_inprocess_mass_unit; closing_inprocess_mass_basis; closing_inprocess_mass_method; closing_inprocess_mass_state; closing_inprocess_mass_sample_time; closing_inprocess_mass_source; explicit_batch_unknown; explicit_batch_unknown_unit; explicit_batch_unknown_basis; explicit_batch_unknown_method; explicit_batch_unknown_state; explicit_batch_unknown_sample_time; explicit_batch_unknown_source; actual_unserved_stock; actual_unserved_stock_unit; actual_unserved_stock_basis; actual_unserved_stock_method; actual_unserved_stock_state; actual_unserved_stock_sample_time; actual_unserved_stock_source; actual_plate_return_mass; actual_plate_return_mass_unit; actual_plate_return_mass_basis; actual_plate_return_mass_method; actual_plate_return_mass_state; actual_plate_return_mass_sample_time; actual_plate_return_mass_source; water_mass; water_mass_unit; water_mass_basis; water_mass_method; water_mass_state; water_mass_sample_time; water_mass_source; asreceived_sample_mass; asreceived_sample_mass_unit; asreceived_sample_mass_basis; asreceived_sample_mass_method; asreceived_sample_mass_state; asreceived_sample_mass_sample_time; asreceived_sample_mass_source; dry_nonwater_sample_mass; dry_nonwater_sample_mass_unit; dry_nonwater_sample_mass_basis; dry_nonwater_sample_mass_method; dry_nonwater_sample_mass_state; dry_nonwater_sample_mass_sample_time; dry_nonwater_sample_mass_source; wet_water_fraction; wet_water_fraction_unit; wet_water_fraction_basis; wet_water_fraction_method; wet_water_fraction_state; wet_water_fraction_sample_time; wet_water_fraction_source; dry_water_ratio; dry_water_ratio_unit; dry_water_ratio_basis; dry_water_ratio_method; dry_water_ratio_state; dry_water_ratio_sample_time; dry_water_ratio_source; percent_to_ratio_factor; percent_to_ratio_factor_unit; percent_to_ratio_factor_basis; percent_to_ratio_factor_method; percent_to_ratio_factor_state; percent_to_ratio_factor_sample_time; percent_to_ratio_factor_source; density; density_unit; density_basis; density_method; density_state; density_sample_time; density_source; density_temperature; density_temperature_unit; density_temperature_basis; density_temperature_method; density_temperature_state; density_temperature_sample_time; density_temperature_source; actual_cook_temperature; actual_cook_temperature_unit; actual_cook_temperature_basis; actual_cook_temperature_method; actual_cook_temperature_state; actual_cook_temperature_sample_time; actual_cook_temperature_source; actual_cook_duration; actual_cook_duration_unit; actual_cook_duration_basis; actual_cook_duration_method; actual_cook_duration_state; actual_cook_duration_sample_time; actual_cook_duration_source; actual_item_count; actual_item_count_unit; actual_item_count_basis; actual_item_count_method; actual_item_count_state; actual_item_count_sample_time; actual_item_count_source; unit_food_mass; unit_food_mass_unit; unit_food_mass_basis; unit_food_mass_method; unit_food_mass_state; unit_food_mass_sample_time; unit_food_mass_source; flow_row_id; actual_identity_case; actual_substance_or_material; actual_origin_and_medium; actual_state_and_gate; case_activation_evidence; typed_or_residual_quantity; quantity_exclusion_links; whole_total_reconciliation; unresolved_occurrence_not_zero | 一个厨房节点内真实配方组成投入、处理前供应态、洗切混烹持有职责，非每菜强制混两料或同热处理。真实预制态交接、投入角色/状态量、异常重热返工返回留存可用丢弃及源批次必采。相容批次opening_inprocess+net ingredient feed+actual added water+other real composition input 对 prepared output+separation/process wastes+independently measured vapour/other actual release+closing_inprocess+explicit unknown。无强加产率或用差额当蒸发污水排放；预制输出、实际膳食提供/供应/消费份和后续餐盘分别追踪，内部返工不新增上游且资源保留。同样品纯水干湿换算百分数先转，每量元数据独立；其他挥发物LOD非水，干非水非纯可食。真实温度时间接受有源，无通用安全阈值或配方。 真实目标直接追踪，或兼容实际quantity*target_driver/正且完整all_consumer_driver，每个运算量具有原生单位/基准/方法/状态/采样时间/来源。必要同池待命关闭取消未到失败纳入总量，再归真实输出责任，不留无主容量份额。真实其他/部分输出有自身有据范围，不能全盲摊给无关完整营期。目标归属量除正相同画像N_target一次；已每参考流不变，N0保留源/接收/解决链接，未归属阻断完整使用。 | Actual ingredient/food/component native mass, water volume and supported density/temperature, real cook time/temperature and counts | 每个真实事件/批次/交接及相容表计库存寿命期间 | 实际营期餐次任务库存报告及全资产寿命阶段，跨期源接收解决链接 | 真实营地厨房及职责内全部消费者供应商接收端 | 每参考流 | 每个独立运算量原生单位/基准/方法/状态/采样时间/来源；实际接受校准覆盖全用户及不确定性，未知非零 |

### Calculation Rules

| rule_id | 适用对象 | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| fulfilled_session_N | camp_participant_session | N_target=count相同声明方案版本/时长/画像冲回后唯一真实履约参与者营期ID。实际过夜膳食娱乐门槛及开始结束时区UTC偏移DST必采；拒绝真正提供服务不自动移除N。部分有自己范围，预约容量非输出。 | cp_camp_sessions | 实际等价履约营期Count |  |
| target_pool_once | 全部实际资源行 | assigned_target_quantity=真实目标直接追踪，或相容raw_quantity*target_driver/all_consumer_driver，all_consumer_driver>0且完整。必要同池闲置失败取消未到纳总量和实际真实输出归属；per_reference_quantity=assigned_target_quantity/正相同画像N_target仅ONCE一次，已每参考流不变，N0保留源接收解决。 | All applicable node-owned CPs; cp_camp_sessions | 互斥每参考流职责 |  |
| meal_provision_handoff | camp_internal_meals; kitchen_meal_handoff | actual_transfer_quantity=一个实际餐次/参与者/接收门槛内真实履约提供covers/events计数，具有已备制就绪持有可供证据及接受。计划菜单预约容量非证明。双方同transferID/state/nativequantity/finalN一次；已供拒食补充份、备制提供就餐剩余餐盘各原生视图独立，补充非默认新cover，Count不等食品质量或营养。 | cp_camp_meal_receipts; cp_kitchen_meal_deliveries | 配对膳食提供服务原生量 |  |
| zero_transfer_actual_resources | 实际膳食交接为零时 | actual_transfer_quantity=0时不能零交换传负担或编正输出。真实营地必要厨房职责须同最终N实际有源原生资源补充/聚合一次，具原源接收owner覆盖排除链接；未归属则完整包不可用。 | cp_camp_meal_receipts; cp_kitchen_meal_deliveries; cp_camp_providers; cp_kitchen_providers | 真实集成保留厨房责任 |  |
| food_stock_native | ingredients/unused supplies | 每真实SKU/供应态S=opening+net_external_receipts-closing_including_recovery，净收扣包装容器皮重非食品水骨皮。实际内部领退在外部需求抵消。毛S/N加匹配UNUSED退回/N输出，或耗用(S-return)/N并OMIT同输出；损失保留上游，预制剩余餐盘已用流体非未用库存退回。 | cp_kitchen_food_stocks; cp_kitchen_supplies; cp_camp_supplies | 真实供应态上游及互斥退回 |  |
| kitchen_batch_balance | real recipe/preparation/cooking batch | 同批次原生相容边界actual opening_WIP+net_ingredient_feed+actual_added_water+other_real_composition = actual_prepared_output+actual_separation_process_waste+independently_measured_vapour_or_other_release+closing_WIP+explicit_unknown。内部返工抵消外部投入，无编产率、差额蒸气、干湿互换或缺失零。预制量、提供服务、供应质量、估算消费及餐盘是不同链接非相加阶段。 | cp_kitchen_recipes; cp_kitchen_food_stocks; cp_kitchen_meal_deliveries; cp_kitchen_fates; cp_kitchen_releases | 真实批次WIP去向闭合 |  |
| water_state_conversion | food/textile water evidence | 仅同样品纯水定义w_wet=m_water/m_as_received和r_dry=m_water/m_nonwater，可得w_wet=r_dry/(1+r_dry)，百分数先经真实percent_to_ratio_factor；m_nonwater=m_as_received*(1-w_wet)。各量份额转换独立unit/basis/method/state/sampletime/source，其他挥发物LOD非水，清洗水与食品组成水不同。 | cp_kitchen_recipes; cp_camp_textiles | 相容水与非水原生量 |  |
| utility_actual | camp/kitchen utilities | 相容(register_close-register_open+register_adjustment)*meter_multiplier*conversion_factor，或actual interval_quantity*conversion_factor，各因子仅未应用时一次。同区间实际平均功率*elapsed_duration含循环保温待机，非铭牌瞬时/已kWh再乘时长。外购有用热冷与对应燃料设施互斥，配方运行水按真实用途分。 | cp_camp_utilities; cp_kitchen_utilities; cp_kitchen_recipes | 互斥实际供给能水/燃烧 |  |
| full_life_native | camp/kitchen assets | actual asset_native_quantity*有据维度driver_equivalence*job_used_driver/正complete_lifetime_driver。complete_lifetime_driver=observed_all_user_driver+sourced_remaining_driver，各具实际全用户范围终止状态时间不确定性更新。必要闲置真实输出责任及完整制造安装维护实际更换终末纳入，年度N/容量非寿命；真实缺阶段完成一次，后同最终N仅一次除，已归一不重复。 | cp_camp_assets; cp_kitchen_assets; cp_camp_providers; cp_kitchen_providers | 完整寿命资产服务 |  |
| freight_record_share | actual unique freight | assigned_freight=SUM(唯一真实load-leg:actual payload_kg*actual distance_km*THAT_record_share)，该条完整相容用户份额在和内。保留真实湿食品织物内含包装支撑，毛重仅减非货物车辆皮重。EACH次数一次TOTAL不变；已覆盖供应商接收空返一次。后同正N_target一次，已归一不重复；N0及必要失败职责保留。 | cp_camp_freight; cp_kitchen_freight | 实际kg*km每营期 |  |
| fluid_disjoint_stock | actual fluid supplies/fates | opening store/installed charge、新factory receipt、standalone receipt、OTHER receipt/exit、内部回收充注、期末、可用输出、收集废物、测得排放及未知各有互斥实际lot-role。新工厂收货非期初或OTHER，OTHER排命名去向，内部抵消。补充差额非排放/零。USED回收输出真实态不抵新制造/负输入/自动信用；仅真实UNUSED同源同态子库存匹配退回可耗用扣除并OMIT输出。 | cp_camp_fluids; cp_kitchen_fluids; cp_camp_assets; cp_kitchen_assets | 互斥原生流体账 |  |
| actual_species | camp/kitchen direct species | 物种量=实际独立测量，或相容actual activity*actual emission factor，确切物种颗粒介质。必要组成/去向/气体温压转换各自unit/basis/method/state/sampletime/source仅一次，完整因子不重复份额。未知库存批次差额或气味非排放/零，水蒸气空气Elementary Mass，收集水流体Waste。 | cp_camp_releases; cp_kitchen_releases; cp_kitchen_recipes | 有据原生物种量 |  |

### Data Quality Requirements

| requirement_id | 适用对象 | Requirement | Evidence |
| --- | --- | --- | --- |
| actual_identity_support | 全部交换 | 真实食材能水资产服务接收物种介质逐身份供应态属性单位展开，未决集合不允许混合假UUID。Count仅验证单位非营期/膳食身份。 | 实际原生现场与候选详情支持验证，明确未决限制 |
| native_operands | 全部运算 | 各独立量均value/unit/basis/method/state/sampletime/source，含食品组成干湿水密度温度驱动寿命各阶段气体换算及库存角色。未知不兼容阻断非零，CP原生单节点键。 | 22个所属节点CP和原始来源 |
| complete_stage_and_pool | 全部职责 | 全部客人支持员工访客其他项目、必要闲置失败、完整资产供应商和真实完成缺阶段/零交接集成。部分输出有自身范围，未归属阶段份额跨期则最终不完整。 | 源接收owner量状态时间覆盖解决链接 |
| range_limits | 每卡 | 范围证据需求要求真实量状态基准覆盖，不强制通用数字区间。真实相容经验守门范围须独立来源群体比较，同记录最小最大非独立验证。缺范围明确，不编配方产率份量寿命基准。 | 实际现场测量和独立匹配证据 |
| source_limits | 经营者资料 | UNSD分类及PGL定性路线非排放产率食品安全法律阈值默认时长餐数份量寿命。披露实际现场适用日期及实测估算不确定性敏感性更新。 | 六个限定来源及实际运行记录 |
| complete_camp_electricity | camp_session_service | 最终使用前，按下方完整采集定义将`camp_electricity`的每项真实情形展开为独立身份交换，完成原生数量、状态、来源、接收方及覆盖证据。缺UUID或数量不能作零；保留固定情形的数量须从余项排除。 | `cp_camp_utilities` |
| complete_camp_water | camp_session_service | 最终使用前，按下方完整采集定义将`camp_water`的每项真实情形展开为独立身份交换，完成原生数量、状态、来源、接收方及覆盖证据。缺UUID或数量不能作零；保留固定情形的数量须从余项排除。 | `cp_camp_utilities` |
| complete_camp_purchased_thermal | camp_session_service | 最终使用前，按下方完整采集定义将`camp_purchased_thermal`的每项真实情形展开为独立身份交换，完成原生数量、状态、来源、接收方及覆盖证据。缺UUID或数量不能作零；保留固定情形的数量须从余项排除。 | `cp_camp_utilities` |
| complete_camp_fuel | camp_session_service | 最终使用前，按下方完整采集定义将`camp_fuel`的每项真实情形展开为独立身份交换，完成原生数量、状态、来源、接收方及覆盖证据。缺UUID或数量不能作零；保留固定情形的数量须从余项排除。 | `cp_camp_utilities` |
| complete_camp_consumables | camp_session_service | 最终使用前，按下方完整采集定义将`camp_consumables`的每项真实情形展开为独立身份交换，完成原生数量、状态、来源、接收方及覆盖证据。缺UUID或数量不能作零；保留固定情形的数量须从余项排除。 | `cp_camp_supplies` |
| complete_camp_asset_life | camp_session_service | 最终使用前，按下方完整采集定义将`camp_asset_life`的每项真实情形展开为独立身份交换，完成原生数量、状态、来源、接收方及覆盖证据。缺UUID或数量不能作零；保留固定情形的数量须从余项排除。 | `cp_camp_assets` |
| complete_camp_reusable_gear | camp_session_service | 最终使用前，按下方完整采集定义将`camp_reusable_gear`的每项真实情形展开为独立身份交换，完成原生数量、状态、来源、接收方及覆盖证据。缺UUID或数量不能作零；保留固定情形的数量须从余项排除。 | `cp_camp_assets` |
| complete_camp_support_service | camp_session_service | 最终使用前，按下方完整采集定义将`camp_support_service`的每项真实情形展开为独立身份交换，完成原生数量、状态、来源、接收方及覆盖证据。缺UUID或数量不能作零；保留固定情形的数量须从余项排除。 | `cp_camp_providers` |
| complete_camp_freight | camp_session_service | 最终使用前，按下方完整采集定义将`camp_freight`的每项真实情形展开为独立身份交换，完成原生数量、状态、来源、接收方及覆盖证据。缺UUID或数量不能作零；保留固定情形的数量须从余项排除。 | `cp_camp_freight` |
| complete_camp_refrigerant_supply | camp_session_service | 最终使用前，按下方完整采集定义将`camp_refrigerant_supply`的每项真实情形展开为独立身份交换，完成原生数量、状态、来源、接收方及覆盖证据。缺UUID或数量不能作零；保留固定情形的数量须从余项排除。 | `cp_camp_fluids` |
| complete_camp_direct_water_withdrawal | camp_session_service | 最终使用前，按下方完整采集定义将`camp_direct_water_withdrawal`的每项真实情形展开为独立身份交换，完成原生数量、状态、来源、接收方及覆盖证据。缺UUID或数量不能作零；保留固定情形的数量须从余项排除。 | `cp_camp_fates` |
| complete_camp_unused_supply_return | camp_session_service | 最终使用前，按下方完整采集定义将`camp_unused_supply_return`的每项真实情形展开为独立身份交换，完成原生数量、状态、来源、接收方及覆盖证据。缺UUID或数量不能作零；保留固定情形的数量须从余项排除。 | `cp_camp_supplies` |
| complete_camp_usable_asset_transfer | camp_session_service | 最终使用前，按下方完整采集定义将`camp_usable_asset_transfer`的每项真实情形展开为独立身份交换，完成原生数量、状态、来源、接收方及覆盖证据。缺UUID或数量不能作零；保留固定情形的数量须从余项排除。 | `cp_camp_assets` |
| complete_camp_usable_recovered_fluid | camp_session_service | 最终使用前，按下方完整采集定义将`camp_usable_recovered_fluid`的每项真实情形展开为独立身份交换，完成原生数量、状态、来源、接收方及覆盖证据。缺UUID或数量不能作零；保留固定情形的数量须从余项排除。 | `cp_camp_fluids` |
| complete_camp_guest_solid_waste | camp_session_service | 最终使用前，按下方完整采集定义将`camp_guest_solid_waste`的每项真实情形展开为独立身份交换，完成原生数量、状态、来源、接收方及覆盖证据。缺UUID或数量不能作零；保留固定情形的数量须从余项排除。 | `cp_camp_fates` |
| complete_camp_spent_cleaning_solids | camp_session_service | 最终使用前，按下方完整采集定义将`camp_spent_cleaning_solids`的每项真实情形展开为独立身份交换，完成原生数量、状态、来源、接收方及覆盖证据。缺UUID或数量不能作零；保留固定情形的数量须从余项排除。 | `cp_camp_fates` |
| complete_camp_retired_asset_waste | camp_session_service | 最终使用前，按下方完整采集定义将`camp_retired_asset_waste`的每项真实情形展开为独立身份交换，完成原生数量、状态、来源、接收方及覆盖证据。缺UUID或数量不能作零；保留固定情形的数量须从余项排除。 | `cp_camp_assets` |
| complete_camp_contained_effluent | camp_session_service | 最终使用前，按下方完整采集定义将`camp_contained_effluent`的每项真实情形展开为独立身份交换，完成原生数量、状态、来源、接收方及覆盖证据。缺UUID或数量不能作零；保留固定情形的数量须从余项排除。 | `cp_camp_fates` |
| complete_camp_contained_fluid_waste | camp_session_service | 最终使用前，按下方完整采集定义将`camp_contained_fluid_waste`的每项真实情形展开为独立身份交换，完成原生数量、状态、来源、接收方及覆盖证据。缺UUID或数量不能作零；保留固定情形的数量须从余项排除。 | `cp_camp_fluids` |
| complete_camp_direct_species | camp_session_service | 最终使用前，按下方完整采集定义将`camp_direct_species`的每项真实情形展开为独立身份交换，完成原生数量、状态、来源、接收方及覆盖证据。缺UUID或数量不能作零；保留固定情形的数量须从余项排除。 | `cp_camp_releases` |
| complete_kitchen_food_ingredients | on_site_meal_preparation | 最终使用前，按下方完整采集定义将`kitchen_food_ingredients`的每项真实情形展开为独立身份交换，完成原生数量、状态、来源、接收方及覆盖证据。缺UUID或数量不能作零；保留固定情形的数量须从余项排除。 | `cp_kitchen_food_stocks` |
| complete_kitchen_recipe_water | on_site_meal_preparation | 最终使用前，按下方完整采集定义将`kitchen_recipe_water`的每项真实情形展开为独立身份交换，完成原生数量、状态、来源、接收方及覆盖证据。缺UUID或数量不能作零；保留固定情形的数量须从余项排除。 | `cp_kitchen_recipes` |
| complete_kitchen_operating_water | on_site_meal_preparation | 最终使用前，按下方完整采集定义将`kitchen_operating_water`的每项真实情形展开为独立身份交换，完成原生数量、状态、来源、接收方及覆盖证据。缺UUID或数量不能作零；保留固定情形的数量须从余项排除。 | `cp_kitchen_utilities` |
| complete_kitchen_electricity | on_site_meal_preparation | 最终使用前，按下方完整采集定义将`kitchen_electricity`的每项真实情形展开为独立身份交换，完成原生数量、状态、来源、接收方及覆盖证据。缺UUID或数量不能作零；保留固定情形的数量须从余项排除。 | `cp_kitchen_utilities` |
| complete_kitchen_fuel | on_site_meal_preparation | 最终使用前，按下方完整采集定义将`kitchen_fuel`的每项真实情形展开为独立身份交换，完成原生数量、状态、来源、接收方及覆盖证据。缺UUID或数量不能作零；保留固定情形的数量须从余项排除。 | `cp_kitchen_utilities` |
| complete_kitchen_purchased_thermal | on_site_meal_preparation | 最终使用前，按下方完整采集定义将`kitchen_purchased_thermal`的每项真实情形展开为独立身份交换，完成原生数量、状态、来源、接收方及覆盖证据。缺UUID或数量不能作零；保留固定情形的数量须从余项排除。 | `cp_kitchen_utilities` |
| complete_kitchen_cleaning_materials | on_site_meal_preparation | 最终使用前，按下方完整采集定义将`kitchen_cleaning_materials`的每项真实情形展开为独立身份交换，完成原生数量、状态、来源、接收方及覆盖证据。缺UUID或数量不能作零；保留固定情形的数量须从余项排除。 | `cp_kitchen_supplies` |
| complete_kitchen_asset_life | on_site_meal_preparation | 最终使用前，按下方完整采集定义将`kitchen_asset_life`的每项真实情形展开为独立身份交换，完成原生数量、状态、来源、接收方及覆盖证据。缺UUID或数量不能作零；保留固定情形的数量须从余项排除。 | `cp_kitchen_assets` |
| complete_kitchen_provider_service | on_site_meal_preparation | 最终使用前，按下方完整采集定义将`kitchen_provider_service`的每项真实情形展开为独立身份交换，完成原生数量、状态、来源、接收方及覆盖证据。缺UUID或数量不能作零；保留固定情形的数量须从余项排除。 | `cp_kitchen_providers` |
| complete_kitchen_refrigerant_supply | on_site_meal_preparation | 最终使用前，按下方完整采集定义将`kitchen_refrigerant_supply`的每项真实情形展开为独立身份交换，完成原生数量、状态、来源、接收方及覆盖证据。缺UUID或数量不能作零；保留固定情形的数量须从余项排除。 | `cp_kitchen_fluids` |
| complete_kitchen_freight | on_site_meal_preparation | 最终使用前，按下方完整采集定义将`kitchen_freight`的每项真实情形展开为独立身份交换，完成原生数量、状态、来源、接收方及覆盖证据。缺UUID或数量不能作零；保留固定情形的数量须从余项排除。 | `cp_kitchen_freight` |
| complete_kitchen_direct_water_withdrawal | on_site_meal_preparation | 最终使用前，按下方完整采集定义将`kitchen_direct_water_withdrawal`的每项真实情形展开为独立身份交换，完成原生数量、状态、来源、接收方及覆盖证据。缺UUID或数量不能作零；保留固定情形的数量须从余项排除。 | `cp_kitchen_fates` |
| complete_kitchen_unused_supply_return | on_site_meal_preparation | 最终使用前，按下方完整采集定义将`kitchen_unused_supply_return`的每项真实情形展开为独立身份交换，完成原生数量、状态、来源、接收方及覆盖证据。缺UUID或数量不能作零；保留固定情形的数量须从余项排除。 | `cp_kitchen_food_stocks` |
| complete_kitchen_usable_recovered_fluid | on_site_meal_preparation | 最终使用前，按下方完整采集定义将`kitchen_usable_recovered_fluid`的每项真实情形展开为独立身份交换，完成原生数量、状态、来源、接收方及覆盖证据。缺UUID或数量不能作零；保留固定情形的数量须从余项排除。 | `cp_kitchen_fluids` |
| complete_kitchen_usable_food_transfer | on_site_meal_preparation | 最终使用前，按下方完整采集定义将`kitchen_usable_food_transfer`的每项真实情形展开为独立身份交换，完成原生数量、状态、来源、接收方及覆盖证据。缺UUID或数量不能作零；保留固定情形的数量须从余项排除。 | `cp_kitchen_fates` |
| complete_kitchen_preparation_waste | on_site_meal_preparation | 最终使用前，按下方完整采集定义将`kitchen_preparation_waste`的每项真实情形展开为独立身份交换，完成原生数量、状态、来源、接收方及覆盖证据。缺UUID或数量不能作零；保留固定情形的数量须从余项排除。 | `cp_kitchen_recipes` |
| complete_kitchen_packaging_waste | on_site_meal_preparation | 最终使用前，按下方完整采集定义将`kitchen_packaging_waste`的每项真实情形展开为独立身份交换，完成原生数量、状态、来源、接收方及覆盖证据。缺UUID或数量不能作零；保留固定情形的数量须从余项排除。 | `cp_kitchen_fates` |
| complete_kitchen_spent_cleaning_solids | on_site_meal_preparation | 最终使用前，按下方完整采集定义将`kitchen_spent_cleaning_solids`的每项真实情形展开为独立身份交换，完成原生数量、状态、来源、接收方及覆盖证据。缺UUID或数量不能作零；保留固定情形的数量须从余项排除。 | `cp_kitchen_fates` |
| complete_kitchen_retired_asset_waste | on_site_meal_preparation | 最终使用前，按下方完整采集定义将`kitchen_retired_asset_waste`的每项真实情形展开为独立身份交换，完成原生数量、状态、来源、接收方及覆盖证据。缺UUID或数量不能作零；保留固定情形的数量须从余项排除。 | `cp_kitchen_assets` |
| complete_kitchen_contained_effluent | on_site_meal_preparation | 最终使用前，按下方完整采集定义将`kitchen_contained_effluent`的每项真实情形展开为独立身份交换，完成原生数量、状态、来源、接收方及覆盖证据。缺UUID或数量不能作零；保留固定情形的数量须从余项排除。 | `cp_kitchen_fates` |
| complete_kitchen_contained_fluid_waste | on_site_meal_preparation | 最终使用前，按下方完整采集定义将`kitchen_contained_fluid_waste`的每项真实情形展开为独立身份交换，完成原生数量、状态、来源、接收方及覆盖证据。缺UUID或数量不能作零；保留固定情形的数量须从余项排除。 | `cp_kitchen_fluids` |
| complete_kitchen_direct_species | on_site_meal_preparation | 最终使用前，按下方完整采集定义将`kitchen_direct_species`的每项真实情形展开为独立身份交换，完成原生数量、状态、来源、接收方及覆盖证据。缺UUID或数量不能作零；保留固定情形的数量须从余项排除。 | `cp_kitchen_releases` |


### 强制清单完成记录

以下记录是强制物理采集和情形展开要求，不是单条清单交换。原有节点、方向、流类型、数量基准、采集协议、库存去向、供应接收和来源义务全部继续有效。正文对这些编号的引用对应这些完成要求。前景数据集完成前，必须将每项真实物料、服务、资产全寿命、废物流或物种介质分别展开为具原生数量和排他覆盖的独立身份交换。保留固定卡只覆盖其真实受支持情形，其余真实情形须无重叠协调。身份、发生或数量缺失仍待采集，不能填零或删项。内部配对交接和组分审计视图不可相加；必要全寿命与供应商阶段必须实际完成一次。

#### camp_electricity

责任节点与原流角色：camp_session_service / inputs / product

实际住宿、卫浴热水、活动、清洁、支持及必要待机用电。厨房实际分项与共表分配互斥；不能用铭牌或预约人数推电量。

本卡为独立身份分支`camp_electricity_ac`之外的余项清单要求。已计入分支的实际数量不再计入本余项交换，原类目总量仅作不可相加的协调审计。其他实际材料、状态、来源或介质仍须保留自身经核实的身份、原生数量及供应接收责任；记录缺失时，不推定条件分支发生、不发生或数量为零。

- 选定流：实际营期住宿活动及支持用电
- 流属性/单位：Energy / kWh
- 数量规则：在 cp_camp_utilities 下，实际独占目标责任数量 / 正的相同画像 N_target 一次；已每参考流记录不变，N_target=0保留不除。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_camp_utilities`

范围证据需求：实际电表区间、复位调整、已应用倍率、实际平均功率与同区间时长，完整用户/待机责任和归一化状态。 缺通用数值范围不允许猜值，实际量/身份/覆盖未明确时限制最终使用。

#### camp_water

责任节点与原流角色：camp_session_service / inputs / product

实际住宿、卫浴、活动、清洁及支持供水，按真实源与用途。厨房/配方水不能在共表内重复；供水量不能直接当污水量。

本卡为独立身份分支`camp_water_liquid_tap`之外的余项清单要求。已计入分支的实际数量不再计入本余项交换，原类目总量仅作不可相加的协调审计。其他实际材料、状态、来源或介质仍须保留自身经核实的身份、原生数量及供应接收责任；记录缺失时，不推定条件分支发生、不发生或数量为零。

- 选定流：实际营地住宿活动及支持供水
- 流属性/单位：Volume / m3
- 数量规则：在 cp_camp_utilities 下，实际独占目标责任数量 / 正的相同画像 N_target 一次；已每参考流记录不变，N_target=0保留不除。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_camp_utilities`

范围证据需求：实际源、表计/原生体积、期间、完整用户与厨房排除；转换密度/温度仅在实际需要时有据使用。 缺通用数值范围不允许猜值，实际量/身份/覆盖未明确时限制最终使用。

#### camp_purchased_thermal

责任节点与原流角色：camp_session_service / inputs / product

仅实际外部交付的有用热/冷，保留状态及供应商燃料、损失、设施覆盖；不与同一现场燃料/设备转换重复。

本卡为独立身份分支`camp_purchased_thermal_delivered_heat`之外的余项清单要求。已计入分支的实际数量不再计入本余项交换，原类目总量仅作不可相加的协调审计。其他实际材料、状态、来源或介质仍须保留自身经核实的身份、原生数量及供应接收责任；记录缺失时，不推定条件分支发生、不发生或数量为零。

- 选定流：实际外购营地有用供热或供冷
- 流属性/单位：Energy / MJ
- 数量规则：在 cp_camp_utilities 下，实际独占目标责任数量 / 正的相同画像 N_target 一次；已每参考流记录不变，N_target=0保留不除。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_camp_utilities`

范围证据需求：实际供应商、表计、有用能量、状态/温度、期间、完整用户与覆盖排除，无默认锅炉/制冷技术。 缺通用数值范围不允许猜值，实际量/身份/覆盖未明确时限制最终使用。

#### camp_fuel

责任节点与原流角色：camp_session_service / inputs / product

仅实际命名燃料/载体供应及其真实职责，包括真实存在的活动用火或支持设备；不默认所有营地燃烧。供给库存与燃烧量独立。

- 选定流：实际营地活动及设备燃料供应
- 流属性/单位：Mass / kg
- 数量规则：在 cp_camp_utilities 下，实际独占目标责任数量 / 正的相同画像 N_target 一次；已每参考流记录不变，N_target=0保留不除。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_camp_utilities`

范围证据需求：实际开闭库存、净收货、未用退回、真实燃烧及原生体积密度温压/热值种类；无默认燃料/效率/排放因子。 缺通用数值范围不允许猜值，实际量/身份/覆盖未明确时限制最终使用。

#### camp_consumables

责任节点与原流角色：camp_session_service / inputs / product

真实不同SKU/状态分别展开；包装皮重排除，成品溶液与浓缩剂加水组分不可相加。可复用装备不是每营期新耗材。

本卡为独立身份分支`camp_consumables_synthetic_detergent`之外的余项清单要求。已计入分支的实际数量不再计入本余项交换，原类目总量仅作不可相加的协调审计。其他实际材料、状态、来源或介质仍须保留自身经核实的身份、原生数量及供应接收责任；记录缺失时，不推定条件分支发生、不发生或数量为零。

- 选定流：实际营地清洁活动及支持耗材
- 流属性/单位：Mass / kg
- 数量规则：在 cp_camp_supplies 下，实际独占目标责任数量 / 正的相同画像 N_target 一次；已每参考流记录不变，N_target=0保留不除。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_camp_supplies`

范围证据需求：实际净库存/用途/未用退回/配方/计数与原生转换；总量TOTAL不再乘数量，逐件EACH只乘实际件数一次。 缺通用数值范围不允许猜值，实际量/身份/覆盖未明确时限制最终使用。

#### camp_asset_life

责任节点与原流角色：camp_session_service / inputs / product

实际建筑、场地工程、装修FF&E、共享系统和支持资产全制造安装维护实际更换终末责任；厨房与供应商相同部分互斥。土地实际接口在资产/供应商矩阵单列有据原生量，不能视为Count。

- 选定流：完整寿命营地建筑装修设施及支持资产服务
- 流属性/单位：Count / Item(s)
- 数量规则：在 cp_camp_assets 下，实际独占目标责任数量 / 正的相同画像 N_target 一次；已每参考流记录不变，N_target=0保留不除。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_camp_assets`

范围证据需求：实际资产/组成/原生量及有据当量、全用户已观察加有据剩余寿命/终止/不确定性；年度N/容量非全寿命；未覆盖实际阶段完成集成。 缺通用数值范围不允许猜值，实际量/身份/覆盖未明确时限制最终使用。

#### camp_reusable_gear

责任节点与原流角色：camp_session_service / inputs / product

实际活动结构/器材、安全用品、床品/织物等复用物全生命周期，含实际维修、损失、更换及终末。不默认每次活动新购或固定循环寿命。

- 选定流：完整寿命营地活动装备安全用品及织物服务
- 流属性/单位：Count / Item(s)
- 数量规则：在 cp_camp_assets 下，实际独占目标责任数量 / 正的相同画像 N_target 一次；已每参考流记录不变，N_target=0保留不除。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_camp_assets`

范围证据需求：实际BOM/任务使用/全用户已观察及有据剩余驱动、实际归属与供应商重复排除，原生计量当量需要独立证据。 缺通用数值范围不允许猜值，实际量/身份/覆盖未明确时限制最终使用。

#### camp_support_service

责任节点与原流角色：camp_session_service / inputs / product

实际完成/真实可供的互补物理服务，不把费用工资预约自动当Item(s)。保留食品住宿娱乐完整包；外包只替代准确已覆盖部分。

- 选定流：实际互补营地活动清洁及支持服务结果
- 流属性/单位：Count / Item(s)
- 数量规则：在 cp_camp_providers 下，实际独占目标责任数量 / 正的相同画像 N_target 一次；已每参考流记录不变，N_target=0保留不除。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_camp_providers`

范围证据需求：实际服务门槛、原生量及质量、全部客户、材料能水/资产洗涤运输接收责任矩阵，缺失实际阶段须完成链接集成。 缺通用数值范围不允许猜值，实际量/身份/覆盖未明确时限制最终使用。

#### camp_freight

责任节点与原流角色：camp_session_service / inputs / product

实际装载运输区段和职责未被供应商/资产/接收端覆盖时计入。货物真实水分、包装容器支撑保留，只扣非货物车辆皮重；非游客出行。

- 选定流：实际唯一营地物资与接收运输
- 流属性/单位：Mass * distance / kg*km
- 数量规则：在 cp_camp_freight 下，实际独占目标责任数量 / 正的相同画像 N_target 一次；已每参考流记录不变，N_target=0保留不除。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_camp_freight`

范围证据需求：实际唯一load-leg、载荷/毛重减非货物皮重、距离、EACH/TOTAL与实际次数、该条完整用户分配在SUM内部，空返覆盖一次。 缺通用数值范围不允许猜值，实际量/身份/覆盖未明确时限制最终使用。

#### camp_refrigerant_supply

责任节点与原流角色：camp_session_service / inputs / product

实际独立供应化学物/混合物有来源库存；整机工厂充注上游一次，内部回收再充注不是新外部收货或排放证据。

- 选定流：实际独立营地设备制冷剂及传热流体供应
- 流属性/单位：Mass / kg
- 数量规则：在 cp_camp_fluids 下，实际独占目标责任数量 / 正的相同画像 N_target 一次；已每参考流记录不变，N_target=0保留不除。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_camp_fluids`

范围证据需求：实际化学物/SKU/设备系统、互斥批次库存职责、净供应与回收去向；无通用充注量/泄漏率。 缺通用数值范围不允许猜值，实际量/身份/覆盖未明确时限制最终使用。

#### camp_direct_water_withdrawal

责任节点与原流角色：camp_session_service / inputs / elementary

仅实际从环境直接抽取且归属营地的水，不与购水或厨房同池重复。真实独立抽取/处理设施须复核路线。

- 选定流：实际源明确的营地直接取水
- 流属性/单位：Volume / m3
- 数量规则：在 cp_camp_fates 下，实际独占目标责任数量 / 正的相同画像 N_target 一次；已每参考流记录不变，N_target=0保留不除。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_camp_fates`

范围证据需求：实际源/地点/原生取水量/方法/期间/完整用户分配；不由账单或未知差额推源及数量。 缺通用数值范围不允许猜值，实际量/身份/覆盖未明确时限制最终使用。

#### camp_unused_supply_return

责任节点与原流角色：camp_session_service / outputs / product

仅同来源SKU/状态实际未用退回；毛供给S/N输入加退回/N输出，或已耗用(S-return)/N输入并省略该输出，两者择一。使用过的回收流体/资产不是未用耗材。

- 选定流：实际匹配未用营地物资退回
- 流属性/单位：Mass / kg
- 数量规则：在 cp_camp_supplies 下，实际独占目标责任数量 / 正的相同画像 N_target 一次；已每参考流记录不变，N_target=0保留不除。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_camp_supplies`

范围证据需求：实际源库存/退回接受/原生净量/状态与采用口径；不得双扣、跨库存抵扣或自动替代生产收益。 缺通用数值范围不允许猜值，实际量/身份/覆盖未明确时限制最终使用。

#### camp_usable_asset_transfer

责任节点与原流角色：camp_session_service / outputs / product

真实接收方接受可用状态的整物或组成对外交接，保留来源/剩余职责；回收标签不能证明可用。整物/组成/内含流体非相加。

- 选定流：实际可用营地装备资产对外交接
- 流属性/单位：Mass / kg
- 数量规则：在 cp_camp_assets 下，实际独占目标责任数量 / 正的相同画像 N_target 一次；已每参考流记录不变，N_target=0保留不除。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_camp_assets`

范围证据需求：实际物品/组成/接收人/原生净量/转换/日期/剩余责任，禁止自动避免制造信用。 缺通用数值范围不允许猜值，实际量/身份/覆盖未明确时限制最终使用。

#### camp_usable_recovered_fluid

责任节点与原流角色：camp_session_service / outputs / product

真实可用状态的已使用回收流体独立交接。不论来自工厂充注或补充，都不是自动等同未用新物料，不抵新制造、不负输入/自动信用；留存回收属期末。

- 选定流：实际可用已使用营地设备流体输出
- 流属性/单位：Mass / kg
- 数量规则：在 cp_camp_fluids 下，实际独占目标责任数量 / 正的相同画像 N_target 一次；已每参考流记录不变，N_target=0保留不除。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_camp_fluids`

范围证据需求：实际化学物/质量状态/原生量/接收人/来源与独立去向；仅真实同源同态未用子库存可适用未用退回规则。 缺通用数值范围不允许猜值，实际量/身份/覆盖未明确时限制最终使用。

#### camp_guest_solid_waste

责任节点与原流角色：camp_session_service / outputs / waste

营地确有收集/接收处理责任的参与者及经营者来源垃圾。不同真实材质/状态/接收端展开；真实混收一总量加非相加组成。收游客垃圾不导入其自购食品制造。

- 选定流：实际不同参与者与营地服务固废交接
- 流属性/单位：Mass / kg
- 数量规则：在 cp_camp_fates 下，实际独占目标责任数量 / 正的相同画像 N_target 一次；已每参考流记录不变，N_target=0保留不除。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_camp_fates`

范围证据需求：实际来源/事件/流/原生净量/组成/接收/运输处理归属，无标准人均垃圾因子或假想混合流。 缺通用数值范围不允许猜值，实际量/身份/覆盖未明确时限制最终使用。

#### camp_spent_cleaning_solids

责任节点与原流角色：camp_session_service / outputs / waste

真实接收的擦拭物、过滤物、吸收物、包装/残渣按状态/接收端。湿混合捕集物已含载液/碎片，不能另加游离液体或材料。

- 选定流：实际营地用过的清洁捕集物及包装废物
- 流属性/单位：Mass / kg
- 数量规则：在 cp_camp_fates 下，实际独占目标责任数量 / 正的相同画像 N_target 一次；已每参考流记录不变，N_target=0保留不除。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_camp_fates`

范围证据需求：真实任务/来源/材质/整物组成关系/净量/接收端；物资收货量不是废物量。 缺通用数值范围不允许猜值，实际量/身份/覆盖未明确时限制最终使用。

#### camp_retired_asset_waste

责任节点与原流角色：camp_session_service / outputs / waste

真实废弃状态接收，整物或组成独立。内含液体为非相加组分；全资产/供应商已经覆盖相同终末处理时物理交接仍追踪但处理负担不重计。

- 选定流：实际废弃营地织物设备结构与组成
- 流属性/单位：Mass / kg
- 数量规则：在 cp_camp_assets 下，实际独占目标责任数量 / 正的相同画像 N_target 一次；已每参考流记录不变，N_target=0保留不除。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_camp_assets`

范围证据需求：实际报废/组成BOM/接收/净量与相同寿命终末覆盖，无假设寿命、失踪设备损失或统一回收率。 缺通用数值范围不允许猜值，实际量/身份/覆盖未明确时限制最终使用。

#### camp_contained_effluent

责任节点与原流角色：camp_session_service / outputs / waste

真实交到污水管/接收端的液体，保留实际水/固体/化学状态和处理覆盖。真实不同流展开，实际混收一非相加流；不是直接环境水。

- 选定流：实际收集营地卫浴清洁及设备废水
- 流属性/单位：Volume / m3
- 数量规则：在 cp_camp_fates 下，实际独占目标责任数量 / 正的相同画像 N_target 一次；已每参考流记录不变，N_target=0保留不除。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_camp_fates`

范围证据需求：独立实际接收/表计/原生体积/组成，仅转换时用独立密度温度，共享责任及洗涤/厨房排除。 缺通用数值范围不允许猜值，实际量/身份/覆盖未明确时限制最终使用。

#### camp_contained_fluid_waste

责任节点与原流角色：camp_session_service / outputs / waste

真实独立不可用回收流体交处理端，不是空气排放。随整机/组成/捕集混合物交出的含量仅为非相加组成，不能另加同一流体废物。

- 选定流：实际收集营地制冷剂及传热流体废物
- 流属性/单位：Mass / kg
- 数量规则：在 cp_camp_fluids 下，实际独占目标责任数量 / 正的相同画像 N_target 一次；已每参考流记录不变，N_target=0保留不除。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_camp_fluids`

范围证据需求：实际化学物/混合物、原生净量/接收/库存来源和运输处理覆盖；补充或回收体积不能直接当废弃或排放。 缺通用数值范围不允许猜值，实际量/身份/覆盖未明确时限制最终使用。

#### camp_direct_species

责任节点与原流角色：camp_session_service / outputs / elementary

实际测量或兼容有据方法支持的燃烧/流体/材料/水物种与颗粒，各自实际介质。水蒸气向空气为Elementary Mass；收集水/流体为Waste。未知差额、气味、采购非发生量或零证据。

本卡为独立身份分支`camp_direct_species_co2_fossil_air`; `camp_direct_species_methane_fossil_air`; `camp_direct_species_nitrous_oxide_air`之外的余项清单要求。已计入分支的实际数量不再计入本余项交换，原类目总量仅作不可相加的协调审计。其他实际材料、状态、来源或介质仍须保留自身经核实的身份、原生数量及供应接收责任；记录缺失时，不推定条件分支发生、不发生或数量为零。

- 选定流：实际营地确切物种及介质排放
- 流属性/单位：Mass / kg
- 数量规则：在 cp_camp_releases 下，实际独占目标责任数量 / 正的相同画像 N_target 一次；已每参考流记录不变，N_target=0保留不除。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_camp_releases`

范围证据需求：确切物种/基准/颗粒/介质及原生测量或实际活动因子，独立组成/去向/状态元数据；完整因子不重复乘份额。 缺通用数值范围不允许猜值，实际量/身份/覆盖未明确时限制最终使用。

#### kitchen_food_ingredients

责任节点与原流角色：on_site_meal_preparation / inputs / product

每个真实食材/组分按身份、购入生/预制/熟/冻/冷状态与准确门口展开。实际净收货食品含水/骨/皮不是包装皮重或可互换干可食物；预制食品保留已有上游烹制覆盖。

- 选定流：实际现场营地供餐食材饮料投入
- 流属性/单位：Mass / kg
- 数量规则：在 cp_kitchen_food_stocks 下，实际独占目标责任数量 / 正的相同画像 N_target 一次；已每参考流记录不变，N_target=0保留不除。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_kitchen_food_stocks`

范围证据需求：实际SKU/配方领用/原生库存/净收货/可食及收货态定义/未用退回/储存损失，上游一次，无统一菜单份量产率混合。 缺通用数值范围不允许猜值，实际量/身份/覆盖未明确时限制最终使用。

#### kitchen_recipe_water

责任节点与原流角色：on_site_meal_preparation / inputs / product

仅实际加入食物饮料的配方/工艺水或供应冰及相容门口。食材/预制食品中已有水不再次投入；保留/蒸发/排出需真实证据，非固定份额。

本卡为独立身份分支`kitchen_recipe_water_liquid_tap`之外的余项清单要求。已计入分支的实际数量不再计入本余项交换，原类目总量仅作不可相加的协调审计。其他实际材料、状态、来源或介质仍须保留自身经核实的身份、原生数量及供应接收责任；记录缺失时，不推定条件分支发生、不发生或数量为零。

- 选定流：实际作为膳食组成投入的水和冰
- 流属性/单位：Volume / m3
- 数量规则：在 cp_kitchen_recipes 下，实际独占目标责任数量 / 正的相同画像 N_target 一次；已每参考流记录不变，N_target=0保留不除。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_kitchen_recipes`

范围证据需求：实际配方/批次/加入原生量/状态/来源，转换才用独立兼容密度温度/组成，不默认全部保留或废弃。 缺通用数值范围不允许猜值，实际量/身份/覆盖未明确时限制最终使用。

#### kitchen_operating_water

责任节点与原流角色：on_site_meal_preparation / inputs / product

不在配方组成重复的真实用水：食材清洗、洗餐具、清洁及设备职责。烹饪水按真实用途判断，每一实际物理量归属一次。

本卡为独立身份分支`kitchen_operating_water_liquid_tap`之外的余项清单要求。已计入分支的实际数量不再计入本余项交换，原类目总量仅作不可相加的协调审计。其他实际材料、状态、来源或介质仍须保留自身经核实的身份、原生数量及供应接收责任；记录缺失时，不推定条件分支发生、不发生或数量为零。

- 选定流：实际厨房清洗清洁及设备运行用水
- 流属性/单位：Volume / m3
- 数量规则：在 cp_kitchen_utilities 下，实际独占目标责任数量 / 正的相同画像 N_target 一次；已每参考流记录不变，N_target=0保留不除。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_kitchen_utilities`

范围证据需求：实际源/表计/用途/原生体积/时间、配方水排除和独立污水/保留/直接去向，无供水全去污水假设。 缺通用数值范围不允许猜值，实际量/身份/覆盖未明确时限制最终使用。

#### kitchen_electricity

责任节点与原流角色：on_site_meal_preparation / inputs / product

实际冷藏/保温、备料烹饪、排风照明、洗涤清洁和必要待机/失败职责；不按铭牌乘计划餐数或品牌推技术。

本卡为独立身份分支`kitchen_electricity_ac`之外的余项清单要求。已计入分支的实际数量不再计入本余项交换，原类目总量仅作不可相加的协调审计。其他实际材料、状态、来源或介质仍须保留自身经核实的身份、原生数量及供应接收责任；记录缺失时，不推定条件分支发生、不发生或数量为零。

- 选定流：实际厨房备制烹饪保温及洗涤用电
- 流属性/单位：Energy / kWh
- 数量规则：在 cp_kitchen_utilities 下，实际独占目标责任数量 / 正的相同画像 N_target 一次；已每参考流记录不变，N_target=0保留不除。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_kitchen_utilities`

范围证据需求：实际电表/区间平均功率及匹配时长/转换、全部用户/期间和营地共表排除。 缺通用数值范围不允许猜值，实际量/身份/覆盖未明确时限制最终使用。

#### kitchen_fuel

责任节点与原流角色：on_site_meal_preparation / inputs / product

仅真实命名载体SKU与净库存及独立有据实际燃烧使用。购入有用热服务与对应供应商燃料设备不能重复；具体排放独立有据。

- 选定流：实际厨房烹饪及设备燃料供应
- 流属性/单位：Mass / kg
- 数量规则：在 cp_kitchen_utilities 下，实际独占目标责任数量 / 正的相同画像 N_target 一次；已每参考流记录不变，N_target=0保留不除。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_kitchen_utilities`

范围证据需求：实际期初净收货期末/未用退回/职责，原生体积密度温度或热值种类仅实际使用时采集，无标准燃料效率因子。 缺通用数值范围不允许猜值，实际量/身份/覆盖未明确时限制最终使用。

#### kitchen_purchased_thermal

责任节点与原流角色：on_site_meal_preparation / inputs / product

仅真实计量交付状态及供应商损失燃料资产范围。电制冷机不是第二份购冷，不因热餐推定独立锅炉。

本卡为独立身份分支`kitchen_purchased_thermal_delivered_heat`之外的余项清单要求。已计入分支的实际数量不再计入本余项交换，原类目总量仅作不可相加的协调审计。其他实际材料、状态、来源或介质仍须保留自身经核实的身份、原生数量及供应接收责任；记录缺失时，不推定条件分支发生、不发生或数量为零。

- 选定流：实际外购厨房有用热或冷服务
- 流属性/单位：Energy / MJ
- 数量规则：在 cp_kitchen_utilities 下，实际独占目标责任数量 / 正的相同画像 N_target 一次；已每参考流记录不变，N_target=0保留不除。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_kitchen_utilities`

范围证据需求：实际供应商/有用交付能量/原生表计状态温度来源、全部用户份额与相同直接覆盖排除。 缺通用数值范围不允许猜值，实际量/身份/覆盖未明确时限制最终使用。

#### kitchen_cleaning_materials

责任节点与原流角色：on_site_meal_preparation / inputs / product

真实不同SKU/状态清洁剂、擦拭吸收过滤物及供餐支持材料。可复用餐具器具为全寿命资产，不是每餐新件；浓缩剂、成品液和活性含量非相加。

本卡为独立身份分支`kitchen_cleaning_materials_synthetic_detergent`之外的余项清单要求。已计入分支的实际数量不再计入本余项交换，原类目总量仅作不可相加的协调审计。其他实际材料、状态、来源或介质仍须保留自身经核实的身份、原生数量及供应接收责任；记录缺失时，不推定条件分支发生、不发生或数量为零。

- 选定流：实际厨房清洁卫生供餐及支持物料
- 流属性/单位：Mass / kg
- 数量规则：在 cp_kitchen_supplies 下，实际独占目标责任数量 / 正的相同画像 N_target 一次；已每参考流记录不变，N_target=0保留不除。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_kitchen_supplies`

范围证据需求：实际原生净库存排包装皮重、匹配未用退回、职责及需要时组成密度；无统一消毒配方剂量/假定排放。 缺通用数值范围不允许猜值，实际量/身份/覆盖未明确时限制最终使用。

#### kitchen_asset_life

责任节点与原流角色：on_site_meal_preparation / inputs / product

实际厨房餐厅建筑组成、冷/热/排风/洗涤设备、台面、器具餐具支持物完整制造安装维护实际更换终末；共享营地建筑和供应商设备阶段只有一覆盖owner。实际土地接口另按原生量/状态覆盖。

- 选定流：完整寿命厨房餐厅冷藏器具及复用设备服务
- 流属性/单位：Count / Item(s)
- 数量规则：在 cp_kitchen_assets 下，实际独占目标责任数量 / 正的相同画像 N_target 一次；已每参考流记录不变，N_target=0保留不除。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_kitchen_assets`

范围证据需求：实际资产BOM/原生量有据当量，全用户已观察加有据剩余寿命/终止、复用维修损失/不确定性；无固定年次/年度N寿命。 缺通用数值范围不允许猜值，实际量/身份/覆盖未明确时限制最终使用。

#### kitchen_provider_service

责任节点与原流角色：on_site_meal_preparation / inputs / product

仅真实完成且物理定义的互补服务及准确门口单位质量。购预制仅替代准确已含上游步骤；本范围仍要求现场实际备制。禁止同一完整餐再采购重复食材烹饪。

- 选定流：实际互补供餐备制维护服务结果
- 流属性/单位：Count / Item(s)
- 数量规则：在 cp_kitchen_providers 下，实际独占目标责任数量 / 正的相同画像 N_target 一次；已每参考流记录不变，N_target=0保留不除。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_kitchen_providers`

范围证据需求：实际服务结果/原生当量和食材能水资产运输去向范围、全部客户和已完成未覆盖补充；发票费用非Count。 缺通用数值范围不允许猜值，实际量/身份/覆盖未明确时限制最终使用。

#### kitchen_refrigerant_supply

责任节点与原流角色：on_site_meal_preparation / inputs / product

真实独立命名设备流体及库存来源。全资产工厂充注生产一次；内部回收充注不是新收货或排放证据。

- 选定流：实际独立运行厨房制冷剂与传热流体供应
- 流属性/单位：Mass / kg
- 数量规则：在 cp_kitchen_fluids 下，实际独占目标责任数量 / 正的相同画像 N_target 一次；已每参考流记录不变，N_target=0保留不除。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_kitchen_fluids`

范围证据需求：实际SKU/混合物/系统/原生库存净供应回收和互斥去向，无统一制冷充注泄漏因子。 缺通用数值范围不允许猜值，实际量/身份/覆盖未明确时限制最终使用。

#### kitchen_freight

责任节点与原流角色：on_site_meal_preparation / inputs / product

未在交付食材/供应商/全资产/接收范围覆盖的真实装载运输区段。实际运载食物水分包装支撑保留；可食干量不是全载荷。

- 选定流：实际唯一厨房食材物资及接收运输
- 流属性/单位：Mass * distance / kg*km
- 数量规则：在 cp_kitchen_freight 下，实际独占目标责任数量 / 正的相同画像 N_target 一次；已每参考流记录不变，N_target=0保留不除。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_kitchen_freight`

范围证据需求：唯一load-leg/原生载荷或毛重仅减非货物皮重、距离/EACH-TOTAL次数及该条用户份额在SUM内部，已含及空载职责一次。 缺通用数值范围不允许猜值，实际量/身份/覆盖未明确时限制最终使用。

#### kitchen_direct_water_withdrawal

责任节点与原流角色：on_site_meal_preparation / inputs / elementary

仅实际环境取水归厨房且与购水/营地同池互斥。实际独立抽取处理需路线复核，不能由水费推源。

- 选定流：实际源明确的厨房直接取水
- 流属性/单位：Volume / m3
- 数量规则：在 cp_kitchen_fates 下，实际独占目标责任数量 / 正的相同画像 N_target 一次；已每参考流记录不变，N_target=0保留不除。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_kitchen_fates`

范围证据需求：真实源地点/原生取水量/方法期间和全部用户营地分配，非预约人数或配方差额。 缺通用数值范围不允许猜值，实际量/身份/覆盖未明确时限制最终使用。

#### kitchen_unused_supply_return

责任节点与原流角色：on_site_meal_preparation / outputs / product

仅真实未用同SKU/来源/状态独立食材物资退回。毛S/N输入加退回/N输出，或已耗用(S-return)/N输入并省略匹配输出。已用流体/预制剩余/餐后剩余或无关库存不能混抵。

- 选定流：实际匹配未用厨房食材或物资退回
- 流属性/单位：Mass / kg
- 数量规则：在 cp_kitchen_food_stocks 下，实际独占目标责任数量 / 正的相同画像 N_target 一次；已每参考流记录不变，N_target=0保留不除。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_kitchen_food_stocks`

范围证据需求：实际不同来源/接受/原生净量/状态及口径，每种物资退回链接正确库存；非食品须保留cp_kitchen_supplies实际来源及匹配退回字段，无重复信用。 缺通用数值范围不允许猜值，实际量/身份/覆盖未明确时限制最终使用。

#### kitchen_usable_recovered_fluid

责任节点与原流角色：on_site_meal_preparation / outputs / product

真实已使用回收制冷/传热流体可用对外交接，与留存期末和收集废物不同。工厂或补充来源都不自动变未用新料，不抵新制造/负输入/自动信用。

- 选定流：实际可用已使用厨房设备流体输出
- 流属性/单位：Mass / kg
- 数量规则：在 cp_kitchen_fluids 下，实际独占目标责任数量 / 正的相同画像 N_target 一次；已每参考流记录不变，N_target=0保留不除。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_kitchen_fluids`

范围证据需求：实际化学物/质量/原生交接量/接收/来源覆盖，留存与外出独立。 缺通用数值范围不允许猜值，实际量/身份/覆盖未明确时限制最终使用。

#### kitchen_usable_food_transfer

责任节点与原流角色：on_site_meal_preparation / outputs / product

仅实际接收方接受且有实际适用条件证据的可用剩余预制食品；未供不自动可捐/可复用。保留全部原食品及烹制负担，不当未用食材退回或避免生产信用。

- 选定流：实际接受可用预制食品对外交接
- 流属性/单位：Mass / kg
- 数量规则：在 cp_kitchen_fates 下，实际独占目标责任数量 / 正的相同画像 N_target 一次；已每参考流记录不变，N_target=0保留不除。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_kitchen_fates`

范围证据需求：真实批次/状态/接收人/可用接受/原生净量组成时间、完整其他消费者责任；安全/去向未知不能当可用输出。 缺通用数值范围不允许猜值，实际量/身份/覆盖未明确时限制最终使用。

#### kitchen_preparation_waste

责任节点与原流角色：on_site_meal_preparation / outputs / waste

真实单独接收的皮骨修整/工艺残渣/用过烹制材料，实际身份状态接收端。食品水分骨皮非包装皮重；烹制/清洁捕集混合物组成非额外整流。原食材负担保留。

- 选定流：实际食材备制及烹制残余废物
- 流属性/单位：Mass / kg
- 数量规则：在 cp_kitchen_recipes 下，实际独占目标责任数量 / 正的相同画像 N_target 一次；已每参考流记录不变，N_target=0保留不除。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_kitchen_recipes`

范围证据需求：真实批次/食材谱系/原生收货及组分量/接收运输处理，无统一可食比例或产率。 缺通用数值范围不允许猜值，实际量/身份/覆盖未明确时限制最终使用。

#### kitchen_packaging_waste

责任节点与原流角色：on_site_meal_preparation / outputs / waste

真实供应包装及单次供餐包装的实际废物流，按实际材质状态接收展开；包装皮重不当食品骨皮水分。真实共收只能一整流加非相加组成。

本卡为独立身份分支`kitchen_packaging_waste_paper_pack`; `kitchen_packaging_waste_metal_pack`之外的余项清单要求。已计入分支的实际数量不再计入本余项交换，原类目总量仅作不可相加的协调审计。其他实际材料、状态、来源或介质仍须保留自身经核实的身份、原生数量及供应接收责任；记录缺失时，不推定条件分支发生、不发生或数量为零。

- 选定流：实际厨房食材及供餐包装废物
- 流属性/单位：Mass / kg
- 数量规则：在 cp_kitchen_fates 下，实际独占目标责任数量 / 正的相同画像 N_target 一次；已每参考流记录不变，N_target=0保留不除。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_kitchen_fates`

范围证据需求：真实源/包装身份/原生净量/实际接收及覆盖；不按采购量或食品质量直接推废包装。 缺通用数值范围不允许猜值，实际量/身份/覆盖未明确时限制最终使用。

#### kitchen_spent_cleaning_solids

责任节点与原流角色：on_site_meal_preparation / outputs / waste

真实用过擦拭过滤吸收物/清洁残渣按实际独立接收范围；捕集湿料已含液体和食品碎片非额外自由液或餐余。

- 选定流：实际厨房用过清洁捕集物及残渣
- 流属性/单位：Mass / kg
- 数量规则：在 cp_kitchen_fates 下，实际独占目标责任数量 / 正的相同画像 N_target 一次；已每参考流记录不变，N_target=0保留不除。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_kitchen_fates`

范围证据需求：真实任务/材质/整物组成/净量接收及运输处理覆盖，非清洁材料收货量。 缺通用数值范围不允许猜值，实际量/身份/覆盖未明确时限制最终使用。

#### kitchen_retired_asset_waste

责任节点与原流角色：on_site_meal_preparation / outputs / waste

真实报废整物或组成及接收状态，内含流体/材料仅非相加组成；已经完整资产/供应商覆盖同终末处理只追物理交接不重计。

- 选定流：实际废弃厨房餐具设备及组成
- 流属性/单位：Mass / kg
- 数量规则：在 cp_kitchen_assets 下，实际独占目标责任数量 / 正的相同画像 N_target 一次；已每参考流记录不变，N_target=0保留不除。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_kitchen_assets`

范围证据需求：真实报废BOM/原生量/接收/同EOL覆盖，不能预设统一寿命或回收比例。 缺通用数值范围不允许猜值，实际量/身份/覆盖未明确时限制最终使用。

#### kitchen_contained_effluent

责任节点与原流角色：on_site_meal_preparation / outputs / waste

真实交给下水道/接收端的液体，按真实来源组成接收及处理范围；配方保留水、空气蒸气和直接环境水不混为此Waste。

- 选定流：实际收集厨房备制清洗洗涤废水
- 流属性/单位：Volume / m3
- 数量规则：在 cp_kitchen_fates 下，实际独占目标责任数量 / 正的相同画像 N_target 一次；已每参考流记录不变，N_target=0保留不除。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_kitchen_fates`

范围证据需求：真实独立原生体积/计量组成/接收，转换才用独立密度温度；不以总供水或未知配方差额推污水。 缺通用数值范围不允许猜值，实际量/身份/覆盖未明确时限制最终使用。

#### kitchen_contained_fluid_waste

责任节点与原流角色：on_site_meal_preparation / outputs / waste

真实独立不可用回收流体交处理端，不是空气排放；整机/组成/捕集物内含量非额外第二流。

- 选定流：实际收集厨房制冷剂及传热流体废物
- 流属性/单位：Mass / kg
- 数量规则：在 cp_kitchen_fluids 下，实际独占目标责任数量 / 正的相同画像 N_target 一次；已每参考流记录不变，N_target=0保留不除。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_kitchen_fluids`

范围证据需求：实际化学物/原生净量/接收/来源库存与处理运输覆盖，补充量/库存差不当废物或排放。 缺通用数值范围不允许猜值，实际量/身份/覆盖未明确时限制最终使用。

#### kitchen_direct_species

责任节点与原流角色：on_site_meal_preparation / outputs / elementary

实际独立测量或有据活动因子支持的确切物种/颗粒及介质。实际烹饪水蒸气为向空气Elementary Mass；收集流体Waste。未知批次差额/气味/水损不当排放或零。

本卡为独立身份分支`kitchen_direct_species_co2_fossil_air`; `kitchen_direct_species_methane_fossil_air`; `kitchen_direct_species_nitrous_oxide_air`之外的余项清单要求。已计入分支的实际数量不再计入本余项交换，原类目总量仅作不可相加的协调审计。其他实际材料、状态、来源或介质仍须保留自身经核实的身份、原生数量及供应接收责任；记录缺失时，不推定条件分支发生、不发生或数量为零。

- 选定流：实际厨房确切物种及环境介质排放
- 流属性/单位：Mass / kg
- 数量规则：在 cp_kitchen_releases 下，实际独占目标责任数量 / 正的相同画像 N_target 一次；已每参考流记录不变，N_target=0保留不除。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_kitchen_releases`

范围证据需求：确切物种基准/颗粒/介质、原生量/活动因子及必要组成去向温压元数据，完整因子不重复乘份额。 缺通用数值范围不允许猜值，实际量/身份/覆盖未明确时限制最终使用。


## 9. 验证规则

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| fulfilled_equivalent_bundle | 最终参考流 | 核实际过夜膳食娱乐一般多活动包及现场备制烹饪，排专项体育。实际唯一履约同方案版本时长画像N及冲回、时间偏移DST及服务门槛，拒绝真实提供不自动取消，预约容量非输出。 | unsd-cpc3-2025; pgl-multiactivity-current |
| paired_provision_not_consumption | 内部交换 | 双方同transferID/state/nativeamount/receiver/occasion及最终N一次，备制就绪持有可供实际证据非计划容量。已供拒食补充份质量剩余餐盘独立非等营养。零交接须已实际完成互斥营地资源集成，不能零交换删或编正输出。 | pgl-menus-current; pgl-chefs-current |
| food_native_closure | food stocks/process/fates | 生预制熟供应态、食品净量与包装皮重/水骨皮分清，损失上游保留。真实批次WIP返工平衡未知明确，蒸气独立非差额。备料废未供丢弃餐后包装清洁分开；真实混收一测总量非相加组成。毛/耗用UNUSED退回互斥，可用转交实际接受。 | pgl-chef-job |
| staff_partials_idle_allusers | all allocation | 营地支持员工餐实际营地职责保留，真实其他营期访客部分交付各有物理责任，不自动删或盲摊完整营期。必要同池失败取消未到闲置进总量及真实归属，全部用户驱动完整原生。正准确画像N一次，已归一不变，N0跨期源接收解决，未归属不完整。 | pgl-chefs-current |
| full_life_provider_complete | capital/services | 建筑场地工程装修FF&E厨房活动复用织物完整寿命，全用户已观察加有据剩余服务终止原生证据，年度N/容量非寿命。完整供应商或已覆盖底层职责互斥，实际缺阶段完成源原生量状态时间owner覆盖一次。 |  |
| native_freight_utility_fluid | resource calculations | 表计复位因子实际区间平均/转换一次，燃料供给非燃烧，配方运行水不重复。唯一真实包装载荷EACH/TOTAL次数一次和该条share在SUM内/N一次。流体互斥opening/newfactory/standalone/OTHER/internal/closing/fates；USED输出无制造抵负输入信用。收集Waste与实际物种介质Elementary区分，空气蒸气Mass；缺差额非排放/零。 |  |
| honest_evidence_identity | all methods | 实际语义身份支持未决须明确限制最终使用，检查通过不等外部身份验证或发布就绪。无编UUID范围因子产率配方份量寿命，来源例子非通用物理法律规则，缺实际量覆盖寿命介质解决阻断完整用。 | pgl-code-practice-2025; pgl-menus-current |


## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | secondary_dataset; background_dataset after actual identity and completeness review |
| downstream_use | 真实履约等价住宿一般多活动参与者营期，含现场供餐和完整实际物理职责 |
| allowed_use | 真实过夜膳食娱乐包及现场备制烹饪，声明方案版本时长画像、实际提供接受和两节点互斥清单 |
| excluded_use | 专项体育教学、日营单住宿、容量预约；无限定平均不等价营期、由Count推食品质量营养、零交接删厨房责任、未完成资产供应商池跨期 |
| required_metadata | 全部17个参考限定；真实参与者方案时长时间戳DST接受冲回部分；已备制就绪持有可供膳食/食品态库存批次去向transfer；全部客人支持员工访客其他营期；全资产已观察有据剩余寿命原生驱动供应商准确覆盖及实际完成集成 |
| required_quality_disclosure | 来源日期地点路线画像适用性、实测估算原生量、未决具体身份支持量范围介质、未分配全用户跨期寿命供应商零交接资源、不确定性敏感性更新；缺失非零检查通过非发布 |
| update_trigger | 方案时长画像项目目的交付门槛配方供餐路线/交接拒绝处理、共享用户员工职责、独立加工保藏能转洗衣水处理、全资产供应商寿命覆盖去向原生转换身份改变 |


## 11. 数据源

| source_id | type | reference | used_for |
| --- | --- | --- | --- |
| unsd-cpc3-2025 | official_guidance | UNSD CPC3 explanatory notes30June2025, printed355,63130 and sports-instruction exclusion92912. https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | 仅分类：过夜食品娱乐/训练完整营与体育教学区分，无路线强度或默认因子。 |
| pgl-multiactivity-current | handbook | PGL Multi-Activity Camps current operator page, accessed2026-10-20, programme examples and FAQ inclusions. https://adventureholidays.pgl.co.uk/multi-activity-camps/ | 定性实际住宿一般多活动含餐住宿活动晚间项目；不同示例非默认夜数年龄餐次份量寿命。 |
| pgl-chefs-current | handbook | PGL Chefs current recruitment page, accessed2026-10-20, Marchants Hill team prepares/serves guests and colleagues. https://jobs.pgl.co.uk/chefs/ | 一手实际现场备供及支持员工消费职责，非通用配方产率或统一外包证据。 |
| pgl-chef-job | handbook | PGL Chef job description, undated document, first page duties; accessed2026-10-20. https://www.pgl.co.uk/Files/DocumentManagerDocuments/Recruitment/Job%20Descriptions/ChefFR23.pdf | 实际储存备制烹饪供餐、配方份量及客人员工访客厨房餐厅清洁职责；文件名非出版年或现行法律保证。 |
| pgl-menus-current | handbook | PGL Menus and Mealtimes current operator page, accessed2026-10-20. https://adventureholidays.pgl.co.uk/menus-and-mealtimes/ | 定性自助多样餐补充份及提供可能多于吃掉，支持提供消费区分，非默认每日3餐/份量营养等价或法律温度。 |
| pgl-code-practice-2025 | handbook | PGL Code of Practice, coverJune2025; catering/accommodation/recreation sections, accessed2026-10-20. https://www.pgl.co.uk/Files/DocumentManagerDocuments/AdventureUK/PGL-Code-of-Practice.pdf | 2025-06定性真实供餐全膳餐厅住宿娱乐；独立餐厅不证明第三方外包，无2026法律或通用运行因子承诺。 |
