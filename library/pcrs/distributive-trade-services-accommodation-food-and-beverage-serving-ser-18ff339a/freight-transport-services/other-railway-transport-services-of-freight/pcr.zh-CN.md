---
pcr_id: pcr.distributive-trade-services-accommodation-food-and-beverage-serving-ser-18ff339a.freight-transport-services.other-railway-transport-services-of-freight
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 其他铁路货运承运委托

## 1. 范围与适用性

覆盖汽车卡车卡车挂车的铁路承运，并涵盖在厘清冷藏罐车邮件集装箱干散货专属铁路类别后其他所有实际未另分类铁路货物。真实敞封平车低地板汽车架专车、滚装吊装及其他有依据装载均为条件路线，不限汽车架或新车。排除旅客及其随行车辆（CPC64210）、独立非铁路货运、独立产品性质的货物制造贸易维修及纯设备租赁。随行货运载货挂车交换箱边界情形先判断真实运输功能官方分类，司机在场或商业联运标签不能单独决定分类。

参考描述真实委托承运服务及搬运货物状态全部归属作业，不表示车辆制造租赁列车移动或未分层铁路吨公里。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.distributive-trade-services-accommodation-food-and-beverage-serving-ser-18ff339a.freight-transport-services.other-railway-transport-services-of-freight |
| classification_refs | CPC 3.0 65129 |
| covered_products | 覆盖汽车卡车卡车挂车的铁路承运，并涵盖在厘清冷藏罐车邮件集装箱干散货专属铁路类别后其他所有实际未另分类铁路货物。真实敞封平车低地板汽车架专车、滚装吊装及其他有依据装载均为条件路线，不限汽车架或新车。排除旅客及其随行车辆（CPC64210）、独立非铁路货运、独立产品性质的货物制造贸易维修及纯设备租赁。随行货运载货挂车交换箱边界情形先判断真实运输功能官方分类，司机在场或商业联运标签不能单独决定分类。 |
| excluded_products | 其他专属铁路子类；64210旅客随行车辆；非铁路或货物制造贸易独立维修；纯租赁 |
| representative_product | 限定已完成其他铁路货运承运委托 |
| production_route | 真实铁路保管货物特定装载系固照护编组调车干线验收交接及责任生命周期 |
| market_state | 完成验收原清单数量状态路线质量委托 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| 功能对象（What） | 限定已完成其他铁路货运承运委托 |
| 数量（How much） | 1 Item(s)真实完成合格委托，声明原清单数量状态路线验收 |
| 质量（How well） | 真实车辆剩余货运功能及原质量状态搬运系固验收 |
| 时间或周期（How long or cycle） | 真实原服务保管周期及完整归属作业资产期间 |
| reference_flow_link | qualified_carriage |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 限定已完成其他铁路货运承运委托 |
| 参考流属性 | 物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` |
| 参考单位组 | 数量 `5beb6eed-33a9-47b8-9ede-1dfe8f679159` |
| 参考单位 | Item(s) |
| 必需限定信息 | actual_other_rail_function_and_official_adjacent_category_resolution; original_manifest_cargo_identity_amount_mass_dimensions_state; vehicle_trailer_nestedcargo_no_gross_doublecount; original_pickup_route_distance_handoff_quality_acceptance; originalcompleted_engagement_count_N_eng_no_retrospective_failedscope; actual_rail_yard_traction_empty_failed_rescue_duty; loading_securement_care_vehicle_fuel_SOC_provider_boundary; cargo_custody_damage_return_waste_release_closingstock; reusable_equipment_assets_native_full_life_allusers; native_energy_species_substance_medium_quantities_uncertainty |

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| engagement_count | other_rail_freight | 实际原生兼容属性 | 实际原生单位 | 参考1Item(s)指履行前由原货物清单、数量状态、提取铁路路线交接义务及状态验收标准定义的一项真实完成合格铁路货运委托。它是服务委托，不是一辆货车机车容器一吨或一公里。N_eng为满足该义务的独立委托数量。损伤损失拒收未解决或原委托未完成，不能仅凭曾走区段或事后缩小清单成为成功输出。有独立当时记录的验收变更服务可按自身声明身份合格，但不再计原委托。部分失败空驶救援返工仍保留归属负荷。N_eng=0时无有限每委托强度。 |
| native_quantities | other_rail_freight | 实际原生兼容属性 | 实际原生单位 | 服务委托计次数Item(s)与车辆货车设备计数及原生资产物料供应数量分开。为归属可比性测真实净货物总牵引编组质量、载货挂车内装层级、尺寸空间路线距离照护期间原清单数量，不以参考1替代，也不加总重及其内容物。真实燃料电池库存充放移动证据支持兼容换算，不假定效率。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 真实货物清单状态质量及铁路保管装载端口 |
| starting_condition_role | 货物保管事实，不是新货物制造或零负荷资产供应 |
| product_classification_scope | CPC 3.0 65129 |
| recursive_input_rule | 原生真实分包仅准确替换覆盖单元一次 |
| upstream_dataset_requirement | 真实物料资产供应原生身份单位端口及补全未覆盖寿命 |
| disclosure | 原委托功能清单质量真实作业保管全部用户原生供应不确定性 |

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| scope | other_rail_freight | 覆盖汽车卡车卡车挂车的铁路承运，并涵盖在厘清冷藏罐车邮件集装箱干散货专属铁路类别后其他所有实际未另分类铁路货物。真实敞封平车低地板汽车架专车、滚装吊装及其他有依据装载均为条件路线，不限汽车架或新车。排除旅客及其随行车辆（CPC64210）、独立非铁路货运、独立产品性质的货物制造贸易维修及纯设备租赁。随行货运载货挂车交换箱边界情形先判断真实运输功能官方分类，司机在场或商业联运标签不能单独决定分类。 | unsd-cpc3-65129 |
| rail_duties | other_rail_freight | 声明实际保管装载铁路承运交付卸载端口、各承运场站编组场分包及全部共载货物。保留实际机车编组货车区段调车交接干线等待怠速空驶调位失败拒收救援退回清洗换货作业。真实动力交流直流充电能源供应及物理总载荷空间约束决定投入。重复账单场站交接不增加委托。独立道路接送或旅客服务须另识别功能分配，不暗改为铁路货运。 | epa-rail-facility-operations; oebb-freight-terminals; ghg-product-2011 |
| cargo_handling | other_rail_freight | 车辆或剩余货物特定搬运保护按条件保留：保管前后真实检查、坡道升降汽车架层板轮挡系固、几何限界轴荷空间约束、敞封防候、真实货物状态控制及装卸设备。依据真实清单官方类别厘清特定温度通风湿度危险或含能货物要求，仅在本合格剩余货运功能需要时纳入实际辅助能源制冷剂损耗围护泄漏处理。不虚构统一电量燃料额度损伤率系固数温度装载率安全强制值，公开AAR及ÖBB例子不提供全球默认数值。 | aar-auto-quality-overview; aar-open-top-overview; oebb-freight-terminals; ghg-product-2011 |
| cargo_custody | other_rail_freight | 客户汽车挂车及其他货物是保管货物，不是牵引资产或新制造消耗投入。按货批部件期间将物件身份数量真实物理质量互斥归于验收交接、实际外发退回、外发物料废物或直接释放及期末留存。损伤是这些物件状态，不是额外平衡项或自动弃置。留存只列期末库存，真实外发退回仅一转移ID。载货挂车实际总质量已含记录的内装物，按挂车内货包装层级记录，不能总重再加内容物。承运中的客户空挂车是货物，承运方空货车调位作业不构成交付委托。货物原制造及内含燃料电池初始库存不作为服务新消耗产品制造投入。责任期内真实承运操纵充电辅助消耗、供应物料、与服务有关修复损失泄漏清理按所有权去向及未覆盖负荷记录一次。从客户初始库存真实提取消耗的燃料能源须承担相容上游燃料能源供应负荷一次，无论原采购方是谁；不计整份初始库存或原车辆电池制造，也不将同一消耗既计初始库存提取又计新供应。 | ghg-product-2011 |
| completion | other_rail_freight | 参考1Item(s)指履行前由原货物清单、数量状态、提取铁路路线交接义务及状态验收标准定义的一项真实完成合格铁路货运委托。它是服务委托，不是一辆货车机车容器一吨或一公里。N_eng为满足该义务的独立委托数量。损伤损失拒收未解决或原委托未完成，不能仅凭曾走区段或事后缩小清单成为成功输出。有独立当时记录的验收变更服务可按自身声明身份合格，但不再计原委托。部分失败空驶救援返工仍保留归属负荷。N_eng=0时无有限每委托强度。 | ghg-product-2011 |
| assets_providers | other_rail_freight | 客户货物车辆与承运机车货车汽车架层板轮挡系固坡道升降轨道道岔道砟电气化编组场场站资产分开。各实际队列保留制造安装运行维护更换退役覆盖。制造端口原生供应按同资产正值全部用户有效服务量分摊，不视为全寿命；未覆盖阶段补全一次。可重复系固保护装备按真实期初采购修理使用损失返回退役期末库存及全部用户寿命计，不每载新购一件。不重复总成初装部件供应前景回收信用。原生分包承运装卸场站照护修复处理仅准确替换覆盖单元，剩余实际生命周期作业保留。 | ghg-product-2011 |
| atomic | other_rail_freight | 各真实能源物料化学照护投入设备供应损伤部件残留废物污染物展开独立交换，具身份状态端口接收方方向类型原生属性单位数量核实UUID或行级待核登记本过程协议来源计算。货物燃料液体制冷剂电池释放不同于机车场站燃料制冷剂，匹配真实物种来源化合物与C/N/S基粒径接收介质。湿物料清理流适用时按真实干固体水添加排水蒸发留存交付状态闭合，不强制湿重相等。真实证据缺失为不完整而非零。 | ghg-product-2011 |

## 6. 过程清单结构

每张清单流卡仅代表一个可独立识别的产品、物料配方、废物流、物质或供应服务，具有兼容的端口、属性和单位。完整供应总成或实际收集的混合物流可有一个身份，其已含组分不得另列重复交换。第8节cp_expand_协议是必须落实的身份识别要求，不得当作选定流或交换数量。逐项记录真实适用性，以独立行标识列出全部具体交换；完整保留适用范围，未发生须有证据。尚未展开或未知的要求属于不完整，不得当作零。改为采集协议不等于解决缺失身份，也不免除生命周期、分配、计量或边界义务。

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| other_rail_freight | 其他铁路货运承运委托 | required | 实际完整合格车辆或其他未另分类铁路货运委托 | foreground | qualified_carriage |

### 过程：其他铁路货运承运委托 (`other_rail_freight`)

#### 输入

##### 产品流

###### 完整铁路货车制造投入 (`wagon_assembly_manufacture`)

制造交付关口的一件真实完整物理总成；每个实例行只对应一个有记录的型号配置，不同配置分别实例化并计量。仅在该总成为所述节点服务且未被完整供应方覆盖时启用。初始部件包含清单是身份的一部分，已含初始部件不得再次投入；实际未覆盖的维护、更换及寿终另计。 真实汽车架平车低地板封敞专车构型制造端口已含初装件，客户汽车卡车挂车货物不是该资产。

- 选定流：完整铁路货车制造投入
- 流属性/单位：Count / Item(s)
- 数量规则：对每个同型号总成队列：制造件数 * 目标应承担工作量 / 全用户全寿命工作量 / N_eng。两个工作量采用相容同一基准及队列，分母须有证据且为正；目标份额与最终参考归一各一次，已含初始部件不可再相加。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_assets`
- 来源：ghg-product-2011


###### 完整铁路机车制造投入 (`locomotive_assembly_manufacture`)

制造交付关口的一件真实完整物理总成；每个实例行只对应一个有记录的型号配置，不同配置分别实例化并计量。仅在该总成为所述节点服务且未被完整供应方覆盖时启用。初始部件包含清单是身份的一部分，已含初始部件不得再次投入；实际未覆盖的维护、更换及寿终另计。 仅真实干线调车动力构型制造，同队列全部用户有效服务量分摊并补未覆盖全寿命。

- 选定流：完整铁路机车制造投入
- 流属性/单位：Count / Item(s)
- 数量规则：对每个同型号总成队列：制造件数 * 目标应承担工作量 / 全用户全寿命工作量 / N_eng。两个工作量采用相容同一基准及队列，分母须有证据且为正；目标份额与最终参考归一各一次，已含初始部件不可再相加。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_assets`
- 来源：ghg-product-2011


###### 柴油 (`diesel`)

实际机车调车场站或承运责任货物操纵柴油按来源作业原生供应分开。不将客户整份初始燃料库存或货物制造作为投入。承运责任作业从该库存真实提取消耗柴油，无论采购方是谁，均计相容上游柴油供应负荷及直接排放一次，不既计初始库存消耗又计新供柴油。

- 选定流：柴油 `9d258d75-6792-4f1c-9856-81602ed8f816`
- 流属性/单位：质量 / kg
- 数量规则：attributed_actual_diesel_kg / N_eng
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每声明的参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_energy`
- 来源：ghg-product-2011

###### 交流电 (`purchased_ac`)

实际铁路充电场站照护交流电明确供应端口损耗回收覆盖单元。直流不同，实际货物车辆充电能源库存与铁路牵引分开。

- 选定流：交流电 `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- 流属性/单位：净热值 / MJ
- 数量规则：attributed_actual_AC_MJ / N_eng
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每声明的参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_energy`
- 来源：ghg-product-2011

###### 自来水 (`tap_water`)

实际条件自来水清洗照护，工厂端口补未覆盖交付调理。记录真实货物清理水去向，不每委托必需也不替代原回用水。

- 选定流：自来水 `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- 流属性/单位：质量 / kg
- 数量规则：attributed_actual_tap_water_kg / N_eng
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每声明的参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_custody`
- 来源：ghg-product-2011

###### 洗涤剂 (`detergent`)

仅实际兼容合成洗涤剂配方供应；消毒溶剂车辆饰面化学品另有真实身份。

- 选定流：洗涤剂 `1c57d123-df57-49ab-b9d4-957403beb8a5`
- 流属性/单位：质量 / kg
- 数量规则：attributed_actual_detergent_kg / N_eng
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每声明的参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_custody`
- 来源：ghg-product-2011

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 限定已完成其他铁路货运承运委托 (`qualified_carriage`)

参考1Item(s)指履行前由原货物清单、数量状态、提取铁路路线交接义务及状态验收标准定义的一项真实完成合格铁路货运委托。它是服务委托，不是一辆货车机车容器一吨或一公里。N_eng为满足该义务的独立委托数量。损伤损失拒收未解决或原委托未完成，不能仅凭曾走区段或事后缩小清单成为成功输出。有独立当时记录的验收变更服务可按自身声明身份合格，但不再计原委托。部分失败空驶救援返工仍保留归属负荷。N_eng=0时无有限每委托强度。

- 选定流：限定已完成其他铁路货运承运委托
- 流属性/单位：物品数量 / Item(s)
- 数量规则：1 Item(s)
- 数值来源模式：`fixed_value`
- 适用范围：`site_specific`
- 归一化基准：每声明的参考流
- 基准类型：`reference_flow`
- 证据类型：`method_formula`
- 采集协议：`cp_service`
- 来源：ghg-product-2011

##### 废物流

###### 废润滑油 (`used_oil`)

纳入服务作业产生点实际单收废油，真实接收未覆盖处理；货物初始液体产品制造不记为新废油。

- 选定流：废润滑油 `55d93375-7f04-4166-b2a2-88ce929051a5`
- 流属性/单位：质量 / kg
- 数量规则：attributed_actual_used_oil_kg / N_eng
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每声明的参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_assets`
- 来源：ghg-product-2011

##### 基本流

###### 二氧化碳（化石源） (`fossil_co2`)

仅在实际来源与空气未指明子介质相匹配时使用本已核实化石CO2身份；已知其他空气子介质须有自身匹配的已核实身份。货物车辆操纵辅助燃烧、铁路场站燃烧及真实货物事件分别要来源库存证据，不假定整货氧化。

- 选定流：二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 流属性/单位：质量 / kg
- 数量规则：attributed_actual_fossil_CO2_kg / N_eng
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每声明的参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_energy`
- 来源：ghg-product-2011

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| subdivide | other_rail_freight | 按真实委托货物机车编组货车区段编组场场站装载系固照护及各预期服务输出交接直接测量拆分。货物车辆不是服务新造共产品，纳入各共载货物其他资产用户。 | ghg-product-2011 |
| causal | other_rail_freight | 共享牵引依真实编组物理总载荷空间容量约束，货物特定搬运依真实时长数量状态设备约束论证。委托计数是归一化功能，不是通用每单均分动因。多铁路旅客道路供应功能保留明确覆盖因果全部用户份额，物理因果不可得时论证测试其他方法。 | ghg-product-2011 |
| life_period | other_rail_freight | 客户货物车辆与承运机车货车汽车架层板轮挡系固坡道升降轨道道岔道砟电气化编组场场站资产分开。各实际队列保留制造安装运行维护更换退役覆盖。制造端口原生供应按同资产正值全部用户有效服务量分摊，不视为全寿命；未覆盖阶段补全一次。可重复系固保护装备按真实期初采购修理使用损失返回退役期末库存及全部用户寿命计，不每载新购一件。不重复总成初装部件供应前景回收信用。原生分包承运装卸场站照护修复处理仅准确替换覆盖单元，剩余实际生命周期作业保留。 | ghg-product-2011 |
| normalize | other_rail_freight | 对正值N_eng及参考一委托，q_x = allocated_native_quantity_x / N_eng。先分配真实载货空驶调位失败支持全部作业再归一化，不令失败服务零负荷。保留原清单数量状态质量路线及独立论证的可比委托分层，委托计数不表示汽车卡车队特种剩余货物可互换。 | ghg-product-2011 |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_service | other_rail_freight | 服务委托范围完成供应 | collected_record | 原委托ID清单货物身份数量状态质量；提取路线区段距离交接义务；原验收完成；当时变更服务身份验收；N_eng；全部承运编组场场站共货用户；失败空驶救援；供应原生单位数量覆盖单元 | 读原订单清单独立验收交接路线供应记录，识别真实铁路旅客道路边界各参与者。每原完整合格义务仅计一次，或独立当时验收变更服务且不再计原服务。分配真实全部作业原生供应数量再除正N_eng一次。 按参考计量口径汇总唯一且已验收的合格产出作为分母，单列不合格事件及其资源责任。参考量保持规定值，仅归属的清单总量除以正分母。 | Item(s); kg; km; 实际原生单位 | 每实际事件或资产变化 | 完整声明服务队列及归属作业资产期间 | 本过程各实际参与供应全部用户单元 | 每声明的参考流 | 原清单订单验收损伤交接参与供应覆盖保存各实测操作数的来源及原生口径，注明实际采用的换算或归属依据，以及所供结果是否已按该参考流计量。 |
| cp_energy | other_rail_freight | 铁路场站承运责任货物运行能源排放 | collected_record | 事件来源车辆机车货车场站阶段；燃料牌号期初采购转移实耗泄漏期末；交流直流充放SOC_kWh_MJ毛净损耗回收端口；货物初始燃料电池与供应实耗；初始库存真实提取消耗原生数量来源上游覆盖；来源作业全部用户；物种粒径来源介质实测因子不确定性 | 校准真实燃料能源库存车辆移动充电日志区分铁路牵引场站货物操纵辅助照护与货物初始储能。核对原生供应拓扑端口真实毛净损耗回收及有依据适用排放模型，不定SOC充电效率；客户初始库存真实提取消耗燃料能源不论采购方均计相容上游供应负荷一次，记录实测提取来源覆盖，不计全库存车辆电池制造或重复新供应。分配真实全部用户单元归一化一次。 原始观测和对账总量保留其记录口径。负担行只分配仍共享的总量，已归属总量仅除以同队列、同交接点的正合格产出；已与该参考流等效的结果原值沿用。零产出时保留负担并记录去向。各项独立实测交付、排放及移交按各自交接点记录，负担按其适用规则分配。 | kg; MJ; 实际原生单位 | 每实际事件或资产变化 | 完整声明服务队列及归属作业资产期间 | 本过程各实际参与供应全部用户单元 | 每声明的参考流 | 校准能源来源库存SOC记录适用排放模型独立QA保存各实测操作数的来源及原生口径，注明实际采用的换算或归属依据，以及所供结果是否已按该参考流计量。 |
| cp_custody | other_rail_freight | 货物数量状态搬运系固去向 | collected_record | 货车VIN序列货批部件身份数量质量尺寸前后状态；挂车总重自重内货质量层级；原损伤质量验收；装载坡道升降轮挡系固几何；实际照护状态供应原生数量；货物期初入界验收外发退回弃置直排期末转移ID；液体电池燃料状态归属接收；收集清理干固体水添加排水蒸发去向 | 实际检查状态校准货物搬运库存记录关联同原清单保管区间。核对互斥物件部件物理质量内货及来源分明燃料液体电池照护流，损伤状态不是额外质量或自动废物。真实修复退回弃置释放清理接收有记录独立QA，不重复捕集直排。 原始观测和对账总量保留其记录口径。负担行只分配仍共享的总量，已归属总量仅除以同队列、同交接点的正合格产出；已与该参考流等效的结果原值沿用。零产出时保留负担并记录去向。各项独立实测交付、排放及移交按各自交接点记录，负担按其适用规则分配。 | Item(s); kg; m; 实际原生单位 | 每实际事件或资产变化 | 完整声明服务队列及归属作业资产期间 | 本过程各实际参与供应全部用户单元 | 每声明的参考流 | VIN货批状态检查称重几何原生供应保管修复接收联单保存各实测操作数的来源及原生口径，注明实际采用的换算或归属依据，以及所供结果是否已按该参考流计量。 |
| cp_assets | other_rail_freight | 铁路承运场站可重复装备寿命废物 | collected_record | 资产ID队列构型原生数量端口已含初装件；机车货车汽车架轮挡系固坡道升降轨道电气化编组场场站；装备期初采购修理使用损失返回退役期末；制造安装运行维护更换退役期间；正值同资产全部用户有效总量归属份额；供应覆盖单元；废物物料状态接收 | 核实原生总成资产范围同队列服务量完整全部用户寿命可重复库存。仅以同资产正值总服务量分摊真实制造，补全未覆盖阶段供应一次，货物车辆部件与承运可重复装备真实废物接收区分；不每载全购轮挡或套通用寿命回收信用。 原始观测和对账总量保留其记录口径。负担行只分配仍共享的总量，已归属总量仅除以同队列、同交接点的正合格产出；已与该参考流等效的结果原值沿用。零产出时保留负担并记录去向。各项独立实测交付、排放及移交按各自交接点记录，负担按其适用规则分配。 | Item(s); kg; 实际原生单位 | 每实际事件或资产变化 | 完整声明服务队列及归属作业资产期间 | 本过程各实际参与供应全部用户单元 | 每声明的参考流 | 原生范围部件表可重复库存全部用户寿命阶段供应废物记录保存各实测操作数的来源及原生口径，注明实际采用的换算或归属依据，以及所供结果是否已按该参考流计量。 |
| cp_expand_other_energy | other_rail_freight | 必须展开身份 other_energy (inputs/product)：实际其他铁路或货物照护能源供应 | collected_record | requirement_id=other_energy; process_id=other_rail_freight; required_direction=inputs; required_flow_type=product; original_collection_protocol=cp_energy; applicability_evidence; occurrence_event_id; concrete_row_id; physical_identity; formulation_or_species; phase; carbon_origin; particle_fraction; source_compartment; receiving_compartment; supply_or_handover_gate; provider_covered_cells; asset_component_event_and_lifecycle_phase; native_property; native_unit; measured_native_quantity; source_record_id; allocation_all_users; normalization_denominator; per_identity_amount_calculation; verification_evidence; unresolved_reason; occurrence_to_row_reconciliation; carrier_and_supply_state; meter_id; integrated_energy_or_power_time; fuel_as_received_quantity; heating_value_basis; supply_return_state; responsible_failure_and_readiness; complete_provider_exclusion; applicability_decision_record; covered_concrete_rows; excluded_occurrence_reason; completion_evidence; observed_quantity_state; conversion_or_allocation_evidence | 各真实非柴油燃料直流热独立充电能源按原生状态端口单位作业，不能把客户货物整份初始电池燃料库存当新购服务能源。对本服务真实提取消耗部分须计相容上游燃料能源负荷一次，不再重复计新供应或原车辆电池制造。 本范围是必须落实的身份识别要求，不是交换流。使用原节点采集协议及其记录，先按真实身份、端口及独立功能拆分，再将保留的数量、基准及证据规则分别用于各兼容具体行。不得将异质身份合并数量或从总括名称推断原生属性单位。未发生须有证据，适用性或身份未知则阻止完成。 以下采集条件仅限本项 inputs/product 的身份与交接点（实际其他铁路或货物照护能源供应）。存在未被完整供应方覆盖的实际计量电力、购入热冷或消耗燃料时启用。区分载能体、供应状态和独立仪表，燃料组成及收到基数量与有用热分别识别；积分能量不再乘时长，功率须有时间积分证据；燃料换能量须匹配实际热值基准，供热须有供回状态。纳入应分摊待机、空载、失败和返工职责；总表仅协调分项，不再次相加。 每项适用性判断须留证。经证实不发生仅关闭所述范围和时段，缺记录仍未解决。发生的要求须将全部事件映射到具体row ID及相容原生数量，或精确映射至已覆盖行和供应方责任，并逐项说明排除理由。证据须覆盖身份、支持单位、计算、原始记录及全部去向；既有与新增分支对同一事件互斥覆盖，协议本身不作为交换。完成须无未分配事件、无重复覆盖、无相关数量或身份未决项。按有证据的实际分支采集原始字段。不适用的操作数须关联分支判定，适用但缺乏实测或依据的数量登记待决。 | 实测交付状态下的载能体量；能量采用有记录的仪表或热值口径 | 每次真实事件及每项有证据的未发生判断 | 完整声明队列及归属资产寿命关联事件 | 仅本过程真实责任场所及供应方 | 先对账原生事件总量，仅汇总身份、状态、单位、交接点及期间均相容的量。按相应计算规则逐行核算一次：只分配仍共享的负担，目标总量仅除以同口径的正合格产出；等效每参考流数值原值沿用，零产出期间不作除法并保留处置记录。 | 保留仪表期间、供应状态及交接点。积分能量已含时长；仅在对应路线由功率和实测时长，或相容燃料量与有据热值计算能量。区分燃料提取、有用热冷交付及已覆盖的上游阶段。 对上述具体身份及相容输入口径，仅在数量的归属和归一化状态与下式前提匹配时使用该规则：attributed_native_energy / N_eng 保留原始凭据、实际采用的系数和结果单位。数值来源模式：calculated_value；适用范围：site_specific；归一化基准：每声明的参考流；基准类型：reference_flow；证据类型：calculated_from_collection；采集协议：cp_energy；来源：ghg-product-2011。须有原始记录、精确原生支持及逐具体行核验；这些规则不提供缺失身份或数值。 完成判据：check_occurrence_completion。 |
| cp_expand_protection_supply | other_rail_freight | 必须展开身份 protection_supply (inputs/product)：实际一次性货物保护或系固投入 | collected_record | requirement_id=protection_supply; process_id=other_rail_freight; required_direction=inputs; required_flow_type=product; original_collection_protocol=cp_custody; applicability_evidence; occurrence_event_id; concrete_row_id; physical_identity; formulation_or_species; phase; carbon_origin; particle_fraction; source_compartment; receiving_compartment; supply_or_handover_gate; provider_covered_cells; asset_component_event_and_lifecycle_phase; native_property; native_unit; measured_native_quantity; source_record_id; allocation_all_users; normalization_denominator; per_identity_amount_calculation; verification_evidence; unresolved_reason; occurrence_to_row_reconciliation; operation_record; material_sku; formulation_grade_state; independent_function; supplier; package_tare; opening_stock; net_receipts; unused_returns; closing_stock; failed_use; destination; applicability_decision_record; covered_concrete_rows; excluded_occurrence_reason; completion_evidence; observed_quantity_state; conversion_or_allocation_evidence | 各真实膜盖垫系带衬垫按物料状态使用独立记录。可重复轮挡架系固属资产库存寿命，不每装载新制造。 本范围是必须落实的身份识别要求，不是交换流。使用原节点采集协议及其记录，先按真实身份、端口及独立功能拆分，再将保留的数量、基准及证据规则分别用于各兼容具体行。不得将异质身份合并数量或从总括名称推断原生属性单位。未发生须有证据，适用性或身份未知则阻止完成。 以下采集条件仅限本项 inputs/product 的身份与交接点（实际一次性货物保护或系固投入）。仅对实际发生的所述作业及独立消耗SKU或实物启用。记录材料或配方、等级状态、功能、供应方、扣包装皮重后的净量、库存变动、未用退回和去向。独立供应的包装衬材按材料及一次性或复用状态区分；完整配方或物理总成保留一个身份，组成信息不相加，不同外购品不得共用汇总数量。纳入失败使用、维护及返工，记录真实消耗而非仅采购量。 每项适用性判断须留证。经证实不发生仅关闭所述范围和时段，缺记录仍未解决。发生的要求须将全部事件映射到具体row ID及相容原生数量，或精确映射至已覆盖行和供应方责任，并逐项说明排除理由。证据须覆盖身份、支持单位、计算、原始记录及全部去向；既有与新增分支对同一事件互斥覆盖，协议本身不作为交换。完成须无未分配事件、无重复覆盖、无相关数量或身份未决项。按有证据的实际分支采集原始字段。不适用的操作数须关联分支判定，适用但缺乏实测或依据的数量登记待决。 | 实际品项、配方或物件在规定交接点及状态下的原生数量 | 每次真实事件及每项有证据的未发生判断 | 完整声明队列及归属资产寿命关联事件 | 仅本过程真实责任场所及供应方 | 先对账原生事件总量，仅汇总身份、状态、单位、交接点及期间均相容的量。按相应计算规则逐行核算一次：只分配仍共享的负担，目标总量仅除以同口径的正合格产出；等效每参考流数值原值沿用，零产出期间不作除法并保留处置记录。 | 逐批核对收货、期初期末、退回、耗用及互斥去向。件数或体积折质量须有单件质量或相容状态密度依据；产品身份以外的包装和衬材独立登记。 对上述具体身份及相容输入口径，仅在数量的归属和归一化状态与下式前提匹配时使用该规则：attributed_native_protection / N_eng 保留原始凭据、实际采用的系数和结果单位。数值来源模式：calculated_value；适用范围：site_specific；归一化基准：每声明的参考流；基准类型：reference_flow；证据类型：calculated_from_collection；采集协议：cp_custody；来源：ghg-product-2011。须有原始记录、精确原生支持及逐具体行核验；这些规则不提供缺失身份或数值。 完成判据：check_occurrence_completion。 |
| cp_expand_care_supply | other_rail_freight | 必须展开身份 care_supply (inputs/product)：实际货物状态或服务修复投入 | collected_record | requirement_id=care_supply; process_id=other_rail_freight; required_direction=inputs; required_flow_type=product; original_collection_protocol=cp_custody; applicability_evidence; occurrence_event_id; concrete_row_id; physical_identity; formulation_or_species; phase; carbon_origin; particle_fraction; source_compartment; receiving_compartment; supply_or_handover_gate; provider_covered_cells; asset_component_event_and_lifecycle_phase; native_property; native_unit; measured_native_quantity; source_record_id; allocation_all_users; normalization_denominator; per_identity_amount_calculation; verification_evidence; unresolved_reason; occurrence_to_row_reconciliation; operation_record; material_sku; formulation_grade_state; independent_function; supplier; package_tare; opening_stock; net_receipts; unused_returns; closing_stock; failed_use; destination; applicability_decision_record; covered_concrete_rows; excluded_occurrence_reason; completion_evidence; observed_quantity_state; conversion_or_allocation_evidence | 仅真实承运责任保护围护修复清理物料按物种状态原生单位分别识别。货物制造独立车辆维修排除，实际服务所需及引发修复更换负荷按归属端口保留。 本范围是必须落实的身份识别要求，不是交换流。使用原节点采集协议及其记录，先按真实身份、端口及独立功能拆分，再将保留的数量、基准及证据规则分别用于各兼容具体行。不得将异质身份合并数量或从总括名称推断原生属性单位。未发生须有证据，适用性或身份未知则阻止完成。 以下采集条件仅限本项 inputs/product 的身份与交接点（实际货物状态或服务修复投入）。仅对实际发生的所述作业及独立消耗SKU或实物启用。记录材料或配方、等级状态、功能、供应方、扣包装皮重后的净量、库存变动、未用退回和去向。独立供应的包装衬材按材料及一次性或复用状态区分；完整配方或物理总成保留一个身份，组成信息不相加，不同外购品不得共用汇总数量。纳入失败使用、维护及返工，记录真实消耗而非仅采购量。 每项适用性判断须留证。经证实不发生仅关闭所述范围和时段，缺记录仍未解决。发生的要求须将全部事件映射到具体row ID及相容原生数量，或精确映射至已覆盖行和供应方责任，并逐项说明排除理由。证据须覆盖身份、支持单位、计算、原始记录及全部去向；既有与新增分支对同一事件互斥覆盖，协议本身不作为交换。完成须无未分配事件、无重复覆盖、无相关数量或身份未决项。按有证据的实际分支采集原始字段。不适用的操作数须关联分支判定，适用但缺乏实测或依据的数量登记待决。 | 实际品项、配方或物件在规定交接点及状态下的原生数量 | 每次真实事件及每项有证据的未发生判断 | 完整声明队列及归属资产寿命关联事件 | 仅本过程真实责任场所及供应方 | 先对账原生事件总量，仅汇总身份、状态、单位、交接点及期间均相容的量。按相应计算规则逐行核算一次：只分配仍共享的负担，目标总量仅除以同口径的正合格产出；等效每参考流数值原值沿用，零产出期间不作除法并保留处置记录。 | 逐批核对收货、期初期末、退回、耗用及互斥去向。件数或体积折质量须有单件质量或相容状态密度依据；产品身份以外的包装和衬材独立登记。 对上述具体身份及相容输入口径，仅在数量的归属和归一化状态与下式前提匹配时使用该规则：attributed_native_care_repair / N_eng 保留原始凭据、实际采用的系数和结果单位。数值来源模式：calculated_value；适用范围：site_specific；归一化基准：每声明的参考流；基准类型：reference_flow；证据类型：calculated_from_collection；采集协议：cp_custody；来源：ghg-product-2011。须有原始记录、精确原生支持及逐具体行核验；这些规则不提供缺失身份或数值。 完成判据：check_occurrence_completion。 |
| cp_expand_wagon_assembly | other_rail_freight | 必须展开身份 wagon_assembly (inputs/product)：实际其他货运铁路货车完整总成 | collected_record | requirement_id=wagon_assembly; process_id=other_rail_freight; required_direction=inputs; required_flow_type=product; original_collection_protocol=cp_assets; applicability_evidence; occurrence_event_id; concrete_row_id; physical_identity; formulation_or_species; phase; carbon_origin; particle_fraction; source_compartment; receiving_compartment; supply_or_handover_gate; provider_covered_cells; asset_component_event_and_lifecycle_phase; native_property; native_unit; measured_native_quantity; source_record_id; allocation_all_users; normalization_denominator; per_identity_amount_calculation; verification_evidence; unresolved_reason; occurrence_to_row_reconciliation; asset_or_reusable_id; model_configuration; included_initial_components; lifecycle_phase; manufacture_native_quantity; target_duty; all_user_same_cohort_lifetime_duty; replacement_event; provider_coverage_cells; applicability_decision_record; covered_concrete_rows; excluded_occurrence_reason; completion_evidence; observed_quantity_state; conversion_or_allocation_evidence; supply_or_service_gate; accepted_service_demand; provider_functional_unit; provider_intensity_basis; covered_lifecycle_stages | 真实汽车架平车低地板封敞专车构型制造端口已含初装件，客户汽车卡车挂车货物不是该资产。 本范围是必须落实的身份识别要求，不是交换流。使用原节点采集协议及其记录，先按真实身份、端口及独立功能拆分，再将保留的数量、基准及证据规则分别用于各兼容具体行。不得将异质身份合并数量或从总括名称推断原生属性单位。未发生须有证据，适用性或身份未知则阻止完成。 对本项规定的实体资产或周转品，核实供应交接点、初始部件以及实际替换、维护、清洗、失败和退役记录。租赁或综合供应合同须核实覆盖范围；本项包含已交付服务时按实际验收的原生需求计量，仅另行追溯未覆盖的资产阶段。直接建模资产按同队列目标作业量与全用户有据正寿命作业量之比分配，禁止将整个设施归给一个服务。 已明确分支（仅按实际适用记录启用）：wagon_assembly_manufacture. 每项适用性判断须留证。经证实不发生仅关闭所述范围和时段，缺记录仍未解决。发生的要求须将全部事件映射到具体row ID及相容原生数量，或精确映射至已覆盖行和供应方责任，并逐项说明排除理由。证据须覆盖身份、支持单位、计算、原始记录及全部去向；既有与新增分支对同一事件互斥覆盖，协议本身不作为交换。完成须无未分配事件、无重复覆盖、无相关数量或身份未决项。按有证据的实际分支采集原始字段。不适用的操作数须关联分支判定，适用但缺乏实测或依据的数量登记待决。 | 实体资产或周转品按已核实的制造或供应单位；同一队列的相容作业量；范围内的交付服务用其原生功能单位 | 每次真实事件及每项有证据的未发生判断 | 完整声明队列及归属资产寿命关联事件 | 仅本过程真实责任场所及供应方 | 先对账原生事件总量，仅汇总身份、状态、单位、交接点及期间均相容的量。按相应计算规则逐行核算一次：只分配仍共享的负担，目标总量仅除以同口径的正合格产出；等效每参考流数值原值沿用，零产出期间不作除法并保留处置记录。 | 实体资产按有记录的供应交接量乘目标作业量与同队列全用户正寿命作业量之比，保留配置、投运、更换及退役或剩余寿命记录。范围内如有已交付服务，按已核实原生强度乘相容交付需求，留存覆盖凭据，未覆盖阶段单列。 若实体资产按 物品数量 / Item(s) 计量，保留实测供应量，寿命作业量另记单位。 对该交接点相容的资产量或已独立核实的服务结果，仅在数量的归属和归一化状态与下式前提匹配时使用该规则：attributed_actual_wagon_assembly_items / N_eng 保留原始凭据、实际采用的系数和结果单位。数值来源模式：calculated_value；适用范围：site_specific；归一化基准：每声明的参考流；基准类型：reference_flow；证据类型：calculated_from_collection；采集协议：cp_assets；来源：ghg-product-2011。须有原始记录、精确原生支持及逐具体行核验；这些规则不提供缺失身份或数值。 完成判据：check_occurrence_completion。 |
| cp_expand_locomotive_assembly | other_rail_freight | 必须展开身份 locomotive_assembly (inputs/product)：实际铁路机车完整总成 | collected_record | requirement_id=locomotive_assembly; process_id=other_rail_freight; required_direction=inputs; required_flow_type=product; original_collection_protocol=cp_assets; applicability_evidence; occurrence_event_id; concrete_row_id; physical_identity; formulation_or_species; phase; carbon_origin; particle_fraction; source_compartment; receiving_compartment; supply_or_handover_gate; provider_covered_cells; asset_component_event_and_lifecycle_phase; native_property; native_unit; measured_native_quantity; source_record_id; allocation_all_users; normalization_denominator; per_identity_amount_calculation; verification_evidence; unresolved_reason; occurrence_to_row_reconciliation; asset_or_reusable_id; model_configuration; included_initial_components; lifecycle_phase; manufacture_native_quantity; target_duty; all_user_same_cohort_lifetime_duty; replacement_event; provider_coverage_cells; applicability_decision_record; covered_concrete_rows; excluded_occurrence_reason; completion_evidence; observed_quantity_state; conversion_or_allocation_evidence; supply_or_service_gate; accepted_service_demand; provider_functional_unit; provider_intensity_basis; covered_lifecycle_stages | 仅真实干线调车动力构型制造，同队列全部用户有效服务量分摊并补未覆盖全寿命。 本范围是必须落实的身份识别要求，不是交换流。使用原节点采集协议及其记录，先按真实身份、端口及独立功能拆分，再将保留的数量、基准及证据规则分别用于各兼容具体行。不得将异质身份合并数量或从总括名称推断原生属性单位。未发生须有证据，适用性或身份未知则阻止完成。 对本项规定的实体资产或周转品，核实供应交接点、初始部件以及实际替换、维护、清洗、失败和退役记录。租赁或综合供应合同须核实覆盖范围；本项包含已交付服务时按实际验收的原生需求计量，仅另行追溯未覆盖的资产阶段。直接建模资产按同队列目标作业量与全用户有据正寿命作业量之比分配，禁止将整个设施归给一个服务。 已明确分支（仅按实际适用记录启用）：locomotive_assembly_manufacture. 每项适用性判断须留证。经证实不发生仅关闭所述范围和时段，缺记录仍未解决。发生的要求须将全部事件映射到具体row ID及相容原生数量，或精确映射至已覆盖行和供应方责任，并逐项说明排除理由。证据须覆盖身份、支持单位、计算、原始记录及全部去向；既有与新增分支对同一事件互斥覆盖，协议本身不作为交换。完成须无未分配事件、无重复覆盖、无相关数量或身份未决项。按有证据的实际分支采集原始字段。不适用的操作数须关联分支判定，适用但缺乏实测或依据的数量登记待决。 | 实体资产或周转品按已核实的制造或供应单位；同一队列的相容作业量；范围内的交付服务用其原生功能单位 | 每次真实事件及每项有证据的未发生判断 | 完整声明队列及归属资产寿命关联事件 | 仅本过程真实责任场所及供应方 | 先对账原生事件总量，仅汇总身份、状态、单位、交接点及期间均相容的量。按相应计算规则逐行核算一次：只分配仍共享的负担，目标总量仅除以同口径的正合格产出；等效每参考流数值原值沿用，零产出期间不作除法并保留处置记录。 | 实体资产按有记录的供应交接量乘目标作业量与同队列全用户正寿命作业量之比，保留配置、投运、更换及退役或剩余寿命记录。范围内如有已交付服务，按已核实原生强度乘相容交付需求，留存覆盖凭据，未覆盖阶段单列。 若实体资产按 物品数量 / Item(s) 计量，保留实测供应量，寿命作业量另记单位。 对该交接点相容的资产量或已独立核实的服务结果，仅在数量的归属和归一化状态与下式前提匹配时使用该规则：attributed_actual_locomotive_assembly_items / N_eng 保留原始凭据、实际采用的系数和结果单位。数值来源模式：calculated_value；适用范围：site_specific；归一化基准：每声明的参考流；基准类型：reference_flow；证据类型：calculated_from_collection；采集协议：cp_assets；来源：ghg-product-2011。须有原始记录、精确原生支持及逐具体行核验；这些规则不提供缺失身份或数值。 完成判据：check_occurrence_completion。 |
| cp_expand_reusable_gear | other_rail_freight | 必须展开身份 reusable_gear (inputs/product)：实际可重复货物搬运保护系固装备 | collected_record | requirement_id=reusable_gear; process_id=other_rail_freight; required_direction=inputs; required_flow_type=product; original_collection_protocol=cp_assets; applicability_evidence; occurrence_event_id; concrete_row_id; physical_identity; formulation_or_species; phase; carbon_origin; particle_fraction; source_compartment; receiving_compartment; supply_or_handover_gate; provider_covered_cells; asset_component_event_and_lifecycle_phase; native_property; native_unit; measured_native_quantity; source_record_id; allocation_all_users; normalization_denominator; per_identity_amount_calculation; verification_evidence; unresolved_reason; occurrence_to_row_reconciliation; asset_or_reusable_id; model_configuration; included_initial_components; lifecycle_phase; manufacture_native_quantity; target_duty; all_user_same_cohort_lifetime_duty; replacement_event; provider_coverage_cells; applicability_decision_record; covered_concrete_rows; excluded_occurrence_reason; completion_evidence; observed_quantity_state; conversion_or_allocation_evidence; supply_or_service_gate; accepted_service_demand; provider_functional_unit; provider_intensity_basis; covered_lifecycle_stages | 真实轮挡系固坡道过桥板盖架升降照护装备分别列，同资产库存使用修理损失退役寿命全部用户，不重复货车总成初装件。 本范围是必须落实的身份识别要求，不是交换流。使用原节点采集协议及其记录，先按真实身份、端口及独立功能拆分，再将保留的数量、基准及证据规则分别用于各兼容具体行。不得将异质身份合并数量或从总括名称推断原生属性单位。未发生须有证据，适用性或身份未知则阻止完成。 对本项规定的实体资产或周转品，核实供应交接点、初始部件以及实际替换、维护、清洗、失败和退役记录。租赁或综合供应合同须核实覆盖范围；本项包含已交付服务时按实际验收的原生需求计量，仅另行追溯未覆盖的资产阶段。直接建模资产按同队列目标作业量与全用户有据正寿命作业量之比分配，禁止将整个设施归给一个服务。 每项适用性判断须留证。经证实不发生仅关闭所述范围和时段，缺记录仍未解决。发生的要求须将全部事件映射到具体row ID及相容原生数量，或精确映射至已覆盖行和供应方责任，并逐项说明排除理由。证据须覆盖身份、支持单位、计算、原始记录及全部去向；既有与新增分支对同一事件互斥覆盖，协议本身不作为交换。完成须无未分配事件、无重复覆盖、无相关数量或身份未决项。按有证据的实际分支采集原始字段。不适用的操作数须关联分支判定，适用但缺乏实测或依据的数量登记待决。 | 实体资产或周转品按已核实的制造或供应单位；同一队列的相容作业量；范围内的交付服务用其原生功能单位 | 每次真实事件及每项有证据的未发生判断 | 完整声明队列及归属资产寿命关联事件 | 仅本过程真实责任场所及供应方 | 先对账原生事件总量，仅汇总身份、状态、单位、交接点及期间均相容的量。按相应计算规则逐行核算一次：只分配仍共享的负担，目标总量仅除以同口径的正合格产出；等效每参考流数值原值沿用，零产出期间不作除法并保留处置记录。 | 实体资产按有记录的供应交接量乘目标作业量与同队列全用户正寿命作业量之比，保留配置、投运、更换及退役或剩余寿命记录。范围内如有已交付服务，按已核实原生强度乘相容交付需求，留存覆盖凭据，未覆盖阶段单列。 若实体资产按 物品数量 / Item(s) 计量，保留实测供应量，寿命作业量另记单位。 对该交接点相容的资产量或已独立核实的服务结果，仅在数量的归属和归一化状态与下式前提匹配时使用该规则：attributed_actual_reusable_gear_items / N_eng 保留原始凭据、实际采用的系数和结果单位。数值来源模式：calculated_value；适用范围：site_specific；归一化基准：每声明的参考流；基准类型：reference_flow；证据类型：calculated_from_collection；采集协议：cp_assets；来源：ghg-product-2011。须有原始记录、精确原生支持及逐具体行核验；这些规则不提供缺失身份或数值。 完成判据：check_occurrence_completion。 |
| cp_expand_infrastructure | other_rail_freight | 必须展开身份 infrastructure (inputs/product)：实际铁路货物场站基础设施生命周期投入 | collected_record | requirement_id=infrastructure; process_id=other_rail_freight; required_direction=inputs; required_flow_type=product; original_collection_protocol=cp_assets; applicability_evidence; occurrence_event_id; concrete_row_id; physical_identity; formulation_or_species; phase; carbon_origin; particle_fraction; source_compartment; receiving_compartment; supply_or_handover_gate; provider_covered_cells; asset_component_event_and_lifecycle_phase; native_property; native_unit; measured_native_quantity; source_record_id; allocation_all_users; normalization_denominator; per_identity_amount_calculation; verification_evidence; unresolved_reason; occurrence_to_row_reconciliation; asset_or_reusable_id; model_configuration; included_initial_components; lifecycle_phase; manufacture_native_quantity; target_duty; all_user_same_cohort_lifetime_duty; replacement_event; provider_coverage_cells; applicability_decision_record; covered_concrete_rows; excluded_occurrence_reason; completion_evidence; ownership_mode; provider_native_unit; actual_delivered_demand; coverage_stage; attribution_state; observed_quantity_state; conversion_or_allocation_evidence; supply_or_service_gate; accepted_service_demand; provider_functional_unit; provider_intensity_basis; covered_lifecycle_stages | 各真实轨道电气化编组装载停放检查照护设施原生资产寿命服务及全部用户同资产服务量，不每委托投入整个场站。 本范围是必须落实的身份识别要求，不是交换流。使用原节点采集协议及其记录，先按真实身份、端口及独立功能拆分，再将保留的数量、基准及证据规则分别用于各兼容具体行。不得将异质身份合并数量或从总括名称推断原生属性单位。未发生须有证据，适用性或身份未知则阻止完成。 识别实际实体资产、周转品或已交付的生命周期服务，登记配置、场址、期间、责任方、队列及覆盖阶段。外购服务按供应方已核实的每原生功能单位强度乘相容交付需求；仅对尚未归属的负担应用目标份额，仅对尚未归一化的目标总量除以相应正参考产出。不得再计该服务已含的制造。自建或购入的实体资产按制造量乘以目标作业量与同资产队列全用户完整寿命正作业量之比，再按匹配合格产出归一化一次。逐事件追踪初始部件、增配、更换、空闲或失败使用、修理、清洗及退役。混合覆盖时每个缺口阶段独立承接一次；保留发票、资产台账、作业和覆盖记录，禁止假定通用寿命或服务单位。 每项适用性判断须留证。经证实不发生仅关闭所述范围和时段，缺记录仍未解决。发生的要求须将全部事件映射到具体row ID及相容原生数量，或精确映射至已覆盖行和供应方责任，并逐项说明排除理由。证据须覆盖身份、支持单位、计算、原始记录及全部去向；既有与新增分支对同一事件互斥覆盖，协议本身不作为交换。完成须无未分配事件、无重复覆盖、无相关数量或身份未决项。按有证据的实际分支采集原始字段。仅属于不适用分支的字段须注明理由；适用分支缺少的计量仍须登记待决。 | 实体资产或周转品按已核实的制造或供应单位；同一队列的相容作业量；范围内的交付服务用其原生功能单位 | 每次真实事件及每项有证据的未发生判断 | 完整声明队列及归属资产寿命关联事件 | 仅本过程真实责任场所及供应方 | 先对账原生事件总量，仅汇总身份、状态、单位、交接点及期间均相容的量。按相应计算规则逐行核算一次：只分配仍共享的负担，目标总量仅除以同口径的正合格产出；等效每参考流数值原值沿用，零产出期间不作除法并保留处置记录。 | 实体资产按有记录的供应交接量乘目标作业量与同队列全用户正寿命作业量之比，保留配置、投运、更换及退役或剩余寿命记录。范围内如有已交付服务，按已核实原生强度乘相容交付需求，留存覆盖凭据，未覆盖阶段单列。 对该交接点相容的资产量或已独立核实的服务结果，仅在数量的归属和归一化状态与下式前提匹配时使用该规则：attributed_native_infrastructure / N_eng 保留原始凭据、实际采用的系数和结果单位。数值来源模式：calculated_value；适用范围：site_specific；归一化基准：每声明的参考流；基准类型：reference_flow；证据类型：calculated_from_collection；采集协议：cp_assets；来源：ghg-product-2011。须有原始记录、精确原生支持及逐具体行核验；这些规则不提供缺失身份或数值。 完成判据：check_occurrence_completion。 |
| cp_expand_maintenance_supply | other_rail_freight | 必须展开身份 maintenance_supply (inputs/product)：实际铁路场站维护更换投入 | collected_record | requirement_id=maintenance_supply; process_id=other_rail_freight; required_direction=inputs; required_flow_type=product; original_collection_protocol=cp_assets; applicability_evidence; occurrence_event_id; concrete_row_id; physical_identity; formulation_or_species; phase; carbon_origin; particle_fraction; source_compartment; receiving_compartment; supply_or_handover_gate; provider_covered_cells; asset_component_event_and_lifecycle_phase; native_property; native_unit; measured_native_quantity; source_record_id; allocation_all_users; normalization_denominator; per_identity_amount_calculation; verification_evidence; unresolved_reason; occurrence_to_row_reconciliation; operation_record; material_sku; formulation_grade_state; independent_function; supplier; package_tare; opening_stock; net_receipts; unused_returns; closing_stock; failed_use; destination; applicability_decision_record; covered_concrete_rows; excluded_occurrence_reason; completion_evidence; observed_quantity_state; conversion_or_allocation_evidence | 真实轮制动钢轨集电坡道装备部件润滑维护分别列，避免总成初装可重复装备供应重复。 本范围是必须落实的身份识别要求，不是交换流。使用原节点采集协议及其记录，先按真实身份、端口及独立功能拆分，再将保留的数量、基准及证据规则分别用于各兼容具体行。不得将异质身份合并数量或从总括名称推断原生属性单位。未发生须有证据，适用性或身份未知则阻止完成。 以下采集条件仅限本项 inputs/product 的身份与交接点（实际铁路场站维护更换投入）。仅对实际发生的所述作业及独立消耗SKU或实物启用。记录材料或配方、等级状态、功能、供应方、扣包装皮重后的净量、库存变动、未用退回和去向。独立供应的包装衬材按材料及一次性或复用状态区分；完整配方或物理总成保留一个身份，组成信息不相加，不同外购品不得共用汇总数量。纳入失败使用、维护及返工，记录真实消耗而非仅采购量。 每项适用性判断须留证。经证实不发生仅关闭所述范围和时段，缺记录仍未解决。发生的要求须将全部事件映射到具体row ID及相容原生数量，或精确映射至已覆盖行和供应方责任，并逐项说明排除理由。证据须覆盖身份、支持单位、计算、原始记录及全部去向；既有与新增分支对同一事件互斥覆盖，协议本身不作为交换。完成须无未分配事件、无重复覆盖、无相关数量或身份未决项。按有证据的实际分支采集原始字段。不适用的操作数须关联分支判定，适用但缺乏实测或依据的数量登记待决。 | 实际品项、配方或物件在规定交接点及状态下的原生数量 | 每次真实事件及每项有证据的未发生判断 | 完整声明队列及归属资产寿命关联事件 | 仅本过程真实责任场所及供应方 | 先对账原生事件总量，仅汇总身份、状态、单位、交接点及期间均相容的量。按相应计算规则逐行核算一次：只分配仍共享的负担，目标总量仅除以同口径的正合格产出；等效每参考流数值原值沿用，零产出期间不作除法并保留处置记录。 | 逐批核对收货、期初期末、退回、耗用及互斥去向。件数或体积折质量须有单件质量或相容状态密度依据；产品身份以外的包装和衬材独立登记。 对上述具体身份及相容输入口径，仅在数量的归属和归一化状态与下式前提匹配时使用该规则：attributed_native_maintenance / N_eng 保留原始凭据、实际采用的系数和结果单位。数值来源模式：calculated_value；适用范围：site_specific；归一化基准：每声明的参考流；基准类型：reference_flow；证据类型：calculated_from_collection；采集协议：cp_assets；来源：ghg-product-2011。须有原始记录、精确原生支持及逐具体行核验；这些规则不提供缺失身份或数值。 完成判据：check_occurrence_completion。 |
| cp_expand_provider_service | other_rail_freight | 必须展开身份 provider_service (inputs/product)：实际独立供应合格铁路或搬运服务 | collected_record | requirement_id=provider_service; process_id=other_rail_freight; required_direction=inputs; required_flow_type=product; original_collection_protocol=cp_service; applicability_evidence; occurrence_event_id; concrete_row_id; physical_identity; formulation_or_species; phase; carbon_origin; particle_fraction; source_compartment; receiving_compartment; supply_or_handover_gate; provider_covered_cells; asset_component_event_and_lifecycle_phase; native_property; native_unit; measured_native_quantity; source_record_id; allocation_all_users; normalization_denominator; per_identity_amount_calculation; verification_evidence; unresolved_reason; occurrence_to_row_reconciliation; provider_contract; independent_function; provider_gates; native_functional_unit; delivered_quantity; covered_process_phase_cells; uncovered_foreground_rows; applicability_decision_record; covered_concrete_rows; excluded_occurrence_reason; completion_evidence; observed_quantity_state; conversion_or_allocation_evidence; provider_functional_unit; accepted_service_demand; provider_intensity_basis; covered_service_stages | 仅真实铁路场站装载照护修复清理处理供应原生单位端口覆盖，前景覆盖单元替换一次，不把一委托强制成各原生服务数量。 本范围是必须落实的身份识别要求，不是交换流。使用原节点采集协议及其记录，先按真实身份、端口及独立功能拆分，再将保留的数量、基准及证据规则分别用于各兼容具体行。不得将异质身份合并数量或从总括名称推断原生属性单位。未发生须有证据，适用性或身份未知则阻止完成。 以下采集条件仅限本项 inputs/product 的身份与交接点（实际独立供应合格铁路或搬运服务）。仅在本PCR范围内实际委托独立功能时启用。记录合同、交付服务功能、关口、原生功能单位、实际交付量及具体覆盖的过程和寿命阶段；逐项与自营活动比对，完整供应方或未覆盖前景活动仅计一次。不用金额、材料质量或假设件数替代真实功能；同一最终服务不通过外部最终产品供应方递归重复计入。 每项适用性判断须留证。经证实不发生仅关闭所述范围和时段，缺记录仍未解决。发生的要求须将全部事件映射到具体row ID及相容原生数量，或精确映射至已覆盖行和供应方责任，并逐项说明排除理由。证据须覆盖身份、支持单位、计算、原始记录及全部去向；既有与新增分支对同一事件互斥覆盖，协议本身不作为交换。完成须无未分配事件、无重复覆盖、无相关数量或身份未决项。按有证据的实际分支采集原始字段。不适用的操作数须关联分支判定，适用但缺乏实测或依据的数量登记待决。 | 已核实的合同交付功能单位；仅独立可计数且已验收的结果使用 Item(s) | 每次真实事件及每项有证据的未发生判断 | 完整声明队列及归属资产寿命关联事件 | 仅本过程真实责任场所及供应方 | 先对账原生事件总量，仅汇总身份、状态、单位、交接点及期间均相容的量。按相应计算规则逐行核算一次：只分配仍共享的负担，目标总量仅除以同口径的正合格产出；等效每参考流数值原值沿用，零产出期间不作除法并保留处置记录。 | 按指定交接点实际验收量计量。仅在单位强度换算为总负担时，以供应方强度乘同一原生单位的需求量。保留合同范围、验收、原生单位及覆盖阶段记录。仅按时间交付的功能以时长计量。 对按合同口径已验收的服务，仅在数量的归属和归一化状态与下式前提匹配时使用该规则：attributed_native_provider / N_eng 保留原始凭据、实际采用的系数和结果单位。数值来源模式：calculated_value；适用范围：site_specific；归一化基准：每声明的参考流；基准类型：reference_flow；证据类型：calculated_from_collection；采集协议：cp_service；来源：ghg-product-2011。须有原始记录、精确原生支持及逐具体行核验；这些规则不提供缺失身份或数值。 完成判据：check_occurrence_completion。 |
| cp_expand_damaged_material | other_rail_freight | 必须展开身份 damaged_material (outputs/waste)：实际弃置货物来源部件物料 | collected_record | requirement_id=damaged_material; process_id=other_rail_freight; required_direction=outputs; required_flow_type=waste; original_collection_protocol=cp_custody; applicability_evidence; occurrence_event_id; concrete_row_id; physical_identity; formulation_or_species; phase; carbon_origin; particle_fraction; source_compartment; receiving_compartment; supply_or_handover_gate; provider_covered_cells; asset_component_event_and_lifecycle_phase; native_property; native_unit; measured_native_quantity; source_record_id; allocation_all_users; normalization_denominator; per_identity_amount_calculation; verification_evidence; unresolved_reason; occurrence_to_row_reconciliation; waste_origin_event; material_or_true_mixture; moisture_basis; container_tare; opening_waste_stock; generated_waste; received_waste; handover_quantity; closing_waste_stock; onsite_treatment; receiver_id; applicability_decision_record; covered_concrete_rows; excluded_occurrence_reason; completion_evidence; observed_quantity_state; conversion_or_allocation_evidence | 仅真实弃置货物部件物种具归属状态接收方，各展开行一物料。损坏但留存交付修复客户车不自动为废物或整车制造，不再同计释放。 本范围是必须落实的身份识别要求，不是交换流。使用原节点采集协议及其记录，先按真实身份、端口及独立功能拆分，再将保留的数量、基准及证据规则分别用于各兼容具体行。不得将异质身份合并数量或从总括名称推断原生属性单位。未发生须有证据，适用性或身份未知则阻止完成。 以下采集条件仅限本项 outputs/waste 的身份与交接点（实际弃置货物来源部件物料）。本过程实际产生或接收所述废物时启用。记录材料或配方或真实共同收集混合物、干湿状态、容器皮重、来源事件、存量、交接关口及实际接收者；核对产生量+期初库存+接收量=交出量+期末库存+另列现场处理量。分收的不同废物分行，真实接收混合物可为一行，其组分仅作不可相加审计；有用回收、客户保留物与废物去向分开，不自动给替代抵扣。 每项适用性判断须留证。经证实不发生仅关闭所述范围和时段，缺记录仍未解决。发生的要求须将全部事件映射到具体row ID及相容原生数量，或精确映射至已覆盖行和供应方责任，并逐项说明排除理由。证据须覆盖身份、支持单位、计算、原始记录及全部去向；既有与新增分支对同一事件互斥覆盖，协议本身不作为交换。完成须无未分配事件、无重复覆盖、无相关数量或身份未决项。按有证据的实际分支采集原始字段。不适用的操作数须关联分支判定，适用但缺乏实测或依据的数量登记待决。 | 接收方验收的具体废物或实际混合收集物在实测状态下的原生数量 | 每次真实事件及每项有证据的未发生判断 | 完整声明队列及归属资产寿命关联事件 | 仅本过程真实责任场所及供应方 | 先对账原生事件总量，仅汇总身份、状态、单位、交接点及期间均相容的量。按相应计算规则逐行核算一次：只分配仍共享的负担，目标总量仅除以同口径的正合格产出；等效每参考流数值原值沿用，零产出期间不作除法并保留处置记录。 | 以接收记录核对产生、库存、场内处理和实测交付。混合物流量与组分测量分开；干湿基或质量体积换算须有相容组成或密度。接收转移和环境直排按不同交接点记录。 对上述具体身份及相容输入口径，仅在数量的归属和归一化状态与下式前提匹配时使用该规则：attributed_native_discarded_cargo_material / N_eng 保留原始凭据、实际采用的系数和结果单位。数值来源模式：calculated_value；适用范围：site_specific；归一化基准：每声明的参考流；基准类型：reference_flow；证据类型：calculated_from_collection；采集协议：cp_custody；来源：ghg-product-2011。须有原始记录、精确原生支持及逐具体行核验；这些规则不提供缺失身份或数值。 完成判据：check_occurrence_completion。 |
| cp_expand_cleaning_effluent | other_rail_freight | 必须展开身份 cleaning_effluent (outputs/waste)：实际收集承运清洗泄漏废液 | collected_record | requirement_id=cleaning_effluent; process_id=other_rail_freight; required_direction=outputs; required_flow_type=waste; original_collection_protocol=cp_custody; applicability_evidence; occurrence_event_id; concrete_row_id; physical_identity; formulation_or_species; phase; carbon_origin; particle_fraction; source_compartment; receiving_compartment; supply_or_handover_gate; provider_covered_cells; asset_component_event_and_lifecycle_phase; native_property; native_unit; measured_native_quantity; source_record_id; allocation_all_users; normalization_denominator; per_identity_amount_calculation; verification_evidence; unresolved_reason; occurrence_to_row_reconciliation; waste_origin_event; material_or_true_mixture; moisture_basis; container_tare; opening_waste_stock; generated_waste; received_waste; handover_quantity; closing_waste_stock; onsite_treatment; receiver_id; applicability_decision_record; covered_concrete_rows; excluded_occurrence_reason; completion_evidence; observed_quantity_state; conversion_or_allocation_evidence | 真实收集清洗泄漏液物料水化学含量接收方，货物液体与机车场站来源分开。浆内悬固无真实分离账不另记外发固废。 本范围是必须落实的身份识别要求，不是交换流。使用原节点采集协议及其记录，先按真实身份、端口及独立功能拆分，再将保留的数量、基准及证据规则分别用于各兼容具体行。不得将异质身份合并数量或从总括名称推断原生属性单位。未发生须有证据，适用性或身份未知则阻止完成。 以下采集条件仅限本项 outputs/waste 的身份与交接点（实际收集承运清洗泄漏废液）。本过程实际产生或接收所述废物时启用。记录材料或配方或真实共同收集混合物、干湿状态、容器皮重、来源事件、存量、交接关口及实际接收者；核对产生量+期初库存+接收量=交出量+期末库存+另列现场处理量。分收的不同废物分行，真实接收混合物可为一行，其组分仅作不可相加审计；有用回收、客户保留物与废物去向分开，不自动给替代抵扣。 每项适用性判断须留证。经证实不发生仅关闭所述范围和时段，缺记录仍未解决。发生的要求须将全部事件映射到具体row ID及相容原生数量，或精确映射至已覆盖行和供应方责任，并逐项说明排除理由。证据须覆盖身份、支持单位、计算、原始记录及全部去向；既有与新增分支对同一事件互斥覆盖，协议本身不作为交换。完成须无未分配事件、无重复覆盖、无相关数量或身份未决项。按有证据的实际分支采集原始字段。不适用的操作数须关联分支判定，适用但缺乏实测或依据的数量登记待决。 | 接收方验收的具体废物或实际混合收集物在实测状态下的原生数量 | 每次真实事件及每项有证据的未发生判断 | 完整声明队列及归属资产寿命关联事件 | 仅本过程真实责任场所及供应方 | 先对账原生事件总量，仅汇总身份、状态、单位、交接点及期间均相容的量。按相应计算规则逐行核算一次：只分配仍共享的负担，目标总量仅除以同口径的正合格产出；等效每参考流数值原值沿用，零产出期间不作除法并保留处置记录。 | 以接收记录核对产生、库存、场内处理和实测交付。混合物流量与组分测量分开；干湿基或质量体积换算须有相容组成或密度。接收转移和环境直排按不同交接点记录。 对规定采用 质量 / kg 的行，核实实测口径或向该口径的换算。 对上述具体身份及相容输入口径，仅在数量的归属和归一化状态与下式前提匹配时使用该规则：attributed_actual_effluent_kg / N_eng 保留原始凭据、实际采用的系数和结果单位。数值来源模式：calculated_value；适用范围：site_specific；归一化基准：每声明的参考流；基准类型：reference_flow；证据类型：calculated_from_collection；采集协议：cp_custody；来源：ghg-product-2011。须有原始记录、精确原生支持及逐具体行核验；这些规则不提供缺失身份或数值。 完成判据：check_occurrence_completion。 |
| cp_expand_other_waste | other_rail_freight | 必须展开身份 other_waste (outputs/waste)：实际退役装备设备或一次性保护废物 | collected_record | requirement_id=other_waste; process_id=other_rail_freight; required_direction=outputs; required_flow_type=waste; original_collection_protocol=cp_assets; applicability_evidence; occurrence_event_id; concrete_row_id; physical_identity; formulation_or_species; phase; carbon_origin; particle_fraction; source_compartment; receiving_compartment; supply_or_handover_gate; provider_covered_cells; asset_component_event_and_lifecycle_phase; native_property; native_unit; measured_native_quantity; source_record_id; allocation_all_users; normalization_denominator; per_identity_amount_calculation; verification_evidence; unresolved_reason; occurrence_to_row_reconciliation; waste_origin_event; material_or_true_mixture; moisture_basis; container_tare; opening_waste_stock; generated_waste; received_waste; handover_quantity; closing_waste_stock; onsite_treatment; receiver_id; applicability_decision_record; covered_concrete_rows; excluded_occurrence_reason; completion_evidence; observed_quantity_state; conversion_or_allocation_evidence | 各行真实物料状态接收方及实际修理退役包装废物归属，不重复可重复装备初装投入或供应已覆盖终末。 本范围是必须落实的身份识别要求，不是交换流。使用原节点采集协议及其记录，先按真实身份、端口及独立功能拆分，再将保留的数量、基准及证据规则分别用于各兼容具体行。不得将异质身份合并数量或从总括名称推断原生属性单位。未发生须有证据，适用性或身份未知则阻止完成。 以下采集条件仅限本项 outputs/waste 的身份与交接点（实际退役装备设备或一次性保护废物）。本过程实际产生或接收所述废物时启用。记录材料或配方或真实共同收集混合物、干湿状态、容器皮重、来源事件、存量、交接关口及实际接收者；核对产生量+期初库存+接收量=交出量+期末库存+另列现场处理量。分收的不同废物分行，真实接收混合物可为一行，其组分仅作不可相加审计；有用回收、客户保留物与废物去向分开，不自动给替代抵扣。 每项适用性判断须留证。经证实不发生仅关闭所述范围和时段，缺记录仍未解决。发生的要求须将全部事件映射到具体row ID及相容原生数量，或精确映射至已覆盖行和供应方责任，并逐项说明排除理由。证据须覆盖身份、支持单位、计算、原始记录及全部去向；既有与新增分支对同一事件互斥覆盖，协议本身不作为交换。完成须无未分配事件、无重复覆盖、无相关数量或身份未决项。按有证据的实际分支采集原始字段。不适用的操作数须关联分支判定，适用但缺乏实测或依据的数量登记待决。 | 接收方验收的具体废物或实际混合收集物在实测状态下的原生数量 | 每次真实事件及每项有证据的未发生判断 | 完整声明队列及归属资产寿命关联事件 | 仅本过程真实责任场所及供应方 | 先对账原生事件总量，仅汇总身份、状态、单位、交接点及期间均相容的量。按相应计算规则逐行核算一次：只分配仍共享的负担，目标总量仅除以同口径的正合格产出；等效每参考流数值原值沿用，零产出期间不作除法并保留处置记录。 | 以接收记录核对产生、库存、场内处理和实测交付。混合物流量与组分测量分开；干湿基或质量体积换算须有相容组成或密度。接收转移和环境直排按不同交接点记录。 对上述具体身份及相容输入口径，仅在数量的归属和归一化状态与下式前提匹配时使用该规则：attributed_native_other_waste / N_eng 保留原始凭据、实际采用的系数和结果单位。数值来源模式：calculated_value；适用范围：site_specific；归一化基准：每声明的参考流；基准类型：reference_flow；证据类型：calculated_from_collection；采集协议：cp_assets；来源：ghg-product-2011。须有原始记录、精确原生支持及逐具体行核验；这些规则不提供缺失身份或数值。 完成判据：check_occurrence_completion。 |
| cp_expand_cargo_release | other_rail_freight | 必须展开身份 cargo_release (outputs/elementary)：实际向环境释放货物来源物种 | collected_record | requirement_id=cargo_release; process_id=other_rail_freight; required_direction=outputs; required_flow_type=elementary; original_collection_protocol=cp_custody; applicability_evidence; occurrence_event_id; concrete_row_id; physical_identity; formulation_or_species; phase; carbon_origin; particle_fraction; source_compartment; receiving_compartment; supply_or_handover_gate; provider_covered_cells; asset_component_event_and_lifecycle_phase; native_property; native_unit; measured_native_quantity; source_record_id; allocation_all_users; normalization_denominator; per_identity_amount_calculation; verification_evidence; unresolved_reason; occurrence_to_row_reconciliation; substance_identity; chemical_form; environmental_compartment; carbon_origin; particle_fraction_or_count_basis; measured_or_calculated_release; species_conversion_evidence; applicability_decision_record; covered_concrete_rows; excluded_occurrence_reason; completion_evidence; observed_quantity_state; conversion_or_allocation_evidence | 仅真实货物燃料油冷却液制冷剂颗粒电池其他物种释放，明确化学基来源粒径介质，不假定事故或通用混合物。捕集清理外发废物不再直接释放，后续环境去向模型不重复初排质量。 本范围是必须落实的身份识别要求，不是交换流。使用原节点采集协议及其记录，先按真实身份、端口及独立功能拆分，再将保留的数量、基准及证据规则分别用于各兼容具体行。不得将异质身份合并数量或从总括名称推断原生属性单位。未发生须有证据，适用性或身份未知则阻止完成。 以下采集条件仅限本项 outputs/elementary 的身份与交接点（实际向环境释放货物来源物种）。仅对进入已记录接收介质且有观测或适用计算依据的实际释放启用。记录具体物质及形态、来源或接收介质、适用的化石或生物碳来源、适用的粒径组分或粒子数粒径基础及采样期；保留元素与分子口径，换算须有化学计量和相容物种证据。收集物流中的污染物在实际环境排放边界前归接收物流，不用CO2、NOx、VOC、COD或泛颗粒物流代替缺失物种。 每项适用性判断须留证。经证实不发生仅关闭所述范围和时段，缺记录仍未解决。发生的要求须将全部事件映射到具体row ID及相容原生数量，或精确映射至已覆盖行和供应方责任，并逐项说明排除理由。证据须覆盖身份、支持单位、计算、原始记录及全部去向；既有与新增分支对同一事件互斥覆盖，协议本身不作为交换。完成须无未分配事件、无重复覆盖、无相关数量或身份未决项。按有证据的实际分支采集原始字段。不适用的操作数须关联分支判定，适用但缺乏实测或依据的数量登记待决。 | 本物质、资源或物理排放在实际环境介质的已核实原生属性与单位 | 每次真实事件及每项有证据的未发生判断 | 完整声明队列及归属资产寿命关联事件 | 仅本过程真实责任场所及供应方 | 先对账原生事件总量，仅汇总身份、状态、单位、交接点及期间均相容的量。按相应计算规则逐行核算一次：只分配仍共享的负担，目标总量仅除以同口径的正合格产出；等效每参考流数值原值沿用，零产出期间不作除法并保留处置记录。 | 采样或活动量及适用因子须对应物种、相态、来源和环境介质。按实际对象区分质量、粒子数、热量及元素当量；换算须有依据，重叠总量不可相加。 对规定采用 质量 / kg 的行，核实实测口径或向该口径的换算。 对上述具体身份及相容输入口径，仅在数量的归属和归一化状态与下式前提匹配时使用该规则：attributed_actual_cargo_substance_medium_release_kg / N_eng 保留原始凭据、实际采用的系数和结果单位。数值来源模式：calculated_value；适用范围：site_specific；归一化基准：每声明的参考流；基准类型：reference_flow；证据类型：calculated_from_collection；采集协议：cp_custody；来源：ghg-product-2011。须有原始记录、精确原生支持及逐具体行核验；这些规则不提供缺失身份或数值。 完成判据：check_occurrence_completion。 |
| cp_expand_other_species | other_rail_freight | 必须展开身份 other_species (outputs/elementary)：实际铁路场站照护污染物种 | collected_record | requirement_id=other_species; process_id=other_rail_freight; required_direction=outputs; required_flow_type=elementary; original_collection_protocol=cp_energy; applicability_evidence; occurrence_event_id; concrete_row_id; physical_identity; formulation_or_species; phase; carbon_origin; particle_fraction; source_compartment; receiving_compartment; supply_or_handover_gate; provider_covered_cells; asset_component_event_and_lifecycle_phase; native_property; native_unit; measured_native_quantity; source_record_id; allocation_all_users; normalization_denominator; per_identity_amount_calculation; verification_evidence; unresolved_reason; occurrence_to_row_reconciliation; substance_identity; chemical_form; environmental_compartment; carbon_origin; particle_fraction_or_count_basis; measured_or_calculated_release; species_conversion_evidence; applicability_decision_record; covered_concrete_rows; excluded_occurrence_reason; completion_evidence; observed_quantity_state; conversion_or_allocation_evidence | 各实际来源化学粒径介质尾气铁路轮制动钢轨集电磨损照护制冷剂清洗释放均有模型测量。场站货物操纵轮胎磨损仅真实纳入且独立证据，货物泄漏制冷剂保持来源区别。 本范围是必须落实的身份识别要求，不是交换流。使用原节点采集协议及其记录，先按真实身份、端口及独立功能拆分，再将保留的数量、基准及证据规则分别用于各兼容具体行。不得将异质身份合并数量或从总括名称推断原生属性单位。未发生须有证据，适用性或身份未知则阻止完成。 以下采集条件仅限本项 outputs/elementary 的身份与交接点（实际铁路场站照护污染物种）。仅对进入已记录接收介质且有观测或适用计算依据的实际释放启用。记录具体物质及形态、来源或接收介质、适用的化石或生物碳来源、适用的粒径组分或粒子数粒径基础及采样期；保留元素与分子口径，换算须有化学计量和相容物种证据。收集物流中的污染物在实际环境排放边界前归接收物流，不用CO2、NOx、VOC、COD或泛颗粒物流代替缺失物种。 每项适用性判断须留证。经证实不发生仅关闭所述范围和时段，缺记录仍未解决。发生的要求须将全部事件映射到具体row ID及相容原生数量，或精确映射至已覆盖行和供应方责任，并逐项说明排除理由。证据须覆盖身份、支持单位、计算、原始记录及全部去向；既有与新增分支对同一事件互斥覆盖，协议本身不作为交换。完成须无未分配事件、无重复覆盖、无相关数量或身份未决项。按有证据的实际分支采集原始字段。不适用的操作数须关联分支判定，适用但缺乏实测或依据的数量登记待决。 | 本物质、资源或物理排放在实际环境介质的已核实原生属性与单位 | 每次真实事件及每项有证据的未发生判断 | 完整声明队列及归属资产寿命关联事件 | 仅本过程真实责任场所及供应方 | 先对账原生事件总量，仅汇总身份、状态、单位、交接点及期间均相容的量。按相应计算规则逐行核算一次：只分配仍共享的负担，目标总量仅除以同口径的正合格产出；等效每参考流数值原值沿用，零产出期间不作除法并保留处置记录。 | 采样或活动量及适用因子须对应物种、相态、来源和环境介质。按实际对象区分质量、粒子数、热量及元素当量；换算须有依据，重叠总量不可相加。 对规定采用 质量 / kg 的行，核实实测口径或向该口径的换算。 对上述具体身份及相容输入口径，仅在数量的归属和归一化状态与下式前提匹配时使用该规则：attributed_actual_species_medium_release_kg / N_eng 保留原始凭据、实际采用的系数和结果单位。数值来源模式：calculated_value；适用范围：site_specific；归一化基准：每声明的参考流；基准类型：reference_flow；证据类型：calculated_from_collection；采集协议：cp_energy；来源：ghg-product-2011。须有原始记录、精确原生支持及逐具体行核验；这些规则不提供缺失身份或数值。 完成判据：check_occurrence_completion。 |

### 计算规则

| rule_id | 适用对象 | formula_or_rule | inputs | output | source_ids |
| --- | --- | --- | --- | --- | --- |
| completion | other_rail_freight | 参考1Item(s)指履行前由原货物清单、数量状态、提取铁路路线交接义务及状态验收标准定义的一项真实完成合格铁路货运委托。它是服务委托，不是一辆货车机车容器一吨或一公里。N_eng为满足该义务的独立委托数量。损伤损失拒收未解决或原委托未完成，不能仅凭曾走区段或事后缩小清单成为成功输出。有独立当时记录的验收变更服务可按自身声明身份合格，但不再计原委托。部分失败空驶救援返工仍保留归属负荷。N_eng=0时无有限每委托强度。 | 原委托清单验收真实唯一完成义务 | N_eng | ghg-product-2011 |
| normalize | other_rail_freight | 对正值N_eng及参考一委托，q_x = allocated_native_quantity_x / N_eng。先分配真实载货空驶调位失败支持全部作业再归一化，不令失败服务零负荷。保留原清单数量状态质量路线及独立论证的可比委托分层，委托计数不表示汽车卡车队特种剩余货物可互换。 | 实际已归属的原生数量; 正的 N_eng | 每声明一委托原生数量 | ghg-product-2011 |
| asset_life | other_rail_freight | attributed_asset = native_asset_quantity * attributed_same_asset_useful_duty / positive_total_all_user_same_asset_useful_duty；再除N_eng，仅制造端口并补全未覆盖阶段一次。 | 同一资产的实际原生数量; 全部使用者的正作业量 | 归属原生制造数量 | ghg-product-2011 |
| cargo_stock | other_rail_freight | 客户汽车挂车及其他货物是保管货物，不是牵引资产或新制造消耗投入。按货批部件期间将物件身份数量真实物理质量互斥归于验收交接、实际外发退回、外发物料废物或直接释放及期末留存。损伤是这些物件状态，不是额外平衡项或自动弃置。留存只列期末库存，真实外发退回仅一转移ID。载货挂车实际总质量已含记录的内装物，按挂车内货包装层级记录，不能总重再加内容物。承运中的客户空挂车是货物，承运方空货车调位作业不构成交付委托。货物原制造及内含燃料电池初始库存不作为服务新消耗产品制造投入。责任期内真实承运操纵充电辅助消耗、供应物料、与服务有关修复损失泄漏清理按所有权去向及未覆盖负荷记录一次。从客户初始库存真实提取消耗的燃料能源须承担相容上游燃料能源供应负荷一次，无论原采购方是谁；不计整份初始库存或原车辆电池制造，也不将同一消耗既计初始库存提取又计新供应。 | 物品、组分及货批库存; 嵌套包装的毛重和内含物净重; 实际状况与去向 | 互斥真实货物部件液体库存闭合 | ghg-product-2011 |

### 数据质量要求

| requirement_id | 适用对象 | Requirement | evidence |
| --- | --- | --- | --- |
| strata | other_rail_freight | 列明真实车辆剩余货物身份原委托数量路线状态装载照护动力场址期间各参与者。仅等价声明服务分层采用有记录真实权重汇总，披露分布异质性，不一并比较不同委托。 | 完整原委托参与者权重登记 |
| completeness | other_rail_freight | 各真实能源物料化学照护投入设备供应损伤部件残留废物污染物展开独立交换，具身份状态端口接收方方向类型原生属性单位数量核实UUID或行级待核登记本过程协议来源计算。货物燃料液体制冷剂电池释放不同于机车场站燃料制冷剂，匹配真实物种来源化合物与C/N/S基粒径接收介质。湿物料清理流适用时按真实干固体水添加排水蒸发留存交付状态闭合，不强制湿重相等。真实证据缺失为不完整而非零。 | 各展开行真实来源状态覆盖去向账 |
| uncertainty | other_rail_freight | 不虚构装载空驶里程损伤修复充电SOC温度系固寿命回收范围因子。采用校准真实测量或审查兼容模型并留样本覆盖独立QA不确定性，付费手册公开例子不提供缺失通用数据。 | 校准样本适用模型核查敏感性 |

## 9. 验证规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| scope_function | other_rail_freight | 核对汽车卡车挂车及所有实际未另分类货物、官方相邻类别旅客随车排除及完整搬运铁路状态路线。核对原清单完成标准唯一正值N_eng，拒绝事后缩小失败范围重复账单或将一服务改成车辆数。 | ghg-product-2011 |
| custody | other_rail_freight | 核对货物与承运资产制造、物件部件内装质量库存闭合及损伤状态、真实退回回收废物释放留存。真实货物燃料液体电池照护消耗排放与铁路场站供应分开，可重复装备闭合供应边界仅一次。 | ghg-product-2011 |
| native_lifecycle | other_rail_freight | 核实真实交换类型状态原生属性单位端口接收方，各相关同资产全部用户寿命阶段供应覆盖单元。计数原生属性只识别维度，不是服务UUID也不证明服务等量。 | ghg-product-2011 |
| parity_quality | other_rail_freight | 中英投影ID真实条件范围数量原参考来源限制对齐。真实测量或审查适用模型须校准独立QA不确定性；缺失为不完整，检查通过不证明科学外部身份就绪。 | ghg-product-2011 |
| atomic_other_rail_freight | other_rail_freight | 拒绝将备选物料、独立供应资产服务、不同废物流、污染物种、碳源、相态、粒径或环境子介质合并成一个交换身份。本节点每项适用cp_expand_要求必须有发生或未发生记录及完整具体行清单，各行具有自身身份、端口、已核验UUID、原生属性单位、数量、原始记录、计算和唯一责任。供应方已含完整总成或真实收集混合物流仍按一个真实供应或收集身份，不虚构组分交换。不得将要求名称标识、NOx或VOC或PM总量、未明确的物理释放或异质清单绑定一个UUID。核对全部子行、原始事件、供应方已含单元及跨节点交接，不缺失当零、不重复计入。身份、适用性、数量或去向未知，均阻止完整前景包及最终TIDAS交换产出。PCR检查器不验证这些前景事实，须保留逐行证据供审查。 | ghg-product-2011 |
| check_occurrence_completion | 全部实际清单行和身份识别协议 | 保留适用性证据，将每个实际事件对应到具体清单行或已核实的供应方覆盖范围。判定未发生须有证据，未知项保留待决。按同一身份、状态、单位、期间和交接点核对期初、接收、期末及互斥去向。耗材领用账区分未用退回、内部领拨和合格、失败及返工作业的实际耗用。托管账或物料平衡采用期初库存＋外部接收＋配对内部接收＝期末库存＋配对内部发出＋对外交付且获接收的数量＋未用外退＋外送的已用物资或回收物＋外送废物＋直接排放＋本边界内消耗或转化量。身份在边界内生成时，将有证据的生成量或出生数计入该身份账的来源并关联原事件。在上层守恒物料或元素平衡中抵消内部转化和移交。每个事件只记一次，留存回收物计入期末，移交与耗用分别登记。按相容口径执行专用托管、相态、转化或元素规则；已作为转化量计入的物料，其后续产物不得再计入同一去向合计。独立计量各项，对未解释的差额追查并保留待决。实物总量与负担分配分别核算。共享原始负担采用 Q_raw × s / R，其中 s 为有证据的目标驱动量除以同池同期间全部适用用户的正驱动量总和。已归属的目标总量采用 Q_target / R，已与同一参考流等效的单位结果 q_ref 原值沿用。供应方单位强度先乘以按其原生单位实测的需求量。仅在另一个仍有共享负担的独立阶段另作分配。R 为同一队列、交接点和参考单位下的正值合格产出量。保留失败与部分完成作业的负担，禁止以此放大 R；零产出时保留负担及有证据的结转或最终处置。自有资产采用同队列全用户寿命作业量，并排除初始部件重复计算。外购服务仅替代有记录的覆盖阶段。适用的身份、数量、支持单位、去向或分配分母仍未决时，最终数据集仍不完整。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | secondary_dataset; background_dataset |
| downstream_use | 限定真实其他铁路货运委托供过程生命周期模型 |
| allowed_use | 具核实最终真实交换的等价原货物数量状态路线质量搬运委托 |
| excluded_use | 车辆制造租赁旅客随行车辆、未说明通用铁路或不同委托比较 |
| required_metadata | actual_other_rail_function_and_official_adjacent_category_resolution; original_manifest_cargo_identity_amount_mass_dimensions_state; vehicle_trailer_nestedcargo_no_gross_doublecount; original_pickup_route_distance_handoff_quality_acceptance; originalcompleted_engagement_count_N_eng_no_retrospective_failedscope; actual_rail_yard_traction_empty_failed_rescue_duty; loading_securement_care_vehicle_fuel_SOC_provider_boundary; cargo_custody_damage_return_waste_release_closingstock; reusable_equipment_assets_native_full_life_allusers; native_energy_species_substance_medium_quantities_uncertainty |
| required_quality_disclosure | 原清单验收保管真实原生供应作业装备供应全部用户去向不确定性待核 |
| update_trigger | 货物功能清单状态技术供应资产证据变化 |

## 11. 数据源

| source_id | type | reference | used_for |
| --- | --- | --- | --- |
| unsd-cpc3-65129 | official_guidance | UNSD CPC3.0 code65129 https://unstats.un.org/unsd/classifications/Econ/Structure/Detail/EN/2100/65129 | 完整官方车辆剩余铁路货物范围及64210旅客随车排除，无LCA默认数值 |
| aar-auto-quality-overview | official_guidance | AAR Technical Services Auto Damage Prevention public overview. https://aar.com/standards/damage-prevention-auto.php | 仅车辆搬运装卸维护摆放系固质量问题，不声称未读付费手册细节通用数值 |
| aar-open-top-overview | official_guidance | AAR Technical Services Open Top Loading Rules public overview. https://www.aar.com/standards/OpenTop.php | 仅真实敞顶货物系固范围问题，不采用未读付费装载限值 |
| oebb-freight-terminals | official_guidance | ÖBB-Infrastruktur railfreight centres and terminals. https://infrastruktur.oebb.at/en/partners/terminals | 真实挂车ROLA场站装载交接例子，官方CPC功能决定纳入，不依司机在场自动分类或套数值默认 |
| epa-rail-facility-operations | official_guidance | US EPA Rail Facility Best Practices to Improve Air Quality. https://www.epa.gov/ports-initiative/rail-facility-best-practices-improve-air-quality | 仅铁路干线调车编组场作业区分，无美国数值法规默认 |
| ghg-product-2011 | standard | WRI/WBCSD Product Life Cycle Accounting and Reporting Standard (2011). https://ghgprotocol.org/product-standard | GHG生命周期分配数据质量框架。车辆剩余货物保管完成委托可重复装备资产规则为明确PCR方法，不是来源数值要求。 |

