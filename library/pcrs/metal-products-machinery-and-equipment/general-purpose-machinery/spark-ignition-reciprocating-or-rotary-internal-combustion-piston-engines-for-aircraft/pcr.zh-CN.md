---
pcr_id: pcr.metal-products-machinery-and-equipment.general-purpose-machinery.spark-ignition-reciprocating-or-rotary-internal-combustion-piston-engines-for-aircraft
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 航空器用火花点火往复式或旋转式内燃活塞发动机

## 1. 范围与适用性

本 PCR 适用于航空器用成品火花点火往复式或旋转式内燃活塞发动机的前景生产：从外购材料、部件、耗材、能源和水进入报告场址开始，到合格发动机在工厂门口放行为止。本 PCR 支持以质量为基准的产品流以及前景 `process` 或 `lifecyclemodel` 投影。

范围包括申报的场内零部件制造与机加工、装配，以及实际发生的化学或电解表面处理和发动机磨合或验收试验。外购铸件、锻件、成品零件、电子件、点火设备等，应在具体数据包中作为逐项上游产品投入；即使本精简 PCR 未为每个型号特定零件规定通用 UUID，也不得将其合并为笼统投入。

范围不包括单独销售的备件、航空器、螺旋桨、涡轮和反作用式发动机、压燃式发动机、非航空发动机、维护与大修、使用阶段燃烧、基础设施、研发，以及不可归属于报告期的认证试验。包装、运输、有机涂装、热处理或其他路线特定作业，仅在工厂门口系统实际实施或采购时纳入，并须增加相应的单一原子交换。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.general-purpose-machinery.spark-ignition-reciprocating-or-rotary-internal-combustion-piston-engines-for-aircraft |
| classification_refs | CPC 3.0：43131，精确分类语境 |
| covered_products | 用于航空器推进或航空器装机动力的成品火花点火往复式或旋转式内燃活塞发动机 |
| excluded_products | 发动机零件；压燃式或非航空发动机；涡轮和反作用式发动机；航空器与螺旋桨；未经单独审查扩展界定的修理、大修或再制造发动机 |
| representative_product | 一个已申报型号、完成验收且处于规定净干重工厂门口配置的航空火花点火活塞发动机 |
| production_route | 按型号接收材料与零件，适用时进行场内制造和机加工，随后装配，并按条件进行化学/电解处理和磨合或验收试验 |
| market_state | 工厂门口已验收、未包装的成品发动机；申报所含附件、防护状态及净干重排除项 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 一台用于航空器的成品火花点火往复式或旋转式内燃活塞发动机 |
| How much | 工厂门口验收发动机净干重 1 kg |
| How well | 符合申报的发动机型号或型号设计、放行要求、配置、额定功率，以及燃料、润滑油、冷却和点火规范 |
| How long or cycle | 一个完整制造和工厂放行周期；使用、维护、大修及服役寿命不属于本工厂门口功能单位 |
| reference_flow_link | 参考流正好是申报验收配置发动机的 1 kg；所有清单量均按该质量归一化 |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 kg |
| 参考产品流 | 飞机用火花往复式或旋转式活塞内燃机 `c2f3c29e-d5cd-4267-a518-74b0131a7914` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 制造商与型号；往复式或旋转式结构；气缸排列或转子配置；点火与燃油系统型式；冷却方式；排量；增压状态；额定功率及条件；批准的燃料和润滑油规范；所含附件；净干重方法与排除项；认证或放行依据；生产路线；场址与地理范围；报告期；工厂门口状态 |

所有`必需限定信息`必须在数据集元数据、过程说明、参考流备注、产品说明或等效字段中申报；缺失时参考流定义不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_net_dry_mass` | 参考产品 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 按申报净干重配置称量验收发动机。计入随发动机供应的整体附件；排除试验燃料、可拆运输工装及按净干重约定排除的液体，并逐项说明。 |
| `inventory_mass_normalization` | 质量清单行 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg/kg 参考产品 | 报告期交换量除以同一分配池内合格发动机净干重；不得按包装后质量归一化。 |
| `energy_conversion` | 电力 | Net calorific value `93a60a56-a3c8-11da-a746-0800200b9a66` | MJ | 保留计量能源量，并按 1 kWh = 3.6 MJ 换算。不得因天工电力身份记录关联了 Mass 属性 UUID 而将其当作质量。 |
| `gas_volume_conditions` | 气态天然气 | Volume `93a60a56-a3c8-22da-a746-0800200c9a66` | m3 | 按供应商或仪表的参考温度与压力报告气体体积，并披露这些条件。 |
| `wastewater_mass_conversion` | 废水 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 优先采用直接质量或流量计记录；体积换算仅可使用实测密度，或对被测流明确记录类水密度假设。 |

## 5. 系统边界

前景边界始于外购材料、部件、耗材、能源和水跨入报告场址，止于申报净干重状态的合格成品发动机放行。上游生产须用供应商特定或适当的次级数据集链接表示。

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 材料和部件到达报告场址时的外购状态，包括合金牌号、供货形态、采用时的再生含量声明、完成程度、供应商地域，以及已包含的铸造、锻造、热处理、涂装或其他上游作业 |
| starting_condition_role | 防止供应商数据集与场内成形、机加工、处理、装配和试验之间重复计算或遗漏 |
| product_classification_scope | CPC 43131 航空火花点火往复式或旋转式活塞发动机成品；分类仅提供语境，不能替代语义边界 |
| recursive_input_rule | 若同类别整机作为外部投入进入集成、试验或其他申报作业，应连同其上游数据集记录；内部在制品仅作为过程连接，不作为第二参考产品 |
| upstream_dataset_requirement | 每项外购材料、零件、耗材、燃料、电力、水和外包处理均须使用与接收状态相符且具代表性的上游数据集 |
| disclosure | 申报场址与作业、外包作业、截断、分配池、处理与试验路线、发动机配置、净干重约定、期间、地域及边界偏差 |

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `sb_factory_gate` | 前景系统 | 纳入从申报起点到放行之间可归属的场内搬运、零部件制造、机加工、清洗、装配、表面处理、试验、返工、直接排放和废物产生。 | `ec-pef-method-2021` |
| `sb_supplier_boundary` | 外购投入 | 每项外购投入或外包作业须链接与接收状态相符的上游数据集；不得在场内重复计算已包含的作业。 | `ec-pef-method-2021` |
| `sb_conditional_routes` | 条件过程 | 仅当化学/电解表面处理和发动机试验实际发生于边界内或可归属时纳入；每项实际化学品、燃料、废物和排放均须作为原子交换记录。 | `ec-jrc-stm-bref-2006`, `faa-ac-33-2b` |
| `sb_completeness` | 所有前景交换 | 不得仅因本精简模式没有预列清单行而截断；实际发生的型号或路线特定材料交换和直接基本流排放须增加原子行。 | `ec-pef-method-2021` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `engine_manufacturing_and_assembly` | 发动机零部件制造、机加工、装配与放行 | `required` | 始终纳入；区分场内作业与供应商数据已包含的作业 | 前景生产与参考产品放行 | 每 1 kg 放行净干重 |
| `chemical_surface_treatment` | 化学或电解表面处理 | `conditional` | 化学/电解清洗、转化膜、阳极氧化、电镀或相关水基处理可归属时纳入 | 前景处理 | 每 1 kg 放行净干重 |
| `engine_test` | 发动机磨合或验收试验 | `conditional` | 有燃料或电驱动的磨合、功能、爆震、标定或验收试验可归属时纳入 | 前景质量放行 | 每 1 kg 放行净干重 |

### 过程：发动机零部件制造、机加工、装配与放行（`engine_manufacturing_and_assembly`）

#### 输入

##### 产品流

###### 铝合金投入（`mfg_aluminium_alloy`）

仅当未锻轧铝合金以该状态跨越场址边界时记录；其他供货形态须使用状态匹配的流。

- 选定流：铝合金 `28b47d6d-68b4-4810-b764-01a1fc1352dc`
- 流属性/单位：Mass / kg
- 数量规则：投入合格发动机生产的实测质量扣除退库量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 放行净干重
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_bom_materials`
- 来源：`ec-pef-method-2021`

###### 合金钢条和杆投入（`mfg_alloy_steel`）

记录申报牌号的热加工合金钢条或杆；其他形态须另设清单行。

- 选定流：除锻造、热轧、热拉拔或挤压外未经进一步加工的合金钢条和杆（高速钢或硅锰钢条或杆除外） `c11c7e9a-d020-4b89-a50c-4a82c0f76943`
- 流属性/单位：Mass / kg
- 数量规则：投入合格发动机生产的实测质量扣除退库量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 放行净干重
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_bom_materials`
- 来源：`ec-pef-method-2021`

###### 制造与装配购入电力（`mfg_electricity`）

记录分配给制造、机加工、装配、检验和放行的计量电能。

- 选定流：电力 `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- 流属性/单位：Net calorific value / MJ
- 数量规则：经共享仪表分配后的计量电能
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 放行净干重
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_manufacturing_utilities`
- 来源：

###### 机加工消耗的切削液（`mfg_cutting_fluid`）

记录补加切削液，并披露配方、浓度、加水、回收和退回。

- 选定流：切削液 `576d250f-4f36-4385-939d-0f03b8f95a10`
- 流属性/单位：Mass / kg
- 数量规则：发放补加质量扣除未用退回量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 放行净干重
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_manufacturing_consumables`
- 来源：

###### 制造与装配消耗的润滑油（`mfg_lubricating_oil`）

记录产品专用作业消耗的润滑油；排除试验过程重复报告的量。

- 选定流：润滑油 `aec6f1a5-7b09-4704-870d-434d3ada0edd`
- 流属性/单位：Mass / kg
- 数量规则：发放质量扣除已记录的回收或退回质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 放行净干重
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_manufacturing_consumables`
- 来源：`faa-ac-33-2b`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 验收航空发动机（`reference_aircraft_engine`）

仅记录满足申报放行状态和净干重约定的发动机。

- 选定流：飞机用火花往复式或旋转式活塞内燃机 `c2f3c29e-d5cd-4267-a518-74b0131a7914`
- 流属性/单位：Mass / kg
- 数量规则：依据合格发动机实测净干重归一化后为 1 kg
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：正好 1 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：方法公式（`method_formula`）
- 来源：`ec-pef-method-2021`, `faa-ac-33-2b`

##### 废物流

###### 制造产生的铝废料（`mfg_aluminium_scrap`）

铝废料须与黑色金属和混合废料分开，并披露污染和去向。

- 选定流：铝废料 `96c5f842-ea53-419b-b1cd-c02c479efb45`
- 流属性/单位：Mass / kg
- 数量规则：转出过程的铝废料实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 放行净干重
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_manufacturing_wastes`
- 来源：

###### 制造产生的钢废料（`mfg_steel_scrap`）

钢废料须与铝及混合废料分开，并披露合金族、污染和去向。

- 选定流：钢废料 `db39c2c0-61a0-4dde-8d68-db5777fe25a8`
- 流属性/单位：Mass / kg
- 数量规则：转出过程的钢废料实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 放行净干重
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_manufacturing_wastes`
- 来源：

###### 废切削油（`mfg_waste_cutting_oil`）

记录送往回收或处理的废切削油；不得与其他废油或冷却液合并。

- 选定流：废切削油 `80d926e3-0f76-4a19-9b1e-ffec9deb1216`
- 流属性/单位：Mass / kg
- 数量规则：转出的废切削油实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 放行净干重
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_manufacturing_wastes`
- 来源：

##### 基本流

### 过程：化学或电解表面处理（`chemical_surface_treatment`）

#### 输入

##### 产品流

###### 表面处理购入电力（`surface_electricity`）

记录处理槽、整流器、泵、通风、漂洗和干燥所用电能。

- 选定流：电力 `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- 流属性/单位：Net calorific value / MJ
- 数量规则：可归属于纳入处理的计量电能
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 放行净干重
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_surface_treatment_records`
- 来源：`ec-jrc-stm-bref-2006`

###### 表面处理工艺用水（`surface_process_water`）

记录处理、清洗和漂洗用水；跨越边界的冷却水须另设清单行。

- 选定流：工艺用水 `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- 流属性/单位：Mass / kg
- 数量规则：工艺用水实测投入
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 放行净干重
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_surface_treatment_records`
- 来源：`ec-jrc-stm-bref-2006`

###### 碱性处理用氢氧化钠（`surface_sodium_hydroxide`）

仅在碱性清洗、蚀刻或处理使用时记录，并申报溶液浓度和质量基准。

- 选定流：氢氧化钠 `e0abcced-0611-4c24-9290-5a2c5a0c4169`
- 流属性/单位：Mass / kg
- 数量规则：按申报浓度基准实测发放质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 放行净干重
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_surface_treatment_records`
- 来源：`ec-jrc-stm-bref-2006`

###### 槽液加热或干燥用气态天然气（`surface_natural_gas`）

仅记录纳入的槽液加热或干燥所发生的前景直接燃烧。

- 选定流：气态天然气 `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位：Volume / m3
- 数量规则：按申报参考条件计量的体积
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 放行净干重
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_surface_treatment_records`
- 来源：

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

###### 表面处理废水（`surface_wastewater`）

记录外送处理前离开处理或漂洗工序的废水，并申报组成、处理状态、去向和密度换算。

- 选定流：废水 `d2d44ce1-c0f4-461d-9413-f4b33e0d200f`
- 流属性/单位：Mass / kg
- 数量规则：转出的实测质量或经换算的计量体积
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 放行净干重
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_surface_treatment_records`
- 来源：`ec-jrc-stm-bref-2006`

##### 基本流

###### 天然气直接燃烧产生的化石二氧化碳（`surface_carbon_dioxide_fossil`）

仅记录前景直接化石二氧化碳，不含上游供应排放。

- 选定流：二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 流属性/单位：Mass / kg
- 数量规则：烟气实测排放或依据计量燃料的碳平衡计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 放行净干重
- 基准类型：燃料清单（`fuel_inventory`）
- 证据类型：依据采集计算（`calculated_from_collection`）
- 采集协议：`cp_surface_treatment_records`
- 来源：

### 过程：发动机磨合或验收试验（`engine_test`）

#### 输入

##### 产品流

###### 发动机试验消耗的航空汽油（`test_aviation_gasoline`）

仅在试验使用航空汽油时记录，并申报牌号、含铅状态、试验程序和燃料退回。

- 选定流：航空汽油 `60324705-7a75-4213-82e6-30e7b9a24bc9`
- 流属性/单位：Mass / kg
- 数量规则：试验供给燃料实测质量扣除未用退回量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 放行净干重
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_engine_test_records`
- 来源：`faa-ac-33-2b`

###### 发动机试验购入电力（`test_electricity`）

记录试验台控制、仪器、通风、泵和测功负载用电。

- 选定流：电力 `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- 流属性/单位：Net calorific value / MJ
- 数量规则：经记录分配后的试验台计量电能
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 放行净干重
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_engine_test_records`
- 来源：

###### 发动机试验消耗的润滑油（`test_lubricating_oil`）

记录试验消耗或移出平衡的润滑油；若参考状态包含留存油，则不得将其扣除后重复计算。

- 选定流：润滑油 `aec6f1a5-7b09-4704-870d-434d3ada0edd`
- 流属性/单位：Mass / kg
- 数量规则：加注油量扣除回收油和留存在申报产品状态中的油量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 放行净干重
- 基准类型：参考流（`reference_flow`）
- 证据类型：依据采集计算（`calculated_from_collection`）
- 采集协议：`cp_engine_test_records`
- 来源：`faa-ac-33-2b`

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

##### 基本流

###### 发动机试验产生的化石二氧化碳（`test_carbon_dioxide_fossil`）

记录试验台直接化石二氧化碳，不含燃料上游生产排放。

- 选定流：二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 流属性/单位：Mass / kg
- 数量规则：排气实测质量或依据消耗化石碳的碳平衡计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 放行净干重
- 基准类型：燃料清单（`fuel_inventory`）
- 证据类型：依据采集计算（`calculated_from_collection`）
- 采集协议：`cp_engine_test_records`
- 来源：

###### 发动机试验产生的化石一氧化碳（`test_carbon_monoxide_fossil`）

记录纳入试验程序期间直接排放到空气的化石一氧化碳。

- 选定流：一氧化碳（化石源） `08a91e70-3ddc-11dd-924e-0050c2490048`
- 流属性/单位：Mass / kg
- 数量规则：实测浓度结合排气流量和试验时间积分
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 放行净干重
- 基准类型：燃料清单（`fuel_inventory`）
- 证据类型：依据采集计算（`calculated_from_collection`）
- 采集协议：`cp_engine_test_records`
- 来源：

###### 发动机试验产生的氮氧化物（`test_nitrogen_oxides_air`）

按申报报告约定记录实测氮氧化物。尚未确认精确天工 UUID，须明确物种约定和折算基准。

- 选定流：排放至空气的氮氧化物
- 流属性/单位：Mass / kg
- 数量规则：实测浓度结合排气流量和试验时间积分
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 放行净干重
- 基准类型：燃料清单（`fuel_inventory`）
- 证据类型：依据采集计算（`calculated_from_collection`）
- 采集协议：`cp_engine_test_records`
- 来源：

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `alloc_subdivision` | 共享设施与过程 | 首先按型号、生产线、批次或时间细分仪表、领料、试验和废物记录，只保留可归属交换。 | `ec-pef-method-2021` |
| `alloc_physical` | 无法细分的共享交换 | 无法细分时，采用机时、试验台时数、处理面积或净干重等有因果关系的物理驱动量，并说明其代表性。 | `ec-pef-method-2021` |
| `alloc_nonphysical` | 剩余多功能性 | 仅在证明无法细分且不存在因果物理关系后使用经济或其他非物理分配；披露期间、基准、敏感性和受影响行。 | `ec-pef-method-2021` |
| `alloc_scrap` | 铝和钢废料 | 在工厂门口将产生的废料作为废物输出；不得从前景清单扣除原生材料避免量，回收分配应置于单独申报的生命周期模型。 | `ec-pef-method-2021` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_bom_materials` | `engine_manufacturing_and_assembly` | 铝合金与合金钢投入 | ERP 领退料、收货和物料清单 | UUID；规范；状态；供应商；批次；领用/退回质量；型号；产出质量 | 将净领用量与型号生产订单核对 | kg | 每笔；按月汇总 | 同一期间，通常至少连续 12 个月 | 所有纳入场址 | 按原子材料汇总净领用量并除以合格产出质量 | 批准物料清单；证书；秤和 ERP 核对 |
| `cp_manufacturing_utilities` | `engine_manufacturing_and_assembly` | 电力 | 专用/共享仪表 | 仪表；读数；倍率；分配驱动量；停机；产出质量 | 专用计量或经核对的因果分配 | kWh 与 MJ | 连续/班次；按月 | 完整报告期 | 纳入作业 | 扣除非生产负荷后分配、换算、归一化 | 校准；账单；分配表；工时 |
| `cp_manufacturing_consumables` | `engine_manufacturing_and_assembly` | 切削液与润滑油 | 采购、领用、补加、回收、退回 | UUID；配方；浓度；领用/退回/回收质量；去向；型号 | 对每项具名耗材做质量平衡 | kg | 每笔；按月 | 完整报告期 | 纳入机加工与装配 | 领用减退回和回收后归一化 | 库存核对；票据；规范；秤 |
| `cp_manufacturing_wastes` | `engine_manufacturing_and_assembly` | 铝废料、钢废料、废切削油 | 转移联单和容器称重 | UUID；材料；污染；毛重/皮重；去向；路线；订单 | 分流称量每次转移并核对库存 | kg | 每次；按月 | 含期初期末库存的完整期间 | 纳入作业 | 转出加期末减期初库存后归一化 | 联单；秤校准；库存；接收单 |
| `cp_surface_treatment_records` | `chemical_surface_treatment` | 能源、水、氢氧化钠、废水、CO2 | 仪表、槽液表、领料、废水和燃料记录 | 路线；读数；浓度；质量；批次；处理基准；废水；密度；气体条件；碳因子 | 逐项采集原子交换并核对平衡 | kg、m3、kWh、MJ | 批次/连续；按月 | 每个纳入处理批次 | 每条纳入处理线 | 按处理面积、批次时间或质量因果分配后归一化 | 校准；槽液记录；分析；账单；转移记录 |
| `cp_engine_test_records` | `engine_test` | 燃料、电力、润滑油、排气 | 燃油平衡、仪表、程序、排气测量、燃料分析 | 序列号/型号；试验；时间/负荷/转速；燃料；进/退质量；电力；油；排气流量；CO/NOx/CO2；碳 | 每次试验使用校准仪器或批准碳平衡采集 | kg、kWh、MJ、m3、浓度 | 每次试验 | 所有纳入试验 | 纳入试验台与发动机 | 按型号汇总、扣除退回量、归一化 | 试验报告；校准；燃料证书；放行；计算表 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | 所有清单行 | 归一化交换量 = 报告期已分配交换量 / 同一分配池合格发动机净干重 | 已分配交换量；产出质量 | 每 1 kg 参考产品交换量 | `ec-pef-method-2021` |
| `calc_electricity_mj` | 电力 | MJ = 计量 kWh × 3.6 | kWh | MJ |  |
| `calc_net_consumable` | 切削液与润滑油 | 净消耗 = 领用 − 未用退回 − 跨回同一边界的回收量 | 领用、退回、回收 | kg 消耗量 |  |
| `calc_waste_stock` | 废物 | 产生量 = 转出 + 期末库存 − 期初库存；不同身份分开 | 转移与库存 | kg 废物 |  |
| `calc_direct_co2` | 化石 CO2 | 使用实测质量或化石碳平衡；记录碳分数、氧化和分配给 CO 的碳 | 燃料及含碳排放 | kg 化石 CO2 |  |
| `calc_exhaust_species` | 试验 CO 与 NOx | 对兼容的浓度和排气流量按各试验段积分；记录参考条件、湿基/干基、分子换算及 NOx 约定 | 浓度、流量、时间、条件 | kg 物种 |  |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_product_identity` | 参考产品 | 保留型号、结构、额定值、燃料、润滑油、冷却、点火、配置、附件、干重约定、放行状态、场址和期间。 | 型号定义；放行与称重记录；`faa-ac-33-2b` |
| `dq_completeness` | 清单 | 核对物料清单、能源、耗材、废物和直接排放；实际存在但未预列的交换须增加原子行。 | 签署的核对和排除说明 |
| `dq_temporal` | 前景数据 | 使用同一期间，通常至少连续 12 个月；较短批次须说明并对齐库存。 | 日期记录和生产汇总 |
| `dq_technology` | 过程 | 识别场内/外包作业、处理技术、试验台配置和分配驱动量。 | 过程图；供应商与设备记录 |
| `dq_geography` | 投入与作业 | 申报场址和供应商地域，上游数据集须匹配接收状态与地区。 | 声明和数据集元数据 |
| `dq_measurement` | 仪表、秤、分析仪 | 保留校准、条件、检出限、缺口、替换和精度证据。 | 校准和 QA 记录 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `vr_identity` | 产品与参考流 | 产品不是航空器用成品火花点火往复式或旋转式活塞发动机，或缺少型号、额定值、配置、放行和净干重限定信息时失败。 | `un-cpc-3-0-structure-2025`, `faa-ac-33-2b` |
| `vr_reference_amount` | 参考产品 | 归一化后参考产出必须正好为 1 kg，且所有分母使用同一合格净干重产出质量。 | `ec-pef-method-2021` |
| `vr_atomic_inventory` | 清单行 | 拒绝复数集合、合并能源/燃料、混合废物、笼统排放组或流/属性/单位不匹配。 |  |
| `vr_conditional_processes` | 表面处理与试验 | 要求适用/不适用证据；适用时须完整记录实际路线的原子化学品、能源、废物、燃料和直接排放；零值须有记录支持。 | `ec-jrc-stm-bref-2006`, `faa-ac-33-2b` |
| `vr_uuid_and_localization` | 带 UUID 的流 | 要求 state-100 身份、兼容属性/单位及天工正式中文 baseName；`test_nitrogen_oxides_air` 在精确直读获批前保持未解决。 |  |
| `vr_mass_and_stock_reconciliation` | 材料、产品、废物 | 要求领退料、产品质量、分流废料、废切削油库存变动和残差说明。 | `ec-pef-method-2021` |
| `vr_allocation` | 共享过程 | 要求先细分，再采用因果物理分配；无不可行性和敏感性证据的非物理分配应报错。 | `ec-pef-method-2021` |
| `vr_external_ranges` | 数量范围 | 拒绝缺少两个独立、边界兼容且经原文核验来源的外推范围。本 PCR 不提供外部范围，仍须采集前景记录。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | `secondary_dataset`；仅经代表性和完整性审查后可作 `background_dataset` |
| downstream_use | 工厂门口过程数据、供应商产品足迹，以及另行增加安装、使用、维护、大修和报废阶段的生命周期模型 |
| allowed_use | 发动机型号、路线、场址/地域、期间、净干重配置和分配语境匹配 |
| excluded_use | 未增加下游阶段的航空器比较；使用阶段燃料/排放；维护/大修；其他点火型式或用途；未经审查的跨型号替代 |
| required_metadata | PCR id；产品 UUID；制造商/型号；结构/配置；额定值；燃料/润滑油/冷却/点火；附件；净干重约定；场址；期间；路线；上游数据集；分配；未解决 UUID；截断/偏差 |
| required_quality_disclosure | 初级数据占比；仪表/秤/分析仪覆盖；校准/不确定度；物料和废物核对；试验覆盖；时间/地域/技术代表性；缺口/替代；审查状态 |
| update_trigger | 型号、配置、材料、供应状态、场址、路线、处理/试验技术、燃料/润滑油、分配、期间、重大缺口修正或未解决 UUID 确认发生变化 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3-0-structure-2025` | `official_guidance` | 联合国统计司，CPC 3.0 结构，2025-06-30，https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv，检索于 2026-09-05 | CPC 43131 身份及其与零件和其他发动机的区分 |
| `faa-ac-33-2b` | `official_guidance` | 美国联邦航空管理局，AC 33-2B《Aircraft Engine Type Certification Handbook》，1993-06-30，https://www.faa.gov/documentlibrary/media/advisory_circular/ac%2033-2b.pdf，检索于 2026-09-05 | 往复式发动机型号描述、额定值、燃料、润滑油、冷却液、点火、尺寸、干重及试验限定信息 |
| `ec-pef-method-2021` | `official_guidance` | 欧盟委员会，《Product Environmental Footprint Method》，Recommendation (EU) 2021/2279 附件 1–2，https://environment.ec.europa.eu/system/files/2021-12/Annexes%201%20to%202.pdf，检索于 2026-09-05 | 功能单位/参考流、边界、企业特定物料清单与制造清单、质量和分配层级 |
| `ec-jrc-stm-bref-2006` | `official_guidance` | 欧盟委员会联合研究中心，《Surface Treatment of Metals and Plastics BREF》，2006 年 8 月通过，https://bureau-industrial-transformation.jrc.ec.europa.eu/reference/surface-treatment-metals-and-plastics，检索于 2026-09-05 | 条件性化学/电解处理边界、水基作业及相关活动 |
