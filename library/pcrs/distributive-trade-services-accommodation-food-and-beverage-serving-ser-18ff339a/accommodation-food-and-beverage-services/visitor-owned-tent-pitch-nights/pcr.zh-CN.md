---
pcr_id: pcr.visitor-owned-tent-pitch-nights
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 访客自带帐篷露营位夜服务

## 1. 范围与适用性

本方法供给真实完成、实际独占指定空间的访客自带帐篷露营位夜。须以真实平面、营位空间边界、分配和入住记录确认一个物理营位，客自带帐篷装备车辆不是经营方提供的过夜棚体。表面、面积、电水排接入、门禁及公共设施包是实际限定，不因此分别新建方法或预设数量。当前不声称等价房车拖挂车车顶帐篷位、经营方成套帐篷小屋、按人的共享开放草场、永久居住纯存储或住宿餐饮娱乐全包营。

纳入真实营位准备检查周转、接待门禁、场地公共设施运行维护、实际提供的营位公用资源及归属共用卫生热水洗涤照明支持。无营位接电不等于公共能源水为零。完整场地工程排水道路公共建筑设备复用品制造安装维护更换寿命终结跨全部使用方期间归属。原生土地占用和真实土地转变事件具有边界阶段责任证据，与供应方资产已含相同土地接口互斥。

访客旅行、个人自备帐篷装备食品燃料生产及独立自购服务不属于所选营位供给产品，除非真实纳入经营方声明服务。经营方实际设备材料公用义务和住客来源废物卫生职责不因客自带帐篷消失。客人自行烹饪生火燃料及经营者生产服务须真实活动主体范围证据；无接电不证明负荷排放零。真实独立现场发电工业洗衣生物污水堆肥食品娱乐生产须复核路线模块扩展且补齐职责后才完整使用。

第一方例子仅支持产品运营提问，不作通用面积人数帐篷数最少夜数电额定值天气封场清洁强度草土配方处理技术寿命或数值因子。实际原生量来源验收必需；缺计量通用范围具体身份披露为缺口，不编数不当零。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.visitor-owned-tent-pitch-nights |
| classification_refs | CPC3.0:63120较窄访客自带帐篷营位供给，非全部房车帐篷空间类别 |
| covered_products | 实际完成独占指定空间访客自带帐篷营位夜，声明真实表面接入公共设施范围 |
| excluded_products | 房车车顶车辆等价、经营方过夜棚体、按人共享场、居住纯存储、全包营；未使用预订可用容量 |
| representative_product | 实际场址营位平面边界版本、访客分配交付当地夜、表面公用设施责任及全部用户地面土地场地全寿命责任 |
| production_route | 场地营位准备真实地面状态→实际独占营位分配→访客帐篷过夜及声明支持→实际确认周转维修去向记录 |
| market_state | 已交付营地空间服务；预订费住客数个人棚体非此计数产出 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 实际完成访客自带帐篷营位夜 |
| How much | 1 Item(s) |
| How well | 一个实际独占指定营位，边界表面接入公共设施包、合格访客入住及物理确认明确；不默认面积帐篷人数 |
| How long or cycle | 有来源当地住宿夜定义起止时区UTC偏移夏令时实际时长，任务报告库存场地寿命阶段独立，不固定24小时 |
| reference_flow_link | occupied_tent_pitch_night |

| 字段 | 值 |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | 实际完成访客自带帐篷营位夜 |
| Reference flow property | Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` |
| Reference unit group | Units of items `5beb6eed-33a9-47b8-9ede-1dfe8f679159` |
| Reference unit | Item(s) |
| Required qualifiers | actual_site_and_operator; actual_pitch_id_plan_boundary_version; exclusive_pitch_space_time_assignment; visitor_owned_tent_not_operator_shelter; actual_surface_and_ground_state; actual_electric_water_drainage_hookup_scope; actual_access_common_facility_package; actual_fulfilled_night_acceptance_reversals; local_night_start_end_timezone_DST_duration; actual_guests_tents_vehicles_separate_qualifiers; real_other_pitch_RV_cabin_day_user_consumers; necessary_idle_weather_closed_restoration_pool; full_site_asset_alluser_observed_remaining_life; land_category_area_time_transformation_stage_owner; native_quantity_unit_basis_method_state_sampletime_source; completed_provider_receiver_coverage_and_carry_resolution |

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| pitch_identity | occupied_tent_pitch_night | Count | Item(s) | 核真实独占营位当地夜分配更换冲回后一次计数，不乘人数帐篷车辆面积，不自动等房夜房车日入场或固定24小时；白天暂离不擦除真实已供合格营位服务。 |
| native_scope | 全部清单行 | 实际有证据支持的属性 | 实际原生单位 | 每独立量分子分母转换密度温度时间操作数保自身原生单位基准方法状态采样时间来源；原始已归属已每参考口径互斥。 |
| land_space_time | land_occupation, land_transformation_in, land_transformation_out | Area; Area*time | m2; m2*a | 土地类别来源真实不重叠地块与准确区间时长日历换算必需。当前占用面积时间非每夜新增转变，也不再次计全资本寿命占地；真实转变前后事件及资产供应土地接口具唯一责任阶段。 |
| water_and_mixtures | supplied_water, actual_water_withdrawal, contained_wastewater, direct_water_outfall, direct_species; supplied_water_liquid_tap; direct_species_co2_fossil_air; direct_species_methane_fossil_air; direct_species_nitrous_oxide_air | Volume; Mass | m3; kg | 供水容装接收水直接环境排口与空气水蒸气是不同接口；仅转换时用兼容实际密度温度。留存水和真实混合组分非叠加，未知差额非去向或零。 |
| packed_load | supply_freight | Mass * distance | kg*km | 真实唯一装载路段载荷保湿内容包装支承；EACH实际次数一次TOTAL不变，仅扣车辆非货皮重。该记录份额置求和内后同范围正N除一次。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 真实可运营独占访客帐篷营位，平面表面接入公共职责及场地寿命土地接口记录 |
| starting_condition_role | 营地空间供给与完整归属场地资本生命周期；既有地面公共建筑不免负担 |
| product_classification_scope | 较窄63120访客自带帐篷指定营位夜；接入表面配置不是新PCR身份 |
| recursive_input_rule | 不得再次买同一最终营位夜作自身投入。完整公用清洁地面资产服务或互斥实际底层职责择一，不推个人帐篷旅行输入 |
| upstream_dataset_requirement | 实际材料资源场地排水道路公共建筑设备复用品制造安装维护更换终结跨全部用户期间完整。缺实际职责须按原生量来源责任覆盖完成链接补一次；土地阶段供应重叠明确 |
| disclosure | 真实营位空间时间状态完成夜与住客、全部其他消费者、天气封场恢复闲置池跨期、寿命土地职责矩阵、资源供应接收未知 |

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| actual_pitch | pitch_service | 实际营位分配地面门禁公共设施决定适用，表面电水排配置为实测限定，不默认不重复新方法。 | unsd-cpc3-campsites; ccc-pitch-types |
| full_service_boundary | 全部职责 | 纳入实际营位资源和完整场地公共资本复用品寿命，不因付款方消失。住客废物卫生及经营方供应资源保留，无接电非公共电为零。 | ccc-sandringham-facilities |
| guest_provider_interface | actual actor/coverage | 个人帐篷车辆食品旅行属另声明旅程系统，除非经营方实际供应。客自炊生火与经营方燃料设备用品职责须主体范围证据；独立转换处理食品作业需复核扩展模块并完成覆盖。 | ruby-own-tent-context |
| land_phase_boundary | land/site/provider matrix | 当前土地占用、真实历史新增转变与全寿命资产供应土地接口具有互斥阶段时空类别责任覆盖；未知类别转变不得默认。租金地产总面积产权年度N非原生土地证据。 |  |

## 6. 过程清单结构

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| pitch_service | 访客自带帐篷营位及供应场地支持 | required | 真实完成独占指定访客帐篷营位夜 | 持续场地公共准备及真实营位地面清洁维修事件 | occupied_tent_pitch_night |

一个营位服务节点，持续地面场地公共职责与分配夜准备清洁检查维修批次重叠。资源事件失败封位恢复状态链原营位期间、整改复查再用维修退回接收及全部消费者真实产出账。未供不合格位不合格产出，但必要真实负担保池。维护事件不再产营位夜，不造帐篷制造节点或其他消费者参考副本。

### Process: 访客自带帐篷营位及供应场地支持 (`pitch_service`)

#### 输入

##### 产品流

###### 实际使用点交流电 (`purchased_electricity_ac`)

仅适用于实际跨越本节点边界、且未由完整供应商数据覆盖的交流电。该身份未特指供应方、电压、发电组合或交付线损归属，仍须按要求采集。经核实的电力流以1 MJ电能为基准，其ILCD属性名称为净热值；原生kWh按精确的3.6 MJ/kWh换算，不能套用燃料热值系数。直流电或其他不匹配电力状态保留在余项要求中。

- 选定流：交流电 `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- 绑定：`fixed`
- 流属性/单位: Energy / kWh
- 数量规则: 按cp_energy将真实互斥归属兼容原生量除正同目标N_target一次；已每参考不变，N_target=0保留不除
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每参考流
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_energy`
- 范围证据需求: 需真实表计进口读数区间量、供应地域电压和完整全用户范围，不铭牌或固定每夜电量。

###### 实际外购交付的有效热量 (`purchased_thermal_service_delivered_heat`)

仅记录有证据能量基准、实际跨越本节点边界交付的有效热量。保留供回状态、温度品位、覆盖范围及实际损失责任。通用热能身份不预设天然气、蒸汽质量、锅炉效率或温度；制冷、燃料能量及缺少蒸汽转能量证据的情形不使用该身份。

- 选定流：热能 `4f19a302-7b3b-11dd-ad8b-0800200c9a66`
- 绑定：`fixed`
- 流属性/单位: Energy / MJ
- 数量规则: 按cp_energy将真实互斥归属兼容原生量除正同目标N_target一次；已每参考不变，N_target=0保留不除
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每参考流
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_energy`
- 范围证据需求: 需真实交付状态原生量供应损失资产范围，采用时焓温度单位来源。

###### 实际液态处理自来水供给 (`supplied_water_liquid_tap`)

仅在实际来源确为处理后的自来水且用于所声明用途时适用。保留实际供应方、水质、温度状态和供应边界，不假定所有供水都是自来水。冰、瓶装矿泉水、再生水、未经处理的水及环境直接取水保留各自实际身份。沿用原卡原生质量或体积基准；最终换算为质量参考量时须有实际相容密度和状态证据，不能把目录中的次要体积关系作为默认现场密度。

- 选定流：自来水 `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- 绑定：`fixed`
- 流属性/单位: Volume / m3
- 数量规则: 按cp_water将真实互斥归属兼容原生量除正同目标N_target一次；已每参考不变，N_target=0保留不除
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每参考流
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_water`
- 范围证据需求: 需水源表计原生区间全部使用方职责供应范围，不每人升数或差额推断。

###### 实际独立记录的合成洗涤剂投入 (`cleaning_supplies_synthetic_detergent`)

仅适用于产品配方、供应状态及用途记录确认的实际合成表面活性洗涤剂。记录扣除包装皮重的材料净量，区分浓缩液与稀释水，整体配方与组分不得相加重复计入。肥皂、消毒剂、抹布、滤材等仍按各自实际身份记录，不预设清洁配方、剂量或发生。

- 选定流：洗涤剂 `1c57d123-df57-49ab-b9d4-957403beb8a5`
- 绑定：`fixed`
- 流属性/单位: Mass / kg
- 数量规则: 按cp_materials将真实互斥归属兼容原生量除正同目标N_target一次；已每参考不变，N_target=0保留不除
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每参考流
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_materials`
- 范围证据需求: 需真实组成状态库存排包装皮净物料匹配未用退回任务关联，不清洁剂量默认。

##### 基本流

#### 输出

##### 产品流

###### 实际完成访客自带帐篷营位夜 (`occupied_tent_pitch_night`)

一个真实独占指定营位当地夜，访客自带帐篷真实履行，表面接入服务包限定，非经营方棚体等价。

- 选定流: 实际完成访客自带帐篷营位夜
- 流属性/单位: Count / Item(s)
- 数量规则: 1 Item(s)
- 数值来源模式: `fixed_value`
- 适用范围: `site_specific`
- 归一化基准: 每参考流
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_pitch`
- 范围证据需求: 需场址营位图分配空间时间访客完成夜确认冲回当地时间，核真实免费夜更位。

##### 废物流

###### 真实独立交接地面维修植被废物 (`grounds_waste`)

仅实际不可用土剪物维修料各接收状态，留存覆盖物有用出口混清流不重废。

- 选定流: 真实独立交接地面维修植被废物
- 流属性/单位: Mass / kg
- 数量规则: 按cp_grounds将真实互斥归属兼容原生量除正同目标N_target一次；已每参考不变，N_target=0保留不除
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每参考流
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_grounds`
- 范围证据需求: 需实际水分组成原生净交接来源维修接收寿命覆盖，不默认化学市政废身份。

##### 基本流

###### 实际有独立证据的向空气排放化石二氧化碳 (`direct_species_co2_fossil_air`)

仅在实际证据确认化石来源、二氧化碳物种和向空气直接释放时适用。保留报告的碳或CO2基准，碳转CO2须独立有证据的化学计量，不预设系数或发生。 本卡仅记录本节点实际直接释放，不重复计入外购电力上游或供应商已覆盖排放。UUID表示未细分子介质的空气排放，其他实际子介质或来源仍须在余项中匹配，不能改标；缺失数据不等于零。

- 选定流：二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 绑定：`fixed`
- 流属性/单位: Mass / kg
- 数量规则: 按cp_releases将真实互斥归属兼容原生量除正同目标N_target一次；已每参考不变，N_target=0保留不除
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每参考流
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_releases`
- 范围证据需求: 需确切身份介质原生操作数状态时间来源及必要组成去向气体换算一次，因子已含范围供应重叠。

###### 实际有独立证据的向空气排放化石甲烷 (`direct_species_methane_fossil_air`)

仅在实际证据确认化石来源、甲烷物种和向空气直接释放时适用。生物源或来源未知甲烷仍在余项要求中，不得改标化石源；不预设泄漏发生、气体比例、数量或排放系数。 本卡仅记录本节点实际直接释放，不重复计入外购电力上游或供应商已覆盖排放。UUID表示未细分子介质的空气排放，其他实际子介质或来源仍须在余项中匹配，不能改标；缺失数据不等于零。

- 选定流：甲烷 (化石源) `08a91e70-3ddc-11dd-9610-0050c2490048`
- 绑定：`fixed`
- 流属性/单位: Mass / kg
- 数量规则: 按cp_releases将真实互斥归属兼容原生量除正同目标N_target一次；已每参考不变，N_target=0保留不除
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每参考流
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_releases`
- 范围证据需求: 需确切身份介质原生操作数状态时间来源及必要组成去向气体换算一次，因子已含范围供应重叠。

###### 实际有独立证据的向空气排放氧化亚氮 (`direct_species_nitrous_oxide_air`)

仅在实际证据确认氧化亚氮物种及向空气直接释放时适用。原生数量为N2O质量，不是氮质量或氮气质量，不预设排放系数或发生。 本卡仅记录本节点实际直接释放，不重复计入外购电力上游或供应商已覆盖排放。UUID表示未细分子介质的空气排放，其他实际子介质或来源仍须在余项中匹配，不能改标；缺失数据不等于零。

- 选定流：一氧化二氮 `08a91e70-3ddc-11dd-94c3-0050c2490048`
- 绑定：`fixed`
- 流属性/单位: Mass / kg
- 数量规则: 按cp_releases将真实互斥归属兼容原生量除正同目标N_target一次；已每参考不变，N_target=0保留不除
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每参考流
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_releases`
- 范围证据需求: 需确切身份介质原生操作数状态时间来源及必要组成去向气体换算一次，因子已含范围供应重叠。

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| complete_pool | 全部资源 | 实际直接追踪或resource_quantity*兼容target_driver/正且完整all_consumer_driver。列帐篷房车小屋日客零售公共其他用户及实际期间，不默认等位人数面积费用比例。必要空置待机天气封场地面恢复失败取消未到先入本供给池总量再归实际产出。有据才分离真实其他用户，只列无主闲置账阻完整性。原始目标量除严格同范围正N一次，已每参考不再除，N0保留来源延续承接消解。 |  |
| full_life | site assets/reusables | 全寿命服务用实际asset_native_quantity*兼容等价*job_used_driver/正lifetime_all_user_driver，含全部用户既往加有来源剩余或真实终止，各原生元数据不确定性更新。年度N非寿命；容量日历驱动分子须含对应必要闲置恢复封场责任，使真实池用户剩余责任穷尽全负担。完整供应或实际底层资产作业阶段择一。 |  |
| stock_and_returns | supplies/fluids | S=归属期初+净外收-含保留回收期末，排供应容器皮重。毛S/N输入配匹配未用退回/N输出，或净耗(S-return)/N输入且省匹配输出。内部回收非收货；仅同源同状态有据未用独立子库可净。已用回收工质材料按实际外送态记录，不扣新供应制造不负输入不自动信用。 |  |
| ground_rejects | failed pitch/maintenance routes | 真实湿损不合格封位失败准备拒收物料保原负担及整改复查再用维修退回接收实际路径，链接原事件。未提供营位不计合格夜，维修不新产夜；退款或拒可选任务不抹真实交付。 |  |
| land_responsibility | land interfaces | 当前占用按互斥真实地块面积*兼容实际时长和该期间土地类别场地职责，必要闲置恢复封场负担归真实供给责任。单一转变事件前后为不重复实际面积，经有据负责场地服务寿命归一次；当前标签不推历史转换，供应资产已含相同土地阶段不重加。 |  |
| receiver_ownership | 全部去向 | 真实可用废物容装直接物种各展开。整资产部件真实混流组分留存液非加和视图；接收运输处理资本供应终结唯一责任，不自动回收生物碳替代信用或缺数据零。 |  |

## 8. 前景数据采集计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_pitch | pitch_service | occupied_tent_pitch_night; all target scope | 实际独占营位与完成夜台账 | record_id; event_id; site_id; reporting_period; pool_id; source_record_links; all_actual_consumer_ids; raw_attributed_per_reference_state; responsibility_owner; provider_coverage_matrix; uncertainty; time_zone; timestamp_source; carry_source_record; carry_receiving_record; carry_resolution_record; unassigned_burden_blocker; target_driver; target_driver_unit; target_driver_basis; target_driver_method; target_driver_state; target_driver_sample_time; target_driver_source; all_consumer_driver; all_consumer_driver_unit; all_consumer_driver_basis; all_consumer_driver_method; all_consumer_driver_state; all_consumer_driver_sample_time; all_consumer_driver_source; N_target; N_target_unit; N_target_basis; N_target_method; N_target_state; N_target_sample_time; N_target_source; native_conversion_factor; native_conversion_factor_unit; native_conversion_factor_basis; native_conversion_factor_method; native_conversion_factor_state; native_conversion_factor_sample_time; native_conversion_factor_source; pitch_id; pitch_plan_source; pitch_boundary_polygon; space_configuration_version; effective_start; effective_end; exclusive_space_time_key; actual_surface_state; hookup_electric_water_drainage_scope; supplied_common_facility_package; visitor_own_tent_evidence; assignment_id; visit_id; delivered_pitch_night_id; actual_checkin; actual_checkout; local_night_definition; local_night_source; night_start; night_end; UTC_offset_start; UTC_offset_end; DST_resolution; acceptance_source; reversal_ids; move_segment_ids; complimentary_status; unprovided_cancel_noshow_state; weather_ground_rest_closed_state; actual_other_pitch_RV_cabin_day_users; fulfilled_pitch_nights; fulfilled_pitch_nights_unit; fulfilled_pitch_nights_basis; fulfilled_pitch_nights_method; fulfilled_pitch_nights_state; fulfilled_pitch_nights_sample_time; fulfilled_pitch_nights_source; guest_count; guest_count_unit; guest_count_basis; guest_count_method; guest_count_state; guest_count_sample_time; guest_count_source; tent_count; tent_count_unit; tent_count_basis; tent_count_method; tent_count_state; tent_count_sample_time; tent_count_source; vehicle_count; vehicle_count_unit; vehicle_count_basis; vehicle_count_method; vehicle_count_state; vehicle_count_sample_time; vehicle_count_source; actual_pitch_area; actual_pitch_area_unit; actual_pitch_area_basis; actual_pitch_area_method; actual_pitch_area_state; actual_pitch_area_sample_time; actual_pitch_area_source; actual_elapsed_duration; actual_elapsed_duration_unit; actual_elapsed_duration_basis; actual_elapsed_duration_method; actual_elapsed_duration_state; actual_elapsed_duration_sample_time; actual_elapsed_duration_source | 确认实际独占营位空间时段配置及客自带帐篷，不经营者棚体或按人任意共享场。更位冲回后唯一delivered_pitch_night_id计数，同夜迁位保两段资源不重N；同预订真实多个营位各算。当地夜定义起止UTC偏移夏令时实际入住证据必需，不名义24小时。人数帐篷车辆面积独立限定非倍数；免费真实交付保责任，退款拒可选任务白天暂离不抹交付。必要天气封场地面恢复空置待机失败未到先入同池总量再归真实产出，有据才分其他用户。N0保来源延续承接消解，未归属阻最终化。 | 实际Item(s)营位夜，住客帐篷车辆面积时间独立原生单位 | 每真实事件区间库存闭合及相关寿命更新 | 真实夜任务报告库存土地期间及场地资产全阶段，跨期可追溯 | 真实营位场地及全部其他营位房车小屋日客公共用户供应接收 | 每参考流 | 独立原生操作数单位基准方法状态采样时间来源校准适用覆盖不确定性，未知非零 |
| cp_energy | pitch_service | purchased_electricity; purchased_thermal_service; operating_fuel | 实际能源计量载体库存期间 | record_id; event_id; site_id; reporting_period; pool_id; source_record_links; all_actual_consumer_ids; raw_attributed_per_reference_state; responsibility_owner; provider_coverage_matrix; uncertainty; time_zone; timestamp_source; carry_source_record; carry_receiving_record; carry_resolution_record; unassigned_burden_blocker; target_driver; target_driver_unit; target_driver_basis; target_driver_method; target_driver_state; target_driver_sample_time; target_driver_source; all_consumer_driver; all_consumer_driver_unit; all_consumer_driver_basis; all_consumer_driver_method; all_consumer_driver_state; all_consumer_driver_sample_time; all_consumer_driver_source; N_target; N_target_unit; N_target_basis; N_target_method; N_target_state; N_target_sample_time; N_target_source; native_conversion_factor; native_conversion_factor_unit; native_conversion_factor_basis; native_conversion_factor_method; native_conversion_factor_state; native_conversion_factor_sample_time; native_conversion_factor_source; supplier_id; carrier_identity; supply_voltage_location; meter_id; meter_version; reset_rollover_source; already_applied_factor; average_power_population; actual_duty_cycle_source; delivery_temperature_reference; provider_loss_asset_scope; fuel_stock_ids; burn_activity_source; visitor_vs_operator_energy_actor; independent_conversion_review_link; register_start; register_start_unit; register_start_basis; register_start_method; register_start_state; register_start_sample_time; register_start_source; register_end; register_end_unit; register_end_basis; register_end_method; register_end_state; register_end_sample_time; register_end_source; register_adjustment; register_adjustment_unit; register_adjustment_basis; register_adjustment_method; register_adjustment_state; register_adjustment_sample_time; register_adjustment_source; meter_multiplier; meter_multiplier_unit; meter_multiplier_basis; meter_multiplier_method; meter_multiplier_state; meter_multiplier_sample_time; meter_multiplier_source; interval_energy; interval_energy_unit; interval_energy_basis; interval_energy_method; interval_energy_state; interval_energy_sample_time; interval_energy_source; interval_average_power; interval_average_power_unit; interval_average_power_basis; interval_average_power_method; interval_average_power_state; interval_average_power_sample_time; interval_average_power_source; elapsed_duration; elapsed_duration_unit; elapsed_duration_basis; elapsed_duration_method; elapsed_duration_state; elapsed_duration_sample_time; elapsed_duration_source; delivered_heat; delivered_heat_unit; delivered_heat_basis; delivered_heat_method; delivered_heat_state; delivered_heat_sample_time; delivered_heat_source; fuel_opening; fuel_opening_unit; fuel_opening_basis; fuel_opening_method; fuel_opening_state; fuel_opening_sample_time; fuel_opening_source; fuel_net_receipts; fuel_net_receipts_unit; fuel_net_receipts_basis; fuel_net_receipts_method; fuel_net_receipts_state; fuel_net_receipts_sample_time; fuel_net_receipts_source; fuel_closing; fuel_closing_unit; fuel_closing_basis; fuel_closing_method; fuel_closing_state; fuel_closing_sample_time; fuel_closing_source; fuel_unused_return; fuel_unused_return_unit; fuel_unused_return_basis; fuel_unused_return_method; fuel_unused_return_state; fuel_unused_return_sample_time; fuel_unused_return_source; fuel_volume; fuel_volume_unit; fuel_volume_basis; fuel_volume_method; fuel_volume_state; fuel_volume_sample_time; fuel_volume_source; fuel_density; fuel_density_unit; fuel_density_basis; fuel_density_method; fuel_density_state; fuel_density_sample_time; fuel_density_source; density_temperature; density_temperature_unit; density_temperature_basis; density_temperature_method; density_temperature_state; density_temperature_sample_time; density_temperature_source; density_pressure; density_pressure_unit; density_pressure_basis; density_pressure_method; density_pressure_state; density_pressure_sample_time; density_pressure_source; flow_row_id; actual_identity_case; actual_substance_or_material; actual_origin_and_medium; actual_state_and_gate; case_activation_evidence; typed_or_residual_quantity; quantity_exclusion_links; whole_total_reconciliation; unresolved_occurrence_not_zero | 核真实重置修订后兼容表差倍率或实际区间电量，所需换算一次。已积分kWh不乘时间，平均功率乘时长须同实际区间含启停闲置风机，不铭牌。外购有用热保实际交付设备范围，独立转换另审。燃料库存供应非燃烧；使用同源库存式时毛输入配未用输出或净耗输入省输出择一。真实营位公共职责全用户含必要闲置恢复封场，无接电离网不公共负荷零。主体范围区分客燃料与经营服务，未知不零。 | 真实kWh/MJ/kg或载体温压时间原生单位 | 每真实事件区间库存闭合及相关寿命更新 | 真实夜任务报告库存土地期间及场地资产全阶段，跨期可追溯 | 真实营位场地及全部其他营位房车小屋日客公共用户供应接收 | 每参考流 | 独立原生操作数单位基准方法状态采样时间来源校准适用覆盖不确定性，未知非零 |
| cp_water | pitch_service | supplied_water; actual_water_withdrawal; contained_wastewater; direct_water_outfall | 实际水源与接收接口台账 | record_id; event_id; site_id; reporting_period; pool_id; source_record_links; all_actual_consumer_ids; raw_attributed_per_reference_state; responsibility_owner; provider_coverage_matrix; uncertainty; time_zone; timestamp_source; carry_source_record; carry_receiving_record; carry_resolution_record; unassigned_burden_blocker; target_driver; target_driver_unit; target_driver_basis; target_driver_method; target_driver_state; target_driver_sample_time; target_driver_source; all_consumer_driver; all_consumer_driver_unit; all_consumer_driver_basis; all_consumer_driver_method; all_consumer_driver_state; all_consumer_driver_sample_time; all_consumer_driver_source; N_target; N_target_unit; N_target_basis; N_target_method; N_target_state; N_target_sample_time; N_target_source; native_conversion_factor; native_conversion_factor_unit; native_conversion_factor_basis; native_conversion_factor_method; native_conversion_factor_state; native_conversion_factor_sample_time; native_conversion_factor_source; water_source_id; purchased_or_direct_source; environmental_source_location; meter_id; actual_enduse_scope; receiver_id; contained_vs_environmental; receiving_medium; outfall_id; water_stream_id; composition_definition; composition_source; asset_provider_treatment_overlap; on_site_treatment_review_link; retained_component_membership; supply_volume; supply_volume_unit; supply_volume_basis; supply_volume_method; supply_volume_state; supply_volume_sample_time; supply_volume_source; source_withdrawal_volume; source_withdrawal_volume_unit; source_withdrawal_volume_basis; source_withdrawal_volume_method; source_withdrawal_volume_state; source_withdrawal_volume_sample_time; source_withdrawal_volume_source; contained_receiver_volume; contained_receiver_volume_unit; contained_receiver_volume_basis; contained_receiver_volume_method; contained_receiver_volume_state; contained_receiver_volume_sample_time; contained_receiver_volume_source; direct_outfall_volume; direct_outfall_volume_unit; direct_outfall_volume_basis; direct_outfall_volume_method; direct_outfall_volume_state; direct_outfall_volume_sample_time; direct_outfall_volume_source; retained_water_mass; retained_water_mass_unit; retained_water_mass_basis; retained_water_mass_method; retained_water_mass_state; retained_water_mass_sample_time; retained_water_mass_source; density; density_unit; density_basis; density_method; density_state; density_sample_time; density_source; density_temperature; density_temperature_unit; density_temperature_basis; density_temperature_method; density_temperature_state; density_temperature_sample_time; density_temperature_source; measured_water_vapour_mass; measured_water_vapour_mass_unit; measured_water_vapour_mass_basis; measured_water_vapour_mass_method; measured_water_vapour_mass_state; measured_water_vapour_mass_sample_time; measured_water_vapour_mass_source; flow_row_id; actual_identity_case; actual_substance_or_material; actual_origin_and_medium; actual_state_and_gate; case_activation_evidence; typed_or_residual_quantity; quantity_exclusion_links; whole_total_reconciliation; unresolved_occurrence_not_zero | 独立识别真实分源购水或环境取水、容装卫生清洁其他接收和真实直排介质。购水非重复取水自动污水量；降雨湿地蒸发余差不量化接口。容装液Waste，环境直排Elementary，空气蒸气须cp_releases实际物种质量。真实异废水分别、真混流保持独立非加和组成；仅兼容实际方法时密度温度换算。主体供应接收一次，现场处理须复核并补真实缺职责，不忽略。全用户池归属后正同目标N一次。 | 实际原生水m3/L/kg及独立组成密度温度 | 每真实事件区间库存闭合及相关寿命更新 | 真实夜任务报告库存土地期间及场地资产全阶段，跨期可追溯 | 真实营位场地及全部其他营位房车小屋日客公共用户供应接收 | 每参考流 | 独立原生操作数单位基准方法状态采样时间来源校准适用覆盖不确定性，未知非零 |
| cp_materials | pitch_service | cleaning_supplies; operator_guest_supplies; unused_supply_returns | 实际独立SKU净库存退回台账 | record_id; event_id; site_id; reporting_period; pool_id; source_record_links; all_actual_consumer_ids; raw_attributed_per_reference_state; responsibility_owner; provider_coverage_matrix; uncertainty; time_zone; timestamp_source; carry_source_record; carry_receiving_record; carry_resolution_record; unassigned_burden_blocker; target_driver; target_driver_unit; target_driver_basis; target_driver_method; target_driver_state; target_driver_sample_time; target_driver_source; all_consumer_driver; all_consumer_driver_unit; all_consumer_driver_basis; all_consumer_driver_method; all_consumer_driver_state; all_consumer_driver_sample_time; all_consumer_driver_source; N_target; N_target_unit; N_target_basis; N_target_method; N_target_state; N_target_sample_time; N_target_source; native_conversion_factor; native_conversion_factor_unit; native_conversion_factor_basis; native_conversion_factor_method; native_conversion_factor_state; native_conversion_factor_sample_time; native_conversion_factor_source; SKU_id; actual_purpose; composition_definition; composition_source; receipt_net_tare_scope; retained_internal_recovery_ids; matched_unused_return_id; matched_source_state; gross_or_consumed_convention; external_recipient; provider_included_scope; opening; opening_unit; opening_basis; opening_method; opening_state; opening_sample_time; opening_source; receipt_gross; receipt_gross_unit; receipt_gross_basis; receipt_gross_method; receipt_gross_state; receipt_gross_sample_time; receipt_gross_source; supply_container_tare; supply_container_tare_unit; supply_container_tare_basis; supply_container_tare_method; supply_container_tare_state; supply_container_tare_sample_time; supply_container_tare_source; net_external_receipts; net_external_receipts_unit; net_external_receipts_basis; net_external_receipts_method; net_external_receipts_state; net_external_receipts_sample_time; net_external_receipts_source; closing_including_recovery; closing_including_recovery_unit; closing_including_recovery_basis; closing_including_recovery_method; closing_including_recovery_state; closing_including_recovery_sample_time; closing_including_recovery_source; matched_unused_return; matched_unused_return_unit; matched_unused_return_basis; matched_unused_return_method; matched_unused_return_state; matched_unused_return_sample_time; matched_unused_return_source; EACH_count; EACH_count_unit; EACH_count_basis; EACH_count_method; EACH_count_state; EACH_count_sample_time; EACH_count_source; per_piece_quantity; per_piece_quantity_unit; per_piece_quantity_basis; per_piece_quantity_method; per_piece_quantity_state; per_piece_quantity_sample_time; per_piece_quantity_source; prepared_solution_mass; prepared_solution_mass_unit; prepared_solution_mass_basis; prepared_solution_mass_method; prepared_solution_mass_state; prepared_solution_mass_sample_time; prepared_solution_mass_source; concentrate_mass; concentrate_mass_unit; concentrate_mass_basis; concentrate_mass_method; concentrate_mass_state; concentrate_mass_sample_time; concentrate_mass_source; dilution_water; dilution_water_unit; dilution_water_basis; dilution_water_method; dilution_water_state; dilution_water_sample_time; dilution_water_source; active_fraction; active_fraction_unit; active_fraction_basis; active_fraction_method; active_fraction_state; active_fraction_sample_time; active_fraction_source; density; density_unit; density_basis; density_method; density_state; density_sample_time; density_source; density_temperature; density_temperature_unit; density_temperature_basis; density_temperature_method; density_temperature_state; density_temperature_sample_time; density_temperature_source; flow_row_id; actual_identity_case; actual_substance_or_material; actual_origin_and_medium; actual_state_and_gate; case_activation_evidence; typed_or_residual_quantity; quantity_exclusion_links; whole_total_reconciliation; unresolved_occurrence_not_zero | 各SKU状态独立原生期初加净外收减含保留回收期末。净收排容器皮，EACH实际数一次TOTAL不变。毛S/N输入配匹配同库未用退回/N输出，或净耗(S-return)/N输入且省匹配输出。内部循环非外收，废耗保制造负担，不无关负净信用。购配制液与浓液稀释活性含量互斥非加和，液内水非再购。经营物料区分客自备，最终具体原生属性量必需。 | 真实SKU原生质件体积及适用状态换算 | 每真实事件区间库存闭合及相关寿命更新 | 真实夜任务报告库存土地期间及场地资产全阶段，跨期可追溯 | 真实营位场地及全部其他营位房车小屋日客公共用户供应接收 | 每参考流 | 独立原生操作数单位基准方法状态采样时间来源校准适用覆盖不确定性，未知非零 |
| cp_grounds | pitch_service | grounds_materials; usable_grounds_residues; grounds_waste | 实际地面状态维护失败物料去向 | record_id; event_id; site_id; reporting_period; pool_id; source_record_links; all_actual_consumer_ids; raw_attributed_per_reference_state; responsibility_owner; provider_coverage_matrix; uncertainty; time_zone; timestamp_source; carry_source_record; carry_receiving_record; carry_resolution_record; unassigned_burden_blocker; target_driver; target_driver_unit; target_driver_basis; target_driver_method; target_driver_state; target_driver_sample_time; target_driver_source; all_consumer_driver; all_consumer_driver_unit; all_consumer_driver_basis; all_consumer_driver_method; all_consumer_driver_state; all_consumer_driver_sample_time; all_consumer_driver_source; N_target; N_target_unit; N_target_basis; N_target_method; N_target_state; N_target_sample_time; N_target_source; native_conversion_factor; native_conversion_factor_unit; native_conversion_factor_basis; native_conversion_factor_method; native_conversion_factor_state; native_conversion_factor_sample_time; native_conversion_factor_source; pitch_polygon_ids; surface_configuration; ground_condition_source; task_id; task_type; ground_rest_weather_closed_status; original_failed_preparation_event; remediate_reinspect_reuse_repair_return_discard_decision; actual_vegetation_or_soil_identity; material_stock_scope; provider_included_grounds_scope; onsite_biological_or_treatment_review_link; actual_material_receiver; retained_mulch_vs_external; usable_acceptance_source; EACH_TOTAL; worked_area; worked_area_unit; worked_area_basis; worked_area_method; worked_area_state; worked_area_sample_time; worked_area_source; actual_task_time; actual_task_time_unit; actual_task_time_basis; actual_task_time_method; actual_task_time_state; actual_task_time_sample_time; actual_task_time_source; opening_material; opening_material_unit; opening_material_basis; opening_material_method; opening_material_state; opening_material_sample_time; opening_material_source; net_receipts; net_receipts_unit; net_receipts_basis; net_receipts_method; net_receipts_state; net_receipts_sample_time; net_receipts_source; closing_material; closing_material_unit; closing_material_basis; closing_material_method; closing_material_state; closing_material_sample_time; closing_material_source; matched_unused_return; matched_unused_return_unit; matched_unused_return_basis; matched_unused_return_method; matched_unused_return_state; matched_unused_return_sample_time; matched_unused_return_source; actual_application_quantity; actual_application_quantity_unit; actual_application_quantity_basis; actual_application_quantity_method; actual_application_quantity_state; actual_application_quantity_sample_time; actual_application_quantity_source; whole_received_mass; whole_received_mass_unit; whole_received_mass_basis; whole_received_mass_method; whole_received_mass_state; whole_received_mass_sample_time; whole_received_mass_source; retained_moisture; retained_moisture_unit; retained_moisture_basis; retained_moisture_method; retained_moisture_state; retained_moisture_sample_time; retained_moisture_source; nonwater_mass; nonwater_mass_unit; nonwater_mass_basis; nonwater_mass_method; nonwater_mass_state; nonwater_mass_sample_time; nonwater_mass_source; water_fraction; water_fraction_unit; water_fraction_basis; water_fraction_method; water_fraction_state; water_fraction_sample_time; water_fraction_source; dry_water_ratio; dry_water_ratio_unit; dry_water_ratio_basis; dry_water_ratio_method; dry_water_ratio_state; dry_water_ratio_sample_time; dry_water_ratio_source; percent_to_ratio_factor; percent_to_ratio_factor_unit; percent_to_ratio_factor_basis; percent_to_ratio_factor_method; percent_to_ratio_factor_state; percent_to_ratio_factor_sample_time; percent_to_ratio_factor_source | 记录真实表面地面准备修复检查维护事件、天气恢复封位原因与真实材料原生量，不从营地推肥农药草土配方生物产率。真实独立生物转换处理须扩路线模块。供料同毛净未用库存互斥规则，湿态具独立样本状态证据。仅同样本纯水w_wet=m_water/m_as_received和r_dry=m_water/m_nonwater可百分转换后w_wet=r_dry/(1+r_dry)，其他挥发土植组成非水纯纤维。留场剪物覆盖物内部，独立有用外送或废弃分开，不碳信用。必要失败维修恢复封位负担保真实池，出口链原节点事件唯一接收责任。 | 真实地面物料面积时间水分原生单位 | 每真实事件区间库存闭合及相关寿命更新 | 真实夜任务报告库存土地期间及场地资产全阶段，跨期可追溯 | 真实营位场地及全部其他营位房车小屋日客公共用户供应接收 | 每参考流 | 独立原生操作数单位基准方法状态采样时间来源校准适用覆盖不确定性，未知非零 |
| cp_assets | pitch_service | full_life_site_assets; usable_asset_transfers; retired_asset_waste | 完整全用户场地设备生命周期 | record_id; event_id; site_id; reporting_period; pool_id; source_record_links; all_actual_consumer_ids; raw_attributed_per_reference_state; responsibility_owner; provider_coverage_matrix; uncertainty; time_zone; timestamp_source; carry_source_record; carry_receiving_record; carry_resolution_record; unassigned_burden_blocker; target_driver; target_driver_unit; target_driver_basis; target_driver_method; target_driver_state; target_driver_sample_time; target_driver_source; all_consumer_driver; all_consumer_driver_unit; all_consumer_driver_basis; all_consumer_driver_method; all_consumer_driver_state; all_consumer_driver_sample_time; all_consumer_driver_source; N_target; N_target_unit; N_target_basis; N_target_method; N_target_state; N_target_sample_time; N_target_source; native_conversion_factor; native_conversion_factor_unit; native_conversion_factor_basis; native_conversion_factor_method; native_conversion_factor_state; native_conversion_factor_sample_time; native_conversion_factor_source; asset_id; component_id; actual_BOM; surface_drainage_road_building_equipment_scope; manufacture_installation_scope; maintenance_replacement_event_ids; EOL_scope; all_user_all_period_records; observed_history_source; remaining_life_source; termination_source; equivalence_source; land_interface_stage_matrix; idle_rest_closed_numerator_responsibility; actual_transfer_receiver; usable_or_waste_state; retained_fluid_component_links; provider_identical_EOL_coverage; lifetime_uncertainty_sensitivity_update; asset_native_quantity; asset_native_quantity_unit; asset_native_quantity_basis; asset_native_quantity_method; asset_native_quantity_state; asset_native_quantity_sample_time; asset_native_quantity_source; component_native_quantity; component_native_quantity_unit; component_native_quantity_basis; component_native_quantity_method; component_native_quantity_state; component_native_quantity_sample_time; component_native_quantity_source; job_used_driver; job_used_driver_unit; job_used_driver_basis; job_used_driver_method; job_used_driver_state; job_used_driver_sample_time; job_used_driver_source; observed_life_driver; observed_life_driver_unit; observed_life_driver_basis; observed_life_driver_method; observed_life_driver_state; observed_life_driver_sample_time; observed_life_driver_source; sourced_remaining_life_driver; sourced_remaining_life_driver_unit; sourced_remaining_life_driver_basis; sourced_remaining_life_driver_method; sourced_remaining_life_driver_state; sourced_remaining_life_driver_sample_time; sourced_remaining_life_driver_source; lifetime_all_user_driver; lifetime_all_user_driver_unit; lifetime_all_user_driver_basis; lifetime_all_user_driver_method; lifetime_all_user_driver_state; lifetime_all_user_driver_sample_time; lifetime_all_user_driver_source; driver_equivalence; driver_equivalence_unit; driver_equivalence_basis; driver_equivalence_method; driver_equivalence_state; driver_equivalence_sample_time; driver_equivalence_source; actual_net_transfer_quantity; actual_net_transfer_quantity_unit; actual_net_transfer_quantity_basis; actual_net_transfer_quantity_method; actual_net_transfer_quantity_state; actual_net_transfer_quantity_sample_time; actual_net_transfer_quantity_source; remaining_transferred_service; remaining_transferred_service_unit; remaining_transferred_service_basis; remaining_transferred_service_method; remaining_transferred_service_state; remaining_transferred_service_sample_time; remaining_transferred_service_source | 记录真实场地排水道路公共建筑热水照明信息地面工具复用品及跨全部用户期间制造安装维护更换终结。任务观察剩余寿命驱动各原生元数据，完整寿命既往加有源剩余或真实终止。年度N或无主日历capacity非寿命，分母含容量时间则分子须含对应必要闲置恢复封位责任并穷尽真实池用户负担。完整资产供应或互斥底层阶段择一，缺实际阶段按已完成责任来源量覆盖补一次。矩阵明确土地占用转变阶段含排避免重接口。交接退役整部内容接收剩余寿命实际，已在资产终结内实物交接为链接审计非重处理。 | 真实资产原生量及兼容寿命等价驱动 | 每真实事件区间库存闭合及相关寿命更新 | 真实夜任务报告库存土地期间及场地资产全阶段，跨期可追溯 | 真实营位场地及全部其他营位房车小屋日客公共用户供应接收 | 每参考流 | 独立原生操作数单位基准方法状态采样时间来源校准适用覆盖不确定性，未知非零 |
| cp_providers | pitch_service | external_support_service | 实际物理供应成果覆盖台账 | record_id; event_id; site_id; reporting_period; pool_id; source_record_links; all_actual_consumer_ids; raw_attributed_per_reference_state; responsibility_owner; provider_coverage_matrix; uncertainty; time_zone; timestamp_source; carry_source_record; carry_receiving_record; carry_resolution_record; unassigned_burden_blocker; target_driver; target_driver_unit; target_driver_basis; target_driver_method; target_driver_state; target_driver_sample_time; target_driver_source; all_consumer_driver; all_consumer_driver_unit; all_consumer_driver_basis; all_consumer_driver_method; all_consumer_driver_state; all_consumer_driver_sample_time; all_consumer_driver_source; N_target; N_target_unit; N_target_basis; N_target_method; N_target_state; N_target_sample_time; N_target_source; native_conversion_factor; native_conversion_factor_unit; native_conversion_factor_basis; native_conversion_factor_method; native_conversion_factor_state; native_conversion_factor_sample_time; native_conversion_factor_source; provider_id; actual_task_id; native_result_definition; actual_service_quality; performed_declined_failed_status; served_pitch_case_period_links; all_provider_client_records; material_energy_water_asset_land_receiver_coverage; raw_converted_attributed_quantity_state; missing_duty_completed_dataset_link; completed_integration_time; integration_owner; integration_source; integration_scope_once; native_service_result; native_service_result_unit; native_service_result_basis; native_service_result_method; native_service_result_state; native_service_result_sample_time; native_service_result_source; physical_equivalence; physical_equivalence_unit; physical_equivalence_basis; physical_equivalence_method; physical_equivalence_state; physical_equivalence_sample_time; physical_equivalence_source; integrated_missing_quantity; integrated_missing_quantity_unit; integrated_missing_quantity_basis; integrated_missing_quantity_method; integrated_missing_quantity_state; integrated_missing_quantity_sample_time; integrated_missing_quantity_source | 采用真实完成辅助地面清洁安保配套物理成果原生属性单位有据等价，不默认发票费用工时。质量全客户范围相容。完整服务替代匹配材料资源资产土地运输接收一次，或缺职责按已完成数据集时间来源责任原生量覆盖补齐，待办不完整。原始已换算归属每参考状态明确，不重等价份额N。拒任务不否定已供营位，必要失败闲置保池责任。 | 真实供应原生物理成果单位及有据等价 | 每真实事件区间库存闭合及相关寿命更新 | 真实夜任务报告库存土地期间及场地资产全阶段，跨期可追溯 | 真实营位场地及全部其他营位房车小屋日客公共用户供应接收 | 每参考流 | 独立原生操作数单位基准方法状态采样时间来源校准适用覆盖不确定性，未知非零 |
| cp_fluids | pitch_service | maintenance_fluids; usable_recovered_fluids; contained_fluid_waste | 实际来源互斥设备工质库存去向 | record_id; event_id; site_id; reporting_period; pool_id; source_record_links; all_actual_consumer_ids; raw_attributed_per_reference_state; responsibility_owner; provider_coverage_matrix; uncertainty; time_zone; timestamp_source; carry_source_record; carry_receiving_record; carry_resolution_record; unassigned_burden_blocker; target_driver; target_driver_unit; target_driver_basis; target_driver_method; target_driver_state; target_driver_sample_time; target_driver_source; all_consumer_driver; all_consumer_driver_unit; all_consumer_driver_basis; all_consumer_driver_method; all_consumer_driver_state; all_consumer_driver_sample_time; all_consumer_driver_source; N_target; N_target_unit; N_target_basis; N_target_method; N_target_state; N_target_sample_time; N_target_source; native_conversion_factor; native_conversion_factor_unit; native_conversion_factor_basis; native_conversion_factor_method; native_conversion_factor_state; native_conversion_factor_sample_time; native_conversion_factor_source; system_id; fluid_SKU_chemical_blend; composition_definition_source; stock_lot_charge_role_ids; stored_excludes_separately_recovered; factory_charge_asset_coverage; factory_entry_excludes_opening_and_other_receipts; internal_charge_recovery_transfer_ids; unused_standalone_substock_id; matched_same_source_state_unused_return; used_recovery_transfer_ids; receiver_usable_waste_state_source; whole_equipment_content_exclusion; actual_release_measurement_link; unexplained_residual_status; opening_installed; opening_installed_unit; opening_installed_basis; opening_installed_method; opening_installed_state; opening_installed_sample_time; opening_installed_source; opening_stored; opening_stored_unit; opening_stored_basis; opening_stored_method; opening_stored_state; opening_stored_sample_time; opening_stored_source; opening_recovered; opening_recovered_unit; opening_recovered_basis; opening_recovered_method; opening_recovered_state; opening_recovered_sample_time; opening_recovered_source; new_factory_entry; new_factory_entry_unit; new_factory_entry_basis; new_factory_entry_method; new_factory_entry_state; new_factory_entry_sample_time; new_factory_entry_source; net_standalone_receipts; net_standalone_receipts_unit; net_standalone_receipts_basis; net_standalone_receipts_method; net_standalone_receipts_state; net_standalone_receipts_sample_time; net_standalone_receipts_source; other_exclusive_receipts; other_exclusive_receipts_unit; other_exclusive_receipts_basis; other_exclusive_receipts_method; other_exclusive_receipts_state; other_exclusive_receipts_sample_time; other_exclusive_receipts_source; closing_installed; closing_installed_unit; closing_installed_basis; closing_installed_method; closing_installed_state; closing_installed_sample_time; closing_installed_source; closing_stored; closing_stored_unit; closing_stored_basis; closing_stored_method; closing_stored_state; closing_stored_sample_time; closing_stored_source; closing_recovered; closing_recovered_unit; closing_recovered_basis; closing_recovered_method; closing_recovered_state; closing_recovered_sample_time; closing_recovered_source; matched_unused_return; matched_unused_return_unit; matched_unused_return_basis; matched_unused_return_method; matched_unused_return_state; matched_unused_return_sample_time; matched_unused_return_source; used_usable_export; used_usable_export_unit; used_usable_export_basis; used_usable_export_method; used_usable_export_state; used_usable_export_sample_time; used_usable_export_source; independent_contained_waste; independent_contained_waste_unit; independent_contained_waste_basis; independent_contained_waste_method; independent_contained_waste_state; independent_contained_waste_sample_time; independent_contained_waste_source; retained_whole_asset_content; retained_whole_asset_content_unit; retained_whole_asset_content_basis; retained_whole_asset_content_method; retained_whole_asset_content_state; retained_whole_asset_content_sample_time; retained_whole_asset_content_source; measured_direct_release; measured_direct_release_unit; measured_direct_release_basis; measured_direct_release_method; measured_direct_release_state; measured_direct_release_sample_time; measured_direct_release_source; unknown_residual; unknown_residual_unit; unknown_residual_basis; unknown_residual_method; unknown_residual_state; unknown_residual_sample_time; unknown_residual_source; other_exclusive_exits; other_exclusive_exits_unit; other_exclusive_exits_basis; other_exclusive_exits_method; other_exclusive_exits_state; other_exclusive_exits_sample_time; other_exclusive_exits_source | 按实际化学库存互斥lot/charge角色核账，存储排已单列回收，新工厂初充仅未含期初任一收货，其他收出口排所有列项。内部充回相抵非新外供；初装制造资产一次，独立供应另列。保留回收期末，已用可用外送Product，独立不可用Waste，真实物种介质释放按cp_releases。仅同源同状态有据未用独立子库可净耗匹配退回省输出；所有已用回收按外送态，非扣新制造负输入信用。整资产内工质非加和，未知余差补量非漏或零，供应接收覆盖一次。 | 真实化学混合物组分原生质量状态单位 | 每真实事件区间库存闭合及相关寿命更新 | 真实夜任务报告库存土地期间及场地资产全阶段，跨期可追溯 | 真实营位场地及全部其他营位房车小屋日客公共用户供应接收 | 每参考流 | 独立原生操作数单位基准方法状态采样时间来源校准适用覆盖不确定性，未知非零 |
| cp_freight | pitch_service | supply_freight | 真实唯一带包载荷路段及自身份额 | record_id; event_id; site_id; reporting_period; pool_id; source_record_links; all_actual_consumer_ids; raw_attributed_per_reference_state; responsibility_owner; provider_coverage_matrix; uncertainty; time_zone; timestamp_source; carry_source_record; carry_receiving_record; carry_resolution_record; unassigned_burden_blocker; target_driver; target_driver_unit; target_driver_basis; target_driver_method; target_driver_state; target_driver_sample_time; target_driver_source; all_consumer_driver; all_consumer_driver_unit; all_consumer_driver_basis; all_consumer_driver_method; all_consumer_driver_state; all_consumer_driver_sample_time; all_consumer_driver_source; N_target; N_target_unit; N_target_basis; N_target_method; N_target_state; N_target_sample_time; N_target_source; native_conversion_factor; native_conversion_factor_unit; native_conversion_factor_basis; native_conversion_factor_method; native_conversion_factor_state; native_conversion_factor_sample_time; native_conversion_factor_source; load_id; leg_id; unique_load_leg_key; actual_cargo_ids; EACH_TOTAL_scope; noncargo_tare_scope; carried_pack_support_water_membership; provider_empty_receiver_transport_coverage; already_applied_conversion_share; direct_payload; direct_payload_unit; direct_payload_basis; direct_payload_method; direct_payload_state; direct_payload_sample_time; direct_payload_source; vehicle_gross; vehicle_gross_unit; vehicle_gross_basis; vehicle_gross_method; vehicle_gross_state; vehicle_gross_sample_time; vehicle_gross_source; vehicle_noncargo_tare; vehicle_noncargo_tare_unit; vehicle_noncargo_tare_basis; vehicle_noncargo_tare_method; vehicle_noncargo_tare_state; vehicle_noncargo_tare_sample_time; vehicle_noncargo_tare_source; repeatcount; repeatcount_unit; repeatcount_basis; repeatcount_method; repeatcount_state; repeatcount_sample_time; repeatcount_source; distance; distance_unit; distance_basis; distance_method; distance_state; distance_sample_time; distance_source; payload_conversion; payload_conversion_unit; payload_conversion_basis; payload_conversion_method; payload_conversion_state; payload_conversion_sample_time; payload_conversion_source; gross_conversion; gross_conversion_unit; gross_conversion_basis; gross_conversion_method; gross_conversion_state; gross_conversion_sample_time; gross_conversion_source; tare_conversion; tare_conversion_unit; tare_conversion_basis; tare_conversion_method; tare_conversion_state; tare_conversion_sample_time; tare_conversion_source; distance_conversion; distance_conversion_unit; distance_conversion_basis; distance_conversion_method; distance_conversion_state; distance_conversion_sample_time; distance_conversion_source; that_record_share; that_record_share_unit; that_record_share_basis; that_record_share_method; that_record_share_state; that_record_share_sample_time; that_record_share_source | 每唯一装载区段用真实整包直接载荷或同状态兼容vehicle_gross仅减非货车辆皮重，保全部随货材料水包装支承。EACH匹配实际次数一次TOTAL不变，操作数换算有据。该记录兼容目标全部用户物理份额放SUM(payload*distance*that_record_share)内，再正同范围N一次，已归份额每参考不再重。供应接收空返唯一覆盖，不默认客旅行车辆燃料再加，必要失败N0保负责池。 | 实际载荷距离次数原生量及兼容kg*km | 每真实事件区间库存闭合及相关寿命更新 | 真实夜任务报告库存土地期间及场地资产全阶段，跨期可追溯 | 真实营位场地及全部其他营位房车小屋日客公共用户供应接收 | 每参考流 | 独立原生操作数单位基准方法状态采样时间来源校准适用覆盖不确定性，未知非零 |
| cp_land | pitch_service | land_occupation; land_transformation_in; land_transformation_out | 真实互斥地块时段转换阶段矩阵 | record_id; event_id; site_id; reporting_period; pool_id; source_record_links; all_actual_consumer_ids; raw_attributed_per_reference_state; responsibility_owner; provider_coverage_matrix; uncertainty; time_zone; timestamp_source; carry_source_record; carry_receiving_record; carry_resolution_record; unassigned_burden_blocker; target_driver; target_driver_unit; target_driver_basis; target_driver_method; target_driver_state; target_driver_sample_time; target_driver_source; all_consumer_driver; all_consumer_driver_unit; all_consumer_driver_basis; all_consumer_driver_method; all_consumer_driver_state; all_consumer_driver_sample_time; all_consumer_driver_source; N_target; N_target_unit; N_target_basis; N_target_method; N_target_state; N_target_sample_time; N_target_source; native_conversion_factor; native_conversion_factor_unit; native_conversion_factor_basis; native_conversion_factor_method; native_conversion_factor_state; native_conversion_factor_sample_time; native_conversion_factor_source; land_polygon_id; polygon_boundary_source; nonoverlap_membership; actual_land_category; land_category_source; phase_owner; current_vs_historical_event; occupation_start; occupation_end; calendar_convention_source; conversion_from_category; conversion_to_category; transformation_event_id; actual_conversion_date_source; original_land_condition_evidence; site_asset_provider_identical_land_scope; complete_alluser_period_responsibility; idle_ground_rest_closed_owner; event_lifetime_attribution_source; unknown_category_or_event_status; polygon_area; polygon_area_unit; polygon_area_basis; polygon_area_method; polygon_area_state; polygon_area_sample_time; polygon_area_source; occupation_duration; occupation_duration_unit; occupation_duration_basis; occupation_duration_method; occupation_duration_state; occupation_duration_sample_time; occupation_duration_source; duration_calendar_conversion; duration_calendar_conversion_unit; duration_calendar_conversion_basis; duration_calendar_conversion_method; duration_calendar_conversion_state; duration_calendar_conversion_sample_time; duration_calendar_conversion_source; actual_area_time; actual_area_time_unit; actual_area_time_basis; actual_area_time_method; actual_area_time_state; actual_area_time_sample_time; actual_area_time_source; transformed_area; transformed_area_unit; transformed_area_basis; transformed_area_method; transformed_area_state; transformed_area_sample_time; transformed_area_source; target_land_driver; target_land_driver_unit; target_land_driver_basis; target_land_driver_method; target_land_driver_state; target_land_driver_sample_time; target_land_driver_source; complete_land_driver; complete_land_driver_unit; complete_land_driver_basis; complete_land_driver_method; complete_land_driver_state; complete_land_driver_sample_time; complete_land_driver_source; conversion_job_driver; conversion_job_driver_unit; conversion_job_driver_basis; conversion_job_driver_method; conversion_job_driver_state; conversion_job_driver_sample_time; conversion_job_driver_source; conversion_lifetime_alluser_driver; conversion_lifetime_alluser_driver_unit; conversion_lifetime_alluser_driver_basis; conversion_lifetime_alluser_driver_method; conversion_lifetime_alluser_driver_state; conversion_lifetime_alluser_driver_sample_time; conversion_lifetime_alluser_driver_source | 映射真实互斥地块类别准确占用区间，面积时长日历因子独立有据。当前面积时间属实际期间全部供给公共职责含必要恢复封闭闲置，不仅已占脚印。土地转变须有据前后类别同事件面积日期，不每夜新事件或草标签推前类别。其场地寿命归属用有据完整全用户驱动，非年度N寿命。矩阵列当前土地历史转变全资产供应上游土地阶段时空类别责任，仅有证相同重叠才去，不删未覆接口。供应全寿命占地不再当当前重复计。未知类别事件覆盖阻实际接口非零默认，目标归后N一次。 | 真实原生土地面积面积时间时长及有据驱动单位 | 每真实事件区间库存闭合及相关寿命更新 | 真实夜任务报告库存土地期间及场地资产全阶段，跨期可追溯 | 真实营位场地及全部其他营位房车小屋日客公共用户供应接收 | 每参考流 | 独立原生操作数单位基准方法状态采样时间来源校准适用覆盖不确定性，未知非零 |
| cp_fates | pitch_service | spent_service_guest_waste | 实际独立接收废物与真实混流 | record_id; event_id; site_id; reporting_period; pool_id; source_record_links; all_actual_consumer_ids; raw_attributed_per_reference_state; responsibility_owner; provider_coverage_matrix; uncertainty; time_zone; timestamp_source; carry_source_record; carry_receiving_record; carry_resolution_record; unassigned_burden_blocker; target_driver; target_driver_unit; target_driver_basis; target_driver_method; target_driver_state; target_driver_sample_time; target_driver_source; all_consumer_driver; all_consumer_driver_unit; all_consumer_driver_basis; all_consumer_driver_method; all_consumer_driver_state; all_consumer_driver_sample_time; all_consumer_driver_source; N_target; N_target_unit; N_target_basis; N_target_method; N_target_state; N_target_sample_time; N_target_source; native_conversion_factor; native_conversion_factor_unit; native_conversion_factor_basis; native_conversion_factor_method; native_conversion_factor_state; native_conversion_factor_sample_time; native_conversion_factor_source; actual_stream_id; origin_guest_operator_provider; source_material_task_asset_link; collection_responsibility; actual_material_state; receiver_id; receiver_status_source; separate_stream_or_genuine_mixture; mixture_component_membership; whole_component_retained_liquid_exclusion; transport_treatment_owner; asset_provider_identical_EOL_coverage; actual_usable_vs_waste_decision; unknown_fate_status; received_gross; received_gross_unit; received_gross_basis; received_gross_method; received_gross_state; received_gross_sample_time; received_gross_source; container_tare; container_tare_unit; container_tare_basis; container_tare_method; container_tare_state; container_tare_sample_time; container_tare_source; actual_net_received_quantity; actual_net_received_quantity_unit; actual_net_received_quantity_basis; actual_net_received_quantity_method; actual_net_received_quantity_state; actual_net_received_quantity_sample_time; actual_net_received_quantity_source; carrier_quantity; carrier_quantity_unit; carrier_quantity_basis; carrier_quantity_method; carrier_quantity_state; carrier_quantity_sample_time; carrier_quantity_source; retained_liquid_quantity; retained_liquid_quantity_unit; retained_liquid_quantity_basis; retained_liquid_quantity_method; retained_liquid_quantity_state; retained_liquid_quantity_sample_time; retained_liquid_quantity_source; captured_material_quantity; captured_material_quantity_unit; captured_material_quantity_basis; captured_material_quantity_method; captured_material_quantity_state; captured_material_quantity_sample_time; captured_material_quantity_source; composition_fraction; composition_fraction_unit; composition_fraction_basis; composition_fraction_method; composition_fraction_state; composition_fraction_sample_time; composition_fraction_source; density; density_unit; density_basis; density_method; density_state; density_sample_time; density_source; density_temperature; density_temperature_unit; density_temperature_basis; density_temperature_method; density_temperature_state; density_temperature_sample_time; density_temperature_source | 每真实不同接收流材料状态接收方独立记录，含经营方负责收处的住客食品卫生包装其他废物，该职责不导入全部客购物生产。仅实际共收混合物为一实物流，载体液捕集各独立原生元数据非加和视图。留存物料资产内容非额外游离液废物。可用废物及运输处理在相同供应资产终结覆盖后唯一责任。未知去向量来源非零，不采购差额回收信用。全用户池归后N一次。 | 真实独立接收流原生质量体积组成单位 | 每真实事件区间库存闭合及相关寿命更新 | 真实夜任务报告库存土地期间及场地资产全阶段，跨期可追溯 | 真实营位场地及全部其他营位房车小屋日客公共用户供应接收 | 每参考流 | 独立原生操作数单位基准方法状态采样时间来源校准适用覆盖不确定性，未知非零 |
| cp_releases | pitch_service | direct_species | 真实物种介质活动因子证据 | record_id; event_id; site_id; reporting_period; pool_id; source_record_links; all_actual_consumer_ids; raw_attributed_per_reference_state; responsibility_owner; provider_coverage_matrix; uncertainty; time_zone; timestamp_source; carry_source_record; carry_receiving_record; carry_resolution_record; unassigned_burden_blocker; target_driver; target_driver_unit; target_driver_basis; target_driver_method; target_driver_state; target_driver_sample_time; target_driver_source; all_consumer_driver; all_consumer_driver_unit; all_consumer_driver_basis; all_consumer_driver_method; all_consumer_driver_state; all_consumer_driver_sample_time; all_consumer_driver_source; N_target; N_target_unit; N_target_basis; N_target_method; N_target_state; N_target_sample_time; N_target_source; native_conversion_factor; native_conversion_factor_unit; native_conversion_factor_basis; native_conversion_factor_method; native_conversion_factor_state; native_conversion_factor_sample_time; native_conversion_factor_source; event_id_species; actual_operated_duty; exact_species_or_particle_identity; receiving_medium; direct_location; actual_actor_boundary; factor_identity_source; factor_composition_fate_coverage; actual_measurement_source; contained_or_captured_exclusion; provider_asset_release_overlap; unexplained_residual_status; measured_species_mass; measured_species_mass_unit; measured_species_mass_basis; measured_species_mass_method; measured_species_mass_state; measured_species_mass_sample_time; measured_species_mass_source; actual_activity; actual_activity_unit; actual_activity_basis; actual_activity_method; actual_activity_state; actual_activity_sample_time; actual_activity_source; emission_factor; emission_factor_unit; emission_factor_basis; emission_factor_method; emission_factor_state; emission_factor_sample_time; emission_factor_source; composition_fraction; composition_fraction_unit; composition_fraction_basis; composition_fraction_method; composition_fraction_state; composition_fraction_sample_time; composition_fraction_source; fate_fraction; fate_fraction_unit; fate_fraction_basis; fate_fraction_method; fate_fraction_state; fate_fraction_sample_time; fate_fraction_source; gas_conversion_factor; gas_conversion_factor_unit; gas_conversion_factor_basis; gas_conversion_factor_method; gas_conversion_factor_state; gas_conversion_factor_sample_time; gas_conversion_factor_source; gas_temperature; gas_temperature_unit; gas_temperature_basis; gas_temperature_method; gas_temperature_state; gas_temperature_sample_time; gas_temperature_source; gas_pressure; gas_pressure_unit; gas_pressure_basis; gas_pressure_method; gas_pressure_state; gas_pressure_sample_time; gas_pressure_source; sample_duration; sample_duration_unit; sample_duration_basis; sample_duration_method; sample_duration_state; sample_duration_sample_time; sample_duration_source; flow_row_id; actual_identity_case; actual_substance_or_material; actual_origin_and_medium; actual_state_and_gate; case_activation_evidence; typed_or_residual_quantity; quantity_exclusion_links; whole_total_reconciliation; unresolved_occurrence_not_zero | 绑定前识别确切实际物质物种混物组分粒径介质。原生实测物种量或兼容实际活动因子，各原生元数据；组成去向气体换算仅方法需要且完整因子未含时一次。空气蒸气质量非容装污水液排口。实际燃烧施用处理职责主体范围必要，不采购草长气味供应组成未知库存工质水余差推排放摄取零。生物去除库存变需自身完整有源方法实际池，不自动信用。供应已含释放不再计，全用户真实责任后正N一次。 | 真实原生物种质量及兼容活动因子气体单位 | 每真实事件区间库存闭合及相关寿命更新 | 真实夜任务报告库存土地期间及场地资产全阶段，跨期可追溯 | 真实营位场地及全部其他营位房车小屋日客公共用户供应接收 | 每参考流 | 独立原生操作数单位基准方法状态采样时间来源校准适用覆盖不确定性，未知非零 |

### 计算规则

| rule_id | 适用对象 | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| fulfilled_n | occupied_tent_pitch_night | N_target=物理分配迁位冲回后实际完成delivered_pitch_night_id去重计数；一独占营位当地夜，不人数帐篷车辆面积容量费用固定24小时。真实免费供给计入，未到未提供不计产出但必要工作保负责池。 | cp_pitch | Actual target Count |  |
| resource_attribution | 全部清单行 | 实际直接追踪或resource_quantity*兼容target_driver/正且完整all_consumer_driver。列帐篷房车小屋日客零售公共其他用户及实际期间，不默认等位人数面积费用比例。必要空置待机天气封场地面恢复失败取消未到先入本供给池总量再归实际产出。有据才分离真实其他用户，只列无主闲置账阻完整性。原始目标量除严格同范围正N一次，已每参考不再除，N0保留来源延续承接消解。 | cp_pitch; all linked resource protocols | Actual attributed native quantity per reference |  |
| meter_quantity | purchased_electricity, purchased_thermal_service; purchased_electricity_ac; purchased_thermal_service_delivered_heat | 实际公用量=兼容(register_end-register_start+register_adjustment)*所需meter_multiplier*native_conversion_factor或真实区间量*所需换算，各仅一次。同实际区间average_power*elapsed_duration仅单位作业有据，不积分电再乘时间铭牌。真实有用热交付状态已含载体设备互斥。实际职责归后N一次。 | cp_energy | Actual utility quantity |  |
| stock_rule | cleaning_supplies, operator_guest_supplies, operating_fuel, grounds_materials, unused_supply_returns; cleaning_supplies_synthetic_detergent | S=归属期初+净外收-含保留回收期末，排供应容器皮重。毛S/N输入配匹配未用退回/N输出，或净耗(S-return)/N输入且省匹配输出。内部回收非收货；仅同源同状态有据未用独立子库可净。已用回收工质材料按实际外送态记录，不扣新供应制造不负输入不自动信用。 | cp_materials; cp_energy; cp_grounds | Exclusive normalized supply and matched unused return |  |
| ground_events | grounds_materials, usable_grounds_residues, grounds_waste | 实际原生事件物料EACH匹配数一次或TOTAL不变，有据原生转换。仅同样本纯水w_wet=m_water/m_as_received与r_dry=m_water/m_nonwater可百分转比例后w_wet=r_dry/(1+r_dry)及m_nonwater=m_as_received*(1-w_wet)。其他挥发土植组成非水纤维。留存覆盖内部，可用验收外送或接收Waste互斥，必要失败恢复封位资源进池后N一次。 | cp_grounds | Actual nonadditive grounds fates and quantities |  |
| asset_service | full_life_site_assets | 全寿命服务用实际asset_native_quantity*兼容等价*job_used_driver/正lifetime_all_user_driver，含全部用户既往加有来源剩余或真实终止，各原生元数据不确定性更新。年度N非寿命；容量日历驱动分子须含对应必要闲置恢复封场责任，使真实池用户剩余责任穷尽全负担。完整供应或实际底层资产作业阶段择一。 | cp_assets | Actual full-life site service equivalent |  |
| provider_quantity | external_support_service | 真实服务量*所需有据原生physical_equivalence*所需兼容全客户目标份额，仅未换算归属时各一次；非已每参考再同范围N一次。真实材料资源资产土地货运接收完整覆盖或真实缺阶段已完成集成，不两者重复或只待办。 | cp_providers | Actual complete physical provider results |  |
| fluids_ledger | maintenance_fluids, usable_recovered_fluids, contained_fluid_waste | 核opening_installed+opening_stored+opening_recovered+new_factory_entry+net_standalone_receipts+other_exclusive_receipts = closing_installed+closing_stored+closing_recovered+matched_unused_return+used_usable_export+independent_contained_waste+retained_whole_asset_content+measured_direct_release+unknown_residual+other_exclusive_exits。存储排单列回收，新初充未含期初任收货，其他排列项，内部相抵。原生来源状态范围兼容，整内含非加和。初造资产一次，仅匹配同源同态未用独立库可净省输出；所有已用回收按实际态外送，不扣新制造信用，未知非排放零。 | cp_fluids | Exclusive actual fluid stock/charge/fates |  |
| load_work | supply_freight | 实际货运=SUM(唯一装载路段:兼容payload_kg*distance_km*需要时EACH_actual_repeatcount*THAT_record_share)/正同目标N一次。载荷直接量或毛仅减非货车辆皮；TOTAL已总次数不变，货水包装支承保留。各换算来源及份额求和内，不重已归份额已每参考N。 | cp_freight | Actual kg*km per reference |  |
| land_interfaces | land_occupation, land_transformation_in, land_transformation_out | 当前占用按互斥真实地块面积*兼容实际时长和该期间土地类别场地职责，必要闲置恢复封场负担归真实供给责任。单一转变事件前后为不重复实际面积，经有据负责场地服务寿命归一次；当前标签不推历史转换，供应资产已含相同土地阶段不重加。 | cp_land; cp_assets | Exclusive actual occupation and conversion interfaces |  |
| water_fates | supplied_water, actual_water_withdrawal, contained_wastewater, direct_water_outfall; supplied_water_liquid_tap | 独立实测真实原生供取接收排口量及真实组成状态，密度温度转换仅兼容材料态。直接蒸气需实测方法支持物种质量，供水减未知库存持留非废水蒸气零。异流展开，整组分持留非加和，供应接收一次；目标归后N一次。 | cp_water; cp_fates; cp_releases | Actual evidence-supported water and receiver states |  |
| species_amount | direct_species; direct_species_co2_fossil_air; direct_species_methane_fossil_air; direct_species_nitrous_oxide_air | 实际measured_species_mass或兼容actual_activity*emission_factor，确切物种粒径介质与各原生操作数单位基准方法状态采样时间来源必需。必要组成去向气体换算仅完整因子未含时一次且状态温压有据。采购草长库存工质水余差不证明排放摄取零生物信用；供应资产已含不重计，职责归后同目标正N一次。 | cp_releases | Actual supported species amount |  |

### 数据质量要求

| requirement_id | 适用对象 | Requirement | Evidence |
| --- | --- | --- | --- |
| native_records | 全部操作数 | 每量驱动比例密度温度时间换算土地面积类别具来源关联原生单位基准方法状态采样时间来源；未知不兼容阻计算非零。 | Original actual records and calibration/method/representativeness |
| complete_responsibility | 全部期间和消费者 | 真实地面场地全寿命资产供应土地职责全部用户含其他RV小屋日客，必要闲置恢复封场失败池和已解跨期；不部分运营声称全链。 | Completed coverage matrices, actual all-user/source-to-resolution ledgers |
| identity_limits | 全部流卡 | 最终交换具体身份属性单位及实际质量状态门槛供应接收须核实。Count仅计数，不证明营位住客夜等价固定24小时，总括不强绑混合UUID。 | Concrete full-detail/support and actual foreground identity evidence |
| range_source_limits | 全部数据 | 不强制通用数值范围。所称有源区间须可追溯兼容实际对象状态单位边界；经验质控护栏另需独立可比参考，不同批自极值。运营例子非现场默认合规证明。 | Actual applicable independent sources, uncertainty/sensitivity/update |
| complete_purchased_electricity | pitch_service | 最终使用前，按下方完整采集定义将`purchased_electricity`的每项真实情形展开为独立身份交换，完成原生数量、状态、来源、接收方及覆盖证据。缺UUID或数量不能作零；保留固定情形的数量须从余项排除。 | `cp_energy` |
| complete_purchased_thermal_service | pitch_service | 最终使用前，按下方完整采集定义将`purchased_thermal_service`的每项真实情形展开为独立身份交换，完成原生数量、状态、来源、接收方及覆盖证据。缺UUID或数量不能作零；保留固定情形的数量须从余项排除。 | `cp_energy` |
| complete_operating_fuel | pitch_service | 最终使用前，按下方完整采集定义将`operating_fuel`的每项真实情形展开为独立身份交换，完成原生数量、状态、来源、接收方及覆盖证据。缺UUID或数量不能作零；保留固定情形的数量须从余项排除。 | `cp_energy` |
| complete_supplied_water | pitch_service | 最终使用前，按下方完整采集定义将`supplied_water`的每项真实情形展开为独立身份交换，完成原生数量、状态、来源、接收方及覆盖证据。缺UUID或数量不能作零；保留固定情形的数量须从余项排除。 | `cp_water` |
| complete_cleaning_supplies | pitch_service | 最终使用前，按下方完整采集定义将`cleaning_supplies`的每项真实情形展开为独立身份交换，完成原生数量、状态、来源、接收方及覆盖证据。缺UUID或数量不能作零；保留固定情形的数量须从余项排除。 | `cp_materials` |
| complete_grounds_materials | pitch_service | 最终使用前，按下方完整采集定义将`grounds_materials`的每项真实情形展开为独立身份交换，完成原生数量、状态、来源、接收方及覆盖证据。缺UUID或数量不能作零；保留固定情形的数量须从余项排除。 | `cp_grounds` |
| complete_operator_guest_supplies | pitch_service | 最终使用前，按下方完整采集定义将`operator_guest_supplies`的每项真实情形展开为独立身份交换，完成原生数量、状态、来源、接收方及覆盖证据。缺UUID或数量不能作零；保留固定情形的数量须从余项排除。 | `cp_materials` |
| complete_external_support_service | pitch_service | 最终使用前，按下方完整采集定义将`external_support_service`的每项真实情形展开为独立身份交换，完成原生数量、状态、来源、接收方及覆盖证据。缺UUID或数量不能作零；保留固定情形的数量须从余项排除。 | `cp_providers` |
| complete_full_life_site_assets | pitch_service | 最终使用前，按下方完整采集定义将`full_life_site_assets`的每项真实情形展开为独立身份交换，完成原生数量、状态、来源、接收方及覆盖证据。缺UUID或数量不能作零；保留固定情形的数量须从余项排除。 | `cp_assets` |
| complete_maintenance_fluids | pitch_service | 最终使用前，按下方完整采集定义将`maintenance_fluids`的每项真实情形展开为独立身份交换，完成原生数量、状态、来源、接收方及覆盖证据。缺UUID或数量不能作零；保留固定情形的数量须从余项排除。 | `cp_fluids` |
| complete_supply_freight | pitch_service | 最终使用前，按下方完整采集定义将`supply_freight`的每项真实情形展开为独立身份交换，完成原生数量、状态、来源、接收方及覆盖证据。缺UUID或数量不能作零；保留固定情形的数量须从余项排除。 | `cp_freight` |
| complete_actual_water_withdrawal | pitch_service | 最终使用前，按下方完整采集定义将`actual_water_withdrawal`的每项真实情形展开为独立身份交换，完成原生数量、状态、来源、接收方及覆盖证据。缺UUID或数量不能作零；保留固定情形的数量须从余项排除。 | `cp_water` |
| complete_land_occupation | pitch_service | 最终使用前，按下方完整采集定义将`land_occupation`的每项真实情形展开为独立身份交换，完成原生数量、状态、来源、接收方及覆盖证据。缺UUID或数量不能作零；保留固定情形的数量须从余项排除。 | `cp_land` |
| complete_land_transformation_in | pitch_service | 最终使用前，按下方完整采集定义将`land_transformation_in`的每项真实情形展开为独立身份交换，完成原生数量、状态、来源、接收方及覆盖证据。缺UUID或数量不能作零；保留固定情形的数量须从余项排除。 | `cp_land` |
| complete_unused_supply_returns | pitch_service | 最终使用前，按下方完整采集定义将`unused_supply_returns`的每项真实情形展开为独立身份交换，完成原生数量、状态、来源、接收方及覆盖证据。缺UUID或数量不能作零；保留固定情形的数量须从余项排除。 | `cp_materials` |
| complete_usable_asset_transfers | pitch_service | 最终使用前，按下方完整采集定义将`usable_asset_transfers`的每项真实情形展开为独立身份交换，完成原生数量、状态、来源、接收方及覆盖证据。缺UUID或数量不能作零；保留固定情形的数量须从余项排除。 | `cp_assets` |
| complete_usable_recovered_fluids | pitch_service | 最终使用前，按下方完整采集定义将`usable_recovered_fluids`的每项真实情形展开为独立身份交换，完成原生数量、状态、来源、接收方及覆盖证据。缺UUID或数量不能作零；保留固定情形的数量须从余项排除。 | `cp_fluids` |
| complete_usable_grounds_residues | pitch_service | 最终使用前，按下方完整采集定义将`usable_grounds_residues`的每项真实情形展开为独立身份交换，完成原生数量、状态、来源、接收方及覆盖证据。缺UUID或数量不能作零；保留固定情形的数量须从余项排除。 | `cp_grounds` |
| complete_spent_service_guest_waste | pitch_service | 最终使用前，按下方完整采集定义将`spent_service_guest_waste`的每项真实情形展开为独立身份交换，完成原生数量、状态、来源、接收方及覆盖证据。缺UUID或数量不能作零；保留固定情形的数量须从余项排除。 | `cp_fates` |
| complete_retired_asset_waste | pitch_service | 最终使用前，按下方完整采集定义将`retired_asset_waste`的每项真实情形展开为独立身份交换，完成原生数量、状态、来源、接收方及覆盖证据。缺UUID或数量不能作零；保留固定情形的数量须从余项排除。 | `cp_assets` |
| complete_contained_wastewater | pitch_service | 最终使用前，按下方完整采集定义将`contained_wastewater`的每项真实情形展开为独立身份交换，完成原生数量、状态、来源、接收方及覆盖证据。缺UUID或数量不能作零；保留固定情形的数量须从余项排除。 | `cp_water` |
| complete_contained_fluid_waste | pitch_service | 最终使用前，按下方完整采集定义将`contained_fluid_waste`的每项真实情形展开为独立身份交换，完成原生数量、状态、来源、接收方及覆盖证据。缺UUID或数量不能作零；保留固定情形的数量须从余项排除。 | `cp_fluids` |
| complete_land_transformation_out | pitch_service | 最终使用前，按下方完整采集定义将`land_transformation_out`的每项真实情形展开为独立身份交换，完成原生数量、状态、来源、接收方及覆盖证据。缺UUID或数量不能作零；保留固定情形的数量须从余项排除。 | `cp_land` |
| complete_direct_water_outfall | pitch_service | 最终使用前，按下方完整采集定义将`direct_water_outfall`的每项真实情形展开为独立身份交换，完成原生数量、状态、来源、接收方及覆盖证据。缺UUID或数量不能作零；保留固定情形的数量须从余项排除。 | `cp_water` |
| complete_direct_species | pitch_service | 最终使用前，按下方完整采集定义将`direct_species`的每项真实情形展开为独立身份交换，完成原生数量、状态、来源、接收方及覆盖证据。缺UUID或数量不能作零；保留固定情形的数量须从余项排除。 | `cp_releases` |


### 强制清单完成记录

以下记录是强制物理采集和情形展开要求，不是单条清单交换。原有节点、方向、流类型、数量基准、采集协议、库存去向、供应接收和来源义务全部继续有效。正文对这些编号的引用对应这些完成要求。前景数据集完成前，必须将每项真实物料、服务、资产全寿命、废物流或物种介质分别展开为具原生数量和排他覆盖的独立身份交换。保留固定卡只覆盖其真实受支持情形，其余真实情形须无重叠协调。身份、发生或数量缺失仍待采集，不能填零或删项。内部配对交接和组分审计视图不可相加；必要全寿命与供应商阶段必须实际完成一次。

#### purchased_electricity

责任节点与原流角色：pitch_service / inputs / product

真实营位接电和公共卫生热水照明门禁支持负荷及负责闲置封场职责，无电位离网标签不证明零电。

本卡为独立身份分支`purchased_electricity_ac`之外的余项清单要求。已计入分支的实际数量不再计入本余项交换，原类目总量仅作不可相加的协调审计。其他实际材料、状态、来源或介质仍须保留自身经核实的身份、原生数量及供应接收责任；记录缺失时，不推定条件分支发生、不发生或数量为零。

- 选定流: 真实营地供电
- 流属性/单位: Energy / kWh
- 数量规则: 按cp_energy将真实互斥归属兼容原生量除正同目标N_target一次；已每参考不变，N_target=0保留不除
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每参考流
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_energy`
- 范围证据需求: 需真实表计进口读数区间量、供应地域电压和完整全用户范围，不铭牌或固定每夜电量。

#### purchased_thermal_service

责任节点与原流角色：pitch_service / inputs / product

仅实际有用热冷交付计量，与已含载能体转换设备分开，真实现场转换须复核扩展不默认。

本卡为独立身份分支`purchased_thermal_service_delivered_heat`之外的余项清单要求。已计入分支的实际数量不再计入本余项交换，原类目总量仅作不可相加的协调审计。其他实际材料、状态、来源或介质仍须保留自身经核实的身份、原生数量及供应接收责任；记录缺失时，不推定条件分支发生、不发生或数量为零。

- 选定流: 实际外供有用热冷
- 流属性/单位: Energy / MJ
- 数量规则: 按cp_energy将真实互斥归属兼容原生量除正同目标N_target一次；已每参考不变，N_target=0保留不除
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每参考流
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_energy`
- 范围证据需求: 需真实交付状态原生量供应损失资产范围，采用时焓温度单位来源。

#### operating_fuel

责任节点与原流角色：pitch_service / inputs / product

仅真实运行声明场地职责，采购非燃烧排放，个人燃料不暗作经营者供应。

- 选定流: 实际场地维护燃料供应
- 流属性/单位: Mass / kg
- 数量规则: 按cp_energy将真实互斥归属兼容原生量除正同目标N_target一次；已每参考不变，N_target=0保留不除
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每参考流
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_energy`
- 范围证据需求: 需载体牌号库存净收，必要时相容原生密度温压转换及独立燃烧来源。

#### supplied_water

责任节点与原流角色：pitch_service / inputs / product

实际营位公共卫生清洁地面或经营者厨房洗涤用水，供水非默认污水或灌溉。

本卡为独立身份分支`supplied_water_liquid_tap`之外的余项清单要求。已计入分支的实际数量不再计入本余项交换，原类目总量仅作不可相加的协调审计。其他实际材料、状态、来源或介质仍须保留自身经核实的身份、原生数量及供应接收责任；记录缺失时，不推定条件分支发生、不发生或数量为零。

- 选定流: 真实营地供水
- 流属性/单位: Volume / m3
- 数量规则: 按cp_water将真实互斥归属兼容原生量除正同目标N_target一次；已每参考不变，N_target=0保留不除
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每参考流
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_water`
- 范围证据需求: 需水源表计原生区间全部使用方职责供应范围，不每人升数或差额推断。

#### cleaning_supplies

责任节点与原流角色：pitch_service / inputs / product

各真实清洁剂抹布吸附过滤卫生SKU展开，购液浓液稀释活性份额非加和。

本卡为独立身份分支`cleaning_supplies_synthetic_detergent`之外的余项清单要求。已计入分支的实际数量不再计入本余项交换，原类目总量仅作不可相加的协调审计。其他实际材料、状态、来源或介质仍须保留自身经核实的身份、原生数量及供应接收责任；记录缺失时，不推定条件分支发生、不发生或数量为零。

- 选定流: 真实场地清洁卫生耗材
- 流属性/单位: Mass / kg
- 数量规则: 按cp_materials将真实互斥归属兼容原生量除正同目标N_target一次；已每参考不变，N_target=0保留不除
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每参考流
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_materials`
- 范围证据需求: 需真实组成状态库存排包装皮净物料匹配未用退回任务关联，不清洁剂量默认。

#### grounds_materials

责任节点与原流角色：pitch_service / inputs / product

仅真实场地维护供应及兼容地面状态用途，不推肥农药草种加土；真实独立生物生产须复核。

- 选定流: 真实地面维修维护种植物料
- 流属性/单位: Mass / kg
- 数量规则: 按cp_grounds将真实互斥归属兼容原生量除正同目标N_target一次；已每参考不变，N_target=0保留不除
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每参考流
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_grounds`
- 范围证据需求: 需真实材料土植身份净原生量施用维修事件上游资产重叠，不草地配方碳信用。

#### operator_guest_supplies

责任节点与原流角色：pitch_service / inputs / product

真实皂卫浴及包含物料各SKU，客自购食品装备非采购，实际内含供应不消失。

- 选定流: 经营方实际提供住客物料
- 流属性/单位: Mass / kg
- 数量规则: 按cp_materials将真实互斥归属兼容原生量除正同目标N_target一次；已每参考不变，N_target=0保留不除
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每参考流
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_materials`
- 范围证据需求: 需SKU包装材料库存接收用途范围退回证据，复用品按完整资产。

#### external_support_service

责任节点与原流角色：pitch_service / inputs / product

实际门禁清洁地面安保维护或外部配套以证据原生物理成果属性单位，发票工时非自动Item(s)。

- 选定流: 实际完整营地辅助服务成果
- 流属性/单位: Count / Item(s)
- 数量规则: 按cp_providers将真实互斥归属兼容原生量除正同目标N_target一次；已每参考不变，N_target=0保留不除
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每参考流
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_providers`
- 范围证据需求: 需任务成果原生等价质量全客户量及材料资源资产土地接收覆盖矩阵，真实缺项完成一次。

#### full_life_site_assets

责任节点与原流角色：pitch_service / inputs / product

真实排水道路营位工程公共建筑热水照明信息地面工具家具支承制造安装维护更换终结跨全用户寿命，个人帐篷车辆非默认资产。

- 选定流: 全寿命营地工程公共设施设备复用品
- 流属性/单位: Count / Item(s)
- 数量规则: 按cp_assets将真实互斥归属兼容原生量除正同目标N_target一次；已每参考不变，N_target=0保留不除
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每参考流
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_assets`
- 范围证据需求: 需BOM原生资产等价阶段土地责任及任务观察有源剩余完整寿命驱动不确定性终止，年度N非寿命。

#### maintenance_fluids

责任节点与原流角色：pitch_service / inputs / product

条件性真实油冷却制冷工质各身份状态，资产制造已含初充上游一次，非重复购买或假漏。

- 选定流: 实际独立设备维护工质供应
- 流属性/单位: Mass / kg
- 数量规则: 按cp_fluids将真实互斥归属兼容原生量除正同目标N_target一次；已每参考不变，N_target=0保留不除
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每参考流
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_fluids`
- 范围证据需求: 需初充与独立SKU净库存回收来源去向系统供应范围，不默认物种补充因子。

#### supply_freight

责任节点与原流角色：pitch_service / inputs / product

实际服务边界唯一路段核供应接收已覆盖，随货包装支承水保载荷，住客旅行独立。

- 选定流: 真实营地供应维护接收货运
- 流属性/单位: Mass * distance / kg*km
- 数量规则: 按cp_freight将真实互斥归属兼容原生量除正同目标N_target一次；已每参考不变，N_target=0保留不除
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每参考流
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_freight`
- 范围证据需求: 需载荷毛非货皮距离原生单位EACH/TOTAL次数该记录份额求和内N一次真实空返。

#### actual_water_withdrawal

责任节点与原流角色：pitch_service / inputs / elementary

仅实际运营环境取水具源介质位置责任；购水产品不重取，地产降雨非自动取水投入。

- 选定流: 真实场地直接分水源取水
- 流属性/单位: Volume / m3
- 数量规则: 按cp_water将真实互斥归属兼容原生量除正同目标N_target一次；已每参考不变，N_target=0保留不除
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每参考流
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_water`
- 范围证据需求: 需水源原生实测体积时间实际取水范围全用户责任，非供水账或差额。

#### land_occupation

责任节点与原流角色：pitch_service / inputs / elementary

当前真实不重叠地块时段类别接口，含归属场地公共必要恢复封闭职责，不加已被供应资产含同占地。

- 选定流: 真实分类型营地土地占用
- 流属性/单位: Area*time / m2*a
- 数量规则: 按cp_land将真实互斥归属兼容原生量除正同目标N_target一次；已每参考不变，N_target=0保留不除
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每参考流
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_land`
- 范围证据需求: 需土地类别来源地块面积期间时长日历换算完整主体阶段矩阵，不地产总面积租金夜数转地默认。

#### land_transformation_in

责任节点与原流角色：pitch_service / inputs / elementary

仅真实历史新增转换事件有前类别准确面积，配转后态一次及归属寿命，既有草标签不证明转换。

- 选定流: 真实有证土地转变前类型
- 流属性/单位: Area / m2
- 数量规则: 按cp_land将真实互斥归属兼容原生量除正同目标N_target一次；已每参考不变，N_target=0保留不除
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每参考流
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_land`
- 范围证据需求: 需事件前后类别日期地块面积来源原生量责任与已覆盖转换，不默认基线。

#### unused_supply_returns

责任节点与原流角色：pitch_service / outputs / product

仅真实同库未用可用外送；毛输入配输出或净耗省输出，保留内部回收已用工质非此退回。

- 选定流: 真实匹配未用独立物料退回
- 流属性/单位: Mass / kg
- 数量规则: 按cp_materials将真实互斥归属兼容原生量除正同目标N_target一次；已每参考不变，N_target=0保留不除
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每参考流
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_materials`
- 范围证据需求: 需同输入SKU状态原生量接收来源互斥库存口径，不无关负量信用。

#### usable_asset_transfers

责任节点与原流角色：pitch_service / outputs / product

实际验收可用物品物料出口，状态接收原寿命责任，退役标签非外送信用。

- 选定流: 真实可用设备复用物料外送
- 流属性/单位: Mass / kg
- 数量规则: 按cp_assets将真实互斥归属兼容原生量除正同目标N_target一次；已每参考不变，N_target=0保留不除
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每参考流
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_assets`
- 范围证据需求: 需身份整部原生净量剩余寿命交接供应重叠，不期末作出口。

#### usable_recovered_fluids

责任节点与原流角色：pitch_service / outputs / product

已用回收按实际外送态，不论资产初充独立来源，保留回收仍库存。非自动未用新料，不扣无关制造。

- 选定流: 真实可用回收维护工质外送
- 流属性/单位: Mass / kg
- 数量规则: 按cp_fluids将真实互斥归属兼容原生量除正同目标N_target一次；已每参考不变，N_target=0保留不除
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每参考流
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_fluids`
- 范围证据需求: 需真实化学混物质量净外送量接收初充库存谱系，不自动回收信用。

#### usable_grounds_residues

责任节点与原流角色：pitch_service / outputs / product

仅独立验收有用剪物土等各身份交接，留场修剪物内部非出口碳信用。

- 选定流: 真实验收可用地面物料外送
- 流属性/单位: Mass / kg
- 数量规则: 按cp_grounds将真实互斥归属兼容原生量除正同目标N_target一次；已每参考不变，N_target=0保留不除
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每参考流
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_grounds`
- 范围证据需求: 需材料状态含水原生量接收来源任务负担及土地资产覆盖，不割草推产率。

#### spent_service_guest_waste

责任节点与原流角色：pitch_service / outputs / waste

真实纸食品卫生包装清洁废物按身份状态接收展开，仅真实共同收集混流总量组分非加和。处置客废可属经营职责不导入客自购食品制造。

- 选定流: 真实独立服务及住客来源废物流
- 流属性/单位: Mass / kg
- 数量规则: 按cp_fates将真实互斥归属兼容原生量除正同目标N_target一次；已每参考不变，N_target=0保留不除
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每参考流
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_fates`
- 范围证据需求: 需来源收集职责物流接收净原生量组分时间方法处理覆盖，不标准每客废物或采购差。

#### retired_asset_waste

责任节点与原流角色：pitch_service / outputs / waste

真实整部资产留存工质内容非加和，原终结责任。供应资产已含同处理则链接物理审计非二次负担。

- 选定流: 真实废弃营地设备部件交接
- 流属性/单位: Mass / kg
- 数量规则: 按cp_assets将真实互斥归属兼容原生量除正同目标N_target一次；已每参考不变，N_target=0保留不除
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每参考流
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_assets`
- 范围证据需求: 需退役决定原资产部件净原生量接收同已含终结范围，不寿命回收信用默认。

#### contained_wastewater

责任节点与原流角色：pitch_service / outputs / waste

真实下水接收交接各组成状态，异流分开真混流保持；非购水量直接环境排口，现场处理须复核扩展。

- 选定流: 真实容装卫生清洁等废水交接
- 流属性/单位: Volume / m3
- 数量规则: 按cp_water将真实互斥归属兼容原生量除正同目标N_target一次；已每参考不变，N_target=0保留不除
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每参考流
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_water`
- 范围证据需求: 需独立接收体积质量运输处理责任及游离留存供应重叠，转换才用密度。

#### contained_fluid_waste

责任节点与原流角色：pitch_service / outputs / waste

真实不可用油冷却制冷工质各身份接收，不直接物种或设备废物内含再加。

- 选定流: 真实独立容装维护工质废物
- 流属性/单位: Mass / kg
- 数量规则: 按cp_fluids将真实互斥归属兼容原生量除正同目标N_target一次；已每参考不变，N_target=0保留不除
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每参考流
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_fluids`
- 范围证据需求: 需化学状态原生交接初充回收接收处理唯一责任，不补量差额等漏。

#### land_transformation_out

责任节点与原流角色：pitch_service / outputs / elementary

同转换事件实际后态，配有据前类别准确面积一次，不每营位夜新转变或推生物去除。

- 选定流: 真实有证土地转变后类型
- 流属性/单位: Area / m2
- 数量规则: 按cp_land将真实互斥归属兼容原生量除正同目标N_target一次；已每参考不变，N_target=0保留不除
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每参考流
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_land`
- 范围证据需求: 需同事件地域地块前后日期来源互斥资本供应寿命归属，不土地类型默认。

#### direct_water_outfall

责任节点与原流角色：pitch_service / outputs / elementary

仅真实水向已识别环境介质越界，容装下水罐交接仍废物，不空气蒸气或全部雨径流默认排放。

- 选定流: 真实直接环境水排口
- 流属性/单位: Volume / m3
- 数量规则: 按cp_water将真实互斥归属兼容原生量除正同目标N_target一次；已每参考不变，N_target=0保留不除
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每参考流
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_water`
- 范围证据需求: 需源排口介质原生体积组成时间及独立有据物种接口，未知余差非出口。

#### direct_species

责任节点与原流角色：pitch_service / outputs / elementary

仅真实运行职责实测或兼容活动系数物种粒径介质。空气水蒸气为物种质量；采购气味草长库存充量差不证明排放摄取或零。

本卡为独立身份分支`direct_species_co2_fossil_air`; `direct_species_methane_fossil_air`; `direct_species_nitrous_oxide_air`之外的余项清单要求。已计入分支的实际数量不再计入本余项交换，原类目总量仅作不可相加的协调审计。其他实际材料、状态、来源或介质仍须保留自身经核实的身份、原生数量及供应接收责任；记录缺失时，不推定条件分支发生、不发生或数量为零。

- 选定流: 真实营地特定物种向有证介质释放
- 流属性/单位: Mass / kg
- 数量规则: 按cp_releases将真实互斥归属兼容原生量除正同目标N_target一次；已每参考不变，N_target=0保留不除
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每参考流
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_releases`
- 范围证据需求: 需确切身份介质原生操作数状态时间来源及必要组成去向气体换算一次，因子已含范围供应重叠。


## 9. 验证规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| real_reference | occupied_tent_pitch_night | 实际客自带帐篷独占指定营位边界时段配置完成当地夜确认冲回迁位有据，不人数帐篷面积费用容量时长捷径；非棚体房车共享按人等价，实际表面接入声明。 |  |
| pool_and_period | 全部资源 | 完整全部用户期间，必要待机天气封场地面恢复空置失败取消未到先入负责池总量后正同范围N一次；N0来源延续承接消解完整，无主未决阻最终包非零。 |  |
| complete_life_provider | assets/providers/land | 真实场地公共资产复用品寿命土地阶段一次，观察有源剩余兼容全部用户寿命等价终止不确定性更新；年度N非寿命，容量日历闲置不漏。缺阶段实际按量来源责任覆盖集成，待办不够。 |  |
| land_truth | land interfaces | 核真实土地类别互斥地块原生面积时长日历及真实转变前后事件，未知类别历史不默认零。当前占用历史转变全资产供应土地重叠具互斥责任阶段矩阵，不全资本寿命面积时间重当当前。 |  |
| stock_receiver_species | 全部流 | 净收排供应皮重；毛输入配匹配未用输出或净耗输入省匹配输出。已用回收非新供应负制造信用。异接收身份展开，真混流整部组分留存非加和。容装液Waste，真实环境水空气蒸气各介质属性；未知余差补量非排放零。 |  |
| native_load_and_source | 全部数量 | 每独立操作数原生元数据实际转换；EACH/TOTAL一次，随货水包装支承保留，仅非货车辆皮，该记录份额求和内N一次。不从来源例子编负荷土地物种因子。通用范围本身可缺，有源区间可追溯兼容，经验质控护栏独立可比。 |  |
| actual_binding_and_route | 最终数据使用 | 最终绑定前真实具体身份支持数量验收完整主体供应接收土地寿命责任必需。条件总括按实际零一多流展开，真实独立发电处理食品工业须复核路线模块，缺计量非发生不存在证明。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | secondary_dataset; background_dataset，经实际身份完整性复核后 |
| downstream_use | 真实访客自带帐篷营位夜空间服务，完整归属场地公共职责寿命及互斥土地接口 |
| allowed_use | 实际独占指定访客帐篷营位当地夜，平面配置接入服务范围入住原生证据及完整供应土地全资产责任 |
| excluded_use | 房车经营方棚体共享按人场旅程全包营等价，未用预订容量参考，无接电当公共零，缺土地供应资产职责或未审独立生产 |
| required_metadata | 全部16参考限定，营位时空配置完成N、人数帐篷独立；完整全用户场地期间天气恢复闲置，原生土地类别面积时间事件阶段责任矩阵、全资产观察剩余寿命及物料资源供应货运去向物种证据 |
| required_quality_disclosure | 来源年代现场配置范围、原生实测估计、身份支持土地类别寿命量未决及未归属跨期、不确定性敏感性更新及来源例证限制 |
| update_trigger | 营位边界表面接入棚体套餐、当地夜定义、共享用户、地面土地类别事件、供应资产寿命去向身份或真实独立转换处理食品娱乐变化 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| unsd-cpc3-campsites | official_guidance | https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | UNSD CPC3官方解释说明，2025年6月30日，保留的准确摘录对应印刷第355页。63120是房车、帐篷或睡袋的空间供给，63130则是过夜住宿、膳食和娱乐或培训的组合包。仅用于分类，不能证明目标场地平面、营位尺寸、交付住宿夜时长、设施包或物理因子。分类详情网页未能直接访问，分类证据来自官方PDF摘录。 |
| ccc-pitch-types | extension_guidance | https://www.campingandcaravanningclub.co.uk/campsites/pitch-types/ | 当前运营者第一方Pitch Types页面区分无接电草地营位、草地或硬地接电营位，以及提供供水和排水的服务营位。供应商的具体示例和尺寸标签不是通用营位规格或资源数量。缺少营位接入不能证明不存在共用公用资源或附属设施职责。 |
| ccc-sandringham-facilities | extension_guidance | https://www.campingandcaravanningclub.co.uk/campsites/uk/norfolk/sandringham/sandringham-camping-and-caravanning-club-site/ | 当前第一方场地页面列出接受帐篷和无接电草地营位，并描述共用厕所、热水淋浴、洗餐具、洗衣、道路、照明、接待门禁及废物接口。预订表采集露营单元、尺寸、抵达和离开日期；FAQ条目明确标注2023年4月28日修改，页面列出2026及2027年的季节开放期间。这是带日期的定性路线示例，不能代替目标场地真实记录，也不能假设每项设施都实际存在、按固定强度使用、已经包含或免费。不导入最少住宿夜数、价格、容量、入住时间、面积、默认清洁强度或能源换算因子。 |
| ruby-own-tent-context | extension_guidance | https://www.rubycountrycamping.co.uk/pitch-your-own | 第一方运营者分别提供维护草地上的访客自带帐篷营位和配备设施的钟形帐篷租赁。页面还描述卫生设施、提供的清洗用品、可选商品和娱乐，以及无市电条件下的充电或太阳能照明。仅据此区分营位供给与帐篷供给，并确认无市电不等于零能源。不得导入营位数、人数、价格、土壤管理配方、污水处理技术或太阳能发电默认值。真实现场转换或处理须审查范围和模块，不能由该例推断。 |
