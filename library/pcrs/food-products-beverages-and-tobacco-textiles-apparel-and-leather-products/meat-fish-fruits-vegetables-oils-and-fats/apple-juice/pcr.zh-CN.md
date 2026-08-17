---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.apple-juice
language: zh-CN
status: candidate
content_maturity: authored_methodology
translation_status: aligned
sync_with: pcr.en-US.md
---

# 苹果汁

## 1. 范围与适用性

本 PCR 适用于在制造厂门口作为成品饮料或散装饮料配料供应的未发酵苹果汁。覆盖直接榨取/非浓缩还原（NFC）苹果汁和由苹果浓缩汁复原的苹果汁；在产品符合适用市场规范且仍属于苹果汁的前提下，可为清汁或浑汁。

前景路线可以从果汁加工厂接收苹果、接收外购单倍浓度苹果汁，或接收外购苹果浓缩汁开始。必须明确声明起始条件及所有未纳入的上游阶段。本 PCR 覆盖实际存在的接收与贮存、分选与清洗、破碎与压榨、可选澄清或其他果汁精制、可选浓缩、可选复原与调配、保藏、灌装或散装发运、清洗、公用工程、残余物、废水及直到所声明制造厂门口的直接排放。

不包括苹果果肉饮料（nectar）、发酵苹果酒或梨果酒、醋、苹果泥、以苹果浓缩汁作为参考产品销售的产品、混合果汁、苹果汁仅作为配料的饮料，以及作为前景操作的果园种植。当上游苹果生产、配料生产、包装生产、外购能源、运输和废物处理位于所声明前景边界之外时，仍须作为背景投入链接。

下文选定的 Tiangong `Apple juice` 产品流是 CPC 21435 的类别参考，但不表示可以将所有苹果汁形态视为相同。前景数据包必须描述实际路线、组成、可溶性固形物基准、澄清状态、保藏方式、包装或散装状态和市场门口。若存在能够表示实际产品、且不会缩窄或改变本 PCR 语义范围的更具体公开 Tiangong 流，应使用该流，同时保留类别参考作为 PCR 关联。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.apple-juice |
| classification_refs | CPC 3.0: 21435（Apple juice；exact） |
| covered_products | 单一水果苹果汁；直接榨取/NFC 苹果汁；浓缩还原苹果汁；清苹果汁或浑苹果汁；在所声明制造厂门口的包装或散装苹果汁 |
| excluded_products | 苹果果肉饮料；发酵苹果酒或梨果酒；醋；苹果泥；以浓缩汁作为销售参考产品的苹果浓缩汁；混合果汁；苹果风味饮料及苹果汁仅作为配料的饮料 |
| representative_product | 由 Tiangong 类别流表示、并声明实际果汁路线和市场形态的苹果汁 |
| production_route | 所声明的苹果接收与准备、提取、可选精制或浓缩、可选复原、保藏以及灌装或散装发运组合 |
| market_state | 制造厂门口按现状质量计的液态苹果汁；声明包装/散装状态、清/浑状态、保藏状态、贮存条件和可溶性固形物规范 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 在制造厂门口提供满足所声明组成、真实性、保藏和市场规范的苹果汁 |
| How much | 1 kg 按现状质量计的苹果汁，不含单独包装的质量 |
| How well | 声明直接榨取/NFC 或浓缩还原路线、仅含苹果的产品身份、实际可溶性固形物、清/浑或果肉状态、保藏方式、包装/散装状态、贮存条件及适用的食品安全放行状态 |
| How long or cycle | 制造厂门口的一个生产批次；所声明货架期和温度条件是产品限定信息，不延长前景时间边界 |
| reference_flow_link | 以下参考数量和具有 UUID 的产品流实现功能单位 |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 在所声明制造厂门口的 1 kg 按现状质量计苹果汁 |
| 参考产品流 | Apple juice `3db6b381-99a9-4976-8955-aa9b65903844` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 直接榨取/NFC 或浓缩还原路线；国家或市场规范；实测可溶性固形物及测量条件；清/浑及果肉状态；保藏方式；包装类型和规格或散装状态；常温/冷藏/冷冻贮存条件；制造地域和门口；货架期；仅含苹果或任何已声明的允许配料 |

构建前景数据包时，`必需限定信息` 中列出的信息应在数据集元数据、过程说明、参考流备注、产品说明或等效数据包字段中明确声明。缺失必需限定信息的数据包视为参考流定义不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_product_mass` | 参考苹果汁产出 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 在所声明门口计量净的按现状质量计果汁。排除单独的一次、二次和三次包装质量，并将每种包装材料作为清单投入记录。 |
| `volume_to_mass` | 以体积记录的果汁、水和液体配料 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 仅使用批次或产品特定的实测密度及其测量温度将体积换算为质量；保留体积、密度、温度和换算证据。 |
| `soluble_solids_basis` | 果汁和浓缩汁组成 | 产品特定的可溶性固形物记录 | Brix 度及测量温度 | 记录实测可溶性固形物和分析方法。若无已声明且经验证的关系，不得直接将 Brix 值换算为干物质量。 |
| `reconstituted_juice_brix` | 由浓缩汁复原的苹果汁 | 产品特定的可溶性固形物记录 | 规定条件下的 Brix 度 | 执行适用市场规则。Codex CXS 247-2005 对复原的 Malus domestica 苹果汁列出 11.5 Brix 度，并在满足真实性条款时承认国家特定的自然差异，所述例外的下限为 10 Brix 度；不得将该规则作为直接榨取果汁的固定配方目标。 |
| `mass_balance_period` | 每个纳入的前景过程 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 在归一化前，按同一批次或报告期闭合投入、产品、共产品、残余物、废水、蒸发及有记录的库存变化质量。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 声明一种：接收门口的苹果；接收门口的外购单倍浓度苹果汁；或接收门口的外购苹果浓缩汁及复原投入 |
| starting_condition_role | 决定纳入哪些准备、提取、浓缩和复原操作的前景进入点 |
| product_classification_scope | 本 PCR 范围内的苹果汁；除非浓缩汁本身是另行治理的参考产品，苹果浓缩汁属于中间品或同类别递归投入 |
| recursive_input_rule | 将外购单倍浓度苹果汁或苹果浓缩汁记录为产品投入，并记录数量、组成、供应商门口和上游数据集引用；不得在接收过程中递归重建同一苹果汁类别 |
| upstream_dataset_requirement | 为跨越前景边界的苹果、外购果汁或浓缩汁、配料、加工助剂、包装、能源、运输和处理服务链接上游数据集 |
| disclosure | 披露起始条件、纳入的单元操作、外包操作、技术与保藏路线、地域、报告期、包装/散装状态及任何排除的操作 |

| rule_id | 适用对象 | 规则 | 来源 |
| --- | --- | --- | --- |
| `boundary_route_gate` | 苹果汁前景路线 | 纳入从所声明起始条件到制造厂门口成品苹果汁、且由报告主体控制的所有操作，包括清洗、公用工程、残余物、废水和直接排放。 | `fao-fruit-juice-processing-2001`; `eu-jrc-fdm-bref-2019` |
| `boundary_apple_condition` | 接收苹果的路线 | 纳入接收检查、拒收、分选、清洗以及破碎或压榨前对拒收果的管理；不得假定后续热处理会清除已经存在的棒曲霉素。 | `codex-cxc-50-2003` |
| `boundary_route_variants` | 路线特定操作 | 只要为所声明产品实际执行，就纳入澄清、过滤、脱胶、脱气、浓缩、香气回收、复原、调配、均质、保藏、冷藏或无菌操作。 | `codex-cxs-247-2005-2025`; `fao-fruit-juice-processing-2001` |
| `boundary_food_safety_control` | 保藏与放行 | 记录实际验证的控制步骤、监控记录、失效、返工和最终放行状态。适用时的法规 5-log 要求是产品安全约束，不能替代实测能源或收率清单。 | `us-fda-juice-haccp-21-cfr-120-24` |
| `boundary_background_linkage` | 上游和下游服务 | 仅当保留其数量及链接的上游或处理数据集时，才可将场外农业、材料生产、外购公用工程、运输和处理置于前景之外。 | `iso-14044-2006` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `apple_receiving_preparation` | 苹果接收、分选和清洗 | conditional | 当整苹果跨越所声明前景门口时纳入 | 提取前准备合格苹果并分离拒收物 | 送入破碎的合格苹果 kg |
| `juice_extraction` | 破碎和果汁提取 | conditional | 当前景中从苹果提取果汁时纳入 | 将准备后的苹果转化为原汁和果渣 | 离开提取过程的原汁 kg |
| `juice_finishing` | 果汁精制与澄清 | conditional | 纳入实际使用的每个精制操作，包括酶处理、澄清、过滤、脱气或均质 | 生产所声明的清、浑或含果肉中间果汁 | 精制中间果汁 kg |
| `juice_concentration` | 果汁浓缩与香气处理 | conditional | 当前景中浓缩苹果汁时纳入，包括一体化浓缩/复原路线 | 生产并核算浓缩汁、回收组分、冷凝液和损失 | 苹果浓缩汁 kg 及实测可溶性固形物 |
| `juice_reconstitution` | 复原与配制 | conditional | 当前景中混合浓缩汁、水、允许恢复组分或其他允许配料时纳入 | 按所声明规范生产单倍浓度苹果汁 | 复原苹果汁 kg |
| `preservation_packaging_dispatch` | 保藏、灌装与发运 | required | 始终纳入最终前景调理和发运步骤；仅当包装在门口前发生时适用包装行 | 生产所声明包装或散装市场状态的已放行苹果汁 | 1 kg 参考苹果汁产出 |

### 过程：苹果接收、分选和清洗（`apple_receiving_preparation`）

#### 输入

##### 产品流

###### 接收的制汁苹果（`received_apples`）

记录跨越接收门口的苹果质量，并保留供应商、已知时的品种或混合、采收/贮存状态、批次身份和验收结果。

- 选定流：Apple `dae75a0f-16b9-47ff-9ee7-63058aebcfe2`
- 适用条件：仅适用于整苹果路线；与外购果汁或外购浓缩汁作为声明起始条件的路线互斥
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：去除拒收果之前的实称接收质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 送入破碎的合格苹果，并最终归一化到 1 kg 参考苹果汁
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_receiving_records`
- 来源：`codex-cxc-50-2003`

###### 苹果清洗饮用水（`receiving_potable_water`）

将破碎前接触苹果的水与清洁剂和消毒剂投加量分别记录。

- 选定流：Tap water `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- 适用条件：仅适用于饮用水清洗路线；循环水须先分开补水与排污后方可计入
- 流属性/单位：Mass / kg
- 数量规则：可归属于接收和准备的计量清洗补水
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 送入破碎的合格苹果
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_receiving_records`
- 来源：`codex-cxc-50-2003`

###### 次氯酸钠消毒剂（`receiving_sodium_hypochlorite`）

将次氯酸钠与水及非氯消毒剂分别记录。

- 选定流：Sodium hypochlorite `28c4ca0f-c924-4d2a-93dd-b9ac93009d25`
- 适用条件：仅适用于含氯消毒清洗路线；同一剂量与过氧乙酸消毒剂互斥
- 流属性/单位：Mass / kg
- 数量规则：实称或经投加系统核对的次氯酸钠投入
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 送入破碎的合格苹果
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_receiving_records`
- 来源：`codex-cxc-50-2003`

###### 过氧乙酸消毒剂（`receiving_peracetic_acid`）

在以过氧乙酸替代含氯消毒剂时单独记录。

- 选定流：过氧乙酸
- 适用条件：仅适用于过氧乙酸消毒路线；同一剂量与次氯酸钠互斥
- 流属性/单位：Mass / kg
- 数量规则：实称或经投加系统核对的过氧乙酸投入
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 送入破碎的合格苹果
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_receiving_records`
- 来源：`codex-cxc-50-2003`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 合格的准备后苹果（`prepared_apples`）

计量离开分选和清洗并送往破碎的合格苹果；保持内部转移可识别，避免重复计为外部产品。

- 选定流：准备后苹果
- 适用条件：仅适用于整苹果路线；该产出与 `prepared_apples_input` 使用同一内部交换
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：实称或通过质量平衡计算的送往提取的合格苹果
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 送入破碎的合格苹果
- 基准类型：过程输出（`process_output`）
- 证据类型：根据采集计算（`calculated_from_collection`）
- 采集协议：`cp_receiving_records`
- 来源：`codex-cxc-50-2003`

##### 废物流

###### 拒收苹果（`rejected_apples`）

按去向分别记录发霉、腐烂、受损或其他原因被拒收的苹果，并按废物或回收材料分类。

- 选定流：拒收苹果
- 适用条件：仅包含破碎前拒收的苹果；不得包含叶片、枝条、石块或包装杂物
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：按批次和去向实称的拒收质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 送入破碎的合格苹果
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_receiving_records`
- 来源：`codex-cxc-50-2003`

###### 水果产线分选杂物（`receiving_sorting_debris`）

将接收苹果中去除的叶片、枝条、石块和非水果杂物与拒收果分别记录。

- 选定流：水果产线分选杂物
- 适用条件：仅包含接收和分选时去除的非水果杂物
- 流属性/单位：Mass / kg
- 数量规则：按批次和去向实称的杂物质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 送入破碎的合格苹果
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_receiving_records`
- 来源：`codex-cxc-50-2003`

###### 接收和清洗废水（`receiving_wastewater`）

记录废水体积或质量、排放去向和单独管理的固体；若未计入携带水分和损失，不得仅从水投入推定废水量。

- 选定流：苹果清洗废水
- 适用条件：仅用于接收和清洗排水；单独处置的消毒浓缩废液应另列废物流
- 流属性/单位：Volume / m3 或 Mass / kg，保留实测属性和换算基准
- 数量规则：接收和清洗的计量排放或有记录的水平衡
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 送入破碎的合格苹果
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_receiving_records`
- 来源：`eu-jrc-fdm-bref-2019`

##### 基本流

### 过程：破碎和果汁提取（`juice_extraction`）

#### 输入

##### 产品流

###### 提供给提取过程的准备后苹果（`prepared_apples_input`）

将本内部投入链接至 `prepared_apples`；若外购准备后水果跨越所声明门口，则明确记录。

- 选定流：准备后苹果
- 适用条件：仅适用于整苹果提取路线；该投入与 `prepared_apples` 为同一内部交换
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：在计入有记录库存变化后，与上个过程产出相同的转移数量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 离开提取过程的原汁
- 基准类型：过程输出（`process_output`）
- 证据类型：根据采集计算（`calculated_from_collection`）
- 采集协议：`cp_extraction_records`
- 来源：`codex-cxc-50-2003`; `fao-fruit-juice-processing-2001`

###### 提取用低压电网电力（`extraction_grid_electricity_low_voltage`）

按所述适用条件单独记录该原子交换。

- 选定流：低压电网电力
- 适用条件：仅适用于低压电网供给；同一计量时段与中压供给互斥
- 流属性/单位：Energy / kWh
- 数量规则：分配至低压电网供给的破碎和压榨计量电量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 离开提取过程的原汁
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_extraction_records`
- 来源：`fao-fruit-juice-processing-2001`

###### 提取用中压电网电力（`extraction_grid_electricity_medium_voltage`）

按所述适用条件单独记录该原子交换。

- 选定流：中压电网电力
- 适用条件：仅适用于中压电网供给；同一计量时段与低压供给互斥
- 流属性/单位：Energy / kWh
- 数量规则：分配至中压电网供给的破碎和压榨计量电量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 离开提取过程的原汁
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_extraction_records`
- 来源：`fao-fruit-juice-processing-2001`

###### 提取用蒸汽（`extraction_steam`）

按所述适用条件单独记录该原子交换。

- 选定流：Steam `293f9fd9-5182-4d35-8aa5-ce73d4f322b7`
- 适用条件：仅适用于外购蒸汽路线；同一交付热量与燃料投入互斥
- 流属性/单位：Mass / kg
- 数量规则：供应提取设备的计量蒸汽
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 离开提取过程的原汁
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_extraction_records`
- 来源：`fao-fruit-juice-processing-2001`

###### 提取用天然气（`extraction_natural_gas`）

按所述适用条件单独记录该原子交换。

- 选定流：Natural gas `4bfd1abb-9106-495a-a291-ce410f205691`
- 适用条件：仅适用于场内天然气供热；每笔燃烧记录与柴油和液化石油气互斥
- 流属性/单位：Gross calorific value / MJ
- 数量规则：用于提取供热的计量天然气能量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 离开提取过程的原汁
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_extraction_records`
- 来源：`fao-fruit-juice-processing-2001`

###### 提取用柴油（`extraction_diesel_oil`）

按所述适用条件单独记录该原子交换。

- 选定流：Diesel oil `9d258d75-6792-4f1c-9856-81602ed8f816`
- 适用条件：仅适用于场内柴油供热；每笔燃烧记录与天然气和液化石油气互斥
- 流属性/单位：Mass / kg
- 数量规则：用于提取供热的实称或经发票核对柴油量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 离开提取过程的原汁
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_extraction_records`
- 来源：`fao-fruit-juice-processing-2001`

###### 提取用液化石油气（`extraction_lpg`）

按所述适用条件单独记录该原子交换。

- 选定流：Liquefied petroleum gas `3786072f-d3ce-4941-9249-ed5d346b21a6`
- 适用条件：仅适用于场内液化石油气供热；每笔燃烧记录与天然气和柴油互斥
- 流属性/单位：Mass / kg
- 数量规则：用于提取供热的实称或经发票核对液化石油气量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 离开提取过程的原汁
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_extraction_records`
- 来源：`fao-fruit-juice-processing-2001`

###### 提取用压缩空气（`extraction_compressed_air`）

按所述适用条件单独记录该原子交换。

- 选定流：Compressed air `46e2b1e4-5a4e-4579-b6a2-65b03f9ce825`
- 适用条件：仅适用于气动破碎或压榨设备
- 流属性/单位：Volume / m3
- 数量规则：可归属于提取过程的计量压缩空气
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 离开提取过程的原汁
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_extraction_records`
- 来源：`fao-fruit-juice-processing-2001`

###### 提取工艺水（`extraction_process_water`）

按所述适用条件单独记录该原子交换。

- 选定流：Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- 适用条件：仅用于提取工艺水投入；不得与清洗水合并
- 流属性/单位：Mass / kg
- 数量规则：可归属于破碎和压榨的计量工艺水
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 离开提取过程的原汁
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_extraction_records`
- 来源：`fao-fruit-juice-processing-2001`

###### 提取滤布（`extraction_filter_cloth`）

按所述适用条件单独记录该原子交换。

- 选定流：Filter cloth `117b035a-6255-425d-92b9-6c65ff1be2ab`
- 适用条件：仅适用于压榨布路线；可重复使用滤布须量化更换损失后计入
- 流属性/单位：Mass / kg
- 数量规则：经库存变化和有记录复用调整的领用滤布质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 离开提取过程的原汁
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_extraction_records`
- 来源：`fao-fruit-juice-processing-2001`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 提取的苹果原汁（`raw_apple_juice`）

计量压榨后、精制损失前的原汁。记录可溶性固形物、温度以及自流汁与压榨汁是否混合。

- 选定流：提取苹果原汁
- 适用条件：仅适用于前景提取路线；与外购单倍浓度苹果汁作为精制投入的路线互斥
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：实称或经罐位核对的原汁产出
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 离开提取过程的原汁
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_extraction_records`
- 来源：`codex-cxc-50-2003`; `fao-fruit-juice-processing-2001`

##### 废物流

###### 苹果果渣（`apple_pomace`）

若果渣、籽、筛出物和压榨损失的去向不同，应分别记录。只有具备去向和收益或实际利用证据时，才将销售或利用的材料分类为共产品；否则保留适当废物流。

- 选定流：苹果果渣
- 适用条件：仅包含压榨后分离的湿果渣；苹果籽和筛余物使用各自行
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg 湿重；相关时记录含水率
- 数量规则：按报告期实称产出或提取质量平衡
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 离开提取过程的原汁
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_extraction_records`
- 来源：`fao-fruit-juice-processing-2001`

###### 提取苹果籽（`extraction_apple_seeds`）

按所述适用条件单独记录该原子交换。

- 选定流：苹果籽
- 适用条件：仅适用于从果渣中单独回收的籽粒部分
- 流属性/单位：Mass / kg
- 数量规则：报告期内实称籽粒质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 离开提取过程的原汁
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_extraction_records`
- 来源：`fao-fruit-juice-processing-2001`

###### 提取筛余物（`extraction_screen_rejects`）

按所述适用条件单独记录该原子交换。

- 选定流：苹果提取筛余物
- 适用条件：仅包含提取筛网去除的固体
- 流属性/单位：Mass / kg
- 数量规则：报告期内实称筛余物质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 离开提取过程的原汁
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_extraction_records`
- 来源：`fao-fruit-juice-processing-2001`

###### 提取苹果汁损失（`extraction_juice_loss`）

按所述适用条件单独记录该原子交换。

- 选定流：损失的苹果原汁
- 适用条件：仅适用于作为单独计量损失离开产品路径的原汁
- 流属性/单位：Mass / kg
- 数量规则：罐体、地面损失或质量平衡记录的原汁损失
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 离开提取过程的原汁
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_extraction_records`
- 来源：`fao-fruit-juice-processing-2001`

##### 基本流

### 过程：果汁精制与澄清（`juice_finishing`）

#### 输入

##### 产品流

###### 提供给精制过程的果汁（`finishing_juice_input`）

记录进入实际精制线的原汁或外购单倍浓度苹果汁，包括可溶性固形物和清/浑状态。

- 选定流：单倍浓度苹果汁
- 适用条件：仅适用于精制路线；每笔交换须在内部原汁与外购单倍浓度果汁之间确定一个来源
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：进入精制过程的实称或罐位核对投入
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 精制中间果汁
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_finishing_records`
- 来源：`codex-cxs-247-2005-2025`

###### 精制用果胶酶（`finishing_pectinase`）

按所述适用条件单独记录该原子交换。

- 选定流：果胶酶
- 适用条件：仅适用于酶法脱胶路线；未处理浑汁路线不适用
- 流属性/单位：Mass / kg
- 数量规则：按批次实称果胶酶剂量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 精制中间果汁
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_finishing_records`
- 来源：`fao-fruit-juice-processing-2001`

###### 精制用淀粉酶（`finishing_amylase`）

按所述适用条件单独记录该原子交换。

- 选定流：amylase `ec31f8f1-1870-4f41-846a-3632072a5d9f`
- 适用条件：仅适用于酶法淀粉处理路线；未投加淀粉酶时不适用
- 流属性/单位：Mass / kg
- 数量规则：按批次实称淀粉酶剂量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 精制中间果汁
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_finishing_records`
- 来源：`fao-fruit-juice-processing-2001`

###### 明胶澄清助剂（`finishing_gelatin`）

按所述适用条件单独记录该原子交换。

- 选定流：gelatin `aa9b81c7-64ab-40a2-9419-50fedc25a2c7`
- 适用条件：仅适用于明胶澄清路线；非明胶澄清不适用
- 流属性/单位：Mass / kg
- 数量规则：按批次实称明胶剂量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 精制中间果汁
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_finishing_records`
- 来源：`fao-fruit-juice-processing-2001`

###### 膨润土澄清助剂（`finishing_bentonite`）

按所述适用条件单独记录该原子交换。

- 选定流：Bentonite `e01d9941-db32-46cb-b577-ebc584597a2d`
- 适用条件：仅适用于膨润土澄清路线；非膨润土澄清不适用
- 流属性/单位：Mass / kg
- 数量规则：按批次实称膨润土剂量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 精制中间果汁
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_finishing_records`
- 来源：`fao-fruit-juice-processing-2001`

###### 精制用活性炭（`finishing_activated_carbon`）

按所述适用条件单独记录该原子交换。

- 选定流：Activated carbon `6b978f9e-864d-421d-8e63-8e44f17c5874`
- 适用条件：仅适用于活性炭处理路线
- 流属性/单位：Mass / kg
- 数量规则：按批次实称活性炭剂量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 精制中间果汁
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_finishing_records`
- 来源：`fao-fruit-juice-processing-2001`

###### 硅藻土过滤助剂（`finishing_diatomaceous_earth`）

按所述适用条件单独记录该原子交换。

- 选定流：Diatomaceous earth filter aid `af13e1e4-290c-412d-b3fe-dcba0b4c5b81`
- 适用条件：仅适用于硅藻土过滤路线；每次滤料装填与珍珠岩互斥
- 流属性/单位：Mass / kg
- 数量规则：实称滤料初装和补加质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 精制中间果汁
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_finishing_records`
- 来源：`fao-fruit-juice-processing-2001`

###### 珍珠岩过滤助剂（`finishing_perlite`）

按所述适用条件单独记录该原子交换。

- 选定流：Perlite filter aid `45203225-538a-422b-bf66-16f2e7931f18`
- 适用条件：仅适用于珍珠岩过滤路线；每次滤料装填与硅藻土互斥
- 流属性/单位：Mass / kg
- 数量规则：实称滤料初装和补加质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 精制中间果汁
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_finishing_records`
- 来源：`fao-fruit-juice-processing-2001`

###### 精制滤布（`finishing_filter_cloth`）

按所述适用条件单独记录该原子交换。

- 选定流：Filter cloth `117b035a-6255-425d-92b9-6c65ff1be2ab`
- 适用条件：仅适用于滤布过滤路线；更换损失不含仍在役复用滤布
- 流属性/单位：Mass / kg
- 数量规则：经库存和复用调整的滤布更换质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 精制中间果汁
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_finishing_records`
- 来源：`fao-fruit-juice-processing-2001`

###### 精制工艺水（`finishing_process_water`）

按所述适用条件单独记录该原子交换。

- 选定流：Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- 适用条件：仅适用于跨越精制边界的用水；就地清洗排水列入 `finishing_wastewater`
- 流属性/单位：Mass / kg
- 数量规则：精制用计量水量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 精制中间果汁
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_finishing_records`
- 来源：`eu-jrc-fdm-bref-2019`

###### 精制用低压电网电力（`finishing_grid_electricity_low_voltage`）

按所述适用条件单独记录该原子交换。

- 选定流：低压电网电力
- 适用条件：仅适用于低压电网供给；同一计量时段与中压供给互斥
- 流属性/单位：Energy / kWh
- 数量规则：分配至低压供给的精制计量电量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 精制中间果汁
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_finishing_records`
- 来源：`eu-jrc-fdm-bref-2019`

###### 精制用中压电网电力（`finishing_grid_electricity_medium_voltage`）

按所述适用条件单独记录该原子交换。

- 选定流：中压电网电力
- 适用条件：仅适用于中压电网供给；同一计量时段与低压供给互斥
- 流属性/单位：Energy / kWh
- 数量规则：分配至中压供给的精制计量电量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 精制中间果汁
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_finishing_records`
- 来源：`eu-jrc-fdm-bref-2019`

###### 精制用蒸汽（`finishing_steam`）

按所述适用条件单独记录该原子交换。

- 选定流：Steam `293f9fd9-5182-4d35-8aa5-ce73d4f322b7`
- 适用条件：仅适用于蒸汽加热精制路线；同一热负荷与热水互斥
- 流属性/单位：Mass / kg
- 数量规则：精制操作使用的计量蒸汽
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 精制中间果汁
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_finishing_records`
- 来源：`eu-jrc-fdm-bref-2019`

###### 精制用热水（`finishing_hot_water`）

按所述适用条件单独记录该原子交换。

- 选定流：工业热水
- 适用条件：仅适用于热水加热精制路线；同一热负荷与蒸汽互斥
- 流属性/单位：Energy / MJ
- 数量规则：计量交付热水热量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 精制中间果汁
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_finishing_records`
- 来源：`eu-jrc-fdm-bref-2019`

###### 精制用压缩空气（`finishing_compressed_air`）

按所述适用条件单独记录该原子交换。

- 选定流：Compressed air `46e2b1e4-5a4e-4579-b6a2-65b03f9ce825`
- 适用条件：仅适用于气动精制设备
- 流属性/单位：Volume / m3
- 数量规则：可归属于精制过程的计量压缩空气
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 精制中间果汁
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_finishing_records`
- 来源：`eu-jrc-fdm-bref-2019`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 精制中间苹果汁（`finished_intermediate_juice`）

计量离开精制线的果汁，并记录清/浑状态、可溶性固形物、果肉或浊度描述和温度。

- 选定流：精制中间苹果汁
- 适用条件：仅适用于所声明精制路线；清汁、浑汁和含果肉批次分别记录
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：精制过程的实称或罐位核对产出
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 精制中间果汁
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_finishing_records`
- 来源：`codex-cxs-247-2005-2025`

##### 废物流

###### 截留苹果固形物（`finishing_retained_apple_solids`）

按所述适用条件单独记录该原子交换。

- 选定流：截留苹果固形物
- 适用条件：仅包含精制过程中从果汁去除的固体
- 流属性/单位：Mass / kg
- 数量规则：实称湿固体并保留含水率
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 精制中间果汁
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_finishing_records`
- 来源：`eu-jrc-fdm-bref-2019`

###### 废膨润土（`finishing_spent_bentonite`）

按所述适用条件单独记录该原子交换。

- 选定流：废膨润土
- 适用条件：仅适用于膨润土澄清路线
- 流属性/单位：Mass / kg
- 数量规则：实称废膨润土和截留固形物
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 精制中间果汁
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_finishing_records`
- 来源：`eu-jrc-fdm-bref-2019`

###### 废活性炭（`finishing_spent_activated_carbon`）

按所述适用条件单独记录该原子交换。

- 选定流：spent activated carbon `aff33890-3f08-40f9-9310-a7f77213de05`
- 适用条件：仅适用于活性炭处理路线
- 流属性/单位：Mass / kg
- 数量规则：实称废活性炭
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 精制中间果汁
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_finishing_records`
- 来源：`eu-jrc-fdm-bref-2019`

###### 废硅藻土（`finishing_spent_diatomaceous_earth`）

按所述适用条件单独记录该原子交换。

- 选定流：废硅藻土
- 适用条件：仅适用于硅藻土过滤路线
- 流属性/单位：Mass / kg
- 数量规则：实称废硅藻土和截留固形物
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 精制中间果汁
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_finishing_records`
- 来源：`eu-jrc-fdm-bref-2019`

###### 废珍珠岩（`finishing_spent_perlite`）

按所述适用条件单独记录该原子交换。

- 选定流：废珍珠岩
- 适用条件：仅适用于珍珠岩过滤路线
- 流属性/单位：Mass / kg
- 数量规则：实称废珍珠岩和截留固形物
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 精制中间果汁
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_finishing_records`
- 来源：`eu-jrc-fdm-bref-2019`

###### 废滤布（`finishing_spent_filter_cloth`）

按所述适用条件单独记录该原子交换。

- 选定流：废滤布
- 适用条件：仅包含废弃的滤布介质
- 流属性/单位：Mass / kg
- 数量规则：实称废弃滤布
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 精制中间果汁
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_finishing_records`
- 来源：`eu-jrc-fdm-bref-2019`

###### 精制废水（`finishing_wastewater`）

按所述适用条件单独记录该原子交换。

- 选定流：苹果汁精制废水
- 适用条件：仅包含精制及其清洗周期的液态排放
- 流属性/单位：Mass / kg
- 数量规则：与用水和产品损失记录核对的计量排放
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 精制中间果汁
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_finishing_records`
- 来源：`eu-jrc-fdm-bref-2019`

##### 基本流

### 过程：果汁浓缩与香气处理（`juice_concentration`）

#### 输入

##### 产品流

###### 提供给浓缩过程的单倍浓度果汁（`concentration_juice_input`）

记录进入浓缩过程的苹果汁质量和可溶性固形物，并将内部转移或外购投入链接至其上游数据集。

- 选定流：单倍浓度苹果汁
- 适用条件：仅适用于浓缩路线；同一质量不得同时作为复原进料记录
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：具有实测可溶性固形物的实称或罐位核对进料
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 浓缩汁产出，并最终折算至每 1 kg 参考苹果汁
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_concentration_records`
- 来源：`codex-cxs-247-2005-2025`

###### 浓缩用低压电网电力（`concentration_grid_electricity_low_voltage`）

按所述适用条件单独记录该原子交换。

- 选定流：低压电网电力
- 适用条件：仅适用于低压电网供给；同一计量时段与中压供给互斥
- 流属性/单位：Energy / kWh
- 数量规则：分配至低压供给的浓缩计量电量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 浓缩汁产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_concentration_records`
- 来源：`eu-jrc-fdm-bref-2019`

###### 浓缩用中压电网电力（`concentration_grid_electricity_medium_voltage`）

按所述适用条件单独记录该原子交换。

- 选定流：中压电网电力
- 适用条件：仅适用于中压电网供给；同一计量时段与低压供给互斥
- 流属性/单位：Energy / kWh
- 数量规则：分配至中压供给的浓缩计量电量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 浓缩汁产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_concentration_records`
- 来源：`eu-jrc-fdm-bref-2019`

###### 浓缩用蒸汽（`concentration_steam`）

按所述适用条件单独记录该原子交换。

- 选定流：Steam `293f9fd9-5182-4d35-8aa5-ce73d4f322b7`
- 适用条件：仅适用于外购蒸汽蒸发路线；同一热负荷与热水或燃料互斥
- 流属性/单位：Mass / kg
- 数量规则：供应蒸发器的计量蒸汽
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 浓缩汁产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_concentration_records`
- 来源：`fao-fruit-juice-processing-2001`

###### 浓缩用热水（`concentration_hot_water`）

按所述适用条件单独记录该原子交换。

- 选定流：工业热水
- 适用条件：仅适用于热水加热浓缩路线；同一热负荷与蒸汽互斥
- 流属性/单位：Energy / MJ
- 数量规则：计量交付热水热量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 浓缩汁产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_concentration_records`
- 来源：`eu-jrc-fdm-bref-2019`

###### 浓缩用天然气（`concentration_natural_gas`）

按所述适用条件单独记录该原子交换。

- 选定流：Natural gas `4bfd1abb-9106-495a-a291-ce410f205691`
- 适用条件：仅适用于场内天然气供热；每笔燃烧记录与柴油、燃料油和液化石油气互斥
- 流属性/单位：Gross calorific value / MJ
- 数量规则：可归属于浓缩的计量天然气能量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 浓缩汁产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_concentration_records`
- 来源：`eu-jrc-fdm-bref-2019`

###### 浓缩用柴油（`concentration_diesel_oil`）

按所述适用条件单独记录该原子交换。

- 选定流：Diesel oil `9d258d75-6792-4f1c-9856-81602ed8f816`
- 适用条件：仅适用于场内柴油供热；每笔燃烧记录与天然气、燃料油和液化石油气互斥
- 流属性/单位：Mass / kg
- 数量规则：可归属于浓缩的实称或经发票核对柴油量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 浓缩汁产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_concentration_records`
- 来源：`eu-jrc-fdm-bref-2019`

###### 浓缩用燃料油（`concentration_fuel_oil`）

按所述适用条件单独记录该原子交换。

- 选定流：重质燃料油
- 适用条件：仅适用于场内重质燃料油供热；每笔燃烧记录与天然气、柴油和液化石油气互斥
- 流属性/单位：Mass / kg
- 数量规则：可归属于浓缩的实称或经发票核对重质燃料油量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 浓缩汁产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_concentration_records`
- 来源：`eu-jrc-fdm-bref-2019`

###### 浓缩用液化石油气（`concentration_lpg`）

按所述适用条件单独记录该原子交换。

- 选定流：Liquefied petroleum gas `3786072f-d3ce-4941-9249-ed5d346b21a6`
- 适用条件：仅适用于场内液化石油气供热；每笔燃烧记录与天然气、柴油和燃料油互斥
- 流属性/单位：Mass / kg
- 数量规则：可归属于浓缩的实称或经发票核对液化石油气量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 浓缩汁产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_concentration_records`
- 来源：`eu-jrc-fdm-bref-2019`

###### 浓缩用压缩空气（`concentration_compressed_air`）

按所述适用条件单独记录该原子交换。

- 选定流：Compressed air `46e2b1e4-5a4e-4579-b6a2-65b03f9ce825`
- 适用条件：仅适用于气动或真空控制设备
- 流属性/单位：Volume / m3
- 数量规则：可归属于浓缩的计量压缩空气
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 浓缩汁产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_concentration_records`
- 来源：`eu-jrc-fdm-bref-2019`

###### 浓缩冷却水（`concentration_cooling_water`）

按所述适用条件单独记录该原子交换。

- 选定流：工业冷却水
- 适用条件：仅适用于直流或闭路冷却补水；两种系统在源记录中分别核算
- 流属性/单位：Mass / kg
- 数量规则：可归属于浓缩的计量冷却补水
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 浓缩汁产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_concentration_records`
- 来源：`eu-jrc-fdm-bref-2019`

###### 浓缩清洗水（`concentration_cleaning_water`）

按所述适用条件单独记录该原子交换。

- 选定流：Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- 适用条件：仅适用于蒸发器和香气系统清洗水投入
- 流属性/单位：Mass / kg
- 数量规则：可归属于浓缩批次的计量清洗水
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 浓缩汁产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_concentration_records`
- 来源：`eu-jrc-fdm-bref-2019`

###### 浓缩氢氧化钠清洗剂（`concentration_sodium_hydroxide`）

按所述适用条件单独记录该原子交换。

- 选定流：Sodium hydroxide `e0abcced-0611-4c24-9290-5a2c5a0c4169`
- 适用条件：仅适用于碱性就地清洗步骤；每笔化学品投加与硝酸互斥
- 流属性/单位：Mass / kg
- 数量规则：实称或经投加系统核对的氢氧化钠投入
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 浓缩汁产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_concentration_records`
- 来源：`eu-jrc-fdm-bref-2019`

###### 浓缩硝酸清洗剂（`concentration_nitric_acid`）

按所述适用条件单独记录该原子交换。

- 选定流：50% 硝酸水溶液
- 适用条件：仅适用于酸性就地清洗步骤；每笔化学品投加与氢氧化钠互斥
- 流属性/单位：Mass / kg
- 数量规则：实称或经投加系统核对的硝酸溶液投入
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 浓缩汁产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_concentration_records`
- 来源：`eu-jrc-fdm-bref-2019`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 苹果浓缩汁中间品（`apple_juice_concentrate`）

计量浓缩汁质量和可溶性固形物。在本 PCR 下它是内部或外购投入类别中间品；浓缩汁作为浓缩汁销售时，不属于本 PCR 的参考产出。

- 选定流：苹果浓缩汁
- 适用条件：仅适用于浓缩路线；该中间品不是本 PCR 的参考产出
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：具有实测可溶性固形物的实称浓缩汁产出
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 浓缩汁产出，并最终折算至每 1 kg 参考苹果汁
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_concentration_records`
- 来源：`codex-cxs-247-2005-2025`

###### 回收苹果香气（`recovered_apple_aroma`）

按所述适用条件单独记录该原子交换。

- 选定流：回收苹果香气
- 适用条件：仅适用于具有记录复用或销售去向的香气回收路线
- 流属性/单位：Mass / kg
- 数量规则：计量或通过质量平衡计算的回收香气
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 浓缩汁产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_concentration_records`
- 来源：`fao-fruit-juice-processing-2001`

###### 可复用蒸发冷凝液（`reusable_evaporator_condensate`）

按所述适用条件单独记录该原子交换。

- 选定流：可复用苹果汁蒸发冷凝液
- 适用条件：仅适用于具有记录内部用途或外部产品去向的冷凝液
- 流属性/单位：Mass / kg
- 数量规则：转移至记录用途的计量冷凝液
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 浓缩汁产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_concentration_records`
- 来源：`fao-fruit-juice-processing-2001`

##### 废物流

###### 浓缩废水（`concentration_wastewater`）

按实际处理去向记录废弃冷凝液、清洗废水、不合格浓缩汁和其他损失。

- 选定流：苹果汁浓缩废水
- 适用条件：仅包含浓缩和香气处理的水相排放
- 流属性/单位：Mass / kg
- 数量规则：浓缩过程的计量排放
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 浓缩汁产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_concentration_records`
- 来源：`eu-jrc-fdm-bref-2019`

###### 不合格苹果浓缩汁（`concentration_offspec_concentrate`）

按所述适用条件单独记录该原子交换。

- 选定流：不合格苹果浓缩汁
- 适用条件：仅包含从产品路径拒收的浓缩汁
- 流属性/单位：Mass / kg
- 数量规则：按去向实称的不合格浓缩汁
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 浓缩汁产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_concentration_records`
- 来源：`eu-jrc-fdm-bref-2019`

###### 废碱性清洗液（`concentration_waste_alkaline_liquor`）

按所述适用条件单独记录该原子交换。

- 选定流：Waste Alkaline Liquor `ce738ef0-a711-4650-a38b-34479efd7559`
- 适用条件：仅包含废氢氧化钠清洗液
- 流属性/单位：Mass / kg
- 数量规则：计量或经罐体核对的废碱液
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 浓缩汁产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_concentration_records`
- 来源：`eu-jrc-fdm-bref-2019`

###### 废酸性清洗液（`concentration_waste_acid_liquor`）

按所述适用条件单独记录该原子交换。

- 选定流：Waste Acid `5fc1e55d-c7b8-4e60-b514-f0bfdd99eea9`
- 适用条件：仅包含废硝酸清洗液
- 流属性/单位：Mass / kg
- 数量规则：计量或经罐体核对的废酸液
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 浓缩汁产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_concentration_records`
- 来源：`eu-jrc-fdm-bref-2019`

##### 基本流

### 过程：复原与配制（`juice_reconstitution`）

#### 输入

##### 产品流

###### 提供给复原过程的苹果浓缩汁（`concentrate_input`）

记录每个浓缩汁批次的质量、实测可溶性固形物、来源和上游数据集。若无固形物平衡，不得将浓缩汁建模为单倍浓度苹果汁。

- 选定流：苹果浓缩汁
- 适用条件：仅适用于浓缩还原路线；与单倍浓度果汁作为复原起始投入的路线互斥
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：按批次实称的浓缩汁投入
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 复原苹果汁产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_reconstitution_records`
- 来源：`codex-cxs-247-2005-2025`

###### 复原饮用水（`reconstitution_potable_water`）

按所述适用条件单独记录该原子交换。

- 选定流：Tap water `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- 适用条件：仅适用于浓缩还原路线；不含设备清洗水
- 流属性/单位：Mass / kg
- 数量规则：按批次计量的配制水
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 复原苹果汁产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_reconstitution_records`
- 来源：`codex-cxs-247-2005-2025`

###### 恢复苹果香气（`reconstitution_apple_aroma`）

按所述适用条件单独记录该原子交换。

- 选定流：恢复苹果香气
- 适用条件：仅适用于具有记录香气恢复的浓缩还原路线
- 流属性/单位：Mass / kg
- 数量规则：按批次实称或经投加系统核对的香气添加量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 复原苹果汁产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_reconstitution_records`
- 来源：`codex-cxs-247-2005-2025`

###### 恢复苹果果肉（`reconstitution_apple_pulp`）

按所述适用条件单独记录该原子交换。

- 选定流：苹果果肉
- 适用条件：仅适用于果肉恢复路线；未恢复果肉的清汁不适用
- 流属性/单位：Mass / kg
- 数量规则：按批次实称苹果果肉添加量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 复原苹果汁产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_reconstitution_records`
- 来源：`codex-cxs-247-2005-2025`

###### 抗坏血酸配料（`reconstitution_ascorbic_acid`）

按所述适用条件单独记录该原子交换。

- 选定流：抗坏血酸
- 适用条件：仅适用于允许且实际投加抗坏血酸的配方路线
- 流属性/单位：Mass / kg
- 数量规则：按批次实称抗坏血酸添加量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 复原苹果汁产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_reconstitution_records`
- 来源：`codex-cxs-247-2005-2025`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 复原苹果汁（`reconstituted_apple_juice`）

根据采集的质量和可溶性固形物测量结果计算并验证产出；保留适用真实性和市场规范符合性证据。

- 选定流：复原苹果汁
- 适用条件：仅适用于浓缩还原路线；批次须通过可溶性固形物平衡后才可转移
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：通过配料质量和可溶性固形物平衡验证的批次产出质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 复原苹果汁产出
- 基准类型：过程输出（`process_output`）
- 证据类型：根据采集计算（`calculated_from_collection`）
- 采集协议：`cp_reconstitution_records`
- 来源：`codex-cxs-247-2005-2025`

##### 废物流

###### 溢洒复原苹果汁（`reconstitution_spilled_juice`）

按所述适用条件单独记录该原子交换。

- 选定流：溢洒复原苹果汁
- 适用条件：仅适用于离开产品路径的实测溢洒
- 流属性/单位：Mass / kg
- 数量规则：与批次平衡核对的溢洒质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 复原苹果汁产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_reconstitution_records`
- 来源：`eu-jrc-fdm-bref-2019`

###### 不合格复原苹果汁（`reconstitution_offspec_juice`）

按所述适用条件单独记录该原子交换。

- 选定流：不合格复原苹果汁
- 适用条件：仅包含离开产品路径的拒收复原批次
- 流属性/单位：Mass / kg
- 数量规则：按去向实称的拒收批次质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 复原苹果汁产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_reconstitution_records`
- 来源：`eu-jrc-fdm-bref-2019`

###### 复原清洗废水（`reconstitution_wastewater`）

按所述适用条件单独记录该原子交换。

- 选定流：苹果汁复原废水
- 适用条件：仅包含复原罐体和管线清洗排放
- 流属性/单位：Mass / kg
- 数量规则：与用水和产品损失记录核对的计量排放
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 复原苹果汁产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_reconstitution_records`
- 来源：`eu-jrc-fdm-bref-2019`

##### 基本流

### 过程：保藏、灌装与发运（`preservation_packaging_dispatch`）

#### 输入

##### 产品流

###### 提供给最终处理的苹果汁（`finalisation_juice_input`）

记录进入保藏和发运的实际直接榨取、精制或复原果汁，包括路线和质量限定信息。

- 选定流：提供给最终处理的苹果汁
- 适用条件：每笔转移只声明一种来源：直接榨取、精制中间、复原或外购苹果汁
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：实称或罐位核对的果汁投入
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 参考苹果汁产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_finalisation_records`
- 来源：`codex-cxc-50-2003`

###### 最终处理用低压电网电力（`finalisation_grid_electricity_low_voltage`）

按所述适用条件单独记录该原子交换。

- 选定流：低压电网电力
- 适用条件：仅适用于低压电网供给；同一计量时段与中压供给互斥
- 流属性/单位：Energy / kWh
- 数量规则：分配至低压电网供给的最终处理计量电量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 参考苹果汁产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_finalisation_records`
- 来源：`eu-jrc-fdm-bref-2019`

###### 最终处理用中压电网电力（`finalisation_grid_electricity_medium_voltage`）

按所述适用条件单独记录该原子交换。

- 选定流：中压电网电力
- 适用条件：仅适用于中压电网供给；同一计量时段与低压供给互斥
- 流属性/单位：Energy / kWh
- 数量规则：分配至中压电网供给的最终处理计量电量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 参考苹果汁产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_finalisation_records`
- 来源：`eu-jrc-fdm-bref-2019`

###### 最终处理用场内光伏电力（`finalisation_photovoltaic_electricity`）

按所述适用条件单独记录该原子交换。

- 选定流：场内光伏电力
- 适用条件：仅适用于表后光伏供给；电网购入和上网电量分别记录
- 流属性/单位：Energy / kWh
- 数量规则：最终处理消耗的计量光伏电量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 参考苹果汁产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_finalisation_records`
- 来源：`eu-jrc-fdm-bref-2019`

###### 最终处理用场内热电联产电力（`finalisation_cogeneration_electricity`）

按所述适用条件单独记录该原子交换。

- 选定流：场内热电联产电力
- 适用条件：仅适用于表后热电联产供给；电网电力分别记录
- 流属性/单位：Energy / kWh
- 数量规则：最终处理消耗的计量热电联产电量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 参考苹果汁产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_finalisation_records`
- 来源：`eu-jrc-fdm-bref-2019`

###### 最终处理用蒸汽（`finalisation_steam`）

按所述适用条件单独记录该原子交换。

- 选定流：Steam `293f9fd9-5182-4d35-8aa5-ce73d4f322b7`
- 适用条件：仅适用于外购蒸汽保藏路线；同一热负荷与热水或燃料互斥
- 流属性/单位：Mass / kg
- 数量规则：保藏和灌装使用的计量蒸汽
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 参考苹果汁产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_finalisation_records`
- 来源：`us-fda-juice-haccp-21-cfr-120-24`

###### 最终处理用热水（`finalisation_hot_water`）

按所述适用条件单独记录该原子交换。

- 选定流：工业热水
- 适用条件：仅适用于热水加热保藏路线；同一热负荷与蒸汽互斥
- 流属性/单位：Energy / MJ
- 数量规则：保藏和灌装使用的计量热水热量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 参考苹果汁产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_finalisation_records`
- 来源：`us-fda-juice-haccp-21-cfr-120-24`

###### 最终处理用天然气（`finalisation_natural_gas`）

按所述适用条件单独记录该原子交换。

- 选定流：Natural gas `4bfd1abb-9106-495a-a291-ce410f205691`
- 适用条件：仅适用于场内天然气供热；每笔燃烧记录与柴油、燃料油和液化石油气互斥
- 流属性/单位：Gross calorific value / MJ
- 数量规则：可归属于最终处理的计量天然气能量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 参考苹果汁产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_finalisation_records`
- 来源：`eu-jrc-fdm-bref-2019`

###### 最终处理用柴油（`finalisation_diesel_oil`）

按所述适用条件单独记录该原子交换。

- 选定流：Diesel oil `9d258d75-6792-4f1c-9856-81602ed8f816`
- 适用条件：仅适用于场内柴油供热；每笔燃烧记录与天然气、燃料油和液化石油气互斥
- 流属性/单位：Mass / kg
- 数量规则：可归属于最终处理的实称或经发票核对柴油量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 参考苹果汁产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_finalisation_records`
- 来源：`eu-jrc-fdm-bref-2019`

###### 最终处理用燃料油（`finalisation_fuel_oil`）

按所述适用条件单独记录该原子交换。

- 选定流：重质燃料油
- 适用条件：仅适用于场内重质燃料油供热；每笔燃烧记录与天然气、柴油和液化石油气互斥
- 流属性/单位：Mass / kg
- 数量规则：可归属于最终处理的实称或经发票核对重质燃料油量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 参考苹果汁产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_finalisation_records`
- 来源：`eu-jrc-fdm-bref-2019`

###### 最终处理用液化石油气（`finalisation_lpg`）

按所述适用条件单独记录该原子交换。

- 选定流：Liquefied petroleum gas `3786072f-d3ce-4941-9249-ed5d346b21a6`
- 适用条件：仅适用于场内液化石油气供热；每笔燃烧记录与天然气、柴油和燃料油互斥
- 流属性/单位：Mass / kg
- 数量规则：可归属于最终处理的实称或经发票核对液化石油气量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 参考苹果汁产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_finalisation_records`
- 来源：`eu-jrc-fdm-bref-2019`

###### 最终处理用压缩空气（`finalisation_compressed_air`）

按所述适用条件单独记录该原子交换。

- 选定流：Compressed air `46e2b1e4-5a4e-4579-b6a2-65b03f9ce825`
- 适用条件：仅适用于气动保藏、灌装或发运设备
- 流属性/单位：Volume / m3
- 数量规则：可归属于最终处理的计量压缩空气
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 参考苹果汁产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_finalisation_records`
- 来源：`eu-jrc-fdm-bref-2019`

###### 灌装用气态氮（`finalisation_gaseous_nitrogen`）

按所述适用条件单独记录该原子交换。

- 选定流：气态氮
- 适用条件：仅适用于氮封灌装路线；每笔氮气供给记录与液氮互斥
- 流属性/单位：Mass / kg
- 数量规则：灌装使用的计量气态氮
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 参考苹果汁产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_finalisation_records`
- 来源：`eu-jrc-fdm-bref-2019`

###### 灌装用液氮（`finalisation_liquid_nitrogen`）

按所述适用条件单独记录该原子交换。

- 选定流：Liquid Nitrogen `dd17be27-229a-4236-ae93-29835cf7e1a8`
- 适用条件：仅适用于液氮投加路线；每笔氮气供给记录与气态氮互斥
- 流属性/单位：Mass / kg
- 数量规则：灌装使用的实称液氮
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 参考苹果汁产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_finalisation_records`
- 来源：`eu-jrc-fdm-bref-2019`

###### R134a 制冷剂补充（`finalisation_refrigerant_r134a`）

按所述适用条件单独记录该原子交换。

- 选定流：R134a 制冷剂
- 适用条件：仅适用于 R134a 制冷设备；每个设备回路与 R404A、R717 和 R744 互斥
- 流属性/单位：Mass / kg
- 数量规则：维修记录中的补充质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 参考苹果汁产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_finalisation_records`
- 来源：`eu-jrc-fdm-bref-2019`

###### R404A 制冷剂补充（`finalisation_refrigerant_r404a`）

按所述适用条件单独记录该原子交换。

- 选定流：Refrigerant R404A `76513c71-a148-484e-865f-2ab54afb4331`
- 适用条件：仅适用于 R404A 制冷设备；每个设备回路与 R134a、R717 和 R744 互斥
- 流属性/单位：Mass / kg
- 数量规则：维修记录中的补充质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 参考苹果汁产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_finalisation_records`
- 来源：`eu-jrc-fdm-bref-2019`

###### R717 氨制冷剂补充（`finalisation_refrigerant_r717`）

按所述适用条件单独记录该原子交换。

- 选定流：制冷级氨 R717
- 适用条件：仅适用于 R717 制冷设备；每个设备回路与 R134a、R404A 和 R744 互斥
- 流属性/单位：Mass / kg
- 数量规则：维修记录中的补充质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 参考苹果汁产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_finalisation_records`
- 来源：`eu-jrc-fdm-bref-2019`

###### R744 二氧化碳制冷剂补充（`finalisation_refrigerant_r744`）

按所述适用条件单独记录该原子交换。

- 选定流：制冷级二氧化碳 R744
- 适用条件：仅适用于 R744 制冷设备；每个设备回路与 R134a、R404A 和 R717 互斥
- 流属性/单位：Mass / kg
- 数量规则：维修记录中的补充质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 参考苹果汁产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_finalisation_records`
- 来源：`eu-jrc-fdm-bref-2019`

###### 玻璃瓶（`packaging_glass_bottle`）

按所述适用条件单独记录该原子交换。

- 选定流：饮料玻璃瓶
- 适用条件：仅适用于玻璃瓶形式；同一灌装果汁与 PET 瓶、无菌纸盒、盒中袋、钢桶和 IBC 形式互斥
- 流属性/单位：Mass / kg
- 数量规则：经库存变化和废品调整的玻璃瓶领用质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 参考苹果汁产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_finalisation_records`
- 来源：`fao-fruit-juice-processing-2001`

###### PET 瓶（`packaging_pet_bottle`）

按所述适用条件单独记录该原子交换。

- 选定流：PET 饮料瓶
- 适用条件：仅适用于 PET 瓶形式；同一灌装果汁与玻璃瓶、无菌纸盒、盒中袋、钢桶和 IBC 形式互斥
- 流属性/单位：Mass / kg
- 数量规则：经库存变化和废品调整的 PET 瓶领用质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 参考苹果汁产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_finalisation_records`
- 来源：`fao-fruit-juice-processing-2001`

###### 无菌饮料纸盒（`packaging_aseptic_carton`）

按所述适用条件单独记录该原子交换。

- 选定流：无菌饮料纸盒
- 适用条件：仅适用于无菌纸盒形式；同一灌装果汁与瓶、盒中袋、钢桶和 IBC 形式互斥
- 流属性/单位：Mass / kg
- 数量规则：经库存变化和废品调整的无菌纸盒领用质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 参考苹果汁产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_finalisation_records`
- 来源：`fao-fruit-juice-processing-2001`

###### 盒中袋内袋（`packaging_bag_in_box_liner`）

按所述适用条件单独记录该原子交换。

- 选定流：聚乙烯盒中袋内袋
- 适用条件：仅适用于盒中袋形式；瓦楞外箱单独记录
- 流属性/单位：Mass / kg
- 数量规则：经库存变化和废品调整的内袋领用质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 参考苹果汁产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_finalisation_records`
- 来源：`fao-fruit-juice-processing-2001`

###### 钢桶（`packaging_steel_drum`）

按所述适用条件单独记录该原子交换。

- 选定流：食品级钢桶
- 适用条件：仅适用于钢桶散装形式；复用次数单独披露
- 流属性/单位：Mass / kg
- 数量规则：按记录复用次数分摊并经废品调整的钢桶质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 参考苹果汁产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集计算（`calculated_from_collection`）
- 采集协议：`cp_finalisation_records`
- 来源：`fao-fruit-juice-processing-2001`

###### 可复用 IBC（`packaging_reusable_ibc`）

按所述适用条件单独记录该原子交换。

- 选定流：可复用食品级中型散装容器
- 适用条件：仅适用于 IBC 散装形式；复用次数单独披露
- 流属性/单位：Mass / kg
- 数量规则：按记录复用次数分摊并经废品调整的 IBC 质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 参考苹果汁产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集计算（`calculated_from_collection`）
- 采集协议：`cp_finalisation_records`
- 来源：`fao-fruit-juice-processing-2001`

###### 塑料封口盖（`packaging_plastic_cap`）

按所述适用条件单独记录该原子交换。

- 选定流：Plastic packaging closure cap `bab04179-3799-4eff-b12b-edaec382520c`
- 适用条件：仅适用于塑料封口；同一容器与铝旋盖互斥
- 流属性/单位：Mass / kg
- 数量规则：经库存变化和废品调整的瓶盖领用质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 参考苹果汁产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_finalisation_records`
- 来源：`fao-fruit-juice-processing-2001`

###### 铝旋盖（`packaging_aluminium_cap`）

按所述适用条件单独记录该原子交换。

- 选定流：Aluminium screw cap closure `c37f87ea-0b43-43d6-a300-b142ea358cb7`
- 适用条件：仅适用于铝封口；同一容器与塑料瓶盖互斥
- 流属性/单位：Mass / kg
- 数量规则：经库存变化和废品调整的瓶盖领用质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 参考苹果汁产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_finalisation_records`
- 来源：`fao-fruit-juice-processing-2001`

###### 纸质包装标签（`packaging_paper_label`）

按所述适用条件单独记录该原子交换。

- 选定流：Packaging label, paper `d5890643-6859-42b5-9e05-556b072c6a8c`
- 适用条件：仅适用于纸质标签；不含直接印刷和塑料标签
- 流属性/单位：Mass / kg
- 数量规则：经库存变化和废品调整的标签领用质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 参考苹果汁产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_finalisation_records`
- 来源：`fao-fruit-juice-processing-2001`

###### 瓦楞纸板箱（`packaging_corrugated_case`）

按所述适用条件单独记录该原子交换。

- 选定流：Corrugated cardboard `8bde297e-98df-463f-bcb4-0db52bf6e0b5`
- 适用条件：仅适用于瓦楞二次包装箱或盒中袋外箱
- 流属性/单位：Mass / kg
- 数量规则：经库存变化和废品调整的瓦楞纸板领用质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 参考苹果汁产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_finalisation_records`
- 来源：`fao-fruit-juice-processing-2001`

###### 聚乙烯收缩膜（`packaging_shrink_film`）

按所述适用条件单独记录该原子交换。

- 选定流：Plastic film `b01e4bd9-5ada-4676-8a90-be5f167c00fc`
- 适用条件：仅适用于收缩膜二次包装；拉伸膜另行记录
- 流属性/单位：Mass / kg
- 数量规则：经库存变化和废品调整的收缩膜领用质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 参考苹果汁产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_finalisation_records`
- 来源：`fao-fruit-juice-processing-2001`

###### 木托盘（`packaging_wooden_pallet`）

按所述适用条件单独记录该原子交换。

- 选定流：Wooden pallet (EURO) `96b2b9ac-cfb6-46bf-8ad1-c056e338950a`
- 适用条件：仅适用于托盘化发运；托盘质量按记录复用次数分摊
- 流属性/单位：Mass / kg
- 数量规则：按记录复用次数和已放行产品质量分摊的托盘质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 参考苹果汁产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集计算（`calculated_from_collection`）
- 采集协议：`cp_finalisation_records`
- 来源：`fao-fruit-juice-processing-2001`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 已放行苹果汁参考产品（`apple_juice_output`）

仅记录通过所声明质量和放行标准的产品。类别流具有代表性；当更具体公开流匹配实际产品状态时应替换，并保留全部必需限定信息。

- 选定流：Apple juice `3db6b381-99a9-4976-8955-aa9b65903844`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：制造厂门口 1 kg 净的按现状质量计已放行苹果汁
- 数值来源模式：固定值（`fixed_value`）
- 适用范围：通用（`generic`）
- 归一化基准：1 kg 参考苹果汁产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：身份引用（`identity_reference`）
- 来源：`codex-cxs-247-2005-2025`

##### 废物流

###### 不合格苹果汁（`finalisation_offspec_juice`）

按所述适用条件单独记录该原子交换。

- 选定流：不合格苹果汁
- 适用条件：仅包含拒绝放行且离开产品路径的果汁；不含内部返工
- 流属性/单位：Mass / kg
- 数量规则：按去向实称的拒收果汁
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考苹果汁产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_finalisation_records`
- 来源：`codex-cxc-50-2003`

###### 拒收玻璃瓶（`finalisation_waste_glass_bottles`）

按所述适用条件单独记录该原子交换。

- 选定流：拒收饮料玻璃瓶
- 适用条件：仅包含玻璃瓶产线废品
- 流属性/单位：Mass / kg
- 数量规则：按去向实称的拒收玻璃瓶
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考苹果汁产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_finalisation_records`
- 来源：`codex-cxc-50-2003`

###### 拒收 PET 瓶（`finalisation_waste_pet_bottles`）

按所述适用条件单独记录该原子交换。

- 选定流：Waste PET bottles `8874aca6-2ff9-4aef-be62-5cd02f20dc97`
- 适用条件：仅包含 PET 瓶产线废品
- 流属性/单位：Mass / kg
- 数量规则：按去向实称的拒收 PET 瓶
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考苹果汁产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_finalisation_records`
- 来源：`codex-cxc-50-2003`

###### 拒收无菌纸盒（`finalisation_waste_aseptic_cartons`）

按所述适用条件单独记录该原子交换。

- 选定流：拒收无菌饮料纸盒
- 适用条件：仅包含无菌纸盒产线废品
- 流属性/单位：Mass / kg
- 数量规则：按去向实称的拒收无菌纸盒
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考苹果汁产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_finalisation_records`
- 来源：`codex-cxc-50-2003`

###### 拒收塑料封口和薄膜（`finalisation_waste_plastic_packaging`）

按所述适用条件单独记录该原子交换。

- 选定流：拒收聚乙烯包装
- 适用条件：仅包含聚乙烯封口、内袋、收缩膜或边角料；PET 瓶另列
- 流属性/单位：Mass / kg
- 数量规则：按去向实称的拒收聚乙烯包装
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考苹果汁产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_finalisation_records`
- 来源：`codex-cxc-50-2003`

###### 拒收铝旋盖（`finalisation_waste_aluminium_caps`）

按所述适用条件单独记录该原子交换。

- 选定流：拒收铝旋盖
- 适用条件：仅包含铝封口废品
- 流属性/单位：Mass / kg
- 数量规则：按去向实称的拒收铝旋盖
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考苹果汁产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_finalisation_records`
- 来源：`codex-cxc-50-2003`

###### 拒收纸和纸板包装（`finalisation_waste_paper_cardboard`）

按所述适用条件单独记录该原子交换。

- 选定流：Paper and cardboard packaging waste `a318022d-c960-4eb5-a81c-04a9c4dda7e4`
- 适用条件：仅包含纸标签、瓦楞箱和纸板边角或废品
- 流属性/单位：Mass / kg
- 数量规则：按去向实称的纸和纸板包装废物
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考苹果汁产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_finalisation_records`
- 来源：`codex-cxc-50-2003`

###### 拒收木托盘（`finalisation_waste_wooden_pallets`）

按所述适用条件单独记录该原子交换。

- 选定流：拒收木托盘
- 适用条件：仅包含纳入发运操作中退出使用的托盘
- 流属性/单位：Mass / kg
- 数量规则：按去向实称的拒收托盘质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考苹果汁产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_finalisation_records`
- 来源：`codex-cxc-50-2003`

###### 最终处理清洗废水（`finalisation_wastewater`）

记录就地清洗和灌装线废水、排入下水的产品损失以及排放或处理去向。

- 选定流：苹果汁最终处理废水
- 适用条件：仅包含就地清洗和灌装线排水
- 流属性/单位：Volume / m3 或 Mass / kg，保留实测属性和换算基准
- 数量规则：最终处理操作的计量排放或有记录的水平衡
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考苹果汁产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_finalisation_records`
- 来源：`eu-jrc-fdm-bref-2019`

##### 基本流

###### HFC-134a 向空气排放（`emission_hfc_134a_to_air`）

按所述适用条件单独记录该原子交换。

- 选定流：HFC-134a 向空气排放，未指定子介质 `fe0acd60-3ddc-11dd-a6d2-0050c2490048`
- 适用条件：仅适用于 R134a 设备泄漏或 R404A 泄漏中有记录的 HFC-134a 份额
- 流属性/单位：Mass / kg
- 数量规则：充注损失乘以有记录的制冷剂质量分数
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考苹果汁产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集计算（`calculated_from_collection`）
- 采集协议：`cp_finalisation_records`
- 来源：`eu-jrc-fdm-bref-2019`

###### HFC-125 向空气排放（`emission_hfc_125_to_air`）

按所述适用条件单独记录该原子交换。

- 选定流：HFC-125 向空气排放，未指定子介质 `2dc28f2f-a034-4644-aea9-3884c074f816`
- 适用条件：仅适用于 R404A 设备泄漏中有记录的 HFC-125 份额
- 流属性/单位：Mass / kg
- 数量规则：R404A 充注损失乘以有记录的 HFC-125 质量分数
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考苹果汁产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集计算（`calculated_from_collection`）
- 采集协议：`cp_finalisation_records`
- 来源：`eu-jrc-fdm-bref-2019`

###### HFC-143a 向空气排放（`emission_hfc_143a_to_air`）

按所述适用条件单独记录该原子交换。

- 选定流：1,1,1-三氟乙烷向空气排放，未指定子介质 `3e21a7fb-a101-4fc4-90c9-d2b6a9bcaff1`
- 适用条件：仅适用于 R404A 设备泄漏中有记录的 HFC-143a 份额
- 流属性/单位：Mass / kg
- 数量规则：R404A 充注损失乘以有记录的 HFC-143a 质量分数
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考苹果汁产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集计算（`calculated_from_collection`）
- 采集协议：`cp_finalisation_records`
- 来源：`eu-jrc-fdm-bref-2019`

###### 氨向空气排放（`emission_ammonia_to_air`）

按所述适用条件单独记录该原子交换。

- 选定流：氨向空气排放，未指定子介质 `b4b34336-1832-41e7-8ca5-f08e2517b036`
- 适用条件：仅适用于 R717 设备泄漏
- 流属性/单位：Mass / kg
- 数量规则：R717 充注平衡或维修损失计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考苹果汁产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集计算（`calculated_from_collection`）
- 采集协议：`cp_finalisation_records`
- 来源：`eu-jrc-fdm-bref-2019`

###### 二氧化碳向空气排放（`emission_r744_co2_to_air`）

按所述适用条件单独记录该原子交换。

- 选定流：R744 二氧化碳向空气排放
- 适用条件：仅适用于 R744 设备泄漏；不含燃烧二氧化碳
- 流属性/单位：Mass / kg
- 数量规则：R744 充注平衡或维修损失计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考苹果汁产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集计算（`calculated_from_collection`）
- 采集协议：`cp_finalisation_records`
- 来源：`eu-jrc-fdm-bref-2019`

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | 来源 |
| --- | --- | --- | --- |
| `allocation_separate_outputs` | 果渣、回收香气、可利用冷凝液及其他产出 | 分配前记录过程总投入和每项产出。只有具备产品状态、去向、数量和有益利用证据时，物流才是共产品；否则将其作为废物并带上处理路线建模。 | `iso-14044-2006`; `fao-fruit-juice-processing-2001` |
| `allocation_avoid_where_possible` | 多产出前景过程 | 优先细分计量操作，或应用反映资源因果使用的有记录物理关系。不得仅因共产品价值较低而赋予其零负担。 | `iso-14044-2006` |
| `allocation_fallback` | 无法细分或确定因果物理关系的多产出过程 | 使用同一门口的同期数量和价格进行经济分配；当分配具有实质影响时进行敏感性情景，并披露方法、期间、币种、价格来源和分配因子。 | `iso-14044-2006` |
| `allocation_internal_transfers` | 前景内转移的果汁、浓缩汁、回收香气和返工物 | 一致处理内部转移，其负担仅计一次。返回生产的返工物不是共产品，必须保留额外加工和损失负担。 | `iso-14044-2006` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_receiving_records` | `apple_receiving_preparation` | apples; water; cleaners; prepared apples; rejects; wastewater | 地磅、接收、投料、计量、质量和排放记录 | lot_id; supplier; received_mass_kg; accepted_mass_kg; rejected_mass_kg; water_m3; density; cleaner_mass_kg; wastewater_m3; destination; stock_change | 经校准秤和仪表，并与批次验收和发运记录核对 | kg; m3 | 每批或每批次，按月汇总 | 覆盖季节性苹果供应的代表性生产期 | 每条纳入的接收和准备线 | 汇总合格生产记录；共享清洗按实测运行时间或有记录驱动因素分摊；核对库存变化 | 校准、批次验收、发票、仪表、清洗和废物转移记录 |
| `cp_extraction_records` | `juice_extraction` | prepared apples; energy; aids; raw juice; pomace | 批次、称重、罐体、仪表、投料和残余物记录 | batch_id; apple_mass_kg; juice_mass_kg; juice_brix; pomace_mass_kg; pomace_moisture; electricity_kWh; steam_kg; aid_mass_kg; destination | 经校准秤、罐体测量、仪表和生产日志 | kg; kWh | 每批次或生产运行，按月汇总 | 覆盖运行模式的代表性生产期 | 每条纳入的破碎和压榨线 | 归一化前核对投入、产出、残余物、含水率、蒸发和库存变化 | 秤和仪表校准、批次日志、实验室结果和残余物发运记录 |
| `cp_finishing_records` | `juice_finishing` | juice input; processing aids; utilities; finished juice; residues; wastewater | 罐体、投料、仪表、实验室、滤材更换和排放记录 | batch_id; input_mass_kg; output_mass_kg; input_brix; output_brix; aid_mass_kg; energy; water_m3; residue_mass_kg; wastewater_m3; technology | 经校准罐体/称重测量、投料记录、仪表和质量检测 | kg; m3; kWh | 每批次或过滤周期，按月汇总 | 覆盖每条所声明精制路线的代表性生产期 | 每条纳入的精制线 | 清/浑技术分开；核对滤材滞留产品和清洗损失 | 校准、批次配方、过滤日志、实验室结果和废物记录 |
| `cp_concentration_records` | `juice_concentration` | juice feed; utilities; concentrate; recovered products; condensate and losses | 罐体、固形物、公用工程仪表、香气回收和排放记录 | campaign_id; feed_mass_kg; feed_brix; concentrate_mass_kg; concentrate_brix; steam; electricity; cooling; recovered_mass; condensate_m3; losses; stock_change | 经校准质量/罐体测量、可溶性固形物分析、公用工程仪表和回收日志 | kg; m3; kWh; degree Brix | 每个浓缩周期，按月汇总 | 覆盖蒸发器负荷和清洗周期的代表性期间 | 每套纳入的浓缩和香气回收线 | 应用总质量和可溶性固形物平衡；按去向分别保留有用回收物流 | 校准、实验室、公用工程、回收、清洗和排放记录 |
| `cp_reconstitution_records` | `juice_reconstitution` | concentrate; water; permitted ingredients; reconstituted juice; losses | 批次、配方、称重、投料、水表、罐体和实验室记录 | batch_id; concentrate_lot; concentrate_mass_kg; concentrate_brix; water_mass_kg; ingredient_mass_kg; output_mass_kg; output_brix; losses; market_specification | 经校准秤/仪表加经批准批次配方和实验室验证 | kg; degree Brix | 每批次 | 覆盖配方和供应商的代表性期间 | 每条纳入的复原线和配方 | 汇总前对每批闭合总质量和可溶性固形物平衡 | 校准、供应商证书、批准配方、实验室结果和偏差记录 |
| `cp_finalisation_records` | `preservation_packaging_dispatch` | juice input; energy; packaging; released juice; rejects; wastewater; refrigerant | 罐体/称重、热或非热控制、公用工程仪表、包装领用、放行、废物、清洗和维修记录 | batch_id; juice_input_kg; process_parameters; energy; packaging_item_mass; items_used; product_output_kg; held_or_rejected_kg; wastewater_m3; refrigerant_charge_and_makeup_kg; release_status | 经校准仪表和秤，并与产线、放行、仓库、废物和维修记录核对 | kg; m3; kWh; route-specific control unit | 每批次和包装运行，按月汇总 | 覆盖产品形式和运行模式的代表性期间 | 每套纳入的保藏、灌装、贮存和散装发运系统 | 仅纳入已放行产出；加权汇总前分开形式和路线 | 校准、经验证工艺记录、包装规范、质量放行、仓库、废物和维修证据 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | 所有前景清单行 | 归一化数量 = 同期可归属数量 / 同期已放行参考苹果汁 kg | 可归属流量；已放行苹果汁质量；库存变化；返工状态 | 每 1 kg 参考苹果汁的数量 | `iso-14044-2006` |
| `calc_process_mass_balance` | 每个纳入过程 | 质量平衡残差 = 总质量投入 - 产品产出 - 共产品产出 - 废物产出 - 实测废水组分或总体物流质量 - 蒸发 - 库存增加；调查并披露实质残差 | 过程投入/产出质量；含水率或固形物数据；蒸发；库存变化 | 经核对的过程质量平衡和残差 | `iso-14044-2006` |
| `calc_reconstitution_solids` | 复原果汁批次 | 干固形物代理平衡 = 各项（投入质量 x 实测可溶性固形物分数）之和，与产出质量 x 实测产出可溶性固形物分数比较；仅将其作为 QA 平衡，不作为 Brix 到干物质的通用换算 | 浓缩汁、水、配料和产出质量；实测可溶性固形物 | 批次固形物平衡检查和复原比例 | `codex-cxs-247-2005-2025` |
| `calc_packaging_mass` | 包装苹果汁 | 每 kg 果汁包装质量 = 各项（使用数量 x 经核实单件质量）之和 / 已放行果汁质量，并按废品和有记录重复使用周期调整 | 包装数量；单件质量；废品；重复使用周期；已放行果汁质量 | 每 1 kg 参考产品的包装清单 | `fao-fruit-juice-processing-2001` |
| `calc_allocation_factor` | 有证据的共产品 | 根据选定物理关系，或根据共同门口的同期产出数量 x 价格计算因子；一个过程的因子总和必须为一 | 产出数量；物理关系或价格；期间和币种 | 已披露分配因子，以及具有实质影响时的敏感性结果 | `iso-14044-2006` |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_product_identity` | 参考产品和同类别投入 | 保留产品名称、仅含苹果状态、路线、来源、清/浑状态、可溶性固形物、保藏、包装/散装状态、贮存条件和制造门口。 | 产品规范、标签、配方、供应商证书和实验室记录 |
| `dq_route_separation` | 汇总的前景数据 | 在完成路线特定清单之前，将直接榨取/NFC、浓缩还原、清/浑、浓缩、保藏和包装路线分开；仅按已放行产品质量加权并披露份额。 | 生产计划、批次路线、产线、配方和仓库记录 |
| `dq_temporal_representativeness` | 所有前景记录 | 使用覆盖季节性苹果供应、清洗周期、产品形式、开停机损失和正常运行波动的代表性连续期间；说明排除项理由。 | 有日期记录普查、覆盖声明和例外日志 |
| `dq_meter_and_conversion` | 实测和换算数量 | 保留校准状态、原始单位、液体换算的密度和温度、固形物或水分基准以及所用计算。 | 校准证书、原始仪表/称重记录、实验室结果和计算表 |
| `dq_mass_balance` | 每个纳入过程和整个前景 | 在一致期间内核对产品、共产品、残余物、废水、蒸发、返工和库存变化，并调查实质残差。 | 经签署质量平衡工作表和纠正措施记录 |
| `dq_coverage` | 清单完整性 | 纳入所有实质投入、公用工程、加工助剂、包装、产出、废物、废水和直接排放；零值条目必须有物流不存在的证据，而非仅仅未测量。 | 采购、仪表、配方、维修、废物、排放和放行记录交叉核对 |
| `dq_source_linkage` | 外购苹果、果汁、浓缩汁、配料、包装、能源和处理 | 链接时间和地域适当的上游或处理数据集，并披露任何代理或数据缺口。 | 供应商身份、数据集 UUID/引用、地域、年份和代理理由 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | 来源 |
| --- | --- | --- | --- |
| `validate_reference_identity` | 参考产品 | 若参考流不是苹果汁、归一化后的净按现状质量不是 1 kg，或产品质量中包含包装质量，则符合性失败。 | `codex-cxs-247-2005-2025` |
| `validate_required_qualifiers` | 参考流元数据 | 若缺少任何必需限定信息，包括路线、可溶性固形物、清/浑状态、保藏、包装/散装状态、贮存条件、地域、门口或货架期，则符合性失败。 | `codex-cxs-247-2005-2025`; `codex-cxc-50-2003` |
| `validate_route_processes` | 过程图和清单 | 若所声明路线使用的过程被遗漏、纳入过程没有相应投入和产出，或外购同类别投入缺少上游数据集，则符合性失败。 | `fao-fruit-juice-processing-2001`; `eu-jrc-fdm-bref-2019` |
| `validate_reconstitution` | 浓缩还原路线 | 若缺少浓缩汁质量、浓缩汁可溶性固形物、复原水、产出质量、产出可溶性固形物、适用市场规范或批次固形物平衡证据，则符合性失败。 | `codex-cxs-247-2005-2025` |
| `validate_apple_condition_control` | 整苹果路线 | 若缺少接收验收、分选/拒收、清洗和苹果状态记录，或拒收果被隐藏在收率调整中，则符合性失败。 | `codex-cxc-50-2003` |
| `validate_preservation_release` | 已放行苹果汁 | 若所声明保藏或食品安全控制缺少适用的验证、监控、偏差和产品放行证据，则符合性失败；不得根据过程名称推定符合。 | `us-fda-juice-haccp-21-cfr-120-24`; `codex-cxc-50-2003` |
| `validate_mass_balance` | 每个纳入过程和完整前景 | 若质量平衡期间不一致、内部转移重复计数、库存或返工遗漏，或未披露实质不明残差，则符合性失败。 | `iso-14044-2006` |
| `validate_coproduct_status` | 果渣和回收物流 | 若声称的共产品缺少数量、去向、有益利用证据和明确分配处理，或废物流被静默赋予零负担，则符合性失败。 | `iso-14044-2006` |
| `validate_uuid_selection` | Tiangong 链接流行 | 若 Apple juice、Mass 或 Units of mass UUID 与所声明参考对象不同，且没有经记录、语义更具体的替代及公开记录回读，则符合性失败。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 归一化到所声明制造厂门口 1 kg 净的按现状质量计苹果汁的前景苹果汁生产数据集 |
| downstream_use | `secondary_dataset`; 在审查代表性、上游链接、分配和不确定性披露后可作 `background_dataset` |
| allowed_use | 与所声明路线、地域、期间、产品规范、包装/散装状态和门口匹配的产品碳足迹或 LCA 模型；汇总时保留路线份额 |
| excluded_use | 苹果果肉饮料、苹果酒、醋、以浓缩汁作为销售参考产品、混合果汁饮料、无路线披露的通用全球苹果汁，或超出所声明门口的消费者使用和寿命终止 |
| required_metadata | PCR id 和版本语境；参考流 UUID；路线和起始条件；产品及市场限定信息；地域；技术；报告期；场址覆盖；包装/散装状态；过程清单；上游数据集引用；分配方法；审查状态 |
| required_quality_disclosure | 记录覆盖；仪表和换算质量；质量平衡残差；路线份额；季节覆盖；供应商和上游数据质量；代理；共产品处理；拒收/返工数量；废水和直接排放覆盖；不确定性和已知局限 |
| update_trigger | 起始条件、供应商或浓缩汁来源、配方或 Brix 规范、清/浑路线、提取/精制/浓缩/保藏技术、包装形式、能源或水系统、废物去向、分配基准、法规发生变化，或收率、公用工程出现实质变化 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `codex-cxs-247-2005-2025` | 标准（`standard`） | Codex Alimentarius CXS 247-2005, General Standard for Fruit Juices and Nectars, amended 2025, https://www.fao.org/fao-who-codexalimentarius/sh-proxy/tr/?lnk=1&url=https%253A%252F%252Fworkspace.fao.org%252Fsites%252Fcodex%252FStandards%252FCXS%2B247-2005%252FCXS_247e.pdf（检索于 2026-08-11） | 产品定义、直接榨取和浓缩还原范围、允许加工框架、真实性/质量披露以及苹果复原可溶性固形物规则 |
| `codex-cxc-50-2003` | 官方指南（`official_guidance`） | Codex Alimentarius CXC 50-2003, Code of Practice for the Prevention and Reduction of Patulin Contamination in Apple Juice and Apple Juice Ingredients in Other Beverages, https://www.fao.org/input/download/standards/405/CXP_050e.pdf（检索于 2026-08-11） | 苹果验收、分选、清洗、设备清洁、压榨、冷却、包装、采样、质量放行，以及热处理本身不能去除已存在棒曲霉素的边界警示 |
| `fao-fruit-juice-processing-2001` | 手册（`handbook`） | FAO Agricultural Services Bulletin 146, Principles and Practices of Small- and Medium-Scale Fruit Juice Processing, apple juice chapter, https://www.fao.org/4/y2515e/y2515e15.htm（检索于 2026-08-11） | 苹果汁过程分解、破碎与压榨、澄清、巴氏杀菌、浓缩、灌装、包装和果渣处理 |
| `eu-jrc-fdm-bref-2019` | 官方指南（`official_guidance`） | European Commission Joint Research Centre, Best Available Techniques Reference Document for the Food, Drink and Milk Industries, JRC118627, 2019, https://bureau-industrial-transformation.jrc.ec.europa.eu/sites/default/files/2020-01/JRC118627_FDM_Bref_2019_published.pdf（检索于 2026-08-11） | 食品加工前景覆盖、公用工程和清洗记录、资源效率、废水、废物和直接排放监测语境 |
| `us-fda-juice-haccp-21-cfr-120-24` | 标准（`standard`） | United States eCFR, 21 CFR 120.24, Process controls, https://www.ecfr.gov/current/title-21/chapter-I/subchapter-B/part-120/subpart-B/section-120.24（检索于 2026-08-11） | 适用的果汁病原体降低控制、同一设施加工/包装边界和验证/监控证据 |
| `iso-14044-2006` | 标准（`standard`） | ISO 14044:2006, Environmental management — Life cycle assessment — Requirements and guidelines, including Amendments 1:2017 and 2:2020, https://www.iso.org/standard/38498.html（检索于 2026-08-11） | LCI 边界一致性、清单完整性、分配记录、数据质量、解释和报告 |
