---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.crabs-frozen-dried-salted-or-in-brine
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 冷冻、干制、盐腌或盐水保存的蟹

## 1. 范围与适用性

本 PCR 适用于带壳或去壳、未经烹煮并以一种已声明路线保存销售的蟹：冷冻、干制、干盐腌或盐水保存。前景范围从保存加工设施接收原料起，至包装产品在工厂门口交付止。活蟹、鲜蟹或仅冷藏蟹，以及熟制、熏制、罐藏、调味或其他加工的蟹产品不在范围内。捕捞或养殖、卸岸及进厂运输由上游数据集表示，不在保存加工前景中重复创建。

路线特定作业为条件纳入。数据集不得添加实际未发生的冷冻、干制、盐腌或盐水工艺清单，也不得把互斥路线平均为一种产品；只有实际产品路线有文件证明按顺序使用多种步骤时方可纳入。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.crabs-frozen-dried-salted-or-in-brine |
| classification_refs | CPC 3.0：21251，冷冻、干制、盐腌或盐水保存的蟹（`unsd-cpc-3-0`） |
| covered_products | 带壳或去壳、未经烹煮并通过冷冻、干制、干盐腌或盐水保存的蟹 |
| excluded_products | 活、鲜或冷藏蟹；熟制、熏制、罐藏、调味或其他加工蟹产品；龙虾、虾及其他非蟹类甲壳动物 |
| representative_product | 采用一种已声明路线保存、已包装并准备离开保存加工设施的未烹煮蟹 |
| production_route | 原料蟹接收与准备；一种已声明保存路线；与路线相适应的储存；包装及工厂门口交付 |
| market_state | 冷冻、干制、干盐腌或盐水保存；声明带壳状态和保存路线 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 在保存加工设施门口提供保存的未烹煮蟹 |
| How much | 1 kg 已声明蟹产品净质量 |
| How well | 符合已声明保存路线、带壳状态、产品规格和适用食品安全控制 |
| How long or cycle | 一个生产批次至工厂门口放行；声明储存期限 |
| reference_flow_link | 下述参考产品流实现该功能单位 |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 kg 净质量 |
| 参考产品流 | 螃蟹，冷冻的、干的、盐腌的或盐水的 `43cd42a0-2692-4f75-b26d-223ae1ddc8f3` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 保存路线；蟹种或商业分组；带壳状态；生/未烹煮状态；来源及上游数据集引用；进厂状态；是否施加冰衣及冰衣质量；是否存在盐水及盐水配方/质量；法定净质量口径；相关时的产品水分或盐分规格；储存温度与时长；包装形式；设施、地理范围及基准期 |

构建前景数据包时，`必需限定信息` 中列出的信息必须在数据集元数据、过程说明、参考流备注、产品说明或等效数据包字段中明确声明。缺失必需限定信息的数据包视为参考流定义不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | 参考产品 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 所有结果归一化至工厂门口放行时实测的 1 kg 已声明蟹产品净质量。包装不计入。冰衣和游离覆盖盐水分别记录，并披露二者是否计入法定标示净含量。 |
| `route_mass_accounting` | 蟹与保存介质 | Mass | kg | 分别记录进厂蟹、路线产品、冰衣、盐、加水或盐水、残余物和废水的实测或计算质量；不得从包装总质量反推蟹质量。 |
| `energy_units` | 电力与热能 | Energy | kWh 和 MJ | 分开记录计量电力与燃料或热能。燃料换算为 MJ 时记录换算过程及低位/高位热值口径。 |
| `refrigerant_balance` | 制冷系统 | Mass | kg | 依据有文件支持的充注、补充、回收和期末存量记录计算制冷剂损失；不得把用电量等同于制冷剂排放。 |

## 5. 系统边界

前景起点是保存加工设施接收生蟹或此前已冷藏/冷冻的蟹及辅助材料，终点是已声明保存蟹完成包装并在工厂门口放行。纳入准备、实际保存路线、与路线相适应的储存、包装、水和冰、盐或盐水原料、电力与热能、制冷剂损失、产品损失、残余物、废水以及直接归属于该批次的现场处理。蟹及其他产品投入的上游生产和运输应链接上游数据集。工厂门口之后的分销、零售、使用和生命末期不属于此前景。

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 蟹到达保存加工设施，并声明蟹种/分组、带壳状态、生鲜或此前冷冻/冷藏状态、供应商/卸岸来源、接收质量、接收温度及上游数据集引用 |
| starting_condition_role | 保存加工的前景进入条件；上游捕捞/养殖、卸岸及进厂运输仍由链接的上游数据集表示 |
| product_classification_scope | CPC 3.0 子类 21251 中的未烹煮蟹及本 PCR 所述语义范围 |
| recursive_input_rule | 若接收的投入已属于本 PCR 产品类别，则按其保存状态和上游数据集记录一次上游产品投入，不在当前前景中重建其先前保存清单 |
| upstream_dataset_requirement | 蟹及材料或能源投入需要可追溯上游数据集；披露替代项、地理、时期、技术及未解决缺口 |
| disclosure | 声明实际路线顺序、带壳状态、进厂及最终产品状态、产率、冰衣/盐水处理、储存条件和时长、包装、排除作业、分配、数据缺口及暂定估算 |

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `sb_facility_gate` | 全部数据集 | 纳入从接收到包装产品工厂门口放行的所有可归属前景作业，并为蟹及其他产品投入链接上游数据集。 | `codex-cxc-52-2003`; `eu-pef-2021-2279` |
| `sb_route_exclusivity` | 保存路线 | 仅纳入实际声明的路线步骤；除非有文件证明实际采用连续路线，不得合并互斥的冷冻、干制、干盐腌及盐水清单。 | `codex-cxc-52-2003` |
| `sb_losses_and_controls` | 所有纳入过程 | 实际发生时纳入产品损失、残余物、废水、现场处理、路线控制能源和实测制冷剂损失。 | `codex-cxc-52-2003`; `eu-pef-2021-2279` |
| `sb_food_safety_records` | 保存与储存 | 保留设施 HACCP 或等效食品安全计划所需的路线特定时间、温度、盐/盐水浓度、干制、卫生及纠正措施记录。 | `codex-cxc-52-2003` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `receipt_preparation` | 原料蟹接收与准备 | required | 始终纳入；仅计入实际执行的准备作业 | 建立验收投入、非产品物料去除、清洗和保冷记录 | kg 准备后蟹输出 |
| `route_preservation` | 已声明保存路线 | required | 恰好一种主要路线：冷冻、干制、干盐腌或盐水；仅在实际采用时添加连续步骤 | 产生已声明保存状态 | kg 保存蟹输出 |
| `route_storage` | 与路线相适应的产品储存 | required | 冷冻产品采用冷冻储存；干制、盐腌或盐水产品按声明产品需要采用受控干燥或冷藏储存 | 保持已声明状态直至包装/放行 | kg 储存后保存蟹输出及储存时长 |
| `packaging_dispatch` | 包装与工厂门口放行 | required | 始终纳入 | 包装、标识、称重并放行参考产品 | 1 kg 净参考产品 |

### 过程：原料蟹接收与准备（`receipt_preparation`）

#### 输入

##### 产品流

###### 接收的蟹（`received_crab`）

将供应商或卸岸质量及已声明进厂状态作为上游产品投入记录。

- 选定流：Crabs, raw or previously chilled/frozen
- 流属性/单位：Mass / kg
- 数量规则：实测验收批次质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 准备后蟹输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_batch_mass`
- 来源：`unsd-cpc-3-0`

###### 准备用水（`preparation_water`）

记录为清洗或准备而跨越过程边界的饮用水。

- 选定流：过程用水
- 流属性/单位：Mass / kg
- 数量规则：实测或分配的水表体积按有文件支持的密度换算
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 准备后蟹输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_utilities`
- 数量范围：暂定用水 QA 筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：30
  - 单位：kg/kg 准备后蟹输出
  - 基准：每 kg 准备后蟹输出
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 准备用冰（`preparation_ice`）

记录用于保持产品状态的外购或现场制冰。

- 选定流：Ice
- 流属性/单位：Mass / kg
- 数量规则：实测领用或生产质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 准备后蟹输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_utilities`
- 数量范围：暂定用冰 QA 筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：10
  - 单位：kg/kg 准备后蟹输出
  - 基准：每 kg 准备后蟹输出
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 准备后蟹（`prepared_crab`）

按保存前实测批次输出记录准备后蟹质量。

- 选定流：Prepared uncooked crab
- 流属性/单位：Mass / kg
- 数量规则：实测输出质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：过程输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_batch_mass`

##### 废物流

###### 准备残余物（`preparation_residuals`）

按去向及废物/共产品状态分别记录蟹壳、破损产品、拒收物料和其他残余物。

- 选定流：Crab preparation residuals
- 流属性/单位：Mass / kg
- 数量规则：按去向实测残余物质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 准备后蟹输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_residuals_wastewater`

###### 准备废水（`preparation_wastewater`）

记录排放水和处理去向；有监测时描述相关污染负荷。

- 选定流：Wastewater from seafood preparation
- 流属性/单位：Mass / kg
- 数量规则：实测排放量或有文件支持的水量平衡计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 准备后蟹输出
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_residuals_wastewater`

##### 基本流

### 过程：已声明保存路线（`route_preservation`）

#### 输入

##### 产品流

###### 准备后蟹投入（`preservation_crab_input`）

将实测准备后蟹带入已声明路线，不重复上游准备。

- 选定流：Prepared uncooked crab
- 流属性/单位：Mass / kg
- 数量规则：转移批次质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 保存蟹输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_batch_mass`

###### 盐投入（`preservation_salt`）

仅对干盐腌或盐水路线记录食品级盐，包括配制盐水所用盐。

- 选定流：Sodium chloride, food grade
- 流属性/单位：Mass / kg
- 数量规则：实测盐领用量减有记录的回收未用盐；无盐路线为零
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 kg 保存蟹输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_route_materials_controls`
- 来源：`codex-cxc-52-2003`
- 数量范围：暂定用盐 QA 筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：2
  - 单位：kg/kg 保存蟹输出
  - 基准：每 kg 保存蟹输出
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 保存用水（`preservation_water`）

按用途分别记录盐水、冰衣或路线清洁用水；无相关用水时为零。

- 选定流：过程用水
- 流属性/单位：Mass / kg
- 数量规则：实测，或根据批次配方和水表计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 kg 保存蟹输出
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_route_materials_controls`
- 来源：`codex-cxc-52-2003`

###### 保存用电（`preservation_electricity`）

记录实际使用的路线设备用电，包括冷冻或干制辅助设备。

- 选定流：电力
- 流属性/单位：Energy / kWh
- 数量规则：分表计量或有文件支持的设备分配
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 保存蟹输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_utilities`
- 数量范围：暂定用电 QA 筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：25
  - 单位：kWh/kg 保存蟹输出
  - 基准：每 kg 保存蟹输出
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 保存热能（`preservation_thermal_energy`）

记录干制或其他实际路线加热所用燃料或外供热；无加热时为零。

- 选定流：Thermal energy
- 流属性/单位：Energy / MJ
- 数量规则：计量热量，或燃料量按有文件支持的热值换算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 保存蟹输出
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_utilities`
- 数量范围：暂定热能 QA 筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：100
  - 单位：MJ/kg 保存蟹输出
  - 基准：每 kg 保存蟹输出
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 保存蟹（`preserved_crab`）

记录已声明路线后的输出，并明确冰衣、游离盐水、水分和盐的核算。

- 选定流：Crabs, frozen, dried, salted or in brine
- 流属性/单位：Mass / kg
- 数量规则：储存前实测保存产品质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：过程输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_batch_mass`
- 来源：`codex-cxc-52-2003`

##### 废物流

###### 保存残余物及废水（`preservation_residuals_wastewater`）

在前景记录中按物料和去向分别记录拒收蟹、废盐水或盐、清洁废水和路线残余物。

- 选定流：Preservation residuals and wastewater
- 流属性/单位：Mass / kg
- 数量规则：实测排放及残余物质量，并在源记录中拆分
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 kg 保存蟹输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_residuals_wastewater`
- 数量范围：暂定合并排放 QA 筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：40
  - 单位：kg/kg 保存蟹输出
  - 基准：每 kg 保存蟹输出
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

### 过程：与路线相适应的产品储存（`route_storage`）

#### 输入

##### 产品流

###### 进入储存的保存蟹（`storage_crab_input`）

记录转入与路线相适应储存的保存蟹。

- 选定流：Crabs, frozen, dried, salted or in brine
- 流属性/单位：Mass / kg
- 数量规则：实测转移质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 储存后保存蟹输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_batch_mass`

###### 储存用电（`storage_electricity`）

依据占用量、质量-时间或其他已披露因果驱动因素，从计量储存能耗中分配电力。

- 选定流：电力
- 流属性/单位：Energy / kWh
- 数量规则：计量储存电力按有文件支持的质量-时间或因果驱动因素分配
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 储存产品及已声明储存时长
- 基准类型：储存时长（`storage_duration`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_storage_refrigeration`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 储存后保存蟹（`stored_preserved_crab`）

记录与路线相适应储存后的放行质量，并分别记录储存损失。

- 选定流：Crabs, frozen, dried, salted or in brine
- 流属性/单位：Mass / kg
- 数量规则：实测储存放行质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：过程输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_batch_mass`

##### 废物流

##### 基本流

###### 制冷剂损失（`refrigerant_loss`）

仅对服务于纳入路线或储存的设备记录制冷剂种类和计算损失。

- 选定流：Refrigerant emission, species-specific
- 流属性/单位：Mass / kg
- 数量规则：有文件支持的制冷剂平衡按已披露因果驱动因素分配
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 储存产品及已声明储存时长
- 基准类型：储存时长（`storage_duration`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_storage_refrigeration`

### 过程：包装与工厂门口放行（`packaging_dispatch`）

#### 输入

##### 产品流

###### 储存蟹投入（`packaging_crab_input`）

记录转入最终包装的保存产品。

- 选定流：Crabs, frozen, dried, salted or in brine
- 流属性/单位：Mass / kg
- 数量规则：实测转移质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_batch_mass`

###### 包装材料（`packaging_materials`）

在源记录中分别记录各类初级、次级和三级包装材料。

- 选定流：Packaging material, material-specific
- 流属性/单位：Mass / kg
- 数量规则：实测领用量减退回未用量，并按材料拆分
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging`
- 数量范围：暂定包装质量 QA 筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1
  - 单位：kg/kg 净参考产品
  - 基准：每 kg 净参考产品
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 工厂门口参考产品（`reference_product_output`）

这是唯一的定量参考输出；其净质量不包括包装。

- 选定流：螃蟹，冷冻的、干的、盐腌的或盐水的 `43cd42a0-2692-4f75-b26d-223ae1ddc8f3`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：固定参考量 1 kg 实测产品净质量
- 数值来源模式：固定值（`fixed_value`）
- 适用范围：不适用（`not_applicable`）
- 归一化基准：1 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：身份引用（`identity_reference`）

##### 废物流

###### 包装废物（`packaging_waste`）

按材料和去向分别记录边角料、次品及破损包装。

- 选定流：Packaging waste, material-specific
- 流属性/单位：Mass / kg
- 数量规则：实测包装废物
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging`

##### 基本流

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `alloc_subdivision_first` | 共用过程和互斥路线 | 优先采用过程细分和路线特定计量。能够取得可分离路线记录时，不得分配混合设施清单。 | `eu-pef-2021-2279` |
| `alloc_residual_status` | 蟹壳、拒收蟹、废盐/盐水及其他输出 | 根据有文件支持的所有权、预期用途、处理和经济价值，将各输出分类为产品、共产品、可回收材料或废物。废物处理负担保留在产生该废物的过程中。 | `eu-pef-2021-2279` |
| `alloc_fallback` | 无法避免的多输出过程 | 用尽细分和其他合理规避方式后，采用有文件支持的物理因果关系；如无法论证物理关系，则采用同期价格进行经济分配并开展敏感性分析。 | `eu-pef-2021-2279` |
| `alloc_disclosure` | 所有分配清单 | 报告分配驱动因素、数量、价格或物理参数、时期、所得因子、零价值输出处理及敏感性结果。 | `eu-pef-2021-2279` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_batch_mass` | `receipt_preparation`; `route_preservation`; `route_storage`; `packaging_dispatch` | 蟹投入、转移、输出、冰衣/游离盐水质量及损失 | 称量单和批次记录 | batch_id; route; species/grouping; shell_state; incoming_state; gross_mass; tare; net_crab_mass; glaze_mass; free_brine_mass; output_mass; timestamp; scale_id | 采用校准秤并核对批次记录 | kg | 每批次和每次转移 | 有代表性的连续 12 个月或完整季节性生产期 | 范围内全部设施和生产线 | 按同质路线汇总并归一化至放行净参考产品质量 | 校准证书、签署的批次记录及核对记录 |
| `cp_utilities` | `receipt_preparation`; `route_preservation` | 水、冰、电力、燃料及外供热 | 仪表、发票和设备日志 | meter_id; opening; closing; unit; period; batch_id; equipment; runtime; allocation_driver; heating_value_basis | 优先分表；否则按有文件支持的因果因素从设施仪表分配 | kg; m3; kWh; MJ; fuel unit | 可计量时逐批，否则至少每月 | 与生产相同的代表期 | 全部纳入设备 | 明确换算单位，按因果驱动因素分配并归一化至过程输出 | 仪表校准、发票、运行日志及分配工作表 |
| `cp_route_materials_controls` | `route_preservation` | 盐、盐水、冰衣、路线时间/温度、干制及浓度控制 | 配方、领用、传感器及 HACCP 记录 | route; salt_mass; water_mass; brine_mass; concentration; glaze_mass; start_time; end_time; temperature_series; drying_condition; corrective_action | 称量原料并保留实际路线的经验证控制记录 | kg; concentration unit; °C; h | 每批次 | 完整研究期 | 每条路线和生产线 | 路线分开；按批次计算配方投入并汇总经验证控制 | 校准仪器、批准配方、HACCP 验证及纠正措施日志 |
| `cp_residuals_wastewater` | `receipt_preparation`; `route_preservation` | 残余物、拒收物、废盐水/盐、废水及处理 | 称量、排放仪表、转移联单及分析 | stream_id; material; mass_or_volume; destination; waste_or_coproduct_status; treatment; water_quality_parameter; result; period | 直接称量/计量；仅在无法直接计量时采用有文件支持的水量平衡 | kg; m3; parameter-specific | 每批或每次运输；废水至少每月 | 与生产相同的代表期 | 全部纳入排放点 | 按流和去向汇总并归一化至过程输出 | 废物联单、仪表检查、实验室报告及平衡核对 |
| `cp_storage_refrigeration` | `route_storage` | 储存能耗、时长、条件及制冷剂充注/补充/回收/损失 | 仪表、仓库、温度及维护记录 | storage_zone; product_mass; entry_time; exit_time; temperature_series; electricity; refrigerant_species; opening_charge; top_up; recovered; closing_charge; service_event | 计量储存能耗；计算质量-时间；核对制冷剂平衡 | kWh; kg; kg·day; °C | 连续温度；每月能源；每次维修事件 | 与生产相同的代表期 | 每个纳入储存区域和制冷系统 | 按已披露因果驱动因素分配能源及制冷剂平衡，优先质量-时间 | 仪表检查、温度日志、存量记录及维修证书 |
| `cp_packaging` | `packaging_dispatch` | 包装投入及包装废物 | 物料清单、领用、退回及废物记录 | material_id; material_type; issued_mass; returned_mass; packed_units; net_product_mass; waste_mass; recycled_content | 按包装形式核对物料领用和退回 | kg | 每种形式和生产期 | 与生产相同的代表期 | 范围内全部包装线 | 按材料计算每 kg 净参考产品的净用包装和废物 | 供应商规格、存量核对及秤具检查 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_normalize_reference` | 每个清单行 | 归一化数量 = 可归属行数量 / 放行净参考产品质量 | 可归属行数量；放行净产品 kg | 每 1 kg 参考产品的行数量 |  |
| `calc_route_yield` | 每条已声明路线 | 路线产率 = 放行净参考产品质量 / 验收蟹投入质量；并报告准备、保存中间阶段产率 | 验收蟹；准备后蟹；保存蟹；储存蟹；放行净产品 | 路线及阶段产率 | `codex-cxc-52-2003` |
| `calc_water_balance` | 准备和保存 | 废水估算 = 计量水和冰投入 + 材料所含水 - 产品保留水 - 实测蒸发 - 其他有文件支持的输出；仅在排放未直接计量时使用 | 水、冰、盐水、产品水分、蒸发及输出 | 计算废水质量 |  |
| `calc_refrigerant_balance` | 纳入的制冷 | 损失 = 期初充注 + 补充 - 回收制冷剂 - 期末存量，最低为零，并在分配前与维修记录核对 | 按种类的充注、补充、回收及期末存量 | 按种类的制冷剂损失 |  |
| `calc_allocation` | 无法避免的共用或多输出清单 | 先应用 `alloc_subdivision_first`，随后采用有文件支持的物理因果因子；仅在物理因果无法论证时采用经济因子；因子合计必须为一 | 共用清单；输出量；因果参数或价格 | 分配后清单及因子 | `eu-pef-2021-2279` |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | 产品与路线 | 保留批次、蟹种/分组、带壳状态、实际路线、进厂状态、来源及上游数据集链接。 | 追溯和供应商记录；`unsd-cpc-3-0` |
| `dq_measurement` | 质量、公用工程、温度、浓度及制冷剂 | 使用已校准或验证仪器；保留单位、换算因子、缺失数据处理及仪表分配。 | 校准、仪表、配方、实验室及维护记录 |
| `dq_temporal` | 前景活动 | 覆盖有代表性的连续 12 个月或完整季节性生产期，并披露异常或排除时段。 | 生产日历和完整性报告；`eu-pef-2021-2279` |
| `dq_completeness` | 全部纳入过程 | 核对蟹质量，并在适用时覆盖水、冰、盐/盐水、能源、包装、残余物、废水、储存和制冷剂损失。 | 质量/公用工程平衡及缺口登记；`eu-pef-2021-2279` |
| `dq_route_separation` | 多路线设施 | 保持路线和技术记录分开或记录因果分配；不得采用未解释的混合平均值。 | 路线生产记录和分配工作表 |
| `dq_estimate_replacement` | 暂定 QA 范围 | 所有 `reasoned_estimate` 范围仅作筛查标志而非默认清单值；激活前以经评审的路线/场址证据替换或论证。 | 评审记录及替换证据 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `val_identity` | 参考产品 | 确认 CPC 范围、未烹煮蟹身份、带壳状态、实际保存路线和全部必需限定信息；拒绝已排除的熟制、熏制、罐藏或仅鲜/冷藏产品。 | `unsd-cpc-3-0` |
| `val_reference_mass` | 参考流 | 确认恰有一个 1 kg 净产品质量定量参考输出，使用指定产品流、Mass 属性及单位组 UUID；包装不得计入，并披露冰衣/游离盐水处理。 |  |
| `val_route` | 过程图和清单 | 确认实际路线已声明，且仅纳入适用路线的作业、材料、控制、储存及排放。 | `codex-cxc-52-2003` |
| `val_mass_balance` | 每个过程和批次 | 核对投入、产品输出、保留水/盐、残余物、废水、蒸发和储存损失；调查重大不平衡而非强制闭合。 |  |
| `val_inventory_completeness` | 前景边界 | 确认四个过程角色均有表示，且适用的水、冰、盐/盐水、能源、包装、废水、残余物、现场处理及制冷剂记录存在或明确为零/不适用。 | `eu-pef-2021-2279` |
| `val_food_safety_controls` | 保存与储存 | 确认保留路线特定时间、温度、浓度、干制、卫生、监测及纠正措施证据；本 PCR 不替代设施特定 HACCP 计划。 | `codex-cxc-52-2003` |
| `val_allocation` | 共用及多输出过程 | 确认优先尝试细分，且剩余物理或经济分配有文件支持、因子合计为一并按要求开展敏感性分析。 | `eu-pef-2021-2279` |
| `val_provisional_ranges` | 全部推理估算 | 标记超出暂定 QA 范围的数值及把暂定范围用作默认值的任何情况；标记要求评审，本身不证明不符合。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 保存加工设施门口保存的未烹煮蟹前景生产数据集 |
| downstream_use | `secondary_dataset`；经评审和发布后可作 `background_dataset` |
| allowed_use | 保留已声明限定信息和边界、在路线、地理、技术及时期上有代表性的过程或生命周期模型 |
| excluded_use | 活/鲜/冷藏、熟制、熏制、罐藏或其他蟹产品；另一保存路线；未披露路线混合；未经代表性评审的地理或技术 |
| required_metadata | PCR id/版本；产品及路线限定信息；设施/地理；基准期；上游数据集链接；过程图；储存时长/条件；包装；分配；数据质量评价 |
| required_quality_disclosure | 一手数据覆盖率；质量和公用工程核对；缺失数据；暂定估算；仪器质量；分配和敏感性；排除作业；路线和季节代表性 |
| update_trigger | 路线、配方、设备、能源供应、制冷剂、产率、包装、供应商/来源、分配、法规或证据发生重大变化，或数据超出已声明代表期 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `unsd-cpc-3-0` | official_guidance | 联合国统计司，《Central Product Classification Version 3.0》子类 21251 解释性注释，https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf（检索日期 2026-08-11） | 产品类别范围、纳入项及排除项 |
| `codex-cxc-52-2003` | standard | Codex Alimentarius，CXC 52-2003，《Code of Practice for Fish and Fishery Products》，https://www.fao.org/4/a1553e/a1553e00.pdf（检索日期 2026-08-11） | 设施过程分解；冷冻、盐腌/盐水、干制、储存、包装、卫生、监测及食品安全控制记录 |
| `eu-pef-2021-2279` | official_guidance | 欧盟委员会建议（EU）2021/2279，环境足迹方法，CELEX 32021H2279，https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32021H2279（检索日期 2026-08-11） | 边界完整性、企业特定数据质量、多功能性层级、分配披露及评审要求 |
