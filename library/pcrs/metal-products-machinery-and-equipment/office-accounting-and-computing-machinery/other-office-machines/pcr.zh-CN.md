---
pcr_id: pcr.metal-products-machinery-and-equipment.office-accounting-and-computing-machinery.other-office-machines
language: zh-CN
status: candidate
content_maturity: authored_methodology
translation_status: aligned
sync_with: pcr.en-US.md
---

# 其他办公室用机器

## 1. 范围与适用性

本 PCR 涵盖 CPC 3.0 子类 45160 所识别的剩余类办公室用机器的制造。官方明细所列产品包括胶版复印机和油印机；信件封口、开封、折叠、密封和分类机；地址印写机；邮票粘贴或盖销机；不带计算装置的收银机和售票机；硬币计数机；削铅笔机；打孔机或订书机；以及碎纸机。不包括归入 45141 的带计算装置售票机和收银机，也不包括归入 45142 的可连接自动数据处理设备或网络的自动柜员机和收银机。

本 PCR 支持已声明机器型号的从摇篮到工厂大门前景数据包。由于该子类同时包含物料清单不同的机械产品和机电产品，可选功能通过条件过程表示，不进行跨产品清单展开。必须声明型号、额定办公功能、供电架构、生产路线、制造地域、包装配置和产品净质量。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.office-accounting-and-computing-machinery.other-office-machines |
| classification_refs | CPC 3.0：45160 Other office machines |
| covered_products | CPC 45160 官方纳入说明范围内的办公室用机器，包括碎纸机、不带计算装置的邮件处理机和售票机、硬币计数机、削铅笔机以及打孔机或订书机 |
| excluded_products | 归为影印机、打印机、传真机、计算机外围设备、CPC 45141 带计算装置机器、CPC 45142 可联网自动柜员机或收银机的产品，以及单独供应的零部件或附件 |
| representative_product | 电动碎纸机，仅用于组织有条件适用的电气和塑料部件规则，不用于缩小产品类别 |
| production_route | 采购材料和部件接收；有条件的机械部件制造；有条件的电气部件集成；最终装配、验收测试和包装 |
| market_state | 在制造场址大门处按型号和配置识别的已完成、已测试、已包装机器 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 生产能够执行所声明办公功能的特定 CPC 45160 办公室用机器型号 |
| How much | 1 kg 不含运输包装的成品机器净质量 |
| How well | 所声明型号通过制造商记录的功能、安全和质量验收标准 |
| How long or cycle | 一个完整生产批次；使用阶段寿命不在本从摇篮到工厂大门单位内，必须在生命周期模型中另行声明 |
| reference_flow_link | `finished_other_office_machine` |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 kg |
| 参考产品流 | 其他办公室用机器 |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 型号标识；办公功能；额定能力或处理量；供电架构；产品净质量；制造场址和地域；所含生产阶段；包装配置；验收测试依据 |

构建前景数据包时，`必需限定信息` 中列出的信息应在数据集元数据、过程说明、参考流备注、产品说明或等效数据包字段中明确声明。缺失必需限定信息的数据包视为参考流定义不完整。尚未确认完全匹配的 TianGong 参考产品 UUID；该身份在清单中明确保持未解决状态。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_net_mass` | 参考成品 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 在验收测试后、运输包装前测量成品机器质量；除非手册、散装耗材和包装属于销售机器配置的组成部分，否则予以排除，并披露所有纳入项。 |
| `lot_normalization` | 所有清单交换 | 行特定属性 | 行特定单位 | 汇总同一生产批次的交换量并除以合格成品净质量（kg）；废品不得计入分母，其材料和处置必须单独记录。 |
| `electricity_conversion` | 电力行 | Net calorific value `93a60a56-a3c8-11da-a746-0800200b9a66` | MJ | 保留电表的能量基准，并按 1 kWh = 3.6 MJ 转换；披露是否包括辅助负荷和线路损耗。 |
| `component_mass_accounting` | 采购和自制部件 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 使用接收、领用、退料和实测废料记录核对进入合格产品的材料；没有型号特定质量换算记录时，不得用件数替代质量。 |

## 5. 系统边界

前景边界始于采购材料和部件进入各声明制造场址，止于合格且已包装机器到达场址大门。采购投入的上游生产由所连接的上游数据集表示。若现场为所声明型号实施部件制造、电气集成、装配、测试、返工和包装，均应纳入。使用和寿命终止阶段不属于本从摇篮到工厂大门数据包，但下游生命周期模型可以利用另行声明的情景加入这些阶段。

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_site_gate` | 声明的制造场址 | 纳入材料和部件进入制造场址后直至合格已包装机器放行期间的所有材料、部件、能源、废物和直接基本流交换；识别外包阶段并连接其数据集，不得默默排除。 | `un-cpc-3-0-detail-45160` |
| `boundary_conditional_routes` | 型号特定生产路线 | 仅当机械制造在声明前景内实施时纳入该过程；仅当所声明型号含电气或电子部件时纳入电气集成；否则将过程标为不适用并说明采购部件边界。 | `hk-green-procurement-paper-shredder-2022`; `japan-green-procurement-2020` |
| `boundary_specific_exchanges` | 物料清单和废物台账 | 以独立原子行补充其他型号特定交换；不得把未命名材料、公用工程、包装或废物合并为伞式流。 |  |
| `boundary_use_stage` | 下游生命周期模型 | 制造数据包不得纳入使用电力、耗材、维护或寿命终止处理；构建生命周期模型时将其作为独立过程声明。 | `japan-green-procurement-2020` |

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 采购材料和部件到达各声明制造场址大门 |
| starting_condition_role | 前景制造进入条件 |
| product_classification_scope | 仅限 CPC 3.0 子类 45160，并按其官方纳入和排除说明解释 |
| recursive_input_rule | 当一个采购的 CPC 45160 机器被纳入另一覆盖产品时，将其作为带独立上游数据集和型号标识的产品投入记录；其制造不得在接收过程中递归展开。 |
| upstream_dataset_requirement | 每项采购材料、部件、电力和包装投入均须连接地域和技术具有代表性的上游数据集，或明确记录数据缺口。 |
| disclosure | 声明场址、外包阶段、采购与自制部件、型号配置、生产期、净产出质量、分配、截断以及每个遗漏或不适用过程。 |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `mechanical_component_fabrication` | 机械部件制造 | conditional | 当所声明型号的钢材成形或 ABS 成型在报告前景内实施时纳入。 | 制造结构件、外壳、切割件或机构部件。 | 转入装配的合格自制部件 kg |
| `electrical_component_integration` | 电气部件集成和测试 | conditional | 当所声明型号含电动机或印制线路板，且集成或电气测试在报告前景内实施时纳入。 | 集成并测试电气或电子功能部件。 | 转入最终装配的合格电气组件 kg |
| `final_assembly_testing_packaging` | 最终装配、验收测试和包装 | required | 所声明成品型号必须始终纳入。 | 装配部件、实施验收测试、包装合格产出并在场址大门放行。 | 1 kg 成品机器净产出 |

### 过程：机械部件制造（`mechanical_component_fabrication`）

#### 输入

##### 产品流

###### 用于成形部件的冷轧钢板（`cold_rolled_steel_sheet`）

当切割、冲压、折弯或成形在声明前景内进行时，记录这些操作领用的冷轧钢板。由于最高排序候选的双语身份不一致，TianGong UUID 保持未解决。

- 选定流：冷轧钢板
- 流属性/单位：Mass / kg
- 数量规则：生产批次钢板实测领用量减去有记录的未用退料量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 成品机器净产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_component_mass_balance`
- 来源：

###### ABS 成型树脂（`abs_granulate`）

仅当 ABS 部件成型在声明前景内进行时，记录领用的 ABS 粒料；保留牌号和再生料含量记录。

- 选定流：丙烯腈丁二烯苯乙烯共聚物（ABS）粒料 `b895c3a1-076e-4a42-a2c0-6088890c0bd9`
- 流属性/单位：Mass / kg
- 数量规则：生产批次 ABS 粒料实测领用量减去有记录的未用树脂退料量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 成品机器净产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_component_mass_balance`
- 来源：`hk-green-procurement-paper-shredder-2022`; `japan-green-procurement-2020`

###### 部件制造电力（`component_fabrication_electricity`）

记录边界内金属成形和 ABS 成型设备所消耗的采购电力，包括分配的辅助负荷。

- 选定流：电力 `67b723a9-6f63-4802-adca-b52ce7967d47`
- 流属性/单位：Net calorific value / MJ
- 数量规则：生产批次的分表电力，或依据经校准场址总表进行的有记录分配
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 成品机器净产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_component_fabrication_electricity`
- 来源：

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

###### 工业后钢废料（`post_industrial_steel_scrap`）

记录离开本过程并送往再利用、再生或处理的已分拣含铁边角料和不合格钢制成形件；披露去向和污染情况。

- 选定流：工业后钢废料 `c143745d-be4f-4d8f-b403-2dcbfe685349`
- 流属性/单位：Mass / kg
- 数量规则：作为含铁制造废料转出的实测净质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 成品机器净产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_component_mass_balance`
- 来源：

###### ABS 成型废料（`abs_moulding_scrap`）

记录离开过程的已分拣 ABS 浇口、流道、清机料和不合格 ABS 部件。不得与其他聚合物或包装废物合并。

- 选定流：ABS 成型废料
- 流属性/单位：Mass / kg
- 数量规则：扣除有记录的过程内回用粉碎料后的 ABS 废料实测转出净质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 成品机器净产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_component_mass_balance`
- 来源：

##### 基本流

### 过程：电气部件集成和测试（`electrical_component_integration`）

#### 输入

##### 产品流

###### 印制线路板（`printed_wire_board`）

当电气集成过程适用时，记录装入所声明型号的每块印制线路板；保留线路板规格和供应商身份。

- 选定流：印制线路板 `a8bd954c-59b3-4317-b4de-02a17d6da5ca`
- 流属性/单位：Mass / kg
- 数量规则：生产批次印制线路板实测领用质量减去未用退料质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 成品机器净产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_electrical_component_mass_balance`
- 来源：`hk-green-procurement-paper-shredder-2022`

###### 电动机（`electric_motor`）

记录装入电动型号的电动机；声明电动机类型、额定输出、电压和供应商。

- 选定流：电动机 `014f80a3-c257-425b-9b75-3e5a18573695`
- 流属性/单位：Mass / kg
- 数量规则：生产批次电动机实测领用质量减去未用退料质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 成品机器净产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_electrical_component_mass_balance`
- 来源：`japan-green-procurement-2020`

###### 电气集成和测试电力（`electrical_integration_electricity`）

记录声明前景内线路板装配或连接、电动机集成、适用时的固件载入以及电气测试所用采购电力。

- 选定流：电力 `67b723a9-6f63-4802-adca-b52ce7967d47`
- 流属性/单位：Net calorific value / MJ
- 数量规则：生产批次的分表电力，或依据经校准场址总表进行的有记录分配
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 成品机器净产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_electrical_integration_electricity`
- 来源：

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

###### 不合格装配印制线路板（`waste_populated_printed_wiring_board`）

记录在集成或测试中判废并作为废物转出的装配线路板；声明危险特性和去向。

- 选定流：废弃装配印制线路板 `eb5ffe4a-49af-450c-9a31-3efdfd343f8a`
- 流属性/单位：Mass / kg
- 数量规则：转交废物管理的不合格装配线路板实测净质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 成品机器净产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_electrical_component_mass_balance`
- 来源：

##### 基本流

### 过程：最终装配、验收测试和包装（`final_assembly_testing_packaging`）

#### 输入

##### 产品流

###### 最终装配和验收测试电力（`final_assembly_electricity`）

记录最终装配工具、功能验收测试和分配的生产线辅助设备所消耗的采购电力。不包括超过放行标准要求的使用阶段测试。

- 选定流：电力 `67b723a9-6f63-4802-adca-b52ce7967d47`
- 流属性/单位：Net calorific value / MJ
- 数量规则：生产批次的分表电力，或依据经校准场址总表进行的有记录分配
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 成品机器净产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_final_assembly_electricity`
- 来源：

###### 瓦楞纸箱（`corrugated_board_box`）

记录随所声明型号交付的瓦楞纸箱；尺寸、再生料含量和包装配置必须与前景产品相符。

- 选定流：瓦楞纸箱 `4f197bec-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位：Mass / kg
- 数量规则：合格成品所消耗瓦楞纸箱的实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 成品机器净产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_mass`
- 来源：`japan-green-procurement-2020`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 其他办公室用机器成品（`finished_other_office_machine`）

仅记录验收测试后放行的合格机器。在获得完全匹配的 CPC 45160、state-100 TianGong 身份前，选定流不填写 UUID。

- 选定流：其他办公室用机器
- 流属性/单位：Mass / kg
- 数量规则：运输包装前合格成品机器的实测净质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：1 kg 成品机器净产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_finished_product_mass`
- 来源：`un-cpc-3-0-structure-2025`; `un-cpc-3-0-detail-45160`

##### 废物流

##### 基本流

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivision_first` | 共用制造线 | 优先采用过程细分、分表、生产订单记录和直接物料领用记录，使所声明型号获得其实测交换量。 |  |
| `allocation_physical_driver` | 无法避免的共用负荷 | 无法直接测量时，按具有因果关系且有记录的物理驱动因素分配共用电力和辅助负荷，例如设备时间乘以额定负荷；仅在无法建立因果关系时使用质量，并披露敏感性。 |  |
| `allocation_scrap_treatment` | 废料和不合格部件 | 记录投入总量和实测废物输出，不得在前景过程中净扣废料收入或避免生产信用；任何再生替代仅在单独声明的下游情景中记录。 | `japan-green-procurement-2020` |
| `allocation_no_category_average` | 多个 CPC 45160 型号 | 不得对机械构造不同的型号进行平均，除非披露所代表的产品组合、产量权重、功能差异和所有分配步骤。 |  |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_component_mass_balance` | `mechanical_component_fabrication` | 钢材和 ABS 投入；钢材和 ABS 废料输出 | 物料领用、退料、生产和废物转移记录 | material_id; grade; lot; issued_mass; returned_mass; conforming_part_mass; scrap_mass; destination | 按物料和生产订单核对经校准秤量记录、仓库交易和废物转移联单。 | kg | 每个生产批次 | 声明报告期内所有批次 | 每个边界内部件制造场址 | 按物料汇总净领用和外运废料，并归一化到合格成品净质量。 | 秤校准；交易核对；签署的废物转移记录 |
| `cp_component_fabrication_electricity` | `mechanical_component_fabrication` | 部件制造电力 | 分表或场址总表区间记录 | meter_id; start_reading; end_reading; production_order; operating_time; allocation_driver | 读取专用分表，或按有记录的设备时间和负荷分配经校准场址总表。 | MJ | 每批，或按月后分配到批次 | 有代表性的连续报告期 | 每个边界内部件制造场址 | 汇总过程能量并归一化到合格成品净质量。 | 电表校准；账单核对；分配工作表 |
| `cp_electrical_component_mass_balance` | `electrical_component_integration` | 印制线路板和电动机投入；不合格装配线路板输出 | 物料清单、领用、退料、不合格和废物转移记录 | component_id; specification; supplier; issued_mass; returned_mass; accepted_mass; rejected_mass; waste_destination | 核对生产订单部件交易和经校准质量测量。 | kg | 每个生产批次 | 声明报告期内所有批次 | 每个边界内电气集成场址 | 汇总部件净领用和不合格线路板废物，并归一化到合格成品净质量。 | 批准的物料清单；秤校准；不合格处置记录 |
| `cp_electrical_integration_electricity` | `electrical_component_integration` | 集成和测试电力 | 分表或场址总表区间记录 | meter_id; start_reading; end_reading; production_order; test_cycles; allocation_driver | 读取专用分表，或按有记录的设备时间和负荷分配经校准场址总表。 | MJ | 每批，或按月后分配到批次 | 有代表性的连续报告期 | 每个边界内电气集成场址 | 汇总过程能量并归一化到合格成品净质量。 | 电表校准；账单核对；分配工作表 |
| `cp_final_assembly_electricity` | `final_assembly_testing_packaging` | 装配和验收测试电力 | 分表或场址总表区间记录 | meter_id; start_reading; end_reading; production_order; accepted_units; test_cycles; allocation_driver | 读取专用分表，或按有记录的生产线时间和负荷分配经校准场址总表。 | MJ | 每批，或按月后分配到批次 | 有代表性的连续报告期 | 每个最终装配场址 | 汇总装配和放行测试能量并归一化到合格成品净质量。 | 电表校准；账单核对；验收测试日志 |
| `cp_packaging_mass` | `final_assembly_testing_packaging` | 瓦楞纸箱投入 | 包装规范、采购、领用和退料记录 | packaging_id; material; supplier; issued_mass; returned_mass; packed_units | 核对批准的包装规范、仓库交易和经校准抽样质量。 | kg | 每个包装配置和批次 | 声明报告期内所有配置 | 每个最终装配场址 | 汇总纸箱净消耗质量并归一化到合格成品净质量。 | 批准的包装规范；秤校准；库存核对 |
| `cp_finished_product_mass` | `final_assembly_testing_packaging` | 合格成品输出 | 验收和经校准质量记录 | model_id; serial_or_lot; configuration; accepted_quantity; net_mass; excluded_accessories; test_status | 在验收测试后、运输包装前称量有记录的代表性样本或每台机器。 | kg | 每个型号、配置和批次 | 声明报告期内所有合格产出 | 每个最终装配场址 | 汇总合格产品净质量；未逐台称量时保留抽样设计和外推计算。 | 秤校准；验收记录；抽样记录 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_net_material_input` | 材料和部件投入 | 净投入 = 领用质量 - 未用退料质量 | issued_mass; returned_mass | 各行各批次净投入 kg |  |
| `calc_reference_normalization` | 所有质量交换 | 归一化量 = 行净质量 / 合格成品净质量 | 行净质量；合格成品净质量 | kg/kg 参考流 |  |
| `calc_energy_normalization` | 电力行 | 归一化电力 = 过程电力 MJ / 合格成品净质量 kg | 电表差值；换算因子；适用时的分配驱动因素；合格成品净质量 | MJ/kg 参考流 |  |
| `calc_component_mass_check` | 机械部件制造 | 净物料投入 - 外运废料 - 实测合格部件转出 = 有记录的库存变化加实测过程损失 | 领用；退料；废料；部件转出；库存变化 | 物料特定质量平衡残差 |  |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_model_identity` | 参考产品 | 记录型号、配置、额定办公功能或处理量、适用时的电动机额定值、供电架构和验收标准。 | 批准的产品规范和验收测试记录 |
| `dq_temporal_coverage` | 所有前景交换 | 采用能够代表正常生产的连续期间，识别启动、停机、返工和异常批次，并披露排除项。 | 注明日期的生产、电表、仓库和废物记录 |
| `dq_mass_balance` | 含物料过程 | 核对净投入、合格产出、库存变化和每项单独记录的废物流；调查物料特定残差。 | 签署的核对工作表和经校准测量 |
| `dq_electricity_identity` | 电力投入 | 声明电网或供应商组合、电压、地域、交付边界、电表覆盖和损耗处理。 | 发票、供应合同、电表图和分配工作表 |
| `dq_substance_and_recyclability` | 含电气或塑料的型号 | 声明适用的受限物质合规证据、再生塑料声明、可拆解信息和废物去向，不得把法规限值转换为经验清单范围。 | 供应商声明和产品合规记录；`hk-green-procurement-paper-shredder-2022`; `japan-green-procurement-2020` |
| `dq_completeness` | 型号特定清单 | 将批准的物料清单、能源计量图、包装规范、不合格台账和废物台账与清单行比较；把每项遗漏交换作为一个原子流补充，或记录为量化数据缺口。 | 数据负责人签署的完整性核对 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validate_identity_scope` | 产品身份 | 确认声明产品属于官方 CPC 45160 纳入说明，且不是打印机、影印机、计算机外围设备、45141 带计算装置机器、45142 可联网自动柜员机或收银机，也不是单独供应的零部件。 | `un-cpc-3-0-structure-2025`; `un-cpc-3-0-detail-45160` |
| `validate_reference_mass` | 参考流 | 确认归一化成品产出等于 1 kg 产品净质量，并一致处理包装和排除附件。 |  |
| `validate_process_applicability` | 条件过程图 | 确认每个条件过程要么填有前景行和记录，要么明确标为不适用并披露采购部件边界。 |  |
| `validate_uuid_resolution` | TianGong 身份 | 禁止用打印机、影印机、墨水、混合塑料废物或其他代理 UUID 替代三个未解决行；解决前必须取得 state-100 直读身份。 |  |
| `validate_inventory_balance` | 每个生产批次 | 确认物料领用、退料、合格转出、单独记录的废物和库存变化能够核对，并报告残差和纠正措施。 |  |
| `validate_energy_records` | 电力行 | 将过程电表与发票或场址总表核对，避免三个电力行重叠，并验证 kWh 到 MJ 的转换和分配驱动因素。 |  |
| `validate_bilingual_flow_names` | 中文呈现 | 确认每个带 UUID 的中文选定流与 TianGong state-100 中文 baseName 完全一致，无 UUID 的原子流也得到准确翻译。 |  |
| `validate_range_status` | 数量元数据 | 确认没有在缺少两个相互独立、原文已核验且边界兼容的来源时添加外部推断范围；条件不满足时保留清单中的证据需求。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 一个已声明 CPC 45160 办公室用机器型号的前景从摇篮到工厂大门制造数据集 |
| downstream_use | 经审查后可作为 secondary_dataset 或 background_dataset，也可作为生命周期模型的制造阶段，并另行建模使用和寿命终止阶段 |
| allowed_use | 当参考质量、功能、配置、地域、技术和数据期间兼容时，用于型号特定产品比较、供应链评估和生命周期建模 |
| excluded_use | 无限定的类别平均声明、不同办公功能之间的比较、没有声明工作周期和寿命的使用阶段声明，或用代理项替代未解决流 UUID |
| required_metadata | 型号和配置；CPC 范围；额定功能或处理量；净质量；场址和地域；报告期；采购与自制边界；电力供应；包装；分配；截断；未解决身份 |
| required_quality_disclosure | 一手数据占比；电表和秤覆盖；分配驱动因素；抽样；质量平衡残差；不合格品；数据缺口；供应商数据年份；适用时的物质合规证据 |
| update_trigger | 重大设计或供应商变化；生产路线或场址变化；电力供应变化；包装重新设计；验收测试变化；获得新的完全匹配 TianGong UUID；或前景记录不再具有代表性 |

## 11. 数据源

| 来源 id | 类型 | 参考文献 | 用途 |
| --- | --- | --- | --- |
| `un-cpc-3-0-structure-2025` | official_guidance | 联合国统计司，CPC Version 3.0 Structure，2025 年 6 月 30 日。https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv（检索日期 2026-09-08） | CPC 45160 官方分类身份和层级 |
| `un-cpc-3-0-detail-45160` | official_guidance | 联合国统计司，CPC Version 3.0 分类明细，代码 45160。https://unstats.un.org/unsd/classifications/Econ/Structure/Detail/EN/2100/45160（检索日期 2026-09-08） | 官方纳入和排除产品以及语义类别边界 |
| `japan-green-procurement-2020` | official_guidance | 日本环境省，Basic Policy on Promoting Green Procurement，暂译本，2020 年 2 月。https://www.env.go.jp/policy/hozen/green/g-law/archive/bp/r1bp_en.pdf（检索日期 2026-09-08） | 以碎纸机和数字式复制机资料支持电动型号、电力相关性、塑料部件、包装、可拆解性和废物披露 |
| `hk-green-procurement-paper-shredder-2022` | official_guidance | 香港特别行政区政府环境及生态局，Green Procurement: Office equipment M04 Paper shredder，最后审查日期 2022 年 2 月 10 日。https://www.eeb.gov.hk/en/susdev/green_procure/pdf/M04.pdf（检索日期 2026-09-08） | 以碎纸机资料支持线路板、电气或电子部件、塑料部件和受限物质合规记录 |
