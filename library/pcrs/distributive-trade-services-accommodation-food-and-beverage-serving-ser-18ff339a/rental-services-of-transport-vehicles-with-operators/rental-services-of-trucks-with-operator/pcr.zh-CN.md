---
pcr_id: pcr.distributive-trade-services-accommodation-food-and-beverage-serving-ser-18ff339a.rental-services-of-transport-vehicles-with-operators.rental-services-of-trucks-with-operator
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 配驾驶员的货车租赁服务

## 1. 范围与适用性

涵盖配驾驶员的货车及其他机动货运车辆租赁。须依真实约定与运行确认客户获得合格车辆及驾驶员的可用义务，并申明承租人指令及供应商运行责任。租赁发票、车型或燃料付款方单独不能确定本范围。

参考产品排除无驾驶员货车租赁（CPC 73112）、实际公路货运（CPC 6511）、仅驾驶员劳动及车辆制造。承诺货物交付的承运服务即使称为租用也须用承运方法；真实履行验收可用义务的所租车辆无需发生移动或正载荷。

母活动为配驾驶员道路货运车辆租用。真实整车、牵引车/挂车、车身、尾板、吊机、动力及作业差异改变原生能源、资产、排放及记录；保留有证据配置，不另造产品或平均不兼容作业。兼容配置可在声明车队内共存，互斥车辆状态及重叠义务须消解。Shalom及SPIESS仅说明当前商业配置及责任的有限实例，其广告尺寸、价格及最短租期不是通用PCR要求。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.distributive-trade-services-accommodation-food-and-beverage-serving-ser-18ff339a.rental-services-of-transport-vehicles-with-operators.rental-services-of-trucks-with-operator |
| classification_refs | CPC 3.0 66012; exact |
| covered_products | 涵盖配驾驶员的货车及其他机动货运车辆租赁。须依真实约定与运行确认客户获得合格车辆及驾驶员的可用义务，并申明承租人指令及供应商运行责任。租赁发票、车型或燃料付款方单独不能确定本范围。 |
| excluded_products | 参考产品排除无驾驶员货车租赁（CPC 73112）、实际公路货运（CPC 6511）、仅驾驶员劳动及车辆制造。承诺货物交付的承运服务即使称为租用也须用承运方法；真实履行验收可用义务的所租车辆无需发生移动或正载荷。 |
| representative_product | 适用配驾驶员货车租用约定 |
| production_route | 母活动为配驾驶员道路货运车辆租用。真实整车、牵引车/挂车、车身、尾板、吊机、动力及作业差异改变原生能源、资产、排放及记录；保留有证据配置，不另造产品或平均不兼容作业。兼容配置可在声明车队内共存，互斥车辆状态及重叠义务须消解。Shalom及SPIESS仅说明当前商业配置及责任的有限实例，其广告尺寸、价格及最短租期不是通用PCR要求。 |
| market_state | 适用配驾驶员货车租用约定 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| 功能对象（What） | 适用配驾驶员货车租用约定 |
| 数量（How much） | 一次独立验收适用配驾驶员货车租用约定 |
| 质量（How well） | 声明原约/真实变更车辆/配置/所租容量、驾驶员运行及承租人指令、服务质量/地区/作业及真实接口。 |
| 时间或周期（How long or cycle） | 正值真实验收可用H及真实约定/报告/生命周期期间，不要求正移动或载荷。 |
| 参考流关联（reference_flow_link） | `accepted_operated_truck_hire` |

| 字段 | 值 |
| --- | --- |
| 参考数量（Reference amount） | 1 |
| 参考产品流（Reference product flow） | 适用配驾驶员货车租用约定 |
| 参考流属性（Reference flow property） | 物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` |
| 参考单位组（Reference unit group） | 数量单位 `5beb6eed-33a9-47b8-9ede-1dfe8f679159` |
| 参考单位（Reference unit） | Item(s) |
| 必要限定项（Required qualifiers） | 实际约定编号及原约/真实变更义务; 货车或其他机动货运车辆身份; 配置及带原生单位的所租容量; 正值真实验收可用时间H; 报告期间; 驾驶员/供应商运行责任; 承租人指令/控制; 可用性/质量/验收及替车条件; 交付归还接口; 服务地区及作业; 真实待命/调位/故障/替车; 全部使用者资产寿命及原生供应商覆盖 |

在参考说明或数据集元数据申明全部限定项，真实功能或限定项缺失则参考不完整。

## 4. 计量与单位规则

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| qualified_count | 参考产品 | 物品数量 | Item(s) | 计真实独立验收车辆及驾驶员租用义务，具正值真实验收可用H及全部限定项；计费增量、行程、载荷、距离及资产更换不定义参考。 |
| native_quantity | 全部真实交换 | 实际已核原生属性 | 实际原生单位 | 用真实原生量或有依据兼容转换。交流电用净热值，MJ或原生kWh，1 kWh = 3.6 MJ仅一次。不设通用密度、热值、寿命或最短租期。 |
| compatible_demand | 供应商及资产子项 | 实际已核原生属性 | 实际原生单位 | 原生小时/天/Count/资产单位及容量时间在缩放前须描述相同租用功能及接口。货物t*km、费用或名义容量不证明与带驾驶员可用性等价。 |

## 5. 系统边界

### 边界抽象

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 真实车辆及驾驶员可用合同、原配置/容量/控制及原生供应商接口。 |
| starting_condition_role | 前景采集接口；上游燃料、资产、驾驶员/支持及基础设施仍纳入。 |
| product_classification_scope | CPC 3.0 66012 |
| recursive_input_rule | 以原生单位及精确供应商覆盖记录真实同功能配驾驶员分租一次；采集缺口，不向自身采购或重复租用/承运输出。 |
| upstream_dataset_requirement | 真实原生功能、配置/容量/时间、驾驶员/控制/接口、地区/作业及技术/期间兼容，保留未完成覆盖。 |
| disclosure | 实际约定编号及原约/真实变更义务；货车或其他机动货运车辆身份；配置及带原生单位的所租容量；正值真实验收可用时间H；报告期间；驾驶员/供应商运行责任；承租人指令/控制；可用性/质量/验收及替车条件；交付归还接口；服务地区及作业；真实待命/调位/故障/替车；全部使用者资产寿命及原生供应商覆盖 |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| hire_function | operated_truck_hire | 从真实车辆及驾驶员可用义务开始，至验收完成/归还。纳入归属待命、空车调位、启动、清洁、故障、救援及验收替车；被拒或不可用时间非验收H，其因果负荷仍保留。各故障/不可用车辆状态关联真实修复/返工、归还、验收替车或退役；物料/废物实物退出须具体子项。 | unsd-truck-hire-2025;shalom-driver-hire;spiess-truck-hire |
| complete_lifecycle | operated_truck_hire | 纳入真实原生能源物料供应、驾驶员/支持作业、车辆设备共享基础设施初始提供/维护/更换/退役、真实废物处理及直接排放。客户或分包商付款不删除物理负荷，全部相关未知须本节点展开，不得遗漏。 |  |
| provider_interface | operated_truck_hire | 仅按真实兼容供应商数据集的书面功能、原生需求、接口及精确已含生命周期项目使用。替代这些项目一次并采集未覆盖项目；不得向自身采购或叠加已含车辆/燃料/服务负荷。保留全部使用者资产需求，包括其他租用、自营承运及其他使用者。 |  |
| route_units | operated_truck_hire | 逐项索引真实车辆/配置/驾驶员/供应商/场址/地区/作业及报告/生命周期期间。申明相对带驾驶员租用的真实动力/辅助差异；无明确分层及共同参考依据不得合并不兼容技术或容量时间功能。 | shalom-driver-hire;spiess-truck-hire |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| operated_truck_hire | 配驾驶员的货车租赁服务 | required | 真实适用配驾驶员租用；固定条件交换须兼容发生。 | foreground | accepted_operated_truck_hire |

本单一节点拥有真实配驾驶员租用及其归属生命周期。以下仅可独立识别原子卡。未知变量身份为清单外必须采集要求，非聚合流交换或已完成真实清单。

### 过程：配驾驶员的货车租赁服务 (`operated_truck_hire`)

#### 输入

##### 产品流

###### 柴油 (`diesel_input`)

仅记录兼容牌号/配方的实际柴油，归属车辆或支持运行消耗，不受付款方影响。保留来源、库存、使用、碳源及上游供应商；不兼容真实燃料须展开，不设默认密度或热值。

- 选定流：柴油 `9d258d75-6792-4f1c-9856-81602ed8f816`
- 流属性/单位：Mass / kg
- 数量规则：每声明验收租用参考的真实归属原生量，按第8节归一化一次。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每个声明的参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_native_supply`

###### 交流电 (`ac_input`)

仅实际在使用点外供的交流电，不以付款方或是否付费为条件。记录供应商、地域、组合、电压、交付接口、电表及充电/线路损失一次；直流或不兼容接口须独立身份。原生kWh仅按3.6换为MJ一次。

- 选定流：交流电 `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- 流属性/单位：Net calorific value / MJ
- 数量规则：每声明验收租用参考的真实归属原生量，按第8节归一化一次。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每个声明的参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_native_supply`

###### 自来水 (`tap_water_input`)

仅记录归属清洁或支持用的实际经处理自来水供应，保留原生供应接口及量。非环境原水取用或废水排放，体积转质量须真实兼容依据。

- 选定流：自来水 `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- 流属性/单位：Mass / kg
- 数量规则：每声明验收租用参考的真实归属原生量，按第8节归一化一次。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每个声明的参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_native_supply`

###### 洗涤剂 (`detergent_input`)

仅记录实际兼容的单一合成非皂类清洁配方及实际供应稀释状态。记录产品/配方及量；不以本身份表示肥皂、消毒剂或全部清洁品，不虚构成分交换。

- 选定流：洗涤剂 `1c57d123-df57-49ab-b9d4-957403beb8a5`
- 流属性/单位：Mass / kg
- 数量规则：每声明验收租用参考的真实归属原生量，按第8节归一化一次。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每个声明的参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_native_supply`

#### 输出

##### 产品流

###### 适用配驾驶员货车租用约定 (`accepted_operated_truck_hire`)

实际验收接口的一次独立验收适用配驾驶员货车租用约定。保留原约/真实变更配置、所租容量、正值真实验收可用H、运行责任及承租人指令；不以货物交付、正距离或正载荷为前提。

- 选定流：适用配驾驶员货车租用约定
- 流属性/单位：Number of items / Item(s)
- 数量规则：1 Item(s)
- 数值来源模式：`fixed_value`
- 适用范围：`site_specific`
- 归一化基准：每个声明的参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_hire_acceptance`

##### 废物流

###### 废润滑油 (`used_oil_output`)

仅实际产生并单独收集的单一石油基或合成废润滑油流，接口为产生点。不代表含油水、污泥、废冷却液、轮胎或混合维修废物。通过必须展开记录真实收集、保管、接收者及去向，不自动抵扣回收。

- 选定流：废润滑油 `55d93375-7f04-4166-b2a2-88ce929051a5`
- 流属性/单位：Mass / kg
- 数量规则：每声明验收租用参考的真实归属原生量，按第8节归一化一次。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每个声明的参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_generated_oil`

##### 基本流

###### 二氧化碳（化石源） (`fossil_co2_air`)

仅实际排入空气且真实接收子区室未指定的化石CO2。保留实际化石份额、物质质量、来源及测量/计算依据；已知其他子区室须兼容已核身份。不代表总温室气体、CO2e、生物源CO2或重复上游排放。

- 选定流：二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 流属性/单位：Mass / kg
- 数量规则：每声明验收租用参考的真实归属原生量，按第8节归一化一次。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每个声明的参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_co2_release`

## 7. 分配与联产品处理

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| direct_first | operated_truck_hire | 优先将事件/车辆/供应商/场址记录直接归属真实租用义务。共享原生量Q_j按q_ej = Q_j * d_ej / sum_all_users(d_uj)分配，分母须有证据、正值且为同功能兼容需求。仅有因果依据时可用可用容量时间，不默认货物吨公里或运价分配。 |  |
| all_user_life | operated_truck_hire | 逐项将初始资产及每次更换/维护/退役归属自身兼容服务寿命及全部真实使用者，包括其他租用、自营、待命/支持及各期间。采集观测/预测寿命需求及不确定性；不设通用寿命、利用率或份额，不得无依据地默认向一次约定计整项资产。 |  |
| output_and_reject | operated_truck_hire | 列全真实独立预期输出及交接；直接归属优先于有证据因果分配。待核输出/分配决定为阻断项。客户货物非所生产租用联产品。不自动抵扣废物或扣减反事实服务；保留失败/被拒活动负荷而不计失败输出。 |  |
| runs_and_pools | operated_truck_hire | 申明约定/事件/连续车队报告模式。清洁/换用、待命、调位及替车事件关联原租用或有证据共享池一次。先合计归属原生量，再除一致验收约定数N；不平均不同容量、时长、作业或地区强度。 |  |

## 8. 前景数据采集、计算与质量规则

约定Count、正值验收可用、原生库存/供应商/全部使用者寿命方法及必须原子完成门为PCR明确建模选择。不设通用价格、最短租期、资源率、密度、排放因子、寿命或回收抵扣。即使无清单卡代表实际子项，各cp_expand_仍必须完成。

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_hire_acceptance | operated_truck_hire | 参考输出及租用功能 | 合同与运行验收 | engagement_id;原约／真实变更义务（`original/amended obligation`）;vehicle_id;configuration;容量／原生单位（`capacity/native unit`）;驾驶员／供应商责任（`driver/provider responsibility`）;承租人指令（`renter direction`）;地区／作业（`region/duty`）;交付／归还接口（`delivery/return gates`）;可用时间区间（`available intervals`）;故障／替换（`failure/replacement`）;acceptance;N;H | 真实合同与签署/事件验收及车辆/驾驶员日志核对。独立验收义务计一次，保留真实时间区间及全部限定项；仅付款/最低计费不足。 | Item(s)；实际时间及容量单位 | 每真实事件及一致队列 | 真实约定/报告及完整生命周期期间 | 全部真实车辆、驾驶员、道路/场址单元、供应商及使用者 | 每个声明的参考流 | 原约；校准原生库存/事件/接收记录；具体子项及不确定性证据 |
| cp_native_supply | operated_truck_hire | 四个固定产品投入卡 | 计量、库存及来源记录 | event_id;车辆／场址／供应商（`vehicle/site/provider`）;真实产品／配方（`actual product/formulation`）;期初／期末库存（`opening/closing stock`）;接收／退回／转移（`receipts/returns/transfers`）;原生消耗量（`native consumption`）;meter;数量／属性／单位（`quantity/property/unit`）;gate;上游覆盖范围（`upstream coverage`）;allocation | 测量兼容真实供应/使用，包括客户提供物料，并核对库存。保留牌号/配方、电压/组合/损失及水供应接口；真实体积质量转换须产品专属证据。分开不兼容身份，避免购买当消耗及供应商已含重复。 | 实际原生单位；kg；MJ | 每真实事件及一致队列 | 真实约定/报告及完整生命周期期间 | 全部真实车辆、驾驶员、道路/场址单元、供应商及使用者 | 每个声明的参考流 | 原约；校准原生库存/事件/接收记录；具体子项及不确定性证据 |
| cp_generated_oil | operated_truck_hire | 单一废润滑油输出 | 产生、收集及保管记录 | stream_id;来源车辆／事件（`origin vehicle/event`）;油品身份／状态（`oil identity/condition`）;产生质量（`generated mass`）;collection;stock;receiver;transfer_id;fate;供应商覆盖范围（`provider coverage`） | 称量单一真实兼容产生废油流并核对储存/转移。在cp_expand_collected_wastes采集真实下游运输/处理及回收决定一次，不与污泥/水混为一流或默认处理。 | kg | 每真实事件及一致队列 | 真实约定/报告及完整生命周期期间 | 全部真实车辆、驾驶员、道路/场址单元、供应商及使用者 | 每个声明的参考流 | 原约；校准原生库存/事件/接收记录；具体子项及不确定性证据 |
| cp_co2_release | operated_truck_hire | 化石CO2排入真实未指定空气子区室 | 实测释放或兼容逐物质计算 | source_id;燃料／产品身份（`fuel/product identity`）;化石源份额（`fossil share`）;真实消耗质量／能量（`actual consumed mass/energy`）;species;接收区室（`receiving compartment`）;测量方法或因子来源（`measurement or factor source`）;氧化／去向（`oxidation/fate`）;uncertainty;上游排除项（`upstream exclusions`） | 测真实物质质量或用有依据且来源/技术兼容方法。区分化石/生物碳及未氧化/残留碳，不假设全部碳释放。不设通用因子、CO2e转换或重复上游排放。 | kg | 每真实事件及一致队列 | 真实约定/报告及完整生命周期期间 | 全部真实车辆、驾驶员、道路/场址单元、供应商及使用者 | 每个声明的参考流 | 原约；校准原生库存/事件/接收记录；具体子项及不确定性证据 |
| cp_expand_operating_inputs | operated_truck_hire | 真实运行物料与能源 | 必须原子展开登记 | 真实发生／有证据未发生（`occurrence/evidenced absence`）;穷尽适用范围（`exhaustive scope`）;child_row_id;节点／方向／类型（`node/direction/type`）;真实身份／状态／接口（`actual identity/state/gate`）;已核实 UUID／属性／单位组（`verified UUID/property/unitgroup`）;原生数量（`native quantity`）;来源／接收者／去向（`source/receiver/fate`）;供应商覆盖范围（`provider coverage`）;全部使用者／寿命／期间（`all users/life/period`）;ownership;uncertainty | 必须范围：真实运行物料与能源；各燃料/配方、非交流能源、润滑剂、尿素溶液、制冷剂、冷却液、轮胎、电池、清洁配方、包装及辅助供应。各分支确认真实发生或文件支持未发生。每真实子项创建唯一具体行，具已核原生身份/属性/单位支持、测量或有依据计算量、来源/去向及互斥生命周期/供应商/全部使用者归属。保留物理转移编号及精确已含项目，不重复固定卡。不以缺失当零、不虚构成分或保留待核聚合交换；适用性或子项证据待核阻断最终完成。 | 各实际原生单位 | 每真实事件及一致队列 | 真实约定/报告及完整生命周期期间 | 全部真实车辆、驾驶员、道路/场址单元、供应商及使用者 | 每个声明的参考流 | 原约；校准原生库存/事件/接收记录；具体子项及不确定性证据 |
| cp_expand_vehicle_assets | operated_truck_hire | 真实车辆与设备生命周期 | 必须原子展开登记 | 真实发生／有证据未发生（`occurrence/evidenced absence`）;穷尽适用范围（`exhaustive scope`）;child_row_id;节点／方向／类型（`node/direction/type`）;真实身份／状态／接口（`actual identity/state/gate`）;已核实 UUID／属性／单位组（`verified UUID/property/unitgroup`）;原生数量（`native quantity`）;来源／接收者／去向（`source/receiver/fate`）;供应商覆盖范围（`provider coverage`）;全部使用者／寿命／期间（`all users/life/period`）;ownership;uncertainty | 必须范围：真实车辆与设备生命周期；逐项真实货车/底盘/驾驶室/牵引车/挂车/车身/尾板/吊机或实际供应总成；初始提供、更换、维护及退役。各分支确认真实发生或文件支持未发生。每真实子项创建唯一具体行，具已核原生身份/属性/单位支持、测量或有依据计算量、来源/去向及互斥生命周期/供应商/全部使用者归属。保留物理转移编号及精确已含项目，不重复固定卡。不以缺失当零、不虚构成分或保留待核聚合交换；适用性或子项证据待核阻断最终完成。 | 各实际原生单位 | 每真实事件及一致队列 | 真实约定/报告及完整生命周期期间 | 全部真实车辆、驾驶员、道路/场址单元、供应商及使用者 | 每个声明的参考流 | 原约；校准原生库存/事件/接收记录；具体子项及不确定性证据 |
| cp_expand_shared_sites | operated_truck_hire | 真实共享道路场址支持资产 | 必须原子展开登记 | 真实发生／有证据未发生（`occurrence/evidenced absence`）;穷尽适用范围（`exhaustive scope`）;child_row_id;节点／方向／类型（`node/direction/type`）;真实身份／状态／接口（`actual identity/state/gate`）;已核实 UUID／属性／单位组（`verified UUID/property/unitgroup`）;原生数量（`native quantity`）;来源／接收者／去向（`source/receiver/fate`）;供应商覆盖范围（`provider coverage`）;全部使用者／寿命／期间（`all users/life/period`）;ownership;uncertainty | 必须范围：真实共享道路场址支持资产；逐项道路/车场/维修/清洗/停车/充电/通信资产或服务；全部使用者、期间及上游覆盖。各分支确认真实发生或文件支持未发生。每真实子项创建唯一具体行，具已核原生身份/属性/单位支持、测量或有依据计算量、来源/去向及互斥生命周期/供应商/全部使用者归属。保留物理转移编号及精确已含项目，不重复固定卡。不以缺失当零、不虚构成分或保留待核聚合交换；适用性或子项证据待核阻断最终完成。 | 各实际原生单位 | 每真实事件及一致队列 | 真实约定/报告及完整生命周期期间 | 全部真实车辆、驾驶员、道路/场址单元、供应商及使用者 | 每个声明的参考流 | 原约；校准原生库存/事件/接收记录；具体子项及不确定性证据 |
| cp_expand_driver_support | operated_truck_hire | 真实驾驶员及运行支持 | 必须原子展开登记 | 真实发生／有证据未发生（`occurrence/evidenced absence`）;穷尽适用范围（`exhaustive scope`）;child_row_id;节点／方向／类型（`node/direction/type`）;真实身份／状态／接口（`actual identity/state/gate`）;已核实 UUID／属性／单位组（`verified UUID/property/unitgroup`）;原生数量（`native quantity`）;来源／接收者／去向（`source/receiver/fate`）;供应商覆盖范围（`provider coverage`）;全部使用者／寿命／期间（`all users/life/period`）;ownership;uncertainty | 必须范围：真实驾驶员及运行支持；真实驾驶员/供应商责任、支持出行、培训、住宿及声明租用边界内有因果关系的资源/服务需求。各分支确认真实发生或文件支持未发生。每真实子项创建唯一具体行，具已核原生身份/属性/单位支持、测量或有依据计算量、来源/去向及互斥生命周期/供应商/全部使用者归属。保留物理转移编号及精确已含项目，不重复固定卡。不以缺失当零、不虚构成分或保留待核聚合交换；适用性或子项证据待核阻断最终完成。 | 各实际原生单位 | 每真实事件及一致队列 | 真实约定/报告及完整生命周期期间 | 全部真实车辆、驾驶员、道路/场址单元、供应商及使用者 | 每个声明的参考流 | 原约；校准原生库存/事件/接收记录；具体子项及不确定性证据 |
| cp_expand_contracted_operations | operated_truck_hire | 真实分包作业 | 必须原子展开登记 | 真实发生／有证据未发生（`occurrence/evidenced absence`）;穷尽适用范围（`exhaustive scope`）;child_row_id;节点／方向／类型（`node/direction/type`）;真实身份／状态／接口（`actual identity/state/gate`）;已核实 UUID／属性／单位组（`verified UUID/property/unitgroup`）;原生数量（`native quantity`）;来源／接收者／去向（`source/receiver/fate`）;供应商覆盖范围（`provider coverage`）;全部使用者／寿命／期间（`all users/life/period`）;ownership;uncertainty | 必须范围：真实分包作业；逐项真实配驾驶员分租、清洁、维护、救援、调位及支持服务；供应商精确已含项目与未覆盖缺口。各分支确认真实发生或文件支持未发生。每真实子项创建唯一具体行，具已核原生身份/属性/单位支持、测量或有依据计算量、来源/去向及互斥生命周期/供应商/全部使用者归属。保留物理转移编号及精确已含项目，不重复固定卡。不以缺失当零、不虚构成分或保留待核聚合交换；适用性或子项证据待核阻断最终完成。 | 各实际原生单位 | 每真实事件及一致队列 | 真实约定/报告及完整生命周期期间 | 全部真实车辆、驾驶员、道路/场址单元、供应商及使用者 | 每个声明的参考流 | 原约；校准原生库存/事件/接收记录；具体子项及不确定性证据 |
| cp_expand_collected_wastes | operated_truck_hire | 真实收集废物流及去向 | 必须原子展开登记 | 真实发生／有证据未发生（`occurrence/evidenced absence`）;穷尽适用范围（`exhaustive scope`）;child_row_id;节点／方向／类型（`node/direction/type`）;真实身份／状态／接口（`actual identity/state/gate`）;已核实 UUID／属性／单位组（`verified UUID/property/unitgroup`）;原生数量（`native quantity`）;来源／接收者／去向（`source/receiver/fate`）;供应商覆盖范围（`provider coverage`）;全部使用者／寿命／期间（`all users/life/period`）;ownership;uncertainty | 必须范围：真实收集废物流及去向；逐项实际单独收集的废油、废水、污泥、滤芯、冷却液、电池、轮胎、包装及其他真实流；实际接收者、转移及处理。各分支确认真实发生或文件支持未发生。每真实子项创建唯一具体行，具已核原生身份/属性/单位支持、测量或有依据计算量、来源/去向及互斥生命周期/供应商/全部使用者归属。保留物理转移编号及精确已含项目，不重复固定卡。不以缺失当零、不虚构成分或保留待核聚合交换；适用性或子项证据待核阻断最终完成。 | 各实际原生单位 | 每真实事件及一致队列 | 真实约定/报告及完整生命周期期间 | 全部真实车辆、驾驶员、道路/场址单元、供应商及使用者 | 每个声明的参考流 | 原约；校准原生库存/事件/接收记录；具体子项及不确定性证据 |
| cp_expand_substance_releases | operated_truck_hire | 真实排放物质及介质 | 必须原子展开登记 | 真实发生／有证据未发生（`occurrence/evidenced absence`）;穷尽适用范围（`exhaustive scope`）;child_row_id;节点／方向／类型（`node/direction/type`）;真实身份／状态／接口（`actual identity/state/gate`）;已核实 UUID／属性／单位组（`verified UUID/property/unitgroup`）;原生数量（`native quantity`）;来源／接收者／去向（`source/receiver/fate`）;供应商覆盖范围（`provider coverage`）;全部使用者／寿命／期间（`all users/life/period`）;ownership;uncertainty | 必须范围：真实排放物质及介质；逐项实际尾气、蒸发、制冷剂、轮胎/刹车/道路磨耗、水或土壤释放；明确物质/物种/颗粒基准及实际接收区室。各分支确认真实发生或文件支持未发生。每真实子项创建唯一具体行，具已核原生身份/属性/单位支持、测量或有依据计算量、来源/去向及互斥生命周期/供应商/全部使用者归属。保留物理转移编号及精确已含项目，不重复固定卡。不以缺失当零、不虚构成分或保留待核聚合交换；适用性或子项证据待核阻断最终完成。 | 各实际原生单位 | 每真实事件及一致队列 | 真实约定/报告及完整生命周期期间 | 全部真实车辆、驾驶员、道路/场址单元、供应商及使用者 | 每个声明的参考流 | 原约；校准原生库存/事件/接收记录；具体子项及不确定性证据 |
| cp_expand_resource_intakes | operated_truck_hire | 真实直接环境资源取用 | 必须原子展开登记 | 真实发生／有证据未发生（`occurrence/evidenced absence`）;穷尽适用范围（`exhaustive scope`）;child_row_id;节点／方向／类型（`node/direction/type`）;真实身份／状态／接口（`actual identity/state/gate`）;已核实 UUID／属性／单位组（`verified UUID/property/unitgroup`）;原生数量（`native quantity`）;来源／接收者／去向（`source/receiver/fate`）;供应商覆盖范围（`provider coverage`）;全部使用者／寿命／期间（`all users/life/period`）;ownership;uncertainty | 必须范围：真实直接环境资源取用；逐项实际环境水、空气、土地或其他资源，带原生身份及区室，区别于购买供应。各分支确认真实发生或文件支持未发生。每真实子项创建唯一具体行，具已核原生身份/属性/单位支持、测量或有依据计算量、来源/去向及互斥生命周期/供应商/全部使用者归属。保留物理转移编号及精确已含项目，不重复固定卡。不以缺失当零、不虚构成分或保留待核聚合交换；适用性或子项证据待核阻断最终完成。 | 各实际原生单位 | 每真实事件及一致队列 | 真实约定/报告及完整生命周期期间 | 全部真实车辆、驾驶员、道路/场址单元、供应商及使用者 | 每个声明的参考流 | 原约；校准原生库存/事件/接收记录；具体子项及不确定性证据 |
| cp_expand_cooutputs_transfers | operated_truck_hire | 真实独立联产品及物理转移 | 必须原子展开登记 | 真实发生／有证据未发生（`occurrence/evidenced absence`）;穷尽适用范围（`exhaustive scope`）;child_row_id;节点／方向／类型（`node/direction/type`）;真实身份／状态／接口（`actual identity/state/gate`）;已核实 UUID／属性／单位组（`verified UUID/property/unitgroup`）;原生数量（`native quantity`）;来源／接收者／去向（`source/receiver/fate`）;供应商覆盖范围（`provider coverage`）;全部使用者／寿命／期间（`all users/life/period`）;ownership;uncertainty | 必须范围：真实独立联产品及物理转移；逐项真实独立预期输出、回收物或物理转移及接口；区分废物、客户货物保管及生产输出。各分支确认真实发生或文件支持未发生。每真实子项创建唯一具体行，具已核原生身份/属性/单位支持、测量或有依据计算量、来源/去向及互斥生命周期/供应商/全部使用者归属。保留物理转移编号及精确已含项目，不重复固定卡。不以缺失当零、不虚构成分或保留待核聚合交换；适用性或子项证据待核阻断最终完成。 | 各实际原生单位 | 每真实事件及一致队列 | 真实约定/报告及完整生命周期期间 | 全部真实车辆、驾驶员、道路/场址单元、供应商及使用者 | 每个声明的参考流 | 原约；校准原生库存/事件/接收记录；具体子项及不确定性证据 |
| cp_acceptance_cohort | operated_truck_hire | 参考义务兼容性与跨期队列 | 原约验收与事件台账 | obligation_id;original_amendments;function;configuration;capacity_native_unit;accepted_H;quality;technical_commercial_roles;region_duty;delivery_redelivery_gates;compatibility_decision;opening_ongoing;new_obligations;completed_accepted;failed_cancelled;closing_ongoing;event_id;contributing_node;period;pool_owner;provider_cells;quantity_method;range_evidence | 逐原始义务核对合同、验收与完整周期事件，保留截止点状态及贡献节点，执行reference_compatibility与completed_obligation_cohort。未完成负荷随自身义务保留；失败归属须因果证据。按发生或有证据未发生完成真实子项登记；行级护栏须独立兼容证据。 | Item(s); actual time and capacity units; actual native units | 逐真实义务及报告截止点 | 完整义务周期及可追踪期间 | 本节点参考义务及明确关联贡献者 | 每个声明参考流，按兼容完整履约队列汇总 | 原约及时序变更、验收、校准计量与事件所有者、独立样本和换算依据 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| engagement_count | 参考输出 | N = count(independently accepted qualifying hire obligations); H > 0。保留原约/真实变更功能及接口。行程、发票、换班或替车不增加N。 | 验收及真实可用区间 | 一致N及限定H |  |
| native_stock | 消耗产品投入 | U = opening_stock + receipts - closing_stock - returns - outward_transfers。核对实际使用/废物；仅库存平衡不证明消耗或释放。 | 兼容原生库存及事件 | 原生归属U |  |
| shared_native | 共享原生量或生命周期事件 | q_ej = Q_j * d_ej / sum_all_users(d_uj)。各分母须正值及同功能兼容，纳入全部真实使用者/期间。初始/更换/维护/退役及供应商项目各计一次。 仅当证据证明目标租用/队列覆盖同一资产/事件相关寿命内全部兼容使用者需求时，才允许份额为1。全部真实使用者的份额须合计为1；不得默认计入整项资产。 | 实际原生Q_j；有证据需求及完整寿命/供应商覆盖 | 归属原生q_ej |  |
| normalize_once | 一致租用队列清单 | q_ref = sum_e(q_e) / N, N > 0。仅汇总兼容配置/容量/时间/控制/接口/地区/作业，不同则保留分层。 选择分子及N前须执行reference_compatibility与completed_obligation_cohort。 | 归属原生量；一致N | 每声明参考流的量 |  |
| ac_native | 实际外供交流电，不以付款方或是否付费为条件 | E_MJ = E_kWh * 3.6。使用原生净热值支持，仅转换一次并保留实际接口/损失/供应商覆盖。 | 计量兼容交流电 | MJ |  |
| substance_release | 各实际排放物质 | 用实际逐物质质量测量或有依据兼容来源消耗方法，保留碳源、接收区室、残留/转移/氧化份额及不确定性。不设通用因子或整库存释放。 | 真实来源及去向依据 | 实际原生物质质量 |  |
| reference_compatibility | 全部真实行及义务 | 在合并或比较每次租用结果前，逐原始义务记录兼容性决策。须具有相同所供功能、兼容真实配置与采用原生单位的所租容量或功能能力、针对所声明每次租用参考相等的验收可用时间H、等价验收质量、运行与商业责任、交还接口、地区及作业。单位换算须已核支持；容差仅涵盖有证据的测量不确定性，不得掩盖不同服务功能或时长。H不同或容量、控制、作业、接口不兼容时保持分层，除非每项受影响数量均有记录且受物理证据支持地转换为一个明确声明的共同参考。Count、价格、名义车队容量及相同CPC代码均不能证明等价。事实缺失阻断合并；一项仍为一个真实原始验收义务。 | cp_acceptance_cohort; actual native records | 有证据的兼容队列、唯一归属与行级证据决策 |  |
| completed_obligation_cohort | 参考输出及关联贡献节点 | 本次租用参考采用明确的完整履约队列。逐报告截止点保留期初在履行义务、本期新增义务、已完成验收义务、终止失败或取消义务及期末在履行义务，记录原始编号及时序变更。各实物事件归属真实义务及节点或一个有证据的共享池。对每项计入N的义务收齐整个因果服务周期，包括报告窗口之前的事件；不得将日历期内全部采购或在履行合同活动除以该期完成数。在履行活动随自身义务保留至以后核对，不得当零或计为验收的小数项。失败或取消负荷保持独立可追踪，仅可经有记录的因果服务池归属进入验收队列，不得任意转嫁其他产品或期间。期间与完整义务台账须核对且事件不重复。N=0时保留负荷，不报告有限每项强度。按期间提供的服务输出须另有明确兼容参考并经审查，不得静默重释本Count。 | cp_acceptance_cohort; actual native records | 有证据的兼容队列、唯一归属与行级证据决策 |  |
| foreground_expansion_reconciliation | 全部真实行及义务 | 逐必须展开协议建立由其声明节点负责的适用性登记，状态为已发生、有证据未发生或待核。已发生分支须有穷尽真实子项清单；逐子项记录唯一行编号、方向类型、真实身份状态接口、原生属性单位数量及方法、来源接收去向、实物转移编号及协议、供应商精确已含阶段事件场址期间，以及适用时资产全部使用者寿命归属。未发生决策须有带日期原始记录及明确节点期间范围；无证据即待核。先在兼容库存转换接收接口核对未分配的真实物料、水、碳和能源台账，再分配环境负荷；已分配数量不能替代实物守恒。内部转移须有配对原生量及唯一保管事件所有者，不是新增外部供应或释放。不绑定协议标签或虚构混合物流组分。真实发生性、身份、数量、去向或覆盖待核阻断具体前景包完成；PCR合同检查本身不能关闭该登记。 | cp_acceptance_cohort; actual native records | 有证据的兼容队列、唯一归属与行级证据决策 |  |
| conditional_range_guardrails | 全部真实行及义务 | 固定参考输出量属于归一化定义，不是观测得率分布。对其他每个真实清单行，在采用数值QA护栏前采集独立兼容参考样本或物理方法约束。记录行及节点、发生条件、配置容量与H分层、供应商状态接口、原生单位及换算依据、样本来源期间、方法、上下界及不确定性。仅在相同声明基准上比较同类数量；每次租用的分子不能直接与每小时或每质量上下界比较。不得使用待验证批次自身最小或最大值验证自身。兼容数值范围缺失属于待核证据需求，不是零、已接受默认值或异常的证明。不虚构通用每次租用区间，不以暂定估计替代测量。升级审核状态前须审查每个必需行级范围决策及支持证据；待核范围保持披露。 | cp_acceptance_cohort; actual native records | 有证据的兼容队列、唯一归属与行级证据决策 |  |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| functional_acceptance | 真实租用输出 | 原约/变更约定、真实驾驶员/车辆可用、所租容量、正值验收H、承租人指令及运行责任须支持相同申明服务。验收或功能缺失为阻断项。 | cp_hire_acceptance |
| atomic_register | 全部必须展开 | 须穷尽本节点发生/未发生及具体子项证据。真实变量身份不能以聚合协议名表示。子项身份/原生量/支持/供应商/寿命/去向缺口阻断最终数据。 | cp_expand_operating_inputs;cp_expand_vehicle_assets;cp_expand_shared_sites;cp_expand_driver_support;cp_expand_contracted_operations;cp_expand_collected_wastes;cp_expand_substance_releases;cp_expand_resource_intakes;cp_expand_cooutputs_transfers |
| life_and_provider | 全部共享资产及服务 | 全部使用者寿命需求覆盖租用、自营、同期使用者、待命/支持、维护及报告期间。初始/更换/维护/退役及供应商已含项目具唯一归属；不确定预测须敏感性分析，不猜寿命。 | cp_expand_vehicle_assets;cp_expand_shared_sites;cp_expand_contracted_operations |
| site_and_mode | 车队/场址/报告队列 | 列全部贡献车辆、驾驶员、车场、道路/支持场址及供应商，原生记录关联共同边界。申明事件/连续模式及实际权重，不无权平均不同租用强度或遗漏场址。 | cp_hire_acceptance;cp_native_supply;cp_expand_shared_sites |
| native_fates | 供应、废物及排放 | 须校准原生记录、兼容真实牌号/状态、来源及接收介质、实际物质基准及下游处理依据。保留缺失、不确定性及排除，不设密度/排放/人力/回收默认值。 | cp_native_supply;cp_generated_oil;cp_co2_release |
| cohort_and_evidence_gate | all contributing nodes | 逐义务兼容性、跨期状态、真实子项及独立范围证据须可追踪。未知事实不当零，未完成义务不混入完成队列。 | cp_acceptance_cohort |

## 9. 验证规则

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| scope_reference | operated_truck_hire | 核实真实配驾驶员租用实质、正值真实验收H及全部参考限定项。不以无驾驶员租赁、仅操作人、制造或货运承运替代，不设正载荷/距离条件。N计独立验收义务，不计付款、班次、行程或替车。 |  |
| native_identity | operated_truck_hire | 每真实交换须一个兼容已核具体UUID、原生属性/单位/量/接口、来源/供应商及不确定性。条件固定卡须兼容真实发生，不兼容身份须单独子项。缺失数据为未知，不得当零。 |  |
| atomic_completion | operated_truck_hire | 全部必须cp_expand_协议须穷尽发生或有证据未发生及具体子登记。每真实子项须唯一行号、方向/类型、身份/状态/接口、已核UUID/支持、原生量、来源/接收/去向、供应商/寿命/全部使用者归属及不重复证据。真实范围、身份、量、去向或归属待核均阻断最终前景数据完成及下游发布；要求不等于已完成交换。 |  |
| coverage_and_balance | operated_truck_hire | 核对原生计量、期初期末库存、购买、使用、转移及废物，保留实际碳源/物质/介质。每共享资产/供应商项目、运行/场址/使用者/生命周期期间及故障/替车路径具单一归属、有证据兼容分母且无重叠。寿命、代表性或边界覆盖不全为阻断项。 |  |
| route_acceptance | operated_truck_hire | 消解真实互斥配置、验收与被拒/不可用期间、连续/事件池及全部预期输出/交接。发票名、费用、名义车队容量或广告时长非物理验收证据；车队/场址汇总须兼容功能及合理权重。 |  |
| reference_compatibility_gate | 全部贡献节点 | 合并前按实际功能、配置容量、验收H、质量、责任、作业及接口核查reference_compatibility；无支持组合须保持分层。 |  |
| completed_obligation_cohort_gate | 全部贡献节点 | 依据截止点状态及完整周期事件唯一归属核查completed_obligation_cohort；不得将未完成活动或待归属失败负荷静默除以完成数N，N=0不报告有限强度。 |  |
| foreground_expansion_reconciliation_gate | 全部贡献节点 | 分配前逐必须同节点协议、具体子项及实物台账核查foreground_expansion_reconciliation；适用性、身份、数量、去向或供应商重叠待核阻断前景完成。 |  |
| conditional_range_guardrails_gate | 全部贡献节点 | 将conditional_range_guardrails与固定参考定义分别核查；数值护栏须独立兼容证据、共同基准及已审核范围，不得用待验批次自证或虚构通用上下界。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | secondary_dataset; background_dataset |
| downstream_use | 适用配驾驶员货车及其他机动货运车辆租用清单，用于过程及生命周期模型。 |
| allowed_use | 实际独立验收义务，配置/容量/时间/控制/接口/地区/作业一致，且完成原子/原生/生命周期/供应商审查。 |
| excluded_use | 未限定约定数；承运、无驾驶员租赁、仅操作人或制造替代；客户燃料当免费；待核展开当零；强制正距离/载荷。 |
| required_metadata | 实际约定编号及原约/真实变更义务；货车或其他机动货运车辆身份；配置及带原生单位的所租容量；正值真实验收可用时间H；报告期间；驾驶员/供应商运行责任；承租人指令/控制；可用性/质量/验收及替车条件；交付归还接口；服务地区及作业；真实待命/调位/故障/替车；全部使用者资产寿命及原生供应商覆盖; compatibility_decision; completed_obligation_cohort; row_range_evidence_status |
| required_quality_disclosure | 真实原约/变更租用范围与验收；故障/替车/待命；原生供应及不依付款边界；全部使用者/供应商/寿命覆盖；真实身份/数据/去向缺口及不确定性。 |
| update_trigger | 真实功能、配置、容量、验收可用/控制/接口、地区/作业、原生能源/物料、供应商/寿命/分配或真实排放/废物去向变更。 |

## 11. 数据源

| source_id | type | reference | used_for |
| --- | --- | --- | --- |
| unsd-truck-hire-2025 | official_guidance | UNSD, CPC 3.0 66012 (30 June 2025). https://unstats.un.org/unsd/classifications/Econ/Structure/Detail/EN/2100/66012 | 官方范围：配驾驶员货车及其他机动货运车辆；排除无驾驶员73112及公路货运6511。 |
| shalom-driver-hire | literature | Shalom Movers, Lorry Rental in Singapore with Driver, accessed 23 October 2026. https://shalom.com.sg/lorry-rental-in-singapore-with-driver/ | 有限商业实例：真实车辆/配置匹配、车辆及驾驶员预订、时长及客户装卸与驾驶员运行。广告价格、尺寸或最短租期不作为通用规则。 |
| spiess-truck-hire | literature | SPIESS, Truck Hire with Driver, accessed 23 October 2026. https://spiess.fr/en/truck-hire/ | 有限商业实例：整车/牵引车/半挂车车身、辅助设备、操作人及地区/场址作业差异；公开车队清单不视为完整或通用。 |
