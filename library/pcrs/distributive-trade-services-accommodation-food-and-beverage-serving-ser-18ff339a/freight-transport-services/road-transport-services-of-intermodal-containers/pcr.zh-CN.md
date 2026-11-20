---
pcr_id: pcr.distributive-trade-services-accommodation-food-and-beverage-serving-ser-18ff339a.freight-transport-services.road-transport-services-of-intermodal-containers
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 公路联运集装箱货运区段服务

## 1. 范围与适用性

本 PCR 适用于将物件及包裹装入专用联运集装箱后的公路运输。服务边界是申明的接管接口至交付接口之间的集装箱货物公路承运。箱型、货物、车辆、动力、承运地区、国内或跨境路线及实际装卸或温控条件均须申明，不得暗中缩限为容易取数的干货箱或柴油车辆。研究区段内并非必须实际换装运输方式。

参考对象是一个载货箱的已完成公路区段，不是整条国际门到门多式联运委托、发票、集装箱制造件、空箱调运或吨公里。须申明箱号、尺寸及箱型、货物净重与毛重、内容物和质量、实际公路里程、工作历时、接交接口和验收。车辆承运多个箱时分别记录独立验收的箱区段；同一箱在区段内部更换车辆或发生多次作业仍只形成一个申明区段。TEU 和额定运力仅是描述，不能自动替代计数或交付量。

排除单独供应的铁路、内河、海运、航空或航天区段，以及作为独立功能供应的代理、装拆箱、仓储或场站转运；最终产品不是箱车制造或租赁，也不包括实际归入其他公路子类的非集装箱货运、罐车、搬家、信件包裹、活体动物或冷藏车辆服务。分类重叠应按实际供应功能和设备判断，不能仅凭货物名称；同一事件不得计为两个运输类别的输出。合同及责任表明包含在承运服务内的吊装、绑扎检查、等候、冷藏箱接电和交付支持须纳入。

N 仅计入有箱货交接、原定范围和验收证明的实际完成且可比较的载货箱公路区段。保留原约定范围、按时序记录的变更、货损或拒收、取消及部分完成或失败作业。不得事后缩减失败范围以制造完成记录；独立验收的变更输出须按其真实范围另行判断可比性。具有因果归属的空牵引车、底盘或空箱调运、等候、绕行、回送及救援负荷保留在其服务池，不另造完成输出。N 为零时不存在有限的单位区段强度。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.distributive-trade-services-accommodation-food-and-beverage-serving-ser-18ff339a.freight-transport-services.road-transport-services-of-intermodal-containers |
| classification_refs | CPC 3.0 65113; exact |
| covered_products | 本 PCR 适用于将物件及包裹装入专用联运集装箱后的公路运输。服务边界是申明的接管接口至交付接口之间的集装箱货物公路承运。箱型、货物、车辆、动力、承运地区、国内或跨境路线及实际装卸或温控条件均须申明，不得暗中缩限为容易取数的干货箱或柴油车辆。研究区段内并非必须实际换装运输方式。 |
| excluded_products | 排除单独供应的铁路、内河、海运、航空或航天区段，以及作为独立功能供应的代理、装拆箱、仓储或场站转运；最终产品不是箱车制造或租赁，也不包括实际归入其他公路子类的非集装箱货运、罐车、搬家、信件包裹、活体动物或冷藏车辆服务。分类重叠应按实际供应功能和设备判断，不能仅凭货物名称；同一事件不得计为两个运输类别的输出。合同及责任表明包含在承运服务内的吊装、绑扎检查、等候、冷藏箱接电和交付支持须纳入。 |
| representative_product | 一个载货联运集装箱的已完成公路货运区段 |
| production_route | 实际集装箱货物公路接管、承运作业及验收交付；自营或分包责任及完整归属生命周期。 |
| market_state | 一个载货联运集装箱的已完成公路货运区段 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| 功能对象（What） | 一个载货联运集装箱的已完成公路货运区段 |
| 数量（How much） | 1 个实际完成的载货箱公路区段 |
| 质量（How well） | 接收方验收的实际箱货身份、接交范围、公路距离、质量及适用温控要求。 |
| 时间或周期（How long or cycle） | 实际区段及支持性完整作业和生命周期时段，报告真实历时与队列期间。 |
| 参考流关联（reference_flow_link） | `completed_container_road_leg` |

| 字段 | 值 |
| --- | --- |
| 参考数量（Reference amount） | 1 |
| 参考产品流（Reference product flow） | 一个载货联运集装箱的已完成公路货运区段 |
| 参考流属性（Reference flow property） | 物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` |
| 参考单位组（Reference unit group） | 数量 `5beb6eed-33a9-47b8-9ede-1dfe8f679159` |
| 参考单位（Reference unit） | Item(s) |
| 必要限定项（Required qualifiers） | container_identity_type_size; cargo_articles_packages_contents_net_gross_tare; pickup_delivery_and_responsibility_gates; actual_road_distance_duty_time; promised_scope_and_accepted_completion; N_comparable_completed_laden_legs; actual_vehicle_propulsion_and_empty_duty; reefer_temperature_power_responsibility_if_actual; provider_native_demand_exact_coverage; shared_asset_all_user_life_and_period; actual_substance_receiver_and_fates |

必要限定项须在数据集元数据、过程说明、参考流注释或等效数据包字段中申明；缺失即为定义不完整。

## 4. 计量与单位规则

| 规则编号 | 适用对象 | required_property | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| leg_count | reference product | Number of items | Item(s) | N 为真实验收且可比较的已完成载货箱公路区段；核实箱货身份、原约范围及交付。发车、发票、空箱调运及 TEU 不能证明 N。 |
| native_exposure | 全部清单行 | 实际原生属性 | 实际原生单位 | 货物净重、包装、箱自重、车重、真实距离和占用时间保持区分。补充货物吨公里须用真实分段质量和公路距离，不改变区段计数参考，也不计入货物制造。 |
| stock_and_species | 全部清单行 | 实际原生属性 | 实际原生单位 | 体积质量转换须使用兼容实测密度和状态，不默认密度。已核实能源单位支持 1 kWh = 3.6 MJ，仅在原生供应商接口转换一次。保持物质质量与元素或 CO2e 基准及真实接收者的区别；数量因子须有场址记录或明确兼容证据，不从额定运力推定。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 申明接管点的真实箱货保管和公路作业记录及兼容上游供应商接口。 |
| starting_condition_role | 前景采集接口，不代表上游资产或供应零负荷。 |
| product_classification_scope | CPC 3.0 65113 |
| recursive_input_rule | 按原生需求使用已核实的同功能分包服务一次，展开未覆盖责任，不向自身采购或额外创造最终输出。 |
| upstream_dataset_requirement | 实际功能、原生需求、技术、地理、期间、阶段及质量兼容，明确补全缺失阶段。 |
| disclosure | 箱货保管、范围验收、路线能源、空驶失败作业、自营供应商覆盖、场址期间、寿命分配及待核缺口。 |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| scope_gate | container_road_leg | 申明集装箱物件及包裹公路承运及真实接交验收，保持相邻运输方式与独立场站功能的边界。 | unsd-container-road-2025 |
| ownership | container_road_leg | 每项车辆作业、箱体、场址、供应商、阶段及期间均指定唯一负荷所有者。经核实的完整分包承运或装卸结果仅替代其明确覆盖的前景项目；缺失阶段必须补全，不得将供应商完整结果与其已含燃料、排放、装卸或资本再次相加。 | ghg-product-2011 |
| cargo_equipment | container_road_leg | 货物是承运对象，不是为生产运输服务而消耗的产品投入；内容物、质量和保管责任单独跟踪。实际货损造成的额外补货应按真实所有者及功能评估，不能按毛载荷再次计入普通货物制造。箱体、底盘、卡车和绑扎装置是可重复使用的运输资产，分别界定供应、使用和报废。 | unece-ctu-2014 |
| route_completeness | container_road_leg | 纳入实际载货及有因果归属的空驶调位、等候、失败或救援作业，调度和场站支持，以及申明生命周期内资产制造、维护、更换与报废。柴油及电力仅是条件示例；其他燃料、混合动力或冷藏设备须记录自身原生供应、库存、运行、辅助、排放和去向。不得因无 UUID 或无测量而视为零。 |  |
| physical_fates | container_road_leg | 区分燃料供应、实际燃烧、库存变化、泄漏、回收和转移。整配方供应与其组成成分替代供应采用互斥表达。电池内部放电及再生不构成新的外部电力供应。每种物质释放须有真实身份、来源、介质及子区室；未解释损失或货物短缺不能自动成为大气排放或废物。 |  |
| temperature_handling | container_road_leg | 实际温控箱须采集目标和实测温度及时间、冷机计量能耗与来源、接电责任、预调温和装卸时段。明确制冷及制冷剂供应、泄漏和回收的供应商归属；即使由其他供应商记录覆盖，必要装卸仍须保留，普通干货箱不虚构制冷。 | unece-ctu-2014 |

## 6. 过程清单结构

每张清单流卡仅代表一个可独立识别的产品、物料配方、废物流、物质或供应服务，具有兼容的端口、属性和单位。完整供应总成或实际收集的混合物流可有一个身份，其已含组分不得另列重复交换。第8节cp_expand_协议是必须落实的身份识别要求，不得当作选定流或交换数量。逐项记录真实适用性，以独立行标识列出全部具体交换；完整保留适用范围，未发生须有证据。尚未展开或未知的要求属于不完整，不得当作零。改为采集协议不等于解决缺失身份，也不免除生命周期、分配、计量或边界义务。

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| container_road_leg | 集装箱公路承运及归属生命周期 | required | 申明的适用承运，物理分支按实际发生条件纳入 | foreground | completed_container_road_leg |

一个过程统筹其作业；下列协议分别索引运行、资产、维护、供应商及排放。内部保管转移不创造额外服务输出。条件总括流卡须在下游数据包完成前，依真实记录展开为逐项具体交换。

### 过程：集装箱公路承运及归属生命周期（`container_road_leg`）

#### 输入

##### 产品流

###### 柴油 (`diesel_supply`)

仅适用于真实接口供应的兼容柴油牌号配方，整配方与组成成分表达互斥，单列库存及实际燃烧。

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

###### 交流电 (`external_ac`)

真实牵引、冷机或支持计量接口输入的交流电，归属时不重复内部转换回馈或供应商已含能耗；其他电力保持自身身份。

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

###### 制冷剂，R134a (`r134a_supply`)

仅适用实际冷藏或驾驶室设备供应的兼容 R134a，不代表通用制冷剂；供应、充注、回收与大气泄漏分别记录。

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

真实供应的兼容自来水用于车辆箱体清洗和支持，区分环境取水、废水、回用和蒸发。

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

###### 一个载货联运集装箱的已完成公路货运区段 (`completed_container_road_leg`)

仅计入兼容队列中实际独立验收的载货箱区段，参考输出数量为 1 Item(s)。

- 选定流：一个载货联运集装箱的已完成公路货运区段
- 流属性/单位：Number of items / Item(s)
- 数量规则：1 Item(s)
- 数值来源模式：`fixed_value`
- 适用范围：`site_specific`
- 归一化基准：每个声明的参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_service`
- 来源：

##### 废物流

###### 废润滑油 (`spent_oil`)

仅为实际产生的兼容废石油基或合成润滑油，单独识别接收与处理，不将新油投入等同废油。

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

仅为排入空气未特指区室的真实化石二氧化碳；已知接收子区室必须另行核实身份，不得降为未特指；来源及燃烧燃料碳衡算须有证据；不以供应质量或二氧化碳当量替代。

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

仅为有充注回收及去向记录支持并核对后的真实 R134a 空气未特指释放，已知子区室须有自己的核实身份，未解释充注损失不自动等于释放。

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
| direct_first | container_road_leg | 先拆分专属区段作业及直接测量资源，再分配剩余共有负荷。仅在因果可比性得到证明时使用箱数；尺寸、载荷、工作、温控或距离不同须采用真实的物理因果驱动量，不能静默平均不兼容服务层。 | ghg-product-2011 |
| common_pool | container_road_leg | 在交接点枚举全部独立供应的货物或箱区段及其他真实服务，按全部使用者核对共有作业、场址和期间池。证据可支持载荷距离、占用运力时间、直接能耗或其他因果驱动量；TEU、价格、额定载荷和均分均非默认。空驶、失败及回送作业只归入有证据的服务池一次。 |  |
| life_attribution | container_road_leg | 每辆卡车、底盘、箱体、电池、道路或场站资产，按研究兼容作业量与有证据的同资产全部使用者正值全寿命作业量之比归属原生交付量，再按 N 归一化一次。制造、初始部件、更换、维护及报废互不重叠。预测寿命及不确定性须有证据，采购年份数量、金额、租期或任意寿命不能替代物理需求。 |  |
| rejected_and_recovery | container_road_leg | 识别拒收的箱货状态、实际回收回送或返工作业及产生节点。未独立验收的拒收输出不能算作完成服务，退回货物也不是向自身额外采购运输服务。循环内保留因果负荷；回收产品、残余物与废物须有独立身份及明确归属，不自动取得原生材料或能源替代抵扣。 |  |

## 8. 前景数据采集、计算与质量规则

区段计数、因果服务池、寿命及库存公式是本 PCR 明确制定的核算方法。外部来源仅支持其所述分类、装卸或一般生命周期原则，不声称这些来源规定全部公式。不设通用燃料、损失、寿命、载荷率、制冷或排放范围；必要数量须实际采集或具独立合理证据并申明不确定性。

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_service | container_road_leg | completed_container_road_leg;other_intended_services | leg_and_custody_ledger | leg_id;container_id/type/size;cargo_contents/net/gross/tare;OD;distance;pickup_delivery_time;promised_scope;amendments;acceptance;failed_partial_rejected;N;other_outputs | 核对保管调度与真实交付验收；跨内部作业只计一个适用载货箱区段，枚举其他真实交接并保留失败记录。 按参考计量口径汇总唯一且已验收的合格产出作为分母，单列不合格事件及其资源责任。参考量保持规定值，仅归属的清单总量除以正分母。 | Item(s);kg;km;h | 每真实事件及对齐队列 | 实际区段报告期及申明全寿命接口 | 实际贡献场址车辆箱体供应商及全部共有使用者 | 每个声明的参考流 | 原始来源计量调度接收记录、校准、范围及不确定性保存各实测操作数的来源及原生口径，注明实际采用的换算或归属依据，以及所供结果是否已按该参考流计量。 |
| cp_operation | container_road_leg | diesel_supply;external_ac;other_native_energy | meter_stock_duty_ledger | vehicle/duty/leg;fuel_grade/blend/carbon_origin;opening/closing/supply/burn/spill/recovery/transfer;external_energy_gate;AC/DC;regeneration;loaded_empty_wait_failure;reefer_temperature_time;all_users | 计量真实原生能源并核对作业库存覆盖，识别全部实际动力和冷机供应。区分燃烧与供应及内部电力，归属因果需求后按 N 归一化一次。 原始观测和对账总量保留其记录口径。负担行只分配仍共享的总量，已归属总量仅除以同队列、同交接点的正合格产出；已与该参考流等效的结果原值沿用。零产出时保留负担并记录去向。 | kg、kWh、实际原生单位、km、h | 每真实事件及对齐队列 | 实际区段报告期及申明全寿命接口 | 实际贡献场址车辆箱体供应商及全部共有使用者 | 每个声明的参考流 | 原始来源计量调度接收记录、校准、范围及不确定性保存各实测操作数的来源及原生口径，注明实际采用的换算或归属依据，以及所供结果是否已按该参考流计量。 |
| cp_assets | container_road_leg | truck_chassis_assets;container_assets;infrastructure | same_asset_lifetime_register | asset_id/configuration;native_delivered_quantity;initial_components;manufacture_gate;studied_duty;all_user_total_life_duty;sites_periods;replacement;retirement;provider_coverage;forecast_source | 将每项实际完整总成箱体及基础设施与供应和全寿命全部使用者服务记录匹配，保留正值分母、覆盖和不确定性；分离初始与更换阶段。 原始观测和对账总量保留其记录口径。负担行只分配仍共享的总量，已归属总量仅除以同队列、同交接点的正合格产出；已与该参考流等效的结果原值沿用。零产出时保留负担并记录去向。 | 实际资产原生单位、km、h 及 container_cycles | 每真实事件及对齐队列 | 实际区段报告期及申明全寿命接口 | 实际贡献场址车辆箱体供应商及全部共有使用者 | 每个声明的参考流 | 原始来源计量调度接收记录、校准、范围及不确定性保存各实测操作数的来源及原生口径，注明实际采用的换算或归属依据，以及所供结果是否已按该参考流计量。 |
| cp_support | container_road_leg | tap_water;cleaning_supplies | site_task_material_meter | site/task/period;leg_pool;water_material_identity;native_quantity;stock;reuse;all_users;meter_gate;provider_cells | 读取采购计量及实际支持工单，识别每项供应和全部使用者，防止供应商覆盖重复并保留真实去向。 原始观测和对账总量保留其记录口径。负担行只分配仍共享的总量，已归属总量仅除以同队列、同交接点的正合格产出；已与该参考流等效的结果原值沿用。零产出时保留负担并记录去向。 | m3、kg 及实际原生单位 | 每真实事件及对齐队列 | 实际区段报告期及申明全寿命接口 | 实际贡献场址车辆箱体供应商及全部共有使用者 | 每个声明的参考流 | 原始来源计量调度接收记录、校准、范围及不确定性保存各实测操作数的来源及原生口径，注明实际采用的换算或归属依据，以及所供结果是否已按该参考流计量。 |
| cp_maintenance | container_road_leg | maintenance_materials;r134a_supply;other_refrigerants;spent_oil;wash_wastewater;retired_and_damaged_materials | maintenance_stock_receiver_ledger | event/asset;leg_pool;part/refrigerant_CAS/formulation;opening/closing_charge;addition/removal/recovery;water_composition;actual_waste;cargo_owner_damage;receiver/treatment;period;provider_coverage | 核对实际维护制冷剂清洗水记录及接收转移，保持每种物质材料原生接口，不从未解释库存残差推定废物或排放。 原始观测和对账总量保留其记录口径。负担行只分配仍共享的总量，已归属总量仅除以同队列、同交接点的正合格产出；已与该参考流等效的结果原值沿用。零产出时保留负担并记录去向。各项独立实测交付、排放及移交按各自交接点记录，负担按其适用规则分配。 | kg、m3 及实际原生单位 | 每真实事件及对齐队列 | 实际区段报告期及申明全寿命接口 | 实际贡献场址车辆箱体供应商及全部共有使用者 | 每个声明的参考流 | 原始来源计量调度接收记录、校准、范围及不确定性保存各实测操作数的来源及原生口径，注明实际采用的换算或归属依据，以及所供结果是否已按该参考流计量。 |
| cp_provider | container_road_leg | subcontract_carriage;included_handling | supplier_scope_native_demand | provider/function;leg_id;native_unit;actual_demand;boundary/technology/geography/period;covered_cells;excluded_cells;owning_process;uncertainty | 读取实际供应范围及原生需求，经核实的供应商原生强度乘以兼容需求，仅替代精确覆盖项目并展开必要缺失项目。 原始观测和对账总量保留其记录口径。负担行只分配仍共享的总量，已归属总量仅除以同队列、同交接点的正合格产出；已与该参考流等效的结果原值沿用。零产出时保留负担并记录去向。 | 供应方实际原生单位 | 每真实事件及对齐队列 | 实际区段报告期及申明全寿命接口 | 实际贡献场址车辆箱体供应商及全部共有使用者 | 每个声明的参考流 | 原始来源计量调度接收记录、校准、范围及不确定性保存各实测操作数的来源及原生口径，注明实际采用的换算或归属依据，以及所供结果是否已按该参考流计量。 |
| cp_emissions | container_road_leg | fossil_co2_air;r134a_air;other_substance_releases | substance_activity_fate_ledger | event/duty/leg;substance/CAS;carbon_origin;actual_burn/activity;species_mass_basis;method/factor/scope;medium/subcompartment;refrigerant_stock_recovery;particle_sizes;uncertainty | 使用真实物种测量或来源支持的兼容活动特定计算，确立来源和接收区室；保留未表征余项及不重叠关系，不强行套用通用身份。 原始观测和对账总量保留其记录口径。负担行只分配仍共享的总量，已归属总量仅除以同队列、同交接点的正合格产出；已与该参考流等效的结果原值沿用。零产出时保留负担并记录去向。各项独立实测交付、排放及移交按各自交接点记录，负担按其适用规则分配。 | 物质质量（kg）及实际活动量单位 | 每真实事件及对齐队列 | 实际区段报告期及申明全寿命接口 | 实际贡献场址车辆箱体供应商及全部共有使用者 | 每个声明的参考流 | 原始来源计量调度接收记录、校准、范围及不确定性保存各实测操作数的来源及原生口径，注明实际采用的换算或归属依据，以及所供结果是否已按该参考流计量。 |
| cp_expand_other_native_energy | container_road_leg | 必须展开身份 other_native_energy (inputs/product)：实际其他动力及辅助供应 | collected_record | requirement_id=other_native_energy; process_id=container_road_leg; required_direction=inputs; required_flow_type=product; original_collection_protocol=cp_operation; applicability_evidence; occurrence_event_id; concrete_row_id; physical_identity; formulation_or_species; phase; carbon_origin; particle_fraction; source_compartment; receiving_compartment; supply_or_handover_gate; provider_covered_cells; asset_component_event_and_lifecycle_phase; native_property; native_unit; measured_native_quantity; source_record_id; allocation_all_users; normalization_denominator; per_identity_amount_calculation; verification_evidence; unresolved_reason; occurrence_to_row_reconciliation; carrier_and_supply_state; meter_id; integrated_energy_or_power_time; fuel_as_received_quantity; heating_value_basis; supply_return_state; responsible_failure_and_readiness; complete_provider_exclusion; applicability_decision_record; covered_concrete_rows; excluded_occurrence_reason; completion_evidence; observed_quantity_state; conversion_or_allocation_evidence | 条件要求：按记录分别识别实际燃料、氢气状态牌号、直流供应、试剂及辅助投入；不使用总括 UUID，不自动视为零。 本范围是必须落实的身份识别要求，不是交换流。使用原节点采集协议及其记录，先按真实身份、端口及独立功能拆分，再将保留的数量、基准及证据规则分别用于各兼容具体行。不得将异质身份合并数量或从总括名称推断原生属性单位。未发生须有证据，适用性或身份未知则阻止完成。 以下采集条件仅限本项 inputs/product 的身份与交接点（实际其他动力及辅助供应）。存在未被完整供应方覆盖的实际计量电力、购入热冷或消耗燃料时启用。区分载能体、供应状态和独立仪表，燃料组成及收到基数量与有用热分别识别；积分能量不再乘时长，功率须有时间积分证据；燃料换能量须匹配实际热值基准，供热须有供回状态。纳入应分摊待机、空载、失败和返工职责；总表仅协调分项，不再次相加。 每项适用性判断须留证。经证实不发生仅关闭所述范围和时段，缺记录仍未解决。发生的要求须将全部事件映射到具体row ID及相容原生数量，或精确映射至已覆盖行和供应方责任，并逐项说明排除理由。证据须覆盖身份、支持单位、计算、原始记录及全部去向；既有与新增分支对同一事件互斥覆盖，协议本身不作为交换。完成须无未分配事件、无重复覆盖、无相关数量或身份未决项。按有证据的实际分支采集原始字段。不适用的操作数须关联分支判定，适用但缺乏实测或依据的数量登记待决。 | 实测交付状态下的载能体量；能量采用有记录的仪表或热值口径 | 每次真实事件及每项有证据的未发生判断 | 完整声明队列及归属资产寿命关联事件 | 仅本过程真实责任场所及供应方 | 先对账原生事件总量，仅汇总身份、状态、单位、交接点及期间均相容的量。按相应计算规则逐行核算一次：只分配仍共享的负担，目标总量仅除以同口径的正合格产出；等效每参考流数值原值沿用，零产出期间不作除法并保留处置记录。 | 保留仪表期间、供应状态及交接点。积分能量已含时长；仅在对应路线由功率和实测时长，或相容燃料量与有据热值计算能量。区分燃料提取、有用热冷交付及已覆盖的上游阶段。 对上述具体身份及相容输入口径，仅在数量的归属和归一化状态与下式前提匹配时使用该规则：实际归属原生数量按 N 除一次，遵循采集与计算规则。 保留原始凭据、实际采用的系数和结果单位。数值来源模式：calculated_value；适用范围：site_specific；归一化基准：每个声明的参考流；基准类型：reference_flow；证据类型：calculated_from_collection；采集协议：cp_operation；来源：。须有原始记录、精确原生支持及逐具体行核验；这些规则不提供缺失身份或数值。 完成判据：check_occurrence_completion。 |
| cp_expand_truck_chassis_assets | container_road_leg | 必须展开身份 truck_chassis_assets (inputs/product)：实际完整公路牵引车卡车及底盘供应 | collected_record | requirement_id=truck_chassis_assets; process_id=container_road_leg; required_direction=inputs; required_flow_type=product; original_collection_protocol=cp_assets; applicability_evidence; occurrence_event_id; concrete_row_id; physical_identity; formulation_or_species; phase; carbon_origin; particle_fraction; source_compartment; receiving_compartment; supply_or_handover_gate; provider_covered_cells; asset_component_event_and_lifecycle_phase; native_property; native_unit; measured_native_quantity; source_record_id; allocation_all_users; normalization_denominator; per_identity_amount_calculation; verification_evidence; unresolved_reason; occurrence_to_row_reconciliation; asset_or_reusable_id; model_configuration; included_initial_components; lifecycle_phase; manufacture_native_quantity; target_duty; all_user_same_cohort_lifetime_duty; replacement_event; provider_coverage_cells; applicability_decision_record; covered_concrete_rows; excluded_occurrence_reason; completion_evidence; observed_quantity_state; conversion_or_allocation_evidence; supply_or_service_gate; accepted_service_demand; provider_functional_unit; provider_intensity_basis; covered_lifecycle_stages | 完整总成、初始动力电池及供应接口须证明覆盖范围；各实际配置分别识别，匹配寿命需求，并排除与部件供应重复。 本范围是必须落实的身份识别要求，不是交换流。使用原节点采集协议及其记录，先按真实身份、端口及独立功能拆分，再将保留的数量、基准及证据规则分别用于各兼容具体行。不得将异质身份合并数量或从总括名称推断原生属性单位。未发生须有证据，适用性或身份未知则阻止完成。 对本项规定的实体资产或周转品，核实供应交接点、初始部件以及实际替换、维护、清洗、失败和退役记录。租赁或综合供应合同须核实覆盖范围；本项包含已交付服务时按实际验收的原生需求计量，仅另行追溯未覆盖的资产阶段。直接建模资产按同队列目标作业量与全用户有据正寿命作业量之比分配，禁止将整个设施归给一个服务。 每项适用性判断须留证。经证实不发生仅关闭所述范围和时段，缺记录仍未解决。发生的要求须将全部事件映射到具体row ID及相容原生数量，或精确映射至已覆盖行和供应方责任，并逐项说明排除理由。证据须覆盖身份、支持单位、计算、原始记录及全部去向；既有与新增分支对同一事件互斥覆盖，协议本身不作为交换。完成须无未分配事件、无重复覆盖、无相关数量或身份未决项。按有证据的实际分支采集原始字段。不适用的操作数须关联分支判定，适用但缺乏实测或依据的数量登记待决。 | 实体资产或周转品按已核实的制造或供应单位；同一队列的相容作业量；范围内的交付服务用其原生功能单位 | 每次真实事件及每项有证据的未发生判断 | 完整声明队列及归属资产寿命关联事件 | 仅本过程真实责任场所及供应方 | 先对账原生事件总量，仅汇总身份、状态、单位、交接点及期间均相容的量。按相应计算规则逐行核算一次：只分配仍共享的负担，目标总量仅除以同口径的正合格产出；等效每参考流数值原值沿用，零产出期间不作除法并保留处置记录。 | 实体资产按有记录的供应交接量乘目标作业量与同队列全用户正寿命作业量之比，保留配置、投运、更换及退役或剩余寿命记录。范围内如有已交付服务，按已核实原生强度乘相容交付需求，留存覆盖凭据，未覆盖阶段单列。 若实体资产按 Number of items / Item(s) 计量，保留实测供应量，寿命作业量另记单位。 对该交接点相容的资产量或已独立核实的服务结果，仅在数量的归属和归一化状态与下式前提匹配时使用该规则：实际归属原生数量按 N 除一次，遵循采集与计算规则。 保留原始凭据、实际采用的系数和结果单位。数值来源模式：calculated_value；适用范围：site_specific；归一化基准：每个声明的参考流；基准类型：reference_flow；证据类型：calculated_from_collection；采集协议：cp_assets；来源：。须有原始记录、精确原生支持及逐具体行核验；这些规则不提供缺失身份或数值。 完成判据：check_occurrence_completion。 |
| cp_expand_container_assets | container_road_leg | 必须展开身份 container_assets (inputs/product)：实际可重复使用联运集装箱供应 | collected_record | requirement_id=container_assets; process_id=container_road_leg; required_direction=inputs; required_flow_type=product; original_collection_protocol=cp_assets; applicability_evidence; occurrence_event_id; concrete_row_id; physical_identity; formulation_or_species; phase; carbon_origin; particle_fraction; source_compartment; receiving_compartment; supply_or_handover_gate; provider_covered_cells; asset_component_event_and_lifecycle_phase; native_property; native_unit; measured_native_quantity; source_record_id; allocation_all_users; normalization_denominator; per_identity_amount_calculation; verification_evidence; unresolved_reason; occurrence_to_row_reconciliation; asset_or_reusable_id; model_configuration; included_initial_components; lifecycle_phase; manufacture_native_quantity; target_duty; all_user_same_cohort_lifetime_duty; replacement_event; provider_coverage_cells; applicability_decision_record; covered_concrete_rows; excluded_occurrence_reason; completion_evidence; observed_quantity_state; conversion_or_allocation_evidence; supply_or_service_gate; accepted_service_demand; provider_functional_unit; provider_intensity_basis; covered_lifecycle_stages | 识别真实干货、保温、冷藏或其他适用箱体及初始设备，按同箱全部使用者全寿命作业归属。箱内货物不是消耗性资产材料。 本范围是必须落实的身份识别要求，不是交换流。使用原节点采集协议及其记录，先按真实身份、端口及独立功能拆分，再将保留的数量、基准及证据规则分别用于各兼容具体行。不得将异质身份合并数量或从总括名称推断原生属性单位。未发生须有证据，适用性或身份未知则阻止完成。 对本项规定的实体资产或周转品，核实供应交接点、初始部件以及实际替换、维护、清洗、失败和退役记录。租赁或综合供应合同须核实覆盖范围；本项包含已交付服务时按实际验收的原生需求计量，仅另行追溯未覆盖的资产阶段。直接建模资产按同队列目标作业量与全用户有据正寿命作业量之比分配，禁止将整个设施归给一个服务。 每项适用性判断须留证。经证实不发生仅关闭所述范围和时段，缺记录仍未解决。发生的要求须将全部事件映射到具体row ID及相容原生数量，或精确映射至已覆盖行和供应方责任，并逐项说明排除理由。证据须覆盖身份、支持单位、计算、原始记录及全部去向；既有与新增分支对同一事件互斥覆盖，协议本身不作为交换。完成须无未分配事件、无重复覆盖、无相关数量或身份未决项。按有证据的实际分支采集原始字段。不适用的操作数须关联分支判定，适用但缺乏实测或依据的数量登记待决。 | 实体资产或周转品按已核实的制造或供应单位；同一队列的相容作业量；范围内的交付服务用其原生功能单位 | 每次真实事件及每项有证据的未发生判断 | 完整声明队列及归属资产寿命关联事件 | 仅本过程真实责任场所及供应方 | 先对账原生事件总量，仅汇总身份、状态、单位、交接点及期间均相容的量。按相应计算规则逐行核算一次：只分配仍共享的负担，目标总量仅除以同口径的正合格产出；等效每参考流数值原值沿用，零产出期间不作除法并保留处置记录。 | 实体资产按有记录的供应交接量乘目标作业量与同队列全用户正寿命作业量之比，保留配置、投运、更换及退役或剩余寿命记录。范围内如有已交付服务，按已核实原生强度乘相容交付需求，留存覆盖凭据，未覆盖阶段单列。 若实体资产按 Number of items / Item(s) 计量，保留实测供应量，寿命作业量另记单位。 对该交接点相容的资产量或已独立核实的服务结果，仅在数量的归属和归一化状态与下式前提匹配时使用该规则：实际归属原生数量按 N 除一次，遵循采集与计算规则。 保留原始凭据、实际采用的系数和结果单位。数值来源模式：calculated_value；适用范围：site_specific；归一化基准：每个声明的参考流；基准类型：reference_flow；证据类型：calculated_from_collection；采集协议：cp_assets；来源：。须有原始记录、精确原生支持及逐具体行核验；这些规则不提供缺失身份或数值。 完成判据：check_occurrence_completion。 |
| cp_expand_infrastructure | container_road_leg | 必须展开身份 infrastructure (inputs/product)：实际道路场站及能源基础设施供应 | collected_record | requirement_id=infrastructure; process_id=container_road_leg; required_direction=inputs; required_flow_type=product; original_collection_protocol=cp_assets; applicability_evidence; occurrence_event_id; concrete_row_id; physical_identity; formulation_or_species; phase; carbon_origin; particle_fraction; source_compartment; receiving_compartment; supply_or_handover_gate; provider_covered_cells; asset_component_event_and_lifecycle_phase; native_property; native_unit; measured_native_quantity; source_record_id; allocation_all_users; normalization_denominator; per_identity_amount_calculation; verification_evidence; unresolved_reason; occurrence_to_row_reconciliation; asset_or_reusable_id; model_configuration; included_initial_components; lifecycle_phase; manufacture_native_quantity; target_duty; all_user_same_cohort_lifetime_duty; replacement_event; provider_coverage_cells; applicability_decision_record; covered_concrete_rows; excluded_occurrence_reason; completion_evidence; observed_quantity_state; conversion_or_allocation_evidence; supply_or_service_gate; accepted_service_demand; provider_functional_unit; provider_intensity_basis; covered_lifecycle_stages | 必须展开实际资产，明确供应商覆盖、原生需求、全部使用者及寿命、建设维护和报废。通行费付款不等于物理需求。 本范围是必须落实的身份识别要求，不是交换流。使用原节点采集协议及其记录，先按真实身份、端口及独立功能拆分，再将保留的数量、基准及证据规则分别用于各兼容具体行。不得将异质身份合并数量或从总括名称推断原生属性单位。未发生须有证据，适用性或身份未知则阻止完成。 对本项规定的实体资产或周转品，核实供应交接点、初始部件以及实际替换、维护、清洗、失败和退役记录。租赁或综合供应合同须核实覆盖范围；本项包含已交付服务时按实际验收的原生需求计量，仅另行追溯未覆盖的资产阶段。直接建模资产按同队列目标作业量与全用户有据正寿命作业量之比分配，禁止将整个设施归给一个服务。 每项适用性判断须留证。经证实不发生仅关闭所述范围和时段，缺记录仍未解决。发生的要求须将全部事件映射到具体row ID及相容原生数量，或精确映射至已覆盖行和供应方责任，并逐项说明排除理由。证据须覆盖身份、支持单位、计算、原始记录及全部去向；既有与新增分支对同一事件互斥覆盖，协议本身不作为交换。完成须无未分配事件、无重复覆盖、无相关数量或身份未决项。按有证据的实际分支采集原始字段。不适用的操作数须关联分支判定，适用但缺乏实测或依据的数量登记待决。 | 实体资产或周转品按已核实的制造或供应单位；同一队列的相容作业量；范围内的交付服务用其原生功能单位 | 每次真实事件及每项有证据的未发生判断 | 完整声明队列及归属资产寿命关联事件 | 仅本过程真实责任场所及供应方 | 先对账原生事件总量，仅汇总身份、状态、单位、交接点及期间均相容的量。按相应计算规则逐行核算一次：只分配仍共享的负担，目标总量仅除以同口径的正合格产出；等效每参考流数值原值沿用，零产出期间不作除法并保留处置记录。 | 实体资产按有记录的供应交接量乘目标作业量与同队列全用户正寿命作业量之比，保留配置、投运、更换及退役或剩余寿命记录。范围内如有已交付服务，按已核实原生强度乘相容交付需求，留存覆盖凭据，未覆盖阶段单列。 对该交接点相容的资产量或已独立核实的服务结果，仅在数量的归属和归一化状态与下式前提匹配时使用该规则：实际归属原生数量按 N 除一次，遵循采集与计算规则。 保留原始凭据、实际采用的系数和结果单位。数值来源模式：calculated_value；适用范围：site_specific；归一化基准：每个声明的参考流；基准类型：reference_flow；证据类型：calculated_from_collection；采集协议：cp_assets；来源：。须有原始记录、精确原生支持及逐具体行核验；这些规则不提供缺失身份或数值。 完成判据：check_occurrence_completion。 |
| cp_expand_maintenance_materials | container_road_leg | 必须展开身份 maintenance_materials (inputs/product)：实际更换部件及维护用品 | collected_record | requirement_id=maintenance_materials; process_id=container_road_leg; required_direction=inputs; required_flow_type=product; original_collection_protocol=cp_maintenance; applicability_evidence; occurrence_event_id; concrete_row_id; physical_identity; formulation_or_species; phase; carbon_origin; particle_fraction; source_compartment; receiving_compartment; supply_or_handover_gate; provider_covered_cells; asset_component_event_and_lifecycle_phase; native_property; native_unit; measured_native_quantity; source_record_id; allocation_all_users; normalization_denominator; per_identity_amount_calculation; verification_evidence; unresolved_reason; occurrence_to_row_reconciliation; operation_record; material_sku; formulation_grade_state; independent_function; supplier; package_tare; opening_stock; net_receipts; unused_returns; closing_stock; failed_use; destination; applicability_decision_record; covered_concrete_rows; excluded_occurrence_reason; completion_evidence; observed_quantity_state; conversion_or_allocation_evidence | 按原生成分和接口识别实际轮胎、润滑剂、电池、绑扎装置及其他部件；初始与更换覆盖互不重叠。 本范围是必须落实的身份识别要求，不是交换流。使用原节点采集协议及其记录，先按真实身份、端口及独立功能拆分，再将保留的数量、基准及证据规则分别用于各兼容具体行。不得将异质身份合并数量或从总括名称推断原生属性单位。未发生须有证据，适用性或身份未知则阻止完成。 以下采集条件仅限本项 inputs/product 的身份与交接点（实际更换部件及维护用品）。仅对实际发生的所述作业及独立消耗SKU或实物启用。记录材料或配方、等级状态、功能、供应方、扣包装皮重后的净量、库存变动、未用退回和去向。独立供应的包装衬材按材料及一次性或复用状态区分；完整配方或物理总成保留一个身份，组成信息不相加，不同外购品不得共用汇总数量。纳入失败使用、维护及返工，记录真实消耗而非仅采购量。 每项适用性判断须留证。经证实不发生仅关闭所述范围和时段，缺记录仍未解决。发生的要求须将全部事件映射到具体row ID及相容原生数量，或精确映射至已覆盖行和供应方责任，并逐项说明排除理由。证据须覆盖身份、支持单位、计算、原始记录及全部去向；既有与新增分支对同一事件互斥覆盖，协议本身不作为交换。完成须无未分配事件、无重复覆盖、无相关数量或身份未决项。按有证据的实际分支采集原始字段。不适用的操作数须关联分支判定，适用但缺乏实测或依据的数量登记待决。 | 实际品项、配方或物件在规定交接点及状态下的原生数量 | 每次真实事件及每项有证据的未发生判断 | 完整声明队列及归属资产寿命关联事件 | 仅本过程真实责任场所及供应方 | 先对账原生事件总量，仅汇总身份、状态、单位、交接点及期间均相容的量。按相应计算规则逐行核算一次：只分配仍共享的负担，目标总量仅除以同口径的正合格产出；等效每参考流数值原值沿用，零产出期间不作除法并保留处置记录。 | 逐批核对收货、期初期末、退回、耗用及互斥去向。件数或体积折质量须有单件质量或相容状态密度依据；产品身份以外的包装和衬材独立登记。 对上述具体身份及相容输入口径，仅在数量的归属和归一化状态与下式前提匹配时使用该规则：实际归属原生数量按 N 除一次，遵循采集与计算规则。 保留原始凭据、实际采用的系数和结果单位。数值来源模式：calculated_value；适用范围：site_specific；归一化基准：每个声明的参考流；基准类型：reference_flow；证据类型：calculated_from_collection；采集协议：cp_maintenance；来源：。须有原始记录、精确原生支持及逐具体行核验；这些规则不提供缺失身份或数值。 完成判据：check_occurrence_completion。 |
| cp_expand_other_refrigerants | container_road_leg | 必须展开身份 other_refrigerants (inputs/product)：实际其他制冷剂供应 | collected_record | requirement_id=other_refrigerants; process_id=container_road_leg; required_direction=inputs; required_flow_type=product; original_collection_protocol=cp_maintenance; applicability_evidence; occurrence_event_id; concrete_row_id; physical_identity; formulation_or_species; phase; carbon_origin; particle_fraction; source_compartment; receiving_compartment; supply_or_handover_gate; provider_covered_cells; asset_component_event_and_lifecycle_phase; native_property; native_unit; measured_native_quantity; source_record_id; allocation_all_users; normalization_denominator; per_identity_amount_calculation; verification_evidence; unresolved_reason; occurrence_to_row_reconciliation; fluid_composition; phase; equipment_circuit; factory_charge_coverage; charge_event; recovery_event; opening_fluid_stock; closing_fluid_stock; independently_purchased_fluid; equipment_charge_change; applicability_decision_record; covered_concrete_rows; excluded_occurrence_reason; completion_evidence; observed_quantity_state; conversion_or_allocation_evidence | 按需识别真实物质配方、状态牌号及组成成分，不能将 R134a 身份改名覆盖其他制冷剂。 本范围是必须落实的身份识别要求，不是交换流。使用原节点采集协议及其记录，先按真实身份、端口及独立功能拆分，再将保留的数量、基准及证据规则分别用于各兼容具体行。不得将异质身份合并数量或从总括名称推断原生属性单位。未发生须有证据，适用性或身份未知则阻止完成。 以下采集条件仅限本项 inputs/product 的身份与交接点（实际其他制冷剂供应）。按上述投入交接点独立供应的工质启用，其回收或释放应按不同去向追踪。记录具体组成、相态、设备回路、出厂充注覆盖、充注回收事件和库存；完整设备已含初始工质不再购入一次，独立补充更换仍须计入。协调库存、采购、设备充注变化、回收、废物及直接排放，不把回收当原生新供给，不把无法解释的差额直接当排放。 每项适用性判断须留证。经证实不发生仅关闭所述范围和时段，缺记录仍未解决。发生的要求须将全部事件映射到具体row ID及相容原生数量，或精确映射至已覆盖行和供应方责任，并逐项说明排除理由。证据须覆盖身份、支持单位、计算、原始记录及全部去向；既有与新增分支对同一事件互斥覆盖，协议本身不作为交换。完成须无未分配事件、无重复覆盖、无相关数量或身份未决项。按有证据的实际分支采集原始字段。不适用的操作数须关联分支判定，适用但缺乏实测或依据的数量登记待决。 | 已识别流体按充装、回收或移交等实际状态的原生数量 | 每次真实事件及每项有证据的未发生判断 | 完整声明队列及归属资产寿命关联事件 | 仅本过程真实责任场所及供应方 | 先对账原生事件总量，仅汇总身份、状态、单位、交接点及期间均相容的量。按相应计算规则逐行核算一次：只分配仍共享的负担，目标总量仅除以同口径的正合格产出；等效每参考流数值原值沿用，零产出期间不作除法并保留处置记录。 | 按具体物质核对库存、充装、回收及去向记录。区分设备内充量、补充量、期末留存、排放及外送。仅凭补充量不能确定泄漏量。 对上述具体身份及相容输入口径，仅在数量的归属和归一化状态与下式前提匹配时使用该规则：实际归属原生数量按 N 除一次，遵循采集与计算规则。 保留原始凭据、实际采用的系数和结果单位。数值来源模式：calculated_value；适用范围：site_specific；归一化基准：每个声明的参考流；基准类型：reference_flow；证据类型：calculated_from_collection；采集协议：cp_maintenance；来源：。须有原始记录、精确原生支持及逐具体行核验；这些规则不提供缺失身份或数值。 完成判据：check_occurrence_completion。 |
| cp_expand_cleaning_supplies | container_road_leg | 必须展开身份 cleaning_supplies (inputs/product)：实际清洗绑扎及作业用品 | collected_record | requirement_id=cleaning_supplies; process_id=container_road_leg; required_direction=inputs; required_flow_type=product; original_collection_protocol=cp_support; applicability_evidence; occurrence_event_id; concrete_row_id; physical_identity; formulation_or_species; phase; carbon_origin; particle_fraction; source_compartment; receiving_compartment; supply_or_handover_gate; provider_covered_cells; asset_component_event_and_lifecycle_phase; native_property; native_unit; measured_native_quantity; source_record_id; allocation_all_users; normalization_denominator; per_identity_amount_calculation; verification_evidence; unresolved_reason; occurrence_to_row_reconciliation; operation_record; material_sku; formulation_grade_state; independent_function; supplier; package_tare; opening_stock; net_receipts; unused_returns; closing_stock; failed_use; destination; applicability_decision_record; covered_concrete_rows; excluded_occurrence_reason; completion_evidence; observed_quantity_state; conversion_or_allocation_evidence | 识别真实配方材料和供应商原生数量；可重复使用装置按寿命资产处理，不同时作为一次性耗材。 本范围是必须落实的身份识别要求，不是交换流。使用原节点采集协议及其记录，先按真实身份、端口及独立功能拆分，再将保留的数量、基准及证据规则分别用于各兼容具体行。不得将异质身份合并数量或从总括名称推断原生属性单位。未发生须有证据，适用性或身份未知则阻止完成。 以下采集条件仅限本项 inputs/product 的身份与交接点（实际清洗绑扎及作业用品）。仅对实际发生的所述作业及独立消耗SKU或实物启用。记录材料或配方、等级状态、功能、供应方、扣包装皮重后的净量、库存变动、未用退回和去向。独立供应的包装衬材按材料及一次性或复用状态区分；完整配方或物理总成保留一个身份，组成信息不相加，不同外购品不得共用汇总数量。纳入失败使用、维护及返工，记录真实消耗而非仅采购量。 每项适用性判断须留证。经证实不发生仅关闭所述范围和时段，缺记录仍未解决。发生的要求须将全部事件映射到具体row ID及相容原生数量，或精确映射至已覆盖行和供应方责任，并逐项说明排除理由。证据须覆盖身份、支持单位、计算、原始记录及全部去向；既有与新增分支对同一事件互斥覆盖，协议本身不作为交换。完成须无未分配事件、无重复覆盖、无相关数量或身份未决项。按有证据的实际分支采集原始字段。不适用的操作数须关联分支判定，适用但缺乏实测或依据的数量登记待决。 | 实际品项、配方或物件在规定交接点及状态下的原生数量 | 每次真实事件及每项有证据的未发生判断 | 完整声明队列及归属资产寿命关联事件 | 仅本过程真实责任场所及供应方 | 先对账原生事件总量，仅汇总身份、状态、单位、交接点及期间均相容的量。按相应计算规则逐行核算一次：只分配仍共享的负担，目标总量仅除以同口径的正合格产出；等效每参考流数值原值沿用，零产出期间不作除法并保留处置记录。 | 逐批核对收货、期初期末、退回、耗用及互斥去向。件数或体积折质量须有单件质量或相容状态密度依据；产品身份以外的包装和衬材独立登记。 对上述具体身份及相容输入口径，仅在数量的归属和归一化状态与下式前提匹配时使用该规则：实际归属原生数量按 N 除一次，遵循采集与计算规则。 保留原始凭据、实际采用的系数和结果单位。数值来源模式：calculated_value；适用范围：site_specific；归一化基准：每个声明的参考流；基准类型：reference_flow；证据类型：calculated_from_collection；采集协议：cp_support；来源：。须有原始记录、精确原生支持及逐具体行核验；这些规则不提供缺失身份或数值。 完成判据：check_occurrence_completion。 |
| cp_expand_subcontract_carriage | container_road_leg | 必须展开身份 subcontract_carriage (inputs/product)：实际分包集装箱公路承运服务 | collected_record | requirement_id=subcontract_carriage; process_id=container_road_leg; required_direction=inputs; required_flow_type=product; original_collection_protocol=cp_provider; applicability_evidence; occurrence_event_id; concrete_row_id; physical_identity; formulation_or_species; phase; carbon_origin; particle_fraction; source_compartment; receiving_compartment; supply_or_handover_gate; provider_covered_cells; asset_component_event_and_lifecycle_phase; native_property; native_unit; measured_native_quantity; source_record_id; allocation_all_users; normalization_denominator; per_identity_amount_calculation; verification_evidence; unresolved_reason; occurrence_to_row_reconciliation; provider_contract; independent_function; provider_gates; native_functional_unit; delivered_quantity; covered_process_phase_cells; uncovered_foreground_rows; applicability_decision_record; covered_concrete_rows; excluded_occurrence_reason; completion_evidence; observed_quantity_state; conversion_or_allocation_evidence; provider_functional_unit; accepted_service_demand; provider_intensity_basis; covered_service_stages | 实际供应商原生完成区段、吨距离、车时或其他供应功能保留自身身份、需求及精确覆盖；乘以原生需求后归一化一次，不改名单位。 本范围是必须落实的身份识别要求，不是交换流。使用原节点采集协议及其记录，先按真实身份、端口及独立功能拆分，再将保留的数量、基准及证据规则分别用于各兼容具体行。不得将异质身份合并数量或从总括名称推断原生属性单位。未发生须有证据，适用性或身份未知则阻止完成。 以下采集条件仅限本项 inputs/product 的身份与交接点（实际分包集装箱公路承运服务）。仅在本PCR范围内实际委托独立功能时启用。记录合同、交付服务功能、关口、原生功能单位、实际交付量及具体覆盖的过程和寿命阶段；逐项与自营活动比对，完整供应方或未覆盖前景活动仅计一次。不用金额、材料质量或假设件数替代真实功能；同一最终服务不通过外部最终产品供应方递归重复计入。 每项适用性判断须留证。经证实不发生仅关闭所述范围和时段，缺记录仍未解决。发生的要求须将全部事件映射到具体row ID及相容原生数量，或精确映射至已覆盖行和供应方责任，并逐项说明排除理由。证据须覆盖身份、支持单位、计算、原始记录及全部去向；既有与新增分支对同一事件互斥覆盖，协议本身不作为交换。完成须无未分配事件、无重复覆盖、无相关数量或身份未决项。按有证据的实际分支采集原始字段。不适用的操作数须关联分支判定，适用但缺乏实测或依据的数量登记待决。 | 已核实的合同交付功能单位；仅独立可计数且已验收的结果使用 Item(s) | 每次真实事件及每项有证据的未发生判断 | 完整声明队列及归属资产寿命关联事件 | 仅本过程真实责任场所及供应方 | 先对账原生事件总量，仅汇总身份、状态、单位、交接点及期间均相容的量。按相应计算规则逐行核算一次：只分配仍共享的负担，目标总量仅除以同口径的正合格产出；等效每参考流数值原值沿用，零产出期间不作除法并保留处置记录。 | 按指定交接点实际验收量计量。仅在单位强度换算为总负担时，以供应方强度乘同一原生单位的需求量。保留合同范围、验收、原生单位及覆盖阶段记录。仅按时间交付的功能以时长计量。 对按合同口径已验收的服务，仅在数量的归属和归一化状态与下式前提匹配时使用该规则：实际归属原生数量按 N 除一次，遵循采集与计算规则。 保留原始凭据、实际采用的系数和结果单位。数值来源模式：calculated_value；适用范围：site_specific；归一化基准：每个声明的参考流；基准类型：reference_flow；证据类型：calculated_from_collection；采集协议：cp_provider；来源：。须有原始记录、精确原生支持及逐具体行核验；这些规则不提供缺失身份或数值。 完成判据：check_occurrence_completion。 |
| cp_expand_included_handling | container_road_leg | 必须展开身份 included_handling (inputs/product)：实际包含的装卸及支持服务 | collected_record | requirement_id=included_handling; process_id=container_road_leg; required_direction=inputs; required_flow_type=product; original_collection_protocol=cp_provider; applicability_evidence; occurrence_event_id; concrete_row_id; physical_identity; formulation_or_species; phase; carbon_origin; particle_fraction; source_compartment; receiving_compartment; supply_or_handover_gate; provider_covered_cells; asset_component_event_and_lifecycle_phase; native_property; native_unit; measured_native_quantity; source_record_id; allocation_all_users; normalization_denominator; per_identity_amount_calculation; verification_evidence; unresolved_reason; occurrence_to_row_reconciliation; provider_contract; independent_function; provider_gates; native_functional_unit; delivered_quantity; covered_process_phase_cells; uncovered_foreground_rows; applicability_decision_record; covered_concrete_rows; excluded_occurrence_reason; completion_evidence; observed_quantity_state; conversion_or_allocation_evidence; provider_functional_unit; accepted_service_demand; provider_intensity_basis; covered_service_stages | 按原生接口识别实际包含的吊转、存放时间、调度及必要驾驶员支持，区分独立场站产品与承运附带作业，不重复完整供应商及其能源废物。 本范围是必须落实的身份识别要求，不是交换流。使用原节点采集协议及其记录，先按真实身份、端口及独立功能拆分，再将保留的数量、基准及证据规则分别用于各兼容具体行。不得将异质身份合并数量或从总括名称推断原生属性单位。未发生须有证据，适用性或身份未知则阻止完成。 以下采集条件仅限本项 inputs/product 的身份与交接点（实际包含的装卸及支持服务）。仅在本PCR范围内实际委托独立功能时启用。记录合同、交付服务功能、关口、原生功能单位、实际交付量及具体覆盖的过程和寿命阶段；逐项与自营活动比对，完整供应方或未覆盖前景活动仅计一次。不用金额、材料质量或假设件数替代真实功能；同一最终服务不通过外部最终产品供应方递归重复计入。 每项适用性判断须留证。经证实不发生仅关闭所述范围和时段，缺记录仍未解决。发生的要求须将全部事件映射到具体row ID及相容原生数量，或精确映射至已覆盖行和供应方责任，并逐项说明排除理由。证据须覆盖身份、支持单位、计算、原始记录及全部去向；既有与新增分支对同一事件互斥覆盖，协议本身不作为交换。完成须无未分配事件、无重复覆盖、无相关数量或身份未决项。按有证据的实际分支采集原始字段。不适用的操作数须关联分支判定，适用但缺乏实测或依据的数量登记待决。 | 已核实的合同交付功能单位；仅独立可计数且已验收的结果使用 Item(s) | 每次真实事件及每项有证据的未发生判断 | 完整声明队列及归属资产寿命关联事件 | 仅本过程真实责任场所及供应方 | 先对账原生事件总量，仅汇总身份、状态、单位、交接点及期间均相容的量。按相应计算规则逐行核算一次：只分配仍共享的负担，目标总量仅除以同口径的正合格产出；等效每参考流数值原值沿用，零产出期间不作除法并保留处置记录。 | 按指定交接点实际验收量计量。仅在单位强度换算为总负担时，以供应方强度乘同一原生单位的需求量。保留合同范围、验收、原生单位及覆盖阶段记录。仅按时间交付的功能以时长计量。 对按合同口径已验收的服务，仅在数量的归属和归一化状态与下式前提匹配时使用该规则：实际归属原生数量按 N 除一次，遵循采集与计算规则。 保留原始凭据、实际采用的系数和结果单位。数值来源模式：calculated_value；适用范围：site_specific；归一化基准：每个声明的参考流；基准类型：reference_flow；证据类型：calculated_from_collection；采集协议：cp_provider；来源：。须有原始记录、精确原生支持及逐具体行核验；这些规则不提供缺失身份或数值。 完成判据：check_occurrence_completion。 |
| cp_expand_other_intended_services | container_road_leg | 必须展开身份 other_intended_services (outputs/product)：实际独立供应的其他共载服务 | collected_record | requirement_id=other_intended_services; process_id=container_road_leg; required_direction=outputs; required_flow_type=product; original_collection_protocol=cp_service; applicability_evidence; occurrence_event_id; concrete_row_id; physical_identity; formulation_or_species; phase; carbon_origin; particle_fraction; source_compartment; receiving_compartment; supply_or_handover_gate; provider_covered_cells; asset_component_event_and_lifecycle_phase; native_property; native_unit; measured_native_quantity; source_record_id; allocation_all_users; normalization_denominator; per_identity_amount_calculation; verification_evidence; unresolved_reason; occurrence_to_row_reconciliation; output_batch; ownership; new_used_state; accepted_receiver; acceptance_record; original_input_row_if_unused_return; native_handover_quantity; fate_reconciliation; applicability_decision_record; covered_concrete_rows; excluded_occurrence_reason; completion_evidence; observed_quantity_state; conversion_or_allocation_evidence | 条件要求：识别共有作业归属所需的全部其他独立验收输出及交接，内部作业与被运货物不是独立最终产品。 本范围是必须落实的身份识别要求，不是交换流。使用原节点采集协议及其记录，先按真实身份、端口及独立功能拆分，再将保留的数量、基准及证据规则分别用于各兼容具体行。不得将异质身份合并数量或从总括名称推断原生属性单位。未发生须有证据，适用性或身份未知则阻止完成。 以下采集条件仅限本项 outputs/product 的身份与交接点（实际独立供应的其他共载服务）。仅在实际发生且已接受的外部有用交接或有记录的未用退回时启用。记录所有权、物料或服务身份、新旧状态、关口、接收确认、原生数量及来源批次；未用退回应匹配原输入状态，已用回收物为不同状态。核对全部产出去向，不从实物输入中直接扣除有用产出，不虚构避免产品抵扣；环境负担分配按既有规则处理，不改写实物数量。 每项适用性判断须留证。经证实不发生仅关闭所述范围和时段，缺记录仍未解决。发生的要求须将全部事件映射到具体row ID及相容原生数量，或精确映射至已覆盖行和供应方责任，并逐项说明排除理由。证据须覆盖身份、支持单位、计算、原始记录及全部去向；既有与新增分支对同一事件互斥覆盖，协议本身不作为交换。完成须无未分配事件、无重复覆盖、无相关数量或身份未决项。按有证据的实际分支采集原始字段。不适用的操作数须关联分支判定，适用但缺乏实测或依据的数量登记待决。 | 具体已接收产品、服务、退回物或回收物的原生单位 | 每次真实事件及每项有证据的未发生判断 | 完整声明队列及归属资产寿命关联事件 | 仅本过程真实责任场所及供应方 | 先对账原生事件总量，仅汇总身份、状态、单位、交接点及期间均相容的量。按相应计算规则逐行核算一次：只分配仍共享的负担，目标总量仅除以同口径的正合格产出；等效每参考流数值原值沿用，零产出期间不作除法并保留处置记录。 | 记录实际状态、接收者、验收及原生实物量，区分未用退回和已用物资。执行专用输出投影及配对退回规则；独立实测的产出量不得再乘环境负担分配份额。 对上述具体身份及相容输入口径，仅在数量的归属和归一化状态与下式前提匹配时使用该规则：实际归属原生数量按 N 除一次，遵循采集与计算规则。 保留原始凭据、实际采用的系数和结果单位。数值来源模式：calculated_value；适用范围：site_specific；归一化基准：每个声明的参考流；基准类型：reference_flow；证据类型：calculated_from_collection；采集协议：cp_service；来源：。须有原始记录、精确原生支持及逐具体行核验；这些规则不提供缺失身份或数值。 完成判据：check_occurrence_completion。 |
| cp_expand_wash_wastewater | container_road_leg | 必须展开身份 wash_wastewater (outputs/waste)：实际收集的车辆箱体清洗废水 | collected_record | requirement_id=wash_wastewater; process_id=container_road_leg; required_direction=outputs; required_flow_type=waste; original_collection_protocol=cp_maintenance; applicability_evidence; occurrence_event_id; concrete_row_id; physical_identity; formulation_or_species; phase; carbon_origin; particle_fraction; source_compartment; receiving_compartment; supply_or_handover_gate; provider_covered_cells; asset_component_event_and_lifecycle_phase; native_property; native_unit; measured_native_quantity; source_record_id; allocation_all_users; normalization_denominator; per_identity_amount_calculation; verification_evidence; unresolved_reason; occurrence_to_row_reconciliation; waste_origin_event; material_or_true_mixture; moisture_basis; container_tare; opening_waste_stock; generated_waste; received_waste; handover_quantity; closing_waste_stock; onsite_treatment; receiver_id; applicability_decision_record; covered_concrete_rows; excluded_occurrence_reason; completion_evidence; observed_quantity_state; conversion_or_allocation_evidence | 计量真实排出收集接口、成分、回用及处理责任，供水不自动等于废水。 本范围是必须落实的身份识别要求，不是交换流。使用原节点采集协议及其记录，先按真实身份、端口及独立功能拆分，再将保留的数量、基准及证据规则分别用于各兼容具体行。不得将异质身份合并数量或从总括名称推断原生属性单位。未发生须有证据，适用性或身份未知则阻止完成。 以下采集条件仅限本项 outputs/waste 的身份与交接点（实际收集的车辆箱体清洗废水）。本过程实际产生或接收所述废物时启用。记录材料或配方或真实共同收集混合物、干湿状态、容器皮重、来源事件、存量、交接关口及实际接收者；核对产生量+期初库存+接收量=交出量+期末库存+另列现场处理量。分收的不同废物分行，真实接收混合物可为一行，其组分仅作不可相加审计；有用回收、客户保留物与废物去向分开，不自动给替代抵扣。 每项适用性判断须留证。经证实不发生仅关闭所述范围和时段，缺记录仍未解决。发生的要求须将全部事件映射到具体row ID及相容原生数量，或精确映射至已覆盖行和供应方责任，并逐项说明排除理由。证据须覆盖身份、支持单位、计算、原始记录及全部去向；既有与新增分支对同一事件互斥覆盖，协议本身不作为交换。完成须无未分配事件、无重复覆盖、无相关数量或身份未决项。按有证据的实际分支采集原始字段。不适用的操作数须关联分支判定，适用但缺乏实测或依据的数量登记待决。 | 接收方验收的具体废物或实际混合收集物在实测状态下的原生数量 | 每次真实事件及每项有证据的未发生判断 | 完整声明队列及归属资产寿命关联事件 | 仅本过程真实责任场所及供应方 | 先对账原生事件总量，仅汇总身份、状态、单位、交接点及期间均相容的量。按相应计算规则逐行核算一次：只分配仍共享的负担，目标总量仅除以同口径的正合格产出；等效每参考流数值原值沿用，零产出期间不作除法并保留处置记录。 | 以接收记录核对产生、库存、场内处理和实测交付。混合物流量与组分测量分开；干湿基或质量体积换算须有相容组成或密度。接收转移和环境直排按不同交接点记录。 对规定采用 Volume / m3 的行，核实实测口径或向该口径的换算。 对上述具体身份及相容输入口径，仅在数量的归属和归一化状态与下式前提匹配时使用该规则：实际归属原生数量按 N 除一次，遵循采集与计算规则。 保留原始凭据、实际采用的系数和结果单位。数值来源模式：calculated_value；适用范围：site_specific；归一化基准：每个声明的参考流；基准类型：reference_flow；证据类型：calculated_from_collection；采集协议：cp_maintenance；来源：。须有原始记录、精确原生支持及逐具体行核验；这些规则不提供缺失身份或数值。 完成判据：check_occurrence_completion。 |
| cp_expand_retired_and_damaged_materials | container_road_leg | 必须展开身份 retired_and_damaged_materials (outputs/waste)：实际转出的报废材料及货损废物 | collected_record | requirement_id=retired_and_damaged_materials; process_id=container_road_leg; required_direction=outputs; required_flow_type=waste; original_collection_protocol=cp_maintenance; applicability_evidence; occurrence_event_id; concrete_row_id; physical_identity; formulation_or_species; phase; carbon_origin; particle_fraction; source_compartment; receiving_compartment; supply_or_handover_gate; provider_covered_cells; asset_component_event_and_lifecycle_phase; native_property; native_unit; measured_native_quantity; source_record_id; allocation_all_users; normalization_denominator; per_identity_amount_calculation; verification_evidence; unresolved_reason; occurrence_to_row_reconciliation; waste_origin_event; material_or_true_mixture; moisture_basis; container_tare; opening_waste_stock; generated_waste; received_waste; handover_quantity; closing_waste_stock; onsite_treatment; receiver_id; applicability_decision_record; covered_concrete_rows; excluded_occurrence_reason; completion_evidence; observed_quantity_state; conversion_or_allocation_evidence | 条件要求：分别识别每种实际废物材料及所有者、货物包装部件成分和目的地，短缺或拒收本身不证明产生废物。 本范围是必须落实的身份识别要求，不是交换流。使用原节点采集协议及其记录，先按真实身份、端口及独立功能拆分，再将保留的数量、基准及证据规则分别用于各兼容具体行。不得将异质身份合并数量或从总括名称推断原生属性单位。未发生须有证据，适用性或身份未知则阻止完成。 以下采集条件仅限本项 outputs/waste 的身份与交接点（实际转出的报废材料及货损废物）。本过程实际产生或接收所述废物时启用。记录材料或配方或真实共同收集混合物、干湿状态、容器皮重、来源事件、存量、交接关口及实际接收者；核对产生量+期初库存+接收量=交出量+期末库存+另列现场处理量。分收的不同废物分行，真实接收混合物可为一行，其组分仅作不可相加审计；有用回收、客户保留物与废物去向分开，不自动给替代抵扣。 每项适用性判断须留证。经证实不发生仅关闭所述范围和时段，缺记录仍未解决。发生的要求须将全部事件映射到具体row ID及相容原生数量，或精确映射至已覆盖行和供应方责任，并逐项说明排除理由。证据须覆盖身份、支持单位、计算、原始记录及全部去向；既有与新增分支对同一事件互斥覆盖，协议本身不作为交换。完成须无未分配事件、无重复覆盖、无相关数量或身份未决项。按有证据的实际分支采集原始字段。不适用的操作数须关联分支判定，适用但缺乏实测或依据的数量登记待决。 | 接收方验收的具体废物或实际混合收集物在实测状态下的原生数量 | 每次真实事件及每项有证据的未发生判断 | 完整声明队列及归属资产寿命关联事件 | 仅本过程真实责任场所及供应方 | 先对账原生事件总量，仅汇总身份、状态、单位、交接点及期间均相容的量。按相应计算规则逐行核算一次：只分配仍共享的负担，目标总量仅除以同口径的正合格产出；等效每参考流数值原值沿用，零产出期间不作除法并保留处置记录。 | 以接收记录核对产生、库存、场内处理和实测交付。混合物流量与组分测量分开；干湿基或质量体积换算须有相容组成或密度。接收转移和环境直排按不同交接点记录。 对上述具体身份及相容输入口径，仅在数量的归属和归一化状态与下式前提匹配时使用该规则：实际归属原生数量按 N 除一次，遵循采集与计算规则。 保留原始凭据、实际采用的系数和结果单位。数值来源模式：calculated_value；适用范围：site_specific；归一化基准：每个声明的参考流；基准类型：reference_flow；证据类型：calculated_from_collection；采集协议：cp_maintenance；来源：。须有原始记录、精确原生支持及逐具体行核验；这些规则不提供缺失身份或数值。 完成判据：check_occurrence_completion。 |
| cp_expand_other_substance_releases | container_road_leg | 必须展开身份 other_substance_releases (outputs/elementary)：实际其他逐物质环境释放 | collected_record | requirement_id=other_substance_releases; process_id=container_road_leg; required_direction=outputs; required_flow_type=elementary; original_collection_protocol=cp_emissions; applicability_evidence; occurrence_event_id; concrete_row_id; physical_identity; formulation_or_species; phase; carbon_origin; particle_fraction; source_compartment; receiving_compartment; supply_or_handover_gate; provider_covered_cells; asset_component_event_and_lifecycle_phase; native_property; native_unit; measured_native_quantity; source_record_id; allocation_all_users; normalization_denominator; per_identity_amount_calculation; verification_evidence; unresolved_reason; occurrence_to_row_reconciliation; substance_identity; chemical_form; environmental_compartment; carbon_origin; particle_fraction_or_count_basis; measured_or_calculated_release; species_conversion_evidence; applicability_decision_record; covered_concrete_rows; excluded_occurrence_reason; completion_evidence; observed_quantity_state; conversion_or_allocation_evidence | 必须按证据展开实际生物源碳、燃烧物种、无重叠粒径颗粒、轮胎制动磨损、泄漏及其他制冷剂物种。每项须有真实物质来源介质和子区室；通用 NOx 或 VOC 总量不是一个分子。 本范围是必须落实的身份识别要求，不是交换流。使用原节点采集协议及其记录，先按真实身份、端口及独立功能拆分，再将保留的数量、基准及证据规则分别用于各兼容具体行。不得将异质身份合并数量或从总括名称推断原生属性单位。未发生须有证据，适用性或身份未知则阻止完成。 以下采集条件仅限本项 outputs/elementary 的身份与交接点（实际其他逐物质环境释放）。仅对进入已记录接收介质且有观测或适用计算依据的实际释放启用。记录具体物质及形态、来源或接收介质、适用的化石或生物碳来源、适用的粒径组分或粒子数粒径基础及采样期；保留元素与分子口径，换算须有化学计量和相容物种证据。收集物流中的污染物在实际环境排放边界前归接收物流，不用CO2、NOx、VOC、COD或泛颗粒物流代替缺失物种。 每项适用性判断须留证。经证实不发生仅关闭所述范围和时段，缺记录仍未解决。发生的要求须将全部事件映射到具体row ID及相容原生数量，或精确映射至已覆盖行和供应方责任，并逐项说明排除理由。证据须覆盖身份、支持单位、计算、原始记录及全部去向；既有与新增分支对同一事件互斥覆盖，协议本身不作为交换。完成须无未分配事件、无重复覆盖、无相关数量或身份未决项。按有证据的实际分支采集原始字段。不适用的操作数须关联分支判定，适用但缺乏实测或依据的数量登记待决。 | 本物质、资源或物理排放在实际环境介质的已核实原生属性与单位 | 每次真实事件及每项有证据的未发生判断 | 完整声明队列及归属资产寿命关联事件 | 仅本过程真实责任场所及供应方 | 先对账原生事件总量，仅汇总身份、状态、单位、交接点及期间均相容的量。按相应计算规则逐行核算一次：只分配仍共享的负担，目标总量仅除以同口径的正合格产出；等效每参考流数值原值沿用，零产出期间不作除法并保留处置记录。 | 采样或活动量及适用因子须对应物种、相态、来源和环境介质。按实际对象区分质量、粒子数、热量及元素当量；换算须有依据，重叠总量不可相加。 对上述具体身份及相容输入口径，仅在数量的归属和归一化状态与下式前提匹配时使用该规则：实际归属原生数量按 N 除一次，遵循采集与计算规则。 保留原始凭据、实际采用的系数和结果单位。数值来源模式：calculated_value；适用范围：site_specific；归一化基准：每个声明的参考流；基准类型：reference_flow；证据类型：calculated_from_collection；采集协议：cp_emissions；来源：。须有原始记录、精确原生支持及逐具体行核验；这些规则不提供缺失身份或数值。 完成判据：check_occurrence_completion。 |

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
| qualifier_and_acceptance | reference output | 原约及实际变更范围、箱货保管、原生属性、公路路线和交付验收须证明 N，保留失败拒收作业及不确定性。 | cp_service |
| atomic_route | 全部实际交换 | 每个实际分支交换须有逐项编号、真实身份类型方向接口、原生数量属性单位、所属过程协议及采集来源证明。条件不发生须有真实肯定证据，缺失不等于零。 | cp_operation;cp_support;cp_maintenance;cp_emissions |
| provider_life | 供应方及资产清单行 | 证明精确覆盖阶段事件场址期间项目、全部使用者及正值同资产寿命需求。对未覆盖的建设初始部件更换维护报废分别采集，预测保留依据与敏感性。 | cp_assets;cp_provider |
| site_period_outputs | shared pools | 索引全部贡献场址车辆箱体及报告生命周期期间，以及所有预期输出接收者。先合计原始归属数量再除以一致 N，不对不同强度做简单平均，核对全池及排除项。 | cp_service;cp_assets;cp_operation |
| fates | 货物转移及与环境的交换 | 跟踪实际拒收货物及维修回送回收处置所有者；要求真实物种、碳来源、介质子区室及来源方法不确定性，不使用通用排放名称或假定制冷剂全部损失。 | cp_maintenance;cp_emissions |

## 9. 验证规则

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| reference_complete | container_road_leg | 核实 1 Item(s) 对应一个验收完成的载货箱公路区段，输出关联真实，边界及箱货属性齐全，且 N>0。没有实际分段载荷、距离及空箱自重处理申明，不得将计数转换为吨距离或 TEU。 |  |
| coverage_closure | container_road_leg | 检查每种实际路线、燃料、制冷、装卸、场址、共有资产和期间均有唯一所有者；供应商覆盖项目替代相应前景项目。不得将排除的相邻运输方式或普通货物制造混入最终公路功能。 |  |
| material_and_energy | container_road_leg | 核对燃料及制冷剂库存、燃烧泄漏回收转移、电力接口、清洗水去向、货损与废物目的地。识别化学物种、碳来源和接收区室；拒绝颗粒粒径总量重叠、假定全量泄漏，以及将未解释的衡算残差当作排放。 |  |
| pool_and_lifetime | container_road_leg | 核对全部使用者的因果分配比例、场址期间覆盖、同资产寿命分母和输出队列。零输出及失败作业池保留，不虚构有限强度；拒绝初始与更换部件以及制造和报废覆盖重复。 |  |
| projection_and_identity | container_road_leg | 每项具体交换须具备真实原生数量、属性及单位，精确语义身份或已登记的待核缺口，唯一真实过程及同节点采集协议。检查中英文规则编号、流卡、来源和当前投影指纹。检查器通过不证明外部身份已核实或可发布。 |  |
| atomic_container_road_leg | container_road_leg | 拒绝将备选物料、独立供应资产服务、不同废物流、污染物种、碳源、相态、粒径或环境子介质合并成一个交换身份。本节点每项适用cp_expand_要求必须有发生或未发生记录及完整具体行清单，各行具有自身身份、端口、已核验UUID、原生属性单位、数量、原始记录、计算和唯一责任。供应方已含完整总成或真实收集混合物流仍按一个真实供应或收集身份，不虚构组分交换。不得将要求名称标识、NOx或VOC或PM总量、未明确的物理释放或异质清单绑定一个UUID。核对全部子行、原始事件、供应方已含单元及跨节点交接，不缺失当零、不重复计入。身份、适用性、数量或去向未知，均阻止完整前景包及最终TIDAS交换产出。PCR检查器不验证这些前景事实，须保留逐行证据供审查。 | ghg-product-2011 |
| check_occurrence_completion | 全部实际清单行和身份识别协议 | 保留适用性证据，将每个实际事件对应到具体清单行或已核实的供应方覆盖范围。判定未发生须有证据，未知项保留待决。按同一身份、状态、单位、期间和交接点核对期初、接收、期末及互斥去向。耗材领用账区分未用退回、内部领拨和合格、失败及返工作业的实际耗用。托管账或物料平衡采用期初库存＋外部接收＋配对内部接收＝期末库存＋配对内部发出＋对外交付且获接收的数量＋未用外退＋外送的已用物资或回收物＋外送废物＋直接排放＋本边界内消耗或转化量。身份在边界内生成时，将有证据的生成量或出生数计入该身份账的来源并关联原事件。在上层守恒物料或元素平衡中抵消内部转化和移交。每个事件只记一次，留存回收物计入期末，移交与耗用分别登记。按相容口径执行专用托管、相态、转化或元素规则；已作为转化量计入的物料，其后续产物不得再计入同一去向合计。独立计量各项，对未解释的差额追查并保留待决。实物总量与负担分配分别核算。共享原始负担采用 Q_raw × s / R，其中 s 为有证据的目标驱动量除以同池同期间全部适用用户的正驱动量总和。已归属的目标总量采用 Q_target / R，已与同一参考流等效的单位结果 q_ref 原值沿用。供应方单位强度先乘以按其原生单位实测的需求量。仅在另一个仍有共享负担的独立阶段另作分配。R 为同一队列、交接点和参考单位下的正值合格产出量。保留失败与部分完成作业的负担，禁止以此放大 R；零产出时保留负担及有证据的结转或最终处置。自有资产采用同队列全用户寿命作业量，并排除初始部件重复计算。外购服务仅替代有记录的覆盖阶段。适用的身份、数量、支持单位、去向或分配分母仍未决时，最终数据集仍不完整。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | secondary_dataset; background_dataset |
| downstream_use | 适用公路集装箱货运服务清单，用于下游过程及生命周期模型投影 |
| allowed_use | 必要数据身份补全后，可用于接口箱货距离质量温控作业及归属生命周期一致的适用已完成载货箱公路区段。 |
| excluded_use | 未限定的通用吨公里、TEU 或车辆趟次，整条多式联运或箱货制造，将空驶失败改称成功承运，或将待核真实清单视为零。 |
| required_metadata | container_identity_type_size; cargo_articles_packages_contents_net_gross_tare; pickup_delivery_and_responsibility_gates; actual_road_distance_duty_time; promised_scope_and_accepted_completion; N_comparable_completed_laden_legs; actual_vehicle_propulsion_and_empty_duty; reefer_temperature_power_responsibility_if_actual; provider_native_demand_exact_coverage; shared_asset_all_user_life_and_period; actual_substance_receiver_and_fates |
| required_quality_disclosure | 范围验收、供应商原生覆盖、真实数据缺口、因果分配、共有寿命预测、库存去向闭合及不确定性。 |
| update_trigger | 服务箱货接口、路线动力制冷、供应商、资产寿命、分配、来源去向或验收变更。 |

## 11. 数据源

| source_id | type | reference | used_for |
| --- | --- | --- | --- |
| unsd-container-road-2025 | official_guidance | UNSD, CPC Version 3.0, 65113, 30 June 2025. https://unstats.un.org/unsd/classifications/Econ/Structure/Detail/EN/2100/65113 | 仅支持分类范围；单箱已完成区段参考及核算选择是本 PCR 明定方法。 |
| unece-ctu-2014 | official_guidance | IMO/ILO/UNECE, CTU Code, 2014, chapters 2, 4, 7. https://unece.org/transport/intermodal-transport/imoilounece-code-practice-packing-cargo-transport-units-ctu-code | 可重复使用箱体与包装车辆的区分、运输链责任及货物条件装卸背景，不提供数值因子或通用参考量。 |
| ghg-product-2011 | standard | WRI/WBCSD, Product Life Cycle Accounting and Reporting Standard, 2011, chapters 6-9. https://ghgprotocol.org/product-standard | 一般生命周期边界、数据披露及分配原则；扩展资产和区段原生需求寿命公式是本 PCR 制定方法。 |

