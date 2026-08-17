---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.edible-offal-of-cattle-fresh-chilled-or-frozen
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 牛可食内脏，鲜、冷藏或冷冻

## 1. 范围与适用性

本 PCR 适用于精确归入 CPC 21151 的牛可食内脏前景数据包。覆盖从活牛接收、屠宰与去内脏、按器官分离、修整、清洗和检验，经条件性冷却或冻结、组成装配、包装、储存和放行，到清洗及条件性场内废水处理的设施运行。

参考产品为工厂门 1 kg 净合格牛可食内脏。数据包必须申报组成中的每个器官，并且只能申报鲜、冷藏或冷冻中的一种市场状态。水牛可食内脏及所有非牛物种的可食内脏均排除。养牛与进厂运输属于上游；工厂门后的配送、零售、使用与寿命终止属于下游。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | `pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.edible-offal-of-cattle-fresh-chilled-or-frozen` |
| classification_refs | CPC 3.0: 21151, exact |
| covered_products | 处于一个已申报鲜、冷藏或冷冻市场状态的牛可食内脏 |
| excluded_products | 水牛可食内脏；非牛物种可食内脏；牛不可食残余物；预制餐食 |
| representative_product | 由分别计量的牛器官组成的净合格牛可食内脏产品 |
| production_route | 接收；屠宰与去内脏；器官分离；修整、清洗与检验；条件性冷却或冻结；包装、储存与放行；卫生清洗；条件性场内废水处理 |
| market_state | 数据集必须且只能申报鲜、冷藏或冷冻中的一种 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 归入 CPC 21151 且申报每个器官组分的净合格牛可食内脏 |
| How much | 1 kg |
| How well | 通过适用的食品安全与产品放行要求；不计包装质量 |
| How long or cycle | 一个生产批次直至工厂门放行 |
| reference_flow_link | state 100、version 01.01.000 的精确公开 Tiangong Product flow |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 kg 净产品 |
| 参考产品流 | Edible offal of cattle, fresh, chilled or frozen `a6673976-2ef4-4502-b9f5-bbc57099bb40` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | CPC 21151；牛物种；完整器官组成及每个组分质量；恰好一个市场状态；净产品质量；生产场址；生产期；温度调节技术；储存时长；另行报告的包装组成 |

构建前景数据包时，`必需限定信息` 中列出的信息应在数据集元数据、过程说明、参考流备注、产品说明或等效数据包字段中明确声明。缺失必需限定信息的数据包视为参考流定义不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `mu_reference_net_mass` | 参考产品 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 使用经校准的秤确定放行的净合格产品质量。 |
| `mu_component_mass` | 每个器官组分 | Mass | kg | 分别计量每个适用器官组分；组分质量之和必须与放行的净参考产品质量对账。 |
| `mu_packaging_excluded` | 参考产品与包装 | Mass | kg | 参考产品质量不含包装质量，并分别记录每个包装组件。 |
| `mu_physical_mass` | 牛、胴体、器官、共产品与固体废物 | Mass | kg | 采用实测湿质量或净质量；水分或干物质基准影响解释时必须申报。 |
| `mu_electricity` | 电力 | Energy | kWh | 使用经校准的电表读数，并保留电表边界与分配驱动因素。 |
| `mu_thermal_energy` | 外购蒸汽、外购热水与每种场内燃料 | Energy | MJ | 以计量的载体数量和同期物性记录换算，并防止热量重复计算。 |
| `mu_water_volume` | 水与废水 | Volume | m3 | 使用计量体积，并区分常规、高有机负荷、除霜、冷凝水、下水道、回用和直接排放流。 |
| `mu_direct_release_mass` | 直接排入空气或水体的排放 | Mass | kg | 使用同期实测活动量与浓度，或经核实的因子，逐物质或逐监测参数计算质量。 |
| `mu_refrigerant_mass` | 制冷剂补充与损失 | Mass | kg | 分别对每一种制冷剂和每一个回路进行对账。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 进厂运输结束后，活牛穿过设施接收边界 |
| starting_condition_role | 前景起始条件 |
| product_classification_scope | 精确 CPC 21151 牛可食内脏 |
| recursive_input_rule | 申报任何 CPC 21151 中间投入的来源，并防止同一生产递归重复计算 |
| upstream_dataset_requirement | 养牛与进厂运输在独立上游数据集中建模，并披露地理和时期 |
| disclosure | 披露设施、批次时期、完整器官组成、一个市场状态、屠宰与制备配置、温度调节技术、储存时长、供热路线、制冷剂物种、包装 BoM、废水去向及场内处理决定 |

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_start` | 前景系统 | 从进厂运输结束后活牛进入设施接收边界开始。 | `un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916` |
| `boundary_upstream` | 上游活动 | 养牛与进厂运输使用独立的上游数据集建模。 | `eu-2021-2279-environmental-footprint` |
| `boundary_core` | 前景过程 | 纳入接收、屠宰与去内脏、按器官分离、修整、清洗、检验、条件性冷却或冻结、包装、储存、放行及卫生清洗。 | `ec-jrc-2024-sa-bref-jrc135916` |
| `boundary_end` | 前景系统 | 在工厂门放行 1 kg 净合格 CPC 21151 牛可食内脏处结束，包装质量不计入。 | `un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916` |
| `boundary_downstream` | 下游活动 | 本前景清单不纳入工厂门后的配送、零售、使用和寿命终止。 | `eu-2021-2279-environmental-footprint` |
| `boundary_wwtp` | 场内废水处理 | 仅当废水处理在报告设施边界内运行时纳入；否则分别记录每项废水转移。 | `ec-jrc-2024-sa-bref-jrc135916` |
| `boundary_cpc` | 产品身份 | 参考产品排除水牛可食内脏及所有非牛物种的可食内脏。 | `un-cpc-3-0-structure-2025` |
| `boundary_composition` | 产品组成 | 申报参考产品所含的每个器官，并分别计量每个适用器官组分。 | `un-cpc-3-0-structure-2025`; `eu-2021-2279-environmental-footprint` |
| `boundary_state` | 市场状态 | 参考产品必须且只能申报鲜、冷藏或冷冻中的一种市场状态，并只启用与其匹配的组分行。 | `un-cpc-3-0-structure-2025`; `eu-2021-2279-environmental-footprint` |
| `boundary_completeness` | 全部前景交换 | 不得对已知交换使用类别截断；应原子化记录，或披露经核实不存在。 | `eu-2021-2279-environmental-footprint` |
| `boundary_recursive` | 同类别中间投入 | 若引入 CPC 21151 可食内脏作为中间投入，必须申报来源并防止同一生产递归重复计算。 | `eu-2021-2279-environmental-footprint` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `cattle_receiving` | 活牛接收与验收 | `required` | 每个工厂门生产批次 | 在进厂运输结束后启动前景数据采集 | 每 1 kg 工厂门净合格牛可食内脏 |
| `slaughter_offal_separation` | 屠宰、去内脏与可食内脏分离 | `required` | 每个验收合格的牛批次 | 分别产生器官特定的可食内脏中间流及共产品 | 每 1 kg 工厂门净合格牛可食内脏 |
| `offal_preparation` | 按器官分别修整、清洗与检验 | `required` | 每个可食内脏生产批次 | 分别制备和计量各鲜器官组分 | 每 1 kg 工厂门净合格牛可食内脏 |
| `temperature_conditioning` | 条件性冷却与冻结 | `conditional` | 冷藏或冷冻产品必须纳入；鲜产品绕过本过程 | 分别产生冷藏或冷冻器官组分，并记录制冷回路 | 每 1 kg 工厂门净合格牛可食内脏 |
| `packaging_storage_release` | 组成装配、包装、储存与放行 | `required` | 每个放行产品批次 | 按一个申报市场状态装配器官组成并放行参考产品 | 每 1 kg 工厂门净合格牛可食内脏 |
| `cleaning_thermal_utilities` | 清洗、消毒与场内热力公用工程 | `required` | 每个生产批次及计划卫生周期 | 记录卫生投入、清洗废水和直接燃烧排放 | 每 1 kg 工厂门净合格牛可食内脏 |
| `onsite_wastewater_treatment` | 场内牛内脏废水处理 | `conditional` | 仅当报告设施在前景边界内运行废水处理时 | 处理已分别识别的废水并记录处理输出 | 每 1 kg 工厂门净合格牛可食内脏 |

### 过程：活牛接收与验收（`cattle_receiving`）

#### 输入

##### 产品流

###### 输入产品流：Live cattle（`receiving_live_cattle`）

本卡将“Live cattle”作为“活牛接收与验收”过程的一项独立输入产品流交换记录；不得与其他物理或化学流合并。

- 选定流：Live cattle
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、库存、转移或放行记录，分别记录“Live cattle”的批次质量，并与对应过程记录对账。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门净合格牛可食内脏
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_receiving_records`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录仪器分辨率、校准状态、缺失记录及批次归属不确定性。
- 适用性：必需；每个适用生产批次均须记录“Live cattle”。
- 来源：`ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输入产品流：Electricity, grid supply（`receiving_electricity`）

本卡将“Electricity, grid supply”作为“活牛接收与验收”过程的一项独立输入产品流交换记录；不得与其他物理或化学流合并。

- 选定流：Electricity, grid supply
- 流属性/单位：Energy / kWh
- 数量规则：记录“Electricity, grid supply”对应阶段的分表读数；共享电量仅以有文件记录的设备活动、停留或占用驱动因素计算批次份额。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门净合格牛可食内脏
- 基准类型：参考流（`reference_flow`）
- 证据类型：从采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_receiving_records`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录输入记录不确定性、计算假设、因子来源及分配不确定性。
- 适用性：当场址发生“Electricity, grid supply”交换时必须记录。
- 来源：`ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输入产品流：Process water（`receiving_water`）

本卡将“Process water”作为“活牛接收与验收”过程的一项独立输入产品流交换记录；不得与其他物理或化学流合并。

- 选定流：Process water
- 流属性/单位：Volume / m3
- 数量规则：使用专用流量计分别记录“Process water”的批次体积，并保留仪表边界、时间和去向记录。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门净合格牛可食内脏
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_receiving_records`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录仪器分辨率、校准状态、缺失记录及批次归属不确定性。
- 适用性：当场址发生“Process water”交换时必须记录。
- 来源：`ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 输出产品流：Accepted live cattle（`receiving_accepted_cattle`）

本卡将“Accepted live cattle”作为“活牛接收与验收”过程的一项独立输出产品流交换记录；不得与其他物理或化学流合并。

- 选定流：Accepted live cattle
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、库存、转移或放行记录，分别记录“Accepted live cattle”的批次质量，并与对应过程记录对账。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门净合格牛可食内脏
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_receiving_records`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录仪器分辨率、校准状态、缺失记录及批次归属不确定性。
- 适用性：必需；每个适用生产批次均须记录“Accepted live cattle”。
- 来源：`ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

##### 废物流

###### 输出废物流：Cattle manure from lairage（`receiving_cattle_manure`）

本卡将“Cattle manure from lairage”作为“活牛接收与验收”过程的一项独立输出废物流交换记录；不得与其他物理或化学流合并。

- 选定流：Cattle manure from lairage
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、容器皮重或专用台账，分别记录“Cattle manure from lairage”的实际质量及去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门净合格牛可食内脏
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_receiving_records`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录仪器分辨率、校准状态、缺失记录及批次归属不确定性。
- 适用性：条件适用；仅在场址实际发生“Cattle manure from lairage”交换并有相应记录时纳入。
- 来源：`ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输出废物流：Cattle lairage wash wastewater（`receiving_lairage_wastewater`）

本卡将“Cattle lairage wash wastewater”作为“活牛接收与验收”过程的一项独立输出废物流交换记录；不得与其他物理或化学流合并。

- 选定流：Cattle lairage wash wastewater
- 流属性/单位：Volume / m3
- 数量规则：使用专用流量计，或依据同期匹配的供水、滞留、回收及转移记录计算“Cattle lairage wash wastewater”体积，并保留水量平衡。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门净合格牛可食内脏
- 基准类型：参考流（`reference_flow`）
- 证据类型：从采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_receiving_records`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录输入记录不确定性、计算假设、因子来源及分配不确定性。
- 适用性：条件适用；仅在场址实际发生“Cattle lairage wash wastewater”交换并有相应记录时纳入。
- 来源：`ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

##### 基本流

### 过程：屠宰、去内脏与可食内脏分离（`slaughter_offal_separation`）

#### 输入

##### 产品流

###### 输入产品流：Accepted live cattle（`separation_accepted_cattle_input`）

本卡将“Accepted live cattle”作为“屠宰、去内脏与可食内脏分离”过程的一项独立输入产品流交换记录；不得与其他物理或化学流合并。

- 选定流：Accepted live cattle
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、库存、转移或放行记录，分别记录“Accepted live cattle”的批次质量，并与对应过程记录对账。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门净合格牛可食内脏
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_separation_inputs`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录仪器分辨率、校准状态、缺失记录及批次归属不确定性。
- 适用性：必需；每个适用生产批次均须记录“Accepted live cattle”。
- 来源：`ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输入产品流：Electricity, grid supply（`separation_electricity`）

本卡将“Electricity, grid supply”作为“屠宰、去内脏与可食内脏分离”过程的一项独立输入产品流交换记录；不得与其他物理或化学流合并。

- 选定流：Electricity, grid supply
- 流属性/单位：Energy / kWh
- 数量规则：记录“Electricity, grid supply”对应阶段的分表读数；共享电量仅以有文件记录的设备活动、停留或占用驱动因素计算批次份额。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门净合格牛可食内脏
- 基准类型：参考流（`reference_flow`）
- 证据类型：从采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_separation_inputs`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录输入记录不确定性、计算假设、因子来源及分配不确定性。
- 适用性：当场址发生“Electricity, grid supply”交换时必须记录。
- 来源：`ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输入产品流：Process water（`separation_water`）

本卡将“Process water”作为“屠宰、去内脏与可食内脏分离”过程的一项独立输入产品流交换记录；不得与其他物理或化学流合并。

- 选定流：Process water
- 流属性/单位：Volume / m3
- 数量规则：使用专用流量计分别记录“Process water”的批次体积，并保留仪表边界、时间和去向记录。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门净合格牛可食内脏
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_separation_inputs`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录仪器分辨率、校准状态、缺失记录及批次归属不确定性。
- 适用性：当场址发生“Process water”交换时必须记录。
- 来源：`ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 输出产品流：Dressed cattle carcass（`separation_carcass`）

本卡将“Dressed cattle carcass”作为“屠宰、去内脏与可食内脏分离”过程的一项独立输出产品流交换记录；不得与其他物理或化学流合并。

- 选定流：Dressed cattle carcass
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、库存、转移或放行记录，分别记录“Dressed cattle carcass”的批次质量，并与对应过程记录对账。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格牛可食内脏
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_separation_outputs`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录仪器分辨率、校准状态、缺失记录及批次归属不确定性。
- 适用性：必需；每个适用生产批次均须记录“Dressed cattle carcass”。
- 来源：`ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输出产品流：Cattle hide for recovery（`separation_hide`）

本卡将“Cattle hide for recovery”作为“屠宰、去内脏与可食内脏分离”过程的一项独立输出产品流交换记录；不得与其他物理或化学流合并。

- 选定流：Cattle hide for recovery
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、库存、转移或放行记录，分别记录“Cattle hide for recovery”的批次质量，并与对应过程记录对账。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门净合格牛可食内脏
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_separation_outputs`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录仪器分辨率、校准状态、缺失记录及批次归属不确定性。
- 适用性：条件适用；仅在场址实际发生“Cattle hide for recovery”交换并有相应记录时纳入。
- 来源：`ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输出产品流：Recovered cattle blood（`separation_recovered_blood`）

本卡将“Recovered cattle blood”作为“屠宰、去内脏与可食内脏分离”过程的一项独立输出产品流交换记录；不得与其他物理或化学流合并。

- 选定流：Recovered cattle blood
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、库存、转移或放行记录，分别记录“Recovered cattle blood”的批次质量，并与对应过程记录对账。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门净合格牛可食内脏
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_separation_outputs`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录仪器分辨率、校准状态、缺失记录及批次归属不确定性。
- 适用性：条件适用；仅在场址实际发生“Recovered cattle blood”交换并有相应记录时纳入。
- 来源：`ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输出产品流：Recovered cattle slaughter fat（`separation_recovered_fat`）

本卡将“Recovered cattle slaughter fat”作为“屠宰、去内脏与可食内脏分离”过程的一项独立输出产品流交换记录；不得与其他物理或化学流合并。

- 选定流：Recovered cattle slaughter fat
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、库存、转移或放行记录，分别记录“Recovered cattle slaughter fat”的批次质量，并与对应过程记录对账。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门净合格牛可食内脏
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_separation_outputs`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录仪器分辨率、校准状态、缺失记录及批次归属不确定性。
- 适用性：条件适用；仅在场址实际发生“Recovered cattle slaughter fat”交换并有相应记录时纳入。
- 来源：`ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输出产品流：Untrimmed cattle liver（`separation_untrimmed_liver`）

本卡将“Untrimmed cattle liver”作为“屠宰、去内脏与可食内脏分离”过程的一项独立输出产品流交换记录；不得与其他物理或化学流合并。

- 选定流：Untrimmed cattle liver
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤分别记录“Untrimmed cattle liver”的批次净质量，并与相邻过程转移记录、器官身份及申报市场状态对账。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格牛可食内脏
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_separation_outputs`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录仪器分辨率、校准状态、缺失记录及批次归属不确定性。
- 适用性：条件适用；仅在场址实际发生“Untrimmed cattle liver”交换并有相应记录时纳入。
- 来源：`ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输出产品流：Untrimmed cattle heart（`separation_untrimmed_heart`）

本卡将“Untrimmed cattle heart”作为“屠宰、去内脏与可食内脏分离”过程的一项独立输出产品流交换记录；不得与其他物理或化学流合并。

- 选定流：Untrimmed cattle heart
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤分别记录“Untrimmed cattle heart”的批次净质量，并与相邻过程转移记录、器官身份及申报市场状态对账。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格牛可食内脏
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_separation_outputs`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录仪器分辨率、校准状态、缺失记录及批次归属不确定性。
- 适用性：条件适用；仅在场址实际发生“Untrimmed cattle heart”交换并有相应记录时纳入。
- 来源：`ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输出产品流：Untrimmed cattle kidney（`separation_untrimmed_kidney`）

本卡将“Untrimmed cattle kidney”作为“屠宰、去内脏与可食内脏分离”过程的一项独立输出产品流交换记录；不得与其他物理或化学流合并。

- 选定流：Untrimmed cattle kidney
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤分别记录“Untrimmed cattle kidney”的批次净质量，并与相邻过程转移记录、器官身份及申报市场状态对账。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格牛可食内脏
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_separation_outputs`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录仪器分辨率、校准状态、缺失记录及批次归属不确定性。
- 适用性：条件适用；仅在场址实际发生“Untrimmed cattle kidney”交换并有相应记录时纳入。
- 来源：`ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输出产品流：Untrimmed cattle tongue（`separation_untrimmed_tongue`）

本卡将“Untrimmed cattle tongue”作为“屠宰、去内脏与可食内脏分离”过程的一项独立输出产品流交换记录；不得与其他物理或化学流合并。

- 选定流：Untrimmed cattle tongue
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤分别记录“Untrimmed cattle tongue”的批次净质量，并与相邻过程转移记录、器官身份及申报市场状态对账。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格牛可食内脏
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_separation_outputs`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录仪器分辨率、校准状态、缺失记录及批次归属不确定性。
- 适用性：条件适用；仅在场址实际发生“Untrimmed cattle tongue”交换并有相应记录时纳入。
- 来源：`ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输出产品流：Untrimmed cattle stomach（`separation_untrimmed_stomach`）

本卡将“Untrimmed cattle stomach”作为“屠宰、去内脏与可食内脏分离”过程的一项独立输出产品流交换记录；不得与其他物理或化学流合并。

- 选定流：Untrimmed cattle stomach
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤分别记录“Untrimmed cattle stomach”的批次净质量，并与相邻过程转移记录、器官身份及申报市场状态对账。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格牛可食内脏
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_separation_outputs`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录仪器分辨率、校准状态、缺失记录及批次归属不确定性。
- 适用性：条件适用；仅在场址实际发生“Untrimmed cattle stomach”交换并有相应记录时纳入。
- 来源：`ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输出产品流：Untrimmed cattle small intestine（`separation_untrimmed_small_intestine`）

本卡将“Untrimmed cattle small intestine”作为“屠宰、去内脏与可食内脏分离”过程的一项独立输出产品流交换记录；不得与其他物理或化学流合并。

- 选定流：Untrimmed cattle small intestine
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤分别记录“Untrimmed cattle small intestine”的批次净质量，并与相邻过程转移记录、器官身份及申报市场状态对账。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格牛可食内脏
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_separation_outputs`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录仪器分辨率、校准状态、缺失记录及批次归属不确定性。
- 适用性：条件适用；仅在场址实际发生“Untrimmed cattle small intestine”交换并有相应记录时纳入。
- 来源：`ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输出产品流：Untrimmed cattle large intestine（`separation_untrimmed_large_intestine`）

本卡将“Untrimmed cattle large intestine”作为“屠宰、去内脏与可食内脏分离”过程的一项独立输出产品流交换记录；不得与其他物理或化学流合并。

- 选定流：Untrimmed cattle large intestine
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤分别记录“Untrimmed cattle large intestine”的批次净质量，并与相邻过程转移记录、器官身份及申报市场状态对账。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格牛可食内脏
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_separation_outputs`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录仪器分辨率、校准状态、缺失记录及批次归属不确定性。
- 适用性：条件适用；仅在场址实际发生“Untrimmed cattle large intestine”交换并有相应记录时纳入。
- 来源：`ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

##### 废物流

###### 输出废物流：Waste cattle blood（`separation_waste_blood`）

本卡将“Waste cattle blood”作为“屠宰、去内脏与可食内脏分离”过程的一项独立输出废物流交换记录；不得与其他物理或化学流合并。

- 选定流：Waste cattle blood
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、容器皮重或专用台账，分别记录“Waste cattle blood”的实际质量及去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门净合格牛可食内脏
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_separation_outputs`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录仪器分辨率、校准状态、缺失记录及批次归属不确定性。
- 适用性：条件适用；仅在场址实际发生“Waste cattle blood”交换并有相应记录时纳入。
- 来源：`ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输出废物流：Cattle stomach contents（`separation_stomach_contents`）

本卡将“Cattle stomach contents”作为“屠宰、去内脏与可食内脏分离”过程的一项独立输出废物流交换记录；不得与其他物理或化学流合并。

- 选定流：Cattle stomach contents
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤分别记录“Cattle stomach contents”的批次净质量，并与相邻过程转移记录、器官身份及申报市场状态对账。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门净合格牛可食内脏
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_separation_outputs`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录仪器分辨率、校准状态、缺失记录及批次归属不确定性。
- 适用性：当场址发生“Cattle stomach contents”交换时必须记录。
- 来源：`ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输出废物流：Cattle small-intestinal contents（`separation_small_intestinal_contents`）

本卡将“Cattle small-intestinal contents”作为“屠宰、去内脏与可食内脏分离”过程的一项独立输出废物流交换记录；不得与其他物理或化学流合并。

- 选定流：Cattle small-intestinal contents
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、容器皮重或专用台账，分别记录“Cattle small-intestinal contents”的实际质量及去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门净合格牛可食内脏
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_separation_outputs`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录仪器分辨率、校准状态、缺失记录及批次归属不确定性。
- 适用性：当场址发生“Cattle small-intestinal contents”交换时必须记录。
- 来源：`ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输出废物流：Cattle large-intestinal contents（`separation_large_intestinal_contents`）

本卡将“Cattle large-intestinal contents”作为“屠宰、去内脏与可食内脏分离”过程的一项独立输出废物流交换记录；不得与其他物理或化学流合并。

- 选定流：Cattle large-intestinal contents
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、容器皮重或专用台账，分别记录“Cattle large-intestinal contents”的实际质量及去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门净合格牛可食内脏
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_separation_outputs`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录仪器分辨率、校准状态、缺失记录及批次归属不确定性。
- 适用性：当场址发生“Cattle large-intestinal contents”交换时必须记录。
- 来源：`ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输出废物流：Cattle bile waste（`separation_bile_waste`）

本卡将“Cattle bile waste”作为“屠宰、去内脏与可食内脏分离”过程的一项独立输出废物流交换记录；不得与其他物理或化学流合并。

- 选定流：Cattle bile waste
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、容器皮重或专用台账，分别记录“Cattle bile waste”的实际质量及去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门净合格牛可食内脏
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_separation_outputs`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录仪器分辨率、校准状态、缺失记录及批次归属不确定性。
- 适用性：条件适用；仅在场址实际发生“Cattle bile waste”交换并有相应记录时纳入。
- 来源：`ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输出废物流：Cattle gallbladder waste（`separation_gallbladder_waste`）

本卡将“Cattle gallbladder waste”作为“屠宰、去内脏与可食内脏分离”过程的一项独立输出废物流交换记录；不得与其他物理或化学流合并。

- 选定流：Cattle gallbladder waste
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、容器皮重或专用台账，分别记录“Cattle gallbladder waste”的实际质量及去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门净合格牛可食内脏
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_separation_outputs`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录仪器分辨率、校准状态、缺失记录及批次归属不确定性。
- 适用性：条件适用；仅在场址实际发生“Cattle gallbladder waste”交换并有相应记录时纳入。
- 来源：`ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输出废物流：Cattle urinary bladder waste（`separation_urinary_bladder_waste`）

本卡将“Cattle urinary bladder waste”作为“屠宰、去内脏与可食内脏分离”过程的一项独立输出废物流交换记录；不得与其他物理或化学流合并。

- 选定流：Cattle urinary bladder waste
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、容器皮重或专用台账，分别记录“Cattle urinary bladder waste”的实际质量及去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门净合格牛可食内脏
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_separation_outputs`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录仪器分辨率、校准状态、缺失记录及批次归属不确定性。
- 适用性：条件适用；仅在场址实际发生“Cattle urinary bladder waste”交换并有相应记录时纳入。
- 来源：`ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输出废物流：High-organic-load cattle slaughter wastewater（`separation_high_load_wastewater`）

本卡将“High-organic-load cattle slaughter wastewater”作为“屠宰、去内脏与可食内脏分离”过程的一项独立输出废物流交换记录；不得与其他物理或化学流合并。

- 选定流：High-organic-load cattle slaughter wastewater
- 流属性/单位：Volume / m3
- 数量规则：使用专用流量计，或依据同期匹配的供水、滞留、回收及转移记录计算“High-organic-load cattle slaughter wastewater”体积，并保留水量平衡。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门净合格牛可食内脏
- 基准类型：参考流（`reference_flow`）
- 证据类型：从采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_separation_outputs`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录输入记录不确定性、计算假设、因子来源及分配不确定性。
- 适用性：当场址发生“High-organic-load cattle slaughter wastewater”交换时必须记录。
- 来源：`ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

##### 基本流

###### 输出基本流：Ammonia to air（`separation_ammonia_to_air`）

本卡将“Ammonia to air”作为“屠宰、去内脏与可食内脏分离”过程的一项独立输出基本流交换记录；不得与其他物理或化学流合并。本卡只对应一个具名物质或监测参数及一个环境介质。

- 选定流：Ammonia to air
- 流属性/单位：Mass / kg
- 数量规则：使用同期实测排气流量与物质浓度，或对实测活动量应用经核实的设备特定因子，逐物质计算“Ammonia to air”质量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门净合格牛可食内脏
- 基准类型：参考流（`reference_flow`）
- 证据类型：从采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_slaughter_air`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录输入记录不确定性、计算假设、因子来源及分配不确定性。
- 适用性：条件适用；仅在场址实际发生“Ammonia to air”交换并有相应记录时纳入。
- 来源：`ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输出基本流：Hydrogen sulfide to air（`separation_hydrogen_sulfide_to_air`）

本卡将“Hydrogen sulfide to air”作为“屠宰、去内脏与可食内脏分离”过程的一项独立输出基本流交换记录；不得与其他物理或化学流合并。本卡只对应一个具名物质或监测参数及一个环境介质。

- 选定流：Hydrogen sulfide to air
- 流属性/单位：Mass / kg
- 数量规则：使用同期实测排气流量与物质浓度，或对实测活动量应用经核实的设备特定因子，逐物质计算“Hydrogen sulfide to air”质量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门净合格牛可食内脏
- 基准类型：参考流（`reference_flow`）
- 证据类型：从采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_slaughter_air`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录输入记录不确定性、计算假设、因子来源及分配不确定性。
- 适用性：条件适用；仅在场址实际发生“Hydrogen sulfide to air”交换并有相应记录时纳入。
- 来源：`ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

### 过程：按器官分别修整、清洗与检验（`offal_preparation`）

#### 输入

##### 产品流

###### 输入产品流：Untrimmed cattle liver（`preparation_untrimmed_liver_input`）

本卡将“Untrimmed cattle liver”作为“按器官分别修整、清洗与检验”过程的一项独立输入产品流交换记录；不得与其他物理或化学流合并。

- 选定流：Untrimmed cattle liver
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤分别记录“Untrimmed cattle liver”的批次净质量，并与相邻过程转移记录、器官身份及申报市场状态对账。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格牛可食内脏
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_preparation_inputs`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录仪器分辨率、校准状态、缺失记录及批次归属不确定性。
- 适用性：条件适用；仅在场址实际发生“Untrimmed cattle liver”交换并有相应记录时纳入。
- 来源：`ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输入产品流：Untrimmed cattle heart（`preparation_untrimmed_heart_input`）

本卡将“Untrimmed cattle heart”作为“按器官分别修整、清洗与检验”过程的一项独立输入产品流交换记录；不得与其他物理或化学流合并。

- 选定流：Untrimmed cattle heart
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤分别记录“Untrimmed cattle heart”的批次净质量，并与相邻过程转移记录、器官身份及申报市场状态对账。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格牛可食内脏
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_preparation_inputs`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录仪器分辨率、校准状态、缺失记录及批次归属不确定性。
- 适用性：条件适用；仅在场址实际发生“Untrimmed cattle heart”交换并有相应记录时纳入。
- 来源：`ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输入产品流：Untrimmed cattle kidney（`preparation_untrimmed_kidney_input`）

本卡将“Untrimmed cattle kidney”作为“按器官分别修整、清洗与检验”过程的一项独立输入产品流交换记录；不得与其他物理或化学流合并。

- 选定流：Untrimmed cattle kidney
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤分别记录“Untrimmed cattle kidney”的批次净质量，并与相邻过程转移记录、器官身份及申报市场状态对账。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格牛可食内脏
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_preparation_inputs`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录仪器分辨率、校准状态、缺失记录及批次归属不确定性。
- 适用性：条件适用；仅在场址实际发生“Untrimmed cattle kidney”交换并有相应记录时纳入。
- 来源：`ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输入产品流：Untrimmed cattle tongue（`preparation_untrimmed_tongue_input`）

本卡将“Untrimmed cattle tongue”作为“按器官分别修整、清洗与检验”过程的一项独立输入产品流交换记录；不得与其他物理或化学流合并。

- 选定流：Untrimmed cattle tongue
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤分别记录“Untrimmed cattle tongue”的批次净质量，并与相邻过程转移记录、器官身份及申报市场状态对账。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格牛可食内脏
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_preparation_inputs`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录仪器分辨率、校准状态、缺失记录及批次归属不确定性。
- 适用性：条件适用；仅在场址实际发生“Untrimmed cattle tongue”交换并有相应记录时纳入。
- 来源：`ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输入产品流：Untrimmed cattle stomach（`preparation_untrimmed_stomach_input`）

本卡将“Untrimmed cattle stomach”作为“按器官分别修整、清洗与检验”过程的一项独立输入产品流交换记录；不得与其他物理或化学流合并。

- 选定流：Untrimmed cattle stomach
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤分别记录“Untrimmed cattle stomach”的批次净质量，并与相邻过程转移记录、器官身份及申报市场状态对账。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格牛可食内脏
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_preparation_inputs`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录仪器分辨率、校准状态、缺失记录及批次归属不确定性。
- 适用性：条件适用；仅在场址实际发生“Untrimmed cattle stomach”交换并有相应记录时纳入。
- 来源：`ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输入产品流：Untrimmed cattle small intestine（`preparation_untrimmed_small_intestine_input`）

本卡将“Untrimmed cattle small intestine”作为“按器官分别修整、清洗与检验”过程的一项独立输入产品流交换记录；不得与其他物理或化学流合并。

- 选定流：Untrimmed cattle small intestine
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤分别记录“Untrimmed cattle small intestine”的批次净质量，并与相邻过程转移记录、器官身份及申报市场状态对账。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格牛可食内脏
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_preparation_inputs`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录仪器分辨率、校准状态、缺失记录及批次归属不确定性。
- 适用性：条件适用；仅在场址实际发生“Untrimmed cattle small intestine”交换并有相应记录时纳入。
- 来源：`ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输入产品流：Untrimmed cattle large intestine（`preparation_untrimmed_large_intestine_input`）

本卡将“Untrimmed cattle large intestine”作为“按器官分别修整、清洗与检验”过程的一项独立输入产品流交换记录；不得与其他物理或化学流合并。

- 选定流：Untrimmed cattle large intestine
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤分别记录“Untrimmed cattle large intestine”的批次净质量，并与相邻过程转移记录、器官身份及申报市场状态对账。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格牛可食内脏
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_preparation_inputs`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录仪器分辨率、校准状态、缺失记录及批次归属不确定性。
- 适用性：条件适用；仅在场址实际发生“Untrimmed cattle large intestine”交换并有相应记录时纳入。
- 来源：`ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输入产品流：Electricity, grid supply（`preparation_electricity`）

本卡将“Electricity, grid supply”作为“按器官分别修整、清洗与检验”过程的一项独立输入产品流交换记录；不得与其他物理或化学流合并。

- 选定流：Electricity, grid supply
- 流属性/单位：Energy / kWh
- 数量规则：记录“Electricity, grid supply”对应阶段的分表读数；共享电量仅以有文件记录的设备活动、停留或占用驱动因素计算批次份额。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门净合格牛可食内脏
- 基准类型：参考流（`reference_flow`）
- 证据类型：从采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_preparation_inputs`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录输入记录不确定性、计算假设、因子来源及分配不确定性。
- 适用性：当场址发生“Electricity, grid supply”交换时必须记录。
- 来源：`ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输入产品流：Process water（`preparation_water`）

本卡将“Process water”作为“按器官分别修整、清洗与检验”过程的一项独立输入产品流交换记录；不得与其他物理或化学流合并。

- 选定流：Process water
- 流属性/单位：Volume / m3
- 数量规则：使用专用流量计分别记录“Process water”的批次体积，并保留仪表边界、时间和去向记录。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门净合格牛可食内脏
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_preparation_inputs`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录仪器分辨率、校准状态、缺失记录及批次归属不确定性。
- 适用性：当场址发生“Process water”交换时必须记录。
- 来源：`ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 输出产品流：Cattle liver, fresh（`preparation_fresh_liver`）

本卡将“Cattle liver, fresh”作为“按器官分别修整、清洗与检验”过程的一项独立输出产品流交换记录；不得与其他物理或化学流合并。本卡仅对应鲜状态。

- 选定流：Cattle liver, fresh
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤分别记录“Cattle liver, fresh”的批次净质量，并与相邻过程转移记录、器官身份及申报市场状态对账。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格牛可食内脏
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_organ_components`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录仪器分辨率、校准状态、缺失记录及批次归属不确定性。
- 适用性：条件适用；仅在场址实际发生“Cattle liver, fresh”交换并有相应记录时纳入。
- 来源：`un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输出产品流：Cattle heart, fresh（`preparation_fresh_heart`）

本卡将“Cattle heart, fresh”作为“按器官分别修整、清洗与检验”过程的一项独立输出产品流交换记录；不得与其他物理或化学流合并。本卡仅对应鲜状态。

- 选定流：Cattle heart, fresh
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤分别记录“Cattle heart, fresh”的批次净质量，并与相邻过程转移记录、器官身份及申报市场状态对账。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格牛可食内脏
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_organ_components`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录仪器分辨率、校准状态、缺失记录及批次归属不确定性。
- 适用性：条件适用；仅在场址实际发生“Cattle heart, fresh”交换并有相应记录时纳入。
- 来源：`un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输出产品流：Cattle kidney, fresh（`preparation_fresh_kidney`）

本卡将“Cattle kidney, fresh”作为“按器官分别修整、清洗与检验”过程的一项独立输出产品流交换记录；不得与其他物理或化学流合并。本卡仅对应鲜状态。

- 选定流：Cattle kidney, fresh
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤分别记录“Cattle kidney, fresh”的批次净质量，并与相邻过程转移记录、器官身份及申报市场状态对账。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格牛可食内脏
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_organ_components`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录仪器分辨率、校准状态、缺失记录及批次归属不确定性。
- 适用性：条件适用；仅在场址实际发生“Cattle kidney, fresh”交换并有相应记录时纳入。
- 来源：`un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输出产品流：Cattle tongue, fresh（`preparation_fresh_tongue`）

本卡将“Cattle tongue, fresh”作为“按器官分别修整、清洗与检验”过程的一项独立输出产品流交换记录；不得与其他物理或化学流合并。本卡仅对应鲜状态。

- 选定流：Cattle tongue, fresh
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤分别记录“Cattle tongue, fresh”的批次净质量，并与相邻过程转移记录、器官身份及申报市场状态对账。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格牛可食内脏
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_organ_components`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录仪器分辨率、校准状态、缺失记录及批次归属不确定性。
- 适用性：条件适用；仅在场址实际发生“Cattle tongue, fresh”交换并有相应记录时纳入。
- 来源：`un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输出产品流：Cattle stomach, fresh（`preparation_fresh_stomach`）

本卡将“Cattle stomach, fresh”作为“按器官分别修整、清洗与检验”过程的一项独立输出产品流交换记录；不得与其他物理或化学流合并。本卡仅对应鲜状态。

- 选定流：Cattle stomach, fresh
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤分别记录“Cattle stomach, fresh”的批次净质量，并与相邻过程转移记录、器官身份及申报市场状态对账。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格牛可食内脏
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_organ_components`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录仪器分辨率、校准状态、缺失记录及批次归属不确定性。
- 适用性：条件适用；仅在场址实际发生“Cattle stomach, fresh”交换并有相应记录时纳入。
- 来源：`un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输出产品流：Cattle small intestine, fresh（`preparation_fresh_small_intestine`）

本卡将“Cattle small intestine, fresh”作为“按器官分别修整、清洗与检验”过程的一项独立输出产品流交换记录；不得与其他物理或化学流合并。本卡仅对应鲜状态。

- 选定流：Cattle small intestine, fresh
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤分别记录“Cattle small intestine, fresh”的批次净质量，并与相邻过程转移记录、器官身份及申报市场状态对账。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格牛可食内脏
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_organ_components`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录仪器分辨率、校准状态、缺失记录及批次归属不确定性。
- 适用性：条件适用；仅在场址实际发生“Cattle small intestine, fresh”交换并有相应记录时纳入。
- 来源：`un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输出产品流：Cattle large intestine, fresh（`preparation_fresh_large_intestine`）

本卡将“Cattle large intestine, fresh”作为“按器官分别修整、清洗与检验”过程的一项独立输出产品流交换记录；不得与其他物理或化学流合并。本卡仅对应鲜状态。

- 选定流：Cattle large intestine, fresh
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤分别记录“Cattle large intestine, fresh”的批次净质量，并与相邻过程转移记录、器官身份及申报市场状态对账。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格牛可食内脏
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_organ_components`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录仪器分辨率、校准状态、缺失记录及批次归属不确定性。
- 适用性：条件适用；仅在场址实际发生“Cattle large intestine, fresh”交换并有相应记录时纳入。
- 来源：`un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

##### 废物流

###### 输出废物流：Cattle liver trimming waste（`preparation_liver_trim_waste`）

本卡将“Cattle liver trimming waste”作为“按器官分别修整、清洗与检验”过程的一项独立输出废物流交换记录；不得与其他物理或化学流合并。

- 选定流：Cattle liver trimming waste
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤分别记录“Cattle liver trimming waste”的批次净质量，并与相邻过程转移记录、器官身份及申报市场状态对账。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门净合格牛可食内脏
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_organ_components`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录仪器分辨率、校准状态、缺失记录及批次归属不确定性。
- 适用性：条件适用；仅在场址实际发生“Cattle liver trimming waste”交换并有相应记录时纳入。
- 来源：`ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输出废物流：Cattle heart trimming waste（`preparation_heart_trim_waste`）

本卡将“Cattle heart trimming waste”作为“按器官分别修整、清洗与检验”过程的一项独立输出废物流交换记录；不得与其他物理或化学流合并。

- 选定流：Cattle heart trimming waste
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤分别记录“Cattle heart trimming waste”的批次净质量，并与相邻过程转移记录、器官身份及申报市场状态对账。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门净合格牛可食内脏
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_organ_components`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录仪器分辨率、校准状态、缺失记录及批次归属不确定性。
- 适用性：条件适用；仅在场址实际发生“Cattle heart trimming waste”交换并有相应记录时纳入。
- 来源：`ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输出废物流：Cattle kidney trimming waste（`preparation_kidney_trim_waste`）

本卡将“Cattle kidney trimming waste”作为“按器官分别修整、清洗与检验”过程的一项独立输出废物流交换记录；不得与其他物理或化学流合并。

- 选定流：Cattle kidney trimming waste
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤分别记录“Cattle kidney trimming waste”的批次净质量，并与相邻过程转移记录、器官身份及申报市场状态对账。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门净合格牛可食内脏
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_organ_components`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录仪器分辨率、校准状态、缺失记录及批次归属不确定性。
- 适用性：条件适用；仅在场址实际发生“Cattle kidney trimming waste”交换并有相应记录时纳入。
- 来源：`ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输出废物流：Cattle tongue trimming waste（`preparation_tongue_trim_waste`）

本卡将“Cattle tongue trimming waste”作为“按器官分别修整、清洗与检验”过程的一项独立输出废物流交换记录；不得与其他物理或化学流合并。

- 选定流：Cattle tongue trimming waste
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤分别记录“Cattle tongue trimming waste”的批次净质量，并与相邻过程转移记录、器官身份及申报市场状态对账。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门净合格牛可食内脏
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_organ_components`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录仪器分辨率、校准状态、缺失记录及批次归属不确定性。
- 适用性：条件适用；仅在场址实际发生“Cattle tongue trimming waste”交换并有相应记录时纳入。
- 来源：`ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输出废物流：Cattle stomach trimming waste（`preparation_stomach_trim_waste`）

本卡将“Cattle stomach trimming waste”作为“按器官分别修整、清洗与检验”过程的一项独立输出废物流交换记录；不得与其他物理或化学流合并。

- 选定流：Cattle stomach trimming waste
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤分别记录“Cattle stomach trimming waste”的批次净质量，并与相邻过程转移记录、器官身份及申报市场状态对账。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门净合格牛可食内脏
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_organ_components`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录仪器分辨率、校准状态、缺失记录及批次归属不确定性。
- 适用性：条件适用；仅在场址实际发生“Cattle stomach trimming waste”交换并有相应记录时纳入。
- 来源：`ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输出废物流：Cattle small intestine trimming waste（`preparation_small_intestine_trim_waste`）

本卡将“Cattle small intestine trimming waste”作为“按器官分别修整、清洗与检验”过程的一项独立输出废物流交换记录；不得与其他物理或化学流合并。

- 选定流：Cattle small intestine trimming waste
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤分别记录“Cattle small intestine trimming waste”的批次净质量，并与相邻过程转移记录、器官身份及申报市场状态对账。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门净合格牛可食内脏
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_organ_components`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录仪器分辨率、校准状态、缺失记录及批次归属不确定性。
- 适用性：条件适用；仅在场址实际发生“Cattle small intestine trimming waste”交换并有相应记录时纳入。
- 来源：`ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输出废物流：Cattle large intestine trimming waste（`preparation_large_intestine_trim_waste`）

本卡将“Cattle large intestine trimming waste”作为“按器官分别修整、清洗与检验”过程的一项独立输出废物流交换记录；不得与其他物理或化学流合并。

- 选定流：Cattle large intestine trimming waste
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤分别记录“Cattle large intestine trimming waste”的批次净质量，并与相邻过程转移记录、器官身份及申报市场状态对账。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门净合格牛可食内脏
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_organ_components`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录仪器分辨率、校准状态、缺失记录及批次归属不确定性。
- 适用性：条件适用；仅在场址实际发生“Cattle large intestine trimming waste”交换并有相应记录时纳入。
- 来源：`ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输出废物流：High-organic-load cattle offal washing wastewater（`preparation_high_load_wastewater`）

本卡将“High-organic-load cattle offal washing wastewater”作为“按器官分别修整、清洗与检验”过程的一项独立输出废物流交换记录；不得与其他物理或化学流合并。

- 选定流：High-organic-load cattle offal washing wastewater
- 流属性/单位：Volume / m3
- 数量规则：使用专用流量计，或依据同期匹配的供水、滞留、回收及转移记录计算“High-organic-load cattle offal washing wastewater”体积，并保留水量平衡。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门净合格牛可食内脏
- 基准类型：参考流（`reference_flow`）
- 证据类型：从采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_organ_components`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录输入记录不确定性、计算假设、因子来源及分配不确定性。
- 适用性：当场址发生“High-organic-load cattle offal washing wastewater”交换时必须记录。
- 来源：`ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

##### 基本流

### 过程：条件性冷却与冻结（`temperature_conditioning`）

#### 输入

##### 产品流

###### 输入产品流：Cattle liver, fresh（`conditioning_fresh_liver_input`）

本卡将“Cattle liver, fresh”作为“条件性冷却与冻结”过程的一项独立输入产品流交换记录；不得与其他物理或化学流合并。本卡仅对应鲜状态。

- 选定流：Cattle liver, fresh
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤分别记录“Cattle liver, fresh”的批次净质量，并与相邻过程转移记录、器官身份及申报市场状态对账。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格牛可食内脏
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_conditioning_records`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录仪器分辨率、校准状态、缺失记录及批次归属不确定性。
- 适用性：条件适用；仅在场址实际发生“Cattle liver, fresh”交换并有相应记录时纳入。
- 来源：`un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输入产品流：Cattle heart, fresh（`conditioning_fresh_heart_input`）

本卡将“Cattle heart, fresh”作为“条件性冷却与冻结”过程的一项独立输入产品流交换记录；不得与其他物理或化学流合并。本卡仅对应鲜状态。

- 选定流：Cattle heart, fresh
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤分别记录“Cattle heart, fresh”的批次净质量，并与相邻过程转移记录、器官身份及申报市场状态对账。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格牛可食内脏
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_conditioning_records`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录仪器分辨率、校准状态、缺失记录及批次归属不确定性。
- 适用性：条件适用；仅在场址实际发生“Cattle heart, fresh”交换并有相应记录时纳入。
- 来源：`un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输入产品流：Cattle kidney, fresh（`conditioning_fresh_kidney_input`）

本卡将“Cattle kidney, fresh”作为“条件性冷却与冻结”过程的一项独立输入产品流交换记录；不得与其他物理或化学流合并。本卡仅对应鲜状态。

- 选定流：Cattle kidney, fresh
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤分别记录“Cattle kidney, fresh”的批次净质量，并与相邻过程转移记录、器官身份及申报市场状态对账。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格牛可食内脏
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_conditioning_records`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录仪器分辨率、校准状态、缺失记录及批次归属不确定性。
- 适用性：条件适用；仅在场址实际发生“Cattle kidney, fresh”交换并有相应记录时纳入。
- 来源：`un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输入产品流：Cattle tongue, fresh（`conditioning_fresh_tongue_input`）

本卡将“Cattle tongue, fresh”作为“条件性冷却与冻结”过程的一项独立输入产品流交换记录；不得与其他物理或化学流合并。本卡仅对应鲜状态。

- 选定流：Cattle tongue, fresh
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤分别记录“Cattle tongue, fresh”的批次净质量，并与相邻过程转移记录、器官身份及申报市场状态对账。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格牛可食内脏
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_conditioning_records`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录仪器分辨率、校准状态、缺失记录及批次归属不确定性。
- 适用性：条件适用；仅在场址实际发生“Cattle tongue, fresh”交换并有相应记录时纳入。
- 来源：`un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输入产品流：Cattle stomach, fresh（`conditioning_fresh_stomach_input`）

本卡将“Cattle stomach, fresh”作为“条件性冷却与冻结”过程的一项独立输入产品流交换记录；不得与其他物理或化学流合并。本卡仅对应鲜状态。

- 选定流：Cattle stomach, fresh
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤分别记录“Cattle stomach, fresh”的批次净质量，并与相邻过程转移记录、器官身份及申报市场状态对账。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格牛可食内脏
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_conditioning_records`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录仪器分辨率、校准状态、缺失记录及批次归属不确定性。
- 适用性：条件适用；仅在场址实际发生“Cattle stomach, fresh”交换并有相应记录时纳入。
- 来源：`un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输入产品流：Cattle small intestine, fresh（`conditioning_fresh_small_intestine_input`）

本卡将“Cattle small intestine, fresh”作为“条件性冷却与冻结”过程的一项独立输入产品流交换记录；不得与其他物理或化学流合并。本卡仅对应鲜状态。

- 选定流：Cattle small intestine, fresh
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤分别记录“Cattle small intestine, fresh”的批次净质量，并与相邻过程转移记录、器官身份及申报市场状态对账。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格牛可食内脏
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_conditioning_records`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录仪器分辨率、校准状态、缺失记录及批次归属不确定性。
- 适用性：条件适用；仅在场址实际发生“Cattle small intestine, fresh”交换并有相应记录时纳入。
- 来源：`un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输入产品流：Cattle large intestine, fresh（`conditioning_fresh_large_intestine_input`）

本卡将“Cattle large intestine, fresh”作为“条件性冷却与冻结”过程的一项独立输入产品流交换记录；不得与其他物理或化学流合并。本卡仅对应鲜状态。

- 选定流：Cattle large intestine, fresh
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤分别记录“Cattle large intestine, fresh”的批次净质量，并与相邻过程转移记录、器官身份及申报市场状态对账。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格牛可食内脏
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_conditioning_records`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录仪器分辨率、校准状态、缺失记录及批次归属不确定性。
- 适用性：条件适用；仅在场址实际发生“Cattle large intestine, fresh”交换并有相应记录时纳入。
- 来源：`un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输入产品流：Electricity, grid supply（`conditioning_chilling_electricity`）

本卡将“Electricity, grid supply”作为“条件性冷却与冻结”过程的一项独立输入产品流交换记录；不得与其他物理或化学流合并。

- 选定流：Electricity, grid supply
- 流属性/单位：Energy / kWh
- 数量规则：记录“Electricity, grid supply”对应阶段的分表读数；共享电量仅以有文件记录的设备活动、停留或占用驱动因素计算批次份额。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 工厂门净合格牛可食内脏
- 基准类型：参考流（`reference_flow`）
- 证据类型：从采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_conditioning_records`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录输入记录不确定性、计算假设、因子来源及分配不确定性。
- 适用性：条件适用；仅在场址实际发生“Electricity, grid supply”交换并有相应记录时纳入。
- 来源：`ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输入产品流：Electricity, grid supply（`conditioning_freezing_electricity`）

本卡将“Electricity, grid supply”作为“条件性冷却与冻结”过程的一项独立输入产品流交换记录；不得与其他物理或化学流合并。

- 选定流：Electricity, grid supply
- 流属性/单位：Energy / kWh
- 数量规则：记录“Electricity, grid supply”对应阶段的分表读数；共享电量仅以有文件记录的设备活动、停留或占用驱动因素计算批次份额。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 工厂门净合格牛可食内脏
- 基准类型：参考流（`reference_flow`）
- 证据类型：从采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_conditioning_records`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录输入记录不确定性、计算假设、因子来源及分配不确定性。
- 适用性：条件适用；仅在场址实际发生“Electricity, grid supply”交换并有相应记录时纳入。
- 来源：`ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输入产品流：Process water（`conditioning_process_water`）

本卡将“Process water”作为“条件性冷却与冻结”过程的一项独立输入产品流交换记录；不得与其他物理或化学流合并。

- 选定流：Process water
- 流属性/单位：Volume / m3
- 数量规则：使用专用流量计分别记录“Process water”的批次体积，并保留仪表边界、时间和去向记录。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门净合格牛可食内脏
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_conditioning_records`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录仪器分辨率、校准状态、缺失记录及批次归属不确定性。
- 适用性：条件适用；仅在场址实际发生“Process water”交换并有相应记录时纳入。
- 来源：`ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输入产品流：Ammonia, refrigerant grade R717（`conditioning_r717_makeup`）

本卡将“Ammonia, refrigerant grade R717”作为“条件性冷却与冻结”过程的一项独立输入产品流交换记录；不得与其他物理或化学流合并。本卡按制冷剂物种与回路保持独立。

- 选定流：Ammonia, refrigerant grade R717
- 流属性/单位：Mass / kg
- 数量规则：使用采购、钢瓶称量、维修和回路库存记录，分别对该制冷剂物种的“Ammonia, refrigerant grade R717”质量进行对账。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 工厂门净合格牛可食内脏
- 基准类型：参考流（`reference_flow`）
- 证据类型：从采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_refrigerant_inventory`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录输入记录不确定性、计算假设、因子来源及分配不确定性。
- 适用性：条件适用；仅在场址实际发生“Ammonia, refrigerant grade R717”交换并有相应记录时纳入。
- 来源：`ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输入产品流：Carbon dioxide, refrigerant grade R744（`conditioning_r744_makeup`）

本卡将“Carbon dioxide, refrigerant grade R744”作为“条件性冷却与冻结”过程的一项独立输入产品流交换记录；不得与其他物理或化学流合并。本卡按制冷剂物种与回路保持独立。

- 选定流：Carbon dioxide, refrigerant grade R744
- 流属性/单位：Mass / kg
- 数量规则：使用采购、钢瓶称量、维修和回路库存记录，分别对该制冷剂物种的“Carbon dioxide, refrigerant grade R744”质量进行对账。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 工厂门净合格牛可食内脏
- 基准类型：参考流（`reference_flow`）
- 证据类型：从采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_refrigerant_inventory`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录输入记录不确定性、计算假设、因子来源及分配不确定性。
- 适用性：条件适用；仅在场址实际发生“Carbon dioxide, refrigerant grade R744”交换并有相应记录时纳入。
- 来源：`ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输入产品流：Propane, refrigerant grade R290（`conditioning_r290_makeup`）

本卡将“Propane, refrigerant grade R290”作为“条件性冷却与冻结”过程的一项独立输入产品流交换记录；不得与其他物理或化学流合并。本卡按制冷剂物种与回路保持独立。

- 选定流：Propane, refrigerant grade R290
- 流属性/单位：Mass / kg
- 数量规则：使用采购、钢瓶称量、维修和回路库存记录，分别对该制冷剂物种的“Propane, refrigerant grade R290”质量进行对账。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 工厂门净合格牛可食内脏
- 基准类型：参考流（`reference_flow`）
- 证据类型：从采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_refrigerant_inventory`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录输入记录不确定性、计算假设、因子来源及分配不确定性。
- 适用性：条件适用；仅在场址实际发生“Propane, refrigerant grade R290”交换并有相应记录时纳入。
- 来源：`ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 输出产品流：Cattle liver, chilled（`conditioning_chilled_liver`）

本卡将“Cattle liver, chilled”作为“条件性冷却与冻结”过程的一项独立输出产品流交换记录；不得与其他物理或化学流合并。本卡仅对应冷藏状态。

- 选定流：Cattle liver, chilled
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤分别记录“Cattle liver, chilled”的批次净质量，并与相邻过程转移记录、器官身份及申报市场状态对账。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格牛可食内脏
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_conditioning_records`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录仪器分辨率、校准状态、缺失记录及批次归属不确定性。
- 适用性：条件适用；仅在场址实际发生“Cattle liver, chilled”交换并有相应记录时纳入。
- 来源：`un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输出产品流：Cattle heart, chilled（`conditioning_chilled_heart`）

本卡将“Cattle heart, chilled”作为“条件性冷却与冻结”过程的一项独立输出产品流交换记录；不得与其他物理或化学流合并。本卡仅对应冷藏状态。

- 选定流：Cattle heart, chilled
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤分别记录“Cattle heart, chilled”的批次净质量，并与相邻过程转移记录、器官身份及申报市场状态对账。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格牛可食内脏
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_conditioning_records`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录仪器分辨率、校准状态、缺失记录及批次归属不确定性。
- 适用性：条件适用；仅在场址实际发生“Cattle heart, chilled”交换并有相应记录时纳入。
- 来源：`un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输出产品流：Cattle kidney, chilled（`conditioning_chilled_kidney`）

本卡将“Cattle kidney, chilled”作为“条件性冷却与冻结”过程的一项独立输出产品流交换记录；不得与其他物理或化学流合并。本卡仅对应冷藏状态。

- 选定流：Cattle kidney, chilled
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤分别记录“Cattle kidney, chilled”的批次净质量，并与相邻过程转移记录、器官身份及申报市场状态对账。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格牛可食内脏
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_conditioning_records`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录仪器分辨率、校准状态、缺失记录及批次归属不确定性。
- 适用性：条件适用；仅在场址实际发生“Cattle kidney, chilled”交换并有相应记录时纳入。
- 来源：`un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输出产品流：Cattle tongue, chilled（`conditioning_chilled_tongue`）

本卡将“Cattle tongue, chilled”作为“条件性冷却与冻结”过程的一项独立输出产品流交换记录；不得与其他物理或化学流合并。本卡仅对应冷藏状态。

- 选定流：Cattle tongue, chilled
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤分别记录“Cattle tongue, chilled”的批次净质量，并与相邻过程转移记录、器官身份及申报市场状态对账。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格牛可食内脏
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_conditioning_records`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录仪器分辨率、校准状态、缺失记录及批次归属不确定性。
- 适用性：条件适用；仅在场址实际发生“Cattle tongue, chilled”交换并有相应记录时纳入。
- 来源：`un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输出产品流：Cattle stomach, chilled（`conditioning_chilled_stomach`）

本卡将“Cattle stomach, chilled”作为“条件性冷却与冻结”过程的一项独立输出产品流交换记录；不得与其他物理或化学流合并。本卡仅对应冷藏状态。

- 选定流：Cattle stomach, chilled
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤分别记录“Cattle stomach, chilled”的批次净质量，并与相邻过程转移记录、器官身份及申报市场状态对账。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格牛可食内脏
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_conditioning_records`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录仪器分辨率、校准状态、缺失记录及批次归属不确定性。
- 适用性：条件适用；仅在场址实际发生“Cattle stomach, chilled”交换并有相应记录时纳入。
- 来源：`un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输出产品流：Cattle small intestine, chilled（`conditioning_chilled_small_intestine`）

本卡将“Cattle small intestine, chilled”作为“条件性冷却与冻结”过程的一项独立输出产品流交换记录；不得与其他物理或化学流合并。本卡仅对应冷藏状态。

- 选定流：Cattle small intestine, chilled
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤分别记录“Cattle small intestine, chilled”的批次净质量，并与相邻过程转移记录、器官身份及申报市场状态对账。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格牛可食内脏
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_conditioning_records`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录仪器分辨率、校准状态、缺失记录及批次归属不确定性。
- 适用性：条件适用；仅在场址实际发生“Cattle small intestine, chilled”交换并有相应记录时纳入。
- 来源：`un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输出产品流：Cattle large intestine, chilled（`conditioning_chilled_large_intestine`）

本卡将“Cattle large intestine, chilled”作为“条件性冷却与冻结”过程的一项独立输出产品流交换记录；不得与其他物理或化学流合并。本卡仅对应冷藏状态。

- 选定流：Cattle large intestine, chilled
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤分别记录“Cattle large intestine, chilled”的批次净质量，并与相邻过程转移记录、器官身份及申报市场状态对账。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格牛可食内脏
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_conditioning_records`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录仪器分辨率、校准状态、缺失记录及批次归属不确定性。
- 适用性：条件适用；仅在场址实际发生“Cattle large intestine, chilled”交换并有相应记录时纳入。
- 来源：`un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输出产品流：Cattle liver, frozen（`conditioning_frozen_liver`）

本卡将“Cattle liver, frozen”作为“条件性冷却与冻结”过程的一项独立输出产品流交换记录；不得与其他物理或化学流合并。本卡仅对应冷冻状态。

- 选定流：Cattle liver, frozen
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤分别记录“Cattle liver, frozen”的批次净质量，并与相邻过程转移记录、器官身份及申报市场状态对账。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格牛可食内脏
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_conditioning_records`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录仪器分辨率、校准状态、缺失记录及批次归属不确定性。
- 适用性：条件适用；仅在场址实际发生“Cattle liver, frozen”交换并有相应记录时纳入。
- 来源：`un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输出产品流：Cattle heart, frozen（`conditioning_frozen_heart`）

本卡将“Cattle heart, frozen”作为“条件性冷却与冻结”过程的一项独立输出产品流交换记录；不得与其他物理或化学流合并。本卡仅对应冷冻状态。

- 选定流：Cattle heart, frozen
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤分别记录“Cattle heart, frozen”的批次净质量，并与相邻过程转移记录、器官身份及申报市场状态对账。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格牛可食内脏
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_conditioning_records`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录仪器分辨率、校准状态、缺失记录及批次归属不确定性。
- 适用性：条件适用；仅在场址实际发生“Cattle heart, frozen”交换并有相应记录时纳入。
- 来源：`un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输出产品流：Cattle kidney, frozen（`conditioning_frozen_kidney`）

本卡将“Cattle kidney, frozen”作为“条件性冷却与冻结”过程的一项独立输出产品流交换记录；不得与其他物理或化学流合并。本卡仅对应冷冻状态。

- 选定流：Cattle kidney, frozen
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤分别记录“Cattle kidney, frozen”的批次净质量，并与相邻过程转移记录、器官身份及申报市场状态对账。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格牛可食内脏
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_conditioning_records`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录仪器分辨率、校准状态、缺失记录及批次归属不确定性。
- 适用性：条件适用；仅在场址实际发生“Cattle kidney, frozen”交换并有相应记录时纳入。
- 来源：`un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输出产品流：Cattle tongue, frozen（`conditioning_frozen_tongue`）

本卡将“Cattle tongue, frozen”作为“条件性冷却与冻结”过程的一项独立输出产品流交换记录；不得与其他物理或化学流合并。本卡仅对应冷冻状态。

- 选定流：Cattle tongue, frozen
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤分别记录“Cattle tongue, frozen”的批次净质量，并与相邻过程转移记录、器官身份及申报市场状态对账。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格牛可食内脏
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_conditioning_records`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录仪器分辨率、校准状态、缺失记录及批次归属不确定性。
- 适用性：条件适用；仅在场址实际发生“Cattle tongue, frozen”交换并有相应记录时纳入。
- 来源：`un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输出产品流：Cattle stomach, frozen（`conditioning_frozen_stomach`）

本卡将“Cattle stomach, frozen”作为“条件性冷却与冻结”过程的一项独立输出产品流交换记录；不得与其他物理或化学流合并。本卡仅对应冷冻状态。

- 选定流：Cattle stomach, frozen
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤分别记录“Cattle stomach, frozen”的批次净质量，并与相邻过程转移记录、器官身份及申报市场状态对账。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格牛可食内脏
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_conditioning_records`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录仪器分辨率、校准状态、缺失记录及批次归属不确定性。
- 适用性：条件适用；仅在场址实际发生“Cattle stomach, frozen”交换并有相应记录时纳入。
- 来源：`un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输出产品流：Cattle small intestine, frozen（`conditioning_frozen_small_intestine`）

本卡将“Cattle small intestine, frozen”作为“条件性冷却与冻结”过程的一项独立输出产品流交换记录；不得与其他物理或化学流合并。本卡仅对应冷冻状态。

- 选定流：Cattle small intestine, frozen
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤分别记录“Cattle small intestine, frozen”的批次净质量，并与相邻过程转移记录、器官身份及申报市场状态对账。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格牛可食内脏
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_conditioning_records`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录仪器分辨率、校准状态、缺失记录及批次归属不确定性。
- 适用性：条件适用；仅在场址实际发生“Cattle small intestine, frozen”交换并有相应记录时纳入。
- 来源：`un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输出产品流：Cattle large intestine, frozen（`conditioning_frozen_large_intestine`）

本卡将“Cattle large intestine, frozen”作为“条件性冷却与冻结”过程的一项独立输出产品流交换记录；不得与其他物理或化学流合并。本卡仅对应冷冻状态。

- 选定流：Cattle large intestine, frozen
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤分别记录“Cattle large intestine, frozen”的批次净质量，并与相邻过程转移记录、器官身份及申报市场状态对账。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格牛可食内脏
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_conditioning_records`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录仪器分辨率、校准状态、缺失记录及批次归属不确定性。
- 适用性：条件适用；仅在场址实际发生“Cattle large intestine, frozen”交换并有相应记录时纳入。
- 来源：`un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

##### 废物流

###### 输出废物流：Cold-system defrost wastewater（`conditioning_defrost_wastewater`）

本卡将“Cold-system defrost wastewater”作为“条件性冷却与冻结”过程的一项独立输出废物流交换记录；不得与其他物理或化学流合并。

- 选定流：Cold-system defrost wastewater
- 流属性/单位：Volume / m3
- 数量规则：使用专用流量计，或依据同期匹配的供水、滞留、回收及转移记录计算“Cold-system defrost wastewater”体积，并保留水量平衡。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门净合格牛可食内脏
- 基准类型：参考流（`reference_flow`）
- 证据类型：从采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_conditioning_records`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录输入记录不确定性、计算假设、因子来源及分配不确定性。
- 适用性：条件适用；仅在场址实际发生“Cold-system defrost wastewater”交换并有相应记录时纳入。
- 来源：`ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输出废物流：Cold-system condensate wastewater（`conditioning_condensate_wastewater`）

本卡将“Cold-system condensate wastewater”作为“条件性冷却与冻结”过程的一项独立输出废物流交换记录；不得与其他物理或化学流合并。

- 选定流：Cold-system condensate wastewater
- 流属性/单位：Volume / m3
- 数量规则：使用专用流量计分别记录“Cold-system condensate wastewater”的批次体积，并保留仪表边界、时间和去向记录。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门净合格牛可食内脏
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_conditioning_records`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录仪器分辨率、校准状态、缺失记录及批次归属不确定性。
- 适用性：条件适用；仅在场址实际发生“Cold-system condensate wastewater”交换并有相应记录时纳入。
- 来源：`ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

##### 基本流

###### 输出基本流：Ammonia, R717 refrigerant, to air（`conditioning_r717_to_air`）

本卡将“Ammonia, R717 refrigerant, to air”作为“条件性冷却与冻结”过程的一项独立输出基本流交换记录；不得与其他物理或化学流合并。本卡按制冷剂物种与回路保持独立。

- 选定流：Ammonia, R717 refrigerant, to air
- 流属性/单位：Mass / kg
- 数量规则：按该制冷剂物种及回路，以期初库存、补充、期末库存、回收与有据转移量对账，计算“Ammonia, R717 refrigerant, to air”直接排放质量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 工厂门净合格牛可食内脏
- 基准类型：参考流（`reference_flow`）
- 证据类型：从采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_refrigerant_inventory`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录输入记录不确定性、计算假设、因子来源及分配不确定性。
- 适用性：条件适用；仅在场址实际发生“Ammonia, R717 refrigerant, to air”交换并有相应记录时纳入。
- 来源：`ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输出基本流：Carbon dioxide, R744 refrigerant, to air（`conditioning_r744_to_air`）

本卡将“Carbon dioxide, R744 refrigerant, to air”作为“条件性冷却与冻结”过程的一项独立输出基本流交换记录；不得与其他物理或化学流合并。本卡按制冷剂物种与回路保持独立。

- 选定流：Carbon dioxide, R744 refrigerant, to air
- 流属性/单位：Mass / kg
- 数量规则：按该制冷剂物种及回路，以期初库存、补充、期末库存、回收与有据转移量对账，计算“Carbon dioxide, R744 refrigerant, to air”直接排放质量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 工厂门净合格牛可食内脏
- 基准类型：参考流（`reference_flow`）
- 证据类型：从采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_refrigerant_inventory`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录输入记录不确定性、计算假设、因子来源及分配不确定性。
- 适用性：条件适用；仅在场址实际发生“Carbon dioxide, R744 refrigerant, to air”交换并有相应记录时纳入。
- 来源：`ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输出基本流：Propane, R290 refrigerant, to air（`conditioning_r290_to_air`）

本卡将“Propane, R290 refrigerant, to air”作为“条件性冷却与冻结”过程的一项独立输出基本流交换记录；不得与其他物理或化学流合并。本卡按制冷剂物种与回路保持独立。

- 选定流：Propane, R290 refrigerant, to air
- 流属性/单位：Mass / kg
- 数量规则：按该制冷剂物种及回路，以期初库存、补充、期末库存、回收与有据转移量对账，计算“Propane, R290 refrigerant, to air”直接排放质量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 工厂门净合格牛可食内脏
- 基准类型：参考流（`reference_flow`）
- 证据类型：从采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_refrigerant_inventory`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录输入记录不确定性、计算假设、因子来源及分配不确定性。
- 适用性：条件适用；仅在场址实际发生“Propane, R290 refrigerant, to air”交换并有相应记录时纳入。
- 来源：`ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

### 过程：组成装配、包装、储存与放行（`packaging_storage_release`）

#### 输入

##### 产品流

###### 输入产品流：Cattle liver, fresh（`packaging_fresh_liver`）

本卡将“Cattle liver, fresh”作为“组成装配、包装、储存与放行”过程的一项独立输入产品流交换记录；不得与其他物理或化学流合并。本卡仅对应鲜状态。

- 选定流：Cattle liver, fresh
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤分别记录“Cattle liver, fresh”的批次净质量，并与相邻过程转移记录、器官身份及申报市场状态对账。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格牛可食内脏
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_composition`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录仪器分辨率、校准状态、缺失记录及批次归属不确定性。
- 适用性：条件适用；仅在场址实际发生“Cattle liver, fresh”交换并有相应记录时纳入。
- 来源：`un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输入产品流：Cattle heart, fresh（`packaging_fresh_heart`）

本卡将“Cattle heart, fresh”作为“组成装配、包装、储存与放行”过程的一项独立输入产品流交换记录；不得与其他物理或化学流合并。本卡仅对应鲜状态。

- 选定流：Cattle heart, fresh
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤分别记录“Cattle heart, fresh”的批次净质量，并与相邻过程转移记录、器官身份及申报市场状态对账。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格牛可食内脏
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_composition`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录仪器分辨率、校准状态、缺失记录及批次归属不确定性。
- 适用性：条件适用；仅在场址实际发生“Cattle heart, fresh”交换并有相应记录时纳入。
- 来源：`un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输入产品流：Cattle kidney, fresh（`packaging_fresh_kidney`）

本卡将“Cattle kidney, fresh”作为“组成装配、包装、储存与放行”过程的一项独立输入产品流交换记录；不得与其他物理或化学流合并。本卡仅对应鲜状态。

- 选定流：Cattle kidney, fresh
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤分别记录“Cattle kidney, fresh”的批次净质量，并与相邻过程转移记录、器官身份及申报市场状态对账。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格牛可食内脏
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_composition`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录仪器分辨率、校准状态、缺失记录及批次归属不确定性。
- 适用性：条件适用；仅在场址实际发生“Cattle kidney, fresh”交换并有相应记录时纳入。
- 来源：`un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输入产品流：Cattle tongue, fresh（`packaging_fresh_tongue`）

本卡将“Cattle tongue, fresh”作为“组成装配、包装、储存与放行”过程的一项独立输入产品流交换记录；不得与其他物理或化学流合并。本卡仅对应鲜状态。

- 选定流：Cattle tongue, fresh
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤分别记录“Cattle tongue, fresh”的批次净质量，并与相邻过程转移记录、器官身份及申报市场状态对账。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格牛可食内脏
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_composition`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录仪器分辨率、校准状态、缺失记录及批次归属不确定性。
- 适用性：条件适用；仅在场址实际发生“Cattle tongue, fresh”交换并有相应记录时纳入。
- 来源：`un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输入产品流：Cattle stomach, fresh（`packaging_fresh_stomach`）

本卡将“Cattle stomach, fresh”作为“组成装配、包装、储存与放行”过程的一项独立输入产品流交换记录；不得与其他物理或化学流合并。本卡仅对应鲜状态。

- 选定流：Cattle stomach, fresh
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤分别记录“Cattle stomach, fresh”的批次净质量，并与相邻过程转移记录、器官身份及申报市场状态对账。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格牛可食内脏
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_composition`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录仪器分辨率、校准状态、缺失记录及批次归属不确定性。
- 适用性：条件适用；仅在场址实际发生“Cattle stomach, fresh”交换并有相应记录时纳入。
- 来源：`un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输入产品流：Cattle small intestine, fresh（`packaging_fresh_small_intestine`）

本卡将“Cattle small intestine, fresh”作为“组成装配、包装、储存与放行”过程的一项独立输入产品流交换记录；不得与其他物理或化学流合并。本卡仅对应鲜状态。

- 选定流：Cattle small intestine, fresh
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤分别记录“Cattle small intestine, fresh”的批次净质量，并与相邻过程转移记录、器官身份及申报市场状态对账。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格牛可食内脏
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_composition`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录仪器分辨率、校准状态、缺失记录及批次归属不确定性。
- 适用性：条件适用；仅在场址实际发生“Cattle small intestine, fresh”交换并有相应记录时纳入。
- 来源：`un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输入产品流：Cattle large intestine, fresh（`packaging_fresh_large_intestine`）

本卡将“Cattle large intestine, fresh”作为“组成装配、包装、储存与放行”过程的一项独立输入产品流交换记录；不得与其他物理或化学流合并。本卡仅对应鲜状态。

- 选定流：Cattle large intestine, fresh
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤分别记录“Cattle large intestine, fresh”的批次净质量，并与相邻过程转移记录、器官身份及申报市场状态对账。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格牛可食内脏
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_composition`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录仪器分辨率、校准状态、缺失记录及批次归属不确定性。
- 适用性：条件适用；仅在场址实际发生“Cattle large intestine, fresh”交换并有相应记录时纳入。
- 来源：`un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输入产品流：Cattle liver, chilled（`packaging_chilled_liver`）

本卡将“Cattle liver, chilled”作为“组成装配、包装、储存与放行”过程的一项独立输入产品流交换记录；不得与其他物理或化学流合并。本卡仅对应冷藏状态。

- 选定流：Cattle liver, chilled
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤分别记录“Cattle liver, chilled”的批次净质量，并与相邻过程转移记录、器官身份及申报市场状态对账。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格牛可食内脏
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_composition`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录仪器分辨率、校准状态、缺失记录及批次归属不确定性。
- 适用性：条件适用；仅在场址实际发生“Cattle liver, chilled”交换并有相应记录时纳入。
- 来源：`un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输入产品流：Cattle heart, chilled（`packaging_chilled_heart`）

本卡将“Cattle heart, chilled”作为“组成装配、包装、储存与放行”过程的一项独立输入产品流交换记录；不得与其他物理或化学流合并。本卡仅对应冷藏状态。

- 选定流：Cattle heart, chilled
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤分别记录“Cattle heart, chilled”的批次净质量，并与相邻过程转移记录、器官身份及申报市场状态对账。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格牛可食内脏
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_composition`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录仪器分辨率、校准状态、缺失记录及批次归属不确定性。
- 适用性：条件适用；仅在场址实际发生“Cattle heart, chilled”交换并有相应记录时纳入。
- 来源：`un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输入产品流：Cattle kidney, chilled（`packaging_chilled_kidney`）

本卡将“Cattle kidney, chilled”作为“组成装配、包装、储存与放行”过程的一项独立输入产品流交换记录；不得与其他物理或化学流合并。本卡仅对应冷藏状态。

- 选定流：Cattle kidney, chilled
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤分别记录“Cattle kidney, chilled”的批次净质量，并与相邻过程转移记录、器官身份及申报市场状态对账。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格牛可食内脏
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_composition`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录仪器分辨率、校准状态、缺失记录及批次归属不确定性。
- 适用性：条件适用；仅在场址实际发生“Cattle kidney, chilled”交换并有相应记录时纳入。
- 来源：`un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输入产品流：Cattle tongue, chilled（`packaging_chilled_tongue`）

本卡将“Cattle tongue, chilled”作为“组成装配、包装、储存与放行”过程的一项独立输入产品流交换记录；不得与其他物理或化学流合并。本卡仅对应冷藏状态。

- 选定流：Cattle tongue, chilled
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤分别记录“Cattle tongue, chilled”的批次净质量，并与相邻过程转移记录、器官身份及申报市场状态对账。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格牛可食内脏
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_composition`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录仪器分辨率、校准状态、缺失记录及批次归属不确定性。
- 适用性：条件适用；仅在场址实际发生“Cattle tongue, chilled”交换并有相应记录时纳入。
- 来源：`un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输入产品流：Cattle stomach, chilled（`packaging_chilled_stomach`）

本卡将“Cattle stomach, chilled”作为“组成装配、包装、储存与放行”过程的一项独立输入产品流交换记录；不得与其他物理或化学流合并。本卡仅对应冷藏状态。

- 选定流：Cattle stomach, chilled
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤分别记录“Cattle stomach, chilled”的批次净质量，并与相邻过程转移记录、器官身份及申报市场状态对账。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格牛可食内脏
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_composition`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录仪器分辨率、校准状态、缺失记录及批次归属不确定性。
- 适用性：条件适用；仅在场址实际发生“Cattle stomach, chilled”交换并有相应记录时纳入。
- 来源：`un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输入产品流：Cattle small intestine, chilled（`packaging_chilled_small_intestine`）

本卡将“Cattle small intestine, chilled”作为“组成装配、包装、储存与放行”过程的一项独立输入产品流交换记录；不得与其他物理或化学流合并。本卡仅对应冷藏状态。

- 选定流：Cattle small intestine, chilled
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤分别记录“Cattle small intestine, chilled”的批次净质量，并与相邻过程转移记录、器官身份及申报市场状态对账。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格牛可食内脏
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_composition`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录仪器分辨率、校准状态、缺失记录及批次归属不确定性。
- 适用性：条件适用；仅在场址实际发生“Cattle small intestine, chilled”交换并有相应记录时纳入。
- 来源：`un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输入产品流：Cattle large intestine, chilled（`packaging_chilled_large_intestine`）

本卡将“Cattle large intestine, chilled”作为“组成装配、包装、储存与放行”过程的一项独立输入产品流交换记录；不得与其他物理或化学流合并。本卡仅对应冷藏状态。

- 选定流：Cattle large intestine, chilled
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤分别记录“Cattle large intestine, chilled”的批次净质量，并与相邻过程转移记录、器官身份及申报市场状态对账。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格牛可食内脏
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_composition`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录仪器分辨率、校准状态、缺失记录及批次归属不确定性。
- 适用性：条件适用；仅在场址实际发生“Cattle large intestine, chilled”交换并有相应记录时纳入。
- 来源：`un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输入产品流：Cattle liver, frozen（`packaging_frozen_liver`）

本卡将“Cattle liver, frozen”作为“组成装配、包装、储存与放行”过程的一项独立输入产品流交换记录；不得与其他物理或化学流合并。本卡仅对应冷冻状态。

- 选定流：Cattle liver, frozen
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤分别记录“Cattle liver, frozen”的批次净质量，并与相邻过程转移记录、器官身份及申报市场状态对账。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格牛可食内脏
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_composition`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录仪器分辨率、校准状态、缺失记录及批次归属不确定性。
- 适用性：条件适用；仅在场址实际发生“Cattle liver, frozen”交换并有相应记录时纳入。
- 来源：`un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输入产品流：Cattle heart, frozen（`packaging_frozen_heart`）

本卡将“Cattle heart, frozen”作为“组成装配、包装、储存与放行”过程的一项独立输入产品流交换记录；不得与其他物理或化学流合并。本卡仅对应冷冻状态。

- 选定流：Cattle heart, frozen
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤分别记录“Cattle heart, frozen”的批次净质量，并与相邻过程转移记录、器官身份及申报市场状态对账。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格牛可食内脏
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_composition`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录仪器分辨率、校准状态、缺失记录及批次归属不确定性。
- 适用性：条件适用；仅在场址实际发生“Cattle heart, frozen”交换并有相应记录时纳入。
- 来源：`un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输入产品流：Cattle kidney, frozen（`packaging_frozen_kidney`）

本卡将“Cattle kidney, frozen”作为“组成装配、包装、储存与放行”过程的一项独立输入产品流交换记录；不得与其他物理或化学流合并。本卡仅对应冷冻状态。

- 选定流：Cattle kidney, frozen
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤分别记录“Cattle kidney, frozen”的批次净质量，并与相邻过程转移记录、器官身份及申报市场状态对账。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格牛可食内脏
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_composition`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录仪器分辨率、校准状态、缺失记录及批次归属不确定性。
- 适用性：条件适用；仅在场址实际发生“Cattle kidney, frozen”交换并有相应记录时纳入。
- 来源：`un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输入产品流：Cattle tongue, frozen（`packaging_frozen_tongue`）

本卡将“Cattle tongue, frozen”作为“组成装配、包装、储存与放行”过程的一项独立输入产品流交换记录；不得与其他物理或化学流合并。本卡仅对应冷冻状态。

- 选定流：Cattle tongue, frozen
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤分别记录“Cattle tongue, frozen”的批次净质量，并与相邻过程转移记录、器官身份及申报市场状态对账。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格牛可食内脏
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_composition`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录仪器分辨率、校准状态、缺失记录及批次归属不确定性。
- 适用性：条件适用；仅在场址实际发生“Cattle tongue, frozen”交换并有相应记录时纳入。
- 来源：`un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输入产品流：Cattle stomach, frozen（`packaging_frozen_stomach`）

本卡将“Cattle stomach, frozen”作为“组成装配、包装、储存与放行”过程的一项独立输入产品流交换记录；不得与其他物理或化学流合并。本卡仅对应冷冻状态。

- 选定流：Cattle stomach, frozen
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤分别记录“Cattle stomach, frozen”的批次净质量，并与相邻过程转移记录、器官身份及申报市场状态对账。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格牛可食内脏
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_composition`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录仪器分辨率、校准状态、缺失记录及批次归属不确定性。
- 适用性：条件适用；仅在场址实际发生“Cattle stomach, frozen”交换并有相应记录时纳入。
- 来源：`un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输入产品流：Cattle small intestine, frozen（`packaging_frozen_small_intestine`）

本卡将“Cattle small intestine, frozen”作为“组成装配、包装、储存与放行”过程的一项独立输入产品流交换记录；不得与其他物理或化学流合并。本卡仅对应冷冻状态。

- 选定流：Cattle small intestine, frozen
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤分别记录“Cattle small intestine, frozen”的批次净质量，并与相邻过程转移记录、器官身份及申报市场状态对账。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格牛可食内脏
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_composition`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录仪器分辨率、校准状态、缺失记录及批次归属不确定性。
- 适用性：条件适用；仅在场址实际发生“Cattle small intestine, frozen”交换并有相应记录时纳入。
- 来源：`un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输入产品流：Cattle large intestine, frozen（`packaging_frozen_large_intestine`）

本卡将“Cattle large intestine, frozen”作为“组成装配、包装、储存与放行”过程的一项独立输入产品流交换记录；不得与其他物理或化学流合并。本卡仅对应冷冻状态。

- 选定流：Cattle large intestine, frozen
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤分别记录“Cattle large intestine, frozen”的批次净质量，并与相邻过程转移记录、器官身份及申报市场状态对账。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格牛可食内脏
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_composition`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录仪器分辨率、校准状态、缺失记录及批次归属不确定性。
- 适用性：条件适用；仅在场址实际发生“Cattle large intestine, frozen”交换并有相应记录时纳入。
- 来源：`un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输入产品流：Electricity, grid supply（`packaging_electricity`）

本卡将“Electricity, grid supply”作为“组成装配、包装、储存与放行”过程的一项独立输入产品流交换记录；不得与其他物理或化学流合并。

- 选定流：Electricity, grid supply
- 流属性/单位：Energy / kWh
- 数量规则：记录“Electricity, grid supply”对应阶段的分表读数；共享电量仅以有文件记录的设备活动、停留或占用驱动因素计算批次份额。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门净合格牛可食内脏
- 基准类型：参考流（`reference_flow`）
- 证据类型：从采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_packaging_release`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录输入记录不确定性、计算假设、因子来源及分配不确定性。
- 适用性：当场址发生“Electricity, grid supply”交换时必须记录。
- 来源：`ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输入产品流：Electricity, grid supply（`storage_chilled_electricity`）

本卡将“Electricity, grid supply”作为“组成装配、包装、储存与放行”过程的一项独立输入产品流交换记录；不得与其他物理或化学流合并。本卡仅对应冷藏状态。

- 选定流：Electricity, grid supply
- 流属性/单位：Energy / kWh
- 数量规则：记录“Electricity, grid supply”对应阶段的分表读数；共享电量仅以有文件记录的设备活动、停留或占用驱动因素计算批次份额。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 工厂门净合格牛可食内脏
- 基准类型：参考流（`reference_flow`）
- 证据类型：从采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_packaging_release`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录输入记录不确定性、计算假设、因子来源及分配不确定性。
- 适用性：条件适用；仅在场址实际发生“Electricity, grid supply”交换并有相应记录时纳入。
- 来源：`ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输入产品流：Electricity, grid supply（`storage_frozen_electricity`）

本卡将“Electricity, grid supply”作为“组成装配、包装、储存与放行”过程的一项独立输入产品流交换记录；不得与其他物理或化学流合并。本卡仅对应冷冻状态。

- 选定流：Electricity, grid supply
- 流属性/单位：Energy / kWh
- 数量规则：记录“Electricity, grid supply”对应阶段的分表读数；共享电量仅以有文件记录的设备活动、停留或占用驱动因素计算批次份额。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 工厂门净合格牛可食内脏
- 基准类型：参考流（`reference_flow`）
- 证据类型：从采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_packaging_release`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录输入记录不确定性、计算假设、因子来源及分配不确定性。
- 适用性：条件适用；仅在场址实际发生“Electricity, grid supply”交换并有相应记录时纳入。
- 来源：`ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输入产品流：Low-density polyethylene film（`packaging_ldpe_film`）

本卡将“Low-density polyethylene film”作为“组成装配、包装、储存与放行”过程的一项独立输入产品流交换记录；不得与其他物理或化学流合并。本卡只对应一种明确的包装组件或材料特定包装废物。

- 选定流：Low-density polyethylene film
- 流属性/单位：Mass / kg
- 数量规则：按产品特定 BoM，以领用质量减退回质量，或以组件数量乘经核实单件质量，分别计算“Low-density polyethylene film”；托盘仅按有据循环次数处理。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格牛可食内脏
- 基准类型：参考流（`reference_flow`）
- 证据类型：从采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_packaging_bom`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录输入记录不确定性、计算假设、因子来源及分配不确定性。
- 适用性：条件适用；仅在场址实际发生“Low-density polyethylene film”交换并有相应记录时纳入。
- 来源：`ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输入产品流：Corrugated fibreboard box（`packaging_fibreboard_box`）

本卡将“Corrugated fibreboard box”作为“组成装配、包装、储存与放行”过程的一项独立输入产品流交换记录；不得与其他物理或化学流合并。

- 选定流：Corrugated fibreboard box
- 流属性/单位：Mass / kg
- 数量规则：仅使用经计量的前景输入与可审计计算关系计算“Corrugated fibreboard box”数量，保存输入值、公式、因子来源及批次归属。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格牛可食内脏
- 基准类型：参考流（`reference_flow`）
- 证据类型：从采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_packaging_bom`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录输入记录不确定性、计算假设、因子来源及分配不确定性。
- 适用性：条件适用；仅在场址实际发生“Corrugated fibreboard box”交换并有相应记录时纳入。
- 来源：`ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输入产品流：Paper label（`packaging_paper_label`）

本卡将“Paper label”作为“组成装配、包装、储存与放行”过程的一项独立输入产品流交换记录；不得与其他物理或化学流合并。

- 选定流：Paper label
- 流属性/单位：Mass / kg
- 数量规则：仅使用经计量的前景输入与可审计计算关系计算“Paper label”数量，保存输入值、公式、因子来源及批次归属。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格牛可食内脏
- 基准类型：参考流（`reference_flow`）
- 证据类型：从采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_packaging_bom`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录输入记录不确定性、计算假设、因子来源及分配不确定性。
- 适用性：条件适用；仅在场址实际发生“Paper label”交换并有相应记录时纳入。
- 来源：`ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输入产品流：Wood pallet（`packaging_wood_pallet`）

本卡将“Wood pallet”作为“组成装配、包装、储存与放行”过程的一项独立输入产品流交换记录；不得与其他物理或化学流合并。本卡只对应一种明确的包装组件或材料特定包装废物。

- 选定流：Wood pallet
- 流属性/单位：Mass / kg
- 数量规则：按产品特定 BoM，以领用质量减退回质量，或以组件数量乘经核实单件质量，分别计算“Wood pallet”；托盘仅按有据循环次数处理。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格牛可食内脏
- 基准类型：参考流（`reference_flow`）
- 证据类型：从采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_packaging_bom`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录输入记录不确定性、计算假设、因子来源及分配不确定性。
- 适用性：条件适用；仅在场址实际发生“Wood pallet”交换并有相应记录时纳入。
- 来源：`ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 参考牛可食内脏（`cattle_edible_offal_reference_product`）

本卡是组成装配、包装、储存、质量放行与净质量确定后的 CPC 21151 定量参考输出。

- 选定流：Edible offal of cattle, fresh, chilled or frozen `a6673976-2ef4-4502-b9f5-bbc57099bb40`
- 流属性/单位：Mass / kg
- 数量规则：记录工厂门放行的 1 kg 净合格牛可食内脏；排除包装质量，并要求申报器官组成及一个市场状态。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格牛可食内脏
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_release`
- UUID 状态：已核验公开 state=100 Product flow、version 01.01.000，并与 CPC 21151 及 Mass 参考精确一致。
- 不确定性：记录仪器分辨率、校准状态、缺失记录及批次归属不确定性。
- 适用性：必需；每个数据集恰好一个定量参考输出。
- 来源：`un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

##### 废物流

###### 输出废物流：Rejected cattle liver from packaging（`packaging_rejected_liver`）

本卡将“Rejected cattle liver from packaging”作为“组成装配、包装、储存与放行”过程的一项独立输出废物流交换记录；不得与其他物理或化学流合并。

- 选定流：Rejected cattle liver from packaging
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤分别记录“Rejected cattle liver from packaging”的批次净质量，并与相邻过程转移记录、器官身份及申报市场状态对账。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门净合格牛可食内脏
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_waste`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录仪器分辨率、校准状态、缺失记录及批次归属不确定性。
- 适用性：条件适用；仅在场址实际发生“Rejected cattle liver from packaging”交换并有相应记录时纳入。
- 来源：`ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输出废物流：Rejected cattle heart from packaging（`packaging_rejected_heart`）

本卡将“Rejected cattle heart from packaging”作为“组成装配、包装、储存与放行”过程的一项独立输出废物流交换记录；不得与其他物理或化学流合并。

- 选定流：Rejected cattle heart from packaging
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤分别记录“Rejected cattle heart from packaging”的批次净质量，并与相邻过程转移记录、器官身份及申报市场状态对账。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门净合格牛可食内脏
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_waste`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录仪器分辨率、校准状态、缺失记录及批次归属不确定性。
- 适用性：条件适用；仅在场址实际发生“Rejected cattle heart from packaging”交换并有相应记录时纳入。
- 来源：`ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输出废物流：Rejected cattle kidney from packaging（`packaging_rejected_kidney`）

本卡将“Rejected cattle kidney from packaging”作为“组成装配、包装、储存与放行”过程的一项独立输出废物流交换记录；不得与其他物理或化学流合并。

- 选定流：Rejected cattle kidney from packaging
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤分别记录“Rejected cattle kidney from packaging”的批次净质量，并与相邻过程转移记录、器官身份及申报市场状态对账。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门净合格牛可食内脏
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_waste`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录仪器分辨率、校准状态、缺失记录及批次归属不确定性。
- 适用性：条件适用；仅在场址实际发生“Rejected cattle kidney from packaging”交换并有相应记录时纳入。
- 来源：`ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输出废物流：Rejected cattle tongue from packaging（`packaging_rejected_tongue`）

本卡将“Rejected cattle tongue from packaging”作为“组成装配、包装、储存与放行”过程的一项独立输出废物流交换记录；不得与其他物理或化学流合并。

- 选定流：Rejected cattle tongue from packaging
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤分别记录“Rejected cattle tongue from packaging”的批次净质量，并与相邻过程转移记录、器官身份及申报市场状态对账。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门净合格牛可食内脏
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_waste`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录仪器分辨率、校准状态、缺失记录及批次归属不确定性。
- 适用性：条件适用；仅在场址实际发生“Rejected cattle tongue from packaging”交换并有相应记录时纳入。
- 来源：`ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输出废物流：Rejected cattle stomach from packaging（`packaging_rejected_stomach`）

本卡将“Rejected cattle stomach from packaging”作为“组成装配、包装、储存与放行”过程的一项独立输出废物流交换记录；不得与其他物理或化学流合并。

- 选定流：Rejected cattle stomach from packaging
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤分别记录“Rejected cattle stomach from packaging”的批次净质量，并与相邻过程转移记录、器官身份及申报市场状态对账。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门净合格牛可食内脏
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_waste`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录仪器分辨率、校准状态、缺失记录及批次归属不确定性。
- 适用性：条件适用；仅在场址实际发生“Rejected cattle stomach from packaging”交换并有相应记录时纳入。
- 来源：`ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输出废物流：Rejected cattle small intestine from packaging（`packaging_rejected_small_intestine`）

本卡将“Rejected cattle small intestine from packaging”作为“组成装配、包装、储存与放行”过程的一项独立输出废物流交换记录；不得与其他物理或化学流合并。

- 选定流：Rejected cattle small intestine from packaging
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤分别记录“Rejected cattle small intestine from packaging”的批次净质量，并与相邻过程转移记录、器官身份及申报市场状态对账。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门净合格牛可食内脏
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_waste`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录仪器分辨率、校准状态、缺失记录及批次归属不确定性。
- 适用性：条件适用；仅在场址实际发生“Rejected cattle small intestine from packaging”交换并有相应记录时纳入。
- 来源：`ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输出废物流：Rejected cattle large intestine from packaging（`packaging_rejected_large_intestine`）

本卡将“Rejected cattle large intestine from packaging”作为“组成装配、包装、储存与放行”过程的一项独立输出废物流交换记录；不得与其他物理或化学流合并。

- 选定流：Rejected cattle large intestine from packaging
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤分别记录“Rejected cattle large intestine from packaging”的批次净质量，并与相邻过程转移记录、器官身份及申报市场状态对账。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门净合格牛可食内脏
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_waste`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录仪器分辨率、校准状态、缺失记录及批次归属不确定性。
- 适用性：条件适用；仅在场址实际发生“Rejected cattle large intestine from packaging”交换并有相应记录时纳入。
- 来源：`ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输出废物流：Low-density polyethylene film offcut waste（`packaging_ldpe_film_waste`）

本卡将“Low-density polyethylene film offcut waste”作为“组成装配、包装、储存与放行”过程的一项独立输出废物流交换记录；不得与其他物理或化学流合并。本卡只对应一种明确的包装组件或材料特定包装废物。

- 选定流：Low-density polyethylene film offcut waste
- 流属性/单位：Mass / kg
- 数量规则：按产品特定 BoM，以领用质量减退回质量，或以组件数量乘经核实单件质量，分别计算“Low-density polyethylene film offcut waste”；托盘仅按有据循环次数处理。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门净合格牛可食内脏
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_waste`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录仪器分辨率、校准状态、缺失记录及批次归属不确定性。
- 适用性：条件适用；仅在场址实际发生“Low-density polyethylene film offcut waste”交换并有相应记录时纳入。
- 来源：`ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输出废物流：Corrugated fibreboard packaging waste（`packaging_fibreboard_waste`）

本卡将“Corrugated fibreboard packaging waste”作为“组成装配、包装、储存与放行”过程的一项独立输出废物流交换记录；不得与其他物理或化学流合并。本卡只对应一种明确的包装组件或材料特定包装废物。

- 选定流：Corrugated fibreboard packaging waste
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、容器皮重或专用台账，分别记录“Corrugated fibreboard packaging waste”的实际质量及去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门净合格牛可食内脏
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_waste`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录仪器分辨率、校准状态、缺失记录及批次归属不确定性。
- 适用性：条件适用；仅在场址实际发生“Corrugated fibreboard packaging waste”交换并有相应记录时纳入。
- 来源：`ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输出废物流：Paper label waste（`packaging_paper_label_waste`）

本卡将“Paper label waste”作为“组成装配、包装、储存与放行”过程的一项独立输出废物流交换记录；不得与其他物理或化学流合并。本卡只对应一种明确的包装组件或材料特定包装废物。

- 选定流：Paper label waste
- 流属性/单位：Mass / kg
- 数量规则：依据匹配的经计量输入、输出和去向记录计算“Paper label waste”质量，并保留计算关系。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门净合格牛可食内脏
- 基准类型：参考流（`reference_flow`）
- 证据类型：从采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_packaging_waste`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录输入记录不确定性、计算假设、因子来源及分配不确定性。
- 适用性：条件适用；仅在场址实际发生“Paper label waste”交换并有相应记录时纳入。
- 来源：`ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输出废物流：Damaged wood pallet waste（`packaging_wood_pallet_waste`）

本卡将“Damaged wood pallet waste”作为“组成装配、包装、储存与放行”过程的一项独立输出废物流交换记录；不得与其他物理或化学流合并。本卡只对应一种明确的包装组件或材料特定包装废物。

- 选定流：Damaged wood pallet waste
- 流属性/单位：Mass / kg
- 数量规则：按产品特定 BoM，以领用质量减退回质量，或以组件数量乘经核实单件质量，分别计算“Damaged wood pallet waste”；托盘仅按有据循环次数处理。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门净合格牛可食内脏
- 基准类型：参考流（`reference_flow`）
- 证据类型：从采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_packaging_waste`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录输入记录不确定性、计算假设、因子来源及分配不确定性。
- 适用性：条件适用；仅在场址实际发生“Damaged wood pallet waste”交换并有相应记录时纳入。
- 来源：`ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

##### 基本流

### 过程：清洗、消毒与场内热力公用工程（`cleaning_thermal_utilities`）

#### 输入

##### 产品流

###### 输入产品流：Electricity, grid supply（`cleaning_electricity`）

本卡将“Electricity, grid supply”作为“清洗、消毒与场内热力公用工程”过程的一项独立输入产品流交换记录；不得与其他物理或化学流合并。

- 选定流：Electricity, grid supply
- 流属性/单位：Energy / kWh
- 数量规则：记录“Electricity, grid supply”对应阶段的分表读数；共享电量仅以有文件记录的设备活动、停留或占用驱动因素计算批次份额。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门净合格牛可食内脏
- 基准类型：参考流（`reference_flow`）
- 证据类型：从采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_cleaning_inputs`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录输入记录不确定性、计算假设、因子来源及分配不确定性。
- 适用性：当场址发生“Electricity, grid supply”交换时必须记录。
- 来源：`ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输入产品流：Process water（`cleaning_water`）

本卡将“Process water”作为“清洗、消毒与场内热力公用工程”过程的一项独立输入产品流交换记录；不得与其他物理或化学流合并。

- 选定流：Process water
- 流属性/单位：Volume / m3
- 数量规则：使用专用流量计分别记录“Process water”的批次体积，并保留仪表边界、时间和去向记录。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门净合格牛可食内脏
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cleaning_inputs`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录仪器分辨率、校准状态、缺失记录及批次归属不确定性。
- 适用性：当场址发生“Process water”交换时必须记录。
- 来源：`ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输入产品流：Purchased steam（`cleaning_purchased_steam`）

本卡将“Purchased steam”作为“清洗、消毒与场内热力公用工程”过程的一项独立输入产品流交换记录；不得与其他物理或化学流合并。本卡只对应一种明确载体或化学物质。

- 选定流：Purchased steam
- 流属性/单位：Energy / MJ
- 数量规则：按经校准的载体计量记录及同期温度、压力、密度或热值，将“Purchased steam”换算为交付能量，并防止替代供热路线重复计算。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门净合格牛可食内脏
- 基准类型：参考流（`reference_flow`）
- 证据类型：从采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_thermal_utility`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录输入记录不确定性、计算假设、因子来源及分配不确定性。
- 适用性：条件适用；仅在场址实际发生“Purchased steam”交换并有相应记录时纳入。
- 来源：`ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输入产品流：Purchased hot water（`cleaning_purchased_hot_water`）

本卡将“Purchased hot water”作为“清洗、消毒与场内热力公用工程”过程的一项独立输入产品流交换记录；不得与其他物理或化学流合并。本卡只对应一种明确载体或化学物质。

- 选定流：Purchased hot water
- 流属性/单位：Energy / MJ
- 数量规则：按经校准的载体计量记录及同期温度、压力、密度或热值，将“Purchased hot water”换算为交付能量，并防止替代供热路线重复计算。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门净合格牛可食内脏
- 基准类型：参考流（`reference_flow`）
- 证据类型：从采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_thermal_utility`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录输入记录不确定性、计算假设、因子来源及分配不确定性。
- 适用性：条件适用；仅在场址实际发生“Purchased hot water”交换并有相应记录时纳入。
- 来源：`ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输入产品流：Natural gas（`cleaning_natural_gas`）

本卡将“Natural gas”作为“清洗、消毒与场内热力公用工程”过程的一项独立输入产品流交换记录；不得与其他物理或化学流合并。本卡只对应一种明确载体或化学物质。

- 选定流：Natural gas
- 流属性/单位：Energy / MJ
- 数量规则：按经校准的载体计量记录及同期温度、压力、密度或热值，将“Natural gas”换算为交付能量，并防止替代供热路线重复计算。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门净合格牛可食内脏
- 基准类型：参考流（`reference_flow`）
- 证据类型：从采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_thermal_utility`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录输入记录不确定性、计算假设、因子来源及分配不确定性。
- 适用性：条件适用；仅在场址实际发生“Natural gas”交换并有相应记录时纳入。
- 来源：`ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输入产品流：Diesel fuel（`cleaning_diesel`）

本卡将“Diesel fuel”作为“清洗、消毒与场内热力公用工程”过程的一项独立输入产品流交换记录；不得与其他物理或化学流合并。本卡只对应一种明确载体或化学物质。

- 选定流：Diesel fuel
- 流属性/单位：Energy / MJ
- 数量规则：按经校准的载体计量记录及同期温度、压力、密度或热值，将“Diesel fuel”换算为交付能量，并防止替代供热路线重复计算。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门净合格牛可食内脏
- 基准类型：参考流（`reference_flow`）
- 证据类型：从采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_thermal_utility`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录输入记录不确定性、计算假设、因子来源及分配不确定性。
- 适用性：条件适用；仅在场址实际发生“Diesel fuel”交换并有相应记录时纳入。
- 来源：`ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输入产品流：Liquefied petroleum gas（`cleaning_lpg`）

本卡将“Liquefied petroleum gas”作为“清洗、消毒与场内热力公用工程”过程的一项独立输入产品流交换记录；不得与其他物理或化学流合并。本卡只对应一种明确载体或化学物质。

- 选定流：Liquefied petroleum gas
- 流属性/单位：Energy / MJ
- 数量规则：按经校准的载体计量记录及同期温度、压力、密度或热值，将“Liquefied petroleum gas”换算为交付能量，并防止替代供热路线重复计算。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门净合格牛可食内脏
- 基准类型：参考流（`reference_flow`）
- 证据类型：从采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_thermal_utility`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录输入记录不确定性、计算假设、因子来源及分配不确定性。
- 适用性：条件适用；仅在场址实际发生“Liquefied petroleum gas”交换并有相应记录时纳入。
- 来源：`ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输入产品流：Sodium hydroxide（`cleaning_sodium_hydroxide`）

本卡将“Sodium hydroxide”作为“清洗、消毒与场内热力公用工程”过程的一项独立输入产品流交换记录；不得与其他物理或化学流合并。本卡只对应一种明确载体或化学物质。

- 选定流：Sodium hydroxide
- 流属性/单位：Mass / kg
- 数量规则：依据化学品库存、领用和投加记录，分别记录“Sodium hydroxide”的实际质量，并保持物质身份。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门净合格牛可食内脏
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cleaning_inputs`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录仪器分辨率、校准状态、缺失记录及批次归属不确定性。
- 适用性：条件适用；仅在场址实际发生“Sodium hydroxide”交换并有相应记录时纳入。
- 来源：`ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输入产品流：Sodium hypochlorite（`cleaning_sodium_hypochlorite`）

本卡将“Sodium hypochlorite”作为“清洗、消毒与场内热力公用工程”过程的一项独立输入产品流交换记录；不得与其他物理或化学流合并。本卡只对应一种明确载体或化学物质。

- 选定流：Sodium hypochlorite
- 流属性/单位：Mass / kg
- 数量规则：依据化学品库存、领用和投加记录，分别记录“Sodium hypochlorite”的实际质量，并保持物质身份。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门净合格牛可食内脏
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cleaning_inputs`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录仪器分辨率、校准状态、缺失记录及批次归属不确定性。
- 适用性：条件适用；仅在场址实际发生“Sodium hypochlorite”交换并有相应记录时纳入。
- 来源：`ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

###### 输出废物流：Routine cattle-offal cleaning wastewater（`cleaning_routine_wastewater`）

本卡将“Routine cattle-offal cleaning wastewater”作为“清洗、消毒与场内热力公用工程”过程的一项独立输出废物流交换记录；不得与其他物理或化学流合并。

- 选定流：Routine cattle-offal cleaning wastewater
- 流属性/单位：Volume / m3
- 数量规则：使用专用流量计分别记录“Routine cattle-offal cleaning wastewater”的批次体积，并保留仪表边界、时间和去向记录。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门净合格牛可食内脏
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cleaning_wastewater`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录仪器分辨率、校准状态、缺失记录及批次归属不确定性。
- 适用性：当场址发生“Routine cattle-offal cleaning wastewater”交换时必须记录。
- 来源：`ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输出废物流：High-organic-load cattle-offal cleaning wastewater（`cleaning_high_load_wastewater`）

本卡将“High-organic-load cattle-offal cleaning wastewater”作为“清洗、消毒与场内热力公用工程”过程的一项独立输出废物流交换记录；不得与其他物理或化学流合并。

- 选定流：High-organic-load cattle-offal cleaning wastewater
- 流属性/单位：Volume / m3
- 数量规则：使用专用流量计，或依据同期匹配的供水、滞留、回收及转移记录计算“High-organic-load cattle-offal cleaning wastewater”体积，并保留水量平衡。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门净合格牛可食内脏
- 基准类型：参考流（`reference_flow`）
- 证据类型：从采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_cleaning_wastewater`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录输入记录不确定性、计算假设、因子来源及分配不确定性。
- 适用性：条件适用；仅在场址实际发生“High-organic-load cattle-offal cleaning wastewater”交换并有相应记录时纳入。
- 来源：`ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

##### 基本流

###### 输出基本流：Carbon dioxide, fossil, to air（`combustion_co2_fossil_to_air`）

本卡将“Carbon dioxide, fossil, to air”作为“清洗、消毒与场内热力公用工程”过程的一项独立输出基本流交换记录；不得与其他物理或化学流合并。本卡只对应一个具名物质或监测参数及一个环境介质。

- 选定流：Carbon dioxide, fossil, to air
- 流属性/单位：Mass / kg
- 数量规则：使用同期实测排气流量与物质浓度，或对实测活动量应用经核实的设备特定因子，逐物质计算“Carbon dioxide, fossil, to air”质量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门净合格牛可食内脏
- 基准类型：参考流（`reference_flow`）
- 证据类型：从采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_combustion_releases`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录输入记录不确定性、计算假设、因子来源及分配不确定性。
- 适用性：条件适用；仅在场址实际发生“Carbon dioxide, fossil, to air”交换并有相应记录时纳入。
- 来源：`ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输出基本流：Nitrogen monoxide to air（`combustion_nitrogen_monoxide_to_air`）

本卡将“Nitrogen monoxide to air”作为“清洗、消毒与场内热力公用工程”过程的一项独立输出基本流交换记录；不得与其他物理或化学流合并。本卡只对应一个具名物质或监测参数及一个环境介质。

- 选定流：Nitrogen monoxide to air
- 流属性/单位：Mass / kg
- 数量规则：使用同期实测排气流量与物质浓度，或对实测活动量应用经核实的设备特定因子，逐物质计算“Nitrogen monoxide to air”质量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门净合格牛可食内脏
- 基准类型：参考流（`reference_flow`）
- 证据类型：从采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_combustion_releases`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录输入记录不确定性、计算假设、因子来源及分配不确定性。
- 适用性：条件适用；仅在场址实际发生“Nitrogen monoxide to air”交换并有相应记录时纳入。
- 来源：`ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输出基本流：Nitrogen dioxide to air（`combustion_nitrogen_dioxide_to_air`）

本卡将“Nitrogen dioxide to air”作为“清洗、消毒与场内热力公用工程”过程的一项独立输出基本流交换记录；不得与其他物理或化学流合并。本卡只对应一个具名物质或监测参数及一个环境介质。

- 选定流：Nitrogen dioxide to air
- 流属性/单位：Mass / kg
- 数量规则：使用同期实测排气流量与物质浓度，或对实测活动量应用经核实的设备特定因子，逐物质计算“Nitrogen dioxide to air”质量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门净合格牛可食内脏
- 基准类型：参考流（`reference_flow`）
- 证据类型：从采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_combustion_releases`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录输入记录不确定性、计算假设、因子来源及分配不确定性。
- 适用性：条件适用；仅在场址实际发生“Nitrogen dioxide to air”交换并有相应记录时纳入。
- 来源：`ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输出基本流：Sulfur dioxide to air（`combustion_sulfur_dioxide_to_air`）

本卡将“Sulfur dioxide to air”作为“清洗、消毒与场内热力公用工程”过程的一项独立输出基本流交换记录；不得与其他物理或化学流合并。本卡只对应一个具名物质或监测参数及一个环境介质。

- 选定流：Sulfur dioxide to air
- 流属性/单位：Mass / kg
- 数量规则：使用同期实测排气流量与物质浓度，或对实测活动量应用经核实的设备特定因子，逐物质计算“Sulfur dioxide to air”质量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门净合格牛可食内脏
- 基准类型：参考流（`reference_flow`）
- 证据类型：从采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_combustion_releases`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录输入记录不确定性、计算假设、因子来源及分配不确定性。
- 适用性：条件适用；仅在场址实际发生“Sulfur dioxide to air”交换并有相应记录时纳入。
- 来源：`ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输出基本流：Particulate matter below 2.5 micrometres to air（`combustion_pm25_to_air`）

本卡将“Particulate matter below 2.5 micrometres to air”作为“清洗、消毒与场内热力公用工程”过程的一项独立输出基本流交换记录；不得与其他物理或化学流合并。本卡只对应一个具名物质或监测参数及一个环境介质。

- 选定流：Particulate matter below 2.5 micrometres to air
- 流属性/单位：Mass / kg
- 数量规则：使用同期实测排气流量与物质浓度，或对实测活动量应用经核实的设备特定因子，逐物质计算“Particulate matter below 2.5 micrometres to air”质量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门净合格牛可食内脏
- 基准类型：参考流（`reference_flow`）
- 证据类型：从采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_combustion_releases`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录输入记录不确定性、计算假设、因子来源及分配不确定性。
- 适用性：条件适用；仅在场址实际发生“Particulate matter below 2.5 micrometres to air”交换并有相应记录时纳入。
- 来源：`ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输出基本流：Particulate matter from 2.5 to 10 micrometres to air（`combustion_pm_coarse_to_air`）

本卡将“Particulate matter from 2.5 to 10 micrometres to air”作为“清洗、消毒与场内热力公用工程”过程的一项独立输出基本流交换记录；不得与其他物理或化学流合并。本卡只对应一个具名物质或监测参数及一个环境介质。

- 选定流：Particulate matter from 2.5 to 10 micrometres to air
- 流属性/单位：Mass / kg
- 数量规则：使用同期实测排气流量与物质浓度，或对实测活动量应用经核实的设备特定因子，逐物质计算“Particulate matter from 2.5 to 10 micrometres to air”质量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门净合格牛可食内脏
- 基准类型：参考流（`reference_flow`）
- 证据类型：从采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_combustion_releases`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录输入记录不确定性、计算假设、因子来源及分配不确定性。
- 适用性：条件适用；仅在场址实际发生“Particulate matter from 2.5 to 10 micrometres to air”交换并有相应记录时纳入。
- 来源：`ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

### 过程：场内牛内脏废水处理（`onsite_wastewater_treatment`）

#### 输入

##### 产品流

###### 输入产品流：Electricity, grid supply（`wwtp_electricity`）

本卡将“Electricity, grid supply”作为“场内牛内脏废水处理”过程的一项独立输入产品流交换记录；不得与其他物理或化学流合并。

- 选定流：Electricity, grid supply
- 流属性/单位：Energy / kWh
- 数量规则：记录“Electricity, grid supply”对应阶段的分表读数；共享电量仅以有文件记录的设备活动、停留或占用驱动因素计算批次份额。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门净合格牛可食内脏
- 基准类型：参考流（`reference_flow`）
- 证据类型：从采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_wwtp_inputs`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录输入记录不确定性、计算假设、因子来源及分配不确定性。
- 适用性：条件适用；仅在场址实际发生“Electricity, grid supply”交换并有相应记录时纳入。
- 来源：`ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输入产品流：Process water（`wwtp_process_water`）

本卡将“Process water”作为“场内牛内脏废水处理”过程的一项独立输入产品流交换记录；不得与其他物理或化学流合并。

- 选定流：Process water
- 流属性/单位：Volume / m3
- 数量规则：使用专用流量计分别记录“Process water”的批次体积，并保留仪表边界、时间和去向记录。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门净合格牛可食内脏
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wwtp_inputs`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录仪器分辨率、校准状态、缺失记录及批次归属不确定性。
- 适用性：条件适用；仅在场址实际发生“Process water”交换并有相应记录时纳入。
- 来源：`ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输入产品流：Calcium hydroxide（`wwtp_calcium_hydroxide`）

本卡将“Calcium hydroxide”作为“场内牛内脏废水处理”过程的一项独立输入产品流交换记录；不得与其他物理或化学流合并。本卡只对应一种明确载体或化学物质。

- 选定流：Calcium hydroxide
- 流属性/单位：Mass / kg
- 数量规则：依据化学品库存、领用和投加记录，分别记录“Calcium hydroxide”的实际质量，并保持物质身份。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门净合格牛可食内脏
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wwtp_inputs`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录仪器分辨率、校准状态、缺失记录及批次归属不确定性。
- 适用性：条件适用；仅在场址实际发生“Calcium hydroxide”交换并有相应记录时纳入。
- 来源：`ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输入产品流：Aluminium sulfate（`wwtp_aluminium_sulfate`）

本卡将“Aluminium sulfate”作为“场内牛内脏废水处理”过程的一项独立输入产品流交换记录；不得与其他物理或化学流合并。本卡只对应一种明确载体或化学物质。

- 选定流：Aluminium sulfate
- 流属性/单位：Mass / kg
- 数量规则：依据化学品库存、领用和投加记录，分别记录“Aluminium sulfate”的实际质量，并保持物质身份。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门净合格牛可食内脏
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wwtp_inputs`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录仪器分辨率、校准状态、缺失记录及批次归属不确定性。
- 适用性：条件适用；仅在场址实际发生“Aluminium sulfate”交换并有相应记录时纳入。
- 来源：`ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输入产品流：Ferric chloride（`wwtp_ferric_chloride`）

本卡将“Ferric chloride”作为“场内牛内脏废水处理”过程的一项独立输入产品流交换记录；不得与其他物理或化学流合并。本卡只对应一种明确载体或化学物质。

- 选定流：Ferric chloride
- 流属性/单位：Mass / kg
- 数量规则：依据化学品库存、领用和投加记录，分别记录“Ferric chloride”的实际质量，并保持物质身份。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门净合格牛可食内脏
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wwtp_inputs`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录仪器分辨率、校准状态、缺失记录及批次归属不确定性。
- 适用性：条件适用；仅在场址实际发生“Ferric chloride”交换并有相应记录时纳入。
- 来源：`ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

##### 废物流

###### 输入废物流：Routine cattle-offal wastewater（`wwtp_routine_wastewater_input`）

本卡将“Routine cattle-offal wastewater”作为“场内牛内脏废水处理”过程的一项独立输入废物流交换记录；不得与其他物理或化学流合并。

- 选定流：Routine cattle-offal wastewater
- 流属性/单位：Volume / m3
- 数量规则：使用专用流量计，或依据同期匹配的供水、滞留、回收及转移记录计算“Routine cattle-offal wastewater”体积，并保留水量平衡。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门净合格牛可食内脏
- 基准类型：参考流（`reference_flow`）
- 证据类型：从采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_wwtp_inputs`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录输入记录不确定性、计算假设、因子来源及分配不确定性。
- 适用性：条件适用；仅在场址实际发生“Routine cattle-offal wastewater”交换并有相应记录时纳入。
- 来源：`ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输入废物流：High-organic-load cattle-offal wastewater（`wwtp_high_load_wastewater_input`）

本卡将“High-organic-load cattle-offal wastewater”作为“场内牛内脏废水处理”过程的一项独立输入废物流交换记录；不得与其他物理或化学流合并。

- 选定流：High-organic-load cattle-offal wastewater
- 流属性/单位：Volume / m3
- 数量规则：使用专用流量计，或依据同期匹配的供水、滞留、回收及转移记录计算“High-organic-load cattle-offal wastewater”体积，并保留水量平衡。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门净合格牛可食内脏
- 基准类型：参考流（`reference_flow`）
- 证据类型：从采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_wwtp_inputs`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录输入记录不确定性、计算假设、因子来源及分配不确定性。
- 适用性：条件适用；仅在场址实际发生“High-organic-load cattle-offal wastewater”交换并有相应记录时纳入。
- 来源：`ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

##### 基本流

#### 输出

##### 产品流

###### 输出产品流：Reclaimed process water（`wwtp_reclaimed_water`）

本卡将“Reclaimed process water”作为“场内牛内脏废水处理”过程的一项独立输出产品流交换记录；不得与其他物理或化学流合并。

- 选定流：Reclaimed process water
- 流属性/单位：Volume / m3
- 数量规则：使用专用流量计分别记录“Reclaimed process water”的批次体积，并保留仪表边界、时间和去向记录。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门净合格牛可食内脏
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wwtp_outputs`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录仪器分辨率、校准状态、缺失记录及批次归属不确定性。
- 适用性：条件适用；仅在场址实际发生“Reclaimed process water”交换并有相应记录时纳入。
- 来源：`ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

##### 废物流

###### 输出废物流：Treated cattle-offal wastewater to sewer（`wwtp_treated_wastewater_to_sewer`）

本卡将“Treated cattle-offal wastewater to sewer”作为“场内牛内脏废水处理”过程的一项独立输出废物流交换记录；不得与其他物理或化学流合并。

- 选定流：Treated cattle-offal wastewater to sewer
- 流属性/单位：Volume / m3
- 数量规则：使用专用流量计分别记录“Treated cattle-offal wastewater to sewer”的批次体积，并保留仪表边界、时间和去向记录。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门净合格牛可食内脏
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wwtp_outputs`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录仪器分辨率、校准状态、缺失记录及批次归属不确定性。
- 适用性：条件适用；仅在场址实际发生“Treated cattle-offal wastewater to sewer”交换并有相应记录时纳入。
- 来源：`ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输出废物流：Cattle-offal wastewater screening solids（`wwtp_screening_solids`）

本卡将“Cattle-offal wastewater screening solids”作为“场内牛内脏废水处理”过程的一项独立输出废物流交换记录；不得与其他物理或化学流合并。

- 选定流：Cattle-offal wastewater screening solids
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、容器皮重或专用台账，分别记录“Cattle-offal wastewater screening solids”的实际质量及去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门净合格牛可食内脏
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wwtp_outputs`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录仪器分辨率、校准状态、缺失记录及批次归属不确定性。
- 适用性：条件适用；仅在场址实际发生“Cattle-offal wastewater screening solids”交换并有相应记录时纳入。
- 来源：`ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输出废物流：Cattle-offal wastewater grease skim（`wwtp_grease_skim`）

本卡将“Cattle-offal wastewater grease skim”作为“场内牛内脏废水处理”过程的一项独立输出废物流交换记录；不得与其他物理或化学流合并。

- 选定流：Cattle-offal wastewater grease skim
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、容器皮重或专用台账，分别记录“Cattle-offal wastewater grease skim”的实际质量及去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门净合格牛可食内脏
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wwtp_outputs`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录仪器分辨率、校准状态、缺失记录及批次归属不确定性。
- 适用性：条件适用；仅在场址实际发生“Cattle-offal wastewater grease skim”交换并有相应记录时纳入。
- 来源：`ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输出废物流：Cattle-offal biological wastewater sludge（`wwtp_biological_sludge`）

本卡将“Cattle-offal biological wastewater sludge”作为“场内牛内脏废水处理”过程的一项独立输出废物流交换记录；不得与其他物理或化学流合并。

- 选定流：Cattle-offal biological wastewater sludge
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、容器皮重或专用台账，分别记录“Cattle-offal biological wastewater sludge”的实际质量及去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门净合格牛可食内脏
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wwtp_outputs`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录仪器分辨率、校准状态、缺失记录及批次归属不确定性。
- 适用性：条件适用；仅在场址实际发生“Cattle-offal biological wastewater sludge”交换并有相应记录时纳入。
- 来源：`ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输出废物流：Cattle-offal chemical precipitation sludge（`wwtp_chemical_sludge`）

本卡将“Cattle-offal chemical precipitation sludge”作为“场内牛内脏废水处理”过程的一项独立输出废物流交换记录；不得与其他物理或化学流合并。

- 选定流：Cattle-offal chemical precipitation sludge
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、容器皮重或专用台账，分别记录“Cattle-offal chemical precipitation sludge”的实际质量及去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门净合格牛可食内脏
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wwtp_outputs`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录仪器分辨率、校准状态、缺失记录及批次归属不确定性。
- 适用性：条件适用；仅在场址实际发生“Cattle-offal chemical precipitation sludge”交换并有相应记录时纳入。
- 来源：`ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

##### 基本流

###### 输出基本流：Chemical oxygen demand to surface water（`wwtp_cod_to_water`）

本卡将“Chemical oxygen demand to surface water”作为“场内牛内脏废水处理”过程的一项独立输出基本流交换记录；不得与其他物理或化学流合并。本卡只对应一个具名物质或监测参数及一个环境介质。

- 选定流：Chemical oxygen demand to surface water
- 流属性/单位：Mass / kg
- 数量规则：用同期匹配的最终出水体积与“Chemical oxygen demand to surface water”实测浓度计算排放质量，并保存单位换算和检测记录。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门净合格牛可食内脏
- 基准类型：参考流（`reference_flow`）
- 证据类型：从采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_water_discharge`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录输入记录不确定性、计算假设、因子来源及分配不确定性。
- 适用性：条件适用；仅在场址实际发生“Chemical oxygen demand to surface water”交换并有相应记录时纳入。
- 来源：`ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输出基本流：Five-day biochemical oxygen demand to surface water（`wwtp_bod5_to_water`）

本卡将“Five-day biochemical oxygen demand to surface water”作为“场内牛内脏废水处理”过程的一项独立输出基本流交换记录；不得与其他物理或化学流合并。本卡只对应一个具名物质或监测参数及一个环境介质。

- 选定流：Five-day biochemical oxygen demand to surface water
- 流属性/单位：Mass / kg
- 数量规则：用同期匹配的最终出水体积与“Five-day biochemical oxygen demand to surface water”实测浓度计算排放质量，并保存单位换算和检测记录。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门净合格牛可食内脏
- 基准类型：参考流（`reference_flow`）
- 证据类型：从采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_water_discharge`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录输入记录不确定性、计算假设、因子来源及分配不确定性。
- 适用性：条件适用；仅在场址实际发生“Five-day biochemical oxygen demand to surface water”交换并有相应记录时纳入。
- 来源：`ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输出基本流：Total nitrogen to surface water（`wwtp_total_nitrogen_to_water`）

本卡将“Total nitrogen to surface water”作为“场内牛内脏废水处理”过程的一项独立输出基本流交换记录；不得与其他物理或化学流合并。本卡只对应一个具名物质或监测参数及一个环境介质。

- 选定流：Total nitrogen to surface water
- 流属性/单位：Mass / kg
- 数量规则：用同期匹配的最终出水体积与“Total nitrogen to surface water”实测浓度计算排放质量，并保存单位换算和检测记录。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门净合格牛可食内脏
- 基准类型：参考流（`reference_flow`）
- 证据类型：从采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_water_discharge`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录输入记录不确定性、计算假设、因子来源及分配不确定性。
- 适用性：条件适用；仅在场址实际发生“Total nitrogen to surface water”交换并有相应记录时纳入。
- 来源：`ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输出基本流：Total phosphorus to surface water（`wwtp_total_phosphorus_to_water`）

本卡将“Total phosphorus to surface water”作为“场内牛内脏废水处理”过程的一项独立输出基本流交换记录；不得与其他物理或化学流合并。本卡只对应一个具名物质或监测参数及一个环境介质。

- 选定流：Total phosphorus to surface water
- 流属性/单位：Mass / kg
- 数量规则：用同期匹配的最终出水体积与“Total phosphorus to surface water”实测浓度计算排放质量，并保存单位换算和检测记录。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门净合格牛可食内脏
- 基准类型：参考流（`reference_flow`）
- 证据类型：从采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_water_discharge`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录输入记录不确定性、计算假设、因子来源及分配不确定性。
- 适用性：条件适用；仅在场址实际发生“Total phosphorus to surface water”交换并有相应记录时纳入。
- 来源：`ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输出基本流：Total suspended solids to surface water（`wwtp_tss_to_water`）

本卡将“Total suspended solids to surface water”作为“场内牛内脏废水处理”过程的一项独立输出基本流交换记录；不得与其他物理或化学流合并。本卡只对应一个具名物质或监测参数及一个环境介质。

- 选定流：Total suspended solids to surface water
- 流属性/单位：Mass / kg
- 数量规则：用同期匹配的最终出水体积与“Total suspended solids to surface water”实测浓度计算排放质量，并保存单位换算和检测记录。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门净合格牛可食内脏
- 基准类型：参考流（`reference_flow`）
- 证据类型：从采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_water_discharge`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录输入记录不确定性、计算假设、因子来源及分配不确定性。
- 适用性：条件适用；仅在场址实际发生“Total suspended solids to surface water”交换并有相应记录时纳入。
- 来源：`ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输出基本流：Ammonia to air（`wwtp_ammonia_to_air`）

本卡将“Ammonia to air”作为“场内牛内脏废水处理”过程的一项独立输出基本流交换记录；不得与其他物理或化学流合并。本卡只对应一个具名物质或监测参数及一个环境介质。

- 选定流：Ammonia to air
- 流属性/单位：Mass / kg
- 数量规则：使用同期实测排气流量与物质浓度，或对实测活动量应用经核实的设备特定因子，逐物质计算“Ammonia to air”质量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门净合格牛可食内脏
- 基准类型：参考流（`reference_flow`）
- 证据类型：从采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_wwtp_air`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录输入记录不确定性、计算假设、因子来源及分配不确定性。
- 适用性：条件适用；仅在场址实际发生“Ammonia to air”交换并有相应记录时纳入。
- 来源：`ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输出基本流：Hydrogen sulfide to air（`wwtp_hydrogen_sulfide_to_air`）

本卡将“Hydrogen sulfide to air”作为“场内牛内脏废水处理”过程的一项独立输出基本流交换记录；不得与其他物理或化学流合并。本卡只对应一个具名物质或监测参数及一个环境介质。

- 选定流：Hydrogen sulfide to air
- 流属性/单位：Mass / kg
- 数量规则：使用同期实测排气流量与物质浓度，或对实测活动量应用经核实的设备特定因子，逐物质计算“Hydrogen sulfide to air”质量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门净合格牛可食内脏
- 基准类型：参考流（`reference_flow`）
- 证据类型：从采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_wwtp_air`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录输入记录不确定性、计算假设、因子来源及分配不确定性。
- 适用性：条件适用；仅在场址实际发生“Hydrogen sulfide to air”交换并有相应记录时纳入。
- 来源：`ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_avoid` | 多输出屠宰与制备 | 首先通过过程细分，以及对胴体、每个器官、共产品、公用工程和废物流的直接计量来避免分配。 | `eu-2021-2279-environmental-footprint` |
| `allocation_expand` | 具有额外功能的共产品 | 若过程细分不能解析共产品功能，应先研究透明的系统扩展，再分摊负荷。 | `eu-2021-2279-environmental-footprint` |
| `allocation_physical` | 剩余多输出过程 | 仍需分配时，使用能够反映投入使用与产出形成因果关系且有文件记录的物理关系。 | `eu-2021-2279-environmental-footprint` |
| `allocation_economic` | 仍未解决的关系 | 仅当细分、系统扩展和相关物理关系均不可辩护时使用经济分配；采用同期场址记录并披露敏感性。 | `eu-2021-2279-environmental-footprint` |
| `allocation_status` | 每项胴体、皮、血、脂肪、器官、水和残余物流 | 分配前依据质量、法律状态和去向证据确定产品或废物状态；同一数量不得同时赋予两种状态。 | `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint` |
| `allocation_composition` | 参考产品器官组分 | 器官组分因装配为一个申报参考产品而不在组分间分配负荷；各自实测质量构成产品组成。 | `eu-2021-2279-environmental-footprint` |
| `allocation_waste` | 废物处理 | 除非所选 LCA 方法及有据可查的接收功能要求，否则不对废物去向给予抵扣；必须披露建模选择。 | `eu-2021-2279-environmental-footprint` |
| `allocation_consistency` | 全部过程连接 | 不得重复计算器官中间转移、外购热及其上游燃料、制冷剂补充与无关损失，或废水输出与同一处理输入。 | `eu-2021-2279-environmental-footprint` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_receiving_records` | `cattle_receiving` | 活牛、接收公用工程、合格转移、粪便与待宰圈废水 | 经校准的现场记录、台账与检测记录 | timestamp; lot_id; meter_or_scale_id; opening_reading; closing_reading; gross_mass; tare_mass; destination | 按 row_id 将每项原子交换与批次、仪表、库存、检测或去向记录关联，并完成独立对账。 | kg; m3; kWh | 每批 | 完整研究期 | 活牛接收与验收范围内的实际设备、作业区或排放点 | 每个 row_id 独立汇总一次；共享量只按有文件记录的驱动因素分配，不得合并不同交换 | 校准证明；原始记录；去向或质量证据；对账与计算复核 |
| `cp_separation_inputs` | `slaughter_offal_separation` | 验收合格牛、分离线电力与工艺水 | 经校准的现场记录、台账与检测记录 | timestamp; lot_id; source_process; meter_id; opening_reading; closing_reading | 按 row_id 将每项原子交换与批次、仪表、库存、检测或去向记录关联，并完成独立对账。 | kg; kWh; m3 | 每批 | 完整研究期 | 屠宰、去内脏与可食内脏分离范围内的实际设备、作业区或排放点 | 每个 row_id 独立汇总一次；共享量只按有文件记录的驱动因素分配，不得合并不同交换 | 校准证明；原始记录；去向或质量证据；对账与计算复核 |
| `cp_separation_outputs` | `slaughter_offal_separation` | 胴体、共产品、器官中间流、残余物与屠宰废水 | 经校准的现场记录、台账与检测记录 | timestamp; lot_id; row_id; gross_mass; tare_mass; destination; legal_status; flow_reading | 按 row_id 将每项原子交换与批次、仪表、库存、检测或去向记录关联，并完成独立对账。 | kg; m3 | 每批 | 完整研究期 | 屠宰、去内脏与可食内脏分离范围内的实际设备、作业区或排放点 | 每个 row_id 独立汇总一次；共享量只按有文件记录的驱动因素分配，不得合并不同交换 | 校准证明；原始记录；去向或质量证据；对账与计算复核 |
| `cp_slaughter_air` | `slaughter_offal_separation` | 氨与硫化氢直接空气排放 | 经校准的现场记录、台账与检测记录 | timestamp; operating_state; exhaust_flow; substance; concentration; method; detection_limit | 按 row_id 将每项原子交换与批次、仪表、库存、检测或去向记录关联，并完成独立对账。 | kg | 监测活动及重大变化时 | 完整研究期 | 屠宰、去内脏与可食内脏分离范围内的实际设备、作业区或排放点 | 每个 row_id 独立汇总一次；共享量只按有文件记录的驱动因素分配，不得合并不同交换 | 校准证明；原始记录；去向或质量证据；对账与计算复核 |
| `cp_preparation_inputs` | `offal_preparation` | 未修整器官输入、制备用电与清洗水 | 经校准的现场记录、台账与检测记录 | timestamp; lot_id; organ_identity; mass; meter_id; opening_reading; closing_reading | 按 row_id 将每项原子交换与批次、仪表、库存、检测或去向记录关联，并完成独立对账。 | kg; kWh; m3 | 每批 | 完整研究期 | 按器官分别修整、清洗与检验范围内的实际设备、作业区或排放点 | 每个 row_id 独立汇总一次；共享量只按有文件记录的驱动因素分配，不得合并不同交换 | 校准证明；原始记录；去向或质量证据；对账与计算复核 |
| `cp_organ_components` | `offal_preparation` | 鲜器官组分、器官特定修整废物与清洗废水 | 经校准的现场记录、台账与检测记录 | timestamp; lot_id; organ_identity; accepted_mass; rejected_mass; market_state; destination | 按 row_id 将每项原子交换与批次、仪表、库存、检测或去向记录关联，并完成独立对账。 | kg; m3 | 每批 | 完整研究期 | 按器官分别修整、清洗与检验范围内的实际设备、作业区或排放点 | 每个 row_id 独立汇总一次；共享量只按有文件记录的驱动因素分配，不得合并不同交换 | 校准证明；原始记录；去向或质量证据；对账与计算复核 |
| `cp_conditioning_records` | `temperature_conditioning` | 鲜输入、冷藏输出、冷冻输出、冷系统公用工程与含水废物 | 经校准的现场记录、台账与检测记录 | timestamp; lot_id; organ_identity; market_state; mass; meter_reading; temperature; residence_time; drain_volume | 按 row_id 将每项原子交换与批次、仪表、库存、检测或去向记录关联，并完成独立对账。 | kg; kWh; m3 | 每批 | 完整研究期 | 条件性冷却与冻结范围内的实际设备、作业区或排放点 | 每个 row_id 独立汇总一次；共享量只按有文件记录的驱动因素分配，不得合并不同交换 | 校准证明；原始记录；去向或质量证据；对账与计算复核 |
| `cp_refrigerant_inventory` | `temperature_conditioning` | R717、R744 与 R290 补充和排放 | 经校准的现场记录、台账与检测记录 | date; circuit_id; refrigerant_code; opening_stock; receipts; closing_stock; recovered_mass; transferred_mass; leak_event | 按 row_id 将每项原子交换与批次、仪表、库存、检测或去向记录关联，并完成独立对账。 | kg | 每次维修事件及年度结算 | 完整研究期 | 条件性冷却与冻结范围内的实际设备、作业区或排放点 | 每个 row_id 独立汇总一次；共享量只按有文件记录的驱动因素分配，不得合并不同交换 | 校准证明；原始记录；去向或质量证据；对账与计算复核 |
| `cp_packaging_composition` | `packaging_storage_release` | 鲜、冷藏或冷冻器官组分输入 | 经校准的现场记录、台账与检测记录 | timestamp; lot_id; organ_identity; market_state; net_mass; composition_share | 按 row_id 将每项原子交换与批次、仪表、库存、检测或去向记录关联，并完成独立对账。 | kg | 每批 | 完整研究期 | 组成装配、包装、储存与放行范围内的实际设备、作业区或排放点 | 每个 row_id 独立汇总一次；共享量只按有文件记录的驱动因素分配，不得合并不同交换 | 校准证明；原始记录；去向或质量证据；对账与计算复核 |
| `cp_packaging_bom` | `packaging_storage_release` | 每个包装组件 | 经校准的现场记录、台账与检测记录 | lot_id; component_identity; issued_mass; returned_mass; count; unit_mass; reuse_cycles | 按 row_id 将每项原子交换与批次、仪表、库存、检测或去向记录关联，并完成独立对账。 | kg | 每批 | 完整研究期 | 组成装配、包装、储存与放行范围内的实际设备、作业区或排放点 | 每个 row_id 独立汇总一次；共享量只按有文件记录的驱动因素分配，不得合并不同交换 | 校准证明；原始记录；去向或质量证据；对账与计算复核 |
| `cp_packaging_release` | `packaging_storage_release` | 包装和储存用电及参考产品输出 | 经校准的现场记录、台账与检测记录 | timestamp; lot_id; market_state; output_net_mass; meter_reading; storage_duration; release_status | 按 row_id 将每项原子交换与批次、仪表、库存、检测或去向记录关联，并完成独立对账。 | kg; kWh | 每批 | 完整研究期 | 组成装配、包装、储存与放行范围内的实际设备、作业区或排放点 | 每个 row_id 独立汇总一次；共享量只按有文件记录的驱动因素分配，不得合并不同交换 | 校准证明；原始记录；去向或质量证据；对账与计算复核 |
| `cp_packaging_waste` | `packaging_storage_release` | 器官特定不合格品与每项包装废物 | 经校准的现场记录、台账与检测记录 | timestamp; lot_id; row_id; organ_identity; gross_mass; tare_mass; count; destination | 按 row_id 将每项原子交换与批次、仪表、库存、检测或去向记录关联，并完成独立对账。 | kg | 每批 | 完整研究期 | 组成装配、包装、储存与放行范围内的实际设备、作业区或排放点 | 每个 row_id 独立汇总一次；共享量只按有文件记录的驱动因素分配，不得合并不同交换 | 校准证明；原始记录；去向或质量证据；对账与计算复核 |
| `cp_cleaning_inputs` | `cleaning_thermal_utilities` | 清洗用电、水、氢氧化钠与次氯酸钠 | 经校准的现场记录、台账与检测记录 | timestamp; lot_id; cycle_id; substance; issued_mass; concentration; meter_reading | 按 row_id 将每项原子交换与批次、仪表、库存、检测或去向记录关联，并完成独立对账。 | kg; m3; kWh | 每个卫生周期 | 完整研究期 | 清洗、消毒与场内热力公用工程范围内的实际设备、作业区或排放点 | 每个 row_id 独立汇总一次；共享量只按有文件记录的驱动因素分配，不得合并不同交换 | 校准证明；原始记录；去向或质量证据；对账与计算复核 |
| `cp_thermal_utility` | `cleaning_thermal_utilities` | 外购蒸汽、外购热水、天然气、柴油与液化石油气 | 经校准的现场记录、台账与检测记录 | timestamp; lot_id; carrier_identity; quantity; temperature; pressure; heating_value; meter_id | 按 row_id 将每项原子交换与批次、仪表、库存、检测或去向记录关联，并完成独立对账。 | MJ | 每个卫生周期及月度结算 | 完整研究期 | 清洗、消毒与场内热力公用工程范围内的实际设备、作业区或排放点 | 每个 row_id 独立汇总一次；共享量只按有文件记录的驱动因素分配，不得合并不同交换 | 校准证明；原始记录；去向或质量证据；对账与计算复核 |
| `cp_cleaning_wastewater` | `cleaning_thermal_utilities` | 常规与高有机负荷清洗废水 | 经校准的现场记录、台账与检测记录 | timestamp; lot_id; stream_identity; opening_reading; closing_reading; destination | 按 row_id 将每项原子交换与批次、仪表、库存、检测或去向记录关联，并完成独立对账。 | m3 | 每个卫生周期 | 完整研究期 | 清洗、消毒与场内热力公用工程范围内的实际设备、作业区或排放点 | 每个 row_id 独立汇总一次；共享量只按有文件记录的驱动因素分配，不得合并不同交换 | 校准证明；原始记录；去向或质量证据；对账与计算复核 |
| `cp_combustion_releases` | `cleaning_thermal_utilities` | 每种具名场内燃烧排放 | 经校准的现场记录、台账与检测记录 | timestamp; equipment_id; fuel_identity; fuel_quantity; substance; concentration_or_factor; factor_source | 按 row_id 将每项原子交换与批次、仪表、库存、检测或去向记录关联，并完成独立对账。 | kg | 监测活动及报告期 | 完整研究期 | 清洗、消毒与场内热力公用工程范围内的实际设备、作业区或排放点 | 每个 row_id 独立汇总一次；共享量只按有文件记录的驱动因素分配，不得合并不同交换 | 校准证明；原始记录；去向或质量证据；对账与计算复核 |
| `cp_wwtp_inputs` | `onsite_wastewater_treatment` | 废水输入、电力、水与每种处理药剂 | 经校准的现场记录、台账与检测记录 | timestamp; lot_id; stream_or_substance; meter_reading; issued_mass; concentration; treated_volume | 按 row_id 将每项原子交换与批次、仪表、库存、检测或去向记录关联，并完成独立对账。 | kg; m3; kWh | 每日及每次批次分配 | 完整研究期 | 场内牛内脏废水处理范围内的实际设备、作业区或排放点 | 每个 row_id 独立汇总一次；共享量只按有文件记录的驱动因素分配，不得合并不同交换 | 校准证明；原始记录；去向或质量证据；对账与计算复核 |
| `cp_wwtp_outputs` | `onsite_wastewater_treatment` | 回用水、下水道废水、筛渣、浮油与每种污泥 | 经校准的现场记录、台账与检测记录 | timestamp; row_id; volume; wet_mass; dry_matter; quality_result; destination | 按 row_id 将每项原子交换与批次、仪表、库存、检测或去向记录关联，并完成独立对账。 | kg; m3 | 每日及每次发运 | 完整研究期 | 场内牛内脏废水处理范围内的实际设备、作业区或排放点 | 每个 row_id 独立汇总一次；共享量只按有文件记录的驱动因素分配，不得合并不同交换 | 校准证明；原始记录；去向或质量证据；对账与计算复核 |
| `cp_water_discharge` | `onsite_wastewater_treatment` | COD、BOD5、总氮、总磷与总悬浮固体排放 | 经校准的现场记录、台账与检测记录 | timestamp; sample_id; effluent_volume; parameter; concentration; method; detection_limit | 按 row_id 将每项原子交换与批次、仪表、库存、检测或去向记录关联，并完成独立对账。 | kg | 许可监测频率及重大变化时 | 完整研究期 | 场内牛内脏废水处理范围内的实际设备、作业区或排放点 | 每个 row_id 独立汇总一次；共享量只按有文件记录的驱动因素分配，不得合并不同交换 | 校准证明；原始记录；去向或质量证据；对账与计算复核 |
| `cp_wwtp_air` | `onsite_wastewater_treatment` | 氨与硫化氢直接空气排放 | 经校准的现场记录、台账与检测记录 | timestamp; operating_state; exhaust_flow; substance; concentration; method; detection_limit | 按 row_id 将每项原子交换与批次、仪表、库存、检测或去向记录关联，并完成独立对账。 | kg | 监测活动及重大变化时 | 完整研究期 | 场内牛内脏废水处理范围内的实际设备、作业区或排放点 | 每个 row_id 独立汇总一次；共享量只按有文件记录的驱动因素分配，不得合并不同交换 | 校准证明；原始记录；去向或质量证据；对账与计算复核 |

### 计算规则

| rule_id | 适用对象 | 公式或规则 | 输入 | 输出 | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | 全部清单行 | 用归属于批次的交换量除以放行的净合格牛可食内脏质量。 | 批次归属交换量；放行的净参考产品质量 | 每 1 kg 参考产品的交换量 | `eu-2021-2279-environmental-footprint` |
| `calc_composition_sum` | 全部器官组分行 | 仅汇总一个申报市场状态下适用的器官特定组分质量，并与放行的净参考产品质量对账。 | 器官身份；器官净质量；市场状态；放行净质量 | 申报器官组成及组成质量平衡 | `eu-2021-2279-environmental-footprint` |
| `calc_stage_electricity` | 每个阶段电力行 | 优先使用阶段直表；共享电表用可审计的活动、停留时间或占用份额乘以总表量。 | 电表总量；活动量或占用量；批次放行质量 | 每参考流的阶段电力 | `eu-2021-2279-environmental-footprint` |
| `calc_mass_balance` | 牛、胴体、器官、共产品与废物质量行 | 将每个过程的实测输入质量与分别记录的产品和废物输出对账；调查而非摊销无法解释的不平衡。 | 输入质量；输出质量；水分或库存变化 | 有文件记录的过程质量平衡 | `ec-jrc-2024-sa-bref-jrc135916` |
| `calc_refrigerant_loss` | 每种制冷剂 | 对每个回路和物种，将期初库存加购入量与期末库存、回收量及有文件记录的转移量对账。 | 期初库存；购入量；期末库存；回收量；转移量；维修记录 | 制冷剂物种特定损失 | `ec-jrc-2024-sa-bref-jrc135916` |
| `calc_packaging_mass` | 每个包装组件 | 以领用质量减退回质量，或组件数量乘经核实的单件质量计算；仅可将有文件记录的重复使用周期用于可重复使用托盘。 | 领用质量；退回质量；数量；单件质量；重复使用台账 | 每参考流的组件质量 | `eu-2021-2279-environmental-footprint` |
| `calc_thermal_energy` | 每项外购热载体和场内燃料 | 使用同期温度、压力、密度或热值记录，将实测载体数量换算为交付能量。 | 实测载体数量；载体物性记录 | 每参考流的 MJ | `eu-2021-2279-environmental-footprint` |
| `calc_combustion_release` | 每种直接燃烧排放物质 | 有直接实测质量流时优先采用；否则对实测燃料应用经核实的设备特定因子并保留来源。 | 实测燃料；直接浓度与流量或经核实因子 | 每参考流排入空气的物质质量 | `eu-2021-2279-environmental-footprint` |
| `calc_wastewater_volume` | 每项废水流 | 使用专用流量计；采用计算时，只能从匹配的计量供水中扣除有文件记录的滞留、回收或蒸发水。 | 流量计记录或匹配的水量平衡记录 | 每参考流的 m3 废水 | `ec-jrc-2024-sa-bref-jrc135916` |
| `calc_water_release` | 每个直接水排放参数 | 将实测最终出水体积乘以同期实测浓度并换算单位，不得用限值代替测量值。 | 出水体积；参数浓度；单位换算 | 每参考流排入地表水的参数质量 | `ec-jrc-2024-sa-bref-jrc135916` |

### 数据质量要求

| requirement_id | 适用对象 | 要求 | 证据 |
| --- | --- | --- | --- |
| `dq_product_specific` | 参考产品与包装 | 使用产品特定的器官组成、市场状态、净质量、BoM、储存与放行记录。 | 批准的组成；BoM；签署的批次放行记录 |
| `dq_site_specific` | 前景运行 | 对报告设施运行的过程使用公司特定活动数据和直接排放数据。 | 仪表、秤、台账、实验室和维修记录 |
| `dq_state_identity` | 全部器官组分 | 参考产品只能申报鲜、冷藏或冷冻中的一种，并在每个适用组分行保持该状态。 | 温度记录；状态放行记录；组成表 |
| `dq_temporal` | 全部前景行 | 覆盖有代表性的生产期，并披露停机、维护、季节性储存及缺失区间。 | 覆盖说明；缺口登记；运行日历 |
| `dq_technology` | 温度调节、储存、热力公用工程与废水处理 | 识别实际设备、制冷剂物种、供热路线和处理配置。 | 设备登记；管线图；维修记录；过程流程图 |
| `dq_mass_balance` | 牛与器官转换 | 对账活牛、胴体、每个器官、共产品、残余物、废水相关固体和库存变化。 | 签署的质量平衡工作表及已调查残差 |
| `dq_meter_reconciliation` | 公用工程与废水 | 将分表与全厂仪表对账，并记录每项分配驱动因素。 | 仪表层级；校准记录；分配工作表 |
| `dq_destination` | 共产品与废物 | 保留去向、法律状态与接收证据，确保同一物理流不会同时成为产品和废物。 | 合同；发运单；检验或接收记录 |
| `dq_uuid` | 全部清单身份 | 仅在精确语义混合检索及公开 state=100 直接读取双重核验后使用 Tiangong UUID；未解决时保持 UUID 为空。 | 双重核验证据或 manifest 未解决条目 |
| `dq_uncertainty` | 全部清单行 | 记录测量分辨率、校准、缺失数据处理、因子来源及分配不确定性，不得虚构类别范围。 | 不确定性登记及计算复核 |
| `dq_completeness` | 完整清单 | 证明边界内器官组分、材料、能源、废物以及直接空气和水体交换均已覆盖。 | 过程流程图；行清单；输入输出对账 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validate_reference_uuid` | 参考流 | 要求 Product flow a6673976-2ef4-4502-b9f5-bbc57099bb40、Mass 93a60a56-a3c8-11da-a746-0800200b9a66、Units of mass 93a60a57-a4c8-11da-a746-0800200c9a66 及 kg。 | `un-cpc-3-0-structure-2025` |
| `validate_reference_amount` | 参考输出 | 要求恰好 1 kg 净合格牛可食内脏，且不计包装质量。 | `un-cpc-3-0-structure-2025` |
| `validate_scope` | 产品身份 | 拒绝水牛可食内脏及所有非牛物种。 | `un-cpc-3-0-structure-2025` |
| `validate_composition` | 参考组成 | 要求非空器官组成和器官特定实测质量；全部适用组分之和必须等于放行的净参考产品质量。 | `un-cpc-3-0-structure-2025`; `eu-2021-2279-environmental-footprint` |
| `validate_state` | 市场状态 | 必须且只能选择鲜、冷藏或冷冻中的一种；拒绝在一个参考产品中混用不同状态的组分行。 | `un-cpc-3-0-structure-2025` |
| `validate_additional_organs` | 器官身份 | 纳入尚无已编写行的牛器官时，新增一项器官特定输入行及一项输出行，不得使用残余类别代替。 | `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint` |
| `validate_boundary` | 过程覆盖 | 要求纳入全部必需过程，并记录温度调节与场内废水处理的纳入决定。 | `ec-jrc-2024-sa-bref-jrc135916` |
| `validate_atomic` | 清单行 | 每个 row_id 只允许一个具体物理或化学交换，并要求说明、数量规则、协议、不确定性、适用性和来源均非空。 | `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint` |
| `validate_selector_free` | 选定流 | 拒绝在选定流中使用集合标签或选择指令；器官、公用工程、燃料、制冷剂、化学品、包装、废物和排放保持分别记录。 | `eu-2021-2279-environmental-footprint` |
| `validate_official_or` | 参考产品选定流 | 仅允许官方 CPC 21151 参考产品的选定流使用单词 or；所有非参考选定流必须不含选择器。 | `un-cpc-3-0-structure-2025` |
| `validate_uuid` | 清单 UUID | 非参考 UUID 仅可在精确语义混合检索及公开 state=100 直接读取双重核验后接受；否则必须为空。 | `eu-2021-2279-environmental-footprint` |
| `validate_manifest_closure` | 未解决 UUID | 每个 UUID 为空的 row_id 必须在 manifest review_metadata 中恰好出现一次，并包含候选身份及拒绝原因。 | `eu-2021-2279-environmental-footprint` |
| `validate_value_mode` | 清单数量 | 仅允许由采集记录支持的 foreground_record 或 calculated_value；拒绝无依据编写的数量和类别默认范围。 | `eu-2021-2279-environmental-footprint` |
| `validate_mass_balance` | 物理输出 | 对账牛、胴体、每个器官、共产品、残余物、内容物、废水相关固体和库存变化，不得强制平衡。 | `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint` |
| `validate_heat_routes` | 热力输入 | 防止对同一热量重复记录外购蒸汽、外购热水和用于场内产热的燃料。 | `eu-2021-2279-environmental-footprint` |
| `validate_refrigerants` | 冷系统 | 按物种和回路识别每种实际制冷剂；发生损失时必须有各自的补充行与直接排放行。 | `ec-jrc-2024-sa-bref-jrc135916` |
| `validate_cleaning_agents` | 清洗 | 根据库存和投加记录分别识别每种清洗或消毒物质；每种新增物质都要增加原子行。 | `ec-jrc-2024-sa-bref-jrc135916` |
| `validate_packaging` | 包装 | 每个包装组件及其材料特定废物必须与产品 BoM 匹配，且包装质量不得计入参考产品质量。 | `eu-2021-2279-environmental-footprint` |
| `validate_destinations` | 共产品与废物 | 要求去向与状态证据，并禁止将同一物理数量同时赋给产品行与废物行。 | `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint` |
| `validate_wastewater` | 废水 | 区分常规与高有机负荷废水，并区分下水道转移、直接排入地表水及场内处理。 | `ec-jrc-2024-sa-bref-jrc135916` |
| `validate_air_releases` | 直接空气排放 | 要求逐物质计量或计算并保留因子来源；拒绝聚合燃烧排放或制冷剂排放行。 | `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint` |
| `validate_water_releases` | 直接水体排放 | 直接排放时，每个排放行均要求同期匹配的出水体积与参数浓度。 | `ec-jrc-2024-sa-bref-jrc135916` |
| `validate_sources` | 证据 | 仅使用列出的 UN CPC、EC JRC SA BREF 与欧盟委员会建议来源；UUID 查询不得作为数量证据。 | `un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint` |
| `validate_bilingual` | 双语记录 | 要求 en-US 与 zh-CN 中 process_id、direction、flow_type、row_id、UUID、受控 token、协议 id 和来源 id 序列顺序完全一致。 | `eu-2021-2279-environmental-footprint` |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | CPC 21151 牛可食内脏的设施特定前景数据包 |
| downstream_use | 构建并校验 Tiangong flow、process、lifecyclemodel 与 dataset 投影 |
| allowed_use | 已披露器官组成、单一市场状态、设施边界、技术与采集期时用于产品特定建模 |
| excluded_use | 类别默认清单；水牛可食内脏；非牛可食内脏；未申报器官组成；混合市场状态 |
| required_metadata | 设施地理；报告期；产量；批次定义；器官身份与组分质量；单一市场状态；净质量方法；屠宰与制备配置；温度调节技术；储存时长；供热路线；制冷剂物种；包装 BoM；共产品与废物去向；废水路线 |
| required_quality_disclosure | 仪表与秤校准；时间覆盖；缺失数据；计算输入；分配决定；器官及总质量平衡；不确定性；UUID 状态 |
| update_trigger | 产品范围、器官组成、市场状态、屠宰或制备配置、温度调节或储存技术、能源路线、制冷剂物种、包装 BoM、共产品去向、废水路线或证据来源发生变化 |

## 11. 数据源

| source_id | type | reference | used_for |
| --- | --- | --- | --- |
| `un-cpc-3-0-structure-2025` | 数据集（`dataset`） | United Nations Statistics Division, CPC Ver. 3.0 official page, https://unstats.un.org/unsd/classifications/Econ/CPC; retained raw structure `classifications/systems/cpc/3.0/raw/CPC_Ver_3.0_Structure_30Jun2025.csv` | 精确 CPC 21151 身份及鲜、冷藏或冷冻范围；排除 CPC 21152 水牛可食内脏 |
| `ec-jrc-2024-sa-bref-jrc135916` | 官方指南（`official_guidance`） | European Commission Joint Research Centre, Best Available Techniques Reference Document for the Slaughterhouses, Animal By-products and/or Edible Co-products Industries, JRC135916, 2024, DOI 10.2760/18199, https://publications.jrc.ec.europa.eu/repository/handle/JRC135916 | 屠宰与去内脏边界；可食共产品分离与制备；冷却与冻结；清洗；公用工程；制冷剂；残余物；废水；污泥；直接空气和水体排放 |
| `eu-2021-2279-environmental-footprint` | 官方指南（`official_guidance`） | Commission Recommendation (EU) 2021/2279, consolidated 30 December 2021, https://eur-lex.europa.eu/eli/reco/2021/2279/2021-12-30/eng | 产品特定组成与 BoM；公司特定制造数据；完整 LCI；分配层级；完整性、透明度、数据质量与核查 |
