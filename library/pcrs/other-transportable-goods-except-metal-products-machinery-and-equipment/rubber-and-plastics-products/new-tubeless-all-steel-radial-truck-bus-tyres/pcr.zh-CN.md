---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.rubber-and-plastics-products.new-tubeless-all-steel-radial-truck-bus-tyres
language: zh-CN
status: candidate
content_maturity: authored_methodology
translation_status: aligned
sync_with: pcr.en-US.md
---

# 新无内胎全钢子午线卡客车轮胎制造


## 1. 范围与适用性

本方法涵盖钢胎体和钢带束层增强的新无内胎充气橡胶卡客车胎的完整制造与实际净发运，采用现场橡胶混炼、帘线压延覆胶和模压硫化。钢胎体结构及其部件/计量链界定这个较窄边界；同一胎改变拟用车型不构成另一方法。本方法综合独立工业 primary 资料，不声称涵盖所有其他充气胎。

CPC 36113 是相对乘用车和摩托/自行车胎的残余分类。农机、工程和航空胎仍在本子集之外，须另作适用性审查。上游帘子布和原胶 PCR 仅支持部件投入。不能用织物胎体乘用胎、仅内胎过程或翻新路线替代本完整新胎路线。来源支持结构区别和制造阶段；实际工厂配方、牌号相容性、循环设定、数量和排放由前景数据包采集。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.rubber-and-plastics-products.new-tubeless-all-steel-radial-truck-bus-tyres |
| classification_refs | CPC 3.0 36113：较窄结构/方法子集；本文件不建立正向映射。 |
| covered_products | 钢胎体层及钢带束层的新无内胎充气橡胶卡客车胎，厂内混炼、钢帘线压延覆胶/裁断、部件制备、胎坯成型并模压硫化。 |
| excluded_products | 乘用车及摩托/自行车胎；织物胎体或斜交胎；有内胎胎及独立内胎/垫带；实心/半实心胎；农机/工程/航空胎；翻新及旧胎体；仅分选、改标或重包装的外购成品胎；不经压延的纯挤出帘线覆胶。用途改名不构成新路线。 |
| representative_product | 一个声明规格和载荷/速度要求的新无内胎全钢子午线卡客车胎；所引美国示意包含 295/75R22.5，但不据此规定通用型号或质量。 |
| production_route | 采购原胶/助剂及镀层帘线/钢丝 → 分胶种混炼 → 钢胎体/带束层压延覆胶及橡胶部件挤出/胎圈缠绕 → 胎坯成型 → 模压硫化/冷却 → 检验/返工 → 实际仓储、包装、搬运及发运。 |
| market_state | 在声明工厂发运门实际净交付的全新质量验收成品胎；未装轮辋，不含单独供货内胎/垫带；不确立里程寿命。 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 按声明载荷/速度/轮位规格提供一个完整新未装轮辋的无内胎钢胎体子午线卡客车胎实物。 |
| How much | 实际净交付时计一个胎，即 1 item；单胎实测净质量为辅助元数据，不能虚构常数。 |
| How well | 按有记录的产品规范、结构及规格完成质量验收；记录适用批准/试验证据与限制，不虚构通用合格阈值。 |
| How long or cycle | 一个从制造到净发运的周期；不声称行驶里程寿命、翻新周期或车辆运输功能。 |
| reference_flow_link | tyre_delivered |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 轮胎 `11c2e97a-624f-41de-957d-543cddb777ef` |
| 参考流属性 | 物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` |
| 参考单位组 | 数量 `5beb6eed-33a9-47b8-9ede-1dfe8f679159` |
| 参考单位 | item |
| 必需限定信息 | 新胎且不使用服役过的胎体; 卡客车商用胎类别且排除乘用/轻卡跨类泛称; 无内胎气密层; 钢胎体层和钢带束层及声明的层数与帘线构造; 帘线压延覆胶及厂内混炼与模压硫化; 规格及轮辋直径; 载荷指数及速度符号; 轮位/使用类别及批准规格; 净交付件数 N 与不含包装的单胎净质量; 场址和期间及上游供应商与实际能源供应; 期初末 WIP 和成品库存数量及结转负荷; 退货/返工身份及唯一验收/交付记录 |

必需限定信息须实际出现在具体数据包中。精确 native 单位为 Item(s)，参考单位内部 ID 0，系数 1；item 是其单数报告标签。宽泛 native 轮胎身份不声明地点、CAS、全钢路线或质量换算。完整身份限制保留于终端清单卡；结构和新胎/无内胎状态须由产品规范及工业证据支持。

## 4. 计量与单位规则

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| count_reference | tyre_delivered | Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` | item | N 是同配置、路线和状态群的正数唯一合格净交付胎件数。P 是另行记录的新增生产放行数；不能默认 N=P。退回再验收不能增加新胎。 |
| net_mass_metadata | reference product | Mass | kg | 用校准设备称量实际单胎净质量，或使用可追溯批称量并保留件数、皮重。排除轮辋、独立内胎/垫带与包装。不强加固定 kg/item 或目录名义质量。净质量支持物料闭合及另行披露的质量口径视图；本 PCR 报告一个 item。 |
| supplied_formulation | recipe inputs | Mass | kg | 采用整份供货制剂质量。活性分数、含水率和载水是分析分账；厂内混配实际单独采购的原料分别投入，并计实际混配能耗/损失。不得在同一质量账同时采购整制剂及其组成。 |
| utilities_state | utility and emission rows | declared row property | declared row unit | 保留原始表计单位和实际状态。仅用有记录的单位关系、组成及必要状态/焓换算。原始累计气/液体积不是流量率，不能再乘时间。供方流属性系数不是密度证据。 |

## 5. 系统边界

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| boundary_integrated_route | tbr_manufacture | 包括各胶料实际收货、称量、分段混炼/开炼，钢帘线压延/裁断/接头，胎面/胎侧/气密层/三角胶制备，胎圈缠绕、胎坯成型、硫化/冷却、检验、真实修复/返工、排放治理、公用工程、仓储、包装及至声明门的发运。在一个合并前景过程中保留各操作阶段记录，不能虚构厂内外部交换。 | `continental-commercial-2025` |
| boundary_structure | reference product | 从结构规范和压延记录核实钢胎体与钢带束层。只有钢带束层不能证明全钢胎体。不能将织物帘子布 PCR 输出直接当作成品胎，也不能仅凭卡车一词推定独立方法。 | `goodyear-truck-2021`; `continental-commercial-2025` |
| boundary_real_delivery | tyre_delivered | 参考门是实际净交付，不是新增生产放行。分别保留新增放行 P 与发运/退货账。期初末 WIP 及成品胎保留实际累计结转负荷。未交付胎不进入 N；范围内仓储、包装、搬运、失败作业及退货处理保留在匹配分子。 |  |
| boundary_inventory_extension | all inventory rows | 各卡标识单项交换及常见条件原料，不是通用 BOM。逐一采集实际配方/辅助材料、燃料、包装、废物和污染物。缺卡或空 UUID 不能成为遗漏真实负荷的理由。真实工厂数据包须增加原子卡并复核，选定流不能放选择器或组合材料。 |  |

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 实际分别采购的原胶、配方原料、预处理钢帘线及胎圈钢丝进入综合轮胎厂；不能用外购成品胎或旧胎体替代。 |
| starting_condition_role | 前景采购边界；通过相容供方数据集递归包括上游生产及入厂运输。 |
| product_classification_scope | CPC3 36113 中声明的新无内胎钢胎体子午线卡客车子集，不涵盖所有其他胎。 |
| recursive_input_rule | 实际同类新胎投入须保留其制造数据集并披露以重新判断适用性，不能替代造胎。厂内胶料、胎坯及库存转移保留原有负荷并在合并时抵消。 |
| upstream_dataset_requirement | 匹配实际橡胶牌号/路线、镀层/帘线结构、化学制剂、供电/汽/燃料来源及运输。宽泛流身份不能提供背景数量或地理。 |
| disclosure | 声明场址、路线和产品配置、报告/交付期间、门位置、库存/结转分摊、失败批、返工和退货、纳入运输/仓储范围、辅助身份及缺口。地理由场址证据确定，不从所引制造商或 native 轮胎行推定。 |

## 6. 过程清单结构

### 过程图

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| tbr_manufacture | 新全钢子午线胎综合制造与净发运 | required | 声明子集内实际完整路线 | 具有操作阶段台账的综合厂前景过程 | 1 item |

tbr_manufacture 内部各操作阶段须分别可追溯：收货和胶料混炼/开炼；钢帘线压延/裁断与橡胶部件制备/胎圈缠绕；胎体与带束层/胎面成型；模压硫化/冷却；检验和真实返工；仓储、包装、搬运与发运。此为一个合并前景过程。各胶料配方及部件在批次台账独立标识；内部胶料和胎坯交接抵消，不能将内部转移写成另一次采购或外部成品输出。

### 过程：新胎综合制造与净发运（`tbr_manufacture`）

#### 输入

##### 产品流

###### 天然橡胶混炼投入（`natural_rubber`）

按胎面、胎侧、钢帘线覆胶、胎圈/三角胶及气密层各独立胶料，记录实际采购并领用的该种材料。本卡仅在实际使用该确切原料时适用；不存在须由 BOM 和领料记录证明。记录供应商牌号、路线、供货形态及整份制剂质量。实际其他原料须另立原子卡；不规定来源配方或比例。

- 选定流：天然橡胶
- 流属性/单位：Mass / kg
- 数量规则：A_i / N，使用匹配原始同群分子且仅作一次报告除法。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每个声明的参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_recipe`
- 来源：`continental-commercial-2025`

###### 丁苯橡胶混炼投入（`sbr`）

按胎面、胎侧、钢帘线覆胶、胎圈/三角胶及气密层各独立胶料，记录实际采购并领用的该种材料。本卡仅在实际使用该确切原料时适用；不存在须由 BOM 和领料记录证明。记录供应商牌号、路线、供货形态及整份制剂质量。实际其他原料须另立原子卡；不规定来源配方或比例。

- 选定流：丁苯橡胶
- 流属性/单位：Mass / kg
- 数量规则：A_i / N，使用匹配原始同群分子且仅作一次报告除法。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每个声明的参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_recipe`
- 来源：`continental-commercial-2025`

###### 顺丁橡胶混炼投入（`br`）

按胎面、胎侧、钢帘线覆胶、胎圈/三角胶及气密层各独立胶料，记录实际采购并领用的该种材料。本卡仅在实际使用该确切原料时适用；不存在须由 BOM 和领料记录证明。记录供应商牌号、路线、供货形态及整份制剂质量。实际其他原料须另立原子卡；不规定来源配方或比例。

- 选定流：顺丁橡胶
- 流属性/单位：Mass / kg
- 数量规则：A_i / N，使用匹配原始同群分子且仅作一次报告除法。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每个声明的参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_recipe`
- 来源：`continental-commercial-2025`

###### 溴化丁基橡胶混炼投入（`bromobutyl`）

按胎面、胎侧、钢帘线覆胶、胎圈/三角胶及气密层各独立胶料，记录实际采购并领用的该种材料。本卡仅在实际使用该确切原料时适用；不存在须由 BOM 和领料记录证明。记录供应商牌号、路线、供货形态及整份制剂质量。实际其他原料须另立原子卡；不规定来源配方或比例。

- 选定流：溴化丁基橡胶
- 流属性/单位：Mass / kg
- 数量规则：A_i / N，使用匹配原始同群分子且仅作一次报告除法。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每个声明的参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_recipe`
- 来源：`continental-commercial-2025`

###### 炭黑混炼投入（`carbon_black`）

按胎面、胎侧、钢帘线覆胶、胎圈/三角胶及气密层各独立胶料，记录实际采购并领用的该种材料。本卡仅在实际使用该确切原料时适用；不存在须由 BOM 和领料记录证明。记录供应商牌号、路线、供货形态及整份制剂质量。实际其他原料须另立原子卡；不规定来源配方或比例。

- 选定流：炭黑
- 流属性/单位：Mass / kg
- 数量规则：A_i / N，使用匹配原始同群分子且仅作一次报告除法。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每个声明的参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_recipe`
- 来源：`continental-commercial-2025`

###### 沉淀二氧化硅混炼投入（`silica`）

按胎面、胎侧、钢帘线覆胶、胎圈/三角胶及气密层各独立胶料，记录实际采购并领用的该种材料。本卡仅在实际使用该确切原料时适用；不存在须由 BOM 和领料记录证明。记录供应商牌号、路线、供货形态及整份制剂质量。实际其他原料须另立原子卡；不规定来源配方或比例。

- 选定流：沉淀二氧化硅
- 流属性/单位：Mass / kg
- 数量规则：A_i / N，使用匹配原始同群分子且仅作一次报告除法。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每个声明的参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_recipe`
- 来源：`continental-commercial-2025`

###### 硫磺混炼投入（`sulfur`）

按胎面、胎侧、钢帘线覆胶、胎圈/三角胶及气密层各独立胶料，记录实际采购并领用的该种材料。本卡仅在实际使用该确切原料时适用；不存在须由 BOM 和领料记录证明。记录供应商牌号、路线、供货形态及整份制剂质量。实际其他原料须另立原子卡；不规定来源配方或比例。

- 选定流：硫磺
- 流属性/单位：Mass / kg
- 数量规则：A_i / N，使用匹配原始同群分子且仅作一次报告除法。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每个声明的参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_recipe`
- 来源：`continental-commercial-2025`

###### 氧化锌混炼投入（`zinc_oxide`）

按胎面、胎侧、钢帘线覆胶、胎圈/三角胶及气密层各独立胶料，记录实际采购并领用的该种材料。本卡仅在实际使用该确切原料时适用；不存在须由 BOM 和领料记录证明。记录供应商牌号、路线、供货形态及整份制剂质量。实际其他原料须另立原子卡；不规定来源配方或比例。

- 选定流：氧化锌
- 流属性/单位：Mass / kg
- 数量规则：A_i / N，使用匹配原始同群分子且仅作一次报告除法。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每个声明的参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_recipe`
- 来源：`continental-commercial-2025`

###### 硬脂酸混炼投入（`stearic_acid`）

按胎面、胎侧、钢帘线覆胶、胎圈/三角胶及气密层各独立胶料，记录实际采购并领用的该种材料。本卡仅在实际使用该确切原料时适用；不存在须由 BOM 和领料记录证明。记录供应商牌号、路线、供货形态及整份制剂质量。实际其他原料须另立原子卡；不规定来源配方或比例。

- 选定流：硬脂酸
- 流属性/单位：Mass / kg
- 数量规则：A_i / N，使用匹配原始同群分子且仅作一次报告除法。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每个声明的参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_recipe`
- 来源：`continental-commercial-2025`

###### N-环己基-2-苯并噻唑次磺酰胺混炼投入（`cbs`）

按胎面、胎侧、钢帘线覆胶、胎圈/三角胶及气密层各独立胶料，记录实际采购并领用的该种材料。本卡仅在实际使用该确切原料时适用；不存在须由 BOM 和领料记录证明。记录供应商牌号、路线、供货形态及整份制剂质量。实际其他原料须另立原子卡；不规定来源配方或比例。

- 选定流：N-环己基-2-苯并噻唑次磺酰胺
- 流属性/单位：Mass / kg
- 数量规则：A_i / N，使用匹配原始同群分子且仅作一次报告除法。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每个声明的参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_recipe`
- 来源：`continental-commercial-2025`

###### N-(1,3-二甲基丁基)-N-苯基对苯二胺混炼投入（`six_ppd`）

按胎面、胎侧、钢帘线覆胶、胎圈/三角胶及气密层各独立胶料，记录实际采购并领用的该种材料。本卡仅在实际使用该确切原料时适用；不存在须由 BOM 和领料记录证明。记录供应商牌号、路线、供货形态及整份制剂质量。实际其他原料须另立原子卡；不规定来源配方或比例。

- 选定流：N-(1,3-二甲基丁基)-N-苯基对苯二胺
- 流属性/单位：Mass / kg
- 数量规则：A_i / N，使用匹配原始同群分子且仅作一次报告除法。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每个声明的参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_recipe`
- 来源：`continental-commercial-2025`

###### 石蜡混炼投入（`wax`）

按胎面、胎侧、钢帘线覆胶、胎圈/三角胶及气密层各独立胶料，记录实际采购并领用的该种材料。本卡仅在实际使用该确切原料时适用；不存在须由 BOM 和领料记录证明。记录供应商牌号、路线、供货形态及整份制剂质量。实际其他原料须另立原子卡；不规定来源配方或比例。

- 选定流：石蜡
- 流属性/单位：Mass / kg
- 数量规则：A_i / N，使用匹配原始同群分子且仅作一次报告除法。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每个声明的参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_recipe`
- 来源：`continental-commercial-2025`

###### 处理芳烃抽出油混炼投入（`tdae_oil`）

按胎面、胎侧、钢帘线覆胶、胎圈/三角胶及气密层各独立胶料，记录实际采购并领用的该种材料。本卡仅在实际使用该确切原料时适用；不存在须由 BOM 和领料记录证明。记录供应商牌号、路线、供货形态及整份制剂质量。实际其他原料须另立原子卡；不规定来源配方或比例。

- 选定流：处理芳烃抽出油
- 流属性/单位：Mass / kg
- 数量规则：A_i / N，使用匹配原始同群分子且仅作一次报告除法。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每个声明的参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_recipe`
- 来源：`continental-commercial-2025`

###### 双[3-(三乙氧基硅)丙基]四硫化物混炼投入（`tespt`）

按胎面、胎侧、钢帘线覆胶、胎圈/三角胶及气密层各独立胶料，记录实际采购并领用的该种材料。本卡仅在实际使用该确切原料时适用；不存在须由 BOM 和领料记录证明。记录供应商牌号、路线、供货形态及整份制剂质量。实际其他原料须另立原子卡；不规定来源配方或比例。

- 选定流：双[3-(三乙氧基硅)丙基]四硫化物
- 流属性/单位：Mass / kg
- 数量规则：A_i / N，使用匹配原始同群分子且仅作一次报告除法。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每个声明的参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_recipe`
- 来源：`continental-commercial-2025`

###### 胎体与带束层增强帘线（`steel_cord`）

采购预处理钢帘线，按胎体层及各带束层/钢丝子口用途分别计量。供货质量含黄铜镀层。覆胶由已记录覆胶胶料在厂内制得，不再另计采购已覆胶帘线。披露帘线构造与镀层；实际其他镀层须使用其独立身份。

- 选定流：镀黄铜轮胎钢帘线
- 流属性/单位：Mass / kg
- 数量规则：A_i / N，使用匹配原始同群分子且仅作一次报告除法。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每个声明的参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_components`
- 来源：`continental-commercial-2025`

###### 胎圈钢丝（`bead_wire`）

计量采购胎圈钢丝及其实际金属镀层。绕圈、覆胶和三角胶贴合属于前景操作。不得将外购胎圈总成与其组成部分重复采购入账。

- 选定流：镀层高强度胎圈钢丝
- 流属性/单位：Mass / kg
- 数量规则：A_i / N，使用匹配原始同群分子且仅作一次报告除法。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每个声明的参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_components`
- 来源：`continental-commercial-2025`

###### 脱模制剂（`release_dispersion`）

仅实际使用该供货分散液时适用。计量整份采购湿制剂；化验有机硅与载水是分账，不能再作采购投入。实际其他脱模化学品另立卡。包括胎坯处理及模具/胶囊维护损失。

- 选定流：水性有机硅脱模分散液
- 流属性/单位：Mass / kg
- 数量规则：A_i / N，使用匹配原始同群分子且仅作一次报告除法。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每个声明的参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_aux`
- 来源：`continental-commercial-2025`

###### 耗用硫化胶囊（`curing_bladder`）

按同生产群实际服务循环分摊胶囊实际更换质量，含失败循环。该工装耗材不是随胎交付的内胎。

- 选定流：丁基橡胶硫化胶囊
- 流属性/单位：Mass / kg
- 数量规则：A_i / N，使用匹配原始同群分子且仅作一次报告除法。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每个声明的参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_aux`
- 来源：`continental-commercial-2025`

###### 厂内电力（`electricity`）

计量混炼、开炼、帘线压延/裁断、挤出、胎圈制备、成型、硫化、检验、治理设备、压缩空气制备、仓储与搬运电力。子表与总表核对且不能相互重复汇总，保留停机、失败和返工负荷。

- 选定流：电力
- 流属性/单位：Energy / kWh
- 数量规则：A_i / N，使用匹配原始同群分子且仅作一次报告除法。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每个声明的参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_util`
- 来源：`continental-commercial-2025`

###### 外购蒸汽（`steam`）

仅外部供汽时适用：记录质量、压力/温度、凝结水状态及回流。焓差用于能量核对，不能再采购一次同批蒸汽。自产蒸汽是内部转移：改计实际燃料、水、电与排放，不能同时计入两套供汽。

- 选定流：蒸汽
- 流属性/单位：Mass / kg
- 数量规则：A_i / N，使用匹配原始同群分子且仅作一次报告除法。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每个声明的参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_util`
- 来源：`continental-commercial-2025`

###### 自备锅炉天然气（`natural_gas`）

仅计实际厂内燃用。保留累计体积、压力、温度、干湿基及热值基准。流量率可乘时长，累计体积不能再乘时间。不提供通用气体密度或锅炉效率。

- 选定流：天然气
- 流属性/单位：Volume / m3
- 数量规则：A_i / N，使用匹配原始同群分子且仅作一次报告除法。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每个声明的参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_util`
- 来源：`continental-commercial-2025`

###### 采购水（`water_supply`）

计量冷却、清洗及制汽外购补水；将循环水、凝结水回收与新取水区分。脱模制剂载水已在整份制剂中，不能在此重计。其他供水身份须另立卡。

- 选定流：自来水
- 流属性/单位：Volume / m3
- 数量规则：A_i / N，使用匹配原始同群分子且仅作一次报告除法。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每个声明的参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_util`
- 来源：`continental-commercial-2025`

###### 采购硫化氮气（`nitrogen`）

仅实际外购压力介质时适用。保留累计气体质量，或按已记录气态与组成将体积换算。现场制氮须计实际分离电力和损失，不得再重复计外购氮气负荷。

- 选定流：氮气
- 流属性/单位：Mass / kg
- 数量规则：A_i / N，使用匹配原始同群分子且仅作一次报告除法。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每个声明的参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_util`
- 来源：`continental-commercial-2025`

###### 仓储和发运燃料（`diesel`）

包括声明交付门内搬运和装车实际燃料。记录油罐期初末、购入和设备耗用。若采用外购运输服务，须替换其重叠燃料/车辆负荷，不能叠加。

- 选定流：柴油
- 流属性/单位：Mass / kg
- 数量规则：A_i / N，使用匹配原始同群分子且仅作一次报告除法。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每个声明的参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_dispatch`
- 来源：`continental-commercial-2025`

###### 轮胎纸标签（`paper_label`）

计实际完整标签及胶黏剂、底纸损失。仅给采购成品胎贴标不属于本制造路线。

- 选定流：不干胶纸质轮胎标签
- 流属性/单位：Mass / kg
- 数量规则：A_i / N，使用匹配原始同群分子且仅作一次报告除法。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每个声明的参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_dispatch`
- 来源：`continental-commercial-2025`

###### 聚乙烯运输包膜（`pe_wrap`）

仅实际发运包装时适用；对确实裸装交付保留证明，不强加包装。膜质量不计入轮胎净质量。实际其他包装件须各有原子交换。

- 选定流：聚乙烯拉伸膜
- 流属性/单位：Mass / kg
- 数量规则：A_i / N，使用匹配原始同群分子且仅作一次报告除法。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每个声明的参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_dispatch`
- 来源：`continental-commercial-2025`

##### 废物流

##### 基本流

###### 燃烧耗氧（`oxygen_air`）

仅实际厂内燃烧时适用。按独立燃料组成、燃烧气体分析或有依据的化学计量计实际空气中氧的耗用。空气中的惰性组分按物理气流账对应进入/离开，不得借质量残差推定未知耗氧。外购电/汽不能再计其上游燃烧耗氧。

- 选定流：空气中的氧
- 流属性/单位：Mass / kg
- 数量规则：A_i / N，使用匹配原始同群分子且仅作一次报告除法。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每个声明的参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_emissions`
- 来源：`epa-rubber-background-2008`

#### 输出

##### 产品流

###### 实际净交付新胎（`tyre_delivered`）

唯一终端输出为完整新无内胎全钢子午线卡客车胎，具橡胶气密层、钢胎体和钢带束层；不含轮辋、独立内胎或垫带。Native 身份较宽：名称分量为轮胎；生产混合，在工厂；路线和名称属性分量为空；geography/locationOfSupply 和 CAS 未指定；备注同时包含金属胎与橡胶胎。仅采用其件数身份，并在此限定为橡胶新 TBR 制造。它不提供配方、质量系数、寿命、供应商、国家电网组合或全钢制造证据。精确 native 参考单位 Item(s) 在本 PCR 中写为 item（系数 1）。

- 选定流：轮胎 `11c2e97a-624f-41de-957d-543cddb777ef`
- 流属性/单位：物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` / item
- 数量规则：1 item
- 数值来源模式：`fixed_value`
- 适用范围：`product_specific`
- 归一化基准：每个声明的参考流
- 基准类型：`reference_flow`
- 证据类型：`identity_reference`
- 采集协议：`cp_output`
- 来源：`continental-commercial-2025`; `goodyear-truck-2021`; `apollo-tbr-us-2023`

##### 废物流

###### 未硫化混炼胶废料（`uncured_scrap`）

仅实际离开边界的材料作为废物。厂内返用边角料是保留原有负荷的内部转移，仅增加实际再加工负荷，不能再算一次原胶采购。

- 选定流：未硫化混炼胶废料
- 流属性/单位：Mass / kg
- 数量规则：A_i / N，使用匹配原始同群分子且仅作一次报告除法。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每个声明的参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_waste`
- 来源：`continental-commercial-2025`; `epa-rubber-background-2008`

###### 不合格硫化轮胎（`cured_scrap`）

保留不合格胎完整质量、金属含量与处理去向，含破坏性试验。拒收胎不是净交付参考输出，不能获得避免制造新胎的抵扣。

- 选定流：不合格硫化轮胎
- 流属性/单位：Mass / kg
- 数量规则：A_i / N，使用匹配原始同群分子且仅作一次报告除法。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每个声明的参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_waste`
- 来源：`continental-commercial-2025`; `epa-rubber-background-2008`

###### 轮胎钢帘线裁切废料（`steel_scrap`）

单独称量实际外送钢帘线边料及附着橡胶，披露组成和回收去向，不能再次从钢帘线采购量扣除同一质量。

- 选定流：轮胎钢帘线裁切废料
- 流属性/单位：Mass / kg
- 数量规则：A_i / N，使用匹配原始同群分子且仅作一次报告除法。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每个声明的参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_waste`
- 来源：`continental-commercial-2025`; `epa-rubber-background-2008`

###### 收集的橡胶混炼粉尘（`collected_dust`）

记录治理收集干质量、实际组成与处置/回用去向。不能又将捕集部分记为排入空气。

- 选定流：收集的橡胶混炼粉尘
- 流属性/单位：Mass / kg
- 数量规则：A_i / N，使用匹配原始同群分子且仅作一次报告除法。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每个声明的参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_waste`
- 来源：`continental-commercial-2025`; `epa-rubber-background-2008`

###### 工业废水（`wastewater`）

记录实际外送废水湿质量、含水率、污染物物种检测与处理提供方。厂内处理出水与污泥须各有交换；COD 不是物理出口物种，也不能代表轮胎碳质量。

- 选定流：工业废水
- 流属性/单位：Mass / kg
- 数量规则：A_i / N，使用匹配原始同群分子且仅作一次报告除法。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每个声明的参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_waste`
- 来源：`continental-commercial-2025`; `epa-rubber-background-2008`

###### 废丁基橡胶硫化胶囊（`spent_bladder`）

将实际胶囊废物与不合格胎分开计量；按服务循环核对更换投入及库存变化。

- 选定流：废丁基橡胶硫化胶囊
- 流属性/单位：Mass / kg
- 数量规则：A_i / N，使用匹配原始同群分子且仅作一次报告除法。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每个声明的参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_waste`
- 来源：`continental-commercial-2025`; `epa-rubber-background-2008`

##### 基本流

###### 排入空气的二氧化碳（`co2_air`）

仅实际厂内燃烧排放时适用，采用燃料碳分析及独立物种账。外购电/汽的上游排放留在供方数据集。

- 选定流：排入空气的二氧化碳
- 流属性/单位：Mass / kg
- 数量规则：A_i / N，使用匹配原始同群分子且仅作一次报告除法。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每个声明的参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_emissions`
- 来源：`epa-rubber-background-2008`

###### 排入空气的二硫化碳（`carbon_disulfide_air`）

仅实际胶料与操作的实测/分物种排放时适用，包括硫化和冷却。保留检出限和捕集/去除效率，不默认移用历史乘用胎因子。

- 选定流：排入空气的二硫化碳
- 流属性/单位：Mass / kg
- 数量规则：A_i / N，使用匹配原始同群分子且仅作一次报告除法。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每个声明的参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_emissions`
- 来源：`epa-rubber-background-2008`

###### 排入空气的颗粒物（`particulate_air`）

将未捕集出口颗粒物质量及粒径/组成基准与收集粉尘分开。若组成物作为基本流报告，不能将总颗粒物与其组成质量再独立相加。

- 选定流：排入空气的颗粒物
- 流属性/单位：Mass / kg
- 数量规则：A_i / N，使用匹配原始同群分子且仅作一次报告除法。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每个声明的参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_emissions`
- 来源：`epa-rubber-background-2008`

###### 排入空气的水蒸气（`water_vapour_air`）

区分蒸发/蒸汽损失与独立确定的燃烧水或反应水。不能仅凭硫化或质量残差推定净生成水。

- 选定流：排入空气的水蒸气
- 流属性/单位：Mass / kg
- 数量规则：A_i / N，使用匹配原始同群分子且仅作一次报告除法。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每个声明的参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_emissions`
- 来源：`epa-rubber-background-2008`


## 7. 分配与共产品处理

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| allocation_trace_cohorts | tbr_manufacture | 优先用批次/配方/设备记录将每项原始分子归属实际配置及交付同群。公用工程共享时，用适合该介质的实测运行时间与载荷/焓/处理量驱动分摊，记录份额并核对总表。不得按铭牌能力归一，也不能只挑成功批。 | `jrc-ilcd-allocation-2010` |
| allocation_no_fictitious_credit | waste and internal returns | 内部边料/胎坯返工及仓库转移不是联产品。计实际追加加工，抵消内部转移并保留原有负荷。废料不默认获得避免原生橡胶、新胎或翻新的抵扣。实际出售次生材料时披露组成、去向及所选废物终止/分配约定，一致应用且不能静默扣掉其制造负荷。 |  |

## 8. 前景数据采集、计算与质量规则

采集保留未归一的原始期间分子及完整 WIP/成品库存结转负荷。aggregation_rule 单元仅标识最终报告基准，采集端不执行 A_i/N。卡片公式、报告基准及唯一 report_once 规则描述同一次操作，不能顺序再除。各协议归属于 tbr_manufacture 及其中指定操作阶段负责人。

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_recipe | tbr_manufacture | 配方质量 | 称量与库存台账 | 批次; 胶料用途; 配方版本; 原料及供应商牌号/路线/形态; 实际领料毛/净质量; 化验; 含水率; 原料库期初末; 拒收和零产出批; 胶料/WIP 转移; 结转负荷 | 混炼负责人保留每批未归一原始称量及库存调整后的耗用，含失败作业和返工。整份采购制剂与组成/载水分账分开。每项内部返料跟踪原有负荷，不能再采购同一橡胶。采集时不做除法。 | 按原料及批次记录 kg | 每批/计量区间及结账 | 同一完整声明原始期间及可追溯交付同群，含期初结转 | 指定工厂及实际供能/治理/仓储边界 | 每个声明的参考流 | 配方 BOM; 校准秤; 领料及库存核对 |
| cp_components | tbr_manufacture | 钢骨架与部件路线 | 部件批次与钢丝台账 | 帘线/钢丝供应商; 镀层; 帘线构造; 胎体/带束层/子口分摊; 层数; 压延线及厚度; 裁断角/接头; 供货金属质量; 覆胶胶料批次; 边料; 胎坯序列关联; WIP 和结转负荷 | 部件负责人记录钢胎体与带束层实际压延/裁断、挤出/气密层压延、胎圈缠绕及成型关联。保留未归一供货质量、内部胶料转移及损失。金属供货质量含镀层；现场覆胶不能再采购一次。 | kg; item; 结构尺寸 | 每批/计量区间及结账 | 同一完整声明原始期间及可追溯交付同群，含期初结转 | 指定工厂及实际供能/治理/仓储边界 | 每个声明的参考流 | 结构规范; 压延/裁断及胎圈/成型记录 |
| cp_aux | tbr_manufacture | 硫化与辅助材料 | 硫化循环与耗材记录 | 胎坯 ID; 模具/胶囊 ID; 实际循环温度/压力/时间; 失败循环; 冷却; 制剂领用质量与化验; 胶囊更换及库存; 返工 | 硫化负责人保留原始循环、耗材和更换记录，含失败、调试和返工。不从所引概述/试验报告抄入设定值或原料量。保留未归一耗材及完整库存/结转记录。 | kg; 实测循环条件 | 每批/计量区间及结账 | 同一完整声明原始期间及可追溯交付同群，含期初结转 | 指定工厂及实际供能/治理/仓储边界 | 每个声明的参考流 | 循环记录; 供应商制剂及更换记录 |
| cp_util | tbr_manufacture | 全部制造公用工程负荷 | 计量表及供应记录 | 介质; 总表/子表范围; 期初末读数; 时间戳; 累计体积或流量与时长标识; 气态; 蒸汽及凝结水质量/焓; 自产; 停机/返工耗用; 产品份额; 结转公用工程负荷 | 公用工程负责人保留各制造阶段及库区未归一表差与外购/自产边界。消除总子表重叠；报告前分摊完整原始期间负荷，含失败及零产出作业。每种实际介质各保留一个分子。 | kWh; kg; 带状态 m3; MJ 仅作焓分账 | 每批/计量区间及结账 | 同一完整声明原始期间及可追溯交付同群，含期初结转 | 指定工厂及实际供能/治理/仓储边界 | 每个声明的参考流 | 校准表; 燃料与供汽记录; 总量/份额核对 |
| cp_dispatch | tbr_manufacture | 仓储包装搬运及发运 | 仓储及发运台账 | 轮胎序列/批次; 入出库日期; 标签/膜毛领用及废品; 实际搬运燃料; 库存期初末; 发运门与装车记录; 运输服务边界; 退货 ID; 库存结转负荷 | 仓储负责人保留原始仓储、包装、搬运、装车耗用及全部真实退货/返工负荷。库存转移保留制造负荷，不能再作生产输出。包装供货质量不计入胎净质量，但仍是清单投入。 | kg; item; 日期和实际运输基准 | 每批/计量区间及结账 | 同一完整声明原始期间及可追溯交付同群，含期初结转 | 指定工厂及实际供能/治理/仓储边界 | 每个声明的参考流 | 库存移动; 包装领料; 搬运燃料; 签认发运记录 |
| cp_output | tbr_manufacture | 唯一合格净交付 | 质量与序列级发运台账 | 序列/批次; 配置; 新放行 P; 质量决定; 毛发运; 同群退货; 唯一净交付 N; 单胎净质量; 皮重; WIP 及成品期初末; 结转投入/负荷向量 | 质量与仓储负责人共同保留同配置原始计数、验收及校准净称重记录。退回及再验收去重；区分生产放行与实际交付。保留完整 WIP 和成品存量及结转负荷。采集不除任何分子。 | item; 不含包装 kg | 每批/计量区间及结账 | 同一完整声明原始期间及可追溯交付同群，含期初结转 | 指定工厂及实际供能/治理/仓储边界 | 每个声明的参考流 | 验收规范; 序列身份; 秤校准; 库存/发运核对 |
| cp_waste | tbr_manufacture | 外部废物与内部回收 | 废物地磅与转移台账 | 单项废物身份; 干湿质量; 橡胶/钢/镀层/水分数; 来源操作; 内部返用或外送; 处理路线; 期初末库存及结转负荷 | 废物负责人保留未归一外送质量和内部返用身份。收集粉尘不是烟囱排放。包括硫化废胎、破坏试验、受污染辅助材料及实际处理；实际污泥或其他废物逐项另列。 | 带相态及组成的 kg | 每批/计量区间及结账 | 同一完整声明原始期间及可追溯交付同群，含期初结转 | 指定工厂及实际供能/治理/仓储边界 | 每个声明的参考流 | 称重票; 分析方法; 废物联单及处理记录 |
| cp_emissions | tbr_manufacture | 物种及物理平衡 | 有组织/逸散/水分析记录 | 排放点与物种; 浓度; 流量率或累计体积; 气态; 时间; 检出限; 捕集/去除份额; 原始燃料元素; 水相态; 固液出口; 库存及结转负荷 | 环境负责人保留原始期间分物种测量，或有适用性理由的因子及实际原始活动。区分实测累计体积和流量率乘时长；保留检出限、捕集与排放部分。物理质量/元素平衡与已识别化学物种及水生成/消耗分别处理。 | kg; m3 及声明工况; 时间; 浓度 | 每批/计量区间及结账 | 同一完整声明原始期间及可追溯交付同群，含期初结转 | 指定工厂及实际供能/治理/仓储边界 | 每个声明的参考流 | 采样记录; 检测报告; 来源适用性及闭合诊断 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| stock_numerator | all nonreference inventory rows | 对每项独立物理交换或负荷 i，A_i = C_i_open_WIP + C_i_open_FG + C_i_returns_restored + F_i_period - C_i_close_WIP - C_i_close_FG - C_i_other_cohorts。F_i_period 是原料库存核对后路线实际原始期间耗用/负荷，含失败/零产出、返工、真实退货、处理及范围内仓储和发运。C 向量是随库存或其他产品群结转的可追溯累计量/负荷，不是另一次采购。C_i_returns_restored 恢复实际退回实物的原有可追踪负荷；须在其原交付群记对应冲回/更正，避免重复制造或报告。F_i_period 仅计其实际追加退货/返工负荷。先按实际群一致分配失败/返工负荷，再作这些转移。抵消内部胶料、胎坯及生产至成品库交接。保留带符号核对并说明残差，不能虚构平衡输出。 | F_i_period; C_i_open_WIP; C_i_open_FG; C_i_returns_restored; C_i_close_WIP; C_i_close_FG; C_i_other_cohorts; cp_recipe; cp_components; cp_aux; cp_util; cp_dispatch; cp_waste; cp_emissions | A_i |  |
| net_delivery | tyre_delivered | N 为声明退货截止日仍保持净交付状态的独立全新合格轮胎序列数；排除尚未重新交付的退回/未交付胎。退回再发运按同一序列的最终交付状态计一胎，不能作两次发运减未经区分的退货事件数。曾发运/退回/再验收胎保留身份，不再算新增生产。核对 FG_close = FG_open + P_new_release + R_returned - S_shipped - D_scrapped，另记有凭证的其他转移。未交付及退回存货在实际处置前保留原始制造负荷。若同群 N=0，保留负荷作结转/分配，不报告除后的单位数据集。 | cp_output; cp_dispatch; cp_waste | N |  |
| report_once | all nonreference inventory rows | 在实际原始单位/状态换算及库存/同群归属完成后，且 N>0 时，a_i = A_i / N。这是唯一归一操作；终端输出报告一个 item。阶段、卡片及汇总文字均指这一次操作。不能将各失败批除以自身产出，也不能再除已归一中间量。 | A_i; N | a_i |  |
| physical_and_species | tbr_manufacture | 对一致控制体积核对 mass_in_external + opening_physical_stock + actual_returned_mass = gross_shipped_mass + other_actual_exits + closing_physical_stock。此处采用实物跨界毛记录；若燃烧燃料，须含真实进入的燃烧氧。不能在右侧用净交付量，同时又在左侧加同批退回量。包装与胎净质量分开，各物料流分别核对。用实测或组成支持的 C/S/Zn/钢/镀层平衡，与归一 LCI 负荷向量独立核对。记录实际硫交联、挥发、水蒸发及独立确定的反应/燃烧水。本 PCR 不强加化学计量排放或反应水量。 | cp_recipe; cp_components; cp_output; cp_waste; cp_emissions | documented physical closure and actual species | `epa-rubber-background-2008` |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| quality_route | reference product | 匹配全部必需限定信息、真实钢胎体/带束结构及完整制造路线；规格/配方/循环变化应作独立配置或有依据汇总。 | 结构图; 实际批次、硫化与验收记录 |
| quality_complete_period | all inventory rows | 保留完整期间记录和期初末 WIP/成品结转负荷。不能删掉失败批、重计退货、排除真实包装/仓储，或用文献配方替代实测分子。 | 库存与负荷核对; 原始分子沿袭 |
| quality_identity | all inventory rows | 宽泛 native 轮胎；生产混合，在工厂 不含声明地理/CAS、路线或质量系数，备注含金属/橡胶。须显式限定本橡胶 TBR 件数身份。空辅助 UUID 在匹配时须独立核对完整 native 字段相容性，不能从正式族名推定供方组合或场址。 | 完整 native 原件和精确支持链; 供方材料规范 |
| quality_limits | data package | 报告测量不确定性、遗漏及理由、检出限、时间/地理适用性、配方保密与提供方匹配。本方法没有默认定量配方、排放因子、硫化设定或轮胎寿命等价。 | 原始证据及适用性声明 |

## 9. 校验规则

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| validate_scope | reference product | 核查全新未服役胎体、无内胎钢胎体/钢带束结构、完整综合制造及声明规格。拒绝翻新、外购胎改标、乘用胎或织物胎体替代，以及无依据泛化覆盖全部 36113。 | `continental-commercial-2025`; `apollo-tbr-us-2023` |
| validate_terminal_count | tyre_delivered | 要求同产品/路线/状态群的可追溯唯一合格净交付 N > 0。退回和再验收不能创造新增生产或另一个合格胎。核对放行、实物发运、退货、废品、期初末 WIP 及成品账和结转负荷；零产出批仍保留负荷记录且不能独立除以零。 |  |
| validate_atomic_units | all inventory rows | 核查每项交换单一身份、供货制剂与化验分账、属性/单位及实际气液状态，然后只做一次报告归一。累计体积不能再乘时长。精确 native 件数单位 Item(s) 与 PCR 标签 item 等同且系数为 1；轮胎行不含密度或件重系数。 |  |
| validate_balance_species | tbr_manufacture | 对同群完整物理质量及相关 C/S/Zn/金属元素账闭合，含胶料、镀层、废料、粉尘、水、放空、库存及退货。用测量/化学独立确定真实出口物种、燃烧/反应水及水相态。不得由同一残差同时反推未知水和未知出口，不能把 COD 当物理物种，也不能将全部硫强塞为假定排放。 | `epa-rubber-background-2008` |
| validate_evidence_limits | data package | 保留原始记录、路线/场址适用性、供方身份及不确定性。所引工业来源是独立技术支持，不表示同一 SKU/工厂提供了所有单元或配方。EPA 乘用胎尺寸/实验室试验不确立 TBR 因子或设定值。空辅助 UUID/提供方匹配须后续核对相容性，不能虚构数量。 | `epa-rubber-background-2008`; `continental-commercial-2025` |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | secondary_dataset; background_dataset |
| downstream_use | 作为指定商用车辆或更换供应模型的新胎供应投入，匹配确切结构/规格及一个 item 基准。 |
| allowed_use | 具体数据集质量/适用性审查后，用于相容新无内胎全钢子午线卡客车胎的实物供应。 |
| excluded_use | 泛称全部其他胎、翻新、织物胎体/实心胎、内胎供应、使用期节油、每公里比较及假定胎寿命。 |
| required_metadata | 全部参考限定信息; 过程/门边界; 原始期间和同群/库存账; 净胎质量; 供方/能源组合; 各材料和物种身份; 分配; 来源适用性。 |
| required_quality_disclosure | 原始测量覆盖与不确定性、检出限、辅助 UUID/提供方缺口以及 native 宽泛仅件数身份限制。 |
| update_trigger | 胎体/带束架构、帘线镀层路线、压延/挤出路线、胶料配方、胎规格/规范、能源供应、验收/发运门或库存/结转账变化。 |

## 11. 数据源

| source_id | type | reference | used_for |
| --- | --- | --- | --- |
| unsd-cpc3-2025 | official_guidance | UNSD, CPC Version 3.0 Structure, 30 June 2025. https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv ; retrieved 2026-10-16 | 仅支持相邻分类边界；36113 的范围宽于本结构子集。 |
| continental-commercial-2025 | handbook | Continental, White Paper: Tires for Commercial Vehicles, PDF modified 2025-12-22, pp. 7, 9. https://cdn.continental.com/fileadmin/__imported/sites/corporate/_international/english/hubpages/10_20press/01_press_releases/06_20cvt/001_white_papers_cvt/white_paper_tires_for_commercial_vehicles.pdf ; retrieved 2026-10-16 | 商用钢丝子午线胎体及原料、混炼、部件、成型、硫化、检验完整路线。制造商概述，不提供工厂配方、操作设定值、寿命或排放因子。 |
| goodyear-truck-2021 | handbook | Goodyear, Truck Tyres Technical Data Book, 2021 file edition, pp. 78–79. https://www.goodyear.eu/content/dam/goodyear/truck/pdfs/bg_databook_2021.pdf ; retrieved 2026-10-16 | 钢胎体/带束层子午线结构与无内胎气密层的区别；历史技术证据。内胎和垫带插图仅用于有内胎胎；不采用默认层数或配方。 |
| apollo-tbr-us-2023 | handbook | Apollo, Truck and Bus Radial Tires Technical Databook 2023 US, pp. 25–27. https://www.apollotyres.com/content/dam/orbit/usa/us-truck-tires/cv-usa/DIGITAL%20TBR%20TECHN.%20DATABOOK%202023%20US.pdf ; retrieved 2026-10-16 | 商用全钢子午线/无内胎实物及部件、标识身份。美国市场制造商示意，不代表通用几何、验收阈值、场址地理或定量清单。 |
| epa-rubber-background-2008 | official_guidance | US EPA, Emission Factor Documentation for AP-42 Section 4.12 Manufacture of Rubber Products, Draft Final November 2008, §§3.2.1, 3.3.2 (pp. 3-4–3-5). https://www.epa.gov/sites/default/files/2020-10/documents/db04s12.pdf ; retrieved 2026-10-16 | 仅支持压延、硫化/冷却及排放采集的过程语境。历史试验包括乘用胎尺寸和非轮胎/实验室胶料；不移用为 TBR 排放因子、硫化时间、温度或压力。 |
| jrc-ilcd-allocation-2010 | official_guidance | 欧盟委员会JRC，ILCD Handbook: General guide for Life Cycle Assessment — Detailed guidance，2010年3月第一版，7.9.3节，印刷257–258页（PDF277–278）；https://eplca.jrc.ec.europa.eu/uploads/ILCD-Handbook-General-guide-for-LCA-DETAILED-GUIDANCE-12March2010-ISBN-fin-v1.0-EN.pdf | 仅在选择分配而非替代的归因型范围内，以虚拟细分及逐交换的决定性物理因果关系，支持批次配方设备直接归属及各公用工程专属的时间、载荷、焓或处理量驱动。制造来源支持结构工艺，不提供这一LCA层级。未建立默认物理经济份额、库存层公式、配方、收率能耗排放因子、自动联产品身份、替代负荷信用或PEF/CFF符合性；仍须实际全场总量、失败运行、服务驱动及库存批群谱系。 |
