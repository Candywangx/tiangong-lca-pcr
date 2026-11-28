---
pcr_id: pcr.distributive-trade-services-accommodation-food-and-beverage-serving-ser-18ff339a.freight-transport-services.railway-transport-services-of-freight-by-refrigerator-cars
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 冷藏铁路货物运输服务

## 1. 范围与适用性

本PCR覆盖专用冷藏车厢以铁路运送冷冻或冷藏货物的完整官方类别，不限某种食品、机车燃料、冷藏车类型、国家或编组。参考为1 t*km真实合格交付货物周转服务：按各区段真实货物吨质量乘真实载货铁路距离，分别追踪沿途取送及合格交付份额。货物质量不含车厢机车集装箱皮重。冷藏质量时间路线端口为必需条件，吨公里标签本身不建立服务等价。

排除其他运输模式、普通非冷藏铁路货运、单独分类联运集装箱铁路服务、独立冷库、货物制造及不含运输的纯冷藏车出租。相邻服务重叠按真实分类功能设备判定；不能因货物非食品或电力牵引就排除合格冷藏车厢服务。按真实端口归属纳入合同内调车编组场交接冷却预处理清洗及完整应分配基础设施车辆生命周期。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.distributive-trade-services-accommodation-food-and-beverage-serving-ser-18ff339a.freight-transport-services.railway-transport-services-of-freight-by-refrigerator-cars |
| classification_refs | CPC 3.0 65121; exact |
| covered_products | 专用冷藏铁路车厢运送冷冻冷藏货物的完整服务 |
| excluded_products | 普通非冷藏铁路货运；单独分类铁路联运集装箱服务；其他模式；独立冷库；货物制造或纯车厢出租 |
| representative_product | 合格冷藏铁路货物运输周转服务 |
| production_route | 真实铁路行驶调车冷藏保全及完整应分配铁路资产支持生命周期 |
| market_state | 声明铁路交接端口真实合格冷藏交付货物周转服务 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| 什么（What） | 合格冷藏铁路货物运输周转服务 |
| 多少（How much） | 1 t*km真实合格交付货物周转服务，按真实净吨质量乘真实载货区段公里 |
| 质量（How well） | 真实冷冻冷藏货物接收交付温度时间质量路线距离及车厢牵引制冷端口 |
| 时长或周期（How long or cycle） | 真实验收铁路货运期间加因果空驶调车场站失败制冷及生命周期期间 |
| reference_flow_link | qualified_refrigerated_rail_work |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 合格冷藏铁路货物运输周转服务 |
| 参考流属性 | 质量*距离 `118f2a40-50ec-457c-aa60-9bc6b6af9931` |
| 参考单位组 | 质量*距离 `3620148f-c5db-48ce-9065-a10092089aca` |
| 参考单位 | tkm |
| 必需限定信息 | frozen_refrigerated_cargo; net_cargo_mass_per_loaded_segment; actual_segment_rail_distance; accepted_delivered_portions; pickup_drop_transfer_ids; temperature_time_quality; railcar_locomotive_consist; actual_traction_supply_AC_DC; reefer_energy_cold_medium; shunt_yard_empty_failed_cold_duties; cargo_loss_receiver; all_users_allocation; native_provider_gates; same_asset_all_user_life; species_medium; period_T; uncertainty |

## 4. 计量与单位规则

| rule_id | 适用于 | required_property | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| reference_work | reference product | 质量*距离 | t*km | 合格货物质量距离不同于列车总重质量距离车厢数量TEU机车距离静止制冷时间或计划容量。须有正T及真实货物份额载货区段温度时间质量证据。 |
| native_basis | 全部清单行 | 真实原生兼容属性 | 真实原生单位 | 保留货物净质量与机车车厢集装箱皮重区分、真实逐段质量距离及原生供应方单位端口。采用有据质量距离单位换算，不使用通用密度。交流直流及供应库存燃烧充注泄漏分开，核实kWh至MJ采用3.6 MJ/kWh。 |
| tkm_spelling_alias | reference product; qualified_refrigerated_rail_work | 质量*距离 `118f2a40-50ec-457c-aa60-9bc6b6af9931` | tkm | 声明tkm是已核实原生单位t*km的拼写别名，严格1 tkm = 1 t*km = 1000 kg*km。原生单位组名称仍为质量*距离，UUID仍为3620148f-c5db-48ce-9065-a10092089aca。该记法不改变参考功能、量纲、数量或尺度。最终TIDAS交换使用真实原生单位名t*km及其已核实系数和支撑链。 |


## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 真实冷冻冷藏货物接收铁路冷藏拓扑及牵引冷媒供应方资产端口 |
| starting_condition_role | 前景进入事实不消除早期资产供应 |
| product_classification_scope | 完整专门冷藏车厢铁路货运65121，真实功能解决相邻重叠 |
| recursive_input_rule | 真实原生外包阶段替代匹配自营范围一次 |
| upstream_dataset_requirement | 真实物料技术原生单位状态端口地域期间及生命周期范围 |
| disclosure | 货物保管完整铁路冷链场站责任物种去向全用户网络资产供应方分配及未知 |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| full_rail_scope | 全部节点 | 完整冷冻冷藏货物专用铁路冷藏车厢运输；真实柴油电传动、电力混合或其他牵引及机械电力冰低温介质冷却状态为条件有据实现。父活动为冷藏铁路货运。机车牵引拓扑与车厢制冷分开：车载柴油发电不是外购电力，电力机车不证明冷藏车电制冷或制冷零燃料。真实离线发电储能能量回收接口保留端口损失。 | unsd-cpc3-65121 |
| full_duty | rail_movement | 纳入归属本服务的载货列车行驶、调车编组、场站等候怠速、车场启动停留、空机车冷藏车调位返程、失败取消救援拒收交付及真实司机辅助责任。保留混编列车其他货物及共同承运客运服务输出与真实因果份额。服务支持所需静止空驶失败责任中的制冷仍应归属，但不向输出添加运输距离。 | ghg-product-2011 |
| cold_handoff | reefer_preservation | 保鲜边界从归属本声明服务的真实准备测试及预处理开始，包括接货前由服务负责的运行责任。接收货物状态温度作为独立追踪锚点，并持续覆盖全部真实保全责任直到真实交付温度时间偏温及交接验收决定。分别记录预处理测试、冷却或实际加热除霜风扇开门运行状态、燃料补充回收及全部真实冷媒。制造商运营商指令仅用于兼容设备货物，不是统一设定温度或开门运行假设。静止制冷小时不是吨公里输出。 | up-reefer-operating-instructions |
| cargo_provider | rail_movement; support_lifecycle | 货物为运输保管对象，不是消耗清单或新货物输出；原始货物制造不属货运产品。追踪接收交付、分段取送、滞留退回损失接收方及各质量结果，下游货物LCA接收一次实际损失补货披露。铁路承运人编组场车厢冷藏设备供应方冷链场站短驳方明确原生活动端口及已含范围。供应结果仅替代精确对应自营范围一次；其他模式短驳保持自身分类并在真实端口接入上游或披露，不能默默改名铁路。 | ghg-product-2011 |
| asset_network | support_lifecycle | 本PCR生命周期选择覆盖真实机车冷藏车厢冷却机组电池、轨道钢轨轨枕道砟道岔信号接触网变电站及编组场车场场站装卸设备的制造安装改装维护更新更换及退役。完整总成与已含初始部件互斥。原生制造供应不是全生命周期铁路服务，同组全用户总使用量仅支持分配。真实轮轨制动集电磨耗、润滑撒砂及产生废物排放须有真实物料物种去向记录。 | ghg-product-2011 |
| energy_species | 全部节点 | 外购交流接触网直流、自营转换发电、储能充放、再生及外部输出具有不同真实原生端口。总净能源、内部回收制动及真实外部输出不能重复或作统一避免电力抵扣。制冷剂供应初充补充库存回收与真实泄漏分开。保留燃料碳来源及真实燃烧量、物种化合物粒径及空气水土收集接收方，不采用供应等于燃烧或补充等于泄漏。 | ipcc-mobile-2006 |
| actual_expansion | 全部节点 | 对每项真实尚未表示能源物料冷媒资产供应方结果废物或排放物种，按具体身份状态原生属性单位创建真实独立row_id，具有一个父节点方向类型、真实数量来源、同节点协议端口及接收介质不确定性。条件语义需求卡不能成为单一已核实伞状交换。真实发生数量身份缺失表示不完整而非零，未观测路线替代仍在范围内。 | ghg-product-2011 |

## 6. 过程清单结构

每张清单流卡仅代表一个可独立识别的产品、物料配方、废物流、物质或供应服务，具有兼容的端口、属性和单位。完整供应总成或实际收集的混合物流可有一个身份，其已含组分不得另列重复交换。第8节cp_expand_协议是必须落实的身份识别要求，不得当作选定流或交换数量。逐项记录真实适用性，以独立行标识列出全部具体交换；完整保留适用范围，未发生须有证据。尚未展开或未知的要求属于不完整，不得当作零。改为采集协议不等于解决缺失身份，也不免除生命周期、分配、计量或边界义务。

### 过程图

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| rail_movement | 铁路行驶调车及最终货运交接 | required | 真实合格铁路货运服务 | foreground | qualified_refrigerated_rail_work |
| reefer_preservation | 冷藏车厢温度保全 | required | 真实冷冻冷藏货物温度保全责任 | foreground | qualified_refrigerated_rail_work |
| support_lifecycle | 编组场装卸清洗及完整铁路资产 | required | 真实应分配支持生命周期阶段 | foreground | qualified_refrigerated_rail_work |

全部节点关联唯一最终分母；reefer_preservation与support_lifecycle不产生额外最终服务完成。内部货物转移不是新增货物采购或成品输出。

### 过程：铁路行驶调车及最终货运交接 (`rail_movement`)

#### 输入

##### 产品流

###### 柴油 (`locomotive_diesel`)

真实机车调车柴油供应按条件纳入，记录牌号配方碳及燃烧库存泄漏。柴油电传动车载发电为内部活动，不是额外外购电投入。制冷发动机具独立真实池。

- 选定流：柴油 `9d258d75-6792-4f1c-9856-81602ed8f816`
- 流属性/单位：质量 / kg
- 数量规则：attributed_locomotive_diesel_kg / T
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每声明的参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_movement`
- 来源：`unsd-cpc3-65121`; `ghg-product-2011`

###### 交流电 (`traction_ac`)

在声明铁路变电接触或充电端口实际外购交流电，保留真实转换网络损失及再生接口。交流电不能替代实际独立外购直流。

- 选定流：交流电 `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- 流属性/单位：净热值 / MJ
- 数量规则：attributed_external_traction_AC_MJ / T
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每声明的参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_movement`
- 来源：`unsd-cpc3-65121`; `ghg-product-2011`

###### 实际直流铁路牵引供应 (`traction_dc`)

按条件记录真实电压质量接触或充电端口独立外购直流及供应方损失范围。自产交流转直流为内部活动，不重复外购。

- 选定流：实际直流铁路牵引供应
- 流属性/单位：能量 / MJ
- 数量规则：attributed_external_traction_DC_MJ / T
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每声明的参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_movement`
- 来源：`unsd-cpc3-65121`; `ghg-product-2011`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 合格冷藏铁路货物运输周转服务 (`qualified_refrigerated_rail_work`)

由货物净吨质量和真实载货区段距离形成的合格冷藏铁路交付货物周转量，追踪各验收交付份额，不是列车总重周转量或车厢数量。

- 选定流：合格冷藏铁路货物运输周转服务
- 流属性/单位：质量*距离 / tkm
- 数量规则：1 tkm
- 数值来源模式：`fixed_value`
- 适用范围：`site_specific`
- 归一化基准：每声明的参考流
- 基准类型：`reference_flow`
- 证据类型：`method_formula`
- 采集协议：`cp_movement`
- 来源：`unsd-cpc3-65121`; `ghg-product-2011`

##### 废物流

##### 基本流

###### 二氧化碳（化石源） (`traction_fossil_co2`)

依据实际燃烧碳及兼容实测来源方法记录机车真实化石源二氧化碳向空气排放，供应库存损失不全等于燃烧。生物源燃烧分开并声明空气子介质。

- 选定流：二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 流属性/单位：质量 / kg
- 数量规则：attributed_locomotive_fossil_CO2_kg / T
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每声明的参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_movement`
- 来源：`unsd-cpc3-65121`; `ghg-product-2011`

### 过程：冷藏车厢温度保全 (`reefer_preservation`)

#### 输入

##### 产品流

###### 柴油 (`reefer_diesel`)

真实独立冷藏发电压缩机柴油用于预处理载货场站等候失败及有据空车制冷，与机车油箱分开。供应方已含制冷范围替代精确自营燃料范围。

- 选定流：柴油 `9d258d75-6792-4f1c-9856-81602ed8f816`
- 流属性/单位：质量 / kg
- 数量规则：attributed_reefer_diesel_kg / T
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每声明的参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_cold`
- 来源：`unsd-cpc3-65121`; `ghg-product-2011`

###### 交流电 (`reefer_ac`)

明确端口实际外购冷藏车或场站岸电交流电，自有柴油发电内部电力不再购买。依据兼容设备指令记录损失恒温冷却加热除霜及真实开门质量状态。

- 选定流：交流电 `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- 流属性/单位：净热值 / MJ
- 数量规则：attributed_external_reefer_AC_MJ / T
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每声明的参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_cold`
- 来源：`unsd-cpc3-65121`; `ghg-product-2011`

###### 制冷剂，R134a (`r134a_makeup`)

仅真实兼容单一R134a供应，不能覆盖全部冷藏车制冷剂。总成已含初充不重复，其他真实化合物混合物冰低温介质须独立具体行及去向。

- 选定流：制冷剂，R134a `b33b6abf-6a88-4ec1-ab79-6aa5aac69e8a`
- 流属性/单位：质量 / kg
- 数量规则：attributed_actual_R134a_makeup_kg / T
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每声明的参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_cold`
- 来源：`unsd-cpc3-65121`; `ghg-product-2011`

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

##### 基本流

###### HFC-134a (`r134a_air`)

仅真实R134a向空气泄漏，按同机组初充补充期末回收闭合或实测排放。补充不等于泄漏，其他化合物接收方不是该身份。

- 选定流：HFC-134a `fe0acd60-3ddc-11dd-a6d2-0050c2490048`
- 流属性/单位：质量 / kg
- 数量规则：attributed_actual_R134a_air_release_kg / T
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每声明的参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_cold`
- 来源：`unsd-cpc3-65121`; `ghg-product-2011`

###### 二氧化碳（化石源） (`reefer_fossil_co2`)

真实独立制冷燃烧化石源二氧化碳向空气排放，与机车尾气供应方已含范围互斥，须有真实燃烧来源化合物基准。

- 选定流：二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 流属性/单位：质量 / kg
- 数量规则：attributed_reefer_fossil_CO2_kg / T
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每声明的参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_cold`
- 来源：`unsd-cpc3-65121`; `ghg-product-2011`

### 过程：编组场装卸清洗及完整铁路资产 (`support_lifecycle`)

#### 输入

##### 产品流

###### 完整铁路机车制造投入 (`locomotive_assembly_manufacture`)

制造交付关口的一件真实完整物理总成；每个实例行只对应一个有记录的型号配置，不同配置分别实例化并计量。仅在该总成为所述节点服务且未被完整供应方覆盖时启用。初始部件包含清单是身份的一部分，已含初始部件不得再次投入；实际未覆盖的维护、更换及寿终另计。 真实完整兼容柴油电传动电力或其他机车制造交付，声明初始部件及原生数量范围，不是完整货运服务或全部生命阶段，真实维护更新退役单独覆盖。

- 选定流：完整铁路机车制造投入
- 流属性/单位：Count / Item(s)
- 数量规则：对每个同型号总成队列：制造件数 * 目标应承担工作量 / 全用户全寿命工作量 / T。两个工作量采用相容同一基准及队列，分母须有证据且为正；目标份额与最终参考归一各一次，已含初始部件不可再相加。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_assets`
- 来源：unsd-cpc3-65121; ghg-product-2011


###### 完整铁路冷藏货车制造投入 (`refrigerated_railcar_assembly_manufacture`)

制造交付关口的一件真实完整物理总成；每个实例行只对应一个有记录的型号配置，不同配置分别实例化并计量。仅在该总成为所述节点服务且未被完整供应方覆盖时启用。初始部件包含清单是身份的一部分，已含初始部件不得再次投入；实际未覆盖的维护、更换及寿终另计。 真实兼容冷藏铁路车厢总成，声明车体转向架轮制动保温制冷初充范围，不替代为道路冷藏车或联运集装箱。已含初始部件与整车互斥。

- 选定流：完整铁路冷藏货车制造投入
- 流属性/单位：Count / Item(s)
- 数量规则：对每个同型号总成队列：制造件数 * 目标应承担工作量 / 全用户全寿命工作量 / T。两个工作量采用相容同一基准及队列，分母须有证据且为正；目标份额与最终参考归一各一次，已含初始部件不可再相加。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_assets`
- 来源：unsd-cpc3-65121; ghg-product-2011


###### 自来水 (`cleaning_tap_water`)

真实市政生产供应原生端口自来水用于车厢场站清洗，端口以外未含配送明确纳入，其他水源保留独立真实身份。

- 选定流：自来水 `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- 流属性/单位：质量 / kg
- 数量规则：attributed_cleaning_tap_water_kg / T
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每声明的参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_support`
- 来源：`unsd-cpc3-65121`; `ghg-product-2011`

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

###### 废润滑油 (`used_lubricating_oil`)

实际应分配机车车厢制冷维护产生并收集的废润滑油，保留原生产生状态成分接收方，不直接当土壤排放或自动回收抵扣。

- 选定流：废润滑油 `55d93375-7f04-4166-b2a2-88ce929051a5`
- 流属性/单位：质量 / kg
- 数量规则：attributed_used_lubricating_oil_kg / T
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每声明的参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_support`
- 来源：`unsd-cpc3-65121`; `ghg-product-2011`

##### 基本流

## 7. 分配与共产品处理

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| movement_cold_shares | 全部节点 | 优先按列车区段编组车厢制冷机组直接细分计量。不可避免的混编牵引场站负荷依据全部用户有据车辆总重载荷距离阻力或其他真实运行物理关系；货物吨公里分母不强制采用吨公里分配。车厢制冷按真实车厢舱室热负荷时间货物因果关系跨载荷分配。经济替代须证明无法建立物理关系并做敏感性，同事件份额闭合为一。 | ghg-product-2011 |
| empty_failed_quality | 全部节点 | 先将归属空驶调车等候失败救援拒收及预处理制冷责任保留因果池，再仅按正合格交付周转量T归一化一次。空车机车皮重、失败货物份额、内部重装及静止制冷不添加交付货物吨公里。重投退回区段及成功段须追踪且不重复最终输出。T=0不能形成有限强度。 | ghg-product-2011 |
| all_user_life | 全部节点 | 各原生资产制造及真实生命周期事件按同组归属服务运行量除以有据且为正的全部用户总使用量分配，再按T归一化。保留真实安装更新更换退役及未完成期间，不提供统一车厢机车轨道电池寿命、空驶比例、制冷效率或制冷剂泄漏系数。供应方原生生命周期范围替代精确范围，资产制造行不能覆盖未表示运行或报废。 | ghg-product-2011 |
| cargo_reject_recovery | 全部节点 | 真实退回回收货物、收集废物、产生残留、直接排放及有用次级输出各有真实状态接收交接。不自动作避免负荷或重复货物制造。内部回收制冷剂进入期末库存或后续外送使用转移仅计一次，不在相同项之外另加回收去向。 | ghg-product-2011 |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_movement | rail_movement | 合格货物周转牵引及完整铁路责任 | 真实一手计量运单供应方记录 | 托运份额；车厢机车编组；逐段货物净吨质量；真实载货铁路公里；取送转移ID；验收交付质量；货物皮重；载货空驶调车场站失败救援责任；柴油库存收入燃烧泄漏；交流直流端口；再生输出；其他用户；份额；期间；T；不确定性 | 按车厢托运区段关联签署称重运单验收及路线链，将真实合格交付份额质量乘真实区段距离只算一次；关联真实牵引计量燃料完整列车场站责任及全部用户，并与冷藏能源独立。 按参考计量口径汇总唯一且已验收的合格产出作为分母，单列不合格事件及其资源责任。参考量保持规定值，仅归属的清单总量除以正分母。本协议下其他清单行保留各自实物单位。 | t；km；t*km；kg；MJ；h | 逐事件及期间闭合 | 真实铁路冷藏服务期间及资产生命周期阶段 | 真实车厢机车编组场场站车场冷媒供应方 | 每声明的参考流 | 校准；签署记录；原生来源；因果分配；不确定性保存各实测操作数的来源及原生口径，注明实际采用的换算或归属依据，以及所供结果是否已按该参考流计量。 |
| cp_cold | reefer_preservation | 真实货物温度保全及冷媒去向 | 真实一手计量运单供应方记录 | 车厢机组舱室；真实货物；接收交付温度；记录仪轨迹；设定点时间偏温；开门运行；预处理加热除霜风扇；环境；静止载货空车失败小时；制冷柴油交流电；原生冷媒；充注期初补充回收期末；泄漏物种介质；拒收质量接收方；全部载荷；分配；期间；T；不确定性 | 采用校准记录仪计量及兼容运营设备记录，保留真实测试开门冷状态事件，不套用通用指令；按同机组以互斥库存使用接收泄漏去向闭合燃料制冷剂或真实替代冷媒，制冷因果归属与列车牵引分开。 原始观测和对账总量保留其记录口径。负担行只分配仍共享的总量，已归属总量仅除以同队列、同交接点的正合格产出；已与该参考流等效的结果原值沿用。零产出时保留负担并记录去向。各项独立实测交付、排放及移交按各自交接点记录，负担按其适用规则分配。 | kg；MJ；h；真实温度原生冷媒单位 | 逐事件及期间闭合 | 真实铁路冷藏服务期间及资产生命周期阶段 | 真实车厢机车编组场场站车场冷媒供应方 | 每声明的参考流 | 校准；签署记录；原生来源；因果分配；不确定性保存各实测操作数的来源及原生口径，注明实际采用的换算或归属依据，以及所供结果是否已按该参考流计量。 |
| cp_support | support_lifecycle | 场站装卸清洗及收集废物 | 真实一手计量运单供应方记录 | 场址编组场场站车场；事件车厢货物转移；原生装卸供应；清洗水源数量；真实货物化学洗涤流；滞留蒸发直接水；废物原生成分数量接收方；供应方已含范围；全部用户；份额；期间；T | 将真实编组装卸端口及货物保管清洗废物交接关联唯一物理事件归属，拆分不兼容收集流和直接排放，包含上游的原生供应方范围仅替代对应自营数量一次。 原始观测和对账总量保留其记录口径。负担行只分配仍共享的总量，已归属总量仅除以同队列、同交接点的正合格产出；已与该参考流等效的结果原值沿用。零产出时保留负担并记录去向。各项独立实测交付、排放及移交按各自交接点记录，负担按其适用规则分配。 | kg；原生装卸废物单位 | 逐事件及期间闭合 | 真实铁路冷藏服务期间及资产生命周期阶段 | 真实车厢机车编组场场站车场冷媒供应方 | 每声明的参考流 | 校准；签署记录；原生来源；因果分配；不确定性保存各实测操作数的来源及原生口径，注明实际采用的换算或归属依据，以及所供结果是否已按该参考流计量。 |
| cp_assets | support_lifecycle | 机车冷藏车网络及场站完整生命周期 | 真实一手计量运单供应方记录 | 资产组技术配置；原生交付数量；已含初始部件充注；制造安装改装更新更换退役日期；全用户总使用量；归属运行量；轨道场站供电信号范围；供应方场址期间；原生单位；T；不确定性 | 核实真实兼容总成供应方原生端口部件范围、各生命事件及全用户同组运行量；原生数量乘归属运行量除以有据全用户正总使用量，再仅按T归一化一次，制造包含范围不免除其他真实阶段。 原始观测和对账总量保留其记录口径。负担行只分配仍共享的总量，已归属总量仅除以同队列、同交接点的正合格产出；已与该参考流等效的结果原值沿用。零产出时保留负担并记录去向。 | Item(s)；kg；原生资产服务运行量 | 逐事件及期间闭合 | 真实铁路冷藏服务期间及资产生命周期阶段 | 真实车厢机车编组场场站车场冷媒供应方 | 每声明的参考流 | 校准；签署记录；原生来源；因果分配；不确定性保存各实测操作数的来源及原生口径，注明实际采用的换算或归属依据，以及所供结果是否已按该参考流计量。 |
| cp_expand_locomotive_assembly | support_lifecycle | 必须展开身份 locomotive_assembly (inputs/product)：交付端口的真实完整铁路机车 | collected_record | requirement_id=locomotive_assembly; process_id=support_lifecycle; required_direction=inputs; required_flow_type=product; original_collection_protocol=cp_assets; applicability_evidence; occurrence_event_id; concrete_row_id; physical_identity; formulation_or_species; phase; carbon_origin; particle_fraction; source_compartment; receiving_compartment; supply_or_handover_gate; provider_covered_cells; asset_component_event_and_lifecycle_phase; native_property; native_unit; measured_native_quantity; source_record_id; allocation_all_users; normalization_denominator; per_identity_amount_calculation; verification_evidence; unresolved_reason; occurrence_to_row_reconciliation; asset_or_reusable_id; model_configuration; included_initial_components; lifecycle_phase; manufacture_native_quantity; target_duty; all_user_same_cohort_lifetime_duty; replacement_event; provider_coverage_cells; applicability_decision_record; covered_concrete_rows; excluded_occurrence_reason; completion_evidence; observed_quantity_state; conversion_or_allocation_evidence; supply_or_service_gate; accepted_service_demand; provider_functional_unit; provider_intensity_basis; covered_lifecycle_stages | 真实完整兼容柴油电传动电力或其他机车制造交付，声明初始部件及原生数量范围，不是完整货运服务或全部生命阶段，真实维护更新退役单独覆盖。 本范围是必须落实的身份识别要求，不是交换流。使用原节点采集协议及其记录，先按真实身份、端口及独立功能拆分，再将保留的数量、基准及证据规则分别用于各兼容具体行。不得将异质身份合并数量或从总括名称推断原生属性单位。未发生须有证据，适用性或身份未知则阻止完成。 对本项规定的实体资产或周转品，核实供应交接点、初始部件以及实际替换、维护、清洗、失败和退役记录。租赁或综合供应合同须核实覆盖范围；本项包含已交付服务时按实际验收的原生需求计量，仅另行追溯未覆盖的资产阶段。直接建模资产按同队列目标作业量与全用户有据正寿命作业量之比分配，禁止将整个设施归给一个服务。 已明确分支（仅按实际适用记录启用）：locomotive_assembly_manufacture. 每项适用性判断须留证。经证实不发生仅关闭所述范围和时段，缺记录仍未解决。发生的要求须将全部事件映射到具体row ID及相容原生数量，或精确映射至已覆盖行和供应方责任，并逐项说明排除理由。证据须覆盖身份、支持单位、计算、原始记录及全部去向；既有与新增分支对同一事件互斥覆盖，协议本身不作为交换。完成须无未分配事件、无重复覆盖、无相关数量或身份未决项。按有证据的实际分支采集原始字段。不适用的操作数须关联分支判定，适用但缺乏实测或依据的数量登记待决。 | 实体资产或周转品按已核实的制造或供应单位；同一队列的相容作业量；范围内的交付服务用其原生功能单位 | 每次真实事件及每项有证据的未发生判断 | 完整声明队列及归属资产寿命关联事件 | 仅本过程真实责任场所及供应方 | 先对账原生事件总量，仅汇总身份、状态、单位、交接点及期间均相容的量。按相应计算规则逐行核算一次：只分配仍共享的负担，目标总量仅除以同口径的正合格产出；等效每参考流数值原值沿用，零产出期间不作除法并保留处置记录。 | 实体资产按有记录的供应交接量乘目标作业量与同队列全用户正寿命作业量之比，保留配置、投运、更换及退役或剩余寿命记录。范围内如有已交付服务，按已核实原生强度乘相容交付需求，留存覆盖凭据，未覆盖阶段单列。 若实体资产按 物品数量 / Item(s) 计量，保留实测供应量，寿命作业量另记单位。 对该交接点相容的资产量或已独立核实的服务结果，仅在数量的归属和归一化状态与下式前提匹配时使用该规则：attributed_locomotive_manufacture_items / T 保留原始凭据、实际采用的系数和结果单位。数值来源模式：calculated_value；适用范围：site_specific；归一化基准：每声明的参考流；基准类型：reference_flow；证据类型：calculated_from_collection；采集协议：cp_assets；来源：unsd-cpc3-65121; ghg-product-2011。须有原始记录、精确原生支持及逐具体行核验；这些规则不提供缺失身份或数值。 完成判据：check_occurrence_completion。 |
| cp_expand_refrigerated_railcar_assembly | support_lifecycle | 必须展开身份 refrigerated_railcar_assembly (inputs/product)：交付端口的完整专门冷藏铁路车厢 | collected_record | requirement_id=refrigerated_railcar_assembly; process_id=support_lifecycle; required_direction=inputs; required_flow_type=product; original_collection_protocol=cp_assets; applicability_evidence; occurrence_event_id; concrete_row_id; physical_identity; formulation_or_species; phase; carbon_origin; particle_fraction; source_compartment; receiving_compartment; supply_or_handover_gate; provider_covered_cells; asset_component_event_and_lifecycle_phase; native_property; native_unit; measured_native_quantity; source_record_id; allocation_all_users; normalization_denominator; per_identity_amount_calculation; verification_evidence; unresolved_reason; occurrence_to_row_reconciliation; asset_or_reusable_id; model_configuration; included_initial_components; lifecycle_phase; manufacture_native_quantity; target_duty; all_user_same_cohort_lifetime_duty; replacement_event; provider_coverage_cells; applicability_decision_record; covered_concrete_rows; excluded_occurrence_reason; completion_evidence; observed_quantity_state; conversion_or_allocation_evidence; supply_or_service_gate; accepted_service_demand; provider_functional_unit; provider_intensity_basis; covered_lifecycle_stages | 真实兼容冷藏铁路车厢总成，声明车体转向架轮制动保温制冷初充范围，不替代为道路冷藏车或联运集装箱。已含初始部件与整车互斥。 本范围是必须落实的身份识别要求，不是交换流。使用原节点采集协议及其记录，先按真实身份、端口及独立功能拆分，再将保留的数量、基准及证据规则分别用于各兼容具体行。不得将异质身份合并数量或从总括名称推断原生属性单位。未发生须有证据，适用性或身份未知则阻止完成。 对本项规定的实体资产或周转品，核实供应交接点、初始部件以及实际替换、维护、清洗、失败和退役记录。租赁或综合供应合同须核实覆盖范围；本项包含已交付服务时按实际验收的原生需求计量，仅另行追溯未覆盖的资产阶段。直接建模资产按同队列目标作业量与全用户有据正寿命作业量之比分配，禁止将整个设施归给一个服务。 已明确分支（仅按实际适用记录启用）：refrigerated_railcar_assembly_manufacture. 每项适用性判断须留证。经证实不发生仅关闭所述范围和时段，缺记录仍未解决。发生的要求须将全部事件映射到具体row ID及相容原生数量，或精确映射至已覆盖行和供应方责任，并逐项说明排除理由。证据须覆盖身份、支持单位、计算、原始记录及全部去向；既有与新增分支对同一事件互斥覆盖，协议本身不作为交换。完成须无未分配事件、无重复覆盖、无相关数量或身份未决项。按有证据的实际分支采集原始字段。不适用的操作数须关联分支判定，适用但缺乏实测或依据的数量登记待决。 | 实体资产或周转品按已核实的制造或供应单位；同一队列的相容作业量；范围内的交付服务用其原生功能单位 | 每次真实事件及每项有证据的未发生判断 | 完整声明队列及归属资产寿命关联事件 | 仅本过程真实责任场所及供应方 | 先对账原生事件总量，仅汇总身份、状态、单位、交接点及期间均相容的量。按相应计算规则逐行核算一次：只分配仍共享的负担，目标总量仅除以同口径的正合格产出；等效每参考流数值原值沿用，零产出期间不作除法并保留处置记录。 | 实体资产按有记录的供应交接量乘目标作业量与同队列全用户正寿命作业量之比，保留配置、投运、更换及退役或剩余寿命记录。范围内如有已交付服务，按已核实原生强度乘相容交付需求，留存覆盖凭据，未覆盖阶段单列。 若实体资产按 物品数量 / Item(s) 计量，保留实测供应量，寿命作业量另记单位。 对该交接点相容的资产量或已独立核实的服务结果，仅在数量的归属和归一化状态与下式前提匹配时使用该规则：attributed_reefer_car_manufacture_items / T 保留原始凭据、实际采用的系数和结果单位。数值来源模式：calculated_value；适用范围：site_specific；归一化基准：每声明的参考流；基准类型：reference_flow；证据类型：calculated_from_collection；采集协议：cp_assets；来源：unsd-cpc3-65121; ghg-product-2011。须有原始记录、精确原生支持及逐具体行核验；这些规则不提供缺失身份或数值。 完成判据：check_occurrence_completion。 |
| cp_expand_rail_infrastructure_service | support_lifecycle | 必须展开身份 rail_infrastructure_service (inputs/product)：真实铁路基础设施生命周期服务 | collected_record | requirement_id=rail_infrastructure_service; process_id=support_lifecycle; required_direction=inputs; required_flow_type=product; original_collection_protocol=cp_assets; applicability_evidence; occurrence_event_id; concrete_row_id; physical_identity; formulation_or_species; phase; carbon_origin; particle_fraction; source_compartment; receiving_compartment; supply_or_handover_gate; provider_covered_cells; asset_component_event_and_lifecycle_phase; native_property; native_unit; measured_native_quantity; source_record_id; allocation_all_users; normalization_denominator; per_identity_amount_calculation; verification_evidence; unresolved_reason; occurrence_to_row_reconciliation; provider_contract; independent_function; provider_gates; native_functional_unit; delivered_quantity; covered_process_phase_cells; uncovered_foreground_rows; applicability_decision_record; covered_concrete_rows; excluded_occurrence_reason; completion_evidence; observed_quantity_state; conversion_or_allocation_evidence; provider_functional_unit; accepted_service_demand; provider_intensity_basis; covered_service_stages | 明确技术运行供应端口的真实轨道编组场供电信号原生生命周期服务，钢轨截面本身不代表完整网络，供应方范围替代对应自营建设维护退役一次。 本范围是必须落实的身份识别要求，不是交换流。使用原节点采集协议及其记录，先按真实身份、端口及独立功能拆分，再将保留的数量、基准及证据规则分别用于各兼容具体行。不得将异质身份合并数量或从总括名称推断原生属性单位。未发生须有证据，适用性或身份未知则阻止完成。 以下采集条件仅限本项 inputs/product 的身份与交接点（真实铁路基础设施生命周期服务）。仅在本PCR范围内实际委托独立功能时启用。记录合同、交付服务功能、关口、原生功能单位、实际交付量及具体覆盖的过程和寿命阶段；逐项与自营活动比对，完整供应方或未覆盖前景活动仅计一次。不用金额、材料质量或假设件数替代真实功能；同一最终服务不通过外部最终产品供应方递归重复计入。 每项适用性判断须留证。经证实不发生仅关闭所述范围和时段，缺记录仍未解决。发生的要求须将全部事件映射到具体row ID及相容原生数量，或精确映射至已覆盖行和供应方责任，并逐项说明排除理由。证据须覆盖身份、支持单位、计算、原始记录及全部去向；既有与新增分支对同一事件互斥覆盖，协议本身不作为交换。完成须无未分配事件、无重复覆盖、无相关数量或身份未决项。按有证据的实际分支采集原始字段。不适用的操作数须关联分支判定，适用但缺乏实测或依据的数量登记待决。 | 已核实的合同交付功能单位；仅独立可计数且已验收的结果使用 Item(s) | 每次真实事件及每项有证据的未发生判断 | 完整声明队列及归属资产寿命关联事件 | 仅本过程真实责任场所及供应方 | 先对账原生事件总量，仅汇总身份、状态、单位、交接点及期间均相容的量。按相应计算规则逐行核算一次：只分配仍共享的负担，目标总量仅除以同口径的正合格产出；等效每参考流数值原值沿用，零产出期间不作除法并保留处置记录。 | 按指定交接点实际验收量计量。仅在单位强度换算为总负担时，以供应方强度乘同一原生单位的需求量。保留合同范围、验收、原生单位及覆盖阶段记录。仅按时间交付的功能以时长计量。 对按合同口径已验收的服务，仅在数量的归属和归一化状态与下式前提匹配时使用该规则：attributed_native_rail_network_service / T 保留原始凭据、实际采用的系数和结果单位。数值来源模式：calculated_value；适用范围：site_specific；归一化基准：每声明的参考流；基准类型：reference_flow；证据类型：calculated_from_collection；采集协议：cp_assets；来源：unsd-cpc3-65121; ghg-product-2011。须有原始记录、精确原生支持及逐具体行核验；这些规则不提供缺失身份或数值。 完成判据：check_occurrence_completion。 |
| cp_expand_railcar_wash_wastewater | support_lifecycle | 必须展开身份 railcar_wash_wastewater (outputs/waste)：收集的冷藏铁路车厢清洗废水 | collected_record | requirement_id=railcar_wash_wastewater; process_id=support_lifecycle; required_direction=outputs; required_flow_type=waste; original_collection_protocol=cp_support; applicability_evidence; occurrence_event_id; concrete_row_id; physical_identity; formulation_or_species; phase; carbon_origin; particle_fraction; source_compartment; receiving_compartment; supply_or_handover_gate; provider_covered_cells; asset_component_event_and_lifecycle_phase; native_property; native_unit; measured_native_quantity; source_record_id; allocation_all_users; normalization_denominator; per_identity_amount_calculation; verification_evidence; unresolved_reason; occurrence_to_row_reconciliation; waste_origin_event; material_or_true_mixture; moisture_basis; container_tare; opening_waste_stock; generated_waste; received_waste; handover_quantity; closing_waste_stock; onsite_treatment; receiver_id; applicability_decision_record; covered_concrete_rows; excluded_occurrence_reason; completion_evidence; observed_quantity_state; conversion_or_allocation_evidence | 各真实货物化学组成兼容车厢清洗收集流须有原生数量成分接收方，区分货物残留滞留蒸发水直接排放及废物处理服务，用自来水量不等于废水量。 本范围是必须落实的身份识别要求，不是交换流。使用原节点采集协议及其记录，先按真实身份、端口及独立功能拆分，再将保留的数量、基准及证据规则分别用于各兼容具体行。不得将异质身份合并数量或从总括名称推断原生属性单位。未发生须有证据，适用性或身份未知则阻止完成。 以下采集条件仅限本项 outputs/waste 的身份与交接点（收集的冷藏铁路车厢清洗废水）。本过程实际产生或接收所述废物时启用。记录材料或配方或真实共同收集混合物、干湿状态、容器皮重、来源事件、存量、交接关口及实际接收者；核对产生量+期初库存+接收量=交出量+期末库存+另列现场处理量。分收的不同废物分行，真实接收混合物可为一行，其组分仅作不可相加审计；有用回收、客户保留物与废物去向分开，不自动给替代抵扣。 每项适用性判断须留证。经证实不发生仅关闭所述范围和时段，缺记录仍未解决。发生的要求须将全部事件映射到具体row ID及相容原生数量，或精确映射至已覆盖行和供应方责任，并逐项说明排除理由。证据须覆盖身份、支持单位、计算、原始记录及全部去向；既有与新增分支对同一事件互斥覆盖，协议本身不作为交换。完成须无未分配事件、无重复覆盖、无相关数量或身份未决项。按有证据的实际分支采集原始字段。不适用的操作数须关联分支判定，适用但缺乏实测或依据的数量登记待决。 | 接收方验收的具体废物或实际混合收集物在实测状态下的原生数量 | 每次真实事件及每项有证据的未发生判断 | 完整声明队列及归属资产寿命关联事件 | 仅本过程真实责任场所及供应方 | 先对账原生事件总量，仅汇总身份、状态、单位、交接点及期间均相容的量。按相应计算规则逐行核算一次：只分配仍共享的负担，目标总量仅除以同口径的正合格产出；等效每参考流数值原值沿用，零产出期间不作除法并保留处置记录。 | 以接收记录核对产生、库存、场内处理和实测交付。混合物流量与组分测量分开；干湿基或质量体积换算须有相容组成或密度。接收转移和环境直排按不同交接点记录。 对上述具体身份及相容输入口径，仅在数量的归属和归一化状态与下式前提匹配时使用该规则：attributed_native_collected_railcar_wash / T 保留原始凭据、实际采用的系数和结果单位。数值来源模式：calculated_value；适用范围：site_specific；归一化基准：每声明的参考流；基准类型：reference_flow；证据类型：calculated_from_collection；采集协议：cp_support；来源：unsd-cpc3-65121; ghg-product-2011。须有原始记录、精确原生支持及逐具体行核验；这些规则不提供缺失身份或数值。 完成判据：check_occurrence_completion。 |

### 计算规则

| rule_id | 适用于 | formula_or_rule | inputs | output | source_ids |
| --- | --- | --- | --- | --- | --- |
| qualified_rail_work | 参考输出及货物区段台账 | T = sum(m_i_t * d_i_km)，按各合格验收交付货物份额的真实载货区段i求和；取送后使用该段真实货物净质量，排除机车车厢集装箱皮重。同一物理区段份额只出现一次，空驶静止失败货物份额无输出。 | m_i_t; d_i_km; accepted_portion_ids; cp_movement | T | ghg-product-2011 |
| normalize_rail_work | 除最终参考输出以外全部清单 | x_ref = sum(x_native_attributed) / T；T为同期间同组真实合格冷藏交付货物正周转量t*km，最终参考输出为1 tkm。 | x_native_attributed; T; cp_movement; cp_cold; cp_support; cp_assets | x_ref | ghg-product-2011 |
| exclusive_native_ledger | 各真实燃料制冷剂货物储能台账 | opening + receipts + inward_transfers = closing + actual_use_or_delivery + outward_transfers + measured_loss；去向互斥，内部回收保留期末或随后真实使用外送端口一次，不另加回收项。货物水分变化时，按每次观测湿质量水分闭合守恒干物质，水按真实添加滞留外送蒸发单列闭合，未知差额不推作泄漏。 | 实际原生库存; 接收; 转移; 实测 use_delivery_loss; cp_movement; cp_cold; cp_support | 已对账的原生计量台账 | ghg-product-2011 |

### 数据质量要求

| requirement_id | 适用于 | Requirement | evidence |
| --- | --- | --- | --- |
| native_traceability | 全部节点 | 逐真实交换保留签署质量路线质量验收计量原始记录、原生支撑端口同节点协议来源供应范围全用户分配及不确定性，未知仍不完整。 | 校准运单运营供应方及废物登记 |
| rail_cold_representativeness | 参考及冷藏保全 | 须有真实托运区段质量距离冷冻冷藏状态温度时间质量、列车车厢制冷技术调车空驶责任季节及供应方范围，单一设备示例不能定义统一车队行为。 | 真实行程链记录仪及兼容设备记录 |
| no_fabricated_ranges | 数量及方法 | 不提供统一燃料制冷载荷空驶比例排放系数制冷剂泄漏或寿命默认值，未来经验校验须有独立兼容样本，不能以本批最大值验证同批。数量身份缺失不是零。 | 完整性及独立来源登记 |

## 9. 验证规则

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| reference_work | 全部节点 | 核实专门冷藏车厢中的真实冷冻冷藏货物、各真实验收交付货物份额及载货区段质量距离、起讫端口及冷链质量时间。货物吨数排除机车车厢集装箱皮重。T为真实合格交付周转量，不是列车总重吨公里、车厢数量TEU、计费运力、静止时间或编组交接重复距离。 | ghg-product-2011 |
| cold_energy_balance | 全部节点 | 按设备期间核实真实机车与冷藏场站能源、全部供应转换储能回收端口、燃料库存使用泄漏及制冷剂初充补充库存回收真实泄漏。兼容真实运营指令及质量结果而非默认温度决定采集。未解释差额不能推作排放或货损。 | ghg-product-2011 |
| coverage_life | 全部节点 | 核对完整载货空驶调车编组场失败冷链责任、全部用户输出场址期间、供应方互斥范围及兼容同组正生命周期运行量。真实贡献场址归属分子及合格周转T先汇总再归一化，不无权重平均强度。供应端口资产寿命数量接收方未知仍不完整。 | ghg-product-2011 |
| identity_alignment | 全部节点 | 每项实施交换须有核实具体UUID原生属性单位状态端口介质。参考支撑身份独立于服务UUID。全部中英文功能画像字段、有序流卡规则协议、常数及来源须与规范生成投影对照，并披露跳过不确定检查。 | ghg-product-2011 |
| atomic_rail_movement | rail_movement | 拒绝将备选物料、独立供应资产服务、不同废物流、污染物种、碳源、相态、粒径或环境子介质合并成一个交换身份。本节点每项适用cp_expand_要求必须有发生或未发生记录及完整具体行清单，各行具有自身身份、端口、已核验UUID、原生属性单位、数量、原始记录、计算和唯一责任。供应方已含完整总成或真实收集混合物流仍按一个真实供应或收集身份，不虚构组分交换。不得将要求名称标识、NOx或VOC或PM总量、未明确的物理释放或异质清单绑定一个UUID。核对全部子行、原始事件、供应方已含单元及跨节点交接，不缺失当零、不重复计入。身份、适用性、数量或去向未知，均阻止完整前景包及最终TIDAS交换产出。PCR检查器不验证这些前景事实，须保留逐行证据供审查。 | ghg-product-2011 |
| atomic_reefer_preservation | reefer_preservation | 拒绝将备选物料、独立供应资产服务、不同废物流、污染物种、碳源、相态、粒径或环境子介质合并成一个交换身份。本节点每项适用cp_expand_要求必须有发生或未发生记录及完整具体行清单，各行具有自身身份、端口、已核验UUID、原生属性单位、数量、原始记录、计算和唯一责任。供应方已含完整总成或真实收集混合物流仍按一个真实供应或收集身份，不虚构组分交换。不得将要求名称标识、NOx或VOC或PM总量、未明确的物理释放或异质清单绑定一个UUID。核对全部子行、原始事件、供应方已含单元及跨节点交接，不缺失当零、不重复计入。身份、适用性、数量或去向未知，均阻止完整前景包及最终TIDAS交换产出。PCR检查器不验证这些前景事实，须保留逐行证据供审查。 | ghg-product-2011 |
| atomic_support_lifecycle | support_lifecycle | 拒绝将备选物料、独立供应资产服务、不同废物流、污染物种、碳源、相态、粒径或环境子介质合并成一个交换身份。本节点每项适用cp_expand_要求必须有发生或未发生记录及完整具体行清单，各行具有自身身份、端口、已核验UUID、原生属性单位、数量、原始记录、计算和唯一责任。供应方已含完整总成或真实收集混合物流仍按一个真实供应或收集身份，不虚构组分交换。不得将要求名称标识、NOx或VOC或PM总量、未明确的物理释放或异质清单绑定一个UUID。核对全部子行、原始事件、供应方已含单元及跨节点交接，不缺失当零、不重复计入。身份、适用性、数量或去向未知，均阻止完整前景包及最终TIDAS交换产出。PCR检查器不验证这些前景事实，须保留逐行证据供审查。 | ghg-product-2011 |
| check_occurrence_completion | 全部实际清单行和身份识别协议 | 保留适用性证据，将每个实际事件对应到具体清单行或已核实的供应方覆盖范围。判定未发生须有证据，未知项保留待决。按同一身份、状态、单位、期间和交接点核对期初、接收、期末及互斥去向。耗材领用账区分未用退回、内部领拨和合格、失败及返工作业的实际耗用。托管账或物料平衡采用期初库存＋外部接收＋配对内部接收＝期末库存＋配对内部发出＋对外交付且获接收的数量＋未用外退＋外送的已用物资或回收物＋外送废物＋直接排放＋本边界内消耗或转化量。身份在边界内生成时，将有证据的生成量或出生数计入该身份账的来源并关联原事件。在上层守恒物料或元素平衡中抵消内部转化和移交。每个事件只记一次，留存回收物计入期末，移交与耗用分别登记。按相容口径执行专用托管、相态、转化或元素规则；已作为转化量计入的物料，其后续产物不得再计入同一去向合计。独立计量各项，对未解释的差额追查并保留待决。实物总量与负担分配分别核算。共享原始负担采用 Q_raw × s / R，其中 s 为有证据的目标驱动量除以同池同期间全部适用用户的正驱动量总和。已归属的目标总量采用 Q_target / R，已与同一参考流等效的单位结果 q_ref 原值沿用。供应方单位强度先乘以按其原生单位实测的需求量。仅在另一个仍有共享负担的独立阶段另作分配。R 为同一队列、交接点和参考单位下的正值合格产出量。保留失败与部分完成作业的负担，禁止以此放大 R；零产出时保留负担及有证据的结转或最终处置。自有资产采用同队列全用户寿命作业量，并排除初始部件重复计算。外购服务仅替代有记录的覆盖阶段。适用的身份、数量、支持单位、去向或分配分母仍未决时，最终数据集仍不完整。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | secondary_dataset; background_dataset |
| downstream_use | 真实兼容冷藏车厢铁路货运接入货物供应链LCA |
| allowed_use | 可比货物净质量区段距离冷藏质量时间及真实牵引冷藏供应方生命周期边界 |
| excluded_use | 货物制造其他货运功能无据吨公里等价缺失责任当零或未核实最终交换 |
| required_metadata | 全部参考限定条件真实原生来源记录货物冷链去向能源归属供应端口分配及全用户寿命 |
| required_quality_disclosure | 未知身份数量方法适用域时空代表性失败拒收责任冷媒去向不确定性跳过检查 |
| update_trigger | 货物方法路线质量控制技术资产供应方变化或新增核实证据 |

## 11. 数据源

| source_id | type | reference | used_for |
| --- | --- | --- | --- |
| unsd-cpc3-65121 | official_guidance | UNSD CPC3.0 65121; https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | 专用冷藏铁路车厢完整冷冻冷藏货物，不提供数值参考规则 |
| ghg-product-2011 | standard | WRI/WBCSD Product Life Cycle Accounting and Reporting Standard2011,chapters6–10; https://ghgprotocol.org/sites/default/files/ghgp/standards/Product-Life-Cycle-Accounting-Reporting-Standard_041613.pdf | 边界数据分配原则，完整资产算法为本PCR声明选择 |
| up-reefer-operating-instructions | handbook | Union Pacific Refrigerated Unit Operating Instructions, updated2018-12-18; https://www.up.com/content/dam/upcom/migration/uprr/customers/documents/up-pdf-nativedocs/pdf-ship-q-reefer-car.pdf | 设备特定预处理测试冷却加热开门状态货物控制，不是统一设定 |
| bnsf-reefer-equipment | handbook | BNSF Refrigerated Boxcar equipment; https://www.bnsf.com/ship-with-bnsf/ways-of-shipping/equipment/refrigerated-boxcars.html | 仅真实冷藏车厢配置及货物问题；可变供应方规格不是统一尺寸载荷，也不单独证明制冷机组区分 |
| ipcc-mobile-2006 | official_guidance | IPCC2006 Guidelines Vol.2 Ch.3 Mobile Combustion railways; https://www.ipcc-nggip.iges.or.jp/public/2006gl/pdf/2_Volume2/V2_3_Ch3_Mobile_Combustion.pdf | 铁路燃烧活动物种方法问题，不采用通用排放系数 |

