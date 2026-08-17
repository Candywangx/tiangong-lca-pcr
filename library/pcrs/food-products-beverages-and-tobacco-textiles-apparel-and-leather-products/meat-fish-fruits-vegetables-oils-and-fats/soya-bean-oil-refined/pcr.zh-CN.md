---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.soya-bean-oil-refined
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 精炼大豆油

## 1. 范围与适用性

本 PCR 用于生产以精炼厂门口散装精炼大豆油为对象的前景数据包。范围覆盖粗大豆油的化学精炼或物理精炼，包括适用路线中的脱胶、中和、水洗、脱色、脱臭、过滤、发运前储存、现场公用工程、直接排放、废水和精炼残余物。只有在声明产品等级及适用规范时，才可用于食用级或工业级精炼油。

除作为粗油投入的上游数据集外，本 PCR 不含大豆种植、籽粒预处理和油脂提取。氢化、酯交换、转酯、调和油配制、生物柴油制造、消费包装、配送、零售、使用和寿命终止也不在范围内；研究若需这些过程，应在本精炼厂门口数据集之外明确增加。分类引用仅是范围对应证据，不构成 canonical PCR 身份或已接受 mapping edge 的来源。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.soya-bean-oil-refined |
| classification_refs | CPC 3.0 21612，Soya bean oil, refined，exact 范围语境 |
| covered_products | 经精炼且保持甘油三酯化学身份的散装大豆油及其液体馏分；必须声明食用级或工业级 |
| excluded_products | 粗大豆油；氢化、酯交换、再酯化或其他化学改性油；生物柴油；调和或配制油；零售包装产品 |
| representative_product | 经适用路线的脱胶、中和、脱色、脱臭和最终过滤后，在精炼厂门口交付的散装未氢化精炼大豆油 |
| production_route | 粗大豆油的化学精炼或物理精炼；必须声明实际工序、助剂、回收步骤及旁路工序 |
| market_state | 精炼厂门口散装精炼油；声明食用级或工业级、包装状态、储存条件和质量规范 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 交付供后续食品或工业用途的精炼大豆油 |
| How much | 1 kg 精炼大豆油净质量 |
| How well | 已精炼且未化学改性，声明等级及适用质量规范；食用级声明必须保留符合性检验证据 |
| How long or cycle | 一个生产批次或代表性报告期，终点为精炼厂内成品储存或发运 |
| reference_flow_link | 功能单位由声明的精炼油产出按准确参考数量实现 |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 kg |
| 参考产品流 | Soya bean oil, refined `a113893c-4722-4285-b86e-fddcc8b54e46` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | refining route；edible or technical grade；crude-oil feed identity；site and geography；production period；allocation method；applicable quality specification and test status；bulk or packaged state |

构建前景数据包时，`必需限定信息` 中列出的信息必须在数据集元数据、过程说明、参考流备注、产品说明或等效数据包字段中声明。缺失必需限定信息的数据包视为参考流定义不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | 参考产品和质量归一化清单 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 使用交付状态净质量。将全部清单结果归一化为准确 1 kg 精炼油产出，不换算为干物质基准。 |
| `solution_active_mass` | 水溶液碱、酸及其他配制型精炼助剂 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 分别记录交付溶液质量和活性物浓度，计算并披露活性质量，不得用活性质量替代采购溶液质量。 |
| `energy_carrier_units` | 电力、蒸汽、热和燃料 | Energy or carrier-specific property | 按实际使用 kWh、MJ、kg 或 m3 | 保留账单或仪表原始单位；归一化前记录每项换算、热值和蒸汽状态假设。 |
| `quality_measurements` | 产品符合性测量 | Method-specific property | method-specific | 酸价、过氧化值、水分、杂质等试验作为质量证据，不作为清单质量流；声明适用规范和分析方法。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 在精炼厂门口接收粗大豆油，并记录进料质量、供应商数据集引用、等级、水分和杂质基准及储存变化 |
| starting_condition_role | 门到门精炼过程的上游产品投入 |
| product_classification_scope | 保持甘油三酯身份的精炼大豆油；CPC 3.0 21612 仅作分类语境 |
| recursive_input_rule | 前景精炼厂若消耗精炼大豆油，应将其作为具有自身数据集的上游产品投入，不递归重建同一精炼过程；内部回流必须与外部投入分开披露 |
| upstream_dataset_requirement | 使用在地理、时间和技术上有代表性的粗大豆油数据集；未经书面 proxy review，不得以大豆籽粒或通用植物油流替代 |
| disclosure | 声明精炼路线、纳入单元操作、旁路步骤、现场处理、公用工程供应、储存变化、共产品状态、分配、数据期间、地理及全部代理数据 |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `sb_start_gate` | foreground_start | 从精炼厂门口计量接收粗大豆油开始；种植和提油通过上游数据集表示，不在前景重复建模。 | `us-epa-ap42-9-11-1` |
| `sb_include_refining` | unit_operations | 纳入报告场址实际运行且路线适用的脱胶、中和或脱酸、水洗、脱色、脱臭、过滤及中间油或成品油储存。 | `us-epa-ap42-9-11-1` |
| `sb_utilities_and_treatment` | utilities_and_waste | 纳入可归属于精炼油的现场电力、热、蒸汽、燃料、供水、清洗、真空产生、废气控制、废水处理和残余物处置。 | `eu-jrc-fdm-bref-2019` |
| `sb_direct_releases` | elementary_flows | 按污染物和接收环境介质报告场址特定的实测或计算空气及水体直接排放；最终数据集不得以通用总排放行替代。 | `eu-jrc-fdm-bref-2019`; `us-epa-ap42-9-11-1` |
| `sb_exclusions` | downstream_and_capital | 排除消费包装、配送、零售、使用和寿命终止。除非声明的研究方法要求，否则排除资本品；任何新增阶段均须单独披露。 | `eu-pef-2021` |
| `sb_no_double_count` | recovered_materials | 区分内部循环与外部投入产出，避免回收油、冷凝水、水、热和精炼助剂重复计数。 | `eu-pef-2021` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `process_refining` | 大豆油精炼；Tiangong process identity `1788a02a-26ae-4acb-9cf2-c25eebd00200` | required | 本 PCR 始终要求 | 前景门到门精炼及现场处理 | 1 kg 精炼大豆油产出 |

### 过程：大豆油精炼（`process_refining`）

下文凡标识为 `reasoned_estimate` 的定量范围，均是用于筛查和审查的可替换临时估计，不是有来源支持的默认值或生产因子。用于发布关键用途前，必须以经审查的场址实测值、计算值、供应商证据或适用的权威因子替换，并披露替换状态。

#### 输入

##### 产品流

###### 粗大豆油进料（`crude_soya_oil_input`）

粗大豆油作为主要进料跨越精炼厂边界，其上游生产保留在链接的供应商或背景数据集中。

- 选定流：Soya bean oil, crude `6464d0d3-fb5d-4e46-bfb3-01327a3ddbd3`
- 流属性/单位：Mass / kg
- 数量规则：计量粗油净接收量并校正期初和期末库存
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 精炼大豆油产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_inputs`
- 来源：`us-epa-ap42-9-11-1`
- 数量范围：暂定粗油质量平衡筛查范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：1.0
  - 上限：1.2
  - 单位：kg
  - 基准：每 1 kg 精炼大豆油产出
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 作为产品供应的工艺水（`process_water_input`）

记录用于脱胶、水洗、清洗、真空或公用工程的采购或内部供应工艺水；自行取水另记为基本流投入。

- 选定流：Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- 流属性/单位：Mass / kg
- 数量规则：工艺供水表计量减去单独计量的循环水
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 精炼大豆油产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_water_records`
- 来源：`eu-jrc-fdm-bref-2019`
- 数量范围：暂定工艺水筛查范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：1
  - 单位：kg
  - 基准：每 1 kg 精炼大豆油产出
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 化学精炼用氢氧化钠（`sodium_hydroxide_input`）

使用中和工序时记录氢氧化钠。无碱耗的物理精炼路线须报告零值并说明替代脱酸路线。

- 选定流：Sodium hydroxide, industrial grade `e0abcced-0611-4c24-9290-5a2c5a0c4169`
- 流属性/单位：Mass / kg 交付产品及 kg 活性 NaOH
- 数量规则：采购或领用溶液质量，另行记录浓度并计算活性质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 精炼大豆油产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_material_inputs`
- 来源：`us-epa-ap42-9-11-1`
- 数量范围：暂定碱投入筛查范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.1
  - 单位：kg 交付产品
  - 基准：每 1 kg 精炼大豆油产出
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 漂白土（`bleaching_earth_input`）

使用漂白土或其他声明吸附剂去除色素和杂质时予以记录。

- 选定流：Bleaching earth `8b774b7a-2054-4e39-87ec-a17cc015fae9`
- 流属性/单位：Mass / kg
- 数量规则：计量脱色工序吸附剂领用量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 精炼大豆油产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_inputs`
- 来源：`us-epa-ap42-9-11-1`
- 数量范围：暂定吸附剂投入筛查范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.1
  - 单位：kg
  - 基准：每 1 kg 精炼大豆油产出
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 其他精炼助剂（`other_refining_aids_input`）

成品数据集中，每种酸、助滤剂、抗氧化剂或其他助剂必须建为独立具体产品流。本行是采集模式，不授权合并不同物质。

- 选定流：每种已声明精炼助剂对应的场址选定产品流
- 流属性/单位：Mass / kg
- 数量规则：按物质、浓度和工序计量领用量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 精炼大豆油产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_inputs`
- 来源：`us-epa-ap42-9-11-1`
- 数量范围：暂定单项助剂筛查范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.05
  - 单位：kg 每种助剂
  - 基准：每 1 kg 精炼大豆油产出
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 电力供应（`electricity_input`）

泵、离心机、真空系统、过滤、储存和现场处理耗电采用地理适配的供应流记录。

- 选定流：场址及地理特定的电力产品流
- 流属性/单位：Energy / kWh
- 数量规则：可归属于精炼的计量电量加经分配的共用公用工程电量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 精炼大豆油产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_energy_records`
- 来源：`eu-jrc-fdm-bref-2019`; `eu-pef-2021`
- 数量范围：暂定电力筛查范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：2
  - 单位：kWh
  - 基准：每 1 kg 精炼大豆油产出
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 热能和蒸汽供应（`thermal_energy_input`）

采购蒸汽或热量直接记录；现场燃料燃烧应记录燃料投入和直接燃烧排放，不得重复增加热产品。

- 选定流：场址特定的蒸汽、热或燃料产品流
- 流属性/单位：Energy / MJ，并保留能源载体实测单位
- 数量规则：计量有用热，或使用有依据的热值和分配规则从燃料计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 精炼大豆油产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_energy_records`
- 来源：`eu-jrc-fdm-bref-2019`; `eu-pef-2021`
- 数量范围：暂定热能筛查范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：10
  - 单位：MJ
  - 基准：每 1 kg 精炼大豆油产出
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

本 PCR 不要求废物投入。设施若协同处理外来废物，应作为单独投入建模并披露，且确认其不改变产品边界。

##### 基本流

###### 自行取水（`self_abstracted_water_input`）

直接从环境取用的水按来源环境介质记录，不得同时计入采购工艺水。

- 选定流：按来源环境介质选择场址特定基本水流
- 流属性/单位：Volume / m3
- 数量规则：计量取水减去使用前退回水量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 精炼大豆油产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_water_records`
- 来源：`eu-jrc-fdm-bref-2019`
- 数量范围：暂定取水筛查范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.002
  - 单位：m3
  - 基准：每 1 kg 精炼大豆油产出
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

#### 输出

##### 产品流

###### 精炼大豆油（`refined_soya_oil_output`）

参考产品为最终过滤并校正范围内储存变化后，在精炼厂门口交付的可销售精炼油净量。

- 选定流：Soya bean oil, refined `a113893c-4722-4285-b86e-fddcc8b54e46`
- 流属性/单位：Mass / kg
- 数量规则：从实测净产量归一化后的固定参考产出
- 数值来源模式：固定值（`fixed_value`）
- 适用范围：不适用（`not_applicable`）
- 归一化基准：每 1 kg 精炼大豆油产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：身份引用（`identity_reference`）
- 来源：`unsd-cpc-3-21612`; `codex-cxs-210-1999`
- 数量范围：参考流恒等值
  - 范围角色：允许范围（`allowed_range`）
  - 下限：1
  - 上限：1
  - 单位：kg
  - 基准：每 1 kg 精炼大豆油产出
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：方法公式（`method_formula`）
  - 来源：`eu-pef-2021`

###### 回收胶质或卵磷脂馏分（`recovered_gums_output`）

仅当回收胶质或卵磷脂符合场址产品规范并外送有益利用时记为产品，否则记为废物。

- 选定流：与回收物料规范匹配的场址选定产品流
- 流属性/单位：Mass / kg
- 数量规则：校正储存变化后的实测可销售回收质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 精炼大豆油产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_outputs_and_residues`
- 来源：`us-epa-ap42-9-11-1`; `eu-pef-2021`
- 数量范围：暂定回收胶质筛查范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.2
  - 单位：kg
  - 基准：每 1 kg 精炼大豆油产出
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 脂肪酸或脱臭馏出物（`fatty_acid_distillate_output`）

仅当具有文件化规范和有益去向并确立产品状态时，将脂肪酸或脱臭馏出物记为产品，否则记为废物。

- 选定流：与馏出物规范匹配的场址选定产品流
- 流属性/单位：Mass / kg
- 数量规则：校正储存变化后的实测可销售馏出物质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 精炼大豆油产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_outputs_and_residues`
- 来源：`us-epa-ap42-9-11-1`; `eu-pef-2021`
- 数量范围：暂定馏出物筛查范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.2
  - 单位：kg
  - 基准：每 1 kg 精炼大豆油产出
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

###### 废漂白土（`spent_bleaching_earth_output`）

含截留油和水分的废吸附剂按实测湿质量记录，并链接实际回收或处理路线。

- 选定流：场址特定废漂白土废物流
- 流属性/单位：Mass / kg 湿废物
- 数量规则：脱色过滤工序称量移出量并校正暂存变化
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 精炼大豆油产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_outputs_and_residues`
- 来源：`eu-jrc-fdm-bref-2019`
- 数量范围：暂定废漂白土筛查范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.2
  - 单位：kg 湿废物
  - 基准：每 1 kg 精炼大豆油产出
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 皂脚、中和污泥或废弃胶质（`soapstock_sludge_output`）

成品数据集中，路线特定的皂脚、污泥或废弃胶质应按类型和去向建为独立具体废物流，并保留组成和处置信息。

- 选定流：每种已声明残余物对应的场址特定废物流
- 流属性/单位：Mass / kg 湿废物
- 数量规则：按类型和去向计量残余物转移量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 精炼大豆油产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_outputs_and_residues`
- 来源：`us-epa-ap42-9-11-1`; `eu-jrc-fdm-bref-2019`
- 数量范围：暂定残余物筛查范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.3
  - 单位：kg 湿废物
  - 基准：每 1 kg 精炼大豆油产出
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 送处理废水（`wastewater_output`）

跨界进入内部或外部处理的废水按体积或质量记录，同时保留处理去向和单独测得的污染物负荷。

- 选定流：通向实际处理路线的场址特定废水流
- 流属性/单位：Volume / m3 或 Mass / kg，并记录换算
- 数量规则：送处理废水表计量减去有记录的循环水
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 精炼大豆油产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wastewater_and_releases`
- 来源：`eu-jrc-fdm-bref-2019`
- 数量范围：暂定废水筛查范围
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.002
  - 单位：m3
  - 基准：每 1 kg 精炼大豆油产出
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

###### 直接排入空气（`direct_air_releases_output`）

对每种实测或计算污染物建立独立基本流交换，包括路线相关燃烧污染物、挥发性有机物和恶臭物质；最终数据集不得保留本汇总采集模式行。

- 选定流：污染物特定基本流及接收空气环境介质
- 流属性/单位：Mass / kg 每种污染物
- 数量规则：实测排放，或由受监测活动数据和控制效率形成的文件化计算值
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 精炼大豆油产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_wastewater_and_releases`
- 来源：`eu-jrc-fdm-bref-2019`; `us-epa-ap42-9-11-1`
- 数量范围：暂定单项污染物排放筛查，非排放因子
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.1
  - 单位：kg 每种污染物
  - 基准：每 1 kg 精炼大豆油产出
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 直接排入水体（`direct_water_releases_output`）

处理水直接排入环境时，对每种申报污染物及接收水体环境介质建立独立基本流交换；外送处理负荷仍属技术系统废水流。

- 选定流：污染物特定基本流及接收水体环境介质
- 流属性/单位：Mass / kg 每种污染物
- 数量规则：同一期间浓度乘以配对排水量，并记录未检出值处理
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 精炼大豆油产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_wastewater_and_releases`
- 来源：`eu-jrc-fdm-bref-2019`
- 数量范围：暂定单项污染物排放筛查，非排放因子
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.1
  - 单位：kg 每种污染物
  - 基准：每 1 kg 精炼大豆油产出
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

## 7. 分配与共产品处理

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `allocation_avoid` | shared_refinery_operations | 首先细分单元操作并直接计量可归属于精炼大豆油的投入、产出和排放。仅当声明的研究方法允许且替代功能得到证明时使用系统扩展。 | `eu-pef-2021` |
| `allocation_physical` | unavoidable_shared_burdens | 无法细分或进行获准的系统扩展时，按能代表共用操作因果使用的文件化物理关系分配；产出以 kg 计量并不自动意味着质量分配。 | `eu-pef-2021` |
| `allocation_other` | no_physical_relationship | 无合理物理关系时，使用其他文件化关系，例如基于代表性价格期间的经济分配，并披露价格、币种、期间、份额和敏感性。 | `eu-pef-2021` |
| `allocation_residue_status` | gums_distillate_soapstock_spent_earth | 分配前根据规范、法律状态和实际去向确定产品、共产品或废物状态。除非单独报告明确的系统扩展情景，本门到门数据集内不计避免负担收益。 | `eu-pef-2021`; `eu-jrc-fdm-bref-2019` |
| `allocation_consistency` | all_allocated_rows | 对共用投入、直接排放和处理负担采用一套内部一致的分配，并保留未分配总量以供审计。 | `eu-pef-2021` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_refined_output` | `process_refining` | 精炼产品和质量 | 校准衡器、罐存核对和实验室记录 | 批次；等级；毛重和皮重；期初期末罐存；不合格返料；酸价；过氧化值；方法；规范 | 核对发运、生产和罐存记录并保留代表性检验证书 | kg 及方法特定质量单位 | 每批次并按月核对 | 代表性连续 12 个月或声明的生产期 | 范围内全部精炼线和储罐 | 合格净产出等于生产加期初库存减期末库存、退货及不合格分流 | 校准、液位核查、批次追踪、实验室 QA 和签字核对 |
| `cp_material_inputs` | `process_refining` | 粗油和精炼助剂 | 地磅、储罐、发票、领料和浓度记录 | 物料；供应商；flow UUID；毛重皮重；期初期末库存；退料；浓度；工序；批号 | 按物料核对采购或领用与库存变化 | kg 交付物及 kg 活性物 | 每次接收或领用并按月核对 | 与产品产出相同期间 | 范围内全部生产线和共用储存 | 净投入等于接收加期初库存减期末库存和退料；活性质量等于溶液质量乘质量分数 | 校准衡器或仪表、供应商证书、库存核对和批号追踪 |
| `cp_water_records` | `process_refining` | 采购水和自行取水 | 供水及取水仪表 | 仪表；来源；期初期末读数；循环量；校准；停机估算 | 按来源读表并分开循环水 | kg 或 m3 | 每日或每班并按月汇总 | 与产品产出相同期间 | 范围内全部操作和公用工程 | 汇总各来源净取水和供水；仅以有记录密度换算体积 | 仪表校准、完整性日志和有记录的缺口填补 |
| `cp_energy_records` | `process_refining` | 电力、蒸汽、热和燃料 | 公用工程仪表、发票和燃料库存记录 | 载体；仪表；期初期末读数；燃料接收；库存变化；热值；蒸汽压力和干度；共用工程分配驱动 | 核对仪表和发票；直接计量后才分配共用工程 | kWh、MJ 和载体单位 | 每班或每日并按月汇总 | 与产品产出相同期间 | 范围内全部操作、储存和处理 | 净购入能源加现场发电投入减外送；以文件化系数换算 | 仪表校准、发票核对、热值证据和分配记录 |
| `cp_outputs_and_residues` | `process_refining` | 共产品、回收物和废物 | 衡器、储罐、联单和去向记录 | 物料；状态；规范；毛重皮重；水分；含油量；去向；处理；期初期末库存 | 每次转移称量并核对库存 | kg 湿基及可得干基 | 每次转移并按月核对 | 与产品产出相同期间 | 范围内全部操作和储存 | 净产出等于转移加期末库存减期初库存；产品和废物总量分开 | 衡器校准、产品证书或废物联单、去向证据和库存核对 |
| `cp_wastewater_and_releases` | `process_refining` | 废水和直接排放 | 排水仪表、实验室结果、烟道或燃料记录及许可证 | 流股；体积；采样时间；污染物；浓度；检出限；环境介质；控制效率；活动数据 | 浓度与同期流量配对；无直接监测时仅从实测燃料计算燃烧排放 | m3、kg、mg/L 及污染物特定单位 | 连续或按许可证采样并按月汇总 | 与产品产出相同期间且代表正常工况 | 每个范围内排口和排放点 | 污染物负荷等于配对浓度乘排水量；实测和计算点不得重叠 | 认可实验室报告、仪表校准、许可记录、QA 空白、检出限处理和计算表 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_normalise` | 全部清单行 | 归一化量等于期间净量乘 1 kg 再除以期间合格精炼油净产出。 | 已核对行数量；已核对精炼油产出 | 每 1 kg 参考流的数量 | `eu-pef-2021` |
| `calc_active_substance` | 配制化学品 | 活性物质量等于交付溶液质量乘由供应商或检验支持的质量分数；同时保留交付量和活性量。 | 溶液质量；浓度 | kg 交付产品及 kg 活性物 | `us-epa-ap42-9-11-1` |
| `calc_water_load` | 直接水体排放 | 污染物质量等于配对浓度乘排水体积并换算单位；记录未检出规则，不得配对不同期间。 | 浓度；流量；采样期间；检出限 | 按接收环境介质的 kg 污染物 | `eu-jrc-fdm-bref-2019` |
| `calc_mass_balance` | 油和物料平衡 | 将粗油、助剂和水与精炼油、回收产品、废物、废水、实测排放和库存变化核对；未解释油损与水分蒸发分开调查。 | 全部质量记录；库存变化；水分和含油量 | 平衡闭合和未解释残差 | `us-epa-ap42-9-11-1`; `eu-jrc-fdm-bref-2019` |
| `calc_shared_utility` | 共用公用工程 | 直接计量后仅分配剩余共用工程量，使用选定且有记录的因果驱动，并保留未分配总量和份额。 | 公用工程总量；直接计量量；分配驱动 | 分配后的公用工程量 | `eu-pef-2021` |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | 参考产品和粗油投入 | 流身份、等级、路线和 UUID 必须匹配实际产品；代理使用须有书面语义和属性兼容性审查。 | 产品规范、供应商数据、Tiangong 身份查询和代理审查 |
| `dq_time` | 全部前景记录 | 使用一致代表期，通常为连续 12 个月；较短生产期必须覆盖稳定运行并披露起止时间、停机和异常事件。 | 期间登记、生产日志和代表性说明 |
| `dq_completeness` | 全部范围内操作 | 覆盖每条生产线、储罐、公用工程、处理单元和排放点；量化记录缺失比例并记录缺口填补，不得静默应用 cut-off。 | 来源登记、完整性核对和缺失数据日志 |
| `dq_measurement` | 物料、水和能源数量 | 使用校准仪器或核对后的发票和库存记录；保留原始读数、换算系数、不确定性和审核人。 | 校准证书、发票、仪表导出和计算工作表 |
| `dq_quality` | 食用级声明 | 保留规范、采样和分析证据。仅在 Codex 为声明适用规范时使用其质量值；当地法律或客户要求可更严格。 | 实验室证书、方法引用和适用规范 |
| `dq_representativeness` | 前景及上游数据集 | 报告技术、地理、时间和精度代表性；发布关键使用前以审查证据替换暂定推理范围。 | 数据质量评估和来源比较 |

## 9. 校验规则

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `val_identity` | product_identity | 参考流 UUID、Mass 属性、Units of mass 单位组和 kg 单位必须匹配本 PCR；等级、路线和散装状态限定信息必须完整。 | `unsd-cpc-3-21612` |
| `val_reference_amount` | quantitative_reference | 归一化精炼油产出必须准确等于 1 kg，每项清单量必须采用同一参考流基准或具有可追溯换算。 | `eu-pef-2021` |
| `val_boundary` | system_boundary | 数据集必须从精炼厂门口粗大豆油开始，并纳入全部实际运行的精炼、公用工程、储存、清洗和处理步骤；被排除的上下游阶段不得重复。 | `us-epa-ap42-9-11-1`; `eu-jrc-fdm-bref-2019` |
| `val_route` | technology_route | 声明的化学或物理精炼路线必须与记录的单元操作和助剂一致；条件行零用量须明确说明不适用原因。 | `us-epa-ap42-9-11-1` |
| `val_mass_balance` | material_balance | 油和总物料平衡必须报告投入、产出、库存变化和残差；未解释油损或遗漏主要流属于须纠正或调查的错误。 | `us-epa-ap42-9-11-1`; `eu-jrc-fdm-bref-2019` |
| `val_allocation` | multifunctionality | 细分、系统扩展或分配选择必须遵循声明层级，对全部共用负担一致应用，并披露因子和敏感性。 | `eu-pef-2021` |
| `val_releases` | elementary_flows | 最终数据须将汇总排放模式替换为污染物特定基本流、环境介质及实测或计算数量；外送废水不得同时报告为直接水体排放。 | `eu-jrc-fdm-bref-2019` |
| `val_food_grade` | product_quality | 食用级声明须有适用规范和检验证据。声明采用 Codex CXS 210-1999 时，精炼油酸价不得超过 0.6 mg KOH/g oil，过氧化值不得超过 10 milliequivalents active oxygen/kg oil，并服从更严格适用规则。 | `codex-cxs-210-1999` |
| `val_data_quality` | dataset_production | 数据集须披露期间、地理、技术、来源覆盖、校准、缺失数据、不确定性、代理使用和全部剩余暂定估算。 | `eu-pef-2021`; `eu-jrc-fdm-bref-2019` |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 散装精炼大豆油的前景精炼厂门口生产数据集 |
| downstream_use | `secondary_dataset`；经审查和发布后可作 `background_dataset` |
| allowed_use | 产品等级、路线、地理、期间和分配与数据集匹配的精炼厂门口清单、产品足迹和生命周期模型 |
| excluded_use | 未经代表性审查的粗油生产、化学改性油、配制或调和油、生物柴油、零售包装油或其他精炼路线 |
| required_metadata | PCR id；产品及过程 UUID；产品等级和规范；路线及单元操作；场址和地理；期间；技术；散装或包装状态；上游粗油数据集；分配；cut-off；数据所有者和审查状态 |
| required_quality_disclosure | 一手数据覆盖；校准；库存核对；平衡闭合；缺失数据处理；代理使用；不确定性；直接排放方法；共产品或废物状态；全部推理估算及替换状态 |
| update_trigger | 进料或产品规范、精炼路线、助剂、能源系统、处理、共产品去向、分配、法规、Tiangong 身份或数据期间代表性发生实质变化 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `unsd-cpc-3-21612` | official_guidance | United Nations Statistics Division，CPC Version 3.0 Explanatory Notes，code 21612，https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf，retrieved 2026-08-10 | 分类范围语境和精炼大豆油身份 |
| `codex-cxs-210-1999` | standard | Codex Alimentarius，CXS 210-1999 Standard for Named Vegetable Oils，2015 text，https://www.fao.org/input/download/standards/336/CXS_210e_2015.pdf，retrieved 2026-08-10 | 大豆油定义、食用级适用性、质量特性和分析证据 |
| `us-epa-ap42-9-11-1` | official_guidance | US EPA，AP-42 Section 9.11.1 Vegetable Oil Processing，Supplement A，November 1995，https://www.epa.gov/sites/default/files/2020-10/documents/c9s11-1.pdf，retrieved 2026-08-10 | 粗油起点、精炼过程分解、残余物和直接排放采集要求 |
| `eu-jrc-fdm-bref-2019` | official_guidance | European Commission Joint Research Centre，Best Available Techniques Reference Document for the Food, Drink and Milk Industries，EUR 29978 EN，JRC118627，DOI 10.2760/243911，https://publications.jrc.ec.europa.eu/repository/handle/JRC118627，retrieved 2026-08-10 | 食品及植物油加工的水、能源、排放、处理、监测和数据质量重点 |
| `eu-pef-2021` | method_factor | European Commission Recommendation (EU) 2021/2279，Product Environmental Footprint method，https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32021H2279，retrieved 2026-08-10 | 参考流归一化、企业特定制造数据、分配层级和数据质量披露 |
