---
pcr_id: pcr.distributive-trade-services-accommodation-food-and-beverage-serving-ser-18ff339a.freight-transport-services.transport-services-via-pipeline-of-other-goods
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 其他货物管道交付运输服务

## 1. 范围与适用性

本 PCR 覆盖其他化学品、煤浆及未另分类其他货物的管道运输，包括真实气态、液态、浆态或其他适用状态。完整类别不限于某化学品、水基煤浆或某泵送技术。真实货物成分、相态、载运介质、管网配置、路线距离高差压力温度历时、必要质量及验收保管接口定义服务。美国管道来源的物理示例仅说明真实化学状态，不能改写 CPC 分类。

参考是对在申明交接点真实交付验收的 1 kg 明确货物所提供管道运输服务。验收质量通量适用于真实批次和连续承运，不虚构交易计次。量化前申明货物质量基准：真实合同浆液或溶液混合物保持其混合物基准，合同干固体或明确组分义务则按真实实测组分基准并排除载运介质。这些是不同限定服务分层，不是可互换分母。记录真实成分水分及实测转换，不事后切换基准、不把载运补充冲洗水算作交付固体，也不因同用 kg 而比较不同化学品路线状态质量。

排除属于天然气及原油成品油其他子类的管道服务、蒸汽或水干线分配、独立非管道运输，以及真实运输接口之外独立货物制造捕集储存封存或使用。若属于真实承诺承运交接，必要承运人责任压力温控、制浆悬浮操作脱水或场站作业仍纳入。CCS 货物转移仅为运输，不自动导入捕集储存负荷，也不取得永久封存或避免排放抵扣。

货物接收、罐存管存、循环内部转移回送拒收污染物料及环境损失是保管状态记录，不是额外运输输出或消耗货物制造。验收交付质量独立于泵循环量、提名或开票通量。保持原约质量及真实按时序变更，失败拒收未交库存保留归属作业而无验收输出。真实货物补偿替换责任须披露，并在真实所有者处计一次，不导入全部正常货物生产。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.distributive-trade-services-accommodation-food-and-beverage-serving-ser-18ff339a.freight-transport-services.transport-services-via-pipeline-of-other-goods |
| classification_refs | CPC 3.0 65139; exact |
| covered_products | 本 PCR 覆盖其他化学品、煤浆及未另分类其他货物的管道运输，包括真实气态、液态、浆态或其他适用状态。完整类别不限于某化学品、水基煤浆或某泵送技术。真实货物成分、相态、载运介质、管网配置、路线距离高差压力温度历时、必要质量及验收保管接口定义服务。美国管道来源的物理示例仅说明真实化学状态，不能改写 CPC 分类。 |
| excluded_products | 排除属于天然气及原油成品油其他子类的管道服务、蒸汽或水干线分配、独立非管道运输，以及真实运输接口之外独立货物制造捕集储存封存或使用。若属于真实承诺承运交接，必要承运人责任压力温控、制浆悬浮操作脱水或场站作业仍纳入。CCS 货物转移仅为运输，不自动导入捕集储存负荷，也不取得永久封存或避免排放抵扣。 |
| representative_product | 真实明确其他货物的管道交付运输服务 |
| production_route | 真实适用管道货物交付及承运责任压力温控制浆场站作业与归属生命周期。 |
| market_state | 真实明确其他货物的管道交付运输服务 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| 功能对象（What） | 真实明确其他货物的管道交付运输服务 |
| 数量（How much） | 对预申明基准真实验收明确货物1kg的管道承运交付 |
| 质量（How well） | 真实明确成分牌号相态货物基准接收交付接口路线距离压力温度历时及原约真实变更验收质量。 |
| 时间或周期（How long or cycle） | 真实批次或连续验收交付报告期间及归属完整运行生命周期时段。 |
| 参考流关联（reference_flow_link） | `accepted_pipeline_delivery` |

| 字段 | 值 |
| --- | --- |
| 参考数量（Reference amount） | 1 |
| 参考产品流（Reference product flow） | 真实明确其他货物的管道交付运输服务 |
| 参考流属性（Reference flow property） | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组（Reference unit group） | 质量单位 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位（Reference unit） | kg |
| 必要限定项（Required qualifiers） | actual_named_cargo_chemical_composition_grade_and_phase; declared_cargo_mass_basis_before_delivery; actual_slurry_solids_moisture_and_carrier_medium_separation; actual_receipt_delivery_custody_gates_and_accepted_quality; actual_pipeline_route_distance_elevation_pressure_temperature_time; batch_or_continuous_period_and_coherent_accepted_delivered_mass_M; linepack_tanks_recirc_start_stop_flush_pig_failure_return_duties; actual_native_pump_compressor_thermal_energy_and_provider_coverage; real_carrier_conditioning_preparation_dewatering_handover; all_user_same_asset_pipe_station_terminal_life_sites_periods; actual_component_water_species_stock_fate_receiver_and_carbon_origin; independent_capture_manufacture_storage_use_interfaces |

必要限定项须在数据集元数据过程参考说明或等效数据包字段申明，缺失即定义不完整。

## 4. 计量与单位规则

| 规则编号 | 适用对象 | required_property | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| delivered_mass | reference product | Mass | kg | M为预申明混合物组分固体基准真实验收货物kg，保留真实取样验收，原约真实合同验收混合物的实测组分水随混合物计一次，固体组分专属基准排除载运水。独立补充冲洗循环水管存提名发票失败通量不创造独立额外交付，不稀释或事后切基准。 |
| native_conversion | 全部清单行 | 实际原生属性 | 实际原生单位 | 体积质量组分转换须真实兼容实测密度温压压缩性成分，不默认水气密度水分，可直接实测原生kg。能源支持1kWh=3.6MJ，仅原生供应商接口一次，不代表货物能源转换。 |
| species_stock | 全部清单行 | 实际原生属性 | 实际原生单位 | 区分货物载运介质固体水分库存管存循环及真实物质元素CO2e质量基准，真实速率按有证据历时积分，额定运力通用固体浆液因子不建立数量。真实货物提取作驱动燃料须改变保管使用状态，并在真实所有者处纳入兼容上游燃料供应负荷一次，不导入全部普通被运货物制造。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 真实货物成分状态接收保管承运责任及真实管道场站原生供应商接口。 |
| starting_condition_role | 前景采集接口，不代表上游供应资产零负荷。 |
| product_classification_scope | CPC 3.0 65139 |
| recursive_input_rule | 真实同功能原生分包需求计一次，展开必要未覆盖阶段，不向自身采购或额外内部转移最终输出。 |
| upstream_dataset_requirement | 真实货物基准功能接口技术地理期间阶段原生单位兼容，补全缺失生命周期。 |
| disclosure | actual_named_cargo_chemical_composition_grade_and_phase; declared_cargo_mass_basis_before_delivery; actual_slurry_solids_moisture_and_carrier_medium_separation; actual_receipt_delivery_custody_gates_and_accepted_quality; actual_pipeline_route_distance_elevation_pressure_temperature_time; batch_or_continuous_period_and_coherent_accepted_delivered_mass_M; linepack_tanks_recirc_start_stop_flush_pig_failure_return_duties; actual_native_pump_compressor_thermal_energy_and_provider_coverage; real_carrier_conditioning_preparation_dewatering_handover; all_user_same_asset_pipe_station_terminal_life_sites_periods; actual_component_water_species_stock_fate_receiver_and_carbon_origin; independent_capture_manufacture_storage_use_interfaces |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| full_scope | pipeline_delivery | 按真实接收交付接口覆盖完整其他化学品煤浆及其他未分类管道承运。被运产品分类独立判断，不因来源示例或气液相态就把所有化学品当天然气石油。蒸汽水干线排除，真实载运介质不默认成为独立配水产品。 | unsd-other-pipeline-2025 |
| cargo_basis_and_gate | pipeline_delivery | 界定原约真实货物成分牌号状态质量基准、接收交付保管质量压力温度及按时序变更。浆液溶液按实测水分成分区分合同混合物与组分固体货物及载运介质。验收交付 M 仅含预申明基准真实验收货物。原约真实合同验收混合物须以水为必要组分时，实际实测组分水随该混合物计一次；不得把独立补充冲洗循环水另作交付输出，固体基准也不含载运水。管存提名发票不合格回送不是验收交付，不得靠稀释或切换基准制造输出。 |  |
| slurry_conditioning | pipeline_delivery | 记录真实承运接口内必要制备混合悬浮泵送罐存分离脱水及介质回用处置的固液状态。按真实服务条件纳入，不规定所有路线研磨脱水或回水。独立货物配制采矿精炼下游燃烧不属于本运输输出，已含承运调理投入残余不能遗漏。 | ota-slurry-1978 |
| actual_network_duties | pipeline_delivery | 保留真实管段泵压缩机辅助加热冷却增压搅拌罐计量清管冲洗投运充填待机启停堵塞不合格失败救援回介质作业。循环货物或内部回收压力能源不等于新交付货物或外部能源供应。真实化学兼容相态技术决定投入，不默认压力浆比能耗强度。 | doe-hydrogen-pipeline |
| ownership_and_providers | pipeline_delivery | 每项真实承运货主场站调理介质处理事件供应资产场址期间指定唯一所有者。兼容完整原生供应商结果替代精确已含项目一次，补全必要缺失阶段。CCS 运输接口排除独立捕集储存，除非实际独立供应且另行界定功能，不自动封存抵扣。货权或购买通量本身不证明供应商生命周期覆盖。 |  |
| assets_all_user_life | pipeline_delivery | 真实管线通道工程涂层阴极保护泵压缩机驱动温控系统罐阀控制场站调理资产，按原生制造初始更换维护报废接口及正值同资产全部使用者有效寿命需求纳入。证据包括全部真实服务商品客户功能场址期间，采用真实通量功或兼容作业而非额定运力金额费用。 |  |
| species_medium_fates | pipeline_delivery | 保持真实货物组分载运介质化学清洗原生能源台账。区分保留管存库存内部回收回用、真实外部回收产品、收集废水污泥废物及逐物质空气水土释放。货物组分损失或未知计量差不自动成为基本流排放，被运 CO2 只有真实释放且有碳源接收者证据时才成为大气 CO2。 | phmsa-product-context |

## 6. 过程清单结构

每张清单流卡仅代表一个可独立识别的产品、物料配方、废物流、物质或供应服务，具有兼容的端口、属性和单位。完整供应总成或实际收集的混合物流可有一个身份，其已含组分不得另列重复交换。第8节cp_expand_协议是必须落实的身份识别要求，不得当作选定流或交换数量。逐项记录真实适用性，以独立行标识列出全部具体交换；完整保留适用范围，未发生须有证据。尚未展开或未知的要求属于不完整，不得当作零。改为采集协议不等于解决缺失身份，也不免除生命周期、分配、计量或边界义务。

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| pipeline_delivery | 其他货物管道交付运输服务 | required | 真实适用承运，物理分支按实际作业条件纳入 | foreground | accepted_pipeline_delivery |

一个真实服务过程拥有运行材料资产供应商排放协议，内部货物介质转移不增加最终输出，数据包完成前各条件总括须按真实情况展开逐项具体交换。

### 过程：其他货物管道交付运输服务 (`pipeline_delivery`)

#### 输入

##### 产品流

###### 交流电 (`pump_ac`)

仅为有记录计量损失供应商接口真实兼容外部交流泵驱动供应。真实直流其他供应或内部压力能源回收须自身身份接口。

- 选定流：交流电 `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- 流属性/单位：Net calorific value / kWh
- 数量规则：实际归属原生量按真实验收货物kg归一化一次，遵循明确计算规则。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每个声明的参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_operation`
- 来源：

###### 交流电 (`compressor_ac`)

实际包含独立压缩温控辅助外部交流计量，不重复完整泵站场站供应商能耗或内部转换电。

- 选定流：交流电 `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- 流属性/单位：Net calorific value / kWh
- 数量规则：实际归属原生量按真实验收货物kg归一化一次，遵循明确计算规则。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每个声明的参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_operation`
- 来源：

###### 柴油 (`aux_diesel`)

仅为真实站点备用维护作业兼容柴油，具真实牌号配方来源及供应库存燃烧泄漏回收记录，整配方与组分替代互斥。

- 选定流：柴油 `9d258d75-6792-4f1c-9856-81602ed8f816`
- 流属性/单位：Mass / kg
- 数量规则：实际归属原生量按真实验收货物kg归一化一次，遵循明确计算规则。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每个声明的参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_operation`
- 来源：

###### 自来水 (`tap_cleaning`)

仅为自身接口真实兼容供应自来水清洗支持，不将盐水工艺载运介质改名自来水，不从管容假定水密度数量。

- 选定流：自来水 `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- 流属性/单位：Volume / m3
- 数量规则：实际归属原生量按真实验收货物kg归一化一次，遵循明确计算规则。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每个声明的参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_maintenance`
- 来源：

##### 基本流

#### 输出

##### 产品流

###### 真实明确其他货物的管道交付运输服务 (`accepted_pipeline_delivery`)

真实运输接口按预先申明混合物组分固体基准验收明确货物1kg的运输服务。此处不新制造货物。原约真实合同混合物组分水随该实测验收混合物计一次，固体组分专属基准排除载运水。独立补充冲洗循环水、管存失败提名不创造独立额外输出，稀释或事后切基准不是验收。

- 选定流：真实明确其他货物的管道交付运输服务
- 流属性/单位：Mass / kg
- 数量规则：1 kg
- 数值来源模式：`fixed_value`
- 适用范围：`site_specific`
- 归一化基准：每个声明的参考流
- 基准类型：`reference_flow`
- 证据类型：`method_formula`
- 采集协议：`cp_service`
- 来源：`ghg-product-2011`

##### 废物流

###### 废润滑油 (`spent_oil`)

仅真实原生接口产生兼容废石油基合成油，真实接收处理独立识别，不等于新油供应。

- 选定流：废润滑油 `55d93375-7f04-4166-b2a2-88ce929051a5`
- 流属性/单位：Mass / kg
- 数量规则：实际归属原生量按真实验收货物kg归一化一次，遵循明确计算规则。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每个声明的参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_maintenance`
- 来源：

##### 基本流

###### 二氧化碳（化石源） (`fossil_co2_air`)

仅证据支持燃料燃烧货物损失或其他来源真实化石CO2空气未特指释放，不代表被运保留CO2。已知子区室须自身身份，不按货名推定化石生物碳源。

- 选定流：二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 流属性/单位：Mass / kg
- 数量规则：实际归属原生量按真实验收货物kg归一化一次，遵循明确计算规则。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每个声明的参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_emissions`
- 来源：

###### 二氧化碳（生物源） (`biogenic_co2_air`)

仅真实证据支持生物CO2空气未特指释放，不是永久捕集封存抵扣或通用货物CO2，须真实来源接收者。已知子区室须自身身份，同释放供应商不重复。

- 选定流：二氧化碳（生物源） `08a91e70-3ddc-11dd-9c15-0050c2490048`
- 流属性/单位：Mass / kg
- 数量规则：实际归属原生量按真实验收货物kg归一化一次，遵循明确计算规则。
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
| direct_first | pipeline_delivery | 共有池剩余归属前，先直接归属专属商品批次期间调理场站实测资源。枚举共用资产原生资源的全部真实独立货物交付及其他服务。同用 kg 不代表不同货物基准路线相态压质义务可比。 | ghg-product-2011 |
| causal_pools | pipeline_delivery | 采用有支持真实因果功兼容质量距离体积时间压力高差温控作业或原生计量资源驱动。载运介质回送启停充管待机清洗失败作业在有证据服务池归属一次。额定管容不同商品单位相加运费均分或默认固体浆液因子不是分配证据。 |  |
| same_asset_life | pipeline_delivery | 按原生交付资产量 Q_asset 乘真实研究兼容作业 U_studied 与有记录正值同资产全部使用者寿命作业 U_life 之比，再按 M 除一次。纳入实际服务其他商品客户运输储存功能期间，初始制造更换维护报废互斥，不向每批每 kg 或客户计整条建设。 |  |
| reject_recovery | pipeline_delivery | 真实不合格失败回送损失保留货物介质作业及产生期间，与实际所有者接收者关联。真实再处理回收转移替换货物责任废物处理直接释放分离，不自动煤化工生产水回用替代产品或碳储存抵扣。原约变更验收须真实时序可比输出，不事后改失败分母。 |  |

## 8. 前景数据采集、计算与质量规则

验收交付因果池原生需求寿命组分台账公式是本PCR明确核算选择，来源仅支持限定分类定性物理背景或一般生命周期原则。不设通用浆浓密度压力能耗损失寿命回收排放因子，真实数量方法须兼容记录来源及不确定性。

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_service | pipeline_delivery | accepted_pipeline_delivery;other_intended_services | actual_pipeline_custody_acceptance | contract/period;cargo_identity_composition_grade_phase;predeclared_mixture_constituent_solids_basis;actual_samples_moisture_density_state;receipt_delivery_gates;original_quality_pressure_temperature_time;chronological_amendments;accepted_delivered_mass_M;actual_distance_route;batch_continuous;rejected_failed_returned_retained;all_outputs | 按原约真实变更货物基准接口质量核对真实验收管道交付，原约合同验收混合物水成分计一次，固体组分专属基准排除载运水，不创造独立补充冲洗循环输出，也不靠稀释切基准改善M。提名开票泵送循环管存分离，记录校准真实转换及可比M而非运力。 按参考计量口径汇总唯一且已验收的合格产出作为分母，单列不合格事件及其资源责任。参考量保持规定值，仅归属的清单总量除以正分母。 | kg、实际货物及状态的原生单位、km、h | 每真实事件及对齐批次连续队列 | 真实报告期间及披露全寿命接口 | 全部真实管线站场调理场址供应商及全部使用者 | 每个声明的参考流 | 原始校准计量取样保管接收记录范围及不确定性保存各实测操作数的来源及原生口径，注明实际采用的换算或归属依据，以及所供结果是否已按该参考流计量。 |
| cp_operation | pipeline_delivery | pump_ac;compressor_ac;aux_diesel;other_native_energy | native_pipeline_energy_duty | segment/station/driver;actual_route_distance_elevation;pressure_temperature_phase_flow;meter_waveform_loss_gate;native_energy_grade_source;cargo_withdrawn_for_drivefuel_upstream_supply_owner_coverage;opening_supply_stock_withdrawal_burn_spill;start_stop_standby_fill_recirc_pig_flush_failed_return;thermal_duty;internal_recovery_external_export;all_users_sites_period | 计量真实原生泵压缩温控辅助资源作业库存使用供应商范围，另行记录真实货物作燃料提取原生需求及真实所有者兼容上游燃料供应，按精确供应商覆盖后计一次，不把全部普通被运货物作制造投入。记录来源交流直流接口及独立内部压力能量回收，归属真实全部使用者池后按M除一次。 原始观测和对账总量保留其记录口径。负担行只分配仍共享的总量，已归属总量仅除以同队列、同交接点的正合格产出；已与该参考流等效的结果原值沿用。零产出时保留负担并记录去向。 | kg、kWh、实际能源和作业的原生单位、h | 每真实事件及对齐批次连续队列 | 真实报告期间及披露全寿命接口 | 全部真实管线站场调理场址供应商及全部使用者 | 每个声明的参考流 | 原始校准计量取样保管接收记录范围及不确定性保存各实测操作数的来源及原生口径，注明实际采用的换算或归属依据，以及所供结果是否已按该参考流计量。 |
| cp_material | pipeline_delivery | carrier_medium;treatment_additives;actual_replacement_cargo;actual_environment_inputs;external_recovered_product;collected_wastewater;contaminated_residues | cargo_component_medium_stock_fate | cargo/component/species;receipt_delivery_samples_moisture_solids;linepack_tank_opening_closing;new_medium_source_quality;internal_return_recirc;additive_supply_use;cargo_withdrawal_to_fuel_owner_native_supply_coverage;conditioning_before_after;actual_replacement_owner_native_quantity;rejected_returned_external_recovered_waste_release;receiver_native_mass_volume_state;unresolved_residual | 按真实实测状态成分核对组分载运介质台账，内部流交付库存不同外部去向互斥。真实货物转燃料提取原生使用及上游燃料供应所有者覆盖记录一次，与普通接收验收交付分离。记录真实调理供应状态残余替换责任，供应水取水下游处理覆盖不重叠。 原始观测和对账总量保留其记录口径。负担行只分配仍共享的总量，已归属总量仅除以同队列、同交接点的正合格产出；已与该参考流等效的结果原值沿用。零产出时保留负担并记录去向。各项独立实测交付、排放及移交按各自交接点记录，负担按其适用规则分配。 | kg、按实际干湿状态和组分确定的原生单位、m3 | 每真实事件及对齐批次连续队列 | 真实报告期间及披露全寿命接口 | 全部真实管线站场调理场址供应商及全部使用者 | 每个声明的参考流 | 原始校准计量取样保管接收记录范围及不确定性保存各实测操作数的来源及原生口径，注明实际采用的换算或归属依据，以及所供结果是否已按该参考流计量。 |
| cp_assets | pipeline_delivery | pipe_assets;station_assets;terminal_assets | same_asset_all_user_life | actual_asset_material_configuration_length;native_delivered_quantity;construction_initial_parts;studied_compatible_duty;positive_same_asset_all_user_lifetime_duty;all_commodities_customers_functions_sites_periods;replacement_maintenance_retirement;provider_coverage_forecast_uncertainty | 各真实管线站场调理资产原生供应与有记录正值全部使用者寿命作业匹配，保持真实使用者期间及互斥制造初始更换维护报废接口，不默认每kg完整资产。 原始观测和对账总量保留其记录口径。负担行只分配仍共享的总量，已归属总量仅除以同队列、同交接点的正合格产出；已与该参考流等效的结果原值沿用。零产出时保留负担并记录去向。 | 实际资产原生单位及相容的作业单位 | 每真实事件及对齐批次连续队列 | 真实报告期间及披露全寿命接口 | 全部真实管线站场调理场址供应商及全部使用者 | 每个声明的参考流 | 原始校准计量取样保管接收记录范围及不确定性保存各实测操作数的来源及原生口径，注明实际采用的换算或归属依据，以及所供结果是否已按该参考流计量。 |
| cp_maintenance | pipeline_delivery | maintenance_supplies;tap_cleaning;spent_oil;retired_wastes | actual_maintenance_cleaning_fate | asset/event;part_pig_oil_coating_cathodic_chemical_refrigerant;native_supply_opening_closing_use_recovery;clean_flush_receiver;actual_material_waste_quantity;provider_phase_period_coverage | 读取真实清洗清管维护工单库存接收记录，识别物质材料状态原生接口供应商覆盖初始更换及真实收集释放回收去向，期末保留内部回收不是外部输出。 原始观测和对账总量保留其记录口径。负担行只分配仍共享的总量，已归属总量仅除以同队列、同交接点的正合格产出；已与该参考流等效的结果原值沿用。零产出时保留负担并记录去向。各项独立实测交付、排放及移交按各自交接点记录，负担按其适用规则分配。 | kg、m3 及实际原生单位 | 每真实事件及对齐批次连续队列 | 真实报告期间及披露全寿命接口 | 全部真实管线站场调理场址供应商及全部使用者 | 每个声明的参考流 | 原始校准计量取样保管接收记录范围及不确定性保存各实测操作数的来源及原生口径，注明实际采用的换算或归属依据，以及所供结果是否已按该参考流计量。 |
| cp_provider | pipeline_delivery | subcontract_pipeline;included_terminal_services | actual_native_provider_scope | provider_function;actual_cargo_basis_phase_gates_quality;native_unit_demand;distance_pressure_state_duration;included_missing_supply_energy_asset_waste_cells;capture_storage_manufacture_interface;site_period_alluser_share | 核实真实兼容管道场站调理功能原生需求及精确已含阶段事件场址期间，缩放同单位需求替代已含组成一次并补全必要生命周期，独立捕集储存制造在真实运输接口外。 原始观测和对账总量保留其记录口径。负担行只分配仍共享的总量，已归属总量仅除以同队列、同交接点的正合格产出；已与该参考流等效的结果原值沿用。零产出时保留负担并记录去向。 | 供应方实际原生单位 | 每真实事件及对齐批次连续队列 | 真实报告期间及披露全寿命接口 | 全部真实管线站场调理场址供应商及全部使用者 | 每个声明的参考流 | 原始校准计量取样保管接收记录范围及不确定性保存各实测操作数的来源及原生口径，注明实际采用的换算或归属依据，以及所供结果是否已按该参考流计量。 |
| cp_emissions | pipeline_delivery | fossil_co2_air;biogenic_co2_air;other_substance_releases | actual_substance_source_receiver | event/component/substance_CAS;native_phase_composition;source_fossil_biogenic_origin;leak_permeation_vent_blowdown_flare_burn_wear;measured_release_or_supported_method_activity;actual_medium_subcompartment;collected_vs_direct;provider_coverage_factor_uncertainty | 采用真实逐物质测量或兼容来源方法活动成分碳源接收区室，货物损失管存差额本身不是大气排放，区分火炬转化直接放空及CO2储存主张，不重复上游供应商已含释放。 原始观测和对账总量保留其记录口径。负担行只分配仍共享的总量，已归属总量仅除以同队列、同交接点的正合格产出；已与该参考流等效的结果原值沿用。零产出时保留负担并记录去向。各项独立实测交付、排放及移交按各自交接点记录，负担按其适用规则分配。 | 物质质量（kg）及实际活动原生单位 | 每真实事件及对齐批次连续队列 | 真实报告期间及披露全寿命接口 | 全部真实管线站场调理场址供应商及全部使用者 | 每个声明的参考流 | 原始校准计量取样保管接收记录范围及不确定性保存各实测操作数的来源及原生口径，注明实际采用的换算或归属依据，以及所供结果是否已按该参考流计量。 |
| cp_expand_other_native_energy | pipeline_delivery | 必须展开身份 other_native_energy (inputs/product)：实际其他泵送压缩热冷供应 | collected_record | requirement_id=other_native_energy; process_id=pipeline_delivery; required_direction=inputs; required_flow_type=product; original_collection_protocol=cp_operation; applicability_evidence; occurrence_event_id; concrete_row_id; physical_identity; formulation_or_species; phase; carbon_origin; particle_fraction; source_compartment; receiving_compartment; supply_or_handover_gate; provider_covered_cells; asset_component_event_and_lifecycle_phase; native_property; native_unit; measured_native_quantity; source_record_id; allocation_all_users; normalization_denominator; per_identity_amount_calculation; verification_evidence; unresolved_reason; occurrence_to_row_reconciliation; carrier_and_supply_state; meter_id; integrated_energy_or_power_time; fuel_as_received_quantity; heating_value_basis; supply_return_state; responsible_failure_and_readiness; complete_provider_exclusion; applicability_decision_record; covered_concrete_rows; excluded_occurrence_reason; completion_evidence; observed_quantity_state; conversion_or_allocation_evidence | 条件真实直流气燃料氢蒸汽热冷等供应须自身原生状态单位计量作业，普通被运货物不是消耗燃料。真实货物另行提取作驱动支持燃料时，记录原生提取消耗量、兼容上游燃料供应负荷所有者一次，并纳入精确供应商覆盖，不计全部被运货物制造。内部能量回收不是新外部供应。 本范围是必须落实的身份识别要求，不是交换流。使用原节点采集协议及其记录，先按真实身份、端口及独立功能拆分，再将保留的数量、基准及证据规则分别用于各兼容具体行。不得将异质身份合并数量或从总括名称推断原生属性单位。未发生须有证据，适用性或身份未知则阻止完成。 以下采集条件仅限本项 inputs/product 的身份与交接点（实际其他泵送压缩热冷供应）。存在未被完整供应方覆盖的实际计量电力、购入热冷或消耗燃料时启用。区分载能体、供应状态和独立仪表，燃料组成及收到基数量与有用热分别识别；积分能量不再乘时长，功率须有时间积分证据；燃料换能量须匹配实际热值基准，供热须有供回状态。纳入应分摊待机、空载、失败和返工职责；总表仅协调分项，不再次相加。 每项适用性判断须留证。经证实不发生仅关闭所述范围和时段，缺记录仍未解决。发生的要求须将全部事件映射到具体row ID及相容原生数量，或精确映射至已覆盖行和供应方责任，并逐项说明排除理由。证据须覆盖身份、支持单位、计算、原始记录及全部去向；既有与新增分支对同一事件互斥覆盖，协议本身不作为交换。完成须无未分配事件、无重复覆盖、无相关数量或身份未决项。按有证据的实际分支采集原始字段。不适用的操作数须关联分支判定，适用但缺乏实测或依据的数量登记待决。 | 实测交付状态下的载能体量；能量采用有记录的仪表或热值口径 | 每次真实事件及每项有证据的未发生判断 | 完整声明队列及归属资产寿命关联事件 | 仅本过程真实责任场所及供应方 | 先对账原生事件总量，仅汇总身份、状态、单位、交接点及期间均相容的量。按相应计算规则逐行核算一次：只分配仍共享的负担，目标总量仅除以同口径的正合格产出；等效每参考流数值原值沿用，零产出期间不作除法并保留处置记录。 | 保留仪表期间、供应状态及交接点。积分能量已含时长；仅在对应路线由功率和实测时长，或相容燃料量与有据热值计算能量。区分燃料提取、有用热冷交付及已覆盖的上游阶段。 对上述具体身份及相容输入口径，仅在数量的归属和归一化状态与下式前提匹配时使用该规则：实际归属原生量按真实验收货物kg归一化一次，遵循明确计算规则。 保留原始凭据、实际采用的系数和结果单位。数值来源模式：calculated_value；适用范围：site_specific；归一化基准：每个声明的参考流；基准类型：reference_flow；证据类型：calculated_from_collection；采集协议：cp_operation；来源：。须有原始记录、精确原生支持及逐具体行核验；这些规则不提供缺失身份或数值。 完成判据：check_occurrence_completion。 |
| cp_expand_pipe_assets | pipeline_delivery | 必须展开身份 pipe_assets (inputs/product)：实际管线涂层保护及通道工程 | collected_record | requirement_id=pipe_assets; process_id=pipeline_delivery; required_direction=inputs; required_flow_type=product; original_collection_protocol=cp_assets; applicability_evidence; occurrence_event_id; concrete_row_id; physical_identity; formulation_or_species; phase; carbon_origin; particle_fraction; source_compartment; receiving_compartment; supply_or_handover_gate; provider_covered_cells; asset_component_event_and_lifecycle_phase; native_property; native_unit; measured_native_quantity; source_record_id; allocation_all_users; normalization_denominator; per_identity_amount_calculation; verification_evidence; unresolved_reason; occurrence_to_row_reconciliation; asset_or_reusable_id; model_configuration; included_initial_components; lifecycle_phase; manufacture_native_quantity; target_duty; all_user_same_cohort_lifetime_duty; replacement_event; provider_coverage_cells; applicability_decision_record; covered_concrete_rows; excluded_occurrence_reason; completion_evidence; observed_quantity_state; conversion_or_allocation_evidence; supply_or_service_gate; accepted_service_demand; provider_functional_unit; provider_intensity_basis; covered_lifecycle_stages | 真实材料口径长度配置及地面通道工程涂层阴极保护须原生制造建设全部使用者寿命作业及覆盖阶段，不以商品制造或通用运输身份替代。 本范围是必须落实的身份识别要求，不是交换流。使用原节点采集协议及其记录，先按真实身份、端口及独立功能拆分，再将保留的数量、基准及证据规则分别用于各兼容具体行。不得将异质身份合并数量或从总括名称推断原生属性单位。未发生须有证据，适用性或身份未知则阻止完成。 对本项规定的实体资产或周转品，核实供应交接点、初始部件以及实际替换、维护、清洗、失败和退役记录。租赁或综合供应合同须核实覆盖范围；本项包含已交付服务时按实际验收的原生需求计量，仅另行追溯未覆盖的资产阶段。直接建模资产按同队列目标作业量与全用户有据正寿命作业量之比分配，禁止将整个设施归给一个服务。 每项适用性判断须留证。经证实不发生仅关闭所述范围和时段，缺记录仍未解决。发生的要求须将全部事件映射到具体row ID及相容原生数量，或精确映射至已覆盖行和供应方责任，并逐项说明排除理由。证据须覆盖身份、支持单位、计算、原始记录及全部去向；既有与新增分支对同一事件互斥覆盖，协议本身不作为交换。完成须无未分配事件、无重复覆盖、无相关数量或身份未决项。按有证据的实际分支采集原始字段。不适用的操作数须关联分支判定，适用但缺乏实测或依据的数量登记待决。 | 实体资产或周转品按已核实的制造或供应单位；同一队列的相容作业量；范围内的交付服务用其原生功能单位 | 每次真实事件及每项有证据的未发生判断 | 完整声明队列及归属资产寿命关联事件 | 仅本过程真实责任场所及供应方 | 先对账原生事件总量，仅汇总身份、状态、单位、交接点及期间均相容的量。按相应计算规则逐行核算一次：只分配仍共享的负担，目标总量仅除以同口径的正合格产出；等效每参考流数值原值沿用，零产出期间不作除法并保留处置记录。 | 实体资产按有记录的供应交接量乘目标作业量与同队列全用户正寿命作业量之比，保留配置、投运、更换及退役或剩余寿命记录。范围内如有已交付服务，按已核实原生强度乘相容交付需求，留存覆盖凭据，未覆盖阶段单列。 对该交接点相容的资产量或已独立核实的服务结果，仅在数量的归属和归一化状态与下式前提匹配时使用该规则：实际归属原生量按真实验收货物kg归一化一次，遵循明确计算规则。 保留原始凭据、实际采用的系数和结果单位。数值来源模式：calculated_value；适用范围：site_specific；归一化基准：每个声明的参考流；基准类型：reference_flow；证据类型：calculated_from_collection；采集协议：cp_assets；来源：。须有原始记录、精确原生支持及逐具体行核验；这些规则不提供缺失身份或数值。 完成判据：check_occurrence_completion。 |
| cp_expand_station_assets | pipeline_delivery | 必须展开身份 station_assets (inputs/product)：实际泵压缩机驱动控制资产 | collected_record | requirement_id=station_assets; process_id=pipeline_delivery; required_direction=inputs; required_flow_type=product; original_collection_protocol=cp_assets; applicability_evidence; occurrence_event_id; concrete_row_id; physical_identity; formulation_or_species; phase; carbon_origin; particle_fraction; source_compartment; receiving_compartment; supply_or_handover_gate; provider_covered_cells; asset_component_event_and_lifecycle_phase; native_property; native_unit; measured_native_quantity; source_record_id; allocation_all_users; normalization_denominator; per_identity_amount_calculation; verification_evidence; unresolved_reason; occurrence_to_row_reconciliation; asset_or_reusable_id; model_configuration; included_initial_components; lifecycle_phase; manufacture_native_quantity; target_duty; all_user_same_cohort_lifetime_duty; replacement_event; provider_coverage_cells; applicability_decision_record; covered_concrete_rows; excluded_occurrence_reason; completion_evidence; observed_quantity_state; conversion_or_allocation_evidence; supply_or_service_gate; accepted_service_demand; provider_functional_unit; provider_intensity_basis; covered_lifecycle_stages | 逐项识别真实驱动压力温控系统计量阀站资产原生供应生命周期接口及全部使用者寿命需求，初始更换维护报废分离。 本范围是必须落实的身份识别要求，不是交换流。使用原节点采集协议及其记录，先按真实身份、端口及独立功能拆分，再将保留的数量、基准及证据规则分别用于各兼容具体行。不得将异质身份合并数量或从总括名称推断原生属性单位。未发生须有证据，适用性或身份未知则阻止完成。 对本项规定的实体资产或周转品，核实供应交接点、初始部件以及实际替换、维护、清洗、失败和退役记录。租赁或综合供应合同须核实覆盖范围；本项包含已交付服务时按实际验收的原生需求计量，仅另行追溯未覆盖的资产阶段。直接建模资产按同队列目标作业量与全用户有据正寿命作业量之比分配，禁止将整个设施归给一个服务。 每项适用性判断须留证。经证实不发生仅关闭所述范围和时段，缺记录仍未解决。发生的要求须将全部事件映射到具体row ID及相容原生数量，或精确映射至已覆盖行和供应方责任，并逐项说明排除理由。证据须覆盖身份、支持单位、计算、原始记录及全部去向；既有与新增分支对同一事件互斥覆盖，协议本身不作为交换。完成须无未分配事件、无重复覆盖、无相关数量或身份未决项。按有证据的实际分支采集原始字段。不适用的操作数须关联分支判定，适用但缺乏实测或依据的数量登记待决。 | 实体资产或周转品按已核实的制造或供应单位；同一队列的相容作业量；范围内的交付服务用其原生功能单位 | 每次真实事件及每项有证据的未发生判断 | 完整声明队列及归属资产寿命关联事件 | 仅本过程真实责任场所及供应方 | 先对账原生事件总量，仅汇总身份、状态、单位、交接点及期间均相容的量。按相应计算规则逐行核算一次：只分配仍共享的负担，目标总量仅除以同口径的正合格产出；等效每参考流数值原值沿用，零产出期间不作除法并保留处置记录。 | 实体资产按有记录的供应交接量乘目标作业量与同队列全用户正寿命作业量之比，保留配置、投运、更换及退役或剩余寿命记录。范围内如有已交付服务，按已核实原生强度乘相容交付需求，留存覆盖凭据，未覆盖阶段单列。 对该交接点相容的资产量或已独立核实的服务结果，仅在数量的归属和归一化状态与下式前提匹配时使用该规则：实际归属原生量按真实验收货物kg归一化一次，遵循明确计算规则。 保留原始凭据、实际采用的系数和结果单位。数值来源模式：calculated_value；适用范围：site_specific；归一化基准：每个声明的参考流；基准类型：reference_flow；证据类型：calculated_from_collection；采集协议：cp_assets；来源：。须有原始记录、精确原生支持及逐具体行核验；这些规则不提供缺失身份或数值。 完成判据：check_occurrence_completion。 |
| cp_expand_terminal_assets | pipeline_delivery | 必须展开身份 terminal_assets (inputs/product)：实际罐制浆脱水及场站资产 | collected_record | requirement_id=terminal_assets; process_id=pipeline_delivery; required_direction=inputs; required_flow_type=product; original_collection_protocol=cp_assets; applicability_evidence; occurrence_event_id; concrete_row_id; physical_identity; formulation_or_species; phase; carbon_origin; particle_fraction; source_compartment; receiving_compartment; supply_or_handover_gate; provider_covered_cells; asset_component_event_and_lifecycle_phase; native_property; native_unit; measured_native_quantity; source_record_id; allocation_all_users; normalization_denominator; per_identity_amount_calculation; verification_evidence; unresolved_reason; occurrence_to_row_reconciliation; asset_or_reusable_id; model_configuration; included_initial_components; lifecycle_phase; manufacture_native_quantity; target_duty; all_user_same_cohort_lifetime_duty; replacement_event; provider_coverage_cells; applicability_decision_record; covered_concrete_rows; excluded_occurrence_reason; completion_evidence; observed_quantity_state; conversion_or_allocation_evidence; supply_or_service_gate; accepted_service_demand; provider_functional_unit; provider_intensity_basis; covered_lifecycle_stages | 条件真实储罐搅拌研磨混合分离介质回送装卸资产须匹配已含承运作业接口，接口外独立货物生产分离，不假定通用制浆厂。 本范围是必须落实的身份识别要求，不是交换流。使用原节点采集协议及其记录，先按真实身份、端口及独立功能拆分，再将保留的数量、基准及证据规则分别用于各兼容具体行。不得将异质身份合并数量或从总括名称推断原生属性单位。未发生须有证据，适用性或身份未知则阻止完成。 对本项规定的实体资产或周转品，核实供应交接点、初始部件以及实际替换、维护、清洗、失败和退役记录。租赁或综合供应合同须核实覆盖范围；本项包含已交付服务时按实际验收的原生需求计量，仅另行追溯未覆盖的资产阶段。直接建模资产按同队列目标作业量与全用户有据正寿命作业量之比分配，禁止将整个设施归给一个服务。 每项适用性判断须留证。经证实不发生仅关闭所述范围和时段，缺记录仍未解决。发生的要求须将全部事件映射到具体row ID及相容原生数量，或精确映射至已覆盖行和供应方责任，并逐项说明排除理由。证据须覆盖身份、支持单位、计算、原始记录及全部去向；既有与新增分支对同一事件互斥覆盖，协议本身不作为交换。完成须无未分配事件、无重复覆盖、无相关数量或身份未决项。按有证据的实际分支采集原始字段。不适用的操作数须关联分支判定，适用但缺乏实测或依据的数量登记待决。 | 实体资产或周转品按已核实的制造或供应单位；同一队列的相容作业量；范围内的交付服务用其原生功能单位 | 每次真实事件及每项有证据的未发生判断 | 完整声明队列及归属资产寿命关联事件 | 仅本过程真实责任场所及供应方 | 先对账原生事件总量，仅汇总身份、状态、单位、交接点及期间均相容的量。按相应计算规则逐行核算一次：只分配仍共享的负担，目标总量仅除以同口径的正合格产出；等效每参考流数值原值沿用，零产出期间不作除法并保留处置记录。 | 实体资产按有记录的供应交接量乘目标作业量与同队列全用户正寿命作业量之比，保留配置、投运、更换及退役或剩余寿命记录。范围内如有已交付服务，按已核实原生强度乘相容交付需求，留存覆盖凭据，未覆盖阶段单列。 对该交接点相容的资产量或已独立核实的服务结果，仅在数量的归属和归一化状态与下式前提匹配时使用该规则：实际归属原生量按真实验收货物kg归一化一次，遵循明确计算规则。 保留原始凭据、实际采用的系数和结果单位。数值来源模式：calculated_value；适用范围：site_specific；归一化基准：每个声明的参考流；基准类型：reference_flow；证据类型：calculated_from_collection；采集协议：cp_assets；来源：。须有原始记录、精确原生支持及逐具体行核验；这些规则不提供缺失身份或数值。 完成判据：check_occurrence_completion。 |
| cp_expand_maintenance_supplies | pipeline_delivery | 必须展开身份 maintenance_supplies (inputs/product)：实际部件润滑清洗防护用品 | collected_record | requirement_id=maintenance_supplies; process_id=pipeline_delivery; required_direction=inputs; required_flow_type=product; original_collection_protocol=cp_maintenance; applicability_evidence; occurrence_event_id; concrete_row_id; physical_identity; formulation_or_species; phase; carbon_origin; particle_fraction; source_compartment; receiving_compartment; supply_or_handover_gate; provider_covered_cells; asset_component_event_and_lifecycle_phase; native_property; native_unit; measured_native_quantity; source_record_id; allocation_all_users; normalization_denominator; per_identity_amount_calculation; verification_evidence; unresolved_reason; occurrence_to_row_reconciliation; operation_record; material_sku; formulation_grade_state; independent_function; supplier; package_tare; opening_stock; net_receipts; unused_returns; closing_stock; failed_use; destination; applicability_decision_record; covered_concrete_rows; excluded_occurrence_reason; completion_evidence; observed_quantity_state; conversion_or_allocation_evidence | 逐项识别真实更换密封油过滤清管防腐清洗制冷物质及原生接口，初始更换回收库存真实释放及供应商覆盖分离。 本范围是必须落实的身份识别要求，不是交换流。使用原节点采集协议及其记录，先按真实身份、端口及独立功能拆分，再将保留的数量、基准及证据规则分别用于各兼容具体行。不得将异质身份合并数量或从总括名称推断原生属性单位。未发生须有证据，适用性或身份未知则阻止完成。 以下采集条件仅限本项 inputs/product 的身份与交接点（实际部件润滑清洗防护用品）。仅对实际发生的所述作业及独立消耗SKU或实物启用。记录材料或配方、等级状态、功能、供应方、扣包装皮重后的净量、库存变动、未用退回和去向。独立供应的包装衬材按材料及一次性或复用状态区分；完整配方或物理总成保留一个身份，组成信息不相加，不同外购品不得共用汇总数量。纳入失败使用、维护及返工，记录真实消耗而非仅采购量。 每项适用性判断须留证。经证实不发生仅关闭所述范围和时段，缺记录仍未解决。发生的要求须将全部事件映射到具体row ID及相容原生数量，或精确映射至已覆盖行和供应方责任，并逐项说明排除理由。证据须覆盖身份、支持单位、计算、原始记录及全部去向；既有与新增分支对同一事件互斥覆盖，协议本身不作为交换。完成须无未分配事件、无重复覆盖、无相关数量或身份未决项。按有证据的实际分支采集原始字段。不适用的操作数须关联分支判定，适用但缺乏实测或依据的数量登记待决。 | 实际品项、配方或物件在规定交接点及状态下的原生数量 | 每次真实事件及每项有证据的未发生判断 | 完整声明队列及归属资产寿命关联事件 | 仅本过程真实责任场所及供应方 | 先对账原生事件总量，仅汇总身份、状态、单位、交接点及期间均相容的量。按相应计算规则逐行核算一次：只分配仍共享的负担，目标总量仅除以同口径的正合格产出；等效每参考流数值原值沿用，零产出期间不作除法并保留处置记录。 | 逐批核对收货、期初期末、退回、耗用及互斥去向。件数或体积折质量须有单件质量或相容状态密度依据；产品身份以外的包装和衬材独立登记。 对上述具体身份及相容输入口径，仅在数量的归属和归一化状态与下式前提匹配时使用该规则：实际归属原生量按真实验收货物kg归一化一次，遵循明确计算规则。 保留原始凭据、实际采用的系数和结果单位。数值来源模式：calculated_value；适用范围：site_specific；归一化基准：每个声明的参考流；基准类型：reference_flow；证据类型：calculated_from_collection；采集协议：cp_maintenance；来源：。须有原始记录、精确原生支持及逐具体行核验；这些规则不提供缺失身份或数值。 完成判据：check_occurrence_completion。 |
| cp_expand_carrier_medium | pipeline_delivery | 必须展开身份 carrier_medium (inputs/product)：实际供应载运补充冲洗介质 | collected_record | requirement_id=carrier_medium; process_id=pipeline_delivery; required_direction=inputs; required_flow_type=product; original_collection_protocol=cp_material; applicability_evidence; occurrence_event_id; concrete_row_id; physical_identity; formulation_or_species; phase; carbon_origin; particle_fraction; source_compartment; receiving_compartment; supply_or_handover_gate; provider_covered_cells; asset_component_event_and_lifecycle_phase; native_property; native_unit; measured_native_quantity; source_record_id; allocation_all_users; normalization_denominator; per_identity_amount_calculation; verification_evidence; unresolved_reason; occurrence_to_row_reconciliation; operation_record; material_sku; formulation_grade_state; independent_function; supplier; package_tare; opening_stock; net_receipts; unused_returns; closing_stock; failed_use; destination; applicability_decision_record; covered_concrete_rows; excluded_occurrence_reason; completion_evidence; observed_quantity_state; conversion_or_allocation_evidence | 各真实介质来源成分状态水质原生量所有者须记录，区分新供应内部循环回送库存交付合同货物组分外部回收，真实环境取水区别供应水产品。 本范围是必须落实的身份识别要求，不是交换流。使用原节点采集协议及其记录，先按真实身份、端口及独立功能拆分，再将保留的数量、基准及证据规则分别用于各兼容具体行。不得将异质身份合并数量或从总括名称推断原生属性单位。未发生须有证据，适用性或身份未知则阻止完成。 以下采集条件仅限本项 inputs/product 的身份与交接点（实际供应载运补充冲洗介质）。仅对实际发生的所述作业及独立消耗SKU或实物启用。记录材料或配方、等级状态、功能、供应方、扣包装皮重后的净量、库存变动、未用退回和去向。独立供应的包装衬材按材料及一次性或复用状态区分；完整配方或物理总成保留一个身份，组成信息不相加，不同外购品不得共用汇总数量。纳入失败使用、维护及返工，记录真实消耗而非仅采购量。 每项适用性判断须留证。经证实不发生仅关闭所述范围和时段，缺记录仍未解决。发生的要求须将全部事件映射到具体row ID及相容原生数量，或精确映射至已覆盖行和供应方责任，并逐项说明排除理由。证据须覆盖身份、支持单位、计算、原始记录及全部去向；既有与新增分支对同一事件互斥覆盖，协议本身不作为交换。完成须无未分配事件、无重复覆盖、无相关数量或身份未决项。按有证据的实际分支采集原始字段。不适用的操作数须关联分支判定，适用但缺乏实测或依据的数量登记待决。 | 实际品项、配方或物件在规定交接点及状态下的原生数量 | 每次真实事件及每项有证据的未发生判断 | 完整声明队列及归属资产寿命关联事件 | 仅本过程真实责任场所及供应方 | 先对账原生事件总量，仅汇总身份、状态、单位、交接点及期间均相容的量。按相应计算规则逐行核算一次：只分配仍共享的负担，目标总量仅除以同口径的正合格产出；等效每参考流数值原值沿用，零产出期间不作除法并保留处置记录。 | 逐批核对收货、期初期末、退回、耗用及互斥去向。件数或体积折质量须有单件质量或相容状态密度依据；产品身份以外的包装和衬材独立登记。 对上述具体身份及相容输入口径，仅在数量的归属和归一化状态与下式前提匹配时使用该规则：实际归属原生量按真实验收货物kg归一化一次，遵循明确计算规则。 保留原始凭据、实际采用的系数和结果单位。数值来源模式：calculated_value；适用范围：site_specific；归一化基准：每个声明的参考流；基准类型：reference_flow；证据类型：calculated_from_collection；采集协议：cp_material；来源：。须有原始记录、精确原生支持及逐具体行核验；这些规则不提供缺失身份或数值。 完成判据：check_occurrence_completion。 |
| cp_expand_treatment_additives | pipeline_delivery | 必须展开身份 treatment_additives (inputs/product)：实际运输调理及浆液添加剂 | collected_record | requirement_id=treatment_additives; process_id=pipeline_delivery; required_direction=inputs; required_flow_type=product; original_collection_protocol=cp_material; applicability_evidence; occurrence_event_id; concrete_row_id; physical_identity; formulation_or_species; phase; carbon_origin; particle_fraction; source_compartment; receiving_compartment; supply_or_handover_gate; provider_covered_cells; asset_component_event_and_lifecycle_phase; native_property; native_unit; measured_native_quantity; source_record_id; allocation_all_users; normalization_denominator; per_identity_amount_calculation; verification_evidence; unresolved_reason; occurrence_to_row_reconciliation; operation_record; material_sku; formulation_grade_state; independent_function; supplier; package_tare; opening_stock; net_receipts; unused_returns; closing_stock; failed_use; destination; applicability_decision_record; covered_concrete_rows; excluded_occurrence_reason; completion_evidence; observed_quantity_state; conversion_or_allocation_evidence | 真实悬浮絮凝缓蚀调理等包含供应须精确成分原生剂量所有者，不默认浆比配方或通用脱水处理。 本范围是必须落实的身份识别要求，不是交换流。使用原节点采集协议及其记录，先按真实身份、端口及独立功能拆分，再将保留的数量、基准及证据规则分别用于各兼容具体行。不得将异质身份合并数量或从总括名称推断原生属性单位。未发生须有证据，适用性或身份未知则阻止完成。 以下采集条件仅限本项 inputs/product 的身份与交接点（实际运输调理及浆液添加剂）。仅对实际发生的所述作业及独立消耗SKU或实物启用。记录材料或配方、等级状态、功能、供应方、扣包装皮重后的净量、库存变动、未用退回和去向。独立供应的包装衬材按材料及一次性或复用状态区分；完整配方或物理总成保留一个身份，组成信息不相加，不同外购品不得共用汇总数量。纳入失败使用、维护及返工，记录真实消耗而非仅采购量。 每项适用性判断须留证。经证实不发生仅关闭所述范围和时段，缺记录仍未解决。发生的要求须将全部事件映射到具体row ID及相容原生数量，或精确映射至已覆盖行和供应方责任，并逐项说明排除理由。证据须覆盖身份、支持单位、计算、原始记录及全部去向；既有与新增分支对同一事件互斥覆盖，协议本身不作为交换。完成须无未分配事件、无重复覆盖、无相关数量或身份未决项。按有证据的实际分支采集原始字段。不适用的操作数须关联分支判定，适用但缺乏实测或依据的数量登记待决。 | 实际品项、配方或物件在规定交接点及状态下的原生数量 | 每次真实事件及每项有证据的未发生判断 | 完整声明队列及归属资产寿命关联事件 | 仅本过程真实责任场所及供应方 | 先对账原生事件总量，仅汇总身份、状态、单位、交接点及期间均相容的量。按相应计算规则逐行核算一次：只分配仍共享的负担，目标总量仅除以同口径的正合格产出；等效每参考流数值原值沿用，零产出期间不作除法并保留处置记录。 | 逐批核对收货、期初期末、退回、耗用及互斥去向。件数或体积折质量须有单件质量或相容状态密度依据；产品身份以外的包装和衬材独立登记。 对上述具体身份及相容输入口径，仅在数量的归属和归一化状态与下式前提匹配时使用该规则：实际归属原生量按真实验收货物kg归一化一次，遵循明确计算规则。 保留原始凭据、实际采用的系数和结果单位。数值来源模式：calculated_value；适用范围：site_specific；归一化基准：每个声明的参考流；基准类型：reference_flow；证据类型：calculated_from_collection；采集协议：cp_material；来源：。须有原始记录、精确原生支持及逐具体行核验；这些规则不提供缺失身份或数值。 完成判据：check_occurrence_completion。 |
| cp_expand_subcontract_pipeline | pipeline_delivery | 必须展开身份 subcontract_pipeline (inputs/product)：实际分包其他货物管道运输 | collected_record | requirement_id=subcontract_pipeline; process_id=pipeline_delivery; required_direction=inputs; required_flow_type=product; original_collection_protocol=cp_provider; applicability_evidence; occurrence_event_id; concrete_row_id; physical_identity; formulation_or_species; phase; carbon_origin; particle_fraction; source_compartment; receiving_compartment; supply_or_handover_gate; provider_covered_cells; asset_component_event_and_lifecycle_phase; native_property; native_unit; measured_native_quantity; source_record_id; allocation_all_users; normalization_denominator; per_identity_amount_calculation; verification_evidence; unresolved_reason; occurrence_to_row_reconciliation; provider_contract; independent_function; provider_gates; native_functional_unit; delivered_quantity; covered_process_phase_cells; uncovered_foreground_rows; applicability_decision_record; covered_concrete_rows; excluded_occurrence_reason; completion_evidence; observed_quantity_state; conversion_or_allocation_evidence; provider_functional_unit; accepted_service_demand; provider_intensity_basis; covered_service_stages | 真实供应商功能货物基准相态接口长度压力质量及原生质量体积距离时间需求须匹配，按真实同单位原生需求缩放再/M一次，不自动体积能源吨公里转换。 本范围是必须落实的身份识别要求，不是交换流。使用原节点采集协议及其记录，先按真实身份、端口及独立功能拆分，再将保留的数量、基准及证据规则分别用于各兼容具体行。不得将异质身份合并数量或从总括名称推断原生属性单位。未发生须有证据，适用性或身份未知则阻止完成。 以下采集条件仅限本项 inputs/product 的身份与交接点（实际分包其他货物管道运输）。仅在本PCR范围内实际委托独立功能时启用。记录合同、交付服务功能、关口、原生功能单位、实际交付量及具体覆盖的过程和寿命阶段；逐项与自营活动比对，完整供应方或未覆盖前景活动仅计一次。不用金额、材料质量或假设件数替代真实功能；同一最终服务不通过外部最终产品供应方递归重复计入。 每项适用性判断须留证。经证实不发生仅关闭所述范围和时段，缺记录仍未解决。发生的要求须将全部事件映射到具体row ID及相容原生数量，或精确映射至已覆盖行和供应方责任，并逐项说明排除理由。证据须覆盖身份、支持单位、计算、原始记录及全部去向；既有与新增分支对同一事件互斥覆盖，协议本身不作为交换。完成须无未分配事件、无重复覆盖、无相关数量或身份未决项。按有证据的实际分支采集原始字段。不适用的操作数须关联分支判定，适用但缺乏实测或依据的数量登记待决。 | 已核实的合同交付功能单位；仅独立可计数且已验收的结果使用 Item(s) | 每次真实事件及每项有证据的未发生判断 | 完整声明队列及归属资产寿命关联事件 | 仅本过程真实责任场所及供应方 | 先对账原生事件总量，仅汇总身份、状态、单位、交接点及期间均相容的量。按相应计算规则逐行核算一次：只分配仍共享的负担，目标总量仅除以同口径的正合格产出；等效每参考流数值原值沿用，零产出期间不作除法并保留处置记录。 | 按指定交接点实际验收量计量。仅在单位强度换算为总负担时，以供应方强度乘同一原生单位的需求量。保留合同范围、验收、原生单位及覆盖阶段记录。仅按时间交付的功能以时长计量。 对按合同口径已验收的服务，仅在数量的归属和归一化状态与下式前提匹配时使用该规则：实际归属原生量按真实验收货物kg归一化一次，遵循明确计算规则。 保留原始凭据、实际采用的系数和结果单位。数值来源模式：calculated_value；适用范围：site_specific；归一化基准：每个声明的参考流；基准类型：reference_flow；证据类型：calculated_from_collection；采集协议：cp_provider；来源：。须有原始记录、精确原生支持及逐具体行核验；这些规则不提供缺失身份或数值。 完成判据：check_occurrence_completion。 |
| cp_expand_included_terminal_services | pipeline_delivery | 必须展开身份 included_terminal_services (inputs/product)：实际包含调理介质及场站服务 | collected_record | requirement_id=included_terminal_services; process_id=pipeline_delivery; required_direction=inputs; required_flow_type=product; original_collection_protocol=cp_provider; applicability_evidence; occurrence_event_id; concrete_row_id; physical_identity; formulation_or_species; phase; carbon_origin; particle_fraction; source_compartment; receiving_compartment; supply_or_handover_gate; provider_covered_cells; asset_component_event_and_lifecycle_phase; native_property; native_unit; measured_native_quantity; source_record_id; allocation_all_users; normalization_denominator; per_identity_amount_calculation; verification_evidence; unresolved_reason; occurrence_to_row_reconciliation; provider_contract; independent_function; provider_gates; native_functional_unit; delivered_quantity; covered_process_phase_cells; uncovered_foreground_rows; applicability_decision_record; covered_concrete_rows; excluded_occurrence_reason; completion_evidence; observed_quantity_state; conversion_or_allocation_evidence; provider_functional_unit; accepted_service_demand; provider_intensity_basis; covered_service_stages | 承运接口真实接收罐存调理分离回介质接收作业供应商须原生需求及精确覆盖供应能源资产废物，接口外独立制造捕集储存分离。 本范围是必须落实的身份识别要求，不是交换流。使用原节点采集协议及其记录，先按真实身份、端口及独立功能拆分，再将保留的数量、基准及证据规则分别用于各兼容具体行。不得将异质身份合并数量或从总括名称推断原生属性单位。未发生须有证据，适用性或身份未知则阻止完成。 以下采集条件仅限本项 inputs/product 的身份与交接点（实际包含调理介质及场站服务）。仅在本PCR范围内实际委托独立功能时启用。记录合同、交付服务功能、关口、原生功能单位、实际交付量及具体覆盖的过程和寿命阶段；逐项与自营活动比对，完整供应方或未覆盖前景活动仅计一次。不用金额、材料质量或假设件数替代真实功能；同一最终服务不通过外部最终产品供应方递归重复计入。 每项适用性判断须留证。经证实不发生仅关闭所述范围和时段，缺记录仍未解决。发生的要求须将全部事件映射到具体row ID及相容原生数量，或精确映射至已覆盖行和供应方责任，并逐项说明排除理由。证据须覆盖身份、支持单位、计算、原始记录及全部去向；既有与新增分支对同一事件互斥覆盖，协议本身不作为交换。完成须无未分配事件、无重复覆盖、无相关数量或身份未决项。按有证据的实际分支采集原始字段。不适用的操作数须关联分支判定，适用但缺乏实测或依据的数量登记待决。 | 已核实的合同交付功能单位；仅独立可计数且已验收的结果使用 Item(s) | 每次真实事件及每项有证据的未发生判断 | 完整声明队列及归属资产寿命关联事件 | 仅本过程真实责任场所及供应方 | 先对账原生事件总量，仅汇总身份、状态、单位、交接点及期间均相容的量。按相应计算规则逐行核算一次：只分配仍共享的负担，目标总量仅除以同口径的正合格产出；等效每参考流数值原值沿用，零产出期间不作除法并保留处置记录。 | 按指定交接点实际验收量计量。仅在单位强度换算为总负担时，以供应方强度乘同一原生单位的需求量。保留合同范围、验收、原生单位及覆盖阶段记录。仅按时间交付的功能以时长计量。 对按合同口径已验收的服务，仅在数量的归属和归一化状态与下式前提匹配时使用该规则：实际归属原生量按真实验收货物kg归一化一次，遵循明确计算规则。 保留原始凭据、实际采用的系数和结果单位。数值来源模式：calculated_value；适用范围：site_specific；归一化基准：每个声明的参考流；基准类型：reference_flow；证据类型：calculated_from_collection；采集协议：cp_provider；来源：。须有原始记录、精确原生支持及逐具体行核验；这些规则不提供缺失身份或数值。 完成判据：check_occurrence_completion。 |
| cp_expand_actual_replacement_cargo | pipeline_delivery | 必须展开身份 actual_replacement_cargo (inputs/product)：实际承运责任货物替换供应 | collected_record | requirement_id=actual_replacement_cargo; process_id=pipeline_delivery; required_direction=inputs; required_flow_type=product; original_collection_protocol=cp_material; applicability_evidence; occurrence_event_id; concrete_row_id; physical_identity; formulation_or_species; phase; carbon_origin; particle_fraction; source_compartment; receiving_compartment; supply_or_handover_gate; provider_covered_cells; asset_component_event_and_lifecycle_phase; native_property; native_unit; measured_native_quantity; source_record_id; allocation_all_users; normalization_denominator; per_identity_amount_calculation; verification_evidence; unresolved_reason; occurrence_to_row_reconciliation; operation_record; material_sku; formulation_grade_state; independent_function; supplier; package_tare; opening_stock; net_receipts; unused_returns; closing_stock; failed_use; destination; applicability_decision_record; covered_concrete_rows; excluded_occurrence_reason; completion_evidence; observed_quantity_state; conversion_or_allocation_evidence | 仅真实证据支持申明系统内替换责任，具精确货物原生交付量及供应商覆盖。普通受托货物接收为保管记录而非消耗制造投入，不向已覆盖同替换的货主保险方再计。 本范围是必须落实的身份识别要求，不是交换流。使用原节点采集协议及其记录，先按真实身份、端口及独立功能拆分，再将保留的数量、基准及证据规则分别用于各兼容具体行。不得将异质身份合并数量或从总括名称推断原生属性单位。未发生须有证据，适用性或身份未知则阻止完成。 以下采集条件仅限本项 inputs/product 的身份与交接点（实际承运责任货物替换供应）。仅对实际发生的所述作业及独立消耗SKU或实物启用。记录材料或配方、等级状态、功能、供应方、扣包装皮重后的净量、库存变动、未用退回和去向。独立供应的包装衬材按材料及一次性或复用状态区分；完整配方或物理总成保留一个身份，组成信息不相加，不同外购品不得共用汇总数量。纳入失败使用、维护及返工，记录真实消耗而非仅采购量。 每项适用性判断须留证。经证实不发生仅关闭所述范围和时段，缺记录仍未解决。发生的要求须将全部事件映射到具体row ID及相容原生数量，或精确映射至已覆盖行和供应方责任，并逐项说明排除理由。证据须覆盖身份、支持单位、计算、原始记录及全部去向；既有与新增分支对同一事件互斥覆盖，协议本身不作为交换。完成须无未分配事件、无重复覆盖、无相关数量或身份未决项。按有证据的实际分支采集原始字段。不适用的操作数须关联分支判定，适用但缺乏实测或依据的数量登记待决。 | 实际品项、配方或物件在规定交接点及状态下的原生数量 | 每次真实事件及每项有证据的未发生判断 | 完整声明队列及归属资产寿命关联事件 | 仅本过程真实责任场所及供应方 | 先对账原生事件总量，仅汇总身份、状态、单位、交接点及期间均相容的量。按相应计算规则逐行核算一次：只分配仍共享的负担，目标总量仅除以同口径的正合格产出；等效每参考流数值原值沿用，零产出期间不作除法并保留处置记录。 | 逐批核对收货、期初期末、退回、耗用及互斥去向。件数或体积折质量须有单件质量或相容状态密度依据；产品身份以外的包装和衬材独立登记。 对上述具体身份及相容输入口径，仅在数量的归属和归一化状态与下式前提匹配时使用该规则：实际归属原生量按真实验收货物kg归一化一次，遵循明确计算规则。 保留原始凭据、实际采用的系数和结果单位。数值来源模式：calculated_value；适用范围：site_specific；归一化基准：每个声明的参考流；基准类型：reference_flow；证据类型：calculated_from_collection；采集协议：cp_material；来源：。须有原始记录、精确原生支持及逐具体行核验；这些规则不提供缺失身份或数值。 完成判据：check_occurrence_completion。 |
| cp_expand_actual_environment_inputs | pipeline_delivery | 必须展开身份 actual_environment_inputs (inputs/elementary)：实际环境载运水及资源输入 | collected_record | requirement_id=actual_environment_inputs; process_id=pipeline_delivery; required_direction=inputs; required_flow_type=elementary; original_collection_protocol=cp_material; applicability_evidence; occurrence_event_id; concrete_row_id; physical_identity; formulation_or_species; phase; carbon_origin; particle_fraction; source_compartment; receiving_compartment; supply_or_handover_gate; provider_covered_cells; asset_component_event_and_lifecycle_phase; native_property; native_unit; measured_native_quantity; source_record_id; allocation_all_users; normalization_denominator; per_identity_amount_calculation; verification_evidence; unresolved_reason; occurrence_to_row_reconciliation; substance_identity; chemical_form; environmental_compartment; carbon_origin; particle_fraction_or_count_basis; measured_or_calculated_release; species_conversion_evidence; applicability_decision_record; covered_concrete_rows; excluded_occurrence_reason; completion_evidence; observed_quantity_state; conversion_or_allocation_evidence | 条件真实取水资源输入须来源区室资源身份数量所有者，供应产品水或上游已覆盖取水不能重复此交换。 本范围是必须落实的身份识别要求，不是交换流。使用原节点采集协议及其记录，先按真实身份、端口及独立功能拆分，再将保留的数量、基准及证据规则分别用于各兼容具体行。不得将异质身份合并数量或从总括名称推断原生属性单位。未发生须有证据，适用性或身份未知则阻止完成。 以下采集条件仅限本项 inputs/elementary 的身份与交接点（实际环境载运水及资源输入）。仅对由实际环境来源跨界进入的、有证据的资源摄取启用。记录具体物质及形态、来源或接收介质、适用的化石或生物碳来源、适用的粒径组分或粒子数粒径基础及采样期；保留元素与分子口径，换算须有化学计量和相容物种证据。收集物流中的污染物在实际环境排放边界前归接收物流，不用CO2、NOx、VOC、COD或泛颗粒物流代替缺失物种。 每项适用性判断须留证。经证实不发生仅关闭所述范围和时段，缺记录仍未解决。发生的要求须将全部事件映射到具体row ID及相容原生数量，或精确映射至已覆盖行和供应方责任，并逐项说明排除理由。证据须覆盖身份、支持单位、计算、原始记录及全部去向；既有与新增分支对同一事件互斥覆盖，协议本身不作为交换。完成须无未分配事件、无重复覆盖、无相关数量或身份未决项。按有证据的实际分支采集原始字段。不适用的操作数须关联分支判定，适用但缺乏实测或依据的数量登记待决。 | 本物质、资源或物理排放在实际环境介质的已核实原生属性与单位 | 每次真实事件及每项有证据的未发生判断 | 完整声明队列及归属资产寿命关联事件 | 仅本过程真实责任场所及供应方 | 先对账原生事件总量，仅汇总身份、状态、单位、交接点及期间均相容的量。按相应计算规则逐行核算一次：只分配仍共享的负担，目标总量仅除以同口径的正合格产出；等效每参考流数值原值沿用，零产出期间不作除法并保留处置记录。 | 采样或活动量及适用因子须对应物种、相态、来源和环境介质。按实际对象区分质量、粒子数、热量及元素当量；换算须有依据，重叠总量不可相加。 对上述具体身份及相容输入口径，仅在数量的归属和归一化状态与下式前提匹配时使用该规则：实际归属原生量按真实验收货物kg归一化一次，遵循明确计算规则。 保留原始凭据、实际采用的系数和结果单位。数值来源模式：calculated_value；适用范围：site_specific；归一化基准：每个声明的参考流；基准类型：reference_flow；证据类型：calculated_from_collection；采集协议：cp_material；来源：。须有原始记录、精确原生支持及逐具体行核验；这些规则不提供缺失身份或数值。 完成判据：check_occurrence_completion。 |
| cp_expand_other_intended_services | pipeline_delivery | 必须展开身份 other_intended_services (outputs/product)：实际其他独立供应预期服务 | collected_record | requirement_id=other_intended_services; process_id=pipeline_delivery; required_direction=outputs; required_flow_type=product; original_collection_protocol=cp_service; applicability_evidence; occurrence_event_id; concrete_row_id; physical_identity; formulation_or_species; phase; carbon_origin; particle_fraction; source_compartment; receiving_compartment; supply_or_handover_gate; provider_covered_cells; asset_component_event_and_lifecycle_phase; native_property; native_unit; measured_native_quantity; source_record_id; allocation_all_users; normalization_denominator; per_identity_amount_calculation; verification_evidence; unresolved_reason; occurrence_to_row_reconciliation; output_batch; ownership; new_used_state; accepted_receiver; acceptance_record; original_input_row_if_unused_return; native_handover_quantity; fate_reconciliation; applicability_decision_record; covered_concrete_rows; excluded_occurrence_reason; completion_evidence; observed_quantity_state; conversion_or_allocation_evidence | 枚举独立商品交付及其他真实共有使用者服务交接，自营泵调理内部转移不是额外最终或向自身采购服务。 本范围是必须落实的身份识别要求，不是交换流。使用原节点采集协议及其记录，先按真实身份、端口及独立功能拆分，再将保留的数量、基准及证据规则分别用于各兼容具体行。不得将异质身份合并数量或从总括名称推断原生属性单位。未发生须有证据，适用性或身份未知则阻止完成。 以下采集条件仅限本项 outputs/product 的身份与交接点（实际其他独立供应预期服务）。仅在实际发生且已接受的外部有用交接或有记录的未用退回时启用。记录所有权、物料或服务身份、新旧状态、关口、接收确认、原生数量及来源批次；未用退回应匹配原输入状态，已用回收物为不同状态。核对全部产出去向，不从实物输入中直接扣除有用产出，不虚构避免产品抵扣；环境负担分配按既有规则处理，不改写实物数量。 每项适用性判断须留证。经证实不发生仅关闭所述范围和时段，缺记录仍未解决。发生的要求须将全部事件映射到具体row ID及相容原生数量，或精确映射至已覆盖行和供应方责任，并逐项说明排除理由。证据须覆盖身份、支持单位、计算、原始记录及全部去向；既有与新增分支对同一事件互斥覆盖，协议本身不作为交换。完成须无未分配事件、无重复覆盖、无相关数量或身份未决项。按有证据的实际分支采集原始字段。不适用的操作数须关联分支判定，适用但缺乏实测或依据的数量登记待决。 | 具体已接收产品、服务、退回物或回收物的原生单位 | 每次真实事件及每项有证据的未发生判断 | 完整声明队列及归属资产寿命关联事件 | 仅本过程真实责任场所及供应方 | 先对账原生事件总量，仅汇总身份、状态、单位、交接点及期间均相容的量。按相应计算规则逐行核算一次：只分配仍共享的负担，目标总量仅除以同口径的正合格产出；等效每参考流数值原值沿用，零产出期间不作除法并保留处置记录。 | 记录实际状态、接收者、验收及原生实物量，区分未用退回和已用物资。执行专用输出投影及配对退回规则；独立实测的产出量不得再乘环境负担分配份额。 对上述具体身份及相容输入口径，仅在数量的归属和归一化状态与下式前提匹配时使用该规则：实际归属原生量按真实验收货物kg归一化一次，遵循明确计算规则。 保留原始凭据、实际采用的系数和结果单位。数值来源模式：calculated_value；适用范围：site_specific；归一化基准：每个声明的参考流；基准类型：reference_flow；证据类型：calculated_from_collection；采集协议：cp_service；来源：。须有原始记录、精确原生支持及逐具体行核验；这些规则不提供缺失身份或数值。 完成判据：check_occurrence_completion。 |
| cp_expand_external_recovered_product | pipeline_delivery | 必须展开身份 external_recovered_product (outputs/product)：实际外部回收介质或材料产品 | collected_record | requirement_id=external_recovered_product; process_id=pipeline_delivery; required_direction=outputs; required_flow_type=product; original_collection_protocol=cp_material; applicability_evidence; occurrence_event_id; concrete_row_id; physical_identity; formulation_or_species; phase; carbon_origin; particle_fraction; source_compartment; receiving_compartment; supply_or_handover_gate; provider_covered_cells; asset_component_event_and_lifecycle_phase; native_property; native_unit; measured_native_quantity; source_record_id; allocation_all_users; normalization_denominator; per_identity_amount_calculation; verification_evidence; unresolved_reason; occurrence_to_row_reconciliation; output_batch; ownership; new_used_state; accepted_receiver; acceptance_record; original_input_row_if_unused_return; native_handover_quantity; fate_reconciliation; applicability_decision_record; covered_concrete_rows; excluded_occurrence_reason; completion_evidence; observed_quantity_state; conversion_or_allocation_evidence | 仅真实独立转出有水质接收者原生量明确负荷处理的产品，内部回送介质或期末保留材料不是外部输出，不默认替代水等抵扣。 本范围是必须落实的身份识别要求，不是交换流。使用原节点采集协议及其记录，先按真实身份、端口及独立功能拆分，再将保留的数量、基准及证据规则分别用于各兼容具体行。不得将异质身份合并数量或从总括名称推断原生属性单位。未发生须有证据，适用性或身份未知则阻止完成。 以下采集条件仅限本项 outputs/product 的身份与交接点（实际外部回收介质或材料产品）。仅在实际发生且已接受的外部有用交接或有记录的未用退回时启用。记录所有权、物料或服务身份、新旧状态、关口、接收确认、原生数量及来源批次；未用退回应匹配原输入状态，已用回收物为不同状态。核对全部产出去向，不从实物输入中直接扣除有用产出，不虚构避免产品抵扣；环境负担分配按既有规则处理，不改写实物数量。 每项适用性判断须留证。经证实不发生仅关闭所述范围和时段，缺记录仍未解决。发生的要求须将全部事件映射到具体row ID及相容原生数量，或精确映射至已覆盖行和供应方责任，并逐项说明排除理由。证据须覆盖身份、支持单位、计算、原始记录及全部去向；既有与新增分支对同一事件互斥覆盖，协议本身不作为交换。完成须无未分配事件、无重复覆盖、无相关数量或身份未决项。按有证据的实际分支采集原始字段。不适用的操作数须关联分支判定，适用但缺乏实测或依据的数量登记待决。 | 具体已接收产品、服务、退回物或回收物的原生单位 | 每次真实事件及每项有证据的未发生判断 | 完整声明队列及归属资产寿命关联事件 | 仅本过程真实责任场所及供应方 | 先对账原生事件总量，仅汇总身份、状态、单位、交接点及期间均相容的量。按相应计算规则逐行核算一次：只分配仍共享的负担，目标总量仅除以同口径的正合格产出；等效每参考流数值原值沿用，零产出期间不作除法并保留处置记录。 | 记录实际状态、接收者、验收及原生实物量，区分未用退回和已用物资。执行专用输出投影及配对退回规则；独立实测的产出量不得再乘环境负担分配份额。 对上述具体身份及相容输入口径，仅在数量的归属和归一化状态与下式前提匹配时使用该规则：实际归属原生量按真实验收货物kg归一化一次，遵循明确计算规则。 保留原始凭据、实际采用的系数和结果单位。数值来源模式：calculated_value；适用范围：site_specific；归一化基准：每个声明的参考流；基准类型：reference_flow；证据类型：calculated_from_collection；采集协议：cp_material；来源：。须有原始记录、精确原生支持及逐具体行核验；这些规则不提供缺失身份或数值。 完成判据：check_occurrence_completion。 |
| cp_expand_collected_wastewater | pipeline_delivery | 必须展开身份 collected_wastewater (outputs/waste)：实际收集载运介质及清洗废水 | collected_record | requirement_id=collected_wastewater; process_id=pipeline_delivery; required_direction=outputs; required_flow_type=waste; original_collection_protocol=cp_material; applicability_evidence; occurrence_event_id; concrete_row_id; physical_identity; formulation_or_species; phase; carbon_origin; particle_fraction; source_compartment; receiving_compartment; supply_or_handover_gate; provider_covered_cells; asset_component_event_and_lifecycle_phase; native_property; native_unit; measured_native_quantity; source_record_id; allocation_all_users; normalization_denominator; per_identity_amount_calculation; verification_evidence; unresolved_reason; occurrence_to_row_reconciliation; waste_origin_event; material_or_true_mixture; moisture_basis; container_tare; opening_waste_stock; generated_waste; received_waste; handover_quantity; closing_waste_stock; onsite_treatment; receiver_id; applicability_decision_record; covered_concrete_rows; excluded_occurrence_reason; completion_evidence; observed_quantity_state; conversion_or_allocation_evidence | 真实成分数量原生接口保留处理接收及溶解物质须证据，内部回用外部回收产品真实环境排放互斥，不把全部来水假定废水。 本范围是必须落实的身份识别要求，不是交换流。使用原节点采集协议及其记录，先按真实身份、端口及独立功能拆分，再将保留的数量、基准及证据规则分别用于各兼容具体行。不得将异质身份合并数量或从总括名称推断原生属性单位。未发生须有证据，适用性或身份未知则阻止完成。 以下采集条件仅限本项 outputs/waste 的身份与交接点（实际收集载运介质及清洗废水）。本过程实际产生或接收所述废物时启用。记录材料或配方或真实共同收集混合物、干湿状态、容器皮重、来源事件、存量、交接关口及实际接收者；核对产生量+期初库存+接收量=交出量+期末库存+另列现场处理量。分收的不同废物分行，真实接收混合物可为一行，其组分仅作不可相加审计；有用回收、客户保留物与废物去向分开，不自动给替代抵扣。 每项适用性判断须留证。经证实不发生仅关闭所述范围和时段，缺记录仍未解决。发生的要求须将全部事件映射到具体row ID及相容原生数量，或精确映射至已覆盖行和供应方责任，并逐项说明排除理由。证据须覆盖身份、支持单位、计算、原始记录及全部去向；既有与新增分支对同一事件互斥覆盖，协议本身不作为交换。完成须无未分配事件、无重复覆盖、无相关数量或身份未决项。按有证据的实际分支采集原始字段。不适用的操作数须关联分支判定，适用但缺乏实测或依据的数量登记待决。 | 接收方验收的具体废物或实际混合收集物在实测状态下的原生数量 | 每次真实事件及每项有证据的未发生判断 | 完整声明队列及归属资产寿命关联事件 | 仅本过程真实责任场所及供应方 | 先对账原生事件总量，仅汇总身份、状态、单位、交接点及期间均相容的量。按相应计算规则逐行核算一次：只分配仍共享的负担，目标总量仅除以同口径的正合格产出；等效每参考流数值原值沿用，零产出期间不作除法并保留处置记录。 | 以接收记录核对产生、库存、场内处理和实测交付。混合物流量与组分测量分开；干湿基或质量体积换算须有相容组成或密度。接收转移和环境直排按不同交接点记录。 对上述具体身份及相容输入口径，仅在数量的归属和归一化状态与下式前提匹配时使用该规则：实际归属原生量按真实验收货物kg归一化一次，遵循明确计算规则。 保留原始凭据、实际采用的系数和结果单位。数值来源模式：calculated_value；适用范围：site_specific；归一化基准：每个声明的参考流；基准类型：reference_flow；证据类型：calculated_from_collection；采集协议：cp_material；来源：。须有原始记录、精确原生支持及逐具体行核验；这些规则不提供缺失身份或数值。 完成判据：check_occurrence_completion。 |
| cp_expand_contaminated_residues | pipeline_delivery | 必须展开身份 contaminated_residues (outputs/waste)：实际污泥不合格污染材料废物 | collected_record | requirement_id=contaminated_residues; process_id=pipeline_delivery; required_direction=outputs; required_flow_type=waste; original_collection_protocol=cp_material; applicability_evidence; occurrence_event_id; concrete_row_id; physical_identity; formulation_or_species; phase; carbon_origin; particle_fraction; source_compartment; receiving_compartment; supply_or_handover_gate; provider_covered_cells; asset_component_event_and_lifecycle_phase; native_property; native_unit; measured_native_quantity; source_record_id; allocation_all_users; normalization_denominator; per_identity_amount_calculation; verification_evidence; unresolved_reason; occurrence_to_row_reconciliation; waste_origin_event; material_or_true_mixture; moisture_basis; container_tare; opening_waste_stock; generated_waste; received_waste; handover_quantity; closing_waste_stock; onsite_treatment; receiver_id; applicability_decision_record; covered_concrete_rows; excluded_occurrence_reason; completion_evidence; observed_quantity_state; conversion_or_allocation_evidence | 仅真实申明废物有成分干湿状态数量所有者接收者，保留拒收货物也可能真实回送回收并有自身去向，不默认全部废物或大气释放。 本范围是必须落实的身份识别要求，不是交换流。使用原节点采集协议及其记录，先按真实身份、端口及独立功能拆分，再将保留的数量、基准及证据规则分别用于各兼容具体行。不得将异质身份合并数量或从总括名称推断原生属性单位。未发生须有证据，适用性或身份未知则阻止完成。 以下采集条件仅限本项 outputs/waste 的身份与交接点（实际污泥不合格污染材料废物）。本过程实际产生或接收所述废物时启用。记录材料或配方或真实共同收集混合物、干湿状态、容器皮重、来源事件、存量、交接关口及实际接收者；核对产生量+期初库存+接收量=交出量+期末库存+另列现场处理量。分收的不同废物分行，真实接收混合物可为一行，其组分仅作不可相加审计；有用回收、客户保留物与废物去向分开，不自动给替代抵扣。 每项适用性判断须留证。经证实不发生仅关闭所述范围和时段，缺记录仍未解决。发生的要求须将全部事件映射到具体row ID及相容原生数量，或精确映射至已覆盖行和供应方责任，并逐项说明排除理由。证据须覆盖身份、支持单位、计算、原始记录及全部去向；既有与新增分支对同一事件互斥覆盖，协议本身不作为交换。完成须无未分配事件、无重复覆盖、无相关数量或身份未决项。按有证据的实际分支采集原始字段。不适用的操作数须关联分支判定，适用但缺乏实测或依据的数量登记待决。 | 接收方验收的具体废物或实际混合收集物在实测状态下的原生数量 | 每次真实事件及每项有证据的未发生判断 | 完整声明队列及归属资产寿命关联事件 | 仅本过程真实责任场所及供应方 | 先对账原生事件总量，仅汇总身份、状态、单位、交接点及期间均相容的量。按相应计算规则逐行核算一次：只分配仍共享的负担，目标总量仅除以同口径的正合格产出；等效每参考流数值原值沿用，零产出期间不作除法并保留处置记录。 | 以接收记录核对产生、库存、场内处理和实测交付。混合物流量与组分测量分开；干湿基或质量体积换算须有相容组成或密度。接收转移和环境直排按不同交接点记录。 对上述具体身份及相容输入口径，仅在数量的归属和归一化状态与下式前提匹配时使用该规则：实际归属原生量按真实验收货物kg归一化一次，遵循明确计算规则。 保留原始凭据、实际采用的系数和结果单位。数值来源模式：calculated_value；适用范围：site_specific；归一化基准：每个声明的参考流；基准类型：reference_flow；证据类型：calculated_from_collection；采集协议：cp_material；来源：。须有原始记录、精确原生支持及逐具体行核验；这些规则不提供缺失身份或数值。 完成判据：check_occurrence_completion。 |
| cp_expand_retired_wastes | pipeline_delivery | 必须展开身份 retired_wastes (outputs/waste)：实际报废部件管材维护材料废物 | collected_record | requirement_id=retired_wastes; process_id=pipeline_delivery; required_direction=outputs; required_flow_type=waste; original_collection_protocol=cp_maintenance; applicability_evidence; occurrence_event_id; concrete_row_id; physical_identity; formulation_or_species; phase; carbon_origin; particle_fraction; source_compartment; receiving_compartment; supply_or_handover_gate; provider_covered_cells; asset_component_event_and_lifecycle_phase; native_property; native_unit; measured_native_quantity; source_record_id; allocation_all_users; normalization_denominator; per_identity_amount_calculation; verification_evidence; unresolved_reason; occurrence_to_row_reconciliation; waste_origin_event; material_or_true_mixture; moisture_basis; container_tare; opening_waste_stock; generated_waste; received_waste; handover_quantity; closing_waste_stock; onsite_treatment; receiver_id; applicability_decision_record; covered_concrete_rows; excluded_occurrence_reason; completion_evidence; observed_quantity_state; conversion_or_allocation_evidence | 逐项识别真实材料报废清洗残余接收者原生量及互斥供应商寿命覆盖，回收产品保留库存分离。 本范围是必须落实的身份识别要求，不是交换流。使用原节点采集协议及其记录，先按真实身份、端口及独立功能拆分，再将保留的数量、基准及证据规则分别用于各兼容具体行。不得将异质身份合并数量或从总括名称推断原生属性单位。未发生须有证据，适用性或身份未知则阻止完成。 以下采集条件仅限本项 outputs/waste 的身份与交接点（实际报废部件管材维护材料废物）。本过程实际产生或接收所述废物时启用。记录材料或配方或真实共同收集混合物、干湿状态、容器皮重、来源事件、存量、交接关口及实际接收者；核对产生量+期初库存+接收量=交出量+期末库存+另列现场处理量。分收的不同废物分行，真实接收混合物可为一行，其组分仅作不可相加审计；有用回收、客户保留物与废物去向分开，不自动给替代抵扣。 每项适用性判断须留证。经证实不发生仅关闭所述范围和时段，缺记录仍未解决。发生的要求须将全部事件映射到具体row ID及相容原生数量，或精确映射至已覆盖行和供应方责任，并逐项说明排除理由。证据须覆盖身份、支持单位、计算、原始记录及全部去向；既有与新增分支对同一事件互斥覆盖，协议本身不作为交换。完成须无未分配事件、无重复覆盖、无相关数量或身份未决项。按有证据的实际分支采集原始字段。不适用的操作数须关联分支判定，适用但缺乏实测或依据的数量登记待决。 | 接收方验收的具体废物或实际混合收集物在实测状态下的原生数量 | 每次真实事件及每项有证据的未发生判断 | 完整声明队列及归属资产寿命关联事件 | 仅本过程真实责任场所及供应方 | 先对账原生事件总量，仅汇总身份、状态、单位、交接点及期间均相容的量。按相应计算规则逐行核算一次：只分配仍共享的负担，目标总量仅除以同口径的正合格产出；等效每参考流数值原值沿用，零产出期间不作除法并保留处置记录。 | 以接收记录核对产生、库存、场内处理和实测交付。混合物流量与组分测量分开；干湿基或质量体积换算须有相容组成或密度。接收转移和环境直排按不同交接点记录。 对上述具体身份及相容输入口径，仅在数量的归属和归一化状态与下式前提匹配时使用该规则：实际归属原生量按真实验收货物kg归一化一次，遵循明确计算规则。 保留原始凭据、实际采用的系数和结果单位。数值来源模式：calculated_value；适用范围：site_specific；归一化基准：每个声明的参考流；基准类型：reference_flow；证据类型：calculated_from_collection；采集协议：cp_maintenance；来源：。须有原始记录、精确原生支持及逐具体行核验；这些规则不提供缺失身份或数值。 完成判据：check_occurrence_completion。 |
| cp_expand_other_substance_releases | pipeline_delivery | 必须展开身份 other_substance_releases (outputs/elementary)：实际逐物质货物运行维护释放 | collected_record | requirement_id=other_substance_releases; process_id=pipeline_delivery; required_direction=outputs; required_flow_type=elementary; original_collection_protocol=cp_emissions; applicability_evidence; occurrence_event_id; concrete_row_id; physical_identity; formulation_or_species; phase; carbon_origin; particle_fraction; source_compartment; receiving_compartment; supply_or_handover_gate; provider_covered_cells; asset_component_event_and_lifecycle_phase; native_property; native_unit; measured_native_quantity; source_record_id; allocation_all_users; normalization_denominator; per_identity_amount_calculation; verification_evidence; unresolved_reason; occurrence_to_row_reconciliation; substance_identity; chemical_form; environmental_compartment; carbon_origin; particle_fraction_or_count_basis; measured_or_calculated_release; species_conversion_evidence; applicability_decision_record; covered_concrete_rows; excluded_occurrence_reason; completion_evidence; observed_quantity_state; conversion_or_allocation_evidence | 按真实必须逐物质展开泄漏渗透放空降压火炬燃烧化学浆组分水土释放磨损制冷剂。识别相态成分来源碳源接收子区室及物质元素CO2e原生基准，收集废物未知差额不自动排放。 本范围是必须落实的身份识别要求，不是交换流。使用原节点采集协议及其记录，先按真实身份、端口及独立功能拆分，再将保留的数量、基准及证据规则分别用于各兼容具体行。不得将异质身份合并数量或从总括名称推断原生属性单位。未发生须有证据，适用性或身份未知则阻止完成。 以下采集条件仅限本项 outputs/elementary 的身份与交接点（实际逐物质货物运行维护释放）。仅对进入已记录接收介质且有观测或适用计算依据的实际释放启用。记录具体物质及形态、来源或接收介质、适用的化石或生物碳来源、适用的粒径组分或粒子数粒径基础及采样期；保留元素与分子口径，换算须有化学计量和相容物种证据。收集物流中的污染物在实际环境排放边界前归接收物流，不用CO2、NOx、VOC、COD或泛颗粒物流代替缺失物种。 每项适用性判断须留证。经证实不发生仅关闭所述范围和时段，缺记录仍未解决。发生的要求须将全部事件映射到具体row ID及相容原生数量，或精确映射至已覆盖行和供应方责任，并逐项说明排除理由。证据须覆盖身份、支持单位、计算、原始记录及全部去向；既有与新增分支对同一事件互斥覆盖，协议本身不作为交换。完成须无未分配事件、无重复覆盖、无相关数量或身份未决项。按有证据的实际分支采集原始字段。不适用的操作数须关联分支判定，适用但缺乏实测或依据的数量登记待决。 | 本物质、资源或物理排放在实际环境介质的已核实原生属性与单位 | 每次真实事件及每项有证据的未发生判断 | 完整声明队列及归属资产寿命关联事件 | 仅本过程真实责任场所及供应方 | 先对账原生事件总量，仅汇总身份、状态、单位、交接点及期间均相容的量。按相应计算规则逐行核算一次：只分配仍共享的负担，目标总量仅除以同口径的正合格产出；等效每参考流数值原值沿用，零产出期间不作除法并保留处置记录。 | 采样或活动量及适用因子须对应物种、相态、来源和环境介质。按实际对象区分质量、粒子数、热量及元素当量；换算须有依据，重叠总量不可相加。 对上述具体身份及相容输入口径，仅在数量的归属和归一化状态与下式前提匹配时使用该规则：实际归属原生量按真实验收货物kg归一化一次，遵循明确计算规则。 保留原始凭据、实际采用的系数和结果单位。数值来源模式：calculated_value；适用范围：site_specific；归一化基准：每个声明的参考流；基准类型：reference_flow；证据类型：calculated_from_collection；采集协议：cp_emissions；来源：。须有原始记录、精确原生支持及逐具体行核验；这些规则不提供缺失身份或数值。 完成判据：check_occurrence_completion。 |

### 计算规则

| 规则编号 | 适用对象 | formula_or_rule | inputs | output | source_ids |
| --- | --- | --- | --- | --- | --- |
| normalize | 全部清单行 | I_x = A_x / M，其中A_x为直接及全部使用者因果归属后兼容验收交付队列真实原生量，M为预申明基准真实验收货物正值kg。M=0保留负荷而无有限强度。 | A_x;M | 每kg验收货物交付的原生清单 |  |
| cargo_basis | 参考产出及组分台账 | M = sum(m_accepted_i * f_basis_i)，对真实独立验收交付事件期间，m_accepted_i为实测交付混合物质量，f_basis_i为属于预申明合同货物基准的真实实测比例；仅验收混合物本身即该货物时f_basis=1。可直接用真实原生kg测量。实测组分水仅在原约真实合同验收混合物必要成分质量下随混合物计一次，不另加，固体组分专属基准排除载运水。不稀释或事后切基准。不默认水分固体密度因子，独立补充冲洗循环水拒收保留量不进M。 | m_accepted_i;f_basis_i;actual_native_kg;M | 申明基准的验收货物kg |  |
| supplier_native | provider rows | A_x = q_u * D_u * s，q_u为兼容供应商每原生单位u清单，D_u真实同单位需求，s为真实有证据队列全部使用者份额。先替代精确覆盖项目，再A_x/M一次，不自动货物kg转体积能源吨公里。 | q_u;D_u;s;M | 归属原生供应商清单 |  |
| asset_life | asset rows | A_asset = Q_asset * U_studied / U_life，Q_asset为真实原生交付量，U_studied/U_life为同资产兼容作业，U_life为有记录正值全部使用者有效寿命作业。I_asset = A_asset / M一次，更换维护报废分别闭合。 | Q_asset;U_studied;U_life;M | 每kg交付原生资产量 |  |
| component_custody | 各实际货物组分及其承载介质 | Opening + received_external = closing + accepted_external_delivery + returned_external + recovered_external + actual_waste_transfer + evidenced_direct_release + actual_consumed_or_transformed + unresolved_residual，按各真实兼容组分原生基准。申明边界内转移循环相抵，项互斥；转化产物须自身真实组分关系，不由公式凭空产生消失。真实货物提取燃料进入有证据消耗转化项，不进验收交付，并在覆盖核对后于所有者处纳入上游燃料供应一次。含内部回收库存不再回收输出，未知残差调查，不假定泄漏废物蒸发。 | Opening;received_external;closing;accepted_external_delivery;returned_external;recovered_external;actual_waste_transfer;evidenced_direct_release;actual_consumed_or_transformed;unresolved_residual | 已核对组分介质台账 |  |

### 数据质量要求

| requirement_id | 适用对象 | Requirement | evidence |
| --- | --- | --- | --- |
| basis_acceptance | reference output | 原约真实变更成分状态货物基准校准交付取样真实接口距离压力温度历时质量及验收质量证明兼容M，泵总量提名发票运力管存不能替代验收。 | cp_service;cp_material |
| atomic_route | 每条实际交换行 | 各真实条件分支须展开逐项身份类型方向状态原生量属性单位及所属过程采集来源，未发生须真实肯定证据，未知不为零。 | cp_operation;cp_material;cp_maintenance;cp_emissions |
| provider_life | 供应方及资产 | 证明精确已含阶段事件场址期间全部真实使用者正值同资产寿命作业及预测敏感性，补全未含建设初始更换维护报废承运调理，不重复完整供应商结果。 | cp_assets;cp_provider |
| sites_periods | shared pools | 索引各真实管站调理场址驱动报告生命周期期间全部预期服务输出原生资源使用者，按一致M除之前先合计原始归属量，不平均不同强度。 | cp_service;cp_operation;cp_assets |
| fates | 货物、承载介质及排放 | 按兼容原生单位不确定性跟踪真实组分水分载运介质管库存回送回收废物直接释放所有者接收者，物质碳源相态接收介质必要，未知差额不自动释放。 | cp_material;cp_emissions |

## 9. 验证规则

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| reference_basis | pipeline_delivery | 核实真实服务接口质量下按预先申明实测混合物组分固体基准验收货物交付 M。参考1kg是运输服务而非制造货物。原约真实合同验收混合物按必要成分质量纳入实测组分水一次，固体组分专属基准排除载运水。独立冲洗补充循环水管存拒收库存不成为独立额外输出，不投机稀释切基准。真实距离状态相态质量分层兼容，有限强度须M为正。 |  |
| scope_and_conditioning | pipeline_delivery | 核实完整其他化学煤浆其他未分类范围及真实各相态技术，不导入天然气石油蒸汽水干线类别或独立制造捕集储存。必要真实承运调理压力温控制浆脱水场站接口须有实际供应状态残余责任。 |  |
| stock_and_fates | pipeline_delivery | 核对真实货物组分介质罐管存内部回送循环外部回收拒收退料收集废物逐物质接收释放，同接口不重复。货物 CO2 或水不自动环境排放，未知差额须调查，不推作泄漏蒸发燃烧。 |  |
| native_life_provider | pipeline_delivery | 核实真实原生泵压缩温控辅助能源供应库存使用内部回收，包括真实提取货物作燃料及供应商覆盖后真实所有者兼容上游燃料供应一次，完整供应商项目替代一次并补全未覆盖生命周期。检查真实贡献场址全部服务使用者正值同资产寿命作业及互斥阶段，M=0保留负荷而无有限强度。 |  |
| identity_projection | pipeline_delivery | 每项真实逐项交换须真实身份类型方向状态原生量属性单位及来源接收接口，同过程协议或登记待核要求。核实双语参考流卡方法画像对齐及最新生成投影。目标通过不代表精确 UUID、运行安全、科学主审或发布就绪。 |  |
| atomic_pipeline_delivery | pipeline_delivery | 拒绝将备选物料、独立供应资产服务、不同废物流、污染物种、碳源、相态、粒径或环境子介质合并成一个交换身份。本节点每项适用cp_expand_要求必须有发生或未发生记录及完整具体行清单，各行具有自身身份、端口、已核验UUID、原生属性单位、数量、原始记录、计算和唯一责任。供应方已含完整总成或真实收集混合物流仍按一个真实供应或收集身份，不虚构组分交换。不得将要求名称标识、NOx或VOC或PM总量、未明确的物理释放或异质清单绑定一个UUID。核对全部子行、原始事件、供应方已含单元及跨节点交接，不缺失当零、不重复计入。身份、适用性、数量或去向未知，均阻止完整前景包及最终TIDAS交换产出。PCR检查器不验证这些前景事实，须保留逐行证据供审查。 | ghg-product-2011 |
| check_occurrence_completion | 全部实际清单行和身份识别协议 | 保留适用性证据，将每个实际事件对应到具体清单行或已核实的供应方覆盖范围。判定未发生须有证据，未知项保留待决。按同一身份、状态、单位、期间和交接点核对期初、接收、期末及互斥去向。耗材领用账区分未用退回、内部领拨和合格、失败及返工作业的实际耗用。托管账或物料平衡采用期初库存＋外部接收＋配对内部接收＝期末库存＋配对内部发出＋对外交付且获接收的数量＋未用外退＋外送的已用物资或回收物＋外送废物＋直接排放＋本边界内消耗或转化量。身份在边界内生成时，将有证据的生成量或出生数计入该身份账的来源并关联原事件。在上层守恒物料或元素平衡中抵消内部转化和移交。每个事件只记一次，留存回收物计入期末，移交与耗用分别登记。按相容口径执行专用托管、相态、转化或元素规则；已作为转化量计入的物料，其后续产物不得再计入同一去向合计。独立计量各项，对未解释的差额追查并保留待决。实物总量与负担分配分别核算。共享原始负担采用 Q_raw × s / R，其中 s 为有证据的目标驱动量除以同池同期间全部适用用户的正驱动量总和。已归属的目标总量采用 Q_target / R，已与同一参考流等效的单位结果 q_ref 原值沿用。供应方单位强度先乘以按其原生单位实测的需求量。仅在另一个仍有共享负担的独立阶段另作分配。R 为同一队列、交接点和参考单位下的正值合格产出量。保留失败与部分完成作业的负担，禁止以此放大 R；零产出时保留负担及有证据的结转或最终处置。自有资产采用同队列全用户寿命作业量，并排除初始部件重复计算。外购服务仅替代有记录的覆盖阶段。适用的身份、数量、支持单位、去向或分配分母仍未决时，最终数据集仍不完整。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | secondary_dataset; background_dataset |
| downstream_use | 适用其他货物管道交付清单，用于下游过程及生命周期模型投影 |
| allowed_use | 必要身份数据主审后，用于货物基准路线接口状态温压历时质量及完整归属生命周期一致的适用真实验收其他货物交付质量。 |
| excluded_use | 不同货物路线未限定kg，普通货物制造天然气石油蒸汽水干线类别，内部循环管存作输出，自动碳储存回收水抵扣，待核事实当零。 |
| required_metadata | actual_named_cargo_chemical_composition_grade_and_phase; declared_cargo_mass_basis_before_delivery; actual_slurry_solids_moisture_and_carrier_medium_separation; actual_receipt_delivery_custody_gates_and_accepted_quality; actual_pipeline_route_distance_elevation_pressure_temperature_time; batch_or_continuous_period_and_coherent_accepted_delivered_mass_M; linepack_tanks_recirc_start_stop_flush_pig_failure_return_duties; actual_native_pump_compressor_thermal_energy_and_provider_coverage; real_carrier_conditioning_preparation_dewatering_handover; all_user_same_asset_pipe_station_terminal_life_sites_periods; actual_component_water_species_stock_fate_receiver_and_carbon_origin; independent_capture_manufacture_storage_use_interfaces |
| required_quality_disclosure | 货物基准验收原生供应商覆盖真实数据缺口因果池共有寿命预测组分介质库存去向闭合不确定性。 |
| update_trigger | 真实货物相态质量基准接口质量管网驱动温控调理供应商覆盖资产寿命分配真实物质去向变更。 |

## 11. 数据源

| source_id | type | reference | used_for |
| --- | --- | --- | --- |
| unsd-other-pipeline-2025 | official_guidance | UNSD,CPC3.0 65139,30June2025. https://unstats.un.org/unsd/classifications/Econ/Structure/Detail/EN/2100/65139 | 仅官方完整其他化学煤浆其他未分类管道运输范围及蒸汽水干线排除，交付1kg服务是本PCR选择。 |
| ota-slurry-1978 | official_guidance | U.S.Office of Technology Assessment,A Technology Assessment of Coal Slurry Pipelines,March1978,printedpp27-29,104-105. https://www.princeton.edu/~ota/disk3/1978/7817/7817.PDF | 仅历史制浆传输脱水介质回用水质定性问题，不移植历史浆比回收率压力成本效率现行法律，真实接口记录决定责任。 |
| phmsa-product-context | official_guidance | PHMSA,Fact Sheet:Products Transported in Pipelines,accessed22October2026. https://primis.phmsa.dot.gov/stakeholder-comms/factsheets/fsproductlist/ | 仅真实其他化学气液态示例及真实释放路径定性背景，美国产品清单不是CPC范围权威或通用安全数量因子要求。 |
| doe-hydrogen-pipeline | official_guidance | U.S.Department of Energy,Hydrogen Pipelines,accessed22October2026. https://www.energy.gov/cmei/fuels/hydrogen-pipelines | 仅真实氢气压缩材料兼容泄漏渗透定性问题，不移植里程掺混比例压力成本或通用能耗泄漏因子。 |
| ghg-product-2011 | standard | WRI/WBCSD,Product Life Cycle Accounting and Reporting Standard,2011,ch6-9. https://ghgprotocol.org/product-standard | 一般功能生命周期披露分配框架，交付1kg基准因果原生需求寿命组分台账是本PCR方法，不是外部规定管道因子。 |

