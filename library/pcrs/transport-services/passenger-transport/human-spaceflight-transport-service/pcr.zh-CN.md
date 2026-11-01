---
pcr_id: pcr.human-spaceflight-transport-service
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 载人航天运输服务

## 1. 范围与适用性

本PCR适用于一名真实人员完成约定运往外太空、从外太空返回或在外太空内部运输的功能。声明实际端点及状态、轨迹或轨道、时长质量、运输单段或单一整体路径及所含安全返回回收责任。已评估真实舱式液固化学火箭与翼式空射混合火箭分支，其他实际同功能配置须完成自身物理证据及原生接口，不因缺UUID或数据排除真实产品。不能仅因载具结构不同另造运输功能，也不能将舱式参数复制给其他路线。

NASA称crew的航天员可正是被运输的接收人；驾驶监视研究职责、受雇身份或crew标签不能自动把其从完成数删除。按真实合同履约证据区分接收人、仅操作支持和双重角色，同一人员运输功能只计一次。仅在载机内工作的飞行员不能自动算航天接收人。

汇总前固定实际运输单段或整体运输路径及兼容端点质量分组。发射、越过某高度、各级分离、在轨滑行、对接、返回及回收可为内部活动，不能各增一最终人次。不同真实单段或回路完成规则须分组或透明有据混合。没有通用100km边界、座位载客率、成功概率、任务时长、推进剂比例、代谢量、复用寿命或排放范围。N=0时无有限参考强度，仍保留因果负荷。

排除仅座位售票预约、空载货运、载具可用性出租、只有地面或空中运输，以及作为整体功能的空间站驻留、科学探索或旅游接待套餐。只有真实产品细分及覆盖证据才可从整体包分出本运输组成，实际所含培训医疗生命保障接待纪念品不能随意删除。真实载机火箭级舱生命保障地面回收制造和全寿命均须完整；自营内部阶段不是外购结果，真实外部成品仅替换准确已含单元。

保留分阶段化学物种颗粒形态和已知大气层位外太空水土接收介质。不能为取得LCIA表征而把高空外太空释放改绑地面未指定空气，未知物理量去向与缺少表征因子须分披露且不能归零。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.human-spaceflight-transport-service |
| classification_refs | CPC3.0 64250;exact actual human-space passenger transport |
| covered_products | 真实已完成运往外太空、从外太空返回或在外太空内部的人员运输，含实际舱式翼式空射及有据其他同功能配置 |
| excluded_products | 仅票座位可用性、无人货运、纯地空运输、完整空间站科学探索旅游接待套餐 |
| representative_product | 已完成的声明载人航天运输 |
| production_route | 真实运输履约；载机及各级推进；生命保障地面回收；全资产寿命及分阶段物种去向 |
| market_state | 有真实接收角色端点质量及包含责任证据的已完成运输 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 已完成的声明载人航天运输 |
| How much | 1名真实接收人完成声明航天运输 |
| How well | 真实端点状态轨迹轨道时长质量接收角色及所含返回回收安全供给 |
| How long or cycle | 声明运输开始至约定完成交接，包括全部必要内部阶段；资产寿命另列 |
| reference_flow_link | completed_person_transport |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 已完成的声明载人航天运输 |
| 参考流属性 | 物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` |
| 参考单位组 | 物品数量单位 `5beb6eed-33a9-47b8-9ede-1dfe8f679159` |
| 参考单位 | Item(s) |
| 必需限定信息 | actual_transport_function;recipient_roles_dualroles;endpoint_state;trajectory_orbit_phase_altitude;duration_quality;segment_or_integrated_itinerary_grouping;actual_completion_attempt_abort;mission_period;carrier_launcher_stages_capsule_winged_configuration;included_training_ECLSS_medical_hospitality_return_recovery;cargo_research_otherfunctions;provider_native_gate_coverage;actual_propellant_formulation_phase_stocks_burn_vent_return;asset_native_manufacture_alluser_life;actual_species_particle_form_receiver_known_compartment;physical_inventory_and_LCIA_gaps |

必需限定信息须在数据包元数据、过程说明、参考流备注或等效字段声明，缺失即定义不完整。

## 4. 计量与单位规则

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| person_count | completed_person_transport | Number of items | Item(s) | N为真实兼容已完成被运人员功能数，不是crew排除规则、各级发射数或高度阈值。 |
| native_asset_count | launcher_first_stage;launcher_upper_stage;transport_capsule;service_trunk;carrier_aircraft;winged_spaceplane | Number of items | Item(s) | 实际交付原生制造数量乘同资产有效寿命份额，不能将质量改名数量或虚构全寿命服务。 |
| chemical_native_mass | rocket_kerosene;liquid_oxygen;liquid_hydrogen;hybrid_fuel_grain;n2o_oxidizer;mmh_fuel;nto_oxidizer;release_fates | Mass | kg | 保留纯物混合物相态分子元素及阶段介质，kgN/kgC不是化合物kg，密度或热值须真实兼容支持。 |
| native_energy_water | ground_ac;ground_tap_water | Energy;Volume | kWh;m3 | 按实际已附原生关系使用kWh及自来水m3，交流直流内转分开，不推其他液体密度或通用火箭能耗。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 真实运输约定接收角色及供应资产阶段交接点 |
| starting_condition_role | 明确责任接口而非上游制造历史零起点 |
| product_classification_scope | 64250真实运往外太空、从外太空返回或在外太空内部的人员运输，实际分支证据门槛不将缺数据当语义排除 |
| recursive_input_rule | 仅真实外部已完成具体功能依原生需求及准确覆盖链接，自营内部级载机生命保障不再外购 |
| upstream_dataset_requirement | 每真实化学能源材料资产支持回收的原生状态牌号量阶段及供应覆盖须核实 |
| disclosure | 端点质量角色任务单段路径、全部实际所含供给级载具供应寿命分配、物种层位去向及表征缺口 |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| function_and_role | transport_delivery | 纳入实际完成运输功能及约定端点质量时长和安全回收所含项。NASA称crew的航天员即使监视驾驶研究也可为交付接收人。须证实真实接收仅操作支持及双重角色，工资或crew标签不能将全部航天员从N删除或为一人产生两产出。仅载机飞行员不能自动算航天运输接收人。 | nasa-crew-kit;virgin-performed |
| segment_and_package | transport_delivery;life_support;ground_support | 汇总前固定真实单段或一整体运输路径及兼容端点质量。上升滑行对接返回回收可为内部活动而非额外完成。运输必要待命对接生命保障培训医疗和真实所含设施须完整。整体空间站驻留研究探索或旅游接待套餐为不同功能，仅依真实细分覆盖分出运输组成，不能靠删除所含项。 | nasa-crew-kit;virgin-brochure |
| native_stage_coverage | all_processes | 闭合接收人员任务级载具基地供应阶段覆盖。使用真实兼容外部已完成运输发射支持结果加仅未覆盖单元，或自营物理投入加未覆盖外部阶段。供应已含推进剂使用释放资产制造回收须准确替换对应前景单元，不能并计。内部级分离载机释放及能量转移不是额外外购功能。 |  |
| actual_route_branches | stage_operation;carrier_operation;recovery | 舱式分支负责真实助推级上面级乘员舱非加压舱逃逸对接待命降落伞溅落或陆地回收。翼式空射负责组合爬升释放载机返回混合发动机羽化滑翔跑道滑行地面活动。其他真实同功能配置须完整路线特定物理原生责任证据，不能复制舱式因子或因缺数据排除产品。 | nasa-crew-kit;virgin-facts;virgin-brochure;blue-engines |
| whole_lifecycle | vehicle_lifecycle;ground_support;recovery | 本PCR强制全部相关级乘员舱载机翼式航天器航天服生命保障发射台跑道机库控制回收资产原生制造及真实交付鉴定改装维护耗材更换回收退役。仅制造UUID不能变为全寿命服务。核实整物原装组件覆盖，实际消耗级非加压舱药筒及更换热盾仅负责一次。 |  |
| conditioning_and_provisions | stage_operation;life_support;ground_support | 纳入真实燃料氧化剂增压吹扫低温调节地面喷水清洁空气客舱航天服食品水卫生热控除CO2资源及去向。交付系统外普通离岗个人维生作为本PCR明示惯例排除并披露敏感性，不因此删除培训船上或所含接待运营供给，也不默认食品为劳务燃料。 | nasa-eclss-2017;nasa-reactive;virgin-brochure |
| receiving_environments | release_fates;recovery | 保留真实化学物种颗粒形态阶段轨迹时间及接收对流层平流层其他大气层外太空水土。不能整体绑定地面未指定空气，将合金kg当排放化合物或收集废物当大气释放。真实羽流排空烧蚀碎片质量化学转化去向须有据，无表征物理流仍须列清单并明示LCIA限制。 | noaa-reentry-2023 |

## 6. 过程清单结构

### 过程图

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| transport_delivery | 运输履约及接收人员角色 | required | 实际交付兼容载人航天功能 | reference_process | completed_person_transport |
| stage_operation | 级推进及航天器机动 | conditional | 实际自营或未覆盖火箭或航天器物理活动 | support_process | completed_person_transport |
| carrier_operation | 空射载机运营 | conditional | 真实空射分支及载机支持 | support_process | completed_person_transport |
| life_support | 客舱航天服及运输生命保障 | required | 实际相关接收人员或支持供给 | support_process | completed_person_transport |
| ground_support | 地面基地控制及任务支持 | required | 真实未覆盖地面组织基地责任 | support_process | completed_person_transport |
| vehicle_lifecycle | 运输载具及其余完整资产生命周期 | required | 真实相关载具级及其他资产 | support_process | completed_person_transport |
| recovery | 着陆回收及收集残余物 | conditional | 真实返回着陆回收及残余物责任 | support_process | completed_person_transport |
| release_fates | 分阶段直接释放及外部去向 | required | 真实物种介质轨迹清单及表征限制 | support_process | completed_person_transport |

所有节点共享最终真实人员运输参考，内部级或载机不能再造完成产出。每卡仅在真实发生且未由供应完整覆盖时采用，其他真实对象按第8节强制逐行扩展。

### 过程：运输履约及接收人员角色 (`transport_delivery`)

#### 输入

##### 产品流

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 已完成的声明载人航天运输 (`completed_person_transport`)

一名真实人员在实际端点、轨迹或轨道、状态、质量及所含安全回收义务下，接受已完成的运往外太空、从外太空返回或在外太空内部的声明运输功能。汇总前声明单段或一项有据整体运输路径，内部发射滑行对接返回阶段不增加最终单位。票座位发射次数crew标签载荷质量空间站天数或仅高度越线均不等于本履约。

- 选定流: 已完成的声明载人航天运输
- 流属性/单位: Count / Item(s)
- 数量规则: 1 Item(s)
- 数值来源模式: `fixed_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_transport`
- 来源: `un-cpc3-2025`, `nasa-crew-kit`

##### 废物流

##### 基本流

### 过程：级推进及航天器机动 (`stage_operation`)

#### 输入

##### 产品流

###### 级加注前供应的火箭级煤油 (`rocket_kerosene`)

实际有据火箭级煤油在加注前供应，保留配方牌号供应点及碳源。道路柴油航空燃油或炼厂中间馏分不足以证明本供应。 采用真实完整交付配方加组分台账，或以组分供应替换准确供应及上游单元，不能并计。

- 选定流: 级加注前供应的火箭级煤油
- 流属性/单位: Mass / kg
- 数量规则: 交付加注库存使用损失回收闭合后的归属实际净必要供应kg/N；cp_stage。不得采购等于燃烧或默认完全燃烧及通用化学计量排放。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_stage`
- 来源: `nasa-crew-kit`

###### 低温加注交接点供应的液氧 (`liquid_oxygen`)

仅用于声明级的实际低温液态氧，须有真实纯度温度调节加注点及上游液化运输损失覆盖。不是客舱气氧或大气摄入。 采用真实完整交付配方加组分台账，或以组分供应替换准确供应及上游单元，不能并计。

- 选定流: 低温加注交接点供应的液氧
- 流属性/单位: Mass / kg
- 数量规则: 交付加注库存使用损失回收闭合后的归属实际净必要供应kg/N；cp_stage。不得采购等于燃烧或默认完全燃烧及通用化学计量排放。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_stage`
- 来源: `nasa-crew-kit`, `blue-engines`, `nasa-reactive`

###### 低温加注交接点供应的液氢 (`liquid_hydrogen`)

实际低温液氢须有纯度生产路线液化加注点及蒸发责任，不是通用气氢。氢燃料不代表上游水其他释放或生命周期为零。 采用真实完整交付配方加组分台账，或以组分供应替换准确供应及上游单元，不能并计。

- 选定流: 低温加注交接点供应的液氢
- 流属性/单位: Mass / kg
- 数量规则: 交付加注库存使用损失回收闭合后的归属实际净必要供应kg/N；cp_stage。不得采购等于燃烧或默认完全燃烧及通用化学计量排放。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_stage`
- 来源: `blue-engines`

###### 供应交接点的配方HTPB混合火箭固体燃料药柱 (`hybrid_fuel_grain`)

实际供应配方端羟基聚丁二烯燃料药柱，须实测组分添加剂及固化状态。不是通用聚合物树脂或完整发动机药筒。采用完整装药药筒或以药柱壳体制造单元准确替换，两者互斥且闭合质量与供应覆盖。 采用真实完整交付配方加组分台账，或以组分供应替换准确供应及上游单元，不能并计。

- 选定流: 供应交接点的配方HTPB混合火箭固体燃料药柱
- 流属性/单位: Mass / kg
- 数量规则: 交付加注库存使用损失回收闭合后的归属实际净必要供应kg/N；cp_stage。不得采购等于燃烧或默认完全燃烧及通用化学计量排放。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_stage`
- 来源: `virgin-facts`

###### 一氧化二氮 (`n2o_oxidizer`)

实际N2O氧化剂产品在发动机加注前供应，须核实真实相态纯度温压交接点，不是四氧化二氮或氮质量基准。产品kg不等于大气N2O释放，燃烧分解排空回收及残余库存须区分。 采用真实完整交付配方加组分台账，或以组分供应替换准确供应及上游单元，不能并计。 所选原生N2O产品为工厂点生产混合，记录描述压缩或液化供应并列具名标准，不证明真实氧化剂级认证配方加注条件。须核实实际兼容纯化学品相态纯度温压供应范围，将真实接收加注桥接制造点，并另负责运输储存调节加注损失及未含阶段。不兼容牌号配方须自身身份，N2O产品绝不能替代大气N2O行。

- 选定流: 一氧化二氮 `ccc8e2c1-73c9-4d97-b7ef-67197790abd5`
- 流属性/单位: Mass / kg
- 数量规则: 交付加注库存使用损失回收闭合后的归属实际净必要供应kg/N；cp_stage。不得采购等于燃烧或默认完全燃烧及通用化学计量排放。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_stage`
- 来源: `virgin-facts`, `nasa-reactive`

###### 航天器加注前供应的一甲基肼推进剂 (`mmh_fuel`)

仅用于有据实际牌号组分及加注交接点的一甲基肼推进剂，NASA兼容性来源列举不证明某任务采用本牌号。肼偏二甲肼混合燃料及含燃料药筒均为不同身份。 采用真实完整交付配方加组分台账，或以组分供应替换准确供应及上游单元，不能并计。

- 选定流: 航天器加注前供应的一甲基肼推进剂
- 流属性/单位: Mass / kg
- 数量规则: 交付加注库存使用损失回收闭合后的归属实际净必要供应kg/N；cp_stage。不得采购等于燃烧或默认完全燃烧及通用化学计量排放。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_stage`
- 来源: `nasa-reactive`

###### 航天器加注前供应的四氧化二氮氧化剂 (`nto_oxidizer`)

仅用于真实化学配方相态及加注点有据的四氧化二氮产品。MON混合氮氧化物配方须有自身身份，不能将所有氧化剂视为纯N2O4或N2O。实际航天器采用情况须独立证实。 采用真实完整交付配方加组分台账，或以组分供应替换准确供应及上游单元，不能并计。

- 选定流: 航天器加注前供应的四氧化二氮氧化剂
- 流属性/单位: Mass / kg
- 数量规则: 交付加注库存使用损失回收闭合后的归属实际净必要供应kg/N；cp_stage。不得采购等于燃烧或默认完全燃烧及通用化学计量排放。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_stage`
- 来源: `nasa-reactive`

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

##### 基本流

### 过程：空射载机运营 (`carrier_operation`)

#### 输入

##### 产品流

###### 煤油型喷气燃料 (`carrier_turbine_fuel`)

仅用于实际兼容的载机航空涡轮煤油，须有真实牌号混配碳源供应点。涡扇载机不证明通用牌号或化石比例，其他真实不兼容燃料须自身身份。 采用真实完整交付配方加组分台账，或以组分供应替换准确供应及上游单元，不能并计。 所选原生身份为工厂点已制造煤油型喷气燃料，不是已送达飞机服务。须将真实载机接收加注桥接至工厂点，并分别负责全部未含运输储存加注调节损失及供应阶段。必须核实实际牌号混配碳源兼容性，不是火箭级煤油或批准认证结论。

- 选定流: 煤油型喷气燃料 `e1ede47a-b840-45e6-b711-98cb547902cf`
- 流属性/单位: Mass / kg
- 数量规则: 交付加注库存使用损失回收闭合后的归属实际净必要供应kg/N；cp_carrier。不得采购等于燃烧或默认完全燃烧及通用化学计量排放。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_carrier`
- 来源: `virgin-facts`, `virgin-brochure`

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

##### 基本流

### 过程：客舱航天服及运输生命保障 (`life_support`)

#### 输入

##### 产品流

###### 客舱生命保障接口供应的气态氧 (`eclss_oxygen`)

实际兼容气态氧供应须有真实呼吸质量压力交付及生命保障点，液氧压缩混合呼吸空气及内部再生氧须区分。 供应量加注库存循环消耗废水排空回收残余去向须闭合，不设通用代谢或损失率。

- 选定流: 客舱生命保障接口供应的气态氧
- 流属性/单位: Mass / kg
- 数量规则: 生命保障库存循环去向平衡后的归属实际必要供应kg/N；cp_eclss。内部循环再生不是另一采购或避免产品抵扣。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_eclss`
- 来源: `nasa-eclss-2017`

###### 供应客舱环境调节的气态氮 (`eclss_nitrogen`)

实际兼容气态氮须有真实纯度压力及客舱生命保障交接点，混合呼吸空气和内部循环不是额外纯氮采购。 供应量加注库存循环消耗废水排空回收残余去向须闭合，不设通用代谢或损失率。

- 选定流: 供应客舱环境调节的气态氮
- 流属性/单位: Mass / kg
- 数量规则: 生命保障库存循环去向平衡后的归属实际必要供应kg/N；cp_eclss。内部循环再生不是另一采购或避免产品抵扣。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_eclss`
- 来源: `nasa-eclss-2017`

###### 乘员飞行加注交接点供应的饮用水 (`flight_potable_water`)

仅用于真实质量及加注点有据的飞行饮用水，不能自动视为工厂自来水环境取水或未指定包装饮料，真实包装处理交付责任须另列。 供应量加注库存循环消耗废水排空回收残余去向须闭合，不设通用代谢或损失率。

- 选定流: 乘员飞行加注交接点供应的饮用水
- 流属性/单位: Mass / kg
- 数量规则: 生命保障库存循环去向平衡后的归属实际必要供应kg/N；cp_eclss。内部循环再生不是另一采购或避免产品抵扣。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_eclss`
- 来源: `nasa-eclss-2017`

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

##### 基本流

### 过程：地面基地控制及任务支持 (`ground_support`)

#### 输入

##### 产品流

###### 交流电 (`ground_ac`)

实际兼容外部交流在有据地面基地任务控制使用点输入，须核实电压供应及损失。内部电池放电太阳能直流转移再生不是本外部供应，真实外部直流须自身核实原生身份。供应已含电力替换准确单元。

- 选定流: 交流电 `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- 流属性/单位: Energy / kWh
- 数量规则: 真实计量点的归属原生毛输入kWh/N；cp_ground，上下游损失各完整一次。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_ground`

###### 自来水 (`ground_tap_water`)

仅用于地面基地消耗点实际兼容自来水，须核实交付处理及计量覆盖。不是飞行饮用水等级喷水循环环境取水或直接废水。采集真实喷水发射台冲洗调节及去向，不得供应等于排水。

- 选定流: 自来水 `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- 流属性/单位: Volume / m3
- 数量规则: 水箱库存重用闭合后的实际归属供应m3/N；cp_ground，采用已附原生体积支持，不猜其他液体密度。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_ground`

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

##### 基本流

### 过程：运输载具及其余完整资产生命周期 (`vehicle_lifecycle`)

#### 输入

##### 产品流

###### 制造交接点的完整液体推进运载火箭一级 (`launcher_first_stage`)

仅用于实际交付完整制造对象，须核实真实发动机储箱着陆设备及原装系统，可复用或一次性状态须有据而非默认。仅制造身份不是出租运输或全寿命服务。核实原装部件及供应已含阶段，原装部件不能重复采购。其他真实运载器固体助推器服务舱航天服地面回收资产须有自身具体身份。

- 选定流: 制造交接点的完整液体推进运载火箭一级
- 流属性/单位: Count / Item(s)
- 数量规则: 实际原生交付 Item(s) 乘同资产或队列归属兼容活动量/有据全使用者有效寿命总活动量/N；cp_life。实际一次性份额修复维护试验更换热盾发动机电池回收及制造未含退役须另计一次，宣传复用上限不是实际寿命。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_life`
- 来源: `nasa-crew-kit`

###### 制造交接点的完整运载火箭上面级 (`launcher_upper_stage`)

仅用于实际交付完整制造对象，须核实真实上面级发动机储箱结构及原装设备，不能采用一级身份或默认重复使用。仅制造身份不是出租运输或全寿命服务。核实原装部件及供应已含阶段，原装部件不能重复采购。其他真实运载器固体助推器服务舱航天服地面回收资产须有自身具体身份。

- 选定流: 制造交接点的完整运载火箭上面级
- 流属性/单位: Count / Item(s)
- 数量规则: 实际原生交付 Item(s) 乘同资产或队列归属兼容活动量/有据全使用者有效寿命总活动量/N；cp_life。实际一次性份额修复维护试验更换热盾发动机电池回收及制造未含退役须另计一次，宣传复用上限不是实际寿命。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_life`
- 来源: `nasa-crew-kit`

###### 制造交接点的完整载人运输加压舱 (`transport_capsule`)

仅用于实际交付完整制造对象，须核实真实客舱生命保障原装推进器热防护降落伞及设备覆盖，服务舱或非加压舱仅在实际已含时纳入。仅制造身份不是出租运输或全寿命服务。核实原装部件及供应已含阶段，原装部件不能重复采购。其他真实运载器固体助推器服务舱航天服地面回收资产须有自身具体身份。

- 选定流: 制造交接点的完整载人运输加压舱
- 流属性/单位: Count / Item(s)
- 数量规则: 实际原生交付 Item(s) 乘同资产或队列归属兼容活动量/有据全使用者有效寿命总活动量/N；cp_life。实际一次性份额修复维护试验更换热盾发动机电池回收及制造未含退役须另计一次，宣传复用上限不是实际寿命。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_life`
- 来源: `nasa-crew-kit`, `nasa-eclss-2017`

###### 制造交接点的完整非加压航天器服务舱 (`service_trunk`)

仅用于实际交付完整制造对象，须核实真实连接结构太阳能阵列散热器及附件覆盖，抛弃去向与实际一次性使用另核。仅制造身份不是出租运输或全寿命服务。核实原装部件及供应已含阶段，原装部件不能重复采购。其他真实运载器固体助推器服务舱航天服地面回收资产须有自身具体身份。

- 选定流: 制造交接点的完整非加压航天器服务舱
- 流属性/单位: Count / Item(s)
- 数量规则: 实际原生交付 Item(s) 乘同资产或队列归属兼容活动量/有据全使用者有效寿命总活动量/N；cp_life。实际一次性份额修复维护试验更换热盾发动机电池回收及制造未含退役须另计一次，宣传复用上限不是实际寿命。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_life`
- 来源: `nasa-crew-kit`

###### 制造交接点的完整空射喷气载机 (`carrier_aircraft`)

仅用于实际交付完整制造对象，须核实真实机体涡扇连接释放设备及原装系统，不是翼式航天器或已完成运载服务。仅制造身份不是出租运输或全寿命服务。核实原装部件及供应已含阶段，原装部件不能重复采购。其他真实运载器固体助推器服务舱航天服地面回收资产须有自身具体身份。

- 选定流: 制造交接点的完整空射喷气载机
- 流属性/单位: Count / Item(s)
- 数量规则: 实际原生交付 Item(s) 乘同资产或队列归属兼容活动量/有据全使用者有效寿命总活动量/N；cp_life。实际一次性份额修复维护试验更换热盾发动机电池回收及制造未含退役须另计一次，宣传复用上限不是实际寿命。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_life`
- 来源: `virgin-facts`, `virgin-brochure`

###### 制造交接点的完整载人翼式火箭航天器 (`winged_spaceplane`)

仅用于实际交付完整制造对象，须核实真实机翼羽化控制客舱原装发动机覆盖，载机及更换燃料药柱或药筒责任明确。仅制造身份不是出租运输或全寿命服务。核实原装部件及供应已含阶段，原装部件不能重复采购。其他真实运载器固体助推器服务舱航天服地面回收资产须有自身具体身份。

- 选定流: 制造交接点的完整载人翼式火箭航天器
- 流属性/单位: Count / Item(s)
- 数量规则: 实际原生交付 Item(s) 乘同资产或队列归属兼容活动量/有据全使用者有效寿命总活动量/N；cp_life。实际一次性份额修复维护试验更换热盾发动机电池回收及制造未含退役须另计一次，宣传复用上限不是实际寿命。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_life`
- 来源: `virgin-facts`, `virgin-brochure`

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

##### 基本流

### 过程：着陆回收及收集残余物 (`recovery`)

#### 输入

##### 产品流

###### 已完成的外部供应返回舱水上回收作业 (`external_capsule_recovery`)

仅用于某有据返回舱溅落后实际外部移交的已完成回收作业，须核实真实船舶起重乘员接收医疗可选直升机及岸上交接范围。不是通用水运自营回收一名人员或完整航天运输。真实陆地翼式回收须自身原生接口。

- 选定流: 已完成的外部供应返回舱水上回收作业
- 流属性/单位: Count / Item(s)
- 数量规则: 实际原生已完成回收作业数乘有据真实任务人员货物份额/N；cp_recovery。一舱作业由真实接收对象共享，不能每人各买一次。供应完整已含单元或自营替换物理单元不能并计。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_recovery`
- 来源: `nasa-crew-kit`

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

###### 处理前分离废弃的返回舱热盾板 (`discarded_heatshield_panel`)

仅用于收集后处理前实际分离完整废弃热盾板，须有真实材料复合组分水分污染及接收方。不是全部航天碎片烧蚀大气化学物或制造量，回收重用部件及直接遗失碎片须分开去向。

- 选定流: 处理前分离废弃的返回舱热盾板
- 流属性/单位: Mass / kg
- 数量规则: 归属真实收集且干湿基兼容热盾板kg/N；cp_recovery。闭合供应热盾残余重用板烧蚀废弃及直接损失，未知去向不能为零，完整热盾不能同时作大气释放与收集废物。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_recovery`
- 来源: `nasa-crew-kit`

##### 基本流

### 过程：分阶段直接释放及外部去向 (`release_fates`)

#### 输入

##### 产品流

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

##### 基本流

###### 排入对流层的化石源二氧化碳 (`fossil_co2_troposphere`)

仅用于相关运载火箭载机或其他燃烧在有据对流层阶段的真实化石CO2，不是kgC二氧化碳当量或任务总废气。化学身份及真实层位接收方须专门原生核实，已知高空外太空释放不能为取得表征而绑定地面或未指定空气。其他真实阶段物种须独立强制行，不能合并不兼容区室。

- 选定流: 排入对流层的化石源二氧化碳
- 流属性/单位: Mass / kg
- 数量规则: 分阶段监测或独立有据且组分发动机负荷轨迹兼容质量平衡模型所得归属真实物种kg/N；cp_release。不设完全燃烧或默认燃料乘数。即使缺LCIA因子仍保留物理清单。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_release`

###### 排入平流层的水蒸气 (`water_vapour_stratosphere`)

仅用于有据平流层推进排空阶段实际分子H2O，不是液态水废水或通用氢燃料因子。化学身份及真实层位接收方须专门原生核实，已知高空外太空释放不能为取得表征而绑定地面或未指定空气。其他真实阶段物种须独立强制行，不能合并不兼容区室。

- 选定流: 排入平流层的水蒸气
- 流属性/单位: Mass / kg
- 数量规则: 分阶段监测或独立有据且组分发动机负荷轨迹兼容质量平衡模型所得归属真实物种kg/N；cp_release。不设完全燃烧或默认燃料乘数。即使缺LCIA因子仍保留物理清单。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_release`

###### 排入平流层的未燃一氧化二氮 (`unburned_n2o_stratosphere`)

仅用于有据平流层混合发动机排空阶段实际未燃分子N2O，不是供应氧化剂kg燃烧氮质量或N2O4。化学身份及真实层位接收方须专门原生核实，已知高空外太空释放不能为取得表征而绑定地面或未指定空气。其他真实阶段物种须独立强制行，不能合并不兼容区室。

- 选定流: 排入平流层的未燃一氧化二氮
- 流属性/单位: Mass / kg
- 数量规则: 分阶段监测或独立有据且组分发动机负荷轨迹兼容质量平衡模型所得归属真实物种kg/N；cp_release。不设完全燃烧或默认燃料乘数。即使缺LCIA因子仍保留物理清单。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_release`

###### 释放至外太空的化石源二氧化碳 (`fossil_co2_outer_space`)

仅用于有据外太空推进阶段实际化石源分子CO2，保留真实轨迹时间状态去向及评估限制。化学身份及真实层位接收方须专门原生核实，已知高空外太空释放不能为取得表征而绑定地面或未指定空气。其他真实阶段物种须独立强制行，不能合并不兼容区室。

- 选定流: 释放至外太空的化石源二氧化碳
- 流属性/单位: Mass / kg
- 数量规则: 分阶段监测或独立有据且组分发动机负荷轨迹兼容质量平衡模型所得归属真实物种kg/N；cp_release。不设完全燃烧或默认燃料乘数。即使缺LCIA因子仍保留物理清单。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_release`

## 7. 分配与共产品处理

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| subdivide_functions | all_processes | 先细分真实人员运输仅操作支持货物研究载荷空间站服务及独售旅游设施用途，再分配共用负荷。须有据因果资源工程或兼容活动份额及替代敏感性。人员Count载荷kg吨公里座位容量研究产出不能相加，票价不是物理份额。 |  |
| recipient_completion | transport_delivery | 内部载具级间每项实际完成且兼容人员运输义务仅计一次，真实接收或双角色不因crew标签消失，仅操作活动不增接收人。不兼容端点质量须拆分或论证观测混合，不默认载客每座一人或通用参考距离换算。 |  |
| failed_and_shared_duty | all_processes | 保留有据因果任务旅客组相关取消倒计时逃逸失败无人试验鉴定培训待命调位回收活动。逃逸可交付另定义救援返回功能而未完成计划目的运输，记录真实结局功能归属，不自动视为计划成功。不设任意成功概率。N=0无有限运输强度而非零负荷。 |  |
| native_asset_life | vehicle_lifecycle;ground_support;carrier_operation;recovery | 真实原生交付资产量乘同资产队列归属兼容任务活动量/有据全使用者有效寿命总活动量，再/N。纳入试验货运其他用途仅载机活动及实际消耗件。须有真实预测寿命复用证据不确定性，宣传复用上限或通用飞行数不是实测寿命。期间运营流不能再除寿命。 |  |
| whole_components_and_recovery | all_processes | 完整交付燃料配方药柱药筒发动机载具结果，或以组分过程供应准确替换并闭合原生质量供应覆盖，不能并计。原装部件及更换翻新须区分。真实回收材料能源依原生点状态接收方分配，内部空气水循环电池放电太阳能储能转移再生不是新增采购或自动避免抵扣。 |  |

## 8. 前景数据采集、计算与质量规则

以下计数、归属、原生量、库存物种去向及寿命计算是本PCR明示方法设计，来源仅支持第11节具体实际分类或物理背景，不声称NASA运营方NOAA规定这些定量公式。不提供通用数值范围，实际必要量及全部未知责任仍强制完成后方可作已完成数据包。

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_transport | transport_delivery | 真实已完成运输及角色 | actual_record | 合同人员角色双角色任务端点状态轨迹轨道质量时长单段路径规则尝试完成供应单元其他产出 | 采集真实服务约定接收角色阶段交接记录。计数前区分运往外太空、从外太空返回或在外太空内部的实际功能，以及兼容单段或整体往返路径的分组端点质量，真实被运NASAcrew可计。追踪全部任务级供应尝试及所含支持，不能只看销售或发射成功。 汇总算法：N_G=兼容功能端点质量组G内真实已完成接收人员运输义务之和，内部级载具不增最终单位。未知角色端点完成属不完整，须N_G>0。 | Item(s) | 真实事件及任务期间闭合 | 同一声明任务期间及有据资产寿命 | 真实transport_delivery责任 | 每声明的参考流 | 原始记录、角色、原生点、全使用者和供应覆盖及不确定性 |
| cp_stage | stage_operation | 真实级燃料氧化剂原生运营 | actual_record | 级任务供应方燃料氧化剂牌号相态组分加注交付期初期末库存燃烧排空蒸发泄漏回收调节逃逸试验覆盖 | 逐级逐化学品实测供应交接点，闭合采购加注储存调节使用去向。纳入真实动力着陆逃逸试验待命固混药柱余料低温损失增压吹扫。完整配方药筒或替换组分互斥，缺真实配方路径不能为零。 汇总算法：每原生必要供应依有据真实级全功能活动资源份额归属并/N一次，燃烧活动来自质量平衡而非采购，物种阶段模型由cp_release负责。 | kg;Item(s);kWh | 真实事件及任务期间闭合 | 同一声明任务期间及有据资产寿命 | 真实stage_operation责任 | 每声明的参考流 | 原始记录、角色、原生点、全使用者和供应覆盖及不确定性 |
| cp_carrier | carrier_operation | 真实组合爬升释放载机返回活动 | actual_record | 载机航天器任务接收角色飞行员配置燃料牌号阶段高度滑行爬升释放返回等待培训地面使用库存燃烧全使用者供应单元 | 观测真实载机全架次滑行组合爬升释放返回培训失败活动，释放为内部阶段不增最终运输。闭合原生航空燃油高度阶段排放资源全用途份额，机体发动机起落架寿命经cp_life，地面经cp_ground。真实外部已完成运载仅替换准确自营单元。 汇总算法：原生期间资源乘有据旅客组全使用者资源活动份额/N，不能将载机飞行员变为航天接收人或为每人重复整个组合架次。 | kg;kWh;hour;Item(s) | 真实事件及任务期间闭合 | 同一声明任务期间及有据资产寿命 | 真实carrier_operation责任 | 每声明的参考流 | 原始记录、角色、原生点、全使用者和供应覆盖及不确定性 |
| cp_eclss | life_support | 真实客舱航天服供给及去向 | actual_record | 载具人员角色阶段时长空气质量氧氮水食品加注循环消耗湿度除CO2热控能源吸附剂卫生废物排空接收库存所含支持 | 采集真实客舱航天服运行配置及运输待命逃逸返回边界供给，分别闭合氧氮水食品除CO2介质热控能源及全部废物循环排空去向。通风再生不是外供，除CO2不自动等于储存或避免排放。不采用通用代谢餐食用水率。 汇总算法：库存循环去向平衡后的真实必要原生供应乘有据功能旅客组份额/N，真实接收人仅计一次，实际操作支持及共功能仍须归属。 | kg;kWh;Item(s);hour | 真实事件及任务期间闭合 | 同一声明任务期间及有据资产寿命 | 真实life_support责任 | 每声明的参考流 | 原始记录、角色、原生点、全使用者和供应覆盖及不确定性 |
| cp_ground | ground_support | 真实基地控制培训支持资源资产 | actual_record | 基地发射台跑道机库任务控制培训医疗接待所含项计量电压水喷水燃料处理损失资产寿命原生点全功能供应覆盖废物接收 | 采集真实基地发射台跑道地勤控制鉴定培训医疗加注清洗喷水组织资源资产维护退役去向。真实所含接待纪念品出行须负责或自真实独立套餐透明细分，不能因在航天器外删除。核实外部交流直流点内部转移及供应已含单元。 汇总算法：真实原生期间流乘有据全功能资源活动份额/N，同资产制造经cp_life有效寿命份额，当期投入不能重复寿命摊分。 | kg;m3;kWh;Item(s);hour | 真实事件及任务期间闭合 | 同一声明任务期间及有据资产寿命 | 真实ground_support责任 | 每声明的参考流 | 原始记录、角色、原生点、全使用者和供应覆盖及不确定性 |
| cp_life | vehicle_lifecycle | 真实交付资产及全使用者有效寿命覆盖 | actual_record | 资产序列队列原生量制造点原装部件交付鉴定试验复用全使用者飞行活动剩余寿命翻新更换消耗抛弃退役供应已含阶段不确定性 | 核实真实完整制造对象原生量覆盖，采同资产队列兼容全使用者有效活动含货运试验其他功能实际消耗件及复用翻新历史。未含阶段热盾药筒壳体电池太阳热控航天服发射台跑道回收资产逐项完整一次。供应完整使用单元替换匹配运营单元，制造资产不能改名全寿命服务。 汇总算法：q_j=Qnative_j*(Dcohort_j/Dtotal_allusers_j)/N，须兼容正值有据寿命分母，实际消耗及其他阶段另录，不照抄公布复用次数。 | Item(s);kg;hour;flight | 真实事件及任务期间闭合 | 同一声明任务期间及有据资产寿命 | 真实vehicle_lifecycle责任 | 每声明的参考流 | 原始记录、角色、原生点、全使用者和供应覆盖及不确定性 |
| cp_recovery | recovery | 真实着陆回收及收集材料交接 | actual_record | 任务着陆模式舱航天器接收人船吊机直升机陆地团队供应范围真实原生作业资产资源热盾残余重用烧蚀碎片废物收集接收覆盖 | 采真实溅落降落伞气囊翼式跑道船吊机医疗可选直升机陆地回收及返回交接。外部完整回收作业须真实供应移交，否则自营物理资产资源释放含水空陆路线支持。闭合热盾碎片残余重用大气烧蚀直接损失收集废物，不能合并去向。 汇总算法：实际原生已完成供应作业或未覆盖自营原生资源乘有据任务功能份额/N，收集材料kg与排放化学质量分开，不能为每人重复一回收。 | Item(s);kg;kWh;m3;hour | 真实事件及任务期间闭合 | 同一声明任务期间及有据资产寿命 | 真实recovery责任 | 每声明的参考流 | 原始记录、角色、原生点、全使用者和供应覆盖及不确定性 |
| cp_release | release_fates | 按阶段接收介质的真实化学颗粒释放 | actual_record | 任务级阶段时间高度层位外太空真实燃料组分燃烧排空发动机负荷物种分子颗粒质量基准烧蚀合金化合物接收监测模型LCIA覆盖不确定性 | 实测或独立支持每真实阶段物种颗粒接收。加注N2O氧化剂不是未燃排放，合金Al不自动等于Al2O3或空气金属Al。保留真实羽流排空烧蚀碎片化学原生质量轨迹及全部真实碳氢氮物种烟炱金属其他颗粒。已知高空外太空不是地面未指定空气。缺物种量去向不完整，缺表征须单独披露且不删物理流。 汇总算法：每阶段物种q=真实实测质量或有据真实燃烧排空烧蚀活动乘适用且来源支持化学发动机轨迹模型之和，再原生基准换算因果份额并/N一次，不采用通用火箭因子或化学计量完全燃烧默认。 | kg species;native particle mass;phase;trajectory | 真实事件及任务期间闭合 | 同一声明任务期间及有据资产寿命 | 真实release_fates责任 | 每声明的参考流 | 原始记录、角色、原生点、全使用者和供应覆盖及不确定性 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| completion | completed_person_transport | N_G=预声明兼容组G真实已履行被运人员义务之和，内部级换载具不增N。完整合同运输路径计一次，独立完成单段须自身真实功能质量。须N_G>0，未知人数不完整，计划目的失败不自动完成。 | actual role/contract/endpoint/quality and mission-stage ledger | N_G Item(s) |  |
| native_supply | stage_operation;carrier_operation;life_support;ground_support | 闭合真实交付加期初库存及外部补充=期末库存加使用转化排空泄漏返回外供，同边界内部转移相抵。真实必要供应与燃烧活动不同，原生供应归属后/N一次，完整配方或替换组分互斥。 | actual supply/loaded/stock/use/return/loss records | native required quantity/N |  |
| species_phase | release_fates | 各真实化学颗粒质量依自身分子原生基准由监测或有据分阶段发动机组分轨迹模型计算。N2O产品未燃N2O、N2O4与N2O、kgN/kgC与化合物、水液汽和高度外太空接收须分开。无支持换算或LCIA因子保留缺口，不能为零或地面代理。 | actual species/phase/model/receiver and applicable raw activity | phase-specific native species quantity/N |  |
| asset_life | vehicle_lifecycle;ground_support;recovery | 同一真实交付资产队列须有兼容正值有据有效活动及全使用者功能，q_j=Qnative_j*(Dcohort_j/Dtotal_allusers_j)/N。实际消耗件改装更换鉴定退役不确定性另列，不能再摊期间运营或将资产制造变全寿命服务。 | Qnative_j;Dcohort_j;Dtotal_allusers_j;N;provider coverage | native asset share plus missing stages |  |
| shared_provider | all_processes | 真实已完成供应原生需求乘有据旅客组功能份额/N，仅替换准确已含单元。多人共用场次发射回收不能每人采购一次，自营内部级载机员工活动不是另一外购结果。删除被替换单元前核对质量原生供应闭合，缺失单元仍强制。 | native provider result quantity;true coverage;actual resource/duty shares;N | exclusive native supplier and foreground inventory |  |
| material_fate | life_support;recovery;release_fates;ground_support | 每真实水化学资产部件按兼容实测基准闭合，区分回收材料处置废物直接液体空气外太空物种及残余库存。完整热盾不能同时作完整收集废物和全部烧蚀释放。元素合金收支为分别识别化学物种的证据，不是自动排放身份或无据化合物质量。 | actual stock;reused;recovered;converted;vented;ablated;collected;direct-loss receiver | closed native material/species/fate ledger |  |

### 数据质量要求

| requirement_id | applies_to | requirement | evidence |
| --- | --- | --- | --- |
| dq_expansion | all_processes | 必须为每真实未表示投入产出资产供应结果废物直接物种添加一原子行：唯一row_id；一个已存在process_id；方向及product/waste/elementary类型；单项实际化学材料功能及状态配方；UUID或明确未解析身份；原生属性单位；真实量及实测计算基准；有效同父collection_protocol_id；原始证据来源；供应点阶段覆盖；接收方阶段高度已知子区室；不确定性及适用归一化。不能复数类别集合行。未知发生身份量范围去向属不完整而非零，真实所含义务不能删除。 | all actual collection protocols and source/provider/fate evidence |
| dq_recipient | transport_delivery | 必须有真实已完成人员航天运输角色双角色端点状态轨迹时长质量及单段路径分组。区分仅载机飞行员操作支持与即使称crew的被运航天员，不能仅按标签删除或重复一人。票座位容量发射数空间站天数仅高度不确立N，未知角色完成阻断完成使用。 | cp_transport;actual contract,role,endpoint and completion evidence |
| dq_routes | stage_operation;carrier_operation;vehicle_lifecycle;recovery | 必须完整真实舱式液固混级载机翼式分支。使用dq_expansion每字段添加实际固体助推器配方推进剂低温储存调节吹扫MMH/NTO/MON其他真实配方级发动机级间整流罩羽化飞控起落架及独立陆海回收。不设通用火箭载机因子或自动复制推进剂牌号。缺数据阻断应用而非产品资格。 | cp_stage;cp_carrier;cp_life;cp_recovery;actual configured physical route |
| dq_eclss_inclusions | life_support;ground_support | 必须按dq_expansion每字段补每项真实客舱航天服空气食品水卫生除CO2吸附剂热控能源包装废物再生排空及运输必要培训医疗待命供应原生资产去向。真实所含住宿接待纪念品用户设备不能因载具外或个人食品消失，须证实真实独立套餐细分或保留完整性缺口。不设通用人天口粮氧水率或每人一设备餐食。 | cp_eclss;cp_ground;actual operating and inclusion records |
| dq_lifecycle | vehicle_lifecycle;ground_support;recovery | 必须有全部相关运载器级舱非加压舱载机翼式器地面台跑道控制培训生命保障航天服回收船吊机直升机陆地资产制造原生量真实原装覆盖同资产全使用者寿命鉴定翻新维护更换退役。每缺失真实资产阶段按dq_expansion字段补，已完成外部结果只替换真实覆盖。不能虚构全寿命服务或宣传复用默认寿命。 | cp_life;cp_ground;cp_recovery;actual asset/provider records |
| dq_releases_lcia | release_fates;recovery | 必须有全部废气排空烧蚀碎片直接液体去向真实阶段高度外太空化学颗粒身份分子元素基准量接收区室。每真实碳氢氮化合物烟炱金属其他颗粒按dq_expansion字段独立补。实测合金元素收支不能指定化学形态，不能全部加注N2O作排放或全部热盾作烧蚀。物理身份量去向缺口与LCIA缺表征须分披露，不能地面未指定空气代理或删无表征流。 | cp_release;cp_recovery;actual monitoring/material-fate/trajectory evidence |
| dq_failed_cofunctions | all_processes | 必须保留全部因果逃逸失败试验培训待命调位回收及货运研究其他使用者负荷，支持份额不确定性。真实逃逸救援返回功能可不同计划目的完成。不虚构成功率寿命载客分配范围或缺活动为零。未知因果归属须在完成使用前保留缺口。 | all protocols;actual programme and all-function duty ledger |
| dq_evidence | all_processes | 绑定UUID前必须核实直接真实原生类型状态牌号交接点属性单位正式名称，已知高度外太空接收不能压成未指定空气。来源案例仅支持已述配置，NASA2017生命保障为定性，VG2021及未标版2023背景资料为历史，BlueOrigin公开网页自述非完整留存原文，NOAA2023不提供每飞行质量或表征。自身PCR计数分配生命周期公式不是来源强制要求，无通用范围仍强制真实量。 | actual native records and source-specific scope |

## 9. 校验规则

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| validate_reference | completed_person_transport | 须1Item(s)真实兼容完成载人航天运输全部端点质量角色限定正值N，拒绝销售容量发射仅高度crew标签删除及内部阶段重复计数。 |  |
| validate_native_coverage | all_processes | 须真实单责任阶段供应及原生供应资产生命周期覆盖，不得整物组件药筒药柱供应成品物理阶段外内能量重复，缺必要真实单元阻断完成使用。 |  |
| validate_balances | all_processes | 须真实供应加注库存燃烧排空回收材料去向闭合分子元素液气基准，N2O氧化剂产品不是N2O排放，NTO/MON/肼类须区分，烧蚀收集重用热盾碎片不能双计。 |  |
| validate_environment | release_fates;recovery | 须真实阶段高度外太空化学形态接收及无表征物理流披露，不能已知高空外太空绑定地面未指定空气或从制造合金推全部排放化学质量。缺LCIA因子不意味清单0或影响完整覆盖。 |  |
| validate_completeness | all_processes | 每真实未列材料功能资产物种去向须原子dq_expansion行有效同父协议来源原生量不确定性，不能未知=零。真实所含供给保留，N0无有限强度，candidate或检查通过不是完成数据包发布就绪。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | foreground_data_package |
| downstream_use | secondary_dataset; background_dataset，仅在全部必要角色身份数量覆盖寿命去向及物理清单要求完成复核后 |
| allowed_use | 真实声明运往外太空、从外太空返回或在外太空内部运输的端点质量角色路线期间及有据完整生命周期；无表征流须披露影响覆盖限制 |
| excluded_use | crew标签全排除、票容量发射高度当完成、删所含供给、地面空气冒充高空外太空、运营CO2当全生命周期 |
| required_metadata | 全部参考限定；真实接收角色端点任务级供应生命保障回收；原生供应资产寿命；物种阶段高度介质及LCIA覆盖 |
| required_quality_disclosure | 未知角色完成化学原生量供应去向寿命预测分配及表征缺口，身体维生边界敏感性 |
| update_trigger | 实际运输功能端点质量角色路线载具推进剂生命保障所含项供应寿命去向或表征适用性变化 |

## 11. 数据源

| source_id | type | reference | used_for |
| --- | --- | --- | --- |
| un-cpc3-2025 | official_guidance | UNSD CPC3.0 Explanatory Notes,30June2025,PDFp364. https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | 64250运往外太空、从外太空返回或在外太空内部的各方式真实旅客运输，仅分类不规定通用高度功能单位或crew排除。 |
| nasa-crew-kit | official_guidance | NASA Commercial Crew Program Press Kit,actual HTML snapshot21October2026,SpaceX/Boeing Operations. https://www.nasa.gov/commercial-crew-program-press-kit/ | 真实航天员接收人级舱非加压舱推进对接返回回收接口，不采用当前排期容量推力质量成功寿命数值因子默认，非全部航天器规则。 |
| nasa-eclss-2017 | official_guidance | NASA,ECLSS Put to the Test for Commercial Crew Missions,8March2017. https://www.nasa.gov/humans-in-space/eclss-put-to-the-test-for-commercial-crew-missions/ | 定性真实客舱航天服空气氧氮压力除CO2温湿度及倒计时至溅落逃逸支持，不提供通用消耗代谢寿命或整飞行清单。 |
| blue-engines | literature | Blue Origin Engines,BE3PM official public webpage accessed21October2026. https://www.blueorigin.com/engines | 仅案例特定液氧液氢载人推进及动力回收再点火接口，不采用当前飞行数推力寿命零生命周期或燃料因子。 |
| virgin-facts | literature | Virgin Galactic Company Overview,undated fact sheet with2023upcoming context,PDFpp4–6. https://bynder.virgingalactic.com/m/6b6bc9547042ed2c/original/Virgin-Galactic-Company-Fact-Sheet.pdf | 历史真实载机翼式羽化滑翔及HTPB/N2O混合燃料氧化剂身份，不采用当前机队推力尺寸寿命实际配方数量或通用排放默认。 |
| virgin-brochure | literature | Virgin Galactic Brochure,official public page accessed21October2026. https://www.virgingalactic.com/virgin-galactic-brochure | 真实供给组合爬升释放混合加速羽化滑翔跑道及培训接待纪念品接口，供给不是实测清单或当前可飞行证明，不将高度时长速度所含项默认给全部运营方。 |
| virgin-performed | literature | Virgin Galactic Successfully Completes First Fully Crewed Spaceflight,11July2021,official report. https://investors.virgingalactic.com/news/news-details/2021/Virgin-Galactic-Successfully-Completes-First-Fully-Crewed-Spaceflight/default.aspx | 历史真实母机释放翼式跑道返回及不同飞行员任务专员角色，不采用数值轨迹crew人数当前认证或通用因子。 |
| noaa-reentry-2023 | official_guidance | NOAA CSL,NOAA scientists link exotic metal particles in the upper atmosphere to rockets,satellites,16October2023. https://www.csl.noaa.gov/news/2023/388_1016.html | 真实不同金属再入平流层颗粒路径，不提供每飞行质量通用物种形态比例全部合金氧化或LCIA表征因子。 |
| nasa-reactive | official_guidance | NASA White Sands Reactive Fluids,15June2016. https://www.nasa.gov/centers-and-facilities/white-sands/reactive-fluids/ | 真实航天器材料兼容性化学类别含MMH、NTO/MON、O2、N2O，不证明某任务特定牌号组分数量或排放因子。 |
