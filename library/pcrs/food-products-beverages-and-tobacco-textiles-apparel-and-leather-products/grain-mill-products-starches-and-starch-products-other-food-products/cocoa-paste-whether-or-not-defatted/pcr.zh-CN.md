---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.grain-mill-products-starches-and-starch-products-other-food-products.cocoa-paste-whether-or-not-defatted
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 可可浆（脱脂或未脱脂）

## 1. 范围与适用性

本 PCR 适用于以可可碎粒制成可可浆的前景数据包，无论可可浆保留其天然可可脂，还是经部分脱脂但仍保持浆状产品形态。范围涵盖从工厂接收商品级可可豆或外购可可碎粒开始，经预处理、研磨、可选碱化、可选压榨或其他脱脂、调温、储存和包装，直至工厂门。

前景边界不包括原产地的可可种植、发酵和干燥，不包括所声明工厂门之前的入厂运输、外购配料和包装材料的制造、成品可可浆的配送、巧克力制造、消费者使用和生命末期。当研究目标超出从门到门生产时，这些被排除的生命周期阶段须链接上游或下游数据集。

作为可销售共产品回收的可可脂应纳入。可可饼、可可粉、成品巧克力、加糖可可制品、以可可脂作为唯一参考产品的产品以及仅处理废物的数据集均不在本 PCR 范围内。即使产品源自可可浆，一旦被压制成固态饼或粉碎成粉末，也不属于本 PCR。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.grain-mill-products-starches-and-starch-products-other-food-products.cocoa-paste-whether-or-not-defatted |
| classification_refs | CPC 3.0：23610 可可浆（脱脂或未脱脂） |
| covered_products | 不加糖可可浆、cocoa liquor、chocolate liquor、cocoa paste，以及仍保持浆状的部分脱脂可可浆 |
| excluded_products | 可可饼；可可粉；以可可脂作为唯一参考产品的产品；加糖可可制品；巧克力和巧克力产品；可可壳产品 |
| representative_product | 制造厂门处散装不加糖可可浆，已测定可可脂含量并声明脱脂状态 |
| production_route | 接收商品级可可豆或可可碎粒；按条件清理、焙炒、破碎和风选；研磨和精炼；按条件碱化；按条件脱脂并回收可可脂；调温、储存和包装 |
| market_state | 工厂门处散装或已包装浆状产品；声明水分、可可脂含量、碱化状态、焙炒路线、包装状态以及产品温度或调温状态 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 适合销售或转入后续可可或巧克力制造的可可浆 |
| How much | 所声明工厂门处 1,000 kg 净可可浆 |
| How well | 符合所声明的产品规格和市场要求；保持浆状而非可可饼或可可粉；声明脱脂和碱化状态 |
| How long or cycle | 在工厂门交付的一个生产批次或一个报告期汇总量；无服务期限 |
| reference_flow_link | 扣除不合格物料和包装皮重后的合格净可可浆产出质量 |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1,000 kg |
| 参考产品流 | Cocoa paste, whether or not defatted `5b331659-2216-4cc7-9e6d-11bb0b50226f` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 可可脂质量分数；脱脂状态和技术；整豆或外购碎粒起始路线；焙炒状态；碱化状态和碱化剂；水分基准；产品物态；包装状态；地域；技术；参考期 |

构建前景数据包时，`必需限定信息` 中列出的信息须在数据集元数据、过程说明、参考流备注、产品说明或等效数据包字段中明确声明。缺失必需限定信息的数据包视为参考流定义不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | 参考产品以及所有按质量归一化的清单行 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 报告扣除包装皮重后的净质量，并将前景清单归一化到 1,000 kg 合格可可浆产出。 |
| `moisture_basis` | 可可豆、碎粒、可可浆、可可脂、拒收物和质量平衡检查 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 记录每股物料流的湿质量以及水分或固形物基准；未经换算，不得比较或分配干基质量与接收状态质量。 |
| `energy_units` | 电网电力、外购蒸汽、外购热水、天然气、柴油和 LPG 清单行 | Energy；UUID unresolved | 电力用 kWh；每种热力或燃料载体用 MJ | 保留每种载体的实测单位和换算因子；不得将电力、蒸汽、热水或燃料汇总为热能总量。 |
| `fat_content_basis` | 可可脂含量和脱脂收率 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg/kg 或 % m/m | 声明可可脂含量按接收状态还是干基测定，并保留实验室方法和样品标识。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 前景工厂门接收的商品级可可豆或可可碎粒，并声明供应商、产地、水分、豆或碎粒状态及上游数据集引用 |
| starting_condition_role | 前景可可浆制造系统的首个技术领域物料投入 |
| product_classification_scope | 可可浆（脱脂或未脱脂）；CPC 3.0 代码 23610 仅为分类上下文，不能替代语义产品边界 |
| recursive_input_rule | 同一产品类别的外购可可浆作为投入记录并链接上游可可浆数据集；不得在接收过程中重复构建其制造过程 |
| upstream_dataset_requirement | 当研究范围超出前景工厂门时，将可可豆或碎粒生产、外购可可浆、能源载体、供水、碱化剂、包装、运输和废物处理链接到地域和时间适宜的上游数据集 |
| disclosure | 声明起始物料、产地和供应商组合、焙炒和碱化路线、脱脂技术、可可脂共产品处理、内部再循环物料、排除项、截断、地域、技术和参考期 |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `boundary_foreground_operations` | 所有前景过程 | 纳入从所声明起始条件至工厂门参考产品之间发生的全部自营预处理、研磨、碱化、脱脂、调温、储存、包装、清洁、公用工程使用、直接排放、废物和共产品。 | `eu-jrc-fdm-bref-2019` |
| `boundary_upstream_links` | 外购物料、公用工程、运输和处理服务 | 被排除的上游生产不计入前景清单，但当生成从摇篮到工厂门或更宽范围的结果时，须提供显式链接数据集，并披露代理数据或数据缺口。 | `eu-pef-recommendation-2021-2279` |
| `boundary_cutoff` | 前景排除项 | 可可物料、能源、水、碱化剂、包装、可销售共产品、废物、废水和直接排放不得截断；任何其他排除项均须明确说明、给出理由，并证明满足所声明研究方法的累计物料、能源和环境显著性筛选要求。 | `eu-pef-recommendation-2021-2279` |
| `boundary_internal_recycling` | 返工可可浆和内部再循环可可物料 | 记录内部再循环且不得重复计算上游生产；披露库存变化和损失，并确保同一质量不同时计作新鲜投入和再循环投入。 | `mass-balance-identity` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `bean_to_nib_preparation` | 可可豆预处理至碎粒 | `conditional` | 整粒可可豆进入前景工厂时必须纳入；若起始条件为有记录的外购可可碎粒则省略 | 前景物料预处理 | kg 预处理后可可碎粒 |
| `nib_grinding_paste_manufacture` | 碎粒研磨与可可浆制造 | `required` | 从碎粒制造可可浆时始终纳入；外购同类别可可浆遵循递归投入规则 | 前景可可浆生产 | kg 可可浆中间产品 |
| `paste_defatting` | 可可浆脱脂与可可脂分离 | `conditional` | 前景工厂内从可可浆去除可可脂时纳入 | 前景分离与共产品生产 | kg 可可浆进料及各可销售输出 |
| `paste_finishing_packing` | 可可浆整理、储存与包装 | `required` | 始终纳入直至工厂门净参考产品计量 | 前景成品处理 | 1,000 kg 合格可可浆 |
| `plant_cleaning_sanitation` | 工厂清洗与消毒 | `required` | 始终纳入可归属的工厂消毒；每种化学品和热载体仅在实际使用时适用 | 前景卫生支持 | 每 1,000 kg 净参考产品 |
| `onsite_wastewater_treatment` | 场内废水处理 | `conditional` | 可可加工废水在排放或转移前于场内处理时纳入 | 前景污染控制 | kg 已处理均质可可加工废水 |

### 过程：可可豆预处理至碎粒（`bean_to_nib_preparation`）

#### 输入

##### 产品流

###### 可可豆预处理至碎粒—可可豆（`cocoa_beans_input`）

“可可豆”作为一个独立产品流进入“可可豆预处理至碎粒”过程边界；数量须按 `cp_bean_preparation_records` 取得，未发生时以过程证据记录不适用。

- 选定流：Cocoa beans
- 流属性/单位：Mass 93a60a56-a3c8-11da-a746-0800200b9a66 / kg
- 数量规则：实测可可豆数量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 预处理可可碎粒输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_bean_preparation_records`
- 来源：`codex-cxs-141-1983-2025`; `eu-jrc-fdm-bref-2019`

###### 可可豆预处理至碎粒—电网电力（`preparation_grid_electricity_input`）

“电网电力”作为一个独立产品流进入“可可豆预处理至碎粒”过程边界；数量须按 `cp_bean_preparation_records` 取得，未发生时以过程证据记录不适用。

- 选定流：Electricity, grid supply
- 流属性/单位：Energy / kWh; flow property and unit-group UUIDs unresolved
- 数量规则：实测电网电力数量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 预处理可可碎粒输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_bean_preparation_records`
- 来源：`eu-jrc-fdm-bref-2019`

###### 可可豆预处理至碎粒—外购蒸汽（`preparation_purchased_steam_input`）

“外购蒸汽”作为一个独立产品流进入“可可豆预处理至碎粒”过程边界；数量须按 `cp_bean_preparation_records` 取得，未发生时以过程证据记录不适用。

- 选定流：Steam, purchased
- 流属性/单位：Energy / MJ; flow property and unit-group UUIDs unresolved
- 数量规则：实测外购蒸汽数量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 预处理可可碎粒输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_bean_preparation_records`
- 来源：`eu-jrc-fdm-bref-2019`

###### 可可豆预处理至碎粒—外购热水（`preparation_purchased_hot_water_input`）

“外购热水”作为一个独立产品流进入“可可豆预处理至碎粒”过程边界；数量须按 `cp_bean_preparation_records` 取得，未发生时以过程证据记录不适用。

- 选定流：Hot water, purchased
- 流属性/单位：Energy / MJ; flow property and unit-group UUIDs unresolved
- 数量规则：实测外购热水数量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 预处理可可碎粒输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_bean_preparation_records`
- 来源：`eu-jrc-fdm-bref-2019`

###### 可可豆预处理至碎粒—天然气（`preparation_natural_gas_input`）

“天然气”作为一个独立产品流进入“可可豆预处理至碎粒”过程边界；数量须按 `cp_bean_preparation_records` 取得，未发生时以过程证据记录不适用。

- 选定流：Natural gas
- 流属性/单位：Energy / MJ; flow property and unit-group UUIDs unresolved
- 数量规则：实测天然气数量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 预处理可可碎粒输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_bean_preparation_records`
- 来源：`eu-jrc-fdm-bref-2019`

###### 可可豆预处理至碎粒—柴油（`preparation_diesel_input`）

“柴油”作为一个独立产品流进入“可可豆预处理至碎粒”过程边界；数量须按 `cp_bean_preparation_records` 取得，未发生时以过程证据记录不适用。

- 选定流：Diesel fuel
- 流属性/单位：Energy / MJ; flow property and unit-group UUIDs unresolved
- 数量规则：实测柴油数量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 预处理可可碎粒输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_bean_preparation_records`
- 来源：`eu-jrc-fdm-bref-2019`

###### 可可豆预处理至碎粒—液化石油气（`preparation_lpg_input`）

“液化石油气”作为一个独立产品流进入“可可豆预处理至碎粒”过程边界；数量须按 `cp_bean_preparation_records` 取得，未发生时以过程证据记录不适用。

- 选定流：Liquefied petroleum gas
- 流属性/单位：Energy / MJ; flow property and unit-group UUIDs unresolved
- 数量规则：实测液化石油气数量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 预处理可可碎粒输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_bean_preparation_records`
- 来源：`eu-jrc-fdm-bref-2019`

###### 可可豆预处理至碎粒—工艺水（`preparation_process_water_input`）

“工艺水”作为一个独立产品流进入“可可豆预处理至碎粒”过程边界；数量须按 `cp_bean_preparation_records` 取得，未发生时以过程证据记录不适用。

- 选定流：Process water
- 流属性/单位：Mass 93a60a56-a3c8-11da-a746-0800200b9a66 / kg
- 数量规则：实测工艺水数量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 预处理可可碎粒输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_bean_preparation_records`
- 来源：`eu-jrc-fdm-bref-2019`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 可可豆预处理至碎粒—可可碎粒（`prepared_cocoa_nibs_output`）

“可可碎粒”作为一个独立产品流离开“可可豆预处理至碎粒”过程边界；数量须按 `cp_bean_preparation_records` 取得，未发生时以过程证据记录不适用。

- 选定流：Cocoa nibs
- 流属性/单位：Mass 93a60a56-a3c8-11da-a746-0800200b9a66 / kg
- 数量规则：实测可可碎粒数量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 预处理可可碎粒输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_bean_preparation_records`
- 来源：`eu-jrc-fdm-bref-2019`

###### 可可豆预处理至碎粒—进一步加工用可可壳（`cocoa_shell_coproduct_output`）

“进一步加工用可可壳”作为一个独立产品流离开“可可豆预处理至碎粒”过程边界；数量须按 `cp_bean_preparation_records` 取得，未发生时以过程证据记录不适用。

- 选定流：Cocoa shells for further processing
- 流属性/单位：Mass 93a60a56-a3c8-11da-a746-0800200b9a66 / kg
- 数量规则：实测进一步加工用可可壳数量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 预处理可可碎粒输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_bean_preparation_records`
- 来源：`eu-jrc-fdm-bref-2019`

##### 废物流

###### 可可豆预处理至碎粒—废可可壳（`cocoa_shell_waste_output`）

“废可可壳”作为一个独立废物流离开“可可豆预处理至碎粒”过程边界；数量须按 `cp_bean_preparation_records` 取得，未发生时以过程证据记录不适用。

- 选定流：Waste cocoa shells
- 流属性/单位：Mass 93a60a56-a3c8-11da-a746-0800200b9a66 / kg
- 数量规则：实测废可可壳数量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 预处理可可碎粒输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_bean_preparation_records`
- 来源：`eu-jrc-fdm-bref-2019`

###### 可可豆预处理至碎粒—可可豆清理废石块（`stone_reject_waste_output`）

“可可豆清理废石块”作为一个独立废物流离开“可可豆预处理至碎粒”过程边界；数量须按 `cp_bean_preparation_records` 取得，未发生时以过程证据记录不适用。

- 选定流：Waste stones from cocoa-bean cleaning
- 流属性/单位：Mass 93a60a56-a3c8-11da-a746-0800200b9a66 / kg
- 数量规则：实测可可豆清理废石块数量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 预处理可可碎粒输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_bean_preparation_records`
- 来源：`eu-jrc-fdm-bref-2019`

###### 可可豆预处理至碎粒—废弃可可豆（`rejected_cocoa_beans_waste_output`）

“废弃可可豆”作为一个独立废物流离开“可可豆预处理至碎粒”过程边界；数量须按 `cp_bean_preparation_records` 取得，未发生时以过程证据记录不适用。

- 选定流：Waste rejected cocoa beans
- 流属性/单位：Mass 93a60a56-a3c8-11da-a746-0800200b9a66 / kg
- 数量规则：实测废弃可可豆数量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 预处理可可碎粒输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_bean_preparation_records`
- 来源：`eu-jrc-fdm-bref-2019`

###### 可可豆预处理至碎粒—收集的废可可粉尘（`cocoa_dust_waste_output`）

“收集的废可可粉尘”作为一个独立废物流离开“可可豆预处理至碎粒”过程边界；数量须按 `cp_bean_preparation_records` 取得，未发生时以过程证据记录不适用。

- 选定流：Waste collected cocoa dust
- 流属性/单位：Mass 93a60a56-a3c8-11da-a746-0800200b9a66 / kg
- 数量规则：实测收集的废可可粉尘数量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 预处理可可碎粒输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_bean_preparation_records`
- 来源：`eu-jrc-fdm-bref-2019`

###### 可可豆预处理至碎粒—可可豆预处理废水（`preparation_wastewater_output`）

“可可豆预处理废水”作为一个独立废物流离开“可可豆预处理至碎粒”过程边界；数量须按 `cp_bean_preparation_records` 取得，未发生时以过程证据记录不适用。

- 选定流：Wastewater from cocoa-bean preparation
- 流属性/单位：Mass 93a60a56-a3c8-11da-a746-0800200b9a66 / kg
- 数量规则：依据采集记录计算可可豆预处理废水数量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 预处理可可碎粒输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_bean_preparation_records`
- 来源：`eu-jrc-fdm-bref-2019`; `mass-balance-identity`

##### 基本流

###### 可可豆预处理至碎粒—排放至空气的化石二氧化碳（`preparation_fossil_co2_air_output`）

“排放至空气的化石二氧化碳”作为一个独立基本流离开“可可豆预处理至碎粒”过程边界；数量须按 `cp_bean_preparation_records` 取得，未发生时以过程证据记录不适用。

- 选定流：Carbon dioxide, fossil, to air
- 流属性/单位：Mass 93a60a56-a3c8-11da-a746-0800200b9a66 / kg
- 数量规则：依据采集记录计算排放至空气的化石二氧化碳数量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 预处理可可碎粒输出
- 基准类型：燃料清单（`fuel_inventory`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_bean_preparation_records`
- 来源：`eu-jrc-fdm-bref-2019`

###### 可可豆预处理至碎粒—排放至空气的氮氧化物（`preparation_nox_air_output`）

“排放至空气的氮氧化物”作为一个独立基本流离开“可可豆预处理至碎粒”过程边界；数量须按 `cp_bean_preparation_records` 取得，未发生时以过程证据记录不适用。

- 选定流：Nitrogen oxides to air
- 流属性/单位：Mass 93a60a56-a3c8-11da-a746-0800200b9a66 / kg
- 数量规则：依据采集记录计算排放至空气的氮氧化物数量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 预处理可可碎粒输出
- 基准类型：燃料清单（`fuel_inventory`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_bean_preparation_records`
- 来源：`eu-jrc-fdm-bref-2019`

###### 可可豆预处理至碎粒—排放至空气的硫氧化物（`preparation_sox_air_output`）

“排放至空气的硫氧化物”作为一个独立基本流离开“可可豆预处理至碎粒”过程边界；数量须按 `cp_bean_preparation_records` 取得，未发生时以过程证据记录不适用。

- 选定流：Sulfur oxides to air
- 流属性/单位：Mass 93a60a56-a3c8-11da-a746-0800200b9a66 / kg
- 数量规则：依据采集记录计算排放至空气的硫氧化物数量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 预处理可可碎粒输出
- 基准类型：燃料清单（`fuel_inventory`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_bean_preparation_records`
- 来源：`eu-jrc-fdm-bref-2019`

###### 可可豆预处理至碎粒—排放至空气的 PM2.5（`preparation_pm25_air_output`）

“排放至空气的 PM2.5”作为一个独立基本流离开“可可豆预处理至碎粒”过程边界；数量须按 `cp_bean_preparation_records` 取得，未发生时以过程证据记录不适用。

- 选定流：Particulate matter, less than 2.5 micrometres, to air
- 流属性/单位：Mass 93a60a56-a3c8-11da-a746-0800200b9a66 / kg
- 数量规则：依据采集记录计算排放至空气的 PM2.5数量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 预处理可可碎粒输出
- 基准类型：燃料清单（`fuel_inventory`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_bean_preparation_records`
- 来源：`eu-jrc-fdm-bref-2019`

### 过程：碎粒研磨与可可浆制造（`nib_grinding_paste_manufacture`）

#### 输入

##### 产品流

###### 碎粒研磨与可可浆制造—可可碎粒（`prepared_cocoa_nibs_input`）

“可可碎粒”作为一个独立产品流进入“碎粒研磨与可可浆制造”过程边界；数量须按 `cp_grinding_records` 取得，未发生时以过程证据记录不适用。

- 选定流：Cocoa nibs
- 流属性/单位：Mass 93a60a56-a3c8-11da-a746-0800200b9a66 / kg
- 数量规则：实测可可碎粒数量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 可可浆中间产品输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_grinding_records`
- 来源：`eu-jrc-fdm-bref-2019`

###### 碎粒研磨与可可浆制造—外购可可碎粒（`purchased_cocoa_nibs_input`）

“外购可可碎粒”作为一个独立产品流进入“碎粒研磨与可可浆制造”过程边界；数量须按 `cp_grinding_records` 取得，未发生时以过程证据记录不适用。

- 选定流：Cocoa nibs, purchased
- 流属性/单位：Mass 93a60a56-a3c8-11da-a746-0800200b9a66 / kg
- 数量规则：实测外购可可碎粒数量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 可可浆中间产品输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_grinding_records`
- 来源：`codex-cxs-141-1983-2025`; `eu-jrc-fdm-bref-2019`

###### 碎粒研磨与可可浆制造—电网电力（`grinding_grid_electricity_input`）

“电网电力”作为一个独立产品流进入“碎粒研磨与可可浆制造”过程边界；数量须按 `cp_grinding_records` 取得，未发生时以过程证据记录不适用。

- 选定流：Electricity, grid supply
- 流属性/单位：Energy / kWh; flow property and unit-group UUIDs unresolved
- 数量规则：实测电网电力数量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 可可浆中间产品输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_grinding_records`
- 来源：`eu-jrc-fdm-bref-2019`

###### 碎粒研磨与可可浆制造—外购蒸汽（`grinding_purchased_steam_input`）

“外购蒸汽”作为一个独立产品流进入“碎粒研磨与可可浆制造”过程边界；数量须按 `cp_grinding_records` 取得，未发生时以过程证据记录不适用。

- 选定流：Steam, purchased
- 流属性/单位：Energy / MJ; flow property and unit-group UUIDs unresolved
- 数量规则：实测外购蒸汽数量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 可可浆中间产品输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_grinding_records`
- 来源：`eu-jrc-fdm-bref-2019`

###### 碎粒研磨与可可浆制造—外购热水（`grinding_purchased_hot_water_input`）

“外购热水”作为一个独立产品流进入“碎粒研磨与可可浆制造”过程边界；数量须按 `cp_grinding_records` 取得，未发生时以过程证据记录不适用。

- 选定流：Hot water, purchased
- 流属性/单位：Energy / MJ; flow property and unit-group UUIDs unresolved
- 数量规则：实测外购热水数量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 可可浆中间产品输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_grinding_records`
- 来源：`eu-jrc-fdm-bref-2019`

###### 碎粒研磨与可可浆制造—工艺水（`grinding_process_water_input`）

“工艺水”作为一个独立产品流进入“碎粒研磨与可可浆制造”过程边界；数量须按 `cp_grinding_records` 取得，未发生时以过程证据记录不适用。

- 选定流：Process water
- 流属性/单位：Mass 93a60a56-a3c8-11da-a746-0800200b9a66 / kg
- 数量规则：实测工艺水数量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 可可浆中间产品输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_grinding_records`
- 来源：`eu-jrc-fdm-bref-2019`

###### 碎粒研磨与可可浆制造—碳酸钾（`potassium_carbonate_input`）

“碳酸钾”作为一个独立产品流进入“碎粒研磨与可可浆制造”过程边界；数量须按 `cp_grinding_records` 取得，未发生时以过程证据记录不适用。

- 选定流：Potassium carbonate
- 流属性/单位：Mass 93a60a56-a3c8-11da-a746-0800200b9a66 / kg
- 数量规则：实测碳酸钾数量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 可可浆中间产品输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_grinding_records`
- 来源：`codex-cxs-141-1983-2025`; `eu-jrc-fdm-bref-2019`

###### 碎粒研磨与可可浆制造—碳酸钠（`sodium_carbonate_input`）

“碳酸钠”作为一个独立产品流进入“碎粒研磨与可可浆制造”过程边界；数量须按 `cp_grinding_records` 取得，未发生时以过程证据记录不适用。

- 选定流：Sodium carbonate
- 流属性/单位：Mass 93a60a56-a3c8-11da-a746-0800200b9a66 / kg
- 数量规则：实测碳酸钠数量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 可可浆中间产品输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_grinding_records`
- 来源：`codex-cxs-141-1983-2025`; `eu-jrc-fdm-bref-2019`

###### 碎粒研磨与可可浆制造—氢氧化钾（`potassium_hydroxide_input`）

“氢氧化钾”作为一个独立产品流进入“碎粒研磨与可可浆制造”过程边界；数量须按 `cp_grinding_records` 取得，未发生时以过程证据记录不适用。

- 选定流：Potassium hydroxide
- 流属性/单位：Mass 93a60a56-a3c8-11da-a746-0800200b9a66 / kg
- 数量规则：实测氢氧化钾数量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 可可浆中间产品输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_grinding_records`
- 来源：`codex-cxs-141-1983-2025`; `eu-jrc-fdm-bref-2019`

###### 碎粒研磨与可可浆制造—氢氧化钠（`sodium_hydroxide_alkalising_input`）

“氢氧化钠”作为一个独立产品流进入“碎粒研磨与可可浆制造”过程边界；数量须按 `cp_grinding_records` 取得，未发生时以过程证据记录不适用。

- 选定流：Sodium hydroxide
- 流属性/单位：Mass 93a60a56-a3c8-11da-a746-0800200b9a66 / kg
- 数量规则：实测氢氧化钠数量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 可可浆中间产品输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_grinding_records`
- 来源：`codex-cxs-141-1983-2025`; `eu-jrc-fdm-bref-2019`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 碎粒研磨与可可浆制造—可可浆中间产品（`cocoa_paste_intermediate_output`）

“可可浆中间产品”作为一个独立产品流离开“碎粒研磨与可可浆制造”过程边界；数量须按 `cp_grinding_records` 取得，未发生时以过程证据记录不适用。

- 选定流：Cocoa paste intermediate
- 流属性/单位：Mass 93a60a56-a3c8-11da-a746-0800200b9a66 / kg
- 数量规则：实测可可浆中间产品数量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 可可浆中间产品输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_grinding_records`
- 来源：`codex-cxs-141-1983-2025`; `eu-jrc-fdm-bref-2019`

##### 废物流

###### 碎粒研磨与可可浆制造—废可可研磨过滤残渣（`grinding_filter_residue_waste_output`）

“废可可研磨过滤残渣”作为一个独立废物流离开“碎粒研磨与可可浆制造”过程边界；数量须按 `cp_grinding_records` 取得，未发生时以过程证据记录不适用。

- 选定流：Waste cocoa grinding filter residue
- 流属性/单位：Mass 93a60a56-a3c8-11da-a746-0800200b9a66 / kg
- 数量规则：实测废可可研磨过滤残渣数量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 可可浆中间产品输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_grinding_records`
- 来源：`eu-jrc-fdm-bref-2019`

###### 碎粒研磨与可可浆制造—废弃可可溢洒料（`grinding_spill_waste_output`）

“废弃可可溢洒料”作为一个独立废物流离开“碎粒研磨与可可浆制造”过程边界；数量须按 `cp_grinding_records` 取得，未发生时以过程证据记录不适用。

- 选定流：Waste spilled cocoa material
- 流属性/单位：Mass 93a60a56-a3c8-11da-a746-0800200b9a66 / kg
- 数量规则：实测废弃可可溢洒料数量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 可可浆中间产品输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_grinding_records`
- 来源：`eu-jrc-fdm-bref-2019`

###### 碎粒研磨与可可浆制造—研磨工序废不合格可可浆（`grinding_off_spec_paste_waste_output`）

“研磨工序废不合格可可浆”作为一个独立废物流离开“碎粒研磨与可可浆制造”过程边界；数量须按 `cp_grinding_records` 取得，未发生时以过程证据记录不适用。

- 选定流：Waste off-spec cocoa paste from grinding
- 流属性/单位：Mass 93a60a56-a3c8-11da-a746-0800200b9a66 / kg
- 数量规则：实测研磨工序废不合格可可浆数量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 可可浆中间产品输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_grinding_records`
- 来源：`eu-jrc-fdm-bref-2019`

###### 碎粒研磨与可可浆制造—可可碎粒研磨废水（`grinding_wastewater_output`）

“可可碎粒研磨废水”作为一个独立废物流离开“碎粒研磨与可可浆制造”过程边界；数量须按 `cp_grinding_records` 取得，未发生时以过程证据记录不适用。

- 选定流：Wastewater from cocoa nib grinding
- 流属性/单位：Mass 93a60a56-a3c8-11da-a746-0800200b9a66 / kg
- 数量规则：依据采集记录计算可可碎粒研磨废水数量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 可可浆中间产品输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_grinding_records`
- 来源：`eu-jrc-fdm-bref-2019`; `mass-balance-identity`

##### 基本流

### 过程：可可浆脱脂与可可脂分离（`paste_defatting`）

#### 输入

##### 产品流

###### 可可浆脱脂与可可脂分离—可可浆中间产品（`cocoa_paste_to_press_input`）

“可可浆中间产品”作为一个独立产品流进入“可可浆脱脂与可可脂分离”过程边界；数量须按 `cp_defatting_records` 取得，未发生时以过程证据记录不适用。

- 选定流：Cocoa paste intermediate
- 流属性/单位：Mass 93a60a56-a3c8-11da-a746-0800200b9a66 / kg
- 数量规则：实测可可浆中间产品数量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 进入脱脂的可可浆
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_defatting_records`
- 来源：`codex-cxs-141-1983-2025`; `eu-jrc-fdm-bref-2019`

###### 可可浆脱脂与可可脂分离—电网电力（`defatting_grid_electricity_input`）

“电网电力”作为一个独立产品流进入“可可浆脱脂与可可脂分离”过程边界；数量须按 `cp_defatting_records` 取得，未发生时以过程证据记录不适用。

- 选定流：Electricity, grid supply
- 流属性/单位：Energy / kWh; flow property and unit-group UUIDs unresolved
- 数量规则：实测电网电力数量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 进入脱脂的可可浆
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_defatting_records`
- 来源：`eu-jrc-fdm-bref-2019`

###### 可可浆脱脂与可可脂分离—外购蒸汽（`defatting_purchased_steam_input`）

“外购蒸汽”作为一个独立产品流进入“可可浆脱脂与可可脂分离”过程边界；数量须按 `cp_defatting_records` 取得，未发生时以过程证据记录不适用。

- 选定流：Steam, purchased
- 流属性/单位：Energy / MJ; flow property and unit-group UUIDs unresolved
- 数量规则：实测外购蒸汽数量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 进入脱脂的可可浆
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_defatting_records`
- 来源：`eu-jrc-fdm-bref-2019`

###### 可可浆脱脂与可可脂分离—外购热水（`defatting_purchased_hot_water_input`）

“外购热水”作为一个独立产品流进入“可可浆脱脂与可可脂分离”过程边界；数量须按 `cp_defatting_records` 取得，未发生时以过程证据记录不适用。

- 选定流：Hot water, purchased
- 流属性/单位：Energy / MJ; flow property and unit-group UUIDs unresolved
- 数量规则：实测外购热水数量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 进入脱脂的可可浆
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_defatting_records`
- 来源：`eu-jrc-fdm-bref-2019`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 可可浆脱脂与可可脂分离—脱脂可可浆（`defatted_cocoa_paste_output`）

“脱脂可可浆”作为一个独立产品流离开“可可浆脱脂与可可脂分离”过程边界；数量须按 `cp_defatting_records` 取得，未发生时以过程证据记录不适用。

- 选定流：Defatted cocoa paste
- 流属性/单位：Mass 93a60a56-a3c8-11da-a746-0800200b9a66 / kg
- 数量规则：实测脱脂可可浆数量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 进入脱脂的可可浆
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_defatting_records`
- 来源：`codex-cxs-141-1983-2025`; `eu-jrc-fdm-bref-2019`

###### 可可浆脱脂与可可脂分离—可可脂（`cocoa_butter_coproduct_output`）

“可可脂”作为一个独立产品流离开“可可浆脱脂与可可脂分离”过程边界；数量须按 `cp_defatting_records` 取得，未发生时以过程证据记录不适用。

- 选定流：Cocoa butter
- 流属性/单位：Mass 93a60a56-a3c8-11da-a746-0800200b9a66 / kg
- 数量规则：实测可可脂数量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 进入脱脂的可可浆
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_defatting_records`
- 来源：`codex-cxs-141-1983-2025`; `eu-jrc-fdm-bref-2019`

###### 可可浆脱脂与可可脂分离—可可饼（`cocoa_cake_coproduct_output`）

“可可饼”作为一个独立产品流离开“可可浆脱脂与可可脂分离”过程边界；数量须按 `cp_defatting_records` 取得，未发生时以过程证据记录不适用。

- 选定流：Cocoa cake
- 流属性/单位：Mass 93a60a56-a3c8-11da-a746-0800200b9a66 / kg
- 数量规则：实测可可饼数量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 进入脱脂的可可浆
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_defatting_records`
- 来源：`codex-cxs-141-1983-2025`; `eu-jrc-fdm-bref-2019`

##### 废物流

###### 可可浆脱脂与可可脂分离—废可可脱脂过滤残渣（`defatting_filter_residue_waste_output`）

“废可可脱脂过滤残渣”作为一个独立废物流离开“可可浆脱脂与可可脂分离”过程边界；数量须按 `cp_defatting_records` 取得，未发生时以过程证据记录不适用。

- 选定流：Waste cocoa defatting filter residue
- 流属性/单位：Mass 93a60a56-a3c8-11da-a746-0800200b9a66 / kg
- 数量规则：实测废可可脱脂过滤残渣数量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 进入脱脂的可可浆
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_defatting_records`
- 来源：`eu-jrc-fdm-bref-2019`

##### 基本流

### 过程：可可浆整理、储存与包装（`paste_finishing_packing`）

#### 输入

##### 产品流

###### 可可浆整理、储存与包装—可可浆中间产品（`internal_cocoa_paste_finishing_input`）

“可可浆中间产品”作为一个独立产品流进入“可可浆整理、储存与包装”过程边界；数量须按 `cp_finishing_records` 取得，未发生时以过程证据记录不适用。

- 选定流：Cocoa paste intermediate
- 流属性/单位：Mass 93a60a56-a3c8-11da-a746-0800200b9a66 / kg
- 数量规则：实测可可浆中间产品数量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_finishing_records`
- 来源：`eu-jrc-fdm-bref-2019`

###### 可可浆整理、储存与包装—外购可可浆（`purchased_cocoa_paste_input`）

“外购可可浆”作为一个独立产品流进入“可可浆整理、储存与包装”过程边界；数量须按 `cp_finishing_records` 取得，未发生时以过程证据记录不适用。

- 选定流：Cocoa paste, purchased
- 流属性/单位：Mass 93a60a56-a3c8-11da-a746-0800200b9a66 / kg
- 数量规则：实测外购可可浆数量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_finishing_records`
- 来源：`codex-cxs-141-1983-2025`; `eu-jrc-fdm-bref-2019`

###### 可可浆整理、储存与包装—电网电力（`finishing_grid_electricity_input`）

“电网电力”作为一个独立产品流进入“可可浆整理、储存与包装”过程边界；数量须按 `cp_finishing_records` 取得，未发生时以过程证据记录不适用。

- 选定流：Electricity, grid supply
- 流属性/单位：Energy / kWh; flow property and unit-group UUIDs unresolved
- 数量规则：实测电网电力数量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_finishing_records`
- 来源：`eu-jrc-fdm-bref-2019`

###### 可可浆整理、储存与包装—外购蒸汽（`finishing_purchased_steam_input`）

“外购蒸汽”作为一个独立产品流进入“可可浆整理、储存与包装”过程边界；数量须按 `cp_finishing_records` 取得，未发生时以过程证据记录不适用。

- 选定流：Steam, purchased
- 流属性/单位：Energy / MJ; flow property and unit-group UUIDs unresolved
- 数量规则：实测外购蒸汽数量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_finishing_records`
- 来源：`eu-jrc-fdm-bref-2019`

###### 可可浆整理、储存与包装—外购热水（`finishing_purchased_hot_water_input`）

“外购热水”作为一个独立产品流进入“可可浆整理、储存与包装”过程边界；数量须按 `cp_finishing_records` 取得，未发生时以过程证据记录不适用。

- 选定流：Hot water, purchased
- 流属性/单位：Energy / MJ; flow property and unit-group UUIDs unresolved
- 数量规则：实测外购热水数量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_finishing_records`
- 来源：`eu-jrc-fdm-bref-2019`

###### 可可浆整理、储存与包装—聚乙烯包装内衬（`polyethylene_liner_input`）

“聚乙烯包装内衬”作为一个独立产品流进入“可可浆整理、储存与包装”过程边界；数量须按 `cp_finishing_records` 取得，未发生时以过程证据记录不适用。

- 选定流：Polyethylene packaging liner
- 流属性/单位：Mass 93a60a56-a3c8-11da-a746-0800200b9a66 / kg
- 数量规则：实测聚乙烯包装内衬数量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_finishing_records`
- 来源：`eu-jrc-fdm-bref-2019`

###### 可可浆整理、储存与包装—钢制包装桶（`steel_drum_input`）

“钢制包装桶”作为一个独立产品流进入“可可浆整理、储存与包装”过程边界；数量须按 `cp_finishing_records` 取得，未发生时以过程证据记录不适用。

- 选定流：Steel packaging drum
- 流属性/单位：Mass 93a60a56-a3c8-11da-a746-0800200b9a66 / kg
- 数量规则：实测钢制包装桶数量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_finishing_records`
- 来源：`eu-jrc-fdm-bref-2019`

###### 可可浆整理、储存与包装—瓦楞纸板箱（`corrugated_carton_input`）

“瓦楞纸板箱”作为一个独立产品流进入“可可浆整理、储存与包装”过程边界；数量须按 `cp_finishing_records` 取得，未发生时以过程证据记录不适用。

- 选定流：Corrugated paperboard carton
- 流属性/单位：Mass 93a60a56-a3c8-11da-a746-0800200b9a66 / kg
- 数量规则：实测瓦楞纸板箱数量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_finishing_records`
- 来源：`eu-jrc-fdm-bref-2019`

###### 可可浆整理、储存与包装—木制运输托盘（`wood_pallet_input`）

“木制运输托盘”作为一个独立产品流进入“可可浆整理、储存与包装”过程边界；数量须按 `cp_finishing_records` 取得，未发生时以过程证据记录不适用。

- 选定流：Wooden transport pallet
- 流属性/单位：Mass 93a60a56-a3c8-11da-a746-0800200b9a66 / kg
- 数量规则：实测木制运输托盘数量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_finishing_records`
- 来源：`eu-jrc-fdm-bref-2019`

###### 可可浆整理、储存与包装—聚丙烯包装带（`polypropylene_strapping_input`）

“聚丙烯包装带”作为一个独立产品流进入“可可浆整理、储存与包装”过程边界；数量须按 `cp_finishing_records` 取得，未发生时以过程证据记录不适用。

- 选定流：Polypropylene packaging strap
- 流属性/单位：Mass 93a60a56-a3c8-11da-a746-0800200b9a66 / kg
- 数量规则：实测聚丙烯包装带数量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_finishing_records`
- 来源：`eu-jrc-fdm-bref-2019`

###### 可可浆整理、储存与包装—纸质包装标签（`paper_label_input`）

“纸质包装标签”作为一个独立产品流进入“可可浆整理、储存与包装”过程边界；数量须按 `cp_finishing_records` 取得，未发生时以过程证据记录不适用。

- 选定流：Paper packaging label
- 流属性/单位：Mass 93a60a56-a3c8-11da-a746-0800200b9a66 / kg
- 数量规则：实测纸质包装标签数量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_finishing_records`
- 来源：`eu-jrc-fdm-bref-2019`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 可可浆整理、储存与包装—可可浆（脱脂或未脱脂）（`reference_cocoa_paste_output`）

“可可浆（脱脂或未脱脂）”作为一个独立产品流离开“可可浆整理、储存与包装”过程边界；数量须按 `cp_finishing_records` 取得，未发生时以过程证据记录不适用。

- 选定流：Cocoa paste, whether or not defatted `5b331659-2216-4cc7-9e6d-11bb0b50226f`
- 流属性/单位：Mass 93a60a56-a3c8-11da-a746-0800200b9a66 / kg
- 数量规则：将合格净可可浆质量归一化为恰好 1,000 kg
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_finishing_records`
- 来源：`codex-cxs-141-1983-2025`; `mass-balance-identity`

##### 废物流

###### 可可浆整理、储存与包装—废不合格可可浆（`off_spec_cocoa_paste_waste_output`）

“废不合格可可浆”作为一个独立废物流离开“可可浆整理、储存与包装”过程边界；数量须按 `cp_finishing_records` 取得，未发生时以过程证据记录不适用。

- 选定流：Waste off-spec cocoa paste
- 流属性/单位：Mass 93a60a56-a3c8-11da-a746-0800200b9a66 / kg
- 数量规则：实测废不合格可可浆数量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_finishing_records`
- 来源：`eu-jrc-fdm-bref-2019`

###### 可可浆整理、储存与包装—废聚乙烯包装膜（`polyethylene_film_waste_output`）

“废聚乙烯包装膜”作为一个独立废物流离开“可可浆整理、储存与包装”过程边界；数量须按 `cp_finishing_records` 取得，未发生时以过程证据记录不适用。

- 选定流：Waste polyethylene packaging film
- 流属性/单位：Mass 93a60a56-a3c8-11da-a746-0800200b9a66 / kg
- 数量规则：实测废聚乙烯包装膜数量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_finishing_records`
- 来源：`eu-jrc-fdm-bref-2019`

###### 可可浆整理、储存与包装—废钢制包装桶（`steel_drum_waste_output`）

“废钢制包装桶”作为一个独立废物流离开“可可浆整理、储存与包装”过程边界；数量须按 `cp_finishing_records` 取得，未发生时以过程证据记录不适用。

- 选定流：Waste steel packaging drum
- 流属性/单位：Mass 93a60a56-a3c8-11da-a746-0800200b9a66 / kg
- 数量规则：实测废钢制包装桶数量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_finishing_records`
- 来源：`eu-jrc-fdm-bref-2019`

###### 可可浆整理、储存与包装—废瓦楞纸板（`corrugated_carton_waste_output`）

“废瓦楞纸板”作为一个独立废物流离开“可可浆整理、储存与包装”过程边界；数量须按 `cp_finishing_records` 取得，未发生时以过程证据记录不适用。

- 选定流：Waste corrugated paperboard
- 流属性/单位：Mass 93a60a56-a3c8-11da-a746-0800200b9a66 / kg
- 数量规则：实测废瓦楞纸板数量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_finishing_records`
- 来源：`eu-jrc-fdm-bref-2019`

###### 可可浆整理、储存与包装—废木托盘（`wood_pallet_waste_output`）

“废木托盘”作为一个独立废物流离开“可可浆整理、储存与包装”过程边界；数量须按 `cp_finishing_records` 取得，未发生时以过程证据记录不适用。

- 选定流：Waste wooden pallet
- 流属性/单位：Mass 93a60a56-a3c8-11da-a746-0800200b9a66 / kg
- 数量规则：实测废木托盘数量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_finishing_records`
- 来源：`eu-jrc-fdm-bref-2019`

###### 可可浆整理、储存与包装—废聚丙烯包装带（`polypropylene_strapping_waste_output`）

“废聚丙烯包装带”作为一个独立废物流离开“可可浆整理、储存与包装”过程边界；数量须按 `cp_finishing_records` 取得，未发生时以过程证据记录不适用。

- 选定流：Waste polypropylene packaging strap
- 流属性/单位：Mass 93a60a56-a3c8-11da-a746-0800200b9a66 / kg
- 数量规则：实测废聚丙烯包装带数量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_finishing_records`
- 来源：`eu-jrc-fdm-bref-2019`

###### 可可浆整理、储存与包装—废纸标签材料（`paper_label_waste_output`）

“废纸标签材料”作为一个独立废物流离开“可可浆整理、储存与包装”过程边界；数量须按 `cp_finishing_records` 取得，未发生时以过程证据记录不适用。

- 选定流：Waste paper label stock
- 流属性/单位：Mass 93a60a56-a3c8-11da-a746-0800200b9a66 / kg
- 数量规则：实测废纸标签材料数量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_finishing_records`
- 来源：`eu-jrc-fdm-bref-2019`

##### 基本流

### 过程：工厂清洗与消毒（`plant_cleaning_sanitation`）

#### 输入

##### 产品流

###### 工厂清洗与消毒—工艺水（`sanitation_process_water_input`）

“工艺水”作为一个独立产品流进入“工厂清洗与消毒”过程边界；数量须按 `cp_cleaning_sanitation_records` 取得，未发生时以过程证据记录不适用。

- 选定流：Process water
- 流属性/单位：Mass 93a60a56-a3c8-11da-a746-0800200b9a66 / kg
- 数量规则：实测工艺水数量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cleaning_sanitation_records`
- 来源：`eu-jrc-fdm-bref-2019`

###### 工厂清洗与消毒—电网电力（`sanitation_grid_electricity_input`）

“电网电力”作为一个独立产品流进入“工厂清洗与消毒”过程边界；数量须按 `cp_cleaning_sanitation_records` 取得，未发生时以过程证据记录不适用。

- 选定流：Electricity, grid supply
- 流属性/单位：Energy / kWh; flow property and unit-group UUIDs unresolved
- 数量规则：实测电网电力数量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cleaning_sanitation_records`
- 来源：`eu-jrc-fdm-bref-2019`

###### 工厂清洗与消毒—外购蒸汽（`sanitation_purchased_steam_input`）

“外购蒸汽”作为一个独立产品流进入“工厂清洗与消毒”过程边界；数量须按 `cp_cleaning_sanitation_records` 取得，未发生时以过程证据记录不适用。

- 选定流：Steam, purchased
- 流属性/单位：Energy / MJ; flow property and unit-group UUIDs unresolved
- 数量规则：实测外购蒸汽数量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cleaning_sanitation_records`
- 来源：`eu-jrc-fdm-bref-2019`

###### 工厂清洗与消毒—外购热水（`sanitation_purchased_hot_water_input`）

“外购热水”作为一个独立产品流进入“工厂清洗与消毒”过程边界；数量须按 `cp_cleaning_sanitation_records` 取得，未发生时以过程证据记录不适用。

- 选定流：Hot water, purchased
- 流属性/单位：Energy / MJ; flow property and unit-group UUIDs unresolved
- 数量规则：实测外购热水数量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cleaning_sanitation_records`
- 来源：`eu-jrc-fdm-bref-2019`

###### 工厂清洗与消毒—天然气（`sanitation_natural_gas_input`）

“天然气”作为一个独立产品流进入“工厂清洗与消毒”过程边界；数量须按 `cp_cleaning_sanitation_records` 取得，未发生时以过程证据记录不适用。

- 选定流：Natural gas
- 流属性/单位：Energy / MJ; flow property and unit-group UUIDs unresolved
- 数量规则：实测天然气数量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cleaning_sanitation_records`
- 来源：`eu-jrc-fdm-bref-2019`

###### 工厂清洗与消毒—柴油（`sanitation_diesel_input`）

“柴油”作为一个独立产品流进入“工厂清洗与消毒”过程边界；数量须按 `cp_cleaning_sanitation_records` 取得，未发生时以过程证据记录不适用。

- 选定流：Diesel fuel
- 流属性/单位：Energy / MJ; flow property and unit-group UUIDs unresolved
- 数量规则：实测柴油数量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cleaning_sanitation_records`
- 来源：`eu-jrc-fdm-bref-2019`

###### 工厂清洗与消毒—液化石油气（`sanitation_lpg_input`）

“液化石油气”作为一个独立产品流进入“工厂清洗与消毒”过程边界；数量须按 `cp_cleaning_sanitation_records` 取得，未发生时以过程证据记录不适用。

- 选定流：Liquefied petroleum gas
- 流属性/单位：Energy / MJ; flow property and unit-group UUIDs unresolved
- 数量规则：实测液化石油气数量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cleaning_sanitation_records`
- 来源：`eu-jrc-fdm-bref-2019`

###### 工厂清洗与消毒—氢氧化钠清洗制剂（`sodium_hydroxide_cleaner_input`）

“氢氧化钠清洗制剂”作为一个独立产品流进入“工厂清洗与消毒”过程边界；数量须按 `cp_cleaning_sanitation_records` 取得，未发生时以过程证据记录不适用。

- 选定流：Sodium hydroxide cleaning formulation
- 流属性/单位：Mass 93a60a56-a3c8-11da-a746-0800200b9a66 / kg
- 数量规则：实测氢氧化钠清洗制剂数量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cleaning_sanitation_records`
- 来源：`eu-jrc-fdm-bref-2019`

###### 工厂清洗与消毒—硝酸清洗制剂（`nitric_acid_cleaner_input`）

“硝酸清洗制剂”作为一个独立产品流进入“工厂清洗与消毒”过程边界；数量须按 `cp_cleaning_sanitation_records` 取得，未发生时以过程证据记录不适用。

- 选定流：Nitric acid cleaning formulation
- 流属性/单位：Mass 93a60a56-a3c8-11da-a746-0800200b9a66 / kg
- 数量规则：实测硝酸清洗制剂数量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cleaning_sanitation_records`
- 来源：`eu-jrc-fdm-bref-2019`

###### 工厂清洗与消毒—过氧乙酸消毒制剂（`peracetic_acid_disinfectant_input`）

“过氧乙酸消毒制剂”作为一个独立产品流进入“工厂清洗与消毒”过程边界；数量须按 `cp_cleaning_sanitation_records` 取得，未发生时以过程证据记录不适用。

- 选定流：Peracetic acid disinfectant formulation
- 流属性/单位：Mass 93a60a56-a3c8-11da-a746-0800200b9a66 / kg
- 数量规则：实测过氧乙酸消毒制剂数量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cleaning_sanitation_records`
- 来源：`eu-jrc-fdm-bref-2019`

###### 工厂清洗与消毒—次氯酸钠消毒制剂（`sodium_hypochlorite_disinfectant_input`）

“次氯酸钠消毒制剂”作为一个独立产品流进入“工厂清洗与消毒”过程边界；数量须按 `cp_cleaning_sanitation_records` 取得，未发生时以过程证据记录不适用。

- 选定流：Sodium hypochlorite disinfectant formulation
- 流属性/单位：Mass 93a60a56-a3c8-11da-a746-0800200b9a66 / kg
- 数量规则：实测次氯酸钠消毒制剂数量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cleaning_sanitation_records`
- 来源：`eu-jrc-fdm-bref-2019`

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

###### 工厂清洗与消毒—工厂碱洗废水（`alkaline_cleaning_wastewater_output`）

“工厂碱洗废水”作为一个独立废物流离开“工厂清洗与消毒”过程边界；数量须按 `cp_cleaning_sanitation_records` 取得，未发生时以过程证据记录不适用。

- 选定流：Wastewater from alkaline plant cleaning
- 流属性/单位：Mass 93a60a56-a3c8-11da-a746-0800200b9a66 / kg
- 数量规则：实测工厂碱洗废水数量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cleaning_sanitation_records`
- 来源：`eu-jrc-fdm-bref-2019`

###### 工厂清洗与消毒—工厂酸洗废水（`acid_cleaning_wastewater_output`）

“工厂酸洗废水”作为一个独立废物流离开“工厂清洗与消毒”过程边界；数量须按 `cp_cleaning_sanitation_records` 取得，未发生时以过程证据记录不适用。

- 选定流：Wastewater from acid plant cleaning
- 流属性/单位：Mass 93a60a56-a3c8-11da-a746-0800200b9a66 / kg
- 数量规则：实测工厂酸洗废水数量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cleaning_sanitation_records`
- 来源：`eu-jrc-fdm-bref-2019`

###### 工厂清洗与消毒—过氧乙酸消毒废水（`peracetic_disinfection_wastewater_output`）

“过氧乙酸消毒废水”作为一个独立废物流离开“工厂清洗与消毒”过程边界；数量须按 `cp_cleaning_sanitation_records` 取得，未发生时以过程证据记录不适用。

- 选定流：Wastewater from peracetic acid disinfection
- 流属性/单位：Mass 93a60a56-a3c8-11da-a746-0800200b9a66 / kg
- 数量规则：实测过氧乙酸消毒废水数量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cleaning_sanitation_records`
- 来源：`eu-jrc-fdm-bref-2019`

###### 工厂清洗与消毒—次氯酸钠消毒废水（`hypochlorite_disinfection_wastewater_output`）

“次氯酸钠消毒废水”作为一个独立废物流离开“工厂清洗与消毒”过程边界；数量须按 `cp_cleaning_sanitation_records` 取得，未发生时以过程证据记录不适用。

- 选定流：Wastewater from sodium hypochlorite disinfection
- 流属性/单位：Mass 93a60a56-a3c8-11da-a746-0800200b9a66 / kg
- 数量规则：实测次氯酸钠消毒废水数量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cleaning_sanitation_records`
- 来源：`eu-jrc-fdm-bref-2019`

###### 工厂清洗与消毒—废清洁布（`used_cleaning_cloth_waste_output`）

“废清洁布”作为一个独立废物流离开“工厂清洗与消毒”过程边界；数量须按 `cp_cleaning_sanitation_records` 取得，未发生时以过程证据记录不适用。

- 选定流：Waste used cleaning cloth
- 流属性/单位：Mass 93a60a56-a3c8-11da-a746-0800200b9a66 / kg
- 数量规则：实测废清洁布数量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cleaning_sanitation_records`
- 来源：`eu-jrc-fdm-bref-2019`

##### 基本流

###### 工厂清洗与消毒—排放至空气的化石二氧化碳（`sanitation_fossil_co2_air_output`）

“排放至空气的化石二氧化碳”作为一个独立基本流离开“工厂清洗与消毒”过程边界；数量须按 `cp_cleaning_sanitation_records` 取得，未发生时以过程证据记录不适用。

- 选定流：Carbon dioxide, fossil, to air
- 流属性/单位：Mass 93a60a56-a3c8-11da-a746-0800200b9a66 / kg
- 数量规则：依据采集记录计算排放至空气的化石二氧化碳数量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 净参考产品
- 基准类型：燃料清单（`fuel_inventory`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_cleaning_sanitation_records`
- 来源：`eu-jrc-fdm-bref-2019`

###### 工厂清洗与消毒—排放至空气的氮氧化物（`sanitation_nox_air_output`）

“排放至空气的氮氧化物”作为一个独立基本流离开“工厂清洗与消毒”过程边界；数量须按 `cp_cleaning_sanitation_records` 取得，未发生时以过程证据记录不适用。

- 选定流：Nitrogen oxides to air
- 流属性/单位：Mass 93a60a56-a3c8-11da-a746-0800200b9a66 / kg
- 数量规则：依据采集记录计算排放至空气的氮氧化物数量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 净参考产品
- 基准类型：燃料清单（`fuel_inventory`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_cleaning_sanitation_records`
- 来源：`eu-jrc-fdm-bref-2019`

###### 工厂清洗与消毒—排放至空气的硫氧化物（`sanitation_sox_air_output`）

“排放至空气的硫氧化物”作为一个独立基本流离开“工厂清洗与消毒”过程边界；数量须按 `cp_cleaning_sanitation_records` 取得，未发生时以过程证据记录不适用。

- 选定流：Sulfur oxides to air
- 流属性/单位：Mass 93a60a56-a3c8-11da-a746-0800200b9a66 / kg
- 数量规则：依据采集记录计算排放至空气的硫氧化物数量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 净参考产品
- 基准类型：燃料清单（`fuel_inventory`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_cleaning_sanitation_records`
- 来源：`eu-jrc-fdm-bref-2019`

###### 工厂清洗与消毒—排放至空气的 PM2.5（`sanitation_pm25_air_output`）

“排放至空气的 PM2.5”作为一个独立基本流离开“工厂清洗与消毒”过程边界；数量须按 `cp_cleaning_sanitation_records` 取得，未发生时以过程证据记录不适用。

- 选定流：Particulate matter, less than 2.5 micrometres, to air
- 流属性/单位：Mass 93a60a56-a3c8-11da-a746-0800200b9a66 / kg
- 数量规则：依据采集记录计算排放至空气的 PM2.5数量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 净参考产品
- 基准类型：燃料清单（`fuel_inventory`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_cleaning_sanitation_records`
- 来源：`eu-jrc-fdm-bref-2019`

### 过程：场内废水处理（`onsite_wastewater_treatment`）

#### 输入

##### 产品流

###### 场内废水处理—电网电力（`wastewater_treatment_grid_electricity_input`）

“电网电力”作为一个独立产品流进入“场内废水处理”过程边界；数量须按 `cp_wastewater_treatment_records` 取得，未发生时以过程证据记录不适用。

- 选定流：Electricity, grid supply
- 流属性/单位：Energy / kWh; flow property and unit-group UUIDs unresolved
- 数量规则：实测电网电力数量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 已处理均质可可加工废水
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wastewater_treatment_records`
- 来源：`eu-jrc-fdm-bref-2019`

###### 场内废水处理—氯化铁废水处理制剂（`ferric_chloride_treatment_input`）

“氯化铁废水处理制剂”作为一个独立产品流进入“场内废水处理”过程边界；数量须按 `cp_wastewater_treatment_records` 取得，未发生时以过程证据记录不适用。

- 选定流：Ferric chloride wastewater-treatment formulation
- 流属性/单位：Mass 93a60a56-a3c8-11da-a746-0800200b9a66 / kg
- 数量规则：实测氯化铁废水处理制剂数量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 已处理均质可可加工废水
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wastewater_treatment_records`
- 来源：`eu-jrc-fdm-bref-2019`

###### 场内废水处理—聚丙烯酰胺絮凝剂制剂（`polyacrylamide_flocculant_input`）

“聚丙烯酰胺絮凝剂制剂”作为一个独立产品流进入“场内废水处理”过程边界；数量须按 `cp_wastewater_treatment_records` 取得，未发生时以过程证据记录不适用。

- 选定流：Polyacrylamide flocculant formulation
- 流属性/单位：Mass 93a60a56-a3c8-11da-a746-0800200b9a66 / kg
- 数量规则：实测聚丙烯酰胺絮凝剂制剂数量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 已处理均质可可加工废水
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wastewater_treatment_records`
- 来源：`eu-jrc-fdm-bref-2019`

##### 废物流

###### 场内废水处理—均质可可加工废水（`equalised_cocoa_wastewater_input`）

“均质可可加工废水”作为一个独立废物流进入“场内废水处理”过程边界；数量须按 `cp_wastewater_treatment_records` 取得，未发生时以过程证据记录不适用。

- 选定流：Equalised cocoa-processing wastewater
- 流属性/单位：Mass 93a60a56-a3c8-11da-a746-0800200b9a66 / kg
- 数量规则：实测均质可可加工废水数量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 已处理均质可可加工废水
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wastewater_treatment_records`
- 来源：`eu-jrc-fdm-bref-2019`

##### 基本流

#### 输出

##### 产品流

##### 废物流

###### 场内废水处理—可可加工废水处理污泥（`wastewater_sludge_output`）

“可可加工废水处理污泥”作为一个独立废物流离开“场内废水处理”过程边界；数量须按 `cp_wastewater_treatment_records` 取得，未发生时以过程证据记录不适用。

- 选定流：Sludge from cocoa-processing wastewater treatment
- 流属性/单位：Mass 93a60a56-a3c8-11da-a746-0800200b9a66 / kg
- 数量规则：实测可可加工废水处理污泥数量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 已处理均质可可加工废水
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wastewater_treatment_records`
- 来源：`eu-jrc-fdm-bref-2019`

##### 基本流

###### 场内废水处理—排放至水体的化学需氧量（`cod_water_output`）

“排放至水体的化学需氧量”作为一个独立基本流离开“场内废水处理”过程边界；数量须按 `cp_wastewater_treatment_records` 取得，未发生时以过程证据记录不适用。

- 选定流：Chemical oxygen demand to water
- 流属性/单位：Mass 93a60a56-a3c8-11da-a746-0800200b9a66 / kg
- 数量规则：依据采集记录计算排放至水体的化学需氧量数量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 已处理均质可可加工废水
- 基准类型：过程输出（`process_output`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_wastewater_treatment_records`
- 来源：`eu-jrc-fdm-bref-2019`

###### 场内废水处理—排放至水体的五日生化需氧量（`bod5_water_output`）

“排放至水体的五日生化需氧量”作为一个独立基本流离开“场内废水处理”过程边界；数量须按 `cp_wastewater_treatment_records` 取得，未发生时以过程证据记录不适用。

- 选定流：Biochemical oxygen demand, 5 days, to water
- 流属性/单位：Mass 93a60a56-a3c8-11da-a746-0800200b9a66 / kg
- 数量规则：依据采集记录计算排放至水体的五日生化需氧量数量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 已处理均质可可加工废水
- 基准类型：过程输出（`process_output`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_wastewater_treatment_records`
- 来源：`eu-jrc-fdm-bref-2019`

###### 场内废水处理—排放至水体的总氮（`total_nitrogen_water_output`）

“排放至水体的总氮”作为一个独立基本流离开“场内废水处理”过程边界；数量须按 `cp_wastewater_treatment_records` 取得，未发生时以过程证据记录不适用。

- 选定流：Nitrogen, total, to water
- 流属性/单位：Mass 93a60a56-a3c8-11da-a746-0800200b9a66 / kg
- 数量规则：依据采集记录计算排放至水体的总氮数量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 已处理均质可可加工废水
- 基准类型：过程输出（`process_output`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_wastewater_treatment_records`
- 来源：`eu-jrc-fdm-bref-2019`

###### 场内废水处理—排放至水体的总磷（`total_phosphorus_water_output`）

“排放至水体的总磷”作为一个独立基本流离开“场内废水处理”过程边界；数量须按 `cp_wastewater_treatment_records` 取得，未发生时以过程证据记录不适用。

- 选定流：Phosphorus, total, to water
- 流属性/单位：Mass 93a60a56-a3c8-11da-a746-0800200b9a66 / kg
- 数量规则：依据采集记录计算排放至水体的总磷数量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 已处理均质可可加工废水
- 基准类型：过程输出（`process_output`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_wastewater_treatment_records`
- 来源：`eu-jrc-fdm-bref-2019`

###### 场内废水处理—排放至水体的悬浮物（`suspended_solids_water_output`）

“排放至水体的悬浮物”作为一个独立基本流离开“场内废水处理”过程边界；数量须按 `cp_wastewater_treatment_records` 取得，未发生时以过程证据记录不适用。

- 选定流：Suspended solids to water
- 流属性/单位：Mass 93a60a56-a3c8-11da-a746-0800200b9a66 / kg
- 数量规则：依据采集记录计算排放至水体的悬浮物数量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 已处理均质可可加工废水
- 基准类型：过程输出（`process_output`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_wastewater_treatment_records`
- 来源：`eu-jrc-fdm-bref-2019`

###### 场内废水处理—排放至空气的生物源甲烷（`wastewater_methane_air_output`）

“排放至空气的生物源甲烷”作为一个独立基本流离开“场内废水处理”过程边界；数量须按 `cp_wastewater_treatment_records` 取得，未发生时以过程证据记录不适用。

- 选定流：Methane, biogenic, to air
- 流属性/单位：Mass 93a60a56-a3c8-11da-a746-0800200b9a66 / kg
- 数量规则：依据采集记录计算排放至空气的生物源甲烷数量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 已处理均质可可加工废水
- 基准类型：过程输出（`process_output`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_wastewater_treatment_records`
- 来源：`eu-jrc-fdm-bref-2019`

## 7. 分配与共产品处理

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivision_first` | 所有多功能前景过程 | 只要能够采集可单独归属的数据，就应通过分表计量和细分预处理、研磨、脱脂、成品处理、公用工程及废物处理操作来避免分配。 | `eu-pef-recommendation-2021-2279` |
| `allocation_cocoa_butter` | 脱脂可可浆和回收可可脂 | 完成细分后，剩余的共用脱脂负荷按可销售脱脂可可浆与可销售可可脂的实测干基产出质量进行分配；使用一致的水分基准、披露分配因子，并在经济分配会实质改变结论时报告敏感性结果。 | `eu-pef-recommendation-2021-2279`；`mass-balance-identity` |
| `allocation_waste_and_rework` | 拒收物、废物、内部返工和回收物料 | 向内部返工分配负荷时不得重复计算上游投入；除非按照所声明研究方法一致应用了有记录的系统扩展或替代方法及去向数据集，否则不得给予废物或回收物料抵扣。 | `eu-pef-recommendation-2021-2279` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_bean_preparation_records` | `bean_to_nib_preparation` | 可可豆；每种公用工程载体；碎粒；每种壳、拒收物、粉尘和废水输出；每种燃烧排放 | 收货与批次日志；校准秤；各载体仪表或发票；废物和监测记录 | 豆和碎粒质量/水分；电力；蒸汽；热水；天然气；柴油；LPG；水；各输出质量；库存变化；排放测量或因子 | 按批次或报告期分别核对每种物料、载体和输出 | kg; kWh; MJ; % m/m | 每批次并按月核对各载体 | 有代表性的连续 12 个月或较短生产活动的全部批次 | 每个前景预处理场址 | 保持每种载体和输出独立、核对质量并按预处理碎粒归一化 | 校准；供应商证书；水分结果；燃料与热力记录；批次谱系；废物票据；排放底稿 |
| `cp_grinding_records` | `nib_grinding_paste_manufacture` | 内部碎粒；外购碎粒；每种公用工程；每种碱化化学品；可可浆；每种残渣和废水 | 批次配方；秤；加料和转移日志；公用工程仪表；实验室与废物记录 | 各来源碎粒质量；可可浆质量；电力；蒸汽；热水；水；各化学品质量；水分；可可脂含量；各废物质量；库存变化 | 对每个研磨批次核对每种输入、化学品、转移和输出 | kg; kWh; MJ; % m/m | 每批次并按月核对仪表 | 有代表性的连续 12 个月或较短生产活动的全部批次 | 每条前景研磨线 | 内部与外购碎粒及每种化学品分别保留，再按可可浆中间产品归一化 | 校准；配方批准；化学品规格；样品标识；谱系；质量平衡签核 |
| `cp_defatting_records` | `paste_defatting` | 进料可可浆；电力；蒸汽；热水；脱脂可可浆；可可脂；可可饼；过滤残渣 | 进料和产品秤；压榨日志；各载体仪表；实验室脂肪分析；废物记录 | 进料质量/水分/脂肪；各公用工程；各产品质量/水分/脂肪；残渣质量；库存变化 | 在统一水分基准上核对每次脱脂生产并分别保留所有可销售输出 | kg; kWh; MJ; % m/m | 每次生产并按月核对各载体 | 参考期内所有脱脂生产 | 每条前景脱脂线 | 计算可销售干基输出和分配因子，再按可可浆进料归一化 | 校准的秤与仪表；实验室方法；样品标识；生产质量平衡；分配批准 |
| `cp_finishing_records` | `paste_finishing_packing` | 内部可可浆；外购可可浆；每种公用工程；每个包装组件；参考产品；不合格可可浆；每种包装废物 | 转移和发运记录；灌装秤；各公用工程仪表；组件领用和皮重；废物记录 | 各来源可可浆；电力；蒸汽；热水；各组件数量和质量；净产品；皮重；不合格浆；各包装废物；库存变化 | 对每个成品批次核对各可可浆来源、载体、包装组件和废物 | kg; kWh; MJ; item | 每批并按月核对 | 有代表性的连续 12 个月或较短生产活动的全部批次 | 每个前景整理与包装场址 | 扣除皮重、分别保留每种包装材料，并将合格输出归一化至 1,000 kg | 秤和仪表校准；包装规格；领退记录；批次放行；发运和废物票据 |
| `cp_cleaning_sanitation_records` | `plant_cleaning_sanitation` | 水；每种公用工程和燃料；每种清洗或消毒制剂；每种消毒废水；清洁布废物；每种燃烧排放 | 消毒计划；仪表；燃料与化学品领用；废水和排放记录 | 水；电力；蒸汽；热水；天然气；柴油；LPG；各制剂质量和浓度；各废水和固废质量；排放结果或因子 | 对每次消毒分别记录每种载体、制剂、废水和排放 | kg; kWh; MJ | 每次消毒或每班，按月汇总 | 有代表性的连续 12 个月或生产活动的全部事件 | 所有范围内工厂消毒系统 | 以有文件的因果驱动分配共用消毒并按参考输出归一化 | 校准；发票；SDS 与制剂规格；消毒日志；废物凭证；排放底稿 |
| `cp_wastewater_treatment_records` | `onsite_wastewater_treatment` | 均质废水；电力；氯化铁；聚丙烯酰胺；污泥；COD；BOD5；氮；磷；悬浮物；甲烷 | 进水流量或质量仪表；化学品领用；电表；污泥秤；实验室与气体记录 | 进水和排放量；各化学品；电力；污泥质量/含水率；各匹配浓度；甲烷测量或模型字段 | 将代表性样品与实测排放量匹配并分别计算每种排放 | kg; kWh; mg/L | 流量连续或每日；按许可或运行计划采样 | 有代表性的连续 12 个月或完整生产活动 | 完整场内处理边界 | 分别计算各质量负荷并按实测废水量分配处理清单 | 实验室质量记录；采样计划；仪表校准；化学品记录；污泥凭证；计算底稿 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalisation` | 所有前景清单量 | 归一化量 = 报告期清单行数量 / 合格净可可浆产出 × 1,000 kg | 采集的清单行数量；合格净产出 | 每 1,000 kg 参考产品的数量 | `mass-balance-identity` |
| `calc_process_mass_balance` | 每个前景过程 | 未解释质量 = 期初库存 + 实测投入 - 实测产出 - 期末库存；当水分变化显著时，分别按接收状态和干基计算 | 物料投入；产品、共产品和废物产出；期初和期末库存；水分 | 有符号和绝对质量平衡残差 | `mass-balance-identity` |
| `calc_defatting_yield` | 可可浆脱脂 | 干基产品收率和可可脂回收率 = 各可销售干基产出 / 干基进料；分配因子 = 各可销售干基产出 / 可销售干基总产出 | 进料和产出质量；水分；可可脂含量 | 收率、回收率和分配因子 | `mass-balance-identity`；`eu-pef-recommendation-2021-2279` |
| `calc_wastewater` | 每种过程或消毒废水 | 有直接计量时采用实测值；否则送处理废水 = 供水 - 产品保留水 - 蒸发 - 单独计量的回用水 | 阶段特定用水、保留水、蒸发和回用 | 带计算标记的一种阶段特定废水质量 | `mass-balance-identity` |
| `calc_combustion_emission` | 每种直接空气排放 | 排放质量 = 每种单独记录的场内燃料量 × 其披露的适用因子；仅对同一基本流求和，有直接测量时采用测量值 | 天然气、柴油或 LPG 记录；燃料性质；因子或测量 | 一种指定基本流排放的 kg | `eu-jrc-fdm-bref-2019` |
| `calc_effluent_load` | 每种处理后出水排放 | 排放质量 = 匹配浓度 × 实测排放量，并记录密度和单位换算 | 一种参数浓度；排放量；采样代表性 | 一种指定水排放的 kg | `eu-jrc-fdm-bref-2019` |
| `calc_packaging_component` | 每个包装输入 | 组件质量 = 领用数量 × 实测空单件质量 - 退回未用组件质量；可重复使用托盘按有文件的使用份额分配 | 数量；单件质量；退回量；重复使用份额 | 每参考产品的一种包装组件 kg | `mass-balance-identity` |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity_traceability` | 所有批次和物料流 | 保留供应商、产地、批次、路线、产品规格、脱脂和碱化状态，以及从起始物料到参考产品的链接。 | 收货记录；批次谱系；产品规格；批次放行 |
| `dq_measurement_control` | 质量、能源、水、组成和废物记录 | 使用经校准或验证的测量系统；为每个汇总字段保留单位、换算、校准状态和估算标记。 | 校准证书；计量表台账；实验室质量记录；批准的换算表 |
| `dq_temporal_representativeness` | 前景数据集 | 连续生产时覆盖有代表性的连续 12 个月，或覆盖所声明生产活动的全部批次；披露停机、非典型批次和缺失时段。 | 生产日历；完整性核对；例外日志 |
| `dq_completeness` | 已命名的前景流 | 对所有已命名物料、能源、水、共产品、废物、废水和直接排放清单行进行核算，或在有路线证据时显式标记为不适用。 | 已签核清单检查表；过程质量平衡；截断声明 |
| `dq_atomic_exchange_identity` | 每张清单卡 | 每行保留一个物理或化学流身份；不得以载体、化学品、包装、废物或排放集合标签替代实施交换。 | 行级清单审查；Tiangong 查询处置；已签署适用性检查表 |
| `dq_source_currency` | 外部规则和规格 | 在激活或发布前，确认产品规格、官方方法以及法律或客户要求对地域和参考期仍然有效。 | 来源复核记录；适用规格清单 |

## 9. 校验规则

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `validate_reference_flow` | 参考产品 | 归一化后须精确为 1,000 kg，并使用 Tiangong 产品流 UUID `5b331659-2216-4cc7-9e6d-11bb0b50226f`、Mass UUID `93a60a56-a3c8-11da-a746-0800200b9a66`、Units of mass UUID `93a60a57-a4c8-11da-a746-0800200c9a66` 和单位 kg。 | `mass-balance-identity` |
| `validate_product_scope` | 产品身份 | 须提供浆状物态、可可脂含量、脱脂状态、焙炒路线、碱化状态、水分基准和包装状态；可可饼、可可粉、加糖制品和成品巧克力不得使用本 PCR。 | `codex-cxs-141-1983-2025` |
| `validate_codex_claim` | 声称作为可可浆符合 CXS 141-1983 的产品 | 对照现行适用 Codex 文本核验所声明的组成和质量要求，包括可可浆 47–60% m/m 的可可脂含量以及适用的壳和胚限值；该可可浆脂肪区间不得套用于单独声明的脱脂可可浆。 | `codex-cxs-141-1983-2025` |
| `validate_process_route` | 条件过程 | 整豆投入时须有可可豆预处理；内部和外购碎粒或可可浆须分开；须记录每种实际碱化化学品；声明脱脂时须有进料、可可浆、可可脂、可可饼、各公用工程和组成记录。 | `eu-jrc-fdm-bref-2019` |
| `validate_mass_balance` | 每个前景过程和整体前景系统 | 在一致的水分基准上核对投入、产出和库存变化；超出设施批准测量不确定度的物料残差须调查并披露。 | `mass-balance-identity` |
| `validate_allocation` | 可可脂和任何其他可销售共产品 | 确认首先尝试了细分，共用负荷使用实测干基因子，水分基准一致，分配因子之和为一，并披露分配方法和敏感性。 | `eu-pef-recommendation-2021-2279`；`mass-balance-identity` |
| `validate_cutoff_and_completeness` | 前景清单 | 每个已命名的重要流须被计量、计算或标记为不适用；披露所有其他排除项并按照所声明截断方法进行核验，不得利用截断省略已知显著流。 | `eu-pef-recommendation-2021-2279` |
| `validate_atomic_flows` | 过程清单 | 每张卡必须命名一个具体交换；电网电力、外购蒸汽、外购热水、每种燃料、每种化学品、每个包装组件、每种产品或共产品、每种废物和每种基本流排放须保持分开。 | `eu-jrc-fdm-bref-2019`；`eu-pef-recommendation-2021-2279` |
| `validate_direct_emissions` | 场内燃料燃烧 | 对每种实际使用的直接燃料，使用已披露证据分别计算或测量化石二氧化碳、氮氧化物、硫氧化物和初级 PM2.5；不得报告集合排放行。 | `eu-jrc-fdm-bref-2019` |
| `validate_wastewater_rows` | 废水和场内处理 | 分别保留各阶段废水、处理污泥、COD、BOD5、总氮、总磷、悬浮物和甲烷结果；所有废水均未经前景场址处理而外运时，将处理过程标记为不适用。 | `eu-jrc-fdm-bref-2019` |
| `validate_uuid_resolution` | 非参考清单流 | 在 flow-hybrid-search 与 state-100 直接回读对确切原子身份和支持信息达成一致之前，所有非参考 UUID 均留空；激活或发布前须解决或获得经批准的显式例外。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 可可浆生产前景数据集；完成方法学、翻译、UUID 和证据审查后，可作为 secondary_dataset 或 background_dataset 发布 |
| downstream_use | 产品流创建、前景过程数据集、从摇篮到工厂门产品系统、巧克力和可可产品生命周期模型以及供应链足迹研究 |
| allowed_use | 用于所声明工厂、技术、产品状态、地域和参考期的从门到门建模；仅在链接上游和下游数据集并披露分配后用于更宽范围 |
| excluded_use | 作为独立数据集的可可种植；可可饼或可可粉生产；以可可脂作为唯一参考产品；加糖可可或巧克力生产；未经代表性复核的通用全球代表 |
| required_metadata | PCR id 和版本；参考 UUID；CPC 上下文；场址和地域；参考期；起始物料和产地组合；整豆或碎粒路线；焙炒、碱化和脱脂状态；可可脂和水分基准；过程技术；包装；分配；上游链接；未解决 UUID 的处置 |
| required_quality_disclosure | 一手数据占比；时间和场址覆盖；校准和实验室控制；质量平衡残差；截断和代理；共产品分配因子和敏感性；载体与化学品适用性；未解决 UUID；缺失流；不确定性和局限性 |
| update_trigger | 起始物料、产地组合、焙炒或研磨技术、碱化配方、脱脂路线、产品物态或组成、能源组合、分配、场址范围、适用规格、Tiangong 身份发生重大变化，或新证据使 QA 校验范围失效 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `codex-cxs-141-1983-2025` | standard | Codex Alimentarius，CXS 141-1983，《可可浆（可可/巧克力浆）和可可饼标准》，2025 年修订；https://openknowledge.fao.org/handle/20.500.14283/cd8967en；检索日期 2026-08-11 | 产品定义、涵盖名称、标准可可浆的可可脂组成、壳和胚限值、添加剂及产品范围校验 |
| `eu-jrc-fdm-bref-2019` | official_guidance | European Commission Joint Research Centre，《食品、饮料和乳品行业最佳可行技术参考文件》，2019；https://eippcb.jrc.ec.europa.eu/sites/default/files/2020-01/JRC118627_FDM_Bref_2019_published.pdf；检索日期 2026-08-11 | 可可过程分解：接收与清理、焙炒、风选、研磨、碱化、液压压榨、可可脂回收和包装 |
| `eu-pef-recommendation-2021-2279` | official_guidance | European Commission Recommendation (EU) 2021/2279，关于环境足迹方法的使用，CELEX 32021H2279；https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32021H2279；检索日期 2026-08-11 | 系统边界披露、分配层级、截断控制、数据采集、数据质量和核验原则 |
| `mass-balance-identity` | method_factor | 应用于实测前景投入、产出和库存变化的质量守恒恒等式 | 参考归一化、过程核对、收率、分配因子、废水和校验计算 |
