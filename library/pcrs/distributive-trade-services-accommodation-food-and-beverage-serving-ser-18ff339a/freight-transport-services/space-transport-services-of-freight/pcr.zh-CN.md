---
pcr_id: pcr.distributive-trade-services-accommodation-food-and-beverage-serving-ser-18ff339a.freight-transport-services.space-transport-services-of-freight
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 空间货运发射入位委托服务

## 1. 范围与适用性

本专属PCR覆盖完整空间货运服务，包括卫星发射并在空间入位及其他真实往返空间或空间内货物运输。不限某运载器推进剂卫星大小目的地或一次性可复用飞行器。父功能为物理明确的承运委托，不是火箭或客户卫星制造。参考为一个原始有界空间货运委托，按原始载荷目的地轨道轨迹状态时间交接验收完成。必须按卫星发射入位与其他货物交付返回空间内运输分层并细分原始功能指纹，保留真实不同功能；计一项不等价不同轨道载荷任务责任。

排除客运、原始客户货物卫星制造及交接后作为独立功能的科学通信观测等载荷运行；卫星寿命观测效益不是货运输出。真实地面、航空、公路和海运支持与空间承运原生供应方端口一次解决，不重复完整服务。纯飞行器制造出租、独立空间站运行及独立非运输研发测试为独立功能；归运输的开发鉴定测试处理货物照护发射转移原合同交付返回回收及服务资产处置按实际责任纳入。不假定分离对接停车轨道或再入本身即符合原始最终验收。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.distributive-trade-services-accommodation-food-and-beverage-serving-ser-18ff339a.freight-transport-services.space-transport-services-of-freight |
| classification_refs | CPC 3.0 65320; exact |
| covered_products | 完整空间货运及卫星发射入位，含真实货物交付返回空间内任务 |
| excluded_products | 乘客原始货物卫星制造及独立交接后载荷空间站运行 |
| representative_product | 合格完成空间货运委托 |
| production_route | 真实地面任务准备全发射转移阶段承运交接回收完整服务系统生命 |
| market_state | 必需分层兼容原始载荷目的地指纹内按原始规定合格的物理委托 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| 什么（What） | 合格完成空间货运委托 |
| 多少（How much） | 1项原始有界合格完成空间货运委托；须真实载荷集合净质量承运接口 |
| 质量（How well） | 必需功能层内原始载荷身份数量状态目的地轨道轨迹历元、允许交接状态及接收验收 |
| 时长或周期（How long or cycle） | 真实准备测试任务至原始验收交接期间，加因果等候取消发射失败返回回收责任及归属完整服务资产生命 |
| reference_flow_link | qualified_space_commission |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 合格完成空间货运委托 |
| 参考流属性 | 物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` |
| 参考单位组 | 数量 `5beb6eed-33a9-47b8-9ede-1dfe8f679159` |
| 参考单位 | Item(s) |
| 必需限定信息 | satellite_launch_placement_or_other_spacefreight_stratum; original_bounded_task_fingerprint; payload_identity_set_netmass_volume_condition; original_destination_orbit_trajectory_epoch; original_time_quality_handover_acceptance; all_stages_launch_transfer_carrier_roles; ground_campaign_test_hold_scrub_failure_lineage; actual_propellant_oxidizer_pressurant_state; altitude_segment_species_phase_medium; launchsite_groundsupport_recovery_interfaces; co_payloads_orbits_all_user_duty; service_assets_full_life_reuse_refurbishment; native_provider_coverage; period_N; model_gaps_uncertainty |

## 4. 计量与单位规则

| rule_id | 适用于 | required_property | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| original_space_task | reference product | 物品数量 | Item(s) | 一项为一个按原始载荷目的时间状态交接验收完成的原始物理有界空间货运承运委托，不是一次点火尝试卫星公斤级段对接发票或制造飞行器。必需层细指纹禁止混合不同轨道轨迹载荷角色，仅运行前独立有界且完整验收的单独载荷委托可合格，不能部分成功失败后重设原始验收。 |
| actual_native_state | 全部清单行 | 真实原生属性 | 真实原生单位 | 保留真实载荷净质量与包装适配器飞行器皮重及逐燃料氧化剂增压气化学配方相态供应端口原生基准。真实实测温压组成密度低位热值支持体积质量能量换算，不假定氧等氧化剂为能源燃料。核实交流3.6 MJ/kWh。记录真实轨道轨迹历元、排放高度带位置时间模型子介质，不虚构几何距离吨公里理想反应因子或用空气未指明替代已知高度。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 原始载荷任务端口及真实运输开发任务地面空间承运供应方责任 |
| starting_condition_role | 载荷接收不消除更早归属测试准备或期初客户燃料既有服务资产 |
| product_classification_scope | 完整空间货运及卫星发射入位，真实返回空间内交付接口明确 |
| recursive_input_rule | 精确原生供应方覆盖供应排放资产生命仅一次替代自营范围，缺口保留 |
| upstream_dataset_requirement | 真实功能属性单位状态端口级段技术高度生命范围来源证据 |
| disclosure | 原始任务验收N分层全部共载荷真实阶段端口物种高度去向复用生命供应方模型缺口 |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| full_space_freight_scope | 全部节点 | 覆盖空间货物运输及卫星发射并空间入位。卫星布放其他货物交付返回空间内承运为父承运功能真实分支，具原始载荷目的交接责任。真实地面空海发射起点固液混合其他推进及多级一次性复用转移安排可改变清单状态数据验证，仅启用真实分支。不缩为仅轨道卫星发射或用客户载荷制造代理。 | unsd-cpc3-65320; nasa-lsp-services; esa-atv |
| original_space_gates | spaceflight_delivery; ground_campaign | 运行前保留原始有界委托载荷集合净质量体积状态、目的轨道轨迹历元、质量时间接收交接验收。区分原承运接收保管、运载器分离停车轨道转移交会对接、最终入位返回验收。较低错误轨道部分交货或仅发射不能重定义为原成功。交接后卫星空间站工作排除，除非真实后续承运任务明确且无重叠。 | nasa-lsp-services; esa-atv; ghg-product-2011 |
| whole_campaign_carrier | ground_campaign; spaceflight_delivery | 纳真实运输负责规划鉴定开发测试及归属共享试件、地面物流处理洁净室调控集成整流罩封装、真实等候取消重测卸重装失败尝试恢复。纳全部负责发射助推上面转移货运承运级段及地面跟踪遥测任务控制至真实验收交接；载荷照护热电通信仅真实归属承运责任。不因共享发射场自动纳客户科学任务制造运行。 | nasa-lsp-services; esa-handbook-landing; ghg-product-2011 |
| propellant_supply_conversion | spaceflight_delivery; ground_campaign | 逐级段测试记录真实燃料氧化剂固体混合配方增压吹扫气其他能源及状态供应储存路径。制造上游供应与真实燃烧反应放散蒸发泄漏留存储备返还回收外运废物环境去向区分。真实期初客户持有物料能源提取消耗用于运输时无论产权购买人兼容上游供应充电一次，不引全部载荷制造或重复购买提取。客户水空气推进剂作为货物转交属保管货物，不全为承运消耗供应：分真实交付与运输消耗部分，同一部分不同时计交付货物及承运消耗燃料。内部发电推进不是另购产品。不假定完全反应全部碳化石或全部氧化剂按投入身份排出。 | esa-environment-2024; nasa-atmosphere-2024; ghg-product-2011 |
| actual_altitude_species | spaceflight_delivery; ground_campaign; recovery_support_lifecycle | 采集真实级段测试飞行再入来源、化学组成颗粒材质粒径相态碳源、数量基准位置时间高度分布及真实接收子介质。化学投入元素质量平衡不自动成为排放物清单或气候当量。保留真实高空地面水土区分，不能为可得身份把已知高度子介质绑定空气未指明行。缺匹配子介质排放量表征均明确缺口，不为零影响或通用清洁燃料结论。物理排放清单区别大气转化及影响模型版本覆盖。 | nasa-atmosphere-2024; esa-environment-2024 |
| recovery_reentry_fates | recovery_support_lifecycle; spaceflight_delivery | 纳真实运输系统回收着陆打捞船机公路支持、安全处理翻修再鉴定复飞最终处置，含归属中止失败搜寻清理。逐级段整流罩适配器承运器目标按真实角色跟踪互斥服役留存回收外运实际废物留轨物地水存活物及量化蒸气气体颗粒去向。留轨解体再入着陆质量不全作基本排放，回收设备不自动给循环信用。原始客户货物卫星制造交付后载荷退役仍外部，除非真实运输责任改变具体去向责任；明确未含下游去向模型限制。 | nasa-atmosphere-2024; esa-environment-2024; ghg-product-2011 |
| ground_resources_interfaces | ground_campaign; recovery_support_lifecycle | 真实外部交流燃料低温储存调控洁净室冷却热通信发射台支持水幕清洗废水资源来源泄漏接收处理按真实责任供应方端口。水取用供应产品循环来源目的转移消耗损失独立，真实径流废水物种不全蒸发自来水或一个污染物。声明人支持范围不虚构代谢饮食因子，不给数值工程设置推进剂配方或统一性能假定。 | esa-environment-2024; nasa-lsp-services; ghg-product-2011 |
| full_service_assets_providers | recovery_support_lifecycle | PCR完整生命选择纳真实一次性复用发射转移货运飞行器级段适配器整流罩容器及地面测试测控通信低温发射台回收资产：归属开发试件制造施工安装投产维护翻修再鉴定更换退役及真实相关释放废物资源。既有租赁飞行器共享地面资产须有据同组全用户使用量真实实现复用终止，不用承诺飞次或制造等于寿命。真实原生发射处理轨道转移回收处理服务仅一次替代精确已含自营供应直接生命范围，未含责任保留。 | esa-environment-2024; esa-handbook-landing; ghg-product-2011 |
| atomic_native_exchange | 全部节点 | 逐真实条件需求扩为真实节点方向流类型具体row_id及单一物质物料服务身份原生属性单位状态端口、数量出处同节点协议真实接收子介质。载荷保管区别服务输出、废物状态区别可用设备、直接释放区别制造投入化学转化。不设假输出总尾气CO2当量轨道碎片伪基本身份未核实固定UUID或缺失作零。 | ghg-product-2011 |

## 6. 过程清单结构

每张清单流卡仅代表一个可独立识别的产品、物料配方、废物流、物质或供应服务，具有兼容的端口、属性和单位。完整供应总成或实际收集的混合物流可有一个身份，其已含组分不得另列重复交换。第8节cp_expand_协议是必须落实的身份识别要求，不得当作选定流或交换数量。逐项记录真实适用性，以独立行标识列出全部具体交换；完整保留适用范围，未发生须有证据。尚未展开或未知的要求属于不完整，不得当作零。改为采集协议不等于解决缺失身份，也不免除生命周期、分配、计量或边界义务。

### 过程图

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| spaceflight_delivery | 完整发射转移飞行及合格承运交付 | required | 真实所选空间货运卫星入位功能 | foreground | qualified_space_commission |
| ground_campaign | 地面处理测试真实任务责任 | required | 真实归运输处理发射支持 | foreground | qualified_space_commission |
| recovery_support_lifecycle | 回收服务资产完整支持生命周期 | required | 真实归属回收原生供应方资产支持 | foreground | qualified_space_commission |

全部节点关联必需层指纹内唯一原始合格最终委托。点火分级停车轨道转移取消发射回收复飞为真实任务谱系事件，不自动新增验收输出。真实运行前独立声明承运段可具真实交接，不同时计其原生服务及重复完整自营级段。

### 过程：完整发射转移飞行及合格承运交付 (`spaceflight_delivery`)

#### 输入

##### 产品流

###### 真实声明端口供应液氧氧化剂 (`actual_liquid_oxygen`)

条件真实氧化学身份液态纯度供应端口，其他氧化剂固体配方独立。上游供应含真实归属反应使用及真实放空蒸发泄漏测试损失、有据库存责任，来自互斥供应期初期末返还记录；真实未燃损失仍计供应负荷。不把全部装载储备库存作消耗，不假定气氧燃料能源。真实地面测试与飞行级段仅一次分配。

- 选定流：真实声明端口供应液氧氧化剂
- 流属性/单位：质量 / kg
- 数量规则：真实兼容液氧供应含真实使用损失测试库存责任归属 / N
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每声明的参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_propellant`
- 来源：`unsd-cpc3-65320`; `ghg-product-2011`

###### 真实声明端口供应液氢燃料 (`actual_liquid_hydrogen`)

条件仅真实氢液态纯度原生供应端口，不代表全部氢生产路线气态。记录来源特定上游能源出处及消耗放散返还留存去向，不因分子无化石碳作零影响。

- 选定流：真实声明端口供应液氢燃料
- 流属性/单位：质量 / kg
- 数量规则：真实兼容液氢供应归属 / N
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每声明的参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_propellant`
- 来源：`unsd-cpc3-65320`; `ghg-product-2011`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 合格完成空间货运委托 (`qualified_space_commission`)

必需层指纹内一个原始物理有界空间货运任务按原始载荷目的轨道轨迹状态时间交接验收。精确服务UUID未解，不是飞行器制造卫星数量发射尝试。

- 选定流：合格完成空间货运委托
- 流属性/单位：物品数量 / Item(s)
- 数量规则：1 Item(s)
- 数值来源模式：`fixed_value`
- 适用范围：`site_specific`
- 归一化基准：每声明的参考流
- 基准类型：`reference_flow`
- 证据类型：`method_formula`
- 采集协议：`cp_task`
- 来源：`unsd-cpc3-65320`; `ghg-product-2011`

##### 废物流

##### 基本流

### 过程：地面处理测试真实任务责任 (`ground_campaign`)

#### 输入

##### 产品流

###### 交流电 (`ground_ac`)

仅真实处理测试发射台测控端口兼容外供交流，含真实等候取消货物调控。排除机载或设施内部发电已知直流独立回收计量供应方已含范围。

- 选定流：交流电 `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- 流属性/单位：低位热值 / MJ
- 数量规则：真实外部地面任务交流电 / N
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每声明的参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_ground`
- 来源：`unsd-cpc3-65320`; `ghg-product-2011`

###### 柴油 (`ground_diesel`)

条件真实配方端口匹配无供应方通用柴油用于真实未含地面物流发电测试支持，其他等级燃料独立。真实供应消耗期初客户提取一次，内部发电不再外购交流。

- 选定流：柴油 `9d258d75-6792-4f1c-9856-81602ed8f816`
- 流属性/单位：质量 / kg
- 数量规则：真实兼容地面柴油消耗分配 / N
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每声明的参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_ground`
- 来源：`unsd-cpc3-65320`; `ghg-product-2011`

###### 自来水 (`ground_tap_water`)

仅真实兼容供应产品端口，水幕冷却工艺来源取用不自动自来水或全消耗。保留来源目的库存径流蒸发账供应方已含范围。

- 选定流：自来水 `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- 流属性/单位：质量 / kg
- 数量规则：真实供应自来水归属 / N
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每声明的参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_ground`
- 来源：`unsd-cpc3-65320`; `ghg-product-2011`

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

##### 基本流

### 过程：回收服务资产完整支持生命周期 (`recovery_support_lifecycle`)

#### 输入

##### 产品流

###### 交流电 (`recovery_ac`)

仅真实独立计量外供兼容回收翻修支持交流，不是地面任务计量内部发电已知直流或供应方已含范围。

- 选定流：交流电 `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- 流属性/单位：低位热值 / MJ
- 数量规则：真实外部回收支持交流份额 / N
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每声明的参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_recovery`
- 来源：`unsd-cpc3-65320`; `ghg-product-2011`

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

###### 废润滑油 (`used_lubricating_oil`)

真实兼容产生端口废润滑油及真实另列接收处理除非已含，不是全部推进剂舱底溶剂或再入级段质量。

- 选定流：废润滑油 `55d93375-7f04-4166-b2a2-88ce929051a5`
- 流属性/单位：质量 / kg
- 数量规则：真实废润滑油产生 / N
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每声明的参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_recovery`
- 来源：`unsd-cpc3-65320`; `ghg-product-2011`

##### 基本流

## 7. 分配与共产品处理

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| space_task_strata_all_payloads | 全部节点 | 分别卫星发射入位与其他空间货运交付返回空间内层，细分原载荷目的轨道轨迹历元质量时间端口真实级段技术指纹。优先直接细分计量，共享发射级段任务轨道承运回收责任在全部载荷其他真实用户按有据因果容量体积质量能源任务使用关系分配。载荷质量比不通用，尤其不同布放轨道序列责任。含真实乘客非货运共用户但不改为货运输出，无物理关系才可有据经济替代敏感性，逐事件份额合一。 | ghg-product-2011 |
| original_failure_burden | 全部节点 | 真实鉴定测试等候取消中止失败部分返工返回回收及零完成期间负荷按因果保留在兼容原始任务层指纹，再仅按正原始合格完成N归一化一次。不得改原始轨道载荷集合验收作成功，不逐点火级段对接复飞新增完成。原始独立有界载荷委托仅按原标准可独立合格并分全部共享因果责任。N=0无有限强度，记录保留作有据分配。 | ghg-product-2011 |
| all_user_reuse_life | recovery_support_lifecycle; 全部节点 | 真实同组制造开发测试投产翻修再鉴定更换退役事件按逐阶段有据真实全用户使用量分，再按兼容N。一次性级段按真实使用处置范围，回收复用硬件保留归属完整生命加真实打捞翻修终止，不任意截断使制造为零或用承诺复飞。剩余可用库存生命不确定性及真实失败退役组明确。不自动回收避免发射空间效益信用，真实外部有用输出须接收细分有据分配。 | esa-environment-2024; ghg-product-2011 |
| native_site_period | 全部节点 | 列明真实制造测试集成台测控飞行转移回收维护场址供应方跨任务生命期间。原生服务已含范围仅一次替代精确自营投入直接生命范围，未含阶段保留；分包客户产权期初库存不消除上游直接责任。兼容聚合加总真实归属原生分子兼容N，不平均异质轨道任务或重复完整供应自营。 | ghg-product-2011 |
| exclusive_recovery_fates | 全部节点 | 物料推进剂设备载荷保管及再入物种项互斥。内部回收循环不是新增外供外运使用信用。回收物仅入真实留存后续真实使用或一个真实外运，实际废物接收方与直接释放化学颗粒介质独立。留轨物碎片未知去向须物理记录模型限制，不任意为零或全物体质量作基本排放。 | nasa-atmosphere-2024; ghg-product-2011 |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_task | spaceflight_delivery | 原始空间委托合格完成 | 真实一手计量运单供应方记录 | 原任务层指纹载荷集合数量净质量体积状态目的轨道轨迹历元时间质量保管交接验收、全部共载荷轨道用户、真实级段转移分离对接完成失败谱系N | 原运行前物理规定关联真实接收状态证据及逐任务事件，不追溯重设成功或仅任务计数代理 按参考计量口径汇总唯一且已验收的合格产出作为分母，单列不合格事件及其资源责任。参考量保持规定值，仅归属的清单总量除以正分母。 | 计数Item(s)、真实载荷量及原轨迹轨道端口限定 | 逐事件及期间闭合 | 真实原始任务飞行返回验收报告期间完整服务资产阶段 | 真实发射测试处理测控空间级段转移回收供应方场址 | 每声明的参考流 | 签署记录；校准；原生来源；因果分配；不确定性保存各实测操作数的来源及原生口径，注明实际采用的换算或归属依据，以及所供结果是否已按该参考流计量。 |
| cp_propellant | spaceflight_delivery | 全部真实级段测试推进增压飞行能源 | 真实一手计量运单供应方记录 | 逐级段测试承运角色真实化学配方相态纯度端口温压密度原生量、期初装载提取燃烧放散蒸发泄漏储备返还回收废物、上游供应及期初客户产权充电出处、真实货物转交推进剂水空气区别承运消耗部分、真实非推进外供能源产品区别直接环境资源来源子介质原生量收集转换责任内部输出 | 闭合互斥真实供应库存反应放散回收路径，化学元素能源基准独立，期初客户燃料上游一次，不假定反应配方或重复内部发电；本飞行节点外供能源产品与直接环境资源基本投入分别量化，太阳转换设备完整生命保留；保留真实数量不确定性 原始观测和对账总量保留其记录口径。负担行只分配仍共享的总量，已归属总量仅除以同队列、同交接点的正合格产出；已与该参考流等效的结果原值沿用。零产出时保留负担并记录去向。 | 逐真实原生物料气能单位及有据状态换算；关联清单行的报告单位：kg (actual_liquid_oxygen, actual_liquid_hydrogen) | 逐事件及期间闭合 | 真实原始任务飞行返回验收报告期间完整服务资产阶段 | 真实发射测试处理测控空间级段转移回收供应方场址 | 每声明的参考流 | 签署记录；校准；原生来源；因果分配；不确定性保存各实测操作数的来源及原生口径，注明实际采用的换算或归属依据，以及所供结果是否已按该参考流计量。 |
| cp_flight_fates | spaceflight_delivery | 真实飞行再入来源高度物种物体去向 | 真实一手计量运单供应方记录 | 级段测试飞行再入来源时间位置高度分布、真实物质颗粒材质粒径相态来源数量原生基准接收子介质、原载荷服务硬件角色、留轨回收存活物蒸气气颗粒处置去向、观测模型版本覆盖不确定性 | 采用真实分来源高度实测或明确有据核实来源特定模型，区别物种清单元素守恒影响表征。不已知高度强配空气未指明不全物体排放或未知去向置零，数据模型缺口明确 原始观测和对账总量保留其记录口径。负担行只分配仍共享的总量，已归属总量仅除以同队列、同交接点的正合格产出；已与该参考流等效的结果原值沿用。零产出时保留负担并记录去向。各项独立实测交付、排放及移交按各自交接点记录，负担按其适用规则分配。 | 逐真实化学颗粒原生物体去向基准高度时间模型子介质 | 逐事件及期间闭合 | 真实原始任务飞行返回验收报告期间完整服务资产阶段 | 真实发射测试处理测控空间级段转移回收供应方场址 | 每声明的参考流 | 签署记录；校准；原生来源；因果分配；不确定性保存各实测操作数的来源及原生口径，注明实际采用的换算或归属依据，以及所供结果是否已按该参考流计量。 |
| cp_ground | ground_campaign | 真实运输测试处理台测控任务支持 | 真实一手计量运单供应方记录 | 真实任务测试等候取消重测卸重装事件因果责任、外部能源气物料身份状态端口计量、水源取用供应蓄存返还径流蒸发循环、物种介质废物接收供应方范围 | 闭合独立真实计量互斥来源目的，同一物理供应取用泵转移不重复，内部水能非额外购买。独立已分飞行测试量及真实原生完整供应范围 原始观测和对账总量保留其记录口径。负担行只分配仍共享的总量，已归属总量仅除以同队列、同交接点的正合格产出；已与该参考流等效的结果原值沿用。零产出时保留负担并记录去向。各项独立实测交付、排放及移交按各自交接点记录，负担按其适用规则分配。 | 逐真实原生供应资源物种废物量状态；关联清单行的报告单位：MJ (ground_ac)；kg (ground_diesel, ground_tap_water) | 逐事件及期间闭合 | 真实原始任务飞行返回验收报告期间完整服务资产阶段 | 真实发射测试处理测控空间级段转移回收供应方场址 | 每声明的参考流 | 签署记录；校准；原生来源；因果分配；不确定性保存各实测操作数的来源及原生口径，注明实际采用的换算或归属依据，以及所供结果是否已按该参考流计量。 |
| cp_recovery | recovery_support_lifecycle | 回收打捞返回翻修支持供应去向 | 真实一手计量运单供应方记录 | 真实回收中止搜寻清理返回翻修事件船空公供应模式原生量、物料燃料交流人员支持角色状态端口库存、回收有用物区别废物直接物种相态介质接收资源来源覆盖范围 | 真实事件日志计量互斥保管物料去向，不默认船公路距离燃料或回收物信用；飞行再入去向归cp_flight_fates一次，原生完整供应范围替代精确自营责任 原始观测和对账总量保留其记录口径。负担行只分配仍共享的总量，已归属总量仅除以同队列、同交接点的正合格产出；已与该参考流等效的结果原值沿用。零产出时保留负担并记录去向。各项独立实测交付、排放及移交按各自交接点记录，负担按其适用规则分配。 | 逐真实原生回收供应资源废物物种单位；关联清单行的报告单位：MJ (recovery_ac)；kg (used_lubricating_oil) | 逐事件及期间闭合 | 真实原始任务飞行返回验收报告期间完整服务资产阶段 | 真实发射测试处理测控空间级段转移回收供应方场址 | 每声明的参考流 | 签署记录；校准；原生来源；因果分配；不确定性保存各实测操作数的来源及原生口径，注明实际采用的换算或归属依据，以及所供结果是否已按该参考流计量。 |
| cp_assets | recovery_support_lifecycle | 完整全用户资产开发测试生命原生供应范围 | 真实一手计量运单供应方记录 | 真实服务资产区别客户载荷、组次原生总成事件端口、开发鉴定测试制造安装投产使用翻修再鉴定更换退役真实回收复用终止、全部用户使用量期间、原生供应功能单位端口已含缺口 | 核实同组真实阶段量全用户分母及逐原生已含范围，不用承诺飞次或制造等于完整生命。共享资产事件跨全部用户仅一次，原载荷制造独立 原始观测和对账总量保留其记录口径。负担行只分配仍共享的总量，已归属总量仅除以同队列、同交接点的正合格产出；已与该参考流等效的结果原值沿用。零产出时保留负担并记录去向。 | 逐真实原生总成事件供应单位真实使用量 | 逐事件及期间闭合 | 真实原始任务飞行返回验收报告期间完整服务资产阶段 | 真实发射测试处理测控空间级段转移回收供应方场址 | 每声明的参考流 | 签署记录；校准；原生来源；因果分配；不确定性保存各实测操作数的来源及原生口径，注明实际采用的换算或归属依据，以及所供结果是否已按该参考流计量。 |
| cp_expand_other_actual_propellant | spaceflight_delivery | 必须展开身份 other_actual_propellant (inputs/product)：逐真实其他燃料氧化剂推进剂配方 | collected_record | requirement_id=other_actual_propellant; process_id=spaceflight_delivery; required_direction=inputs; required_flow_type=product; original_collection_protocol=cp_propellant; applicability_evidence; occurrence_event_id; concrete_row_id; physical_identity; formulation_or_species; phase; carbon_origin; particle_fraction; source_compartment; receiving_compartment; supply_or_handover_gate; provider_covered_cells; asset_component_event_and_lifecycle_phase; native_property; native_unit; measured_native_quantity; source_record_id; allocation_all_users; normalization_denominator; per_identity_amount_calculation; verification_evidence; unresolved_reason; occurrence_to_row_reconciliation; carrier_and_supply_state; meter_id; integrated_energy_or_power_time; fuel_as_received_quantity; heating_value_basis; supply_return_state; responsible_failure_and_readiness; complete_provider_exclusion; applicability_decision_record; covered_concrete_rows; excluded_occurrence_reason; completion_evidence; propellant_identity; oxidizer_identity; stock_fate; test_withdrawal; observed_quantity_state; conversion_or_allocation_evidence | 条件精确液固混合其他配方状态原生供应端口，逐真实燃料氧化剂组分角色不虚构配方默认使用。含真实级段测试归运输客户持有提取上游一次，供应复合剂与其已含组分互斥。 本范围是必须落实的身份识别要求，不是交换流。使用原节点采集协议及其记录，先按真实身份、端口及独立功能拆分，再将保留的数量、基准及证据规则分别用于各兼容具体行。不得将异质身份合并数量或从总括名称推断原生属性单位。未发生须有证据，适用性或身份未知则阻止完成。 按实际燃料、已交付推进剂混合物和独立供应的氧化剂分别启用。记录原生质量、状态、组成、期初期末、试验领用、内部移交、退回和实测去向。预混物在整体交付量与经对账的组分之间择一核算。燃料仅以有证据的相容热值折能；氧化剂独立作物料平衡。逐事件登记实际身份、边界、期间、独立原生数量及负责运营方。按实际发生保留待机、失败、返工及库存；仅以供应方已覆盖阶段替代相同直接作业。 每项适用性判断须留证。经证实不发生仅关闭所述范围和时段，缺记录仍未解决。发生的要求须将全部事件映射到具体row ID及相容原生数量，或精确映射至已覆盖行和供应方责任，并逐项说明排除理由。证据须覆盖身份、支持单位、计算、原始记录及全部去向；既有与新增分支对同一事件互斥覆盖，协议本身不作为交换。完成须无未分配事件、无重复覆盖、无相关数量或身份未决项。按有证据的实际分支采集原始字段。仅属于不适用分支的字段须注明理由；适用分支缺少的计量仍须登记待决。 | 燃料或交付混合物用原生单位，单独交付的氧化剂用其物料单位 | 每次真实事件及每项有证据的未发生判断 | 完整声明队列及归属资产寿命关联事件 | 仅本过程真实责任场所及供应方 | 先对账原生事件总量，仅汇总身份、状态、单位、交接点及期间均相容的量。按相应计算规则逐行核算一次：只分配仍共享的负担，目标总量仅除以同口径的正合格产出；等效每参考流数值原值沿用，零产出期间不作除法并保留处置记录。 | 对账整体混合物或独立组分、试验领用及实测去向；热值仅用于相容燃料口径。 对上述具体身份及相容输入口径，仅在数量的归属和归一化状态与下式前提匹配时使用该规则：逐真实归属推进剂供应 / N 保留原始凭据、实际采用的系数和结果单位。数值来源模式：calculated_value；适用范围：site_specific；归一化基准：每声明的参考流；基准类型：reference_flow；证据类型：calculated_from_collection；采集协议：cp_propellant；来源：unsd-cpc3-65320; ghg-product-2011。须有原始记录、精确原生支持及逐具体行核验；这些规则不提供缺失身份或数值。 完成判据：check_occurrence_completion。 |
| cp_expand_flight_pressurant | spaceflight_delivery | 必须展开身份 flight_pressurant (inputs/product)：真实飞行增压吹扫供应 | collected_record | requirement_id=flight_pressurant; process_id=spaceflight_delivery; required_direction=inputs; required_flow_type=product; original_collection_protocol=cp_propellant; applicability_evidence; occurrence_event_id; concrete_row_id; physical_identity; formulation_or_species; phase; carbon_origin; particle_fraction; source_compartment; receiving_compartment; supply_or_handover_gate; provider_covered_cells; asset_component_event_and_lifecycle_phase; native_property; native_unit; measured_native_quantity; source_record_id; allocation_all_users; normalization_denominator; per_identity_amount_calculation; verification_evidence; unresolved_reason; occurrence_to_row_reconciliation; operation_record; material_sku; formulation_grade_state; independent_function; supplier; package_tare; opening_stock; net_receipts; unused_returns; closing_stock; failed_use; destination; applicability_decision_record; covered_concrete_rows; excluded_occurrence_reason; completion_evidence; observed_quantity_state; conversion_or_allocation_evidence | 真实化学气体状态压力原生端口飞行或归属测试责任，不假定氦氮或全部气体排放。内部回收闭循环与地面供应独立，记录真实残留放散去向。 本范围是必须落实的身份识别要求，不是交换流。使用原节点采集协议及其记录，先按真实身份、端口及独立功能拆分，再将保留的数量、基准及证据规则分别用于各兼容具体行。不得将异质身份合并数量或从总括名称推断原生属性单位。未发生须有证据，适用性或身份未知则阻止完成。 以下采集条件仅限本项 inputs/product 的身份与交接点（真实飞行增压吹扫供应）。仅对实际发生的所述作业及独立消耗SKU或实物启用。记录材料或配方、等级状态、功能、供应方、扣包装皮重后的净量、库存变动、未用退回和去向。独立供应的包装衬材按材料及一次性或复用状态区分；完整配方或物理总成保留一个身份，组成信息不相加，不同外购品不得共用汇总数量。纳入失败使用、维护及返工，记录真实消耗而非仅采购量。 每项适用性判断须留证。经证实不发生仅关闭所述范围和时段，缺记录仍未解决。发生的要求须将全部事件映射到具体row ID及相容原生数量，或精确映射至已覆盖行和供应方责任，并逐项说明排除理由。证据须覆盖身份、支持单位、计算、原始记录及全部去向；既有与新增分支对同一事件互斥覆盖，协议本身不作为交换。完成须无未分配事件、无重复覆盖、无相关数量或身份未决项。按有证据的实际分支采集原始字段。不适用的操作数须关联分支判定，适用但缺乏实测或依据的数量登记待决。 | 实际品项、配方或物件在规定交接点及状态下的原生数量 | 每次真实事件及每项有证据的未发生判断 | 完整声明队列及归属资产寿命关联事件 | 仅本过程真实责任场所及供应方 | 先对账原生事件总量，仅汇总身份、状态、单位、交接点及期间均相容的量。按相应计算规则逐行核算一次：只分配仍共享的负担，目标总量仅除以同口径的正合格产出；等效每参考流数值原值沿用，零产出期间不作除法并保留处置记录。 | 逐批核对收货、期初期末、退回、耗用及互斥去向。件数或体积折质量须有单件质量或相容状态密度依据；产品身份以外的包装和衬材独立登记。 对上述具体身份及相容输入口径，仅在数量的归属和归一化状态与下式前提匹配时使用该规则：真实归属气体供应 / N 保留原始凭据、实际采用的系数和结果单位。数值来源模式：calculated_value；适用范围：site_specific；归一化基准：每声明的参考流；基准类型：reference_flow；证据类型：calculated_from_collection；采集协议：cp_propellant；来源：unsd-cpc3-65320; ghg-product-2011。须有原始记录、精确原生支持及逐具体行核验；这些规则不提供缺失身份或数值。 完成判据：check_occurrence_completion。 |
| cp_expand_flight_other_energy | spaceflight_delivery | 必须展开身份 flight_other_energy (inputs/product)：真实外供非推进剂飞行能源 | collected_record | requirement_id=flight_other_energy; process_id=spaceflight_delivery; required_direction=inputs; required_flow_type=product; original_collection_protocol=cp_propellant; applicability_evidence; occurrence_event_id; concrete_row_id; physical_identity; formulation_or_species; phase; carbon_origin; particle_fraction; source_compartment; receiving_compartment; supply_or_handover_gate; provider_covered_cells; asset_component_event_and_lifecycle_phase; native_property; native_unit; measured_native_quantity; source_record_id; allocation_all_users; normalization_denominator; per_identity_amount_calculation; verification_evidence; unresolved_reason; occurrence_to_row_reconciliation; carrier_and_supply_state; meter_id; integrated_energy_or_power_time; fuel_as_received_quantity; heating_value_basis; supply_return_state; responsible_failure_and_readiness; complete_provider_exclusion; applicability_decision_record; covered_concrete_rows; excluded_occurrence_reason; completion_evidence; observed_quantity_state; conversion_or_allocation_evidence | 仅真实外供充入能源产品及其原生供应端口储能责任。含真实入射太阳资源的直接环境资源为独立基本投入，不是产品。内部太阳光电发电转换非第二外购电。须真实飞行器转移热电货物照护责任共用户原生储存供应基准。 本范围是必须落实的身份识别要求，不是交换流。使用原节点采集协议及其记录，先按真实身份、端口及独立功能拆分，再将保留的数量、基准及证据规则分别用于各兼容具体行。不得将异质身份合并数量或从总括名称推断原生属性单位。未发生须有证据，适用性或身份未知则阻止完成。 以下采集条件仅限本项 inputs/product 的身份与交接点（真实外供非推进剂飞行能源）。存在未被完整供应方覆盖的实际计量电力、购入热冷或消耗燃料时启用。区分载能体、供应状态和独立仪表，燃料组成及收到基数量与有用热分别识别；积分能量不再乘时长，功率须有时间积分证据；燃料换能量须匹配实际热值基准，供热须有供回状态。纳入应分摊待机、空载、失败和返工职责；总表仅协调分项，不再次相加。 每项适用性判断须留证。经证实不发生仅关闭所述范围和时段，缺记录仍未解决。发生的要求须将全部事件映射到具体row ID及相容原生数量，或精确映射至已覆盖行和供应方责任，并逐项说明排除理由。证据须覆盖身份、支持单位、计算、原始记录及全部去向；既有与新增分支对同一事件互斥覆盖，协议本身不作为交换。完成须无未分配事件、无重复覆盖、无相关数量或身份未决项。按有证据的实际分支采集原始字段。不适用的操作数须关联分支判定，适用但缺乏实测或依据的数量登记待决。 | 实测交付状态下的载能体量；能量采用有记录的仪表或热值口径 | 每次真实事件及每项有证据的未发生判断 | 完整声明队列及归属资产寿命关联事件 | 仅本过程真实责任场所及供应方 | 先对账原生事件总量，仅汇总身份、状态、单位、交接点及期间均相容的量。按相应计算规则逐行核算一次：只分配仍共享的负担，目标总量仅除以同口径的正合格产出；等效每参考流数值原值沿用，零产出期间不作除法并保留处置记录。 | 保留仪表期间、供应状态及交接点。积分能量已含时长；仅在对应路线由功率和实测时长，或相容燃料量与有据热值计算能量。区分燃料提取、有用热冷交付及已覆盖的上游阶段。 对上述具体身份及相容输入口径，仅在数量的归属和归一化状态与下式前提匹配时使用该规则：逐真实归属外供充入能源产品 / N 保留原始凭据、实际采用的系数和结果单位。数值来源模式：calculated_value；适用范围：site_specific；归一化基准：每声明的参考流；基准类型：reference_flow；证据类型：calculated_from_collection；采集协议：cp_propellant；来源：unsd-cpc3-65320; ghg-product-2011。须有原始记录、精确原生支持及逐具体行核验；这些规则不提供缺失身份或数值。 完成判据：check_occurrence_completion。 |
| cp_expand_flight_direct_resource | spaceflight_delivery | 必须展开身份 flight_direct_resource (inputs/elementary)：真实飞行直接环境能源资源投入 | collected_record | requirement_id=flight_direct_resource; process_id=spaceflight_delivery; required_direction=inputs; required_flow_type=elementary; original_collection_protocol=cp_propellant; applicability_evidence; occurrence_event_id; concrete_row_id; physical_identity; formulation_or_species; phase; carbon_origin; particle_fraction; source_compartment; receiving_compartment; supply_or_handover_gate; provider_covered_cells; asset_component_event_and_lifecycle_phase; native_property; native_unit; measured_native_quantity; source_record_id; allocation_all_users; normalization_denominator; per_identity_amount_calculation; verification_evidence; unresolved_reason; occurrence_to_row_reconciliation; substance_identity; chemical_form; environmental_compartment; carbon_origin; particle_fraction_or_count_basis; measured_or_calculated_release; species_conversion_evidence; applicability_decision_record; covered_concrete_rows; excluded_occurrence_reason; completion_evidence; observed_quantity_state; conversion_or_allocation_evidence | 条件真实入射太阳等直接取用环境资源，具真实来源子介质原生基准，区别外供充入产品内部发电。不假定太阳因子资源身份，须真实收集转换责任量证据。太阳转换储存设备另计完整全用户生命。 本范围是必须落实的身份识别要求，不是交换流。使用原节点采集协议及其记录，先按真实身份、端口及独立功能拆分，再将保留的数量、基准及证据规则分别用于各兼容具体行。不得将异质身份合并数量或从总括名称推断原生属性单位。未发生须有证据，适用性或身份未知则阻止完成。 以下采集条件仅限本项 inputs/elementary 的身份与交接点（真实飞行直接环境能源资源投入）。仅对由实际环境来源跨界进入的、有证据的资源摄取启用。记录具体物质及形态、来源或接收介质、适用的化石或生物碳来源、适用的粒径组分或粒子数粒径基础及采样期；保留元素与分子口径，换算须有化学计量和相容物种证据。收集物流中的污染物在实际环境排放边界前归接收物流，不用CO2、NOx、VOC、COD或泛颗粒物流代替缺失物种。 每项适用性判断须留证。经证实不发生仅关闭所述范围和时段，缺记录仍未解决。发生的要求须将全部事件映射到具体row ID及相容原生数量，或精确映射至已覆盖行和供应方责任，并逐项说明排除理由。证据须覆盖身份、支持单位、计算、原始记录及全部去向；既有与新增分支对同一事件互斥覆盖，协议本身不作为交换。完成须无未分配事件、无重复覆盖、无相关数量或身份未决项。按有证据的实际分支采集原始字段。不适用的操作数须关联分支判定，适用但缺乏实测或依据的数量登记待决。 | 本物质、资源或物理排放在实际环境介质的已核实原生属性与单位 | 每次真实事件及每项有证据的未发生判断 | 完整声明队列及归属资产寿命关联事件 | 仅本过程真实责任场所及供应方 | 先对账原生事件总量，仅汇总身份、状态、单位、交接点及期间均相容的量。按相应计算规则逐行核算一次：只分配仍共享的负担，目标总量仅除以同口径的正合格产出；等效每参考流数值原值沿用，零产出期间不作除法并保留处置记录。 | 采样或活动量及适用因子须对应物种、相态、来源和环境介质。按实际对象区分质量、粒子数、热量及元素当量；换算须有依据，重叠总量不可相加。 对上述具体身份及相容输入口径，仅在数量的归属和归一化状态与下式前提匹配时使用该规则：真实飞行直接资源归属量 / N 保留原始凭据、实际采用的系数和结果单位。数值来源模式：calculated_value；适用范围：site_specific；归一化基准：每声明的参考流；基准类型：reference_flow；证据类型：calculated_from_collection；采集协议：cp_propellant；来源：unsd-cpc3-65320; ghg-product-2011。须有原始记录、精确原生支持及逐具体行核验；这些规则不提供缺失身份或数值。 完成判据：check_occurrence_completion。 |
| cp_expand_flight_actual_species | spaceflight_delivery | 必须展开身份 flight_actual_species (outputs/elementary)：真实飞行级段物质向其高度接收子介质释放 | collected_record | requirement_id=flight_actual_species; process_id=spaceflight_delivery; required_direction=outputs; required_flow_type=elementary; original_collection_protocol=cp_flight_fates; applicability_evidence; occurrence_event_id; concrete_row_id; physical_identity; formulation_or_species; phase; carbon_origin; particle_fraction; source_compartment; receiving_compartment; supply_or_handover_gate; provider_covered_cells; asset_component_event_and_lifecycle_phase; native_property; native_unit; measured_native_quantity; source_record_id; allocation_all_users; normalization_denominator; per_identity_amount_calculation; verification_evidence; unresolved_reason; occurrence_to_row_reconciliation; substance_identity; chemical_form; environmental_compartment; carbon_origin; particle_fraction_or_count_basis; measured_or_calculated_release; species_conversion_evidence; applicability_decision_record; covered_concrete_rows; excluded_occurrence_reason; completion_evidence; observed_quantity_state; conversion_or_allocation_evidence | 逐真实尾气放散泄漏再入气颗粒化合物材质粒径相态来源原生数量高度时间位置子介质。投入化学元素账区别真实排放物，不总烟羽NOx/SOx/CO2当量或已知高度绑空气未指明。释放大物体须真实独立去向状态分类，不自动原始排放。 本范围是必须落实的身份识别要求，不是交换流。使用原节点采集协议及其记录，先按真实身份、端口及独立功能拆分，再将保留的数量、基准及证据规则分别用于各兼容具体行。不得将异质身份合并数量或从总括名称推断原生属性单位。未发生须有证据，适用性或身份未知则阻止完成。 以下采集条件仅限本项 outputs/elementary 的身份与交接点（真实飞行级段物质向其高度接收子介质释放）。仅对进入已记录接收介质且有观测或适用计算依据的实际释放启用。记录具体物质及形态、来源或接收介质、适用的化石或生物碳来源、适用的粒径组分或粒子数粒径基础及采样期；保留元素与分子口径，换算须有化学计量和相容物种证据。收集物流中的污染物在实际环境排放边界前归接收物流，不用CO2、NOx、VOC、COD或泛颗粒物流代替缺失物种。 每项适用性判断须留证。经证实不发生仅关闭所述范围和时段，缺记录仍未解决。发生的要求须将全部事件映射到具体row ID及相容原生数量，或精确映射至已覆盖行和供应方责任，并逐项说明排除理由。证据须覆盖身份、支持单位、计算、原始记录及全部去向；既有与新增分支对同一事件互斥覆盖，协议本身不作为交换。完成须无未分配事件、无重复覆盖、无相关数量或身份未决项。按有证据的实际分支采集原始字段。不适用的操作数须关联分支判定，适用但缺乏实测或依据的数量登记待决。 | 本物质、资源或物理排放在实际环境介质的已核实原生属性与单位 | 每次真实事件及每项有证据的未发生判断 | 完整声明队列及归属资产寿命关联事件 | 仅本过程真实责任场所及供应方 | 先对账原生事件总量，仅汇总身份、状态、单位、交接点及期间均相容的量。按相应计算规则逐行核算一次：只分配仍共享的负担，目标总量仅除以同口径的正合格产出；等效每参考流数值原值沿用，零产出期间不作除法并保留处置记录。 | 采样或活动量及适用因子须对应物种、相态、来源和环境介质。按实际对象区分质量、粒子数、热量及元素当量；换算须有依据，重叠总量不可相加。 对上述具体身份及相容输入口径，仅在数量的归属和归一化状态与下式前提匹配时使用该规则：逐真实分来源高度释放 / N 保留原始凭据、实际采用的系数和结果单位。数值来源模式：calculated_value；适用范围：site_specific；归一化基准：每声明的参考流；基准类型：reference_flow；证据类型：calculated_from_collection；采集协议：cp_flight_fates；来源：nasa-atmosphere-2024; esa-environment-2024。须有原始记录、精确原生支持及逐具体行核验；这些规则不提供缺失身份或数值。 完成判据：check_occurrence_completion。 |
| cp_expand_other_ground_supply | ground_campaign | 必须展开身份 other_ground_supply (inputs/product)：真实其他地面燃料气体处理供应 | collected_record | requirement_id=other_ground_supply; process_id=ground_campaign; required_direction=inputs; required_flow_type=product; original_collection_protocol=cp_ground; applicability_evidence; occurrence_event_id; concrete_row_id; physical_identity; formulation_or_species; phase; carbon_origin; particle_fraction; source_compartment; receiving_compartment; supply_or_handover_gate; provider_covered_cells; asset_component_event_and_lifecycle_phase; native_property; native_unit; measured_native_quantity; source_record_id; allocation_all_users; normalization_denominator; per_identity_amount_calculation; verification_evidence; unresolved_reason; occurrence_to_row_reconciliation; operation_record; material_sku; formulation_grade_state; independent_function; supplier; package_tare; opening_stock; net_receipts; unused_returns; closing_stock; failed_use; destination; applicability_decision_record; covered_concrete_rows; excluded_occurrence_reason; completion_evidence; observed_quantity_state; conversion_or_allocation_evidence | 条件真实低温吹扫工艺气冷却剂制冷剂化学清洗物料包装其他能源配方状态原生端口。不假定组成，不重复已分飞行推进剂测试量；复用容器适配器按真实生命分配。 本范围是必须落实的身份识别要求，不是交换流。使用原节点采集协议及其记录，先按真实身份、端口及独立功能拆分，再将保留的数量、基准及证据规则分别用于各兼容具体行。不得将异质身份合并数量或从总括名称推断原生属性单位。未发生须有证据，适用性或身份未知则阻止完成。 以下采集条件仅限本项 inputs/product 的身份与交接点（真实其他地面燃料气体处理供应）。仅对实际发生的所述作业及独立消耗SKU或实物启用。记录材料或配方、等级状态、功能、供应方、扣包装皮重后的净量、库存变动、未用退回和去向。独立供应的包装衬材按材料及一次性或复用状态区分；完整配方或物理总成保留一个身份，组成信息不相加，不同外购品不得共用汇总数量。纳入失败使用、维护及返工，记录真实消耗而非仅采购量。 每项适用性判断须留证。经证实不发生仅关闭所述范围和时段，缺记录仍未解决。发生的要求须将全部事件映射到具体row ID及相容原生数量，或精确映射至已覆盖行和供应方责任，并逐项说明排除理由。证据须覆盖身份、支持单位、计算、原始记录及全部去向；既有与新增分支对同一事件互斥覆盖，协议本身不作为交换。完成须无未分配事件、无重复覆盖、无相关数量或身份未决项。按有证据的实际分支采集原始字段。不适用的操作数须关联分支判定，适用但缺乏实测或依据的数量登记待决。 | 实际品项、配方或物件在规定交接点及状态下的原生数量 | 每次真实事件及每项有证据的未发生判断 | 完整声明队列及归属资产寿命关联事件 | 仅本过程真实责任场所及供应方 | 先对账原生事件总量，仅汇总身份、状态、单位、交接点及期间均相容的量。按相应计算规则逐行核算一次：只分配仍共享的负担，目标总量仅除以同口径的正合格产出；等效每参考流数值原值沿用，零产出期间不作除法并保留处置记录。 | 逐批核对收货、期初期末、退回、耗用及互斥去向。件数或体积折质量须有单件质量或相容状态密度依据；产品身份以外的包装和衬材独立登记。 对上述具体身份及相容输入口径，仅在数量的归属和归一化状态与下式前提匹配时使用该规则：逐真实归属供应量 / N 保留原始凭据、实际采用的系数和结果单位。数值来源模式：calculated_value；适用范围：site_specific；归一化基准：每声明的参考流；基准类型：reference_flow；证据类型：calculated_from_collection；采集协议：cp_ground；来源：unsd-cpc3-65320; ghg-product-2011。须有原始记录、精确原生支持及逐具体行核验；这些规则不提供缺失身份或数值。 完成判据：check_occurrence_completion。 |
| cp_expand_ground_actual_waste | ground_campaign | 必须展开身份 ground_actual_waste (outputs/waste)：真实地面处理测试任务产生废物 | collected_record | requirement_id=ground_actual_waste; process_id=ground_campaign; required_direction=outputs; required_flow_type=waste; original_collection_protocol=cp_ground; applicability_evidence; occurrence_event_id; concrete_row_id; physical_identity; formulation_or_species; phase; carbon_origin; particle_fraction; source_compartment; receiving_compartment; supply_or_handover_gate; provider_covered_cells; asset_component_event_and_lifecycle_phase; native_property; native_unit; measured_native_quantity; source_record_id; allocation_all_users; normalization_denominator; per_identity_amount_calculation; verification_evidence; unresolved_reason; occurrence_to_row_reconciliation; waste_origin_event; material_or_true_mixture; moisture_basis; container_tare; opening_waste_stock; generated_waste; received_waste; handover_quantity; closing_waste_stock; onsite_treatment; receiver_id; applicability_decision_record; covered_concrete_rows; excluded_occurrence_reason; completion_evidence; observed_quantity_state; conversion_or_allocation_evidence | 真实受污物料废水失败试件仅具真实组成状态废物身份产生接收原生基准。可用回收推进剂设备留存库存直接排放独立，未核实不含下游处理。 本范围是必须落实的身份识别要求，不是交换流。使用原节点采集协议及其记录，先按真实身份、端口及独立功能拆分，再将保留的数量、基准及证据规则分别用于各兼容具体行。不得将异质身份合并数量或从总括名称推断原生属性单位。未发生须有证据，适用性或身份未知则阻止完成。 以下采集条件仅限本项 outputs/waste 的身份与交接点（真实地面处理测试任务产生废物）。本过程实际产生或接收所述废物时启用。记录材料或配方或真实共同收集混合物、干湿状态、容器皮重、来源事件、存量、交接关口及实际接收者；核对产生量+期初库存+接收量=交出量+期末库存+另列现场处理量。分收的不同废物分行，真实接收混合物可为一行，其组分仅作不可相加审计；有用回收、客户保留物与废物去向分开，不自动给替代抵扣。 每项适用性判断须留证。经证实不发生仅关闭所述范围和时段，缺记录仍未解决。发生的要求须将全部事件映射到具体row ID及相容原生数量，或精确映射至已覆盖行和供应方责任，并逐项说明排除理由。证据须覆盖身份、支持单位、计算、原始记录及全部去向；既有与新增分支对同一事件互斥覆盖，协议本身不作为交换。完成须无未分配事件、无重复覆盖、无相关数量或身份未决项。按有证据的实际分支采集原始字段。不适用的操作数须关联分支判定，适用但缺乏实测或依据的数量登记待决。 | 接收方验收的具体废物或实际混合收集物在实测状态下的原生数量 | 每次真实事件及每项有证据的未发生判断 | 完整声明队列及归属资产寿命关联事件 | 仅本过程真实责任场所及供应方 | 先对账原生事件总量，仅汇总身份、状态、单位、交接点及期间均相容的量。按相应计算规则逐行核算一次：只分配仍共享的负担，目标总量仅除以同口径的正合格产出；等效每参考流数值原值沿用，零产出期间不作除法并保留处置记录。 | 以接收记录核对产生、库存、场内处理和实测交付。混合物流量与组分测量分开；干湿基或质量体积换算须有相容组成或密度。接收转移和环境直排按不同交接点记录。 对上述具体身份及相容输入口径，仅在数量的归属和归一化状态与下式前提匹配时使用该规则：逐真实互斥地面废物产生 / N 保留原始凭据、实际采用的系数和结果单位。数值来源模式：calculated_value；适用范围：site_specific；归一化基准：每声明的参考流；基准类型：reference_flow；证据类型：calculated_from_collection；采集协议：cp_ground；来源：unsd-cpc3-65320; ghg-product-2011。须有原始记录、精确原生支持及逐具体行核验；这些规则不提供缺失身份或数值。 完成判据：check_occurrence_completion。 |
| cp_expand_ground_actual_species | ground_campaign | 必须展开身份 ground_actual_species (outputs/elementary)：真实地面任务物质向声明介质释放 | collected_record | requirement_id=ground_actual_species; process_id=ground_campaign; required_direction=outputs; required_flow_type=elementary; original_collection_protocol=cp_ground; applicability_evidence; occurrence_event_id; concrete_row_id; physical_identity; formulation_or_species; phase; carbon_origin; particle_fraction; source_compartment; receiving_compartment; supply_or_handover_gate; provider_covered_cells; asset_component_event_and_lifecycle_phase; native_property; native_unit; measured_native_quantity; source_record_id; allocation_all_users; normalization_denominator; per_identity_amount_calculation; verification_evidence; unresolved_reason; occurrence_to_row_reconciliation; substance_identity; chemical_form; environmental_compartment; carbon_origin; particle_fraction_or_count_basis; measured_or_calculated_release; species_conversion_evidence; applicability_decision_record; covered_concrete_rows; excluded_occurrence_reason; completion_evidence; observed_quantity_state; conversion_or_allocation_evidence | 真实测试燃烧放散泄漏蒸发冷却清洗径流组分相态来源粒径接收空气水土子介质。保留已知地面来源工况核实精确兼容身份，不默继空气未指明飞行地面排放或把全部水作污染物质量。 本范围是必须落实的身份识别要求，不是交换流。使用原节点采集协议及其记录，先按真实身份、端口及独立功能拆分，再将保留的数量、基准及证据规则分别用于各兼容具体行。不得将异质身份合并数量或从总括名称推断原生属性单位。未发生须有证据，适用性或身份未知则阻止完成。 以下采集条件仅限本项 outputs/elementary 的身份与交接点（真实地面任务物质向声明介质释放）。仅对进入已记录接收介质且有观测或适用计算依据的实际释放启用。记录具体物质及形态、来源或接收介质、适用的化石或生物碳来源、适用的粒径组分或粒子数粒径基础及采样期；保留元素与分子口径，换算须有化学计量和相容物种证据。收集物流中的污染物在实际环境排放边界前归接收物流，不用CO2、NOx、VOC、COD或泛颗粒物流代替缺失物种。 每项适用性判断须留证。经证实不发生仅关闭所述范围和时段，缺记录仍未解决。发生的要求须将全部事件映射到具体row ID及相容原生数量，或精确映射至已覆盖行和供应方责任，并逐项说明排除理由。证据须覆盖身份、支持单位、计算、原始记录及全部去向；既有与新增分支对同一事件互斥覆盖，协议本身不作为交换。完成须无未分配事件、无重复覆盖、无相关数量或身份未决项。按有证据的实际分支采集原始字段。不适用的操作数须关联分支判定，适用但缺乏实测或依据的数量登记待决。 | 本物质、资源或物理排放在实际环境介质的已核实原生属性与单位 | 每次真实事件及每项有证据的未发生判断 | 完整声明队列及归属资产寿命关联事件 | 仅本过程真实责任场所及供应方 | 先对账原生事件总量，仅汇总身份、状态、单位、交接点及期间均相容的量。按相应计算规则逐行核算一次：只分配仍共享的负担，目标总量仅除以同口径的正合格产出；等效每参考流数值原值沿用，零产出期间不作除法并保留处置记录。 | 采样或活动量及适用因子须对应物种、相态、来源和环境介质。按实际对象区分质量、粒子数、热量及元素当量；换算须有依据，重叠总量不可相加。 对上述具体身份及相容输入口径，仅在数量的归属和归一化状态与下式前提匹配时使用该规则：逐真实互斥直接地面释放 / N 保留原始凭据、实际采用的系数和结果单位。数值来源模式：calculated_value；适用范围：site_specific；归一化基准：每声明的参考流；基准类型：reference_flow；证据类型：calculated_from_collection；采集协议：cp_ground；来源：unsd-cpc3-65320; ghg-product-2011。须有原始记录、精确原生支持及逐具体行核验；这些规则不提供缺失身份或数值。 完成判据：check_occurrence_completion。 |
| cp_expand_recovery_other_energy | recovery_support_lifecycle | 必须展开身份 recovery_other_energy (inputs/product)：真实回收支持燃料外部能源 | collected_record | requirement_id=recovery_other_energy; process_id=recovery_support_lifecycle; required_direction=inputs; required_flow_type=product; original_collection_protocol=cp_recovery; applicability_evidence; occurrence_event_id; concrete_row_id; physical_identity; formulation_or_species; phase; carbon_origin; particle_fraction; source_compartment; receiving_compartment; supply_or_handover_gate; provider_covered_cells; asset_component_event_and_lifecycle_phase; native_property; native_unit; measured_native_quantity; source_record_id; allocation_all_users; normalization_denominator; per_identity_amount_calculation; verification_evidence; unresolved_reason; occurrence_to_row_reconciliation; carrier_and_supply_state; meter_id; integrated_energy_or_power_time; fuel_as_received_quantity; heating_value_basis; supply_return_state; responsible_failure_and_readiness; complete_provider_exclusion; applicability_decision_record; covered_concrete_rows; excluded_occurrence_reason; completion_evidence; observed_quantity_state; conversion_or_allocation_evidence | 真实船机公路打捞返程安全处理翻修能源配方状态端口原生活动含失败尝试未含支持责任。原生完整回收供应方替代已含范围，不默认回收船燃料距离。 本范围是必须落实的身份识别要求，不是交换流。使用原节点采集协议及其记录，先按真实身份、端口及独立功能拆分，再将保留的数量、基准及证据规则分别用于各兼容具体行。不得将异质身份合并数量或从总括名称推断原生属性单位。未发生须有证据，适用性或身份未知则阻止完成。 以下采集条件仅限本项 inputs/product 的身份与交接点（真实回收支持燃料外部能源）。存在未被完整供应方覆盖的实际计量电力、购入热冷或消耗燃料时启用。区分载能体、供应状态和独立仪表，燃料组成及收到基数量与有用热分别识别；积分能量不再乘时长，功率须有时间积分证据；燃料换能量须匹配实际热值基准，供热须有供回状态。纳入应分摊待机、空载、失败和返工职责；总表仅协调分项，不再次相加。 每项适用性判断须留证。经证实不发生仅关闭所述范围和时段，缺记录仍未解决。发生的要求须将全部事件映射到具体row ID及相容原生数量，或精确映射至已覆盖行和供应方责任，并逐项说明排除理由。证据须覆盖身份、支持单位、计算、原始记录及全部去向；既有与新增分支对同一事件互斥覆盖，协议本身不作为交换。完成须无未分配事件、无重复覆盖、无相关数量或身份未决项。按有证据的实际分支采集原始字段。不适用的操作数须关联分支判定，适用但缺乏实测或依据的数量登记待决。 | 实测交付状态下的载能体量；能量采用有记录的仪表或热值口径 | 每次真实事件及每项有证据的未发生判断 | 完整声明队列及归属资产寿命关联事件 | 仅本过程真实责任场所及供应方 | 先对账原生事件总量，仅汇总身份、状态、单位、交接点及期间均相容的量。按相应计算规则逐行核算一次：只分配仍共享的负担，目标总量仅除以同口径的正合格产出；等效每参考流数值原值沿用，零产出期间不作除法并保留处置记录。 | 保留仪表期间、供应状态及交接点。积分能量已含时长；仅在对应路线由功率和实测时长，或相容燃料量与有据热值计算能量。区分燃料提取、有用热冷交付及已覆盖的上游阶段。 对上述具体身份及相容输入口径，仅在数量的归属和归一化状态与下式前提匹配时使用该规则：逐真实归属回收支持能源 / N 保留原始凭据、实际采用的系数和结果单位。数值来源模式：calculated_value；适用范围：site_specific；归一化基准：每声明的参考流；基准类型：reference_flow；证据类型：calculated_from_collection；采集协议：cp_recovery；来源：unsd-cpc3-65320; ghg-product-2011。须有原始记录、精确原生支持及逐具体行核验；这些规则不提供缺失身份或数值。 完成判据：check_occurrence_completion。 |
| cp_expand_service_assets | recovery_support_lifecycle | 必须展开身份 service_assets (inputs/product)：真实运输系统资产完整生命事件 | collected_record | requirement_id=service_assets; process_id=recovery_support_lifecycle; required_direction=inputs; required_flow_type=product; original_collection_protocol=cp_assets; applicability_evidence; occurrence_event_id; concrete_row_id; physical_identity; formulation_or_species; phase; carbon_origin; particle_fraction; source_compartment; receiving_compartment; supply_or_handover_gate; provider_covered_cells; asset_component_event_and_lifecycle_phase; native_property; native_unit; measured_native_quantity; source_record_id; allocation_all_users; normalization_denominator; per_identity_amount_calculation; verification_evidence; unresolved_reason; occurrence_to_row_reconciliation; asset_or_reusable_id; model_configuration; included_initial_components; lifecycle_phase; manufacture_native_quantity; target_duty; all_user_same_cohort_lifetime_duty; replacement_event; provider_coverage_cells; applicability_decision_record; covered_concrete_rows; excluded_occurrence_reason; completion_evidence; observed_quantity_state; conversion_or_allocation_evidence; supply_or_service_gate; accepted_service_demand; provider_functional_unit; provider_intensity_basis; covered_lifecycle_stages | 真实一次性复用发射转移货运级段飞行器适配器整流罩容器或地面测试台测控回收总成事件原生端口全用户阶段量。含运输开发试件再鉴定更换处置，不用承诺固定复用次数或客户卫星制造。 本范围是必须落实的身份识别要求，不是交换流。使用原节点采集协议及其记录，先按真实身份、端口及独立功能拆分，再将保留的数量、基准及证据规则分别用于各兼容具体行。不得将异质身份合并数量或从总括名称推断原生属性单位。未发生须有证据，适用性或身份未知则阻止完成。 对本项规定的实体资产或周转品，核实供应交接点、初始部件以及实际替换、维护、清洗、失败和退役记录。租赁或综合供应合同须核实覆盖范围；本项包含已交付服务时按实际验收的原生需求计量，仅另行追溯未覆盖的资产阶段。直接建模资产按同队列目标作业量与全用户有据正寿命作业量之比分配，禁止将整个设施归给一个服务。 每项适用性判断须留证。经证实不发生仅关闭所述范围和时段，缺记录仍未解决。发生的要求须将全部事件映射到具体row ID及相容原生数量，或精确映射至已覆盖行和供应方责任，并逐项说明排除理由。证据须覆盖身份、支持单位、计算、原始记录及全部去向；既有与新增分支对同一事件互斥覆盖，协议本身不作为交换。完成须无未分配事件、无重复覆盖、无相关数量或身份未决项。按有证据的实际分支采集原始字段。不适用的操作数须关联分支判定，适用但缺乏实测或依据的数量登记待决。 | 实体资产或周转品按已核实的制造或供应单位；同一队列的相容作业量；范围内的交付服务用其原生功能单位 | 每次真实事件及每项有证据的未发生判断 | 完整声明队列及归属资产寿命关联事件 | 仅本过程真实责任场所及供应方 | 先对账原生事件总量，仅汇总身份、状态、单位、交接点及期间均相容的量。按相应计算规则逐行核算一次：只分配仍共享的负担，目标总量仅除以同口径的正合格产出；等效每参考流数值原值沿用，零产出期间不作除法并保留处置记录。 | 实体资产按有记录的供应交接量乘目标作业量与同队列全用户正寿命作业量之比，保留配置、投运、更换及退役或剩余寿命记录。范围内如有已交付服务，按已核实原生强度乘相容交付需求，留存覆盖凭据，未覆盖阶段单列。 对该交接点相容的资产量或已独立核实的服务结果，仅在数量的归属和归一化状态与下式前提匹配时使用该规则：真实全用户生命归属资产事件 / N 保留原始凭据、实际采用的系数和结果单位。数值来源模式：calculated_value；适用范围：site_specific；归一化基准：每声明的参考流；基准类型：reference_flow；证据类型：calculated_from_collection；采集协议：cp_assets；来源：unsd-cpc3-65320; ghg-product-2011。须有原始记录、精确原生支持及逐具体行核验；这些规则不提供缺失身份或数值。 完成判据：check_occurrence_completion。 |
| cp_expand_native_space_provider | recovery_support_lifecycle | 必须展开身份 native_space_provider (inputs/product)：真实原生发射转移处理支持服务 | collected_record | requirement_id=native_space_provider; process_id=recovery_support_lifecycle; required_direction=inputs; required_flow_type=product; original_collection_protocol=cp_assets; applicability_evidence; occurrence_event_id; concrete_row_id; physical_identity; formulation_or_species; phase; carbon_origin; particle_fraction; source_compartment; receiving_compartment; supply_or_handover_gate; provider_covered_cells; asset_component_event_and_lifecycle_phase; native_property; native_unit; measured_native_quantity; source_record_id; allocation_all_users; normalization_denominator; per_identity_amount_calculation; verification_evidence; unresolved_reason; occurrence_to_row_reconciliation; provider_contract; independent_function; provider_gates; native_functional_unit; delivered_quantity; covered_process_phase_cells; uncovered_foreground_rows; applicability_decision_record; covered_concrete_rows; excluded_occurrence_reason; completion_evidence; observed_quantity_state; conversion_or_allocation_evidence; provider_functional_unit; accepted_service_demand; provider_intensity_basis; covered_service_stages | 真实原生承运段处理测控地面通信回收维护处理服务功能单位端口范围。发射位保险费用公斤载荷能力卫星制造承诺成功不自动作一验收委托，精确已含自营范围仅一次替代。 本范围是必须落实的身份识别要求，不是交换流。使用原节点采集协议及其记录，先按真实身份、端口及独立功能拆分，再将保留的数量、基准及证据规则分别用于各兼容具体行。不得将异质身份合并数量或从总括名称推断原生属性单位。未发生须有证据，适用性或身份未知则阻止完成。 以下采集条件仅限本项 inputs/product 的身份与交接点（真实原生发射转移处理支持服务）。仅在本PCR范围内实际委托独立功能时启用。记录合同、交付服务功能、关口、原生功能单位、实际交付量及具体覆盖的过程和寿命阶段；逐项与自营活动比对，完整供应方或未覆盖前景活动仅计一次。不用金额、材料质量或假设件数替代真实功能；同一最终服务不通过外部最终产品供应方递归重复计入。 每项适用性判断须留证。经证实不发生仅关闭所述范围和时段，缺记录仍未解决。发生的要求须将全部事件映射到具体row ID及相容原生数量，或精确映射至已覆盖行和供应方责任，并逐项说明排除理由。证据须覆盖身份、支持单位、计算、原始记录及全部去向；既有与新增分支对同一事件互斥覆盖，协议本身不作为交换。完成须无未分配事件、无重复覆盖、无相关数量或身份未决项。按有证据的实际分支采集原始字段。不适用的操作数须关联分支判定，适用但缺乏实测或依据的数量登记待决。 | 已核实的合同交付功能单位；仅独立可计数且已验收的结果使用 Item(s) | 每次真实事件及每项有证据的未发生判断 | 完整声明队列及归属资产寿命关联事件 | 仅本过程真实责任场所及供应方 | 先对账原生事件总量，仅汇总身份、状态、单位、交接点及期间均相容的量。按相应计算规则逐行核算一次：只分配仍共享的负担，目标总量仅除以同口径的正合格产出；等效每参考流数值原值沿用，零产出期间不作除法并保留处置记录。 | 按指定交接点实际验收量计量。仅在单位强度换算为总负担时，以供应方强度乘同一原生单位的需求量。保留合同范围、验收、原生单位及覆盖阶段记录。仅按时间交付的功能以时长计量。 对按合同口径已验收的服务，仅在数量的归属和归一化状态与下式前提匹配时使用该规则：真实原生供应方归属量 / N 保留原始凭据、实际采用的系数和结果单位。数值来源模式：calculated_value；适用范围：site_specific；归一化基准：每声明的参考流；基准类型：reference_flow；证据类型：calculated_from_collection；采集协议：cp_assets；来源：unsd-cpc3-65320; ghg-product-2011。须有原始记录、精确原生支持及逐具体行核验；这些规则不提供缺失身份或数值。 完成判据：check_occurrence_completion。 |
| cp_expand_other_support_supply | recovery_support_lifecycle | 必须展开身份 other_support_supply (inputs/product)：真实回收维护船员人员支持供应 | collected_record | requirement_id=other_support_supply; process_id=recovery_support_lifecycle; required_direction=inputs; required_flow_type=product; original_collection_protocol=cp_recovery; applicability_evidence; occurrence_event_id; concrete_row_id; physical_identity; formulation_or_species; phase; carbon_origin; particle_fraction; source_compartment; receiving_compartment; supply_or_handover_gate; provider_covered_cells; asset_component_event_and_lifecycle_phase; native_property; native_unit; measured_native_quantity; source_record_id; allocation_all_users; normalization_denominator; per_identity_amount_calculation; verification_evidence; unresolved_reason; occurrence_to_row_reconciliation; operation_record; material_sku; formulation_grade_state; independent_function; supplier; package_tare; opening_stock; net_receipts; unused_returns; closing_stock; failed_use; destination; applicability_decision_record; covered_concrete_rows; excluded_occurrence_reason; completion_evidence; observed_quantity_state; conversion_or_allocation_evidence | 真实物料化学润滑修理辅助制冷剂人员供应原生身份状态端口。须真实共享生命接收，不假定人体饮食代谢负荷或重复总成初始件。 本范围是必须落实的身份识别要求，不是交换流。使用原节点采集协议及其记录，先按真实身份、端口及独立功能拆分，再将保留的数量、基准及证据规则分别用于各兼容具体行。不得将异质身份合并数量或从总括名称推断原生属性单位。未发生须有证据，适用性或身份未知则阻止完成。 以下采集条件仅限本项 inputs/product 的身份与交接点（真实回收维护船员人员支持供应）。仅对实际发生的所述作业及独立消耗SKU或实物启用。记录材料或配方、等级状态、功能、供应方、扣包装皮重后的净量、库存变动、未用退回和去向。独立供应的包装衬材按材料及一次性或复用状态区分；完整配方或物理总成保留一个身份，组成信息不相加，不同外购品不得共用汇总数量。纳入失败使用、维护及返工，记录真实消耗而非仅采购量。 每项适用性判断须留证。经证实不发生仅关闭所述范围和时段，缺记录仍未解决。发生的要求须将全部事件映射到具体row ID及相容原生数量，或精确映射至已覆盖行和供应方责任，并逐项说明排除理由。证据须覆盖身份、支持单位、计算、原始记录及全部去向；既有与新增分支对同一事件互斥覆盖，协议本身不作为交换。完成须无未分配事件、无重复覆盖、无相关数量或身份未决项。按有证据的实际分支采集原始字段。不适用的操作数须关联分支判定，适用但缺乏实测或依据的数量登记待决。 | 实际品项、配方或物件在规定交接点及状态下的原生数量 | 每次真实事件及每项有证据的未发生判断 | 完整声明队列及归属资产寿命关联事件 | 仅本过程真实责任场所及供应方 | 先对账原生事件总量，仅汇总身份、状态、单位、交接点及期间均相容的量。按相应计算规则逐行核算一次：只分配仍共享的负担，目标总量仅除以同口径的正合格产出；等效每参考流数值原值沿用，零产出期间不作除法并保留处置记录。 | 逐批核对收货、期初期末、退回、耗用及互斥去向。件数或体积折质量须有单件质量或相容状态密度依据；产品身份以外的包装和衬材独立登记。 对上述具体身份及相容输入口径，仅在数量的归属和归一化状态与下式前提匹配时使用该规则：逐真实归属支持供应 / N 保留原始凭据、实际采用的系数和结果单位。数值来源模式：calculated_value；适用范围：site_specific；归一化基准：每声明的参考流；基准类型：reference_flow；证据类型：calculated_from_collection；采集协议：cp_recovery；来源：unsd-cpc3-65320; ghg-product-2011。须有原始记录、精确原生支持及逐具体行核验；这些规则不提供缺失身份或数值。 完成判据：check_occurrence_completion。 |
| cp_expand_support_actual_resource | recovery_support_lifecycle | 必须展开身份 support_actual_resource (inputs/elementary)：真实声明来源直接资源取用 | collected_record | requirement_id=support_actual_resource; process_id=recovery_support_lifecycle; required_direction=inputs; required_flow_type=elementary; original_collection_protocol=cp_recovery; applicability_evidence; occurrence_event_id; concrete_row_id; physical_identity; formulation_or_species; phase; carbon_origin; particle_fraction; source_compartment; receiving_compartment; supply_or_handover_gate; provider_covered_cells; asset_component_event_and_lifecycle_phase; native_property; native_unit; measured_native_quantity; source_record_id; allocation_all_users; normalization_denominator; per_identity_amount_calculation; verification_evidence; unresolved_reason; occurrence_to_row_reconciliation; substance_identity; chemical_form; environmental_compartment; carbon_origin; particle_fraction_or_count_basis; measured_or_calculated_release; species_conversion_evidence; applicability_decision_record; covered_concrete_rows; excluded_occurrence_reason; completion_evidence; observed_quantity_state; conversion_or_allocation_evidence | 真实原生水其他直接资源来源子介质状态责任设施，不用供应自来水内部循环代理。实测兼容真实单位状态来源目的库存真实用途全用户份额。 本范围是必须落实的身份识别要求，不是交换流。使用原节点采集协议及其记录，先按真实身份、端口及独立功能拆分，再将保留的数量、基准及证据规则分别用于各兼容具体行。不得将异质身份合并数量或从总括名称推断原生属性单位。未发生须有证据，适用性或身份未知则阻止完成。 以下采集条件仅限本项 inputs/elementary 的身份与交接点（真实声明来源直接资源取用）。仅对由实际环境来源跨界进入的、有证据的资源摄取启用。记录具体物质及形态、来源或接收介质、适用的化石或生物碳来源、适用的粒径组分或粒子数粒径基础及采样期；保留元素与分子口径，换算须有化学计量和相容物种证据。收集物流中的污染物在实际环境排放边界前归接收物流，不用CO2、NOx、VOC、COD或泛颗粒物流代替缺失物种。 每项适用性判断须留证。经证实不发生仅关闭所述范围和时段，缺记录仍未解决。发生的要求须将全部事件映射到具体row ID及相容原生数量，或精确映射至已覆盖行和供应方责任，并逐项说明排除理由。证据须覆盖身份、支持单位、计算、原始记录及全部去向；既有与新增分支对同一事件互斥覆盖，协议本身不作为交换。完成须无未分配事件、无重复覆盖、无相关数量或身份未决项。按有证据的实际分支采集原始字段。不适用的操作数须关联分支判定，适用但缺乏实测或依据的数量登记待决。 | 本物质、资源或物理排放在实际环境介质的已核实原生属性与单位 | 每次真实事件及每项有证据的未发生判断 | 完整声明队列及归属资产寿命关联事件 | 仅本过程真实责任场所及供应方 | 先对账原生事件总量，仅汇总身份、状态、单位、交接点及期间均相容的量。按相应计算规则逐行核算一次：只分配仍共享的负担，目标总量仅除以同口径的正合格产出；等效每参考流数值原值沿用，零产出期间不作除法并保留处置记录。 | 采样或活动量及适用因子须对应物种、相态、来源和环境介质。按实际对象区分质量、粒子数、热量及元素当量；换算须有依据，重叠总量不可相加。 对上述具体身份及相容输入口径，仅在数量的归属和归一化状态与下式前提匹配时使用该规则：真实外部资源取用份额 / N 保留原始凭据、实际采用的系数和结果单位。数值来源模式：calculated_value；适用范围：site_specific；归一化基准：每声明的参考流；基准类型：reference_flow；证据类型：calculated_from_collection；采集协议：cp_recovery；来源：unsd-cpc3-65320; ghg-product-2011。须有原始记录、精确原生支持及逐具体行核验；这些规则不提供缺失身份或数值。 完成判据：check_occurrence_completion。 |
| cp_expand_other_support_waste | recovery_support_lifecycle | 必须展开身份 other_support_waste (outputs/waste)：真实回收退役运输系统废物 | collected_record | requirement_id=other_support_waste; process_id=recovery_support_lifecycle; required_direction=outputs; required_flow_type=waste; original_collection_protocol=cp_recovery; applicability_evidence; occurrence_event_id; concrete_row_id; physical_identity; formulation_or_species; phase; carbon_origin; particle_fraction; source_compartment; receiving_compartment; supply_or_handover_gate; provider_covered_cells; asset_component_event_and_lifecycle_phase; native_property; native_unit; measured_native_quantity; source_record_id; allocation_all_users; normalization_denominator; per_identity_amount_calculation; verification_evidence; unresolved_reason; occurrence_to_row_reconciliation; waste_origin_event; material_or_true_mixture; moisture_basis; container_tare; opening_waste_stock; generated_waste; received_waste; handover_quantity; closing_waste_stock; onsite_treatment; receiver_id; applicability_decision_record; covered_concrete_rows; excluded_occurrence_reason; completion_evidence; observed_quantity_state; conversion_or_allocation_evidence | 真实回收翻修退役物料须已知废物身份组成状态接收原生端口，含真实收集推进剂残留清理废物。复用级段服务设备客户载荷留轨地水存活物蒸气不自动同端口废物或全基本排放，保留真实去向。 本范围是必须落实的身份识别要求，不是交换流。使用原节点采集协议及其记录，先按真实身份、端口及独立功能拆分，再将保留的数量、基准及证据规则分别用于各兼容具体行。不得将异质身份合并数量或从总括名称推断原生属性单位。未发生须有证据，适用性或身份未知则阻止完成。 以下采集条件仅限本项 outputs/waste 的身份与交接点（真实回收退役运输系统废物）。本过程实际产生或接收所述废物时启用。记录材料或配方或真实共同收集混合物、干湿状态、容器皮重、来源事件、存量、交接关口及实际接收者；核对产生量+期初库存+接收量=交出量+期末库存+另列现场处理量。分收的不同废物分行，真实接收混合物可为一行，其组分仅作不可相加审计；有用回收、客户保留物与废物去向分开，不自动给替代抵扣。 每项适用性判断须留证。经证实不发生仅关闭所述范围和时段，缺记录仍未解决。发生的要求须将全部事件映射到具体row ID及相容原生数量，或精确映射至已覆盖行和供应方责任，并逐项说明排除理由。证据须覆盖身份、支持单位、计算、原始记录及全部去向；既有与新增分支对同一事件互斥覆盖，协议本身不作为交换。完成须无未分配事件、无重复覆盖、无相关数量或身份未决项。按有证据的实际分支采集原始字段。不适用的操作数须关联分支判定，适用但缺乏实测或依据的数量登记待决。 | 接收方验收的具体废物或实际混合收集物在实测状态下的原生数量 | 每次真实事件及每项有证据的未发生判断 | 完整声明队列及归属资产寿命关联事件 | 仅本过程真实责任场所及供应方 | 先对账原生事件总量，仅汇总身份、状态、单位、交接点及期间均相容的量。按相应计算规则逐行核算一次：只分配仍共享的负担，目标总量仅除以同口径的正合格产出；等效每参考流数值原值沿用，零产出期间不作除法并保留处置记录。 | 以接收记录核对产生、库存、场内处理和实测交付。混合物流量与组分测量分开；干湿基或质量体积换算须有相容组成或密度。接收转移和环境直排按不同交接点记录。 对上述具体身份及相容输入口径，仅在数量的归属和归一化状态与下式前提匹配时使用该规则：逐真实互斥支持废物产生 / N 保留原始凭据、实际采用的系数和结果单位。数值来源模式：calculated_value；适用范围：site_specific；归一化基准：每声明的参考流；基准类型：reference_flow；证据类型：calculated_from_collection；采集协议：cp_recovery；来源：unsd-cpc3-65320; ghg-product-2011。须有原始记录、精确原生支持及逐具体行核验；这些规则不提供缺失身份或数值。 完成判据：check_occurrence_completion。 |
| cp_expand_support_actual_species | recovery_support_lifecycle | 必须展开身份 support_actual_species (outputs/elementary)：真实回收支持物质热向声明介质释放 | collected_record | requirement_id=support_actual_species; process_id=recovery_support_lifecycle; required_direction=outputs; required_flow_type=elementary; original_collection_protocol=cp_recovery; applicability_evidence; occurrence_event_id; concrete_row_id; physical_identity; formulation_or_species; phase; carbon_origin; particle_fraction; source_compartment; receiving_compartment; supply_or_handover_gate; provider_covered_cells; asset_component_event_and_lifecycle_phase; native_property; native_unit; measured_native_quantity; source_record_id; allocation_all_users; normalization_denominator; per_identity_amount_calculation; verification_evidence; unresolved_reason; occurrence_to_row_reconciliation; substance_identity; chemical_form; environmental_compartment; carbon_origin; particle_fraction_or_count_basis; measured_or_calculated_release; species_conversion_evidence; applicability_decision_record; covered_concrete_rows; excluded_occurrence_reason; completion_evidence; observed_quantity_state; conversion_or_allocation_evidence | 逐真实打捞翻修维护清理资产处置排放组分相态粒径来源真实空气水土子介质数量原生基准。热水转移不是污染物质量或全耗水，级段再入气颗粒仍属飞行去向账，不重复把全物体排放。 本范围是必须落实的身份识别要求，不是交换流。使用原节点采集协议及其记录，先按真实身份、端口及独立功能拆分，再将保留的数量、基准及证据规则分别用于各兼容具体行。不得将异质身份合并数量或从总括名称推断原生属性单位。未发生须有证据，适用性或身份未知则阻止完成。 以下采集条件仅限本项 outputs/elementary 的身份与交接点（真实回收支持物质热向声明介质释放）。仅对进入已记录接收介质且有观测或适用计算依据的实际释放启用。记录具体物质及形态、来源或接收介质、适用的化石或生物碳来源、适用的粒径组分或粒子数粒径基础及采样期；保留元素与分子口径，换算须有化学计量和相容物种证据。收集物流中的污染物在实际环境排放边界前归接收物流，不用CO2、NOx、VOC、COD或泛颗粒物流代替缺失物种。 每项适用性判断须留证。经证实不发生仅关闭所述范围和时段，缺记录仍未解决。发生的要求须将全部事件映射到具体row ID及相容原生数量，或精确映射至已覆盖行和供应方责任，并逐项说明排除理由。证据须覆盖身份、支持单位、计算、原始记录及全部去向；既有与新增分支对同一事件互斥覆盖，协议本身不作为交换。完成须无未分配事件、无重复覆盖、无相关数量或身份未决项。按有证据的实际分支采集原始字段。不适用的操作数须关联分支判定，适用但缺乏实测或依据的数量登记待决。 | 本物质、资源或物理排放在实际环境介质的已核实原生属性与单位 | 每次真实事件及每项有证据的未发生判断 | 完整声明队列及归属资产寿命关联事件 | 仅本过程真实责任场所及供应方 | 先对账原生事件总量，仅汇总身份、状态、单位、交接点及期间均相容的量。按相应计算规则逐行核算一次：只分配仍共享的负担，目标总量仅除以同口径的正合格产出；等效每参考流数值原值沿用，零产出期间不作除法并保留处置记录。 | 采样或活动量及适用因子须对应物种、相态、来源和环境介质。按实际对象区分质量、粒子数、热量及元素当量；换算须有依据，重叠总量不可相加。 对上述具体身份及相容输入口径，仅在数量的归属和归一化状态与下式前提匹配时使用该规则：逐真实互斥支持释放 / N 保留原始凭据、实际采用的系数和结果单位。数值来源模式：calculated_value；适用范围：site_specific；归一化基准：每声明的参考流；基准类型：reference_flow；证据类型：calculated_from_collection；采集协议：cp_recovery；来源：unsd-cpc3-65320; ghg-product-2011。须有原始记录、精确原生支持及逐具体行核验；这些规则不提供缺失身份或数值。 完成判据：check_occurrence_completion。 |

### 计算规则

| rule_id | 适用于 | formula_or_rule | inputs | output | source_ids |
| --- | --- | --- | --- | --- | --- |
| original_qualified_count | 合格完成空间货运委托 | 逐必需层s兼容原载荷目的轨道轨迹时间端口指纹f，N_s,f = sum_j I(原始委托j符合原先声明完整验收)。逐原始有界合格委托仅一次贡献一项，部分失败无贡献，不事后重设载荷轨道验收。原始独立有界载荷任务仅按原标准可分别合格且分全部共享负荷。最终输出为1 Item(s)；有限强度须N_s,f > 0，真实载荷量轨道状态仍必需。 | original task/payload/gates/acceptance; cp_task | N_s,f; qualified_space_commission | unsd-cpc3-65320; ghg-product-2011 |
| exclusive_material_element_balance | 真实物料推进载荷硬件账 | 共同真实端口时间以守恒原生物料或元素基准：期初 + 外部接收 = 期末或服役留存 + 真实验收交付或使用或转换 + 真实回收返还外运 + 独立废物外运 + 真实环境或轨道越界 + 已记录残差。项互斥，内部回收循环非另加接收使用外运，回收物仅入真实期末后续真实使用一个外运。化学变化逐元素跨真实反应物产物未反应留存返还废物排放状态平衡，不把公斤燃料氧化剂等为公斤同排放物，单账不把转换及其结果释放计两越界。物体去向与排放化学颗粒账独立，不假定全再入硬件原始排放。真实期初客户消耗供应无论产权关联上游一次，不重复购买提取或全储备消耗。 | 实际守恒的物料或元素以及各阶段和对象的去向; cp_propellant; cp_flight_fates; cp_ground; cp_recovery | 按化学物质、元素或对象分别进行的托管交接对账，避免重叠 | nasa-atmosphere-2024; ghg-product-2011 |
| actual_water_energy | 真实地面回收水能端口 | 真实兼容实测状态单位端口：期初水 + 排除单记新增的外部取用 + 未已计入取用的单记新增 = 期末水 + 各目的外流 + 独立蒸发其他消耗损失 + 残差。取用含供应水一次，不重复供应取用泵转移或内部循环。真实温度密度组成压力支持换算，不把全水幕冷却水消耗。能源投入转换使用外供损失按真实原生载体计量自营供应范围，仅外部交流用核实 3.6 MJ/kWh，不用无据推进效率或重复太阳充电能。 | 实际来源、去向、储存及原生能量计量记录; cp_ground; cp_recovery | 水的来源与去向及能源原生计量收支核对 | ghg-product-2011 |
| native_all_user_normalization | 兼容任务画像全部真实原生行量 | q_row,ref,s,f = sum(原生事件量 × 有据真实因果全用户份额) / N_s,f一次。资产阶段份额为同组归属使用量 / 该阶段有据正全用户总使用量，不用承诺复用分母或自动按载荷质量等分。含真实测试取消失败返回回收完整生命供应缺口真实共享任务级段轨道差异。供应原生单位经真实有据活动衔接，不强作发射位公斤飞行器费用等一委托。仅兼容原始归属分子N_s,f聚合。 | 实际原生数量; 同一队列的全用户或因果份额; 分层 s 和指纹 f 对应的相容分母 | 每参考流的原生计量交换量 | ghg-product-2011 |

### 数据质量要求

| requirement_id | 适用于 | Requirement | evidence |
| --- | --- | --- | --- |
| original_mission_quality | 参考全部共享承运任务 | 须原运行前载荷集合净质量体积状态目的轨道轨迹历元时间质量端口接收验收真实结果、必需细层全部共用户原任务。缺原验收较低错误轨道不能追认成功，保留失败取消部分变更任务谱系。 | 原物理合同验收真实跟踪接收任务记录 |
| altitude_species_model_gaps | 全部飞行再入地面支持来源 | 真实配方状态原生供应及直接化合物颗粒粒径相态来源高度时间位置接收子介质须实测或有据核实来源特定模型及不确定性覆盖。明确未表征非CO2臭氧高空轨道碎片影响及缺去向子介质模型；常规表征通过不代表未建模影响零或通用清洁推进剂。清单表征不确定性独立。 | 真实分来源高度记录模型版本验证覆盖证据 |
| native_life_no_defaults | 全部数量供应生命验证 | 须真实原生数量端口全用户实现生命组次供应已含范围及独立兼容QA。不设统一载荷大小轨道等价推进剂配方比例反应收率排放高度因子承诺复用次数失败概率生命人体代谢值。同批最大值不能验证自身，缺身份数量模型不完整非零，候选仍须科学审查。 | 原生量出处实现生命登记独立兼容比较明确缺口 |

## 9. 验证规则

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| validate_full_space_function | 全部节点 | 验证完整空间货运加卫星发射入位、真实其他交付返回空间内分支及真实客运载荷制造交接后运行排除。参考原始合格物理委托1Item(s)、5功能字段原生计数支持、必需细层原载荷目的轨道轨迹历元质量时间端口验收。不用卫星发射飞行器公斤费用代理或异质功能等价。 | unsd-cpc3-65320; nasa-lsp-services; esa-atv |
| validate_whole_campaign_failure | 全部节点 | 验证真实运输开发测试处理等候取消中止失败及全部负责发射转移上面货运承运地面跟踪回收角色至原验收完整服务生命。部分错误轨道原失败不重设成功，原先独立声明验收载荷任务保留原标准全部共享因果负荷。客户原制造交接后运行独立，期初客户消耗燃料能源上游无论产权一次，不免费或全储备消耗；真实交付货物推进剂水空气区别承运消耗，同一部分不两计。 | nasa-lsp-services; esa-handbook-landing; ghg-product-2011 |
| validate_native_chemistry_altitude | spaceflight_delivery; ground_campaign | 验证逐真实燃料氧化剂增压原生状态端口来源互斥供应燃烧放散蒸发储备返还废物释放。真实元素闭合不强把供应化学全物体质量作排放物。须真实来源高度位置时间材质粒径相态原生量接收子介质及独立清单表征模型缺口，不已知高度绑空气未指明不通用NOx/SOx/CO2当量或未知零；真实归属氧化剂上游供应含未燃放空蒸发泄漏测试损失有据库存责任，不全装载作消耗。飞行外供充入能源产品与直接环境资源基本投入独立，内部太阳光电输出不另购，设备完整生命保留。 | nasa-atmosphere-2024; esa-environment-2024 |
| validate_recovery_life_providers | recovery_support_lifecycle; 全部节点 | 验证真实留存回收复用翻修再鉴定退役留轨存活物蒸气气颗粒去向，不重复全质量；回收不自动零制造循环效益。须完整阶段资产开发测试实现同组全用户分母，不用承诺复用客户载荷制造。原生完整发射地面转移回收供应单位端口范围仅一次替代精确自营未含事件保留；全部共载荷轨道用户因果驱动，不统一质量比。 | esa-environment-2024; nasa-atmosphere-2024; ghg-product-2011 |
| validate_stock_water_projection | 全部节点 | 验证互斥物料元素物体及水来源目的蓄存去向，外部取用新增互斥不重复供应泵内部或全水消耗。正兼容原N不重复归一化增计数，须节点协议原生原量出处不确定性最终具体身份属性单位状态端口子介质。逐真实条件交换扩展全部未解卡含真实最终输出登记，中英生成结构保留全部规范规则，缺失不完整非零。 | ghg-product-2011 |
| atomic_spaceflight_delivery | spaceflight_delivery | 拒绝将备选物料、独立供应资产服务、不同废物流、污染物种、碳源、相态、粒径或环境子介质合并成一个交换身份。本节点每项适用cp_expand_要求必须有发生或未发生记录及完整具体行清单，各行具有自身身份、端口、已核验UUID、原生属性单位、数量、原始记录、计算和唯一责任。供应方已含完整总成或真实收集混合物流仍按一个真实供应或收集身份，不虚构组分交换。不得将要求名称标识、NOx或VOC或PM总量、未明确的物理释放或异质清单绑定一个UUID。核对全部子行、原始事件、供应方已含单元及跨节点交接，不缺失当零、不重复计入。身份、适用性、数量或去向未知，均阻止完整前景包及最终TIDAS交换产出。PCR检查器不验证这些前景事实，须保留逐行证据供审查。 | ghg-product-2011 |
| atomic_ground_campaign | ground_campaign | 拒绝将备选物料、独立供应资产服务、不同废物流、污染物种、碳源、相态、粒径或环境子介质合并成一个交换身份。本节点每项适用cp_expand_要求必须有发生或未发生记录及完整具体行清单，各行具有自身身份、端口、已核验UUID、原生属性单位、数量、原始记录、计算和唯一责任。供应方已含完整总成或真实收集混合物流仍按一个真实供应或收集身份，不虚构组分交换。不得将要求名称标识、NOx或VOC或PM总量、未明确的物理释放或异质清单绑定一个UUID。核对全部子行、原始事件、供应方已含单元及跨节点交接，不缺失当零、不重复计入。身份、适用性、数量或去向未知，均阻止完整前景包及最终TIDAS交换产出。PCR检查器不验证这些前景事实，须保留逐行证据供审查。 | ghg-product-2011 |
| atomic_recovery_support_lifecycle | recovery_support_lifecycle | 拒绝将备选物料、独立供应资产服务、不同废物流、污染物种、碳源、相态、粒径或环境子介质合并成一个交换身份。本节点每项适用cp_expand_要求必须有发生或未发生记录及完整具体行清单，各行具有自身身份、端口、已核验UUID、原生属性单位、数量、原始记录、计算和唯一责任。供应方已含完整总成或真实收集混合物流仍按一个真实供应或收集身份，不虚构组分交换。不得将要求名称标识、NOx或VOC或PM总量、未明确的物理释放或异质清单绑定一个UUID。核对全部子行、原始事件、供应方已含单元及跨节点交接，不缺失当零、不重复计入。身份、适用性、数量或去向未知，均阻止完整前景包及最终TIDAS交换产出。PCR检查器不验证这些前景事实，须保留逐行证据供审查。 | ghg-product-2011 |
| check_occurrence_completion | 全部实际清单行和身份识别协议 | 保留适用性证据，将每个实际事件对应到具体清单行或已核实的供应方覆盖范围。判定未发生须有证据，未知项保留待决。按同一身份、状态、单位、期间和交接点核对期初、接收、期末及互斥去向。耗材领用账区分未用退回、内部领拨和合格、失败及返工作业的实际耗用。托管账或物料平衡采用期初库存＋外部接收＋配对内部接收＝期末库存＋配对内部发出＋对外交付且获接收的数量＋未用外退＋外送的已用物资或回收物＋外送废物＋直接排放＋本边界内消耗或转化量。身份在边界内生成时，将有证据的生成量或出生数计入该身份账的来源并关联原事件。在上层守恒物料或元素平衡中抵消内部转化和移交。每个事件只记一次，留存回收物计入期末，移交与耗用分别登记。按相容口径执行专用托管、相态、转化或元素规则；已作为转化量计入的物料，其后续产物不得再计入同一去向合计。独立计量各项，对未解释的差额追查并保留待决。实物总量与负担分配分别核算。共享原始负担采用 Q_raw × s / R，其中 s 为有证据的目标驱动量除以同池同期间全部适用用户的正驱动量总和。已归属的目标总量采用 Q_target / R，已与同一参考流等效的单位结果 q_ref 原值沿用。供应方单位强度先乘以按其原生单位实测的需求量。仅在另一个仍有共享负担的独立阶段另作分配。R 为同一队列、交接点和参考单位下的正值合格产出量。保留失败与部分完成作业的负担，禁止以此放大 R；零产出时保留负担及有证据的结转或最终处置。自有资产采用同队列全用户寿命作业量，并排除初始部件重复计算。外购服务仅替代有记录的覆盖阶段。适用的身份、数量、支持单位、去向或分配分母仍未决时，最终数据集仍不完整。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | secondary_dataset; background_dataset |
| downstream_use | 原必需层指纹内真实合格空间货运卫星发射入位承运投入 |
| allowed_use | 兼容原载荷目的轨道轨迹时间状态端口验收、真实级段任务回收完整生命原生供应大气模型范围 |
| excluded_use | 异质轨道任务等价、发射卫星资产计数公斤代理、客运载荷生产交接后运行、通用清洁燃料未建模影响零结论 |
| required_metadata | 原任务层载荷轨道轨迹历元验收N、全用户级段任务失败、真实原生推进高度物种去向、实现全用户生命供应范围缺口 |
| required_quality_disclosure | 原任务兼容量原生身份子介质不确定性、非CO2高空留轨去向表征模型缺口、未解卡候选科学审查 |
| update_trigger | 原载荷验收轨道轨迹或承运技术级段推进任务复用生命供应范围来源模型变化 |

## 11. 数据源

| source_id | type | reference | used_for |
| --- | --- | --- | --- |
| unsd-cpc3-65320 | official_guidance | https://unstats.un.org/unsd/classifications/Econ/Structure/Detail/EN/2100/65320 | 官方完整空间货运及卫星发射入位范围 |
| nasa-lsp-services | official_guidance | NASA Launch Services Program brochure PDFpp2–5; https://www3.nasa.gov/centers/kennedy/pdf/678112main_LSP%20Brochure.pdf | 真实任务特定载荷目的时间处理测试集成发射入轨至分离、复用一次性角色，不用数值工程限制或通用NASA合同端口 |
| esa-atv | official_guidance | https://www.esa.int/Science_Exploration/Human_and_Robotic_Exploration/ATV/Automated_Transfer_Vehicle | 真实货物交会对接再助推处置角色区别为单示例，不用历史容量轨道推进剂寿命默认 |
| esa-environment-2024 | official_guidance | https://www.esa.int/Enabling_Support/Space_Transportation/Environmentally_sustainable_space_transport | 真实地面资源完整运输生命高度化学不确定性服务级段处置再入复用问题，不用普遍法律数值性能清洁燃料结论 |
| esa-handbook-landing | official_guidance | https://blogs.esa.int/cleanspace/2026/01/12/esa-releases-updated-lca-handbook-for-space-systems/ | 仅真实2026年1月页面任务发射地面设备范围测试研发数据质量问题，链接Issue2手册未读未采用 |
| nasa-atmosphere-2024 | official_guidance | NASA/TM20240013276 prefacePDFpp3–6; https://ntrs.nasa.gov/api/citations/20240013276/downloads/NASA-TM-20240013276-V6.pdf | 真实前言组成高度发射再入解体气化气溶胶模型验证知识缺口，不用活动质量通量颗粒比例预测或默认因子 |
| ghg-product-2011 | standard | https://ghgprotocol.org/sites/default/files/ghgp/standards/Product-Life-Cycle-Accounting-Reporting-Standard_041613.pdf | 一般边界分配数据质量原则，类别特定原委托分层化学去向完整生命选择为明确PCR方法 |

