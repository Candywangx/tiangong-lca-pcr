---
pcr_id: pcr.metal-products-machinery-and-equipment.fabricated-metal-products-except-machinery-and-equipment.chain-except-articulated-link-chain-and-parts-thereof-of-iron-or-steel-chain-and-parts-58cc71fb
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 铁或钢制的链（铰接链除外）及其零件；铜链及其零件

## 1. 范围与适用性

本 PCR 适用于成品铁链、铰接链以外的成品钢链、成品铜链以及单独销售的相应链条零件的前景数据包。边界从外购金属丝或盘条及其他外购投入进入工厂开始，包括实际适用的拉丝、切断、链环或零件成形、电焊或其他连接、热处理、清洗、表面精整、验证试验和最终检验，止于未包装产品在工厂大门处放行。

铰接链、钢丝绳、绞合线或电缆、与吊钩等起重附件组装成的链式吊索、上游原生金属生产、使用、维护、修理、工厂大门后的运输、包装及报废阶段不在本 PCR 范围内。数据包仅纳入实际发生的工序，但必须披露每项未发生的条件工序，并把基准原子流清单未列出的实际场址交换作为单独交换补充。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.fabricated-metal-products-except-machinery-and-equipment.chain-except-articulated-link-chain-and-parts-thereof-of-iron-or-steel-chain-and-parts-58cc71fb |
| classification_refs | CPC 3.0: 42991 (exact) |
| covered_products | 铁或钢制防滑链、日字链、焊接链和其他非铰接链及其零件；铜链及其零件 |
| excluded_products | 铰接链；钢丝绳、绞合线和电缆；参考产品含吊钩或其他附件的完整链式吊索或组件；铁、钢或铜以外材料制链 |
| representative_product | 工厂大门处未包装的成品非铰接铁/钢链、铜链或单独销售的链条零件 |
| production_route | 外购金属丝或盘条的准备，以及适用的拉丝、切断、成形、连接/焊接、热处理、清洗、涂覆、试验和检验 |
| market_state | 制造场址大门处可销售、未包装、干燥的成品链或链条零件；声明材料、牌号、尺寸、连接方法、热处理、涂层和试验状态 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 本 PCR 边界内的成品链或链条零件 |
| How much | 1 kg 产品净质量 |
| How well | 符合声明的材料、牌号、尺寸、连接、热处理、涂层、验证载荷及其他适用产品规范 |
| How long or cycle | 在工厂大门处放行的一个生产批次；不计入使用寿命功能 |
| reference_flow_link | `reference_product` |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 kg |
| 参考产品流 | 铁、钢或铜制链（铰接链除外）或链条零件 |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 链或零件；铁、钢或铜及合金/牌号；链环或零件几何形状和公称尺寸；适用时的校准/非校准状态；连接或焊接方法；热处理路线；涂层/表面状态；适用时的验证载荷或试验规范及结果；产品净质量；生产场址和地理范围；生产期间 |

构建前景数据包时，`必需限定信息` 中的每一项均应在数据集元数据、过程说明、参考流备注、产品说明或等效字段中声明。缺少必需限定信息时，参考流不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | 参考产品及按质量归一化的投入/产出 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 称量干燥、未包装的合格产品，并把所有清单归一化至 1 kg 产品净质量。参考质量不包括托盘、卷盘、桶或可拆除包装。 |
| `metal_mass_balance` | 金属原料、成品和分类收集的金属废料 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 分别保留实测材料及合金路线。核对投入金属与合格产品、分类废料、其他已记录废物中的氧化皮/污泥以及库存变化。 |
| `electricity_conversion` | 外购电力 | Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | 用 3.6 MJ/kWh 将电表 kWh 转换为 MJ；保留原始电表值、电压等级、电网地理范围、合同电力组合和所含场内损耗。 |
| `gas_volume` | 天然气 | Volume `93a60a56-a3c8-22da-a746-0800200c9a66` | m3 | 按声明的参考温度和压力报告计量体积，并说明是否已修正至标准状态；若换算为能量，仍须保留换算依据。 |
| `solution_mass` | 外购酸、氧化剂和碱 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 记录供应溶液质量及声明浓度。没有换算记录时，不得把活性物质量作为溶液质量报告。 |

## 5. 系统边界

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_factory_gate` | 链条前景制造 | 纳入从外购金属原料接收到干燥、未包装合格链或链条零件放行的全部场内工序，包括归属于产品的内部循环和污染控制工序。 | `ec-fmp-bat-2022`; `us-epa-brass-wire-mill-1971` |
| `boundary_actual_routes` | 条件工序 | 仅在实际发生时纳入拉丝、电焊或其他连接、热处理/淬火、酸洗或机械清理、涂覆、验证试验及废水/废气处理；披露未发生和外包的工序，并为外包生产步骤要求供应商数据集。 | `ec-fmp-bat-2022`; `eu-chain-certification-1973` |
| `boundary_upstream_inputs` | 外购产品和废物处理投入 | 每项外购金属、化学品、燃料、电力、水和废物处理服务均应关联地理与技术具有代表性的上游数据集；不得将上游负荷作为直接前景排放。 | `ec-fmp-bat-2022` |

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 外购铁/非合金钢丝、合金钢丝或铜盘条到达链条制造场址，并声明材料牌号、形态、尺寸、涂层、再生含量主张和供应商地理范围 |
| starting_condition_role | 外购成形金属原料；上游金属生产及丝/盘条制造由关联的上游数据集表示 |
| product_classification_scope | 与 CPC 3.0 42991 一致的成品非铰接铁/钢链及其零件，以及铜链及其零件 |
| recursive_input_rule | 当前景系统投入外购链或本范围内链条零件时，将其作为具有供应商数据集和声明质量的单独技术系统投入；不得在本 PCR 内递归重建其生产 |
| upstream_dataset_requirement | 有供应商特定数据时优先使用；否则每项外购投入使用与地理、合金/牌号、技术、再生含量和产品状态相容且有记录的数据集 |
| disclosure | 声明材料路线、原料状态、成形/连接技术、热处理、清洗化学品、涂层、试验、内部循环、废水/废气处理、外包步骤、生产地理和生产期间 |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `chain_manufacturing` | 一体化链及链条零件制造 | required | 合并制造场址实际执行或归属于该场址的全部适用工序；条件交换仅在实际存在时记录 | 从外购金属原料到干燥、未包装的工厂大门处合格产品的前景制造 | 1 kg 合格产品净质量 |

### 过程：一体化链及链条零件制造（`chain_manufacturing`）

合并过程可避免人为创建内部中间流，同时保留工序级仪表、批次和处理记录。数据集必须说明实际发生的成形、连接、热处理、湿法处理、涂覆和试验工序。

#### 输入

##### 产品流

###### 非合金钢丝（`non_alloy_steel_wire`）

记录铁链或非合金钢链及其零件生产消耗的外购非合金钢丝。

- 选定流：钢丝 `62bb3717-f62c-43e0-baca-46a1e6f847c4`
- 流属性/单位：Mass / kg
- 数量规则：净领用质量减去实测可重复使用退库量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格产品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_inputs`
- 来源：`ec-fmp-bat-2022`; `eu-chain-certification-1973`

###### 合金钢丝（`alloy_steel_wire`）

仅对合金钢产品路线记录低合金或其他合金钢丝。

- 选定流：低合金钢丝 `461d98b3-a825-41bb-9b16-056331873326`
- 流属性/单位：Mass / kg
- 数量规则：净领用质量减去实测可重复使用退库量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格产品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_inputs`
- 来源：`ec-fmp-bat-2022`; `eu-chain-certification-1973`

###### 铜盘条（`copper_wire_rod`）

仅对铜链或铜制链条零件生产记录外购铜盘条。

- 选定流：铜盘条 `99715c69-4245-44ff-a438-0e0d68377386`
- 流属性/单位：Mass / kg
- 数量规则：净领用质量减去实测可重复使用退库量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格产品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_inputs`
- 来源：`us-epa-brass-wire-mill-1971`

###### 外购电力（`electricity`）

记录成形、拉丝、焊接、热处理、清洗、涂覆、试验及归属辅助设备的输入电力。

- 选定流：电力 `67b723a9-6f63-4802-adca-b52ce7967d47`
- 流属性/单位：Net calorific value / MJ
- 数量规则：依据工序级或场址级记录分配计量电力，并按 `electricity_conversion` 换算
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格产品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_inputs`
- 来源：`ec-fmp-bat-2022`

###### 天然气（`natural_gas`）

记录供应给场内炉窑或其他直接归属燃烧设备的气态天然气。

- 选定流：气态天然气 `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位：Volume / m3
- 数量规则：按声明参考状态计量的输入体积，扣除单独计量的非产品用途
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 合格产品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_inputs`
- 来源：`ec-fmp-bat-2022`

###### 工艺用水（`process_water`）

记录进入清洗、漂洗、淬火、洗涤或其他归属产品工序的净补充工艺用水；不得重复计算循环水。

- 选定流：工艺用水 `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- 流属性/单位：Mass / kg
- 数量规则：计量补水加有记录的槽体添加量，减去从过程边界输出的回收水
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格产品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_water_chemicals`
- 来源：`ec-fmp-bat-2022`; `us-epa-brass-wire-mill-1971`

###### 30% 盐酸溶液（`hydrochloric_acid_30pct`）

仅在酸洗、剥离或酸补充时记录外购 30% 盐酸溶液。

- 选定流：盐酸 `56414d25-a353-4d67-b362-87212ce6011d`
- 流属性/单位：Mass / kg
- 数量规则：30% 浓度溶液的净外购或领用质量，不含过程内回用的再生酸
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 合格产品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_water_chemicals`
- 来源：`ec-fmp-bat-2022`

###### 硫酸（`sulfuric_acid`）

仅在钢或铜酸洗或酸再生补充时记录外购硫酸。

- 选定流：硫酸 `7ee2e3c3-bee7-4520-92b7-3e23afbfcd6f`
- 流属性/单位：Mass / kg
- 数量规则：按声明浓度记录净外购或领用溶液质量，不含过程内回用的再生酸
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 合格产品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_water_chemicals`
- 来源：`ec-fmp-bat-2022`; `us-epa-brass-wire-mill-1971`

###### 27.5% 过氧化氢溶液（`hydrogen_peroxide_27_5pct`）

仅在铜亮酸洗或等效的声明氧化步骤中记录外购 27.5% 过氧化氢溶液。

- 选定流：过氧化氢 (27.5%) `445b37f0-46b7-400d-a369-530e17d598af`
- 流属性/单位：Mass / kg
- 数量规则：27.5% 浓度溶液的净领用质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 合格产品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_water_chemicals`
- 来源：`us-epa-brass-wire-mill-1971`

###### 氢氧化钠（`sodium_hydroxide`）

记录用于碱洗、中和或归属废水处理的氢氧化钠。

- 选定流：氢氧化钠 `e0abcced-0611-4c24-9290-5a2c5a0c4169`
- 流属性/单位：Mass / kg
- 数量规则：产品或溶液净领用质量，并声明供应浓度
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 合格产品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_water_chemicals`
- 来源：`ec-fmp-bat-2022`; `us-epa-brass-wire-mill-1971`

###### 锌金属（`zinc_metal`）

仅在成品链或零件于场内镀锌时记录消耗的特高纯未锻轧锌金属。

- 选定流：特高纯锌金属 `2d8ff1bd-e128-4c74-a99d-b8734c99bbd2`
- 流属性/单位：Mass / kg
- 数量规则：涂覆系统投加的外购锌减去实测回收金属和期末库存，并分配至合格产品和单独记录的残留物
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 合格产品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_water_chemicals`
- 来源：`ec-fmp-bat-2022`

###### 硬脂酸钙拉丝润滑剂（`drawing_lubricant_calcium_stearate`）

仅在硬脂酸钙为实际使用的具体干式拉丝润滑剂时记录补充量；UUID 未解决。

- 选定流：硬脂酸钙
- 流属性/单位：Mass / kg
- 数量规则：新鲜润滑剂净领用量减去单独回收的可重复使用润滑剂
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 合格产品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_water_chemicals`
- 来源：`ec-fmp-bat-2022`; `us-epa-brass-wire-mill-1971`

###### 淬火油（`quenching_oil`）

仅对场内油淬热处理路线记录新鲜淬火油补充量。

- 选定流：淬火油 `02f62137-e204-46e6-8e72-e88b450fbdc4`
- 流属性/单位：Mass / kg
- 数量规则：新鲜油净添加量减去输出供再利用的回收油；循环槽存量不得计作消耗
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 合格产品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_water_chemicals`
- 来源：`ec-fmp-bat-2022`; `eu-chain-certification-1973`

##### 废物流

预计无废物输入。如果场址接收废物用于链条过程中的处理或循环，应把每种具体废物流作为单独前景行补充。

##### 基本流

预计无直接基本流输入。外购材料中隐含的自然资源开采属于关联上游数据集。

#### 输出

##### 产品流

###### 参考链或链条零件（`reference_product`）

仅记录在工厂大门处放行的干燥、未包装合格链或单独销售的链条零件。准确的 TianGong 产品流 UUID 尚未解决。

- 选定流：铁、钢或铜制链（铰接链除外）或链条零件
- 流属性/单位：Mass / kg
- 数量规则：定义为 1 kg 合格产品净质量
- 数值来源模式：固定值（`fixed_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：1 kg 合格产品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：来源规则（`source_rule`）
- 来源：`un-cpc-3-0-2025`; `eu-chain-certification-1973`

##### 废物流

###### 工业后钢废料（`post_industrial_steel_scrap`）

记录分类收集并输出供循环或处理的钢制边角料、焊瘤、切头及不合格钢链环。

- 选定流：工业后钢废料 `c143745d-be4f-4d8f-b403-2dcbfe685349`
- 流属性/单位：Mass / kg
- 数量规则：实测输出质量加有记录的库存变化，不含内部重熔或直接重复使用的材料
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格产品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_outputs`
- 来源：`ec-fmp-bat-2022`

###### 废铜（`copper_scrap`）

记录分类收集并输出供循环或处理的铜边角料及不合格铜链环或零件。

- 选定流：废铜 `4fbbb5f1-560a-4052-ba0c-652c5dfc282e`
- 流属性/单位：Mass / kg
- 数量规则：实测输出质量加有记录的库存变化，不含内部重复使用的铜
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格产品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_outputs`
- 来源：`us-epa-brass-wire-mill-1971`

###### 废酸洗液（`spent_pickling_acid`）

记录离开场址边界的废盐酸或废硫酸酸洗液，并声明酸种类、残余浓度、溶解金属和回收去向；UUID 未解决。

- 选定流：废酸洗液
- 流属性/单位：Mass / kg
- 数量规则：实测输出质量加有记录的槽体库存变化，扣除场内再生并回用的酸
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 合格产品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_outputs`
- 来源：`ec-fmp-bat-2022`; `us-epa-brass-wire-mill-1971`

###### 含金属酸性漂洗废水（`acidic_rinse_wastewater`）

记录扣除场内循环水后输出至下水道或场外处理的分类收集含金属酸性漂洗废水，并声明 pH、主要酸、溶解金属和处理去向；UUID 未解决。

- 选定流：含金属酸性漂洗废水
- 流属性/单位：Mass / kg
- 数量规则：计量或质量平衡得到的跨场址边界净废水量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 合格产品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_outputs`
- 来源：`ec-fmp-bat-2022`; `us-epa-brass-wire-mill-1971`

##### 基本流

###### 颗粒物排入空气（`particulate_matter_air`）

记录成形、拉丝、焊接、机械清理、热处理和精整经收集与治理后排入空气的实测净颗粒物。

- 选定流：颗粒物，粒径未特指 `0ce3dedb-caca-407b-a856-a90470eb8ec0`
- 流属性/单位：Mass / kg
- 数量规则：治理后有组织排放与量化无组织排放之和；不得与作为废物记录的捕集粉尘重复计算
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格产品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_direct_emissions`
- 来源：`ec-fmp-bat-2022`

###### 氯化氢排入空气（`hydrogen_chloride_air`）

记录盐酸酸洗或剥离工序经治理后排入空气的实测净氯化氢。

- 选定流：氯化氢 `fe0acd60-3ddc-11dd-aab0-0050c2490048`
- 流属性/单位：Mass / kg
- 数量规则：治理后实测有组织排放加量化无组织 HCl 排放
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格产品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_direct_emissions`
- 来源：`ec-fmp-bat-2022`

###### 氮氧化物排入空气（`nitrogen_oxides_air`）

按场址声明的报告约定记录场内燃料燃烧排入空气的实测 NOx 总量；UUID 未解决，不得用一氧化二氮替代。

- 选定流：氮氧化物排入空气
- 流属性/单位：Mass / kg
- 数量规则：治理后实测有组织排放加量化无组织 NOx 排放，并声明以 NO2 当量或其他方式报告的依据
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格产品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_direct_emissions`
- 来源：`ec-fmp-bat-2022`

###### 化石源二氧化碳排入空气（`carbon_dioxide_fossil_air`）

记录场内天然气燃烧或其他声明化石来源的直接化石源二氧化碳；本前景行不包括上游电力排放。

- 选定流：二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 流属性/单位：Mass / kg
- 数量规则：直接烟气测量，或依据采集燃料记录的已披露场址碳平衡，并保留方法和因子来源
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格产品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_direct_emissions`
- 来源：`ec-fmp-bat-2022`

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_avoid_subdivide` | 不同产品族、材料路线和主要工序 | 优先使用工序仪表、批次记录和产品特定领料进行细分。记录允许时，铁/非合金钢、合金钢和铜路线必须分开。 | `ec-fmp-bat-2022` |
| `allocation_shared_operations` | 共享成形、热处理、清洗、涂覆、试验和辅助工序 | 无法细分时，按有记录的因果驱动因素分配，例如机器时间、炉次装载时间、处理表面积、槽体吞吐量或计量能耗。仅在没有更具因果性的驱动因素时按质量分配，并披露敏感性。 | `ec-fmp-bat-2022` |
| `allocation_scrap_no_avoided_burden` | 钢废料、铜废料和回收处理物料 | 报告全部输出质量和去向。前景清单内不得计入避免原生金属生产或处理的信用；任何循环或替代约定应在下游模型中单独披露。 | `ec-fmp-bat-2022`; `us-epa-brass-wire-mill-1971` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_material_inputs` | `chain_manufacturing` | 每项金属原料行 | 采购、领用、退料及库存记录 | 材料/牌号；供应商；批次；期初库存；入库；领用；可重复使用退料；期末库存；质量 | 校准秤，并与仓储及生产记录核对 | kg | 每批；每月汇总 | 代表性连续 12 个月或已声明的较短生产期 | 生产声明产品的全部生产线 | 入库 + 期初库存 - 期末库存 - 可重复使用退料，按产品路线归属 | 秤校准、供应商证书、批次追溯和库存核对 |
| `cp_energy_inputs` | `chain_manufacturing` | 电力和天然气 | 公用工程仪表、发票和运行日志 | 仪表编号；起止读数；单位；参考状态；工序；停机；产品量 | 优先分表；否则场址总表按因果驱动因素分配 | kWh, MJ, m3 | 连续或每班；每月汇总 | 代表性连续 12 个月或已声明的较短生产期 | 全部归属生产及污染控制设备 | 净输入量扣除排除用途后分配并按合格产品质量归一化 | 仪表校准、发票核对、分配工作表和运行时数日志 |
| `cp_water_chemicals` | `chain_manufacturing` | 每项水或化学品行 | 仪表、批次、采购、领用和槽体库存记录 | 物质；浓度；批次；期初/期末库存；添加；回收返回；输出；处理产品质量 | 校准流量计或秤，并进行浴槽/槽体平衡 | kg | 每批或每班；每月汇总 | 代表性连续 12 个月或已声明的较短生产期 | 每条适用清洗、拉丝、热处理、涂覆或处理线 | 净新鲜投入 = 添加 + 入库 + 期初库存 - 期末库存 - 回收输出；按产品质量归一化 | 校准、安全数据表、浓度分析、批次表和槽体平衡 |
| `cp_product_output` | `chain_manufacturing` | 参考产品 | 放行、称量和质量记录 | 产品编号；材料/牌号；尺寸；连接方法；热处理；涂层；试验规范/结果；干燥净质量；不合格品 | 与放行检验关联的校准秤 | kg | 每个生产批次 | 代表性连续 12 个月或已声明的较短生产期 | 声明场址生产的全部合格产品 | 合计干燥未包装放行质量；排除不合格品、包装和未放行库存 | 秤校准、检验记录、材料证书和适用时的试验证书 |
| `cp_waste_outputs` | `chain_manufacturing` | 每项废物流 | 废物称量/联单、槽位和回收日志 | 废物身份；组成；来源；质量；期初/期末库存；回收；去向；处理 | 地磅/秤，或有槽体平衡的密度-体积换算 | kg | 每次外运；每月核对 | 代表性连续 12 个月或已声明的较短生产期 | 离开场址的全部归属废物和废水 | 输出质量 + 期末库存 - 期初库存；扣除内部回用并防止重复报告 | 秤校准、联单、实验室组成/pH、槽体记录和回收/处理回执 |
| `cp_direct_emissions` | `chain_manufacturing` | 每项基本排放行 | 连续监测、烟道试验、质量平衡及无组织估算记录 | 污染物；源；流量；浓度；试验期；治理状态；报告基准；运行时间 | 适用的校准监测或经验证场址计算 | kg | 安装时连续；否则按规定试验并每月计算 | 代表性连续 12 个月或已声明的较短生产期 | 全部归属点源和量化无组织源 | 按污染物合计治理后排放并按合格产品质量归一化 | 校准、采样标准、实验室报告、检出限、不确定度和运行日志 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_normalized_amount` | 每项清单交换 | 归一化数量 = 期间交换量 / 干燥未包装合格产品质量 | 交换记录；`cp_product_output` 质量 | 每 1 kg 参考产品数量 |  |
| `calc_net_input` | 材料、水和化学品 | 净新鲜投入 = 入库 + 期初库存 - 期末库存 - 返回核算产品系统外的可重复使用物料 | 采购、库存、领用、回收和退料记录 | 各原子流净产品投入 | `ec-fmp-bat-2022` |
| `calc_net_waste` | 废物输出 | 跨边界净废物 = 外运 + 期末废物库存 - 期初废物库存；排除同一期间内部回用物料 | 废物联单、称量、槽体和库存 | 各原子流净废物输出 | `ec-fmp-bat-2022`; `us-epa-brass-wire-mill-1971` |
| `calc_electricity_mj` | 电力 | MJ = 电表 kWh × 3.6 | 电表 kWh | MJ 表示的输入电力 |  |
| `calc_shared_burden` | 未细分共享工序 | 按有记录的因果驱动因素分配；若按质量兜底，份额 = 产品质量 / 通过共享工序的合格产品总质量 | 共享负荷；各产品驱动因素；驱动因素总量 | 归属产品的共享负荷 | `ec-fmp-bat-2022` |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | 参考产品 | 保留产品图纸/规范、材料和牌号、链环/零件几何、连接方法、热处理、涂层、试验状态、净质量和批次身份。 | 产品规范、材料证书、工艺卡、检验和试验记录 |
| `dq_time` | 全部前景行 | 在可得时采用至少连续 12 个月的代表性生产期；披露较短生产期、停机、异常运行和季节性缺口。 | 带日期仪表、批次记录、生产日志和完整性核对 |
| `dq_completeness` | 过程和排放清单 | 对每项适用工序和污染控制单元核对材料、能源、水、化学品、废物和排放记录；解释全部缺失或估算交换。 | 质量/能量/水平衡、化学品清单、废物及废气/废水清单 |
| `dq_technology` | 条件路线 | 识别成形/拉丝、连接、炉窑/淬火、清洗、涂覆、验证试验和治理技术，并声明每项工序为场内、外包或未发生。 | 工艺流程图、设备台账和供应商记录 |
| `dq_measurement` | 仪表、秤和分析 | 为每项重要测量保留校准状态、采样方法、检出限、浓度/参考状态换算和不确定度。 | 校准证书、实验室报告和换算工作表 |
| `dq_upstream` | 关联数据集 | 匹配地理、材料/合金、产品状态、技术、再生含量和时间；记录任何代理及预期偏差方向。 | 供应商数据集或有记录的数据集选择记录 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validate_identity` | 参考产品 | 产品为铰接链、范围外链组件、铁/钢/铜以外材料，或缺少材料/牌号、尺寸、路线、表面状态、试验状态和净质量限定信息时失败。 | `un-cpc-3-0-2025`; `eu-chain-certification-1973` |
| `validate_reference_mass` | 参考流 | 确认恰为 1 kg 干燥未包装合格产品，且分母不包括不合格品和包装。 |  |
| `validate_routes` | 过程图 | 确认全部场内和外包拉丝、成形、连接、热处理、清洗、涂覆、试验和处理步骤均已声明，并包含每项适用交换。 | `ec-fmp-bat-2022`; `us-epa-brass-wire-mill-1971` |
| `validate_balance` | 金属、水和化学品 | 要求金属核对，并对循环水、酸、润滑剂、淬火油和回收涂层金属采用净消耗核算；调查无法解释的不平衡。 | `ec-fmp-bat-2022`; `us-epa-brass-wire-mill-1971` |
| `validate_emissions` | 直接排放 | 确认排放为治理后前景排放，采用声明的环境区室/报告基准，排除上游电力排放，且未用一氧化二氮替代未解决的 NOx。 | `ec-fmp-bat-2022` |
| `validate_allocation` | 共享负荷和可循环输出 | 确认细分或因果分配有记录，且前景清单未嵌入避免负荷的循环信用。 | `ec-fmp-bat-2022` |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 产品特定或场址平均的工厂大门处前景生产数据集 |
| downstream_use | `secondary_dataset`; `background_dataset` |
| allowed_use | 需要有完整限定信息的工厂大门处链或链条零件数据集的从摇篮到大门产品系统和下游模型 |
| excluded_use | 铰接链；含附件的链式吊索/组件；其他材料；使用阶段性能；修理；报废；或材料路线、产品状态、地理、技术或数据质量不相容时的比较性声明 |
| required_metadata | PCR id/版本；产品为链或零件；材料/合金/牌号；尺寸；适用时的校准状态；连接方法；热处理；涂层；适用时的验证/试验规范及结果；场址/地理；期间；净质量；工艺路线；分配；上游数据集；未解决 UUID |
| required_quality_disclosure | 时间覆盖和完整性；仪表/秤校准；浓度及参考状态换算；路线特定分配；金属/水/化学品平衡；废物和排放方法；不确定度；代理；排除项和外包步骤 |
| update_trigger | 材料、牌号、原料、成形/连接技术、炉窑/淬火、清洗化学品、涂层、治理、供应商电力/燃料、分配方法、场址、生产组合、法规、参考流 UUID 或证据发生实质变化 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3-0-2025` | `official_guidance` | 联合国统计司，《产品总分类》3.0 版结构和解释性说明，2025-06-30，https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | 英文产品类别身份及铰接链排除项 |
| `un-cpc-1-1-zh-2004` | `official_guidance` | 联合国统计司，《产品总分类》1.1 版中文版，ST/ESA/STAT/SER.M/77/Ver.1.1，https://digitallibrary.un.org/record/536544/files/M_77ver1_1c.pdf | 未改变的 CPC 42991 产品身份的专业中文表述 |
| `ec-fmp-bat-2022` | `official_guidance` | 欧盟委员会，关于黑色金属加工工业最佳可行技术结论的委员会实施决定 (EU) 2022/2110，https://eur-lex.europa.eu/eli/dec_impl/2022/2110/oj/eng | 拉丝、加热、酸洗、涂覆、能源、水、化学品、残留物、废气/废水清单及监测 |
| `us-epa-brass-wire-mill-1971` | `official_guidance` | 美国环境保护署，《Brass Wire Mill Process Changes and Waste Abatement, Recovery and Reuse》，项目 12010 DPF，1971 年 11 月，https://nepis.epa.gov/Exe/ZyPURL.cgi?Dockey=9100XAZP.TXT | 铜盘条拉丝、退火、重复酸洗/漂洗、润滑剂使用、铜回收和处理残留物过程分解 |
| `eu-chain-certification-1973` | `standard` | 欧洲经济共同体理事会关于钢丝绳、链条和吊钩认证与标志的第 73/361/EEC 号指令，1973-11-19，https://eur-lex.europa.eu/eli/dir/1973/361/oj/eng | 条件适用的圆钢链材料、尺寸、连接、热处理、验证载荷、破断强度、试验和标志限定信息 |
