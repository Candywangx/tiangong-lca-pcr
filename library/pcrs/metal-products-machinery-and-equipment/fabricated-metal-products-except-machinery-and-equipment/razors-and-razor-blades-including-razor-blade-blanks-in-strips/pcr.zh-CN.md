---
pcr_id: pcr.metal-products-machinery-and-equipment.fabricated-metal-products-except-machinery-and-equipment.razors-and-razor-blades-including-razor-blade-blanks-in-strips
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 剃须刀及其刀片（包括带状的刀片毛坯）

## 1. 范围与适用性

本 PCR 适用于未包装剃须刀、剃须刀刀头、成品剃须刀片及带状剃须刀片毛坯的门到门制造。范围涵盖外购刀片级钢带的成形、淬硬与回火、刃磨、清洗、可选刃口涂层，以及在申报产品为完整剃须刀或刀头时的壳体制造和总装。代表路线为马氏体不锈钢刀片，可选用 PTFE 低摩擦涂层和聚丙烯壳体。

钢、聚合物、化学品、水和电力的上游生产采用相匹配的背景数据集。零售包装、工厂大门后的配送、剃须辅助耗材、使用、刀片更换和寿命终止阶段不在范围内。电动剃须刀、电推剪、手术刀片、工业机器刀具以及单独供应的非剃须刀手柄均不适用。采用其他合金、涂层、壳体聚合物或制造技术的数据集，仅在每项实际交换均以具体物理或化学流表示且披露差异路线时仍属本 PCR 范围。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | `pcr.metal-products-machinery-and-equipment.fabricated-metal-products-except-machinery-and-equipment.razors-and-razor-blades-including-razor-blade-blanks-in-strips` |
| classification_refs | CPC 3.0 `42914`，剃须刀及其刀片（包括带状的刀片毛坯），精确的分类语境参考 |
| covered_products | 未包装安全剃须刀或剃须刀；剃须刀刀头；成品单刃、双刃或刀头用剃须刀片；带状剃须刀片毛坯 |
| excluded_products | 电动剃须刀和电推剪；手术刀片；工业切割刀具；单独供应的非剃须刀手柄；零售包装 |
| representative_product | 申报刀片数量、可选 PTFE 刃口涂层及可选聚丙烯壳体的马氏体不锈钢剃须刀片或剃须刀刀头 |
| production_route | 外购刀片级钢带 → 穿孔或冲压 → 淬硬与回火 → 磨削与珩磨 → 清洗 → 可选涂覆与固化 → 可选壳体成型与装配 → 检验和工厂大门放行 |
| market_state | 制造工厂大门处干燥、未包装、可销售的成品剃须刀、刀头或刀片，或可销售的带状刀片毛坯 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 制造一种已申报的剃须刀、剃须刀刀头、成品剃须刀片或带状剃须刀片毛坯 |
| How much | 工厂大门处 1 kg 未包装可销售产品净质量 |
| How well | 符合制造商针对所申报产品形态、尺寸、刃口几何形状、材料牌号、涂层状态和装配状态的放行规范 |
| How long or cycle | 一个完成至工厂大门放行的制造批次；不计入使用寿命或更换收益 |
| reference_flow_link | 下表的参考数量与产品流对象表示同一可销售净产出 |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 kg |
| 参考产品流 | 剃须刀及其刀片（包括带状的刀片毛坯） `6c5d6033-a2c9-40f0-bc7d-077549573ace` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 产品形态；适用时的刀片数量；刀片合金和牌号；毛坯、已刃磨或已装配状态；涂层材料和涂层状态；是否包含壳体或手柄及其聚合物；再生含量；制造地域；生产期间；净干质量基准；工厂大门定义 |

构建前景数据包时，`必需限定信息` 中的每项信息均须在数据集元数据、过程说明、参考流备注、产品说明或等效字段中申报。缺失限定信息时，参考流不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_net_mass` | 参考产品和归一化分母 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 采用最终检验后可销售未包装产品的净干质量。排除托盘、运输包装、临时载具和不合格品。 |
| `electricity_conversion` | 外购电力 | Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | 保留计量电量，必要时严格按 1 kWh = 3.6 MJ 转换；不得把燃料能量并入本行。 |
| `solution_active_mass` | 氢氧化钠和 PTFE 分散液 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 报告活性干物质质量。按收货溶液或分散液质量与批次特定浓度计算，并保留两个原始值。 |
| `wastewater_mass` | 清洗废水 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 优先直接计量质量。体积转质量须采用实测或供应商支持的密度，并保留体积、密度、温度和换算证据。 |

## 5. 系统边界

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `sb_foreground_operations` | 前景制造 | 纳入生产所申报参考产品所需的全部场内成形、热处理、刃磨、清洗、可选涂覆与固化、可选壳体成型与装配、检验、返工及直接控制的废物处理。 | `epo-ep2454056b1-2014`; `uspto-us11571827b2-2023` |
| `sb_upstream_inputs` | 外购投入 | 记录跨越场址边界的每项外购材料、化学品、水和电力流，并链接产品状态、地域、技术和再生含量相匹配的上游数据集。 |  |
| `sb_water_and_waste` | 水相清洗与表面处理 | 纳入工艺用水投入、使用碱性清洗时的氢氧化钠活性质量、清洗废水、内部循环和处理去向；保留场址水量平衡。 | `eu-jrc-sts-bref-2020` |
| `sb_exclusions` | 下游阶段 | 除非研究明确扩展边界并单列这些阶段，否则排除零售包装、配送、使用、更换频率、剃须耗材和寿命终止。 |  |

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 刀片级钢带以及所申报的壳体或涂层投入已运抵剃须刀产品制造场址 |
| starting_condition_role | 前景转换与装配过程的上游产品投入 |
| product_classification_scope | CPC 3.0 `42914` 范围内的剃须刀、剃须刀刀头、成品剃须刀片和带状剃须刀片毛坯 |
| recursive_input_rule | 同一产品类别的剃须刀片、刀片毛坯或刀头进入本过程时，应作为具有自身上游数据集的单独产品投入记录；不得并入参考产出或静默截断。 |
| upstream_dataset_requirement | 每项外购投入均须采用相匹配的上游数据集或供应商一手记录，并申报产品状态、材料牌号或配方、地域、技术、适用时的再生含量及交付边界。 |
| disclosure | 申报产品形态、刀片合金、涂层体系、壳体材料、所含装配件、制造路线、场址地域、生产期间、排除的操作、内部循环，以及质量和能源记录是否覆盖全部纳入操作。 |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `razor_product_manufacturing` | 剃须刀及剃须刀片制造 | required |  | 前景转换、精加工、可选壳体成型、装配、检验和工厂大门放行 | 1 kg 未包装可销售参考产品净质量 |

### 过程：剃须刀及剃须刀片制造（`razor_product_manufacturing`）

#### 输入

##### 产品流

###### 刀片级不锈钢带（`blade_steel_strip`）

外购冷轧马氏体不锈钢带进入成形、热处理和刃磨。须保留合金牌号、带材厚度、回火状态、供应商和再生含量；当前未确认精确的 Tiangong 流 UUID。

- 选定流：刀片级马氏体不锈钢带材
- 流属性/单位：Mass / kg
- 数量规则：计量纳入生产批次消耗的收货质量，扣除原样退回的库存
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 可销售参考产品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_blade_steel_strip`
- 来源：`epo-ep2454056b1-2014`

###### 制造用电力（`manufacturing_electricity`）

外购电力用于成形、电热处理、磨削、清洗、涂覆、成型、装配、通风及可直接归属的辅助设施。共用电表仅按获准计算规则分配。

- 选定流：电力 `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- 流属性/单位：Net calorific value / MJ
- 数量规则：计量归属于纳入批次的外购电力，必要时从 kWh 转换
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 可销售参考产品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_manufacturing_electricity`
- 来源：

###### 工艺用水（`process_water`）

工艺用水在水相清洗、漂洗、冷却及适用时的 PTFE 分散液配制中跨越边界。补充水与内部循环水须分开记录。

- 选定流：工艺用水 `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- 流属性/单位：Mass / kg
- 数量规则：计量供应给纳入批次的补充工艺用水
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 可销售参考产品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_process_water`
- 来源：`eu-jrc-sts-bref-2020`

###### 氢氧化钠活性物质（`sodium_hydroxide`）

仅在使用碱性清洗槽时记录氢氧化钠。报告 NaOH 活性质量，而非供应溶液总质量。

- 选定流：氢氧化钠 `e0abcced-0611-4c24-9290-5a2c5a0c4169`
- 流属性/单位：Mass / kg
- 数量规则：收货清洗溶液质量乘以批次特定氢氧化钠质量分数
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 可销售参考产品净质量；未使用氢氧化钠清洗剂时不适用
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_sodium_hydroxide`
- 来源：`eu-jrc-sts-bref-2020`

###### 刃口涂层用 PTFE 树脂（`ptfe_resin`）

仅在申报含氟聚合物低摩擦刃口涂层时，PTFE 树脂跨越边界。报告 PTFE 干固体，并披露分散介质和涂覆路线。

- 选定流：PTFE树脂 `f1adfc87-da88-4bcb-ace7-d6b809049f56`
- 流属性/单位：Mass / kg
- 数量规则：施用分散液质量乘以批次特定 PTFE 固体分数
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 可销售参考产品净质量；无 PTFE 涂层产品不适用
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_ptfe_resin`
- 来源：`epo-ep2454056b1-2014`

###### 剃须刀壳体用聚丙烯（`polypropylene`）

仅在聚丙烯为所申报剃须刀或刀头壳体材料时，其进入注塑过程。本行不得用于 ABS、HIPS、尼龙、弹性体或其他聚合物。由于名称精确匹配的候选流在公开分类中不相容，目前尚未确认精确的天工流 UUID。

- 选定流：初级形态聚丙烯树脂
- 流属性/单位：Mass / kg
- 数量规则：计量投入壳体成型的聚丙烯树脂，扣除同一批次经核实返回的内部回料
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 可销售参考产品净质量；仅生产刀片或壳体非聚丙烯时不适用
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_polypropylene`
- 来源：`uspto-us11571827b2-2023`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 可销售参考产品净产出（`reference_product_output`）

仅把最终检验合格并在工厂大门放行的未包装产品作为参考产出。不合格品、留样、尚未放行的返工品及包装质量均不计入。

- 选定流：剃须刀及其刀片（包括带状的刀片毛坯） `6c5d6033-a2c9-40f0-bc7d-077549573ace`
- 流属性/单位：Mass / kg
- 数量规则：计量可销售净产出并归一化为恰好 1 kg 参考产品
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：恰好 1 kg 可销售参考产品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_reference_product_output`
- 来源：`un-cpc-3-0-structure-2025`

##### 废物流

###### 工业后钢废料（`postindustrial_steel_scrap`）

记录离开过程的已分选钢制边角料、冲孔骨架、切边损失和不合格钢制件。磨削粉尘不纳入本行，另行记录。

- 选定流：工业后钢废料 `c143745d-be4f-4d8f-b403-2dcbfe685349`
- 流属性/单位：Mass / kg
- 数量规则：计量离开批次的钢废料，扣除经核实的内部重熔或直接再用
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 可销售参考产品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_postindustrial_steel_scrap`
- 来源：

###### 清洗废水（`cleaning_wastewater`）

记录离开前景过程并送处理或排放的废清洗水和漂洗水，并申报处理状态和组成。内部循环水在离开边界前不计作输出。

- 选定流：清洗废水 `f0402393-e82c-47e8-9cd8-a486c97f3e89`
- 流属性/单位：Mass / kg
- 数量规则：计量离开纳入批次的废水质量，或采用有记录的密度把体积换算为质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 可销售参考产品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_cleaning_wastewater`
- 来源：`eu-jrc-sts-bref-2020`

###### 捕集磨削粉尘（`grinding_dust`）

干式刀片刃口磨削、珩磨及相关过滤装置捕集的粉尘，须与金属边角料和湿污泥分开记录。披露金属与磨料组成及处理路线。

- 选定流：研磨和筛分产生的粉尘 `e0f3b3af-7794-4c25-ae58-5e4302b226d2`
- 流属性/单位：Mass / kg
- 数量规则：计量离开纳入批次的干态捕集粉尘
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 可销售参考产品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_grinding_dust`
- 来源：`epo-ep2454056b1-2014`

###### 聚丙烯成型废料（`polypropylene_waste`）

仅针对聚丙烯壳体路线，记录离开边界的已分选聚丙烯流道、浇口、切边、清机料和不合格成型件。内部回用的回料须披露，但不计作输出。

- 选定流：聚丙烯废料 `88215d1b-e6b6-4ec7-af7f-83375e80637b`
- 流属性/单位：Mass / kg
- 数量规则：计量扣除经核实内部回料后离开批次的聚丙烯废料
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 可销售参考产品净质量；仅生产刀片或壳体非聚丙烯时不适用
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_polypropylene_waste`
- 来源：`uspto-us11571827b2-2023`

##### 基本流

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivide` | 可分别计量的产品、生产线和批次 | 在分配共用投入或废物前，优先按产品形态和批次细分并直接计量。 |  |
| `allocation_shared_operations` | 不可分离的共用电力、用水、清洗、通风和废物处理 | 采用反映因果关系且有记录的物理驱动因素分配，如机器时间、分表负荷、处理表面积、槽液负荷或实测质量吞吐量；不得默认按收入分配。 |  |
| `allocation_internal_recycling` | 同一前景系统内回用的钢废料和聚丙烯回料 | 把经核实的内部回用作为内部循环，避免同时作为输出废物和新投入重复计量。报告损失及离开边界的材料。 |  |
| `allocation_external_recovery` | 离开边界送回收或资源化的废料 | 在本门到门数据集中于工厂大门报告废物流及去向，不计避免负荷收益；下游收益仅能在明确申报的扩展模型中计入。 |  |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_blade_steel_strip` | `razor_product_manufacturing` | 刀片级不锈钢带 | 收货、领用与退库记录 | 批号；供应商；合金牌号；带材厚度；收货质量；领用质量；退库质量；再生含量 | 校准秤和库存核对 | kg | 每批和每生产批次 | 覆盖完整生产批次的已申报代表性生产期间 | 申报场址的全部纳入生产线 | 领用质量合计减原样退库质量并按放行产出归一化 | 秤校准；供应商证书；批次追溯；库存核对 |
| `cp_manufacturing_electricity` | `razor_product_manufacturing` | 制造用电力 | 电表记录 | 电表编号；起止读数；kWh；覆盖设备；分配驱动因素；停机时间 | 收益级场址电表或分表 | kWh 和 MJ | 每计费区间，条件允许时按生产批次 | 覆盖完整生产批次的已申报代表性生产期间 | 全部纳入设备和辅助设施 | 扣除排除负荷，按获准物理驱动因素分配共用负荷，kWh × 3.6 后按放行产出归一化 | 电表校准；单线图；与电费账单核对 |
| `cp_process_water` | `razor_product_manufacturing` | 工艺用水 | 水表和水量平衡记录 | 水源；水表编号；补充体积或质量；循环体积；排放体积；换算密度 | 校准水表或储罐质量平衡 | kg | 每计量区间或生产批次 | 覆盖完整生产批次的已申报代表性生产期间 | 全部纳入用水操作 | 边界补充水只计一次，核对投入、循环、损失和输出后按放行产出归一化 | 水表校准；水量平衡；处理日志 |
| `cp_sodium_hydroxide` | `razor_product_manufacturing` | 氢氧化钠活性物质 | 化学品批次和浓度记录 | 批号；溶液质量；NaOH 质量分数；槽液补加；库存变化；处置量 | 校准秤加证书或经验证滴定 | kg 活性 NaOH | 每批 | 覆盖完整生产批次的已申报代表性生产期间 | 纳入的碱性清洗槽 | 溶液质量 × 批次浓度合计，按库存变化调整后按放行产出归一化 | 秤校准；分析证书或滴定；槽液日志 |
| `cp_ptfe_resin` | `razor_product_manufacturing` | 刃口涂层用 PTFE 树脂 | 涂层批次记录 | 批号；分散液质量；PTFE 固体分数；回收涂料；库存变化；涂覆产品质量 | 校准秤加配方或证书 | kg 干 PTFE | 每涂层批次 | 覆盖完整生产批次的已申报代表性生产期间 | 纳入的 PTFE 涂层线 | 分散液质量 × 经验证固体分数合计，扣除回收的未改变材料后按放行产出归一化 | 秤校准；配方；分析证书；批次日志 |
| `cp_polypropylene` | `razor_product_manufacturing` | 剃须刀壳体用聚丙烯 | 树脂领用和回料记录 | 批号；树脂牌号；原生料质量；外部再生料质量；内部回料投料；退库；壳体产出 | 校准料斗秤或台秤 | kg | 每成型批次 | 覆盖完整生产批次的已申报代表性生产期间 | 纳入的聚丙烯成型线 | 外供树脂消耗量合计；披露但不重复计量内部回料；按放行产出归一化 | 秤校准；供应商证书；批次谱系 |
| `cp_reference_product_output` | `razor_product_manufacturing` | 可销售参考产品净产出 | 最终放行和质量记录 | 产品代码；产品形态；刀片数量；合金；涂层；壳体材料；毛质量；包装皮重；不合格质量；放行质量 | 与批次放行记录关联的校准秤 | kg | 每放行批次 | 覆盖完整生产批次的已申报代表性生产期间 | 全部纳入的终检与放行点 | 可销售未包装放行净质量合计；全部交换归一化至 1 kg | 秤校准；放行批准；皮重验证；质量核对 |
| `cp_postindustrial_steel_scrap` | `razor_product_manufacturing` | 工业后钢废料 | 废料容器和出厂记录 | 容器编号；适用时的合金；毛质量；皮重；内部回用；去向；日期 | 校准地秤或出厂秤 | kg | 每容器或每次出厂 | 与产品产出相同期间 | 全部纳入的成形、切边和不合格品产生点 | 离开边界的钢废料净质量合计，排除内部回用后按放行产出归一化 | 秤校准；出厂单据；材料分选记录 |
| `cp_cleaning_wastewater` | `razor_product_manufacturing` | 清洗废水 | 排水计量和处理记录 | 来源操作；体积或质量；密度；pH；金属；油；处理状态；去向 | 校准流量计或储罐质量平衡，并进行代表性采样 | kg | 连续或每排放批次 | 与产品产出相同期间 | 全部纳入的清洗和漂洗操作 | 离开边界的废水合计，排除内部循环，仅用有记录密度换算体积，按放行产出归一化 | 仪表校准；采样交接记录；实验室结果；水量平衡 |
| `cp_grinding_dust` | `razor_product_manufacturing` | 捕集磨削粉尘 | 除尘器清灰记录 | 除尘器编号；毛质量；皮重；水分；金属含量；磨料含量；去向 | 每次清灰用校准秤计量 | kg 干质量 | 每次清灰 | 与产品产出相同期间 | 全部纳入的干式磨削和过滤系统 | 离开边界的干态粉尘净质量合计并按放行产出归一化 | 秤校准；除尘器日志；废物表征；出厂单据 |
| `cp_polypropylene_waste` | `razor_product_manufacturing` | 聚丙烯成型废料 | 废料和回料记录 | 批号；流道；浇口；清机料；不合格品；内部回料；离开质量；去向 | 校准秤和批次核对 | kg | 每成型批次 | 与产品产出相同期间 | 纳入的聚丙烯成型线 | 扣除内部回料后离开边界的聚丙烯废料合计并按放行产出归一化 | 秤校准；批次记录；废物出厂单据 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `normalize_to_reference_mass` | 全部清单行 | 归一化数量 = 期间交换量 / 期间可销售未包装放行产品净质量 × 1 kg | 交换记录；`cp_reference_product_output` | 每 1 kg 参考产品的交换量 |  |
| `convert_electricity_kwh` | 制造用电力 | 电力 MJ = 计量 kWh × 3.6 MJ/kWh | `cp_manufacturing_electricity` | MJ 电力 |  |
| `calculate_active_mass` | 氢氧化钠和 PTFE 树脂 | 活性质量 = 收货溶液或分散液质量 × 经验证的批次质量分数 | `cp_sodium_hydroxide`; `cp_ptfe_resin` | kg 活性 NaOH 或干 PTFE |  |
| `reconcile_material_mass` | 钢和聚丙烯 | 外部收货投入 = 可销售产品中的材料 + 离开边界的废物材料 + 净库存变化 + 有记录的过程损失；内部循环只出现一次 | 投入、产出、废料、废物和库存记录 | 分材料核对及无法解释的差额 |  |
| `reconcile_site_water` | 工艺用水和清洗废水 | 投入 = 离开边界的废水 + 产品或废物含水 + 蒸发及其他实测损失 + 系统净库存变化；披露内部循环但不得重复计量 | `cp_process_water`; `cp_cleaning_wastewater` | 水量平衡及无法解释的差额 | `eu-jrc-sts-bref-2020` |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity_traceability` | 参考产品和刀片钢 | 保留产品代码、产品形态、刀片数量、合金牌号、钢带批次、涂层状态、壳体材料及放行批次关联。 | 供应商证书、批次谱系和放行记录 |
| `dq_temporal_coverage` | 全部前景交换 | 在已申报的代表性生产期间覆盖完整生产批次，并披露季节性、停机、异常事件和任何未覆盖区间。 | 带日期的计量、库存、批次和出厂记录 |
| `dq_mass_completeness` | 钢、聚合物、产品和废物 | 分材料核对；发布前调查每项无法解释的差额，并披露审查判据及其理由。 | 经签署且附原始记录和纠正措施证据的核对表 |
| `dq_water_management` | 水和废水 | 保留流程图和场址水量平衡；识别投入、内部循环、处理、排放和损失。 | 水审计、仪表校准、采样记录和处理日志 |
| `dq_conditional_routes` | 涂层和壳体行 | 只有当产品规范和生产线记录证明所申报涂层或壳体材料不存在时，才可把条件行标记为不适用。 | 材料清单、工艺路线表和批次记录 |
| `dq_range_status` | 全部重要流 | 本候选 PCR 未规定外部经验数量范围。保留前景值并标记待审，直至两个相互独立且边界兼容的原始来源或经审查的前景数据集支持该范围。 | manifest 中未解决的范围证据记录和来源审查记录 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `val_reference_identity` | 参考流 | 确认参考产出 UUID、Mass/kg 属性支持、未包装净质量基准及全部必需产品限定信息。 |  |
| `val_atomic_inventory` | 清单 | 确认每行都是一个具有单一方向、流类型、属性、单位、数量规则、基准、证据类型和采集协议的原子交换；拒绝笼统公用工程、组合材料和组合废物。 |  |
| `val_process_coverage` | 前景边界 | 确认数据集覆盖所申报的全部场内成形、热处理、刃磨、清洗、涂层、成型、装配、检验、返工和直接控制的废物处理；或用证据明确标记不适用的操作。 | `epo-ep2454056b1-2014`; `uspto-us11571827b2-2023` |
| `val_mass_balance` | 钢和聚丙烯 | 确认分材料核对、内部循环处理及每项材料输出的去向；调查超过数据质量阈值的无法解释差额。 |  |
| `val_water_balance` | 水和废水 | 确认同一场址和期间的水投入、内部循环、清洗废水、处理、排放和损失相互平衡。 | `eu-jrc-sts-bref-2020` |
| `val_allocation` | 共用操作 | 确认先尝试过程细分，剩余分配均采用已披露的物理驱动因素，并记录分子、分母、期间和受影响产品。 |  |
| `val_range_evidence` | 重要流 | 确认未把未经验证的单一来源数值、重复单值或机械组合的情景最小值/最大值作为经验范围。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | unit_process |
| downstream_use | secondary_dataset；background_dataset；生命周期模型投影的前景构件 |
| allowed_use | 与所申报产品形态、材料、涂层、壳体、地域、技术、期间和工厂大门相匹配的剃须刀、刀头、成品剃须刀片或带状毛坯门到门数据集 |
| excluded_use | 电动剃须刀、手术刀片、工业刀具、已包装零售产品、使用阶段比较、更换频率主张，以及未增加其他经验证阶段的从摇篮到坟墓结果 |
| required_metadata | PCR id；参考产品 UUID；产品形态；刀片数量；合金和牌号；涂层；壳体材料；再生含量；地域；技术；生产期间；净质量基准；边界；分配；源数据集身份 |
| required_quality_disclosure | 记录覆盖率；仪表和秤校准；供应商证书；活性物质计算；质量和水量平衡；分配驱动因素；数据缺口；未解决的 UUID 和范围证据状态；不确定性与代表性 |
| update_trigger | 产品形态、参考流身份、合金系列、涂层体系、壳体材料、制造路线、场址地域、分配方法、数据期间、背景数据集发生变化，或证据足以解决 UUID 或范围缺口时 |

## 11. 数据源

| 来源 id | 类型 | 参考文献 | 用途 |
| --- | --- | --- | --- |
| `un-cpc-3-0-structure-2025` | 官方指南（`official_guidance`） | 联合国统计司，CPC Version 3.0 Structure，2025-06-30，官方 CSV：https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv（检索日期 2026-09-05） | CPC 42914 的产品分类身份和正式英文标题 |
| `epo-ep2454056b1-2014` | 文献（`literature`） | 欧洲专利局，EP 2 454 056 B1，Razor Blade Technology，2014-03-19：https://data.epo.org/publication-server/rest/v1.2/publication-dates/20140319/patents/EP2454056NWB1/document.pdf（检索日期 2026-09-05） | 不锈钢带、淬硬、刃磨、清洗、刃口涂层、PTFE 施用与固化及刀头装配的过程分解 |
| `eu-jrc-sts-bref-2020` | 官方指南（`official_guidance`） | 欧盟委员会联合研究中心，Best Available Techniques Reference Document on Surface Treatment Using Organic Solvents including Preservation of Wood and Wood Products with Chemicals，2020：https://bureau-industrial-transformation.jrc.ec.europa.eu/sites/default/files/2021-06/jrc122816_sts_2020_final.pdf（检索日期 2026-09-05） | 水相清洗、氢氧化钠清洗投入、水与废水核算、水审计及循环控制 |
| `uspto-us11571827b2-2023` | 文献（`literature`） | 美国专利 US 11,571,827 B2，Shaving Razor Cartridge and Method of Manufacture，2023-02-07：https://patents.google.com/patent/US11571827B2/en（检索日期 2026-09-05） | 注塑剃须刀刀头壳体、作为壳体聚合物选项的聚丙烯及刀片与壳体装配 |
