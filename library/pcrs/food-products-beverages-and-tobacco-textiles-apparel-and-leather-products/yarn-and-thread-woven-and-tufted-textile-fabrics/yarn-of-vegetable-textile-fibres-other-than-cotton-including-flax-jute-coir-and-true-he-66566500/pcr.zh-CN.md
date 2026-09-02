---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.yarn-and-thread-woven-and-tufted-textile-fabrics.yarn-of-vegetable-textile-fibres-other-than-cotton-including-flax-jute-coir-and-true-he-66566500
language: zh-CN
status: candidate
content_maturity: authored_methodology
translation_status: aligned
sync_with: pcr.en-US.md
---

# 非棉植物纺织纤维纱（包括亚麻、黄麻、椰壳纤维和大麻纱）；纸纱

## 1. 范围与适用性

本 PCR 适用于工厂生产非棉植物纺织纤维纱（包括亚麻、黄麻、椰壳纤维和大麻纱）以及通过分切、加捻纸张制成的纸纱的前景数据包。边界包括纱厂内实施的准备、纺纱或纸条加捻、实际实施的并捻、络筒以及生产批次调湿，终点为工厂门口的成品纱。

起始材料是外购的适纺已加工纤维，或适合分切和加捻的外购纸张。种植、收获、沤麻、剥麻、上游脱胶、制浆及造纸由上游数据集表示。机织、针织、染色、漂白、涂层、上浆、成衣制造、配送、使用和生命末期均不在本前景边界内；研究如需纳入，应作为单独计量过程增加。

一个前景数据包只代表一种已声明材料及路线。含棉、动物纤维或人造纤维的混纺产品不属于本 PCR，除非非棉植物纤维或纸成分作为可单独计量的产品输入建模，并且最终产品仍符合已声明的 CPC 26380 产品身份。缝纫线、绳索、绳缆、机织物、原料或沤制农作物、以及作为最终产品出售的已加工未纺纤维均不包括在内。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.yarn-and-thread-woven-and-tufted-textile-fabrics.yarn-of-vegetable-textile-fibres-other-than-cotton-including-flax-jute-coir-and-true-he-66566500 |
| classification_refs | CPC 3.0: 26380 |
| covered_products | 由一种已声明非棉植物纺织纤维制成的单纱、股线或缆线成品；由一种已声明纸张投入制成的纸纱成品。 |
| excluded_products | 棉纱；动物纤维纱；人造纤维纱；缝纫线；绳索或绳缆；机织物或针织物；尚未纺纱的已加工纤维；当染色、涂层或上浆属于交付产品而未单独建模时的纱线。 |
| representative_product | 由一种已声明非棉植物纺织纤维制成、未漂白且未染色、已完成络筒并在纱厂门口交付的成品纱。 |
| production_route | 路线 A：已加工植物纤维准备、纺纱、可选并捻、络筒和调湿。路线 B：纸张分切、可选润湿、加捻或折叠、可选并捻、络筒和调湿。 |
| market_state | 制造工厂门口的成品纱，需声明材料身份、线密度、捻向与捻度、水分基准、处理状态和卷装形式。 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 在纱线制造工厂门口提供非棉植物纤维纱或纸纱成品。 |
| How much | 1 kg 净纱线，不含运输包装和可重复使用载体。 |
| How well | 符合已声明的纤维或纸张身份、纱线结构、线密度、捻向与捻度、水分基准、处理状态及质量规范。 |
| How long or cycle | 一个完整生产批次；不赋予使用期限功能。 |
| reference_flow_link | 功能单位由下述单一参考产品流实现。 |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 kg |
| 参考产品流 | 植物纺织用纤维纱（包括亚麻、黄麻、椰皮纤维和大麻），皮棉除外，纸纱 `bf8e0cc2-c99b-43a9-b306-d31a7fb8c11f` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | route; botanical fibre species or paper grade; single/plied/cabled construction; linear density in tex; twist direction; twist level; moisture basis and measured moisture content; treatment state; package form; plant geography; production period |

构建前景数据包时，每项必需限定信息均应在数据集元数据、过程说明、参考流备注、产品说明或等效字段中声明。缺少限定信息时，该数据包的参考流不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | 参考纱线输出 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 记录不含运输包装和可重复使用载体的净纱线质量。声明水分基准，并保留与质量结果对应的批次实测含水率。 |
| `linear_density` | 纱线产品规范 | Linear density | tex | 以 tex 记录线密度；如保留原纱支，应同时保留换算为 tex 的有据公式。按适用的 ISO 2060 程序测定卷装纱线密度，或明确论证等效方法。 |
| `twist_measurement` | 纱线产品规范 | Twist | turns/m | 声明 S 或 Z 捻向及每米捻数。在适用时使用 ISO 2061；若该方法不适用于纱线结构，保留经相关方同意的试验方法和试样条件。 |
| `electricity_energy` | 中压交流电投入 | Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | 保留电表读数及原单位；换算为 MJ 时，保留换算公式和来源单位。 |
| `material_mass` | 纤维、纸张、水、润滑油和废物行 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 按生产批次记录称量质量。水以体积计量时，应保留体积、温度或密度证据以及质量换算过程。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 已加工且适合已声明纺纱路线的纤维进入纱厂，或适合已声明纸纱路线的纸张在分切前进入工厂。 |
| starting_condition_role | 前景纱线制造过程的上游产品投入。 |
| product_classification_scope | CPC 3.0 代码 26380，并受本 PCR 所述覆盖产品和排除产品约束。 |
| recursive_input_rule | 并捻或其他范围内工序使用同类别纱线时，将该纱线记录为一个明确产品投入并链接其上游数据集；不得在此前景过程中递归展开。 |
| upstream_dataset_requirement | 每项外购纤维、纸张、同类别纱线、电力供应、水供应和润滑油投入均应链接尽可能匹配已声明材料、地理、技术和时间的上游数据集。 |
| disclosure | 声明起始材料身份和状态、已完成的上游准备、纳入的场内操作、排除的处理、材料损失、电力电压与供应混合、水耗、辅助材料、废物去向以及任何同类别纱线投入。 |

| rule_id | 适用对象 | 规则 | 来源 |
| --- | --- | --- | --- |
| `boundary_factory_gate` | 前景纱线制造 | 纳入从已声明起始材料接收到工厂门口成品纱之间，由报告方直接控制的准备、纺纱或纸条成形、并捻、络筒、调湿、公用工程、辅助材料、次品和废物。 | `eu-jrc-txt-bref-2023`; `chummun-rosunee-2012`; `eu-pef-2021` |
| `boundary_upstream_inputs` | 外购起始材料与公用工程 | 种植、沤麻、剥麻、脱胶、制浆、造纸和公用工程生成应保留在所链接的上游数据集中；任何工序如在报告场址内实际实施并计量，则纳入前景。 | `unsd-cpc-3-0-26380`; `eu-jrc-bio-based-textiles-2025`; `eu-pef-2021` |
| `boundary_treatments` | 染色、漂白、涂层和上浆 | 排除下游处理；若处理属于交付纱线并被单独计量为新增前景过程，则纳入。任何改变交付产品状态的排除项均需披露。 | `eu-jrc-txt-bref-2023`; `eu-bat-textiles-2022` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `yarn_manufacturing` | 植物纤维纱或纸纱制造 | required | 纳入一种已声明路线，且只填写适用于该生产批次的原子材料行。 | 前景准备、纺纱或纸条成形、可选并捻、络筒、调湿及成品纱放行。 | 在已声明水分基准下 1 kg 净成品纱。 |

### 过程：植物纤维纱或纸纱制造（`yarn_manufacturing`）

#### 输入

##### 产品流

###### 亚麻熟条（`flax_sliver_input`）

仅对接收适纺亚麻熟条的亚麻纱生产批次记录此投入。

- 选定流：亚麻熟条 `728fa78a-f638-4d63-86c6-f752fe31b5a2`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：投入生产批次的亚麻熟条净称量质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：同一生产批次每 1 kg 净成品纱
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_inputs`
- 来源：`eu-jrc-bio-based-textiles-2025`

###### 已加工黄麻纤维（`jute_fibre_input`）

仅对黄麻纱生产批次记录此投入。未解析名称指一种适纺的已加工黄麻纤维产品，不指麻屑或混合废物流。

- 选定流：Processed jute fibre for spinning
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：投入生产批次的已加工黄麻纤维净称量质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：同一生产批次每 1 kg 净成品纱
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_inputs`
- 来源：`eu-jrc-txt-bref-2023`

###### 已加工大麻纤维（`hemp_fibre_input`）

仅对大麻纱生产批次记录此投入，并保留纱厂接收时已声明的准备状态。

- 选定流：Processed true hemp fibre for spinning
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：投入生产批次的已加工大麻纤维净称量质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：同一生产批次每 1 kg 净成品纱
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_inputs`
- 来源：`eu-jrc-bio-based-textiles-2025`

###### 已加工椰壳纤维（`coir_fibre_input`）

仅对椰壳纤维纱生产批次记录此投入，并保留纱厂接收时已声明的准备状态。

- 选定流：Processed coir fibre for spinning
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：投入生产批次的已加工椰壳纤维净称量质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：同一生产批次每 1 kg 净成品纱
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_inputs`
- 来源：`eu-jrc-txt-bref-2023`

###### 纸条（`paper_strip_input`）

纸纱批次应把纸张原料记录为一种纸条产品。场内分切时，计量投入是分切前纸张，但产品说明仍须识别制成纸条的纸张等级。

- 选定流：Paper strip for paper-yarn twisting
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：生产批次投入分切、折叠或加捻的纸张净称量质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：同一生产批次每 1 kg 净成品纸纱
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_inputs`
- 来源：`chummun-rosunee-2012`

###### 中压交流电（`medium_voltage_electricity_input`）

记录已声明消费混合下供应的 1-35 kV 交流电。本行不得与热、蒸汽或燃料合并。

- 选定流：交流电 `3d76981f-964a-4865-b588-0e067a2a1163`
- 流属性/单位：Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则：归属于该生产批次的准备、纺纱或加捻、并捻、络筒、调湿和本地辅助设备的计量电量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：同一生产批次每 1 kg 净成品纱
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_electricity`
- 来源：`eu-jrc-txt-bref-2023`; `eu-bat-textiles-2022`

###### 工艺水（`process_water_input`）

仅在纸条润湿、湿法纺纱、调湿或可归属于生产批次的清洗用水跨越过程边界时记录。

- 选定流：工艺用水 `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：归属于生产批次的水表计量或罐体称量工艺水。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：同一生产批次每 1 kg 净成品纱
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_process_water`
- 来源：`chummun-rosunee-2012`; `eu-jrc-txt-bref-2023`

###### 矿物润滑油（`mineral_lubricating_oil_input`）

仅在准备、纺纱、并捻或络筒期间把矿物润滑油施加到纤维或纱线上时记录。其他配制助剂应在前景数据包中分别作为化学或商业身份明确的原子卡记录。

- 选定流：Mineral lubricating oil
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：扣除有据退回量后，发放并由生产批次消耗的净质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：同一生产批次每 1 kg 净成品纱
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_lubricating_oil`
- 来源：`eu-bat-textiles-2022`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 成品纱（`finished_yarn_output`）

只记录符合已声明批次规范和参考流限定信息的纱线。

- 选定流：植物纺织用纤维纱（包括亚麻、黄麻、椰皮纤维和大麻），皮棉除外，纸纱 `bf8e0cc2-c99b-43a9-b306-d31a7fb8c11f`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：在已声明水分基准下称量的合格净纱线输出，不含运输包装和可重复使用载体。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：1 kg 净成品纱
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_finished_yarn`
- 来源：`unsd-cpc-3-0-26380`; `iso-2060-1994`; `iso-2061-2015`

##### 废物流

###### 废弃亚麻纤维（`flax_fibre_waste`）

仅在亚麻纱批次产生且废弃材料以亚麻纤维形式离开过程时记录。

- 选定流：Discarded flax fibre from yarn manufacture
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：送往已声明废物去向的废弃亚麻纤维称量质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：同一生产批次每 1 kg 净成品纱
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_solid_wastes`
- 来源：`eu-jrc-txt-bref-2023`

###### 废弃黄麻纤维（`jute_fibre_waste`）

仅在黄麻纱批次产生且废弃材料以黄麻纤维形式离开过程时记录。

- 选定流：Discarded jute fibre from yarn manufacture
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：送往已声明废物去向的废弃黄麻纤维称量质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：同一生产批次每 1 kg 净成品纱
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_solid_wastes`
- 来源：`eu-jrc-txt-bref-2023`

###### 废弃大麻纤维（`hemp_fibre_waste`）

仅在大麻纱批次产生且废弃材料以大麻纤维形式离开过程时记录。

- 选定流：Discarded true hemp fibre from yarn manufacture
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：送往已声明废物去向的废弃大麻纤维称量质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：同一生产批次每 1 kg 净成品纱
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_solid_wastes`
- 来源：`eu-jrc-bio-based-textiles-2025`

###### 废弃椰壳纤维（`coir_fibre_waste`）

仅在椰壳纤维纱批次产生且废弃材料以椰壳纤维形式离开过程时记录。

- 选定流：Discarded coir fibre from yarn manufacture
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：送往已声明废物去向的废弃椰壳纤维称量质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：同一生产批次每 1 kg 净成品纱
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_solid_wastes`
- 来源：`eu-jrc-txt-bref-2023`

###### 废弃纸条（`paper_strip_waste`）

仅在纸纱批次产生且废弃纸条离开过程进入废物管理时记录。

- 选定流：Discarded paper strip from paper-yarn manufacture
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：送往已声明废物去向的废弃纸条称量质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：同一生产批次每 1 kg 净成品纸纱
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_solid_wastes`
- 来源：`chummun-rosunee-2012`

##### 基本流

本 PCR 不规定直接基本流数量。场址具有适用测量、许可记录或质量平衡结果时，应把每种排放物作为单独基本流卡增加；不得根据电力、水、润滑油或废物用量推测排放。

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | 来源 |
| --- | --- | --- | --- |
| `allocation_subdivision` | 可独立计量的路线、批次和纱线等级 | 在可行时按路线、材料、生产批次和独立计量工序细分工厂记录，以避免分配。 | `eu-pef-2021` |
| `allocation_physical` | 具有有据物理因果关系的不可分共产品 | 无法细分时，采用能反映投入和排放随共产品变化的有据物理关系，并保留公式和支撑测量。 | `eu-pef-2021` |
| `allocation_economic_fallback` | 缺少可论证物理关系的不可分可售共产品 | 仅作为后备采用同期净经济价值；披露价格、期间、币种和分配因子，并对质量分配进行敏感性检验。 | `eu-pef-2021` |
| `allocation_waste` | 废弃纤维和废弃纸条 | 将送往废物管理的材料作为废物输出。除非更广泛研究单独应用并披露回收或替代方法，否则不得在本工厂门口数据集中赋予避免产品信用。 | `eu-pef-2021` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_material_inputs` | `yarn_manufacturing` | `flax_sliver_input`, `jute_fibre_input`, `hemp_fibre_input`, `coir_fibre_input`, `paper_strip_input` | 地磅、秤、批次领用及退料记录 | lot_id; material_identity; supplier; preparation_or_paper_grade; gross_mass; tare_mass; returned_mass; moisture_basis; timestamp | 将收货和批次领料记录与校准秤记录核对，并扣除有据退料。 | kg | 每批 | 覆盖报告期的连续记录 | 报告场址全部纱线生产线 | 按原子材料和批次汇总净投入，不得合并不同材料身份。 | 校准记录；供应商规范；收货记录；批次领料和退料记录 |
| `cp_electricity` | `yarn_manufacturing` | `medium_voltage_electricity_input` | 电表和生产日志 | meter_id; voltage_level; supply_mix; opening_reading; closing_reading; unit; allocation_key; lot_id; timestamp | 优先使用专用电表；否则依据有据机器运行时间和额定负荷分配经核对的分表总量。 | 电表原单位和 MJ | 每批或每班 | 包括全部运行模式的代表性报告期 | 全部范围内准备、纺纱或加捻、并捻、络筒、调湿及辅助设备 | 用有据单位公式换算，并除以净合格纱线质量。 | 电表校准；与电费单核对；机器运行日志 |
| `cp_process_water` | `yarn_manufacturing` | `process_water_input` | 水表、罐体质量或批次加水记录 | meter_or_vessel_id; purpose; route; opening_reading; closing_reading; volume_or_mass; temperature_or_density; lot_id; timestamp | 只计量归属于批次的工艺水，并保留体积转质量的证据。 | kg | 每批或每班 | 代表性报告期 | 仅纸条润湿、湿法纺纱、调湿和可归属清洗 | 汇总可归属水质量并除以净合格纱线质量。 | 水表校准；批次单；换算记录 |
| `cp_lubricating_oil` | `yarn_manufacturing` | `mineral_lubricating_oil_input` | 化学品领用及退回记录 | product_name; composition_or_specification; container_id; issued_mass; returned_mass; lot_id; use_point; timestamp | 称量发放和退回容器，仅把净消耗归属于批次。 | kg | 每次领用和每批 | 完整报告期 | 全部范围内使用点 | 按确切产品身份汇总净消耗并除以净合格纱线质量。 | 秤校准；安全数据表；领用和退回记录 |
| `cp_finished_yarn` | `yarn_manufacturing` | `finished_yarn_output` | 成品秤和质量放行记录 | lot_id; gross_mass; tare_mass; net_mass; moisture_content; moisture_basis; material_identity; construction; tex; twist_direction; twist_level; treatment_state; package_form; release_status | 将合格纱线与载体和次品纱分开称量；保留质量放行记录和试验条件。 | kg | 每批 | 完整报告期 | 报告场址全部纱线生产线 | 在已声明水分基准下汇总合格净纱线；次品纱不得作为参考产品。 | 秤校准；水分试验；ISO 2060 或等效记录；ISO 2061 或等效记录；批次放行证书 |
| `cp_solid_wastes` | `yarn_manufacturing` | `flax_fibre_waste`, `jute_fibre_waste`, `hemp_fibre_waste`, `coir_fibre_waste`, `paper_strip_waste` | 废物秤、容器和外运记录 | lot_id; exact_material_identity; container_id; gross_mass; tare_mass; destination; recovery_or_disposal_route; timestamp | 分开收集并称量每项原子废物流；连续收集无法逐批称量时采用有据抽样和核对方法。 | kg | 每批或每次废物外运 | 完整报告期 | 全部范围内废物收集点 | 分别汇总每种确切废物材料，并除以净合格纱线质量。 | 秤校准；废物转移单；去向证据；核对记录 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_net_mass` | 材料、润滑油、成品纱和废物记录 | net_mass = gross_mass - tare_mass - documented_returned_mass；不适用退回量时省略 returned_mass。 | gross_mass; tare_mass; returned_mass | 净质量（kg） |  |
| `calc_normalized_exchange` | 每项清单行 | normalized_exchange = attributable_exchange_amount / net_conforming_yarn_mass，分子分母来自同一批次和相同水分基准。 | attributable exchange amount; net conforming yarn mass | 每 kg 参考纱线的交换量 | `eu-pef-2021` |
| `calc_mass_reconciliation` | 每个生产批次 | 将原子材料投入与成品纱、单独称量废物、在制品变化和实测水分变化核对；对任何残差进行调查和披露，不得创建未计量流。 | atomic material inputs; finished yarn; atomic wastes; work-in-progress change; measured moisture change | 批次质量核对说明 | `eu-pef-2021` |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | 产品和材料身份 | 每个数据集声明一种纱线路线以及一种确切植物纤维物种或纸张等级；任何新增材料或排放物均作为独立原子交换记录。 | 供应商规范；批次记录；产品放行记录；已解析时的 Tiangong UUID |
| `dq_measurement` | 质量、电力和水记录 | 使用经校准仪器，并保留原始读数、单位、换算公式、分配键和核对证据。 | 校准证书；电表或水表日志；称量单；计算工作簿 |
| `dq_temporal` | 报告期 | 覆盖包括启动、正常运行、换型、停机和可归属清洗的代表性期间，或披露排除的运行模式。 | 生产日历；停机日志；报告期论证 |
| `dq_completeness` | 过程与交换覆盖 | 证明全部范围内操作以及全部材料、能源、水、辅助材料、废物和实测直接排放均已纳入，或明确记录为不适用。 | 完整性检查表和批次质量核对；`eu-pef-2021` |
| `dq_yarn_properties` | 参考产品 | 保留所代表批次的线密度、捻度、水分、结构、处理状态和卷装形式证据。 | ISO 2060 或有据等效方法；ISO 2061 或有据等效方法；水分试验；批次规范 |
| `dq_representativeness` | 数据集发布 | 评估并披露技术、地理、时间和精度代表性，以及任何代理上游数据集。 | 按 `eu-pef-2021` 实施的数据质量评估 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | 来源 |
| --- | --- | --- | --- |
| `validate_reference_flow` | 参考产品 | 要求恰好 1 kg 净合格纱线、已确认参考产品 UUID、Mass 流属性 UUID、Units of mass 单位组 UUID 以及全部必需产品限定信息。 | `unsd-cpc-3-0-26380`; `iso-2060-1994`; `iso-2061-2015` |
| `validate_route_material` | 起始材料 | 要求恰好一种已声明路线，且仅填写适用于该批次的材料卡。任何其他范围内植物纤维应以其确切物种特定原子名称记录，并具有已核验 Tiangong UUID 或明确未解析身份记录。 | `unsd-cpc-3-0-26380` |
| `validate_atomic_inventory` | 全部交换 | 拒绝把不同材料、化学品、电力供应情景、燃料、废物或基本流合并到同一卡；每项选定流只能描述一个原子交换。 |  |
| `validate_amount_evidence` | 全部清单数量 | 要求来自前景记录或与采集协议链接的计算；拒绝 AI 估算数量和无依据默认范围。 | `eu-pef-2021` |
| `validate_mass_balance` | 每个生产批次 | 要求原子材料投入、成品纱、原子废物、在制品变化和实测水分变化的有据质量核对；未解释残差应披露并调查。 | `eu-pef-2021` |
| `validate_boundary` | 前景数据集 | 要求纳入全部直接控制的范围内操作、公用工程、辅助材料、次品和实测排放，并为外购投入链接上游数据集；披露交付纱线状态中排除的每项处理。 | `eu-jrc-txt-bref-2023`; `eu-bat-textiles-2022`; `eu-pef-2021` |
| `validate_allocation` | 共用操作和共产品 | 要求优先细分；仍需分配时保留物理或经济分配证据。 | `eu-pef-2021` |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 一种已声明非棉植物纤维纱或纸纱路线的前景产品制造数据集。 |
| downstream_use | 可作为经审查的 `secondary_dataset` 或 `background_dataset`，供消费已声明纱线的纺织、包装、复合材料、工艺品或其他系统使用。 |
| allowed_use | 在全部未解析身份得到解决或在候选审查中透明保留后，用于已声明材料、纱线结构、处理状态、工厂技术、地理和报告期。 |
| excluded_use | 除非明确建立变化后的产品身份和新增过程模型，否则不得代表棉、动物纤维、人造纤维、缝纫线、绳索、织物、染色、漂白、涂层或上浆纱线生产。未经独立审查的完整生命周期范围，不得用于比较性声明。 |
| required_metadata | PCR id；路线；材料物种或纸张等级；上游准备状态；纱线结构；tex；捻向和捻度；水分基准及含量；处理状态；卷装形式；工厂地理；技术；报告期；分配方法；电压和电力混合；废物去向；来源与数据集版本。 |
| required_quality_disclosure | 仪器校准；抽样和分配方法；质量核对结果；覆盖缺口；运行模式；上游代理；技术、地理、时间和精度代表性；未解析 UUID。 |
| update_trigger | 起始材料、纸张等级、纺纱或加捻技术、纱线结构、处理状态、工厂电力供应、分配基准、废物路线、报告期或任何已解析 Tiangong 身份发生变化。 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `unsd-cpc-3-0-26380` | official_guidance | 联合国统计司，CPC 3.0 版结构，代码 26380，2025-06-30。https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv（检索于 2026-08-12）。 | 产品类别范围和参考产品身份。 |
| `eu-jrc-txt-bref-2023` | official_guidance | 欧盟委员会联合研究中心，《纺织工业最佳可行技术参考文件》，2023 年 1 月。https://bureau-industrial-transformation.jrc.ec.europa.eu/reference/textiles-industry（检索于 2026-08-12）。 | 纤维准备、纱线制造边界、公用工程、辅助材料、废物和数据覆盖。 |
| `eu-bat-textiles-2022` | official_guidance | 欧盟委员会实施决定 (EU) 2022/2508，纺织工业 BAT 结论。https://eur-lex.europa.eu/eli/dec_impl/2022/2508/oj/eng（检索于 2026-08-12）。 | 纺织过程控制、资源记录、矿物油相关性和处理边界。 |
| `eu-jrc-bio-based-textiles-2025` | official_guidance | 欧盟委员会联合研究中心，《可持续循环生物经济中的生物基纺织品》，JRC140676。https://publications.jrc.ec.europa.eu/repository/handle/JRC140676（检索于 2026-08-12）。 | 亚麻和大麻价值链阶段，以及上游准备与纺纱和纱线处理的区分。 |
| `chummun-rosunee-2012` | literature | Chummun, J.; Rosunee, S. Manufacture of Folded and Twisted Paper Yarn. Research Journal of Textile and Apparel 16(4), 93-99. https://doi.org/10.1108/RJTA-16-04-2012-B010. | 纸张分切、润湿、折叠或加捻及纸纱路线分解。 |
| `iso-2060-1994` | standard | ISO 2060:1994，Textiles — Yarn from packages — Determination of linear density (mass per unit length) by the skein method。https://www.iso.org/standard/6837.html（检索于 2026-08-12）。 | 线密度测量和参考产品限定。 |
| `iso-2061-2015` | standard | ISO 2061:2015，Textiles — Determination of twist in yarns — Direct counting method。https://www.iso.org/standard/65146.html（检索于 2026-08-12）。 | 捻向和捻度测量。 |
| `eu-pef-2021` | official_guidance | 欧盟委员会建议 (EU) 2021/2279，环境足迹方法。https://eur-lex.europa.eu/eli/reco/2021/2279/2021-12-30/eng（检索于 2026-08-12）。 | 功能单位、系统边界、分配层级、企业特定数据、完整性、数据质量和校验。 |
