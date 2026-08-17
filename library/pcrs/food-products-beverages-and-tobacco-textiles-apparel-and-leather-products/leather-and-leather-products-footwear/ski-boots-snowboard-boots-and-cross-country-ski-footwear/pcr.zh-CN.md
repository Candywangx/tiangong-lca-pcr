---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.leather-and-leather-products-footwear.ski-boots-snowboard-boots-and-cross-country-ski-footwear
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 滑雪靴、单板滑雪靴和越野滑雪鞋

## 1. 范围与适用性

本 PCR 适用于 CPC 3.0 子类 29410 所涵盖滑雪靴、单板滑雪靴和越野滑雪鞋的工厂门生产。范围包括硬壳与软鞋面结构，数据生产者必须声明鞋类子型及实际部件路线。

前景边界起于接收的树脂、泡棉片或部件、纺织物或皮革材料、闭合五金、胶黏剂、化学品、公用工程、可归入生产的制冷剂检修以及销售包装材料，止于制造设施门口的合格成品鞋类。上游原材料生产以及下游分销、使用、维修和寿命终止须使用独立数据集。

每张过程清单卡只表示一个原子交换。条件性材料、技术、燃料、化学品、制冷剂与排放仅在实际发生且有前景记录支持时记录。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.leather-and-leather-products-footwear.ski-boots-snowboard-boots-and-cross-country-ski-footwear |
| classification_refs | CPC 3.0: 29410, exact |
| covered_products | CPC 29410 范围内的高山滑雪靴、单板滑雪靴、越野滑雪鞋以及硬壳和软鞋面型号 |
| excluded_products | 冰鞋；一般运动鞋；普通步行鞋或徒步鞋；上游材料生产；分销、使用、维修与寿命终止 |
| representative_product | 以尺码、双只或单只约定、净质量、结构、主要材料、鞋底系统、闭合系统和目标滑雪项目识别的合格滑雪靴、单板滑雪靴或越野滑雪鞋型号 |
| production_route | 部件模塑或裁切；鞋面与内靴制作；底部配合与最终装配；最终检验与销售包装 |
| market_state | 制造设施门口的合格成品鞋类，并声明销售包装是否纳入 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 在制造设施门口提供合格的滑雪靴、单板滑雪靴或越野滑雪鞋。 |
| How much | 1 kg 合格成品鞋类净质量。 |
| How well | 满足申报型号关于子型、尺码、结构、相关时的鞋底-固定器接口、闭合系统、弯曲或刚度、材料与质量验收的规格。 |
| How long or cycle | 一次完成的生产输出事件；使用阶段寿命不属于本门到门参考。 |
| reference_flow_link | 功能单位由经核实的 CPC 29410 产品流实现，并按 1 kg 合格输出归一化。 |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 kg |
| 参考产品流 | Ski-boots, snowboard boots and cross-country ski footwear `6e39a9ed-f49c-4ddc-8869-7d4c47551bbf` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | footwear subtype; intended ski discipline; pair or single-article reporting convention; reference size and size mix; net finished mass; shell and cuff material; upper and liner construction; outsole and midsole system; closure and buckle system; adhesive and solvent route; component-moulding and cooling route; facility and country; production period; accepted quantity; sale-packaging inclusion |

构建前景数据包时，`必需限定信息` 中列出的信息应在数据集元数据、过程说明、参考流备注、产品说明或等效数据包字段中明确声明。缺失必需限定信息的数据包视为参考流定义不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_product_mass` | 参考产品与材料交换 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 将清单按 1 kg 合格成品鞋类净质量归一化；销售包装单独记录，不计入鞋类净质量。 |
| `pair_single_conversion` | 以双或只报告的产品与部件记录 | Mass | kg | 声明数量表示一双还是一只，采用产品特定实测平均质量换算，并保留数量和抽样记录。 |
| `component_count_to_mass` | 鞋眼、扣件、外底、中底、标签、鞋盒及其他计数记录 | Mass | kg | 采用实测或供应商规定的单件质量换算，并保留部件规格与抽样基础。 |
| `utility_energy_measurement` | 电力、外购蒸汽、热水与天然气 | 按卡片声明的能量或质量 | kWh; MJ; kg | 保留原始计量单位、换算因子、温度、压力或热值基础与分配分母；不得合并能源载体。 |
| `refrigerant_mass_measurement` | R134a 补充与释放 | Mass | kg | 使用设备特定检修记录，并在报告释放前闭合制冷剂质量平衡。 |
| `reference_output_reconciliation` | 合格输出、不合格品、返工与在制品 | Mass | kg | 核对申报期间的合格成品质量，并披露返工与库存变化。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 接收的树脂、片材、裁片、皮革、五金、化学品、部件、包装、公用工程与可归入的制冷剂检修记录，并声明身份、数量、可得时的供应方地理与期初库存。 |
| starting_condition_role | CPC 29410 鞋类制造的门到门前景起始条件。 |
| product_classification_scope | 仅限 CPC 3.0 子类 29410，并声明滑雪靴、单板滑雪靴或越野滑雪鞋子型。 |
| recursive_input_rule | 若投入已是成品 CPC 29410 鞋类，则以供应商数据集作为采购产品投入记录一次，不递归复现其前景制造。 |
| upstream_dataset_requirement | 每项接收的材料、部件、化学品、公用工程、制冷剂与包装投入须有地理和技术代表性上游数据集，或披露未解决数据缺口。 |
| disclosure | 声明产品子型、双只或单只约定、型号与尺码、结构路线、条件步骤、设施地理、生产期、计量与库存边界、分配、返工、废物去向、直接排放基础与包装纳入情况。 |

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_gate_to_gate` | foreground_model | 纳入为申报产品实施的部件模塑或裁切、鞋面与内靴制作、底部配合与最终装配、最终检验及销售包装；上游材料制造以及下游分销、使用和寿命终止不在此前景边界内。 | `afw-pefcr-v3-1-2025`, `eu-recommendation-2021-2279` |
| `boundary_product_route` | all_product_subtypes | 声明滑雪靴、单板滑雪靴或越野滑雪鞋子型，仅记录实际发生的硬壳、软鞋面、内靴、外底、闭合与固化路线。 | `afw-pefcr-v3-1-2025` |
| `boundary_atomic_inventory` | all_foreground_processes | 将每种材料、部件、胶黏剂、化学品、能源载体、制冷剂、包装材料、废物流与直接排放分别记录为独立交换。 | `eu-recommendation-2021-2279`, `afw-pefcr-v3-1-2025` |
| `boundary_step_losses` | manufacturing_steps | 在每个制造步骤核对材料投入、合格转移、不合格品、边角料、残余、返工与库存变化；不得用无来源的默认损耗百分比替代。 | `afw-pefcr-v3-1-2025`, `eu-recommendation-2021-2279` |
| `boundary_direct_releases` | combustion_solvent_and_refrigerant_sources | 仅依据监测、经核实的质量平衡或批准的设施排放台账记录向空气、水或土壤的释放，并明确接收环境介质。 | `eu-recommendation-2021-2279` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `component_manufacturing_and_cutting` | 部件模塑、裁切与准备 | `required` | 记录申报鞋类实际采用的硬壳、鞋底、泡棉、纺织物或皮革部件路线。 | 前景部件制造与准备 | kg 合格部件输出 |
| `upper_liner_fabrication` | 鞋面、内靴与闭合件制作 | `required` | 仅在申报结构采用时纳入缝制、鞋眼或织带安装及粘接。 | 前景鞋面与内靴制作 | kg 合格鞋面与内靴组件 |
| `stockfitting_and_final_assembly` | 底部配合与最终装配 | `required` | 记录该鞋类子型实际采用的外底、中底、壳体、扣件、胶黏剂与装配路线。 | 前景鞋类合并与最终装配 | kg 合格装配鞋类 |
| `inspection_and_sale_packaging` | 最终检验与销售包装 | `required` | 检验为必需步骤；各包装卡仅在相应材料随产品离厂时适用。 | 前景完工与包装 | 1 kg 合格参考产品 |

### 过程：部件模塑、裁切与准备（`component_manufacturing_and_cutting`）

#### 输入

##### 产品流

###### 热塑性聚氨酯颗粒（`thermoplastic_polyurethane_granulate_input`）

当申报路线模塑热塑性聚氨酯壳体、鞋帮或结构件时，将 Thermoplastic polyurethane granulate 作为一个独立交换记录。数量来自所述前景记录或计算。

- 选定流: Thermoplastic polyurethane granulate
- 流属性/单位: Mass / kg
- 数量规则: 根据批次领料、退料、收料与期末库存记录计算净领用质量
- 数值来源模式: 前景记录（`foreground_record`）
- 适用范围: 产品特定（`product_specific`）
- 归一化基准: 每 1 kg 合格部件输出
- 基准类型: 过程输出（`process_output`）
- 证据类型: 采集记录（`collected_record`）
- 采集协议: `cp_component_material_records`
- 来源: `afw-pefcr-v3-1-2025`, `eu-recommendation-2021-2279`

###### 乙烯-醋酸乙烯酯泡棉片（`eva_foam_sheet_input`）

当申报的内靴、衬垫或中底路线使用 EVA 泡棉片时，将 Ethylene-vinyl acetate foam sheet 作为一个独立交换记录。数量来自所述前景记录或计算。

- 选定流: Ethylene-vinyl acetate foam sheet
- 流属性/单位: Mass / kg
- 数量规则: 根据批次材料与库存记录计算泡棉片净领用质量
- 数值来源模式: 前景记录（`foreground_record`）
- 适用范围: 产品特定（`product_specific`）
- 归一化基准: 每 1 kg 合格部件输出
- 基准类型: 过程输出（`process_output`）
- 证据类型: 采集记录（`collected_record`）
- 采集协议: `cp_component_material_records`
- 来源: `afw-pefcr-v3-1-2025`, `eu-recommendation-2021-2279`

###### 聚酯机织物（`polyester_woven_fabric_input`）

当单板滑雪靴或越野滑雪鞋的鞋面或内衬使用聚酯机织物时，将 Polyester woven fabric 作为一个独立交换记录。数量来自所述前景记录或计算。

- 选定流: Polyester woven fabric
- 流属性/单位: Mass / kg
- 数量规则: 根据布卷领用、退料与库存记录计算织物净领用质量
- 数值来源模式: 前景记录（`foreground_record`）
- 适用范围: 产品特定（`product_specific`）
- 归一化基准: 每 1 kg 合格部件输出
- 基准类型: 过程输出（`process_output`）
- 证据类型: 采集记录（`collected_record`）
- 采集协议: `cp_component_material_records`
- 来源: `afw-pefcr-v3-1-2025`, `eu-recommendation-2021-2279`

###### 成品牛皮革（`finished_bovine_leather_input`）

当申报鞋面或增强件使用成品牛皮革时，将 Finished bovine leather 作为一个独立交换记录。数量来自所述前景记录或计算。

- 选定流: Finished bovine leather
- 流属性/单位: Mass / kg
- 数量规则: 根据皮张或皮片领用、退料与库存记录计算皮革净领用质量
- 数值来源模式: 前景记录（`foreground_record`）
- 适用范围: 产品特定（`product_specific`）
- 归一化基准: 每 1 kg 合格部件输出
- 基准类型: 过程输出（`process_output`）
- 证据类型: 采集记录（`collected_record`）
- 采集协议: `cp_component_material_records`
- 来源: `afw-pefcr-v3-1-2025`, `eu-recommendation-2021-2279`

###### 部件制造电力（`electricity_component_manufacturing_input`）

当模塑、裁切、削薄、铣削、压制或局部抽风设备使用电力时，将 Electricity 作为一个独立交换记录。数量来自所述前景记录或计算。

- 选定流: Electricity
- 流属性/单位: Energy / kWh
- 数量规则: 部件区域分表计量电力或据此计算的分配量
- 数值来源模式: 计算值（`calculated_value`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: 每 1 kg 合格部件输出
- 基准类型: 过程输出（`process_output`）
- 证据类型: 由采集计算（`calculated_from_collection`）
- 采集协议: `cp_component_utility_records`
- 来源: `afw-pefcr-v3-1-2025`, `eu-recommendation-2021-2279`

###### 部件加热用外购蒸汽（`purchased_steam_component_heating_input`）

当外购蒸汽为范围内成型或调理操作供热时，将 Purchased steam 作为一个独立交换记录。数量来自所述前景记录或计算。

- 选定流: Purchased steam
- 流属性/单位: Energy / MJ
- 数量规则: 将供应商计量的蒸汽质量按有记录的压力与焓值换算
- 数值来源模式: 计算值（`calculated_value`）
- 适用范围: 技术特定（`technology_specific`）
- 归一化基准: 每 1 kg 合格部件输出
- 基准类型: 过程输出（`process_output`）
- 证据类型: 由采集计算（`calculated_from_collection`）
- 采集协议: `cp_component_utility_records`
- 来源: `afw-pefcr-v3-1-2025`, `eu-recommendation-2021-2279`

###### 部件加热用热水（`hot_water_component_heating_input`）

当热水作为供热介质跨越部件过程边界时，将 Hot water 作为一个独立交换记录。数量来自所述前景记录或计算。

- 选定流: Hot water
- 流属性/单位: Mass / kg
- 数量规则: 计量热水质量，并保留供回水温度
- 数值来源模式: 前景记录（`foreground_record`）
- 适用范围: 技术特定（`technology_specific`）
- 归一化基准: 每 1 kg 合格部件输出
- 基准类型: 过程输出（`process_output`）
- 证据类型: 采集记录（`collected_record`）
- 采集协议: `cp_component_utility_records`
- 来源: `afw-pefcr-v3-1-2025`, `eu-recommendation-2021-2279`

###### 部件加热用天然气（`natural_gas_component_heating_input`）

当现场加热器或烘箱燃烧天然气用于模塑或调理时，将 Natural gas 作为一个独立交换记录。数量来自所述前景记录或计算。

- 选定流: Natural gas
- 流属性/单位: Energy / MJ
- 数量规则: 依据加热器或生产区域计量表分配天然气用量
- 数值来源模式: 计算值（`calculated_value`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: 每 1 kg 合格部件输出
- 基准类型: 过程输出（`process_output`）
- 证据类型: 由采集计算（`calculated_from_collection`）
- 采集协议: `cp_component_utility_records`
- 来源: `afw-pefcr-v3-1-2025`, `eu-recommendation-2021-2279`

###### R134a 制冷剂补充（`r134a_refrigerant_replenishment_input`）

当部件冷却设备使用 R134a 且在报告期内发生制冷剂补充时，将 1,1,1,2-Tetrafluoroethane 作为一个独立交换记录。数量来自所述前景记录或计算。

- 选定流: 1,1,1,2-Tetrafluoroethane
- 流属性/单位: Mass / kg
- 数量规则: 将检修补充量分配至部件冷却设备与报告期
- 数值来源模式: 前景记录（`foreground_record`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: 每 1 kg 合格部件输出
- 基准类型: 过程输出（`process_output`）
- 证据类型: 采集记录（`collected_record`）
- 采集协议: `cp_refrigerant_records`
- 来源: `afw-pefcr-v3-1-2025`, `eu-recommendation-2021-2279`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 模塑热塑性聚氨酯壳体部件（`moulded_tpu_shell_component_output`）

当硬壳滑雪靴路线产出合格壳体或鞋帮部件时，将 Moulded thermoplastic polyurethane ski-boot shell component 作为一个合格产品转移记录。数量来自所述前景记录。

- 选定流: Moulded thermoplastic polyurethane ski-boot shell component
- 流属性/单位: Mass / kg
- 数量规则: 计量模塑壳体部件的合格转移质量
- 数值来源模式: 前景记录（`foreground_record`）
- 适用范围: 产品特定（`product_specific`）
- 归一化基准: 每 1 kg 合格部件输出
- 基准类型: 过程输出（`process_output`）
- 证据类型: 采集记录（`collected_record`）
- 采集协议: `cp_component_material_records`
- 来源: `afw-pefcr-v3-1-2025`

###### 裁切 EVA 泡棉内靴部件（`cut_eva_liner_component_output`）

当EVA 泡棉被裁切为内靴、鞋舌、衬垫或中底部件时，将 Cut ethylene-vinyl acetate foam liner component 作为一个合格产品转移记录。数量来自所述前景记录。

- 选定流: Cut ethylene-vinyl acetate foam liner component
- 流属性/单位: Mass / kg
- 数量规则: 计量裁切 EVA 泡棉内靴部件的合格转移质量
- 数值来源模式: 前景记录（`foreground_record`）
- 适用范围: 产品特定（`product_specific`）
- 归一化基准: 每 1 kg 合格部件输出
- 基准类型: 过程输出（`process_output`）
- 证据类型: 采集记录（`collected_record`）
- 采集协议: `cp_component_material_records`
- 来源: `afw-pefcr-v3-1-2025`

###### 裁切聚酯鞋面片（`cut_polyester_upper_panel_output`）

当聚酯机织物被裁切为鞋面或内衬片时，将 Cut polyester woven footwear upper panel 作为一个合格产品转移记录。数量来自所述前景记录。

- 选定流: Cut polyester woven footwear upper panel
- 流属性/单位: Mass / kg
- 数量规则: 计量裁切聚酯鞋面片的合格转移质量
- 数值来源模式: 前景记录（`foreground_record`）
- 适用范围: 产品特定（`product_specific`）
- 归一化基准: 每 1 kg 合格部件输出
- 基准类型: 过程输出（`process_output`）
- 证据类型: 采集记录（`collected_record`）
- 采集协议: `cp_component_material_records`
- 来源: `afw-pefcr-v3-1-2025`

###### 裁切牛皮革鞋面片（`cut_leather_upper_panel_output`）

当成品牛皮革被裁切为鞋面或增强片时，将 Cut bovine-leather footwear upper panel 作为一个合格产品转移记录。数量来自所述前景记录。

- 选定流: Cut bovine-leather footwear upper panel
- 流属性/单位: Mass / kg
- 数量规则: 计量裁切皮革鞋面片的合格转移质量
- 数值来源模式: 前景记录（`foreground_record`）
- 适用范围: 产品特定（`product_specific`）
- 归一化基准: 每 1 kg 合格部件输出
- 基准类型: 过程输出（`process_output`）
- 证据类型: 采集记录（`collected_record`）
- 采集协议: `cp_component_material_records`
- 来源: `afw-pefcr-v3-1-2025`

##### 废物流

###### TPU 模塑废料（`tpu_moulding_scrap_output`）

当TPU 模塑产生作为废物离开过程的材料时，单独记录 Thermoplastic polyurethane moulding scrap，并保留实测质量、组成与处理去向。

- 选定流: Thermoplastic polyurethane moulding scrap
- 流属性/单位: Mass / kg
- 数量规则: 称量未回用于同一批次的浇口、流道、清机料与不合格件质量
- 数值来源模式: 前景记录（`foreground_record`）
- 适用范围: 技术特定（`technology_specific`）
- 归一化基准: 每 1 kg 合格部件输出
- 基准类型: 过程输出（`process_output`）
- 证据类型: 采集记录（`collected_record`）
- 采集协议: `cp_component_material_records`
- 来源: `afw-pefcr-v3-1-2025`, `eu-recommendation-2021-2279`

###### EVA 泡棉边角料（`eva_foam_offcut_output`）

当EVA 泡棉裁切产生分类收集的边角料时，单独记录 Ethylene-vinyl acetate foam cutting offcut，并保留实测质量、组成与处理去向。

- 选定流: Ethylene-vinyl acetate foam cutting offcut
- 流属性/单位: Mass / kg
- 数量规则: 依据裁切记录称量 EVA 泡棉边角料质量
- 数值来源模式: 前景记录（`foreground_record`）
- 适用范围: 产品特定（`product_specific`）
- 归一化基准: 每 1 kg 合格部件输出
- 基准类型: 过程输出（`process_output`）
- 证据类型: 采集记录（`collected_record`）
- 采集协议: `cp_component_material_records`
- 来源: `afw-pefcr-v3-1-2025`, `eu-recommendation-2021-2279`

###### 聚酯织物边角料（`polyester_fabric_offcut_output`）

当聚酯片材裁切产生分类收集的纺织边角料时，单独记录 Polyester woven fabric cutting offcut，并保留实测质量、组成与处理去向。

- 选定流: Polyester woven fabric cutting offcut
- 流属性/单位: Mass / kg
- 数量规则: 依据裁切记录称量聚酯织物边角料质量
- 数值来源模式: 前景记录（`foreground_record`）
- 适用范围: 产品特定（`product_specific`）
- 归一化基准: 每 1 kg 合格部件输出
- 基准类型: 过程输出（`process_output`）
- 证据类型: 采集记录（`collected_record`）
- 采集协议: `cp_component_material_records`
- 来源: `afw-pefcr-v3-1-2025`, `eu-recommendation-2021-2279`

###### 牛皮革边角料（`bovine_leather_offcut_output`）

当皮革裁切产生分类收集的边角料时，单独记录 Finished bovine-leather cutting offcut，并保留实测质量、组成与处理去向。

- 选定流: Finished bovine-leather cutting offcut
- 流属性/单位: Mass / kg
- 数量规则: 依据裁切记录称量牛皮革边角料质量
- 数值来源模式: 前景记录（`foreground_record`）
- 适用范围: 产品特定（`product_specific`）
- 归一化基准: 每 1 kg 合格部件输出
- 基准类型: 过程输出（`process_output`）
- 证据类型: 采集记录（`collected_record`）
- 采集协议: `cp_component_material_records`
- 来源: `afw-pefcr-v3-1-2025`, `eu-recommendation-2021-2279`

##### 基本流

###### 部件供热产生的化石二氧化碳（`fossil_co2_component_heat_output`）

仅当天然气在本过程边界内燃烧且存在经核实的排放记录时记录 Carbon dioxide, fossil, to air；不得仅因存在某项投入而推断该排放。

- 选定流: Carbon dioxide, fossil, to air
- 流属性/单位: Mass / kg
- 数量规则: 依据监测或经核实的设施排放台账分配至过程的质量
- 数值来源模式: 计算值（`calculated_value`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: 每 1 kg 合格部件输出
- 基准类型: 过程输出（`process_output`）
- 证据类型: 由采集计算（`calculated_from_collection`）
- 采集协议: `cp_direct_emissions_records`
- 来源: `afw-pefcr-v3-1-2025`, `eu-recommendation-2021-2279`

###### 部件供热产生的氮氧化物（`nitrogen_oxides_component_heat_output`）

仅当现场部件供热具有污染物特定监测或许可数据时记录 Nitrogen oxides to air；不得仅因存在某项投入而推断该排放。

- 选定流: Nitrogen oxides to air
- 流属性/单位: Mass / kg
- 数量规则: 依据监测或经核实的设施排放台账分配至过程的质量
- 数值来源模式: 计算值（`calculated_value`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: 每 1 kg 合格部件输出
- 基准类型: 过程输出（`process_output`）
- 证据类型: 由采集计算（`calculated_from_collection`）
- 采集协议: `cp_direct_emissions_records`
- 来源: `afw-pefcr-v3-1-2025`, `eu-recommendation-2021-2279`

###### 释放至空气的 R134a（`r134a_to_air_output`）

仅当R134a 设备具有补充、回收、期初充注与期末充注记录时记录 1,1,1,2-Tetrafluoroethane to air；不得仅因存在某项投入而推断该排放。

- 选定流: 1,1,1,2-Tetrafluoroethane to air
- 流属性/单位: Mass / kg
- 数量规则: 受影响设备与报告期的经核实制冷剂质量平衡
- 数值来源模式: 计算值（`calculated_value`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: 每 1 kg 合格部件输出
- 基准类型: 过程输出（`process_output`）
- 证据类型: 由采集计算（`calculated_from_collection`）
- 采集协议: `cp_refrigerant_records`
- 来源: `afw-pefcr-v3-1-2025`, `eu-recommendation-2021-2279`

### 过程：鞋面、内靴与闭合件制作（`upper_liner_fabrication`）

#### 输入

##### 产品流

###### 裁切 EVA 泡棉内靴部件（`cut_eva_liner_component_input`）

当申报结构使用裁切 EVA 内靴、鞋舌或衬垫部件时，将 Cut ethylene-vinyl acetate foam liner component 作为一个独立交换记录。数量来自所述前景记录或计算。

- 选定流: Cut ethylene-vinyl acetate foam liner component
- 流属性/单位: Mass / kg
- 数量规则: 鞋面与内靴制作接收的计量转移质量
- 数值来源模式: 前景记录（`foreground_record`）
- 适用范围: 产品特定（`product_specific`）
- 归一化基准: 每 1 kg 合格鞋面与内靴组件
- 基准类型: 过程输出（`process_output`）
- 证据类型: 采集记录（`collected_record`）
- 采集协议: `cp_upper_liner_batch_records`
- 来源: `afw-pefcr-v3-1-2025`

###### 裁切聚酯鞋面片（`cut_polyester_upper_panel_input`）

当申报鞋面或内靴使用裁切聚酯片时，将 Cut polyester woven footwear upper panel 作为一个独立交换记录。数量来自所述前景记录或计算。

- 选定流: Cut polyester woven footwear upper panel
- 流属性/单位: Mass / kg
- 数量规则: 鞋面与内靴制作接收的计量转移质量
- 数值来源模式: 前景记录（`foreground_record`）
- 适用范围: 产品特定（`product_specific`）
- 归一化基准: 每 1 kg 合格鞋面与内靴组件
- 基准类型: 过程输出（`process_output`）
- 证据类型: 采集记录（`collected_record`）
- 采集协议: `cp_upper_liner_batch_records`
- 来源: `afw-pefcr-v3-1-2025`

###### 裁切牛皮革鞋面片（`cut_leather_upper_panel_input`）

当申报鞋面或增强件使用裁切牛皮革片时，将 Cut bovine-leather footwear upper panel 作为一个独立交换记录。数量来自所述前景记录或计算。

- 选定流: Cut bovine-leather footwear upper panel
- 流属性/单位: Mass / kg
- 数量规则: 鞋面与内靴制作接收的计量转移质量
- 数值来源模式: 前景记录（`foreground_record`）
- 适用范围: 产品特定（`product_specific`）
- 归一化基准: 每 1 kg 合格鞋面与内靴组件
- 基准类型: 过程输出（`process_output`）
- 证据类型: 采集记录（`collected_record`）
- 采集协议: `cp_upper_liner_batch_records`
- 来源: `afw-pefcr-v3-1-2025`

###### 聚酯缝纫线（`polyester_sewing_thread_input`）

当申报缝制结构使用聚酯缝纫线时，将 Polyester sewing thread 作为一个独立交换记录。数量来自所述前景记录或计算。

- 选定流: Polyester sewing thread
- 流属性/单位: Mass / kg
- 数量规则: 根据线筒领用、退料与期末库存记录计算缝纫线净领用质量
- 数值来源模式: 前景记录（`foreground_record`）
- 适用范围: 产品特定（`product_specific`）
- 归一化基准: 每 1 kg 合格鞋面与内靴组件
- 基准类型: 过程输出（`process_output`）
- 证据类型: 采集记录（`collected_record`）
- 采集协议: `cp_upper_liner_batch_records`
- 来源: `afw-pefcr-v3-1-2025`, `eu-recommendation-2021-2279`

###### 聚酯闭合织带（`polyester_webbing_input`）

当聚酯织带构成闭合件、提环、绑带或增强件时，将 Polyester woven webbing 作为一个独立交换记录。数量来自所述前景记录或计算。

- 选定流: Polyester woven webbing
- 流属性/单位: Mass / kg
- 数量规则: 根据织带卷领用、退料与期末库存记录计算净领用质量
- 数值来源模式: 前景记录（`foreground_record`）
- 适用范围: 产品特定（`product_specific`）
- 归一化基准: 每 1 kg 合格鞋面与内靴组件
- 基准类型: 过程输出（`process_output`）
- 证据类型: 采集记录（`collected_record`）
- 采集协议: `cp_upper_liner_batch_records`
- 来源: `afw-pefcr-v3-1-2025`, `eu-recommendation-2021-2279`

###### 不锈钢鞋眼（`stainless_steel_eyelet_input`）

当申报闭合系统使用不锈钢鞋眼时，将 Stainless steel footwear eyelet 作为一个独立交换记录。数量来自所述前景记录或计算。

- 选定流: Stainless steel footwear eyelet
- 流属性/单位: Mass / kg
- 数量规则: 鞋眼领用数量乘以实测或供应商规定的单件质量并扣除退料
- 数值来源模式: 计算值（`calculated_value`）
- 适用范围: 产品特定（`product_specific`）
- 归一化基准: 每 1 kg 合格鞋面与内靴组件
- 基准类型: 过程输出（`process_output`）
- 证据类型: 由采集计算（`calculated_from_collection`）
- 采集协议: `cp_upper_liner_batch_records`
- 来源: `afw-pefcr-v3-1-2025`, `eu-recommendation-2021-2279`

###### 鞋面制作聚氨酯胶黏剂（`polyurethane_adhesive_upper_input`）

当鞋面或内靴路线使用聚氨酯胶黏剂时，将 Polyurethane footwear adhesive 作为一个独立交换记录。数量来自所述前景记录或计算。

- 选定流: Polyurethane footwear adhesive
- 流属性/单位: Mass / kg
- 数量规则: 根据容器领用、退料与期末库存记录计算胶黏剂净领用质量
- 数值来源模式: 前景记录（`foreground_record`）
- 适用范围: 技术特定（`technology_specific`）
- 归一化基准: 每 1 kg 合格鞋面与内靴组件
- 基准类型: 过程输出（`process_output`）
- 证据类型: 采集记录（`collected_record`）
- 采集协议: `cp_upper_liner_chemical_records`
- 来源: `afw-pefcr-v3-1-2025`, `eu-recommendation-2021-2279`

###### 鞋面制作乙酸乙酯（`ethyl_acetate_upper_input`）

当乙酸乙酯有记录地作为工艺溶剂或清洗化学品使用时，将 Ethyl acetate 作为一个独立交换记录。数量来自所述前景记录或计算。

- 选定流: Ethyl acetate
- 流属性/单位: Mass / kg
- 数量规则: 根据容器领用、退料与期末库存记录计算乙酸乙酯净领用质量
- 数值来源模式: 前景记录（`foreground_record`）
- 适用范围: 技术特定（`technology_specific`）
- 归一化基准: 每 1 kg 合格鞋面与内靴组件
- 基准类型: 过程输出（`process_output`）
- 证据类型: 采集记录（`collected_record`）
- 采集协议: `cp_upper_liner_chemical_records`
- 来源: `afw-pefcr-v3-1-2025`, `eu-recommendation-2021-2279`

###### 鞋面与内靴制作电力（`electricity_upper_liner_input`）

当缝制、削薄、鞋眼安装、涂胶、通风或搬运使用电力时，将 Electricity 作为一个独立交换记录。数量来自所述前景记录或计算。

- 选定流: Electricity
- 流属性/单位: Energy / kWh
- 数量规则: 鞋面生产线分表计量电力或据此计算的分配量
- 数值来源模式: 计算值（`calculated_value`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: 每 1 kg 合格鞋面与内靴组件
- 基准类型: 过程输出（`process_output`）
- 证据类型: 由采集计算（`calculated_from_collection`）
- 采集协议: `cp_upper_liner_utility_records`
- 来源: `afw-pefcr-v3-1-2025`, `eu-recommendation-2021-2279`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 滑雪鞋鞋面与内靴组件（`prepared_upper_liner_output`）

当鞋面与内靴通过申报的过程质量关口时，将 Prepared ski-footwear upper and liner assembly 作为一个合格产品转移记录。数量来自所述前景记录。

- 选定流: Prepared ski-footwear upper and liner assembly
- 流属性/单位: Mass / kg
- 数量规则: 计量转移至最终装配的合格质量
- 数值来源模式: 前景记录（`foreground_record`）
- 适用范围: 产品特定（`product_specific`）
- 归一化基准: 每 1 kg 合格鞋面与内靴组件
- 基准类型: 过程输出（`process_output`）
- 证据类型: 采集记录（`collected_record`）
- 采集协议: `cp_upper_liner_batch_records`
- 来源: `afw-pefcr-v3-1-2025`

##### 废物流

###### 聚酯缝纫线废料（`polyester_sewing_thread_waste_output`）

当缝纫线废料离开鞋面生产线过程时，单独记录 Waste polyester sewing thread，并保留实测质量、组成与处理去向。

- 选定流: Waste polyester sewing thread
- 流属性/单位: Mass / kg
- 数量规则: 称量线头、损坏缝纫线与不可回收线筒余料
- 数值来源模式: 前景记录（`foreground_record`）
- 适用范围: 产品特定（`product_specific`）
- 归一化基准: 每 1 kg 合格鞋面与内靴组件
- 基准类型: 过程输出（`process_output`）
- 证据类型: 采集记录（`collected_record`）
- 采集协议: `cp_upper_liner_batch_records`
- 来源: `afw-pefcr-v3-1-2025`, `eu-recommendation-2021-2279`

###### 聚酯织带边角料（`polyester_webbing_offcut_output`）

当闭合织带裁切产生分类收集的边角料时，单独记录 Polyester woven webbing offcut，并保留实测质量、组成与处理去向。

- 选定流: Polyester woven webbing offcut
- 流属性/单位: Mass / kg
- 数量规则: 称量织带切头与不合格件质量
- 数值来源模式: 前景记录（`foreground_record`）
- 适用范围: 产品特定（`product_specific`）
- 归一化基准: 每 1 kg 合格鞋面与内靴组件
- 基准类型: 过程输出（`process_output`）
- 证据类型: 采集记录（`collected_record`）
- 采集协议: `cp_upper_liner_batch_records`
- 来源: `afw-pefcr-v3-1-2025`, `eu-recommendation-2021-2279`

###### 不锈钢鞋眼废料（`stainless_steel_eyelet_scrap_output`）

当损坏或多余鞋眼作为分类金属废料离开过程时，单独记录 Stainless steel footwear eyelet scrap，并保留实测质量、组成与处理去向。

- 选定流: Stainless steel footwear eyelet scrap
- 流属性/单位: Mass / kg
- 数量规则: 不合格鞋眼数量乘以单件质量，或直接称量废料质量
- 数值来源模式: 计算值（`calculated_value`）
- 适用范围: 产品特定（`product_specific`）
- 归一化基准: 每 1 kg 合格鞋面与内靴组件
- 基准类型: 过程输出（`process_output`）
- 证据类型: 由采集计算（`calculated_from_collection`）
- 采集协议: `cp_upper_liner_batch_records`
- 来源: `afw-pefcr-v3-1-2025`, `eu-recommendation-2021-2279`

###### 鞋面制作聚氨酯胶黏剂废物（`polyurethane_adhesive_waste_upper_output`）

当聚氨酯胶黏剂残余离开鞋面生产线边界时，单独记录 Waste polyurethane footwear adhesive，并保留实测质量、组成与处理去向。

- 选定流: Waste polyurethane footwear adhesive
- 流属性/单位: Mass / kg
- 数量规则: 称量转移至废物管理的未用、过期、洒漏或固化胶黏剂
- 数值来源模式: 前景记录（`foreground_record`）
- 适用范围: 技术特定（`technology_specific`）
- 归一化基准: 每 1 kg 合格鞋面与内靴组件
- 基准类型: 过程输出（`process_output`）
- 证据类型: 采集记录（`collected_record`）
- 采集协议: `cp_upper_liner_chemical_records`
- 来源: `afw-pefcr-v3-1-2025`, `eu-recommendation-2021-2279`

###### 乙酸乙酯污染清洁布（`ethyl_acetate_contaminated_wipe_output`）

当乙酸乙酯清洗产生含溶剂固体废物时，单独记录 Ethyl-acetate-contaminated cleaning wipe，并保留实测质量、组成与处理去向。

- 选定流: Ethyl-acetate-contaminated cleaning wipe
- 流属性/单位: Mass / kg
- 数量规则: 称量由过程转移至废物暂存的污染清洁布
- 数值来源模式: 前景记录（`foreground_record`）
- 适用范围: 技术特定（`technology_specific`）
- 归一化基准: 每 1 kg 合格鞋面与内靴组件
- 基准类型: 过程输出（`process_output`）
- 证据类型: 采集记录（`collected_record`）
- 采集协议: `cp_upper_liner_chemical_records`
- 来源: `afw-pefcr-v3-1-2025`, `eu-recommendation-2021-2279`

###### 不合格鞋面与内靴组件（`rejected_upper_liner_output`）

当不合格鞋面或内靴离开在制品时，单独记录 Rejected ski-footwear upper and liner assembly，并保留实测质量、组成与处理去向。

- 选定流: Rejected ski-footwear upper and liner assembly
- 流属性/单位: Mass / kg
- 数量规则: 称量未返工的不合格组件质量
- 数值来源模式: 前景记录（`foreground_record`）
- 适用范围: 产品特定（`product_specific`）
- 归一化基准: 每 1 kg 合格鞋面与内靴组件
- 基准类型: 过程输出（`process_output`）
- 证据类型: 采集记录（`collected_record`）
- 采集协议: `cp_upper_liner_batch_records`
- 来源: `afw-pefcr-v3-1-2025`, `eu-recommendation-2021-2279`

##### 基本流

###### 释放至空气的乙酸乙酯（`ethyl_acetate_to_air_output`）

仅当设施具有监测或经核实的乙酸乙酯质量平衡时记录 Ethyl acetate to air；不得仅因存在某项投入而推断该排放。

- 选定流: Ethyl acetate to air
- 流属性/单位: Mass / kg
- 数量规则: 实测释放量或经核实溶剂平衡分配至鞋面批次的损失量
- 数值来源模式: 计算值（`calculated_value`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: 每 1 kg 合格鞋面与内靴组件
- 基准类型: 过程输出（`process_output`）
- 证据类型: 由采集计算（`calculated_from_collection`）
- 采集协议: `cp_direct_emissions_records`
- 来源: `afw-pefcr-v3-1-2025`, `eu-recommendation-2021-2279`

### 过程：底部配合与最终装配（`stockfitting_and_final_assembly`）

#### 输入

##### 产品流

###### 滑雪鞋鞋面与内靴组件（`prepared_upper_liner_input`）

当合格鞋面与内靴组件进入底部配合或最终装配时，将 Prepared ski-footwear upper and liner assembly 作为一个独立交换记录。数量来自所述前景记录或计算。

- 选定流: Prepared ski-footwear upper and liner assembly
- 流属性/单位: Mass / kg
- 数量规则: 最终装配接收的计量转移质量
- 数值来源模式: 前景记录（`foreground_record`）
- 适用范围: 产品特定（`product_specific`）
- 归一化基准: 每 1 kg 合格装配鞋类
- 基准类型: 过程输出（`process_output`）
- 证据类型: 采集记录（`collected_record`）
- 采集协议: `cp_final_assembly_batch_records`
- 来源: `afw-pefcr-v3-1-2025`

###### 模塑热塑性聚氨酯壳体部件（`moulded_tpu_shell_component_input`）

当硬壳滑雪靴路线使用模塑 TPU 壳体或鞋帮部件时，将 Moulded thermoplastic polyurethane ski-boot shell component 作为一个独立交换记录。数量来自所述前景记录或计算。

- 选定流: Moulded thermoplastic polyurethane ski-boot shell component
- 流属性/单位: Mass / kg
- 数量规则: 最终装配接收的壳体与鞋帮部件计量质量
- 数值来源模式: 前景记录（`foreground_record`）
- 适用范围: 产品特定（`product_specific`）
- 归一化基准: 每 1 kg 合格装配鞋类
- 基准类型: 过程输出（`process_output`）
- 证据类型: 采集记录（`collected_record`）
- 采集协议: `cp_final_assembly_batch_records`
- 来源: `afw-pefcr-v3-1-2025`

###### 合成橡胶外底（`synthetic_rubber_outsole_input`）

当申报鞋类使用合成橡胶外底时，将 Synthetic rubber ski-footwear outsole 作为一个独立交换记录。数量来自所述前景记录或计算。

- 选定流: Synthetic rubber ski-footwear outsole
- 流属性/单位: Mass / kg
- 数量规则: 根据数量与单件质量或直接称量记录计算外底净领用质量
- 数值来源模式: 计算值（`calculated_value`）
- 适用范围: 产品特定（`product_specific`）
- 归一化基准: 每 1 kg 合格装配鞋类
- 基准类型: 过程输出（`process_output`）
- 证据类型: 由采集计算（`calculated_from_collection`）
- 采集协议: `cp_final_assembly_batch_records`
- 来源: `afw-pefcr-v3-1-2025`, `eu-recommendation-2021-2279`

###### EVA 中底部件（`eva_midsole_component_input`）

当申报结构使用 EVA 中底部件时，将 Ethylene-vinyl acetate ski-footwear midsole component 作为一个独立交换记录。数量来自所述前景记录或计算。

- 选定流: Ethylene-vinyl acetate ski-footwear midsole component
- 流属性/单位: Mass / kg
- 数量规则: 根据数量与单件质量或直接称量记录计算中底净领用质量
- 数值来源模式: 计算值（`calculated_value`）
- 适用范围: 产品特定（`product_specific`）
- 归一化基准: 每 1 kg 合格装配鞋类
- 基准类型: 过程输出（`process_output`）
- 证据类型: 由采集计算（`calculated_from_collection`）
- 采集协议: `cp_final_assembly_batch_records`
- 来源: `afw-pefcr-v3-1-2025`, `eu-recommendation-2021-2279`

###### 不锈钢扣件（`stainless_steel_buckle_input`）

当申报闭合系统使用不锈钢扣件时，将 Stainless steel ski-boot buckle 作为一个独立交换记录。数量来自所述前景记录或计算。

- 选定流: Stainless steel ski-boot buckle
- 流属性/单位: Mass / kg
- 数量规则: 扣件领用数量乘以实测或供应商规定的单件质量并扣除退料
- 数值来源模式: 计算值（`calculated_value`）
- 适用范围: 产品特定（`product_specific`）
- 归一化基准: 每 1 kg 合格装配鞋类
- 基准类型: 过程输出（`process_output`）
- 证据类型: 由采集计算（`calculated_from_collection`）
- 采集协议: `cp_final_assembly_batch_records`
- 来源: `afw-pefcr-v3-1-2025`, `eu-recommendation-2021-2279`

###### 最终装配聚氨酯胶黏剂（`polyurethane_adhesive_assembly_input`）

当底部配合或最终装配使用聚氨酯胶黏剂时，将 Polyurethane footwear adhesive 作为一个独立交换记录。数量来自所述前景记录或计算。

- 选定流: Polyurethane footwear adhesive
- 流属性/单位: Mass / kg
- 数量规则: 根据容器领用、退料与期末库存记录计算胶黏剂净领用质量
- 数值来源模式: 前景记录（`foreground_record`）
- 适用范围: 技术特定（`technology_specific`）
- 归一化基准: 每 1 kg 合格装配鞋类
- 基准类型: 过程输出（`process_output`）
- 证据类型: 采集记录（`collected_record`）
- 采集协议: `cp_final_assembly_chemical_records`
- 来源: `afw-pefcr-v3-1-2025`, `eu-recommendation-2021-2279`

###### 最终装配电力（`electricity_final_assembly_input`）

当压合、底部配合、紧固、固化、测试、通风或搬运使用电力时，将 Electricity 作为一个独立交换记录。数量来自所述前景记录或计算。

- 选定流: Electricity
- 流属性/单位: Energy / kWh
- 数量规则: 最终装配分表计量电力或据此计算的分配量
- 数值来源模式: 计算值（`calculated_value`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: 每 1 kg 合格装配鞋类
- 基准类型: 过程输出（`process_output`）
- 证据类型: 由采集计算（`calculated_from_collection`）
- 采集协议: `cp_final_assembly_utility_records`
- 来源: `afw-pefcr-v3-1-2025`, `eu-recommendation-2021-2279`

###### 最终装配加热用天然气（`natural_gas_final_assembly_input`）

当现场压机加热器或固化烘箱燃烧天然气时，将 Natural gas 作为一个独立交换记录。数量来自所述前景记录或计算。

- 选定流: Natural gas
- 流属性/单位: Energy / MJ
- 数量规则: 依据压机、烘箱或区域计量表分配天然气用量
- 数值来源模式: 计算值（`calculated_value`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: 每 1 kg 合格装配鞋类
- 基准类型: 过程输出（`process_output`）
- 证据类型: 由采集计算（`calculated_from_collection`）
- 采集协议: `cp_final_assembly_utility_records`
- 来源: `afw-pefcr-v3-1-2025`, `eu-recommendation-2021-2279`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 包装前装配滑雪鞋类（`assembled_ski_footwear_output`）

当完成鞋类通过申报的装配质量关口时，将 Assembled ski footwear before packaging 作为一个合格产品转移记录。数量来自所述前景记录。

- 选定流: Assembled ski footwear before packaging
- 流属性/单位: Mass / kg
- 数量规则: 计量转移至最终检验的合格质量
- 数值来源模式: 前景记录（`foreground_record`）
- 适用范围: 产品特定（`product_specific`）
- 归一化基准: 每 1 kg 合格装配鞋类
- 基准类型: 过程输出（`process_output`）
- 证据类型: 采集记录（`collected_record`）
- 采集协议: `cp_final_assembly_batch_records`
- 来源: `afw-pefcr-v3-1-2025`

##### 废物流

###### 合成橡胶外底修边废料（`synthetic_rubber_trim_waste_output`）

当外底配合或修边产生分类收集的橡胶废物时，单独记录 Synthetic rubber outsole trimming waste，并保留实测质量、组成与处理去向。

- 选定流: Synthetic rubber outsole trimming waste
- 流属性/单位: Mass / kg
- 数量规则: 称量外底修边料与不合格橡胶件质量
- 数值来源模式: 前景记录（`foreground_record`）
- 适用范围: 产品特定（`product_specific`）
- 归一化基准: 每 1 kg 合格装配鞋类
- 基准类型: 过程输出（`process_output`）
- 证据类型: 采集记录（`collected_record`）
- 采集协议: `cp_final_assembly_batch_records`
- 来源: `afw-pefcr-v3-1-2025`, `eu-recommendation-2021-2279`

###### 最终装配聚氨酯胶黏剂废物（`polyurethane_adhesive_waste_assembly_output`）

当聚氨酯胶黏剂残余离开最终装配边界时，单独记录 Waste polyurethane footwear adhesive，并保留实测质量、组成与处理去向。

- 选定流: Waste polyurethane footwear adhesive
- 流属性/单位: Mass / kg
- 数量规则: 称量转移至废物管理的未用、过期、洒漏或固化胶黏剂
- 数值来源模式: 前景记录（`foreground_record`）
- 适用范围: 技术特定（`technology_specific`）
- 归一化基准: 每 1 kg 合格装配鞋类
- 基准类型: 过程输出（`process_output`）
- 证据类型: 采集记录（`collected_record`）
- 采集协议: `cp_final_assembly_chemical_records`
- 来源: `afw-pefcr-v3-1-2025`, `eu-recommendation-2021-2279`

###### 不锈钢扣件废料（`stainless_steel_buckle_scrap_output`）

当损坏或多余扣件作为分类金属废料离开最终装配时，单独记录 Stainless steel ski-boot buckle scrap，并保留实测质量、组成与处理去向。

- 选定流: Stainless steel ski-boot buckle scrap
- 流属性/单位: Mass / kg
- 数量规则: 不合格扣件数量乘以单件质量，或直接称量废料质量
- 数值来源模式: 计算值（`calculated_value`）
- 适用范围: 产品特定（`product_specific`）
- 归一化基准: 每 1 kg 合格装配鞋类
- 基准类型: 过程输出（`process_output`）
- 证据类型: 由采集计算（`calculated_from_collection`）
- 采集协议: `cp_final_assembly_batch_records`
- 来源: `afw-pefcr-v3-1-2025`, `eu-recommendation-2021-2279`

###### 不合格装配滑雪鞋类（`rejected_footwear_assembly_output`）

当不合格靴鞋离开在制品时，单独记录 Rejected assembled ski footwear，并保留实测质量、组成与处理去向。

- 选定流: Rejected assembled ski footwear
- 流属性/单位: Mass / kg
- 数量规则: 称量未返工的不合格装配鞋类质量
- 数值来源模式: 前景记录（`foreground_record`）
- 适用范围: 产品特定（`product_specific`）
- 归一化基准: 每 1 kg 合格装配鞋类
- 基准类型: 过程输出（`process_output`）
- 证据类型: 采集记录（`collected_record`）
- 采集协议: `cp_final_assembly_batch_records`
- 来源: `afw-pefcr-v3-1-2025`, `eu-recommendation-2021-2279`

##### 基本流

###### 装配供热产生的化石二氧化碳（`fossil_co2_assembly_heat_output`）

仅当天然气在最终装配边界内燃烧且存在经核实的排放记录时记录 Carbon dioxide, fossil, to air；不得仅因存在某项投入而推断该排放。

- 选定流: Carbon dioxide, fossil, to air
- 流属性/单位: Mass / kg
- 数量规则: 依据监测或经核实的设施排放台账分配至过程的质量
- 数值来源模式: 计算值（`calculated_value`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: 每 1 kg 合格装配鞋类
- 基准类型: 过程输出（`process_output`）
- 证据类型: 由采集计算（`calculated_from_collection`）
- 采集协议: `cp_direct_emissions_records`
- 来源: `afw-pefcr-v3-1-2025`, `eu-recommendation-2021-2279`

###### 装配供热产生的氮氧化物（`nitrogen_oxides_assembly_heat_output`）

仅当现场最终装配供热具有污染物特定监测或许可数据时记录 Nitrogen oxides to air；不得仅因存在某项投入而推断该排放。

- 选定流: Nitrogen oxides to air
- 流属性/单位: Mass / kg
- 数量规则: 依据监测或经核实的设施排放台账分配至过程的质量
- 数值来源模式: 计算值（`calculated_value`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: 每 1 kg 合格装配鞋类
- 基准类型: 过程输出（`process_output`）
- 证据类型: 由采集计算（`calculated_from_collection`）
- 采集协议: `cp_direct_emissions_records`
- 来源: `afw-pefcr-v3-1-2025`, `eu-recommendation-2021-2279`

### 过程：最终检验与销售包装（`inspection_and_sale_packaging`）

#### 输入

##### 产品流

###### 包装前装配滑雪鞋类（`assembled_ski_footwear_input`）

当合格装配鞋类进入最终检验与包装时，将 Assembled ski footwear before packaging 作为一个独立交换记录。数量来自所述前景记录或计算。

- 选定流: Assembled ski footwear before packaging
- 流属性/单位: Mass / kg
- 数量规则: 进入最终检验的计量转移质量
- 数值来源模式: 前景记录（`foreground_record`）
- 适用范围: 产品特定（`product_specific`）
- 归一化基准: 每 1 kg 合格参考产品
- 基准类型: 参考流（`reference_flow`）
- 证据类型: 采集记录（`collected_record`）
- 采集协议: `cp_packaging_batch_records`
- 来源: `afw-pefcr-v3-1-2025`

###### 检验与包装电力（`electricity_inspection_packaging_input`）

当检验、测试、贴标、封装或搬运设备使用电力时，将 Electricity 作为一个独立交换记录。数量来自所述前景记录或计算。

- 选定流: Electricity
- 流属性/单位: Energy / kWh
- 数量规则: 完工区域分表计量电力或据此计算的分配量
- 数值来源模式: 计算值（`calculated_value`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: 每 1 kg 合格参考产品
- 基准类型: 参考流（`reference_flow`）
- 证据类型: 由采集计算（`calculated_from_collection`）
- 采集协议: `cp_packaging_utility_records`
- 来源: `afw-pefcr-v3-1-2025`, `eu-recommendation-2021-2279`

###### 纸质包裹薄页纸（`paper_tissue_input`）

当纸质薄页纸随申报产品包装离开设施时，将 Paper wrapping tissue 作为一个独立交换记录。数量来自所述前景记录或计算。

- 选定流: Paper wrapping tissue
- 流属性/单位: Mass / kg
- 数量规则: 薄页纸领用张数乘以实测或供应商规定的单张质量并扣除退料
- 数值来源模式: 计算值（`calculated_value`）
- 适用范围: 产品特定（`product_specific`）
- 归一化基准: 每 1 kg 合格参考产品
- 基准类型: 参考流（`reference_flow`）
- 证据类型: 由采集计算（`calculated_from_collection`）
- 采集协议: `cp_packaging_batch_records`
- 来源: `afw-pefcr-v3-1-2025`, `eu-recommendation-2021-2279`

###### 瓦楞纤维板鞋盒（`corrugated_carton_input`）

当销售或运输鞋盒随申报鞋类离开设施时，将 Corrugated fibreboard footwear carton 作为一个独立交换记录。数量来自所述前景记录或计算。

- 选定流: Corrugated fibreboard footwear carton
- 流属性/单位: Mass / kg
- 数量规则: 鞋盒领用数量乘以实测或供应商规定的单盒质量并分配至合格产品
- 数值来源模式: 计算值（`calculated_value`）
- 适用范围: 产品特定（`product_specific`）
- 归一化基准: 每 1 kg 合格参考产品
- 基准类型: 参考流（`reference_flow`）
- 证据类型: 由采集计算（`calculated_from_collection`）
- 采集协议: `cp_packaging_batch_records`
- 来源: `afw-pefcr-v3-1-2025`, `eu-recommendation-2021-2279`

###### 纸质产品标签（`paper_label_input`）

当纸质产品标签或吊牌随鞋类离开设施时，将 Paper product label 作为一个独立交换记录。数量来自所述前景记录或计算。

- 选定流: Paper product label
- 流属性/单位: Mass / kg
- 数量规则: 标签领用数量乘以实测或供应商规定的单张质量并扣除退料
- 数值来源模式: 计算值（`calculated_value`）
- 适用范围: 产品特定（`product_specific`）
- 归一化基准: 每 1 kg 合格参考产品
- 基准类型: 参考流（`reference_flow`）
- 证据类型: 由采集计算（`calculated_from_collection`）
- 采集协议: `cp_packaging_batch_records`
- 来源: `afw-pefcr-v3-1-2025`, `eu-recommendation-2021-2279`

###### 聚丙烯胶带（`polypropylene_tape_input`）

当聚丙烯胶带用于封合申报鞋盒或销售包装时，将 Polypropylene adhesive tape 作为一个独立交换记录。数量来自所述前景记录或计算。

- 选定流: Polypropylene adhesive tape
- 流属性/单位: Mass / kg
- 数量规则: 实测胶带卷质量消耗，或领用长度乘以产品特定单位长度质量
- 数值来源模式: 计算值（`calculated_value`）
- 适用范围: 产品特定（`product_specific`）
- 归一化基准: 每 1 kg 合格参考产品
- 基准类型: 参考流（`reference_flow`）
- 证据类型: 由采集计算（`calculated_from_collection`）
- 采集协议: `cp_packaging_batch_records`
- 来源: `afw-pefcr-v3-1-2025`, `eu-recommendation-2021-2279`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 合格滑雪靴、单板滑雪靴和越野滑雪鞋（`accepted_reference_product_output`）

当合格工厂门产品实现参考流时，将 Ski-boots, snowboard boots and cross-country ski footwear 作为一个合格产品转移记录。数量来自所述前景记录。

- 选定流: Ski-boots, snowboard boots and cross-country ski footwear `6e39a9ed-f49c-4ddc-8869-7d4c47551bbf`
- 流属性/单位: Mass / kg
- 数量规则: 1 kg 合格成品鞋类净质量
- 数值来源模式: 固定值（`fixed_value`）
- 适用范围: 产品特定（`product_specific`）
- 归一化基准: 每 1 kg 合格参考产品
- 基准类型: 参考流（`reference_flow`）
- 证据类型: 身份引用（`identity_reference`）
- 来源: `unsd-cpc-3-0-29410`

##### 废物流

###### 不合格成品滑雪鞋类（`rejected_finished_ski_footwear_output`）

当成品不合格品在最终检验后离开在制品时，单独记录 Rejected finished ski footwear，并保留实测质量、组成与处理去向。

- 选定流: Rejected finished ski footwear
- 流属性/单位: Mass / kg
- 数量规则: 称量未返工的最终检验不合格品质量
- 数值来源模式: 前景记录（`foreground_record`）
- 适用范围: 产品特定（`product_specific`）
- 归一化基准: 每 1 kg 合格参考产品
- 基准类型: 参考流（`reference_flow`）
- 证据类型: 采集记录（`collected_record`）
- 采集协议: `cp_packaging_batch_records`
- 来源: `afw-pefcr-v3-1-2025`, `eu-recommendation-2021-2279`

###### 纸质包裹薄页纸废料（`paper_tissue_scrap_output`）

当纸质薄页纸在包装中损坏、裁边或未使用时，单独记录 Paper wrapping-tissue scrap，并保留实测质量、组成与处理去向。

- 选定流: Paper wrapping-tissue scrap
- 流属性/单位: Mass / kg
- 数量规则: 称量转移至废物管理的损坏、裁边或未用薄页纸
- 数值来源模式: 前景记录（`foreground_record`）
- 适用范围: 产品特定（`product_specific`）
- 归一化基准: 每 1 kg 合格参考产品
- 基准类型: 参考流（`reference_flow`）
- 证据类型: 采集记录（`collected_record`）
- 采集协议: `cp_packaging_batch_records`
- 来源: `afw-pefcr-v3-1-2025`, `eu-recommendation-2021-2279`

###### 瓦楞纤维板鞋盒废料（`corrugated_carton_scrap_output`）

当不合格或损坏鞋盒离开包装过程时，单独记录 Corrugated fibreboard carton scrap，并保留实测质量、组成与处理去向。

- 选定流: Corrugated fibreboard carton scrap
- 流属性/单位: Mass / kg
- 数量规则: 称量不合格或损坏鞋盒质量
- 数值来源模式: 前景记录（`foreground_record`）
- 适用范围: 产品特定（`product_specific`）
- 归一化基准: 每 1 kg 合格参考产品
- 基准类型: 参考流（`reference_flow`）
- 证据类型: 采集记录（`collected_record`）
- 采集协议: `cp_packaging_batch_records`
- 来源: `afw-pefcr-v3-1-2025`, `eu-recommendation-2021-2279`

###### 纸质标签废料（`paper_label_scrap_output`）

当不合格或多余纸质标签离开过程时，单独记录 Paper product-label scrap，并保留实测质量、组成与处理去向。

- 选定流: Paper product-label scrap
- 流属性/单位: Mass / kg
- 数量规则: 不合格标签数量乘以单张质量，或直接称量废料质量
- 数值来源模式: 计算值（`calculated_value`）
- 适用范围: 产品特定（`product_specific`）
- 归一化基准: 每 1 kg 合格参考产品
- 基准类型: 参考流（`reference_flow`）
- 证据类型: 由采集计算（`calculated_from_collection`）
- 采集协议: `cp_packaging_batch_records`
- 来源: `afw-pefcr-v3-1-2025`, `eu-recommendation-2021-2279`

###### 聚丙烯胶带废料（`polypropylene_tape_scrap_output`）

当废弃胶带或卷尾离开包装过程时，单独记录 Polypropylene adhesive-tape scrap，并保留实测质量、组成与处理去向。

- 选定流: Polypropylene adhesive-tape scrap
- 流属性/单位: Mass / kg
- 数量规则: 称量废弃胶带与不可用卷尾质量
- 数值来源模式: 前景记录（`foreground_record`）
- 适用范围: 产品特定（`product_specific`）
- 归一化基准: 每 1 kg 合格参考产品
- 基准类型: 参考流（`reference_flow`）
- 证据类型: 采集记录（`collected_record`）
- 采集协议: `cp_packaging_batch_records`
- 来源: `afw-pefcr-v3-1-2025`, `eu-recommendation-2021-2279`

##### 基本流


## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_avoid_where_measured` | shared_foreground_processes | 在分配前优先采用过程细分、分表计量、批次记录与直接质量追踪。 | `eu-recommendation-2021-2279`, `afw-pefcr-v3-1-2025` |
| `allocation_materials_by_batch` | materials_components_chemicals_packaging | 将净领用量直接归入申报产品批次；无法直接归入时采用有记录的因果驱动因素并披露份额。 | `eu-recommendation-2021-2279`, `afw-pefcr-v3-1-2025` |
| `allocation_energy_by_carrier` | electricity_steam_hot_water_and_fuel | 按分表读数、设备实测功率与运行时间或其他有记录的因果驱动因素分别分配各能源载体；不得分配合并能源总量。 | `eu-recommendation-2021-2279`, `afw-pefcr-v3-1-2025` |
| `allocation_refrigerant` | r134a_equipment | 先将制冷剂补充与释放归入检修设备和生产期，再按合格部件输出归一化。 | `eu-recommendation-2021-2279` |
| `allocation_waste_and_emissions` | waste_and_direct_releases | 分配前按材料或物质分离废物与污染物；采用实测批次质量、经核实的溶剂或制冷剂平衡，或产污过程驱动因素。 | `eu-recommendation-2021-2279` |
| `allocation_no_avoided_credit` | waste_sent_to_recovery | 报告实物废物输出与去向，不在此前景门到门数据集中扣除避免产品信用。 | `afw-pefcr-v3-1-2025` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_component_material_records` | `component_manufacturing_and_cutting` | 部件材料、合格部件与分类边角料 | BOM、领退料、库存、称量、转移与废物记录 | batch_id; model; size; material_id; specification; opening_stock; receipts; issued_mass; returned_mass; closing_stock; accepted_transfer_mass; offcut_mass; waste_destination | 核对材料净领用量，并称量每项合格部件与分类废物流 | kg | 每批次；按月汇总 | 代表性生产期，通常为 12 个月或完整的较短生产期 | 所有部件供应方与范围内部件操作 | 按批次汇总每项原子材料、转移与废物，并按合格部件输出归一化 | 批准的 BOM；校准秤；库存核对；转移单；废物票据 |
| `cp_component_utility_records` | `component_manufacturing_and_cutting` | 电力、外购蒸汽、热水与天然气 | 公用工程计量表、账单、温压日志与设备记录 | meter_id; carrier; opening_reading; closing_reading; unit; pressure; supply_temperature; return_temperature; enthalpy; equipment_id; operating_time; accepted_output_mass | 优先采用专用计量表；否则依据设备实测功率与运行时间分配有记录的分表总量 | kWh; MJ; kg | Meter interval and each batch | 与部件输出相同期间 | 仅限部件模塑、裁切、调理与抽风设备 | 保持各能源载体独立，按有记录的因子换算并按合格输出归一化 | 计量表校准；账单核对；设备日志；换算工作表 |
| `cp_refrigerant_records` | `component_manufacturing_and_cutting` | R134a 补充与释放 | 设备台账与制冷剂检修记录 | equipment_id; refrigerant; opening_charge; recharge_mass; recovered_mass; closing_charge; disposal_mass; service_date; production_period; accepted_output_mass | 依据认证检修记录核对设备级制冷剂质量平衡 | kg | 每次检修事件及年度结算 | Same period as component production | 服务于范围内操作的冷却设备 | 将核实损失归入检修设备与期间，并按合格部件输出归一化 | 检修证书；钢瓶称量；检漏记录；设备台账 |
| `cp_upper_liner_batch_records` | `upper_liner_fabrication` | 片材、泡棉、缝纫线、织带、鞋眼、合格组件与固体废物 | BOM、领退料、计数、单件质量、库存、转移、质量与废物记录 | batch_id; model; size; component_id; issued_mass_or_count; unit_mass; returned_mass_or_count; closing_stock; accepted_output_mass; reject_mass; waste_mass; destination | 核对净领用量，以实测单件质量换算数量，并称量合格与不合格输出 | kg; count | 每批次；按月汇总 | Representative production period | 范围内所有鞋面与内靴生产线 | 按批次汇总每项原子交换，并按合格鞋面与内靴输出归一化 | BOM；校准秤；数量转质量样本；检验处置；废物票据 |
| `cp_upper_liner_chemical_records` | `upper_liner_fabrication` | 聚氨酯胶黏剂、乙酸乙酯与化学废物 | SDS、配方、容器领退料、库存、擦拭、洒漏与废物记录 | batch_id; chemical_id; formulation; purity_or_solids; opening_stock; receipts; issued_mass; returned_mass; closing_stock; waste_mass; retained_solvent; destination | 分别核对每种化学品，并称量每项含化学品废物流 | kg | 每个配方或生产批次 | 与鞋面和内靴生产相同期间 | 范围内涂胶、清洗、固化与现场储存 | 分别计算净领用量与化学品特定废物，并按合格输出归一化 | 批准的 SDS；容器重量；库存核对；危险废物联单 |
| `cp_upper_liner_utility_records` | `upper_liner_fabrication` | 鞋面与内靴电力 | 电力分表与设备运行记录 | meter_id; opening_reading; closing_reading; machine_id; measured_demand; operating_time; batch_id; accepted_output_mass | 采用分表读数，或依据设备时间与功率分配生产线实测电力 | kWh | Meter interval and each batch | 与鞋面和内靴生产相同期间 | 缝制、削薄、鞋眼安装、涂胶、通风与搬运设备 | 扣除有记录的非生产负荷，并将因果分配量按合格输出归一化 | 计量表校准；机器日志；分配工作表 |
| `cp_final_assembly_batch_records` | `stockfitting_and_final_assembly` | 鞋面、壳体、外底、中底、扣件、合格鞋类与固体废物 | BOM、领退料、计数、单件质量、转移、检验、返工与废物记录 | batch_id; model; size; component_id; issued_mass_or_count; unit_mass; returned_quantity; accepted_output_mass; reject_mass; rework_mass; waste_mass; destination | 核对各部件，以单件质量换算数量，并称量合格、不合格与返工鞋类 | kg; count | 每批次；按月汇总 | Representative production period | 范围内所有底部配合与最终装配线 | 按批次汇总每项原子交换，并按合格装配鞋类归一化 | BOM；校准秤；部件抽样重量；质量处置；废物票据 |
| `cp_final_assembly_chemical_records` | `stockfitting_and_final_assembly` | 聚氨酯胶黏剂与胶黏剂废物 | SDS、配方、容器领退料、库存、洒漏与废物记录 | batch_id; chemical_id; formulation; solids; opening_stock; receipts; issued_mass; returned_mass; closing_stock; waste_mass; destination | 单独核对胶黏剂并称量液态与固化废物 | kg | Each production batch | Same period as final assembly | 范围内涂胶、固化与现场储存 | 分别计算胶黏剂净领用量与废物，并按合格输出归一化 | 批准的 SDS；容器重量；库存核对；废物联单 |
| `cp_final_assembly_utility_records` | `stockfitting_and_final_assembly` | 最终装配电力与天然气 | 公用工程计量表、烘箱或压机日志与生产记录 | meter_id; carrier; opening_reading; closing_reading; unit; equipment_id; operating_time; batch_id; accepted_output_mass | 采用能源载体特定计量表，或依据设备运行分配有记录的区域总量 | kWh; MJ | Meter interval and each batch | 与装配鞋类相同期间 | 压合、底部配合、固化、测试、通风与搬运设备 | 保持电力与天然气独立，并分别按合格输出归一化 | 计量表校准；公用工程账单；设备日志；分配工作表 |
| `cp_direct_emissions_records` | `component_manufacturing_and_cutting`; `upper_liner_fabrication`; `stockfitting_and_final_assembly` | 燃料、溶剂与制冷剂释放 | 烟道监测、溶剂平衡、许可台账与制冷剂记录 | source_id; substance; compartment; concentration; gas_flow; operating_time; chemical_input; recovered_mass; waste_retention; product_retention; control_efficiency; batch_id | 采用物质特定监测或经核实的质量平衡；不得推断未测物种 | kg | 监测或检修期间及报告批次 | 与产污过程相同期间 | 仅限申报前景边界内的直接源 | 依据受监测操作或经核实平衡分别归入各物质，并按合格输出归一化 | 校准与 QA 记录；许可报告；化学品核对；检修证书 |
| `cp_packaging_batch_records` | `inspection_and_sale_packaging` | 合格鞋类、包装投入、最终不合格品与包装废料 | 检验、包装领退料、数量转质量、装箱、不合格品与废物记录 | batch_id; model; size; pair_or_single; accepted_input_mass; reference_output_mass; reject_mass; package_material_id; issued_count_or_mass; unit_mass; returned_quantity; scrap_mass; packed_quantity | 称量鞋类与废料，并以产品特定单件质量换算包装数量 | kg; count | 每个包装批次 | Representative production period | 范围内所有最终检验与包装工位 | 将合格投入与参考输出、不合格品及库存变化核对，并按合格鞋类净质量归一化包装 | 校准秤；检验处置；包装规格；装箱单；废物票据 |
| `cp_packaging_utility_records` | `inspection_and_sale_packaging` | 检验与包装电力 | 电力计量表与设备运行记录 | meter_id; opening_reading; closing_reading; equipment_id; measured_demand; operating_time; batch_id; reference_output_mass | 采用完工区域分表，或依据设备因果活动分配实测电力 | kWh | Meter interval and each packing batch | 与包装生产相同期间 | 仅限检验、测试、贴标、封装与包装设备 | 扣除有记录的非生产负荷，并按合格参考产品归一化 | 计量表校准；设备日志；分配工作表 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_net_issue` | materials_components_chemicals_packaging | 净领用量 = 期初库存 + 收料 - 退料 - 期末库存，限定于申报产品批次并按有记录的转移调整。 | 库存、领料、退料与转移字段 | 每批次 kg 净投入 | `eu-recommendation-2021-2279`, `afw-pefcr-v3-1-2025` |
| `calc_count_to_mass` | eyelets_buckles_outsoles_midsoles_and_packaging | 质量 = 领用或合格数量乘以产品特定的实测平均单件质量；保留抽样基础与不确定性。 | 数量与单件质量记录 | kg 交换量 | `eu-recommendation-2021-2279`, `afw-pefcr-v3-1-2025` |
| `calc_utility_allocation` | shared_utility_meters | 能源载体量 = 计量总量减去有记录的非生产负荷，再乘以分表、设备实测功率与运行时间或合格过程输出确定的因果份额。各载体分别计算。 | 计量读数、扣除项与因果驱动因素 | 各载体的 kWh、MJ 或 kg | `eu-recommendation-2021-2279`, `afw-pefcr-v3-1-2025` |
| `calc_refrigerant_balance` | r134a_equipment | R134a 释放量 = 期初充注 + 补充 - 回收量 - 期末充注 - 有记录处置量，仅在检修记录闭合设备平衡时使用。 | 设备充注与检修字段 | kg R134a 释放量 | `eu-recommendation-2021-2279` |
| `calc_process_mass_balance` | each_manufacturing_process | 将材料和部件投入与合格产品输出、材料特定废物、实测直接释放、返工及库存变化核对；调查未解释残差，不得将其分配给集合流。 | 原子交换、返工与库存字段 | 质量平衡残差与完整性发现 | `eu-recommendation-2021-2279`, `afw-pefcr-v3-1-2025` |
| `calc_solvent_release` | ethyl_acetate | 向空气释放的乙酸乙酯 = 乙酸乙酯净投入 - 产品保留 - 回收溶剂 - 液态废物中溶剂 - 固体废物中保留溶剂，仅在存在经核实平衡时使用。 | 化学品领用、回收、保留与废物字段 | kg 向空气释放的乙酸乙酯 | `eu-recommendation-2021-2279` |
| `calc_reference_normalization` | all_inventory_exchanges | 归一化交换量 = 报告期交换量除以合格成品鞋类净质量；将参考产品输出设为精确 1 kg。 | 报告期交换量与合格参考输出 | 每 1 kg 参考产品的交换量 | `eu-recommendation-2021-2279`, `afw-pefcr-v3-1-2025` |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_product_identity` | reference_product | 记录鞋类子型、双只或单只约定、尺码、净质量、目标滑雪项目、结构、闭合系统、鞋底系统与 CPC 29410 纳入依据。 | 产品规格；BOM；分类审查；参考流记录 |
| `dq_bom_coverage` | materials_and_components | 采用产品特定 BOM 与部件规格；披露所有未覆盖质量份额与代理，不得虚构组成。 | BOM 覆盖计算；供应商规格；代理日志 |
| `dq_temporal_representativeness` | all_foreground_records | 采用代表申报期间的记录，通常为连续 12 个月或完整较短生产期，并披露停机、生产活动与缺失时段。 | 带日期的计量、批次、库存、质量、检修与废物记录 |
| `dq_geography_technology` | utilities_and_upstream_datasets | 尽可能匹配制造国家、能源供应、部件技术、配方与材料规格，并披露每项替代。 | 设施地址；供应商地理；过程技术；数据集元数据 |
| `dq_measurement_control` | measured_quantities | 保留校准或核实状态，并记录从数量、长度、面积、体积、蒸汽质量或燃料体积到质量或能量的换算。 | 校准证书；抽样记录；换算工作表 |
| `dq_atomic_completeness` | inventory | 分别报告每项纳入的材料、部件、化学品、能源载体、制冷剂、包装材料、废物与直接排放，并记录路线适用性。 | 原子清单导出；路线矩阵；manifest 未解决流审查 |
| `dq_mass_balance` | each_process | 调查未解释的质量平衡残差，并披露返工、在制品、内部回用与库存处理。 | 过程质量平衡工作表；纠正措施记录 |
| `dq_uuid_resolution` | tiangong_linked_flows | 仅在候选身份确认与公开 state-100 直读后使用 UUID；未解决非参考身份保持空白并记录 row_id 级审查元数据。 | state-100 核实记录；manifest 审查元数据 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validate_reference_identity` | reference_flow | 要求产品流 `6e39a9ed-f49c-4ddc-8869-7d4c47551bbf`、Product flow 类型、精确 CPC 29410、质量属性 `93a60a56-a3c8-11da-a746-0800200b9a66`、质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` 以及 kg 参考单位。 | `unsd-cpc-3-0-29410` |
| `validate_required_qualifiers` | foreground_data_package | 缺少鞋类子型、双只或单只约定、尺码、净质量、BOM、结构路线、设施、生产期或包装纳入信息时，完整性校验失败。 | `afw-pefcr-v3-1-2025`, `eu-recommendation-2021-2279` |
| `validate_atomic_flows` | process_inventory | 拒绝集合标签与合并交换；每种材料、部件、化学品、能源载体、制冷剂、包装材料、废物与排放必须保持独立。 | `eu-recommendation-2021-2279`, `afw-pefcr-v3-1-2025` |
| `validate_bom_and_losses` | materials_and_manufacturing_losses | 要求产品特定 BOM、合格转移、材料特定边角料、不合格品、返工、库存变化与步骤级损耗核对。 | `afw-pefcr-v3-1-2025`, `eu-recommendation-2021-2279` |
| `validate_utilities` | electricity_steam_hot_water_natural_gas | 要求各能源载体特定的计量表、换算记录、边界定义与分配驱动因素；不接受合并能源量。 | `afw-pefcr-v3-1-2025`, `eu-recommendation-2021-2279` |
| `validate_chemicals_and_emissions` | adhesive_solvent_combustion_and_refrigerant | 要求化学品特定的领用与废物记录；直接排放须有监测或经核实平衡，不得仅依据投入存在而推断。 | `eu-recommendation-2021-2279` |
| `validate_packaging` | sale_packaging | 要求每种纳入包装材料与包装记录核对，并披露不计入参考产品质量的包装。 | `afw-pefcr-v3-1-2025`, `eu-recommendation-2021-2279` |
| `validate_uuid_resolution` | tiangong_references | 拒绝任何缺少候选身份确认与公开 state-100 直读双重证据的非参考 UUID；未解决身份保持空白并在 manifest 中记录 row_id 级元数据。 |  |
| `validate_translation_alignment` | bilingual_pcr | 要求英文与中文的 process_id、row_id、Selected flow、受控词元、source id、边界规则、分配规则与校验规则顺序完全一致。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | CPC 29410 滑雪靴、单板滑雪靴或越野滑雪鞋的产品特定前景制造数据集。 |
| downstream_use | 当产品身份、地理、技术、代表性、分配与未解决流限制匹配下游研究时，可作为 `secondary_dataset`；满足相同条件时可作为 `background_dataset`。 |
| allowed_use | 工厂门 LCI 建模、供应商特定数据交换、产品足迹建模，以及保留必需限定信息的下游 process 或 lifecyclemodel 投影。 |
| excluded_use | 表示冰鞋或一般运动鞋；对材料结构明显不同的产品作无限定比较；使用阶段或寿命终止声明；性能或安全认证；自动填充未解决 UUID 或数量。 |
| required_metadata | PCR id 与版本；子型与滑雪项目；双只或单只约定；型号与尺码；净质量；BOM 与材料规格；结构路线；设施与国家；生产期；计量与库存边界；分配；返工；废物去向；直接排放基础；包装纳入；来源与代理清单。 |
| required_quality_disclosure | 一手数据覆盖；时间、地理与技术代表性；校准状态；质量平衡残差；分配份额；条件路线省略；未解决 Tiangong 身份；上游数据集替代；数据缺口与不确定性。 |
| update_trigger | CPC 范围、参考流身份、产品子型、主要材料、结构或固定器接口、设施、公用工程供应、胶黏剂或溶剂、冷却制冷剂、包装、分配驱动因素或重要前景证据发生变化。 |

## 11. 数据源

| Source id | 类型 | 参考文献 | 用途 |
| --- | --- | --- | --- |
| `unsd-cpc-3-0-29410` | 官方指南（`official_guidance`） | 联合国统计司，《中央产品分类》第 3.0 版，代码 29410，官方结构条目与 CPC_Ver_3.0_Structure_30Jun2025.csv。https://unstats.un.org/unsd/classifications/Econ | 锁定滑雪靴、单板滑雪靴与越野滑雪鞋的精确范围和标题 |
| `eu-recommendation-2021-2279` | 官方指南（`official_guidance`） | 欧盟委员会 2021 年 12 月 15 日关于使用环境足迹方法的建议（EU）2021/2279。https://eur-lex.europa.eu/eli/reco/2021/2279/2021-12-30/eng | 产品特定 BOM 与制造数据；LCI 原材料和能源投入；产品、废物及向空气、水和土壤的释放；完整性、质量与透明度规则 |
| `afw-pefcr-v3-1-2025` | 标准（`standard`） | 《服装与鞋类产品环境足迹类别规则》，3.1 版，2025 年 4 月 29 日。https://pefapparelandfootwear.eu/afw_pefcr_v3-1_final/ | 鞋类 BOM、部件制造、混炼成型、模切、缝制、底部配合、装配、制造损耗、销售包装、电力、分配与公司特定数据结构 |
