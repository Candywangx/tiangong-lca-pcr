---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.meat-of-guinea-fowl-fresh-or-chilled
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 珍珠鸡肉，鲜或冷藏

## 1. 范围与适用性

本 PCR 适用于由珍珠鸡获得、并在屠宰场或肉类加工厂门以鲜或冷藏状态放行的净可销售肉品前景数据包。范围涵盖活珍珠鸡接收与临时待宰、击晕与屠宰、放血、烫毛、脱羽、去内脏与胴体整理、条件性分割和切块、冷却与冷藏、包装与放行、可归属的清洗消毒，以及条件性场内废水处理。

珍珠鸡养殖和孵化、饲料生产、运至接收工厂门的运输、外购公用工程、制冷剂、化学品和包装的制造、零售、烹饪或其他使用，以及产品寿命终止均不属于前景边界。研究范围宽于门到门系统时，应链接相应数据集。

本类别排除冷冻珍珠鸡肉、肥肝、作为单独产品销售的食用内脏、其他禽种肉、机械分离肉，以及经调制或保藏的肉制品。肝、心、胗、血、羽毛、脂肪、颈、脚、骨和皮可作为分别计量的共产品或废物，但除非已声明的肉品规格在法律和商业上明确包含，否则均不得计入参考产品质量。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.meat-of-guinea-fowl-fresh-or-chilled |
| classification_refs | CPC 3.0：21125 珍珠鸡肉，鲜或冷藏 |
| covered_products | 以鲜或冷藏状态放行、未经冷冻的完整珍珠鸡整理胴体及珍珠鸡分割肉，可带骨或去骨、带皮或去皮 |
| excluded_products | 冷冻珍珠鸡肉；肥肝；单独销售的食用内脏；其他物种肉；机械分离肉；经调制、保藏、熟制、盐渍、干制或熏制产品 |
| representative_product | 工厂门净合格珍珠鸡胴体肉或分割肉，保持鲜或冷藏状态且未经冷冻 |
| production_route | 活禽接收与待宰；击晕与屠宰；放血；烫毛与脱羽；去内脏与整理；条件性分割；冷却与冷藏；包装与放行 |
| market_state | 工厂门鲜或冷藏完整胴体或分割肉；声明温度状态、切割形式、带骨或去骨、带皮或去皮、包装状态、净质量和放行规格 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 适合以鲜或冷藏肉销售或转移的净合格珍珠鸡肉 |
| How much | 声明工厂门的 1 kg 净产品质量 |
| How well | 符合声明的食品安全、质量、温度和商业规格；未经冷冻；排除包装皮重、肥肝和单独销售的食用内脏 |
| How long or cycle | 一个已放行生产批次或报告期汇总；无服务期限 |
| reference_flow_link | 扣除包装皮重、判废物料、单独销售的器官以及全部共产品和废物后的净放行产品质量 |

| 字段 | 值 |
| --- | --- |
| 参考数量 Reference amount | 1 kg |
| 参考产品流 Reference product flow | Meat of guinea fowl, fresh or chilled `8c683807-f79b-46a9-90e4-c005d506a98a` |
| 参考流属性 Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 Reference unit | kg |
| 必需限定信息 Required qualifiers | 珍珠鸡物种声明; 完整胴体或指定分割部位; 鲜或冷藏状态; 放行产品温度; 带骨或去骨; 带皮或去皮; 食用内脏排除; 肥肝排除; 净质量和包装皮重; 包装状态; 屠宰和分割路线; 地理; 技术; 参考期 |

构建前景数据包时，`必需限定信息` 中的每项内容必须在数据集元数据、过程说明、参考流备注、产品说明或等效数据包字段中声明。缺失限定信息将使该数据包的参考流定义不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_net_mass` | 参考产品和归一化清单 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 将每项前景交换归一化为恰好 1 kg 合格净参考产品；参考产品质量不含包装皮重、单独销售的器官、共产品、判废物料和废物。 |
| `live_bird_mass_basis` | 接收并验收的活珍珠鸡 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 记录接收和验收活质量，并保留只数作为支持字段；没有有记录的批次特定换算时，不得以只数替代实测质量。 |
| `product_state_basis` | 胴体、分割肉和参考产品 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 按所述鲜或冷藏温度和沥水状态记录质量；识别完整胴体或分割肉、带骨或去骨、带皮或去皮，防止冷冻产品进入参考数量。 |
| `energy_carrier_units` | 电网电力、外购蒸汽、外购热水、天然气、柴油和 LPG | Energy；UUID 未解决 | 电网电力用 kWh；各外购热或燃料载体用 MJ | 将每种载体作为独立交换，并保留实测单位和换算因子；不得把电力、蒸汽、热水或燃料汇总成一个能源行。 |
| `refrigerant_mass_balance` | 每种具名制冷剂补充与空气排放 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 分别记录每种制冷剂物质；仅在没有直接泄漏测量时，才根据物质特定库存核算计算排放质量。 |
| `wastewater_load_basis` | 每股废水和处理后出水排放 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 将普通负荷与高有机负荷废水数量分开，并依据匹配的浓度和排水量记录计算每种排放污染物。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 在屠宰场接收门验收的活珍珠鸡，并声明供应商、来源、批次、只数、活质量、到达状态和上游数据集引用 |
| starting_condition_role | 前景屠宰和肉类加工系统的首个技术圈产品投入 |
| product_classification_scope | 珍珠鸡肉，鲜或冷藏；CPC 3.0 代码 21125 提供分类语境，但不包括冷冻珍珠鸡肉、肥肝或单独销售的食用内脏 |
| recursive_input_rule | 同类别的外购鲜或冷藏珍珠鸡肉作为链接上游产品投入记录，不在接收前景过程中重复建立其生产过程 |
| upstream_dataset_requirement | 研究范围宽于前景工厂门时，应链接地理和时间相符的养殖、活禽运输、外购公用工程、燃料、水、制冷剂、化学品、包装和场外处理数据集 |
| disclosure | 声明活禽来源和供应商组合、屠宰与整理路线、击晕方法、分割路线、产品温度、制冷系统和制冷剂、共产品与废物去向、分配方法、清洗系统、废水去向、包装、地理、技术和参考期 |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `boundary_foreground_operations` | 全部前景过程 | 纳入从声明起始条件到工厂门参考产品之间，由工厂运行的活禽接收与待宰、屠宰和整理至清洁可销售禽胴体、条件性分割、冷却、包装、清洗、直接排放、共产品、废物和场内废水处理。 | `eu-jrc-sa-bref-2024` |
| `boundary_life_cycle_links` | 上游和下游阶段 | 养殖、入厂运输、外购投入制造、零售、使用和寿命终止不计入前景边界；生成更宽生命周期结果时须保留显式链接数据集。 | `eu-pef-recommendation-2021-2279` |
| `boundary_complete_inventory` | 前景投入和输出 | 采集全部已知过程投入和输出，包括能源、水、物料、产品、共产品、直接排放和废物；任何排除均须明确、给出理由并符合所声明的环境足迹方法。 | `eu-pef-recommendation-2021-2279` |
| `boundary_product_scope` | 参考产品资格 | 仅接受 CPC 21125 范围内以鲜或冷藏状态放行的珍珠鸡肉；从参考流中排除冷冻珍珠鸡肉、肥肝和单独销售的食用内脏。 | `un-cpc-3-0-2025` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `live_bird_receiving_lairage` | 活禽接收与临时待宰 | `required` | 始终从前景工厂门接收合格活禽开始纳入 | 前景活禽接收 | kg 合格活珍珠鸡 |
| `slaughter_dressing` | 击晕、屠宰、放血、烫毛、脱羽、去内脏与胴体整理 | `required` | 由活珍珠鸡生产肉品时始终纳入 | 前景屠宰与胴体制备 | kg 珍珠鸡整理胴体 |
| `carcass_cutting_portioning` | 胴体分割与切块 | `conditional` | 前景工厂对完整整理胴体进行分割、去骨或切块时纳入 | 前景肉品分割 | kg 鲜珍珠鸡分割肉 |
| `chilling_cold_storage` | 冷却与冷藏 | `required` | 始终纳入至放行温度控制；每个制冷剂行仅在该物质实际存在时适用 | 前景温度控制 | kg 冷藏胴体或分割肉 |
| `packaging_release` | 包装、净重计量与产品放行 | `required` | 始终纳入至净参考产品计量；每个包装组件仅在实际使用时适用 | 前景成品放行 | 1 kg 合格参考产品 |
| `plant_cleaning_sanitation` | 工厂清洗与消毒 | `required` | 始终纳入可归属的清洗消毒；每种化学品和热载体仅在实际使用时适用 | 前景卫生支持 | 每 1 kg 净参考产品 |
| `onsite_wastewater_treatment` | 场内屠宰废水处理 | `conditional` | 废水在环境排放或转移前于场内处理时纳入 | 前景污染控制 | kg 已处理废水 |

### 过程：活禽接收与临时待宰（`live_bird_receiving_lairage`）

#### 输入

##### 产品流

###### 活禽接收与临时待宰—Live guinea fowl（`live_guinea_fowl_input`）

“Live guinea fowl”作为一个具体产品流进入“活禽接收与临时待宰”过程边界；其数量按 cp_receiving_lairage_records 取得。

- 选定流：Live guinea fowl
- 流属性/单位：Mass 93a60a56-a3c8-11da-a746-0800200b9a66 / kg
- 数量规则：实测Live guinea fowl质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_receiving_lairage_records`
- 来源：`eu-jrc-sa-bref-2024`；`eu-pef-recommendation-2021-2279`

###### 活禽接收与临时待宰—Drinking water for live guinea fowl（`receiving_drinking_water_input`）

“Drinking water for live guinea fowl”作为一个具体产品流进入“活禽接收与临时待宰”过程边界；其数量按 cp_receiving_lairage_records 取得。

- 选定流：Drinking water for live guinea fowl
- 流属性/单位：Mass 93a60a56-a3c8-11da-a746-0800200b9a66 / kg
- 数量规则：实测Drinking water for live guinea fowl质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_receiving_lairage_records`
- 来源：`eu-jrc-sa-bref-2024`；`eu-pef-recommendation-2021-2279`

###### 活禽接收与临时待宰—Electricity, grid supply（`receiving_grid_electricity_input`）

“Electricity, grid supply”作为一个具体产品流进入“活禽接收与临时待宰”过程边界；其数量按 cp_receiving_lairage_records 取得。

- 选定流：电网供电
- 流属性/单位：Energy / kWh; flow-property and unit-group UUIDs unresolved
- 数量规则：实测Electricity, grid supply能量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_receiving_lairage_records`
- 来源：`eu-jrc-sa-bref-2024`；`eu-pef-recommendation-2021-2279`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 活禽接收与临时待宰—Live guinea fowl, accepted for slaughter（`accepted_live_guinea_fowl_output`）

“Live guinea fowl, accepted for slaughter”作为一个具体产品流离开“活禽接收与临时待宰”过程边界；其数量按 cp_receiving_lairage_records 取得。

- 选定流：Live guinea fowl, accepted for slaughter
- 流属性/单位：Mass 93a60a56-a3c8-11da-a746-0800200b9a66 / kg
- 数量规则：实测Live guinea fowl, accepted for slaughter质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_receiving_lairage_records`
- 来源：`eu-jrc-sa-bref-2024`；`eu-pef-recommendation-2021-2279`

##### 废物流

###### 活禽接收与临时待宰—Waste guinea fowl dead before slaughter（`dead_guinea_fowl_waste_output`）

“Waste guinea fowl dead before slaughter”作为一个具体废物流离开“活禽接收与临时待宰”过程边界；其数量按 cp_receiving_lairage_records 取得。

- 选定流：Waste guinea fowl dead before slaughter
- 流属性/单位：Mass 93a60a56-a3c8-11da-a746-0800200b9a66 / kg
- 数量规则：实测Waste guinea fowl dead before slaughter质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_receiving_lairage_records`
- 来源：`eu-jrc-sa-bref-2024`；`eu-pef-recommendation-2021-2279`

###### 活禽接收与临时待宰—Waste guinea-fowl manure（`guinea_fowl_manure_waste_output`）

“Waste guinea-fowl manure”作为一个具体废物流离开“活禽接收与临时待宰”过程边界；其数量按 cp_receiving_lairage_records 取得。

- 选定流：Waste guinea-fowl manure
- 流属性/单位：Mass 93a60a56-a3c8-11da-a746-0800200b9a66 / kg
- 数量规则：实测Waste guinea-fowl manure质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_receiving_lairage_records`
- 来源：`eu-jrc-sa-bref-2024`；`eu-pef-recommendation-2021-2279`

###### 活禽接收与临时待宰—Waste wood-shaving litter contaminated by guinea fowl（`receiving_litter_waste_output`）

“Waste wood-shaving litter contaminated by guinea fowl”作为一个具体废物流离开“活禽接收与临时待宰”过程边界；其数量按 cp_receiving_lairage_records 取得。

- 选定流：Waste wood-shaving litter contaminated by guinea fowl
- 流属性/单位：Mass 93a60a56-a3c8-11da-a746-0800200b9a66 / kg
- 数量规则：实测Waste wood-shaving litter contaminated by guinea fowl质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_receiving_lairage_records`
- 来源：`eu-jrc-sa-bref-2024`；`eu-pef-recommendation-2021-2279`

###### 活禽接收与临时待宰—Wastewater from guinea-fowl lairage（`receiving_wastewater_output`）

“Wastewater from guinea-fowl lairage”作为一个具体废物流离开“活禽接收与临时待宰”过程边界；其数量按 cp_receiving_lairage_records 取得。

- 选定流：Wastewater from guinea-fowl lairage
- 流属性/单位：Mass 93a60a56-a3c8-11da-a746-0800200b9a66 / kg
- 数量规则：实测Wastewater from guinea-fowl lairage质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_receiving_lairage_records`
- 来源：`eu-jrc-sa-bref-2024`；`eu-pef-recommendation-2021-2279`

##### 基本流

###### 活禽接收与临时待宰—Ammonia to air（`receiving_ammonia_air_output`）

“Ammonia to air”作为一个具体基本流离开“活禽接收与临时待宰”过程边界；其数量按 cp_receiving_lairage_records 取得。

- 选定流：氨，排入空气
- 流属性/单位：Mass 93a60a56-a3c8-11da-a746-0800200b9a66 / kg
- 数量规则：依据匹配的前景记录计算Ammonia to air质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_receiving_lairage_records`
- 来源：`eu-jrc-sa-bref-2024`；`eu-pef-recommendation-2021-2279`

### 过程：击晕、屠宰、放血、烫毛、脱羽、去内脏与胴体整理（`slaughter_dressing`）

#### 输入

##### 产品流

###### 击晕、屠宰、放血、烫毛、脱羽、去内脏与胴体整理—Live guinea fowl, accepted for slaughter（`slaughter_live_guinea_fowl_input`）

“Live guinea fowl, accepted for slaughter”作为一个具体产品流进入“击晕、屠宰、放血、烫毛、脱羽、去内脏与胴体整理”过程边界；其数量按 cp_slaughter_dressing_records 取得。

- 选定流：Live guinea fowl, accepted for slaughter
- 流属性/单位：Mass 93a60a56-a3c8-11da-a746-0800200b9a66 / kg
- 数量规则：实测Live guinea fowl, accepted for slaughter质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_slaughter_dressing_records`
- 来源：`eu-jrc-sa-bref-2024`；`eu-pef-recommendation-2021-2279`

###### 击晕、屠宰、放血、烫毛、脱羽、去内脏与胴体整理—Process water for guinea-fowl slaughter（`slaughter_process_water_input`）

“Process water for guinea-fowl slaughter”作为一个具体产品流进入“击晕、屠宰、放血、烫毛、脱羽、去内脏与胴体整理”过程边界；其数量按 cp_slaughter_dressing_records 取得。

- 选定流：Process water for guinea-fowl slaughter
- 流属性/单位：Mass 93a60a56-a3c8-11da-a746-0800200b9a66 / kg
- 数量规则：实测Process water for guinea-fowl slaughter质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_slaughter_dressing_records`
- 来源：`eu-jrc-sa-bref-2024`；`eu-pef-recommendation-2021-2279`

###### 击晕、屠宰、放血、烫毛、脱羽、去内脏与胴体整理—Electricity, grid supply（`slaughter_grid_electricity_input`）

“Electricity, grid supply”作为一个具体产品流进入“击晕、屠宰、放血、烫毛、脱羽、去内脏与胴体整理”过程边界；其数量按 cp_slaughter_dressing_records 取得。

- 选定流：电网供电
- 流属性/单位：Energy / kWh; flow-property and unit-group UUIDs unresolved
- 数量规则：实测Electricity, grid supply能量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_slaughter_dressing_records`
- 来源：`eu-jrc-sa-bref-2024`；`eu-pef-recommendation-2021-2279`

###### 击晕、屠宰、放血、烫毛、脱羽、去内脏与胴体整理—Steam, purchased（`slaughter_purchased_steam_input`）

“Steam, purchased”作为一个具体产品流进入“击晕、屠宰、放血、烫毛、脱羽、去内脏与胴体整理”过程边界；其数量按 cp_slaughter_dressing_records 取得。

- 选定流：外购蒸汽
- 流属性/单位：Energy / MJ; flow-property and unit-group UUIDs unresolved
- 数量规则：实测Steam, purchased能量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_slaughter_dressing_records`
- 来源：`eu-jrc-sa-bref-2024`；`eu-pef-recommendation-2021-2279`

###### 击晕、屠宰、放血、烫毛、脱羽、去内脏与胴体整理—Hot water, purchased（`slaughter_purchased_hot_water_input`）

“Hot water, purchased”作为一个具体产品流进入“击晕、屠宰、放血、烫毛、脱羽、去内脏与胴体整理”过程边界；其数量按 cp_slaughter_dressing_records 取得。

- 选定流：外购热水
- 流属性/单位：Energy / MJ; flow-property and unit-group UUIDs unresolved
- 数量规则：实测Hot water, purchased能量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_slaughter_dressing_records`
- 来源：`eu-jrc-sa-bref-2024`；`eu-pef-recommendation-2021-2279`

###### 击晕、屠宰、放血、烫毛、脱羽、去内脏与胴体整理—Natural gas（`slaughter_natural_gas_input`）

“Natural gas”作为一个具体产品流进入“击晕、屠宰、放血、烫毛、脱羽、去内脏与胴体整理”过程边界；其数量按 cp_slaughter_dressing_records 取得。

- 选定流：天然气
- 流属性/单位：Energy / MJ; flow-property and unit-group UUIDs unresolved
- 数量规则：实测Natural gas能量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_slaughter_dressing_records`
- 来源：`eu-jrc-sa-bref-2024`；`eu-pef-recommendation-2021-2279`

###### 击晕、屠宰、放血、烫毛、脱羽、去内脏与胴体整理—Diesel fuel（`slaughter_diesel_input`）

“Diesel fuel”作为一个具体产品流进入“击晕、屠宰、放血、烫毛、脱羽、去内脏与胴体整理”过程边界；其数量按 cp_slaughter_dressing_records 取得。

- 选定流：柴油燃料
- 流属性/单位：Energy / MJ; flow-property and unit-group UUIDs unresolved
- 数量规则：实测Diesel fuel能量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_slaughter_dressing_records`
- 来源：`eu-jrc-sa-bref-2024`；`eu-pef-recommendation-2021-2279`

###### 击晕、屠宰、放血、烫毛、脱羽、去内脏与胴体整理—Liquefied petroleum gas（`slaughter_lpg_input`）

“Liquefied petroleum gas”作为一个具体产品流进入“击晕、屠宰、放血、烫毛、脱羽、去内脏与胴体整理”过程边界；其数量按 cp_slaughter_dressing_records 取得。

- 选定流：液化石油气
- 流属性/单位：Energy / MJ; flow-property and unit-group UUIDs unresolved
- 数量规则：实测Liquefied petroleum gas能量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_slaughter_dressing_records`
- 来源：`eu-jrc-sa-bref-2024`；`eu-pef-recommendation-2021-2279`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 击晕、屠宰、放血、烫毛、脱羽、去内脏与胴体整理—Dressed guinea-fowl carcass, fresh（`dressed_guinea_fowl_carcass_output`）

“Dressed guinea-fowl carcass, fresh”作为一个具体产品流离开“击晕、屠宰、放血、烫毛、脱羽、去内脏与胴体整理”过程边界；其数量按 cp_slaughter_dressing_records 取得。

- 选定流：Dressed guinea-fowl carcass, fresh
- 流属性/单位：Mass 93a60a56-a3c8-11da-a746-0800200b9a66 / kg
- 数量规则：实测Dressed guinea-fowl carcass, fresh质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_slaughter_dressing_records`
- 来源：`eu-jrc-sa-bref-2024`；`eu-pef-recommendation-2021-2279`

###### 击晕、屠宰、放血、烫毛、脱羽、去内脏与胴体整理—Guinea-fowl blood for further processing（`guinea_fowl_blood_coproduct_output`）

“Guinea-fowl blood for further processing”作为一个具体产品流离开“击晕、屠宰、放血、烫毛、脱羽、去内脏与胴体整理”过程边界；其数量按 cp_slaughter_dressing_records 取得。

- 选定流：Guinea-fowl blood for further processing
- 流属性/单位：Mass 93a60a56-a3c8-11da-a746-0800200b9a66 / kg
- 数量规则：实测Guinea-fowl blood for further processing质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_slaughter_dressing_records`
- 来源：`eu-jrc-sa-bref-2024`；`eu-pef-recommendation-2021-2279`

###### 击晕、屠宰、放血、烫毛、脱羽、去内脏与胴体整理—Guinea-fowl feathers for further processing（`guinea_fowl_feathers_coproduct_output`）

“Guinea-fowl feathers for further processing”作为一个具体产品流离开“击晕、屠宰、放血、烫毛、脱羽、去内脏与胴体整理”过程边界；其数量按 cp_slaughter_dressing_records 取得。

- 选定流：Guinea-fowl feathers for further processing
- 流属性/单位：Mass 93a60a56-a3c8-11da-a746-0800200b9a66 / kg
- 数量规则：实测Guinea-fowl feathers for further processing质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_slaughter_dressing_records`
- 来源：`eu-jrc-sa-bref-2024`；`eu-pef-recommendation-2021-2279`

###### 击晕、屠宰、放血、烫毛、脱羽、去内脏与胴体整理—Guinea-fowl liver, edible, excluding fatty liver（`guinea_fowl_liver_coproduct_output`）

“Guinea-fowl liver, edible, excluding fatty liver”作为一个具体产品流离开“击晕、屠宰、放血、烫毛、脱羽、去内脏与胴体整理”过程边界；其数量按 cp_slaughter_dressing_records 取得。

- 选定流：Guinea-fowl liver, edible, excluding fatty liver
- 流属性/单位：Mass 93a60a56-a3c8-11da-a746-0800200b9a66 / kg
- 数量规则：实测Guinea-fowl liver, edible, excluding fatty liver质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_slaughter_dressing_records`
- 来源：`un-cpc-3-0-2025`；`eu-jrc-sa-bref-2024`；`eu-pef-recommendation-2021-2279`

###### 击晕、屠宰、放血、烫毛、脱羽、去内脏与胴体整理—Guinea-fowl heart, edible（`guinea_fowl_heart_coproduct_output`）

“Guinea-fowl heart, edible”作为一个具体产品流离开“击晕、屠宰、放血、烫毛、脱羽、去内脏与胴体整理”过程边界；其数量按 cp_slaughter_dressing_records 取得。

- 选定流：Guinea-fowl heart, edible
- 流属性/单位：Mass 93a60a56-a3c8-11da-a746-0800200b9a66 / kg
- 数量规则：实测Guinea-fowl heart, edible质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_slaughter_dressing_records`
- 来源：`un-cpc-3-0-2025`；`eu-jrc-sa-bref-2024`；`eu-pef-recommendation-2021-2279`

###### 击晕、屠宰、放血、烫毛、脱羽、去内脏与胴体整理—Guinea-fowl gizzard, edible（`guinea_fowl_gizzard_coproduct_output`）

“Guinea-fowl gizzard, edible”作为一个具体产品流离开“击晕、屠宰、放血、烫毛、脱羽、去内脏与胴体整理”过程边界；其数量按 cp_slaughter_dressing_records 取得。

- 选定流：Guinea-fowl gizzard, edible
- 流属性/单位：Mass 93a60a56-a3c8-11da-a746-0800200b9a66 / kg
- 数量规则：实测Guinea-fowl gizzard, edible质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_slaughter_dressing_records`
- 来源：`un-cpc-3-0-2025`；`eu-jrc-sa-bref-2024`；`eu-pef-recommendation-2021-2279`

###### 击晕、屠宰、放血、烫毛、脱羽、去内脏与胴体整理—Guinea-fowl neck（`guinea_fowl_neck_coproduct_output`）

“Guinea-fowl neck”作为一个具体产品流离开“击晕、屠宰、放血、烫毛、脱羽、去内脏与胴体整理”过程边界；其数量按 cp_slaughter_dressing_records 取得。

- 选定流：Guinea-fowl neck
- 流属性/单位：Mass 93a60a56-a3c8-11da-a746-0800200b9a66 / kg
- 数量规则：实测Guinea-fowl neck质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_slaughter_dressing_records`
- 来源：`eu-jrc-sa-bref-2024`；`eu-pef-recommendation-2021-2279`

###### 击晕、屠宰、放血、烫毛、脱羽、去内脏与胴体整理—Guinea-fowl feet for further processing（`guinea_fowl_feet_coproduct_output`）

“Guinea-fowl feet for further processing”作为一个具体产品流离开“击晕、屠宰、放血、烫毛、脱羽、去内脏与胴体整理”过程边界；其数量按 cp_slaughter_dressing_records 取得。

- 选定流：Guinea-fowl feet for further processing
- 流属性/单位：Mass 93a60a56-a3c8-11da-a746-0800200b9a66 / kg
- 数量规则：实测Guinea-fowl feet for further processing质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_slaughter_dressing_records`
- 来源：`eu-jrc-sa-bref-2024`；`eu-pef-recommendation-2021-2279`

###### 击晕、屠宰、放血、烫毛、脱羽、去内脏与胴体整理—Recovered guinea-fowl fat（`guinea_fowl_fat_coproduct_output`）

“Recovered guinea-fowl fat”作为一个具体产品流离开“击晕、屠宰、放血、烫毛、脱羽、去内脏与胴体整理”过程边界；其数量按 cp_slaughter_dressing_records 取得。

- 选定流：Recovered guinea-fowl fat
- 流属性/单位：Mass 93a60a56-a3c8-11da-a746-0800200b9a66 / kg
- 数量规则：实测Recovered guinea-fowl fat质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_slaughter_dressing_records`
- 来源：`eu-jrc-sa-bref-2024`；`eu-pef-recommendation-2021-2279`

##### 废物流

###### 击晕、屠宰、放血、烫毛、脱羽、去内脏与胴体整理—Waste guinea-fowl blood（`guinea_fowl_blood_waste_output`）

“Waste guinea-fowl blood”作为一个具体废物流离开“击晕、屠宰、放血、烫毛、脱羽、去内脏与胴体整理”过程边界；其数量按 cp_slaughter_dressing_records 取得。

- 选定流：Waste guinea-fowl blood
- 流属性/单位：Mass 93a60a56-a3c8-11da-a746-0800200b9a66 / kg
- 数量规则：实测Waste guinea-fowl blood质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_slaughter_dressing_records`
- 来源：`eu-jrc-sa-bref-2024`；`eu-pef-recommendation-2021-2279`

###### 击晕、屠宰、放血、烫毛、脱羽、去内脏与胴体整理—Waste guinea-fowl feathers（`guinea_fowl_feathers_waste_output`）

“Waste guinea-fowl feathers”作为一个具体废物流离开“击晕、屠宰、放血、烫毛、脱羽、去内脏与胴体整理”过程边界；其数量按 cp_slaughter_dressing_records 取得。

- 选定流：Waste guinea-fowl feathers
- 流属性/单位：Mass 93a60a56-a3c8-11da-a746-0800200b9a66 / kg
- 数量规则：实测Waste guinea-fowl feathers质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_slaughter_dressing_records`
- 来源：`eu-jrc-sa-bref-2024`；`eu-pef-recommendation-2021-2279`

###### 击晕、屠宰、放血、烫毛、脱羽、去内脏与胴体整理—Waste condemned guinea-fowl organs（`condemned_guinea_fowl_organs_waste_output`）

“Waste condemned guinea-fowl organs”作为一个具体废物流离开“击晕、屠宰、放血、烫毛、脱羽、去内脏与胴体整理”过程边界；其数量按 cp_slaughter_dressing_records 取得。

- 选定流：Waste condemned guinea-fowl organs
- 流属性/单位：Mass 93a60a56-a3c8-11da-a746-0800200b9a66 / kg
- 数量规则：实测Waste condemned guinea-fowl organs质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_slaughter_dressing_records`
- 来源：`eu-jrc-sa-bref-2024`；`eu-pef-recommendation-2021-2279`

###### 击晕、屠宰、放血、烫毛、脱羽、去内脏与胴体整理—Waste guinea-fowl stomach contents（`guinea_fowl_stomach_contents_waste_output`）

“Waste guinea-fowl stomach contents”作为一个具体废物流离开“击晕、屠宰、放血、烫毛、脱羽、去内脏与胴体整理”过程边界；其数量按 cp_slaughter_dressing_records 取得。

- 选定流：Waste guinea-fowl stomach contents
- 流属性/单位：Mass 93a60a56-a3c8-11da-a746-0800200b9a66 / kg
- 数量规则：实测Waste guinea-fowl stomach contents质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_slaughter_dressing_records`
- 来源：`eu-jrc-sa-bref-2024`；`eu-pef-recommendation-2021-2279`

###### 击晕、屠宰、放血、烫毛、脱羽、去内脏与胴体整理—Waste guinea-fowl intestinal contents（`guinea_fowl_intestinal_contents_waste_output`）

“Waste guinea-fowl intestinal contents”作为一个具体废物流离开“击晕、屠宰、放血、烫毛、脱羽、去内脏与胴体整理”过程边界；其数量按 cp_slaughter_dressing_records 取得。

- 选定流：Waste guinea-fowl intestinal contents
- 流属性/单位：Mass 93a60a56-a3c8-11da-a746-0800200b9a66 / kg
- 数量规则：实测Waste guinea-fowl intestinal contents质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_slaughter_dressing_records`
- 来源：`eu-jrc-sa-bref-2024`；`eu-pef-recommendation-2021-2279`

###### 击晕、屠宰、放血、烫毛、脱羽、去内脏与胴体整理—Waste guinea-fowl intestines（`guinea_fowl_intestines_waste_output`）

“Waste guinea-fowl intestines”作为一个具体废物流离开“击晕、屠宰、放血、烫毛、脱羽、去内脏与胴体整理”过程边界；其数量按 cp_slaughter_dressing_records 取得。

- 选定流：Waste guinea-fowl intestines
- 流属性/单位：Mass 93a60a56-a3c8-11da-a746-0800200b9a66 / kg
- 数量规则：实测Waste guinea-fowl intestines质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_slaughter_dressing_records`
- 来源：`eu-jrc-sa-bref-2024`；`eu-pef-recommendation-2021-2279`

###### 击晕、屠宰、放血、烫毛、脱羽、去内脏与胴体整理—Waste guinea-fowl fat（`guinea_fowl_fat_waste_output`）

“Waste guinea-fowl fat”作为一个具体废物流离开“击晕、屠宰、放血、烫毛、脱羽、去内脏与胴体整理”过程边界；其数量按 cp_slaughter_dressing_records 取得。

- 选定流：Waste guinea-fowl fat
- 流属性/单位：Mass 93a60a56-a3c8-11da-a746-0800200b9a66 / kg
- 数量规则：实测Waste guinea-fowl fat质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_slaughter_dressing_records`
- 来源：`eu-jrc-sa-bref-2024`；`eu-pef-recommendation-2021-2279`

###### 击晕、屠宰、放血、烫毛、脱羽、去内脏与胴体整理—Waste condemned guinea-fowl carcass material（`condemned_carcass_waste_output`）

“Waste condemned guinea-fowl carcass material”作为一个具体废物流离开“击晕、屠宰、放血、烫毛、脱羽、去内脏与胴体整理”过程边界；其数量按 cp_slaughter_dressing_records 取得。

- 选定流：Waste condemned guinea-fowl carcass material
- 流属性/单位：Mass 93a60a56-a3c8-11da-a746-0800200b9a66 / kg
- 数量规则：实测Waste condemned guinea-fowl carcass material质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_slaughter_dressing_records`
- 来源：`eu-jrc-sa-bref-2024`；`eu-pef-recommendation-2021-2279`

###### 击晕、屠宰、放血、烫毛、脱羽、去内脏与胴体整理—High-organic-load wastewater from guinea-fowl slaughter（`slaughter_high_load_wastewater_output`）

“High-organic-load wastewater from guinea-fowl slaughter”作为一个具体废物流离开“击晕、屠宰、放血、烫毛、脱羽、去内脏与胴体整理”过程边界；其数量按 cp_slaughter_dressing_records 取得。

- 选定流：High-organic-load wastewater from guinea-fowl slaughter
- 流属性/单位：Mass 93a60a56-a3c8-11da-a746-0800200b9a66 / kg
- 数量规则：实测High-organic-load wastewater from guinea-fowl slaughter质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_slaughter_dressing_records`
- 来源：`eu-jrc-sa-bref-2024`；`eu-pef-recommendation-2021-2279`

###### 击晕、屠宰、放血、烫毛、脱羽、去内脏与胴体整理—Ordinary-load wastewater from guinea-fowl slaughter（`slaughter_ordinary_wastewater_output`）

“Ordinary-load wastewater from guinea-fowl slaughter”作为一个具体废物流离开“击晕、屠宰、放血、烫毛、脱羽、去内脏与胴体整理”过程边界；其数量按 cp_slaughter_dressing_records 取得。

- 选定流：Ordinary-load wastewater from guinea-fowl slaughter
- 流属性/单位：Mass 93a60a56-a3c8-11da-a746-0800200b9a66 / kg
- 数量规则：实测Ordinary-load wastewater from guinea-fowl slaughter质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_slaughter_dressing_records`
- 来源：`eu-jrc-sa-bref-2024`；`eu-pef-recommendation-2021-2279`

##### 基本流

###### 击晕、屠宰、放血、烫毛、脱羽、去内脏与胴体整理—Carbon dioxide, fossil, to air（`slaughter_fossil_co2_air_output`）

“Carbon dioxide, fossil, to air”作为一个具体基本流离开“击晕、屠宰、放血、烫毛、脱羽、去内脏与胴体整理”过程边界；其数量按 cp_slaughter_dressing_records 取得。

- 选定流：化石源二氧化碳，排入空气
- 流属性/单位：Mass 93a60a56-a3c8-11da-a746-0800200b9a66 / kg
- 数量规则：依据匹配的前景记录计算Carbon dioxide, fossil, to air质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_slaughter_dressing_records`
- 来源：`eu-jrc-sa-bref-2024`；`eu-pef-recommendation-2021-2279`

###### 击晕、屠宰、放血、烫毛、脱羽、去内脏与胴体整理—Nitrogen oxides to air（`slaughter_nox_air_output`）

“Nitrogen oxides to air”作为一个具体基本流离开“击晕、屠宰、放血、烫毛、脱羽、去内脏与胴体整理”过程边界；其数量按 cp_slaughter_dressing_records 取得。

- 选定流：氮氧化物，排入空气
- 流属性/单位：Mass 93a60a56-a3c8-11da-a746-0800200b9a66 / kg
- 数量规则：依据匹配的前景记录计算Nitrogen oxides to air质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_slaughter_dressing_records`
- 来源：`eu-jrc-sa-bref-2024`；`eu-pef-recommendation-2021-2279`

###### 击晕、屠宰、放血、烫毛、脱羽、去内脏与胴体整理—Sulfur oxides to air（`slaughter_sox_air_output`）

“Sulfur oxides to air”作为一个具体基本流离开“击晕、屠宰、放血、烫毛、脱羽、去内脏与胴体整理”过程边界；其数量按 cp_slaughter_dressing_records 取得。

- 选定流：硫氧化物，排入空气
- 流属性/单位：Mass 93a60a56-a3c8-11da-a746-0800200b9a66 / kg
- 数量规则：依据匹配的前景记录计算Sulfur oxides to air质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_slaughter_dressing_records`
- 来源：`eu-jrc-sa-bref-2024`；`eu-pef-recommendation-2021-2279`

###### 击晕、屠宰、放血、烫毛、脱羽、去内脏与胴体整理—Particulate matter, less than 2.5 micrometres, to air（`slaughter_pm25_air_output`）

“Particulate matter, less than 2.5 micrometres, to air”作为一个具体基本流离开“击晕、屠宰、放血、烫毛、脱羽、去内脏与胴体整理”过程边界；其数量按 cp_slaughter_dressing_records 取得。

- 选定流：粒径小于2.5微米的颗粒物，排入空气
- 流属性/单位：Mass 93a60a56-a3c8-11da-a746-0800200b9a66 / kg
- 数量规则：依据匹配的前景记录计算Particulate matter, less than 2.5 micrometres, to air质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_slaughter_dressing_records`
- 来源：`eu-jrc-sa-bref-2024`；`eu-pef-recommendation-2021-2279`

### 过程：胴体分割与切块（`carcass_cutting_portioning`）

#### 输入

##### 产品流

###### 胴体分割与切块—Dressed guinea-fowl carcass, fresh（`cutting_dressed_carcass_input`）

“Dressed guinea-fowl carcass, fresh”作为一个具体产品流进入“胴体分割与切块”过程边界；其数量按 cp_cutting_portioning_records 取得。

- 选定流：Dressed guinea-fowl carcass, fresh
- 流属性/单位：Mass 93a60a56-a3c8-11da-a746-0800200b9a66 / kg
- 数量规则：实测Dressed guinea-fowl carcass, fresh质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cutting_portioning_records`
- 来源：`eu-jrc-sa-bref-2024`；`eu-pef-recommendation-2021-2279`

###### 胴体分割与切块—Process water for guinea-fowl cutting（`cutting_process_water_input`）

“Process water for guinea-fowl cutting”作为一个具体产品流进入“胴体分割与切块”过程边界；其数量按 cp_cutting_portioning_records 取得。

- 选定流：Process water for guinea-fowl cutting
- 流属性/单位：Mass 93a60a56-a3c8-11da-a746-0800200b9a66 / kg
- 数量规则：实测Process water for guinea-fowl cutting质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cutting_portioning_records`
- 来源：`eu-jrc-sa-bref-2024`；`eu-pef-recommendation-2021-2279`

###### 胴体分割与切块—Electricity, grid supply（`cutting_grid_electricity_input`）

“Electricity, grid supply”作为一个具体产品流进入“胴体分割与切块”过程边界；其数量按 cp_cutting_portioning_records 取得。

- 选定流：电网供电
- 流属性/单位：Energy / kWh; flow-property and unit-group UUIDs unresolved
- 数量规则：实测Electricity, grid supply能量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cutting_portioning_records`
- 来源：`eu-jrc-sa-bref-2024`；`eu-pef-recommendation-2021-2279`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 胴体分割与切块—Guinea-fowl meat cuts, fresh（`fresh_guinea_fowl_cuts_output`）

“Guinea-fowl meat cuts, fresh”作为一个具体产品流离开“胴体分割与切块”过程边界；其数量按 cp_cutting_portioning_records 取得。

- 选定流：Guinea-fowl meat cuts, fresh
- 流属性/单位：Mass 93a60a56-a3c8-11da-a746-0800200b9a66 / kg
- 数量规则：实测Guinea-fowl meat cuts, fresh质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cutting_portioning_records`
- 来源：`eu-jrc-sa-bref-2024`；`eu-pef-recommendation-2021-2279`

###### 胴体分割与切块—Guinea-fowl bones for further processing（`guinea_fowl_bones_coproduct_output`）

“Guinea-fowl bones for further processing”作为一个具体产品流离开“胴体分割与切块”过程边界；其数量按 cp_cutting_portioning_records 取得。

- 选定流：Guinea-fowl bones for further processing
- 流属性/单位：Mass 93a60a56-a3c8-11da-a746-0800200b9a66 / kg
- 数量规则：实测Guinea-fowl bones for further processing质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cutting_portioning_records`
- 来源：`eu-jrc-sa-bref-2024`；`eu-pef-recommendation-2021-2279`

###### 胴体分割与切块—Guinea-fowl skin for further processing（`guinea_fowl_skin_coproduct_output`）

“Guinea-fowl skin for further processing”作为一个具体产品流离开“胴体分割与切块”过程边界；其数量按 cp_cutting_portioning_records 取得。

- 选定流：Guinea-fowl skin for further processing
- 流属性/单位：Mass 93a60a56-a3c8-11da-a746-0800200b9a66 / kg
- 数量规则：实测Guinea-fowl skin for further processing质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cutting_portioning_records`
- 来源：`eu-jrc-sa-bref-2024`；`eu-pef-recommendation-2021-2279`

###### 胴体分割与切块—Recovered guinea-fowl cutting fat（`cutting_fat_coproduct_output`）

“Recovered guinea-fowl cutting fat”作为一个具体产品流离开“胴体分割与切块”过程边界；其数量按 cp_cutting_portioning_records 取得。

- 选定流：Recovered guinea-fowl cutting fat
- 流属性/单位：Mass 93a60a56-a3c8-11da-a746-0800200b9a66 / kg
- 数量规则：实测Recovered guinea-fowl cutting fat质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cutting_portioning_records`
- 来源：`eu-jrc-sa-bref-2024`；`eu-pef-recommendation-2021-2279`

##### 废物流

###### 胴体分割与切块—Waste guinea-fowl bones（`guinea_fowl_bones_waste_output`）

“Waste guinea-fowl bones”作为一个具体废物流离开“胴体分割与切块”过程边界；其数量按 cp_cutting_portioning_records 取得。

- 选定流：Waste guinea-fowl bones
- 流属性/单位：Mass 93a60a56-a3c8-11da-a746-0800200b9a66 / kg
- 数量规则：实测Waste guinea-fowl bones质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cutting_portioning_records`
- 来源：`eu-jrc-sa-bref-2024`；`eu-pef-recommendation-2021-2279`

###### 胴体分割与切块—Waste guinea-fowl skin（`guinea_fowl_skin_waste_output`）

“Waste guinea-fowl skin”作为一个具体废物流离开“胴体分割与切块”过程边界；其数量按 cp_cutting_portioning_records 取得。

- 选定流：Waste guinea-fowl skin
- 流属性/单位：Mass 93a60a56-a3c8-11da-a746-0800200b9a66 / kg
- 数量规则：实测Waste guinea-fowl skin质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cutting_portioning_records`
- 来源：`eu-jrc-sa-bref-2024`；`eu-pef-recommendation-2021-2279`

###### 胴体分割与切块—Waste guinea-fowl cutting fat（`cutting_fat_waste_output`）

“Waste guinea-fowl cutting fat”作为一个具体废物流离开“胴体分割与切块”过程边界；其数量按 cp_cutting_portioning_records 取得。

- 选定流：Waste guinea-fowl cutting fat
- 流属性/单位：Mass 93a60a56-a3c8-11da-a746-0800200b9a66 / kg
- 数量规则：实测Waste guinea-fowl cutting fat质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cutting_portioning_records`
- 来源：`eu-jrc-sa-bref-2024`；`eu-pef-recommendation-2021-2279`

###### 胴体分割与切块—Waste guinea-fowl meat trim（`cutting_trim_waste_output`）

“Waste guinea-fowl meat trim”作为一个具体废物流离开“胴体分割与切块”过程边界；其数量按 cp_cutting_portioning_records 取得。

- 选定流：Waste guinea-fowl meat trim
- 流属性/单位：Mass 93a60a56-a3c8-11da-a746-0800200b9a66 / kg
- 数量规则：实测Waste guinea-fowl meat trim质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cutting_portioning_records`
- 来源：`eu-jrc-sa-bref-2024`；`eu-pef-recommendation-2021-2279`

###### 胴体分割与切块—Wastewater from guinea-fowl carcass cutting（`cutting_wastewater_output`）

“Wastewater from guinea-fowl carcass cutting”作为一个具体废物流离开“胴体分割与切块”过程边界；其数量按 cp_cutting_portioning_records 取得。

- 选定流：Wastewater from guinea-fowl carcass cutting
- 流属性/单位：Mass 93a60a56-a3c8-11da-a746-0800200b9a66 / kg
- 数量规则：实测Wastewater from guinea-fowl carcass cutting质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cutting_portioning_records`
- 来源：`eu-jrc-sa-bref-2024`；`eu-pef-recommendation-2021-2279`

##### 基本流

### 过程：冷却与冷藏（`chilling_cold_storage`）

#### 输入

##### 产品流

###### 冷却与冷藏—Dressed guinea-fowl carcass before chilling（`chilling_carcass_input`）

“Dressed guinea-fowl carcass before chilling”作为一个具体产品流进入“冷却与冷藏”过程边界；其数量按 cp_chilling_storage_records 取得。

- 选定流：Dressed guinea-fowl carcass before chilling
- 流属性/单位：Mass 93a60a56-a3c8-11da-a746-0800200b9a66 / kg
- 数量规则：实测Dressed guinea-fowl carcass before chilling质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_chilling_storage_records`
- 来源：`eu-jrc-sa-bref-2024`；`eu-pef-recommendation-2021-2279`

###### 冷却与冷藏—Guinea-fowl meat cuts before chilling（`chilling_cuts_input`）

“Guinea-fowl meat cuts before chilling”作为一个具体产品流进入“冷却与冷藏”过程边界；其数量按 cp_chilling_storage_records 取得。

- 选定流：Guinea-fowl meat cuts before chilling
- 流属性/单位：Mass 93a60a56-a3c8-11da-a746-0800200b9a66 / kg
- 数量规则：实测Guinea-fowl meat cuts before chilling质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_chilling_storage_records`
- 来源：`eu-jrc-sa-bref-2024`；`eu-pef-recommendation-2021-2279`

###### 冷却与冷藏—Process water for carcass chilling（`chilling_process_water_input`）

“Process water for carcass chilling”作为一个具体产品流进入“冷却与冷藏”过程边界；其数量按 cp_chilling_storage_records 取得。

- 选定流：Process water for carcass chilling
- 流属性/单位：Mass 93a60a56-a3c8-11da-a746-0800200b9a66 / kg
- 数量规则：实测Process water for carcass chilling质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_chilling_storage_records`
- 来源：`eu-jrc-sa-bref-2024`；`eu-pef-recommendation-2021-2279`

###### 冷却与冷藏—Electricity, grid supply（`chilling_grid_electricity_input`）

“Electricity, grid supply”作为一个具体产品流进入“冷却与冷藏”过程边界；其数量按 cp_chilling_storage_records 取得。

- 选定流：电网供电
- 流属性/单位：Energy / kWh; flow-property and unit-group UUIDs unresolved
- 数量规则：实测Electricity, grid supply能量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_chilling_storage_records`
- 来源：`eu-jrc-sa-bref-2024`；`eu-pef-recommendation-2021-2279`

###### 冷却与冷藏—Steam, purchased（`chilling_purchased_steam_input`）

“Steam, purchased”作为一个具体产品流进入“冷却与冷藏”过程边界；其数量按 cp_chilling_storage_records 取得。

- 选定流：外购蒸汽
- 流属性/单位：Energy / MJ; flow-property and unit-group UUIDs unresolved
- 数量规则：实测Steam, purchased能量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_chilling_storage_records`
- 来源：`eu-jrc-sa-bref-2024`；`eu-pef-recommendation-2021-2279`

###### 冷却与冷藏—Hot water, purchased（`chilling_purchased_hot_water_input`）

“Hot water, purchased”作为一个具体产品流进入“冷却与冷藏”过程边界；其数量按 cp_chilling_storage_records 取得。

- 选定流：外购热水
- 流属性/单位：Energy / MJ; flow-property and unit-group UUIDs unresolved
- 数量规则：实测Hot water, purchased能量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_chilling_storage_records`
- 来源：`eu-jrc-sa-bref-2024`；`eu-pef-recommendation-2021-2279`

###### 冷却与冷藏—Natural gas（`chilling_natural_gas_input`）

“Natural gas”作为一个具体产品流进入“冷却与冷藏”过程边界；其数量按 cp_chilling_storage_records 取得。

- 选定流：天然气
- 流属性/单位：Energy / MJ; flow-property and unit-group UUIDs unresolved
- 数量规则：实测Natural gas能量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_chilling_storage_records`
- 来源：`eu-jrc-sa-bref-2024`；`eu-pef-recommendation-2021-2279`

###### 冷却与冷藏—Diesel fuel（`chilling_diesel_input`）

“Diesel fuel”作为一个具体产品流进入“冷却与冷藏”过程边界；其数量按 cp_chilling_storage_records 取得。

- 选定流：柴油燃料
- 流属性/单位：Energy / MJ; flow-property and unit-group UUIDs unresolved
- 数量规则：实测Diesel fuel能量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_chilling_storage_records`
- 来源：`eu-jrc-sa-bref-2024`；`eu-pef-recommendation-2021-2279`

###### 冷却与冷藏—Liquefied petroleum gas（`chilling_lpg_input`）

“Liquefied petroleum gas”作为一个具体产品流进入“冷却与冷藏”过程边界；其数量按 cp_chilling_storage_records 取得。

- 选定流：液化石油气
- 流属性/单位：Energy / MJ; flow-property and unit-group UUIDs unresolved
- 数量规则：实测Liquefied petroleum gas能量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_chilling_storage_records`
- 来源：`eu-jrc-sa-bref-2024`；`eu-pef-recommendation-2021-2279`

###### 冷却与冷藏—Ammonia, refrigerant grade（`ammonia_refrigerant_makeup_input`）

“Ammonia, refrigerant grade”作为一个具体产品流进入“冷却与冷藏”过程边界；其数量按 cp_chilling_storage_records 取得。

- 选定流：Ammonia, refrigerant grade
- 流属性/单位：Mass 93a60a56-a3c8-11da-a746-0800200b9a66 / kg
- 数量规则：实测Ammonia, refrigerant grade质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_chilling_storage_records`
- 来源：`eu-jrc-sa-bref-2024`；`eu-pef-recommendation-2021-2279`

###### 冷却与冷藏—Carbon dioxide, refrigerant grade（`carbon_dioxide_refrigerant_makeup_input`）

“Carbon dioxide, refrigerant grade”作为一个具体产品流进入“冷却与冷藏”过程边界；其数量按 cp_chilling_storage_records 取得。

- 选定流：Carbon dioxide, refrigerant grade
- 流属性/单位：Mass 93a60a56-a3c8-11da-a746-0800200b9a66 / kg
- 数量规则：实测Carbon dioxide, refrigerant grade质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_chilling_storage_records`
- 来源：`eu-jrc-sa-bref-2024`；`eu-pef-recommendation-2021-2279`

###### 冷却与冷藏—Refrigerant R404A（`r404a_refrigerant_makeup_input`）

“Refrigerant R404A”作为一个具体产品流进入“冷却与冷藏”过程边界；其数量按 cp_chilling_storage_records 取得。

- 选定流：制冷剂R404A
- 流属性/单位：Mass 93a60a56-a3c8-11da-a746-0800200b9a66 / kg
- 数量规则：实测Refrigerant R404A质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_chilling_storage_records`
- 来源：`eu-jrc-sa-bref-2024`；`eu-pef-recommendation-2021-2279`

###### 冷却与冷藏—Refrigerant R134a（`r134a_refrigerant_makeup_input`）

“Refrigerant R134a”作为一个具体产品流进入“冷却与冷藏”过程边界；其数量按 cp_chilling_storage_records 取得。

- 选定流：Refrigerant R134a
- 流属性/单位：Mass 93a60a56-a3c8-11da-a746-0800200b9a66 / kg
- 数量规则：实测Refrigerant R134a质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_chilling_storage_records`
- 来源：`eu-jrc-sa-bref-2024`；`eu-pef-recommendation-2021-2279`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 冷却与冷藏—Guinea-fowl carcass, chilled（`chilled_guinea_fowl_carcass_output`）

“Guinea-fowl carcass, chilled”作为一个具体产品流离开“冷却与冷藏”过程边界；其数量按 cp_chilling_storage_records 取得。

- 选定流：Guinea-fowl carcass, chilled
- 流属性/单位：Mass 93a60a56-a3c8-11da-a746-0800200b9a66 / kg
- 数量规则：实测Guinea-fowl carcass, chilled质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_chilling_storage_records`
- 来源：`eu-jrc-sa-bref-2024`；`eu-pef-recommendation-2021-2279`

###### 冷却与冷藏—Guinea-fowl meat cuts, chilled（`chilled_guinea_fowl_cuts_output`）

“Guinea-fowl meat cuts, chilled”作为一个具体产品流离开“冷却与冷藏”过程边界；其数量按 cp_chilling_storage_records 取得。

- 选定流：Guinea-fowl meat cuts, chilled
- 流属性/单位：Mass 93a60a56-a3c8-11da-a746-0800200b9a66 / kg
- 数量规则：实测Guinea-fowl meat cuts, chilled质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_chilling_storage_records`
- 来源：`eu-jrc-sa-bref-2024`；`eu-pef-recommendation-2021-2279`

##### 废物流

###### 冷却与冷藏—Waste off-spec chilled guinea-fowl meat（`off_spec_chilled_meat_waste_output`）

“Waste off-spec chilled guinea-fowl meat”作为一个具体废物流离开“冷却与冷藏”过程边界；其数量按 cp_chilling_storage_records 取得。

- 选定流：Waste off-spec chilled guinea-fowl meat
- 流属性/单位：Mass 93a60a56-a3c8-11da-a746-0800200b9a66 / kg
- 数量规则：实测Waste off-spec chilled guinea-fowl meat质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_chilling_storage_records`
- 来源：`eu-jrc-sa-bref-2024`；`eu-pef-recommendation-2021-2279`

###### 冷却与冷藏—Waste refrigeration compressor oil（`refrigeration_oil_waste_output`）

“Waste refrigeration compressor oil”作为一个具体废物流离开“冷却与冷藏”过程边界；其数量按 cp_chilling_storage_records 取得。

- 选定流：Waste refrigeration compressor oil
- 流属性/单位：Mass 93a60a56-a3c8-11da-a746-0800200b9a66 / kg
- 数量规则：实测Waste refrigeration compressor oil质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_chilling_storage_records`
- 来源：`eu-jrc-sa-bref-2024`；`eu-pef-recommendation-2021-2279`

###### 冷却与冷藏—Wastewater from refrigeration defrost（`chilling_defrost_wastewater_output`）

“Wastewater from refrigeration defrost”作为一个具体废物流离开“冷却与冷藏”过程边界；其数量按 cp_chilling_storage_records 取得。

- 选定流：Wastewater from refrigeration defrost
- 流属性/单位：Mass 93a60a56-a3c8-11da-a746-0800200b9a66 / kg
- 数量规则：实测Wastewater from refrigeration defrost质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_chilling_storage_records`
- 来源：`eu-jrc-sa-bref-2024`；`eu-pef-recommendation-2021-2279`

##### 基本流

###### 冷却与冷藏—Ammonia, refrigerant, to air（`ammonia_refrigerant_air_output`）

“Ammonia, refrigerant, to air”作为一个具体基本流离开“冷却与冷藏”过程边界；其数量按 cp_chilling_storage_records 取得。

- 选定流：Ammonia, refrigerant, to air
- 流属性/单位：Mass 93a60a56-a3c8-11da-a746-0800200b9a66 / kg
- 数量规则：依据匹配的前景记录计算Ammonia, refrigerant, to air质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_chilling_storage_records`
- 来源：`eu-jrc-sa-bref-2024`；`eu-pef-recommendation-2021-2279`

###### 冷却与冷藏—Carbon dioxide, refrigerant, to air（`carbon_dioxide_refrigerant_air_output`）

“Carbon dioxide, refrigerant, to air”作为一个具体基本流离开“冷却与冷藏”过程边界；其数量按 cp_chilling_storage_records 取得。

- 选定流：Carbon dioxide, refrigerant, to air
- 流属性/单位：Mass 93a60a56-a3c8-11da-a746-0800200b9a66 / kg
- 数量规则：依据匹配的前景记录计算Carbon dioxide, refrigerant, to air质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_chilling_storage_records`
- 来源：`eu-jrc-sa-bref-2024`；`eu-pef-recommendation-2021-2279`

###### 冷却与冷藏—Refrigerant R404A to air（`r404a_refrigerant_air_output`）

“Refrigerant R404A to air”作为一个具体基本流离开“冷却与冷藏”过程边界；其数量按 cp_chilling_storage_records 取得。

- 选定流：制冷剂R404A，排入空气
- 流属性/单位：Mass 93a60a56-a3c8-11da-a746-0800200b9a66 / kg
- 数量规则：依据匹配的前景记录计算Refrigerant R404A to air质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_chilling_storage_records`
- 来源：`eu-jrc-sa-bref-2024`；`eu-pef-recommendation-2021-2279`

###### 冷却与冷藏—Refrigerant R134a to air（`r134a_refrigerant_air_output`）

“Refrigerant R134a to air”作为一个具体基本流离开“冷却与冷藏”过程边界；其数量按 cp_chilling_storage_records 取得。

- 选定流：Refrigerant R134a to air
- 流属性/单位：Mass 93a60a56-a3c8-11da-a746-0800200b9a66 / kg
- 数量规则：依据匹配的前景记录计算Refrigerant R134a to air质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_chilling_storage_records`
- 来源：`eu-jrc-sa-bref-2024`；`eu-pef-recommendation-2021-2279`

###### 冷却与冷藏—Carbon dioxide, fossil, to air（`chilling_fossil_co2_air_output`）

“Carbon dioxide, fossil, to air”作为一个具体基本流离开“冷却与冷藏”过程边界；其数量按 cp_chilling_storage_records 取得。

- 选定流：化石源二氧化碳，排入空气
- 流属性/单位：Mass 93a60a56-a3c8-11da-a746-0800200b9a66 / kg
- 数量规则：依据匹配的前景记录计算Carbon dioxide, fossil, to air质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_chilling_storage_records`
- 来源：`eu-jrc-sa-bref-2024`；`eu-pef-recommendation-2021-2279`

###### 冷却与冷藏—Nitrogen oxides to air（`chilling_nox_air_output`）

“Nitrogen oxides to air”作为一个具体基本流离开“冷却与冷藏”过程边界；其数量按 cp_chilling_storage_records 取得。

- 选定流：氮氧化物，排入空气
- 流属性/单位：Mass 93a60a56-a3c8-11da-a746-0800200b9a66 / kg
- 数量规则：依据匹配的前景记录计算Nitrogen oxides to air质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_chilling_storage_records`
- 来源：`eu-jrc-sa-bref-2024`；`eu-pef-recommendation-2021-2279`

###### 冷却与冷藏—Sulfur oxides to air（`chilling_sox_air_output`）

“Sulfur oxides to air”作为一个具体基本流离开“冷却与冷藏”过程边界；其数量按 cp_chilling_storage_records 取得。

- 选定流：硫氧化物，排入空气
- 流属性/单位：Mass 93a60a56-a3c8-11da-a746-0800200b9a66 / kg
- 数量规则：依据匹配的前景记录计算Sulfur oxides to air质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_chilling_storage_records`
- 来源：`eu-jrc-sa-bref-2024`；`eu-pef-recommendation-2021-2279`

###### 冷却与冷藏—Particulate matter, less than 2.5 micrometres, to air（`chilling_pm25_air_output`）

“Particulate matter, less than 2.5 micrometres, to air”作为一个具体基本流离开“冷却与冷藏”过程边界；其数量按 cp_chilling_storage_records 取得。

- 选定流：粒径小于2.5微米的颗粒物，排入空气
- 流属性/单位：Mass 93a60a56-a3c8-11da-a746-0800200b9a66 / kg
- 数量规则：依据匹配的前景记录计算Particulate matter, less than 2.5 micrometres, to air质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_chilling_storage_records`
- 来源：`eu-jrc-sa-bref-2024`；`eu-pef-recommendation-2021-2279`

### 过程：包装、净重计量与产品放行（`packaging_release`）

#### 输入

##### 产品流

###### 包装、净重计量与产品放行—Guinea-fowl carcass, chilled（`packaging_chilled_carcass_input`）

“Guinea-fowl carcass, chilled”作为一个具体产品流进入“包装、净重计量与产品放行”过程边界；其数量按 cp_packaging_release_records 取得。

- 选定流：Guinea-fowl carcass, chilled
- 流属性/单位：Mass 93a60a56-a3c8-11da-a746-0800200b9a66 / kg
- 数量规则：实测Guinea-fowl carcass, chilled质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_release_records`
- 来源：`eu-jrc-sa-bref-2024`；`eu-pef-recommendation-2021-2279`

###### 包装、净重计量与产品放行—Guinea-fowl meat cuts, chilled（`packaging_chilled_cuts_input`）

“Guinea-fowl meat cuts, chilled”作为一个具体产品流进入“包装、净重计量与产品放行”过程边界；其数量按 cp_packaging_release_records 取得。

- 选定流：Guinea-fowl meat cuts, chilled
- 流属性/单位：Mass 93a60a56-a3c8-11da-a746-0800200b9a66 / kg
- 数量规则：实测Guinea-fowl meat cuts, chilled质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_release_records`
- 来源：`eu-jrc-sa-bref-2024`；`eu-pef-recommendation-2021-2279`

###### 包装、净重计量与产品放行—Electricity, grid supply（`packaging_grid_electricity_input`）

“Electricity, grid supply”作为一个具体产品流进入“包装、净重计量与产品放行”过程边界；其数量按 cp_packaging_release_records 取得。

- 选定流：电网供电
- 流属性/单位：Energy / kWh; flow-property and unit-group UUIDs unresolved
- 数量规则：实测Electricity, grid supply能量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_release_records`
- 来源：`eu-jrc-sa-bref-2024`；`eu-pef-recommendation-2021-2279`

###### 包装、净重计量与产品放行—Polyethylene packaging film（`polyethylene_film_input`）

“Polyethylene packaging film”作为一个具体产品流进入“包装、净重计量与产品放行”过程边界；其数量按 cp_packaging_release_records 取得。

- 选定流：Polyethylene packaging film
- 流属性/单位：Mass 93a60a56-a3c8-11da-a746-0800200b9a66 / kg
- 数量规则：实测Polyethylene packaging film质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_release_records`
- 来源：`eu-jrc-sa-bref-2024`；`eu-pef-recommendation-2021-2279`

###### 包装、净重计量与产品放行—Polyamide-polyethylene vacuum pouch（`polyamide_polyethylene_pouch_input`）

“Polyamide-polyethylene vacuum pouch”作为一个具体产品流进入“包装、净重计量与产品放行”过程边界；其数量按 cp_packaging_release_records 取得。

- 选定流：Polyamide-polyethylene vacuum pouch
- 流属性/单位：Mass 93a60a56-a3c8-11da-a746-0800200b9a66 / kg
- 数量规则：实测Polyamide-polyethylene vacuum pouch质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_release_records`
- 来源：`eu-jrc-sa-bref-2024`；`eu-pef-recommendation-2021-2279`

###### 包装、净重计量与产品放行—Polyethylene terephthalate meat tray（`pet_tray_input`）

“Polyethylene terephthalate meat tray”作为一个具体产品流进入“包装、净重计量与产品放行”过程边界；其数量按 cp_packaging_release_records 取得。

- 选定流：Polyethylene terephthalate meat tray
- 流属性/单位：Mass 93a60a56-a3c8-11da-a746-0800200b9a66 / kg
- 数量规则：实测Polyethylene terephthalate meat tray质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_release_records`
- 来源：`eu-jrc-sa-bref-2024`；`eu-pef-recommendation-2021-2279`

###### 包装、净重计量与产品放行—Cellulose meat absorbent pad（`cellulose_absorbent_pad_input`）

“Cellulose meat absorbent pad”作为一个具体产品流进入“包装、净重计量与产品放行”过程边界；其数量按 cp_packaging_release_records 取得。

- 选定流：Cellulose meat absorbent pad
- 流属性/单位：Mass 93a60a56-a3c8-11da-a746-0800200b9a66 / kg
- 数量规则：实测Cellulose meat absorbent pad质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_release_records`
- 来源：`eu-jrc-sa-bref-2024`；`eu-pef-recommendation-2021-2279`

###### 包装、净重计量与产品放行—Corrugated paperboard carton（`corrugated_carton_input`）

“Corrugated paperboard carton”作为一个具体产品流进入“包装、净重计量与产品放行”过程边界；其数量按 cp_packaging_release_records 取得。

- 选定流：瓦楞纸板箱
- 流属性/单位：Mass 93a60a56-a3c8-11da-a746-0800200b9a66 / kg
- 数量规则：实测Corrugated paperboard carton质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_release_records`
- 来源：`eu-jrc-sa-bref-2024`；`eu-pef-recommendation-2021-2279`

###### 包装、净重计量与产品放行—High-density polyethylene transport crate（`hdpe_crate_input`）

“High-density polyethylene transport crate”作为一个具体产品流进入“包装、净重计量与产品放行”过程边界；其数量按 cp_packaging_release_records 取得。

- 选定流：High-density polyethylene transport crate
- 流属性/单位：Mass 93a60a56-a3c8-11da-a746-0800200b9a66 / kg
- 数量规则：实测High-density polyethylene transport crate质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_release_records`
- 来源：`eu-jrc-sa-bref-2024`；`eu-pef-recommendation-2021-2279`

###### 包装、净重计量与产品放行—Wooden transport pallet（`wood_pallet_input`）

“Wooden transport pallet”作为一个具体产品流进入“包装、净重计量与产品放行”过程边界；其数量按 cp_packaging_release_records 取得。

- 选定流：Wooden transport pallet
- 流属性/单位：Mass 93a60a56-a3c8-11da-a746-0800200b9a66 / kg
- 数量规则：实测Wooden transport pallet质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_release_records`
- 来源：`eu-jrc-sa-bref-2024`；`eu-pef-recommendation-2021-2279`

###### 包装、净重计量与产品放行—Polypropylene packaging strap（`polypropylene_strap_input`）

“Polypropylene packaging strap”作为一个具体产品流进入“包装、净重计量与产品放行”过程边界；其数量按 cp_packaging_release_records 取得。

- 选定流：Polypropylene packaging strap
- 流属性/单位：Mass 93a60a56-a3c8-11da-a746-0800200b9a66 / kg
- 数量规则：实测Polypropylene packaging strap质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_release_records`
- 来源：`eu-jrc-sa-bref-2024`；`eu-pef-recommendation-2021-2279`

###### 包装、净重计量与产品放行—Paper packaging label（`paper_label_input`）

“Paper packaging label”作为一个具体产品流进入“包装、净重计量与产品放行”过程边界；其数量按 cp_packaging_release_records 取得。

- 选定流：Paper packaging label
- 流属性/单位：Mass 93a60a56-a3c8-11da-a746-0800200b9a66 / kg
- 数量规则：实测Paper packaging label质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_release_records`
- 来源：`eu-jrc-sa-bref-2024`；`eu-pef-recommendation-2021-2279`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 净参考产品—珍珠鸡肉，鲜或冷藏（`reference_guinea_fowl_meat_output`）

合格鲜或冷藏珍珠鸡肉以恰好 1 kg 净质量离开工厂门；这是唯一携带已核验产品流 UUID 的清单卡。

- 选定流：珍珠鸡肉，新鲜或冷藏 `8c683807-f79b-46a9-90e4-c005d506a98a`
- 流属性/单位：Mass 93a60a56-a3c8-11da-a746-0800200b9a66 / kg
- 数量规则：扣除包装皮重后归一化为恰好 1 kg 的合格净产品质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_packaging_release_records`
- 来源：`un-cpc-3-0-2025`；`eu-jrc-sa-bref-2024`；`eu-pef-recommendation-2021-2279`

##### 废物流

###### 包装、净重计量与产品放行—Waste off-spec packaged guinea-fowl meat（`packaging_off_spec_meat_waste_output`）

“Waste off-spec packaged guinea-fowl meat”作为一个具体废物流离开“包装、净重计量与产品放行”过程边界；其数量按 cp_packaging_release_records 取得。

- 选定流：Waste off-spec packaged guinea-fowl meat
- 流属性/单位：Mass 93a60a56-a3c8-11da-a746-0800200b9a66 / kg
- 数量规则：实测Waste off-spec packaged guinea-fowl meat质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_release_records`
- 来源：`eu-jrc-sa-bref-2024`；`eu-pef-recommendation-2021-2279`

###### 包装、净重计量与产品放行—Waste polyethylene packaging film（`polyethylene_film_waste_output`）

“Waste polyethylene packaging film”作为一个具体废物流离开“包装、净重计量与产品放行”过程边界；其数量按 cp_packaging_release_records 取得。

- 选定流：Waste polyethylene packaging film
- 流属性/单位：Mass 93a60a56-a3c8-11da-a746-0800200b9a66 / kg
- 数量规则：实测Waste polyethylene packaging film质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_release_records`
- 来源：`eu-jrc-sa-bref-2024`；`eu-pef-recommendation-2021-2279`

###### 包装、净重计量与产品放行—Waste polyamide-polyethylene vacuum pouch（`polyamide_polyethylene_pouch_waste_output`）

“Waste polyamide-polyethylene vacuum pouch”作为一个具体废物流离开“包装、净重计量与产品放行”过程边界；其数量按 cp_packaging_release_records 取得。

- 选定流：Waste polyamide-polyethylene vacuum pouch
- 流属性/单位：Mass 93a60a56-a3c8-11da-a746-0800200b9a66 / kg
- 数量规则：实测Waste polyamide-polyethylene vacuum pouch质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_release_records`
- 来源：`eu-jrc-sa-bref-2024`；`eu-pef-recommendation-2021-2279`

###### 包装、净重计量与产品放行—Waste polyethylene terephthalate meat tray（`pet_tray_waste_output`）

“Waste polyethylene terephthalate meat tray”作为一个具体废物流离开“包装、净重计量与产品放行”过程边界；其数量按 cp_packaging_release_records 取得。

- 选定流：Waste polyethylene terephthalate meat tray
- 流属性/单位：Mass 93a60a56-a3c8-11da-a746-0800200b9a66 / kg
- 数量规则：实测Waste polyethylene terephthalate meat tray质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_release_records`
- 来源：`eu-jrc-sa-bref-2024`；`eu-pef-recommendation-2021-2279`

###### 包装、净重计量与产品放行—Waste cellulose meat absorbent pad（`cellulose_absorbent_pad_waste_output`）

“Waste cellulose meat absorbent pad”作为一个具体废物流离开“包装、净重计量与产品放行”过程边界；其数量按 cp_packaging_release_records 取得。

- 选定流：Waste cellulose meat absorbent pad
- 流属性/单位：Mass 93a60a56-a3c8-11da-a746-0800200b9a66 / kg
- 数量规则：实测Waste cellulose meat absorbent pad质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_release_records`
- 来源：`eu-jrc-sa-bref-2024`；`eu-pef-recommendation-2021-2279`

###### 包装、净重计量与产品放行—Waste corrugated paperboard carton（`corrugated_carton_waste_output`）

“Waste corrugated paperboard carton”作为一个具体废物流离开“包装、净重计量与产品放行”过程边界；其数量按 cp_packaging_release_records 取得。

- 选定流：Waste corrugated paperboard carton
- 流属性/单位：Mass 93a60a56-a3c8-11da-a746-0800200b9a66 / kg
- 数量规则：实测Waste corrugated paperboard carton质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_release_records`
- 来源：`eu-jrc-sa-bref-2024`；`eu-pef-recommendation-2021-2279`

###### 包装、净重计量与产品放行—Waste high-density polyethylene transport crate（`hdpe_crate_waste_output`）

“Waste high-density polyethylene transport crate”作为一个具体废物流离开“包装、净重计量与产品放行”过程边界；其数量按 cp_packaging_release_records 取得。

- 选定流：Waste high-density polyethylene transport crate
- 流属性/单位：Mass 93a60a56-a3c8-11da-a746-0800200b9a66 / kg
- 数量规则：实测Waste high-density polyethylene transport crate质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_release_records`
- 来源：`eu-jrc-sa-bref-2024`；`eu-pef-recommendation-2021-2279`

###### 包装、净重计量与产品放行—Waste wooden transport pallet（`wood_pallet_waste_output`）

“Waste wooden transport pallet”作为一个具体废物流离开“包装、净重计量与产品放行”过程边界；其数量按 cp_packaging_release_records 取得。

- 选定流：Waste wooden transport pallet
- 流属性/单位：Mass 93a60a56-a3c8-11da-a746-0800200b9a66 / kg
- 数量规则：实测Waste wooden transport pallet质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_release_records`
- 来源：`eu-jrc-sa-bref-2024`；`eu-pef-recommendation-2021-2279`

###### 包装、净重计量与产品放行—Waste polypropylene packaging strap（`polypropylene_strap_waste_output`）

“Waste polypropylene packaging strap”作为一个具体废物流离开“包装、净重计量与产品放行”过程边界；其数量按 cp_packaging_release_records 取得。

- 选定流：Waste polypropylene packaging strap
- 流属性/单位：Mass 93a60a56-a3c8-11da-a746-0800200b9a66 / kg
- 数量规则：实测Waste polypropylene packaging strap质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_release_records`
- 来源：`eu-jrc-sa-bref-2024`；`eu-pef-recommendation-2021-2279`

###### 包装、净重计量与产品放行—Waste paper packaging label（`paper_label_waste_output`）

“Waste paper packaging label”作为一个具体废物流离开“包装、净重计量与产品放行”过程边界；其数量按 cp_packaging_release_records 取得。

- 选定流：Waste paper packaging label
- 流属性/单位：Mass 93a60a56-a3c8-11da-a746-0800200b9a66 / kg
- 数量规则：实测Waste paper packaging label质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_release_records`
- 来源：`eu-jrc-sa-bref-2024`；`eu-pef-recommendation-2021-2279`

##### 基本流

### 过程：工厂清洗与消毒（`plant_cleaning_sanitation`）

#### 输入

##### 产品流

###### 工厂清洗与消毒—Process water for plant sanitation（`sanitation_process_water_input`）

“Process water for plant sanitation”作为一个具体产品流进入“工厂清洗与消毒”过程边界；其数量按 cp_cleaning_sanitation_records 取得。

- 选定流：Process water for plant sanitation
- 流属性/单位：Mass 93a60a56-a3c8-11da-a746-0800200b9a66 / kg
- 数量规则：实测Process water for plant sanitation质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cleaning_sanitation_records`
- 来源：`eu-jrc-sa-bref-2024`；`eu-pef-recommendation-2021-2279`

###### 工厂清洗与消毒—Electricity, grid supply（`sanitation_grid_electricity_input`）

“Electricity, grid supply”作为一个具体产品流进入“工厂清洗与消毒”过程边界；其数量按 cp_cleaning_sanitation_records 取得。

- 选定流：电网供电
- 流属性/单位：Energy / kWh; flow-property and unit-group UUIDs unresolved
- 数量规则：实测Electricity, grid supply能量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cleaning_sanitation_records`
- 来源：`eu-jrc-sa-bref-2024`；`eu-pef-recommendation-2021-2279`

###### 工厂清洗与消毒—Steam, purchased（`sanitation_purchased_steam_input`）

“Steam, purchased”作为一个具体产品流进入“工厂清洗与消毒”过程边界；其数量按 cp_cleaning_sanitation_records 取得。

- 选定流：外购蒸汽
- 流属性/单位：Energy / MJ; flow-property and unit-group UUIDs unresolved
- 数量规则：实测Steam, purchased能量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cleaning_sanitation_records`
- 来源：`eu-jrc-sa-bref-2024`；`eu-pef-recommendation-2021-2279`

###### 工厂清洗与消毒—Hot water, purchased（`sanitation_purchased_hot_water_input`）

“Hot water, purchased”作为一个具体产品流进入“工厂清洗与消毒”过程边界；其数量按 cp_cleaning_sanitation_records 取得。

- 选定流：外购热水
- 流属性/单位：Energy / MJ; flow-property and unit-group UUIDs unresolved
- 数量规则：实测Hot water, purchased能量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cleaning_sanitation_records`
- 来源：`eu-jrc-sa-bref-2024`；`eu-pef-recommendation-2021-2279`

###### 工厂清洗与消毒—Natural gas（`sanitation_natural_gas_input`）

“Natural gas”作为一个具体产品流进入“工厂清洗与消毒”过程边界；其数量按 cp_cleaning_sanitation_records 取得。

- 选定流：天然气
- 流属性/单位：Energy / MJ; flow-property and unit-group UUIDs unresolved
- 数量规则：实测Natural gas能量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cleaning_sanitation_records`
- 来源：`eu-jrc-sa-bref-2024`；`eu-pef-recommendation-2021-2279`

###### 工厂清洗与消毒—Diesel fuel（`sanitation_diesel_input`）

“Diesel fuel”作为一个具体产品流进入“工厂清洗与消毒”过程边界；其数量按 cp_cleaning_sanitation_records 取得。

- 选定流：柴油燃料
- 流属性/单位：Energy / MJ; flow-property and unit-group UUIDs unresolved
- 数量规则：实测Diesel fuel能量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cleaning_sanitation_records`
- 来源：`eu-jrc-sa-bref-2024`；`eu-pef-recommendation-2021-2279`

###### 工厂清洗与消毒—Liquefied petroleum gas（`sanitation_lpg_input`）

“Liquefied petroleum gas”作为一个具体产品流进入“工厂清洗与消毒”过程边界；其数量按 cp_cleaning_sanitation_records 取得。

- 选定流：液化石油气
- 流属性/单位：Energy / MJ; flow-property and unit-group UUIDs unresolved
- 数量规则：实测Liquefied petroleum gas能量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cleaning_sanitation_records`
- 来源：`eu-jrc-sa-bref-2024`；`eu-pef-recommendation-2021-2279`

###### 工厂清洗与消毒—Sodium hydroxide cleaning formulation（`sodium_hydroxide_cleaner_input`）

“Sodium hydroxide cleaning formulation”作为一个具体产品流进入“工厂清洗与消毒”过程边界；其数量按 cp_cleaning_sanitation_records 取得。

- 选定流：Sodium hydroxide cleaning formulation
- 流属性/单位：Mass 93a60a56-a3c8-11da-a746-0800200b9a66 / kg
- 数量规则：实测Sodium hydroxide cleaning formulation质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cleaning_sanitation_records`
- 来源：`eu-jrc-sa-bref-2024`；`eu-pef-recommendation-2021-2279`

###### 工厂清洗与消毒—Nitric acid cleaning formulation（`nitric_acid_cleaner_input`）

“Nitric acid cleaning formulation”作为一个具体产品流进入“工厂清洗与消毒”过程边界；其数量按 cp_cleaning_sanitation_records 取得。

- 选定流：Nitric acid cleaning formulation
- 流属性/单位：Mass 93a60a56-a3c8-11da-a746-0800200b9a66 / kg
- 数量规则：实测Nitric acid cleaning formulation质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cleaning_sanitation_records`
- 来源：`eu-jrc-sa-bref-2024`；`eu-pef-recommendation-2021-2279`

###### 工厂清洗与消毒—Peracetic acid disinfectant formulation（`peracetic_acid_disinfectant_input`）

“Peracetic acid disinfectant formulation”作为一个具体产品流进入“工厂清洗与消毒”过程边界；其数量按 cp_cleaning_sanitation_records 取得。

- 选定流：Peracetic acid disinfectant formulation
- 流属性/单位：Mass 93a60a56-a3c8-11da-a746-0800200b9a66 / kg
- 数量规则：实测Peracetic acid disinfectant formulation质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cleaning_sanitation_records`
- 来源：`eu-jrc-sa-bref-2024`；`eu-pef-recommendation-2021-2279`

###### 工厂清洗与消毒—Sodium hypochlorite disinfectant formulation（`sodium_hypochlorite_disinfectant_input`）

“Sodium hypochlorite disinfectant formulation”作为一个具体产品流进入“工厂清洗与消毒”过程边界；其数量按 cp_cleaning_sanitation_records 取得。

- 选定流：Sodium hypochlorite disinfectant formulation
- 流属性/单位：Mass 93a60a56-a3c8-11da-a746-0800200b9a66 / kg
- 数量规则：实测Sodium hypochlorite disinfectant formulation质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cleaning_sanitation_records`
- 来源：`eu-jrc-sa-bref-2024`；`eu-pef-recommendation-2021-2279`

###### 工厂清洗与消毒—Quaternary ammonium disinfectant formulation（`quaternary_ammonium_disinfectant_input`）

“Quaternary ammonium disinfectant formulation”作为一个具体产品流进入“工厂清洗与消毒”过程边界；其数量按 cp_cleaning_sanitation_records 取得。

- 选定流：Quaternary ammonium disinfectant formulation
- 流属性/单位：Mass 93a60a56-a3c8-11da-a746-0800200b9a66 / kg
- 数量规则：实测Quaternary ammonium disinfectant formulation质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cleaning_sanitation_records`
- 来源：`eu-jrc-sa-bref-2024`；`eu-pef-recommendation-2021-2279`

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

###### 工厂清洗与消毒—Wastewater from sodium hydroxide plant cleaning（`alkaline_cleaning_wastewater_output`）

“Wastewater from sodium hydroxide plant cleaning”作为一个具体废物流离开“工厂清洗与消毒”过程边界；其数量按 cp_cleaning_sanitation_records 取得。

- 选定流：Wastewater from sodium hydroxide plant cleaning
- 流属性/单位：Mass 93a60a56-a3c8-11da-a746-0800200b9a66 / kg
- 数量规则：实测Wastewater from sodium hydroxide plant cleaning质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cleaning_sanitation_records`
- 来源：`eu-jrc-sa-bref-2024`；`eu-pef-recommendation-2021-2279`

###### 工厂清洗与消毒—Wastewater from nitric acid plant cleaning（`acid_cleaning_wastewater_output`）

“Wastewater from nitric acid plant cleaning”作为一个具体废物流离开“工厂清洗与消毒”过程边界；其数量按 cp_cleaning_sanitation_records 取得。

- 选定流：Wastewater from nitric acid plant cleaning
- 流属性/单位：Mass 93a60a56-a3c8-11da-a746-0800200b9a66 / kg
- 数量规则：实测Wastewater from nitric acid plant cleaning质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cleaning_sanitation_records`
- 来源：`eu-jrc-sa-bref-2024`；`eu-pef-recommendation-2021-2279`

###### 工厂清洗与消毒—Wastewater from peracetic acid disinfection（`peracetic_disinfection_wastewater_output`）

“Wastewater from peracetic acid disinfection”作为一个具体废物流离开“工厂清洗与消毒”过程边界；其数量按 cp_cleaning_sanitation_records 取得。

- 选定流：Wastewater from peracetic acid disinfection
- 流属性/单位：Mass 93a60a56-a3c8-11da-a746-0800200b9a66 / kg
- 数量规则：实测Wastewater from peracetic acid disinfection质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cleaning_sanitation_records`
- 来源：`eu-jrc-sa-bref-2024`；`eu-pef-recommendation-2021-2279`

###### 工厂清洗与消毒—Wastewater from sodium hypochlorite disinfection（`hypochlorite_disinfection_wastewater_output`）

“Wastewater from sodium hypochlorite disinfection”作为一个具体废物流离开“工厂清洗与消毒”过程边界；其数量按 cp_cleaning_sanitation_records 取得。

- 选定流：Wastewater from sodium hypochlorite disinfection
- 流属性/单位：Mass 93a60a56-a3c8-11da-a746-0800200b9a66 / kg
- 数量规则：实测Wastewater from sodium hypochlorite disinfection质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cleaning_sanitation_records`
- 来源：`eu-jrc-sa-bref-2024`；`eu-pef-recommendation-2021-2279`

###### 工厂清洗与消毒—Wastewater from quaternary ammonium disinfection（`quaternary_ammonium_wastewater_output`）

“Wastewater from quaternary ammonium disinfection”作为一个具体废物流离开“工厂清洗与消毒”过程边界；其数量按 cp_cleaning_sanitation_records 取得。

- 选定流：Wastewater from quaternary ammonium disinfection
- 流属性/单位：Mass 93a60a56-a3c8-11da-a746-0800200b9a66 / kg
- 数量规则：实测Wastewater from quaternary ammonium disinfection质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cleaning_sanitation_records`
- 来源：`eu-jrc-sa-bref-2024`；`eu-pef-recommendation-2021-2279`

###### 工厂清洗与消毒—Waste used cleaning cloth（`used_cleaning_cloth_waste_output`）

“Waste used cleaning cloth”作为一个具体废物流离开“工厂清洗与消毒”过程边界；其数量按 cp_cleaning_sanitation_records 取得。

- 选定流：Waste used cleaning cloth
- 流属性/单位：Mass 93a60a56-a3c8-11da-a746-0800200b9a66 / kg
- 数量规则：实测Waste used cleaning cloth质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cleaning_sanitation_records`
- 来源：`eu-jrc-sa-bref-2024`；`eu-pef-recommendation-2021-2279`

##### 基本流

###### 工厂清洗与消毒—Carbon dioxide, fossil, to air（`sanitation_fossil_co2_air_output`）

“Carbon dioxide, fossil, to air”作为一个具体基本流离开“工厂清洗与消毒”过程边界；其数量按 cp_cleaning_sanitation_records 取得。

- 选定流：化石源二氧化碳，排入空气
- 流属性/单位：Mass 93a60a56-a3c8-11da-a746-0800200b9a66 / kg
- 数量规则：依据匹配的前景记录计算Carbon dioxide, fossil, to air质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_cleaning_sanitation_records`
- 来源：`eu-jrc-sa-bref-2024`；`eu-pef-recommendation-2021-2279`

###### 工厂清洗与消毒—Nitrogen oxides to air（`sanitation_nox_air_output`）

“Nitrogen oxides to air”作为一个具体基本流离开“工厂清洗与消毒”过程边界；其数量按 cp_cleaning_sanitation_records 取得。

- 选定流：氮氧化物，排入空气
- 流属性/单位：Mass 93a60a56-a3c8-11da-a746-0800200b9a66 / kg
- 数量规则：依据匹配的前景记录计算Nitrogen oxides to air质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_cleaning_sanitation_records`
- 来源：`eu-jrc-sa-bref-2024`；`eu-pef-recommendation-2021-2279`

###### 工厂清洗与消毒—Sulfur oxides to air（`sanitation_sox_air_output`）

“Sulfur oxides to air”作为一个具体基本流离开“工厂清洗与消毒”过程边界；其数量按 cp_cleaning_sanitation_records 取得。

- 选定流：硫氧化物，排入空气
- 流属性/单位：Mass 93a60a56-a3c8-11da-a746-0800200b9a66 / kg
- 数量规则：依据匹配的前景记录计算Sulfur oxides to air质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_cleaning_sanitation_records`
- 来源：`eu-jrc-sa-bref-2024`；`eu-pef-recommendation-2021-2279`

###### 工厂清洗与消毒—Particulate matter, less than 2.5 micrometres, to air（`sanitation_pm25_air_output`）

“Particulate matter, less than 2.5 micrometres, to air”作为一个具体基本流离开“工厂清洗与消毒”过程边界；其数量按 cp_cleaning_sanitation_records 取得。

- 选定流：粒径小于2.5微米的颗粒物，排入空气
- 流属性/单位：Mass 93a60a56-a3c8-11da-a746-0800200b9a66 / kg
- 数量规则：依据匹配的前景记录计算Particulate matter, less than 2.5 micrometres, to air质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_cleaning_sanitation_records`
- 来源：`eu-jrc-sa-bref-2024`；`eu-pef-recommendation-2021-2279`

### 过程：场内屠宰废水处理（`onsite_wastewater_treatment`）

#### 输入

##### 产品流

###### 场内屠宰废水处理—Electricity, grid supply（`wwtp_grid_electricity_input`）

“Electricity, grid supply”作为一个具体产品流进入“场内屠宰废水处理”过程边界；其数量按 cp_wastewater_treatment_records 取得。

- 选定流：电网供电
- 流属性/单位：Energy / kWh; flow-property and unit-group UUIDs unresolved
- 数量规则：实测Electricity, grid supply能量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wastewater_treatment_records`
- 来源：`eu-jrc-sa-bref-2024`；`eu-pef-recommendation-2021-2279`

###### 场内屠宰废水处理—Ferric chloride wastewater-treatment formulation（`ferric_chloride_treatment_input`）

“Ferric chloride wastewater-treatment formulation”作为一个具体产品流进入“场内屠宰废水处理”过程边界；其数量按 cp_wastewater_treatment_records 取得。

- 选定流：Ferric chloride wastewater-treatment formulation
- 流属性/单位：Mass 93a60a56-a3c8-11da-a746-0800200b9a66 / kg
- 数量规则：实测Ferric chloride wastewater-treatment formulation质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wastewater_treatment_records`
- 来源：`eu-jrc-sa-bref-2024`；`eu-pef-recommendation-2021-2279`

###### 场内屠宰废水处理—Polyacrylamide flocculant formulation（`polyacrylamide_flocculant_input`）

“Polyacrylamide flocculant formulation”作为一个具体产品流进入“场内屠宰废水处理”过程边界；其数量按 cp_wastewater_treatment_records 取得。

- 选定流：Polyacrylamide flocculant formulation
- 流属性/单位：Mass 93a60a56-a3c8-11da-a746-0800200b9a66 / kg
- 数量规则：实测Polyacrylamide flocculant formulation质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wastewater_treatment_records`
- 来源：`eu-jrc-sa-bref-2024`；`eu-pef-recommendation-2021-2279`

###### 场内屠宰废水处理—Sodium hydroxide pH-adjustment formulation（`sodium_hydroxide_ph_adjustment_input`）

“Sodium hydroxide pH-adjustment formulation”作为一个具体产品流进入“场内屠宰废水处理”过程边界；其数量按 cp_wastewater_treatment_records 取得。

- 选定流：Sodium hydroxide pH-adjustment formulation
- 流属性/单位：Mass 93a60a56-a3c8-11da-a746-0800200b9a66 / kg
- 数量规则：实测Sodium hydroxide pH-adjustment formulation质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wastewater_treatment_records`
- 来源：`eu-jrc-sa-bref-2024`；`eu-pef-recommendation-2021-2279`

##### 废物流

###### 场内屠宰废水处理—Wastewater from guinea-fowl lairage（`wwtp_receiving_wastewater_input`）

“Wastewater from guinea-fowl lairage”作为一个具体废物流进入“场内屠宰废水处理”过程边界；其数量按 cp_wastewater_treatment_records 取得。

- 选定流：Wastewater from guinea-fowl lairage
- 流属性/单位：Mass 93a60a56-a3c8-11da-a746-0800200b9a66 / kg
- 数量规则：实测Wastewater from guinea-fowl lairage质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wastewater_treatment_records`
- 来源：`eu-jrc-sa-bref-2024`；`eu-pef-recommendation-2021-2279`

###### 场内屠宰废水处理—High-organic-load wastewater from guinea-fowl slaughter（`wwtp_high_load_slaughter_wastewater_input`）

“High-organic-load wastewater from guinea-fowl slaughter”作为一个具体废物流进入“场内屠宰废水处理”过程边界；其数量按 cp_wastewater_treatment_records 取得。

- 选定流：High-organic-load wastewater from guinea-fowl slaughter
- 流属性/单位：Mass 93a60a56-a3c8-11da-a746-0800200b9a66 / kg
- 数量规则：实测High-organic-load wastewater from guinea-fowl slaughter质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wastewater_treatment_records`
- 来源：`eu-jrc-sa-bref-2024`；`eu-pef-recommendation-2021-2279`

###### 场内屠宰废水处理—Ordinary-load wastewater from guinea-fowl slaughter（`wwtp_ordinary_slaughter_wastewater_input`）

“Ordinary-load wastewater from guinea-fowl slaughter”作为一个具体废物流进入“场内屠宰废水处理”过程边界；其数量按 cp_wastewater_treatment_records 取得。

- 选定流：Ordinary-load wastewater from guinea-fowl slaughter
- 流属性/单位：Mass 93a60a56-a3c8-11da-a746-0800200b9a66 / kg
- 数量规则：实测Ordinary-load wastewater from guinea-fowl slaughter质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wastewater_treatment_records`
- 来源：`eu-jrc-sa-bref-2024`；`eu-pef-recommendation-2021-2279`

###### 场内屠宰废水处理—Wastewater from guinea-fowl carcass cutting（`wwtp_cutting_wastewater_input`）

“Wastewater from guinea-fowl carcass cutting”作为一个具体废物流进入“场内屠宰废水处理”过程边界；其数量按 cp_wastewater_treatment_records 取得。

- 选定流：Wastewater from guinea-fowl carcass cutting
- 流属性/单位：Mass 93a60a56-a3c8-11da-a746-0800200b9a66 / kg
- 数量规则：实测Wastewater from guinea-fowl carcass cutting质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wastewater_treatment_records`
- 来源：`eu-jrc-sa-bref-2024`；`eu-pef-recommendation-2021-2279`

###### 场内屠宰废水处理—Wastewater from refrigeration defrost（`wwtp_defrost_wastewater_input`）

“Wastewater from refrigeration defrost”作为一个具体废物流进入“场内屠宰废水处理”过程边界；其数量按 cp_wastewater_treatment_records 取得。

- 选定流：Wastewater from refrigeration defrost
- 流属性/单位：Mass 93a60a56-a3c8-11da-a746-0800200b9a66 / kg
- 数量规则：实测Wastewater from refrigeration defrost质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wastewater_treatment_records`
- 来源：`eu-jrc-sa-bref-2024`；`eu-pef-recommendation-2021-2279`

###### 场内屠宰废水处理—Wastewater from sodium hydroxide plant cleaning（`wwtp_alkaline_cleaning_wastewater_input`）

“Wastewater from sodium hydroxide plant cleaning”作为一个具体废物流进入“场内屠宰废水处理”过程边界；其数量按 cp_wastewater_treatment_records 取得。

- 选定流：Wastewater from sodium hydroxide plant cleaning
- 流属性/单位：Mass 93a60a56-a3c8-11da-a746-0800200b9a66 / kg
- 数量规则：实测Wastewater from sodium hydroxide plant cleaning质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wastewater_treatment_records`
- 来源：`eu-jrc-sa-bref-2024`；`eu-pef-recommendation-2021-2279`

###### 场内屠宰废水处理—Wastewater from nitric acid plant cleaning（`wwtp_acid_cleaning_wastewater_input`）

“Wastewater from nitric acid plant cleaning”作为一个具体废物流进入“场内屠宰废水处理”过程边界；其数量按 cp_wastewater_treatment_records 取得。

- 选定流：Wastewater from nitric acid plant cleaning
- 流属性/单位：Mass 93a60a56-a3c8-11da-a746-0800200b9a66 / kg
- 数量规则：实测Wastewater from nitric acid plant cleaning质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wastewater_treatment_records`
- 来源：`eu-jrc-sa-bref-2024`；`eu-pef-recommendation-2021-2279`

###### 场内屠宰废水处理—Wastewater from peracetic acid disinfection（`wwtp_peracetic_wastewater_input`）

“Wastewater from peracetic acid disinfection”作为一个具体废物流进入“场内屠宰废水处理”过程边界；其数量按 cp_wastewater_treatment_records 取得。

- 选定流：Wastewater from peracetic acid disinfection
- 流属性/单位：Mass 93a60a56-a3c8-11da-a746-0800200b9a66 / kg
- 数量规则：实测Wastewater from peracetic acid disinfection质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wastewater_treatment_records`
- 来源：`eu-jrc-sa-bref-2024`；`eu-pef-recommendation-2021-2279`

###### 场内屠宰废水处理—Wastewater from sodium hypochlorite disinfection（`wwtp_hypochlorite_wastewater_input`）

“Wastewater from sodium hypochlorite disinfection”作为一个具体废物流进入“场内屠宰废水处理”过程边界；其数量按 cp_wastewater_treatment_records 取得。

- 选定流：Wastewater from sodium hypochlorite disinfection
- 流属性/单位：Mass 93a60a56-a3c8-11da-a746-0800200b9a66 / kg
- 数量规则：实测Wastewater from sodium hypochlorite disinfection质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wastewater_treatment_records`
- 来源：`eu-jrc-sa-bref-2024`；`eu-pef-recommendation-2021-2279`

###### 场内屠宰废水处理—Wastewater from quaternary ammonium disinfection（`wwtp_quaternary_ammonium_wastewater_input`）

“Wastewater from quaternary ammonium disinfection”作为一个具体废物流进入“场内屠宰废水处理”过程边界；其数量按 cp_wastewater_treatment_records 取得。

- 选定流：Wastewater from quaternary ammonium disinfection
- 流属性/单位：Mass 93a60a56-a3c8-11da-a746-0800200b9a66 / kg
- 数量规则：实测Wastewater from quaternary ammonium disinfection质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wastewater_treatment_records`
- 来源：`eu-jrc-sa-bref-2024`；`eu-pef-recommendation-2021-2279`

##### 基本流

#### 输出

##### 产品流

##### 废物流

###### 场内屠宰废水处理—Sludge from guinea-fowl slaughterhouse wastewater treatment（`wastewater_sludge_output`）

“Sludge from guinea-fowl slaughterhouse wastewater treatment”作为一个具体废物流离开“场内屠宰废水处理”过程边界；其数量按 cp_wastewater_treatment_records 取得。

- 选定流：Sludge from guinea-fowl slaughterhouse wastewater treatment
- 流属性/单位：Mass 93a60a56-a3c8-11da-a746-0800200b9a66 / kg
- 数量规则：实测Sludge from guinea-fowl slaughterhouse wastewater treatment质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wastewater_treatment_records`
- 来源：`eu-jrc-sa-bref-2024`；`eu-pef-recommendation-2021-2279`

###### 场内屠宰废水处理—Screenings from guinea-fowl slaughterhouse wastewater treatment（`wastewater_screenings_output`）

“Screenings from guinea-fowl slaughterhouse wastewater treatment”作为一个具体废物流离开“场内屠宰废水处理”过程边界；其数量按 cp_wastewater_treatment_records 取得。

- 选定流：Screenings from guinea-fowl slaughterhouse wastewater treatment
- 流属性/单位：Mass 93a60a56-a3c8-11da-a746-0800200b9a66 / kg
- 数量规则：实测Screenings from guinea-fowl slaughterhouse wastewater treatment质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wastewater_treatment_records`
- 来源：`eu-jrc-sa-bref-2024`；`eu-pef-recommendation-2021-2279`

###### 场内屠宰废水处理—Waste animal fat from wastewater treatment（`wastewater_recovered_fat_waste_output`）

“Waste animal fat from wastewater treatment”作为一个具体废物流离开“场内屠宰废水处理”过程边界；其数量按 cp_wastewater_treatment_records 取得。

- 选定流：Waste animal fat from wastewater treatment
- 流属性/单位：Mass 93a60a56-a3c8-11da-a746-0800200b9a66 / kg
- 数量规则：实测Waste animal fat from wastewater treatment质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wastewater_treatment_records`
- 来源：`eu-jrc-sa-bref-2024`；`eu-pef-recommendation-2021-2279`

##### 基本流

###### 场内屠宰废水处理—Chemical oxygen demand to water（`cod_water_output`）

“Chemical oxygen demand to water”作为一个具体基本流离开“场内屠宰废水处理”过程边界；其数量按 cp_wastewater_treatment_records 取得。

- 选定流：化学需氧量，排入水体
- 流属性/单位：Mass 93a60a56-a3c8-11da-a746-0800200b9a66 / kg
- 数量规则：依据匹配的前景记录计算Chemical oxygen demand to water质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_wastewater_treatment_records`
- 来源：`eu-jrc-sa-bref-2024`；`eu-pef-recommendation-2021-2279`

###### 场内屠宰废水处理—Biochemical oxygen demand, 5 days, to water（`bod5_water_output`）

“Biochemical oxygen demand, 5 days, to water”作为一个具体基本流离开“场内屠宰废水处理”过程边界；其数量按 cp_wastewater_treatment_records 取得。

- 选定流：Biochemical oxygen demand, 5 days, to water
- 流属性/单位：Mass 93a60a56-a3c8-11da-a746-0800200b9a66 / kg
- 数量规则：依据匹配的前景记录计算Biochemical oxygen demand, 5 days, to water质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_wastewater_treatment_records`
- 来源：`eu-jrc-sa-bref-2024`；`eu-pef-recommendation-2021-2279`

###### 场内屠宰废水处理—Nitrogen, total, to water（`total_nitrogen_water_output`）

“Nitrogen, total, to water”作为一个具体基本流离开“场内屠宰废水处理”过程边界；其数量按 cp_wastewater_treatment_records 取得。

- 选定流：Nitrogen, total, to water
- 流属性/单位：Mass 93a60a56-a3c8-11da-a746-0800200b9a66 / kg
- 数量规则：依据匹配的前景记录计算Nitrogen, total, to water质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_wastewater_treatment_records`
- 来源：`eu-jrc-sa-bref-2024`；`eu-pef-recommendation-2021-2279`

###### 场内屠宰废水处理—Phosphorus, total, to water（`total_phosphorus_water_output`）

“Phosphorus, total, to water”作为一个具体基本流离开“场内屠宰废水处理”过程边界；其数量按 cp_wastewater_treatment_records 取得。

- 选定流：Phosphorus, total, to water
- 流属性/单位：Mass 93a60a56-a3c8-11da-a746-0800200b9a66 / kg
- 数量规则：依据匹配的前景记录计算Phosphorus, total, to water质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_wastewater_treatment_records`
- 来源：`eu-jrc-sa-bref-2024`；`eu-pef-recommendation-2021-2279`

###### 场内屠宰废水处理—Suspended solids to water（`suspended_solids_water_output`）

“Suspended solids to water”作为一个具体基本流离开“场内屠宰废水处理”过程边界；其数量按 cp_wastewater_treatment_records 取得。

- 选定流：悬浮固体，排入水体
- 流属性/单位：Mass 93a60a56-a3c8-11da-a746-0800200b9a66 / kg
- 数量规则：依据匹配的前景记录计算Suspended solids to water质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_wastewater_treatment_records`
- 来源：`eu-jrc-sa-bref-2024`；`eu-pef-recommendation-2021-2279`

###### 场内屠宰废水处理—Animal fat to water（`animal_fat_water_output`）

“Animal fat to water”作为一个具体基本流离开“场内屠宰废水处理”过程边界；其数量按 cp_wastewater_treatment_records 取得。

- 选定流：Animal fat to water
- 流属性/单位：Mass 93a60a56-a3c8-11da-a746-0800200b9a66 / kg
- 数量规则：依据匹配的前景记录计算Animal fat to water质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_wastewater_treatment_records`
- 来源：`eu-jrc-sa-bref-2024`；`eu-pef-recommendation-2021-2279`

###### 场内屠宰废水处理—Methane, biogenic, to air（`wastewater_methane_air_output`）

“Methane, biogenic, to air”作为一个具体基本流离开“场内屠宰废水处理”过程边界；其数量按 cp_wastewater_treatment_records 取得。

- 选定流：生物源甲烷，排入空气
- 流属性/单位：Mass 93a60a56-a3c8-11da-a746-0800200b9a66 / kg
- 数量规则：依据匹配的前景记录计算Methane, biogenic, to air质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_wastewater_treatment_records`
- 来源：`eu-jrc-sa-bref-2024`；`eu-pef-recommendation-2021-2279`

###### 场内屠宰废水处理—Dinitrogen monoxide to air（`wastewater_nitrous_oxide_air_output`）

“Dinitrogen monoxide to air”作为一个具体基本流离开“场内屠宰废水处理”过程边界；其数量按 cp_wastewater_treatment_records 取得。

- 选定流：氧化亚氮，排入空气
- 流属性/单位：Mass 93a60a56-a3c8-11da-a746-0800200b9a66 / kg
- 数量规则：依据匹配的前景记录计算Dinitrogen monoxide to air质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_wastewater_treatment_records`
- 来源：`eu-jrc-sa-bref-2024`；`eu-pef-recommendation-2021-2279`

## 7. 分配与共产品处理

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivision_first` | 全部多功能前景作业 | 只要交换能够直接归属，就通过分别计量和细分接收、屠宰、分割、冷却、包装、清洗消毒和废水处理作业来避免分配。 | `eu-pef-recommendation-2021-2279` |
| `allocation_physical_relation` | 肉品与可销售血液、羽毛、器官、脂肪、骨、皮、颈或脚 | 细分仍不能消除多功能性时，仅在真实反映过程投入和输出变化的情况下采用有记录的物理因果关系；保留各因子的实测质量和依据。 | `eu-pef-recommendation-2021-2279` |
| `allocation_economic_fallback` | 其余可销售共产品 | 不存在可辩护的物理关系时，采用所声明环境足迹研究要求的分配层级；需要经济分配时使用一致且同期的经济数据，并披露因子和敏感性。 | `eu-pef-recommendation-2021-2279` |
| `allocation_waste_destination` | 判废物料、有机残余和回收物料 | 根据有记录的去向和适用研究规则，将每股物流归类为产品、共产品或废物；没有透明的替代或系统扩展模型及链接去向数据集时，不得给予废物抵扣。 | `eu-pef-recommendation-2021-2279` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_receiving_lairage_records` | `live_bird_receiving_lairage` | 活禽；饮水；电力；死亡；粪便；垫料；废水；氨 | 接收、秤量、仪表、死亡和废物记录 | 供应商；批次；只数；活质量；验收质量；水；电力；死亡质量；粪便；垫料；废水；氨测量或模型字段 | 按批次核对各项分别计量或称量的交换 | kg；kWh | 每批次，并按月核对公用工程 | 代表性连续 12 个月或较短生产期的全部批次 | 每个前景接收场址 | 保留批次身份，并将每项交换归一化到净参考产品 | 秤和仪表校准；接收记录；兽医处置；废物票据；计算工作底稿 |
| `cp_slaughter_dressing_records` | `slaughter_dressing` | 合格活禽；水；各公用工程和燃料；胴体；各共产品；各废物；各废水；各燃烧排放 | 生产线、批次、秤量、仪表、检验和去向记录 | 活禽投入；水；电力；蒸汽；热水；天然气；柴油；LPG；胴体质量；各器官、血、羽毛、脂肪和废物质量；废水；排放字段 | 按一致质量基准核对每个屠宰批次和每项具名输出 | kg；kWh；MJ | 每批次，并按月核对载体 | 代表性连续 12 个月或生产期全部批次 | 每条前景屠宰线 | 将各载体、共产品、废物和排放分开，并归一化到净参考产品 | 经校准的秤和仪表；检验记录；去向票据；燃料记录；质量平衡签核 |
| `cp_cutting_portioning_records` | `carcass_cutting_portioning` | 胴体；水；电力；分割肉；骨；皮；脂肪；修割料；废水 | 分割批次、秤量、仪表和废物记录 | 胴体投入；分割肉输出；骨、皮、脂肪和修割料质量；水；电力；废水；库存变化 | 分别核对每个分割批次和每项具名输出 | kg；kWh | 每批次，并按月核对仪表 | 代表性连续 12 个月或全部分割批次 | 每条前景分割线 | 保留分割部位身份，将每项交换归一化到已放行净肉品 | 秤和仪表校准；分割规格；谱系；废物票据；质量平衡签核 |
| `cp_chilling_storage_records` | `chilling_cold_storage` | 胴体或分割肉；水；各公用工程和燃料；各制冷剂；冷藏输出；废物；各直接排放 | 温度、质量、公用工程、制冷剂和维护记录 | 投入和输出质量；温度；水；电力；蒸汽；热水；各燃料；每种制冷剂的期初、购入、回收和期末质量；废物；排放字段 | 分别核对产品质量、温度、各载体和各制冷剂物质 | kg；kWh；MJ；摄氏度 | 每批次和制冷剂服务事件，并按月核对 | 代表性连续 12 个月或生产期全部批次 | 每个前景冷却和冷藏系统 | 分别计算每种制冷剂损失，并将全部行归一化到净参考产品 | 温度计、秤和仪表校准；制冷剂服务记录；库存核对；维护记录 |
| `cp_packaging_release_records` | `packaging_release` | 冷藏肉；电力；各包装组件；参考产品；不合格产品；各包装废物 | 领用、灌装、称量、放行和废物记录 | 肉品投入；电力；组件数量和质量；可复用组件使用份额；毛重；皮重；净重；不合格质量；各废物质量 | 核对每个放行批次，扣除皮重并保持各包装组件分开 | kg；kWh；件 | 每个放行批次，并按月核对 | 代表性连续 12 个月或全部批次 | 每条前景包装线 | 归一化为恰好 1 kg 合格净产品 | 秤校准；包装规格；领退记录；放行记录；废物票据 |
| `cp_cleaning_sanitation_records` | `plant_cleaning_sanitation` | 水；各公用工程和燃料；各化学品；各废水；擦拭布废物；各燃烧排放 | 清洗消毒计划、仪表、领用、废水和排放记录 | 水；电力；蒸汽；热水；天然气；柴油；LPG；各配方质量和浓度；各废水；擦拭布废物；排放字段 | 分别记录每次清洗事件和每个具名载体、配方、废水和排放 | kg；kWh；MJ | 每次清洗事件，按月汇总 | 代表性连续 12 个月或生产期全部事件 | 全部范围内清洗消毒系统 | 以有记录的因果驱动因素分配共享清洗，并归一化到净参考产品 | 校准；发票；配方规格；清洗记录；废物收据；计算工作底稿 |
| `cp_wastewater_treatment_records` | `onsite_wastewater_treatment` | 各进水；电力；各处理化学品；污泥；筛渣；脂肪；各水和空气排放 | 进水、仪表、化学品、污泥、实验室和气体记录 | 各废水数量；电力；各化学品质量；污泥、筛渣和脂肪质量；各污染物匹配浓度和排水量；甲烷和氧化亚氮字段 | 将每股进水、处理物料、废物和排放保留为单独记录 | kg；kWh；mg/L | 流量连续或每日；按运行计划采样 | 代表性连续 12 个月或完整生产期 | 完整场内处理边界 | 分别计算每项排放负荷，并将处理行归一化到净参考产品 | 实验室 QA；采样计划；仪表校准；化学品记录；废物收据；计算工作底稿 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalisation` | 每项前景行 | 归一化数量 = 报告期该行数量 / 合格珍珠鸡肉净输出 | 采集的行数量；扣除皮重后的合格净产品质量 | 每 1 kg 参考产品的数量 | `eu-pef-recommendation-2021-2279` |
| `calc_process_mass_balance` | 每个物料过程 | 残差 = 期初库存 + 实测投入 - 实测输出 - 期末库存；依据测量不确定性调查有符号和绝对残差 | 全部具名产品、共产品和废物质量；库存变化 | 过程质量平衡残差 | `eu-pef-recommendation-2021-2279` |
| `calc_refrigerant_loss` | 每种具名制冷剂 | 物质损失 = 期初库存 + 购入 + 充注 - 回收 - 退回 - 期末库存；有直接泄漏测量时优先使用 | 物质特定库存和服务记录 | 一种制冷剂的排放或其他损失 kg | `eu-jrc-sa-bref-2024`；`eu-pef-recommendation-2021-2279` |
| `calc_combustion_emission` | 每种具名燃烧空气排放 | 排放质量 = 每项分别记录的燃料数量 × 所披露因子；仅对同一种基本流求和 | 天然气、柴油或 LPG 记录；燃料属性；测量或因子 | 一种指定空气排放 kg | `eu-jrc-sa-bref-2024`；`eu-pef-recommendation-2021-2279` |
| `calc_effluent_load` | 每项处理后出水排放 | 排放质量 = 匹配浓度 × 实测排水量，并记录密度和单位换算 | 一项参数浓度；排水量；采样代表性 | 一种指定水排放 kg | `eu-jrc-sa-bref-2024`；`eu-pef-recommendation-2021-2279` |
| `calc_packaging_component` | 每项包装投入 | 组件质量 = 领用数量 × 实测空组件单位质量 - 退回未用质量；可复用品采用有记录的使用份额 | 数量；单位质量；退回；复用历史 | 一种包装组件 kg | `eu-pef-recommendation-2021-2279` |
| `calc_allocation_factor` | 每个多功能过程 | 根据声明的物理或经济变量计算各分配因子，验证因子总和为一，并保留未舍入字段 | 实测输出数量；因果变量或同期经济数据 | 已披露共产品分配因子 | `eu-pef-recommendation-2021-2279` |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity_traceability` | 活禽、胴体、分割肉和放行产品 | 保留从接收到放行的珍珠鸡物种、供应商、批次、屠宰日期、产品形式、骨和皮状态、温度状态及谱系。 | 接收记录；生产线谱系；分割规格；放行记录 |
| `dq_measurement_control` | 质量、能源、水、制冷剂、化学品和废物记录 | 使用经过校准或核验的测量系统，并为每个值保留单位、换算、校准状态和计算标识。 | 校准证书；仪表台账；批准的换算表；计算工作底稿 |
| `dq_temporal_representativeness` | 前景数据集 | 连续运行覆盖代表性连续 12 个月，或覆盖声明生产期全部批次；披露停机、非典型批次和缺失期间。 | 生产日历；完整性核对；异常日志 |
| `dq_complete_lci` | 全部前景过程 | 纳入全部已知物料和能源投入，以及所有产品、共产品、废物和空气或水排放；或以过程证据记录某个具名行为不适用。 | 已签核清单检查表；过程质量平衡；适用性记录 |
| `dq_atomic_exchange_identity` | 每张清单卡 | 每行保留一种物理或化学交换；不得以集合标签替代具名载体、制冷剂、化学品、包装组件、废物或排放。 | 行级审查；天工查询处置；已签核适用性检查表 |
| `dq_cold_chain_state` | 冷却、储存和放行 | 保留连续或批次代表性温度证据，证明产品以鲜或冷藏状态放行且未冷冻。 | 经校准的温度记录；报警记录；批次放行 |
| `dq_destination_and_allocation` | 共产品和废物 | 为每项物料输出保留去向、法律或商业分类、数量、分配变量及链接的处理或接收数据集。 | 发运或废物票据；分配工作底稿；去向数据集 |
| `dq_source_currency` | 外部分类和方法规则 | 激活或发布前确认适用的 CPC 版本、JRC BREF 和环境足迹文本。 | 来源审查记录；适用性声明 |

## 9. 校验规则

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `validate_reference_flow` | 参考产品 | 要求净产品恰好 1 kg、天工产品流 UUID `8c683807-f79b-46a9-90e4-c005d506a98a`、Mass UUID `93a60a56-a3c8-11da-a746-0800200b9a66`、Units of mass UUID `93a60a57-a4c8-11da-a746-0800200c9a66`，单位为 kg。 | `un-cpc-3-0-2025` |
| `validate_product_scope` | 产品身份 | 要求珍珠鸡身份和鲜或冷藏状态；从参考流中排除冷冻肉、肥肝、单独销售的食用内脏、其他禽种和经调制或保藏的肉。 | `un-cpc-3-0-2025` |
| `validate_process_route` | 前景路线 | 要求接收、屠宰与整理、冷却、包装、清洗消毒和放行；仅在实际进行时要求分割，仅在存在场内处理时要求场内废水处理。 | `eu-jrc-sa-bref-2024` |
| `validate_mass_balance` | 每个物料过程 | 核对投入、产品、共产品、废物和库存变化质量，并调查超出场址批准测量不确定性的残差。 | `eu-pef-recommendation-2021-2279` |
| `validate_atomic_flows` | 过程清单 | 每张卡要求一个具体交换；每种载体、制冷剂物质、化学品配方、包装组件、共产品、废物和基本排放必须分开。 | `eu-jrc-sa-bref-2024`；`eu-pef-recommendation-2021-2279` |
| `validate_refrigerants` | 制冷系统 | 要求为每种实际存在的制冷剂物质分别提供补充和排放记录；仅凭设备和服务记录证据将具名物质标记为不适用。 | `eu-jrc-sa-bref-2024`；`eu-pef-recommendation-2021-2279` |
| `validate_combustion_emissions` | 场内燃料使用 | 对每种已用燃料，依据已披露前景记录和因子分别计算或测量化石二氧化碳、氮氧化物、硫氧化物和一次 PM2.5。 | `eu-jrc-sa-bref-2024`；`eu-pef-recommendation-2021-2279` |
| `validate_wastewater` | 废水和场内处理 | 将普通负荷与高有机负荷废水分开；适用时把污泥、筛渣、回收脂肪、COD、BOD5、总氮、总磷、悬浮固体、动物脂肪、甲烷和氧化亚氮作为单独行报告。 | `eu-jrc-sa-bref-2024`；`eu-pef-recommendation-2021-2279` |
| `validate_allocation` | 可销售共产品 | 确认先尝试细分，记录所选分配关系，因子总和为一，产品和废物分类遵循去向，并在重要时披露敏感性。 | `eu-pef-recommendation-2021-2279` |
| `validate_data_quality` | 前景数据集 | 要求运行过程采用企业特定活动数据、完整已知 LCI、产品特定物料和包装记录、DQ 证据、透明计算及可验证审计轨迹。 | `eu-pef-recommendation-2021-2279` |
| `validate_uuid_resolution` | 非参考清单流 | 在 flow-hybrid-search 与 state-100 直接回读对确切原子身份达成一致前，所有非参考流 UUID 均须缺省；激活或发布前须解决，或具有经批准的明确例外。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 企业特定前景数据集，经审查后可作为 secondary_dataset 或 background_dataset 发布 |
| downstream_use | 当声明边界、地理、技术、期间和产品状态匹配时，支持珍珠鸡肉系统的 process 和 lifecyclemodel 构建 |
| allowed_use | 门到门屠宰与加工研究；具有显式上下游链接的更宽范围研究；内部改进和经审查的环境足迹建模 |
| excluded_use | 缺少附加数据集时用于冷冻珍珠鸡肉、肥肝、单独销售的食用内脏、其他物种、经调制肉品、零售、烹饪或寿命终止建模 |
| required_metadata | CPC 21125；参考 UUID；产品形式；骨和皮状态；鲜或冷藏温度；活禽来源；屠宰、分割和制冷路线；制冷剂；共产品去向；分配；包装；废水去向；地理；技术；参考期 |
| required_quality_disclosure | 一手数据覆盖；秤和仪表校准；批次和质量平衡完整性；制冷剂核对；直接排放方法；废水采样；分配因子；数据缺口；代理；DQ 评估和验证状态 |
| update_trigger | 物种或产品范围、屠宰或分割技术、制冷剂物质、包装、分配、废水路线、供应商组合、场址、参考期、官方分类或治理方法变化 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3-0-2025` | dataset | 联合国统计司，《中央产品分类》第 3.0 版结构，2025 年 6 月 30 日；官方 CSV：https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv；仓库保留原始文件 `classifications/systems/cpc/3.0/raw/CPC_Ver_3.0_Structure_30Jun2025.csv`；检索日期 2026-06-23 | CPC 21125 鲜或冷藏珍珠鸡肉精确边界，以及冷冻禽肉和单独分类食用内脏的排除 |
| `eu-jrc-sa-bref-2024` | official_guidance | 欧盟委员会联合研究中心，《屠宰场、动物副产品及食用共产品行业最佳可行技术参考文件》，EUR 31752 EN，JRC135916，2024；DOI 10.2760/18199；https://publications.jrc.ec.europa.eu/repository/handle/JRC135916；检索日期 2026-08-13 | 屠宰场范围、禽类清洁胴体终点、接收、屠宰与整理、冷却、清洗、公用工程、动物共产品、废物、废水和排放 |
| `eu-pef-recommendation-2021-2279` | official_guidance | Commission Recommendation (EU) 2021/2279 环境足迹方法，2021 年 12 月 30 日合并文本，CELEX 02021H2279-20211230；https://eur-lex.europa.eu/legal-content/EN/ALL/?uri=CELEX:02021H2279-20211230；检索日期 2026-08-13 | 企业特定数据、产品特定物料清单、完整生命周期清单、分配层级、透明度、数据质量和验证 |
