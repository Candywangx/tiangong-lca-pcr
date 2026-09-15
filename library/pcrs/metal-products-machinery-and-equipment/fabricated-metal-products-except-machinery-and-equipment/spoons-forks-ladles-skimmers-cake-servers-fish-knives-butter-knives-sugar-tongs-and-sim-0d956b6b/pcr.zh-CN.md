---
schema_version: 1
pcr_id: pcr.metal-products-machinery-and-equipment.fabricated-metal-products-except-machinery-and-equipment.spoons-forks-ladles-skimmers-cake-servers-fish-knives-butter-knives-sugar-tongs-and-sim-0d956b6b
language: zh-CN
status: candidate
content_maturity: authored_methodology
translation_status: aligned
sync_with: pcr.en-US.md
---

# 匙、叉、长柄勺、漏勺、蛋糕铲、鱼刀、黄油刀、糖夹及类似厨房或餐桌用具

## 1. 范围与适用性

本 PCR 适用于以质量为基准、工厂门口边界的前景数据，产品为厨房或餐桌上用于进食、盛取、分份、撇取或夹持食物的制成贱金属器具。涵盖匙、叉、长柄勺、漏勺、蛋糕铲、鱼刀、黄油刀、糖夹及功能相近的用具，包括单件和成套销售。代表性路线为以外购冷轧不锈钢带为原料，经冲裁、成形、必要时的热处理、磨削、抛光、清洗、可选钝化或涂覆、检验和包装的一体化制造。

前景边界始于制造场址验收外购金属坯料，止于合格用具连同纳入范围的包装具备出厂条件。金属坯料、电力、燃料、水、化学品、磨料和包装的上游生产由供应商特定数据集表示。收货前运输、出厂后分销、使用期清洗、维修和生命末期不在本 PCR 范围内；扩展研究应单独报告这些阶段。

本 PCR 不包括普通切割刀具、机器用刀、手工工具、修指甲或修脚器具、非金属餐具、炊具容器和使用客户自有投入的制造服务。贵金属镀层、聚合物或木质手柄、专门热硬化及其他清洗或钝化体系属于路线限定信息，不得将不同产品状态混入同一结果。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.fabricated-metal-products-except-machinery-and-equipment.spoons-forks-ladles-skimmers-cake-servers-fish-knives-butter-knives-sugar-tongs-and-sim-0d956b6b |
| classification_refs | CPC 3.0 42916（精确分类语境） |
| covered_products | 制成的贱金属匙、叉、长柄勺、漏勺、蛋糕铲、鱼刀、黄油刀、糖夹及类似厨房或餐桌用器具 |
| excluded_products | 普通切割刀具；机器用刀；手工工具；修指甲或修脚器具；炊具容器；完全由木材、塑料、陶瓷或玻璃制成的餐具；使用客户自有投入的制造服务 |
| representative_product | 可销售的不锈钢匙、叉、上菜器具或餐刀单件，或已声明组成的套装 |
| production_route | 外购冷轧不锈钢带 → 冲裁和成形 → 路线特定热处理 → 磨削/抛光 → 清洗及可选钝化/涂覆 → 检验和包装 |
| market_state | 工厂门口处已制成、干燥、清洁且可销售的用具；声明合金牌号、器具组合、表面状态、手柄材料、涂层、包装和每千克件数 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 提供用于厨房或餐桌上进食、盛取、分份、撇取或夹持食物的制成贱金属器具 |
| How much | 1 kg 合格制成用具净质量；不含可移除包装，包含一体式手柄和涂层 |
| How well | 满足所声明的器具类型、合金牌号、表面状态、尺寸、食品接触适用性及检验接收要求 |
| How long or cycle | 一次工厂门口交付；不声明使用寿命或使用循环次数 |
| reference_flow_link | 参考产品输出 `finished_cutlery` 归一化为 1 kg 合格制成用具净质量 |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 kg 合格制成用具净质量 |
| 参考产品流 | 制成的贱金属厨房或餐桌用具 |
| 参考流属性 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 器具或套装组成；每千克件数；合金牌号及再生含量声明基准；一体式手柄材料；表面状态和粗糙度等级；热处理路线；钝化或涂覆路线；食品接触规范；纳入的包装；制造地域；数据期间 |

构建前景数据包时，`必需限定信息` 必须在数据集元数据、过程说明、参考流备注、产品说明或等效字段中声明；缺失时参考流定义不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_net_mass` | 参考产品及所有质量归一化清单 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 最终清洗和检验后称量合格干燥用具。纳入一体式手柄和涂层，排除可移除包装。所有清单量归一化至 1 kg 产品净质量。 |
| `set_or_count_conversion` | 以件、打或套记录的数据 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 采用同一产品系列和报告期的实测净质量换算，并保留器具组合、样本量、平均质量和变异性；不得采用通用质量。 |
| `electricity_energy` | 外购电力 | 净热值 `93a60a56-a3c8-11da-a746-0800200b9a66` | MJ | 保留归一化前计量值；按 1 kWh = 3.6 MJ 换算，并披露电压、电网地域和损耗边界。 |
| `gas_reference_conditions` | 气态天然气 | 体积 `93a60a56-a3c8-22da-a746-0800200c9a66` | m3 | 按供应商或仪表基准温度和压力报告体积，并记录条件及热值基准。 |
| `solution_as_supplied` | 氢氧化钠和硝酸 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 记录供货状态溶液质量并另行声明有效物质浓度，不得等同于干化学品质量。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 餐具制造场址验收的外购冷轧不锈钢带及其他已声明投入 |
| starting_condition_role | 制造前景进入条件；上游生产和门口前运输在前景过程之外表示 |
| product_classification_scope | 第 1、2 节语义边界内的制成贱金属厨房或餐桌用器具 |
| recursive_input_rule | 同类别制成品或半成品作为投入跨越场址边界时，仅作为外购产品投入记录一次并连接自身上游数据集，不得在本过程中重建先前制造 |
| upstream_dataset_requirement | 金属坯料、电力、天然气、水、化学品、磨料、包装和外部处理服务使用与地域、技术、牌号及供应商匹配的上游数据集 |
| disclosure | 声明合金与产品组合、一体化或外包操作、热源、清洗/钝化/涂覆路线、废水与粉尘控制边界、废料去向、包装、地域、期间和排除操作 |

### 边界规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_manufacturing_gate` | integrated_cutlery_manufacture | 纳入现场冲裁或锻造、成形、修边、路线特定热处理、磨削、抛光、清洗、适用时的钝化或涂覆、检验、包装、公用工程、废物及直接排放，直至工厂门口放行。 | `unido-ethiopia-cutlery-project-1986`; `us-epa-fabricated-metal-products-1995`; `eu-jrc-surface-treatment-metals-2006` |
| `boundary_outsourced_operations` | 外部热处理、抛光、涂覆、钝化或废水处理 | 一致记录外购服务，或记录发出中间产品与返回产品，防止重复计算服务方能源、材料、废物和排放。 | `eu-jrc-surface-treatment-metals-2006` |
| `boundary_upstream_inputs` | 外购材料与公用工程 | 每项外购投入连接与牌号、配方、交付状态、地域和供应边界匹配的上游数据集。 | `us-epa-fabricated-metal-products-1995`; `eu-jrc-surface-treatment-metals-2006` |
| `boundary_downstream_exclusion` | 分销、使用和生命末期 | 排除出厂后分销、清洗、使用、维修和生命末期，除非要求单独报告扩展情景。 | [] |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `integrated_cutlery_manufacture` | 餐具成形、精整、清洗和包装一体化过程 | `required` | 始终纳入；仅当记录证明相应路线不存在时，才将单项热量、化学品、废物、排放或包装流标记为不适用 | 从验收金属坯料到工厂门口制成用具的前景生产 | 1 kg 合格制成用具净质量 |

### 过程：餐具成形、精整、清洗和包装一体化过程（`integrated_cutlery_manufacture`）

本过程合并共同操作，避免按每种器具、合金、表面状态或包装重复建立清单；差异通过限定信息和行纳入条件声明。

#### 输入

##### 产品流

###### 外购不锈钢坯料（`raw_stainless_steel`）

按牌号和交付状态记录冷轧不锈钢带；板材或棒材路线须在前景实例中另设原子坯料行。

- 选定流：冷轧不锈钢带
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：发放给声明产品批次的实测验收坯料，不含留在过程外的供应商包装
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格制成用具净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_mass_records`
- 来源：`unido-ethiopia-cutlery-project-1986`; `us-epa-fabricated-metal-products-1995`

###### 外购电力（`electricity`）

记录压力机、成形修边、磨削抛光、清洗、泵、粉尘控制、包装和可归属辅助设备耗电。

- 选定流：电力 `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- 流属性/单位：净热值 `93a60a56-a3c8-11da-a746-0800200b9a66` / MJ
- 数量规则：可归属于产品批次的计量或有依据分项计量外购电力
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格制成用具净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_records`
- 来源：`eu-jrc-surface-treatment-metals-2006`

###### 现场供热天然气（`natural_gas`）

仅在现场用于锻造、退火、淬火、回火、槽液加热或干燥时记录。

- 选定流：气态天然气 `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位：体积 `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- 数量规则：声明基准条件下可归属产品批次的计量天然气；全电力或外部供热路线不适用
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 合格制成用具净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_records`
- 来源：`eu-jrc-surface-treatment-metals-2006`

###### 工艺用水（`process_water`）

记录水洗、漂洗、槽液补充、冷却补水等直接工艺用水；排除生活用水。

- 选定流：工艺用水 `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：计量直接工艺用水，按体积记录时说明密度换算
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格制成用具净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_water_records`
- 来源：`eu-jrc-surface-treatment-metals-2006`

###### 切削液（`cutting_fluid`）

记录冲裁、修边、钻孔、机械加工或刃口精整消耗的切削液，并声明配方和稀释。

- 选定流：切削液 `576d250f-4f36-4385-939d-0f03b8f95a10`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：购入或领用质量减去期末库存和单独回收的未使用切削液
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 合格制成用具净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_material_mass_records`
- 来源：`us-epa-fabricated-metal-products-1995`

###### 白色熔融氧化铝抛光磨料（`white_fused_alumina`）

使用该磨料时记录，并声明粒度、等级、载体及可重用性。

- 选定流：白色熔融氧化铝 `429f2b7f-592a-434c-92e2-43a6b4859300`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：批次消耗的购入或领用量，按期末库存和回收可重用介质修正
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 合格制成用具净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_material_mass_records`
- 来源：`unido-ethiopia-cutlery-project-1986`; `us-epa-fabricated-metal-products-1995`

###### 碱性清洗用氢氧化钠（`sodium_hydroxide`）

仅在碱性清洗槽或废水中和使用时记录，并声明浓度和用途。

- 选定流：氢氧化钠 `e0abcced-0611-4c24-9290-5a2c5a0c4169`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：发放给产品批次的供货状态溶液质量，按库存变化和退回未用溶液修正
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 合格制成用具净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_material_mass_records`
- 来源：`us-epa-fabricated-metal-products-1995`; `eu-jrc-surface-treatment-metals-2006`

###### 钝化用硝酸（`nitric_acid`）

仅在不锈钢路线采用硝酸酸洗或钝化时记录，并声明浓度、槽液寿命核算和用途。

- 选定流：硝酸 `bf883501-c052-414e-8e21-e6f53cc257ba`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：发放给批次的供货状态质量，含槽液补充，排除期末可用库存
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 合格制成用具净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_material_mass_records`
- 来源：`us-epa-fabricated-metal-products-1995`; `eu-jrc-surface-treatment-metals-2006`

###### 瓦楞纸箱（`corrugated_board_boxes`）

仅当纸箱随产品出厂时记录；其他包装组件须另设原子行。

- 选定流：瓦楞纸箱 `4f197bec-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：发放给合格产品批次并随其出厂的纸箱实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格制成用具净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_mass_records`
- 来源：`unido-ethiopia-cutlery-project-1986`

##### 废物流

代表路线不接收废物流投入。使用跨越场址边界的回收二次材料时，须按精确身份和上游处理边界另设一行。

##### 基本流

不规定基本资源投入；外购水、能源和金属坯料均为连接上游数据集的产品流。

#### 输出

##### 产品流

###### 制成厨房或餐桌用具（`finished_cutlery`）

仅记录满足声明规范和检验接收准则的合格可销售器具。

- 选定流：制成的贱金属厨房或餐桌用具
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：将声明产品批次的实测合格净产出归一化后设为 1 kg
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：1 kg 合格制成用具净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_product_and_waste_mass_records`
- 来源：`un-cpc-3-0-2025`; `unido-ethiopia-cutlery-project-1986`

##### 废物流

###### 不锈钢冲裁和修边废料（`stainless_steel_scrap`）

记录离开边界的骨架料、边角料、飞边、叉齿修边料等，并声明牌号和去向。

- 选定流：不锈钢边角料和骨架料
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：离开过程的实测废料质量，扣除在同一过程中闭环返回的部分
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格制成用具净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_product_and_waste_mass_records`
- 来源：`us-epa-fabricated-metal-products-1995`

###### 废切削油（`waste_cutting_oil`）

仅对油基切削液路线记录离场废切削油，并声明含水率、污染、回收和处理去向。

- 选定流：废切削油 `80d926e3-0f76-4a19-9b1e-ffec9deb1216`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：转移出场址或进入单独建模现场处理过程的实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 合格制成用具净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_product_and_waste_mass_records`
- 来源：`us-epa-fabricated-metal-products-1995`

###### 金属表面处理清洗和漂洗废水（`metal_finishing_wastewater`）

记录水洗、漂洗、酸洗、钝化或涂覆产生并在外部处理前离开边界的合并液态废水；不得与污泥合并。

- 选定流：金属表面处理清洗和漂洗废水
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：跨至外部处理或排放的计量质量，或以同期实测密度换算体积
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 合格制成用具净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_wastewater_records`
- 来源：`us-epa-fabricated-metal-products-1995`; `eu-jrc-surface-treatment-metals-2006`

###### 含金属废水处理污泥（`metal_bearing_sludge`）

仅在废水于前景边界内处理时记录脱水污泥，并声明干物质比例、主要金属和去向。

- 选定流：含金属表面处理废水污泥
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：离开现场处理的湿污泥实测质量，并报告实测干物质比例
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 合格制成用具净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_product_and_waste_mass_records`
- 来源：`eu-jrc-surface-treatment-metals-2006`

###### 废抛光介质（`waste_polishing_media`）

记录离开过程的废抛光介质，包括废磨料或粉尘控制设备捕集的介质，并声明组成和金属污染。

- 选定流：废抛光介质 `cdb1838e-d3ec-41e1-87ee-627b9ce95e88`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：转移出场址的实测质量，扣除返回同一过程的可重用介质
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 合格制成用具净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_product_and_waste_mass_records`
- 来源：`unido-ethiopia-cutlery-project-1986`; `eu-jrc-surface-treatment-metals-2006`

##### 基本流

###### 直接化石二氧化碳（`fossil_co2`）

记录现场天然气燃烧直接排放的化石二氧化碳，不得加入上游电力或燃料供应排放。

- 选定流：二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：按燃料组成、碳含量、氧化基准和适用监测方法进行现场实测或计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格制成用具净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_direct_emission_records`
- 来源：`eu-jrc-surface-treatment-metals-2006`

###### 排入空气的未捕集抛光颗粒物（`particulate_air`）

记录扣除作为废物报告的捕集物料后，磨削或抛光排入空气的颗粒物；实测时声明粒径和金属组成。

- 选定流：颗粒物，粒径未特指 `0ce3dedb-caca-407b-a856-a90470eb8ec0`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：实测烟囱和无组织颗粒物，或依据实测运行数据和控制装置性能的现场计算值
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格制成用具净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_direct_emission_records`
- 来源：`eu-jrc-surface-treatment-metals-2006`

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivide_first` | 混合产品、合金牌号、表面状态或生产线 | 优先分项计量、批次记录、物料领用、机器时间、槽液负荷和直接废物计量，避免在不同产品或路线间分配。 | `eu-jrc-surface-treatment-metals-2006` |
| `allocation_common_operations` | 共用设备、槽液、公用工程和污染控制 | 按机器时间、处理质量、表面积、槽液负荷或计量能源等因果物理驱动因素分配，并核对场址总量。 | `eu-jrc-surface-treatment-metals-2006` |
| `allocation_scrap` | 离开前景的不锈钢废料 | 单独报告质量、牌号和去向。一致应用声明的回收模型；除非系统模型明确要求，不得在前景内抵扣原生钢。 | `us-epa-fabricated-metal-products-1995` |
| `allocation_economic_exception` | 无可辩护物理驱动因素的不可分共产品 | 仅在细分和物理分配不可行后使用经济分配，并披露价格、地域、平均期间、货币基准和敏感性。 | [] |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_material_mass_records` | `integrated_cutlery_manufacture` | 外购金属、切削液、磨料、化学品和包装 | 接收、领用、退回、配方、浓度和库存记录 | 物项；供应商；牌号/配方；浓度；期初；接收；领用；退回；期末；质量；批次；产品系列 | 校准秤具及核对库存记录；保留供应商与安全数据 | kg | 每次接收和领用；每月核对 | 连续 12 个代表性月份或完整短期批次 | 所有相关仓储和生产线 | 消耗量 = 期初 + 接收 - 退回 - 期末；共用量按因果驱动因素分配 | 校准；采购领用记录；供应商规范；库存核对；异常日志 |
| `cp_energy_records` | `integrated_cutlery_manufacture` | 电力和天然气 | 仪表、分表、账单、炉和运行小时记录 | 仪表；读数；kWh；m3；温压；燃料组成；设备；工时；批次；产品质量 | 优先校准分表；否则与场址表核对并披露分配 | kWh; MJ; m3 | 连续或每班；每月核对 | 与产品输出相同 | 所有相关生产与污染控制设备 | kWh 换算 MJ，并归一化可归属能源 | 校准；账单；核对；停机与分配记录 |
| `cp_water_records` | `integrated_cutlery_manufacture` | 工艺用水 | 水表、槽液补充、漂洗、排放和密度记录 | 仪表；体积；质量；密度；用点；批次；再循环；排放关联 | 计量直接工艺用水；排除生活用水；记录换算 | kg; m3 | 连续或每批；每月核对 | 与产品输出相同 | 清洗、漂洗、槽液补充和工艺冷却 | 汇总净投入并归一化至合格产出 | 校准；水平衡；密度证据；重复使用日志 |
| `cp_product_and_waste_mass_records` | `integrated_cutlery_manufacture` | 合格产品、钢废料、废切削油、污泥和废抛光介质 | 生产、废品、废物转移、皮重、干物质和去向记录 | 器具；件数；毛/净/皮重；合金；废物；干物质；去向；批次；日期 | 校准秤具及核对生产和废物发运记录 | kg | 每批和每次发运；每月核对 | 与投入相同 | 所有生产线和现场废物处理 | 扣除皮重，防止内部循环重复计算，并归一化净外流 | 校准；检验；转移联单；接收凭证；质量平衡 |
| `cp_wastewater_records` | `integrated_cutlery_manufacture` | 金属表面处理清洗和漂洗废水 | 废水表、批量排放、密度、组成和去向记录 | 来源槽；体积；密度；质量；pH；金属；边界；去向；日期 | 计量连续流和批量排放，以同期密度换算 | kg; m3 | 连续及每次排放；每月核对 | 与湿法操作相同 | 所有湿法处理接口 | 仅合并身份和边界相同的流，并归一化跨界质量 | 校准；化验；联单；水平衡 |
| `cp_direct_emission_records` | `integrated_cutlery_manufacture` | 直接化石 CO2 和抛光颗粒物 | 烟道测试、连续监测、燃料碳平衡、粉尘捕集和运行记录 | 污染物；来源；浓度/质量；烟气；燃料；碳；氧化；效率；捕尘；工时；方法 | 采用适用监测方法和实测运行数据，将捕尘与废物核对 | kg | 按监测计划和路线变更；每月汇总 | 与产品输出相同 | 所有燃烧和磨削/抛光排放点 | 仅按记录公式和现场数据计算，防止废物与排放重叠 | 方法；校准；化验；燃料证明；设备检查；工作簿 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | 所有清单行 | 归一化量 = 可归属批次数量 / 合格干燥制成用具净质量 | 行数量；`finished_cutlery` 净质量 | 每 1 kg 参考产品数量 | [] |
| `calc_material_consumption` | 切削液、白色熔融氧化铝、氢氧化钠和硝酸 | 消耗量 = 期初可用库存 + 接收 - 退回 - 期末可用库存；分别报告供货状态质量和浓度 | 库存和领用记录 | 各材料净消耗质量 | `us-epa-fabricated-metal-products-1995`; `eu-jrc-surface-treatment-metals-2006` |
| `calc_electricity_conversion` | 外购电力 | 电力 MJ = 计量 kWh × 3.6 | 计量 kWh | 外购电力 MJ | [] |
| `calc_metal_mass_balance` | 钢坯料、产品、钢废料、废物中金属和库存变化 | 核对金属投入与产品、废料、含金属废物、试件和在制品变化；调查无法解释的损失 | 按合金和批次的质量记录 | 质量平衡差异与完整性发现 | `us-epa-fabricated-metal-products-1995` |
| `calc_wastewater_mass` | 金属表面处理废水 | 无质量表时，废水质量 = 实测体积 × 同期实测密度 | 体积；密度 | 跨界废水 kg | `eu-jrc-surface-treatment-metals-2006` |
| `calc_direct_emissions` | 化石 CO2 和颗粒物 | 仅对实测现场投入采用记录的监测或计算方法；标明因子、效率和不确定性并排除上游排放 | 燃料或烟道数据；捕尘；运行数据 | 指定基本流的直接排放 kg | `eu-jrc-surface-treatment-metals-2006` |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_product_identity` | 参考产品 | 声明器具组合、每千克件数、合金、手柄、涂覆/钝化、表面状态、食品接触规范、包装、地域和期间；不同产品状态须细分。 | 产品规范；物料清单；检验包装记录 |
| `dq_measurement_traceability` | 所有实测投入和产出 | 保留仪表或秤具标识、校准、原始读数、单位换算、分配驱动因素和核对工作簿。 | 校准证书；原始日志；签署核对记录 |
| `dq_temporal_representativeness` | 前景数据集 | 覆盖连续 12 个代表性月份或完整短期批次，并披露停工、异常批次和季节性。 | 生产日历；覆盖报告 |
| `dq_mass_balance` | 金属和湿法系统 | 核对金属投入产出，并核对工艺用水、废水、蒸发或带出及库存变化；解释差异。 | 质量与水平衡；纠正措施 |
| `dq_route_completeness` | 条件行 | 仅有证据证明路线不存在时可标记不适用；零、低于检出限和未测量是不同状态。 | 流程图；配方；设备清单；化验 |
| `dq_upstream_matching` | 外购产品流 | 选择与牌号/配方、交付状态、地域、技术和基准条件匹配的上游数据集，并披露代理。 | 供应商声明；数据集元数据；代理记录 |
| `dq_uuid_gaps` | 未解决流身份 | 保留精确语义名称，不得替换为近似 UUID；发布前解决五项缺口或记录受治理的新流决策。 | UUID 审计；审查决定 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validate_reference_amount` | 参考流 | 确认恰为 1 kg 合格干燥制成用具净质量，排除可移除包装并声明每千克件数。 | [] |
| `validate_identity_qualifiers` | 产品身份 | 缺少器具组合、合金牌号、表面状态、手柄/涂覆路线、包装范围、地域或期间时拒绝数据包。 | [] |
| `validate_boundary` | 前景边界 | 确认现场成形、热处理、磨削/抛光、湿法精整、检验、包装、污染控制、废物和直接排放均纳入或明确不存在，且无重复计算。 | `unido-ethiopia-cutlery-project-1986`; `us-epa-fabricated-metal-products-1995`; `eu-jrc-surface-treatment-metals-2006` |
| `validate_atomic_rows` | 过程清单 | 确认每行是一项具有所述方向和类型的原子交换；额外金属、手柄材料、包装、化学品、燃料、废物或排放须另设行。 | [] |
| `validate_uuid_alignment` | 含 Tiangong UUID 的行 | 确认状态 100 的身份、英中基本名称、流类型、属性和单位；未解决行保持 UUID 为空并列入审查元数据。 | [] |
| `validate_balance` | 金属和湿法记录 | 要求解释质量与水平衡差异，防止内部循环废料、外运废物、捕尘、废水、污泥和排放重复计算。 | `us-epa-fabricated-metal-products-1995`; `eu-jrc-surface-treatment-metals-2006` |
| `validate_allocation` | 共用操作 | 确认先尝试细分，剩余分配采用有记录的因果驱动因素，且总量与场址实测值一致。 | [] |
| `validate_range_status` | 所有重要流 | 所有数量均为前景要求；无两个独立、原文已核实且边界兼容的来源时，不得采用外部经验范围或从单一案例推断。 | [] |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 从已完成并审查的前景数据包派生的 `secondary_dataset` 或 `background_dataset` |
| downstream_use | 需要该厨房或餐桌用具工厂门口负荷的产品级过程数据集和生命周期模型 |
| allowed_use | 用于声明的器具组合、合金、路线、表面状态、包装、地域和期间，或透明调整后使用 |
| excluded_use | 未经论证不得作为普通刀具、工具、炊具、非金属餐具、贵金属用具、客户自有投入制造服务、使用期清洗或生命末期的代理 |
| required_metadata | PCR id；CPC；器具组合和每千克件数；合金与再生含量基准；手柄/涂覆/钝化；路线与外包；包装；地域；期间；参考流；分配；上游数据集；未解决流状态 |
| required_quality_disclosure | 数据覆盖；仪表和秤具校准；质量与水平衡；分配驱动因素；处理边界；直接排放方法；废物去向；代理；不确定性；截断；偏离 |
| update_trigger | 产品组合、合金或供应商、热处理或精整技术、涂覆/钝化、包装、能源或供水、废水/粉尘控制、分配、地域或数据期间实质变化 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3-0-2025` | `dataset` | 联合国统计司，CPC 3.0 版结构，2025 年 6 月 30 日。https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv | CPC 42916 官方分类身份和英文名称 |
| `unido-ethiopia-cutlery-project-1986` | `official_guidance` | 联合国工业发展组织，*Ethiopia: Handicraft and Small Scale Industry Project, Second Phase, Terminal Report*，DP/ID/SER.B/540，1986。https://downloads.unido.org/ot/48/09/4809611/15001-20000_15053.pdf | 产品边界、材料、锻造/成形、修边、磨削、抛光、磨刃和手柄安装 |
| `us-epa-fabricated-metal-products-1995` | `official_guidance` | 美国环境保护署，*Profile of the Fabricated Metal Products Industry*，EPA/310-R-95-007，1995 年 9 月。https://nepis.epa.gov/Exe/ZyPURL.cgi?Dockey=10004B8N.TXT | 制造、剪切、成形、机械加工、表面预处理、投入、废料、废水、废物和排放 |
| `eu-jrc-surface-treatment-metals-2006` | `official_guidance` | 欧盟委员会联合研究中心，*Reference Document on Best Available Techniques for the Surface Treatment of Metals and Plastics*，2006 年 8 月。https://bureau-industrial-transformation.jrc.ec.europa.eu/sites/default/files/2019-11/stm_bref_0806.pdf | 表面处理边界、用水能源、清洗/钝化、废水、污泥、废槽液、粉尘和监测 |
