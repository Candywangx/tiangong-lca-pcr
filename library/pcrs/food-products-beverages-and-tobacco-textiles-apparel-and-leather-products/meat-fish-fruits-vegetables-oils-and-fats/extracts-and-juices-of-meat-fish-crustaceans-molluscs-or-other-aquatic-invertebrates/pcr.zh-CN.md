---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.extracts-and-juices-of-meat-fish-crustaceans-molluscs-or-other-aquatic-invertebrates
language: zh-CN
status: candidate
content_maturity: authored_methodology
translation_status: aligned
sync_with: pcr.en-US.md
---

# 肉、鱼、甲壳类、软体动物或其他水生无脊椎动物的提取物和汁液

## 1. 范围与适用性

本 PCR 适用于 CPC 3.0 子类 21185 下，以一种已声明动物物种和一种已声明组织或加工部位为原料的提取物或汁液前景生产。每个数据包必须锁定一种产品身份（`extract` 或 `juice`）以及一个物态和浓缩状态，不得把不同物种、组织、产品身份或市场状态平均成同一个参考产品。

覆盖路线包括直接水提、热提、压榨和酶辅助水提，以及适用的澄清、过滤、浓缩、冷却、干燥、包装和储存。必须披露实际运行路线；未使用的卡片标记为不适用，不得凭假设赋零。实际交换若未列出，必须先增加一张仅含一个精确交换身份的原子卡。

本 PCR 不包括汤、肉汤、清汤、调味汁、整件或分割肉类及水产品、炼制动物脂肪、作为主产品出售的鱼油、鱼粉、明胶、胶原、分离氨基酸，以及声明身份既非提取物也非汁液的产品。畜牧生产、捕捞、养殖、屠宰、上岸和初级分割由适当上游数据集表示。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | `pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.extracts-and-juices-of-meat-fish-crustaceans-molluscs-or-other-aquatic-invertebrates` |
| classification_refs | CPC 3.0 `21185`，精确标题：Extracts and juices of meat, fish, crustaceans, molluscs or other aquatic invertebrates |
| covered_products | 一种物种和组织均明确的肉类、鱼类、甲壳类、软体动物或其他水生无脊椎动物提取物或汁液，处于一个已声明液态、浓缩液态、半液态、膏状、冷冻或干燥状态 |
| excluded_products | 汤和肉汤；调味汁；整件或分割动物产品；作为主产品的脂肪或油；鱼粉；明胶；胶原；分离氨基酸；混合物种或混合状态参考产品 |
| representative_product | 来自一种已声明物种和一种已声明组织的提取物或汁液，具有一个已声明固形物含量和物态 |
| production_route | 接收和制备；水提或酶辅助提取；分离和澄清；条件性浓缩或干燥；冷却、包装、储存；清洗和废水管理；条件性现场能源生产 |
| market_state | 设施门口、处于已声明液态、浓缩、膏状、冷冻或干燥状态及包装配置的产品 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 由一种精确动物物种和一种精确组织或部位制成的一种已声明提取物或汁液的净质量 |
| How much | 1 kg 净产品，不含包装 |
| How well | 符合生产者声明的组成、固形物或干物质含量、物态、食品安全规格和放行标准 |
| How long or cycle | 设施门口一个已放行生产批次；声明放行前储存温度和储存时长 |
| reference_flow_link | Tiangong Product 流 `0238a5c5-5b90-4881-8277-cd862a581eb8` |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 kg 净产品 |
| 参考产品流 | Extracts and juices of meat, fish, crustaceans, molluscs or other aquatic invertebrates `0238a5c5-5b90-4881-8277-cd862a581eb8` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 精确动物物种；精确组织、器官、部位或加工部分；产品身份必须恰为 `extract` 或 `juice`；水提、热提、压榨或酶辅助路线；物态；实测固形物或干物质含量；浓缩状态；脱脂状态；盐和加工助剂状态；保藏处理；包装组件；储存温度；生产地域；生产期间 |

构建前景数据包时，`必需限定信息` 中每项信息都必须在元数据、过程说明、参考流备注、产品说明或等效字段中声明。缺少限定信息即表示参考流不完整。类别级 Tiangong 名称不授权创建混合物种、混合组织、混合产品或混合状态数据集。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | 参考产品 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 报告恰好 1 kg 已放行净产品；包装组件不计入参考质量。 |
| `wet_dry_basis` | 原料、中间体、浓缩物、干燥产品 | Mass 和实测固形物分数 | kg 和 kg/kg | 保留同批次实测湿质量及固形物或水分结果，并据此计算干物质；禁止代入假设固形物值。 |
| `ingredient_formulation_basis` | 盐、酶、酸、碱、消泡剂、消毒剂 | Mass | kg | 记录交付制剂质量；相关时另记实测或供应商声明的有效成分分数，不得混淆有效成分质量与制剂质量。 |
| `electricity_basis` | 外购和自产电力 | Energy | kWh | 保留 kWh 实测值；共享电表仅按有记录的因果驱动因素分配。 |
| `thermal_energy_basis` | 外购蒸汽、自产蒸汽、外购热水、自产热水 | Energy | MJ | 由实测质量、压力或温度和焓计算有用热；不得使用未经核验的通用因子。 |
| `refrigerant_basis` | 每种具名制冷剂 | Mass | kg | 每种制冷剂分别记录充注、回收、退回、期初和期末库存，并按物质特定库存平衡计算损失。 |
| `wastewater_load_basis` | 每种具名水体污染物 | Mass | kg | 由代表性实测浓度和同一报告区间的对应实测排放体积计算负荷。 |
| `normalization_basis` | 所有清单交换 | 行特定属性 | 行特定单位 | 排除不合格产出并核对库存变化后，将报告期交换归一化至 1 kg 合格净产品。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 一种分流管理、物种和组织均明确的动物材料进入提取设施，并记录实测质量、状态、供应商、保藏历史和上游数据集链接。 |
| starting_condition_role | 前景起点；畜牧生产、捕捞或养殖、屠宰或上岸及初级分割属于上游。 |
| product_classification_scope | 仅在产品可证明为提取物或汁液时归入 CPC 3.0 子类 21185；类别归属不得合并物种、组织、路线或状态。 |
| recursive_input_rule | 作为配料购入的 CPC 21185 提取物或汁液按一个具有独立数据集的精确上游产品流记录，不在同一数据包中重新展开为前景动物原料。 |
| upstream_dataset_requirement | 每种动物材料、购入提取物或汁液、配料、公用工程、过滤介质、制冷剂和包装组件都链接到地域和时间适当的上游数据集。 |
| disclosure | 声明物种、组织、产品身份、路线、状态、固形物含量、脱脂状态、保藏、包装、储存、地域、期间、共产品去向、废物处理及所有边界排除。 |

| rule_id | 适用对象 | 规则 | 来源 |
| --- | --- | --- | --- |
| `boundary_foreground_operations` | 前景系统 | 纳入已声明批次实际使用的接收、制备、提取或水解、分离、澄清、适用的浓缩或干燥、冷却、包装、储存、清洗、废水管理及现场能源操作。 | `eu-pef-2021-2279`; `fao-fishmeal-process`; `codex-cxs-117-1981` |
| `boundary_upstream_links` | 外购投入 | 通过链接数据集表示上游动物生产或捕捞、初级加工、公用工程、化学品、过滤介质、制冷剂和包装，不得默默省略。 | `eu-pef-2021-2279` |
| `boundary_route_lock` | 参考产品 | 建模一个精确物种、组织、提取物或汁液身份、路线、物态和浓缩状态；禁止跨这些选择聚合。 | `un-cpc-3.0-21185`; `codex-cxs-117-1981`; `fao-fisheries-paper-540` |
| `boundary_nonoperated_upstream_exclusion` | 未运行的上游过程 | 除非设施实际执行，否则不得把屠宰、炼制、鱼粉、油脂生产或其他上游操作纳入前景。 | `jrc-sa-bref-2024` |
| `boundary_complete_lci` | 所有交换 | 清查原材料、能源、水、产品和共产品、废物及向空气和水体的排放，不得以集合标签替代交换。 | `eu-pef-2021-2279`; `jrc-sa-bref-2024` |

## 6. 过程清单结构

所有卡片执行 `atomic_flows:v1`。每个 `选定流` 都是一个具体交换。完成的数据包只保留适用于其精确路线的卡片；若实际交换未列出，必须新增原子卡。

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `raw_material_receipt_and_preparation` | 原料接收和制备 | `required` | 始终 | 前景接收、冷藏、清洗、修整和尺寸减小 | 实测物种及组织特定原料质量 |
| `aqueous_extraction_or_hydrolysis` | 水提或水解 | `required` | 始终；记录实际采用的一条路线 | 前景溶出或汁液释放 | 实测提取批次质量和固形物 |
| `separation_and_clarification` | 分离和澄清 | `required` | 始终 | 前景压榨、离心、澄清、过滤或膜分离 | 实测澄清液和分离组分 |
| `concentration_or_drying` | 浓缩或干燥 | `conditional` | 仅当声明状态为浓缩、膏状、浓缩后冷冻或干燥时纳入 | 前景蒸发、浓缩或干燥 | 调质前后实测产品质量和固形物 |
| `cooling_packaging_and_storage` | 产品冷却 | `required` | 始终 | 灌装或最终储存前的前景冷却 | 实测冷却产品处理量 |
| `cleaning_and_wastewater_management` | 清洗和废水管理 | `required` | 始终 | 前景卫生和排放管理 | 归一化至 1 kg 净产品的报告期产量 |
| `onsite_energy_generation` | 现场能源生产 | `conditional` | 现场燃烧燃料为批次提供蒸汽或热水时纳入 | 前景锅炉或加热器运行 | 实测有用蒸汽或热水产出 |
| `packaging_and_storage` | 包装和储存 | `required` | 始终 | 前景灌装、包装、冷藏或常温储存及设施门口放行 | 1 kg 已放行净参考产品 |

### 过程：原料接收和制备（`raw_material_receipt_and_preparation`）

#### 输入

##### 产品流

###### Beef skeletal muscle 投入（`beef_skeletal_muscle_input`）

Beef skeletal muscle 仅在数据包锁定该精确物种和组织时跨越设施边界。

- 选定流：Beef skeletal muscle
- 流属性/单位：Mass / kg
- 数量规则：由经校准称量或库存记录直接取得该具体交换质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_receipt_material_mass`
- 来源：`codex-cxs-117-1981`

###### Chicken skeletal muscle 投入（`chicken_skeletal_muscle_input`）

Chicken skeletal muscle 仅在数据包锁定该精确物种和组织时跨越设施边界。

- 选定流：Chicken skeletal muscle
- 流属性/单位：Mass / kg
- 数量规则：由经校准称量或库存记录直接取得该具体交换质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_receipt_material_mass`
- 来源：`codex-cxs-117-1981`

###### Atlantic cod skeletal muscle 投入（`atlantic_cod_skeletal_muscle_input`）

Atlantic cod skeletal muscle 仅在数据包锁定该精确物种和组织时跨越设施边界。

- 选定流：Atlantic cod skeletal muscle
- 流属性/单位：Mass / kg
- 数量规则：由经校准称量或库存记录直接取得该具体交换质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_receipt_material_mass`
- 来源：`fao-fisheries-paper-540`

###### Whiteleg shrimp meat 投入（`whiteleg_shrimp_meat_input`）

Whiteleg shrimp meat 仅在数据包锁定该精确物种和组织时跨越设施边界。

- 选定流：Whiteleg shrimp meat
- 流属性/单位：Mass / kg
- 数量规则：由经校准称量或库存记录直接取得该具体交换质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_receipt_material_mass`
- 来源：`fao-fisheries-paper-540`

###### Blue crab meat 投入（`blue_crab_meat_input`）

Blue crab meat 仅在数据包锁定该精确物种和组织时跨越设施边界。

- 选定流：Blue crab meat
- 流属性/单位：Mass / kg
- 数量规则：由经校准称量或库存记录直接取得该具体交换质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_receipt_material_mass`
- 来源：`fao-fisheries-paper-540`

###### Blue mussel meat 投入（`blue_mussel_meat_input`）

Blue mussel meat 仅在数据包锁定该精确物种和组织时跨越设施边界。

- 选定流：Blue mussel meat
- 流属性/单位：Mass / kg
- 数量规则：由经校准称量或库存记录直接取得该具体交换质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_receipt_material_mass`
- 来源：`fao-fisheries-paper-540`

###### European squid mantle 投入（`european_squid_mantle_input`）

European squid mantle 仅在数据包锁定该精确物种和组织时跨越设施边界。

- 选定流：European squid mantle
- 流属性/单位：Mass / kg
- 数量规则：由经校准称量或库存记录直接取得该具体交换质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_receipt_material_mass`
- 来源：`fao-fisheries-paper-540`

###### Sea cucumber body wall 投入（`sea_cucumber_body_wall_input`）

Sea cucumber body wall 仅在数据包锁定该精确物种和组织时跨越设施边界。

- 选定流：Sea cucumber body wall
- 流属性/单位：Mass / kg
- 数量规则：由经校准称量或库存记录直接取得该具体交换质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_receipt_material_mass`
- 来源：`un-cpc-3.0-21185`

###### Grid electricity 投入（`preparation_electricity`）

Grid electricity 仅在实际跨越本过程边界时作为一个具体交换独立记录，数量按下述协议取得。

- 选定流：Grid electricity
- 流属性/单位：Energy / kWh
- 数量规则：计量并分配给实际使用该电力的批次或期间。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_receipt_utility_records`
- 来源：`eu-pef-2021-2279`

###### Potable process water 投入（`preparation_process_water`）

Potable process water 仅在实际跨越本过程边界时作为一个具体交换独立记录，数量按下述协议取得。

- 选定流：Potable process water
- 流属性/单位：Volume / m3
- 数量规则：由经校准仪表直接计量，或由有记录的经校准罐体积推导。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_receipt_water_records`
- 来源：`codex-cxs-117-1981`

###### Potable water ice 投入（`potable_ice_input`）

Potable water ice 仅在实际跨越本过程边界时作为一个具体交换独立记录，数量按下述协议取得。

- 选定流：Potable water ice
- 流属性/单位：Mass / kg
- 数量规则：由经校准称量或库存记录直接取得该具体交换质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_receipt_material_mass`
- 来源：`jrc-sa-bref-2024`

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

###### Raw-material rinse wastewater 废物流（`raw_material_rinse_wastewater`）

Raw-material rinse wastewater 作为一个物理上独立的废物流记录，不得与其他废物合并。

- 选定流：Raw-material rinse wastewater
- 流属性/单位：Volume / m3
- 数量规则：由经校准仪表直接计量，或由有记录的经校准罐体积推导。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_receipt_wastewater_records`
- 来源：`jrc-sa-bref-2024`

##### 基本流

### 过程：水提或水解（`aqueous_extraction_or_hydrolysis`）

#### 输入

##### 产品流

###### Grid electricity 投入（`extraction_electricity`）

Grid electricity 仅在实际跨越本过程边界时作为一个具体交换独立记录，数量按下述协议取得。

- 选定流：Grid electricity
- 流属性/单位：Energy / kWh
- 数量规则：计量并分配给实际使用该电力的批次或期间。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_extraction_utility_records`
- 来源：`eu-pef-2021-2279`

###### Purchased steam 投入（`extraction_purchased_steam`）

Purchased steam 仅在实际跨越本过程边界时作为一个具体交换独立记录，数量按下述协议取得。

- 选定流：Purchased steam
- 流属性/单位：Energy / MJ
- 数量规则：由实测质量或流量以及实测焓或温度差计算有用能量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_extraction_utility_records`
- 来源：`fao-fishmeal-process`

###### Purchased hot water 投入（`extraction_purchased_hot_water`）

Purchased hot water 仅在实际跨越本过程边界时作为一个具体交换独立记录，数量按下述协议取得。

- 选定流：Purchased hot water
- 流属性/单位：Energy / MJ
- 数量规则：由实测质量或流量以及实测焓或温度差计算有用能量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_extraction_utility_records`
- 来源：`fao-fishmeal-process`

###### Potable process water 投入（`extraction_process_water`）

Potable process water 仅在实际跨越本过程边界时作为一个具体交换独立记录，数量按下述协议取得。

- 选定流：Potable process water
- 流属性/单位：Volume / m3
- 数量规则：由经校准仪表直接计量，或由有记录的经校准罐体积推导。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_extraction_ingredient_mass`
- 来源：`codex-cxs-117-1981`

###### Sodium chloride 投入（`sodium_chloride_input`）

Sodium chloride 仅在实际跨越本过程边界时作为一个具体交换独立记录，数量按下述协议取得。

- 选定流：Sodium chloride
- 流属性/单位：Mass / kg
- 数量规则：由经校准称量或库存记录直接取得该具体交换质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_extraction_ingredient_mass`
- 来源：`codex-cxs-117-1981`

###### Papain 投入（`papain_input`）

Papain 仅在实际跨越本过程边界时作为一个具体交换独立记录，数量按下述协议取得。

- 选定流：Papain
- 流属性/单位：Mass / kg
- 数量规则：由经校准称量或库存记录直接取得该具体交换质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_extraction_ingredient_mass`
- 来源：`fao-fishmeal-process`

###### Citric acid 投入（`citric_acid_input`）

Citric acid 仅在实际跨越本过程边界时作为一个具体交换独立记录，数量按下述协议取得。

- 选定流：Citric acid
- 流属性/单位：Mass / kg
- 数量规则：由经校准称量或库存记录直接取得该具体交换质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_extraction_ingredient_mass`
- 来源：`eu-pef-2021-2279`

###### Hydrochloric acid 投入（`hydrochloric_acid_input`）

Hydrochloric acid 仅在实际跨越本过程边界时作为一个具体交换独立记录，数量按下述协议取得。

- 选定流：Hydrochloric acid
- 流属性/单位：Mass / kg
- 数量规则：由经校准称量或库存记录直接取得该具体交换质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_extraction_ingredient_mass`
- 来源：`eu-pef-2021-2279`

###### Sodium hydroxide 投入（`sodium_hydroxide_process_input`）

Sodium hydroxide 仅在实际跨越本过程边界时作为一个具体交换独立记录，数量按下述协议取得。

- 选定流：Sodium hydroxide
- 流属性/单位：Mass / kg
- 数量规则：由经校准称量或库存记录直接取得该具体交换质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_extraction_ingredient_mass`
- 来源：`eu-pef-2021-2279`

###### Polydimethylsiloxane 投入（`polydimethylsiloxane_antifoam_input`）

Polydimethylsiloxane 仅在实际跨越本过程边界时作为一个具体交换独立记录，数量按下述协议取得。

- 选定流：Polydimethylsiloxane
- 流属性/单位：Mass / kg
- 数量规则：由经校准称量或库存记录直接取得该具体交换质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_extraction_ingredient_mass`
- 来源：`codex-cxs-117-1981`

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

##### 基本流

### 过程：分离和澄清（`separation_and_clarification`）

#### 输入

##### 产品流

###### Grid electricity 投入（`separation_electricity`）

Grid electricity 仅在实际跨越本过程边界时作为一个具体交换独立记录，数量按下述协议取得。

- 选定流：Grid electricity
- 流属性/单位：Energy / kWh
- 数量规则：计量并分配给实际使用该电力的批次或期间。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_separation_utility_records`
- 来源：`fao-fishmeal-process`

###### Potable process water 投入（`separation_process_water`）

Potable process water 仅在实际跨越本过程边界时作为一个具体交换独立记录，数量按下述协议取得。

- 选定流：Potable process water
- 流属性/单位：Volume / m3
- 数量规则：由经校准仪表直接计量，或由有记录的经校准罐体积推导。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_separation_utility_records`
- 来源：`eu-pef-2021-2279`

###### Diatomaceous earth 投入（`diatomaceous_earth_input`）

Diatomaceous earth 仅在实际跨越本过程边界时作为一个具体交换独立记录，数量按下述协议取得。

- 选定流：Diatomaceous earth
- 流属性/单位：Mass / kg
- 数量规则：由经校准称量或库存记录直接取得该具体交换质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_filter_media_mass`
- 来源：`eu-pef-2021-2279`

###### Activated carbon 投入（`activated_carbon_input`）

Activated carbon 仅在实际跨越本过程边界时作为一个具体交换独立记录，数量按下述协议取得。

- 选定流：Activated carbon
- 流属性/单位：Mass / kg
- 数量规则：由经校准称量或库存记录直接取得该具体交换质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_filter_media_mass`
- 来源：`fao-fishmeal-process`

###### Cellulose filter aid 投入（`cellulose_filter_aid_input`）

Cellulose filter aid 仅在实际跨越本过程边界时作为一个具体交换独立记录，数量按下述协议取得。

- 选定流：Cellulose filter aid
- 流属性/单位：Mass / kg
- 数量规则：由经校准称量或库存记录直接取得该具体交换质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_filter_media_mass`
- 来源：`eu-pef-2021-2279`

###### Polypropylene filter cartridge 投入（`polypropylene_filter_cartridge_input`）

Polypropylene filter cartridge 仅在实际跨越本过程边界时作为一个具体交换独立记录，数量按下述协议取得。

- 选定流：Polypropylene filter cartridge
- 流属性/单位：Mass / kg
- 数量规则：由相应采集协议的实测记录计算，并保留分配依据和单位换算。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_filter_media_mass`
- 来源：`eu-pef-2021-2279`

###### Polyethersulfone ultrafiltration membrane 投入（`polyethersulfone_membrane_input`）

Polyethersulfone ultrafiltration membrane 仅在实际跨越本过程边界时作为一个具体交换独立记录，数量按下述协议取得。

- 选定流：Polyethersulfone ultrafiltration membrane
- 流属性/单位：Mass / kg
- 数量规则：由相应采集协议的实测记录计算，并保留分配依据和单位换算。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_filter_media_mass`
- 来源：`fao-fisheries-paper-540`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### Recovered beef fat 产出（`recovered_beef_fat_coproduct`）

Recovered beef fat 仅在符合已声明规格并有证据表明离开设施用于有益用途时作为独立共产品记录。

- 选定流：Recovered beef fat
- 流属性/单位：Mass / kg
- 数量规则：由经校准称量或库存记录直接取得该具体交换质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_coproduct_mass`
- 来源：`jrc-sa-bref-2024`

###### Recovered Atlantic cod oil 产出（`recovered_atlantic_cod_oil_coproduct`）

Recovered Atlantic cod oil 仅在符合已声明规格并有证据表明离开设施用于有益用途时作为独立共产品记录。

- 选定流：Recovered Atlantic cod oil
- 流属性/单位：Mass / kg
- 数量规则：由经校准称量或库存记录直接取得该具体交换质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_coproduct_mass`
- 来源：`fao-fishmeal-process`

###### Recovered whiteleg shrimp oil 产出（`recovered_whiteleg_shrimp_oil_coproduct`）

Recovered whiteleg shrimp oil 仅在符合已声明规格并有证据表明离开设施用于有益用途时作为独立共产品记录。

- 选定流：Recovered whiteleg shrimp oil
- 流属性/单位：Mass / kg
- 数量规则：由经校准称量或库存记录直接取得该具体交换质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_coproduct_mass`
- 来源：`jrc-sa-bref-2024`

###### Recovered whiteleg shrimp shell 产出（`recovered_whiteleg_shrimp_shell_coproduct`）

Recovered whiteleg shrimp shell 仅在符合已声明规格并有证据表明离开设施用于有益用途时作为独立共产品记录。

- 选定流：Recovered whiteleg shrimp shell
- 流属性/单位：Mass / kg
- 数量规则：由经校准称量或库存记录直接取得该具体交换质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_coproduct_mass`
- 来源：`jrc-sa-bref-2024`

###### Recovered blue crab shell 产出（`recovered_blue_crab_shell_coproduct`）

Recovered blue crab shell 仅在符合已声明规格并有证据表明离开设施用于有益用途时作为独立共产品记录。

- 选定流：Recovered blue crab shell
- 流属性/单位：Mass / kg
- 数量规则：由经校准称量或库存记录直接取得该具体交换质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_coproduct_mass`
- 来源：`jrc-sa-bref-2024`

##### 废物流

###### Beef extraction press cake 废物流（`beef_extraction_press_cake_waste`）

Beef extraction press cake 作为一个物理上独立的废物流记录，不得与其他废物合并。

- 选定流：Beef extraction press cake
- 流属性/单位：Mass / kg
- 数量规则：由经校准称量或库存记录直接取得该具体交换质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_separation_waste_mass`
- 来源：`jrc-sa-bref-2024`

###### Atlantic cod extraction press cake 废物流（`atlantic_cod_extraction_press_cake_waste`）

Atlantic cod extraction press cake 作为一个物理上独立的废物流记录，不得与其他废物合并。

- 选定流：Atlantic cod extraction press cake
- 流属性/单位：Mass / kg
- 数量规则：由经校准称量或库存记录直接取得该具体交换质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_separation_waste_mass`
- 来源：`fao-fishmeal-process`

###### Whiteleg shrimp extraction press cake 废物流（`whiteleg_shrimp_extraction_press_cake_waste`）

Whiteleg shrimp extraction press cake 作为一个物理上独立的废物流记录，不得与其他废物合并。

- 选定流：Whiteleg shrimp extraction press cake
- 流属性/单位：Mass / kg
- 数量规则：由经校准称量或库存记录直接取得该具体交换质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_separation_waste_mass`
- 来源：`jrc-sa-bref-2024`

###### Blue mussel extraction press cake 废物流（`blue_mussel_extraction_press_cake_waste`）

Blue mussel extraction press cake 作为一个物理上独立的废物流记录，不得与其他废物合并。

- 选定流：Blue mussel extraction press cake
- 流属性/单位：Mass / kg
- 数量规则：由经校准称量或库存记录直接取得该具体交换质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_separation_waste_mass`
- 来源：`jrc-sa-bref-2024`

###### European squid extraction press cake 废物流（`european_squid_extraction_press_cake_waste`）

European squid extraction press cake 作为一个物理上独立的废物流记录，不得与其他废物合并。

- 选定流：European squid extraction press cake
- 流属性/单位：Mass / kg
- 数量规则：由经校准称量或库存记录直接取得该具体交换质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_separation_waste_mass`
- 来源：`jrc-sa-bref-2024`

###### Sea cucumber extraction press cake 废物流（`sea_cucumber_extraction_press_cake_waste`）

Sea cucumber extraction press cake 作为一个物理上独立的废物流记录，不得与其他废物合并。

- 选定流：Sea cucumber extraction press cake
- 流属性/单位：Mass / kg
- 数量规则：由经校准称量或库存记录直接取得该具体交换质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_separation_waste_mass`
- 来源：`jrc-sa-bref-2024`

###### Spent diatomaceous earth 废物流（`spent_diatomaceous_earth_waste`）

Spent diatomaceous earth 作为一个物理上独立的废物流记录，不得与其他废物合并。

- 选定流：Spent diatomaceous earth
- 流属性/单位：Mass / kg
- 数量规则：由经校准称量或库存记录直接取得该具体交换质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_separation_waste_mass`
- 来源：`eu-pef-2021-2279`

###### Spent activated carbon 废物流（`spent_activated_carbon_waste`）

Spent activated carbon 作为一个物理上独立的废物流记录，不得与其他废物合并。

- 选定流：Spent activated carbon
- 流属性/单位：Mass / kg
- 数量规则：由经校准称量或库存记录直接取得该具体交换质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_separation_waste_mass`
- 来源：`eu-pef-2021-2279`

###### Spent polypropylene filter cartridge 废物流（`spent_polypropylene_filter_cartridge_waste`）

Spent polypropylene filter cartridge 作为一个物理上独立的废物流记录，不得与其他废物合并。

- 选定流：Spent polypropylene filter cartridge
- 流属性/单位：Mass / kg
- 数量规则：由相应采集协议的实测记录计算，并保留分配依据和单位换算。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_separation_waste_mass`
- 来源：`eu-pef-2021-2279`

###### Spent polyethersulfone ultrafiltration membrane 废物流（`spent_polyethersulfone_membrane_waste`）

Spent polyethersulfone ultrafiltration membrane 作为一个物理上独立的废物流记录，不得与其他废物合并。

- 选定流：Spent polyethersulfone ultrafiltration membrane
- 流属性/单位：Mass / kg
- 数量规则：由相应采集协议的实测记录计算，并保留分配依据和单位换算。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_separation_waste_mass`
- 来源：`fao-fisheries-paper-540`

###### Separation wastewater 废物流（`separation_wastewater`）

Separation wastewater 作为一个物理上独立的废物流记录，不得与其他废物合并。

- 选定流：Separation wastewater
- 流属性/单位：Volume / m3
- 数量规则：由经校准仪表直接计量，或由有记录的经校准罐体积推导。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_separation_wastewater_records`
- 来源：`jrc-sa-bref-2024`

##### 基本流

### 过程：浓缩或干燥（`concentration_or_drying`）

#### 输入

##### 产品流

###### Grid electricity 投入（`concentration_electricity`）

Grid electricity 仅在实际跨越本过程边界时作为一个具体交换独立记录，数量按下述协议取得。

- 选定流：Grid electricity
- 流属性/单位：Energy / kWh
- 数量规则：计量并分配给实际使用该电力的批次或期间。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_concentration_utility_records`
- 来源：`fao-fishmeal-process`

###### Purchased steam 投入（`concentration_purchased_steam`）

Purchased steam 仅在实际跨越本过程边界时作为一个具体交换独立记录，数量按下述协议取得。

- 选定流：Purchased steam
- 流属性/单位：Energy / MJ
- 数量规则：由实测质量或流量以及实测焓或温度差计算有用能量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_concentration_utility_records`
- 来源：`fao-fishmeal-process`

###### Purchased hot water 投入（`concentration_purchased_hot_water`）

Purchased hot water 仅在实际跨越本过程边界时作为一个具体交换独立记录，数量按下述协议取得。

- 选定流：Purchased hot water
- 流属性/单位：Energy / MJ
- 数量规则：由实测质量或流量以及实测焓或温度差计算有用能量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_concentration_utility_records`
- 来源：`fao-fishmeal-process`

###### Compressed air 投入（`drying_compressed_air`）

Compressed air 仅在实际跨越本过程边界时作为一个具体交换独立记录，数量按下述协议取得。

- 选定流：Compressed air
- 流属性/单位：Normal volume / m3
- 数量规则：由经校准仪表直接计量，或由有记录的经校准罐体积推导。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_compressed_air_records`
- 来源：`fao-fisheries-paper-540`

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

###### Evaporator condensate wastewater 废物流（`evaporator_condensate_wastewater`）

Evaporator condensate wastewater 作为一个物理上独立的废物流记录，不得与其他废物合并。

- 选定流：Evaporator condensate wastewater
- 流属性/单位：Volume / m3
- 数量规则：由经校准仪表直接计量，或由有记录的经校准罐体积推导。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_evaporator_condensate_records`
- 来源：`fao-fishmeal-process`

##### 基本流

###### Particulate matter, less than or equal to 10 micrometres, to air 基本流（`drying_particulate_matter_to_air`）

Particulate matter, less than or equal to 10 micrometres, to air 作为一个独立基本流记录，并由同一报告区间的匹配前景测量计算。

- 选定流：Particulate matter, less than or equal to 10 micrometres, to air
- 流属性/单位：Mass / kg
- 数量规则：用物质特定实测浓度和对应干气体积计算，或采用有记录的场址特定燃料平衡。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_drying_stack_measurements`
- 来源：`jrc-sa-bref-2024`

### 过程：产品冷却（`cooling_packaging_and_storage`）

#### 输入

##### 产品流

###### Grid electricity 投入（`cooling_storage_electricity`）

Grid electricity 仅在实际跨越本过程边界时作为一个具体交换独立记录，数量按下述协议取得。

- 选定流：Grid electricity
- 流属性/单位：Energy / kWh
- 数量规则：计量并分配给实际使用该电力的批次或期间。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cooling_utility_records`
- 来源：`eu-pef-2021-2279`

###### Purchased chilled water 投入（`chilled_water_input`）

Purchased chilled water 仅在实际跨越本过程边界时作为一个具体交换独立记录，数量按下述协议取得。

- 选定流：Purchased chilled water
- 流属性/单位：Energy / MJ
- 数量规则：由实测质量或流量以及实测焓或温度差计算有用能量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_cooling_utility_records`
- 来源：`eu-pef-2021-2279`

###### Ammonia refrigerant, R717 投入（`ammonia_refrigerant_input`）

Ammonia refrigerant, R717 按具体物质单独记录，不得与其他制冷剂合并。

- 选定流：Ammonia refrigerant, R717
- 流属性/单位：Mass / kg
- 数量规则：按该具体物质的期初、补充、回收、退回和期末库存平衡计算。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_cooling_refrigerant_inventory`
- 来源：`jrc-sa-bref-2024`

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

##### 基本流

###### Ammonia to air 基本流（`ammonia_refrigerant_to_air`）

Ammonia to air 作为一个独立基本流记录，并由同一报告区间的匹配前景测量计算。

- 选定流：Ammonia to air
- 流属性/单位：Mass / kg
- 数量规则：按该具体物质的期初、补充、回收、退回和期末库存平衡计算。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_cooling_refrigerant_inventory`
- 来源：`jrc-sa-bref-2024`

### 过程：清洗和废水管理（`cleaning_and_wastewater_management`）

#### 输入

##### 产品流

###### Potable process water 投入（`sanitation_process_water`）

Potable process water 仅在实际跨越本过程边界时作为一个具体交换独立记录，数量按下述协议取得。

- 选定流：Potable process water
- 流属性/单位：Volume / m3
- 数量规则：由经校准仪表直接计量，或由有记录的经校准罐体积推导。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_sanitation_utility_records`
- 来源：`jrc-sa-bref-2024`

###### Grid electricity 投入（`sanitation_electricity`）

Grid electricity 仅在实际跨越本过程边界时作为一个具体交换独立记录，数量按下述协议取得。

- 选定流：Grid electricity
- 流属性/单位：Energy / kWh
- 数量规则：计量并分配给实际使用该电力的批次或期间。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_sanitation_utility_records`
- 来源：`eu-pef-2021-2279`

###### Purchased steam 投入（`sanitation_purchased_steam`）

Purchased steam 仅在实际跨越本过程边界时作为一个具体交换独立记录，数量按下述协议取得。

- 选定流：Purchased steam
- 流属性/单位：Energy / MJ
- 数量规则：由实测质量或流量以及实测焓或温度差计算有用能量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_sanitation_utility_records`
- 来源：`jrc-sa-bref-2024`

###### Purchased hot water 投入（`sanitation_purchased_hot_water`）

Purchased hot water 仅在实际跨越本过程边界时作为一个具体交换独立记录，数量按下述协议取得。

- 选定流：Purchased hot water
- 流属性/单位：Energy / MJ
- 数量规则：由实测质量或流量以及实测焓或温度差计算有用能量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_sanitation_utility_records`
- 来源：`jrc-sa-bref-2024`

###### Sodium hydroxide 投入（`sodium_hydroxide_cip_input`）

Sodium hydroxide 仅在实际跨越本过程边界时作为一个具体交换独立记录，数量按下述协议取得。

- 选定流：Sodium hydroxide
- 流属性/单位：Mass / kg
- 数量规则：由经校准称量或库存记录直接取得该具体交换质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cip_chemical_mass`
- 来源：`jrc-sa-bref-2024`

###### Nitric acid 投入（`nitric_acid_cip_input`）

Nitric acid 仅在实际跨越本过程边界时作为一个具体交换独立记录，数量按下述协议取得。

- 选定流：Nitric acid
- 流属性/单位：Mass / kg
- 数量规则：由经校准称量或库存记录直接取得该具体交换质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cip_chemical_mass`
- 来源：`jrc-sa-bref-2024`

###### Peracetic acid 投入（`peracetic_acid_disinfectant_input`）

Peracetic acid 仅在实际跨越本过程边界时作为一个具体交换独立记录，数量按下述协议取得。

- 选定流：Peracetic acid
- 流属性/单位：Mass / kg
- 数量规则：由经校准称量或库存记录直接取得该具体交换质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cip_chemical_mass`
- 来源：`jrc-sa-bref-2024`

###### Sodium hypochlorite 投入（`sodium_hypochlorite_disinfectant_input`）

Sodium hypochlorite 仅在实际跨越本过程边界时作为一个具体交换独立记录，数量按下述协议取得。

- 选定流：Sodium hypochlorite
- 流属性/单位：Mass / kg
- 数量规则：由经校准称量或库存记录直接取得该具体交换质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cip_chemical_mass`
- 来源：`jrc-sa-bref-2024`

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

###### Cleaning-in-place wastewater 废物流（`cip_wastewater`）

Cleaning-in-place wastewater 作为一个物理上独立的废物流记录，不得与其他废物合并。

- 选定流：Cleaning-in-place wastewater
- 流属性/单位：Volume / m3
- 数量规则：由经校准仪表直接计量，或由有记录的经校准罐体积推导。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cip_wastewater_records`
- 来源：`jrc-sa-bref-2024`

###### Wastewater-treatment sludge 废物流（`wastewater_treatment_sludge`）

Wastewater-treatment sludge 作为一个物理上独立的废物流记录，不得与其他废物合并。

- 选定流：Wastewater-treatment sludge
- 流属性/单位：Mass / kg
- 数量规则：由经校准称量或库存记录直接取得该具体交换质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wastewater_sludge_mass`
- 来源：`jrc-sa-bref-2024`

##### 基本流

###### Chemical oxygen demand to water 基本流（`chemical_oxygen_demand_to_water`）

Chemical oxygen demand to water 作为一个独立基本流记录，并由同一报告区间的匹配前景测量计算。

- 选定流：Chemical oxygen demand to water
- 流属性/单位：Mass / kg
- 数量规则：实测该污染物浓度乘以同一时段对应排放体积。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_wastewater_discharge_sampling`
- 来源：`jrc-sa-bref-2024`

###### Biochemical oxygen demand, 5 days, to water 基本流（`biochemical_oxygen_demand_to_water`）

Biochemical oxygen demand, 5 days, to water 作为一个独立基本流记录，并由同一报告区间的匹配前景测量计算。

- 选定流：Biochemical oxygen demand, 5 days, to water
- 流属性/单位：Mass / kg
- 数量规则：实测该污染物浓度乘以同一时段对应排放体积。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_wastewater_discharge_sampling`
- 来源：`jrc-sa-bref-2024`

###### Total suspended solids to water 基本流（`total_suspended_solids_to_water`）

Total suspended solids to water 作为一个独立基本流记录，并由同一报告区间的匹配前景测量计算。

- 选定流：Total suspended solids to water
- 流属性/单位：Mass / kg
- 数量规则：实测该污染物浓度乘以同一时段对应排放体积。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_wastewater_discharge_sampling`
- 来源：`jrc-sa-bref-2024`

###### Total nitrogen to water 基本流（`total_nitrogen_to_water`）

Total nitrogen to water 作为一个独立基本流记录，并由同一报告区间的匹配前景测量计算。

- 选定流：Total nitrogen to water
- 流属性/单位：Mass / kg
- 数量规则：实测该污染物浓度乘以同一时段对应排放体积。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_wastewater_discharge_sampling`
- 来源：`jrc-sa-bref-2024`

###### Total phosphorus to water 基本流（`total_phosphorus_to_water`）

Total phosphorus to water 作为一个独立基本流记录，并由同一报告区间的匹配前景测量计算。

- 选定流：Total phosphorus to water
- 流属性/单位：Mass / kg
- 数量规则：实测该污染物浓度乘以同一时段对应排放体积。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_wastewater_discharge_sampling`
- 来源：`jrc-sa-bref-2024`

###### Chloride to water 基本流（`chloride_to_water`）

Chloride to water 作为一个独立基本流记录，并由同一报告区间的匹配前景测量计算。

- 选定流：Chloride to water
- 流属性/单位：Mass / kg
- 数量规则：实测该污染物浓度乘以同一时段对应排放体积。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_wastewater_discharge_sampling`
- 来源：`jrc-sa-bref-2024`

### 过程：现场能源生产（`onsite_energy_generation`）

#### 输入

##### 产品流

###### Natural gas 投入（`natural_gas_input`）

Natural gas 仅在实际跨越本过程边界时作为一个具体交换独立记录，数量按下述协议取得。

- 选定流：Natural gas
- 流属性/单位：Energy / MJ
- 数量规则：依据相应采集协议的前景记录直接取得该具体交换量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_fuel_mass_energy`
- 来源：`jrc-sa-bref-2024`

###### Diesel fuel 投入（`diesel_input`）

Diesel fuel 仅在实际跨越本过程边界时作为一个具体交换独立记录，数量按下述协议取得。

- 选定流：Diesel fuel
- 流属性/单位：Mass / kg
- 数量规则：由经校准称量或库存记录直接取得该具体交换质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_fuel_mass_energy`
- 来源：`jrc-sa-bref-2024`

###### Liquefied petroleum gas 投入（`lpg_input`）

Liquefied petroleum gas 仅在实际跨越本过程边界时作为一个具体交换独立记录，数量按下述协议取得。

- 选定流：Liquefied petroleum gas
- 流属性/单位：Mass / kg
- 数量规则：由经校准称量或库存记录直接取得该具体交换质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_fuel_mass_energy`
- 来源：`jrc-sa-bref-2024`

###### Boiler feedwater 投入（`boiler_feedwater_input`）

Boiler feedwater 仅在实际跨越本过程边界时作为一个具体交换独立记录，数量按下述协议取得。

- 选定流：Boiler feedwater
- 流属性/单位：Volume / m3
- 数量规则：由经校准仪表直接计量，或由有记录的经校准罐体积推导。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_boiler_water_records`
- 来源：`jrc-sa-bref-2024`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### On-site generated steam 产出（`onsite_steam_output`）

On-site generated steam 仅在实际跨越本过程边界时作为一个具体交换独立记录，数量按下述协议取得。

- 选定流：On-site generated steam
- 流属性/单位：Energy / MJ
- 数量规则：由实测质量或流量以及实测焓或温度差计算有用能量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_generated_heat_records`
- 来源：`jrc-sa-bref-2024`

###### On-site generated hot water 产出（`onsite_hot_water_output`）

On-site generated hot water 仅在实际跨越本过程边界时作为一个具体交换独立记录，数量按下述协议取得。

- 选定流：On-site generated hot water
- 流属性/单位：Energy / MJ
- 数量规则：由实测质量或流量以及实测焓或温度差计算有用能量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_generated_heat_records`
- 来源：`jrc-sa-bref-2024`

##### 废物流

###### Boiler blowdown wastewater 废物流（`boiler_blowdown_wastewater`）

Boiler blowdown wastewater 作为一个物理上独立的废物流记录，不得与其他废物合并。

- 选定流：Boiler blowdown wastewater
- 流属性/单位：Volume / m3
- 数量规则：由经校准仪表直接计量，或由有记录的经校准罐体积推导。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_boiler_blowdown_records`
- 来源：`jrc-sa-bref-2024`

##### 基本流

###### Carbon dioxide, fossil, to air 基本流（`fossil_carbon_dioxide_to_air`）

Carbon dioxide, fossil, to air 作为一个独立基本流记录，并由同一报告区间的匹配前景测量计算。

- 选定流：Carbon dioxide, fossil, to air
- 流属性/单位：Mass / kg
- 数量规则：用物质特定实测浓度和对应干气体积计算，或采用有记录的场址特定燃料平衡。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_stack_emissions`
- 来源：`jrc-sa-bref-2024`

###### Nitrogen oxides, expressed as nitrogen dioxide, to air 基本流（`nitrogen_oxides_to_air`）

Nitrogen oxides, expressed as nitrogen dioxide, to air 作为一个独立基本流记录，并由同一报告区间的匹配前景测量计算。

- 选定流：Nitrogen oxides, expressed as nitrogen dioxide, to air
- 流属性/单位：Mass / kg
- 数量规则：用物质特定实测浓度和对应干气体积计算，或采用有记录的场址特定燃料平衡。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_stack_emissions`
- 来源：`jrc-sa-bref-2024`

###### Sulfur dioxide to air 基本流（`sulfur_dioxide_to_air`）

Sulfur dioxide to air 作为一个独立基本流记录，并由同一报告区间的匹配前景测量计算。

- 选定流：Sulfur dioxide to air
- 流属性/单位：Mass / kg
- 数量规则：用物质特定实测浓度和对应干气体积计算，或采用有记录的场址特定燃料平衡。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_stack_emissions`
- 来源：`jrc-sa-bref-2024`

###### Particulate matter, less than or equal to 10 micrometres, to air 基本流（`combustion_particulate_matter_to_air`）

Particulate matter, less than or equal to 10 micrometres, to air 作为一个独立基本流记录，并由同一报告区间的匹配前景测量计算。

- 选定流：Particulate matter, less than or equal to 10 micrometres, to air
- 流属性/单位：Mass / kg
- 数量规则：用物质特定实测浓度和对应干气体积计算，或采用有记录的场址特定燃料平衡。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_stack_emissions`
- 来源：`jrc-sa-bref-2024`

###### Carbon monoxide to air 基本流（`carbon_monoxide_to_air`）

Carbon monoxide to air 作为一个独立基本流记录，并由同一报告区间的匹配前景测量计算。

- 选定流：Carbon monoxide to air
- 流属性/单位：Mass / kg
- 数量规则：用物质特定实测浓度和对应干气体积计算，或采用有记录的场址特定燃料平衡。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_stack_emissions`
- 来源：`jrc-sa-bref-2024`

###### Methane to air 基本流（`methane_to_air`）

Methane to air 作为一个独立基本流记录，并由同一报告区间的匹配前景测量计算。

- 选定流：Methane to air
- 流属性/单位：Mass / kg
- 数量规则：用物质特定实测浓度和对应干气体积计算，或采用有记录的场址特定燃料平衡。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_stack_emissions`
- 来源：`jrc-sa-bref-2024`

### 过程：包装和储存（`packaging_and_storage`）

#### 输入

##### 产品流

###### Carbon dioxide refrigerant, R744 投入（`carbon_dioxide_refrigerant_input`）

Carbon dioxide refrigerant, R744 按具体物质单独记录，不得与其他制冷剂合并。

- 选定流：Carbon dioxide refrigerant, R744
- 流属性/单位：Mass / kg
- 数量规则：按该具体物质的期初、补充、回收、退回和期末库存平衡计算。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_storage_refrigerant_inventory`
- 来源：`jrc-sa-bref-2024`

###### 1,1,1,2-Tetrafluoroethane refrigerant, R134a 投入（`hfc_134a_refrigerant_input`）

1,1,1,2-Tetrafluoroethane refrigerant, R134a 按具体物质单独记录，不得与其他制冷剂合并。

- 选定流：1,1,1,2-Tetrafluoroethane refrigerant, R134a
- 流属性/单位：Mass / kg
- 数量规则：按该具体物质的期初、补充、回收、退回和期末库存平衡计算。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_storage_refrigerant_inventory`
- 来源：`jrc-sa-bref-2024`

###### Glass bottle 投入（`glass_bottle_input`）

Glass bottle 作为一个具体包装组件独立记录，不与其他包装组件合并。

- 选定流：Glass bottle
- 流属性/单位：Mass / kg
- 数量规则：由经校准称量或库存记录直接取得该具体交换质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_component_mass`
- 来源：`eu-pef-2021-2279`

###### High-density polyethylene bottle 投入（`hdpe_bottle_input`）

High-density polyethylene bottle 作为一个具体包装组件独立记录，不与其他包装组件合并。

- 选定流：High-density polyethylene bottle
- 流属性/单位：Mass / kg
- 数量规则：由经校准称量或库存记录直接取得该具体交换质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_component_mass`
- 来源：`eu-pef-2021-2279`

###### Steel drum 投入（`steel_drum_input`）

Steel drum 作为一个具体包装组件独立记录，不与其他包装组件合并。

- 选定流：Steel drum
- 流属性/单位：Mass / kg
- 数量规则：由相应采集协议的实测记录计算，并保留分配依据和单位换算。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_packaging_component_mass`
- 来源：`eu-pef-2021-2279`

###### Kraft-paper sack 投入（`kraft_paper_sack_input`）

Kraft-paper sack 作为一个具体包装组件独立记录，不与其他包装组件合并。

- 选定流：Kraft-paper sack
- 流属性/单位：Mass / kg
- 数量规则：由经校准称量或库存记录直接取得该具体交换质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_component_mass`
- 来源：`eu-pef-2021-2279`

###### Low-density polyethylene liner 投入（`ldpe_liner_input`）

Low-density polyethylene liner 作为一个具体包装组件独立记录，不与其他包装组件合并。

- 选定流：Low-density polyethylene liner
- 流属性/单位：Mass / kg
- 数量规则：由经校准称量或库存记录直接取得该具体交换质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_component_mass`
- 来源：`eu-pef-2021-2279`

###### Paperboard carton 投入（`paperboard_carton_input`）

Paperboard carton 作为一个具体包装组件独立记录，不与其他包装组件合并。

- 选定流：Paperboard carton
- 流属性/单位：Mass / kg
- 数量规则：由经校准称量或库存记录直接取得该具体交换质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_component_mass`
- 来源：`eu-pef-2021-2279`

###### Wooden pallet 投入（`wooden_pallet_input`）

Wooden pallet 作为一个具体包装组件独立记录，不与其他包装组件合并。

- 选定流：Wooden pallet
- 流属性/单位：Mass / kg
- 数量规则：由相应采集协议的实测记录计算，并保留分配依据和单位换算。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_packaging_component_mass`
- 来源：`eu-pef-2021-2279`

###### Low-density polyethylene stretch film 投入（`ldpe_stretch_film_input`）

Low-density polyethylene stretch film 作为一个具体包装组件独立记录，不与其他包装组件合并。

- 选定流：Low-density polyethylene stretch film
- 流属性/单位：Mass / kg
- 数量规则：由经校准称量或库存记录直接取得该具体交换质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_component_mass`
- 来源：`eu-pef-2021-2279`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### Extracts and juices of meat, fish, crustaceans, molluscs or other aquatic invertebrates 产出（`reference_product_output`）

该输出是具有已锁定物种、组织、物态、固形物含量和包装配置的一种提取物或汁液。

- 选定流：Extracts and juices of meat, fish, crustaceans, molluscs or other aquatic invertebrates `0238a5c5-5b90-4881-8277-cd862a581eb8`
- 流属性/单位：Mass 93a60a56-a3c8-11da-a746-0800200b9a66 / kg
- 数量规则：恰好 1 kg 不含包装的合格净产品。
- 数值来源模式：固定值（`fixed_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：1 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：身份引用（`identity_reference`）
- 来源：`un-cpc-3.0-21185`

##### 废物流

###### Waste glass bottle 废物流（`waste_glass_packaging`）

Waste glass bottle 作为一个物理上独立的废物流记录，不得与其他废物合并。

- 选定流：Waste glass bottle
- 流属性/单位：Mass / kg
- 数量规则：由经校准称量或库存记录直接取得该具体交换质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_waste_mass`
- 来源：`eu-pef-2021-2279`

###### Waste high-density polyethylene bottle 废物流（`waste_hdpe_packaging`）

Waste high-density polyethylene bottle 作为一个物理上独立的废物流记录，不得与其他废物合并。

- 选定流：Waste high-density polyethylene bottle
- 流属性/单位：Mass / kg
- 数量规则：由经校准称量或库存记录直接取得该具体交换质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_waste_mass`
- 来源：`eu-pef-2021-2279`

###### Waste steel drum 废物流（`waste_steel_packaging`）

Waste steel drum 作为一个物理上独立的废物流记录，不得与其他废物合并。

- 选定流：Waste steel drum
- 流属性/单位：Mass / kg
- 数量规则：由经校准称量或库存记录直接取得该具体交换质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_waste_mass`
- 来源：`eu-pef-2021-2279`

###### Waste kraft-paper sack 废物流（`waste_kraft_paper_packaging`）

Waste kraft-paper sack 作为一个物理上独立的废物流记录，不得与其他废物合并。

- 选定流：Waste kraft-paper sack
- 流属性/单位：Mass / kg
- 数量规则：由经校准称量或库存记录直接取得该具体交换质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_waste_mass`
- 来源：`eu-pef-2021-2279`

###### Waste low-density polyethylene 废物流（`waste_ldpe_packaging`）

Waste low-density polyethylene 作为一个物理上独立的废物流记录，不得与其他废物合并。

- 选定流：Waste low-density polyethylene
- 流属性/单位：Mass / kg
- 数量规则：由经校准称量或库存记录直接取得该具体交换质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_waste_mass`
- 来源：`eu-pef-2021-2279`

###### Waste paperboard carton 废物流（`waste_paperboard_packaging`）

Waste paperboard carton 作为一个物理上独立的废物流记录，不得与其他废物合并。

- 选定流：Waste paperboard carton
- 流属性/单位：Mass / kg
- 数量规则：由经校准称量或库存记录直接取得该具体交换质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_waste_mass`
- 来源：`eu-pef-2021-2279`

##### 基本流

###### Carbon dioxide, fossil, to air 基本流（`carbon_dioxide_refrigerant_to_air`）

Carbon dioxide, fossil, to air 作为一个独立基本流记录，并由同一报告区间的匹配前景测量计算。

- 选定流：Carbon dioxide, fossil, to air
- 流属性/单位：Mass / kg
- 数量规则：按该具体物质的期初、补充、回收、退回和期末库存平衡计算。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_storage_refrigerant_inventory`
- 来源：`jrc-sa-bref-2024`

###### 1,1,1,2-Tetrafluoroethane to air 基本流（`hfc_134a_refrigerant_to_air`）

1,1,1,2-Tetrafluoroethane to air 作为一个独立基本流记录，并由同一报告区间的匹配前景测量计算。

- 选定流：1,1,1,2-Tetrafluoroethane to air
- 流属性/单位：Mass / kg
- 数量规则：按该具体物质的期初、补充、回收、退回和期末库存平衡计算。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_storage_refrigerant_inventory`
- 来源：`jrc-sa-bref-2024`

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | 来源 |
| --- | --- | --- | --- |
| `allocation_subdivision_first` | 共享生产 | 只要仪表和记录允许，就按物种、组织、产品身份、路线和生产批次细分；用尽分流记录前不得对混合生产期分配。 | `eu-pef-2021-2279` |
| `allocation_direct_assignment` | 专用操作 | 将原料、配料、过滤介质、包装、废物和直接计量的公用工程分配给造成它们的产品。 | `eu-pef-2021-2279` |
| `allocation_physical_relation` | 不可分共享操作 | 对剩余共享操作使用有记录的因果物理关系，例如实测处理量、蒸发水量、处理固形物或有用热需求。 | `eu-pef-2021-2279`; `fao-fishmeal-process` |
| `allocation_economic_fallback` | 多功能产出 | 仅在无法细分且不存在可辩护因果物理关系时采用经济分配；使用同期价格，披露期间和币种，并进行敏感性分析。 | `eu-pef-2021-2279` |
| `allocation_coproduct_classification` | 分离脂肪、油、壳或其他组分 | 分离组分仅在符合声明规格且有证据表明离开设施用于有益用途时作为共产品，否则按精确废物流记录。 | `jrc-sa-bref-2024` |
| `allocation_no_avoided_burden` | 回收或再利用 | 不在前景清单中扣除避免产品负荷；替代信用只能置于明确声明的下游情景。 | `eu-pef-2021-2279` |
| `allocation_no_double_counting` | 外购和自产公用工程 | 同一计量交付中，用户过程只能消费外购载体或内部自产载体之一，不得把二者都作为外部投入。 | `eu-pef-2021-2279` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_receipt_material_mass` | `raw_material_receipt_and_preparation` | 协议对应的具体交换 | 场址原始记录 | 具体流身份；数值；单位；时间；批次；设备；去向；质量证据 | 用经校准秤、库存或批次记录分别计量每个具体流，并与批次或报告期核对。 | kg | 每批次、事件或规定监测周期 | 完整代表期 | 设施或排放点 | 按具体交换汇总并归一化至 1 kg 合格净产品 | 校准记录、原始记录和复核签字 |
| `cp_receipt_utility_records` | `raw_material_receipt_and_preparation` | 按载体拆分的公用工程 | 场址原始记录 | 具体流身份；数值；单位；时间；批次；设备；去向；质量证据 | 读取经校准专用仪表；仅在有记录时由经校准罐体或热力参数推导。 | kWh | 每批次、事件或规定监测周期 | 完整代表期 | 设施或排放点 | 按具体交换汇总并归一化至 1 kg 合格净产品 | 校准记录、原始记录和复核签字 |
| `cp_receipt_water_records` | `raw_material_receipt_and_preparation` | 协议对应的具体交换 | 场址原始记录 | 具体流身份；数值；单位；时间；批次；设备；去向；质量证据 | 读取经校准专用仪表；仅在有记录时由经校准罐体或热力参数推导。 | m3 | 每批次、事件或规定监测周期 | 完整代表期 | 设施或排放点 | 按具体交换汇总并归一化至 1 kg 合格净产品 | 校准记录、原始记录和复核签字 |
| `cp_receipt_wastewater_records` | `raw_material_receipt_and_preparation` | 每种具体废物流 | 场址原始记录 | 具体流身份；数值；单位；时间；批次；设备；去向；质量证据 | 读取经校准专用仪表；仅在有记录时由经校准罐体或热力参数推导。 | m3 | 每批次、事件或规定监测周期 | 完整代表期 | 设施或排放点 | 按具体交换汇总并归一化至 1 kg 合格净产品 | 校准记录、原始记录和复核签字 |
| `cp_extraction_utility_records` | `aqueous_extraction_or_hydrolysis` | 按载体拆分的公用工程 | 场址原始记录 | 具体流身份；数值；单位；时间；批次；设备；去向；质量证据 | 读取经校准专用仪表；仅在有记录时由经校准罐体或热力参数推导。 | kWh; kg; MJ | 每批次、事件或规定监测周期 | 完整代表期 | 设施或排放点 | 按具体交换汇总并归一化至 1 kg 合格净产品 | 校准记录、原始记录和复核签字 |
| `cp_extraction_ingredient_mass` | `aqueous_extraction_or_hydrolysis` | 每种具名物质 | 场址原始记录 | 具体流身份；数值；单位；时间；批次；设备；去向；质量证据 | 用经校准秤、库存或批次记录分别计量每个具体流，并与批次或报告期核对。 | kg or m3 | 每批次、事件或规定监测周期 | 完整代表期 | 设施或排放点 | 按具体交换汇总并归一化至 1 kg 合格净产品 | 校准记录、原始记录和复核签字 |
| `cp_separation_utility_records` | `separation_and_clarification` | 按载体拆分的公用工程 | 场址原始记录 | 具体流身份；数值；单位；时间；批次；设备；去向；质量证据 | 读取经校准专用仪表；仅在有记录时由经校准罐体或热力参数推导。 | kWh or m3 | 每批次、事件或规定监测周期 | 完整代表期 | 设施或排放点 | 按具体交换汇总并归一化至 1 kg 合格净产品 | 校准记录、原始记录和复核签字 |
| `cp_filter_media_mass` | `separation_and_clarification` | 每种具名过滤介质 | 场址原始记录 | 具体流身份；数值；单位；时间；批次；设备；去向；质量证据 | 用经校准秤、库存或批次记录分别计量每个具体流，并与批次或报告期核对。 | kg | 每批次、事件或规定监测周期 | 完整代表期 | 设施或排放点 | 按具体交换汇总并归一化至 1 kg 合格净产品 | 校准记录、原始记录和复核签字 |
| `cp_coproduct_mass` | `separation_and_clarification` | 每个已放行共产品 | 场址原始记录 | 具体流身份；数值；单位；时间；批次；设备；去向；质量证据 | 用经校准秤、库存或批次记录分别计量每个具体流，并与批次或报告期核对。 | kg | 每批次、事件或规定监测周期 | 完整代表期 | 设施或排放点 | 按具体交换汇总并归一化至 1 kg 合格净产品 | 校准记录、原始记录和复核签字 |
| `cp_separation_waste_mass` | `separation_and_clarification` | 每种具体废物流 | 场址原始记录 | 具体流身份；数值；单位；时间；批次；设备；去向；质量证据 | 用经校准秤、库存或批次记录分别计量每个具体流，并与批次或报告期核对。 | kg | 每批次、事件或规定监测周期 | 完整代表期 | 设施或排放点 | 按具体交换汇总并归一化至 1 kg 合格净产品 | 校准记录、原始记录和复核签字 |
| `cp_separation_wastewater_records` | `separation_and_clarification` | 每种具体废物流 | 场址原始记录 | 具体流身份；数值；单位；时间；批次；设备；去向；质量证据 | 读取经校准专用仪表；仅在有记录时由经校准罐体或热力参数推导。 | m3 | 每批次、事件或规定监测周期 | 完整代表期 | 设施或排放点 | 按具体交换汇总并归一化至 1 kg 合格净产品 | 校准记录、原始记录和复核签字 |
| `cp_concentration_utility_records` | `concentration_or_drying` | 按载体拆分的公用工程 | 场址原始记录 | 具体流身份；数值；单位；时间；批次；设备；去向；质量证据 | 读取经校准专用仪表；仅在有记录时由经校准罐体或热力参数推导。 | kWh; kg; MJ | 每批次、事件或规定监测周期 | 完整代表期 | 设施或排放点 | 按具体交换汇总并归一化至 1 kg 合格净产品 | 校准记录、原始记录和复核签字 |
| `cp_compressed_air_records` | `concentration_or_drying` | 协议对应的具体交换 | 场址原始记录 | 具体流身份；数值；单位；时间；批次；设备；去向；质量证据 | 读取经校准专用仪表；仅在有记录时由经校准罐体或热力参数推导。 | m3 | 每批次、事件或规定监测周期 | 完整代表期 | 设施或排放点 | 按具体交换汇总并归一化至 1 kg 合格净产品 | 校准记录、原始记录和复核签字 |
| `cp_evaporator_condensate_records` | `concentration_or_drying` | 协议对应的具体交换 | 场址原始记录 | 具体流身份；数值；单位；时间；批次；设备；去向；质量证据 | 读取经校准专用仪表；仅在有记录时由经校准罐体或热力参数推导。 | m3 | 每批次、事件或规定监测周期 | 完整代表期 | 设施或排放点 | 按具体交换汇总并归一化至 1 kg 合格净产品 | 校准记录、原始记录和复核签字 |
| `cp_drying_stack_measurements` | `concentration_or_drying` | 每种具名空气排放 | 场址原始记录 | 具体流身份；数值；单位；时间；批次；设备；去向；质量证据 | 将物质特定实测浓度与同一时段实测气体或废水体积配对。 | kg/m3 and m3 | 每批次、事件或规定监测周期 | 完整代表期 | 设施或排放点 | 按具体交换汇总并归一化至 1 kg 合格净产品 | 校准记录、原始记录和复核签字 |
| `cp_cooling_utility_records` | `cooling_packaging_and_storage` | 按载体拆分的公用工程 | 场址原始记录 | 具体流身份；数值；单位；时间；批次；设备；去向；质量证据 | 读取经校准专用仪表；仅在有记录时由经校准罐体或热力参数推导。 | kWh; m3; MJ | 每批次、事件或规定监测周期 | 完整代表期 | 设施或排放点 | 按具体交换汇总并归一化至 1 kg 合格净产品 | 校准记录、原始记录和复核签字 |
| `cp_cooling_refrigerant_inventory` | `cooling_packaging_and_storage` | 氨制冷剂 | 充注与库存记录 | 物质；期初库存；采购；补充；回收；退回；期末库存；设备 | 对冷却设备完成 R717 专项质量平衡 | kg | 每次维修事件及年度结算 | 完整报告期 | 设备与设施 | 单独计算 R717 损失，并按有记录的设备维修活动分配 | 维修发票、钢瓶称量和库存签字 |
| `cp_storage_refrigerant_inventory` | `packaging_and_storage` | 二氧化碳和 HFC-134a 制冷剂 | 充注与库存记录 | 物质；期初库存；采购；补充；回收；退回；期末库存；设备 | 对 R744 和 R134a 储存设备分别完成质量平衡 | kg | 每次维修事件及年度结算 | 完整报告期 | 设备与设施 | 按物质分别计算损失，并按有记录的设备维修活动分配 | 维修发票、钢瓶称量和库存签字 |
| `cp_sanitation_utility_records` | `cleaning_and_wastewater_management` | 按载体拆分的公用工程 | 场址原始记录 | 具体流身份；数值；单位；时间；批次；设备；去向；质量证据 | 读取经校准专用仪表；仅在有记录时由经校准罐体或热力参数推导。 | m3; kWh; kg; MJ | 每批次、事件或规定监测周期 | 完整代表期 | 设施或排放点 | 按具体交换汇总并归一化至 1 kg 合格净产品 | 校准记录、原始记录和复核签字 |
| `cp_cip_chemical_mass` | `cleaning_and_wastewater_management` | 每种具名物质 | 场址原始记录 | 具体流身份；数值；单位；时间；批次；设备；去向；质量证据 | 用经校准秤、库存或批次记录分别计量每个具体流，并与批次或报告期核对。 | kg | 每批次、事件或规定监测周期 | 完整代表期 | 设施或排放点 | 按具体交换汇总并归一化至 1 kg 合格净产品 | 校准记录、原始记录和复核签字 |
| `cp_cip_wastewater_records` | `cleaning_and_wastewater_management` | 每种具体废物流 | 场址原始记录 | 具体流身份；数值；单位；时间；批次；设备；去向；质量证据 | 读取经校准专用仪表；仅在有记录时由经校准罐体或热力参数推导。 | m3 | 每批次、事件或规定监测周期 | 完整代表期 | 设施或排放点 | 按具体交换汇总并归一化至 1 kg 合格净产品 | 校准记录、原始记录和复核签字 |
| `cp_wastewater_sludge_mass` | `cleaning_and_wastewater_management` | 每种具体废物流 | 场址原始记录 | 具体流身份；数值；单位；时间；批次；设备；去向；质量证据 | 读取经校准专用仪表；仅在有记录时由经校准罐体或热力参数推导。 | kg | 每批次、事件或规定监测周期 | 完整代表期 | 设施或排放点 | 按具体交换汇总并归一化至 1 kg 合格净产品 | 校准记录、原始记录和复核签字 |
| `cp_wastewater_discharge_sampling` | `cleaning_and_wastewater_management` | 每种具名水体污染物 | 场址原始记录 | 具体流身份；数值；单位；时间；批次；设备；去向；质量证据 | 将物质特定实测浓度与同一时段实测气体或废水体积配对。 | m3 and kg/m3 | 每批次、事件或规定监测周期 | 完整代表期 | 设施或排放点 | 按具体交换汇总并归一化至 1 kg 合格净产品 | 校准记录、原始记录和复核签字 |
| `cp_fuel_mass_energy` | `onsite_energy_generation` | 每种具名燃料 | 场址原始记录 | 具体流身份；数值；单位；时间；批次；设备；去向；质量证据 | 用经校准秤、库存或批次记录分别计量每个具体流，并与批次或报告期核对。 | kg or MJ | 每批次、事件或规定监测周期 | 完整代表期 | 设施或排放点 | 按具体交换汇总并归一化至 1 kg 合格净产品 | 校准记录、原始记录和复核签字 |
| `cp_boiler_water_records` | `onsite_energy_generation` | 协议对应的具体交换 | 场址原始记录 | 具体流身份；数值；单位；时间；批次；设备；去向；质量证据 | 读取经校准专用仪表；仅在有记录时由经校准罐体或热力参数推导。 | m3 | 每批次、事件或规定监测周期 | 完整代表期 | 设施或排放点 | 按具体交换汇总并归一化至 1 kg 合格净产品 | 校准记录、原始记录和复核签字 |
| `cp_generated_heat_records` | `onsite_energy_generation` | 按载体拆分的公用工程 | 场址原始记录 | 具体流身份；数值；单位；时间；批次；设备；去向；质量证据 | 读取经校准专用仪表；仅在有记录时由经校准罐体或热力参数推导。 | MJ | 每批次、事件或规定监测周期 | 完整代表期 | 设施或排放点 | 按具体交换汇总并归一化至 1 kg 合格净产品 | 校准记录、原始记录和复核签字 |
| `cp_boiler_blowdown_records` | `onsite_energy_generation` | 协议对应的具体交换 | 场址原始记录 | 具体流身份；数值；单位；时间；批次；设备；去向；质量证据 | 读取经校准专用仪表；仅在有记录时由经校准罐体或热力参数推导。 | m3 | 每批次、事件或规定监测周期 | 完整代表期 | 设施或排放点 | 按具体交换汇总并归一化至 1 kg 合格净产品 | 校准记录、原始记录和复核签字 |
| `cp_stack_emissions` | `onsite_energy_generation` | 每种具名空气排放 | 场址原始记录 | 具体流身份；数值；单位；时间；批次；设备；去向；质量证据 | 将物质特定实测浓度与同一时段实测气体或废水体积配对。 | kg/m3 and m3 | 每批次、事件或规定监测周期 | 完整代表期 | 设施或排放点 | 按具体交换汇总并归一化至 1 kg 合格净产品 | 校准记录、原始记录和复核签字 |
| `cp_packaging_component_mass` | `packaging_and_storage` | 每个包装组件 | 场址原始记录 | 具体流身份；数值；单位；时间；批次；设备；去向；质量证据 | 用经校准秤、库存或批次记录分别计量每个具体流，并与批次或报告期核对。 | kg | 每批次、事件或规定监测周期 | 完整代表期 | 设施或排放点 | 按具体交换汇总并归一化至 1 kg 合格净产品 | 校准记录、原始记录和复核签字 |
| `cp_reference_product_mass` | `packaging_and_storage` | 已放行参考产品 | 场址原始记录 | 具体流身份；数值；单位；时间；批次；设备；去向；质量证据 | 用经校准秤、库存或批次记录分别计量每个具体流，并与批次或报告期核对。 | kg | 每批次、事件或规定监测周期 | 完整代表期 | 设施或排放点 | 按具体交换汇总并归一化至 1 kg 合格净产品 | 校准记录、原始记录和复核签字 |
| `cp_packaging_waste_mass` | `packaging_and_storage` | 每种包装废物 | 场址原始记录 | 具体流身份；数值；单位；时间；批次；设备；去向；质量证据 | 用经校准秤、库存或批次记录分别计量每个具体流，并与批次或报告期核对。 | kg | 每批次、事件或规定监测周期 | 完整代表期 | 设施或排放点 | 按具体交换汇总并归一化至 1 kg 合格净产品 | 校准记录、原始记录和复核签字 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | 每个交换 | 归一化量 = 经核对报告期交换量 / 已放行合格净产品质量 | 交换记录；`cp_reference_product_mass` 净产出 | 每 1 kg 参考产品的行数量 | `eu-pef-2021-2279` |
| `calc_dry_matter` | 原料和产品 | 干物质 = 实测湿质量 × 同批次实测固形物分数 | 湿质量；实测固形物分数 | 干物质质量 | `codex-cxs-117-1981`; `fao-fisheries-paper-540` |
| `calc_extraction_solids_yield` | 提取和分离 | 固形物回收率 = 产品实测干物质 / 精确原料实测干物质；损失和分离组分分别报告 | 批次湿质量；批次固形物结果 | 固形物收率和核对结果 | `fao-fishmeal-process`; `fao-fisheries-paper-540` |
| `calc_thermal_energy` | 蒸汽和热水 | 由实测载体质量或流量及实测焓或温差计算有用热 | 质量或流量；压力；供水温度；回水温度 | MJ 有用热 | `fao-fishmeal-process` |
| `calc_refrigerant_loss` | 每种制冷剂 | 损失 = 期初库存 + 采购 + 补充 − 期末库存 − 回收量 − 退回量；每种物质独立计算 | `cp_cooling_refrigerant_inventory`；`cp_storage_refrigerant_inventory` 字段 | kg 物质排放 | `eu-pef-2021-2279` |
| `calc_wastewater_load` | 每种水体污染物 | 负荷 = 代表性实测浓度 × 对应实测排放体积，并记录单位换算 | `cp_wastewater_discharge_sampling` 浓度和体积 | kg 污染物排放 | `jrc-sa-bref-2024` |
| `calc_stack_load` | 每种空气污染物 | 负荷 = 实测浓度 × 对应干态标准气体体积；仅在身份和推导有记录时采用场址燃料因子 | `cp_stack_emissions` 浓度或因子；气体体积或燃料 | kg 污染物排放 | `jrc-sa-bref-2024` |
| `calc_packaging_mass` | 每个包装组件 | 组件量 = 实测单件质量 × 合格发放件数 / 合格净产品质量；复用组件再除以经核验复用次数 | 组件称量和发放记录；复用次数；净产出 | 每 kg 参考产品的组件 kg 数 | `eu-pef-2021-2279` |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity_lock` | 参考产品和原料 | 数据包固定一种物种、一种组织、一种提取物或汁液身份、一个物态和一个浓缩状态。 | 批次规格、放行记录、参考流限定信息 |
| `dq_primary_manufacturing_data` | 前景操作 | 对所代表设施和报告期使用公司特定实测数据或由实测数据计算的结果。 | 仪表、批次记录、实验室报告、发票、计算底稿 |
| `dq_temporal_representativeness` | 前景清单 | 覆盖代表性生产期，包括启动、清洗、停机分配、储存和重要季节变化。 | 生产日历和覆盖说明 |
| `dq_mass_solids_reconciliation` | 每批次和报告期 | 核对原料、产品、共产品、废物、库存变化和实测除水量的湿质量和干物质，并解释残差。 | 经签署湿质量和固形物平衡 |
| `dq_atomic_exchange_identity` | 清单行 | 每行仅命名一个交换；电力、蒸汽、热水、每种燃料、每种制冷剂、每种化学品、每个包装组件、每种废物和每种排放保持分开。 | 行级清单审计 |
| `dq_upstream_dataset_links` | 外购投入 | 为每种物料投入提供上游数据集链接、地域、时间及供应商或技术依据。 | 数据集链接登记和供应商证据 |
| `dq_no_unsupported_defaults` | 所有数量 | 不得把作者估算、无引用范围或来源示例数值用作生产数量；必须采集数值或由采集记录计算。 | 行级溯源和协议链接 |
| `dq_evidence_traceability` | 所有计算行 | 保留原始记录、公式版本、单位换算、分配驱动因素、复核人和计算日期。 | 可复算计算文件和复核签字 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | 来源 |
| --- | --- | --- | --- |
| `validation_reference_identity` | 参考流 | 参考产品 UUID、Mass 属性 UUID、Units of mass UUID、kg 单位和恰好 1 kg 净产出必须与第 3 节一致。 | `un-cpc-3.0-21185` |
| `validation_qualifier_lock` | 数据包身份 | 拒绝混合物种、组织、提取物和汁液身份、物态或浓缩状态，或缺少必需限定信息的数据包。 | `un-cpc-3.0-21185`; `codex-cxs-117-1981` |
| `validation_process_applicability` | 过程图 | 每个必需过程都有前景记录；每个条件过程有运行证据，或以路线说明明确标记为不适用。 | `eu-pef-2021-2279` |
| `validation_atomic_rows` | 过程清单 | 拒绝集合或选择器行；每个实际交换由一个具体流卡表示，未列出的实际交换新增为原子行。 | `eu-pef-2021-2279` |
| `validation_uuid_closure` | Tiangong 身份 | 参考 UUID 必须等于已核验身份；其他 UUID 在独立解析前保持空白，manifest 未解析登记与所有空 UUID 行编号精确一致。 | `un-cpc-3.0-21185` |
| `validation_inventory_completeness` | LCI | 确认运行路线的原料、公用工程、水、配料、过滤介质、包装、共产品、废物、废水污染物、制冷剂损失和直接空气排放。 | `eu-pef-2021-2279`; `jrc-sa-bref-2024` |
| `validation_mass_solids_balance` | 质量平衡 | 湿质量和干物质平衡核对原料、产品、分离组分、废物、库存变化和除水量；每项残差均量化并解释。 | `fao-fishmeal-process`; `fao-fisheries-paper-540` |
| `validation_quantity_provenance` | 清单数量 | 每个非固定值都链接到前景采集协议或使用采集记录的计算；禁止无依据默认值、范围和推理估算。 | `eu-pef-2021-2279` |
| `validation_allocation` | 共享操作和共产品 | 核验细分、直接归属、因果驱动因素、任何经济回退、共产品分类，并确认无重复计数或内嵌避免负荷。 | `eu-pef-2021-2279` |
| `validation_language_alignment` | 双语 PCR | 中英文具有相同顺序的 process_id、row_id、受控词元、UUID、source id、计算 id 和规范 rule_id。 | `eu-pef-2021-2279` |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 一种已锁定提取物或汁液的公司特定前景生产数据集 |
| downstream_use | 产品碳足迹、环境足迹研究、LCA 过程数据集、生命周期模型、供应商披露和内部过程改进 |
| allowed_use | 仅用于已声明物种、组织、产品身份、路线、物态、固形物或浓缩状态、设施、地域、期间、包装和储存条件 |
| excluded_use | 通用家禽、通用鱼类、通用甲壳类、通用软体动物、混合动物投入、混合提取物和汁液产品、其他浓缩状态、汤或肉汤、鱼粉、明胶、主产品油脂或未代表设施 |
| required_metadata | 全部参考限定信息；设施和期间；过程适用性；精确 BoM；仪表和协议；上游数据集链接；共产品去向；分配；废物去向；排放点；未解析 UUID 状态 |
| required_quality_disclosure | 一手数据覆盖；仪表和实验室 QA；湿质量和固形物核对；分配敏感性；缺失数据；代表性；任何新增原子行 |
| update_trigger | 物种、组织、产品身份、提取路线、物态或浓缩状态、配方、过滤技术、包装、制冷剂、燃料、废水处理、分配依据、设施或代表期发生变化 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3.0-21185` | 官方指南（`official_guidance`） | United Nations Statistics Division, Central Product Classification Version 3.0, retained official structure CSV, subclass 21185, https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv, retrieved 2026-06-23 | 精确产品类别标题和类别边界 |
| `eu-pef-2021-2279` | 官方指南（`official_guidance`） | European Commission Recommendation (EU) 2021/2279 on the use of Environmental Footprint methods, consolidated text, https://eur-lex.europa.eu/eli/reco/2021/2279/2021-12-30/eng, retrieved 2026-08-13 | 产品特定物料清单、公司特定制造数据、完整原材料、能源、产品、废物和排放清单、透明度、分配和数据质量 |
| `jrc-sa-bref-2024` | 官方指南（`official_guidance`） | Karlis, P. et al., Best Available Techniques Reference Document for the Slaughterhouses, Animal By-products and/or Edible Co-products Industries, JRC135916, EUR 31752 EN, DOI 10.2760/18199, https://publications.jrc.ec.europa.eu/repository/handle/JRC135916, retrieved 2026-08-13 | 动物来源投入和共产品背景、清洗、水、废水、燃料燃烧、直接排放、监测和处理边界，同时不导入未运行上游过程 |
| `codex-cxs-117-1981` | 标准（`standard`） | Codex Alimentarius, CXS 117-1981, Standard for Bouillons and Consommés, revised 2015 and amended 2021, https://workspace.fao.org/sites/codex/Standards/CXS%20117-1981/CXS_117e.pdf, retrieved 2026-08-13 | 水溶性肉提取物、盐和水投入及即食、浓缩、冷冻或脱水形态；不把组成数值作为默认值 |
| `fao-fisheries-paper-540` | 手册（`handbook`） | Tacon, A.G.J., Metian, M. and Hasan, M.R., Feed ingredients and fertilizers for farmed aquatic animals: sources and composition, FAO Fisheries and Aquaculture Technical Paper 540, 2009, ISBN 978-92-5-106421-4, https://www.fao.org/4/i1142e/i1142e.pdf, retrieved 2026-08-13 | 精确来源和组织命名、水提物、物种特定身份、酶水解、去除未消化固体、浓缩、过滤和干燥路线；饲料定义只作方法证据 |
| `fao-fishmeal-process` | 手册（`handbook`） | FAO, The production of fish meal and oil, Chapter 3: The process, https://www.fao.org/4/X6899E/X6899E04.htm, retrieved 2026-08-13 | 加热、压榨、离心、分离、水溶物蒸发、干燥、冷却、能源载体、废水和空气排放控制；不导入鱼粉数量和操作示例 |
