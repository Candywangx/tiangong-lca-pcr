---
pcr_id: pcr.distributive-trade-services-accommodation-food-and-beverage-serving-ser-18ff339a.freight-transport-services.moving-services-of-household-furniture-and-household-goods
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 家庭家具及家居物品搬迁委托服务

## 1. 范围与适用性

覆盖家庭家具及家居物品搬迁，以及适用附属包装、搬运和室内移动，包括实际仅委托该附属服务的情况。动力公路承运、人力搬运、室内调位及真实吊装包装路线均保留；并非每次委托都需要所有分支。排除办公室家具设备搬迁（65119）、商品制造销售、无操作人员设备租赁、独立界定的处置仓储及无关快件普通货运输出。

声明一次真实服务委托及验收义务：物品清单、提取放置房间楼层、通道楼梯电梯条件，以及实际提供的包装保护拆装责任、质量和完成端口。完成可以是室内移动或包装交接，不要求公路行程或货运交付事件。不强制正值公里质量距离货车容量或包装件数。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.distributive-trade-services-accommodation-food-and-beverage-serving-ser-18ff339a.freight-transport-services.moving-services-of-household-furniture-and-household-goods |
| classification_refs | CPC 3.0 65115 |
| covered_products | 覆盖家庭家具及家居物品搬迁，以及适用附属包装、搬运和室内移动，包括实际仅委托该附属服务的情况。动力公路承运、人力搬运、室内调位及真实吊装包装路线均保留；并非每次委托都需要所有分支。排除办公室家具设备搬迁（65119）、商品制造销售、无操作人员设备租赁、独立界定的处置仓储及无关快件普通货运输出。 |
| excluded_products | 办公室家具设备搬迁65119；制造贸易；无操作人员租赁；无关货运；独立范围仓储处置 |
| representative_product | 已履行的家庭家具及家居物品搬迁服务委托 |
| production_route | 实际搬迁附属义务、条件包装搬运室内公路及设备供应生命周期 |
| market_state | 已验收履行的真实家庭服务义务 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| 功能对象（What） | 已履行的家庭家具及家居物品搬迁服务委托 |
| 数量（How much） | 1次已履行声明家庭搬迁或适用附属服务委托 |
| 质量（How well） | 清单物品、实际作业放置通行、保护状态、完成条件及范围 |
| 时间或周期（How long or cycle） | 实际约定委托，包括归属准备失败支持作业及资产期间 |
| reference_flow_link | completed_household_move |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 已履行的家庭家具及家居物品搬迁服务委托 |
| 参考流属性 | 物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` |
| 参考单位组 | 物品计数单位 `5beb6eed-33a9-47b8-9ede-1dfe8f679159` |
| 参考单位 | Item(s) |
| 必需限定信息 | household_item_inventory_condition_and_ownership; actual_engagement_obligation_and_completion; packing_carrying_inhouse_road_branch; actual_origin_placement_rooms_floors_access; actual_load_mass_volume_and_route_distance_when_applicable; protected_state_and_quality; period_and_positive_equivalent_N; duty_empty_failed_rework_and_other_users; internal_task_transfer_and_provider_scope; packaging_consumption_reuse_stock_and_fates; actual_equipment_asset_cohort_all_user_lifetime_duty; damage_return_discard_and_actual_receiving_media |

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| engagement_count | moving_engagement | 实际原生兼容属性 | 实际原生单位 | N 为按预设作业完成标准实际履行且等价的委托次数，须为正。一个委托有多辆车物品组到访阶段时不据此倍增。失败中止返工保留负荷但不增加第二次完成输出。包装单项室内公路等不同义务须分别报告或透明披露分布；计次服务不具普遍可比性。N=0 无有限强度。 |
| native_basis | moving_engagement | 实际原生兼容属性 | 实际原生单位 | 保留原始计次数量质量体积时间能量及不同角色。包装计次转质量须实际箱规格实测质量，路线公里不等于室内楼层房间移动。兼容kWh/MJ按核实单位支持换算；密度服务量寿命须真实证据。 |
| fate_basis | moving_engagement | 实际原生兼容属性 | 实际原生单位 | 区分物品损坏所有权转移弃置物料及直接排放；保留化合物与C/N/S、化石生物、颗粒物粒径及真实空气水土废物接收方。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 实际家庭物品清单状态及约定作业责任场址通行事实 |
| starting_condition_role | 保管作业事实，不代表资产零负荷或客户物品制造 |
| product_classification_scope | CPC 3.0 65115 |
| recursive_input_rule | 准确分包搬迁包装覆盖仅替换对应单元一次；内部包装作业不增加最终搬迁委托 |
| upstream_dataset_requirement | 真实物料设备服务原生身份端口期间有效服务量地域及供应覆盖 |
| disclosure | 实际分支、物品保管、设备包装生命周期、全部用户份额、失败及不确定性 |

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| scope | moving_engagement | 覆盖家庭家具及家居物品搬迁，以及适用附属包装、搬运和室内移动，包括实际仅委托该附属服务的情况。动力公路承运、人力搬运、室内调位及真实吊装包装路线均保留；并非每次委托都需要所有分支。排除办公室家具设备搬迁（65119）、商品制造销售、无操作人员设备租赁、独立界定的处置仓储及无关快件普通货运输出。 | unsd-cpc3-65115 |
| obligation | moving_engagement | 声明一次真实服务委托及验收义务：物品清单、提取放置房间楼层、通道楼梯电梯条件，以及实际提供的包装保护拆装责任、质量和完成端口。完成可以是室内移动或包装交接，不要求公路行程或货运交付事件。不强制正值公里质量距离货车容量或包装件数。 | unsd-cpc3-65115; ghg-product-2011 |
| custody | moving_engagement | 客户物品为保管库存，不是搬迁方购入制造投入。按物品和转移互斥核对期初保管加实际提取与验收交接、真实外发退回、弃置或释放及期末保管。损坏是状态，不自动成为处置或补产；保留真实修理退回弃置补供责任及全部失败返工作业。 | ghg-product-2011 |
| packing | household_packing | household_packing 为实际条件保护包装节点：声明原未包装或原已包装物品状态、实际包装保护后状态及交接。包装与原物品区分，复用消耗客户保留弃置去向互斥。内部作业输出只向 moving_engagement 转移一次；仅包装委托仍只有一个实际最终委托输出，不变成公路货运输出。承运搬运吊装仍为父节点搬迁责任，除另记包装操作外不归入包装活动。 | ghg-product-2011 |
| whole_duty | moving_engagement | 保留实际提供且因果归属的准备场址通行楼梯电梯搬运拆装保护、载货空驶调位失败重试、责任内暂存及事后清理。无默认公路距离包装配方搬运工时人力代谢食物或排放。moving_engagement 下实际动力技术差异改变燃料充电原生能源资产；实际包装技术差异改变本节点物料支持记录。 | ghg-product-2011 |
| assets_provider | moving_engagement | 覆盖真实车辆搬运吊装设备周转毯箱及责任内道路建筑通行车场场址资产的制造安装维护更换退役。原生制造数量仅支持已核实端口，并按同队列全部用户有效服务量分摊，不代表全生命周期服务。区分真实分包搬迁包装吊装承运处理供应覆盖，准确替换已覆盖单元一次，不重复总成初装部件或供应方前景负荷。 | ghg-product-2011 |
| atomic | moving_engagement | 各实际条件物料资产燃料服务废物污染物展开为独立行，含一个既有父过程、方向流类型、实际身份状态端口介质、原生单位数量、核实UUID或登记待核身份、父节点协议、来源及有依据计算。必需数量状态缺失表示不完整，不表示零。 | ghg-product-2011 |

## 6. 过程清单结构

每张清单流卡仅代表一个可独立识别的产品、物料配方、废物流、物质或供应服务，具有兼容的端口、属性和单位。完整供应总成或实际收集的混合物流可有一个身份，其已含组分不得另列重复交换。第8节cp_expand_协议是必须落实的身份识别要求，不得当作选定流或交换数量。逐项记录真实适用性，以独立行标识列出全部具体交换；完整保留适用范围，未发生须有证据。尚未展开或未知的要求属于不完整，不得当作零。改为采集协议不等于解决缺失身份，也不免除生命周期、分配、计量或边界义务。

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| moving_engagement | 家庭家具及家居物品搬迁委托服务 | required | 实际完整声明家庭委托，包括仅附属服务 | foreground | completed_household_move |
| household_packing | 家庭物品保护包装作业 | conditional | 委托内实际包装保护，否则无本节点数量 | foreground | packed_task |

### 过程：家庭家具及家居物品搬迁委托服务 (`moving_engagement`)

#### 输入

##### 产品流

###### 柴油 (`diesel`)

仅实际动力公路承运或辅助设备用柴油；货物与车辆燃料区分、牌号库存燃烧及供应端口覆盖须明确。室内或单独包装委托不要求柴油。

- 选定流：柴油 `9d258d75-6792-4f1c-9856-81602ed8f816`
- 流属性/单位：质量 / kg
- 数量规则：attributed_diesel_kg / N
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每声明的参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_energy`
- 来源：ghg-product-2011

###### 交流电 (`purchased_ac`)

计量真实车辆充电、升降设备或场站用电，保留原生供应或使用端口并拆分阶段。直流设备输出及内部回收能量另列。人力作业不强制用电。

- 选定流：交流电 `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- 流属性/单位：净热值 / MJ
- 数量规则：attributed_purchased_ac_MJ / N
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每声明的参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_energy`
- 来源：ghg-product-2011

###### 内部交接处已完成的家庭物品包装作业 (`packing_task_input`)

来自 household_packing/packed_task 的内部转移，使用相同转移ID、真实计次及包装状态。为阶段服务，不是新家居物品制造或第二个最终委托。包装不属于委托时无此转移。

- 选定流：内部交接处已完成的家庭物品包装作业
- 流属性/单位：物品数量 / Item(s)
- 数量规则：attributed_completed_packing_tasks / N
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每声明的参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_service`
- 来源：ghg-product-2011

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 已履行的家庭家具及家居物品搬迁服务委托 (`completed_household_move`)

已履行预先声明的家庭搬迁或适用附属包装搬运室内移动义务。必须记录完成条件、物品清单、房间楼层通行、保护状态质量、实际所需起讫距离及期间。不强制正值公路距离或交付货运质量。

- 选定流：已履行的家庭家具及家居物品搬迁服务委托
- 流属性/单位：物品数量 / Item(s)
- 数量规则：1 Item(s)
- 数值来源模式：`fixed_value`
- 适用范围：`site_specific`
- 归一化基准：每声明的参考流
- 基准类型：`reference_flow`
- 证据类型：`method_formula`
- 采集协议：`cp_service`
- 来源：ghg-product-2011

##### 废物流

###### 废润滑油 (`used_oil`)

仅产生点实际单独收集的废润滑油；保留真实去向及处理覆盖，不自动给予回收收益。

- 选定流：废润滑油 `55d93375-7f04-4166-b2a2-88ce929051a5`
- 流属性/单位：质量 / kg
- 数量规则：attributed_used_oil_kg / N
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每声明的参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_assets`
- 来源：ghg-product-2011

##### 基本流

###### 二氧化碳（化石源） (`fossil_co2`)

仅证据支持时使用实际化石源 CO2 向未特指空气子介质排放；实测或依据真实氧化化石碳证据建模。不设通用燃料因子；无燃烧的室内作业不强制排放。

- 选定流：二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 流属性/单位：质量 / kg
- 数量规则：attributed_fossil_CO2_kg / N
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每声明的参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_energy`
- 来源：ghg-product-2011

### 过程：家庭物品保护包装作业 (`household_packing`)

#### 输入

##### 产品流

###### 聚乙烯薄膜 (`pe_film`)

仅符合实际牌号形态的 PE 保护薄膜；只支持制造工厂端口，另补到包装场所的未覆盖交付。不得替代 PET 膜复合气泡膜胶带可复用毯或整套包装。

- 选定流：聚乙烯薄膜
- 流属性/单位：质量 / kg
- 数量规则：attributed_consumed_PE_film_kg / N
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每声明的参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_packing`
- 来源：ghg-product-2011

###### 家庭物品包装供应的瓦楞纸箱 (`corrugated_box`)

真实成品瓦楞箱规格及端口；采集箱数及实测质量。一次性消耗数量与周转队列寿命份额互斥；复用箱不在每个委托重新制造。

- 选定流：家庭物品包装供应的瓦楞纸箱
- 流属性/单位：质量 / kg
- 数量规则：attributed_consumed_or_life_share_box_kg / N
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每声明的参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_packing`
- 来源：ghg-product-2011

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 内部交接处已完成的家庭物品包装作业 (`packed_task`)

真实家庭物品包装作业在指定内部端口验收，保留原物品身份状态，除记录的包装外不改产品身份。与 packing_task_input 同转移ID同计数，为内部阶段作业而非最终服务计次或产品制造。

- 选定流：内部交接处已完成的家庭物品包装作业
- 流属性/单位：物品数量 / Item(s)
- 数量规则：attributed_completed_packing_tasks / N
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每声明的参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_packing`
- 来源：ghg-product-2011

##### 废物流

###### 住宅或搬家场站交接的废纸包装 (`discarded_paper_packaging_home_depot`)

实际在住宅或搬家场站废弃并单独收集纸包装时启用；保留等级、涂层、干湿状态、污染物和接收者，不相容独立纸流分别列行，塑料等分收包装为不同身份。客户保留包装及复用库存不是废物；本身份不是工厂关口废物。

- 选定流：住宅或搬家场站交接的废纸包装
- 流属性/单位：Mass / kg
- 数量规则：本关口实际交出净kg / N；核对产生量+期初废物库存+接收量=交出量+期末废物库存+有证据的现场处理。保留容器皮重、实际含水状态和接收路线，不自动给回收抵扣。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_packing`
- 来源：ghg-product-2011


##### 基本流

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| subdivide | moving_engagement | 按实际委托行程房间楼梯通行和包装作业拆分测量。列明共享资源的其他家庭商业搬迁及其他产品；办公室搬迁不属于本PCR输出，但仍为全部用户分配消费者。可直接拆分时避免分配。 | ghg-product-2011 |
| causal | moving_engagement | 不可分割负荷依据有证据因果工作量：搬运包装用真实时间通行设备作业；实际公路承运按有依据的区段载货空间质量距离约束。不设统一每户每件每公斤或收入份额。全部用户份额核对后归一化一次，不能确立物理因果时须论证并测试其他方法。 | ghg-product-2011 |
| reuse_life | moving_engagement | 周转箱毯器具队列采用真实有效周转或服务量、损耗、修理清洗、更换退役；在声明保管边界内，期初库存加购入及真实外部返还等于真实外发客户或其他边界转移、弃置、物理流失及全部保留地点的期末库存。内部领用归还只改变位置，不增加外部消耗；已布放但仍保管的器具仍属库存。新增制造寿命份额与已含周转器具供应服务互斥。不设统一次数，不将旧资产视为零负荷，不默认回收避免信用。 | ghg-product-2011 |
| normalize | moving_engagement | N 为按预设作业完成标准实际履行且等价的委托次数，须为正。一个委托有多辆车物品组到访阶段时不据此倍增。失败中止返工保留负荷但不增加第二次完成输出。包装单项室内公路等不同义务须分别报告或透明披露分布；计次服务不具普遍可比性。N=0 无有限强度。 | ghg-product-2011 |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_service | moving_engagement | 委托保管供应及内部作业接收 | collected_record | 委托ID；义务完成；物品清单状态；起讫放置房间楼层通行；真实分支；实际距离载荷；作业转移ID计次状态；失败返工；期初提取验收交接外发退回弃置释放期末保管；供应原生单位数量覆盖；全部用户；N | 使用家庭清单验收工单场址通行作业日志；预设完全部分完成及责任；连接各场址期间其他用户供应覆盖，唯一配对内部包装作业，物品保管闭合后先分配再归一化一次。 按参考计量口径汇总唯一且已验收的合格产出作为分母，单列不合格事件及其资源责任。参考量保持规定值，仅归属的清单总量除以正分母。本协议下其他清单行保留各自实物单位。 | Item(s); kg; m3; km; 实际原生单位 | 每实际事件作业服务量或资产变化 | 完整声明委托队列及关联支持资产期间 | 本节点各实际家庭场址设备队列责任供应方 | 每声明的参考流 | 校准工单原生供应范围库存验收及接收记录保存各实测操作数的来源及原生口径，注明实际采用的换算或归属依据，以及所供结果是否已按该参考流计量。 |
| cp_energy | moving_engagement | 实际能源与污染物种 | collected_record | 事件车辆设备ID；真实燃料计量期初采购期末转移燃烧泄漏；配方状态密度；能源端口阶段；原生单位；全部用户作业；物种介质测量或因子来源不确定性；排除另计包装 | 读取校准原生计量库存供应及作业记录；无发生证据时不为人力包装单项分支生成承运能源数量。以有依据测量模型碳平衡、全部用户分配及独立QA产生真实物种，归一化一次。 原始观测和对账总量保留其记录口径。负担行只分配仍共享的总量，已归属总量仅除以同队列、同交接点的正合格产出；已与该参考流等效的结果原值沿用。零产出时保留负担并记录去向。各项独立实测交付、排放及移交按各自交接点记录，负担按其适用规则分配。 | kg; MJ; 实际原生单位 | 每实际事件作业服务量或资产变化 | 完整声明委托队列及关联支持资产期间 | 本节点各实际家庭场址设备队列责任供应方 | 每声明的参考流 | 校准工单原生供应范围库存验收及接收记录保存各实测操作数的来源及原生口径，注明实际采用的换算或归属依据，以及所供结果是否已按该参考流计量。 |
| cp_assets | moving_engagement | 设备场址维护废物 | collected_record | 资产ID原生数量范围；队列；全部用户有效寿命服务量；归属服务量；制造安装维护更换退役期间；供应覆盖；废物身份接收方 | 使用真实资产服务量规格及供应生命周期边界；同队列有效服务量仅分摊已知原生制造覆盖。其他阶段补全一次，连接相关期间用户及真实废物去向，不设通用寿命。 原始观测和对账总量保留其记录口径。负担行只分配仍共享的总量，已归属总量仅除以同队列、同交接点的正合格产出；已与该参考流等效的结果原值沿用。零产出时保留负担并记录去向。各项独立实测交付、排放及移交按各自交接点记录，负担按其适用规则分配。 | Item(s); kg; 实际原生单位 | 每实际事件作业服务量或资产变化 | 完整声明委托队列及关联支持资产期间 | 本节点各实际家庭场址设备队列责任供应方 | 每声明的参考流 | 校准工单原生供应范围库存验收及接收记录保存各实测操作数的来源及原生口径，注明实际采用的换算或归属依据，以及所供结果是否已按该参考流计量。 |
| cp_packing | household_packing | 包装作业物料周转库存及去向 | collected_record | 作业转移ID；委托ID；原物品状态；保护状态验收；原生物料身份数量；纸箱计次实测质量；期初购入使用退回客户保留弃置流失期末库存；周转队列有效次数服务量；清洗修理更换去向；真实能源清洗剂；供应覆盖 | 使用包装工作表实测物料库存及配对交接验收。客户物品与包装分开，一次性消耗与周转队列制造寿命份额互斥。记录真实拒收去向、本节点支持数量及准确一一内部转移接收，先分配再归一化一次。 原始观测和对账总量保留其记录口径。负担行只分配仍共享的总量，已归属总量仅除以同队列、同交接点的正合格产出；已与该参考流等效的结果原值沿用。零产出时保留负担并记录去向。各项独立实测交付、排放及移交按各自交接点记录，负担按其适用规则分配。 | Item(s); kg; 实际原生单位 | 每实际事件作业服务量或资产变化 | 完整声明委托队列及关联支持资产期间 | 本节点各实际家庭场址设备队列责任供应方 | 每声明的参考流 | 校准工单原生供应范围库存验收及接收记录保存各实测操作数的来源及原生口径，注明实际采用的换算或归属依据，以及所供结果是否已按该参考流计量。 |
| cp_expand_other_energy | moving_engagement | 必须展开身份 other_energy (inputs/product)：家庭搬迁作业实际其他能源 | collected_record | requirement_id=other_energy; process_id=moving_engagement; required_direction=inputs; required_flow_type=product; original_collection_protocol=cp_energy; applicability_evidence; occurrence_event_id; concrete_row_id; physical_identity; formulation_or_species; phase; carbon_origin; particle_fraction; source_compartment; receiving_compartment; supply_or_handover_gate; provider_covered_cells; asset_component_event_and_lifecycle_phase; native_property; native_unit; measured_native_quantity; source_record_id; allocation_all_users; normalization_denominator; per_identity_amount_calculation; verification_evidence; unresolved_reason; occurrence_to_row_reconciliation; carrier_and_supply_state; meter_id; integrated_energy_or_power_time; fuel_as_received_quantity; heating_value_basis; supply_return_state; responsible_failure_and_readiness; complete_provider_exclusion; applicability_decision_record; covered_concrete_rows; excluded_occurrence_reason; completion_evidence; observed_quantity_state; conversion_or_allocation_evidence | 按实际非柴油燃料、热或直流投入的原生单位配方端口展开条件行；手工搬运家居物品不附加默认食物或劳动代谢交换。 本范围是必须落实的身份识别要求，不是交换流。使用原节点采集协议及其记录，先按真实身份、端口及独立功能拆分，再将保留的数量、基准及证据规则分别用于各兼容具体行。不得将异质身份合并数量或从总括名称推断原生属性单位。未发生须有证据，适用性或身份未知则阻止完成。 以下采集条件仅限本项 inputs/product 的身份与交接点（家庭搬迁作业实际其他能源）。存在未被完整供应方覆盖的实际计量电力、购入热冷或消耗燃料时启用。区分载能体、供应状态和独立仪表，燃料组成及收到基数量与有用热分别识别；积分能量不再乘时长，功率须有时间积分证据；燃料换能量须匹配实际热值基准，供热须有供回状态。纳入应分摊待机、空载、失败和返工职责；总表仅协调分项，不再次相加。 每项适用性判断须留证。经证实不发生仅关闭所述范围和时段，缺记录仍未解决。发生的要求须将全部事件映射到具体row ID及相容原生数量，或精确映射至已覆盖行和供应方责任，并逐项说明排除理由。证据须覆盖身份、支持单位、计算、原始记录及全部去向；既有与新增分支对同一事件互斥覆盖，协议本身不作为交换。完成须无未分配事件、无重复覆盖、无相关数量或身份未决项。按有证据的实际分支采集原始字段。不适用的操作数须关联分支判定，适用但缺乏实测或依据的数量登记待决。 | 实测交付状态下的载能体量；能量采用有记录的仪表或热值口径 | 每次真实事件及每项有证据的未发生判断 | 完整声明队列及归属资产寿命关联事件 | 仅本过程真实责任场所及供应方 | 先对账原生事件总量，仅汇总身份、状态、单位、交接点及期间均相容的量。按相应计算规则逐行核算一次：只分配仍共享的负担，目标总量仅除以同口径的正合格产出；等效每参考流数值原值沿用，零产出期间不作除法并保留处置记录。 | 保留仪表期间、供应状态及交接点。积分能量已含时长；仅在对应路线由功率和实测时长，或相容燃料量与有据热值计算能量。区分燃料提取、有用热冷交付及已覆盖的上游阶段。 对上述具体身份及相容输入口径，仅在数量的归属和归一化状态与下式前提匹配时使用该规则：attributed_native_energy / N 保留原始凭据、实际采用的系数和结果单位。数值来源模式：calculated_value；适用范围：site_specific；归一化基准：每声明的参考流；基准类型：reference_flow；证据类型：calculated_from_collection；采集协议：cp_energy；来源：ghg-product-2011。须有原始记录、精确原生支持及逐具体行核验；这些规则不提供缺失身份或数值。 完成判据：check_occurrence_completion。 |
| cp_expand_equipment_lifecycle | moving_engagement | 必须展开身份 equipment_lifecycle (inputs/product)：实际搬迁车辆或搬运设备生命周期投入 | collected_record | requirement_id=equipment_lifecycle; process_id=moving_engagement; required_direction=inputs; required_flow_type=product; original_collection_protocol=cp_assets; applicability_evidence; occurrence_event_id; concrete_row_id; physical_identity; formulation_or_species; phase; carbon_origin; particle_fraction; source_compartment; receiving_compartment; supply_or_handover_gate; provider_covered_cells; asset_component_event_and_lifecycle_phase; native_property; native_unit; measured_native_quantity; source_record_id; allocation_all_users; normalization_denominator; per_identity_amount_calculation; verification_evidence; unresolved_reason; occurrence_to_row_reconciliation; asset_or_reusable_id; model_configuration; included_initial_components; lifecycle_phase; manufacture_native_quantity; target_duty; all_user_same_cohort_lifetime_duty; replacement_event; provider_coverage_cells; applicability_decision_record; covered_concrete_rows; excluded_occurrence_reason; completion_evidence; observed_quantity_state; conversion_or_allocation_evidence; supply_or_service_gate; accepted_service_demand; provider_functional_unit; provider_intensity_basis; covered_lifecycle_stages | 按实际厢式车、货车、升降机、手推车、吊具、搬运车或部件服务分别展开条件要求。总成与已含初装部件互斥；同资产原生制造量按服务量分摊，补全未覆盖安装维护更换退役。 本范围是必须落实的身份识别要求，不是交换流。使用原节点采集协议及其记录，先按真实身份、端口及独立功能拆分，再将保留的数量、基准及证据规则分别用于各兼容具体行。不得将异质身份合并数量或从总括名称推断原生属性单位。未发生须有证据，适用性或身份未知则阻止完成。 对本项规定的实体资产或周转品，核实供应交接点、初始部件以及实际替换、维护、清洗、失败和退役记录。租赁或综合供应合同须核实覆盖范围；本项包含已交付服务时按实际验收的原生需求计量，仅另行追溯未覆盖的资产阶段。直接建模资产按同队列目标作业量与全用户有据正寿命作业量之比分配，禁止将整个设施归给一个服务。 每项适用性判断须留证。经证实不发生仅关闭所述范围和时段，缺记录仍未解决。发生的要求须将全部事件映射到具体row ID及相容原生数量，或精确映射至已覆盖行和供应方责任，并逐项说明排除理由。证据须覆盖身份、支持单位、计算、原始记录及全部去向；既有与新增分支对同一事件互斥覆盖，协议本身不作为交换。完成须无未分配事件、无重复覆盖、无相关数量或身份未决项。按有证据的实际分支采集原始字段。不适用的操作数须关联分支判定，适用但缺乏实测或依据的数量登记待决。 | 实体资产或周转品按已核实的制造或供应单位；同一队列的相容作业量；范围内的交付服务用其原生功能单位 | 每次真实事件及每项有证据的未发生判断 | 完整声明队列及归属资产寿命关联事件 | 仅本过程真实责任场所及供应方 | 先对账原生事件总量，仅汇总身份、状态、单位、交接点及期间均相容的量。按相应计算规则逐行核算一次：只分配仍共享的负担，目标总量仅除以同口径的正合格产出；等效每参考流数值原值沿用，零产出期间不作除法并保留处置记录。 | 实体资产按有记录的供应交接量乘目标作业量与同队列全用户正寿命作业量之比，保留配置、投运、更换及退役或剩余寿命记录。范围内如有已交付服务，按已核实原生强度乘相容交付需求，留存覆盖凭据，未覆盖阶段单列。 对该交接点相容的资产量或已独立核实的服务结果，仅在数量的归属和归一化状态与下式前提匹配时使用该规则：attributed_native_equipment_quantity / N 保留原始凭据、实际采用的系数和结果单位。数值来源模式：calculated_value；适用范围：site_specific；归一化基准：每声明的参考流；基准类型：reference_flow；证据类型：calculated_from_collection；采集协议：cp_assets；来源：ghg-product-2011。须有原始记录、精确原生支持及逐具体行核验；这些规则不提供缺失身份或数值。 完成判据：check_occurrence_completion。 |
| cp_expand_infrastructure | moving_engagement | 必须展开身份 infrastructure (inputs/product)：实际搬迁服务道路或场址基础设施投入 | collected_record | requirement_id=infrastructure; process_id=moving_engagement; required_direction=inputs; required_flow_type=product; original_collection_protocol=cp_assets; applicability_evidence; occurrence_event_id; concrete_row_id; physical_identity; formulation_or_species; phase; carbon_origin; particle_fraction; source_compartment; receiving_compartment; supply_or_handover_gate; provider_covered_cells; asset_component_event_and_lifecycle_phase; native_property; native_unit; measured_native_quantity; source_record_id; allocation_all_users; normalization_denominator; per_identity_amount_calculation; verification_evidence; unresolved_reason; occurrence_to_row_reconciliation; asset_or_reusable_id; model_configuration; included_initial_components; lifecycle_phase; manufacture_native_quantity; target_duty; all_user_same_cohort_lifetime_duty; replacement_event; provider_coverage_cells; applicability_decision_record; covered_concrete_rows; excluded_occurrence_reason; completion_evidence; ownership_mode; provider_native_unit; actual_delivered_demand; coverage_stage; attribution_state; observed_quantity_state; conversion_or_allocation_evidence; supply_or_service_gate; accepted_service_demand; provider_functional_unit; provider_intensity_basis; covered_lifecycle_stages | 按原生范围、全部用户期间服务量及供应覆盖，分别展开实际道路车场装卸场址或建筑通行设施服务资产。室内搬迁不产生虚构公路区段。 本范围是必须落实的身份识别要求，不是交换流。使用原节点采集协议及其记录，先按真实身份、端口及独立功能拆分，再将保留的数量、基准及证据规则分别用于各兼容具体行。不得将异质身份合并数量或从总括名称推断原生属性单位。未发生须有证据，适用性或身份未知则阻止完成。 识别实际实体资产、周转品或已交付的生命周期服务，登记配置、场址、期间、责任方、队列及覆盖阶段。外购服务按供应方已核实的每原生功能单位强度乘相容交付需求；仅对尚未归属的负担应用目标份额，仅对尚未归一化的目标总量除以相应正参考产出。不得再计该服务已含的制造。自建或购入的实体资产按制造量乘以目标作业量与同资产队列全用户完整寿命正作业量之比，再按匹配合格产出归一化一次。逐事件追踪初始部件、增配、更换、空闲或失败使用、修理、清洗及退役。混合覆盖时每个缺口阶段独立承接一次；保留发票、资产台账、作业和覆盖记录，禁止假定通用寿命或服务单位。 每项适用性判断须留证。经证实不发生仅关闭所述范围和时段，缺记录仍未解决。发生的要求须将全部事件映射到具体row ID及相容原生数量，或精确映射至已覆盖行和供应方责任，并逐项说明排除理由。证据须覆盖身份、支持单位、计算、原始记录及全部去向；既有与新增分支对同一事件互斥覆盖，协议本身不作为交换。完成须无未分配事件、无重复覆盖、无相关数量或身份未决项。按有证据的实际分支采集原始字段。仅属于不适用分支的字段须注明理由；适用分支缺少的计量仍须登记待决。 | 实体资产或周转品按已核实的制造或供应单位；同一队列的相容作业量；范围内的交付服务用其原生功能单位 | 每次真实事件及每项有证据的未发生判断 | 完整声明队列及归属资产寿命关联事件 | 仅本过程真实责任场所及供应方 | 先对账原生事件总量，仅汇总身份、状态、单位、交接点及期间均相容的量。按相应计算规则逐行核算一次：只分配仍共享的负担，目标总量仅除以同口径的正合格产出；等效每参考流数值原值沿用，零产出期间不作除法并保留处置记录。 | 实体资产按有记录的供应交接量乘目标作业量与同队列全用户正寿命作业量之比，保留配置、投运、更换及退役或剩余寿命记录。范围内如有已交付服务，按已核实原生强度乘相容交付需求，留存覆盖凭据，未覆盖阶段单列。 对该交接点相容的资产量或已独立核实的服务结果，仅在数量的归属和归一化状态与下式前提匹配时使用该规则：attributed_native_site_quantity / N 保留原始凭据、实际采用的系数和结果单位。数值来源模式：calculated_value；适用范围：site_specific；归一化基准：每声明的参考流；基准类型：reference_flow；证据类型：calculated_from_collection；采集协议：cp_assets；来源：ghg-product-2011。须有原始记录、精确原生支持及逐具体行核验；这些规则不提供缺失身份或数值。 完成判据：check_occurrence_completion。 |
| cp_expand_provider_service | moving_engagement | 必须展开身份 provider_service (inputs/product)：实际独立供应的搬迁辅助服务 | collected_record | requirement_id=provider_service; process_id=moving_engagement; required_direction=inputs; required_flow_type=product; original_collection_protocol=cp_service; applicability_evidence; occurrence_event_id; concrete_row_id; physical_identity; formulation_or_species; phase; carbon_origin; particle_fraction; source_compartment; receiving_compartment; supply_or_handover_gate; provider_covered_cells; asset_component_event_and_lifecycle_phase; native_property; native_unit; measured_native_quantity; source_record_id; allocation_all_users; normalization_denominator; per_identity_amount_calculation; verification_evidence; unresolved_reason; occurrence_to_row_reconciliation; provider_contract; independent_function; provider_gates; native_functional_unit; delivered_quantity; covered_process_phase_cells; uncovered_foreground_rows; applicability_decision_record; covered_concrete_rows; excluded_occurrence_reason; completion_evidence; observed_quantity_state; conversion_or_allocation_evidence; provider_functional_unit; accepted_service_demand; provider_intensity_basis; covered_service_stages | 按真实功能及原生覆盖分别展开分包搬迁、承运、通行吊装、存放或处理服务。独立销售的仓储不暗作搬迁输出；责任内暂存仍须覆盖。 本范围是必须落实的身份识别要求，不是交换流。使用原节点采集协议及其记录，先按真实身份、端口及独立功能拆分，再将保留的数量、基准及证据规则分别用于各兼容具体行。不得将异质身份合并数量或从总括名称推断原生属性单位。未发生须有证据，适用性或身份未知则阻止完成。 以下采集条件仅限本项 inputs/product 的身份与交接点（实际独立供应的搬迁辅助服务）。仅在本PCR范围内实际委托独立功能时启用。记录合同、交付服务功能、关口、原生功能单位、实际交付量及具体覆盖的过程和寿命阶段；逐项与自营活动比对，完整供应方或未覆盖前景活动仅计一次。不用金额、材料质量或假设件数替代真实功能；同一最终服务不通过外部最终产品供应方递归重复计入。 每项适用性判断须留证。经证实不发生仅关闭所述范围和时段，缺记录仍未解决。发生的要求须将全部事件映射到具体row ID及相容原生数量，或精确映射至已覆盖行和供应方责任，并逐项说明排除理由。证据须覆盖身份、支持单位、计算、原始记录及全部去向；既有与新增分支对同一事件互斥覆盖，协议本身不作为交换。完成须无未分配事件、无重复覆盖、无相关数量或身份未决项。按有证据的实际分支采集原始字段。不适用的操作数须关联分支判定，适用但缺乏实测或依据的数量登记待决。 | 已核实的合同交付功能单位；仅独立可计数且已验收的结果使用 Item(s) | 每次真实事件及每项有证据的未发生判断 | 完整声明队列及归属资产寿命关联事件 | 仅本过程真实责任场所及供应方 | 先对账原生事件总量，仅汇总身份、状态、单位、交接点及期间均相容的量。按相应计算规则逐行核算一次：只分配仍共享的负担，目标总量仅除以同口径的正合格产出；等效每参考流数值原值沿用，零产出期间不作除法并保留处置记录。 | 按指定交接点实际验收量计量。仅在单位强度换算为总负担时，以供应方强度乘同一原生单位的需求量。保留合同范围、验收、原生单位及覆盖阶段记录。仅按时间交付的功能以时长计量。 对按合同口径已验收的服务，仅在数量的归属和归一化状态与下式前提匹配时使用该规则：attributed_native_provider_quantity / N 保留原始凭据、实际采用的系数和结果单位。数值来源模式：calculated_value；适用范围：site_specific；归一化基准：每声明的参考流；基准类型：reference_flow；证据类型：calculated_from_collection；采集协议：cp_service；来源：ghg-product-2011。须有原始记录、精确原生支持及逐具体行核验；这些规则不提供缺失身份或数值。 完成判据：check_occurrence_completion。 |
| cp_expand_discarded_household_item | moving_engagement | 必须展开身份 discarded_household_item (outputs/waste)：搬迁方责任内实际弃置的家庭物品 | collected_record | requirement_id=discarded_household_item; process_id=moving_engagement; required_direction=outputs; required_flow_type=waste; original_collection_protocol=cp_service; applicability_evidence; occurrence_event_id; concrete_row_id; physical_identity; formulation_or_species; phase; carbon_origin; particle_fraction; source_compartment; receiving_compartment; supply_or_handover_gate; provider_covered_cells; asset_component_event_and_lifecycle_phase; native_property; native_unit; measured_native_quantity; source_record_id; allocation_all_users; normalization_denominator; per_identity_amount_calculation; verification_evidence; unresolved_reason; occurrence_to_row_reconciliation; waste_origin_event; material_or_true_mixture; moisture_basis; container_tare; opening_waste_stock; generated_waste; received_waste; handover_quantity; closing_waste_stock; onsite_treatment; receiver_id; applicability_decision_record; covered_concrete_rows; excluded_occurrence_reason; completion_evidence; observed_quantity_state; conversion_or_allocation_evidence | 仅本委托内有记录且实际弃置的损坏或不需要物品；每行一种真实物料物品及接收方。退回或保留客户物品仍为保管库存，不是废物或制造投入。独立委托清运另定范围。 本范围是必须落实的身份识别要求，不是交换流。使用原节点采集协议及其记录，先按真实身份、端口及独立功能拆分，再将保留的数量、基准及证据规则分别用于各兼容具体行。不得将异质身份合并数量或从总括名称推断原生属性单位。未发生须有证据，适用性或身份未知则阻止完成。 以下采集条件仅限本项 outputs/waste 的身份与交接点（搬迁方责任内实际弃置的家庭物品）。本过程实际产生或接收所述废物时启用。记录材料或配方或真实共同收集混合物、干湿状态、容器皮重、来源事件、存量、交接关口及实际接收者；核对产生量+期初库存+接收量=交出量+期末库存+另列现场处理量。分收的不同废物分行，真实接收混合物可为一行，其组分仅作不可相加审计；有用回收、客户保留物与废物去向分开，不自动给替代抵扣。 每项适用性判断须留证。经证实不发生仅关闭所述范围和时段，缺记录仍未解决。发生的要求须将全部事件映射到具体row ID及相容原生数量，或精确映射至已覆盖行和供应方责任，并逐项说明排除理由。证据须覆盖身份、支持单位、计算、原始记录及全部去向；既有与新增分支对同一事件互斥覆盖，协议本身不作为交换。完成须无未分配事件、无重复覆盖、无相关数量或身份未决项。按有证据的实际分支采集原始字段。不适用的操作数须关联分支判定，适用但缺乏实测或依据的数量登记待决。 | 接收方验收的具体废物或实际混合收集物在实测状态下的原生数量 | 每次真实事件及每项有证据的未发生判断 | 完整声明队列及归属资产寿命关联事件 | 仅本过程真实责任场所及供应方 | 先对账原生事件总量，仅汇总身份、状态、单位、交接点及期间均相容的量。按相应计算规则逐行核算一次：只分配仍共享的负担，目标总量仅除以同口径的正合格产出；等效每参考流数值原值沿用，零产出期间不作除法并保留处置记录。 | 以接收记录核对产生、库存、场内处理和实测交付。混合物流量与组分测量分开；干湿基或质量体积换算须有相容组成或密度。接收转移和环境直排按不同交接点记录。 对上述具体身份及相容输入口径，仅在数量的归属和归一化状态与下式前提匹配时使用该规则：attributed_actual_discarded_quantity / N 保留原始凭据、实际采用的系数和结果单位。数值来源模式：calculated_value；适用范围：site_specific；归一化基准：每声明的参考流；基准类型：reference_flow；证据类型：calculated_from_collection；采集协议：cp_service；来源：ghg-product-2011。须有原始记录、精确原生支持及逐具体行核验；这些规则不提供缺失身份或数值。 完成判据：check_occurrence_completion。 |
| cp_expand_other_equipment_waste | moving_engagement | 必须展开身份 other_equipment_waste (outputs/waste)：实际搬迁设备维护或退役废物 | collected_record | requirement_id=other_equipment_waste; process_id=moving_engagement; required_direction=outputs; required_flow_type=waste; original_collection_protocol=cp_assets; applicability_evidence; occurrence_event_id; concrete_row_id; physical_identity; formulation_or_species; phase; carbon_origin; particle_fraction; source_compartment; receiving_compartment; supply_or_handover_gate; provider_covered_cells; asset_component_event_and_lifecycle_phase; native_property; native_unit; measured_native_quantity; source_record_id; allocation_all_users; normalization_denominator; per_identity_amount_calculation; verification_evidence; unresolved_reason; occurrence_to_row_reconciliation; waste_origin_event; material_or_true_mixture; moisture_basis; container_tare; opening_waste_stock; generated_waste; received_waste; handover_quantity; closing_waste_stock; onsite_treatment; receiver_id; applicability_decision_record; covered_concrete_rows; excluded_occurrence_reason; completion_evidence; observed_quantity_state; conversion_or_allocation_evidence | 分别展开真实废轮胎电池损坏搬运器具或部件及去向，避免重复资产退役或供应方处理。 本范围是必须落实的身份识别要求，不是交换流。使用原节点采集协议及其记录，先按真实身份、端口及独立功能拆分，再将保留的数量、基准及证据规则分别用于各兼容具体行。不得将异质身份合并数量或从总括名称推断原生属性单位。未发生须有证据，适用性或身份未知则阻止完成。 以下采集条件仅限本项 outputs/waste 的身份与交接点（实际搬迁设备维护或退役废物）。本过程实际产生或接收所述废物时启用。记录材料或配方或真实共同收集混合物、干湿状态、容器皮重、来源事件、存量、交接关口及实际接收者；核对产生量+期初库存+接收量=交出量+期末库存+另列现场处理量。分收的不同废物分行，真实接收混合物可为一行，其组分仅作不可相加审计；有用回收、客户保留物与废物去向分开，不自动给替代抵扣。 每项适用性判断须留证。经证实不发生仅关闭所述范围和时段，缺记录仍未解决。发生的要求须将全部事件映射到具体row ID及相容原生数量，或精确映射至已覆盖行和供应方责任，并逐项说明排除理由。证据须覆盖身份、支持单位、计算、原始记录及全部去向；既有与新增分支对同一事件互斥覆盖，协议本身不作为交换。完成须无未分配事件、无重复覆盖、无相关数量或身份未决项。按有证据的实际分支采集原始字段。不适用的操作数须关联分支判定，适用但缺乏实测或依据的数量登记待决。 | 接收方验收的具体废物或实际混合收集物在实测状态下的原生数量 | 每次真实事件及每项有证据的未发生判断 | 完整声明队列及归属资产寿命关联事件 | 仅本过程真实责任场所及供应方 | 先对账原生事件总量，仅汇总身份、状态、单位、交接点及期间均相容的量。按相应计算规则逐行核算一次：只分配仍共享的负担，目标总量仅除以同口径的正合格产出；等效每参考流数值原值沿用，零产出期间不作除法并保留处置记录。 | 以接收记录核对产生、库存、场内处理和实测交付。混合物流量与组分测量分开；干湿基或质量体积换算须有相容组成或密度。接收转移和环境直排按不同交接点记录。 对上述具体身份及相容输入口径，仅在数量的归属和归一化状态与下式前提匹配时使用该规则：attributed_native_equipment_waste / N 保留原始凭据、实际采用的系数和结果单位。数值来源模式：calculated_value；适用范围：site_specific；归一化基准：每声明的参考流；基准类型：reference_flow；证据类型：calculated_from_collection；采集协议：cp_assets；来源：ghg-product-2011。须有原始记录、精确原生支持及逐具体行核验；这些规则不提供缺失身份或数值。 完成判据：check_occurrence_completion。 |
| cp_expand_other_emissions | moving_engagement | 必须展开身份 other_emissions (outputs/elementary)：实际搬迁作业污染物种 | collected_record | requirement_id=other_emissions; process_id=moving_engagement; required_direction=outputs; required_flow_type=elementary; original_collection_protocol=cp_energy; applicability_evidence; occurrence_event_id; concrete_row_id; physical_identity; formulation_or_species; phase; carbon_origin; particle_fraction; source_compartment; receiving_compartment; supply_or_handover_gate; provider_covered_cells; asset_component_event_and_lifecycle_phase; native_property; native_unit; measured_native_quantity; source_record_id; allocation_all_users; normalization_denominator; per_identity_amount_calculation; verification_evidence; unresolved_reason; occurrence_to_row_reconciliation; substance_identity; chemical_form; environmental_compartment; carbon_origin; particle_fraction_or_count_basis; measured_or_calculated_release; species_conversion_evidence; applicability_decision_record; covered_concrete_rows; excluded_occurrence_reason; completion_evidence; observed_quantity_state; conversion_or_allocation_evidence | 条件记录真实尾气磨损制冷剂或清洗化学品释放；各展开行一种化合物粒径来源及接收子介质，依据真实测量模型，不用通用污染物混合桶。 本范围是必须落实的身份识别要求，不是交换流。使用原节点采集协议及其记录，先按真实身份、端口及独立功能拆分，再将保留的数量、基准及证据规则分别用于各兼容具体行。不得将异质身份合并数量或从总括名称推断原生属性单位。未发生须有证据，适用性或身份未知则阻止完成。 以下采集条件仅限本项 outputs/elementary 的身份与交接点（实际搬迁作业污染物种）。仅对进入已记录接收介质且有观测或适用计算依据的实际释放启用。记录具体物质及形态、来源或接收介质、适用的化石或生物碳来源、适用的粒径组分或粒子数粒径基础及采样期；保留元素与分子口径，换算须有化学计量和相容物种证据。收集物流中的污染物在实际环境排放边界前归接收物流，不用CO2、NOx、VOC、COD或泛颗粒物流代替缺失物种。 每项适用性判断须留证。经证实不发生仅关闭所述范围和时段，缺记录仍未解决。发生的要求须将全部事件映射到具体row ID及相容原生数量，或精确映射至已覆盖行和供应方责任，并逐项说明排除理由。证据须覆盖身份、支持单位、计算、原始记录及全部去向；既有与新增分支对同一事件互斥覆盖，协议本身不作为交换。完成须无未分配事件、无重复覆盖、无相关数量或身份未决项。按有证据的实际分支采集原始字段。不适用的操作数须关联分支判定，适用但缺乏实测或依据的数量登记待决。 | 本物质、资源或物理排放在实际环境介质的已核实原生属性与单位 | 每次真实事件及每项有证据的未发生判断 | 完整声明队列及归属资产寿命关联事件 | 仅本过程真实责任场所及供应方 | 先对账原生事件总量，仅汇总身份、状态、单位、交接点及期间均相容的量。按相应计算规则逐行核算一次：只分配仍共享的负担，目标总量仅除以同口径的正合格产出；等效每参考流数值原值沿用，零产出期间不作除法并保留处置记录。 | 采样或活动量及适用因子须对应物种、相态、来源和环境介质。按实际对象区分质量、粒子数、热量及元素当量；换算须有依据，重叠总量不可相加。 对规定采用 质量 / kg 的行，核实实测口径或向该口径的换算。 对上述具体身份及相容输入口径，仅在数量的归属和归一化状态与下式前提匹配时使用该规则：attributed_supported_species_kg / N 保留原始凭据、实际采用的系数和结果单位。数值来源模式：calculated_value；适用范围：site_specific；归一化基准：每声明的参考流；基准类型：reference_flow；证据类型：calculated_from_collection；采集协议：cp_energy；来源：ghg-product-2011。须有原始记录、精确原生支持及逐具体行核验；这些规则不提供缺失身份或数值。 完成判据：check_occurrence_completion。 |
| cp_expand_other_pack_material | household_packing | 必须展开身份 other_pack_material (inputs/product)：实际其他保护包装材料或周转器具 | collected_record | requirement_id=other_pack_material; process_id=household_packing; required_direction=inputs; required_flow_type=product; original_collection_protocol=cp_packing; applicability_evidence; occurrence_event_id; concrete_row_id; physical_identity; formulation_or_species; phase; carbon_origin; particle_fraction; source_compartment; receiving_compartment; supply_or_handover_gate; provider_covered_cells; asset_component_event_and_lifecycle_phase; native_property; native_unit; measured_native_quantity; source_record_id; allocation_all_users; normalization_denominator; per_identity_amount_calculation; verification_evidence; unresolved_reason; occurrence_to_row_reconciliation; operation_record; material_sku; formulation_grade_state; independent_function; supplier; package_tare; opening_stock; net_receipts; unused_returns; closing_stock; failed_use; destination; applicability_decision_record; covered_concrete_rows; excluded_occurrence_reason; completion_evidence; observed_quantity_state; conversion_or_allocation_evidence | 实际胶带衬垫毯周转箱绑带或内衬分别展开。区分消耗库存与循环周转器具，记录真实寿命使用清洗损坏流失及终末去向，不设通用周转次数。 本范围是必须落实的身份识别要求，不是交换流。使用原节点采集协议及其记录，先按真实身份、端口及独立功能拆分，再将保留的数量、基准及证据规则分别用于各兼容具体行。不得将异质身份合并数量或从总括名称推断原生属性单位。未发生须有证据，适用性或身份未知则阻止完成。 以下采集条件仅限本项 inputs/product 的身份与交接点（实际其他保护包装材料或周转器具）。仅对实际发生的所述作业及独立消耗SKU或实物启用。记录材料或配方、等级状态、功能、供应方、扣包装皮重后的净量、库存变动、未用退回和去向。独立供应的包装衬材按材料及一次性或复用状态区分；完整配方或物理总成保留一个身份，组成信息不相加，不同外购品不得共用汇总数量。纳入失败使用、维护及返工，记录真实消耗而非仅采购量。 每项适用性判断须留证。经证实不发生仅关闭所述范围和时段，缺记录仍未解决。发生的要求须将全部事件映射到具体row ID及相容原生数量，或精确映射至已覆盖行和供应方责任，并逐项说明排除理由。证据须覆盖身份、支持单位、计算、原始记录及全部去向；既有与新增分支对同一事件互斥覆盖，协议本身不作为交换。完成须无未分配事件、无重复覆盖、无相关数量或身份未决项。按有证据的实际分支采集原始字段。不适用的操作数须关联分支判定，适用但缺乏实测或依据的数量登记待决。 | 实际品项、配方或物件在规定交接点及状态下的原生数量 | 每次真实事件及每项有证据的未发生判断 | 完整声明队列及归属资产寿命关联事件 | 仅本过程真实责任场所及供应方 | 先对账原生事件总量，仅汇总身份、状态、单位、交接点及期间均相容的量。按相应计算规则逐行核算一次：只分配仍共享的负担，目标总量仅除以同口径的正合格产出；等效每参考流数值原值沿用，零产出期间不作除法并保留处置记录。 | 逐批核对收货、期初期末、退回、耗用及互斥去向。件数或体积折质量须有单件质量或相容状态密度依据；产品身份以外的包装和衬材独立登记。 对上述具体身份及相容输入口径，仅在数量的归属和归一化状态与下式前提匹配时使用该规则：attributed_native_pack_quantity / N 保留原始凭据、实际采用的系数和结果单位。数值来源模式：calculated_value；适用范围：site_specific；归一化基准：每声明的参考流；基准类型：reference_flow；证据类型：calculated_from_collection；采集协议：cp_packing；来源：ghg-product-2011。须有原始记录、精确原生支持及逐具体行核验；这些规则不提供缺失身份或数值。 完成判据：check_occurrence_completion。 |
| cp_expand_packing_energy | household_packing | 必须展开身份 packing_energy (inputs/product)：实际包装作业能源或清洗投入 | collected_record | requirement_id=packing_energy; process_id=household_packing; required_direction=inputs; required_flow_type=product; original_collection_protocol=cp_packing; applicability_evidence; occurrence_event_id; concrete_row_id; physical_identity; formulation_or_species; phase; carbon_origin; particle_fraction; source_compartment; receiving_compartment; supply_or_handover_gate; provider_covered_cells; asset_component_event_and_lifecycle_phase; native_property; native_unit; measured_native_quantity; source_record_id; allocation_all_users; normalization_denominator; per_identity_amount_calculation; verification_evidence; unresolved_reason; occurrence_to_row_reconciliation; carrier_and_supply_state; meter_id; integrated_energy_or_power_time; fuel_as_received_quantity; heating_value_basis; supply_return_state; responsible_failure_and_readiness; complete_provider_exclusion; applicability_decision_record; covered_concrete_rows; excluded_occurrence_reason; completion_evidence; observed_quantity_state; conversion_or_allocation_evidence; material_formulation; material_opening_stock; material_receipts; material_closing_stock; material_unused_returns; material_quantity_used | 条件要求：各实际能源供应清洗剂身份分别记录，保留本节点数量责任。父节点能源计量仅在另行分配时扣除此节点，避免用能重复。 本范围是必须落实的身份识别要求，不是交换流。使用原节点采集协议及其记录，先按真实身份、端口及独立功能拆分，再将保留的数量、基准及证据规则分别用于各兼容具体行。不得将异质身份合并数量或从总括名称推断原生属性单位。未发生须有证据，适用性或身份未知则阻止完成。 以下采集条件仅限本项 inputs/product 的身份与交接点（实际包装作业能源或清洗投入）。本包装节点的能源及独立领用的清洁品或其他包装用品分别启用。包装分表与上级资源池对账，各配方分别登记接收、未用退回、期末库存和实际耗用。 每项适用性判断须留证。经证实不发生仅关闭所述范围和时段，缺记录仍未解决。发生的要求须将全部事件映射到具体row ID及相容原生数量，或精确映射至已覆盖行和供应方责任，并逐项说明排除理由。证据须覆盖身份、支持单位、计算、原始记录及全部去向；既有与新增分支对同一事件互斥覆盖，协议本身不作为交换。完成须无未分配事件、无重复覆盖、无相关数量或身份未决项。按有证据的实际分支采集原始字段。不适用的操作数须关联分支判定，适用但缺乏实测或依据的数量登记待决。 | 电力或热冷交付按能量单位，燃料按其原生口径，独立领用的清洁品按物料单位 | 每次真实事件及每项有证据的未发生判断 | 完整声明队列及归属资产寿命关联事件 | 仅本过程真实责任场所及供应方 | 先对账原生事件总量，仅汇总身份、状态、单位、交接点及期间均相容的量。按相应计算规则逐行核算一次：只分配仍共享的负担，目标总量仅除以同口径的正合格产出；等效每参考流数值原值沿用，零产出期间不作除法并保留处置记录。 | 能源匹配表计或燃料记录，物料数量匹配领用及退回台账。物料须保留独立原生量，不得自动折能。 对上述具体身份及相容输入口径，仅在数量的归属和归一化状态与下式前提匹配时使用该规则：attributed_native_packing_support / N 保留原始凭据、实际采用的系数和结果单位。数值来源模式：calculated_value；适用范围：site_specific；归一化基准：每声明的参考流；基准类型：reference_flow；证据类型：calculated_from_collection；采集协议：cp_packing；来源：ghg-product-2011。须有原始记录、精确原生支持及逐具体行核验；这些规则不提供缺失身份或数值。 完成判据：check_occurrence_completion。 |
| cp_expand_paper_pack_waste | household_packing | 必须展开身份 paper_pack_waste (outputs/waste)：实际弃置的家庭物品纸类包装 | collected_record | requirement_id=paper_pack_waste; process_id=household_packing; required_direction=outputs; required_flow_type=waste; original_collection_protocol=cp_packing; applicability_evidence; occurrence_event_id; concrete_row_id; physical_identity; formulation_or_species; phase; carbon_origin; particle_fraction; source_compartment; receiving_compartment; supply_or_handover_gate; provider_covered_cells; asset_component_event_and_lifecycle_phase; native_property; native_unit; measured_native_quantity; source_record_id; allocation_all_users; normalization_denominator; per_identity_amount_calculation; verification_evidence; unresolved_reason; occurrence_to_row_reconciliation; waste_origin_event; material_or_true_mixture; moisture_basis; container_tare; opening_waste_stock; generated_waste; received_waste; handover_quantity; closing_waste_stock; onsite_treatment; receiver_id; applicability_decision_record; covered_concrete_rows; excluded_occurrence_reason; completion_evidence; observed_quantity_state; conversion_or_allocation_evidence | 真实家庭或车场端口产生并弃置的纸类包装；不绑定厂内端口包装废物UUID。区分客户保留包装周转库存及去向；不默认再生含量或回收信用。 本范围是必须落实的身份识别要求，不是交换流。使用原节点采集协议及其记录，先按真实身份、端口及独立功能拆分，再将保留的数量、基准及证据规则分别用于各兼容具体行。不得将异质身份合并数量或从总括名称推断原生属性单位。未发生须有证据，适用性或身份未知则阻止完成。 以下采集条件仅限本项 outputs/waste 的身份与交接点（实际弃置的家庭物品纸类包装）。本过程实际产生或接收所述废物时启用。记录材料或配方或真实共同收集混合物、干湿状态、容器皮重、来源事件、存量、交接关口及实际接收者；核对产生量+期初库存+接收量=交出量+期末库存+另列现场处理量。分收的不同废物分行，真实接收混合物可为一行，其组分仅作不可相加审计；有用回收、客户保留物与废物去向分开，不自动给替代抵扣。 已明确分支（仅按实际适用记录启用）：discarded_paper_packaging_home_depot. 每项适用性判断须留证。经证实不发生仅关闭所述范围和时段，缺记录仍未解决。发生的要求须将全部事件映射到具体row ID及相容原生数量，或精确映射至已覆盖行和供应方责任，并逐项说明排除理由。证据须覆盖身份、支持单位、计算、原始记录及全部去向；既有与新增分支对同一事件互斥覆盖，协议本身不作为交换。完成须无未分配事件、无重复覆盖、无相关数量或身份未决项。按有证据的实际分支采集原始字段。不适用的操作数须关联分支判定，适用但缺乏实测或依据的数量登记待决。 | 接收方验收的具体废物或实际混合收集物在实测状态下的原生数量 | 每次真实事件及每项有证据的未发生判断 | 完整声明队列及归属资产寿命关联事件 | 仅本过程真实责任场所及供应方 | 先对账原生事件总量，仅汇总身份、状态、单位、交接点及期间均相容的量。按相应计算规则逐行核算一次：只分配仍共享的负担，目标总量仅除以同口径的正合格产出；等效每参考流数值原值沿用，零产出期间不作除法并保留处置记录。 | 以接收记录核对产生、库存、场内处理和实测交付。混合物流量与组分测量分开；干湿基或质量体积换算须有相容组成或密度。接收转移和环境直排按不同交接点记录。 对规定采用 质量 / kg 的行，核实实测口径或向该口径的换算。 对上述具体身份及相容输入口径，仅在数量的归属和归一化状态与下式前提匹配时使用该规则：attributed_generated_paper_pack_waste_kg / N 保留原始凭据、实际采用的系数和结果单位。数值来源模式：calculated_value；适用范围：site_specific；归一化基准：每声明的参考流；基准类型：reference_flow；证据类型：calculated_from_collection；采集协议：cp_packing；来源：ghg-product-2011。须有原始记录、精确原生支持及逐具体行核验；这些规则不提供缺失身份或数值。 完成判据：check_occurrence_completion。 |
| cp_expand_other_pack_waste | household_packing | 必须展开身份 other_pack_waste (outputs/waste)：实际弃置的非纸类保护包装 | collected_record | requirement_id=other_pack_waste; process_id=household_packing; required_direction=outputs; required_flow_type=waste; original_collection_protocol=cp_packing; applicability_evidence; occurrence_event_id; concrete_row_id; physical_identity; formulation_or_species; phase; carbon_origin; particle_fraction; source_compartment; receiving_compartment; supply_or_handover_gate; provider_covered_cells; asset_component_event_and_lifecycle_phase; native_property; native_unit; measured_native_quantity; source_record_id; allocation_all_users; normalization_denominator; per_identity_amount_calculation; verification_evidence; unresolved_reason; occurrence_to_row_reconciliation; waste_origin_event; material_or_true_mixture; moisture_basis; container_tare; opening_waste_stock; generated_waste; received_waste; handover_quantity; closing_waste_stock; onsite_treatment; receiver_id; applicability_decision_record; covered_concrete_rows; excluded_occurrence_reason; completion_evidence; observed_quantity_state; conversion_or_allocation_evidence | 按实际 PE 膜泡沫胶带复合内衬或器具的组成产生端口及接收方分别展开。客户保留包装和周转流失须判断所有权，不自动成为废物。 本范围是必须落实的身份识别要求，不是交换流。使用原节点采集协议及其记录，先按真实身份、端口及独立功能拆分，再将保留的数量、基准及证据规则分别用于各兼容具体行。不得将异质身份合并数量或从总括名称推断原生属性单位。未发生须有证据，适用性或身份未知则阻止完成。 以下采集条件仅限本项 outputs/waste 的身份与交接点（实际弃置的非纸类保护包装）。本过程实际产生或接收所述废物时启用。记录材料或配方或真实共同收集混合物、干湿状态、容器皮重、来源事件、存量、交接关口及实际接收者；核对产生量+期初库存+接收量=交出量+期末库存+另列现场处理量。分收的不同废物分行，真实接收混合物可为一行，其组分仅作不可相加审计；有用回收、客户保留物与废物去向分开，不自动给替代抵扣。 每项适用性判断须留证。经证实不发生仅关闭所述范围和时段，缺记录仍未解决。发生的要求须将全部事件映射到具体row ID及相容原生数量，或精确映射至已覆盖行和供应方责任，并逐项说明排除理由。证据须覆盖身份、支持单位、计算、原始记录及全部去向；既有与新增分支对同一事件互斥覆盖，协议本身不作为交换。完成须无未分配事件、无重复覆盖、无相关数量或身份未决项。按有证据的实际分支采集原始字段。不适用的操作数须关联分支判定，适用但缺乏实测或依据的数量登记待决。 | 接收方验收的具体废物或实际混合收集物在实测状态下的原生数量 | 每次真实事件及每项有证据的未发生判断 | 完整声明队列及归属资产寿命关联事件 | 仅本过程真实责任场所及供应方 | 先对账原生事件总量，仅汇总身份、状态、单位、交接点及期间均相容的量。按相应计算规则逐行核算一次：只分配仍共享的负担，目标总量仅除以同口径的正合格产出；等效每参考流数值原值沿用，零产出期间不作除法并保留处置记录。 | 以接收记录核对产生、库存、场内处理和实测交付。混合物流量与组分测量分开；干湿基或质量体积换算须有相容组成或密度。接收转移和环境直排按不同交接点记录。 对上述具体身份及相容输入口径，仅在数量的归属和归一化状态与下式前提匹配时使用该规则：attributed_native_discarded_pack / N 保留原始凭据、实际采用的系数和结果单位。数值来源模式：calculated_value；适用范围：site_specific；归一化基准：每声明的参考流；基准类型：reference_flow；证据类型：calculated_from_collection；采集协议：cp_packing；来源：ghg-product-2011。须有原始记录、精确原生支持及逐具体行核验；这些规则不提供缺失身份或数值。 完成判据：check_occurrence_completion。 |

### 计算规则

| rule_id | 适用对象 | formula_or_rule | inputs | output | source_ids |
| --- | --- | --- | --- | --- | --- |
| normalize | moving_engagement | q_x = allocated_native_quantity_x / N，先完成唯一作业供应库存闭合；N > 0；已完成最终委托 = 1 Item(s)。内部包装作业数量在两节点核对，不增加最终输出。 | 原生记录; 全部使用者的分配份额; 已完成的等价数量 N | 每参考流原生数量 | ghg-product-2011 |
| asset_life | moving_engagement | attributed_asset = native_asset_quantity * attributed_same_cohort_useful_duty / positive_total_all_user_same_cohort_useful_duty；再除N。各周转包装队列分别采用该方法，真实清洗修理流失退役另列。 | 真实同资产原生数量及正值全部用户服务量 | 仅分摊制造覆盖量 | ghg-product-2011 |
| custody_closure | moving_engagement | 客户物品为保管库存，不是搬迁方购入制造投入。按物品和转移互斥核对期初保管加实际提取与验收交接、真实外发退回、弃置或释放及期末保管。损坏是状态，不自动成为处置或补产；保留真实修理退回弃置补供责任及全部失败返工作业。 | 物品及转移标识; 验收及实际处置记录 | 互斥保管库存转移闭合 | ghg-product-2011 |

### 数据质量要求

| requirement_id | 适用对象 | Requirement | evidence |
| --- | --- | --- | --- |
| branches | moving_engagement | 按实际附属单项室内公路义务数量通行分层，不强制可比性或正值公路距离。索引全部参与单元期间及全部用户工作量。 | 作业家庭登记及真实权重分布 |
| completeness | moving_engagement | 各实际条件物料资产燃料服务废物污染物展开为独立行，含一个既有父过程、方向流类型、实际身份状态端口介质、原生单位数量、核实UUID或登记待核身份、父节点协议、来源及有依据计算。必需数量状态缺失表示不完整，不表示零。 | 展开行清单来源覆盖审计 |
| uncertainty | household_packing | 记录实测与模型数量、校准样本覆盖、周转寿命来源及不确定性。无虚构包装配方损耗因子寿命装载率数值范围；真实缺失要求仍为不完整。 | 独立QA样本校准及模型文献记录 |

## 9. 验证规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| function | moving_engagement | 核对完整家庭搬迁附属范围、办公室搬迁排除、实际义务及最终委托参考。室内或包装单项不强制公路移动。 | ghg-product-2011 |
| closure | moving_engagement | 核对全部物品保管包装库存、验收失败作业、各内部作业转移、正值等价N、其他用户份额、完整供应资产及真实废物损耗去向。 | ghg-product-2011 |
| identity | moving_engagement | 最终交换须核实原生UUID属性单位端口及真实污染物接收介质；计次支持不等于搬迁服务身份。各待核条件要求仍为必须满足的数据生产条件。 | ghg-product-2011 |
| quality | moving_engagement | 比对双语当前投影的行规则协议ID、数量常数及条件义务。要求校准测量或适用记录模型及不确定性独立QA，不把缺失作零，不将批次最大值当独立证据。 | ghg-product-2011 |
| atomic_moving_engagement | moving_engagement | 拒绝将备选物料、独立供应资产服务、不同废物流、污染物种、碳源、相态、粒径或环境子介质合并成一个交换身份。本节点每项适用cp_expand_要求必须有发生或未发生记录及完整具体行清单，各行具有自身身份、端口、已核验UUID、原生属性单位、数量、原始记录、计算和唯一责任。供应方已含完整总成或真实收集混合物流仍按一个真实供应或收集身份，不虚构组分交换。不得将要求名称标识、NOx或VOC或PM总量、未明确的物理释放或异质清单绑定一个UUID。核对全部子行、原始事件、供应方已含单元及跨节点交接，不缺失当零、不重复计入。身份、适用性、数量或去向未知，均阻止完整前景包及最终TIDAS交换产出。PCR检查器不验证这些前景事实，须保留逐行证据供审查。 | ghg-product-2011 |
| atomic_household_packing | household_packing | 拒绝将备选物料、独立供应资产服务、不同废物流、污染物种、碳源、相态、粒径或环境子介质合并成一个交换身份。本节点每项适用cp_expand_要求必须有发生或未发生记录及完整具体行清单，各行具有自身身份、端口、已核验UUID、原生属性单位、数量、原始记录、计算和唯一责任。供应方已含完整总成或真实收集混合物流仍按一个真实供应或收集身份，不虚构组分交换。不得将要求名称标识、NOx或VOC或PM总量、未明确的物理释放或异质清单绑定一个UUID。核对全部子行、原始事件、供应方已含单元及跨节点交接，不缺失当零、不重复计入。身份、适用性、数量或去向未知，均阻止完整前景包及最终TIDAS交换产出。PCR检查器不验证这些前景事实，须保留逐行证据供审查。 | ghg-product-2011 |
| check_occurrence_completion | 全部实际清单行和身份识别协议 | 保留适用性证据，将每个实际事件对应到具体清单行或已核实的供应方覆盖范围。判定未发生须有证据，未知项保留待决。按同一身份、状态、单位、期间和交接点核对期初、接收、期末及互斥去向。耗材领用账区分未用退回、内部领拨和合格、失败及返工作业的实际耗用。托管账或物料平衡采用期初库存＋外部接收＋配对内部接收＝期末库存＋配对内部发出＋对外交付且获接收的数量＋未用外退＋外送的已用物资或回收物＋外送废物＋直接排放＋本边界内消耗或转化量。身份在边界内生成时，将有证据的生成量或出生数计入该身份账的来源并关联原事件。在上层守恒物料或元素平衡中抵消内部转化和移交。每个事件只记一次，留存回收物计入期末，移交与耗用分别登记。按相容口径执行专用托管、相态、转化或元素规则；已作为转化量计入的物料，其后续产物不得再计入同一去向合计。独立计量各项，对未解释的差额追查并保留待决。实物总量与负担分配分别核算。共享原始负担采用 Q_raw × s / R，其中 s 为有证据的目标驱动量除以同池同期间全部适用用户的正驱动量总和。已归属的目标总量采用 Q_target / R，已与同一参考流等效的单位结果 q_ref 原值沿用。供应方单位强度先乘以按其原生单位实测的需求量。仅在另一个仍有共享负担的独立阶段另作分配。R 为同一队列、交接点和参考单位下的正值合格产出量。保留失败与部分完成作业的负担，禁止以此放大 R；零产出时保留负担及有证据的结转或最终处置。自有资产采用同队列全用户寿命作业量，并排除初始部件重复计算。外购服务仅替代有记录的覆盖阶段。适用的身份、数量、支持单位、去向或分配分母仍未决时，最终数据集仍不完整。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | secondary_dataset; background_dataset |
| downstream_use | 声明家庭搬迁委托数据，供过程生命周期模型投影 |
| allowed_use | 等价限定家庭搬迁或附属作业、真实数量及核实交换 |
| excluded_use | 办公室搬迁；通用公路货运吨公里；货物制造；纯资产租赁；不同作业义务直接比较 |
| required_metadata | household_item_inventory_condition_and_ownership; actual_engagement_obligation_and_completion; packing_carrying_inhouse_road_branch; actual_origin_placement_rooms_floors_access; actual_load_mass_volume_and_route_distance_when_applicable; protected_state_and_quality; period_and_positive_equivalent_N; duty_empty_failed_rework_and_other_users; internal_task_transfer_and_provider_scope; packaging_consumption_reuse_stock_and_fates; actual_equipment_asset_cohort_all_user_lifetime_duty; damage_return_discard_and_actual_receiving_media |
| required_quality_disclosure | 真实分支作业条件、物料资产供应范围、实测模型数量、全部用户分配及待核不确定证据 |
| update_trigger | 作业路线通行包装技术供应资产寿命或证据变化 |

## 11. 数据源

来源表列为来源编号（source_id）、类型（type）、文献信息（reference）和用途（used_for）。功能单位解析键 What、How much、How well、How long or cycle 分别表示对象、数量、质量和时长或周期。

| source_id | type | reference | used_for |
| --- | --- | --- | --- |
| unsd-cpc3-65115 | official_guidance | UNSD CPC 3.0 code65115 https://unstats.un.org/unsd/classifications/Econ/Structure/Detail/EN/2100/65115 | 官方家庭搬迁附属范围及办公室搬迁排除；无LCA数值 |
| ghg-product-2011 | standard | WRI/WBCSD Product Life Cycle Accounting and Reporting Standard (2011). https://ghgprotocol.org/product-standard | GHG生命周期分配数据质量框架；详细全生命周期保管包装采集为PCR方法，不是来源数值要求 |

