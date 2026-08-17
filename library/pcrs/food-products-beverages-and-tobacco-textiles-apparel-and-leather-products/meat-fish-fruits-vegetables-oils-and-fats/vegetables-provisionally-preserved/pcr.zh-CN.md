---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.vegetables-provisionally-preserved
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 暂时保藏的蔬菜

## 1. 范围与适用性

本 PCR 适用于工厂门口的暂时保藏蔬菜中间产品生产。这类产品在当前状态下不适合直接食用，食用前仍需进一步加工。范围包括蔬菜接收与预处理、恰好一条声明的暂时保藏路线，以及储存和交付。范围不包括新鲜、冷冻、干制、即食、罐藏或以其他方式完成最终保藏的蔬菜，也不包括以醋或乙酸为成品定义性保藏路线的蔬菜。

规范产品类别依据 CPC 3.0 子类 21330。天工产品流 `Tomato` 是 CPC-21330 范围内较窄的代表；UUID `4dc258f9-c5fc-47d7-821e-12526fe6b5d7` 可能仅能标识番茄数据集。其他蔬菜的数据集在发布前必须选用语义适当的天工产品流，不得复用该 Tomato UUID。

## 2. 产品类别身份

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.vegetables-provisionally-preserved |
| classification_refs | CPC 3.0: 21330, Vegetables provisionally preserved |
| covered_products | 采用声明的保藏溶液，或采用声明的非溶液处理而暂时保藏的蔬菜；在当前状态下不适合直接食用的中间产品 |
| excluded_products | 新鲜、冷冻、干制、即食、罐藏或以其他方式完成最终保藏的蔬菜；以醋或乙酸为成品定义性保藏路线的蔬菜；声明 CPC 范围以外的水果、坚果、豆类和马铃薯 |
| representative_product | 暂时保藏的番茄；`Tomato` 是较窄的代表，不能作为其他蔬菜的通用流 |
| production_route | 接收与预处理；溶液保藏或气相/非溶液保藏二选一；储存和工厂门口交付 |
| market_state | 需要进一步加工的散装或非零售中间产品，并声明保藏介质、温度和包装状态 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 作为进一步加工中间投入而交付的暂时保藏蔬菜 |
| How much | 工厂门口交接时按声明产品质量口径计的 1 kg |
| How well | 声明蔬菜身份、预处理状态、所选保藏路线、保藏剂身份和配方、产品与介质的质量口径、包装状态及进一步加工要求 |
| How long or cycle | 一个生产批次经过声明的保藏和储存时长，直至工厂门口交接 |
| reference_flow_link | 参考量是 `storage_dispatch` 的定量参考输出 |

| 字段 | 值 |
| --- | --- |
| Reference amount | 1 kg |
| Reference product flow | Tomato `4dc258f9-c5fc-47d7-821e-12526fe6b5d7` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | 蔬菜种类与品种；所选 UUID 仅适用于番茄或已核验替代流；蔬菜形态与预处理状态；保藏路线；保藏剂和配方；毛重、净重或沥干质量口径；是否计入伴随介质；储存温度与时长；包装状态；工厂门口位置；不适合直接食用状态；所需进一步加工 |

构建前景数据包时，所有必需限定信息必须在数据集元数据、过程注释、参考流注释、产品说明或等效字段中声明。仅当声明的产品质量口径包含保藏介质时，参考量才包含该介质；蔬菜质量和伴随介质质量必须分别记录。

## 4. 测量与单位规则

| rule_id | 适用于 | 必需属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | 参考产品 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 按声明的毛重、净重或沥干产品质量口径报告 1 kg，并对所有归一化清单量使用同一口径。 |
| `component_mass_separation` | 蔬菜和伴随保藏介质 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 分别测量或计算蔬菜质量与伴随介质质量，并披露各组分是否计入参考量。 |
| `batch_normalization` | 所有前景输入与输出 | 相应流属性 | 每 kg 参考产品 | 用工厂门口交接时合格参考产品质量对批次总量进行归一化，不得用进厂原料蔬菜质量作为归一化分母。 |
| `formulation_measurement` | 保藏介质和保藏剂 | 工厂使用的质量或浓度属性 | 声明单位 | 记录实际配方、浓度口径、配制量、回收量和去向；不得以名义配方替代实测或受控批次记录。 |

## 5. 系统边界

| rule_id | 适用于 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_foreground_operations` | 前景生产 | 纳入接收、预处理、唯一所选暂时保藏路线、储存与交付，以及跨越这些过程边界的所有已知材料、水、能源、产品、废物和直接基本流。 | `eu-pef-2021-2279` |
| `boundary_route_exclusivity` | 保藏路线 | 每个建模批次只能选择 `solution_preservation` 或 `gas_non_solution_preservation` 中的一条路线，不得将两条路线建模为同时发生。真正的组合处理在经评审的路线特定证据扩展范围前不属于本候选 PCR。 |  |
| `boundary_upstream_links` | 外购投入 | 为进厂蔬菜、水、保藏剂、能源、包装及其他外购投入链接有代表性的上游数据集；不得在前景中重复建立这些上游过程。 | `eu-pef-2021-2279` |
| `boundary_food_safety_controls` | 食品接触操作 | 纳入说明和核验适用 GHP/HACCP 控制所需的活动记录，包括水的适用性、卫生、配方、时间、温度、pH 或工厂识别的其他控制参数。 | `codex-cxc-1-1969` |

### 边界抽象

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 在保藏设施门口验收的新鲜蔬菜批次或以其他方式声明的预处理蔬菜批次 |
| starting_condition_role | 声明身份、状态、质量口径和上游数据集的外购产品投入 |
| product_classification_scope | CPC 3.0 子类 21330，在当前状态下不适合直接食用的暂时保藏蔬菜中间产品 |
| recursive_input_rule | 若投入已经是同一类别的暂时保藏蔬菜，则将其记录为外购起始条件投入并链接单独的上游数据集；不得在本前景中重复其早期保藏操作 |
| upstream_dataset_requirement | 所有外购蔬菜、保藏剂、水、能源、包装和废物处理服务都必须具有代表性数据集 |
| disclosure | 声明蔬菜身份、进厂状态、路线、配方、参考质量口径、伴随介质、储存条件、工厂门口、排除项以及所有数据缺口或临时估算 |

## 6. 过程清单结构

### 过程图

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| receipt_preparation | 蔬菜接收与预处理 | required |  | 前景预处理 | 离开过程的已预处理蔬菜 kg |
| solution_preservation | 溶液暂时保藏路线 | conditional | 仅当批次通过浸泡或接触声明的保藏溶液处理时纳入；排除气相/非溶液路线 | 前景保藏 | 离开过程的溶液保藏中间产品 kg |
| gas_non_solution_preservation | 气相或非溶液暂时保藏路线 | conditional | 仅当批次通过声明的气体或其他非溶液处理时纳入；排除溶液路线 | 前景保藏 | 离开过程的处理后中间产品 kg |
| storage_dispatch | 储存和工厂门口交付 | required |  | 前景整理 | 工厂门口交接的 1 kg 参考产品 |

### 过程：蔬菜接收与预处理（`receipt_preparation`）

#### 输入

##### 产品流

###### 验收的进厂蔬菜批次（`incoming_vegetable`）

记录验收蔬菜质量及其种类、品种、状态和供应商批次身份。实际蔬菜必须使用语义适当的产品流。

- 选定流：进厂蔬菜，待选择产品特定天工流
- 流属性/单位：Mass / kg
- 数量规则：经校准秤计量的验收蔬菜批次质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 工厂门口交接参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_incoming_vegetable`
- 来源：
- 数量范围：代表性批次进厂蔬菜强度
  - 范围角色：典型范围（`typical_range`）
  - 下限：声明的代表性批次集合中的观测最小值
  - 上限：声明的代表性批次集合中的观测最大值
  - 单位：kg/kg 参考产品
  - 基准：每 kg 工厂门口交接参考产品
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：采集记录（`collected_record`）

###### 预处理用水（`preparation_water`）

当清洗、漂洗或其他预处理用水跨越前景边界时，记录其进入量。

- 选定流：供水，待选择设施适用产品流
- 流属性/单位：Mass / kg
- 数量规则：过程供水计量值减去单独计量并绕开该过程的水量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 已预处理蔬菜输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_preparation_water`
- 来源：`codex-cxc-1-1969`
- 数量范围：代表性批次预处理用水强度
  - 范围角色：典型范围（`typical_range`）
  - 下限：声明的代表性批次集合中的观测最小值
  - 上限：声明的代表性批次集合中的观测最大值
  - 单位：kg/kg 已预处理蔬菜
  - 基准：每 kg 已预处理蔬菜输出
  - 基准类型：过程输出（`process_output`）
  - 证据类型：采集记录（`collected_record`）

#### 输出

##### 产品流

###### 送往保藏的已预处理蔬菜（`prepared_vegetable`）

记录被放行至恰好一条声明保藏路线的已预处理蔬菜质量。

- 选定流：已预处理蔬菜，待选择产品特定天工流
- 流属性/单位：Mass / kg
- 数量规则：转移至所选保藏路线的经校准秤计量质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 已预处理蔬菜输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_prepared_vegetable`
- 来源：
- 数量范围：代表性批次预处理得率
  - 范围角色：典型范围（`typical_range`）
  - 下限：每单位验收投入的已预处理蔬菜质量观测最小值
  - 上限：每单位验收投入的已预处理蔬菜质量观测最大值
  - 单位：kg/kg 验收蔬菜
  - 基准：每 kg 验收的进厂蔬菜
  - 基准类型：过程输出（`process_output`）
  - 证据类型：采集记录（`collected_record`）

##### 废物流

###### 去除的蔬菜物料和拒收物（`preparation_rejects`）

按实际去向记录修整物、腐败物和拒收蔬菜组分；若没有产品功能和市场证据，不得将其视为联产品。

- 选定流：蔬菜预处理废物，待选择去向特定废物流
- 流属性/单位：Mass / kg
- 数量规则：按废物去向测量质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 已预处理蔬菜输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_preparation_rejects`
- 来源：
- 数量范围：代表性批次拒收物强度
  - 范围角色：典型范围（`typical_range`）
  - 下限：声明的代表性批次集合中的观测最小值
  - 上限：声明的代表性批次集合中的观测最大值
  - 单位：kg/kg 已预处理蔬菜
  - 基准：每 kg 已预处理蔬菜输出
  - 基准类型：过程输出（`process_output`）
  - 证据类型：采集记录（`collected_record`）

###### 预处理废水（`preparation_wastewater`）

记录离开预处理的废水，包括处理去向和单独测量的夹带固体。

- 选定流：废水，待选择处理特定废物流
- 流属性/单位：Mass / kg
- 数量规则：排放计量值或经验证的水量平衡
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 已预处理蔬菜输出
- 基准类型：过程输出（`process_output`）
- 证据类型：根据采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_preparation_wastewater`
- 来源：
- 数量范围：代表性批次预处理废水强度
  - 范围角色：典型范围（`typical_range`）
  - 下限：声明的代表性批次集合中的测量值或平衡值最小值
  - 上限：声明的代表性批次集合中的测量值或平衡值最大值
  - 单位：kg/kg 已预处理蔬菜
  - 基准：每 kg 已预处理蔬菜输出
  - 基准类型：过程输出（`process_output`）
  - 证据类型：采集记录（`collected_record`）

### 过程：溶液暂时保藏路线（`solution_preservation`）

对一个建模批次，本过程与 `gas_non_solution_preservation` 互斥。

#### 输入

##### 产品流

###### 用于溶液处理的已预处理蔬菜（`solution_route_vegetable`）

仅记录分配到溶液路线的已预处理蔬菜。

- 选定流：已预处理蔬菜，待选择产品特定天工流
- 流属性/单位：Mass / kg
- 数量规则：与预处理输出核对的实测转移质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 溶液保藏中间产品输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_solution_route_inputs`
- 来源：
- 数量范围：代表性批次溶液路线蔬菜强度
  - 范围角色：典型范围（`typical_range`）
  - 下限：声明的代表性批次集合中的观测最小值
  - 上限：声明的代表性批次集合中的观测最大值
  - 单位：kg/kg 溶液保藏中间产品
  - 基准：每 kg 溶液保藏中间产品输出
  - 基准类型：过程输出（`process_output`）
  - 证据类型：采集记录（`collected_record`）

###### 保藏溶液和配制剂（`preservation_solution`）

在底层数据包中分别记录水、盐及每一种保藏剂或配方组分，并记录实际配方和浓度口径。

- 选定流：保藏溶液组分，待选择组分特定产品流
- 流属性/单位：Mass / kg
- 数量规则：实测配制量与补充量减去在同一批次系统内实测回用的回收溶液
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 溶液保藏中间产品输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_solution_route_inputs`
- 来源：`codex-cxc-1-1969`
- 数量范围：代表性批次溶液组分强度
  - 范围角色：典型范围（`typical_range`）
  - 下限：每种声明组分在代表性批次集合中的观测最小值
  - 上限：每种声明组分在代表性批次集合中的观测最大值
  - 单位：kg/kg 溶液保藏中间产品
  - 基准：每 kg 溶液保藏中间产品输出，按组分分别报告
  - 基准类型：过程输出（`process_output`）
  - 证据类型：采集记录（`collected_record`）

#### 输出

##### 产品流

###### 溶液保藏蔬菜中间产品（`solution_preserved_intermediate`）

在合并为任何声明的发运产品质量前，按分别测量的质量口径记录处理后蔬菜和伴随介质。

- 选定流：暂时保藏蔬菜，待选择产品特定天工流
- 流属性/单位：Mass / kg
- 数量规则：实测蔬菜质量加上声明产品质量口径所包含的伴随介质质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 溶液保藏中间产品输出
- 基准类型：过程输出（`process_output`）
- 证据类型：根据采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_solution_product_mass`
- 来源：
- 数量范围：代表性批次溶液路线得率
  - 范围角色：典型范围（`typical_range`）
  - 下限：每单位已预处理蔬菜投入的输出质量观测最小值
  - 上限：每单位已预处理蔬菜投入的输出质量观测最大值
  - 单位：kg/kg 已预处理蔬菜
  - 基准：每 kg 分配到溶液路线的已预处理蔬菜
  - 基准类型：过程输出（`process_output`）
  - 证据类型：采集记录（`collected_record`）

##### 废物流

###### 废弃或排放的保藏溶液（`spent_solution`）

记录从过程排出的溶液质量和去向；仍留在同一批次系统内回用的溶液不是边界输出。

- 选定流：废保藏溶液，待选择处理特定废物流
- 流属性/单位：Mass / kg
- 数量规则：实测排放质量或经验证的溶液质量平衡
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 溶液保藏中间产品输出
- 基准类型：过程输出（`process_output`）
- 证据类型：根据采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_spent_solution`
- 来源：
- 数量范围：代表性批次废保藏溶液强度
  - 范围角色：典型范围（`typical_range`）
  - 下限：声明的代表性批次集合中的测量值或平衡值最小值
  - 上限：声明的代表性批次集合中的测量值或平衡值最大值
  - 单位：kg/kg 溶液保藏中间产品
  - 基准：每 kg 溶液保藏中间产品输出
  - 基准类型：过程输出（`process_output`）
  - 证据类型：采集记录（`collected_record`）

### 过程：气相或非溶液暂时保藏路线（`gas_non_solution_preservation`）

对一个建模批次，本过程与 `solution_preservation` 互斥。

#### 输入

##### 产品流

###### 用于气相或非溶液处理的已预处理蔬菜（`gas_route_vegetable`）

仅记录分配到本路线的已预处理蔬菜。

- 选定流：已预处理蔬菜，待选择产品特定天工流
- 流属性/单位：Mass / kg
- 数量规则：与预处理输出核对的实测转移质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 气相/非溶液处理后中间产品输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_gas_route_inputs`
- 来源：
- 数量范围：代表性批次气相路线蔬菜强度
  - 范围角色：典型范围（`typical_range`）
  - 下限：声明的代表性批次集合中的观测最小值
  - 上限：声明的代表性批次集合中的观测最大值
  - 单位：kg/kg 处理后中间产品
  - 基准：每 kg 气相/非溶液处理后中间产品输出
  - 基准类型：过程输出（`process_output`）
  - 证据类型：采集记录（`collected_record`）

###### 气相或非溶液保藏剂（`gas_route_agent`）

分别记录每种实际处理剂和载体；本候选 PCR 不强制指定任何化学品。

- 选定流：保藏剂，待选择保藏剂特定产品流
- 流属性/单位：Mass / kg
- 数量规则：批次领料、钢瓶更换或经校准加料记录中的实测投加质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 气相/非溶液处理后中间产品输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_gas_route_inputs`
- 来源：`codex-cxc-1-1969`
- 数量范围：代表性批次处理剂强度
  - 范围角色：典型范围（`typical_range`）
  - 下限：每种声明处理剂在代表性批次集合中的观测最小值
  - 上限：每种声明处理剂在代表性批次集合中的观测最大值
  - 单位：kg/kg 处理后中间产品
  - 基准：每 kg 气相/非溶液处理后中间产品输出，按处理剂分别报告
  - 基准类型：过程输出（`process_output`）
  - 证据类型：采集记录（`collected_record`）

#### 输出

##### 产品流

###### 气相或非溶液处理后的蔬菜中间产品（`gas_treated_intermediate`）

记录处理后蔬菜的实测质量和声明处理条件。

- 选定流：暂时保藏蔬菜，待选择产品特定天工流
- 流属性/单位：Mass / kg
- 数量规则：从声明处理过程放行时的经校准秤计量质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 气相/非溶液处理后中间产品输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_gas_product_mass`
- 来源：
- 数量范围：代表性批次气相/非溶液路线得率
  - 范围角色：典型范围（`typical_range`）
  - 下限：每单位已预处理蔬菜投入的输出质量观测最小值
  - 上限：每单位已预处理蔬菜投入的输出质量观测最大值
  - 单位：kg/kg 已预处理蔬菜
  - 基准：每 kg 分配到本路线的已预处理蔬菜
  - 基准类型：过程输出（`process_output`）
  - 证据类型：采集记录（`collected_record`）

##### 基本流

###### 未捕集处理剂直接排放（`treatment_agent_release`）

仅纳入实际跨越边界进入空气、水或土壤的直接排放。识别物质和环境介质；不得将处理剂投加质量等同于排放质量。

- 选定流：待选择物质和环境介质特定基本流
- 流属性/单位：Mass / kg
- 数量规则：直接测量，或根据投加量、产品保留量、回收量和捕集量计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 气相/非溶液处理后中间产品输出
- 基准类型：过程输出（`process_output`）
- 证据类型：根据采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_treatment_agent_release`
- 来源：
- 数量范围：代表性批次直接排放强度
  - 范围角色：典型范围（`typical_range`）
  - 下限：声明的代表性批次集合中的实测或平衡排放最小值
  - 上限：声明的代表性批次集合中的实测或平衡排放最大值
  - 单位：kg/kg 处理后中间产品
  - 基准：每 kg 气相/非溶液处理后中间产品输出，按物质和环境介质分别报告
  - 基准类型：过程输出（`process_output`）
  - 证据类型：采集记录（`collected_record`）

### 过程：储存和工厂门口交付（`storage_dispatch`）

#### 输入

##### 产品流

###### 来自所选保藏路线的中间产品（`selected_route_intermediate`）

记录恰好一条保藏路线的输出，并在批次链接中保留路线标识。

- 选定流：暂时保藏蔬菜，待选择产品特定天工流
- 流属性/单位：Mass / kg
- 数量规则：进入储存的路线输出实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 工厂门口交接参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_selected_route_intermediate`
- 来源：
- 数量范围：代表性批次储存投入强度
  - 范围角色：典型范围（`typical_range`）
  - 下限：声明的代表性批次集合中的观测最小值
  - 上限：声明的代表性批次集合中的观测最大值
  - 单位：kg/kg 参考产品
  - 基准：每 kg 工厂门口交接参考产品
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：采集记录（`collected_record`）

###### 随产品交付的包装（`dispatch_packaging`）

按材料和重复使用状态分别记录随交付产品保留的一次、二次和运输包装。

- 选定流：包装材料，待选择材料特定产品流
- 流属性/单位：Mass / kg
- 数量规则：分配给交付合格产品的采购或领用包装质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 工厂门口交接参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_dispatch_packaging`
- 来源：
- 数量范围：代表性批次包装强度
  - 范围角色：典型范围（`typical_range`）
  - 下限：按包装配置计算的声明代表性批次集合观测最小值
  - 上限：按包装配置计算的声明代表性批次集合观测最大值
  - 单位：kg/kg 参考产品
  - 基准：每 kg 工厂门口交接参考产品，按材料分别报告
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：采集记录（`collected_record`）

###### 实测储存与交付电力（`dispatch_electricity`）

具有代表性电表或经验证的分表分配时使用本行。对同一设备和时间区间，本行与 `unmetered_energy_screening` 互斥。

- 选定流：供电，待选择地理和电压适当的产品流
- 流属性/单位：Energy / kWh
- 数量规则：可归属于储存和交付的实测用电量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 工厂门口交接参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_dispatch_energy`
- 来源：
- 数量范围：代表性批次实测用电强度
  - 范围角色：典型范围（`typical_range`）
  - 下限：代表性储存时长和运行条件分层中的观测最小值
  - 上限：代表性储存时长和运行条件分层中的观测最大值
  - 单位：kWh/kg 参考产品
  - 基准：每 kg 工厂门口交接参考产品
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：采集记录（`collected_record`）

###### 临时无表计能源筛选估算（`unmetered_energy_screening`）

仅在候选筛选阶段使用，且同一设备和时间区间不得已由 `dispatch_electricity` 表示：用设备铭牌功率乘以记录运行小时数和有依据的负载因子，再除以合格输出质量估算用电。本值是临时 `reasoned_estimate`，不是合规值。取得代表性批次计量数据、经验证的设施能源平衡或经评审的可转移证据后必须替换。

- 选定流：供电，待选择地理和电压适当的产品流
- 流属性/单位：Energy / kWh
- 数量规则：sum(铭牌 kW × 记录运行 h × 有依据的负载因子) / 合格参考产品 kg
- 数值来源模式：模型估算（`modelled_estimate`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：声明设备和运行情景下每 kg 工厂门口交接参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：推理估算（`reasoned_estimate`）
- 来源：
- 数量范围：临时设备情景筛选区间
  - 范围角色：不确定性范围（`uncertainty_range`）
  - 下限：声明的合理设备负载情景中的计算最小值
  - 上限：声明的合理设备负载情景中的计算最大值
  - 单位：kWh/kg 参考产品
  - 基准：声明设备、运行小时和储存时长下每 kg 参考产品
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

#### 输出

##### 产品流

###### 工厂门口暂时保藏蔬菜（`reference_product_output`）

这是定量参考输出。代表性番茄数据集使用所选天工流；其他蔬菜在发布前必须使用语义适当的流。

- 选定流：Tomato `4dc258f9-c5fc-47d7-821e-12526fe6b5d7`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：按声明产品质量口径恰好为 1 kg
- 数值来源模式：固定值（`fixed_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：工厂门口交接的 1 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：来源规则（`source_rule`）
- 来源：`eu-pef-2021-2279`
- 数量范围：固定参考流量
  - 范围角色：允许范围（`allowed_range`）
  - 下限：1
  - 上限：1
  - 单位：kg
  - 基准：每参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：来源规则（`source_rule`）
  - 来源：`eu-pef-2021-2279`

## 7. 分配和联产品处理

| rule_id | 适用于 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_avoid` | 路线和过程特定负荷 | 通过分别记录预处理、所选保藏路线、储存和交付，并在可行时对共享操作进行分表或细分来避免分配。 | `eu-pef-2021-2279` |
| `allocation_physical` | 不可分割的共享操作 | 若无法细分，则依据反映因果关系且有记录的相关物理关系进行分配，例如实测运行时间、处理质量，或占用储存容量与时长。报告分配因子和所用全部数量。 | `eu-pef-2021-2279` |
| `allocation_other_relationship` | 其余多功能情形 | 只有在说明为何细分/系统扩展及相关物理关系不可行后，才能使用包括经济分配在内的其他关系；披露价格、期间和敏感性。 | `eu-pef-2021-2279` |
| `allocation_rejects` | 蔬菜拒收物、废保藏溶液和处理残余物 | 除非已证明某股物流具有产品功能和去向，否则将其作为废物并把处理负荷计入前景；默认不得主张避免负荷。 | `eu-pef-2021-2279` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_incoming_vegetable | receipt_preparation | 验收的进厂蔬菜批次 | 收货与秤量记录 | 批次 ID；种类；品种；供应商；进厂状态；毛重；皮重；验收质量；时间戳 | 经校准秤并链接收货记录 | kg | 每批 | 声明的代表性生产期间 | 前景场址的所有供应批次 | 按产品和批次汇总验收质量并归一化至参考输出 | 秤校准；批次追溯；拒收记录 |
| cp_preparation_water | receipt_preparation | 预处理用水 | 水表记录 | 仪表 ID；期初值；期末值；批次 ID；绕开过程的水量 | 经校准仪表或经核验的容器体积日志 | kg | 每批或连续计量区间 | 声明的代表性生产期间 | 范围内所有预处理线 | 扣除单独路由的水并归一化至预处理输出 | 仪表校准或容器核验；批次链接 |
| cp_prepared_vegetable | receipt_preparation | 已预处理蔬菜 | 转移秤记录 | 批次 ID；蔬菜身份；毛重；皮重；净重；目标路线 | 路线转移处经校准秤 | kg | 每次批次转移 | 声明的代表性生产期间 | 范围内所有预处理线 | 按所选路线汇总净转移质量 | 秤校准；路线核对 |
| cp_preparation_rejects | receipt_preparation | 去除的蔬菜物料和拒收物 | 废物日志 | 批次 ID；废物类型；质量；去向；时间戳 | 经校准秤或去向过磅单 | kg | 每次废物转移 | 声明的代表性生产期间 | 范围内所有预处理线 | 按去向分别汇总并归一化至预处理输出 | 秤校准；运输或处理接收单 |
| cp_preparation_wastewater | receipt_preparation | 预处理废水 | 排放和水量平衡记录 | 批次 ID；排放仪表；进水；保留水；夹带固体；去向 | 排放仪表或经验证的输入输出平衡 | kg | 每批或排放区间 | 声明的代表性生产期间 | 范围内所有预处理线 | 实测排放，或进水减实测保留/另行路由量 | 仪表校准；签字质量平衡评审 |
| cp_solution_route_inputs | solution_preservation | 溶液路线蔬菜和配方投入 | 配方和领用记录 | 批次 ID；蔬菜质量；组分 ID；组分质量；浓度口径；补充量；回收回用量 | 经校准加料、秤量和配方控制记录 | kg | 每个溶液批次 | 声明的代表性生产期间 | 范围内每条溶液保藏线 | 分别汇总每种组分；仅扣除实测的同系统回用量 | 秤/加料器校准；批准配方；批次核对 |
| cp_solution_product_mass | solution_preservation | 溶液保藏中间产品 | 产品和介质质量记录 | 批次 ID；蔬菜质量；伴随介质质量；产品质量口径；放行时间戳 | 经校准秤分别测量组分，或经验证的组分质量平衡 | kg | 每次批次放行 | 声明的代表性生产期间 | 范围内每条溶液保藏线 | 仅按声明参考质量口径合并组分 | 校准；批次放行；组分核对 |
| cp_spent_solution | solution_preservation | 废弃或排放的保藏溶液 | 排放和去向记录 | 批次 ID；排放质量；回收质量；处理去向；若测量则记录固体含量 | 经校准罐体/秤记录或经验证的溶液平衡 | kg | 每次排放 | 声明的代表性生产期间 | 范围内每条溶液保藏线 | 按去向汇总排放量并归一化至路线输出 | 校准；平衡闭合；处理接收单 |
| cp_gas_route_inputs | gas_non_solution_preservation | 气相路线蔬菜和处理剂 | 处理批次记录 | 批次 ID；蔬菜质量；处理剂身份；投加质量；载体质量；剂量设定；钢瓶或库存变化 | 经校准秤、加料系统或经核对的钢瓶/库存记录 | kg | 每个处理批次 | 声明的代表性生产期间 | 范围内每条气相/非溶液处理线 | 分别汇总每种处理剂并归一化至处理后输出 | 秤/加料器校准；库存核对；批准处理规范 |
| cp_gas_product_mass | gas_non_solution_preservation | 气相/非溶液处理后中间产品 | 放行秤记录 | 批次 ID；产品身份；毛重；皮重；净重；处理条件 | 处理放行处经校准秤 | kg | 每次批次放行 | 声明的代表性生产期间 | 范围内每条气相/非溶液处理线 | 汇总合格放行质量 | 校准；批次放行记录 |
| cp_treatment_agent_release | gas_non_solution_preservation | 未捕集处理剂直接排放 | 排放测量或处理剂平衡 | 批次 ID；物质；环境介质；投加量；保留量；回收量；捕集量；实测排放；方法 | 可用时直接监测，否则使用经验证的处理剂平衡 | kg | 每批或监测区间 | 声明的代表性生产期间 | 范围内每个排放点 | 按物质和环境介质分别报告；不得把投加量作为排放量 | 监测仪表校准或签字平衡及捕集效率证据 |
| cp_selected_route_intermediate | storage_dispatch | 来自所选路线的中间产品 | 储存接收记录 | 批次 ID；路线 ID；产品身份；蔬菜质量；介质质量；接收总质量；时间戳 | 经校准接收秤和批次链接记录 | kg | 每次储存接收 | 声明的代表性生产期间 | 范围内所有储存接收 | 每批次只接受一个路线 ID 并汇总接收质量 | 秤校准；路线谱系；重复路线检查 |
| cp_dispatch_packaging | storage_dispatch | 随产品交付的包装 | 包装领用记录 | 批次 ID；材料 ID；包装质量；数量；重复使用状态；产品质量 | 采购/领用记录并用抽样称重核验 | kg | 每种包装配置和每批 | 声明的代表性生产期间 | 交付产品使用的全部包装 | 按材料和重复使用状态汇总并归一化至交付产品 | 发票/领用记录；抽样秤校准 |
| cp_dispatch_energy | storage_dispatch | 实测储存和交付电力 | 电表记录 | 仪表 ID；期初值；期末值；区间；批次 ID；储存时长；分配动因 | 经校准专用电表或经验证的分表分配 | kWh | 连续或每个交付区间 | 声明期间内有代表性的季节和运行模式 | 范围内全部储存和交付设备 | 扣除范围外负荷；按有依据的因果动因分配；归一化至交付产品 | 仪表校准；负荷图；分配核对 |
| cp_final_product_mass | storage_dispatch | 工厂门口暂时保藏蔬菜 | 交付秤和放行记录 | 批次 ID；蔬菜身份；路线；产品质量口径；蔬菜质量；介质质量；毛重；皮重；合格净重；门口；时间戳 | 经校准交付秤并链接放行证明 | kg | 每个交付批次 | 声明的代表性生产期间 | 所有合格工厂门口输出 | 按一种声明口径汇总合格质量；所有清单量归一化至 1 kg | 校准；放行证明；路线和配方追溯 |

### 计算规则

| rule_id | 适用于 | 公式或规则 | 输入 | 输出 | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | 每个批次清单量 | 归一化量 = 批次量 / 按声明口径计的工厂门口合格产品质量 × 1 kg | 相应采集协议；cp_final_product_mass | 每 kg 参考产品的量 | `eu-pef-2021-2279` |
| `calc_component_mass` | 发运的溶液路线产品 | 仅当声明质量口径包含伴随介质时，声明产品质量 = 实测蔬菜质量 + 实测伴随介质质量 | cp_solution_product_mass | 声明产品 kg 和单独组分比例 |  |
| `calc_route_mass_balance` | 每个前景过程 | 核对实测输入 = 产品输出 + 废物输出 + 直接排放 + 实测库存变化；报告残差和设施接受理由 | 过程特定质量协议 | 批次质量平衡残差和归一化流 |  |
| `calc_agent_release` | 处理剂直接排放 | 排放 = 投加处理剂 - 产品保留处理剂 - 回收处理剂 - 捕集处理剂 - 期末库存调整，按物质和环境介质分别计算 | cp_gas_route_inputs；cp_treatment_agent_release | kg 直接基本流 |  |
| `calc_unmetered_energy_screening` | 临时候选能源估算 | 估算值 = sum(铭牌功率 × 记录运行时间 × 有依据的负载因子) / 合格产品质量；仅适用于声明设备和运行情景，不得与同区间实测能源同时使用 | 设备铭牌；运行日志；负载因子理由；cp_final_product_mass | 临时 kWh/kg 推理估算 |  |

### 数据质量要求

| requirement_id | 适用于 | 要求 | 证据 |
| --- | --- | --- | --- |
| dq_product_identity | 参考和中间产品流 | 证明蔬菜身份与所选天工流语义匹配。UUID `4dc258f9-c5fc-47d7-821e-12526fe6b5d7` 仅可用于番茄数据集；其他蔬菜发布前需使用适当流。 | 产品规范；流评审；批次谱系 |
| dq_completeness | 前景清单 | 纳入所有已知输入与输出，并记录排除项和质量平衡残差。 | 协议覆盖矩阵；质量平衡；`eu-pef-2021-2279` |
| dq_representativeness | 活动数据 | 声明技术、地理和时间代表性及精度；代表性批次应覆盖声明的运行模式、路线、配方和储存条件。 | 抽样理由；批次清单；DQR 记录；`eu-pef-2021-2279` |
| dq_measurement | 质量、水、处理剂、能源和排放 | 保留校准状态、测量方法、单位换算和批次链接；不得混用毛重、净重和沥干质量口径。 | 校准证书；原始记录；核对表 |
| dq_food_control_records | 配方和保藏控制 | 保留实际产品说明，以及水的适用性、卫生、配方、时间、温度、pH 或其他已识别控制的适用 GHP/HACCP 监控证据。 | 批准规范；控制记录；`codex-cxc-1-1969` |
| dq_reasoned_estimate_replacement | 无表计能源筛选 | 将估算标记为临时且仅限声明设备情景。取得代表性批次计量、经验证的设施能源平衡或经评审的可转移证据后必须替换；发布不得依赖未经评审的临时估算。 | 估算表；替换决定；仪表或评审证据 |

## 9. 验证规则

| rule_id | 适用于 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validate_reference_flow_semantics` | 参考产品流 | 若数据集产品不是番茄而参考产品 UUID 仍为 `4dc258f9-c5fc-47d7-821e-12526fe6b5d7`，则验证失败；发布前必须使用经核验且语义适当的流。 |  |
| `validate_route_exclusivity` | 过程选择 | 每个批次必须在 `solution_preservation` 与 `gas_non_solution_preservation` 中恰好选择一项；未选、两项同时选择或未声明组合路线均失败。 |  |
| `validate_product_state` | 类别适用性 | 要求证明输出为暂时保藏、在当前状态下不适合直接食用并拟进一步加工；否则拒绝 CPC-21330 适用性。 | `unsd-cpc-v3-21330` |
| `validate_reference_mass_basis` | 参考量和归一化量 | 要求声明一种毛重、净重或沥干质量口径，分别记录蔬菜和介质质量，并在所有归一化中一致使用该口径。 |  |
| `validate_inventory_coverage` | 前景过程 | 要求纳入所有已知材料、水、能源、产品、废物和直接基本流，并披露每项排除和数据缺口。 | `eu-pef-2021-2279` |
| `validate_mass_balance` | 每个批次和过程 | 要求数量非负，质量平衡残差处于设施声明的接受准则内；不满足时必须调查并披露。 |  |
| `validate_food_control_evidence` | 适用保藏控制 | 要求提供产品说明、预期用途以及设施 GHP/HACCP 系统定义的适用监控和验证记录。 | `codex-cxc-1-1969` |
| `validate_reasoned_estimate` | 临时无表计能源行 | 要求声明设备、运行小时、负载因子理由、情景上下界、临时状态和替换触发器；若发布时估算仍未经评审则失败。 |  |

## 10. 已发布数据集概况

| 字段 | 值 |
| --- | --- |
| dataset_role | 暂时保藏蔬菜中间产品的前景单元过程数据包 |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | CPC 21330 范围内与声明蔬菜、路线、配方、产品质量口径、储存条件、地理位置及不适合直接食用状态匹配的工厂门口数据集 |
| excluded_use | 新鲜、冷冻、干制、即食或最终保藏蔬菜；未声明组合保藏路线；使用 Tomato UUID 的非番茄数据集；未经进一步评审而对不同产品、质量口径或路线作比较性主张 |
| required_metadata | 蔬菜种类和品种；天工流及语义评审；CPC 参考；路线；配方；蔬菜和介质质量；参考质量口径；批次和场址；地理位置；储存温度与时长；包装；工厂门口；进一步加工要求；时间覆盖；协议覆盖；分配；排除项 |
| required_quality_disclosure | 前景数据覆盖；校准和核对证据；技术、地理和时间代表性；精度；质量平衡残差；食品控制记录；推理估算及替换状态 |
| update_trigger | 蔬菜或天工流变化；路线、处理剂、配方、设备、储存、包装、地理位置或分配变化；代表性批次证据替代估算；CPC、Codex 或 PEF 证据修订；影响范围或控制的评审发现 |

## 11. 数据来源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `unsd-cpc-v3-21330` | standard | 联合国统计司，《中央产品分类》第 3.0 版，子类 21330 及官方解释性说明出版物，https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf（检索日期 2026-08-11） | 分类身份、适用性和产品状态验证 |
| `codex-cxc-1-1969` | standard | Codex Alimentarius，《食品卫生通则》CXC 1-1969，2022 年修订版，https://workspace.fao.org/sites/codex/Standards/CXC%201-1969/CXC_001e.pdf（检索日期 2026-08-11） | 产品和过程说明、GHP/HACCP 控制、水的适用性、监控和记录 |
| `eu-pef-2021-2279` | official_guidance | 欧盟委员会 2021 年 12 月 15 日建议 (EU) 2021/2279，产品环境足迹方法，http://data.europa.eu/eli/reco/2021/2279/2021-12-30（检索日期 2026-08-11） | 功能单位、系统边界、清单完整性、多功能性层级和数据质量 |
