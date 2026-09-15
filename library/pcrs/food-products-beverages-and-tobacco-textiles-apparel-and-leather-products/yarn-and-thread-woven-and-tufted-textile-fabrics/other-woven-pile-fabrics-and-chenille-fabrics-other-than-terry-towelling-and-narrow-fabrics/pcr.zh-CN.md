---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.yarn-and-thread-woven-and-tufted-textile-fabrics.other-woven-pile-fabrics-and-chenille-fabrics-other-than-terry-towelling-and-narrow-fabrics
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 其他机织绒头织物及绳绒织物（毛巾织物和狭幅毛圈织物除外）

## 1. 范围与适用性

本 PCR 适用于 CPC 26830“其他机织绒头织物及绳绒织物”的工厂门生产。范围覆盖在排除单列的棉制和人造纤维制子类后仍属于 CPC 26830“其他”子类的纺织材料织物。产品可以本色状态交付，也可以经过已声明的前处理、染色、印花、机械整理或化学整理后交付。

毛巾织物、狭幅织物、地毯、簇绒织物、针织绒类织物、服装、制成品，以及归入棉制或人造纤维制机织绒头织物子类的产品不在范围内。数据包必须声明纤维质量组成、绒头结构、织物幅宽、单位面积质量、整理状态、湿加工路线、生产地域和出厂门条件。

本候选 PCR 仅规定前景记录和计算方法，不提供默认数量范围或 AI 估算范围。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.yarn-and-thread-woven-and-tufted-textile-fabrics.other-woven-pile-fabrics-and-chenille-fabrics-other-than-terry-towelling-and-narrow-fabrics |
| classification_refs | CPC 3.0: 26830 |
| covered_products | 属于 CPC 26830 其他纺织材料子类的机织绒头织物及绳绒织物，可按本色或已声明整理状态交付 |
| excluded_products | 毛巾织物；狭幅织物；棉制子类 26810；人造纤维制子类 26820；地毯；簇绒或针织绒类织物；服装和制成品 |
| representative_product | 具有已声明非棉、非人造纤维组成的可销售机织绒头织物或绳绒织物 |
| production_route | 纱线接收与准备；地组织和绒头/绳绒形成；可选湿加工；最终整理、检验和出厂 |
| market_state | 工厂生产混合；已制造成品，并声明整理状态和包装边界 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 提供具有规定结构与整理状态的机织绒头织物或绳绒织物 |
| How much | 按已声明调湿或商业质量基准计的 1 kg 可销售织物 |
| How well | 满足已声明的纤维组成、绒头结构、幅宽、单位面积质量、整理规格和质量等级 |
| How long or cycle | 一个生产批次通过已声明的工厂门路线 |
| reference_flow_link | 最终检验后离开工厂的合格可销售织物质量 |

| 字段 | 值 |
| --- | --- |
| Reference amount | 1 kg |
| Reference product flow | Other woven pile fabrics and chenille fabrics (other than terry towelling and narrow fabrics) `91e48617-c5a4-423e-870d-696c311f7b05` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | 纤维质量组成；地组织和绒头/绳绒结构；织物幅宽；单位面积质量；整理状态；适用时的颜色或图案；含湿率或调湿基准；质量等级；生产地域；声明门点；包装纳入情况 |

构建前景数据包时，所有必需限定信息都必须在数据集元数据、过程说明、参考流备注、产品说明或等效字段中声明。缺少任一必需限定信息时，参考流不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | 参考产品 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 按已声明的调湿或商业质量基准记录合格织物净质量；除非明确声明纳入包装，否则排除卷芯、托盘和出厂包装。 |
| `area_to_mass` | 按面积报告的织物 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 仅可使用批次特定的实测单位面积质量将平方米换算为千克，并保留试样方法、调湿状态、幅宽和试验记录。 |
| `length_to_mass` | 按长度报告的织物 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 仅可使用批次特定的单位长度质量，或使用幅宽和单位面积质量，将米换算为千克，并保留测量记录。 |
| `active_and_as_supplied_mass` | 工艺化学品 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 分别记录每种化学品的供货态质量和有效成分浓度；不得合并化学品，也不得用有效成分质量静默替代配制产品质量。 |
| `energy_unit_preservation` | 外购电力和热量 | 所选流的能量属性 | kWh 或 MJ | 保留电表、热表或发票原始单位并记录每个换算因子；没有实测或供应商声明的压力、温度和焓基准时，不得把蒸汽质量换算为能量。 |

## 5. 系统边界

前景边界始于织物厂接收的纱线和工艺材料，止于已声明的最终整理和检验之后的合格 CPC 26830 织物。外购纱线、电力、热、水和化学品的上游生产通过背景数据集连接。仅当湿加工由报告工厂控制，或由纳入已声明前景路线的固定供应商实施时，才将其纳入前景。

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 机织绒头或绳绒织物工厂接收的纱线批次和工艺材料 |
| starting_condition_role | 与供应商特定或市场背景数据集连接的已披露前景输入 |
| product_classification_scope | 仅 CPC 26830，排除棉制 CPC 26810 和人造纤维制 CPC 26820 织物 |
| recursive_input_rule | 为进一步加工而接收的同类别织物仍作为显式输入，记录质量、整理状态、供应商和上游数据集，不递归再生成 |
| upstream_dataset_requirement | 每项外购纱线、能源载体、供水和化学品都需要地域与技术具有代表性的上游数据集，或明确的未解析连接 |
| disclosure | 声明纤维组成、纱线来源、织造技术、绒头形成路线、湿法和干法整理步骤、外协操作、包装边界、地域、报告期和排除的操作 |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_foreground_control` | 直接控制和固定供应商操作 | 当相应操作发生在已声明路线中时，纳入纱线准备、织造和绒头/绳绒形成、可选湿加工、最终整理、检验、内部控制的公用工程，以及现场废物或废水处理。 | `jrc-ilcd-2010`; `eu-textiles-bat-2022` |
| `boundary_background_links` | 外购输入和外部服务 | 将每项外购纱线、材料、能源、水、化学品、废物处理和外协过程保留为显式技术圈连接，不得以未披露截断替代这些连接。 | `jrc-ilcd-2010` |
| `boundary_route_condition` | 可选加工 | 根据生产证据将前处理、染色、印花、化学整理、机械整理和现场废水处理标记为纳入或不适用，不得默认其不存在。 | `eu-textiles-bref-2023`; `eu-textiles-bat-2022` |
| `boundary_no_implicit_cutoff` | 前景交换 | 将实际使用的纱线、化学品、公用工程、废物、废水流和直接排放分别记录为原子交换。任何截断都需要书面的目标与范围准则及完整性检查。 | `jrc-ilcd-2010`; `roos-textile-chemicals-2018` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| weaving_and_pile_formation | 织造和绒头/绳绒形成 | required |  | 前景织物形成 | kg 未整理合格织物 |
| wet_processing | 前处理、染色、水洗和湿法整理 | conditional | 当任何水相准备、漂白、染色、印花后洗涤或湿法化学整理由工厂或已声明固定供应商控制时纳入 | 前景湿加工 | kg 湿加工合格织物 |
| final_finishing_and_inspection | 最终机械整理和检验 | required |  | 前景最终产品放行 | kg 可销售参考产品 |

### 过程：织造和绒头/绳绒形成（`weaving_and_pile_formation`）

#### 输入

##### 产品流

###### 已声明织物批次接收的地经纱（`ground_warp_yarn_input`）

本交换表示该批次消耗的一种地经纱规格；组成、供应商、纱支或染色状态不同的纱线必须另设卡片。

- 选定流：已声明 CPC 26830 纺织材料的地经纱
- 流属性/单位：Mass / kg
- 数量规则：发出质量减退回未使用纱线质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 未整理合格织物输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_input_mass`
- 来源：`eu-textiles-bat-2022`

###### 已声明织物批次接收的效果纱（`effect_yarn_input`）

本交换表示形成该批次表面效果的一种已声明纱线规格；不同纱线规格必须保持为不同交换。

- 选定流：已声明 CPC 26830 结构和纺织材料的效果纱
- 流属性/单位：Mass / kg
- 数量规则：发出质量减退回未使用纱线质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 未整理合格织物输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_input_mass`
- 来源：`eu-textiles-bat-2022`

###### 已声明织物批次接收的纬纱（`weft_yarn_input`）

本交换表示该批次消耗的一种纬纱规格；每种实质不同的纬纱必须保持为不同交换。

- 选定流：已声明 CPC 26830 纺织材料的纬纱
- 流属性/单位：Mass / kg
- 数量规则：发出质量减退回未使用纱线质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 未整理合格织物输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_input_mass`
- 来源：`eu-textiles-bat-2022`

###### 织造和绒头形成使用的外购电力（`weaving_electricity_input`）

本交换记录织机、绒头形成设备、局部抽风及直接相关辅助设备的计量或分配电力。

- 选定流：外购中压电力
- 流属性/单位：Net calorific value / kWh
- 数量规则：过程分表读数；否则按书面因果驱动从全厂电表分配
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 未整理合格织物输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_electricity_record`
- 来源：`eu-textiles-bat-2022`

#### 输出

##### 产品流

###### 未整理机织绒头织物或绳绒织物（`unfinished_pile_fabric_output`）

本交换表示织物形成后、任何已声明湿加工和最终检验之前离开的合格本色或其他未整理中间产品。

- 选定流：已声明结构和纺织材料的未整理 CPC 26830 织物
- 流属性/单位：Mass / kg
- 数量规则：按已声明调湿基准实测合格输出质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：过程参考输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_fabric_output_mass`
- 来源：`iso-3801-1977`

##### 废物流

###### 织造和绒头形成产生的废纱（`weaving_yarn_waste_output`）

本交换记录由开机、尾纱、断头和织机清洁产生的一种已声明组成废纱及其去向。

- 选定流：已声明 CPC 26830 纺织材料的废纱
- 流属性/单位：Mass / kg
- 数量规则：称量转移至已声明去向的废物质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 未整理合格织物输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_mass_and_destination`
- 来源：`eu-textiles-bat-2022`

###### 织造产生的布边和开机裁边（`weaving_fabric_offcuts_output`）

本交换记录一种具有已声明织物组成和去向的分类裁边废物流。

- 选定流：已声明结构和纺织材料的 CPC 26830 织物裁边
- 流属性/单位：Mass / kg
- 数量规则：称量转移至已声明去向的裁边质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 未整理合格织物输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_mass_and_destination`
- 来源：`eu-textiles-bat-2022`

### 过程：前处理、染色、水洗和湿法整理（`wet_processing`）

#### 输入

##### 产品流

###### 进入湿加工路线的未整理织物（`wet_process_unfinished_fabric_input`）

本交换记录进入水相加工的准确未整理中间批次。

- 选定流：已声明结构和纺织材料的未整理 CPC 26830 织物
- 流属性/单位：Mass / kg
- 数量规则：按已声明调湿基准实测输入批次质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 湿加工合格织物输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_input_mass`
- 来源：`iso-3801-1977`

###### 湿加工使用的工艺水（`wet_process_water_input`）

本交换记录跨越湿加工边界、用于配制、浴液、水洗、漂洗和设备清洁的水。

- 选定流：工艺用水 `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：计量或由槽体体积推导的供水量，减去实测返回同一过程的内部回用水
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 湿加工合格织物输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_process_water_record`
- 来源：`eu-textiles-bat-2022`；`costa-textile-dyeing-2021`

###### 湿加工使用的工业级固体氢氧化钠（`wet_process_sodium_hydroxide_input`）

仅当路线发出工业级固体氢氧化钠时适用；其他浓度的溶液是不同交换。

- 选定流：氢氧化钠 `e0abcced-0611-4c24-9290-5a2c5a0c4169`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：称量或发票记录的批次供货态发出质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 湿加工合格织物输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_chemical_issue_record`
- 来源：`eu-textiles-bat-2022`；`roos-textile-chemicals-2018`

###### 湿加工使用的质量分数 50% 过氧化氢溶液（`wet_process_hydrogen_peroxide_input`）

仅当记录的漂白配方使用质量分数 50% 的过氧化氢溶液时适用。

- 选定流：过氧化氢溶液，水溶液50% `f151f740-6c3a-42b9-abed-e44220792750`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：称量、计量或发票记录的批次供货态溶液发出质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 湿加工合格织物输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_chemical_issue_record`
- 来源：`eu-textiles-bat-2022`；`roos-textile-chemicals-2018`

###### 以蒸汽供给的外购工艺热（`wet_process_steam_heat_input`）

本交换记录由外购或独立计量蒸汽向湿加工设备交付的热量。

- 选定流：蒸汽工艺热 `fcf9e128-688f-42f0-9dca-85d2319cfac5`
- 流属性/单位：Gross calorific value `93a60a56-a3c8-14da-a746-0800200c9a66` / MJ
- 数量规则：热表记录，或使用已记录的供汽状态与焓基准由蒸汽质量换算
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 湿加工合格织物输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_steam_heat_record`
- 来源：`eu-textiles-bat-2022`；`costa-textile-dyeing-2021`

###### 湿加工使用的外购电力（`wet_process_electricity_input`）

本交换记录准备、染色、水洗、脱水、干燥辅助、加药及直接相关泵的电力。

- 选定流：外购中压电力
- 流属性/单位：Net calorific value / kWh
- 数量规则：过程分表读数；否则按书面因果驱动从全厂电表分配
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 湿加工合格织物输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_electricity_record`
- 来源：`eu-textiles-bat-2022`；`costa-textile-dyeing-2021`

#### 输出

##### 产品流

###### 湿加工机织绒头织物或绳绒织物（`wet_finished_fabric_output`）

本交换表示已声明前处理、染色、水洗和湿法整理序列后的合格中间产品。

- 选定流：已声明结构和纺织材料的湿加工 CPC 26830 织物
- 流属性/单位：Mass / kg
- 数量规则：按已声明调湿基准实测合格输出质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：过程参考输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_fabric_output_mass`
- 来源：`iso-3801-1977`

##### 废物流

###### 转移处理的湿加工废水（`wet_process_wastewater_output`）

本交换记录一股具有明确转移去向的废水；直接排放与转移处理是不同交换。

- 选定流：转移处理的纺织湿加工废水
- 流属性/单位：Mass / kg
- 数量规则：流量计记录的废水质量，或使用已记录密度由实测体积换算，并按去向分开
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 湿加工合格织物输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wastewater_record`
- 来源：`eu-textiles-bat-2022`；`costa-textile-dyeing-2021`

### 过程：最终机械整理和检验（`final_finishing_and_inspection`）

#### 输入

##### 产品流

###### 进入仅干法最终路线的未整理织物（`final_unfinished_fabric_input`）

当产品绕过湿加工、从织物形成直接进入最终机械整理和检验时，本交换适用。

- 选定流：已声明结构和纺织材料的未整理 CPC 26830 织物
- 流属性/单位：Mass / kg
- 数量规则：按已声明调湿基准实测输入批次质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_input_mass`
- 来源：`iso-3801-1977`

###### 进入最终整理和检验的湿加工织物（`final_wet_finished_fabric_input`）

当已声明路线在最终机械整理和检验前包含湿加工时，本交换适用。

- 选定流：已声明结构和纺织材料的湿加工 CPC 26830 织物
- 流属性/单位：Mass / kg
- 数量规则：按已声明调湿基准实测输入批次质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_input_mass`
- 来源：`iso-3801-1977`

###### 最终整理和检验使用的外购电力（`final_finishing_electricity_input`）

本交换记录适用时起绒、剪毛、刷毛、热定形辅助、验布、成卷及直接相关抽风的电力。

- 选定流：外购中压电力
- 流属性/单位：Net calorific value / kWh
- 数量规则：过程分表读数；否则按书面因果驱动从全厂电表分配
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_electricity_record`
- 来源：`eu-textiles-bat-2022`

#### 输出

##### 产品流

###### 可销售 CPC 26830 参考产品（`final_reference_product_output`）

本交换表示在已声明工厂门放行的合格机织绒头织物或绳绒织物。

- 选定流：其他机织绒头织物及绳绒织物（毛巾织物和狭幅毛圈织物除外） `91e48617-c5a4-423e-870d-696c311f7b05`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：实测合格产品净质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：1 kg 可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_reference_product_mass`
- 来源：`un-cpc-v3-26830`；`iso-3801-1977`

##### 废物流

###### 最终检验拒收织物（`final_rejected_fabric_output`）

本交换记录一种具有已声明组成和去向的拒收织物流。

- 选定流：已声明结构和纺织材料的拒收 CPC 26830 织物
- 流属性/单位：Mass / kg
- 数量规则：称量转移至已声明再利用、回收、处理或处置去向的拒收质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 可销售参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_mass_and_destination`
- 来源：`eu-textiles-bat-2022`

## 7. 分配与共产品处理

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivide_first` | 可分离的产品、批次、路线和废物处理操作 | 在分配共享输入输出之前，优先细分或独立计量。 | `iso-14044-2006`; `jrc-ilcd-2010` |
| `allocation_internal_recycling` | 报告期内内部回用的纱线、织物、水、热或化学品 | 内部转移只记录一次并在设施质量或能量平衡中核对；不得同时计算避免原生输入和外售共产品抵扣。 | `jrc-ilcd-2010`; `eu-textiles-bat-2022` |
| `allocation_shared_utilities` | 经合理努力仍无法分表的公用工程 | 使用机器小时、计量运行时间、浴液体积或实测热需求等有因果关系的驱动因素；只有没有更好物理关系时才使用质量分配。 | `iso-14044-2006`; `jrc-ilcd-2010` |
| `allocation_saleable_coproduct` | 可销售纱线、织物或回收材料共产品 | 遵循 ISO 14044 层级，记录所选物理关系或其他合理方法；当方法选择可能实质改变结果时披露敏感性。 | `iso-14044-2006` |
| `allocation_waste_destination` | 离开前景的废物和废水 | 明确保留每个去向并连接相应处理服务；没有已声明下游建模约定时不赋予避免负担抵扣。 | `jrc-ilcd-2010`; `eu-textiles-bat-2022` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_material_input_mass | weaving_and_pile_formation; wet_processing; final_finishing_and_inspection | 每项原子纱线、织物或化学品输入 | 收货、库存发料、退料和批次记录 | 材料 id；供应商；组成；适用时的浓度；批号；发出质量；退回质量；日期；过程 | 校准秤、储槽计量，或经库存发料核对的发票 | kg 供货态 | 每批或每次发料 | 完整报告期 | 每个纳入的生产场址和固定供应商操作 | 按准确流身份汇总净发出质量并归一化到合格过程输出 | 校准证书、发票、库存台账、配方和批次票 |
| cp_electricity_record | weaving_and_pile_formation; wet_processing; final_finishing_and_inspection | 外购电力 | 分表和运行日志 | 电表 id；起止读数；时间戳；过程；停机；共享时的分配驱动 | 校准分表；共享电表仅可使用书面因果分配 | kWh | 连续或每班 | 完整报告期 | 每个纳入过程区域 | 扣除经核实的非过程用电，按过程汇总并归一化到合格输出 | 电表校准、能源发票核对和运行日志 |
| cp_fabric_output_mass | weaving_and_pile_formation; wet_processing | 合格中间织物 | 生产批次和质量放行记录 | 批号；毛重；皮重；净重；调湿基准；幅宽；单位面积质量；拒收质量 | 校准秤；使用换算时附 ISO 3801 兼容的面积质量或长度质量测量 | kg | 每批 | 完整报告期 | 每个纳入过程 | 按统一声明调湿基准汇总合格净输出 | 秤校准、试样记录和质量放行 |
| cp_waste_mass_and_destination | weaving_and_pile_formation; final_finishing_and_inspection | 每项原子固体废物流 | 废物转移和内部回收记录 | 废物 id；组成；质量；容器皮重；日期；去向；回收状态 | 校准秤或经核实的废物承包商记录 | kg | 每次转移 | 完整报告期 | 每个纳入过程 | 按准确废物身份和去向汇总；内部回收单独核对 | 称量票、承包商收据和库存核对 |
| cp_process_water_record | wet_processing | Process Water | 水表和批次记录 | 水表 id；进水；回用返回；批次 id；过程步骤；时间戳 | 校准流量计或校准储槽体积变化 | kg 或 m3，并记录密度 | 连续或每批 | 完整报告期 | 湿加工区域 | 按过程计算净供水并归一化到合格湿加工输出 | 水表校准、水量平衡和批次日志 |
| cp_chemical_issue_record | wet_processing | 每项原子工艺化学品 | 配方、库存发料、发票和加药记录 | 化学品身份；适用时的 CAS 或染料索引；供应商；浓度；供货态质量；批次 id；过程步骤 | 校准加药表或秤，并与库存移动核对 | kg 供货态 | 每批 | 完整报告期 | 湿加工区域 | 按准确化学品及浓度汇总；有效成分另行保留计算 | 安全数据表、配方、校准、发票和库存核对 |
| cp_steam_heat_record | wet_processing | Process heat from steam | 蒸汽或热表及供给状态记录 | 仪表 id；蒸汽质量或热量；压力；温度；凝结水回收；时间戳；过程 | 校准热表，或使用书面焓计算的蒸汽表 | MJ；源记录可保留 kg 蒸汽 | 连续或每批 | 完整报告期 | 湿加工区域 | 按过程汇总净交付热量并归一化到合格输出 | 校准、锅炉或供应商记录及焓基准 |
| cp_wastewater_record | wet_processing | 转移处理的纺织湿加工废水 | 废水流量和转移记录 | 流 id；流量；用于质量换算时的密度；pH；温度；去向；采样期 | 校准流量计和按去向区分的转移记录 | kg 或 m3，并记录密度 | 连续；适用时按批排放 | 完整报告期 | 每股分类湿加工流和排放点 | 按流和去向汇总；不得合并直接排放与转移处理 | 仪表校准、流量平衡、样品监管链和处理收据 |
| cp_reference_product_mass | final_finishing_and_inspection | 可销售参考产品 | 最终检验和出厂记录 | 产品 id；批号；纤维组成；结构；幅宽；单位面积质量；毛重；皮重；净重；调湿基准；等级；整理状态 | 校准秤和最终质量放行 | kg | 每批 | 完整报告期 | 每个纳入场址 | 按已声明调湿基准汇总合格净产品质量 | 秤校准、ISO 3801 兼容试验记录和放行证书 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| normalize_exchange_to_reference | 每项前景交换 | 交换量除以同一代表路线和期间的合格参考产品质量 | 原子交换记录；cp_reference_product_mass | 每 1 kg 参考产品的交换单位 | `iso-14044-2006`; `jrc-ilcd-2010` |
| reconcile_fabric_mass | 每个织物形成或整理过程 | 输入织物和纱线质量等于合格织物输出加分别识别的废物、库存变化、样品和实测损失，并处于已记录不确定度内 | cp_material_input_mass；cp_fabric_output_mass；cp_waste_mass_and_destination | 过程质量平衡残差和完整性标志 | `eu-textiles-bat-2022` |
| convert_area_or_length_to_mass | 按 m2 或线性 m 报告的织物 | 实测面积乘批次特定单位面积质量，或实测长度乘批次特定单位长度质量 | 试样记录；需要时的幅宽；批次数量 | 按已声明调湿基准计的 kg 织物 | `iso-3801-1977` |
| calculate_net_process_water | 湿加工 | 供水减实测返回同一过程的内部回用水；其他回用转移单独报告 | cp_process_water_record | 每 1 kg 湿加工输出的 kg 或 m3 净工艺水 | `eu-textiles-bat-2022` |
| calculate_steam_heat | 蒸汽记录 | 优先采用直接热量测量；否则由实测蒸汽质量和已记录供汽/凝结水焓状态计算 | cp_steam_heat_record | 每 1 kg 湿加工输出的 MJ 交付工艺热 | `eu-textiles-bat-2022` |
| calculate_active_chemical | 配制化学品 | 供货态质量乘记录的有效质量分数；保留两者且不得覆盖供货态清单交换 | cp_chemical_issue_record | 作为伴随计算的 kg 有效物质 | `roos-textile-chemicals-2018` |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| dq_identity | 每项材料和废物流 | 每个交换使用一种化学或物理上具体的身份；保留供应商品级、纤维组成、浓度、适用时的染料索引或 CAS，以及废物去向。 | 供应商规格、安全数据表、配方、收货记录和废物转移记录 |
| dq_temporal | 前景记录 | 覆盖具有代表性的连续报告期和所有纳入路线；披露停机、试验、返工以及季节或生产活动影响。 | 仪表覆盖报告、生产日历和异常日志 |
| dq_completeness | 每个过程 | 在过程层面核对材料、能源、水、废水和废物记录；量化并解释缺失记录，不得赋零。 | 过程平衡、仪表/发票核对和未解析数据登记 |
| dq_measurement | 实测数量 | 识别仪表或秤、校准状态、读数频次、单位、换算因子和分配驱动。 | 校准证书、原始读数和计算工作簿 |
| dq_route | 产品数据集 | 纤维组成、绒头结构、整理状态、湿加工路线、地域、技术和包装边界必须与代表产品匹配。 | 物料清单、路线卡、产品规格和数据集元数据 |
| dq_chemical_inventory | 湿加工 | 将实际使用的每种染料物质、载体、盐、碱、酸、漂白剂、还原剂、表面活性剂、柔软剂、涂层剂、阻燃剂、防水剂和清洗化学品分别记录为独立交换；不得使用“染料”或“助剂”聚合行。 | 配方、加药记录、安全数据表和库存核对 |

## 9. 校验规则

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_reference_identity` | 参考流 | 所选参考流 UUID、Product flow 类型、CPC 26830 分类、Mass 属性、Units of mass 单位组和 kg 参考单位必须全部存在且相互一致。 | `un-cpc-v3-26830`; `jrc-ilcd-2010` |
| `validate_scope_exclusions` | 产品身份 | 拒绝毛巾织物、狭幅织物、棉制子类 26810、人造纤维制子类 26820、地毯、簇绒织物、针织绒类织物、服装或制成品记录。 | `un-cpc-v3-26830` |
| `validate_required_qualifiers` | 数据集元数据 | 必须声明纤维组成、绒头/绳绒结构、幅宽、单位面积质量、整理状态、调湿基准、等级、地域、门点、湿加工路线和包装纳入情况。 | `iso-3801-1977`; `jrc-ilcd-2010` |
| `validate_atomic_inventory` | 所有清单交换 | 每项实际输入、输出、废物、废水流和直接排放必须表示为具有准确身份和去向的一个原子交换；聚合标签和选择指令校验失败。 | `eu-textiles-bat-2022`; `roos-textile-chemicals-2018` |
| `validate_route_coverage` | 过程图 | 织造和最终检验为必需过程；湿加工仅在有证据时纳入；每个纳入或省略的条件过程都必须有路线记录。 | `eu-textiles-bref-2023`; `eu-textiles-bat-2022` |
| `validate_foreground_evidence` | 定量清单 | 每个数量都必须来自前景记录或由前景记录按书面规则计算。空白、估算、默认或 AI 生成的数量范围不符合要求。 | `iso-14044-2006`; `eu-textiles-bat-2022` |
| `validate_mass_balance` | 纱线、织物、化学品、水、废水和废物记录 | 过程层面的输入、合格输出、废物、库存变化、回用和已记录损失必须在设施声明的测量不确定度内平衡。 | `eu-textiles-bat-2022` |
| `validate_allocation` | 共享操作和共产品 | 优先细分，披露分配驱动和分母，并在分配选择可能实质影响结果时保留敏感性检查。 | `iso-14044-2006`; `jrc-ilcd-2010` |
| `validate_uuid_gate` | 含 UUID 的行 | 只有在 flow-hybrid-search 发现候选且 Tiangong state-100 直读确认准确流身份、流类型、必需限定信息和兼容属性/单位后，才可保留 UUID；未解析或拒绝的候选保持空白。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | unit_process |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | 与已声明组成、结构、整理状态、路线、地域、技术、质量等级和调湿基准匹配的工厂门 CPC 26830 织物数据集 |
| excluded_use | 棉制或人造纤维制机织绒头子类；毛巾或狭幅织物；地毯；簇绒或针织绒类织物；服装；使用阶段或寿命终止声明；参考身份未解析的路线 |
| required_metadata | canonical PCR id；参考流 UUID；CPC 代码；纤维组成；结构；幅宽；单位面积质量；调湿基准；整理状态；路线；地域；技术；报告期；分配；包装边界 |
| required_quality_disclosure | 前景覆盖；仪表和秤校准；过程平衡；化学品和废物完整性；供应商/背景连接；未解析 UUID；排除操作；不确定度和分配选择 |
| update_trigger | 产品范围、纱线组成、绒头形成技术、湿法或干法整理路线、化学配方、能源或水系统、废物去向、供应商组合、地域、分配或数据年龄发生实质变化 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-v3-26830` | official_guidance | United Nations Statistics Division, CPC Ver. 3.0 Explanatory Notes, code 26830, updated 30 June 2025, https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | 产品类别身份和排除项 |
| `iso-14044-2006` | standard | ISO 14044:2006, Environmental management — Life cycle assessment — Requirements and guidelines, https://www.iso.org/standard/38498.html | 目标与范围、清单、分配、报告和评审要求 |
| `iso-3801-1977` | standard | ISO 3801:1977, Textiles — Woven fabrics — Determination of mass per unit length and mass per unit area, confirmed 2023, https://www.iso.org/standard/9335.html | 参考质量测量及面积/长度换算 |
| `jrc-ilcd-2010` | official_guidance | European Commission Joint Research Centre, ILCD Handbook: General guide for Life Cycle Assessment — Detailed guidance, EUR 24708 EN, https://eplca.jrc.ec.europa.eu/uploads/ILCD-Handbook-General-guide-for-LCA-DETAILED-GUIDANCE-12March2010-ISBN-fin-v1.0-EN.pdf | 参考流、前景/背景边界、完整性、数据质量和分配 |
| `eu-textiles-bref-2023` | official_guidance | European Commission JRC, Best Available Techniques Reference Document for the Textiles Industry, 2023, https://bureau-industrial-transformation.jrc.ec.europa.eu/reference/textiles-industry | 纺织过程拆分和路线适用性 |
| `eu-textiles-bat-2022` | official_guidance | Commission Implementing Decision (EU) 2022/2508 establishing BAT conclusions for the textiles industry, http://data.europa.eu/eli/dec_impl/2022/2508/oj | 材料、水、能源、化学品、废水、废物和排放的过程级记录 |
| `costa-textile-dyeing-2021` | literature | Costa et al. (2021), Analysis of the Environmental Life Cycle of Dyeing in Textiles, DOI:10.3303/CET2186122, https://www.cetjournal.it/cet/21/86/122.pdf | 湿加工水、化学品和能源清单覆盖 |
| `roos-textile-chemicals-2018` | literature | Roos et al. (2018), USEtox characterisation factors for textile chemicals based on a transparent data source selection strategy, DOI:10.1007/s11367-017-1330-y, https://link.springer.com/article/10.1007/s11367-017-1330-y | 逐物质纺织化学品清单和透明度 |
