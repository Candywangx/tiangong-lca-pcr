---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.coconut-oil-crude
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 粗椰子油

## 1. 范围与适用性

本 PCR 适用于油厂内以干燥椰子仁（copra，椰干）为原料生产粗椰子油的前景过程。核心路线包括椰干接收与预处理、机械压榨、粗油澄清或过滤，以及油厂门口的储存。仅在实际采用时，才将压榨饼粕的溶剂萃取作为条件过程建模。产品保持未精炼状态，供后续精炼或技术加工。

若椰子种植、采收、脱纤维、脱壳和椰干干燥发生在所声明的油厂门口之前，本 PCR 不包括这些过程，且必须使用上游数据集。本 PCR 还不包括化学或物理精炼、脱色、脱臭、分提、氢化、零售包装、配送、使用和生命末期。作为直接消费品销售的初榨或冷榨椰子油、精炼椰子油、椰浆或椰奶，以及其他植物来源的油均不在范围内。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.coconut-oil-crude |
| classification_refs | CPC 3.0：21661，Coconut oil, crude（仅作为映射背景） |
| covered_products | 通过机械压榨椰子仁或椰干所得的未精炼椰子油，可包括对压榨饼粕进行条件性溶剂回收的路线；供精炼或技术加工的散装粗椰子油 |
| excluded_products | 作为直接消费品销售的初榨或冷榨椰子油；精炼、脱色、脱臭、分提、氢化或配制的椰子油；椰浆和椰奶；棕榈仁油及其他植物油 |
| representative_product | 由椰干生产、经澄清或过滤并可从油厂发运的散装粗椰子油 |
| production_route | 椰干接收与预处理；机械压榨；可选的压榨饼粕溶剂萃取与溶剂回收；粗油澄清或过滤；散装储存 |
| market_state | 油厂门口的未精炼散装油；声明萃取路线、产地、批次、水分、杂质和适用的商业质量规范 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 在油厂门口供应、用于后续精炼或技术加工的粗椰子油 |
| How much | 1 kg 粗椰子油 |
| How well | 来自椰子仁或椰干、经澄清或过滤的未精炼油，并声明萃取路线和适用的批次质量规范 |
| How long or cycle | 发运时的一个生产批次；不适用服务期限 |
| reference_flow_link | `crude_coconut_oil_output` |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 kg |
| 参考产品流 | 粗椰子油 `8b18e824-f237-4a70-9127-ddabde706d15` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 未精炼状态；椰干或椰子仁来源；纯机械路线或机械加溶剂路线；生产地理范围；生产期间和批次；水分及挥发物测试基准；不溶性杂质测试基准；游离脂肪酸或酸值测试基准；储存条件；预期的下游精炼或技术用途 |

构建前景数据包时，必须在数据集元数据、过程说明、参考流备注、产品说明或等效字段中声明每项必需限定信息。缺失限定信息时，该数据包的参考流定义不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | 参考粗椰子油 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 将所有清单结果归一化为最终澄清或储存后离开的 1 kg 净粗椰子油；扣除容器皮重并报告称重点。 |
| `material_mass_basis` | 椰干、饼粕、废物、过滤残渣和溶剂 | Mass | kg | 记录接收状态质量；当水分变化显著影响收率或平衡时，还须使用声明的取样方法记录水分和干物质。 |
| `energy_consistency` | 外购电力、燃料和蒸汽 | 按计量记录的能量或质量 | kWh、MJ 或 kg | 保留计量单位和换算系数；当燃料能量和产出蒸汽描述同一能源供应时不得重复相加。 |
| `water_balance` | 工艺水和清洗水 | 质量或体积 | kg 或 m3 | 将净补充水与内部循环水分开记录，并单独报告排放废水；体积换算质量时声明密度。 |
| `solvent_balance` | 条件性溶剂萃取路线 | Mass | kg | 在同一生产活动平衡中记录溶剂补充量、期初和期末库存、回收的内部循环、场外转移、销毁量和排放量。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 在油厂第一个受控点接收的干燥椰子仁（椰干），并声明供应商、产地、接收质量、水分基准，以及上游数据集是否包括前序脱纤维、脱壳和干燥 |
| starting_condition_role | 粗油萃取的门到门前景起始条件；除非在报告设施内实施，否则椰干生产和干燥属于上游产品系统 |
| product_classification_scope | 来自椰子仁或椰干的粗制未精炼椰子油；下游精炼以及消费级初榨或冷榨油不在本 PCR 范围内 |
| recursive_input_rule | 同一批次或设施返回或返工的粗椰子油作为内部循环，不计为新的产品投入；外购粗椰子油须披露并使用独立上游数据集建模，且不得默认为前景产出重新标注 |
| upstream_dataset_requirement | 对椰干、外购能源、燃料、水、溶剂、助滤剂和其他技术圈投入使用具有地理和时间代表性的上游数据集；披露缺失的上游覆盖 |
| disclosure | 声明油厂门口、所含单元过程、机械或溶剂路线、内部循环处理、分配方法、排除的上下游阶段、地理范围、生产期间和任何共享公用工程 |

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_core_operations` | 所有数据集 | 包括椰干接收与预处理、机械压榨、粗油分离或过滤、转运以及直至油厂发运点的储存。 | `eu-jrc-fdm-bref-2019`; `codex-cxs-210-1999` |
| `boundary_conditional_solvent` | 溶剂辅助型油厂 | 使用该路线时，包括压榨饼粕萃取、混合油蒸馏、粕脱溶、溶剂回收、补充溶剂、废水、废物及无组织或有组织溶剂排放。 | `eu-jrc-fdm-bref-2019` |
| `boundary_refining_exclusion` | 所有数据集 | 不包括脱胶、脱酸、脱色、脱臭、分提和氢化；若同址进行，须单独计量或分配给下游精炼数据集。 | `eu-jrc-fdm-bref-2019` |
| `boundary_upstream_disclosure` | 椰干供应 | 仅当种植、采收、脱纤维、脱壳和椰干干燥由上游数据集表示时，才能将其排除；现场实施的任何此类过程须单独列入清单并披露。 | `iso-14044-2006` |
| `boundary_no_hazardous_cutoff` | 重要性筛选 | 不得仅因质量占比小而遗漏溶剂、直接空气排放、废水、危险化学品或危险废物；披露任何其他被排除流及其筛选依据。 | `iso-14044-2006`; `eu-jrc-fdm-bref-2019` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `copra_receiving_preparation` | 椰干接收与预处理 | required | 始终纳入 | 接收、检验、清理、破碎和调质椰干以供萃油 | 转出的 kg 预处理椰干 |
| `mechanical_oil_extraction` | 机械萃油 | required | 始终纳入 | 压榨预处理椰干并分离压榨粗油与椰子压榨饼粕 | 转出的 kg 压榨粗油 |
| `solvent_oil_recovery` | 从压榨饼粕中溶剂回收油 | conditional | 仅在压榨饼粕采用溶剂萃取时纳入 | 回收残油并生产脱溶粕或饼 | 转出的 kg 萃取粗油 |
| `crude_oil_clarification_storage` | 粗油澄清与储存 | required | 始终纳入 | 合并路线物流、沉降或过滤并储存粗椰子油以供发运 | 发运的 1 kg 粗椰子油 |

### 过程：椰干接收与预处理（`copra_receiving_preparation`）

#### 输入

##### 产品流

###### 油厂接收的椰干（`copra_input`）

干燥椰子仁在接收时跨越前景边界。供应商票据和接收测量提供数量与质量基准。

- 选定流：Copra（候选；Tiangong UUID 未解析）
- 流属性/单位：Mass / kg
- 数量规则：生产批次验收的实测净接收质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每发运 1 kg 粗椰子油
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_mass_quality`
- 来源：`codex-cxs-210-1999`
- 数量范围：暂定椰干投入质量平衡 QA 校验范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：1.4
  - 上限：3.5
  - 单位：kg/kg 粗椰子油
  - 基准：每发运 1 kg 粗椰子油的接收椰干
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 预处理电力（`preparation_electricity`）

接收、输送、清理、破碎和调质辅助设备的用电，按分表记录，或依据共享电表进行可辩护的分配。

- 选定流：Electricity, supplied（候选；Tiangong UUID 未解析）
- 流属性/单位：Energy / kWh
- 数量规则：实测或分配的净外购电力
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每发运 1 kg 粗椰子油
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_by_process`
- 数量范围：暂定预处理电力 QA 校验范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.5
  - 单位：kWh/kg 粗椰子油
  - 基准：每发运 1 kg 粗椰子油的预处理电力
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

#### 输出

##### 产品流

###### 转往压榨的预处理椰干（`prepared_copra_output`）

预处理椰干属于内部中间流；记录其实测质量和水分，不给予外部产品抵扣。

- 选定流：Prepared copra, internal intermediate（候选；Tiangong UUID 未解析）
- 流属性/单位：Mass / kg
- 数量规则：转往压榨的实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每单位预处理过程输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_mass_quality`

##### 废物流

###### 分离的异物和拒收椰干（`preparation_rejects`）

石块、金属、泥土、变质椰干及其他去除物按去向和废物或回收材料状态记录。

- 选定流：Copra preparation rejects（候选；Tiangong UUID 未解析）
- 流属性/单位：Mass / kg
- 数量规则：按去向实测的拒收物质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每发运 1 kg 粗椰子油
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_residuals_emissions`
- 来源：`eu-jrc-fdm-bref-2019`
- 数量范围：暂定预处理拒收物 QA 校验范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.15
  - 单位：kg/kg 粗椰子油
  - 基准：每发运 1 kg 粗椰子油的预处理拒收物
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

###### 排入空气的预处理粉尘（`preparation_dust_air`）

任何捕集系统后的直接粉尘按基本流排放报告；捕集粉尘仍作为废物或回收材料记录。

- 选定流：Particulate matter, to air（候选；Tiangong UUID 未解析）
- 流属性/单位：Mass / kg
- 数量规则：实测排放量，或根据实测排气流量、浓度和运行时间计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每发运 1 kg 粗椰子油
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_residuals_emissions`
- 来源：`eu-jrc-fdm-bref-2019`
- 数量范围：暂定直接粉尘 QA 校验范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.01
  - 单位：kg/kg 粗椰子油
  - 基准：每发运 1 kg 粗椰子油排放的颗粒物
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

### 过程：机械萃油（`mechanical_oil_extraction`）

#### 输入

##### 产品流

###### 预处理椰干（`prepared_copra_input`）

在同一批次平衡内，内部预处理椰干转入量必须与 `copra_receiving_preparation` 的输出相符。

- 选定流：Prepared copra, internal intermediate（候选；Tiangong UUID 未解析）
- 流属性/单位：Mass / kg
- 数量规则：从预处理转入的质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每单位机械萃油过程输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_mass_quality`

###### 萃油电力（`extraction_electricity`）

记录生产活动期间压榨机、输送机、泵及相关控制设备的用电。

- 选定流：Electricity, supplied（候选；Tiangong UUID 未解析）
- 流属性/单位：Energy / kWh
- 数量规则：实测或分配的净外购电力
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每发运 1 kg 粗椰子油
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_by_process`
- 数量范围：暂定萃油电力 QA 校验范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0.01
  - 上限：2
  - 单位：kWh/kg 粗椰子油
  - 基准：每发运 1 kg 粗椰子油的机械萃油电力
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 调质热能（`conditioning_thermal_energy`）

仅在实际使用时记录压榨前或压榨期间加热或调质椰干所用的燃料或外购蒸汽；报告实际能源载体，避免重复计算蒸汽及其发生燃料。

- 选定流：Thermal energy carrier or steam used on site（候选；Tiangong UUID 未解析）
- 流属性/单位：Energy / MJ
- 数量规则：实测燃料低位热值输入或计量的外购蒸汽能量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每发运 1 kg 粗椰子油
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_by_process`
- 来源：`eu-jrc-fdm-bref-2019`
- 数量范围：暂定调质能耗 QA 校验范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：10
  - 单位：MJ/kg 粗椰子油
  - 基准：每发运 1 kg 粗椰子油的调质能量
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 压榨粗椰子油中间流（`pressed_crude_oil_output`）

压榨油作为内部中间流转往澄清，或与溶剂萃取油合并。

- 选定流：粗椰子油 `8b18e824-f237-4a70-9127-ddabde706d15`
- 流属性/单位：Mass / kg
- 数量规则：从压榨过程转出的实测净质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每单位机械萃油过程输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_mass_quality`

###### 椰子压榨饼粕（`press_cake_output`）

压榨饼粕在出售或转往有益用途时作为共产品报告，在现场采用溶剂萃取时作为内部中间流，在弃置时作为废物。

- 选定流：Coconut press cake（候选；Tiangong UUID 未解析）
- 流属性/单位：Mass / kg
- 数量规则：按去向状态实测的质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每发运 1 kg 粗椰子油
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_mass_quality`
- 来源：`eu-jrc-fdm-bref-2019`
- 数量范围：暂定压榨饼粕产出 QA 校验范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0.3
  - 上限：2.5
  - 单位：kg/kg 粗椰子油
  - 基准：每发运 1 kg 粗椰子油、可选溶剂萃取之前的压榨饼粕
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

### 过程：从压榨饼粕中溶剂回收油（`solvent_oil_recovery`）

#### 输入

##### 产品流

###### 送往萃取的压榨饼粕（`press_cake_extraction_input`）

仅对从压榨饼粕中萃取残油的油厂纳入该内部流。

- 选定流：Coconut press cake, internal intermediate（候选；Tiangong UUID 未解析）
- 流属性/单位：Mass / kg
- 数量规则：投入萃取器的实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每单位溶剂回收过程输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_mass_quality`

###### 补充萃取溶剂（`makeup_solvent_input`）

将跨越设施边界的补充溶剂与回收的内部循环溶剂分开记录。

- 选定流：Extraction solvent, make-up（候选；Tiangong UUID 未解析）
- 流属性/单位：Mass / kg
- 数量规则：按采购量或储罐平衡计算的补充溶剂
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每发运 1 kg 粗椰子油
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_solvent_balance`
- 来源：`eu-jrc-fdm-bref-2019`
- 数量范围：暂定补充溶剂 QA 校验范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.05
  - 单位：kg/kg 粗椰子油
  - 基准：每发运 1 kg 粗椰子油的补充溶剂
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 溶剂路线能源（`solvent_route_energy`）

按能源载体记录萃取、混合油蒸馏、脱溶、粕干燥和溶剂回收的电力与热能。

- 选定流：Electricity, steam, and fuel by carrier（候选；Tiangong UUID 未解析）
- 流属性/单位：Energy / MJ
- 数量规则：实测的各能源载体用量换算为 MJ，并保留换算系数
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每发运 1 kg 粗椰子油
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_by_process`
- 来源：`eu-jrc-fdm-bref-2019`
- 数量范围：暂定溶剂路线能源 QA 校验范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：15
  - 单位：MJ/kg 粗椰子油
  - 基准：每发运 1 kg 粗椰子油的合计已报告能源载体
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 溶剂路线工艺水（`solvent_route_water`）

将净补充水和工艺水与循环冷却水分开记录。

- 选定流：Process water（候选；Tiangong UUID 未解析）
- 流属性/单位：Mass / kg
- 数量规则：跨越设施边界的实测净补充水
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每发运 1 kg 粗椰子油
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_water_balance`
- 来源：`eu-jrc-fdm-bref-2019`
- 数量范围：暂定溶剂路线用水 QA 校验范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：5
  - 单位：kg/kg 粗椰子油
  - 基准：每发运 1 kg 粗椰子油的净补充水
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 溶剂萃取粗椰子油中间流（`solvent_crude_oil_output`）

回收的粗油作为内部中间流转往最终澄清或调和。

- 选定流：粗椰子油 `8b18e824-f237-4a70-9127-ddabde706d15`
- 流属性/单位：Mass / kg
- 数量规则：转出的实测净回收油量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每单位溶剂回收过程输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_mass_quality`

###### 脱溶椰子粕或饼（`desolventised_meal_output`）

离开溶剂回收过程的粕或饼，仅在符合声明的规范且具有有益去向时作为共产品报告；否则归类为废物。

- 选定流：Desolventised coconut meal or cake（候选；Tiangong UUID 未解析）
- 流属性/单位：Mass / kg
- 数量规则：按规范和去向实测的质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每发运 1 kg 粗椰子油
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_mass_quality`
- 来源：`eu-jrc-fdm-bref-2019`
- 数量范围：暂定脱溶粕 QA 校验范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0.3
  - 上限：2.5
  - 单位：kg/kg 粗椰子油
  - 基准：每发运 1 kg 粗椰子油的脱溶粕或饼
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

###### 溶剂路线废水（`solvent_route_wastewater`）

来自溶剂-水分离、设备清洗及相关路线作业的废水，在处理或转移前的排放点计量。

- 选定流：Wastewater, solvent-route（候选；Tiangong UUID 未解析）
- 流属性/单位：Mass / kg
- 数量规则：实测排放质量，或实测体积并声明密度
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每发运 1 kg 粗椰子油
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_water_balance`
- 来源：`eu-jrc-fdm-bref-2019`
- 数量范围：暂定溶剂路线废水 QA 校验范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：2
  - 单位：kg/kg 粗椰子油
  - 基准：每发运 1 kg 粗椰子油的废水
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

###### 排入空气的溶剂（`solvent_release_air`）

无组织和有组织排放通过测量或经核对的溶剂平衡进行量化；不得将全部补充溶剂等同于空气排放。

- 选定流：Extraction solvent, to air（候选；Tiangong UUID 未解析）
- 流属性/单位：Mass / kg
- 数量规则：按排放路径实测，或采用核对后的溶剂平衡结果
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每发运 1 kg 粗椰子油
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_solvent_balance`
- 来源：`eu-jrc-fdm-bref-2019`
- 数量范围：暂定溶剂排放 QA 校验范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.05
  - 单位：kg/kg 粗椰子油
  - 基准：每发运 1 kg 粗椰子油排入空气的溶剂
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

### 过程：粗油澄清与储存（`crude_oil_clarification_storage`）

#### 输入

##### 产品流

###### 粗油中间流（`crude_oil_intermediate_input`）

压榨粗油和适用时的溶剂萃取粗油在澄清前进行核对。

- 选定流：粗椰子油 `8b18e824-f237-4a70-9127-ddabde706d15`
- 流属性/单位：Mass / kg
- 数量规则：进入澄清过程的实测合并质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每单位澄清过程输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_mass_quality`

###### 澄清电力（`clarification_electricity`）

记录批次或期间内泵送、沉降或离心、过滤和储存所用电力。

- 选定流：Electricity, supplied（候选；Tiangong UUID 未解析）
- 流属性/单位：Energy / kWh
- 数量规则：实测或分配的净外购电力
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每发运 1 kg 粗椰子油
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_by_process`
- 数量范围：暂定澄清电力 QA 校验范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.5
  - 单位：kWh/kg 粗椰子油
  - 基准：每发运 1 kg 粗椰子油的澄清与储存电力
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 助滤剂及其他澄清耗材（`filter_aid_input`）

助滤剂或其他耗材跨越前景边界时予以记录。

- 选定流：Filter aid, unspecified（候选；Tiangong UUID 未解析）
- 流属性/单位：Mass / kg
- 数量规则：按材料种类实测的领用质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每发运 1 kg 粗椰子油
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_mass_quality`
- 数量范围：暂定助滤剂 QA 校验范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.05
  - 单位：kg/kg 粗椰子油
  - 基准：每发运 1 kg 粗椰子油的助滤剂
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 油厂门口的粗椰子油（`crude_coconut_oil_output`）

这是定量参考流，即澄清或过滤并储存后发运的未精炼粗椰子油净质量。

- 选定流：粗椰子油 `8b18e824-f237-4a70-9127-ddabde706d15`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：实测批次归一化后的固定参考产出
- 数值来源模式：固定值（`fixed_value`）
- 适用范围：不适用（`not_applicable`）
- 归一化基准：发运的 1 kg 粗椰子油
- 基准类型：参考流（`reference_flow`）
- 证据类型：身份参考（`identity_reference`）
- 来源：`codex-cxs-210-1999`

##### 废物流

###### 澄清固体和废过滤材料（`clarification_residue`）

截留固体、含油滤饼和废过滤介质按处理或回收去向报告。

- 选定流：Oil-bearing clarification residue（候选；Tiangong UUID 未解析）
- 流属性/单位：Mass / kg
- 数量规则：按去向实测的残渣质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每发运 1 kg 粗椰子油
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_residuals_emissions`
- 数量范围：暂定澄清残渣 QA 校验范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.1
  - 单位：kg/kg 粗椰子油
  - 基准：每发运 1 kg 粗椰子油的澄清残渣
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_avoid_by_subdivision` | 共享过程和公用工程 | 首先通过过程细分、分项计量、批次追踪或其他物理上可辩护的方法，分离椰干预处理、压榨、可选溶剂回收和澄清，以避免分配。 | `iso-14044-2006`; `eu-pef-2021-2279` |
| `allocation_cake_meal` | 粗椰子油与可销售的压榨饼粕或脱溶粕 | 当细分无法解决联合过程时，优先采用有文件支持的物理因果关系。若无法证明物理因果关系，则采用代表性期间内一致的油厂门口场址特定净收入进行经济分配；披露价格、期间、货币、分配份额，以及对质量分配结果的敏感性。 | `iso-14044-2006`; `eu-pef-2021-2279` |
| `allocation_residual_status` | 拒收物、残渣、回收溶剂和废物 | 不得给予内部溶剂循环、内部返工或送去处置的材料共产品抵扣。仅当残余物符合声明的规范且具有记录充分的有益去向和价值时，才将其视为共产品。 | `iso-14044-2006`; `eu-jrc-fdm-bref-2019` |
| `allocation_shared_services` | 共享电力、蒸汽、水、处理和储存 | 尽可能按实测消耗分配共享服务；否则使用有文件支持的因果驱动因子，例如运行时间、吞吐量、热负荷或排放负荷，并对重要的共享服务分配进行敏感性测试。 | `iso-14044-2006`; `eu-pef-2021-2279` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_material_mass_quality` | all mapped processes | copra, intermediates, oil, cake or meal, filter aid | weighbridge tickets, scale logs, tank gauges, transfer records, laboratory certificates | timestamp; lot_id; material_id; gross_mass; tare_mass; net_mass; moisture; impurities; FFA_or_acid_value; origin; destination; instrument_id | 采用经校准的称重或储罐计量，并进行代表性取样及声明测试方法 | kg; mass %; declared test unit | 每次接收、转移和发运批次 | 至少一个代表性生产年度，或完整的声明生产活动 | 每个纳入的油厂和生产线 | 按批次核对期初库存 + 接收 - 期末库存 - 转移，并归一化到净发运油 | 校准记录；取样计划；实验室方法；库存核对 |
| `cp_energy_by_process` | all mapped processes | electricity, fuel, and purchased steam | meters, fuel invoices, boiler logs, run-time records | timestamp; process_id; carrier; meter_start; meter_end; fuel_mass_or_volume; heating_value; steam_mass; allocation_driver | 优先分项计量；否则依据共享电表进行有文件支持的工程分配 | kWh; MJ; kg carrier | 每月及每次生产活动 | 与产品产出相同期间 | 每条纳入的生产线；声明共享公用工程边界 | 扣除输出，保留换算系数，并按因果驱动因子分配共享公用工程 | 电表校准；发票；燃料规范；分配工作表 |
| `cp_water_balance` | solvent_oil_recovery and cleaning operations | make-up water, recirculated water, wastewater | water meters, tank records, discharge meters | timestamp; source; make_up_volume; recirculated_volume; discharge_volume; density; treatment_destination | 计量跨越边界的水，并单独识别内部循环 | m3; kg | 每月及每次生产活动 | 与产品产出相同期间 | 每个纳入的油厂和排放点 | 分别归一化净补充水和排水量；内部循环作为备忘信息 | 水表校准；水平衡核对；排放记录 |
| `cp_solvent_balance` | solvent_oil_recovery | make-up solvent, recovered solvent, transfers, destruction, releases | purchase records, tank levels, recovery meters, stack tests, leak records | solvent_identity; opening_stock; receipts; closing_stock; recovered_recycle; offsite_transfer; destroyed_mass; measured_air_release; unexplained_loss | 采用封闭的生产活动质量平衡，并补充排放路径实测数据 | kg | 每次生产活动和每月核对 | 完整的溶剂路线运行期间 | 每套萃取和回收系统 | 核对全部溶剂投入、库存、循环、转移、销毁和排放；不得将全部补充量归入空气 | 经校准的储罐或流量计；采购记录；泄漏调查；烟道测试报告；签署的平衡表 |
| `cp_residuals_emissions` | all mapped processes | rejects, wastes, residues, dust, direct releases | waste tickets, scales, stack tests, exhaust logs, treatment manifests | timestamp; row_id; mass; concentration; exhaust_flow; operating_time; destination; treatment; recovery_status | 对残余物称重；适用时按实测浓度 × 流量 × 运行时间计算排放 | kg; mg/Nm3; Nm3/h; h | 每次外运和监测事件 | 与产品产出相同期间 | 每个纳入的排放源和去向 | 按 row 和去向汇总，再归一化到发运油 | 校准；实验室报告；监管链或废物转移联单 |
| `cp_coproduct_value` | mechanical_oil_extraction and solvent_oil_recovery | allocation drivers for oil, cake, and meal | sales invoices, transfer prices, quantity records | product_id; quantity; specification; net_price; currency; date; destination; internal_transfer_basis | 收集可比的油厂门口价值，并扣除可分离的下游搬运 | kg; currency/kg | 每笔交易；按月汇总 | 代表性 12 个月期间或有依据的生产活动 | 每个纳入的油厂 | 使用统一货币和价格基准计算按数量加权的净价值 | 发票样本；货币换算；价格基准审查 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | 所有清单 row | 归一化数量 = 期间或批次数量 / 相同边界和期间发运的 `crude_coconut_oil_output` 净 kg | row 数量；粗油净产出 | 每 1 kg 粗椰子油的数量 | `iso-14044-2006` |
| `calc_material_balance` | 各过程及全厂 | 期初库存 + 外部接收 + 内部转入 = 期末库存 + 外部产出 + 内部转出 + 实测废物和排放 + 已记录的平衡差；内部转移在全厂层面相互抵消 | 质量和库存记录 | 过程与全厂平衡，以及未解释差额 | `iso-14044-2006` |
| `calc_direct_air_release` | 实测粉尘或溶剂排放 | 排放质量 = 浓度 × 干基或湿基排气流量 × 运行时间，并记录参比条件和单位换算 | 浓度；排气流量；运行时间 | 按路径计的 kg 排放量 | `eu-jrc-fdm-bref-2019` |
| `calc_solvent_reconciliation` | 溶剂路线 | 未解释的溶剂损失 = 期初库存 + 接收 - 期末库存 - 场外转移 - 记录的销毁量；分别报告空气、水和废物中的实测路径并进行核对，不得强制将全部差额归入空气 | 溶剂平衡字段 | 按去向计的 kg 溶剂和未解释差额 | `eu-jrc-fdm-bref-2019` |
| `calc_economic_allocation` | 联产油和可销售饼粕 | 产品价值份额 = 数量 × 一致的油厂门口净价格 / 所有共产品的数量 × 净价格之和；仅在穷尽细分后应用份额 | 产品数量；可比价格；货币基准 | 合计为 1 的分配因子 | `iso-14044-2006`; `eu-pef-2021-2279` |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_product_identity` | 参考产品和椰干 | 保留批次关联、作为椰子仁或椰干的植物来源、萃取路线、未精炼状态，以及所声明的水分、杂质、游离脂肪酸或酸值测试基准。 | 接收记录；产品证书；实验室方法；`codex-cxs-210-1999` |
| `dq_temporal` | 前景清单 | 使用至少一个代表性生产年度；仅季节性或批次生产可使用更短的完整生产活动，且须披露日期、吞吐量、停机时间和代表性依据。 | 有日期的计量、发票、批次记录和生产日志 |
| `dq_geography_technology` | 前景和上游数据 | 识别油厂位置、椰干来源、萃取技术、溶剂使用、能源载体和污染控制；依据这些特征说明上游数据集的适用性。 | 场址元数据；供应商声明；设备清单；数据集选择记录 |
| `dq_completeness` | 材料、能源、水、废物和排放 | 核对全部过程图，并报告缺失、估算或分配的流。溶剂、直接排放、废水和危险废物不得仅因质量小而遗漏。 | 过程平衡；公用工程核对；溶剂平衡；废物联单；`eu-jrc-fdm-bref-2019` |
| `dq_measurement` | 采集的前景数值 | 识别仪器、校准状态、取样方法、测试方法、频率和任何数据替代；保留原始记录和换算系数。 | 校准证书；取样计划；实验室报告；计算工作簿 |
| `dq_estimate_replacement` | 每个暂定 QA 范围 | 将 `reasoned_estimate` 范围仅作为筛选标志。转为 active 状态前，以经审查的椰子油前景证据替换或确认；数值超出校验范围时须调查，而不是自动拒绝。 | 审查记录；场址证据；调查记录 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validate_reference_identity` | 参考流 | 要求净产出恰为 1 kg Tiangong 流 `8b18e824-f237-4a70-9127-ddabde706d15`，流属性为 Mass `93a60a56-a3c8-11da-a746-0800200b9a66`，单位组为 `93a60a57-a4c8-11da-a746-0800200c9a66`，并包含全部必需限定信息。 | `codex-cxs-210-1999` |
| `validate_scope_route` | 过程覆盖 | 要求包括全部 required 过程，并仅在采用溶剂萃取时要求 `solvent_oil_recovery`；除非精炼被单独计量或分配给下游数据集，否则拒绝将其纳入粗油单元过程。 | `eu-jrc-fdm-bref-2019` |
| `validate_internal_transfers` | 过程连接 | 要求预处理椰干、送往萃取的饼粕和粗油中间投入在同一批次或期间与各自对应产出相符。 | `iso-14044-2006` |
| `validate_material_balance` | 各过程及全厂 | 要求披露质量平衡差额并调查未解释损失；不得通过改变参考产出或将差额归入空气来默默闭合平衡。 | `iso-14044-2006` |
| `validate_energy_water` | 公用工程 | 要求各能源载体、净补充水、内部循环备忘流和废水排放采用一致边界与换算，且不得重复计算。 | `eu-jrc-fdm-bref-2019` |
| `validate_solvent_route` | 条件性溶剂路线 | 要求溶剂身份和经核对的平衡，覆盖补充量、库存、回收循环、转移、销毁和实测排放；纳入该路线时遗漏这些信息属于错误。 | `eu-jrc-fdm-bref-2019` |
| `validate_allocation` | 联产品与共享服务 | 只要细分未能完全避免分配，就要求披露分配层级、驱动因子、数值、期间、因子合计和敏感性结果。 | `iso-14044-2006`; `eu-pef-2021-2279` |
| `validate_provisional_ranges` | QA 校验范围 | 将超出暂定 `reasoned_estimate` QA 校验范围的数值标记为需审查。不得用范围中点替代实测值，也不得将该范围作为允许的合规区间。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 油厂门口粗椰子油的前景生产数据集 |
| downstream_use | `secondary_dataset`；经独立方法学和数据质量审查后可作为 `background_dataset` |
| allowed_use | 摇篮到大门或更后续的生命周期模型；模型须按目标与范围添加有代表性的上游椰干和公用工程数据集，以及下游精炼、运输、使用和生命末期 |
| excluded_use | 直接表示初榨或精炼椰子油；直接作消费者产品声明；替代椰子种植或椰干干燥；未经适用审查的公开比较声明 |
| required_metadata | PCR id；参考流 UUID 与限定信息；油厂和椰干地理范围；生产期间；萃取路线；所含过程；上游数据集；公用工程载体；分配方法与因子；共产品状态；质量测试方法 |
| required_quality_disclosure | 前景覆盖；实测、计算、分配和估算份额；质量与溶剂平衡差额；缺失 UUID；暂定范围使用；数据时效；实验室和计量质量；排除项和敏感性结果 |
| update_trigger | 椰干来源或预处理、萃取技术、溶剂、能源系统、共产品市场、分配驱动因子、污染控制、产品规范或重要前景数值发生变化；或证据表明暂定校验范围已不适用 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `codex-cxs-210-1999` | standard | Codex Alimentarius，CXS 210-1999，Standard for Named Vegetable Oils，2026 年修订，https://www.fao.org/fao-who-codexalimentarius/sh-proxy/en/?lnk=1&url=https%253A%252F%252Fworkspace.fao.org%252Fsites%252Fcodex%252FStandards%252FCXS%2B210-1999%252FCXS_210e.pdf（检索日期 2026-08-11） | 椰子油身份、粗油状态和质量规范背景 |
| `eu-jrc-fdm-bref-2019` | official_guidance | European Commission Joint Research Centre，Best Available Techniques (BAT) Reference Document for the Food, Drink and Milk Industries，2019，https://eippcb.jrc.ec.europa.eu/sites/default/files/2020-01/JRC118627_FDM_Bref_2019_published.pdf（检索日期 2026-08-11） | 粗植物油工艺分解、与精炼的边界、公用工程、溶剂路线、排放、废物和共产品 |
| `iso-14044-2006` | standard | ISO 14044:2006，Environmental management — Life cycle assessment — Requirements and guidelines，2022 年确认继续有效，https://www.iso.org/standard/38498.html（检索日期 2026-08-11） | LCA 范围、清单一致性、分配层级、报告和审查 |
| `eu-pef-2021-2279` | official_guidance | European Commission Recommendation (EU) 2021/2279 on the use of Environmental Footprint methods，https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32021H2279（检索日期 2026-08-11） | 分配披露、数据质量、代表性和敏感性要求 |
