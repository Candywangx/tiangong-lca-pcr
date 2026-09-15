---
pcr_id: pcr.metal-products-machinery-and-equipment.basic-metals.flat-rolled-products-of-high-speed-steel-of-a-width-of-less-than-600-mm-not-further-wor-cb876d72
language: zh-CN
status: candidate
content_maturity: authored_methodology
translation_status: aligned
sync_with: pcr.en-US.md
---

# 宽度小于600毫米的高速钢平板轧材，仅经热轧或冷轧，未经进一步加工

## 1. 范围与适用性

本 PCR 适用于成品宽度小于 600 mm、以热轧或冷轧状态在工厂门口交付且未经进一步加工的高速钢带材、卷材或板材。边界涵盖已声明高速钢原料的接收、路线特定的表面预处理、热轧或冷轧、路线所需退火、冷却、卷取、纵切或定尺剪切、检验，以及仍属于形成所声明轧制市场状态的防锈涂油。

本 PCR 不适用于宽度不小于 600 mm 的平板产品；不属于高速钢的不锈钢、硅电钢或其他合金钢；条、杆、丝、锻件、铸件和制成零件；以及在所声明轧制路线后又经镀层、金属涂层、涂漆、包覆、机加工、冲压或其他进一步加工的产品。炼钢和外购半成品或热轧原料的生产通过上游数据集链接，不在前景轧制边界内重复建模。默认边界不含工厂门口之后的使用、下游制造、配送及寿命终止阶段。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.basic-metals.flat-rolled-products-of-high-speed-steel-of-a-width-of-less-than-600-mm-not-further-wor-cb876d72 |
| classification_refs | CPC 3.0: 41234 |
| covered_products | 成品宽度小于 600 mm、处于所声明热轧或冷轧状态且未经进一步加工的高速钢带材、卷材或板材 |
| excluded_products | 宽度不小于 600 mm 的产品；非高速钢；长材；钢丝；锻件；铸件；经涂层、镀层、涂漆、包覆、机加工、冲压或制成加工的产品 |
| representative_product | 轧制设施门口的净合格窄幅高速钢平板轧材 |
| production_route | 从已识别高速钢原料开始的所声明热轧或冷轧路线；酸洗和退火仅在实际生产路线采用时纳入 |
| market_state | 卷材、带材或板材；热轧或冷轧；成品宽度小于 600 mm；声明牌号、厚度、表面状态、退火状态和涂油状态 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 在轧制设施门口提供处于所声明热轧或冷轧市场状态的窄幅高速钢平板轧材 |
| How much | 1,000 kg 净合格产品，不含包装 |
| How well | 符合生产者声明的高速钢牌号、尺寸、公差、表面状态及力学性能或硬度规范 |
| How long or cycle | 工厂门口的一个完整生产批次；不表示使用阶段时长 |
| reference_flow_link | 参考流为从 `finishing` 放行的合格销售产品净质量 |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1,000 kg |
| 参考产品流 | 除热轧或冷轧外未经进一步加工的宽度小于600毫米的高速钢平板轧材 `541b0051-f1fa-4b04-aa1b-94d8e149dd5d` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 轧制路线；高速钢牌号和适用规范；主要合金成分或牌号代号；成品宽度和厚度；卷材、带材或板材形态；热轧或冷轧状态；表面和边部状态；退火和调质状态；防锈涂油状态；设施及生产地理位置；生产期间；原料状态、来源和上游数据集；净质量计量方法；工厂门口边界 |

构建前景数据包时，`必需限定信息` 中列出的信息应在数据集元数据、过程说明、参考流备注、产品说明或等效数据包字段中明确声明。缺失必需限定信息的数据包视为参考流定义不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | 参考产品及所有物料平衡行 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 使用不含包装的经核实净质量；所有前景数量均归一化到 1,000 kg 合格参考产品。 |
| `electricity_energy` | `pickling_electricity`、`rolling_electricity` 和 `annealing_electricity` | Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | 保留原始电表数据，按 1 kWh = 3.6 MJ 将外购交流电换算为 MJ；不得与炉用燃料合并。 |
| `gas_volume` | `natural_gas_input` | Volume `93a60a56-a3c8-22da-a746-0800200c9a66` | m3 | 报告气态天然气计量体积及电表或供应商采用的参考温度和压力；未经记录的换算不得合并不同参考状态的体积。 |
| `water_volume` | 漂洗水和冷却水输入 | Volume `93a60a56-a3c8-22da-a746-0800200c9a66` | m3 | 仅记录跨越设施边界的补充水；内部循环水量不计入输入，并单独披露循环方法。 |
| `material_balance` | 原料、产品、氧化皮、边角料、废过程材料及库存变化 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 报告期间内一致采用干基或收到基质量进行核算；未计量的平衡差额应披露，不得归入笼统废物流。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 适用于所声明轧制路线的外购高速钢半成品或热轧原料，并识别牌号、形态、质量、供应商、生产地理位置和上游数据集 |
| starting_condition_role | 进入前景轧制系统的外部产品输入 |
| product_classification_scope | 成品宽度小于 600 mm、以热轧或冷轧状态放行且之后未经进一步加工的高速钢平板轧材 |
| recursive_input_rule | 如果外购热轧带材本身已落入本产品类别，则只链接该输入的一个上游数据集，不在前景数据集中递归应用本 PCR |
| upstream_dataset_requirement | 为原料、电力、天然气、水、酸、油品、保护气和外部废物处理链接地理及技术上有代表性的上游数据集；可用时优先识别供应商特定数据 |
| disclosure | 声明路线、原料状态和来源、所含表面预处理及退火工序、燃料和电力供应、水循环、废物去向、分配、生产期间、地理位置，以及任何省略或外部建模的阶段 |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_foreground_operations` | 前景轧制系统 | 纳入原料接收和称量、采用时的酸洗和漂洗、热轧或冷轧、路线所需退火、冷却、在线精整、实测现场公用投入、产生的废物及直接排放，直至合格产品在设施门口放行。 | `ec-jrc-fmp-bref-2022`; `worldsteel-lci-methodology-2017` |
| `boundary_upstream_links` | 外部供应投入 | 原料、能源、水、化学品、油品和保护气的生产及入厂供应由上游数据集表示；不得在前景行内重复这些上游过程。 | `worldsteel-lci-methodology-2017` |
| `boundary_route_condition` | 热轧和冷轧路线变体 | 只有所声明生产路线实际采用时才应用酸洗、冷减薄、退火和保护气行；未经按产量加权并披露，不得平均热轧和冷轧路线。 | `ec-jrc-fmp-bref-2022`; `worldsteel-lci-methodology-2017` |
| `boundary_exclusions` | 下游生命周期 | 默认数据集不含包装、设施门口之后的配送、使用、下游制造或涂层、资本品和寿命终止；任何目标与范围扩展应作为单独模块披露。 | `worldsteel-lci-methodology-2017` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `feedstock_receipt` | 高速钢原料接收与称量 | `required` | 始终纳入 | 前景边界输入和批次识别 | 每 1,000 kg 合格参考产品 |
| `pickling` | 酸洗、漂洗和表面预处理 | `conditional` | 在所声明轧制阶段之前采用酸洗除鳞时纳入 | 前景表面预处理 | 每 1,000 kg 合格参考产品 |
| `rolling` | 热轧或冷减薄 | `required` | 纳入所声明的热轧或冷轧作业 | 前景形状和厚度减薄 | 每 1,000 kg 合格参考产品 |
| `annealing` | 路线所需退火 | `conditional` | 为获得所声明轧制产品状态或性能而进行退火时纳入 | 前景热处理 | 每 1,000 kg 合格参考产品 |
| `finishing` | 冷却、卷取、纵切或剪切、检验与放行 | `required` | 始终纳入为达到声明尺寸并放行无涂层轧制产品所需的工序 | 前景精整及参考产品放行 | 每 1,000 kg 合格参考产品 |

### 过程：高速钢原料接收与称量（`feedstock_receipt`）

#### 输入

##### 产品流

###### 接收的高速钢原料（`high_speed_steel_feedstock`）

记录进入前景系统的具体高速钢半成品或热轧原料质量，并声明牌号、形态、来源和上游数据集。

- 选定流：高速钢轧制原料
- 流属性/单位：Mass / kg
- 数量规则：汇总归属于所声明生产批次的经核实收货或地磅质量，并按有记录的期初和期末库存调整
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_feedstock_records`
- 来源：`worldsteel-lci-methodology-2017`

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

##### 基本流

### 过程：酸洗、漂洗和表面预处理（`pickling`）

#### 输入

##### 产品流

###### 酸洗线用电（`pickling_electricity`）

在纳入酸洗时，记录酸液循环、抽风、漂洗、干燥及相关设备实测的外购交流电。

- 选定流：交流电 `a500e350-83b8-4347-894e-b81ecd418615`
- 流属性/单位：Net calorific value / MJ
- 数量规则：归属于所含酸洗作业的实测电量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_pickling_energy`
- 来源：`ec-jrc-fmp-bref-2022`

###### 酸洗用盐酸（`hydrochloric_acid_input`）

只有实际酸洗配方使用盐酸时才单独记录，并保留供货浓度和再生状态。

- 选定流：盐酸
- 流属性/单位：Mass / kg
- 数量规则：进入所含酸洗线的盐酸溶液供应量或槽体平衡质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 合格参考产品；声明供货溶液浓度
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_pickling_materials`
- 来源：`ec-jrc-fmp-bref-2022`

###### 酸洗用硫酸（`sulfuric_acid_input`）

只有实际酸洗配方使用硫酸时才单独记录，并保留供货浓度和回收状态。

- 选定流：硫酸
- 流属性/单位：Mass / kg
- 数量规则：进入所含酸洗线的硫酸溶液供应量或槽体平衡质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 合格参考产品；声明供货溶液浓度
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_pickling_materials`
- 来源：`ec-jrc-fmp-bref-2022`

###### 去离子漂洗水（`demineralized_rinse_water`）

记录进入漂洗工序的去离子水或经证明质量等同的补充水，不含内部循环量。

- 选定流：去离子水
- 流属性/单位：Volume / m3
- 数量规则：供应至漂洗且归属于所含产品的实测补充水量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_pickling_water`
- 来源：`ec-jrc-fmp-bref-2022`

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

###### 废酸洗液（`spent_pickling_solution`）

记录移出前景过程、送往再生、回收或处理的废酸洗液质量，并声明酸种和去向。

- 选定流：废酸洗液
- 流属性/单位：Mass / kg
- 数量规则：从所含酸洗系统移出的称量或槽体平衡质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_pickling_wastes`
- 来源：`ec-jrc-fmp-bref-2022`

###### 酸性漂洗废水（`acidic_rinse_wastewater`）

将排放或送处理的酸性漂洗废水作为一个已识别水相废物流记录，不得与氧化皮或废酸合并。

- 选定流：酸性漂洗废水
- 流属性/单位：Volume / m3
- 数量规则：离开漂洗系统并进入场内或外部处理的实测废水体积
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_pickling_wastes`
- 来源：`ec-jrc-fmp-bref-2022`

###### 去除的氧化铁皮（`iron_oxide_scale`）

单独记录从高速钢表面去除并送回收或处理的氧化皮。

- 选定流：氧化铁皮 `aad763e2-78ab-4fcb-8a3b-8d8525c9e6ca`
- 流属性/单位：Mass / kg
- 数量规则：所含表面预处理产生的实测干质量，或按实测含水率校正的湿质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_pickling_wastes`
- 来源：`ec-jrc-fmp-bref-2022`

##### 基本流

###### 排入空气的氯化氢（`hydrogen_chloride_air`）

采用盐酸酸洗时，记录治理后排入空气的实测氯化氢。

- 选定流：氯化氢 `fe0acd60-3ddc-11dd-aab0-0050c2490048`
- 流属性/单位：Mass / kg
- 数量规则：烟气浓度与标准化干烟气流量按运行时间积分，或采用经验证的直接质量测量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_pickling_air_emissions`
- 来源：`ec-jrc-fmp-bref-2022`

###### 排入空气的二氧化硫（`sulfur_dioxide_air`）

含硫酸洗作业产生该排放时，记录治理后排入空气的实测二氧化硫。

- 选定流：二氧化硫
- 流属性/单位：Mass / kg
- 数量规则：以二氧化硫表示的烟气浓度与标准化干烟气流量按运行时间积分
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_pickling_air_emissions`
- 来源：`ec-jrc-fmp-bref-2022`; `worldsteel-lci-methodology-2017`

### 过程：热轧或冷减薄（`rolling`）

#### 输入

##### 产品流

###### 轧机用电（`rolling_electricity`）

记录所含热轧机或冷减薄轧机及其直接相关传动设备实测的外购交流电。

- 选定流：交流电 `a500e350-83b8-4347-894e-b81ecd418615`
- 流属性/单位：Net calorific value / MJ
- 数量规则：归属于所声明产品轧制作业的实测电量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_rolling_energy`
- 来源：`ec-jrc-fmp-bref-2022`

###### 轧制油（`rolling_oil_input`）

采用润滑时，记录进入轧制系统的具体轧制油或水包油乳化液浓缩物。

- 选定流：轧制油
- 流属性/单位：Mass / kg
- 数量规则：供应商收货量按库存变化及单独记录的回收或循环量调整
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 合格参考产品；声明配方或浓缩物基准
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_rolling_materials`
- 来源：`ec-jrc-fmp-bref-2022`

###### 冷却补充水（`cooling_water_input`）

记录从设施系统外进入轧制及换热冷却回路的水，不含循环冷却水。

- 选定流：水
- 流属性/单位：Volume / m3
- 数量规则：归属于所含轧制作业的实测冷却系统补充水量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_rolling_water`
- 来源：`ec-jrc-fmp-bref-2022`

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

###### 废轧制乳化液（`spent_rolling_emulsion`）

记录移出系统并送回收或处理的废轧制乳化液；留在循环回路中的乳化液不计入。

- 选定流：废轧制乳化液
- 流属性/单位：Mass / kg
- 数量规则：从轧制乳化液回路移出的称量或槽体平衡质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_rolling_wastes`
- 来源：`ec-jrc-fmp-bref-2022`

###### 含油轧制污泥（`rolling_oily_sludge`）

将从轧制油过滤系统清出的含油污泥或过滤残渣作为独立废物流记录。

- 选定流：含油轧制污泥
- 流属性/单位：Mass / kg
- 数量规则：按收到基称量，并保留含水率或含油量表征
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_rolling_wastes`
- 来源：`ec-jrc-fmp-bref-2022`

##### 基本流

### 过程：路线所需退火（`annealing`）

#### 输入

##### 产品流

###### 退火线用电（`annealing_electricity`）

记录所含电加热退火炉以及循环、控制和冷却设备使用的外购交流电。

- 选定流：交流电 `a500e350-83b8-4347-894e-b81ecd418615`
- 流属性/单位：Net calorific value / MJ
- 数量规则：归属于所声明产品退火作业的实测电量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_annealing_energy`
- 来源：`ec-jrc-fmp-bref-2022`

###### 退火用气态天然气（`natural_gas_input`）

记录所含退火燃烧器消耗的气态天然气，并声明供应地理位置和计量参考状态。

- 选定流：气态天然气 `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位：Volume / m3
- 数量规则：归属于所声明产品退火作业的实测天然气体积
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 合格参考产品；声明计量温度和压力
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_annealing_energy`
- 来源：`ec-jrc-fmp-bref-2022`

###### 保护用氮气（`protective_nitrogen`）

所声明退火炉使用氮气时，将进入保护气氛的氮气与氢气分开记录。

- 选定流：氮气 `96ba4c16-fd7c-424e-b318-d87484d3d7c0`
- 流属性/单位：Volume / m3
- 数量规则：进入所含退火线的实测或供应商记录氮气体积
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 合格参考产品；声明气体参考状态和纯度
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_annealing_gases`
- 来源：`ec-jrc-fmp-bref-2022`

###### 保护用氢气（`protective_hydrogen`）

所声明退火炉使用氢气时，将进入保护气氛的氢气与氮气分开记录。

- 选定流：氢气
- 流属性/单位：Volume / m3
- 数量规则：进入所含退火线的实测或供应商记录氢气体积
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 合格参考产品；声明气体参考状态和纯度
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_annealing_gases`
- 来源：`ec-jrc-fmp-bref-2022`

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

##### 基本流

###### 排入空气的二氧化碳（化石源）（`fossil_co2_air`）

核对监测数据或燃料碳数据后，记录所含天然气退火产生的化石源二氧化碳；此处不含燃料供应上游排放。

- 选定流：二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 流属性/单位：Mass / kg
- 数量规则：归属于所含退火炉的经验证场址排放记录
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_annealing_air_emissions`
- 来源：`ec-jrc-fmp-bref-2022`; `worldsteel-lci-methodology-2017`

###### 排入空气的二氧化氮（`nitrogen_dioxide_air`）

按所报告二氧化氮当量基准记录所含退火燃烧的氮氧化物，并随原始记录保留换算基准。

- 选定流：二氧化氮 `08a91e70-3ddc-11dd-96e5-0050c2490048`
- 流属性/单位：Mass / kg
- 数量规则：以二氧化氮当量表示的烟气浓度与标准化干烟气流量按运行时间积分
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_annealing_air_emissions`
- 来源：`ec-jrc-fmp-bref-2022`; `worldsteel-lci-methodology-2017`

###### 排入空气的一氧化碳（`carbon_monoxide_air`）

将所含退火燃烧产生的实测一氧化碳作为独立基本流记录。

- 选定流：一氧化碳（化石源） `08a91e70-3ddc-11dd-924e-0050c2490048`
- 流属性/单位：Mass / kg
- 数量规则：烟气浓度与标准化干烟气流量按运行时间积分
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_annealing_air_emissions`
- 来源：`ec-jrc-fmp-bref-2022`; `worldsteel-lci-methodology-2017`

### 过程：冷却、卷取、纵切或剪切、检验与放行（`finishing`）

#### 输入

##### 产品流

###### 防锈油（`corrosion_preventive_oil_input`）

只有所声明产品涂油时，记录施加于成品轧制表面的具体防锈油。

- 选定流：防锈油
- 流属性/单位：Mass / kg
- 数量规则：供应商收货量按库存变化调整，或以经校准施涂率与涂油产品面积核对
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 合格参考产品；声明配方和涂油面积
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_finishing_materials`
- 来源：`ec-jrc-fmp-bref-2022`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 合格窄幅高速钢平板轧材（`reference_product`）

仅记录在工厂门口满足所声明牌号、宽度、厚度、轧制状态、表面及放行标准的产品。

- 选定流：除热轧或冷轧外未经进一步加工的宽度小于600毫米的高速钢平板轧材 `541b0051-f1fa-4b04-aa1b-94d8e149dd5d`
- 流属性/单位：Mass / kg
- 数量规则：固定参考输出 1,000 kg 净合格销售产品
- 数值来源模式：固定值（`fixed_value`）
- 适用范围：通用（`generic`）
- 归一化基准：1,000 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：来源规则（`source_rule`）
- 采集协议：
- 来源：`un-cpc-3-0-2025`; `worldsteel-lci-methodology-2017`

##### 废物流

###### 分选的高速钢边角料（`high_speed_steel_offcuts`）

将离开前景过程、送往回收的切边、切头和不合格高速钢带材作为一个分选金属废物流记录。

- 选定流：高速钢边角料
- 流属性/单位：Mass / kg
- 数量规则：称量离开精整工序的分选质量，并按同一报告期间内有记录的内部返回量调整
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_finishing_wastes`
- 来源：`ec-jrc-fmp-bref-2022`

##### 基本流

## 7. 分配与共产品处理

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivision_first` | 共用轧制、酸洗、退火和精整作业 | 优先通过过程细分、专用计量、批次记录和直接质量跟踪，在采用分配前将负荷归属到实际产品路线。 | `worldsteel-lci-methodology-2017` |
| `allocation_shared_operations` | 无法避免的共用公用工程或生产批 | 无法直接分离时，应采用反映共用作业的有记录物理驱动因子，例如加工质量、计量时段、炉次、运行时间或处理面积；披露驱动因子，并对重要分配进行敏感性检验。 | `worldsteel-lci-methodology-2017` |
| `allocation_offcuts_and_recovery` | 边角料、氧化皮、废酸、废油及回收输出 | 在前景边界分别报告每项外送回收流并识别去向；不得用废物质量或回收信用冲减参考产品。任何系统扩展或回收信用仅可用于明确声明的扩展范围。 | `worldsteel-lci-methodology-2017` |
| `allocation_no_double_counting` | 外购原料和外部处理 | 不得重复链接原料、能源、材料或处理数据集已经包含的负荷，也不得对同一外购热轧输入递归应用本 PCR。 | `worldsteel-lci-methodology-2017` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_feedstock_records` | `feedstock_receipt` | 高速钢原料 | 地磅、收货和库存记录 | 批次号；牌号；形态；供应商；来源；收货质量；期初库存；期末库存 | 将批次收货和库存与生产领料记录核对 | kg | 每次收货及报告期末 | 与产品输出相同期间，通常至少覆盖有代表性的 12 个月 | 进入报告设施的全部原料 | 归属收货质量加期初库存减期末库存 | 校准证书、供应商证书、批次追溯和库存核对 |
| `cp_pickling_energy` | `pickling` | 电力 | 分表或分配的总表记录 | 电表编号；起止读数；时段；产品批次；电力供应商；电压 | 读取专用电表；共表按有记录运行时段和加工质量分配 | kWh 和 MJ | 每班或每批，按月汇总 | 与产品输出相同期间 | 所含酸洗线 | 汇总归属读数并将 kWh 换算为 MJ | 电表校准、账单核对和分配工作表 |
| `cp_pickling_materials` | `pickling` | 各种酸洗酸 | 发票、槽液液位和配方记录 | 化学品标识；浓度；交付质量；期初库存；期末库存；再生返回；产品批次 | 分别核对每种酸的采购量和槽体平衡 | kg 溶液和 kg 有效酸 | 每次交付和每批，按月汇总 | 与产品输出相同期间 | 所含酸洗槽 | 按化学品标识汇总净外部输入；溶液基准与有效酸基准分开 | 供应商规格、槽体校准、配方和再生日志 |
| `cp_pickling_water` | `pickling` | 去离子漂洗水 | 水表记录 | 电表编号；入口体积；循环体积；产品批次 | 在漂洗系统边界计量外部补充水 | m3 | 每日或每批，按月汇总 | 与产品输出相同期间 | 所含漂洗阶段 | 仅汇总外部补充水 | 水表校准和水平衡核对 |
| `cp_pickling_wastes` | `pickling` | 各项酸洗废物 | 槽液转移、废物联单、氧化皮称量和化验记录 | 废物标识；质量或体积；含水率；酸种；去向；日期；产品批次 | 各项外送废物流分别记录并与处理联单核对 | kg 或 m3 | 每次转移，按月汇总 | 与产品输出相同期间 | 所含酸洗和漂洗阶段 | 按废物标识和去向汇总 | 废物联单、经校准秤或槽体及化验表征 |
| `cp_pickling_air_emissions` | `pickling` | 各项酸性气体排放 | 烟气测试或连续监测记录 | 物质；浓度；烟气流量；水分；氧量；参考状态；运行时间；治理状态 | 将经验证的物质特定浓度和标准化烟气流量按归属运行时间积分 | kg | 有条件时连续监测，或按要求开展烟气测试 | 代表报告期间及运行状态 | 所含酸洗排口 | 按物质汇总质量，不合并为笼统空气排放 | 监测校准、测试报告和运行日志 |
| `cp_rolling_energy` | `rolling` | 电力 | 轧机分表记录 | 电表编号；起止读数；时段；产品批次；轧制路线；供应商；电压 | 读取轧机专表，或按有记录运行数据分配共表 | kWh 和 MJ | 每班或每生产批，按月汇总 | 与产品输出相同期间 | 所含轧机 | 汇总归属读数并将 kWh 换算为 MJ | 电表校准、账单核对和生产日志 |
| `cp_rolling_materials` | `rolling` | 轧制油 | 采购、库存、配方和回收记录 | 产品名；配方；交付质量；期初库存；期末库存；回收质量；产品批次 | 核对具体油品或浓缩物的净外部输入 | kg | 每次交付和报告期末 | 与产品输出相同期间 | 所含轧制油系统 | 采购加期初库存减期末库存再减有记录的外部回收返回 | 供应商规格、库存记录和油系统平衡 |
| `cp_rolling_water` | `rolling` | 冷却补充水 | 水表和冷却回路记录 | 补充水量；排污；循环量；电表编号；产品批次 | 计量进入冷却系统的水并另行记录循环量 | m3 | 每日，按月汇总 | 与产品输出相同期间 | 所含轧制和冷却回路 | 汇总归属于轧制的外部补充水 | 水表校准和冷却水平衡 |
| `cp_rolling_wastes` | `rolling` | 各项含油废物 | 废物联单、槽体和过滤器维护记录 | 废物标识；质量；含水率；含油量；去向；日期；产品批次 | 分别称量或槽量每项移出的乳化液或污泥 | kg | 每次清出，按月汇总 | 与产品输出相同期间 | 所含轧制油和过滤系统 | 按废物标识和去向汇总 | 废物联单、秤或槽体校准及表征报告 |
| `cp_annealing_energy` | `annealing` | 电力或天然气 | 炉体分表和燃气表记录 | 能源载体；表号；读数；燃气参考温度和压力；炉号；炉次；产品批次 | 分别计量所含炉体作业的电力和天然气 | kWh、MJ 和 m3 | 每炉次或连续线每班，按月汇总 | 与产品输出相同期间 | 所含退火炉和附属设备 | 各能源载体分别汇总并归一化到合格输出 | 仪表校准、燃料账单、炉体日志和气体状态记录 |
| `cp_annealing_gases` | `annealing` | 各种保护气 | 气表或供应商记录 | 气体标识；纯度；体积；温度；压力；钢瓶或电表编号；炉次 | 在一致参考状态下分别计量氮气和氢气 | m3 | 每炉次或每班，按月汇总 | 与产品输出相同期间 | 所含保护气供应 | 按气体标识汇总；无组分记录时不得报告混合气 | 供应商证书、仪表校准和炉体配方 |
| `cp_annealing_air_emissions` | `annealing` | 各项燃烧排放 | 连续监测、烟气测试或经验证场址排放记录 | 物质；浓度；烟气流量；氧量；水分；参考状态；运行时间；炉体和燃料数据 | 将物质特定监测排放按归属运行时间积分 | kg | 有条件时连续监测，或按要求开展烟气测试 | 代表报告期间和炉体运行状态 | 所含退火排口 | 按物质汇总质量并保留任何当量换算 | 监测校准、烟气测试、燃料核对和炉体日志 |
| `cp_finishing_materials` | `finishing` | 防锈油 | 供应商、库存和施涂记录 | 配方；交付质量；期初库存；期末库存；施涂率；涂油面积；产品批次 | 核对净供油量或按经校准施涂量归属于声明涂油产品 | kg | 每批及报告期末 | 与产品输出相同期间 | 所含涂油设备 | 汇总归属于声明产品的外部净油量 | 供应商规格、库存核对和施涂器校准 |
| `cp_finishing_wastes` | `finishing` | 高速钢边角料 | 秤、废钢箱和回收记录 | 废物标识；牌号；质量；内部返回；外部去向；产品批次 | 称量分选边角料，区分同期内部返回和外送废物 | kg | 每箱或每批，按月汇总 | 与产品输出相同期间 | 所含纵切、剪切和检验 | 按牌号和去向汇总外送边角料 | 秤校准、废钢联单和生产核对 |
| `cp_product_output` | `finishing` | 合格参考产品 | 成品秤和放行记录 | 批次号；牌号；宽度；厚度；形态；轧制状态；表面；退火状态；涂油状态；净质量；放行状态 | 检验后、包装前称量合格产品 | kg | 每个放行批次 | 与全部前景输入输出相同期间 | 报告设施放行的全部合格产品 | 仅汇总已放行合格产品净质量 | 秤校准、检验放行、牌号证书和尺寸记录 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_normalize_reference_mass` | 每个非参考产品清单行 | 归一化数量 = 报告期间归属数量 ÷ 合格产品输出质量 × 1,000 kg | 已采集行数量；`cp_product_output` 合格净质量 | 每 1,000 kg 参考产品的数量 | `worldsteel-lci-methodology-2017` |
| `calc_electricity_conversion` | 电力行 | MJ = 实测 kWh × 3.6；保留原始电表单位和换算 | 实测 kWh | 交流电 MJ |  |
| `calc_gas_condition_alignment` | 天然气和保护气 | 只有源、目标温度、压力和含湿基准均有记录时才换算；否则保留实测状态并标记不可比 | 实测体积；温度；压力；含湿基准 | 声明参考状态下的 m3 |  |
| `calc_material_balance` | 原料、参考产品、边角料、氧化皮、废过程材料和库存变化 | 核对输入质量、合格输出、分别实测的物料输出及库存变化；在质量披露中明确报告剩余平衡差额 | 接收、废物和产品协议的质量记录 | 报告期间物料平衡表 | `worldsteel-lci-methodology-2017` |
| `calc_shared_meter_allocation` | 共用电、水、气或物料记录 | 仅按 `allocation_shared_operations` 选择并记录的物理驱动因子分配无法避免的共用总量；保留总量、驱动值和敏感性 | 共用总量；过程时间、质量、炉次或面积驱动 | 过程归属数量 | `worldsteel-lci-methodology-2017` |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_product_identity` | 原料和参考产品 | 保留能区分高速钢、宽度小于 600 mm、轧制状态、尺寸、表面状态及未经进一步加工的牌号证书和产品记录。 | 供应商证书、内部牌号记录、尺寸检验和放行证书 |
| `dq_technology` | 所有前景过程 | 识别热轧或冷轧路线、酸洗化学品、轧机配置、退火炉及气氛、治理和循环，以及任何省略阶段。 | 工艺流程图、操作配方、设备清单和环保许可记录 |
| `dq_time` | 所有采集数量 | 使用一致且有代表性的报告期间，通常不少于 12 个月，并披露停机、异常运行及非代表性生产批。 | 有日期的计量、生产、维护和环境记录 |
| `dq_geography` | 能源、材料和原料数据集 | 尽可能使电力供应或电网、燃料供应、原料来源和外部处理地理位置与设施及报告期匹配；使用通用数据时说明理由。 | 供应商记录、数据集元数据和数据选择说明 |
| `dq_completeness` | 清单 | 分别核算每个适用的列示交换；在所产数据集中将确实不存在的条件行标为不适用；解释任何实测平衡差额或预期但未监测的排放。 | 完整行检查表、物料和能量核对及省略记录 |
| `dq_measurement` | 仪表、秤、槽体和排放监测仪 | 使用经校准仪器或有记录的供应商数据，并保留单位、参考状态、检出限和分配数据。 | 校准证书、发票、化验报告和原始仪表导出 |
| `dq_uuid_resolution` | UUID 为空的流 | 完整链接数据集发布前，应解析并直接审计每个准确 TianGong 流；不得用氧气流替代氮气，也不得用通用合金钢产品替代参考产品。 | 公共 state_code=100 直读及语义审计记录 |

## 9. 校验规则

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validation_identity` | 参考产品 | 若无法证明高速钢牌号、宽度小于 600 mm、热轧或冷轧状态、产品形态、净质量或未经进一步加工，则数据包校验失败。 | `un-cpc-3-0-2025`; `china-mofcom-high-speed-steel-terminology` |
| `validation_reference_amount` | 参考流 | 要求不含包装的净合格产品恰为 1,000 kg，并核实所有纳入数量采用相同归一化分母。 | `worldsteel-lci-methodology-2017` |
| `validation_route_completeness` | 过程图和清单 | 每项所声明作业必须记录其适用的原子投入、废物和直接排放；拒绝合并的能源、化学品、废物或排放集合以及无法解释的条件性省略。 | `ec-jrc-fmp-bref-2022` |
| `validation_energy_identity` | 电力和天然气 | 电力必须声明供应商、地理位置、电压和交付边界；天然气必须声明供应地理位置、炉体用途、计量温度和压力；拒绝能源载体合并。 | `worldsteel-lci-methodology-2017`; `ec-jrc-fmp-bref-2022` |
| `validation_mass_balance` | 物料流 | 要求报告期内核对原料、合格输出、分别实测的边角料、氧化皮、废过程材料和库存变化；剩余差额必须披露，不得虚构。 | `worldsteel-lci-methodology-2017` |
| `validation_allocation` | 共用作业和回收流 | 要求过程细分或有记录的物理分配驱动，并确认外送废物、上游数据集和回收效应未重复计算或从产品质量中扣减。 | `worldsteel-lci-methodology-2017` |
| `validation_data_quality` | 发布数据集 | 数据集获准作为背景数据使用前，必须具备可追溯原始记录、校准证据、报告期和地理代表性、路线披露、未解决 UUID 披露及明确排除项。 | `worldsteel-lci-methodology-2017` |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 经审查并链接有代表性的上游数据集后作为 `secondary_dataset` 或 `background_dataset` |
| downstream_use | 需要工厂门口窄幅热轧或冷轧高速钢投入的前景高速钢产品系统、过程数据集和生命周期模型 |
| allowed_use | 产品牌号、宽度、轧制状态、地理、技术、时间和边界与发布数据集相容，且上游链接和分配透明的产品系统 |
| excluded_use | 用作不锈钢、硅电钢或其他合金钢的通用替代；宽度不小于 600 mm 的产品；涂层或制成产品；缺少等效功能和所需审查的公开比较性论断；未单独建模的使用或寿命终止声明 |
| required_metadata | canonical PCR id；CPC 参考；产品牌号和规范；成分或牌号代号；宽度；厚度；形态；轧制、退火、表面和涂油状态；设施和地理位置；生产期间；原料来源和上游数据集；电力和燃料供应；技术；边界；分配；废物去向；UUID 解析状态 |
| required_quality_disclosure | 数据时效和覆盖；仪表和秤校准；物料及能量核对；路线和按产量加权；共表分配；上游数据集代表性；水循环；治理；缺失或低于检出限的排放；未解决 UUID；排除项；不确定性和敏感性 |
| update_trigger | 高速钢牌号组合、热轧或冷轧路线占比、原料来源、轧制或退火技术、酸洗化学品、能源供应、治理、分配、设施地理位置或报告期发生足以实质改变代表性的变化 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3-0-2025` | `official_guidance` | 联合国统计司，《CPC 3.0 版结构》，2025-06-30，https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv（检索日期：2026-09-03） | CPC 41234 的正式产品识别，以及该叶级名称所限定的排除范围 |
| `ec-jrc-fmp-bref-2022` | `official_guidance` | 欧盟委员会联合研究中心，《黑色金属加工行业最佳可行技术参考文件》，2022，https://bureau-industrial-transformation.jrc.ec.europa.eu/sites/default/files/2022-12/FMP%20BREF_Final%20Version.pdf（检索日期：2026-09-03） | 热轧和冷轧过程分解；酸洗、漂洗、油品、冷却水、退火气氛、精整、废物及直接排放采集要求 |
| `worldsteel-lci-methodology-2017` | `official_guidance` | 世界钢铁协会，《生命周期清单方法报告》，2017，https://worldsteel.org/media/publications/lci-report-2017-pdf/?do_download_id=7f96813a-3756-4842-8dbc-38ce201f2914（检索日期：2026-09-03） | 声明质量单位、工厂门口边界、上游链接、地理和技术代表性、排放核算、数据采集、分配、回收披露及校验 |
| `china-mofcom-high-speed-steel-terminology` | `official_guidance` | 中华人民共和国商务部全球法规网税则表页面，https://policy.mofcom.gov.cn/pact/pactContent.shtml?id=1986（检索日期：2026-09-03） | 宽度小于 600 mm 的高速钢平板轧材专业中文术语 |
