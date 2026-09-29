---
pcr_id: pcr.metal-products-machinery-and-equipment.special-purpose-machinery.refrigerators-and-freezers-household-type-electric-or-non-electric
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 家用冰箱及冷冻柜（电动或非电动）

## 1. 范围与适用性

本规则用于一台在工厂门口验收的完整家用冰箱、冷冻柜或冰箱冷冻组合机的前景清单。电动压缩式及采用非电热源的吸收式设备均在类别边界内；应申报实际制冷方式、能源和工质。独立零部件、商用陈列柜、工业冷库及空调设备不属于本产品身份。使用阶段、配送和报废阶段不在本工厂门口前景边界内。欧盟家用制冷研究主要描述电动路线；吸收式技术资料仅用于识别该技术，不提供本类别的普遍用量。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | `pcr.metal-products-machinery-and-equipment.special-purpose-machinery.refrigerators-and-freezers-household-type-electric-or-non-electric` |
| classification_refs | CPC 3.0: 44811（类别参考，非 PCR 身份） |
| covered_products | 完整家用冰箱、冷冻柜及兼具冷藏和冷冻功能的家用设备；电动或非电动 |
| excluded_products | 单独销售的压缩机、箱体、制冷剂、商用陈列柜、工业制冷设备及空调 |
| representative_product | 一台具有申报配置和验收记录的完整家用制冷设备 |
| production_route | 记录实际压缩式或吸收式路线；按适用条件纳入材料、充注和测试投入 |
| market_state | 工厂门口已验收的新设备；净质量不含运输包装 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 一台具备所申报冷藏或冷冻功能的完整家用设备 |
| How much | 一台验收成品设备，实测净质量 M kg |
| How well | 符合所申报型号、箱体容积、温度等级及制冷路线的验收要求 |
| How long or cycle | 出厂验收时；本参考流不规定使用寿命 |
| reference_flow_link | `finished_appliance` |

| 字段 | 值 |
| --- | --- |
| 参考数量 | M |
| 参考产品流 | 电动或非电动家用冰箱及食品冷冻器 `510dc598-5954-4045-a563-78869ea6d5ed` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 型号；验收配置；冰箱/冷冻柜类型；制冷路线；能源；工质；净容积；温度等级；出厂状态；实测净质量 M |

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | M = 同一配置的一台完整设备的验收净质量，单位 kg；采用 cp_mass 采集。 |
| `energy_meter` | `factory_electricity` | Energy | kWh | 按电表记录采集工厂电力，并按验收设备数归属；不得将设备使用阶段电量计入制造清单。 |

## 5. 系统边界

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `sb_factory_gate` | foreground boundary | 从钢板、塑料板、保温泡沫及制冷零部件进入关联制造过程开始，纳入箱体制造、制冷回路装配与充注、总装、验收测试及包装，终点为一台验收设备离开工厂门口；使用、配送及报废另行建模。 | `bis-iso14044-2006`; `eu-household-refrigeration-review-2016` |
| `sb_route` | technology routes | 只纳入实际配置使用的制冷剂、吸收式工质及试验燃料；对不适用的路线逐行说明。 | `eu-household-refrigeration-review-2016`; `usdoe-mref-tsd-2022` |
| `sb_upstream` | purchased inputs | 购买材料及零部件的上游生产应由关联数据集覆盖，不得把相同上游负担再计入前景制造。 | `bis-iso14044-2006` |

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 已申报来源和状态的钢板、塑料板、保温泡沫、制冷部件及能源进入制造链。 |
| starting_condition_role | 前景单元过程的起始投入；外购物的上游由关联数据集提供。 |
| product_classification_scope | 完整家用冰箱或冷冻柜；不包括仅作为零部件销售的产品。 |
| recursive_input_rule | 同类成品若作为另一个模型的投入，仅记录实际跨边界的设备流，并指向其上游数据集；不得递归重复制造清单。 |
| upstream_dataset_requirement | 外购材料、部件、燃料和电力应匹配供应状态、地域与技术的上游数据集。 |
| disclosure | 披露制造地点、供应商覆盖、路线、工质、包装边界及任何未覆盖过程。 |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `cabinet_fabrication` | 箱体及保温层制造 | `required` | 在制造厂或关联的一级供应商处 | 制造前景过程 | 每台验收成品设备 |
| `cooling_circuit` | 制冷回路装配与充注 | `required` | 声明压缩式或吸收式技术及实际充注物 | 制冷系统前景过程 | 每台验收成品设备 |
| `final_test_pack` | 总装、验收测试及包装 | `required` | 每台验收成品设备 | 工厂门口前景过程 | 每台验收成品设备 |

### 过程：箱体及保温层制造（`cabinet_fabrication`）

#### 输入

##### 产品流

###### 预涂层钢板（`steel_sheet`）

记录在本厂或一级供应商处进入箱体成形工序的预涂层钢板。

- 选定流：预涂层钢板
- 流属性/单位：Mass / kg
- 数量规则：根据领料及库存核对记录每台验收成品设备消耗的钢板质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每台验收成品设备
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cabinet_material`
- 来源：`eu-household-refrigeration-review-2016`

###### 聚苯乙烯板（`polystyrene_sheet`）

记录转入内胆热成形工序的聚苯乙烯板。

- 选定流：聚苯乙烯板
- 流属性/单位：Mass / kg
- 数量规则：记录归属于每台验收成品设备的板材领用质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每台验收成品设备
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cabinet_material`
- 来源：`eu-household-refrigeration-review-2016`

###### 硬质聚氨酯保温泡沫（`pu_foam`）

记录从泡沫生产过程进入箱体保温工序的硬质泡沫；厂内泡沫生产应作为单独关联的供应或单元过程。

- 选定流：硬质聚氨酯保温泡沫
- 流属性/单位：Mass / kg
- 数量规则：记录归属于每台验收成品设备的泡沫质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每台验收成品设备
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cabinet_material`
- 来源：`eu-household-refrigeration-review-2016`

#### 输出

##### 废物流

###### 钢板边角废料（`steel_scrap`）

将箱体成形产生的边角料作为单独称重的废物流记录。

- 选定流：钢板边角废料
- 流属性/单位：Mass / kg
- 数量规则：记录每台验收成品设备对应的出厂边角料质量；不得与采购钢板净额相抵。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每台验收成品设备
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_scrap`
- 来源：`eu-household-refrigeration-review-2016`; `bis-iso14044-2006`

### 过程：制冷回路装配与充注（`cooling_circuit`）

#### 输入

##### 产品流

###### 铜管材（`copper_tubing`）

在压缩式制冷回路使用铜管材时记录该投入。

- 选定流：铜管材 `0d80f4b8-8f26-4eee-8b81-df499c4c9dff`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：记录每台验收成品设备安装的铜管材质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每台验收成品设备
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_circuit_material`
- 来源：`eu-household-refrigeration-review-2016`

###### 异丁烷制冷剂 R600a（`r600a_charge`）

仅在压缩式回路充注 R600a 时纳入；其他制冷剂需另行确认独立的流。

- 选定流：异丁烷制冷剂 R600a
- 流属性/单位：Mass / kg
- 数量规则：记录每台验收成品设备的 R600a 首次充注质量，不预先扣除已计量损失。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每台验收成品设备
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_circuit_material`
- 来源：`eu-household-refrigeration-review-2016`

###### 氨（`ammonia_charge`）

仅对采用氨水工质系统的吸收式回路纳入；水若跨越边界供应，应另行记录。

- 选定流：氨 `9874382d-672c-4601-a3ce-9a4ae21e663b`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：记录每台验收成品设备的吸收式回路氨投入质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每台验收成品设备
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_circuit_material`
- 来源：`usdoe-mref-tsd-2022`

#### 输出

##### 基本流

###### 异丁烷排放至室外空气（`r600a_air`）

仅记录充注和检漏期间实际排放至室外环境空气的 R600a；区分室内排放和回收气体。

- 选定流：异丁烷排放至室外空气
- 流属性/单位：Mass / kg
- 数量规则：记录每台验收成品设备监测到的室外排放量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每台验收成品设备
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_refrigerant_loss`
- 来源：`bis-iso14044-2006`

### 过程：总装、验收测试及包装（`final_test_pack`）

#### 输入

##### 产品流

###### 交流电（`factory_electricity`）

记录归属于装配和验收测试的厂内计量电力，不受设备运行能源类型影响。

- 选定流：交流电
- 流属性/单位：Energy / kWh
- 数量规则：按每台验收成品设备记录可归属的电表电量，单位 kWh。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每台验收成品设备
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy`
- 来源：`bis-iso14044-2006`

###### 丙烷（`propane_test`）

仅在燃气驱动的吸收式设备采用丙烷进行验收测试时纳入。

- 选定流：丙烷 `9c0d706a-c414-4afb-ad0c-4777c4072311`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：记录每台验收成品设备在出厂测试中消耗的丙烷质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每台验收成品设备
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_fuel`
- 来源：`usdoe-mref-tsd-2022`

###### 瓦楞纸箱（`corrugated_box`）

记录用于验收设备的瓦楞纸箱；其质量不计入 M。

- 选定流：瓦楞纸箱 `4f197bec-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：记录归属于每台验收成品设备的纸箱质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每台验收成品设备
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging`
- 来源：`eu-household-refrigeration-review-2016`

#### 输出

##### 产品流

###### 电动或非电动家用冰箱及食品冷冻器（`finished_appliance`）

在工厂门口输出一台验收合格且不含运输包装的完整家用冰箱或冷冻柜。采用 cp_mass 测得 M。

- 选定流：电动或非电动家用冰箱及食品冷冻器 `510dc598-5954-4045-a563-78869ea6d5ed`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：M 千克
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每台验收成品设备
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_mass`
- 来源：`un-cpc3-notes-2025`; `bis-iso14044-2006`

## 7. 分配与共产品处理

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `al_subdivide` | shared manufacturing | 优先分解共享的成形、装配或测试单元过程并直接计量其投入和产出。 | `bis-iso14044-2006` |
| `al_physical` | remaining shared loads | 无法分解时，按有因果关系的物理量分配共享电力和材料；记录驱动量、总量和验收设备数，并核对分配总和。 | `bis-iso14044-2006` |
| `al_disclose` | scrap and co-products | 单列钢废料及其他副产品；不得默认为制造投入的负值，披露其去向及任何回收分配选择。 | `bis-iso14044-2006` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_mass` | `final_test_pack` | finished_appliance | 称量及验收记录 | 型号；配置；序列号；验收净质量 M | 使用经校准的秤称量已验收的完整设备，排除运输包装；核对同一配置和验收记录。 | kg | each accepted configuration | representative production period | factory gate | 每台验收净质量 | 秤校准和验收记录 |
| `cp_cabinet_material` | `cabinet_fabrication` | steel_sheet; polystyrene_sheet; pu_foam | 领料及库存记录 | 材料身份；批次；总领用；退料；验收数量 | 核对申报箱体过程的领料与退料质量及合格产出。 | kg | per production lot | representative production period | site or first-tier supplier | 可归属材料质量 / 验收设备数 | 称重单和库存台账 |
| `cp_circuit_material` | `cooling_circuit` | copper_tubing; r600a_charge; ammonia_charge | 回路物料表及充注记录 | 路线；部件质量；充注钢瓶前后质量；验收数量 | 将安装铜管及工质充注量与回路规范和验收数量核对。 | kg | per batch and charge event | representative production period | site or first-tier supplier | 安装或充注质量 / 验收设备数 | 物料表和充注秤记录 |
| `cp_scrap` | `cabinet_fabrication` | steel_scrap | 废物出厂记录 | 边角料流；皮重；毛重；验收数量 | 单独称量箱体过程出厂钢边角料，不与投入钢板相抵。 | kg | per dispatch | representative production period | site or first-tier supplier | 边角料质量 / 验收设备数 | 地磅及回收方收据 |
| `cp_refrigerant_loss` | `cooling_circuit` | r600a_air | 室外排放监测记录 | 物种；排气点；实测质量；验收数量 | 计量充注或检漏期间实际排放至室外的 R600a，并保存回收系统记录。 | kg | per test event | representative production period | charging and test station | 室外实测排放 / 验收设备数 | 监测器校准和回收记录 |
| `cp_energy` | `final_test_pack` | factory_electricity | 电表记录 | 电表编号；期初期末 kWh；分配驱动量；验收数量 | 读取经校准的工厂电表并区分总装及验收测试用电。 | kWh | per shift or batch | representative production period | factory | 可归属 kWh / 验收设备数 | 电表及分配台账 |
| `cp_fuel` | `final_test_pack` | propane_test | 燃料钢瓶测试记录 | 钢瓶前后质量；测试型号；验收数量 | 称量适用吸收式设备测试前后的丙烷钢瓶。 | kg | per test batch | representative production period | factory test station | 可归属丙烷 / 验收设备数 | 钢瓶秤及测试日志 |
| `cp_packaging` | `final_test_pack` | corrugated_box | 包装领用记录 | 纸箱规格；单箱质量；领用数量；验收数量 | 核对验收设备所用瓦楞纸箱的领用和退料。 | kg | per packaging lot | representative production period | factory gate | 纸箱质量 / 验收设备数 | 供应商规格及领料台账 |

### 计算规则

本 PCR 的定量基准为每台验收成品设备。各采集协议按归属的批次投入或产出除以相同配置的验收数量，形成每台设备的清单值；M 由 `cp_mass` 单独测得。不得将每台值误报为每 kg 值。

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | all rows | 核对型号、路线、物种、材料状态、供应商及流类型。 | 物料表、供应商规格及流程图 |
| `dq_mass` | reference and material rows | 保留每台净质量 M 的校准称重记录，并核对领料、成品及废料。 | 称重、库存及验收记录 |
| `dq_period` | all foreground rows | 披露生产期、地点、验收数量、缺失记录和分配驱动量。 | 生产台账、计量及分配台账 |

## 9. 校验规则

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `vr_identity` | reference and route | 确认输出为 CPC 44811 范围内的完整设备，且申报路线与各条件投入一致。 | `un-cpc3-notes-2025` |
| `vr_mass` | reference and inventory | 核对 `finished_appliance` 的 M 千克与同一配置的 `cp_mass` 记录；所有投入和产出均以每台验收成品设备为基准。 | `bis-iso14044-2006` |
| `vr_balance` | material and emission rows | 检查钢板、制冷剂、包装、废料及排放记录的完整性，不得用未验证的参考范围替代实测值。 | `bis-iso14044-2006`; `eu-household-refrigeration-review-2016` |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 家用制冷设备工厂门口前景数据包 |
| downstream_use | 供 `process` 与 `lifecyclemodel` 关联的设备制造清单 |
| allowed_use | 用于所申报路线及配置的产品制造分析 |
| excluded_use | 不得将该工厂门口数据直接解释为完整使用寿命或报废影响 |
| required_metadata | 型号、配置、路线、能源、工质、制造地点、时期、M、接受数量、供应商覆盖 |
| required_quality_disclosure | 缺失 UUID、缺失范围证据、前景数据覆盖、分配、排放监测及上游数据匹配情况 |
| update_trigger | 材料、制冷剂、制造工艺、能源或供应链发生实质变化 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc3-notes-2025` | official_guidance | CPC Ver. 3.0 Explanatory Notes (UNSD, 30 June 2025), p. 239, https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | 完整设备类别及与零部件类别的边界 |
| `eu-household-refrigeration-review-2016` | official_guidance | Preparatory/review study Commission Regulation (EC) No. 643/2009 with regard to ecodesign requirements for household refrigeration appliances and Commission Delegated Regulation (EU) No. 1060/2010 with regard to energy labelling of household refrigeration appliances: FINAL REPORT (VHK and ARMINES, 4 March 2016), pp. 49, 128, https://ecodesign-fridges.eu/sites/ecodesign-fridges.eu/files/Household%20Refrigeration%20Review%20FINAL%20REPORT%2020160304.pdf | 欧盟电动路线的制造及采集项目；不向非电动路线转用定量值 |
| `bis-iso14044-2006` | standard | IS/ISO 14044:2006, Environmental Management — Life Cycle Assessment — Requirements and Guidelines, §§4.2.3.3, 4.3.2–4.3.4, https://fenix.ciencias.ulisboa.pt/downloadFile/2251937252647064/is.iso.14044.2006.pdf | 单元过程边界、实测清单、分配及质量 |
| `usdoe-mref-tsd-2022` | official_guidance | Technical Support Document: Energy Efficiency Program for Consumer Products and Commercial and Industrial Equipment: Miscellaneous Refrigeration Products (US DOE, January 2022), §3.3.1.1, https://www.energy.gov/sites/default/files/2022-01/mref-pa-tsd.pdf | 仅用于吸收式技术描述；报告市场范围排除普通冰箱及冷冻柜 |
