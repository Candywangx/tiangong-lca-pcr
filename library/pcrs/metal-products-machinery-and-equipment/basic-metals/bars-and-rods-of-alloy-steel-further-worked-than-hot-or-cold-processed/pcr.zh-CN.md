---
pcr_id: pcr.metal-products-machinery-and-equipment.basic-metals.bars-and-rods-of-alloy-steel-further-worked-than-hot-or-cold-processed
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 经进一步加工且加工程度超过热加工或冷加工的合金钢条材和棒材

## 1. 范围与适用性

本 PCR 适用于直条状合金钢条材和棒材：产品在工厂大门处仍保持条材或棒材属性，并且相对于来料的热加工或冷加工状态，至少完成一道已声明的机械、热、化学表面或金属镀覆工序。符合条件的进一步加工示例包括钻孔、冲孔、定径、磨削、抛光、热处理、化学表面处理或镀覆，但加工后产品不得因此取得另一类制品的属性。

前景边界始于已声明合金钢条材或棒材原料进入进一步加工设施，止于可发运的进一步加工条材或棒材净合格产品。上游钢铁冶炼及来料生产采用供应商特定的上游数据集表示。设施建设、资本设备、客户后续制造、使用和报废阶段不在前景边界内。热轧卷或盘条、钢丝、空心钻杆钢条和钢棒、角材、型材、紧固件、轴、工具以及加工后不再符合条材或棒材身份的其他制品均排除。生产者应声明合金牌号、产品形态、来料状态、构成进一步加工的工序、热处理状态、表面状态或镀层、尺寸与公差、生产场址及大门边界。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.basic-metals.bars-and-rods-of-alloy-steel-further-worked-than-hot-or-cold-processed |
| classification_refs | CPC 3.0：41265，精确映射语境 |
| covered_products | 经至少一道超出热加工或冷加工范围的已声明工序后，仍保持条材或棒材属性的合金钢条材和棒材 |
| excluded_products | 仅经热加工或冷加工的产品；除非所声明分类将不锈钢纳入本合金钢类别，否则排除不锈钢产品；以及钢丝、空心钻杆钢条和钢棒、角材和型材、经进一步加工后取得另一产品身份的制品 |
| representative_product | 直条状可销售合金钢棒材，已声明牌号、截面、尺寸、公差、热处理状态、表面状态及构成进一步加工的工序 |
| production_route | 接收合金钢条材或棒材原料，随后实施一道或多道已声明的机械精整、热处理、化学表面处理或金属镀覆工序，并完成最终检验 |
| market_state | 进一步加工设施大门处的净合格产品质量；产品干燥且不含临时性工艺液体，但可含已声明的保留防护涂层 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 生产经已声明的超出热加工或冷加工范围的工序后仍保持条材或棒材属性的合金钢条材或棒材 |
| How much | 进一步加工设施大门处 1,000 kg 净合格产品 |
| How well | 符合已声明的合金牌号、尺寸与公差、直度、热处理状态、表面状态或镀层以及适用的客户或产品规范 |
| How long or cycle | 前景记录所代表的一个完整生产批次或核算期；不计入使用阶段时长 |
| reference_flow_link | `reference_product` |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1,000 |
| 参考产品流 | 除热加工或冷加工外经进一步加工的合金钢棒材和杆材 `f72c06a2-f974-4d85-9308-b31cbb1d1b9a` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 合金牌号及成分规范；条材或棒材形态与截面；尺寸与公差；来料热加工或冷加工状态；构成进一步加工的工序；热处理状态；表面状态或镀层规范；净合格产品质量基准；生产场址与地域；技术与设备；数据期；工厂大门边界 |

构建前景数据包时，`必需限定信息` 中列出的信息应在数据集元数据、过程说明、参考流备注、产品说明或等效数据包字段中明确声明。缺失必需限定信息的数据包视为参考流定义不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | 参考产品及按质量归一化的材料行 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 报告干燥净合格产品质量，排除托盘、捆扎材料、残留槽液和单独计量的工艺废钢；将所有清单结果归一化至 1,000 kg 参考产品。 |
| `electricity_energy` | 外购交流电 | Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | 保留计量的交付电量，并按 1 kWh = 3.6 MJ 换算；披露供应商、地域、电压、技术及使用点交付边界。 |
| `gas_volume` | 气态天然气 | Volume `93a60a56-a3c8-22da-a746-0800200c9a66` | m3 | 按已声明的基准温度和压力报告燃气体积，并保留进行能量或化石碳计算所需的供应商净热值。 |
| `water_mass` | 工艺用水 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 按质量报告补充工艺用水；当主计量表记录体积时，使用有记录的密度和该仪表的基准条件换算，并保留原始体积记录。 |
| `mass_balance` | 钢材投入、产品、废钢、收集粉尘和保留镀层 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 在同一生产批次内核对含钢投入与产出；若残差超过场址记录的衡器不确定度与库存变动容许量，应调查并披露。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 进入进一步加工设施的合金钢条材或棒材原料，已声明供应商、牌号、形态、尺寸、质量、热加工或冷加工状态、表面状态、再生含量核算方法及运输交接点 |
| starting_condition_role | 上游产品投入及边界交接点；前景过程中不重复上游钢铁冶炼和先前的热加工或冷加工 |
| product_classification_scope | 经至少一道超出热加工或冷加工范围的已声明工序后仍保持条材或棒材属性的合金钢条材和棒材 |
| recursive_input_rule | 若来料条材或棒材已经属于同一类别，则仅将其作为一个上游产品流记录，并附供应商数据集和已声明的先前工序；不得在接收方前景过程中递归重建其进一步加工清单 |
| upstream_dataset_requirement | 优先使用供应商及牌号特定的从摇篮到大门数据；否则使用地域和技术具有代表性的合金钢条材或棒材数据集，并披露替代关系、合金范围、先前加工状态以及是否包含回收收益 |
| disclosure | 声明纳入与排除工序、来料状态、收率与库存变动、热处理和表面处理路线、能源载体、水循环、化学槽液、排放控制、废物去向、废钢核算、运输交接点及任何单独报告的回收收益 |

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_gate_to_gate` | 前景进一步加工过程 | 纳入接收、搬运、形成已声明超出热加工或冷加工状态的全部工序、最终检验、直接服务于这些工序的现场公用工程、污染治理及大门前废物处理。 | `unsd-cpc-3-0-structure-2025`; `us-cbp-cross-hq-965792`; `eu-2022-2110-ferrous-metals-processing` |
| `boundary_upstream_handoff` | 接收的合金钢条材或棒材 | 在已声明的来料状态处使用上游数据集表示钢铁冶炼及先前原料生产；不得在前景进一步加工清单中重复建立这些上游过程。 | `worldsteel-lci-study-2021-release` |
| `boundary_route_condition` | 条件适用工序 | 仅纳入参考产品实际采用的机械、热、酸洗、清洗、镀覆、污染治理和废水处理工序；每个未采用的路线均须以生产证据声明为不适用。 | `eu-2022-2110-ferrous-metals-processing` |
| `boundary_downstream_exclusion` | 下游制造、使用与报废 | 从前景结果中排除客户制造、使用和报废；任何回收收益均单独报告，并防止与下游模型重复计算。 | `worldsteel-lci-study-2021-release` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `further_working_and_finishing` | 进一步加工、精整、检验及直接相关的污染治理 | required | 相对于来料热加工或冷加工状态，至少须声明一道进一步工序；各交换卡仅在采用其指定路线时适用 | 将接收的合金钢条材或棒材转化为净合格进一步加工产品的前景过程 | 1,000 kg 净合格参考产品 |

### 过程：进一步加工、精整、检验及直接相关的污染治理（`further_working_and_finishing`）

#### 输入

##### 产品流

###### 接收的合金钢条材或棒材（`input_alloy_steel_bar_rod`）

记录进入设施并归属于代表性生产批次的合金钢条材或棒材来料实测质量。

- 选定流：合金钢条材或棒材原料
- 流属性/单位：Mass / kg
- 数量规则：实测接收质量，并按归属于代表产品的期初与期末库存进行调整
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_material_mass_balance`
- 来源：`worldsteel-lci-study-2021-release`

###### 外购电力（`rolling_electricity`）

记录交付给进一步加工设备及直接相关泵、抽排、治理和检验系统的交流电。

- 选定流：交流电 `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- 流属性/单位：Net calorific value / MJ
- 数量规则：按分表或有记录的设备运行时间和负荷分配至代表性生产批次的计量交付电量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_energy_records`
- 来源：`eu-2022-2110-ferrous-metals-processing`

###### 直接工艺加热用天然气（`natural_gas_input`）

仅当管道天然气被前景边界内的炉、槽液加热器、干燥器或镀覆锅消耗时记录。

- 选定流：气态天然气 `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位：Volume / m3
- 数量规则：按已声明基准条件计量的交付燃气体积，并归属于代表性生产批次
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 净合格参考产品；仅在有证据表明采用电加热或非燃气加热时为零
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_energy_records`
- 来源：`eu-2022-2110-ferrous-metals-processing`

###### 工艺用水（`process_water_input`）

记录进入清洗、冷却、磨削、酸洗、漂洗、湿式洗涤或废水处理循环的新鲜水或外购工艺水。

- 选定流：工艺用水 `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- 流属性/单位：Mass / kg
- 数量规则：归属于代表性生产批次的实测补充水质量，不含内部循环水；计量体积应使用有记录的密度和基准条件换算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 净合格参考产品；仅在无水跨越前景边界时为零
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_water_chemical_records`
- 来源：`eu-2022-2110-ferrous-metals-processing`

###### 盐酸（`hydrochloric_acid_input`）

记录进入已声明酸洗或表面处理槽的盐酸溶液，并分别保留浓度和新鲜酸质量。

- 选定流：盐酸溶液
- 流属性/单位：Mass / kg
- 数量规则：采购或领用的溶液质量乘以有记录的有效酸质量分数
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 净合格参考产品的 HCl 质量；未使用该酸时不适用
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_water_chemical_records`
- 来源：`eu-2022-2110-ferrous-metals-processing`

###### 硫酸（`sulfuric_acid_input`）

记录进入已声明酸洗或表面处理槽的硫酸溶液，并分别保留浓度和新鲜酸质量。

- 选定流：硫酸溶液
- 流属性/单位：Mass / kg
- 数量规则：采购或领用的溶液质量乘以有记录的有效酸质量分数
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 净合格参考产品的 H2SO4 质量；未使用该酸时不适用
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_water_chemical_records`
- 来源：`eu-2022-2110-ferrous-metals-processing`

###### 硝酸（`nitric_acid_input`）

仅当已声明的混酸表面处理路线使用硝酸时记录。

- 选定流：硝酸 `bf883501-c052-414e-8e21-e6f53cc257ba`
- 流属性/单位：Mass / kg
- 数量规则：采购或领用的溶液质量乘以有记录的有效酸质量分数
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 净合格参考产品的 HNO3 质量；未使用该酸时不适用
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_water_chemical_records`
- 来源：`eu-2022-2110-ferrous-metals-processing`

###### 氢氟酸（`hydrofluoric_acid_input`）

仅当已声明的混酸表面处理路线使用氢氟酸时记录。

- 选定流：氢氟酸溶液
- 流属性/单位：Mass / kg
- 数量规则：采购或领用的溶液质量乘以有记录的有效酸质量分数
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 净合格参考产品的 HF 质量；未使用该酸时不适用
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_water_chemical_records`
- 来源：`eu-2022-2110-ferrous-metals-processing`

###### 氢氧化钠（`sodium_hydroxide_input`）

记录进入已声明碱洗、槽液维护或现场中和工序的氢氧化钠溶液。

- 选定流：氢氧化钠溶液
- 流属性/单位：Mass / kg
- 数量规则：采购或领用的溶液质量乘以有记录的有效碱质量分数
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 净合格参考产品的 NaOH 质量；未使用该碱时不适用
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_water_chemical_records`
- 来源：`eu-2022-2110-ferrous-metals-processing`

###### 润滑油（`lubricating_oil_input`）

记录进入机械加工、磨削、定径或物料搬运设备并跨越前景边界的具体润滑油配方。

- 选定流：润滑油 `aec6f1a5-7b09-4704-870d-434d3ada0edd`
- 流属性/单位：Mass / kg
- 数量规则：采购或领用润滑油，并按期初库存、期末库存和有记录的回收再利用量调整
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 净合格参考产品；未消耗润滑油时不适用
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_water_chemical_records`
- 来源：`eu-2022-2110-ferrous-metals-processing`

###### 热浸镀用锌（`zinc_input`）

仅当纳入已声明的热浸金属镀覆工序时，记录跨越前景边界的金属锌。

- 选定流：金属锌
- 流属性/单位：Mass / kg
- 数量规则：锌接收量加期初槽存量减期末槽存量、产品保留的合格镀层量及实测含锌产出量，并在批次内核对
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 净合格参考产品；未施加锌镀层时不适用
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_coating_mass_balance`
- 来源：`eu-2022-2110-ferrous-metals-processing`

##### 废物流

不预设废物投入。只有当前景设施确实接收单独分类的废物并将其投入纳入的处理工序时才予记录，且流身份须另行审查。

##### 基本流

本大门到大门前景过程不预设基本流输入。

#### 输出

##### 产品流

###### 净合格进一步加工合金钢条材或棒材（`reference_product`）

记录完成全部已声明进一步加工工序后、设施大门处经检验合格的净产品质量。

- 选定流：除热加工或冷加工外经进一步加工的合金钢棒材和杆材 `f72c06a2-f974-4d85-9308-b31cbb1d1b9a`
- 流属性/单位：Mass / kg
- 数量规则：1,000 kg 参考量，排除包装、工艺液体、不合格品及单独记录的废钢
- 数值来源模式：固定值（`fixed_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：1,000 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：方法公式（`method_formula`）
- 来源：`worldsteel-lci-study-2021-release`

##### 废物流

###### 合金钢废钢（`alloy_steel_scrap`）

将边角料、切屑和不合格固体合金钢作为单独称量的废钢流记录，并保留牌号和污染状态。

- 选定流：合金钢废钢
- 流属性/单位：Mass / kg
- 数量规则：转移至场外或单独建模的回收过程的实测质量，并按库存变动调整
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_material_mass_balance`
- 来源：`worldsteel-lci-study-2021-release`

###### 收集的钢磨削粉尘（`steel_grinding_dust`）

将磨削或其他已声明机械精整工序捕集的含钢粉尘，与排入空气的颗粒物分开记录。

- 选定流：收集的钢磨削粉尘
- 流属性/单位：Mass / kg
- 数量规则：从收尘装置移出并转至已记录废物去向的实测质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 净合格参考产品；未采用产尘工序时不适用
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_waste_emission_records`
- 来源：`eu-2022-2110-ferrous-metals-processing`

###### 废酸洗液（`spent_pickling_liquor`）

记录离开前景边界的废酸洗液，并声明酸体系、游离酸浓度、溶解金属、水含量及回收或处理去向。

- 选定流：废酸洗液
- 流属性/单位：Mass / kg
- 数量规则：转至现场回收、场外回收、处理或处置的实测质量，并按库存变动调整
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 净合格参考产品；未使用酸洗槽时不适用
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_waste_emission_records`
- 来源：`eu-2022-2110-ferrous-metals-processing`

###### 酸性工艺废水（`acidic_process_wastewater`）

记录经已纳入的现场处理边界后转入场外处理或排放的酸性工艺废水，并保留流量、pH、相关金属、氟化物、油和固体测量值。

- 选定流：酸性工艺废水
- 流属性/单位：Volume / m3
- 数量规则：离开已声明现场处理边界的计量体积
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 净合格参考产品；无酸性水离开边界时不适用
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_waste_emission_records`
- 来源：`eu-2022-2110-ferrous-metals-processing`

###### 锌渣（`zinc_dross`）

记录从已声明热浸镀槽清除的锌渣，并与产品保留锌及可再用锌飞溅物分开。

- 选定流：锌渣
- 流属性/单位：Mass / kg
- 数量规则：转至回收、再生、处理或处置的实测锌渣质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 净合格参考产品；未使用锌槽时不适用
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_coating_mass_balance`
- 来源：`eu-2022-2110-ferrous-metals-processing`

###### 废润滑油（`used_lubricating_oil`）

记录内部再利用后离开前景边界的废润滑油，并声明含水量和金属污染状态。

- 选定流：废润滑油 `55d93375-7f04-4166-b2a2-88ce929051a5`
- 流属性/单位：Mass / kg
- 数量规则：转至回收、再生、处理或处置的实测质量，并按库存变动调整
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 净合格参考产品；无废润滑油离开边界时不适用
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_waste_emission_records`
- 来源：`eu-2022-2110-ferrous-metals-processing`

##### 基本流

###### 排入空气的化石源二氧化碳（`fossil_co2_air`）

记录前景边界内现场燃烧排放的化石源二氧化碳，不含上游燃料生产排放。

- 选定流：二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 流属性/单位：Mass / kg
- 数量规则：烟道实测，或根据采集的燃料体积、供应商净热值、有记录的碳因子、氧化基准及燃烧分配进行计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 净合格参考产品；仅在有证据表明现场无化石燃料燃烧时为零
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_waste_emission_records`
- 来源：`eu-2022-2110-ferrous-metals-processing`

###### 钢材加工产生并排入空气的颗粒物（`steel_particulate_air`）

记录磨削、精整或其他已声明钢材机械加工在最终废气治理边界后排放的实测颗粒物，并保留实测粒径口径和来源工序。

- 选定流：颗粒物，粒径未特指 `0ce3dedb-caca-407b-a856-a90470eb8ec0`
- 流属性/单位：Mass / kg
- 数量规则：代表性生产批次的实测烟气浓度乘以标准化干烟气体积；如量化无组织排放，则另行披露
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 净合格参考产品；无相关排放源时不适用
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_waste_emission_records`
- 来源：`eu-2022-2110-ferrous-metals-processing`

###### 排入空气的氯化氢（`hydrogen_chloride_air`）

仅在采用盐酸酸洗时，记录通过最终废气治理边界的氯化氢。

- 选定流：氯化氢 `fe0acd60-3ddc-11dd-aab0-0050c2490048`
- 流属性/单位：Mass / kg
- 数量规则：代表性生产批次的实测烟气浓度乘以标准化干烟气体积
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 净合格参考产品；未采用盐酸酸洗时不适用
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_waste_emission_records`
- 来源：`eu-2022-2110-ferrous-metals-processing`

###### 排入空气的氟化氢（`hydrogen_fluoride_air`）

仅在使用含氢氟酸处理槽时，记录通过最终废气治理边界的氟化氢。

- 选定流：氟化氢
- 流属性/单位：Mass / kg
- 数量规则：代表性生产批次的实测烟气浓度乘以标准化干烟气体积
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 净合格参考产品；未使用氢氟酸时不适用
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_waste_emission_records`
- 来源：`eu-2022-2110-ferrous-metals-processing`

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivision` | 共用设备的多个产品或生产批次 | 优先细分过程并采用产品特定计量。对共用电力、燃料、水、化学品、处理和废物，采用反映因果关系的有记录物理驱动因素进行分配，例如分表用量、处理量、设备时间与负荷或实测加工质量。 | `eu-2022-2110-ferrous-metals-processing` |
| `allocation_scrap_separation` | 合金钢废钢及含锌产出 | 单独报告实测废钢和含锌产出，不得将避免的初级生产或报废回收收益从前景清单中扣除。声明每项产出属于废物、回收材料还是共产品，并将任何回收收益保留为单独情景。 | `worldsteel-lci-study-2021-release` |
| `allocation_residual_method` | 缺乏物理驱动因素且无法避免的共用负荷 | 若不能细分且无法实施因果物理分配，则采用最具体且有记录的工程分配方法，对实质性结果进行敏感性检查，并披露方法和受影响清单行；经济分配须经明确审查并披露价格期。 |  |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_material_mass_balance` | `further_working_and_finishing` | 钢材原料、合格产品、废钢和库存变动 | 衡器票据、批次记录、库存记录、检验处置记录 | 时间戳；批次；牌号；产品代码；毛重；皮重；净重；期初库存；期末库存；处置；衡器编号 | 使用校准衡器，并与生产及库存记录核对 | kg | 每次接收及产出移动；按生产批次核对 | 与参考产品相同的代表期，通常至少连续 12 个月，或有理由的较短批次 | 服务于已声明产品的全部产线和储存区 | 按牌号和产品汇总移动量，调整库存变动，并归一化至 1,000 kg 净合格产品 | 校准证书、可追溯票据、批次谱系、库存核对及质量平衡残差说明 |
| `cp_energy_records` | `further_working_and_finishing` | 外购电力和天然气 | 分表、发票、炉窑日志、设备运行记录 | 仪表编号；期初读数；期末读数；时间戳；能源载体；电压；燃气基准条件；净热值；设备编号；运行时间；产品产量 | 优先读取专用仪表；否则核对发票总量，并按有记录的设备负荷和运行时间分配 | 电力 MJ；天然气 m3 | 连续或班次读数，并按月核对 | 与生产记录相同的代表期 | 全部纳入设备及直接相关处理系统 | 扣除外送或无关能源，按因果驱动因素分配纳入用量，按 3.6 MJ/kWh 换算电力，并归一化至参考流 | 仪表校准、发票、供应组合与电压证据、燃气质量说明、停机日志及分配工作表 |
| `cp_water_chemical_records` | `further_working_and_finishing` | 水、酸、碱和润滑油 | 水表、采购记录、领用记录、槽液补加日志、库存记录 | 物质身份；浓度；供应商；批号；质量或体积；期初库存；期末库存；槽号；补加；排放；回收；产品批次 | 计量用水，并用采购、领用、库存变动及槽液日志核对每种化学配方 | 水 kg，并保留原始计量 m3；溶液与有效物质 kg | 每次交付或领用，按班次或批次记录槽液；按月核对 | 与生产记录相同的代表期 | 每个纳入的水循环、化学槽和润滑系统 | 排除内部循环量；使用有记录的密度和基准条件换算水体积；根据有记录浓度计算有效物质；按处理产品质量或槽液处理量分配并归一化至参考流 | 仪表校准、安全数据表或分析证书、采购发票、盘点、槽液分析和核对记录 |
| `cp_coating_mass_balance` | `further_working_and_finishing` | 锌投入、产品保留镀层、锌渣和回收锌 | 称重票据、采购与库存记录、槽液分析、镀层测试 | 锌接收；期初槽存；期末槽存；锌渣质量；回收飞溅锌质量；产品质量；镀覆面积；镀层质量或厚度 | 在生产批次内核对含锌投入与产出，并通过产品测试验证保留镀层 | kg | 每次物料移动和镀层测试；按生产批次核对 | 与镀覆产品记录相同的代表期 | 每条纳入的锌镀覆线 | 汇总锌接收及库存变动，核对保留镀层与含锌产出，并归一化至参考流 | 校准衡器、槽液库存、镀层测试报告、回收票据及锌质量平衡残差 |
| `cp_waste_emission_records` | `further_working_and_finishing` | 废物、废水和直接大气排放 | 废物联单、槽罐转移、废水仪表与采样、烟道测试、连续监测、有记录的排放计算 | 流身份；质量或体积；组成；pH；金属；氟化物；油；固体；去向；浓度；烟气流量；燃料数据；因子来源；治理状态 | 在最终前景治理边界处测量转移量和受监测排放；仅根据可追溯采集的活动数据及有记录因子计算 | 各流 kg 或 m3 | 每次转移；连续监测或符合许可的采样；按月核对 | 与生产记录相同的代表期，含正常运行及已披露的异常期 | 每个纳入的废物、水和大气排放点 | 保持各流分离，仅扣除有记录的内部再利用量，按浓度乘流量计算排放，按因果过程驱动因素分配并归一化至参考流 | 联单、实验室认可和检出限、流量计校准、烟道测试报告、监测完整性、因子来源及治理设备日志 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | 全部清单行 | 归一化量 = 分配给参考产品的批次量 / 批次净合格产品质量 × 1,000 kg | 分配的批次量；批次净合格产品质量 | 每 1,000 kg 参考产品的量 | `worldsteel-lci-study-2021-release` |
| `calc_input_mass` | `input_alloy_steel_bar_rod` | 接收投入 = 接收量 + 归属期初库存 - 归属期末库存 - 有记录的转至其他产品的量 | 接收质量；期初库存；期末库存；转移记录 | 合金钢条材或棒材投入 kg |  |
| `calc_active_chemical` | 酸和碱投入 | 有效物质质量 = 溶液质量 × 有记录的有效物质质量分数；若溶液中的水实质性显著则另行记录 | 领用溶液质量；证书或槽液浓度 | 有效 HCl、H2SO4、HNO3、HF 或 NaOH 的 kg | `eu-2022-2110-ferrous-metals-processing` |
| `calc_direct_fossil_co2` | `fossil_co2_air` | 优先使用烟道实测质量；否则根据采集燃料量及有记录的供应商、实验室或辖区认可碳因子和氧化基准计算，不得加入上游燃料排放 | 燃料体积；基准条件；净热值；碳因子；氧化基准；过程分配 | 跨越前景大气边界的化石源 CO2 kg | `eu-2022-2110-ferrous-metals-processing` |
| `calc_stack_mass` | `steel_particulate_air`、`hydrogen_chloride_air` 和 `hydrogen_fluoride_air` | 排放质量 = 代表性实测浓度 × 同一运行期标准化干烟气体积，并按监测覆盖率和治理设施旁路进行调整 | 浓度；干烟气流量；运行时间；氧含量与水分修正；治理状态 | 排放物质 kg | `eu-2022-2110-ferrous-metals-processing` |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | 参考产品和钢材投入 | 保留批次级牌号、产品形态、尺寸、公差、来料状态、进一步加工工序、热处理及表面或镀层规范；未经有记录的产量加权汇总，不得合并实质不同的产品。 | 产品规范、成分分析证书、工艺路线单、检验记录和批次谱系 |
| `dq_temporal` | 全部前景记录 | 使用一个一致的代表期，通常至少连续 12 个月；较短批次须说明理由，并披露停产、开车、异常运行、库存变动和缺失区间。 | 数据期登记、生产日历、停机日志和监测完整性报告 |
| `dq_measurement` | 实测质量、能源、水、化学品、废物和排放记录 | 使用校准仪器或可追溯商业记录；保留单位、基准条件、检出限、浓度基准及换算因子。 | 校准证书、发票、实验室报告、分析证书和换算工作表 |
| `dq_completeness` | 过程与交换覆盖 | 将每道已声明进一步加工工序映射到能源、材料、水、化学品、废物和直接排放记录；每个省略的条件行均须提供不适用证据。 | 过程流程图、化学品与废水废气清单、能源平衡、水量平衡和残余物管理计划 |
| `dq_upstream` | 接收的合金钢条材或棒材数据集 | 匹配供应商、地域、合金范围、已知炼钢路线、产品形态及来料加工状态；披露代理数据以及是否包含回收收益或废钢负荷。 | 供应商数据集元数据、代表性评估和回收核算声明 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validate_reference_identity` | 参考流 | 若数据集缺少合金牌号、条材或棒材形态、尺寸与公差、来料状态、构成进一步加工的工序、热处理状态、表面或镀层状态、净合格产品质量基准、场址、技术、数据期或工厂大门边界，则校验失败。 | `unsd-cpc-3-0-structure-2025`; `us-cbp-cross-hq-965792` |
| `validate_route_coverage` | 前景过程图 | 若未声明超出热加工或冷加工范围的工序、纳入工序缺少其原子交换和采集记录，或条件路线无生产证据即标为不适用，则校验失败。 | `eu-2022-2110-ferrous-metals-processing` |
| `validate_inventory_atomicity` | 过程清单 | 若任何清单行合并不同物质、能源载体、废物流或排放物种，或将回收材料、实际排放和捕集废物相互抵扣，则校验失败。 | `eu-2022-2110-ferrous-metals-processing` |
| `validate_mass_energy_water` | 前景记录 | 当含钢质量平衡超过有记录的测量与库存不确定度、能源或水总量不能与设施记录核对，或换算基准条件缺失时，校验失败或标记审查。 | `eu-2022-2110-ferrous-metals-processing` |
| `validate_recycling_double_count` | 废钢和报废情景 | 若避免生产或报废回收收益既从前景大门到大门清单中扣除，又由上游或下游模型采用，则校验失败。 | `worldsteel-lci-study-2021-release` |
| `validate_uuid_resolution` | 含 UUID 及未解决的流 | 参考产品必须具有精确公开 UUID；其他行若无精确候选，应保持 UUID 为空，记录经审查的未解决原因及回执，且不得用语义更宽的代理流替代。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 合金钢条材和棒材进一步加工与精整的前景产品系统数据集 |
| downstream_use | `secondary_dataset`；完成上游原料数据、路线代表性、分配和未解决 UUID 审查后可作为 `background_dataset` |
| allowed_use | 需要工厂大门进一步加工数据集，且牌号、形态、加工路线、表面状态、地域、技术、数据期和回收核算规则相匹配的产品碳足迹和 LCA 模型 |
| excluded_use | 直接比较规范或功能不同的产品；替代上游炼钢数据；客户制造、使用或报废阶段；以及将本候选 PCR 作为已发布通用基准使用 |
| required_metadata | PCR id 与版本；产品和分类身份；合金牌号；尺寸与公差；来料状态；构成进一步加工的工序；热处理；表面或镀层规范；净质量基准；场址与地域；技术；数据期；上游数据集；分配；能源、水、化学品、排放控制与废物路线；UUID 解决状态 |
| required_quality_disclosure | 时间和场址覆盖；测量及分配方法；质量、能源、水、化学品和镀层核对；缺失数据处理；监测完整性；数据源时效；上游代表性；不确定度和未解决范围证据；回收收益规则 |
| update_trigger | 合金或产品范围、来料状态、构成进一步加工的工序、热处理或镀覆路线、场址技术、能源供应、槽液化学、污染治理、分配、上游钢材数据集、回收规则、法定监测依据发生变化，或取得精确 TianGong UUID 和独立范围证据 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `unsd-cpc-3-0-structure-2025` | official_guidance | 联合国统计司，CPC 3.0 版结构，2025 年 6 月 30 日，https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv（检索日期：2026-09-03） | CPC 41265 正式产品分类身份 |
| `unsd-cpc-v1-1-chinese-manual` | official_guidance | 联合国统计司，产品总分类 1.1 版中文手册，https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/cpc_v1_1_complete%28pdf%29_chinese.zip（检索日期：2026-09-03） | 合金钢条材和棒材及进一步加工的专业中文术语；不作定量来源 |
| `us-cbp-cross-hq-965792` | official_guidance | 美国海关与边境保护局，CROSS 裁定 HQ 965792，https://rulings.cbp.gov/ruling/965792（检索日期：2026-09-03） | 产品仍保持第 72 章产品属性时，进一步机械加工和表面处理的边界示例 |
| `eu-2022-2110-ferrous-metals-processing` | official_guidance | 欧盟委员会实施决定 (EU) 2022/2110，黑色金属加工行业最佳可行技术结论，https://eur-lex.europa.eu/eli/dec_impl/2022/2110/oj/eng（检索日期：2026-09-03） | 过程分解、能源和水边界、化学品/废物/排放清单、监测及路线条件；法规绩效水平不作为经验 PCR 范围 |
| `worldsteel-lci-study-2021-release` | method_factor | 世界钢铁协会，生命周期清单研究报告，2021 数据发布版，https://worldsteel.org/wp-content/uploads/2021-LCA-Study-Report.pdf（检索日期：2026-09-03） | 质量功能单位、工厂大门边界、上游数据交接、数据代表性、废钢/回收分离及避免重复计算；未引入定量范围 |
