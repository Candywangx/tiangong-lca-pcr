---
pcr_id: pcr.metal-products-machinery-and-equipment.basic-metals.alumina-aluminium-oxide-except-artificial-corundum
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 氧化铝（铝的氧化物），人造刚玉除外

## 1. 范围与适用性

本 PCR 适用于以铝土矿为原料、采用拜耳法生产干燥非熔融氧化铝的门到门过程，包括原料装卸与磨矿、溶出、澄清、分解、焙烧、产品处理、赤泥管理，以及由报告设施运行时的现场蒸汽生产。产品属于 CPC 3.0 代码 41432。排除人造刚玉、熔融氧化铝、氢氧化铝、经进一步转化制成的下游专用形态、原铝冶炼、铝土矿开采，以及外购材料和能源的第三方上游生产。

报告设施应声明铝土矿矿物组成与水分基准、氧化铝品级与水分基准、精炼技术、燃料与蒸汽配置、赤泥管理路线、地域和报告期。熔融工序不在本拜耳法精炼边界内，因此本语义边界与人造刚玉明确区分。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | `pcr.metal-products-machinery-and-equipment.basic-metals.alumina-aluminium-oxide-except-artificial-corundum` |
| classification_refs | CPC 3.0 `41432`，精确映射 |
| covered_products | 由铝土矿经拜耳法生产的干燥非熔融氧化铝 |
| excluded_products | 人造刚玉；熔融氧化铝；氢氧化铝；原铝；铝土矿；下游专用产品 |
| representative_product | 精炼厂门口的冶金级或其他已声明品级的非熔融干燥氧化铝 |
| production_route | 拜耳法溶出、澄清、分解和焙烧 |
| market_state | 从精炼厂发运的干燥氧化铝；声明包装或散装交付状态 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 符合已声明产品规格的干燥非熔融氧化铝 |
| How much | 1,000 kg |
| How well | 声明氧化铝含量、杂质、粒度规格和水分基准 |
| How long or cycle | 已声明报告期内的生产，通常为连续 12 个月 |
| reference_flow_link | 精炼厂门口的可销售氧化铝净产量 |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1,000 kg |
| 参考产品流 | 氧化铝（铝的氧化物），人造刚玉除外 `2b64b550-00d6-4210-aa50-7c061511518d` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 干质量基准；氧化铝品级和杂质规格；非熔融状态；拜耳法路线；工厂地域；报告期；包装或散装交付状态 |

构建前景数据包时，`必需限定信息` 中列出的信息应在数据集元数据、过程说明、参考流备注、产品说明或等效数据包字段中明确声明。缺失必需限定信息的数据包视为参考流定义不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | 氧化铝参考产品 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 按已声明干质量基准报告可销售氧化铝净量；保留实测水分和换算记录。 |
| `solid_mass_basis` | 铝土矿、氢氧化钠、氧化钙、赤泥和颗粒物 | Mass | kg | 声明收到态或干基，仅使用实测水分或浓度数据换算。 |
| `process_water_mass` | 工艺用水 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 使用质量计量；如由体积换算，应记录密度和参考条件。 |
| `gas_volume_basis` | 气态天然气 | Volume `93a60a56-a3c8-22da-a746-0800200c9a66` | m3 | 声明温度、压力、组成，以及仪表采用标准体积还是实际体积。 |
| `energy_basis` | 交流电 | Net calorific value | MJ | 按 3.6 MJ/kWh 将设施电表数据换算为 MJ，并保留原始 kWh 记录。 |
| `steam_mass_basis` | 工业蒸汽 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 计量蒸汽质量，并单独记录压力、温度、凝结水回流和外购或现场来源。 |

## 5. 系统边界

前景边界始于铝土矿和其他外购投入跨越精炼厂厂门，终于合格干燥氧化铝跨越精炼厂厂门。纳入精炼厂装卸、磨矿、溶出、澄清、分解、焙烧、产品回收、设施直接运营的赤泥管理，以及设施直接运营的蒸汽生产。纳入直接燃料燃烧和实测排放；外购投入连接独立上游数据集，不将其上游交换写入前景行。

排除已声明厂门之前的铝土矿开采和选矿、外购化学品和能源制造、研究目标未明确要求的资本品、员工通勤、下游运输和使用、铝冶炼与人造刚玉熔融。应披露从该门到门边界中遗漏的任何重要场址作业。

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 厂门处的铝土矿、化学品、水、燃料和外购能源，并声明供应状态和计量基准 |
| starting_condition_role | 门到门前景起始条件 |
| product_classification_scope | CPC 3.0 `41432`，排除人造刚玉和下游转化 |
| recursive_input_rule | 返厂氧化铝或同类材料应按来源和状态单独记录一次；不得在同一前景数据包内对该投入递归应用本 PCR。 |
| upstream_dataset_requirement | 每项外购投入采用地域、技术、时间和产品状态具有代表性的上游数据集。 |
| disclosure | 报告截断、缺失仪表、分配、母液与晶种循环、赤泥路线、能源来源及边界偏差。 |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `raw_material_handling` | 原料装卸与磨矿 | 必需 | 始终纳入 | 制备铝土矿进料 | 转入溶出的铝土矿 |
| `digestion_clarification_precipitation` | 溶出、澄清与分解 | 必需 | 始终纳入 | 生产氢氧化铝中间体并分离赤泥 | 送往焙烧的氢氧化铝 |
| `calcination_product_handling` | 焙烧与产品处理 | 必需 | 始终纳入 | 生产可销售干燥氧化铝 | 1,000 kg 干燥氧化铝 |
| `red_mud_management` | 赤泥管理 | 条件 | 仅在报告设施边界内管理赤泥时纳入 | 转运和管理精炼残渣 | 接收管理的赤泥 |
| `onsite_steam_generation` | 现场蒸汽生产 | 条件纳入 | 仅报告设施自行产汽时纳入 | 向精炼过程供应蒸汽 | 交付精炼用户的工业蒸汽 |

### 过程：原料装卸与磨矿（`raw_material_handling`）

#### 输入

##### 产品流

###### 铝土矿进料（`rmh_bauxite`）

记录进入精炼厂装卸与磨矿的收到态铝土矿。

- 选定流：铝土矿
- 流属性/单位：Mass / kg
- 数量规则：地磅或皮带秤净质量，并修正至已声明水分基准
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 干燥氧化铝输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_rmh_bauxite`
- 来源：`australia-npi-alumina-refining-2007`、`us-epa-ap42-primary-aluminum-12-1`

###### 装卸与磨矿用电（`rmh_electricity`）

记录铝土矿装卸与磨矿消耗的计量交流电。

- 选定流：交流电 `4d0361a3-56cc-45f9-aa42-bb9103285bf9`
- 流属性/单位：Net calorific value / MJ
- 数量规则：分表电量，或按运行记录分配共用电表
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 干燥氧化铝输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_rmh_electricity`
- 来源：`australia-npi-alumina-refining-2007`

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

##### 基本流

###### 装卸与磨矿总颗粒物（`rmh_total_particulate`）

记录铝土矿装卸与磨矿经控制后排入空气的总颗粒物。

- 选定流：排入空气的总颗粒物
- 流属性/单位：Mass / kg
- 数量规则：烟道或无组织源实测；否则采用有文件依据的场址质量平衡或认可排放因子
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 干燥氧化铝输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_rmh_total_particulate`
- 来源：`us-epa-ap42-primary-aluminum-12-1`、`australia-npi-alumina-refining-2007`

### 过程：溶出、澄清与分解（`digestion_clarification_precipitation`）

#### 输入

##### 产品流

###### 工艺用水（`dcp_process_water`）

记录跨越本过程边界的工艺补充水，不计内部循环水。

- 选定流：工艺用水 `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- 流属性/单位：Mass / kg
- 数量规则：补充水净计量，扣除有记录的内部循环
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 干燥氧化铝输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_dcp_process_water`
- 来源：`australia-npi-alumina-refining-2007`

###### 氢氧化钠（`dcp_sodium_hydroxide`）

记录进入母液循环的外购氢氧化钠补充量。

- 选定流：氢氧化钠 `e0abcced-0611-4c24-9290-5a2c5a0c4169`
- 流属性/单位：Mass / kg
- 数量规则：发票量或罐存变化量，按实测浓度折算为 100% 氢氧化钠当量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 干燥氧化铝输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_dcp_sodium_hydroxide`
- 来源：`australia-npi-alumina-refining-2007`、`us-epa-ap42-primary-aluminum-12-1`

###### 氧化钙（`dcp_calcium_oxide`）

按明确化学组成的质量基准记录精炼用石灰中的氧化钙。

- 选定流：氧化钙
- 流属性/单位：Mass / kg
- 数量规则：交付质量乘以实测氧化钙质量分数，排除水分和惰性成分
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 干燥氧化铝输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_dcp_calcium_oxide`
- 来源：`australia-npi-alumina-refining-2007`、`us-epa-ap42-primary-aluminum-12-1`

###### 溶出、澄清与分解用电（`dcp_electricity`）

记录该过程组消耗的交流电。

- 选定流：交流电 `4d0361a3-56cc-45f9-aa42-bb9103285bf9`
- 流属性/单位：Net calorific value / MJ
- 数量规则：分表电量，或按运行记录分配共用电表
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 干燥氧化铝输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_dcp_electricity`
- 来源：`australia-npi-alumina-refining-2007`

###### 工业蒸汽（`dcp_industrial_steam`）

记录交付溶出及相关精炼用户的蒸汽，包括外购蒸汽或条件性现场过程供应的蒸汽。

- 选定流：工业蒸汽 `ea4e839d-d854-4a7a-a362-b4ccb8dc61ff`
- 流属性/单位：Mass / kg
- 数量规则：交付蒸汽实测质量，扣除单独计量的凝结水回流
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 干燥氧化铝输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_dcp_industrial_steam`
- 来源：`australia-npi-alumina-refining-2007`

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

###### 铝土矿消化产生的赤泥（`dcp_red_mud`）

记录从铝酸钠溶液中分离并转往赤泥管理的赤泥。

- 选定流：铝土矿消化产生的赤泥 `2d27a130-27dc-48d9-bc6a-c2428bb6907b`
- 流属性/单位：Mass / kg
- 数量规则：实测浆体或固体质量，并保留干固体分数和夹带母液基准
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 干燥氧化铝输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_dcp_red_mud`
- 来源：`australia-npi-alumina-refining-2007`、`us-epa-ap42-primary-aluminum-12-1`

##### 基本流

### 过程：焙烧与产品处理（`calcination_product_handling`）

#### 输入

##### 产品流

###### 焙烧用天然气（`calc_natural_gas`）

记录焙烧过程直接燃烧的气态天然气。

- 选定流：气态天然气 `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位：Volume / m3
- 数量规则：按已记录参考条件计量并归属于焙烧的天然气体积
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 干燥氧化铝输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_calc_natural_gas`
- 来源：`australia-npi-alumina-refining-2007`

###### 焙烧与产品处理用电（`calc_electricity`）

记录焙烧、冷却、回收与产品处理消耗的交流电。

- 选定流：交流电 `4d0361a3-56cc-45f9-aa42-bb9103285bf9`
- 流属性/单位：Net calorific value / MJ
- 数量规则：分表电量，或按运行记录分配共用电表
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 干燥氧化铝输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_calc_electricity`
- 来源：`australia-npi-alumina-refining-2007`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 可销售干燥氧化铝（`calc_alumina`）

记录从精炼厂发运的合格氧化铝净量，不计内部循环和留在场内的不合格料。

- 选定流：氧化铝（铝的氧化物），人造刚玉除外 `2b64b550-00d6-4210-aa50-7c061511518d`
- 流属性/单位：Mass / kg
- 数量规则：精炼厂门口的可销售干质量净量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：1,000 kg 干燥氧化铝输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_calc_alumina`
- 来源：`un-cpc-3-0-structure-2025`、`australia-npi-alumina-refining-2007`

##### 废物流

##### 基本流

###### 焙烧燃料的化石源二氧化碳（`calc_fossil_carbon_dioxide`）

记录焙烧燃料燃烧的直接化石源二氧化碳，不计上游电力排放。

- 选定流：二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 流属性/单位：Mass / kg
- 数量规则：直接测量，或根据场址燃料量、组成和氧化基准计算碳平衡
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 干燥氧化铝输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_calc_fossil_carbon_dioxide`
- 来源：`australia-npi-alumina-refining-2007`

###### 焙烧与产品处理总颗粒物（`calc_total_particulate`）

记录焙烧与产品处理经控制后排入空气的总颗粒物。

- 选定流：排入空气的总颗粒物
- 流属性/单位：Mass / kg
- 数量规则：烟道实测；否则采用有文件依据的场址质量平衡或认可排放因子
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 干燥氧化铝输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_calc_total_particulate`
- 来源：`us-epa-ap42-primary-aluminum-12-1`、`australia-npi-alumina-refining-2007`

### 过程：赤泥管理（`red_mud_management`）

#### 输入

##### 产品流

###### 赤泥管理工艺用水（`residue_process_water`）

记录赤泥管理边界内使用的工艺补充水。

- 选定流：工艺用水 `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- 流属性/单位：Mass / kg
- 数量规则：补充水净计量，排除内部回收水
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 干燥氧化铝输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_residue_process_water`
- 来源：`australia-npi-alumina-refining-2007`

###### 赤泥管理用电（`residue_electricity`）

记录泵送、浓缩、过滤或其他已声明赤泥作业使用的交流电。

- 选定流：交流电 `4d0361a3-56cc-45f9-aa42-bb9103285bf9`
- 流属性/单位：Net calorific value / MJ
- 数量规则：分表电量，或按设备运行记录分配共用电表
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 干燥氧化铝输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_residue_electricity`
- 来源：`australia-npi-alumina-refining-2007`

##### 废物流

###### 接收管理的赤泥（`residue_red_mud_input`）

记录由澄清过程进入本过程的赤泥，并与对应输出保持相同水分和固体基准。

- 选定流：铝土矿消化产生的赤泥 `2d27a130-27dc-48d9-bc6a-c2428bb6907b`
- 流属性/单位：Mass / kg
- 数量规则：与上游赤泥输出核对的转运质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 干燥氧化铝输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_residue_red_mud_input`
- 来源：`australia-npi-alumina-refining-2007`

##### 基本流

#### 输出

##### 产品流

##### 废物流

###### 转往储存、处理或处置的赤泥（`residue_red_mud_output`）

记录离开前景管理过程、转往已声明储存、处理、利用或处置路线的赤泥。

- 选定流：铝土矿消化产生的赤泥 `2d27a130-27dc-48d9-bc6a-c2428bb6907b`
- 流属性/单位：Mass / kg
- 数量规则：实测转运质量，并核对干固体分数、水分、去向与库存变化
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 干燥氧化铝输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_residue_red_mud_output`
- 来源：`australia-npi-alumina-refining-2007`

##### 基本流

### 过程：现场蒸汽生产（`onsite_steam_generation`）

#### 输入

##### 产品流

###### 现场蒸汽生产用天然气（`utility_natural_gas`）

本条件过程适用时，记录设施运行锅炉燃烧的气态天然气。

- 选定流：气态天然气 `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位：Volume / m3
- 数量规则：按已记录参考条件计量的锅炉天然气体积
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 干燥氧化铝输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_utility_natural_gas`
- 来源：`australia-npi-alumina-refining-2007`

###### 锅炉给水（`utility_process_water`）

现场蒸汽生产适用时，记录作为锅炉给水供应的工艺用水净量。

- 选定流：工艺用水 `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- 流属性/单位：Mass / kg
- 数量规则：给水实测量扣除单独计量的凝结水回流
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 干燥氧化铝输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_utility_process_water`
- 来源：`australia-npi-alumina-refining-2007`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 供应精炼过程的工业蒸汽（`utility_industrial_steam`）

记录设施运行锅炉交付精炼用户的工业蒸汽。

- 选定流：工业蒸汽 `ea4e839d-d854-4a7a-a362-b4ccb8dc61ff`
- 流属性/单位：Mass / kg
- 数量规则：交付蒸汽实测质量，并保留压力和温度
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 干燥氧化铝输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_utility_industrial_steam`
- 来源：`australia-npi-alumina-refining-2007`

##### 废物流

##### 基本流

###### 现场蒸汽生产的化石源二氧化碳（`utility_fossil_carbon_dioxide`）

本条件过程适用时，记录锅炉天然气燃烧产生的直接化石源二氧化碳。

- 选定流：二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 流属性/单位：Mass / kg
- 数量规则：直接测量，或根据场址燃料量、组成和氧化基准计算碳平衡
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 干燥氧化铝输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_utility_fossil_carbon_dioxide`
- 来源：`australia-npi-alumina-refining-2007`

## 7. 分配与共产品处理

应通过对五个过程组分表计量，并核对内部赤泥、蒸汽、母液、水和晶种转移来避免分配。内部循环不是新的产品投入或输出。离开边界的可销售副产品、回收材料或共用服务应明确报告，不得隐入氧化铝平衡。

| allocation_id | 情形 | 必需规则 | 披露 |
| --- | --- | --- | --- |
| `alloc_direct` | 可归属于单一过程或产品的投入与排放 | 按仪表、批次或工程记录直接归属 | 测量来源和核对结果 |
| `alloc_shared_energy` | 共用电力、蒸汽、燃料或水表 | 按设备运行、实测能量、蒸汽焓或质量等因果数据分配；经济分配不是默认方法 | 驱动因素、期间、数量和敏感性 |
| `alloc_exported_coproduct` | 材料作为可销售共产品离开 | 研究目标允许时优先细分或系统扩展；否则先采用有文件依据的物理关系，再考虑经济分配 | 产品状态、数量、方法、所用价格和敏感性 |
| `alloc_residue` | 赤泥送往处理、储存、处置或综合利用 | 将赤泥产生保留在氧化铝系统内，并按研究边界一致建模下游路线；无明确后果型规则时不得计避免负荷 | 去向、水分、固体、库存变化及任何抵扣 |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_rmh_bauxite` | `raw_material_handling` | `rmh_bauxite` | 地磅和水分记录 | 总量；退料；水分；干固体 | 核对收货与皮带秤 | kg | 每次交货及每月 | 报告期 | 精炼厂 | 净质量归一化 | 校准秤；水分化验 |
| `cp_rmh_electricity` | `raw_material_handling` | `rmh_electricity` | 电表 | kWh；表号；时间 | 分表或分配共用表 | MJ | 每小时或每月 | 报告期 | 过程组 | 汇总、按 3.6 换算并归一化 | 校准与覆盖率 |
| `cp_rmh_total_particulate` | `raw_material_handling` | `rmh_total_particulate` | 排放记录 | 浓度；气量；时间；控制状态 | 实测或文件化计算 | kg | 测试期及每月运行 | 报告期代表工况 | 排放点 | 汇总控制后排放 | 测试报告；控制设施运行率 |
| `cp_dcp_process_water` | `digestion_clarification_precipitation` | `dcp_process_water` | 水表 | 体积或质量；密度；循环量 | 补水净计量 | kg | 每日或每月 | 报告期 | 过程组 | 扣循环后归一化 | 校准与水衡算 |
| `cp_dcp_sodium_hydroxide` | `digestion_clarification_precipitation` | `dcp_sodium_hydroxide` | 罐存和化验 | 溶液质量；浓度；库存 | 物料衡算 | kg | 交货及每月 | 报告期 | 过程组 | 折纯 NaOH | 罐校准与化验 |
| `cp_dcp_calcium_oxide` | `digestion_clarification_precipitation` | `dcp_calcium_oxide` | 收货和化验 | 交付质量；CaO 分数；库存 | 物料衡算 | kg | 交货及每月 | 报告期 | 过程组 | 折纯 CaO | 秤和证书或化验 |
| `cp_dcp_electricity` | `digestion_clarification_precipitation` | `dcp_electricity` | 电表 | kWh；表号；时间 | 分表或因果分配 | MJ | 每小时或每月 | 报告期 | 过程组 | 汇总、换算、归一化 | 校准和分配记录 |
| `cp_dcp_industrial_steam` | `digestion_clarification_precipitation` | `dcp_industrial_steam` | 蒸汽表 | 质量；压力；温度；凝结水 | 交付净蒸汽计量 | kg | 每小时或每月 | 报告期 | 过程组 | 汇总净交付并归一化 | 校准和蒸汽衡算 |
| `cp_dcp_red_mud` | `digestion_clarification_precipitation` | `dcp_red_mud` | 赤泥计量和化验 | 浆体；固体；水分；母液 | 转运计量和固体衡算 | kg | 每日或每月 | 报告期 | 过程组 | 一致报告所声明湿基或干基 | 计量和固体化验 |
| `cp_calc_natural_gas` | `calcination_product_handling` | `calc_natural_gas` | 气表 | 体积；温度；压力；组成 | 专用表 | m3 | 每小时或每月 | 报告期 | 焙烧 | 按声明条件汇总并归一化 | 校准和气质 |
| `cp_calc_electricity` | `calcination_product_handling` | `calc_electricity` | 电表 | kWh；表号；时间 | 分表或因果分配 | MJ | 每小时或每月 | 报告期 | 过程组 | 汇总、换算、归一化 | 校准和分配记录 |
| `cp_calc_alumina` | `calcination_product_handling` | `calc_alumina` | 产品秤和质量记录 | 质量；水分；品级；不合格料；退料 | 发运与生产核对 | kg | 每批及每月 | 报告期 | 厂门 | 合格产品净干质量 | 校准秤和化验 |
| `cp_calc_fossil_carbon_dioxide` | `calcination_product_handling` | `calc_fossil_carbon_dioxide` | 排放或燃料记录 | CO2；燃料；碳；氧化率 | 直测或碳平衡 | kg | 连续或每月 | 报告期 | 焙烧排放源 | 汇总直接化石 CO2 | 监测 QA 或燃料证书 |
| `cp_calc_total_particulate` | `calcination_product_handling` | `calc_total_particulate` | 排放记录 | 浓度；气量；时间；控制状态 | 实测或文件化计算 | kg | 测试期及每月运行 | 报告期代表工况 | 排放点 | 汇总控制后排放 | 测试报告；控制设施运行率 |
| `cp_residue_process_water` | `red_mud_management` | `residue_process_water` | 水表 | 体积或质量；密度；回收水 | 补水净计量 | kg | 每日或每月 | 报告期 | 赤泥区 | 扣回收水并归一化 | 校准和水衡算 |
| `cp_residue_electricity` | `red_mud_management` | `residue_electricity` | 电表 | kWh；设备时间 | 分表或因果分配 | MJ | 每小时或每月 | 报告期 | 赤泥区 | 汇总、换算、归一化 | 校准和运行记录 |
| `cp_residue_red_mud_input` | `red_mud_management` | `residue_red_mud_input` | 转运记录 | 质量；固体；水分 | 与上游输出核对 | kg | 每日或每月 | 报告期 | 过程转移 | 同基准汇总 | 质量和固体核对 |
| `cp_residue_red_mud_output` | `red_mud_management` | `residue_red_mud_output` | 转运和库存 | 质量；固体；水分；去向；库存 | 去向与库存衡算 | kg | 每次转运及每月 | 报告期 | 赤泥区 | 输出与库存变化核对投入 | 测量、秤、化验、去向记录 |
| `cp_utility_natural_gas` | `onsite_steam_generation` | `utility_natural_gas` | 气表 | 体积；条件；组成 | 锅炉气表 | m3 | 每小时或每月 | 报告期 | 现场锅炉 | 按声明条件汇总并归一化 | 校准和气质 |
| `cp_utility_process_water` | `onsite_steam_generation` | `utility_process_water` | 水表 | 给水；凝结水 | 净给水计量 | kg | 每小时或每月 | 报告期 | 现场锅炉 | 给水减凝结水 | 校准和汽水衡算 |
| `cp_utility_industrial_steam` | `onsite_steam_generation` | `utility_industrial_steam` | 蒸汽表 | 质量；压力；温度 | 交付蒸汽计量 | kg | 每小时或每月 | 报告期 | 现场锅炉 | 汇总交付并归一化 | 校准和蒸汽衡算 |
| `cp_utility_fossil_carbon_dioxide` | `onsite_steam_generation` | `utility_fossil_carbon_dioxide` | 排放或燃料记录 | CO2；燃料；碳；氧化率 | 直测或碳平衡 | kg | 连续或每月 | 报告期 | 锅炉排放源 | 汇总直接化石 CO2 | 监测 QA 或燃料证书 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_normalize` | 全部清单行 | 归一化量 = 报告期数量 / 干燥可销售氧化铝量 × 1,000 | 行数量；`calc_alumina` | 每 1,000 kg 干燥氧化铝的数量 |  |
| `calc_dry_mass` | 湿固体 | 干质量 = 湿质量 × 实测干固体分数 | 湿质量；干固体分数 | kg 干物料 |  |
| `calc_solution_equivalent` | 氢氧化钠 | 折纯 NaOH = 溶液质量 × 实测 NaOH 质量分数 | 溶液质量；化验 | kg NaOH |  |
| `calc_electricity_mj` | 交流电 | MJ = 实测 kWh × 3.6 | 实测 kWh | MJ |  |
| `calc_gas_reference` | 天然气 | 仅按已记录仪表温度、压力、压缩因子和参考条件换算 | 实测气量；条件 | 声明基准下的 m3 |  |
| `calc_fossil_co2` | 直接燃料燃烧 | 无质量保证直接测量时，化石 CO2 = 燃料量 × 碳含量 × 氧化率 × 44/12 | 燃料；碳；氧化率 | kg 化石源 CO2 | `australia-npi-alumina-refining-2007` |
| `calc_residue_reconciliation` | 赤泥 | 在同一固体和水分基准下，投入 = 各去向输出 + 期末库存 − 期初库存 + 实测损失 | 转运；库存；固体 | 核对后的赤泥质量 |  |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_temporal` | 全部行 | 采用共同报告期，披露停产、异常生产和替代。 | 时间戳；生产日历 |
| `dq_geography` | 外购投入 | 匹配供应地域和交付边界，否则披露代理数据。 | 供应商和数据集元数据 |
| `dq_technology` | 精炼厂 | 声明拜耳法技术、溶出和焙烧配置、赤泥路线和控制设备。 | 过程说明和设备清单 |
| `dq_mass_balance` | 氧化铝、铝土矿、碱和赤泥 | 核对干固体和关键物料库存，调查未解释差异。 | 签署的质量平衡和化验结果 |
| `dq_energy_balance` | 电力、天然气和蒸汽 | 将分表汇总与全厂表核对，避免现场蒸汽燃料与外购蒸汽重复计算。 | 仪表层级和核对记录 |
| `dq_uncertainty` | 全部重要行 | 记录仪表精度、采样不确定性、估算方法、缺失数据处理和覆盖率。 | 不确定性登记和 QA 记录 |
| `dq_uuid` | 带 UUID 的流 | 保留经审计的天工流身份、流类型、属性、单位组和 state-100 状态；不得替换为代理 UUID。 | UUID 审计记录 |

## 9. 校验规则

| validation_id | severity | rule |
| --- | --- | --- |
| `v_reference` | error | 归一化后 `calc_alumina` 应为 1,000 kg 合格干燥非熔融氧化铝，并使用经审计的参考产品 UUID。 |
| `v_inventory_identity` | error | 每行仅含一个原子交换；UUID 为空的行保持明确未解决，不得使用代理 UUID。 |
| `v_row_completeness` | error | 每个纳入过程行应有数值、单位、方法、报告期覆盖和证据；条件过程仅在有证据时可标为不适用。 |
| `v_mass_basis` | error | 铝土矿、化学品、氧化铝、颗粒物和赤泥应披露一致湿基、干基或浓度基准及换算记录。 |
| `v_residue_balance` | error | 赤泥产生、转运、库存和去向应在同一固体与水分基准下核对。 |
| `v_energy_double_count` | error | 纳入现场蒸汽时，其天然气和直接 CO2 不得同时隐含在外购蒸汽前景记录中。 |
| `v_boundary` | error | 人造刚玉熔融、铝冶炼和铝土矿开采不得作为本 PCR 覆盖的前景过程。 |
| `v_sources` | error | 最终证据应引用已核验原文；仅有检索元数据或摘要不足。 |
| `v_ranges` | warning | 在两个兼容且相互独立的原文来源支持之前不声明外部数值 QA 范围；前景采集仍为强制要求。 |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 干燥非熔融拜耳法氧化铝的门到门前景数据包 |
| downstream_use | 构建天工过程和生命周期模型数据集及产品足迹研究 |
| allowed_use | 产品状态、技术、地域、期间、分配和系统边界与已声明数据集兼容的研究 |
| excluded_use | 人造刚玉、熔融氧化铝、氢氧化铝、铝土矿开采、铝冶炼或无条件全球平均声明 |
| required_metadata | 工厂地域；报告期；技术；铝土矿状态；氧化铝品级和水分；赤泥路线；能源来源；分配；截断；UUID 审计来源 |
| required_quality_disclosure | 一手数据覆盖率；仪表与实验室 QA；缺失数据处理；不确定性；质量与能源核对；上游代理数据集 |
| update_trigger | 过程、燃料、电力、矿石、产品品级、赤泥路线、控制、分配或边界发生重大变化，或时间代表性失效 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3-0-structure-2025` | `official_guidance` | 联合国统计司，《CPC Version 3.0 Structure》，2025-06-30，https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv | CPC 41432 精确产品身份及排除人造刚玉 |
| `australia-npi-alumina-refining-2007` | `official_guidance` | 澳大利亚政府，《Emission Estimation Technique Manual for Alumina Refining》，Version 2.0，2007-11，https://www.dcceew.gov.au/sites/default/files/documents/falref.pdf | 拜耳法精炼过程边界、物料与能源投入、过程阶段、直接排放和赤泥管理 |
| `us-epa-ap42-primary-aluminum-12-1` | `official_guidance` | 美国 EPA，《AP-42 Section 12.1, Primary Aluminum Production》，https://www.epa.gov/sites/production/files/2020-11/documents/c12s01.pdf | 拜耳法顺序、与铝冶炼的区分、原料添加、赤泥、焙烧和颗粒物排放点 |
