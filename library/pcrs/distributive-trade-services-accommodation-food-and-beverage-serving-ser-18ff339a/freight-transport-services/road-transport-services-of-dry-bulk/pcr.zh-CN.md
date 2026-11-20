---
pcr_id: pcr.distributive-trade-services-accommodation-food-and-beverage-serving-ser-18ff339a.freight-transport-services.road-transport-services-of-dry-bulk
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 干散货道路货运托运区段服务

## 1. 范围与适用性

本PCR覆盖真实干燥固体散货道路运输，包括谷物、面粉、水泥、砂、煤及其他实际干散货，涵盖适用的敞开或覆盖、重力倾卸、筒仓及气力装卸安排。货物设备依据记录声明；用于干粉的压力容器车体不能将货物变成散装液体气体。一个合格完成托运区段必须同时具有实际货物数量、水分基准、起讫点、距离、交付质量和经过时间，等数量本身不可比。

排除液体气体罐运、单独分类的联运集装箱运输、包装普通货物、其他运输模式、独立仓储及货物制造加工。相邻分类重叠按真实设备功能解决且不重复输出；干散货不能仅因置于压力容器中而被排除。按真实归属端口纳入装卸、司机车辆辅助、空驶失败退回责任、清洗、扬尘泄漏控制及完整应分配资产。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.distributive-trade-services-accommodation-food-and-beverage-serving-ser-18ff339a.freight-transport-services.road-transport-services-of-dry-bulk |
| classification_refs | CPC 3.0 65117; exact |
| covered_products | 完整真实干固体散货道路货运，包括谷物面粉水泥砂煤及其他干散货 |
| excluded_products | 液体气体罐运、单独分类联运集装箱或包装货物、其他模式、独立仓储及货物制造 |
| representative_product | 完成的干散货道路货运托运区段 |
| production_route | 真实干散货道路行驶装卸控制及完整应分配支持生命周期 |
| market_state | 声明交付端口实际验收托运区段 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| 什么（What） | 完成的干散货道路货运托运区段 |
| 多少（How much） | 1个真实验收干散货道路托运区段，声明货物数量水分基准 |
| 质量（How well） | 真实物料状态数量起讫距离质量污染及装卸合同端口 |
| 时长或周期（How long or cycle） | 真实接收至交付期间加应分配完整空驶失败支持及生命周期期间 |
| reference_flow_link | completed_dry_bulk_road_leg |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 完成的干散货道路货运托运区段 |
| 参考流属性 | 物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` |
| 参考单位组 | 数量 `5beb6eed-33a9-47b8-9ede-1dfe8f679159` |
| 参考单位 | Item(s) |
| 必需限定信息 | cargo_material_state; actual_mass_volume; moisture_dry_wet_basis; acceptance_delivery_gates; actual_OD_distance_time; quality_contamination; vehicle_body_loading_discharge_method; pneumatic_air_pressure_temperature_humidity; actual_propulsion_PTO; dust_species_size_medium; capture_spill_recovery_receiver; period_completed_N; empty_failed_return_duty; allocation_all_users; native_provider_coverage; same_asset_all_user_life; uncertainty |

## 4. 计量与单位规则

| rule_id | 适用于 | required_property | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| reference_count | reference product | 物品数量 | Item(s) | 完成托运数量不同于货物质量吨公里车辆公里筒仓容量或计划发运。须有正完成N及真实物料数量水分起讫距离质量才可判断可比性。 |
| native_basis | 全部清单行 | 真实原生兼容属性 | 真实原生单位 | 保留真实干湿物料及粉尘物质粒径化合物基准，水分变化不是货物干物质损失。体积质量须有真实密度状态；压缩空气体积须声明压力温度湿度及兼容原生参考。核实kWh至MJ采用3.6 MJ/kWh。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 真实接货水分状态、道路车体装卸拓扑及供应供应方资产端口 |
| starting_condition_role | 前景进入事实不消除早期资产供应 |
| product_classification_scope | 完整干固体散货道路货运65117，真实功能解决相邻重叠 |
| recursive_input_rule | 真实原生外包阶段替代匹配自营范围一次 |
| upstream_dataset_requirement | 真实物料技术原生单位状态端口地域期间及生命周期范围 |
| disclosure | 货物保管完整责任粉尘控制去向全用户资产供应方分配及未知 |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| full_bulk_scope | 全部节点 | 覆盖全部真实干固体散货及车辆装卸形式，不限谷物水泥柴油或自卸车。父活动为干散货道路货运。敞开或覆盖车体、气力筒仓设备、倾卸、底卸及真实替代动力会改变能源资产采集及排放接口；仅在实际区段事件记录支持时并存。 | unsd-cpc3-65117 |
| cargo_custody | road_movement; bulk_handling | 货物是承运对象，不是消耗燃料或新产品输出。按货批和水分基准分别记录装载交付货物、结转退回滞留、散落、采样捕集粉尘及真实接收方。原始货物生产不属货运服务；实际损失补货后果应披露给下游货物LCA，避免制造重复。装载设备至车辆再至筒仓的内部转移共用ID，不额外产生完成货运输出。 | ghg-product-2011 |
| whole_duty | 全部节点 | 纳入归属本服务的真实装卸、气力压缩或液压、输送振动过滤、停车怠速等候、司机支持、载货行驶、空驶调位返程、失败卡料拒收救援及清洗责任。主机取力或共用电力具有唯一燃料能源归属：先划分真实计量原生数量再归属行驶与装卸，不重复发动机投入及尾气。 | ghg-product-2011 |
| pneumatic_receiver | bulk_handling | 实际气力输送应声明压缩空气来源、压力温度湿度及计量运行量、取力电力供应方边界、软管连接和车辆接收筒仓责任。分别捕捉车辆卸压、接收端排气过滤、堵塞滤材清理事件及粉尘去向。外购压缩空气仅替代匹配自营压缩供应范围。接收筒仓过滤服务不能自动覆盖车辆侧排气或上游车辆压缩。 | uk-cement-pneumatic-guidance |
| dust_material_fates | bulk_handling; road_movement | 选择粉尘身份方法前应采集实际货物材料物质及粒径基准、水分和场址风况装卸状态。区分直接空气、土壤沉积、径流溶解水体、滤材捕集及退回可用货物。不得将全部货物粉尘称作PM2.5二氧化硅或惰性矿物；谷物面粉水泥砂煤须保留真实成分和接收方。通用骨料装卸系数不能证明统一道路散货或气力排放，方法须有实际适用域及有据控制表现。 | epa-ap42-aggregate-handling |
| whole_assets_provider | support_lifecycle | 本PCR生命周期选择包含实际牵引车卡车挂车车体覆盖筒仓鼓风压缩软管滤材、电池轮胎装卸设备、道路场站车场的制造安装维修更换及退役。交付制造不是全生命周期服务。完整总成及已含初始部件互斥；真实供应方原生结果仅替代明确已含范围。真实寿命和全用户同组运行量只是分配分母，不能证明已覆盖全部生命周期阶段。 | ghg-product-2011 |
| actual_row_expansion | 全部节点 | 每项实际尚未表示的燃料电力空气水控制药剂物料、资产供应方结果、废物或排放物种须独立真实row_id、一个节点、方向类型、单一身份状态、原生数量属性单位、同节点协议及来源端口接收介质不确定性。宽泛条件需求流卡必须扩展为每个实际交换，不能绑定统一伞状UUID。发生与数量未知仍为不完整，不是零。区分燃料碳来源、污染物化合物元素、粒径及物理去向。 | ghg-product-2011 |

## 6. 过程清单结构

每张清单流卡仅代表一个可独立识别的产品、物料配方、废物流、物质或供应服务，具有兼容的端口、属性和单位。完整供应总成或实际收集的混合物流可有一个身份，其已含组分不得另列重复交换。第8节cp_expand_协议是必须落实的身份识别要求，不得当作选定流或交换数量。逐项记录真实适用性，以独立行标识列出全部具体交换；完整保留适用范围，未发生须有证据。尚未展开或未知的要求属于不完整，不得当作零。改为采集协议不等于解决缺失身份，也不免除生命周期、分配、计量或边界义务。

### 过程图

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| road_movement | 道路行驶与最终货运服务交接 | required | 每项合格服务 | foreground | completed_dry_bulk_road_leg |
| bulk_handling | 散货装卸及扬尘控制 | required | 合同内真实装卸及相关控制 | foreground | completed_dry_bulk_road_leg |
| support_lifecycle | 车辆车体道路及清洗生命周期 | required | 实际应分配支持及资产生命周期 | foreground | completed_dry_bulk_road_leg |

全部节点关联唯一最终分母；bulk_handling与support_lifecycle不产生额外最终服务完成。内部货物转移不是新增货物采购或成品输出。

### 过程：道路行驶与最终货运服务交接 (`road_movement`)

#### 输入

##### 产品流

###### 柴油 (`traction_diesel`)

实际适用柴油动力供应按条件纳入；保留配方碳来源、原生库存转移泄漏及真实燃烧。交付混合燃料与已含组分互斥。主机卸货取力必须有明确互斥燃料份额。

- 选定流：柴油 `9d258d75-6792-4f1c-9856-81602ed8f816`
- 流属性/单位：质量 / kg
- 数量规则：attributed_traction_diesel_kg / N
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每声明的参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_movement`
- 来源：`unsd-cpc3-65117`; `ghg-product-2011`

###### 交流电 (`traction_ac`)

仅按实际条件记录充电器输入外购交流电，保留真实损失充电电池原生范围。外购直流电或包含上游的动力供应为独立真实身份，替代对应交流电范围，不重复购买。

- 选定流：交流电 `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- 流属性/单位：净热值 / MJ
- 数量规则：attributed_external_traction_AC_MJ / N
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每声明的参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_movement`
- 来源：`unsd-cpc3-65117`; `ghg-product-2011`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 完成的干散货道路货运托运区段 (`completed_dry_bulk_road_leg`)

真实声明干散货道路托运验收完成，具备数量水分基准路线距离时间及交接质量。输出为货运服务，不是货物本身。

- 选定流：完成的干散货道路货运托运区段
- 流属性/单位：物品数量 / Item(s)
- 数量规则：1 Item(s)
- 数值来源模式：`fixed_value`
- 适用范围：`site_specific`
- 归一化基准：每声明的参考流
- 基准类型：`reference_flow`
- 证据类型：`method_formula`
- 采集协议：`cp_movement`
- 来源：`unsd-cpc3-65117`; `ghg-product-2011`

##### 废物流

##### 基本流

###### 二氧化碳（化石源） (`traction_fossil_co2`)

自营燃烧真实化石源二氧化碳向空气排放，明确真实燃烧碳来源氧化残留及化合物基准，不设默认系数。取力装卸份额互斥。所载煤的碳不能仅因承运就当作发动机燃料碳。

- 选定流：二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 流属性/单位：质量 / kg
- 数量规则：attributed_traction_fossil_CO2_kg / N
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每声明的参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_movement`
- 来源：`unsd-cpc3-65117`; `ghg-product-2011`

### 过程：散货装卸及扬尘控制 (`bulk_handling`)

#### 输入

##### 产品流

###### 柴油 (`handling_diesel`)

真实独立适用装卸压缩机柴油供应或同一主机池的有据份额，不另加假定发动机燃料。外购供应方结果已含装卸燃料不重复。

- 选定流：柴油 `9d258d75-6792-4f1c-9856-81602ed8f816`
- 流属性/单位：质量 / kg
- 数量规则：attributed_handling_diesel_kg / N
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每声明的参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_handling`
- 来源：`unsd-cpc3-65117`; `ghg-product-2011`

###### 交流电 (`handling_ac`)

在明确端口记录真实自营装卸过滤压缩交流电供应，区分外购空气服务范围。同一电机电力不能再次作为压缩空气上游购买重复。

- 选定流：交流电 `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- 流属性/单位：净热值 / MJ
- 数量规则：attributed_external_handling_AC_MJ / N
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每声明的参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_handling`
- 来源：`unsd-cpc3-65117`; `ghg-product-2011`

###### 实际外购散货卸载压缩空气 (`purchased_compressed_air`)

仅按实际条件记录在明确交付压力温度湿度及原生体积或其他核实属性下外购适用空气。仅替代已含的对应自营压缩范围，自产压缩不构成另一外部供应。

- 选定流：实际外购散货卸载压缩空气
- 流属性/单位：实际原生属性 / 实际原生单位
- 数量规则：attributed_native_external_compressed_air / N
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每声明的参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_handling`
- 来源：`unsd-cpc3-65117`; `ghg-product-2011`

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

##### 基本流

###### 二氧化碳（化石源） (`handling_fossil_co2`)

真实自营装卸压缩机尾气化石源二氧化碳向空气排放；共享取力燃料尾气按相同事件池划分一次。不重复供应方结果已含燃烧。

- 选定流：二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 流属性/单位：质量 / kg
- 数量规则：attributed_handling_fossil_CO2_kg / N
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每声明的参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_handling`
- 来源：`unsd-cpc3-65117`; `ghg-product-2011`

### 过程：车辆车体道路及清洗生命周期 (`support_lifecycle`)

#### 输入

##### 产品流

###### 完整公路干散货车辆制造投入 (`dry_bulk_vehicle_assembly_manufacture`)

制造交付关口的一件真实完整物理总成；每个实例行只对应一个有记录的型号配置，不同配置分别实例化并计量。仅在该总成为所述节点服务且未被完整供应方覆盖时启用。初始部件包含清单是身份的一部分，已含初始部件不得再次投入；实际未覆盖的维护、更换及寿终另计。 按真实记录选择实际卡车或牵引挂车车体设备、兼容规格初始总成及制造端口，包括自卸筒仓气力覆盖配置。不以制造替代全生命周期，不重复初始部件。

- 选定流：完整公路干散货车辆制造投入
- 流属性/单位：Count / Item(s)
- 数量规则：对每个同型号总成队列：制造件数 * 目标应承担工作量 / 全用户全寿命工作量 / N。两个工作量采用相容同一基准及队列，分母须有证据且为正；目标份额与最终参考归一各一次，已含初始部件不可再相加。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_assets`
- 来源：unsd-cpc3-65117; ghg-product-2011


###### 自来水 (`cleaning_tap_water`)

真实适用市政生产供应端口自来水用于清洗扬尘控制，并明确下游配送范围。其他水源产品密度状态须独立真实身份。

- 选定流：自来水 `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- 流属性/单位：质量 / kg
- 数量规则：attributed_cleaning_tap_water_kg / N
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每声明的参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_support`
- 来源：`unsd-cpc3-65117`; `ghg-product-2011`

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

###### 废润滑油 (`used_lubricating_oil`)

真实产生点收集废润滑油，记录成分接收方；废物数量本身不是处理服务或直接土壤排放。真实库存服务范围互斥。

- 选定流：废润滑油 `55d93375-7f04-4166-b2a2-88ce929051a5`
- 流属性/单位：质量 / kg
- 数量规则：attributed_used_lubricating_oil_kg / N
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每声明的参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_support`
- 来源：`unsd-cpc3-65117`; `ghg-product-2011`

##### 基本流

## 7. 分配与共产品处理

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| physical_shares | 全部节点 | 优先按真实货批区段设备计量避免分配。共享行驶负荷依据全部托运用户的有据货物载荷距离容量约束物理关系；装卸压缩扬尘控制依据自身真实质量事件能源因果关系。不设统一吨距离或等托运份额。有据物理方法优先，经济替代须有无法建立物理关系证据及敏感性。同一事件份额闭合为一。 | ghg-product-2011 |
| empty_failed_return | 全部节点 | 先保留因果空驶调位失败卡料拒收救援及退回责任，再按合格正完成数N归一化。仅真实验收最终托运完成可计数，内部交接重投不能重复输出。N=0不能形成有限强度。退回可用货物、废物及捕集粉尘保持真实处置，不一概当作损失。 | ghg-product-2011 |
| asset_periods | 全部节点 | 按同组消耗运行量除以有据且为正的全用户总使用量归属原生制造及各真实生命周期事件，再仅除以N一次。跨期和用户保留建设安装维修更换退役日期、未完成运行及库存；场站道路供应方范围互斥。不设统一车辆轮胎滤材道路寿命或回程比例。 | ghg-product-2011 |
| provider_and_recovery | 全部节点 | 真实外包货运装卸供应方按明确原生阶段范围仅替代一次，不递归消耗自身完成服务，不重复供应排放资产。真实回收货物粉尘再用通过实际转移接收方关联，不假定肥料材料替代抵扣，不将回收物重复计作直接排放废物。 | ghg-product-2011 |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_movement | road_movement | 货运服务真实动力及尾气 | 真实一手计量运单供应方记录 | 托运；货物身份；装载交付质量；每次称重湿质量含水质量分数；实际加水雨水蒸发滞留外送水；水分基准；起讫；距离；时间；载货空驶失败退回责任；柴油期初收入期末转移泄漏燃烧；交流电表；取力份额；质量；完成N；全部用户；分配；期间；原生单位；不确定性; converted_wet_basis_fraction; moisture_conversion_equation | 将地磅签收关联车联网计量及真实主机取力池，分别依据各次称重水分闭合货物干固体保管、独立实际水台账及燃料供应燃烧，再因果分配并按N归一化一次。 逐次明确水分观测为水质量/湿总质量的湿基，还是水质量/干固体质量的干基；保留原始观测、水分基准、换算后湿基分数及换算方程，按exclusive_cargo_ledger转换后再应用干固体公式。 按参考计量口径汇总唯一且已验收的合格产出作为分母，单列不合格事件及其资源责任。参考量保持规定值，仅归属的清单总量除以正分母。本协议下其他清单行保留各自实物单位。 | Item(s)；kg；MJ；km；h | 逐事件及期间闭合 | 真实服务报告期间及资产生命周期阶段 | 真实车辆装载场址接收筒仓车场及供应方 | 每声明的参考流 | 校准；签署记录；原生来源；因果分配；不确定性保存各实测操作数的来源及原生口径，注明实际采用的换算或归属依据，以及所供结果是否已按该参考流计量。 |
| cp_handling | bulk_handling | 真实散货转移压力空气扬尘控制去向 | 真实一手计量运单供应方记录 | 货批物料成分；每次观测湿质量含水质量分数；实际加水雨水蒸发滞留外送水；水分；装卸方法；车辆接收筒仓；事件时间；前后质量；取力燃料交流电；空气供应方原生数量压力温度湿度；鼓风排气滤材控制；实际特定粉尘粒径介质质量；收集退回废物接收方；分配；期间；N；不确定性; converted_wet_basis_fraction; moisture_conversion_equation | 采用称重、真实装卸压力计量、车辆接收筒仓记录及适用物质粒径粉尘实测方法证据；依据真实控制状态和共用能源归属将捕集退回直接废物去向只匹配一次。 逐次明确水分观测为水质量/湿总质量的湿基，还是水质量/干固体质量的干基；保留原始观测、水分基准、换算后湿基分数及换算方程，按exclusive_cargo_ledger转换后再应用干固体公式。 原始观测和对账总量保留其记录口径。负担行只分配仍共享的总量，已归属总量仅除以同队列、同交接点的正合格产出；已与该参考流等效的结果原值沿用。零产出时保留负担并记录去向。各项独立实测交付、排放及移交按各自交接点记录，负担按其适用规则分配。 | kg；MJ；真实原生空气服务单位 | 逐事件及期间闭合 | 真实服务报告期间及资产生命周期阶段 | 真实车辆装载场址接收筒仓车场及供应方 | 每声明的参考流 | 校准；签署记录；原生来源；因果分配；不确定性保存各实测操作数的来源及原生口径，注明实际采用的换算或归属依据，以及所供结果是否已按该参考流计量。 |
| cp_support | support_lifecycle | 清洗供应及收集废物 | 真实一手计量运单供应方记录 | 场址；事件；水源原生数量；化学品；实际货物残留；收集流成分水分原生数量；滞留蒸发直接水；接收方；供应方范围；分配；期间；N | 按来源接收方闭合真实供应保管及签署废物交接，拆分不兼容流并区分货物回收与废物。保留供应方原生范围，真实数量只分配一次。 原始观测和对账总量保留其记录口径。负担行只分配仍共享的总量，已归属总量仅除以同队列、同交接点的正合格产出；已与该参考流等效的结果原值沿用。零产出时保留负担并记录去向。各项独立实测交付、排放及移交按各自交接点记录，负担按其适用规则分配。 | kg；原生废物供应方单位 | 逐事件及期间闭合 | 真实服务报告期间及资产生命周期阶段 | 真实车辆装载场址接收筒仓车场及供应方 | 每声明的参考流 | 校准；签署记录；原生来源；因果分配；不确定性保存各实测操作数的来源及原生口径，注明实际采用的换算或归属依据，以及所供结果是否已按该参考流计量。 |
| cp_assets | support_lifecycle | 车辆鼓风滤材道路场站完整生命周期 | 真实一手计量运单供应方记录 | 资产组配置；交付原生数量；初始部件范围；制造安装维修更换退役日期；全用户总使用量；归属运行量；场址期间供应方；原生单位；N；不确定性 | 核实原生总成供应端口、各生命周期事件及同组全用户总使用量；事件数量乘以归属运行量除以正总使用量，再仅除以N一次，并保留互斥供应方替代。 原始观测和对账总量保留其记录口径。负担行只分配仍共享的总量，已归属总量仅除以同队列、同交接点的正合格产出；已与该参考流等效的结果原值沿用。零产出时保留负担并记录去向。 | Item(s)；kg；真实原生服务运行量 | 逐事件及期间闭合 | 真实服务报告期间及资产生命周期阶段 | 真实车辆装载场址接收筒仓车场及供应方 | 每声明的参考流 | 校准；签署记录；原生来源；因果分配；不确定性保存各实测操作数的来源及原生口径，注明实际采用的换算或归属依据，以及所供结果是否已按该参考流计量。 |
| cp_expand_captured_bulk_dust_waste | bulk_handling | 必须展开身份 captured_bulk_dust_waste (outputs/waste)：交接端口的收集货物特定滤尘废物 | collected_record | requirement_id=captured_bulk_dust_waste; process_id=bulk_handling; required_direction=outputs; required_flow_type=waste; original_collection_protocol=cp_handling; applicability_evidence; occurrence_event_id; concrete_row_id; physical_identity; formulation_or_species; phase; carbon_origin; particle_fraction; source_compartment; receiving_compartment; supply_or_handover_gate; provider_covered_cells; asset_component_event_and_lifecycle_phase; native_property; native_unit; measured_native_quantity; source_record_id; allocation_all_users; normalization_denominator; per_identity_amount_calculation; verification_evidence; unresolved_reason; occurrence_to_row_reconciliation; waste_origin_event; material_or_true_mixture; moisture_basis; container_tare; opening_waste_stock; generated_waste; received_waste; handover_quantity; closing_waste_stock; onsite_treatment; receiver_id; applicability_decision_record; covered_concrete_rows; excluded_occurrence_reason; completion_evidence; observed_quantity_state; conversion_or_allocation_evidence | 真实捕集并具有废物状态的物料，明确成分水分接收方。退回有用货物为独立保管产品转移，不自动当废物或避免排放抵扣。废滤材不属该废物流时应单独明确。 本范围是必须落实的身份识别要求，不是交换流。使用原节点采集协议及其记录，先按真实身份、端口及独立功能拆分，再将保留的数量、基准及证据规则分别用于各兼容具体行。不得将异质身份合并数量或从总括名称推断原生属性单位。未发生须有证据，适用性或身份未知则阻止完成。 以下采集条件仅限本项 outputs/waste 的身份与交接点（交接端口的收集货物特定滤尘废物）。本过程实际产生或接收所述废物时启用。记录材料或配方或真实共同收集混合物、干湿状态、容器皮重、来源事件、存量、交接关口及实际接收者；核对产生量+期初库存+接收量=交出量+期末库存+另列现场处理量。分收的不同废物分行，真实接收混合物可为一行，其组分仅作不可相加审计；有用回收、客户保留物与废物去向分开，不自动给替代抵扣。 每项适用性判断须留证。经证实不发生仅关闭所述范围和时段，缺记录仍未解决。发生的要求须将全部事件映射到具体row ID及相容原生数量，或精确映射至已覆盖行和供应方责任，并逐项说明排除理由。证据须覆盖身份、支持单位、计算、原始记录及全部去向；既有与新增分支对同一事件互斥覆盖，协议本身不作为交换。完成须无未分配事件、无重复覆盖、无相关数量或身份未决项。按有证据的实际分支采集原始字段。不适用的操作数须关联分支判定，适用但缺乏实测或依据的数量登记待决。 | 接收方验收的具体废物或实际混合收集物在实测状态下的原生数量 | 每次真实事件及每项有证据的未发生判断 | 完整声明队列及归属资产寿命关联事件 | 仅本过程真实责任场所及供应方 | 先对账原生事件总量，仅汇总身份、状态、单位、交接点及期间均相容的量。按相应计算规则逐行核算一次：只分配仍共享的负担，目标总量仅除以同口径的正合格产出；等效每参考流数值原值沿用，零产出期间不作除法并保留处置记录。 | 以接收记录核对产生、库存、场内处理和实测交付。混合物流量与组分测量分开；干湿基或质量体积换算须有相容组成或密度。接收转移和环境直排按不同交接点记录。 对规定采用 质量 / kg 的行，核实实测口径或向该口径的换算。 对上述具体身份及相容输入口径，仅在数量的归属和归一化状态与下式前提匹配时使用该规则：attributed_actual_collected_dust_waste_kg / N 保留原始凭据、实际采用的系数和结果单位。数值来源模式：calculated_value；适用范围：site_specific；归一化基准：每声明的参考流；基准类型：reference_flow；证据类型：calculated_from_collection；采集协议：cp_handling；来源：unsd-cpc3-65117; ghg-product-2011。须有原始记录、精确原生支持及逐具体行核验；这些规则不提供缺失身份或数值。 完成判据：check_occurrence_completion。 |
| cp_expand_cargo_dust_air | bulk_handling | 必须展开身份 cargo_dust_air (outputs/elementary)：实际货物特定粉尘物质及粒径组分向空气排放 | collected_record | requirement_id=cargo_dust_air; process_id=bulk_handling; required_direction=outputs; required_flow_type=elementary; original_collection_protocol=cp_handling; applicability_evidence; occurrence_event_id; concrete_row_id; physical_identity; formulation_or_species; phase; carbon_origin; particle_fraction; source_compartment; receiving_compartment; supply_or_handover_gate; provider_covered_cells; asset_component_event_and_lifecycle_phase; native_property; native_unit; measured_native_quantity; source_record_id; allocation_all_users; normalization_denominator; per_identity_amount_calculation; verification_evidence; unresolved_reason; occurrence_to_row_reconciliation; substance_identity; chemical_form; environmental_compartment; carbon_origin; particle_fraction_or_count_basis; measured_or_calculated_release; species_conversion_evidence; applicability_decision_record; covered_concrete_rows; excluded_occurrence_reason; completion_evidence; observed_quantity_state; conversion_or_allocation_evidence | 针对真实独立报告的货物物质颗粒分级及装卸卸压空气子介质的待核需求。按真实组分粒径位置拆分，不采用统一PM2.5二氧化硅煤UUID，不在影响方法中重复颗粒总量与其已含组分。 本范围是必须落实的身份识别要求，不是交换流。使用原节点采集协议及其记录，先按真实身份、端口及独立功能拆分，再将保留的数量、基准及证据规则分别用于各兼容具体行。不得将异质身份合并数量或从总括名称推断原生属性单位。未发生须有证据，适用性或身份未知则阻止完成。 以下采集条件仅限本项 outputs/elementary 的身份与交接点（实际货物特定粉尘物质及粒径组分向空气排放）。仅对进入已记录接收介质且有观测或适用计算依据的实际释放启用。记录具体物质及形态、来源或接收介质、适用的化石或生物碳来源、适用的粒径组分或粒子数粒径基础及采样期；保留元素与分子口径，换算须有化学计量和相容物种证据。收集物流中的污染物在实际环境排放边界前归接收物流，不用CO2、NOx、VOC、COD或泛颗粒物流代替缺失物种。 每项适用性判断须留证。经证实不发生仅关闭所述范围和时段，缺记录仍未解决。发生的要求须将全部事件映射到具体row ID及相容原生数量，或精确映射至已覆盖行和供应方责任，并逐项说明排除理由。证据须覆盖身份、支持单位、计算、原始记录及全部去向；既有与新增分支对同一事件互斥覆盖，协议本身不作为交换。完成须无未分配事件、无重复覆盖、无相关数量或身份未决项。按有证据的实际分支采集原始字段。不适用的操作数须关联分支判定，适用但缺乏实测或依据的数量登记待决。 | 本物质、资源或物理排放在实际环境介质的已核实原生属性与单位 | 每次真实事件及每项有证据的未发生判断 | 完整声明队列及归属资产寿命关联事件 | 仅本过程真实责任场所及供应方 | 先对账原生事件总量，仅汇总身份、状态、单位、交接点及期间均相容的量。按相应计算规则逐行核算一次：只分配仍共享的负担，目标总量仅除以同口径的正合格产出；等效每参考流数值原值沿用，零产出期间不作除法并保留处置记录。 | 采样或活动量及适用因子须对应物种、相态、来源和环境介质。按实际对象区分质量、粒子数、热量及元素当量；换算须有依据，重叠总量不可相加。 对规定采用 质量 / kg 的行，核实实测口径或向该口径的换算。 对上述具体身份及相容输入口径，仅在数量的归属和归一化状态与下式前提匹配时使用该规则：attributed_actual_specific_dust_air_kg / N 保留原始凭据、实际采用的系数和结果单位。数值来源模式：calculated_value；适用范围：site_specific；归一化基准：每声明的参考流；基准类型：reference_flow；证据类型：calculated_from_collection；采集协议：cp_handling；来源：unsd-cpc3-65117; ghg-product-2011。须有原始记录、精确原生支持及逐具体行核验；这些规则不提供缺失身份或数值。 完成判据：check_occurrence_completion。 |
| cp_expand_dry_bulk_vehicle_assembly | support_lifecycle | 必须展开身份 dry_bulk_vehicle_assembly (inputs/product)：交付端口的完整干散货道路车辆总成 | collected_record | requirement_id=dry_bulk_vehicle_assembly; process_id=support_lifecycle; required_direction=inputs; required_flow_type=product; original_collection_protocol=cp_assets; applicability_evidence; occurrence_event_id; concrete_row_id; physical_identity; formulation_or_species; phase; carbon_origin; particle_fraction; source_compartment; receiving_compartment; supply_or_handover_gate; provider_covered_cells; asset_component_event_and_lifecycle_phase; native_property; native_unit; measured_native_quantity; source_record_id; allocation_all_users; normalization_denominator; per_identity_amount_calculation; verification_evidence; unresolved_reason; occurrence_to_row_reconciliation; asset_or_reusable_id; model_configuration; included_initial_components; lifecycle_phase; manufacture_native_quantity; target_duty; all_user_same_cohort_lifetime_duty; replacement_event; provider_coverage_cells; applicability_decision_record; covered_concrete_rows; excluded_occurrence_reason; completion_evidence; observed_quantity_state; conversion_or_allocation_evidence; supply_or_service_gate; accepted_service_demand; provider_functional_unit; provider_intensity_basis; covered_lifecycle_stages | 按真实记录选择实际卡车或牵引挂车车体设备、兼容规格初始总成及制造端口，包括自卸筒仓气力覆盖配置。不以制造替代全生命周期，不重复初始部件。 本范围是必须落实的身份识别要求，不是交换流。使用原节点采集协议及其记录，先按真实身份、端口及独立功能拆分，再将保留的数量、基准及证据规则分别用于各兼容具体行。不得将异质身份合并数量或从总括名称推断原生属性单位。未发生须有证据，适用性或身份未知则阻止完成。 对本项规定的实体资产或周转品，核实供应交接点、初始部件以及实际替换、维护、清洗、失败和退役记录。租赁或综合供应合同须核实覆盖范围；本项包含已交付服务时按实际验收的原生需求计量，仅另行追溯未覆盖的资产阶段。直接建模资产按同队列目标作业量与全用户有据正寿命作业量之比分配，禁止将整个设施归给一个服务。 已明确分支（仅按实际适用记录启用）：dry_bulk_vehicle_assembly_manufacture. 每项适用性判断须留证。经证实不发生仅关闭所述范围和时段，缺记录仍未解决。发生的要求须将全部事件映射到具体row ID及相容原生数量，或精确映射至已覆盖行和供应方责任，并逐项说明排除理由。证据须覆盖身份、支持单位、计算、原始记录及全部去向；既有与新增分支对同一事件互斥覆盖，协议本身不作为交换。完成须无未分配事件、无重复覆盖、无相关数量或身份未决项。按有证据的实际分支采集原始字段。不适用的操作数须关联分支判定，适用但缺乏实测或依据的数量登记待决。 | 实体资产或周转品按已核实的制造或供应单位；同一队列的相容作业量；范围内的交付服务用其原生功能单位 | 每次真实事件及每项有证据的未发生判断 | 完整声明队列及归属资产寿命关联事件 | 仅本过程真实责任场所及供应方 | 先对账原生事件总量，仅汇总身份、状态、单位、交接点及期间均相容的量。按相应计算规则逐行核算一次：只分配仍共享的负担，目标总量仅除以同口径的正合格产出；等效每参考流数值原值沿用，零产出期间不作除法并保留处置记录。 | 实体资产按有记录的供应交接量乘目标作业量与同队列全用户正寿命作业量之比，保留配置、投运、更换及退役或剩余寿命记录。范围内如有已交付服务，按已核实原生强度乘相容交付需求，留存覆盖凭据，未覆盖阶段单列。 若实体资产按 物品数量 / Item(s) 计量，保留实测供应量，寿命作业量另记单位。 对该交接点相容的资产量或已独立核实的服务结果，仅在数量的归属和归一化状态与下式前提匹配时使用该规则：attributed_vehicle_manufacture_items / N 保留原始凭据、实际采用的系数和结果单位。数值来源模式：calculated_value；适用范围：site_specific；归一化基准：每声明的参考流；基准类型：reference_flow；证据类型：calculated_from_collection；采集协议：cp_assets；来源：unsd-cpc3-65117; ghg-product-2011。须有原始记录、精确原生支持及逐具体行核验；这些规则不提供缺失身份或数值。 完成判据：check_occurrence_completion。 |
| cp_expand_native_road_service | support_lifecycle | 必须展开身份 native_road_service (inputs/product)：实际道路基础设施生命周期服务 | collected_record | requirement_id=native_road_service; process_id=support_lifecycle; required_direction=inputs; required_flow_type=product; original_collection_protocol=cp_assets; applicability_evidence; occurrence_event_id; concrete_row_id; physical_identity; formulation_or_species; phase; carbon_origin; particle_fraction; source_compartment; receiving_compartment; supply_or_handover_gate; provider_covered_cells; asset_component_event_and_lifecycle_phase; native_property; native_unit; measured_native_quantity; source_record_id; allocation_all_users; normalization_denominator; per_identity_amount_calculation; verification_evidence; unresolved_reason; occurrence_to_row_reconciliation; provider_contract; independent_function; provider_gates; native_functional_unit; delivered_quantity; covered_process_phase_cells; uncovered_foreground_rows; applicability_decision_record; covered_concrete_rows; excluded_occurrence_reason; completion_evidence; observed_quantity_state; conversion_or_allocation_evidence; provider_functional_unit; accepted_service_demand; provider_intensity_basis; covered_service_stages | 真实原生道路建设维修退役供应方功能运行基准车辆载荷及端口范围，寿命轴载系数须有证据。供应方范围仅替代对应自营工作。 本范围是必须落实的身份识别要求，不是交换流。使用原节点采集协议及其记录，先按真实身份、端口及独立功能拆分，再将保留的数量、基准及证据规则分别用于各兼容具体行。不得将异质身份合并数量或从总括名称推断原生属性单位。未发生须有证据，适用性或身份未知则阻止完成。 以下采集条件仅限本项 inputs/product 的身份与交接点（实际道路基础设施生命周期服务）。仅在本PCR范围内实际委托独立功能时启用。记录合同、交付服务功能、关口、原生功能单位、实际交付量及具体覆盖的过程和寿命阶段；逐项与自营活动比对，完整供应方或未覆盖前景活动仅计一次。不用金额、材料质量或假设件数替代真实功能；同一最终服务不通过外部最终产品供应方递归重复计入。 每项适用性判断须留证。经证实不发生仅关闭所述范围和时段，缺记录仍未解决。发生的要求须将全部事件映射到具体row ID及相容原生数量，或精确映射至已覆盖行和供应方责任，并逐项说明排除理由。证据须覆盖身份、支持单位、计算、原始记录及全部去向；既有与新增分支对同一事件互斥覆盖，协议本身不作为交换。完成须无未分配事件、无重复覆盖、无相关数量或身份未决项。按有证据的实际分支采集原始字段。不适用的操作数须关联分支判定，适用但缺乏实测或依据的数量登记待决。 | 已核实的合同交付功能单位；仅独立可计数且已验收的结果使用 Item(s) | 每次真实事件及每项有证据的未发生判断 | 完整声明队列及归属资产寿命关联事件 | 仅本过程真实责任场所及供应方 | 先对账原生事件总量，仅汇总身份、状态、单位、交接点及期间均相容的量。按相应计算规则逐行核算一次：只分配仍共享的负担，目标总量仅除以同口径的正合格产出；等效每参考流数值原值沿用，零产出期间不作除法并保留处置记录。 | 按指定交接点实际验收量计量。仅在单位强度换算为总负担时，以供应方强度乘同一原生单位的需求量。保留合同范围、验收、原生单位及覆盖阶段记录。仅按时间交付的功能以时长计量。 对按合同口径已验收的服务，仅在数量的归属和归一化状态与下式前提匹配时使用该规则：attributed_native_road_service / N 保留原始凭据、实际采用的系数和结果单位。数值来源模式：calculated_value；适用范围：site_specific；归一化基准：每声明的参考流；基准类型：reference_flow；证据类型：calculated_from_collection；采集协议：cp_assets；来源：unsd-cpc3-65117; ghg-product-2011。须有原始记录、精确原生支持及逐具体行核验；这些规则不提供缺失身份或数值。 完成判据：check_occurrence_completion。 |
| cp_expand_wash_wastewater | support_lifecycle | 必须展开身份 wash_wastewater (outputs/waste)：收集的干散货车体软管清洗废水 | collected_record | requirement_id=wash_wastewater; process_id=support_lifecycle; required_direction=outputs; required_flow_type=waste; original_collection_protocol=cp_support; applicability_evidence; occurrence_event_id; concrete_row_id; physical_identity; formulation_or_species; phase; carbon_origin; particle_fraction; source_compartment; receiving_compartment; supply_or_handover_gate; provider_covered_cells; asset_component_event_and_lifecycle_phase; native_property; native_unit; measured_native_quantity; source_record_id; allocation_all_users; normalization_denominator; per_identity_amount_calculation; verification_evidence; unresolved_reason; occurrence_to_row_reconciliation; waste_origin_event; material_or_true_mixture; moisture_basis; container_tare; opening_waste_stock; generated_waste; received_waste; handover_quantity; closing_waste_stock; onsite_treatment; receiver_id; applicability_decision_record; covered_concrete_rows; excluded_occurrence_reason; completion_evidence; observed_quantity_state; conversion_or_allocation_evidence | 真实按货物化学组成兼容分开的收集清洗流，明确原生属性单位接收方。水泥浆煤细粉和食品残留不可互换，区分滞留水蒸发直接排放及废物转移。 本范围是必须落实的身份识别要求，不是交换流。使用原节点采集协议及其记录，先按真实身份、端口及独立功能拆分，再将保留的数量、基准及证据规则分别用于各兼容具体行。不得将异质身份合并数量或从总括名称推断原生属性单位。未发生须有证据，适用性或身份未知则阻止完成。 以下采集条件仅限本项 outputs/waste 的身份与交接点（收集的干散货车体软管清洗废水）。本过程实际产生或接收所述废物时启用。记录材料或配方或真实共同收集混合物、干湿状态、容器皮重、来源事件、存量、交接关口及实际接收者；核对产生量+期初库存+接收量=交出量+期末库存+另列现场处理量。分收的不同废物分行，真实接收混合物可为一行，其组分仅作不可相加审计；有用回收、客户保留物与废物去向分开，不自动给替代抵扣。 每项适用性判断须留证。经证实不发生仅关闭所述范围和时段，缺记录仍未解决。发生的要求须将全部事件映射到具体row ID及相容原生数量，或精确映射至已覆盖行和供应方责任，并逐项说明排除理由。证据须覆盖身份、支持单位、计算、原始记录及全部去向；既有与新增分支对同一事件互斥覆盖，协议本身不作为交换。完成须无未分配事件、无重复覆盖、无相关数量或身份未决项。按有证据的实际分支采集原始字段。不适用的操作数须关联分支判定，适用但缺乏实测或依据的数量登记待决。 | 接收方验收的具体废物或实际混合收集物在实测状态下的原生数量 | 每次真实事件及每项有证据的未发生判断 | 完整声明队列及归属资产寿命关联事件 | 仅本过程真实责任场所及供应方 | 先对账原生事件总量，仅汇总身份、状态、单位、交接点及期间均相容的量。按相应计算规则逐行核算一次：只分配仍共享的负担，目标总量仅除以同口径的正合格产出；等效每参考流数值原值沿用，零产出期间不作除法并保留处置记录。 | 以接收记录核对产生、库存、场内处理和实测交付。混合物流量与组分测量分开；干湿基或质量体积换算须有相容组成或密度。接收转移和环境直排按不同交接点记录。 对上述具体身份及相容输入口径，仅在数量的归属和归一化状态与下式前提匹配时使用该规则：attributed_native_collected_wash_stream / N 保留原始凭据、实际采用的系数和结果单位。数值来源模式：calculated_value；适用范围：site_specific；归一化基准：每声明的参考流；基准类型：reference_flow；证据类型：calculated_from_collection；采集协议：cp_support；来源：unsd-cpc3-65117; ghg-product-2011。须有原始记录、精确原生支持及逐具体行核验；这些规则不提供缺失身份或数值。 完成判据：check_occurrence_completion。 |

### 计算规则

| rule_id | 适用于 | formula_or_rule | inputs | output | source_ids |
| --- | --- | --- | --- | --- | --- |
| normalize_bulk_service | 除最终输出以外全部清单 | x_ref = sum(x_native_attributed) / N；N为真实同组合格完成干散货道路托运区段正数量；最终输出为1 Item(s)。 | x_native_attributed; N; cp_movement; cp_handling; cp_support; cp_assets | x_ref | ghg-product-2011 |
| exclusive_cargo_ledger | 各真实货物干固体台账及独立水台账 | opening_dry_solids + receipts_dry_solids + inward_transfers_dry_solids = closing_dry_solids + delivered_dry_solids + outward_transfers_dry_solids + measured_dry_solids_loss；每次观测须使用其自身实测湿质量和含水质量分数转换，dry_solids = wet_mass * (1 - w_wet)，其中w_wet = water_mass / wet_mass为湿基水质量分数。若记录为干基含水率w_dry = water_mass / dry_solids，先换算w_wet = w_dry / (1 + w_dry)，等价地dry_solids = wet_mass / (1 + w_dry)。记录观测基准及换算证据，禁止代入基准未明的含水率。去向互斥；内部回收保留期末或后续真实交付外送端口一次。相关水单独按实际加水雨水、滞留库存、交付外送及蒸发等项闭合。湿质量报告台账必须明确这些水变化项，不得假定等含水量或将蒸发称作干固体损失。 | each_observation_wet_mass; each_observation_moisture_fraction; actual_added_rain_evaporated_retained_outgoing_water; stocks_transfers_losses; cp_movement; cp_handling; cp_support | 已对账的货物原生计量台账 | ghg-product-2011 |
| exclusive_shared_energy | 真实发动机空气装卸范围 | 依据有据计量验证运行证据划分真实共用发动机交流电投入及尾气至行驶装卸，各原生分配份额汇总为唯一计量池。自营压缩和包含上游的外购空气范围在归一化前互斥。 | 实际原生计量的 engine_AC_air_pool; duty_shares; cp_movement; cp_handling | 归属于目标的原生计量能源消耗和尾气排放 | ghg-product-2011 |

### 数据质量要求

| requirement_id | 适用于 | Requirement | evidence |
| --- | --- | --- | --- |
| traceable_native | 全部节点 | 逐真实交换具备原始记录校准、原生属性单位端口、货批物料水分质量、真实期间场址供应方分配及不确定性，未知身份数量仍不完整。 | 签署运单；计量供应方废物记录 |
| dust_validity | 粉尘散落去向 | 必须有真实货物成分、粒径物质介质、水分、实测控制状态及模型适用域，不能默默替代煤碳水泥二氧化硅有机粉尘及细粗颗粒。 | 独立兼容测量及方法来源 |
| no_default_ranges | 数量及系数 | 不提供统一载荷燃料气力空气粉尘损失控制轮胎滤材寿命或空驶失败比例。未来经验校验须有独立兼容参考数据，不得用本批最大值验证自身；真实缺失不是零。 | 完整性及独立来源登记 |

## 9. 验证规则

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| qualified_reference | 全部节点 | 核实真实干固体散货、含水分基准的数量、道路设备功能、起讫距离时间及验收交接。不混同压力容器干粉与液体气体罐车货物或集装箱功能。正N须来自实际合格完成区段，不是车辆运力货物制造或计划发运。 | ghg-product-2011 |
| mass_moisture_dust | 全部节点 | 接收交付结转退回散落捕集及直接排放每次观测均按其自身实测湿质量和含水质量分数转为守恒干固体货物台账。水单独按实际加水雨水、库存滞留、交付外送及蒸发闭合；湿质量报告必须纳入水变化而非假定等含水量。单纯水分变化不是干物质损失，未知差额不自动当作粉尘。排放前须有实际物料物质、颗粒分级、捕集控制记录及接收介质，不能将骨料水泥系数套用全部货物。 明确核验湿基w_wet = water_mass / wet_mass；记录为干基w_dry = water_mass / dry_solids时须先换算w_wet = w_dry / (1 + w_dry)。基准无记录时阻止该换算。 | ghg-product-2011 |
| energy_provider_life | 全部节点 | 以唯一归属闭合真实共享发动机燃料交流电取力压缩空气及下游排气过滤范围。匹配供应方原生单位端口及完整资产生命周期，须有同组全用户正总使用量及全用户份额闭合。控制清洗失败寿命缺证表示不完整。先汇总真实场址分子和合格N再归一化，不无权重平均强度。 | ghg-product-2011 |
| identity_translation | 全部节点 | 最终实施交换须有已核实具体UUID原生支撑状态端口及真实物料介质兼容性。数量支撑不是服务UUID，待核语义卡保持候选状态。对照生成规范投影核对中英文有序规则流卡协议ID、公式常数、完整功能画像字段及来源引用，披露不完整检查。 | ghg-product-2011 |
| atomic_road_movement | road_movement | 拒绝将备选物料、独立供应资产服务、不同废物流、污染物种、碳源、相态、粒径或环境子介质合并成一个交换身份。本节点每项适用cp_expand_要求必须有发生或未发生记录及完整具体行清单，各行具有自身身份、端口、已核验UUID、原生属性单位、数量、原始记录、计算和唯一责任。供应方已含完整总成或真实收集混合物流仍按一个真实供应或收集身份，不虚构组分交换。不得将要求名称标识、NOx或VOC或PM总量、未明确的物理释放或异质清单绑定一个UUID。核对全部子行、原始事件、供应方已含单元及跨节点交接，不缺失当零、不重复计入。身份、适用性、数量或去向未知，均阻止完整前景包及最终TIDAS交换产出。PCR检查器不验证这些前景事实，须保留逐行证据供审查。 | ghg-product-2011 |
| atomic_bulk_handling | bulk_handling | 拒绝将备选物料、独立供应资产服务、不同废物流、污染物种、碳源、相态、粒径或环境子介质合并成一个交换身份。本节点每项适用cp_expand_要求必须有发生或未发生记录及完整具体行清单，各行具有自身身份、端口、已核验UUID、原生属性单位、数量、原始记录、计算和唯一责任。供应方已含完整总成或真实收集混合物流仍按一个真实供应或收集身份，不虚构组分交换。不得将要求名称标识、NOx或VOC或PM总量、未明确的物理释放或异质清单绑定一个UUID。核对全部子行、原始事件、供应方已含单元及跨节点交接，不缺失当零、不重复计入。身份、适用性、数量或去向未知，均阻止完整前景包及最终TIDAS交换产出。PCR检查器不验证这些前景事实，须保留逐行证据供审查。 | ghg-product-2011 |
| atomic_support_lifecycle | support_lifecycle | 拒绝将备选物料、独立供应资产服务、不同废物流、污染物种、碳源、相态、粒径或环境子介质合并成一个交换身份。本节点每项适用cp_expand_要求必须有发生或未发生记录及完整具体行清单，各行具有自身身份、端口、已核验UUID、原生属性单位、数量、原始记录、计算和唯一责任。供应方已含完整总成或真实收集混合物流仍按一个真实供应或收集身份，不虚构组分交换。不得将要求名称标识、NOx或VOC或PM总量、未明确的物理释放或异质清单绑定一个UUID。核对全部子行、原始事件、供应方已含单元及跨节点交接，不缺失当零、不重复计入。身份、适用性、数量或去向未知，均阻止完整前景包及最终TIDAS交换产出。PCR检查器不验证这些前景事实，须保留逐行证据供审查。 | ghg-product-2011 |
| check_occurrence_completion | 全部实际清单行和身份识别协议 | 保留适用性证据，将每个实际事件对应到具体清单行或已核实的供应方覆盖范围。判定未发生须有证据，未知项保留待决。按同一身份、状态、单位、期间和交接点核对期初、接收、期末及互斥去向。耗材领用账区分未用退回、内部领拨和合格、失败及返工作业的实际耗用。托管账或物料平衡采用期初库存＋外部接收＋配对内部接收＝期末库存＋配对内部发出＋对外交付且获接收的数量＋未用外退＋外送的已用物资或回收物＋外送废物＋直接排放＋本边界内消耗或转化量。身份在边界内生成时，将有证据的生成量或出生数计入该身份账的来源并关联原事件。在上层守恒物料或元素平衡中抵消内部转化和移交。每个事件只记一次，留存回收物计入期末，移交与耗用分别登记。按相容口径执行专用托管、相态、转化或元素规则；已作为转化量计入的物料，其后续产物不得再计入同一去向合计。独立计量各项，对未解释的差额追查并保留待决。实物总量与负担分配分别核算。共享原始负担采用 Q_raw × s / R，其中 s 为有证据的目标驱动量除以同池同期间全部适用用户的正驱动量总和。已归属的目标总量采用 Q_target / R，已与同一参考流等效的单位结果 q_ref 原值沿用。供应方单位强度先乘以按其原生单位实测的需求量。仅在另一个仍有共享负担的独立阶段另作分配。R 为同一队列、交接点和参考单位下的正值合格产出量。保留失败与部分完成作业的负担，禁止以此放大 R；零产出时保留负担及有证据的结转或最终处置。自有资产采用同队列全用户寿命作业量，并排除初始部件重复计算。外购服务仅替代有记录的覆盖阶段。适用的身份、数量、支持单位、去向或分配分母仍未决时，最终数据集仍不完整。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | secondary_dataset; background_dataset |
| downstream_use | 真实兼容干散货道路货运接入货物供应链LCA |
| allowed_use | 可比货物数量水分起讫距离质量及真实装卸供应方生命周期边界 |
| excluded_use | 货物制造其他货运功能无据等数量比较缺失责任当零或未核实最终交换 |
| required_metadata | 全部参考限定条件真实原生来源记录货物粉尘去向能源归属供应端口分配及全用户寿命 |
| required_quality_disclosure | 未知身份数量方法适用域时空代表性失败拒收责任粉尘控制去向不确定性跳过检查 |
| update_trigger | 货物方法路线质量控制技术资产供应方变化或新增核实证据 |

## 11. 数据源

| source_id | type | reference | used_for |
| --- | --- | --- | --- |
| unsd-cpc3-65117 | official_guidance | UNSD CPC 3.0 65117; https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | 完整干固体散货道路范围含谷物面粉水泥砂煤，不提供数值系数 |
| ghg-product-2011 | standard | WRI/WBCSD Product Life Cycle Accounting and Reporting Standard (2011), chapters6–10; https://ghgprotocol.org/sites/default/files/ghgp/standards/Product-Life-Cycle-Accounting-Reporting-Standard_041613.pdf | 边界数据分配原则；明确完整资产及记录算法为PCR选择 |
| epa-ap42-aggregate-handling | official_guidance | US EPA AP-42, section13.2.4 Aggregate Handling and Storage Piles, November2006; https://www.epa.gov/sites/default/files/2020-10/documents/13.2.4_aggregate_handling_and_storage_piles.pdf | 仅物料水分风况粒径控制特定粉尘问题，不将骨料数值系数通用化 |
| uk-cement-pneumatic-guidance | official_guidance | UK Process Guidance Note3/01(12), Blending, packing, loading, unloading and use of cement; https://assets.publishing.service.gov.uk/media/5a80360d40f0b62305b89d4a/blending-packing-loading-unloading-and-use-of-cement-process-guidance-note-3-01_12_.pdf | 实际兼容水泥路线的条件气力车辆接收筒仓排气过滤接口，不声称全部货物受相同规定约束 |

