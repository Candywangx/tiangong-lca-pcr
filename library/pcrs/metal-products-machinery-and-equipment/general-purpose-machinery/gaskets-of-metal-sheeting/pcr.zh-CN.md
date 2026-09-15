---
pcr_id: pcr.metal-products-machinery-and-equipment.general-purpose-machinery.gaskets-of-metal-sheeting
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 金属片制密封垫

## 1. 范围与适用性

本 PCR 适用于金属薄片与另一种材料结合制成，或由两层及以上金属制成的成品密封垫及类似接合件从摇篮到工厂大门的生产。若申报的产品结构符合本边界，则涵盖缠绕式、金属包覆式以及带覆盖层的沟槽式或叠层金属片密封垫。前景边界起点为进入制造场址的金属薄板或带材、申报的填充材料、工艺辅料和包装，终点为经检验合格并可发运的产品。

机械密封、组成不同的密封垫组合包、非金属平垫、弹性体 O 形圈以及不含金属片或叠层结构的整体机加工环连接垫不在本 PCR 范围内。采购的金属、聚合物、石墨、化学品、电力、水和包装的上游生产采用关联背景数据集表示。分销、安装、使用阶段、使用中泄漏、维护和报废阶段均在申报的工厂大门边界之外。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.general-purpose-machinery.gaskets-of-metal-sheeting |
| classification_refs | CPC 3.0：43924，金属片制密封垫；语义边界参考 CN 8484 10 00 |
| covered_products | 金属薄片与另一种材料结合制成，或由两层及以上金属制成的成品密封垫及类似接合件，包括适用的缠绕式、金属包覆式以及带覆盖层的沟槽式或叠层结构 |
| excluded_products | 机械密封；密封垫组合包；非金属平垫；弹性体 O 形圈；不含金属片或叠层结构的整体机加工环连接垫 |
| representative_product | 由申报的金属薄板或带材以及在适用时由一种申报的填充材料制成的成品缠绕式或金属包覆式密封垫 |
| production_route | 薄板或带材切割与冲裁；修边；按条件采用成形、压型、缠绕、包覆或装配；按条件采用水基碱洗；检验；按要求标记；包装 |
| market_state | 制造场址大门处经检验合格的成品密封垫，并已申报结构、材料牌号、尺寸、适用标准或图纸以及包装状态 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 在工厂大门交付能够密封其申报设计所对应接合部位的成品金属片制密封垫 |
| How much | 1 kg 合格成品密封垫净质量，不含非产品组成部分的包装 |
| How well | 符合申报的图纸或密封垫标准、尺寸与公差、材料牌号、结构、适用时的压力等级以及检验接收准则 |
| How long or cycle | 工厂大门处一个有记录的生产批次；不包括使用寿命和使用阶段密封性能 |
| reference_flow_link | 归一化为 1 kg 产品净质量的合格成品输出 `finished_metal_sheeting_gasket` |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 kg |
| 参考产品流 | 金属片制密封垫 `566e5c48-5523-4e69-98c9-0a8ad67d24d4` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 密封垫结构；金属合金及牌号；存在填充材料时其种类、牌号和质量分数；公称尺寸和净质量；适用标准或图纸及压力等级；表面处理或涂层；制造地域和参考期；检验接收依据；包装状态；再生材料含量和废料分配约定 |

构建前景数据包时，`必需限定信息` 中的每一项都必须在数据集元数据、过程说明、参考流备注、产品说明或等效字段中声明。缺少限定信息时，参考流定义不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | 成品参考产品 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 采用最终检验合格的成品密封垫净质量。瓦楞纸箱、塑料薄膜、托盘及其他非产品组成部分的包装不计入参考产品质量；边界内的每种包装材料应作为单独投入报告。 |
| `material_mass` | 金属、填充材料、辅料、废物和包装行 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 按申报的牌号或组成分别计量每种材料和废物。归一化到 1 kg 参考产品前，应将库存变化调整到同一生产期。 |
| `electricity_energy` | 外购电力行 | Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | 保留电表数据及换算依据。按 1 kWh = 3.6 MJ 将 kWh 换算为 MJ，且不得将外购电力与自发电或其他能源载体合并。 |
| `internal_blank_transfer` | 金属垫片坯料输出和输入 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 在一致的干质量基础上计量两个过程边界处的同一转移中间体，核对过程间在制品库存变化，不得将内部转移作为外部产品。 |

## 5. 系统边界

| rule_id | 适用对象 | 规则 | 来源 |
| --- | --- | --- | --- |
| `sb_gate_scope` | 前景制造 | 纳入切割或冲裁、修边、特定路线的成形、压型、缠绕或包覆、装配、实际发生的清洗、检验、按要求标记以及直至工厂大门的包装。 | `asme-b16-20-2023`; `moeller-spiral-wound-winding`; `valqua-n580-metal-jacketed-gasket` |
| `sb_upstream_inputs` | 采购投入 | 对每种采购的金属、填充材料、工艺辅料、电力、水和包装关联从摇篮到工厂大门的背景数据集；不得在前景中重复这些上游过程。 |  |
| `sb_direct_outputs` | 废物与排放 | 当分拣后的金属废料、填充材料边角料、废切削液、废碱液和直接颗粒物排放跨越前景边界时，应分别记录。 |  |
| `sb_exclusions` | 大门外阶段 | 排除分销、安装、使用阶段泄漏与维护以及报废阶段。研究若扩展到工厂大门之外，应作为单独模型披露。 | `eu-cn-2021-hs-8484-10`; `un-cpc-3-0-structure-2025` |

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 金属薄板或带材、特定路线填充材料、工艺辅料和包装已进入制造场址，并已申报供应商、牌号、形态和上游数据集标识 |
| starting_condition_role | 采购投入进入密封垫前景制造的工厂大门起点 |
| product_classification_scope | 金属薄片与另一种材料结合制成，或由两层及以上金属制成的成品密封垫及类似接合件；CPC 3.0 43924 |
| recursive_input_rule | 当前景使用采购的垫片坯料或其他同类别半成品时，仅按其接收状态记录一次产品投入，并要求上游数据集终止于该状态；不得递归展开供应商过程。 |
| upstream_dataset_requirement | 对金属薄板或带材、填充材料、电力、水、化学品和包装，采用在地域、技术、牌号、形态和时间上具有代表性的上游数据集；披露代理数据和再生材料含量约定。 |
| disclosure | 申报产品结构、合金和填充材料牌号、路线、场址与期间、纳入的清洗与包装操作、内部转移处理、废料去向与分配约定以及所有边界偏离。 |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `sheet_preparation` | 金属片切割、冲裁与边缘制备 | required | 适用于所有涵盖产品；记录实际采用的切割、冲裁、冲孔、激光切割或等效路线。 | 前景材料制备 | 转移的金属垫片坯料质量 |
| `forming_assembly_finishing` | 成形、缠绕或包覆、装配、清洗、检验与包装 | required | 仅纳入申报结构对应的操作，并分别记录条件性填充材料、清洗和包装行。 | 前景密封垫完工 | 合格成品密封垫净质量 |

### 过程：金属片切割、冲裁与边缘制备（`sheet_preparation`）

#### 输入

##### 产品流

###### 冷轧碳钢薄板（`carbon_steel_sheet`）

仅对申报金属结构使用碳钢或非合金钢薄板的批次记录该投入。

- 选定流：冷轧碳钢薄板
- 流属性/单位：Mass / kg
- 数量规则：计量领用质量并扣除退回薄板、修正库存变化；仅当申报的合金路线不使用碳钢薄板时记录为零。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格成品密封垫输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_sheet_materials`
- 来源：`asme-b16-20-2023`; `valqua-n580-metal-jacketed-gasket`

###### 冷轧不锈钢薄板（`stainless_steel_sheet`）

仅对申报结构使用不锈钢薄板或带材的批次记录该投入；保留合金牌号和厚度。

- 选定流：冷轧不锈钢薄板
- 流属性/单位：Mass / kg
- 数量规则：计量领用质量并扣除退回薄板、修正库存变化；仅当申报的合金路线不使用不锈钢薄板时记录为零。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格成品密封垫输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_sheet_materials`
- 来源：`asme-b16-20-2023`; `valqua-n580-metal-jacketed-gasket`

###### 薄板制备用外购电力（`sheet_preparation_electricity`）

记录计量或合理分配给切割、冲裁、冲孔、修边、局部抽排及相关控制设备的电力。

- 选定流：电力 `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- 流属性/单位：Net calorific value / MJ
- 数量规则：薄板制备过程的计量电力，必要时由 kWh 换算，并按生产期产出修正。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格成品密封垫输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_sheet_preparation_energy`
- 来源：

###### 薄板制备用切削液（`cutting_fluid`）

仅在切割、机加工或修边操作实际使用时记录切削液，并申报其配方和循环使用方式。

- 选定流：切削液 `576d250f-4f36-4385-939d-0f03b8f95a10`
- 流属性/单位：Mass / kg
- 数量规则：采购量加期初库存，减期末库存及作为产品离开的回收液，再按产出归一化；有记录证明为干式路线时记录为零。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 合格成品密封垫输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_cutting_fluid`
- 来源：

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 转移至装配的金属垫片坯料（`metal_gasket_blank_output`）

记录从薄板制备过程转移的已切割或冲裁密封垫中间体的计量质量。

- 选定流：金属垫片坯料 `02789a7c-41a2-46e6-a41d-2fa6fd4191ed`
- 流属性/单位：Mass / kg
- 数量规则：计量转移坯料质量，并修正在制品库存变化。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格成品密封垫输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_sheet_preparation_outputs`
- 来源：

##### 废物流

###### 分拣后的钢铁薄板废料（`steel_scrap`）

将离开过程的钢板骨架、冲裁料和修边料作为单独的钢铁废物流记录，并披露回收去向和污染情况。

- 选定流：废钢 `b973529f-a945-4cb9-9600-ecbcc745a4c6`
- 流属性/单位：Mass / kg
- 数量规则：废料发运计量质量加期末废料库存、减期初废料库存，并归属到生产期。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格成品密封垫输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_sheet_preparation_outputs`
- 来源：

###### 废切削液（`spent_cutting_fluid`）

当废冷却液或废切削液离场处理或回收时记录本流，不得与无关废油合并。

- 选定流：废切削液 `62b6a738-fb6a-4570-a95a-9255ec0dcb2b`
- 流属性/单位：Mass / kg
- 数量规则：计量或有记录的处理发运质量，并修正场内废液库存变化；未使用切削液或期间内无废液离场时记录为零。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 合格成品密封垫输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_sheet_preparation_outputs`
- 来源：

##### 基本流

###### 直接排入空气的颗粒物（`particulate_matter_air`）

当切割或修边产生的控制后颗粒物通过实测或计算确定为直接排放时记录本流；被捕集并作为废物发运的粉尘不得计入本行。

- 选定流：颗粒物，粒径未特指 `0ce3dedb-caca-407b-a856-a90470eb8ec0`
- 流属性/单位：Mass / kg
- 数量规则：采用生产期的烟道或作业排风实测值，或有文件依据的捕集量与释放量质量计算。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 合格成品密封垫输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_sheet_preparation_outputs`
- 来源：

### 过程：成形、缠绕或包覆、装配、清洗、检验与包装（`forming_assembly_finishing`）

#### 输入

##### 产品流

###### 从薄板制备接收的金属垫片坯料（`metal_gasket_blank_input`）

记录从 `sheet_preparation` 转移的同一中间体，并核对过程级在制品库存变化。

- 选定流：金属垫片坯料 `02789a7c-41a2-46e6-a41d-2fa6fd4191ed`
- 流属性/单位：Mass / kg
- 数量规则：计量接收坯料质量，并修正在制品库存变化。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格成品密封垫输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_assembly_materials`
- 来源：

###### 膨胀石墨板材填料（`expanded_graphite_sheet`）

仅在申报的缠绕式、包覆式或带覆盖层结构使用膨胀石墨板材或带材时记录该投入。

- 选定流：膨胀石墨板材
- 流属性/单位：Mass / kg
- 数量规则：计量领用质量并扣除退回材料、修正库存变化；仅当申报结构不含石墨填料时记录为零。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格成品密封垫输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_assembly_materials`
- 来源：`moeller-spiral-wound-winding`; `valqua-n580-metal-jacketed-gasket`

###### 聚四氟乙烯板材填料（`ptfe_sheet`）

仅在申报的密封垫结构使用 PTFE 板材或带材时记录该投入，并保留原生或填充牌号及厚度。

- 选定流：聚四氟乙烯 `7cacbf87-9707-4f6d-9ff8-830158c75b20`
- 流属性/单位：Mass / kg
- 数量规则：计量领用质量并扣除退回材料、修正库存变化；仅当申报结构不含 PTFE 填料时记录为零。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格成品密封垫输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_assembly_materials`
- 来源：`moeller-spiral-wound-winding`; `valqua-n580-metal-jacketed-gasket`

###### 装配与完工用外购电力（`assembly_electricity`）

记录计量或合理分配给成形、压型、缠绕、实际发生的焊接、装配、清洗、检验、抽排和包装设备的电力。

- 选定流：电力 `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- 流属性/单位：Net calorific value / MJ
- 数量规则：装配与完工过程的计量电力，必要时由 kWh 换算，并按生产期产出修正。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格成品密封垫输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_assembly_energy`
- 来源：

###### 水基清洗用工艺用水（`process_water`）

仅当水基清洗或漂洗在边界内发生时记录工艺用水，并说明水源和水质基础。

- 选定流：工艺用水 `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- 流属性/单位：Mass / kg
- 数量规则：计量或批次记录的水投入，并扣除循环水；无水基清洗或漂洗时记录为零。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 合格成品密封垫输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cleaning_inputs`
- 来源：

###### 碱洗用氢氧化钠（`sodium_hydroxide`）

仅当向碱性清洗槽添加氢氧化钠时记录其产品质量，并另行申报溶液浓度。

- 选定流：氢氧化钠 `e0abcced-0611-4c24-9290-5a2c5a0c4169`
- 流属性/单位：Mass / kg
- 数量规则：根据溶液质量和实测浓度计算投入清洗过程的纯产品当量氢氧化钠；未使用氢氧化钠时记录为零。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 合格成品密封垫输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_cleaning_inputs`
- 来源：

###### 发运用瓦楞纸箱（`corrugated_board_boxes`）

记录用于发运参考产品的成品瓦楞纸箱，不得与其他包装材料合并。

- 选定流：瓦楞纸箱 `4f197bec-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位：Mass / kg
- 数量规则：领用纸箱数量乘以核实的平均单箱质量，并扣除未使用退回量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格成品密封垫输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_packaging`
- 来源：

###### 发运用低密度聚乙烯薄膜（`ldpe_film`）

将作为独立包裹或防护包装组成部分使用的 PE-LD 薄膜记录在本行。

- 选定流：低密度聚乙烯薄膜（PE-LD） `2cecd3a7-d90e-44b4-aec5-1d9dfb907477`
- 流属性/单位：Mass / kg
- 数量规则：称量薄膜领用量，或用薄膜长度乘以核实的单位长度质量，并扣除未使用退回量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格成品密封垫输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_packaging`
- 来源：

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 合格金属片制密封垫成品（`finished_metal_sheeting_gasket`）

仅记录通过申报的尺寸、材料、结构、标记和检验准则的产品。

- 选定流：金属片制密封垫 `566e5c48-5523-4e69-98c9-0a8ad67d24d4`
- 流属性/单位：Mass / kg
- 数量规则：由合格成品密封垫实测净质量归一化后为 1 kg。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：1 kg 合格成品密封垫净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_final_outputs`
- 来源：`un-cpc-3-0-structure-2025`; `eu-cn-2021-hs-8484-10`; `asme-b16-20-2023`

##### 废物流

###### 膨胀石墨填料边角料（`expanded_graphite_offcuts`）

在切割或修整石墨填料时，将分拣后的膨胀石墨板材或带材边角料记录在本行。

- 选定流：膨胀石墨边角料
- 流属性/单位：Mass / kg
- 数量规则：称量边角料发运量，加期末库存、减期初库存；不使用石墨填料时记录为零。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格成品密封垫输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_final_outputs`
- 来源：`moeller-spiral-wound-winding`; `valqua-n580-metal-jacketed-gasket`

###### 聚四氟乙烯填料边角料（`ptfe_offcuts`）

在切割或修整 PTFE 填料时，将分拣后的 PTFE 板材或带材边角料记录在本行。

- 选定流：聚四氟乙烯边角料
- 流属性/单位：Mass / kg
- 数量规则：称量边角料发运量，加期末库存、减期初库存；不使用 PTFE 填料时记录为零。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格成品密封垫输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_final_outputs`
- 来源：`moeller-spiral-wound-winding`; `valqua-n580-metal-jacketed-gasket`

###### 废碱性清洗液（`waste_alkaline_liquor`）

路线采用碱性清洗槽时，记录送去处理的废碱性清洗溶液，并保留 pH、溶解金属、含油量和处理信息。

- 选定流：废碱液 `ca310225-50c8-4d41-8353-4338b41e19a1`
- 流属性/单位：Mass / kg
- 数量规则：计量或有记录的处理发运质量，并修正槽液库存变化；无废碱性清洗液离开过程时记录为零。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 合格成品密封垫输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_final_outputs`
- 来源：

##### 基本流

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | 来源 |
| --- | --- | --- | --- |
| `allocation_subdivision` | 前景过程 | 优先采用直接计量、批次记录和过程细分。在合并产品系统内保持金属垫片坯料内部转移中性，不得重复分配上游负荷。 |  |
| `allocation_shared_resources` | 共用电力和辅料 | 无法直接计量时，采用设备运行时间、实测功率乘运行时间或加工质量等有记录的因果驱动因素分配共用资源；仅在无更具因果性的驱动因素时采用产品质量。 |  |
| `allocation_scrap` | 可回收金属废料 | 在场址大门处将分拣废料报告为废物输出。除非所选背景数据库和研究方法明确要求，否则前景不计入避免负荷收益；披露再生材料含量或报废分配约定，并防止重复计入收益。 |  |
| `allocation_rework` | 内部不合格品与返工 | 内部返工料返回消耗操作时不得视为共产品；计入其新增能源和材料用量，仅将离开系统的不合格品报告为废物。 |  |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_sheet_materials` | `sheet_preparation` | 碳钢和不锈钢薄板投入 | 采购、领用、退回和库存记录 | 材料牌号；厚度；供应商；期初库存；领用质量；退回质量；期末库存；批次标识 | 按材料牌号采用校准秤计量并核对库存 | kg | 每批，按月核对 | 有代表性的连续 12 个月，或申报的较短生产活动中的所有批次 | 所有纳入的薄板制备线 | 按牌号汇总净领用质量并归属至合格输出批次 | 秤校准；供应商证书；库存核对；批次追溯 |
| `cp_sheet_preparation_energy` | `sheet_preparation` | 外购电力 | 电表与设备运行记录 | 电表起止读数；kWh；设备标识；运行时间；批次标识；产出质量 | 专用电表或有文件依据的分表分配 | kWh 和 MJ | 每班或每批 | 与产品产出相同期间 | 所有纳入的切割、修边设备及局部控制设备 | 汇总 kWh，扣除无关负荷，换算为 MJ，再除以合格产出质量 | 电表校准；分配工作表；生产日志 |
| `cp_cutting_fluid` | `sheet_preparation` | 切削液投入 | 采购、补加、回收和库存记录 | 配方；期初库存；采购量；回收产品；期末库存；批次标识 | 质量票据或容器质量结合库存平衡 | kg | 每次补加，按月核对 | 与产品产出相同期间 | 所有湿式切割与修边设备 | 采购量加期初库存，减期末库存和回收产品 | 采购发票；库存台账；配方数据表 |
| `cp_sheet_preparation_outputs` | `sheet_preparation` | 坯料、废钢、废切削液和颗粒物排放 | 转移票据、废料和废物联单、排放测试与控制记录 | 坯料质量；在制品库存；废料质量；废切削液质量；实测或捕集粉尘质量；控制效率；批次与日期 | 校准秤、联单及适用的排放测量或质量平衡计算 | kg | 每批或每次发运；排放按适用监测频次 | 与产品产出相同期间 | 所有纳入的薄板制备线及控制设备 | 分别核对坯料转移和每种输出库存变化；计算释放颗粒物时不得与捕集废物合并 | 秤校准；签署的联单；测试报告；控制设备维护记录 |
| `cp_assembly_materials` | `forming_assembly_finishing` | 密封垫坯料和填充材料投入 | 转移、领用、退回和库存记录 | 坯料质量；填充材料种类与牌号；厚度；期初库存；领用质量；退回质量；期末库存；批次标识 | 按填充材料种类采用校准秤计量并核对库存 | kg | 每批，按月核对 | 与产品产出相同期间 | 所有纳入的成形、缠绕、包覆和装配线 | 按原子材料流汇总净投入并核对内部坯料转移 | 秤校准；供应商数据表；库存核对；批次追溯 |
| `cp_assembly_energy` | `forming_assembly_finishing` | 外购电力 | 电表与设备运行记录 | 电表起止读数；kWh；设备标识；运行时间；批次标识；产出质量 | 专用电表或有文件依据的分表分配 | kWh 和 MJ | 每班或每批 | 与产品产出相同期间 | 所有纳入的装配、清洗、检验、抽排和包装设备 | 汇总 kWh，扣除无关负荷，换算为 MJ，再除以合格产出质量 | 电表校准；分配工作表；生产日志 |
| `cp_cleaning_inputs` | `forming_assembly_finishing` | 工艺用水和氢氧化钠 | 水表、批次配方、化学品领用、浓度和库存记录 | 水质量或体积；溶液质量；氢氧化钠浓度；期初和期末库存；批次标识 | 校准水表或秤结合浓度记录 | kg 和质量分数 | 每个清洗批次 | 与产品产出相同期间 | 所有纳入的水基碱洗槽和漂洗 | 扣除循环水；根据溶液质量和浓度计算纯产品当量氢氧化钠 | 仪表校准；批次表；化学品证书；浓度测试 |
| `cp_packaging` | `forming_assembly_finishing` | 瓦楞纸箱和 PE-LD 薄膜 | 包装领用、数量、单件质量和退回记录 | 纸箱数量与质量；薄膜质量或长度及单位长度质量；退回量；产品批次 | 计数结合核实的平均质量或直接称量 | kg | 每个包装批次 | 与产品产出相同期间 | 所有纳入的包装工位 | 分别计算每种包装流的净领用质量并除以合格产品质量 | 秤校准；包装规格；领用与退回记录 |
| `cp_final_outputs` | `forming_assembly_finishing` | 成品、填充材料边角料和废碱液 | 最终检验、净质量、废物发运和库存记录 | 合格产品质量；不合格质量；边角料种类与质量；槽液发运质量；槽液库存变化；批次标识 | 校准秤、检验记录和处理联单 | kg | 每批或每次发运 | 与产品产出相同期间 | 所有纳入的完工线、废物存放区和清洗槽 | 汇总合格产品净质量；分别核对每种废物；将所有行归一化到 1 kg 产品 | 秤校准；检验放行；签署的废物联单；库存核对 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_normalize_reference` | 每个清单行 | 归一化数量 = 可归属于该产品的期间数量除以合格密封垫成品净质量 | 可归属的期间数量；合格成品净质量 | 每 1 kg 参考产品的数量 | `mass-balance-identity` |
| `calc_electricity_conversion` | 电力行 | 电力 MJ = 电表 kWh 乘以 3.6 | 电表 kWh | 外购电力 MJ | `si-energy-conversion` |
| `calc_pure_naoh` | 氢氧化钠行 | 纯产品当量氢氧化钠 = 清洗溶液质量乘以实测氢氧化钠质量分数 | 溶液质量；氢氧化钠质量分数 | kg 氢氧化钠产品当量 | `mass-balance-identity` |
| `calc_internal_transfer` | 金属垫片坯料行 | 同一期间内，转移坯料输出加期末在制品、减期初在制品，应与装配坯料投入核对 | 坯料输出；坯料输入；期初和期末在制品 | 已核对的内部转移差额 | `mass-balance-identity` |
| `calc_material_balance` | 每个过程及完整前景 | 投入质量 = 产品质量加分别识别的废物和排放质量，加期末库存、减期初库存；应调查差额，不得强行将未解释差额归零 | 原子材料投入；产品；废物；排放；库存变化 | 披露的质量平衡差额 | `mass-balance-identity` |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | 参考产品和材料投入 | 保留产品结构、金属合金、填充材料种类、尺寸、标准或图纸、适用时的压力等级以及批次可追溯性。 | 最终检验放行、图纸或标准声明、供应商证书和批次记录 |
| `dq_measurement` | 所有计量行 | 使用校准的仪表或秤，并保留原始读数、换算因子、库存修正和分配工作表。 | 校准证书、电表导出、称量票据和签署的计算文件 |
| `dq_temporal` | 前景数据集 | 优先采用连续 12 个月；仅当较短生产活动覆盖申报产品与路线，且讨论季节性或生产波动时，方可采用较短期间。 | 生产日历、批次清单和代表性评估 |
| `dq_completeness` | 过程清单 | 核对每个必需过程、每条申报的条件路线、内部转移、材料、包装、废物和直接排放；说明排除项和质量平衡差额。 | 完整的流检查表、过程质量平衡和排除日志 |
| `dq_background` | 关联上游数据集 | 尽可能匹配地域、技术、合金或聚合物牌号、产品形态、再生材料含量和时间代表性；披露每个代理数据。 | 数据集元数据和代理理由 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | 来源 |
| --- | --- | --- | --- |
| `validation_identity` | 参考流 | 当规范 PCR 标识、成品 UUID、参考数量、质量属性、单位组或必需限定信息缺失或不一致时，拒绝该数据集。 |  |
| `validation_processes` | 过程图和清单 | 必须同时具有 `sheet_preparation` 和 `forming_assembly_finishing` 清单；每行应位于正确的方向和流类型下，每个条件性零值都应由路线证据支持。 |  |
| `validation_internal_transfer` | 金属垫片坯料 | 坯料输出与输入必须采用相同 UUID 和质量基础，核对在制品库存变化，并防止内部转移被作为外部参考产品。 |  |
| `validation_balance` | 质量行 | 根据原始记录重新计算过程及完整前景质量平衡；调查并披露未解释差额，且不得创建未特指的材料流或废物流。 | `mass-balance-identity` |
| `validation_energy` | 电力行 | 验证两个过程的外购电力分别报告、统一换算为 MJ，且未与其他能源载体合并。 | `si-energy-conversion` |
| `validation_wastes` | 废物与排放输出 | 验证废钢、石墨边角料、PTFE 边角料、废切削液、废碱液和颗粒物排放均保持原子性，且省略的条件行确实不存在。 |  |
| `validation_boundary` | 数据集范围 | 确认上游供应仅关联一次，分销和使用阶段被排除，任何超出工厂大门的扩展均单独披露。 | `un-cpc-3-0-structure-2025`; `eu-cn-2021-hs-8484-10` |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 具有从摇篮到工厂大门上游投入关联的前景门到门生产数据集 |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | 当必需限定信息、地域、技术、分配和数据质量相容时，用于申报金属片密封垫结构的产品和路线特定从摇篮到工厂大门研究 |
| excluded_use | 机械密封、非金属密封垫、不含薄片结构的整体机加工环连接垫、使用阶段泄漏或寿命主张，以及金属或填充材料组成未披露的产品 |
| required_metadata | 规范 PCR 标识；产品与中间体 UUID；结构；合金和填充材料牌号；尺寸；标准或图纸；适用时的压力等级；场址地域；参考期；路线；包装状态；再生材料含量；废料分配；背景数据集标识 |
| required_quality_disclosure | 初级数据占比；仪表与秤覆盖率；分配驱动因素；质量平衡差额；条件路线；代理数据；未解决的流 UUID；排除流；时间与技术代表性 |
| update_trigger | 密封垫结构、合金或填充材料牌号、制造路线、清洗化学品、包装系统、场址能源结构、废料或回收约定、生产技术发生变化，或前景强度出现实质性变化 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3-0-structure-2025` | 正式指南（`official_guidance`） | 联合国统计司，CPC 第 3.0 版结构，2025 年 6 月 30 日，https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv，检索日期 2026-09-06 | CPC 43924 正式产品识别和分类背景 |
| `eu-cn-2021-hs-8484-10` | 正式指南（`official_guidance`） | 欧盟委员会实施条例（EU）2020/1577，2021 年合并商品目录，编码 8484 10 00，https://eur-lex.europa.eu/eli/reg_impl/2020/1577/oj/eng/pdf，检索日期 2026-09-06 | 金属薄片与另一种材料结合或两层及以上金属构成的语义边界，以及与机械密封的区分 |
| `asme-b16-20-2023` | 标准（`standard`） | ASME B16.20-2023，管法兰用金属密封垫，https://www.asme.org/codes-standards/find-codes-standards/b16-20-metallic-gaskets-pipe-flanges/2023，检索日期 2026-09-06 | 涵盖的金属密封垫结构以及材料、尺寸、公差和标记限定信息 |
| `moeller-spiral-wound-winding` | 手册（`handbook`） | Möller-Metalldichtungen GmbH，Winding，https://www.moeller-metalldichtungen.de/range-and-services/manufactoring-processes/winding.html，检索日期 2026-09-06 | 缠绕式生产过程分解、与内外环连接以及石墨或 PTFE 填充材料识别 |
| `valqua-n580-metal-jacketed-gasket` | 手册（`handbook`） | VALQUA, Ltd.，Metal Jacketed Gasket N580，https://www.seal.valqua.co.jp/en/metaljacketed/n580/，检索日期 2026-09-06 | 金属包覆结构、金属与缓冲材料方案以及薄板折叠成最终形状 |
| `mass-balance-identity` | 方法因子（`method_factor`） | 对前景期间记录和库存变化应用质量守恒 | 归一化、纯产品当量计算、内部转移核对和质量平衡校验 |
| `si-energy-conversion` | 方法因子（`method_factor`） | SI 能量换算恒等式：1 kWh = 3.6 MJ | 电力单位换算和校验 |
