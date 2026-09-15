---
pcr_id: pcr.metal-products-machinery-and-equipment.general-purpose-machinery.parts-for-the-goods-of-subclass-43230-parts-of-fans-and-ventilating-or-recycling-hoods-430a0d30
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 子类43230所列货物的零件；风扇及装有风扇的通风罩或循环罩的零件

## 1. 范围与适用性

本 PCR 适用于空气泵或真空泵、空气或其他气体压缩机、风扇，以及装有风扇的通风罩或循环罩所用的可销售零件。边界包括报告场址内从接收的半成品材料或聚合物粒料开始、针对具体产品实施的制造，以及有条件实施的水系表面处理、粉末涂装、最终检验和瓦楞纸箱包装。

本 PCR 不包括完整泵、压缩机、风扇或罩体；以其他产品身份单独销售的通用电动机、轴承、传动件、控制器、过滤器或紧固件；安装；设备的使用、维护或寿命终止；资本设备；员工通勤。前景数据包必须标明确切的可销售零件，且仅纳入实际使用的材料和表面处理路线。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.general-purpose-machinery.parts-for-the-goods-of-subclass-43230-parts-of-fans-and-ventilating-or-recycling-hoods-430a0d30 |
| classification_refs | CPC 3.0 43253（语义范围完全一致；映射接受由独立治理流程决定） |
| covered_products | 压缩机或空气泵/真空泵的可销售零件；风扇叶轮、定子、进出口气动元件、防护罩和支承结构件；装有风扇的通风罩或循环罩的零件 |
| excluded_products | 完整设备；液体泵零件；归入其他类别的独立通用部件；维修或安装服务；不可销售的内部中间件 |
| representative_product | 受图纸控制的可销售风扇叶轮或压缩机/风扇壳体部件 |
| production_route | 针对具体产品的金属成形或机械加工、铝件制造或聚合物成型；仅在实际实施时包括水系前处理、粉末涂装和包装 |
| market_state | 报告场址工厂门口已验收的可销售零件，具有所声明的涂装/未涂装及包装/未包装状态 |

CPC 身份依据 CPC 3.0 正式结构和解释性说明核验。欧盟法规 (EU) 2024/1834 仅用于澄清风扇重要元件和备件实例，不将 CPC 类别缩小为受该法规管辖的风扇。

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 提供符合图纸或技术规范、用于空气泵/真空泵、气体压缩机、风扇或装有风扇的通风罩/循环罩的可销售零件 |
| How much | 1 kg 已验收可销售零件的净质量 |
| How well | 符合所声明的材料牌号、尺寸与公差、适用时的平衡或装配要求、表面状态和验收试验 |
| How long or cycle | 一个生产与放行周期，终点为报告场址工厂门口；本质量型功能单位不含使用寿命 |
| reference_flow_link | 参考产品输出行 `reference_product_output` 等于 1 kg 参考流 |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 43230次级所列制品的零件，风扇及通风或含有一个风扇的循环罩零件 `dcfd2be0-e784-4045-9407-9e9d782120c3` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 零件确切名称及图纸/型号标识；适用设备类型；材料及牌号；制造路线；涂装/未涂装状态及涂层体系；包装/未包装状态；验收净质量；生产场址和地理范围；报告期；适用时的再生材料含量声明 |

构建前景数据包时，`必需限定信息` 中列出的信息应在数据集元数据、过程说明、参考流备注、产品说明或等效数据包字段中明确声明。缺失必需限定信息的数据包视为参考流定义不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_net_mass` | 参考产品 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 对已验收可销售产出的净质量称重，不包括可重复使用的运输工装。一次性包装应作为独立清单行，不计入 1 kg 参考数量。 |
| `input_mass_normalization` | 材料、化学品、废物和包装行 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 使用同一报告期和产品分配基准，将实测净消耗量或产生量归一化为每 1 kg 已验收可销售零件。 |
| `electricity_energy_conversion` | 电力行 | Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | 保留 kWh 电表读数，并按 1 kWh = 3.6 MJ 换算为 MJ；报告电网组合、电压等级、地理范围和所含损耗。 |
| `gas_volume_conditions` | 天然气行 | Volume `93a60a56-a3c8-22da-a746-0800200c9a66` | m3 | 记录计量气量的温度、压力、干湿基准及仪表修正；不得把天然气与电力或外购热量合并。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 半成品材料、聚合物粒料、工艺化学品、公用工程和包装进入报告场址边界时，具有供应商身份和上游数据集链接 |
| starting_condition_role | 可销售零件制造的门到门前景起始条件 |
| product_classification_scope | CPC 3.0 43253 范围内的可销售零件；零件的确切设计和适用设备是必需的前景限定信息 |
| recursive_input_rule | 购入的输入若自身符合本 PCR，应作为上游产品输入仅记录一次并链接独立数据集；不得在消费过程中重新展开或重复其制造清单 |
| upstream_dataset_requirement | 每项购入材料、公用工程、化学品和包装必须链接地理与技术具有代表性的上游数据集；缺失链接必须披露 |
| disclosure | 披露场址、期间、产量、验收和报废质量、材料路线、表面处理路线、包装状态、外包工序、分配和排除活动 |

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_site_gate` | 所有前景过程 | 纳入从所声明起始输入进入场址至可销售零件在报告场址工厂门口放行之间、受运营控制的活动。 | `un-cpc-3-0-structure-2025` |
| `boundary_actual_routes` | 材料和表面处理路线 | 仅纳入所声明零件实际采用的路线；其他实际材料、化学品、废物或基本流排放均应按一个原子交换独立记录。 | `eu-stm-bref-2006` |
| `boundary_outsourced_operation` | 外包成形、加工、处理、涂装、试验或包装 | 记录转移的具体半成品以及外包服务或过程数据集，不重复负荷；披露转移边界和地理范围。 |  |
| `boundary_fan_part_identity` | 风扇零件声明 | 识别供应元件及其适用的风扇或罩体；实例包括叶轮、定子、气动元件、防护罩和支承结构件。 | `eu-fan-regulation-2024-1834` |
| `boundary_exclusions` | 下游和资本活动 | 除非研究目标明确扩展边界，否则排除报告场址外的整机装配、安装、使用、维护、寿命终止、资本设备和员工通勤。 |  |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `component_fabrication` | 部件制造 | required | 始终纳入；仅包括实际实施的成形、机械加工、成型、连接、热处理和清洁作业 | 将接收材料转换为所声明零件的前景过程 | 每 1 kg 已验收可销售零件 |
| `aqueous_surface_treatment` | 水系表面前处理或处理 | conditional | 报告场址采用水系化学或电化学槽液或漂洗时纳入 | 前景清洁、转化处理、酸洗或相关水系处理 | 每 1 kg 已验收可销售受处理零件 |
| `powder_coating` | 粉末涂装及固化 | conditional | 报告场址实施粉末涂装或固化时纳入 | 前景防护或装饰涂装 | 每 1 kg 已验收可销售涂装零件 |
| `final_release` | 最终检验与放行 | required | 始终纳入；仅当一次性包装随零件供应时纳入包装交换 | 前景检验、适用时包装以及可销售产品放行 | 1 kg 已验收可销售零件 |

这些前景阶段之间若始终处于同一报告场址和同一所有权且纳入质量平衡，则内部转移不作为独立技术圈交换。若转移跨越场址或所有权边界，应记录具体转移产品并链接供应数据集。

### 过程：部件制造（`component_fabrication`）

#### 输入

##### 产品流

###### 钢板路线使用的冷轧钢板（`cold_rolled_steel_sheet`）

仅在所声明零件实际消耗冷轧钢板时记录。由于最佳候选的中英文身份冲突，该流 UUID 尚未解决。

- 选定流：冷轧钢板
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：实测钢板净消耗质量，包括可归属的边角料，并按验收产出归一化
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 已验收可销售零件
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_fabrication_inputs`
- 来源：

###### 铝合金板路线使用的初级铝合金板材（`primary_aluminium_alloy_sheet`）

仅在实际消耗初级铝合金板材时记录。声明合金、状态、厚度、供应商和再生材料含量声明。

- 选定流：初级铝合金板材 `2a9549cc-dc9e-43a7-9379-7a0c0a0e4832`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：实测铝合金板净消耗质量，包括可归属的边角料，并按验收产出归一化
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 已验收可销售零件
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_fabrication_inputs`
- 来源：

###### 成型路线使用的聚丙烯粒料（`polypropylene_granulate`）

仅在所声明零件实际由聚丙烯粒料成型时记录。声明牌号、添加剂、颜色和再生材料含量。

- 选定流：聚丙烯粒料（PP） `4f19f11d-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：发往成型路线的实测粒料净量，扣除已核实返回库存的闭环回料，并按验收产出归一化
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 已验收可销售零件
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_fabrication_inputs`
- 来源：

###### 机械加工路线使用的切削液（`cutting_fluid`）

机械加工使用切削液时记录跨越场址边界的新鲜补充量。内部循环液不得重复计数。

- 选定流：切削液 `576d250f-4f36-4385-939d-0f03b8f95a10`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：购入或领用的补充质量减去有记录的退库量，并按验收产出归一化
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 已验收可销售零件
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_fabrication_inputs`
- 来源：

###### 制造用电（`fabrication_electricity`）

记录对实际制造作业计量或可辩护分表计量的电能。

- 选定流：电力 `67b723a9-6f63-4802-adca-b52ce7967d47`
- 流属性/单位：Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则：将计量 kWh 换算为 MJ，并利用有记录的运行数据分配至验收产品
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 已验收可销售零件
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_fabrication_energy_water`
- 来源：

###### 制造直接用热的天然气（`fabrication_natural_gas`）

仅在场址内燃烧天然气用于热处理、干燥或其他制造热负荷时记录。明确仪表参考条件。

- 选定流：气态天然气 `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位：Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- 数量规则：可归属于制造的修正计量气量，并按验收产出归一化
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 已验收可销售零件
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_fabrication_energy_water`
- 来源：

###### 制造工艺用水（`fabrication_process_water`）

记录为实际制造清洗或冷却而跨越场址边界的工艺用水。循环水不得重复计数。

- 选定流：工艺用水 `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：可归属于制造的计量或储罐平衡补充水质量，并按验收产出归一化
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 已验收可销售零件
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_fabrication_energy_water`
- 来源：

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

###### 制造产生的工业后钢废料（`post_industrial_steel_scrap`）

记录作为废物离开前景系统的分类钢边角料、切屑和报废钢材；不得在本行净扣回收抵扣。

- 选定流：工业后钢废料 `c143745d-be4f-4d8f-b403-2dcbfe685349`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：转移至所声明处理或回收目的地的实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 已验收可销售零件
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_fabrication_wastes`
- 来源：

###### 制造产生的铝废料（`aluminium_scrap`）

记录作为废物离开前景系统的铝边角料、切屑和报废铝材，并与钢及其他金属分开。

- 选定流：铝废料 `96c5f842-ea53-419b-b1cd-c02c479efb45`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：转移至所声明处理或回收目的地的实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 已验收可销售零件
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_fabrication_wastes`
- 来源：

###### 成型产生的聚丙烯废料（`polypropylene_waste`）

记录离开闭环回料系统的聚丙烯流道料、清机料、不合格零件或其他聚丙烯材料。

- 选定流：聚丙烯废料 `88215d1b-e6b6-4ec7-af7f-83375e80637b`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：离开前景系统的聚丙烯废物实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 已验收可销售零件
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_fabrication_wastes`
- 来源：

##### 基本流

###### 场址内天然气燃烧产生的化石二氧化碳（`fabrication_fossil_co2`）

仅当天然气在前景边界内燃烧时，记录向空气直接排放的化石二氧化碳。电力上游排放保留在电力数据集中。

- 选定流：二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：采用场址实测排放，或依据采集的燃料碳、氧化和烟气记录计算；不规定通用排放因子
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 已验收可销售零件
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_combustion_emissions`
- 来源：

### 过程：水系表面前处理或处理（`aqueous_surface_treatment`）

#### 输入

##### 产品流

###### 碱性槽液用氢氧化钠（`surface_sodium_hydroxide`）

仅在碱性清洗、蚀刻或处理槽使用氢氧化钠时记录。声明购入浓度，并一致地将溶液记录换算为交付产品质量。

- 选定流：氢氧化钠 `e0abcced-0611-4c24-9290-5a2c5a0c4169`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：加入或补充的购入氢氧化钠产品净质量，并按验收处理产出归一化
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 已验收可销售受处理零件
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_surface_inputs`
- 来源：`eu-stm-bref-2006`

###### 槽液和漂洗工艺用水（`surface_process_water`）

记录供给水系槽液和漂洗的补充水；内部循环水不得重复计数。

- 选定流：工艺用水 `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：所声明槽液与漂洗序列的计量补充水质量，并按验收处理产出归一化
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 已验收可销售受处理零件
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_surface_inputs`
- 来源：`eu-stm-bref-2006`

###### 表面处理用电（`surface_electricity`）

记录实际路线边界内泵、整流器、槽液加热、通风及相关场址内处理的电力。

- 选定流：电力 `67b723a9-6f63-4802-adca-b52ce7967d47`
- 流属性/单位：Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则：将计量 kWh 换算为 MJ，并按验收处理产出归一化
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 已验收可销售受处理零件
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_surface_inputs`
- 来源：`eu-stm-bref-2006`

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

###### 表面处理废水（`surface_treatment_wastewater`）

记录转移至场址内或场址外处理的废水，并注明来源、成分指标和目的地。本行不代指污泥或废槽液；实际产生时应作为独立原子行记录。

- 选定流：废水 `d2d44ce1-c0f4-461d-9413-f4b33e0d200f`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：排放或转移废水的实测质量，并按验收处理产出归一化
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 已验收可销售受处理零件
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_surface_wastewater`
- 来源：`eu-stm-bref-2006`

##### 基本流

### 过程：粉末涂装及固化（`powder_coating`）

#### 输入

##### 产品流

###### 粉末涂料（`powder_coating_material`）

记录发往生产线的实际粉末涂料，扣除已核实返回使用的同规格回收粉。声明化学体系、颜色和固化制度。

- 选定流：涂料（粉末） `6e3010f9-fbd3-48f6-95fc-c1b38d2800d2`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：领用涂料质量减去有记录的同规格退库量，并按验收涂装产出归一化
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 已验收可销售涂装零件
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_coating_inputs`
- 来源：`us-epa-ap42-4-2-2-1`

###### 粉末涂装用电（`coating_electricity`）

记录边界内喷涂、涂装室通风、回收以及电加热固化的电力。

- 选定流：电力 `67b723a9-6f63-4802-adca-b52ce7967d47`
- 流属性/单位：Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则：将计量 kWh 换算为 MJ，并按验收涂装产出归一化
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 已验收可销售涂装零件
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_coating_inputs`
- 来源：`us-epa-ap42-4-2-2-1`

###### 粉末涂层固化用天然气（`coating_natural_gas`）

仅当前景边界内的涂层固化炉燃烧天然气时记录。

- 选定流：气态天然气 `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位：Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- 数量规则：可归属于固化炉的修正计量气量，并按验收涂装产出归一化
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 已验收可销售涂装零件
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_coating_inputs`
- 来源：`us-epa-ap42-4-2-2-1`

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

###### 粉末涂装废弃物（`powder_coating_waste`）

记录作为粉末涂装废物离开回收环路的过喷粉、换色清扫物、过滤捕集物或不合格粉末。

- 选定流：粉末涂装废弃物 `9aa53a82-5462-400e-9096-efab7718201f`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：转移至所声明目的地的粉末涂装废弃物实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 已验收可销售涂装零件
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_coating_waste`
- 来源：`us-epa-ap42-4-2-2-1`

##### 基本流

### 过程：最终检验与放行（`final_release`）

#### 输入

##### 产品流

###### 随零件供应的瓦楞纸箱（`corrugated_board_box`）

仅当一次性瓦楞纸箱随所声明零件出厂时记录。可重复使用的运输工装应披露，但不计入本行。

- 选定流：瓦楞纸箱 `4f197bec-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：发往已验收出货产品的纸箱实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 已验收可销售零件
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_release_records`
- 来源：

###### 最终检验和包装用电（`release_electricity`）

记录场址控制下检验和包装设备的电力；排除下游实施的整机性能试验。

- 选定流：电力 `67b723a9-6f63-4802-adca-b52ce7967d47`
- 流属性/单位：Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则：将计量 kWh 换算为 MJ，并按验收放行产出归一化
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 已验收可销售零件
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_release_records`
- 来源：

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 已验收可销售参考产品（`reference_product_output`）

仅记录通过所声明放行准则的零件。不合格零件应计入相应的材料特定废物流，或返工且不得重复计数。

- 选定流：43230次级所列制品的零件，风扇及通风或含有一个风扇的循环罩零件 `dcfd2be0-e784-4045-9407-9e9d782120c3`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：固定参考产出 1 kg 已验收可销售零件
- 数值来源模式：固定值（`fixed_value`）
- 适用范围：通用（`generic`）
- 归一化基准：1 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：方法公式（`method_formula`）
- 来源：`mass-balance-identity`

##### 废物流

##### 基本流

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivide_first` | 共用生产线和公用工程 | 首先按过程阶段、仪表、生产订单、机器时间或其他因果记录细分，再实施分配。 |  |
| `allocation_physical_relation` | 无法避免的共用负荷 | 按反映负荷因果关系且有记录的物理关系分配，例如机器时间、涂装面积、处理质量或验收质量；仅当无法建立可辩护的物理关系时才允许经济分配，并必须披露。 |  |
| `allocation_scrap_no_credit` | 钢、铝、聚丙烯及涂装废物 | 分别报告废物质量和目的地。不得在前景清单中扣除原生材料替代或回收抵扣；只能在独立声明的下游情景中建模。 | `mass-balance-identity` |
| `allocation_rework` | 返工和不合格品 | 将返工投入归属于验收产出，并防止内部返回材料重复计数；离开系统的材料在对应原子废物流中仅报告一次。 | `mass-balance-identity` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_fabrication_inputs` | `component_fabrication` | 材料及切削液输入 | 采购、领用、退库、库存和生产订单记录 | 材料身份；牌号；期初库存；收货；领用；退库；期末库存；订单；验收质量 | 将 ERP/材料领用记录与库存变动和生产订单核对 | kg | 每批或每订单；每月核对 | 代表性报告年度或所声明生产期 | 报告场址所有范围内制造线 | 净消耗量除以经分配的验收产出质量 | 供应商证书；领退料单；库存核对；秤校准 |
| `cp_fabrication_energy_water` | `component_fabrication` | 电力、天然气和工艺用水输入 | 仪表、分表、运行时间和生产记录 | 仪表起止值；修正系数；kWh；气体 m3；气体条件；水质量或体积；运行时间；验收质量 | 读取经校准仪表；仅对剩余共用负荷按有记录的因果驱动分配 | kWh, m3, kg | 连续或每班；每月核对 | 代表性报告年度或所声明生产期 | 范围内制造设备及直接相关公用工程 | 修正数量除以经分配的验收产出质量；电力换算为 MJ | 仪表校准；账单；分表图；停机和分配日志 |
| `cp_fabrication_wastes` | `component_fabrication` | 材料特定废物 | 分类废物箱称量、转移单和生产记录 | 废物身份；来源；毛重/皮重/净重；目的地；订单；验收质量 | 对每次分类转移称重并与材料平衡核对 | kg | 每次转移；每月核对 | 代表性报告年度或所声明生产期 | 范围内制造线 | 净废物质量除以经分配的验收产出质量 | 经校准秤；废物转移单；分类审计 |
| `cp_combustion_emissions` | `component_fabrication` | 化石二氧化碳直接排放 | 烟气实测或场址燃料碳计算记录 | 燃料量；组成或碳含量；氧化基准；如有实测 CO2；运行期间；验收质量 | 使用场址实测或有记录的场址计算；保留因子来源，且此处不纳入电力排放 | kg | 每次测试或报告期 | 与归属气体用量相同的期间 | 前景边界内场址燃烧 | 化石 CO2 直接排放除以经分配的验收产出质量 | 监测报告；实验室结果；计算工作簿；许可记录 |
| `cp_surface_inputs` | `aqueous_surface_treatment` | 氢氧化钠、水和电力 | 槽液添加、浓度检测、仪表和处理生产记录 | 化学品浓度；溶液质量；NaOH 产品质量；水；kWh；槽和漂洗标识；处理验收质量 | 核对化学品领用与槽液添加；读取仪表；电力换算为 MJ | kg, kWh | 每次添加和每班；每月核对 | 代表性报告年度或所声明生产期 | 范围内水系生产线及相关处理 | 数量除以经分配的验收处理产出质量 | 化学品证书；滴定结果；仪表校准；槽液日志 |
| `cp_surface_wastewater` | `aqueous_surface_treatment` | 废水输出 | 排水仪表、储罐转移、采样和目的地记录 | 流量或质量；换算时的密度；槽/漂洗来源；pH 及所声明分析物；目的地；处理验收质量 | 测量排放或转移并与槽液/漂洗水量平衡核对 | kg | 每次排放或连续计量；每月核对 | 与表面处理输入相同的期间 | 水系生产线及所纳入的场址内处理 | 废水质量除以经分配的验收处理产出质量 | 排水仪表校准；样品监管链；转移单；水量平衡 |
| `cp_coating_inputs` | `powder_coating` | 粉末涂料、电力和固化用气 | 涂料领退、仪表、烘炉和生产记录 | 涂料身份；领用和退库质量；kWh；气体 m3 及条件；固化制度；涂装验收质量 | 单独核对同规格回收粉；计量生产线和烘炉能源 | kg, kWh, m3 | 每批或每班；每月核对 | 代表性报告年度或所声明生产期 | 范围内涂装线和固化炉 | 涂料净量和能源除以经分配的验收涂装产出质量 | 涂料证书；领退料日志；仪表校准；固化记录 |
| `cp_coating_waste` | `powder_coating` | 粉末涂装废物 | 分类捕集、清扫、过滤、转移和生产记录 | 废物身份；来源；毛重/皮重/净重；回收状态；目的地；涂装验收质量 | 称量离开回收环路的材料，并与涂料质量平衡核对 | kg | 每次转移；每月核对 | 与涂装输入相同的期间 | 范围内粉末涂装线 | 废物质量除以经分配的验收涂装产出质量 | 经校准秤；转移单；涂料质量平衡 |
| `cp_release_records` | `final_release` | 包装、检验电力和验收产品 | 包装领用、电力、检验、不合格和出货记录 | 纸箱身份和质量；kWh；验收产品净质量；不合格质量；图纸/型号；出货状态 | 核对包装领用与放行记录；对不含可重复使用工装的验收产出称重 | kg, kWh | 每订单或每批出货；每月核对 | 代表性报告年度或所声明生产期 | 场址控制下最终检验和包装 | 输入除以验收放行质量；参考产出设为 1 kg | 放行证书；秤和仪表校准；装箱单；不合格日志 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_net_consumption` | 材料和化学品 | 净消耗量 = 期初库存 + 收货 - 期末库存 - 有记录的退供应商或退库量；内部循环不得重复计数。 | 库存、收货、领用和退库记录 | 净输入质量 | `mass-balance-identity` |
| `calc_reference_normalization` | 所有非参考行 | 归一化数量 = 报告期经分配数量 / 经分配的已验收可销售零件质量。 | 经分配的行数量；验收产出质量 | 每 1 kg 参考产品的数量 | `mass-balance-identity` |
| `calc_electricity_mj` | 电力行 | 电力（MJ）= 计量电力（kWh）× 3.6。 | 计量 kWh | 电力 MJ | `energy-unit-identity` |
| `calc_mass_balance` | 各声明材料路线 | 将接收材料净量与验收产品含量、内部库存变化、有记录退料和各材料特定废物核对；调查无法解释的差额。 | 材料输入；库存变化；验收产品组成；退料；废物 | 路线质量平衡检查 | `mass-balance-identity` |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_product_identity` | 参考产品 | 识别零件确切身份、图纸/型号版本、适用设备、材料/牌号、表面状态和市场状态。 | 放行证书、图纸、物料清单、产品规范 |
| `dq_route_completeness` | 过程图 | 声明所有实际成形、机械加工、成型、连接、热处理、水系处理、涂装、检验和包装作业，包括外包步骤。 | 工艺路线卡、作业指导书、供应商加工记录 |
| `dq_mass_completeness` | 材料和废物流 | 按路线核对至少 95% 的材料输入质量；解释差额及水分或库存影响，不得强行配平。 | 签署的质量平衡工作簿和库存核对 |
| `dq_metering` | 电力、气体和水 | 使用经校准仪表或有记录的分表/分配层级；报告仪表覆盖率以及不确定性或估算比例。 | 校准证书、公用工程账单、仪表图、分配日志 |
| `dq_temporal_geographic` | 所有前景数据 | 使用一致的报告期，并披露场址、地理范围、技术、产能利用、异常运行及任何替代期间。 | 生产和环境报告记录 |
| `dq_atomic_wastes_emissions` | 废物和基本流排放 | 分别报告每项实际材料特定废物和排放物质；废水不得替代污泥、废槽液或水基本流排放。 | 废物台账、转移单、监测和采样记录 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validate_reference_flow` | 参考产品 | 确认 `reference_product_output` 恰为 1 kg 已验收可销售零件，且必需限定信息完整。 | `un-cpc-3-0-structure-2025` |
| `validate_route_applicability` | 条件行和条件过程 | 每个条件行均由实际路线记录支持或明确标记为不适用；不得为不存在的路线建立零值伪记录。 |  |
| `validate_atomic_inventory` | 所有清单行 | 拒绝合并的能源载体、材料族、混合废物和汇总排放；每个选定流必须是一个物理、化学、废物或能源交换。 |  |
| `validate_uuid_identity` | 带 UUID 的流 | 使用前确认公开状态 100、中英文 baseName、流类型、分类、属性、单位组、参考单位、产品状态及前景限定信息。 |  |
| `validate_balance_and_allocation` | 材料、废物和共用公用工程 | 验证路线质量平衡，并确认分配驱动可复现报告期总量，且不重复计算内部退料或回收抵扣。 | `mass-balance-identity` |
| `validate_source_boundary` | 有来源支持的规则 | 确认引用证据仅用于其经核验的范围；AP-42 涂装规则不提供针对本产品的经验数量范围。 | `us-epa-ap42-4-2-2-1` |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 经审查后可作为 `secondary_dataset` 或 `background_dataset`；当前已编写 PCR 仍为候选方法学 |
| downstream_use | CPC 43253 可销售零件的前景过程模型，以及消耗所声明零件的泵、压缩机、风扇或装有风扇罩体的生命周期模型 |
| allowed_use | 用于完全一致的零件、材料路线、表面状态、工厂门口、地理范围、技术、报告期和包装状态，并与具有代表性的上游输入数据集组合 |
| excluded_use | 未经调整用于整机、不同设计或材料的零件、安装/使用/寿命终止，或作为未披露的行业平均替代数据 |
| required_metadata | PCR id；参考流 UUID；图纸/型号；适用设备；材料和牌号；路线；表面状态；包装状态；场址/地理范围；期间；技术；分配；仪表覆盖率；上游数据集链接 |
| required_quality_disclosure | 质量平衡结果；验收/不合格质量；数据覆盖率；估算比例；仪表和秤校准；供应商数据质量；未解决 UUID 或范围证据需求；偏离项 |
| update_trigger | 图纸或材料变化；路线、涂层、包装、供应商、场址或能源系统变化；材料分配变化；报告数据超过研究时效要求；Tiangong 身份更正；或获得新的独立范围证据 |

## 11. 数据源

| 来源 id | 类型 | 参考文献 | 用途 |
| --- | --- | --- | --- |
| `un-cpc-3-0-structure-2025` | `dataset` | 联合国统计司，CPC 3.0 版结构，2025-06-30，https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv（检索于 2026-09-05） | CPC 43253 正式产品身份和英文标题 |
| `un-cpc-1-1-chinese-2002` | `official_guidance` | 联合国统计司，《产品总分类 1.1 版》中文版，https://unstats.un.org/unsd/publication/SeriesM/M_77ver1_1c.pdf（检索于 2026-09-05） | 对相同分类表述进行专业中文术语核对；不作为定量证据 |
| `eu-fan-regulation-2024-1834` | `standard` | 欧盟委员会法规 (EU) 2024/1834，ELI http://data.europa.eu/eli/reg/2024/1834/oj（合并文本核查于 2026-09-05） | 风扇元件和备件实例及身份限定信息 |
| `eu-stm-bref-2006` | `official_guidance` | 欧盟委员会，《金属和塑料表面处理最佳可行技术参考文件》，2006 年 8 月通过，https://bureau-industrial-transformation.jrc.ec.europa.eu/reference/surface-treatment-metals-and-plastics（检索于 2026-09-05） | 条件性水系表面处理过程边界、水系槽液/漂洗背景和相关活动 |
| `us-epa-ap42-4-2-2-1` | `method_factor` | 美国 EPA，AP-42 第 4.2.2.1 节《通用工业表面涂装》，https://www.epa.gov/sites/default/files/2020-10/documents/c4s02_2a.pdf（检索于 2026-09-05） | 粉末/液体涂层区别、施工/固化过程分解和涂料质量平衡背景；未据此推断产品特定范围 |
| `mass-balance-identity` | `method_factor` | 本 PCR 前景采集和计算规则所实施的质量守恒恒等式 | 净消耗、质量平衡、废物、分配和 1 kg 参考归一化规则 |
| `energy-unit-identity` | `method_factor` | 精确 SI 能量换算：1 kWh = 3.6 MJ | 仅用于电力单位换算 |
