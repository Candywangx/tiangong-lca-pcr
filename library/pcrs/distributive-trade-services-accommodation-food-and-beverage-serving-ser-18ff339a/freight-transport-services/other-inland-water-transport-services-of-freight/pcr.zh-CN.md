---
pcr_id: pcr.distributive-trade-services-accommodation-food-and-beverage-serving-ser-18ff339a.freight-transport-services.other-inland-water-transport-services-of-freight
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 其他内河水运货运委托服务

## 1. 范围与适用性

本专属PCR覆盖其他内河水运货运完整功能：将汇集的物件包件装入专为方便运输装卸设计的容器运输；拖船在内河航道运河提供货驳拖运；内水拖运石油钻井平台浮吊疏浚船浮标船体未完工船；以及真实内河未另分类货运。不限集装箱某驳队某河或某燃料。参考为一个按原始规定物理有界并合格完成的内河承运委托。必须按容器化、拖船货驳或目标拖运、有据其他未另分类分层并细分功能指纹，保留真实任务对象数量端口质量路线时间拖况差异；容器货运与平台拖运不能因各计一项就等价。

排除独立分类的内河冷藏船服务（65221）及散装液体气体罐船服务（65222）、沿海远洋成品服务及其他模式；真实混合路线功能设备接口一次解决。有容器或具远洋能力大船本身不决定内河功能。排除原始货物客户被拖目标制造综合生产纯设备出租及独立仓储疏浚钻井平台安装定位成品功能。真实运输负责准备容器装卸过闸拖运协助仍按真实责任纳入。其他未另分类须正面真实分类证据，不自动引入海运邮政干散货标签或把未知货物当已分类。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.distributive-trade-services-accommodation-food-and-beverage-serving-ser-18ff339a.freight-transport-services.other-inland-water-transport-services-of-freight |
| classification_refs | CPC 3.0 65229; exact |
| covered_products | 完整内河容器化物件包件拖船货驳运河责任全部列明拖运目标及真实未另分类货物 |
| excluded_products | 独立65221/65222沿海远洋其他模式、货物目标制造独立工业仓储纯出租功能 |
| representative_product | 合格完成内河水运货运委托 |
| production_route | 真实内河货运拖船拖队任务航道船闸接口责任及完整应分配支持生命周期 |
| market_state | 一个必需分层兼容功能指纹内按原始规定验收的物理委托 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| 什么（What） | 合格完成内河水运货运委托 |
| 多少（How much） | 1项合格完成原始内河承运任务；须真实货物容器数量或全拖运目标配置路线时间原始验收 |
| 质量（How well） | 声明容器拖船货驳目标真实未另分类层及细指纹、对象质量状态保管端口原始接收验收 |
| 时长或周期（How long or cycle） | 真实原始任务准备接收至验收交接期间，加因果船闸排队拆并队空载等候失败返程责任及完整资产生命期 |
| reference_flow_link | qualified_inland_commission |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 合格完成内河水运货运委托 |
| 参考流属性 | 物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` |
| 参考单位组 | 数量 `5beb6eed-33a9-47b8-9ede-1dfe8f679159` |
| 参考单位 | Item(s) |
| 必需限定信息 | containerised_tugbarge_targettow_othernec_stratum; original_bounded_task_and_finer_functional_fingerprint; original_acceptance; actual_cargo_container_or_towtarget_identity; netcargo_tare_quantity_or_tow_geometry_displacement_draft_windage; inland_reach_route_distance_time; river_canal_lake_tidal_current_waterlevel_condition; locks_lifts_queue_split_rejoin_events; all_vessels_tugs_barges_targetconfiguration; custody_handover_gates; actual_main_aux_boiler_shore_energy_initialfuel_ownership; empty_ballast_failed_return_duties; waterway_sharedpurpose_allusers; native_provider_coverage; asset_full_life; period_N; uncertainty |

## 4. 计量与单位规则

| rule_id | 适用于 | required_property | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| original_task_count | reference product | 物品数量 | Item(s) | 一项为运行前定义的一个有界物理内河承运拖运委托，并按原始对象数量端口质量验收完成。不是一个容器TEU包件拖轮驳船闸次发票航次吨公里或目标制造单位。必需层及细指纹禁止归并等价异质委托，部分失败不作一项完成，只有运行前定义的原始独立有界任务可分别合格，不能失败后追溯拆分重设。真实货物质量体积拖运参数路线仍必需。 |
| actual_native_units | 全部清单行 | 真实原生兼容属性 | 真实原生单位 | 保留真实货物与容器皮重、拖轮驳船目标几何排水量吃水受风面积及逐供应方原生功能单位。对地速度对水速度水流方向水位路线距离运行时间不同，真实计量日志决定能源，不用统一顺水／逆水比例或系柱额定值。真实体积质量能量换算用实测状态密度组成低位热值及相关压力，核实kWh换算3.6 MJ/kWh。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 原始内河任务层对象端口及真实航道船舶接口供应方责任 |
| starting_condition_role | 任务接收不消除准备客户持有消耗燃料能源或既有服务资产生命 |
| product_classification_scope | 完整65229容器化物件包件拖船货驳内河运河拖运全部列明目标真实其他未另分类 |
| recursive_input_rule | 精确原生供应方覆盖投入排放生命仅一次替代匹配自营范围 |
| upstream_dataset_requirement | 真实原生功能属性单位端口分支河段技术期间生命范围 |
| disclosure | 原始验收N分层真实路线水闸驳队责任全部用户用途生命原生供应方范围去向缺证 |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| full_other_inland_scope | 全部节点 | 覆盖官方完整内河功能：将汇集的物件包件装入专门运输装卸容器运输；拖船内河运河货驳拖运；拖运平台浮吊疏浚船浮标船体未完工船；真实其他未另分类货物。父活动为内河承运委托。真实自航容器拖船货驳目标拖运配置及其他技术有独立投入数量数据质量端口差异，仅选真实分支。真实顶推安排须在有据拖船货驳承运功能内记录，不能默默加入全部工业顶推。未另分类须正面分类证据并排除专门功能。 | unsd-cpc3-65229; bafg-waterways |
| original_task_and_inland_gates | inland_navigation; container_tow_interfaces | 运行前声明原始有界任务层指纹、真实货量状态或拖运目标配置、内河起讫路线端口约定时间质量及原始完成验收。保留真实接收保管证据失败部分变更谱系，不追溯重设完成。河流运河湖泊潮汐河段及海内转换为真实分类地理事实，不从船型盐度码头名推定。真实混合模式按责任仅一次分阶段，票据计费本身不是物理验收。 | unsd-cpc3-65229; ghg-product-2011 |
| container_articles_branch | container_tow_interfaces; inland_navigation | 明确真实物件包件及专用运输装卸容器类型数量装载配载系固，货物净质量体积区别可复用容器底盘托盘皮重。不假定全是标准ISO箱TEU换算或每箱一任务。真实码头起吊吊机重配转运及容器供应复用返还修理清洗损失退役周期按真实产权全部用户。原始商品制造外部，仅真实新增服务供应及保管损坏补货处理影响一次纳入。容器分支验收不是最终消费者交付。 | unsd-cpc3-65229; ccnr-container-stability; ghg-product-2011 |
| whole_inland_tug_target | inland_navigation; container_tow_interfaces | 拖船货驳及列明目标须记录全体拖轮顶推协助安排驳船目标配置、目标几何排水量吃水受风面积、实际有货时货物、连解接收方约定安全交接。纳真实准备检验绑扎、全部负责拖轮协助目标推进及归运输辅助泵压载灯随拖船员支持，不只领拖。被移动客户平台浮标船体为保管目标且制造排除，真实提供可复用服务驳船容器拖具为资产具完整全用户生命。目标疏浚钻井生产安装独立，不假定运输投入。 | unsd-cpc3-65229; bafg-waterways; ghg-product-2011 |
| reach_lock_convoy_duties | inland_navigation; waterway_support_lifecycle | 记录真实河段方向水流、水位水深吃水限制、自由流壅水运河湖泊潮汐状态路线及模式特定时间能源。保留真实进近排队锚泊船闸升船系泊拆队再并队协助、港口调位压载空载返程、关闭低水天气改道等候失败救援责任真实分配。闸升阶段中间拆队不作额外最终任务，不默认闸尺寸驳数速度河流系数，不假定全路线有闸或水流协助即零生命负荷。 | bafg-waterways; ghg-product-2011 |
| fuel_energy_title | inland_navigation; waterway_support_lifecycle | 逐真实主辅锅炉发电机轴带电池岸供其他燃料能源路径、内部转换及真实剩余来源仅一次追踪。货物目标船舶客户所有期初燃料储能真实提取消耗用于本运输时，无论购买人产权内部价格，兼容原生上游供应充电负荷一次计，提取关联消耗供应出处。购买提取非两投入，储备期末库存不全消耗，不并入全部货物目标制造。真实替代引燃燃料放散泄漏逸出物种碳源明确，靠泊过闸停机不消除上游或仍运行负荷。 | epa-shore-power; ghg-product-2011 |
| waterway_water_support | waterway_support_lifecycle | 真实航道船闸升船机泵泊位码头及维护疏浚支持须真实功能能源物料原生服务量、生态物料资源接收范围及全用户用途分配。闸充排水跨流域调水循环不自动等于耗水或自来水供应。明确真实来源目的子介质库存变化泵重力控制责任损失及供应方覆盖，重力闸不证明控制施工维护零负荷。区分航运与水电防洪供水休闲其他用户，不把全部多用途河坝归一个货运任务。 | bafg-waterways; ghg-product-2011 |
| full_assets_native_providers | waterway_support_lifecycle | PCR生命周期选择纳真实承运船拖轮服务驳船推进装卸容器拖缆索具航道河道闸升船机港岸维修资产制造施工安装改装投产维护修理坞修疏浚更新更换退役。纳真实生命事件直接释放废物资源及内含初始部件充注互斥，不把制造等于生命或假定寿命。原生承运租船码头船闸航道维护处理供应方仅一次替代精确已含投入排放生命，未含责任保留。既有租赁共享资产须有据同组全用户使用量。 | ghg-product-2011 |
| atomic_inland_exchanges | 全部节点 | 每项真实尚未表示投入资产供应方废物直接物种资源须扩为一个真实节点方向类型具体row_id单一原生身份属性单位状态端口数量来源同节点协议接收介质及不确定性。真实燃烧燃料辅助制冷剂泄货尘容器清洗压载冷却热舱底污水洗涤防污磨耗维护疏浚物去向依真实记录，不用统一因子。内河不等于淡水，保留真实淡水咸淡水海水空气土子介质化合物粒径相态碳源及收集释放去向，缺失为不完整非零。 | ghg-product-2011 |

## 6. 过程清单结构

每张清单流卡仅代表一个可独立识别的产品、物料配方、废物流、物质或供应服务，具有兼容的端口、属性和单位。完整供应总成或实际收集的混合物流可有一个身份，其已含组分不得另列重复交换。第8节cp_expand_协议是必须落实的身份识别要求，不得当作选定流或交换数量。逐项记录真实适用性，以独立行标识列出全部具体交换；完整保留适用范围，未发生须有证据。尚未展开或未知的要求属于不完整，不得当作零。改为采集协议不等于解决缺失身份，也不免除生命周期、分配、计量或边界义务。

### 过程图

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| inland_navigation | 内河承运任务驳队及航行能源 | required | 真实所选内河容器拖运其他未另分类功能 | foreground | qualified_inland_commission |
| container_tow_interfaces | 容器货物装卸或拖船目标准备交接 | required | 真实分支特定保管装卸准备 | foreground | qualified_inland_commission |
| waterway_support_lifecycle | 航道船闸资产及完整支持生命周期 | required | 真实应分配基础设施资产供应供应方 | foreground | qualified_inland_commission |

全部节点关联其层指纹内唯一最终原始合格完成任务。为过闸拆队再并队换拖轮转容器或过多闸不产生新增完成委托，除非原始独立有界任务建立该功能。

### 过程：内河承运任务驳队及航行能源 (`inland_navigation`)

#### 输入

##### 产品流

###### 柴油 (`actual_diesel_supply`)

条件真实配方仅匹配无供应方通用柴油，其他等级燃料独立。全部负责船拖轮目标运输使用及客户所有期初库存提取保留兼容上游负荷一次，无论产权购买人，不全耗储备或重复购买提取。

- 选定流：柴油 `9d258d75-6792-4f1c-9856-81602ed8f816`
- 流属性/单位：质量 / kg
- 数量规则：真实兼容柴油供应消耗分配 / N
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每声明的参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_energy`
- 来源：`unsd-cpc3-65229`; `ghg-product-2011`

###### 交流电 (`vessel_shore_ac`)

真实供应端口外部交流电，不是船内发电或已知直流。本量排除独立码头船闸计量供应方已含范围，保留上游接入船舶剩余来源。

- 选定流：交流电 `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- 流属性/单位：低位热值 / MJ
- 数量规则：真实外部兼容船舶目标交流电 / N
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每声明的参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_energy`
- 来源：`unsd-cpc3-65229`; `ghg-product-2011`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 合格完成内河水运货运委托 (`qualified_inland_commission`)

必需层指纹内一个按原始验收完成的原始物理有界内河承运任务。完整精确服务UUID未解决，不用通用吨公里容器拖轮闸计数发票或目标制造代理。

- 选定流：合格完成内河水运货运委托
- 流属性/单位：物品数量 / Item(s)
- 数量规则：1 Item(s)
- 数值来源模式：`fixed_value`
- 适用范围：`site_specific`
- 归一化基准：每声明的参考流
- 基准类型：`reference_flow`
- 证据类型：`method_formula`
- 采集协议：`cp_task`
- 来源：`unsd-cpc3-65229`; `ghg-product-2011`

##### 废物流

##### 基本流

###### 二氧化碳（化石源） (`fossil_co2_air`)

真实负责化石碳氧化，不是全部燃料碳或生物份。已核实空气未指明身份仅绑定真实匹配子介质，已知其他空气子介质须另核实身份，不强改介质。

- 选定流：二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 流属性/单位：质量 / kg
- 数量规则：真实化石CO2向空气排放 / N
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每声明的参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_energy`
- 来源：`unsd-cpc3-65229`; `ghg-product-2011`

###### 甲烷 (化石源) (`fossil_methane_air`)

条件真实来源特定燃料放散泄漏逸出等负责化石甲烷，不是全部燃料默认逸出。仅真实匹配用已核实空气未指明，已知不同空气子介质须另核实身份。

- 选定流：甲烷 (化石源) `08a91e70-3ddc-11dd-9610-0050c2490048`
- 流属性/单位：质量 / kg
- 数量规则：真实化石CH4向空气排放 / N
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每声明的参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_energy`
- 来源：`unsd-cpc3-65229`; `ghg-product-2011`

### 过程：容器货物装卸或拖船目标准备交接 (`container_tow_interfaces`)

#### 输入

##### 产品流

###### 交流电 (`handling_ac`)

真实兼容独立计量容器起吊配载转移拖前准备外部交流电，不是船舶船闸供应或已含原生供应方。

- 选定流：交流电 `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- 流属性/单位：低位热值 / MJ
- 数量规则：真实独立码头装卸交流电 / N
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每声明的参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_interfaces`
- 来源：`unsd-cpc3-65229`; `ghg-product-2011`

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

##### 基本流

### 过程：航道船闸资产及完整支持生命周期 (`waterway_support_lifecycle`)

#### 输入

##### 产品流

###### 交流电 (`lock_support_ac`)

仅真实兼容外供计量设施电量按用途全部用户分配，重力水运动不决定全部能源。原生综合航运服务已含电量仅一次替代此精确范围，码头船舶计量独立。

- 选定流：交流电 `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- 流属性/单位：低位热值 / MJ
- 数量规则：真实独立船闸升船泵控制交流电份额 / N
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每声明的参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_waterway`
- 来源：`unsd-cpc3-65229`; `ghg-product-2011`

###### 自来水 (`tap_water`)

仅真实兼容产品供应端口及相关未含配送，闸充水河流取水压载其他工艺水不能默认自来水。

- 选定流：自来水 `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- 流属性/单位：质量 / kg
- 数量规则：真实供应自来水 / N
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每声明的参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_support`
- 来源：`unsd-cpc3-65229`; `ghg-product-2011`

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

###### 废润滑油 (`used_lubricating_oil`)

真实产生端口及另列真实接收处理除非已含，不是全部舱底燃油污泥疏浚物客户目标内容。

- 选定流：废润滑油 `55d93375-7f04-4166-b2a2-88ce929051a5`
- 流属性/单位：质量 / kg
- 数量规则：真实废润滑油产生 / N
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每声明的参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_support`
- 来源：`unsd-cpc3-65229`; `ghg-product-2011`

##### 基本流

## 7. 分配与共产品处理

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| task_strata_and_all_users | 全部节点 | 真实容器化拖船货驳目标拖运及正面有据其他未另分类分别画像，按原任务对象数量质量端口路线距离时间水流闸拖队技术责任等实质因素细分。不作异质任务计数等价或混层平均。优先直接细分计量，共享船驳队码头闸航道生命负荷用全部使用者有据质量空间阻力时间能源容量使用量因果驱动。计数参考不强制按任务或箱等分，经济替代须无物理关系并做敏感性，逐事件份额合一。 | ghg-product-2011 |
| failed_original_task | 全部节点 | 兼容层指纹内先保留因果准备过闸排队拆并协助天气水位等候空船压载返程部分失败拒收救援返工负荷，再仅按正原始合格完成数N归一化一次。不因每闸转箱换拖轮拆队新增完成任务，原始独立有界验收任务仅一次计；不能事后改对象目的地验收消除原失败。N=0无有限强度，失败期间记录保留作因果分配。 | ghg-product-2011 |
| multipurpose_lock_waterway | waterway_support_lifecycle | 先识别真实航运用途范围及河坝其他用途，再按有据物理运行闸次空间时间容量关系在全部真实货运客运休闲其他用户间分航运范围，不把一委托等于完整闸周期或全部施工。计真实拆闸次排队协助及水能库存边界。重力泵送节水复用安排供应方已含事件不同，内部转移不另作外部供应或避免耗水信用，不设统一逐闸货吨水因子。 | bafg-waterways; ghg-product-2011 |
| all_life_period_site | 全部节点 | 真实原生资产生命事件数量按同组该阶段归属使用量 / 有据正全用户总使用量分配，再按兼容N。保留制造安装改装投产维护坞修航道工程更换退役、真实容器拖具周期及跨期库存事件，不假定初始资产免费或统一容器船闸寿命。兼容河段航次场址按归属原生数量和 / 兼容N和聚合，披露真实水闸技术差异，不平均不兼容任务强度。 | ghg-product-2011 |
| native_provider_recovery | 全部节点 | 原生承运租船容器闸码头航道维护处理功能属性单位端口已含生命事件明确。吨公里船时闸次租天费用纯容器不等于一项完成委托，供应量经有据实际活动衔接，不强换功能单位。精确自营覆盖一次替代且保留缺口。内部发电水循环物料回收非额外外购供出，真实对外有用共输出须接收方细分有据分配，不自动给回收循环闸水信用。 | ghg-product-2011 |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_task | inland_navigation | 原始内河任务层合格完成 | 真实一手计量运单供应方记录 | 运行前原始任务ID层指纹、真实货物容器数量质量皮重或全拖运目标配置、内河路线河段端口验收时间、全部船拖轮驳船、真实完成部分失败变更接收谱系兼容N | 原始物理任务规定关联真实签署保管验收及逐河段闸驳队事件，必需层更细兼容指纹，不事后改完成定义 按参考计量口径汇总唯一且已验收的合格产出作为分母，单列不合格事件及其资源责任。参考量保持规定值，仅归属的清单总量除以正分母。 | 计数Item(s)；真实货物容器目标数量；路线距离时间 | 逐事件及期间闭合 | 真实原始任务报告期间航道事件及完整资产阶段 | 真实内河河段船舶拖轮驳船目标船闸升船机码头供应方 | 每声明的参考流 | 签署记录；校准；原生来源；因果分配；不确定性保存各实测操作数的来源及原生口径，注明实际采用的换算或归属依据，以及所供结果是否已按该参考流计量。 |
| cp_energy | inland_navigation | 全部负责航行拖运目标能源直接物种 | 真实一手计量运单供应方记录 | 逐船拖轮目标角色主辅锅炉轴带电池岸供路径、真实燃料配方状态期初期末供应提取燃烧放散泄漏逸出、购买人产权期初库存兼容上游供应充电出处、水流水位方向对地对水速度路线闸排队协助空载模式时间计量、物种相态来源介质供应方范围 | 真实计量库存消耗闭合全部责任方及真实河段模式，期初客户燃料上游无论产权一次，不重复购买提取；直接数量实测来源特定有据估计及不确定性，不用统一河流比例船燃逸出系数 原始观测和对账总量保留其记录口径。负担行只分配仍共享的总量，已归属总量仅除以同队列、同交接点的正合格产出；已与该参考流等效的结果原值沿用。零产出时保留负担并记录去向。各项独立实测交付、排放及移交按各自交接点记录，负担按其适用规则分配。 | 真实原生燃料能源物种单位及状态换算；关联清单行的报告单位：kg (actual_diesel_supply, fossil_co2_air, fossil_methane_air)；MJ (vessel_shore_ac) | 逐事件及期间闭合 | 真实原始任务报告期间航道事件及完整资产阶段 | 真实内河河段船舶拖轮驳船目标船闸升船机码头供应方 | 每声明的参考流 | 签署记录；校准；原生来源；因果分配；不确定性保存各实测操作数的来源及原生口径，注明实际采用的换算或归属依据，以及所供结果是否已按该参考流计量。 |
| cp_interfaces | container_tow_interfaces | 真实容器货物拖船目标准备接口 | 真实一手计量运单供应方记录 | 真实容器类型材质皮重内容起吊配载封识保管验收量、真实拖船驳船目标安排几何排水量吃水受风面积准备检验连解协助接收方、独立装卸计量、物料事件复用周期库存废物回收环境供应方范围 | 采用校准数量真实原始端口验收，货物目标保管区别可复用服务设备新增供应；真实条件物料状态去向字段，不假定每箱任务或全部目标为资产 原始观测和对账总量保留其记录口径。负担行只分配仍共享的总量，已归属总量仅除以同队列、同交接点的正合格产出；已与该参考流等效的结果原值沿用。零产出时保留负担并记录去向。各项独立实测交付、排放及移交按各自交接点记录，负担按其适用规则分配。 | 逐真实原生容器物料能源废物数量任务工况；关联清单行的报告单位：MJ (handling_ac) | 逐事件及期间闭合 | 真实原始任务报告期间航道事件及完整资产阶段 | 真实内河河段船舶拖轮驳船目标船闸升船机码头供应方 | 每声明的参考流 | 签署记录；校准；原生来源；因果分配；不确定性保存各实测操作数的来源及原生口径，注明实际采用的换算或归属依据，以及所供结果是否已按该参考流计量。 |
| cp_waterway | waterway_support_lifecycle | 真实船闸升船航道用途用户水能平衡 | 真实一手计量运单供应方记录 | 真实设施河段闸次升船排队拆并协助事件、航运其他用途全部用户、来源外流流域子介质状态、期初期末蓄水；互斥计量取用含供应但排除独立有据降水其他新增、该其他新增未计入取用；物理供应泵转移关联防重复入流；内部转移复用蒸发损失、泵重力控制能源计量、原生服务量供应方覆盖施工运行维护资源范围 | 按真实兼容实测单位状态端口及互斥取用新增水类闭合真实闸河段事件设施计量蓄水水源目的账；同一物理量供应泵转移不作另一入流，不自动按耗水自来水因子；真实航运用途范围在全部用户分配并仅一次替代精确供应方已含范围 原始观测和对账总量保留其记录口径。负担行只分配仍共享的总量，已归属总量仅除以同队列、同交接点的正合格产出；已与该参考流等效的结果原值沿用。零产出时保留负担并记录去向。 | 真实原生水能设施服务单位状态兼容运行量；关联清单行的报告单位：MJ (lock_support_ac) | 逐事件及期间闭合 | 真实原始任务报告期间航道事件及完整资产阶段 | 真实内河河段船舶拖轮驳船目标船闸升船机码头供应方 | 每声明的参考流 | 签署记录；校准；原生来源；因果分配；不确定性保存各实测操作数的来源及原生口径，注明实际采用的换算或归属依据，以及所供结果是否已按该参考流计量。 |
| cp_support | waterway_support_lifecycle | 真实支持供应废物环境去向 | 真实一手计量运单供应方记录 | 真实配方状态端口供应使用期初期末、船员维护压载清洗坞修疏浚责任、原生数量物种粒径相态来源接收介质、可用回收与废物环境处理范围 | 真实物料去向记录互斥目的、真实河湖潮汐淡水咸淡海水介质；供应资源循环独立、人支持范围不虚构代谢饮食因子 原始观测和对账总量保留其记录口径。负担行只分配仍共享的总量，已归属总量仅除以同队列、同交接点的正合格产出；已与该参考流等效的结果原值沿用。零产出时保留负担并记录去向。各项独立实测交付、排放及移交按各自交接点记录，负担按其适用规则分配。 | 逐真实原生物料废物物种热单位；关联清单行的报告单位：kg (tap_water, used_lubricating_oil) | 逐事件及期间闭合 | 真实原始任务报告期间航道事件及完整资产阶段 | 真实内河河段船舶拖轮驳船目标船闸升船机码头供应方 | 每声明的参考流 | 签署记录；校准；原生来源；因果分配；不确定性保存各实测操作数的来源及原生口径，注明实际采用的换算或归属依据，以及所供结果是否已按该参考流计量。 |
| cp_assets | waterway_support_lifecycle | 完整全用户生命原生承运资产支持服务范围 | 真实一手计量运单供应方记录 | 真实客户目标服务资产角色、资产组次原生数量、制造安装改装投产维护坞修航道工程更换退役初始部件、全用途全用户使用量、真实承运租船容器码头维护处理原生功能单位端口覆盖范围; asset_component_event_id; owning_inventory_row_id; covered_lifecycle_phase; native_assembly_included_scope | 核实真实角色同组使用生命分母及全部用途用户期间，精确原生供应方替代未含事件明确，不计目标制造或费用计数换算 将每个资产部件事件及其已含生命周期阶段唯一对应一个清单行，保留真实整机与独立部件及供应方覆盖范围，同一原生阶段不得在两种卡片角色重复计入。 原始观测和对账总量保留其记录口径。负担行只分配仍共享的总量，已归属总量仅除以同队列、同交接点的正合格产出；已与该参考流等效的结果原值沿用。零产出时保留负担并记录去向。 | 逐真实原生总成事件供应方单位兼容使用量 | 逐事件及期间闭合 | 真实原始任务报告期间航道事件及完整资产阶段 | 真实内河河段船舶拖轮驳船目标船闸升船机码头供应方 | 每声明的参考流 | 签署记录；校准；原生来源；因果分配；不确定性保存各实测操作数的来源及原生口径，注明实际采用的换算或归属依据，以及所供结果是否已按该参考流计量。 |
| cp_expand_other_navigation_energy | inland_navigation | 必须展开身份 other_navigation_energy (inputs/product)：真实其他航行燃料外部能源 | collected_record | requirement_id=other_navigation_energy; process_id=inland_navigation; required_direction=inputs; required_flow_type=product; original_collection_protocol=cp_energy; applicability_evidence; occurrence_event_id; concrete_row_id; physical_identity; formulation_or_species; phase; carbon_origin; particle_fraction; source_compartment; receiving_compartment; supply_or_handover_gate; provider_covered_cells; asset_component_event_and_lifecycle_phase; native_property; native_unit; measured_native_quantity; source_record_id; allocation_all_users; normalization_denominator; per_identity_amount_calculation; verification_evidence; unresolved_reason; occurrence_to_row_reconciliation; carrier_and_supply_state; meter_id; integrated_energy_or_power_time; fuel_as_received_quantity; heating_value_basis; supply_return_state; responsible_failure_and_readiness; complete_provider_exclusion; applicability_decision_record; covered_concrete_rows; excluded_occurrence_reason; completion_evidence; observed_quantity_state; conversion_or_allocation_evidence | 条件真实燃料混合替代引燃直流热电池供应身份状态端口原生数量，不默认同时存在。真实期初客户持有消耗能源保留供应充电出处上游一次，内部转换目标工业工作独立。 本范围是必须落实的身份识别要求，不是交换流。使用原节点采集协议及其记录，先按真实身份、端口及独立功能拆分，再将保留的数量、基准及证据规则分别用于各兼容具体行。不得将异质身份合并数量或从总括名称推断原生属性单位。未发生须有证据，适用性或身份未知则阻止完成。 以下采集条件仅限本项 inputs/product 的身份与交接点（真实其他航行燃料外部能源）。存在未被完整供应方覆盖的实际计量电力、购入热冷或消耗燃料时启用。区分载能体、供应状态和独立仪表，燃料组成及收到基数量与有用热分别识别；积分能量不再乘时长，功率须有时间积分证据；燃料换能量须匹配实际热值基准，供热须有供回状态。纳入应分摊待机、空载、失败和返工职责；总表仅协调分项，不再次相加。 每项适用性判断须留证。经证实不发生仅关闭所述范围和时段，缺记录仍未解决。发生的要求须将全部事件映射到具体row ID及相容原生数量，或精确映射至已覆盖行和供应方责任，并逐项说明排除理由。证据须覆盖身份、支持单位、计算、原始记录及全部去向；既有与新增分支对同一事件互斥覆盖，协议本身不作为交换。完成须无未分配事件、无重复覆盖、无相关数量或身份未决项。按有证据的实际分支采集原始字段。不适用的操作数须关联分支判定，适用但缺乏实测或依据的数量登记待决。 | 实测交付状态下的载能体量；能量采用有记录的仪表或热值口径 | 每次真实事件及每项有证据的未发生判断 | 完整声明队列及归属资产寿命关联事件 | 仅本过程真实责任场所及供应方 | 先对账原生事件总量，仅汇总身份、状态、单位、交接点及期间均相容的量。按相应计算规则逐行核算一次：只分配仍共享的负担，目标总量仅除以同口径的正合格产出；等效每参考流数值原值沿用，零产出期间不作除法并保留处置记录。 | 保留仪表期间、供应状态及交接点。积分能量已含时长；仅在对应路线由功率和实测时长，或相容燃料量与有据热值计算能量。区分燃料提取、有用热冷交付及已覆盖的上游阶段。 对上述具体身份及相容输入口径，仅在数量的归属和归一化状态与下式前提匹配时使用该规则：逐真实原生供应消耗分配 / N 保留原始凭据、实际采用的系数和结果单位。数值来源模式：calculated_value；适用范围：site_specific；归一化基准：每声明的参考流；基准类型：reference_flow；证据类型：calculated_from_collection；采集协议：cp_energy；来源：unsd-cpc3-65229; ghg-product-2011。须有原始记录、精确原生支持及逐具体行核验；这些规则不提供缺失身份或数值。 完成判据：check_occurrence_completion。 |
| cp_expand_other_navigation_species | inland_navigation | 必须展开身份 other_navigation_species (outputs/elementary)：真实航行拖运物质向声明介质释放 | collected_record | requirement_id=other_navigation_species; process_id=inland_navigation; required_direction=outputs; required_flow_type=elementary; original_collection_protocol=cp_energy; applicability_evidence; occurrence_event_id; concrete_row_id; physical_identity; formulation_or_species; phase; carbon_origin; particle_fraction; source_compartment; receiving_compartment; supply_or_handover_gate; provider_covered_cells; asset_component_event_and_lifecycle_phase; native_property; native_unit; measured_native_quantity; source_record_id; allocation_all_users; normalization_denominator; per_identity_amount_calculation; verification_evidence; unresolved_reason; occurrence_to_row_reconciliation; substance_identity; chemical_form; environmental_compartment; carbon_origin; particle_fraction_or_count_basis; measured_or_calculated_release; species_conversion_evidence; applicability_decision_record; covered_concrete_rows; excluded_occurrence_reason; completion_evidence; observed_quantity_state; conversion_or_allocation_evidence | 全部负责船拖轮目标运输来源真实化合物粒径相态来源介质，不用总NOx/SOx/CO2当量或把全部留存油当排放。保留淡水咸淡海水及真实空气子介质。 本范围是必须落实的身份识别要求，不是交换流。使用原节点采集协议及其记录，先按真实身份、端口及独立功能拆分，再将保留的数量、基准及证据规则分别用于各兼容具体行。不得将异质身份合并数量或从总括名称推断原生属性单位。未发生须有证据，适用性或身份未知则阻止完成。 以下采集条件仅限本项 outputs/elementary 的身份与交接点（真实航行拖运物质向声明介质释放）。仅对进入已记录接收介质且有观测或适用计算依据的实际释放启用。记录具体物质及形态、来源或接收介质、适用的化石或生物碳来源、适用的粒径组分或粒子数粒径基础及采样期；保留元素与分子口径，换算须有化学计量和相容物种证据。收集物流中的污染物在实际环境排放边界前归接收物流，不用CO2、NOx、VOC、COD或泛颗粒物流代替缺失物种。 每项适用性判断须留证。经证实不发生仅关闭所述范围和时段，缺记录仍未解决。发生的要求须将全部事件映射到具体row ID及相容原生数量，或精确映射至已覆盖行和供应方责任，并逐项说明排除理由。证据须覆盖身份、支持单位、计算、原始记录及全部去向；既有与新增分支对同一事件互斥覆盖，协议本身不作为交换。完成须无未分配事件、无重复覆盖、无相关数量或身份未决项。按有证据的实际分支采集原始字段。不适用的操作数须关联分支判定，适用但缺乏实测或依据的数量登记待决。 | 本物质、资源或物理排放在实际环境介质的已核实原生属性与单位 | 每次真实事件及每项有证据的未发生判断 | 完整声明队列及归属资产寿命关联事件 | 仅本过程真实责任场所及供应方 | 先对账原生事件总量，仅汇总身份、状态、单位、交接点及期间均相容的量。按相应计算规则逐行核算一次：只分配仍共享的负担，目标总量仅除以同口径的正合格产出；等效每参考流数值原值沿用，零产出期间不作除法并保留处置记录。 | 采样或活动量及适用因子须对应物种、相态、来源和环境介质。按实际对象区分质量、粒子数、热量及元素当量；换算须有依据，重叠总量不可相加。 对上述具体身份及相容输入口径，仅在数量的归属和归一化状态与下式前提匹配时使用该规则：逐真实互斥直接释放 / N 保留原始凭据、实际采用的系数和结果单位。数值来源模式：calculated_value；适用范围：site_specific；归一化基准：每声明的参考流；基准类型：reference_flow；证据类型：calculated_from_collection；采集协议：cp_energy；来源：unsd-cpc3-65229; ghg-product-2011。须有原始记录、精确原生支持及逐具体行核验；这些规则不提供缺失身份或数值。 完成判据：check_occurrence_completion。 |
| cp_expand_actual_container_supply | container_tow_interfaces | 必须展开身份 actual_container_supply (inputs/product)：真实可复用运输容器或容器生命事件 | collected_record | requirement_id=actual_container_supply; process_id=container_tow_interfaces; required_direction=inputs; required_flow_type=product; original_collection_protocol=cp_interfaces; applicability_evidence; occurrence_event_id; concrete_row_id; physical_identity; formulation_or_species; phase; carbon_origin; particle_fraction; source_compartment; receiving_compartment; supply_or_handover_gate; provider_covered_cells; asset_component_event_and_lifecycle_phase; native_property; native_unit; measured_native_quantity; source_record_id; allocation_all_users; normalization_denominator; per_identity_amount_calculation; verification_evidence; unresolved_reason; occurrence_to_row_reconciliation; asset_or_reusable_id; model_configuration; included_initial_components; lifecycle_phase; manufacture_native_quantity; target_duty; all_user_same_cohort_lifetime_duty; replacement_event; provider_coverage_cells; applicability_decision_record; covered_concrete_rows; excluded_occurrence_reason; completion_evidence; observed_quantity_state; conversion_or_allocation_evidence; supply_or_service_gate; accepted_service_demand; provider_functional_unit; provider_intensity_basis; covered_lifecycle_stages | 条件精确容器类型材质状态原生端口，制造初始部件区别修理清洗返还损失退役及真实全用户周期。货物内容皮重独立，不假定ISO尺寸TEU换算一次用或每箱一任务。综合租用服务覆盖替代精确范围。 本范围是必须落实的身份识别要求，不是交换流。使用原节点采集协议及其记录，先按真实身份、端口及独立功能拆分，再将保留的数量、基准及证据规则分别用于各兼容具体行。不得将异质身份合并数量或从总括名称推断原生属性单位。未发生须有证据，适用性或身份未知则阻止完成。 对本项规定的实体资产或周转品，核实供应交接点、初始部件以及实际替换、维护、清洗、失败和退役记录。租赁或综合供应合同须核实覆盖范围；本项包含已交付服务时按实际验收的原生需求计量，仅另行追溯未覆盖的资产阶段。直接建模资产按同队列目标作业量与全用户有据正寿命作业量之比分配，禁止将整个设施归给一个服务。 每项适用性判断须留证。经证实不发生仅关闭所述范围和时段，缺记录仍未解决。发生的要求须将全部事件映射到具体row ID及相容原生数量，或精确映射至已覆盖行和供应方责任，并逐项说明排除理由。证据须覆盖身份、支持单位、计算、原始记录及全部去向；既有与新增分支对同一事件互斥覆盖，协议本身不作为交换。完成须无未分配事件、无重复覆盖、无相关数量或身份未决项。按有证据的实际分支采集原始字段。不适用的操作数须关联分支判定，适用但缺乏实测或依据的数量登记待决。 | 实体资产或周转品按已核实的制造或供应单位；同一队列的相容作业量；范围内的交付服务用其原生功能单位 | 每次真实事件及每项有证据的未发生判断 | 完整声明队列及归属资产寿命关联事件 | 仅本过程真实责任场所及供应方 | 先对账原生事件总量，仅汇总身份、状态、单位、交接点及期间均相容的量。按相应计算规则逐行核算一次：只分配仍共享的负担，目标总量仅除以同口径的正合格产出；等效每参考流数值原值沿用，零产出期间不作除法并保留处置记录。 | 实体资产按有记录的供应交接量乘目标作业量与同队列全用户正寿命作业量之比，保留配置、投运、更换及退役或剩余寿命记录。范围内如有已交付服务，按已核实原生强度乘相容交付需求，留存覆盖凭据，未覆盖阶段单列。 对该交接点相容的资产量或已独立核实的服务结果，仅在数量的归属和归一化状态与下式前提匹配时使用该规则：真实全用户容器事件归属数量 / N 保留原始凭据、实际采用的系数和结果单位。数值来源模式：calculated_value；适用范围：site_specific；归一化基准：每声明的参考流；基准类型：reference_flow；证据类型：calculated_from_collection；采集协议：cp_interfaces；来源：unsd-cpc3-65229; ghg-product-2011。须有原始记录、精确原生支持及逐具体行核验；这些规则不提供缺失身份或数值。 完成判据：check_occurrence_completion。 |
| cp_expand_actual_interface_material | container_tow_interfaces | 必须展开身份 actual_interface_material (inputs/product)：真实容器货物拖前准备系固物料 | collected_record | requirement_id=actual_interface_material; process_id=container_tow_interfaces; required_direction=inputs; required_flow_type=product; original_collection_protocol=cp_interfaces; applicability_evidence; occurrence_event_id; concrete_row_id; physical_identity; formulation_or_species; phase; carbon_origin; particle_fraction; source_compartment; receiving_compartment; supply_or_handover_gate; provider_covered_cells; asset_component_event_and_lifecycle_phase; native_property; native_unit; measured_native_quantity; source_record_id; allocation_all_users; normalization_denominator; per_identity_amount_calculation; verification_evidence; unresolved_reason; occurrence_to_row_reconciliation; operation_record; material_sku; formulation_grade_state; independent_function; supplier; package_tare; opening_stock; net_receipts; unused_returns; closing_stock; failed_use; destination; applicability_decision_record; covered_concrete_rows; excluded_occurrence_reason; completion_evidence; observed_quantity_state; conversion_or_allocation_evidence | 本行纳真实新增耗用包装封条垫料系固清洗或独立连接维修材料的配方状态端口。独立周转容器及其生命周期事件归actual_container_supply，独立可复用拖具索具总成及其生命周期事件归actual_service_assets，不在本行重复完整制造。总成已含初始部件与独立更换材料阶段覆盖互斥，运输准备不是客户目标制造。 本范围是必须落实的身份识别要求，不是交换流。使用原节点采集协议及其记录，先按真实身份、端口及独立功能拆分，再将保留的数量、基准及证据规则分别用于各兼容具体行。不得将异质身份合并数量或从总括名称推断原生属性单位。未发生须有证据，适用性或身份未知则阻止完成。 以下采集条件仅限本项 inputs/product 的身份与交接点（真实容器货物拖前准备系固物料）。仅对实际发生的所述作业及独立消耗SKU或实物启用。记录材料或配方、等级状态、功能、供应方、扣包装皮重后的净量、库存变动、未用退回和去向。独立供应的包装衬材按材料及一次性或复用状态区分；完整配方或物理总成保留一个身份，组成信息不相加，不同外购品不得共用汇总数量。纳入失败使用、维护及返工，记录真实消耗而非仅采购量。 每项适用性判断须留证。经证实不发生仅关闭所述范围和时段，缺记录仍未解决。发生的要求须将全部事件映射到具体row ID及相容原生数量，或精确映射至已覆盖行和供应方责任，并逐项说明排除理由。证据须覆盖身份、支持单位、计算、原始记录及全部去向；既有与新增分支对同一事件互斥覆盖，协议本身不作为交换。完成须无未分配事件、无重复覆盖、无相关数量或身份未决项。按有证据的实际分支采集原始字段。不适用的操作数须关联分支判定，适用但缺乏实测或依据的数量登记待决。 | 实际品项、配方或物件在规定交接点及状态下的原生数量 | 每次真实事件及每项有证据的未发生判断 | 完整声明队列及归属资产寿命关联事件 | 仅本过程真实责任场所及供应方 | 先对账原生事件总量，仅汇总身份、状态、单位、交接点及期间均相容的量。按相应计算规则逐行核算一次：只分配仍共享的负担，目标总量仅除以同口径的正合格产出；等效每参考流数值原值沿用，零产出期间不作除法并保留处置记录。 | 逐批核对收货、期初期末、退回、耗用及互斥去向。件数或体积折质量须有单件质量或相容状态密度依据；产品身份以外的包装和衬材独立登记。 对上述具体身份及相容输入口径，仅在数量的归属和归一化状态与下式前提匹配时使用该规则：逐真实归属物料供应 / N 保留原始凭据、实际采用的系数和结果单位。数值来源模式：calculated_value；适用范围：site_specific；归一化基准：每声明的参考流；基准类型：reference_flow；证据类型：calculated_from_collection；采集协议：cp_interfaces；来源：unsd-cpc3-65229; ghg-product-2011。须有原始记录、精确原生支持及逐具体行核验；这些规则不提供缺失身份或数值。 完成判据：check_occurrence_completion。 |
| cp_expand_interface_waste | container_tow_interfaces | 必须展开身份 interface_waste (outputs/waste)：真实容器货物拖运接口产生废物 | collected_record | requirement_id=interface_waste; process_id=container_tow_interfaces; required_direction=outputs; required_flow_type=waste; original_collection_protocol=cp_interfaces; applicability_evidence; occurrence_event_id; concrete_row_id; physical_identity; formulation_or_species; phase; carbon_origin; particle_fraction; source_compartment; receiving_compartment; supply_or_handover_gate; provider_covered_cells; asset_component_event_and_lifecycle_phase; native_property; native_unit; measured_native_quantity; source_record_id; allocation_all_users; normalization_denominator; per_identity_amount_calculation; verification_evidence; unresolved_reason; occurrence_to_row_reconciliation; waste_origin_event; material_or_true_mixture; moisture_basis; container_tare; opening_waste_stock; generated_waste; received_waste; handover_quantity; closing_waste_stock; onsite_treatment; receiver_id; applicability_decision_record; covered_concrete_rows; excluded_occurrence_reason; completion_evidence; observed_quantity_state; conversion_or_allocation_evidence | 仅真实废物状态组成状态接收方的受污货物收集残留清洗水退役容器拖缆。可用返还目标容器回收货不默认废物，环境越界独立。 本范围是必须落实的身份识别要求，不是交换流。使用原节点采集协议及其记录，先按真实身份、端口及独立功能拆分，再将保留的数量、基准及证据规则分别用于各兼容具体行。不得将异质身份合并数量或从总括名称推断原生属性单位。未发生须有证据，适用性或身份未知则阻止完成。 以下采集条件仅限本项 outputs/waste 的身份与交接点（真实容器货物拖运接口产生废物）。本过程实际产生或接收所述废物时启用。记录材料或配方或真实共同收集混合物、干湿状态、容器皮重、来源事件、存量、交接关口及实际接收者；核对产生量+期初库存+接收量=交出量+期末库存+另列现场处理量。分收的不同废物分行，真实接收混合物可为一行，其组分仅作不可相加审计；有用回收、客户保留物与废物去向分开，不自动给替代抵扣。 每项适用性判断须留证。经证实不发生仅关闭所述范围和时段，缺记录仍未解决。发生的要求须将全部事件映射到具体row ID及相容原生数量，或精确映射至已覆盖行和供应方责任，并逐项说明排除理由。证据须覆盖身份、支持单位、计算、原始记录及全部去向；既有与新增分支对同一事件互斥覆盖，协议本身不作为交换。完成须无未分配事件、无重复覆盖、无相关数量或身份未决项。按有证据的实际分支采集原始字段。不适用的操作数须关联分支判定，适用但缺乏实测或依据的数量登记待决。 | 接收方验收的具体废物或实际混合收集物在实测状态下的原生数量 | 每次真实事件及每项有证据的未发生判断 | 完整声明队列及归属资产寿命关联事件 | 仅本过程真实责任场所及供应方 | 先对账原生事件总量，仅汇总身份、状态、单位、交接点及期间均相容的量。按相应计算规则逐行核算一次：只分配仍共享的负担，目标总量仅除以同口径的正合格产出；等效每参考流数值原值沿用，零产出期间不作除法并保留处置记录。 | 以接收记录核对产生、库存、场内处理和实测交付。混合物流量与组分测量分开；干湿基或质量体积换算须有相容组成或密度。接收转移和环境直排按不同交接点记录。 对上述具体身份及相容输入口径，仅在数量的归属和归一化状态与下式前提匹配时使用该规则：逐真实互斥废物产生 / N 保留原始凭据、实际采用的系数和结果单位。数值来源模式：calculated_value；适用范围：site_specific；归一化基准：每声明的参考流；基准类型：reference_flow；证据类型：calculated_from_collection；采集协议：cp_interfaces；来源：unsd-cpc3-65229; ghg-product-2011。须有原始记录、精确原生支持及逐具体行核验；这些规则不提供缺失身份或数值。 完成判据：check_occurrence_completion。 |
| cp_expand_actual_support_materials | waterway_support_lifecycle | 必须展开身份 actual_support_materials (inputs/product)：真实船舶航道船员支持供应 | collected_record | requirement_id=actual_support_materials; process_id=waterway_support_lifecycle; required_direction=inputs; required_flow_type=product; original_collection_protocol=cp_support; applicability_evidence; occurrence_event_id; concrete_row_id; physical_identity; formulation_or_species; phase; carbon_origin; particle_fraction; source_compartment; receiving_compartment; supply_or_handover_gate; provider_covered_cells; asset_component_event_and_lifecycle_phase; native_property; native_unit; measured_native_quantity; source_record_id; allocation_all_users; normalization_denominator; per_identity_amount_calculation; verification_evidence; unresolved_reason; occurrence_to_row_reconciliation; operation_record; material_sku; formulation_grade_state; independent_function; supplier; package_tare; opening_stock; net_receipts; unused_returns; closing_stock; failed_use; destination; applicability_decision_record; covered_concrete_rows; excluded_occurrence_reason; completion_evidence; observed_quantity_state; conversion_or_allocation_evidence | 真实润滑处理防污制冷剂耗材船员供应航道维护物料，具真实配方端口。声明人支持边界不虚构代谢饮食因子，目标货物原始生产排除。 本范围是必须落实的身份识别要求，不是交换流。使用原节点采集协议及其记录，先按真实身份、端口及独立功能拆分，再将保留的数量、基准及证据规则分别用于各兼容具体行。不得将异质身份合并数量或从总括名称推断原生属性单位。未发生须有证据，适用性或身份未知则阻止完成。 以下采集条件仅限本项 inputs/product 的身份与交接点（真实船舶航道船员支持供应）。仅对实际发生的所述作业及独立消耗SKU或实物启用。记录材料或配方、等级状态、功能、供应方、扣包装皮重后的净量、库存变动、未用退回和去向。独立供应的包装衬材按材料及一次性或复用状态区分；完整配方或物理总成保留一个身份，组成信息不相加，不同外购品不得共用汇总数量。纳入失败使用、维护及返工，记录真实消耗而非仅采购量。 每项适用性判断须留证。经证实不发生仅关闭所述范围和时段，缺记录仍未解决。发生的要求须将全部事件映射到具体row ID及相容原生数量，或精确映射至已覆盖行和供应方责任，并逐项说明排除理由。证据须覆盖身份、支持单位、计算、原始记录及全部去向；既有与新增分支对同一事件互斥覆盖，协议本身不作为交换。完成须无未分配事件、无重复覆盖、无相关数量或身份未决项。按有证据的实际分支采集原始字段。不适用的操作数须关联分支判定，适用但缺乏实测或依据的数量登记待决。 | 实际品项、配方或物件在规定交接点及状态下的原生数量 | 每次真实事件及每项有证据的未发生判断 | 完整声明队列及归属资产寿命关联事件 | 仅本过程真实责任场所及供应方 | 先对账原生事件总量，仅汇总身份、状态、单位、交接点及期间均相容的量。按相应计算规则逐行核算一次：只分配仍共享的负担，目标总量仅除以同口径的正合格产出；等效每参考流数值原值沿用，零产出期间不作除法并保留处置记录。 | 逐批核对收货、期初期末、退回、耗用及互斥去向。件数或体积折质量须有单件质量或相容状态密度依据；产品身份以外的包装和衬材独立登记。 对上述具体身份及相容输入口径，仅在数量的归属和归一化状态与下式前提匹配时使用该规则：逐真实归属物料供应 / N 保留原始凭据、实际采用的系数和结果单位。数值来源模式：calculated_value；适用范围：site_specific；归一化基准：每声明的参考流；基准类型：reference_flow；证据类型：calculated_from_collection；采集协议：cp_support；来源：unsd-cpc3-65229; ghg-product-2011。须有原始记录、精确原生支持及逐具体行核验；这些规则不提供缺失身份或数值。 完成判据：check_occurrence_completion。 |
| cp_expand_actual_service_assets | waterway_support_lifecycle | 必须展开身份 actual_service_assets (inputs/product)：真实船舶可复用拖具船闸航道港口生命周期事件 | collected_record | requirement_id=actual_service_assets; process_id=waterway_support_lifecycle; required_direction=inputs; required_flow_type=product; original_collection_protocol=cp_assets; applicability_evidence; occurrence_event_id; concrete_row_id; physical_identity; formulation_or_species; phase; carbon_origin; particle_fraction; source_compartment; receiving_compartment; supply_or_handover_gate; provider_covered_cells; asset_component_event_and_lifecycle_phase; native_property; native_unit; measured_native_quantity; source_record_id; allocation_all_users; normalization_denominator; per_identity_amount_calculation; verification_evidence; unresolved_reason; occurrence_to_row_reconciliation; asset_or_reusable_id; model_configuration; included_initial_components; lifecycle_phase; manufacture_native_quantity; target_duty; all_user_same_cohort_lifetime_duty; replacement_event; provider_coverage_cells; applicability_decision_record; covered_concrete_rows; excluded_occurrence_reason; completion_evidence; observed_quantity_state; conversion_or_allocation_evidence; supply_or_service_gate; accepted_service_demand; provider_functional_unit; provider_intensity_basis; covered_lifecycle_stages | 逐真实船舶驳船可复用拖具索具总成及船闸航道港口完整原生总成事件端口未含生命周期阶段，采用同组全部用户作业及多用途航运份额。独立运输容器供应及生命周期事件由container_tow_interfaces的actual_container_supply负责，本行不重复。新增耗用或维修材料仅在总成未覆盖阶段归actual_interface_material，各资产部件事件及已含阶段跨节点只分配一次。客户被移目标制造不是服务资产，真实供应服务驳船设备独立。 本范围是必须落实的身份识别要求，不是交换流。使用原节点采集协议及其记录，先按真实身份、端口及独立功能拆分，再将保留的数量、基准及证据规则分别用于各兼容具体行。不得将异质身份合并数量或从总括名称推断原生属性单位。未发生须有证据，适用性或身份未知则阻止完成。 对本项规定的实体资产或周转品，核实供应交接点、初始部件以及实际替换、维护、清洗、失败和退役记录。租赁或综合供应合同须核实覆盖范围；本项包含已交付服务时按实际验收的原生需求计量，仅另行追溯未覆盖的资产阶段。直接建模资产按同队列目标作业量与全用户有据正寿命作业量之比分配，禁止将整个设施归给一个服务。 每项适用性判断须留证。经证实不发生仅关闭所述范围和时段，缺记录仍未解决。发生的要求须将全部事件映射到具体row ID及相容原生数量，或精确映射至已覆盖行和供应方责任，并逐项说明排除理由。证据须覆盖身份、支持单位、计算、原始记录及全部去向；既有与新增分支对同一事件互斥覆盖，协议本身不作为交换。完成须无未分配事件、无重复覆盖、无相关数量或身份未决项。按有证据的实际分支采集原始字段。不适用的操作数须关联分支判定，适用但缺乏实测或依据的数量登记待决。 | 实体资产或周转品按已核实的制造或供应单位；同一队列的相容作业量；范围内的交付服务用其原生功能单位 | 每次真实事件及每项有证据的未发生判断 | 完整声明队列及归属资产寿命关联事件 | 仅本过程真实责任场所及供应方 | 先对账原生事件总量，仅汇总身份、状态、单位、交接点及期间均相容的量。按相应计算规则逐行核算一次：只分配仍共享的负担，目标总量仅除以同口径的正合格产出；等效每参考流数值原值沿用，零产出期间不作除法并保留处置记录。 | 实体资产按有记录的供应交接量乘目标作业量与同队列全用户正寿命作业量之比，保留配置、投运、更换及退役或剩余寿命记录。范围内如有已交付服务，按已核实原生强度乘相容交付需求，留存覆盖凭据，未覆盖阶段单列。 对该交接点相容的资产量或已独立核实的服务结果，仅在数量的归属和归一化状态与下式前提匹配时使用该规则：真实用途全用户生命分配数量 / N 保留原始凭据、实际采用的系数和结果单位。数值来源模式：calculated_value；适用范围：site_specific；归一化基准：每声明的参考流；基准类型：reference_flow；证据类型：calculated_from_collection；采集协议：cp_assets；来源：unsd-cpc3-65229; ghg-product-2011。须有原始记录、精确原生支持及逐具体行核验；这些规则不提供缺失身份或数值。 完成判据：check_occurrence_completion。 |
| cp_expand_waterway_native_service | waterway_support_lifecycle | 必须展开身份 waterway_native_service (inputs/product)：真实原生船闸升船航道航运维护服务 | collected_record | requirement_id=waterway_native_service; process_id=waterway_support_lifecycle; required_direction=inputs; required_flow_type=product; original_collection_protocol=cp_waterway; applicability_evidence; occurrence_event_id; concrete_row_id; physical_identity; formulation_or_species; phase; carbon_origin; particle_fraction; source_compartment; receiving_compartment; supply_or_handover_gate; provider_covered_cells; asset_component_event_and_lifecycle_phase; native_property; native_unit; measured_native_quantity; source_record_id; allocation_all_users; normalization_denominator; per_identity_amount_calculation; verification_evidence; unresolved_reason; occurrence_to_row_reconciliation; provider_contract; independent_function; provider_gates; native_functional_unit; delivered_quantity; covered_process_phase_cells; uncovered_foreground_rows; applicability_decision_record; covered_concrete_rows; excluded_occurrence_reason; completion_evidence; observed_quantity_state; conversion_or_allocation_evidence; provider_functional_unit; accepted_service_demand; provider_intensity_basis; covered_service_stages | 真实原生服务端口事件范围、用途全用户份额及真实闸次升船排队拆并维护单位。费用一闸次不等于完成委托，内含能源物料水资产范围仅一次替代精确自营范围。 本范围是必须落实的身份识别要求，不是交换流。使用原节点采集协议及其记录，先按真实身份、端口及独立功能拆分，再将保留的数量、基准及证据规则分别用于各兼容具体行。不得将异质身份合并数量或从总括名称推断原生属性单位。未发生须有证据，适用性或身份未知则阻止完成。 以下采集条件仅限本项 inputs/product 的身份与交接点（真实原生船闸升船航道航运维护服务）。仅在本PCR范围内实际委托独立功能时启用。记录合同、交付服务功能、关口、原生功能单位、实际交付量及具体覆盖的过程和寿命阶段；逐项与自营活动比对，完整供应方或未覆盖前景活动仅计一次。不用金额、材料质量或假设件数替代真实功能；同一最终服务不通过外部最终产品供应方递归重复计入。 每项适用性判断须留证。经证实不发生仅关闭所述范围和时段，缺记录仍未解决。发生的要求须将全部事件映射到具体row ID及相容原生数量，或精确映射至已覆盖行和供应方责任，并逐项说明排除理由。证据须覆盖身份、支持单位、计算、原始记录及全部去向；既有与新增分支对同一事件互斥覆盖，协议本身不作为交换。完成须无未分配事件、无重复覆盖、无相关数量或身份未决项。按有证据的实际分支采集原始字段。不适用的操作数须关联分支判定，适用但缺乏实测或依据的数量登记待决。 | 已核实的合同交付功能单位；仅独立可计数且已验收的结果使用 Item(s) | 每次真实事件及每项有证据的未发生判断 | 完整声明队列及归属资产寿命关联事件 | 仅本过程真实责任场所及供应方 | 先对账原生事件总量，仅汇总身份、状态、单位、交接点及期间均相容的量。按相应计算规则逐行核算一次：只分配仍共享的负担，目标总量仅除以同口径的正合格产出；等效每参考流数值原值沿用，零产出期间不作除法并保留处置记录。 | 按指定交接点实际验收量计量。仅在单位强度换算为总负担时，以供应方强度乘同一原生单位的需求量。保留合同范围、验收、原生单位及覆盖阶段记录。仅按时间交付的功能以时长计量。 对按合同口径已验收的服务，仅在数量的归属和归一化状态与下式前提匹配时使用该规则：真实物理设施供应方归属数量 / N 保留原始凭据、实际采用的系数和结果单位。数值来源模式：calculated_value；适用范围：site_specific；归一化基准：每声明的参考流；基准类型：reference_flow；证据类型：calculated_from_collection；采集协议：cp_waterway；来源：unsd-cpc3-65229; ghg-product-2011。须有原始记录、精确原生支持及逐具体行核验；这些规则不提供缺失身份或数值。 完成判据：check_occurrence_completion。 |
| cp_expand_other_native_provider | waterway_support_lifecycle | 必须展开身份 other_native_provider (inputs/product)：真实原生承运租船码头支持服务 | collected_record | requirement_id=other_native_provider; process_id=waterway_support_lifecycle; required_direction=inputs; required_flow_type=product; original_collection_protocol=cp_assets; applicability_evidence; occurrence_event_id; concrete_row_id; physical_identity; formulation_or_species; phase; carbon_origin; particle_fraction; source_compartment; receiving_compartment; supply_or_handover_gate; provider_covered_cells; asset_component_event_and_lifecycle_phase; native_property; native_unit; measured_native_quantity; source_record_id; allocation_all_users; normalization_denominator; per_identity_amount_calculation; verification_evidence; unresolved_reason; occurrence_to_row_reconciliation; provider_contract; independent_function; provider_gates; native_functional_unit; delivered_quantity; covered_process_phase_cells; uncovered_foreground_rows; applicability_decision_record; covered_concrete_rows; excluded_occurrence_reason; completion_evidence; observed_quantity_state; conversion_or_allocation_evidence; provider_functional_unit; accepted_service_demand; provider_intensity_basis; covered_service_stages | 条件真实货运拖运租船容器码头协助检验维护处理功能原生端口数量范围，不是船舶制造账单或强制吨公里小时等于任务身份。 本范围是必须落实的身份识别要求，不是交换流。使用原节点采集协议及其记录，先按真实身份、端口及独立功能拆分，再将保留的数量、基准及证据规则分别用于各兼容具体行。不得将异质身份合并数量或从总括名称推断原生属性单位。未发生须有证据，适用性或身份未知则阻止完成。 以下采集条件仅限本项 inputs/product 的身份与交接点（真实原生承运租船码头支持服务）。仅在本PCR范围内实际委托独立功能时启用。记录合同、交付服务功能、关口、原生功能单位、实际交付量及具体覆盖的过程和寿命阶段；逐项与自营活动比对，完整供应方或未覆盖前景活动仅计一次。不用金额、材料质量或假设件数替代真实功能；同一最终服务不通过外部最终产品供应方递归重复计入。 每项适用性判断须留证。经证实不发生仅关闭所述范围和时段，缺记录仍未解决。发生的要求须将全部事件映射到具体row ID及相容原生数量，或精确映射至已覆盖行和供应方责任，并逐项说明排除理由。证据须覆盖身份、支持单位、计算、原始记录及全部去向；既有与新增分支对同一事件互斥覆盖，协议本身不作为交换。完成须无未分配事件、无重复覆盖、无相关数量或身份未决项。按有证据的实际分支采集原始字段。不适用的操作数须关联分支判定，适用但缺乏实测或依据的数量登记待决。 | 已核实的合同交付功能单位；仅独立可计数且已验收的结果使用 Item(s) | 每次真实事件及每项有证据的未发生判断 | 完整声明队列及归属资产寿命关联事件 | 仅本过程真实责任场所及供应方 | 先对账原生事件总量，仅汇总身份、状态、单位、交接点及期间均相容的量。按相应计算规则逐行核算一次：只分配仍共享的负担，目标总量仅除以同口径的正合格产出；等效每参考流数值原值沿用，零产出期间不作除法并保留处置记录。 | 按指定交接点实际验收量计量。仅在单位强度换算为总负担时，以供应方强度乘同一原生单位的需求量。保留合同范围、验收、原生单位及覆盖阶段记录。仅按时间交付的功能以时长计量。 对按合同口径已验收的服务，仅在数量的归属和归一化状态与下式前提匹配时使用该规则：真实供应方原生数量 / N 保留原始凭据、实际采用的系数和结果单位。数值来源模式：calculated_value；适用范围：site_specific；归一化基准：每声明的参考流；基准类型：reference_flow；证据类型：calculated_from_collection；采集协议：cp_assets；来源：unsd-cpc3-65229; ghg-product-2011。须有原始记录、精确原生支持及逐具体行核验；这些规则不提供缺失身份或数值。 完成判据：check_occurrence_completion。 |
| cp_expand_actual_water_resource | waterway_support_lifecycle | 必须展开身份 actual_water_resource (inputs/elementary)：真实声明来源直接水资源取用 | collected_record | requirement_id=actual_water_resource; process_id=waterway_support_lifecycle; required_direction=inputs; required_flow_type=elementary; original_collection_protocol=cp_waterway; applicability_evidence; occurrence_event_id; concrete_row_id; physical_identity; formulation_or_species; phase; carbon_origin; particle_fraction; source_compartment; receiving_compartment; supply_or_handover_gate; provider_covered_cells; asset_component_event_and_lifecycle_phase; native_property; native_unit; measured_native_quantity; source_record_id; allocation_all_users; normalization_denominator; per_identity_amount_calculation; verification_evidence; unresolved_reason; occurrence_to_row_reconciliation; water_source_or_receiver; water_state; meter_period; treatment_owner; water_mass; mixture_volume; conversion_evidence; balance_residual; applicability_decision_record; covered_concrete_rows; excluded_occurrence_reason; completion_evidence; observed_quantity_state; conversion_or_allocation_evidence | 设施充泵压载冷却等真实取用具来源子介质状态，跨流域调水外流留存另记，不自动等于耗用或把内部循环当新取用，自来水产品独立。 本范围是必须落实的身份识别要求，不是交换流。使用原节点采集协议及其记录，先按真实身份、端口及独立功能拆分，再将保留的数量、基准及证据规则分别用于各兼容具体行。不得将异质身份合并数量或从总括名称推断原生属性单位。未发生须有证据，适用性或身份未知则阻止完成。 以下采集条件仅限本项 inputs/elementary 的身份与交接点（真实声明来源直接水资源取用）。仅对从规定来源实际取入系统的水启用，核实仪表或采样区间及处理责任方。购水和收集污水是不同交换；水组分质量与混合废水体积分别核对，仅在需要换算时使用有证据且状态相容的密度。平衡缺项保留为未解决残差，不假设蒸发或零值。 每项适用性判断须留证。经证实不发生仅关闭所述范围和时段，缺记录仍未解决。发生的要求须将全部事件映射到具体row ID及相容原生数量，或精确映射至已覆盖行和供应方责任，并逐项说明排除理由。证据须覆盖身份、支持单位、计算、原始记录及全部去向；既有与新增分支对同一事件互斥覆盖，协议本身不作为交换。完成须无未分配事件、无重复覆盖、无相关数量或身份未决项。按有证据的实际分支采集原始字段。不适用的操作数须关联分支判定，适用但缺乏实测或依据的数量登记待决。 | 按来源或接收介质及实测状态计量水质量或体积 | 每次真实事件及每项有证据的未发生判断 | 完整声明队列及归属资产寿命关联事件 | 仅本过程真实责任场所及供应方 | 先对账原生事件总量，仅汇总身份、状态、单位、交接点及期间均相容的量。按相应计算规则逐行核算一次：只分配仍共享的负担，目标总量仅除以同口径的正合格产出；等效每参考流数值原值沿用，零产出期间不作除法并保留处置记录。 | 核对环境交接点的取水或排放、相态与期间；质量体积换算须使用相容状态的实际密度。水组分与混合出水总量分别核算。 对上述具体身份及相容输入口径，仅在数量的归属和归一化状态与下式前提匹配时使用该规则：逐真实归属外部资源取用 / N 保留原始凭据、实际采用的系数和结果单位。数值来源模式：calculated_value；适用范围：site_specific；归一化基准：每声明的参考流；基准类型：reference_flow；证据类型：calculated_from_collection；采集协议：cp_waterway；来源：unsd-cpc3-65229; ghg-product-2011。须有原始记录、精确原生支持及逐具体行核验；这些规则不提供缺失身份或数值。 完成判据：check_occurrence_completion。 |
| cp_expand_other_support_waste | waterway_support_lifecycle | 必须展开身份 other_support_waste (outputs/waste)：真实其他内河船舶航道支持废物 | collected_record | requirement_id=other_support_waste; process_id=waterway_support_lifecycle; required_direction=outputs; required_flow_type=waste; original_collection_protocol=cp_support; applicability_evidence; occurrence_event_id; concrete_row_id; physical_identity; formulation_or_species; phase; carbon_origin; particle_fraction; source_compartment; receiving_compartment; supply_or_handover_gate; provider_covered_cells; asset_component_event_and_lifecycle_phase; native_property; native_unit; measured_native_quantity; source_record_id; allocation_all_users; normalization_denominator; per_identity_amount_calculation; verification_evidence; unresolved_reason; occurrence_to_row_reconciliation; waste_origin_event; material_or_true_mixture; moisture_basis; container_tare; opening_waste_stock; generated_waste; received_waste; handover_quantity; closing_waste_stock; onsite_treatment; receiver_id; applicability_decision_record; covered_concrete_rows; excluded_occurrence_reason; completion_evidence; observed_quantity_state; conversion_or_allocation_evidence | 真实舱底污泥污水洗涤垃圾维护退役资产疏浚物仅实际废物状态且具组成状态产生接收方。可用回收沉积物物料库存直接环境释放独立，不默认全部疏浚物为废物。 本范围是必须落实的身份识别要求，不是交换流。使用原节点采集协议及其记录，先按真实身份、端口及独立功能拆分，再将保留的数量、基准及证据规则分别用于各兼容具体行。不得将异质身份合并数量或从总括名称推断原生属性单位。未发生须有证据，适用性或身份未知则阻止完成。 以下采集条件仅限本项 outputs/waste 的身份与交接点（真实其他内河船舶航道支持废物）。本过程实际产生或接收所述废物时启用。记录材料或配方或真实共同收集混合物、干湿状态、容器皮重、来源事件、存量、交接关口及实际接收者；核对产生量+期初库存+接收量=交出量+期末库存+另列现场处理量。分收的不同废物分行，真实接收混合物可为一行，其组分仅作不可相加审计；有用回收、客户保留物与废物去向分开，不自动给替代抵扣。 每项适用性判断须留证。经证实不发生仅关闭所述范围和时段，缺记录仍未解决。发生的要求须将全部事件映射到具体row ID及相容原生数量，或精确映射至已覆盖行和供应方责任，并逐项说明排除理由。证据须覆盖身份、支持单位、计算、原始记录及全部去向；既有与新增分支对同一事件互斥覆盖，协议本身不作为交换。完成须无未分配事件、无重复覆盖、无相关数量或身份未决项。按有证据的实际分支采集原始字段。不适用的操作数须关联分支判定，适用但缺乏实测或依据的数量登记待决。 | 接收方验收的具体废物或实际混合收集物在实测状态下的原生数量 | 每次真实事件及每项有证据的未发生判断 | 完整声明队列及归属资产寿命关联事件 | 仅本过程真实责任场所及供应方 | 先对账原生事件总量，仅汇总身份、状态、单位、交接点及期间均相容的量。按相应计算规则逐行核算一次：只分配仍共享的负担，目标总量仅除以同口径的正合格产出；等效每参考流数值原值沿用，零产出期间不作除法并保留处置记录。 | 以接收记录核对产生、库存、场内处理和实测交付。混合物流量与组分测量分开；干湿基或质量体积换算须有相容组成或密度。接收转移和环境直排按不同交接点记录。 对上述具体身份及相容输入口径，仅在数量的归属和归一化状态与下式前提匹配时使用该规则：逐真实互斥废物产生 / N 保留原始凭据、实际采用的系数和结果单位。数值来源模式：calculated_value；适用范围：site_specific；归一化基准：每声明的参考流；基准类型：reference_flow；证据类型：calculated_from_collection；采集协议：cp_support；来源：unsd-cpc3-65229; ghg-product-2011。须有原始记录、精确原生支持及逐具体行核验；这些规则不提供缺失身份或数值。 完成判据：check_occurrence_completion。 |
| cp_expand_actual_support_release | waterway_support_lifecycle | 必须展开身份 actual_support_release (outputs/elementary)：真实航道支持物质相关热向声明介质释放 | collected_record | requirement_id=actual_support_release; process_id=waterway_support_lifecycle; required_direction=outputs; required_flow_type=elementary; original_collection_protocol=cp_support; applicability_evidence; occurrence_event_id; concrete_row_id; physical_identity; formulation_or_species; phase; carbon_origin; particle_fraction; source_compartment; receiving_compartment; supply_or_handover_gate; provider_covered_cells; asset_component_event_and_lifecycle_phase; native_property; native_unit; measured_native_quantity; source_record_id; allocation_all_users; normalization_denominator; per_identity_amount_calculation; verification_evidence; unresolved_reason; occurrence_to_row_reconciliation; substance_identity; chemical_form; environmental_compartment; carbon_origin; particle_fraction_or_count_basis; measured_or_calculated_release; species_conversion_evidence; applicability_decision_record; covered_concrete_rows; excluded_occurrence_reason; completion_evidence; observed_quantity_state; conversion_or_allocation_evidence | 真实充排水移动冷却热压载舱底污水清洗洗涤防污磨耗疏浚组分相关辅助制冷剂，具真实原生物质相态粒径来源介质。水体积转移本身不是污染物质量或耗水，保留真实淡水咸淡海水目的及收集释放去向。 本范围是必须落实的身份识别要求，不是交换流。使用原节点采集协议及其记录，先按真实身份、端口及独立功能拆分，再将保留的数量、基准及证据规则分别用于各兼容具体行。不得将异质身份合并数量或从总括名称推断原生属性单位。未发生须有证据，适用性或身份未知则阻止完成。 以下采集条件仅限本项 outputs/elementary 的身份与交接点（真实航道支持物质相关热向声明介质释放）。仅对进入已记录接收介质且有观测或适用计算依据的实际释放启用。记录具体物质及形态、来源或接收介质、适用的化石或生物碳来源、适用的粒径组分或粒子数粒径基础及采样期；保留元素与分子口径，换算须有化学计量和相容物种证据。收集物流中的污染物在实际环境排放边界前归接收物流，不用CO2、NOx、VOC、COD或泛颗粒物流代替缺失物种。 每项适用性判断须留证。经证实不发生仅关闭所述范围和时段，缺记录仍未解决。发生的要求须将全部事件映射到具体row ID及相容原生数量，或精确映射至已覆盖行和供应方责任，并逐项说明排除理由。证据须覆盖身份、支持单位、计算、原始记录及全部去向；既有与新增分支对同一事件互斥覆盖，协议本身不作为交换。完成须无未分配事件、无重复覆盖、无相关数量或身份未决项。按有证据的实际分支采集原始字段。不适用的操作数须关联分支判定，适用但缺乏实测或依据的数量登记待决。 | 本物质、资源或物理排放在实际环境介质的已核实原生属性与单位 | 每次真实事件及每项有证据的未发生判断 | 完整声明队列及归属资产寿命关联事件 | 仅本过程真实责任场所及供应方 | 先对账原生事件总量，仅汇总身份、状态、单位、交接点及期间均相容的量。按相应计算规则逐行核算一次：只分配仍共享的负担，目标总量仅除以同口径的正合格产出；等效每参考流数值原值沿用，零产出期间不作除法并保留处置记录。 | 采样或活动量及适用因子须对应物种、相态、来源和环境介质。按实际对象区分质量、粒子数、热量及元素当量；换算须有依据，重叠总量不可相加。 对上述具体身份及相容输入口径，仅在数量的归属和归一化状态与下式前提匹配时使用该规则：逐真实互斥环境释放 / N 保留原始凭据、实际采用的系数和结果单位。数值来源模式：calculated_value；适用范围：site_specific；归一化基准：每声明的参考流；基准类型：reference_flow；证据类型：calculated_from_collection；采集协议：cp_support；来源：unsd-cpc3-65229; ghg-product-2011。须有原始记录、精确原生支持及逐具体行核验；这些规则不提供缺失身份或数值。 完成判据：check_occurrence_completion。 |

### 计算规则

| rule_id | 适用于 | formula_or_rule | inputs | output | source_ids |
| --- | --- | --- | --- | --- | --- |
| qualified_original_count | qualified_inland_commission | 逐必需层s及兼容原始任务指纹f，N_s,f = sum_j I(任务j符合运行前原始完整验收)。逐原始有界合格承运委托仅一次贡献一项，部分失败拒收不贡献，不得事后拆任务重设或丢因果负荷。闸驳队拆并转箱是任务事件，不自动新增输出。最终输出为1 Item(s)；有限强度须N_s,f > 0。补充真实质量距离时间闸目标驱动不替代最终功能或建立跨层等价。 | 原始任务、分层与识别指纹及实际完整验收; cp_task | N_s,f; qualified_inland_commission | unsd-cpc3-65229; ghg-product-2011 |
| exclusive_material_custody | 货物容器目标燃料物料拖具账 | 共同真实端口时间守恒原生基准：期初 + 外部接收 = 期末 + 真实验收交付或使用 + 返还或回收外运 + 独立废物外运 + 真实环境损失 + 已记录残差。项互斥，内部回收复用循环不另加接收外运使用，回收物只进真实期末后续使用或一个外运。货物目标保管区别可复用设备制造生命。消耗期初客户燃料能源真实提取关联原生上游供应充电一次，无论产权购买人，购买非第二提取投入且留存储备不消耗。须真实物种碳去向平衡不确定性，未知残差非排放或零。 | 实际期初、期末、接收、使用、交付、退回、废物及环境去向; cp_energy; cp_interfaces; cp_support | 按互斥口径核对物料、托管交接及消耗量 | ghg-product-2011 |
| waterway_water_balance | 真实建模设施水河段 | 在真实定义来源设施目的端口兼容体积质量状态基准：期初蓄水 + 真实外部取用 + 真实新增水 = 期末蓄水 + 各目的真实外流 + 真实蒸发或其他独立消耗损失 + 已记录残差。来源分类互斥：actual_external_intake为计量量化取用（含真实供应水）且排除单独记录降水其他新增；actual_added_water仅含独立有据且未计入该取用的降水其他新增。同一物理入流不再以供应泵转移等名重复计。所选边界内闸室复用循环转移抵消，不重复取用外流。跨流域来源目的转移明确记录，不把全部取用等于耗水；真实污染物热及状态换算另有依据。仅分真实用途用户份额，不设统一逐闸货吨水，不假定重力需要泵能或控制资产零负荷。 | 实际储存、取入、添加、流出、消耗性损失、状态及流域; cp_waterway | 水的来源、去向与库存收支平衡，以及实际资源归属 | bafg-waterways; ghg-product-2011 |
| native_life_normalization | 兼容任务层内全部真实行 | q_row,ref,s,f = sum(原生事件数量 × 有据真实用途全用户因果份额) / N_s,f，仅一次。同组资产份额为该阶段归属使用量 / 有据正全用户总使用量。含真实准备闸排队拆并空载水位天气失败及未含完整生命供应方事件。真实供应原生数量经有据活动衔接，不把闸次箱小时吨公里强作一委托。仅加总兼容原始分子N_s,f并披露真实差异。 | 实际事件的原生数量; 按用途、全用户寿命或因果关系确定的份额; 分层 s 和指纹 f 对应的相容分母 | 每参考流的原生计量交换量 | ghg-product-2011 |

### 数据质量要求

| requirement_id | 适用于 | Requirement | evidence |
| --- | --- | --- | --- |
| original_inland_task_quality | 参考分支河段事件 | 须运行前原始任务数量对象端口验收及真实完成、必需细层和完整失败部分责任。须真实容器货物皮重全拖船货驳目标及真实内河河段水流水位闸路线证据，不把未知货物归未另分类或假定每箱任务。 | 签署原始合同验收校准数量真实路线驳队设施日志 |
| water_native_life_scope | 水能源供应方资产去向 | 真实水状态来源目的流域蓄水、能路期初燃料出处、物种相态介质原生供应方全用户用途生命范围须实测或来源特定有据数量及不确定性。历史德国美国CCNR示例仅供真实问题，不是统一闸河箱效率法律限值，真实重力泵复用安排接收方关键。 | 真实原生计量状态来源记录用途用户范围完整生命登记 |
| no_default_validation | 全部节点验证 | 不设统一任务大小TEU换算拖轮载荷速度水流比例逐闸水燃料逸出泄漏容器船航道寿命人体代谢因子。须独立兼容QA样本，同批最大值不能验证自身，缺数量身份不完整，检查器通过后仍须科学审查及各最终具体绑定。 | 独立兼容比较明确未解证据登记 |

## 9. 验证规则

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| validate_full_inland_task | 全部节点 | 验证官方完整容器化物件包件拖船货驳内河运河拖运全部目标拖运真实未另分类及正确内河其他专门功能接口。须原始有界合格任务必需细层真实对象数量配置路线端口验收及5功能字段原生计数支持。不限容器、不用箱拖轮闸发票吨公里目标制造代理或异质任务等价。 | unsd-cpc3-65229; ghg-product-2011 |
| validate_whole_actor_reach | inland_navigation; container_tow_interfaces | 验证真实货物与可复用容器拖具、客户目标与真实服务驳船资产角色，全部拖轮驳船目标准备连接运输支持能源接收责任。内河河段水流水位湖潮及真实闸排队拆并协助空载天气失败责任保留一次，中间闸拆转不新增完成。原始目标货物生产外部，期初客户消耗燃料能源上游无论产权一次且具供应消耗出处，不全耗库存或重复购买提取。 | ghg-product-2011 |
| validate_water_purpose_life_provider | waterway_support_lifecycle | 验证真实闸航道水取用蓄水外流消耗损失来源目的流域账：取用新增水互斥，取用排除单记降水其他新增，同一物理量不重复供应取用泵转移；保留真实兼容实测单位状态端口，内部循环抵消，不假定全部闸水消耗自来水。须真实重力泵控制能源全用途用户份额、完整制造安装投产维护航道工程坞修更换退役阶段及原生供应方数量范围。航运不等全部水电防洪供水休闲，制造费用闸次非完整生命委托。保留真实接收物种介质含内河含盐水。 核实适用船舶或飞机、周转器具、基础设施、维护及供应方卡之间资产部件事件到清单行的唯一归属；整机已含部件与独立供应不得同时进入同一阶段清单。 | bafg-waterways; ghg-product-2011 |
| validate_stock_denominator_identity | 全部节点 | 验证互斥库存回收使用外运废物环境及完整原生物种数量协议，不内部回收另加项或收集废物全排。正兼容N_s,f仅原始完整验收，不追溯重设任务增计数；保留失败零完成负荷，全用户份额合一不重复归一化。最终具体身份属性单位状态端口介质须核实，逐真实条件交换扩展未解最终行登记。中英结构化含全部规范规则，缺失不完整非零。 | ghg-product-2011 |
| atomic_inland_navigation | inland_navigation | 拒绝将备选物料、独立供应资产服务、不同废物流、污染物种、碳源、相态、粒径或环境子介质合并成一个交换身份。本节点每项适用cp_expand_要求必须有发生或未发生记录及完整具体行清单，各行具有自身身份、端口、已核验UUID、原生属性单位、数量、原始记录、计算和唯一责任。供应方已含完整总成或真实收集混合物流仍按一个真实供应或收集身份，不虚构组分交换。不得将要求名称标识、NOx或VOC或PM总量、未明确的物理释放或异质清单绑定一个UUID。核对全部子行、原始事件、供应方已含单元及跨节点交接，不缺失当零、不重复计入。身份、适用性、数量或去向未知，均阻止完整前景包及最终TIDAS交换产出。PCR检查器不验证这些前景事实，须保留逐行证据供审查。 | ghg-product-2011 |
| atomic_container_tow_interfaces | container_tow_interfaces | 拒绝将备选物料、独立供应资产服务、不同废物流、污染物种、碳源、相态、粒径或环境子介质合并成一个交换身份。本节点每项适用cp_expand_要求必须有发生或未发生记录及完整具体行清单，各行具有自身身份、端口、已核验UUID、原生属性单位、数量、原始记录、计算和唯一责任。供应方已含完整总成或真实收集混合物流仍按一个真实供应或收集身份，不虚构组分交换。不得将要求名称标识、NOx或VOC或PM总量、未明确的物理释放或异质清单绑定一个UUID。核对全部子行、原始事件、供应方已含单元及跨节点交接，不缺失当零、不重复计入。身份、适用性、数量或去向未知，均阻止完整前景包及最终TIDAS交换产出。PCR检查器不验证这些前景事实，须保留逐行证据供审查。 | ghg-product-2011 |
| atomic_waterway_support_lifecycle | waterway_support_lifecycle | 拒绝将备选物料、独立供应资产服务、不同废物流、污染物种、碳源、相态、粒径或环境子介质合并成一个交换身份。本节点每项适用cp_expand_要求必须有发生或未发生记录及完整具体行清单，各行具有自身身份、端口、已核验UUID、原生属性单位、数量、原始记录、计算和唯一责任。供应方已含完整总成或真实收集混合物流仍按一个真实供应或收集身份，不虚构组分交换。不得将要求名称标识、NOx或VOC或PM总量、未明确的物理释放或异质清单绑定一个UUID。核对全部子行、原始事件、供应方已含单元及跨节点交接，不缺失当零、不重复计入。身份、适用性、数量或去向未知，均阻止完整前景包及最终TIDAS交换产出。PCR检查器不验证这些前景事实，须保留逐行证据供审查。 | ghg-product-2011 |
| check_occurrence_completion | 全部实际清单行和身份识别协议 | 保留适用性证据，将每个实际事件对应到具体清单行或已核实的供应方覆盖范围。判定未发生须有证据，未知项保留待决。按同一身份、状态、单位、期间和交接点核对期初、接收、期末及互斥去向。耗材领用账区分未用退回、内部领拨和合格、失败及返工作业的实际耗用。托管账或物料平衡采用期初库存＋外部接收＋配对内部接收＝期末库存＋配对内部发出＋对外交付且获接收的数量＋未用外退＋外送的已用物资或回收物＋外送废物＋直接排放＋本边界内消耗或转化量。身份在边界内生成时，将有证据的生成量或出生数计入该身份账的来源并关联原事件。在上层守恒物料或元素平衡中抵消内部转化和移交。每个事件只记一次，留存回收物计入期末，移交与耗用分别登记。按相容口径执行专用托管、相态、转化或元素规则；已作为转化量计入的物料，其后续产物不得再计入同一去向合计。独立计量各项，对未解释的差额追查并保留待决。实物总量与负担分配分别核算。共享原始负担采用 Q_raw × s / R，其中 s 为有证据的目标驱动量除以同池同期间全部适用用户的正驱动量总和。已归属的目标总量采用 Q_target / R，已与同一参考流等效的单位结果 q_ref 原值沿用。供应方单位强度先乘以按其原生单位实测的需求量。仅在另一个仍有共享负担的独立阶段另作分配。R 为同一队列、交接点和参考单位下的正值合格产出量。保留失败与部分完成作业的负担，禁止以此放大 R；零产出时保留负担及有证据的结转或最终处置。自有资产采用同队列全用户寿命作业量，并排除初始部件重复计算。外购服务仅替代有记录的覆盖阶段。适用的身份、数量、支持单位、去向或分配分母仍未决时，最终数据集仍不完整。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | secondary_dataset; background_dataset |
| downstream_use | 必需层指纹内真实其他内河货运容器拖船目标承运委托投入 |
| allowed_use | 兼容原始任务分支对象数量质量端口内河路线水闸拖况及真实原生供应方全用途全用户生命范围，兼容分子N和 |
| excluded_use | 仅容器方法异质任务跨层等价未知货物自动未另分类沿海服务原目标制造或箱TEU拖轮闸费用吨公里代理 |
| required_metadata | 原始任务层指纹验收N、真实货物容器皮重或全拖目标配置、内河河段水流水位闸事件、期初燃料原生能源去向用途全用户生命供应方范围缺数据 |
| required_quality_disclosure | 任务兼容真实范围路线水状态介质限制、计量估计原生身份不确定性未解数量UUID候选科学审查 |
| update_trigger | 原始任务验收对象路线分层、船拖容器闸水燃料技术、生命供应方用户用途范围身份来源变化 |

## 11. 数据源

| source_id | type | reference | used_for |
| --- | --- | --- | --- |
| unsd-cpc3-65229 | official_guidance | https://unstats.un.org/unsd/classifications/Econ/Structure/Detail/EN/2100/65229 | 官方完整内河容器化物件包件拖船货驳运河拖运全部列明目标未另分类范围 |
| bafg-waterways | official_guidance | BfG Hydrological Atlas of Germany,Waterways; https://geoportal.bafg.de/dokumente/had/75Waterways.pdf | 定性真实自航顶推组合自由流壅水运河、闸升泵转移潮汐多用途航道问题，不用历史数值效率德国规则默认 |
| ccnr-container-stability | official_guidance | https://ccr-zkr.org/13021000-en.html | 仅真实页面内河容器稳性船员码头问题，不采用未读详细指南规定或标准箱限值 |
| epa-shore-power | official_guidance | https://www.epa.gov/ports-initiative/shore-power-technology-assessment-us-ports | 真实外部电网辅助剩余锅炉接断来源区分，不用美国法律要求减排因子 |
| ghg-product-2011 | standard | https://ghgprotocol.org/sites/default/files/ghgp/standards/Product-Life-Cycle-Accounting-Reporting-Standard_041613.pdf | 一般边界分配质量原则，PCR特定原任务分层水账完整生命供应方选择明确 |

