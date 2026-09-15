---
pcr_id: pcr.metal-products-machinery-and-equipment.fabricated-metal-products-except-machinery-and-equipment.stranded-wire-cables-plaited-bands-and-the-like-of-copper-or-aluminium-not-electrically-b5660514
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 未电绝缘的铜或铝制绞股线、缆、编带及类似制品

## 1. 范围与适用性

本 PCR 适用于工厂门口的裸露、未电绝缘绞股线、单导体缆、编织带及类似柔性组合体的生产；产品应完全由铜/铜合金线或完全由铝/铝合金线制成。当组成线之间没有电绝缘时，束绞、同心绞、复绞、编织和紧压结构均在范围内。

前景边界从接收线材或线杆开始。拉丝、中间退火、脱脂和清洗仅在报告工厂实际实施时纳入；绞合、束绞、编织或等效组合以及最终检验为必需过程。金属生产和外购线材制造属于上游，须采用具有代表性的供应商数据集。

本 PCR 不包括未绞合销售的单根实心线、电绝缘线或多导体绝缘电缆、光纤电缆、钢铁丝绳，以及含钢、聚合物复合材料、纤维或其他非铜非铝芯的产品。安装、使用、维护和寿命终结亦不在范围内。可重复使用的线盘、卷筒、托盘及其他运输包装不属于参考产品；若有一次性包装被消耗或随产品转移，须把每个实际组件分别作为前景交换加入。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.fabricated-metal-products-except-machinery-and-equipment.stranded-wire-cables-plaited-bands-and-the-like-of-copper-or-aluminium-not-electrically-b5660514 |
| classification_refs | CPC 3.0：42942，精确分类语境 |
| covered_products | 完全由铜/铜合金线或完全由铝/铝合金线制成的裸绞股线、裸单导体缆、编带及类似组合体 |
| excluded_products | 单根实心线；电绝缘线或电缆；光纤电缆；钢铁丝绳；含非铜非铝芯的产品；安装、使用和寿命终结 |
| representative_product | 以卷材或可重复使用线盘形式在工厂门口交付，并声明导体金属和结构的裸绞合导体 |
| production_route | 外购可直接绞合线材，随后绞合/束绞/编织和检验；工厂实际实施时声明一体化拉丝、退火、脱脂、清洗和紧压 |
| market_state | 工厂门口、一次性交付包装之前的裸露、未电绝缘、干燥且验收合格产品 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 通过扭绞、绞合、束绞或编织铜线或铝线形成的一个裸露柔性导体或带状组合体 |
| How much | 工厂门口 1,000 kg 验收合格参考产品 |
| How well | 符合所声明的拉制、股数、绞距/编织、横截面积、合金、状态、涂层、电阻、机械和尺寸规范 |
| How long or cycle | 一个生产批次直至验收和工厂门口放行；不表示使用期限 |
| reference_flow_link | `st_reference_product` |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1,000 kg |
| 参考产品流 | 未电绝缘的铜或铝制绞股线、缆或编带 |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 导体金属和合金；状态；线材涂层（如有）；股数和标称单丝直径；结构类型以及绞向/编织方向和长度；紧压或非紧压状态；标称横截面积；单位长度质量；电阻试验基准；工厂和地理；报告期；起始料形式和供应商边界；一体化预处理步骤；合格产品和废料核算；交付形式 |

构建前景数据包时，`必需限定信息` 中列出的信息须在数据集元数据、过程说明、参考流备注、产品说明或等效数据包字段中明确声明。缺失必需限定信息的数据包视为参考流定义不完整。

天工公开库中没有一个精确质量流能表示铜或铝合并的参考产品边界，因此参考产品 UUID 保持未解决；不得以仅适用于铝电缆的 UUID 代理铜制产品。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | 验收合格参考产品 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 验收后用校准秤确定产品净干金属质量。排除可重复使用承载物皮重和一次性包装。所有报告交换均归一化至 1,000 kg 合格产品。 |
| `metal_mass_balance` | 铜或铝原料、产品、废料、在制品和未解释损失 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 铜和铝分别进行平衡。在报告期内核对期初库存与投入，同合格产品、可回收废料、其他计量输出、期末库存及量化损失之间的关系。 |
| `electricity_conversion` | 外购电力 | Net calorific value `93a60a56-a3c8-11da-a746-0800200b9a66` | MJ | 保留 kWh 电表原始记录，并按 1 kWh = 3.6 MJ 转换至天工参考单位；声明是否包括辅助设施和内部配电损失。 |
| `water_mass_conversion` | 工艺用水和含水废水 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 优先采用质量计量。若计量体积，则用声明温度下实测或有文件依据的密度换算，并保留原始体积、密度和换算记录。 |
| `gas_reference_conditions` | 气态天然气 | Volume `93a60a56-a3c8-22da-a746-0800200c9a66` | m3 | 按供应商或计量表的参考温度和压力报告体积，并披露高位/低位热值约定；不得把天然气和电力合并成一个能源流。 |

## 5. 系统边界

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_factory_gate` | 前景物理边界 | 纳入合格裸产品离开工厂门口前，在场址内实施的全部拉丝、退火、脱脂、清洗、绞合、束绞、编织、紧压、检验、返工、内部搬运及直接相关污染控制作业。 | `us-epa-nonferrous-forming-guidance-1989`; `aluminum-association-processing-101` |
| `boundary_upstream_stock` | 外购金属料和公用工程 | 把接收的铜线材、铝线、电力、水和化学品分别建模为产品投入，并使用能代表其地理、技术和交付边界的上游数据集；不得在前景内重建原生金属生产。 | `us-epa-nonferrous-forming-guidance-1989` |
| `boundary_no_insulation` | 绝缘、护套和非金属芯 | 排除绝缘、护套、光纤作业以及非铜非铝芯。含任何此类组件的产品超出本 PCR 适用范围，而不是本清单的条件路线。 | `un-cpc-3-0-structure-2025`; `nist-wire-cable-terminology-circular-37` |
| `boundary_site_specific_additions` | 场址特定交换 | 若工厂还使用其他具体化学品、燃料、涂层、包装组件或废物处理投入，或产生其他具体废物或基本流排放，须把每一个交换和实测量分别加入；不得使用公用工程、化学品、废物或排放的集合行。 | `us-epa-nonferrous-forming-guidance-1989` |

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 接收的铜/铜合金线或线杆，或铝/铝合金线或线杆；须声明金属、合金、状态、直径、涂层、供应商、再生含量声明和交付边界 |
| starting_condition_role | 条件性预处理过程的上游产品投入，或直接进入必需的绞合/编织过程 |
| product_classification_scope | 与上述语义边界相符的裸铜线或裸铝线绞合组合体；分类编码用于定位但不定义 PCR 身份 |
| recursive_input_rule | 同一产品类别的外购预绞合件仅作为一个外部产品投入记录，并附其上游数据集和声明质量；不得在此前景记录内递归展开其生产 |
| upstream_dataset_requirement | 优先使用供应商特定数据；否则对每项具体线材、公用工程和化学品使用具有地理及技术代表性的数据集，并防止重复计算场内过程 |
| disclosure | 声明起始料形式和线规、预处理责任方、导体结构、所含辅助设施、内部循环、金属废料去向、排水路线、可重复使用承载物处理以及任何排除的共用服务 |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `wire_preparation` | 拉丝、退火和清洗 | conditional | 仅纳入报告工厂实施的拉丝、中间退火、脱脂或清洗；接收经认证可直接绞合线材时不纳入 | 前景导体线材预处理 | 可归因于 1,000 kg 合格参考产品所用线材的交换 |
| `stranding_and_finishing` | 绞合、束绞、编织、紧压和最终检验 | required | 始终纳入实际组合路线以及相关检验、返工和直接相关辅助设施 | 合格裸绞合产品的前景成形 | 工厂门口 1,000 kg 合格参考产品 |

### 过程：拉丝、退火和清洗（`wire_preparation`）

#### 输入

##### 产品流

###### 进入预处理的铜线材（`dr_copper_wire_input`）

仅在铜路线中，外购铜线材跨越工厂边界进入场内拉丝、退火或清洗时记录。

- 选定流：铜线材 `da2d966d-fe62-44dc-ba0f-b1cd7c7cf33e`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：计量纳入预处理作业所消耗的铜线材净接收量，并按期初和期末库存调整
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_preparation_materials`
- 来源：`us-epa-nonferrous-forming-guidance-1989`

###### 进入预处理的铝线（`dr_aluminium_wire_input`）

仅在铝路线中，外购铝线跨越工厂边界进入场内拉丝、退火或清洗时记录。

- 选定流：铝线 `89db8507-09bd-45f8-ba96-4e459058412c`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：计量纳入预处理作业所消耗的铝线净接收量，并按期初和期末库存调整
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_preparation_materials`
- 来源：`us-epa-nonferrous-forming-guidance-1989`; `aluminum-association-processing-101`

###### 预处理设备用电（`dr_electricity`）

分别纳入拉丝驱动、电退火（如适用）、清洗、泵、过滤、排风和预处理区辅助设施的计量或分配电力。

- 选定流：电力 `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- 流属性/单位：Net calorific value `93a60a56-a3c8-11da-a746-0800200b9a66` / MJ
- 数量规则：预处理区实测电量由 kWh 换算为 MJ
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_preparation_utilities`
- 来源：

###### 拉丝或清洗用工艺用水（`dr_process_water`）

记录进入水基拉丝润滑液补水、清洗、漂洗或直接相关闭路系统的水；不跨越过程边界的非接触水不纳入。

- 选定流：工艺用水 `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：分别量化内部循环后计量工艺用水净投入
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_preparation_utilities`
- 来源：`us-epa-nonferrous-forming-guidance-1989`

###### 拉丝润滑剂（`dr_drawing_lubricant`）

记录场内拉丝实际引入的具体纯油、油水乳液、皂液或其他润滑剂。内部循环不构成新投入。

- 选定流：拉丝润滑剂
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：计量新鲜润滑剂和浓缩液加入量，扣除有文件记录的供应商退货
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_preparation_utilities`
- 来源：`us-epa-nonferrous-forming-guidance-1989`

###### 燃气退火用天然气（`dr_natural_gas`）

仅记录场内退火或直接相关热清洗所燃烧的天然气；本行不得用于外购热力或其他燃料。

- 选定流：气态天然气 `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位：Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- 数量规则：按声明参考条件计量并分配至纳入预处理作业的天然气体积
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_preparation_utilities`
- 来源：`us-epa-nonferrous-forming-guidance-1989`

###### 碱性脱脂用氢氧化钠（`dr_sodium_hydroxide`）

仅在采用碱性脱脂或清洗浴时记录引入的氢氧化钠。声明供应浓度，并按交付状态质量报告。

- 选定流：氢氧化钠 `e0abcced-0611-4c24-9290-5a2c5a0c4169`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：加入纳入浴槽的交付状态氢氧化钠产品实测质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_preparation_utilities`
- 来源：`us-epa-nonferrous-forming-guidance-1989`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 预处理铜线材（`dr_copper_wire_output`）

仅在铜路线记录。这是从纳入预处理过程转移至绞合的铜线材质量，不是合格最终绞合产品。

- 选定流：铜线材 `da2d966d-fe62-44dc-ba0f-b1cd7c7cf33e`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：转移至绞合的铜线材实测质量，并按预处理在制品调整
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_preparation_materials`
- 来源：`us-epa-nonferrous-forming-guidance-1989`

###### 预处理铝线（`dr_aluminium_wire_output`）

仅在铝路线记录。这是从纳入预处理过程转移至绞合的铝线质量，不是合格最终绞合产品。

- 选定流：铝线 `89db8507-09bd-45f8-ba96-4e459058412c`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：转移至绞合的铝线实测质量，并按预处理在制品调整
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_preparation_materials`
- 来源：`us-epa-nonferrous-forming-guidance-1989`; `aluminum-association-processing-101`

##### 废物流

###### 预处理产生的分选废铜线材（`dr_copper_scrap`）

记录离开过程并送往内部或外部回收的铜下脚料、断线和不合格预处理线材；仅在铜路线记录。

- 选定流：废铜 `4fbbb5f1-560a-4052-ba0c-652c5dfc282e`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：离开预处理的废铜净实测量，不含直接返回同一在制品平衡的物料
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_preparation_wastes`
- 来源：

###### 预处理产生的分选铝线废料（`dr_aluminium_scrap`）

记录离开过程并送往内部或外部回收的铝下脚料、断线和不合格预处理线材；仅在铝路线记录。

- 选定流：铝废料 `96c5f842-ea53-419b-b1cd-c02c479efb45`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：离开预处理的铝废料净实测量，不含直接返回同一在制品平衡的物料
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_preparation_wastes`
- 来源：

###### 废拉丝润滑剂（`dr_spent_lubricant`）

记录经内部过滤、离心或其他循环后作为独立废物移出的废润滑剂；本行不包含含水废水。

- 选定流：废润滑油 `9c1267ee-ba26-4c53-9643-89ae0c5764c4`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：送往处理、回收或处置的独立废润滑剂实测质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_preparation_wastes`
- 来源：`us-epa-nonferrous-forming-guidance-1989`

###### 含油拉丝废水（`dr_oily_wastewater`）

记录同拉丝润滑剂、金属或清洗作业接触后离开前景的含水排放物。内部保留和循环使用的水不纳入。

- 选定流：含悬浮铜或铝固体的含油拉丝废水
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：外部处理前的排放实测质量，或用有文件依据的密度将实测排放体积换算为质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_preparation_wastes`
- 来源：`us-epa-nonferrous-forming-guidance-1989`

##### 基本流

###### 场内天然气燃烧产生的化石源二氧化碳（`dr_fossil_co2`）

仅在场内燃烧燃料且排放量有监测记录或获认可的场址碳核算记录时，记录直接排入空气的化石源二氧化碳。排除上游电力排放。

- 选定流：二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：可归因于纳入预处理作业的实测或认可场址记录化石源 CO2
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_preparation_emissions`
- 来源：

### 过程：绞合、束绞、编织、紧压和最终检验（`stranding_and_finishing`）

#### 输入

##### 产品流

###### 进入绞合的铜线材（`st_copper_wire`）

仅在铜制品中记录。线材可以外购后直接绞合，也可以从 `wire_preparation` 转入，但同一质量不得在工厂边界重复计算。

- 选定流：铜线材 `da2d966d-fe62-44dc-ba0f-b1cd7c7cf33e`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：发往绞合的铜线材实测质量，并按绞合区期初和期末库存调整
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_stranding_materials`
- 来源：`nist-wire-cable-terminology-circular-37`

###### 进入绞合的铝线（`st_aluminium_wire`）

仅在铝制品中记录。线材可以外购后直接绞合，也可以从 `wire_preparation` 转入，但同一质量不得在工厂边界重复计算。

- 选定流：铝线 `89db8507-09bd-45f8-ba96-4e459058412c`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：发往绞合的铝线实测质量，并按绞合区期初和期末库存调整
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_stranding_materials`
- 来源：`nist-wire-cable-terminology-circular-37`; `aluminum-association-processing-101`

###### 绞合和后处理用电（`st_electricity`）

纳入绞合、束绞、编织、紧压、收线、检验、返工以及直接相关排风和控制系统的电力。

- 选定流：电力 `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- 流属性/单位：Net calorific value `93a60a56-a3c8-11da-a746-0800200b9a66` / MJ
- 数量规则：生产线实测电量加上按因果关系分配的直接相关辅助用电，并由 kWh 换算为 MJ
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_stranding_utilities`
- 来源：

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 合格裸绞合参考产品（`st_reference_product`）

这是完成所声明尺寸、电气和机械检验后的工厂门口合格产品。留在过程内的返工不作为独立输出。

- 选定流：未电绝缘的铜或铝制绞股线、缆或编带
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：按参考流定义恰好为 1,000 kg 合格净产品
- 数值来源模式：固定值（`fixed_value`）
- 适用范围：通用（`generic`）
- 归一化基准：1,000 kg 合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：方法公式（`method_formula`）
- 来源：`un-cpc-3-0-structure-2025`; `nist-wire-cable-terminology-circular-37`

##### 废物流

###### 绞合产生的分选废铜线材（`st_copper_scrap`）

记录离开过程并送往回收或处置的铜线下脚料、断股和最终不合格品；仅在铜路线记录。

- 选定流：废铜 `4fbbb5f1-560a-4052-ba0c-652c5dfc282e`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：扣除内部返工退回后，离开绞合和后处理的废铜净实测量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_stranding_materials`
- 来源：

###### 绞合产生的分选铝线废料（`st_aluminium_scrap`）

记录离开过程并送往回收或处置的铝线下脚料、断股和最终不合格品；仅在铝路线记录。

- 选定流：铝废料 `96c5f842-ea53-419b-b1cd-c02c479efb45`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：扣除内部返工退回后，离开绞合和后处理的铝废料净实测量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_stranding_materials`
- 来源：

##### 基本流

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivision` | 独立计量生产线和过程步骤 | 在可行情况下，通过拆分预处理与绞合作业并采用生产线仪表、批次记录和领料记录避免分配。 |  |
| `allocation_rework` | 内部返工 | 同期返工留在过程清单内部循环。只计算净外部投入、合格产品、离开前景的废物和期末库存变化。 |  |
| `allocation_scrap` | 铜或铝废料 | 在实测前景边界把分选废料报告为废物输出。不得在此前景清单内扣减原生金属避免负荷或回收信用；任何下游回收方法应在 PCR 前景之外应用并披露。 |  |
| `allocation_shared_services` | 共用电力、水、燃料和辅助设施 | 优先按生产线仪表、机器时间、吞吐量或炉负荷等实测因果驱动因素分配共用服务。无因果驱动因素时按合格产品质量分配，并记录受影响份额，对差异显著的导体结构开展敏感性分析。 |  |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_preparation_materials` | `wire_preparation` | 铜/铝线投入和预处理线材转移 | 收货、领料、转移和库存记录 | metal; alloy; temper; coating; opening stock; receipts; issues; transfers; closing stock; lot; scale id | 按金属和批次核对衡器、秤和企业记录 | kg | 每次收货/转移并每月核对 | 具有代表性的报告年或所声明生产期 | 所有纳入预处理生产线 | 净消耗或转移质量除以合格参考产品质量再乘以 1,000 | 校准记录；供应商证书；库存核对；批次追溯 |
| `cp_preparation_utilities` | `wire_preparation` | 电力、水、润滑剂、天然气和氢氧化钠 | 仪表、采购、储罐和浴液添加记录 | meter opening/closing; kWh; water volume/mass; gas volume and reference conditions; product mass; concentration; internal recycle; allocation driver | 尽可能用专用仪表；否则从工厂记录按有文件依据的因果关系分配 | 根据交换采用 MJ、kg 或 m3 | 连续或每批，按月核对 | 具有代表性的报告年或所声明生产期 | 纳入预处理和污染控制设备 | 扣除有文件依据的内部返回，执行必要单位换算，除以合格参考产品质量再乘以 1,000 | 仪表校准；发票；批记录；分配工作表；浓度证书 |
| `cp_preparation_wastes` | `wire_preparation` | 分选金属废料、废润滑剂和含油废水 | 废料票、废物联单、储罐液位和排放仪表 | waste identity; metal; mass/volume; density; origin; internal recycle; destination; treatment route; date | 每批出货称重或采用经校准的储罐/排放记录；内部循环单列 | kg | 每次出货或排放，按月核对 | 具有代表性的报告年或所声明生产期 | 所有纳入预处理线及直接相关处理 | 离开前景的净质量除以合格参考产品质量再乘以 1,000 | 衡器/仪表校准；废物联单；接收凭证；密度记录；排放日志 |
| `cp_preparation_emissions` | `wire_preparation` | 直接化石源二氧化碳 | 烟气监测或认可的场址排放记录 | source id; fuel; monitoring period; measured CO2 mass; operating hours; allocation driver; data gaps | 采用场址实测记录，仅分配纳入源的份额 | kg | 连续或报告期记录 | 与活动数据相同期间 | 服务于纳入预处理的场内燃料燃烧 | 可归因化石源 CO2 除以合格参考产品质量再乘以 1,000 | 监测 QA/QC；排放报告；源至生产线分配记录 |
| `cp_stranding_materials` | `stranding_and_finishing` | 铜/铝线投入、合格产品和分选废料 | 领料、生产、检验、返工、废料和库存记录 | metal; alloy; construction; opening stock; issues; accepted mass; rework return; scrap mass; closing stock; lot; scale id | 按产品批次和导体金属核对生产线与仓库记录 | kg | 每批并每月核对 | 具有代表性的报告年或所声明生产期 | 所有绞合、编织、紧压和最终检验生产线 | 净投入、合格产出和净外送废料分别除以合格参考产品质量再乘以 1,000 | 校准记录；验收记录；废料票；库存核对；批次追溯 |
| `cp_stranding_utilities` | `stranding_and_finishing` | 电力 | 电力仪表和机器时间记录 | meter opening/closing; kWh; operating time; product lot; shared auxiliary load; allocation driver | 专用生产线仪表或有文件依据的因果分配 | 保留 kWh 并报告 MJ | 连续或每批，按月核对 | 具有代表性的报告年或所声明生产期 | 绞合及直接相关后处理设备 | kWh 换算为 MJ，除以合格参考产品质量再乘以 1,000 | 仪表校准；机器日志；分配工作表 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | 每项非固定清单交换 | 归一化量 = 报告期可归因量 / 报告期合格产品质量 × 1,000 | 可归因交换量；合格产品质量（kg） | 每 1,000 kg 合格参考产品的交换量 |  |
| `calc_stock_adjusted_input` | 铜线材、铝线、润滑剂和化学品 | 消耗量 = 期初库存 + 收货 - 供应商退货 - 期末库存 - 转出纳入过程的有记录量 | 期初库存；收货；退货；期末库存；转移 | 库存调整后的消耗质量 |  |
| `calc_electricity_mj` | 电力行 | 报告 MJ = 计量 kWh × 3.6，再按参考流归一化 | 可归因 kWh；合格产品质量 | 每 1,000 kg 合格产品的 MJ |  |
| `calc_metal_reconciliation` | 每种导体金属分别计算 | 未解释金属差额 = 期初金属库存 + 外部金属投入 - 合格产品 - 外送同种金属废料 - 其他实测同种金属输出 - 期末金属库存 | 分金属的库存、投入和输出记录 | 未解释金属差额的绝对值和百分比 |  |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | 产品和金属流 | 保留产品规范、合金/状态证书、股线几何、结构、涂层状态、绝缘状态和批次链接；铜和铝路线不得聚合为一个物理数据集。 | 规范；成分证书；检验记录；批次谱系 |
| `dq_measurement` | 质量、能源、天然气和水记录 | 采用处于有效量程的校准设备；保留原始读数、皮重处理、单位换算、参考条件和分配工作表。 | 校准证书；仪表导出；称重票；换算记录 |
| `dq_temporal` | 前景活动 | 覆盖有代表性的十二个月，或披露较短生产期、停机、异常批次和季节影响。 | 生产日历；停机日志；报告期说明 |
| `dq_completeness` | 所有纳入过程 | 核对采购、仪表、生产、废料、废物和库存记录；发布前调查遗漏的浴槽、辅助系统、污染控制和直接排放。 | 核对清单；差异调查；签署的完整性审查 |
| `dq_upstream` | 外购线材、公用工程和化学品 | 记录供应商、地理、技术、交付边界、数据集年份和再生含量声明；防止在上游线材数据中重复计算场内拉丝或退火。 | 供应商声明；上游数据集元数据；边界对比 |
| `dq_unresolved_identity` | UUID 为空的行 | 保留具体流名称和前景记录，但不得替换为代理 UUID。发布前解决参考产品、拉丝润滑剂和含油废水身份。 | 最终 UUID 检索审查记录；审查人签署 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validation_reference_flow` | 功能单位和参考产出 | 确认恰好 1,000 kg 合格裸产品，排除承载物皮重和包装，并声明全部必需限定信息。 | `un-cpc-3-0-structure-2025`; `nist-wire-cable-terminology-circular-37` |
| `validation_scope` | 产品适用性 | 拒绝绝缘、光纤、钢铁丝绳、含非铜非铝芯产品的数据集，并拒绝未绞合销售的实心线。 | `un-cpc-3-0-structure-2025`; `nist-wire-cable-terminology-circular-37` |
| `validation_process_map` | 过程覆盖 | 必须有 `stranding_and_finishing`；只有场内实施拉丝、退火、脱脂或清洗时才要求 `wire_preparation`，并核查上游数据未重复这些步骤。 | `us-epa-nonferrous-forming-guidance-1989`; `aluminum-association-processing-101` |
| `validation_atomic_flows` | 清单结构 | 确认每项选定流仅为一个产品、废物或基本流交换；拒绝合并的公用工程、燃料、化学品、包装、废物或排放。 |  |
| `validation_metal_balance` | 铜和铝质量平衡 | 分别核对每种导体金属，并要求场址定义、论证和调查其未解释物料损失阈值；不得用铝差额抵销铜差额。 |  |
| `validation_energy_and_water` | 电力、天然气和水 | 核查电力换算、天然气参考条件、水密度换算、仪表覆盖和内部循环处理；拒绝重复计算循环量。 |  |
| `validation_scrap_allocation` | 废料和返工 | 确认内部返工在过程中轧差，外送废料有计量，去向有披露，且未在前景内扣减避免负荷。 |  |
| `validation_uuid_and_sources` | 身份和证据 | 按公开状态 100 核验每个 UUID 的流类型、属性和单位组；UUID 为空的行须有明确未解决元数据，任何未来外部数值范围须有原文证据。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 所声明裸铜或裸铝绞合产品的工厂门口前景生产数据集 |
| downstream_use | `secondary_dataset`；经方法学审查并解决发布阻塞项后可作为 `background_dataset` |
| allowed_use | 产品系统研究，其中导体金属、结构、工厂地理、生产路线、起始料边界和交付状态与所声明数据集相符 |
| excluded_use | 实心线；绝缘或光纤电缆；钢丝绳；复合/加强芯导体；安装、使用或寿命终结；无新前景记录的铜铝替代 |
| required_metadata | PCR id 和版本；导体金属/合金/状态；涂层；结构和绞距/编织；股线几何；横截面；单位长度质量；电气试验基准；工厂/地理；期间；起始料；纳入预处理；上游数据集；废料去向；排水路线；分配；交付形式 |
| required_quality_disclosure | 仪表和秤覆盖；校准；时间代表性；金属平衡结果；库存调整；内部循环；共用服务分配；上游边界匹配；数据缺口；未解决 UUID；来源和范围局限 |
| update_trigger | 导体金属/合金、结构、涂层、线规、拉丝或退火技术、润滑或清洗系统、能源供应、用水/排水路线、废料处理、工厂、上游线材边界发生变化，或能源、收率或废物绩效发生实质变化 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3-0-structure-2025` | official_guidance | 联合国统计司，*Central Product Classification Version 3.0 Structure*，2025-06-30，官方 CSV，https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv，检索于 2026-09-05 | CPC 42942 正式产品身份和未电绝缘边界 |
| `nist-wire-cable-terminology-circular-37` | official_guidance | 美国国家标准局，*Electric Wire and Cable Terminology*，Circular No. 37，https://nvlpubs.nist.gov/nistpubs/Legacy/circ/nbscircular37.pdf，检索于 2026-09-05 | 裸导体、股线、绞股线、电缆以及扭绞和编织结构术语 |
| `us-epa-nonferrous-forming-guidance-1989` | official_guidance | 美国环境保护署，*Aluminum, Copper, and Nonferrous Metals Forming and Metal Powders Pretreatment Standards: A Guidance Manual*，1989，https://www.epa.gov/sites/default/files/2016-08/documents/aluminum-copper-nonferrous-forming_pretreat-guidance_1989.pdf，检索于 2026-09-05 | 拉丝、润滑剂使用和循环、条件性退火/脱脂/清洗以及含油和金属的废物流 |
| `aluminum-association-processing-101` | extension_guidance | The Aluminum Association，*Processing 101*，https://www.aluminum.org/processing-101，检索于 2026-09-05 | 铝杆拉制成线以及将多根线绞合成电导体 |
