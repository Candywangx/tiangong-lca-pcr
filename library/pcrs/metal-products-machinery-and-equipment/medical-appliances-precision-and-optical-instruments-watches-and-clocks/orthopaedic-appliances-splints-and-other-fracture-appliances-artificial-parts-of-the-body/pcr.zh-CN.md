---
pcr_id: pcr.metal-products-machinery-and-equipment.medical-appliances-precision-and-optical-instruments-watches-and-clocks.orthopaedic-appliances-splints-and-other-fracture-appliances-artificial-parts-of-the-body
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 矫形器具；夹板及其他骨折用具；人造的人体部分

## 1. 范围与适用性

本 PCR 适用于成品矫形器具、夹板及其他骨折用具和人造人体部分的从门到门制造。涵盖外用矫形器与骨折支具、假肢及其部件、人工关节以及其他植入式或非植入式人造人体部分，包括标准规格和患者匹配器械。前景边界始于合格外购材料、部件和包装进入制造场址，终于经质量放行并完成包装的产品抵达工厂门口。

助听器及另行分类的缺陷或残疾补偿器具、生物组织或细胞、药品、通用原材料生产、临床适配与手术、使用、维护和生命末期均不在范围内。数据包必须明确具体器械系列，仅纳入实际适用的工艺模块和原子交换。按质量归一化并不表示功能不同的器械具有临床等效性。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.medical-appliances-precision-and-optical-instruments-watches-and-clocks.orthopaedic-appliances-splints-and-other-fracture-appliances-artificial-parts-of-the-body |
| classification_refs | CPC 3.0：48171 — 矫形器具；夹板及其他骨折用具；人造的人体部分 |
| covered_products | 外用矫形器与夹板；骨折固定器具；假肢及其部件；人工关节；植入式和非植入式人造人体部分；标准规格和患者匹配器械 |
| excluded_products | 助听器及另行分类的补偿器具；生物组织和细胞；药品；作为原料出售的材料；临床适配与手术；使用、维护和生命末期服务 |
| representative_product | 属于已声明器械系列并经质量放行的一件成品矫形器具、骨折用具或人造人体部分 |
| production_route | 按适用情况包括常规成形或机加工、增材制造、聚合物模塑或铺层、清洗、装配、可选热处理、可选经验证灭菌、最终检验和包装 |
| market_state | 成品、经质量放行且已包装；声明无菌或非无菌状态；声明标准规格或患者匹配状态 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 为某一指定器械系列提供已声明的矫形支撑、骨折稳定、解剖替代或假体功能 |
| How much | 经质量放行的成品净质量 1 kg，不含运输包装，但包含留在器械中的部件 |
| How well | 满足预期用途所声明的设计、材料、尺寸、力学、生物相容性、清洁度以及适用时经验证无菌状态规范 |
| How long or cycle | 声明设计寿命、植入期、重复使用次数或一次性使用状态；持续时间是必需限定信息，不得默认为已归一化 |
| reference_flow_link | `finished_appliance` |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 kg |
| 参考产品流 | 矫形器具，夹板和其他骨折器械，人造身体部位 `5ce1d551-f011-4400-8717-bdde251252f7` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 器械系列和预期功能；型号或患者匹配标识；植入式或外用状态；标准规格或患者匹配状态；完整材料组成和产品净质量；制造技术及纳入的工艺模块；无菌状态和灭菌方法；重复使用或一次性使用状态；设计寿命或使用次数；包装配置；场址、地理区域和参考年份 |

所有必需限定信息都必须在数据集元数据、过程说明、参考流备注、产品说明或等效数据包字段中声明。缺少限定信息时，参考流不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | 参考产品和归一化 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 报告质量放行后、运输包装前的成品净质量；将前景交换归一化为恰好 1 kg 合格产品。 |
| `electricity_energy` | 外购电力 | Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | 按过程保留计量电力；按 1 kWh = 3.6 MJ 换算，并披露电压、电网地理区域和损耗边界。 |
| `gas_volume` | 气态天然气和工业氧气 | Volume `93a60a56-a3c8-22da-a746-0800200c9a66` | m3 | 记录供应商或仪表体积并披露压力、温度或计费基准条件；不得混用标准体积和实际体积。 |
| `chemical_mass` | 氢氧化钠和环氧乙烷 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 报告纯物质质量；溶液按交付溶液质量乘以实测或认证质量分数，并保留原始字段。 |
| `waste_mass` | 固体废料和清洗废水 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 废水报告湿质量，各种化学组成不同的废料报告出场质量；如含水或夹带液体有实质影响则予以披露。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 合格外购材料、部件、化学品、能源载体和包装已越过场址边界，并具备供应商身份和进场数量记录 |
| starting_condition_role | foreground_gate_input |
| product_classification_scope | 经审查语义边界内的成品矫形器具、骨折用具和人造人体部分；分类不能替代具体器械系列声明 |
| recursive_input_rule | 符合同一产品类别边界的外购件只作为产品投入记录一次并关联上游数据集，不在接收过程中递归拆解 |
| upstream_dataset_requirement | 为每项外购材料、部件、化学品、能源投入和外包边界内过程关联上游数据集；适用时披露供应商、地理、技术和再生含量 |
| disclosure | 声明场址与年份、器械系列和型号、纳入模块、材料与包装组成、净质量、不合格品和废料处置、无菌状态与灭菌地点、分配、截断和外包操作 |

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_gate_to_gate` | 前景制造系统 | 纳入制造责任范围内的转化、后处理、清洗、装配、检验和包装；排除原材料生产、临床使用和生命末期，同时关联所需上游数据集。 | `fda-am-medical-devices-2017`; `fda-qmsr-2026` |
| `boundary_route_condition` | 条件工艺模块 | 仅在声明产品实际采用时纳入增材制造、热处理和灭菌；识别每个步骤、参数集和输出规范。 | `fda-am-medical-devices-2017` |
| `boundary_sterile_state` | 无菌和非无菌产品 | 以无菌状态供应时，纳入受控包装和经验证灭菌，无论其在场内实施或由上游外包过程数据集表示；否则声明非无菌状态和包装清洁控制。 | `eu-mdr-2017-745` |
| `boundary_no_silent_cutoff` | 材料、废物和排放完整性 | 当小质量交换可能影响生物相容性、清洁度、无菌状态保证、有害排放或受管制废物分类时，不得将其省略。 | `eu-mdr-2017-745`; `fda-am-medical-devices-2017` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `material_transformation` | 材料准备与转化 | `conditional` | 在前景边界内进行切割、机加工、模塑、铺层或增材制造时纳入。 | 将合格原料转化为器械部件。 | 进入清洗装配的合格部件质量 |
| `cleaning_assembly` | 后处理、清洗与装配 | `required` | 始终纳入；仅在有记录证明未使用化学品时记录零用量。 | 去除残留物、处理表面并装配器械。 | 合格装配体质量 |
| `thermal_processing` | 热处理 | `conditional` | 前景边界内受控使用炉、烘箱、退火、固化或热等静压时纳入。 | 获得规定材料性能。 | 合格处理部件质量 |
| `sterilization` | 灭菌 | `conditional` | 产品以无菌状态供应且环氧乙烷灭菌在前景边界内时纳入；其他技术需列出各自原子交换。 | 建立经验证的无菌状态。 | 放行灭菌装载产品质量 |
| `packaging_release` | 最终检验、包装与质量放行 | `required` | 始终纳入。 | 检验、包装并放行合格产品。 | 1 kg 合格成品净质量 |

### 过程：材料准备与转化（`material_transformation`）

#### 输入

##### 产品流

###### 钛板原料（`titanium_plate`）

仅在器械制造中转化钛板时记录，并保留合金和医用等级。

- 选定流：钛板 `f32fc628-252f-40fe-8f8d-fd0efb955e92`
- 流属性/单位：Mass / kg
- 数量规则：投入生产的合格钛板实测质量，扣除退回的未开封库存
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格成品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_receipts`
- 来源：

###### 不锈钢原料（`stainless_steel`）

仅在不锈钢进入器械物料清单时记录，并保留牌号和形态。

- 选定流：不锈钢 `84c2403f-5062-5d68-8276-838384d32b89`
- 流属性/单位：Mass / kg
- 数量规则：投入生产的合格不锈钢实测质量，扣除退回库存
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格成品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_receipts`
- 来源：

###### UHMWPE 模塑或机加工坯料（`uhmwpe_molding_stock`）

仅在医用超高分子量聚乙烯保留于器械部件时记录；UUID 未解决。

- 选定流：超高分子量聚乙烯模塑坯料
- 流属性/单位：Mass / kg
- 数量规则：投入生产的合格 UHMWPE 坯料实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格成品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_receipts`
- 来源：

###### 医用级硅橡胶（`medical_grade_silicone_rubber`）

仅在硅橡胶成为留在器械中的衬垫、界面或假体部件时记录；UUID 未解决。

- 选定流：医用级硅橡胶
- 流属性/单位：Mass / kg
- 数量规则：投入生产的合格硅橡胶实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格成品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_receipts`
- 来源：

###### 材料转化用电力（`material_transformation_electricity`）

记录切割、机加工、模塑、增材制造及局部抽排所耗电力。

- 选定流：电力 `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- 流属性/单位：Net calorific value / MJ
- 数量规则：分表计量电力，或经核实设备功率乘以分配运行时间
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 合格成品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_meters`
- 来源：

###### 切割用工业氧气（`industrial_oxygen`）

仅在采用氧气辅助切割且外供氧气跨越场址边界时记录。

- 选定流：工业氧气 `bd4b0f96-2090-4806-a648-335ab20ff401`
- 流属性/单位：Volume / m3
- 数量规则：按合格产量分配的供应商或过程仪表体积
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 合格成品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_receipts`
- 来源：

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

###### 钛机加工废料（`titanium_machining_scrap`）

记录分类收集的钛屑和边角料；UUID 未解决。

- 选定流：钛机加工废料
- 流属性/单位：Mass / kg
- 数量规则：出场称重质量，并对有实质影响的冷却液夹带量进行修正
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格成品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_records`
- 来源：

###### 不锈钢机加工废料（`stainless_steel_machining_scrap`）

记录分类收集的不锈钢屑和边角料；UUID 未解决。

- 选定流：不锈钢机加工废料
- 流属性/单位：Mass / kg
- 数量规则：出场称重质量，并对有实质影响的冷却液夹带量进行修正
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格成品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_records`
- 来源：

###### UHMWPE 废料（`uhmwpe_scrap`）

记录分类收集的 UHMWPE 浇口、切屑和边角料；UUID 未解决。

- 选定流：超高分子量聚乙烯废料
- 流属性/单位：Mass / kg
- 数量规则：UHMWPE 废料出场称重质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格成品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_records`
- 来源：

###### 硅橡胶废料（`silicone_rubber_scrap`）

记录分类收集的已固化或未固化硅橡胶边料；UUID 未解决。

- 选定流：硅橡胶废料
- 流属性/单位：Mass / kg
- 数量规则：硅橡胶废料出场称重质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格成品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_records`
- 来源：

##### 基本流

### 过程：后处理、清洗与装配（`cleaning_assembly`）

#### 输入

##### 产品流

###### 清洗用工艺用水（`process_water`）

记录用于冲洗或清洗合格零件和装配体的工艺用水。

- 选定流：工艺用水 `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- 流属性/单位：Mass / kg
- 数量规则：实测用水质量；由体积换算时须使用有记录的实测密度
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格成品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cleaning_records`
- 来源：

###### 氢氧化钠清洗剂（`sodium_hydroxide`）

仅在声明清洗路线使用时记录纯氢氧化钠质量。

- 选定流：氢氧化钠 `e0abcced-0611-4c24-9290-5a2c5a0c4169`
- 流属性/单位：Mass / kg
- 数量规则：净溶液质量乘以记录的 NaOH 质量分数
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 合格成品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_cleaning_records`
- 来源：

###### 清洗与装配用电力（`cleaning_assembly_electricity`）

记录表面处理、清洗、干燥和装配设备所耗电力。

- 选定流：电力 `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- 流属性/单位：Net calorific value / MJ
- 数量规则：分表计量电力，或经核实设备功率乘以分配运行时间
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 合格成品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_meters`
- 来源：

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

###### 清洗废水（`cleaning_wastewater`）

记录进入处理环节的水性清洗废物，并保留组成、危险性和去向。

- 选定流：清洗废水 `f0402393-e82c-47e8-9cd8-a486c97f3e89`
- 流属性/单位：Mass / kg
- 数量规则：实测湿质量，或有记录的水和化学品质量平衡
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格成品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_records`
- 来源：

##### 基本流

### 过程：热处理（`thermal_processing`）

#### 输入

##### 产品流

###### 气态天然气（`natural_gas`）

仅在前景炉、烘箱或热氧化装置直接燃烧时记录。

- 选定流：气态天然气 `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位：Volume / m3
- 数量规则：按声明条件计量或开票，并分配至合格产量的体积
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 合格成品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_meters`
- 来源：

###### 热处理用电力（`thermal_processing_electricity`）

记录热处理设备和专用控制系统所耗电力。

- 选定流：电力 `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- 流属性/单位：Net calorific value / MJ
- 数量规则：分表计量电力，或经核实设备功率乘以分配运行时间
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 合格成品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_meters`
- 来源：

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

##### 基本流

###### 直接化石二氧化碳（`fossil_carbon_dioxide`）

仅记录前景天然气燃烧的直接化石 CO2，不重复计入上游电力排放。

- 选定流：二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 流属性/单位：Mass / kg
- 数量规则：烟气实测排放，或天然气用量乘以有记录的适用化石碳因子
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格成品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_combustion_emissions`
- 来源：

### 过程：灭菌（`sterilization`）

#### 输入

##### 产品流

###### 环氧乙烷灭菌剂（`ethylene_oxide`）

仅在采用经验证的环氧乙烷灭菌时记录，并保留浓度和装载信息。

- 选定流：环氧乙烷 `a460460e-055f-4b74-9c6f-c1a0b315f31a`
- 流属性/单位：Mass / kg
- 数量规则：按灭菌装载中放行产品分配的批次投加质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 放行灭菌装载产品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_sterilization_records`
- 来源：`eu-mdr-2017-745`

###### 灭菌用电力（`sterilization_electricity`）

记录灭菌舱、解析和专用减排设备所耗电力。

- 选定流：电力 `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- 流属性/单位：Net calorific value / MJ
- 数量规则：按放行装载质量分配的分表计量电力
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 放行灭菌装载产品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_meters`
- 来源：`eu-mdr-2017-745`

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

##### 基本流

###### 排放至空气的环氧乙烷（`ethylene_oxide_to_air`）

记录经处置后排放至未指定空气区室的残余环氧乙烷。

- 选定流：环氧乙烷 `fe0acd60-3ddc-11dd-a488-0050c2490048`
- 流属性/单位：Mass / kg
- 数量规则：监测排放，或减排后的经验证批次质量平衡
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 放行灭菌装载产品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_sterilization_records`
- 来源：`eu-mdr-2017-745`

### 过程：最终检验、包装与质量放行（`packaging_release`）

#### 输入

##### 产品流

###### 低密度聚乙烯薄膜（`ldpe_film`）

记录留在声明单元包装或无菌屏障包装中的 PE-LD 薄膜。

- 选定流：低密度聚乙烯薄膜（PE-LD） `2cecd3a7-d90e-44b4-aec5-1d9dfb907477`
- 流属性/单位：Mass / kg
- 数量规则：以计数或收发存核对验证的包装 BOM 质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格成品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_records`
- 来源：`eu-mdr-2017-745`

###### 瓦楞纸箱（`corrugated_box`）

记录声明销售或运输包装配置中的瓦楞纸箱。

- 选定流：瓦楞纸箱 `4f197bec-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位：Mass / kg
- 数量规则：以纸箱数量和实测单件质量验证的包装 BOM 质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格成品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_records`
- 来源：`eu-mdr-2017-745`

###### 包装与放行用电力（`packaging_release_electricity`）

记录检验、包装、标签和专用受控环境所耗电力。

- 选定流：电力 `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- 流属性/单位：Net calorific value / MJ
- 数量规则：分表计量电力，或经核实设备功率乘以分配运行时间
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 合格成品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_meters`
- 来源：

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 经质量放行的成品器具（`finished_appliance`）

本行为定量参考；包装质量另行报告。

- 选定流：矫形器具，夹板和其他骨折器械，人造身体部位 `5ce1d551-f011-4400-8717-bdde251252f7`
- 流属性/单位：Mass / kg
- 数量规则：归一化后恰好 1 kg 经质量放行的成品净质量
- 数值来源模式：固定值（`fixed_value`）
- 适用范围：通用（`generic`）
- 归一化基准：1 kg 合格成品净质量的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_records`
- 来源：

##### 废物流

##### 基本流

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivide` | 共用设备和生产线 | 优先细分过程并使用批次记录和分表计量，使负荷归属于造成该负荷的器械系列。 |  |
| `allocation_batch_driver` | 共用批次过程 | 优先按舱室占用容量或经验证机器时间等因果驱动量分配；仅在没有更优实测驱动量时使用放行质量。 |  |
| `allocation_recycling` | 分类废料 | 报告各废料流及去向；除非一致声明的背景回收模型提供抵扣，否则不得在前景过程中计入避免原生材料的抵扣。 |  |
| `allocation_disclosure` | 剩余分配 | 披露过程、产品、驱动量、分子、分母、分配因子和敏感性；共担同一负荷的因子之和必须为一。 |  |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_material_receipts` | `material_transformation` | 材料和气体投入 | 收货、领用和库存记录 | 身份；牌号；形态；供应商；批次；库存；收货；领用；退回；质量或体积；基准条件 | 将合格仓储和生产领用记录与声明批次核对。 | kg 或 m3 | 每次收货和领用 | 连续 12 个月或完整较短生产期 | 范围内全部生产场址 | 汇总净领用量并按批次或因果驱动量分配 | 证书；批次追溯；校准秤或仪表；库存核对 |
| `cp_energy_meters` | 所有纳入过程 | 电力和天然气 | 仪表、账单和运行日志 | 仪表编号；读数；单位；条件；设备；运行时间；批次；合格产量 | 优先使用分表；否则以经核实功率乘以记录时间并与账单核对。 | MJ、kWh 或 m3 | 每批或每月 | 连续 12 个月或完整较短生产期 | 范围内全部地点 | 读数作差、换算、按因果分配并归一化 | 校准；账单；运行日志；分配表 |
| `cp_cleaning_records` | `cleaning_assembly` | 水和 NaOH | 仪表、配方和领用记录 | 水量；密度；溶液质量；NaOH 分数；退回；批次；产量 | 计量用水并将化学品领用与受控配方核对。 | kg、m3 和质量分数 | 每个清洗批次 | 同一生产期 | 全部清洗线 | 计算纯 NaOH、汇总合格批次并归一化 | 校准；浓度证书；配方；批次记录 |
| `cp_waste_records` | `material_transformation`; `cleaning_assembly` | 废料和废水 | 称重单、转移联单和排水仪表 | 身份；组成；湿质量；夹带；去向；处理；批次；废水量 | 称量分类出场废料、计量废水并核对库存。 | kg 或 m3 | 每次出场或排放期 | 同一生产期 | 全部产生点 | 期初库存加产生量减期末库存和退回 | 校准；联单；处理收据；组成记录 |
| `cp_combustion_emissions` | `thermal_processing` | 化石 CO2 | 烟气监测或燃料碳记录 | 燃料；条件；碳因子；氧化率；实测 CO2；期间 | 优先校准监测；否则以计量燃料和有记录的适用因子计算。 | kg CO2 | 监测期或燃料批次 | 同一热处理期 | 全部燃烧装置 | 汇总并按炉次负荷因果分配 | 校准；燃料证书；因子记录；平衡核查 |
| `cp_sterilization_records` | `sterilization` | 环氧乙烷及其排放 | 灭菌舱、投加、解析和减排记录 | 投加量；浓度；放行装载；舱号；循环；销毁量；排放；状态 | 将投加量与放行装载及实测或验证排放核对。 | kg | 每循环 | 期间内全部循环 | 各灭菌舱及控制装置 | 仅计放行装载并按经验证驱动量分配 | 验证循环；校准；放行；监测或质量平衡 |
| `cp_packaging_records` | `packaging_release` | 包装和成品 | BOM、计数、单件质量和放行记录 | 材料；单件质量；数量；型号；产品净质量；不合格量；无菌状态；状态 | 以数量和单件质量验证 BOM，产品单独称重。 | kg 和件数 | 每批 | 连续 12 个月或完整较短生产期 | 全部包装场址 | 汇总放行产品及相应包装并归一化至 1 kg | BOM；校准；计数核对；放行记录 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | 每个清单行 | 归一化量 = 分配给合格产品的量 / 合格产品净质量（kg） | 分配量；合格质量 | 每 1 kg 产品的量 |  |
| `calc_electricity_mj` | 电力 | MJ = 计量 kWh × 3.6 | kWh | MJ |  |
| `calc_naoh_pure_mass` | `sodium_hydroxide` | 纯 NaOH = 净溶液质量 × NaOH 质量分数 | 溶液质量；质量分数；退回量 | kg NaOH |  |
| `calc_waste_stock_balance` | 固体废料 | 产生废物 = 出场量 + 期末库存 − 期初库存 − 外来废物，并按退回量调整 | 出场、库存和退回 | kg 产生废料 |  |
| `calc_combustion_co2` | `fossil_carbon_dioxide` | 使用校准实测值；否则用计量天然气乘以有记录的适用化石碳因子和氧化处理 | 天然气；因子；氧化处理 | kg 直接化石 CO2 |  |
| `calc_allocation_check` | 共用过程 | 共担同一负荷的分配因子之和 = 1 | 因子和总量 | 核对结果 |  |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_product_identity` | 参考产品 | 保留系列、型号、功能、无菌状态、组成、净质量和放行状态。 | 规范、BOM 和放行记录 |
| `dq_process_traceability` | 所有过程 | 从合格投入到参数、不合格品、适用时灭菌和放行维持批次关联。 | 流转卡、批次记录、设备日志和 QMS 记录 |
| `dq_measurement` | 仪表和秤 | 使用校准设备；记录换算、基准条件、缺口和估算。 | 校准、仪表日志和计算表 |
| `dq_temporal` | 年度或生产期清单 | 使用连续 12 个月或完整较短生产期，并解释停机、验证批和异常不合格品。 | 日历、覆盖度和代表性审查 |
| `dq_mass_balance` | 材料、产品和废物 | 按材料系列将主要投入与合格产品、不合格品、废物和库存变化核对。 | 签署的平衡表和库存核对 |
| `dq_sterile_packaging` | 无菌产品 | 将灭菌和包装记录与放行无菌状态及配置关联。 | 验证循环、包装完整性和放行证据 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validate_identity` | 身份和参考流 | 缺少系列、功能、型号或患者匹配状态、净质量、无菌状态、寿命或次数、路线、场址或年份时失败。 | `un-cpc-3-0-2025`; `fda-am-medical-devices-2017` |
| `validate_reference_mass` | 参考产品 | 确认 `finished_appliance` 恰为 1 kg 合格产品净质量，且包装未计入净质量。 |  |
| `validate_route_inventory` | 过程图和清单 | 确认每个声明模块均有原子材料、能源、废物和直接排放交换；拒绝组合标签。 | `fda-am-medical-devices-2017` |
| `validate_mass_balance` | 转化和包装 | 核对主要投入、合格产品、不合格品、废物和库存并调查差额。 | `fda-qmsr-2026` |
| `validate_no_double_count` | 能源和排放 | 确认直接燃烧和灭菌排放未在上游重复计算。 |  |
| `validate_sterility` | 无菌产品 | 确认经验证灭菌、受控包装和放行证据覆盖声明产品和期间。 | `eu-mdr-2017-745`; `fda-qmsr-2026` |
| `validate_allocation` | 共用过程 | 确认驱动量和分配表已披露，且共担负荷的因子之和为一。 |  |
| `validate_unresolved` | UUID 和范围证据 | 明确保留未解决身份和无支持范围；不得替换为代理 UUID 或虚构范围。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 经审查后可作为 `secondary_dataset` 或 `background_dataset` 的前景制造数据集 |
| downstream_use | 产品碳足迹、同系列兼容 LCA、热点分析、`process` 数据集和 `lifecyclemodel` 投影 |
| allowed_use | 仅在身份、性能、寿命、组成、无菌状态、包装、模块、地理、年份和分配兼容时使用。 |
| excluded_use | 不得仅按质量比较功能不同的器械；未增加过程时不得表示临床适配、手术、患者结局、使用、维护或生命末期。 |
| required_metadata | PCR id 和版本；系列和型号；功能；标准或患者匹配状态；植入式或外用状态；净质量；组成；模块；无菌状态和灭菌；包装；场址；地理；年份；技术；分配；上游数据集；截断 |
| required_quality_disclosure | 来源占比；仪表覆盖；时间覆盖；供应商特异性；分配；质量平衡差额；不合格品处置；缺失数据；未解决 UUID；范围缺口；灭菌和包装验证 |
| update_trigger | 材料设计、技术、灭菌、包装、无菌状态、场址、供应商或分配变化，数据时效不满足目标，或身份与范围缺口解决时更新。 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3-0-2025` | 官方指南（`official_guidance`） | 联合国统计司，《CPC 3.0 结构》，2025 年 6 月 30 日。https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv | CPC 48171 身份和措辞 |
| `china-mof-tariff-concordance-2021-2022` | 官方指南（`official_guidance`） | 中华人民共和国财政部，《2021—2022 税则转版对应表》第一部分，第 114 页。https://m.mof.gov.cn/zcfb/202112/P020211231585098397303.pdf | 矫形器具、骨折用具和人造的人体部分的专业中文术语 |
| `fda-am-medical-devices-2017` | 官方指南（`official_guidance`） | 美国 FDA，《增材制造医疗器械技术考虑》，2017 年 12 月，案卷 FDA-2016-D-1210。https://www.fda.gov/media/97633/download | 工艺路线、材料控制、后处理、清洗、灭菌、包装、测试和质量数据 |
| `eu-mdr-2017-745` | 标准（`standard`） | 欧盟医疗器械法规 (EU) 2017/745，附件 I。https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32017R0745 | 污染、灭菌、包装和无菌状态规则 |
| `fda-qmsr-2026` | 官方指南（`official_guidance`） | 美国 FDA，《质量管理体系法规》，2026 年 2 月 2 日更新。https://www.fda.gov/medical-devices/postmarket-requirements-devices/quality-management-system-regulation-qmsr | 当前成品器械 QMS、记录和可追溯性背景 |
