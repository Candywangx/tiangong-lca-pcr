---
pcr_id: pcr.distributive-trade-services-accommodation-food-and-beverage-serving-ser-18ff339a.freight-transport-services.other-coastal-and-transoceanic-water-transport-services-of-other-freight
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 其他沿海远洋货运委托服务

## 1. 范围与适用性

本专属PCR覆盖其他沿海远洋货运完整功能：代表邮政快递承运信件包裹；谷物面粉水泥砂煤等干散货；公海沿海拖曳顶推，包括石油钻井平台浮吊疏浚船浮标船体未完工船舶；及真实未另分类货运。参考为一项合格完成承运委托，其物理货物或拖顶任务端口路线数量配置及原始验收标准在运行前固定。必须分别按邮件干散货拖顶其他未另分类服务分层并保留功能指纹，一件包裹一批散货运输与平台拖运绝不假定等价。

排除独立分类冷藏船65211、散装液气货物65212、集装箱船联运集装箱65213功能，以及内河其他成品运输模式。按真实功能设备合同一次解决重叠，干散货船被拖驳船或邮件委托不自动等于集装箱服务。排除端到端综合邮政独立仓储纯设备出租原始货物被拖目标制造，以及独立疏浚钻井平台安装生产或定位功能。纳入真实运输负责准备装卸港口拖运协助接口及因果应急回收责任，不把商拖指南自身适用范围当通用CPC排除。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.distributive-trade-services-accommodation-food-and-beverage-serving-ser-18ff339a.freight-transport-services.other-coastal-and-transoceanic-water-transport-services-of-other-freight |
| classification_refs | CPC 3.0 65219; exact |
| covered_products | 完整邮政运营商邮件包裹干散货海上沿海拖顶全部列明目标及真实其他未另分类货运 |
| excluded_products | 65211/65212/65213独立功能、内河其他模式、综合邮政仓储纯出租、货物目标生产及独立工业作业 |
| representative_product | 合格完成沿海或远洋货运委托 |
| production_route | 真实有界海上货运或拖顶任务及完整应分配装卸支持生命周期 |
| market_state | 一个有据服务分层及功能指纹内按原始规定验收的承运委托 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| 什么（What） | 合格完成沿海或远洋货运委托 |
| 多少（How much） | 1项合格完成预定义承运委托；须真实货物量或拖顶目标配置路线距离时间及原始交接验收 |
| 质量（How well） | 声明邮件干散货拖顶未另分类分层及功能指纹，真实对象质量安保或拖况端口原始验收 |
| 时长或周期（How long or cycle） | 真实委托准备接收至验收交接期间，加因果空载等候失败返程港口责任及完整资产生命期 |
| reference_flow_link | qualified_freight_commission |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 合格完成沿海或远洋货运委托 |
| 参考流属性 | 物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` |
| 参考单位组 | 数量 `5beb6eed-33a9-47b8-9ede-1dfe8f679159` |
| 参考单位 | Item(s) |
| 必需限定信息 | service_stratum_mail_drybulk_towpush_othernec; predeclared_commission_task_and_functional_fingerprint; original_acceptance_criteria; actual_cargo_or_towtarget_identity; actual_mass_volume_moisture_or_tow_geometry_displacement_draft_windage; route_distance_time; origin_destination_custody_gates; all_vessels_tugs_towconfiguration; mail_operator_interfaces_and_receptacle_tare; drybulk_fates; tow_prep_connection_support_target_energy; loaded_empty_ballast_weather_failed_duties; native_provider_coverage; all_user_asset_life; period_N; uncertainty |

## 4. 计量与单位规则

| rule_id | 适用于 | required_property | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| completed_commission_count | reference product | 物品数量 | Item(s) | 一项为运行前规定的一个物理有界承运任务，按原始货物对象数量端口质量验收完成。不是发票航次邮件物件袋吨拖轮船舶目标制造单位或计划任务。必须按邮件干散货拖顶其他未另分类及更细功能指纹分层，不能因都计一项而混合比较异质任务。部分失败任务不作完成一项，除非运行前已定义独立有界验收任务；不得失败后改完成定义或拆计数稀释负荷。 |
| actual_task_quantities | 全部清单行 | 真实原生兼容属性 | 真实原生单位 | 交付货物质量体积及可选区段周转不同于委托计数。拖顶采真实目标身份几何排水量吃水受风面积拖队拖轮配置路线时间工况，不能给平台浮标船体虚构货物吨或以系柱拉力额定值代真实能源。区分可复用皮重货物内容真实服务资产。保留原生供应方单位及体积换算真实密度状态低位热值，核实kWh换算3.6 MJ/kWh。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 预声明真实任务分层货物被拖目标状态端口及负责船舶接口供应方状态 |
| starting_condition_role | 任务接收不消除负责准备燃料供应或既有服务资产生命 |
| product_classification_scope | 完整65219邮件干散货拖顶全部列明目标其他未另分类，区别其他专门分类功能 |
| recursive_input_rule | 精确原生供应方覆盖阶段仅一次替代匹配自营范围 |
| upstream_dataset_requirement | 真实原生功能属性单位端口分支技术期间地域生命范围 |
| disclosure | 原始完成分层完整船舶被拖目标支持责任货物目标保管全用户生命供应方真实去向及未知 |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| full_other_maritime_scope | 全部节点 | 覆盖官方全部分支：代表邮政快递信件包裹、谷物面粉水泥砂煤等完整干散货、公海沿海拖顶、拖运钻井平台浮吊疏浚船浮标船体未完工船及真实其他未另分类货物。父活动为海运承运委托。分支输出端口投入数量数据质量有实质差异，先明确真实分支设备功能再纳入，不限干散货或拖轮。余项未另分类须正面真实分类证据并排除专门分类功能，不能当未知货物归集类别。 | unsd-cpc3-65219 |
| predeclared_task_acceptance | maritime_operation; cargo_tow_interfaces | 运行前记录原始有界任务验收：真实货物量状态目的地或完整拖顶目标配置目的地安全约定交接，保管质量安保时间接收证据。仅按原始规定计完成，保留变更失败部分拒收救援返程谱系，不追溯重设目标。纯账单通知提货单不假定物理保管验收，剩余责任按真实合同。 | ghg-product-2011 |
| postal_operator_branch | cargo_tow_interfaces; maritime_operation | 邮件明确真实邮政快递运营商至承运接收及承运至运营商下家交接、物件容器封发托运层级签署验收状态时间安保。承运海运任务不是收寄至最终收件人综合服务，也不是一件邮件或袋。可复用邮袋托盘笼车集装箱皮重供应返还修理清洗退役全用户周期不同于被运物件自身包装。真实分拣扫描封识转移港口交接按真实承运责任，UPU国际示例不强加私人国内统一合同或经济边界。 | upu-postal-2024 |
| drybulk_branch | cargo_tow_interfaces; maritime_operation | 干散货明确真实物料等级固态及每次观测含水、验收数量质量货舱配载平舱通风及真实输送抓斗气力装卸清洗接口。谷物其他散货采用真实适用装卸证据，不用统一IMSBC谷物条件。追踪真实粉尘组成粒径介质、泄散清洗水收集残留污染及确有责任真实熏蒸处理；货物制造不作运输投入，不假定全是煤或全部尘进空气。 | imo-bulk; imo-grain; ghg-product-2011 |
| whole_tow_push_branch | maritime_operation; cargo_tow_interfaces | 拖顶定义真实全体拖轮被拖目标配置、目标几何排水量吃水受风面积拖况、连解验收端口天气路线避风时间及各责任方。纳真实准备检验绑扎拖顶协助推进、目标运输负责辅助动力泵压载照明随拖船员支持及真实目标推进协助，不只领拖燃油。目标工业钻井疏浚生产独立。客户平台浮吊浮标船体为保管移动目标，其原始制造不属运输；真实提供作可复用承运设备的驳船平台拖具为服务资产具完整全用户生命。同一船体一角色事件不能既作目标制造投入又重复运输资产。 | imo-towing-884; boskalis-ocean-tugs; ghg-product-2011 |
| full_vessel_energy_duties | maritime_operation; support_lifecycle | 保留全部归属主辅机锅炉发电机岸电电池及真实其他燃料推进路径，各船拖轮目标负责运行及船内转换仅一次。纳载货拖顶操纵港口锚泊等候压载空船调位连解天气避风改道待机救援失败重交设备返还。岸电纳真实上游接入转换及仍用锅炉其他来源，不假定零生命负荷。燃料库存储备不全部消耗。客户所有或期初持有的货物目标船舶燃料储能真实提取消耗用于本运输时，无论购买人产权内部价格，须一次承担兼容原生上游供应负荷。追踪真实提取至消耗来源及上游供应充电出处，不重复计购买与库存提取，不追加全部货物目标制造。真实替代燃料引燃逸出物种独立。 | epa-shore-power; ghg-product-2011 |
| full_service_life_provider | support_lifecycle | PCR生命周期选择纳真实承运船拖轮服务驳船、推进装卸绞车拖缆拖索护舷邮件容器、港口泊位岸电维修资产制造施工安装改装投产维护修理坞修更新更换退役。完整总成与初始内含部件互斥，制造不等于完整使用生命。真实原生租船港口货运拖顶支持供应方仅一次替代精确覆盖投入排放生命范围，保留未含阶段。客户货物被拖目标生产保持外部，真实运输准备物料服务及目标运输能源除外。 | ghg-product-2011 |
| actual_exchange_and_fates | 全部节点 | 逐真实尚未表示能源物料可复用拖具资产供应方废物直接物质须扩为一个真实节点方向类型具体row_id原生身份属性单位状态端口数量来源同节点协议接收介质不确定性。燃料碳源燃烧发动机逸出货尘海上泄漏压载冷却热污水舱底洗涤防污磨耗及真实辅助制冷剂均为条件真实来源，不假定默认系数。真实化合物粒径相态空气水土子介质区别总NOx/SOx/CO2当量收集废物回收可用库存，缺证为不完整非零。 | ghg-product-2011 |

## 6. 过程清单结构

每张清单流卡仅代表一个可独立识别的产品、物料配方、废物流、物质或供应服务，具有兼容的端口、属性和单位。完整供应总成或实际收集的混合物流可有一个身份，其已含组分不得另列重复交换。第8节cp_expand_协议是必须落实的身份识别要求，不得当作选定流或交换数量。逐项记录真实适用性，以独立行标识列出全部具体交换；完整保留适用范围，未发生须有证据。尚未展开或未知的要求属于不完整，不得当作零。改为采集协议不等于解决缺失身份，也不免除生命周期、分配、计量或边界义务。

### 过程图

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| maritime_operation | 真实海运货物或拖顶委托及船舶责任 | required | 真实所选邮件干散货拖顶其他未另分类分支 | foreground | qualified_freight_commission |
| cargo_tow_interfaces | 货物邮件装卸或拖顶准备交接 | required | 真实分支特定保管准备接口责任 | foreground | qualified_freight_commission |
| support_lifecycle | 船舶拖具港口及完整支持生命周期 | required | 真实应分配资产物料供应方 | foreground | qualified_freight_commission |

全部节点关联其必需分层指纹内唯一最终完成委托。多拖轮被拖目标组合为一个声明任务，不按每拖轮目标新增最终输出；货物容器被拖目标保管转移不产生制造或额外承运产品。

### 过程：真实海运货物或拖顶委托及船舶责任 (`maritime_operation`)

#### 输入

##### 产品流

###### 柴油 (`actual_diesel_supply`)

条件真实配方仅兼容无供应方通用柴油，不自动等于船用轻重柴油残余生物燃料。纳全部真实负责船拖轮目标运输能源互斥库存，不假定储备消耗。客户所有期初库存柴油真实提取用于此时，无论产权购买人，保留兼容原生上游供应负荷一次，追踪供应使用，不给期初燃料免费或重复购买提取投入。

- 选定流：柴油 `9d258d75-6792-4f1c-9856-81602ed8f816`
- 流属性/单位：质量 / kg
- 数量规则：真实兼容柴油供应 / N
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每声明的参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_energy`
- 来源：`unsd-cpc3-65219`; `ghg-product-2011`

###### 交流电 (`vessel_shore_ac`)

真实兼容外部岸供外购交流电及覆盖责任，不是内部发电轴带或已知独立直流。保留船上剩余来源真实上游接入损失，不重复独立装卸计量范围。

- 选定流：交流电 `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- 流属性/单位：低位热值 / MJ
- 数量规则：真实外部船舶目标运输交流电供应 / N
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每声明的参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_energy`
- 来源：`unsd-cpc3-65219`; `ghg-product-2011`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 合格完成沿海或远洋货运委托 (`qualified_freight_commission`)

必需服务分层指纹内一个按原始规定合格完成承运任务，完整精确原生服务UUID未解决，不用货物目标制造通用海运吨公里发票拖轮计数代理。

- 选定流：合格完成沿海或远洋货运委托
- 流属性/单位：物品数量 / Item(s)
- 数量规则：1 Item(s)
- 数值来源模式：`fixed_value`
- 适用范围：`site_specific`
- 归一化基准：每声明的参考流
- 基准类型：`reference_flow`
- 证据类型：`method_formula`
- 采集协议：`cp_task`
- 来源：`unsd-cpc3-65219`; `ghg-product-2011`

##### 废物流

##### 基本流

###### 二氧化碳（化石源） (`fossil_co2_air`)

负责来源真实氧化化石碳，不是全部燃料碳或生物排放。已核实身份为空气未指明子介质，仅真实匹配时绑定，已知不同空气子介质须另核实身份，不强改介质。

- 选定流：二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 流属性/单位：质量 / kg
- 数量规则：真实化石CO2向空气排放 / N
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每声明的参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_energy`
- 来源：`unsd-cpc3-65219`; `ghg-product-2011`

###### 甲烷 (化石源) (`fossil_methane_air`)

条件真实燃料放散泄漏发动机逸出等化石甲烷，具来源测量，不是全部燃气供应或默认逸出。仅真实匹配用已核实空气未指明，已知不同子介质须另核实身份。

- 选定流：甲烷 (化石源) `08a91e70-3ddc-11dd-9610-0050c2490048`
- 流属性/单位：质量 / kg
- 数量规则：真实化石CH4向空气排放 / N
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每声明的参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_energy`
- 来源：`unsd-cpc3-65219`; `ghg-product-2011`

### 过程：货物邮件装卸或拖顶准备交接 (`cargo_tow_interfaces`)

#### 输入

##### 产品流

###### 交流电 (`handling_ac`)

真实负责货物邮件拖前准备装卸独立外部交流电，不是已含船舶供应或综合供应方；不同计量供应端口保留自身来源。

- 选定流：交流电 `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- 流属性/单位：低位热值 / MJ
- 数量规则：真实独立外部装卸接口交流电 / N
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每声明的参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_interfaces`
- 来源：`unsd-cpc3-65219`; `ghg-product-2011`

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

##### 基本流

### 过程：船舶拖具港口及完整支持生命周期 (`support_lifecycle`)

#### 输入

##### 产品流

###### 自来水 (`tap_water`)

仅真实兼容供应自来水端口，海水压载原水工艺水须自身真实身份，不混产品资源；相关时补未含配送。

- 选定流：自来水 `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- 流属性/单位：质量 / kg
- 数量规则：真实自来水供应 / N
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每声明的参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_support`
- 来源：`unsd-cpc3-65219`; `ghg-product-2011`

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

###### 废润滑油 (`used_lubricating_oil`)

真实产生端口废润滑油，接收处理独立除非已含，不是全部燃油污泥舱底泄货或目标内容。

- 选定流：废润滑油 `55d93375-7f04-4166-b2a2-88ce929051a5`
- 流属性/单位：质量 / kg
- 数量规则：真实废润滑油产生 / N
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每声明的参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_support`
- 来源：`unsd-cpc3-65219`; `ghg-product-2011`

##### 基本流

## 7. 分配与共产品处理

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| mandatory_strata_no_equivalence | 全部节点 | 分别发布真实邮件干散货拖顶其他未另分类分层画像分母，再按功能指纹细分：同任务对象数量范围质量路线端口距离时间拖队工况责任技术等实质因素。不得跨层或异质委托按计数平均等价。优先直接计量细分，共享船拖轮装卸港口资产负荷按全部真实用户有据质量空间阻力热时间容量能源运行因果，不自动按任务等分。经济替代须无物理关系并有敏感性，同事件份额合一。 | ghg-product-2011 |
| failed_task_attribution | 全部节点 | 兼容分层指纹内先保留全部因果准备空船压载天气等候失败部分拒收救援返工返程设备返还负荷，再仅按正原始合格完成委托数N归一化一次。原任务验收失败时不得改目的地对象或计中间拖移制造完成项，真实独立预设成功任务仅追踪一次。N=0无有限强度，失败期间记录保留作因果分配而非消失。 | ghg-product-2011 |
| all_user_life_period_site | 全部节点 | 逐真实资产生命事件以同组归属使用量 / 有据正全用户总使用量分配原生数量，再在兼容任务层按N归一化。保留制造安装改装投产维护坞修更换退役、全部用户跨期库存事件，不设统一船拖缆邮袋寿命或漏既有租赁生命。兼容航次场址按归属原生数量和 / 兼容N和聚合，不对异分母强度简单平均或异质任务归并。 | ghg-product-2011 |
| native_provider_recovery | 全部节点 | 保留各真实原生供应方功能属性单位端口覆盖，货吨公里拖轮小时船公里纯租船完整委托不互换。用有据真实活动衔接供应量，不强制一个供应单位等于最终委托；仅一次替代精确自营范围并保留缺口。内部转移回收循环非额外外部供出，仅真实对外有用物料热电服务共输出须接收方细分有据分配，不自动给回收循环信用。 | ghg-product-2011 |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_task | maritime_operation | 原始任务必需分层合格完成 | 真实一手计量运单供应方记录 | 运行前任务ID分层指纹、货物量状态邮件运营商或拖顶目标配置、起讫端口、原始质量时间验收、真实路线距离时间、全部船拖轮目标责任、完成失败部分变更接收谱系兼容N | 原始任务规定关联签署真实验收保管物理活动，分必需分支更细兼容任务指纹，不追溯重设任务增计数 按参考计量口径汇总唯一且已验收的合格产出作为分母，单列不合格事件及其资源责任。参考量保持规定值，仅归属的清单总量除以正分母。 | 计数Item(s)；真实货物质量体积或目标参数；路线距离时间 | 逐事件及期间闭合 | 真实委托报告期间及关联完整生命阶段 | 真实船舶拖轮被拖目标港口锚地维修场供应方 | 每声明的参考流 | 签署记录；校准；原生来源；因果分配；不确定性保存各实测操作数的来源及原生口径，注明实际采用的换算或归属依据，以及所供结果是否已按该参考流计量。 |
| cp_energy | maritime_operation | 全部负责船拖轮目标运输能源直接物质 | 真实一手计量运单供应方记录 | 逐船拖轮目标角色主辅锅炉轴带电池岸供、燃料配方状态供应期初期末燃烧放散泄漏逸出、真实客户所有期初燃料储能提取购买人产权及关联消耗的兼容上游供应充电出处、真实模式责任小时计量、路线天气等候空载协助、密度组成碳硫低位热值、直接物种相态粒径介质覆盖供应方 | 逐真实能路库存责任方一次闭合，不只领拖或目标工业作业；来源特定实测有据排放具不确定性碳去向闭合，客户所有期初燃料储能真实消耗的供应充电负荷无论产权购买人仅一次，不重复购买提取；不设统一燃料逸出系数 原始观测和对账总量保留其记录口径。负担行只分配仍共享的总量，已归属总量仅除以同队列、同交接点的正合格产出；已与该参考流等效的结果原值沿用。零产出时保留负担并记录去向。各项独立实测交付、排放及移交按各自交接点记录，负担按其适用规则分配。 | 真实原生燃料能源物种单位兼容状态换算；关联清单行的报告单位：kg (actual_diesel_supply, fossil_co2_air, fossil_methane_air)；MJ (vessel_shore_ac) | 逐事件及期间闭合 | 真实委托报告期间及关联完整生命阶段 | 真实船舶拖轮被拖目标港口锚地维修场供应方 | 每声明的参考流 | 签署记录；校准；原生来源；因果分配；不确定性保存各实测操作数的来源及原生口径，注明实际采用的换算或归属依据，以及所供结果是否已按该参考流计量。 |
| cp_interfaces | cargo_tow_interfaces | 真实邮件干散货拖前准备物料装卸去向 | 真实一手计量运单供应方记录 | 真实分支端口、邮件物件容器封发托运安保交接、散货逐湿质量含水物料等级粒径配载尘、拖物配置准备连解拖具目标责任、独立装卸能源、真实供应复用库存接收废物环境供应方范围 | 采真实接口日志校准质量状态，分保管对象可复用资产新增供应；分别闭合干固体关联水：对每次实测湿基含水分数w，M_dry = M_wet*(1-w)；其他真实报告含水基准须有据兼容换算，不能把未明基准含水默认当湿基；真实环境废物回收去向互斥 原始观测和对账总量保留其记录口径。负担行只分配仍共享的总量，已归属总量仅除以同队列、同交接点的正合格产出；已与该参考流等效的结果原值沿用。零产出时保留负担并记录去向。各项独立实测交付、排放及移交按各自交接点记录，负担按其适用规则分配。 | 逐真实原生货物物料能源废物物种数量及含水状态；关联清单行的报告单位：MJ (handling_ac) | 逐事件及期间闭合 | 真实委托报告期间及关联完整生命阶段 | 真实船舶拖轮被拖目标港口锚地维修场供应方 | 每声明的参考流 | 签署记录；校准；原生来源；因果分配；不确定性保存各实测操作数的来源及原生口径，注明实际采用的换算或归属依据，以及所供结果是否已按该参考流计量。 |
| cp_support | support_lifecycle | 真实供应水资源支持废物释放 | 真实一手计量运单供应方记录 | 真实物料配方端口供应期初期末使用、水源取用循环流出状态、船员酒店维护压载清洗及真实目标支持责任、物种相态原生数量回收废物环境接收处理范围 | 用真实记录互斥边界去向，水产品直接资源循环独立，收集废物区别直接环境，声明人支持边界不作代谢默认饮食估计 原始观测和对账总量保留其记录口径。负担行只分配仍共享的总量，已归属总量仅除以同队列、同交接点的正合格产出；已与该参考流等效的结果原值沿用。零产出时保留负担并记录去向。各项独立实测交付、排放及移交按各自交接点记录，负担按其适用规则分配。 | 逐真实原生物料资源废物物种热单位；关联清单行的报告单位：kg (tap_water, used_lubricating_oil) | 逐事件及期间闭合 | 真实委托报告期间及关联完整生命阶段 | 真实船舶拖轮被拖目标港口锚地维修场供应方 | 每声明的参考流 | 签署记录；校准；原生来源；因果分配；不确定性保存各实测操作数的来源及原生口径，注明实际采用的换算或归属依据，以及所供结果是否已按该参考流计量。 |
| cp_assets | support_lifecycle | 真实全用户船拖具容器港口生命原生服务供应方 | 真实一手计量运单供应方记录 | 真实资产客户目标服务资产角色组次原生数量、制造安装改装投产维护坞修更换退役事件、全用户使用量份额、内含部件初始范围、逐真实原生租船货运拖顶港口服务功能单位端口覆盖范围 | 核实真实角色及全部用户期间同组完整生命分母，精确供应方已含投入排放生命仅替代一次，不计客户目标制造或费用计数原生功能强换 原始观测和对账总量保留其记录口径。负担行只分配仍共享的总量，已归属总量仅除以同队列、同交接点的正合格产出；已与该参考流等效的结果原值沿用。零产出时保留负担并记录去向。 | 逐真实原生资产事件供应方单位兼容使用量 | 逐事件及期间闭合 | 真实委托报告期间及关联完整生命阶段 | 真实船舶拖轮被拖目标港口锚地维修场供应方 | 每声明的参考流 | 签署记录；校准；原生来源；因果分配；不确定性保存各实测操作数的来源及原生口径，注明实际采用的换算或归属依据，以及所供结果是否已按该参考流计量。 |
| cp_expand_other_marine_energy | maritime_operation | 必须展开身份 other_marine_energy (inputs/product)：真实其他船燃外购直流热其他能源 | collected_record | requirement_id=other_marine_energy; process_id=maritime_operation; required_direction=inputs; required_flow_type=product; original_collection_protocol=cp_energy; applicability_evidence; occurrence_event_id; concrete_row_id; physical_identity; formulation_or_species; phase; carbon_origin; particle_fraction; source_compartment; receiving_compartment; supply_or_handover_gate; provider_covered_cells; asset_component_event_and_lifecycle_phase; native_property; native_unit; measured_native_quantity; source_record_id; allocation_all_users; normalization_denominator; per_identity_amount_calculation; verification_evidence; unresolved_reason; occurrence_to_row_reconciliation; carrier_and_supply_state; meter_id; integrated_energy_or_power_time; fuel_as_received_quantity; heating_value_basis; supply_return_state; responsible_failure_and_readiness; complete_provider_exclusion; applicability_decision_record; covered_concrete_rows; excluded_occurrence_reason; completion_evidence; observed_quantity_state; conversion_or_allocation_evidence | 条件逐真实馏分残余混合液化天然气其他燃料引燃外购能源，具配方状态端口原生数量；内部发电及目标工业生产独立，不用统一逸出船燃系数或同时替代项。客户所有期初燃料储能真实消耗按实测提取及兼容原生上游供应充电负荷一次计，无论购买人产权，不把全部库存当使用或重复外购同能源。 本范围是必须落实的身份识别要求，不是交换流。使用原节点采集协议及其记录，先按真实身份、端口及独立功能拆分，再将保留的数量、基准及证据规则分别用于各兼容具体行。不得将异质身份合并数量或从总括名称推断原生属性单位。未发生须有证据，适用性或身份未知则阻止完成。 以下采集条件仅限本项 inputs/product 的身份与交接点（真实其他船燃外购直流热其他能源）。存在未被完整供应方覆盖的实际计量电力、购入热冷或消耗燃料时启用。区分载能体、供应状态和独立仪表，燃料组成及收到基数量与有用热分别识别；积分能量不再乘时长，功率须有时间积分证据；燃料换能量须匹配实际热值基准，供热须有供回状态。纳入应分摊待机、空载、失败和返工职责；总表仅协调分项，不再次相加。 每项适用性判断须留证。经证实不发生仅关闭所述范围和时段，缺记录仍未解决。发生的要求须将全部事件映射到具体row ID及相容原生数量，或精确映射至已覆盖行和供应方责任，并逐项说明排除理由。证据须覆盖身份、支持单位、计算、原始记录及全部去向；既有与新增分支对同一事件互斥覆盖，协议本身不作为交换。完成须无未分配事件、无重复覆盖、无相关数量或身份未决项。按有证据的实际分支采集原始字段。不适用的操作数须关联分支判定，适用但缺乏实测或依据的数量登记待决。 | 实测交付状态下的载能体量；能量采用有记录的仪表或热值口径 | 每次真实事件及每项有证据的未发生判断 | 完整声明队列及归属资产寿命关联事件 | 仅本过程真实责任场所及供应方 | 先对账原生事件总量，仅汇总身份、状态、单位、交接点及期间均相容的量。按相应计算规则逐行核算一次：只分配仍共享的负担，目标总量仅除以同口径的正合格产出；等效每参考流数值原值沿用，零产出期间不作除法并保留处置记录。 | 保留仪表期间、供应状态及交接点。积分能量已含时长；仅在对应路线由功率和实测时长，或相容燃料量与有据热值计算能量。区分燃料提取、有用热冷交付及已覆盖的上游阶段。 对上述具体身份及相容输入口径，仅在数量的归属和归一化状态与下式前提匹配时使用该规则：逐真实外部供应 / N 保留原始凭据、实际采用的系数和结果单位。数值来源模式：calculated_value；适用范围：site_specific；归一化基准：每声明的参考流；基准类型：reference_flow；证据类型：calculated_from_collection；采集协议：cp_energy；来源：unsd-cpc3-65219; ghg-product-2011。须有原始记录、精确原生支持及逐具体行核验；这些规则不提供缺失身份或数值。 完成判据：check_occurrence_completion。 |
| cp_expand_other_vessel_species | maritime_operation | 必须展开身份 other_vessel_species (outputs/elementary)：真实其他船舶拖顶物质向声明介质释放 | collected_record | requirement_id=other_vessel_species; process_id=maritime_operation; required_direction=outputs; required_flow_type=elementary; original_collection_protocol=cp_energy; applicability_evidence; occurrence_event_id; concrete_row_id; physical_identity; formulation_or_species; phase; carbon_origin; particle_fraction; source_compartment; receiving_compartment; supply_or_handover_gate; provider_covered_cells; asset_component_event_and_lifecycle_phase; native_property; native_unit; measured_native_quantity; source_record_id; allocation_all_users; normalization_denominator; per_identity_amount_calculation; verification_evidence; unresolved_reason; occurrence_to_row_reconciliation; substance_identity; chemical_form; environmental_compartment; carbon_origin; particle_fraction_or_count_basis; measured_or_calculated_release; species_conversion_evidence; applicability_decision_record; covered_concrete_rows; excluded_occurrence_reason; completion_evidence; observed_quantity_state; conversion_or_allocation_evidence | 真实主辅锅炉燃料目标运输来源真实化合物粒径相态来源介质，总NOx/SOx/CO2当量不是已知化合物。真实油环境释放区别留存燃料库存废物回收。 本范围是必须落实的身份识别要求，不是交换流。使用原节点采集协议及其记录，先按真实身份、端口及独立功能拆分，再将保留的数量、基准及证据规则分别用于各兼容具体行。不得将异质身份合并数量或从总括名称推断原生属性单位。未发生须有证据，适用性或身份未知则阻止完成。 以下采集条件仅限本项 outputs/elementary 的身份与交接点（真实其他船舶拖顶物质向声明介质释放）。仅对进入已记录接收介质且有观测或适用计算依据的实际释放启用。记录具体物质及形态、来源或接收介质、适用的化石或生物碳来源、适用的粒径组分或粒子数粒径基础及采样期；保留元素与分子口径，换算须有化学计量和相容物种证据。收集物流中的污染物在实际环境排放边界前归接收物流，不用CO2、NOx、VOC、COD或泛颗粒物流代替缺失物种。 每项适用性判断须留证。经证实不发生仅关闭所述范围和时段，缺记录仍未解决。发生的要求须将全部事件映射到具体row ID及相容原生数量，或精确映射至已覆盖行和供应方责任，并逐项说明排除理由。证据须覆盖身份、支持单位、计算、原始记录及全部去向；既有与新增分支对同一事件互斥覆盖，协议本身不作为交换。完成须无未分配事件、无重复覆盖、无相关数量或身份未决项。按有证据的实际分支采集原始字段。不适用的操作数须关联分支判定，适用但缺乏实测或依据的数量登记待决。 | 本物质、资源或物理排放在实际环境介质的已核实原生属性与单位 | 每次真实事件及每项有证据的未发生判断 | 完整声明队列及归属资产寿命关联事件 | 仅本过程真实责任场所及供应方 | 先对账原生事件总量，仅汇总身份、状态、单位、交接点及期间均相容的量。按相应计算规则逐行核算一次：只分配仍共享的负担，目标总量仅除以同口径的正合格产出；等效每参考流数值原值沿用，零产出期间不作除法并保留处置记录。 | 采样或活动量及适用因子须对应物种、相态、来源和环境介质。按实际对象区分质量、粒子数、热量及元素当量；换算须有依据，重叠总量不可相加。 对上述具体身份及相容输入口径，仅在数量的归属和归一化状态与下式前提匹配时使用该规则：逐真实互斥直接释放 / N 保留原始凭据、实际采用的系数和结果单位。数值来源模式：calculated_value；适用范围：site_specific；归一化基准：每声明的参考流；基准类型：reference_flow；证据类型：calculated_from_collection；采集协议：cp_energy；来源：unsd-cpc3-65219; ghg-product-2011。须有原始记录、精确原生支持及逐具体行核验；这些规则不提供缺失身份或数值。 完成判据：check_occurrence_completion。 |
| cp_expand_actual_interface_material | cargo_tow_interfaces | 必须展开身份 actual_interface_material (inputs/product)：真实货物邮件拖前准备系固物料 | collected_record | requirement_id=actual_interface_material; process_id=cargo_tow_interfaces; required_direction=inputs; required_flow_type=product; original_collection_protocol=cp_interfaces; applicability_evidence; occurrence_event_id; concrete_row_id; physical_identity; formulation_or_species; phase; carbon_origin; particle_fraction; source_compartment; receiving_compartment; supply_or_handover_gate; provider_covered_cells; asset_component_event_and_lifecycle_phase; native_property; native_unit; measured_native_quantity; source_record_id; allocation_all_users; normalization_denominator; per_identity_amount_calculation; verification_evidence; unresolved_reason; occurrence_to_row_reconciliation; operation_record; material_sku; formulation_grade_state; independent_function; supplier; package_tare; opening_stock; net_receipts; unused_returns; closing_stock; failed_use; destination; applicability_decision_record; covered_concrete_rows; excluded_occurrence_reason; completion_evidence; observed_quantity_state; conversion_or_allocation_evidence | 条件真实包装封识垫材清洗熏蒸拖接修理物料，具真实身份状态端口。可复用拖缆拖索容器按服务生命分配，不假定逐任务消耗，总成内含初始部件不重复。 本范围是必须落实的身份识别要求，不是交换流。使用原节点采集协议及其记录，先按真实身份、端口及独立功能拆分，再将保留的数量、基准及证据规则分别用于各兼容具体行。不得将异质身份合并数量或从总括名称推断原生属性单位。未发生须有证据，适用性或身份未知则阻止完成。 以下采集条件仅限本项 inputs/product 的身份与交接点（真实货物邮件拖前准备系固物料）。仅对实际发生的所述作业及独立消耗SKU或实物启用。记录材料或配方、等级状态、功能、供应方、扣包装皮重后的净量、库存变动、未用退回和去向。独立供应的包装衬材按材料及一次性或复用状态区分；完整配方或物理总成保留一个身份，组成信息不相加，不同外购品不得共用汇总数量。纳入失败使用、维护及返工，记录真实消耗而非仅采购量。 每项适用性判断须留证。经证实不发生仅关闭所述范围和时段，缺记录仍未解决。发生的要求须将全部事件映射到具体row ID及相容原生数量，或精确映射至已覆盖行和供应方责任，并逐项说明排除理由。证据须覆盖身份、支持单位、计算、原始记录及全部去向；既有与新增分支对同一事件互斥覆盖，协议本身不作为交换。完成须无未分配事件、无重复覆盖、无相关数量或身份未决项。按有证据的实际分支采集原始字段。不适用的操作数须关联分支判定，适用但缺乏实测或依据的数量登记待决。 | 实际品项、配方或物件在规定交接点及状态下的原生数量 | 每次真实事件及每项有证据的未发生判断 | 完整声明队列及归属资产寿命关联事件 | 仅本过程真实责任场所及供应方 | 先对账原生事件总量，仅汇总身份、状态、单位、交接点及期间均相容的量。按相应计算规则逐行核算一次：只分配仍共享的负担，目标总量仅除以同口径的正合格产出；等效每参考流数值原值沿用，零产出期间不作除法并保留处置记录。 | 逐批核对收货、期初期末、退回、耗用及互斥去向。件数或体积折质量须有单件质量或相容状态密度依据；产品身份以外的包装和衬材独立登记。 对上述具体身份及相容输入口径，仅在数量的归属和归一化状态与下式前提匹配时使用该规则：真实归属供应物料 / N 保留原始凭据、实际采用的系数和结果单位。数值来源模式：calculated_value；适用范围：site_specific；归一化基准：每声明的参考流；基准类型：reference_flow；证据类型：calculated_from_collection；采集协议：cp_interfaces；来源：unsd-cpc3-65219; ghg-product-2011。须有原始记录、精确原生支持及逐具体行核验；这些规则不提供缺失身份或数值。 完成判据：check_occurrence_completion。 |
| cp_expand_mail_receptacle_supply | cargo_tow_interfaces | 必须展开身份 mail_receptacle_supply (inputs/product)：真实可复用邮件容器供应修理事件 | collected_record | requirement_id=mail_receptacle_supply; process_id=cargo_tow_interfaces; required_direction=inputs; required_flow_type=product; original_collection_protocol=cp_interfaces; applicability_evidence; occurrence_event_id; concrete_row_id; physical_identity; formulation_or_species; phase; carbon_origin; particle_fraction; source_compartment; receiving_compartment; supply_or_handover_gate; provider_covered_cells; asset_component_event_and_lifecycle_phase; native_property; native_unit; measured_native_quantity; source_record_id; allocation_all_users; normalization_denominator; per_identity_amount_calculation; verification_evidence; unresolved_reason; occurrence_to_row_reconciliation; asset_or_reusable_id; model_configuration; included_initial_components; lifecycle_phase; manufacture_native_quantity; target_duty; all_user_same_cohort_lifetime_duty; replacement_event; provider_coverage_cells; applicability_decision_record; covered_concrete_rows; excluded_occurrence_reason; completion_evidence; observed_quantity_state; conversion_or_allocation_evidence; supply_or_service_gate; accepted_service_demand; provider_functional_unit; provider_intensity_basis; covered_lifecycle_stages | 条件逐真实邮袋托盘笼车托板集装箱身份材质状态原生端口，具返还清洗损失退役全用户周期。不是邮件内容或统一一次用袋，综合供应方精确范围替代。 本范围是必须落实的身份识别要求，不是交换流。使用原节点采集协议及其记录，先按真实身份、端口及独立功能拆分，再将保留的数量、基准及证据规则分别用于各兼容具体行。不得将异质身份合并数量或从总括名称推断原生属性单位。未发生须有证据，适用性或身份未知则阻止完成。 对本项规定的实体资产或周转品，核实供应交接点、初始部件以及实际替换、维护、清洗、失败和退役记录。租赁或综合供应合同须核实覆盖范围；本项包含已交付服务时按实际验收的原生需求计量，仅另行追溯未覆盖的资产阶段。直接建模资产按同队列目标作业量与全用户有据正寿命作业量之比分配，禁止将整个设施归给一个服务。 每项适用性判断须留证。经证实不发生仅关闭所述范围和时段，缺记录仍未解决。发生的要求须将全部事件映射到具体row ID及相容原生数量，或精确映射至已覆盖行和供应方责任，并逐项说明排除理由。证据须覆盖身份、支持单位、计算、原始记录及全部去向；既有与新增分支对同一事件互斥覆盖，协议本身不作为交换。完成须无未分配事件、无重复覆盖、无相关数量或身份未决项。按有证据的实际分支采集原始字段。不适用的操作数须关联分支判定，适用但缺乏实测或依据的数量登记待决。 | 实体资产或周转品按已核实的制造或供应单位；同一队列的相容作业量；范围内的交付服务用其原生功能单位 | 每次真实事件及每项有证据的未发生判断 | 完整声明队列及归属资产寿命关联事件 | 仅本过程真实责任场所及供应方 | 先对账原生事件总量，仅汇总身份、状态、单位、交接点及期间均相容的量。按相应计算规则逐行核算一次：只分配仍共享的负担，目标总量仅除以同口径的正合格产出；等效每参考流数值原值沿用，零产出期间不作除法并保留处置记录。 | 实体资产按有记录的供应交接量乘目标作业量与同队列全用户正寿命作业量之比，保留配置、投运、更换及退役或剩余寿命记录。范围内如有已交付服务，按已核实原生强度乘相容交付需求，留存覆盖凭据，未覆盖阶段单列。 对该交接点相容的资产量或已独立核实的服务结果，仅在数量的归属和归一化状态与下式前提匹配时使用该规则：真实全用户归属容器事件数量 / N 保留原始凭据、实际采用的系数和结果单位。数值来源模式：calculated_value；适用范围：site_specific；归一化基准：每声明的参考流；基准类型：reference_flow；证据类型：calculated_from_collection；采集协议：cp_interfaces；来源：unsd-cpc3-65219; ghg-product-2011。须有原始记录、精确原生支持及逐具体行核验；这些规则不提供缺失身份或数值。 完成判据：check_occurrence_completion。 |
| cp_expand_interface_waste | cargo_tow_interfaces | 必须展开身份 interface_waste (outputs/waste)：真实货物邮件拖顶接口产生废物 | collected_record | requirement_id=interface_waste; process_id=cargo_tow_interfaces; required_direction=outputs; required_flow_type=waste; original_collection_protocol=cp_interfaces; applicability_evidence; occurrence_event_id; concrete_row_id; physical_identity; formulation_or_species; phase; carbon_origin; particle_fraction; source_compartment; receiving_compartment; supply_or_handover_gate; provider_covered_cells; asset_component_event_and_lifecycle_phase; native_property; native_unit; measured_native_quantity; source_record_id; allocation_all_users; normalization_denominator; per_identity_amount_calculation; verification_evidence; unresolved_reason; occurrence_to_row_reconciliation; waste_origin_event; material_or_true_mixture; moisture_basis; container_tare; opening_waste_stock; generated_waste; received_waste; handover_quantity; closing_waste_stock; onsite_treatment; receiver_id; applicability_decision_record; covered_concrete_rows; excluded_occurrence_reason; completion_evidence; observed_quantity_state; conversion_or_allocation_evidence | 仅实际废物状态的拒收受污货份收集残留清洗水退役邮袋拖缆封识物料，具组成状态接收方。可用返还目标回收货容器仍属库存产品，不默认废物。 本范围是必须落实的身份识别要求，不是交换流。使用原节点采集协议及其记录，先按真实身份、端口及独立功能拆分，再将保留的数量、基准及证据规则分别用于各兼容具体行。不得将异质身份合并数量或从总括名称推断原生属性单位。未发生须有证据，适用性或身份未知则阻止完成。 以下采集条件仅限本项 outputs/waste 的身份与交接点（真实货物邮件拖顶接口产生废物）。本过程实际产生或接收所述废物时启用。记录材料或配方或真实共同收集混合物、干湿状态、容器皮重、来源事件、存量、交接关口及实际接收者；核对产生量+期初库存+接收量=交出量+期末库存+另列现场处理量。分收的不同废物分行，真实接收混合物可为一行，其组分仅作不可相加审计；有用回收、客户保留物与废物去向分开，不自动给替代抵扣。 每项适用性判断须留证。经证实不发生仅关闭所述范围和时段，缺记录仍未解决。发生的要求须将全部事件映射到具体row ID及相容原生数量，或精确映射至已覆盖行和供应方责任，并逐项说明排除理由。证据须覆盖身份、支持单位、计算、原始记录及全部去向；既有与新增分支对同一事件互斥覆盖，协议本身不作为交换。完成须无未分配事件、无重复覆盖、无相关数量或身份未决项。按有证据的实际分支采集原始字段。不适用的操作数须关联分支判定，适用但缺乏实测或依据的数量登记待决。 | 接收方验收的具体废物或实际混合收集物在实测状态下的原生数量 | 每次真实事件及每项有证据的未发生判断 | 完整声明队列及归属资产寿命关联事件 | 仅本过程真实责任场所及供应方 | 先对账原生事件总量，仅汇总身份、状态、单位、交接点及期间均相容的量。按相应计算规则逐行核算一次：只分配仍共享的负担，目标总量仅除以同口径的正合格产出；等效每参考流数值原值沿用，零产出期间不作除法并保留处置记录。 | 以接收记录核对产生、库存、场内处理和实测交付。混合物流量与组分测量分开；干湿基或质量体积换算须有相容组成或密度。接收转移和环境直排按不同交接点记录。 对上述具体身份及相容输入口径，仅在数量的归属和归一化状态与下式前提匹配时使用该规则：逐真实互斥废物产生 / N 保留原始凭据、实际采用的系数和结果单位。数值来源模式：calculated_value；适用范围：site_specific；归一化基准：每声明的参考流；基准类型：reference_flow；证据类型：calculated_from_collection；采集协议：cp_interfaces；来源：unsd-cpc3-65219; ghg-product-2011。须有原始记录、精确原生支持及逐具体行核验；这些规则不提供缺失身份或数值。 完成判据：check_occurrence_completion。 |
| cp_expand_actual_cargo_dust_release | cargo_tow_interfaces | 必须展开身份 actual_cargo_dust_release (outputs/elementary)：真实货物粉尘组分向声明介质释放 | collected_record | requirement_id=actual_cargo_dust_release; process_id=cargo_tow_interfaces; required_direction=outputs; required_flow_type=elementary; original_collection_protocol=cp_interfaces; applicability_evidence; occurrence_event_id; concrete_row_id; physical_identity; formulation_or_species; phase; carbon_origin; particle_fraction; source_compartment; receiving_compartment; supply_or_handover_gate; provider_covered_cells; asset_component_event_and_lifecycle_phase; native_property; native_unit; measured_native_quantity; source_record_id; allocation_all_users; normalization_denominator; per_identity_amount_calculation; verification_evidence; unresolved_reason; occurrence_to_row_reconciliation; substance_identity; chemical_form; environmental_compartment; carbon_origin; particle_fraction_or_count_basis; measured_or_calculated_release; species_conversion_evidence; applicability_decision_record; covered_concrete_rows; excluded_occurrence_reason; completion_evidence; observed_quantity_state; conversion_or_allocation_evidence | 条件真实干散货其他货物物种粒径相态及空气水土子介质环境越界。收集粉尘泄散返货库存不当空气排放，不给全部货物统一煤水泥尘UUID。 本范围是必须落实的身份识别要求，不是交换流。使用原节点采集协议及其记录，先按真实身份、端口及独立功能拆分，再将保留的数量、基准及证据规则分别用于各兼容具体行。不得将异质身份合并数量或从总括名称推断原生属性单位。未发生须有证据，适用性或身份未知则阻止完成。 以下采集条件仅限本项 outputs/elementary 的身份与交接点（真实货物粉尘组分向声明介质释放）。仅对进入已记录接收介质且有观测或适用计算依据的实际释放启用。记录具体物质及形态、来源或接收介质、适用的化石或生物碳来源、适用的粒径组分或粒子数粒径基础及采样期；保留元素与分子口径，换算须有化学计量和相容物种证据。收集物流中的污染物在实际环境排放边界前归接收物流，不用CO2、NOx、VOC、COD或泛颗粒物流代替缺失物种。 每项适用性判断须留证。经证实不发生仅关闭所述范围和时段，缺记录仍未解决。发生的要求须将全部事件映射到具体row ID及相容原生数量，或精确映射至已覆盖行和供应方责任，并逐项说明排除理由。证据须覆盖身份、支持单位、计算、原始记录及全部去向；既有与新增分支对同一事件互斥覆盖，协议本身不作为交换。完成须无未分配事件、无重复覆盖、无相关数量或身份未决项。按有证据的实际分支采集原始字段。不适用的操作数须关联分支判定，适用但缺乏实测或依据的数量登记待决。 | 本物质、资源或物理排放在实际环境介质的已核实原生属性与单位 | 每次真实事件及每项有证据的未发生判断 | 完整声明队列及归属资产寿命关联事件 | 仅本过程真实责任场所及供应方 | 先对账原生事件总量，仅汇总身份、状态、单位、交接点及期间均相容的量。按相应计算规则逐行核算一次：只分配仍共享的负担，目标总量仅除以同口径的正合格产出；等效每参考流数值原值沿用，零产出期间不作除法并保留处置记录。 | 采样或活动量及适用因子须对应物种、相态、来源和环境介质。按实际对象区分质量、粒子数、热量及元素当量；换算须有依据，重叠总量不可相加。 对上述具体身份及相容输入口径，仅在数量的归属和归一化状态与下式前提匹配时使用该规则：真实未回收组分释放 / N 保留原始凭据、实际采用的系数和结果单位。数值来源模式：calculated_value；适用范围：site_specific；归一化基准：每声明的参考流；基准类型：reference_flow；证据类型：calculated_from_collection；采集协议：cp_interfaces；来源：unsd-cpc3-65219; ghg-product-2011。须有原始记录、精确原生支持及逐具体行核验；这些规则不提供缺失身份或数值。 完成判据：check_occurrence_completion。 |
| cp_expand_actual_support_materials | support_lifecycle | 必须展开身份 actual_support_materials (inputs/product)：真实船舶拖顶港口船员支持供应 | collected_record | requirement_id=actual_support_materials; process_id=support_lifecycle; required_direction=inputs; required_flow_type=product; original_collection_protocol=cp_support; applicability_evidence; occurrence_event_id; concrete_row_id; physical_identity; formulation_or_species; phase; carbon_origin; particle_fraction; source_compartment; receiving_compartment; supply_or_handover_gate; provider_covered_cells; asset_component_event_and_lifecycle_phase; native_property; native_unit; measured_native_quantity; source_record_id; allocation_all_users; normalization_denominator; per_identity_amount_calculation; verification_evidence; unresolved_reason; occurrence_to_row_reconciliation; operation_record; material_sku; formulation_grade_state; independent_function; supplier; package_tare; opening_stock; net_receipts; unused_returns; closing_stock; failed_use; destination; applicability_decision_record; covered_concrete_rows; excluded_occurrence_reason; completion_evidence; observed_quantity_state; conversion_or_allocation_evidence | 条件真实润滑处理防污制冷剂耗材船员供应，具配方状态端口及全部负责船目标角色。声明人工作支持边界，不虚构代谢日常饮食因子，原始货物目标生产排除。 本范围是必须落实的身份识别要求，不是交换流。使用原节点采集协议及其记录，先按真实身份、端口及独立功能拆分，再将保留的数量、基准及证据规则分别用于各兼容具体行。不得将异质身份合并数量或从总括名称推断原生属性单位。未发生须有证据，适用性或身份未知则阻止完成。 以下采集条件仅限本项 inputs/product 的身份与交接点（真实船舶拖顶港口船员支持供应）。仅对实际发生的所述作业及独立消耗SKU或实物启用。记录材料或配方、等级状态、功能、供应方、扣包装皮重后的净量、库存变动、未用退回和去向。独立供应的包装衬材按材料及一次性或复用状态区分；完整配方或物理总成保留一个身份，组成信息不相加，不同外购品不得共用汇总数量。纳入失败使用、维护及返工，记录真实消耗而非仅采购量。 每项适用性判断须留证。经证实不发生仅关闭所述范围和时段，缺记录仍未解决。发生的要求须将全部事件映射到具体row ID及相容原生数量，或精确映射至已覆盖行和供应方责任，并逐项说明排除理由。证据须覆盖身份、支持单位、计算、原始记录及全部去向；既有与新增分支对同一事件互斥覆盖，协议本身不作为交换。完成须无未分配事件、无重复覆盖、无相关数量或身份未决项。按有证据的实际分支采集原始字段。不适用的操作数须关联分支判定，适用但缺乏实测或依据的数量登记待决。 | 实际品项、配方或物件在规定交接点及状态下的原生数量 | 每次真实事件及每项有证据的未发生判断 | 完整声明队列及归属资产寿命关联事件 | 仅本过程真实责任场所及供应方 | 先对账原生事件总量，仅汇总身份、状态、单位、交接点及期间均相容的量。按相应计算规则逐行核算一次：只分配仍共享的负担，目标总量仅除以同口径的正合格产出；等效每参考流数值原值沿用，零产出期间不作除法并保留处置记录。 | 逐批核对收货、期初期末、退回、耗用及互斥去向。件数或体积折质量须有单件质量或相容状态密度依据；产品身份以外的包装和衬材独立登记。 对上述具体身份及相容输入口径，仅在数量的归属和归一化状态与下式前提匹配时使用该规则：逐真实归属供应 / N 保留原始凭据、实际采用的系数和结果单位。数值来源模式：calculated_value；适用范围：site_specific；归一化基准：每声明的参考流；基准类型：reference_flow；证据类型：calculated_from_collection；采集协议：cp_support；来源：unsd-cpc3-65219; ghg-product-2011。须有原始记录、精确原生支持及逐具体行核验；这些规则不提供缺失身份或数值。 完成判据：check_occurrence_completion。 |
| cp_expand_actual_service_assets | support_lifecycle | 必须展开身份 actual_service_assets (inputs/product)：真实船舶拖轮服务驳船拖具港口生命事件 | collected_record | requirement_id=actual_service_assets; process_id=support_lifecycle; required_direction=inputs; required_flow_type=product; original_collection_protocol=cp_assets; applicability_evidence; occurrence_event_id; concrete_row_id; physical_identity; formulation_or_species; phase; carbon_origin; particle_fraction; source_compartment; receiving_compartment; supply_or_handover_gate; provider_covered_cells; asset_component_event_and_lifecycle_phase; native_property; native_unit; measured_native_quantity; source_record_id; allocation_all_users; normalization_denominator; per_identity_amount_calculation; verification_evidence; unresolved_reason; occurrence_to_row_reconciliation; asset_or_reusable_id; model_configuration; included_initial_components; lifecycle_phase; manufacture_native_quantity; target_duty; all_user_same_cohort_lifetime_duty; replacement_event; provider_coverage_cells; applicability_decision_record; covered_concrete_rows; excluded_occurrence_reason; completion_evidence; observed_quantity_state; conversion_or_allocation_evidence; supply_or_service_gate; accepted_service_demand; provider_functional_unit; provider_intensity_basis; covered_lifecycle_stages | 逐真实原生总成事件及制造安装改装维护坞修更换退役完整阶段范围，具全用户分母。客户被移目标不作其制造投入，真实供应服务驳船拖具另作资产。 本范围是必须落实的身份识别要求，不是交换流。使用原节点采集协议及其记录，先按真实身份、端口及独立功能拆分，再将保留的数量、基准及证据规则分别用于各兼容具体行。不得将异质身份合并数量或从总括名称推断原生属性单位。未发生须有证据，适用性或身份未知则阻止完成。 对本项规定的实体资产或周转品，核实供应交接点、初始部件以及实际替换、维护、清洗、失败和退役记录。租赁或综合供应合同须核实覆盖范围；本项包含已交付服务时按实际验收的原生需求计量，仅另行追溯未覆盖的资产阶段。直接建模资产按同队列目标作业量与全用户有据正寿命作业量之比分配，禁止将整个设施归给一个服务。 每项适用性判断须留证。经证实不发生仅关闭所述范围和时段，缺记录仍未解决。发生的要求须将全部事件映射到具体row ID及相容原生数量，或精确映射至已覆盖行和供应方责任，并逐项说明排除理由。证据须覆盖身份、支持单位、计算、原始记录及全部去向；既有与新增分支对同一事件互斥覆盖，协议本身不作为交换。完成须无未分配事件、无重复覆盖、无相关数量或身份未决项。按有证据的实际分支采集原始字段。不适用的操作数须关联分支判定，适用但缺乏实测或依据的数量登记待决。 | 实体资产或周转品按已核实的制造或供应单位；同一队列的相容作业量；范围内的交付服务用其原生功能单位 | 每次真实事件及每项有证据的未发生判断 | 完整声明队列及归属资产寿命关联事件 | 仅本过程真实责任场所及供应方 | 先对账原生事件总量，仅汇总身份、状态、单位、交接点及期间均相容的量。按相应计算规则逐行核算一次：只分配仍共享的负担，目标总量仅除以同口径的正合格产出；等效每参考流数值原值沿用，零产出期间不作除法并保留处置记录。 | 实体资产按有记录的供应交接量乘目标作业量与同队列全用户正寿命作业量之比，保留配置、投运、更换及退役或剩余寿命记录。范围内如有已交付服务，按已核实原生强度乘相容交付需求，留存覆盖凭据，未覆盖阶段单列。 对该交接点相容的资产量或已独立核实的服务结果，仅在数量的归属和归一化状态与下式前提匹配时使用该规则：真实全用户生命归属资产事件数量 / N 保留原始凭据、实际采用的系数和结果单位。数值来源模式：calculated_value；适用范围：site_specific；归一化基准：每声明的参考流；基准类型：reference_flow；证据类型：calculated_from_collection；采集协议：cp_assets；来源：unsd-cpc3-65219; ghg-product-2011。须有原始记录、精确原生支持及逐具体行核验；这些规则不提供缺失身份或数值。 完成判据：check_occurrence_completion。 |
| cp_expand_actual_native_provider | support_lifecycle | 必须展开身份 actual_native_provider (inputs/product)：真实原生货运拖顶港口租船支持服务 | collected_record | requirement_id=actual_native_provider; process_id=support_lifecycle; required_direction=inputs; required_flow_type=product; original_collection_protocol=cp_assets; applicability_evidence; occurrence_event_id; concrete_row_id; physical_identity; formulation_or_species; phase; carbon_origin; particle_fraction; source_compartment; receiving_compartment; supply_or_handover_gate; provider_covered_cells; asset_component_event_and_lifecycle_phase; native_property; native_unit; measured_native_quantity; source_record_id; allocation_all_users; normalization_denominator; per_identity_amount_calculation; verification_evidence; unresolved_reason; occurrence_to_row_reconciliation; provider_contract; independent_function; provider_gates; native_functional_unit; delivered_quantity; covered_process_phase_cells; uncovered_foreground_rows; applicability_decision_record; covered_concrete_rows; excluded_occurrence_reason; completion_evidence; observed_quantity_state; conversion_or_allocation_evidence; provider_functional_unit; accepted_service_demand; provider_intensity_basis; covered_service_stages | 条件真实海运承运拖顶装卸港口引航拖轮租船检验维护废物处理功能原生端口数量范围。拖轮小时货吨公里账单费用纯租船不能强制等于一项完成委托。 本范围是必须落实的身份识别要求，不是交换流。使用原节点采集协议及其记录，先按真实身份、端口及独立功能拆分，再将保留的数量、基准及证据规则分别用于各兼容具体行。不得将异质身份合并数量或从总括名称推断原生属性单位。未发生须有证据，适用性或身份未知则阻止完成。 以下采集条件仅限本项 inputs/product 的身份与交接点（真实原生货运拖顶港口租船支持服务）。仅在本PCR范围内实际委托独立功能时启用。记录合同、交付服务功能、关口、原生功能单位、实际交付量及具体覆盖的过程和寿命阶段；逐项与自营活动比对，完整供应方或未覆盖前景活动仅计一次。不用金额、材料质量或假设件数替代真实功能；同一最终服务不通过外部最终产品供应方递归重复计入。 每项适用性判断须留证。经证实不发生仅关闭所述范围和时段，缺记录仍未解决。发生的要求须将全部事件映射到具体row ID及相容原生数量，或精确映射至已覆盖行和供应方责任，并逐项说明排除理由。证据须覆盖身份、支持单位、计算、原始记录及全部去向；既有与新增分支对同一事件互斥覆盖，协议本身不作为交换。完成须无未分配事件、无重复覆盖、无相关数量或身份未决项。按有证据的实际分支采集原始字段。不适用的操作数须关联分支判定，适用但缺乏实测或依据的数量登记待决。 | 已核实的合同交付功能单位；仅独立可计数且已验收的结果使用 Item(s) | 每次真实事件及每项有证据的未发生判断 | 完整声明队列及归属资产寿命关联事件 | 仅本过程真实责任场所及供应方 | 先对账原生事件总量，仅汇总身份、状态、单位、交接点及期间均相容的量。按相应计算规则逐行核算一次：只分配仍共享的负担，目标总量仅除以同口径的正合格产出；等效每参考流数值原值沿用，零产出期间不作除法并保留处置记录。 | 按指定交接点实际验收量计量。仅在单位强度换算为总负担时，以供应方强度乘同一原生单位的需求量。保留合同范围、验收、原生单位及覆盖阶段记录。仅按时间交付的功能以时长计量。 对按合同口径已验收的服务，仅在数量的归属和归一化状态与下式前提匹配时使用该规则：真实供应方原生数量 / N 保留原始凭据、实际采用的系数和结果单位。数值来源模式：calculated_value；适用范围：site_specific；归一化基准：每声明的参考流；基准类型：reference_flow；证据类型：calculated_from_collection；采集协议：cp_assets；来源：unsd-cpc3-65219; ghg-product-2011。须有原始记录、精确原生支持及逐具体行核验；这些规则不提供缺失身份或数值。 完成判据：check_occurrence_completion。 |
| cp_expand_actual_water_resource | support_lifecycle | 必须展开身份 actual_water_resource (inputs/elementary)：真实直接取用水资源 | collected_record | requirement_id=actual_water_resource; process_id=support_lifecycle; required_direction=inputs; required_flow_type=elementary; original_collection_protocol=cp_support; applicability_evidence; occurrence_event_id; concrete_row_id; physical_identity; formulation_or_species; phase; carbon_origin; particle_fraction; source_compartment; receiving_compartment; supply_or_handover_gate; provider_covered_cells; asset_component_event_and_lifecycle_phase; native_property; native_unit; measured_native_quantity; source_record_id; allocation_all_users; normalization_denominator; per_identity_amount_calculation; verification_evidence; unresolved_reason; occurrence_to_row_reconciliation; water_source_or_receiver; water_state; meter_period; treatment_owner; water_mass; mixture_volume; conversion_evidence; balance_residual; applicability_decision_record; covered_concrete_rows; excluded_occurrence_reason; completion_evidence; observed_quantity_state; conversion_or_allocation_evidence | 条件真实压载冷却处理等海淡水取用及真实来源子介质，不用自来水产品或内部循环水代理。 本范围是必须落实的身份识别要求，不是交换流。使用原节点采集协议及其记录，先按真实身份、端口及独立功能拆分，再将保留的数量、基准及证据规则分别用于各兼容具体行。不得将异质身份合并数量或从总括名称推断原生属性单位。未发生须有证据，适用性或身份未知则阻止完成。 以下采集条件仅限本项 inputs/elementary 的身份与交接点（真实直接取用水资源）。仅对从规定来源实际取入系统的水启用，核实仪表或采样区间及处理责任方。购水和收集污水是不同交换；水组分质量与混合废水体积分别核对，仅在需要换算时使用有证据且状态相容的密度。平衡缺项保留为未解决残差，不假设蒸发或零值。 每项适用性判断须留证。经证实不发生仅关闭所述范围和时段，缺记录仍未解决。发生的要求须将全部事件映射到具体row ID及相容原生数量，或精确映射至已覆盖行和供应方责任，并逐项说明排除理由。证据须覆盖身份、支持单位、计算、原始记录及全部去向；既有与新增分支对同一事件互斥覆盖，协议本身不作为交换。完成须无未分配事件、无重复覆盖、无相关数量或身份未决项。按有证据的实际分支采集原始字段。不适用的操作数须关联分支判定，适用但缺乏实测或依据的数量登记待决。 | 按来源或接收介质及实测状态计量水质量或体积 | 每次真实事件及每项有证据的未发生判断 | 完整声明队列及归属资产寿命关联事件 | 仅本过程真实责任场所及供应方 | 先对账原生事件总量，仅汇总身份、状态、单位、交接点及期间均相容的量。按相应计算规则逐行核算一次：只分配仍共享的负担，目标总量仅除以同口径的正合格产出；等效每参考流数值原值沿用，零产出期间不作除法并保留处置记录。 | 核对环境交接点的取水或排放、相态与期间；质量体积换算须使用相容状态的实际密度。水组分与混合出水总量分别核算。 对上述具体身份及相容输入口径，仅在数量的归属和归一化状态与下式前提匹配时使用该规则：逐真实直接资源取用 / N 保留原始凭据、实际采用的系数和结果单位。数值来源模式：calculated_value；适用范围：site_specific；归一化基准：每声明的参考流；基准类型：reference_flow；证据类型：calculated_from_collection；采集协议：cp_support；来源：unsd-cpc3-65219; ghg-product-2011。须有原始记录、精确原生支持及逐具体行核验；这些规则不提供缺失身份或数值。 完成判据：check_occurrence_completion。 |
| cp_expand_other_support_waste | support_lifecycle | 必须展开身份 other_support_waste (outputs/waste)：真实其他船舶拖顶港口支持废物 | collected_record | requirement_id=other_support_waste; process_id=support_lifecycle; required_direction=outputs; required_flow_type=waste; original_collection_protocol=cp_support; applicability_evidence; occurrence_event_id; concrete_row_id; physical_identity; formulation_or_species; phase; carbon_origin; particle_fraction; source_compartment; receiving_compartment; supply_or_handover_gate; provider_covered_cells; asset_component_event_and_lifecycle_phase; native_property; native_unit; measured_native_quantity; source_record_id; allocation_all_users; normalization_denominator; per_identity_amount_calculation; verification_evidence; unresolved_reason; occurrence_to_row_reconciliation; waste_origin_event; material_or_true_mixture; moisture_basis; container_tare; opening_waste_stock; generated_waste; received_waste; handover_quantity; closing_waste_stock; onsite_treatment; receiver_id; applicability_decision_record; covered_concrete_rows; excluded_occurrence_reason; completion_evidence; observed_quantity_state; conversion_or_allocation_evidence | 条件真实舱底污泥洗涤污水垃圾维护退役物按组成状态产生接收方。客户目标货物不因被移动即废物，可用返还留存库存直接环境独立。 本范围是必须落实的身份识别要求，不是交换流。使用原节点采集协议及其记录，先按真实身份、端口及独立功能拆分，再将保留的数量、基准及证据规则分别用于各兼容具体行。不得将异质身份合并数量或从总括名称推断原生属性单位。未发生须有证据，适用性或身份未知则阻止完成。 以下采集条件仅限本项 outputs/waste 的身份与交接点（真实其他船舶拖顶港口支持废物）。本过程实际产生或接收所述废物时启用。记录材料或配方或真实共同收集混合物、干湿状态、容器皮重、来源事件、存量、交接关口及实际接收者；核对产生量+期初库存+接收量=交出量+期末库存+另列现场处理量。分收的不同废物分行，真实接收混合物可为一行，其组分仅作不可相加审计；有用回收、客户保留物与废物去向分开，不自动给替代抵扣。 每项适用性判断须留证。经证实不发生仅关闭所述范围和时段，缺记录仍未解决。发生的要求须将全部事件映射到具体row ID及相容原生数量，或精确映射至已覆盖行和供应方责任，并逐项说明排除理由。证据须覆盖身份、支持单位、计算、原始记录及全部去向；既有与新增分支对同一事件互斥覆盖，协议本身不作为交换。完成须无未分配事件、无重复覆盖、无相关数量或身份未决项。按有证据的实际分支采集原始字段。不适用的操作数须关联分支判定，适用但缺乏实测或依据的数量登记待决。 | 接收方验收的具体废物或实际混合收集物在实测状态下的原生数量 | 每次真实事件及每项有证据的未发生判断 | 完整声明队列及归属资产寿命关联事件 | 仅本过程真实责任场所及供应方 | 先对账原生事件总量，仅汇总身份、状态、单位、交接点及期间均相容的量。按相应计算规则逐行核算一次：只分配仍共享的负担，目标总量仅除以同口径的正合格产出；等效每参考流数值原值沿用，零产出期间不作除法并保留处置记录。 | 以接收记录核对产生、库存、场内处理和实测交付。混合物流量与组分测量分开；干湿基或质量体积换算须有相容组成或密度。接收转移和环境直排按不同交接点记录。 对上述具体身份及相容输入口径，仅在数量的归属和归一化状态与下式前提匹配时使用该规则：逐真实互斥废物产生 / N 保留原始凭据、实际采用的系数和结果单位。数值来源模式：calculated_value；适用范围：site_specific；归一化基准：每声明的参考流；基准类型：reference_flow；证据类型：calculated_from_collection；采集协议：cp_support；来源：unsd-cpc3-65219; ghg-product-2011。须有原始记录、精确原生支持及逐具体行核验；这些规则不提供缺失身份或数值。 完成判据：check_occurrence_completion。 |
| cp_expand_actual_support_release | support_lifecycle | 必须展开身份 actual_support_release (outputs/elementary)：真实支持物质相关热向声明介质释放 | collected_record | requirement_id=actual_support_release; process_id=support_lifecycle; required_direction=outputs; required_flow_type=elementary; original_collection_protocol=cp_support; applicability_evidence; occurrence_event_id; concrete_row_id; physical_identity; formulation_or_species; phase; carbon_origin; particle_fraction; source_compartment; receiving_compartment; supply_or_handover_gate; provider_covered_cells; asset_component_event_and_lifecycle_phase; native_property; native_unit; measured_native_quantity; source_record_id; allocation_all_users; normalization_denominator; per_identity_amount_calculation; verification_evidence; unresolved_reason; occurrence_to_row_reconciliation; substance_identity; chemical_form; environmental_compartment; carbon_origin; particle_fraction_or_count_basis; measured_or_calculated_release; species_conversion_evidence; applicability_decision_record; covered_concrete_rows; excluded_occurrence_reason; completion_evidence; observed_quantity_state; conversion_or_allocation_evidence | 条件真实压载冷却热舱底污水洗涤防污磨耗制冷剂准备释放，具物种粒径相态碳源海水淡水空气土子介质。收集废物回收不全部作释放，不设统一排放泄漏比例。 本范围是必须落实的身份识别要求，不是交换流。使用原节点采集协议及其记录，先按真实身份、端口及独立功能拆分，再将保留的数量、基准及证据规则分别用于各兼容具体行。不得将异质身份合并数量或从总括名称推断原生属性单位。未发生须有证据，适用性或身份未知则阻止完成。 以下采集条件仅限本项 outputs/elementary 的身份与交接点（真实支持物质相关热向声明介质释放）。仅对进入已记录接收介质且有观测或适用计算依据的实际释放启用。记录具体物质及形态、来源或接收介质、适用的化石或生物碳来源、适用的粒径组分或粒子数粒径基础及采样期；保留元素与分子口径，换算须有化学计量和相容物种证据。收集物流中的污染物在实际环境排放边界前归接收物流，不用CO2、NOx、VOC、COD或泛颗粒物流代替缺失物种。 每项适用性判断须留证。经证实不发生仅关闭所述范围和时段，缺记录仍未解决。发生的要求须将全部事件映射到具体row ID及相容原生数量，或精确映射至已覆盖行和供应方责任，并逐项说明排除理由。证据须覆盖身份、支持单位、计算、原始记录及全部去向；既有与新增分支对同一事件互斥覆盖，协议本身不作为交换。完成须无未分配事件、无重复覆盖、无相关数量或身份未决项。按有证据的实际分支采集原始字段。不适用的操作数须关联分支判定，适用但缺乏实测或依据的数量登记待决。 | 本物质、资源或物理排放在实际环境介质的已核实原生属性与单位 | 每次真实事件及每项有证据的未发生判断 | 完整声明队列及归属资产寿命关联事件 | 仅本过程真实责任场所及供应方 | 先对账原生事件总量，仅汇总身份、状态、单位、交接点及期间均相容的量。按相应计算规则逐行核算一次：只分配仍共享的负担，目标总量仅除以同口径的正合格产出；等效每参考流数值原值沿用，零产出期间不作除法并保留处置记录。 | 采样或活动量及适用因子须对应物种、相态、来源和环境介质。按实际对象区分质量、粒子数、热量及元素当量；换算须有依据，重叠总量不可相加。 对上述具体身份及相容输入口径，仅在数量的归属和归一化状态与下式前提匹配时使用该规则：逐真实互斥环境释放 / N 保留原始凭据、实际采用的系数和结果单位。数值来源模式：calculated_value；适用范围：site_specific；归一化基准：每声明的参考流；基准类型：reference_flow；证据类型：calculated_from_collection；采集协议：cp_support；来源：unsd-cpc3-65219; ghg-product-2011。须有原始记录、精确原生支持及逐具体行核验；这些规则不提供缺失身份或数值。 完成判据：check_occurrence_completion。 |

### 计算规则

| rule_id | 适用于 | formula_or_rule | inputs | output | source_ids |
| --- | --- | --- | --- | --- | --- |
| qualified_original_count | qualified_freight_commission | 逐必需服务层s及兼容功能指纹f，N_s,f = sum_j I(真实任务j符合运行前原始完整验收)。逐原始合格有界委托仅一次贡献一项；部分失败取消不贡献且不改任务定义不丢因果负荷。最终参考输出为1 Item(s)；有限强度须N_s,f > 0。货物质量距离拖顶时间距离目标配置仍为补充真实驱动，不替代最终输出或跨层等价。 | 原始任务、分层与识别指纹; 实际完整验收的签署记录; cp_task | N_s,f; qualified_freight_commission | unsd-cpc3-65219; ghg-product-2011 |
| exclusive_custody_stock | 货物邮件燃料物料拖具保管 | 共同真实端口时间守恒原生基准：期初 + 外部接收 = 期末 + 真实验收交付或使用 + 返还或回收外运 + 独立废物外运 + 真实环境损失 + 已记录残差。项互斥，内部回收复用不另加接收外运使用，回收物只进期末后续真实使用或一个真实外运去向。设备客户目标货物库存保持分开。分真实燃料燃烧逸出碳及泄漏回收环境，不将未知差额强作排放或零。 | 实际期初、期末、接收、交付、使用、退回、废物及环境去向; cp_energy; cp_interfaces; cp_support | 按互斥口径核对库存及去向 | ghg-product-2011 |
| bulk_solids_water_balance | 真实干散货分支 | 每次观测记录实测含水分数及其真实基准：湿基w时，M_dry = M_wet*(1-w)；其他真实报告含水基准采用有据兼容关系换算，不把未指明基准默认作湿基。按所得共同干固体基准闭合期初干固体 + 接收干固体 = 期末 + 交付 + 回收外运 + 独立废物 + 环境干固体损失 + 已记录残差，去向项互斥。内部回收货只进期末后续交付一次，不另作损失外运。关联水另按真实新增雨水蒸发留存外排水及相关反应闭合，湿基报告须真实水变项，绝不假定等含水。不能把全部湿质量差当干货损失或空气尘。 | 各项湿质量及其含水率; 干固体与水的实际去向; cp_interfaces | 干固体台账及单列的水量台账 | ghg-product-2011 |
| native_life_normalization | 兼容任务层内全部真实行 | q_row,ref,s,f = sum(原生事件数量 × 真实因果全用户份额) / N_s,f，仅一次；资产份额为同组该阶段归属使用量 / 有据正全用户使用量。含因果准备失败空船天气港口未含完整生命供应方范围。真实消耗客户所有期初燃料储能追至真实提取及兼容原生上游供应充电负荷一次，无论产权购买人，购买提取不是两项燃料投入，留存库存不消耗，全部货物目标生产仍外部。兼容场址航次加总分子N_s,f，不归并异质任务或把供应方吨公里拖轮小时强作委托计数。 | 实际事件的原生数量; 因果或寿命份额; 分层 s 和指纹 f 对应的相容分母 | 每参考流的原生计量清单 | ghg-product-2011 |

### 数据质量要求

| requirement_id | 适用于 | Requirement | evidence |
| --- | --- | --- | --- |
| task_stratum_traceability | 参考分支接口 | 须运行前原始任务数量对象端口质量验收及真实完成记录，分必需更细功能层并含完整因果不成功责任。邮件层级皮重保管、干散货逐状态含水、全拖顶目标配置工况为分支特定记录，不能缺字段用无关货物平均填。 | 签署原始合同验收校准原始日志真实层指纹登记 |
| actual_native_fate_scope | 全部投入直接废物资产供应方 | 须真实原生身份属性单位状态端口全部责任方场址期间生命范围证据及真实来源物种粒径介质数量不确定性。商拖建议运营船队国际邮政散货示例仅供适用真实问题，不作统一数值技术法律因子或强制相同合同。 | 原生供应资产计量去向记录范围矩阵 |
| validation_limits | 全部节点 | 不设统一委托大小拖速拉力载荷邮件袋比散货含水尘燃料逸出资产寿命人体代谢因子。真实应用须独立兼容QA样本，同批最大值不能验证自身，缺数量身份为不完整，检查器通过后仍须科学审查最终具体绑定。 | 独立比较证据登记明确未解数据 |

## 9. 验证规则

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| validate_full_scope_task | 全部节点 | 验证官方全部邮件干散货拖顶列明全部目标未另分类及真实排除功能重叠，加一个原始有界合格完成任务具必需层指纹真实货物对象数量配置路线端口验收。须全部5功能字段原生计数支持，不用通用货吨公里船制造发票邮件袋拖轮数量代理或跨层等价。 | unsd-cpc3-65219; ghg-product-2011 |
| validate_actual_branch_responsibility | maritime_operation; cargo_tow_interfaces | 验证运营承运邮件层级验收区别最终收件人、干散货逐观测实测含水及明确湿基w和M_dry=M_wet*(1-w)，或从其他真实报告基准有据换算，以及独立水尘去向、全拖轮被拖目标准备拖具目标负责能源支持真实交接。客户移动目标制造区别真实供应服务驳船拖具生命，目标工业作业排除。纳全部真实主辅锅炉岸供港口天气压载空船失败责任精确原生供应方范围仅一次。 | ghg-product-2011; upu-postal-2024; imo-towing-884 |
| validate_life_stocks_providers | 全部节点 | 验证互斥期初期末回收使用交付外运废物环境账及真实燃料碳物种；核实客户所有期初燃料储能真实消耗提取及兼容原生上游供应充电仅一次，无论购买人产权，不给期初免费、全部库存消耗或重复购买提取；内部回收不另加项，原目标货物不作制造消耗。须全部真实制造安装改装投产维护坞修更换退役阶段及全用户同组使用量，总成初始部件供应方已含自营范围互斥，不假定寿命制造等于生命或费用原生功能换算。 | ghg-product-2011 |
| validate_denominator_identity | 全部节点 | 正N_s,f仅对原始完整任务验收，不追溯重设增计数，保留失败零完成负荷；因果全用户份额合一兼容分子N聚合不重复归一化。各真实具体身份属性单位状态端口物种介质须核实，条件需求按同节点协议扩展，登记未解真实最终行。中英结构化含全部规范规则，缺失为不完整非零。 | ghg-product-2011 |
| atomic_maritime_operation | maritime_operation | 拒绝将备选物料、独立供应资产服务、不同废物流、污染物种、碳源、相态、粒径或环境子介质合并成一个交换身份。本节点每项适用cp_expand_要求必须有发生或未发生记录及完整具体行清单，各行具有自身身份、端口、已核验UUID、原生属性单位、数量、原始记录、计算和唯一责任。供应方已含完整总成或真实收集混合物流仍按一个真实供应或收集身份，不虚构组分交换。不得将要求名称标识、NOx或VOC或PM总量、未明确的物理释放或异质清单绑定一个UUID。核对全部子行、原始事件、供应方已含单元及跨节点交接，不缺失当零、不重复计入。身份、适用性、数量或去向未知，均阻止完整前景包及最终TIDAS交换产出。PCR检查器不验证这些前景事实，须保留逐行证据供审查。 | ghg-product-2011 |
| atomic_cargo_tow_interfaces | cargo_tow_interfaces | 拒绝将备选物料、独立供应资产服务、不同废物流、污染物种、碳源、相态、粒径或环境子介质合并成一个交换身份。本节点每项适用cp_expand_要求必须有发生或未发生记录及完整具体行清单，各行具有自身身份、端口、已核验UUID、原生属性单位、数量、原始记录、计算和唯一责任。供应方已含完整总成或真实收集混合物流仍按一个真实供应或收集身份，不虚构组分交换。不得将要求名称标识、NOx或VOC或PM总量、未明确的物理释放或异质清单绑定一个UUID。核对全部子行、原始事件、供应方已含单元及跨节点交接，不缺失当零、不重复计入。身份、适用性、数量或去向未知，均阻止完整前景包及最终TIDAS交换产出。PCR检查器不验证这些前景事实，须保留逐行证据供审查。 | ghg-product-2011 |
| atomic_support_lifecycle | support_lifecycle | 拒绝将备选物料、独立供应资产服务、不同废物流、污染物种、碳源、相态、粒径或环境子介质合并成一个交换身份。本节点每项适用cp_expand_要求必须有发生或未发生记录及完整具体行清单，各行具有自身身份、端口、已核验UUID、原生属性单位、数量、原始记录、计算和唯一责任。供应方已含完整总成或真实收集混合物流仍按一个真实供应或收集身份，不虚构组分交换。不得将要求名称标识、NOx或VOC或PM总量、未明确的物理释放或异质清单绑定一个UUID。核对全部子行、原始事件、供应方已含单元及跨节点交接，不缺失当零、不重复计入。身份、适用性、数量或去向未知，均阻止完整前景包及最终TIDAS交换产出。PCR检查器不验证这些前景事实，须保留逐行证据供审查。 | ghg-product-2011 |
| check_occurrence_completion | 全部实际清单行和身份识别协议 | 保留适用性证据，将每个实际事件对应到具体清单行或已核实的供应方覆盖范围。判定未发生须有证据，未知项保留待决。按同一身份、状态、单位、期间和交接点核对期初、接收、期末及互斥去向。耗材领用账区分未用退回、内部领拨和合格、失败及返工作业的实际耗用。托管账或物料平衡采用期初库存＋外部接收＋配对内部接收＝期末库存＋配对内部发出＋对外交付且获接收的数量＋未用外退＋外送的已用物资或回收物＋外送废物＋直接排放＋本边界内消耗或转化量。身份在边界内生成时，将有证据的生成量或出生数计入该身份账的来源并关联原事件。在上层守恒物料或元素平衡中抵消内部转化和移交。每个事件只记一次，留存回收物计入期末，移交与耗用分别登记。按相容口径执行专用托管、相态、转化或元素规则；已作为转化量计入的物料，其后续产物不得再计入同一去向合计。独立计量各项，对未解释的差额追查并保留待决。实物总量与负担分配分别核算。共享原始负担采用 Q_raw × s / R，其中 s 为有证据的目标驱动量除以同池同期间全部适用用户的正驱动量总和。已归属的目标总量采用 Q_target / R，已与同一参考流等效的单位结果 q_ref 原值沿用。供应方单位强度先乘以按其原生单位实测的需求量。仅在另一个仍有共享负担的独立阶段另作分配。R 为同一队列、交接点和参考单位下的正值合格产出量。保留失败与部分完成作业的负担，禁止以此放大 R；零产出时保留负担及有证据的结转或最终处置。自有资产采用同队列全用户寿命作业量，并排除初始部件重复计算。外购服务仅替代有记录的覆盖阶段。适用的身份、数量、支持单位、去向或分配分母仍未决时，最终数据集仍不完整。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | secondary_dataset; background_dataset |
| downstream_use | 必需层指纹内真实合格其他沿海远洋货运拖顶委托投入 |
| allowed_use | 兼容原始物理任务分支对象数量质量端口路线拖况真实技术供应方全用户生命范围，兼容原生数量N加总 |
| excluded_use | 跨层异质任务平均等价、仅干散货范围、目标货物制造或发票邮件拖轮吨公里代理、其他专门模式功能 |
| required_metadata | 原始任务层指纹验收N、真实货物或全被拖目标配置路线端口、全船能源去向资产完整全用户生命原生供应方覆盖缺数据 |
| required_quality_disclosure | 任务兼容范围限制、真实原生身份状态物种介质计量估计不确定性未解UUID数量候选科学审查 |
| update_trigger | 原始任务对象路线验收分层、船拖装卸燃料技术、资产生命供应方覆盖身份来源变化 |

## 11. 数据源

| source_id | type | reference | used_for |
| --- | --- | --- | --- |
| unsd-cpc3-65219 | official_guidance | https://unstats.un.org/unsd/classifications/Econ/Structure/Detail/EN/2100/65219 | 官方完整邮件干散货公海沿海拖顶全部列明目标未另分类范围 |
| imo-towing-884 | official_guidance | IMO MSC/Circ.884 (21 December1998), original advisory document copy https://maritimesafetyinnovationlab.org/wp-content/uploads/2014/02/imo-guidelines-for-safe-ocean-towing.pdf ; official author/document registry https://puc.overheid.nl/nsi/doc/PUC_1779_14/1/ | 2–7、11–13节附录B仅真实全拖目标准备日志问题，商用远洋建议范围，不用数值设备天气门槛或通用救援排除 |
| boskalis-ocean-tugs | official_guidance | https://boskalis.com/about-us/fleet-and-equipment/offshore-vessels/ocean-towage-tugs | 运营商真实远洋拖轮浮式目标角色示例，不用船队拉力性能默认或把定位作运输输出 |
| imo-bulk | official_guidance | https://www.imo.org/en/ourwork/safety/pages/cargoesinbulk-default.aspx | 定性固体散货配载装卸状态问题及明确谷物区别，不用安全限值或通用法律适用 |
| imo-grain | official_guidance | https://www.imo.org/en/ourwork/safety/pages/grain-code.aspx | 谷物特定真实货物配载证据问题，不向全部干散货施统一数值法律要求 |
| upu-postal-2024 | official_guidance | UPU Postal Transport Guide January2024 §§3,6.3,6.12; https://www.upu.int/UPU/media/upu/files/postalSolutions/programmesAndServices/postalSupplyChain/Transport/publications/guidePostalTransportEn.pdf | 真实邮件物件容器封发托运、海运运营承运接口及空袋返还问题，国际示例非统一合同，经济通知不推物理交接 |
| epa-shore-power | official_guidance | https://www.epa.gov/ports-initiative/shore-power-technology-assessment-us-ports | 真实外部电网辅助剩余锅炉接断来源问题，不用减排默认因子 |
| ghg-product-2011 | standard | https://ghgprotocol.org/sites/default/files/ghgp/standards/Product-Life-Cycle-Accounting-Reporting-Standard_041613.pdf | 一般边界分配质量原则，本PCR选择原始委托必需分层互斥库存完整生命供应方方法 |

