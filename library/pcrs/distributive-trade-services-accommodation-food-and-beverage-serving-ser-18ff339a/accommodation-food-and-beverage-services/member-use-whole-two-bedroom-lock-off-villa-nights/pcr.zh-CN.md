---
pcr_id: pcr.member-use-whole-two-bedroom-lock-off-villa-nights
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 会员实际入住整套两卧可分隔别墅单元夜住宿服务

## 1. 范围与适用性

适用于通过会员预订、向实际访客共同交付的整套两卧可分隔别墅住宿。必须有实际一卧与套间两处原子空间、独立可锁连接门或入口的平面与配置证据，两部分在同一实际入住个案和住宿夜均由同一方独占使用；并不要求每张床都有人睡。本方法不把所有分时度假产权都视为新的物理类别；独立方法需要在于动态父单元—子单元空间的物理守恒及配置特定交付核算，这与不可拆分公寓单元不同。不能仅凭品牌示例或产权证书判断适用。实际平面、房号分配和服务记录是必需证据。

只有实际完成的合并整套住宿夜进入参考产出。独立供应的套间或一卧是同一设施的其他真实消费者，保留其资源责任，不能作为整套等价产出。非可分隔两卧、更大户型、产权或积分出售、年费或贷款、未完成预订及仅可使用的产权期间不属于该参考。实际收取未到或提前离开费用不能证明物理入住；实际完成的整套住宿即使拒绝清洁，仍属于已交付服务。

覆盖实际住宿、客人浴室与厨房设备使用、换客与住中清洁、布草服务、公用设施和责任匹配的公共设施；包含跨全部消费者及期间的建筑主体、装修、家具设施设备、暖通及可复用品的制造、安装、维护、真实更换和寿命终结。由业主付款或委外不能删除物理阶段。客人交通、食物本身和独立供应的餐饮、零售、娱乐另行核算，除非实际纳入声明套餐；不能因法律产权或收费不同而删去实际包含的公共设施。不默认独立发电、锅炉、工业洗衣或食品生产设施；真实存在的独立转换或工业操作须复核路线与模块。

运营者文件仅支持拓扑、交付状态和职责的定性问题。文件中的积分、价格、面积、容量、入住时间和清洁日程均不是通用清单因子或服务保证。缺少通用数值范围和具体流身份必须诚实列为待采集且限制使用的缺口，不编造数值，也不视为零。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.member-use-whole-two-bedroom-lock-off-villa-nights |
| classification_refs | CPC3.0:63113 较窄的会员实际入住整套两卧可分隔别墅访客住宿；不等于权益或年费，也不覆盖全部分时产权物业 |
| covered_products | 实际完成交付的整套两卧可分隔别墅住宿单元夜，有套间和一卧的原子空间与会员受益人入住证据 |
| excluded_products | 仅子单元住宿、不可拆或非可分隔客房、更大单元、纸面权益积分年费、未到及闲置容量；默认不含整个度假套餐、客人交通或独立附属商品服务 |
| representative_product | 一个实际整套父单元住宿夜，两原子空间共同独占交付，配置、房号、住客、实际时段、服务范围及公共系统责任可追溯 |
| production_route | 实际空间拓扑与可运营状态 -> 会员预订解析为实际整套房号 -> 实际整套住宿夜及有据的支持与换客服务 -> 最终服务确认 |
| market_state | 实际入住的物理配置住宿服务；积分、权益、预订状态和年度财务仅为非交换追溯记录，并非物理服务量 |


## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 会员实际入住整套两卧可分隔别墅单元夜住宿服务 |
| How much | 1 Item(s) |
| How well | 套间与一卧两原子空间在同一实际访客个案和住宿夜共同独占交付，有实际配置、原生数量、服务水平与已确认入住证据；不等于子单元住宿夜或积分 |
| How long or cycle | 有运营方来源的实际当地住宿夜定义，以及起止时间、时区、UTC偏移、夏令时和实际时长；不统一为24小时；入住、任务、报告期与全资产寿命阶段分别记录 |
| reference_flow_link | `whole_villa_night` |

| 字段 | 值 |
| --- | --- |
| reference_amount | 1 |
| reference_product_flow | 已交付会员实际入住整套两卧可分隔别墅单元夜 |
| reference_flow_property | Count `01846770-4cfe-4a25-8ad9-919d8d378345` |
| reference_unit_group | Count unit group `5beb6eed-33a9-47b8-9ede-1dfe8f679159` |
| reference_unit | Item(s) |
| required_qualifiers | actual_resort_operator_and_timeshare_member_beneficiary; physical_parent_villa_and_studio_onebed_atomic_space_ids; plan_independent_door_lockoff_topology_source; configuration_version_and_effective_times; whole_two_bedroom_combined_exclusive_delivery; actual_unit_assignment_and_same_stay_case; actual_checkin_checkout_acceptance_and_reversals; local_overnight_definition_start_end_timezone_DST_duration; actual_guest_count_and_guest_nights_distinct; fulfilled_complimentary_declined_cleaning_status; actual_whole_child_idle_closed_noshow_pool_responsibility; actual_housekeeping_linen_kitchen_utility_package_scope; complete_shared_hotel_other_consumer_physical_drivers; full_life_shell_fitout_FFE_linen_owner_provider_coverage; native_quantity_unit_basis_method_state_sampletime_source; same_target_N_normalization_and_crossperiod_carry_resolution |

N_target 是明确目标范围内、撤销冲回后实际完成整套父单元住宿夜ID的去重计数。多夜入住按有来源的实际交付夜数计，不能默认一次预订就是一夜。会员、住客及免费实际交付均保留责任；未入住、未到、封房、仅子单元不计整套N_target，但保留同供应池必要资源，经完整有据规则归属真实产出后，才按同范围正N_target归一。N_target=0时保留资源而不除零或删除。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 | source_ids |
| --- | --- | --- | --- | --- | --- |
| whole_atomic_identity | 参考与配置 | Count；实际面积与时间证据 | Item(s) 整套单元夜；原生原子空间面积与时间 | 整套产出必须同个案同夜独占交付两真实原子空间。每一原子空间时段至多一个供应配置；父单元与包含的子单元不能算三个同时存在的物理单元；仅子单元或固定不可分两卧不是目标等价物。 | dvc-home-rules-2026; aulani-shared-topology-2023 |
| night_time_occupancy | 实际完成住宿夜 | 单元夜与住客的Count；实际时长 | 实际当地住宿夜Item(s)、原生时间和独立住客夜 | 实际夜定义、入住退房、当地时间戳与UTC偏移夏令时、确认与冲回决定计数。不得固定24小时、住客夜除以容量或以扣积分替代实际夜。拒绝清洁不取消实际交付的整套住宿夜。 | dvc-home-rules-2026 |
| native_linen_mass | 洗衣与布草资产货运 | Mass或实际支持的洗衣服务属性 | kg 已处理干布草；独立原生件数、湿货物和全寿命资产单位 | 实际干布草定义、调湿、样本群体、来源和匹配实物的件数转换。洗衣服务吞吐不是每次新布制造，也不等于湿运输货重。复用品全寿命材料服务一次，与实际洗涤操作分开。 |  |
| native_water_conversion | 实际水分组分密度转换 | Mass；Volume；实际水分比例或比值 | 各原生组分单位；兼容密度与温度单位 | 每一独立数量转换保留单位、基准、方法、状态、采样时间和来源。仅同样本水分定义w_wet=m_water/m_as_received、r_dry=m_water/m_nonwater可得w_wet=r_dry/(1+r_dry)，百分数先转比例。含其他挥发物的烘干失重不等于水，未知不为零；密度与体积转换必须匹配实际物料状态及温度单位来源。 |  |
| positive_same_target | 全部归一资源行 | 实际完成目标分母Count；各行原生属性 | 每Item(s)实际整套单元夜的物理资源 | 采用实际直接追踪，或实际数量*兼容target_driver/正且完整all_consumer_driver；同池必要待机、失败、闲置与封房资源先进入总量并归属真实产出。目标总量仅按严格相同范围正N_target除一次；已每参考或单夜个案不再除。原始库存寿命供应方记录保持原始量；N0保留。 |  |


## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 可实际运营的整套两卧可分隔别墅，有套间和一卧原子空间、实际会员受益人预订、房号分配、服务范围及带生效时间的配置 |
| starting_condition_role | 物理住宿供给和完整生命周期责任；既有建筑装修家具设备是生命周期内资本服务，不是自动无负荷的起点 |
| product_classification_scope | 较窄63113会员实际入住整套合并两卧可分隔访客住宿；产权分类标签本身不证明独立方法或物理因子 |
| recursive_input_rule | 实际运营别墅不再次购买为同一最终住宿产出。委外住宿、清洁、洗衣、公用资源、资产采用实际完整供应方范围或唯一底层阶段，不能两者都加。积分、预订和内部布草移动不是重复物理服务输入。 |
| upstream_dataset_requirement | 匹配实际采购资源物料供应服务及建筑装修家具设备电器布草跨全消费者全期间的制造安装维护更换寿命终结。业主采购委外不能遗漏阶段；真实缺阶段必须在数据包完整使用前，按原生数量状态来源覆盖与唯一责任人实际补入一次。 |
| disclosure | 实际父子平面配置时段房号完成住宿夜住客服务范围；权益非物理追溯；公共系统全用户、同池必要资源、空置跨期消解；建筑设备洗衣制冷剂货运废物生命周期职责和未知项 |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| topology_not_tenure | whole_villa_stay | 实质方法需要来自互斥的整套父单元与子单元拓扑及配置交付；积分或财产权益本身不确定收到的服务，也不足以新建物理方法。实际平面与房号分配必需。 | dvc-home-rules-2026; aulani-shared-topology-2023 |
| complete_life_boundary | 全部资源 | 包括实际运营资源及建筑主体装修家具设备暖通电器布草制造维护更换寿命终结，不论财务付款方。完整供应服务或其底层职责择一；缺失实际阶段须有完成证据及独占覆盖并实际补入一次，不能仅列待办。 |  |
| shared_physical_not_fee | 公共系统 | 实际酒店、度假、子单元、整套、公共及其他物理消费者决定边界和有据原生驱动。法律产权、费用年费积分份额仅追溯，非默认物理负担比例；实际包含公共设施不得因另属他人而删除。 | aulani-shared-topology-2023 |
| source_scope_limits | 来源 | 运营文件仅为拓扑服务的定性适用证据，不把文件清洁日程、积分、容量、面积、费用或年代当通用因子服务保证或现行法律意见；以实际现场供应套餐与操作为准。 | dvc-home-rules-2026; aulani-shared-topology-2023 |


## 6. 过程清单结构

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| whole_villa_stay | 整套合并可分隔别墅入住及责任匹配支持 | required | 实际会员完成整套两卧可分隔别墅访客住宿 | 物理整套原子配置与夜住宿交付，含实际资源清洁布草和共同全寿命责任 | `whole_villa_night` |

实际房间公共系统持续可用与入住、夜、换客、全清、垃圾、毛巾、布草、重复清理和维护任务重叠。记录配置变更、移房、跨夜报告期、入住免费拒清、独立子单元酒店其他用户以及真实空置待机封房未到取消失败职责。不推定每日全清、每次入住必须洗布草、工业洗衣或新锅炉。实际不合格房间布草清理状态按有据重复清理、修复、重新使用、可用外送、保留待定、丢弃路线处理；未完成不能成为合格整套产出。跨期须有来源接收消解链接，责任未消解阻止最终完整性。

### 过程：整套合并可分隔别墅入住及责任匹配支持 (`whole_villa_stay`)

#### 输入

##### 产品流

###### 实际使用点交流电 (`electricity_ac`)

仅适用于实际跨越本节点边界、且未由完整供应商数据覆盖的交流电。该身份未特指供应方、电压、发电组合或交付线损归属，仍须按要求采集。经核实的电力流以1 MJ电能为基准，其ILCD属性名称为净热值；原生kWh按精确的3.6 MJ/kWh换算，不能套用燃料热值系数。直流电或其他不匹配电力状态保留在余项要求中。

- 选定流：交流电 `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- 绑定：`fixed`
- 流属性/单位：Energy / kWh
- 数量规则：按cp_utilities将实际互斥归属的兼容物理量除以正N_target一次；已每参考记录不再除，N_target=0保留不除
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_utilities`

Range evidence need: 需真实计量区间、房间系统边界、原生电量换算来源及完整使用方，含单独子单元、酒店共用设施、闲置停房期间；积分年账单不等目标电量。

###### 实际液态处理自来水供给 (`purchased_water_liquid_tap`)

仅在实际来源确为处理后的自来水且用于所声明用途时适用。保留实际供应方、水质、温度状态和供应边界，不假定所有供水都是自来水。冰、瓶装矿泉水、再生水、未经处理的水及环境直接取水保留各自实际身份。沿用原卡原生质量或体积基准；最终换算为质量参考量时须有实际相容密度和状态证据，不能把目录中的次要体积关系作为默认现场密度。

- 选定流：自来水 `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- 绑定：`fixed`
- 流属性/单位：Volume / m3
- 数量规则：按cp_utilities将实际互斥归属的兼容物理量除以正N_target一次；已每参考记录不再除，N_target=0保留不除
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_utilities`

Range evidence need: 需真实供方计量区间、水源位置原生体积；使用冷热拆分或供水温度时记录单位来源；完整使用方与独立容装、直接排放、留存去向。供水不等废水量。

###### 实际外购交付的有效热量 (`purchased_heat_delivered_heat`)

仅记录有证据能量基准、实际跨越本节点边界交付的有效热量。保留供回状态、温度品位、覆盖范围及实际损失责任。通用热能身份不预设天然气、蒸汽质量、锅炉效率或温度；制冷、燃料能量及缺少蒸汽转能量证据的情形不使用该身份。

- 选定流：热能 `4f19a302-7b3b-11dd-ad8b-0800200c9a66`
- 绑定：`fixed`
- 流属性/单位：Energy / MJ
- 数量规则：按cp_utilities将实际互斥归属的兼容物理量除以正N_target一次；已每参考记录不再除，N_target=0保留不除
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_utilities`

Range evidence need: 需真实有用输出计量、原生属性单位、冷热状态交接门槛、适用温度单位来源及服务商损失能源资产覆盖；不套容量效率资费或冷量转电量默认因子。

###### 实际独立记录的合成洗涤剂投入 (`operating_materials_synthetic_detergent`)

仅适用于产品配方、供应状态及用途记录确认的实际合成表面活性洗涤剂。记录扣除包装皮重的材料净量，区分浓缩液与稀释水，整体配方与组分不得相加重复计入。肥皂、消毒剂、抹布、滤材等仍按各自实际身份记录，不预设清洁配方、剂量或发生。

- 选定流：洗涤剂 `1c57d123-df57-49ab-b9d4-957403beb8a5`
- 绑定：`fixed`
- 流属性/单位：Mass / kg
- 数量规则：按cp_materials将实际互斥归属的兼容物理量除以正N_target一次；已每参考记录不再除，N_target=0保留不除
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_materials`

Range evidence need: 需真实品项、排包装皮重净材料库存、组成状态用途及匹配退回、实际耗废接收范围。不默认每人用品包、化学配方、每夜质量或每夜全新布草。

###### 按干纺织物处理量计量的实际外包布草洗衣服务 (`laundry_service`)

实际住宿布草已执行洗衣服务以兼容干纺织物处理量计，不是购入新布或湿货运质量。服务商须含实际能源水化学品废水废物运输及全寿命设备，或由缺失责任实际补齐一次且归属互斥。个人衣物洗衣仅真实纳入所供住宿才计。

- 选定流：按干纺织物处理量计量的实际外包布草洗衣服务
- 流属性/单位：Mass / kg
- 数量规则：按cp_laundry将实际互斥归属的兼容物理量除以正N_target一次；已每参考记录不再除，N_target=0保留不除
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_laundry`

Range evidence need: 需真实批次交接标识、布草身份、干重定义调湿方法代表样品来源、实际服务量、返洗退回损失及完整全部客户覆盖。不用每单元夜kg、房夜转吨位、费用因子或洗衣兜底百分比。

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 已交付会员实际入住整套两卧可分隔别墅单元夜 (`whole_villa_night`)

恰为一个实际履行的访客整套两卧可分隔别墅过夜单元，同一实际会员受益住宿案例夜内，一卧与开间原子空间均独占共同交付。单子单元预订、积分扣减、产权、未入住、未履行停房能力及不可分隔两卧不是本输出。

- 选定流：已交付会员实际入住整套两卧可分隔别墅单元夜
- 流属性/单位：Count / Item(s)
- 数量规则：1 Item(s)
- 数值来源模式：`fixed_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_stays`

Range evidence need: 需真实度假村单元图、母子空间配置版本有效时间、会员预订受益人、实际房号分配入退、当地夜段时长时区与撤销验收来源；人数人夜为限定，不代单元夜。

##### 废物流

##### 基本流

###### 实际有独立证据的向空气排放化石二氧化碳 (`direct_species_co2_fossil_air`)

仅在实际证据确认化石来源、二氧化碳物种和向空气直接释放时适用。保留报告的碳或CO2基准，碳转CO2须独立有证据的化学计量，不预设系数或发生。 本卡仅记录本节点实际直接释放，不重复计入外购电力上游或供应商已覆盖排放。UUID表示未细分子介质的空气排放，其他实际子介质或来源仍须在余项中匹配，不能改标；缺失数据不等于零。

- 选定流：二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 绑定：`fixed`
- 流属性/单位：Mass / kg
- 数量规则：按cp_releases将实际互斥归属的兼容物理量除以正N_target一次；已每参考记录不再除，N_target=0保留不除
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_releases`

Range evidence need: 需确切物质介质原生实测或真实活动因子单位基准方法状态时间来源，组成去向温压换算仅方法需要时一次，因子覆盖明确。资产外包已含释放不再计，混合物不自动单一组分或通用气体。

###### 实际有独立证据的向空气排放化石甲烷 (`direct_species_methane_fossil_air`)

仅在实际证据确认化石来源、甲烷物种和向空气直接释放时适用。生物源或来源未知甲烷仍在余项要求中，不得改标化石源；不预设泄漏发生、气体比例、数量或排放系数。 本卡仅记录本节点实际直接释放，不重复计入外购电力上游或供应商已覆盖排放。UUID表示未细分子介质的空气排放，其他实际子介质或来源仍须在余项中匹配，不能改标；缺失数据不等于零。

- 选定流：甲烷 (化石源) `08a91e70-3ddc-11dd-9610-0050c2490048`
- 绑定：`fixed`
- 流属性/单位：Mass / kg
- 数量规则：按cp_releases将实际互斥归属的兼容物理量除以正N_target一次；已每参考记录不再除，N_target=0保留不除
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_releases`

Range evidence need: 需确切物质介质原生实测或真实活动因子单位基准方法状态时间来源，组成去向温压换算仅方法需要时一次，因子覆盖明确。资产外包已含释放不再计，混合物不自动单一组分或通用气体。

###### 实际有独立证据的向空气排放氧化亚氮 (`direct_species_nitrous_oxide_air`)

仅在实际证据确认氧化亚氮物种及向空气直接释放时适用。原生数量为N2O质量，不是氮质量或氮气质量，不预设排放系数或发生。 本卡仅记录本节点实际直接释放，不重复计入外购电力上游或供应商已覆盖排放。UUID表示未细分子介质的空气排放，其他实际子介质或来源仍须在余项中匹配，不能改标；缺失数据不等于零。

- 选定流：一氧化二氮 `08a91e70-3ddc-11dd-94c3-0050c2490048`
- 绑定：`fixed`
- 流属性/单位：Mass / kg
- 数量规则：按cp_releases将实际互斥归属的兼容物理量除以正N_target一次；已每参考记录不再除，N_target=0保留不除
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_releases`

Range evidence need: 需确切物质介质原生实测或真实活动因子单位基准方法状态时间来源，组成去向温压换算仅方法需要时一次，因子覆盖明确。资产外包已含释放不再计，混合物不自动单一组分或通用气体。

## 7. 分配与联产品处理

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| atomic_space_time_conservation | 全部空间入住资产 | 维护不重叠原子空间时段台账。整套父单元一次映射套间及一卧共同供应；独立子单元仅消费自己的实际空间时段。不得同计父及所含子单元，或用营销标签总和稀释共同系统。目标配置固定；子单元真实消费保留完整责任而非目标产出。 | dvc-home-rules-2026; aulani-shared-topology-2023 |
| pool_idle_failure_closure | 全部资源池 | 同住宿供应池必要待机闲置封房维护未到失败资源先进入物理总量，再按完整有据规则分给真实产出责任。只列空置台账或名义可售容量不能消除负担；真正其他用户产出可承担有据份额，财务积分年费未售容量本身不能。跨期来源接收消解相连，未分配份额表示数据包不完整。 |  |
| complete_physical_attribution | 运营供应服务公用资源 | 采用实际任务计量直接追踪，或实际期间数量*兼容target_driver/正且完整all_consumer_driver。原生分子分母覆盖全部实际整套子单元酒店公共其他用户及同池必要职责；不默认积分收入周数住客容量比例。每资源选择有因果依据的物理驱动并披露限制。目标总量按相同范围正N_target除一次，已每参考不再除，N0保留。 |  |
| full_life_all_users | 建筑复用品供应方 | 真实资产原生数量及支持等价*job_used_driver/正且完整lifetime_all_user_driver归属制造安装维护更换寿命终结。全寿命驱动含实际既往及有来源剩余生产等价服务、终止、全部消费者和原生单位方法状态时间来源不确定性更新；必要空置待机归属真实产出，不是无主技术容量。年度目标N不是寿命。完整资产或生命周期完整供应服务择一；缺组件阶段实际补入一次。 |  |
| material_stock_choice | 实际耗材 | S=已归属期初+净外部物料收货-含保留回收期末；收货不含容器皮重。二选一：(1)毛S/N_target记INPUT，实际匹配未用退回/N_target另记OUTPUT；(2)净耗用(S-return)/N_target记INPUT并省略匹配退回OUTPUT。不得把退回加到输入或抵扣两次。内部循环留库存，废物仍保留供应负担；不得无关负输入或自动替代信用。 |  |
| exclusive_receiver_and_charge | 实际去向 | 完整复用品零部件混合物流组分游离液和物种视图不相加；真实不同接收流分别展开，真实共同收集混合物保持测量范围。资产工厂制冷剂与运营供应来源分开；工厂初装回收外送不能抵扣无关补充、产生负输入或信用。保留回收、可用Product外送、Waste处理、直接物种独立有据；运输处理在资产供应方已覆盖后唯一归属。 |  |


## 8. 前景数据采集、计算与质量规则

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_stays | whole_villa_stay | whole_villa_night；拓扑及全部资源目标范围 | 实际物理住宿与配置台账 | record_id; case_id; reporting_period; site_id; attribution_owner; provider_coverage; already_per_reference; source_record_links; uncertainty; target_driver; target_driver_unit; target_driver_basis; target_driver_method; target_driver_state; target_driver_sample_time; target_driver_source; all_consumer_driver; all_consumer_driver_unit; all_consumer_driver_basis; all_consumer_driver_method; all_consumer_driver_state; all_consumer_driver_sample_time; all_consumer_driver_source; native_conversion_factor; native_conversion_factor_unit; native_conversion_factor_basis; native_conversion_factor_method; native_conversion_factor_state; native_conversion_factor_sample_time; native_conversion_factor_source; event_start; event_end; time_zone; UTC_offset_start; UTC_offset_end; DST_resolution; timestamp_source; actual_elapsed_duration; actual_elapsed_duration_unit; actual_elapsed_duration_basis; actual_elapsed_duration_method; actual_elapsed_duration_state; actual_elapsed_duration_sample_time; actual_elapsed_duration_source; parent_villa_id; atomic_studio_space_id; atomic_onebed_space_id; actual_plan_source; independent_entrances_lockoff_evidence; configuration_version; configuration_effective_start; configuration_effective_end; configuration_source; whole_or_child_supply; physical_space_coverage; overlap_check_source; reservation_id; member_or_host_id; beneficiary_guest_ids; home_resort_id; actual_resort_id; entitlement_points_nonexchange; points_use_year; financial_dues_period; points_record_source; actual_unit_assignment_source; whole_exclusive_handover_evidence; same_case_both_child_spaces; actual_checkin; actual_checkout; night_id; local_night_definition; local_night_source; night_start; night_end; night_time_zone; night_UTC_offset_start; night_UTC_offset_end; overnight_DST_resolution; overnight_duration_source; delivered_service_acceptance_source; reversal_ids; reversal_source; actual_status; child_only_other_user_links; vacant_standby_closed_maintenance_noshow_links; complimentary_status; cleaning_declined_evidence; resource_pool_id; pool_necessary_idle_failure_responsibility; unresolved_attribution; carry_source_record; carry_receiver_record; carry_resolution_link; N_target; N_target_unit; N_target_basis; N_target_method; N_target_state; N_target_sample_time; N_target_source; whole_delivered_nights; whole_delivered_nights_unit; whole_delivered_nights_basis; whole_delivered_nights_method; whole_delivered_nights_state; whole_delivered_nights_sample_time; whole_delivered_nights_source; guest_count; guest_count_unit; guest_count_basis; guest_count_method; guest_count_state; guest_count_sample_time; guest_count_source; guest_nights; guest_nights_unit; guest_nights_basis; guest_nights_method; guest_nights_state; guest_nights_sample_time; guest_nights_source; overnight_elapsed_duration; overnight_elapsed_duration_unit; overnight_elapsed_duration_basis; overnight_elapsed_duration_method; overnight_elapsed_duration_state; overnight_elapsed_duration_sample_time; overnight_elapsed_duration_source; atomic_space_area; atomic_space_area_unit; atomic_space_area_basis; atomic_space_area_method; atomic_space_area_state; atomic_space_area_sample_time; atomic_space_area_source; atomic_space_elapsed_use; atomic_space_elapsed_use_unit; atomic_space_elapsed_use_basis; atomic_space_elapsed_use_method; atomic_space_elapsed_use_state; atomic_space_elapsed_use_sample_time; atomic_space_elapsed_use_source; competing_consumer_driver; competing_consumer_driver_unit; competing_consumer_driver_basis; competing_consumer_driver_method; competing_consumer_driver_state; competing_consumer_driver_sample_time; competing_consumer_driver_source | 取得真实平面、父单元及套间一卧原子空间ID、独立门锁证据、配置版本生效时间、实际房号和入住退房确认冲回。按同个案当地夜两部分共同独占交付去重计N_target，不要求每床有人睡；仅子单元、不可分两卧、积分、未到闲置不是整套产出。实际免费入住保留责任，拒绝清洁不删除已交付夜。当地夜定义、UTC偏移夏令时实际时长、跨夜配置变更与住客夜独立记录。实际同池必要闲置待机失败取消未到维护职责先计资源池总量，再按完整物理规则归属真实产出；仅列台账不能删除负担。真正其他消费者可单列，不能用产权积分名义容量。全用户原生驱动含整套子单元酒店其他职责；跨期有来源接收消解链接，归属未决则数据包不完整；N_target=0保留不除。 | 实际整套单元夜Item(s)；实际时间面积住客和原生物理驱动单位 | 每次实际房号分配、入住夜、配置状态变更及资源期结转 | 实际来源区间、入住夜任务库存期间及适用全资产寿命阶段；跨期来源接收消解可追溯 | 实际原子空间及完整整套子单元酒店公共其他使用方，声明供应接收方 | 每参考流 | 原生量单位基准方法状态采样时间来源、校准代表性覆盖与不确定性；真实归属不兼容或未决阻止最终完整数据包 |
| cp_utilities | whole_villa_stay | electricity; purchased_water; purchased_heat | 计量与真实公共系统期间 | record_id; case_id; reporting_period; site_id; attribution_owner; provider_coverage; already_per_reference; source_record_links; uncertainty; target_driver; target_driver_unit; target_driver_basis; target_driver_method; target_driver_state; target_driver_sample_time; target_driver_source; all_consumer_driver; all_consumer_driver_unit; all_consumer_driver_basis; all_consumer_driver_method; all_consumer_driver_state; all_consumer_driver_sample_time; all_consumer_driver_source; native_conversion_factor; native_conversion_factor_unit; native_conversion_factor_basis; native_conversion_factor_method; native_conversion_factor_state; native_conversion_factor_sample_time; native_conversion_factor_source; event_start; event_end; time_zone; UTC_offset_start; UTC_offset_end; DST_resolution; timestamp_source; actual_elapsed_duration; actual_elapsed_duration_unit; actual_elapsed_duration_basis; actual_elapsed_duration_method; actual_elapsed_duration_state; actual_elapsed_duration_sample_time; actual_elapsed_duration_source; utility_identity; carrier_or_useful_output; delivery_point; meter_id; meter_role; register_or_interval; interval_start; interval_end; meter_version; supersedes_record; already_applied_multiplier; actual_estimated_flag; calibration_source; system_boundary; shared_system_consumers; guest_kitchen_appliance_scope; standby_closed_resource_pool; provider_included_scope; useful_heat_cooling_state; source_location; register_start; register_start_unit; register_start_basis; register_start_method; register_start_state; register_start_sample_time; register_start_source; register_end; register_end_unit; register_end_basis; register_end_method; register_end_state; register_end_sample_time; register_end_source; register_adjustment; register_adjustment_unit; register_adjustment_basis; register_adjustment_method; register_adjustment_state; register_adjustment_sample_time; register_adjustment_source; meter_multiplier; meter_multiplier_unit; meter_multiplier_basis; meter_multiplier_method; meter_multiplier_state; meter_multiplier_sample_time; meter_multiplier_source; interval_quantity; interval_quantity_unit; interval_quantity_basis; interval_quantity_method; interval_quantity_state; interval_quantity_sample_time; interval_quantity_source; delivered_temperature; delivered_temperature_unit; delivered_temperature_basis; delivered_temperature_method; delivered_temperature_state; delivered_temperature_sample_time; delivered_temperature_source; density; density_unit; density_basis; density_method; density_state; density_sample_time; density_source; density_temperature; density_temperature_unit; density_temperature_basis; density_temperature_method; density_temperature_state; density_temperature_sample_time; density_temperature_source; measured_task_quantity; measured_task_quantity_unit; measured_task_quantity_basis; measured_task_quantity_method; measured_task_quantity_state; measured_task_quantity_sample_time; measured_task_quantity_source; burn_quantity; burn_quantity_unit; burn_quantity_basis; burn_quantity_method; burn_quantity_state; burn_quantity_sample_time; burn_quantity_source; flow_row_id; actual_identity_case; actual_substance_or_material; actual_origin_and_medium; actual_state_and_gate; case_activation_evidence; typed_or_residual_quantity; quantity_exclusion_links; whole_total_reconciliation; unresolved_occurrence_not_zero | 取得兼容起止表数及重置翻转调整，或实际区间用量；倍率和维度转换仅一次，保留有效版本及计量责任。客房、客人厨房设备、热水暖通及公共系统能源水均按物理范围归属，不因付款者消失。有用外购冷热输出记录交付状态及供应方生产损失资产覆盖，不假定独立厂。直接任务计量或实际原生量*兼容target_driver/正且完整all_consumer_driver，先保留同池必要待机失败闲置封房。全部整套子单元酒店公共其他用户完整，不能用营销父子标签数或积分作分母。计量供水不是废水，估计未知覆盖披露、未知不为零；归属一次后仅除正同范围N_target，已每参考不再除。 | 实际kWh/MJ或有用热原生单位；实际供水m3及原生物理驱动 | 每个真实计量区间任务及覆盖变化 | 实际来源区间、入住夜任务库存期间及适用全资产寿命阶段；跨期来源接收消解可追溯 | 实际原子空间及完整整套子单元酒店公共其他使用方，声明供应接收方 | 每参考流 | 原生量单位基准方法状态采样时间来源、校准代表性覆盖与不确定性；真实归属不兼容或未决阻止最终完整数据包 |
| cp_materials | whole_villa_stay | operating_materials; fuel_supply; unused_supply_returns | 净物料库存及匹配外部交接 | record_id; case_id; reporting_period; site_id; attribution_owner; provider_coverage; already_per_reference; source_record_links; uncertainty; target_driver; target_driver_unit; target_driver_basis; target_driver_method; target_driver_state; target_driver_sample_time; target_driver_source; all_consumer_driver; all_consumer_driver_unit; all_consumer_driver_basis; all_consumer_driver_method; all_consumer_driver_state; all_consumer_driver_sample_time; all_consumer_driver_source; native_conversion_factor; native_conversion_factor_unit; native_conversion_factor_basis; native_conversion_factor_method; native_conversion_factor_state; native_conversion_factor_sample_time; native_conversion_factor_source; event_start; event_end; time_zone; UTC_offset_start; UTC_offset_end; DST_resolution; timestamp_source; actual_elapsed_duration; actual_elapsed_duration_unit; actual_elapsed_duration_basis; actual_elapsed_duration_method; actual_elapsed_duration_state; actual_elapsed_duration_sample_time; actual_elapsed_duration_source; SKU_id; material_identity; actual_purpose; composition_definition; composition_source; quantity_pool_scope; receipt_net_tare_definition; matched_input_id; matched_return_scope; return_recipient; stock_view; internal_loop_ids; retained_recovery_ids; fate_record_links; opening; opening_unit; opening_basis; opening_method; opening_state; opening_sample_time; opening_source; net_external_receipts; net_external_receipts_unit; net_external_receipts_basis; net_external_receipts_method; net_external_receipts_state; net_external_receipts_sample_time; net_external_receipts_source; closing_including_recovery; closing_including_recovery_unit; closing_including_recovery_basis; closing_including_recovery_method; closing_including_recovery_state; closing_including_recovery_sample_time; closing_including_recovery_source; usable_external_return; usable_external_return_unit; usable_external_return_basis; usable_external_return_method; usable_external_return_state; usable_external_return_sample_time; usable_external_return_source; actual_burn; actual_burn_unit; actual_burn_basis; actual_burn_method; actual_burn_state; actual_burn_sample_time; actual_burn_source; actual_waste; actual_waste_unit; actual_waste_basis; actual_waste_method; actual_waste_state; actual_waste_sample_time; actual_waste_source; density; density_unit; density_basis; density_method; density_state; density_sample_time; density_source; density_temperature; density_temperature_unit; density_temperature_basis; density_temperature_method; density_temperature_state; density_temperature_sample_time; density_temperature_source; composition_value; composition_value_unit; composition_value_basis; composition_value_method; composition_value_state; composition_value_sample_time; composition_value_source; flow_row_id; actual_identity_case; actual_substance_or_material; actual_origin_and_medium; actual_state_and_gate; case_activation_evidence; typed_or_residual_quantity; quantity_exclusion_links; whole_total_reconciliation; unresolved_occurrence_not_zero | 逐真实兼容品项状态池独立采期初、排供应容器皮重的净外收、含留存回收期末及互斥真实去向，每量保留原生元数据。仅实际使用，不套来源配方。S=已归属期初+净收-期末。二选一：(1)毛S/N_target记INPUT，实际匹配未用外退/N_target另记OUTPUT；(2)净耗用(S-matched_unused_return)/N_target记INPUT，省略匹配退回OUTPUT。不得退回加输入或双扣。内部循环非外部输入输出，耗用或废弃仍保留供应负担。不同单位组分独立元数据及适用换算密度温度来源；燃料收货不是燃烧，资产继承工质布草不是无关耗材退回。覆盖必要同池闲置失败及完整用户，正同范围N_target除一次，N0保留。 | 实际物料原生质量体积含量；有据才转kg/L | 每次真实收货使用库存结转外部去向 | 实际来源区间、入住夜任务库存期间及适用全资产寿命阶段；跨期来源接收消解可追溯 | 实际原子空间及完整整套子单元酒店公共其他使用方，声明供应接收方 | 每参考流 | 原生量单位基准方法状态采样时间来源、校准代表性覆盖与不确定性；真实归属不兼容或未决阻止最终完整数据包 |
| cp_laundry | whole_villa_stay | laundry_service | 实际委外批次与复用布草交接 | record_id; case_id; reporting_period; site_id; attribution_owner; provider_coverage; already_per_reference; source_record_links; uncertainty; target_driver; target_driver_unit; target_driver_basis; target_driver_method; target_driver_state; target_driver_sample_time; target_driver_source; all_consumer_driver; all_consumer_driver_unit; all_consumer_driver_basis; all_consumer_driver_method; all_consumer_driver_state; all_consumer_driver_sample_time; all_consumer_driver_source; native_conversion_factor; native_conversion_factor_unit; native_conversion_factor_basis; native_conversion_factor_method; native_conversion_factor_state; native_conversion_factor_sample_time; native_conversion_factor_source; event_start; event_end; time_zone; UTC_offset_start; UTC_offset_end; DST_resolution; timestamp_source; actual_elapsed_duration; actual_elapsed_duration_unit; actual_elapsed_duration_basis; actual_elapsed_duration_method; actual_elapsed_duration_state; actual_elapsed_duration_sample_time; actual_elapsed_duration_source; provider_id; laundry_batch_id; linen_pool_id; linen_item_ids; service_transfer_ids; served_atomic_space_ids; stay_task_links; all_provider_client_records; dry_mass_definition; conditioning_method; sample_scope; supplier_statement_source; laundry_covered_energy; laundry_covered_water; laundry_covered_chemicals; laundry_covered_wastewater; laundry_covered_assets; laundry_covered_freight; laundry_covered_treatment; missing_duty_records; completed_supplement_link; supplement_owner; rewash_event_ids; external_use_personal_laundry_scope; dry_linen_mass_processed; dry_linen_mass_processed_unit; dry_linen_mass_processed_basis; dry_linen_mass_processed_method; dry_linen_mass_processed_state; dry_linen_mass_processed_sample_time; dry_linen_mass_processed_source; linen_item_count; linen_item_count_unit; linen_item_count_basis; linen_item_count_method; linen_item_count_state; linen_item_count_sample_time; linen_item_count_source; item_dry_mass_conversion; item_dry_mass_conversion_unit; item_dry_mass_conversion_basis; item_dry_mass_conversion_method; item_dry_mass_conversion_state; item_dry_mass_conversion_sample_time; item_dry_mass_conversion_source; wet_transport_mass; wet_transport_mass_unit; wet_transport_mass_basis; wet_transport_mass_method; wet_transport_mass_state; wet_transport_mass_sample_time; wet_transport_mass_source; rewash_dry_mass; rewash_dry_mass_unit; rewash_dry_mass_basis; rewash_dry_mass_method; rewash_dry_mass_state; rewash_dry_mass_sample_time; rewash_dry_mass_source; returned_linen_quantity; returned_linen_quantity_unit; returned_linen_quantity_basis; returned_linen_quantity_method; returned_linen_quantity_state; returned_linen_quantity_sample_time; returned_linen_quantity_source; lost_linen_quantity; lost_linen_quantity_unit; lost_linen_quantity_basis; lost_linen_quantity_method; lost_linen_quantity_state; lost_linen_quantity_sample_time; lost_linen_quantity_source; water_fraction; water_fraction_unit; water_fraction_basis; water_fraction_method; water_fraction_state; water_fraction_sample_time; water_fraction_source; dry_water_ratio; dry_water_ratio_unit; dry_water_ratio_basis; dry_water_ratio_method; dry_water_ratio_state; dry_water_ratio_sample_time; dry_water_ratio_source; percent_to_ratio_factor; percent_to_ratio_factor_unit; percent_to_ratio_factor_basis; percent_to_ratio_factor_method; percent_to_ratio_factor_state; percent_to_ratio_factor_sample_time; percent_to_ratio_factor_source | 取得真实执行洗衣批次及原生干纺织服务吞吐，调湿样品水分定义及件量转换只用匹配实物。湿运输量不等干基布草洗涤服务吞吐量，每洗不新增布草制造。保留返洗未用失败作业、全部客户物理归属和批次交接退回损失，未知损失不为废弃或零。供应方范围逐项含真实能源水化学品废水资产货运处理；完整服务一次，或实际补缺操作并有已完成范围链接原生量来源责任人，不能两者重复。现场独立工业洗衣须扩路线；不得编每夜kg或兜底百分比。仅同样本水分定义w_wet=m_water/m_as_received、r_dry=m_water/m_nonwater可百分数转比例后用w_wet=r_dry/(1+r_dry)；其他挥发物烘干失重不是水。批次任务归真实空间用户和必要同池职责，除正N_target一次，已每参考不再除。 | 实际已处理干布草kg或有据等价原生洗衣服务单位；湿货运单位独立 | 每真实供应批次任务返洗交接 | 实际来源区间、入住夜任务库存期间及适用全资产寿命阶段；跨期来源接收消解可追溯 | 实际原子空间及完整整套子单元酒店公共其他使用方，声明供应接收方 | 每参考流 | 原生量单位基准方法状态采样时间来源、校准代表性覆盖与不确定性；真实归属不兼容或未决阻止最终完整数据包 |
| cp_providers | whole_villa_stay | provider_services | 实际原生任务成果与覆盖 | record_id; case_id; reporting_period; site_id; attribution_owner; provider_coverage; already_per_reference; source_record_links; uncertainty; target_driver; target_driver_unit; target_driver_basis; target_driver_method; target_driver_state; target_driver_sample_time; target_driver_source; all_consumer_driver; all_consumer_driver_unit; all_consumer_driver_basis; all_consumer_driver_method; all_consumer_driver_state; all_consumer_driver_sample_time; all_consumer_driver_source; native_conversion_factor; native_conversion_factor_unit; native_conversion_factor_basis; native_conversion_factor_method; native_conversion_factor_state; native_conversion_factor_sample_time; native_conversion_factor_source; event_start; event_end; time_zone; UTC_offset_start; UTC_offset_end; DST_resolution; timestamp_source; actual_elapsed_duration; actual_elapsed_duration_unit; actual_elapsed_duration_basis; actual_elapsed_duration_method; actual_elapsed_duration_state; actual_elapsed_duration_sample_time; actual_elapsed_duration_source; provider_id; task_id; task_kind; performed_status; performance_source; actual_atomic_space_ids; configuration_version; stay_night_links; turnover_or_stay_task; housekeeping_level; daily_trash_distinct_full_clean; declined_or_not_performed_record; sample_population; material_coverage; energy_water_coverage; laundry_coverage; asset_EOL_coverage; freight_treatment_coverage; all_provider_client_records; missing_operations_completed_link; performed_result; performed_result_unit; performed_result_basis; performed_result_method; performed_result_state; performed_result_sample_time; performed_result_source; cleaned_area; cleaned_area_unit; cleaned_area_basis; cleaned_area_method; cleaned_area_state; cleaned_area_sample_time; cleaned_area_source; task_duration; task_duration_unit; task_duration_basis; task_duration_method; task_duration_state; task_duration_sample_time; task_duration_source; linen_changed_quantity; linen_changed_quantity_unit; linen_changed_quantity_basis; linen_changed_quantity_method; linen_changed_quantity_state; linen_changed_quantity_sample_time; linen_changed_quantity_source; native_result_conversion; native_result_conversion_unit; native_result_conversion_basis; native_result_conversion_method; native_result_conversion_state; native_result_conversion_sample_time; native_result_conversion_source | 逐实际换客全清垃圾毛巾重复清理客人请求预订前台安保维护职责，采证据原生物理成果单位。每日清垃圾不等每日全清，来源日程积分费用不量化执行量。拒清记录真实未执行，但实际完成夜仍计N；必要请求取消未到失败任务保留池负担。委外真实成果须明确物料资源布草全资产货运接收覆盖及唯一归属；缺失职责实际补入一次有完成链接。实际直接追踪或正且完整全部客户物理驱动，每量原生元数据；不默认每任务一个Item(s)。除正同范围N_target一次，N0保留。 | 各供应方原生物理成果及兼容面积时间计数单位 | 每真实执行拒绝失败重复及范围变化任务 | 实际来源区间、入住夜任务库存期间及适用全资产寿命阶段；跨期来源接收消解可追溯 | 实际原子空间及完整整套子单元酒店公共其他使用方，声明供应接收方 | 每参考流 | 原生量单位基准方法状态采样时间来源、校准代表性覆盖与不确定性；真实归属不兼容或未决阻止最终完整数据包 |
| cp_assets | whole_villa_stay | building_assets; linen_assets; usable_asset_transfers; retired_assets | 完整全用户资产寿命与真实去向 | record_id; case_id; reporting_period; site_id; attribution_owner; provider_coverage; already_per_reference; source_record_links; uncertainty; target_driver; target_driver_unit; target_driver_basis; target_driver_method; target_driver_state; target_driver_sample_time; target_driver_source; all_consumer_driver; all_consumer_driver_unit; all_consumer_driver_basis; all_consumer_driver_method; all_consumer_driver_state; all_consumer_driver_sample_time; all_consumer_driver_source; native_conversion_factor; native_conversion_factor_unit; native_conversion_factor_basis; native_conversion_factor_method; native_conversion_factor_state; native_conversion_factor_sample_time; native_conversion_factor_source; event_start; event_end; time_zone; UTC_offset_start; UTC_offset_end; DST_resolution; timestamp_source; actual_elapsed_duration; actual_elapsed_duration_unit; actual_elapsed_duration_basis; actual_elapsed_duration_method; actual_elapsed_duration_state; actual_elapsed_duration_sample_time; actual_elapsed_duration_source; asset_id; component_id; asset_class; legal_owner; operator_responsibility; provider_asset_coverage; actual_plan_scope; atomic_space_membership; shared_system_users; manufacture_install_scope; fitout_furnishings_scope; maintenance_scope; replacement_event_ids; EOL_scope; observed_history_source; remaining_evidence_source; termination_method; termination_source; all_user_life_record_ids; complete_driver_scope; idle_necessary_pool_responsibility; allocation_method_source; equivalence_method; equivalence_source; retirement_or_transfer_id; external_receiver; actual_usable_or_waste_state; already_covered_EOL_transport_treatment; remaining_life_transferred_owner; carry_source_record; carry_receiver_record; carry_resolution_link; lifetime_uncertainty; sensitivity; update_trigger; asset_native_quantity; asset_native_quantity_unit; asset_native_quantity_basis; asset_native_quantity_method; asset_native_quantity_state; asset_native_quantity_sample_time; asset_native_quantity_source; component_native_quantity; component_native_quantity_unit; component_native_quantity_basis; component_native_quantity_method; component_native_quantity_state; component_native_quantity_sample_time; component_native_quantity_source; job_used_driver; job_used_driver_unit; job_used_driver_basis; job_used_driver_method; job_used_driver_state; job_used_driver_sample_time; job_used_driver_source; observed_life_driver; observed_life_driver_unit; observed_life_driver_basis; observed_life_driver_method; observed_life_driver_state; observed_life_driver_sample_time; observed_life_driver_source; remaining_life_driver; remaining_life_driver_unit; remaining_life_driver_basis; remaining_life_driver_method; remaining_life_driver_state; remaining_life_driver_sample_time; remaining_life_driver_source; lifetime_all_user_driver; lifetime_all_user_driver_unit; lifetime_all_user_driver_basis; lifetime_all_user_driver_method; lifetime_all_user_driver_state; lifetime_all_user_driver_sample_time; lifetime_all_user_driver_source; driver_equivalence_factor; driver_equivalence_factor_unit; driver_equivalence_factor_basis; driver_equivalence_factor_method; driver_equivalence_factor_state; driver_equivalence_factor_sample_time; driver_equivalence_factor_source; asset_equivalent; asset_equivalent_unit; asset_equivalent_basis; asset_equivalent_method; asset_equivalent_state; asset_equivalent_sample_time; asset_equivalent_source; reusable_item_count; reusable_item_count_unit; reusable_item_count_basis; reusable_item_count_method; reusable_item_count_state; reusable_item_count_sample_time; reusable_item_count_source; reusable_dry_mass; reusable_dry_mass_unit; reusable_dry_mass_basis; reusable_dry_mass_method; reusable_dry_mass_state; reusable_dry_mass_sample_time; reusable_dry_mass_source; transfer_or_discard_quantity; transfer_or_discard_quantity_unit; transfer_or_discard_quantity_basis; transfer_or_discard_quantity_method; transfer_or_discard_quantity_state; transfer_or_discard_quantity_sample_time; transfer_or_discard_quantity_source | 实际清单包括建筑主体装修家具设备暖通家电信息设备、复用布草周转品，完整制造安装维护真实更换终结，年度目标N不作寿命。任务已用、观察、剩余和全寿命驱动各独立原生元数据及证据兼容等价；寿命=全部整套子单元酒店公共其他用户的已观察历史+有来源剩余及终止。实际空间时段映射父含两子一次，不能父子重计资产。必要同池待机闲置失败封房明确进入真实产出池归属，不因积分名义容量或仅台账无主份额删除。跨期必须来源接收消解链接，寿命归属未决则包不完整。完整资产等价或完整生命周期服务择一，真实缺组件阶段有来源责任覆盖并实际补一次。可用外送或废弃原生身份状态接收与剩余寿命终结覆盖明确；不默认信用、不每洗造新布、不重复已含终结。独立部件与整资产不可相加。全寿命全用户正确归属后正同范围N_target除一次，N0保留。 | 真实资产部件原生量及兼容任务观察剩余全寿命驱动单位；仅有据用Item(s)资产等价 | 每资产阶段使用期真实更换外送退役寿命更新 | 实际来源区间、入住夜任务库存期间及适用全资产寿命阶段；跨期来源接收消解可追溯 | 实际原子空间及完整整套子单元酒店公共其他使用方，声明供应接收方 | 每参考流 | 原生量单位基准方法状态采样时间来源、校准代表性覆盖与不确定性；真实归属不兼容或未决阻止最终完整数据包 |
| cp_refrigerants | whole_villa_stay | refrigerant_supply; usable_refrigerant_export; refrigerant_waste | 真实暖通化学库存充注回收及原生去向 | record_id; case_id; reporting_period; site_id; attribution_owner; provider_coverage; already_per_reference; source_record_links; uncertainty; target_driver; target_driver_unit; target_driver_basis; target_driver_method; target_driver_state; target_driver_sample_time; target_driver_source; all_consumer_driver; all_consumer_driver_unit; all_consumer_driver_basis; all_consumer_driver_method; all_consumer_driver_state; all_consumer_driver_sample_time; all_consumer_driver_source; native_conversion_factor; native_conversion_factor_unit; native_conversion_factor_basis; native_conversion_factor_method; native_conversion_factor_state; native_conversion_factor_sample_time; native_conversion_factor_source; event_start; event_end; time_zone; UTC_offset_start; UTC_offset_end; DST_resolution; timestamp_source; actual_elapsed_duration; actual_elapsed_duration_unit; actual_elapsed_duration_basis; actual_elapsed_duration_method; actual_elapsed_duration_state; actual_elapsed_duration_sample_time; actual_elapsed_duration_source; system_id; refrigerant_chemical_or_blend; blend_composition_definition; blend_composition_source; initial_factory_charge_owner; full_asset_charge_coverage; standalone_input_id; recovery_id; recovery_retained_or_exported; usable_or_waste_decision_source; external_recipient; actual_treatment_transport_scope; provider_coverage_source; matched_same_scope_standalone_input; unused_standalone_substock_id; unused_same_source_state_evidence; matched_unused_return_id; used_recovery_transfer_ids; recovered_used_state_source; stock_view; leak_measurement_method; leak_evidence_source; unexplained_residual_status; standalone_opening; standalone_opening_unit; standalone_opening_basis; standalone_opening_method; standalone_opening_state; standalone_opening_sample_time; standalone_opening_source; net_standalone_supply; net_standalone_supply_unit; net_standalone_supply_basis; net_standalone_supply_method; net_standalone_supply_state; net_standalone_supply_sample_time; net_standalone_supply_source; standalone_closing; standalone_closing_unit; standalone_closing_basis; standalone_closing_method; standalone_closing_state; standalone_closing_sample_time; standalone_closing_source; system_charge_open; system_charge_open_unit; system_charge_open_basis; system_charge_open_method; system_charge_open_state; system_charge_open_sample_time; system_charge_open_source; system_charge_close; system_charge_close_unit; system_charge_close_basis; system_charge_close_method; system_charge_close_state; system_charge_close_sample_time; system_charge_close_source; charged_mass; charged_mass_unit; charged_mass_basis; charged_mass_method; charged_mass_state; charged_mass_sample_time; charged_mass_source; recovered_mass; recovered_mass_unit; recovered_mass_basis; recovered_mass_method; recovered_mass_state; recovered_mass_sample_time; recovered_mass_source; retained_recovered_mass; retained_recovered_mass_unit; retained_recovered_mass_basis; retained_recovered_mass_method; retained_recovered_mass_state; retained_recovered_mass_sample_time; retained_recovered_mass_source; usable_export_mass; usable_export_mass_unit; usable_export_mass_basis; usable_export_mass_method; usable_export_mass_state; usable_export_mass_sample_time; usable_export_mass_source; waste_transfer_mass; waste_transfer_mass_unit; waste_transfer_mass_basis; waste_transfer_mass_method; waste_transfer_mass_state; waste_transfer_mass_sample_time; waste_transfer_mass_source; measured_release_mass; measured_release_mass_unit; measured_release_mass_basis; measured_release_mass_method; measured_release_mass_state; measured_release_mass_sample_time; measured_release_mass_source; blend_component_fraction; blend_component_fraction_unit; blend_component_fraction_basis; blend_component_fraction_method; blend_component_fraction_state; blend_component_fraction_sample_time; blend_component_fraction_source; native_mass_conversion; native_mass_conversion_unit; native_mass_conversion_basis; native_mass_conversion_method; native_mass_conversion_state; native_mass_conversion_sample_time; native_mass_conversion_source | 实际化学混合物、独立库存充注回收外送废弃实测释放各量状态时间及来源完整。资产制造已含工厂初装由原负担人一次承担，只计实际独立补供。留存回收进期末不是外送；真实可用外送为Product Mass，不可用接收为Waste Mass，空气释放须cp_releases物种介质测量或兼容完整活动去向方法。补充、回收或未知差额本身不是排放或零。工厂初装外送不能减无关当期补供或负输入，记录转移不自动抵扣；净耗扣减并省匹配出口，仅限同来源同状态、有据未使用的独立子库存及实际匹配未用退回。所有已使用回收物，无论工厂初装或独立补注来源，均按实际可用外送状态另记录，不默认等价未用新料，不抵扣新供应制造，不负输入或自动信用。混合物组分不可相加，接收运输处理供应覆盖一次。实际系统全用户和必要池归属后正N_target除一次，N0保留。 | 实际制冷剂混合物组分原生质量；有据因子才兼容kg | 每实际供应充注回收转移实测事件库存结转 | 实际来源区间、入住夜任务库存期间及适用全资产寿命阶段；跨期来源接收消解可追溯 | 实际原子空间及完整整套子单元酒店公共其他使用方，声明供应接收方 | 每参考流 | 原生量单位基准方法状态采样时间来源、校准代表性覆盖与不确定性；真实归属不兼容或未决阻止最终完整数据包 |
| cp_freight | whole_villa_stay | freight | 唯一真实包装载荷路段及自身归属份额 | record_id; case_id; reporting_period; site_id; attribution_owner; provider_coverage; already_per_reference; source_record_links; uncertainty; target_driver; target_driver_unit; target_driver_basis; target_driver_method; target_driver_state; target_driver_sample_time; target_driver_source; all_consumer_driver; all_consumer_driver_unit; all_consumer_driver_basis; all_consumer_driver_method; all_consumer_driver_state; all_consumer_driver_sample_time; all_consumer_driver_source; native_conversion_factor; native_conversion_factor_unit; native_conversion_factor_basis; native_conversion_factor_method; native_conversion_factor_state; native_conversion_factor_sample_time; native_conversion_factor_source; event_start; event_end; time_zone; UTC_offset_start; UTC_offset_end; DST_resolution; timestamp_source; actual_elapsed_duration; actual_elapsed_duration_unit; actual_elapsed_duration_basis; actual_elapsed_duration_method; actual_elapsed_duration_state; actual_elapsed_duration_sample_time; actual_elapsed_duration_source; load_id; leg_id; cargo_ids; service_boundary_leg; provider_delivered_coverage; laundry_transport_coverage; receiver_transport_coverage; empty_return_coverage; each_or_total; cargo_original_added_pack_supports; cargo_wet_dry_state; gross_scope; noncargo_tare_scope; unique_scope_owner; payload; payload_unit; payload_basis; payload_method; payload_state; payload_sample_time; payload_source; vehicle_gross; vehicle_gross_unit; vehicle_gross_basis; vehicle_gross_method; vehicle_gross_state; vehicle_gross_sample_time; vehicle_gross_source; vehicle_noncargo_tare; vehicle_noncargo_tare_unit; vehicle_noncargo_tare_basis; vehicle_noncargo_tare_method; vehicle_noncargo_tare_state; vehicle_noncargo_tare_sample_time; vehicle_noncargo_tare_source; distance; distance_unit; distance_basis; distance_method; distance_state; distance_sample_time; distance_source; repeated_load_count; repeated_load_count_unit; repeated_load_count_basis; repeated_load_count_method; repeated_load_count_state; repeated_load_count_sample_time; repeated_load_count_source; payload_conversion; payload_conversion_unit; payload_conversion_basis; payload_conversion_method; payload_conversion_state; payload_conversion_sample_time; payload_conversion_source; gross_conversion; gross_conversion_unit; gross_conversion_basis; gross_conversion_method; gross_conversion_state; gross_conversion_sample_time; gross_conversion_source; tare_conversion; tare_conversion_unit; tare_conversion_basis; tare_conversion_method; tare_conversion_state; tare_conversion_sample_time; tare_conversion_source; distance_conversion; distance_conversion_unit; distance_conversion_basis; distance_conversion_method; distance_conversion_state; distance_conversion_sample_time; distance_conversion_source; that_record_share; that_record_share_unit; that_record_share_basis; that_record_share_method; that_record_share_state; that_record_share_sample_time; that_record_share_source | 每唯一载荷路段实测带包载荷，或兼容同状态毛重仅减真实车辆非货皮重，原生换算有据。湿布草全部随货包装支撑保留；干基布草洗涤服务kg非湿载荷。EACH仅乘一次有据原生repeated_load_count，TOTAL不再乘。that_record_share为该路段兼容target_driver/正且完整all_consumer_driver，原生基准方法状态时间来源明确；份额置SUM(payload_kg*distance_km*that_record_share)内部，再除正N_target一次，已每参考不再除。客人旅行边界外，实际用品供应方洗衣接收空返覆盖核对一次；N0及必要失败闲置工作保留，不默认每夜货运。 | 实际载荷距离原生单位；有据明确换算后kg*km | 每真实唯一路段配置及覆盖变化 | 实际来源区间、入住夜任务库存期间及适用全资产寿命阶段；跨期来源接收消解可追溯 | 实际原子空间及完整整套子单元酒店公共其他使用方，声明供应接收方 | 每参考流 | 原生量单位基准方法状态采样时间来源、校准代表性覆盖与不确定性；真实归属不兼容或未决阻止最终完整数据包 |
| cp_fates | whole_villa_stay | water_withdrawal; spent_materials; contained_wastewater; direct_water_outfall | 实际不同接收流环境接口及混合视图 | record_id; case_id; reporting_period; site_id; attribution_owner; provider_coverage; already_per_reference; source_record_links; uncertainty; target_driver; target_driver_unit; target_driver_basis; target_driver_method; target_driver_state; target_driver_sample_time; target_driver_source; all_consumer_driver; all_consumer_driver_unit; all_consumer_driver_basis; all_consumer_driver_method; all_consumer_driver_state; all_consumer_driver_sample_time; all_consumer_driver_source; native_conversion_factor; native_conversion_factor_unit; native_conversion_factor_basis; native_conversion_factor_method; native_conversion_factor_state; native_conversion_factor_sample_time; native_conversion_factor_source; event_start; event_end; time_zone; UTC_offset_start; UTC_offset_end; DST_resolution; timestamp_source; actual_elapsed_duration; actual_elapsed_duration_unit; actual_elapsed_duration_basis; actual_elapsed_duration_method; actual_elapsed_duration_state; actual_elapsed_duration_sample_time; actual_elapsed_duration_source; actual_stream_id; source_material_or_asset_id; actual_identity_type; receiver_id; receiver_decision_source; receiver_transport_scope; receiver_treatment_scope; asset_provider_EOL_coverage; separate_stream_or_true_mixture; mixture_membership_evidence; contained_or_direct; environmental_source_location; direct_outfall_location; receiving_medium; composition_definition; composition_mass_or_volume; composition_source; actual_fate_basis; actual_fate_source; nonadditive_view; actual_received_net_quantity; actual_received_net_quantity_unit; actual_received_net_quantity_basis; actual_received_net_quantity_method; actual_received_net_quantity_state; actual_received_net_quantity_sample_time; actual_received_net_quantity_source; actual_withdrawal_volume; actual_withdrawal_volume_unit; actual_withdrawal_volume_basis; actual_withdrawal_volume_method; actual_withdrawal_volume_state; actual_withdrawal_volume_sample_time; actual_withdrawal_volume_source; contained_free_liquid_volume; contained_free_liquid_volume_unit; contained_free_liquid_volume_basis; contained_free_liquid_volume_method; contained_free_liquid_volume_state; contained_free_liquid_volume_sample_time; contained_free_liquid_volume_source; direct_outfall_volume; direct_outfall_volume_unit; direct_outfall_volume_basis; direct_outfall_volume_method; direct_outfall_volume_state; direct_outfall_volume_sample_time; direct_outfall_volume_source; carrier_mass; carrier_mass_unit; carrier_mass_basis; carrier_mass_method; carrier_mass_state; carrier_mass_sample_time; carrier_mass_source; absorbed_liquid_mass; absorbed_liquid_mass_unit; absorbed_liquid_mass_basis; absorbed_liquid_mass_method; absorbed_liquid_mass_state; absorbed_liquid_mass_sample_time; absorbed_liquid_mass_source; captured_fragment_mass; captured_fragment_mass_unit; captured_fragment_mass_basis; captured_fragment_mass_method; captured_fragment_mass_state; captured_fragment_mass_sample_time; captured_fragment_mass_source; density; density_unit; density_basis; density_method; density_state; density_sample_time; density_source; density_temperature; density_temperature_unit; density_temperature_basis; density_temperature_method; density_temperature_state; density_temperature_sample_time; density_temperature_source; composition_value; composition_value_unit; composition_value_basis; composition_value_method; composition_value_state; composition_value_sample_time; composition_value_source; water_fraction; water_fraction_unit; water_fraction_basis; water_fraction_method; water_fraction_state; water_fraction_sample_time; water_fraction_source; dry_water_ratio; dry_water_ratio_unit; dry_water_ratio_basis; dry_water_ratio_method; dry_water_ratio_state; dry_water_ratio_sample_time; dry_water_ratio_source; percent_to_ratio_factor; percent_to_ratio_factor_unit; percent_to_ratio_factor_basis; percent_to_ratio_factor_method; percent_to_ratio_factor_state; percent_to_ratio_factor_sample_time; percent_to_ratio_factor_source | 逐真实不同废物身份状态接收方展开具体交换，不默认把纸用品食物擦布电子设备绑一个固定混合UUID。仅真实共同收集接收混合物流用总量，载体吸液捕集碎屑各原生组分仅不可相加审计视图。资产废物核cp_assets终结归属，供应方覆盖后运输处理一次。独立测实际水源取水、容装下水游离液接收或真实环境排口；购水入住潮湿不是废水排放代理。水蒸气到空气须cp_releases物种Mass，不能容装Waste或液态排口。每独立组分数量自身原生元数据；仅实际使用才密度温度来源及同样本纯水分百分基准转换，其他挥发物失重不是水。未知去向量介质阻止最终交换，不为零。实际全用户事件及必要池先归属，再除正N_target一次，N0保留。 | 真实流原生质量体积含量水源单位；有据才兼容kg/m3 | 每实际取水实测接收交接事件与直接排口 | 实际来源区间、入住夜任务库存期间及适用全资产寿命阶段；跨期来源接收消解可追溯 | 实际原子空间及完整整套子单元酒店公共其他使用方，声明供应接收方 | 每参考流 | 原生量单位基准方法状态采样时间来源、校准代表性覆盖与不确定性；真实归属不兼容或未决阻止最终完整数据包 |
| cp_releases | whole_villa_stay | direct_species | 确切真实物种接收介质及方法支持原生量 | record_id; case_id; reporting_period; site_id; attribution_owner; provider_coverage; already_per_reference; source_record_links; uncertainty; target_driver; target_driver_unit; target_driver_basis; target_driver_method; target_driver_state; target_driver_sample_time; target_driver_source; all_consumer_driver; all_consumer_driver_unit; all_consumer_driver_basis; all_consumer_driver_method; all_consumer_driver_state; all_consumer_driver_sample_time; all_consumer_driver_source; native_conversion_factor; native_conversion_factor_unit; native_conversion_factor_basis; native_conversion_factor_method; native_conversion_factor_state; native_conversion_factor_sample_time; native_conversion_factor_source; event_start; event_end; time_zone; UTC_offset_start; UTC_offset_end; DST_resolution; timestamp_source; actual_elapsed_duration; actual_elapsed_duration_unit; actual_elapsed_duration_basis; actual_elapsed_duration_method; actual_elapsed_duration_state; actual_elapsed_duration_sample_time; actual_elapsed_duration_source; event_id; system_id; exact_species_identity; blend_component_or_reported_basis; particle_class; receiving_medium; direct_location; provider_covered_release; factor_composition_fate_coverage; measurement_scope; unexplained_residual_status; measured_species_quantity; measured_species_quantity_unit; measured_species_quantity_basis; measured_species_quantity_method; measured_species_quantity_state; measured_species_quantity_sample_time; measured_species_quantity_source; actual_activity; actual_activity_unit; actual_activity_basis; actual_activity_method; actual_activity_state; actual_activity_sample_time; actual_activity_source; emission_factor; emission_factor_unit; emission_factor_basis; emission_factor_method; emission_factor_state; emission_factor_sample_time; emission_factor_source; composition_fraction; composition_fraction_unit; composition_fraction_basis; composition_fraction_method; composition_fraction_state; composition_fraction_sample_time; composition_fraction_source; fate_fraction; fate_fraction_unit; fate_fraction_basis; fate_fraction_method; fate_fraction_state; fate_fraction_sample_time; fate_fraction_source; gas_conversion_factor; gas_conversion_factor_unit; gas_conversion_factor_basis; gas_conversion_factor_method; gas_conversion_factor_state; gas_conversion_factor_sample_time; gas_conversion_factor_source; temperature; temperature_unit; temperature_basis; temperature_method; temperature_state; temperature_sample_time; temperature_source; pressure; pressure_unit; pressure_basis; pressure_method; pressure_state; pressure_sample_time; pressure_source; actual_duration; actual_duration_unit; actual_duration_basis; actual_duration_method; actual_duration_state; actual_duration_sample_time; actual_duration_source; burned_fuel_quantity; burned_fuel_quantity_unit; burned_fuel_quantity_basis; burned_fuel_quantity_method; burned_fuel_quantity_state; burned_fuel_quantity_sample_time; burned_fuel_quantity_source; flow_row_id; actual_identity_case; actual_substance_or_material; actual_origin_and_medium; actual_state_and_gate; case_activation_evidence; typed_or_residual_quantity; quantity_exclusion_links; whole_total_reconciliation; unresolved_occurrence_not_zero | 绑定前明确真实化学物种粒径与介质。实测原生物种量或兼容实际activity*factor，每操作数原生单位基准方法状态采样时间来源及因子覆盖明确。组成去向气体浓度转换仅方法需要一次；已含份额完整因子不再乘。制冷剂排放组分须实际排出组成去向证据，非默认供应比例或某一组分。水蒸气需空气介质质量与真实活动状态，不用购水减废水差额；容装废水为Waste。补充充量差额气味化学库存损失既不量化释放也不证明零。系统事件全部用户与必要池归属一次，已含供应资产释放不重加，正N_target除一次，已每参考不再除，N0保留。 | 真实原生物种质量活动因子及气体温压单位 | 每真实测量事件或兼容方法活动区间 | 实际来源区间、入住夜任务库存期间及适用全资产寿命阶段；跨期来源接收消解可追溯 | 实际原子空间及完整整套子单元酒店公共其他使用方，声明供应接收方 | 每参考流 | 原生量单位基准方法状态采样时间来源、校准代表性覆盖与不确定性；真实归属不兼容或未决阻止最终完整数据包 |

### Calculation Rules

| rule_id | 适用对象 | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| whole_night_N | whole_villa_night | N_target=明确目标范围内撤销冲回后实际完成whole_parent_night_ids的去重计数。实际套间与一卧须同个案同夜共同独占供应，不要求睡遍每床。保留当地夜定义、实际起止UTC偏移夏令时时长；仅子单元、不可分户型、可用容量、积分未到不是整套产出。免费真实交付保留责任，拒清不删除N。 | cp_stays | 实际配置特定整套夜Count |  |
| atomic_coverage | 物理配置与资产台账 | 每atomic_child_id实际时段恰有一个物理供应封房或闲置责任状态。合并父单元一次覆盖两子时段，分开子供应不得重叠该父。空间时间覆盖与实际闲置封房维护消解闭合，不能用父标签夜+包含的子标签夜相加。目标仍整套配置；其他真实消费者保留物理份额。 | cp_stays; cp_assets | 互斥原子空间时间及全部消费者范围 |  |
| resource_pool_normalization | 全部服务行 | Assigned_target_quantity=实际目标任务计量直接追踪，或actual_resource_quantity*target_driver/all_consumer_driver，all_consumer_driver>0且原生范围兼容完整全部用户。必要同池待机闲置未到取消失败封房先入总量再有据归真实产出，无主未决份额阻完成。仅N_target>0且严格同目标范围时Per_reference_quantity=Assigned_target_quantity/N_target；已每参考不再除，单夜N=1不变。原始库存供应寿命记录保持原量，N0保留资源期间队列跨期证据，不除零不删负担。 | cp_stays; cp_utilities; cp_materials; cp_laundry; cp_providers; cp_assets; cp_refrigerants; cp_freight; cp_fates; cp_releases | 实际每参考服务清单 |  |
| utility_quantity | 电量外购有用热与水; electricity_ac | 采用兼容(register_end-register_start+register_adjustment)*meter_multiplier*native_conversion_factor，或实际interval_quantity*native_conversion_factor；倍率因子未已应用才乘。原生证据解析重置翻转有效版本实际区间。有用冷热输出保交付状态及供应损失资产范围，不重加载能体设备。客房厨房暖通共用和必要池职责归一次后，正同目标N_target除一次。 | cp_utilities; cp_stays | 实际供应公用资源量 |  |
| supply_stock | 实际用品燃料退回; operating_materials_synthetic_detergent | 同实际物料池S=assigned opening+net_external_receipts-closing_including_recovery，净收排容器皮重。二选一：甲：毛S/N_target为INPUT，匹配usable_external_return/N_target另为OUTPUT；乙：净耗用(S-usable_external_return)/N_target为INPUT并省略匹配OUTPUT。不得退回加输入或双扣。内部循环保留回收留库存，废物留输入负担；供应燃料不等燃烧，不无关负扣不自动信用。 | cp_materials; cp_stays | 互斥归一供应退回表达 |  |
| linen_service_water | 洗衣与复用布草视图 | Laundry_service_quantity为真实dry_linen_mass_processed或有据原生服务成果，返洗有独立任务来源且覆盖互斥。件量转换限匹配实物，不每洗造新布，干吞吐不等湿货重。仅同样本纯水定义w_wet=m_water/m_as_received时m_nonwater=m_as_received*(1-w_wet)。同定义r_dry=m_water/m_nonwater时w_wet=r_dry/(1+r_dry)，报告百分数先按原生percent_to_ratio_factor转比例。其他挥发物失重不是水；未知不兼容阻转换，不为零。真实遗漏供应职责使用前实际补入一次。 | cp_laundry; cp_assets; cp_freight | 独立洗衣服务与材料状态原生证据 |  |
| complete_asset_equivalent | 建筑与布草资产 | 仅有维度等价证据且兼容原生范围lifetime_all_user_driver>0时，asset_equivalent=asset_native_quantity*driver_equivalence_factor*job_used_driver/lifetime_all_user_driver。完整寿命驱动=observed_life_driver+有来源remaining_life_driver，实际终止与全部用户生产等价责任完整；不以年度N或名义容量作寿命。必要闲置待机归真实产出责任，不无主零服务份额。完整制造安装装修维护更换终结在资产或供应边界一次。跨期来源接收消解及缺阶段须有完成链接数量来源归属覆盖，才完整使用。再除正同范围N_target一次，已每参考不再除。 | cp_assets; cp_stays; cp_providers | 有据完整寿命资产每参考服务 |  |
| record_freight | freight | 每唯一实际载荷路段用实际payload或兼容同状态vehicle_gross-vehicle_noncargo_tare，保留湿布草内容物全部包装支撑。EACH乘有据repeated_load_count一次，TOTAL不变。原生换算后assigned_freight=SUM(unique load-leg:payload_kg*distance_km*that_record_share)，该记录完整兼容目标全用户份额置求和内。再除正同目标N_target一次，已每参考不再除；N0与必要失败工作保留。供应洗衣接收空返一次，客人旅行不暗加。 | cp_freight; cp_stays | 实际唯一kg*km每参考 |  |
| charge_fates | 工质供应回收物种 | 以独立有据充注回收留存期末可用外送废弃实测释放及明确未知残差核原生系统充量与独立供应。差额补充不能等排放或零；资产已含初装与真实独立供应各一负担人。初装可用外送记Product，不扣无关补充不负输入不自动信用。仅同来源同状态、有据未使用的独立子库存及实际匹配未用退回可净耗扣减并省对应OUTPUT。工厂初装或独立补注来源的已使用回收工质均按实际可用外送状态另记，不自动等价未用新料、不扣新料制造、不负输入或自动信用。容装工质Waste Mass不为空气释放，直接物种另有方法。 | cp_refrigerants; cp_assets; cp_releases | 互斥实际工质化学状态去向台账 |  |
| receiver_views | 全部废物水资产去向 | 每真实不同接收流有原生身份状态净量组成接收运输处理归属。真实整混合物或互斥组分视图择一，不能相加；复用品留存内容物吸液非额外游离液。容装下水游离液Waste，真实环境水按介质Elementary，水蒸气须空气物种Mass。购量减未知残差不等废水蒸气或零，已含终结处理不重复。 | cp_fates; cp_assets; cp_refrigerants | 实际互斥原生接收环境接口量 |  |
| actual_species | direct_species; direct_species_co2_fossil_air; direct_species_methane_fossil_air; direct_species_nitrous_oxide_air | Species_quantity=measured_species_quantity或兼容actual_activity*emission_factor，确切物质粒径介质与每操作数原生单位基准方法状态采样时间来源必需。已含组成去向份额完整因子不再乘；composition_fraction/fate_fraction/gas转换仅方法实际需要时一次，温压单位来源状态匹配。混合制冷剂需排出组成证据，不默认供应组成。化学采购气味水分充量差额或供应发电因子不是实际释放或零。实际互斥归属后正同目标N_target除一次，N0保留。 | cp_releases; cp_refrigerants; cp_fates; cp_stays | 有据原生物种每参考量 |  |

### Data Quality Requirements

| requirement_id | 适用对象 | Requirement | Evidence |
| --- | --- | --- | --- |
| actual_identity_and_scope | 全部角色 | 最终交换前明确整套父夜原子平面配置受益人房号与每具体资源物料服务资产接收物种的身份属性单位。Count只证明计数度量，不证明别墅夜身份、住客夜等价或24小时。条件总括按真实零一个或多个流展开，不强绑固定混合UUID。 | 实际运营物业平面原生记录及具体身份支持完整证据 |
| native_complete_operands | 全部计算 | 所有分子分母原生量组分换算密度温度时区资产任务观察剩余寿命次数去向物种保留单位基准方法状态采样时间来源与范围群体。独立组分自身元数据，不默认用整流单位。未知不兼容数据阻计算与最终使用，不为零。 | cp_stays; cp_utilities; cp_materials; cp_laundry; cp_assets; cp_refrigerants; cp_freight; cp_fates; cp_releases |
| range_evidence_limits | 每张卡 | 逐行Range evidence need明确实际量基准范围采集，不强制通用数值范围。有来源区间只有可追溯且真实对象状态单位边界兼容才能作经验护栏，仍需独立参考比较质控，不能用同记录最小最大循环自证。缺范围身份量披露限制使用，不编边界基准。 | 匹配独立来源记录群体方法适用说明，不以运营费用积分日程作因子 |
| closed_coverage | 全部池寿命接口 | 公共系统全用户、必要待机闲置失败封房、拒清但已交付、完整供应全资产阶段与跨期来源接收消解齐全。缺真实已集成阶段或无主负担阻包完整性；披露测量估计、寿命不确定性敏感性更新及现场套餐限制。 | 实际覆盖阶段记录、已完成补充、寿命证据及独立复核 |
| complete_electricity | whole_villa_stay | 最终使用前，按下方完整采集定义将`electricity`的每项真实情形展开为独立身份交换，完成原生数量、状态、来源、接收方及覆盖证据。缺UUID或数量不能作零；保留固定情形的数量须从余项排除。 | `cp_utilities` |
| complete_purchased_water | whole_villa_stay | 最终使用前，按下方完整采集定义将`purchased_water`的每项真实情形展开为独立身份交换，完成原生数量、状态、来源、接收方及覆盖证据。缺UUID或数量不能作零；保留固定情形的数量须从余项排除。 | `cp_utilities` |
| complete_purchased_heat | whole_villa_stay | 最终使用前，按下方完整采集定义将`purchased_heat`的每项真实情形展开为独立身份交换，完成原生数量、状态、来源、接收方及覆盖证据。缺UUID或数量不能作零；保留固定情形的数量须从余项排除。 | `cp_utilities` |
| complete_operating_materials | whole_villa_stay | 最终使用前，按下方完整采集定义将`operating_materials`的每项真实情形展开为独立身份交换，完成原生数量、状态、来源、接收方及覆盖证据。缺UUID或数量不能作零；保留固定情形的数量须从余项排除。 | `cp_materials` |
| complete_fuel_supply | whole_villa_stay | 最终使用前，按下方完整采集定义将`fuel_supply`的每项真实情形展开为独立身份交换，完成原生数量、状态、来源、接收方及覆盖证据。缺UUID或数量不能作零；保留固定情形的数量须从余项排除。 | `cp_materials` |
| complete_provider_services | whole_villa_stay | 最终使用前，按下方完整采集定义将`provider_services`的每项真实情形展开为独立身份交换，完成原生数量、状态、来源、接收方及覆盖证据。缺UUID或数量不能作零；保留固定情形的数量须从余项排除。 | `cp_providers` |
| complete_building_assets | whole_villa_stay | 最终使用前，按下方完整采集定义将`building_assets`的每项真实情形展开为独立身份交换，完成原生数量、状态、来源、接收方及覆盖证据。缺UUID或数量不能作零；保留固定情形的数量须从余项排除。 | `cp_assets` |
| complete_linen_assets | whole_villa_stay | 最终使用前，按下方完整采集定义将`linen_assets`的每项真实情形展开为独立身份交换，完成原生数量、状态、来源、接收方及覆盖证据。缺UUID或数量不能作零；保留固定情形的数量须从余项排除。 | `cp_assets` |
| complete_refrigerant_supply | whole_villa_stay | 最终使用前，按下方完整采集定义将`refrigerant_supply`的每项真实情形展开为独立身份交换，完成原生数量、状态、来源、接收方及覆盖证据。缺UUID或数量不能作零；保留固定情形的数量须从余项排除。 | `cp_refrigerants` |
| complete_freight | whole_villa_stay | 最终使用前，按下方完整采集定义将`freight`的每项真实情形展开为独立身份交换，完成原生数量、状态、来源、接收方及覆盖证据。缺UUID或数量不能作零；保留固定情形的数量须从余项排除。 | `cp_freight` |
| complete_water_withdrawal | whole_villa_stay | 最终使用前，按下方完整采集定义将`water_withdrawal`的每项真实情形展开为独立身份交换，完成原生数量、状态、来源、接收方及覆盖证据。缺UUID或数量不能作零；保留固定情形的数量须从余项排除。 | `cp_fates` |
| complete_unused_supply_returns | whole_villa_stay | 最终使用前，按下方完整采集定义将`unused_supply_returns`的每项真实情形展开为独立身份交换，完成原生数量、状态、来源、接收方及覆盖证据。缺UUID或数量不能作零；保留固定情形的数量须从余项排除。 | `cp_materials` |
| complete_usable_asset_transfers | whole_villa_stay | 最终使用前，按下方完整采集定义将`usable_asset_transfers`的每项真实情形展开为独立身份交换，完成原生数量、状态、来源、接收方及覆盖证据。缺UUID或数量不能作零；保留固定情形的数量须从余项排除。 | `cp_assets` |
| complete_usable_refrigerant_export | whole_villa_stay | 最终使用前，按下方完整采集定义将`usable_refrigerant_export`的每项真实情形展开为独立身份交换，完成原生数量、状态、来源、接收方及覆盖证据。缺UUID或数量不能作零；保留固定情形的数量须从余项排除。 | `cp_refrigerants` |
| complete_spent_materials | whole_villa_stay | 最终使用前，按下方完整采集定义将`spent_materials`的每项真实情形展开为独立身份交换，完成原生数量、状态、来源、接收方及覆盖证据。缺UUID或数量不能作零；保留固定情形的数量须从余项排除。 | `cp_fates` |
| complete_retired_assets | whole_villa_stay | 最终使用前，按下方完整采集定义将`retired_assets`的每项真实情形展开为独立身份交换，完成原生数量、状态、来源、接收方及覆盖证据。缺UUID或数量不能作零；保留固定情形的数量须从余项排除。 | `cp_assets` |
| complete_refrigerant_waste | whole_villa_stay | 最终使用前，按下方完整采集定义将`refrigerant_waste`的每项真实情形展开为独立身份交换，完成原生数量、状态、来源、接收方及覆盖证据。缺UUID或数量不能作零；保留固定情形的数量须从余项排除。 | `cp_refrigerants` |
| complete_contained_wastewater | whole_villa_stay | 最终使用前，按下方完整采集定义将`contained_wastewater`的每项真实情形展开为独立身份交换，完成原生数量、状态、来源、接收方及覆盖证据。缺UUID或数量不能作零；保留固定情形的数量须从余项排除。 | `cp_fates` |
| complete_direct_water_outfall | whole_villa_stay | 最终使用前，按下方完整采集定义将`direct_water_outfall`的每项真实情形展开为独立身份交换，完成原生数量、状态、来源、接收方及覆盖证据。缺UUID或数量不能作零；保留固定情形的数量须从余项排除。 | `cp_fates` |
| complete_direct_species | whole_villa_stay | 最终使用前，按下方完整采集定义将`direct_species`的每项真实情形展开为独立身份交换，完成原生数量、状态、来源、接收方及覆盖证据。缺UUID或数量不能作零；保留固定情形的数量须从余项排除。 | `cp_releases` |


### 强制清单完成记录

以下记录是强制物理采集和情形展开要求，不是单条清单交换。原有节点、方向、流类型、数量基准、采集协议、库存去向、供应接收和来源义务全部继续有效。正文对这些编号的引用对应这些完成要求。前景数据集完成前，必须将每项真实物料、服务、资产全寿命、废物流或物种介质分别展开为具原生数量和排他覆盖的独立身份交换。保留固定卡只覆盖其真实受支持情形，其余真实情形须无重叠协调。身份、发生或数量缺失仍待采集，不能填零或删项。内部配对交接和组分审计视图不可相加；必要全寿命与供应商阶段必须实际完成一次。

#### electricity

责任节点与原流角色：whole_villa_stay / inputs / product

实际客房照明、住客厨房设备、热水与暖通辅助及可归属共用系统耗电均为住宿消耗，不因产权人、运营方或外包方付款而消失。不假定住客不用设备、不将铭牌功率乘预订夜数，不重复服务商已含用电。

本卡为独立身份分支`electricity_ac`之外的余项清单要求。已计入分支的实际数量不再计入本余项交换，原类目总量仅作不可相加的协调审计。其他实际材料、状态、来源或介质仍须保留自身经核实的身份、原生数量及供应接收责任；记录缺失时，不推定条件分支发生、不发生或数量为零。

- 选定流：实际整套别墅及共用住宿用电
- 流属性/单位：Energy / kWh
- 数量规则：按cp_utilities将实际互斥归属的兼容物理量除以正N_target一次；已每参考记录不再除，N_target=0保留不除
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_utilities`

Range evidence need: 需真实计量区间、房间系统边界、原生电量换算来源及完整使用方，含单独子单元、酒店共用设施、闲置停房期间；积分年账单不等目标电量。

#### purchased_water

责任节点与原流角色：whole_villa_stay / inputs / product

客房盥洗、住客厨房及有据住宿辅助的真实冷热供水。材料含水、泳池补水、洗衣服务商用水保持各自真实范围，不假定新泳池或每日洗布草。

本卡为独立身份分支`purchased_water_liquid_tap`之外的余项清单要求。已计入分支的实际数量不再计入本余项交换，原类目总量仅作不可相加的协调审计。其他实际材料、状态、来源或介质仍须保留自身经核实的身份、原生数量及供应接收责任；记录缺失时，不推定条件分支发生、不发生或数量为零。

- 选定流：实际购入住宿用水
- 流属性/单位：Volume / m3
- 数量规则：按cp_utilities将实际互斥归属的兼容物理量除以正N_target一次；已每参考记录不再除，N_target=0保留不除
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_utilities`

Range evidence need: 需真实供方计量区间、水源位置原生体积；使用冷热拆分或供水温度时记录单位来源；完整使用方与独立容装、直接排放、留存去向。供水不等废水量。

#### purchased_heat

责任节点与原流角色：whole_villa_stay / inputs / product

仅实际外购、在声明交付状态边界计量的有用热服务，不再重复服务商已含的电、载能体或设备。实际独立现场锅炉、发电或工业转化须复核扩展路线。

本卡为独立身份分支`purchased_heat_delivered_heat`之外的余项清单要求。已计入分支的实际数量不再计入本余项交换，原类目总量仅作不可相加的协调审计。其他实际材料、状态、来源或介质仍须保留自身经核实的身份、原生数量及供应接收责任；记录缺失时，不推定条件分支发生、不发生或数量为零。

- 选定流：实际购入供热或供冷服务
- 流属性/单位：Energy / MJ
- 数量规则：按cp_utilities将实际互斥归属的兼容物理量除以正N_target一次；已每参考记录不再除，N_target=0保留不除
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_utilities`

Range evidence need: 需真实有用输出计量、原生属性单位、冷热状态交接门槛、适用温度单位来源及服务商损失能源资产覆盖；不套容量效率资费或冷量转电量默认因子。

#### operating_materials

责任节点与原流角色：whole_villa_stay / inputs / product

按原生身份用途展开实际供应清洁剂、洗漱品、配备耗材、擦布、吸附材、过滤材和办公材。厨房耗材仅实际提供才纳入，不虚构住客自购食品；洗衣服务商已含洗剂或继承家具不在此重加。

本卡为独立身份分支`operating_materials_synthetic_detergent`之外的余项清单要求。已计入分支的实际数量不再计入本余项交换，原类目总量仅作不可相加的协调审计。其他实际材料、状态、来源或介质仍须保留自身经核实的身份、原生数量及供应接收责任；记录缺失时，不推定条件分支发生、不发生或数量为零。

- 选定流：实际住宿清洁住客用品及辅助材料
- 流属性/单位：Mass / kg
- 数量规则：按cp_materials将实际互斥归属的兼容物理量除以正N_target一次；已每参考记录不再除，N_target=0保留不除
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_materials`

Range evidence need: 需真实品项、排包装皮重净材料库存、组成状态用途及匹配退回、实际耗废接收范围。不默认每人用品包、化学配方、每夜质量或每夜全新布草。

#### fuel_supply

责任节点与原流角色：whole_villa_stay / inputs / product

条件性真实自有装卸维护车辆燃料库存，区别有据燃烧、未用外退及未燃废弃，核对供货外包边界。不引入发电机、锅炉、住客旅行或燃料洗衣流程。

- 选定流：实际住宿辅助燃料供应
- 流属性/单位：Volume / L
- 数量规则：按cp_materials将实际互斥归属的兼容物理量除以正N_target一次；已每参考记录不再除，N_target=0保留不除
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_materials`

Range evidence need: 需原生牌号期初净收期末去向及适用密度温度单位来源、全部使用方归属。购量不等燃烧量，真实独立能源转化设备需复核范围。

#### provider_services

责任节点与原流角色：whole_villa_stay / inputs / product

按证据原生物理成果属性单位展开真实换客全面清洁、清垃圾、换毛巾、请求、维护、预订前台安保共用辅助责任。任务或会员付款不自动一Item(s)，真实配置可需其他已核属性。每日清垃圾不等每日完整清洁。

- 选定流：实际物理客房清洁预订及共用辅助成果
- 流属性/单位：Count / Item(s)
- 数量规则：按cp_providers将实际互斥归属的兼容物理量除以正N_target一次；已每参考记录不再除，N_target=0保留不除
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_providers`

Range evidence need: 需实际执行任务成果单位方法时间、原子空间住宿链接及所含能源材料资产洗衣货运接收处理、其他使用方。不用来源示例清洁日程、不把费用作量或自动排除外包负担。

#### building_assets

责任节点与原流角色：whole_villa_stay / inputs / product

实际建筑壳体装修家具设备家电暖通热水共用设备计量信息系统，跨全部使用方期间计完整制造安装维护真实更换终结。既有或产权人付款不免负担，法律产权财务储备不计量物理使用。

- 选定流：全寿命住宿建筑装修家具及共用系统资产服务
- 流属性/单位：Count / Item(s)
- 数量规则：按cp_assets将实际互斥归属的兼容物理量除以正N_target一次；已每参考记录不再除，N_target=0保留不除
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_assets`

Range evidence need: 需真实资产部件边界、任务已用观察有据剩余全寿命兼容驱动及原生单位方法状态时间来源、退役不确定性更新与完整整套子单元酒店共用消费者。不以年度目标夜数作寿命、不套年限、不重复服务商已含资本。

#### linen_assets

责任节点与原流角色：whole_villa_stay / inputs / product

床浴布草、清洁布和运输周转用品按实际全寿命服务计，须兼容件数质量作业当量证据和制造维护更换终结归属。洗涤为服务事件，不是每洗一次制造新布。

- 选定流：全寿命可重复住宿布草及周转用品
- 流属性/单位：Count / Item(s)
- 数量规则：按cp_assets将实际互斥归属的兼容物理量除以正N_target一次；已每参考记录不再除，N_target=0保留不除
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_assets`

Range evidence need: 需真实物品池标识、原生尺寸材料件数或干重、任务使用及全部使用方观察历史、有来源剩余服务循环退役证据；洗次不保证寿命，未知少量不等废弃或零。

#### refrigerant_supply

责任节点与原流角色：whole_villa_stay / inputs / product

仅声明暖通系统责任下实际服务期间独立制冷剂供应库存。已在全资产制造内的原厂初装工质保留原负担归属，不再买一次，不以补充量量排放。

- 选定流：实际住宿系统独立运营制冷剂供应
- 流属性/单位：Mass / kg
- 数量规则：按cp_refrigerants将实际互斥归属的兼容物理量除以正N_target一次；已每参考记录不再除，N_target=0保留不除
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_refrigerants`

Range evidence need: 需真实化学物混合物品项及原生期初净供充注回收留存期末可用外送废弃泄漏证据、初装与独立输入来源和外包覆盖。不默认制冷剂泄漏率每房充量或零损失。

#### freight

责任节点与原流角色：whole_villa_stay / inputs / product

仅实际声明服务边界用品洗衣维护接收路段，核服务商到货处理覆盖。货物保实际运输湿布草、全部原新增包装和随货支撑；干基布草洗涤服务吞吐量不是湿货重。住客旅行独立于此住宿服务。

- 选定流：实际住宿用品布草及接收方货运
- 流属性/单位：Mass*distance / kg*km
- 数量规则：按cp_freight将实际互斥归属的兼容物理量除以正N_target一次；已每参考记录不再除，N_target=0保留不除
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_freight`

Range evidence need: 需唯一载荷路段实测载荷或同状态毛重仅减车辆非货皮重、距离、EACH/TOTAL次数及该记录份额置求和内、原生换算空返外包范围。不默认每入住夜新托盘或货运。

#### water_withdrawal

责任节点与原流角色：whole_villa_stay / inputs / elementary

条件性实际运营环境取水，区别购水与洗衣服务商供水，真实水源身份位置责任及全部使用方明确。

- 选定流：实际住宿直接分水源取水
- 流属性/单位：Volume / m3
- 数量规则：按cp_fates将实际互斥归属的兼容物理量除以正N_target一次；已每参考记录不再除，N_target=0保留不除
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_fates`

Range evidence need: 需实测水源原生体积时间位置取水范围和完整使用方归属，不用水账单入住率代理；真实水源或数量未知不得当零。

#### unused_supply_returns

责任节点与原流角色：whole_villa_stay / outputs / product

仅真实同范围独立未用品项状态交接。毛输入方式将配对退回量/N单列输出，净耗用方式省对应输出。内部回收留期末，可用布草产权或继承资产工质不默认作运营用品退回。

- 选定流：实际匹配未用住宿用品外退
- 流属性/单位：Mass / kg
- 数量规则：按cp_materials将实际互斥归属的兼容物理量除以正N_target一次；已每参考记录不再除，N_target=0保留不除
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_materials`

Range evidence need: 需真实接收方原生量来源与准确匹配输入状态范围。不作不相关负量扣减、重复扣减或避免制造抵扣。

#### usable_asset_transfers

责任节点与原流角色：whole_villa_stay / outputs / product

条件性真实可用物品外送，保原资产归属寿命边界，不由退役自动售出或抵扣。接收方剩余寿命交接、已分配制造终结责任可追溯，不冲减不相关当期耗材。

- 选定流：实际可用布草家具或周转用品外送
- 流属性/单位：Mass / kg
- 数量规则：按cp_assets将实际互斥归属的兼容物理量除以正N_target一次；已每参考记录不再除，N_target=0保留不除
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_assets`

Range evidence need: 需真实物品接收方原生净质量或有据件量换算、状态日期剩余寿命覆盖归属，区别留存期末重部署及真实废物；整资产部件不可相加。

#### usable_refrigerant_export

责任节点与原流角色：whole_villa_stay / outputs / product

仅真实有据可用回收外送，现场留存回收仍库存。若来自全资产数据已含原厂初装，记录实际交接但不扣不相关当期补供，不负输入不自动抵扣；净耗扣减并省匹配出口仅限同来源同状态、有据未使用的独立子库存与真实匹配未用退回。所有已使用回收工质，包括原来自独立补注者，按实际可用外送状态另记，不默认等价未使用新料，不抵扣新料制造，不负输入或自动信用。

- 选定流：实际外部可用回收制冷剂交接
- 流属性/单位：Mass / kg
- 数量规则：按cp_refrigerants将实际互斥归属的兼容物理量除以正N_target一次；已每参考记录不再除，N_target=0保留不除
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_refrigerants`

Range evidence need: 需实际化学混合物原生转移净量接收方及初装或独立输入对应、回收品质状态覆盖。不把收集回收留存回收外送混作同量。

#### spent_materials

责任节点与原流角色：whole_villa_stay / outputs / waste

按实际身份状态接收方逐一展开废包装用品擦布吸附材过滤材或其他流。只有真实共同收集接收混合物才记混合质量，载体吸液捕集碎屑是同混合物不可相加视图。食物湿垃圾不自动干纸或单个通用废物。

- 选定流：实际独立耗废物流及真实混合清理固体
- 流属性/单位：Mass / kg
- 数量规则：按cp_fates将实际互斥归属的兼容物理量除以正N_target一次；已每参考记录不再除，N_target=0保留不除
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_fates`

Range evidence need: 需各真实流接收净量组成时间方法来源及运输处理归属；新用品收货入住数不量化耗废或直接物种。

#### retired_assets

责任节点与原流角色：whole_villa_stay / outputs / waste

按实际整资产、独立部件布草废弃接收状态，核完整寿命终结边界。资产或服务商已含同一终结运输处理时，仅保不重复物理交接记录，不另加负担。磨损污迹缺件未知库存不自动整资产损失。

- 选定流：实际废弃可重复布草家具及设备
- 流属性/单位：Mass / kg
- 数量规则：按cp_assets将实际互斥归属的兼容物理量除以正N_target一次；已每参考记录不再除，N_target=0保留不除
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_assets`

Range evidence need: 需真实退役物品部件对应原生净量接收方及已含终结覆盖，不同废身份接收方各展开。不自动回收替代抵扣或由年度采购推寿命。

#### refrigerant_waste

责任节点与原流角色：whole_villa_stay / outputs / waste

实际不可用工质收集送处理，原生化学状态质量接收方明确，区别可用外送留存回收系统充量及直接空气释放。不补量等泄漏或全部回收皆废物。

- 选定流：实际送接收方的容装回收制冷剂废物
- 流属性/单位：Mass / kg
- 数量规则：按cp_refrigerants将实际互斥归属的兼容物理量除以正N_target一次；已每参考记录不再除，N_target=0保留不除
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_refrigerants`

Range evidence need: 需真实废物接收交接净量组成来源时间及单一运输处理外包归属；初装与运营供应负担来源不丢，不默认销毁回收因子或抵扣。

#### contained_wastewater

责任节点与原流角色：whole_villa_stay / outputs / waste

实际下水管网接收或独立容装游离液，按自身原生身份状态组成体积，区别固体吸液蒸发水直接环境排口。外包洗衣已含废水不重复。

- 选定流：实际住宿容装废水及游离液交接
- 流属性/单位：Volume / m3
- 数量规则：按cp_fates将实际互斥归属的兼容物理量除以正N_target一次；已每参考记录不再除，N_target=0保留不除
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_fates`

Range evidence need: 需实际接收计量体积流来源接收处理运输覆盖，仅有据时用密度温度换算。供水入住不是废水量，真实不同有机水性流须分别展开。

#### direct_water_outfall

责任节点与原流角色：whole_villa_stay / outputs / elementary

仅水直接越界到已识别环境介质，容装下水处理交接是废物。场址排水泳池水辅助水假设不证明真实排口或化学组成。

- 选定流：实际直接住宿水环境排口
- 流属性/单位：Volume / m3
- 数量规则：按cp_fates将实际互斥归属的兼容物理量除以正N_target一次；已每参考记录不再除，N_target=0保留不除
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_fates`

Range evidence need: 需实际位置介质区间原生体积组成去向来源责任，不将空气水蒸气记液态排口。

#### direct_species

责任节点与原流角色：whole_villa_stay / outputs / elementary

从真实维护事件或运营设备展开实测或兼容方法支持的化学物种混合物组分粒径与介质。水蒸气需真实空气介质质量证据；容装废水仍废物。制冷剂供应充量差额、清洁剂组成气味材料损失既非释放因子也非零证据。

本卡为独立身份分支`direct_species_co2_fossil_air`; `direct_species_methane_fossil_air`; `direct_species_nitrous_oxide_air`之外的余项清单要求。已计入分支的实际数量不再计入本余项交换，原类目总量仅作不可相加的协调审计。其他实际材料、状态、来源或介质仍须保留自身经核实的身份、原生数量及供应接收责任；记录缺失时，不推定条件分支发生、不发生或数量为零。

- 选定流：实际住宿特定物种向有据介质释放
- 流属性/单位：Mass / kg
- 数量规则：按cp_releases将实际互斥归属的兼容物理量除以正N_target一次；已每参考记录不再除，N_target=0保留不除
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_releases`

Range evidence need: 需确切物质介质原生实测或真实活动因子单位基准方法状态时间来源，组成去向温压换算仅方法需要时一次，因子覆盖明确。资产外包已含释放不再计，混合物不自动单一组分或通用气体。


## 9. 验证规则

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| actual_whole_reference | whole_villa_night | 实际会员受益访客整套两卧可分隔平面、独立子空间ID、同个案夜共同独占交付房号入退确认冲回必需。目标固定整套，不计仅子单元固定两卧权益积分容量未到。拒清不删已交付N；真实免费入住保责任。 | dvc-home-rules-2026 |
| atomic_no_overlap | 物理空间时间 | 核不重叠实际子空间时段覆盖及配置转换；父整套一次覆盖两包含空间，不是三个同时物理单元。父子重叠跨夜局部子封闭移房须显式分段；空间未决阻适用。 | dvc-home-rules-2026; aulani-shared-topology-2023 |
| pool_burden_closure | 全部资源池 | 必要同池空置待机维护失败取消未到职责必须实际进总量并完整有据归真实产出。仅列台账或名义积分容量不能消负担；真正其他用户份额需实据；跨期来源接收消解必需，无主不完整。正同目标N_target除一次；N0保留，已每参考不再除。 |  |
| complete_lifetime_provider | 全部资本服务 | 完整建筑装修家具设备暖通电器布草制造安装维护更换终结，全部用户观察+有来源剩余生产等价驱动终止原生单位等价不确定性更新；年度N非寿命。供应完整或底层资产操作择一，缺阶段使用前有原生量来源归属覆盖链接并实际补齐一次。财产权费用份额不是默认物理分配。 |  |
| materials_refrigerant_fates | 供应去向 | 净物料排皮重；二选一：甲：毛INPUT与匹配退回/N OUTPUT；乙：净耗INPUT且省匹配OUTPUT，不双扣不无关负信用。资产初装不重复采购，回收留存可用外送废物物种互斥，初装外送不扣无关补供。净耗扣减省匹配出口仅限同来源同状态、有据未使用的独立子库存与实际匹配未用退回；全部已使用回收工质无论初装或独立补注来源均按实际外送状态记录，不默认等未用新料，不扣新制造、不负输入或信用。真实不同废物分别展开，混合组分不相加；容装液Waste，真实蒸气空气Elementary Mass，水环境实际介质。不残差补量等排放零，不自动回收信用。 |  |
| laundry_utility_freight_native | 全部量 | 干基布草洗涤服务吞吐量不是新布或湿货，供应完整返洗一次，不每夜kg或百分兜底。资源表数调整倍率换算一次，不假设备不用。实际带包货运唯一路段，随货包装支撑保留，仅非货车辆皮重扣；EACH/TOTAL真实次数一次，该记录份额在求和内，同范围正N_target再除一次。所有操作数原生元数据，不积分费用账单容量替代。 |  |
| source_scope_unknown | 全部方法 | 来源仅支持拓扑运营提问，实际现场平面服务计量必需。不默认通用入住24小时清洁日积分费用面积容量寿命物种。全部重要未决UUID支持数量介质寿命归属Range证据限制使用；检查通过不是身份或发布证明。 | dvc-home-rules-2026; aulani-shared-topology-2023 |


## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | secondary_dataset; background_dataset，在实际身份完整性复核后 |
| downstream_use | 配置特定整套两卧可分隔别墅物理住宿单元夜，完整住宿生命周期及实际责任匹配公共系统 |
| allowed_use | 实际会员访客两原子空间同个案当地夜共同独占交付，原生平面房号入住完整资产供应证据齐全 |
| excluded_use | 仅子单元、不可拆固定或更大户型等价；产权积分年费足迹或通用度假包；未完成未到可用容量参考、默认财务物理分配、不完整全资产闲置供应责任 |
| required_metadata | 全部16参考限定；实际父子平面配置时段房号完成夜住客确认冲回；当地时长夏令时；完整整套子单元酒店公共全用户和必要池负担跨期消解；实际任务洗衣资源材料资产寿命工质原生驱动转换来源归属接收覆盖 |
| required_quality_disclosure | 来源年代场址配置套餐适用性，原生实测估计、具体身份支持Range量介质未决、池跨期供应寿命未归属与不确定性敏感性更新；不缺数据为零或假定可发布 |
| update_trigger | 拓扑父子平面配置服务会员供应范围夜定义公共使用方责任变化；独立锅炉工业洗衣其他操作；供应资产寿命损失去向原生转换身份新证据 |


## 11. 数据源

| source_id | type | reference | used_for |
| --- | --- | --- | --- |
| unsd-cpc3-timeshare-lodging | official_guidance | UNSD CPC3说明，2025年6月30日，印刷354页631/6311/63113及63111/63112明确分时住宿排除。https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | 仅分类：实际访客住宿不是产权交易，法律产权本身不证明独立方法。 |
| dvc-home-rules-2026 | handbook | Disney Vacation Club Home Resort Rules and Regulations，Rev09/02/2026，§§I/II;III11,15–16;VI1–3;VII1。https://documents.disneyvacationclub.com/vision-dam/digital/parks-platform/parks-global-assets/disney-vacation-club/vacation-planning/Home-Resort-Rules-and-Regulations-FINAL-09-02-2026.pdf | 真实可分隔拓扑、实际房号与预订积分未入住区别、服务任务提问、年费与使用年区别的定性支持。不提供数值日程积分夜时长化学寿命或通用运营要求。 |
| aulani-shared-topology-2023 | handbook | Aulani Hawai‘i Disclosure Statement，2023年7月20日，§4.4–4.6印刷14–16页。https://cdn1.parksmedia.wdprapps.disney.com/media/dvc/en/collateral-docs/Aulani_Hawaii_Disclosure_Statement_07-20-2023.pdf | 有年代的具体物业整套与套间一卧拓扑、酒店分时公共系统产权上下文。费用分摊例子不是物理负荷因子，不给通用面积容量数量成本份额或实际现场证明。 |
