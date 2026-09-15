---
pcr_id: pcr.metal-products-machinery-and-equipment.electrical-machinery-and-apparatus.primary-cells-and-primary-batteries
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 原电池和原电池组

## 1. 范围与适用性

本 PCR 适用于通过化学能直接转化提供电能且设计上不可电气充电的新原电池和原电池组。产品可以是单体原电池，也可以是多个原电池相互连接或封装而成的完整原电池组，并以产品离开制造场址时的状态为准。前景边界涵盖进厂材料制备、部件成形、电极与电解液制备、电池装配与注液、封口、检验、电性能测试、标识和包装。

当数据集明确声明实际化学体系，并提供完整、路线特定的原子交换清单时，本类别可包括锌-二氧化锰、碱性二氧化锰-锌、一次锂、锌空气、氧化银及其他不可充电电化学体系。本 PCR 的代表路线为圆柱形碱性二氧化锰-锌电池。不得以该代表清单替代其他化学体系或外形规格的物料清单。

可充电蓄电池、可充电电池组、电容器、单独销售的电池零部件、废电池、回收、充电、使用和生命周期末端处理不在范围内。即使产品能够一次性使用，只要其设计或销售用途为充电使用，仍不属于本 PCR。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.electrical-machinery-and-apparatus.primary-cells-and-primary-batteries |
| classification_refs | CPC 3.0：46410，原电池和原电池组 |
| covered_products | 新的不可充电电化学电池和完整原电池组，包括圆柱形、棱柱形、扣式、币式、储备式和多电池产品 |
| excluded_products | 可充电蓄电池和电池组；电容器；单独销售的零部件和隔膜；废电池和电池废料；充电器；使用和生命周期末端服务 |
| representative_product | 制造场址门口、可销售的圆柱形碱性二氧化锰-锌电池 |
| production_route | 外购活性材料和结构材料；正负极制备；部件成形；装配；电解液注入；封口；检验；电性能测试；标识；包装 |
| market_state | 制造场址门口的新制、不可充电、已测试、已标识并已包装产品 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 由已声明的原电池或原电池组提供电化学转换产生的电能 |
| How much | 1 个具有已声明化学体系、外形规格和额定容量的合格原电池或原电池组 |
| How well | 在规定的放电负载、占空比、温度和终止电压下达到声明的额定电压和容量，并满足声明的泄漏与安全验收准则 |
| How long or cycle | 1 个不可充电放电寿命周期，并声明贮存寿命和贮存条件 |
| reference_flow_link | 制造场址门口 1 个具有已声明化学体系和规格的可销售原电池或原电池组 |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 Item(s) |
| 参考产品流 | 碱性锌锰电池 `b8cd9a54-b808-450f-8aa6-3ea2a037c416` |
| 参考流属性 | Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` |
| 参考单位组 | Units of items `5beb6eed-33a9-47b8-9ede-1dfe8f679159` |
| 参考单位 | Item(s) |
| 必需限定信息 | 原电池化学体系和电极对；IEC 或等效型号；单体电池或多电池电池组；外形规格和尺寸；标称及额定电压；额定容量和容量单位；放电负载与占空比；试验温度；终止电压；贮存寿命声明和贮存条件；泄漏与安全验收准则；包装配置；制造场址和地理区域；生产期 |

构建前景数据包时，`必需限定信息` 中列出的信息应在数据集元数据、过程说明、参考流备注、产品说明或等效数据包字段中明确声明。缺失必需限定信息的数据包视为参考流定义不完整。非碱性产品仅在使用路线特定的精确产品流替代代表产品流，并提供完整路线特定清单后，方可使用本 PCR。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_item_count` | 参考产品 | Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` | Item(s) | 仅计数合格、可销售的产品。每个多电池原电池组必须声明所含电池数量，不得将 1 个单体电池和 1 个多电池原电池组视为等价产品。 |
| `material_mass` | 材料和废物流 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 报告跨越前景边界的净交付质量。浓度、水分、镀层、合金和纯度应另行记录；不得在未说明的情况下把溶液质量转换为干物质质量。 |
| `electricity_energy` | 外购电力 | Net calorific value `93a60a56-a3c8-11da-a746-0800200b9a66` | MJ | 保留电表原始单位，并以有记录的换算系数转换为 MJ；声明电压等级、电网地理区域、采用的供应商电力组合和所含配电损耗。 |
| `performance_capacity` | 额定容量限定信息 | 声明的容量计量 | Ah、mAh 或 Wh | 容量仅在同时给出放电电流或负载、占空比、试验温度和终止电压时有效。未经明确换算或试验模型，不得比较试验条件不同的容量值。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 在原电池制造场址门口接收的活性材料、电解液成分、部件材料、包装、水和交付能源 |
| starting_condition_role | 原电池和原电池组制造从摇篮到场址门口的前景进入点 |
| product_classification_scope | 新的不可充电原电池和原电池组；不包括可充电蓄电池、单独销售的零部件和废电池 |
| recursive_input_rule | 当外购原电池或原电池组被装配成更大的原电池组时，将其作为同类产品投入记录一次并链接其上游场址门口数据集；不得在接收过程中递归重建其生产 |
| upstream_dataset_requirement | 每种外购材料、能源载体、供水、包装组件和同类产品投入均须链接地理和技术代表性适当的上游数据集，或明确披露数据缺口 |
| disclosure | 声明化学体系、外形规格、场址、生产期、外购与厂内制造部件边界、上游数据集选择、内部循环、不合格品处理、包装配置和所有排除项 |

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `sb_factory_gate` | 前景制造 | 纳入厂内材料成形、活性材料和电解液制备、电池装配与注液、封口、检验、电性能测试、标识和包装，直至可销售产品的制造场址门口。 | `us-epa-primary-battery-manufacturing-1975`; `energizer-alkaline-handbook-2018` |
| `sb_upstream_inputs` | 外购投入 | 为每种外购投入链接上游生产和交付数据集；前景数量采用实际场址净接收量或净消耗量。 |  |
| `sb_downstream_exclusion` | 下游阶段 | 排除制造场址门口之后的配送、使用、尝试充电和生命周期末端处理；只有在独立研究系统明确增加这些阶段时方可纳入。 | `eu-batteries-regulation-2023` |
| `sb_route_completeness` | 非代表化学体系或外形规格 | 用实际原子交换替换代表性碱性电池物料清单，并披露全部路线特定活性材料、电解液、壳体、端子、隔膜、密封件、标签、过程排放和废物。 | `eu-batteries-regulation-2023`; `energizer-alkaline-ais-2022` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `primary_battery_manufacturing` | 原电池部件制备、装配、测试和包装 | required | 制造场址门口原电池或原电池组数据集始终适用 | 从进厂投入到经测试和包装成品的前景生产 | 1 个合格、可销售的原电池或原电池组 |

### 过程：原电池部件制备、装配、测试和包装（`primary_battery_manufacturing`）

#### 输入

##### 产品流

###### 正极二氧化锰（`cathode_manganese_dioxide`）

记录代表性碱性电池路线中用于正极混合物的进厂二氧化锰。

- 选定流：二氧化锰 `a882e0bf-5e21-45e9-8f38-65df4d72bd7f`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg；单位组 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：计量的净消耗质量，不含退回的未开封材料和单独计量的内部循环料
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 个合格、可销售的电池产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_bom`
- 来源：`energizer-alkaline-handbook-2018`; `energizer-alkaline-ais-2022`

###### 锌粉负极材料（`anode_zinc_dust`）

记录代表性碱性电池路线中用于凝胶负极的进厂锌粉。

- 选定流：锌粉 `4d92b8d4-6633-4238-b0e2-9096db3e8882`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg；单位组 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：计量的锌粉净消耗质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 个合格、可销售的电池产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_bom`
- 来源：`energizer-alkaline-handbook-2018`; `energizer-alkaline-ais-2022`

###### 氢氧化钾电解液（`electrolyte_potassium_hydroxide`）

记录交付状态的氢氧化钾投入及其溶液浓度。外购溶液所含水分不得重复计入工艺用水。

- 选定流：氢氧化钾 `4e9c2ac1-efab-4b4c-aa54-79440221a6c6`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg；单位组 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：计量的交付状态净消耗质量，并保留氢氧化钾浓度和含水量限定信息
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 个合格、可销售的电池产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_bom`
- 来源：`energizer-alkaline-handbook-2018`; `energizer-alkaline-ais-2022`

###### 正极用导电石墨（`cathode_conductive_graphite`）

记录作为正极导电剂加入的电池级石墨粉。精确 Tiangong UUID 尚未解决；不得用石墨电极或石墨润滑剂替代。

- 选定流：电池级导电石墨粉
- 流属性/单位：Mass / kg
- 数量规则：计量的石墨粉净消耗质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 个合格、可销售的电池产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_bom`
- 来源：`energizer-alkaline-handbook-2018`; `energizer-alkaline-ais-2022`

###### 壳体和端子用镀镍钢板（`nickel_plated_steel_sheet`）

记录用于壳体、盖或端子的进厂镀镍钢板。精确 Tiangong UUID 尚未解决；不得用普通钢板或镍板替代。

- 选定流：镀镍钢板
- 流属性/单位：Mass / kg
- 数量规则：计量的镀镍钢板净消耗质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 个合格、可销售的电池产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_bom`
- 来源：`energizer-alkaline-handbook-2018`; `energizer-alkaline-ais-2022`

###### 铜锌合金集流体材料（`current_collector_brass`）

记录代表性圆柱形路线中用于负极集流体的铜锌合金。

- 选定流：铜锌合金 `e422cfbf-5444-43ab-a68a-22be82e2ad47`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg；单位组 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：计量的铜锌合金净消耗质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 个合格、可销售的电池产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_bom`
- 来源：`energizer-alkaline-handbook-2018`

###### 分隔纸（`separator_paper`）

记录代表性路线中的进厂分隔纸。如使用其他隔膜材料，应以该单一具体材料交换替换本行。

- 选定流：分隔纸 `68a4c082-ae92-4672-b9ce-c328fc41a225`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg；单位组 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：计量的分隔纸净消耗质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 个合格、可销售的电池产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_bom`
- 来源：`energizer-alkaline-handbook-2018`

###### 尼龙6密封材料（`seal_nylon_6`）

记录用于场内成形电池密封件的尼龙6树脂。如外购成品密封件，应以精确的成品密封件流和相应边界替换本行。

- 选定流：尼龙6 `efa66875-efd4-4d6e-bb93-fcc66de3b440`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg；单位组 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：计量的尼龙6树脂净消耗质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 个合格、可销售的电池产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_bom`
- 来源：`energizer-alkaline-handbook-2018`

###### 塑料绝缘标签薄膜（`label_plastic_film`）

记录作为外部绝缘标签基材消耗的塑料薄膜。如使用油墨或胶黏剂，须作为独立原子投入加入前景清单。

- 选定流：塑料薄膜 `8c3dd40c-a22b-48b5-bdec-7da4d3282bfa`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg；单位组 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：计量的塑料薄膜净消耗质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 个合格、可销售的电池产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_bom`
- 来源：`energizer-alkaline-handbook-2018`

###### 纸盒包装（`paper_box`）

仅当纸盒随参考产品跨越制造场址门口时记录。其他具体包装组件应逐项另列。

- 选定流：纸盒 `12d5d744-7725-4dbc-b102-43c80547f777`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg；单位组 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：随合格产品发运的纸盒净质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 个合格、可销售的电池产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_bom`
- 来源：`energizer-alkaline-ais-2022`

###### 工艺用水（`process_water`）

记录跨越前景边界、用于材料制备或清洗的供水；不含已计入外购电解液溶液的水分。

- 选定流：工艺用水 `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg；单位组 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：计量的工艺用水净投入，扣除单独计量的闭路回用水
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 个合格、可销售的电池产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_water_meter`
- 来源：`us-epa-primary-battery-manufacturing-1975`

###### 外购电力（`electricity`）

记录交付给材料制备、成形、装配、封口、测试、标识、包装及已分配辅助系统的电表计量电力。

- 选定流：电力 `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- 流属性/单位：Net calorific value `93a60a56-a3c8-11da-a746-0800200b9a66` / MJ；单位组 `93a60a57-a3c8-11da-a746-0800200c9a66`
- 数量规则：分配至声明生产期的电表计量净外购电力
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 个合格、可销售的电池产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_electricity_meter`
- 来源：

##### 废物流

不规定默认废物投入。若以外部接收废物作为再生材料，必须将其作为一个具体废物流投入另行增加。

##### 基本流

不规定默认基本流投入。如存在直接环境取用，必须按具体流、环境介质和地理区域逐项增加。

#### 输出

##### 产品流

###### 合格碱性锌锰电池（`alkaline_battery_output`）

仅记录通过声明的检验、电性能、泄漏、标识和包装准则的产品。

- 选定流：碱性锌锰电池 `b8cd9a54-b808-450f-8aa6-3ea2a037c416`
- 流属性/单位：Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` / Item(s)；单位组 `5beb6eed-33a9-47b8-9ede-1dfe8f679159`
- 数量规则：计数的合格、可销售产品数量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：1 个参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_output_and_test`
- 来源：`un-cpc-3-0-2025`; `energizer-alkaline-ais-2022`

##### 废物流

###### 不合格碱性原电池（`rejected_alkaline_battery`）

记录在检验或电性能测试中判为不合格并送往外部处理的完整碱性电池。精确 Tiangong 废物流 UUID 尚未解决。

- 选定流：不合格碱性原电池
- 流属性/单位：Number of items / Item(s)
- 数量规则：计数的、作为废物离开前景边界的不合格完整产品
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 个合格、可销售的电池产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_records`
- 来源：`us-epa-primary-battery-manufacturing-1975`

###### 废碱液（`waste_alkaline_liquor`）

记录单独收集并离场处理的含氢氧化钾电解液或清洗液。不得与其他废水流合并。

- 选定流：废碱液 `ce738ef0-a711-4650-a38b-34479efd7559`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg；单位组 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：计量的离场质量，并声明氢氧化钾浓度和处理路线
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 个合格、可销售的电池产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_records`
- 来源：

##### 基本流

本 PCR 不规定默认直接排放。每种实测或许可的直接排放均须作为物种和环境介质明确的单一基本流输出增加；不得报告笼统的排放集合行。

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_direct_assignment` | 多产品或多生产线 | 优先采用过程细分、专用计量、批次记录、设备时间和领料记录，将投入和废物直接归属于声明的原电池产品。 |  |
| `allocation_joint_outputs` | 不可分割的可销售共产品 | 不得使用无记录的默认因子。应声明共产品、因果关系、分配属性、价格或物理量、分配期和敏感性结果；未解决的联合生产须在发布前进行方法学审查。 |  |
| `allocation_recycling` | 内部循环和外部回收 | 内部循环料只计一次，仅从总领料量中扣除有记录的退料。不得在场址门口前景结果内计入避免原生生产或未来回收的抵扣；此类抵扣须作为独立披露情景报告。 |  |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_material_bom` | `primary_battery_manufacturing` | 活性材料、结构材料、密封、标签和包装投入 | 采购收货、批次领退料、物料清单和库存核对记录 | 材料身份；供应商；批次；化学体系或牌号；浓度或镀层；总领料；退料；期初与期末库存；合格产出数量 | 将 ERP 或仓库记录与生产批次核对，并用称量领料验证代表性批次 | kg 和 Item(s) | 每批次，按月汇总 | 连续生产至少 12 个连续月，批次生产覆盖完整生产期 | 声明制造场址内全部纳入作业 | 净消耗等于收货加期初库存减退料、期末库存和单独记录的调拨，再除以合格产出数量 | 供应商规格、经校准秤记录、库存核对和签署的物料清单版本 |
| `cp_water_meter` | `primary_battery_manufacturing` | 工艺用水投入 | 水表和批次补水记录 | 仪表编号；起止读数；补充水；回用水；电解液溶液所含水；停机；产出数量 | 读取经校准的场址或过程水表并核对批次加入量；排除外购溶液所含水 | kg 或 m3，并给出密度和温度 | 每日或每批，按月汇总 | 与产出相同期间 | 纳入的生产线和已分配辅助系统 | 跨边界净投入除以合格产出数量 | 仪表校准、密度换算、生产线覆盖及与账单核对 |
| `cp_electricity_meter` | `primary_battery_manufacturing` | 外购电力投入 | 结算电表、分表和运行小时记录 | 仪表编号；起止读数；生产线负荷；辅助系统分配；停机；电压等级；供应商和电网地理区域；产出数量 | 优先使用经校准分表；否则记录基于总表的工程分配 | kWh，换算为 MJ | 每小时或每日，按月汇总 | 与产出相同期间 | 纳入的生产线和已分配辅助系统 | 计量净电力减有记录的外送电量，再除以合格产出数量 | 仪表校准、账单核对、分表覆盖和分配工作表 |
| `cp_output_and_test` | `primary_battery_manufacturing` | 合格产出和性能限定信息 | 生产计数、检验记录和电性能试验记录 | 化学体系；型号；外形规格；电池数量；电压；试验负载；占空比；温度；终止电压；容量；泄漏结果；合格数量；包装配置 | 在最终测试后计数合格产品，并将抽样性能结果链接至批次和试验方法 | Item(s)、V、A 或 ohm、h、Ah 或 Wh、degree C | 每批次 | 与投入相同期间 | 声明场址内全部可销售产出 | 汇总合格数量；保留批次加权性能统计，不对不同试验条件进行无依据换算 | 计数器核验、试验设备校准、抽样方案和不合格记录 |
| `cp_waste_records` | `primary_battery_manufacturing` | 不合格电池和碱性液体废物 | 不合格记录、废物称量单、转移联单和处理接收凭证 | 废物身份；来源批次；件数或质量；电解液浓度；库存变化；去向；处理路线；日期 | 核对产生量、内部返工量、库存量和离场转移量 | Item(s) 或 kg | 每次转移，按月核对 | 与产出相同期间 | 范围内全部废物产生作业 | 废物产生量等于离场转移量加期末库存减期初库存和有记录的返工返回量 | 秤校准、签署的转移记录、处理接收凭证和库存核对 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_per_item_inventory` | 每项清单交换 | 将分配到生产期的交换数量除以同一期间合格、可销售参考产品的数量。 | 净交换数量；合格产出数量 | 每参考产品的交换量 |  |
| `calc_solution_reporting` | 氢氧化钾溶液和废碱液 | 报告交付状态溶液质量和浓度。仅可把溶液质量乘以实测质量分数，作为附加披露值计算干氢氧化钾质量；不得无说明地替换交付状态交换。 | 溶液质量；实测或供应商证明的质量分数 | 交付状态质量和可选干 KOH 质量 |  |
| `calc_electricity_conversion` | 电力 | 在净电表核对后，按 1 kWh = 3.6 MJ 将 kWh 转换为 MJ。 | 净 kWh | MJ 电力 |  |
| `calc_capacity` | 性能限定信息 | 恒流试验中，Ah 容量等于电流 A 乘以达到声明终止电压所经历的小时数；其他负载曲线须采用声明的试验方法并对电流积分。 | 电流或负载曲线；时间；终止电压；温度；占空比 | 声明的试验容量 | `energizer-alkaline-handbook-2018` |
| `calc_mass_reconciliation` | 材料和废物完整性 | 核对材料投入与产品质量、实测废物、库存变化、水分或挥发损失及直接排放。调查并披露残差，不得通过更改参考产品强行平衡。 | 材料投入；产品质量抽样；废物；库存变化；实测排放 | 质量平衡残差和解释 |  |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_product_identity` | 参考产品 | 化学体系、型号、外形规格、电池数量、性能试验条件、包装配置、场址、地理区域和生产期必须明确无歧义。 | 产品规格、标签、批准的物料清单、试验方法和批次记录 |
| `dq_temporal_coverage` | 前景清单 | 连续生产至少采用 12 个连续月，批次生产采用完整生产期；解释停机、启动、异常批次和排除项。 | 带日期的仪表、采购、产出和废物记录 |
| `dq_completeness` | 原子交换 | 核对物料清单、公用工程、产出、不合格品、其他材料损失、液体废物和直接排放。增加实际路线特定交换，不得汇总为笼统集合行。 | 签署的完整性检查表和质量核对 |
| `dq_geography_technology` | 上游链接 | 对结果有实质影响时，应匹配供应商地理区域、生产技术、材料牌号、溶液浓度、再生含量、电力电压与电网、供水及废物处理路线。 | 供应商声明、数据集元数据、发票和处理凭证 |
| `dq_measurement` | 仪表、秤和试验 | 使用处于校准有效期内的设备，并保留校准状态、分辨率、缺失数据处理和分配工作表。 | 校准证书、仪表台账和质量保证记录 |
| `dq_uuid_gaps` | UUID 为空的清单行 | 保留具体流名称和报告数量，但不得替代为代理 UUID。发布前须解决或明确保留身份缺口。 | 与 row_id 链接的 UUID 审查记录 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validation_identity` | 产品身份 | 如产品可充电、已废弃、为单独销售的零部件，或缺少化学体系、外形规格、电池数量、制造场址、生产期和包装配置声明，则校验失败。 | `eu-batteries-regulation-2023`; `un-cpc-3-0-2025` |
| `validation_reference_flow` | 参考流 | 确认恰好 1 个合格、可销售产品，并保留容量试验负载、占空比、温度、终止电压、额定电压和贮存寿命声明。 | `energizer-alkaline-handbook-2018`; `energizer-alkaline-ais-2022` |
| `validation_boundary` | 系统边界 | 确认纳入全部厂内制备、成形、装配、注液、封口、检验、测试、标识、包装和已分配辅助系统，并排除下游使用和生命周期末端。 | `us-epa-primary-battery-manufacturing-1975` |
| `validation_inventory` | 过程清单 | 确认实际物料清单、包装、能源、水、废物和直接排放交换均逐项表示为原子行；确认其他化学体系未照搬代表性碱性电池行。 | `energizer-alkaline-handbook-2018`; `energizer-alkaline-ais-2022` |
| `validation_units` | 数量和换算 | 确认产品件数、材料质量、溶液浓度、电力换算和归一化期间一致且可审计。 |  |
| `validation_reconciliation` | 完整性 | 要求物料清单、产出、废物、库存、能源和水的核对；披露质量平衡残差、分配方法、内部循环、缺失数据和排除项。 |  |
| `validation_uuid_resolution` | 数据库身份 | 在确认精确公开 state-100 流之前，将 `cathode_conductive_graphite`、`nickel_plated_steel_sheet` 和 `rejected_alkaline_battery` 报告为未解决；不得把代理 UUID 当作精确匹配。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 针对 1 个已声明原电池或原电池组产品的制造场址门口前景生产数据集 |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | 从摇篮到制造场址门口的产品建模；在产品和试验限定信息匹配时开展供应商比较；以及一致增加配送、使用和生命周期末端阶段的下游研究 |
| excluded_use | 可充电电池；无路线特定清单的化学体系替代；废电池处理；试验条件不匹配的性能比较；或未披露的全球市场平均 |
| required_metadata | PCR id 和版本；化学体系；IEC 或等效型号；外形规格和尺寸；电池数量；电压；容量试验条件；贮存寿命声明；包装配置；场址和地理区域；生产期；技术；外购与厂内制造部件边界；上游数据集；分配；内部循环；废物路线；未解决身份 |
| required_quality_disclosure | 时间和场址覆盖；仪表和秤覆盖；试验抽样；校准；供应商数据质量；分配；缺失数据处理；质量平衡残差；重要流范围证据缺口；UUID 缺口；排除项和敏感性情景 |
| update_trigger | 化学体系、活性材料供应路线、外形规格、电池数量、物料清单、电解液浓度、生产场址或生产线、电力供应、包装、试验规范、分配、废物路线或归一化清单发生实质变化 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3-0-2025` | 官方指南（`official_guidance`） | 联合国统计司，CPC Version 3.0 Structure，2025-06-30，https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv（检索日期：2026-09-04） | CPC 46410 官方分类身份 |
| `eu-batteries-regulation-2023` | 标准（`standard`） | Regulation (EU) 2023/1542 concerning batteries and waste batteries，Article 3，https://eur-lex.europa.eu/eli/reg/2023/1542/oj/eng（检索日期：2026-09-04） | 电池、电池单体、电池组和不可充电电池的定义及语义排除 |
| `energizer-alkaline-handbook-2018` | 手册（`handbook`） | Energizer Brands，Alkaline Manganese Dioxide Handbook and Application Manual，2018，https://data.energizer.com/pdfs/alkaline_appman.pdf（检索日期：2026-09-04） | 代表性碱性电池结构、部件身份、放电容量限定信息和试验解释 |
| `energizer-alkaline-ais-2022` | 手册（`handbook`） | Energizer，Alkaline Manganese Dioxide-Zinc Batteries Article Information Sheet，document 1022-Alk，2022-10，https://data.energizer.com/wp-content/uploads/2022/09/alkaline1022.pdf（检索日期：2026-09-04） | 不可充电产品状态、代表性材料身份、标签和安全外包装条件；不作为双来源经验清单范围使用 |
| `us-epa-primary-battery-manufacturing-1975` | 官方指南（`official_guidance`） | U.S. Environmental Protection Agency，Draft Development Document for Effluent Limitations Guidelines and Standards of Performance for the Machinery and Mechanical Products Manufacturing Point Source Category，Volume 2，https://nepis.epa.gov/Exe/ZyPURL.cgi?Dockey=2000USW8.TXT（检索日期：2026-09-04） | 原电池材料成形、注料、封口、测试、包装、工艺用水和不合格品过程分解；不规定历史配方 |
