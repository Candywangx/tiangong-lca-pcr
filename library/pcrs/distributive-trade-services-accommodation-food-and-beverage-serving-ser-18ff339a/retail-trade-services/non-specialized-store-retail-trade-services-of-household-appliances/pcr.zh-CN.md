---
pcr_id: pcr.distributive-trade-services-accommodation-food-and-beverage-serving-ser-18ff339a.retail-trade-services.non-specialized-store-retail-trade-services-of-household-appliances
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 原封HD9350/90电水壶到店自提零售服务

## 1. 范围与适用性

本PCR定义一个明确的部分增量零售作业模块：同一实际批次的新飞利浦HD9350/90、1.7 L市电电水壶，保持供应商原装盒完整原封，由非专门商店收货并由顾客到店实物自提。适用性必须有实际型号及市场版本、封条、完整原装配置、非专门商店渠道及常温储存证据。制造商2023年规格指出水壶含独立360度底座、电源线、可拆滤网、壶盖和控制器；不锈钢壶身不代表整机纯钢清单。本案例比CPC 3.0 62144更窄，该类别说明关联第448组商品，并不覆盖整个组。

排除安装或送货家电、散装零件、冰箱、燃气器具、充电或电池器具、已开封或重新包装盒、旧货、通电展示或煮水测试、维修、安装和消费者使用。本路线不包含演示壶、煮水、洗壶或额定功率估算耗电。柜台目视检查仅针对密封盒及标签。任何开封、改变载体配置的损坏、测试、重新包装、增添购物袋或纸质收据、制冷剂设备或燃料燃烧，必须先有具体状态扩展及双语卡片才能声明完整；缺省不得视为无发生。必要支持基础设施仅作为completion_modules规定的明确模块排除，不能视为零负荷。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.distributive-trade-services-accommodation-food-and-beverage-serving-ser-18ff339a.retail-trade-services.non-specialized-store-retail-trade-services-of-household-appliances |
| classification_refs | CPC 3.0 62144; narrower |
| covered_products | 原封全新完整HD9350/90原装盒顾客自提服务 |
| excluded_products | 排除安装或送货家电、散装零件、冰箱、燃气器具、充电或电池器具、已开封或重新包装盒、旧货、通电展示或煮水测试、维修、安装和消费者使用。本路线不包含演示壶、煮水、洗壶或额定功率估算耗电。柜台目视检查仅针对密封盒及标签。任何开封、改变载体配置的损坏、测试、重新包装、增添购物袋或纸质收据、制冷剂设备或燃料燃烧，必须先有具体状态扩展及双语卡片才能声明完整；缺省不得视为无发生。必要支持基础设施仅作为completion_modules规定的明确模块排除，不能视为零负荷。 |
| representative_product | HD9350/90、1.7 L、220–240 V电水壶；原装完整密封配置 |
| production_route | 密封盒收货→常温货架保管→封盒目检→合格顾客实物自提 |
| market_state | 全新、未通电未开封；无增添零售包装或打印 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 封盒到店自提增量零售作业 |
| How much | 一个最终验收的原装完整器具盒ID |
| How well | 正确SKU、原封完整且供应商担保完整原装配置；实际实物交接及有效合格验收 |
| How long or cycle | 一个预先固定同配置池，从门店收货至最终验收及关联去向/修正结清 |
| reference_flow_link | pickup_service |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 原封HD9350/90到店自提零售服务 |
| 参考流属性 | 物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` |
| 参考单位组 | 数量 `5beb6eed-33a9-47b8-9ede-1dfe8f679159` |
| 参考单位 | Item(s) |
| 必需限定信息 | 实际HD9350/90市场版本及供应批次; 完整原装壶体/底座/线缆/滤网/附件及包装BOM版本; 封条及未通电未开封状态; 非专门商店及常温自提路线; 收货门及原始来源ID; 预先确定的池期间及最终验收/撤销截止日; 实际电表及支持模块覆盖; 商品与暂存废物保管及背景S/F/O/T台账; 供电方地域电压及线损 |

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| service_count | pickup_service | 物品数量 | Item(s) | 参考为1 Item(s)零售服务，不是一个水壶制造交换；采用cp_custody及accepted_count。 |
| electricity_unit | retail_power | 净热值, 低位热值 | MJ | 实测kWh先归属后×3.6 MJ/kWh，再仅除Q一次；执行cp_power及electricity_calc。水壶瓦数不等于零售用电。 |
| whole_carrier_mass | sealed_package_waste | 质量 | kg | 实际整原装包运单净质量，保留原装包装。不得以器具计数或目录尺寸替代校准kg；执行cp_waste及waste_dispatch。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 实际原装盒完整到门店收货门且供应来源完整 |
| starting_condition_role | declared_supply_chain_entry |
| product_classification_scope | CPC 62144第448组商品中的更窄原封壶自提案例 |
| recursive_input_rule | 不递归投入同类零售服务；供应生产来源及收货门运输分开保留 |
| upstream_dataset_requirement | F用同完整原装包及门级来源，后续耦合用准确S向量；供应数据未结阻断完整性 |
| disclosure | 部分作业模块；披露全部必要支持模块、排除S背景及后续完成义务 |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| scope_gate | retail; failures | 要求同一经证实HD9350/90市场配置的密封原装盒。完整原装包包括整壶、底座、线缆、滤网、控制和盖组件、所有随附附件/说明及每个实际原装包装组件。必须由供应商BOM及来源边界确认配置；目录尺寸及再生含量宣传不能确定质量或生产向量。禁止按任意组件质量或数量比例拆分原始来源向量。 | philips-hd9350-spec |
| service_gate | pickup_service | 起点为密封盒有记录的门店收货；终点为同一原始ID的实际实物交付及合格验收。Q统计最终有效的不同原始ID，封条、正确SKU和完整供应配置由可追溯供应商记录担保；不假设店内开封检查。同一退回ID的重复交付或再售仅计一次。即使无实物退货，验收撤销仍移除先前验收；纯财务折扣/退款不移除仍然有效的验收。仅顾客持有但无合格验收不能算服务。 | retail-foreground-protocol |
| custody | retail; failures | 建立仅商品数量平衡：G_open + I + R = H + U + K + L + G_close，H为顾客实物交付总次量、R为实物退回总次量、U为供应商实物交接、K为内部报废、L为实际外部保管丢失。K把商品转入暂存废物而非转出保管。完整整包废物数量另作W_open + K = D + W_close；实际出库D只扣暂存废物一次，不能再扣商品。整包实测kg与计数独立记录；服务分母不是库存平衡项。未知差额或外部接收方/状态阻断实物完整性。任何实际外部保管丢失L事件超出这两种供应商/顾客状态卡，须先扩展准确接收方/状态后才能完整；保留整个原始池及其丢失负荷，禁止删除子群或改称顾客留存。 | retail-foreground-protocol |
| background_ownership | failed_original_package | 在完全相同收货门，每个原始供应来源仅归属一次：S为最终验收商品，F为零售商负责的不可恢复失败，O为未结或暂存，T为具名继续保管/背景责任方；S+F+O+T须守恒每个原始来源。同件退回替换原有状态。增量服务仅在failed_original_package中承担完整原装制造及入店运输的F/Q；S排除，后续产品系统必须还原其准确来源向量S/Q。O保留待结，T包括退供应商且须具名继续负责。背景重分配不产生实物移动。退供应商不得给予避免生产抵扣。未经授权的永久演示品须将同一原始来源作为T交给具名资产，禁止F再加第二份全新资产；此事件在扩展前阻断本无演示路线。 | retail-foreground-protocol |
| route_absence | retail | 以场地平面、电路核查、采购/服务记录和事件观察证明本模块无水壶通电、增添包装/打印、燃烧或制冷剂设备。顾客交通/使用及送货/安装不属本路线。实际门店采暖/制冷、清洁和基础设施不得消失；这里只能按明确部分边界completion_modules方法排除。未知不为零；出现制冷剂/燃料路线必须有完整具体扩展才适用，不能留待选择未指明燃料。 | retail-foreground-protocol |

## 6. 过程清单结构

### 过程图

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| retail | 封盒收货、常温保管及自提 | required | 每个适用服务池 | foreground production | pickup_service |
| failures | 失败原来源责任及完整废物出库 | conditional | 实际F来源或实际整封包废物；若无须以cp_background/cp_waste证明；未知阻断完整性 | failure handling | pickup_service |

### 过程：封盒零售作业（`retail`）

#### 输入

##### 产品流

###### 交流电（`retail_power`）

按electricity_calc归属收银、照明及风扇实测运行电量；使用retail_MJ_per_service。另须选择供应方/电压/供电地域/线损。无水壶使用能耗。

- 选定流：电力，交流电 `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- 流属性/单位：净热值, 低位热值 / MJ
- 数量规则：每参考流实测归属电量（MJ）。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_power`
- 来源：`retail-foreground-protocol`

#### 输出

##### 产品流

###### 原封HD9350/90到店自提零售服务（`pickup_service`）

每参考流1 Item(s)，由Q依accepted_count及cp_custody得到。这是服务输出而非商品制造。

- 选定流：原封HD9350/90到店自提零售服务
- 流属性/单位：物品数量 / Item(s)
- 数量规则：1 Item(s)
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_custody`
- 来源：`retail-foreground-protocol`

### 过程：失败来源及终端载体（`failures`）

#### 输入

##### 产品流

###### 门店收货门的完整原封HD9350/90器具包（`failed_original_package`）

使用original_background的failure_source_count_per_service并关联准确供应V_s；包括完整原壶/底座/线缆/滤网/附件/说明/包装制造及入店运输。仅F责任，不是全部I或退供应商T。这是来源等价背景投入；商品实物流留在cp_custody，不是重复制造交换。

- 选定流：门店收货门的完整原封HD9350/90器具包
- 流属性/单位：物品数量 / Item(s)
- 数量规则：每参考流实测原来源失败整包数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_background`
- 来源：`retail-foreground-protocol`; `philips-hd9350-spec`

#### 输出

##### 产品流

###### 交回供应商的完整原封HD9350/90器具包（`supplier_handoff_package`）

按physical_transfers计量实际退供应商实物总交接U/Q。台账保留原始ID、实际接收方、完整原封包状态及同门来源责任T。此为实物产品输出，不是第二份制造向量、自动抵扣或背景重分配产生的虚构移动。

- 选定流：交回供应商的完整原封HD9350/90器具包
- 流属性/单位：物品数量 / Item(s)
- 数量规则：每参考流实测具体状态原装包实物数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_supplier`
- 来源：`retail-foreground-protocol`

###### 由未合格验收顾客留存的完整原封HD9350/90器具包（`external_retained_package`）

按physical_transfers计量实际最终未合格验收而外部留存的完整原封包X_final/Q，须具名接收方、封条/完整配置证据、原始实物交接事件且无实物退回。此状态替换同一原始ID/事件的先前验收去向；验收撤销不产生第二次移动。F或T具名背景责任另按original_background处理，均不产生避免生产抵扣。接收方未知或已开封/损坏状态阻断本卡及完整性。

- 选定流：由未合格验收顾客留存的完整原封HD9350/90器具包
- 流属性/单位：物品数量 / Item(s)
- 数量规则：每参考流实测具体状态原装包实物数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_external`
- 来源：`retail-foreground-protocol`

##### 废物流

###### 完整原封HD9350/90器具盒废物（`sealed_package_waste`）

使用waste_dispatch的实际whole_carrier_kg_per_service；完整原装器具及原包装仅含一次。报废库存不是出库；供应范围须匹配实际完整原封载体。

- 选定流：完整原封HD9350/90器具盒废物
- 流属性/单位：质量 / kg
- 数量规则：每参考流实测出库整载体净kg。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_waste`
- 来源：`retail-foreground-protocol`

## 7. 分配与共产品处理

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| prospective_pool | retail; failures | 观测前固定同SKU/配置/场址/路线池及事件截止日。纳入闲置/闭店期间、拒绝订单、重复尝试、撤销验收及全部失败或零售出子群。先归属原始分子，再仅除以最终Q一次。迟发退货/验收变化须关联原始ID并连同版本记录同时替换原始分子、Q和去向；不得移到新成功群。Q=0时明确不可归一化且保留全部原始量。 | retail-foreground-protocol |
| power_allocation | retail_power | 优先使用不重叠直接电表。共用来源先拆为实测活动、待机及固定照明/风扇电量分子池E_c（kWh），仅扣父表实际包含的分表后，sum E_c须与父表对账。每池按一个同单位正因果驱动d_bc分给所有实际受益方b：收银活动用任务活跃秒、收银待机用含闲置的预留终端小时、照明用照明面积小时、风扇用服务面积小时。不能合加不同维度驱动；有电量期间不能数值设零驱动。执行electricity_calc。失败事件同样作为原池受益方。 | ghg-product-2011; retail-foreground-protocol |
| physical_transfer_allocation | supplier_handoff_package; external_retained_package | 这些卡仅保留实际实物产品保管输出，不是分配共产品或额外功能。不得把零售分子从Q分走给这些交接，或把产品输出作为负背景需求。来源责任S/F/O/T、实际终端处理和实物转移数量须分开，最终来源责任方仅承担原始负荷一次，不给替代或回收抵扣。 | retail-foreground-protocol |
| asset_responsibility | completion_modules | 对分别有证据的完整建筑、货架、收银终端、灯具、风扇及搬运车，选择直接细分或一种声明单位的因果受益暴露e_jb和同单位预期终身总暴露L_j。以e_jb/L_j分配制造/安装向量V_j；建筑/货架用预留m2*h，收银及风扇/灯具/车用含闲置的实际预留服务h。保留所有受益方和历史版本，累计份额<=1；L_j变动须替换每项历史分配，实际退役时设最终L_j为全部终身暴露之和并修正所有先前分配。事件维护与实际终端废物分开；暴露量旁不得再投整件采购。整件退役质量只能选择直接净称或准确组件重构，二者互斥。其最终责任份额只乘一次，不再乘制造份额。 | ghg-product-2011; retail-foreground-protocol |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_custody | retail | pickup_service | 原始ID验收及保管事件台账 | pool_id; original_id; event_id; model_variant; supplier_lot; BOM_version; seal_state; receiving_gate; source_id; event_time; physical_recipient; physical_state; H; R; U; K; L; I; G_open; G_close; W_open; D; W_close; package_kg; X_final; gross_handover_id; physical_return_id; continuing_owner; background_responsibility; final_acceptance; revocation; financial_only; cutoff |预先冻结池/路线及截止。收货、每次实物交付/退回、报废、废物出库及验收变化均扫描密封盒序号/可追溯原始ID；保留封条照片、供应完整担保、签收及供应商/保管方收据。经校准秤单独记录实际整包kg。调查缺ID及外部未验收留存，不推定废物。 按accepted_count及custody_balance；实物流总量及最终有效Q独立保留；每参考流 | Item(s); kg | 每事件及期初/期末库存 | 完整声明池及关联后续修正 | 实际常温收货/货架/自提范围及所有接收方状态 | 每参考流 | 校准秤、带时标扫描、签收及保管链 |
| cp_power | retail | retail_power | 电表及共用驱动台账 | pool_id; component_id; meter_id; calibration; meter_boundary; start_kWh; end_kWh; parent_kWh; included_submeter_ids; E_c; direct_kWh; beneficiary_id; d_bc; d_pc; driver_unit; active_s; reserved_terminal_h; illuminated_m2h; served_m2h; source_id; provider; voltage; geography; losses; Q |期初/期末及来源组件区间变化读取校准累计电表，绘制实际电路及全受益方。专表或分别实测对账的活动/待机/固定组件分子池互斥。逐受益方及闲置/闭店/失败期间记同单位驱动；保留来源与供电边界。不以通电水壶估计零售用电。 按electricity_calc；原始kWh先分配，再按3.6 MJ/kWh换算且仅除Q一次；每参考流 | kWh; s; h; m2*h | 表区间及每活动/预留区间 | 池内全部运行及闲置时段 | 仅纳入电路，不与支持模块重复 | 每参考流 | 电表校准、电路核查、全受益驱动对账及电费凭据 |
| cp_background | failures | failed_original_package | 来源向量及最终背景责任台账 | pool_id; original_id; source_id; source_originals; actual_model_BOM; V_s; receiving_gate; inbound_transport_coverage; B_s_S; B_s_F; B_s_O; B_s_T; continuing_owner; physical_recipient; physical_state; replacement_version; Q |取得一份实际完整密封配置含原装包装及至声明门运输的供应商一手清单，或具有守恒来源ID的准确制造/组件向量；不得由壶身钢材推断。逐原始ID关联保管事件与最终责任。退供应商T保持具名继续负荷；外部失败留存须有实际接收方/状态及责任。迟发事件替换旧来源分配。 按original_background；来源计数及向量只计一次；每参考流 | Item(s); source vector | 每原来源及去向变化 | 原始收货历史至最终去向 | 同型号/包装/收货门及具名来源责任方 | 每参考流 | 签署完整供应BOM/清单、门级运输覆盖及具名责任收据 |
| cp_waste | failures | sealed_package_waste | 完整整包终端运单 | pool_id; consignment_id; original_id; seal_state; component_completeness; gross_kg; tare_kg; calibration; D; W_open; W_close; terminal_provider; treatment_admission; provider_transport_coverage; source_id; Q |实际废物交接时用校准秤称完整密封器具盒载体，仅减实际外加运单皮重，不减原包装。将完整内容及原封状态与原始ID和终端接收对应。仅暂存报废并非出库。开封、泄漏或拆件器具不得用本卡。 按waste_dispatch；实际出库净kg仅除Q一次；每参考流 | kg; Item(s) | 每运单及独立期末盘点 | 完整池及关联最终出库 | 实际暂存废物及接收终端边界 | 每参考流 | 毛/皮重单、封条/内容证据及终端路线签收 |
| cp_supplier | failures | supplier_handoff_package | 具体状态实物交接/留存视图 | pool_id; original_id; event_id; U; X_final; physical_recipient; physical_state; seal_state; component_completeness; gross_handover_id; physical_return_id; final_acceptance; revocation; source_id; continuing_owner; background_responsibility; Q | 读取同一原始cp_custody台账及具名接收方签收；核实实际供应商出库或最终未验收外部留存时完整原封包。保留实际交接ID及任何退回/撤销；不得重测或重复原事件。完整来源/背景责任另行关联，不作实物抵扣。 | Item(s) | 每出库及最终外部状态变化 | 完整原始池及关联迟发修正 | 实际具名供应商/顾客及完整原封包 | 每参考流 | 签收、当前封条/配置观测、同一原始事件及来源ID |
| cp_external | failures | external_retained_package | 具体状态实物交接/留存视图 | pool_id; original_id; event_id; U; X_final; physical_recipient; physical_state; seal_state; component_completeness; gross_handover_id; physical_return_id; final_acceptance; revocation; source_id; continuing_owner; background_responsibility; Q | 读取同一原始cp_custody台账及具名接收方签收；核实实际供应商出库或最终未验收外部留存时完整原封包。保留实际交接ID及任何退回/撤销；不得重测或重复原事件。完整来源/背景责任另行关联，不作实物抵扣。 | Item(s) | 每出库及最终外部状态变化 | 完整原始池及关联迟发修正 | 实际具名供应商/顾客及完整原封包 | 每参考流 | 签收、当前封条/配置观测、同一原始事件及来源ID |
| cp_completion | retail | support modules | 模块存在性/来源/资产/路线台账 | module_id; actual_model_BOM; provider_contract; source_ids; stage_id; module_pool; module_version; raw_numerator; numerator_unit; original_denominator; beneficiary_id; presence_evidence; meter_kWh; served_m2h; O_j; I_j; U_j; C_j; E_j; W_j; D_j; H_open_j; H_close_j; Z_open_j; Z_close_j; Z_dispatch_j; carrier_id; container_residue_source_kg; whole_container_residue_net_kg; gas_interval_id; delta_h; gas_measurement_mode; rate_in_kgph; rate_out_kgph; rate_differential_kgph; concentration_mgpm3; airflow_measured_m3ph; airflow_common_m3ph; T_measured_K; T_common_K; P_measured_abs; P_common_abs; water_mole_measured; water_mole_common; concentration_state_basis; gas_volume_conversion_evidence; blank_rate_kgph; source_attribution_mode; source_fraction; source_attribution_evidence; A_jk; G_k; species_inlet_kg; species_outlet_air_kg; capture_export_kg; other_exit_kg; delta_air_stock_kg; delta_capture_stock_kg; species_mode; blank_kg; source_component_origin_kg; composition; concentration; species_conversion; dilution_water_kg; external_carrier_kg; V_supply; rho_supply; rho_discharge; cloth_source_id; a_b; L_area; terminal_cloth_kg; laundry_cloth_kg; laundry_event; laundry_provider_coverage; formulation_kg; added_water_kg; unused_kg; source_destination_kg; wet_carrier_kg; V_discharge; rho; temperature; asset_id; V_j; e_jb; exposure_unit; L_j; L_final; lifetime_version; previous_allocations; repair_source_id; replacement_source_id; terminal_net_kg; provider_stage_coverage; segment_id; trip_id; mode; m_b; d_st; C_b; C_all; capacity_unit; reserved_payload_kg_bst; reserved_h_bst; available_payload_kgh; reservation_intervals; empty_km; idle_h; attributed_provider_amount; provider_coverage; normalized_quantity; exchange_id; property; unit; pool_id; Q |以平面、合同、实测原始记录及全受益方盘点每个具名实际支持对象与作业。逐完整资产采集校准质量/电表、同单位暴露、寿命版本及实际终端收据；采集清洁配方/水/去向及按carrier_id的容器残液外运；按cleaning_completion采集气体来源/端口区间速率或浓度/气流、实际温度、绝对压力、湿/干基准及空白/来源归属模式；采集路线质量/距离/运力/空驶/闲置与供应边界。本PCR不提供任何实际观测。补充缺失具体双语原子卡及身份后才能完成；缺省须有原始记录。 执行completion_modules、cleaning_completion、lifetime_calc、transport_completion、combine_modules；保留每原始分子和原分母、准确来源去重后仅归一化至Q一次；每参考流 | kg; MJ; Item(s); m2*h; h; t*km; vehicle-km | 每事件、计量区间、模块修订及资产寿命修订 | 完整共同池及全部相关资产历史 | 所有实际必要支持受益方及路线 | 每参考流 | 签约有界合同/BOM、校准台账、模块来源去重及完整寿命修订 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| accepted_count | pickup_service | Q = 截止时最终合格验收有效的不同original_id数量；重复交付/再售仍为一项，最终撤销者不纳入，不能再次扣减。Q=0保留原始池，不能出归一化结果。 | original_id; final_acceptance; revocation; cutoff; pool_id | Q | retail-foreground-protocol |
| custody_balance | retail; failures | 仅商品：G_open+I+R-H-U-K-L-G_close=0；暂存废物：W_open+K-D-W_close=0；逐原始ID/事件计量，整包kg独立对账。K为内部报废，D为之后废物出库，不能再次扣商品。 | G_open; I; R; H; U; K; L; G_close; W_open; D; W_close; original_id; event_id; package_kg | goods_balance; held_waste_balance | retail-foreground-protocol |
| original_background | failed_original_package | 来源s保留每个实际原装包完整制造+入收货门运输向量V_s及最终原来源等价计数B_s_S、B_s_F、B_s_O、B_s_T；其和等于原来源数量。服务原始失败向量=sum_s B_s_F*V_s；后续验收产品向量=sum_s B_s_S*V_s/Q；T为具名继续责任，O未结。候选输入计数=sum_s B_s_F/Q，并分别关联实际V_s。禁止按任意kg比例拆V_s；以后拆组件须有核实组件来源向量。 | source_id; V_s; B_s_S; B_s_F; B_s_O; B_s_T; source_originals; continuing_owner; Q | failure_source_count_per_service; failure_vector; downstream_S_vector | retail-foreground-protocol |
| physical_transfers | supplier_handoff_package; external_retained_package | 供应商输出=实际实物退供应商总计数U/Q。外部未验收输出=X_final/Q；X_final统计实际由外部留存、最终验收无效且有完整原封配置及具名接收方证据的不同原始ID，关联原始H事件且无实物退回记录。后续撤销须替换原状态/输出版本，禁止再加交接或重复来源制造。验收服务Q、实物流H/R/U及最终X_final独立保留。这些实物产品输出不自动取得替代或回收抵扣；须有具名继续责任T或明确零售失败F及准确原来源守恒。 | U; X_final; original_id; gross_handover_id; physical_return_id; physical_recipient; physical_state; seal_state; component_completeness; final_acceptance; revocation; source_id; continuing_owner; background_responsibility; Q | supplier_physical_count_per_service; external_unaccepted_count_per_service | retail-foreground-protocol |
| electricity_calc | retail_power | 每个互不重叠组件c，A_pc = E_c*d_pc/sum_b d_bc；若专表则A_pc=直接实测kWh，二模式互斥。对账sum_b A_bc=E_c及sum_c E_c=父级合格kWh。零售投入=3.6*sum_c A_pc/Q MJ每参考流。每组件保留活动/待机/固定分子拆分及同单位驱动；独立不重叠电表不再扣父表。 | E_c; d_pc; d_bc; beneficiary_id; component_id; direct_kWh; parent_kWh; meter_boundary; Q | retail_MJ_per_service | retail-foreground-protocol |
| waste_dispatch | sealed_package_waste | 原始整载体废物kg=sum出库运单毛kg-皮kg，关联实际完整原封包ID及接收终端方。归属原始kg仅除Q一次。直接出库量不能再按暂存废物期初/期末修正，这些库存独立核验D。完整原装包包括全部原包装及器具部件；本载体旁不得再列组件废物或第二份包装终端。 | consignment_id; original_id; gross_kg; tare_kg; terminal_provider; D; W_open; W_close; Q | whole_carrier_kg_per_service | retail-foreground-protocol |
| completion_modules | retail | 完整服务使用须另有实际模块：(1)完整建筑及固定场所；(2)货架/柜台、收银、灯具、风扇和搬运车的资本、安装、事件维护及终端；(3)实际门店清洁及采暖/制冷；(4)V_s或终端处理方未含的收货后外部调拨/退供应商/失败库存运输及废物处理。每模块识别实际型号/BOM或签约有界服务方、原始台账来源ID、池/版本、分子单位、原分母及全部受益方；缺省须有平面和记录。资本按asset_responsibility及lifetime_calc处理，不能在电量旁消失。本无燃料无制冷剂设计仅可由有证据的电阻采暖/通风路线完成：计量kWh，按同单位服务m2*h分配不重叠实测源池；实际燃料或制冷剂设备使路线不完整，须先扩展具体原子卡。清洁执行cleaning_completion，用实际配方采购kg、加水kg、未用留存kg及互斥原来源去向；直接称量整湿废载体kg与配方来源kg不同。已用转漂洗/留存是状态替换，不能再算来源去向。进口水计量不得再减内部回用；直接废水为实测温度下V_discharge*rho，不按蒸发/存储修正。清洁材料、布、水、清洁剂、废水及终端载体须各有具体双语卡及服务边界才能完成。 | module_id; actual_model_BOM; provider_contract; source_ids; module_pool; module_version; raw_numerator; numerator_unit; original_denominator; beneficiary_id; presence_evidence; meter_kWh; served_m2h; O_j; I_j; U_j; C_j; E_j; W_j; D_j; H_open_j; H_close_j; Z_open_j; Z_close_j; Z_dispatch_j; carrier_id; container_residue_source_kg; whole_container_residue_net_kg; gas_interval_id; delta_h; gas_measurement_mode; rate_in_kgph; rate_out_kgph; rate_differential_kgph; concentration_mgpm3; airflow_measured_m3ph; airflow_common_m3ph; T_measured_K; T_common_K; P_measured_abs; P_common_abs; water_mole_measured; water_mole_common; concentration_state_basis; gas_volume_conversion_evidence; blank_rate_kgph; source_attribution_mode; source_fraction; source_attribution_evidence; A_jk; G_k; species_inlet_kg; species_outlet_air_kg; capture_export_kg; other_exit_kg; delta_air_stock_kg; delta_capture_stock_kg; species_mode; blank_kg; source_component_origin_kg; composition; concentration; species_conversion; dilution_water_kg; external_carrier_kg; V_supply; rho_supply; rho_discharge; cloth_source_id; a_b; L_area; terminal_cloth_kg; laundry_cloth_kg; laundry_event; laundry_provider_coverage; formulation_kg; added_water_kg; unused_kg; source_destination_kg; wet_carrier_kg; V_discharge; rho; temperature | required_module_manifest | retail-foreground-protocol |
| cleaning_completion | completion_modules | 每个实际配方来源j采集期初未用O_j、采购I_j、退供应U_j、期末未用C_j及互斥最终配方来源去向E_j（废水）、W_j（按carrier_id记录的实际湿布载体来源kg）、A_jk（每种排放物种k的实际配方来源组件kg，禁止用浓度倒数换为整混合物等价量）。O_j+I_j+H_open_j+Z_open_j=U_j+C_j+E_j+W_j+D_j+Z_dispatch_j+H_close_j+Z_close_j+sum_k A_jk；H_open_j/H_close_j为期初/期末实际已用/漂洗但去向未结留存的配方来源kg；Z_open_j/Z_close_j为已用容器/残余库存保留的原来源kg；D_j为单独实测实际出库干载体的来源份额。Z_open_j/Z_close_j仅包含仍实际留存在容器内的残液；已实际外运的容器残液进入Z_dispatch_j，按carrier_id计量原配方来源kg，不能仍计期末库存。W_j仅覆盖湿布中的来源份额，同一残液不得再进入E_j或W_j。直接称量实际外运完整容器加残液的净kg为另一个含实际容器的处理载体量，不是配方来源kg；保留其carrier_id、原来源归属及残液实测证据，来源比例不能乘两次。未知残液/来源分区阻断闭合。这些去向互斥，保留原始来源ID且排除外加水/污物/容器及外界反应原子；已用转漂洗/暂存是替换状态，不是第二次消耗。A_jk须按实际组件/元素来源守恒确定一次；不得把物种kg除配方比例，再相加多个整配方等价量。未知来源份额阻断闭合。另采实际组成、浓度、物种换算、稀释水kg及外来污物/布/容器质量；物种缺省须有配方/工艺证据，未知阻断模块。按实际实测温度计量进口水V_supply*rho_supply及直接整液体排放V_discharge*rho_discharge；禁止从仅水量平衡重构整废水、在直接表量中扣蒸发或回用、或把外来布/容器质量纳入来源kg。内部挥发源不等于对外基本流排放。逐物种k将实际来源生成G_k及实测原始入口质量，与实测外界空气出口、实际对外捕集载体输出、其他实际出口及空气/捕集库存变化完整对账；内部捕集不得同时算对外输出。原始入口/出口绝对读数、已差分或已扣空白读数互斥，同一背景/空白只扣一次。气体采样固定为匹配区间i及实际delta_h_i（h），且只选一种声明的互斥模式：质量速率模式逐端口物种实测kg/h积分，M_port_k=sum_i rate_port_kgph_ki*delta_h_i；浓度模式M_port_k=sum_i concentration_mgpm3_ki*airflow_common_m3ph_i*delta_h_i/1000000。浓度与气流必须使用相同实际状态或有记录的参考温度、绝对压力及湿/干气基准。必要换算须记录两状态开尔文T、绝对P及实测水摩尔分数，并采用airflow_common=airflow_measured*(P_measured_abs/P_common_abs)*(T_common_K/T_measured_K)*(1-water_mole_measured)/(1-water_mole_common)，且须核实该气体体积换算适用性；已同状态体积不再换算。记录校准、端口、区间、采样覆盖及换算证据；缺气体状态或水分数据阻断浓度模式换算。入口/出口绝对端口积分分别进入控制体平衡；已差分速率只积分一次，不再扣入口；已扣空白速率不能再扣空白。未校正数据按相同区间积分匹配空白kg/h且只减一次。来源归属只能选已分辨来源的实测数据，或将一个有证据source_fraction仅乘对应积分外界物种量一次；两模式互斥，已分辨来源/已扣空白量不得重复乘比例/校正。假定来源比例、目录通风量或清洁剂消耗不能替代上述原始测量。大气基本流卡须用实际外界物种kg、来源归属及完整控制体证据，禁止从清洁剂消耗或未知零推算。负号净观测须调查，不能夹零或给未经审查吸收抵扣。实际外界完整分子物种kg与配方来源组件kg保持独立；缺物种/捕集/库存/边界数据阻断完成。来源量仅分配制造；处理量用直接实测整湿载体质量，不再乘来源组成。每件完整可复用布记录实际清洁面积a_b及终身总面积L_area（m2）；以f_b=a_b/L_area分配准确整布来源，寿命修订须替换全部历史受益方且整终端kg*f_b仅计一次。禁止用h作布面积单位，禁止分配来源旁再列布购入。签约清洗须指明实际布kg/事件、服务方含的清洁剂/水/热/电/废水/运输阶段及来源ID，并从门店模块排除；未知服务覆盖阻断完成。 | O_j; I_j; U_j; C_j; E_j; W_j; D_j; H_open_j; H_close_j; Z_open_j; Z_close_j; Z_dispatch_j; carrier_id; container_residue_source_kg; whole_container_residue_net_kg; gas_interval_id; delta_h; gas_measurement_mode; rate_in_kgph; rate_out_kgph; rate_differential_kgph; concentration_mgpm3; airflow_measured_m3ph; airflow_common_m3ph; T_measured_K; T_common_K; P_measured_abs; P_common_abs; water_mole_measured; water_mole_common; concentration_state_basis; gas_volume_conversion_evidence; blank_rate_kgph; source_attribution_mode; source_fraction; source_attribution_evidence; A_jk; G_k; species_inlet_kg; species_outlet_air_kg; capture_export_kg; other_exit_kg; delta_air_stock_kg; delta_capture_stock_kg; species_mode; blank_kg; source_component_origin_kg; composition; concentration; species_conversion; dilution_water_kg; external_carrier_kg; V_supply; rho_supply; V_discharge; rho_discharge; temperature; cloth_source_id; a_b; L_area; previous_allocations; terminal_cloth_kg; laundry_cloth_kg; laundry_event; laundry_provider_coverage; source_id | disjoint_cleaning_source_and_carrier_numerators | retail-foreground-protocol |
| lifetime_calc | completion_modules | 实际资产j按f_jb=e_jb/L_j，每资产仅一种声明单位。修订v时重算全部先前受益方分配V_j*f_jb,v并替换旧版本，不能只向当前收新份额。退役用L_final=sum终身e_jb，残差在所有历史受益方重分配。实际维修/更换向量使用独立来源ID及真实暴露分配；禁止把无关维修材料质量之和当完整设备购入。终端整载体净kg只乘最终f_jb一次。服务方已含生命周期阶段须从独立模块移除，各资产版本保持对账。 | asset_id; V_j; e_jb; exposure_unit; L_j; L_final; lifetime_version; previous_allocations; repair_source_id; replacement_source_id; terminal_net_kg; provider_stage_coverage | replaced_lifetime_allocations; terminal_allocations | retail-foreground-protocol |
| transport_completion | completion_modules | 每个实际缺失路段s/行程t识别方式、货物毛质量m_b kg、距离d_st km、固定运力坐标C_b=reserved_payload_kg_bst*reserved_h_bst，单位kg*h，限定同一实际路段s/行程t；C_all=sum_b C_b覆盖所有实际受益方并含空驶及静止闲置预留。采用实际路段预留区间和物理载重容量，不重叠预留须与可用载重kg*h对账，C_all必须已知且为正，保留失败/零售出受益方。禁止质量/时间/距离选择器或混维度运力。已由供应方分配给运单的量仅使用一次；路段数据只验证覆盖，不能再次乘分配。否则装载活动m_b*d_st/1000 t*km仅在服务方证据覆盖实际装载、空返及闲置路线时使用。若不含空驶/闲置，则按其观测距离/时间及C_b/C_all新增不重叠实际车km或车h服务，禁止零吨导致空程为零。必须有实测全受益运力记录；不能留未定通用燃料。不得重复V_s、退供应商责任方或废物处理方已含运输。 | segment_id; trip_id; mode; m_b; d_st; C_b; C_all; capacity_unit; reserved_payload_kg_bst; reserved_h_bst; available_payload_kgh; reservation_intervals; empty_km; idle_h; attributed_provider_amount; provider_coverage; source_id | disjoint_route_numerators | retail-foreground-protocol |
| combine_modules | retail; failures | 每个外部模块还原兼容交换原始分子=其归一化量*有证据原分母，保留池/版本及来源ID。与本模块、V_s及其他模块按准确来源/阶段ID去重。仅逐行相加同一交换/属性/单位分子；kg、MJ、件、t*km、车km和h须分开。合并同池原始分子后仅除修正Q一次；不得把已归一化行加到原始量。无法对齐基准/池或原分母时仅报告部分模块，不得宣称完整服务。 | module_id; module_version; source_id; stage_id; normalized_quantity; original_denominator; exchange_id; property; unit; pool_id; raw_numerator; Q | compatible_combined_numerator_per_service | retail-foreground-protocol |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| q_scope | retail; failures | 记录实际适用版本、封条、未动配置、常温路线、缺省观测及每个必要支持模块；未知不能编码为无。 | 供应BOM/标签/封条照片、场地平面及事件记录 |
| q_period | retail; failures | 报告预先定义池、事件日期、截止、闲置/失败子群、Q及原始总量、迟发修正及版本。保管未结、O未结或Q=0时禁止最终归一化结果。 | 关联原始ID事件及版本台账 |
| q_vectors | failed_original_package | 制造商册仅支持身份，不能作为完整制造向量或包装质量。须有同门实际完整供应向量、S/F/O/T责任守恒且以后再售不重复。 | 供应商完整清单、来源ID守恒及具名继续责任方 |
| q_measure | retail_power; sealed_package_waste | 保留校准、分辨率、不确定性及缺区间标识、全部原始分子单位及实际供应/终端范围。不得夹零未知差额或用额定值代计量。 | 校准证、已对账表/秤台账及供应证据 |
| q_completeness | retail | 本模块单独为部分结果。完整背景使用须完成支持模块、实际逐行身份和数量、对齐双语卡及准确来源/版本/分母合并。不得推定符合完整GHG或电器安全标准。 | 模块清单、双语解析、来源哈希及审查完成记录 |

## 9. 校验规则

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| check_scope | retail; failures | 禁止用本部分模块声明完整服务。确认实际原封包、路线及必需限定项，并核对缺省证据和每个具名模块。如有开封、实际新耗材、测试或受损载体，必须先在双语中新增具体实测原子卡及协议，方可声明该数据集完整。不得把必要实际交换当未知零删去。 | retail-foreground-protocol |
| check_denominator | pickup_service | 要求Q>0且为最终有效的不同原始ID。重新计算所有迟发事件替换；筛选最终有效ID后不得再次扣撤销ID。独立比较商品和暂存废物平衡；无实物退货的验收撤销只改Q/背景，不改实物流总量。 | retail-foreground-protocol |
| check_background | failed_original_package; sealed_package_waste | 按完整实际配置在S/F/O/T间守恒每个原始来源；保留外部未验收商品的最终接收方/状态及T具名责任方。未知O或保管丢失不能形成最终结果。仅在实际完整密封载体与处理接收相符时可用sealed_package_waste；开封、拆解、烧毁或泄漏载体须另行扩展。以后再售、退供应商或转为资产不得重复原始生产。 | retail-foreground-protocol |
| check_measurement | retail_power; sealed_package_waste | 要求校准且覆盖完整期间的电表及运单毛/皮/净重记录。核对父边界、池分配和、单位、来源ID、供应方重叠及一次归一化。电力UUID不指定发电组合、电压或线损。水壶额定功率、两年保修、包装尺寸及再生含量宣传不是实测门店活动、寿命、完整BOM或符合性限值。 | philips-hd9350-spec; retail-foreground-protocol |
| check_identity | pickup_service; failed_original_package; sealed_package_waste | 未绑定候选行必须保留具体未核实身份。作为绑定交换前，须独立读取官方原始流响应及匹配完整性凭据，核对公开状态、双语名称、产品/废物类型、配置/路线、属性/单位和介质。供应背景及处理方须匹配实际对象、收货门及终端载体。搜索命中、目录相似或服务计数单位不能证明身份或环境背景。 | retail-foreground-protocol |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 部分增量门店作业模块 |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | 经明确适用判断及必要支持完成后的同配置原封自提比较 |
| excluded_use | 完整门店/家电全生命周期或全部448组商品；未完成独立结果作为完整零售服务；安全认证 |
| required_metadata | 全部必需限定项、池/Q/来源/责任台账、事件截止、供电方及模块边界 |
| required_quality_disclosure | 部分范围、身份、未结供应/BOM数据、实际存在性证据、缺失模块、不确定性及不可归一化池 |
| update_trigger | 实际版本/包装/渠道变化；新交换；迟发验收/退货；资产寿命或供应边界修订 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| un-cpc62144 | official_guidance | UNSD CPC 3.0 62144, https://unstats.un.org/unsd/classifications/Econ/Structure/Detail/EN/2100/62144 | 仅分类：非专门商店448组商品服务；更窄产品/服务案例，不声称全叶覆盖 |
| philips-hd9350-spec | handbook | Philips HD9350/90 specification, issue 2023-03-12, version 7.7.1, pp.1–3, https://www.documents.philips.com/assets/20211219/a86748c87fd3478ebc96ae03005308a5.pdf | 仅实际器具身份及完整设备区分；不推算运行能耗、质量、寿命或完整供应清单 |
| ghg-product-2011 | standard | WRI/WBCSD, Product Life Cycle Accounting and Reporting Standard (2011), chapter9 p.63, https://ghgprotocol.org/sites/default/files/standards/Product-Life-Cycle-Accounting-Reporting-Standard_041613.pdf | 仅先细分再分配及物理关系原则；具体驱动为PCR前景协议选择，不宣称完整标准符合性 |
| retail-foreground-protocol | method_factor | 本PCR第4–9节定义的前瞻前景计量/对账方法；仍须采集数据集特定原始记录 | 声明服务/保管/来源责任、实际表/秤采集及明确部分模块完成方法；为编制设计，不提供数字观测 |
