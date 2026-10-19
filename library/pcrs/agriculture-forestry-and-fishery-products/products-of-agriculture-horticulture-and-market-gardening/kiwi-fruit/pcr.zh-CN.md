---
pcr_id: pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.kiwi-fruit
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 包装场发运前鲜猕猴桃

## 1. 范围和适用性

本候选 PCR 覆盖在管理型果园生产、采收、初级处理、分级以及声明的冷藏期之后，于包装场发运的鲜猕猴桃。
覆盖绿心、黄心及其他商业品种的整果鲜猕猴桃。

不包括加工猕猴桃产品、声明发运点之后的零售处理以及无关的果园服务。品种、地区、果园系统、成熟度和市场等级
仍然是前景数据输入。

## 2. 产品类别身份

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.kiwi-fruit |
| classification_refs | CPC 3.0 01352 (Kiwi fruit); mapping relation: exact |
| covered_products | 包装场发运前的鲜整果猕猴桃 |
| excluded_products | 加工水果、果汁、果泥、零售食品处理 |
| representative_product | 包装场发运的市场等级鲜猕猴桃 |
| production_route | 管理型果园生产 → 采收/采集 → 初级处理和分级 → 可选冷藏 → 包装场发运 |
| market_state | 成熟、市场等级鲜果；声明品种和等级 |

## 3. 参考流

| Field | Value |
| --- | --- |
| What | 包装场发运的鲜整果猕猴桃 |
| How much | 1 kg |
| How well | 品种、成熟度或干物质标准、等级和声明发运状态 |
| How long or cycle | 一个果园生产周期及声明的采后储存期 |
| reference_flow_link | reference_product_at_declared_handoff |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Kiwi fruit |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | 品种；成熟度或干物质；市场等级；发运状态 |

每份前景数据包须声明实际路线、终端产品状态和交接门，保留原始称量、质量平衡及批次追溯记录。以该门的唯一交接参考输出归一化，前序工序采用实测转移数量。

唯一参考输出为 `reference_product_at_declared_handoff`，由下列实际路线在声明交接门的产品承接。原路线输出编号用于追溯实际来源和物理状态，不再分别固定为参考数量。

## 4. 测量和单位规则

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| reference_mass | reference product | Mass (UUID 待解析) | kg | 将声明的产品输出归一化到包装场发运点的 1 kg。 |
| storage_duration | cold-storage process | time | days | 记录实际储存时间，并在使用时识别普通空气或气调储存。 |
| maturity_measure | harvest output | soluble solids or dry matter | % or declared site unit | 记录用于确定采收成熟度的标准并保留其来源方法。 |

## 5. 系统边界

前景边界从声明的果园生产投入开始，到市场等级整果从包装场发运结束。纳入所代表果园应归属的建园、未结果期、补植和终止贡献，以及应归属的耐久基础设施服务。按 calc_kiwi_lifecycle 保留期间、受益对象和证据。缺少分配记录属于完整性缺口，不能据此省略这些负担；另有研究排除时须单独论证并披露。零售配送和消费者催熟不纳入。

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | 管理型果园生产投入和已建立的作物系统 |
| starting_condition_role | 已披露的前景起始条件 |
| product_classification_scope | 包装场发运前的鲜整果猕猴桃 |
| recursive_input_rule | 同类别猕猴桃投入保持显式记录并披露来源批次；不得递归到另一份猕猴桃 PCR |
| upstream_dataset_requirement | 披露购买的种植材料、土壤改良剂、灌溉、植保投入、能源和包装投入及其来源数据集身份 |
| disclosure | 果园地点和系统、品种、成熟度标准、采收日期、包装场交接、等级和储存路线 |

### 规范边界规则（`boundary_start_and_handoff`）

数据提供者必须识别果园生产起始条件、独立采收交接、初级处理/分级交接以及声明的包装场发运点。任何偏离都必须披露。

## 6. 过程清单结构

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| orchard_production | 管理型果园生产 | required | 使用果园路线 | activity | 每 1 kg 发运水果 |
| harvest_capture | 采收和田间处理 | required | 水果离开果园并交接 | activity | 每 1 kg 采收水果 |
| primary_conditioning | 初级处理和分级 | required | 发运前进行处理、分级或分选 | activity | 每 1 kg 处理水果 |
| cold_storage | 冷藏和稳定化 | conditional | 发运前储存水果 | activity | 每 1 kg 发运水果及每储存日 |
| declared_reference_handoff | 声明交接门的产品计量 | required |  | foreground | reference_product_at_declared_handoff |

### 过程：管理型果园生产（`orchard_production`）

#### 输入

##### 产品流

###### 猕猴桃种植材料（`planting_material_input`）

按实际产品身份记录外购藤本植株、苗木、嫁接材料或补植株，并保留果园地块、建园年份及数量记录。在实际材料明确且精确的平台身份查询得到核实之前，种植材料的 UUID 保持未解析。

- 选定流：实际使用的猕猴桃种植材料
- 流属性/单位：数量或质量 / 株或 kg
- 数量规则：按果园地块和建园年份记录购买或种植数量。包括实际采用的苗木、嫁接材料或补植株；具体材料身份确认前保留 UUID 未解析。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_orchard_input_records`
- 来源：

###### 尿素肥料（`orchard_production_agricultural_nutrient_inputs_urea`）

**orchard_production_agricultural_nutrient_inputs 的采集范围与适用性。** 下列具体身份分别列卡，仅在原有过程范围内有实际使用或产生记录时启用；不是必用材料清单或默认配方。未发生须有依据，缺少记录不得记为零。其他实际材料必须另建具体身份卡，不能套用以下名称或 UUID。保留原有归属和边界，避免与包含这些投入的外包服务双计。

每种实际产品数量只采集一次，保留产品身份、配方、组成、施用事件及分配依据；计算声明的 N、P 或 P2O5、K 或 K2O 数量，避免复合肥和有机肥重复计入。前景数据生成时逐一展开实际产品交换并核验 UUID。

用设备、供应商及同期计量记录确认身份、等级、状态和单位；产品 UUID 不证明实际使用或上游供应数据集相容性。 按产品实物质量计一次，并保留含水率、N/P/K 配方及施用事件；养分量是计算属性，不得另计同一产品。未列出的复合肥和有机肥须按配方或原料单独建卡。

- 选定流：尿素 `3f8850c0-f718-4c4b-8fcb-8fd42e03aa8e`
- 流属性 / 单位：质量 / kg
- 数量规则：依 `cp_orchard_input_records` 采集本卡身份的原始数量，按原有归属规则计算每声明参考流的交换量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_orchard_input_records`
- 来源：`fao-fertilizer-identities`

仅当实际配方及等级兼容时使用此产品身份。保留供应商组成及质量记录，不以养分质量、稀释溶液质量或服务活动替代产品质量。UUID本身不提供剂量或排放因子。

###### 硫酸铵肥料（`orchard_production_agricultural_nutrient_inputs_ammonium_sulfate`）

用设备、供应商及同期计量记录确认身份、等级、状态和单位；产品 UUID 不证明实际使用或上游供应数据集相容性。 按产品实物质量计一次，并保留含水率、N/P/K 配方及施用事件；养分量是计算属性，不得另计同一产品。未列出的复合肥和有机肥须按配方或原料单独建卡。

- 选定流：硫酸铵 `8c6f0cbb-16d7-4dc9-8d55-e8dea17d7faf`
- 流属性 / 单位：质量 / kg
- 数量规则：依 `cp_orchard_input_records` 采集本卡身份的原始数量，按原有归属规则计算每声明参考流的交换量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_orchard_input_records`
- 来源：`fao-fertilizer-identities`

仅当实际配方及等级兼容时使用此产品身份。保留供应商组成及质量记录，不以养分质量、稀释溶液质量或服务活动替代产品质量。UUID本身不提供剂量或排放因子。

###### 重过磷酸钙肥料（`orchard_production_agricultural_nutrient_inputs_triple_superphosphate`）

用设备、供应商及同期计量记录确认身份、等级、状态和单位；UUID 尚未确认。 按产品实物质量计一次，并保留含水率、N/P/K 配方及施用事件；养分量是计算属性，不得另计同一产品。未列出的复合肥和有机肥须按配方或原料单独建卡。

- 选定流：重过磷酸钙肥料
- 流属性 / 单位：质量 / kg
- 数量规则：依 `cp_orchard_input_records` 采集本卡身份的原始数量，按原有归属规则计算每声明参考流的交换量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_orchard_input_records`
- 来源：`fao-fertilizer-identities`

###### 氯化钾肥料（`orchard_production_agricultural_nutrient_inputs_potassium_chloride`）

用设备、供应商及同期计量记录确认身份、等级、状态和单位；UUID 尚未确认。 按产品实物质量计一次，并保留含水率、N/P/K 配方及施用事件；养分量是计算属性，不得另计同一产品。未列出的复合肥和有机肥须按配方或原料单独建卡。

- 选定流：氯化钾肥料
- 流属性 / 单位：质量 / kg
- 数量规则：依 `cp_orchard_input_records` 采集本卡身份的原始数量，按原有归属规则计算每声明参考流的交换量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_orchard_input_records`
- 来源：`fao-fertilizer-identities`

###### 作为肥料施用的牛粪（`orchard_production_agricultural_nutrient_inputs_cattle_manure`）

用设备、供应商及同期计量记录确认身份、等级、状态和单位；UUID 尚未确认。 按产品实物质量计一次，并保留含水率、N/P/K 配方及施用事件；养分量是计算属性，不得另计同一产品。未列出的复合肥和有机肥须按配方或原料单独建卡。

- 选定流：作为肥料施用的牛粪
- 流属性 / 单位：质量 / kg
- 数量规则：依 `cp_orchard_input_records` 采集本卡身份的原始数量，按原有归属规则计算每声明参考流的交换量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_orchard_input_records`
- 来源：`fao-organic-nutrients`

###### 施入土壤的植物残体堆肥（`orchard_production_agricultural_nutrient_inputs_plant_compost`）

用设备、供应商及同期计量记录确认身份、等级、状态和单位；UUID 尚未确认。 按产品实物质量计一次，并保留含水率、N/P/K 配方及施用事件；养分量是计算属性，不得另计同一产品。未列出的复合肥和有机肥须按配方或原料单独建卡。

- 选定流：施入土壤的植物残体堆肥
- 流属性 / 单位：质量 / kg
- 数量规则：依 `cp_orchard_input_records` 采集本卡身份的原始数量，按原有归属规则计算每声明参考流的交换量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_orchard_input_records`
- 来源：`fao-organic-nutrients`

###### 灌溉供水（`irrigation_water_input`）

按果园地块和生产期间计量或计算实际输送的灌溉水；与环境取水分别记录。

- 选定流：灌溉供水
- 流属性/单位：体积 / m3
- 数量规则：按果园地块和生产期间计量或计算实际输送的灌溉水；与环境取水分别记录。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_orchard_input_records`
- 来源：

###### 果园作业供电（`orchard_electricity_input`）

记录用于灌溉、田间服务及其他已纳入果园作业的外购电力。

- 选定流：果园供电
- 流属性/单位：能量 / kWh
- 数量规则：计量或依据账单记录电量，并分配给所代表的果园产出。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_orchard_input_records`
- 来源：

###### 柴油 (`orchard_mobile_fuel_input_diesel`)

仅适用于本作业有记录的柴油机械。保留燃料牌号及配方，体积按实测或供应商支持的密度换算。其他动力系统按实际载能体记录，不用柴油当量替代。执行`orchard_mobile_fuel_input_specific_input`，本示例不是必用投入。不重复计入机械服务包含项，也不对现场发电内部转移的电力再计外购供电；实际燃料燃烧及发电排放仍须单独核算。

- 选定流：柴油 `9d258d75-6792-4f1c-9856-81602ed8f816`
- 流属性 / 单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：按`cp_orchard_input_records`采集`orchard_production`的该载能体用量。共用量仅归属一次，归属原始量乘声明参考数量，再除以相同产品单位下匹配的最终合格产出数量；保留实测阶段吞吐及原有分配规则，不对已归一化量再次归一化。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：per declared reference flow
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_orchard_input_records`
- 来源：`route-energy-fao`

#### 输出

##### 产品流

###### 果园水果产出（`orchard_fruit_output`）

记录采收前作为预期产出的猕猴桃，包括品种和成熟度基准。

- 选定流：猕猴桃 `7a7a3b3a-a064-4afb-9c8f-bd584fa2f286`
- 流属性/单位：质量 / kg
- 数量规则：核对所代表果园水果的采收质量及质量平衡。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_orchard_output_records`
- 来源：

##### 废物流

###### 果园残余物及损失（`orchard_residues`）

将修剪物、落果及其他残余物与预期水果产出分开记录，并声明其处理方式。

该卡片合并了路线特定的残余物身份，因此保持未绑定；数据生产时须按实际残余物及去向拆分。

- 选定流：实际果园残余物或损失物流
- 流属性/单位：质量 / kg 湿物料或干物料
- 数量规则：测量实际残余物及损失数量，记录其湿基或干基及去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_orchard_output_records`
- 来源：

### 过程：采收和田间处理（`harvest_capture`）

#### 输入

##### 产品流

###### 采收接收的果园水果（`harvest_input`）

记录进入采收环节的果园产出、成熟度判定标准及采收日期或采收批次。

- 选定流：猕猴桃 `7a7a3b3a-a064-4afb-9c8f-bd584fa2f286`
- 流属性/单位：质量 / kg
- 数量规则：记录采收批次接收的果园水果产出质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_harvest_records`
- 来源：

#### 输出

##### 产品流

###### 交给包装场的采收水果（`harvested_fruit`）

记录已采收产出的状态及其向初级调理的交接；田间周转箱和可复用搬运资产跨越边界时也须报告。

- 选定流：猕猴桃 `7a7a3b3a-a064-4afb-9c8f-bd584fa2f286`
- 流属性/单位：质量 / kg
- 数量规则：称量交给包装场接收的采收水果质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_harvest_records`
- 来源：

##### 废物流

###### 采收损失（`harvest_losses`）

将采收中损伤、掉落或被拒收的水果与预期采收产出分开记录。在按实际物料状态和去向对实测损失分类之前，该卡片保持未绑定。

- 选定流：实际猕猴桃采收损失物流
- 流属性/单位：质量 / kg
- 数量规则：测量采收损失质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_harvest_records`
- 来源：

### 过程：初级处理和分级（`primary_conditioning`）

#### 输入

##### 产品流

###### 初级处理用水（`conditioning_water_input`）

将清洗、卫生清洁、水冷或其他初级调理用水与灌溉水分开记录。

- 选定流：猕猴桃初级处理用水
- 流属性/单位：体积 / m3
- 数量规则：计量或按批次计算输送的处理用水。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_conditioning_records`
- 来源：

###### 初级处理供电（`conditioning_electricity_input`）

记录清洗、干燥、分级、输送、冷却及其他已纳入包装场作业的用电量。

- 选定流：猕猴桃初级处理供电
- 流属性/单位：能量 / kWh
- 数量规则：计量电量，或按批次、班次、处理量或运行时间分配。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_conditioning_records`
- 来源：

###### 进入初级处理的水果（`conditioning_input`）

记录进入调理环节的原始采收状态和接收交接点。

- 选定流：猕猴桃 `7a7a3b3a-a064-4afb-9c8f-bd584fa2f286`
- 流属性/单位：质量 / kg
- 数量规则：称量初级处理接收的水果质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_conditioning_records`
- 来源：

#### 输出

##### 产品流

###### 市场等级猕猴桃（`graded_fruit`）

称量验收合格的市场等级水果产出，并记录等级、大小、成熟度信息及待发运状态。

- 选定流：猕猴桃 `7a7a3b3a-a064-4afb-9c8f-bd584fa2f286`
- 流属性/单位：质量 / kg
原始产出计量与核对要求：称量验收合格的市场等级水果产出。

- 数量规则：实测净转移质量，保留批次、实际产品状态和含水率基准；在声明交接门对账至最终参考输出。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_conditioning_records`
- 来源：

##### 废物流

###### 剔除及降级水果（`culls_and_downgrades`）

按回收、加工、饲料或处置等不同产出去向，分别记录剔除果和降级水果。

在明确每个产出去向及物料状态之前，该卡片保持未绑定；选择精确的平台 UUID 前，数据生产须将有用途的降级水果与废弃剔除果拆开。

- 选定流：实际降级猕猴桃或剔除物流
- 流属性/单位：质量 / kg
- 数量规则：称量剔除及降级水果质量并记录去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每声明的参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_conditioning_records`
- 来源：

### 过程：冷藏和稳定化（`cold_storage`）

#### 输入

##### 产品流

###### 冷藏供电（`storage_electricity_input`）

记录制冷、气调设备、风机、监测及已纳入搬运作业的用电量。

- 选定流：猕猴桃冷藏供电
- 流属性/单位：能量 / kWh
- 数量规则：计量电量或依据储存批次及持续时间分配。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：储存时间（`storage_duration`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_storage_records`
- 来源：

###### 进入储存的处理后水果（`storage_input`）

称量进入储存的水果质量，并记录水果状态、储存开始日期、储存模式及储存去向。

- 选定流：猕猴桃 `7a7a3b3a-a064-4afb-9c8f-bd584fa2f286`
- 流属性/单位：质量 / kg
- 数量规则：称量进入储存的水果质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：储存时间（`storage_duration`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_storage_records`
- 来源：

#### 输出

##### 产品流

###### 储存后发运的水果（`storage_output`）

称量储存后发运的水果质量，并记录储存时长、发运状态及任何已声明的催熟或质量控制处理。

- 选定流：猕猴桃 `7a7a3b3a-a064-4afb-9c8f-bd584fa2f286`
- 流属性/单位：质量 / kg
原始产出计量与核对要求：称量储存后发运的水果质量。

- 数量规则：实测净转移质量，保留批次、实际产品状态和含水率基准；在声明交接门对账至最终参考输出。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每声明的参考流
- 基准类型：储存时间（`storage_duration`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_storage_records`
- 来源：

##### 废物流

###### 储存损失（`storage_losses`）

将储存期间的腐烂、失重和拒收水果与发运产品分开记录。在明确实际拒收物料状态和去向之前，该卡片保持未绑定。

- 选定流：实际猕猴桃储存损失物流
- 流属性/单位：质量 / kg
- 数量规则：测量储存损失质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：储存时间（`storage_duration`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_storage_records`
- 来源：


### 过程：声明边界的产品交接计量（`declared_reference_handoff`）
该节点记录既有系统边界上的实际交接数量，用于对账和参考数量归一化。它不代表新增物理工序，不自动引入干燥、冷却、储存、包装或运输。每份数据包须声明一条实际路线、一个终端产品状态、含水率或干物质基准及交接门。仅将该路线在此交接门的合格产品传入本节点；其他路线不得作为额外投入，联产品另行记录并按第 7 节处理。前序工序的投入、损失和排放只计一次。以实际交接净质量作为归一化分母；计量对账节点不改变质量、产率或分配结果。
#### 输入
##### 产品流
###### 实际路线的交接产品（`actual_route_product_for_handoff`）
记录实际终端路线交付的合格产品；与交接门称重和批次记录对账。
- 选定流：猕猴桃
- 流属性 / 单位：质量 / kg
- 数量规则：实际交接门的实测合格产品净质量，按参考数量归一化；不得汇总前序各阶段数量，不得计入其他路线或联产品。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_declared_reference_handoff`
- 数量范围：交接数量归一化恒等式
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：1
  - 上限：1
  - 单位：kg/kg 同状态交接净质量
  - 基准：同一交接状态的实测净质量归一化；不表示物理工序的产率
  - 基准类型：过程输出（`process_output`）
  - 证据类型：方法公式（`method_formula`）
  - 来源：`declared-handoff-measurement-definition`

##### 废物流
该计量节点不产生新的废物投入。
##### 基本流
该计量节点不产生新的资源投入。
#### 输出
##### 产品流
###### 声明交接门的参考产品（`reference_product_at_declared_handoff`）
- 选定流：猕猴桃
- 流属性 / 单位：质量 / kg
- 数量规则：1 kg
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_declared_reference_handoff`
实际状态的产品 UUID 须独立核实；当前未确认时保持待核实，不继承前序或其他路线的 UUID。
- 数量范围：交接数量归一化恒等式
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：1
  - 上限：1
  - 单位：kg/kg 同状态交接净质量
  - 基准：同一交接状态的实测净质量归一化；不表示物理工序的产率
  - 基准类型：过程输出（`process_output`）
  - 证据类型：方法公式（`method_formula`）
  - 来源：`declared-handoff-measurement-definition`

##### 废物流
实际损失已在发生工序记录；不得在此重复记录。
##### 基本流
实际排放已在发生工序记录；不得在此重复记录。

## 7. 分配和联产品处理

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `output_set_and_allocation` | 全部预期产出 | 列出合格鲜果等级及独立预期的降级或其他产品，保留实测数量、状态、交接点和接收方。弃置次果、田间残余和内部转移不获得联产品份额，其生产与处理负担保留在产出可售产品的路线中。同一实际质量只能有一个最终去向。 | `ghg-protocol-product-standard-2011` |
| `kiwi_allocation_precedence` | 共享果园和包装场负担 | 先直接归属可分开的品种、等级、运行、包装和冷却专属作业。同等共同搬运服务的可比鲜猕猴桃等级，按实测果实净质量分配剩余共同负担。存在其他真实联产品时，仅在有据证明与该作业因果相关时采用实测物理驱动；否则按同期间首次分离点经济份额 a_i=(q_i*p_i)/sum(q_j*p_j) 分配，纳入完整产出集合、可比交接点及币种和代表性价格。未知价格不能记零。披露合计为一的份额及重要替代方法敏感性，不自动给予替代信用。 | `ghg-protocol-product-standard-2011` |

具体身份卡不继承原集合卡的数量范围。实际数量由原始记录、库存/计量对账及声明参考流计算；在取得对应身份、单位、期间和边界一致的证据前，不提供默认量或数值筛查范围。缺少范围是质量披露项，并非零投入或完整性证明。

## 8. 前景数据采集、计算和质量规则

### 完成数据集前确认具体投入身份

依据供应商规格、设备及原始记录确认本作业的实际投入。这是必需的采集要求，不是一条交换。完成数据集前，每种实际材料、配方产品、载能体或独立外购服务须分别建立物理身份具体的卡片，并记录原生数量及属性；核验兼容UUID，或明确保留未解析身份且不得宣称数据集已完整链接。不以条件式示例替代未知实际投入，不编造配方，不漏掉必需用量，不由缺失记录推定零消耗。共用投入、复用资产及服务包含项仅归属一次，保留原有阶段、期间及衔接最终参考产出的实测吞吐。原集合范围不作为单项投入上限或用量默认值。

| requirement_id | collection_protocol_id | 保留的采集范围 |
| --- | --- | --- |
| `orchard_mobile_fuel_input_specific_input` | `cp_orchard_input_records` | 作业 orchard_production：按作业和果园地块测量、依据账单或计算燃料用量；记录实际燃料种类。 原数量方法：按作业和果园地块测量、依据账单或计算燃料用量；记录实际燃料种类。 |
| `crop_protection_input_specific_input` | `cp_orchard_input_records` | 作业 orchard_production：按具体产品和施用事件测量制剂质量；每种除草剂、杀虫剂、杀菌剂或其他制剂分别记录交换，未确认 UUID 保持未解析。 原数量方法：按具体产品和施用事件测量制剂质量；每种除草剂、杀虫剂、杀菌剂或其他制剂分别记录交换，未确认 UUID 保持未解析。 |
| `flexible_packaging_input_specific_input` | `cp_conditioning_records` | 作业 primary_conditioning：依据供应商规格及实际领用量记录发运批次的软包装用量。 原数量方法：依据供应商规格及实际领用量记录发运批次的软包装用量。 |
| `carton_box_packaging_input_specific_input` | `cp_conditioning_records` | 作业 primary_conditioning：依据供应商规格及实际领用量记录发运批次的箱体包装用量。 原数量方法：依据供应商规格及实际领用量记录发运批次的箱体包装用量。 |
| `pallet_crate_packaging_input_specific_input` | `cp_conditioning_records` | 作业 primary_conditioning：依据供应商或资产记录分配该批次的托盘或周转箱使用量。 原数量方法：依据供应商或资产记录分配该批次的托盘或周转箱使用量。 |


先按各采集协议保留原始场址、批次、周期及阶段数量与分母，并完成库存、损失、含水率和共产品归属核对；随后按实际归属的验收交付产品量归一化：归一化交换量 = 归属原始交换量 × 声明参考数量 / 同一边界和计量基准的验收产品量。多年生建植和共享作业先执行各自分摊规则，不得把内部转移数量设为最终参考数量。每声明的参考流指第 3 节的数量、单位和产品状态；数据包必须声明实际路线和门。


采集果园面积和生产期、品种、种植及管理投入、灌溉和能源、采收日期和成熟度标准、采收量和分级量、次品、储存模式和时间、包装投入及所有输出去向。
每个数据来源使用独立采集协议，并保留覆盖范围、时间代表性、测量方法和不确定性说明。

所有采集量归一化到 1 kg 发运市场等级猕猴桃。保持果园、采收、处理、储存、次品和损失之间的质量平衡，不得从其他水果 PCR 推断当前果园数量。

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_orchard_input_records | orchard_production | 种植和投入 | 采购及田间施用记录 | 投入品、数量、养分或有效成分、日期、地块、面积 | 发票、标签、施用日志；原始汇总与分配：按投入品汇总并归一化到发运质量 `orchard_mobile_fuel_input_specific_input`: 作业 orchard_production：按作业和果园地块测量、依据账单或计算燃料用量；记录实际燃料种类。 原数量方法：按作业和果园地块测量、依据账单或计算燃料用量；记录实际燃料种类。 依据供应商规格、设备及原始记录确认本作业的实际投入。这是必需的采集要求，不是一条交换。完成数据集前，每种实际材料、配方产品、载能体或独立外购服务须分别建立物理身份具体的卡片，并记录原生数量及属性；核验兼容UUID，或明确保留未解析身份且不得宣称数据集已完整链接。不以条件式示例替代未知实际投入，不编造配方，不漏掉必需用量，不由缺失记录推定零消耗。共用投入、复用资产及服务包含项仅归属一次，保留原有阶段、期间及衔接最终参考产出的实测吞吐。原集合范围不作为单项投入上限或用量默认值。 `crop_protection_input_specific_input`: 作业 orchard_production：按具体产品和施用事件测量制剂质量；每种除草剂、杀虫剂、杀菌剂或其他制剂分别记录交换，未确认 UUID 保持未解析。 原数量方法：按具体产品和施用事件测量制剂质量；每种除草剂、杀虫剂、杀菌剂或其他制剂分别记录交换，未确认 UUID 保持未解析。 依据供应商规格、设备及原始记录确认本作业的实际投入。这是必需的采集要求，不是一条交换。完成数据集前，每种实际材料、配方产品、载能体或独立外购服务须分别建立物理身份具体的卡片，并记录原生数量及属性；核验兼容UUID，或明确保留未解析身份且不得宣称数据集已完整链接。不以条件式示例替代未知实际投入，不编造配方，不漏掉必需用量，不由缺失记录推定零消耗。共用投入、复用资产及服务包含项仅归属一次，保留原有阶段、期间及衔接最终参考产出的实测吞吐。原集合范围不作为单项投入上限或用量默认值。 | kg、L、kWh、件 | 每次事件 | 完整生产年度 | 果园地块 | 每声明的参考流 | 发票、标签、田间日志 |
| cp_orchard_output_records | orchard_production | 果园产出和残余物 | 采收及去向记录 | 总果量、合格果、次品、残余物、去向、日期、地块 | 校准秤、采收票据、残余物日志；原始汇总与分配：核对全部产出并归一化到发运质量 | kg | 每次采收 | 完整采收年度 | 果园地块 | 每声明的参考流 | 秤校准、票据、去向记录 |
| cp_harvest_records | harvest_capture | 采收果实和损失 | 采收作业记录 | 日期、地块、品种、成熟度、数量、劳务或燃料、损失 | 采收日志、票据、设备或燃料记录；原始汇总与分配：按地块汇总并与果园产出核对 | kg、L、h | 每次作业 | 采收季 | 果园及采收作业 | 每声明的参考流 | 日期日志、票据、计量或发票 |
| cp_conditioning_records | primary_conditioning | 处理、分级、次品和废弃果 | 包装场入场及分级记录 | 入场量、等级、次品、废弃物、水、能源、包装、日期、批次 | 包装场系统、秤、计量表、包装领用记录；原始汇总与分配：核对入场量、等级、次品和废弃物 `flexible_packaging_input_specific_input`: 作业 primary_conditioning：依据供应商规格及实际领用量记录发运批次的软包装用量。 原数量方法：依据供应商规格及实际领用量记录发运批次的软包装用量。 依据供应商规格、设备及原始记录确认本作业的实际投入。这是必需的采集要求，不是一条交换。完成数据集前，每种实际材料、配方产品、载能体或独立外购服务须分别建立物理身份具体的卡片，并记录原生数量及属性；核验兼容UUID，或明确保留未解析身份且不得宣称数据集已完整链接。不以条件式示例替代未知实际投入，不编造配方，不漏掉必需用量，不由缺失记录推定零消耗。共用投入、复用资产及服务包含项仅归属一次，保留原有阶段、期间及衔接最终参考产出的实测吞吐。原集合范围不作为单项投入上限或用量默认值。 `carton_box_packaging_input_specific_input`: 作业 primary_conditioning：依据供应商规格及实际领用量记录发运批次的箱体包装用量。 原数量方法：依据供应商规格及实际领用量记录发运批次的箱体包装用量。 依据供应商规格、设备及原始记录确认本作业的实际投入。这是必需的采集要求，不是一条交换。完成数据集前，每种实际材料、配方产品、载能体或独立外购服务须分别建立物理身份具体的卡片，并记录原生数量及属性；核验兼容UUID，或明确保留未解析身份且不得宣称数据集已完整链接。不以条件式示例替代未知实际投入，不编造配方，不漏掉必需用量，不由缺失记录推定零消耗。共用投入、复用资产及服务包含项仅归属一次，保留原有阶段、期间及衔接最终参考产出的实测吞吐。原集合范围不作为单项投入上限或用量默认值。 `pallet_crate_packaging_input_specific_input`: 作业 primary_conditioning：依据供应商或资产记录分配该批次的托盘或周转箱使用量。 原数量方法：依据供应商或资产记录分配该批次的托盘或周转箱使用量。 依据供应商规格、设备及原始记录确认本作业的实际投入。这是必需的采集要求，不是一条交换。完成数据集前，每种实际材料、配方产品、载能体或独立外购服务须分别建立物理身份具体的卡片，并记录原生数量及属性；核验兼容UUID，或明确保留未解析身份且不得宣称数据集已完整链接。不以条件式示例替代未知实际投入，不编造配方，不漏掉必需用量，不由缺失记录推定零消耗。共用投入、复用资产及服务包含项仅归属一次，保留原有阶段、期间及衔接最终参考产出的实测吞吐。原集合范围不作为单项投入上限或用量默认值。 | kg、m3、kWh、件 | 每批次或班次 | 处理期间 | 包装场生产线 | 每声明的参考流 | 批次记录、秤和计量检查 |
| cp_storage_records | cold_storage | 入库、发运和储存损失 | 冷库及发运记录 | 批次、起止时间、模式、温度、入库、发运、失重、拒收 | 冷库日志、库存系统、发运票据；原始汇总与分配：核对入库量、发运量和损失 | kg、days、kWh | 每批次及每日 | 声明的储存期间 | 冷库及发运交接点 | 每声明的参考流 | 温度记录、库存记录、发运票据 |
| `cp_declared_reference_handoff` | declared_reference_handoff | reference_product_at_declared_handoff | 交接计量与验收记录 | route, terminal_output_row_id, product_state, gate, lot, net_mass_kg, moisture_basis, acceptance, tare | 采用校准衡器或可追溯称重记录，将实际终端工序交接批次与验收净质量、产品状态及含水率对账；剔除包装皮重，不汇总前序阶段数量。 | kg | 每交接批次 | 声明报告期 | 声明交接门 | 每声明的参考流 | 校准或称重凭证、验收和批次追溯 |
| `cp_kiwi_lifecycle` | orchard_production | 果园和资产生命周期归属 | 队列及服务台账 | 园区/队列；事件身份及原生单位；建园/未结果期/补植/终止日期和数量；含零产年在内的年度实际产出；有据剩余产出轨迹；资产消费者及服务量；上游覆盖；不确定性 | 将原始事件记录关联到受益队列。完整生命周期采用实际产出，未结束时采用有不确定性的场址预测；不编造寿命、不漏失败建园、不重复上游已覆盖事件。共享服务采用计量或有据因果使用记录。 | 原生活动单位；kg 果实；服务单位 | 每次事件及年度核对 | 完整受益队列/服务期间 | 所代表果园及全部资产消费者 | 先执行 calc_kiwi_lifecycle，再执行 calc_kiwi_normalize 一次 | 事件记录、产出称量、预测依据及服务台账 |
| `cp_phase1_environment_coverage` | orchard_production | 按实际节点的管理环境覆盖 | 场址活动方法台账 | 实际生产节点；土壤/介质路线；气候土壤；肥料产品量及组成；残体去向及氮；相关矿化/有机土/排泄活动；方法层级方程版本；路径因子及单位；石灰尿素；实际燃料；物质/环境；供应覆盖; 场址及实际管理节点；面积；有日期占用区间；共同使用者；建植/未产期历史；实际前后土地类别及转化日期/面积；碳核算覆盖；上游土地覆盖 | 按实际负责生产节点及匹配批次/期间采集原始记录，保留来源、方法适用性和不确定性。与现有协议及供应覆盖核对，不新增重复事件；不适用须明示有据，缺少证据属于缺口。 | 适用的原生活动单位、kg N或物质、面积/时间 | 事件及年度/批次核对 | 匹配生产/队列期间 | 全部实际管理生产节点 | 执行适用覆盖核算后最终归一化一次 | 原始记录、方法工作表及适用性证据 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_kiwi_lifecycle` | all applicable inventory rows | 逐园区/队列、逐活动身份及原生单位分别汇总建园、未结果期、补植、终止及零产年作业数量为 E，不含已按年采集的正产年作业。Q_y 为同队列/年度、匹配交接点全部合格鲜果等级质量；Q_L=sum(Q_y) 为已结束生命周期实际总产出，或未结束队列有据的既往加未来产出轨迹。按 E_y=E*Q_y/Q_L 归属，再加正产年直接作业数量，执行 kiwi_allocation_precedence 后按 calc_kiwi_normalize 归一化。失败建园归入实际受益队列。Q_L 未知或非正使生命周期强度不完整，不能填零。共同基础设施服务先按独立计量使用量或有据容量占用时间，在全部消费者/服务期间归属一次，再作产品分配；不规定通用资产寿命。 | cp_kiwi_lifecycle; cp_orchard_output_records | cohort/year attributed native quantities | `ghg-protocol-product-standard-2011` |
| `calc_kiwi_normalize` | all applicable inventory rows | R 为所选等级/状态/交接点、匹配批次/期间最终合格发运质量 kg，且须为正。物理数量保留未分配批次平衡；最终应归属清单贡献 = 应归属原始数量/R * 1 kg。先汇总应归属原始数量再归一化；阶段强度 q_i=Q/O_i 的贡献为 q_i*O_i/R，不能用 q_i/R。储存/冷却仅归实际受服务批次，内部转移抵销一次，不是额外最终产出。 | all applicable collection protocols; cp_declared_reference_handoff | inventory per 1 kg accepted final product | `declared-handoff-measurement-definition` |

### 环境覆盖计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_managed_environment_coverage` | 实际管理生产节点 | 针对实际自主管理生产节点，逐项记录土壤直接 N2O、挥发/沉降间接 N2O、淋溶/径流间接 N2O、NH3/NOx 与养分损失，以及实际施石灰/尿素 CO2 的适用性。主核算依次采用有代表性的路径实测、经验证且适用于作物/土壤/管理的场址或国家方法；否则 N2O 与石灰/尿素 CO2 采用适用的2006 IPCC及2019修订管理土壤方程，按气候和投入类别选因子。保留确切版本、方程、层级、活动量及因子单位和气候/管理适用性，不规定通用剂量或因子。无土/设施路线须采用适用于实际介质的方法，不强套土壤因子。化肥、有机投入、残体、实际相关矿化/有机土和排泄物路径使用同一田块期间氮台账；路径不适用须证明，缺数不能填零。直接及各间接分量分别计算，逐项只分配到匹配的现有或新增具体卡一次，不将总量与组成重复相加。N2O-N 乘44/28转分子 N2O 一次。NH3、NOx及养分/农药损失采用适用实测或有据物质/去向模型；总N/P或未解释平衡差不等于某化合物释放。保留实际接收环境及分子、元素或报告口径，间接形成不能在来源台账再扣同一氮。实际本地燃烧另按燃料特定的燃烧方法记录；外购电、热和服务承接上游覆盖一次。有据释放按具体身份建卡，复用现有匹配卡，采用已核实UUID或明确未决身份。适用方法、活动量、因子或身份缺失会阻止完整性，不构成有据零值；原始活动/释放总量归属后按匹配合格参考产出归一化一次。 | cp_phase1_environment_coverage | 按匹配最终参考量的应归属原生环境数量 | `review-ipcc-soils-2019` |
| `calc_managed_land_coverage` | 实际管理生产节点 | 逐实际自主管理生产场址采集占用面积及有日期的占用区间，包括应归属的建植/未产期与生产期。占用量为面积乘实际时长，明确换为所选面积时间单位（1 ha=10,000 m2，时间按年）；只有每作物周期公顷数而无时长不能得到面积时间。建立、管理区间重叠时划分区间或取并集，同一面积时间只计一次，实际共同使用者份额合计为一。土地转化按声明土地利用方法，另记实际前/后土地类别、事件面积和日期；转化使用面积单位，不能与占用量相加。种植、持续占用或前土地资料缺失不能证明发生转化，也不能证明零转化。适用时保留历史事件归属及碳库/排放方法覆盖，不编造转化或通用固碳信用。分别建立兼容基本流身份，采用已核实UUID或明确未决身份，归属一次后按匹配最终参考产出归一化。外购已完成的生物投入承接兼容上游土地覆盖一次，不在本地重复。适用土地身份、面积、时长或前状态证据缺失属于完整性缺口；有据无转化可记录为不适用。 | cp_phase1_environment_coverage | 按匹配最终参考量的应归属原生环境数量 |  |

## 9. 验证规则

### 规范验证规则（`kiwifruit_route_completeness`）

只有在果园生产、采收交接、初级处理/分级和声明的发运点均存在，且目标输出、次品、残余物和损失已区分，品种及成熟度或干物质依据已披露，并在发生储存时记录储存时间和模式，数据集才有效。

## 10. 发布数据集属性

| Field | Value |
| --- | --- |
| dataset_role | secondary_dataset |
| downstream_use | 鲜猕猴桃前景生产及关联 process 或 lifecycle model 构建 |
| allowed_use | 品种、成熟度/等级、路线和包装场发运边界匹配的鲜整果猕猴桃 |
| excluded_use | 加工猕猴桃产品、零售处理或不同产品终点 |
| required_metadata | 果园系统、品种、成熟度标准、采收日期、等级、储存模式/时间、输出去向 |
| required_quality_disclosure | 场址和期间覆盖、测量方法、完整性和来源批次身份 |
| update_trigger | 果园路线、处理技术、储存实践、产品终点或证据基础发生重大变化 |

## 11. 数据来源

| source_id | Source | Supports |
| --- | --- | --- |
| usda-ams-kiwifruit-grade-standards | USDA Agricultural Marketing Service, Kiwifruit Grades and Standards, https://www.ams.gov/grades-standards/kiwifruit-grades-and-standards | 成熟度、清洁度、缺陷、等级和包装质量维度 |
| uc-davis-kiwifruit-postharvest | UC Davis Postharvest Research and Extension Center, Kiwifruit Produce Facts, https://postharvest.ucdavis.edu/produce-facts-sheets/kiwifruit | 采收成熟度指标、冷藏条件、催熟和质量风险 |
| nzkgi-kiwifruit-book-2024 | New Zealand Kiwifruit Growers Incorporated, The Kiwifruit Book 2024, https://www.nzkgi.org.nz/resource/kiwifruit-book-2024/ | 果园管理、采收、包装场分级、包装和储存路线 |
| fao-kiwifruit-postharvest | FAO, Small-Scale Postharvest Handling Practices, https://www.fao.org/4/ae075e/ae075e21.htm | 呼吸跃变特性、处理、催熟和采后损失控制 |

| source_id | type | reference | used_for |
| --- | --- | --- | --- |
| `declared-handoff-measurement-definition` | `method_factor` | 本 PCR 第 3、6、8 节的净质量归一化定义：同一状态、同一交接门的实测净质量作为自身归一化分母，质量比为 1；交接计量不增加物理工序。 | 同阶段和交接计量恒等式；属于定义，不是实测产率、经验默认值或外部文献。 |
| `fao-fertilizer-identities` | official_guidance | FAO Fertilizer Specifications, https://www.fao.org/agriculture/crops/thematic-sitemap/theme/spi/plantnutrition/fertspecs/en/ | 条件性具体身份和方法依据；不证明场址使用，也不设定用量 |
| `fao-organic-nutrients` | official_guidance | FAO How to Make and Use Compost, https://www.fao.org/4/i2230e/i2230e.pdf | 条件性具体身份和方法依据；不证明场址使用，也不设定用量 |
| `route-energy-fao` | official_guidance | FAO, Energy-smart food for people and climate (2011), Annex 2; and Energy use in agriculture and industry, Annex IV. https://www.fao.org/4/i2454e/i2454e00.pdf ; https://www.fao.org/4/Q1085e/q1085e0d.htm | 仅支持设备及载能体可能性，适用性由现场记录确定；不采用能耗强度、燃料比例或默认组合。 |
| `ghg-protocol-product-standard-2011` | standard | WRI/WBCSD, Product Life Cycle Accounting and Reporting Standard (2011), Chapter 9, https://ghgprotocol.org/sites/default/files/standards/Product-Life-Cycle-Accounting-Reporting-Standard_041613.pdf | 分配优先顺序；队列 E/Q 为本 PCR 明示的时间归属约定，不是标准规定寿命或产品实测事实。 |
| `review-ipcc-soils-2019` | official_guidance | IPCC 2019 Refinement, Volume 4, Chapter 11, https://www.ipcc-nggip.iges.or.jp/public/2019rf/pdf/4_Volume4/19R_V4_Ch11_Soils_N2O_CO2.pdf | 管理土壤直接/间接N2O及石灰/尿素CO2方法语境；因子须匹配实际适用性及场址活动，不是产品默认值。 |
