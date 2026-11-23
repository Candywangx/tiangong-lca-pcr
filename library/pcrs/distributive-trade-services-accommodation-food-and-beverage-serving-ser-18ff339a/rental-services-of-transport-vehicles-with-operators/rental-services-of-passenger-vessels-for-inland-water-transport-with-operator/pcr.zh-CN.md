---
pcr_id: pcr.distributive-trade-services-accommodation-food-and-beverage-serving-ser-18ff339a.rental-services-of-transport-vehicles-with-operators.rental-services-of-passenger-vessels-for-inland-water-transport-with-operator
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 配船员的内河水上客船租赁服务

## 1. 范围与适用性

涵盖配船员、用于内陆水运的所有类型自航客船租赁，包括真实即时所供功能为带船员租用的游乐船。须由约定及实际运行确认合格船舶及船员可用义务；包船名称、有船员、发票或能源付款方单独不能确定租用。

排除无船员船舶租赁（CPC 73115）及无船员内陆游乐船租赁（CPC 73240）。以客票、行程或承运义务销售的客运、仅操作人员劳动、船舶制造及非内陆租用不属于本参考服务。不一概排除配船员游乐船，也不限于期租。下游运输服务与向其提供的带船员租用不同。

母活动为真实配船员内河客船租用。申明实际自航船舶、所租配置/容量、船长/船员及承租人责任、航行/可用接口、内陆水体及作业。仅有功能等价依据时，兼容船舶或所租容量可合入声明船队；消解互斥船舶状态及重叠义务。验收可用性允许零航行及零乘客；空载调位、真实待命、舱室/辅助需求、故障及验收替船仍为因果活动。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.distributive-trade-services-accommodation-food-and-beverage-serving-ser-18ff339a.rental-services-of-transport-vehicles-with-operators.rental-services-of-passenger-vessels-for-inland-water-transport-with-operator |
| classification_refs | CPC 3.0 66023; exact |
| covered_products | 涵盖配船员、用于内陆水运的所有类型自航客船租赁，包括真实即时所供功能为带船员租用的游乐船。须由约定及实际运行确认合格船舶及船员可用义务；包船名称、有船员、发票或能源付款方单独不能确定租用。 |
| excluded_products | 排除无船员船舶租赁（CPC 73115）及无船员内陆游乐船租赁（CPC 73240）。以客票、行程或承运义务销售的客运、仅操作人员劳动、船舶制造及非内陆租用不属于本参考服务。不一概排除配船员游乐船，也不限于期租。下游运输服务与向其提供的带船员租用不同。 |
| representative_product | 适用配船员内河客船租用约定 |
| production_route | 母活动为真实配船员内河客船租用。申明实际自航船舶、所租配置/容量、船长/船员及承租人责任、航行/可用接口、内陆水体及作业。仅有功能等价依据时，兼容船舶或所租容量可合入声明船队；消解互斥船舶状态及重叠义务。验收可用性允许零航行及零乘客；空载调位、真实待命、舱室/辅助需求、故障及验收替船仍为因果活动。 |
| market_state | 适用配船员内河客船租用约定 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| 功能对象（What） | 适用配船员内河客船租用约定 |
| 数量（How much） | 一次独立验收适用配船员内河客船租用约定 |
| 质量（How well） | 声明原约/真实变更自航船/配置/所租容量、船长/船员运行及航行责任、承租人指令、服务质量/内陆水体/作业及真实接口。 |
| 时间或周期（How long or cycle） | 正值真实验收可用H及真实约定/报告/生命周期期间，不要求正航行或乘客。 |
| 参考流关联（reference_flow_link） | `accepted_operated_inland_passenger_vessel_hire` |

| 字段 | 值 |
| --- | --- |
| 参考数量（Reference amount） | 1 |
| 参考产品流（Reference product flow） | 适用配船员内河客船租用约定 |
| 参考流属性（Reference flow property） | 物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` |
| 参考单位组（Reference unit group） | 数量单位 `5beb6eed-33a9-47b8-9ede-1dfe8f679159` |
| 参考单位（Reference unit） | Item(s) |
| 必要限定项（Required qualifiers） | 实际约定编号及原约/真实变更义务; 实际自航客船身份及配置; 带原生单位的实际所租客运容量; 正值真实验收可用时间H; 约定/报告期间; 船长/船员/供应商运行责任; 承租人使用指令/控制及保留的航行责任; 可用性/质量/验收及替船条款; 交付/归还接口; 实际内陆水体/地区及作业; 待命/调位/故障/替船记录; 全部使用者资产寿命及精确原生供应商覆盖 |

在参考说明或数据集元数据申明全部限定项，真实功能或限定项缺失则参考不完整。

## 4. 计量与单位规则

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| qualified_count | 参考产品 | 物品数量 | Item(s) | 计一次实际独立验收配船员自航内河客船租用义务，具全部限定项及正值真实验收H。航行、乘客、发票、班次及替船不定义参考。 |
| native_quantity | 全部真实交换 | 实际已核原生属性 | 实际原生单位 | 用真实原生量或有依据兼容转换。实际外供交流电不以付款方或是否付费为条件，采用原生净热值MJ或kWh，1 kWh = 3.6 MJ仅一次。不设通用密度、热值、寿命、最短租期或资源率。 |
| compatible_demand | 供应商及资产子项 | 实际已核原生属性 | 实际原生单位 | 原生小时/天/Count/资产/服务及容量可用时间在缩放前须符合真实所租船功能、配置、容量、期间及接口。乘客公里、客票、航次、费用及总船队名义容量不默认为等价。 |

## 5. 系统边界

### 边界抽象

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 真实自航内陆客船及船员可用义务、原配置/所租容量/责任及原生供应商接口。 |
| starting_condition_role | 前景采集接口；初始/客户能源、船/岸资产、船员/支持、资源、废物及释放仍纳入。 |
| product_classification_scope | CPC 3.0 66023 |
| recursive_input_rule | 以原生单位及精确供应商覆盖记录真实同功能配船员分租一次；采集缺口，不向自身采购或重复租用/承运输出。 |
| upstream_dataset_requirement | 真实原生内陆带操作船功能、配置/所租容量/时间、船员/责任/接口、水体/作业及技术/期间兼容，保留未完成覆盖。 |
| disclosure | 实际约定编号及原约/真实变更义务; 实际自航客船身份及配置; 带原生单位的实际所租客运容量; 正值真实验收可用时间H; 约定/报告期间; 船长/船员/供应商运行责任; 承租人使用指令/控制及保留的航行责任; 可用性/质量/验收及替船条款; 交付/归还接口; 实际内陆水体/地区及作业; 待命/调位/故障/替船记录; 全部使用者资产寿命及精确原生供应商覆盖 |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| hire_function | operated_inland_passenger_vessel_hire | 从真实船舶及船员可用义务开始，至验收完成/归还。纳入归属准备、空载调位、验收待命、推进/舱室/辅助工作、清洁、故障/救援及验收替船。不可用/被拒时间非H，但保留因果负荷。真实故障船状态关联修复/返工、归还、更换或退役，物料/废物退出须具体子项。 | unsd-inland-passenger-hire-2025;hmrc-hire-context |
| complete_lifecycle | operated_inland_passenger_vessel_hire | 不依付款方采集真实原生能源/物料，包括已消耗初始/客户船存能源；船员/支持作业、船舶总成及内陆岸上/共享基础设施初始供应、维护、更换、退役、废物处理、资源取用及直接释放。由交付开始不表示这些为零。各未知分支仍须展开。 |  |
| provider_interface | operated_inland_passenger_vessel_hire | 兼容真实供应商数据集仅替代书面同功能原生需求/接口及精确已含生命周期项目一次；采集未覆盖项目，不向自身采购或重复燃料、船舶、船员、支持负荷。全部使用者资产需求包含其他租用、自营运输、舱室/待命/支持及同期容量使用者，记录真实转移归属。 |  |
| inland_units | operated_inland_passenger_vessel_hire | 逐项索引真实自航船/配置/所租容量、船长/船员、水体/作业、泊位/岸上/维修/供应商单元及报告/生命周期期间。说明真实推进/舱室/控制及不兼容状态；无共同功能等价依据则保留分层。一般航运背景并非内陆船舶法律或数值规定。 | unsd-inland-passenger-hire-2025;imo-operation-context;imo-pollution-context |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| operated_inland_passenger_vessel_hire | 配船员的内河水上客船租赁服务 | required | 真实适用配船员租用；固定条件交换须兼容发生。 | foreground | accepted_operated_inland_passenger_vessel_hire |

本单一节点拥有真实配船员租用及其归属生命周期。以下仅可独立识别原子卡。未知变量身份为清单外必须采集要求，非聚合流交换或已完成真实清单。

### 过程：配船员的内河水上客船租赁服务 (`operated_inland_passenger_vessel_hire`)

#### 输入

##### 产品流

###### 柴油 (`diesel_input`)

仅记录推进、辅助或归属支持实际使用的兼容柴油，不受付款方影响。纳入客户提供或原船存量的实际消耗；保留真实牌号/配方、化石/生物来源、库存及供应商。其他燃料身份须具体展开，不设默认密度或热值。

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

仅记录使用点实际外供交流电，不以付款方或是否付费为条件，包括有依据的岸电/舱室/充电供应。申明真实电压、组合、供应商、交付接口及线路/充电损失一次。船内发电不另作购买交流电投入，真实燃料/转换需求计一次。不同直流或能源身份须展开。

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

仅记录归属船舶、船员、清洁或岸上支持的实际经处理自来水供应，保留原生量及供应接口。不代表直接湖/河取水、冷却/压载水、舱底水或废水排放。真实体积质量转换须兼容依据。

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

仅记录实际兼容的单一合成非皂类清洁配方及其真实供应稀释状态。记录产品/配方及消耗量；肥皂、消毒剂、防污涂料及全部维护化学品不能以此身份代表。不虚构配方成分交换。

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

###### 适用配船员内河客船租用约定 (`accepted_operated_inland_passenger_vessel_hire`)

实际验收的一次独立适用自航内河客船带船员租用约定。保留原约/真实变更配置、所租容量、正值真实验收可用H、责任、承租人指令、水体/作业及交付/归还/替船接口。不设航行或正乘客数量条件。

- 选定流：适用配船员内河客船租用约定
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

仅记录实际单独收集、在产生点的单一石油基或合成废润滑油流。不代表舱底/含油水、污泥、废冷却液、生活污水或混合船舶废物。保留真实质量、保管、转移、接收者及去向；单独采集真实下游运输/处理，不默认回收抵扣。

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

仅记录实际排入空气且真实接收子区室未指定的化石CO2物质质量。保留碳源、实际推进/辅助/支持来源及实测或兼容计算依据。已知其他区室须兼容身份，不代表生物源CO2、总温室气体、CO2e或重复上游排放。

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
| direct_first | operated_inland_passenger_vessel_hire | 尽可能将真实船舶/事件/供应商/岸上记录直接归属租用义务。共享原生Q_j按q_ej = Q_j * d_ej / sum_all_users(d_uj)，分母须有依据、正值且为同功能兼容全部使用者需求。仅有因果依据时可用可用容量时间，乘客公里、客票、航距、租价或港费非默认租用驱动。 |  |
| all_user_life | operated_inland_passenger_vessel_hire | 逐项将真实初始船/总成/岸上资产及每次更换、维护、退役事件归属自身兼容使用寿命及全部真实使用者/功能/期间，包括其他租用、自营运输、待命/舱室/支持及同期容量。保留观测/预测需求、不确定性及敏感性，不设通用寿命，不得无依据地默认每次租用计入整项资产。 |  |
| outputs_and_rejects | operated_inland_passenger_vessel_hire | 列全真实独立预期输出及各交接，直接归属优先于有证据因果分配。待核输出/归属/去向决定阻断完成。客运/保管不构成第二所产租用输出。保留失败/不可用/被拒活动负荷而不计验收H/N，不自动抵扣废物或反事实替代。 |  |
| events_and_periods | operated_inland_passenger_vessel_hire | 申明真实约定/事件/船队报告期间。准备、清洁/换用、待命、调位、故障、救援及替船事件关联原义务或有依据共享池一次，保留实物转移编号及供应商归属。先合计归属原生量再除一致N，不平均不同容量、时长、水体、作业或技术强度。 |  |

## 8. 前景数据采集、计算与质量规则

约定Count、正值验收可用、原生库存/供应商/全部使用者寿命方法及必须原子完成门为PCR明确建模选择。不设通用价格、最短租期、资源率、密度、排放因子、寿命或回收抵扣。即使无清单卡代表实际子项，各cp_expand_仍必须完成。

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_hire_acceptance | operated_inland_passenger_vessel_hire | 真实内陆带操作租用参考 | 原约及真实验收 | engagement_id;原约／真实变更义务（`original/amended obligation`）;self_propelled_vessel_id;configuration;所租容量／原生单位（`hired_capacity/native_unit`）;船长／船员／供应商责任（`master/crew/provider responsibility`）;承租人指令／航行责任（`hirer direction/navigation responsibility`）;水体／地区／作业（`waterbody/region/duty`）;交付／归还／替船接口（`delivery/return/replacement gates`）;可用时间区间（`available intervals`）;故障／维修／替船（`failure/repair/substitute`）;acceptance;N;H | 真实原约/变更约定与实际船舶/船员可用及验收日志核对。保留全部限定项及精确时间区间，包括真实静止/零乘客可用性。独立验收义务计一次，仅付款、广告条款或有船员不足。 | Item(s)；实际时间及容量单位 | 每真实事件及一致队列 | 真实约定/报告及完整生命周期期间 | 全部真实船舶、船长/船员、内陆泊位/岸上单元、供应商及使用者 | 每个声明的参考流 | 原约；校准原生库存/事件/接收记录；具体子项及不确定性证据 |
| cp_native_supply | operated_inland_passenger_vessel_hire | 四项兼容原子产品投入 | 原生计量/库存/供应/来源记录 | event_id;船舶／岸上单元／供应商（`vessel/shore/provider`）;真实产品／配方（`actual product/formulation`）;初始／客户库存（`initial/customer stock`）;期初／期末库存（`opening/closing stock`）;接收／退回／转移（`receipt/return/transfer`）;原生使用量（`native use`）;meter;数量／属性／单位（`quantity/property/unit`）;来源／接口（`source/gate`）;loss;供应商覆盖范围（`provider coverage`）;allocation | 不依付款方测量实际兼容供应/使用，包括初始船存/客户存量消耗。核对量及接口/供应商范围，保留真实柴油牌号/碳源、交流电压/组合/损失、自来水供应及洗涤配方/稀释状态。不以购买当消耗、不设通用密度、不将船内发电重复采购。 | 实际原生单位；kg；MJ | 每真实事件及一致队列 | 真实约定/报告及完整生命周期期间 | 全部真实船舶、船长/船员、内陆泊位/岸上单元、供应商及使用者 | 每个声明的参考流 | 原约；校准原生库存/事件/接收记录；具体子项及不确定性证据 |
| cp_generated_oil | operated_inland_passenger_vessel_hire | 单一真实废油流 | 产生/收集/保管记录 | stream_id;船舶／事件／来源（`vessel/event/origin`）;废润滑油身份／状态（`used_lubricating_oil_identity/state`）;generated_mass;storage;transfer_id;receiver;真实运输／处理／去向（`actual transport/treatment/fate`）;供应商覆盖范围（`provider coverage`） | 在产生点称量单一真实兼容废润滑油流，并核对储存/转移。在cp_expand_collected_wastes记录真实去向/下游服务一次。舱底/含油水、污泥、生活污水及其他废流须各自子项，不以废油替代或自动回收。 | kg | 每真实事件及一致队列 | 真实约定/报告及完整生命周期期间 | 全部真实船舶、船长/船员、内陆泊位/岸上单元、供应商及使用者 | 每个声明的参考流 | 原约；校准原生库存/事件/接收记录；具体子项及不确定性证据 |
| cp_co2_release | operated_inland_passenger_vessel_hire | 化石CO2排入实际未指定空气子区室 | 实测物质或兼容计算 | source_id;推进／辅助／支持（`propulsion/auxiliary/support`）;真实燃料／产品（`actual fuel/product`）;消耗量／原生单位（`consumption/native_unit`）;fossil_fraction;species_mass;receiving_subcompartment;测量方法或因子／来源（`measurement or factor/source`）;氧化／留存／转移（`oxidation/retention/transfer`）;uncertainty;上游排除项（`upstream exclusion`） | 测真实化石CO2质量或使用有记录且来源/技术/原生消耗兼容方法。保留化石/生物分离、实际氧化及残留/转移碳，不假设全部释放。已知子区室须兼容已核身份，不设通用因子、CO2e或上游重复。 | kg | 每真实事件及一致队列 | 真实约定/报告及完整生命周期期间 | 全部真实船舶、船长/船员、内陆泊位/岸上单元、供应商及使用者 | 每个声明的参考流 | 原约；校准原生库存/事件/接收记录；具体子项及不确定性证据 |
| cp_expand_fuels | operated_inland_passenger_vessel_hire | 真实燃料身份与库存 | 必须原子展开登记 | 真实发生／有证据未发生（`occurrence/evidenced absence`）;穷尽适用分支（`exhaustive branch`）;唯一子项行标识（`unique child_row_id`）;节点／方向／类型（`node/direction/type`）;真实身份／状态／接口（`actual identity/state/gate`）;已核实 UUID／属性／单位组（`verified UUID/property/unitgroup`）;原生数量／方法（`native quantity/method`）;来源／接收者／去向（`source/receiver/fate`）;transfer_id;精确供应商覆盖范围（`exact provider coverage`）;全部使用者／功能／寿命／期间（`all users/functions/life/period`）;唯一归属责任方（`sole owner`）;uncertainty | 必须范围：真实燃料身份与库存；逐项非柴油卡精确表示的真实燃料配方/来源/状态；客户初始船存、接收/转移及真实消耗，不视初始能源免费。各分支证明发生或文件支持未发生。各真实子项须唯一具体行、兼容已核身份/属性/单位支持、原生实测或有依据计算量、来源/去向及互斥供应商/全部使用者/生命周期归属。保留真实总成或收集混合流身份，不虚构成分交换。不重复固定卡、实物转移或供应商已含项目；适用/身份/量/去向/归属缺失阻断完成。 | 各实际原生单位 | 每真实事件及一致队列 | 真实约定/报告及完整生命周期期间 | 全部真实船舶、船长/船员、内陆泊位/岸上单元、供应商及使用者 | 每个声明的参考流 | 原约；校准原生库存/事件/接收记录；具体子项及不确定性证据 |
| cp_expand_other_energy | operated_inland_passenger_vessel_hire | 真实能源供应及转换 | 必须原子展开登记 | 真实发生／有证据未发生（`occurrence/evidenced absence`）;穷尽适用分支（`exhaustive branch`）;唯一子项行标识（`unique child_row_id`）;节点／方向／类型（`node/direction/type`）;真实身份／状态／接口（`actual identity/state/gate`）;已核实 UUID／属性／单位组（`verified UUID/property/unitgroup`）;原生数量／方法（`native quantity/method`）;来源／接收者／去向（`source/receiver/fate`）;transfer_id;精确供应商覆盖范围（`exact provider coverage`）;全部使用者／功能／寿命／期间（`all users/functions/life/period`）;唯一归属责任方（`sole owner`）;uncertainty | 必须范围：真实能源供应及转换；逐项非交流电、热、冷、充电或能源产品；实际岸上/船内发电、储存、损失及原生来源至使用转换，不重复购买。各分支证明发生或文件支持未发生。各真实子项须唯一具体行、兼容已核身份/属性/单位支持、原生实测或有依据计算量、来源/去向及互斥供应商/全部使用者/生命周期归属。保留真实总成或收集混合流身份，不虚构成分交换。不重复固定卡、实物转移或供应商已含项目；适用/身份/量/去向/归属缺失阻断完成。 | 各实际原生单位 | 每真实事件及一致队列 | 真实约定/报告及完整生命周期期间 | 全部真实船舶、船长/船员、内陆泊位/岸上单元、供应商及使用者 | 每个声明的参考流 | 原约；校准原生库存/事件/接收记录；具体子项及不确定性证据 |
| cp_expand_crew_support | operated_inland_passenger_vessel_hire | 真实船员及运行支持 | 必须原子展开登记 | 真实发生／有证据未发生（`occurrence/evidenced absence`）;穷尽适用分支（`exhaustive branch`）;唯一子项行标识（`unique child_row_id`）;节点／方向／类型（`node/direction/type`）;真实身份／状态／接口（`actual identity/state/gate`）;已核实 UUID／属性／单位组（`verified UUID/property/unitgroup`）;原生数量／方法（`native quantity/method`）;来源／接收者／去向（`source/receiver/fate`）;transfer_id;精确供应商覆盖范围（`exact provider coverage`）;全部使用者／功能／寿命／期间（`all users/functions/life/period`）;唯一归属责任方（`sole owner`）;uncertainty | 必须范围：真实船员及运行支持；实际船长/船员/操作人责任及独立航行/运行/支持服务；有因果关系出行、住宿、供应及资源；自有劳动记录而不虚构自采购。各分支证明发生或文件支持未发生。各真实子项须唯一具体行、兼容已核身份/属性/单位支持、原生实测或有依据计算量、来源/去向及互斥供应商/全部使用者/生命周期归属。保留真实总成或收集混合流身份，不虚构成分交换。不重复固定卡、实物转移或供应商已含项目；适用/身份/量/去向/归属缺失阻断完成。 | 各实际原生单位 | 每真实事件及一致队列 | 真实约定/报告及完整生命周期期间 | 全部真实船舶、船长/船员、内陆泊位/岸上单元、供应商及使用者 | 每个声明的参考流 | 原约；校准原生库存/事件/接收记录；具体子项及不确定性证据 |
| cp_expand_vessel_assets | operated_inland_passenger_vessel_hire | 真实船舶总成生命周期 | 必须原子展开登记 | 真实发生／有证据未发生（`occurrence/evidenced absence`）;穷尽适用分支（`exhaustive branch`）;唯一子项行标识（`unique child_row_id`）;节点／方向／类型（`node/direction/type`）;真实身份／状态／接口（`actual identity/state/gate`）;已核实 UUID／属性／单位组（`verified UUID/property/unitgroup`）;原生数量／方法（`native quantity/method`）;来源／接收者／去向（`source/receiver/fate`）;transfer_id;精确供应商覆盖范围（`exact provider coverage`）;全部使用者／功能／寿命／期间（`all users/functions/life/period`）;唯一归属责任方（`sole owner`）;uncertainty | 必须范围：真实船舶总成生命周期；逐项真实供应自航船及独立供应推进、舱室、安全、储存或其他总成；初始提供/建造、更换、维护、退役；全部真实使用者/功能及同资产寿命。各分支证明发生或文件支持未发生。各真实子项须唯一具体行、兼容已核身份/属性/单位支持、原生实测或有依据计算量、来源/去向及互斥供应商/全部使用者/生命周期归属。保留真实总成或收集混合流身份，不虚构成分交换。不重复固定卡、实物转移或供应商已含项目；适用/身份/量/去向/归属缺失阻断完成。 | 各实际原生单位 | 每真实事件及一致队列 | 真实约定/报告及完整生命周期期间 | 全部真实船舶、船长/船员、内陆泊位/岸上单元、供应商及使用者 | 每个声明的参考流 | 原约；校准原生库存/事件/接收记录；具体子项及不确定性证据 |
| cp_expand_shore_assets | operated_inland_passenger_vessel_hire | 真实内陆岸上共享资产 | 必须原子展开登记 | 真实发生／有证据未发生（`occurrence/evidenced absence`）;穷尽适用分支（`exhaustive branch`）;唯一子项行标识（`unique child_row_id`）;节点／方向／类型（`node/direction/type`）;真实身份／状态／接口（`actual identity/state/gate`）;已核实 UUID／属性／单位组（`verified UUID/property/unitgroup`）;原生数量／方法（`native quantity/method`）;来源／接收者／去向（`source/receiver/fate`）;transfer_id;精确供应商覆盖范围（`exact provider coverage`）;全部使用者／功能／寿命／期间（`all users/functions/life/period`）;唯一归属责任方（`sole owner`）;uncertainty | 必须范围：真实内陆岸上共享资产；逐项实际泊位、码头、系泊、岸上/充电/维修/支持资产或独立供应服务；全部消费者/场址/期间及精确上游覆盖。各分支证明发生或文件支持未发生。各真实子项须唯一具体行、兼容已核身份/属性/单位支持、原生实测或有依据计算量、来源/去向及互斥供应商/全部使用者/生命周期归属。保留真实总成或收集混合流身份，不虚构成分交换。不重复固定卡、实物转移或供应商已含项目；适用/身份/量/去向/归属缺失阻断完成。 | 各实际原生单位 | 每真实事件及一致队列 | 真实约定/报告及完整生命周期期间 | 全部真实船舶、船长/船员、内陆泊位/岸上单元、供应商及使用者 | 每个声明的参考流 | 原约；校准原生库存/事件/接收记录；具体子项及不确定性证据 |
| cp_expand_maintenance_materials | operated_inland_passenger_vessel_hire | 真实维护物料及配方 | 必须原子展开登记 | 真实发生／有证据未发生（`occurrence/evidenced absence`）;穷尽适用分支（`exhaustive branch`）;唯一子项行标识（`unique child_row_id`）;节点／方向／类型（`node/direction/type`）;真实身份／状态／接口（`actual identity/state/gate`）;已核实 UUID／属性／单位组（`verified UUID/property/unitgroup`）;原生数量／方法（`native quantity/method`）;来源／接收者／去向（`source/receiver/fate`）;transfer_id;精确供应商覆盖范围（`exact provider coverage`）;全部使用者／功能／寿命／期间（`all users/functions/life/period`）;唯一归属责任方（`sole owner`）;uncertainty | 必须范围：真实维护物料及配方；逐项实际润滑剂、液压液、制冷剂、冷却液、零件、电池、涂料、防污配方、清洁剂、包装及其他真实耗材，均自身供应接口；不虚构成分。各分支证明发生或文件支持未发生。各真实子项须唯一具体行、兼容已核身份/属性/单位支持、原生实测或有依据计算量、来源/去向及互斥供应商/全部使用者/生命周期归属。保留真实总成或收集混合流身份，不虚构成分交换。不重复固定卡、实物转移或供应商已含项目；适用/身份/量/去向/归属缺失阻断完成。 | 各实际原生单位 | 每真实事件及一致队列 | 真实约定/报告及完整生命周期期间 | 全部真实船舶、船长/船员、内陆泊位/岸上单元、供应商及使用者 | 每个声明的参考流 | 原约；校准原生库存/事件/接收记录；具体子项及不确定性证据 |
| cp_expand_contracted_services | operated_inland_passenger_vessel_hire | 真实带操作分租及供应服务 | 必须原子展开登记 | 真实发生／有证据未发生（`occurrence/evidenced absence`）;穷尽适用分支（`exhaustive branch`）;唯一子项行标识（`unique child_row_id`）;节点／方向／类型（`node/direction/type`）;真实身份／状态／接口（`actual identity/state/gate`）;已核实 UUID／属性／单位组（`verified UUID/property/unitgroup`）;原生数量／方法（`native quantity/method`）;来源／接收者／去向（`source/receiver/fate`）;transfer_id;精确供应商覆盖范围（`exact provider coverage`）;全部使用者／功能／寿命／期间（`all users/functions/life/period`）;唯一归属责任方（`sole owner`）;uncertainty | 必须范围：真实带操作分租及供应服务；逐项实际兼容带操作分租、修理、维护、清洁、拖带、救援、调位、接收或支持服务；原生需求及供应商精确已含/未含生命周期项目。各分支证明发生或文件支持未发生。各真实子项须唯一具体行、兼容已核身份/属性/单位支持、原生实测或有依据计算量、来源/去向及互斥供应商/全部使用者/生命周期归属。保留真实总成或收集混合流身份，不虚构成分交换。不重复固定卡、实物转移或供应商已含项目；适用/身份/量/去向/归属缺失阻断完成。 | 各实际原生单位 | 每真实事件及一致队列 | 真实约定/报告及完整生命周期期间 | 全部真实船舶、船长/船员、内陆泊位/岸上单元、供应商及使用者 | 每个声明的参考流 | 原约；校准原生库存/事件/接收记录；具体子项及不确定性证据 |
| cp_expand_collected_wastes | operated_inland_passenger_vessel_hire | 真实收集废物流及下游去向 | 必须原子展开登记 | 真实发生／有证据未发生（`occurrence/evidenced absence`）;穷尽适用分支（`exhaustive branch`）;唯一子项行标识（`unique child_row_id`）;节点／方向／类型（`node/direction/type`）;真实身份／状态／接口（`actual identity/state/gate`）;已核实 UUID／属性／单位组（`verified UUID/property/unitgroup`）;原生数量／方法（`native quantity/method`）;来源／接收者／去向（`source/receiver/fate`）;transfer_id;精确供应商覆盖范围（`exact provider coverage`）;全部使用者／功能／寿命／期间（`all users/functions/life/period`）;唯一归属责任方（`sole owner`）;uncertainty | 必须范围：真实收集废物流及下游去向；逐项实际单独收集舱底/含油水、污泥、生活污水、垃圾、废油、冷却液、滤芯、电池、涂层/防污/维修或其他真实废流；实际产生、储存、转移、接收者、运输、处理/去向。各分支证明发生或文件支持未发生。各真实子项须唯一具体行、兼容已核身份/属性/单位支持、原生实测或有依据计算量、来源/去向及互斥供应商/全部使用者/生命周期归属。保留真实总成或收集混合流身份，不虚构成分交换。不重复固定卡、实物转移或供应商已含项目；适用/身份/量/去向/归属缺失阻断完成。 | 各实际原生单位 | 每真实事件及一致队列 | 真实约定/报告及完整生命周期期间 | 全部真实船舶、船长/船员、内陆泊位/岸上单元、供应商及使用者 | 每个声明的参考流 | 原约；校准原生库存/事件/接收记录；具体子项及不确定性证据 |
| cp_expand_resource_intakes | operated_inland_passenger_vessel_hire | 真实环境资源取用 | 必须原子展开登记 | 真实发生／有证据未发生（`occurrence/evidenced absence`）;穷尽适用分支（`exhaustive branch`）;唯一子项行标识（`unique child_row_id`）;节点／方向／类型（`node/direction/type`）;真实身份／状态／接口（`actual identity/state/gate`）;已核实 UUID／属性／单位组（`verified UUID/property/unitgroup`）;原生数量／方法（`native quantity/method`）;来源／接收者／去向（`source/receiver/fate`）;transfer_id;精确供应商覆盖范围（`exact provider coverage`）;全部使用者／功能／寿命／期间（`all users/functions/life/period`）;唯一归属责任方（`sole owner`）;uncertainty | 必须范围：真实环境资源取用；逐项实际直接河/湖/其他环境水、冷却/压载取水、空气、土地或其他资源；原生来源区室、量、储存及实际回流/转移，不以购买自来水替代。各分支证明发生或文件支持未发生。各真实子项须唯一具体行、兼容已核身份/属性/单位支持、原生实测或有依据计算量、来源/去向及互斥供应商/全部使用者/生命周期归属。保留真实总成或收集混合流身份，不虚构成分交换。不重复固定卡、实物转移或供应商已含项目；适用/身份/量/去向/归属缺失阻断完成。 | 各实际原生单位 | 每真实事件及一致队列 | 真实约定/报告及完整生命周期期间 | 全部真实船舶、船长/船员、内陆泊位/岸上单元、供应商及使用者 | 每个声明的参考流 | 原约；校准原生库存/事件/接收记录；具体子项及不确定性证据 |
| cp_expand_substance_releases | operated_inland_passenger_vessel_hire | 真实物质释放及介质 | 必须原子展开登记 | 真实发生／有证据未发生（`occurrence/evidenced absence`）;穷尽适用分支（`exhaustive branch`）;唯一子项行标识（`unique child_row_id`）;节点／方向／类型（`node/direction/type`）;真实身份／状态／接口（`actual identity/state/gate`）;已核实 UUID／属性／单位组（`verified UUID/property/unitgroup`）;原生数量／方法（`native quantity/method`）;来源／接收者／去向（`source/receiver/fate`）;transfer_id;精确供应商覆盖范围（`exact provider coverage`）;全部使用者／功能／寿命／期间（`all users/functions/life/period`）;唯一归属责任方（`sole owner`）;uncertainty | 必须范围：真实物质释放及介质；逐项实际推进/辅助空气排放、制冷剂损失、防污/涂层释放、油/水/清洗/维修释放或颗粒；真实物质/相态/颗粒基准及空气/水/土壤接收区室、残留及处理份额。各分支证明发生或文件支持未发生。各真实子项须唯一具体行、兼容已核身份/属性/单位支持、原生实测或有依据计算量、来源/去向及互斥供应商/全部使用者/生命周期归属。保留真实总成或收集混合流身份，不虚构成分交换。不重复固定卡、实物转移或供应商已含项目；适用/身份/量/去向/归属缺失阻断完成。 | 各实际原生单位 | 每真实事件及一致队列 | 真实约定/报告及完整生命周期期间 | 全部真实船舶、船长/船员、内陆泊位/岸上单元、供应商及使用者 | 每个声明的参考流 | 原约；校准原生库存/事件/接收记录；具体子项及不确定性证据 |
| cp_expand_physical_transfers | operated_inland_passenger_vessel_hire | 真实实物交接及库存转移 | 必须原子展开登记 | 真实发生／有证据未发生（`occurrence/evidenced absence`）;穷尽适用分支（`exhaustive branch`）;唯一子项行标识（`unique child_row_id`）;节点／方向／类型（`node/direction/type`）;真实身份／状态／接口（`actual identity/state/gate`）;已核实 UUID／属性／单位组（`verified UUID/property/unitgroup`）;原生数量／方法（`native quantity/method`）;来源／接收者／去向（`source/receiver/fate`）;transfer_id;精确供应商覆盖范围（`exact provider coverage`）;全部使用者／功能／寿命／期间（`all users/functions/life/period`）;唯一归属责任方（`sole owner`）;uncertainty | 必须范围：真实实物交接及库存转移；逐项实际燃料/水/压载/舱底/物料/资产/收集废物在船、岸、供应商或使用者之间转移；唯一编号、起终点、原生量及单一归属；内部交接非新增供应或排放。各分支证明发生或文件支持未发生。各真实子项须唯一具体行、兼容已核身份/属性/单位支持、原生实测或有依据计算量、来源/去向及互斥供应商/全部使用者/生命周期归属。保留真实总成或收集混合流身份，不虚构成分交换。不重复固定卡、实物转移或供应商已含项目；适用/身份/量/去向/归属缺失阻断完成。 对每项真实相关的噪声、振动、热、生物或其他非质量物理交换，须分别识别并量化，记录真实来源、接收者、频率、地点及期间，采用实际兼容原生属性/单位/量及已核身份/支持。不虚构发生、不强设质量单位、不以缺失证据当零；真实适用、身份、原生支持或量待核仍阻断完成。 | 各实际原生单位 | 每真实事件及一致队列 | 真实约定/报告及完整生命周期期间 | 全部真实船舶、船长/船员、内陆泊位/岸上单元、供应商及使用者 | 每个声明的参考流 | 原约；校准原生库存/事件/接收记录；具体子项及不确定性证据 |
| cp_expand_cooutputs | operated_inland_passenger_vessel_hire | 真实独立输出及交接 | 必须原子展开登记 | 真实发生／有证据未发生（`occurrence/evidenced absence`）;穷尽适用分支（`exhaustive branch`）;唯一子项行标识（`unique child_row_id`）;节点／方向／类型（`node/direction/type`）;真实身份／状态／接口（`actual identity/state/gate`）;已核实 UUID／属性／单位组（`verified UUID/property/unitgroup`）;原生数量／方法（`native quantity/method`）;来源／接收者／去向（`source/receiver/fate`）;transfer_id;精确供应商覆盖范围（`exact provider coverage`）;全部使用者／功能／寿命／期间（`all users/functions/life/period`）;唯一归属责任方（`sole owner`）;uncertainty | 必须范围：真实独立输出及交接；逐项实际独立预期服务/产品或回收材料，具真实质量/接口/量；区分租用验收、下游客运、乘客/财物保管、残余物及废物；明确归属决定。各分支证明发生或文件支持未发生。各真实子项须唯一具体行、兼容已核身份/属性/单位支持、原生实测或有依据计算量、来源/去向及互斥供应商/全部使用者/生命周期归属。保留真实总成或收集混合流身份，不虚构成分交换。不重复固定卡、实物转移或供应商已含项目；适用/身份/量/去向/归属缺失阻断完成。 | 各实际原生单位 | 每真实事件及一致队列 | 真实约定/报告及完整生命周期期间 | 全部真实船舶、船长/船员、内陆泊位/岸上单元、供应商及使用者 | 每个声明的参考流 | 原约；校准原生库存/事件/接收记录；具体子项及不确定性证据 |
| cp_acceptance_cohort | operated_inland_passenger_vessel_hire | 参考义务兼容性与跨期队列 | 原约验收与事件台账 | obligation_id;original_amendments;function;configuration;capacity_native_unit;accepted_H;quality;technical_commercial_roles;region_duty;delivery_redelivery_gates;compatibility_decision;opening_ongoing;new_obligations;completed_accepted;failed_cancelled;closing_ongoing;event_id;contributing_node;period;pool_owner;provider_cells;quantity_method;range_evidence | 逐原始义务核对合同、验收与完整周期事件，保留截止点状态及贡献节点，执行reference_compatibility与completed_obligation_cohort。未完成负荷随自身义务保留；失败归属须因果证据。按发生或有证据未发生完成真实子项登记；行级护栏须独立兼容证据。 | Item(s); actual time and capacity units; actual native units | 逐真实义务及报告截止点 | 完整义务周期及可追踪期间 | 本节点参考义务及明确关联贡献者 | 每个声明参考流，按兼容完整履约队列汇总 | 原约及时序变更、验收、校准计量与事件所有者、独立样本和换算依据 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| engagement_count | 真实参考输出 | N = count(independently accepted qualifying hire obligations); H > 0。保留真实原约/变更船舶/配置/所租容量/船员/接口。航行、乘客、发票、班次或替船不增加N。 | 验收及真实可用区间 | 一致N及限定H |  |
| native_stock | 原生消耗产品 | U = opening_stock + receipts - closing_stock - returns - outward_transfers。纳入真实初始/客户库存及保管转移，核对真实使用/废物。仅库存平衡不证明消耗或释放。 | 兼容原生库存及事件 | 真实归属原生U |  |
| shared_native | 共享原生量或生命周期事件 | q_ej = Q_j * d_ej / sum_all_users(d_uj)。分母须正值及同功能兼容，覆盖真实船舶/资产寿命及全部使用者/功能/期间。初始/更换/维护/退役/供应商项目各归属一次。 仅当证据证明目标租用/队列覆盖同一资产/事件相关寿命内全部兼容使用者需求时，才允许份额为1。全部真实使用者的份额须合计为1；不得默认计入整项资产。 | 真实原生Q_j；有依据全部使用者需求及精确覆盖 | 归属原生q_ej |  |
| normalize_once | 一致租用队列清单 | q_ref = sum_e(q_e) / N, N > 0。仅汇总兼容所租配置/容量/时间/责任/接口/水体/作业，其他保留分层。 选择分子及N前须执行reference_compatibility与completed_obligation_cohort。 | 归属原生量；一致N | 每声明参考流的量 |  |
| ac_native | 实际外供交流电，不以付款方或是否付费为条件 | E_MJ = E_kWh * 3.6。使用原生净热值支持及真实使用点接口，转换一次并计真实损失/供应商覆盖。 | 计量兼容交流电 | MJ |  |
| substance_release | 各实际排放物质 | 用实际逐物质质量测量或来源/技术/原生消耗兼容有依据方法。保留真实碳源、接收介质、氧化/残留/转移/处理份额及不确定性；不设通用因子、全库存释放或供应等于排放假设。 | 真实来源及去向依据 | 真实原生物质质量 |  |
| reference_compatibility | 全部真实行及义务 | 在合并或比较每次租用结果前，逐原始义务记录兼容性决策。须具有相同所供功能、兼容真实配置与采用原生单位的所租容量或功能能力、针对所声明每次租用参考相等的验收可用时间H、等价验收质量、运行与商业责任、交还接口、地区及作业。单位换算须已核支持；容差仅涵盖有证据的测量不确定性，不得掩盖不同服务功能或时长。H不同或容量、控制、作业、接口不兼容时保持分层，除非每项受影响数量均有记录且受物理证据支持地转换为一个明确声明的共同参考。Count、价格、名义车队容量及相同CPC代码均不能证明等价。事实缺失阻断合并；一项仍为一个真实原始验收义务。 | cp_acceptance_cohort; actual native records | 有证据的兼容队列、唯一归属与行级证据决策 |  |
| completed_obligation_cohort | 参考输出及关联贡献节点 | 本次租用参考采用明确的完整履约队列。逐报告截止点保留期初在履行义务、本期新增义务、已完成验收义务、终止失败或取消义务及期末在履行义务，记录原始编号及时序变更。各实物事件归属真实义务及节点或一个有证据的共享池。对每项计入N的义务收齐整个因果服务周期，包括报告窗口之前的事件；不得将日历期内全部采购或在履行合同活动除以该期完成数。在履行活动随自身义务保留至以后核对，不得当零或计为验收的小数项。失败或取消负荷保持独立可追踪，仅可经有记录的因果服务池归属进入验收队列，不得任意转嫁其他产品或期间。期间与完整义务台账须核对且事件不重复。N=0时保留负荷，不报告有限每项强度。按期间提供的服务输出须另有明确兼容参考并经审查，不得静默重释本Count。 | cp_acceptance_cohort; actual native records | 有证据的兼容队列、唯一归属与行级证据决策 |  |
| foreground_expansion_reconciliation | 全部真实行及义务 | 逐必须展开协议建立由其声明节点负责的适用性登记，状态为已发生、有证据未发生或待核。已发生分支须有穷尽真实子项清单；逐子项记录唯一行编号、方向类型、真实身份状态接口、原生属性单位数量及方法、来源接收去向、实物转移编号及协议、供应商精确已含阶段事件场址期间，以及适用时资产全部使用者寿命归属。未发生决策须有带日期原始记录及明确节点期间范围；无证据即待核。先在兼容库存转换接收接口核对未分配的真实物料、水、碳和能源台账，再分配环境负荷；已分配数量不能替代实物守恒。内部转移须有配对原生量及唯一保管事件所有者，不是新增外部供应或释放。不绑定协议标签或虚构混合物流组分。真实发生性、身份、数量、去向或覆盖待核阻断具体前景包完成；PCR合同检查本身不能关闭该登记。 | cp_acceptance_cohort; actual native records | 有证据的兼容队列、唯一归属与行级证据决策 |  |
| conditional_range_guardrails | 全部真实行及义务 | 固定参考输出量属于归一化定义，不是观测得率分布。对其他每个真实清单行，在采用数值QA护栏前采集独立兼容参考样本或物理方法约束。记录行及节点、发生条件、配置容量与H分层、供应商状态接口、原生单位及换算依据、样本来源期间、方法、上下界及不确定性。仅在相同声明基准上比较同类数量；每次租用的分子不能直接与每小时或每质量上下界比较。不得使用待验证批次自身最小或最大值验证自身。兼容数值范围缺失属于待核证据需求，不是零、已接受默认值或异常的证明。不虚构通用每次租用区间，不以暂定估计替代测量。升级审核状态前须审查每个必需行级范围决策及支持证据；待核范围保持披露。 | cp_acceptance_cohort; actual native records | 有证据的兼容队列、唯一归属与行级证据决策 |  |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| functional_acceptance | 真实内陆带操作租用 | 真实约定、合格自航船/配置/所租容量、船员责任/承租人指令、正值验收H及全部接口/水体/作业须定义同一即时租用功能。航行/乘客及费用非验收证明。 | cp_hire_acceptance |
| atomic_register | 全部必须展开 | 各分支须本节点发生/有依据未发生及穷尽唯一具体子项，具原生身份/支持/量/来源/接收者/去向及供应商/全部使用者寿命归属。协议为要求非真实交换，真实子项证据待核阻断完成。 | cp_expand_fuels;cp_expand_other_energy;cp_expand_crew_support;cp_expand_vessel_assets;cp_expand_shore_assets;cp_expand_maintenance_materials;cp_expand_contracted_services;cp_expand_collected_wastes;cp_expand_resource_intakes;cp_expand_substance_releases;cp_expand_physical_transfers;cp_expand_cooutputs |
| life_provider | 真实共享船/岸/服务子项 | 全部真实租用、自营运输、同期容量、舱室/待命/支持及期间进入兼容正值同资产全部使用者寿命需求。初始/更换/维护/退役及供应商已含项目互斥，预测不确定须敏感性分析，不猜寿命或以费用作实物需求。 | cp_expand_vessel_assets;cp_expand_shore_assets;cp_expand_contracted_services |
| sites_periods | 全部真实贡献单元 | 列真实船/船长/船员/泊位/岸上/维修/供应商贡献单元及报告/生命周期期间，具原生记录及共同接口。先合计兼容归属原生量再除N；不同容量、时长、水体、作业及控制须分层及代表性依据。 | cp_hire_acceptance;cp_native_supply;cp_expand_shore_assets |
| native_fates | 全部供应/资源/转移/废物/释放 | 须校准原生初始/库存/计量/使用及转移/接收记录。分开自来水供应、直接取用、舱底/压载/生活污水/收集废物及实际物质/接收介质。保留防污/维护配方及真实去向，不以缺失当零，不设密度、释放、资源、船员率或回收默认。 | cp_native_supply;cp_generated_oil;cp_co2_release;cp_expand_resource_intakes;cp_expand_physical_transfers |
| cohort_and_evidence_gate | all contributing nodes | 逐义务兼容性、跨期状态、真实子项及独立范围证据须可追踪。未知事实不当零，未完成义务不混入完成队列。 | cp_acceptance_cohort |

## 9. 验证规则

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| scope_reference | operated_inland_passenger_vessel_hire | 核实完整配船员自航内陆客船范围、真实带操作租用实质、正值真实验收H及全部限定项。不以无船员、仅操作人、制造、客票/行程运输或海运租用替代，不一概排除配船员游乐船，不设正航行/乘客门。计独立验收义务，不计发票、航次、班次或替船。 |  |
| native_identity | operated_inland_passenger_vessel_hire | 每真实交换须一个兼容已核具体UUID、原生属性/单位/量、状态/接口、来源/供应商及不确定性。固定卡须兼容真实发生，不同燃料、能源、配方、废流或区室须独立子项。缺失为未知，不当零。 |  |
| atomic_completion | operated_inland_passenger_vessel_hire | 各必须cp_expand_须穷尽发生或有证据未发生及具体子项，不以聚合清单桶表示。每真实子项须本节点唯一行、方向/类型、身份/状态/接口、已核UUID及原生属性/单位支持、量/方法、来源/接收者/去向、供应商/全部使用者/寿命/期间归属及不重复证据。真实适用、身份、量、去向或归属待核均阻断最终前景完成及下游发布。 |  |
| physical_coverage | operated_inland_passenger_vessel_hire | 核对初始/客户燃料及各原生供应、期初期末库存、使用、资源取用、水/舱底/压载/物料转移、废物保管/处理及实际逐物质释放。保留化石/生物碳及真实接收介质，不假设全库存排放。内部转移具单一归属，不重复采购/释放。 |  |
| life_provider_sites | operated_inland_passenger_vessel_hire | 每船/总成/岸上/供应商生命周期项目、共享使用者/功能、单元/场址/报告期间及故障/维修/归还/替船路径具单一归属、正值同功能兼容需求及精确覆盖。消解互斥状态及全部输出/交接。全部使用者寿命、供应商范围或代表性缺失阻断完成；付款、名义容量及航行/乘客总量不能证明验收租用。 |  |
| reference_compatibility_gate | 全部贡献节点 | 合并前按实际功能、配置容量、验收H、质量、责任、作业及接口核查reference_compatibility；无支持组合须保持分层。 |  |
| completed_obligation_cohort_gate | 全部贡献节点 | 依据截止点状态及完整周期事件唯一归属核查completed_obligation_cohort；不得将未完成活动或待归属失败负荷静默除以完成数N，N=0不报告有限强度。 |  |
| foreground_expansion_reconciliation_gate | 全部贡献节点 | 分配前逐必须同节点协议、具体子项及实物台账核查foreground_expansion_reconciliation；适用性、身份、数量、去向或供应商重叠待核阻断前景完成。 |  |
| conditional_range_guardrails_gate | 全部贡献节点 | 将conditional_range_guardrails与固定参考定义分别核查；数值护栏须独立兼容证据、共同基准及已审核范围，不得用待验批次自证或虚构通用上下界。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | secondary_dataset; background_dataset |
| downstream_use | 适用配船员内河客船租用清单，供下游过程/生命周期模型使用。 |
| allowed_use | 实际独立验收配船员自航内陆客船租用，配置/所租容量/可用性/责任/接口/水体/作业一致，并完成原生原子/供应商/全部使用者寿命审查。 |
| excluded_use | 未限定约定Count、客票/乘客公里/航次承运、无船员、仅操作人、制造或海运租用替代；客户初始能源当免费；正航行/乘客门；待核展开当零。 |
| required_metadata | 实际约定编号及原约/真实变更义务; 实际自航客船身份及配置; 带原生单位的实际所租客运容量; 正值真实验收可用时间H; 约定/报告期间; 船长/船员/供应商运行责任; 承租人使用指令/控制及保留的航行责任; 可用性/质量/验收及替船条款; 交付/归还接口; 实际内陆水体/地区及作业; 待命/调位/故障/替船记录; 全部使用者资产寿命及精确原生供应商覆盖; compatibility_decision; completed_obligation_cohort; row_range_evidence_status |
| required_quality_disclosure | 原约/变更租用及验收静止/航行可用性；真实船员/控制/故障/替船；原生初始/客户供应及转移归属；全部使用者/供应商/寿命覆盖；真实未知身份/数据/去向及不确定性。 |
| update_trigger | 真实所租船/配置/容量、可用/责任/接口、水体/作业、推进/舱室/原生供应、供应商/寿命/分配或真实资源/转移/废物/释放去向变更。 |

## 11. 数据源

| source_id | type | reference | used_for |
| --- | --- | --- | --- |
| unsd-inland-passenger-hire-2025 | official_guidance | UNSD,CPC3.0 66023,30June2025. https://unstats.un.org/unsd/classifications/Econ/Structure/Detail/EN/2100/66023 | 官方全部配船员自航内陆客船；无船员船73115及无船员内陆游乐船73240排除，不一概限制配船员游乐船或仅期租。 |
| hmrc-hire-context | official_guidance | HMRC,VTRANS110310 and TTM15120,accessed23October2026. https://www.gov.uk/hmrc-internal-manuals/vat-transport/vtrans110310 and https://www.gov.uk/hmrc-internal-manuals/tonnage-tax-manual/ttm15120 | 实际保留英国税务手册正文仅提供有限租用/承运、待命及燃料付款与船员责任问题。非CPC权威、通用租条、内陆/全球法律意见，非要求期租/正航行。 |
| imo-operation-context | official_guidance | IMO,International Safety Management Code overview,accessed23October2026. https://www.imo.org/en/ourwork/humanelement/pages/ismcode.aspx | 仅实际保留概览的一般组织/人员/运行条件及环境责任问题。不声称阅读链接规则、强制配员或对全部内陆船法律适用。 |
| imo-pollution-context | official_guidance | IMO,Pollution Prevention,accessed23October2026. https://www.imo.org/en/ourwork/environment/pages/pollution-prevention.aspx | 仅实际保留定性油/空气/生活污水/垃圾/压载/污损/回收/接收问题。真实内陆发生及去向另采，不导入公约适用、排放限值/因子或默认处理。 |
