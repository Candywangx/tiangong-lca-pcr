---
pcr_id: pcr.distributive-trade-services-accommodation-food-and-beverage-serving-ser-18ff339a.freight-transport-services.road-transport-services-of-freight-by-man-or-animal-drawn-vehicles
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 人力或畜力牵引道路货运服务

## 1. 范围与适用性

本专属PCR覆盖人力或畜力牵引车辆的真实道路货运，保留人力及役畜两类实现，不限定某一货物、动物物种或车具材料。一个实际验收完成托运区段须声明货物数量、起讫距离地形、时长和质量；等服务数不能建立等价性。人畜努力及所牵引车辆是支持手段，不是承运产品。

排除客运、机动车货运、无车辆背负或驮背动物、纯车具出租、独立快递末端配送，以及单独归入65118的活体动物运输服务。货物为活体本身不排除原本符合条件的牵引车辆区段；承运动物与牵引役畜须区分，并按实际功能设备解决分类归属，不重复输出。真实装卸、休息恢复、饲养、空返、失败责任及完整有据车具动物场址生命周期仍应归属。不设人体代谢、动物饲料排放、工作量或寿命默认数值。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.distributive-trade-services-accommodation-food-and-beverage-serving-ser-18ff339a.freight-transport-services.road-transport-services-of-freight-by-man-or-animal-drawn-vehicles |
| classification_refs | CPC 3.0 65114; exact |
| covered_products | 人力或畜力牵引车辆道路货运完整实际功能 |
| excluded_products | 客运机动无车辆驮载运输、纯出租及单独归入65118的活体动物运输服务；活体货物本身不自动构成排除项 |
| representative_product | 完成的人力或畜力牵引道路货运托运区段 |
| production_route | 牵引道路承运加实际人力或畜力区段、饲养及车具道路生命周期 |
| market_state | 真实验收托运区段，不是未用权利或役畜日 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| 什么（What） | 完成的人力或畜力牵引道路货运托运区段 |
| 多少（How much） | 1个合格实际完成托运区段，声明货物质量体积 |
| 质量（How well） | 实际货物状态、约定交接质量、起讫距离地形及车辆牵引类型 |
| 时长或周期（How long or cycle） | 声明接收交付区段及应分配完整作业恢复生命周期期间 |
| reference_flow_link | completed_drawn_road_leg |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 完成的人力或畜力牵引道路货运托运区段 |
| 参考流属性 | 物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` |
| 参考单位组 | 数量 `5beb6eed-33a9-47b8-9ede-1dfe8f679159` |
| 参考单位 | Item(s) |
| 必需限定信息 | cargo_identity_quantity; actual_road_vehicle; human_animal_segment_roles; draft_species_cohort; acceptance_delivery_gates; actual_distance_terrain; elapsed_time; quality; period_N; loaded_empty_failed_return_recovery_duty; diet_water_husbandry; all_outputs_users; manure_fates; human_extension_scope; native_provider_coverage; all_user_asset_animal_life; receiver_medium; uncertainty |

## 4. 计量与单位规则

| rule_id | 适用于 | required_property | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| reference_count | reference product | 物品数量 | Item(s) | 完成服务数量不同于货物质量、吨距离、车公里、人时或畜日；须有合格正N及实际货物距离质量才可判断等价。 |
| native_biological_basis | 全部清单行 | 实际原生属性 | 实际原生单位 | 保留饲料粪污干湿基、实际水分、化合物与元素碳氮及真实物种。体积质量换算须有实际密度状态；无来源方法证据不得作质量能量或动物作业换算。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 实际接货、牵引车辆、人畜角色及供应生命周期供应端口 |
| starting_condition_role | 真实进入事实不消除育成维持资产及早期供应负荷 |
| product_classification_scope | 完整人力或畜力牵引车辆道路货运功能 |
| recursive_input_rule | 外包原生服务阶段仅替代匹配自营范围一次 |
| upstream_dataset_requirement | 兼容物种车具配置原生单位端口地域期间及生命周期范围 |
| disclosure | 全部人畜责任、货物保管、生物资产供应方范围、输出分配及未知 |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| full_scope | freight_fulfilment | 涵盖人力或畜力牵引车辆提供的完整道路货运功能及实际货物车型。排除客运、机动车货运、不提供运输的纯车具出租、独立快递零售配送、无车辆的人体背负、无牵引车辆的驮畜背载，以及单独归入65118的活体动物运输服务。役畜牵引与承运动物货物是不同角色；不能仅因货物为活体就排除原本符合条件的牵引车辆货运区段。须按实际功能、设备及分类明确重叠归属，且服务输出只计一次。 | unsd-cpc3-65114 |
| human_boundary | human_traction | 记录实际人力牵引、休息恢复、路线地形、载荷、辅助人员、空驶调位、失败救援及支持责任。人员是服务提供者，不计作货运输出。核心清单不把家庭基线饮食、普通人类繁育或工资当作物理排放分配。承运方明确提供的工作补给和装备按实际数量纳入；任何额外人体营养或代谢扩展须单独声明实测或验证的增量证据、基线、恢复期间及不确定性，不得使用统一每吨热量或人体二氧化碳因子。 | ghg-product-2011 |
| animal_management | animal_traction | 管理生物对象为实际役畜组及其进入作业时的物种、年龄、性别、健康、活重及管理状态。纳入全证实寿命内应分配的育成训练、作业期间之外维持、饲喂饮水、圈舍、兽医蹄部护理、挽具使用、休息恢复、更换和退役。交接对象是接入车具服务的真实畜力作业责任，不是屠宰肉或另一项动物货物。区分役用服务、奶和后代等预期输出、收集粪便、拒食物、死亡动物及真实直接排放。育成维持供应方范围仅替代精确对应的自营范围一次。 | fao-draft-animal-husbandry |
| route_conditions | human_traction; animal_traction | 父活动为牵引车辆道路货运。人力和畜力是实际条件实现，不能自动相加为投入假设。货批可含经转移ID关联的人力或畜力不同区段；每个真实区段只归属一次，最终只计一个声明托运区段。工作量、地形、速度、休息、福利和管理差异须有当前记录。未经证实不得将牛饲料或反刍甲烷因子用于马、驴等其他物种。 | fao-draft-animal-husbandry |
| cargo_and_failure | freight_fulfilment | 货物保管须按真实端口闭合接收量、交付量、中间库存、退回、损失和接收方。货物制造不属于货运服务产品；实际货损或补货影响须披露给下游货物LCA，避免制造重复。纳入车辆端口的装卸搬运、等候、空返、调位、未完成失败救援及重投责任，先因果归属再归一化。退回货物仍属于保管台账，不虚构废物。 | ghg-product-2011 |
| assets_providers | support_lifecycle | 本PCR生命周期选择覆盖实际车体、车轮、轴承、轮胎、挽具、道路路径、圈舍仓储及装卸设备的制造、安装、修理、更换和退役；役畜育成与车具制造分开。原生供应方服务仅替代明确范围，不重复追加能源动物和资产。使用寿命仅是有据可查的同组全用户分配分母。不使用机动燃料并不等于零排放。 | ghg-product-2011 |
| atomic_fates | 全部节点 | 每种实际饲料组分、物料、兽药制剂、水源、工作补给、资产、供应方、废物及直接排放物种须独立设置真实row_id、父节点、方向类型、原生数量属性单位、端口状态、接收方介质、来源和同节点协议。待核语义需求流卡不能代替多个实际交换。区分饲料和粪便干湿基、营养元素与化合物、肠道与粪污排放、生物源与化石源以及空气水体土壤收集去向。缺失表示不完整而不是零。 | ipcc-livestock-2006 |

## 6. 过程清单结构

每张清单流卡仅代表一个可独立识别的产品、物料配方、废物流、物质或供应服务，具有兼容的端口、属性和单位。完整供应总成或实际收集的混合物流可有一个身份，其已含组分不得另列重复交换。第8节cp_expand_协议是必须落实的身份识别要求，不得当作选定流或交换数量。逐项记录真实适用性，以独立行标识列出全部具体交换；完整保留适用范围，未发生须有证据。尚未展开或未知的要求属于不完整，不得当作零。改为采集协议不等于解决缺失身份，也不免除生命周期、分配、计量或边界义务。

### 过程图

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| freight_fulfilment | 货运接收保管及交付 | required | 每项合格服务 | foreground | completed_drawn_road_leg |
| human_traction | 人力牵引车辆运行 | conditional | 实际存在人力牵引道路车辆运行 | foreground | completed_drawn_road_leg |
| animal_traction | 役畜作业与饲养管理 | conditional | 实际存在畜力牵引道路车辆运行 | foreground | completed_drawn_road_leg |
| support_lifecycle | 车具挽具道路及支持生命周期 | required | 实际应分配支持及生命周期责任 | foreground | completed_drawn_road_leg |

全部节点关联唯一最终服务分母；human_traction、animal_traction与support_lifecycle不额外产生最终完成数量。真实区段可经交接关联并存；不能因记录缺失就推断未知模式。

### 过程：货运接收保管及交付 (`freight_fulfilment`)

#### 输入

##### 产品流

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 完成的人力或畜力牵引道路货运托运区段 (`completed_drawn_road_leg`)

以人力或畜力牵引道路车辆在声明端口间实际完成并验收的托运服务。必须声明货物身份数量状态及真实距离时间。输出是货运服务，不是所载货物、人、动物或车具。

- 选定流：完成的人力或畜力牵引道路货运托运区段
- 流属性/单位：物品数量 / Item(s)
- 数量规则：1 Item(s)
- 数值来源模式：`fixed_value`
- 适用范围：`site_specific`
- 归一化基准：每声明的参考流
- 基准类型：`reference_flow`
- 证据类型：`method_formula`
- 采集协议：`cp_fulfilment`
- 来源：`unsd-cpc3-65114`; `fao-draft-animal-husbandry`; `ghg-product-2011`

##### 废物流

##### 基本流

### 过程：人力牵引车辆运行 (`human_traction`)

#### 输入

##### 产品流

###### 自来水 (`work_drinking_water`)

仅记录承运方实际提供给人员作业的自来水，端口为已核实供应端口；配送和容器包装范围单独保留。不假定人员每日需求或统一代谢输出。其他水身份单独核实。

- 选定流：自来水 `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- 流属性/单位：质量 / kg
- 数量规则：attributed_carrier_supplied_work_water_kg / N
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每声明的参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_human`
- 来源：`unsd-cpc3-65114`; `fao-draft-animal-husbandry`; `ghg-product-2011`

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

##### 基本流

### 过程：役畜作业与饲养管理 (`animal_traction`)

#### 输入

##### 产品流

###### 自来水 (`animal_tap_water`)

仅记录适用于动物饮用饲养的实际自来水供应及原生端口，区分原水开采、雨水和其他外购水。饮用清洗用途以及损失滞留去向分别采集。

- 选定流：自来水 `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- 流属性/单位：质量 / kg
- 数量规则：attributed_animal_tap_water_kg / N
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每声明的参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_animal`
- 来源：`unsd-cpc3-65114`; `fao-draft-animal-husbandry`; `ghg-product-2011`

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

##### 基本流

###### 甲烷 (生物源) (`enteric_biogenic_methane`)

依据同物种日粮动物组及活动兼容的实测或来源方法，按实际条件记录消化过程生物源甲烷向空气排放。不把所有缺失饲料碳转为甲烷，不把反刍动物值套用非反刍役畜。粪污储存甲烷须独立记录阶段物种且归属互斥。

- 选定流：甲烷 (生物源) `fe0acd60-3ddc-11dd-a8e8-0050c2490048`
- 流属性/单位：质量 / kg
- 数量规则：attributed_actual_enteric_CH4_kg / N
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每声明的参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_animal`
- 来源：`unsd-cpc3-65114`; `fao-draft-animal-husbandry`; `ghg-product-2011`

###### 一氧化二氮 (`manure_n2o_air`)

按真实粪污处理或沉积条件记录向空气排放的一氧化二氮，保留过程接收介质、物种、氮台账和方法证据。区分N2O与N2O-N及直接间接方法；上游粪污处理数据集已含排放不得作为本节点直接排放重复。

- 选定流：一氧化二氮 `08a91e70-3ddc-11dd-94c3-0050c2490048`
- 流属性/单位：质量 / kg
- 数量规则：attributed_actual_manure_N2O_kg / N
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每声明的参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_animal`
- 来源：`unsd-cpc3-65114`; `fao-draft-animal-husbandry`; `ghg-product-2011`

###### 氨 (`manure_ammonia_air`)

仅按实际自营饲养或粪污阶段记录向空气排放的NH3，保留化合物基准及接收子介质。溶解铵、NH3-N、收集氮和直接肥料产品是不同身份去向。

- 选定流：氨 `08a91e70-3ddc-11dd-a2a9-0050c2490048`
- 流属性/单位：质量 / kg
- 数量规则：attributed_actual_NH3_air_kg / N
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每声明的参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_animal`
- 来源：`unsd-cpc3-65114`; `fao-draft-animal-husbandry`; `ghg-product-2011`

### 过程：车具挽具道路及支持生命周期 (`support_lifecycle`)

#### 输入

##### 产品流

###### 完整人力或畜力货运车制造投入 (`drawn_cart_assembly_manufacture`)

制造交付关口的一件真实完整物理总成；每个实例行只对应一个有记录的型号配置，不同配置分别实例化并计量。仅在该总成为所述节点服务且未被完整供应方覆盖时启用。初始部件包含清单是身份的一部分，已含初始部件不得再次投入；实际未覆盖的维护、更换及寿终另计。 实际完整车具须声明货厢、轴、轴承及初始车轮轮胎范围，不以动物食品或整项运输服务替代。制造供应本身不包含维修更换或退役。

- 选定流：完整人力或畜力货运车制造投入
- 流属性/单位：Count / Item(s)
- 数量规则：对每个同型号总成队列：制造件数 * 目标应承担工作量 / 全用户全寿命工作量 / N。两个工作量采用相容同一基准及队列，分母须有证据且为正；目标份额与最终参考归一各一次，已含初始部件不可再相加。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_assets`
- 来源：unsd-cpc3-65114; fao-draft-animal-husbandry; ghg-product-2011


##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

##### 基本流

## 7. 分配与共产品处理

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| joint_outputs | 全部节点 | 先按真实人畜区段、货批和饲养事件直接计量细分。不可避免的车具或役畜共享责任应保留全部运输及非运输用户、奶后代等真实预期产品和相关期间。动物维持与工作、货物载荷距离容量地形及共用资源采用有证据的物理因果关系；经济替代须证明无法建立物理关系并做敏感性分析。不采用统一役用与奶分配或按头分配。每项事件份额总和闭合为一。 | ghg-product-2011; fao-draft-animal-husbandry |
| life_period | 全部节点 | 按同组归属运行量除以有据且为正的全用户总使用量，分配真实原生车具或资产制造及独立生命周期事件，再仅除以合格完成数N一次。动物繁育育成训练维持及退役应有自身全输出寿命及阶段证据；原生供应方覆盖范围互斥。跨期关联真实资产组更换、未完成责任和库存，不得将制造流当作全生命周期服务。 | ghg-product-2011; fao-draft-animal-husbandry |
| failures_returns | 全部节点 | 在按正的完成数N归一化之前保留因果空驶失败拒收救援及休息恢复责任；未使用运力承诺、畜日或人日不能算作完成货运。重投退回应关联原托运并避免重复完成计数；N=0不能形成有限强度。 | ghg-product-2011; fao-draft-animal-husbandry |
| manure_products | 全部节点 | 实际有用粪肥交付、废粪收集、放牧沉积及空气土壤水体直接排放是不同去向。依据真实预期用途和接收方判定产品或废物，不假定肥料替代或自动避免排放抵扣。外运粪便保留的养分不能同时作为元素直接损失。死亡和退役动物须明确真实产品废物去向及兼容负荷处理。 | ghg-product-2011; fao-draft-animal-husbandry |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_fulfilment | freight_fulfilment | 货运输出与保管 | 真实一手记录及实测来源方法 | 托运；货物；接收质量体积；起讫；车辆；人畜区段ID；距离；地形；经过时间；质量；完成N；验收失败退回；损失接收方；全部用户；分配；期间 | 将签署接收交付运单关联真实区段转移ID及货物库存退回损失台账，记录实际完成N和归属数量。 按参考计量口径汇总唯一且已验收的合格产出作为分母，单列不合格事件及其资源责任。参考量保持规定值，仅归属的清单总量除以正分母。 | Item(s)；kg；km；h | 逐事件及期间闭合 | 实际报告期间加关联生命阶段 | 实际场址动物人员车具供应方 | 每声明的参考流 | 签署记录；校准；因果分配；范围及不确定性保存各实测操作数的来源及原生口径，注明实际采用的换算或归属依据，以及所供结果是否已按该参考流计量。 |
| cp_human | human_traction | 人力牵引责任及实际工作补给 | 真实一手记录及实测来源方法 | 人员角色；班次；车具；货物区段；载货空驶失败距离；路线地形；休息恢复；实际补给；基线扩展范围；记录方法；原生单位；全部用户；分配；期间；N；不确定性 | 使用真实班次路线日志和承运方补给记录，保留休息支持及失败责任，不作工资至食品换算。单独报告的增量代谢扩展须以真实基线和方法证据验证。 原始观测和对账总量保留其记录口径。负担行只分配仍共享的总量，已归属总量仅除以同队列、同交接点的正合格产出；已与该参考流等效的结果原值沿用。零产出时保留负担并记录去向。 | 原生补给数量；h；km；关联清单行的报告单位：kg (work_drinking_water) | 逐事件及期间闭合 | 实际报告期间加关联生命阶段 | 实际场址动物人员车具供应方 | 每声明的参考流 | 签署记录；校准；因果分配；范围及不确定性保存各实测操作数的来源及原生口径，注明实际采用的换算或归属依据，以及所供结果是否已按该参考流计量。 |
| cp_animal | animal_traction | 畜力作业饲料饲养及粪污排放去向 | 真实一手记录及实测来源方法 | 动物ID组；物种性别年龄；活重体况；日粮组分；干湿基；供给拒食消耗库存；水源用途；载货空驶失败作业；休息恢复；全部用户输出；奶后代；粪污质量水分碳氮；储存沉积接收方；直接物种介质；方法系数来源；原生单位；期间；分配；N | 保留称重或发票日粮及拒食、水表、动物作业日志、奶后代饲养及粪污交接，闭合物种特定原生台账，仅采用兼容实测或有据系数，并以真实全输出因果证据分配。 原始观测和对账总量保留其记录口径。负担行只分配仍共享的总量，已归属总量仅除以同队列、同交接点的正合格产出；已与该参考流等效的结果原值沿用。零产出时保留负担并记录去向。各项独立实测交付、排放及移交按各自交接点记录，负担按其适用规则分配。 | kg；原生水单位；畜力作业量 | 逐事件及期间闭合 | 实际报告期间加关联生命阶段 | 实际场址动物人员车具供应方 | 每声明的参考流 | 签署记录；校准；因果分配；范围及不确定性保存各实测操作数的来源及原生口径，注明实际采用的换算或归属依据，以及所供结果是否已按该参考流计量。 |
| cp_animal_life | animal_traction | 动物育成训练维持及退役 | 真实一手记录及实测来源方法 | 动物组物种；出生育成训练作业退役日期；更换死亡；供应方范围；原生育成数量；全输出生命周期运行量；作业非作业期间；奶后代其他输出；归属作业量；原生单位；期间；N | 将动物组生命阶段和真实供应方原生育成训练范围关联全部输出用户，保留非作业维持及退役死亡去向，避免购畜和育成范围重复。 原始观测和对账总量保留其记录口径。负担行只分配仍共享的总量，已归属总量仅除以同队列、同交接点的正合格产出；已与该参考流等效的结果原值沿用。零产出时保留负担并记录去向。 | 实际原生生命周期服务单位 | 逐事件及期间闭合 | 实际报告期间加关联生命阶段 | 实际场址动物人员车具供应方 | 每声明的参考流 | 签署记录；校准；因果分配；范围及不确定性保存各实测操作数的来源及原生口径，注明实际采用的换算或归属依据，以及所供结果是否已按该参考流计量。 |
| cp_assets | support_lifecycle | 车具挽具道路制造维护更换退役 | 真实一手记录及实测来源方法 | 资产ID组；实际配置；原生交付数量；已含初始部件；制造安装修理更换退役日期；全用户总使用量；归属运行量；供应方范围；场址；期间；原生单位；N | 核实真实总成及供应方原生范围和各生命周期事件，按同组实际运行量除以有据且为正的全用户总使用量分配，再仅按N归一化一次。 原始观测和对账总量保留其记录口径。负担行只分配仍共享的总量，已归属总量仅除以同队列、同交接点的正合格产出；已与该参考流等效的结果原值沿用。零产出时保留负担并记录去向。各项独立实测交付、排放及移交按各自交接点记录，负担按其适用规则分配。 | Item(s)；kg；原生基础设施单位 | 逐事件及期间闭合 | 实际报告期间加关联生命阶段 | 实际场址动物人员车具供应方 | 每声明的参考流 | 签署记录；校准；因果分配；范围及不确定性保存各实测操作数的来源及原生口径，注明实际采用的换算或归属依据，以及所供结果是否已按该参考流计量。 |
| cp_support | support_lifecycle | 装卸清洗场址责任及收集废物 | 真实一手记录及实测来源方法 | 场址；事件；供应方；货物交接；真实清洗供应；废水成分原生数量接收方；其他废物；直接排放；滞留蒸发水；全部用户；分配；范围；原生单位；期间；N | 采用签署装卸供应废物交接记录，保留来源接收方及与动物粪污台账的互斥归属；各场址用户数量在汇总归一化前有唯一归属。 原始观测和对账总量保留其记录口径。负担行只分配仍共享的总量，已归属总量仅除以同队列、同交接点的正合格产出；已与该参考流等效的结果原值沿用。零产出时保留负担并记录去向。各项独立实测交付、排放及移交按各自交接点记录，负担按其适用规则分配。 | 原生供应废物供应方单位 | 逐事件及期间闭合 | 实际报告期间加关联生命阶段 | 实际场址动物人员车具供应方 | 每声明的参考流 | 签署记录；校准；因果分配；范围及不确定性保存各实测操作数的来源及原生口径，注明实际采用的换算或归属依据，以及所供结果是否已按该参考流计量。 |
| cp_expand_work_provision_food | human_traction | 必须展开身份 work_provision_food (inputs/product)：实际承运方提供的工作食品补给 | collected_record | requirement_id=work_provision_food; process_id=human_traction; required_direction=inputs; required_flow_type=product; original_collection_protocol=cp_human; applicability_evidence; occurrence_event_id; concrete_row_id; physical_identity; formulation_or_species; phase; carbon_origin; particle_fraction; source_compartment; receiving_compartment; supply_or_handover_gate; provider_covered_cells; asset_component_event_and_lifecycle_phase; native_property; native_unit; measured_native_quantity; source_record_id; allocation_all_users; normalization_denominator; per_identity_amount_calculation; verification_evidence; unresolved_reason; occurrence_to_row_reconciliation; menu_recipe_or_feeding_plan; independent_ingredient_sku; supplied_state; batch_id; package_tare; opening_stock; net_receipts; closing_stock; unused_returns; failed_and_reworked_batch; moisture_density_evidence; applicability_decision_record; covered_concrete_rows; excluded_occurrence_reason; completion_evidence; observed_quantity_state; conversion_or_allocation_evidence | 仅在实际提供食品时记录，并按每种真实成分产品状态及原生单位拆分。不从工资工时或通用人体热量推定，也不同时重复计入完整供应餐及其已含食材。家庭基线饮食不在声明核心边界内。 本范围是必须落实的身份识别要求，不是交换流。使用原节点采集协议及其记录，先按真实身份、端口及独立功能拆分，再将保留的数量、基准及证据规则分别用于各兼容具体行。不得将异质身份合并数量或从总括名称推断原生属性单位。未发生须有证据，适用性或身份未知则阻止完成。 以下采集条件仅限本项 inputs/product 的身份与交接点（实际承运方提供的工作食品补给）。按真实菜单、配方、饲喂计划或供给记录启用，不假设标准配方。记录各独立外购原料或配方、实际收到状态、供应批次、包装皮重、库存变动及包括失败废弃生产的实测领用；完整配方与其组成不相加，外购物与内部研磨烹制转移不重复。区分湿质量、干固体与配方或发泡体积，换算须有实际批次含水率或密度；退回、返工、有用与废物流追溯原批次。 每项适用性判断须留证。经证实不发生仅关闭所述范围和时段，缺记录仍未解决。发生的要求须将全部事件映射到具体row ID及相容原生数量，或精确映射至已覆盖行和供应方责任，并逐项说明排除理由。证据须覆盖身份、支持单位、计算、原始记录及全部去向；既有与新增分支对同一事件互斥覆盖，协议本身不作为交换。完成须无未分配事件、无重复覆盖、无相关数量或身份未决项。按有证据的实际分支采集原始字段。不适用的操作数须关联分支判定，适用但缺乏实测或依据的数量登记待决。 | 实际配料或配方的收到基原生单位，换算时记录水分或得率口径 | 每次真实事件及每项有证据的未发生判断 | 完整声明队列及归属资产寿命关联事件 | 仅本过程真实责任场所及供应方 | 先对账原生事件总量，仅汇总身份、状态、单位、交接点及期间均相容的量。按相应计算规则逐行核算一次：只分配仍共享的负担，目标总量仅除以同口径的正合格产出；等效每参考流数值原值沿用，零产出期间不作除法并保留处置记录。 | 核对批次收货、库存净领用及配方或饲喂记录，纳入失败制备。按测量口径区分水、包装皮重和食品，干基换算与该批次匹配。 对上述具体身份及相容输入口径，仅在数量的归属和归一化状态与下式前提匹配时使用该规则：attributed_actual_native_work_food / N 保留原始凭据、实际采用的系数和结果单位。数值来源模式：calculated_value；适用范围：site_specific；归一化基准：每声明的参考流；基准类型：reference_flow；证据类型：calculated_from_collection；采集协议：cp_human；来源：unsd-cpc3-65114; fao-draft-animal-husbandry; ghg-product-2011。须有原始记录、精确原生支持及逐具体行核验；这些规则不提供缺失身份或数值。 完成判据：check_occurrence_completion。 |
| cp_expand_draft_animal_feed | animal_traction | 必须展开身份 draft_animal_feed (inputs/product)：实际供应给役畜的日粮组分 | collected_record | requirement_id=draft_animal_feed; process_id=animal_traction; required_direction=inputs; required_flow_type=product; original_collection_protocol=cp_animal; applicability_evidence; occurrence_event_id; concrete_row_id; physical_identity; formulation_or_species; phase; carbon_origin; particle_fraction; source_compartment; receiving_compartment; supply_or_handover_gate; provider_covered_cells; asset_component_event_and_lifecycle_phase; native_property; native_unit; measured_native_quantity; source_record_id; allocation_all_users; normalization_denominator; per_identity_amount_calculation; verification_evidence; unresolved_reason; occurrence_to_row_reconciliation; menu_recipe_or_feeding_plan; independent_ingredient_sku; supplied_state; batch_id; package_tare; opening_stock; net_receipts; closing_stock; unused_returns; failed_and_reworked_batch; moisture_density_evidence; applicability_decision_record; covered_concrete_rows; excluded_occurrence_reason; completion_evidence; observed_quantity_state; conversion_or_allocation_evidence | 此为每一种真实单一饲料组分、作物残留或放牧来源的条件待核需求，不以一个复合饲料UUID覆盖全部物种。保留干湿基、成分、采食拒食、原生供应及上游种植范围。实际牧场占用与饲喂动物直接排放分别确定边界。 本范围是必须落实的身份识别要求，不是交换流。使用原节点采集协议及其记录，先按真实身份、端口及独立功能拆分，再将保留的数量、基准及证据规则分别用于各兼容具体行。不得将异质身份合并数量或从总括名称推断原生属性单位。未发生须有证据，适用性或身份未知则阻止完成。 以下采集条件仅限本项 inputs/product 的身份与交接点（实际供应给役畜的日粮组分）。按真实菜单、配方、饲喂计划或供给记录启用，不假设标准配方。记录各独立外购原料或配方、实际收到状态、供应批次、包装皮重、库存变动及包括失败废弃生产的实测领用；完整配方与其组成不相加，外购物与内部研磨烹制转移不重复。区分湿质量、干固体与配方或发泡体积，换算须有实际批次含水率或密度；退回、返工、有用与废物流追溯原批次。 每项适用性判断须留证。经证实不发生仅关闭所述范围和时段，缺记录仍未解决。发生的要求须将全部事件映射到具体row ID及相容原生数量，或精确映射至已覆盖行和供应方责任，并逐项说明排除理由。证据须覆盖身份、支持单位、计算、原始记录及全部去向；既有与新增分支对同一事件互斥覆盖，协议本身不作为交换。完成须无未分配事件、无重复覆盖、无相关数量或身份未决项。按有证据的实际分支采集原始字段。不适用的操作数须关联分支判定，适用但缺乏实测或依据的数量登记待决。 | 实际配料或配方的收到基原生单位，换算时记录水分或得率口径 | 每次真实事件及每项有证据的未发生判断 | 完整声明队列及归属资产寿命关联事件 | 仅本过程真实责任场所及供应方 | 先对账原生事件总量，仅汇总身份、状态、单位、交接点及期间均相容的量。按相应计算规则逐行核算一次：只分配仍共享的负担，目标总量仅除以同口径的正合格产出；等效每参考流数值原值沿用，零产出期间不作除法并保留处置记录。 | 核对批次收货、库存净领用及配方或饲喂记录，纳入失败制备。按测量口径区分水、包装皮重和食品，干基换算与该批次匹配。 对上述具体身份及相容输入口径，仅在数量的归属和归一化状态与下式前提匹配时使用该规则：attributed_native_ration_component / N 保留原始凭据、实际采用的系数和结果单位。数值来源模式：calculated_value；适用范围：site_specific；归一化基准：每声明的参考流；基准类型：reference_flow；证据类型：calculated_from_collection；采集协议：cp_animal；来源：unsd-cpc3-65114; fao-draft-animal-husbandry; ghg-product-2011。须有原始记录、精确原生支持及逐具体行核验；这些规则不提供缺失身份或数值。 完成判据：check_occurrence_completion。 |
| cp_expand_animal_rearing_service | animal_traction | 必须展开身份 animal_rearing_service (inputs/product)：原生役畜育成与训练服务 | collected_record | requirement_id=animal_rearing_service; process_id=animal_traction; required_direction=inputs; required_flow_type=product; original_collection_protocol=cp_animal_life; applicability_evidence; occurrence_event_id; concrete_row_id; physical_identity; formulation_or_species; phase; carbon_origin; particle_fraction; source_compartment; receiving_compartment; supply_or_handover_gate; provider_covered_cells; asset_component_event_and_lifecycle_phase; native_property; native_unit; measured_native_quantity; source_record_id; allocation_all_users; normalization_denominator; per_identity_amount_calculation; verification_evidence; unresolved_reason; occurrence_to_row_reconciliation; provider_contract; independent_function; provider_gates; native_functional_unit; delivered_quantity; covered_process_phase_cells; uncovered_foreground_rows; applicability_decision_record; covered_concrete_rows; excluded_occurrence_reason; completion_evidence; operator_mode; rearing_cohort; active_work_gate; service_native_demand; observed_quantity_state; conversion_or_allocation_evidence; provider_functional_unit; accepted_service_demand; provider_intensity_basis; covered_service_stages | 实际进入作业前的繁育育成训练供应方组合，或单独建模的自营阶段，须匹配物种动物组及原生单位。活体动物生产采购行不是全生命周期役用服务。仅替代供应方已含阶段，不重复饲料排放或育成。 本范围是必须落实的身份识别要求，不是交换流。使用原节点采集协议及其记录，先按真实身份、端口及独立功能拆分，再将保留的数量、基准及证据规则分别用于各兼容具体行。不得将异质身份合并数量或从总括名称推断原生属性单位。未发生须有证据，适用性或身份未知则阻止完成。 按外购饲养训练、自营服役前繁育饲喂照护训练，或有记录的组合启用。外购服务按已核实原生单位及实测需求核算。自营阶段按动物队列追踪饲料、水、垫料、能源、粪污和排放，明确进入服役的实际交接点。饲养或服役照护事件只归属一个阶段和责任方，并与购入动物或综合服务的覆盖范围对账。逐事件登记实际身份、边界、期间、独立原生数量及负责运营方。按实际发生保留待机、失败、返工及库存；仅以供应方已覆盖阶段替代相同直接作业。 每项适用性判断须留证。经证实不发生仅关闭所述范围和时段，缺记录仍未解决。发生的要求须将全部事件映射到具体row ID及相容原生数量，或精确映射至已覆盖行和供应方责任，并逐项说明排除理由。证据须覆盖身份、支持单位、计算、原始记录及全部去向；既有与新增分支对同一事件互斥覆盖，协议本身不作为交换。完成须无未分配事件、无重复覆盖、无相关数量或身份未决项。按有证据的实际分支采集原始字段。仅属于不适用分支的字段须注明理由；适用分支缺少的计量仍须登记待决。 | 训练或照护服务用已核实原生功能单位；自营饲养按实际队列、物料及排放单位 | 每次真实事件及每项有证据的未发生判断 | 完整声明队列及归属资产寿命关联事件 | 仅本过程真实责任场所及供应方 | 先对账原生事件总量，仅汇总身份、状态、单位、交接点及期间均相容的量。按相应计算规则逐行核算一次：只分配仍共享的负担，目标总量仅除以同口径的正合格产出；等效每参考流数值原值沿用，零产出期间不作除法并保留处置记录。 | 核对采购验收或自营队列饲料、照护及排放至开始服役的交接点，每个阶段归属一次，排除与服役照护的重叠。 对上述具体身份及相容输入口径，仅在数量的归属和归一化状态与下式前提匹配时使用该规则：attributed_native_rearing_training_service / N 保留原始凭据、实际采用的系数和结果单位。数值来源模式：calculated_value；适用范围：site_specific；归一化基准：每声明的参考流；基准类型：reference_flow；证据类型：calculated_from_collection；采集协议：cp_animal_life；来源：unsd-cpc3-65114; fao-draft-animal-husbandry; ghg-product-2011。须有原始记录、精确原生支持及逐具体行核验；这些规则不提供缺失身份或数值。 完成判据：check_occurrence_completion。 |
| cp_expand_veterinary_service | animal_traction | 必须展开身份 veterinary_service (inputs/product)：实际兽医及蹄部护理服务 | collected_record | requirement_id=veterinary_service; process_id=animal_traction; required_direction=inputs; required_flow_type=product; original_collection_protocol=cp_animal; applicability_evidence; occurrence_event_id; concrete_row_id; physical_identity; formulation_or_species; phase; carbon_origin; particle_fraction; source_compartment; receiving_compartment; supply_or_handover_gate; provider_covered_cells; asset_component_event_and_lifecycle_phase; native_property; native_unit; measured_native_quantity; source_record_id; allocation_all_users; normalization_denominator; per_identity_amount_calculation; verification_evidence; unresolved_reason; occurrence_to_row_reconciliation; provider_contract; independent_function; provider_gates; native_functional_unit; delivered_quantity; covered_process_phase_cells; uncovered_foreground_rows; applicability_decision_record; covered_concrete_rows; excluded_occurrence_reason; completion_evidence; observed_quantity_state; conversion_or_allocation_evidence; provider_functional_unit; accepted_service_demand; provider_intensity_basis; covered_service_stages | 记录实际兽医蹄部护理供应方服务及真实原生功能和物料药品范围。单独供应的制剂运输或能源仅在尚未包含时拆列；全部物种及实际饲养需要仍在范围内。 本范围是必须落实的身份识别要求，不是交换流。使用原节点采集协议及其记录，先按真实身份、端口及独立功能拆分，再将保留的数量、基准及证据规则分别用于各兼容具体行。不得将异质身份合并数量或从总括名称推断原生属性单位。未发生须有证据，适用性或身份未知则阻止完成。 以下采集条件仅限本项 inputs/product 的身份与交接点（实际兽医及蹄部护理服务）。仅在本PCR范围内实际委托独立功能时启用。记录合同、交付服务功能、关口、原生功能单位、实际交付量及具体覆盖的过程和寿命阶段；逐项与自营活动比对，完整供应方或未覆盖前景活动仅计一次。不用金额、材料质量或假设件数替代真实功能；同一最终服务不通过外部最终产品供应方递归重复计入。 每项适用性判断须留证。经证实不发生仅关闭所述范围和时段，缺记录仍未解决。发生的要求须将全部事件映射到具体row ID及相容原生数量，或精确映射至已覆盖行和供应方责任，并逐项说明排除理由。证据须覆盖身份、支持单位、计算、原始记录及全部去向；既有与新增分支对同一事件互斥覆盖，协议本身不作为交换。完成须无未分配事件、无重复覆盖、无相关数量或身份未决项。按有证据的实际分支采集原始字段。不适用的操作数须关联分支判定，适用但缺乏实测或依据的数量登记待决。 | 已核实的合同交付功能单位；仅独立可计数且已验收的结果使用 Item(s) | 每次真实事件及每项有证据的未发生判断 | 完整声明队列及归属资产寿命关联事件 | 仅本过程真实责任场所及供应方 | 先对账原生事件总量，仅汇总身份、状态、单位、交接点及期间均相容的量。按相应计算规则逐行核算一次：只分配仍共享的负担，目标总量仅除以同口径的正合格产出；等效每参考流数值原值沿用，零产出期间不作除法并保留处置记录。 | 按指定交接点实际验收量计量。仅在单位强度换算为总负担时，以供应方强度乘同一原生单位的需求量。保留合同范围、验收、原生单位及覆盖阶段记录。仅按时间交付的功能以时长计量。 对按合同口径已验收的服务，仅在数量的归属和归一化状态与下式前提匹配时使用该规则：attributed_native_veterinary_service / N 保留原始凭据、实际采用的系数和结果单位。数值来源模式：calculated_value；适用范围：site_specific；归一化基准：每声明的参考流；基准类型：reference_flow；证据类型：calculated_from_collection；采集协议：cp_animal；来源：unsd-cpc3-65114; fao-draft-animal-husbandry; ghg-product-2011。须有原始记录、精确原生支持及逐具体行核验；这些规则不提供缺失身份或数值。 完成判据：check_occurrence_completion。 |
| cp_expand_collected_manure_waste | animal_traction | 必须展开身份 collected_manure_waste (outputs/waste)：交接端口的收集役畜粪污废物 | collected_record | requirement_id=collected_manure_waste; process_id=animal_traction; required_direction=outputs; required_flow_type=waste; original_collection_protocol=cp_animal; applicability_evidence; occurrence_event_id; concrete_row_id; physical_identity; formulation_or_species; phase; carbon_origin; particle_fraction; source_compartment; receiving_compartment; supply_or_handover_gate; provider_covered_cells; asset_component_event_and_lifecycle_phase; native_property; native_unit; measured_native_quantity; source_record_id; allocation_all_users; normalization_denominator; per_identity_amount_calculation; verification_evidence; unresolved_reason; occurrence_to_row_reconciliation; waste_origin_event; material_or_true_mixture; moisture_basis; container_tare; opening_waste_stock; generated_waste; received_waste; handover_quantity; closing_waste_stock; onsite_treatment; receiver_id; applicability_decision_record; covered_concrete_rows; excluded_occurrence_reason; completion_evidence; observed_quantity_state; conversion_or_allocation_evidence | 仅指具有废物状态且明确物种成分水分及接收方的实际粪污。有用产品外运粪肥应另设产品输出；直接沉积及储存排放不得重复记作收集废物，不设通用抵扣。 本范围是必须落实的身份识别要求，不是交换流。使用原节点采集协议及其记录，先按真实身份、端口及独立功能拆分，再将保留的数量、基准及证据规则分别用于各兼容具体行。不得将异质身份合并数量或从总括名称推断原生属性单位。未发生须有证据，适用性或身份未知则阻止完成。 以下采集条件仅限本项 outputs/waste 的身份与交接点（交接端口的收集役畜粪污废物）。本过程实际产生或接收所述废物时启用。记录材料或配方或真实共同收集混合物、干湿状态、容器皮重、来源事件、存量、交接关口及实际接收者；核对产生量+期初库存+接收量=交出量+期末库存+另列现场处理量。分收的不同废物分行，真实接收混合物可为一行，其组分仅作不可相加审计；有用回收、客户保留物与废物去向分开，不自动给替代抵扣。 每项适用性判断须留证。经证实不发生仅关闭所述范围和时段，缺记录仍未解决。发生的要求须将全部事件映射到具体row ID及相容原生数量，或精确映射至已覆盖行和供应方责任，并逐项说明排除理由。证据须覆盖身份、支持单位、计算、原始记录及全部去向；既有与新增分支对同一事件互斥覆盖，协议本身不作为交换。完成须无未分配事件、无重复覆盖、无相关数量或身份未决项。按有证据的实际分支采集原始字段。不适用的操作数须关联分支判定，适用但缺乏实测或依据的数量登记待决。 | 接收方验收的具体废物或实际混合收集物在实测状态下的原生数量 | 每次真实事件及每项有证据的未发生判断 | 完整声明队列及归属资产寿命关联事件 | 仅本过程真实责任场所及供应方 | 先对账原生事件总量，仅汇总身份、状态、单位、交接点及期间均相容的量。按相应计算规则逐行核算一次：只分配仍共享的负担，目标总量仅除以同口径的正合格产出；等效每参考流数值原值沿用，零产出期间不作除法并保留处置记录。 | 以接收记录核对产生、库存、场内处理和实测交付。混合物流量与组分测量分开；干湿基或质量体积换算须有相容组成或密度。接收转移和环境直排按不同交接点记录。 对规定采用 质量 / kg 的行，核实实测口径或向该口径的换算。 对上述具体身份及相容输入口径，仅在数量的归属和归一化状态与下式前提匹配时使用该规则：attributed_collected_waste_manure_kg / N 保留原始凭据、实际采用的系数和结果单位。数值来源模式：calculated_value；适用范围：site_specific；归一化基准：每声明的参考流；基准类型：reference_flow；证据类型：calculated_from_collection；采集协议：cp_animal；来源：unsd-cpc3-65114; fao-draft-animal-husbandry; ghg-product-2011。须有原始记录、精确原生支持及逐具体行核验；这些规则不提供缺失身份或数值。 完成判据：check_occurrence_completion。 |
| cp_expand_drawn_cart_assembly | support_lifecycle | 必须展开身份 drawn_cart_assembly (inputs/product)：交付端口的完整人力或畜力货运车具 | collected_record | requirement_id=drawn_cart_assembly; process_id=support_lifecycle; required_direction=inputs; required_flow_type=product; original_collection_protocol=cp_assets; applicability_evidence; occurrence_event_id; concrete_row_id; physical_identity; formulation_or_species; phase; carbon_origin; particle_fraction; source_compartment; receiving_compartment; supply_or_handover_gate; provider_covered_cells; asset_component_event_and_lifecycle_phase; native_property; native_unit; measured_native_quantity; source_record_id; allocation_all_users; normalization_denominator; per_identity_amount_calculation; verification_evidence; unresolved_reason; occurrence_to_row_reconciliation; asset_or_reusable_id; model_configuration; included_initial_components; lifecycle_phase; manufacture_native_quantity; target_duty; all_user_same_cohort_lifetime_duty; replacement_event; provider_coverage_cells; applicability_decision_record; covered_concrete_rows; excluded_occurrence_reason; completion_evidence; observed_quantity_state; conversion_or_allocation_evidence; supply_or_service_gate; accepted_service_demand; provider_functional_unit; provider_intensity_basis; covered_lifecycle_stages | 实际完整车具须声明货厢、轴、轴承及初始车轮轮胎范围，不以动物食品或整项运输服务替代。制造供应本身不包含维修更换或退役。 本范围是必须落实的身份识别要求，不是交换流。使用原节点采集协议及其记录，先按真实身份、端口及独立功能拆分，再将保留的数量、基准及证据规则分别用于各兼容具体行。不得将异质身份合并数量或从总括名称推断原生属性单位。未发生须有证据，适用性或身份未知则阻止完成。 对本项规定的实体资产或周转品，核实供应交接点、初始部件以及实际替换、维护、清洗、失败和退役记录。租赁或综合供应合同须核实覆盖范围；本项包含已交付服务时按实际验收的原生需求计量，仅另行追溯未覆盖的资产阶段。直接建模资产按同队列目标作业量与全用户有据正寿命作业量之比分配，禁止将整个设施归给一个服务。 已明确分支（仅按实际适用记录启用）：drawn_cart_assembly_manufacture. 每项适用性判断须留证。经证实不发生仅关闭所述范围和时段，缺记录仍未解决。发生的要求须将全部事件映射到具体row ID及相容原生数量，或精确映射至已覆盖行和供应方责任，并逐项说明排除理由。证据须覆盖身份、支持单位、计算、原始记录及全部去向；既有与新增分支对同一事件互斥覆盖，协议本身不作为交换。完成须无未分配事件、无重复覆盖、无相关数量或身份未决项。按有证据的实际分支采集原始字段。不适用的操作数须关联分支判定，适用但缺乏实测或依据的数量登记待决。 | 实体资产或周转品按已核实的制造或供应单位；同一队列的相容作业量；范围内的交付服务用其原生功能单位 | 每次真实事件及每项有证据的未发生判断 | 完整声明队列及归属资产寿命关联事件 | 仅本过程真实责任场所及供应方 | 先对账原生事件总量，仅汇总身份、状态、单位、交接点及期间均相容的量。按相应计算规则逐行核算一次：只分配仍共享的负担，目标总量仅除以同口径的正合格产出；等效每参考流数值原值沿用，零产出期间不作除法并保留处置记录。 | 实体资产按有记录的供应交接量乘目标作业量与同队列全用户正寿命作业量之比，保留配置、投运、更换及退役或剩余寿命记录。范围内如有已交付服务，按已核实原生强度乘相容交付需求，留存覆盖凭据，未覆盖阶段单列。 若实体资产按 物品数量 / Item(s) 计量，保留实测供应量，寿命作业量另记单位。 对该交接点相容的资产量或已独立核实的服务结果，仅在数量的归属和归一化状态与下式前提匹配时使用该规则：attributed_cart_manufacture_items / N 保留原始凭据、实际采用的系数和结果单位。数值来源模式：calculated_value；适用范围：site_specific；归一化基准：每声明的参考流；基准类型：reference_flow；证据类型：calculated_from_collection；采集协议：cp_assets；来源：unsd-cpc3-65114; fao-draft-animal-husbandry; ghg-product-2011。须有原始记录、精确原生支持及逐具体行核验；这些规则不提供缺失身份或数值。 完成判据：check_occurrence_completion。 |
| cp_expand_harness_assembly | support_lifecycle | 必须展开身份 harness_assembly (inputs/product)：实际供应的役畜挽具总成 | collected_record | requirement_id=harness_assembly; process_id=support_lifecycle; required_direction=inputs; required_flow_type=product; original_collection_protocol=cp_assets; applicability_evidence; occurrence_event_id; concrete_row_id; physical_identity; formulation_or_species; phase; carbon_origin; particle_fraction; source_compartment; receiving_compartment; supply_or_handover_gate; provider_covered_cells; asset_component_event_and_lifecycle_phase; native_property; native_unit; measured_native_quantity; source_record_id; allocation_all_users; normalization_denominator; per_identity_amount_calculation; verification_evidence; unresolved_reason; occurrence_to_row_reconciliation; asset_or_reusable_id; model_configuration; included_initial_components; lifecycle_phase; manufacture_native_quantity; target_duty; all_user_same_cohort_lifetime_duty; replacement_event; provider_coverage_cells; applicability_decision_record; covered_concrete_rows; excluded_occurrence_reason; completion_evidence; observed_quantity_state; conversion_or_allocation_evidence; supply_or_service_gate; accepted_service_demand; provider_functional_unit; provider_intensity_basis; covered_lifecycle_stages | 按实际条件供应适合物种尺寸的挽具或轭具总成，明确材质及原生供应数量。记录维护更换及与福利相关的适配证据，不预设皮革木材或统一挽具寿命。 本范围是必须落实的身份识别要求，不是交换流。使用原节点采集协议及其记录，先按真实身份、端口及独立功能拆分，再将保留的数量、基准及证据规则分别用于各兼容具体行。不得将异质身份合并数量或从总括名称推断原生属性单位。未发生须有证据，适用性或身份未知则阻止完成。 对本项规定的实体资产或周转品，核实供应交接点、初始部件以及实际替换、维护、清洗、失败和退役记录。租赁或综合供应合同须核实覆盖范围；本项包含已交付服务时按实际验收的原生需求计量，仅另行追溯未覆盖的资产阶段。直接建模资产按同队列目标作业量与全用户有据正寿命作业量之比分配，禁止将整个设施归给一个服务。 每项适用性判断须留证。经证实不发生仅关闭所述范围和时段，缺记录仍未解决。发生的要求须将全部事件映射到具体row ID及相容原生数量，或精确映射至已覆盖行和供应方责任，并逐项说明排除理由。证据须覆盖身份、支持单位、计算、原始记录及全部去向；既有与新增分支对同一事件互斥覆盖，协议本身不作为交换。完成须无未分配事件、无重复覆盖、无相关数量或身份未决项。按有证据的实际分支采集原始字段。不适用的操作数须关联分支判定，适用但缺乏实测或依据的数量登记待决。 | 实体资产或周转品按已核实的制造或供应单位；同一队列的相容作业量；范围内的交付服务用其原生功能单位 | 每次真实事件及每项有证据的未发生判断 | 完整声明队列及归属资产寿命关联事件 | 仅本过程真实责任场所及供应方 | 先对账原生事件总量，仅汇总身份、状态、单位、交接点及期间均相容的量。按相应计算规则逐行核算一次：只分配仍共享的负担，目标总量仅除以同口径的正合格产出；等效每参考流数值原值沿用，零产出期间不作除法并保留处置记录。 | 实体资产按有记录的供应交接量乘目标作业量与同队列全用户正寿命作业量之比，保留配置、投运、更换及退役或剩余寿命记录。范围内如有已交付服务，按已核实原生强度乘相容交付需求，留存覆盖凭据，未覆盖阶段单列。 对该交接点相容的资产量或已独立核实的服务结果，仅在数量的归属和归一化状态与下式前提匹配时使用该规则：attributed_native_harness_supply / N 保留原始凭据、实际采用的系数和结果单位。数值来源模式：calculated_value；适用范围：site_specific；归一化基准：每声明的参考流；基准类型：reference_flow；证据类型：calculated_from_collection；采集协议：cp_assets；来源：unsd-cpc3-65114; fao-draft-animal-husbandry; ghg-product-2011。须有原始记录、精确原生支持及逐具体行核验；这些规则不提供缺失身份或数值。 完成判据：check_occurrence_completion。 |
| cp_expand_road_path_service | support_lifecycle | 必须展开身份 road_path_service (inputs/product)：实际道路或路径基础设施生命周期服务 | collected_record | requirement_id=road_path_service; process_id=support_lifecycle; required_direction=inputs; required_flow_type=product; original_collection_protocol=cp_assets; applicability_evidence; occurrence_event_id; concrete_row_id; physical_identity; formulation_or_species; phase; carbon_origin; particle_fraction; source_compartment; receiving_compartment; supply_or_handover_gate; provider_covered_cells; asset_component_event_and_lifecycle_phase; native_property; native_unit; measured_native_quantity; source_record_id; allocation_all_users; normalization_denominator; per_identity_amount_calculation; verification_evidence; unresolved_reason; occurrence_to_row_reconciliation; provider_contract; independent_function; provider_gates; native_functional_unit; delivered_quantity; covered_process_phase_cells; uncovered_foreground_rows; applicability_decision_record; covered_concrete_rows; excluded_occurrence_reason; completion_evidence; operator_mode; asset_cohort; all_user_lifetime_duty; provider_native_demand; observed_quantity_state; conversion_or_allocation_evidence; provider_functional_unit; accepted_service_demand; provider_intensity_basis; covered_service_stages | 使用有据的供应方原生功能和全用户运行量记录真实道路路径建设维修及退役负荷。不推定家庭或农场通路无负荷；供应方与自营建设范围互斥。 本范围是必须落实的身份识别要求，不是交换流。使用原节点采集协议及其记录，先按真实身份、端口及独立功能拆分，再将保留的数量、基准及证据规则分别用于各兼容具体行。不得将异质身份合并数量或从总括名称推断原生属性单位。未发生须有证据，适用性或身份未知则阻止完成。 按外购道路通行服务、自有道路建养或有记录的混合覆盖启用。交付服务按已核实原生单位和实测需求核算。自有道路建设、修缮及退役追踪实际阶段，共享基础设施按目标与完整寿命全用户相容作业量之比分配。单列使用阶段，每个未覆盖阶段仅归属一个责任方。逐事件登记实际身份、边界、期间、独立原生数量及负责运营方。按实际发生保留待机、失败、返工及库存；仅以供应方已覆盖阶段替代相同直接作业。 每项适用性判断须留证。经证实不发生仅关闭所述范围和时段，缺记录仍未解决。发生的要求须将全部事件映射到具体row ID及相容原生数量，或精确映射至已覆盖行和供应方责任，并逐项说明排除理由。证据须覆盖身份、支持单位、计算、原始记录及全部去向；既有与新增分支对同一事件互斥覆盖，协议本身不作为交换。完成须无未分配事件、无重复覆盖、无相关数量或身份未决项。按有证据的实际分支采集原始字段。仅属于不适用分支的字段须注明理由；适用分支缺少的计量仍须登记待决。 | 外购通行用合同功能单位；自有设施用各原生物料及相容寿命作业单位 | 每次真实事件及每项有证据的未发生判断 | 完整声明队列及归属资产寿命关联事件 | 仅本过程真实责任场所及供应方 | 先对账原生事件总量，仅汇总身份、状态、单位、交接点及期间均相容的量。按相应计算规则逐行核算一次：只分配仍共享的负担，目标总量仅除以同口径的正合格产出；等效每参考流数值原值沿用，零产出期间不作除法并保留处置记录。 | 核实交付需求或追溯自建、维护、退役责任。共享资产阶段按相容的全用户寿命作业量分配，与供应方覆盖阶段对账一次。 对上述具体身份及相容输入口径，仅在数量的归属和归一化状态与下式前提匹配时使用该规则：attributed_native_road_path_service / N 保留原始凭据、实际采用的系数和结果单位。数值来源模式：calculated_value；适用范围：site_specific；归一化基准：每声明的参考流；基准类型：reference_flow；证据类型：calculated_from_collection；采集协议：cp_assets；来源：unsd-cpc3-65114; fao-draft-animal-husbandry; ghg-product-2011。须有原始记录、精确原生支持及逐具体行核验；这些规则不提供缺失身份或数值。 完成判据：check_occurrence_completion。 |
| cp_expand_worn_cart_tyre | support_lifecycle | 必须展开身份 worn_cart_tyre (outputs/waste)：废物产生点的磨损货运车轮胎 | collected_record | requirement_id=worn_cart_tyre; process_id=support_lifecycle; required_direction=outputs; required_flow_type=waste; original_collection_protocol=cp_assets; applicability_evidence; occurrence_event_id; concrete_row_id; physical_identity; formulation_or_species; phase; carbon_origin; particle_fraction; source_compartment; receiving_compartment; supply_or_handover_gate; provider_covered_cells; asset_component_event_and_lifecycle_phase; native_property; native_unit; measured_native_quantity; source_record_id; allocation_all_users; normalization_denominator; per_identity_amount_calculation; verification_evidence; unresolved_reason; occurrence_to_row_reconciliation; waste_origin_event; material_or_true_mixture; moisture_basis; container_tare; opening_waste_stock; generated_waste; received_waste; handover_quantity; closing_waste_stock; onsite_treatment; receiver_id; applicability_decision_record; covered_concrete_rows; excluded_occurrence_reason; completion_evidence; observed_quantity_state; conversion_or_allocation_evidence | 仅记录真实橡胶轮胎车具在产生点形成的轮胎废物，声明接收方及成分。实木或钢轮属于独立资产废物；使用中排放或沉积的磨耗与交给处理方的残余轮胎分开。 本范围是必须落实的身份识别要求，不是交换流。使用原节点采集协议及其记录，先按真实身份、端口及独立功能拆分，再将保留的数量、基准及证据规则分别用于各兼容具体行。不得将异质身份合并数量或从总括名称推断原生属性单位。未发生须有证据，适用性或身份未知则阻止完成。 以下采集条件仅限本项 outputs/waste 的身份与交接点（废物产生点的磨损货运车轮胎）。本过程实际产生或接收所述废物时启用。记录材料或配方或真实共同收集混合物、干湿状态、容器皮重、来源事件、存量、交接关口及实际接收者；核对产生量+期初库存+接收量=交出量+期末库存+另列现场处理量。分收的不同废物分行，真实接收混合物可为一行，其组分仅作不可相加审计；有用回收、客户保留物与废物去向分开，不自动给替代抵扣。 每项适用性判断须留证。经证实不发生仅关闭所述范围和时段，缺记录仍未解决。发生的要求须将全部事件映射到具体row ID及相容原生数量，或精确映射至已覆盖行和供应方责任，并逐项说明排除理由。证据须覆盖身份、支持单位、计算、原始记录及全部去向；既有与新增分支对同一事件互斥覆盖，协议本身不作为交换。完成须无未分配事件、无重复覆盖、无相关数量或身份未决项。按有证据的实际分支采集原始字段。不适用的操作数须关联分支判定，适用但缺乏实测或依据的数量登记待决。 | 接收方验收的具体废物或实际混合收集物在实测状态下的原生数量 | 每次真实事件及每项有证据的未发生判断 | 完整声明队列及归属资产寿命关联事件 | 仅本过程真实责任场所及供应方 | 先对账原生事件总量，仅汇总身份、状态、单位、交接点及期间均相容的量。按相应计算规则逐行核算一次：只分配仍共享的负担，目标总量仅除以同口径的正合格产出；等效每参考流数值原值沿用，零产出期间不作除法并保留处置记录。 | 以接收记录核对产生、库存、场内处理和实测交付。混合物流量与组分测量分开；干湿基或质量体积换算须有相容组成或密度。接收转移和环境直排按不同交接点记录。 对规定采用 质量 / kg 的行，核实实测口径或向该口径的换算。 对上述具体身份及相容输入口径，仅在数量的归属和归一化状态与下式前提匹配时使用该规则：attributed_actual_worn_tyre_kg / N 保留原始凭据、实际采用的系数和结果单位。数值来源模式：calculated_value；适用范围：site_specific；归一化基准：每声明的参考流；基准类型：reference_flow；证据类型：calculated_from_collection；采集协议：cp_assets；来源：unsd-cpc3-65114; fao-draft-animal-husbandry; ghg-product-2011。须有原始记录、精确原生支持及逐具体行核验；这些规则不提供缺失身份或数值。 完成判据：check_occurrence_completion。 |
| cp_expand_collected_cleaning_wastewater | support_lifecycle | 必须展开身份 collected_cleaning_wastewater (outputs/waste)：收集的车具或役畜圈舍清洗废水 | collected_record | requirement_id=collected_cleaning_wastewater; process_id=support_lifecycle; required_direction=outputs; required_flow_type=waste; original_collection_protocol=cp_support; applicability_evidence; occurrence_event_id; concrete_row_id; physical_identity; formulation_or_species; phase; carbon_origin; particle_fraction; source_compartment; receiving_compartment; supply_or_handover_gate; provider_covered_cells; asset_component_event_and_lifecycle_phase; native_property; native_unit; measured_native_quantity; source_record_id; allocation_all_users; normalization_denominator; per_identity_amount_calculation; verification_evidence; unresolved_reason; occurrence_to_row_reconciliation; waste_origin_event; material_or_true_mixture; moisture_basis; container_tare; opening_waste_stock; generated_waste; received_waste; handover_quantity; closing_waste_stock; onsite_treatment; receiver_id; applicability_decision_record; covered_concrete_rows; excluded_occurrence_reason; completion_evidence; observed_quantity_state; conversion_or_allocation_evidence | 每个实际兼容清洗废水流须按节点来源、粪污化学物和货物成分、水分及接收方分别明确。不得把用自来水量等同废水量，应区分蒸发滞留水和直接排放。 本范围是必须落实的身份识别要求，不是交换流。使用原节点采集协议及其记录，先按真实身份、端口及独立功能拆分，再将保留的数量、基准及证据规则分别用于各兼容具体行。不得将异质身份合并数量或从总括名称推断原生属性单位。未发生须有证据，适用性或身份未知则阻止完成。 以下采集条件仅限本项 outputs/waste 的身份与交接点（收集的车具或役畜圈舍清洗废水）。本过程实际产生或接收所述废物时启用。记录材料或配方或真实共同收集混合物、干湿状态、容器皮重、来源事件、存量、交接关口及实际接收者；核对产生量+期初库存+接收量=交出量+期末库存+另列现场处理量。分收的不同废物分行，真实接收混合物可为一行，其组分仅作不可相加审计；有用回收、客户保留物与废物去向分开，不自动给替代抵扣。 每项适用性判断须留证。经证实不发生仅关闭所述范围和时段，缺记录仍未解决。发生的要求须将全部事件映射到具体row ID及相容原生数量，或精确映射至已覆盖行和供应方责任，并逐项说明排除理由。证据须覆盖身份、支持单位、计算、原始记录及全部去向；既有与新增分支对同一事件互斥覆盖，协议本身不作为交换。完成须无未分配事件、无重复覆盖、无相关数量或身份未决项。按有证据的实际分支采集原始字段。不适用的操作数须关联分支判定，适用但缺乏实测或依据的数量登记待决。 | 接收方验收的具体废物或实际混合收集物在实测状态下的原生数量 | 每次真实事件及每项有证据的未发生判断 | 完整声明队列及归属资产寿命关联事件 | 仅本过程真实责任场所及供应方 | 先对账原生事件总量，仅汇总身份、状态、单位、交接点及期间均相容的量。按相应计算规则逐行核算一次：只分配仍共享的负担，目标总量仅除以同口径的正合格产出；等效每参考流数值原值沿用，零产出期间不作除法并保留处置记录。 | 以接收记录核对产生、库存、场内处理和实测交付。混合物流量与组分测量分开；干湿基或质量体积换算须有相容组成或密度。接收转移和环境直排按不同交接点记录。 对上述具体身份及相容输入口径，仅在数量的归属和归一化状态与下式前提匹配时使用该规则：attributed_native_collected_cleaning_stream / N 保留原始凭据、实际采用的系数和结果单位。数值来源模式：calculated_value；适用范围：site_specific；归一化基准：每声明的参考流；基准类型：reference_flow；证据类型：calculated_from_collection；采集协议：cp_support；来源：unsd-cpc3-65114; fao-draft-animal-husbandry; ghg-product-2011。须有原始记录、精确原生支持及逐具体行核验；这些规则不提供缺失身份或数值。 完成判据：check_occurrence_completion。 |

### 计算规则

| rule_id | 适用于 | formula_or_rule | inputs | output | source_ids |
| --- | --- | --- | --- | --- | --- |
| normalize_drawn_freight | 除最终参考以外全部清单 | x_ref = sum(x_native_attributed) / N；N为同组实际合格完成牵引道路托运区段正数量。最终参考输出为1 Item(s)。 | x_native_attributed; N; cp_fulfilment; cp_human; cp_animal; cp_animal_life; cp_assets; cp_support | x_ref | ghg-product-2011; fao-draft-animal-husbandry |
| exclusive_stock_balance | 各真实饲料水货物和动物台账 | opening + receipts + inward_transfers = closing + useful_use_or_delivery + outward_transfers + measured_loss；去向互斥。内部回收保留期末或后续在真实使用外送端口只记一次，不另加回收项。动物出生死亡及拒食须有真实独立项与去向。 | 期初、接收、期末、使用、外送和损失的实际原生数量; cp_fulfilment; cp_animal | 按互斥口径编制的原生计量台账 | ghg-product-2011; fao-draft-animal-husbandry |
| animal_duty_attribution | 动物维持及生命周期 | 依据有据因果份额将真实事件原生数量分至役用及其他输出，各用户期间份额总和为一；优先细分直接观测工作增量，基线维持保留在相同全输出生命周期边界。不采用统一役畜日或饲料换算常数。 | 实际事件量; 因果份额; 全部产出; cp_animal; cp_animal_life | attributed animal-event quantity | ghg-product-2011; fao-draft-animal-husbandry |

### 数据质量要求

| requirement_id | 适用于 | Requirement | evidence |
| --- | --- | --- | --- |
| traceability | 全部节点 | 逐行保留原始签署记录、原生单位端口、分配、物种状态接收方、校准、期间场址及不确定性；真实数量身份未知仍为不完整。 | 原始运单及计量供应方登记 |
| animal_representativeness | animal_traction | 必须有真实物种日粮性别年龄健康体况地形休息及完整作业非作业期间，不将默认牛系数转给其他动物。 | 饲养动物组及方法来源证据 |
| no_fabricated_limits | 范围及人体扩展 | 不提供统一代谢饲料甲烷寿命载荷失败空返系数。采用真实采集或兼容已审来源证据；经验校验范围须有独立参考样本，不能用本批最大值验证自身。 | 完整性登记；独立来源 |

## 9. 验证规则

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| scope_reference | 全部节点 | 必须提供真实牵引道路车辆、人畜角色，以及实际货物数量、起讫距离地形时间和交付质量的验收托运记录。区分承运动物货物、役畜与客运。不能仅因活体货物就排除合格牵引车辆货运；须按实际功能设备解决65114与65118分类归属，避免重复输出。仅合格完成数N可作分母；货物功能不等价时等数量不可比。 | ghg-product-2011; ipcc-livestock-2006 |
| animal_balance | 全部节点 | 实际畜力分支须采集物种、动物组、体重体况、真实日粮干湿物质及拒食、饮水清洗水、全部作业非作业期间、输出和库存变化。不得按统一工作能量推定采食量。闭合碳氮及物料去向，采用物种特定实测或兼容有据的排放方法，并明确粪污处理储存沉积归属。未解释差额不能自动当作甲烷或一氧化二氮排放。 | ghg-product-2011; ipcc-livestock-2006 |
| coverage_life | 全部节点 | 核对全部场址用户期间和供应方生命周期范围、同组全用户正总使用量、真实共同分配闭合及一次归一化。汇总实际贡献场址归属分子和合格服务数，不使用无权重平均强度。人体扩展缺证不允许虚构代谢，动物维持缺证也不能当零。 | ghg-product-2011; ipcc-livestock-2006 |
| identity_projection | 全部节点 | 每项实施交换须有一个已核实具体UUID，并匹配原生属性单位状态端口和接收方。待核参考输出仅以数量属性支撑保持候选状态，不能从食品、车具制造或动物身份推导服务UUID。中英文表格流卡限定条件、公式常数、协议节点归属及投影规范规则须一致，并披露不完整检查。 | ghg-product-2011; ipcc-livestock-2006 |
| atomic_freight_fulfilment | freight_fulfilment | 拒绝将备选物料、独立供应资产服务、不同废物流、污染物种、碳源、相态、粒径或环境子介质合并成一个交换身份。本节点每项适用cp_expand_要求必须有发生或未发生记录及完整具体行清单，各行具有自身身份、端口、已核验UUID、原生属性单位、数量、原始记录、计算和唯一责任。供应方已含完整总成或真实收集混合物流仍按一个真实供应或收集身份，不虚构组分交换。不得将要求名称标识、NOx或VOC或PM总量、未明确的物理释放或异质清单绑定一个UUID。核对全部子行、原始事件、供应方已含单元及跨节点交接，不缺失当零、不重复计入。身份、适用性、数量或去向未知，均阻止完整前景包及最终TIDAS交换产出。PCR检查器不验证这些前景事实，须保留逐行证据供审查。 | ghg-product-2011 |
| atomic_human_traction | human_traction | 拒绝将备选物料、独立供应资产服务、不同废物流、污染物种、碳源、相态、粒径或环境子介质合并成一个交换身份。本节点每项适用cp_expand_要求必须有发生或未发生记录及完整具体行清单，各行具有自身身份、端口、已核验UUID、原生属性单位、数量、原始记录、计算和唯一责任。供应方已含完整总成或真实收集混合物流仍按一个真实供应或收集身份，不虚构组分交换。不得将要求名称标识、NOx或VOC或PM总量、未明确的物理释放或异质清单绑定一个UUID。核对全部子行、原始事件、供应方已含单元及跨节点交接，不缺失当零、不重复计入。身份、适用性、数量或去向未知，均阻止完整前景包及最终TIDAS交换产出。PCR检查器不验证这些前景事实，须保留逐行证据供审查。 | ghg-product-2011 |
| atomic_animal_traction | animal_traction | 拒绝将备选物料、独立供应资产服务、不同废物流、污染物种、碳源、相态、粒径或环境子介质合并成一个交换身份。本节点每项适用cp_expand_要求必须有发生或未发生记录及完整具体行清单，各行具有自身身份、端口、已核验UUID、原生属性单位、数量、原始记录、计算和唯一责任。供应方已含完整总成或真实收集混合物流仍按一个真实供应或收集身份，不虚构组分交换。不得将要求名称标识、NOx或VOC或PM总量、未明确的物理释放或异质清单绑定一个UUID。核对全部子行、原始事件、供应方已含单元及跨节点交接，不缺失当零、不重复计入。身份、适用性、数量或去向未知，均阻止完整前景包及最终TIDAS交换产出。PCR检查器不验证这些前景事实，须保留逐行证据供审查。 | ghg-product-2011 |
| atomic_support_lifecycle | support_lifecycle | 拒绝将备选物料、独立供应资产服务、不同废物流、污染物种、碳源、相态、粒径或环境子介质合并成一个交换身份。本节点每项适用cp_expand_要求必须有发生或未发生记录及完整具体行清单，各行具有自身身份、端口、已核验UUID、原生属性单位、数量、原始记录、计算和唯一责任。供应方已含完整总成或真实收集混合物流仍按一个真实供应或收集身份，不虚构组分交换。不得将要求名称标识、NOx或VOC或PM总量、未明确的物理释放或异质清单绑定一个UUID。核对全部子行、原始事件、供应方已含单元及跨节点交接，不缺失当零、不重复计入。身份、适用性、数量或去向未知，均阻止完整前景包及最终TIDAS交换产出。PCR检查器不验证这些前景事实，须保留逐行证据供审查。 | ghg-product-2011 |
| check_occurrence_completion | 全部实际清单行和身份识别协议 | 保留适用性证据，将每个实际事件对应到具体清单行或已核实的供应方覆盖范围。判定未发生须有证据，未知项保留待决。按同一身份、状态、单位、期间和交接点核对期初、接收、期末及互斥去向。耗材领用账区分未用退回、内部领拨和合格、失败及返工作业的实际耗用。托管账或物料平衡采用期初库存＋外部接收＋配对内部接收＝期末库存＋配对内部发出＋对外交付且获接收的数量＋未用外退＋外送的已用物资或回收物＋外送废物＋直接排放＋本边界内消耗或转化量。身份在边界内生成时，将有证据的生成量或出生数计入该身份账的来源并关联原事件。在上层守恒物料或元素平衡中抵消内部转化和移交。每个事件只记一次，留存回收物计入期末，移交与耗用分别登记。按相容口径执行专用托管、相态、转化或元素规则；已作为转化量计入的物料，其后续产物不得再计入同一去向合计。独立计量各项，对未解释的差额追查并保留待决。实物总量与负担分配分别核算。共享原始负担采用 Q_raw × s / R，其中 s 为有证据的目标驱动量除以同池同期间全部适用用户的正驱动量总和。已归属的目标总量采用 Q_target / R，已与同一参考流等效的单位结果 q_ref 原值沿用。供应方单位强度先乘以按其原生单位实测的需求量。仅在另一个仍有共享负担的独立阶段另作分配。R 为同一队列、交接点和参考单位下的正值合格产出量。保留失败与部分完成作业的负担，禁止以此放大 R；零产出时保留负担及有证据的结转或最终处置。自有资产采用同队列全用户寿命作业量，并排除初始部件重复计算。外购服务仅替代有记录的覆盖阶段。适用的身份、数量、支持单位、去向或分配分母仍未决时，最终数据集仍不完整。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | secondary_dataset; background_dataset |
| downstream_use | 真实兼容牵引车辆道路货运接入货物供应链LCA |
| allowed_use | 相同货物数量距离质量及真实人畜资产供应方边界 |
| excluded_use | 机动客运、单独归入65118的服务、无据等数量、缺失责任当零及未核实最终交换 |
| required_metadata | 全部参考限定条件；节点；真实原生记录；人体边界及动物生命周期；共同输出用户；分配；供应方来源 |
| required_quality_disclosure | 缺失身份数量、生物模式代表性、供应方生命周期范围、去向不确定性及跳过检查 |
| update_trigger | 物种角色货物路线质量作业饲养资产供应方改变或新增核实证据 |

## 11. 数据源

| source_id | type | reference | used_for |
| --- | --- | --- | --- |
| unsd-cpc3-65114 | official_guidance | UNSD CPC 3.0 65114; https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | 完整牵引车辆道路货运，不提供数值单位或动物系数 |
| ghg-product-2011 | standard | WRI/WBCSD Product Life Cycle Accounting and Reporting Standard (2011), chapters 6–10; https://ghgprotocol.org/sites/default/files/ghgp/standards/Product-Life-Cycle-Accounting-Reporting-Standard_041613.pdf | 边界数据分配原则；明确人体动物资产扩展为本PCR选择 |
| fao-draft-animal-husbandry | literature | Matthewman, Dijkman and Zerbini, The management and husbandry of male and female draught animals: research achievements and needs; FAO; https://www.fao.org/4/x5483b/x5483b0z.htm | 真实饲料水健康作业恢复圈舍及多输出问题，未将数值示例采用为默认 |
| ipcc-livestock-2006 | official_guidance | IPCC 2006 Guidelines, Vol.4, Ch.10 Emissions from Livestock and Manure Management; https://www.ipcc-nggip.iges.or.jp/public/2006gl/vol4.html | 区分牲畜粪污物种及氮化合物方法核算，须有真实兼容系数 |

