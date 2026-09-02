---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.sunflower-seed-and-safflower-seed-oil-crude
language: zh-CN
status: candidate
content_maturity: authored_methodology
translation_status: aligned
sync_with: pcr.en-US.md
---

# 葵花籽和红花籽粗油

## 1. 范围与适用性

本 PCR 适用于以葵花籽（*Helianthus annuus* L.）或红花籽（*Carthamus tinctorius* L.）生产、并交付至油厂大门的粗油前景数据包。范围包括油籽接收与制备、适用时的机械压榨、适用时的溶剂萃取与溶剂回收、粗油澄清、发运前厂内储存、共产品处理、直接排放，以及可归属于该粗油生产批次的厂内废物管理。

当明确披露油籽物种、品种或油型、提取路线、溶剂使用、脱胶状态和粗油质量时，本 PCR 可用于常规型、高油酸型及其他已声明的葵花籽或红花籽品种。不得将葵花籽与红花籽生产合并为未披露构成的平均数据。

油籽种植及运至油厂的活动由上游数据集表示，不在油厂前景过程中重复编写。粗油生产后的中和、脱色、脱臭、冬化以及零售食用油生产均不包括在内。包装、零售、使用和生命周期末端亦不包括在内。研究可另行增加油厂大门后的运输，但该运输不属于本参考流。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.sunflower-seed-and-safflower-seed-oil-crude |
| classification_refs | CPC 3.0 `21631`，葵花籽和红花籽油，原油 |
| covered_products | 葵花籽粗油；红花籽粗油；机械压榨粗油；溶剂萃取粗油；已声明预压榨加溶剂萃取路线的粗油 |
| excluded_products | 精炼、脱色、脱臭、冬化、氢化、酯交换、调和、配制或零售包装油；其他油籽粗油；生物柴油及其他化学衍生物 |
| representative_product | 油厂大门处分别识别的 1 kg 葵花籽粗油或红花籽粗油 |
| production_route | 接收油籽制备后，按声明路线进行机械压榨、溶剂萃取或预压榨/溶剂联合萃取，并在适用时脱除溶剂，最后澄清粗油 |
| market_state | 油厂大门处、下游精炼或零售包装之前的未精炼散装粗植物油 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 在油厂大门提供作为中间油品的葵花籽粗油或红花籽粗油 |
| How much | 1 kg |
| How well | 识别物种与油型；证明其粗制且未精炼；声明提取路线、溶剂使用、脱胶状态和质量基准 |
| How long or cycle | 一个生产批次或生产期；不赋予使用期功能 |
| reference_flow_link | 在声明油厂大门处 1 kg 符合限定条件的参考产品流 |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 kg |
| 参考产品流 | 葵花籽和红花籽油，原油 `e48ecaca-7bfe-427a-a117-7eeeb8253565` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 油籽物种；品种或油型；提取路线；所用溶剂及回收安排；脱胶状态；粗油质量规范；水分与挥发物基准；地理；生产期；油厂大门；分配方法 |

构建前景数据包时，`必需限定信息` 中列出的信息应在数据集元数据、过程说明、参考流备注、产品说明或等效数据包字段中明确声明。缺失必需限定信息的数据包视为参考流定义不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | 参考粗油 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 参考流应表示油厂大门处合格粗油的净质量；排除容器、运输车辆、游离水和单独计量的沉降固体。 |
| `species_route_separation` | 油籽与粗油生产记录 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 葵花籽和红花籽批次以及差异实质性的机械或溶剂路线应分别记录；只有披露生产量加权方法后方可聚合。 |
| `moisture_basis` | 接收与制备油籽 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 每批次记录实测质量与水分；比较油籽投入时换算至声明水分基准，不得把湿基质量默认为干基质量。 |
| `energy_conversion` | 外购电力与热能 | energy | kWh 和 MJ | 保留仪表原始单位与换算因子；1 kWh 等于 3.6 MJ。在计算综合能耗指标前分别报告电力与热能。 |
| `hexane_loss_basis` | 溶剂路线 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg/t 清洁油籽 | 用经核实的补充量、库存变化、回收入库量以及随产品、废物、水或空气离开的溶剂计算年度或批次己烷损失，并按清洁油籽处理吨数归一化。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 油厂大门处分别识别的葵花籽或红花籽批次，并声明质量、水分、来源和油型 |
| starting_condition_role | 上游农业数据集连接点和前景油籽接收控制点 |
| product_classification_scope | CPC 3.0 `21631`，限葵花籽和红花籽粗油 |
| recursive_input_rule | 与本类别相同的外购粗油如与本厂产出混合，应按其自身数据集及占比记录为上游产品投入，不在前景油厂模型内递归重放其生产过程 |
| upstream_dataset_requirement | 与物种、地理、时期和农场大门相匹配的葵花籽或红花籽生产数据集；当运输纳入研究范围时还应包括运至声明油厂大门的运输 |
| disclosure | 披露油籽物种与油型、油籽水分基准、路线、溶剂使用与回收、脱胶状态、已纳入制备步骤、粗油质量基准、共产品、分配方法、地理、时期及任何排除的共享公用工程 |

| rule_id | 适用对象 | 规则 | 来源 |
| --- | --- | --- | --- |
| `boundary_required_operations` | 所有前景油厂路线 | 纳入油籽接收、称量与质量检查、清理与制备、路线特定的提油、粗油澄清、发运前厂内储存，以及可归属的公用工程、共产品、残余物、废水和直接排放。 | `fao-ebrd-sunflower-oils-2010`; `eu-fdm-bat-2019-2031` |
| `boundary_solvent_route` | 溶剂萃取或预压榨/溶剂联合路线 | 纳入溶剂投入、回收与再用、油和粕的脱溶、补充溶剂、油/粕/水/废物中的溶剂以及有组织或无组织损失；不得把溶剂路线表示成仅机械压榨。 | `fao-ebrd-sunflower-oils-2010`; `us-epa-ap42-9-11-1-1995`; `eu-fdm-bat-2019-2031` |
| `boundary_excluded_operations` | 上下游阶段 | 油籽种植不计入油厂前景操作，而以其上游数据集连接；中和、脱色、脱臭、冬化、零售包装、分销、使用和生命周期末端不计入本粗油参考流。 | `fao-ebrd-sunflower-oils-2010`; `us-epa-ap42-9-11-1-1995` |
| `boundary_shared_services` | 油厂共享公用工程与处理系统 | 只有在可审计仪表、工程驱动因子或分配规则能够连接至声明批次时，才纳入共享电力、蒸汽、水、储存、除尘、溶剂回收和废水处理的实测份额。 | `eu-fdm-bat-2019-2031` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| seed_receipt_and_preparation | 油籽接收与制备 | required |  | 前景制备 | 制备后离开该过程的油籽 kg |
| crude_oil_extraction_and_clarification | 粗油提取与澄清 | required | 从声明生产路线选择对应的压榨和/或溶剂操作 | 前景生产 | 油厂大门处 1 kg 合格粗油 |

### 过程：油籽接收与制备（`seed_receipt_and_preparation`）

#### 输入

##### 产品流

###### 接收的葵花籽或红花籽（`received_oilseed`）

分别记录进入油厂制备的油籽批次。选定流必须匹配所声明的物种和油型，不假定存在合并的葵花籽/红花籽流。

- 选定流：选择与声明批次匹配的公开 Tiangong 葵花籽或红花籽产品流
- 流属性/单位：Mass / kg
- 数量规则：按实测水分记录接收油籽质量，与库存变化核对后按合格粗油产出归一化
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：油厂大门处每 1 kg 合格粗油
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_received_oilseed`
- 来源：
- 数量范围：葵花籽路线清洁油籽换算基准
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：3.34
  - 上限：4.06
  - 单位：kg 清洁葵花籽/kg 葵花籽粗油
  - 基准：FAO 对含油率 44% 葵花籽的溶剂萃取与压榨路线换算示例
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：外部来源（`external_source`）
  - 来源：`fao-ebrd-sunflower-oils-2010`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 送提取的制备油籽（`prepared_oilseed`）

记录清理、可选脱壳、破碎、调质和可选轧片后送往压榨或溶剂萃取的质量。该流是场址中间流，不是参考产品。

- 选定流：场址特定的制备后葵花籽或红花籽中间流
- 流属性/单位：Mass / kg
- 数量规则：制备后实测转移质量，并与分离物料和制备库存变化核对
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 接收油籽及每 1 kg 合格粗油产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_prepared_seed_mass`
- 来源：
- 数量范围：制备质量平衡筛查范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0.75
  - 上限：1.00
  - 单位：kg 制备油籽/kg 接收油籽
  - 基准：允许路线特定清理与可选脱壳的宽泛制备产出比例
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

###### 筛除物、杂质与无价值壳（`preparation_residues`）

只有在无预定共产品用途或经济价值时，才把去除的杂质、不合格油籽和壳记录为废物；否则相关部分应归类为产品共产品。

- 选定流：选择路线特定的制备残余物或废物流
- 流属性/单位：Mass / kg
- 数量规则：按去向实测分离残余物质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 接收油籽
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_coproduct_residue_mass`
- 来源：
- 数量范围：制备残余物筛查范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.25
  - 单位：kg/kg 接收油籽
  - 基准：包括葵花籽加工中报告的可选脱壳及其他制备副产物
  - 基准类型：过程输出（`process_output`）
  - 证据类型：外部来源（`external_source`）
  - 来源：`fao-ebrd-sunflower-oils-2010`

##### 基本流

###### 排放至空气的制备粉尘（`preparation_dust_to_air`）

记录油籽接收、清理、脱壳、破碎、调质和输送中通过末端治理后排放的粉尘。不得把已捕集粉尘再次报告为基本流排放。

- 选定流：选择与监测粒径和环境区室匹配的 Tiangong 颗粒物基本流
- 流属性/单位：Mass / kg
- 数量规则：烟道或无组织实测量，或活动量乘以有文件依据的场址排放因子与治理效率
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每吨接收油籽及每 1 kg 合格粗油产出
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_air_emissions`
- 来源：
- 数量范围：暂定治理后粉尘筛查估算
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0
  - 上限：1
  - 单位：kg/t 接收油籽
  - 基准：采用场址除尘后的宽泛、可替换首轮估算
  - 基准类型：过程输出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

### 过程：粗油提取与澄清（`crude_oil_extraction_and_clarification`）

#### 输入

##### 产品流

###### 制备油籽投入（`prepared_oilseed_input`）

从制备过程转入实测制备油籽，不改变物种、生产期、水分基准或路线身份。

- 选定流：场址特定的制备后葵花籽或红花籽中间流
- 流属性/单位：Mass / kg
- 数量规则：等于分配至该提取批次、经核对的制备油籽产出
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 合格粗油产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_prepared_seed_mass`
- 来源：
- 数量范围：制备油籽转移一致性检查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0.75
  - 上限：1.00
  - 单位：kg/kg 接收油籽
  - 基准：匹配制备过程的转移比例
  - 基准类型：过程输出（`process_output`）
  - 证据类型：方法公式（`method_formula`）
  - 来源：`fao-ebrd-sunflower-oils-2010`

###### 外购电力（`purchased_electricity`）

记录制备、压榨、输送、泵送、溶剂回收、澄清、污染治理及可归属储存的电力，并尽可能分表计量路线特定负荷。

- 选定流：选择与地理、电压和时期相匹配的电力供应流
- 流属性/单位：Energy / kWh
- 数量规则：实测电表用量扣除外送和无关负荷；共享负荷仅通过有文件依据的驱动因子分配
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格粗油产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_records`
- 来源：
- 数量范围：暂定粗油电力筛查估算
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0.05
  - 上限：1.10
  - 单位：kWh/kg 粗油
  - 基准：覆盖油厂配置的宽泛可替换范围；不是综合压榨与精炼 BAT 范围
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 热能与蒸汽（`thermal_energy`）

记录用于调质、压榨、溶剂蒸馏、脱溶、干燥及其他可归属操作的燃料热或外购热/蒸汽。现场产热时还应记录燃料投入和直接燃烧排放。

- 选定流：选择与技术和地理相匹配的燃料、蒸汽或热流
- 流属性/单位：Energy / MJ
- 数量规则：实测燃料低位热值投入或外购热/蒸汽能量，并与电力分开
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格粗油产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_records`
- 来源：
- 数量范围：暂定热能筛查估算
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0
  - 上限：5
  - 单位：MJ/kg 粗油
  - 基准：路线敏感的宽泛可替换范围；只有已证明无加热且无可归属热公用工程时方可取零
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 补充己烷（`hexane_makeup`）

仅在使用己烷或含己烷萃取溶剂时纳入。记录外购补充量和生产期库存变化；内部回收再用溶剂不得重复计作新增外部投入。

- 选定流：选择化学身份经核实的公开 Tiangong 己烷产品流
- 流属性/单位：Mass / kg
- 数量规则：外购补充量加期初库存减期末库存，并校正转移与库存变化
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每吨清洁油籽及每 1 kg 合格粗油产出
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_hexane_balance`
- 来源：
- 数量范围：葵花籽路线己烷损失 BAT-AEL
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0.2
  - 上限：0.7
  - 单位：kg/t 清洁葵花籽
  - 基准：每吨清洁葵花籽的年度平均己烷总消耗；仅用于 BAT 范围内的溶剂路线
  - 基准类型：过程输出（`process_output`）
  - 证据类型：外部来源（`external_source`）
  - 来源：`eu-fdm-bat-2019-2031`

###### 工艺与清洗用水（`process_water`）

记录调质、溶剂回收、澄清、设备清洗和排放治理中跨越前景边界的水；未受污染的冷却水应单独识别。

- 选定流：选择场址特定工艺供水流
- 流属性/单位：Volume / m3
- 数量规则：实测取水扣除单独排放的未受污染水；报告内部回用水但不得重复计作外部供水
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每吨合格粗油产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_water_wastewater`
- 来源：
- 数量范围：暂定粗油用水筛查估算
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0
  - 上限：1.0
  - 单位：m3/t 粗油
  - 基准：仅用于粗油操作的宽泛可替换范围；范围不匹配时不得套用综合压榨与精炼 BAT 范围
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 合格葵花籽或红花籽粗油（`crude_oil_reference_output`）

参考产出在完成路线特定脱溶与澄清后、下游精炼前，于声明油厂大门实测；不同物种的生产应分别报告。

- 选定流：葵花籽和红花籽油，原油 `e48ecaca-7bfe-427a-a117-7eeeb8253565`
- 流属性/单位：Mass / kg
- 数量规则：实测合格粗油净质量；所有交换均归一化为恰好 1 kg 参考产出
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：油厂大门处 1 kg 合格粗油
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_crude_oil_output_quality`
- 来源：
- 数量范围：参考产出恒等式
  - 范围角色：允许范围（`allowed_range`）
  - 下限：1
  - 上限：1
  - 单位：kg
  - 基准：归一化 PCR 参考产出
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：方法公式（`method_formula`）
  - 来源：`codex-cxs-210-1999-2026`

###### 压榨饼、萃取粕及有价值壳共产品（`oilseed_coproducts`）

将每种可销售或有意使用的饼、粕或壳分别记录为产品流，并记录水分、残油、去向和市场价值。不得用豆粕流替代葵花籽粕或红花籽粕。

- 选定流：选择与物种和产品状态相匹配的压榨饼、粕或壳产品流
- 流属性/单位：Mass / kg
- 数量规则：按产品与去向分别实测声明水分下的共产品质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格粗油产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_coproduct_residue_mass`
- 来源：
- 数量范围：葵花籽粕产出基准
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0.88
  - 上限：1.83
  - 单位：kg 粕/kg 葵花籽粗油
  - 基准：FAO 一般产率说明与路线换算示例；使用前应核对实际水分和路线
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：外部来源（`external_source`）
  - 来源：`fao-ebrd-sunflower-oils-2010`

##### 废物流

###### 澄清固体与无价值过程残余物（`clarification_residues`）

按处理路线记录滤饼、沉降固体、废过滤助剂、污染吸附材料和其他无价值残余物。具有预定饲料、燃料或材料用途的残余物属于共产品而非废物。

- 选定流：选择与处理路线匹配的残余物或废物流
- 流属性/单位：Mass / kg
- 数量规则：实测离开过程的残余物质量，扣除返回过程的回收油
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格粗油产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_coproduct_residue_mass`
- 来源：
- 数量范围：暂定澄清残余物筛查估算
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0
  - 上限：0.05
  - 单位：kg/kg 粗油
  - 基准：澄清残余物的宽泛可替换首轮估算
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 工艺废水（`process_wastewater`）

记录送往厂内或厂外处理的污染水。单独排放的未受污染冷却水不计入本行，并应另行披露。

- 选定流：选择与组成和处理路线相匹配的废水流
- 流属性/单位：Volume / m3
- 数量规则：按去向实测排水量，并校正内部回用与库存变化
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每吨合格粗油产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_water_wastewater`
- 来源：
- 数量范围：暂定粗油废水筛查估算
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0
  - 上限：1.0
  - 单位：m3/t 粗油
  - 基准：仅用于粗油操作的宽泛可替换范围
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

###### 排放至空气的己烷（`hexane_to_air`）

仅在溶剂路线纳入。将实测或计算的有组织与无组织排放同生产期溶剂平衡核对；当有实测溶剂随油、粕、水或废物离开时，不得假定全部补充溶剂均进入空气。

- 选定流：选择化学身份和环境区室经核实的 Tiangong 己烷空气排放基本流
- 流属性/单位：Mass / kg
- 数量规则：实测排放加有文件依据的无组织估算，并同己烷总平衡核对
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每吨清洁油籽及每 1 kg 合格粗油产出
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_hexane_balance`
- 来源：
- 数量范围：葵花籽路线己烷总损失 BAT-AEL
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0.2
  - 上限：0.7
  - 单位：kg/t 清洁葵花籽
  - 基准：年度平均己烷总损失；空气排放是核对后的空气份额，而不是总损失的自动复制
  - 基准类型：过程输出（`process_output`）
  - 证据类型：外部来源（`external_source`）
  - 来源：`eu-fdm-bat-2019-2031`

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | 来源 |
| --- | --- | --- | --- |
| `allocation_avoid` | 可独立计量的制备、压榨、萃取、澄清和处理操作 | 只要操作或公用工程可以分开，就通过细分和直接计量避免分配；不得用全厂收入键分配单独计量的路线。 | `eu-pef-2021-2279` |
| `allocation_coproducts` | 同一不可分生产期的粗油、压榨饼、萃取粕和有价值壳 | 细分不可行后，只有当物理关系代表投入与共产品功能之间经核实的因果关系时才使用该关系；否则按油厂大门处同期相对经济价值分配剩余共享负荷，并报告质量分配敏感性结果。 | `eu-pef-2021-2279`; `fao-ebrd-sunflower-oils-2010` |
| `allocation_residue_status` | 壳、筛除物、澄清固体、废过滤助剂和废水 | 按预定用途、法律地位和经济价值判断产品、共产品或废物状态。将废物处理分配给产生过程；没有经验支持的替代情景时不得给予避免产品信用。 | `eu-pef-2021-2279`; `eu-fdm-bat-2019-2031` |
| `allocation_documentation` | 每项多功能或共享操作 | 保留未分配数量、共产品质量与水分、价格与币种、价格时期、分配因子、排除流和敏感性结果，使分配可复现且因子之和为一。 | `eu-pef-2021-2279` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_received_oilseed` | seed_receipt_and_preparation | 接收油籽 | 地磅与批次质量记录 | 批次 id；物种；品种/油型；来源；毛重；皮重；净重；水分；损伤/杂质；接收时间 | 校准地磅加代表性批次取样 | kg；% | 每个接收批次 | 完整声明生产期 | 服务该生产期的所有接收点 | 汇总合格批次净重；单列拒收批次；报告生产量加权水分 | 秤校准；取样程序；批次证书；库存核对 |
| `cp_prepared_seed_mass` | seed_receipt_and_preparation | 制备油籽与分离制备物料 | 转移秤与制备日志 | 生产期 id；制备路线；投入质量；产出质量；壳；筛除物；水分；库存变化 | 校准皮带秤、料斗秤或批次质量核对 | kg；% | 每批次或连续班次汇总 | 完整声明生产期 | 服务该生产期的所有制备线 | 投入加期初库存减产出与期末库存；披露水分基准后归一化 | 校准；批次日志；质量平衡闭合 |
| `cp_energy_records` | crude_oil_extraction_and_clarification | 电力、燃料、热与蒸汽 | 仪表、账单和燃料库存记录 | 仪表 id；期初/期末读数；燃料量；热值；蒸汽质量/焓；外送；共享负荷驱动因子；停机 | 分表读数或经核对的采购与库存记录 | kWh；MJ；kg 燃料 | 连续或每班次；每月核对 | 覆盖生产期的所有月份 | 服务该生产期的全部装置 | 扣除外送与无关负荷；按有文件依据因子换算；共享负荷仅按可审计驱动因子分配 | 仪表校准；账单；燃料证书；核对记录 |
| `cp_hexane_balance` | crude_oil_extraction_and_clarification | 己烷补充、回收与损失 | 采购、储罐、回收、产品、废水、废物与排放记录 | 溶剂组成；采购；期初/期末库存；转移；回收体积；密度/温度；油/粕/水/废物中溶剂；有组织/无组织排放 | 校准储罐/仪表和分析测量支持的质量平衡 | kg | 每日运行记录；生产期和年度核对 | 完整声明生产期及年度核对期间 | 范围内全部溶剂萃取线 | 按实测温度/密度换算体积；总投入减回收期末库存和已量化输出等于未解析损失；单独报告空气份额 | 储罐校准；采购记录；实验室结果；泄漏/排口监测；闭合声明 |
| `cp_water_wastewater` | crude_oil_extraction_and_clarification | 工艺水与废水 | 水表与排放记录 | 取水；回用；分流冷却水；排放体积；去向；COD/TOC；TSS；油脂；pH；温度 | 相关排口的校准仪表和代表性取样 | m3；mg/L；pH | 连续计量；按许可或监测计划取样 | 完整声明生产期 | 全部相关取水与排放点 | 不重复计算回用水；按路线报告直接、间接及单独排放的未污染水 | 校准；样品交接链；实验室资质；排放核对 |
| `cp_crude_oil_output_quality` | crude_oil_extraction_and_clarification | 合格粗油产出 | 罐计量/秤、发运与实验室记录 | 物种；油型；提取路线；批次；净质量；水分/挥发物；不溶杂质；密度；质量检验；脱胶状态；发运时间 | 校准储罐/秤测量和代表性实验室检验 | kg；%；g/ml | 每个罐批与发运批 | 完整声明生产期 | 范围内全部粗油储罐与发运点 | 仅汇总符合声明粗油身份的批次；所有交换按合格净质量归一化 | 校准；实验室方法与结果；批次放行；发运核对 |
| `cp_coproduct_residue_mass` | seed_receipt_and_preparation; crude_oil_extraction_and_clarification | 共产品、壳、筛除物、粕、饼和残余物 | 秤、库存、发运和废物转移记录 | 物料 id；产品/废物状态；质量；水分；残油；去向；价格；币种；处置/处理 | 校准秤加库存与发运核对 | kg；%；币种/kg | 每批次或发运批 | 完整声明生产期 | 全部制备、提取、储存和废物交接点 | 按物料、水分基准、状态和去向聚合；不得合并有价值产品与废物 | 校准；销售发票；废物联单；库存闭合 |
| `cp_air_emissions` | seed_receipt_and_preparation; crude_oil_extraction_and_clarification | 粉尘与路线特定空气排放 | 烟道检测、连续监测、泄漏调查和运行小时记录 | 污染物/流；区室；浓度；流量；运行时间；治理设备；效率；无组织方法 | 适用标准测量或有文件依据的活动因子计算 | kg；mg/Nm3 | 按许可/监测计划及重大变更后 | 代表性正常运行并披露异常事件 | 全部相关排口、无组织源与治理设备 | 按实测浓度、气量和时间计算质量排放；另加无组织估算；不重复计算捕集物 | 检测报告；仪器校准；运行日志；治理设备记录 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_seed_input` | 接收油籽 | 分配至生产期的合格接收油籽 kg / 合格粗油 kg | `cp_received_oilseed`; `cp_crude_oil_output_quality` | kg 接收油籽/kg 粗油 | `fao-ebrd-sunflower-oils-2010` |
| `calc_preparation_balance` | 油籽制备 | 接收油籽 + 期初库存 = 制备油籽 + 分离共产品/残余物 + 期末库存 + 已量化损失 | `cp_received_oilseed`; `cp_prepared_seed_mass`; `cp_coproduct_residue_mass` | 制备质量平衡闭合与未解析差值 | `fao-ebrd-sunflower-oils-2010` |
| `calc_energy_intensity` | 电力与热能 | 可归属能源 / 合格粗油质量；电力与热能结果分别保留 | `cp_energy_records`; `cp_crude_oil_output_quality` | kWh/kg 油和 MJ/kg 油 | `eu-fdm-bat-2019-2031` |
| `calc_hexane_loss` | 溶剂路线 | （补充 + 期初库存 + 转入 - 期末库存 - 转出 - 回收库存变化）/ 清洁油籽吨数；核对油、粕、水、废物和空气份额 | `cp_hexane_balance`; `cp_prepared_seed_mass` | kg 己烷总损失/t 清洁油籽及 kg 空气己烷/t 清洁油籽 | `eu-fdm-bat-2019-2031`; `us-epa-ap42-9-11-1-1995` |
| `calc_water_intensity` | 工艺水与废水 | 外部供水量或废水排放量 / 合格粗油吨数，分别报告 | `cp_water_wastewater`; `cp_crude_oil_output_quality` | m3/t 粗油 | `eu-fdm-bat-2019-2031` |
| `calc_allocation_factors` | 不可分共享负荷 | 各共产品所选驱动因子值 / 驱动因子值总和；核实因子在舍入容差内合计为 1.000 | `cp_coproduct_residue_mass`; 分配决策记录 | 分配因子与质量分配敏感性因子 | `eu-pef-2021-2279` |
| `calc_extraction_mass_balance` | 提取与澄清 | 制备油籽 + 物料辅助品 = 粗油 + 共产品 + 废物 + 实测库存变化 + 已量化排放 + 未解析差值 | `cp_prepared_seed_mass`; `cp_crude_oil_output_quality`; `cp_coproduct_residue_mass`; `cp_hexane_balance`; `cp_water_wastewater`; `cp_air_emissions` | 生产期质量平衡闭合与未解析差值 | `fao-ebrd-sunflower-oils-2010`; `eu-fdm-bat-2019-2031` |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | 参考产品与油籽投入 | 每个纳入批次均应证明物种、油型、粗制/未精炼状态、路线、溶剂使用、脱胶状态和油厂大门。 | 批次证书；路线日志；实验室放行；参考流 UUID 核对 |
| `dq_measurement` | 质量、能源、溶剂和水记录 | 使用校准仪器或经核对的采购/库存记录；保留单位、换算、缺失数据处理和仪表覆盖率。 | 校准证书；发票；库存核对；计算工作簿 |
| `dq_temporal` | 声明报告期 | 年度数据集使用连续生产期或至少 12 个代表性月份；披露停机、异常排放和季节性。 | 生产日历；运行日志；异常记录 |
| `dq_completeness` | 前景清单 | 覆盖全部重要油籽、粗油、共产品、公用工程、溶剂、水、残余物、废水和直接排放流；量化或说明排除项。 | 签署的完整性检查表；质量/能源/溶剂核对 |
| `dq_representativeness` | 地理与技术 | 匹配油籽来源、油厂地理、提取路线、溶剂回收技术和生产规模，否则记录并评估外推。 | 场址说明；供应商地理；技术记录；外推说明 |
| `dq_source_scope` | 外部 QA 范围 | FAO 葵花籽范围仅用于匹配的葵花籽路线，EU BAT-AEL 仅用于匹配监管范围的溶剂路线；不得无说明转用于红花籽或纯机械路线。 | 连接来源 id 的适用性评估 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | 来源 |
| --- | --- | --- | --- |
| `validate_reference_identity` | 参考流 | 参考 UUID、Mass 属性、Units of mass 单位组、1 kg 数量、物种限定、粗制/未精炼状态或油厂大门任一缺失或不一致时失败。 | `codex-cxs-210-1999-2026` |
| `validate_route_completeness` | 过程图与清单 | 声明机械、溶剂或联合路线遗漏必需路线操作时失败；溶剂路线必须包括溶剂回收/脱溶与溶剂平衡，且粗油前景结果不得包括精炼操作。 | `fao-ebrd-sunflower-oils-2010`; `us-epa-ap42-9-11-1-1995` |
| `validate_species_separation` | 聚合数据集 | 葵花籽与红花籽批次在缺少生产量权重、物种特定投入产出记录和聚合方法披露时合并则失败。 | `codex-cxs-210-1999-2026` |
| `validate_mass_balance` | 每个过程与生产期 | 未解释的制备或提取质量平衡差值超过最大物料吞吐量 2% 时标记；必须修正或记录调查，不得强制闭合。 | `fao-ebrd-sunflower-oils-2010`; `eu-fdm-bat-2019-2031` |
| `validate_hexane_balance` | 溶剂路线 | 补充量、库存变化、回收溶剂、已量化产品/水/废物份额与空气排放未核对时失败；匹配范围的葵花籽年度损失超出 0.2-0.7 kg/t 清洁油籽时标记调查，不自动替换数据。 | `eu-fdm-bat-2019-2031`; `us-epa-ap42-9-11-1-1995` |
| `validate_allocation` | 共产品与共享服务 | 未先审查细分、因子合计不为一、废物/共产品状态不一致，或缺少价格/物理驱动证据及敏感性结果时失败。 | `eu-pef-2021-2279` |
| `validate_quality_and_coverage` | 发布前景数据包 | 缺少必需限定信息、协议覆盖、校准证据、时间覆盖、直接排放、质量检验或排除流说明时失败。 | `codex-cxs-210-1999-2026`; `eu-fdm-bat-2019-2031` |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 粗油生产单元过程前景数据包 |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | 需要油厂大门处葵花籽或红花籽粗油，且物种/油型、地理、时期、提取路线、溶剂实践、脱胶状态与分配方法相匹配的 LCA 模型 |
| excluded_use | 精炼或零售包装食用油；其他油籽油；构成未披露的葵花籽/红花籽平均；提取与回收技术实质不同的路线或地理；无适用检验的直接食品合规声明 |
| required_metadata | PCR id 与版本；参考流 UUID；油籽物种与品种/油型；地理；时期；油厂大门；路线；溶剂与回收；脱胶状态；粗油质量基准；上游油籽数据集；分配方法；协议覆盖；数据质量评估 |
| required_quality_disclosure | 实测与计算覆盖率；缺失数据替代；暂定范围使用；仪器校准；质量、能源、水和溶剂核对；共产品状态与分配敏感性；异常运行；排除流 |
| update_trigger | 油籽物种/油型、油籽来源、提取或溶剂回收路线、脱胶/澄清、地理、能源或水系统、共产品市场、分配方法、法律地位、参考 UUID 或证据基础发生实质变化 |

## 11. 数据源

| Source id | Type | Reference | 用途 |
| --- | --- | --- | --- |
| `fao-ebrd-sunflower-oils-2010` | official_guidance | FAO/EBRD，*Sunflower Crude and Refined Oils: Agribusiness Handbook*，2010，https://www.fao.org/fileadmin/user_upload/tci/docs/1_AH10-Sunflower%20Crude%20%26%20Refined%20Oils.pdf（检索于 2026-08-10） | 葵花籽工艺分解；油籽制备、压榨、溶剂萃取、澄清、共产品与路线换算基准 |
| `codex-cxs-210-1999-2026` | standard | Codex Alimentarius CXS 210-1999，*Standard for Named Vegetable Oils*，官方 2026 更正文本，https://openknowledge.fao.org/handle/20.500.14283/cd9108en（检索于 2026-08-10） | 葵花籽/红花籽产品身份、粗油贸易适用性、质量与物理性质背景 |
| `eu-fdm-bat-2019-2031` | standard | Commission Implementing Decision (EU) 2019/2031，https://eur-lex.europa.eu/eli/dec_impl/2019/2031/oj（检索于 2026-08-10） | 前景清单与监测、能源/水/溶剂核算、油籽粉尘及葵花籽路线己烷损失 QA |
| `us-epa-ap42-9-11-1-1995` | official_guidance | U.S. EPA AP-42 Section 9.11.1，*Vegetable Oil Processing*，1995 年 11 月，https://www.epa.gov/sites/default/files/2020-10/documents/c9s11-1.pdf（检索于 2026-08-10） | 溶剂路线工艺分解、粗制与精炼边界、粉尘和己烷排放核算 |
| `eu-pef-2021-2279` | standard | Commission Recommendation (EU) 2021/2279 on Environmental Footprint methods，https://eur-lex.europa.eu/eli/reco/2021/2279/oj（检索于 2026-08-10） | 分配层级、物理/经济分配证据、敏感性与记录要求 |
