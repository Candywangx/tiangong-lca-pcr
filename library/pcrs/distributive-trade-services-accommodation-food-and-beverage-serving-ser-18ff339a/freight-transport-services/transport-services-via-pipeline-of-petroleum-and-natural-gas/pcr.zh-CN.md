---
pcr_id: pcr.distributive-trade-services-accommodation-food-and-beverage-serving-ser-18ff339a.freight-transport-services.transport-services-via-pipeline-of-petroleum-and-natural-gas
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 石油和天然气管道运输周转服务

## 1. 范围与适用性

本专属PCR覆盖原油、精炼石油、石油产品及天然气管道运输。产品是真实声明接收交付端口之间的合格管道运输，不是被输商品销售或生产。保留全部真实液气相组成压力温度、连续或批次运行、泵送压缩及条件运输支持责任。参考为1 tkm验收交付商品吨质量乘其有据物理管线路径公里，具真实路径期间组次归属；名义运力入口量管存或商品能量本身不等于交付运输周转量。

按官方叶类排除69120/86320天然气管网分销及67990液化天然气液化再气化。排除作为独立成品功能的商品开采精炼独立加工销售、独立仓储及非管道运输。运输负责的调压计量加热冷却分离处理仅按真实合同运输角色纳入；独立商品升级或分销设施保持独立并声明接口。本管线责任所需管存不自动等于独立仓储。按真实石油产品分类及功能端口判定，不将本石油天然气PCR扩张至无关管输物质。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.distributive-trade-services-accommodation-food-and-beverage-serving-ser-18ff339a.freight-transport-services.transport-services-via-pipeline-of-petroleum-and-natural-gas |
| classification_refs | CPC 3.0 65131; exact |
| covered_products | 原油精炼石油石油产品天然气管道运输完整功能 |
| excluded_products | 管网天然气分销、液化天然气液化再气化、商品生产销售、独立仓储及其他成品运输模式 |
| representative_product | 合格交付石油或天然气管道运输周转服务 |
| production_route | 真实管道接收有据路径输送交付及完整应分配站场管网支持生命周期 |
| market_state | 具真实商品状态端口的合格交付管输周转服务 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| 什么（What） | 合格交付石油或天然气管道运输周转服务 |
| 多少（How much） | 1 tkm合格交付商品周转量，真实交付吨质量乘有据物理管线路径公里 |
| 质量（How well） | 声明接收交付端口、真实石油天然气身份相态组成压力温度及合同数量质量时间验收 |
| 时长或周期（How long or cycle） | 真实连续报告批次期间及接收交付管存谱系、因果失败维护责任与完整资产生命期 |
| reference_flow_link | qualified_pipeline_work |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 合格交付石油或天然气管道运输周转服务 |
| 参考流属性 | 质量*距离 `118f2a40-50ec-457c-aa60-9bc6b6af9931` |
| 参考单位组 | 质量*距离 `3620148f-c5db-48ce-9065-a10092089aca` |
| 参考单位 | tkm |
| 必需限定信息 | petroleum_or_natural_gas_identity; actual_phase_composition; receipt_delivery_gates; pressure_temperature_density_state; accepted_delivered_mass; supported_physical_path_distance; network_cohort_period_routing; linepack_open_close; own_use_fuel_withdrawal; flare_vent_leak_liquid_spill_destinations; pump_compressor_regulation_treatment_responsibility; continuous_batch_changeover; all_users_allocation; native_provider_coverage; all_user_asset_life; period_T; uncertainty |

## 4. 计量与单位规则

| rule_id | 适用于 | required_property | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| reference_pipeline_work | reference product | 质量*距离 | tkm | 交付验收商品质量与其有据真实管线路径配对。网络中采用计量拓扑流量平衡或经验证水力路径证据将交付组次归至物理路径，不虚构分子跟踪或使用直线距离。逐路径份额只一次合计为交付验收质量。入口量留存管存拒收损失质量及预留运力不是交付输出；披露真实压力组成相态及交付资格。 |
| tkm_alias | reference product | 质量*距离 `118f2a40-50ec-457c-aa60-9bc6b6af9931` | tkm | 声明tkm严格为已核实原生t*km拼写别名：1 tkm = 1 t*km = 1000 kg*km。原生单位组仍为质量*距离，UUID3620148f-c5db-48ce-9065-a10092089aca；最终TIDAS交换使用原生t*km及真实系数，不改变功能量纲尺度。 |
| state_mass_conversion | 全部数量记录行 | 真实原生兼容属性 | 真实原生单位 | 保留每次观测实测体积及参照实际压力温度组成相态密度，相关时保留气体压缩因子；采用有据逐次关系换算至统一守恒质量基准。标准体积约定须声明而非假定相同。气体能量换算采用真实组成低位热值及兼容原生基准，不用默认甲烷密度。核实kWh换算为3.6 MJ/kWh。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 真实管道接收状态端口产品身份及完整物理控制供应方责任 |
| starting_condition_role | 接收状态定义运输前景，不代表真实燃料资产无上游 |
| product_classification_scope | 65131石油天然气管输完整功能及官方分销液化再气化排除 |
| recursive_input_rule | 原生外包运输支持仅一次替代其覆盖自营范围 |
| upstream_dataset_requirement | 真实投入身份原生单位状态端口路线期间地域生命周期范围 |
| disclosure | 交付质量路径、管存互斥去向自用燃料完整站场资产供应方及未知 |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| full_pipeline_function | 全部节点 | 覆盖原油精炼石油及石油产品加天然气，具完整真实液气组成状态与合同管输功能。不得缩为甲烷输送、仅原油、某压力等级或泵型。真实液泵气压机电力燃料其他驱动及调压热处理变体保留有据差异投入数量质量，不同时自动启用全部替代分支。 | unsd-cpc3-65131; phmsa-pipeline-faq |
| transport_gates | pipeline_movement; station_operations | 声明真实接收交付保管计量端站责任和合同验收数量相态组成压力温度时间。纳入服务负责准备启动充线充压控制再循环交付调压停机待机及失败拒收不合格回收责任。运输角色处理分离不是商品生产；独立生产精炼分销液化再气化仓储供应方在明确端口衔接，不默默并入或遗漏。 | unsd-cpc3-65131; phmsa-pipeline-faq |
| continuous_stock_modes | 全部节点 | 以共同时间端口基准索引计量管存期初期末库存、批次界面、运行批次、共享连续期间、清管清洗换品停机维护。换品混油排液吹扫放散回压返流具有真实物种状态接收方及因果分配。保留零交付等全部期间，不重复共享运行或把前期管存当新接收。 | epa-pipeline-blowdowns; ghg-product-2011 |
| commodity_custody_fuel | pipeline_movement; station_operations | 被输石油天然气是保管对象，不全部是运输消耗投入：本运输产品不含原始商品制造，披露交付损失返流库存数量供下游商品模型一次核算。真实提取自用燃料是独立运输燃料投入，须一次承担真实上游燃料供应负荷，无论产权或内部免费计价；不追加全部被输流的生产。回收燃料仅替代真实被替代供应，内部保管转移不是另一产品输出或自动避免生产信用。 | ghg-product-2011; epa-engine-exhaust |
| energy_and_release_ownership | station_operations; pipeline_movement | 区分外购能源真实压缩泵驱动燃料及内部发电转换输出余热回收。保留调压调温控制密封气动及启动待机能源。燃料上游不同于燃烧燃料管泄漏未燃发动机逸出工艺泄漏主动放散泄压火炬进料产物。必须有真实化石碳含量气体组成燃烧销毁性能物种相态空气水土或收集接收方，不假定统一泄漏比例火炬销毁纯甲烷组成或零排放。 | epa-engine-exhaust; epa-pipeline-blowdowns; ipcc-2019-fugitives |
| whole_asset_life | support_lifecycle | 本PCR生命周期选择纳入真实管线内衬阀门、泵压缩机驱动控制计量清管调压调温设备、站场电力接入及相关通道场址资产制造安装施工试验投产维护修理更换更新停用退役。完整总成与已含初始部件互斥，总成制造不等于全部运行生命期。按因果责任纳入真实开挖施工能源物料泄漏吹扫废物及恢复，不设统一寿命或全部输量归本用户假定。 | ghg-product-2011 |
| atomic_actual_exchanges | 全部节点 | 每项真实尚未表示投入供应方资产废物直接物质须扩展为一个真实节点的具体row_id方向类型、单一原生身份属性单位状态端口数量来源同节点协议接收方介质及不确定性。条件卡是扩展要求而非伞状UUID。收集烃水污泥废物处理与环境释放为不同去向，缺数量物种属性身份是不完整而非零。 | ghg-product-2011 |

## 6. 过程清单结构

每张清单流卡仅代表一个可独立识别的产品、物料配方、废物流、物质或供应服务，具有兼容的端口、属性和单位。完整供应总成或实际收集的混合物流可有一个身份，其已含组分不得另列重复交换。第8节cp_expand_协议是必须落实的身份识别要求，不得当作选定流或交换数量。逐项记录真实适用性，以独立行标识列出全部具体交换；完整保留适用范围，未发生须有证据。尚未展开或未知的要求属于不完整，不得当作零。改为采集协议不等于解决缺失身份，也不免除生命周期、分配、计量或边界义务。

### 过程图

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| pipeline_movement | 管道输送保管及合格交付 | required | 真实石油天然气管输合同 | foreground | qualified_pipeline_work |
| station_operations | 泵送压缩及运输支持站场 | required | 真实站场控制及运输处理责任 | foreground | qualified_pipeline_work |
| support_lifecycle | 管线站场完整支持生命周期 | required | 真实应分配基础设施供应和供应方 | foreground | qualified_pipeline_work |

全部节点关联唯一最终管输周转分母。保管接收管存内部再循环及站场能量转换不额外产生最终商品或运输输出。

### 过程：管道输送保管及合格交付 (`pipeline_movement`)

#### 输入

##### 产品流

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 合格交付石油或天然气管道运输周转服务 (`qualified_pipeline_work`)

真实合格交付石油天然气服务，完整商品状态端口路径期间精确身份未解决，不能用被输石油或管材制造代理。

- 选定流：合格交付石油或天然气管道运输周转服务
- 流属性/单位：质量*距离 / tkm
- 数量规则：1 tkm
- 数值来源模式：`fixed_value`
- 适用范围：`site_specific`
- 归一化基准：每声明的参考流
- 基准类型：`reference_flow`
- 证据类型：`method_formula`
- 采集协议：`cp_custody`
- 来源：`unsd-cpc3-65131`; `ghg-product-2011`

##### 废物流

##### 基本流

### 过程：泵送压缩及运输支持站场 (`station_operations`)

#### 输入

##### 产品流

###### 交流电 (`bought_ac`)

仅真实声明供应端口外购交流电，内部发动机发电直流及供应方已含电量独立。

- 选定流：交流电 `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- 流属性/单位：低位热值 / MJ
- 数量规则：真实外购交流电能 / T
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每声明的参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_energy`
- 来源：`unsd-cpc3-65131`; `ghg-product-2011`

###### 柴油 (`diesel_supply`)

条件真实柴油驱动发电移动支持，仅兼容时用无供应方未定等级身份。

- 选定流：柴油 `9d258d75-6792-4f1c-9856-81602ed8f816`
- 流属性/单位：质量 / kg
- 数量规则：真实消耗柴油供应或归属库存提取 / T
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每声明的参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_energy`
- 来源：`unsd-cpc3-65131`; `ghg-product-2011`

###### 自来水 (`tap_water`)

条件真实供应端口自来水，不同身份水压试验原水取用冷却工艺水另扩，不自动用自来水替代。

- 选定流：自来水 `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- 流属性/单位：质量 / kg
- 数量规则：真实自来水供应 / T
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每声明的参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_material`
- 来源：`unsd-cpc3-65131`; `ghg-product-2011`

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

###### 废润滑油 (`used_lubricating_oil`)

条件真实产生端口废润滑油，处理接收供应方另列除非精确已含，不是全部石油混油或回收商品。

- 选定流：废润滑油 `55d93375-7f04-4166-b2a2-88ce929051a5`
- 流属性/单位：质量 / kg
- 数量规则：真实废油产生 / T
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每声明的参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_material`
- 来源：`unsd-cpc3-65131`; `ghg-product-2011`

##### 基本流

###### 二氧化碳（化石源） (`fossil_co2_air`)

真实化石燃烧火炬及独立原有气体CO2放散互不重叠。已核实身份为空气排放未指明子介质，仅真实记录匹配该子介质时绑定。已知不同空气子介质须另行核实身份，不强改真实介质。不把全部燃料碳和甲烷碳重复计。

- 选定流：二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 流属性/单位：质量 / kg
- 数量规则：真实向空气释放化石CO2 / T
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每声明的参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_release`
- 来源：`unsd-cpc3-65131`; `ghg-product-2011`

###### 甲烷 (化石源) (`fossil_methane_air`)

先分真实压缩机密封气动管线燃料管泄漏主动放散泄压发动机逸出火炬未燃甲烷再加总互斥排放，不设通用泄漏比例或把放散气全当甲烷。已核实身份为空气排放未指明子介质，仅真实记录匹配该子介质时绑定。已知不同空气子介质须另行核实身份，不强改真实介质。

- 选定流：甲烷 (化石源) `08a91e70-3ddc-11dd-9610-0050c2490048`
- 流属性/单位：质量 / kg
- 数量规则：真实向空气释放化石CH4 / T
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每声明的参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_release`
- 来源：`unsd-cpc3-65131`; `ghg-product-2011`

### 过程：管线站场完整支持生命周期 (`support_lifecycle`)

#### 输入

##### 产品流

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

##### 基本流

## 7. 分配与共产品处理

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| causal_all_user | 全部节点 | 优先细分计量真实路径站场产品批次责任。共享泵送压缩控制维护管网负荷按全部产品用户有据水力阻力压力流量能源时间容量因果关系分配，参考吨公里不强迫气液或不同压力服务采用统一吨公里分配。保留质量备用待机约束，经济替代须无有据物理关系并有敏感性，同事件份额合一。 | ghg-product-2011 |
| delivered_denominator | 全部节点 | 先保留因果准备循环管存管理待机维护清管失败不合格拒收泄漏返流回收负荷，再仅按正合格交付管输周转T归一化一次。只有真实验收交付且有据接收路径谱系计输出，不包括留存管存损失自用火炬质量。真实独立合同合格返输按自身物理路径验收仅一次识别，不重复当初始交付，T=0无有限强度。 | ghg-product-2011 |
| life_stock_period | 全部节点 | 逐完整原生资产生命事件按同组归属运行量除以有据正全用户总使用量分配，再按T归一化。安装投产维护更换退役区别初始制造。共享期间产品供应方期初期末保管库存未来交付组次一致保留因果结转，不能把全部历史施工归一个期间或漏全部既有资产生命期。 | ghg-product-2011 |
| provider_and_recovery | 全部节点 | 供应方运输运行维护处理基础设施须保留真实原生功能单位端口覆盖阶段，仅一次替代精确覆盖自营范围，包括内含能源直接排放生命周期范围；明确保留未含阶段。回压内部回收不是新外部输入，收集外运物不是空气排放。真实外部有用热电物料共输出须明确细分或有据分配及接收方，不自动给回收循环火炬信用。 | ghg-product-2011 |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_custody | pipeline_movement | 交付服务保管去向外包 | 真实一手计量运单供应方记录 | 合同端口产品相态组成、时间索引接收交付、计量体积状态密度、物理路径拓扑路径模型、期初期末管存、拒收返流损失回收外运、自用火炬提取、全用户供应方原生范围数量 | 闭合校准计量及真实逐观测质量，验证路径分配及验收交付组次谱系，采用互斥保管项真实环境越界，不把未解释差额当甲烷 按参考计量口径汇总唯一且已验收的合格产出作为分母，单列不合格事件及其资源责任。参考量保持规定值，仅归属的清单总量除以正分母。 | 真实质量状态体积路径距离原生供应方单位；T用tkm | 逐事件及期间闭合 | 真实连续批次报告期间及关联资产阶段 | 真实物理管线路径站场端站及供应方 | 每声明的参考流 | 签署记录；校准；原生来源；因果分配；不确定性保存各实测操作数的来源及原生口径，注明实际采用的换算或归属依据，以及所供结果是否已按该参考流计量。 |
| cp_energy | station_operations | 真实外部自用驱动能源吹扫供应 | 真实一手计量运单供应方记录 | 设备期间模式、外购计量、自用气提取组成低位热值、压力温度密度、燃料库存燃烧泄漏、泵压机待机责任、吹扫介质、发电输出转换供应方覆盖 | 逐真实能路计量，燃料提取去向与保管闭合不重复输入，保留原生端口真实状态换算，内部能量不当外购惰性吹扫气独立于能源，按实测质量或规定状态体积登记，核对计量接收、库存、回收和放空记录。仅燃料使用低位热值。 原始观测和对账总量保留其记录口径。负担行只分配仍共享的总量，已归属总量仅除以同队列、同交接点的正合格产出；已与该参考流等效的结果原值沿用。零产出时保留负担并记录去向。 | 原生能量质量体积；状态换算低位热值；吹扫气用实测质量或规定状态体积；关联清单行的报告单位：MJ (bought_ac)；kg (diesel_supply) | 逐事件及期间闭合 | 真实连续批次报告期间及关联资产阶段 | 真实物理管线路径站场端站及供应方 | 每声明的参考流 | 签署记录；校准；原生来源；因果分配；不确定性保存各实测操作数的来源及原生口径，注明实际采用的换算或归属依据，以及所供结果是否已按该参考流计量。 |
| cp_release | station_operations | 真实直接空气水土物种及火炬放散燃烧 | 真实一手计量运单供应方记录 | 来源事件相态物种介质、实测速率时长、气体组成、放散泄压状态、泄漏逸出、火炬进料真实性能、原有CO2碳、收集回收去向、不确定性重叠范围 | 采用有据测量来源特定工程估计并声明不确定性，分来源接收方及碳物种闭合，缺字段为不完整，不用统一因子或假定销毁 原始观测和对账总量保留其记录口径。负担行只分配仍共享的总量，已归属总量仅除以同队列、同交接点的正合格产出；已与该参考流等效的结果原值沿用。零产出时保留负担并记录去向。各项独立实测交付、排放及移交按各自交接点记录，负担按其适用规则分配。 | 逐真实物种质量兼容原生单位；关联清单行的报告单位：kg (fossil_co2_air, fossil_methane_air) | 逐事件及期间闭合 | 真实连续批次报告期间及关联资产阶段 | 真实物理管线路径站场端站及供应方 | 每声明的参考流 | 签署记录；校准；原生来源；因果分配；不确定性保存各实测操作数的来源及原生口径，注明实际采用的换算或归属依据，以及所供结果是否已按该参考流计量。 |
| cp_material | station_operations | 真实处理供应水废物回收去向 | 真实一手计量运单供应方记录 | 真实配方状态、供应库存使用、水源等级、清管清洗运行换品事件、回收液污泥废物组成、产生接收处理供应方、数量范围 | 真实供应废物关联连续期间批次，回收期末外运使用项互斥，真实水固烃质量及供应方归属 原始观测和对账总量保留其记录口径。负担行只分配仍共享的总量，已归属总量仅除以同队列、同交接点的正合格产出；已与该参考流等效的结果原值沿用。零产出时保留负担并记录去向。各项独立实测交付、排放及移交按各自交接点记录，负担按其适用规则分配。 | 逐真实原生物料废物属性单位；关联清单行的报告单位：kg (tap_water, used_lubricating_oil) | 逐事件及期间闭合 | 真实连续批次报告期间及关联资产阶段 | 真实物理管线路径站场端站及供应方 | 每声明的参考流 | 签署记录；校准；原生来源；因果分配；不确定性保存各实测操作数的来源及原生口径，注明实际采用的换算或归属依据，以及所供结果是否已按该参考流计量。 |
| cp_assets | support_lifecycle | 真实全用户资产生命阶段未含供应方 | 真实一手计量运单供应方记录 | 资产场址组次原生数量、制造安装投产维护更换退役事件、物料能源废物直接释放、真实全用户使用量归属份额、供应方原生端口范围 | 采用真实资产供应方记录及因果同组全用户生命分配，总成内含部件互斥，逐项识别未含阶段范围及真实服务原生数量 原始观测和对账总量保留其记录口径。负担行只分配仍共享的总量，已归属总量仅除以同队列、同交接点的正合格产出；已与该参考流等效的结果原值沿用。零产出时保留负担并记录去向。 | 逐真实原生资产事件服务单位及兼容使用量 | 逐事件及期间闭合 | 真实连续批次报告期间及关联资产阶段 | 真实物理管线路径站场端站及供应方 | 每声明的参考流 | 签署记录；校准；原生来源；因果分配；不确定性保存各实测操作数的来源及原生口径，注明实际采用的换算或归属依据，以及所供结果是否已按该参考流计量。 |
| cp_expand_subcontract_pipeline | pipeline_movement | 必须展开身份 subcontract_pipeline (inputs/product)：真实原生外包管输服务 | collected_record | requirement_id=subcontract_pipeline; process_id=pipeline_movement; required_direction=inputs; required_flow_type=product; original_collection_protocol=cp_custody; applicability_evidence; occurrence_event_id; concrete_row_id; physical_identity; formulation_or_species; phase; carbon_origin; particle_fraction; source_compartment; receiving_compartment; supply_or_handover_gate; provider_covered_cells; asset_component_event_and_lifecycle_phase; native_property; native_unit; measured_native_quantity; source_record_id; allocation_all_users; normalization_denominator; per_identity_amount_calculation; verification_evidence; unresolved_reason; occurrence_to_row_reconciliation; provider_contract; independent_function; provider_gates; native_functional_unit; delivered_quantity; covered_process_phase_cells; uncovered_foreground_rows; applicability_decision_record; covered_concrete_rows; excluded_occurrence_reason; completion_evidence; observed_quantity_state; conversion_or_allocation_evidence; provider_functional_unit; accepted_service_demand; provider_intensity_basis; covered_service_stages | 条件逐项真实管输供应方边界路线商品原生功能覆盖范围，不向不同原生功能强制吨公里身份。 本范围是必须落实的身份识别要求，不是交换流。使用原节点采集协议及其记录，先按真实身份、端口及独立功能拆分，再将保留的数量、基准及证据规则分别用于各兼容具体行。不得将异质身份合并数量或从总括名称推断原生属性单位。未发生须有证据，适用性或身份未知则阻止完成。 以下采集条件仅限本项 inputs/product 的身份与交接点（真实原生外包管输服务）。仅在本PCR范围内实际委托独立功能时启用。记录合同、交付服务功能、关口、原生功能单位、实际交付量及具体覆盖的过程和寿命阶段；逐项与自营活动比对，完整供应方或未覆盖前景活动仅计一次。不用金额、材料质量或假设件数替代真实功能；同一最终服务不通过外部最终产品供应方递归重复计入。 每项适用性判断须留证。经证实不发生仅关闭所述范围和时段，缺记录仍未解决。发生的要求须将全部事件映射到具体row ID及相容原生数量，或精确映射至已覆盖行和供应方责任，并逐项说明排除理由。证据须覆盖身份、支持单位、计算、原始记录及全部去向；既有与新增分支对同一事件互斥覆盖，协议本身不作为交换。完成须无未分配事件、无重复覆盖、无相关数量或身份未决项。按有证据的实际分支采集原始字段。不适用的操作数须关联分支判定，适用但缺乏实测或依据的数量登记待决。 | 已核实的合同交付功能单位；仅独立可计数且已验收的结果使用 Item(s) | 每次真实事件及每项有证据的未发生判断 | 完整声明队列及归属资产寿命关联事件 | 仅本过程真实责任场所及供应方 | 先对账原生事件总量，仅汇总身份、状态、单位、交接点及期间均相容的量。按相应计算规则逐行核算一次：只分配仍共享的负担，目标总量仅除以同口径的正合格产出；等效每参考流数值原值沿用，零产出期间不作除法并保留处置记录。 | 按指定交接点实际验收量计量。仅在单位强度换算为总负担时，以供应方强度乘同一原生单位的需求量。保留合同范围、验收、原生单位及覆盖阶段记录。仅按时间交付的功能以时长计量。 对按合同口径已验收的服务，仅在数量的归属和归一化状态与下式前提匹配时使用该规则：覆盖真实供应方数量 / T 保留原始凭据、实际采用的系数和结果单位。数值来源模式：calculated_value；适用范围：site_specific；归一化基准：每声明的参考流；基准类型：reference_flow；证据类型：calculated_from_collection；采集协议：cp_custody；来源：unsd-cpc3-65131; ghg-product-2011。须有原始记录、精确原生支持及逐具体行核验；这些规则不提供缺失身份或数值。 完成判据：check_occurrence_completion。 |
| cp_expand_direct_liquid_release | pipeline_movement | 必须展开身份 direct_liquid_release (outputs/elementary)：真实液态石油组分向声明介质释放 | collected_record | requirement_id=direct_liquid_release; process_id=pipeline_movement; required_direction=outputs; required_flow_type=elementary; original_collection_protocol=cp_custody; applicability_evidence; occurrence_event_id; concrete_row_id; physical_identity; formulation_or_species; phase; carbon_origin; particle_fraction; source_compartment; receiving_compartment; supply_or_handover_gate; provider_covered_cells; asset_component_event_and_lifecycle_phase; native_property; native_unit; measured_native_quantity; source_record_id; allocation_all_users; normalization_denominator; per_identity_amount_calculation; verification_evidence; unresolved_reason; occurrence_to_row_reconciliation; substance_identity; chemical_form; environmental_compartment; carbon_origin; particle_fraction_or_count_basis; measured_or_calculated_release; species_conversion_evidence; applicability_decision_record; covered_concrete_rows; excluded_occurrence_reason; completion_evidence; observed_quantity_state; conversion_or_allocation_evidence | 条件扩展逐真实化合物配方相态及土水空气子介质真实环境越界。泄液回收至库存废物不能全部当排放，实际挥发份另计且不重复泄漏质量。 本范围是必须落实的身份识别要求，不是交换流。使用原节点采集协议及其记录，先按真实身份、端口及独立功能拆分，再将保留的数量、基准及证据规则分别用于各兼容具体行。不得将异质身份合并数量或从总括名称推断原生属性单位。未发生须有证据，适用性或身份未知则阻止完成。 以下采集条件仅限本项 outputs/elementary 的身份与交接点（真实液态石油组分向声明介质释放）。仅对进入已记录接收介质且有观测或适用计算依据的实际释放启用。记录具体物质及形态、来源或接收介质、适用的化石或生物碳来源、适用的粒径组分或粒子数粒径基础及采样期；保留元素与分子口径，换算须有化学计量和相容物种证据。收集物流中的污染物在实际环境排放边界前归接收物流，不用CO2、NOx、VOC、COD或泛颗粒物流代替缺失物种。 每项适用性判断须留证。经证实不发生仅关闭所述范围和时段，缺记录仍未解决。发生的要求须将全部事件映射到具体row ID及相容原生数量，或精确映射至已覆盖行和供应方责任，并逐项说明排除理由。证据须覆盖身份、支持单位、计算、原始记录及全部去向；既有与新增分支对同一事件互斥覆盖，协议本身不作为交换。完成须无未分配事件、无重复覆盖、无相关数量或身份未决项。按有证据的实际分支采集原始字段。不适用的操作数须关联分支判定，适用但缺乏实测或依据的数量登记待决。 | 本物质、资源或物理排放在实际环境介质的已核实原生属性与单位 | 每次真实事件及每项有证据的未发生判断 | 完整声明队列及归属资产寿命关联事件 | 仅本过程真实责任场所及供应方 | 先对账原生事件总量，仅汇总身份、状态、单位、交接点及期间均相容的量。按相应计算规则逐行核算一次：只分配仍共享的负担，目标总量仅除以同口径的正合格产出；等效每参考流数值原值沿用，零产出期间不作除法并保留处置记录。 | 采样或活动量及适用因子须对应物种、相态、来源和环境介质。按实际对象区分质量、粒子数、热量及元素当量；换算须有依据，重叠总量不可相加。 对上述具体身份及相容输入口径，仅在数量的归属和归一化状态与下式前提匹配时使用该规则：真实未回收环境组分释放 / T 保留原始凭据、实际采用的系数和结果单位。数值来源模式：calculated_value；适用范围：site_specific；归一化基准：每声明的参考流；基准类型：reference_flow；证据类型：calculated_from_collection；采集协议：cp_custody；来源：unsd-cpc3-65131; ghg-product-2011。须有原始记录、精确原生支持及逐具体行核验；这些规则不提供缺失身份或数值。 完成判据：check_occurrence_completion。 |
| cp_expand_drive_fuel_gas | station_operations | 必须展开身份 drive_fuel_gas (inputs/product)：真实组成特定天然气燃料供应 | collected_record | requirement_id=drive_fuel_gas; process_id=station_operations; required_direction=inputs; required_flow_type=product; original_collection_protocol=cp_energy; applicability_evidence; occurrence_event_id; concrete_row_id; physical_identity; formulation_or_species; phase; carbon_origin; particle_fraction; source_compartment; receiving_compartment; supply_or_handover_gate; provider_covered_cells; asset_component_event_and_lifecycle_phase; native_property; native_unit; measured_native_quantity; source_record_id; allocation_all_users; normalization_denominator; per_identity_amount_calculation; verification_evidence; unresolved_reason; occurrence_to_row_reconciliation; carrier_and_supply_state; meter_id; integrated_energy_or_power_time; fuel_as_received_quantity; heating_value_basis; supply_return_state; responsible_failure_and_readiness; complete_provider_exclusion; applicability_decision_record; covered_concrete_rows; excluded_occurrence_reason; completion_evidence; observed_quantity_state; conversion_or_allocation_evidence | 真实独立消耗燃料一次含上游供应，包括自用货物提取。确认物理组成状态端口及原生低位热值质量基准，不是全部被输商品量或假定纯甲烷。 本范围是必须落实的身份识别要求，不是交换流。使用原节点采集协议及其记录，先按真实身份、端口及独立功能拆分，再将保留的数量、基准及证据规则分别用于各兼容具体行。不得将异质身份合并数量或从总括名称推断原生属性单位。未发生须有证据，适用性或身份未知则阻止完成。 以下采集条件仅限本项 inputs/product 的身份与交接点（真实组成特定天然气燃料供应）。按该作业实际供应或提取的燃料启用。保留品级、收到状态、罐号或批次、接收、库存、内部移交、退回及实耗。客户所有或期初库存中的燃料提取保留供应责任，禁止重复记购入。 每项适用性判断须留证。经证实不发生仅关闭所述范围和时段，缺记录仍未解决。发生的要求须将全部事件映射到具体row ID及相容原生数量，或精确映射至已覆盖行和供应方责任，并逐项说明排除理由。证据须覆盖身份、支持单位、计算、原始记录及全部去向；既有与新增分支对同一事件互斥覆盖，协议本身不作为交换。完成须无未分配事件、无重复覆盖、无相关数量或身份未决项。按有证据的实际分支采集原始字段。不适用的操作数须关联分支判定，适用但缺乏实测或依据的数量登记待决。 | 燃料按实测供应状态的属性与单位；能量当量使用相容热值口径 | 每次真实事件及每项有证据的未发生判断 | 完整声明队列及归属资产寿命关联事件 | 仅本过程真实责任场所及供应方 | 先对账原生事件总量，仅汇总身份、状态、单位、交接点及期间均相容的量。按相应计算规则逐行核算一次：只分配仍共享的负担，目标总量仅除以同口径的正合格产出；等效每参考流数值原值沿用，零产出期间不作除法并保留处置记录。 | 核实燃料库存与实耗。仅以相容热值推算能量并记录热值来源和口径；仅凭收货不能确定燃烧量或排放量。 对上述具体身份及相容输入口径，仅在数量的归属和归一化状态与下式前提匹配时使用该规则：真实声明端口提取外购燃料 / T 保留原始凭据、实际采用的系数和结果单位。数值来源模式：calculated_value；适用范围：site_specific；归一化基准：每声明的参考流；基准类型：reference_flow；证据类型：calculated_from_collection；采集协议：cp_energy；来源：unsd-cpc3-65131; ghg-product-2011。须有原始记录、精确原生支持及逐具体行核验；这些规则不提供缺失身份或数值。 完成判据：check_occurrence_completion。 |
| cp_expand_other_energy_purge | station_operations | 必须展开身份 other_energy_purge (inputs/product)：真实其他能源或吹扫介质 | collected_record | requirement_id=other_energy_purge; process_id=station_operations; required_direction=inputs; required_flow_type=product; original_collection_protocol=cp_energy; applicability_evidence; occurrence_event_id; concrete_row_id; physical_identity; formulation_or_species; phase; carbon_origin; particle_fraction; source_compartment; receiving_compartment; supply_or_handover_gate; provider_covered_cells; asset_component_event_and_lifecycle_phase; native_property; native_unit; measured_native_quantity; source_record_id; allocation_all_users; normalization_denominator; per_identity_amount_calculation; verification_evidence; unresolved_reason; occurrence_to_row_reconciliation; carrier_and_supply_state; meter_id; integrated_energy_or_power_time; fuel_as_received_quantity; heating_value_basis; supply_return_state; responsible_failure_and_readiness; complete_provider_exclusion; applicability_decision_record; covered_concrete_rows; excluded_occurrence_reason; completion_evidence; purge_species; recovered_quantity; vent_receiver; energy_basis; observed_quantity_state; conversion_or_allocation_evidence | 按真实身份逐项扩展直流其他燃料外购热蒸汽氮或其他惰性吹扫气，不给替代项一个UUID或推定统一吹扫组成。 本范围是必须落实的身份识别要求，不是交换流。使用原节点采集协议及其记录，先按真实身份、端口及独立功能拆分，再将保留的数量、基准及证据规则分别用于各兼容具体行。不得将异质身份合并数量或从总括名称推断原生属性单位。未发生须有证据，适用性或身份未知则阻止完成。 按实际电力、有用热冷、燃料和惰性吹扫介质分别启用。采用计量积分能量或有证据的功率时间积分，记录实际燃料量与相容热值及供回热状态。按物料登记每种惰性气体的来源、期初、接收、期末、回收及实测放空或移交去向，不作燃料折算。逐事件登记实际身份、边界、期间、独立原生数量及负责运营方。按实际发生保留待机、失败、返工及库存；仅以供应方已覆盖阶段替代相同直接作业。 每项适用性判断须留证。经证实不发生仅关闭所述范围和时段，缺记录仍未解决。发生的要求须将全部事件映射到具体row ID及相容原生数量，或精确映射至已覆盖行和供应方责任，并逐项说明排除理由。证据须覆盖身份、支持单位、计算、原始记录及全部去向；既有与新增分支对同一事件互斥覆盖，协议本身不作为交换。完成须无未分配事件、无重复覆盖、无相关数量或身份未决项。按有证据的实际分支采集原始字段。仅属于不适用分支的字段须注明理由；适用分支缺少的计量仍须登记待决。 | 能源或燃料采用实际载能体口径；惰性气体用实测质量或规定状态体积 | 每次真实事件及每项有证据的未发生判断 | 完整声明队列及归属资产寿命关联事件 | 仅本过程真实责任场所及供应方 | 先对账原生事件总量，仅汇总身份、状态、单位、交接点及期间均相容的量。按相应计算规则逐行核算一次：只分配仍共享的负担，目标总量仅除以同口径的正合格产出；等效每参考流数值原值沿用，零产出期间不作除法并保留处置记录。 | 按载能体计量能源。各吹扫气按接收、库存、回收、实测放空及移交对账，仅燃料适用热值。 对上述具体身份及相容输入口径，仅在数量的归属和归一化状态与下式前提匹配时使用该规则：逐真实供应能源物料数量 / T 保留原始凭据、实际采用的系数和结果单位。数值来源模式：calculated_value；适用范围：site_specific；归一化基准：每声明的参考流；基准类型：reference_flow；证据类型：calculated_from_collection；采集协议：cp_energy；来源：unsd-cpc3-65131; ghg-product-2011。须有原始记录、精确原生支持及逐具体行核验；这些规则不提供缺失身份或数值。 完成判据：check_occurrence_completion。 |
| cp_expand_transport_chemicals | station_operations | 必须展开身份 transport_chemicals (inputs/product)：真实运输处理维护物料 | collected_record | requirement_id=transport_chemicals; process_id=station_operations; required_direction=inputs; required_flow_type=product; original_collection_protocol=cp_material; applicability_evidence; occurrence_event_id; concrete_row_id; physical_identity; formulation_or_species; phase; carbon_origin; particle_fraction; source_compartment; receiving_compartment; supply_or_handover_gate; provider_covered_cells; asset_component_event_and_lifecycle_phase; native_property; native_unit; measured_native_quantity; source_record_id; allocation_all_users; normalization_denominator; per_identity_amount_calculation; verification_evidence; unresolved_reason; occurrence_to_row_reconciliation; operation_record; material_sku; formulation_grade_state; independent_function; supplier; package_tare; opening_stock; net_receipts; unused_returns; closing_stock; failed_use; destination; applicability_decision_record; covered_concrete_rows; excluded_occurrence_reason; completion_evidence; observed_quantity_state; conversion_or_allocation_evidence | 条件真实减阻防腐等添加剂润滑密封过滤吸附清洗清管供应，逐真实配方状态运输角色，不自动并入商品加工包。 本范围是必须落实的身份识别要求，不是交换流。使用原节点采集协议及其记录，先按真实身份、端口及独立功能拆分，再将保留的数量、基准及证据规则分别用于各兼容具体行。不得将异质身份合并数量或从总括名称推断原生属性单位。未发生须有证据，适用性或身份未知则阻止完成。 以下采集条件仅限本项 inputs/product 的身份与交接点（真实运输处理维护物料）。仅对实际发生的所述作业及独立消耗SKU或实物启用。记录材料或配方、等级状态、功能、供应方、扣包装皮重后的净量、库存变动、未用退回和去向。独立供应的包装衬材按材料及一次性或复用状态区分；完整配方或物理总成保留一个身份，组成信息不相加，不同外购品不得共用汇总数量。纳入失败使用、维护及返工，记录真实消耗而非仅采购量。 每项适用性判断须留证。经证实不发生仅关闭所述范围和时段，缺记录仍未解决。发生的要求须将全部事件映射到具体row ID及相容原生数量，或精确映射至已覆盖行和供应方责任，并逐项说明排除理由。证据须覆盖身份、支持单位、计算、原始记录及全部去向；既有与新增分支对同一事件互斥覆盖，协议本身不作为交换。完成须无未分配事件、无重复覆盖、无相关数量或身份未决项。按有证据的实际分支采集原始字段。不适用的操作数须关联分支判定，适用但缺乏实测或依据的数量登记待决。 | 实际品项、配方或物件在规定交接点及状态下的原生数量 | 每次真实事件及每项有证据的未发生判断 | 完整声明队列及归属资产寿命关联事件 | 仅本过程真实责任场所及供应方 | 先对账原生事件总量，仅汇总身份、状态、单位、交接点及期间均相容的量。按相应计算规则逐行核算一次：只分配仍共享的负担，目标总量仅除以同口径的正合格产出；等效每参考流数值原值沿用，零产出期间不作除法并保留处置记录。 | 逐批核对收货、期初期末、退回、耗用及互斥去向。件数或体积折质量须有单件质量或相容状态密度依据；产品身份以外的包装和衬材独立登记。 对上述具体身份及相容输入口径，仅在数量的归属和归一化状态与下式前提匹配时使用该规则：逐真实化学品物料供应 / T 保留原始凭据、实际采用的系数和结果单位。数值来源模式：calculated_value；适用范围：site_specific；归一化基准：每声明的参考流；基准类型：reference_flow；证据类型：calculated_from_collection；采集协议：cp_material；来源：unsd-cpc3-65131; ghg-product-2011。须有原始记录、精确原生支持及逐具体行核验；这些规则不提供缺失身份或数值。 完成判据：check_occurrence_completion。 |
| cp_expand_actual_waste_fates | station_operations | 必须展开身份 actual_waste_fates (outputs/waste)：真实分离液污泥滤材维护废物 | collected_record | requirement_id=actual_waste_fates; process_id=station_operations; required_direction=outputs; required_flow_type=waste; original_collection_protocol=cp_material; applicability_evidence; occurrence_event_id; concrete_row_id; physical_identity; formulation_or_species; phase; carbon_origin; particle_fraction; source_compartment; receiving_compartment; supply_or_handover_gate; provider_covered_cells; asset_component_event_and_lifecycle_phase; native_property; native_unit; measured_native_quantity; source_record_id; allocation_all_users; normalization_denominator; per_identity_amount_calculation; verification_evidence; unresolved_reason; occurrence_to_row_reconciliation; waste_origin_event; material_or_true_mixture; moisture_basis; container_tare; opening_waste_stock; generated_waste; received_waste; handover_quantity; closing_waste_stock; onsite_treatment; receiver_id; applicability_decision_record; covered_concrete_rows; excluded_occurrence_reason; completion_evidence; observed_quantity_state; conversion_or_allocation_evidence | 条件真实混油水相污泥滤材清管器受污染清理物按组成状态产生端口接收方；回收可售商品废水及环境释放为不同去向。 本范围是必须落实的身份识别要求，不是交换流。使用原节点采集协议及其记录，先按真实身份、端口及独立功能拆分，再将保留的数量、基准及证据规则分别用于各兼容具体行。不得将异质身份合并数量或从总括名称推断原生属性单位。未发生须有证据，适用性或身份未知则阻止完成。 以下采集条件仅限本项 outputs/waste 的身份与交接点（真实分离液污泥滤材维护废物）。本过程实际产生或接收所述废物时启用。记录材料或配方或真实共同收集混合物、干湿状态、容器皮重、来源事件、存量、交接关口及实际接收者；核对产生量+期初库存+接收量=交出量+期末库存+另列现场处理量。分收的不同废物分行，真实接收混合物可为一行，其组分仅作不可相加审计；有用回收、客户保留物与废物去向分开，不自动给替代抵扣。 每项适用性判断须留证。经证实不发生仅关闭所述范围和时段，缺记录仍未解决。发生的要求须将全部事件映射到具体row ID及相容原生数量，或精确映射至已覆盖行和供应方责任，并逐项说明排除理由。证据须覆盖身份、支持单位、计算、原始记录及全部去向；既有与新增分支对同一事件互斥覆盖，协议本身不作为交换。完成须无未分配事件、无重复覆盖、无相关数量或身份未决项。按有证据的实际分支采集原始字段。不适用的操作数须关联分支判定，适用但缺乏实测或依据的数量登记待决。 | 接收方验收的具体废物或实际混合收集物在实测状态下的原生数量 | 每次真实事件及每项有证据的未发生判断 | 完整声明队列及归属资产寿命关联事件 | 仅本过程真实责任场所及供应方 | 先对账原生事件总量，仅汇总身份、状态、单位、交接点及期间均相容的量。按相应计算规则逐行核算一次：只分配仍共享的负担，目标总量仅除以同口径的正合格产出；等效每参考流数值原值沿用，零产出期间不作除法并保留处置记录。 | 以接收记录核对产生、库存、场内处理和实测交付。混合物流量与组分测量分开；干湿基或质量体积换算须有相容组成或密度。接收转移和环境直排按不同交接点记录。 对上述具体身份及相容输入口径，仅在数量的归属和归一化状态与下式前提匹配时使用该规则：逐互斥真实废物产生 / T 保留原始凭据、实际采用的系数和结果单位。数值来源模式：calculated_value；适用范围：site_specific；归一化基准：每声明的参考流；基准类型：reference_flow；证据类型：calculated_from_collection；采集协议：cp_material；来源：unsd-cpc3-65131; ghg-product-2011。须有原始记录、精确原生支持及逐具体行核验；这些规则不提供缺失身份或数值。 完成判据：check_occurrence_completion。 |
| cp_expand_other_direct_species | station_operations | 必须展开身份 other_direct_species (outputs/elementary)：真实其他直接物质向声明介质排放 | collected_record | requirement_id=other_direct_species; process_id=station_operations; required_direction=outputs; required_flow_type=elementary; original_collection_protocol=cp_release; applicability_evidence; occurrence_event_id; concrete_row_id; physical_identity; formulation_or_species; phase; carbon_origin; particle_fraction; source_compartment; receiving_compartment; supply_or_handover_gate; provider_covered_cells; asset_component_event_and_lifecycle_phase; native_property; native_unit; measured_native_quantity; source_record_id; allocation_all_users; normalization_denominator; per_identity_amount_calculation; verification_evidence; unresolved_reason; occurrence_to_row_reconciliation; substance_identity; chemical_form; environmental_compartment; carbon_origin; particle_fraction_or_count_basis; measured_or_calculated_release; species_conversion_evidence; applicability_decision_record; covered_concrete_rows; excluded_occurrence_reason; completion_evidence; observed_quantity_state; conversion_or_allocation_evidence | 条件逐真实CO氮氧组分硫化物非甲烷挥发物颗粒粒径组成水土组分或相关污染物介质，元素硫化合物及总量不可互换，不用CO2当量伪流。 本范围是必须落实的身份识别要求，不是交换流。使用原节点采集协议及其记录，先按真实身份、端口及独立功能拆分，再将保留的数量、基准及证据规则分别用于各兼容具体行。不得将异质身份合并数量或从总括名称推断原生属性单位。未发生须有证据，适用性或身份未知则阻止完成。 以下采集条件仅限本项 outputs/elementary 的身份与交接点（真实其他直接物质向声明介质排放）。仅对进入已记录接收介质且有观测或适用计算依据的实际释放启用。记录具体物质及形态、来源或接收介质、适用的化石或生物碳来源、适用的粒径组分或粒子数粒径基础及采样期；保留元素与分子口径，换算须有化学计量和相容物种证据。收集物流中的污染物在实际环境排放边界前归接收物流，不用CO2、NOx、VOC、COD或泛颗粒物流代替缺失物种。 每项适用性判断须留证。经证实不发生仅关闭所述范围和时段，缺记录仍未解决。发生的要求须将全部事件映射到具体row ID及相容原生数量，或精确映射至已覆盖行和供应方责任，并逐项说明排除理由。证据须覆盖身份、支持单位、计算、原始记录及全部去向；既有与新增分支对同一事件互斥覆盖，协议本身不作为交换。完成须无未分配事件、无重复覆盖、无相关数量或身份未决项。按有证据的实际分支采集原始字段。不适用的操作数须关联分支判定，适用但缺乏实测或依据的数量登记待决。 | 本物质、资源或物理排放在实际环境介质的已核实原生属性与单位 | 每次真实事件及每项有证据的未发生判断 | 完整声明队列及归属资产寿命关联事件 | 仅本过程真实责任场所及供应方 | 先对账原生事件总量，仅汇总身份、状态、单位、交接点及期间均相容的量。按相应计算规则逐行核算一次：只分配仍共享的负担，目标总量仅除以同口径的正合格产出；等效每参考流数值原值沿用，零产出期间不作除法并保留处置记录。 | 采样或活动量及适用因子须对应物种、相态、来源和环境介质。按实际对象区分质量、粒子数、热量及元素当量；换算须有依据，重叠总量不可相加。 对上述具体身份及相容输入口径，仅在数量的归属和归一化状态与下式前提匹配时使用该规则：逐真实直接物质排放 / T 保留原始凭据、实际采用的系数和结果单位。数值来源模式：calculated_value；适用范围：site_specific；归一化基准：每声明的参考流；基准类型：reference_flow；证据类型：calculated_from_collection；采集协议：cp_release；来源：unsd-cpc3-65131; ghg-product-2011。须有原始记录、精确原生支持及逐具体行核验；这些规则不提供缺失身份或数值。 完成判据：check_occurrence_completion。 |
| cp_expand_pipeline_station_assets | support_lifecycle | 必须展开身份 pipeline_station_assets (inputs/product)：真实管线站场支持资产生命事件 | collected_record | requirement_id=pipeline_station_assets; process_id=support_lifecycle; required_direction=inputs; required_flow_type=product; original_collection_protocol=cp_assets; applicability_evidence; occurrence_event_id; concrete_row_id; physical_identity; formulation_or_species; phase; carbon_origin; particle_fraction; source_compartment; receiving_compartment; supply_or_handover_gate; provider_covered_cells; asset_component_event_and_lifecycle_phase; native_property; native_unit; measured_native_quantity; source_record_id; allocation_all_users; normalization_denominator; per_identity_amount_calculation; verification_evidence; unresolved_reason; occurrence_to_row_reconciliation; asset_or_reusable_id; model_configuration; included_initial_components; lifecycle_phase; manufacture_native_quantity; target_duty; all_user_same_cohort_lifetime_duty; replacement_event; provider_coverage_cells; applicability_decision_record; covered_concrete_rows; excluded_occurrence_reason; completion_evidence; observed_quantity_state; conversion_or_allocation_evidence; supply_or_service_gate; accepted_service_demand; provider_functional_unit; provider_intensity_basis; covered_lifecycle_stages | 逐真实管线管网站场总成及未含施工维护更换退役事件，原生制造不等于全生命周期运行，必须有全用户生命分母及覆盖范围。 本范围是必须落实的身份识别要求，不是交换流。使用原节点采集协议及其记录，先按真实身份、端口及独立功能拆分，再将保留的数量、基准及证据规则分别用于各兼容具体行。不得将异质身份合并数量或从总括名称推断原生属性单位。未发生须有证据，适用性或身份未知则阻止完成。 对本项规定的实体资产或周转品，核实供应交接点、初始部件以及实际替换、维护、清洗、失败和退役记录。租赁或综合供应合同须核实覆盖范围；本项包含已交付服务时按实际验收的原生需求计量，仅另行追溯未覆盖的资产阶段。直接建模资产按同队列目标作业量与全用户有据正寿命作业量之比分配，禁止将整个设施归给一个服务。 每项适用性判断须留证。经证实不发生仅关闭所述范围和时段，缺记录仍未解决。发生的要求须将全部事件映射到具体row ID及相容原生数量，或精确映射至已覆盖行和供应方责任，并逐项说明排除理由。证据须覆盖身份、支持单位、计算、原始记录及全部去向；既有与新增分支对同一事件互斥覆盖，协议本身不作为交换。完成须无未分配事件、无重复覆盖、无相关数量或身份未决项。按有证据的实际分支采集原始字段。不适用的操作数须关联分支判定，适用但缺乏实测或依据的数量登记待决。 | 实体资产或周转品按已核实的制造或供应单位；同一队列的相容作业量；范围内的交付服务用其原生功能单位 | 每次真实事件及每项有证据的未发生判断 | 完整声明队列及归属资产寿命关联事件 | 仅本过程真实责任场所及供应方 | 先对账原生事件总量，仅汇总身份、状态、单位、交接点及期间均相容的量。按相应计算规则逐行核算一次：只分配仍共享的负担，目标总量仅除以同口径的正合格产出；等效每参考流数值原值沿用，零产出期间不作除法并保留处置记录。 | 实体资产按有记录的供应交接量乘目标作业量与同队列全用户正寿命作业量之比，保留配置、投运、更换及退役或剩余寿命记录。范围内如有已交付服务，按已核实原生强度乘相容交付需求，留存覆盖凭据，未覆盖阶段单列。 对该交接点相容的资产量或已独立核实的服务结果，仅在数量的归属和归一化状态与下式前提匹配时使用该规则：真实全用户生命分配资产事件数量 / T 保留原始凭据、实际采用的系数和结果单位。数值来源模式：calculated_value；适用范围：site_specific；归一化基准：每声明的参考流；基准类型：reference_flow；证据类型：calculated_from_collection；采集协议：cp_assets；来源：unsd-cpc3-65131; ghg-product-2011。须有原始记录、精确原生支持及逐具体行核验；这些规则不提供缺失身份或数值。 完成判据：check_occurrence_completion。 |
| cp_expand_support_provider | support_lifecycle | 必须展开身份 support_provider (inputs/product)：真实原生支持维护处理服务 | collected_record | requirement_id=support_provider; process_id=support_lifecycle; required_direction=inputs; required_flow_type=product; original_collection_protocol=cp_assets; applicability_evidence; occurrence_event_id; concrete_row_id; physical_identity; formulation_or_species; phase; carbon_origin; particle_fraction; source_compartment; receiving_compartment; supply_or_handover_gate; provider_covered_cells; asset_component_event_and_lifecycle_phase; native_property; native_unit; measured_native_quantity; source_record_id; allocation_all_users; normalization_denominator; per_identity_amount_calculation; verification_evidence; unresolved_reason; occurrence_to_row_reconciliation; provider_contract; independent_function; provider_gates; native_functional_unit; delivered_quantity; covered_process_phase_cells; uncovered_foreground_rows; applicability_decision_record; covered_concrete_rows; excluded_occurrence_reason; completion_evidence; observed_quantity_state; conversion_or_allocation_evidence; provider_functional_unit; accepted_service_demand; provider_intensity_basis; covered_service_stages | 条件真实支持检查修理清洗废物处理通道场址供应服务，具原生数量范围精确替代项，不重复自营投入或强制参考换算。 本范围是必须落实的身份识别要求，不是交换流。使用原节点采集协议及其记录，先按真实身份、端口及独立功能拆分，再将保留的数量、基准及证据规则分别用于各兼容具体行。不得将异质身份合并数量或从总括名称推断原生属性单位。未发生须有证据，适用性或身份未知则阻止完成。 以下采集条件仅限本项 inputs/product 的身份与交接点（真实原生支持维护处理服务）。仅在本PCR范围内实际委托独立功能时启用。记录合同、交付服务功能、关口、原生功能单位、实际交付量及具体覆盖的过程和寿命阶段；逐项与自营活动比对，完整供应方或未覆盖前景活动仅计一次。不用金额、材料质量或假设件数替代真实功能；同一最终服务不通过外部最终产品供应方递归重复计入。 每项适用性判断须留证。经证实不发生仅关闭所述范围和时段，缺记录仍未解决。发生的要求须将全部事件映射到具体row ID及相容原生数量，或精确映射至已覆盖行和供应方责任，并逐项说明排除理由。证据须覆盖身份、支持单位、计算、原始记录及全部去向；既有与新增分支对同一事件互斥覆盖，协议本身不作为交换。完成须无未分配事件、无重复覆盖、无相关数量或身份未决项。按有证据的实际分支采集原始字段。不适用的操作数须关联分支判定，适用但缺乏实测或依据的数量登记待决。 | 已核实的合同交付功能单位；仅独立可计数且已验收的结果使用 Item(s) | 每次真实事件及每项有证据的未发生判断 | 完整声明队列及归属资产寿命关联事件 | 仅本过程真实责任场所及供应方 | 先对账原生事件总量，仅汇总身份、状态、单位、交接点及期间均相容的量。按相应计算规则逐行核算一次：只分配仍共享的负担，目标总量仅除以同口径的正合格产出；等效每参考流数值原值沿用，零产出期间不作除法并保留处置记录。 | 按指定交接点实际验收量计量。仅在单位强度换算为总负担时，以供应方强度乘同一原生单位的需求量。保留合同范围、验收、原生单位及覆盖阶段记录。仅按时间交付的功能以时长计量。 对按合同口径已验收的服务，仅在数量的归属和归一化状态与下式前提匹配时使用该规则：真实未含原生供应方数量 / T 保留原始凭据、实际采用的系数和结果单位。数值来源模式：calculated_value；适用范围：site_specific；归一化基准：每声明的参考流；基准类型：reference_flow；证据类型：calculated_from_collection；采集协议：cp_assets；来源：unsd-cpc3-65131; ghg-product-2011。须有原始记录、精确原生支持及逐具体行核验；这些规则不提供缺失身份或数值。 完成判据：check_occurrence_completion。 |

### 计算规则

| rule_id | 适用于 | formula_or_rule | inputs | output | source_ids |
| --- | --- | --- | --- | --- | --- |
| delivered_work | qualified_pipeline_work | T = sum_p (逐p验收交付质量t × 有据路径距离km)，在声明期间对逐真实验收交付路径份额仅加总一次。计量拓扑经验证流量路径闭合全部份额及管存结转，不给接收库存损失运力输出。最终参考输出为1 tkm；有限强度须T > 0。 | delivered accepted mass; supported physical path distance | T; qualified_pipeline_work | unsd-cpc3-65131; ghg-product-2011 |
| exclusive_custody_ledger | 管道保管管存 | 统一守恒质量组分基准及真实端口时间：期初库存 + 外部接收 = 期末库存 + 合格交付 + 拒收或返流外运 + 自用燃料提取 + 火炬进料提取 + 主动放散质量 + 逸散环境损失 + 其他回收外运 + 其他独立处理外运 + 已记录未解残差。各项为互斥边界去向项。自用火炬提取先终止保管账再入独立燃烧火炬账，其尾气不再作保管损失。内部回收回压循环既不是新接收也不另加外运，回收物只计真实期末库存、真实后续使用或一个真实外运去向。泄液质量仅一次划分真实回收去向及未回收环境挥发。记录真实水杂质分离和质量基准换算，不把未知残差强制当甲烷或零。 | 期初和期末; 实际接收; 互斥的实际去向; 不确定性 | 托管交接对账结果及残差 | ghg-product-2011; ipcc-2019-fugitives |
| fuel_carbon_species | 真实燃料放散直接排放 | 逐事件真实状态组成将气体体积换为质量物种，区分保管损失自用燃料供应燃料燃烧未燃逸出火炬进料产物及原有CO2。在真实氧化CO2排放CH4其他含碳物种回收外运碳留存物间闭合碳。火炬进料质量既不全是甲烷排放也非全销毁，须真实性能去向，仅按真实物质介质加总互斥实测来源特定排放，不设统一因子。 | 实际状态和组成; 燃料及碳; 实测释放量与运行表现 | 按互斥口径计量的各物种排放 | epa-engine-exhaust; epa-pipeline-blowdowns; ipcc-2019-fugitives |
| life_and_normalization | 全部真实清单行 | 真实事件j按有据全用户因果份额分配q_j × s_j，资产份额采用同组该生命阶段归属使用量 / 有据正全用户总使用量。期间归属数量包含因果失败待机换品维护及未含生命供应方范围。q_row,ref = q_row,attributable / T，仅一次。采用精确原生供应方功能单位范围和tkm原生t*km拼写等价，不强制数量或容量换算。 | 实际事件的原生数量; 全用户因果份额; T | 每参考流的原生计量交换量 | ghg-product-2011 |

### 数据质量要求

| requirement_id | 适用于 | Requirement | evidence |
| --- | --- | --- | --- |
| state_path_quality | 参考保管 | 须真实端口时间一致校准计量验收及有据路径管网分配，各状态体积密度组成换算有基准来源不确定性。验证跨期管存及网络质量闭合，路径数量无据为不完整，不假定全国平均。 | 计量校准组成状态日志拓扑模型验证保管账 |
| source_fate_quality | 燃料直接废物 | 须来源特定真实物料物种相态介质及实测或有据工程数量，泄漏放散火炬发动机逸出收集废物与各供应方范围互斥。公共设备说明仅是真实路线问题，不是默认因子或通用运行规格。 | 测量估计方法性能接收日志原生供应方不确定性 |
| full_life_scope_quality | 全部节点 | 须完整真实期间运行及资产生命全用户分母、已含未含范围、情景地域年份适配及透明缺证。据独立核实前科学审查及每最终具体身份数量仍待定，检查器通过本身不证明身份或发布准备。 | 资产事件登记全用户使用量覆盖矩阵未解证据 |

## 9. 验证规则

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| validate_scope_reference | 全部节点 | 验证官方石油天然气管输完整范围精确排除、真实运输责任端口交付质量×有据路径功能。须五功能字段、真实tkm原生t*km等价、真实相态组成压力温度路径证据，不用商品管材制造输入输量管存代理输出。 | unsd-cpc3-65131; ghg-product-2011 |
| validate_ledger_fates | pipeline_movement; station_operations | 验证共同质量组分时间端口基准及互斥期初期末接收交付拒收返流自用火炬提取、真实放散泄漏回收处理外运项。内部回收不是额外接收输出，燃料火炬尾气不重复作保管损失。须真实分开回收留存环境泄液份额、碳物种闭合、明确不确定性残差，不假定残差等于甲烷。 | ghg-product-2011; ipcc-2019-fugitives |
| validate_actual_energy_life | 全部节点 | 验证真实泵压机控制处理及连续批次换品待机失败责任、条件分支逐具体交换协议。自用燃料上游一次纳入并区别被输商品生产，供应方精确范围一次替代。须完整原生资产各生命阶段及有据全用户使用量，不把制造等于生命期或强制单位功能换算。 | ghg-product-2011 |
| validate_quantities_identity | 全部节点 | 有限强度须正T，全用户因果份额闭合且不重复归一化，保留零交付负荷。各最终具体流身份属性单位端口状态及基本流介质须有证据核实，未解真实输出行登记、条件需求扩为真实流，缺失为不完整而非零。中英结构化投影包含全部规范规则协议计算。 | ghg-product-2011 |
| atomic_pipeline_movement | pipeline_movement | 拒绝将备选物料、独立供应资产服务、不同废物流、污染物种、碳源、相态、粒径或环境子介质合并成一个交换身份。本节点每项适用cp_expand_要求必须有发生或未发生记录及完整具体行清单，各行具有自身身份、端口、已核验UUID、原生属性单位、数量、原始记录、计算和唯一责任。供应方已含完整总成或真实收集混合物流仍按一个真实供应或收集身份，不虚构组分交换。不得将要求名称标识、NOx或VOC或PM总量、未明确的物理释放或异质清单绑定一个UUID。核对全部子行、原始事件、供应方已含单元及跨节点交接，不缺失当零、不重复计入。身份、适用性、数量或去向未知，均阻止完整前景包及最终TIDAS交换产出。PCR检查器不验证这些前景事实，须保留逐行证据供审查。 | ghg-product-2011 |
| atomic_station_operations | station_operations | 拒绝将备选物料、独立供应资产服务、不同废物流、污染物种、碳源、相态、粒径或环境子介质合并成一个交换身份。本节点每项适用cp_expand_要求必须有发生或未发生记录及完整具体行清单，各行具有自身身份、端口、已核验UUID、原生属性单位、数量、原始记录、计算和唯一责任。供应方已含完整总成或真实收集混合物流仍按一个真实供应或收集身份，不虚构组分交换。不得将要求名称标识、NOx或VOC或PM总量、未明确的物理释放或异质清单绑定一个UUID。核对全部子行、原始事件、供应方已含单元及跨节点交接，不缺失当零、不重复计入。身份、适用性、数量或去向未知，均阻止完整前景包及最终TIDAS交换产出。PCR检查器不验证这些前景事实，须保留逐行证据供审查。 | ghg-product-2011 |
| atomic_support_lifecycle | support_lifecycle | 拒绝将备选物料、独立供应资产服务、不同废物流、污染物种、碳源、相态、粒径或环境子介质合并成一个交换身份。本节点每项适用cp_expand_要求必须有发生或未发生记录及完整具体行清单，各行具有自身身份、端口、已核验UUID、原生属性单位、数量、原始记录、计算和唯一责任。供应方已含完整总成或真实收集混合物流仍按一个真实供应或收集身份，不虚构组分交换。不得将要求名称标识、NOx或VOC或PM总量、未明确的物理释放或异质清单绑定一个UUID。核对全部子行、原始事件、供应方已含单元及跨节点交接，不缺失当零、不重复计入。身份、适用性、数量或去向未知，均阻止完整前景包及最终TIDAS交换产出。PCR检查器不验证这些前景事实，须保留逐行证据供审查。 | ghg-product-2011 |
| check_occurrence_completion | 全部实际清单行和身份识别协议 | 保留适用性证据，将每个实际事件对应到具体清单行或已核实的供应方覆盖范围。判定未发生须有证据，未知项保留待决。按同一身份、状态、单位、期间和交接点核对期初、接收、期末及互斥去向。耗材领用账区分未用退回、内部领拨和合格、失败及返工作业的实际耗用。托管账或物料平衡采用期初库存＋外部接收＋配对内部接收＝期末库存＋配对内部发出＋对外交付且获接收的数量＋未用外退＋外送的已用物资或回收物＋外送废物＋直接排放＋本边界内消耗或转化量。身份在边界内生成时，将有证据的生成量或出生数计入该身份账的来源并关联原事件。在上层守恒物料或元素平衡中抵消内部转化和移交。每个事件只记一次，留存回收物计入期末，移交与耗用分别登记。按相容口径执行专用托管、相态、转化或元素规则；已作为转化量计入的物料，其后续产物不得再计入同一去向合计。独立计量各项，对未解释的差额追查并保留待决。实物总量与负担分配分别核算。共享原始负担采用 Q_raw × s / R，其中 s 为有证据的目标驱动量除以同池同期间全部适用用户的正驱动量总和。已归属的目标总量采用 Q_target / R，已与同一参考流等效的单位结果 q_ref 原值沿用。供应方单位强度先乘以按其原生单位实测的需求量。仅在另一个仍有共享负担的独立阶段另作分配。R 为同一队列、交接点和参考单位下的正值合格产出量。保留失败与部分完成作业的负担，禁止以此放大 R；零产出时保留负担及有证据的结转或最终处置。自有资产采用同队列全用户寿命作业量，并排除初始部件重复计算。外购服务仅替代有记录的覆盖阶段。适用的身份、数量、支持单位、去向或分配分母仍未决时，最终数据集仍不完整。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | secondary_dataset; background_dataset |
| downstream_use | 商品供应链过程生命周期模型运输投入，具真实端口路径原生功能 |
| allowed_use | 兼容真实产品状态端口路径压力量质及全用户供应方生命范围并保留差异不确定性 |
| excluded_use | 管网分销或液化再气化、商品生产销售、无据路径压力相态供应方平均或把损失设零 |
| required_metadata | 真实交付质量路径T状态组成端口、管存互斥账自用直接去向、来源原生身份、生命全用户供应方范围及未知 |
| required_quality_disclosure | 测量路径工程不确定性缺数量身份条件分支候选科学审查及最终绑定限制 |
| update_trigger | 真实产品状态压力路线端口驱动处理维护资产生命供应方覆盖来源身份变化 |

## 11. 数据源

| source_id | type | reference | used_for |
| --- | --- | --- | --- |
| unsd-cpc3-65131 | official_guidance | https://unstats.un.org/unsd/classifications/Econ/Structure/Detail/EN/2100/65131 | 官方石油产品天然气管输完整范围及分销液化再气化排除 |
| phmsa-pipeline-faq | official_guidance | https://www.phmsa.dot.gov/faqs/general-pipeline-faqs | 产品管道组成问题、真实液泵气压机接口，不采用历史统计或通用规格 |
| epa-pipeline-blowdowns | official_guidance | https://www.epa.gov/natural-gas-star-program/pipeline-blowdowns | 条件维护隔离泄压吹扫来源问题和状态相关放散证据，不用数值默认 |
| epa-engine-exhaust | official_guidance | https://www.epa.gov/natural-gas-star-program/engine-exhaust | 条件真实燃气驱动自用及发动机逸出来源划分问题，不用尺寸性能默认 |
| ipcc-2019-fugitives | official_guidance | https://www.ipcc-nggip.iges.or.jp/public/2019rf/pdf/2_Volume2/19R_V2_4_Ch04_Fugitive_Emissions.pdf | 4.2节附录4A.3泄漏主动放散火炬真实物种区分，不引入排放因子或生产方程 |
| ghg-product-2011 | standard | https://ghgprotocol.org/sites/default/files/ghgp/standards/Product-Life-Cycle-Accounting-Reporting-Standard_041613.pdf | 边界分配证据质量产品生命周期原则；本PCR自定类别特定保管账完整生命交付周转方法 |

