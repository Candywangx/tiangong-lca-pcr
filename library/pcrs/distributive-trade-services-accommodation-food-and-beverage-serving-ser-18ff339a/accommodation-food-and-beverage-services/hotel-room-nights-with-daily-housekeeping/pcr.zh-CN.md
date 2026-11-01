---
pcr_id: pcr.hotel-room-nights-with-daily-housekeeping
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 每日客房清洁酒店客房夜服务

## 1. 范围与适用性

真实运行短住独立酒店客房，具有独立浴室、每日客房清洁服务制度及现场住客响应责任；非分时度假、非自炊，不以共享床位宿舍为参考。实际物业及期间所提供的清洁制度、真实执行或被住客拒绝的清洁事件、客房配置和住宿服务包均须有证据；品牌、前台或自助入住标签本身不能分类。每日服务不表示每件布草每日更换或相同清洁用量。

本路线按真实完成的外部或集中洗衣服务采集客房布草洗涤，并明确完整覆盖，不假设现场工业洗衣。真实自营洗衣生产路线须先审查自身作业资源，再使用该较窄路线。客房表面清洁铺床真实响应住宿共用区及必要后勤职责在内。另售餐饮停车会议泳池健身水疗无关个人洗衣为其他输出，排除共享资源前需完整物理归属；不得默删实际房费内设施服务或未决共享职责。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.hotel-room-nights-with-daily-housekeeping |
| classification_refs | CPC3.0:63111；较窄每日清洁独立酒店客房夜 |
| covered_products | 真实提供独立浴室每日清洁现场响应的入住客房夜，布草由外部集中洗衣 |
| excluded_products | 分时度假低于每日清洁自炊共享床位永久居住，未审自营工业洗衣、预订中介、独立其他酒店服务 |
| representative_product | 真实物业房型独浴服务包入住夜住客清洁布草能源资产状态 |
| production_route | 客房准备真实入住 -> 持续响应续住或退房清洁外部布草护理 -> 实际提供过夜住宿 |
| market_state | 住宿服务；客房建筑家具可重复布草为服务资产，非交易商品 |


## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 真实提供每日清洁独立酒店客房夜 |
| How much | 1 Item(s) |
| How well | 一个实际入住不可分客房的一个声明住宿过夜周期，非一订单宾客夜或固定24小时。真实房型独浴非自炊非分时度假每日清洁响应服务包住客入住及实际可用住宿标准 |
| How long or cycle | 真实夜定义入住离店周期报告截止时区夏令时，持续准备清洁及完整资产布草寿命 |
| reference_flow_link | `occupied_room_night` |

| 字段 | 值 |
| --- | --- |
| reference_amount | 1 |
| reference_product_flow | 真实提供每日清洁独立酒店客房夜 |
| reference_flow_property | Count `01846770-4cfe-4a25-8ad9-919d8d378345` |
| reference_unit_group | Units of items `5beb6eed-33a9-47b8-9ede-1dfe8f679159` |
| reference_unit | Item(s) |
| required_qualifiers | actual_private_guestroom_private_bathroom_indivisible_unit; actual_non_timeshare_non_selfcatering_visitor_scope; actual_daily_housekeeping_regime_and_guest_response; actual_property_room_type_capacity_and_service_package; actual_roomnight_id_occupancy_guests_moves_revisions; actual_cycle_timestamps_timezones_DST_duration; actual_stayover_turnover_requested_declined_events; actual_shared_meter_other_output_consumer_attribution; actual_linen_dry_wet_stock_wash_provider_lifecycle_scope; actual_building_fitout_FFE_full_alluser_life; actual_resource_refrigerant_supply_origin_receiver_fates; actual_verified_native_identity_units_sources_and_gaps |


## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| occupied_cycle | occupied_room_night | Count | Item(s) | N为核对换房修订后唯一实际入住物业+不可分客房+住宿夜记录之和，含真实入住免费房，不含未用取消未到可用容量及未实际提供的未决夜。仅退款不删除已经实际提供的住宿。记录真实当地周期起止时区夏令时时长，不固定24小时。一房夜两人仍一房夜，宾客夜单列关联真实人员；不默认人数床容量订单换算。日用其他房型及部分换房夜需互斥有据单元周期划分，不一个服务两个参考。取消未到空置停用准备待机失败清洁资源保留实际期间完整消费者归属。N=0保留责任不除。 |
| linen_basis | external_linen_care, reusable_linen_lifecycle | Mass; Count | kg 干布草；实际原生件数 | 洗衣服务量为实际完成批次干布质量或真实合同原生基准，非湿入货毛量或新纺织制造。干质量定义方法同批兼容干固体水定义须有源，不默认房夜转kg。可重复布草件、净污在洗留存退回拒收库存及完成洗涤次数分开；返洗是实际资源事件非再次购布。唯一布ID及EACH/TOTAL一次，实测单位质量含水匹配材料结构状态。不得将干质量默认等同于100%棉，也不得由质量余额推定布草丢失件数。 |
| native_conversion | 全部实际交换行 | 实际原生属性 | 实际原生单位 | 各操作数自身原生单位基准方法状态采样时间来源及换算因子单位来源。电表差或同区间实际平均功率乘实际时长需量纲换算，不瞬时铭牌或已积分kWh再乘时间。液质量体积用真实组成密度温度各自身元数据；浓液配制液活性物不可互换。 |


## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 真实准备独立客房独浴每日清洁响应制度非分时度假非自炊及实际外部集中洗衣接口 |
| starting_condition_role | 真实运行住宿设施全寿命服务资产，不商品库存损失模板 |
| product_classification_scope | 63111真实每日清洁，排63112低频63113分时及未核范围 |
| recursive_input_rule | 完成外部集中洗衣公用清洁设施服务仅替代匹配完整自有职责，不递归同房夜作自身投入 |
| upstream_dataset_requirement | 完整真实能源水物料供应及建筑场地装修家具设备布草制造运输维护更换终结服务商范围。租赁布草制造寿命由供应商或酒店明确资产补齐一次；不运营碳边界删采购废物资产。全链前实际阶段缺口须完成。 |
| disclosure | 全部房夜住客周期清洁制度事件完整物业输出消费者原生驱动、用品布草服务设备全资产寿命去向物种数量身份缺口 |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| lodging_boundary | 酒店 | 真实客房可用准备入住响应退房续住清洁客房布草公用用品及必要共用后勤份额在内。另售餐饮会议停车休闲无关个人洗衣为各自交接竞争输出，不删共享职责或房内含设施。 | pef-hotel-intro-2026 |
| classification | 范围 | 需真实每日清洁制度非分时度假证据，记执行请求拒绝事件，不编服务次数布草更换。前台自助星级品牌数字联系不足，不通用24小时响应。 | unsd-63111; unsd-63112; unsd-63113; hilton-housekeeping |
| complete_lifecycle | 酒店 | 本PCR为完整住宿生命周期，非HCMI运营温室气体核算。建筑装修设备布草用品真实接收处理全部消费者服务接口一次；缺实际资产服务阶段是证据缺口非零。 | pef-hotel-intro-2026; hcmi-context-2020 |
| care_route | 布草 | 实际外部集中洗衣需完成原生量及完整洗干整理运输水化学能源废水资产寿命租赁布范围；酒店直接行仅未覆盖职责。自营工业洗衣需审查节点，不藏一般客房清洁。 | hcmi-guide-2022 |


## 6. 过程清单结构

### 过程图

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| hotel_room_service | 实际入住独立酒店客房及每日清洁服务 | required | 真实入住独立酒店客房独浴每日清洁非分时非自炊且声明外部集中布草护理 | 持续客房准备响应、每夜入住集合、续住退房清洁服务批；实际其他物业输出及全部消费者期间进入归属账 | `occupied_room_night` |

一个集成住宿节点，不就准备和同一入住夜重复节点。各客房周期事件清洁返洗退回停用服务交接具唯一ID；未提供未决住宿非验收输出。cp_rooms列实际目标其他房型及非住宿预期服务交接，分可用残物废物。非住宿审计记录在目标清单前建立竞争物理驱动，不额外参考输出或自动抵扣。

### 过程：实际入住独立酒店客房及每日清洁服务 (`hotel_room_service`)

#### 输入

##### 产品流

###### 实际使用点交流电 (`lodging_electricity_ac`)

仅适用于实际跨越本节点边界、且未由完整供应商数据覆盖的交流电。该身份未特指供应方、电压、发电组合或交付线损归属，仍须按要求采集。经核实的电力流以1 MJ电能为基准，其ILCD属性名称为净热值；原生kWh按精确的3.6 MJ/kWh换算，不能套用燃料热值系数。直流电或其他不匹配电力状态保留在余项要求中。

- 选定流：交流电 `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- 绑定：`fixed`
- 流属性/单位：Energy / kWh
- 数量规则：真实归属原生量 / N；cp_energy。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_energy`

范围证据需求：需真实对齐表读或区间平均功率时长设备、全消费者房型其他输出期间驱动，不人数设温面积默认转kWh。

###### 实际外购交付的有效热量 (`purchased_thermal_service_delivered_heat`)

仅记录有证据能量基准、实际跨越本节点边界交付的有效热量。保留供回状态、温度品位、覆盖范围及实际损失责任。通用热能身份不预设天然气、蒸汽质量、锅炉效率或温度；制冷、燃料能量及缺少蒸汽转能量证据的情形不使用该身份。

- 选定流：热能 `4f19a302-7b3b-11dd-ad8b-0800200c9a66`
- 绑定：`fixed`
- 流属性/单位：Energy / MJ
- 数量规则：真实归属原生量 / N；cp_energy。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_energy`

范围证据需求：需真实交付热表流量温度及采用时参考温度方法、独立原生因子服务损失目标份额，不面积舒适温度因子。

###### 实际液态处理自来水供给 (`supplied_water_liquid_tap`)

仅在实际来源确为处理后的自来水且用于所声明用途时适用。保留实际供应方、水质、温度状态和供应边界，不假定所有供水都是自来水。冰、瓶装矿泉水、再生水、未经处理的水及环境直接取水保留各自实际身份。沿用原卡原生质量或体积基准；最终换算为质量参考量时须有实际相容密度和状态证据，不能把目录中的次要体积关系作为默认现场密度。

- 选定流：自来水 `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- 绑定：`fixed`
- 流属性/单位：Volume / m3
- 数量规则：真实归属原生量 / N；cp_water。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_water`

范围证据需求：需水源表原生量真实用途全消费者份额持留游离废水直接去向服务排除，供m3不自动下水m3。

###### 实际独立记录的合成洗涤剂投入 (`cleaning_consumables_synthetic_detergent`)

仅适用于产品配方、供应状态及用途记录确认的实际合成表面活性洗涤剂。记录扣除包装皮重的材料净量，区分浓缩液与稀释水，整体配方与组分不得相加重复计入。肥皂、消毒剂、抹布、滤材等仍按各自实际身份记录，不预设清洁配方、剂量或发生。

- 选定流：洗涤剂 `1c57d123-df57-49ab-b9d4-957403beb8a5`
- 绑定：`fixed`
- 流属性/单位：Mass / kg
- 数量规则：真实归属原生量 / N；cp_supplies。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_supplies`

范围证据需求：需品项配方作业库存退房续住任务链接，采用时浓度基准密度温度因子；拒绝清洁不编避免量。

###### 真实完成外部集中客房布草洗涤服务 (`external_linen_care`)

服务成果按有据干布质量或真实合同原生基准计，非新棉投入。洗干整理收送化学水能源废水全服务资产租赁布覆盖声明；部分覆盖明确直接补齐。

- 选定流：真实完成外部集中客房布草洗涤服务
- 流属性/单位：Mass / kg
- 数量规则：真实归属原生量 / N；cp_laundry。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_laundry`

范围证据需求：需真实批酒店布类型完成量干湿状态抽样来源，服务全客户负载驱动覆盖阶段资产，不历史HCMI每房kg每吨能源系数。

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 真实提供每日清洁独立酒店客房夜 (`occupied_room_night`)

一个有据住宿过夜周期实际入住不可分独立客房独浴及真实每日清洁响应制度，保留人数时间服务包房型；非一客人预订付款发票强制24小时。

- 选定流：真实提供每日清洁独立酒店客房夜
- 流属性/单位：Count / Item(s)
- 数量规则：1 Item(s)
- 数值来源模式：`fixed_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_rooms`

范围证据需求：需物业房夜入住修订换房免费记录分类服务制度可用状态证据正N，未到预订非房夜，退款本身非未提供住宿。

##### 废物流

###### 实际单独收集的纸类包装废物 (`packing_waste_paper_pack`)

仅适用于本节点实际独立废弃、单独收集的纸类包装，保留实际湿态或收集状态、组成、接收方及处理运输责任。污染或混收形成的混合流须使用其自身经核实的身份，材料组分仅作不可相加审计。仍在用的周转包装不是本废物，不预设组成、数量、回收或处理。

- 选定流：包装废弃物，纸类 `6b6f1025-cb6a-4c9d-9947-7726c4307a76`
- 绑定：`fixed`
- 流属性/单位：Mass / kg
- 数量规则：真实归属原生量 / N；cp_fates。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_fates`

范围证据需求：需真实材料件净质量残留接收运输处理服务覆盖，不购包装量自动等废或回收标记抵扣。

###### 实际单独收集的金属包装废物 (`packing_waste_metal_pack`)

仅适用于本节点实际独立废弃、单独收集的金属包装，保留实际湿态或收集状态、组成、接收方及处理运输责任。污染或混收形成的混合流须使用其自身经核实的身份，材料组分仅作不可相加审计。仍在用的周转包装不是本废物，不预设组成、数量、回收或处理。

- 选定流：金属包装废物 `cdda6013-c0c5-4c72-990a-f5668fe71069`
- 绑定：`fixed`
- 流属性/单位：Mass / kg
- 数量规则：真实归属原生量 / N；cp_fates。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_fates`

范围证据需求：需真实材料件净质量残留接收运输处理服务覆盖，不购包装量自动等废或回收标记抵扣。

###### 实际单独收集的废润滑油 (`independent_contained_residues_used_lubricating_oil`)

仅适用于实际经使用受污染、独立收集并转移的石油基或合成润滑油。保留实际组成、含水或污染状态及接收方。新油、食用油、制冷剂、水性废水和仍滞留滤材或设备中的残余不使用该身份，不预设再生或处置路线。

- 选定流：废润滑油 `55d93375-7f04-4166-b2a2-88ce929051a5`
- 绑定：`fixed`
- 流属性/单位：Mass / kg
- 数量规则：真实归属原生量 / N；cp_fates。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_fates`

范围证据需求：需实际维护服务来源原生质量或兼容有据体积密度温度、组成接收处理、设备混合持留服务已含排除。

##### 基本流

###### 实际有独立证据的向空气排放化石二氧化碳 (`actual_direct_species_co2_fossil_air`)

仅在实际证据确认化石来源、二氧化碳物种和向空气直接释放时适用。保留报告的碳或CO2基准，碳转CO2须独立有证据的化学计量，不预设系数或发生。 本卡仅记录本节点实际直接释放，不重复计入外购电力上游或供应商已覆盖排放。UUID表示未细分子介质的空气排放，其他实际子介质或来源仍须在余项中匹配，不能改标；缺失数据不等于零。

- 选定流：二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 绑定：`fixed`
- 流属性/单位：Mass / kg
- 数量规则：真实归属原生量 / N；cp_releases。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_releases`

范围证据需求：需事件物种粒径介质实测量或兼容活动因子组成去向原生元数据完整系数覆盖，接收处理排放责任一次未知非零。

###### 实际有独立证据的向空气排放化石甲烷 (`actual_direct_species_methane_fossil_air`)

仅在实际证据确认化石来源、甲烷物种和向空气直接释放时适用。生物源或来源未知甲烷仍在余项要求中，不得改标化石源；不预设泄漏发生、气体比例、数量或排放系数。 本卡仅记录本节点实际直接释放，不重复计入外购电力上游或供应商已覆盖排放。UUID表示未细分子介质的空气排放，其他实际子介质或来源仍须在余项中匹配，不能改标；缺失数据不等于零。

- 选定流：甲烷 (化石源) `08a91e70-3ddc-11dd-9610-0050c2490048`
- 绑定：`fixed`
- 流属性/单位：Mass / kg
- 数量规则：真实归属原生量 / N；cp_releases。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_releases`

范围证据需求：需事件物种粒径介质实测量或兼容活动因子组成去向原生元数据完整系数覆盖，接收处理排放责任一次未知非零。

###### 实际有独立证据的向空气排放氧化亚氮 (`actual_direct_species_nitrous_oxide_air`)

仅在实际证据确认氧化亚氮物种及向空气直接释放时适用。原生数量为N2O质量，不是氮质量或氮气质量，不预设排放系数或发生。 本卡仅记录本节点实际直接释放，不重复计入外购电力上游或供应商已覆盖排放。UUID表示未细分子介质的空气排放，其他实际子介质或来源仍须在余项中匹配，不能改标；缺失数据不等于零。

- 选定流：一氧化二氮 `08a91e70-3ddc-11dd-94c3-0050c2490048`
- 绑定：`fixed`
- 流属性/单位：Mass / kg
- 数量规则：真实归属原生量 / N；cp_releases。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_releases`

范围证据需求：需事件物种粒径介质实测量或兼容活动因子组成去向原生元数据完整系数覆盖，接收处理排放责任一次未知非零。

## 7. 分配与联产品处理

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| roomnight_pool | 全部住宿职责 | N为核对换房修订后唯一实际入住物业+不可分客房+住宿夜记录之和，含真实入住免费房，不含未用取消未到可用容量及未实际提供的未决夜。仅退款不删除已经实际提供的住宿。记录真实当地周期起止时区夏令时时长，不固定24小时。一房夜两人仍一房夜，宾客夜单列关联真实人员；不默认人数床容量订单换算。日用其他房型及部分换房夜需互斥有据单元周期划分，不一个服务两个参考。取消未到空置停用准备待机失败清洁资源保留实际期间完整消费者归属。N=0保留责任不除。 先按真实物业房型服务包责任期间定义完整住宿供给池，再选择入住记录。池总资源包含必要空置准备待机失败取消未到及归属停用维护职责，不仅入住事件电表。优先直接追溯或兼容目标池物理驱动/正数完整全部消费者驱动，归属其他房型独立服务；各预期输出具原生量单位基准方法状态时间来源交接互斥成员。仅有据其他输出用户职责移出本池。完整归属原始量除同池正实际N一次；已每参考单夜量不再除。N0资源须责任与结转来源承接期间消解闭合证据，未归属未闭合仍不完整非默零。住客拒绝清洁不删除实际提供房夜。 | unsd-63111; eurostat-rooms; hcmi-context-2020 |
| physical_allocation | 共享输出 | 先按真实物业房型服务包责任期间定义完整住宿供给池，再选择入住记录。池总资源包含必要空置准备待机失败取消未到及归属停用维护职责，不仅入住事件电表。优先直接追溯或兼容目标池物理驱动/正数完整全部消费者驱动，归属其他房型独立服务；各预期输出具原生量单位基准方法状态时间来源交接互斥成员。仅有据其他输出用户职责移出本池。完整归属原始量除同池正实际N一次；已每参考单夜量不再除。N0资源须责任与结转来源承接期间消解闭合证据，未归属未闭合仍不完整非默零。住客拒绝清洁不删除实际提供房夜。 |  |
| full_lifetime | 建筑设备布草 | 各真实建筑装修设备布草全生命周期当量=目标责任池驱动/正数完整全部用户期间寿命驱动，各独立原生单位基准方法状态时间来源换算。完整分母为实测历史加有据兼容剩余使用或真实终止总量，含翻修更换终结。采用容量日历时间驱动须把待机空置停用份额也分配真实供给池：目标期间分子含归属待客容量时间，不以仅入住时间对含空置寿命分母。服务周期寿命驱动需真实完成有据未来周期并闭合完整负担，不可用容量作分母。各期间消费者份额加有据剩余责任穷尽资产负担，不因产权转移重复。原始期间负担归目标池再除同池实际N一次；服务租赁完整资产覆盖制造维护运输终结仅替代匹配直接阶段。不固定资产布草寿命。 | pef-hotel-intro-2026 |
| supply_convention | 独立用品 | 独立用品S=期初+真实外部净材料收货-期末，回收未用留存一次且排接收容器皮重。总输入S单列匹配同范围未用外部Product输出，或耗用输入S-return省该输出。不数值S+return双抵、已用回收作新收货或扣无关初充布草。产废耗用保生产负担。可重复布草自有件周期库存全寿命，内部污→洗→净转移非新购或新纺织制造。 |  |
| fluid_roles | 运行设备 | 工质物理账：期初回路+期初存储+净外收+新进出厂充注（仅未含期初时）=期末回路+期末存储+未用外退+可用回收外送+独立容纳Waste+设备终结事故载体持留内含+独立有据直接释放+明确未知。内部充回ID抵消，期初新进互斥。出厂初充生产归资产数据或明确资产补齐一次。仅来源匹配未用独立子库S_supply=期初未用+净外收-期末未用可耗用法扣自身匹配未用退回且省输出。已用出厂初充回收非未用供应或无关补充抵扣，不负输入。资产混废持留内含非叠加，实际独立可用废物转移处理各门槛不自动抵扣。 |  |
| rejected_and_reworked | 客房布草事件 | 按原事件服务ID追不可用未提供客房失败清洁污拒收布返洗维修更换实际废物退回路径。返洗消耗真实资源一次，不另房夜或新纺织。拒清洁为实际事件状态非默认避免质量。唯一整部混合持留去向及接收运输处理责任防重负担自动回收抵扣。 |  |


## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_rooms | hotel_room_service | 实际供给房夜服务制度完整输出池 | 真实来源事件原生操作数账 | roomnight_count; roomnight_count_unit; roomnight_count_basis; roomnight_count_method; roomnight_count_state; roomnight_count_sample_time; roomnight_count_source; roomnight_count_conversion_factor; roomnight_count_conversion_unit; roomnight_count_conversion_source; guestnight_count; guestnight_count_unit; guestnight_count_basis; guestnight_count_method; guestnight_count_state; guestnight_count_sample_time; guestnight_count_source; guestnight_count_conversion_factor; guestnight_count_conversion_unit; guestnight_count_conversion_source; actual_guest_count; actual_guest_count_unit; actual_guest_count_basis; actual_guest_count_method; actual_guest_count_state; actual_guest_count_sample_time; actual_guest_count_source; actual_guest_count_conversion_factor; actual_guest_count_conversion_unit; actual_guest_count_conversion_source; indivisible_room_count; indivisible_room_count_unit; indivisible_room_count_basis; indivisible_room_count_method; indivisible_room_count_state; indivisible_room_count_sample_time; indivisible_room_count_source; indivisible_room_count_conversion_factor; indivisible_room_count_conversion_unit; indivisible_room_count_conversion_source; actual_room_capacity; actual_room_capacity_unit; actual_room_capacity_basis; actual_room_capacity_method; actual_room_capacity_state; actual_room_capacity_sample_time; actual_room_capacity_source; actual_room_capacity_conversion_factor; actual_room_capacity_conversion_unit; actual_room_capacity_conversion_source; room_service_area; room_service_area_unit; room_service_area_basis; room_service_area_method; room_service_area_state; room_service_area_sample_time; room_service_area_source; room_service_area_conversion_factor; room_service_area_conversion_unit; room_service_area_conversion_source; actual_cycle_duration; actual_cycle_duration_unit; actual_cycle_duration_basis; actual_cycle_duration_method; actual_cycle_duration_state; actual_cycle_duration_sample_time; actual_cycle_duration_source; actual_cycle_duration_conversion_factor; actual_cycle_duration_conversion_unit; actual_cycle_duration_conversion_source; actual_cleaning_event_count; actual_cleaning_event_count_unit; actual_cleaning_event_count_basis; actual_cleaning_event_count_method; actual_cleaning_event_count_state; actual_cleaning_event_count_sample_time; actual_cleaning_event_count_source; actual_cleaning_event_count_conversion_factor; actual_cleaning_event_count_conversion_unit; actual_cleaning_event_count_conversion_source; actual_turnover_event_count; actual_turnover_event_count_unit; actual_turnover_event_count_basis; actual_turnover_event_count_method; actual_turnover_event_count_state; actual_turnover_event_count_sample_time; actual_turnover_event_count_source; actual_turnover_event_count_conversion_factor; actual_turnover_event_count_conversion_unit; actual_turnover_event_count_conversion_source; declined_cleaning_count; declined_cleaning_count_unit; declined_cleaning_count_basis; declined_cleaning_count_method; declined_cleaning_count_state; declined_cleaning_count_sample_time; declined_cleaning_count_source; declined_cleaning_count_conversion_factor; declined_cleaning_count_conversion_unit; declined_cleaning_count_conversion_source; actual_other_output_quantity; actual_other_output_quantity_unit; actual_other_output_quantity_basis; actual_other_output_quantity_method; actual_other_output_quantity_state; actual_other_output_quantity_sample_time; actual_other_output_quantity_source; actual_other_output_quantity_conversion_factor; actual_other_output_quantity_conversion_unit; actual_other_output_quantity_conversion_source; target_pool_resource_quantity; target_pool_resource_quantity_unit; target_pool_resource_quantity_basis; target_pool_resource_quantity_method; target_pool_resource_quantity_state; target_pool_resource_quantity_sample_time; target_pool_resource_quantity_source; target_pool_resource_quantity_conversion_factor; target_pool_resource_quantity_conversion_unit; target_pool_resource_quantity_conversion_source; carry_quantity; carry_quantity_unit; carry_quantity_basis; carry_quantity_method; carry_quantity_state; carry_quantity_sample_time; carry_quantity_source; carry_quantity_conversion_factor; carry_quantity_conversion_unit; carry_quantity_conversion_source; target_pool_driver; target_pool_driver_unit; target_pool_driver_basis; target_pool_driver_method; target_pool_driver_state; target_pool_driver_sample_time; target_pool_driver_source; target_pool_driver_conversion_factor; target_pool_driver_conversion_unit; target_pool_driver_conversion_source; complete_all_consumer_driver; complete_all_consumer_driver_unit; complete_all_consumer_driver_basis; complete_all_consumer_driver_method; complete_all_consumer_driver_state; complete_all_consumer_driver_sample_time; complete_all_consumer_driver_source; complete_all_consumer_driver_conversion_factor; complete_all_consumer_driver_conversion_unit; complete_all_consumer_driver_conversion_source; attribution_share; attribution_share_unit; attribution_share_basis; attribution_share_method; attribution_share_state; attribution_share_sample_time; attribution_share_source; attribution_share_conversion_factor; attribution_share_conversion_unit; attribution_share_conversion_source; same_scope_N; same_scope_N_unit; same_scope_N_basis; same_scope_N_method; same_scope_N_state; same_scope_N_sample_time; same_scope_N_source; same_scope_N_conversion_factor; same_scope_N_conversion_unit; same_scope_N_conversion_source; room_id; accommodation_night_id; night_cycle_definition; physical_checkin_timestamp; physical_checkout_timestamp; checkin_timezone; checkout_timezone; DST_offset_evidence; occupancy_provision_evidence; complimentary_occupancy_evidence; no_show_cancel_record; room_move_partition_records; revision_replaces_record; payment_reversal_physical_provision_distinction; non_timeshare_evidence; non_selfcatering_evidence; private_bathroom_evidence; visitor_scope_evidence; daily_housekeeping_regime_source; actual_performed_requested_declined_records; response_coverage_source; usable_condition_acceptance_source; room_service_package; included_amenity_access; other_service_handoff_records; property_id; target_pool_id; target_room_type; responsibility_period_id; period_start; period_end; period_timezone; period_time_source; all_consumer_records; all_intended_output_records; consumer_id; output_handoff_id; output_handoff_source; competing_output_native_quantity_records; consumer_exclusivity_key; numerator_record_links; direct_assignment_evidence; allocation_method; allocation_source; raw_quantity_scope_id; already_per_reference; standby_idle_vacant_closed_duty_records; failed_cancelled_noshow_duty_records; carry_origin_scope; carry_receiving_scope; carry_quantity_link; carry_settlement_closure_source; coverage_owner; provider_overlap_exclusion; uncertainty; sensitivity; update_source | N为核对换房修订后唯一实际入住物业+不可分客房+住宿夜记录之和，含真实入住免费房，不含未用取消未到可用容量及未实际提供的未决夜。仅退款不删除已经实际提供的住宿。记录真实当地周期起止时区夏令时时长，不固定24小时。一房夜两人仍一房夜，宾客夜单列关联真实人员；不默认人数床容量订单换算。日用其他房型及部分换房夜需互斥有据单元周期划分，不一个服务两个参考。取消未到空置停用准备待机失败清洁资源保留实际期间完整消费者归属。N=0保留责任不除。 每日制度分实际任务布草更换采集；各目标其他房型服务实际交接数量具原生元数据。完整共享消费者含空置停用失败职责真实外用户；建筑产权非商品转售。 先按真实物业房型服务包责任期间定义完整住宿供给池，再选择入住记录。池总资源包含必要空置准备待机失败取消未到及归属停用维护职责，不仅入住事件电表。优先直接追溯或兼容目标池物理驱动/正数完整全部消费者驱动，归属其他房型独立服务；各预期输出具原生量单位基准方法状态时间来源交接互斥成员。仅有据其他输出用户职责移出本池。完整归属原始量除同池正实际N一次；已每参考单夜量不再除。N0资源须责任与结转来源承接期间消解闭合证据，未归属未闭合仍不完整非默零。住客拒绝清洁不删除实际提供房夜。 | Item(s)；真实人数数量面积时间原生输出单位 | 每实际事件批次及匹配计量期间 | 完整责任池期间与相关全生命周期 | 真实物业住宿池及每一共享消费者服务接口 | 每参考流 | 各原生操作数单位基准方法状态采样时间来源校准换算代表性不确定性覆盖责任 |
| cp_energy | hotel_room_service | 真实电热冷交付燃料职责 | 真实来源事件原生操作数账 | meter_opening; meter_opening_unit; meter_opening_basis; meter_opening_method; meter_opening_state; meter_opening_sample_time; meter_opening_source; meter_opening_conversion_factor; meter_opening_conversion_unit; meter_opening_conversion_source; meter_closing; meter_closing_unit; meter_closing_basis; meter_closing_method; meter_closing_state; meter_closing_sample_time; meter_closing_source; meter_closing_conversion_factor; meter_closing_conversion_unit; meter_closing_conversion_source; electricity; electricity_unit; electricity_basis; electricity_method; electricity_state; electricity_sample_time; electricity_source; electricity_conversion_factor; electricity_conversion_unit; electricity_conversion_source; interval_average_power; interval_average_power_unit; interval_average_power_basis; interval_average_power_method; interval_average_power_state; interval_average_power_sample_time; interval_average_power_source; interval_average_power_conversion_factor; interval_average_power_conversion_unit; interval_average_power_conversion_source; duration; duration_unit; duration_basis; duration_method; duration_state; duration_sample_time; duration_source; duration_conversion_factor; duration_conversion_unit; duration_conversion_source; delivered_thermal_energy; delivered_thermal_energy_unit; delivered_thermal_energy_basis; delivered_thermal_energy_method; delivered_thermal_energy_state; delivered_thermal_energy_sample_time; delivered_thermal_energy_source; delivered_thermal_energy_conversion_factor; delivered_thermal_energy_conversion_unit; delivered_thermal_energy_conversion_source; thermal_mass_flow; thermal_mass_flow_unit; thermal_mass_flow_basis; thermal_mass_flow_method; thermal_mass_flow_state; thermal_mass_flow_sample_time; thermal_mass_flow_source; thermal_mass_flow_conversion_factor; thermal_mass_flow_conversion_unit; thermal_mass_flow_conversion_source; inlet_temperature; inlet_temperature_unit; inlet_temperature_basis; inlet_temperature_method; inlet_temperature_state; inlet_temperature_sample_time; inlet_temperature_source; inlet_temperature_conversion_factor; inlet_temperature_conversion_unit; inlet_temperature_conversion_source; outlet_temperature; outlet_temperature_unit; outlet_temperature_basis; outlet_temperature_method; outlet_temperature_state; outlet_temperature_sample_time; outlet_temperature_source; outlet_temperature_conversion_factor; outlet_temperature_conversion_unit; outlet_temperature_conversion_source; reference_temperature; reference_temperature_unit; reference_temperature_basis; reference_temperature_method; reference_temperature_state; reference_temperature_sample_time; reference_temperature_source; reference_temperature_conversion_factor; reference_temperature_conversion_unit; reference_temperature_conversion_source; specific_enthalpy_difference; specific_enthalpy_difference_unit; specific_enthalpy_difference_basis; specific_enthalpy_difference_method; specific_enthalpy_difference_state; specific_enthalpy_difference_sample_time; specific_enthalpy_difference_source; specific_enthalpy_difference_conversion_factor; specific_enthalpy_difference_conversion_unit; specific_enthalpy_difference_conversion_source; fuel_mass; fuel_mass_unit; fuel_mass_basis; fuel_mass_method; fuel_mass_state; fuel_mass_sample_time; fuel_mass_source; fuel_mass_conversion_factor; fuel_mass_conversion_unit; fuel_mass_conversion_source; fuel_volume; fuel_volume_unit; fuel_volume_basis; fuel_volume_method; fuel_volume_state; fuel_volume_sample_time; fuel_volume_source; fuel_volume_conversion_factor; fuel_volume_conversion_unit; fuel_volume_conversion_source; density; density_unit; density_basis; density_method; density_state; density_sample_time; density_source; density_conversion_factor; density_conversion_unit; density_conversion_source; density_temperature; density_temperature_unit; density_temperature_basis; density_temperature_method; density_temperature_state; density_temperature_sample_time; density_temperature_source; density_temperature_conversion_factor; density_temperature_conversion_unit; density_temperature_conversion_source; gas_pressure; gas_pressure_unit; gas_pressure_basis; gas_pressure_method; gas_pressure_state; gas_pressure_sample_time; gas_pressure_source; gas_pressure_conversion_factor; gas_pressure_conversion_unit; gas_pressure_conversion_source; calorific_value; calorific_value_unit; calorific_value_basis; calorific_value_method; calorific_value_state; calorific_value_sample_time; calorific_value_source; calorific_value_conversion_factor; calorific_value_conversion_unit; calorific_value_conversion_source; target_pool_driver; target_pool_driver_unit; target_pool_driver_basis; target_pool_driver_method; target_pool_driver_state; target_pool_driver_sample_time; target_pool_driver_source; target_pool_driver_conversion_factor; target_pool_driver_conversion_unit; target_pool_driver_conversion_source; complete_all_consumer_driver; complete_all_consumer_driver_unit; complete_all_consumer_driver_basis; complete_all_consumer_driver_method; complete_all_consumer_driver_state; complete_all_consumer_driver_sample_time; complete_all_consumer_driver_source; complete_all_consumer_driver_conversion_factor; complete_all_consumer_driver_conversion_unit; complete_all_consumer_driver_conversion_source; attribution_share; attribution_share_unit; attribution_share_basis; attribution_share_method; attribution_share_state; attribution_share_sample_time; attribution_share_source; attribution_share_conversion_factor; attribution_share_conversion_unit; attribution_share_conversion_source; same_scope_N; same_scope_N_unit; same_scope_N_basis; same_scope_N_method; same_scope_N_state; same_scope_N_sample_time; same_scope_N_source; same_scope_N_conversion_factor; same_scope_N_conversion_unit; same_scope_N_conversion_source; equipment_id; energy_carrier_identity; meter_id; calibration_source; interval_start; interval_end; interval_timezone; average_power_population; average_power_method; actual_duty_cycle_source; fan_pump_idle_hotwater_scope; thermal_delivery_gate; thermal_meter_method; thermal_property_reference_basis; thermal_provider_coverage; fuel_inventory_records; combustion_activity_link; gas_pressure_basis_if_actual; property_id; target_pool_id; target_room_type; responsibility_period_id; period_start; period_end; period_timezone; period_time_source; all_consumer_records; all_intended_output_records; consumer_id; output_handoff_id; output_handoff_source; competing_output_native_quantity_records; consumer_exclusivity_key; numerator_record_links; direct_assignment_evidence; allocation_method; allocation_source; raw_quantity_scope_id; already_per_reference; standby_idle_vacant_closed_duty_records; failed_cancelled_noshow_duty_records; carry_origin_scope; carry_receiving_scope; carry_quantity_link; carry_settlement_closure_source; coverage_owner; provider_overlap_exclusion; uncertainty; sensitivity; update_source; flow_row_id; actual_identity_case; actual_substance_or_material; actual_origin_and_medium; actual_state_and_gate; case_activation_evidence; typed_or_residual_quantity; quantity_exclusion_links; whole_total_reconciliation; unresolved_occurrence_not_zero | 用实际同期间读数或同区间平均功率乘时长独立换算含真实启停待机，已积分kWh不再乘。购热冷用交付表或真实兼容质量流量焓差时长且参考状态有据，不仅温度或默认水热容。燃料原生库存质量或实际体积密度温度，采用热值时声明种类；服务所含发能互斥，真实燃烧具名物种另计。 先按真实物业房型服务包责任期间定义完整住宿供给池，再选择入住记录。池总资源包含必要空置准备待机失败取消未到及归属停用维护职责，不仅入住事件电表。优先直接追溯或兼容目标池物理驱动/正数完整全部消费者驱动，归属其他房型独立服务；各预期输出具原生量单位基准方法状态时间来源交接互斥成员。仅有据其他输出用户职责移出本池。完整归属原始量除同池正实际N一次；已每参考单夜量不再除。N0资源须责任与结转来源承接期间消解闭合证据，未归属未闭合仍不完整非默零。住客拒绝清洁不删除实际提供房夜。 | kWh；MJ；kg；真实流量温度密度时间单位 | 每实际事件批次及匹配计量期间 | 完整责任池期间与相关全生命周期 | 真实物业住宿池及每一共享消费者服务接口 | 每参考流 | 各原生操作数单位基准方法状态采样时间来源校准换算代表性不确定性覆盖责任 |
| cp_water | hotel_room_service | 供水源用途收集直接水去向 | 真实来源事件原生操作数账 | supplied_volume; supplied_volume_unit; supplied_volume_basis; supplied_volume_method; supplied_volume_state; supplied_volume_sample_time; supplied_volume_source; supplied_volume_conversion_factor; supplied_volume_conversion_unit; supplied_volume_conversion_source; collected_volume; collected_volume_unit; collected_volume_basis; collected_volume_method; collected_volume_state; collected_volume_sample_time; collected_volume_source; collected_volume_conversion_factor; collected_volume_conversion_unit; collected_volume_conversion_source; free_liquid_mass; free_liquid_mass_unit; free_liquid_mass_basis; free_liquid_mass_method; free_liquid_mass_state; free_liquid_mass_sample_time; free_liquid_mass_source; free_liquid_mass_conversion_factor; free_liquid_mass_conversion_unit; free_liquid_mass_conversion_source; retained_liquid_mass; retained_liquid_mass_unit; retained_liquid_mass_basis; retained_liquid_mass_method; retained_liquid_mass_state; retained_liquid_mass_sample_time; retained_liquid_mass_source; retained_liquid_mass_conversion_factor; retained_liquid_mass_conversion_unit; retained_liquid_mass_conversion_source; measured_direct_water_mass; measured_direct_water_mass_unit; measured_direct_water_mass_basis; measured_direct_water_mass_method; measured_direct_water_mass_state; measured_direct_water_mass_sample_time; measured_direct_water_mass_source; measured_direct_water_mass_conversion_factor; measured_direct_water_mass_conversion_unit; measured_direct_water_mass_conversion_source; composition_fraction; composition_fraction_unit; composition_fraction_basis; composition_fraction_method; composition_fraction_state; composition_fraction_sample_time; composition_fraction_source; composition_fraction_conversion_factor; composition_fraction_conversion_unit; composition_fraction_conversion_source; density; density_unit; density_basis; density_method; density_state; density_sample_time; density_source; density_conversion_factor; density_conversion_unit; density_conversion_source; temperature; temperature_unit; temperature_basis; temperature_method; temperature_state; temperature_sample_time; temperature_source; temperature_conversion_factor; temperature_conversion_unit; temperature_conversion_source; target_pool_driver; target_pool_driver_unit; target_pool_driver_basis; target_pool_driver_method; target_pool_driver_state; target_pool_driver_sample_time; target_pool_driver_source; target_pool_driver_conversion_factor; target_pool_driver_conversion_unit; target_pool_driver_conversion_source; complete_all_consumer_driver; complete_all_consumer_driver_unit; complete_all_consumer_driver_basis; complete_all_consumer_driver_method; complete_all_consumer_driver_state; complete_all_consumer_driver_sample_time; complete_all_consumer_driver_source; complete_all_consumer_driver_conversion_factor; complete_all_consumer_driver_conversion_unit; complete_all_consumer_driver_conversion_source; attribution_share; attribution_share_unit; attribution_share_basis; attribution_share_method; attribution_share_state; attribution_share_sample_time; attribution_share_source; attribution_share_conversion_factor; attribution_share_conversion_unit; attribution_share_conversion_source; same_scope_N; same_scope_N_unit; same_scope_N_basis; same_scope_N_method; same_scope_N_state; same_scope_N_sample_time; same_scope_N_source; same_scope_N_conversion_factor; same_scope_N_conversion_unit; same_scope_N_conversion_source; water_source_identity; enduse_id; toilet_grey_cleaning_equipment_role; composition_identity; composition_method; composition_source; receiver_id; sewer_or_direct_medium; receiver_gate_source; transport_treatment_scope; retained_carrier_link; stream_exclusion_ids; external_laundry_water_coverage; property_id; target_pool_id; target_room_type; responsibility_period_id; period_start; period_end; period_timezone; period_time_source; all_consumer_records; all_intended_output_records; consumer_id; output_handoff_id; output_handoff_source; competing_output_native_quantity_records; consumer_exclusivity_key; numerator_record_links; direct_assignment_evidence; allocation_method; allocation_source; raw_quantity_scope_id; already_per_reference; standby_idle_vacant_closed_duty_records; failed_cancelled_noshow_duty_records; carry_origin_scope; carry_receiving_scope; carry_quantity_link; carry_settlement_closure_source; coverage_owner; provider_overlap_exclusion; uncertainty; sensitivity; update_source; flow_row_id; actual_identity_case; actual_substance_or_material; actual_origin_and_medium; actual_state_and_gate; case_activation_evidence; typed_or_residual_quantity; quantity_exclusion_links; whole_total_reconciliation; unresolved_occurrence_not_zero | 量各水源供应实际收集持留直接路径，供体积非废水体积。质量体积换算须兼容组成密度温度原生证据。下水收集处理为容纳Waste，环境直接排水水蒸气用真实物种介质。不同实际接收流分别展开，未决余额既不证明蒸发发生也不证明不存在。 先按真实物业房型服务包责任期间定义完整住宿供给池，再选择入住记录。池总资源包含必要空置准备待机失败取消未到及归属停用维护职责，不仅入住事件电表。优先直接追溯或兼容目标池物理驱动/正数完整全部消费者驱动，归属其他房型独立服务；各预期输出具原生量单位基准方法状态时间来源交接互斥成员。仅有据其他输出用户职责移出本池。完整归属原始量除同池正实际N一次；已每参考单夜量不再除。N0资源须责任与结转来源承接期间消解闭合证据，未归属未闭合仍不完整非默零。住客拒绝清洁不删除实际提供房夜。 | m3；真实组成质量密度温度单位 | 每实际事件批次及匹配计量期间 | 完整责任池期间与相关全生命周期 | 真实物业住宿池及每一共享消费者服务接口 | 每参考流 | 各原生操作数单位基准方法状态采样时间来源校准换算代表性不确定性覆盖责任 |
| cp_supplies | hotel_room_service | 真实非食品客用品清洁库存 | 真实来源事件原生操作数账 | opening; opening_unit; opening_basis; opening_method; opening_state; opening_sample_time; opening_source; opening_conversion_factor; opening_conversion_unit; opening_conversion_source; receipt_gross; receipt_gross_unit; receipt_gross_basis; receipt_gross_method; receipt_gross_state; receipt_gross_sample_time; receipt_gross_source; receipt_gross_conversion_factor; receipt_gross_conversion_unit; receipt_gross_conversion_source; receipt_container_tare; receipt_container_tare_unit; receipt_container_tare_basis; receipt_container_tare_method; receipt_container_tare_state; receipt_container_tare_sample_time; receipt_container_tare_source; receipt_container_tare_conversion_factor; receipt_container_tare_conversion_unit; receipt_container_tare_conversion_source; net_external_receipts; net_external_receipts_unit; net_external_receipts_basis; net_external_receipts_method; net_external_receipts_state; net_external_receipts_sample_time; net_external_receipts_source; net_external_receipts_conversion_factor; net_external_receipts_conversion_unit; net_external_receipts_conversion_source; closing_unused; closing_unused_unit; closing_unused_basis; closing_unused_method; closing_unused_state; closing_unused_sample_time; closing_unused_source; closing_unused_conversion_factor; closing_unused_conversion_unit; closing_unused_conversion_source; matched_unused_return; matched_unused_return_unit; matched_unused_return_basis; matched_unused_return_method; matched_unused_return_state; matched_unused_return_sample_time; matched_unused_return_source; matched_unused_return_conversion_factor; matched_unused_return_conversion_unit; matched_unused_return_conversion_source; actually_used; actually_used_unit; actually_used_basis; actually_used_method; actually_used_state; actually_used_sample_time; actually_used_source; actually_used_conversion_factor; actually_used_conversion_unit; actually_used_conversion_source; unit_mass; unit_mass_unit; unit_mass_basis; unit_mass_method; unit_mass_state; unit_mass_sample_time; unit_mass_source; unit_mass_conversion_factor; unit_mass_conversion_unit; unit_mass_conversion_source; unit_area; unit_area_unit; unit_area_basis; unit_area_method; unit_area_state; unit_area_sample_time; unit_area_source; unit_area_conversion_factor; unit_area_conversion_unit; unit_area_conversion_source; unit_length; unit_length_unit; unit_length_basis; unit_length_method; unit_length_state; unit_length_sample_time; unit_length_source; unit_length_conversion_factor; unit_length_conversion_unit; unit_length_conversion_source; concentrate_mass; concentrate_mass_unit; concentrate_mass_basis; concentrate_mass_method; concentrate_mass_state; concentrate_mass_sample_time; concentrate_mass_source; concentrate_mass_conversion_factor; concentrate_mass_conversion_unit; concentrate_mass_conversion_source; prepared_solution_mass; prepared_solution_mass_unit; prepared_solution_mass_basis; prepared_solution_mass_method; prepared_solution_mass_state; prepared_solution_mass_sample_time; prepared_solution_mass_source; prepared_solution_mass_conversion_factor; prepared_solution_mass_conversion_unit; prepared_solution_mass_conversion_source; dilution_water_mass; dilution_water_mass_unit; dilution_water_mass_basis; dilution_water_mass_method; dilution_water_mass_state; dilution_water_mass_sample_time; dilution_water_mass_source; dilution_water_mass_conversion_factor; dilution_water_mass_conversion_unit; dilution_water_mass_conversion_source; active_fraction; active_fraction_unit; active_fraction_basis; active_fraction_method; active_fraction_state; active_fraction_sample_time; active_fraction_source; active_fraction_conversion_factor; active_fraction_conversion_unit; active_fraction_conversion_source; density; density_unit; density_basis; density_method; density_state; density_sample_time; density_source; density_conversion_factor; density_conversion_unit; density_conversion_source; density_temperature; density_temperature_unit; density_temperature_basis; density_temperature_method; density_temperature_state; density_temperature_sample_time; density_temperature_source; density_temperature_conversion_factor; density_temperature_conversion_unit; density_temperature_conversion_source; target_pool_driver; target_pool_driver_unit; target_pool_driver_basis; target_pool_driver_method; target_pool_driver_state; target_pool_driver_sample_time; target_pool_driver_source; target_pool_driver_conversion_factor; target_pool_driver_conversion_unit; target_pool_driver_conversion_source; complete_all_consumer_driver; complete_all_consumer_driver_unit; complete_all_consumer_driver_basis; complete_all_consumer_driver_method; complete_all_consumer_driver_state; complete_all_consumer_driver_sample_time; complete_all_consumer_driver_source; complete_all_consumer_driver_conversion_factor; complete_all_consumer_driver_conversion_unit; complete_all_consumer_driver_conversion_source; attribution_share; attribution_share_unit; attribution_share_basis; attribution_share_method; attribution_share_state; attribution_share_sample_time; attribution_share_source; attribution_share_conversion_factor; attribution_share_conversion_unit; attribution_share_conversion_source; same_scope_N; same_scope_N_unit; same_scope_N_basis; same_scope_N_method; same_scope_N_state; same_scope_N_sample_time; same_scope_N_source; same_scope_N_conversion_factor; same_scope_N_conversion_unit; same_scope_N_conversion_source; supply_SKU; formulation_identity; composition_basis; composition_method; composition_source; same_scope_return_match; stock_convention; refill_dispenser_asset_link; task_stayover_turnover_response_id; packaging_production_coverage; receiver_id; return_acceptance_source; property_id; target_pool_id; target_room_type; responsibility_period_id; period_start; period_end; period_timezone; period_time_source; all_consumer_records; all_intended_output_records; consumer_id; output_handoff_id; output_handoff_source; competing_output_native_quantity_records; consumer_exclusivity_key; numerator_record_links; direct_assignment_evidence; allocation_method; allocation_source; raw_quantity_scope_id; already_per_reference; standby_idle_vacant_closed_duty_records; failed_cancelled_noshow_duty_records; carry_origin_scope; carry_receiving_scope; carry_quantity_link; carry_settlement_closure_source; coverage_owner; provider_overlap_exclusion; uncertainty; sensitivity; update_source; flow_row_id; actual_identity_case; actual_substance_or_material; actual_origin_and_medium; actual_state_and_gate; case_activation_evidence; typed_or_residual_quantity; quantity_exclusion_links; whole_total_reconciliation; unresolved_occurrence_not_zero | 独立用品S=期初+真实外部净材料收货-期末，回收未用留存一次且排接收容器皮重。总输入S单列匹配同范围未用外部Product输出，或耗用输入S-return省该输出。不数值S+return双抵、已用回收作新收货或扣无关初充布草。产废耗用保生产负担。可重复布草自有件周期库存全寿命，内部污→洗→净转移非新购或新纺织制造。 配制液与浓液稀释水活性比为非叠加组成，实际配制有据非规定剂量。购液内水不第二供水输入。 先按真实物业房型服务包责任期间定义完整住宿供给池，再选择入住记录。池总资源包含必要空置准备待机失败取消未到及归属停用维护职责，不仅入住事件电表。优先直接追溯或兼容目标池物理驱动/正数完整全部消费者驱动，归属其他房型独立服务；各预期输出具原生量单位基准方法状态时间来源交接互斥成员。仅有据其他输出用户职责移出本池。完整归属原始量除同池正实际N一次；已每参考单夜量不再除。N0资源须责任与结转来源承接期间消解闭合证据，未归属未闭合仍不完整非默零。住客拒绝清洁不删除实际提供房夜。 | kg；真实品项数量面积长度比例密度单位 | 每实际事件批次及匹配计量期间 | 完整责任池期间与相关全生命周期 | 真实物业住宿池及每一共享消费者服务接口 | 每参考流 | 各原生操作数单位基准方法状态采样时间来源校准换算代表性不确定性覆盖责任 |
| cp_laundry | hotel_room_service | 完成外部集中客房布草护理批 | 真实来源事件原生操作数账 | completed_service_quantity; completed_service_quantity_unit; completed_service_quantity_basis; completed_service_quantity_method; completed_service_quantity_state; completed_service_quantity_sample_time; completed_service_quantity_source; completed_service_quantity_conversion_factor; completed_service_quantity_conversion_unit; completed_service_quantity_conversion_source; dry_textile_mass; dry_textile_mass_unit; dry_textile_mass_basis; dry_textile_mass_method; dry_textile_mass_state; dry_textile_mass_sample_time; dry_textile_mass_source; dry_textile_mass_conversion_factor; dry_textile_mass_conversion_unit; dry_textile_mass_conversion_source; wet_inbound_gross_mass; wet_inbound_gross_mass_unit; wet_inbound_gross_mass_basis; wet_inbound_gross_mass_method; wet_inbound_gross_mass_state; wet_inbound_gross_mass_sample_time; wet_inbound_gross_mass_source; wet_inbound_gross_mass_conversion_factor; wet_inbound_gross_mass_conversion_unit; wet_inbound_gross_mass_conversion_source; transport_container_tare; transport_container_tare_unit; transport_container_tare_basis; transport_container_tare_method; transport_container_tare_state; transport_container_tare_sample_time; transport_container_tare_source; transport_container_tare_conversion_factor; transport_container_tare_conversion_unit; transport_container_tare_conversion_source; retained_water_mass; retained_water_mass_unit; retained_water_mass_basis; retained_water_mass_method; retained_water_mass_state; retained_water_mass_sample_time; retained_water_mass_source; retained_water_mass_conversion_factor; retained_water_mass_conversion_unit; retained_water_mass_conversion_source; received_clean_mass; received_clean_mass_unit; received_clean_mass_basis; received_clean_mass_method; received_clean_mass_state; received_clean_mass_sample_time; received_clean_mass_source; received_clean_mass_conversion_factor; received_clean_mass_conversion_unit; received_clean_mass_conversion_source; returned_soiled_mass; returned_soiled_mass_unit; returned_soiled_mass_basis; returned_soiled_mass_method; returned_soiled_mass_state; returned_soiled_mass_sample_time; returned_soiled_mass_source; returned_soiled_mass_conversion_factor; returned_soiled_mass_conversion_unit; returned_soiled_mass_conversion_source; rewash_quantity; rewash_quantity_unit; rewash_quantity_basis; rewash_quantity_method; rewash_quantity_state; rewash_quantity_sample_time; rewash_quantity_source; rewash_quantity_conversion_factor; rewash_quantity_conversion_unit; rewash_quantity_conversion_source; repair_quantity; repair_quantity_unit; repair_quantity_basis; repair_quantity_method; repair_quantity_state; repair_quantity_sample_time; repair_quantity_source; repair_quantity_conversion_factor; repair_quantity_conversion_unit; repair_quantity_conversion_source; rejected_quantity; rejected_quantity_unit; rejected_quantity_basis; rejected_quantity_method; rejected_quantity_state; rejected_quantity_sample_time; rejected_quantity_source; rejected_quantity_conversion_factor; rejected_quantity_conversion_unit; rejected_quantity_conversion_source; lost_piece_count; lost_piece_count_unit; lost_piece_count_basis; lost_piece_count_method; lost_piece_count_state; lost_piece_count_sample_time; lost_piece_count_source; lost_piece_count_conversion_factor; lost_piece_count_conversion_unit; lost_piece_count_conversion_source; laundry_energy; laundry_energy_unit; laundry_energy_basis; laundry_energy_method; laundry_energy_state; laundry_energy_sample_time; laundry_energy_source; laundry_energy_conversion_factor; laundry_energy_conversion_unit; laundry_energy_conversion_source; laundry_water; laundry_water_unit; laundry_water_basis; laundry_water_method; laundry_water_state; laundry_water_sample_time; laundry_water_source; laundry_water_conversion_factor; laundry_water_conversion_unit; laundry_water_conversion_source; laundry_chemical_mass; laundry_chemical_mass_unit; laundry_chemical_mass_basis; laundry_chemical_mass_method; laundry_chemical_mass_state; laundry_chemical_mass_sample_time; laundry_chemical_mass_source; laundry_chemical_mass_conversion_factor; laundry_chemical_mass_conversion_unit; laundry_chemical_mass_conversion_source; provider_full_life_driver; provider_full_life_driver_unit; provider_full_life_driver_basis; provider_full_life_driver_method; provider_full_life_driver_state; provider_full_life_driver_sample_time; provider_full_life_driver_source; provider_full_life_driver_conversion_factor; provider_full_life_driver_conversion_unit; provider_full_life_driver_conversion_source; provider_target_driver; provider_target_driver_unit; provider_target_driver_basis; provider_target_driver_method; provider_target_driver_state; provider_target_driver_sample_time; provider_target_driver_source; provider_target_driver_conversion_factor; provider_target_driver_conversion_unit; provider_target_driver_conversion_source; provider_all_client_driver; provider_all_client_driver_unit; provider_all_client_driver_basis; provider_all_client_driver_method; provider_all_client_driver_state; provider_all_client_driver_sample_time; provider_all_client_driver_source; provider_all_client_driver_conversion_factor; provider_all_client_driver_conversion_unit; provider_all_client_driver_conversion_source; target_pool_driver; target_pool_driver_unit; target_pool_driver_basis; target_pool_driver_method; target_pool_driver_state; target_pool_driver_sample_time; target_pool_driver_source; target_pool_driver_conversion_factor; target_pool_driver_conversion_unit; target_pool_driver_conversion_source; complete_all_consumer_driver; complete_all_consumer_driver_unit; complete_all_consumer_driver_basis; complete_all_consumer_driver_method; complete_all_consumer_driver_state; complete_all_consumer_driver_sample_time; complete_all_consumer_driver_source; complete_all_consumer_driver_conversion_factor; complete_all_consumer_driver_conversion_unit; complete_all_consumer_driver_conversion_source; attribution_share; attribution_share_unit; attribution_share_basis; attribution_share_method; attribution_share_state; attribution_share_sample_time; attribution_share_source; attribution_share_conversion_factor; attribution_share_conversion_unit; attribution_share_conversion_source; same_scope_N; same_scope_N_unit; same_scope_N_basis; same_scope_N_method; same_scope_N_state; same_scope_N_sample_time; same_scope_N_source; same_scope_N_conversion_factor; same_scope_N_conversion_unit; same_scope_N_conversion_source; provider_id; batch_id; shared_transfer_id; textile_owner; rental_or_owned; textile_type; piece_ids_or_cohort; service_native_property_unit; dry_basis_definition; dry_mass_measurement_source; asreceived_wet_dry_matching_method; water_definition; sample_id; sample_representativeness; completed_wash_dry_finish_evidence; rewash_event_parent_id; provider_allclient_records; collection_delivery_coverage; chemical_water_energy_effluent_scope; equipment_full_life_scope; rental_textile_manufacture_replacement_EOL_scope; hotel_uncovered_supplement_links; provider_receiver_treatment_scope; job_completion_time_timezone_source; property_id; target_pool_id; target_room_type; responsibility_period_id; period_start; period_end; period_timezone; period_time_source; all_consumer_records; all_intended_output_records; consumer_id; output_handoff_id; output_handoff_source; competing_output_native_quantity_records; consumer_exclusivity_key; numerator_record_links; direct_assignment_evidence; allocation_method; allocation_source; raw_quantity_scope_id; already_per_reference; standby_idle_vacant_closed_duty_records; failed_cancelled_noshow_duty_records; carry_origin_scope; carry_receiving_scope; carry_quantity_link; carry_settlement_closure_source; coverage_owner; provider_overlap_exclusion; uncertainty; sensitivity; update_source | 实际完成洗干整理成果有源原生单位干基定义真实批样，不假比例干燥湿入货或房夜因子。必要时仅兼容同样本水收到态与水非水定义，LOD非自动水。返洗失败批资源一次非新造布；房布与餐员工个人布分开，用正数完整服务全客户物理驱动，酒店原始洗量先归池再同池N一次。完整购服务或未覆盖直接补齐，不服务全套再含电水化学运输资产终结。 先按真实物业房型服务包责任期间定义完整住宿供给池，再选择入住记录。池总资源包含必要空置准备待机失败取消未到及归属停用维护职责，不仅入住事件电表。优先直接追溯或兼容目标池物理驱动/正数完整全部消费者驱动，归属其他房型独立服务；各预期输出具原生量单位基准方法状态时间来源交接互斥成员。仅有据其他输出用户职责移出本池。完整归属原始量除同池正实际N一次；已每参考单夜量不再除。N0资源须责任与结转来源承接期间消解闭合证据，未归属未闭合仍不完整非默零。住客拒绝清洁不删除实际提供房夜。 | kg干布；真实合同原生单位作业记录 | 每实际事件批次及匹配计量期间 | 完整责任池期间与相关全生命周期 | 真实物业住宿池及每一共享消费者服务接口 | 每参考流 | 各原生操作数单位基准方法状态采样时间来源校准换算代表性不确定性覆盖责任 |
| cp_textiles | hotel_room_service | 客房可重复布草库存寿命实际退役 | 真实来源事件原生操作数账 | piece_count; piece_count_unit; piece_count_basis; piece_count_method; piece_count_state; piece_count_sample_time; piece_count_source; piece_count_conversion_factor; piece_count_conversion_unit; piece_count_conversion_source; units_per_parent; units_per_parent_unit; units_per_parent_basis; units_per_parent_method; units_per_parent_state; units_per_parent_sample_time; units_per_parent_source; units_per_parent_conversion_factor; units_per_parent_conversion_unit; units_per_parent_conversion_source; unit_mass; unit_mass_unit; unit_mass_basis; unit_mass_method; unit_mass_state; unit_mass_sample_time; unit_mass_source; unit_mass_conversion_factor; unit_mass_conversion_unit; unit_mass_conversion_source; gross_mass; gross_mass_unit; gross_mass_basis; gross_mass_method; gross_mass_state; gross_mass_sample_time; gross_mass_source; gross_mass_conversion_factor; gross_mass_conversion_unit; gross_mass_conversion_source; container_tare; container_tare_unit; container_tare_basis; container_tare_method; container_tare_state; container_tare_sample_time; container_tare_source; container_tare_conversion_factor; container_tare_conversion_unit; container_tare_conversion_source; net_asreceived_mass; net_asreceived_mass_unit; net_asreceived_mass_basis; net_asreceived_mass_method; net_asreceived_mass_state; net_asreceived_mass_sample_time; net_asreceived_mass_source; net_asreceived_mass_conversion_factor; net_asreceived_mass_conversion_unit; net_asreceived_mass_conversion_source; water_mass; water_mass_unit; water_mass_basis; water_mass_method; water_mass_state; water_mass_sample_time; water_mass_source; water_mass_conversion_factor; water_mass_conversion_unit; water_mass_conversion_source; wet_basis_water_fraction; wet_basis_water_fraction_unit; wet_basis_water_fraction_basis; wet_basis_water_fraction_method; wet_basis_water_fraction_state; wet_basis_water_fraction_sample_time; wet_basis_water_fraction_source; wet_basis_water_fraction_conversion_factor; wet_basis_water_fraction_conversion_unit; wet_basis_water_fraction_conversion_source; dry_basis_water_ratio; dry_basis_water_ratio_unit; dry_basis_water_ratio_basis; dry_basis_water_ratio_method; dry_basis_water_ratio_state; dry_basis_water_ratio_sample_time; dry_basis_water_ratio_source; dry_basis_water_ratio_conversion_factor; dry_basis_water_ratio_conversion_unit; dry_basis_water_ratio_conversion_source; dry_nonwater_mass; dry_nonwater_mass_unit; dry_nonwater_mass_basis; dry_nonwater_mass_method; dry_nonwater_mass_state; dry_nonwater_mass_sample_time; dry_nonwater_mass_source; dry_nonwater_mass_conversion_factor; dry_nonwater_mass_conversion_unit; dry_nonwater_mass_conversion_source; opening_clean; opening_clean_unit; opening_clean_basis; opening_clean_method; opening_clean_state; opening_clean_sample_time; opening_clean_source; opening_clean_conversion_factor; opening_clean_conversion_unit; opening_clean_conversion_source; opening_soiled; opening_soiled_unit; opening_soiled_basis; opening_soiled_method; opening_soiled_state; opening_soiled_sample_time; opening_soiled_source; opening_soiled_conversion_factor; opening_soiled_conversion_unit; opening_soiled_conversion_source; external_new_receipts; external_new_receipts_unit; external_new_receipts_basis; external_new_receipts_method; external_new_receipts_state; external_new_receipts_sample_time; external_new_receipts_source; external_new_receipts_conversion_factor; external_new_receipts_conversion_unit; external_new_receipts_conversion_source; returned_clean; returned_clean_unit; returned_clean_basis; returned_clean_method; returned_clean_state; returned_clean_sample_time; returned_clean_source; returned_clean_conversion_factor; returned_clean_conversion_unit; returned_clean_conversion_source; sent_soiled; sent_soiled_unit; sent_soiled_basis; sent_soiled_method; sent_soiled_state; sent_soiled_sample_time; sent_soiled_source; sent_soiled_conversion_factor; sent_soiled_conversion_unit; sent_soiled_conversion_source; inwash_quantity; inwash_quantity_unit; inwash_quantity_basis; inwash_quantity_method; inwash_quantity_state; inwash_quantity_sample_time; inwash_quantity_source; inwash_quantity_conversion_factor; inwash_quantity_conversion_unit; inwash_quantity_conversion_source; repair_quantity; repair_quantity_unit; repair_quantity_basis; repair_quantity_method; repair_quantity_state; repair_quantity_sample_time; repair_quantity_source; repair_quantity_conversion_factor; repair_quantity_conversion_unit; repair_quantity_conversion_source; retained_closing_quantity; retained_closing_quantity_unit; retained_closing_quantity_basis; retained_closing_quantity_method; retained_closing_quantity_state; retained_closing_quantity_sample_time; retained_closing_quantity_source; retained_closing_quantity_conversion_factor; retained_closing_quantity_conversion_unit; retained_closing_quantity_conversion_source; useful_external_exit; useful_external_exit_unit; useful_external_exit_basis; useful_external_exit_method; useful_external_exit_state; useful_external_exit_sample_time; useful_external_exit_source; useful_external_exit_conversion_factor; useful_external_exit_conversion_unit; useful_external_exit_conversion_source; waste_external_exit; waste_external_exit_unit; waste_external_exit_basis; waste_external_exit_method; waste_external_exit_state; waste_external_exit_sample_time; waste_external_exit_source; waste_external_exit_conversion_factor; waste_external_exit_conversion_unit; waste_external_exit_conversion_source; lost_quantity; lost_quantity_unit; lost_quantity_basis; lost_quantity_method; lost_quantity_state; lost_quantity_sample_time; lost_quantity_source; lost_quantity_conversion_factor; lost_quantity_conversion_unit; lost_quantity_conversion_source; target_lifetime_driver; target_lifetime_driver_unit; target_lifetime_driver_basis; target_lifetime_driver_method; target_lifetime_driver_state; target_lifetime_driver_sample_time; target_lifetime_driver_source; target_lifetime_driver_conversion_factor; target_lifetime_driver_conversion_unit; target_lifetime_driver_conversion_source; observed_alluser_driver; observed_alluser_driver_unit; observed_alluser_driver_basis; observed_alluser_driver_method; observed_alluser_driver_state; observed_alluser_driver_sample_time; observed_alluser_driver_source; observed_alluser_driver_conversion_factor; observed_alluser_driver_conversion_unit; observed_alluser_driver_conversion_source; remaining_alluser_driver; remaining_alluser_driver_unit; remaining_alluser_driver_basis; remaining_alluser_driver_method; remaining_alluser_driver_state; remaining_alluser_driver_sample_time; remaining_alluser_driver_source; remaining_alluser_driver_conversion_factor; remaining_alluser_driver_conversion_unit; remaining_alluser_driver_conversion_source; complete_lifetime_driver; complete_lifetime_driver_unit; complete_lifetime_driver_basis; complete_lifetime_driver_method; complete_lifetime_driver_state; complete_lifetime_driver_sample_time; complete_lifetime_driver_source; complete_lifetime_driver_conversion_factor; complete_lifetime_driver_conversion_unit; complete_lifetime_driver_conversion_source; retained_fluid_mass; retained_fluid_mass_unit; retained_fluid_mass_basis; retained_fluid_mass_method; retained_fluid_mass_state; retained_fluid_mass_sample_time; retained_fluid_mass_source; retained_fluid_mass_conversion_factor; retained_fluid_mass_conversion_unit; retained_fluid_mass_conversion_source; target_pool_driver; target_pool_driver_unit; target_pool_driver_basis; target_pool_driver_method; target_pool_driver_state; target_pool_driver_sample_time; target_pool_driver_source; target_pool_driver_conversion_factor; target_pool_driver_conversion_unit; target_pool_driver_conversion_source; complete_all_consumer_driver; complete_all_consumer_driver_unit; complete_all_consumer_driver_basis; complete_all_consumer_driver_method; complete_all_consumer_driver_state; complete_all_consumer_driver_sample_time; complete_all_consumer_driver_source; complete_all_consumer_driver_conversion_factor; complete_all_consumer_driver_conversion_unit; complete_all_consumer_driver_conversion_source; attribution_share; attribution_share_unit; attribution_share_basis; attribution_share_method; attribution_share_state; attribution_share_sample_time; attribution_share_source; attribution_share_conversion_factor; attribution_share_conversion_unit; attribution_share_conversion_source; same_scope_N; same_scope_N_unit; same_scope_N_basis; same_scope_N_method; same_scope_N_state; same_scope_N_sample_time; same_scope_N_source; same_scope_N_conversion_factor; same_scope_N_conversion_unit; same_scope_N_conversion_source; textile_id_or_cohort; textile_type_material_construction; BOM_composition_method; BOM_composition_source; EACH_or_TOTAL; actual_wash_use_definition; opening_closing_carry_link; laundry_transfer_id; rental_provider_lifecycle_coverage; piece_loss_decision_source; retirement_receiver_id; treatment_transport_coverage; moisture_definition; matching_nonwater_definition; sample_id; sample_representativeness; lifetime_driver_choice; replacement_termination_source; manufacture_dataset_scope; nonadditive_content_exclusion_ids; property_id; target_pool_id; target_room_type; responsibility_period_id; period_start; period_end; period_timezone; period_time_source; all_consumer_records; all_intended_output_records; consumer_id; output_handoff_id; output_handoff_source; competing_output_native_quantity_records; consumer_exclusivity_key; numerator_record_links; direct_assignment_evidence; allocation_method; allocation_source; raw_quantity_scope_id; already_per_reference; standby_idle_vacant_closed_duty_records; failed_cancelled_noshow_duty_records; carry_origin_scope; carry_receiving_scope; carry_quantity_link; carry_settlement_closure_source; coverage_owner; provider_overlap_exclusion; uncertainty; sensitivity; update_source | 核唯一件集合净污在洗维修期末外部新可用废损决策，内部转移一次抵消，不全部洗回作新收。EACH实际数一次或TOTAL；水湿比w_wet=水/收到态，干比w_dry=水/匹配非水，仅同实际样本定义原生百分比换算后w_wet=w_dry/(1+w_dry)；dry_nonwater=asreceived*(1-w_wet)，非自动纯棉。未知件质差非自动丢失废弃。各真实建筑装修设备布草全生命周期当量=目标责任池驱动/正数完整全部用户期间寿命驱动，各独立原生单位基准方法状态时间来源换算。完整分母为实测历史加有据兼容剩余使用或真实终止总量，含翻修更换终结。采用容量日历时间驱动须把待机空置停用份额也分配真实供给池：目标期间分子含归属待客容量时间，不以仅入住时间对含空置寿命分母。服务周期寿命驱动需真实完成有据未来周期并闭合完整负担，不可用容量作分母。各期间消费者份额加有据剩余责任穷尽资产负担，不因产权转移重复。原始期间负担归目标池再除同池实际N一次；服务租赁完整资产覆盖制造维护运输终结仅替代匹配直接阶段。不固定资产布草寿命。 先按真实物业房型服务包责任期间定义完整住宿供给池，再选择入住记录。池总资源包含必要空置准备待机失败取消未到及归属停用维护职责，不仅入住事件电表。优先直接追溯或兼容目标池物理驱动/正数完整全部消费者驱动，归属其他房型独立服务；各预期输出具原生量单位基准方法状态时间来源交接互斥成员。仅有据其他输出用户职责移出本池。完整归属原始量除同池正实际N一次；已每参考单夜量不再除。N0资源须责任与结转来源承接期间消解闭合证据，未归属未闭合仍不完整非默零。住客拒绝清洁不删除实际提供房夜。 | Item(s)；真实布质量水周期原生单位 | 每实际事件批次及匹配计量期间 | 完整责任池期间与相关全生命周期 | 真实物业住宿池及每一共享消费者服务接口 | 每参考流 | 各原生操作数单位基准方法状态采样时间来源校准换算代表性不确定性覆盖责任 |
| cp_assets | hotel_room_service | 建筑装修家具设备完整生命周期终结责任 | 真实来源事件原生操作数账 | asset_equivalent; asset_equivalent_unit; asset_equivalent_basis; asset_equivalent_method; asset_equivalent_state; asset_equivalent_sample_time; asset_equivalent_source; asset_equivalent_conversion_factor; asset_equivalent_conversion_unit; asset_equivalent_conversion_source; full_life_burden; full_life_burden_unit; full_life_burden_basis; full_life_burden_method; full_life_burden_state; full_life_burden_sample_time; full_life_burden_source; full_life_burden_conversion_factor; full_life_burden_conversion_unit; full_life_burden_conversion_source; target_lifetime_driver; target_lifetime_driver_unit; target_lifetime_driver_basis; target_lifetime_driver_method; target_lifetime_driver_state; target_lifetime_driver_sample_time; target_lifetime_driver_source; target_lifetime_driver_conversion_factor; target_lifetime_driver_conversion_unit; target_lifetime_driver_conversion_source; target_period_capacity_driver; target_period_capacity_driver_unit; target_period_capacity_driver_basis; target_period_capacity_driver_method; target_period_capacity_driver_state; target_period_capacity_driver_sample_time; target_period_capacity_driver_source; target_period_capacity_driver_conversion_factor; target_period_capacity_driver_conversion_unit; target_period_capacity_driver_conversion_source; observed_alluser_driver; observed_alluser_driver_unit; observed_alluser_driver_basis; observed_alluser_driver_method; observed_alluser_driver_state; observed_alluser_driver_sample_time; observed_alluser_driver_source; observed_alluser_driver_conversion_factor; observed_alluser_driver_conversion_unit; observed_alluser_driver_conversion_source; remaining_alluser_driver; remaining_alluser_driver_unit; remaining_alluser_driver_basis; remaining_alluser_driver_method; remaining_alluser_driver_state; remaining_alluser_driver_sample_time; remaining_alluser_driver_source; remaining_alluser_driver_conversion_factor; remaining_alluser_driver_conversion_unit; remaining_alluser_driver_conversion_source; complete_lifetime_driver; complete_lifetime_driver_unit; complete_lifetime_driver_basis; complete_lifetime_driver_method; complete_lifetime_driver_state; complete_lifetime_driver_sample_time; complete_lifetime_driver_source; complete_lifetime_driver_conversion_factor; complete_lifetime_driver_conversion_unit; complete_lifetime_driver_conversion_source; attributed_idle_capacity_driver; attributed_idle_capacity_driver_unit; attributed_idle_capacity_driver_basis; attributed_idle_capacity_driver_method; attributed_idle_capacity_driver_state; attributed_idle_capacity_driver_sample_time; attributed_idle_capacity_driver_source; attributed_idle_capacity_driver_conversion_factor; attributed_idle_capacity_driver_conversion_unit; attributed_idle_capacity_driver_conversion_source; actual_asset_count; actual_asset_count_unit; actual_asset_count_basis; actual_asset_count_method; actual_asset_count_state; actual_asset_count_sample_time; actual_asset_count_source; actual_asset_count_conversion_factor; actual_asset_count_conversion_unit; actual_asset_count_conversion_source; gross_EOL_mass; gross_EOL_mass_unit; gross_EOL_mass_basis; gross_EOL_mass_method; gross_EOL_mass_state; gross_EOL_mass_sample_time; gross_EOL_mass_source; gross_EOL_mass_conversion_factor; gross_EOL_mass_conversion_unit; gross_EOL_mass_conversion_source; noncargo_container_tare; noncargo_container_tare_unit; noncargo_container_tare_basis; noncargo_container_tare_method; noncargo_container_tare_state; noncargo_container_tare_sample_time; noncargo_container_tare_source; noncargo_container_tare_conversion_factor; noncargo_container_tare_conversion_unit; noncargo_container_tare_conversion_source; net_EOL_mass; net_EOL_mass_unit; net_EOL_mass_basis; net_EOL_mass_method; net_EOL_mass_state; net_EOL_mass_sample_time; net_EOL_mass_source; net_EOL_mass_conversion_factor; net_EOL_mass_conversion_unit; net_EOL_mass_conversion_source; retained_component_mass; retained_component_mass_unit; retained_component_mass_basis; retained_component_mass_method; retained_component_mass_state; retained_component_mass_sample_time; retained_component_mass_source; retained_component_mass_conversion_factor; retained_component_mass_conversion_unit; retained_component_mass_conversion_source; target_pool_driver; target_pool_driver_unit; target_pool_driver_basis; target_pool_driver_method; target_pool_driver_state; target_pool_driver_sample_time; target_pool_driver_source; target_pool_driver_conversion_factor; target_pool_driver_conversion_unit; target_pool_driver_conversion_source; complete_all_consumer_driver; complete_all_consumer_driver_unit; complete_all_consumer_driver_basis; complete_all_consumer_driver_method; complete_all_consumer_driver_state; complete_all_consumer_driver_sample_time; complete_all_consumer_driver_source; complete_all_consumer_driver_conversion_factor; complete_all_consumer_driver_conversion_unit; complete_all_consumer_driver_conversion_source; attribution_share; attribution_share_unit; attribution_share_basis; attribution_share_method; attribution_share_state; attribution_share_sample_time; attribution_share_source; attribution_share_conversion_factor; attribution_share_conversion_unit; attribution_share_conversion_source; same_scope_N; same_scope_N_unit; same_scope_N_basis; same_scope_N_method; same_scope_N_state; same_scope_N_sample_time; same_scope_N_source; same_scope_N_conversion_factor; same_scope_N_conversion_unit; same_scope_N_conversion_source; asset_id; building_sitework_fitout_FFE_equipment_scope; actual_BOM; dataset_manufacture_installation_coverage; maintenance_cleaning_replacement_records; renovation_component_replaces_link; all_period_consumer_records; lifetime_driver_definition; capacity_calendar_idle_closure; observed_history_source; remaining_use_evidence; termination_source; ownership_transfer_exclusion; rental_provider_asset_coverage; charge_production_supplement_link; receiver_id; EOL_transport_treatment_coverage; retained_charge_oil_battery_content_links; whole_part_exclusion_ids; property_id; target_pool_id; target_room_type; responsibility_period_id; period_start; period_end; period_timezone; period_time_source; all_consumer_records; all_intended_output_records; consumer_id; output_handoff_id; output_handoff_source; competing_output_native_quantity_records; consumer_exclusivity_key; numerator_record_links; direct_assignment_evidence; allocation_method; allocation_source; raw_quantity_scope_id; already_per_reference; standby_idle_vacant_closed_duty_records; failed_cancelled_noshow_duty_records; carry_origin_scope; carry_receiving_scope; carry_quantity_link; carry_settlement_closure_source; coverage_owner; provider_overlap_exclusion; uncertainty; sensitivity; update_source | 各真实建筑装修设备布草全生命周期当量=目标责任池驱动/正数完整全部用户期间寿命驱动，各独立原生单位基准方法状态时间来源换算。完整分母为实测历史加有据兼容剩余使用或真实终止总量，含翻修更换终结。采用容量日历时间驱动须把待机空置停用份额也分配真实供给池：目标期间分子含归属待客容量时间，不以仅入住时间对含空置寿命分母。服务周期寿命驱动需真实完成有据未来周期并闭合完整负担，不可用容量作分母。各期间消费者份额加有据剩余责任穷尽资产负担，不因产权转移重复。原始期间负担归目标池再除同池实际N一次；服务租赁完整资产覆盖制造维护运输终结仅替代匹配直接阶段。不固定资产布草寿命。 实际退役输出可追溯，完整资产服务生命周期已含终结时，同废单不第二接收处理。回收旧部更换组分需互斥载体来源责任，不自动回收抵扣。 先按真实物业房型服务包责任期间定义完整住宿供给池，再选择入住记录。池总资源包含必要空置准备待机失败取消未到及归属停用维护职责，不仅入住事件电表。优先直接追溯或兼容目标池物理驱动/正数完整全部消费者驱动，归属其他房型独立服务；各预期输出具原生量单位基准方法状态时间来源交接互斥成员。仅有据其他输出用户职责移出本池。完整归属原始量除同池正实际N一次；已每参考单夜量不再除。N0资源须责任与结转来源承接期间消解闭合证据，未归属未闭合仍不完整非默零。住客拒绝清洁不删除实际提供房夜。 | Item(s)；真实寿命当量驱动质量单位 | 每实际事件批次及匹配计量期间 | 完整责任池期间与相关全生命周期 | 真实物业住宿池及每一共享消费者服务接口 | 每参考流 | 各原生操作数单位基准方法状态采样时间来源校准换算代表性不确定性覆盖责任 |
| cp_providers | hotel_room_service | 真实完成清洁维护响应成果 | 真实来源事件原生操作数账 | completed_native_result; completed_native_result_unit; completed_native_result_basis; completed_native_result_method; completed_native_result_state; completed_native_result_sample_time; completed_native_result_source; completed_native_result_conversion_factor; completed_native_result_conversion_unit; completed_native_result_conversion_source; provider_target_driver; provider_target_driver_unit; provider_target_driver_basis; provider_target_driver_method; provider_target_driver_state; provider_target_driver_sample_time; provider_target_driver_source; provider_target_driver_conversion_factor; provider_target_driver_conversion_unit; provider_target_driver_conversion_source; provider_all_consumer_driver; provider_all_consumer_driver_unit; provider_all_consumer_driver_basis; provider_all_consumer_driver_method; provider_all_consumer_driver_state; provider_all_consumer_driver_sample_time; provider_all_consumer_driver_source; provider_all_consumer_driver_conversion_factor; provider_all_consumer_driver_conversion_unit; provider_all_consumer_driver_conversion_source; target_pool_driver; target_pool_driver_unit; target_pool_driver_basis; target_pool_driver_method; target_pool_driver_state; target_pool_driver_sample_time; target_pool_driver_source; target_pool_driver_conversion_factor; target_pool_driver_conversion_unit; target_pool_driver_conversion_source; complete_all_consumer_driver; complete_all_consumer_driver_unit; complete_all_consumer_driver_basis; complete_all_consumer_driver_method; complete_all_consumer_driver_state; complete_all_consumer_driver_sample_time; complete_all_consumer_driver_source; complete_all_consumer_driver_conversion_factor; complete_all_consumer_driver_conversion_unit; complete_all_consumer_driver_conversion_source; attribution_share; attribution_share_unit; attribution_share_basis; attribution_share_method; attribution_share_state; attribution_share_sample_time; attribution_share_source; attribution_share_conversion_factor; attribution_share_conversion_unit; attribution_share_conversion_source; same_scope_N; same_scope_N_unit; same_scope_N_basis; same_scope_N_method; same_scope_N_state; same_scope_N_sample_time; same_scope_N_source; same_scope_N_conversion_factor; same_scope_N_conversion_unit; same_scope_N_conversion_source; provider_id; job_id; actual_operation; completion_record; completion_time_timezone_source; native_property_unit; material_energy_water_coverage; full_asset_life_coverage; maintenance_replacement_EOL_coverage; transport_empty_coverage; waste_receiver_treatment_coverage; covered_direct_row_ids; uncovered_duty_links; laundry_dedicated_record_exclusion; property_id; target_pool_id; target_room_type; responsibility_period_id; period_start; period_end; period_timezone; period_time_source; all_consumer_records; all_intended_output_records; consumer_id; output_handoff_id; output_handoff_source; competing_output_native_quantity_records; consumer_exclusivity_key; numerator_record_links; direct_assignment_evidence; allocation_method; allocation_source; raw_quantity_scope_id; already_per_reference; standby_idle_vacant_closed_duty_records; failed_cancelled_noshow_duty_records; carry_origin_scope; carry_receiving_scope; carry_quantity_link; carry_settlement_closure_source; coverage_owner; provider_overlap_exclusion; uncertainty; sensitivity; update_source | 用真实完成物理成果原生单位，不默认薪酬发票房夜。记完整用品资源水能源资产寿命废物承运门槛及已覆盖直接行互斥替代；部分服务明确补实际未覆盖，洗衣批专用服务不第二一般作业。 先按真实物业房型服务包责任期间定义完整住宿供给池，再选择入住记录。池总资源包含必要空置准备待机失败取消未到及归属停用维护职责，不仅入住事件电表。优先直接追溯或兼容目标池物理驱动/正数完整全部消费者驱动，归属其他房型独立服务；各预期输出具原生量单位基准方法状态时间来源交接互斥成员。仅有据其他输出用户职责移出本池。完整归属原始量除同池正实际N一次；已每参考单夜量不再除。N0资源须责任与结转来源承接期间消解闭合证据，未归属未闭合仍不完整非默零。住客拒绝清洁不删除实际提供房夜。 | Item(s)；真实服务原生单位 | 每实际事件批次及匹配计量期间 | 完整责任池期间与相关全生命周期 | 真实物业住宿池及每一共享消费者服务接口 | 每参考流 | 各原生操作数单位基准方法状态采样时间来源校准换算代表性不确定性覆盖责任 |
| cp_freight | hotel_room_service | 唯一真实用品布草资产废物货载路段 | 真实来源事件原生操作数账 | repeat_count; repeat_count_unit; repeat_count_basis; repeat_count_method; repeat_count_state; repeat_count_sample_time; repeat_count_source; repeat_count_conversion_factor; repeat_count_conversion_unit; repeat_count_conversion_source; gross_load; gross_load_unit; gross_load_basis; gross_load_method; gross_load_state; gross_load_sample_time; gross_load_source; gross_load_conversion_factor; gross_load_conversion_unit; gross_load_conversion_source; noncargo_tare; noncargo_tare_unit; noncargo_tare_basis; noncargo_tare_method; noncargo_tare_state; noncargo_tare_sample_time; noncargo_tare_source; noncargo_tare_conversion_factor; noncargo_tare_conversion_unit; noncargo_tare_conversion_source; direct_payload; direct_payload_unit; direct_payload_basis; direct_payload_method; direct_payload_state; direct_payload_sample_time; direct_payload_source; direct_payload_conversion_factor; direct_payload_conversion_unit; direct_payload_conversion_source; distance; distance_unit; distance_basis; distance_method; distance_state; distance_sample_time; distance_source; distance_conversion_factor; distance_conversion_unit; distance_conversion_source; record_target_driver; record_target_driver_unit; record_target_driver_basis; record_target_driver_method; record_target_driver_state; record_target_driver_sample_time; record_target_driver_source; record_target_driver_conversion_factor; record_target_driver_conversion_unit; record_target_driver_conversion_source; record_all_consumer_driver; record_all_consumer_driver_unit; record_all_consumer_driver_basis; record_all_consumer_driver_method; record_all_consumer_driver_state; record_all_consumer_driver_sample_time; record_all_consumer_driver_source; record_all_consumer_driver_conversion_factor; record_all_consumer_driver_conversion_unit; record_all_consumer_driver_conversion_source; record_share; record_share_unit; record_share_basis; record_share_method; record_share_state; record_share_sample_time; record_share_source; record_share_conversion_factor; record_share_conversion_unit; record_share_conversion_source; target_pool_driver; target_pool_driver_unit; target_pool_driver_basis; target_pool_driver_method; target_pool_driver_state; target_pool_driver_sample_time; target_pool_driver_source; target_pool_driver_conversion_factor; target_pool_driver_conversion_unit; target_pool_driver_conversion_source; complete_all_consumer_driver; complete_all_consumer_driver_unit; complete_all_consumer_driver_basis; complete_all_consumer_driver_method; complete_all_consumer_driver_state; complete_all_consumer_driver_sample_time; complete_all_consumer_driver_source; complete_all_consumer_driver_conversion_factor; complete_all_consumer_driver_conversion_unit; complete_all_consumer_driver_conversion_source; attribution_share; attribution_share_unit; attribution_share_basis; attribution_share_method; attribution_share_state; attribution_share_sample_time; attribution_share_source; attribution_share_conversion_factor; attribution_share_conversion_unit; attribution_share_conversion_source; same_scope_N; same_scope_N_unit; same_scope_N_basis; same_scope_N_method; same_scope_N_state; same_scope_N_sample_time; same_scope_N_source; same_scope_N_conversion_factor; same_scope_N_conversion_unit; same_scope_N_conversion_source; load_id; leg_id; unique_load_leg_key; EACH_or_TOTAL; load_source_scope; ascarried_wet_dry_state; actual_cargo_pack_support; tare_role_source; origin_destination; carrier_id; empty_leg_coverage; provider_upstream_covered_leg_exclusion; share_derivation_source; property_id; target_pool_id; target_room_type; responsibility_period_id; period_start; period_end; period_timezone; period_time_source; all_consumer_records; all_intended_output_records; consumer_id; output_handoff_id; output_handoff_source; competing_output_native_quantity_records; consumer_exclusivity_key; numerator_record_links; direct_assignment_evidence; allocation_method; allocation_source; raw_quantity_scope_id; already_per_reference; standby_idle_vacant_closed_duty_records; failed_cancelled_noshow_duty_records; carry_origin_scope; carry_receiving_scope; carry_quantity_link; carry_settlement_closure_source; coverage_owner; provider_overlap_exclusion; uncertainty; sensitivity; update_source | 货运=唯一货载路段求和[(真实换算直接载荷或兼容毛-非货物皮)*(仅EACH真实有据次数TOTAL不变)*真实换算距离*该记录物理因果份额]/同池正N。毛皮载荷次数距离份额各六元数据换算；载荷保湿布水包装支撑，只扣车辆及非货物皮重，不扣随货包装容器及支承。份额在求和项内N一次，已归目标不再乘；服务收返空程互斥。 先按真实物业房型服务包责任期间定义完整住宿供给池，再选择入住记录。池总资源包含必要空置准备待机失败取消未到及归属停用维护职责，不仅入住事件电表。优先直接追溯或兼容目标池物理驱动/正数完整全部消费者驱动，归属其他房型独立服务；各预期输出具原生量单位基准方法状态时间来源交接互斥成员。仅有据其他输出用户职责移出本池。完整归属原始量除同池正实际N一次；已每参考单夜量不再除。N0资源须责任与结转来源承接期间消解闭合证据，未归属未闭合仍不完整非默零。住客拒绝清洁不删除实际提供房夜。 | kg*km；真实原生载荷距离次数单位 | 每实际事件批次及匹配计量期间 | 完整责任池期间与相关全生命周期 | 真实物业住宿池及每一共享消费者服务接口 | 每参考流 | 各原生操作数单位基准方法状态采样时间来源校准换算代表性不确定性覆盖责任 |
| cp_refrigerant | hotel_room_service | 真实初充来源独立供应回收去向 | 真实来源事件原生操作数账 | opening_circuit; opening_circuit_unit; opening_circuit_basis; opening_circuit_method; opening_circuit_state; opening_circuit_sample_time; opening_circuit_source; opening_circuit_conversion_factor; opening_circuit_conversion_unit; opening_circuit_conversion_source; opening_stored; opening_stored_unit; opening_stored_basis; opening_stored_method; opening_stored_state; opening_stored_sample_time; opening_stored_source; opening_stored_conversion_factor; opening_stored_conversion_unit; opening_stored_conversion_source; net_external_receipts; net_external_receipts_unit; net_external_receipts_basis; net_external_receipts_method; net_external_receipts_state; net_external_receipts_sample_time; net_external_receipts_source; net_external_receipts_conversion_factor; net_external_receipts_conversion_unit; net_external_receipts_conversion_source; receipt_gross; receipt_gross_unit; receipt_gross_basis; receipt_gross_method; receipt_gross_state; receipt_gross_sample_time; receipt_gross_source; receipt_gross_conversion_factor; receipt_gross_conversion_unit; receipt_gross_conversion_source; cylinder_tare; cylinder_tare_unit; cylinder_tare_basis; cylinder_tare_method; cylinder_tare_state; cylinder_tare_sample_time; cylinder_tare_source; cylinder_tare_conversion_factor; cylinder_tare_conversion_unit; cylinder_tare_conversion_source; new_factory_entry_charge; new_factory_entry_charge_unit; new_factory_entry_charge_basis; new_factory_entry_charge_method; new_factory_entry_charge_state; new_factory_entry_charge_sample_time; new_factory_entry_charge_source; new_factory_entry_charge_conversion_factor; new_factory_entry_charge_conversion_unit; new_factory_entry_charge_conversion_source; closing_circuit; closing_circuit_unit; closing_circuit_basis; closing_circuit_method; closing_circuit_state; closing_circuit_sample_time; closing_circuit_source; closing_circuit_conversion_factor; closing_circuit_conversion_unit; closing_circuit_conversion_source; closing_stored; closing_stored_unit; closing_stored_basis; closing_stored_method; closing_stored_state; closing_stored_sample_time; closing_stored_source; closing_stored_conversion_factor; closing_stored_conversion_unit; closing_stored_conversion_source; opening_unused; opening_unused_unit; opening_unused_basis; opening_unused_method; opening_unused_state; opening_unused_sample_time; opening_unused_source; opening_unused_conversion_factor; opening_unused_conversion_unit; opening_unused_conversion_source; closing_unused; closing_unused_unit; closing_unused_basis; closing_unused_method; closing_unused_state; closing_unused_sample_time; closing_unused_source; closing_unused_conversion_factor; closing_unused_conversion_unit; closing_unused_conversion_source; matched_unused_return; matched_unused_return_unit; matched_unused_return_basis; matched_unused_return_method; matched_unused_return_state; matched_unused_return_sample_time; matched_unused_return_source; matched_unused_return_conversion_factor; matched_unused_return_conversion_unit; matched_unused_return_conversion_source; useful_recovered_export; useful_recovered_export_unit; useful_recovered_export_basis; useful_recovered_export_method; useful_recovered_export_state; useful_recovered_export_sample_time; useful_recovered_export_source; useful_recovered_export_conversion_factor; useful_recovered_export_conversion_unit; useful_recovered_export_conversion_source; independent_fluid_waste; independent_fluid_waste_unit; independent_fluid_waste_basis; independent_fluid_waste_method; independent_fluid_waste_state; independent_fluid_waste_sample_time; independent_fluid_waste_source; independent_fluid_waste_conversion_factor; independent_fluid_waste_conversion_unit; independent_fluid_waste_conversion_source; retained_in_equipment_EOL; retained_in_equipment_EOL_unit; retained_in_equipment_EOL_basis; retained_in_equipment_EOL_method; retained_in_equipment_EOL_state; retained_in_equipment_EOL_sample_time; retained_in_equipment_EOL_source; retained_in_equipment_EOL_conversion_factor; retained_in_equipment_EOL_conversion_unit; retained_in_equipment_EOL_conversion_source; retained_in_incident_carrier; retained_in_incident_carrier_unit; retained_in_incident_carrier_basis; retained_in_incident_carrier_method; retained_in_incident_carrier_state; retained_in_incident_carrier_sample_time; retained_in_incident_carrier_source; retained_in_incident_carrier_conversion_factor; retained_in_incident_carrier_conversion_unit; retained_in_incident_carrier_conversion_source; actual_direct_release; actual_direct_release_unit; actual_direct_release_basis; actual_direct_release_method; actual_direct_release_state; actual_direct_release_sample_time; actual_direct_release_source; actual_direct_release_conversion_factor; actual_direct_release_conversion_unit; actual_direct_release_conversion_source; unknown_discrepancy; unknown_discrepancy_unit; unknown_discrepancy_basis; unknown_discrepancy_method; unknown_discrepancy_state; unknown_discrepancy_sample_time; unknown_discrepancy_source; unknown_discrepancy_conversion_factor; unknown_discrepancy_conversion_unit; unknown_discrepancy_conversion_source; component_fraction; component_fraction_unit; component_fraction_basis; component_fraction_method; component_fraction_state; component_fraction_sample_time; component_fraction_source; component_fraction_conversion_factor; component_fraction_conversion_unit; component_fraction_conversion_source; fate_fraction; fate_fraction_unit; fate_fraction_basis; fate_fraction_method; fate_fraction_state; fate_fraction_sample_time; fate_fraction_source; fate_fraction_conversion_factor; fate_fraction_conversion_unit; fate_fraction_conversion_source; target_pool_driver; target_pool_driver_unit; target_pool_driver_basis; target_pool_driver_method; target_pool_driver_state; target_pool_driver_sample_time; target_pool_driver_source; target_pool_driver_conversion_factor; target_pool_driver_conversion_unit; target_pool_driver_conversion_source; complete_all_consumer_driver; complete_all_consumer_driver_unit; complete_all_consumer_driver_basis; complete_all_consumer_driver_method; complete_all_consumer_driver_state; complete_all_consumer_driver_sample_time; complete_all_consumer_driver_source; complete_all_consumer_driver_conversion_factor; complete_all_consumer_driver_conversion_unit; complete_all_consumer_driver_conversion_source; attribution_share; attribution_share_unit; attribution_share_basis; attribution_share_method; attribution_share_state; attribution_share_sample_time; attribution_share_source; attribution_share_conversion_factor; attribution_share_conversion_unit; attribution_share_conversion_source; same_scope_N; same_scope_N_unit; same_scope_N_basis; same_scope_N_method; same_scope_N_state; same_scope_N_sample_time; same_scope_N_source; same_scope_N_conversion_factor; same_scope_N_conversion_unit; same_scope_N_conversion_source; equipment_id; circuit_id; fluid_blend_identity; component_species_identity; composition_method; composition_source; fate_basis; fate_source; assetcharge_source_id; assetcharge_production_owner; factory_entry_opening_exclusion; standalone_supply_scope_id; source_matched_unused_substock_evidence; internal_charge_recovery_transfer_ids; stock_convention; receiver_id; useful_acceptance_source; waste_receiver_transport_treatment_scope; asset_provider_charge_EOL_coverage; contained_whole_mixed_content_exclusion; measurement_or_factor_release_link; property_id; target_pool_id; target_room_type; responsibility_period_id; period_start; period_end; period_timezone; period_time_source; all_consumer_records; all_intended_output_records; consumer_id; output_handoff_id; output_handoff_source; competing_output_native_quantity_records; consumer_exclusivity_key; numerator_record_links; direct_assignment_evidence; allocation_method; allocation_source; raw_quantity_scope_id; already_per_reference; standby_idle_vacant_closed_duty_records; failed_cancelled_noshow_duty_records; carry_origin_scope; carry_receiving_scope; carry_quantity_link; carry_settlement_closure_source; coverage_owner; provider_overlap_exclusion; uncertainty; sensitivity; update_source | 工质物理账：期初回路+期初存储+净外收+新进出厂充注（仅未含期初时）=期末回路+期末存储+未用外退+可用回收外送+独立容纳Waste+设备终结事故载体持留内含+独立有据直接释放+明确未知。内部充回ID抵消，期初新进互斥。出厂初充生产归资产数据或明确资产补齐一次。仅来源匹配未用独立子库S_supply=期初未用+净外收-期末未用可耗用法扣自身匹配未用退回且省输出。已用出厂初充回收非未用供应或无关补充抵扣，不负输入。资产混废持留内含非叠加，实际独立可用废物转移处理各门槛不自动抵扣。 先按真实物业房型服务包责任期间定义完整住宿供给池，再选择入住记录。池总资源包含必要空置准备待机失败取消未到及归属停用维护职责，不仅入住事件电表。优先直接追溯或兼容目标池物理驱动/正数完整全部消费者驱动，归属其他房型独立服务；各预期输出具原生量单位基准方法状态时间来源交接互斥成员。仅有据其他输出用户职责移出本池。完整归属原始量除同池正实际N一次；已每参考单夜量不再除。N0资源须责任与结转来源承接期间消解闭合证据，未归属未闭合仍不完整非默零。住客拒绝清洁不删除实际提供房夜。 | kg；真实原生组分去向单位 | 每实际事件批次及匹配计量期间 | 完整责任池期间与相关全生命周期 | 真实物业住宿池及每一共享消费者服务接口 | 每参考流 | 各原生操作数单位基准方法状态采样时间来源校准换算代表性不确定性覆盖责任 |
| cp_fates | hotel_room_service | 真实独立可用废物混合容纳材料流 | 真实来源事件原生操作数账 | actual_count; actual_count_unit; actual_count_basis; actual_count_method; actual_count_state; actual_count_sample_time; actual_count_source; actual_count_conversion_factor; actual_count_conversion_unit; actual_count_conversion_source; gross_mass; gross_mass_unit; gross_mass_basis; gross_mass_method; gross_mass_state; gross_mass_sample_time; gross_mass_source; gross_mass_conversion_factor; gross_mass_conversion_unit; gross_mass_conversion_source; container_tare; container_tare_unit; container_tare_basis; container_tare_method; container_tare_state; container_tare_sample_time; container_tare_source; container_tare_conversion_factor; container_tare_conversion_unit; container_tare_conversion_source; net_stream_mass; net_stream_mass_unit; net_stream_mass_basis; net_stream_mass_method; net_stream_mass_state; net_stream_mass_sample_time; net_stream_mass_source; net_stream_mass_conversion_factor; net_stream_mass_conversion_unit; net_stream_mass_conversion_source; dry_cleanup_carrier; dry_cleanup_carrier_unit; dry_cleanup_carrier_basis; dry_cleanup_carrier_method; dry_cleanup_carrier_state; dry_cleanup_carrier_sample_time; dry_cleanup_carrier_source; dry_cleanup_carrier_conversion_factor; dry_cleanup_carrier_conversion_unit; dry_cleanup_carrier_conversion_source; retained_fluid; retained_fluid_unit; retained_fluid_basis; retained_fluid_method; retained_fluid_state; retained_fluid_sample_time; retained_fluid_source; retained_fluid_conversion_factor; retained_fluid_conversion_unit; retained_fluid_conversion_source; retained_material; retained_material_unit; retained_material_basis; retained_material_method; retained_material_state; retained_material_sample_time; retained_material_source; retained_material_conversion_factor; retained_material_conversion_unit; retained_material_conversion_source; retained_pack; retained_pack_unit; retained_pack_basis; retained_pack_method; retained_pack_state; retained_pack_sample_time; retained_pack_source; retained_pack_conversion_factor; retained_pack_conversion_unit; retained_pack_conversion_source; source_component_fraction; source_component_fraction_unit; source_component_fraction_basis; source_component_fraction_method; source_component_fraction_state; source_component_fraction_sample_time; source_component_fraction_source; source_component_fraction_conversion_factor; source_component_fraction_conversion_unit; source_component_fraction_conversion_source; density; density_unit; density_basis; density_method; density_state; density_sample_time; density_source; density_conversion_factor; density_conversion_unit; density_conversion_source; temperature; temperature_unit; temperature_basis; temperature_method; temperature_state; temperature_sample_time; temperature_source; temperature_conversion_factor; temperature_conversion_unit; temperature_conversion_source; actual_independent_transfer; actual_independent_transfer_unit; actual_independent_transfer_basis; actual_independent_transfer_method; actual_independent_transfer_state; actual_independent_transfer_sample_time; actual_independent_transfer_source; actual_independent_transfer_conversion_factor; actual_independent_transfer_conversion_unit; actual_independent_transfer_conversion_source; target_pool_driver; target_pool_driver_unit; target_pool_driver_basis; target_pool_driver_method; target_pool_driver_state; target_pool_driver_sample_time; target_pool_driver_source; target_pool_driver_conversion_factor; target_pool_driver_conversion_unit; target_pool_driver_conversion_source; complete_all_consumer_driver; complete_all_consumer_driver_unit; complete_all_consumer_driver_basis; complete_all_consumer_driver_method; complete_all_consumer_driver_state; complete_all_consumer_driver_sample_time; complete_all_consumer_driver_source; complete_all_consumer_driver_conversion_factor; complete_all_consumer_driver_conversion_unit; complete_all_consumer_driver_conversion_source; attribution_share; attribution_share_unit; attribution_share_basis; attribution_share_method; attribution_share_state; attribution_share_sample_time; attribution_share_source; attribution_share_conversion_factor; attribution_share_conversion_unit; attribution_share_conversion_source; same_scope_N; same_scope_N_unit; same_scope_N_basis; same_scope_N_method; same_scope_N_state; same_scope_N_sample_time; same_scope_N_source; same_scope_N_conversion_factor; same_scope_N_conversion_unit; same_scope_N_conversion_source; event_id; source_operation; guest_brought_or_operator_supplied_origin; collection_responsibility_source; source_supply_asset_textile_link; material_identity; actual_physical_mixture_definition; composition_basis; composition_method; composition_source; sample_id; sample_representativeness; decision_source; Product_or_Waste_status; receiver_id; useful_receiver_acceptance; receiver_treatment_transport_scope; provider_asset_lifecycle_coverage; whole_part_mixed_content_exclusion_ids; nonadditive_component_view; property_id; target_pool_id; target_room_type; responsibility_period_id; period_start; period_end; period_timezone; period_time_source; all_consumer_records; all_intended_output_records; consumer_id; output_handoff_id; output_handoff_source; competing_output_native_quantity_records; consumer_exclusivity_key; numerator_record_links; direct_assignment_evidence; allocation_method; allocation_source; raw_quantity_scope_id; already_per_reference; standby_idle_vacant_closed_duty_records; failed_cancelled_noshow_duty_records; carry_origin_scope; carry_receiving_scope; carry_quantity_link; carry_settlement_closure_source; coverage_owner; provider_overlap_exclusion; uncertainty; sensitivity; update_source; flow_row_id; actual_identity_case; actual_substance_or_material; actual_origin_and_medium; actual_state_and_gate; case_activation_evidence; typed_or_residual_quantity; quantity_exclusion_links; whole_total_reconciliation; unresolved_occurrence_not_zero | 按真实身份原生属性状态接收分别记录实际物理不同流，不无关废物假混。真实混合载体为一流，干载体液材料包装非叠加审计，独立外送排留存内容。各操作数质件比例密度温度计量换算有源。归属时包含住宿住客来源固废收集接收处理职责，不将客自带物品生产导入住宿用品。可用验收废物处理分开不自动回收抵扣；已含服务资产终结处理不再计。 先按真实物业房型服务包责任期间定义完整住宿供给池，再选择入住记录。池总资源包含必要空置准备待机失败取消未到及归属停用维护职责，不仅入住事件电表。优先直接追溯或兼容目标池物理驱动/正数完整全部消费者驱动，归属其他房型独立服务；各预期输出具原生量单位基准方法状态时间来源交接互斥成员。仅有据其他输出用户职责移出本池。完整归属原始量除同池正实际N一次；已每参考单夜量不再除。N0资源须责任与结转来源承接期间消解闭合证据，未归属未闭合仍不完整非默零。住客拒绝清洁不删除实际提供房夜。 | kg；真实件比例密度状态原生单位 | 每实际事件批次及匹配计量期间 | 完整责任池期间与相关全生命周期 | 真实物业住宿池及每一共享消费者服务接口 | 每参考流 | 各原生操作数单位基准方法状态采样时间来源校准换算代表性不确定性覆盖责任 |
| cp_releases | hotel_room_service | 真实具名物种介质兼容直接释放证据 | 真实来源事件原生操作数账 | measured_species_mass; measured_species_mass_unit; measured_species_mass_basis; measured_species_mass_method; measured_species_mass_state; measured_species_mass_sample_time; measured_species_mass_source; measured_species_mass_conversion_factor; measured_species_mass_conversion_unit; measured_species_mass_conversion_source; actual_activity; actual_activity_unit; actual_activity_basis; actual_activity_method; actual_activity_state; actual_activity_sample_time; actual_activity_source; actual_activity_conversion_factor; actual_activity_conversion_unit; actual_activity_conversion_source; factor; factor_unit; factor_basis; factor_method; factor_state; factor_sample_time; factor_source; factor_conversion_factor; factor_conversion_unit; factor_conversion_source; component_fraction; component_fraction_unit; component_fraction_basis; component_fraction_method; component_fraction_state; component_fraction_sample_time; component_fraction_source; component_fraction_conversion_factor; component_fraction_conversion_unit; component_fraction_conversion_source; fate_fraction; fate_fraction_unit; fate_fraction_basis; fate_fraction_method; fate_fraction_state; fate_fraction_sample_time; fate_fraction_source; fate_fraction_conversion_factor; fate_fraction_conversion_unit; fate_fraction_conversion_source; temperature; temperature_unit; temperature_basis; temperature_method; temperature_state; temperature_sample_time; temperature_source; temperature_conversion_factor; temperature_conversion_unit; temperature_conversion_source; pressure; pressure_unit; pressure_basis; pressure_method; pressure_state; pressure_sample_time; pressure_source; pressure_conversion_factor; pressure_conversion_unit; pressure_conversion_source; target_pool_driver; target_pool_driver_unit; target_pool_driver_basis; target_pool_driver_method; target_pool_driver_state; target_pool_driver_sample_time; target_pool_driver_source; target_pool_driver_conversion_factor; target_pool_driver_conversion_unit; target_pool_driver_conversion_source; complete_all_consumer_driver; complete_all_consumer_driver_unit; complete_all_consumer_driver_basis; complete_all_consumer_driver_method; complete_all_consumer_driver_state; complete_all_consumer_driver_sample_time; complete_all_consumer_driver_source; complete_all_consumer_driver_conversion_factor; complete_all_consumer_driver_conversion_unit; complete_all_consumer_driver_conversion_source; attribution_share; attribution_share_unit; attribution_share_basis; attribution_share_method; attribution_share_state; attribution_share_sample_time; attribution_share_source; attribution_share_conversion_factor; attribution_share_conversion_unit; attribution_share_conversion_source; same_scope_N; same_scope_N_unit; same_scope_N_basis; same_scope_N_method; same_scope_N_state; same_scope_N_sample_time; same_scope_N_source; same_scope_N_conversion_factor; same_scope_N_conversion_unit; same_scope_N_conversion_source; event_id; actual_source_operation; species_identity; receiving_medium; particle_size_basis; measurement_method_source; factor_identity; factor_complete_coverage; composition_basis; composition_method; composition_source; fate_basis; fate_source; source_fluid_or_water_link; receiver_contained_treatment_exclusion; property_id; target_pool_id; target_room_type; responsibility_period_id; period_start; period_end; period_timezone; period_time_source; all_consumer_records; all_intended_output_records; consumer_id; output_handoff_id; output_handoff_source; competing_output_native_quantity_records; consumer_exclusivity_key; numerator_record_links; direct_assignment_evidence; allocation_method; allocation_source; raw_quantity_scope_id; already_per_reference; standby_idle_vacant_closed_duty_records; failed_cancelled_noshow_duty_records; carry_origin_scope; carry_receiving_scope; carry_quantity_link; carry_settlement_closure_source; coverage_owner; provider_overlap_exclusion; uncertainty; sensitivity; update_source; flow_row_id; actual_identity_case; actual_substance_or_material; actual_origin_and_medium; actual_state_and_gate; case_activation_evidence; typed_or_residual_quantity; quantity_exclusion_links; whole_total_reconciliation; unresolved_occurrence_not_zero | 需真实事件具名物种粒径介质实测量或兼容有据活动乘因子，组成去向比例仅系数未覆盖时采用。各操作数全原生元数据兼容换算，含采用时气体温压。真实蒸发升华水到空气为基本流，容纳废水工质为废物；化学库存气味补充未决余额缺计量既非发生证明也非不存在证明。服务接收排放责任一次不默认零。 先按真实物业房型服务包责任期间定义完整住宿供给池，再选择入住记录。池总资源包含必要空置准备待机失败取消未到及归属停用维护职责，不仅入住事件电表。优先直接追溯或兼容目标池物理驱动/正数完整全部消费者驱动，归属其他房型独立服务；各预期输出具原生量单位基准方法状态时间来源交接互斥成员。仅有据其他输出用户职责移出本池。完整归属原始量除同池正实际N一次；已每参考单夜量不再除。N0资源须责任与结转来源承接期间消解闭合证据，未归属未闭合仍不完整非默零。住客拒绝清洁不删除实际提供房夜。 | kg；真实兼容活动系数比例气态单位 | 每实际事件批次及匹配计量期间 | 完整责任池期间与相关全生命周期 | 真实物业住宿池及每一共享消费者服务接口 | 每参考流 | 各原生操作数单位基准方法状态采样时间来源校准换算代表性不确定性覆盖责任 |


### 计算规则

| rule_id | 适用对象 | 公式或规则 | 输入 | 输出 | source_ids |
| --- | --- | --- | --- | --- | --- |
| night_count | occupied_room_night | N为核对换房修订后唯一实际入住物业+不可分客房+住宿夜记录之和，含真实入住免费房，不含未用取消未到可用容量及未实际提供的未决夜。仅退款不删除已经实际提供的住宿。记录真实当地周期起止时区夏令时时长，不固定24小时。一房夜两人仍一房夜，宾客夜单列关联真实人员；不默认人数床容量订单换算。日用其他房型及部分换房夜需互斥有据单元周期划分，不一个服务两个参考。取消未到空置停用准备待机失败清洁资源保留实际期间完整消费者归属。N=0保留责任不除。 | cp_rooms唯一客房周期修订证据 | N Item(s)；一真实提供客房夜 | eurostat-rooms |
| pool_attribution | 全部资源 | 先按真实物业房型服务包责任期间定义完整住宿供给池，再选择入住记录。池总资源包含必要空置准备待机失败取消未到及归属停用维护职责，不仅入住事件电表。优先直接追溯或兼容目标池物理驱动/正数完整全部消费者驱动，归属其他房型独立服务；各预期输出具原生量单位基准方法状态时间来源交接互斥成员。仅有据其他输出用户职责移出本池。完整归属原始量除同池正实际N一次；已每参考单夜量不再除。N0资源须责任与结转来源承接期间消解闭合证据，未归属未闭合仍不完整非默零。住客拒绝清洁不删除实际提供房夜。 | 原始责任池资源兼容正数完整目标全部消费者原生驱动同范围N | 归属原始量/同范围正N一次 |  |
| energy_quantity | 能源行 | 电量=核登记重置修订后兼容期末-期初或真实同区间平均功率*实际时长并有据量纲换算。热冷交付=真实表量或兼容质量流量*比焓差*实际时长具参考状态证据。燃料质量=真实净质量或兼容温压真实体积*密度，不通用因子；池归属一次。 | cp_energy各操作数原生元数据计量热冷燃料范围 | 真实能源燃料量非铭牌耗用 |  |
| laundry_coverage | external_linen_care | 用真实完成服务干布质量或独立有据原生成果，湿入批无兼容同批实测不能称干质量。服务总资源以兼容真实目标/完整全客户驱动归属含返洗失败，酒店池份额再同范围N一次。完整洗干整理收送能源水化学废水资产寿命及租赁布制造终结替代匹配直接范围；全链使用前缺实际阶段须完成补齐并有数据记录责任覆盖链接。 | cp_laundry批干基共享转移全客户驱动完成覆盖 | 真实服务及互斥未覆盖补齐 | hcmi-guide-2022 |
| textile_stock | reusable_linen_lifecycle,discarded_linen | 唯一个件集合期初+真实外新收=净污在洗维修留存期末+真实可用废物已识别损失出口，内部转移抵消。水湿比w_wet=water/asreceived，干比w_dry=water/matchingnonwater，仅实际同样本定义允许w_wet=w_dry/(1+w_dry)及dry_nonwater=asreceived*(1-w_wet)，先有据原生百分换算。非水干物不自动纯纤维，LOD可能含非水挥发物。寿命当量按全资产规则，退役输出持留水不重复购买。 | cp_textiles实物账样本定义原生件质水完整寿命驱动 | 互斥布草库存去向寿命当量 |  |
| full_asset_life | facility_asset_lifecycle,reusable_linen_lifecycle | 各真实建筑装修设备布草全生命周期当量=目标责任池驱动/正数完整全部用户期间寿命驱动，各独立原生单位基准方法状态时间来源换算。完整分母为实测历史加有据兼容剩余使用或真实终止总量，含翻修更换终结。采用容量日历时间驱动须把待机空置停用份额也分配真实供给池：目标期间分子含归属待客容量时间，不以仅入住时间对含空置寿命分母。服务周期寿命驱动需真实完成有据未来周期并闭合完整负担，不可用容量作分母。各期间消费者份额加有据剩余责任穷尽资产负担，不因产权转移重复。原始期间负担归目标池再除同池实际N一次；服务租赁完整资产覆盖制造维护运输终结仅替代匹配直接阶段。不固定资产布草寿命。 | cp_assets/cp_textiles独立目标历史有据剩余完整全用户寿命驱动元数据 | 全生命周期负担归真实住宿池再/N一次 | pef-hotel-intro-2026 |
| supply_stock | guest_room_consumables,cleaning_consumables,unused_supply_out; cleaning_consumables_synthetic_detergent | 独立用品S=期初+真实外部净材料收货-期末，回收未用留存一次且排接收容器皮重。总输入S单列匹配同范围未用外部Product输出，或耗用输入S-return省该输出。不数值S+return双抵、已用回收作新收货或扣无关初充布草。产废耗用保生产负担。可重复布草自有件周期库存全寿命，内部污→洗→净转移非新购或新纺织制造。 | cp_supplies同源匹配净材料库存退回元数据 | 总量加退回或净耗省退回输出 |  |
| refrigerant_ledger | operating_refrigerant及真实工质去向 | 工质物理账：期初回路+期初存储+净外收+新进出厂充注（仅未含期初时）=期末回路+期末存储+未用外退+可用回收外送+独立容纳Waste+设备终结事故载体持留内含+独立有据直接释放+明确未知。内部充回ID抵消，期初新进互斥。出厂初充生产归资产数据或明确资产补齐一次。仅来源匹配未用独立子库S_supply=期初未用+净外收-期末未用可耗用法扣自身匹配未用退回且省输出。已用出厂初充回收非未用供应或无关补充抵扣，不负输入。资产混废持留内含非叠加，实际独立可用废物转移处理各门槛不自动抵扣。 | cp_refrigerant原生初充库存回收接收资产责任链接 | 互斥实际供应留存可用废物外送释放明确未知 |  |
| physical_freight | physical_goods_freight | 货运=唯一货载路段求和[(直接载荷或兼容毛-非货物皮)*仅EACH实际重复数(TOTAL不变)*真实距离*该记录目标/正数完整全部消费者物理份额]/同池正N一次。各因子独立换算有源，已归目标量不第二份额。货包支撑实际持留水保载荷，服务已含路空程不直接重复。 | cp_freight唯一货载原生EACH/TOTAL毛皮载荷次数距离份额 | 真实兼容质量距离每客房夜 |  |
| actual_fates | 全部可用、废物及基本流行 | 实际物种质量=独立实测原生物种量或兼容真实活动*因子，组成去向仅系数未含时用。密度温压换算各操作数原生元数据。真实不同接收流分别展开，真实混合载体保混合内含非叠加审计。容纳废水工质为废物，真实水蒸气到空气为基本流。未知余额非物种排放或零；接收运输处理服务资产终结一次，已含实物废账为链接非负担审计，除明确补未覆盖处理。 | cp_water/cp_fates/cp_releases真实独立流组成去向完整覆盖 | 真实互斥Product/Waste/Elementary量及披露缺口 |  |


### 数据质量要求

| requirement_id | 适用对象 | 要求 | 证据 |
| --- | --- | --- | --- |
| actual_lodging | 房夜及服务制度 | 实际物业独浴每日清洁非分时非自炊路线唯一已提供房夜住客周期修订执行请求拒绝事件。公开品牌政策仅定性非实际物业记录。 | cp_rooms真实排班服务入住源记录 |
| native_evidence | 全部真实数量 | 每公式操作数独立原生单位基准方法状态采样时间来源换算因子单位来源，含分子分母件密度温压资产当量。真实方法兼容不确定性代表性更新必需，未知非零。 | 全部本节点协议原生字段校准兼容原记录 |
| responsibility_closure | 责任池、资产、服务商及布草 | 全部物理消费者输出期间责任闭合含空置待机失败未到N0职责，完整建筑装修家具设备布草寿命及洗衣服务接收范围一次。全链前缺实际阶段须完成具责任原生量时间覆盖链接。 | 完整资源输出账全寿命服务阶段替代证据 |
| limits_identity | 候选方法与真实数据 | 本已编写候选非最终数据就绪。未定身份须真实配置及核实具体UUID属性单位支持后绑定实际包。仅缺通用数值范围不阻其他有据数据；声称来源区间可追溯基准兼容，经验校验另需独立可比参考数据非同批极值。不编范围入住洗衣资产因子或HCMI默认。 | 真实查询完整详情证据明确缺口登记适用验收来源 |
| complete_lodging_electricity | hotel_room_service | 最终使用前，按下方完整采集定义将`lodging_electricity`的每项真实情形展开为独立身份交换，完成原生数量、状态、来源、接收方及覆盖证据。缺UUID或数量不能作零；保留固定情形的数量须从余项排除。 | `cp_energy` |
| complete_purchased_thermal_service | hotel_room_service | 最终使用前，按下方完整采集定义将`purchased_thermal_service`的每项真实情形展开为独立身份交换，完成原生数量、状态、来源、接收方及覆盖证据。缺UUID或数量不能作零；保留固定情形的数量须从余项排除。 | `cp_energy` |
| complete_actual_operating_fuels | hotel_room_service | 最终使用前，按下方完整采集定义将`actual_operating_fuels`的每项真实情形展开为独立身份交换，完成原生数量、状态、来源、接收方及覆盖证据。缺UUID或数量不能作零；保留固定情形的数量须从余项排除。 | `cp_energy` |
| complete_supplied_water | hotel_room_service | 最终使用前，按下方完整采集定义将`supplied_water`的每项真实情形展开为独立身份交换，完成原生数量、状态、来源、接收方及覆盖证据。缺UUID或数量不能作零；保留固定情形的数量须从余项排除。 | `cp_water` |
| complete_guest_room_consumables | hotel_room_service | 最终使用前，按下方完整采集定义将`guest_room_consumables`的每项真实情形展开为独立身份交换，完成原生数量、状态、来源、接收方及覆盖证据。缺UUID或数量不能作零；保留固定情形的数量须从余项排除。 | `cp_supplies` |
| complete_cleaning_consumables | hotel_room_service | 最终使用前，按下方完整采集定义将`cleaning_consumables`的每项真实情形展开为独立身份交换，完成原生数量、状态、来源、接收方及覆盖证据。缺UUID或数量不能作零；保留固定情形的数量须从余项排除。 | `cp_supplies` |
| complete_reusable_linen_lifecycle | hotel_room_service | 最终使用前，按下方完整采集定义将`reusable_linen_lifecycle`的每项真实情形展开为独立身份交换，完成原生数量、状态、来源、接收方及覆盖证据。缺UUID或数量不能作零；保留固定情形的数量须从余项排除。 | `cp_textiles` |
| complete_facility_asset_lifecycle | hotel_room_service | 最终使用前，按下方完整采集定义将`facility_asset_lifecycle`的每项真实情形展开为独立身份交换，完成原生数量、状态、来源、接收方及覆盖证据。缺UUID或数量不能作零；保留固定情形的数量须从余项排除。 | `cp_assets` |
| complete_external_support_jobs | hotel_room_service | 最终使用前，按下方完整采集定义将`external_support_jobs`的每项真实情形展开为独立身份交换，完成原生数量、状态、来源、接收方及覆盖证据。缺UUID或数量不能作零；保留固定情形的数量须从余项排除。 | `cp_providers` |
| complete_physical_goods_freight | hotel_room_service | 最终使用前，按下方完整采集定义将`physical_goods_freight`的每项真实情形展开为独立身份交换，完成原生数量、状态、来源、接收方及覆盖证据。缺UUID或数量不能作零；保留固定情形的数量须从余项排除。 | `cp_freight` |
| complete_operating_refrigerant | hotel_room_service | 最终使用前，按下方完整采集定义将`operating_refrigerant`的每项真实情形展开为独立身份交换，完成原生数量、状态、来源、接收方及覆盖证据。缺UUID或数量不能作零；保留固定情形的数量须从余项排除。 | `cp_refrigerant` |
| complete_unused_supply_out | hotel_room_service | 最终使用前，按下方完整采集定义将`unused_supply_out`的每项真实情形展开为独立身份交换，完成原生数量、状态、来源、接收方及覆盖证据。缺UUID或数量不能作零；保留固定情形的数量须从余项排除。 | `cp_supplies` |
| complete_usable_retired_items | hotel_room_service | 最终使用前，按下方完整采集定义将`usable_retired_items`的每项真实情形展开为独立身份交换，完成原生数量、状态、来源、接收方及覆盖证据。缺UUID或数量不能作零；保留固定情形的数量须从余项排除。 | `cp_fates` |
| complete_usable_refrigerant_out | hotel_room_service | 最终使用前，按下方完整采集定义将`usable_refrigerant_out`的每项真实情形展开为独立身份交换，完成原生数量、状态、来源、接收方及覆盖证据。缺UUID或数量不能作零；保留固定情形的数量须从余项排除。 | `cp_refrigerant` |
| complete_spent_cleanup_solids | hotel_room_service | 最终使用前，按下方完整采集定义将`spent_cleanup_solids`的每项真实情形展开为独立身份交换，完成原生数量、状态、来源、接收方及覆盖证据。缺UUID或数量不能作零；保留固定情形的数量须从余项排除。 | `cp_fates` |
| complete_discarded_linen | hotel_room_service | 最终使用前，按下方完整采集定义将`discarded_linen`的每项真实情形展开为独立身份交换，完成原生数量、状态、来源、接收方及覆盖证据。缺UUID或数量不能作零；保留固定情形的数量须从余项排除。 | `cp_textiles` |
| complete_retired_equipment | hotel_room_service | 最终使用前，按下方完整采集定义将`retired_equipment`的每项真实情形展开为独立身份交换，完成原生数量、状态、来源、接收方及覆盖证据。缺UUID或数量不能作零；保留固定情形的数量须从余项排除。 | `cp_assets` |
| complete_packing_waste | hotel_room_service | 最终使用前，按下方完整采集定义将`packing_waste`的每项真实情形展开为独立身份交换，完成原生数量、状态、来源、接收方及覆盖证据。缺UUID或数量不能作零；保留固定情形的数量须从余项排除。 | `cp_fates` |
| complete_independent_contained_residues | hotel_room_service | 最终使用前，按下方完整采集定义将`independent_contained_residues`的每项真实情形展开为独立身份交换，完成原生数量、状态、来源、接收方及覆盖证据。缺UUID或数量不能作零；保留固定情形的数量须从余项排除。 | `cp_fates` |
| complete_contained_wastewater | hotel_room_service | 最终使用前，按下方完整采集定义将`contained_wastewater`的每项真实情形展开为独立身份交换，完成原生数量、状态、来源、接收方及覆盖证据。缺UUID或数量不能作零；保留固定情形的数量须从余项排除。 | `cp_water` |
| complete_contained_refrigerant_waste | hotel_room_service | 最终使用前，按下方完整采集定义将`contained_refrigerant_waste`的每项真实情形展开为独立身份交换，完成原生数量、状态、来源、接收方及覆盖证据。缺UUID或数量不能作零；保留固定情形的数量须从余项排除。 | `cp_refrigerant` |
| complete_guest_origin_solid_waste | hotel_room_service | 最终使用前，按下方完整采集定义将`guest_origin_solid_waste`的每项真实情形展开为独立身份交换，完成原生数量、状态、来源、接收方及覆盖证据。缺UUID或数量不能作零；保留固定情形的数量须从余项排除。 | `cp_fates` |
| complete_actual_direct_species | hotel_room_service | 最终使用前，按下方完整采集定义将`actual_direct_species`的每项真实情形展开为独立身份交换，完成原生数量、状态、来源、接收方及覆盖证据。缺UUID或数量不能作零；保留固定情形的数量须从余项排除。 | `cp_releases` |


### 强制清单完成记录

以下记录是强制物理采集和情形展开要求，不是单条清单交换。原有节点、方向、流类型、数量基准、采集协议、库存去向、供应接收和来源义务全部继续有效。正文对这些编号的引用对应这些完成要求。前景数据集完成前，必须将每项真实物料、服务、资产全寿命、废物流或物种介质分别展开为具原生数量和排他覆盖的独立身份交换。保留固定卡只覆盖其真实受支持情形，其余真实情形须无重叠协调。身份、发生或数量缺失仍待采集，不能填零或删项。内部配对交接和组分审计视图不可相加；必要全寿命与供应商阶段必须实际完成一次。

#### lodging_electricity

责任节点与原流角色：hotel_room_service / inputs / product

真实客房住宿共用空调热水设备响应信息电梯照明待机停用职责及覆盖；不重复外部洗衣购热冷已覆盖能源。

本卡为独立身份分支`lodging_electricity_ac`之外的余项清单要求。已计入分支的实际数量不再计入本余项交换，原类目总量仅作不可相加的协调审计。其他实际材料、状态、来源或介质仍须保留自身经核实的身份、原生数量及供应接收责任；记录缺失时，不推定条件分支发生、不发生或数量为零。

- 选定流：真实住宿及归属准备用电
- 流属性/单位：Energy / kWh
- 数量规则：真实归属原生量 / N；cp_energy。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_energy`

范围证据需求：需真实对齐表读或区间平均功率时长设备、全消费者房型其他输出期间驱动，不人数设温面积默认转kWh。

#### purchased_thermal_service

责任节点与原流角色：hotel_room_service / inputs / product

仅真实外部热冷交接计量属性单位状态温度焓边界服务机组资产覆盖；不把制冷机电再作购冷。

本卡为独立身份分支`purchased_thermal_service_delivered_heat`之外的余项清单要求。已计入分支的实际数量不再计入本余项交换，原类目总量仅作不可相加的协调审计。其他实际材料、状态、来源或介质仍须保留自身经核实的身份、原生数量及供应接收责任；记录缺失时，不推定条件分支发生、不发生或数量为零。

- 选定流：真实购入供住宿的热或冷
- 流属性/单位：Energy / MJ
- 数量规则：真实归属原生量 / N；cp_energy。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_energy`

范围证据需求：需真实交付热表流量温度及采用时参考温度方法、独立原生因子服务损失目标份额，不面积舒适温度因子。

#### actual_operating_fuels

责任节点与原流角色：hotel_room_service / inputs / product

仅真实运行声明设备移动职责；真实燃烧需物种介质记录，不分类推锅炉发电车辆。燃料生产上游一次。

- 选定流：真实住宿职责耗用燃料载体
- 流属性/单位：Mass / kg
- 数量规则：真实归属原生量 / N；cp_energy。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_energy`

范围证据需求：需真实库存原生质量或体积密度温度热值换算载体设备覆盖完整因子基准，不标准酒店燃料结构通用排放。

#### supplied_water

责任节点与原流角色：hotel_room_service / inputs / product

住宿内住客浴厕清洁真实设备水；外洗水仅未被完整服务覆盖时计。真实环境取水用对应源类型非购水身份。

本卡为独立身份分支`supplied_water_liquid_tap`之外的余项清单要求。已计入分支的实际数量不再计入本余项交换，原类目总量仅作不可相加的协调审计。其他实际材料、状态、来源或介质仍须保留自身经核实的身份、原生数量及供应接收责任；记录缺失时，不推定条件分支发生、不发生或数量为零。

- 选定流：真实住宿服务供应水
- 流属性/单位：Volume / m3
- 数量规则：真实归属原生量 / N；cp_water。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_water`

范围证据需求：需水源表原生量真实用途全消费者份额持留游离废水直接去向服务排除，供m3不自动下水m3。

#### guest_room_consumables

责任节点与原流角色：hotel_room_service / inputs / product

真实皂洗发纸及其他内含非食品品项物理使用包装来源；补充式容器可重复物按完整资产不每补充再制造。

- 选定流：真实非食品客房用品
- 流属性/单位：Mass / kg
- 数量规则：真实归属原生量 / N；cp_supplies。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_supplies`

范围证据需求：需真实配方原生库存排容器皮净收货补充件数质量证据匹配未用退回，不用品套人数剂量默认。

#### cleaning_consumables

责任节点与原流角色：hotel_room_service / inputs / product

真实清洁消毒配制液擦布吸附过滤物；浓液稀释水载体活性物各非叠加组成记录，不规定配方灭菌排放。

本卡为独立身份分支`cleaning_consumables_synthetic_detergent`之外的余项清单要求。已计入分支的实际数量不再计入本余项交换，原类目总量仅作不可相加的协调审计。其他实际材料、状态、来源或介质仍须保留自身经核实的身份、原生数量及供应接收责任；记录缺失时，不推定条件分支发生、不发生或数量为零。

- 选定流：真实客房共用区清洁物资
- 流属性/单位：Mass / kg
- 数量规则：真实归属原生量 / N；cp_supplies。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_supplies`

范围证据需求：需品项配方作业库存退房续住任务链接，采用时浓度基准密度温度因子；拒绝清洁不编避免量。

#### reusable_linen_lifecycle

责任节点与原流角色：hotel_room_service / inputs / product

真实自有床单毛巾其他客房布制造运输维护更换实际终结；租赁服务已覆盖制造寿命有据排本直接资产行，洗涤能源另一次。

- 选定流：完整寿命客房可重复布草毛巾
- 流属性/单位：Count / Item(s)
- 数量规则：真实归属原生量 / N；cp_textiles。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_textiles`

范围证据需求：需真实布配置件单位质量全部用户安装使用洗涤历史有据剩余终止全寿命驱动丢失拒收维修租赁责任，不固定洗次年限。

#### facility_asset_lifecycle

责任节点与原流角色：hotel_room_service / inputs / product

真实建筑场地装修床家具电气空调热水信息清洁设备周转载体制造维护更换终结；各范围阶段服务租赁产权转移单一责任，租金非物理资产量。

- 选定流：完整寿命建筑装修家具设备
- 流属性/单位：Count / Item(s)
- 数量规则：真实归属原生量 / N；cp_assets。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_assets`

范围证据需求：需完整BOM数据集覆盖原生当量全部消费者期间寿命驱动历史加有据剩余终止翻修不确定性更新，报告年房夜非建筑全寿命。

#### external_support_jobs

责任节点与原流角色：hotel_room_service / inputs / product

真实清洁维护响应外包物理成果原生单位；完整服务仅替代匹配材料能水资产废物职责，薪酬预订费发票非物理作业量。

- 选定流：真实完成住宿辅助服务成果
- 流属性/单位：Count / Item(s)
- 数量规则：真实归属原生量 / N；cp_providers。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_providers`

范围证据需求：需真实任务事件成果完成原生基准服务阶段资源资产接收范围全消费者份额，外洗专用批不双作业。

#### physical_goods_freight

责任节点与原流角色：hotel_room_service / inputs / product

仅供应布草废物资产真实货载路段且未被服务上游覆盖；载荷含承运水分包装货物支撑，不住客出行无关服务行程改货运。

- 选定流：真实住宿用品布草废物货运
- 流属性/单位：Mass * distance / kg*km
- 数量规则：真实归属原生量 / N；cp_freight。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_freight`

范围证据需求：需唯一货载路段EACH/TOTAL次数原生毛非货物皮直接载荷距离逐记录物理份额求和内N一次，湿布货运非干服务质量。

#### operating_refrigerant

责任节点与原流角色：hotel_room_service / inputs / product

仅住宿设备真实独立具名工质混配供应；出厂初充生产归资产制造或明确补齐一次，回收旧充注非未用新供应自动补充抵扣。

- 选定流：真实独立运行制冷剂供应
- 流属性/单位：Mass / kg
- 数量规则：真实归属原生量 / N；cp_refrigerant。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_refrigerant`

范围证据需求：需来源标签初充供应库存排钢瓶皮净量组成去向设备服务范围，补充未知差非独立有据泄漏。

#### unused_supply_out

责任节点与原流角色：hotel_room_service / outputs / product

仅实际未用同范围独立供应有用外退；总输入S单列此退回或耗用S-return输入省此输出，回收设备工质持留布草另资产库存角色。

- 选定流：真实匹配未用独立用品退回
- 流属性/单位：Mass / kg
- 数量规则：真实归属原生量 / N；cp_supplies。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_supplies`

范围证据需求：需来源材料单位状态接收互斥库存选择，不无关产品供应包资产内含抵当前用品。

#### usable_retired_items

责任节点与原流角色：hotel_room_service / outputs / product

仅真实独立有用布家具材料外送接收来源状态责任；留存维修租赁退回不假可用出口，真实混合物按实际身份非默认再生料。

- 选定流：真实独立验收可用退役物品材料
- 流属性/单位：Mass / kg
- 数量规则：真实归属原生量 / N；cp_fates。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_fates`

范围证据需求：需有用状态原生件质量BOM状态接收验收整部混合排除资产租赁终结覆盖，不自动避免生产抵扣。

#### usable_refrigerant_out

责任节点与原流角色：hotel_room_service / outputs / product

真实可用工质外送；留存回收为期末库存内部转移。初充外送不扣无关当前补充负供应，仅匹配独立未用供应可净且省对应输出。

- 选定流：真实可用回收制冷剂外送
- 流属性/单位：Mass / kg
- 数量规则：真实归属原生量 / N；cp_refrigerant。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_refrigerant`

范围证据需求：需来源组成质量去向有用接收资产初充生产责任，不新收留存外送双计或自动回收抵扣。

#### spent_cleanup_solids

责任节点与原流角色：hotel_room_service / outputs / waste

真实擦布滤吸附或实际混合清洁固体持留液物；不同无关废流按真实接收属性展开非固定混合。干载体持留液组成为非叠加内含审计。

- 选定流：真实废清洁载体物理混合残物
- 流属性/单位：Mass / kg
- 数量规则：真实归属原生量 / N；cp_fates。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_fates`

范围证据需求：需事件来源原生干载体液材料毛皮单位基准方法状态采样时间来源及接收运输处理，排单列液部件。

#### discarded_linen

责任节点与原流角色：hotel_room_service / outputs / waste

仅实际废弃自有布或声明责任废物；污布拒收返洗维修期末不新制造自动废物。含水污染实测，不默认纯干纤维。

- 选定流：真实不可用退役客房布草
- 流属性/单位：Mass / kg
- 数量规则：真实归属原生量 / N；cp_textiles。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_textiles`

范围证据需求：需件批原因实际接收原生干收集质量状态换算生命周期责任，租赁终结处理已含不再收费负担。

#### retired_equipment

责任节点与原流角色：hotel_room_service / outputs / waste

真实整部设备家具废出口含实际转移持留组分。实物终结记录核资产生命周期；完整资产服务数据已含处理时为链接物理审计非重复处理负担。

- 选定流：真实不可用退役家具设备转移
- 流属性/单位：Mass / kg
- 数量规则：真实归属原生量 / N；cp_assets。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_assets`

范围证据需求：需资产部件BOM状态毛皮原生质量接收工质油电池内含排除制造维护终结责任，不自动拆回收金属拆分。

#### packing_waste

责任节点与原流角色：hotel_room_service / outputs / waste

仅实际独立废弃容器膜纸箱；混合载体设备内留物非叠加内含非另一出口。留用周转容器支撑按全寿命责任。

本卡为独立身份分支`packing_waste_paper_pack`; `packing_waste_metal_pack`之外的余项清单要求。已计入分支的实际数量不再计入本余项交换，原类目总量仅作不可相加的协调审计。其他实际材料、状态、来源或介质仍须保留自身经核实的身份、原生数量及供应接收责任；记录缺失时，不推定条件分支发生、不发生或数量为零。

- 选定流：真实独立转移用品包装废物
- 流属性/单位：Mass / kg
- 数量规则：真实归属原生量 / N；cp_fates。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_fates`

范围证据需求：需真实材料件净质量残留接收运输处理服务覆盖，不购包装量自动等废或回收标记抵扣。

#### independent_contained_residues

责任节点与原流角色：hotel_room_service / outputs / waste

仅真实独立收集油非水化学半固残物，按真实身份状态接收原生属性分别展开，不无关废物假一流或容纳液作空气排放。

本卡为独立身份分支`independent_contained_residues_used_lubricating_oil`之外的余项清单要求。已计入分支的实际数量不再计入本余项交换，原类目总量仅作不可相加的协调审计。其他实际材料、状态、来源或介质仍须保留自身经核实的身份、原生数量及供应接收责任；记录缺失时，不推定条件分支发生、不发生或数量为零。

- 选定流：真实独立非水容纳维护残物
- 流属性/单位：Mass / kg
- 数量规则：真实归属原生量 / N；cp_fates。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_fates`

范围证据需求：需实际维护服务来源原生质量或兼容有据体积密度温度、组成接收处理、设备混合持留服务已含排除。

#### contained_wastewater

责任节点与原流角色：hotel_room_service / outputs / waste

真实下水收集处理交接具组成来源，非环境直接排放。厕灰水清洁设备或服务未覆盖各流需实际兼容接收覆盖，不固定混合或全部供水回流。

- 选定流：真实收集卫生清洁设备废水
- 流属性/单位：Volume / m3
- 数量规则：真实归属原生量 / N；cp_water。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_water`

范围证据需求：需实际收集体积质量密度温度组成接收记录持留蒸发直接替代洗衣服务范围，未知水差明确。

#### contained_refrigerant_waste

责任节点与原流角色：hotel_room_service / outputs / waste

仅真实独立回收不可用工质外转实际回收处理；设备终结清洁载体内留工质为其非叠加内含非独立废物或大气释放。

- 选定流：真实外转不可用制冷剂废物
- 流属性/单位：Mass / kg
- 数量规则：真实归属原生量 / N；cp_refrigerant。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_refrigerant`

范围证据需求：需初充供应原生质量组成去向基准来源接收承运处理全资产服务排除，不假工质回收量默认漏。

#### guest_origin_solid_waste

责任节点与原流角色：hotel_room_service / outputs / waste

仅实际住宿经营者承担收集接收处理职责的客房共用住宿住客来源纸、食物、个人卫生等固废。真实不同物料接收分别展开，真实共收物理混流保持混流且组成非叠加审计；不因处理客自带食物物品废物就将其生产作住宿用品投入，经营者所供物料上游仍归实际责任一次。不假废物组成数量回收或卫生风险。

- 选定流：真实住宿及住客来源固体废物交接
- 流属性/单位：Mass / kg
- 数量规则：真实归属原生量 / N；cp_fates。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_fates`

范围证据需求：需实际客房事件客自带或经营者供应来源、收集责任、原生毛皮净质量状态采样时间来源、实际混合独立接收承运处理门槛及服务清洁包装已含排除，不人数转废物因子。

#### actual_direct_species

责任节点与原流角色：hotel_room_service / outputs / elementary

仅实际燃料水工质其他职责独立有据物种颗粒介质释放；蒸发水蒸气到空气为基本流，容纳废水工质为废物。化学存在气味补充库存差缺计量既不证明发生也不证明不存在。

本卡为独立身份分支`actual_direct_species_co2_fossil_air`; `actual_direct_species_methane_fossil_air`; `actual_direct_species_nitrous_oxide_air`之外的余项清单要求。已计入分支的实际数量不再计入本余项交换，原类目总量仅作不可相加的协调审计。其他实际材料、状态、来源或介质仍须保留自身经核实的身份、原生数量及供应接收责任；记录缺失时，不推定条件分支发生、不发生或数量为零。

- 选定流：真实具名直接释放物种接收介质
- 流属性/单位：Mass / kg
- 数量规则：真实归属原生量 / N；cp_releases。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_releases`

范围证据需求：需事件物种粒径介质实测量或兼容活动因子组成去向原生元数据完整系数覆盖，接收处理排放责任一次未知非零。


## 9. 验证规则

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| physical_roomnight | 参考流 | 需真实唯一已入住不可分房夜独浴每日清洁非分时路线周期时区夏令时实际住客；免费入住含，未用未到取消仅排N非排责任。拒绝清洁不删住宿。换房修订退款独立核，不固定24小时订单宾客夜换算或容量分母。 | unsd-63111; eurostat-rooms |
| pool_closure | 全部真实资源 | 完整来源链接池消费者输出归属含必要待机空置维护失败未到职责，正数兼容完整驱动同范围N一次。N0跨期须责任承接期间消解闭合，未归属未闭合不完整。不仅入住分子对全日历资产分母删空置负担。 |  |
| laundry_life | 布草、服务商及资产 | 核真实外部集中完成洗衣基准批干湿匹配返洗，唯一共享转移库存去向及真实布草建筑装修设备全寿命驱动闭合。完整服务租赁资产仅替代匹配直接职责，全链前缺阶段须完成具责任原生量时间覆盖链接。 | pef-hotel-intro-2026; hcmi-guide-2022 |
| exclusive_fates | 全部真实流 | 总S匹配未用退回或净耗S-return省成对输出，不双扣。工质期初新厂初充互斥初充上游责任一次，已用回收非无关供应抵扣。实际可用废物容纳直接介质分开，真实混合内含非叠加无关实际流按接收分别展开；未知非物种排放或零。 |  |
| native_readiness | 全部真实数据 | 真实数量完整原生操作数适用验收证据核实具体UUID属性单位支持为实际绑定必需。仅缺通用数值范围不否定，披露缺口。来源规格区间需可追溯兼容基准，经验校验需独立可比参考证据。最终全链前补齐实际物理生命周期职责，校验通过本身既非外部身份也非真实就绪证明。 |  |


## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 真实酒店住宿生命周期前景数据包；已编写方法候选非实测酒店数据 |
| downstream_use | 声明每日清洁外部集中布草护理的实际入住独立酒店客房夜过程生命周期模型投影 |
| allowed_use | 仅真实匹配物业服务包周期入住及完整责任池服务全资产寿命去向，具实际原生量核实绑定 |
| excluded_use | 宾客夜订单容量24小时代理；低频清洁分时自炊共享床位，未审自营工业洗衣，HCMI仅运营碳边界或PEF品牌合规声称，缺职责默零 |
| required_metadata | 物业房型独浴每日制度住客周期时区夏令时N修订、池全消费者输出待机N0结转闭合、布草批干湿库存服务覆盖、资产历史剩余终结、原生证据身份接收直接介质 |
| required_quality_disclosure | 真实覆盖不确定性代表性更新及余量身份支持阶段缺口。不强制通用数值范围；声称区间可溯兼容，经验校验独立有据。HCMI2020/2022及PEF2026草案简介用途版本限制。 |
| update_trigger | 真实物业制度服务包布草服务资产能源水系统变化、新发现来源身份支持修订、新计量期间缺范围补齐 |


## 11. 数据源

| source_id | type | reference | used_for |
| --- | --- | --- | --- |
| unsd-63111 | official_guidance | https://unstats.un.org/unsd/classifications/Econ/Structure/Detail/EN/2100/63111 | 真实CPC3.0每日清洁访客住宿排分时；分类背景非实际物业证据。 |
| unsd-63112 | official_guidance | https://unstats.un.org/unsd/classifications/Econ/Structure/Detail/EN/2100/63112 | 低于每日清洁区别，不以接待台分类。 |
| unsd-63113 | official_guidance | https://unstats.un.org/unsd/classifications/Econ/Structure/Detail/EN/2100/63113 | 分时度假无论清洁频率均排。 |
| eurostat-rooms | official_guidance | https://webgate.ec.europa.eu/eurostat/cache/metadata/en/tour_occ_esms.htm | 不可分租赁房间与人员宾客夜入住客房计数区别，不固定人数时长。 |
| hilton-housekeeping | extension_guidance | https://www.hilton.com/en/help-center/hotel-information/hiltons-housekeeping-policy/ | 公开所选品牌每日与其他品牌地区频率背景，仍需实际物业制度事件，不全品牌或布草更换因子。 |
| pef-hotel-intro-2026 | method_factor | https://pefhotelaccommodation.eu/system/files/document/introduction-to-the-pefcr-for-hotel-accommodation_2nd-consultation.pdf | 仅2026第二咨询简介：酒店过夜客房设备公用清洁布草建筑及独立其他输出；非完整最终PEFCR，不导数值寿命默认。 |
| hcmi-context-2020 | method_factor | https://sustainablehospitalityalliance.org/wp-content/uploads/2020/02/HCMI-v1.2-June-2020.pdf | 历史2020v1.2入住免费房计量外包洗衣背景；明确非LCA，不复制排采购废物资产边界归属默认因子。 |
| hcmi-guide-2022 | handbook | https://sustainablehospitalityalliance.org/wp-content/uploads/2020/02/HCMI-v2.0-How-to-Guide-2.pdf | 2022v2.0指南仅外部洗衣真实来源采集定性背景，不默认燃料漏率房夜洗量或称2026最新方法。 |
