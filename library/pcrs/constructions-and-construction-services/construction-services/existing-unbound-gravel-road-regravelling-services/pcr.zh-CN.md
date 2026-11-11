---
pcr_id: pcr.existing-unbound-gravel-road-regravelling-services
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 既有无结合料碎砾石道路重新铺砾维修服务

## 1. 范围与适用性

本PCR适用于一项有明确范围的既有道路重新铺砾维修合同。既有道路须结构适用、非高架、采用无结合料天然碎砾石路面。翻松并整形留用路面，消除相关坑槽、车辙和高路肩，恢复规定路拱与排水，再供应、均料和铺撒规定的天然磨耗层集料。实际批准工法采用时计入调湿和机械碾压；完成整饰后交付具体桩号路段。FHWA第3.18–3.21节说明该顺序；其中示例数量不作为通用规格。

排除新建道路成形、结构性路基重建、沥青或混凝土面层、化学稳定或抑尘结合剂、再生沥青或受污染集料路线、新建桥梁/隧道/涵洞、交通运营及周期养护计划。该维修所需的局部路侧排水修正须纳入本范围，或明确由无重复负担的其他责任方承担。结构不适用的既有道路不属于本路线，不能用铺新砾石掩盖问题。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.existing-unbound-gravel-road-regravelling-services |
| classification_refs | cpc:3.0:54211；较窄维修子集；分类不确立产品身份 |
| covered_products | 适用既有无结合料道路的天然碎砾石磨耗层维修验收服务 |
| excluded_products | 新建或结构性重建道路；有结合料或化学处理面层；再生沥青路线；后续交通与养护 |
| representative_product | 既有路面准备后重新铺砾并验收的一项具体桩号范围路段 |
| production_route | 既有道路适用性确认 → 翻松/整形与排水准备门槛 → 天然集料收货总量（扣皮重，未预扣退货）、堆条/均料/铺撒 → 实际调湿与碾压 → 几何、材料与压实验收 |
| market_state | 客户签署交接时的场址特定竣工维修服务；既有道路留在原位 |


## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 验收的既有无结合料碎砾石道路重新铺砾维修服务 |
| How much | 1 Item(s)：一项实际维修合同路段，声明桩号、宽度与处理面积；不同尺寸路段的件数不具等价性 |
| How well | 既有道路适用；准备后的路拱/排水合格；规定集料级配/塑性/含水、均匀层厚及实际合同几何/压实条件合格，缺陷关闭 |
| How long or cycle | 从适用性确认至签署交接的一次有界维修作业；声明起止日期、全部报告期及准备/铺设/返工阶段；不承诺未来交通寿命 |
| reference_flow_link | `accepted_regravelling` |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 验收的既有无结合料碎砾石道路重新铺砾维修服务 |
| 参考流属性 | 数量 `01846770-4cfe-4a25-8ad9-919d8d378345` |
| 参考单位组 | 计数单位 `5beb6eed-33a9-47b8-9ede-1dfe8f679159` |
| 参考单位 | Item(s) |
| 必需限定信息 | 道路ID；准确桩号/宽度/面积；初始结构和表面状态；规定路拱/排水；集料来源、天然属性、级配/塑性与收货含水量；实际铺撒/完工层几何及密度试验基准；实际调湿/碾压工法；验收标准来源/公差/结果；日期、天气与签署维修交接 |


## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| counted_contract | 参考产品 | 数量 | Item(s) | 1 Item(s)仅代表声明的验收合同路段，不代表一公里或一吨集料。按cp_accepted_regravelling记录实际面积、长度、厚度与验收；几何强度指标仅为派生披露。 |
| aggregate_state | new_aggregate; aggregate_return; rejected_layer | 质量 | kg | 分别记录湿态收货总质量（扣皮重，未预扣退货）、安装材料、实际退货与期末库存；同批次记录含水量和实际干质量换算。松散体积不等于完工体积；换算前测量密度与状态。 |
| native_service_units | prep_plant_grader; prep_plant_scarifier; prep_plant_drainage_machine; prep_plant_traffic_control; prep_plant_tool; atom_req_prepare_host_prep_plant actual-child group; finish_plant_grader; finish_plant_water_bowser; finish_plant_roller; finish_plant_traffic_control; finish_plant_tool; atom_req_regravel_finish_finish_plant actual-child group; atom_req_regravel_finish_aggregate_haul actual-child group; finish_water_product; atom_req_regravel_finish_finish_water_abstraction actual-child group; prep_electricity; finish_electricity | 实际原生属性 | h; tkm; m3; kWh | 保留实际时长、货运、水体积和电量单位；数据集绑定前核实支持链。体积转质量须有该批水/材料的实测密度、温度与含水基准；不使用计数替代或通用收缩、燃料、排放因子。 |
| receipt_mass_basis | new_aggregate; host_surplus; prep_removed_waste_sediment; prep_removed_waste_soil; prep_removed_waste_gravel; prep_removed_waste_debris; atom_req_prepare_host_prep_removed_waste actual-child group; aggregate_return; rejected_layer | 质量 | kg | 收货/领用与向外发运的总量指已扣车辆/容器皮重、尚未预扣退货或其他向外转移的材料量。gross_kg与tare_kg分别记录含载车辆/容器称量和皮重时，二者相减所得材料质量才进入衡算，不能把含车辆皮重的地磅总重当材料量；保留秤精度和匹配含水/状态。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 已确认适用的既有无结合料天然碎砾石道路，记录病害、路拱/排水与结构适用性；新集料处于声明的上游供给门 |
| starting_condition_role | 留用的既有道路及原位库存，不是新采购集料或新建道路输出 |
| product_classification_scope | 非高架道路施工服务的有界维修子集；不自动包含整条道路建造 |
| recursive_input_rule | 既往道路维修数据集可说明留用状态，但不是新采购同类别服务。实际分包准备按真实接口只记录一次，明确责任方及负担覆盖。 |
| upstream_dataset_requirement | 实际集料供给、能源、物流与机具支持数据，门槛和单位相符并包含生产及相关生命周期负担；缺失覆盖保留为数据缺口 |
| disclosure | 声明维修桩号/报告期、留用边界、排水责任、供应商运输覆盖、实际返工/出口、库存结转和机具生命周期归属；无避免替换信用 |

### 边界规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `scope_eligibility` | foreground_system_boundary | 本PCR适用于一项有明确范围的既有道路重新铺砾维修合同。既有道路须结构适用、非高架、采用无结合料天然碎砾石路面。翻松并整形留用路面，消除相关坑槽、车辙和高路肩，恢复规定路拱与排水，再供应、均料和铺撒规定的天然磨耗层集料。实际批准工法采用时计入调湿和机械碾压；完成整饰后交付具体桩号路段。FHWA第3.18–3.21节说明该顺序；其中示例数量不作为通用规格。 排除新建道路成形、结构性路基重建、沥青或混凝土面层、化学稳定或抑尘结合剂、再生沥青或受污染集料路线、新建桥梁/隧道/涵洞、交通运营及周期养护计划。该维修所需的局部路侧排水修正须纳入本范围，或明确由无重复负担的其他责任方承担。结构不适用的既有道路不属于本路线，不能用铺新砾石掩盖问题。 |  |
| bounded_host | prepare_host | 原道路建造在本次增量维修范围之外。计入实际翻松、整形、必要排水修正和搬运/移除；原位留用材料不是免费采购投入或负废物。 | fhwa-gravel-2015 |
| physical_gates | prepare_host; regravel_finish | 准备阶段仅在路拱/排水和病害修正满足实际条件后交接同一原位道路。铺设阶段在该父状态上完成新层。文件/收据是证据，不是额外过程输出。 | fhwa-gravel-2015 |
| supply_ownership | regravel_finish | 实际集料上游生产及实际进场/退货/废物、水和设备物流由全维修主账只计一次。供给已含的采石处理或运输不再重复前景建模。收货为总量（扣皮重，未预扣退货）；期末库存结转其负担，另列真实向外退货。 | fhwa-gravel-2015 |
| asset_boundary | prep_plant_grader; prep_plant_scarifier; prep_plant_drainage_machine; prep_plant_traffic_control; prep_plant_tool; atom_req_prepare_host_prep_plant actual-child group; finish_plant_grader; finish_plant_water_bowser; finish_plant_roller; finish_plant_traffic_control; finish_plant_tool; atom_req_regravel_finish_finish_plant actual-child group | 每台共用平地机、压路机、洒水车及交通控制工具须识别两节点和其他任务/报告期。通过真实供应商覆盖或完整寿命资产账覆盖制造、调遣、使用/维护、更换和寿命终结；披露缺口，不指定任意寿命。 |  |
| water_release | regravel_finish | 区分采购水、直接环境取水和内部回用。捕集径流/废水按真实交接记录；只有实际到达指定接收介质的水/物质才记录基本流释放。 |  |


## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| prepare_host | 留用道路翻松、整形与准备 | required | 适用既有道路在新层铺设前需要有记录的准备 | 独立成形责任：有病害既有几何状态变为验收翻松/整形路拱和排水交接状态 | 同一实际合同桩号和准备面积 |
| regravel_finish | 新无结合料磨耗层铺设与整饰 | required | 准备门槛通过后；工法要求时采用实际调湿/碾压 | 留用父状态的表面整饰：集料交付总量（扣皮重，未预扣退货）、嵌入式均料/铺撒、实际压实和验收维修 | 1 Item(s)验收的桩号有界维修 |

留用道路交接是内部原位状态，不是新资产或第二项最终服务。准备失败在prepare_host内循环；级配、层几何或压实不合格在regravel_finish内返工，仅物理上需要时返回准备。事件账保留产生节点、重复操作和真实边界出口。均料是嵌入式整饰，不是独立销售配方。准备承担独立道路几何变化，翻松/调理不另设材料处理节点；新层整饰承担其最终几何，不另设制品成形或装配节点。

### 过程：既有道路翻松、整形与铺砾前准备 (`prepare_host`)

#### 输入

##### 产品流

###### 完整生命周期每小时道路准备平地机服务 (`prep_plant_grader`)

本卡仅表示一个已识别的完整生命周期每小时道路准备平地机服务，统一采用Time/h完整生命周期供用服务参考量。仅当小时是实测且兼容的资产服务驱动、每相同小时负担覆盖所有消费者的完整制造、维护、替换及寿终时启用。直接燃料／备件和供应商已含阶段仅归属一次。取得完整已观测寿命或历史加有来源的剩余使用／替换／终止／寿终、不确定性、敏感性及更新。其他原生合同参考量无证据不得换成h，该实际需求继续保持未解决。范围证据需求：独立实际节点小时、全消费者完整寿命h分母和完整生命周期覆盖；无默认寿命或每小时因子。

- 选定流: 完整生命周期每小时道路准备平地机服务
- 流属性/单位: Duration / h
- 数量规则: 实际归属工程／节点资产服务小时仅除以实际合格参考分母一次。配套上游负担为完整资产生命周期负担除以有据全消费者完整寿命服务小时，其分母为相同h。不得再将交换量除完整寿命小时、叠加资产等价Item(s)视图，或套材料库存／整机件数公式。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_atom_prep_plant_grader`

###### 完整生命周期每小时道路松刨机服务 (`prep_plant_scarifier`)

本卡仅表示一个已识别的完整生命周期每小时道路松刨机服务，统一采用Time/h完整生命周期供用服务参考量。仅当小时是实测且兼容的资产服务驱动、每相同小时负担覆盖所有消费者的完整制造、维护、替换及寿终时启用。直接燃料／备件和供应商已含阶段仅归属一次。取得完整已观测寿命或历史加有来源的剩余使用／替换／终止／寿终、不确定性、敏感性及更新。其他原生合同参考量无证据不得换成h，该实际需求继续保持未解决。范围证据需求：独立实际节点小时、全消费者完整寿命h分母和完整生命周期覆盖；无默认寿命或每小时因子。

- 选定流: 完整生命周期每小时道路松刨机服务
- 流属性/单位: Duration / h
- 数量规则: 实际归属工程／节点资产服务小时仅除以实际合格参考分母一次。配套上游负担为完整资产生命周期负担除以有据全消费者完整寿命服务小时，其分母为相同h。不得再将交换量除完整寿命小时、叠加资产等价Item(s)视图，或套材料库存／整机件数公式。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_atom_prep_plant_scarifier`

###### 完整生命周期每小时排水处理机械服务 (`prep_plant_drainage_machine`)

本卡仅表示一个已识别的完整生命周期每小时排水处理机械服务，统一采用Time/h完整生命周期供用服务参考量。仅当小时是实测且兼容的资产服务驱动、每相同小时负担覆盖所有消费者的完整制造、维护、替换及寿终时启用。直接燃料／备件和供应商已含阶段仅归属一次。取得完整已观测寿命或历史加有来源的剩余使用／替换／终止／寿终、不确定性、敏感性及更新。其他原生合同参考量无证据不得换成h，该实际需求继续保持未解决。范围证据需求：独立实际节点小时、全消费者完整寿命h分母和完整生命周期覆盖；无默认寿命或每小时因子。

- 选定流: 完整生命周期每小时排水处理机械服务
- 流属性/单位: Duration / h
- 数量规则: 实际归属工程／节点资产服务小时仅除以实际合格参考分母一次。配套上游负担为完整资产生命周期负担除以有据全消费者完整寿命服务小时，其分母为相同h。不得再将交换量除完整寿命小时、叠加资产等价Item(s)视图，或套材料库存／整机件数公式。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_atom_prep_plant_drainage_machine`

###### 完整每小时交通控制供用服务 (`prep_plant_traffic_control`)

本卡为独立有界的完整每小时交通控制供用服务，唯一Duration/h；只按实际合同物理可用／使用期间启动，保留范围及归属待机／返工。它不自动是自有机器，不能用人工工时、价格或假定班次代理。完整供应商数据可按真实相同h包含全部适用资源与生命周期阶段；部分覆盖则采实际未含材料／能源／运输／废物，仅对适用真实资产分配完整寿命份额一次，不假设资产或燃料。范围证据需求：实际独立服务h、合同供应边界、全部已含未含资源、合格归属、不确定性及独立证据。

- 选定流: 完整每小时交通控制供用服务
- 流属性/单位: Duration / h
- 数量规则: 实际单功能服务独立有据归属小时仅除原合格参考分母一次；按真实合同／期间沿用原直接／共享服务归属，不在h上再次乘资产份额。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_atom_prep_plant_traffic_control`

###### 完整生命周期每小时准备工具供用 (`prep_plant_tool`)

本卡仅表示一个已识别的完整生命周期每小时准备工具供用，统一采用Time/h完整生命周期供用服务参考量。仅当小时是实测且兼容的资产服务驱动、每相同小时负担覆盖所有消费者的完整制造、维护、替换及寿终时启用。直接燃料／备件和供应商已含阶段仅归属一次。取得完整已观测寿命或历史加有来源的剩余使用／替换／终止／寿终、不确定性、敏感性及更新。其他原生合同参考量无证据不得换成h，该实际需求继续保持未解决。范围证据需求：独立实际节点小时、全消费者完整寿命h分母和完整生命周期覆盖；无默认寿命或每小时因子。

- 选定流: 完整生命周期每小时准备工具供用
- 流属性/单位: Duration / h
- 数量规则: 实际归属工程／节点资产服务小时仅除以实际合格参考分母一次。配套上游负担为完整资产生命周期负担除以有据全消费者完整寿命服务小时，其分母为相同h。不得再将交换量除完整寿命小时、叠加资产等价Item(s)视图，或套材料库存／整机件数公式。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_atom_prep_plant_tool`

###### 实际准备阶段电力供给 (`prep_electricity`)

使用时按实际供应记录本节点计量采购电力，不重复机具/供应商覆盖。

- 选定流：实际准备阶段电力供给
- 流属性/单位：能量 / kWh
- 数量规则：实际可归属计量电量；未用时有证据声明；cp_prep_electricity。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_prep_electricity`

数量范围证据需求：由电表/任务记录采集作业电量区间、电表精度与分配；不假设电网或消耗。

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 重新铺砾交接时准备完成的既有道路 (`prepared_host`)

内部原位道路接口保留原道路身份和材料；不是新路生产、采购道路或第二项最终维修。

- 选定流：重新铺砾交接时准备完成的既有道路
- 流属性/单位：Number of items / Item(s)
- 数量规则：实际铺前批准后仅对同一声明准备路段记录1 Item(s)；cp_prepared_host。
- 数值来源模式：`fixed_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_prepared_host`
- 来源：`fhwa-gravel-2015`

数量范围证据需求：一路段定义精确；采集验收桩号/面积/路拱/排水公差和测量不确定性，不编造体积产率。

###### 实际向外交接的可用既有道路剩料 (`host_surplus`)

仅有实际向外可用材料批次及产品交接证明时作产品输出。原位留用材料和期末库存是内部余额。

- 选定流：实际向外交接的可用既有道路剩料
- 流属性/单位：质量 / kg
- 数量规则：按身份/去向记录实际向外可用剩料总质量（扣皮重，未预扣退货）；不存在出口须有证据；cp_host_surplus。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_host_surplus`

数量范围证据需求：采集称量向外批次数量区间、含水和不确定性；不假设可用比例或替代信用。

##### 废物流

###### 实际单独废弃的准备沉积物 (`prep_removed_waste_sediment`)

本卡仅表示按实际移交状态及接收方捕集的实际单独废弃的准备沉积物。仅当此流确实物理分开计量／处理时启用；仍在同一混合载体中的材料，须在强制细化台账记录该真实混合物，不能同时在此重复计其所含组分。记录干湿基、污染、状态及接收方。历史主体拆除物不是新的上游采购或负材料供应。不推断回收／避免生产抵扣、父总量或集合Range。范围证据需求：独立净kg移交称量／计量、接收证据及真实含水／组成和不确定性。

- 选定流: 实际单独废弃的准备沉积物
- 流属性/单位: Mass / kg
- 数量规则: 本载体／状态／接收方真实单独计量的移交废物kg数量仅除以实际合格参考分母一次。不得把供应库存或父混合废物总量当每个子流数量；保留修复／退回／期末及载体内所含组分不得重复处置。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_atom_prep_removed_waste_sediment`

###### 实际单独废弃的准备土料 (`prep_removed_waste_soil`)

本卡仅表示按实际移交状态及接收方捕集的实际单独废弃的准备土料。仅当此流确实物理分开计量／处理时启用；仍在同一混合载体中的材料，须在强制细化台账记录该真实混合物，不能同时在此重复计其所含组分。记录干湿基、污染、状态及接收方。历史主体拆除物不是新的上游采购或负材料供应。不推断回收／避免生产抵扣、父总量或集合Range。范围证据需求：独立净kg移交称量／计量、接收证据及真实含水／组成和不确定性。

- 选定流: 实际单独废弃的准备土料
- 流属性/单位: Mass / kg
- 数量规则: 本载体／状态／接收方真实单独计量的移交废物kg数量仅除以实际合格参考分母一次。不得把供应库存或父混合废物总量当每个子流数量；保留修复／退回／期末及载体内所含组分不得重复处置。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_atom_prep_removed_waste_soil`

###### 实际单独废弃的既有砾石 (`prep_removed_waste_gravel`)

本卡仅表示按实际移交状态及接收方捕集的实际单独废弃的既有砾石。仅当此流确实物理分开计量／处理时启用；仍在同一混合载体中的材料，须在强制细化台账记录该真实混合物，不能同时在此重复计其所含组分。记录干湿基、污染、状态及接收方。历史主体拆除物不是新的上游采购或负材料供应。不推断回收／避免生产抵扣、父总量或集合Range。范围证据需求：独立净kg移交称量／计量、接收证据及真实含水／组成和不确定性。

- 选定流: 实际单独废弃的既有砾石
- 流属性/单位: Mass / kg
- 数量规则: 本载体／状态／接收方真实单独计量的移交废物kg数量仅除以实际合格参考分母一次。不得把供应库存或父混合废物总量当每个子流数量；保留修复／退回／期末及载体内所含组分不得重复处置。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_atom_prep_removed_waste_gravel`

###### 实际废弃的准备杂物实物载体 (`prep_removed_waste_debris`)

本卡仅表示按实际移交状态及接收方捕集的实际废弃的准备杂物实物载体。仅当此流确实物理分开计量／处理时启用；仍在同一混合载体中的材料，须在强制细化台账记录该真实混合物，不能同时在此重复计其所含组分。记录干湿基、污染、状态及接收方。历史主体拆除物不是新的上游采购或负材料供应。不推断回收／避免生产抵扣、父总量或集合Range。范围证据需求：独立净kg移交称量／计量、接收证据及真实含水／组成和不确定性。

- 选定流: 实际废弃的准备杂物实物载体
- 流属性/单位: Mass / kg
- 数量规则: 本载体／状态／接收方真实单独计量的移交废物kg数量仅除以实际合格参考分母一次。不得把供应库存或父混合废物总量当每个子流数量；保留修复／退回／期末及载体内所含组分不得重复处置。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_atom_prep_removed_waste_debris`

##### 基本流

### 过程：新无结合料磨耗层铺设与整饰 (`regravel_finish`)

#### 输入

##### 产品流

###### 新磨耗层铺设接收的已准备既有道路 (`host_to_finish`)

同一留用原位路段通过内部准备门槛接收；实际准备负担只计一次，不加新建整路负担。

- 选定流：新磨耗层铺设接收的已准备既有道路
- 流属性/单位：Number of items / Item(s)
- 数量规则：同一真实批准准备路段1 Item(s)；cp_host_to_finish。
- 数值来源模式：`fixed_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_host_to_finish`
- 来源：`fhwa-gravel-2015`

数量范围证据需求：精确关联路段计数；从cp_prepared_host获取交接测量不确定性和门槛公差，不假设已验收。

###### 供给门处实际规定天然磨耗层集料 (`new_aggregate`)

每一实际天然采石/破碎或砾石批次须与供给级配、来源、含水和磨耗层用途匹配；不能用采石开挖或沥青流替代。

- 选定流：供给门处实际规定天然磨耗层集料
- 流属性/单位：质量 / kg
- 数量规则：按供应商/批次记录退货前实际收货总质量（扣皮重，未预扣退货）；cp_new_aggregate。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_new_aggregate`
- 来源：`fhwa-gravel-2015`

数量范围证据需求：采集批次收货/领用质量区间、含水、松散/铺设密度和规定级配/塑性限值；FHWA收缩/厚度示例不作默认。

###### 实际调湿采购水 (`finish_water_product`)

只有外部供给水作为产品投入；区分其来源/处理、供给已含运输、真实环境取水和内部回用。

- 选定流：实际调湿采购水
- 流属性/单位：体积 / m3
- 数量规则：本维修实际采购领用水毛体积；cp_finish_water_product。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_finish_water_product`
- 来源：`fhwa-gravel-2015`

数量范围证据需求：采集实测采购体积区间、精度及真实分配损失；转kg须有实际密度和温度。

###### 完整生命周期每小时收面平地机服务 (`finish_plant_grader`)

本卡仅表示一个已识别的完整生命周期每小时收面平地机服务，统一采用Time/h完整生命周期供用服务参考量。仅当小时是实测且兼容的资产服务驱动、每相同小时负担覆盖所有消费者的完整制造、维护、替换及寿终时启用。直接燃料／备件和供应商已含阶段仅归属一次。取得完整已观测寿命或历史加有来源的剩余使用／替换／终止／寿终、不确定性、敏感性及更新。其他原生合同参考量无证据不得换成h，该实际需求继续保持未解决。范围证据需求：独立实际节点小时、全消费者完整寿命h分母和完整生命周期覆盖；无默认寿命或每小时因子。

- 选定流: 完整生命周期每小时收面平地机服务
- 流属性/单位: Duration / h
- 数量规则: 实际归属工程／节点资产服务小时仅除以实际合格参考分母一次。配套上游负担为完整资产生命周期负担除以有据全消费者完整寿命服务小时，其分母为相同h。不得再将交换量除完整寿命小时、叠加资产等价Item(s)视图，或套材料库存／整机件数公式。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_atom_finish_plant_grader`

###### 完整生命周期每小时洒水车供用 (`finish_plant_water_bowser`)

本卡仅表示一个已识别的完整生命周期每小时洒水车供用，统一采用Time/h完整生命周期供用服务参考量。仅当小时是实测且兼容的资产服务驱动、每相同小时负担覆盖所有消费者的完整制造、维护、替换及寿终时启用。直接燃料／备件和供应商已含阶段仅归属一次。取得完整已观测寿命或历史加有来源的剩余使用／替换／终止／寿终、不确定性、敏感性及更新。其他原生合同参考量无证据不得换成h，该实际需求继续保持未解决。范围证据需求：独立实际节点小时、全消费者完整寿命h分母和完整生命周期覆盖；无默认寿命或每小时因子。

- 选定流: 完整生命周期每小时洒水车供用
- 流属性/单位: Duration / h
- 数量规则: 实际归属工程／节点资产服务小时仅除以实际合格参考分母一次。配套上游负担为完整资产生命周期负担除以有据全消费者完整寿命服务小时，其分母为相同h。不得再将交换量除完整寿命小时、叠加资产等价Item(s)视图，或套材料库存／整机件数公式。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_atom_finish_plant_water_bowser`

###### 完整生命周期每小时压路机服务 (`finish_plant_roller`)

本卡仅表示一个已识别的完整生命周期每小时压路机服务，统一采用Time/h完整生命周期供用服务参考量。仅当小时是实测且兼容的资产服务驱动、每相同小时负担覆盖所有消费者的完整制造、维护、替换及寿终时启用。直接燃料／备件和供应商已含阶段仅归属一次。取得完整已观测寿命或历史加有来源的剩余使用／替换／终止／寿终、不确定性、敏感性及更新。其他原生合同参考量无证据不得换成h，该实际需求继续保持未解决。范围证据需求：独立实际节点小时、全消费者完整寿命h分母和完整生命周期覆盖；无默认寿命或每小时因子。

- 选定流: 完整生命周期每小时压路机服务
- 流属性/单位: Duration / h
- 数量规则: 实际归属工程／节点资产服务小时仅除以实际合格参考分母一次。配套上游负担为完整资产生命周期负担除以有据全消费者完整寿命服务小时，其分母为相同h。不得再将交换量除完整寿命小时、叠加资产等价Item(s)视图，或套材料库存／整机件数公式。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_atom_finish_plant_roller`

###### 完整每小时收面交通控制供用 (`finish_plant_traffic_control`)

本卡为独立有界的完整每小时收面交通控制供用，唯一Duration/h；只按实际合同物理可用／使用期间启动，保留范围及归属待机／返工。它不自动是自有机器，不能用人工工时、价格或假定班次代理。完整供应商数据可按真实相同h包含全部适用资源与生命周期阶段；部分覆盖则采实际未含材料／能源／运输／废物，仅对适用真实资产分配完整寿命份额一次，不假设资产或燃料。范围证据需求：实际独立服务h、合同供应边界、全部已含未含资源、合格归属、不确定性及独立证据。

- 选定流: 完整每小时收面交通控制供用
- 流属性/单位: Duration / h
- 数量规则: 实际单功能服务独立有据归属小时仅除原合格参考分母一次；按真实合同／期间沿用原直接／共享服务归属，不在h上再次乘资产份额。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_atom_finish_plant_traffic_control`

###### 完整生命周期每小时收面工具供用 (`finish_plant_tool`)

本卡仅表示一个已识别的完整生命周期每小时收面工具供用，统一采用Time/h完整生命周期供用服务参考量。仅当小时是实测且兼容的资产服务驱动、每相同小时负担覆盖所有消费者的完整制造、维护、替换及寿终时启用。直接燃料／备件和供应商已含阶段仅归属一次。取得完整已观测寿命或历史加有来源的剩余使用／替换／终止／寿终、不确定性、敏感性及更新。其他原生合同参考量无证据不得换成h，该实际需求继续保持未解决。范围证据需求：独立实际节点小时、全消费者完整寿命h分母和完整生命周期覆盖；无默认寿命或每小时因子。

- 选定流: 完整生命周期每小时收面工具供用
- 流属性/单位: Duration / h
- 数量规则: 实际归属工程／节点资产服务小时仅除以实际合格参考分母一次。配套上游负担为完整资产生命周期负担除以有据全消费者完整寿命服务小时，其分母为相同h。不得再将交换量除完整寿命小时、叠加资产等价Item(s)视图，或套材料库存／整机件数公式。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_atom_finish_plant_tool`

###### 实际新层整饰电力供给 (`finish_electricity`)

使用时按供给和覆盖记录整饰/试验真实电量，不重复供应商已含电力。

- 选定流：实际新层整饰电力供给
- 流属性/单位：能量 / kWh
- 数量规则：实际应归属计量电量；未用须有证据；cp_finish_electricity。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_finish_electricity`

数量范围证据需求：采集实测kWh区间和分配不确定性；不假设电网或面积系数。

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 验收的既有无结合料碎砾石道路重新铺砾维修服务 (`accepted_regravelling`)

具体桩号有界维修在留用道路上完成规定天然磨耗层并关闭缺陷，于签署交接时完成；不产出整条新路或未来交通服务。

- 选定流：验收的既有无结合料碎砾石道路重新铺砾维修服务
- 流属性/单位：Number of items / Item(s)
- 数量规则：1 Item(s)
- 数值来源模式：`fixed_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_accepted_regravelling`
- 来源：`fhwa-gravel-2015`

数量范围证据需求：一项验收路段定义精确；采集几何、密度/含水、材料和验收试验区间及规定公差；无通用层厚或道路寿命范围。

###### 实际向外退回的可用新集料 (`aggregate_return`)

只有产品交接状态的真实向外可用集料才是退货；原位剩料/期末库存与废物交接拒收料是不同状态。

- 选定流：实际向外退回的可用新集料
- 流属性/单位：质量 / kg
- 数量规则：按批次/接收方记录真实向外可用退货总量（扣皮重，未预扣退货），不事先从投入净扣；cp_aggregate_return。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_aggregate_return`

数量范围证据需求：采集真实退货称量区间、含水与交接不确定性；无默认退货率或避免集料信用。

##### 废物流

###### 以废物移除的实际拒收集料或新层材料 (`rejected_layer`)

分别记录真实向外以废物交接的拒收天然集料流；原位重新平整/碾压材料在本节点内部循环，不作废物出口或验收输出。

- 选定流：以废物移除的实际拒收集料或新层材料
- 流属性/单位：质量 / kg
- 数量规则：按流和去向记录实际向外拒收料质量；cp_rejected_layer。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_rejected_layer`

数量范围证据需求：从缺陷和废物凭证采集各流拒收/移除质量与不确定性；无默认拒收率。

###### 实际捕集并外送处理的径流或废水 (`captured_runoff`)

只有调湿径流/清理水实际捕集且向外处理时作废物交换；明确悬浮材料及真实液体状态。

- 选定流：实际捕集并外送处理的径流或废水
- 流属性/单位：质量 / kg
- 数量规则：按流/接收方记录实际外送废水质量，体积转质量仅用实测密度；cp_captured_runoff。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_captured_runoff`

数量范围证据需求：采集真实捕集体积/质量范围、液体密度/固体和交接不确定性；不假设全部加水成为废水。

##### 基本流

###### 实际施工H2O水蒸气排入空气未细分区室 (`finish_water_release_h2o_vapour_air`)

仅本节点实际H2O水蒸气排入空气未细分区室时启动，须有蒸发发生、真实H2O物种／状态及该空气区室适用证据。须独立实测纯水kg或经验证的作业特定质量模型；不完整水平衡或全部供水绝不是本排放。捕集废水、土壤水、结合／自由保留水、库存、液体排放及其他节点释放均为互斥去向。范围证据需求：本事件／时间／活动及实际释放与不确定性；任何液态水体积转水质量辅桥须有实际相容水含量／密度／状态／温度／来源，不能假设气体密度或拿湿载体总质量当水质量。

- 选定流: 实际施工H2O水蒸气排入空气未细分区室
- 流属性/单位: Mass / kg
- 数量规则: 本子流独立实测或有验证的实际H2O入空气kg，仅除原真实合格参考分母一次。旧水体积账仅为不可相加辅测，须凭真实同事件相容水状态证据核对。蒸发、密度、水分数、介质或平衡项未知均为缺口，不填零、不从残差推蒸气。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_atom_finish_water_release_h2o_vapour_air`

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| single_repair | accepted_regravelling | 最终预期产出只有一项维修服务；不合格桩号不计入验收输出。全部失败操作、返工、复验及资源保留在最终维修中；无避免新路或替代信用。 |  |
| asset_attribution | prep_plant_grader; prep_plant_scarifier; prep_plant_drainage_machine; prep_plant_traffic_control; prep_plant_tool; atom_req_prepare_host_prep_plant actual-child group; finish_plant_grader; finish_plant_water_bowser; finish_plant_roller; finish_plant_traffic_control; finish_plant_tool; atom_req_regravel_finish_finish_plant actual-child group | 用实际资产记录列出节点、其他任务和报告期。按有证据的完整服务边界及实测利用量分配完整寿命制造、维护/更换和寿命终结负担；保留闲置/调遣归属与终结假设。事件/资产ID只有一个责任方；供应商服务覆盖不得与单列机具/燃料重复。 已结束寿命资产采用实测历史服务。在役资产可使用有依据的未来剩余服务、更换/终止和寿命终结情景；区分预测与观测，披露完整寿命利用量分母、来源、不确定性/敏感性及更新触发。不编造未来退役日期或默认寿命；缺少有据完整覆盖或分母才构成数据缺口，资产仍在役本身不阻止建模。 |  |
| period_custody | 所有清单行 | 将收货/领用、留用道路交接、返工、退货、验收和资产更换/终结关联至有日期的报告期。期初库存加收货总量（扣皮重，未预扣退货）须与安装、向外退货/废物、实测损失和期末库存核对。库存及负担向后期只结转一次；不得先净扣退货又记录向外流。 |  |
| outward_material | host_surplus; aggregate_return; prep_removed_waste_sediment; prep_removed_waste_soil; prep_removed_waste_gravel; prep_removed_waste_debris; atom_req_prepare_host_prep_removed_waste actual-child group; rejected_layer | 每个实际向外批次按法定交接和去向区分可用产品退货/剩料、废物或真实环境释放。回收或销售不自动产生联产品信用；有证据披露采用的分配并闭合负担与运输责任。 |  |
| atom_grouped_ledgers | 所有实际子流记录 | 既有公式只适用于其对应角色：材料库存、资产寿命份额／小时供用、完整服务事件、内部转移及物种／去向计算彼此不同，不得将材料库存或逐工程整机采购公式套给资产份额或服务事件。在适用方法内，再按具体子流身份／材料、状态、唯一交换属性单位、受纳介质及归属／事件范围分组。原生与换算视图不可相加。集合诊断总量不是流身份或各子流分子；不完整部分明确保留。完整配方、组件及真实有界单功能服务按整体保留，所含组分／资源不得再次采购。 |  |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_atom_req_regravel_finish_nonburned_fuel_fates | regravel_finish | atom_req_regravel_finish_nonburned_fuel_fates | mandatory_refinement | actual_fuel_grade; event_id; period_id; source_fuel_requirement; actual_fate; actual_child_row_id; one_property; one_unit; same_grade_component_kg; independent_whole_carrier_quantity; species_if_actual_release; receiving_medium; recovered_closing_link; actual_receiver; custody_receipt; leg_id; burden_owner; scope_and_provider_overlap; actual_absence_evidence; unresolved_reason | 在regravel_finish独立采全部实际未用燃料外退／其他所有者转移、携带或回收期末库存、围控未燃烧废物、清理载体及真实未围控物种介质去向。按真实牌号、事件期间、源及归属索引，保留燃料组分kg及真实整体物理载体的唯一明确交换单位实测量。污染液体／吸附载体整体与其内燃料物种为不可相加视图，不作重复废物交换。真实牌号载体物种介质数量去向范围未知即不完整，不推燃烧、不猜不存在或零。以cp_atom_req_regravel_finish_nonburned_fuel_fates关联对应供应S与独立燃烧B、真实接收及运输段归属和原库存供方规则；仅真实外部保管退出才是出口，内部回收期末燃料不同时当外退或废物。 | 每实际独立交换唯一明确单位 | 逐实际燃料去向事件及批次结束 | 实际完整修复批次 | regravel_finish | 每参考流 | 须实际数量去向支撑，缺失保持不完整 |
| cp_atom_req_prepare_host_nonburned_fuel_fates | prepare_host | atom_req_prepare_host_nonburned_fuel_fates | mandatory_refinement | actual_fuel_grade; event_id; period_id; source_fuel_requirement; actual_fate; actual_child_row_id; one_property; one_unit; same_grade_component_kg; independent_whole_carrier_quantity; species_if_actual_release; receiving_medium; recovered_closing_link; actual_receiver; custody_receipt; leg_id; burden_owner; scope_and_provider_overlap; actual_absence_evidence; unresolved_reason | 在prepare_host独立采全部实际未用燃料外退／其他所有者转移、携带或回收期末库存、围控未燃烧废物、清理载体及真实未围控物种介质去向。按真实牌号、事件期间、源及归属索引，保留燃料组分kg及真实整体物理载体的唯一明确交换单位实测量。污染液体／吸附载体整体与其内燃料物种为不可相加视图，不作重复废物交换。真实牌号载体物种介质数量去向范围未知即不完整，不推燃烧、不猜不存在或零。以cp_atom_req_prepare_host_nonburned_fuel_fates关联对应供应S与独立燃烧B、真实接收及运输段归属和原库存供方规则；仅真实外部保管退出才是出口，内部回收期末燃料不同时当外退或废物。 | 每实际独立交换唯一明确单位 | 逐实际燃料去向事件及批次结束 | 实际完整修复批次 | prepare_host | 每参考流 | 须实际数量去向支撑，缺失保持不完整 |
| cp_prep_plant | prepare_host | 实际道路准备机具服务 | 实际场址/供应商记录 | asset_id; provider; task; event_id; start_time; end_time; service_hours_h; idle_hours_h; other_job_consumers; period; manufacture_maintenance_replacement_end_of_life_scope; utilization_denominator; attribution_share | 使用计时表/任务日志和供应商范围；列出本节点、整饰及其他合同/报告期，按asset_attribution一致分配完整寿命服务。 | h | 每个事件/批次及全部重复操作 | 完整资产生命周期覆盖：制造/购置、全部贡献服务/报告期间、维护/更换及终止/寿命末端；观测历史与有证据的未来剩余情景分开保留，包含本作业及全部失败/重复尝试。 | 声明作业/节点/现场，以及同一资产完整寿命分母代表的全部使用节点、作业、提供方及报告期间，包含本现场以外使用者。 | per reference flow | 保留全部寿命阶段证据、更换/终结决策及燃料/机具服务单一归属；时长支持链仍需核实。 已结束寿命资产采用实测历史服务。在役资产可使用有依据的未来剩余服务、更换/终止和寿命终结情景；区分预测与观测，披露完整寿命利用量分母、来源、不确定性/敏感性及更新触发。不编造未来退役日期或默认寿命；缺少有据完整覆盖或分母才构成数据缺口，资产仍在役本身不阻止建模。 |
| cp_prep_fuel | prepare_host | 按供给牌号区分的实际准备机具燃料 | 实际场址/供应商记录 | fuel_grade; asset_id; period; opening_kg; gross_issues_kg; closing_kg; other_job_kg; density_kg_per_m3; temperature_C; fuel_service_owner; outward_return_kg; outward_transfer_kg; transfer_owner; spill_kg; spill_medium_or_waste_receiver; spill_treatment; legacy_actual_consumed_kg_not_supply_or_burn; actual_supply_S_kg; actual_burned_B_kg; attributed_opening_kg; attributed_gross_receipts_net_kg; attributed_carried_closing_kg; nonburned_waste_fuel_component_kg; uncontained_loss_fuel_component_kg; total_spill_audit_kg; recovered_to_closing_kg; recovered_to_return_kg; recovered_to_waste_kg; actual_fate_event_owner; all_consumer_grade_period_fates; fate_completeness_evidence; independent_burn_measurement; fate_balance_gap_kg; measured_volume; volume_unit; actual_density_source; physical_state; temperature_unit; actual_conversion_evidence | 逐实际燃料牌号、归属节点及期间，上游产品供应S_kg＝归属期初燃料＋实际去皮毛收货／领用－带负担结转期末燃料。采用原毛投入并列真实外流约定：可用外退及真实其他所有者转移保留独立实测正向保管外流及原携带负担，不再第二次扣减或给避免生产信用。未退回未燃烧废弃及未围控损失仍在S中，因其已需上游供应。期末保留／回收库存带负担结转，不是外流。共享罐／领用须完整真实消费者事件归属账，含其他工程及全部去向；other_job_kg不得隐藏本节点损失或重复供应商已含燃料供给。S仅除N个唯一最终合格合同修复区段一次；S不是燃烧活动量。 以校准发动机／燃烧器消耗证据独立测量实际燃烧B_kg，或使用完全审计、互斥、同牌号归属账：期初＋毛收货／领用＝期末＋B＋可用外退＋真实其他所有者转移＋围控未燃烧废物＋未围控损失。仅完整有据去向账可推算B，未知差额或未测溢漏绝不推为燃烧或零。总spill为事故审计而不是另一终点池；回收份额按实际最终期末／外退／废物仅归一次，不再扣事故总量。保留完整修复批次、待机及重复准备／摊铺／压实、事件节点供方归属与校准不确定性。体积转kg须实际同牌号批次密度值／单位／来源、物态、温度及单位和实测体积单位，仅换一次。完整服务已含燃料不能再作本地采购或本地排放归属。 | kg | 每个事件/批次及全部重复操作 | 完整有界维修作业，关联报告日期 | 实际声明桩号和负责供应商 | per reference flow | 真实燃料收据与实测密度；无默认消耗或燃烧因子；去向不明量不能视为已耗燃料，记录衡算缺口。 |
| cp_prep_electricity | prepare_host | 实际准备阶段电力供给 | 实际场址/供应商记录 | meter_id; supplier; event_id; start_kWh; end_kWh; period; other_job_kWh; attribution_share; service_scope | 读取校准电表或可追溯供应商分表，明确唯一节点/事件责任。 | kWh | 每个事件/批次及全部重复操作 | 完整有界维修作业，关联报告日期 | 实际声明桩号和负责供应商 | per reference flow | 保留原生kWh；准确能量属性支持链是单独声明的缺口。 |
| cp_prepared_host | prepare_host | 重新铺砾交接时准备完成的既有道路 | 实际场址/供应商记录 | road_id; segment_id; start_chainage_m; end_chainage_m; width_m; area_m2; crown_percent; crossfall_percent; longitudinal_grade_percent; distress; drainage_scope_owner; criterion_source; criterion_tolerance; inspection_result; gate_date; transfer_id | 测量实际桩号、宽度和高程，按合同标准检查修正病害和排水，记录签署铺前门槛并与host_to_finish配对。 | Item(s) | 每个事件/批次及全部重复操作 | 完整有界维修作业，关联报告日期 | 实际声明桩号和负责供应商 | per reference flow | 保留结构适用性、实测几何/单位和公差；不合格准备在本节点返工并承担重复负担。 |
| cp_host_surplus | prepare_host | 实际向外交接的可用既有道路剩料 | 实际场址/供应商记录 | lot_id; material_identity; gross_kg; tare_kg; moisture_percent; destination; product_custody; period; dispatch_id; transport_owner | 称量实际发运可用剩料并保留收方/产品交接证据；同批次不能同时作废物。 | kg | 每个事件/批次及全部重复操作 | 完整有界维修作业，关联报告日期 | 实际声明桩号和负责供应商 | per reference flow | 校准称重、目的地及留用负担处理；无负的原生集料投入。 收货/领用与向外发运的总量指已扣车辆/容器皮重、尚未预扣退货或其他向外转移的材料量。gross_kg与tare_kg分别记录含载车辆/容器称量和皮重时，二者相减所得材料质量才进入衡算，不能把含车辆皮重的地磅总重当材料量；保留秤精度和匹配含水/状态。 |
| cp_prep_removed_waste | prepare_host | 以废物交接的实际准备移除物 | 实际场址/供应商记录 | waste_id; substance_material; waste_status; gross_kg; tare_kg; moisture_percent; producing_task; period; carrier; receiving_facility; treatment; transport_owner | 将废物转移/地磅记录与真实准备任务和去向关联，分别核对留用材料和产品出口。 | kg | 每个事件/批次及全部重复操作 | 完整有界维修作业，关联报告日期 | 实际声明桩号和负责供应商 | per reference flow | 真实交接类型、接收方和运输责任；全部准备及返工废物保留在维修负担。 收货/领用与向外发运的总量指已扣车辆/容器皮重、尚未预扣退货或其他向外转移的材料量。gross_kg与tare_kg分别记录含载车辆/容器称量和皮重时，二者相减所得材料质量才进入衡算，不能把含车辆皮重的地磅总重当材料量；保留秤精度和匹配含水/状态。 |
| cp_prep_dust | prepare_host | 按粒径区分的实际准备粉尘大气释放 | 实际场址/供应商记录 | event_id; activity; material_identity; particle_fraction; medium; mass_kg; sampling_method; detection_limit; actual_moisture_percent; control_state; period; factor_source; uncertainty; measured_rate_kg_per_h; measured_duration_h; actual_activity_unit; applicable_factor_kg_per_activity_unit; factor_reference; applicability_review; calculation_uncertainty | 测量排放或用有实际活动数据的适用方法；区分产生、捕集及真正空气释放。保留实际方法/因子出版物或原始试验引用、单位、机具/燃料/材料/含水/控制/地域适用性、活动量、采样外推和传播不确定性；派生作业总量不是直接测量。 | kg | 每个事件/批次及全部重复操作 | 完整有界维修作业，关联报告日期 | 实际声明桩号和负责供应商 | per reference flow | 粒径/介质和方法适用性；不把移除集料质量自动变为空气粉尘。 |
| cp_prep_exhaust | prepare_host | 实际准备燃烧尾气物种 | 实际场址/供应商记录 | asset_id; fuel_grade; species; medium; emission_mass_kg; activity; engine_control; method_source; uncertainty; period; service_scope_owner; measured_rate_kg_per_h; measured_duration_h; actual_activity_unit; applicable_factor_kg_per_activity_unit; factor_reference; applicability_review; calculation_uncertainty; actual_supply_S_kg_audit_only; matched_fuel_grade_engine_event_node; complete_species_factor_basis; factor_numerator_unit; factor_denominator_unit; factor_source_version; carbon_mass_fraction; carbon_basis; fossil_share_of_carbon; oxidation_or_retained_carbon_method; retained_fossil_carbon_kg; molecular_ratio_source | 燃烧物种因子分母为燃料质量时，仅用匹配牌号／发动机／事件／节点燃料协议独立实际燃烧B_kg，绝不用供应产品S_kg、全部领用量或未知损失代B。其他因子基准用其独立实测相容真实发动机活动，或采用物种实测量／实测物种速率乘匹配实际持续时间。保留精确物种粒径、受纳介质、燃料发动机控制适用性、分子分母单位、来源版本及传播不确定性。完整物种因子若已表示化石CO2或其他物种，不再额外乘碳、化石、氧化、组成、去向或分子换算。若另有依据改用化石CO2碳平衡，须从实际B及有据组成基准算已氧化化石碳kg；仅在该基准需要时各乘总碳分数和碳中化石占比一次，氧化分数或独立有据滞留未氧化化石碳扣减择一，对同碳不得并用。已氧化化石碳以有来源44/12仅换CO2一次，碳换算只适用已识别CO2，不套粉尘或其他污染物。非燃烧粉尘沿用自身真实材料活动含水捕集粒径方法。方法基准或去向未知即不完整，不将上游／供方排放重复作本地释放。 | kg | 每个事件/批次及全部重复操作 | 完整有界维修作业，关联报告日期 | 实际声明桩号和负责供应商 | per reference flow | 物质身份和接收介质；无无来源氧化或排放因子。 |
| cp_host_to_finish | regravel_finish | 新磨耗层铺设接收的已准备既有道路 | 实际场址/供应商记录 | transfer_id; road_id; segment_id; start_chainage_m; end_chainage_m; area_m2; preparation_gate_date; criterion_source; criterion_tolerance; receiving_inspection; period | 将交接ID和实际测量路段与准备交接配对，铺撒前检查实际物理状态。 | Item(s) | 每个事件/批次及全部重复操作 | 完整有界维修作业，关联报告日期 | 实际声明桩号和负责供应商 | per reference flow | 无第二次采购或上游道路收费；保留准备负担，不重复参考输出。 |
| cp_new_aggregate | regravel_finish | 供给门处实际规定天然磨耗层集料 | 实际场址/供应商记录 | lot_id; supplier; natural_origin; material_grade; grading_test; plasticity_test; gross_kg; tare_kg; moisture_percent; loose_density_kg_per_m3; placed_density_kg_per_m3; receipt_date; installed_kg; outward_return_kg; waste_kg; closing_stock_kg; source_gate; haul_coverage | 核对地磅收货总量（扣皮重，未预扣退货）与货单、实际铺设/安装材料、向外退货/拒收及期末库存；体积换算前测量对应状态密度。 | kg | 每个事件/批次及全部重复操作 | 完整有界维修作业，关联报告日期 | 实际声明桩号和负责供应商 | per reference flow | 批次质量可追溯且秤经校准；不先净扣后再退货，留库材料结转其负担。 收货/领用与向外发运的总量指已扣车辆/容器皮重、尚未预扣退货或其他向外转移的材料量。gross_kg与tare_kg分别记录含载车辆/容器称量和皮重时，二者相减所得材料质量才进入衡算，不能把含车辆皮重的地磅总重当材料量；保留秤精度和匹配含水/状态。 |
| cp_aggregate_haul | regravel_finish | 供应商覆盖之外的实际全维修物流 | 实际场址/供应商记录 | leg_id; producing_node; leg_owner; cargo_lot_asset_id; carrier; vehicle; source; destination; cargo_t; distance_km; empty_distance_km; loading_basis; period; supplier_provider_scope | 采用regravel_finish主责的全维修物流账，核对真实发运/承运记录及producing_node/leg_owner矩阵，覆盖准备/整饰出口、供给和调遣。按实际装载/空返方法计算吨公里，剔除供应商已含运输。 | tkm | 每个事件/批次及全部重复操作 | 完整有界维修作业，关联报告日期 | 实际声明桩号和负责供应商 | per reference flow | leg_id唯一，产生节点和主责清楚；材料出口归原节点，运输数量和负担不在原节点重复。实际货物/距离单位；运输支持链未核实。 |
| cp_finish_water_product | regravel_finish | 实际调湿采购水 | 实际场址/供应商记录 | water_supplier; supply_state; meter_id; received_m3; issued_m3; closing_m3; return_m3; internal_reuse_m3; temperature_C; density_kg_per_m3; period; supply_transport_scope | 读取校准收货/领用表或可追溯洒水车供水记录，核对水箱库存和实际调湿；内部循环不作新供给。 | m3 | 每个事件/批次及全部重复操作 | 完整有界维修作业，关联报告日期 | 实际声明桩号和负责供应商 | per reference flow | 不假设降雨、采购水和取水等价；零用量须实际工法证据。 |
| cp_finish_water_abstraction | regravel_finish | 本维修实际环境取水 | 实际场址/供应商记录 | source_id; environmental_compartment; permit; meter_id; abstracted_m3; period; reuse_m3; pump_energy_owner; temperature_C; density_kg_per_m3 | 读取校准取水表及水源/许可记录，区分环境取水、采购供给和回用。 | m3 | 每个事件/批次及全部重复操作 | 完整有界维修作业，关联报告日期 | 实际声明桩号和负责供应商 | per reference flow | 须真实水源介质及水支持/单位链；未使用也须明确记录。 |
| cp_finish_plant | regravel_finish | 实际铺设与压实机具服务 | 实际场址/供应商记录 | asset_id; provider; event_id; operation; start_time; end_time; service_hours_h; idle_hours_h; pass_count; other_node_job_consumers; period; lifecycle_scope; utilization_denominator; attribution_share | 使用实际小时/任务日志与供应商覆盖，和共用资产账配对；制造、维护/更换和寿命终结在全部任务/报告期只计一次。 | h | 每个事件/批次及全部重复操作 | 完整资产生命周期覆盖：制造/购置、全部贡献服务/报告期间、维护/更换及终止/寿命末端；观测历史与有证据的未来剩余情景分开保留，包含本作业及全部失败/重复尝试。 | 声明作业/节点/现场，以及同一资产完整寿命分母代表的全部使用节点、作业、提供方及报告期间，包含本现场以外使用者。 | per reference flow | 不遗漏资本阶段或重复单列燃料；保留真实更换/终结和覆盖缺口。 已结束寿命资产采用实测历史服务。在役资产可使用有依据的未来剩余服务、更换/终止和寿命终结情景；区分预测与观测，披露完整寿命利用量分母、来源、不确定性/敏感性及更新触发。不编造未来退役日期或默认寿命；缺少有据完整覆盖或分母才构成数据缺口，资产仍在役本身不阻止建模。 |
| cp_finish_fuel | regravel_finish | 按牌号区分的实际铺设、洒水和碾压燃料 | 实际场址/供应商记录 | fuel_grade; asset_id; event_id; period; opening_kg; issues_kg; closing_kg; other_job_kg; density_kg_per_m3; temperature_C; service_scope_owner; outward_return_kg; outward_transfer_kg; transfer_owner; spill_kg; spill_medium_or_waste_receiver; spill_treatment; legacy_actual_consumed_kg_not_supply_or_burn; actual_supply_S_kg; actual_burned_B_kg; attributed_opening_kg; attributed_gross_receipts_net_kg; attributed_carried_closing_kg; nonburned_waste_fuel_component_kg; uncontained_loss_fuel_component_kg; total_spill_audit_kg; recovered_to_closing_kg; recovered_to_return_kg; recovered_to_waste_kg; actual_fate_event_owner; all_consumer_grade_period_fates; fate_completeness_evidence; independent_burn_measurement; fate_balance_gap_kg; measured_volume; volume_unit; actual_density_source; physical_state; temperature_unit; actual_conversion_evidence | 逐实际燃料牌号、归属节点及期间，上游产品供应S_kg＝归属期初燃料＋实际去皮毛收货／领用－带负担结转期末燃料。采用原毛投入并列真实外流约定：可用外退及真实其他所有者转移保留独立实测正向保管外流及原携带负担，不再第二次扣减或给避免生产信用。未退回未燃烧废弃及未围控损失仍在S中，因其已需上游供应。期末保留／回收库存带负担结转，不是外流。共享罐／领用须完整真实消费者事件归属账，含其他工程及全部去向；other_job_kg不得隐藏本节点损失或重复供应商已含燃料供给。S仅除N个唯一最终合格合同修复区段一次；S不是燃烧活动量。 以校准发动机／燃烧器消耗证据独立测量实际燃烧B_kg，或使用完全审计、互斥、同牌号归属账：期初＋毛收货／领用＝期末＋B＋可用外退＋真实其他所有者转移＋围控未燃烧废物＋未围控损失。仅完整有据去向账可推算B，未知差额或未测溢漏绝不推为燃烧或零。总spill为事故审计而不是另一终点池；回收份额按实际最终期末／外退／废物仅归一次，不再扣事故总量。保留完整修复批次、待机及重复准备／摊铺／压实、事件节点供方归属与校准不确定性。体积转kg须实际同牌号批次密度值／单位／来源、物态、温度及单位和实测体积单位，仅换一次。完整服务已含燃料不能再作本地采购或本地排放归属。 | kg | 每个事件/批次及全部重复操作 | 完整有界维修作业，关联报告日期 | 实际声明桩号和负责供应商 | per reference flow | 校准计量和真实批次密度；不自动等同尾气；去向不明不能算燃烧，记录衡算缺口。 |
| cp_finish_electricity | regravel_finish | 实际新层整饰电力供给 | 实际场址/供应商记录 | meter_id; supplier; event_id; opening_kWh; closing_kWh; period; other_job_kWh; attribution_share; service_scope | 读取真实校准电表/分表和可追溯任务记录，责任范围内计入返工和试验。 | kWh | 每个事件/批次及全部重复操作 | 完整有界维修作业，关联报告日期 | 实际声明桩号和负责供应商 | per reference flow | 保留原生kWh；能量支持链与供应商身份须核实。 |
| cp_accepted_regravelling | regravel_finish | 验收的既有无结合料碎砾石道路重新铺砾维修服务 | 实际场址/供应商记录 | road_id; segment_id; start_chainage_m; end_chainage_m; width_m; treated_area_m2; layer_thickness_mm; crown_percent; longitudinal_grade_percent; moisture_percent; compacted_density_kg_per_m3; density_test_method; grading; plasticity; actual_water_roller_method; weather; criterion_source; criterion_tolerance; test_result; defect_id; rework_closeout; handover_date; reporting_period; client_signoff | 测量实际完工路段，按现行合同条件进行规定材料/几何/含水/压实试验，保留签署验收和全部缺陷/复验关闭。实际桩号/面积作为限定信息，不作为计数等价输出。 | Item(s) | 每个事件/批次及全部重复操作 | 完整有界维修作业，关联报告日期 | 实际声明桩号和负责供应商 | per reference flow | 不计未验收桩号，不设通用性能目标；保留完整准备、维修及返工负担。 |
| cp_aggregate_return | regravel_finish | 实际向外退回的可用新集料 | 实际场址/供应商记录 | dispatch_id; lot_id; material_identity; gross_kg; tare_kg; moisture_percent; recipient; product_custody; transport_owner; period; input_receipt_id | 用发运称量和接收方记录，与new_aggregate收货总量（扣皮重，未预扣退货）及期末库存核对，真实负担/退货处理只保留一次。 | kg | 每个事件/批次及全部重复操作 | 完整有界维修作业，关联报告日期 | 实际声明桩号和负责供应商 | per reference flow | 不得出口留库材料或将同一拒收批次分类两次。 收货/领用与向外发运的总量指已扣车辆/容器皮重、尚未预扣退货或其他向外转移的材料量。gross_kg与tare_kg分别记录含载车辆/容器称量和皮重时，二者相减所得材料质量才进入衡算，不能把含车辆皮重的地磅总重当材料量；保留秤精度和匹配含水/状态。 |
| cp_rejected_layer | regravel_finish | 以废物移除的实际拒收集料或新层材料 | 实际场址/供应商记录 | defect_id; originating_event; stream_id; material_identity; reason; rework_path; gross_kg; tare_kg; moisture_percent; waste_status; recipient; treatment; transport_owner; period | 将级配/几何/压实不合格关联真实返工或移除记录，称量向外废物；替换集料和重复操作计入维修。 | kg | 每个事件/批次及全部重复操作 | 完整有界维修作业，关联报告日期 | 实际声明桩号和负责供应商 | per reference flow | 关闭每个拒收路径，不与可用退货、原位库存或真实粉尘释放重复。 收货/领用与向外发运的总量指已扣车辆/容器皮重、尚未预扣退货或其他向外转移的材料量。gross_kg与tare_kg分别记录含载车辆/容器称量和皮重时，二者相减所得材料质量才进入衡算，不能把含车辆皮重的地磅总重当材料量；保留秤精度和匹配含水/状态。 |
| cp_captured_runoff | regravel_finish | 实际捕集并外送处理的径流或废水 | 实际场址/供应商记录 | stream_id; receiver; treatment; captured_m3; mass_kg; density_kg_per_m3; temperature_C; solids_test; waste_custody; period; transport_owner | 读取真实水箱/称量与接收方记录，结合不确定性核对加水、留存含水、回用与真实释放。 | kg | 每个事件/批次及全部重复操作 | 完整有界维修作业，关联报告日期 | 实际声明桩号和负责供应商 | per reference flow | 废物去向和密度证据；不同时重复作基本流水/污染物释放。 |
| cp_finish_dust | regravel_finish | 按粒径区分的实际铺层粉尘大气释放 | 实际场址/供应商记录 | event_id; operation; aggregate_lot; substance; particle_fraction; medium; mass_kg; activity; moisture_percent; controls; sampling_method; method_source; uncertainty; period; measured_rate_kg_per_h; measured_duration_h; actual_activity_unit; applicable_factor_kg_per_activity_unit; factor_reference; applicability_review; calculation_uncertainty | 用真实场地采样或有实际操作输入的合理方法，计入返工排放，仅扣确证捕集量。保留方法/因子出版物或原始试验引用、单位、实际技术/燃料/材料/含水/控制/地域适用性、活动量、采样外推及传播不确定性；派生作业总量不是直接测量。 | kg | 每个事件/批次及全部重复操作 | 完整有界维修作业，关联报告日期 | 实际声明桩号和负责供应商 | per reference flow | 须真实粒径和接收介质；无证据不使用散料转粉尘系数。 |
| cp_finish_exhaust | regravel_finish | 实际新层整饰燃烧尾气物种 | 实际场址/供应商记录 | asset_id; fuel_grade; species; medium; mass_kg; actual_burned_B_kg_if_fuel_factor; engine_control; method_source; uncertainty; event_id; period; coverage_owner; measured_rate_kg_per_h; measured_duration_h; actual_activity_unit; applicable_factor_kg_per_activity_unit; factor_reference; applicability_review; calculation_uncertainty; actual_supply_S_kg_audit_only; matched_fuel_grade_engine_event_node; complete_species_factor_basis; factor_numerator_unit; factor_denominator_unit; factor_source_version; carbon_mass_fraction; carbon_basis; fossil_share_of_carbon; oxidation_or_retained_carbon_method; retained_fossil_carbon_kg; molecular_ratio_source | 燃烧物种因子分母为燃料质量时，仅用匹配牌号／发动机／事件／节点燃料协议独立实际燃烧B_kg，绝不用供应产品S_kg、全部领用量或未知损失代B。其他因子基准用其独立实测相容真实发动机活动，或采用物种实测量／实测物种速率乘匹配实际持续时间。保留精确物种粒径、受纳介质、燃料发动机控制适用性、分子分母单位、来源版本及传播不确定性。完整物种因子若已表示化石CO2或其他物种，不再额外乘碳、化石、氧化、组成、去向或分子换算。若另有依据改用化石CO2碳平衡，须从实际B及有据组成基准算已氧化化石碳kg；仅在该基准需要时各乘总碳分数和碳中化石占比一次，氧化分数或独立有据滞留未氧化化石碳扣减择一，对同碳不得并用。已氧化化石碳以有来源44/12仅换CO2一次，碳换算只适用已识别CO2，不套粉尘或其他污染物。非燃烧粉尘沿用自身真实材料活动含水捕集粒径方法。方法基准或去向未知即不完整，不将上游／供方排放重复作本地释放。 | kg | 每个事件/批次及全部重复操作 | 完整有界维修作业，关联报告日期 | 实际声明桩号和负责供应商 | per reference flow | 保留化学身份、介质和方法有效性；无泛尾气交换或默认因子。 |
| cp_finish_water_release | regravel_finish | 维修实际向环境介质释放的水 | 实际场址/供应商记录 | pathway_id; source_water; medium; release_m3; moisture_retained_m3; reuse_m3; captured_outward_m3; measured_inflow_m3; storage_change_m3; density_kg_per_m3; temperature_C; method_source; uncertainty; period; new_aggregate_incoming_water_m3; retained_host_initial_water_m3; retained_host_final_water_m3; rainfall_m3; external_runon_m3; rainfall_runon_evidence; unmatched_gap_m3 | 核对实测供水/取水、储存/留存水分、回用与捕集废水，各环境路径独立有据。纳入新集料和留用道路初末实测含水、跨界材料水，仅有证据时纳入真实有影响降雨/外来径流。这些是衡算边界项，不是额外采购水或信用；缺测保留明确衡算缺口。 | m3 | 每个事件/批次及全部重复操作 | 完整有界维修作业，关联报告日期 | 实际声明桩号和负责供应商 | per reference flow | 无证据不将残差派往空气/水/土壤；真实物种释放单独展开，体积支持链须核实。 |
| cp_atom_prep_plant_grader | prepare_host | 完整生命周期每小时道路准备平地机服务 | actual_record | asset_id; actual_child_row_id; node_id; job_id; event_id; period_id; job_node_driver; driver_unit; all_consumer_full_life_driver; full_life_driver_unit; all_consumer_job_node_period_ids; observed_history; observed_history_source; evidenced_remaining_use; remaining_use_source; manufacture_burden; maintenance_burden; replacement_events_and_burdens; termination_basis; end_of_life_burden; lifecycle_sources; direct_fuel_spare_provider_overlap_exclusion; burden_reference_unit; complete_life_burden_per_hour_if_hour_view; job_node_service_hours_if_hour_view; uncertainty; sensitivity; update_trigger; reference_denominator_quantity; reference_denominator_unit; reference_acceptance_record_id; density_value; density_unit; density_state; temperature; temperature_unit; density_source; conversion_source; conversion_uncertainty; supplier_package_membership; same_SKU_mass_evidence; other_nonadditive_measurements; matched_input_row_id; unresolved_reason | 由生命周期／维护／使用者记录采集实际资产ID、计量工程节点驱动量、同单位全消费者完整寿命分母及完整阶段负担。区分观察历史与有来源未来剩余，关联替换／终止／寿终、全部工程／节点／期间及不确定性／敏感性／更新。资产等价视图用(job_node_driver/full_life_driver)/参考分母，配每Item(s)完整负担；小时视图用job_node_hours/参考分母，配每相同h完整负担。只用本卡指定一种视图，不得并用或逐工程买整台，排除直接／供应商／备件／BOM重复。 | h | 逐实际事件及期间结束 | 完整有界批次及适用的共享生命周期 | prepare_host | 每参考流 | 独立可追溯数量、来源、保管及不确定性；未知保持不完整 |
| cp_atom_prep_plant_scarifier | prepare_host | 完整生命周期每小时道路松刨机服务 | actual_record | asset_id; actual_child_row_id; node_id; job_id; event_id; period_id; job_node_driver; driver_unit; all_consumer_full_life_driver; full_life_driver_unit; all_consumer_job_node_period_ids; observed_history; observed_history_source; evidenced_remaining_use; remaining_use_source; manufacture_burden; maintenance_burden; replacement_events_and_burdens; termination_basis; end_of_life_burden; lifecycle_sources; direct_fuel_spare_provider_overlap_exclusion; burden_reference_unit; complete_life_burden_per_hour_if_hour_view; job_node_service_hours_if_hour_view; uncertainty; sensitivity; update_trigger; reference_denominator_quantity; reference_denominator_unit; reference_acceptance_record_id; density_value; density_unit; density_state; temperature; temperature_unit; density_source; conversion_source; conversion_uncertainty; supplier_package_membership; same_SKU_mass_evidence; other_nonadditive_measurements; matched_input_row_id; unresolved_reason | 由生命周期／维护／使用者记录采集实际资产ID、计量工程节点驱动量、同单位全消费者完整寿命分母及完整阶段负担。区分观察历史与有来源未来剩余，关联替换／终止／寿终、全部工程／节点／期间及不确定性／敏感性／更新。资产等价视图用(job_node_driver/full_life_driver)/参考分母，配每Item(s)完整负担；小时视图用job_node_hours/参考分母，配每相同h完整负担。只用本卡指定一种视图，不得并用或逐工程买整台，排除直接／供应商／备件／BOM重复。 | h | 逐实际事件及期间结束 | 完整有界批次及适用的共享生命周期 | prepare_host | 每参考流 | 独立可追溯数量、来源、保管及不确定性；未知保持不完整 |
| cp_atom_prep_plant_drainage_machine | prepare_host | 完整生命周期每小时排水处理机械服务 | actual_record | asset_id; actual_child_row_id; node_id; job_id; event_id; period_id; job_node_driver; driver_unit; all_consumer_full_life_driver; full_life_driver_unit; all_consumer_job_node_period_ids; observed_history; observed_history_source; evidenced_remaining_use; remaining_use_source; manufacture_burden; maintenance_burden; replacement_events_and_burdens; termination_basis; end_of_life_burden; lifecycle_sources; direct_fuel_spare_provider_overlap_exclusion; burden_reference_unit; complete_life_burden_per_hour_if_hour_view; job_node_service_hours_if_hour_view; uncertainty; sensitivity; update_trigger; reference_denominator_quantity; reference_denominator_unit; reference_acceptance_record_id; density_value; density_unit; density_state; temperature; temperature_unit; density_source; conversion_source; conversion_uncertainty; supplier_package_membership; same_SKU_mass_evidence; other_nonadditive_measurements; matched_input_row_id; unresolved_reason | 由生命周期／维护／使用者记录采集实际资产ID、计量工程节点驱动量、同单位全消费者完整寿命分母及完整阶段负担。区分观察历史与有来源未来剩余，关联替换／终止／寿终、全部工程／节点／期间及不确定性／敏感性／更新。资产等价视图用(job_node_driver/full_life_driver)/参考分母，配每Item(s)完整负担；小时视图用job_node_hours/参考分母，配每相同h完整负担。只用本卡指定一种视图，不得并用或逐工程买整台，排除直接／供应商／备件／BOM重复。 | h | 逐实际事件及期间结束 | 完整有界批次及适用的共享生命周期 | prepare_host | 每参考流 | 独立可追溯数量、来源、保管及不确定性；未知保持不完整 |
| cp_atom_prep_plant_traffic_control | prepare_host | 完整每小时交通控制供用服务 | actual_record | child_row_id; parent_role_id; actual_sku_or_concrete_identity; node_id; event_id; period_id; custody_sender; custody_receiver; measurement_point; timestamp; measurement_method; calibration; uncertainty; service_h; receipt_or_transfer_id; opening_service_h; external_receipts_net_service_h; closing_carried_service_h; usable_return_service_h; waste_service_h; uncontained_loss_service_h; provider_or_assembly_coverage_exclusion; source_record; reference_denominator_quantity; reference_denominator_unit; reference_acceptance_record_id; density_value; density_unit; density_state; temperature; temperature_unit; density_source; conversion_source; conversion_uncertainty; supplier_package_membership; same_SKU_mass_evidence; other_nonadditive_measurements; matched_input_row_id; unresolved_reason; single_service_function; actual_contract_service_h; provider_scope; included_resources; uncovered_actual_resources; actual_direct_or_shared_assignment; owned_idle_rework_h; same_hour_complete_burden; actual_absence_evidence | 逐事件／期间／供方独立采本单功能实际合同h，含归属待机返工；核相同h完整供应商资源范围，部分覆盖仅补实际缺失活动及适用完整寿命资产份额一次。原服务分配及合格分母仅执行一次，不用费用／人工／假定班次，不在h上再乘资产份额。 | h | 逐实际事件及期间结束 | 完整有界批次及适用的共享生命周期 | prepare_host | 每参考流 | 独立可追溯数量、来源、保管及不确定性；未知保持不完整 |
| cp_atom_prep_plant_tool | prepare_host | 完整生命周期每小时准备工具供用 | actual_record | asset_id; actual_child_row_id; node_id; job_id; event_id; period_id; job_node_driver; driver_unit; all_consumer_full_life_driver; full_life_driver_unit; all_consumer_job_node_period_ids; observed_history; observed_history_source; evidenced_remaining_use; remaining_use_source; manufacture_burden; maintenance_burden; replacement_events_and_burdens; termination_basis; end_of_life_burden; lifecycle_sources; direct_fuel_spare_provider_overlap_exclusion; burden_reference_unit; complete_life_burden_per_hour_if_hour_view; job_node_service_hours_if_hour_view; uncertainty; sensitivity; update_trigger; reference_denominator_quantity; reference_denominator_unit; reference_acceptance_record_id; density_value; density_unit; density_state; temperature; temperature_unit; density_source; conversion_source; conversion_uncertainty; supplier_package_membership; same_SKU_mass_evidence; other_nonadditive_measurements; matched_input_row_id; unresolved_reason | 由生命周期／维护／使用者记录采集实际资产ID、计量工程节点驱动量、同单位全消费者完整寿命分母及完整阶段负担。区分观察历史与有来源未来剩余，关联替换／终止／寿终、全部工程／节点／期间及不确定性／敏感性／更新。资产等价视图用(job_node_driver/full_life_driver)/参考分母，配每Item(s)完整负担；小时视图用job_node_hours/参考分母，配每相同h完整负担。只用本卡指定一种视图，不得并用或逐工程买整台，排除直接／供应商／备件／BOM重复。 | h | 逐实际事件及期间结束 | 完整有界批次及适用的共享生命周期 | prepare_host | 每参考流 | 独立可追溯数量、来源、保管及不确定性；未知保持不完整 |
| cp_atom_req_prepare_host_prep_plant | prepare_host | atom_req_prepare_host_prep_plant | mandatory_refinement | parent_requirement_id; actual_child_row_id; single_object_or_true_mixed_carrier; sku_or_service_result_or_species; physical_state_or_gate; process_id; direction; flow_type; one_exchange_property; one_exchange_unit; receiving_compartment; source_or_destination; event_id; period_id; measurement_point; timestamp; independent_quantity; quantity_evidence; auxiliary_measurements; supported_conversion; provider_or_assembly_scope; overlap_owner; stock_fate_ledger_id; actual_absence_evidence; unresolved_reason; completion_status | 列全本要求下的实际子流名册；每项独立测量事件仅归入一个子流／材料＋属性＋单位＋状态／介质组。对各适用兼容组使用cp_prep_plant原始字段与方法，不使用不分对象的父总量。按同对象同单位闭合投入／产出／库存／去向和配对转移；父合计仅作不可相加诊断。真实混合废物载体与所含污染物视图不得叠加。明确记录有据不存在或未解决证据，未知不得填零。原准备／返工／期间／供应商／资产及Range证据义务全部继续强制。 | 逐条独立子流记录仅一个明确单位 | 逐实际子流／事件及完整阶段结束 | 原完整边界及全部适用期间 | prepare_host | 每参考流 | 名册／数量／单位／身份／范围／闭合缺失即不完整；方法检查不自动证明现场完成 |
| cp_atom_req_prepare_host_prep_fuel | prepare_host | atom_req_prepare_host_prep_fuel | mandatory_refinement | parent_requirement_id; actual_child_row_id; single_object_or_true_mixed_carrier; sku_or_service_result_or_species; physical_state_or_gate; process_id; direction; flow_type; one_exchange_property; one_exchange_unit; receiving_compartment; source_or_destination; event_id; period_id; measurement_point; timestamp; independent_quantity; quantity_evidence; auxiliary_measurements; supported_conversion; provider_or_assembly_scope; overlap_owner; stock_fate_ledger_id; actual_absence_evidence; unresolved_reason; completion_status | 列全本要求下的实际子流名册；每项独立测量事件仅归入一个子流／材料＋属性＋单位＋状态／介质组。对各适用兼容组使用cp_prep_fuel原始字段与方法，不使用不分对象的父总量。按同对象同单位闭合投入／产出／库存／去向和配对转移；父合计仅作不可相加诊断。真实混合废物载体与所含污染物视图不得叠加。明确记录有据不存在或未解决证据，未知不得填零。原准备／返工／期间／供应商／资产及Range证据义务全部继续强制。 | 逐条独立子流记录仅一个明确单位 | 逐实际子流／事件及完整阶段结束 | 原完整边界及全部适用期间 | prepare_host | 每参考流 | 名册／数量／单位／身份／范围／闭合缺失即不完整；方法检查不自动证明现场完成 |
| cp_atom_prep_removed_waste_sediment | prepare_host | 实际单独废弃的准备沉积物 | actual_record | child_row_id; parent_role_id; actual_sku_or_concrete_identity; node_id; event_id; period_id; custody_sender; custody_receiver; measurement_point; timestamp; measurement_method; calibration; uncertainty; mass_kg; receipt_or_transfer_id; opening_mass_kg; external_receipts_net_mass_kg; closing_carried_mass_kg; usable_return_mass_kg; waste_mass_kg; uncontained_loss_mass_kg; provider_or_assembly_coverage_exclusion; source_record; reference_denominator_quantity; reference_denominator_unit; reference_acceptance_record_id; density_value; density_unit; density_state; temperature; temperature_unit; density_source; conversion_source; conversion_uncertainty; supplier_package_membership; same_SKU_mass_evidence; other_nonadditive_measurements; matched_input_row_id; unresolved_reason | 在真实发运及接收保管点独立称量／计量本实际对外退回或废物载体的kg数量；记录净／皮重、实际状态、适用的污染／含水、事件及去向回执。可用未用退回匹配原同SKU投入并仅采用一种负担口径。废物按实际单独处理整载体计量，不把所含污染物另加为废物，也不从混合总量推每个子量。保留修复、期末库存和实际内部转移不是向外处置。逐子流执行cp_prep_removed_waste原适用去向／归属方法，再归一化一次。 | kg | 逐实际事件及期间结束 | 完整有界批次及适用的共享生命周期 | prepare_host | 每参考流 | 独立可追溯数量、来源、保管及不确定性；未知保持不完整 |
| cp_atom_prep_removed_waste_soil | prepare_host | 实际单独废弃的准备土料 | actual_record | child_row_id; parent_role_id; actual_sku_or_concrete_identity; node_id; event_id; period_id; custody_sender; custody_receiver; measurement_point; timestamp; measurement_method; calibration; uncertainty; mass_kg; receipt_or_transfer_id; opening_mass_kg; external_receipts_net_mass_kg; closing_carried_mass_kg; usable_return_mass_kg; waste_mass_kg; uncontained_loss_mass_kg; provider_or_assembly_coverage_exclusion; source_record; reference_denominator_quantity; reference_denominator_unit; reference_acceptance_record_id; density_value; density_unit; density_state; temperature; temperature_unit; density_source; conversion_source; conversion_uncertainty; supplier_package_membership; same_SKU_mass_evidence; other_nonadditive_measurements; matched_input_row_id; unresolved_reason | 在真实发运及接收保管点独立称量／计量本实际对外退回或废物载体的kg数量；记录净／皮重、实际状态、适用的污染／含水、事件及去向回执。可用未用退回匹配原同SKU投入并仅采用一种负担口径。废物按实际单独处理整载体计量，不把所含污染物另加为废物，也不从混合总量推每个子量。保留修复、期末库存和实际内部转移不是向外处置。逐子流执行cp_prep_removed_waste原适用去向／归属方法，再归一化一次。 | kg | 逐实际事件及期间结束 | 完整有界批次及适用的共享生命周期 | prepare_host | 每参考流 | 独立可追溯数量、来源、保管及不确定性；未知保持不完整 |
| cp_atom_prep_removed_waste_gravel | prepare_host | 实际单独废弃的既有砾石 | actual_record | child_row_id; parent_role_id; actual_sku_or_concrete_identity; node_id; event_id; period_id; custody_sender; custody_receiver; measurement_point; timestamp; measurement_method; calibration; uncertainty; mass_kg; receipt_or_transfer_id; opening_mass_kg; external_receipts_net_mass_kg; closing_carried_mass_kg; usable_return_mass_kg; waste_mass_kg; uncontained_loss_mass_kg; provider_or_assembly_coverage_exclusion; source_record; reference_denominator_quantity; reference_denominator_unit; reference_acceptance_record_id; density_value; density_unit; density_state; temperature; temperature_unit; density_source; conversion_source; conversion_uncertainty; supplier_package_membership; same_SKU_mass_evidence; other_nonadditive_measurements; matched_input_row_id; unresolved_reason | 在真实发运及接收保管点独立称量／计量本实际对外退回或废物载体的kg数量；记录净／皮重、实际状态、适用的污染／含水、事件及去向回执。可用未用退回匹配原同SKU投入并仅采用一种负担口径。废物按实际单独处理整载体计量，不把所含污染物另加为废物，也不从混合总量推每个子量。保留修复、期末库存和实际内部转移不是向外处置。逐子流执行cp_prep_removed_waste原适用去向／归属方法，再归一化一次。 | kg | 逐实际事件及期间结束 | 完整有界批次及适用的共享生命周期 | prepare_host | 每参考流 | 独立可追溯数量、来源、保管及不确定性；未知保持不完整 |
| cp_atom_prep_removed_waste_debris | prepare_host | 实际废弃的准备杂物实物载体 | actual_record | child_row_id; parent_role_id; actual_sku_or_concrete_identity; node_id; event_id; period_id; custody_sender; custody_receiver; measurement_point; timestamp; measurement_method; calibration; uncertainty; mass_kg; receipt_or_transfer_id; opening_mass_kg; external_receipts_net_mass_kg; closing_carried_mass_kg; usable_return_mass_kg; waste_mass_kg; uncontained_loss_mass_kg; provider_or_assembly_coverage_exclusion; source_record; reference_denominator_quantity; reference_denominator_unit; reference_acceptance_record_id; density_value; density_unit; density_state; temperature; temperature_unit; density_source; conversion_source; conversion_uncertainty; supplier_package_membership; same_SKU_mass_evidence; other_nonadditive_measurements; matched_input_row_id; unresolved_reason | 在真实发运及接收保管点独立称量／计量本实际对外退回或废物载体的kg数量；记录净／皮重、实际状态、适用的污染／含水、事件及去向回执。可用未用退回匹配原同SKU投入并仅采用一种负担口径。废物按实际单独处理整载体计量，不把所含污染物另加为废物，也不从混合总量推每个子量。保留修复、期末库存和实际内部转移不是向外处置。逐子流执行cp_prep_removed_waste原适用去向／归属方法，再归一化一次。 | kg | 逐实际事件及期间结束 | 完整有界批次及适用的共享生命周期 | prepare_host | 每参考流 | 独立可追溯数量、来源、保管及不确定性；未知保持不完整 |
| cp_atom_req_prepare_host_prep_removed_waste | prepare_host | atom_req_prepare_host_prep_removed_waste | mandatory_refinement | parent_requirement_id; actual_child_row_id; single_object_or_true_mixed_carrier; sku_or_service_result_or_species; physical_state_or_gate; process_id; direction; flow_type; one_exchange_property; one_exchange_unit; receiving_compartment; source_or_destination; event_id; period_id; measurement_point; timestamp; independent_quantity; quantity_evidence; auxiliary_measurements; supported_conversion; provider_or_assembly_scope; overlap_owner; stock_fate_ledger_id; actual_absence_evidence; unresolved_reason; completion_status | 列全本要求下的实际子流名册；每项独立测量事件仅归入一个子流／材料＋属性＋单位＋状态／介质组。对各适用兼容组使用cp_prep_removed_waste原始字段与方法，不使用不分对象的父总量。按同对象同单位闭合投入／产出／库存／去向和配对转移；父合计仅作不可相加诊断。真实混合废物载体与所含污染物视图不得叠加。明确记录有据不存在或未解决证据，未知不得填零。原准备／返工／期间／供应商／资产及Range证据义务全部继续强制。 | 逐条独立子流记录仅一个明确单位 | 逐实际子流／事件及完整阶段结束 | 原完整边界及全部适用期间 | prepare_host | 每参考流 | 名册／数量／单位／身份／范围／闭合缺失即不完整；方法检查不自动证明现场完成 |
| cp_atom_req_prepare_host_prep_dust | prepare_host | atom_req_prepare_host_prep_dust | mandatory_refinement | parent_requirement_id; actual_child_row_id; single_object_or_true_mixed_carrier; sku_or_service_result_or_species; physical_state_or_gate; process_id; direction; flow_type; one_exchange_property; one_exchange_unit; receiving_compartment; source_or_destination; event_id; period_id; measurement_point; timestamp; independent_quantity; quantity_evidence; auxiliary_measurements; supported_conversion; provider_or_assembly_scope; overlap_owner; stock_fate_ledger_id; actual_absence_evidence; unresolved_reason; completion_status | 列全本要求下的实际子流名册；每项独立测量事件仅归入一个子流／材料＋属性＋单位＋状态／介质组。对各适用兼容组使用cp_prep_dust原始字段与方法，不使用不分对象的父总量。按同对象同单位闭合投入／产出／库存／去向和配对转移；父合计仅作不可相加诊断。真实混合废物载体与所含污染物视图不得叠加。明确记录有据不存在或未解决证据，未知不得填零。原准备／返工／期间／供应商／资产及Range证据义务全部继续强制。 | 逐条独立子流记录仅一个明确单位 | 逐实际子流／事件及完整阶段结束 | 原完整边界及全部适用期间 | prepare_host | 每参考流 | 名册／数量／单位／身份／范围／闭合缺失即不完整；方法检查不自动证明现场完成 |
| cp_atom_req_prepare_host_prep_exhaust | prepare_host | atom_req_prepare_host_prep_exhaust | mandatory_refinement | parent_requirement_id; actual_child_row_id; single_object_or_true_mixed_carrier; sku_or_service_result_or_species; physical_state_or_gate; process_id; direction; flow_type; one_exchange_property; one_exchange_unit; receiving_compartment; source_or_destination; event_id; period_id; measurement_point; timestamp; independent_quantity; quantity_evidence; auxiliary_measurements; supported_conversion; provider_or_assembly_scope; overlap_owner; stock_fate_ledger_id; actual_absence_evidence; unresolved_reason; completion_status | 列全本要求下的实际子流名册；每项独立测量事件仅归入一个子流／材料＋属性＋单位＋状态／介质组。对各适用兼容组使用cp_prep_exhaust原始字段与方法，不使用不分对象的父总量。按同对象同单位闭合投入／产出／库存／去向和配对转移；父合计仅作不可相加诊断。真实混合废物载体与所含污染物视图不得叠加。明确记录有据不存在或未解决证据，未知不得填零。原准备／返工／期间／供应商／资产及Range证据义务全部继续强制。 | 逐条独立子流记录仅一个明确单位 | 逐实际子流／事件及完整阶段结束 | 原完整边界及全部适用期间 | prepare_host | 每参考流 | 名册／数量／单位／身份／范围／闭合缺失即不完整；方法检查不自动证明现场完成 |
| cp_atom_req_regravel_finish_aggregate_haul | regravel_finish | atom_req_regravel_finish_aggregate_haul | mandatory_refinement | parent_requirement_id; actual_child_row_id; single_object_or_true_mixed_carrier; sku_or_service_result_or_species; physical_state_or_gate; process_id; direction; flow_type; one_exchange_property; one_exchange_unit; receiving_compartment; source_or_destination; event_id; period_id; measurement_point; timestamp; independent_quantity; quantity_evidence; auxiliary_measurements; supported_conversion; provider_or_assembly_scope; overlap_owner; stock_fate_ledger_id; actual_absence_evidence; unresolved_reason; completion_status | 列全本要求下的实际子流名册；每项独立测量事件仅归入一个子流／材料＋属性＋单位＋状态／介质组。对各适用兼容组使用cp_aggregate_haul原始字段与方法，不使用不分对象的父总量。按同对象同单位闭合投入／产出／库存／去向和配对转移；父合计仅作不可相加诊断。真实混合废物载体与所含污染物视图不得叠加。明确记录有据不存在或未解决证据，未知不得填零。原准备／返工／期间／供应商／资产及Range证据义务全部继续强制。 | 逐条独立子流记录仅一个明确单位 | 逐实际子流／事件及完整阶段结束 | 原完整边界及全部适用期间 | regravel_finish | 每参考流 | 名册／数量／单位／身份／范围／闭合缺失即不完整；方法检查不自动证明现场完成 |
| cp_atom_finish_plant_grader | regravel_finish | 完整生命周期每小时收面平地机服务 | actual_record | asset_id; actual_child_row_id; node_id; job_id; event_id; period_id; job_node_driver; driver_unit; all_consumer_full_life_driver; full_life_driver_unit; all_consumer_job_node_period_ids; observed_history; observed_history_source; evidenced_remaining_use; remaining_use_source; manufacture_burden; maintenance_burden; replacement_events_and_burdens; termination_basis; end_of_life_burden; lifecycle_sources; direct_fuel_spare_provider_overlap_exclusion; burden_reference_unit; complete_life_burden_per_hour_if_hour_view; job_node_service_hours_if_hour_view; uncertainty; sensitivity; update_trigger; reference_denominator_quantity; reference_denominator_unit; reference_acceptance_record_id; density_value; density_unit; density_state; temperature; temperature_unit; density_source; conversion_source; conversion_uncertainty; supplier_package_membership; same_SKU_mass_evidence; other_nonadditive_measurements; matched_input_row_id; unresolved_reason | 由生命周期／维护／使用者记录采集实际资产ID、计量工程节点驱动量、同单位全消费者完整寿命分母及完整阶段负担。区分观察历史与有来源未来剩余，关联替换／终止／寿终、全部工程／节点／期间及不确定性／敏感性／更新。资产等价视图用(job_node_driver/full_life_driver)/参考分母，配每Item(s)完整负担；小时视图用job_node_hours/参考分母，配每相同h完整负担。只用本卡指定一种视图，不得并用或逐工程买整台，排除直接／供应商／备件／BOM重复。 | h | 逐实际事件及期间结束 | 完整有界批次及适用的共享生命周期 | regravel_finish | 每参考流 | 独立可追溯数量、来源、保管及不确定性；未知保持不完整 |
| cp_atom_finish_plant_water_bowser | regravel_finish | 完整生命周期每小时洒水车供用 | actual_record | asset_id; actual_child_row_id; node_id; job_id; event_id; period_id; job_node_driver; driver_unit; all_consumer_full_life_driver; full_life_driver_unit; all_consumer_job_node_period_ids; observed_history; observed_history_source; evidenced_remaining_use; remaining_use_source; manufacture_burden; maintenance_burden; replacement_events_and_burdens; termination_basis; end_of_life_burden; lifecycle_sources; direct_fuel_spare_provider_overlap_exclusion; burden_reference_unit; complete_life_burden_per_hour_if_hour_view; job_node_service_hours_if_hour_view; uncertainty; sensitivity; update_trigger; reference_denominator_quantity; reference_denominator_unit; reference_acceptance_record_id; density_value; density_unit; density_state; temperature; temperature_unit; density_source; conversion_source; conversion_uncertainty; supplier_package_membership; same_SKU_mass_evidence; other_nonadditive_measurements; matched_input_row_id; unresolved_reason | 由生命周期／维护／使用者记录采集实际资产ID、计量工程节点驱动量、同单位全消费者完整寿命分母及完整阶段负担。区分观察历史与有来源未来剩余，关联替换／终止／寿终、全部工程／节点／期间及不确定性／敏感性／更新。资产等价视图用(job_node_driver/full_life_driver)/参考分母，配每Item(s)完整负担；小时视图用job_node_hours/参考分母，配每相同h完整负担。只用本卡指定一种视图，不得并用或逐工程买整台，排除直接／供应商／备件／BOM重复。 | h | 逐实际事件及期间结束 | 完整有界批次及适用的共享生命周期 | regravel_finish | 每参考流 | 独立可追溯数量、来源、保管及不确定性；未知保持不完整 |
| cp_atom_finish_plant_roller | regravel_finish | 完整生命周期每小时压路机服务 | actual_record | asset_id; actual_child_row_id; node_id; job_id; event_id; period_id; job_node_driver; driver_unit; all_consumer_full_life_driver; full_life_driver_unit; all_consumer_job_node_period_ids; observed_history; observed_history_source; evidenced_remaining_use; remaining_use_source; manufacture_burden; maintenance_burden; replacement_events_and_burdens; termination_basis; end_of_life_burden; lifecycle_sources; direct_fuel_spare_provider_overlap_exclusion; burden_reference_unit; complete_life_burden_per_hour_if_hour_view; job_node_service_hours_if_hour_view; uncertainty; sensitivity; update_trigger; reference_denominator_quantity; reference_denominator_unit; reference_acceptance_record_id; density_value; density_unit; density_state; temperature; temperature_unit; density_source; conversion_source; conversion_uncertainty; supplier_package_membership; same_SKU_mass_evidence; other_nonadditive_measurements; matched_input_row_id; unresolved_reason | 由生命周期／维护／使用者记录采集实际资产ID、计量工程节点驱动量、同单位全消费者完整寿命分母及完整阶段负担。区分观察历史与有来源未来剩余，关联替换／终止／寿终、全部工程／节点／期间及不确定性／敏感性／更新。资产等价视图用(job_node_driver/full_life_driver)/参考分母，配每Item(s)完整负担；小时视图用job_node_hours/参考分母，配每相同h完整负担。只用本卡指定一种视图，不得并用或逐工程买整台，排除直接／供应商／备件／BOM重复。 | h | 逐实际事件及期间结束 | 完整有界批次及适用的共享生命周期 | regravel_finish | 每参考流 | 独立可追溯数量、来源、保管及不确定性；未知保持不完整 |
| cp_atom_finish_plant_traffic_control | regravel_finish | 完整每小时收面交通控制供用 | actual_record | child_row_id; parent_role_id; actual_sku_or_concrete_identity; node_id; event_id; period_id; custody_sender; custody_receiver; measurement_point; timestamp; measurement_method; calibration; uncertainty; service_h; receipt_or_transfer_id; opening_service_h; external_receipts_net_service_h; closing_carried_service_h; usable_return_service_h; waste_service_h; uncontained_loss_service_h; provider_or_assembly_coverage_exclusion; source_record; reference_denominator_quantity; reference_denominator_unit; reference_acceptance_record_id; density_value; density_unit; density_state; temperature; temperature_unit; density_source; conversion_source; conversion_uncertainty; supplier_package_membership; same_SKU_mass_evidence; other_nonadditive_measurements; matched_input_row_id; unresolved_reason; single_service_function; actual_contract_service_h; provider_scope; included_resources; uncovered_actual_resources; actual_direct_or_shared_assignment; owned_idle_rework_h; same_hour_complete_burden; actual_absence_evidence | 逐事件／期间／供方独立采本单功能实际合同h，含归属待机返工；核相同h完整供应商资源范围，部分覆盖仅补实际缺失活动及适用完整寿命资产份额一次。原服务分配及合格分母仅执行一次，不用费用／人工／假定班次，不在h上再乘资产份额。 | h | 逐实际事件及期间结束 | 完整有界批次及适用的共享生命周期 | regravel_finish | 每参考流 | 独立可追溯数量、来源、保管及不确定性；未知保持不完整 |
| cp_atom_finish_plant_tool | regravel_finish | 完整生命周期每小时收面工具供用 | actual_record | asset_id; actual_child_row_id; node_id; job_id; event_id; period_id; job_node_driver; driver_unit; all_consumer_full_life_driver; full_life_driver_unit; all_consumer_job_node_period_ids; observed_history; observed_history_source; evidenced_remaining_use; remaining_use_source; manufacture_burden; maintenance_burden; replacement_events_and_burdens; termination_basis; end_of_life_burden; lifecycle_sources; direct_fuel_spare_provider_overlap_exclusion; burden_reference_unit; complete_life_burden_per_hour_if_hour_view; job_node_service_hours_if_hour_view; uncertainty; sensitivity; update_trigger; reference_denominator_quantity; reference_denominator_unit; reference_acceptance_record_id; density_value; density_unit; density_state; temperature; temperature_unit; density_source; conversion_source; conversion_uncertainty; supplier_package_membership; same_SKU_mass_evidence; other_nonadditive_measurements; matched_input_row_id; unresolved_reason | 由生命周期／维护／使用者记录采集实际资产ID、计量工程节点驱动量、同单位全消费者完整寿命分母及完整阶段负担。区分观察历史与有来源未来剩余，关联替换／终止／寿终、全部工程／节点／期间及不确定性／敏感性／更新。资产等价视图用(job_node_driver/full_life_driver)/参考分母，配每Item(s)完整负担；小时视图用job_node_hours/参考分母，配每相同h完整负担。只用本卡指定一种视图，不得并用或逐工程买整台，排除直接／供应商／备件／BOM重复。 | h | 逐实际事件及期间结束 | 完整有界批次及适用的共享生命周期 | regravel_finish | 每参考流 | 独立可追溯数量、来源、保管及不确定性；未知保持不完整 |
| cp_atom_req_regravel_finish_finish_plant | regravel_finish | atom_req_regravel_finish_finish_plant | mandatory_refinement | parent_requirement_id; actual_child_row_id; single_object_or_true_mixed_carrier; sku_or_service_result_or_species; physical_state_or_gate; process_id; direction; flow_type; one_exchange_property; one_exchange_unit; receiving_compartment; source_or_destination; event_id; period_id; measurement_point; timestamp; independent_quantity; quantity_evidence; auxiliary_measurements; supported_conversion; provider_or_assembly_scope; overlap_owner; stock_fate_ledger_id; actual_absence_evidence; unresolved_reason; completion_status | 列全本要求下的实际子流名册；每项独立测量事件仅归入一个子流／材料＋属性＋单位＋状态／介质组。对各适用兼容组使用cp_finish_plant原始字段与方法，不使用不分对象的父总量。按同对象同单位闭合投入／产出／库存／去向和配对转移；父合计仅作不可相加诊断。真实混合废物载体与所含污染物视图不得叠加。明确记录有据不存在或未解决证据，未知不得填零。原准备／返工／期间／供应商／资产及Range证据义务全部继续强制。 | 逐条独立子流记录仅一个明确单位 | 逐实际子流／事件及完整阶段结束 | 原完整边界及全部适用期间 | regravel_finish | 每参考流 | 名册／数量／单位／身份／范围／闭合缺失即不完整；方法检查不自动证明现场完成 |
| cp_atom_req_regravel_finish_finish_fuel | regravel_finish | atom_req_regravel_finish_finish_fuel | mandatory_refinement | parent_requirement_id; actual_child_row_id; single_object_or_true_mixed_carrier; sku_or_service_result_or_species; physical_state_or_gate; process_id; direction; flow_type; one_exchange_property; one_exchange_unit; receiving_compartment; source_or_destination; event_id; period_id; measurement_point; timestamp; independent_quantity; quantity_evidence; auxiliary_measurements; supported_conversion; provider_or_assembly_scope; overlap_owner; stock_fate_ledger_id; actual_absence_evidence; unresolved_reason; completion_status | 列全本要求下的实际子流名册；每项独立测量事件仅归入一个子流／材料＋属性＋单位＋状态／介质组。对各适用兼容组使用cp_finish_fuel原始字段与方法，不使用不分对象的父总量。按同对象同单位闭合投入／产出／库存／去向和配对转移；父合计仅作不可相加诊断。真实混合废物载体与所含污染物视图不得叠加。明确记录有据不存在或未解决证据，未知不得填零。原准备／返工／期间／供应商／资产及Range证据义务全部继续强制。 | 逐条独立子流记录仅一个明确单位 | 逐实际子流／事件及完整阶段结束 | 原完整边界及全部适用期间 | regravel_finish | 每参考流 | 名册／数量／单位／身份／范围／闭合缺失即不完整；方法检查不自动证明现场完成 |
| cp_atom_req_regravel_finish_finish_water_abstraction | regravel_finish | atom_req_regravel_finish_finish_water_abstraction | mandatory_refinement | parent_requirement_id; actual_child_row_id; single_object_or_true_mixed_carrier; sku_or_service_result_or_species; physical_state_or_gate; process_id; direction; flow_type; one_exchange_property; one_exchange_unit; receiving_compartment; source_or_destination; event_id; period_id; measurement_point; timestamp; independent_quantity; quantity_evidence; auxiliary_measurements; supported_conversion; provider_or_assembly_scope; overlap_owner; stock_fate_ledger_id; actual_absence_evidence; unresolved_reason; completion_status | 列全本要求下的实际子流名册；每项独立测量事件仅归入一个子流／材料＋属性＋单位＋状态／介质组。对各适用兼容组使用cp_finish_water_abstraction原始字段与方法，不使用不分对象的父总量。按同对象同单位闭合投入／产出／库存／去向和配对转移；父合计仅作不可相加诊断。真实混合废物载体与所含污染物视图不得叠加。明确记录有据不存在或未解决证据，未知不得填零。原准备／返工／期间／供应商／资产及Range证据义务全部继续强制。 | 逐条独立子流记录仅一个明确单位 | 逐实际子流／事件及完整阶段结束 | 原完整边界及全部适用期间 | regravel_finish | 每参考流 | 名册／数量／单位／身份／范围／闭合缺失即不完整；方法检查不自动证明现场完成 |
| cp_atom_req_regravel_finish_finish_dust | regravel_finish | atom_req_regravel_finish_finish_dust | mandatory_refinement | parent_requirement_id; actual_child_row_id; single_object_or_true_mixed_carrier; sku_or_service_result_or_species; physical_state_or_gate; process_id; direction; flow_type; one_exchange_property; one_exchange_unit; receiving_compartment; source_or_destination; event_id; period_id; measurement_point; timestamp; independent_quantity; quantity_evidence; auxiliary_measurements; supported_conversion; provider_or_assembly_scope; overlap_owner; stock_fate_ledger_id; actual_absence_evidence; unresolved_reason; completion_status | 列全本要求下的实际子流名册；每项独立测量事件仅归入一个子流／材料＋属性＋单位＋状态／介质组。对各适用兼容组使用cp_finish_dust原始字段与方法，不使用不分对象的父总量。按同对象同单位闭合投入／产出／库存／去向和配对转移；父合计仅作不可相加诊断。真实混合废物载体与所含污染物视图不得叠加。明确记录有据不存在或未解决证据，未知不得填零。原准备／返工／期间／供应商／资产及Range证据义务全部继续强制。 | 逐条独立子流记录仅一个明确单位 | 逐实际子流／事件及完整阶段结束 | 原完整边界及全部适用期间 | regravel_finish | 每参考流 | 名册／数量／单位／身份／范围／闭合缺失即不完整；方法检查不自动证明现场完成 |
| cp_atom_req_regravel_finish_finish_exhaust | regravel_finish | atom_req_regravel_finish_finish_exhaust | mandatory_refinement | parent_requirement_id; actual_child_row_id; single_object_or_true_mixed_carrier; sku_or_service_result_or_species; physical_state_or_gate; process_id; direction; flow_type; one_exchange_property; one_exchange_unit; receiving_compartment; source_or_destination; event_id; period_id; measurement_point; timestamp; independent_quantity; quantity_evidence; auxiliary_measurements; supported_conversion; provider_or_assembly_scope; overlap_owner; stock_fate_ledger_id; actual_absence_evidence; unresolved_reason; completion_status | 列全本要求下的实际子流名册；每项独立测量事件仅归入一个子流／材料＋属性＋单位＋状态／介质组。对各适用兼容组使用cp_finish_exhaust原始字段与方法，不使用不分对象的父总量。按同对象同单位闭合投入／产出／库存／去向和配对转移；父合计仅作不可相加诊断。真实混合废物载体与所含污染物视图不得叠加。明确记录有据不存在或未解决证据，未知不得填零。原准备／返工／期间／供应商／资产及Range证据义务全部继续强制。 | 逐条独立子流记录仅一个明确单位 | 逐实际子流／事件及完整阶段结束 | 原完整边界及全部适用期间 | regravel_finish | 每参考流 | 名册／数量／单位／身份／范围／闭合缺失即不完整；方法检查不自动证明现场完成 |
| cp_atom_finish_water_release_h2o_vapour_air | regravel_finish | 实际施工H2O水蒸气排入空气未细分区室 | actual_record | child_row_id; parent_role_id; actual_sku_or_concrete_identity; node_id; event_id; period_id; custody_sender; custody_receiver; measurement_point; timestamp; measurement_method; calibration; uncertainty; mass_kg; receipt_or_transfer_id; opening_mass_kg; external_receipts_net_mass_kg; closing_carried_mass_kg; usable_return_mass_kg; waste_mass_kg; uncontained_loss_mass_kg; provider_or_assembly_coverage_exclusion; source_record; reference_denominator_quantity; reference_denominator_unit; reference_acceptance_record_id; density_value; density_unit; density_state; temperature; temperature_unit; density_source; conversion_source; conversion_uncertainty; supplier_package_membership; same_SKU_mass_evidence; other_nonadditive_measurements; matched_input_row_id; unresolved_reason; species_H2O; water_vapour_state; receiving_air_unspecified_applicability; actual_release_mass_kg; own_event_time_activity; measured_or_validated_mass_model; model_operands_units_sources; liquid_water_aux_volume_m3; actual_water_mass_fraction; actual_liquid_water_density_kg_per_m3; water_state_temperature_source; exclusive_water_fates; validation_uncertainty; unresolved_reason | 独立测量实际排入该空气区室的H2O蒸气kg，或保留经验证的作业特定质量模型及全部原始操作数／单位／来源。任何液态体积辅桥均选真实同事件H2O含量及相容实际水状态／密度／温度证据。不得以湿废物／载体总量当水、假设气体体积密度、采购水量或未解释平衡残差当释放。液固／库存／保留及其他节点去向互斥，仅按原合格参考分母归一一次。 | kg | 逐实际事件及期间结束 | 完整有界批次及适用的共享生命周期 | regravel_finish | 每参考流 | 独立可追溯数量、来源、保管及不确定性；未知保持不完整 |
| cp_atom_req_regravel_finish_finish_water_release | regravel_finish | atom_req_regravel_finish_finish_water_release | mandatory_refinement | parent_requirement_id; actual_child_row_id; single_object_or_true_mixed_carrier; sku_or_service_result_or_species; physical_state_or_gate; process_id; direction; flow_type; one_exchange_property; one_exchange_unit; receiving_compartment; source_or_destination; event_id; period_id; measurement_point; timestamp; independent_quantity; quantity_evidence; auxiliary_measurements; supported_conversion; provider_or_assembly_scope; overlap_owner; stock_fate_ledger_id; actual_absence_evidence; unresolved_reason; completion_status | 列全本要求下的实际子流名册；每项独立测量事件仅归入一个子流／材料＋属性＋单位＋状态／介质组。对各适用兼容组使用cp_finish_water_release原始字段与方法，不使用不分对象的父总量。按同对象同单位闭合投入／产出／库存／去向和配对转移；父合计仅作不可相加诊断。真实混合废物载体与所含污染物视图不得叠加。明确记录有据不存在或未解决证据，未知不得填零。原准备／返工／期间／供应商／资产及Range证据义务全部继续强制。 | 逐条独立子流记录仅一个明确单位 | 逐实际子流／事件及完整阶段结束 | 原完整边界及全部适用期间 | regravel_finish | 每参考流 | 名册／数量／单位／身份／范围／闭合缺失即不完整；方法检查不自动证明现场完成 |


### 计算规则

| rule_id | 适用对象 | 公式或规则（`formula_or_rule`） | 输入（`inputs`） | 输出（`output`） | source_ids |
| --- | --- | --- | --- | --- | --- |
| atom_final3_quantity_semantics | all actual children and typed residual requirements | 逐实际子流先按所列角色及唯一交换单位计算自己的未归一分子q_child，再仅除N一次。材料库存供应S为归属期初＋去皮外部收货－带负担结转期末，并严格采用原单一毛投入带真实外流或净耗用真实可用退回约定，未退回废物损失保留上游供应。可用外退、真实废物和内部交接各自独立记录，不等于供应S。实际Count资产等价子流q_child＝实际工程节点兼容驱动量／有据全消费者完整寿命同驱动分母，单位Item(s)，配每完整资产Item(s)完整负担；不得逐工程计整台、套材料库存、以租赁小时费用换Count或再除寿命。当前Duration/h服务则用实际归属服务h配同h适用完整负担，不再乘资产份额；完整供方范围可用，实际未含阶段资源各补一次，不假设燃料资产。完整服务事件子流仅计实际独立验收、真实合同参考支持Item(s)的物理成果，不能用人工费用小时或报告件数代理。不相容原生服务合同继续留要求下未解决，精确单单位方法须复核后才能完成。物种介质释放须有实际物种状态介质及独立实测或验证kg，载体总量和未知差额不是释放。H2O蒸气仅用适用空气区室的有据H2O kg，水体积辅账须有实际相容水含量状态密度桥，保持不可相加。真实自有资产与供应服务重叠选唯一负担归属和数量视图。N保持原正的唯一最终合格桩号限定合同修复区段数，重复遍数、中间交接、公里、吨数或拒收区段不能增加N。 | actual_child_row_id; q_child; one_exchange_unit; original accepted denominator; original compatible node CP; actual source evidence | q_child per original reference flow |  |
| repair_normalization | 所有清单行 | 将本验收合同路段唯一归属节点的真实事件汇总，含返工，按每参考流表达数量。regravel_finish主责物流账通过产生节点/运输腿责任矩阵使每腿只计一次。内部道路交接配对，不重复最终输出。 | 节点事件ID；合同验收；全部节点协议 | 一项声明验收维修的交换数量 |  |
| aggregate_reconcile | new_aggregate; aggregate_return; rejected_layer | 在相同含水/状态核对期初库存加收货总量（扣皮重，未预扣退货），与安装材料、真实向外可用退货、向外废物、有据损失和期末库存闭合。只用实际密度推导松散/压实体积；FHWA示例不是换算因子。 | cp_new_aggregate; cp_aggregate_return; cp_rejected_layer; 实际密度/含水试验 | 批次材料衡算和结转库存负担 | fhwa-gravel-2015 |
| service_attribution | prep_plant_grader; prep_plant_scarifier; prep_plant_drainage_machine; prep_plant_traffic_control; prep_plant_tool; atom_req_prepare_host_prep_plant actual-child group; finish_plant_grader; finish_plant_water_bowser; finish_plant_roller; finish_plant_traffic_control; finish_plant_tool; atom_req_regravel_finish_finish_plant actual-child group | 按实测利用量及有据闲置/调遣/终结处理，将共用资产完整寿命负担归属真实节点/任务/报告期；事件只有一个责任方，不与单列燃料/能源/运输重复。 | cp_prep_plant; cp_finish_plant; 完整资产生命周期账；全部使用者/报告期 | 应归属机具服务和覆盖缺口 |  |
| fuel_consumption | atom_req_prepare_host_prep_fuel actual-child group; atom_req_regravel_finish_finish_fuel actual-child group | 逐实际燃料牌号、归属节点及期间，上游产品供应S_kg＝归属期初燃料＋实际去皮毛收货／领用－带负担结转期末燃料。采用原毛投入并列真实外流约定：可用外退及真实其他所有者转移保留独立实测正向保管外流及原携带负担，不再第二次扣减或给避免生产信用。未退回未燃烧废弃及未围控损失仍在S中，因其已需上游供应。期末保留／回收库存带负担结转，不是外流。共享罐／领用须完整真实消费者事件归属账，含其他工程及全部去向；other_job_kg不得隐藏本节点损失或重复供应商已含燃料供给。S仅除N个唯一最终合格合同修复区段一次；S不是燃烧活动量。 以校准发动机／燃烧器消耗证据独立测量实际燃烧B_kg，或使用完全审计、互斥、同牌号归属账：期初＋毛收货／领用＝期末＋B＋可用外退＋真实其他所有者转移＋围控未燃烧废物＋未围控损失。仅完整有据去向账可推算B，未知差额或未测溢漏绝不推为燃烧或零。总spill为事故审计而不是另一终点池；回收份额按实际最终期末／外退／废物仅归一次，不再扣事故总量。保留完整修复批次、待机及重复准备／摊铺／压实、事件节点供方归属与校准不确定性。体积转kg须实际同牌号批次密度值／单位／来源、物态、温度及单位和实测体积单位，仅换一次。完整服务已含燃料不能再作本地采购或本地排放归属。 | cp_prep_fuel; cp_finish_fuel; actual same-grade independently measured supply/burn and complete disjoint fate records | Independent grade-specific upstream supplied S_kg and actual burned B_kg; actual outward/waste/release fates remain separately owned |  |
| emission_calculation | atom_req_prepare_host_prep_dust actual-child group; atom_req_prepare_host_prep_exhaust actual-child group; atom_req_regravel_finish_finish_dust actual-child group; atom_req_regravel_finish_finish_exhaust actual-child group | 燃烧物种因子分母为燃料质量时，仅用匹配牌号／发动机／事件／节点燃料协议独立实际燃烧B_kg，绝不用供应产品S_kg、全部领用量或未知损失代B。其他因子基准用其独立实测相容真实发动机活动，或采用物种实测量／实测物种速率乘匹配实际持续时间。保留精确物种粒径、受纳介质、燃料发动机控制适用性、分子分母单位、来源版本及传播不确定性。完整物种因子若已表示化石CO2或其他物种，不再额外乘碳、化石、氧化、组成、去向或分子换算。若另有依据改用化石CO2碳平衡，须从实际B及有据组成基准算已氧化化石碳kg；仅在该基准需要时各乘总碳分数和碳中化石占比一次，氧化分数或独立有据滞留未氧化化石碳扣减择一，对同碳不得并用。已氧化化石碳以有来源44/12仅换CO2一次，碳换算只适用已识别CO2，不套粉尘或其他污染物。非燃烧粉尘沿用自身真实材料活动含水捕集粒径方法。方法基准或去向未知即不完整，不将上游／供方排放重复作本地释放。 | 真实速率/时长或活动量/因子及方法引用；全部四项排放协议 | 计算的真实作业排放及方法/证据缺口披露 |  |
| water_balance | finish_water_product; atom_req_regravel_finish_finish_water_abstraction actual-child group; captured_runoff; finish_water_release_h2o_vapour_air; atom_req_regravel_finish_finish_water_release actual-child group | 将采购/取水、库存变化、新集料带入含水、留用道路初末含水与真实有影响降雨/外来径流，和留存水、捕集出流及有据释放核对。天气/材料含水是实测衡算项，不是额外采购或信用。内部回用配对；任何缺测项保留缺口，不自动当蒸发。转kg使用实际密度/温度。 | cp_finish_water_product; cp_finish_water_abstraction; cp_new_aggregate; cp_captured_runoff; cp_finish_water_release; 既有道路含水和实际天气/径流证据 | 路径数量、不确定性及未闭合衡算缺口 |  |

### 数据质量要求

| requirement_id | 适用对象 | 要求（`requirement`） | 证据（`evidence`） |
| --- | --- | --- | --- |
| atom_req_regravel_finish_nonburned_fuel_fates | regravel_finish | 在regravel_finish独立采全部实际未用燃料外退／其他所有者转移、携带或回收期末库存、围控未燃烧废物、清理载体及真实未围控物种介质去向。按真实牌号、事件期间、源及归属索引，保留燃料组分kg及真实整体物理载体的唯一明确交换单位实测量。污染液体／吸附载体整体与其内燃料物种为不可相加视图，不作重复废物交换。真实牌号载体物种介质数量去向范围未知即不完整，不推燃烧、不猜不存在或零。以cp_atom_req_regravel_finish_nonburned_fuel_fates关联对应供应S与独立燃烧B、真实接收及运输段归属和原库存供方规则；仅真实外部保管退出才是出口，内部回收期末燃料不同时当外退或废物。 | cp_atom_req_regravel_finish_nonburned_fuel_fates |
| atom_req_prepare_host_nonburned_fuel_fates | prepare_host | 在prepare_host独立采全部实际未用燃料外退／其他所有者转移、携带或回收期末库存、围控未燃烧废物、清理载体及真实未围控物种介质去向。按真实牌号、事件期间、源及归属索引，保留燃料组分kg及真实整体物理载体的唯一明确交换单位实测量。污染液体／吸附载体整体与其内燃料物种为不可相加视图，不作重复废物交换。真实牌号载体物种介质数量去向范围未知即不完整，不推燃烧、不猜不存在或零。以cp_atom_req_prepare_host_nonburned_fuel_fates关联对应供应S与独立燃烧B、真实接收及运输段归属和原库存供方规则；仅真实外部保管退出才是出口，内部回收期末燃料不同时当外退或废物。 | cp_atom_req_prepare_host_nonburned_fuel_fates |
| atom_final3_typed_child_routes | all actual child and legacy-role records | 下列每个当前子卡仅有所列唯一交换属性单位、节点／方向／类型和方法，使用自己的原始实测操作数。旧父名称仅为非交换role／原始字段前缀选择器，不是仍存在的卡或标量数量。所有原库存、外退去向、q_scope、helper及闭合记录须按actual_child_row_id、精确身份SKU、状态介质、事件、期间、源及归属索引。ROW_UNIT(actual_child_row_id)读取该真实子卡。对本子流操作数执行原适用且角色匹配方法，不用父合计；实际名册、换算、方法或单位未支持即不完整，不由下游猜选。不同单位分组，同对象Count／Mass／Volume或能源辅测视图不可相加，换算须有同身份状态真实几何／件数／净质量／密度／含水／温度来源。原材料状态及水去向QA仅能对相容实测物理份额追溯载体／组成／水份额后各算一次，不能发布诊断父流。材料供应用库存S，真实可用外退用同SKU单位实测保管退出，废物用真实整体载体状态接收方的实测量；历史拆出物为既有基线，不是新制造。内部发送接收各保同对象状态单位事件gate的凭证，等量为对账而非覆盖记录或从父量推子量。原全部gate、失败重复作业、期间、携带负担及库存WIP义务继续。路由：prep_plant_grader => legacy_role=prep_plant, node=prepare_host, direction=inputs, type=product, property=Duration, unit=h, quantity_method=lifecycle_per_hour_service, CP=cp_atom_prep_plant_grader, original_CP=cp_prep_plant; prep_plant_scarifier => legacy_role=prep_plant, node=prepare_host, direction=inputs, type=product, property=Duration, unit=h, quantity_method=lifecycle_per_hour_service, CP=cp_atom_prep_plant_scarifier, original_CP=cp_prep_plant; prep_plant_drainage_machine => legacy_role=prep_plant, node=prepare_host, direction=inputs, type=product, property=Duration, unit=h, quantity_method=lifecycle_per_hour_service, CP=cp_atom_prep_plant_drainage_machine, original_CP=cp_prep_plant; prep_plant_traffic_control => legacy_role=prep_plant, node=prepare_host, direction=inputs, type=product, property=Duration, unit=h, quantity_method=bounded_hourly_service, CP=cp_atom_prep_plant_traffic_control, original_CP=cp_prep_plant; prep_plant_tool => legacy_role=prep_plant, node=prepare_host, direction=inputs, type=product, property=Duration, unit=h, quantity_method=lifecycle_per_hour_service, CP=cp_atom_prep_plant_tool, original_CP=cp_prep_plant; prep_removed_waste_sediment => legacy_role=prep_removed_waste, node=prepare_host, direction=outputs, type=waste, property=Mass, unit=kg, quantity_method=material, CP=cp_atom_prep_removed_waste_sediment, original_CP=cp_prep_removed_waste; prep_removed_waste_soil => legacy_role=prep_removed_waste, node=prepare_host, direction=outputs, type=waste, property=Mass, unit=kg, quantity_method=material, CP=cp_atom_prep_removed_waste_soil, original_CP=cp_prep_removed_waste; prep_removed_waste_gravel => legacy_role=prep_removed_waste, node=prepare_host, direction=outputs, type=waste, property=Mass, unit=kg, quantity_method=material, CP=cp_atom_prep_removed_waste_gravel, original_CP=cp_prep_removed_waste; prep_removed_waste_debris => legacy_role=prep_removed_waste, node=prepare_host, direction=outputs, type=waste, property=Mass, unit=kg, quantity_method=material, CP=cp_atom_prep_removed_waste_debris, original_CP=cp_prep_removed_waste; finish_plant_grader => legacy_role=finish_plant, node=regravel_finish, direction=inputs, type=product, property=Duration, unit=h, quantity_method=lifecycle_per_hour_service, CP=cp_atom_finish_plant_grader, original_CP=cp_finish_plant; finish_plant_water_bowser => legacy_role=finish_plant, node=regravel_finish, direction=inputs, type=product, property=Duration, unit=h, quantity_method=lifecycle_per_hour_service, CP=cp_atom_finish_plant_water_bowser, original_CP=cp_finish_plant; finish_plant_roller => legacy_role=finish_plant, node=regravel_finish, direction=inputs, type=product, property=Duration, unit=h, quantity_method=lifecycle_per_hour_service, CP=cp_atom_finish_plant_roller, original_CP=cp_finish_plant; finish_plant_traffic_control => legacy_role=finish_plant, node=regravel_finish, direction=inputs, type=product, property=Duration, unit=h, quantity_method=bounded_hourly_service, CP=cp_atom_finish_plant_traffic_control, original_CP=cp_finish_plant; finish_plant_tool => legacy_role=finish_plant, node=regravel_finish, direction=inputs, type=product, property=Duration, unit=h, quantity_method=lifecycle_per_hour_service, CP=cp_atom_finish_plant_tool, original_CP=cp_finish_plant; finish_water_release_h2o_vapour_air => legacy_role=finish_water_release, node=regravel_finish, direction=outputs, type=elementary, property=Mass, unit=kg, quantity_method=elementary_water_vapour, CP=cp_atom_finish_water_release_h2o_vapour_air, original_CP=cp_finish_water_release | 原节点CP、实际子流名册、源原始操作数、保管库存去向单位及生命周期证据 |
| qualified_geometry | prepared_host; accepted_regravelling | 保留实际道路适用性、铺前门槛、最终桩号/宽度/面积/厚度/路拱/排水、材料/含水/密度方法、单位、标准来源与公差。 | 测量/试验/检查及签署门槛记录 |
| complete_events | 所有清单行 | 覆盖每批次/操作/报告期，含返工/复验、有日期物理ID与有据未使用声明；缺失不等于零。 | 有日期账本、运输腿责任矩阵和缺陷关闭 |
| honest_ranges | 所有清单行 | 数据集定稿前以真实采集/计算不确定性替换具体数量范围证据需求；精确计数定义不确立材料/能源/生产率范围。 | 测量精度、真实样本区间、方法适用性 |
| real_identities | 所有清单行 | 绑定前核实每项实际不同材料/供应商/废物/物种/属性/单位链；保留原生单位与实际范围，不加总异质物或选近似UUID。 | 供应商/接收方/物质及已核实支持证据 |
| full_asset_life | prep_plant_grader; prep_plant_scarifier; prep_plant_drainage_machine; prep_plant_traffic_control; prep_plant_tool; atom_req_prepare_host_prep_plant actual-child group; finish_plant_grader; finish_plant_water_bowser; finish_plant_roller; finish_plant_traffic_control; finish_plant_tool; atom_req_regravel_finish_finish_plant actual-child group | 覆盖制造、使用/维护/更换和寿命终结/终止；全部使用者/任务/报告期、实测利用量、真实供应商覆盖与缺口。 | 完整寿命供应商/资产材料 |
| uncertainty_coverage | 所有清单行 | 记录原始测量/采样及计算不确定性、密度/含水、库存/退货/转移/泄漏交接、真实排放方法和分配敏感性；保留实际集料/既有道路含水及天气/径流水衡算项和未闭合缺口。 | 校准、实际试验、原始记录、方法引用和情景披露 |
| atom_req_prepare_host_prep_plant | prepare_host | prepare_host/inputs/product必须按实际子流细化。列全本职责涵盖的不同产品、单功能完整服务／资产、实物废物载体或物质／介质释放。完整保留原适用及证据义务：分别记录实际平地机、翻松机、排水搬运设备和交通控制/工具服务，带供应商、资产和覆盖范围；嵌入式准备操作归本节点。 数量范围证据需求：采集本路况、桩号和工法的真实资产小时区间及归属不确定性；无通用生产率或寿命。 原数量方法必须分别施于各兼容子流／材料＋属性＋单位／状态台账：按实际资产/供应商展开应归属的运行、待机和调遣服务时长；cp_prep_plant。 保留已有依据的命名子卡，剩余部分不得默认为不存在。最终前景包完成前，各实际子流须有唯一明确交换属性单位、独立采集量及精确身份支撑。不得猜SKU、物种、介质、比例或单位，不得将异质对象合计、复制父数量／Range或重复母载体／组分流。必须执行cp_atom_req_prepare_host_prep_plant；名册／身份／单位／数量／范围／闭合有缺口则前景包保持不完整，候选方法修订本身不以取得现场数据为前提。 | 原节点协议cp_prep_plant；独立实际子流名册与证据 |
| atom_req_prepare_host_prep_fuel | prepare_host | prepare_host实际供应燃料牌号名册为强制义务，每项仅一种真实牌号状态及Mass/kg交换，保留原完整批次、节点供方排重与实际外流保管义务。不猜燃料物种牌号或默认使用。逐实际燃料牌号、归属节点及期间，上游产品供应S_kg＝归属期初燃料＋实际去皮毛收货／领用－带负担结转期末燃料。采用原毛投入并列真实外流约定：可用外退及真实其他所有者转移保留独立实测正向保管外流及原携带负担，不再第二次扣减或给避免生产信用。未退回未燃烧废弃及未围控损失仍在S中，因其已需上游供应。期末保留／回收库存带负担结转，不是外流。共享罐／领用须完整真实消费者事件归属账，含其他工程及全部去向；other_job_kg不得隐藏本节点损失或重复供应商已含燃料供给。S仅除N个唯一最终合格合同修复区段一次；S不是燃烧活动量。 以校准发动机／燃烧器消耗证据独立测量实际燃烧B_kg，或使用完全审计、互斥、同牌号归属账：期初＋毛收货／领用＝期末＋B＋可用外退＋真实其他所有者转移＋围控未燃烧废物＋未围控损失。仅完整有据去向账可推算B，未知差额或未测溢漏绝不推为燃烧或零。总spill为事故审计而不是另一终点池；回收份额按实际最终期末／外退／废物仅归一次，不再扣事故总量。保留完整修复批次、待机及重复准备／摊铺／压实、事件节点供方归属与校准不确定性。体积转kg须实际同牌号批次密度值／单位／来源、物态、温度及单位和实测体积单位，仅换一次。完整服务已含燃料不能再作本地采购或本地排放归属。 执行cp_atom_req_prepare_host_prep_fuel；最终完成前，实际供应及真实产品／废物／物种介质去向均须在独立未燃烧去向要求下落实独立相容身份数量归属。 | 原节点协议cp_prep_fuel；独立实际子流名册与证据 |
| atom_req_prepare_host_prep_removed_waste | prepare_host | prepare_host/outputs/waste必须按实际子流细化。列全本职责涵盖的不同产品、单功能完整服务／资产、实物废物载体或物质／介质释放。完整保留原适用及证据义务：按材料、废物状态和处理去向区分实际移除泥沙/土/碎砾石/杂物；不得将异质移除物加总为一个交换。 数量范围证据需求：采集各流称量范围、不确定性、含水/状态和处置证据；无默认移除比例。 原数量方法必须分别施于各兼容子流／材料＋属性＋单位／状态台账：按已识别流记录真实向外废物总量（扣皮重，未预扣退货）；cp_prep_removed_waste。 保留已有依据的命名子卡，剩余部分不得默认为不存在。最终前景包完成前，各实际子流须有唯一明确交换属性单位、独立采集量及精确身份支撑。不得猜SKU、物种、介质、比例或单位，不得将异质对象合计、复制父数量／Range或重复母载体／组分流。必须执行cp_atom_req_prepare_host_prep_removed_waste；名册／身份／单位／数量／范围／闭合有缺口则前景包保持不完整，候选方法修订本身不以取得现场数据为前提。 | 原节点协议cp_prep_removed_waste；独立实际子流名册与证据 |
| atom_req_prepare_host_prep_dust | prepare_host | prepare_host/outputs/elementary必须按实际子流细化。列全本职责涵盖的不同产品、单功能完整服务／资产、实物废物载体或物质／介质释放。完整保留原适用及证据义务：只计翻松和整形期间实测或有适用模型支持的矿物颗粒释放；按实际粒径组分和室外空气介质展开。 数量范围证据需求：采集具体物质/粒径的监测或方法不确定性及真实含水/活动/控制资料；无泛PM身份或默认因子。 原数量方法必须分别施于各兼容子流／材料＋属性＋单位／状态台账：由实测速率与实际时长或有据适用活动量/因子计算真实作业物质/粒径质量，区分计算与直接测量；cp_prep_dust。 保留已有依据的命名子卡，剩余部分不得默认为不存在。最终前景包完成前，各实际子流须有唯一明确交换属性单位、独立采集量及精确身份支撑。不得猜SKU、物种、介质、比例或单位，不得将异质对象合计、复制父数量／Range或重复母载体／组分流。必须执行cp_atom_req_prepare_host_prep_dust；名册／身份／单位／数量／范围／闭合有缺口则前景包保持不完整，候选方法修订本身不以取得现场数据为前提。 | 原节点协议cp_prep_dust；独立实际子流名册与证据 |
| atom_req_prepare_host_prep_exhaust | prepare_host | prepare_host/outputs/elementary必须按实际子流细化。列全本职责涵盖的不同产品、单功能完整服务／资产、实物废物载体或物质／介质释放。完整保留原适用及证据义务：仅在前景负责燃烧时，分别记录真实物种及空气接收介质；燃料质量不是尾气质量。 数量范围证据需求：采集实际燃料/发动机/控制和物种特定因子不确定性或实测区间；无泛尾气交换。 原数量方法必须分别施于各兼容子流／材料＋属性＋单位／状态台账：由实测速率与实际时长或有据适用活动量/因子计算真实作业物种质量，区分计算与直接测量；cp_prep_exhaust。 保留已有依据的命名子卡，剩余部分不得默认为不存在。最终前景包完成前，各实际子流须有唯一明确交换属性单位、独立采集量及精确身份支撑。不得猜SKU、物种、介质、比例或单位，不得将异质对象合计、复制父数量／Range或重复母载体／组分流。必须执行cp_atom_req_prepare_host_prep_exhaust；名册／身份／单位／数量／范围／闭合有缺口则前景包保持不完整，候选方法修订本身不以取得现场数据为前提。 | 原节点协议cp_prep_exhaust；独立实际子流名册与证据 |
| atom_req_regravel_finish_aggregate_haul | regravel_finish | regravel_finish/inputs/product必须按实际子流细化。列全本职责涵盖的不同产品、单功能完整服务／资产、实物废物载体或物质／介质释放。完整保留原适用及证据义务：regravel_finish为单一主责物流账，每个真实维修运输腿只计一次：新集料、准备可用剩料/废物、整饰退货/废物、水及设备调遣。展开实际承运人/车辆/货物身份；准备材料出口仍归prepare_host，运输通过责任矩阵分配，不另建采购节点。 数量范围证据需求：对全部真实维修运输腿采集货物/距离和装载/空返范围，含准备出口、水和设备；无默认距离或利用率。 原数量方法必须分别施于各兼容子流／材料＋属性＋单位／状态台账：按真实运输腿记录货物质量和路线距离服务，声明装载/空返分配及供应商覆盖；cp_aggregate_haul。 保留已有依据的命名子卡，剩余部分不得默认为不存在。最终前景包完成前，各实际子流须有唯一明确交换属性单位、独立采集量及精确身份支撑。不得猜SKU、物种、介质、比例或单位，不得将异质对象合计、复制父数量／Range或重复母载体／组分流。必须执行cp_atom_req_regravel_finish_aggregate_haul；名册／身份／单位／数量／范围／闭合有缺口则前景包保持不完整，候选方法修订本身不以取得现场数据为前提。 | 原节点协议cp_aggregate_haul；独立实际子流名册与证据 |
| atom_req_regravel_finish_finish_plant | regravel_finish | regravel_finish/inputs/product必须按实际子流细化。列全本职责涵盖的不同产品、单功能完整服务／资产、实物废物载体或物质／介质释放。完整保留原适用及证据义务：分别记录真实平地机/均料设备、洒水车、压路机和交通控制/工具供应商；水/压路机纳入取决于实际批准操作。 数量范围证据需求：采集实际遍数、层状态及资产条件的运行时间和完整寿命归属不确定性；不假设压路机数量、寿命或生产率。 原数量方法必须分别施于各兼容子流／材料＋属性＋单位／状态台账：按资产/供应商记录实际应归属服务小时，含真实闲置与调遣归属；cp_finish_plant。 保留已有依据的命名子卡，剩余部分不得默认为不存在。最终前景包完成前，各实际子流须有唯一明确交换属性单位、独立采集量及精确身份支撑。不得猜SKU、物种、介质、比例或单位，不得将异质对象合计、复制父数量／Range或重复母载体／组分流。必须执行cp_atom_req_regravel_finish_finish_plant；名册／身份／单位／数量／范围／闭合有缺口则前景包保持不完整，候选方法修订本身不以取得现场数据为前提。 | 原节点协议cp_finish_plant；独立实际子流名册与证据 |
| atom_req_regravel_finish_finish_fuel | regravel_finish | regravel_finish实际供应燃料牌号名册为强制义务，每项仅一种真实牌号状态及Mass/kg交换，保留原完整批次、节点供方排重与实际外流保管义务。不猜燃料物种牌号或默认使用。逐实际燃料牌号、归属节点及期间，上游产品供应S_kg＝归属期初燃料＋实际去皮毛收货／领用－带负担结转期末燃料。采用原毛投入并列真实外流约定：可用外退及真实其他所有者转移保留独立实测正向保管外流及原携带负担，不再第二次扣减或给避免生产信用。未退回未燃烧废弃及未围控损失仍在S中，因其已需上游供应。期末保留／回收库存带负担结转，不是外流。共享罐／领用须完整真实消费者事件归属账，含其他工程及全部去向；other_job_kg不得隐藏本节点损失或重复供应商已含燃料供给。S仅除N个唯一最终合格合同修复区段一次；S不是燃烧活动量。 以校准发动机／燃烧器消耗证据独立测量实际燃烧B_kg，或使用完全审计、互斥、同牌号归属账：期初＋毛收货／领用＝期末＋B＋可用外退＋真实其他所有者转移＋围控未燃烧废物＋未围控损失。仅完整有据去向账可推算B，未知差额或未测溢漏绝不推为燃烧或零。总spill为事故审计而不是另一终点池；回收份额按实际最终期末／外退／废物仅归一次，不再扣事故总量。保留完整修复批次、待机及重复准备／摊铺／压实、事件节点供方归属与校准不确定性。体积转kg须实际同牌号批次密度值／单位／来源、物态、温度及单位和实测体积单位，仅换一次。完整服务已含燃料不能再作本地采购或本地排放归属。 执行cp_atom_req_regravel_finish_finish_fuel；最终完成前，实际供应及真实产品／废物／物种介质去向均须在独立未燃烧去向要求下落实独立相容身份数量归属。 | 原节点协议cp_finish_fuel；独立实际子流名册与证据 |
| atom_req_regravel_finish_finish_water_abstraction | regravel_finish | regravel_finish/inputs/elementary必须按实际子流细化。列全本职责涵盖的不同产品、单功能完整服务／资产、实物废物载体或物质／介质释放。完整保留原适用及证据义务：只有从识别环境源实际直接取水才是基本流输入；实际泵送/处理在本节点记录，不与采购水重复。 数量范围证据需求：采集水源特定取水区间、计量/许可证据及真实水源状态；无假设消耗或水转kg。 原数量方法必须分别施于各兼容子流／材料＋属性＋单位／状态台账：按水源记录真实计量直接取水；cp_finish_water_abstraction。 保留已有依据的命名子卡，剩余部分不得默认为不存在。最终前景包完成前，各实际子流须有唯一明确交换属性单位、独立采集量及精确身份支撑。不得猜SKU、物种、介质、比例或单位，不得将异质对象合计、复制父数量／Range或重复母载体／组分流。必须执行cp_atom_req_regravel_finish_finish_water_abstraction；名册／身份／单位／数量／范围／闭合有缺口则前景包保持不完整，候选方法修订本身不以取得现场数据为前提。 | 原节点协议cp_finish_water_abstraction；独立实际子流名册与证据 |
| atom_req_regravel_finish_finish_dust | regravel_finish | regravel_finish/outputs/elementary必须按实际子流细化。列全本职责涵盖的不同产品、单功能完整服务／资产、实物废物载体或物质／介质释放。完整保留原适用及证据义务：分别记录实际矿物粉尘物种/粒径和空气接收介质，区分集料损失、捕集尘及维修作业外后续交通排放。 数量范围证据需求：采集实际活动、含水、控制和粒径特定排放不确定性；无泛PM UUID或未来交通默认值。 原数量方法必须分别施于各兼容子流／材料＋属性＋单位／状态台账：由实测速率与实际时长或有据适用活动量/因子计算真实作业物种/粒径质量，区分计算与直接测量；cp_finish_dust。 保留已有依据的命名子卡，剩余部分不得默认为不存在。最终前景包完成前，各实际子流须有唯一明确交换属性单位、独立采集量及精确身份支撑。不得猜SKU、物种、介质、比例或单位，不得将异质对象合计、复制父数量／Range或重复母载体／组分流。必须执行cp_atom_req_regravel_finish_finish_dust；名册／身份／单位／数量／范围／闭合有缺口则前景包保持不完整，候选方法修订本身不以取得现场数据为前提。 | 原节点协议cp_finish_dust；独立实际子流名册与证据 |
| atom_req_regravel_finish_finish_exhaust | regravel_finish | regravel_finish/outputs/elementary必须按实际子流细化。列全本职责涵盖的不同产品、单功能完整服务／资产、实物废物载体或物质／介质释放。完整保留原适用及证据义务：仅在前景负责发动机运行时，将实际燃烧释放展开到每项已核实物种和空气介质。 数量范围证据需求：采集发动机/燃料/控制及物种特定测量或因子不确定性；不将燃料质量等同排放质量。 原数量方法必须分别施于各兼容子流／材料＋属性＋单位／状态台账：由实测速率与实际时长或有据适用活动量/因子计算真实作业物种质量，区分计算与直接测量；cp_finish_exhaust。 保留已有依据的命名子卡，剩余部分不得默认为不存在。最终前景包完成前，各实际子流须有唯一明确交换属性单位、独立采集量及精确身份支撑。不得猜SKU、物种、介质、比例或单位，不得将异质对象合计、复制父数量／Range或重复母载体／组分流。必须执行cp_atom_req_regravel_finish_finish_exhaust；名册／身份／单位／数量／范围／闭合有缺口则前景包保持不完整，候选方法修订本身不以取得现场数据为前提。 | 原节点协议cp_finish_exhaust；独立实际子流名册与证据 |
| atom_req_regravel_finish_finish_water_release | regravel_finish | regravel_finish/outputs/elementary必须按实际子流细化。列全本职责涵盖的不同产品、单功能完整服务／资产、实物废物载体或物质／介质释放。完整保留原适用及证据义务：仅在实测或有闭合水衡算及实际接收介质支持时，分别记录蒸发、渗入或排放。溶解/悬浮污染物须有各自物种和数量。 数量范围证据需求：采集实测或路径支持的体积区间和水衡算不确定性；加水不自动等于消耗或污染物释放。 原数量方法必须分别施于各兼容子流／材料＋属性＋单位／状态台账：按已识别路径记录真实水释放体积；cp_finish_water_release。 保留已有依据的命名子卡，剩余部分不得默认为不存在。最终前景包完成前，各实际子流须有唯一明确交换属性单位、独立采集量及精确身份支撑。不得猜SKU、物种、介质、比例或单位，不得将异质对象合计、复制父数量／Range或重复母载体／组分流。必须执行cp_atom_req_regravel_finish_finish_water_release；名册／身份／单位／数量／范围／闭合有缺口则前景包保持不完整，候选方法修订本身不以取得现场数据为前提。 | 原节点协议cp_finish_water_release；独立实际子流名册与证据 |



## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| atom_req_regravel_finish_nonburned_fuel_fates_complete | regravel_finish | 在regravel_finish独立采全部实际未用燃料外退／其他所有者转移、携带或回收期末库存、围控未燃烧废物、清理载体及真实未围控物种介质去向。按真实牌号、事件期间、源及归属索引，保留燃料组分kg及真实整体物理载体的唯一明确交换单位实测量。污染液体／吸附载体整体与其内燃料物种为不可相加视图，不作重复废物交换。真实牌号载体物种介质数量去向范围未知即不完整，不推燃烧、不猜不存在或零。以cp_atom_req_regravel_finish_nonburned_fuel_fates关联对应供应S与独立燃烧B、真实接收及运输段归属和原库存供方规则；仅真实外部保管退出才是出口，内部回收期末燃料不同时当外退或废物。 |  |
| atom_req_prepare_host_nonburned_fuel_fates_complete | prepare_host | 在prepare_host独立采全部实际未用燃料外退／其他所有者转移、携带或回收期末库存、围控未燃烧废物、清理载体及真实未围控物种介质去向。按真实牌号、事件期间、源及归属索引，保留燃料组分kg及真实整体物理载体的唯一明确交换单位实测量。污染液体／吸附载体整体与其内燃料物种为不可相加视图，不作重复废物交换。真实牌号载体物种介质数量去向范围未知即不完整，不推燃烧、不猜不存在或零。以cp_atom_req_prepare_host_nonburned_fuel_fates关联对应供应S与独立燃烧B、真实接收及运输段归属和原库存供方规则；仅真实外部保管退出才是出口，内部回收期末燃料不同时当外退或废物。 |  |
| host_gate | prepare_host | 要求初始适用性、实际翻松/整形/排水修正及铺前验收门槛。排水责任不明或结构不适用时不采用本路线。 | fhwa-gravel-2015 |
| repair_gate | accepted_regravelling | 核实实际桩号、天然集料来源/级配/塑性/含水、均匀完工几何、实际规定压实/质量试验、天气和签署交接；不假设通用厚度、收缩或未来寿命。 | fhwa-gravel-2015 |
| balance_paths | 所有清单行 | 结合不确定性检查收货总量（扣皮重，未预扣退货）/领用材料和水衡算、留用道路处理、内部回用、真实向外交接及期末库存；库存/退货或负担不重复。计验收输出前关闭全部缺陷/复验/返工路径。 |  |
| asset_periods | prep_plant_grader; prep_plant_scarifier; prep_plant_drainage_machine; prep_plant_traffic_control; prep_plant_tool; atom_req_prepare_host_prep_plant actual-child group; finish_plant_grader; finish_plant_water_bowser; finish_plant_roller; finish_plant_traffic_control; finish_plant_tool; atom_req_regravel_finish_finish_plant actual-child group | 检查共用资产完整阶段、全部使用者/报告期、利用量分母、更换/终结和单一事件归属；生命周期/支持链覆盖缺失阻止数据集定稿。 |  |
| identity_range | 所有清单行 | 将条件材料/服务/废物/物质需求展开为实际不同交换。核实准确流/属性/单位身份及每项实际数值不确定性；不将泛粉尘当作粒径组分或把燃料当作尾气。缺失数据明确记录，不等于零。 |  |
| atom_req_prepare_host_prep_plant_complete | prepare_host | 最终前景包完成前必须执行cp_atom_req_prepare_host_prep_plant及atom_req_prepare_host_prep_plant：本职责所有实际子流须各有单一具体对象／状态／介质、唯一明确交换属性单位、独立原始量与必要时有据换算、精确身份支撑及闭合归属／库存／去向／转移范围。各兼容组分开，禁止异质合计、猜不存在、复制父总量／Range或重复组件／供应商／载体负担。证据未解决即不完整；pcr:check不自动执行或证明现场实际名册完成。 |  |
| atom_req_prepare_host_prep_fuel_complete | prepare_host | 最终前景包完成前必须执行cp_atom_req_prepare_host_prep_fuel及atom_req_prepare_host_prep_fuel：本职责所有实际子流须各有单一具体对象／状态／介质、唯一明确交换属性单位、独立原始量与必要时有据换算、精确身份支撑及闭合归属／库存／去向／转移范围。各兼容组分开，禁止异质合计、猜不存在、复制父总量／Range或重复组件／供应商／载体负担。证据未解决即不完整；pcr:check不自动执行或证明现场实际名册完成。 |  |
| atom_req_prepare_host_prep_removed_waste_complete | prepare_host | 最终前景包完成前必须执行cp_atom_req_prepare_host_prep_removed_waste及atom_req_prepare_host_prep_removed_waste：本职责所有实际子流须各有单一具体对象／状态／介质、唯一明确交换属性单位、独立原始量与必要时有据换算、精确身份支撑及闭合归属／库存／去向／转移范围。各兼容组分开，禁止异质合计、猜不存在、复制父总量／Range或重复组件／供应商／载体负担。证据未解决即不完整；pcr:check不自动执行或证明现场实际名册完成。 |  |
| atom_req_prepare_host_prep_dust_complete | prepare_host | 最终前景包完成前必须执行cp_atom_req_prepare_host_prep_dust及atom_req_prepare_host_prep_dust：本职责所有实际子流须各有单一具体对象／状态／介质、唯一明确交换属性单位、独立原始量与必要时有据换算、精确身份支撑及闭合归属／库存／去向／转移范围。各兼容组分开，禁止异质合计、猜不存在、复制父总量／Range或重复组件／供应商／载体负担。证据未解决即不完整；pcr:check不自动执行或证明现场实际名册完成。 |  |
| atom_req_prepare_host_prep_exhaust_complete | prepare_host | 最终前景包完成前必须执行cp_atom_req_prepare_host_prep_exhaust及atom_req_prepare_host_prep_exhaust：本职责所有实际子流须各有单一具体对象／状态／介质、唯一明确交换属性单位、独立原始量与必要时有据换算、精确身份支撑及闭合归属／库存／去向／转移范围。各兼容组分开，禁止异质合计、猜不存在、复制父总量／Range或重复组件／供应商／载体负担。证据未解决即不完整；pcr:check不自动执行或证明现场实际名册完成。 |  |
| atom_req_regravel_finish_aggregate_haul_complete | regravel_finish | 最终前景包完成前必须执行cp_atom_req_regravel_finish_aggregate_haul及atom_req_regravel_finish_aggregate_haul：本职责所有实际子流须各有单一具体对象／状态／介质、唯一明确交换属性单位、独立原始量与必要时有据换算、精确身份支撑及闭合归属／库存／去向／转移范围。各兼容组分开，禁止异质合计、猜不存在、复制父总量／Range或重复组件／供应商／载体负担。证据未解决即不完整；pcr:check不自动执行或证明现场实际名册完成。 |  |
| atom_req_regravel_finish_finish_plant_complete | regravel_finish | 最终前景包完成前必须执行cp_atom_req_regravel_finish_finish_plant及atom_req_regravel_finish_finish_plant：本职责所有实际子流须各有单一具体对象／状态／介质、唯一明确交换属性单位、独立原始量与必要时有据换算、精确身份支撑及闭合归属／库存／去向／转移范围。各兼容组分开，禁止异质合计、猜不存在、复制父总量／Range或重复组件／供应商／载体负担。证据未解决即不完整；pcr:check不自动执行或证明现场实际名册完成。 |  |
| atom_req_regravel_finish_finish_fuel_complete | regravel_finish | 最终前景包完成前必须执行cp_atom_req_regravel_finish_finish_fuel及atom_req_regravel_finish_finish_fuel：本职责所有实际子流须各有单一具体对象／状态／介质、唯一明确交换属性单位、独立原始量与必要时有据换算、精确身份支撑及闭合归属／库存／去向／转移范围。各兼容组分开，禁止异质合计、猜不存在、复制父总量／Range或重复组件／供应商／载体负担。证据未解决即不完整；pcr:check不自动执行或证明现场实际名册完成。 |  |
| atom_req_regravel_finish_finish_water_abstraction_complete | regravel_finish | 最终前景包完成前必须执行cp_atom_req_regravel_finish_finish_water_abstraction及atom_req_regravel_finish_finish_water_abstraction：本职责所有实际子流须各有单一具体对象／状态／介质、唯一明确交换属性单位、独立原始量与必要时有据换算、精确身份支撑及闭合归属／库存／去向／转移范围。各兼容组分开，禁止异质合计、猜不存在、复制父总量／Range或重复组件／供应商／载体负担。证据未解决即不完整；pcr:check不自动执行或证明现场实际名册完成。 |  |
| atom_req_regravel_finish_finish_dust_complete | regravel_finish | 最终前景包完成前必须执行cp_atom_req_regravel_finish_finish_dust及atom_req_regravel_finish_finish_dust：本职责所有实际子流须各有单一具体对象／状态／介质、唯一明确交换属性单位、独立原始量与必要时有据换算、精确身份支撑及闭合归属／库存／去向／转移范围。各兼容组分开，禁止异质合计、猜不存在、复制父总量／Range或重复组件／供应商／载体负担。证据未解决即不完整；pcr:check不自动执行或证明现场实际名册完成。 |  |
| atom_req_regravel_finish_finish_exhaust_complete | regravel_finish | 最终前景包完成前必须执行cp_atom_req_regravel_finish_finish_exhaust及atom_req_regravel_finish_finish_exhaust：本职责所有实际子流须各有单一具体对象／状态／介质、唯一明确交换属性单位、独立原始量与必要时有据换算、精确身份支撑及闭合归属／库存／去向／转移范围。各兼容组分开，禁止异质合计、猜不存在、复制父总量／Range或重复组件／供应商／载体负担。证据未解决即不完整；pcr:check不自动执行或证明现场实际名册完成。 |  |
| atom_req_regravel_finish_finish_water_release_complete | regravel_finish | 最终前景包完成前必须执行cp_atom_req_regravel_finish_finish_water_release及atom_req_regravel_finish_finish_water_release：本职责所有实际子流须各有单一具体对象／状态／介质、唯一明确交换属性单位、独立原始量与必要时有据换算、精确身份支撑及闭合归属／库存／去向／转移范围。各兼容组分开，禁止异质合计、猜不存在、复制父总量／Range或重复组件／供应商／载体负担。证据未解决即不完整；pcr:check不自动执行或证明现场实际名册完成。 |  |



## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 一次验收有界重新铺砾维修的前景数据包，支持process/lifecyclemodel投影 |
| downstream_use | secondary_dataset；门槛、单位和完整上游范围匹配时可作background_dataset |
| allowed_use | 声明的适用天然碎砾石道路及实际合同的增量维修建模 |
| excluded_use | 完整新路、结构重建、有结合料/再生路线、未来交通运营、等价寿命或避免替换主张 |
| required_metadata | 参考限定信息；实际两节点门槛；供给总量（扣皮重，未预扣退货）与出口交接；日期/报告期；来源及运输覆盖；资产使用者与完整寿命边界 |
| required_quality_disclosure | 测量/不确定性覆盖；拒收/返工桩号；身份/支持链和范围缺口；供应商覆盖；生命周期归属与库存结转 |
| update_trigger | 既有道路适用性、维修范围、集料/来源、批准铺设/验收工法、实际机具/覆盖、排水责任或证据变化 |


## 11. 数据源

| source_id | type | reference | used_for |
| --- | --- | --- | --- |
| fhwa-gravel-2015 | official_guidance | 美国联邦公路管理局，Gravel Roads Construction and Maintenance Guide，2015年8月，第3.18–3.21节，印刷页71–74。https://www.fhwa.dot.gov/construction/pubs/ots15002.pdf | 新铺砾前准备；松散与完工状态差别；实际运输/铺撒控制；堆条/均料/铺撒及实际调湿/碾压。示例数量不是PCR默认值。 |
