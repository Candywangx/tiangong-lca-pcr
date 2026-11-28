---
pcr_id: pcr.distributive-trade-services-accommodation-food-and-beverage-serving-ser-18ff339a.freight-transport-services.railway-transport-services-of-intermodal-containers
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 铁路联运集装箱货运区段服务

## 1. 范围与适用性

本 PCR 适用于将物件包裹装入专用联运集装箱后通过铁路承运。须申明真实箱型货物、铁路承运保管接口、列车车辆构型、铁路和供应地区、动力及实际条件装卸作业。覆盖完整适用铁路集装箱功能，不限于干货箱、电力牵引、某种车辆配置或单一走廊。研究铁路区段内部并非必须换运输方式，集装箱承运仍区别于整条门到门多式联运产品。

参考对象是在铁路服务验收交接点，一个真实载货箱的已完成铁路承运区段。选择此计数对象，是因为独立受托箱体及真实保管交付标识了实际供应铁路接口，不是因为所有箱货量负荷相等。申明箱号箱型尺寸、货物内容净毛重、箱自重、装载构型、真实铁路分段距离、历时停留、质量及接交接口。同一列车或委托内多个箱，仅在真实交付记录支持时分别成为验收箱区段；同一申明箱区段更换机车、编组、车辆、过境或内部场站作业本身不增加最终输出。TEU、发车及额定车辆箱体运力是描述，不自动成为服务计数或数量。

排除独立供应公路海运内河航空航天区段，以及作为独立功能销售的代理仓储装拆箱场站转运；最终产品不是箱体机车车辆制造租赁，也不包括非集装箱铁路货运或实际归入其他专门冷藏车罐车干散货邮件活体动物功能的服务。按真实集装箱供应功能、设备及接口判断重叠，不仅凭货物名称。平车上真实温控集装箱不自动排除为冷藏车货运，也不得忽略其制冷。纳入实际铁路承运责任内场站吊装固定检查、调车停留保管支持；独立场站及其他运输方式活动保留有记录接口，必要覆盖仅一次。

N 计入申明队列内真实验收且功能可比的载货箱铁路区段。原约箱货接口状态质量及按时序变更证明完成。保留损坏拒收部分完成失败取消改道作业，以及有因果归属空机车车辆箱体、调位解编调车等候救援。到达付款或一次列车运行本身不证明箱体交付；不得事后缩减失败原约来制造完成。独立验收变更部分服务须有自身真实范围及可比性。同一箱区段不得在内部每个场站或牵引更换点再次计数，N=0 时无有限单位区段强度。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.distributive-trade-services-accommodation-food-and-beverage-serving-ser-18ff339a.freight-transport-services.railway-transport-services-of-intermodal-containers |
| classification_refs | CPC 3.0 65123; exact |
| covered_products | 本 PCR 适用于将物件包裹装入专用联运集装箱后通过铁路承运。须申明真实箱型货物、铁路承运保管接口、列车车辆构型、铁路和供应地区、动力及实际条件装卸作业。覆盖完整适用铁路集装箱功能，不限于干货箱、电力牵引、某种车辆配置或单一走廊。研究铁路区段内部并非必须换运输方式，集装箱承运仍区别于整条门到门多式联运产品。 |
| excluded_products | 排除独立供应公路海运内河航空航天区段，以及作为独立功能销售的代理仓储装拆箱场站转运；最终产品不是箱体机车车辆制造租赁，也不包括非集装箱铁路货运或实际归入其他专门冷藏车罐车干散货邮件活体动物功能的服务。按真实集装箱供应功能、设备及接口判断重叠，不仅凭货物名称。平车上真实温控集装箱不自动排除为冷藏车货运，也不得忽略其制冷。纳入实际铁路承运责任内场站吊装固定检查、调车停留保管支持；独立场站及其他运输方式活动保留有记录接口，必要覆盖仅一次。 |
| representative_product | 一个载货联运集装箱的已完成铁路货运区段 |
| production_route | 真实集装箱铁路保管及承运验收，包含列车调车场场站条件冷机作业、自营供应商覆盖和完整归属生命周期。 |
| market_state | 一个载货联运集装箱的已完成铁路货运区段 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| 功能对象（What） | 一个载货联运集装箱的已完成铁路货运区段 |
| 数量（How much） | 1 个实际完成的载货箱铁路区段 |
| 质量（How well） | 真实箱货及铁路保管身份接口、铁路分段距离编组历时停留、必要状态质量及交付验收。 |
| 时间或周期（How long or cycle） | 实际区段及支持性完整作业和生命周期时段，报告真实历时与队列期间。 |
| 参考流关联（reference_flow_link） | `completed_rail_container_leg` |

| 字段 | 值 |
| --- | --- |
| 参考数量（Reference amount） | 1 |
| 参考产品流（Reference product flow） | 一个载货联运集装箱的已完成铁路货运区段 |
| 参考流属性（Reference flow property） | 物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` |
| 参考单位组（Reference unit group） | 数量 `5beb6eed-33a9-47b8-9ede-1dfe8f679159` |
| 参考单位（Reference unit） | Item(s) |
| 必要限定项（Required qualifiers） | actual_container_type_size_identity_and_articles_packages; net_gross_cargo_packaging_box_wagon_loco_tare; rail_carrier_terminal_box_operator_custody_gates; actual_rail_distance_time_dwell_consist_slots; original_quality_condition_and_chronological_amended_acceptance; N_comparable_completed_laden_box_legs; train_shunting_yard_empty_position_failure_return_duties; actual_traction_native_waveform_fuel_source_meter; conditional_reefer_temperature_time_generator_plug_responsibility; terminal_lift_securing_inspection_provider_scope; all_user_same_asset_locomotive_wagon_box_track_catenary_terminal_life; native_provider_demand_exact_cells_sites_periods; actual_substance_medium_subcompartment_and_fates |

必要限定项须在数据集元数据、过程说明、参考流注释或等效数据包字段中申明；缺失即为定义不完整。

## 4. 计量与单位规则

| 规则编号 | 适用对象 | required_property | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| leg_count | reference product | Number of items | Item(s) | N 为真实验收且功能可比的载货箱铁路区段。核实箱货接口原约和按时序变更状态质量交付。TEU列车车辆发车槽位发票或内部调车牵引更换不能证明 N。 |
| native_exposure | 全部清单行 | 实际原生属性 | 实际原生单位 | 区分货物净毛包装箱体车辆机车自重、真实铁路分段距离列车车辆箱体移动及占用时间。补充质量距离 TEU暴露须有真实兼容分段记录，不自动转换计数改变最终箱区段参考或计货物制造。 |
| stock_and_species | 全部清单行 | 实际原生属性 | 实际原生单位 | 体积质量转换须使用兼容实测密度和状态，不默认密度。已核实能源单位支持 1 kWh = 3.6 MJ，仅在原生供应商接口转换一次。保持物质质量与元素或 CO2e 基准及真实接收者的区别；数量因子须有场址记录或明确兼容证据，不从额定运力推定。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 申明铁路交接点真实箱货铁路保管及编组作业记录，兼容原生供应商场站接口。 |
| starting_condition_role | 前景采集接口，不代表上游资产或供应零负荷。 |
| product_classification_scope | CPC 3.0 65123 |
| recursive_input_rule | 按原生需求使用已核实的同功能分包服务一次，展开未覆盖责任，不向自身采购或额外创造最终输出。 |
| upstream_dataset_requirement | 实际功能、原生需求、技术、地理、期间、阶段及质量兼容，明确补全缺失阶段。 |
| disclosure | 铁路箱体保管接口验收真实编组牵引调车冷机场站作业、空载失败、自营供应商覆盖、全部使用者资产寿命场址期间及物种去向缺口。 |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| scope_gate | rail_container_leg | 在申明铁路保管交接点应用真实联运集装箱物件包裹铁路承运功能，保持独立供应相邻方式场站接口及真实重叠分类。 | unsd-rail-container-2025 |
| one_owner | rail_container_leg | 每项真实列车作业车辆箱体调车场场站供应商阶段期间有唯一负荷所有者。完整原生铁路场站冷机供应商清单仅替代精确覆盖项目，必要缺失阶段补全，不重复其已含能源排放资本装卸。路径收费或列车时刻槽采购本身不是完整物理生命周期清单。 | ghg-product-2011 |
| rail_duties | rail_container_leg | 按真实编组和因果使用者采集干线载货空车运行、编组解编、机车车辆箱体调位、调车停留等候、过境换机失败救援。不把列车公里等同车辆公里，也不用额定装载当真实货物。真实列车场站任务可能具有不同因果暴露单位，保持真实成员而不增加最终箱区段输出。 |  |
| cargo_container_assets | rail_container_leg | 货物仍为保管对象，不是生产铁路服务的消耗投入，货物净毛包装自重及损失回送单列。机车铁路车辆重复使用集装箱固定装卸设备具有不同原生制造初始部件维护更换报废。真实货损补货由真实所有者功能承担，不按列车毛质量再次计普通货物制造。 | unece-ctu-2014 |
| traction_and_condition | rail_container_leg | 在原生计量供应商接口分离真实牵引供应与冷机箱体场站辅助。交流牵引是条件情况，不代表所有铁路；直流柴油电池氢气蒸汽及其他真实技术须有原生燃料能源来源库存运行和物种去向记录。内部再生制动电池放电电气转换不是新外部供应；真实外送须有自身原生接口数量记录，不再加替代能源抵扣。整配方燃料与物理替代组分供应互斥，燃料供应提取燃烧泄漏回收转移分离。 |  |
| terminal_reefer | rail_container_leg | 按铁路承运人与场站箱体运营商约定确定真实场站吊装固定检查、冷机接电或发电责任。温控箱采集真实目标实测温度时间开门停留事件、来源计量制冷能耗和制冷剂充注供应泄漏回收及物质去向。独立供应装卸冷藏保持原生接口，不能仅因箱体经铁路运输而删去必要作业；干货箱不虚构制冷。 | unece-ctu-2014 |
| material_fates | rail_container_leg | 分别识别真实磨损粉尘物种及互不重叠粒径、燃烧碳源、溢出制冷剂其他释放和接收介质子区室。区分收集清洗废水废物回收产品保留库存与环境释放；未知库存损失或货物短缺不是排放，也不自动成为废物。 |  |

## 6. 过程清单结构

每张清单流卡仅代表一个可独立识别的产品、物料配方、废物流、物质或供应服务，具有兼容的端口、属性和单位。完整供应总成或实际收集的混合物流可有一个身份，其已含组分不得另列重复交换。第8节cp_expand_协议是必须落实的身份识别要求，不得当作选定流或交换数量。逐项记录真实适用性，以独立行标识列出全部具体交换；完整保留适用范围，未发生须有证据。尚未展开或未知的要求属于不完整，不得当作零。改为采集协议不等于解决缺失身份，也不免除生命周期、分配、计量或边界义务。

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| rail_container_leg | 集装箱铁路承运及归属生命周期 | required | 申明的适用承运，物理分支按实际发生条件纳入 | foreground | completed_rail_container_leg |

一个过程统筹其作业；下列协议分别索引运行、资产、维护、供应商及排放。内部保管转移不创造额外服务输出。条件总括流卡须在下游数据包完成前，依真实记录展开为逐项具体交换。

### 过程：集装箱铁路承运及归属生命周期（`rail_container_leg`）

#### 输入

##### 产品流

###### 柴油 (`traction_diesel`)

仅为真实原生供应库存运行接口的兼容机车调车柴油，记录牌号配方来源并区分供应提取燃烧溢出回收，整配方与物理组分替代互斥。

- 选定流：柴油 `9d258d75-6792-4f1c-9856-81602ed8f816`
- 流属性/单位：Mass / kg
- 数量规则：实际归属原生数量按 N 除一次，遵循采集与计算规则。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每个声明的参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_operation`
- 来源：

###### 交流电 (`traction_ac`)

真实牵引交流电在明确变电站受电弓或其他原生计量损失范围，不代表直流牵引或内部转换再生；保持真实波形接口及未覆盖上游损失一次。

- 选定流：交流电 `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- 流属性/单位：Net calorific value / kWh
- 数量规则：实际归属原生数量按 N 除一次，遵循采集与计算规则。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每个声明的参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_operation`
- 来源：

###### 交流电 (`reefer_terminal_ac`)

真实兼容箱体冷机场站条件支持交流电，采用自身计量供应商接口。排除牵引整列车或场站供应商已含电力，记录真实电压来源波形接口。

- 选定流：交流电 `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- 流属性/单位：Net calorific value / kWh
- 数量规则：实际归属原生数量按 N 除一次，遵循采集与计算规则。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每个声明的参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_condition`
- 来源：

###### 柴油 (`auxiliary_diesel`)

仅为独立冷机发电或其他包含辅助设备真实兼容柴油，具有自身设备库存燃烧和供应商覆盖，不重复机车燃料或已购制冷供应商能耗。

- 选定流：柴油 `9d258d75-6792-4f1c-9856-81602ed8f816`
- 流属性/单位：Mass / kg
- 数量规则：实际归属原生数量按 N 除一次，遵循采集与计算规则。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每个声明的参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_condition`
- 来源：

###### 制冷剂，R134a (`r134a_supply`)

仅为包含冷机设备真实兼容 R134a 供应，不代表全部铁路制冷。按真实供应商所有者分别记录充注补加移出回收和真实大气泄漏。

- 选定流：制冷剂，R134a `b33b6abf-6a88-4ec1-ab79-6aa5aac69e8a`
- 流属性/单位：Mass / kg
- 数量规则：实际归属原生数量按 N 除一次，遵循采集与计算规则。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每个声明的参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_maintenance`
- 来源：

###### 自来水 (`tap_water`)

真实铁路箱体清洗或包含支持的兼容自来水，其他水质环境取水另有身份。供应不默认等于耗水或收集废水。

- 选定流：自来水 `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- 流属性/单位：Volume / m3
- 数量规则：实际归属原生数量按 N 除一次，遵循采集与计算规则。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每个声明的参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_support`
- 来源：

#### 输出

##### 产品流

###### 一个载货联运集装箱的已完成铁路货运区段 (`completed_rail_container_leg`)

一个真实验收可比载货箱铁路承运区段，归一化参考1Item(s)，不是 TEU列车车辆移动或内部调车场交接。

- 选定流：一个载货联运集装箱的已完成铁路货运区段
- 流属性/单位：Number of items / Item(s)
- 数量规则：1 Item(s)
- 数值来源模式：`fixed_value`
- 适用范围：`site_specific`
- 归一化基准：每个声明的参考流
- 基准类型：`reference_flow`
- 证据类型：`method_formula`
- 采集协议：`cp_service`
- 来源：`ghg-product-2011`

##### 废物流

###### 废润滑油 (`spent_oil`)

仅为实际产生兼容废石油基合成润滑油，接收处理独立识别，新油投入不是废油输出。

- 选定流：废润滑油 `55d93375-7f04-4166-b2a2-88ce929051a5`
- 流属性/单位：Mass / kg
- 数量规则：实际归属原生数量按 N 除一次，遵循采集与计算规则。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每个声明的参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_maintenance`
- 来源：

##### 基本流

###### 二氧化碳（化石源） (`fossil_co2_air`)

仅为真实燃烧活动来源或测量支持化石二氧化碳空气未特指释放，已知接收子区室须独立核实不得降级，燃料供应货物质量 CO2e不是该释放。

- 选定流：二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 流属性/单位：Mass / kg
- 数量规则：实际归属原生数量按 N 除一次，遵循采集与计算规则。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每个声明的参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_emissions`
- 来源：

###### HFC-134a (`r134a_air`)

仅为充注回收真实去向证据支持的 R134a空气未特指释放，已知子区室独立身份，未解释充注差额不自动泄漏。

- 选定流：HFC-134a `fe0acd60-3ddc-11dd-a6d2-0050c2490048`
- 流属性/单位：Mass / kg
- 数量规则：实际归属原生数量按 N 除一次，遵循采集与计算规则。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每个声明的参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_emissions`
- 来源：

## 7. 分配与联产品处理

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| direct_first | rail_container_leg | 剩余共有归属前直接指定专属箱区段列车调车场场站冷机作业及实测资源。箱尺寸货物温控接口路线距离编组质量不同，须有支持的可比分层或真实因果暴露，不能自动按箱数 TEU 均分。 | ghg-product-2011 |
| train_yard_all_users | rail_container_leg | 枚举共用每项列车调车场场站作业的全部实际独立供应箱区段及其他预期服务交接。分别核对列车毛质量机车车辆箱体自重货物及占用槽位。有支持驱动量可为真实牵引功质量距离占用运力时间调车装卸事件冷机计量能耗或其他因果关系。列车公里车辆公里 TEU 公里质量距离小时不是可相加替换单位，额定运力价格均分均非默认。空载调位失败负荷在因果服务池归属一次。 |  |
| same_asset_life | rail_container_leg | 每项真实机车车辆箱体电池轨道接触网变电站场站吊机资产，按研究兼容作业与有记录正值同资产全部使用者有效寿命作业之比归属原生交付量，再按 N 除一次。共有基础设施或机车实际服务客运货运等使用者时均纳入分母。初始制造部件更换维护报废互斥，不用任意寿命折旧或按采购年分配。 |  |
| reject_return | rail_container_leg | 将真实拒收损坏失温箱货关联产生作业、验收未验收状态及实际回送返工回收处置所有者路径。循环内保留负荷，不将未完成拒收箱区段计为验收服务。真实回收产品材料残余废物有不同身份接口及明确归属，不自动取得货物箱体原生材料电力替代抵扣。 |  |

## 8. 前景数据采集、计算与质量规则

区段计数、因果服务池、寿命及库存公式是本 PCR 明确制定的核算方法。外部来源仅支持其所述分类、装卸或一般生命周期原则，不声称这些来源规定全部公式。不设通用燃料、损失、寿命、载荷率、制冷或排放范围；必要数量须实际采集或具独立合理证据并申明不确定性。

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_service | rail_container_leg | completed_rail_container_leg;other_intended_services | box_leg_rail_custody_acceptance | box_leg/box_id/type/size;articles_packages_contents/net/gross/tare;rail_carrier/terminal_operator;original_gates_scope_quality;actual_rail_segments_distance;consist_loco_wagon_slot_membership;time_dwell;chronological_amendment;accepted_handover;failed_partial_cancelled_diverted_return;N;other_outputs | 核对原约及按时序变更铁路保管合同、箱体真实交付成员及列车车辆调车场过境变化。仅计独立验收可比箱区段，保留真实距离时间货量失败回送，不重复内部输出。 按参考计量口径汇总唯一且已验收的合格产出作为分母，单列不合格事件及其资源责任。参考量保持规定值，仅归属的清单总量除以正分母。 | Item(s)、kg、km、h 及实际占用槽位数 | 每真实事件及对齐队列 | 实际区段报告期及申明全寿命接口 | 实际贡献铁路调车场场站机车车辆箱体供应商及全部共有使用者 | 每个声明的参考流 | 原始来源计量调度接收记录、校准、范围及不确定性保存各实测操作数的来源及原生口径，注明实际采用的换算或归属依据，以及所供结果是否已按该参考流计量。 |
| cp_operation | rail_container_leg | traction_diesel;traction_ac;other_native_energy | train_traction_shunting_native_energy | duty/train/consist/loco/wagon/box;actual_mainline_shunting_loaded_empty_wait_failure;fuel_grade_blend_source;opening_closing_supply_withdrawal_burn_spill_recovery_transfer;actual_AC_DC_waveform_meter_gate;traction_aux_coverage;regeneration_internal_export;gross_cargo_tare_work;all_users_sites_period | 读取真实能源计量燃料库存编组作业日志，区分供应燃烧牵引辅助及外部输入与内部回馈外送。关联全部真实列车调车场使用者因果功，保持原生接口损失后按 N归一化一次。 原始观测和对账总量保留其记录口径。负担行只分配仍共享的总量，已归属总量仅除以同队列、同交接点的正合格产出；已与该参考流等效的结果原值沿用。零产出时保留负担并记录去向。 | kg、kWh、实际原生单位、train/wagon_km、h | 每真实事件及对齐队列 | 实际区段报告期及申明全寿命接口 | 实际贡献铁路调车场场站机车车辆箱体供应商及全部共有使用者 | 每个声明的参考流 | 原始来源计量调度接收记录、校准、范围及不确定性保存各实测操作数的来源及原生口径，注明实际采用的换算或归属依据，以及所供结果是否已按该参考流计量。 |
| cp_condition | rail_container_leg | reefer_terminal_ac;auxiliary_diesel | box_reefer_generator_condition | box/equipment/terminal/duty;actual_target_trace_temperature_time;door_holding_events;native_AC_or_generator_fuel_supply_meter;fuel_stock_burn;provider_traction_or_terminal_covered_cells;all_users_sites_period | 采集真实条件箱温度时间冷机发电计量归属，分离输入制冷供应与机车场站供应商覆盖和内部转换。真实干货箱不使用须有证据，不是缺失数据。 原始观测和对账总量保留其记录口径。负担行只分配仍共享的总量，已归属总量仅除以同队列、同交接点的正合格产出；已与该参考流等效的结果原值沿用。零产出时保留负担并记录去向。 | kWh;kg;温度单位;h | 每真实事件及对齐队列 | 实际区段报告期及申明全寿命接口 | 实际贡献铁路调车场场站机车车辆箱体供应商及全部共有使用者 | 每个声明的参考流 | 原始来源计量调度接收记录、校准、范围及不确定性保存各实测操作数的来源及原生口径，注明实际采用的换算或归属依据，以及所供结果是否已按该参考流计量。 |
| cp_assets | rail_container_leg | locomotive_assets;wagon_assets;container_assets;rail_infrastructure;handling_assets | same_asset_all_user_useful_life | asset/cohort/configuration;native_delivered_supply;initial_components;manufacture_gate;studied_compatible_duty;positive_same_asset_all_user_lifetime_duty;passenger_freight_other_modes_users;sites_periods;maintenance_replacement_retirement;provider_coverage;forecast_uncertainty | 匹配各真实机车车辆箱体轨道接触网变电站场站装卸资产原生供应及完整寿命全部使用者作业。纳入全部实际铁路其他方式使用者，制造初始更换报废项目互斥并明确不确定性。 原始观测和对账总量保留其记录口径。负担行只分配仍共享的总量，已归属总量仅除以同队列、同交接点的正合格产出；已与该参考流等效的结果原值沿用。零产出时保留负担并记录去向。 | 实际资产原生单位、实际有效作业、km、h、循环数 | 每真实事件及对齐队列 | 实际区段报告期及申明全寿命接口 | 实际贡献铁路调车场场站机车车辆箱体供应商及全部共有使用者 | 每个声明的参考流 | 原始来源计量调度接收记录、校准、范围及不确定性保存各实测操作数的来源及原生口径，注明实际采用的换算或归属依据，以及所供结果是否已按该参考流计量。 |
| cp_support | rail_container_leg | tap_water;cleaning_securing_support | actual_support_site_material | site/duty/box_task;actual_cleaning_securing_inspection_or_crew_support;native_supply_identity_quantity_gate;stock;water_source_quality_reuse_fate;reusable_vs_consumable;provider_cells;all_users_period | 读取真实采购计量承运支持工单，按原生所有者接口识别每项真实供应功能材料。重复使用资产完整供应商替代精确组成项目，不重复相加。 原始观测和对账总量保留其记录口径。负担行只分配仍共享的总量，已归属总量仅除以同队列、同交接点的正合格产出；已与该参考流等效的结果原值沿用。零产出时保留负担并记录去向。 | kg、m3 及实际服务原生单位 | 每真实事件及对齐队列 | 实际区段报告期及申明全寿命接口 | 实际贡献铁路调车场场站机车车辆箱体供应商及全部共有使用者 | 每个声明的参考流 | 原始来源计量调度接收记录、校准、范围及不确定性保存各实测操作数的来源及原生口径，注明实际采用的换算或归属依据，以及所供结果是否已按该参考流计量。 |
| cp_maintenance | rail_container_leg | maintenance_supplies;r134a_supply;other_refrigerants;spent_oil;wash_wastewater;actual_material_wastes | maintenance_stock_cargo_receiver | event/asset/box/leg;part_or_substance_CAS_grade;native_stock_addition_removal_charge_recovery;actual_leak_medium;water_waste_composition_reuse;cargo_damage_reject_return_retained_stock;receiver_treatment_owner;provider_scope;period | 核对真实维护制冷剂库存与实际回收转移接收事件，识别各材料废物所有者。期末保留内部回收不再计外部回收输出。货物短缺拒收供应差额不自动成为废物排放。 原始观测和对账总量保留其记录口径。负担行只分配仍共享的总量，已归属总量仅除以同队列、同交接点的正合格产出；已与该参考流等效的结果原值沿用。零产出时保留负担并记录去向。各项独立实测交付、排放及移交按各自交接点记录，负担按其适用规则分配。 | kg、m3 及实际原生单位 | 每真实事件及对齐队列 | 实际区段报告期及申明全寿命接口 | 实际贡献铁路调车场场站机车车辆箱体供应商及全部共有使用者 | 每个声明的参考流 | 原始来源计量调度接收记录、校准、范围及不确定性保存各实测操作数的来源及原生口径，注明实际采用的换算或归属依据，以及所供结果是否已按该参考流计量。 |
| cp_provider | rail_container_leg | subcontract_rail_carriage;included_terminal_condition | rail_terminal_native_demand_coverage | provider/actual_function;box_leg;native_unit_real_demand;rail_terminal_reefer_custody_gates;technology_geography_period;exact_included_missing_cells;actual_owner;uncertainty | 核实实际供应商原生功能数量，同单位需求因果队列份额缩放后/N一次。替代精确自营能源排放资产装卸覆盖项目，补全必要未覆盖作业，不用通用路径收费假设。 原始观测和对账总量保留其记录口径。负担行只分配仍共享的总量，已归属总量仅除以同队列、同交接点的正合格产出；已与该参考流等效的结果原值沿用。零产出时保留负担并记录去向。 | 供应方实际原生单位 | 每真实事件及对齐队列 | 实际区段报告期及申明全寿命接口 | 实际贡献铁路调车场场站机车车辆箱体供应商及全部共有使用者 | 每个声明的参考流 | 原始来源计量调度接收记录、校准、范围及不确定性保存各实测操作数的来源及原生口径，注明实际采用的换算或归属依据，以及所供结果是否已按该参考流计量。 |
| cp_emissions | rail_container_leg | fossil_co2_air;r134a_air;other_substance_releases | actual_rail_species_activity_receiver | event/duty/box_leg;substance/CAS;carbon_origin;actual_burn_source_or_measured_species;native_mass_basis;method_factor_scope_uncertainty;wear_particle_nonoverlap;refrigerant_charge_recovery;medium/subcompartment;provider_owner | 采用真实物种测量或来源支持兼容活动特定方法，确认真实来源介质子区室及互不重叠物种去向粒径。未表征余项待采集，不强套分子或残差排放。 原始观测和对账总量保留其记录口径。负担行只分配仍共享的总量，已归属总量仅除以同队列、同交接点的正合格产出；已与该参考流等效的结果原值沿用。零产出时保留负担并记录去向。各项独立实测交付、排放及移交按各自交接点记录，负担按其适用规则分配。 | 物质质量（kg）及实际活动量单位 | 每真实事件及对齐队列 | 实际区段报告期及申明全寿命接口 | 实际贡献铁路调车场场站机车车辆箱体供应商及全部共有使用者 | 每个声明的参考流 | 原始来源计量调度接收记录、校准、范围及不确定性保存各实测操作数的来源及原生口径，注明实际采用的换算或归属依据，以及所供结果是否已按该参考流计量。 |
| cp_expand_other_native_energy | rail_container_leg | 必须展开身份 other_native_energy (inputs/product)：实际其他牵引调车及辅助能源供应 | collected_record | requirement_id=other_native_energy; process_id=rail_container_leg; required_direction=inputs; required_flow_type=product; original_collection_protocol=cp_operation; applicability_evidence; occurrence_event_id; concrete_row_id; physical_identity; formulation_or_species; phase; carbon_origin; particle_fraction; source_compartment; receiving_compartment; supply_or_handover_gate; provider_covered_cells; asset_component_event_and_lifecycle_phase; native_property; native_unit; measured_native_quantity; source_record_id; allocation_all_users; normalization_denominator; per_identity_amount_calculation; verification_evidence; unresolved_reason; occurrence_to_row_reconciliation; carrier_and_supply_state; meter_id; integrated_energy_or_power_time; fuel_as_received_quantity; heating_value_basis; supply_return_state; responsible_failure_and_readiness; complete_provider_exclusion; applicability_decision_record; covered_concrete_rows; excluded_occurrence_reason; completion_evidence; observed_quantity_state; conversion_or_allocation_evidence | 条件真实原生供应包括直流电池外部供应氢气燃气蒸汽燃料或其他真实动力辅助。逐项识别实际状态牌号来源接口数量，不强行匹配交流柴油，也不因缺失而为零。 本范围是必须落实的身份识别要求，不是交换流。使用原节点采集协议及其记录，先按真实身份、端口及独立功能拆分，再将保留的数量、基准及证据规则分别用于各兼容具体行。不得将异质身份合并数量或从总括名称推断原生属性单位。未发生须有证据，适用性或身份未知则阻止完成。 以下采集条件仅限本项 inputs/product 的身份与交接点（实际其他牵引调车及辅助能源供应）。存在未被完整供应方覆盖的实际计量电力、购入热冷或消耗燃料时启用。区分载能体、供应状态和独立仪表，燃料组成及收到基数量与有用热分别识别；积分能量不再乘时长，功率须有时间积分证据；燃料换能量须匹配实际热值基准，供热须有供回状态。纳入应分摊待机、空载、失败和返工职责；总表仅协调分项，不再次相加。 每项适用性判断须留证。经证实不发生仅关闭所述范围和时段，缺记录仍未解决。发生的要求须将全部事件映射到具体row ID及相容原生数量，或精确映射至已覆盖行和供应方责任，并逐项说明排除理由。证据须覆盖身份、支持单位、计算、原始记录及全部去向；既有与新增分支对同一事件互斥覆盖，协议本身不作为交换。完成须无未分配事件、无重复覆盖、无相关数量或身份未决项。按有证据的实际分支采集原始字段。不适用的操作数须关联分支判定，适用但缺乏实测或依据的数量登记待决。 | 实测交付状态下的载能体量；能量采用有记录的仪表或热值口径 | 每次真实事件及每项有证据的未发生判断 | 完整声明队列及归属资产寿命关联事件 | 仅本过程真实责任场所及供应方 | 先对账原生事件总量，仅汇总身份、状态、单位、交接点及期间均相容的量。按相应计算规则逐行核算一次：只分配仍共享的负担，目标总量仅除以同口径的正合格产出；等效每参考流数值原值沿用，零产出期间不作除法并保留处置记录。 | 保留仪表期间、供应状态及交接点。积分能量已含时长；仅在对应路线由功率和实测时长，或相容燃料量与有据热值计算能量。区分燃料提取、有用热冷交付及已覆盖的上游阶段。 对上述具体身份及相容输入口径，仅在数量的归属和归一化状态与下式前提匹配时使用该规则：实际归属原生数量按 N 除一次，遵循采集与计算规则。 保留原始凭据、实际采用的系数和结果单位。数值来源模式：calculated_value；适用范围：site_specific；归一化基准：每个声明的参考流；基准类型：reference_flow；证据类型：calculated_from_collection；采集协议：cp_operation；来源：。须有原始记录、精确原生支持及逐具体行核验；这些规则不提供缺失身份或数值。 完成判据：check_occurrence_completion。 |
| cp_expand_locomotive_assets | rail_container_leg | 必须展开身份 locomotive_assets (inputs/product)：实际完整机车及初始牵引部件 | collected_record | requirement_id=locomotive_assets; process_id=rail_container_leg; required_direction=inputs; required_flow_type=product; original_collection_protocol=cp_assets; applicability_evidence; occurrence_event_id; concrete_row_id; physical_identity; formulation_or_species; phase; carbon_origin; particle_fraction; source_compartment; receiving_compartment; supply_or_handover_gate; provider_covered_cells; asset_component_event_and_lifecycle_phase; native_property; native_unit; measured_native_quantity; source_record_id; allocation_all_users; normalization_denominator; per_identity_amount_calculation; verification_evidence; unresolved_reason; occurrence_to_row_reconciliation; asset_or_reusable_id; model_configuration; included_initial_components; lifecycle_phase; manufacture_native_quantity; target_duty; all_user_same_cohort_lifetime_duty; replacement_event; provider_coverage_cells; applicability_decision_record; covered_concrete_rows; excluded_occurrence_reason; completion_evidence; observed_quantity_state; conversion_or_allocation_evidence; supply_or_service_gate; accepted_service_demand; provider_functional_unit; provider_intensity_basis; covered_lifecycle_stages | 识别真实干线调车完整配置原生供应及初始发动机变压器电池其他部件。同资产全部使用者寿命覆盖区别于货运服务量，车身材料或运输输出不等于完整机车身份。 本范围是必须落实的身份识别要求，不是交换流。使用原节点采集协议及其记录，先按真实身份、端口及独立功能拆分，再将保留的数量、基准及证据规则分别用于各兼容具体行。不得将异质身份合并数量或从总括名称推断原生属性单位。未发生须有证据，适用性或身份未知则阻止完成。 对本项规定的实体资产或周转品，核实供应交接点、初始部件以及实际替换、维护、清洗、失败和退役记录。租赁或综合供应合同须核实覆盖范围；本项包含已交付服务时按实际验收的原生需求计量，仅另行追溯未覆盖的资产阶段。直接建模资产按同队列目标作业量与全用户有据正寿命作业量之比分配，禁止将整个设施归给一个服务。 每项适用性判断须留证。经证实不发生仅关闭所述范围和时段，缺记录仍未解决。发生的要求须将全部事件映射到具体row ID及相容原生数量，或精确映射至已覆盖行和供应方责任，并逐项说明排除理由。证据须覆盖身份、支持单位、计算、原始记录及全部去向；既有与新增分支对同一事件互斥覆盖，协议本身不作为交换。完成须无未分配事件、无重复覆盖、无相关数量或身份未决项。按有证据的实际分支采集原始字段。不适用的操作数须关联分支判定，适用但缺乏实测或依据的数量登记待决。 | 实体资产或周转品按已核实的制造或供应单位；同一队列的相容作业量；范围内的交付服务用其原生功能单位 | 每次真实事件及每项有证据的未发生判断 | 完整声明队列及归属资产寿命关联事件 | 仅本过程真实责任场所及供应方 | 先对账原生事件总量，仅汇总身份、状态、单位、交接点及期间均相容的量。按相应计算规则逐行核算一次：只分配仍共享的负担，目标总量仅除以同口径的正合格产出；等效每参考流数值原值沿用，零产出期间不作除法并保留处置记录。 | 实体资产按有记录的供应交接量乘目标作业量与同队列全用户正寿命作业量之比，保留配置、投运、更换及退役或剩余寿命记录。范围内如有已交付服务，按已核实原生强度乘相容交付需求，留存覆盖凭据，未覆盖阶段单列。 对该交接点相容的资产量或已独立核实的服务结果，仅在数量的归属和归一化状态与下式前提匹配时使用该规则：实际归属原生数量按 N 除一次，遵循采集与计算规则。 保留原始凭据、实际采用的系数和结果单位。数值来源模式：calculated_value；适用范围：site_specific；归一化基准：每个声明的参考流；基准类型：reference_flow；证据类型：calculated_from_collection；采集协议：cp_assets；来源：。须有原始记录、精确原生支持及逐具体行核验；这些规则不提供缺失身份或数值。 完成判据：check_occurrence_completion。 |
| cp_expand_wagon_assets | rail_container_leg | 必须展开身份 wagon_assets (inputs/product)：实际完整集装箱铁路车辆及初始部件 | collected_record | requirement_id=wagon_assets; process_id=rail_container_leg; required_direction=inputs; required_flow_type=product; original_collection_protocol=cp_assets; applicability_evidence; occurrence_event_id; concrete_row_id; physical_identity; formulation_or_species; phase; carbon_origin; particle_fraction; source_compartment; receiving_compartment; supply_or_handover_gate; provider_covered_cells; asset_component_event_and_lifecycle_phase; native_property; native_unit; measured_native_quantity; source_record_id; allocation_all_users; normalization_denominator; per_identity_amount_calculation; verification_evidence; unresolved_reason; occurrence_to_row_reconciliation; asset_or_reusable_id; model_configuration; included_initial_components; lifecycle_phase; manufacture_native_quantity; target_duty; all_user_same_cohort_lifetime_duty; replacement_event; provider_coverage_cells; applicability_decision_record; covered_concrete_rows; excluded_occurrence_reason; completion_evidence; observed_quantity_state; conversion_or_allocation_evidence; supply_or_service_gate; accepted_service_demand; provider_functional_unit; provider_intensity_basis; covered_lifecycle_stages | 逐项识别真实平车凹底联接或其他适用车辆原生配置供应有效寿命作业覆盖，车辆件数轴数槽位列车件数不是可互换原生量。 本范围是必须落实的身份识别要求，不是交换流。使用原节点采集协议及其记录，先按真实身份、端口及独立功能拆分，再将保留的数量、基准及证据规则分别用于各兼容具体行。不得将异质身份合并数量或从总括名称推断原生属性单位。未发生须有证据，适用性或身份未知则阻止完成。 对本项规定的实体资产或周转品，核实供应交接点、初始部件以及实际替换、维护、清洗、失败和退役记录。租赁或综合供应合同须核实覆盖范围；本项包含已交付服务时按实际验收的原生需求计量，仅另行追溯未覆盖的资产阶段。直接建模资产按同队列目标作业量与全用户有据正寿命作业量之比分配，禁止将整个设施归给一个服务。 每项适用性判断须留证。经证实不发生仅关闭所述范围和时段，缺记录仍未解决。发生的要求须将全部事件映射到具体row ID及相容原生数量，或精确映射至已覆盖行和供应方责任，并逐项说明排除理由。证据须覆盖身份、支持单位、计算、原始记录及全部去向；既有与新增分支对同一事件互斥覆盖，协议本身不作为交换。完成须无未分配事件、无重复覆盖、无相关数量或身份未决项。按有证据的实际分支采集原始字段。不适用的操作数须关联分支判定，适用但缺乏实测或依据的数量登记待决。 | 实体资产或周转品按已核实的制造或供应单位；同一队列的相容作业量；范围内的交付服务用其原生功能单位 | 每次真实事件及每项有证据的未发生判断 | 完整声明队列及归属资产寿命关联事件 | 仅本过程真实责任场所及供应方 | 先对账原生事件总量，仅汇总身份、状态、单位、交接点及期间均相容的量。按相应计算规则逐行核算一次：只分配仍共享的负担，目标总量仅除以同口径的正合格产出；等效每参考流数值原值沿用，零产出期间不作除法并保留处置记录。 | 实体资产按有记录的供应交接量乘目标作业量与同队列全用户正寿命作业量之比，保留配置、投运、更换及退役或剩余寿命记录。范围内如有已交付服务，按已核实原生强度乘相容交付需求，留存覆盖凭据，未覆盖阶段单列。 对该交接点相容的资产量或已独立核实的服务结果，仅在数量的归属和归一化状态与下式前提匹配时使用该规则：实际归属原生数量按 N 除一次，遵循采集与计算规则。 保留原始凭据、实际采用的系数和结果单位。数值来源模式：calculated_value；适用范围：site_specific；归一化基准：每个声明的参考流；基准类型：reference_flow；证据类型：calculated_from_collection；采集协议：cp_assets；来源：。须有原始记录、精确原生支持及逐具体行核验；这些规则不提供缺失身份或数值。 完成判据：check_occurrence_completion。 |
| cp_expand_container_assets | rail_container_leg | 必须展开身份 container_assets (inputs/product)：实际重复使用联运集装箱供应 | collected_record | requirement_id=container_assets; process_id=rail_container_leg; required_direction=inputs; required_flow_type=product; original_collection_protocol=cp_assets; applicability_evidence; occurrence_event_id; concrete_row_id; physical_identity; formulation_or_species; phase; carbon_origin; particle_fraction; source_compartment; receiving_compartment; supply_or_handover_gate; provider_covered_cells; asset_component_event_and_lifecycle_phase; native_property; native_unit; measured_native_quantity; source_record_id; allocation_all_users; normalization_denominator; per_identity_amount_calculation; verification_evidence; unresolved_reason; occurrence_to_row_reconciliation; asset_or_reusable_id; model_configuration; included_initial_components; lifecycle_phase; manufacture_native_quantity; target_duty; all_user_same_cohort_lifetime_duty; replacement_event; provider_coverage_cells; applicability_decision_record; covered_concrete_rows; excluded_occurrence_reason; completion_evidence; observed_quantity_state; conversion_or_allocation_evidence; supply_or_service_gate; accepted_service_demand; provider_functional_unit; provider_intensity_basis; covered_lifecycle_stages | 识别真实箱型条件设备原生供应、全运输方式全部使用者同箱寿命维护回送报废。货物包装另列，不对每种运输方式独立分配完整箱体制造。 本范围是必须落实的身份识别要求，不是交换流。使用原节点采集协议及其记录，先按真实身份、端口及独立功能拆分，再将保留的数量、基准及证据规则分别用于各兼容具体行。不得将异质身份合并数量或从总括名称推断原生属性单位。未发生须有证据，适用性或身份未知则阻止完成。 对本项规定的实体资产或周转品，核实供应交接点、初始部件以及实际替换、维护、清洗、失败和退役记录。租赁或综合供应合同须核实覆盖范围；本项包含已交付服务时按实际验收的原生需求计量，仅另行追溯未覆盖的资产阶段。直接建模资产按同队列目标作业量与全用户有据正寿命作业量之比分配，禁止将整个设施归给一个服务。 每项适用性判断须留证。经证实不发生仅关闭所述范围和时段，缺记录仍未解决。发生的要求须将全部事件映射到具体row ID及相容原生数量，或精确映射至已覆盖行和供应方责任，并逐项说明排除理由。证据须覆盖身份、支持单位、计算、原始记录及全部去向；既有与新增分支对同一事件互斥覆盖，协议本身不作为交换。完成须无未分配事件、无重复覆盖、无相关数量或身份未决项。按有证据的实际分支采集原始字段。不适用的操作数须关联分支判定，适用但缺乏实测或依据的数量登记待决。 | 实体资产或周转品按已核实的制造或供应单位；同一队列的相容作业量；范围内的交付服务用其原生功能单位 | 每次真实事件及每项有证据的未发生判断 | 完整声明队列及归属资产寿命关联事件 | 仅本过程真实责任场所及供应方 | 先对账原生事件总量，仅汇总身份、状态、单位、交接点及期间均相容的量。按相应计算规则逐行核算一次：只分配仍共享的负担，目标总量仅除以同口径的正合格产出；等效每参考流数值原值沿用，零产出期间不作除法并保留处置记录。 | 实体资产按有记录的供应交接量乘目标作业量与同队列全用户正寿命作业量之比，保留配置、投运、更换及退役或剩余寿命记录。范围内如有已交付服务，按已核实原生强度乘相容交付需求，留存覆盖凭据，未覆盖阶段单列。 对该交接点相容的资产量或已独立核实的服务结果，仅在数量的归属和归一化状态与下式前提匹配时使用该规则：实际归属原生数量按 N 除一次，遵循采集与计算规则。 保留原始凭据、实际采用的系数和结果单位。数值来源模式：calculated_value；适用范围：site_specific；归一化基准：每个声明的参考流；基准类型：reference_flow；证据类型：calculated_from_collection；采集协议：cp_assets；来源：。须有原始记录、精确原生支持及逐具体行核验；这些规则不提供缺失身份或数值。 完成判据：check_occurrence_completion。 |
| cp_expand_rail_infrastructure | rail_container_leg | 必须展开身份 rail_infrastructure (inputs/product)：实际轨道接触网变电站调车场及场站基础设施 | collected_record | requirement_id=rail_infrastructure; process_id=rail_container_leg; required_direction=inputs; required_flow_type=product; original_collection_protocol=cp_assets; applicability_evidence; occurrence_event_id; concrete_row_id; physical_identity; formulation_or_species; phase; carbon_origin; particle_fraction; source_compartment; receiving_compartment; supply_or_handover_gate; provider_covered_cells; asset_component_event_and_lifecycle_phase; native_property; native_unit; measured_native_quantity; source_record_id; allocation_all_users; normalization_denominator; per_identity_amount_calculation; verification_evidence; unresolved_reason; occurrence_to_row_reconciliation; asset_or_reusable_id; model_configuration; included_initial_components; lifecycle_phase; manufacture_native_quantity; target_duty; all_user_same_cohort_lifetime_duty; replacement_event; provider_coverage_cells; applicability_decision_record; covered_concrete_rows; excluded_occurrence_reason; completion_evidence; observed_quantity_state; conversion_or_allocation_evidence; supply_or_service_gate; accepted_service_demand; provider_functional_unit; provider_intensity_basis; covered_lifecycle_stages | 必须记录原生资产服务需求、真实建设维护更换报废及跨期间场址全部客货其他使用者。路径收费年度支出不是物理需求，核实供应商已含阶段替代精确本地项目。 本范围是必须落实的身份识别要求，不是交换流。使用原节点采集协议及其记录，先按真实身份、端口及独立功能拆分，再将保留的数量、基准及证据规则分别用于各兼容具体行。不得将异质身份合并数量或从总括名称推断原生属性单位。未发生须有证据，适用性或身份未知则阻止完成。 对本项规定的实体资产或周转品，核实供应交接点、初始部件以及实际替换、维护、清洗、失败和退役记录。租赁或综合供应合同须核实覆盖范围；本项包含已交付服务时按实际验收的原生需求计量，仅另行追溯未覆盖的资产阶段。直接建模资产按同队列目标作业量与全用户有据正寿命作业量之比分配，禁止将整个设施归给一个服务。 每项适用性判断须留证。经证实不发生仅关闭所述范围和时段，缺记录仍未解决。发生的要求须将全部事件映射到具体row ID及相容原生数量，或精确映射至已覆盖行和供应方责任，并逐项说明排除理由。证据须覆盖身份、支持单位、计算、原始记录及全部去向；既有与新增分支对同一事件互斥覆盖，协议本身不作为交换。完成须无未分配事件、无重复覆盖、无相关数量或身份未决项。按有证据的实际分支采集原始字段。不适用的操作数须关联分支判定，适用但缺乏实测或依据的数量登记待决。 | 实体资产或周转品按已核实的制造或供应单位；同一队列的相容作业量；范围内的交付服务用其原生功能单位 | 每次真实事件及每项有证据的未发生判断 | 完整声明队列及归属资产寿命关联事件 | 仅本过程真实责任场所及供应方 | 先对账原生事件总量，仅汇总身份、状态、单位、交接点及期间均相容的量。按相应计算规则逐行核算一次：只分配仍共享的负担，目标总量仅除以同口径的正合格产出；等效每参考流数值原值沿用，零产出期间不作除法并保留处置记录。 | 实体资产按有记录的供应交接量乘目标作业量与同队列全用户正寿命作业量之比，保留配置、投运、更换及退役或剩余寿命记录。范围内如有已交付服务，按已核实原生强度乘相容交付需求，留存覆盖凭据，未覆盖阶段单列。 对该交接点相容的资产量或已独立核实的服务结果，仅在数量的归属和归一化状态与下式前提匹配时使用该规则：实际归属原生数量按 N 除一次，遵循采集与计算规则。 保留原始凭据、实际采用的系数和结果单位。数值来源模式：calculated_value；适用范围：site_specific；归一化基准：每个声明的参考流；基准类型：reference_flow；证据类型：calculated_from_collection；采集协议：cp_assets；来源：。须有原始记录、精确原生支持及逐具体行核验；这些规则不提供缺失身份或数值。 完成判据：check_occurrence_completion。 |
| cp_expand_handling_assets | rail_container_leg | 必须展开身份 handling_assets (inputs/product)：实际箱体吊装固定及条件控制设备 | collected_record | requirement_id=handling_assets; process_id=rail_container_leg; required_direction=inputs; required_flow_type=product; original_collection_protocol=cp_assets; applicability_evidence; occurrence_event_id; concrete_row_id; physical_identity; formulation_or_species; phase; carbon_origin; particle_fraction; source_compartment; receiving_compartment; supply_or_handover_gate; provider_covered_cells; asset_component_event_and_lifecycle_phase; native_property; native_unit; measured_native_quantity; source_record_id; allocation_all_users; normalization_denominator; per_identity_amount_calculation; verification_evidence; unresolved_reason; occurrence_to_row_reconciliation; asset_or_reusable_id; model_configuration; included_initial_components; lifecycle_phase; manufacture_native_quantity; target_duty; all_user_same_cohort_lifetime_duty; replacement_event; provider_coverage_cells; applicability_decision_record; covered_concrete_rows; excluded_occurrence_reason; completion_evidence; observed_quantity_state; conversion_or_allocation_evidence; supply_or_service_gate; accepted_service_demand; provider_functional_unit; provider_intensity_basis; covered_lifecycle_stages | 按真实所有者供应接口识别真实吊机正面吊发电冷机锁固设备及初始部件，具有全部使用者有效寿命需求，不重复完整装卸制冷供应商已含设备。 本范围是必须落实的身份识别要求，不是交换流。使用原节点采集协议及其记录，先按真实身份、端口及独立功能拆分，再将保留的数量、基准及证据规则分别用于各兼容具体行。不得将异质身份合并数量或从总括名称推断原生属性单位。未发生须有证据，适用性或身份未知则阻止完成。 对本项规定的实体资产或周转品，核实供应交接点、初始部件以及实际替换、维护、清洗、失败和退役记录。租赁或综合供应合同须核实覆盖范围；本项包含已交付服务时按实际验收的原生需求计量，仅另行追溯未覆盖的资产阶段。直接建模资产按同队列目标作业量与全用户有据正寿命作业量之比分配，禁止将整个设施归给一个服务。 每项适用性判断须留证。经证实不发生仅关闭所述范围和时段，缺记录仍未解决。发生的要求须将全部事件映射到具体row ID及相容原生数量，或精确映射至已覆盖行和供应方责任，并逐项说明排除理由。证据须覆盖身份、支持单位、计算、原始记录及全部去向；既有与新增分支对同一事件互斥覆盖，协议本身不作为交换。完成须无未分配事件、无重复覆盖、无相关数量或身份未决项。按有证据的实际分支采集原始字段。不适用的操作数须关联分支判定，适用但缺乏实测或依据的数量登记待决。 | 实体资产或周转品按已核实的制造或供应单位；同一队列的相容作业量；范围内的交付服务用其原生功能单位 | 每次真实事件及每项有证据的未发生判断 | 完整声明队列及归属资产寿命关联事件 | 仅本过程真实责任场所及供应方 | 先对账原生事件总量，仅汇总身份、状态、单位、交接点及期间均相容的量。按相应计算规则逐行核算一次：只分配仍共享的负担，目标总量仅除以同口径的正合格产出；等效每参考流数值原值沿用，零产出期间不作除法并保留处置记录。 | 实体资产按有记录的供应交接量乘目标作业量与同队列全用户正寿命作业量之比，保留配置、投运、更换及退役或剩余寿命记录。范围内如有已交付服务，按已核实原生强度乘相容交付需求，留存覆盖凭据，未覆盖阶段单列。 对该交接点相容的资产量或已独立核实的服务结果，仅在数量的归属和归一化状态与下式前提匹配时使用该规则：实际归属原生数量按 N 除一次，遵循采集与计算规则。 保留原始凭据、实际采用的系数和结果单位。数值来源模式：calculated_value；适用范围：site_specific；归一化基准：每个声明的参考流；基准类型：reference_flow；证据类型：calculated_from_collection；采集协议：cp_assets；来源：。须有原始记录、精确原生支持及逐具体行核验；这些规则不提供缺失身份或数值。 完成判据：check_occurrence_completion。 |
| cp_expand_maintenance_supplies | rail_container_leg | 必须展开身份 maintenance_supplies (inputs/product)：实际铁路箱体及设备维护用品 | collected_record | requirement_id=maintenance_supplies; process_id=rail_container_leg; required_direction=inputs; required_flow_type=product; original_collection_protocol=cp_maintenance; applicability_evidence; occurrence_event_id; concrete_row_id; physical_identity; formulation_or_species; phase; carbon_origin; particle_fraction; source_compartment; receiving_compartment; supply_or_handover_gate; provider_covered_cells; asset_component_event_and_lifecycle_phase; native_property; native_unit; measured_native_quantity; source_record_id; allocation_all_users; normalization_denominator; per_identity_amount_calculation; verification_evidence; unresolved_reason; occurrence_to_row_reconciliation; operation_record; material_sku; formulation_grade_state; independent_function; supplier; package_tare; opening_stock; net_receipts; unused_returns; closing_stock; failed_use; destination; applicability_decision_record; covered_concrete_rows; excluded_occurrence_reason; completion_evidence; observed_quantity_state; conversion_or_allocation_evidence | 逐项按成分原生接口生命周期阶段识别真实车轮制动轨道部件润滑撒砂试剂电池或其他供应。初始更换和供应使用后材料分离，不用通用混合物。 本范围是必须落实的身份识别要求，不是交换流。使用原节点采集协议及其记录，先按真实身份、端口及独立功能拆分，再将保留的数量、基准及证据规则分别用于各兼容具体行。不得将异质身份合并数量或从总括名称推断原生属性单位。未发生须有证据，适用性或身份未知则阻止完成。 以下采集条件仅限本项 inputs/product 的身份与交接点（实际铁路箱体及设备维护用品）。仅对实际发生的所述作业及独立消耗SKU或实物启用。记录材料或配方、等级状态、功能、供应方、扣包装皮重后的净量、库存变动、未用退回和去向。独立供应的包装衬材按材料及一次性或复用状态区分；完整配方或物理总成保留一个身份，组成信息不相加，不同外购品不得共用汇总数量。纳入失败使用、维护及返工，记录真实消耗而非仅采购量。 每项适用性判断须留证。经证实不发生仅关闭所述范围和时段，缺记录仍未解决。发生的要求须将全部事件映射到具体row ID及相容原生数量，或精确映射至已覆盖行和供应方责任，并逐项说明排除理由。证据须覆盖身份、支持单位、计算、原始记录及全部去向；既有与新增分支对同一事件互斥覆盖，协议本身不作为交换。完成须无未分配事件、无重复覆盖、无相关数量或身份未决项。按有证据的实际分支采集原始字段。不适用的操作数须关联分支判定，适用但缺乏实测或依据的数量登记待决。 | 实际品项、配方或物件在规定交接点及状态下的原生数量 | 每次真实事件及每项有证据的未发生判断 | 完整声明队列及归属资产寿命关联事件 | 仅本过程真实责任场所及供应方 | 先对账原生事件总量，仅汇总身份、状态、单位、交接点及期间均相容的量。按相应计算规则逐行核算一次：只分配仍共享的负担，目标总量仅除以同口径的正合格产出；等效每参考流数值原值沿用，零产出期间不作除法并保留处置记录。 | 逐批核对收货、期初期末、退回、耗用及互斥去向。件数或体积折质量须有单件质量或相容状态密度依据；产品身份以外的包装和衬材独立登记。 对上述具体身份及相容输入口径，仅在数量的归属和归一化状态与下式前提匹配时使用该规则：实际归属原生数量按 N 除一次，遵循采集与计算规则。 保留原始凭据、实际采用的系数和结果单位。数值来源模式：calculated_value；适用范围：site_specific；归一化基准：每个声明的参考流；基准类型：reference_flow；证据类型：calculated_from_collection；采集协议：cp_maintenance；来源：。须有原始记录、精确原生支持及逐具体行核验；这些规则不提供缺失身份或数值。 完成判据：check_occurrence_completion。 |
| cp_expand_other_refrigerants | rail_container_leg | 必须展开身份 other_refrigerants (inputs/product)：实际其他制冷剂及条件维持供应 | collected_record | requirement_id=other_refrigerants; process_id=rail_container_leg; required_direction=inputs; required_flow_type=product; original_collection_protocol=cp_maintenance; applicability_evidence; occurrence_event_id; concrete_row_id; physical_identity; formulation_or_species; phase; carbon_origin; particle_fraction; source_compartment; receiving_compartment; supply_or_handover_gate; provider_covered_cells; asset_component_event_and_lifecycle_phase; native_property; native_unit; measured_native_quantity; source_record_id; allocation_all_users; normalization_denominator; per_identity_amount_calculation; verification_evidence; unresolved_reason; occurrence_to_row_reconciliation; fluid_composition; phase; equipment_circuit; factory_charge_coverage; charge_event; recovery_event; opening_fluid_stock; closing_fluid_stock; independently_purchased_fluid; equipment_charge_change; applicability_decision_record; covered_concrete_rows; excluded_occurrence_reason; completion_evidence; observed_quantity_state; conversion_or_allocation_evidence | 条件真实物质配方状态牌号接口分别识别，不能将 R134a 改名为其他冷媒，也不合并独立供应回收材料环境释放。 本范围是必须落实的身份识别要求，不是交换流。使用原节点采集协议及其记录，先按真实身份、端口及独立功能拆分，再将保留的数量、基准及证据规则分别用于各兼容具体行。不得将异质身份合并数量或从总括名称推断原生属性单位。未发生须有证据，适用性或身份未知则阻止完成。 以下采集条件仅限本项 inputs/product 的身份与交接点（实际其他制冷剂及条件维持供应）。按上述投入交接点独立供应的工质启用，其回收或释放应按不同去向追踪。记录具体组成、相态、设备回路、出厂充注覆盖、充注回收事件和库存；完整设备已含初始工质不再购入一次，独立补充更换仍须计入。协调库存、采购、设备充注变化、回收、废物及直接排放，不把回收当原生新供给，不把无法解释的差额直接当排放。 每项适用性判断须留证。经证实不发生仅关闭所述范围和时段，缺记录仍未解决。发生的要求须将全部事件映射到具体row ID及相容原生数量，或精确映射至已覆盖行和供应方责任，并逐项说明排除理由。证据须覆盖身份、支持单位、计算、原始记录及全部去向；既有与新增分支对同一事件互斥覆盖，协议本身不作为交换。完成须无未分配事件、无重复覆盖、无相关数量或身份未决项。按有证据的实际分支采集原始字段。不适用的操作数须关联分支判定，适用但缺乏实测或依据的数量登记待决。 | 已识别流体按充装、回收或移交等实际状态的原生数量 | 每次真实事件及每项有证据的未发生判断 | 完整声明队列及归属资产寿命关联事件 | 仅本过程真实责任场所及供应方 | 先对账原生事件总量，仅汇总身份、状态、单位、交接点及期间均相容的量。按相应计算规则逐行核算一次：只分配仍共享的负担，目标总量仅除以同口径的正合格产出；等效每参考流数值原值沿用，零产出期间不作除法并保留处置记录。 | 按具体物质核对库存、充装、回收及去向记录。区分设备内充量、补充量、期末留存、排放及外送。仅凭补充量不能确定泄漏量。 对上述具体身份及相容输入口径，仅在数量的归属和归一化状态与下式前提匹配时使用该规则：实际归属原生数量按 N 除一次，遵循采集与计算规则。 保留原始凭据、实际采用的系数和结果单位。数值来源模式：calculated_value；适用范围：site_specific；归一化基准：每个声明的参考流；基准类型：reference_flow；证据类型：calculated_from_collection；采集协议：cp_maintenance；来源：。须有原始记录、精确原生支持及逐具体行核验；这些规则不提供缺失身份或数值。 完成判据：check_occurrence_completion。 |
| cp_expand_cleaning_securing_support | rail_container_leg | 必须展开身份 cleaning_securing_support (inputs/product)：实际清洗固定及专属支持用品 | collected_record | requirement_id=cleaning_securing_support; process_id=rail_container_leg; required_direction=inputs; required_flow_type=product; original_collection_protocol=cp_support; applicability_evidence; occurrence_event_id; concrete_row_id; physical_identity; formulation_or_species; phase; carbon_origin; particle_fraction; source_compartment; receiving_compartment; supply_or_handover_gate; provider_covered_cells; asset_component_event_and_lifecycle_phase; native_property; native_unit; measured_native_quantity; source_record_id; allocation_all_users; normalization_denominator; per_identity_amount_calculation; verification_evidence; unresolved_reason; occurrence_to_row_reconciliation; operation_record; material_sku; formulation_grade_state; independent_function; supplier; package_tare; opening_stock; net_receipts; unused_returns; closing_stock; failed_use; destination; applicability_decision_record; covered_concrete_rows; excluded_occurrence_reason; completion_evidence; observed_quantity_state; conversion_or_allocation_evidence | 按原生接口识别真实清洗剂绑扎封志防护人员专属支持等供应。重复使用资产完整供应商结果及既有货物包装不能同时计为新消耗材料。 本范围是必须落实的身份识别要求，不是交换流。使用原节点采集协议及其记录，先按真实身份、端口及独立功能拆分，再将保留的数量、基准及证据规则分别用于各兼容具体行。不得将异质身份合并数量或从总括名称推断原生属性单位。未发生须有证据，适用性或身份未知则阻止完成。 以下采集条件仅限本项 inputs/product 的身份与交接点（实际清洗固定及专属支持用品）。仅对实际发生的所述作业及独立消耗SKU或实物启用。记录材料或配方、等级状态、功能、供应方、扣包装皮重后的净量、库存变动、未用退回和去向。独立供应的包装衬材按材料及一次性或复用状态区分；完整配方或物理总成保留一个身份，组成信息不相加，不同外购品不得共用汇总数量。纳入失败使用、维护及返工，记录真实消耗而非仅采购量。 每项适用性判断须留证。经证实不发生仅关闭所述范围和时段，缺记录仍未解决。发生的要求须将全部事件映射到具体row ID及相容原生数量，或精确映射至已覆盖行和供应方责任，并逐项说明排除理由。证据须覆盖身份、支持单位、计算、原始记录及全部去向；既有与新增分支对同一事件互斥覆盖，协议本身不作为交换。完成须无未分配事件、无重复覆盖、无相关数量或身份未决项。按有证据的实际分支采集原始字段。不适用的操作数须关联分支判定，适用但缺乏实测或依据的数量登记待决。 | 实际品项、配方或物件在规定交接点及状态下的原生数量 | 每次真实事件及每项有证据的未发生判断 | 完整声明队列及归属资产寿命关联事件 | 仅本过程真实责任场所及供应方 | 先对账原生事件总量，仅汇总身份、状态、单位、交接点及期间均相容的量。按相应计算规则逐行核算一次：只分配仍共享的负担，目标总量仅除以同口径的正合格产出；等效每参考流数值原值沿用，零产出期间不作除法并保留处置记录。 | 逐批核对收货、期初期末、退回、耗用及互斥去向。件数或体积折质量须有单件质量或相容状态密度依据；产品身份以外的包装和衬材独立登记。 对上述具体身份及相容输入口径，仅在数量的归属和归一化状态与下式前提匹配时使用该规则：实际归属原生数量按 N 除一次，遵循采集与计算规则。 保留原始凭据、实际采用的系数和结果单位。数值来源模式：calculated_value；适用范围：site_specific；归一化基准：每个声明的参考流；基准类型：reference_flow；证据类型：calculated_from_collection；采集协议：cp_support；来源：。须有原始记录、精确原生支持及逐具体行核验；这些规则不提供缺失身份或数值。 完成判据：check_occurrence_completion。 |
| cp_expand_subcontract_rail_carriage | rail_container_leg | 必须展开身份 subcontract_rail_carriage (inputs/product)：实际分包铁路集装箱承运服务 | collected_record | requirement_id=subcontract_rail_carriage; process_id=rail_container_leg; required_direction=inputs; required_flow_type=product; original_collection_protocol=cp_provider; applicability_evidence; occurrence_event_id; concrete_row_id; physical_identity; formulation_or_species; phase; carbon_origin; particle_fraction; source_compartment; receiving_compartment; supply_or_handover_gate; provider_covered_cells; asset_component_event_and_lifecycle_phase; native_property; native_unit; measured_native_quantity; source_record_id; allocation_all_users; normalization_denominator; per_identity_amount_calculation; verification_evidence; unresolved_reason; occurrence_to_row_reconciliation; provider_contract; independent_function; provider_gates; native_functional_unit; delivered_quantity; covered_process_phase_cells; uncovered_foreground_rows; applicability_decision_record; covered_concrete_rows; excluded_occurrence_reason; completion_evidence; observed_quantity_state; conversion_or_allocation_evidence; provider_functional_unit; accepted_service_demand; provider_intensity_basis; covered_service_stages | 保持核实供应商原生箱区段列车车辆小时质量距离或其他真实供应功能需求覆盖项目。按同单位真实需求缩放后/N一次，不自动将 TEU吨公里转换完成箱区段。 本范围是必须落实的身份识别要求，不是交换流。使用原节点采集协议及其记录，先按真实身份、端口及独立功能拆分，再将保留的数量、基准及证据规则分别用于各兼容具体行。不得将异质身份合并数量或从总括名称推断原生属性单位。未发生须有证据，适用性或身份未知则阻止完成。 以下采集条件仅限本项 inputs/product 的身份与交接点（实际分包铁路集装箱承运服务）。仅在本PCR范围内实际委托独立功能时启用。记录合同、交付服务功能、关口、原生功能单位、实际交付量及具体覆盖的过程和寿命阶段；逐项与自营活动比对，完整供应方或未覆盖前景活动仅计一次。不用金额、材料质量或假设件数替代真实功能；同一最终服务不通过外部最终产品供应方递归重复计入。 每项适用性判断须留证。经证实不发生仅关闭所述范围和时段，缺记录仍未解决。发生的要求须将全部事件映射到具体row ID及相容原生数量，或精确映射至已覆盖行和供应方责任，并逐项说明排除理由。证据须覆盖身份、支持单位、计算、原始记录及全部去向；既有与新增分支对同一事件互斥覆盖，协议本身不作为交换。完成须无未分配事件、无重复覆盖、无相关数量或身份未决项。按有证据的实际分支采集原始字段。不适用的操作数须关联分支判定，适用但缺乏实测或依据的数量登记待决。 | 已核实的合同交付功能单位；仅独立可计数且已验收的结果使用 Item(s) | 每次真实事件及每项有证据的未发生判断 | 完整声明队列及归属资产寿命关联事件 | 仅本过程真实责任场所及供应方 | 先对账原生事件总量，仅汇总身份、状态、单位、交接点及期间均相容的量。按相应计算规则逐行核算一次：只分配仍共享的负担，目标总量仅除以同口径的正合格产出；等效每参考流数值原值沿用，零产出期间不作除法并保留处置记录。 | 按指定交接点实际验收量计量。仅在单位强度换算为总负担时，以供应方强度乘同一原生单位的需求量。保留合同范围、验收、原生单位及覆盖阶段记录。仅按时间交付的功能以时长计量。 对按合同口径已验收的服务，仅在数量的归属和归一化状态与下式前提匹配时使用该规则：实际归属原生数量按 N 除一次，遵循采集与计算规则。 保留原始凭据、实际采用的系数和结果单位。数值来源模式：calculated_value；适用范围：site_specific；归一化基准：每个声明的参考流；基准类型：reference_flow；证据类型：calculated_from_collection；采集协议：cp_provider；来源：。须有原始记录、精确原生支持及逐具体行核验；这些规则不提供缺失身份或数值。 完成判据：check_occurrence_completion。 |
| cp_expand_included_terminal_condition | rail_container_leg | 必须展开身份 included_terminal_condition (inputs/product)：实际包含场站装卸调车或冷机服务 | collected_record | requirement_id=included_terminal_condition; process_id=rail_container_leg; required_direction=inputs; required_flow_type=product; original_collection_protocol=cp_provider; applicability_evidence; occurrence_event_id; concrete_row_id; physical_identity; formulation_or_species; phase; carbon_origin; particle_fraction; source_compartment; receiving_compartment; supply_or_handover_gate; provider_covered_cells; asset_component_event_and_lifecycle_phase; native_property; native_unit; measured_native_quantity; source_record_id; allocation_all_users; normalization_denominator; per_identity_amount_calculation; verification_evidence; unresolved_reason; occurrence_to_row_reconciliation; provider_contract; independent_function; provider_gates; native_functional_unit; delivered_quantity; covered_process_phase_cells; uncovered_foreground_rows; applicability_decision_record; covered_concrete_rows; excluded_occurrence_reason; completion_evidence; observed_quantity_state; conversion_or_allocation_evidence; provider_functional_unit; accepted_service_demand; provider_intensity_basis; covered_service_stages | 真实吊装固定检查调车存放时间冷机原生供应须有真实铁路场站箱体运营商保管及责任覆盖。独立供应不同产品保持区段接口外，包含完整供应商替代已含能源资产材料去向一次。 本范围是必须落实的身份识别要求，不是交换流。使用原节点采集协议及其记录，先按真实身份、端口及独立功能拆分，再将保留的数量、基准及证据规则分别用于各兼容具体行。不得将异质身份合并数量或从总括名称推断原生属性单位。未发生须有证据，适用性或身份未知则阻止完成。 以下采集条件仅限本项 inputs/product 的身份与交接点（实际包含场站装卸调车或冷机服务）。仅在本PCR范围内实际委托独立功能时启用。记录合同、交付服务功能、关口、原生功能单位、实际交付量及具体覆盖的过程和寿命阶段；逐项与自营活动比对，完整供应方或未覆盖前景活动仅计一次。不用金额、材料质量或假设件数替代真实功能；同一最终服务不通过外部最终产品供应方递归重复计入。 每项适用性判断须留证。经证实不发生仅关闭所述范围和时段，缺记录仍未解决。发生的要求须将全部事件映射到具体row ID及相容原生数量，或精确映射至已覆盖行和供应方责任，并逐项说明排除理由。证据须覆盖身份、支持单位、计算、原始记录及全部去向；既有与新增分支对同一事件互斥覆盖，协议本身不作为交换。完成须无未分配事件、无重复覆盖、无相关数量或身份未决项。按有证据的实际分支采集原始字段。不适用的操作数须关联分支判定，适用但缺乏实测或依据的数量登记待决。 | 已核实的合同交付功能单位；仅独立可计数且已验收的结果使用 Item(s) | 每次真实事件及每项有证据的未发生判断 | 完整声明队列及归属资产寿命关联事件 | 仅本过程真实责任场所及供应方 | 先对账原生事件总量，仅汇总身份、状态、单位、交接点及期间均相容的量。按相应计算规则逐行核算一次：只分配仍共享的负担，目标总量仅除以同口径的正合格产出；等效每参考流数值原值沿用，零产出期间不作除法并保留处置记录。 | 按指定交接点实际验收量计量。仅在单位强度换算为总负担时，以供应方强度乘同一原生单位的需求量。保留合同范围、验收、原生单位及覆盖阶段记录。仅按时间交付的功能以时长计量。 对按合同口径已验收的服务，仅在数量的归属和归一化状态与下式前提匹配时使用该规则：实际归属原生数量按 N 除一次，遵循采集与计算规则。 保留原始凭据、实际采用的系数和结果单位。数值来源模式：calculated_value；适用范围：site_specific；归一化基准：每个声明的参考流；基准类型：reference_flow；证据类型：calculated_from_collection；采集协议：cp_provider；来源：。须有原始记录、精确原生支持及逐具体行核验；这些规则不提供缺失身份或数值。 完成判据：check_occurrence_completion。 |
| cp_expand_other_intended_services | rail_container_leg | 必须展开身份 other_intended_services (outputs/product)：实际独立共载或其他预期服务输出 | collected_record | requirement_id=other_intended_services; process_id=rail_container_leg; required_direction=outputs; required_flow_type=product; original_collection_protocol=cp_service; applicability_evidence; occurrence_event_id; concrete_row_id; physical_identity; formulation_or_species; phase; carbon_origin; particle_fraction; source_compartment; receiving_compartment; supply_or_handover_gate; provider_covered_cells; asset_component_event_and_lifecycle_phase; native_property; native_unit; measured_native_quantity; source_record_id; allocation_all_users; normalization_denominator; per_identity_amount_calculation; verification_evidence; unresolved_reason; occurrence_to_row_reconciliation; output_batch; ownership; new_used_state; accepted_receiver; acceptance_record; original_input_row_if_unused_return; native_handover_quantity; fate_reconciliation; applicability_decision_record; covered_concrete_rows; excluded_occurrence_reason; completion_evidence; observed_quantity_state; conversion_or_allocation_evidence | 为共用列车调车场场站作业的全部独立供应使用者，按真实交接输出集条件展开。货物箱体内部转移自营调车任务不是额外最终或向自身采购服务。 本范围是必须落实的身份识别要求，不是交换流。使用原节点采集协议及其记录，先按真实身份、端口及独立功能拆分，再将保留的数量、基准及证据规则分别用于各兼容具体行。不得将异质身份合并数量或从总括名称推断原生属性单位。未发生须有证据，适用性或身份未知则阻止完成。 以下采集条件仅限本项 outputs/product 的身份与交接点（实际独立共载或其他预期服务输出）。仅在实际发生且已接受的外部有用交接或有记录的未用退回时启用。记录所有权、物料或服务身份、新旧状态、关口、接收确认、原生数量及来源批次；未用退回应匹配原输入状态，已用回收物为不同状态。核对全部产出去向，不从实物输入中直接扣除有用产出，不虚构避免产品抵扣；环境负担分配按既有规则处理，不改写实物数量。 每项适用性判断须留证。经证实不发生仅关闭所述范围和时段，缺记录仍未解决。发生的要求须将全部事件映射到具体row ID及相容原生数量，或精确映射至已覆盖行和供应方责任，并逐项说明排除理由。证据须覆盖身份、支持单位、计算、原始记录及全部去向；既有与新增分支对同一事件互斥覆盖，协议本身不作为交换。完成须无未分配事件、无重复覆盖、无相关数量或身份未决项。按有证据的实际分支采集原始字段。不适用的操作数须关联分支判定，适用但缺乏实测或依据的数量登记待决。 | 具体已接收产品、服务、退回物或回收物的原生单位 | 每次真实事件及每项有证据的未发生判断 | 完整声明队列及归属资产寿命关联事件 | 仅本过程真实责任场所及供应方 | 先对账原生事件总量，仅汇总身份、状态、单位、交接点及期间均相容的量。按相应计算规则逐行核算一次：只分配仍共享的负担，目标总量仅除以同口径的正合格产出；等效每参考流数值原值沿用，零产出期间不作除法并保留处置记录。 | 记录实际状态、接收者、验收及原生实物量，区分未用退回和已用物资。执行专用输出投影及配对退回规则；独立实测的产出量不得再乘环境负担分配份额。 对上述具体身份及相容输入口径，仅在数量的归属和归一化状态与下式前提匹配时使用该规则：实际归属原生数量按 N 除一次，遵循采集与计算规则。 保留原始凭据、实际采用的系数和结果单位。数值来源模式：calculated_value；适用范围：site_specific；归一化基准：每个声明的参考流；基准类型：reference_flow；证据类型：calculated_from_collection；采集协议：cp_service；来源：。须有原始记录、精确原生支持及逐具体行核验；这些规则不提供缺失身份或数值。 完成判据：check_occurrence_completion。 |
| cp_expand_wash_wastewater | rail_container_leg | 必须展开身份 wash_wastewater (outputs/waste)：实际收集铁路箱体清洗废水 | collected_record | requirement_id=wash_wastewater; process_id=rail_container_leg; required_direction=outputs; required_flow_type=waste; original_collection_protocol=cp_maintenance; applicability_evidence; occurrence_event_id; concrete_row_id; physical_identity; formulation_or_species; phase; carbon_origin; particle_fraction; source_compartment; receiving_compartment; supply_or_handover_gate; provider_covered_cells; asset_component_event_and_lifecycle_phase; native_property; native_unit; measured_native_quantity; source_record_id; allocation_all_users; normalization_denominator; per_identity_amount_calculation; verification_evidence; unresolved_reason; occurrence_to_row_reconciliation; waste_origin_event; material_or_true_mixture; moisture_basis; container_tare; opening_waste_stock; generated_waste; received_waste; handover_quantity; closing_waste_stock; onsite_treatment; receiver_id; applicability_decision_record; covered_concrete_rows; excluded_occurrence_reason; completion_evidence; observed_quantity_state; conversion_or_allocation_evidence | 计量真实收集排出接口成分回用处理所有者，供水或衡算差额不自动成为废水。 本范围是必须落实的身份识别要求，不是交换流。使用原节点采集协议及其记录，先按真实身份、端口及独立功能拆分，再将保留的数量、基准及证据规则分别用于各兼容具体行。不得将异质身份合并数量或从总括名称推断原生属性单位。未发生须有证据，适用性或身份未知则阻止完成。 以下采集条件仅限本项 outputs/waste 的身份与交接点（实际收集铁路箱体清洗废水）。本过程实际产生或接收所述废物时启用。记录材料或配方或真实共同收集混合物、干湿状态、容器皮重、来源事件、存量、交接关口及实际接收者；核对产生量+期初库存+接收量=交出量+期末库存+另列现场处理量。分收的不同废物分行，真实接收混合物可为一行，其组分仅作不可相加审计；有用回收、客户保留物与废物去向分开，不自动给替代抵扣。 每项适用性判断须留证。经证实不发生仅关闭所述范围和时段，缺记录仍未解决。发生的要求须将全部事件映射到具体row ID及相容原生数量，或精确映射至已覆盖行和供应方责任，并逐项说明排除理由。证据须覆盖身份、支持单位、计算、原始记录及全部去向；既有与新增分支对同一事件互斥覆盖，协议本身不作为交换。完成须无未分配事件、无重复覆盖、无相关数量或身份未决项。按有证据的实际分支采集原始字段。不适用的操作数须关联分支判定，适用但缺乏实测或依据的数量登记待决。 | 接收方验收的具体废物或实际混合收集物在实测状态下的原生数量 | 每次真实事件及每项有证据的未发生判断 | 完整声明队列及归属资产寿命关联事件 | 仅本过程真实责任场所及供应方 | 先对账原生事件总量，仅汇总身份、状态、单位、交接点及期间均相容的量。按相应计算规则逐行核算一次：只分配仍共享的负担，目标总量仅除以同口径的正合格产出；等效每参考流数值原值沿用，零产出期间不作除法并保留处置记录。 | 以接收记录核对产生、库存、场内处理和实测交付。混合物流量与组分测量分开；干湿基或质量体积换算须有相容组成或密度。接收转移和环境直排按不同交接点记录。 对规定采用 Volume / m3 的行，核实实测口径或向该口径的换算。 对上述具体身份及相容输入口径，仅在数量的归属和归一化状态与下式前提匹配时使用该规则：实际归属原生数量按 N 除一次，遵循采集与计算规则。 保留原始凭据、实际采用的系数和结果单位。数值来源模式：calculated_value；适用范围：site_specific；归一化基准：每个声明的参考流；基准类型：reference_flow；证据类型：calculated_from_collection；采集协议：cp_maintenance；来源：。须有原始记录、精确原生支持及逐具体行核验；这些规则不提供缺失身份或数值。 完成判据：check_occurrence_completion。 |
| cp_expand_actual_material_wastes | rail_container_leg | 必须展开身份 actual_material_wastes (outputs/waste)：实际报废铁路箱体材料及货物包装废物 | collected_record | requirement_id=actual_material_wastes; process_id=rail_container_leg; required_direction=outputs; required_flow_type=waste; original_collection_protocol=cp_maintenance; applicability_evidence; occurrence_event_id; concrete_row_id; physical_identity; formulation_or_species; phase; carbon_origin; particle_fraction; source_compartment; receiving_compartment; supply_or_handover_gate; provider_covered_cells; asset_component_event_and_lifecycle_phase; native_property; native_unit; measured_native_quantity; source_record_id; allocation_all_users; normalization_denominator; per_identity_amount_calculation; verification_evidence; unresolved_reason; occurrence_to_row_reconciliation; waste_origin_event; material_or_true_mixture; moisture_basis; container_tare; opening_waste_stock; generated_waste; received_waste; handover_quantity; closing_waste_stock; onsite_treatment; receiver_id; applicability_decision_record; covered_concrete_rows; excluded_occurrence_reason; completion_evidence; observed_quantity_state; conversion_or_allocation_evidence | 逐项识别真实废物材料来源所有者成分接收去向。拒收损坏货物保留库存不自动丢弃，回收产品环境释放分离。 本范围是必须落实的身份识别要求，不是交换流。使用原节点采集协议及其记录，先按真实身份、端口及独立功能拆分，再将保留的数量、基准及证据规则分别用于各兼容具体行。不得将异质身份合并数量或从总括名称推断原生属性单位。未发生须有证据，适用性或身份未知则阻止完成。 以下采集条件仅限本项 outputs/waste 的身份与交接点（实际报废铁路箱体材料及货物包装废物）。本过程实际产生或接收所述废物时启用。记录材料或配方或真实共同收集混合物、干湿状态、容器皮重、来源事件、存量、交接关口及实际接收者；核对产生量+期初库存+接收量=交出量+期末库存+另列现场处理量。分收的不同废物分行，真实接收混合物可为一行，其组分仅作不可相加审计；有用回收、客户保留物与废物去向分开，不自动给替代抵扣。 每项适用性判断须留证。经证实不发生仅关闭所述范围和时段，缺记录仍未解决。发生的要求须将全部事件映射到具体row ID及相容原生数量，或精确映射至已覆盖行和供应方责任，并逐项说明排除理由。证据须覆盖身份、支持单位、计算、原始记录及全部去向；既有与新增分支对同一事件互斥覆盖，协议本身不作为交换。完成须无未分配事件、无重复覆盖、无相关数量或身份未决项。按有证据的实际分支采集原始字段。不适用的操作数须关联分支判定，适用但缺乏实测或依据的数量登记待决。 | 接收方验收的具体废物或实际混合收集物在实测状态下的原生数量 | 每次真实事件及每项有证据的未发生判断 | 完整声明队列及归属资产寿命关联事件 | 仅本过程真实责任场所及供应方 | 先对账原生事件总量，仅汇总身份、状态、单位、交接点及期间均相容的量。按相应计算规则逐行核算一次：只分配仍共享的负担，目标总量仅除以同口径的正合格产出；等效每参考流数值原值沿用，零产出期间不作除法并保留处置记录。 | 以接收记录核对产生、库存、场内处理和实测交付。混合物流量与组分测量分开；干湿基或质量体积换算须有相容组成或密度。接收转移和环境直排按不同交接点记录。 对上述具体身份及相容输入口径，仅在数量的归属和归一化状态与下式前提匹配时使用该规则：实际归属原生数量按 N 除一次，遵循采集与计算规则。 保留原始凭据、实际采用的系数和结果单位。数值来源模式：calculated_value；适用范围：site_specific；归一化基准：每个声明的参考流；基准类型：reference_flow；证据类型：calculated_from_collection；采集协议：cp_maintenance；来源：。须有原始记录、精确原生支持及逐具体行核验；这些规则不提供缺失身份或数值。 完成判据：check_occurrence_completion。 |
| cp_expand_other_substance_releases | rail_container_leg | 必须展开身份 other_substance_releases (outputs/elementary)：实际其他逐物质铁路场站或箱体释放 | collected_record | requirement_id=other_substance_releases; process_id=rail_container_leg; required_direction=outputs; required_flow_type=elementary; original_collection_protocol=cp_emissions; applicability_evidence; occurrence_event_id; concrete_row_id; physical_identity; formulation_or_species; phase; carbon_origin; particle_fraction; source_compartment; receiving_compartment; supply_or_handover_gate; provider_covered_cells; asset_component_event_and_lifecycle_phase; native_property; native_unit; measured_native_quantity; source_record_id; allocation_all_users; normalization_denominator; per_identity_amount_calculation; verification_evidence; unresolved_reason; occurrence_to_row_reconciliation; substance_identity; chemical_form; environmental_compartment; carbon_origin; particle_fraction_or_count_basis; measured_or_calculated_release; species_conversion_evidence; applicability_decision_record; covered_concrete_rows; excluded_occurrence_reason; completion_evidence; observed_quantity_state; conversion_or_allocation_evidence | 按实际发生必须展开真实物种来源介质，包括燃烧碳源轨道轮对制动粉尘互不重叠粒径溢出其他制冷剂。通用 VOC/NOx粉尘不是一个分子，货物库存缺失不是排放。 本范围是必须落实的身份识别要求，不是交换流。使用原节点采集协议及其记录，先按真实身份、端口及独立功能拆分，再将保留的数量、基准及证据规则分别用于各兼容具体行。不得将异质身份合并数量或从总括名称推断原生属性单位。未发生须有证据，适用性或身份未知则阻止完成。 以下采集条件仅限本项 outputs/elementary 的身份与交接点（实际其他逐物质铁路场站或箱体释放）。仅对进入已记录接收介质且有观测或适用计算依据的实际释放启用。记录具体物质及形态、来源或接收介质、适用的化石或生物碳来源、适用的粒径组分或粒子数粒径基础及采样期；保留元素与分子口径，换算须有化学计量和相容物种证据。收集物流中的污染物在实际环境排放边界前归接收物流，不用CO2、NOx、VOC、COD或泛颗粒物流代替缺失物种。 每项适用性判断须留证。经证实不发生仅关闭所述范围和时段，缺记录仍未解决。发生的要求须将全部事件映射到具体row ID及相容原生数量，或精确映射至已覆盖行和供应方责任，并逐项说明排除理由。证据须覆盖身份、支持单位、计算、原始记录及全部去向；既有与新增分支对同一事件互斥覆盖，协议本身不作为交换。完成须无未分配事件、无重复覆盖、无相关数量或身份未决项。按有证据的实际分支采集原始字段。不适用的操作数须关联分支判定，适用但缺乏实测或依据的数量登记待决。 | 本物质、资源或物理排放在实际环境介质的已核实原生属性与单位 | 每次真实事件及每项有证据的未发生判断 | 完整声明队列及归属资产寿命关联事件 | 仅本过程真实责任场所及供应方 | 先对账原生事件总量，仅汇总身份、状态、单位、交接点及期间均相容的量。按相应计算规则逐行核算一次：只分配仍共享的负担，目标总量仅除以同口径的正合格产出；等效每参考流数值原值沿用，零产出期间不作除法并保留处置记录。 | 采样或活动量及适用因子须对应物种、相态、来源和环境介质。按实际对象区分质量、粒子数、热量及元素当量；换算须有依据，重叠总量不可相加。 对上述具体身份及相容输入口径，仅在数量的归属和归一化状态与下式前提匹配时使用该规则：实际归属原生数量按 N 除一次，遵循采集与计算规则。 保留原始凭据、实际采用的系数和结果单位。数值来源模式：calculated_value；适用范围：site_specific；归一化基准：每个声明的参考流；基准类型：reference_flow；证据类型：calculated_from_collection；采集协议：cp_emissions；来源：。须有原始记录、精确原生支持及逐具体行核验；这些规则不提供缺失身份或数值。 完成判据：check_occurrence_completion。 |

### 计算规则

| 规则编号 | 适用对象 | formula_or_rule | inputs | output | source_ids |
| --- | --- | --- | --- | --- | --- |
| normalize | 全部清单行 | I_x = A_x / N，其中 A_x 是按全部使用者因果分配后归属兼容完成区段队列的真实原生数量。N 为正，零输出池保留负荷待边界解释。 | A_x;N | 每完成区段的原生数量 |  |
| supplier_native | provider rows | A_x = q_u * D_u * s，其中 q_u 为兼容供应商每原生单位 u 的清单，D_u 为真实同单位需求，s 为有证据的队列与全部使用者份额。先替代覆盖项目，再计算 A_x / N，不自动将计数转换吨公里。 | q_u;D_u;s;N | 归属后的原生清单 |  |
| asset_life | asset rows | A_asset = Q_asset * U_studied / U_life，其中 Q_asset 为真实原生交付资产量，U_studied/U_life 为同资产兼容作业量且全寿命全部使用者分母有证据并为正。随后 I_asset = A_asset / N 一次，更换和报废分别闭合。 | Q_asset;U_studied;U_life;N | 每完成区段的原生资产数量 |  |
| stock_fate | fuel/refrigerant/cleaning rows | Opening + supplied + transfers_in = closing + consumed + transferred_out + recovered + evidenced_release + unresolved_residual。按真实原生单位保持互斥流项；仍包含在期末库存中的内部回收量不得再算外部回收输出；未解释残差须调查，不自动归为空气、废物或燃烧。 | opening;supplied;transfers_in;closing;consumed;transferred_out;recovered;evidenced_release;unresolved_residual | 已核对的事件台账 |  |

### 数据质量要求

| requirement_id | 适用对象 | Requirement | evidence |
| --- | --- | --- | --- |
| qualifier_and_acceptance | reference output | 原约及按时序变更箱货铁路保管接口、真实编组距离时间、必要状态质量及真实交接须证明可比 N，保留失败拒收改道作业及不确定性。 | cp_service |
| atomic_route | 全部实际交换 | 每个实际分支交换须有逐项编号、真实身份类型方向接口、原生数量属性单位、所属过程协议及采集来源证明。条件不发生须有真实肯定证据，缺失不等于零。 | cp_operation;cp_condition;cp_support;cp_maintenance;cp_emissions |
| provider_life | 供应方及资产清单行 | 证明精确覆盖阶段事件场址期间项目、全部使用者及正值同资产寿命需求。对未覆盖的建设初始部件更换维护报废分别采集，预测保留依据与敏感性。 | cp_assets;cp_provider |
| site_period_outputs | shared pools | 索引全部贡献铁路调车场场站机车车辆箱体及报告生命周期期间，以及所有预期输出接收者。先合计原始归属数量再除以一致 N，不对不同强度做简单平均，核对全池及排除项。 | cp_service;cp_assets;cp_operation |
| fates | 货物转移及与环境的交换 | 跟踪真实拒收损坏失温箱货产生作业及回送回收处置所有者。真实铁路牵引调车场站冷机来源原生计量覆盖须有记录，各物种来源介质子区室不确定性独立，不用通用粉尘烟气或假定全部充注损失。 | cp_maintenance;cp_emissions |

## 9. 验证规则

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| reference_leg | rail_container_leg | 核实1Item(s) 恰为一个真实验收载货箱铁路区段、真实输出关联、箱货铁路接口距离历时状态质量及正值可比 N。TEU列车车辆发车槽位运力或通用吨公里不自动转换完成箱交付，内部调车牵引更换不增加输出。 |  |
| rail_coverage | rail_container_leg | 核对真实列车编组载货空车调位调车场站停留失败过境作业、场站归属及全部真实动力冷机分支。补全缺失原生供应资产寿命阶段，替代精确供应商覆盖，不重复货物制造多式联运输出。 |  |
| native_energy_fates | rail_container_leg | 验证牵引与冷机场站能源计量、真实交直流来源边界、再生外送处理、燃料供应燃烧库存及制冷剂充注泄漏回收。核实每项真实物种碳源接收子区室水废物及粒径重叠，未知残差货损不得默认归作排放。 |  |
| all_user_life_period | rail_container_leg | 核对全部预期交接使用者场址期间、因果分子与可比 N，要求同资产正值全部使用者有效寿命需求及互斥初始更换报废。保留零输出失败空载池，N=0时无有限强度。 |  |
| identity_projection | rail_container_leg | 每项真实交换有逐项编号唯一真实过程方向类型原生数量属性单位供应接收接口及同过程协议，或登记待核要求。检查双语方法表规则流卡、真实支持身份及当前投影指纹，通过不等于外部科学身份批准或发布就绪。 |  |
| atomic_rail_container_leg | rail_container_leg | 拒绝将备选物料、独立供应资产服务、不同废物流、污染物种、碳源、相态、粒径或环境子介质合并成一个交换身份。本节点每项适用cp_expand_要求必须有发生或未发生记录及完整具体行清单，各行具有自身身份、端口、已核验UUID、原生属性单位、数量、原始记录、计算和唯一责任。供应方已含完整总成或真实收集混合物流仍按一个真实供应或收集身份，不虚构组分交换。不得将要求名称标识、NOx或VOC或PM总量、未明确的物理释放或异质清单绑定一个UUID。核对全部子行、原始事件、供应方已含单元及跨节点交接，不缺失当零、不重复计入。身份、适用性、数量或去向未知，均阻止完整前景包及最终TIDAS交换产出。PCR检查器不验证这些前景事实，须保留逐行证据供审查。 | ghg-product-2011 |
| check_occurrence_completion | 全部实际清单行和身份识别协议 | 保留适用性证据，将每个实际事件对应到具体清单行或已核实的供应方覆盖范围。判定未发生须有证据，未知项保留待决。按同一身份、状态、单位、期间和交接点核对期初、接收、期末及互斥去向。耗材领用账区分未用退回、内部领拨和合格、失败及返工作业的实际耗用。托管账或物料平衡采用期初库存＋外部接收＋配对内部接收＝期末库存＋配对内部发出＋对外交付且获接收的数量＋未用外退＋外送的已用物资或回收物＋外送废物＋直接排放＋本边界内消耗或转化量。身份在边界内生成时，将有证据的生成量或出生数计入该身份账的来源并关联原事件。在上层守恒物料或元素平衡中抵消内部转化和移交。每个事件只记一次，留存回收物计入期末，移交与耗用分别登记。按相容口径执行专用托管、相态、转化或元素规则；已作为转化量计入的物料，其后续产物不得再计入同一去向合计。独立计量各项，对未解释的差额追查并保留待决。实物总量与负担分配分别核算。共享原始负担采用 Q_raw × s / R，其中 s 为有证据的目标驱动量除以同池同期间全部适用用户的正驱动量总和。已归属的目标总量采用 Q_target / R，已与同一参考流等效的单位结果 q_ref 原值沿用。供应方单位强度先乘以按其原生单位实测的需求量。仅在另一个仍有共享负担的独立阶段另作分配。R 为同一队列、交接点和参考单位下的正值合格产出量。保留失败与部分完成作业的负担，禁止以此放大 R；零产出时保留负担及有证据的结转或最终处置。自有资产采用同队列全用户寿命作业量，并排除初始部件重复计算。外购服务仅替代有记录的覆盖阶段。适用的身份、数量、支持单位、去向或分配分母仍未决时，最终数据集仍不完整。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | secondary_dataset; background_dataset |
| downstream_use | 适用铁路集装箱货运服务清单，用于下游过程及生命周期模型投影 |
| allowed_use | 必要身份数据补全后，可用于真实铁路接口箱货距离编组时间质量状态、完整列车调车场场站冷机及归属生命周期一致的适用已完成载货箱铁路区段。 |
| excluded_use | 未限定 TEU吨公里列车车辆槽位结果、整条多式联运箱货机车车辆制造、重复调车牵引更换输出、遗漏场站状态空载失败作业或未知清单当零。 |
| required_metadata | actual_container_type_size_identity_and_articles_packages; net_gross_cargo_packaging_box_wagon_loco_tare; rail_carrier_terminal_box_operator_custody_gates; actual_rail_distance_time_dwell_consist_slots; original_quality_condition_and_chronological_amended_acceptance; N_comparable_completed_laden_box_legs; train_shunting_yard_empty_position_failure_return_duties; actual_traction_native_waveform_fuel_source_meter; conditional_reefer_temperature_time_generator_plug_responsibility; terminal_lift_securing_inspection_provider_scope; all_user_same_asset_locomotive_wagon_box_track_catenary_terminal_life; native_provider_demand_exact_cells_sites_periods; actual_substance_medium_subcompartment_and_fates |
| required_quality_disclosure | 范围验收、供应商原生覆盖、真实数据缺口、因果分配、共有寿命预测、库存去向闭合及不确定性。 |
| update_trigger | 铁路箱体服务接口质量、编组路线牵引冷机场站责任、供应商覆盖、全部使用者资产寿命分配或物质去向变更。 |

## 11. 数据源

| source_id | type | reference | used_for |
| --- | --- | --- | --- |
| unsd-rail-container-2025 | official_guidance | UNSD,CPC3.0 65123,30June2025. https://unstats.un.org/unsd/classifications/Econ/Structure/Detail/EN/2100/65123 | 仅为官方集装箱物件包裹铁路承运范围，已完成载货箱铁路区段计数为本 PCR 明定选择。 |
| unece-ctu-2014 | official_guidance | IMO/ILO/UNECE,CTU Code,2014,chapters2/4/7,dated qualitative context. https://wiki.unece.org/spaces/TransportSustainableCTUCode/pages/23101907/4.2%2BFunctions%2Bwithin%2Bthe%2Bsupply%2Bchain and https://unece.org/transport/intermodal-transport/imoilounece-code-practice-packing-cargo-transport-units-ctu-code | 重复使用货运单元与货物车辆、铁路承运场站角色、固定和约定温度装卸定性背景，不作为全球法律因子或数量要求，真实接口归属依记录。 |
| ghg-product-2011 | standard | WRI/WBCSD,Product Life Cycle Accounting and Reporting Standard,2011,ch6-9. https://ghgprotocol.org/product-standard | 一般功能单位生命周期数据披露分配框架，计数1列车箱体因果池原生需求及扩展全寿命资产公式为本 PCR 明定方法。 |

