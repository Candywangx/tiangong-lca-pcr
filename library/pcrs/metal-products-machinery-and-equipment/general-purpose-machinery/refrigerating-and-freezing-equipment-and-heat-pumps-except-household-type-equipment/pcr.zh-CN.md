---
pcr_id: pcr.metal-products-machinery-and-equipment.general-purpose-machinery.refrigerating-and-freezing-equipment-and-heat-pumps-except-household-type-equipment
language: zh-CN
status: candidate
content_maturity: authored_methodology
translation_status: aligned
sync_with: pcr.en-US.md
---

# 非家用制冷、冷冻设备及热泵

## 1. 范围与适用性

本 PCR 适用于完整的商业或工业制冷设备、冷冻设备、工艺冷水机组、冷凝机组及非家用热泵的工厂大门前景数据包。建模对象必须是可识别的完整型号或产品系列，而不是制冷剂、零部件、安装服务或一般制冷服务。规则涵盖采购材料和部件的装配、已申报的厂内制备、适用时的制冷剂回路充注与测试、最终测试以及出厂包装。

工厂大门结果不代表安装、配送、运行、维护、制冷剂维修或报废阶段。设备子类型、能力、温度等级、制冷剂及充注量是区分不同产品的重要信息，因此仍须作为性能元数据申报。家用冰箱、家用冷柜、家用空调、家用热泵、单独销售的部件以及服务活动均不在范围内。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.general-purpose-machinery.refrigerating-and-freezing-equipment-and-heat-pumps-except-household-type-equipment |
| classification_refs | CPC 3.0：43913，非家用制冷、冷冻设备及热泵 |
| covered_products | 完整的非家用商业或工业制冷、冷冻设备，专业制冷设备，工艺冷水机组，冷凝机组及热泵 |
| excluded_products | 家用设备；CPC 43913 以外的空调设备；单独销售的压缩机、换热器、风机、控制器等部件；单独销售的制冷剂；安装、修理及制冷服务 |
| representative_product | 制造商工厂大门处一台验收合格的商业或工业制冷、冷冻、冷水、冷凝或热泵设备 |
| production_route | 采购结构材料和部件的装配，并按型号进行回路充注、压力/泄漏测试、性能/电气测试及出厂包装 |
| market_state | 制造商放行的完整新设备，并申报出厂制冷剂充注量和包装状态 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 一台完整且型号明确的非家用制冷、冷冻设备或热泵 |
| How much | 一台验收合格设备，以实测产品净质量（kg）表示 |
| How well | 符合申报的设备子类型、额定制冷和/或制热能力、温度等级、电源、制冷剂种类与出厂充注量以及最终验收测试准则 |
| How long or cycle | 一个工厂生产与验收周期；不含使用寿命内的运行 |
| reference_flow_link | 输出 `finished_equipment` 是全部前景交换的唯一量化参考 |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 一台验收合格设备的实际净质量（kg） |
| 参考产品流 | 冷藏及冷冻设备及热泵，家用型设备除外 `0c1bef08-e0fc-465a-aff0-c3a43837edbc` |
| 参考流属性 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 设备子类型及型号或产品系列；额定制冷和/或制热能力及测试标准与条件；运行温度等级；制冷剂种类及出厂充注量；冷热源配置；电源；产品净质量；安装配置；工厂大门地理范围；生产期；包装状态 |

构建前景数据包时，所有必需限定信息必须在数据集元数据、过程说明、参考流备注、产品说明或等效字段中申报。天工产品流为质量属性；件数仅作描述，必须同时给出合格设备的实测质量。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_item_mass` | `finished_equipment` 及所有按台归一化量 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 实测一台验收合格设备的净质量，或根据可审计的型号 BOM 推导；排除单列包装及可重复使用的运输工装，并将件数换算与该质量核对。 |
| `material_and_component_mass` | 采购材料、装入部件、包装、废料、测试气体、工艺用水、制冷剂充注及厂内制冷剂损失 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 按实测、发票、BOM、钢瓶或质量平衡质量分别报告每项原子交换；不得合并不同材料、部件、气体、制冷剂、废物或排放。 |
| `electricity_energy` | `manufacturing_electricity` | 净热值 `93a60a56-a3c8-11da-a746-0800200b9a66` | MJ | 保留电表 kWh 原始记录，仅在投影时按 1 kWh = 3.6 MJ 换算；记录电表边界、分配因子、电压等级、地理范围和供电合同。 |
| `refrigerant_species_balance` | 制冷剂投入及厂内制冷剂排放 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 每种制冷剂或混合物单列，以期初库存、采购、期末库存、产品充注、回收、退回及实测或计算损失闭合报告期质量平衡；不得以其他制冷剂替代。 |
| `gas_reference_conditions` | `gaseous_nitrogen_test_gas` 及 `helium_test_gas` | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 原始记录为体积时，保留温度和压力，仅可使用供应商证书或相同基准条件下的有据密度换算为质量。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 报告工厂大门处接收的采购材料、部件、制冷剂、测试气体、水、电力和包装 |
| starting_condition_role | 前景记录从进入制造场址开始；只有研究纳入并链接上游数据集时才表示供应商生产和入厂运输 |
| product_classification_scope | CPC 3.0 代码 43913 语义边界内的完整产品，不因中央分类映射尚未接受而改变 |
| recursive_input_rule | 如完整 CPC 43913 产品作为投入，仅记录一次采购上游产品并链接供应商数据集；不得在本前景数据包内递归展开其制造清单 |
| upstream_dataset_requirement | 建模生命周期系统纳入的每项采购投入须链接地理和技术适宜的上游数据集，或明确记录数据缺口；前景数量仍须场址和产品特定 |
| disclosure | 申报设备子类型、生产路线、纳入的厂内工序、采购部件边界、制冷剂充注与测试状态、包装状态、工厂地理范围、报告期及所有排除项 |

| rule_id | 适用对象 | 规则 | 来源 |
| --- | --- | --- | --- |
| `boundary_factory_gate` | foreground_system_boundary | 纳入材料/部件接收、申报的厂内制备、装配、连接、适用时的制冷剂回路充注与测试、电气和性能测试、包装、合格设备输出、厂内废料及制造大门放行前的实测厂内排放。 | `epd-international-25543` |
| `boundary_use_stage_excluded` | foreground_system_boundary | 前景结果排除配送、安装、运行、维护、制冷剂维修和报废；保留额定性能、制冷剂标识、充注量和测试条件元数据，以便不改变产品标识地衔接下游使用阶段模型。 | `eu-2015-1095-professional-refrigeration`; `jrc91168-commercial-refrigeration` |
| `boundary_conditional_operations` | foreground_system_boundary | 仅当申报型号和工厂路线确实使用相应材料、部件、制冷剂、测试介质、水、包装、废物路线或产生相应排放时才启用条件行；否则标记为不适用，不得在同一行另选替代项。 |  |
| `boundary_upstream_linking` | foreground_system_boundary | 不将供应商生产或入厂运输并入工厂前景操作；研究纳入时链接独立上游数据集并披露缺失链接。 |  |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `component_preparation_and_assembly` | 部件制备与设备装配 | required | 每台建模设备均纳入；仅报告工厂实际实施的制备步骤，采购成品部件作为产品投入。 | 将采购结构材料和部件装配成设备，并记录制造电力及分类金属废料。 | 由 `finished_equipment` 表示的一台合格设备 |
| `refrigerant_circuit_charging_and_test` | 制冷剂回路充注与测试 | conditional | 工厂进行制冷剂或液压回路充注、压力测试、检漏、抽真空、冲洗或湿式测试时纳入；仅启用申报型号实际使用的制冷剂和测试介质行。 | 按种类记录回路测试介质、工艺用水、出厂制冷剂充注及实测厂内制冷剂损失。 | 由 `finished_equipment` 表示的一台合格设备 |
| `final_packaging_and_release` | 最终测试、包装与放行 | required | 每台设备均纳入最终验收和放行；仅当申报的工厂大门产品随附相应包装时才启用包装投入。 | 记录出厂包装及完整合格参考产品。 | 由 `finished_equipment` 表示的一台合格设备 |

### 过程：部件制备与设备装配（`component_preparation_and_assembly`）

#### 输入

##### 产品流

###### 碳钢板（`carbon_steel_sheet`）

碳钢板在被切割或成形为设备面板、框架、底座、罐体或支架时跨越工厂边界。

- 选定流：碳钢板
- 流属性/单位：质量 / kg
- 数量规则：根据领料、下料方案或型号 BOM 记录每台合格设备的净领用质量；仅在使用碳钢板时纳入。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每台验收合格设备
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_component_bom`
- 来源：`epd-international-25543`

###### 铝板材（`aluminium_sheet`）

铝板材作为外壳、面板、翅片或其他型号特定零件装入设备时跨越工厂边界。

- 选定流：铝板材 `4f197be4-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位：质量 / kg
- 数量规则：记录每台合格设备的 BOM 或领料质量；仅在装入铝板材时纳入。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每台验收合格设备
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_component_bom`
- 来源：

###### 铜管材（`copper_tubing`）

铜管材作为制冷剂或液压回路管路装入设备时跨越工厂边界。

- 选定流：铜管材 `0d80f4b8-8f26-4eee-8b81-df499c4c9dff`
- 流属性/单位：质量 / kg
- 数量规则：记录型号 BOM、实测领料质量，或以有据的管材尺寸和密度将长度换算为质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每台验收合格设备
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_component_bom`
- 来源：`epd-international-25543`

###### 全封闭制冷压缩机（`hermetic_refrigeration_compressor`）

仅当型号装入此类压缩机时，才将完整的全封闭压缩机记录为采购部件。

- 选定流：全封闭制冷压缩机 `a2a3427c-5d93-494b-a1fd-bcab42fea432`
- 流属性/单位：质量 / kg
- 数量规则：汇总一台合格设备内安装数量的经核实供应商质量；不得用于半封闭式、开启式或其他压缩机。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每台验收合格设备
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_component_bom`
- 来源：`epd-international-25543`

###### 翅片式换热器（`finned_heat_exchanger`）

采购的完整盘管或换热器总成装入设备时，将翅片式换热器记录为跨边界投入。

- 选定流：翅片式换热器
- 流属性/单位：质量 / kg
- 数量规则：汇总一台合格设备内采购完整换热器的供应商证明或收货质量；仅适用于采购完整换热器。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每台验收合格设备
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_component_bom`
- 来源：`epd-international-25543`

###### 电动轴流风机（`electric_axial_fan`）

采购的电动轴流风机装入设备用于空气流动时跨越工厂边界。

- 选定流：电动轴流风机
- 流属性/单位：质量 / kg
- 数量规则：汇总一台合格设备内电动轴流风机的供应商证明或收货质量；仅适用于该风机类型。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每台验收合格设备
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_component_bom`
- 来源：`epd-international-25543`

###### 电子控制单元（`electronic_control_unit`）

电子控制单元装入申报型号时记录为采购部件。

- 选定流：电子控制单元 `ff5a65c8-7726-48b4-b794-6bacd21ab77e`
- 流属性/单位：质量 / kg
- 数量规则：汇总一台合格设备所安装控制单元的供应商证明或 BOM 质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每台验收合格设备
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_component_bom`
- 来源：`epd-international-25543`

###### 硬质聚氨酯保温泡沫（`rigid_polyurethane_insulation_foam`）

硬质聚氨酯保温泡沫装入保温板、罐体、柜体或管道时跨越工厂边界。

- 选定流：硬质聚氨酯保温泡沫
- 流属性/单位：质量 / kg
- 数量规则：根据 BOM、发泡记录或板材供应商声明记录每台合格设备的固化泡沫质量；仅在含此保温材料时纳入。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每台验收合格设备
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_component_bom`
- 来源：

###### 制造用电（`manufacturing_electricity`）

采购电力用于可归属的切割、成形、钎焊、装配、抽真空、测试及辅助作业时跨越工厂边界。

- 选定流：电力 `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- 流属性/单位：净热值 / MJ
- 数量规则：以分表或有据的因果驱动因子将计量电力分配至合格型号产出；按 `electricity_energy` 换算保留的 kWh 记录。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每台验收合格设备
- 基准类型：过程输出（`process_output`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_factory_electricity`
- 来源：

##### 废物流

#### 输出

##### 产品流

##### 废物流

###### 废钢（`steel_scrap`）

厂内产生并离开装配过程的分类钢材边角料和报废钢件记录为废物。

- 选定流：废钢 `b973529f-a945-4cb9-9600-ecbcc745a4c6`
- 流属性/单位：质量 / kg
- 数量规则：记录每台合格设备对应的工厂边界内产生并移出的实测废钢；仅在厂内制备钢材时纳入。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每台验收合格设备
- 基准类型：过程输出（`process_output`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_scrap_records`
- 来源：

###### 铝废料（`aluminium_scrap`）

厂内产生并离开装配过程的分类铝材边角料和报废铝件记录为废物。

- 选定流：铝废料 `96c5f842-ea53-419b-b1cd-c02c479efb45`
- 流属性/单位：质量 / kg
- 数量规则：记录每台合格设备对应的工厂边界内产生并移出的实测铝废料；仅在厂内制备铝材时纳入。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每台验收合格设备
- 基准类型：过程输出（`process_output`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_scrap_records`
- 来源：

###### 废铜（`copper_scrap`）

厂内产生并离开装配过程的分类铜管边角料和报废铜件记录为废物。

- 选定流：废铜 `4fbbb5f1-560a-4052-ba0c-652c5dfc282e`
- 流属性/单位：质量 / kg
- 数量规则：记录每台合格设备对应的工厂边界内产生并移出的实测废铜；仅在厂内制备铜材时纳入。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每台验收合格设备
- 基准类型：过程输出（`process_output`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_scrap_records`
- 来源：

##### 基本流

### 过程：制冷剂回路充注与测试（`refrigerant_circuit_charging_and_test`）

#### 输入

##### 产品流

###### 气态氮测试气体（`gaseous_nitrogen_test_gas`）

气态氮用于回路加压、吹扫或检漏而被消耗时跨越边界。

- 选定流：气态氮测试气体
- 流属性/单位：质量 / kg
- 数量规则：记录每台合格设备对应的钢瓶或储罐领用量减实测回收量；仅在使用气态氮时纳入。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每台验收合格设备
- 基准类型：过程输出（`process_output`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_test_materials`
- 来源：`epd-international-25543`

###### 氦气测试气体（`helium_test_gas`）

氦气作为检漏示踪气体被消耗时跨越边界。

- 选定流：氦气测试气体
- 流属性/单位：质量 / kg
- 数量规则：记录每台合格设备对应的钢瓶或储罐领用量减实测回收量；仅在采用氦检漏时纳入。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每台验收合格设备
- 基准类型：过程输出（`process_output`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_test_materials`
- 来源：`epd-international-25543`

###### 工艺用水（`process_water`）

仅当工艺用水用于申报路线内的工厂液压测试、清洗或湿式调试时跨越边界。

- 选定流：工艺用水 `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- 流属性/单位：质量 / kg
- 数量规则：记录进入纳入作业的计量或批次核算水量，扣除单独计量的循环量；不得用于冷却水或排放废水。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每台验收合格设备
- 基准类型：过程输出（`process_output`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_test_materials`
- 来源：

###### R410A 出厂充注（`r410a_charge`）

仅对出厂充注该混合制冷剂的设备，将 R410A 作为产品投入记录。

- 选定流：制冷剂R410A `7d38fb13-97b6-4c65-a866-0d89444afbe4`
- 流属性/单位：质量 / kg
- 数量规则：记录合格设备内保留的 R410A 质量，并与该制冷剂的工厂质量平衡核对；否则标记为不适用。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每台验收合格设备
- 基准类型：过程输出（`process_output`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_refrigerant_balance`
- 来源：`jrc91168-commercial-refrigeration`; `eu-2024-573-fgas`

###### R404A 出厂充注（`r404a_charge`）

仅对出厂充注该混合制冷剂的设备，将 R404A 作为产品投入记录。

- 选定流：制冷剂，R404A `33db0143-ba65-4036-a57b-e32dcdecb779`
- 流属性/单位：质量 / kg
- 数量规则：记录合格设备内保留的 R404A 质量，并与该制冷剂的工厂质量平衡核对；否则标记为不适用。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每台验收合格设备
- 基准类型：过程输出（`process_output`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_refrigerant_balance`
- 来源：`jrc91168-commercial-refrigeration`; `eu-2024-573-fgas`

###### R134a 出厂充注（`r134a_charge`）

仅对出厂充注该制冷剂的设备，将 R134a 作为产品投入记录。

- 选定流：制冷剂R134a `1ed335ef-341f-46cc-be90-6bf805244f28`
- 流属性/单位：质量 / kg
- 数量规则：记录合格设备内保留的 R134a 质量，并与该制冷剂的工厂质量平衡核对；否则标记为不适用。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每台验收合格设备
- 基准类型：过程输出（`process_output`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_refrigerant_balance`
- 来源：`jrc91168-commercial-refrigeration`; `eu-2024-573-fgas`

###### R290 丙烷出厂充注（`r290_propane_charge`）

仅对出厂充注 R290 的设备，将制冷剂级丙烷记录为跨边界投入。

- 选定流：丙烷 `9c0d706a-c414-4afb-ad0c-4777c4072311`
- 流属性/单位：质量 / kg
- 数量规则：记录合格设备内保留的制冷剂级 R290 质量和纯度，并与该制冷剂的工厂质量平衡核对；否则标记为不适用。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每台验收合格设备
- 基准类型：过程输出（`process_output`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_refrigerant_balance`
- 来源：`jrc91168-commercial-refrigeration`; `eu-2024-573-fgas`

###### R744 二氧化碳出厂充注（`r744_carbon_dioxide_charge`）

仅对出厂充注 R744 的设备，将制冷剂级二氧化碳记录为跨边界投入。

- 选定流：制冷剂级二氧化碳（R744）
- 流属性/单位：质量 / kg
- 数量规则：记录合格设备内保留的 R744 质量、纯度和供应状态，并与该制冷剂的工厂质量平衡核对；否则标记为不适用。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每台验收合格设备
- 基准类型：过程输出（`process_output`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_refrigerant_balance`
- 来源：`jrc91168-commercial-refrigeration`; `eu-2024-573-fgas`

###### R717 氨出厂充注（`r717_ammonia_charge`）

仅对出厂充注 R717 的设备，将无水制冷剂级氨记录为跨边界投入。

- 选定流：氨 `9874382d-672c-4601-a3ce-9a4ae21e663b`
- 流属性/单位：质量 / kg
- 数量规则：记录合格设备内保留的无水制冷剂级 R717 质量和纯度，并与该制冷剂的工厂质量平衡核对；否则标记为不适用。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每台验收合格设备
- 基准类型：过程输出（`process_output`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_refrigerant_balance`
- 来源：`eu-2024-573-fgas`

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

##### 基本流

###### 制造阶段排放至空气的 R410A（`r410a_emission_to_air`）

只有按制冷剂种类建立的工厂质量平衡证明确有未回收的大气损失时，才将 R410A 记录为基本流输出。

- 选定流：制冷剂R410A排放至空气
- 流属性/单位：质量 / kg
- 数量规则：在扣除充注、回收、退回和期末库存后，根据闭合工厂质量平衡计算非负 R410A 损失；不纳入上游制冷剂生产排放，也不以组分排放替代。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每台验收合格设备
- 基准类型：过程输出（`process_output`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_refrigerant_balance`
- 来源：`eu-2024-573-fgas`

### 过程：最终测试、包装与放行（`final_packaging_and_release`）

#### 输入

##### 产品流

###### 瓦楞纸箱（`corrugated_board_box`）

瓦楞纸箱随申报的工厂大门设备交付时，作为出厂包装跨越边界。

- 选定流：瓦楞纸箱 `4f197bec-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位：质量 / kg
- 数量规则：记录每台放行设备对应的实际包装 BOM 或称量质量；否则标记为不适用。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每台验收合格设备
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_bom`
- 来源：`epd-international-25543`

###### 木托盘（欧标）（`euro_wooden_pallet`）

欧标木托盘随设备交付且不是可重复使用的厂内工装时跨越边界。

- 选定流：木托盘（欧标） `96b2b9ac-cfb6-46bf-8ad1-c056e338950a`
- 流属性/单位：质量 / kg
- 数量规则：以托盘质量除以实际承载的放行设备数；否则标记为不适用，并单独披露循环共用安排。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每台验收合格设备
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_bom`
- 来源：`epd-international-25543`

###### 低密度聚乙烯包装薄膜（`ldpe_packaging_film`）

低密度聚乙烯薄膜用于包裹或保护放行设备时跨越边界。

- 选定流：低密度聚乙烯薄膜（PE-LD） `2cecd3a7-d90e-44b4-aec5-1d9dfb907477`
- 流属性/单位：质量 / kg
- 数量规则：记录每台放行设备对应的包装 BOM、卷材消耗或称量质量；否则标记为不适用。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每台验收合格设备
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_bom`
- 来源：`epd-international-25543`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 完整非家用制冷、冷冻设备或热泵（`finished_equipment`）

完整设备通过所需最终测试并放行后，作为参考产品离开前景制造边界。

- 选定流：冷藏及冷冻设备及热泵，家用型设备除外 `0c1bef08-e0fc-465a-aff0-c3a43837edbc`
- 流属性/单位：质量 / kg
- 数量规则：记录一台合格设备的实测或可审计 BOM 净质量，并与申报件数及包装排除项核对。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：一台验收合格设备
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_acceptance_record`
- 来源：`un-cpc-3-0-structure-2025`; `epd-international-25543`

##### 废物流

##### 基本流

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | 来源 |
| --- | --- | --- | --- |
| `allocation_avoid_by_submetering` | foreground_burden_allocation | 通过申报型号或产品系列的独立 BOM、生产订单、电表、批次日志、充注日志、测试记录和废料记录避免分配。 |  |
| `allocation_shared_factory_resources` | foreground_burden_allocation | 共用电力、水、测试气体或间接负荷无法细分时，采用机器时间、测试时间、计量负荷或生产工时等有据因果驱动因子；仅在能够代表资源因果关系时使用质量或件数。 |  |
| `allocation_scrap_no_credit` | foreground_burden_allocation | 钢、铝和铜废料在产生点作为废物报告；前景清单内不计避免负荷或回收收益，下游回收模型另行披露。 |  |
| `allocation_rework_and_rejects` | foreground_burden_allocation | 纳入可归属的返工投入，并按有据生产订单期间将未回收报废品负荷分配至合格产出；排除已证明在同一期间完整回用的投入。 |  |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_component_bom` | `component_preparation_and_assembly` | 结构材料和装入部件 | 型号 BOM、采购规格、收货、领料、下料方案 | 型号、零件号、材料规格、数量、单位质量、领用质量、装入质量、供应商 | 将批准 BOM 与生产订单领料及供应商质量证据核对 | kg | 每次型号修订及生产订单 | 有代表性的生产期，通常至少连续 12 个月或完整较短生产批次 | 报告工厂 | 汇总合格装入量及可归属领用量，按合格设备归一化 | 批准的 BOM 版本、供应商数据表或发票、库存台账、生产订单核对 |
| `cp_factory_electricity` | `component_preparation_and_assembly` | 制造用电 | 总表/分表读数、区间数据、生产工时 | 电表编号、起止读数、kWh、区域或设备、型号产出、停机 | 优先使用分表；否则核对场址账单并以因果运行因子分配 | 保留 kWh；投影 MJ | 每月或更高频 | 与生产产出相同的代表期 | 报告工厂及纳入的生产区域 | 扣除排除负荷、分配纳入负荷、除以合格设备数并按 3.6 MJ/kWh 换算 | 校准电表记录、供电发票、核对及分配工作表 |
| `cp_scrap_records` | `component_preparation_and_assembly` | 分类钢、铝、铜废料 | 称重单、料箱日志、回收商收据 | 材料、毛重、皮重、日期、生产区域、去向 | 称量每项分类废料并核对料箱期初/期末库存 | kg | 每次移出，按月汇总 | 与生产产出相同的代表期 | 报告工厂 | 按材料汇总净产生量并按合格设备归一化 | 校准秤或外部地磅单及回收商收据 |
| `cp_test_materials` | `refrigerant_circuit_charging_and_test` | 氮气、氦气及工艺用水 | 钢瓶/储罐库存、仪表、批次测试日志 | 介质、纯度、期初库存、采购、期末库存、回收量、基准条件、水表 | 闭合介质特定库存平衡并与测试序列号关联 | kg | 每批次、换瓶或仪表周期 | 与测试合格产出相同的代表期 | 充注及测试工位 | 净消耗质量除以合格测试设备数；保留气体换算证据 | 钢瓶证书、校准仪表、回收日志、测试记录 |
| `cp_refrigerant_balance` | `refrigerant_circuit_charging_and_test` | 按种类的制冷剂充注及厂内损失 | 制冷剂库存、采购、充注机、回收、退回及序列号充注日志 | 种类、混合物名称、纯度、期初库存、采购、期末库存、充注质量、回收质量、退回质量、序列号 | 分别闭合每种制冷剂或混合物的质量平衡 | kg | 每次充注并按月闭合 | 与充注合格产出相同的代表期 | 全部工厂储存及充注点 | 产品充注量取合格序列号充注；损失为扣除回收和退回后的平衡残差，出现负值须调查 | 校准充注设备、采购/退回记录、回收日志、签署的平衡表 |
| `cp_packaging_bom` | `final_packaging_and_release` | 瓦楞纸箱、欧标托盘及 LDPE 薄膜 | 包装 BOM、领用、称量记录 | 包装类型、材料、单位质量、领用数量、循环状态、每托设备数 | 将包装领用与放行序列号核对并称量代表性包装 | kg | 每次包装设计修订及生产订单 | 与放行产出相同的代表期 | 报告工厂发运边界 | 汇总随一台设备供应的包装；共享托盘按实际设备数分配 | 批准的包装规格、称量记录、领用与发运核对 |
| `cp_acceptance_record` | `final_packaging_and_release` | 成品设备参考产品 | 序列号、型号、净质量、性能、电气及放行记录 | 序列号、型号、子类型、能力、测试标准与条件、温度等级、电源、制冷剂、充注量、净质量、验收状态、放行日期 | 将校准的最终测试结果和质量记录关联至每个合格序列号或统计受控型号系列 | 台和 kg | 每台合格设备 | 与全部投入记录相同的代表期 | 最终测试及发运大门 | 统计合格设备并报告每台的实测或 BOM 核对净质量 | 签署的验收记录、校准测试结果、秤或受控 BOM、不合格处置 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_normalize_per_accepted_item` | 全部前景交换 | 将申报型号的可归属期间总量除以同期间合格设备数；混合型号生产须先应用有据因果分配驱动因子。 | 可归属期间量；合格设备数；必要时的分配驱动因子 | 每台合格设备的原子交换量 |  |
| `calc_electricity_to_mj` | `manufacturing_electricity` | 投影 MJ = 保留的计量 kWh × 3.6 | 纳入的计量 kWh | 每台合格设备的电力 MJ |  |
| `calc_refrigerant_charge` | 制冷剂投入行 | 分别汇总每种制冷剂在合格序列号中保留的经核实充注量，再除以该设计的合格充注设备数。 | 序列号充注日志；合格充注设备数 | 每台合格设备的制冷剂充注 kg | `eu-2015-1095-professional-refrigeration`; `eu-2024-573-fgas` |
| `calc_refrigerant_loss` | `r410a_emission_to_air` | 损失 = 期初库存 + 采购 − 期末库存 − 合格产品充注 − 回收 − 退回；调查负值或无法解释的平衡，仅报告证实的非负大气损失。 | 库存、采购、充注、回收、退回 | 每台合格设备排放至空气的 R410A kg | `eu-2024-573-fgas` |
| `calc_scrap_by_material` | 金属废物输出 | 按金属分别计算：产生废料 = 外运废料 + 期末场内废料 − 期初场内废料；型号归属后按合格设备归一化。 | 材料特定料箱库存及外运称量 | 每台合格设备分金属废物质量 |  |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_temporal_alignment` | 全部前景记录 | 使用统一的代表性生产期；如采用较短批次，披露日期、原因及生产覆盖率。 | 发票、电表、库存、生产、测试及放行记录的期间核对 |
| `dq_model_representativeness` | 产品系列数据集 | 证明纳入型号具有共同的材料架构、部件技术、制冷剂路线、工厂作业和验收准则；否则分别发布数据集。 | 型号系列定义、BOM 对比、路线矩阵、产量加权计算 |
| `dq_measurement_traceability` | 质量、能量、气体、充注及性能记录 | 标识仪器、校准或供应商证书、测量分辨率、换算和责任记录系统。 | 校准证书、供应商证书、受控仪表清单、审计轨迹 |
| `dq_completeness` | 清单 | 将全部 26 个原子行核对为实测/计算或明确不适用，闭合分材料及制冷剂平衡，并披露未解决 UUID，不得虚构代理。 | 签署的完整性清单、平衡表、UUID 审计回执、例外日志 |
| `dq_geography_and_technology` | 前景及链接上游数据 | 申报工厂地理、技术、采购部件边界、供电合同、制冷剂等级和供应商地理；说明不具代表性的上游链接。 | 数据集元数据、供应商声明、链接数据集审查 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | 来源 |
| --- | --- | --- | --- |
| `validate_identity_and_reference` | foreground_dataset_conformance | 确认建模输出为完整非家用 CPC 43913 产品，参考 UUID 精确且公开状态为 100，输出属性为质量，并将一台合格设备与其净 kg 质量核对。 | `un-cpc-3-0-structure-2025` |
| `validate_qualifiers` | foreground_dataset_conformance | 数据包缺少设备子类型/型号、能力和测试条件、温度等级、制冷剂种类和充注量、冷热源配置、电源、净质量、工厂地理、期间或包装状态时拒绝。 | `eu-2015-1095-professional-refrigeration` |
| `validate_atomic_inventory` | foreground_dataset_conformance | 确认每张清单卡仅表示一项原子交换，采用已接受的精确审计 UUID，并按条件量化或明确标记不适用；不得使用笼统的公用工程、燃料、包装、废物、排放、部件或制冷剂选择项。 |  |
| `validate_refrigerant_exclusivity` | foreground_dataset_conformance | 确认仅启用申报型号实际充注的制冷剂，各种制冷剂分列，按种类闭合充注和厂内损失，且不得将制冷剂产品流用作基本流排放。 | `jrc91168-commercial-refrigeration`; `eu-2024-573-fgas` |
| `validate_boundary_and_allocation` | foreground_dataset_conformance | 确认工厂大门排除项、上游链接、共用资源驱动因子、返工/报废处置及前景内不计回收收益；研究层面的扩展另行报告。 |  |
| `validate_bilingual_alignment` | foreground_dataset_conformance | 确认中英文投影保持相同的过程 id、行 id、规则 id、来源 id、UUID、受控代码和清单行顺序，并对所有带 UUID 流采用天工正式中文 baseName。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 一台完整非家用制冷、冷冻设备或热泵的产品特定或经证实产量加权的系列前景制造数据集 |
| downstream_use | 链接上游供应数据集，并按需另接配送、安装、运行、维修和报废情景以构建过程或生命周期模型投影 |
| allowed_use | 仅在子类型、功能、能力/测试条件、温度等级、制冷剂、工厂边界、地理、期间及包装状态兼容时进行工厂大门比较 |
| excluded_use | 不同制冷/制热功能直接比较；家用设备；部件或制冷剂生产；使用阶段效率主张；未另建下游模块的全生命周期结果 |
| required_metadata | 全部参考流限定信息；过程适用性；采购部件边界；前景期间及地理；原始记录系统；分配驱动因子；上游链接及缺口；UUID 审计状态；数据包版本 |
| required_quality_disclosure | 合格产出覆盖率、型号系列代表性、测量/校准状态、质量和制冷剂平衡闭合、分配比例、排除项、不适用行、未解决 UUID 及缺少有来源数量范围 |
| update_trigger | 型号架构、额定功能/能力等级、制冷剂或充注量、压缩机/换热器技术、主要材料或包装设计、工厂路线/场址、供电合同、分配驱动因子或代表期变化 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3-0-structure-2025` | 官方指南（`official_guidance`） | 联合国统计司，CPC 3.0 结构，2025 年 6 月 30 日，CSV：https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv | 依据原文核实 CPC 43913 代码及英文产品分类标识 |
| `epd-international-25543` | 数据集（`dataset`） | EPD International，EPD-IES-0025543:003，NRG350R 商用热泵/冷水机产品记录及声明：https://www.environdec.com/library/epd25543 | 依据原文核实范围内 CPC 43913 产品、以质量换算的一台申报单位，以及工厂装配、钎焊、加压、氦/氮检漏、抽真空、布线、最终测试、包装作业及部件 |
| `eu-2015-1095-professional-refrigeration` | 标准（`standard`） | 欧盟委员会，关于专业冷藏柜、速冻柜、冷凝机组和工艺冷水机组的 (EU) 2015/1095 号条例：https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32015R1095 | 依据原文核实专业设备定义、额定性能/测试信息、年用电信息及制冷剂类型/名称/GWP/充注量字段 |
| `jrc91168-commercial-refrigeration` | 官方指南（`official_guidance`） | 欧盟委员会联合研究中心，《商用制冷生态设计》，JRC91168，2014：https://publications.jrc.ec.europa.eu/repository/bitstream/JRC91168/comm_refrig_published_bkg_doc%20-%202014%20august%2026.pdf | 依据原文核实能源和制冷剂的重要性，以及 R290、R600a、R744、R404A、R134a、R410A 在商用制冷中作为不同制冷剂或混合物出现 |
| `eu-2024-573-fgas` | 标准（`standard`） | 欧洲议会和理事会，关于含氟温室气体的 (EU) 2024/573 号条例合并文本：https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:02024R0573-20240220 | 依据原文核实设备类别/制冷剂适用性区分及混合物质量分数处理；仅作报告和符合性规则，不作经验数量证据 |
