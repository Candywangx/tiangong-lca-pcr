---
pcr_id: pcr.shared-dormitory-visitor-bed-nights
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 共享宿舍访客床位夜住宿服务

## 1. 范围与适用性

实际短期访客住宿，以共享宿舍中一个独立分配的单人睡眠床位或上下铺铺位交付。实际房间库存按床位向可能彼此独立的访客供给；当夜没有另一实际住客并不改变这一制度。实际床位/房间平面、配置、预订库存、分配及履约记录确定服务。它不是整间私房住宿，也不是整房容量除以名义床位数。

一个参考单位是按有来源的当地住宿夜惯例实际入住并履约的单人铺位夜。上下铺是不同物理床位 ID；多份预订、多人及移动房间须按实际核对。同一服务夜换床只保留一个参考量并保留两段资源。排除整房独占包租、空置备用床、双人/多人睡眠等效、仅可用容量、付费未到店/取消和固定24小时假设。学生/工人住宿及组合休闲营地包属于不同服务。

纳入实际床位准备、房间/公共设施运行、住客浴室/厨房/电器使用、出入与响应、实际或失败的周转/清洁、布草护理和全部用户/期间的建筑/装修/床架床垫/设备/纺织品全寿命责任。必要空置/封床/待机/失败任务先留在责任资源池，再按实际正值已入住产出归一化。既有所有权或外包不删除物理阶段。

实际包内餐食、活动或其他附属义务是有条件的真实套餐组成，不预设统一存在或不存在。使用前，完整物理供应商覆盖或已复核真实生产路线扩展须包含其上游材料、制作、资源、废物、资产与运输义务；服务标签不能删除这些阶段。住客自购食品/商品的制造及普通旅行在选定住宿范围外，但运营方负责的实际住客来源废物处理仍纳入。不预设独立工业洗衣、锅炉、发电或厨房技术。

运营方案例仅支持物理产品与采集问题，不导入床数、价格、年龄、入住钟点、清洁频率、默认寿命、洗衣强度、统计兜底、泄漏率或通用数值范围。缺失身份、数量和覆盖保留为明确采集缺口及使用限制，不编值也不当零。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.shared-dormitory-visitor-bed-nights |
| classification_refs | CPC3.0:63114 更窄范围：独立供给的单床位访客共享宿舍服务，不覆盖全部多人房住宿 |
| covered_products | 共享房间库存中实际入住且履约的访客单人铺位夜，声明真实服务/套餐/公共设施 |
| excluded_products | 整间私房/整宿舍独占单元夜；双人/多人睡眠等效、学生/工人住宿、休闲营地包、权利/预订/未用容量/未到店参考量 |
| representative_product | 一个实际访客床位服务夜，含床位/上下铺/房间/配置、当地周期、真实共同用户和完整资源/套餐/寿命/去向责任 |
| production_route | 实际运营宿舍/床位库存 -> 按床位分配访客 -> 真实共享房间过夜及支持/布草/周转 -> 实际履约与下一用途/接收方交接 |
| market_state | 已交付已入住的独立睡眠铺位服务；建筑/床/床垫/布草是服务资产，不是每夜新售产品 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 实际履约的共享宿舍访客单床位夜 |
| How much | 1 Item(s) |
| How well | 真实独立供给的单人睡眠铺位，共享房间库存/配置/分配及已接受访客服务；真实套餐和共同用户范围，不作整房或容量等效 |
| How long or cycle | 实际有来源的当地住宿夜，含真实起止/时区/UTC 偏移/DST 及经过时间；入住/任务/报告/库存/资产全寿命阶段分别保留 |
| reference_flow_link | occupied_bed_night |

| 字段 | 值 |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | 实际履约的共享宿舍访客单床位夜 |
| Reference flow property | Count `01846770-4cfe-4a25-8ad9-919d8d378345` |
| Reference unit group | Units of items `5beb6eed-33a9-47b8-9ede-1dfe8f679159` |
| Reference unit | Item(s) |
| Required qualifiers | actual_property_operator_and_visitor_scope; actual_single_bed_berth_bunk_room_identity; independently_supplied_shared_room_inventory; configuration_version_effective_times_and_actual_plan; actual_guest_stay_service_night_assignment_fulfillment; actual_move_segments_reversals_same_service_ID; local_night_definition_start_end_timezone_UTC_DST_elapsed; complimentary_declined_cleaning_and_unprovided_status; actual_co_users_private_buyout_otheroutput_handoffs; actual_housekeeping_linen_kitchen_bathroom_common_scope; actual_included_meal_activity_provider_or_reviewed_route; complete_idle_failure_N0_pool_and_carry_resolution; full_alluser_building_bed_mattress_textile_life; actual_native_quantity_unit_basis_method_state_time_source; actual_receivers_species_media_and_exclusive_coverage |

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `single_bed_reference` | occupied_bed_night | Count | Item(s) | N_target=按实际撤销及床位移动核对后唯一且实际履约的已入住单人铺位服务夜 ID 计数。须有实际访客、独立供给的单人睡眠铺位、真实床位/房间/配置分配、当地住宿夜惯例及实际入住退房/时区/UTC 偏移/DST 证据。房内仅有一名实际住客仍可保持按床位共享供给，不要求另一住客当夜在场。同一已履约床位服务夜中途换铺，保留一个服务 ID 及两段实际资源；真正额外独立交付的服务有不同 ID。独占整房包租、未使用备用床、预订、宾客容量、付费未到店及固定二十四小时（fixed24hours）均非本参考流。实际履约的免费入住仍承担资源责任，仅拒绝清洁不撤销已交付住宿。 |
| `exclusive_bed_space_time` | occupied_bed_night and shared-room resources | Count; actual native time/area | Item(s); actual time/area units | 使用真实独立供给单铺位 ID 及不重叠的配置/时间/住客分段。整间私房交付与按床位供给是互斥库存制度，不是房间夜乘除名义容量。上下铺是不同铺位；双人或多人睡眠等效不在本单铺位范围。 |
| `linen_state_conversion` | laundry_service; linen_lifetime; freight | Mass; actual native textile count | Actual dry textile kg; independent wet/conditioned/cargo units | 实际服务干质量、调湿布、使用后湿货运质量及重复使用制造各不相同。干湿换算前须同一样品、仅水定义及百分数转比例证据。含其他挥发物的干燥失重/污物不等于纯水或纤维。 |
| `native_operands` | 全部清单行 | 实际相容原生属性 | 实际原生单位 | 每个数量、分子/分母、重复次数、转换、密度/温度、资产等效、活动/因子/组成/去向均有独立原生单位/基准/方法/状态/样品时间/来源。未知基准或无支持物理等效阻断计算/绑定，不当零。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 实际运营的共享宿舍，具真实单铺位库存/配置、访客分配及当地住宿夜/套餐义务证据 |
| starting_condition_role | 实际住宿生产及全寿命资产；既有设施并非无负荷起点 |
| product_classification_scope | 更窄63114实际访客共享床位供给，排除学生/工人/营地服务制度和整间私房产出 |
| recursive_input_rule | 不把相同最终床位夜作为自身输入购买。完整实际供应商服务仅替代匹配的已负责底层义务，不重复整套物理系统 |
| upstream_dataset_requirement | 实际公用事业/材料/布草/供应商供给及全部用户/期间的建筑/装修/床架/床垫/设备/纺织品制造-安装-维护-更换-寿命终结一次。实际包内餐食/活动须已完成供应商或已复核直接生产范围。完整链使用前，实际缺失义务须按原生量/来源/责任人/覆盖完成集成 |
| disclosure | 实际床房拓扑/时间/访客/夜/履约/移动/共享与包房状态，全部真实消费者/产出交接及必要空闲资源池，原生记录/寿命/供应商/附属/接收方/物质/覆盖缺口 |

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `physical_shared_supply` | 参考服务 | 边界是独立供给且有自身分配的真实访客单人铺位及真实共享房间/公共设施责任，不是房间容量或整间私房参考量。按床位/房间/配置/时间的真实归属与重叠保留全部实际共同用户。 | unsd-cpc3-63114; generator-barcelona-shared-bed; hiusa-nyc-bed-support |
| `full_life_responsibility` | 全部资源 | 采集建筑、床架/床垫、家具、设备、纺织品及可重复使用支撑物在全部用户和期间的完整制造、安装、装修、维护、实际更换及寿命终结。兼容寿命驱动量为已观察全用户历史加有来源的剩余生产等效服务，或实际终止总量；每个独立原生数量/等效量/单位/基准/方法/状态/时间/来源均保留，并记录不确定性、敏感性和更新。年度已入住 N_target 不是寿命。日历/容量时间驱动的可归属分子也须包含空闲责任；生产服务驱动须完整实际及有来源剩余使用并闭合全部负荷。采用完整资产/供应商覆盖，或排他补足缺失阶段，不能并用；完整链使用前，真实缺失阶段须已按原生量/来源/责任人/覆盖链接实际集成一次。 | pef-hotel-introduction-2026 |
| `actual_ancillary_scope` | 供应商与实际直接义务 | 实际包内餐食/活动/公共设施义务保留完整物理上游阶段。使用真实完整供应商，或已复核的真实厨房/生产路线扩展及缺失阶段补充后才可使用。餐厅、住客洗衣、促销或免费活动的存在既不证明每个床位都包含，也不允许默认零。选定住宿范围外的住客自行购食/商品制造及普通旅行不纳入；实际运营方供给义务及住客来源废物处理仍按责任保留。 | generator-barcelona-shared-bed; generator-booking-service-scope; hiusa-nyc-bed-support |
| `route_and_source_limits` | 全部方法 | 不从分类推定锅炉/发电机/工业洗衣/食品生产技术、清洁/布草频率、房间容量、统计营地兜底、通用24小时、价格、年龄、寿命、泄漏率或数值范围。真实独立操作须复核范围/模块扩展。Eurostat 容量/入住区分和 PEF2026 第二轮咨询酒店简介仅作有限背景，不声称宿舍 PEF 合规，不是完整批准标准、数值因子或删除关闭日负荷的许可。 | eurostat-rooms-bedplaces-nights; pef-hotel-introduction-2026 |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| shared_bed_service | 共享宿舍单床位过夜及实际支持 | required | 实际独立供给访客单人铺位与已履约入住当地夜 | 连续房间/公共运行与真实床位/入住/周转/布草/清洁/维护任务批次重叠 | occupied_bed_night |

一个集成住宿节点拥有实际连续共享房间/公共义务及真实床位夜/任务批组。提取本目标前，全部预期床位服务/私房/包房/附属/租户产出须在 cp_beds 以原生量和真实交接枚举。可用残余/转移和废物不是已接受住宿产出。真实不合格床位/房间/布草状态采用原任务 ID 及有证据的重清洁/修理/再部署/可用转移/保留待定/废弃路线；失败任务保留原负荷且不增加已接受夜。

### 过程：共享宿舍单床位过夜及实际支持（`shared_bed_service`）

#### 输入

##### 产品流

###### 实际使用点交流电 (`electricity_ac`)

仅适用于实际跨越本节点边界、且未由完整供应商数据覆盖的交流电。该身份未特指供应方、电压、发电组合或交付线损归属，仍须按要求采集。经核实的电力流以1 MJ电能为基准，其ILCD属性名称为净热值；原生kWh按精确的3.6 MJ/kWh换算，不能套用燃料热值系数。直流电或其他不匹配电力状态保留在余项要求中。

- 选定流：交流电 `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- 绑定：`fixed`
- 流属性/单位：Energy / kWh
- 数量规则：在 cp_utilities 下按实际排他归属兼容原生量/正值同范围 N_target 一次；已按参考流则不变，N_target=0 保留且不除
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：per reference flow
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_utilities`
- 范围证据需求：实际仪表/区间或同区间平均功率/时间、房间/床位/用户边界、完整竞争用户及必要资源池义务。

###### 实际外购交付的有效热量 (`purchased_useful_heat_delivered_heat`)

仅记录有证据能量基准、实际跨越本节点边界交付的有效热量。保留供回状态、温度品位、覆盖范围及实际损失责任。通用热能身份不预设天然气、蒸汽质量、锅炉效率或温度；制冷、燃料能量及缺少蒸汽转能量证据的情形不使用该身份。

- 选定流：热能 `4f19a302-7b3b-11dd-ad8b-0800200c9a66`
- 绑定：`fixed`
- 流属性/单位：Energy / MJ
- 数量规则：在 cp_utilities 下按实际排他归属兼容原生量/正值同范围 N_target 一次；已按参考流则不变，N_target=0 保留且不除
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：per reference flow
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_utilities`
- 范围证据需求：实际有效交付量/原生单位、状态/温度/参考方法及供应商损失/能源/资产覆盖、完整用户驱动。

###### 实际液态处理自来水供给 (`water_supply_liquid_tap`)

仅在实际来源确为处理后的自来水且用于所声明用途时适用。保留实际供应方、水质、温度状态和供应边界，不假定所有供水都是自来水。冰、瓶装矿泉水、再生水、未经处理的水及环境直接取水保留各自实际身份。沿用原卡原生质量或体积基准；最终换算为质量参考量时须有实际相容密度和状态证据，不能把目录中的次要体积关系作为默认现场密度。

- 选定流：自来水 `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- 绑定：`fixed`
- 流属性/单位：Volume / m3
- 数量规则：在 cp_utilities 下按实际排他归属兼容原生量/正值同范围 N_target 一次；已按参考流则不变，N_target=0 保留且不除
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：per reference flow
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_utilities`
- 范围证据需求：真实水源/供应商/仪表期间/原生量、冷热/用途范围和全用户责任，独立采集去向。

###### 实际独立记录的合成洗涤剂投入 (`operating_materials_synthetic_detergent`)

仅适用于产品配方、供应状态及用途记录确认的实际合成表面活性洗涤剂。记录扣除包装皮重的材料净量，区分浓缩液与稀释水，整体配方与组分不得相加重复计入。肥皂、消毒剂、抹布、滤材等仍按各自实际身份记录，不预设清洁配方、剂量或发生。

- 选定流：洗涤剂 `1c57d123-df57-49ab-b9d4-957403beb8a5`
- 绑定：`fixed`
- 流属性/单位：Mass / kg
- 数量规则：在 cp_supplies 下按实际排他归属兼容原生量/正值同范围 N_target 一次；已按参考流则不变，N_target=0 保留且不除
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：per reference flow
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_supplies`
- 范围证据需求：真实 SKU/组成/用途/排容器皮重净料库存，实际 EACH/TOTAL 及单件/密度因子、匹配未使用退货及包装生产覆盖。

###### 实际完成的运营布草洗衣服务（`laundry_service`）

按有支持干纺织品处理量或真实兼容供应商原生结果计实际服务，不是新纺织品或湿货运。完整洗/干/整理/能源/水/化学品/污水/资产全寿命/运输/租赁范围，或实际缺失补充一次。

- 选定流：实际完成的运营布草洗衣服务
- 流属性/单位：Mass / kg
- 数量规则：在 cp_linen 下按实际排他归属兼容原生量/正值同范围 N_target 一次；已按参考流则不变，N_target=0 保留且不除
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：per reference flow
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_linen`
- 范围证据需求：真实批次/纺织品/床位入住链接，干/调湿/湿定义、样品、调湿与转换来源，重洗及完整全客户覆盖；不填 kg/夜或兜底百分数。

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 实际履约的共享宿舍访客单床位夜（`occupied_bed_night`）

访客共享宿舍中一个独立供给、实际履约已入住的单人铺位夜。一份预订可跨多床/房；共享制度不要求当夜另一住客在场。整房包租、付费未用空床及名义容量非本产出。

- 选定流：实际履约的共享宿舍访客单床位夜
- 流属性/单位：Count / Item(s)
- 数量规则：1 Item(s)
- 数值来源模式：`fixed_value`
- 适用范围：`site_specific`
- 归一化基准：per reference flow
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_beds`
- 范围证据需求：真实床位/上下铺/房间/配置/共享供给库存、访客/入住/服务夜 ID、有来源当地周期/时区/DST/经过时间、分配/履约/移动/撤销及实际套餐限定信息。

##### 废物流

###### 实际单独收集的废润滑油 (`independent_maintenance_waste_used_lubricating_oil`)

仅适用于实际经使用受污染、独立收集并转移的石油基或合成润滑油。保留实际组成、含水或污染状态及接收方。新油、食用油、制冷剂、水性废水和仍滞留滤材或设备中的残余不使用该身份，不预设再生或处置路线。

- 选定流：废润滑油 `55d93375-7f04-4166-b2a2-88ce929051a5`
- 绑定：`fixed`
- 流属性/单位：Mass / kg
- 数量规则：在 cp_fates 下按实际排他归属兼容原生量/正值同范围 N_target 一次；已按参考流则不变，N_target=0 保留且不除
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：per reference flow
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_fates`
- 范围证据需求：实际来源任务/SKU/原生净量/组成/所用密度温度、接收覆盖及整物/部件/混合不可相加排除链接。

##### 基本流

###### 实际有独立证据的向空气排放化石二氧化碳 (`direct_species_co2_fossil_air`)

仅在实际证据确认化石来源、二氧化碳物种和向空气直接释放时适用。保留报告的碳或CO2基准，碳转CO2须独立有证据的化学计量，不预设系数或发生。 本卡仅记录本节点实际直接释放，不重复计入外购电力上游或供应商已覆盖排放。UUID表示未细分子介质的空气排放，其他实际子介质或来源仍须在余项中匹配，不能改标；缺失数据不等于零。

- 选定流：二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 绑定：`fixed`
- 流属性/单位：Mass / kg
- 数量规则：在 cp_species 下按实际排他归属兼容原生量/正值同范围 N_target 一次；已按参考流则不变，N_target=0 保留且不除
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：per reference flow
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_species`
- 范围证据需求：精确物质/基准/颗粒/介质及独立原生实测量，或兼容真实活动-因子，各操作数均有原生元数据，组成/去向/气态仅按所需一次并排除供应商重叠。

###### 实际有独立证据的向空气排放化石甲烷 (`direct_species_methane_fossil_air`)

仅在实际证据确认化石来源、甲烷物种和向空气直接释放时适用。生物源或来源未知甲烷仍在余项要求中，不得改标化石源；不预设泄漏发生、气体比例、数量或排放系数。 本卡仅记录本节点实际直接释放，不重复计入外购电力上游或供应商已覆盖排放。UUID表示未细分子介质的空气排放，其他实际子介质或来源仍须在余项中匹配，不能改标；缺失数据不等于零。

- 选定流：甲烷 (化石源) `08a91e70-3ddc-11dd-9610-0050c2490048`
- 绑定：`fixed`
- 流属性/单位：Mass / kg
- 数量规则：在 cp_species 下按实际排他归属兼容原生量/正值同范围 N_target 一次；已按参考流则不变，N_target=0 保留且不除
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：per reference flow
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_species`
- 范围证据需求：精确物质/基准/颗粒/介质及独立原生实测量，或兼容真实活动-因子，各操作数均有原生元数据，组成/去向/气态仅按所需一次并排除供应商重叠。

###### 实际有独立证据的向空气排放氧化亚氮 (`direct_species_nitrous_oxide_air`)

仅在实际证据确认氧化亚氮物种及向空气直接释放时适用。原生数量为N2O质量，不是氮质量或氮气质量，不预设排放系数或发生。 本卡仅记录本节点实际直接释放，不重复计入外购电力上游或供应商已覆盖排放。UUID表示未细分子介质的空气排放，其他实际子介质或来源仍须在余项中匹配，不能改标；缺失数据不等于零。

- 选定流：一氧化二氮 `08a91e70-3ddc-11dd-94c3-0050c2490048`
- 绑定：`fixed`
- 流属性/单位：Mass / kg
- 数量规则：在 cp_species 下按实际排他归属兼容原生量/正值同范围 N_target 一次；已按参考流则不变，N_target=0 保留且不除
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：per reference flow
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_species`
- 范围证据需求：精确物质/基准/颗粒/介质及独立原生实测量，或兼容真实活动-因子，各操作数均有原生元数据，组成/去向/气态仅按所需一次并排除供应商重叠。

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `fulfilled_bed_scope` | 全部住宿资源 | N_target=按实际撤销及床位移动核对后唯一且实际履约的已入住单人铺位服务夜 ID 计数。须有实际访客、独立供给的单人睡眠铺位、真实床位/房间/配置分配、当地住宿夜惯例及实际入住退房/时区/UTC 偏移/DST 证据。房内仅有一名实际住客仍可保持按床位共享供给，不要求另一住客当夜在场。同一已履约床位服务夜中途换铺，保留一个服务 ID 及两段实际资源；真正额外独立交付的服务有不同 ID。独占整房包租、未使用备用床、预订、宾客容量、付费未到店及固定二十四小时（fixed24hours）均非本参考流。实际履约的免费入住仍承担资源责任，仅拒绝清洁不撤销已交付住宿。 | generator-barcelona-shared-bed; generator-booking-service-scope; hiusa-nyc-bed-support |
| `complete_output_set` | 目标及竞争产出 | 提取目标前枚举真实独立床位服务产出、整间私房/包房产出、实际其他服务/租户用户及其原生交接数量。预期住宿/附属产出区别于可用材料/残余/废物。禁止整房与包含床位双计产出、名义床容量因子、费用/收入/积分分配或自动回收产出收益。按具体资源直接追溯或有证据兼容的全消费者物理驱动，不能无依据统一均分。 | generator-barcelona-shared-bed; generator-booking-service-scope |
| `physical_pool_closure` | 全部资源 | 优先使用实际任务/仪表直接追溯，或按该资源范围兼容原始量*target_driver/正值且完整的 all_consumer_driver 归属。枚举全部实际宿舍住客、私房/包房/附属服务/租户用户及期间。同池必要空置、待机、封床、失败/取消/未到店任务的资源先进入池总量，再归属真实产出责任。名义容量、仅列空闲记录或删除关闭日均不能留下无责任负荷。跨期结转保留来源、接收期间及最终解决链接；责任未决阻断最终数据包。已归属目标总量只除以一次正值、严格同范围 N_target；已按参考流的记录不再除；N_target=0 时保留原始资源且不除。 |  |
| `complete_asset_life` | 资产、布草及供应商 | 采集建筑、床架/床垫、家具、设备、纺织品及可重复使用支撑物在全部用户和期间的完整制造、安装、装修、维护、实际更换及寿命终结。兼容寿命驱动量为已观察全用户历史加有来源的剩余生产等效服务，或实际终止总量；每个独立原生数量/等效量/单位/基准/方法/状态/时间/来源均保留，并记录不确定性、敏感性和更新。年度已入住 N_target 不是寿命。日历/容量时间驱动的可归属分子也须包含空闲责任；生产服务驱动须完整实际及有来源剩余使用并闭合全部负荷。采用完整资产/供应商覆盖，或排他补足缺失阶段，不能并用；完整链使用前，真实缺失阶段须已按原生量/来源/责任人/覆盖链接实际集成一次。 | pef-hotel-introduction-2026 |
| `material_stock_choice` | 独立供应的运营物料 | S=已归属期初+外部净收货-含保留回收物的期末，实际材料收货排除容器皮重。只能选择一种：总供给 S/N_target 输入并把实际匹配的未使用外退/N_target 单列输出；或仅消耗量 (S-matched_unused_return)/N_target 输入且省略该匹配退货输出。禁止把退货加到输入、重复扣减、无关负量抵销或自动给予避免生产收益。内部循环不是新外部供给；废耗材料保留原供给负荷。 |  |
| `fluid_provenance_fates` | 制冷剂供应、回收及出口 | 核对 opening_installed+opening_stored_total+new_factory_charge_entry+net_standalone_receipts+other_external_receipts 与 closing_installed+closing_stored_total+unused_external_returns+used_usable_export+contained_waste_export+retained_equipment_exit+independently_evidenced_direct_release+explicit_unknown。储存总量包含保留的回收子库存；回收是不可相加的审计视图，不能再加一份库存。批次/充注/角色 ID 排他；新出厂充注只在不属期初或其他收货时进入，其他收发排除所有已列项，内部充注/回收抵销。出厂充注生产由完整资产或明确缺失阶段补充覆盖一次。仅消耗扣减/省略只适用于有证据的同来源同状态未使用独立供给子库存及其匹配未使用退货。全部已使用回收液，无论原厂充注或后续补充，都按实际可用外转状态记录，不自动等同未使用新料，不扣减新料制造，不作负输入或自动收益。整机/部件/混合废物保留内容是不可相加视图，不另增液体出口。补充、回收或未解释差额既不能证明直接释放也不能证明零。 |  |
| `failed_and_reworked_routes` | 床位、房间、布草及清洁事件 | 实际不合格床位/房间/布草/清洁状态有原事件 ID 和有证据的重清洁/修理/再部署/可用转移/保留待定/废弃路线。重洗/重清洁消耗实际资源一次，但不构成新购纺织品或额外已接受床位夜。实际未交付或未决拒收服务不进 N_target；必要失败任务留在责任资源池。仅拒绝清洁不撤销已交付住宿。 |  |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_beds | shared_bed_service | occupied_bed_night and all service denominators | 实际床位空间与访客服务夜台账 | record_id; source_record_links; property_id; operator_id; case_id; reporting_period; resource_pool_id; physical_scope_id; all_consumer_records; attribution_owner; provider_coverage; overlap_exclusion; raw_converted_attributed_perreference_state; event_start; event_end; time_zone; UTC_offset_start; UTC_offset_end; DST_resolution; time_source; uncertainty; sensitivity; update_trigger; target_driver; target_driver_unit; target_driver_basis; target_driver_method; target_driver_state; target_driver_sample_time; target_driver_source; all_consumer_driver; all_consumer_driver_unit; all_consumer_driver_basis; all_consumer_driver_method; all_consumer_driver_state; all_consumer_driver_sample_time; all_consumer_driver_source; native_conversion_factor; native_conversion_factor_unit; native_conversion_factor_basis; native_conversion_factor_method; native_conversion_factor_state; native_conversion_factor_sample_time; native_conversion_factor_source; N_target; N_target_unit; N_target_basis; N_target_method; N_target_state; N_target_sample_time; N_target_source; fulfilled_bed_nights; fulfilled_bed_nights_unit; fulfilled_bed_nights_basis; fulfilled_bed_nights_method; fulfilled_bed_nights_state; fulfilled_bed_nights_sample_time; fulfilled_bed_nights_source; guest_nights; guest_nights_unit; guest_nights_basis; guest_nights_method; guest_nights_state; guest_nights_sample_time; guest_nights_source; actual_guest_count; actual_guest_count_unit; actual_guest_count_basis; actual_guest_count_method; actual_guest_count_state; actual_guest_count_sample_time; actual_guest_count_source; overnight_elapsed_duration; overnight_elapsed_duration_unit; overnight_elapsed_duration_basis; overnight_elapsed_duration_method; overnight_elapsed_duration_state; overnight_elapsed_duration_sample_time; overnight_elapsed_duration_source; bed_space_area; bed_space_area_unit; bed_space_area_basis; bed_space_area_method; bed_space_area_state; bed_space_area_sample_time; bed_space_area_source; room_shared_duration; room_shared_duration_unit; room_shared_duration_basis; room_shared_duration_method; room_shared_duration_state; room_shared_duration_sample_time; room_shared_duration_source; competing_output_quantity; competing_output_quantity_unit; competing_output_quantity_basis; competing_output_quantity_method; competing_output_quantity_state; competing_output_quantity_sample_time; competing_output_quantity_source; bed_id; bunk_id; upper_lower_berth; room_id; configuration_version; configuration_effective_start; configuration_effective_end; actual_plan_source; independently_bookable_inventory_source; shared_bed_or_whole_room_regime; visitor_purpose_source; guest_id; stay_id; delivered_bed_service_night_id; local_night_definition; local_night_source; actual_assignment_source; move_segment_ids; move_reversal_links; physical_fulfillment_source; complimentary_status; cleaning_declined_source; other_room_occupants; actual_status; all_intended_output_ids; output_handoff_records; necessary_idle_failure_pool_evidence; carry_source_record; carry_receiving_period; carry_final_resolution | N_target=按实际撤销及床位移动核对后唯一且实际履约的已入住单人铺位服务夜 ID 计数。须有实际访客、独立供给的单人睡眠铺位、真实床位/房间/配置分配、当地住宿夜惯例及实际入住退房/时区/UTC 偏移/DST 证据。房内仅有一名实际住客仍可保持按床位共享供给，不要求另一住客当夜在场。同一已履约床位服务夜中途换铺，保留一个服务 ID 及两段实际资源；真正额外独立交付的服务有不同 ID。独占整房包租、未使用备用床、预订、宾客容量、付费未到店及固定二十四小时（fixed24hours）均非本参考流。实际履约的免费入住仍承担资源责任，仅拒绝清洁不撤销已交付住宿。 执行不重叠物理床位空间/时间分配，整房包租期间识别为真实其他产出；不能把整房和其中床位同时当额外目标。枚举每种预期产出和交接、真实原生量及物理驱动，区别于可用转移/残余/废物。 优先使用实际任务/仪表直接追溯，或按该资源范围兼容原始量*target_driver/正值且完整的 all_consumer_driver 归属。枚举全部实际宿舍住客、私房/包房/附属服务/租户用户及期间。同池必要空置、待机、封床、失败/取消/未到店任务的资源先进入池总量，再归属真实产出责任。名义容量、仅列空闲记录或删除关闭日均不能留下无责任负荷。跨期结转保留来源、接收期间及最终解决链接；责任未决阻断最终数据包。已归属目标总量只除以一次正值、严格同范围 N_target；已按参考流的记录不再除；N_target=0 时保留原始资源且不除。 | 真实单人已入住床位夜 Item(s)，访客/计数/面积/时间和其他产出原生单位分别保留 | 每个实际事件、分配/任务/批次/测量/库存/生命周期区间 | 实际服务夜/任务/报告/库存及全寿命阶段，含来源-结转-接收-最终解决链接 | 实际床位/房间/物业及全部真实公共/私房/包房/其他用户和供应商/接收方 | 每参考流 | 每个独立原生操作数单位/基准/方法/状态/样品时间/来源、真实范围/校准/覆盖/不确定性；未知/不兼容数据阻断最终使用 |
| cp_utilities | shared_bed_service | electricity; purchased_useful_heat; water_supply | 实际对齐仪表与有效公用事业交付 | record_id; source_record_links; property_id; operator_id; case_id; reporting_period; resource_pool_id; physical_scope_id; all_consumer_records; attribution_owner; provider_coverage; overlap_exclusion; raw_converted_attributed_perreference_state; event_start; event_end; time_zone; UTC_offset_start; UTC_offset_end; DST_resolution; time_source; uncertainty; sensitivity; update_trigger; target_driver; target_driver_unit; target_driver_basis; target_driver_method; target_driver_state; target_driver_sample_time; target_driver_source; all_consumer_driver; all_consumer_driver_unit; all_consumer_driver_basis; all_consumer_driver_method; all_consumer_driver_state; all_consumer_driver_sample_time; all_consumer_driver_source; native_conversion_factor; native_conversion_factor_unit; native_conversion_factor_basis; native_conversion_factor_method; native_conversion_factor_state; native_conversion_factor_sample_time; native_conversion_factor_source; N_target; N_target_unit; N_target_basis; N_target_method; N_target_state; N_target_sample_time; N_target_source; register_start; register_start_unit; register_start_basis; register_start_method; register_start_state; register_start_sample_time; register_start_source; register_end; register_end_unit; register_end_basis; register_end_method; register_end_state; register_end_sample_time; register_end_source; register_adjustment; register_adjustment_unit; register_adjustment_basis; register_adjustment_method; register_adjustment_state; register_adjustment_sample_time; register_adjustment_source; meter_multiplier; meter_multiplier_unit; meter_multiplier_basis; meter_multiplier_method; meter_multiplier_state; meter_multiplier_sample_time; meter_multiplier_source; interval_quantity; interval_quantity_unit; interval_quantity_basis; interval_quantity_method; interval_quantity_state; interval_quantity_sample_time; interval_quantity_source; interval_average_power; interval_average_power_unit; interval_average_power_basis; interval_average_power_method; interval_average_power_state; interval_average_power_sample_time; interval_average_power_source; elapsed_duration; elapsed_duration_unit; elapsed_duration_basis; elapsed_duration_method; elapsed_duration_state; elapsed_duration_sample_time; elapsed_duration_source; density; density_unit; density_basis; density_method; density_state; density_sample_time; density_source; density_temperature; density_temperature_unit; density_temperature_basis; density_temperature_method; density_temperature_state; density_temperature_sample_time; density_temperature_source; thermal_delivery_temperature; thermal_delivery_temperature_unit; thermal_delivery_temperature_basis; thermal_delivery_temperature_method; thermal_delivery_temperature_state; thermal_delivery_temperature_sample_time; thermal_delivery_temperature_source; utility_identity; source_or_provider_id; meter_id; meter_interval; calibration_source; valid_version; reset_rollover_source; already_applied_factor; dorm_room_shared_lighting_HVAC_scope; bed_outlet_scope; bathroom_hotwater_scope; guest_kitchen_appliance_scope; useful_thermal_delivery_gate; provider_loss_asset_scope; flow_row_id; actual_identity_case; actual_substance_or_material; actual_origin_and_medium; actual_state_and_gate; case_activation_evidence; typed_or_residual_quantity; quantity_exclusion_links; whole_total_reconciliation; unresolved_occurrence_not_zero | 采用实际兼容表差加有来源的复位/回卷调整和仪表因子，或实际区间量，不能并用。区间平均功率*匹配经过时间须含循环/待机并有来源转换，不用铭牌或瞬时功率。已积分 kWh 不再乘时间。共享房间暖通/照明、公共厨房/浴室即使未单独计量仍属真实资源；采集完整兼容用户和有证据驱动，不默认名义床位均分。购入有效热冷保留交付状态/供应商损失资产，不重复底层载能体/设备。供水不是污水。 优先使用实际任务/仪表直接追溯，或按该资源范围兼容原始量*target_driver/正值且完整的 all_consumer_driver 归属。枚举全部实际宿舍住客、私房/包房/附属服务/租户用户及期间。同池必要空置、待机、封床、失败/取消/未到店任务的资源先进入池总量，再归属真实产出责任。名义容量、仅列空闲记录或删除关闭日均不能留下无责任负荷。跨期结转保留来源、接收期间及最终解决链接；责任未决阻断最终数据包。已归属目标总量只除以一次正值、严格同范围 N_target；已按参考流的记录不再除；N_target=0 时保留原始资源且不除。 | 原生 kWh/MJ 或实际有效热冷单位、供水 m3 及独立原生转换/物理驱动 | 每个实际事件、分配/任务/批次/测量/库存/生命周期区间 | 实际服务夜/任务/报告/库存及全寿命阶段，含来源-结转-接收-最终解决链接 | 实际床位/房间/物业及全部真实公共/私房/包房/其他用户和供应商/接收方 | 每参考流 | 每个独立原生操作数单位/基准/方法/状态/样品时间/来源、真实范围/校准/覆盖/不确定性；未知/不兼容数据阻断最终使用 |
| cp_supplies | shared_bed_service | operating_materials; actual_fuels; unused_supply_returns | 实际原生材料与燃料库存 | record_id; source_record_links; property_id; operator_id; case_id; reporting_period; resource_pool_id; physical_scope_id; all_consumer_records; attribution_owner; provider_coverage; overlap_exclusion; raw_converted_attributed_perreference_state; event_start; event_end; time_zone; UTC_offset_start; UTC_offset_end; DST_resolution; time_source; uncertainty; sensitivity; update_trigger; target_driver; target_driver_unit; target_driver_basis; target_driver_method; target_driver_state; target_driver_sample_time; target_driver_source; all_consumer_driver; all_consumer_driver_unit; all_consumer_driver_basis; all_consumer_driver_method; all_consumer_driver_state; all_consumer_driver_sample_time; all_consumer_driver_source; native_conversion_factor; native_conversion_factor_unit; native_conversion_factor_basis; native_conversion_factor_method; native_conversion_factor_state; native_conversion_factor_sample_time; native_conversion_factor_source; N_target; N_target_unit; N_target_basis; N_target_method; N_target_state; N_target_sample_time; N_target_source; opening; opening_unit; opening_basis; opening_method; opening_state; opening_sample_time; opening_source; receipt_gross; receipt_gross_unit; receipt_gross_basis; receipt_gross_method; receipt_gross_state; receipt_gross_sample_time; receipt_gross_source; container_tare; container_tare_unit; container_tare_basis; container_tare_method; container_tare_state; container_tare_sample_time; container_tare_source; net_external_receipts; net_external_receipts_unit; net_external_receipts_basis; net_external_receipts_method; net_external_receipts_state; net_external_receipts_sample_time; net_external_receipts_source; closing_including_recovery; closing_including_recovery_unit; closing_including_recovery_basis; closing_including_recovery_method; closing_including_recovery_state; closing_including_recovery_sample_time; closing_including_recovery_source; matched_unused_return; matched_unused_return_unit; matched_unused_return_basis; matched_unused_return_method; matched_unused_return_state; matched_unused_return_sample_time; matched_unused_return_source; material_used; material_used_unit; material_used_basis; material_used_method; material_used_state; material_used_sample_time; material_used_source; fuel_burn; fuel_burn_unit; fuel_burn_basis; fuel_burn_method; fuel_burn_state; fuel_burn_sample_time; fuel_burn_source; per_item_mass; per_item_mass_unit; per_item_mass_basis; per_item_mass_method; per_item_mass_state; per_item_mass_sample_time; per_item_mass_source; item_count; item_count_unit; item_count_basis; item_count_method; item_count_state; item_count_sample_time; item_count_source; density; density_unit; density_basis; density_method; density_state; density_sample_time; density_source; density_temperature; density_temperature_unit; density_temperature_basis; density_temperature_method; density_temperature_state; density_temperature_sample_time; density_temperature_source; composition_fraction; composition_fraction_unit; composition_fraction_basis; composition_fraction_method; composition_fraction_state; composition_fraction_sample_time; composition_fraction_source; material_SKU; formulation_identity; material_use; stock_scope; EACH_TOTAL_extent; actual_recipe_source_if_used; concentrate_prepared_solution_nonadditive_view; unused_return_input_match; return_receiver; stock_convention; internal_transfer_ids; provider_included_supplies_scope; flow_row_id; actual_identity_case; actual_substance_or_material; actual_origin_and_medium; actual_state_and_gate; case_activation_evidence; typed_or_residual_quantity; quantity_exclusion_links; whole_total_reconciliation; unresolved_occurrence_not_zero | S=已归属期初+外部净收货-含保留回收物的期末，实际材料收货排除容器皮重。只能选择一种：总供给 S/N_target 输入并把实际匹配的未使用外退/N_target 单列输出；或仅消耗量 (S-matched_unused_return)/N_target 输入且省略该匹配退货输出。禁止把退货加到输入、重复扣减、无关负量抵销或自动给予避免生产收益。内部循环不是新外部供给；废耗材料保留原供给负荷。 每种真实 SKU/配方及用途分别展开。成品溶液与浓缩液+稀释水/活性组分是不可相加视图；购入溶液含水不再作为额外水输入。EACH 乘实际次数一次，TOTAL 不变；密度温度/组成和单件转换仅在独立有来源且兼容时使用。燃料供给与实测燃烧分开，不推定等级/锅炉/发电机。 优先使用实际任务/仪表直接追溯，或按该资源范围兼容原始量*target_driver/正值且完整的 all_consumer_driver 归属。枚举全部实际宿舍住客、私房/包房/附属服务/租户用户及期间。同池必要空置、待机、封床、失败/取消/未到店任务的资源先进入池总量，再归属真实产出责任。名义容量、仅列空闲记录或删除关闭日均不能留下无责任负荷。跨期结转保留来源、接收期间及最终解决链接；责任未决阻断最终数据包。已归属目标总量只除以一次正值、严格同范围 N_target；已按参考流的记录不再除；N_target=0 时保留原始资源且不除。 | 真实原生材料/燃料质量、体积、计数及适用组分；kg 须有支持转换 | 每个实际事件、分配/任务/批次/测量/库存/生命周期区间 | 实际服务夜/任务/报告/库存及全寿命阶段，含来源-结转-接收-最终解决链接 | 实际床位/房间/物业及全部真实公共/私房/包房/其他用户和供应商/接收方 | 每参考流 | 每个独立原生操作数单位/基准/方法/状态/样品时间/来源、真实范围/校准/覆盖/不确定性；未知/不兼容数据阻断最终使用 |
| cp_linen | shared_bed_service | laundry_service | 实际完成洗衣批次与纺织品状态 | record_id; source_record_links; property_id; operator_id; case_id; reporting_period; resource_pool_id; physical_scope_id; all_consumer_records; attribution_owner; provider_coverage; overlap_exclusion; raw_converted_attributed_perreference_state; event_start; event_end; time_zone; UTC_offset_start; UTC_offset_end; DST_resolution; time_source; uncertainty; sensitivity; update_trigger; target_driver; target_driver_unit; target_driver_basis; target_driver_method; target_driver_state; target_driver_sample_time; target_driver_source; all_consumer_driver; all_consumer_driver_unit; all_consumer_driver_basis; all_consumer_driver_method; all_consumer_driver_state; all_consumer_driver_sample_time; all_consumer_driver_source; native_conversion_factor; native_conversion_factor_unit; native_conversion_factor_basis; native_conversion_factor_method; native_conversion_factor_state; native_conversion_factor_sample_time; native_conversion_factor_source; N_target; N_target_unit; N_target_basis; N_target_method; N_target_state; N_target_sample_time; N_target_source; dry_textile_mass_processed; dry_textile_mass_processed_unit; dry_textile_mass_processed_basis; dry_textile_mass_processed_method; dry_textile_mass_processed_state; dry_textile_mass_processed_sample_time; dry_textile_mass_processed_source; conditioned_textile_mass; conditioned_textile_mass_unit; conditioned_textile_mass_basis; conditioned_textile_mass_method; conditioned_textile_mass_state; conditioned_textile_mass_sample_time; conditioned_textile_mass_source; wet_cargo_mass; wet_cargo_mass_unit; wet_cargo_mass_basis; wet_cargo_mass_method; wet_cargo_mass_state; wet_cargo_mass_sample_time; wet_cargo_mass_source; container_tare; container_tare_unit; container_tare_basis; container_tare_method; container_tare_state; container_tare_sample_time; container_tare_source; water_mass; water_mass_unit; water_mass_basis; water_mass_method; water_mass_state; water_mass_sample_time; water_mass_source; as_received_sample_mass; as_received_sample_mass_unit; as_received_sample_mass_basis; as_received_sample_mass_method; as_received_sample_mass_state; as_received_sample_mass_sample_time; as_received_sample_mass_source; wet_water_fraction; wet_water_fraction_unit; wet_water_fraction_basis; wet_water_fraction_method; wet_water_fraction_state; wet_water_fraction_sample_time; wet_water_fraction_source; dry_water_ratio; dry_water_ratio_unit; dry_water_ratio_basis; dry_water_ratio_method; dry_water_ratio_state; dry_water_ratio_sample_time; dry_water_ratio_source; percent_to_ratio_factor; percent_to_ratio_factor_unit; percent_to_ratio_factor_basis; percent_to_ratio_factor_method; percent_to_ratio_factor_state; percent_to_ratio_factor_sample_time; percent_to_ratio_factor_source; rewash_quantity; rewash_quantity_unit; rewash_quantity_basis; rewash_quantity_method; rewash_quantity_state; rewash_quantity_sample_time; rewash_quantity_source; returned_textile_quantity; returned_textile_quantity_unit; returned_textile_quantity_basis; returned_textile_quantity_method; returned_textile_quantity_state; returned_textile_quantity_sample_time; returned_textile_quantity_source; unresolved_linen_difference; unresolved_linen_difference_unit; unresolved_linen_difference_basis; unresolved_linen_difference_method; unresolved_linen_difference_state; unresolved_linen_difference_sample_time; unresolved_linen_difference_source; linen_pool_id; textile_item_ids; provider_id; batch_id; task_id; transfer_id; served_bed_stay_links; dry_mass_definition; sample_id; conditioning_method; sample_population; water_only_definition_source; other_volatile_soil_exclusion; wash_dry_finish_scope; energy_water_chemicals_effluent_scope; rental_textile_asset_freight_treatment_scope; complete_all_client_records; completed_missing_duty_links; rewash_parent_event | 测量实际完成干纺织品服务处理量或有支持的真实原生供应商服务结果。不把湿货运、污/调湿质量等同清洁干布草，不每洗一次制造新纺织品。同样品仅水定义 w_wet=water/as_received、r_dry=water/nonwater，在有来源百分数转比例后 w_wet=r_dry/(1+r_dry)；含其他挥发物的干燥失重不是水，非水物也不自动是清洁纤维。重洗/失败任务保留资源但不增加住宿产出。供应商实际洗/干/整理、水、能源、化学品、污水、运输、设备全寿命及租赁纺织品寿命覆盖一次，或实际补足缺失义务一次。住客自助洗衣存在不证明运营布草路线；真实独立工业洗衣须已复核扩展。 优先使用实际任务/仪表直接追溯，或按该资源范围兼容原始量*target_driver/正值且完整的 all_consumer_driver 归属。枚举全部实际宿舍住客、私房/包房/附属服务/租户用户及期间。同池必要空置、待机、封床、失败/取消/未到店任务的资源先进入池总量，再归属真实产出责任。名义容量、仅列空闲记录或删除关闭日均不能留下无责任负荷。跨期结转保留来源、接收期间及最终解决链接；责任未决阻断最终数据包。已归属目标总量只除以一次正值、严格同范围 N_target；已按参考流的记录不再除；N_target=0 时保留原始资源且不除。 | 实际干纺织品 kg 或有支持供应商原生单位；湿/调湿/样品和货运状态独立 | 每个实际事件、分配/任务/批次/测量/库存/生命周期区间 | 实际服务夜/任务/报告/库存及全寿命阶段，含来源-结转-接收-最终解决链接 | 实际床位/房间/物业及全部真实公共/私房/包房/其他用户和供应商/接收方 | 每参考流 | 每个独立原生操作数单位/基准/方法/状态/样品时间/来源、真实范围/校准/覆盖/不确定性；未知/不兼容数据阻断最终使用 |
| cp_assets | shared_bed_service | linen_lifetime; building_bed_assets; usable_asset_exports; retired_linen; retired_equipment | 完整全用户资产与生命周期事件 | record_id; source_record_links; property_id; operator_id; case_id; reporting_period; resource_pool_id; physical_scope_id; all_consumer_records; attribution_owner; provider_coverage; overlap_exclusion; raw_converted_attributed_perreference_state; event_start; event_end; time_zone; UTC_offset_start; UTC_offset_end; DST_resolution; time_source; uncertainty; sensitivity; update_trigger; target_driver; target_driver_unit; target_driver_basis; target_driver_method; target_driver_state; target_driver_sample_time; target_driver_source; all_consumer_driver; all_consumer_driver_unit; all_consumer_driver_basis; all_consumer_driver_method; all_consumer_driver_state; all_consumer_driver_sample_time; all_consumer_driver_source; native_conversion_factor; native_conversion_factor_unit; native_conversion_factor_basis; native_conversion_factor_method; native_conversion_factor_state; native_conversion_factor_sample_time; native_conversion_factor_source; N_target; N_target_unit; N_target_basis; N_target_method; N_target_state; N_target_sample_time; N_target_source; asset_native_quantity; asset_native_quantity_unit; asset_native_quantity_basis; asset_native_quantity_method; asset_native_quantity_state; asset_native_quantity_sample_time; asset_native_quantity_source; component_native_quantity; component_native_quantity_unit; component_native_quantity_basis; component_native_quantity_method; component_native_quantity_state; component_native_quantity_sample_time; component_native_quantity_source; job_used_driver; job_used_driver_unit; job_used_driver_basis; job_used_driver_method; job_used_driver_state; job_used_driver_sample_time; job_used_driver_source; observed_life_driver; observed_life_driver_unit; observed_life_driver_basis; observed_life_driver_method; observed_life_driver_state; observed_life_driver_sample_time; observed_life_driver_source; remaining_life_driver; remaining_life_driver_unit; remaining_life_driver_basis; remaining_life_driver_method; remaining_life_driver_state; remaining_life_driver_sample_time; remaining_life_driver_source; lifetime_all_user_driver; lifetime_all_user_driver_unit; lifetime_all_user_driver_basis; lifetime_all_user_driver_method; lifetime_all_user_driver_state; lifetime_all_user_driver_sample_time; lifetime_all_user_driver_source; driver_equivalence_factor; driver_equivalence_factor_unit; driver_equivalence_factor_basis; driver_equivalence_factor_method; driver_equivalence_factor_state; driver_equivalence_factor_sample_time; driver_equivalence_factor_source; retirement_net_mass; retirement_net_mass_unit; retirement_net_mass_basis; retirement_net_mass_method; retirement_net_mass_state; retirement_net_mass_sample_time; retirement_net_mass_source; usable_transfer_net_mass; usable_transfer_net_mass_unit; usable_transfer_net_mass_basis; usable_transfer_net_mass_method; usable_transfer_net_mass_state; usable_transfer_net_mass_sample_time; usable_transfer_net_mass_source; retained_component_quantity; retained_component_quantity_unit; retained_component_quantity_basis; retained_component_quantity_method; retained_component_quantity_state; retained_component_quantity_sample_time; retained_component_quantity_source; asset_id; component_id; asset_BOM_source; bed_mattress_locker_equipment_role; actual_room_bed_membership; manufacture_install_scope; maintenance_replacement_event_ids; EOL_scope; all_user_all_period_records; observed_history_source; remaining_life_source; actual_termination_source; idle_responsibility_in_numerators; equivalence_method_source; provider_rental_overlap; usable_or_waste_receiver; remaining_life_transfer_owner; whole_component_nonadditive_links; already_covered_EOL_transport_treatment; carry_source_record; carry_receiving_period; carry_final_resolution | 采集建筑、床架/床垫、家具、设备、纺织品及可重复使用支撑物在全部用户和期间的完整制造、安装、装修、维护、实际更换及寿命终结。兼容寿命驱动量为已观察全用户历史加有来源的剩余生产等效服务，或实际终止总量；每个独立原生数量/等效量/单位/基准/方法/状态/时间/来源均保留，并记录不确定性、敏感性和更新。年度已入住 N_target 不是寿命。日历/容量时间驱动的可归属分子也须包含空闲责任；生产服务驱动须完整实际及有来源剩余使用并闭合全部负荷。采用完整资产/供应商覆盖，或排他补足缺失阶段，不能并用；完整链使用前，真实缺失阶段须已按原生量/来源/责任人/覆盖链接实际集成一次。 实际床/床垫/储物柜份额跟随真实床房配置与时间，不是每入住夜制造。纺织品寿命与洗涤操作区分；租赁已覆盖制造/维护/寿命终结时不再直接计布草资产。真实可用外转/退役按各自接收状态与剩余寿命责任；整资产和部件视图不可相加，不自动给予回收收益。 优先使用实际任务/仪表直接追溯，或按该资源范围兼容原始量*target_driver/正值且完整的 all_consumer_driver 归属。枚举全部实际宿舍住客、私房/包房/附属服务/租户用户及期间。同池必要空置、待机、封床、失败/取消/未到店任务的资源先进入池总量，再归属真实产出责任。名义容量、仅列空闲记录或删除关闭日均不能留下无责任负荷。跨期结转保留来源、接收期间及最终解决链接；责任未决阻断最终数据包。已归属目标总量只除以一次正值、严格同范围 N_target；已按参考流的记录不再除；N_target=0 时保留原始资源且不除。 | 实际原生资产/部件和兼容使用/历史/剩余/寿命驱动单位；Item(s) 资产等效须有证据 | 每个实际事件、分配/任务/批次/测量/库存/生命周期区间 | 实际服务夜/任务/报告/库存及全寿命阶段，含来源-结转-接收-最终解决链接 | 实际床位/房间/物业及全部真实公共/私房/包房/其他用户和供应商/接收方 | 每参考流 | 每个独立原生操作数单位/基准/方法/状态/样品时间/来源、真实范围/校准/覆盖/不确定性；未知/不兼容数据阻断最终使用 |
| cp_tasks | shared_bed_service | 运行任务与床位/布草去向 | 实际连续任务及周转/重清洁事件 | record_id; source_record_links; property_id; operator_id; case_id; reporting_period; resource_pool_id; physical_scope_id; all_consumer_records; attribution_owner; provider_coverage; overlap_exclusion; raw_converted_attributed_perreference_state; event_start; event_end; time_zone; UTC_offset_start; UTC_offset_end; DST_resolution; time_source; uncertainty; sensitivity; update_trigger; target_driver; target_driver_unit; target_driver_basis; target_driver_method; target_driver_state; target_driver_sample_time; target_driver_source; all_consumer_driver; all_consumer_driver_unit; all_consumer_driver_basis; all_consumer_driver_method; all_consumer_driver_state; all_consumer_driver_sample_time; all_consumer_driver_source; native_conversion_factor; native_conversion_factor_unit; native_conversion_factor_basis; native_conversion_factor_method; native_conversion_factor_state; native_conversion_factor_sample_time; native_conversion_factor_source; N_target; N_target_unit; N_target_basis; N_target_method; N_target_state; N_target_sample_time; N_target_source; performed_task_quantity; performed_task_quantity_unit; performed_task_quantity_basis; performed_task_quantity_method; performed_task_quantity_state; performed_task_quantity_sample_time; performed_task_quantity_source; task_duration; task_duration_unit; task_duration_basis; task_duration_method; task_duration_state; task_duration_sample_time; task_duration_source; cleaned_area; cleaned_area_unit; cleaned_area_basis; cleaned_area_method; cleaned_area_state; cleaned_area_sample_time; cleaned_area_source; actual_repeat_count; actual_repeat_count_unit; actual_repeat_count_basis; actual_repeat_count_method; actual_repeat_count_state; actual_repeat_count_sample_time; actual_repeat_count_source; served_bed_nights; served_bed_nights_unit; served_bed_nights_basis; served_bed_nights_method; served_bed_nights_state; served_bed_nights_sample_time; served_bed_nights_source; reclean_material_quantity; reclean_material_quantity_unit; reclean_material_quantity_basis; reclean_material_quantity_method; reclean_material_quantity_state; reclean_material_quantity_sample_time; reclean_material_quantity_source; task_id; task_kind; original_task_id; batch_or_continuous_interval; bed_room_stay_links; scheduled_performed_declined_failed_status; offspec_room_linen_state; actual_reclean_repair_redeploy_return_discard_decision; receiver_or_next_use_link; provider_direct_scope | 每项实际出入/响应/房间公共/床位周转/清洁/维护/布草任务链接真实床位/房间/入住及期间。连续服务与实际任务批次重叠，不规定每日清洁或每夜相同一次周转。重清洁/修理/再用/退回/保留待定/废弃按实际状态证据及父 ID 决定，不能把污迹/气味/失踪自动当废物。必要失败任务保留原负荷，不产生已接受床位夜；仅拒绝清洁不取消实际履约住宿。 优先使用实际任务/仪表直接追溯，或按该资源范围兼容原始量*target_driver/正值且完整的 all_consumer_driver 归属。枚举全部实际宿舍住客、私房/包房/附属服务/租户用户及期间。同池必要空置、待机、封床、失败/取消/未到店任务的资源先进入池总量，再归属真实产出责任。名义容量、仅列空闲记录或删除关闭日均不能留下无责任负荷。跨期结转保留来源、接收期间及最终解决链接；责任未决阻断最终数据包。已归属目标总量只除以一次正值、严格同范围 N_target；已按参考流的记录不再除；N_target=0 时保留原始资源且不除。 | 真实原生已执行结果/计数/面积/时间及独立有来源兼容转换 | 每个实际事件、分配/任务/批次/测量/库存/生命周期区间 | 实际服务夜/任务/报告/库存及全寿命阶段，含来源-结转-接收-最终解决链接 | 实际床位/房间/物业及全部真实公共/私房/包房/其他用户和供应商/接收方 | 每参考流 | 每个独立原生操作数单位/基准/方法/状态/样品时间/来源、真实范围/校准/覆盖/不确定性；未知/不兼容数据阻断最终使用 |
| cp_providers | shared_bed_service | contracted_support; included_ancillary_service | 已完成物理供应商及包内附属义务 | record_id; source_record_links; property_id; operator_id; case_id; reporting_period; resource_pool_id; physical_scope_id; all_consumer_records; attribution_owner; provider_coverage; overlap_exclusion; raw_converted_attributed_perreference_state; event_start; event_end; time_zone; UTC_offset_start; UTC_offset_end; DST_resolution; time_source; uncertainty; sensitivity; update_trigger; target_driver; target_driver_unit; target_driver_basis; target_driver_method; target_driver_state; target_driver_sample_time; target_driver_source; all_consumer_driver; all_consumer_driver_unit; all_consumer_driver_basis; all_consumer_driver_method; all_consumer_driver_state; all_consumer_driver_sample_time; all_consumer_driver_source; native_conversion_factor; native_conversion_factor_unit; native_conversion_factor_basis; native_conversion_factor_method; native_conversion_factor_state; native_conversion_factor_sample_time; native_conversion_factor_source; N_target; N_target_unit; N_target_basis; N_target_method; N_target_state; N_target_sample_time; N_target_source; actual_native_service_quantity; actual_native_service_quantity_unit; actual_native_service_quantity_basis; actual_native_service_quantity_method; actual_native_service_quantity_state; actual_native_service_quantity_sample_time; actual_native_service_quantity_source; physical_equivalence_factor; physical_equivalence_factor_unit; physical_equivalence_factor_basis; physical_equivalence_factor_method; physical_equivalence_factor_state; physical_equivalence_factor_sample_time; physical_equivalence_factor_source; completed_missing_quantity; completed_missing_quantity_unit; completed_missing_quantity_basis; completed_missing_quantity_method; completed_missing_quantity_state; completed_missing_quantity_sample_time; completed_missing_quantity_source; actual_meal_quantity; actual_meal_quantity_unit; actual_meal_quantity_basis; actual_meal_quantity_method; actual_meal_quantity_state; actual_meal_quantity_sample_time; actual_meal_quantity_source; actual_activity_quantity; actual_activity_quantity_unit; actual_activity_quantity_basis; actual_activity_quantity_method; actual_activity_quantity_state; actual_activity_quantity_sample_time; actual_activity_quantity_source; unused_included_service_obligation; unused_included_service_obligation_unit; unused_included_service_obligation_basis; unused_included_service_obligation_method; unused_included_service_obligation_state; unused_included_service_obligation_sample_time; unused_included_service_obligation_source; provider_id; contract_package_id; actual_completed_task_ids; actual_package_inclusion_source; physical_native_unit_definition; quality_and_service_scope; actual_use_availability_obligation_basis; included_meal_ingredient_cooking_waste_coverage; included_activity_transport_asset_scope; materials_energy_water_assets_freight_receiver_matrix; complete_all_client_records; raw_already_converted_attributed_state; operator_direct_overlap; missing_stage_ids; completed_integration_dataset_link; integration_time; integration_time_zone; integration_source; integration_owner; integration_coverage_once; reviewed_kitchen_route_if_direct | 取得实际交付物理服务及实际包内义务的原生单位/质量/等效，不把薪酬、收费、预订或费用份额当 Item(s)。完整供应商或匹配底层操作只计一次。实际包内餐食须包含食物生产、制作、能源/水、食物废物、设备及运输；单列服务标签不删除这些义务。使用前须完整有证据供应商或完成已复核实际厨房/生产路线扩展；餐厅或促销存在不证明每份预订都含餐。真实包内活动/公共使用也保留供给义务及完整全用户责任。真实缺失阶段须按已完成原生量/来源/时间/责任人/覆盖链接实际集成一次；计划不是完成。 优先使用实际任务/仪表直接追溯，或按该资源范围兼容原始量*target_driver/正值且完整的 all_consumer_driver 归属。枚举全部实际宿舍住客、私房/包房/附属服务/租户用户及期间。同池必要空置、待机、封床、失败/取消/未到店任务的资源先进入池总量，再归属真实产出责任。名义容量、仅列空闲记录或删除关闭日均不能留下无责任负荷。跨期结转保留来源、接收期间及最终解决链接；责任未决阻断最终数据包。已归属目标总量只除以一次正值、严格同范围 N_target；已按参考流的记录不再除；N_target=0 时保留原始资源且不除。 | 实际供应商/餐食/活动原生物理单位及有支持等效；Count Item(s) 仅在真实已定义且兼容时 | 每个实际事件、分配/任务/批次/测量/库存/生命周期区间 | 实际服务夜/任务/报告/库存及全寿命阶段，含来源-结转-接收-最终解决链接 | 实际床位/房间/物业及全部真实公共/私房/包房/其他用户和供应商/接收方 | 每参考流 | 每个独立原生操作数单位/基准/方法/状态/样品时间/来源、真实范围/校准/覆盖/不确定性；未知/不兼容数据阻断最终使用 |
| cp_refrigerants | shared_bed_service | refrigerant_supply; recovered_fluid_exports; contained_refrigerant_waste | 排他的实际制冷剂来源库存与去向角色 | record_id; source_record_links; property_id; operator_id; case_id; reporting_period; resource_pool_id; physical_scope_id; all_consumer_records; attribution_owner; provider_coverage; overlap_exclusion; raw_converted_attributed_perreference_state; event_start; event_end; time_zone; UTC_offset_start; UTC_offset_end; DST_resolution; time_source; uncertainty; sensitivity; update_trigger; target_driver; target_driver_unit; target_driver_basis; target_driver_method; target_driver_state; target_driver_sample_time; target_driver_source; all_consumer_driver; all_consumer_driver_unit; all_consumer_driver_basis; all_consumer_driver_method; all_consumer_driver_state; all_consumer_driver_sample_time; all_consumer_driver_source; native_conversion_factor; native_conversion_factor_unit; native_conversion_factor_basis; native_conversion_factor_method; native_conversion_factor_state; native_conversion_factor_sample_time; native_conversion_factor_source; N_target; N_target_unit; N_target_basis; N_target_method; N_target_state; N_target_sample_time; N_target_source; opening_installed; opening_installed_unit; opening_installed_basis; opening_installed_method; opening_installed_state; opening_installed_sample_time; opening_installed_source; opening_stored_total; opening_stored_total_unit; opening_stored_total_basis; opening_stored_total_method; opening_stored_total_state; opening_stored_total_sample_time; opening_stored_total_source; new_factory_charge_entry; new_factory_charge_entry_unit; new_factory_charge_entry_basis; new_factory_charge_entry_method; new_factory_charge_entry_state; new_factory_charge_entry_sample_time; new_factory_charge_entry_source; net_standalone_receipts; net_standalone_receipts_unit; net_standalone_receipts_basis; net_standalone_receipts_method; net_standalone_receipts_state; net_standalone_receipts_sample_time; net_standalone_receipts_source; other_external_receipts; other_external_receipts_unit; other_external_receipts_basis; other_external_receipts_method; other_external_receipts_state; other_external_receipts_sample_time; other_external_receipts_source; closing_installed; closing_installed_unit; closing_installed_basis; closing_installed_method; closing_installed_state; closing_installed_sample_time; closing_installed_source; closing_stored_total; closing_stored_total_unit; closing_stored_total_basis; closing_stored_total_method; closing_stored_total_state; closing_stored_total_sample_time; closing_stored_total_source; unused_external_returns; unused_external_returns_unit; unused_external_returns_basis; unused_external_returns_method; unused_external_returns_state; unused_external_returns_sample_time; unused_external_returns_source; used_usable_export; used_usable_export_unit; used_usable_export_basis; used_usable_export_method; used_usable_export_state; used_usable_export_sample_time; used_usable_export_source; contained_waste_export; contained_waste_export_unit; contained_waste_export_basis; contained_waste_export_method; contained_waste_export_state; contained_waste_export_sample_time; contained_waste_export_source; retained_equipment_exit; retained_equipment_exit_unit; retained_equipment_exit_basis; retained_equipment_exit_method; retained_equipment_exit_state; retained_equipment_exit_sample_time; retained_equipment_exit_source; independently_evidenced_direct_release; independently_evidenced_direct_release_unit; independently_evidenced_direct_release_basis; independently_evidenced_direct_release_method; independently_evidenced_direct_release_state; independently_evidenced_direct_release_sample_time; independently_evidenced_direct_release_source; explicit_unknown; explicit_unknown_unit; explicit_unknown_basis; explicit_unknown_method; explicit_unknown_state; explicit_unknown_sample_time; explicit_unknown_source; opening_unused; opening_unused_unit; opening_unused_basis; opening_unused_method; opening_unused_state; opening_unused_sample_time; opening_unused_source; closing_unused; closing_unused_unit; closing_unused_basis; closing_unused_method; closing_unused_state; closing_unused_sample_time; closing_unused_source; retained_recovery_nonadditive; retained_recovery_nonadditive_unit; retained_recovery_nonadditive_basis; retained_recovery_nonadditive_method; retained_recovery_nonadditive_state; retained_recovery_nonadditive_sample_time; retained_recovery_nonadditive_source; blend_component_fraction; blend_component_fraction_unit; blend_component_fraction_basis; blend_component_fraction_method; blend_component_fraction_state; blend_component_fraction_sample_time; blend_component_fraction_source; system_id; chemical_or_blend_identity; composition_basis_source; lot_charge_role_ids; exclusive_stock_membership; factory_entry_opening_receipt_exclusion; other_receipt_exit_exclusion_ids; initial_charge_production_owner; unused_same_source_state_substock_evidence; matched_unused_return_id; used_recovery_transfer_ids; actual_used_export_state_source; internal_charge_recovery_ids; receiver_and_useful_acceptance; whole_part_mixed_content_exclusion; transport_treatment_provider_scope | 核对 opening_installed+opening_stored_total+new_factory_charge_entry+net_standalone_receipts+other_external_receipts 与 closing_installed+closing_stored_total+unused_external_returns+used_usable_export+contained_waste_export+retained_equipment_exit+independently_evidenced_direct_release+explicit_unknown。储存总量包含保留的回收子库存；回收是不可相加的审计视图，不能再加一份库存。批次/充注/角色 ID 排他；新出厂充注只在不属期初或其他收货时进入，其他收发排除所有已列项，内部充注/回收抵销。出厂充注生产由完整资产或明确缺失阶段补充覆盖一次。仅消耗扣减/省略只适用于有证据的同来源同状态未使用独立供给子库存及其匹配未使用退货。全部已使用回收液，无论原厂充注或后续补充，都按实际可用外转状态记录，不自动等同未使用新料，不扣减新料制造，不作负输入或自动收益。整机/部件/混合废物保留内容是不可相加视图，不另增液体出口。补充、回收或未解释差额既不能证明直接释放也不能证明零。 优先使用实际任务/仪表直接追溯，或按该资源范围兼容原始量*target_driver/正值且完整的 all_consumer_driver 归属。枚举全部实际宿舍住客、私房/包房/附属服务/租户用户及期间。同池必要空置、待机、封床、失败/取消/未到店任务的资源先进入池总量，再归属真实产出责任。名义容量、仅列空闲记录或删除关闭日均不能留下无责任负荷。跨期结转保留来源、接收期间及最终解决链接；责任未决阻断最终数据包。已归属目标总量只除以一次正值、严格同范围 N_target；已按参考流的记录不再除；N_target=0 时保留原始资源且不除。 | 实际化学物/混合物/组分原生质量和状态，不假定制冷剂或泄漏因子 | 每个实际事件、分配/任务/批次/测量/库存/生命周期区间 | 实际服务夜/任务/报告/库存及全寿命阶段，含来源-结转-接收-最终解决链接 | 实际床位/房间/物业及全部真实公共/私房/包房/其他用户和供应商/接收方 | 每参考流 | 每个独立原生操作数单位/基准/方法/状态/样品时间/来源、真实范围/校准/覆盖/不确定性；未知/不兼容数据阻断最终使用 |
| cp_freight | shared_bed_service | freight | 唯一实际带包装载荷路段及其自身份额 | record_id; source_record_links; property_id; operator_id; case_id; reporting_period; resource_pool_id; physical_scope_id; all_consumer_records; attribution_owner; provider_coverage; overlap_exclusion; raw_converted_attributed_perreference_state; event_start; event_end; time_zone; UTC_offset_start; UTC_offset_end; DST_resolution; time_source; uncertainty; sensitivity; update_trigger; target_driver; target_driver_unit; target_driver_basis; target_driver_method; target_driver_state; target_driver_sample_time; target_driver_source; all_consumer_driver; all_consumer_driver_unit; all_consumer_driver_basis; all_consumer_driver_method; all_consumer_driver_state; all_consumer_driver_sample_time; all_consumer_driver_source; native_conversion_factor; native_conversion_factor_unit; native_conversion_factor_basis; native_conversion_factor_method; native_conversion_factor_state; native_conversion_factor_sample_time; native_conversion_factor_source; N_target; N_target_unit; N_target_basis; N_target_method; N_target_state; N_target_sample_time; N_target_source; payload; payload_unit; payload_basis; payload_method; payload_state; payload_sample_time; payload_source; vehicle_gross; vehicle_gross_unit; vehicle_gross_basis; vehicle_gross_method; vehicle_gross_state; vehicle_gross_sample_time; vehicle_gross_source; vehicle_noncargo_tare; vehicle_noncargo_tare_unit; vehicle_noncargo_tare_basis; vehicle_noncargo_tare_method; vehicle_noncargo_tare_state; vehicle_noncargo_tare_sample_time; vehicle_noncargo_tare_source; distance; distance_unit; distance_basis; distance_method; distance_state; distance_sample_time; distance_source; repeat_count; repeat_count_unit; repeat_count_basis; repeat_count_method; repeat_count_state; repeat_count_sample_time; repeat_count_source; payload_conversion; payload_conversion_unit; payload_conversion_basis; payload_conversion_method; payload_conversion_state; payload_conversion_sample_time; payload_conversion_source; gross_conversion; gross_conversion_unit; gross_conversion_basis; gross_conversion_method; gross_conversion_state; gross_conversion_sample_time; gross_conversion_source; tare_conversion; tare_conversion_unit; tare_conversion_basis; tare_conversion_method; tare_conversion_state; tare_conversion_sample_time; tare_conversion_source; distance_conversion; distance_conversion_unit; distance_conversion_basis; distance_conversion_method; distance_conversion_state; distance_conversion_sample_time; distance_conversion_source; that_record_target_driver; that_record_target_driver_unit; that_record_target_driver_basis; that_record_target_driver_method; that_record_target_driver_state; that_record_target_driver_sample_time; that_record_target_driver_source; that_record_all_consumer_driver; that_record_all_consumer_driver_unit; that_record_all_consumer_driver_basis; that_record_all_consumer_driver_method; that_record_all_consumer_driver_state; that_record_all_consumer_driver_sample_time; that_record_all_consumer_driver_source; that_record_share; that_record_share_unit; that_record_share_basis; that_record_share_method; that_record_share_state; that_record_share_sample_time; that_record_share_source; load_id; leg_id; unique_load_leg_key; EACH_TOTAL_extent; cargo_item_ids; actual_wet_dry_state; carried_pack_support_scope; noncargo_tare_definition_source; provider_laundry_upstream_receiver_overlap; actual_empty_return_coverage | 每个实际唯一载荷-路段采用实测完整带包装载荷，或兼容车辆毛重仅减车辆/非货物皮重。运载容器/包装/支撑物及湿布草含水仍是货物。EACH 乘实际兼容 repeat_count 一次，TOTAL 不变。使用有来源原生转换及兼容 that_record_target_driver/正值完整 that_record_all_consumer_driver。该记录份额放在 SUM(payload*distance*that_record_share) 内，再除一次正值严格同范围 N_target；已目标归属份额和已按参考流不重复。普通住客旅行在本住宿货运外，除非实际包内供应商运输义务并分别核对。实际供应商/洗衣/接收方/空返义务覆盖一次，必要失败资源池任务保留。 优先使用实际任务/仪表直接追溯，或按该资源范围兼容原始量*target_driver/正值且完整的 all_consumer_driver 归属。枚举全部实际宿舍住客、私房/包房/附属服务/租户用户及期间。同池必要空置、待机、封床、失败/取消/未到店任务的资源先进入池总量，再归属真实产出责任。名义容量、仅列空闲记录或删除关闭日均不能留下无责任负荷。跨期结转保留来源、接收期间及最终解决链接；责任未决阻断最终数据包。已归属目标总量只除以一次正值、严格同范围 N_target；已按参考流的记录不再除；N_target=0 时保留原始资源且不除。 | 实际载荷/距离/次数/份额单位，有支持才换算兼容 t*km | 每个实际事件、分配/任务/批次/测量/库存/生命周期区间 | 实际服务夜/任务/报告/库存及全寿命阶段，含来源-结转-接收-最终解决链接 | 实际床位/房间/物业及全部真实公共/私房/包房/其他用户和供应商/接收方 | 每参考流 | 每个独立原生操作数单位/基准/方法/状态/样品时间/来源、真实范围/校准/覆盖/不确定性；未知/不兼容数据阻断最终使用 |
| cp_fates | shared_bed_service | guest_room_solid_waste; spent_cleanup_mixture; independent_maintenance_waste | 真实不同材料接收方及真实混合视图 | record_id; source_record_links; property_id; operator_id; case_id; reporting_period; resource_pool_id; physical_scope_id; all_consumer_records; attribution_owner; provider_coverage; overlap_exclusion; raw_converted_attributed_perreference_state; event_start; event_end; time_zone; UTC_offset_start; UTC_offset_end; DST_resolution; time_source; uncertainty; sensitivity; update_trigger; target_driver; target_driver_unit; target_driver_basis; target_driver_method; target_driver_state; target_driver_sample_time; target_driver_source; all_consumer_driver; all_consumer_driver_unit; all_consumer_driver_basis; all_consumer_driver_method; all_consumer_driver_state; all_consumer_driver_sample_time; all_consumer_driver_source; native_conversion_factor; native_conversion_factor_unit; native_conversion_factor_basis; native_conversion_factor_method; native_conversion_factor_state; native_conversion_factor_sample_time; native_conversion_factor_source; N_target; N_target_unit; N_target_basis; N_target_method; N_target_state; N_target_sample_time; N_target_source; received_net_quantity; received_net_quantity_unit; received_net_quantity_basis; received_net_quantity_method; received_net_quantity_state; received_net_quantity_sample_time; received_net_quantity_source; whole_mixture_mass; whole_mixture_mass_unit; whole_mixture_mass_basis; whole_mixture_mass_method; whole_mixture_mass_state; whole_mixture_mass_sample_time; whole_mixture_mass_source; carrier_mass; carrier_mass_unit; carrier_mass_basis; carrier_mass_method; carrier_mass_state; carrier_mass_sample_time; carrier_mass_source; absorbed_liquid_mass; absorbed_liquid_mass_unit; absorbed_liquid_mass_basis; absorbed_liquid_mass_method; absorbed_liquid_mass_state; absorbed_liquid_mass_sample_time; absorbed_liquid_mass_source; captured_fragment_mass; captured_fragment_mass_unit; captured_fragment_mass_basis; captured_fragment_mass_method; captured_fragment_mass_state; captured_fragment_mass_sample_time; captured_fragment_mass_source; component_quantity; component_quantity_unit; component_quantity_basis; component_quantity_method; component_quantity_state; component_quantity_sample_time; component_quantity_source; density; density_unit; density_basis; density_method; density_state; density_sample_time; density_source; density_temperature; density_temperature_unit; density_temperature_basis; density_temperature_method; density_temperature_state; density_temperature_sample_time; density_temperature_source; composition_fraction; composition_fraction_unit; composition_fraction_basis; composition_fraction_method; composition_fraction_state; composition_fraction_sample_time; composition_fraction_source; actual_stream_id; origin_guest_operator_provider; source_item_asset_event; actual_material_identity; receiver_id; receiver_status_source; collection_responsibility; separate_stream_or_true_mixture; mixture_membership_source; whole_component_nonadditive_links; contained_free_liquid_exclusion; retained_asset_content_exclusion; provider_EOL_transport_treatment_coverage; actual_usable_acceptance_source; flow_row_id; actual_identity_case; actual_substance_or_material; actual_origin_and_medium; actual_state_and_gate; case_activation_evidence; typed_or_residual_quantity; quantity_exclusion_links; whole_total_reconciliation; unresolved_occurrence_not_zero | 展开每种真实不同材料/状态/接收方物流；不把纸、食物、卫生废物、化学品和设备合为编造的混合 UUID。真实共同收集接收混合物保留实测总质量及不可相加载体/液体/组分审计视图。住客来源收集/处理可属住宿义务，但不自动纳入全部自购商品制造。设备保留内容或吸附液不是额外独立液体出口。实际可用产品与废物接收状态及运输/处理责任分别举证；相同供应商/全寿命覆盖不重复。未知去向或数量阻断最终交换，不作零或推断排放。 优先使用实际任务/仪表直接追溯，或按该资源范围兼容原始量*target_driver/正值且完整的 all_consumer_driver 归属。枚举全部实际宿舍住客、私房/包房/附属服务/租户用户及期间。同池必要空置、待机、封床、失败/取消/未到店任务的资源先进入池总量，再归属真实产出责任。名义容量、仅列空闲记录或删除关闭日均不能留下无责任负荷。跨期结转保留来源、接收期间及最终解决链接；责任未决阻断最终数据包。已归属目标总量只除以一次正值、严格同范围 N_target；已按参考流的记录不再除；N_target=0 时保留原始资源且不除。 | 各真实接收物流原生质量/计数/体积和独立组分，有支持才转 kg | 每个实际事件、分配/任务/批次/测量/库存/生命周期区间 | 实际服务夜/任务/报告/库存及全寿命阶段，含来源-结转-接收-最终解决链接 | 实际床位/房间/物业及全部真实公共/私房/包房/其他用户和供应商/接收方 | 每参考流 | 每个独立原生操作数单位/基准/方法/状态/样品时间/来源、真实范围/校准/覆盖/不确定性；未知/不兼容数据阻断最终使用 |
| cp_waterstate | shared_bed_service | water_withdrawal; contained_wastewater; direct_water_outfall | 实际水源、封闭接收方与直接界面 | record_id; source_record_links; property_id; operator_id; case_id; reporting_period; resource_pool_id; physical_scope_id; all_consumer_records; attribution_owner; provider_coverage; overlap_exclusion; raw_converted_attributed_perreference_state; event_start; event_end; time_zone; UTC_offset_start; UTC_offset_end; DST_resolution; time_source; uncertainty; sensitivity; update_trigger; target_driver; target_driver_unit; target_driver_basis; target_driver_method; target_driver_state; target_driver_sample_time; target_driver_source; all_consumer_driver; all_consumer_driver_unit; all_consumer_driver_basis; all_consumer_driver_method; all_consumer_driver_state; all_consumer_driver_sample_time; all_consumer_driver_source; native_conversion_factor; native_conversion_factor_unit; native_conversion_factor_basis; native_conversion_factor_method; native_conversion_factor_state; native_conversion_factor_sample_time; native_conversion_factor_source; N_target; N_target_unit; N_target_basis; N_target_method; N_target_state; N_target_sample_time; N_target_source; withdrawal_volume; withdrawal_volume_unit; withdrawal_volume_basis; withdrawal_volume_method; withdrawal_volume_state; withdrawal_volume_sample_time; withdrawal_volume_source; contained_receiver_volume; contained_receiver_volume_unit; contained_receiver_volume_basis; contained_receiver_volume_method; contained_receiver_volume_state; contained_receiver_volume_sample_time; contained_receiver_volume_source; direct_outfall_volume; direct_outfall_volume_unit; direct_outfall_volume_basis; direct_outfall_volume_method; direct_outfall_volume_state; direct_outfall_volume_sample_time; direct_outfall_volume_source; water_supply_volume; water_supply_volume_unit; water_supply_volume_basis; water_supply_volume_method; water_supply_volume_state; water_supply_volume_sample_time; water_supply_volume_source; retained_water_mass; retained_water_mass_unit; retained_water_mass_basis; retained_water_mass_method; retained_water_mass_state; retained_water_mass_sample_time; retained_water_mass_source; density; density_unit; density_basis; density_method; density_state; density_sample_time; density_source; density_temperature; density_temperature_unit; density_temperature_basis; density_temperature_method; density_temperature_state; density_temperature_sample_time; density_temperature_source; component_quantity; component_quantity_unit; component_quantity_basis; component_quantity_method; component_quantity_state; component_quantity_sample_time; component_quantity_source; opening_water_stock; opening_water_stock_unit; opening_water_stock_basis; opening_water_stock_method; opening_water_stock_state; opening_water_stock_sample_time; opening_water_stock_source; closing_water_stock; closing_water_stock_unit; closing_water_stock_basis; closing_water_stock_method; closing_water_stock_state; closing_water_stock_sample_time; closing_water_stock_source; water_source_identity; source_location; meter_interval; receiver_id; contained_or_direct; actual_receiving_medium; actual_stream_composition_source; sample_id; free_liquid_vs_absorbed_scope; provider_laundry_effluent_overlap; transport_treatment_owner; unknown_water_balance_status | 独立采集真实直接取水、封闭污水/接收交接、保留水及实际环境排口；购水或住宿数量不确定接收或蒸发量。兼容质量-体积转换仅用实际材料/状态/密度/温度单位及来源。封闭污水为废物流，直接排水为实际介质基本流；真实向空气水蒸气须 cp_species 中质量物质流，不能作封闭废物或液体排口。真实不同液体身份/接收方分别展开，整混合/组分数量不可相加；供水减未知差额既非污水、水蒸气也非零。 优先使用实际任务/仪表直接追溯，或按该资源范围兼容原始量*target_driver/正值且完整的 all_consumer_driver 归属。枚举全部实际宿舍住客、私房/包房/附属服务/租户用户及期间。同池必要空置、待机、封床、失败/取消/未到店任务的资源先进入池总量，再归属真实产出责任。名义容量、仅列空闲记录或删除关闭日均不能留下无责任负荷。跨期结转保留来源、接收期间及最终解决链接；责任未决阻断最终数据包。已归属目标总量只除以一次正值、严格同范围 N_target；已按参考流的记录不再除；N_target=0 时保留原始资源且不除。 | 真实原生水/物流体积及独立质量/组成/密度温度量 | 每个实际事件、分配/任务/批次/测量/库存/生命周期区间 | 实际服务夜/任务/报告/库存及全寿命阶段，含来源-结转-接收-最终解决链接 | 实际床位/房间/物业及全部真实公共/私房/包房/其他用户和供应商/接收方 | 每参考流 | 每个独立原生操作数单位/基准/方法/状态/样品时间/来源、真实范围/校准/覆盖/不确定性；未知/不兼容数据阻断最终使用 |
| cp_species | shared_bed_service | direct_species | 实际精确物质及接收介质测量 | record_id; source_record_links; property_id; operator_id; case_id; reporting_period; resource_pool_id; physical_scope_id; all_consumer_records; attribution_owner; provider_coverage; overlap_exclusion; raw_converted_attributed_perreference_state; event_start; event_end; time_zone; UTC_offset_start; UTC_offset_end; DST_resolution; time_source; uncertainty; sensitivity; update_trigger; target_driver; target_driver_unit; target_driver_basis; target_driver_method; target_driver_state; target_driver_sample_time; target_driver_source; all_consumer_driver; all_consumer_driver_unit; all_consumer_driver_basis; all_consumer_driver_method; all_consumer_driver_state; all_consumer_driver_sample_time; all_consumer_driver_source; native_conversion_factor; native_conversion_factor_unit; native_conversion_factor_basis; native_conversion_factor_method; native_conversion_factor_state; native_conversion_factor_sample_time; native_conversion_factor_source; N_target; N_target_unit; N_target_basis; N_target_method; N_target_state; N_target_sample_time; N_target_source; measured_species_quantity; measured_species_quantity_unit; measured_species_quantity_basis; measured_species_quantity_method; measured_species_quantity_state; measured_species_quantity_sample_time; measured_species_quantity_source; actual_activity; actual_activity_unit; actual_activity_basis; actual_activity_method; actual_activity_state; actual_activity_sample_time; actual_activity_source; species_factor; species_factor_unit; species_factor_basis; species_factor_method; species_factor_state; species_factor_sample_time; species_factor_source; composition_fraction; composition_fraction_unit; composition_fraction_basis; composition_fraction_method; composition_fraction_state; composition_fraction_sample_time; composition_fraction_source; fate_fraction; fate_fraction_unit; fate_fraction_basis; fate_fraction_method; fate_fraction_state; fate_fraction_sample_time; fate_fraction_source; gas_conversion_factor; gas_conversion_factor_unit; gas_conversion_factor_basis; gas_conversion_factor_method; gas_conversion_factor_state; gas_conversion_factor_sample_time; gas_conversion_factor_source; gas_temperature; gas_temperature_unit; gas_temperature_basis; gas_temperature_method; gas_temperature_state; gas_temperature_sample_time; gas_temperature_source; gas_pressure; gas_pressure_unit; gas_pressure_basis; gas_pressure_method; gas_pressure_state; gas_pressure_sample_time; gas_pressure_source; measured_water_vapour_mass; measured_water_vapour_mass_unit; measured_water_vapour_mass_basis; measured_water_vapour_mass_method; measured_water_vapour_mass_state; measured_water_vapour_mass_sample_time; measured_water_vapour_mass_source; event_id; actual_source_operation; exact_species_or_particle_identity; reported_substance_basis; receiving_medium; location; factor_coverage_source; composition_basis_source; fate_method_source; contained_capture_exclusion; provider_asset_release_overlap; unknown_residual_status; flow_row_id; actual_identity_case; actual_substance_or_material; actual_origin_and_medium; actual_state_and_gate; case_activation_evidence; typed_or_residual_quantity; quantity_exclusion_links; whole_total_reconciliation; unresolved_occurrence_not_zero | 固定绑定前识别真实精确物质/混合组分/颗粒类别与介质。采用独立实测原生物质量或兼容实际 activity*species_factor，每个操作数有自身原生单位/基准/方法/状态/样品时间/来源。组成/去向/气态转换仅按实际方法所需计一次，因子已覆盖组成/去向不再乘。实际释放制冷剂组成不自动等同供给组成。向空气水蒸气须质量证据，不是水平衡差额。采购、补充、气味、安全标签、库存差异或缺失数据均不能证明释放或零；供应商已覆盖封闭接收方释放不重复。 优先使用实际任务/仪表直接追溯，或按该资源范围兼容原始量*target_driver/正值且完整的 all_consumer_driver 归属。枚举全部实际宿舍住客、私房/包房/附属服务/租户用户及期间。同池必要空置、待机、封床、失败/取消/未到店任务的资源先进入池总量，再归属真实产出责任。名义容量、仅列空闲记录或删除关闭日均不能留下无责任负荷。跨期结转保留来源、接收期间及最终解决链接；责任未决阻断最终数据包。已归属目标总量只除以一次正值、严格同范围 N_target；已按参考流的记录不再除；N_target=0 时保留原始资源且不除。 | 真实物质质量及独立活动/因子/比例/温度/压力原生单位 | 每个实际事件、分配/任务/批次/测量/库存/生命周期区间 | 实际服务夜/任务/报告/库存及全寿命阶段，含来源-结转-接收-最终解决链接 | 实际床位/房间/物业及全部真实公共/私房/包房/其他用户和供应商/接收方 | 每参考流 | 每个独立原生操作数单位/基准/方法/状态/样品时间/来源、真实范围/校准/覆盖/不确定性；未知/不兼容数据阻断最终使用 |

### 计算规则

| rule_id | 适用对象 | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `fulfilled_nights` | occupied_bed_night | N_target=按实际撤销及床位移动核对后唯一且实际履约的已入住单人铺位服务夜 ID 计数。须有实际访客、独立供给的单人睡眠铺位、真实床位/房间/配置分配、当地住宿夜惯例及实际入住退房/时区/UTC 偏移/DST 证据。房内仅有一名实际住客仍可保持按床位共享供给，不要求另一住客当夜在场。同一已履约床位服务夜中途换铺，保留一个服务 ID 及两段实际资源；真正额外独立交付的服务有不同 ID。独占整房包租、未使用备用床、预订、宾客容量、付费未到店及固定二十四小时（fixed24hours）均非本参考流。实际履约的免费入住仍承担资源责任，仅拒绝清洁不撤销已交付住宿。 | cp_beds | 真实已入住夜 | generator-booking-service-scope; eurostat-rooms-bedplaces-nights |
| `actual_resource_pool` | 全部服务行 | 优先使用实际任务/仪表直接追溯，或按该资源范围兼容原始量*target_driver/正值且完整的 all_consumer_driver 归属。枚举全部实际宿舍住客、私房/包房/附属服务/租户用户及期间。同池必要空置、待机、封床、失败/取消/未到店任务的资源先进入池总量，再归属真实产出责任。名义容量、仅列空闲记录或删除关闭日均不能留下无责任负荷。跨期结转保留来源、接收期间及最终解决链接；责任未决阻断最终数据包。已归属目标总量只除以一次正值、严格同范围 N_target；已按参考流的记录不再除；N_target=0 时保留原始资源且不除。 | cp_beds; cp_utilities; cp_tasks; cp_providers | 实际资源池 |  |
| `actual_utility` | electricity; purchased_useful_heat; water_supply; electricity_ac; purchased_useful_heat_delivered_heat; water_supply_liquid_tap | 实际公用事业数量采用兼容的 (register_end-register_start+register_adjustment)*meter_multiplier*native_conversion_factor，或 interval_quantity*native_conversion_factor，不能并用。因子仅在尚未应用时使用。实际区间平均功率*匹配 elapsed_duration 只在尚未积分且单位兼容时转换，不用铭牌默认。购入有效热冷交付与直接载能体/资产分开。完整实际用户归属后仅除一次正值同范围 N_target。 | cp_utilities; cp_beds | 实际公用事业 |  |
| `actual_supply_stock` | operating_materials; actual_fuels; unused_supply_returns; operating_materials_synthetic_detergent | S=已归属期初+外部净收货-含保留回收物的期末，实际材料收货排除容器皮重。只能选择一种：总供给 S/N_target 输入并把实际匹配的未使用外退/N_target 单列输出；或仅消耗量 (S-matched_unused_return)/N_target 输入且省略该匹配退货输出。禁止把退货加到输入、重复扣减、无关负量抵销或自动给予避免生产收益。内部循环不是新外部供给；废耗材料保留原供给负荷。 保留回收物已含期末；实际燃烧、废物及材料使用独立核对，不等同采购。 | cp_supplies; cp_beds | 实际物料库存 |  |
| `actual_linen_basis` | laundry_service; linen_lifetime; freight | Laundry_service 为真实完成的干纺织品处理量或有支持的实际原生服务结果，有证据重洗计一次。对同一样品仅水定义，w_wet=water_mass/as_received_sample_mass、r_dry=water_mass/nonwater_mass，w_wet=r_dry/(1+r_dry)，nonwater_mass=as_received_sample_mass*(1-w_wet)；百分数先使用有来源的 percent_to_ratio_factor。其他挥发物/污物不等于水或清洁纤维。湿货运不是干服务或新制造。真实供应商寿命/运行/租赁/运输/污水覆盖一次；真实缺失义务须在使用前完成。 | cp_linen; cp_assets; cp_beds | 实际布草基准 |  |
| `actual_asset_equivalent` | linen_lifetime; building_bed_assets | 在有支持兼容量纲等效及正值完整 lifetime_all_user_driver 下，asset_equivalent=asset_native_quantity*driver_equivalence_factor*job_used_driver/lifetime_all_user_driver。寿命驱动为兼容 observed_life_driver+有来源 remaining_life_driver 或实际终止总量，覆盖全部用户/期间。真实完整生命周期一次，供应商已覆盖阶段不重复。空闲/日历驱动责任保留在目标分子，年度 N 或名义容量不能充当寿命。完整链使用前完成真实缺失阶段及结转链接；已归属期间/批次等效量仅除一次正值同范围 N_target，已按参考流则不再处理。 | cp_assets; cp_beds; cp_providers | 实际资产等效 | pef-hotel-introduction-2026 |
| `actual_provider_service` | contracted_support; included_ancillary_service | 实际供应商数量=SUM(排他真实原生量*有支持物理等效且仅在尚未转换时*实际有记录兼容份额且仅在尚未归属时)。实际餐食保留原料/制作/能源水/食物废物/资产/运输；实际活动保留真实义务。完整有证据供应商或已复核实际生产路线扩展加真实缺失阶段集成，不允许仅凭标签删除。实际原生服务质量/等效与全部客户完整义务必需。之后只除一次正值同目标 N_target，已按参考流则不再除。 | cp_providers; cp_tasks; cp_beds | 实际供应商服务 |  |
| `actual_record_freight` | freight | 每个唯一实际载荷-路段，带包装载荷直接实测，或经原生转换的兼容 vehicle_gross-vehicle_noncargo_tare。保留真实湿内容物/包装/支撑物。EACH 乘真实 repeat_count 一次，TOTAL 不变。Assigned_work=SUM(unique load-leg:payload*distance*THAT_record_share)，保持兼容原生功单位；该记录份额在求和内部用真实兼容目标/正值完整全消费者驱动计算。之后仅除一次严格同范围正值 N_target，已归属/已按参考流不重复。实际供应商/洗衣/接收方/空返覆盖及必要失败资源池责任保留。 | cp_freight; cp_beds | 实际逐记录货运 |  |
| `actual_fluid_ledger` | refrigerant_supply; recovered_fluid_exports; contained_refrigerant_waste | 核对 opening_installed+opening_stored_total+new_factory_charge_entry+net_standalone_receipts+other_external_receipts 与 closing_installed+closing_stored_total+unused_external_returns+used_usable_export+contained_waste_export+retained_equipment_exit+independently_evidenced_direct_release+explicit_unknown。储存总量包含保留的回收子库存；回收是不可相加的审计视图，不能再加一份库存。批次/充注/角色 ID 排他；新出厂充注只在不属期初或其他收货时进入，其他收发排除所有已列项，内部充注/回收抵销。出厂充注生产由完整资产或明确缺失阶段补充覆盖一次。仅消耗扣减/省略只适用于有证据的同来源同状态未使用独立供给子库存及其匹配未使用退货。全部已使用回收液，无论原厂充注或后续补充，都按实际可用外转状态记录，不自动等同未使用新料，不扣减新料制造，不作负输入或自动收益。整机/部件/混合废物保留内容是不可相加视图，不另增液体出口。补充、回收或未解释差额既不能证明直接释放也不能证明零。 | cp_refrigerants; cp_assets; cp_species | 实际制冷剂台账 |  |
| `actual_received_streams` | 全部接收端接口 | 每种真实不同接收材料/状态/接收方均有自身原生净量/来源。选择真实整混合物或排他组分交换，审计组分不可相加。布中或整机保留液体不另列自由液体出口。封闭污水/自由液体交接用废物流；实际环境液体排口用有实际介质的基本流；实际向空气水蒸气须质量物质流。购水减未知差额不是污水/排口/水蒸气或零。供应商/完整资产寿命终结/运输/处理一次；实际缺失接收义务须明确完成。 | cp_fates; cp_waterstate; cp_assets; cp_providers | 实际接收物流 |  |
| `actual_species_amount` | direct_species; direct_species_co2_fossil_air; direct_species_methane_fossil_air; direct_species_nitrous_oxide_air | Species_quantity=独立实测实际物质数量或兼容 actual_activity*species_factor。每个操作数有原生单位/基准/方法/状态/样品时间/来源和精确报告物质/颗粒/介质。实际组成/去向/气体转换仅在需要且未覆盖时应用；气体温度/压力各自有来源及兼容单位。实际排放混合组成不能默认供给组成。不以库存差额/补充/采购/气味证明释放或零。完整资源归属后仅除一次正值同目标 N_target，已按参考流除外；供应商实际释放不重复。 | cp_species; cp_refrigerants; cp_beds | 实际物质数量 |  |

### 数据质量要求

| requirement_id | 适用对象 | Requirement | Evidence |
| --- | --- | --- | --- |
| `actual_service_scope` | 参考流及全部消费者 | 实际共享按床位制度、住客/床位/房间/配置/夜/时区/DST/移动/履约及包内范围。预订、同房请求或费用不是物理产出；一名实际住客不代表整房独占供给。 | 实际分配/服务记录、来源平面/库存/物理交接 |
| `native_quantities` | 全部计算 | 每个独立原生数量、分子/分母/组分/重复/转换/等效/密度温度/压力/活动/因子/去向保留单位/基准/方法/状态/样品时间/来源及兼容实际总体/覆盖。未知或不兼容基准阻断计算，不作零。 | 节点拥有的全部原始 CP 记录、校准、来源及范围链接 |
| `complete_responsibility` | 全部资源池、资产、供应商及接收方 | 全部相关用户/期间和必要空闲/失败/封床/未到店责任闭合；完整观察及有来源剩余寿命、实际遗漏阶段须集成一次。真实包内食物/活动不能因另一标签消失。未决结转/来源/接收/最终解决或阶段责任阻断完整数据包。 | 完整原生全用户/寿命/供应商/接收方矩阵、已完成补充、不确定性/敏感性/更新 |
| `range_and_identity_limits` | 每张清单流卡 | 逐卡范围证据需求保留真实采集和适用来源准则。不要求通用数值区间。任何声称的来源区间须可追溯且兼容；经验 QA 护栏还须独立可比参考，不取同记录最小最大值。最终交换前须核实具体身份、原生数量及支持。 | 实际场址记录与兼容独立参考/接受/身份证据；不编因子或近似 UUID |
| complete_electricity | shared_bed_service | 最终使用前，按下方完整采集定义将`electricity`的每项真实情形展开为独立身份交换，完成原生数量、状态、来源、接收方及覆盖证据。缺UUID或数量不能作零；保留固定情形的数量须从余项排除。 | `cp_utilities` |
| complete_purchased_useful_heat | shared_bed_service | 最终使用前，按下方完整采集定义将`purchased_useful_heat`的每项真实情形展开为独立身份交换，完成原生数量、状态、来源、接收方及覆盖证据。缺UUID或数量不能作零；保留固定情形的数量须从余项排除。 | `cp_utilities` |
| complete_water_supply | shared_bed_service | 最终使用前，按下方完整采集定义将`water_supply`的每项真实情形展开为独立身份交换，完成原生数量、状态、来源、接收方及覆盖证据。缺UUID或数量不能作零；保留固定情形的数量须从余项排除。 | `cp_utilities` |
| complete_actual_fuels | shared_bed_service | 最终使用前，按下方完整采集定义将`actual_fuels`的每项真实情形展开为独立身份交换，完成原生数量、状态、来源、接收方及覆盖证据。缺UUID或数量不能作零；保留固定情形的数量须从余项排除。 | `cp_supplies` |
| complete_operating_materials | shared_bed_service | 最终使用前，按下方完整采集定义将`operating_materials`的每项真实情形展开为独立身份交换，完成原生数量、状态、来源、接收方及覆盖证据。缺UUID或数量不能作零；保留固定情形的数量须从余项排除。 | `cp_supplies` |
| complete_linen_lifetime | shared_bed_service | 最终使用前，按下方完整采集定义将`linen_lifetime`的每项真实情形展开为独立身份交换，完成原生数量、状态、来源、接收方及覆盖证据。缺UUID或数量不能作零；保留固定情形的数量须从余项排除。 | `cp_assets` |
| complete_building_bed_assets | shared_bed_service | 最终使用前，按下方完整采集定义将`building_bed_assets`的每项真实情形展开为独立身份交换，完成原生数量、状态、来源、接收方及覆盖证据。缺UUID或数量不能作零；保留固定情形的数量须从余项排除。 | `cp_assets` |
| complete_contracted_support | shared_bed_service | 最终使用前，按下方完整采集定义将`contracted_support`的每项真实情形展开为独立身份交换，完成原生数量、状态、来源、接收方及覆盖证据。缺UUID或数量不能作零；保留固定情形的数量须从余项排除。 | `cp_providers` |
| complete_included_ancillary_service | shared_bed_service | 最终使用前，按下方完整采集定义将`included_ancillary_service`的每项真实情形展开为独立身份交换，完成原生数量、状态、来源、接收方及覆盖证据。缺UUID或数量不能作零；保留固定情形的数量须从余项排除。 | `cp_providers` |
| complete_refrigerant_supply | shared_bed_service | 最终使用前，按下方完整采集定义将`refrigerant_supply`的每项真实情形展开为独立身份交换，完成原生数量、状态、来源、接收方及覆盖证据。缺UUID或数量不能作零；保留固定情形的数量须从余项排除。 | `cp_refrigerants` |
| complete_freight | shared_bed_service | 最终使用前，按下方完整采集定义将`freight`的每项真实情形展开为独立身份交换，完成原生数量、状态、来源、接收方及覆盖证据。缺UUID或数量不能作零；保留固定情形的数量须从余项排除。 | `cp_freight` |
| complete_water_withdrawal | shared_bed_service | 最终使用前，按下方完整采集定义将`water_withdrawal`的每项真实情形展开为独立身份交换，完成原生数量、状态、来源、接收方及覆盖证据。缺UUID或数量不能作零；保留固定情形的数量须从余项排除。 | `cp_waterstate` |
| complete_unused_supply_returns | shared_bed_service | 最终使用前，按下方完整采集定义将`unused_supply_returns`的每项真实情形展开为独立身份交换，完成原生数量、状态、来源、接收方及覆盖证据。缺UUID或数量不能作零；保留固定情形的数量须从余项排除。 | `cp_supplies` |
| complete_usable_asset_exports | shared_bed_service | 最终使用前，按下方完整采集定义将`usable_asset_exports`的每项真实情形展开为独立身份交换，完成原生数量、状态、来源、接收方及覆盖证据。缺UUID或数量不能作零；保留固定情形的数量须从余项排除。 | `cp_assets` |
| complete_recovered_fluid_exports | shared_bed_service | 最终使用前，按下方完整采集定义将`recovered_fluid_exports`的每项真实情形展开为独立身份交换，完成原生数量、状态、来源、接收方及覆盖证据。缺UUID或数量不能作零；保留固定情形的数量须从余项排除。 | `cp_refrigerants` |
| complete_guest_room_solid_waste | shared_bed_service | 最终使用前，按下方完整采集定义将`guest_room_solid_waste`的每项真实情形展开为独立身份交换，完成原生数量、状态、来源、接收方及覆盖证据。缺UUID或数量不能作零；保留固定情形的数量须从余项排除。 | `cp_fates` |
| complete_spent_cleanup_mixture | shared_bed_service | 最终使用前，按下方完整采集定义将`spent_cleanup_mixture`的每项真实情形展开为独立身份交换，完成原生数量、状态、来源、接收方及覆盖证据。缺UUID或数量不能作零；保留固定情形的数量须从余项排除。 | `cp_fates` |
| complete_retired_linen | shared_bed_service | 最终使用前，按下方完整采集定义将`retired_linen`的每项真实情形展开为独立身份交换，完成原生数量、状态、来源、接收方及覆盖证据。缺UUID或数量不能作零；保留固定情形的数量须从余项排除。 | `cp_assets` |
| complete_retired_equipment | shared_bed_service | 最终使用前，按下方完整采集定义将`retired_equipment`的每项真实情形展开为独立身份交换，完成原生数量、状态、来源、接收方及覆盖证据。缺UUID或数量不能作零；保留固定情形的数量须从余项排除。 | `cp_assets` |
| complete_contained_wastewater | shared_bed_service | 最终使用前，按下方完整采集定义将`contained_wastewater`的每项真实情形展开为独立身份交换，完成原生数量、状态、来源、接收方及覆盖证据。缺UUID或数量不能作零；保留固定情形的数量须从余项排除。 | `cp_waterstate` |
| complete_independent_maintenance_waste | shared_bed_service | 最终使用前，按下方完整采集定义将`independent_maintenance_waste`的每项真实情形展开为独立身份交换，完成原生数量、状态、来源、接收方及覆盖证据。缺UUID或数量不能作零；保留固定情形的数量须从余项排除。 | `cp_fates` |
| complete_contained_refrigerant_waste | shared_bed_service | 最终使用前，按下方完整采集定义将`contained_refrigerant_waste`的每项真实情形展开为独立身份交换，完成原生数量、状态、来源、接收方及覆盖证据。缺UUID或数量不能作零；保留固定情形的数量须从余项排除。 | `cp_refrigerants` |
| complete_direct_water_outfall | shared_bed_service | 最终使用前，按下方完整采集定义将`direct_water_outfall`的每项真实情形展开为独立身份交换，完成原生数量、状态、来源、接收方及覆盖证据。缺UUID或数量不能作零；保留固定情形的数量须从余项排除。 | `cp_waterstate` |
| complete_direct_species | shared_bed_service | 最终使用前，按下方完整采集定义将`direct_species`的每项真实情形展开为独立身份交换，完成原生数量、状态、来源、接收方及覆盖证据。缺UUID或数量不能作零；保留固定情形的数量须从余项排除。 | `cp_species` |


### 强制清单完成记录

以下记录是强制物理采集和情形展开要求，不是单条清单交换。原有节点、方向、流类型、数量基准、采集协议、库存去向、供应接收和来源义务全部继续有效。正文对这些编号的引用对应这些完成要求。前景数据集完成前，必须将每项真实物料、服务、资产全寿命、废物流或物种介质分别展开为具原生数量和排他覆盖的独立身份交换。保留固定卡只覆盖其真实受支持情形，其余真实情形须无重叠协调。身份、发生或数量缺失仍待采集，不能填零或删项。内部配对交接和组分审计视图不可相加；必要全寿命与供应商阶段必须实际完成一次。

#### electricity

责任节点与原流角色：shared_bed_service / inputs / product

实际床位插座、共享房照明/暖通、浴室/热水辅助、住客厨房电器、公共及支持/空闲任务在真实责任内。不以入住量转 kWh 或名义床位份额；供应商已覆盖电力不重复。

本卡为独立身份分支`electricity_ac`之外的余项清单要求。已计入分支的实际数量不再计入本余项交换，原类目总量仅作不可相加的协调审计。其他实际材料、状态、来源或介质仍须保留自身经核实的身份、原生数量及供应接收责任；记录缺失时，不推定条件分支发生、不发生或数量为零。

- 选定流：实际床位房间及共享住宿电力
- 流属性/单位：Energy / kWh
- 数量规则：在 cp_utilities 下按实际排他归属兼容原生量/正值同范围 N_target 一次；已按参考流则不变，N_target=0 保留且不除
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：per reference flow
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_utilities`
- 范围证据需求：实际仪表/区间或同区间平均功率/时间、房间/床位/用户边界、完整竞争用户及必要资源池义务。

#### purchased_useful_heat

责任节点与原流角色：shared_bed_service / inputs / product

有条件的真实有效热冷服务，按实际交付状态/供应商边界计量；不把运行冷机电力与相同购入冷量双计。实际现场独立转换须已复核扩展。

本卡为独立身份分支`purchased_useful_heat_delivered_heat`之外的余项清单要求。已计入分支的实际数量不再计入本余项交换，原类目总量仅作不可相加的协调审计。其他实际材料、状态、来源或介质仍须保留自身经核实的身份、原生数量及供应接收责任；记录缺失时，不推定条件分支发生、不发生或数量为零。

- 选定流：实际外购有效热量或冷量
- 流属性/单位：Energy / MJ
- 数量规则：在 cp_utilities 下按实际排他归属兼容原生量/正值同范围 N_target 一次；已按参考流则不变，N_target=0 保留且不除
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：per reference flow
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_utilities`
- 范围证据需求：实际有效交付量/原生单位、状态/温度/参考方法及供应商损失/能源/资产覆盖、完整用户驱动。

#### water_supply

责任节点与原流角色：shared_bed_service / inputs / product

实际住客浴室、厨房、保洁和声明支持供水，与直接取水和供应商已覆盖洗衣水分开。供水体积不是下水道体积。

本卡为独立身份分支`water_supply_liquid_tap`之外的余项清单要求。已计入分支的实际数量不再计入本余项交换，原类目总量仅作不可相加的协调审计。其他实际材料、状态、来源或介质仍须保留自身经核实的身份、原生数量及供应接收责任；记录缺失时，不推定条件分支发生、不发生或数量为零。

- 选定流：实际购入住宿及公共设施用水
- 流属性/单位：Volume / m3
- 数量规则：在 cp_utilities 下按实际排他归属兼容原生量/正值同范围 N_target 一次；已按参考流则不变，N_target=0 保留且不除
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：per reference flow
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_utilities`
- 范围证据需求：真实水源/供应商/仪表期间/原生量、冷热/用途范围和全用户责任，独立采集去向。

#### actual_fuels

责任节点与原流角色：shared_bed_service / inputs / product

仅限实际运营且已复核设备/移动任务和真实载能体/等级。不推定发电机、锅炉、住客旅行或燃料组合；上游燃料一次，燃烧和物质分别举证。

- 选定流：实际住宿支持燃料供给
- 流属性/单位：Mass / kg
- 数量规则：在 cp_supplies 下按实际排他归属兼容原生量/正值同范围 N_target 一次；已按参考流则不变，N_target=0 保留且不除
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：per reference flow
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_supplies`
- 范围证据需求：实际净库存/收货/期末/原生等级，实际燃烧和有支持密度温度/状态转换。

#### operating_materials

责任节点与原流角色：shared_bed_service / inputs / product

逐种真实 SKU/配方展开，含清洁剂、皂/纸、擦拭/吸附/滤材及支持材料，不规定剂量/配方。成品溶液/浓缩液/水/组分视图不可相加。供应商已覆盖投入和耐用布草不在此重复。

本卡为独立身份分支`operating_materials_synthetic_detergent`之外的余项清单要求。已计入分支的实际数量不再计入本余项交换，原类目总量仅作不可相加的协调审计。其他实际材料、状态、来源或介质仍须保留自身经核实的身份、原生数量及供应接收责任；记录缺失时，不推定条件分支发生、不发生或数量为零。

- 选定流：实际清洁、住客用品和支持耗材
- 流属性/单位：Mass / kg
- 数量规则：在 cp_supplies 下按实际排他归属兼容原生量/正值同范围 N_target 一次；已按参考流则不变，N_target=0 保留且不除
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：per reference flow
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_supplies`
- 范围证据需求：真实 SKU/组成/用途/排容器皮重净料库存，实际 EACH/TOTAL 及单件/密度因子、匹配未使用退货及包装生产覆盖。

#### linen_lifetime

责任节点与原流角色：shared_bed_service / inputs / product

真实床单、枕/被/毛巾/布及纺织支撑物，制造、维护、更换和寿命终结覆盖全部用户/期间。洗涤是独立服务事件，不是每夜新布草；租赁已覆盖制造/寿命不再直接计资产。

- 选定流：全寿命可重复使用运营寝具与布草服务
- 流属性/单位：Count / Item(s)
- 数量规则：在 cp_assets 下按实际排他归属兼容原生量/正值同范围 N_target 一次；已按参考流则不变，N_target=0 保留且不除
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：per reference flow
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_assets`
- 范围证据需求：真实纺织品身份/材料/原生件数或质量/等效，任务使用及观察+有来源剩余全寿命/终止/不确定性/覆盖，不假设循环数/年数。

#### building_bed_assets

责任节点与原流角色：shared_bed_service / inputs / product

真实建筑壳体/装修、床架/床垫、储物柜/家具、暖通/热水/厨房/信息/清洁设备及重复支撑物。无论所有权/付款均保留物理全寿命；整资产或部件/事件覆盖一次，不能并用。

- 选定流：全寿命建筑、床架、床垫及住宿设备
- 流属性/单位：Count / Item(s)
- 数量规则：在 cp_assets 下按实际排他归属兼容原生量/正值同范围 N_target 一次；已按参考流则不变，N_target=0 保留且不除
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：per reference flow
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_assets`
- 范围证据需求：真实物料表/原生量/属性/等效、床房归属、完整全用户观察+有来源剩余使用/终止及制造-安装-维护-更换-寿命终结覆盖；年度 N 不是寿命。

#### contracted_support

责任节点与原流角色：shared_bed_service / inputs / product

实际完成物理支持结果按原生质量/单位计，不以工资、发票、费用或预订作服务量。匹配材料/公用事业/资产/去向/运输完整覆盖只替代一次，洗衣保持独立批次服务。

- 选定流：实际物理清洁、维护、出入和响应服务
- 流属性/单位：Count / Item(s)
- 数量规则：在 cp_providers 下按实际排他归属兼容原生量/正值同范围 N_target 一次；已按参考流则不变，N_target=0 保留且不除
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：per reference flow
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_providers`
- 范围证据需求：真实任务/结果及床房入住/期间链接，原生单位/等效，完整供应商全客户及已覆盖与缺失义务矩阵。

#### included_ancillary_service

责任节点与原流角色：shared_bed_service / inputs / product

有条件实际套餐义务按有支持物理原生单位计。包内餐食保留原料生产/烹饪/水能源/食物废物/全寿命资产/运输，活动保留实际资源。餐厅或促销存在不代表统一包含。使用前须完整供应商或已复核真实直接生产扩展。

- 选定流：实际包内餐食、活动或其他附属供应商服务
- 流属性/单位：Count / Item(s)
- 数量规则：在 cp_providers 下按实际排他归属兼容原生量/正值同范围 N_target 一次；已按参考流则不变，N_target=0 保留且不除
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：per reference flow
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_providers`
- 范围证据需求：实际合同/预订包含范围和物理交付/可用义务，原生质量/数量/供应商覆盖/其他用户。不默认餐/日/活动或费用转换；未决厨房/生产范围阻断完整套餐。

#### refrigerant_supply

责任节点与原流角色：shared_bed_service / inputs / product

实际指定化学物/混合物，独立供应给已复核住宿系统。资产寿命已含初始出厂充注不再购买一次；补充量不是泄漏量。

- 选定流：实际独立运营制冷剂供给
- 流属性/单位：Mass / kg
- 数量规则：在 cp_refrigerants 下按实际排他归属兼容原生量/正值同范围 N_target 一次；已按参考流则不变，N_target=0 保留且不除
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：per reference flow
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_refrigerants`
- 范围证据需求：真实化学物/状态/SKU/净库存/充注谱系及未使用供给与已使用回收区分，出厂/独立上游责任，独立接收/释放证据。

#### freight

责任节点与原流角色：shared_bed_service / inputs / product

仅真实服务边界唯一载荷路段，扣除上游/供应商/接收方覆盖后计。载荷保留真实湿布草、包装和运载支撑物；不是按干基纺织品计量的洗衣服务处理量、住客旅行或每夜固定一运。

- 选定流：实际住宿供应、布草、资产及接收方货运
- 流属性/单位：Mass * distance / t*km
- 数量规则：在 cp_freight 下按实际排他归属兼容原生量/正值同范围 N_target 一次；已按参考流则不变，N_target=0 保留且不除
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：per reference flow
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_freight`
- 范围证据需求：实际载荷/路段/货物/时间/带包装载荷或兼容毛重仅减非货物皮重、距离、EACH/TOTAL/次数、原生转换及该记录完整份额在求和内/N 一次。

#### water_withdrawal

责任节点与原流角色：shared_bed_service / inputs / elementary

有条件实际运营环境取水，区别于购水或供应商取水。须精确水源/地点及真实责任用户。

- 选定流：实际特定水源直接住宿取水
- 流属性/单位：Volume / m3
- 数量规则：在 cp_waterstate 下按实际排他归属兼容原生量/正值同范围 N_target 一次；已按参考流则不变，N_target=0 保留且不除
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：per reference flow
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_waterstate`
- 范围证据需求：实际水源/介质/地点原生体积/仪表区间及全用户义务，不用水费、住客数或差额代理取水。

#### unused_supply_returns

责任节点与原流角色：shared_bed_service / outputs / product

实际同来源同状态未使用独立供给外退。总供给单列此输出；仅消耗供给扣匹配未用量并省略此输出。内部回收/期末、已使用制冷剂及继承布草不是未使用供给。

- 选定流：实际匹配的未使用独立供给退货
- 流属性/单位：Mass / kg
- 数量规则：在 cp_supplies 下按实际排他归属兼容原生量/正值同范围 N_target 一次；已按参考流则不变，N_target=0 保留且不除
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：per reference flow
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_supplies`
- 范围证据需求：实际来源匹配 SKU/净量/接收方/未使用接受及排他库存惯例；不无关抵销或自动收益。

#### usable_asset_exports

责任节点与原流角色：shared_bed_service / outputs / product

真实可用物件/部件外转按实际接收状态和剩余寿命责任计。退役/修理/内部再部署不自动等于可用出口或收益；整物/部件质量不可相加。

- 选定流：实际可用纺织品、家具或设备转移
- 流属性/单位：Mass / kg
- 数量规则：在 cp_assets 下按实际排他归属兼容原生量/正值同范围 N_target 一次；已按参考流则不变，N_target=0 保留且不除
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：per reference flow
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_assets`
- 范围证据需求：实际物件谱系/原生净质量或有支持件数转换、接收方/接受/时间、剩余寿命及已覆盖制造/寿命终结责任。

#### recovered_fluid_exports

责任节点与原流角色：shared_bed_service / outputs / product

原充注或后续补充形成的已使用回收化学物/混合物真实有用外转。保留回收留库存。不自动视同未用新料，不扣新料制造或当前无关供给，不作负输入或自动避免生产收益。

- 选定流：实际可用的已使用回收制冷剂外转
- 流属性/单位：Mass / kg
- 数量规则：在 cp_refrigerants 下按实际排他归属兼容原生量/正值同范围 N_target 一次；已按参考流则不变，N_target=0 保留且不除
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：per reference flow
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_refrigerants`
- 范围证据需求：实际化学物/混合物/组成/原生净量、已使用状态质量/接收接受、充注来源及回收保留/外转区分；未使用退货只用独立匹配卡。

#### guest_room_solid_waste

责任节点与原流角色：shared_bed_service / outputs / waste

实际纸/食物/卫生/包装等有运营收集责任的独立接收住宿物流，各真实不同流/接收方分别展开。真实共同收集混合物保留总质量及不可相加组成。住客来源处理不自动纳入全部自购物品制造。

- 选定流：实际访客及运营住宿固体废物交接
- 流属性/单位：Mass / kg
- 数量规则：在 cp_fates 下按实际排他归属兼容原生量/正值同范围 N_target 一次；已按参考流则不变，N_target=0 保留且不除
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：per reference flow
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_fates`
- 范围证据需求：真实物流/来源/收集义务/原生净量/状态/组成/接收方及供应商/生命周期覆盖后的运输处理责任，不用人数转废物默认量。

#### spent_cleanup_mixture

责任节点与原流角色：shared_bed_service / outputs / waste

仅实际收集擦拭物/滤材/吸附物及其保留液体/碎片，按接收状态计。载体/组分/吸附液体是不可相加真实混合物审计视图，独立自由液体或无关废物保持分开。

- 选定流：实际真正混合的废清洁载体
- 流属性/单位：Mass / kg
- 数量规则：在 cp_fates 下按实际排他归属兼容原生量/正值同范围 N_target 一次；已按参考流则不变，N_target=0 保留且不除
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：per reference flow
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_fates`
- 范围证据需求：实际任务/材料/混合来源、毛重/皮重/净重及独立组分原生元数据、接收身份/状态/运输/处理；不假定捕集效率或残余污染物。

#### retired_linen

责任节点与原流角色：shared_bed_service / outputs / waste

按真实状态/接收方独立废弃的布草/纺织品，不是每次弄脏/拒收/重洗物、遗失件或洗涤事件。完整资产/租赁服务已覆盖真实寿命终结时，保留关联物理审计而不再增处理负荷。

- 选定流：实际废弃运营寝具与重复纺织品
- 流属性/单位：Mass / kg
- 数量规则：在 cp_assets 下按实际排他归属兼容原生量/正值同范围 N_target 一次；已按参考流则不变，N_target=0 保留且不除
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：per reference flow
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_assets`
- 范围证据需求：实际退役/下一用途决定/纺织品谱系、原生接收干湿/污物/组成/来源及单一寿命终结运输处理责任。

#### retired_equipment

责任节点与原流角色：shared_bed_service / outputs / waste

完整寿命责任下真实整机/部件废弃。同一移交物中保留液体/电池/纺织内容不可相加，不能再增组分出口；真实分离物流分别对应接收方。

- 选定流：实际废弃床架、床垫、家具或设备物流
- 流属性/单位：Mass / kg
- 数量规则：在 cp_assets 下按实际排他归属兼容原生量/正值同范围 N_target 一次；已按参考流则不变，N_target=0 保留且不除
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：per reference flow
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_assets`
- 范围证据需求：真实资产/部件/床垫身份、废弃状态/净量/接收方、保留内容归属及已覆盖生命周期寿命终结/运输/处理。

#### contained_wastewater

责任节点与原流角色：shared_bed_service / outputs / waste

真实下水道/接收方或独立封闭自由液体按自身状态/组成/数量计，不是直接环境排口、水蒸气或供水总量。供应商已覆盖洗衣污水不重复。

- 选定流：实际封闭卫生、清洁和支持污水移交
- 流属性/单位：Volume / m3
- 数量规则：在 cp_waterstate 下按实际排他归属兼容原生量/正值同范围 N_target 一次；已按参考流则不变，N_target=0 保留且不除
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：per reference flow
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_waterstate`
- 范围证据需求：实际接收/计量原生体积与物流/组成/接收方/处理/运输来源；仅转换时用兼容密度温度，保留水及真实混合与独立液体分清。

#### independent_maintenance_waste

责任节点与原流角色：shared_bed_service / outputs / waste

按真实身份/状态/接收方展开实际独立收集非水液体/残余/耗材，不把全部液体并入一个通用废物。设备/混合物保留内容不属本独立出口，封闭交接不是空气排放。

本卡为独立身份分支`independent_maintenance_waste_used_lubricating_oil`之外的余项清单要求。已计入分支的实际数量不再计入本余项交换，原类目总量仅作不可相加的协调审计。其他实际材料、状态、来源或介质仍须保留自身经核实的身份、原生数量及供应接收责任；记录缺失时，不推定条件分支发生、不发生或数量为零。

- 选定流：实际独立维护材料及非水废物流
- 流属性/单位：Mass / kg
- 数量规则：在 cp_fates 下按实际排他归属兼容原生量/正值同范围 N_target 一次；已按参考流则不变，N_target=0 保留且不除
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：per reference flow
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_fates`
- 范围证据需求：实际来源任务/SKU/原生净量/组成/所用密度温度、接收覆盖及整物/部件/混合不可相加排除链接。

#### contained_refrigerant_waste

责任节点与原流角色：shared_bed_service / outputs / waste

实际独立移交处理的不可用回收化学物/混合物，区别于保留库存、可用已使用出口、设备保留内容及直接空气释放。仅回收/补充不确定废物或泄漏。

- 选定流：实际独立不可用回收制冷剂废物
- 流属性/单位：Mass / kg
- 数量规则：在 cp_refrigerants 下按实际排他归属兼容原生量/正值同范围 N_target 一次；已按参考流则不变，N_target=0 保留且不除
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：per reference flow
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_refrigerants`
- 范围证据需求：实际化学物/原生废物净量/状态/接收方/运输/处理/来源及谱系，不假设销毁因子或收益。

#### direct_water_outfall

责任节点与原流角色：shared_bed_service / outputs / elementary

仅真实液态水直接跨入已知环境，封闭下水道/处理交接保持废物流。未知差额或购水不产生排口；空气水蒸气是独立质量物质角色。

- 选定流：实际向已记录介质直接住宿排水
- 流属性/单位：Volume / m3
- 数量规则：在 cp_waterstate 下按实际排他归属兼容原生量/正值同范围 N_target 一次；已按参考流则不变，N_target=0 保留且不除
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：per reference flow
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_waterstate`
- 范围证据需求：实际地点/接收介质/原生直接体积/区间/组成/去向/来源及责任，不默认地下水/海/河身份。

#### direct_species

责任节点与原流角色：shared_bed_service / outputs / elementary

实际独立举证的化学物/混合组分/颗粒及接收介质，来自真实运营任务或事件。水蒸气须实际质量向空气；封闭液体/水保持废物。采购、气味、补充、缺测及平衡缺口既不能证明发生也不能证明零。

本卡为独立身份分支`direct_species_co2_fossil_air`; `direct_species_methane_fossil_air`; `direct_species_nitrous_oxide_air`之外的余项清单要求。已计入分支的实际数量不再计入本余项交换，原类目总量仅作不可相加的协调审计。其他实际材料、状态、来源或介质仍须保留自身经核实的身份、原生数量及供应接收责任；记录缺失时，不推定条件分支发生、不发生或数量为零。

- 选定流：实际向已记录介质释放的指定住宿物质
- 流属性/单位：Mass / kg
- 数量规则：在 cp_species 下按实际排他归属兼容原生量/正值同范围 N_target 一次；已按参考流则不变，N_target=0 保留且不除
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：per reference flow
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_species`
- 范围证据需求：精确物质/基准/颗粒/介质及独立原生实测量，或兼容真实活动-因子，各操作数均有原生元数据，组成/去向/气态仅按所需一次并排除供应商重叠。


## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `bed_identity_fulfillment` | occupied_bed_night | 须有实际单人睡眠铺位、独立共享房库存及访客履约/当地夜/分配/移动/撤销来源。同服务移动一个 ID，保留两段资源；真实额外服务有不同 ID。整房包租/备用空床/预订/未到店/容量/24小时产出无效。宿舍只有一个实际住客仍可符合；免费履约保留负荷；仅拒绝清洁不构成拒收。 | generator-barcelona-shared-bed; hiusa-nyc-bed-support |
| `output_and_space_closure` | 全部消费者 | 枚举预期产出/交接/原生量及不重叠床位空间时间；真实整间私房制度不能同时计算其全部包含床位产出。物理驱动纳入其他真实用户和全部期间；可用外转/残余/废物分开。不作无支持容量/房间均分/费用/收入分配。 |  |
| `necessary_pool_closure` | 全部资源 | 优先使用实际任务/仪表直接追溯，或按该资源范围兼容原始量*target_driver/正值且完整的 all_consumer_driver 归属。枚举全部实际宿舍住客、私房/包房/附属服务/租户用户及期间。同池必要空置、待机、封床、失败/取消/未到店任务的资源先进入池总量，再归属真实产出责任。名义容量、仅列空闲记录或删除关闭日均不能留下无责任负荷。跨期结转保留来源、接收期间及最终解决链接；责任未决阻断最终数据包。已归属目标总量只除以一次正值、严格同范围 N_target；已按参考流的记录不再除；N_target=0 时保留原始资源且不除。 |  |
| `full_life_and_providers` | 全部资产、服务及附属职责 | 采集建筑、床架/床垫、家具、设备、纺织品及可重复使用支撑物在全部用户和期间的完整制造、安装、装修、维护、实际更换及寿命终结。兼容寿命驱动量为已观察全用户历史加有来源的剩余生产等效服务，或实际终止总量；每个独立原生数量/等效量/单位/基准/方法/状态/时间/来源均保留，并记录不确定性、敏感性和更新。年度已入住 N_target 不是寿命。日历/容量时间驱动的可归属分子也须包含空闲责任；生产服务驱动须完整实际及有来源剩余使用并闭合全部负荷。采用完整资产/供应商覆盖，或排他补足缺失阶段，不能并用；完整链使用前，真实缺失阶段须已按原生量/来源/责任人/覆盖链接实际集成一次。 实际包内餐食/活动须完整物理供应商义务或已复核直接路线；不能以通用服务标签删除原料/烹饪/废物/资产。 |  |
| `supply_and_fluid_exclusivity` | 物料及流体角色 | S=已归属期初+外部净收货-含保留回收物的期末，实际材料收货排除容器皮重。只能选择一种：总供给 S/N_target 输入并把实际匹配的未使用外退/N_target 单列输出；或仅消耗量 (S-matched_unused_return)/N_target 输入且省略该匹配退货输出。禁止把退货加到输入、重复扣减、无关负量抵销或自动给予避免生产收益。内部循环不是新外部供给；废耗材料保留原供给负荷。 核对 opening_installed+opening_stored_total+new_factory_charge_entry+net_standalone_receipts+other_external_receipts 与 closing_installed+closing_stored_total+unused_external_returns+used_usable_export+contained_waste_export+retained_equipment_exit+independently_evidenced_direct_release+explicit_unknown。储存总量包含保留的回收子库存；回收是不可相加的审计视图，不能再加一份库存。批次/充注/角色 ID 排他；新出厂充注只在不属期初或其他收货时进入，其他收发排除所有已列项，内部充注/回收抵销。出厂充注生产由完整资产或明确缺失阶段补充覆盖一次。仅消耗扣减/省略只适用于有证据的同来源同状态未使用独立供给子库存及其匹配未使用退货。全部已使用回收液，无论原厂充注或后续补充，都按实际可用外转状态记录，不自动等同未使用新料，不扣减新料制造，不作负输入或自动收益。整机/部件/混合废物保留内容是不可相加视图，不另增液体出口。补充、回收或未解释差额既不能证明直接释放也不能证明零。 |  |
| `receiver_species_state` | 全部出口 | 展开真实不同物流；整混合物/组分/整物内容不可相加。封闭污水/制冷剂是废物；直接排水用实际介质，真实水蒸气按质量向空气。原生来源/测量/因子和精确物质必需，未知差额或身份查询失败不证明排放、不存在或零。供应商/完整资产运输处理不重复。 |  |
| `native_linen_freight` | 全部计量 | 按干基纺织品计量的洗衣服务不是新纺织品/湿货运。各操作数有原生元数据，同样品仅水干湿百分数转换，EACH/TOTAL 实际次数只计一次；带包装载荷保留容器/支撑物，仅扣非货物车辆皮重。该记录货运份额在求和内部，同范围正值 N_target 只除一次。无支持真实等效、介质、转换或供应商阶段阻断最终数据使用。 |  |
| `evidence_range_readiness` | 全部数据 | 最终交换须实际身份/配置/数量/原生证据及已核实具体属性/单位支持。缺通用数值范围或 UUID 本身保持公开候选缺口，不编默认值。声称的来源区间须可追溯且物理兼容；经验 QA 护栏须独立可比参考证据，不以同批极值循环自证。检查通过不证明最终绑定、科学复核或发布就绪。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | secondary_dataset; background_dataset，须实际身份和完整性复核后 |
| downstream_use | 共享宿舍一个实际履约独立供给访客单床位夜的前景数据包及 process/lifecyclemodel 投影 |
| allowed_use | 单人睡眠铺位独立向访客供给，具真实共享库存/配置/分配/住宿夜证据，完整全用户资源池/寿命/供应商/附属覆盖 |
| excluded_use | 整间私房夜或床容量转换、双人/多人睡眠等效、学生/工人/营地参考流、权利/预订/未用容量、未复核实际生产路线；不得将不完整餐食/供应商/全寿命/空闲义务作零 |
| required_metadata | 实际物业/床位/上下铺/房间平面配置及独立供给制度；访客/入住/服务夜/移动/履约/撤销/当地时间/DST/实际套餐；全部真实用户/产出交接/原生物理驱动、全部资产寿命/洗衣/供应商/接收方/附属范围及跨期责任解决 |
| required_quality_disclosure | 实际测量与估计/原生基准/来源/校准/覆盖/不确定性/敏感性/更新；未决流和支持身份、数量/物质/介质/寿命/归属及阶段完成缺口；缺通用数值范围本身不证明错误或零 |
| update_trigger | 床房拓扑、包房/共享制度、访客/住宿夜惯例、套餐/餐食/活动/洗衣/供应商/公共用户、实际新增生产路线、资产寿命/库存/去向/身份或计量证据改变 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| unsd-cpc3-63114 | official_guidance | https://unstats.un.org/unsd/classifications/Econ/Structure/Detail/EN/2100/63114 | 63114 包含青年旅舍/山屋/小屋等多人房按日/周短期访客住宿，排除休闲营地63130、学生住所63210及工人旅舍/营地63220。仅分类背景，不证明床数、服务量、入住率、分配或全生命周期。 |
| generator-barcelona-shared-bed | extension_guidance | https://staygenerator.com/hostels/barcelona?lang=en-GB | 运营方原生页面明确共享宿舍可订一个或多个床位，区别整间私房。共享床位真实含寝具/设施，毛巾可能另购。当前促销可能含早餐；同物业同时存在整房与单床供给。仅定性配置，不把容量、价格、年龄、餐食、清洁频率、布草更换次数、装载率或热强度当默认。真实预订确定套餐/促销及实际床位，不推通用无餐。 |
| generator-booking-service-scope | handbook | https://staygenerator.com/information/booking-terms-and-conditions | 同一预订可含共享房床位，且不保证同房。预订详情区分人数、房、时长和附加项。取消/未到店可收费但无实际入住。食饮通常另计但具体预订可含。仅用于区别付款/预订与物理分配和交付范围，不作法律意见、通用商业要求、服务夜时长、默认食物排除或 LCA 因子；不导入现场钟点、法律规则或价格。 |
| hiusa-nyc-bed-support | handbook | https://www.hiusa.org/hi-new-york-city-hostel-faq | 到店实际分配上下铺，延住可能换床/房。该物业包括布草毛巾，有住客厨房、自助洗衣、免费活动和另售咖啡馆/酒吧。仅真实现场限定证据，不导入年龄、价格、尺寸、钟点、清洁或洗衣率。住客洗衣不证明运营布草处理路线；餐厅/活动存在不确定真实床位套餐包含。 |
| eurostat-rooms-bedplaces-nights | official_guidance | https://ec.europa.eu/eurostat/cache/metadata/en/tour_occ_esms.htm | 卧室是不可分租赁整单元，床位名额衡量容量，双人床含两个容量名额；实际过夜夜数是不同变量。容量和统计入住率不是本 PCR 的实际床位服务 N 或因果负荷份额。不导入营地四人兜底、关闭日排除、默认年龄或统计可用容量作为寿命/实际入住。目标真实单铺位范围比全部统计床位更窄。 |
| pef-hotel-introduction-2026 | method_factor | 2026 second public consultation introduction,3pages; https://pefhotelaccommodation.eu/system/files/document/introduction-to-the-pefcr-for-hotel-accommodation_2nd-consultation.pdf | 仅作为酒店设备/建筑/纺织品制造-使用-寿命终结及运行材料的有限定性背景；本方法明确采集所采用的前景责任。它是2026第二轮公众咨询三页简介，不是完整批准 PEFCR，不声称宿舍合规，不导入默认值或来源排除规则。 |
