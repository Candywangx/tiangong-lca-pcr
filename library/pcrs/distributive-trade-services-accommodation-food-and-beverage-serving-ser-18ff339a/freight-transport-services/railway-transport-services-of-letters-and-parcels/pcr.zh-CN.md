---
pcr_id: pcr.distributive-trade-services-accommodation-food-and-beverage-serving-ser-18ff339a.freight-transport-services.railway-transport-services-of-letters-and-parcels
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 邮政快递运营商铁路信件包裹承运服务

## 1. 范围与适用性

本专属PCR覆盖代表邮政或快递服务以铁路运输信件包裹。产品为真实运营商承运人保管端口之间的铁路承运功能，不是从收寄到最终收件人的综合邮政快递产品。保留完整真实牵引、混编专列、车厢、盛装容器、场站及外包安排，不预设某运营商邮件等级技术。参考为1 tkm合格承运交接邮件周转服务，按逐段真实邮件物件吨质量乘真实载货铁路距离；物件质量包含自身信封包裹包装，排除可重复使用的承运盛装容器及车辆集装箱皮重。

排除作为成品服务的端到端邮政快递收寄邮资及末端交付；公路水路航空承运及其他非邮件货运功能；独立仓储及纯车厢容器出租。铁路承运合同端口内真实分拣扫描安保装卸转移按真实责任纳入；独立运营商设施服务只接入一次上游或明确披露。邮件置于联运单元中不自动排除本邮件特定功能，须按真实运营合同设备解决分类重叠而不重复最终输出。原始信件包裹内容物制造不属运输产品。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.distributive-trade-services-accommodation-food-and-beverage-serving-ser-18ff339a.freight-transport-services.railway-transport-services-of-letters-and-parcels |
| classification_refs | CPC 3.0 65124; exact |
| covered_products | 代表邮政快递运营商铁路运输信件包裹完整服务 |
| excluded_products | 综合端到端邮政交付、其他模式功能、独立仓储或纯设备出租 |
| representative_product | 合格铁路承运邮政快递邮件周转服务 |
| production_route | 真实铁路行驶邮件保管装卸接口及完整应分配铁路支持生命周期 |
| market_state | 合格承运交接邮件周转服务，不是邮件物件销售或最终收件人投递 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| 什么（What） | 合格铁路承运邮政快递邮件周转服务 |
| 多少（How much） | 1 tkm合格邮件物件货物周转量，逐载货区段真实净物件吨质量乘真实铁路公里 |
| 质量（How well） | 声明运营商承运端口、信件包裹等级、验收数量状态、合同时间保管安保要求及真实铁路路线 |
| 时长或周期（How long or cycle） | 真实运营商接收至承运交接期间，加因果调车场站空驶失败退回及完整生命周期期间 |
| reference_flow_link | qualified_rail_mail_work |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 合格铁路承运邮政快递邮件周转服务 |
| 参考流属性 | 质量*距离 `118f2a40-50ec-457c-aa60-9bc6b6af9931` |
| 参考单位组 | 质量*距离 `3620148f-c5db-48ce-9065-a10092089aca` |
| 参考单位 | tkm |
| 必需限定信息 | on_behalf_postal_courier_operator; actual_carrier_custody_gates; letters_parcels_article_mass_including_intrinsic_packaging; reusable_receptacle_tare_excluded; actual_loaded_rail_segments_distance; pickup_drop_portion_ids; handover_acceptance_condition; contractual_timeliness_security_seal_state; car_locomotive_consist; actual_traction_supply; handling_receptacle_ownership; shunt_yard_empty_failed_return_duties; all_users_allocation; native_provider_coverage; all_user_asset_receptacle_life; period_T; uncertainty |

## 4. 计量与单位规则

| rule_id | 适用于 | required_property | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| reference_mail_work | reference product | 质量*距离 | tkm | 采用真实邮件物件质量，包括自身信封包裹包装，排除可复用承运容器、托盘运输设备及车辆皮重。逐段真实取送验收交接定义货物周转。邮件物件盛装容器邮袋列车数量、计费运力或终端邮政交付不是本参考。 |
| tkm_alias | reference product | 质量*距离 `118f2a40-50ec-457c-aa60-9bc6b6af9931` | tkm | 声明tkm严格为已核实原生t*km拼写别名：1 tkm = 1 t*km = 1000 kg*km。原生单位组仍为质量*距离，UUID3620148f-c5db-48ce-9065-a10092089aca；最终TIDAS交换使用原生t*km及真实系数，不改变功能量纲尺度。 |
| native_quantities | 全部清单行 | 真实原生兼容属性 | 真实原生单位 | 保留原生供应方属性单位状态端口；可复用设备数量质量不同于所运邮件质量。体积质量换算须真实实测密度状态，不设邮件密度默认，核实kWh换算为3.6 MJ/kWh。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 真实邮政快递运营合同接收邮件容器铁路承运端口及供应资产供应方状态 |
| starting_condition_role | 承运端口前景事实不消除早期资产供应，运营商邮政阶段独立 |
| product_classification_scope | 代表邮政快递运营商铁路承运信件包裹65124完整功能 |
| recursive_input_rule | 外包原生铁路承运阶段替代匹配自营范围一次 |
| upstream_dataset_requirement | 真实邮政承运功能原生单位端口模式技术地域期间生命周期范围 |
| disclosure | 邮件质量与容器皮重、真实保管质量、完整铁路装卸失败责任、全用户供应方资产及未知 |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| full_postal_rail_function | 全部节点 | 覆盖代表邮政快递运营商的全部真实铁路信件包裹承运，不限某邮政品牌国内国际线路邮件等级车型。父活动为铁路邮件承运。真实柴油电传动电力混合其他牵引、客货混编、邮件专列、车厢容器装卸合同具有有据投入数据质量差异，不能自动叠加全部分支。 | unsd-cpc3-65124 |
| carrier_operator_gates | mail_handling; rail_movement | 声明真实运营商至承运人接收和承运人至运营商下家承运人交接责任，邮件物件容器封发托运关联、采用时封识保管状态及约定数量状态时间安保结果。铁路交接验收不证明最终收件人投递。本合同内真实扫描分拣装卸转移按范围纳入；独立上下游邮政网络分拣末端不能默默并入铁路产品，合同确有责任时也不能删除。 | upu-postal-transport-2024 |
| whole_train_duty | rail_movement | 纳入归属载货运行、车厢配置调车编组、场站车场等候怠速、空机车车厢容器调位返程、启停停留、失败取消拒收救援重投责任。保留全部共同承运邮件非邮件货物客运服务用户及真实因果份额，预留运力或未使用邮件设备不是交付周转量。 | ghg-product-2011 |
| mail_not_consumed | rail_movement; mail_handling | 承运信件包裹及自身包装是保管对象，不是制造铁路服务消耗的物料。追踪真实接收交付库存短缺损坏退回份额及接收方。不含原始内容信封包裹制造；实际损失补货处理影响向下游邮政货物模型披露一次。承运方自行添加包覆标签封识容器时，只纳入真实新增供应责任，不重复原始邮件物件制造。 | ghg-product-2011 |
| receptacle_assets | support_lifecycle; mail_handling | 按一个真实身份材质状态原生数量端口明确承运方运营商实际提供的邮袋托盘笼车托板集装箱等可复用容器。内容与容器皮重分开，采集复用返还修理损失清洗退役及全部用户周期，不假定一次用袋统一复用周期或全塑料材质。包含设备的出租服务替代其已含生命周期范围，不追加初始总成或重复清洗。 | usps-rail-transport-contract-example |
| rail_assets_energy | support_lifecycle; rail_movement | 本PCR生命周期选择纳入真实机车邮件或共用车厢牵引电池、轨道道岔信号接触网变电站及编组车场场站装卸安保设备的制造安装改装维护更新更换退役。完整总成与已含初始部件互斥，制造不是全生命周期服务。柴油电传动内部发电不是外购交流电，独立外购直流交流、网络转换储能再生输出端口损失归属唯一。实际磨耗润滑撒砂物种去向仍必需，不能认为零尾气等于零生命周期。 | ghg-product-2011 |
| atomic_expansion | 全部节点 | 每项真实尚未表示能源物料耗材容器资产供应方废物直接物种须在一个真实节点下有具体row_id方向类型、单一原生身份状态属性单位数量、来源同节点协议端口接收介质及不确定性。条件需求卡扩展为全部真实交换，不作伞状UUID。燃料供应库存燃烧泄漏、碳来源、污染物物质化合物粒径及收集与空气水土去向分开，缺失为不完整而非零。 | ghg-product-2011 |

## 6. 过程清单结构

每张清单流卡仅代表一个可独立识别的产品、物料配方、废物流、物质或供应服务，具有兼容的端口、属性和单位。完整供应总成或实际收集的混合物流可有一个身份，其已含组分不得另列重复交换。第8节cp_expand_协议是必须落实的身份识别要求，不得当作选定流或交换数量。逐项记录真实适用性，以独立行标识列出全部具体交换；完整保留适用范围，未发生须有证据。尚未展开或未知的要求属于不完整，不得当作零。改为采集协议不等于解决缺失身份，也不免除生命周期、分配、计量或边界义务。

### 过程图

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| rail_movement | 铁路行驶编组及最终邮件交接 | required | 真实合同邮件铁路承运 | foreground | qualified_rail_mail_work |
| mail_handling | 邮件盛装容器保管及铁路接口装卸 | required | 承运合同内真实装卸保管责任 | foreground | qualified_rail_mail_work |
| support_lifecycle | 车辆容器铁路场址及完整支持生命周期 | required | 真实应分配支持资产供应方 | foreground | qualified_rail_mail_work |

全部节点关联唯一最终铁路承运周转分母，装卸保管转移及容器数量不额外产生最终邮政或铁路输出。

### 过程：铁路行驶编组及最终邮件交接 (`rail_movement`)

#### 输入

##### 产品流

###### 柴油 (`locomotive_diesel`)

真实兼容柴油牵引调车燃料，保留配方碳库存转移泄漏燃烧；柴油电传动车载发电为内部，不另作外购电。

- 选定流：柴油 `9d258d75-6792-4f1c-9856-81602ed8f816`
- 流属性/单位：质量 / kg
- 数量规则：attributed_locomotive_diesel_kg / T
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每声明的参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_movement`
- 来源：`unsd-cpc3-65124`; `ghg-product-2011`

###### 交流电 (`traction_ac`)

明确端口真实外购铁路牵引交流电，保留网络转换储能再生范围；不能以交流UUID替代真实接触网直流，自产内部电不重复购买。

- 选定流：交流电 `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- 流属性/单位：净热值 / MJ
- 数量规则：attributed_external_traction_AC_MJ / T
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每声明的参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_movement`
- 来源：`unsd-cpc3-65124`; `ghg-product-2011`

###### 实际直流铁路牵引供应 (`traction_dc`)

真实独立外购直流须兼容电压质量接触或充电端口及供应方损失范围，自营交流转换为内部且互斥。

- 选定流：实际直流铁路牵引供应
- 流属性/单位：能量 / MJ
- 数量规则：attributed_external_traction_DC_MJ / T
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每声明的参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_movement`
- 来源：`unsd-cpc3-65124`; `ghg-product-2011`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 合格铁路承运邮政快递邮件周转服务 (`qualified_rail_mail_work`)

代表邮政快递运营商实际合格承运交接信件包裹铁路周转量；实测邮件物件质量包含自身包装、排除可复用运输设备皮重，按验收交付份额乘真实载货铁路区段距离。

- 选定流：合格铁路承运邮政快递邮件周转服务
- 流属性/单位：质量*距离 / tkm
- 数量规则：1 tkm
- 数值来源模式：`fixed_value`
- 适用范围：`site_specific`
- 归一化基准：每声明的参考流
- 基准类型：`reference_flow`
- 证据类型：`method_formula`
- 采集协议：`cp_movement`
- 来源：`unsd-cpc3-65124`; `ghg-product-2011`

##### 废物流

##### 基本流

###### 二氧化碳（化石源） (`traction_fossil_co2`)

真实机车化石源二氧化碳向空气排放，采用实测或有据兼容真实燃烧碳氧化残留方法；库存供应泄漏非全部燃烧，明确碳来源空气子介质。

- 选定流：二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 流属性/单位：质量 / kg
- 数量规则：attributed_traction_fossil_CO2_kg / T
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每声明的参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_movement`
- 来源：`unsd-cpc3-65124`; `ghg-product-2011`

### 过程：邮件盛装容器保管及铁路接口装卸 (`mail_handling`)

#### 输入

##### 产品流

###### 交流电 (`handling_ac`)

合同内明确供应端口真实自营铁路接口装卸分拣扫描安保场站交流电，包含上游运营场站结果替代精确已含能源范围，不重复购买。

- 选定流：交流电 `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- 流属性/单位：净热值 / MJ
- 数量规则：attributed_external_mail_handling_AC_MJ / T
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每声明的参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_handling`
- 来源：`unsd-cpc3-65124`; `ghg-product-2011`

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

##### 基本流

### 过程：车辆容器铁路场址及完整支持生命周期 (`support_lifecycle`)

#### 输入

##### 产品流

###### 完整铁路机车制造投入 (`locomotive_assembly_manufacture`)

制造交付关口的一件真实完整物理总成；每个实例行只对应一个有记录的型号配置，不同配置分别实例化并计量。仅在该总成为所述节点服务且未被完整供应方覆盖时启用。初始部件包含清单是身份的一部分，已含初始部件不得再次投入；实际未覆盖的维护、更换及寿终另计。 真实兼容完整机车制造须有原生数量规格及初始部件包含，不是通用铁路服务或完整生命周期，真实维护更换退役仍独立覆盖。

- 选定流：完整铁路机车制造投入
- 流属性/单位：Count / Item(s)
- 数量规则：对每个同型号总成队列：制造件数 * 目标应承担工作量 / 全用户全寿命工作量 / T。两个工作量采用相容同一基准及队列，分母须有证据且为正；目标份额与最终参考归一各一次，已含初始部件不可再相加。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_assets`
- 来源：unsd-cpc3-65124; ghg-product-2011


###### 完整邮件运输车厢制造投入 (`mail_railcar_assembly_manufacture`)

制造交付关口的一件真实完整物理总成；每个实例行只对应一个有记录的型号配置，不同配置分别实例化并计量。仅在该总成为所述节点服务且未被完整供应方覆盖时启用。初始部件包含清单是身份的一部分，已含初始部件不得再次投入；实际未覆盖的维护、更换及寿终另计。 真实专用共用邮件承运车厢总成、车体转向架牵引客货角色装卸安保改装及初始部件范围依据记录，不假定全部邮件使用某种历史铁路邮局车型。

- 选定流：完整邮件运输车厢制造投入
- 流属性/单位：Count / Item(s)
- 数量规则：对每个同型号总成队列：制造件数 * 目标应承担工作量 / 全用户全寿命工作量 / T。两个工作量采用相容同一基准及队列，分母须有证据且为正；目标份额与最终参考归一各一次，已含初始部件不可再相加。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_assets`
- 来源：unsd-cpc3-65124; ghg-product-2011


###### 自来水 (`cleaning_tap_water`)

真实兼容市政自来水在核实生产供应端口用于设备容器场址清洗，明确下游配送责任，其他真实水源为独立身份。

- 选定流：自来水 `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- 流属性/单位：质量 / kg
- 数量规则：attributed_cleaning_tap_water_kg / T
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每声明的参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_support`
- 来源：`unsd-cpc3-65124`; `ghg-product-2011`

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

###### 废润滑油 (`used_lubricating_oil`)

真实应分配铁路装卸维护在产生点收集的废润滑油，记录成分接收方，不是直接土壤排放或自动回收抵扣。

- 选定流：废润滑油 `55d93375-7f04-4166-b2a2-88ce929051a5`
- 流属性/单位：质量 / kg
- 数量规则：attributed_used_lubricating_oil_kg / T
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每声明的参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_support`
- 来源：`unsd-cpc3-65124`; `ghg-product-2011`

##### 基本流

## 7. 分配与共产品处理

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| causal_all_user | 全部节点 | 优先按邮件货批区段车厢设备直接细分计量。共享列车场站装卸安保负荷依据全部邮件及其他用户有据物理质量载荷容量时间阻力等真实运行驱动，吨公里参考不强制统一分配键。记录真实邮件等级质量容量约束。经济替代须证明无法建立物理关系并做敏感性，同事件份额闭合为一。 | ghg-product-2011 |
| empty_failed_return | 全部节点 | 先保留因果空驶容器返还调车等候失败拒收救援错路重投责任，再仅按正合格邮件周转T归一化一次。只有真实承运交接验收份额贡献载货区段周转，空容器皮重缺失包裹静止装卸或未用预留运力不产生输出。追踪改路退回区段及保管谱系，不重复物理区段或最终完成，T=0无有限强度。 | ghg-product-2011 |
| life_period_reuse | 全部节点 | 真实原生总成制造及各生命事件按同组归属运行量除以有据正全用户总使用量分配，再按T归一化。容器采用真实兼容全用户周期使用量及修理退役损失归属，不假定数量周期换算或邮件质量替代。跨期保留资产安装改装更新更换退役和未完库存责任，供应方范围替代精确自营范围一次。 | ghg-product-2011 |
| provider_custody_loss | 全部节点 | 真实外包铁路场站装卸原生服务仅替代声明阶段范围，不递归成品输出或重复供应方能源资产。损坏退回邮件在真实产品废物接收决定前保持保管，返还可复用容器不是新增购买或自动废物。真实丢弃处理及有用次级输出须独立交接负荷决定，不自动作避免制造抵扣。 | ghg-product-2011 |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_movement | rail_movement | 合格邮件周转及完整牵引责任 | 真实一手计量运单供应方记录 | 运营合同；托运份额；邮件物件含自身包装质量；运输容器皮重；车厢机车编组；真实载货区段距离；取送交接ID；约定质量状态时间；验收份额；载货空驶调车场站失败退回责任；柴油库存燃烧泄漏；外购交流直流；再生输出；全用户；份额；期间；T；不确定性 | 关联签署运营承运接收交接运单、校准质量皮重及真实路线区段，确定合格交付物件份额并将其载货区段周转只算一次，再关联真实牵引计量燃料完整其他用户责任以作因果归属。 按参考计量口径汇总唯一且已验收的合格产出作为分母，单列不合格事件及其资源责任。参考量保持规定值，仅归属的清单总量除以正分母。本协议下其他清单行保留各自实物单位。 | t；km；t*km；kg；MJ；h | 逐事件及期间闭合 | 真实报告期间及关联资产容器生命阶段 | 真实列车车厢编组邮件接口车场及供应方 | 每声明的参考流 | 签署记录；校准；原生来源；因果分配；不确定性保存各实测操作数的来源及原生口径，注明实际采用的换算或归属依据，以及所供结果是否已按该参考流计量。 |
| cp_handling | mail_handling | 保管邮件容器装卸供应及合同质量 | 真实一手计量运单供应方记录 | 运营承运端口；托运容器封发物件关联；真实容器材质状态皮重；所有权供应方；接收交付库存短缺损坏退回；采用时封识状态；时间安保状态；转移归属；真实分拣扫描装卸；供应能源原生数量；供应方范围；全部用户；份额；期间；T | 使用真实签署保管接口记录、供应容器登记及计量，闭合物件容器托运层级转移和真实退回损坏接收方，不假定每件统一扫描封识；承运合同范围与运营商邮政网络范围互斥。 原始观测和对账总量保留其记录口径。负担行只分配仍共享的总量，已归属总量仅除以同队列、同交接点的正合格产出；已与该参考流等效的结果原值沿用。零产出时保留负担并记录去向。 | kg；Item(s)；原生装卸物料单位；MJ | 逐事件及期间闭合 | 真实报告期间及关联资产容器生命阶段 | 真实列车车厢编组邮件接口车场及供应方 | 每声明的参考流 | 签署记录；校准；原生来源；因果分配；不确定性保存各实测操作数的来源及原生口径，注明实际采用的换算或归属依据，以及所供结果是否已按该参考流计量。 |
| cp_support | support_lifecycle | 清洗及收集维护容器废物 | 真实一手计量运单供应方记录 | 场址；事件资产容器；清洗水源原生数量；物料化学残留；收集废物原生状态数量接收方；复用返还库存；滞留蒸发直接水；供应方范围；全部用户；份额；期间；T | 按资产容器场址关联维护清洗废物签署记录及真实供应计量，区分可用返还退役物料收集废水和直接排放并保持供应方归属互斥。 原始观测和对账总量保留其记录口径。负担行只分配仍共享的总量，已归属总量仅除以同队列、同交接点的正合格产出；已与该参考流等效的结果原值沿用。零产出时保留负担并记录去向。各项独立实测交付、排放及移交按各自交接点记录，负担按其适用规则分配。 | kg；真实原生废物供应方单位 | 逐事件及期间闭合 | 真实报告期间及关联资产容器生命阶段 | 真实列车车厢编组邮件接口车场及供应方 | 每声明的参考流 | 签署记录；校准；原生来源；因果分配；不确定性保存各实测操作数的来源及原生口径，注明实际采用的换算或归属依据，以及所供结果是否已按该参考流计量。 |
| cp_assets | support_lifecycle | 铁路资产及真实邮件容器全用户生命周期 | 真实一手计量运单供应方记录 | 资产容器组配置；原生交付数量；已含初始部件；运营承运供应范围；制造安装改装修理更换退役日期；全用户总使用量周期；归属运行量周期；损失退役；场址期间；原生单位；T；不确定性 | 核实真实总成供应原生端口生命事件及同组正全用户总使用量或容器使用周期，按归属份额再T分配原生事件数量，不重复供应总成出租已含部件或返还可用容器。 原始观测和对账总量保留其记录口径。负担行只分配仍共享的总量，已归属总量仅除以同队列、同交接点的正合格产出；已与该参考流等效的结果原值沿用。零产出时保留负担并记录去向。 | Item(s)；kg；原生运行周期服务单位 | 逐事件及期间闭合 | 真实报告期间及关联资产容器生命阶段 | 真实列车车厢编组邮件接口车场及供应方 | 每声明的参考流 | 签署记录；校准；原生来源；因果分配；不确定性保存各实测操作数的来源及原生口径，注明实际采用的换算或归属依据，以及所供结果是否已按该参考流计量。 |
| cp_expand_additional_labels_seals | mail_handling | 必须展开身份 additional_labels_seals (inputs/product)：实际承运方附加标签或封识供应 | collected_record | requirement_id=additional_labels_seals; process_id=mail_handling; required_direction=inputs; required_flow_type=product; original_collection_protocol=cp_handling; applicability_evidence; occurrence_event_id; concrete_row_id; physical_identity; formulation_or_species; phase; carbon_origin; particle_fraction; source_compartment; receiving_compartment; supply_or_handover_gate; provider_covered_cells; asset_component_event_and_lifecycle_phase; native_property; native_unit; measured_native_quantity; source_record_id; allocation_all_users; normalization_denominator; per_identity_amount_calculation; verification_evidence; unresolved_reason; occurrence_to_row_reconciliation; operation_record; material_sku; formulation_grade_state; independent_function; supplier; package_tare; opening_stock; net_receipts; unused_returns; closing_stock; failed_use; destination; applicability_decision_record; covered_concrete_rows; excluded_occurrence_reason; completion_evidence; observed_quantity_state; conversion_or_allocation_evidence | 按条件记录真实新增供应物料，各标签封识包覆身份分别扩展。不重复现有邮件信封包裹包装或供应方已含投入，不假定每件统一安保封识。 本范围是必须落实的身份识别要求，不是交换流。使用原节点采集协议及其记录，先按真实身份、端口及独立功能拆分，再将保留的数量、基准及证据规则分别用于各兼容具体行。不得将异质身份合并数量或从总括名称推断原生属性单位。未发生须有证据，适用性或身份未知则阻止完成。 以下采集条件仅限本项 inputs/product 的身份与交接点（实际承运方附加标签或封识供应）。仅对实际发生的所述作业及独立消耗SKU或实物启用。记录材料或配方、等级状态、功能、供应方、扣包装皮重后的净量、库存变动、未用退回和去向。独立供应的包装衬材按材料及一次性或复用状态区分；完整配方或物理总成保留一个身份，组成信息不相加，不同外购品不得共用汇总数量。纳入失败使用、维护及返工，记录真实消耗而非仅采购量。 每项适用性判断须留证。经证实不发生仅关闭所述范围和时段，缺记录仍未解决。发生的要求须将全部事件映射到具体row ID及相容原生数量，或精确映射至已覆盖行和供应方责任，并逐项说明排除理由。证据须覆盖身份、支持单位、计算、原始记录及全部去向；既有与新增分支对同一事件互斥覆盖，协议本身不作为交换。完成须无未分配事件、无重复覆盖、无相关数量或身份未决项。按有证据的实际分支采集原始字段。不适用的操作数须关联分支判定，适用但缺乏实测或依据的数量登记待决。 | 实际品项、配方或物件在规定交接点及状态下的原生数量 | 每次真实事件及每项有证据的未发生判断 | 完整声明队列及归属资产寿命关联事件 | 仅本过程真实责任场所及供应方 | 先对账原生事件总量，仅汇总身份、状态、单位、交接点及期间均相容的量。按相应计算规则逐行核算一次：只分配仍共享的负担，目标总量仅除以同口径的正合格产出；等效每参考流数值原值沿用，零产出期间不作除法并保留处置记录。 | 逐批核对收货、期初期末、退回、耗用及互斥去向。件数或体积折质量须有单件质量或相容状态密度依据；产品身份以外的包装和衬材独立登记。 对上述具体身份及相容输入口径，仅在数量的归属和归一化状态与下式前提匹配时使用该规则：attributed_native_additional_label_seal / T 保留原始凭据、实际采用的系数和结果单位。数值来源模式：calculated_value；适用范围：site_specific；归一化基准：每声明的参考流；基准类型：reference_flow；证据类型：calculated_from_collection；采集协议：cp_handling；来源：unsd-cpc3-65124; ghg-product-2011。须有原始记录、精确原生支持及逐具体行核验；这些规则不提供缺失身份或数值。 完成判据：check_occurrence_completion。 |
| cp_expand_mail_receptacle_supply | support_lifecycle | 必须展开身份 mail_receptacle_supply (inputs/product)：实际供应的可复用邮件运输盛装容器 | collected_record | requirement_id=mail_receptacle_supply; process_id=support_lifecycle; required_direction=inputs; required_flow_type=product; original_collection_protocol=cp_assets; applicability_evidence; occurrence_event_id; concrete_row_id; physical_identity; formulation_or_species; phase; carbon_origin; particle_fraction; source_compartment; receiving_compartment; supply_or_handover_gate; provider_covered_cells; asset_component_event_and_lifecycle_phase; native_property; native_unit; measured_native_quantity; source_record_id; allocation_all_users; normalization_denominator; per_identity_amount_calculation; verification_evidence; unresolved_reason; occurrence_to_row_reconciliation; asset_or_reusable_id; model_configuration; included_initial_components; lifecycle_phase; manufacture_native_quantity; target_duty; all_user_same_cohort_lifetime_duty; replacement_event; provider_coverage_cells; applicability_decision_record; covered_concrete_rows; excluded_occurrence_reason; completion_evidence; observed_quantity_state; conversion_or_allocation_evidence; supply_or_service_gate; accepted_service_demand; provider_functional_unit; provider_intensity_basis; covered_lifecycle_stages | 每个真实扩展行须有一种真实邮袋托盘笼车托板集装箱身份材料原生供应端口。必须声明归属供应方初始包含及全用户复用寿命，不是所载邮件物件或按一邮袋计的货运输出。 本范围是必须落实的身份识别要求，不是交换流。使用原节点采集协议及其记录，先按真实身份、端口及独立功能拆分，再将保留的数量、基准及证据规则分别用于各兼容具体行。不得将异质身份合并数量或从总括名称推断原生属性单位。未发生须有证据，适用性或身份未知则阻止完成。 对本项规定的实体资产或周转品，核实供应交接点、初始部件以及实际替换、维护、清洗、失败和退役记录。租赁或综合供应合同须核实覆盖范围；本项包含已交付服务时按实际验收的原生需求计量，仅另行追溯未覆盖的资产阶段。直接建模资产按同队列目标作业量与全用户有据正寿命作业量之比分配，禁止将整个设施归给一个服务。 每项适用性判断须留证。经证实不发生仅关闭所述范围和时段，缺记录仍未解决。发生的要求须将全部事件映射到具体row ID及相容原生数量，或精确映射至已覆盖行和供应方责任，并逐项说明排除理由。证据须覆盖身份、支持单位、计算、原始记录及全部去向；既有与新增分支对同一事件互斥覆盖，协议本身不作为交换。完成须无未分配事件、无重复覆盖、无相关数量或身份未决项。按有证据的实际分支采集原始字段。不适用的操作数须关联分支判定，适用但缺乏实测或依据的数量登记待决。 | 实体资产或周转品按已核实的制造或供应单位；同一队列的相容作业量；范围内的交付服务用其原生功能单位 | 每次真实事件及每项有证据的未发生判断 | 完整声明队列及归属资产寿命关联事件 | 仅本过程真实责任场所及供应方 | 先对账原生事件总量，仅汇总身份、状态、单位、交接点及期间均相容的量。按相应计算规则逐行核算一次：只分配仍共享的负担，目标总量仅除以同口径的正合格产出；等效每参考流数值原值沿用，零产出期间不作除法并保留处置记录。 | 实体资产按有记录的供应交接量乘目标作业量与同队列全用户正寿命作业量之比，保留配置、投运、更换及退役或剩余寿命记录。范围内如有已交付服务，按已核实原生强度乘相容交付需求，留存覆盖凭据，未覆盖阶段单列。 对该交接点相容的资产量或已独立核实的服务结果，仅在数量的归属和归一化状态与下式前提匹配时使用该规则：attributed_native_receptacle_supply / T 保留原始凭据、实际采用的系数和结果单位。数值来源模式：calculated_value；适用范围：site_specific；归一化基准：每声明的参考流；基准类型：reference_flow；证据类型：calculated_from_collection；采集协议：cp_assets；来源：unsd-cpc3-65124; ghg-product-2011。须有原始记录、精确原生支持及逐具体行核验；这些规则不提供缺失身份或数值。 完成判据：check_occurrence_completion。 |
| cp_expand_locomotive_assembly | support_lifecycle | 必须展开身份 locomotive_assembly (inputs/product)：交付端口的真实完整铁路机车 | collected_record | requirement_id=locomotive_assembly; process_id=support_lifecycle; required_direction=inputs; required_flow_type=product; original_collection_protocol=cp_assets; applicability_evidence; occurrence_event_id; concrete_row_id; physical_identity; formulation_or_species; phase; carbon_origin; particle_fraction; source_compartment; receiving_compartment; supply_or_handover_gate; provider_covered_cells; asset_component_event_and_lifecycle_phase; native_property; native_unit; measured_native_quantity; source_record_id; allocation_all_users; normalization_denominator; per_identity_amount_calculation; verification_evidence; unresolved_reason; occurrence_to_row_reconciliation; asset_or_reusable_id; model_configuration; included_initial_components; lifecycle_phase; manufacture_native_quantity; target_duty; all_user_same_cohort_lifetime_duty; replacement_event; provider_coverage_cells; applicability_decision_record; covered_concrete_rows; excluded_occurrence_reason; completion_evidence; observed_quantity_state; conversion_or_allocation_evidence; supply_or_service_gate; accepted_service_demand; provider_functional_unit; provider_intensity_basis; covered_lifecycle_stages | 真实兼容完整机车制造须有原生数量规格及初始部件包含，不是通用铁路服务或完整生命周期，真实维护更换退役仍独立覆盖。 本范围是必须落实的身份识别要求，不是交换流。使用原节点采集协议及其记录，先按真实身份、端口及独立功能拆分，再将保留的数量、基准及证据规则分别用于各兼容具体行。不得将异质身份合并数量或从总括名称推断原生属性单位。未发生须有证据，适用性或身份未知则阻止完成。 对本项规定的实体资产或周转品，核实供应交接点、初始部件以及实际替换、维护、清洗、失败和退役记录。租赁或综合供应合同须核实覆盖范围；本项包含已交付服务时按实际验收的原生需求计量，仅另行追溯未覆盖的资产阶段。直接建模资产按同队列目标作业量与全用户有据正寿命作业量之比分配，禁止将整个设施归给一个服务。 已明确分支（仅按实际适用记录启用）：locomotive_assembly_manufacture. 每项适用性判断须留证。经证实不发生仅关闭所述范围和时段，缺记录仍未解决。发生的要求须将全部事件映射到具体row ID及相容原生数量，或精确映射至已覆盖行和供应方责任，并逐项说明排除理由。证据须覆盖身份、支持单位、计算、原始记录及全部去向；既有与新增分支对同一事件互斥覆盖，协议本身不作为交换。完成须无未分配事件、无重复覆盖、无相关数量或身份未决项。按有证据的实际分支采集原始字段。不适用的操作数须关联分支判定，适用但缺乏实测或依据的数量登记待决。 | 实体资产或周转品按已核实的制造或供应单位；同一队列的相容作业量；范围内的交付服务用其原生功能单位 | 每次真实事件及每项有证据的未发生判断 | 完整声明队列及归属资产寿命关联事件 | 仅本过程真实责任场所及供应方 | 先对账原生事件总量，仅汇总身份、状态、单位、交接点及期间均相容的量。按相应计算规则逐行核算一次：只分配仍共享的负担，目标总量仅除以同口径的正合格产出；等效每参考流数值原值沿用，零产出期间不作除法并保留处置记录。 | 实体资产按有记录的供应交接量乘目标作业量与同队列全用户正寿命作业量之比，保留配置、投运、更换及退役或剩余寿命记录。范围内如有已交付服务，按已核实原生强度乘相容交付需求，留存覆盖凭据，未覆盖阶段单列。 若实体资产按 物品数量 / Item(s) 计量，保留实测供应量，寿命作业量另记单位。 对该交接点相容的资产量或已独立核实的服务结果，仅在数量的归属和归一化状态与下式前提匹配时使用该规则：attributed_locomotive_manufacture_items / T 保留原始凭据、实际采用的系数和结果单位。数值来源模式：calculated_value；适用范围：site_specific；归一化基准：每声明的参考流；基准类型：reference_flow；证据类型：calculated_from_collection；采集协议：cp_assets；来源：unsd-cpc3-65124; ghg-product-2011。须有原始记录、精确原生支持及逐具体行核验；这些规则不提供缺失身份或数值。 完成判据：check_occurrence_completion。 |
| cp_expand_mail_railcar_assembly | support_lifecycle | 必须展开身份 mail_railcar_assembly (inputs/product)：交付端口的实际用于信件包裹承运的完整铁路车厢 | collected_record | requirement_id=mail_railcar_assembly; process_id=support_lifecycle; required_direction=inputs; required_flow_type=product; original_collection_protocol=cp_assets; applicability_evidence; occurrence_event_id; concrete_row_id; physical_identity; formulation_or_species; phase; carbon_origin; particle_fraction; source_compartment; receiving_compartment; supply_or_handover_gate; provider_covered_cells; asset_component_event_and_lifecycle_phase; native_property; native_unit; measured_native_quantity; source_record_id; allocation_all_users; normalization_denominator; per_identity_amount_calculation; verification_evidence; unresolved_reason; occurrence_to_row_reconciliation; asset_or_reusable_id; model_configuration; included_initial_components; lifecycle_phase; manufacture_native_quantity; target_duty; all_user_same_cohort_lifetime_duty; replacement_event; provider_coverage_cells; applicability_decision_record; covered_concrete_rows; excluded_occurrence_reason; completion_evidence; observed_quantity_state; conversion_or_allocation_evidence; supply_or_service_gate; accepted_service_demand; provider_functional_unit; provider_intensity_basis; covered_lifecycle_stages | 真实专用共用邮件承运车厢总成、车体转向架牵引客货角色装卸安保改装及初始部件范围依据记录，不假定全部邮件使用某种历史铁路邮局车型。 本范围是必须落实的身份识别要求，不是交换流。使用原节点采集协议及其记录，先按真实身份、端口及独立功能拆分，再将保留的数量、基准及证据规则分别用于各兼容具体行。不得将异质身份合并数量或从总括名称推断原生属性单位。未发生须有证据，适用性或身份未知则阻止完成。 对本项规定的实体资产或周转品，核实供应交接点、初始部件以及实际替换、维护、清洗、失败和退役记录。租赁或综合供应合同须核实覆盖范围；本项包含已交付服务时按实际验收的原生需求计量，仅另行追溯未覆盖的资产阶段。直接建模资产按同队列目标作业量与全用户有据正寿命作业量之比分配，禁止将整个设施归给一个服务。 已明确分支（仅按实际适用记录启用）：mail_railcar_assembly_manufacture. 每项适用性判断须留证。经证实不发生仅关闭所述范围和时段，缺记录仍未解决。发生的要求须将全部事件映射到具体row ID及相容原生数量，或精确映射至已覆盖行和供应方责任，并逐项说明排除理由。证据须覆盖身份、支持单位、计算、原始记录及全部去向；既有与新增分支对同一事件互斥覆盖，协议本身不作为交换。完成须无未分配事件、无重复覆盖、无相关数量或身份未决项。按有证据的实际分支采集原始字段。不适用的操作数须关联分支判定，适用但缺乏实测或依据的数量登记待决。 | 实体资产或周转品按已核实的制造或供应单位；同一队列的相容作业量；范围内的交付服务用其原生功能单位 | 每次真实事件及每项有证据的未发生判断 | 完整声明队列及归属资产寿命关联事件 | 仅本过程真实责任场所及供应方 | 先对账原生事件总量，仅汇总身份、状态、单位、交接点及期间均相容的量。按相应计算规则逐行核算一次：只分配仍共享的负担，目标总量仅除以同口径的正合格产出；等效每参考流数值原值沿用，零产出期间不作除法并保留处置记录。 | 实体资产按有记录的供应交接量乘目标作业量与同队列全用户正寿命作业量之比，保留配置、投运、更换及退役或剩余寿命记录。范围内如有已交付服务，按已核实原生强度乘相容交付需求，留存覆盖凭据，未覆盖阶段单列。 若实体资产按 物品数量 / Item(s) 计量，保留实测供应量，寿命作业量另记单位。 对该交接点相容的资产量或已独立核实的服务结果，仅在数量的归属和归一化状态与下式前提匹配时使用该规则：attributed_mail_car_manufacture_items / T 保留原始凭据、实际采用的系数和结果单位。数值来源模式：calculated_value；适用范围：site_specific；归一化基准：每声明的参考流；基准类型：reference_flow；证据类型：calculated_from_collection；采集协议：cp_assets；来源：unsd-cpc3-65124; ghg-product-2011。须有原始记录、精确原生支持及逐具体行核验；这些规则不提供缺失身份或数值。 完成判据：check_occurrence_completion。 |
| cp_expand_rail_infrastructure_service | support_lifecycle | 必须展开身份 rail_infrastructure_service (inputs/product)：真实铁路基础设施生命周期服务 | collected_record | requirement_id=rail_infrastructure_service; process_id=support_lifecycle; required_direction=inputs; required_flow_type=product; original_collection_protocol=cp_assets; applicability_evidence; occurrence_event_id; concrete_row_id; physical_identity; formulation_or_species; phase; carbon_origin; particle_fraction; source_compartment; receiving_compartment; supply_or_handover_gate; provider_covered_cells; asset_component_event_and_lifecycle_phase; native_property; native_unit; measured_native_quantity; source_record_id; allocation_all_users; normalization_denominator; per_identity_amount_calculation; verification_evidence; unresolved_reason; occurrence_to_row_reconciliation; provider_contract; independent_function; provider_gates; native_functional_unit; delivered_quantity; covered_process_phase_cells; uncovered_foreground_rows; applicability_decision_record; covered_concrete_rows; excluded_occurrence_reason; completion_evidence; observed_quantity_state; conversion_or_allocation_evidence; provider_functional_unit; accepted_service_demand; provider_intensity_basis; covered_service_stages | 真实供应方原生轨道编组供电信号完整生命周期范围运行端口，宽泛铁路制造或仅牵引流不是完整网络服务，供应方范围替代匹配自营范围一次。 本范围是必须落实的身份识别要求，不是交换流。使用原节点采集协议及其记录，先按真实身份、端口及独立功能拆分，再将保留的数量、基准及证据规则分别用于各兼容具体行。不得将异质身份合并数量或从总括名称推断原生属性单位。未发生须有证据，适用性或身份未知则阻止完成。 以下采集条件仅限本项 inputs/product 的身份与交接点（真实铁路基础设施生命周期服务）。仅在本PCR范围内实际委托独立功能时启用。记录合同、交付服务功能、关口、原生功能单位、实际交付量及具体覆盖的过程和寿命阶段；逐项与自营活动比对，完整供应方或未覆盖前景活动仅计一次。不用金额、材料质量或假设件数替代真实功能；同一最终服务不通过外部最终产品供应方递归重复计入。 每项适用性判断须留证。经证实不发生仅关闭所述范围和时段，缺记录仍未解决。发生的要求须将全部事件映射到具体row ID及相容原生数量，或精确映射至已覆盖行和供应方责任，并逐项说明排除理由。证据须覆盖身份、支持单位、计算、原始记录及全部去向；既有与新增分支对同一事件互斥覆盖，协议本身不作为交换。完成须无未分配事件、无重复覆盖、无相关数量或身份未决项。按有证据的实际分支采集原始字段。不适用的操作数须关联分支判定，适用但缺乏实测或依据的数量登记待决。 | 已核实的合同交付功能单位；仅独立可计数且已验收的结果使用 Item(s) | 每次真实事件及每项有证据的未发生判断 | 完整声明队列及归属资产寿命关联事件 | 仅本过程真实责任场所及供应方 | 先对账原生事件总量，仅汇总身份、状态、单位、交接点及期间均相容的量。按相应计算规则逐行核算一次：只分配仍共享的负担，目标总量仅除以同口径的正合格产出；等效每参考流数值原值沿用，零产出期间不作除法并保留处置记录。 | 按指定交接点实际验收量计量。仅在单位强度换算为总负担时，以供应方强度乘同一原生单位的需求量。保留合同范围、验收、原生单位及覆盖阶段记录。仅按时间交付的功能以时长计量。 对按合同口径已验收的服务，仅在数量的归属和归一化状态与下式前提匹配时使用该规则：attributed_native_rail_network_service / T 保留原始凭据、实际采用的系数和结果单位。数值来源模式：calculated_value；适用范围：site_specific；归一化基准：每声明的参考流；基准类型：reference_flow；证据类型：calculated_from_collection；采集协议：cp_assets；来源：unsd-cpc3-65124; ghg-product-2011。须有原始记录、精确原生支持及逐具体行核验；这些规则不提供缺失身份或数值。 完成判据：check_occurrence_completion。 |
| cp_expand_retired_mail_receptacle_waste | support_lifecycle | 必须展开身份 retired_mail_receptacle_waste (outputs/waste)：交接端口的真实退役可复用邮件容器废物 | collected_record | requirement_id=retired_mail_receptacle_waste; process_id=support_lifecycle; required_direction=outputs; required_flow_type=waste; original_collection_protocol=cp_support; applicability_evidence; occurrence_event_id; concrete_row_id; physical_identity; formulation_or_species; phase; carbon_origin; particle_fraction; source_compartment; receiving_compartment; supply_or_handover_gate; provider_covered_cells; asset_component_event_and_lifecycle_phase; native_property; native_unit; measured_native_quantity; source_record_id; allocation_all_users; normalization_denominator; per_identity_amount_calculation; verification_evidence; unresolved_reason; occurrence_to_row_reconciliation; waste_origin_event; material_or_true_mixture; moisture_basis; container_tare; opening_waste_stock; generated_waste; received_waste; handover_quantity; closing_waste_stock; onsite_treatment; receiver_id; applicability_decision_record; covered_concrete_rows; excluded_occurrence_reason; completion_evidence; observed_quantity_state; conversion_or_allocation_evidence | 真实收集退役物料复合设备须记录废物状态接收方，返还仍可用容器为库存转移非新增废物；拆分不兼容纺织金属塑料复合流及实际残留内容物。 本范围是必须落实的身份识别要求，不是交换流。使用原节点采集协议及其记录，先按真实身份、端口及独立功能拆分，再将保留的数量、基准及证据规则分别用于各兼容具体行。不得将异质身份合并数量或从总括名称推断原生属性单位。未发生须有证据，适用性或身份未知则阻止完成。 以下采集条件仅限本项 outputs/waste 的身份与交接点（交接端口的真实退役可复用邮件容器废物）。本过程实际产生或接收所述废物时启用。记录材料或配方或真实共同收集混合物、干湿状态、容器皮重、来源事件、存量、交接关口及实际接收者；核对产生量+期初库存+接收量=交出量+期末库存+另列现场处理量。分收的不同废物分行，真实接收混合物可为一行，其组分仅作不可相加审计；有用回收、客户保留物与废物去向分开，不自动给替代抵扣。 每项适用性判断须留证。经证实不发生仅关闭所述范围和时段，缺记录仍未解决。发生的要求须将全部事件映射到具体row ID及相容原生数量，或精确映射至已覆盖行和供应方责任，并逐项说明排除理由。证据须覆盖身份、支持单位、计算、原始记录及全部去向；既有与新增分支对同一事件互斥覆盖，协议本身不作为交换。完成须无未分配事件、无重复覆盖、无相关数量或身份未决项。按有证据的实际分支采集原始字段。不适用的操作数须关联分支判定，适用但缺乏实测或依据的数量登记待决。 | 接收方验收的具体废物或实际混合收集物在实测状态下的原生数量 | 每次真实事件及每项有证据的未发生判断 | 完整声明队列及归属资产寿命关联事件 | 仅本过程真实责任场所及供应方 | 先对账原生事件总量，仅汇总身份、状态、单位、交接点及期间均相容的量。按相应计算规则逐行核算一次：只分配仍共享的负担，目标总量仅除以同口径的正合格产出；等效每参考流数值原值沿用，零产出期间不作除法并保留处置记录。 | 以接收记录核对产生、库存、场内处理和实测交付。混合物流量与组分测量分开；干湿基或质量体积换算须有相容组成或密度。接收转移和环境直排按不同交接点记录。 对上述具体身份及相容输入口径，仅在数量的归属和归一化状态与下式前提匹配时使用该规则：attributed_native_retired_receptacle_waste / T 保留原始凭据、实际采用的系数和结果单位。数值来源模式：calculated_value；适用范围：site_specific；归一化基准：每声明的参考流；基准类型：reference_flow；证据类型：calculated_from_collection；采集协议：cp_support；来源：unsd-cpc3-65124; ghg-product-2011。须有原始记录、精确原生支持及逐具体行核验；这些规则不提供缺失身份或数值。 完成判据：check_occurrence_completion。 |
| cp_expand_receptacle_wash_wastewater | support_lifecycle | 必须展开身份 receptacle_wash_wastewater (outputs/waste)：收集的邮件容器铁路设备清洗废水 | collected_record | requirement_id=receptacle_wash_wastewater; process_id=support_lifecycle; required_direction=outputs; required_flow_type=waste; original_collection_protocol=cp_support; applicability_evidence; occurrence_event_id; concrete_row_id; physical_identity; formulation_or_species; phase; carbon_origin; particle_fraction; source_compartment; receiving_compartment; supply_or_handover_gate; provider_covered_cells; asset_component_event_and_lifecycle_phase; native_property; native_unit; measured_native_quantity; source_record_id; allocation_all_users; normalization_denominator; per_identity_amount_calculation; verification_evidence; unresolved_reason; occurrence_to_row_reconciliation; waste_origin_event; material_or_true_mixture; moisture_basis; container_tare; opening_waste_stock; generated_waste; received_waste; handover_quantity; closing_waste_stock; onsite_treatment; receiver_id; applicability_decision_record; covered_concrete_rows; excluded_occurrence_reason; completion_evidence; observed_quantity_state; conversion_or_allocation_evidence | 真实收集清洗流须有兼容物料化学残留成分原生属性接收方，与真实直接排放蒸发滞留水区分，供水量不自动等于产废水量。 本范围是必须落实的身份识别要求，不是交换流。使用原节点采集协议及其记录，先按真实身份、端口及独立功能拆分，再将保留的数量、基准及证据规则分别用于各兼容具体行。不得将异质身份合并数量或从总括名称推断原生属性单位。未发生须有证据，适用性或身份未知则阻止完成。 以下采集条件仅限本项 outputs/waste 的身份与交接点（收集的邮件容器铁路设备清洗废水）。本过程实际产生或接收所述废物时启用。记录材料或配方或真实共同收集混合物、干湿状态、容器皮重、来源事件、存量、交接关口及实际接收者；核对产生量+期初库存+接收量=交出量+期末库存+另列现场处理量。分收的不同废物分行，真实接收混合物可为一行，其组分仅作不可相加审计；有用回收、客户保留物与废物去向分开，不自动给替代抵扣。 每项适用性判断须留证。经证实不发生仅关闭所述范围和时段，缺记录仍未解决。发生的要求须将全部事件映射到具体row ID及相容原生数量，或精确映射至已覆盖行和供应方责任，并逐项说明排除理由。证据须覆盖身份、支持单位、计算、原始记录及全部去向；既有与新增分支对同一事件互斥覆盖，协议本身不作为交换。完成须无未分配事件、无重复覆盖、无相关数量或身份未决项。按有证据的实际分支采集原始字段。不适用的操作数须关联分支判定，适用但缺乏实测或依据的数量登记待决。 | 接收方验收的具体废物或实际混合收集物在实测状态下的原生数量 | 每次真实事件及每项有证据的未发生判断 | 完整声明队列及归属资产寿命关联事件 | 仅本过程真实责任场所及供应方 | 先对账原生事件总量，仅汇总身份、状态、单位、交接点及期间均相容的量。按相应计算规则逐行核算一次：只分配仍共享的负担，目标总量仅除以同口径的正合格产出；等效每参考流数值原值沿用，零产出期间不作除法并保留处置记录。 | 以接收记录核对产生、库存、场内处理和实测交付。混合物流量与组分测量分开；干湿基或质量体积换算须有相容组成或密度。接收转移和环境直排按不同交接点记录。 对上述具体身份及相容输入口径，仅在数量的归属和归一化状态与下式前提匹配时使用该规则：attributed_native_collected_cleaning_water / T 保留原始凭据、实际采用的系数和结果单位。数值来源模式：calculated_value；适用范围：site_specific；归一化基准：每声明的参考流；基准类型：reference_flow；证据类型：calculated_from_collection；采集协议：cp_support；来源：unsd-cpc3-65124; ghg-product-2011。须有原始记录、精确原生支持及逐具体行核验；这些规则不提供缺失身份或数值。 完成判据：check_occurrence_completion。 |

### 计算规则

| rule_id | 适用于 | formula_or_rule | inputs | output | source_ids |
| --- | --- | --- | --- | --- | --- |
| qualified_mail_work | 参考输出及承运邮件区段台账 | T = sum(m_i_t * d_i_km)，对每项承运交接端口验收份额的真实载货铁路区段i求和。m_i_t为真实邮件物件质量，包括自身信封包裹包装、排除可复用承运容器托板集装箱及车辆皮重；逐段更新取送质量，每个份额区段只计一次。 | m_i_t; d_i_km; accepted_handover_portions; cp_movement; cp_handling | T | ghg-product-2011 |
| normalize_mail_work | 除最终参考输出以外全部清单 | x_ref = sum(x_native_attributed) / T；T为同期间同组真实合格邮件铁路正周转量t*km；最终输出为1 tkm，严格原生t*km拼写别名。 | x_native_attributed; T; cp_movement; cp_handling; cp_support; cp_assets | x_ref | ghg-product-2011 |
| exclusive_custody_stock | 各真实邮件容器燃料台账 | opening + receipts + inward_transfers = closing + actual_delivery_or_use + outward_transfers + measured_loss；各去向互斥。内部回收可用返还保留期末或随后真实外送使用一次，不另加回收项；邮件物件与可复用设备库存分开，未知短缺不能假定已投递或排放废物。 | actual opening_receipts_closing_transfer_delivery_use_loss; cp_movement; cp_handling; cp_support | 已对账的托管交接原生计量台账 | ghg-product-2011 |

### 数据质量要求

| requirement_id | 适用于 | Requirement | evidence |
| --- | --- | --- | --- |
| traceability | 全部节点 | 须有真实合同端口原生质量皮重单位状态签署交接质量路线设备供应方范围全用户分配不确定性记录，不得因缺记录虚构成功交付。 | 签署合同运单；校准秤计量；保管供应方登记 |
| mail_representativeness | 参考及邮件装卸 | 明确真实信件包裹等级运营承运功能容器取送铁路路线约定时间保管安保及代表性；国际UPU示例或某邮政运营合同不向国内私人快递功能施加相同规则。 | 真实合同及代表服务期间证据 |
| no_default_factors | 数量及校验 | 不提供统一邮件物件质量密度邮袋包裹数量换算载荷失败空驶比例容器周期资产寿命或排放系数。未来校验须独立兼容参考样本，同批最大值不能验证自身，数量缺失表示不完整。 | 完整性及独立证据登记 |

## 9. 验证规则

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| carrier_function | 全部节点 | 核实真实代表邮政快递运营商铁路合同及承运端口、邮件物件质量皮重分离、真实载货区段、运营承运交接状态及合同时间保管安保。不能用收寄数量邮袋数量或最终收件人投递验证承运输出，邮件联运设备分类重叠不得重复输出。 | unsd-cpc3-65124 |
| quantity_quality | 全部节点 | 将验收邮件份额容器转移关联真实称重物件质量及铁路区段距离，核算取送库存短缺损坏拒收及真实退回接收，不在两个内部交接点重复同一邮件。邮袋集装箱车厢总重不能默默变成邮件周转，交接质量数量未知为不完整，不假定成功。 | upu-postal-transport-2024 |
| coverage_native_life | 全部节点 | 核对全部真实动力列车场站空驶失败装卸容器责任、全用户场址期间及互斥运营商承运供应方范围。须有真实同组正全用户资产容器寿命及因果份额闭合，不采用统一复用寿命载荷系数。贡献场址真实归属分子及合格T先汇总再归一化，不无权重平均强度。 | ghg-product-2011 |
| identity_projection | 全部节点 | 每项最终实施交换须核实具体UUID原生属性单位状态端口接收介质。参考质量距离支撑不是邮件承运服务UUID。中英文功能画像字段有序流卡规则协议公式常数来源须匹配规范投影，并披露跳过不确定检查及待核覆盖。 | ghg-product-2011 |
| atomic_rail_movement | rail_movement | 拒绝将备选物料、独立供应资产服务、不同废物流、污染物种、碳源、相态、粒径或环境子介质合并成一个交换身份。本节点每项适用cp_expand_要求必须有发生或未发生记录及完整具体行清单，各行具有自身身份、端口、已核验UUID、原生属性单位、数量、原始记录、计算和唯一责任。供应方已含完整总成或真实收集混合物流仍按一个真实供应或收集身份，不虚构组分交换。不得将要求名称标识、NOx或VOC或PM总量、未明确的物理释放或异质清单绑定一个UUID。核对全部子行、原始事件、供应方已含单元及跨节点交接，不缺失当零、不重复计入。身份、适用性、数量或去向未知，均阻止完整前景包及最终TIDAS交换产出。PCR检查器不验证这些前景事实，须保留逐行证据供审查。 | ghg-product-2011 |
| atomic_mail_handling | mail_handling | 拒绝将备选物料、独立供应资产服务、不同废物流、污染物种、碳源、相态、粒径或环境子介质合并成一个交换身份。本节点每项适用cp_expand_要求必须有发生或未发生记录及完整具体行清单，各行具有自身身份、端口、已核验UUID、原生属性单位、数量、原始记录、计算和唯一责任。供应方已含完整总成或真实收集混合物流仍按一个真实供应或收集身份，不虚构组分交换。不得将要求名称标识、NOx或VOC或PM总量、未明确的物理释放或异质清单绑定一个UUID。核对全部子行、原始事件、供应方已含单元及跨节点交接，不缺失当零、不重复计入。身份、适用性、数量或去向未知，均阻止完整前景包及最终TIDAS交换产出。PCR检查器不验证这些前景事实，须保留逐行证据供审查。 | ghg-product-2011 |
| atomic_support_lifecycle | support_lifecycle | 拒绝将备选物料、独立供应资产服务、不同废物流、污染物种、碳源、相态、粒径或环境子介质合并成一个交换身份。本节点每项适用cp_expand_要求必须有发生或未发生记录及完整具体行清单，各行具有自身身份、端口、已核验UUID、原生属性单位、数量、原始记录、计算和唯一责任。供应方已含完整总成或真实收集混合物流仍按一个真实供应或收集身份，不虚构组分交换。不得将要求名称标识、NOx或VOC或PM总量、未明确的物理释放或异质清单绑定一个UUID。核对全部子行、原始事件、供应方已含单元及跨节点交接，不缺失当零、不重复计入。身份、适用性、数量或去向未知，均阻止完整前景包及最终TIDAS交换产出。PCR检查器不验证这些前景事实，须保留逐行证据供审查。 | ghg-product-2011 |
| check_occurrence_completion | 全部实际清单行和身份识别协议 | 保留适用性证据，将每个实际事件对应到具体清单行或已核实的供应方覆盖范围。判定未发生须有证据，未知项保留待决。按同一身份、状态、单位、期间和交接点核对期初、接收、期末及互斥去向。耗材领用账区分未用退回、内部领拨和合格、失败及返工作业的实际耗用。托管账或物料平衡采用期初库存＋外部接收＋配对内部接收＝期末库存＋配对内部发出＋对外交付且获接收的数量＋未用外退＋外送的已用物资或回收物＋外送废物＋直接排放＋本边界内消耗或转化量。身份在边界内生成时，将有证据的生成量或出生数计入该身份账的来源并关联原事件。在上层守恒物料或元素平衡中抵消内部转化和移交。每个事件只记一次，留存回收物计入期末，移交与耗用分别登记。按相容口径执行专用托管、相态、转化或元素规则；已作为转化量计入的物料，其后续产物不得再计入同一去向合计。独立计量各项，对未解释的差额追查并保留待决。实物总量与负担分配分别核算。共享原始负担采用 Q_raw × s / R，其中 s 为有证据的目标驱动量除以同池同期间全部适用用户的正驱动量总和。已归属的目标总量采用 Q_target / R，已与同一参考流等效的单位结果 q_ref 原值沿用。供应方单位强度先乘以按其原生单位实测的需求量。仅在另一个仍有共享负担的独立阶段另作分配。R 为同一队列、交接点和参考单位下的正值合格产出量。保留失败与部分完成作业的负担，禁止以此放大 R；零产出时保留负担及有证据的结转或最终处置。自有资产采用同队列全用户寿命作业量，并排除初始部件重复计算。外购服务仅替代有记录的覆盖阶段。适用的身份、数量、支持单位、去向或分配分母仍未决时，最终数据集仍不完整。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | secondary_dataset; background_dataset |
| downstream_use | 邮政物流LCA中真实邮政快递运营商铁路承运区段 |
| allowed_use | 可比邮件物件皮重基准铁路区段质量端口及真实运营承运原生供应生命周期范围 |
| excluded_use | 完整邮政投递原始内容制造其他模式无据吨公里等价或待核最终交换 |
| required_metadata | 全部参考限定条件真实原生来源质量记录邮件容器转移谱系供应方阶段端口全用户分配及资产复用寿命 |
| required_quality_disclosure | 未知身份数量运营商期间场址代表性保管质量失败退回问题供应方范围不确定性及跳过检查 |
| update_trigger | 运营商功能路线邮件等级质量设备复用供应方变化或新增核实数据 |

## 11. 数据源

| source_id | type | reference | used_for |
| --- | --- | --- | --- |
| unsd-cpc3-65124 | official_guidance | UNSD CPC3.0 65124; https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | 代表邮政快递运营商铁路运输信件包裹完整范围，不提供数值参考规则 |
| ghg-product-2011 | standard | WRI/WBCSD Product Life Cycle Accounting and Reporting Standard2011,chapters6–10; https://ghgprotocol.org/sites/default/files/ghgp/standards/Product-Life-Cycle-Accounting-Reporting-Standard_041613.pdf | 边界数据分配原则，具体完整资产皮重记录规则为PCR选择 |
| upu-postal-transport-2024 | official_guidance | UPU Postal Transport Guide, January2024, item/receptacle/dispatch/consignment and transport interfaces; https://www.upu.int/UPU/media/upu/files/postalSolutions/programmesAndServices/postalSupplyChain/Transport/publications/guidePostalTransportEn.pdf | 国际邮政层级运输保管空容器返还问题，仅按真实合同适用，不作统一国内规则 |
| usps-rail-transport-contract-example | official_guidance | USPS Supplying Principles and Practices,8-2.7 Modes of Transportation,2018 retained example; https://about.usps.com/manuals/spp022018/html/spp8_036.htm | 铁路合同由铁路承运或邮政设备及货运承运外包边界示例，不作统一USPS范围或法律规则 |

