---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.products-of-wood-cork-straw-and-plaiting-materials.hardboard
language: zh-CN
status: candidate
content_maturity: authored_methodology
translation_status: aligned
sync_with: pcr.en-US.md
---

# 湿法木质硬板

## 1. 范围与适用性

本方法适用于经水力铺装成形、湿态热压、出厂调湿及后加工的木质硬板。仅热处理、油热处理及无压后处理是不同的声明状态，不是可互换产品。胶黏剂添加按场址确定：EPA描述含酚醛树脂的湿法生产；USDA描述部分不加胶黏剂的湿法板。二者均不能确定通用配方。[epa-hardboard-2002; usda-wood-handbook-2021]

排除干法气流铺装的MDF/HDF、湿成形后先干燥再干压的湿干法硬板、低密度隔热纤维板、非木质纤维板及涂覆或层压成品系统。密度标签、HDF同义词或分类标签不能确立工艺。密度、含水率与厚度是实测限定信息，不复制法定阈值。可选油种须有各自配方记录。不将文献工艺设定或排放因子规定为现代场址参数。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.products-of-wood-cork-straw-and-plaiting-materials.hardboard |
| classification_refs | CPC 3.0 31442; narrower |
| covered_products | 湿铺装、湿态热压木质硬板，声明具体胶黏剂配方和处理状态 |
| excluded_products | 干法MDF/HDF；湿干法硬板；其他低密度纤维板；非木质原料；涂覆或层压构件 |
| representative_product | 未涂覆、修边调湿的湿态压制木质硬板，板厂交付 |
| production_route | 外购木片 → 清洗/蒸煮/磨浆 → 配浆 → 水力成形及白水/纤维回收 → 湿态热压 → 条件性热/油热处理 → 调湿 → 后加工及包装 |
| market_state | 按记录出厂含水状态验收的板净质量；包装单列清单 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 供应声明的湿法木质硬板；不隐含使用功能等效 |
| How much | 1 千克板验收净质量 |
| How well | 声明密度、厚度、含水基准、表面等级、胶黏剂配方和热/油处理状态；场址验收记录 |
| How long or cycle | 一次板厂交付；此供应参考不含使用寿命 |
| reference_flow_link | finished_board |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 硬质纤维板 `2b213638-a6da-4337-8972-72e4afe18969` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 木材树种/原料组合；湿成形及湿压证据；纤维回收回路；胶黏剂/石蜡配方及载水；实测出厂密度及调湿条件；干基或湿基含水；厚度；表面状态；仅热处理/油热处理/未处理状态及油种；排除包装的净质量；场址/时期；公用工程交付及处理边界 |

此广义参考身份未限定相反的干法路线。其HDF同义词不授权MDF替代；PCR限定信息确定湿法边界。流UUID表示实物产品，不表示已获批准的背景数据集。缺限定信息或供方基准时，具体数据集不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| reference_mass | 参考产品 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 参考为实测出厂含水状态下1 千克板验收净质量。用cp_product采集时期总量Q，排除包装、退货及不合格品。全部清单按每 1 kg 参考流。 |
| state_measurement | finished_board | Mass; Volume | kg; m3 | 在记录的调湿条件下测样品净质量和长宽厚；密度为同一含水状态下质量/体积。采用有记录的恒重法测绝干质量，并验证油/树脂挥发偏差。声明干基含水率u或湿基分数w；不得混用。 |
| flow_basis | wood_chip; gas; steam | Volume; Mass | m3; kg | 木片实积/堆积体积及气体参考温压/组成/Z须与供方参考量一致。蒸汽质量与净交付焓分开；MJ身份不能独自证明焓边界。基准未知时供方链接不完整。 |
| analytical_basis | cod; bod; tss; phenol_water; formaldehyde_water | Mass | kg | COD及BOD5为千克氧当量，TSS为千克干燥滤留残渣，苯酚为CAS108-95-2质量，甲醛为CAS50-00-0质量。浓度与水力体积须同一时段、同一采样边界。总酚、TOC、COD与物种质量不能互换。 |

## 5. 系统边界

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| mill_boundary | wet_mill | 包括收货木片操作、清洗蒸煮磨浆、水力成形、纤维回收、湿压、实际压后处理、调湿、后加工、包装及厂内公用工程/治理/处理。一个聚合前景单元内保留各阶段分账。 | epa-hardboard-2002; usda-wood-handbook-2021 |
| upstream_transport | purchased inputs | 投入链接路线相容的上游生产和实测入厂运输；不得从木片质量推断林业或锯木负荷。按实际运输方式逐项扩展已核实原子运输服务行。默认排除资本设备、使用和报废，并披露。 |  |
| internal_recovery | wet_mill | 测筛分/纤维回收装置、压制及修边的白水流量、浓度和回收干纤维。来源支持回收可能性，不支持通用回收技术或回收率。内部链接两端保持相同实物数量；循环纤维/水不是新增外购投入或外运废物。 | epa-hardboard-2002; usda-wood-handbook-2021; epa-hardboard-wasteload-1979 |
| treatment_boundary | wastewater; cod; bod; tss; phenol_water; formaldehyde_water | 选择厂内处理加实际最终受纳水排放，或外送废水加相容处理数据集。分流路线用实测分量。同一外送废水不得将进水污染负荷列为直接排放；旁路负荷仍是直接排放。 |  |
| utility_boundary | wet_mill | 外购蒸汽与厂内燃料转化分开。厂内蒸汽/热为实物内部链接，产热燃料、排放、灰及损失只记录一次；不另加背景蒸汽负荷。纳入实际锅炉和氧化装置辅助耗用；不能从锯木粉尘PTE估计锅炉。 | epa-hardboard-2002; epa-wood-boiler-2022 |

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 板厂接收外购清洁木片，声明来源、含水和收货状态 |
| starting_condition_role | foreground_starting_condition |
| product_classification_scope | CPC 3.0 31442; wet-process subset |
| recursive_input_rule | 外购硬板用于原料仍是带上游数据集的独立同类别投入；超出清洁木片路线，须明确扩展范围。内部湿修边回收不是递归。 |
| upstream_dataset_requirement | 路线、物料状态、数量基准、地域时间、供方及运输相容证据；未决UUID不能成为自动背景链接 |
| disclosure | 范围扩展、实际回收设备、排除项、运输、公用工程边界、废水路线、碳来源及完整性 |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| wet_mill | 湿法木质硬板 | required | 水力成形后湿态热压；条件性处理及厂内公用工程聚合 | foreground | finished_board |

EPA 1979记载湿修边/回用料稀释返回配浆槽，以及白水回用和saveall选项。这些历史说明支持明确计量的内部链接，不支持通用回收设计或回收率；现代设备和回收情况须在场址采集。[epa-hardboard-wasteload-1979]

实物阶段图：木片接收 → 蒸煮磨浆 → 配浆/湿成形 → 湿压 → 实际热/油热处理 → 调湿/后加工/包装 → 验收板。白水及回收纤维返回配浆；不合格品按实测记录进入回收、厂内燃料或外运路线。厂内处理保留独立进出分账。外购木片不包含厂内原木制片；用原木前须扩展边界。

### 过程：一体化湿法硬板厂（`wet_mill`）

#### 输入

##### 产品流

###### 木片 (`wood_chip`)

仅为外购清洁木片；采集收货体积及实积或堆积约定、堆积状态、湿质量和含水率。核对供方参考体积约定；约定不相容或未知时背景链接不完整。不假定树种特定收率或堆积密度。

- 选定流：木片 `3fa2a6a7-224c-4d99-bd55-a214f0a83161`
- 流属性/单位：Volume / m3
- 数量规则：将实测可归属时期数量除以Q千克板验收净质量，表达为每 1 kg 参考流；cp_material；不假定数值。
- 数值来源模式：(`foreground_record`)
- 适用范围：(`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：(`reference_flow`)
- 证据类型：(`collected_record`)
- 采集协议：`cp_material`
- 来源：`epa-hardboard-2002`; `usda-wood-handbook-2021`

###### 工艺用水 (`process_water`)

记录跨越板厂边界的经处理工艺补水，包括调湿及公用工程补水。内部白水另列循环账，不算新供水。体积表读数须按声明温度下实测密度换算。直接取水须使用独立资源基本流并记录厂内水处理清单。

- 选定流：工艺用水 `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- 流属性/单位：Mass / kg
- 数量规则：将实测可归属时期数量除以Q千克板验收净质量，表达为每 1 kg 参考流；cp_water；不假定数值。
- 数值来源模式：(`foreground_record`)
- 适用范围：(`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：(`reference_flow`)
- 证据类型：(`collected_record`)
- 采集协议：`cp_water`
- 来源：`epa-hardboard-2002`

###### 交流电 (`electricity`)

身份限定：选用记录为送用户的35–330千伏电网电力。包括磨浆、真空、泵、压制、后加工及处理；将实测千瓦时按3.6 MJ/kWh换算。其他电压或发电路线须另核实身份。

- 选定流：交流电 `4d0361a3-56cc-45f9-aa42-bb9103285bf9`
- 流属性/单位：Net calorific value / MJ
- 数量规则：将实测可归属时期数量除以Q千克板验收净质量，表达为每 1 kg 参考流；cp_energy；不假定数值。
- 数值来源模式：(`foreground_record`)
- 适用范围：(`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：(`reference_flow`)
- 证据类型：(`collected_record`)
- 采集协议：`cp_energy`
- 来源：`epa-hardboard-2002`

###### 送至板厂的饱和工艺蒸汽 (`steam`)

仅适用于外部送入的饱和蒸汽；记录声明交付表计处压力、温度、干度及质量、返回凝结水和净焓。此质量交换不是净热交换。供方蒸汽基准与质量UUID仍未解决；不得替换为高压或汽提蒸汽。厂内蒸汽为内部公用工程链接，不是此外购投入。

- 选定流：送至板厂的饱和工艺蒸汽
- 流属性/单位：Mass / kg
- 数量规则：将实测可归属时期数量除以Q千克板验收净质量，表达为每 1 kg 参考流；cp_energy；不假定数值。
- 数值来源模式：(`foreground_record`)
- 适用范围：(`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：(`reference_flow`)
- 证据类型：(`collected_record`)
- 采集协议：`cp_energy`
- 来源：`epa-hardboard-2002`

###### 气态天然气 (`gas`)

天然气用于锅炉、烘炉或氧化装置时，记录交付体积及温度、绝对压力、湿干气组成、压缩因子；核对背景m3定义。次级质量系数不是密度。外购蒸汽已包含生产者燃烧，不得再作为厂内燃烧重复。

- 选定流：气态天然气 `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位：Volume / m3
- 数量规则：将实测可归属时期数量除以Q千克板验收净质量，表达为每 1 kg 参考流；cp_energy；不假定数值。
- 数值来源模式：(`foreground_record`)
- 适用范围：(`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：(`reference_flow`)
- 证据类型：(`collected_record`)
- 采集协议：`cp_energy`
- 来源：`epa-hardboard-2002`; `epa-wood-boiler-2022`

###### 木屑燃料 (`wood_fuel`)

仅为厂内锅炉的外购未处理木屑燃料。记录入炉含水率、组成和实测低位热值。生产废料送厂内锅炉仍为内部转移，不再记为外购燃料或外运废物。其他实际燃料须逐项建流。

- 选定流：木屑燃料 `5f5a176e-cae4-4978-be10-76bf7b92a3d6`
- 流属性/单位：Mass / kg
- 数量规则：将实测可归属时期数量除以Q千克板验收净质量，表达为每 1 kg 参考流；cp_energy；不假定数值。
- 数值来源模式：(`foreground_record`)
- 适用范围：(`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：(`reference_flow`)
- 证据类型：(`collected_record`)
- 采集协议：`cp_energy`
- 来源：`epa-wood-boiler-2022`

###### 酚醛树脂 (`pf_resin`)

使用酚醛胶黏剂时，记录交付配方、固含量、载水及残余单体。仅在供方质量基准相容时使用此树脂身份；必要时将乳液载体和其他成分拆为独立交换，保留完整配方质量。无附加胶黏剂须有具体配方证据，不能成为全部硬板默认值。

- 选定流：酚醛树脂 `9f10798f-ffb5-402d-b805-27d2db4e2caf`
- 流属性/单位：Mass / kg
- 数量规则：将实测可归属时期数量除以Q千克板验收净质量，表达为每 1 kg 参考流；cp_material；不假定数值。
- 数值来源模式：(`foreground_record`)
- 适用范围：(`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：(`reference_flow`)
- 证据类型：(`collected_record`)
- 采集协议：`cp_material`
- 来源：`epa-hardboard-2002`; `usda-wood-handbook-2021`

###### 石蜡 (`wax`)

仅为石油馏分石蜡。按供方基准计量交付石蜡或乳液中的石蜡固体，载水、乳化剂及其他组分必须可见，并防止水重复。身份记录的能源描述不提供默认热值。废塑料再生石蜡属其他路线。

- 选定流：石蜡 `17bff97f-179d-49d4-9e97-5128bd6020a6`
- 流属性/单位：Mass / kg
- 数量规则：将实测可归属时期数量除以Q千克板验收净质量，表达为每 1 kg 参考流；cp_material；不假定数值。
- 数值来源模式：(`foreground_record`)
- 适用范围：(`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：(`reference_flow`)
- 证据类型：(`collected_record`)
- 采集协议：`cp_material`
- 来源：`epa-hardboard-2002`

###### 硫酸铝，粉末 (`alum`)

仅为配浆调节或厂内处理使用的硫酸铝粉末。记录等级、水合状态和纯度；不得混同钾明矾或隐去溶液载水。聚合前分别保留各阶段数量。

- 选定流：硫酸铝，粉末 `1c9f77ea-7da1-42a6-a2ec-d2d4580913c7`
- 流属性/单位：Mass / kg
- 数量规则：将实测可归属时期数量除以Q千克板验收净质量，表达为每 1 kg 参考流；cp_material；不假定数值。
- 数值来源模式：(`foreground_record`)
- 适用范围：(`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：(`reference_flow`)
- 证据类型：(`collected_record`)
- 采集协议：`cp_material`
- 来源：`epa-hardboard-2002`

###### 亚麻籽油 (`linseed_oil`)

仅在亚麻籽油先于热处理施加的油热处理路线纳入；核对油交付、施加、损失及留存。未处理或仅热处理产品须有不适用证据。

- 选定流：亚麻籽油 `f9a0f272-3f42-4051-9483-d3f8bcb9260f`
- 流属性/单位：Mass / kg
- 数量规则：将实测可归属时期数量除以Q千克板验收净质量，表达为每 1 kg 参考流；cp_material；不假定数值。
- 数值来源模式：(`foreground_record`)
- 适用范围：(`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：(`reference_flow`)
- 证据类型：(`collected_record`)
- 采集协议：`cp_material`
- 来源：`epa-hardboard-2002`; `usda-wood-handbook-2021`

###### 桐油 (`tung_oil`)

仅对实际桐油油热处理纳入。桐籽不等于桐油；有界检索后UUID未决。记录油等级、施加质量、损失和留存量。

- 选定流：桐油
- 流属性/单位：Mass / kg
- 数量规则：将实测可归属时期数量除以Q千克板验收净质量，表达为每 1 kg 参考流；cp_material；不假定数值。
- 数值来源模式：(`foreground_record`)
- 适用范围：(`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：(`reference_flow`)
- 证据类型：(`collected_record`)
- 采集协议：`cp_material`
- 来源：`usda-wood-handbook-2021`

###### 妥尔油 (`tall_oil`)

仅对实际妥尔油油热处理纳入，记录等级、组成及供方相容性。英文标签相似的石油原油记录不得采用。

- 选定流：妥尔油 `923fd725-d53a-438c-af51-24064c0778f5`
- 流属性/单位：Mass / kg
- 数量规则：将实测可归属时期数量除以Q千克板验收净质量，表达为每 1 kg 参考流；cp_material；不假定数值。
- 数值来源模式：(`foreground_record`)
- 适用范围：(`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：(`reference_flow`)
- 证据类型：(`collected_record`)
- 采集协议：`cp_material`
- 来源：`usda-wood-handbook-2021`

###### 聚乙烯薄膜 (`pack_pe`)

记录实际聚乙烯运输裹膜及包装废料处理。成品板净质量排除全部包装。新增包装材料须逐项建原子交换并声明复用或返还基准。

- 选定流：聚乙烯薄膜 `e64eb06c-6dc9-45f1-b003-3dc6c44b27e2`
- 流属性/单位：Mass / kg
- 数量规则：将实测可归属时期数量除以Q千克板验收净质量，表达为每 1 kg 参考流；cp_material；不假定数值。
- 数值来源模式：(`foreground_record`)
- 适用范围：(`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：(`reference_flow`)
- 证据类型：(`collected_record`)
- 采集协议：`cp_material`

#### 输出

##### 产品流

###### 硬质纤维板 (`finished_board`)

1 千克验收湿法压制木质硬板，按出厂含水状态、排除运输包装计量。此为唯一参考产品输出；压制、调湿与包装之间的交接在此聚合板厂单元内部。

- 选定流：硬质纤维板 `2b213638-a6da-4337-8972-72e4afe18969`
- 流属性/单位：Mass / kg
- 数量规则：1 千克
- 数值来源模式：(`fixed_value`)
- 适用范围：(`product_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：(`reference_flow`)
- 证据类型：(`collected_record`)
- 采集协议：`cp_product`
- 来源：`epa-hardboard-2002`; `usda-wood-handbook-2021`

#### 输出

##### 废物流

###### 送外部处理的湿法硬板生产废水 (`wastewater`)

仅为跨越边界送外部处理运营方的废水；记录去向、实测体积及分析组成。同一外送废水不得另算向受纳水体直接排放的COD/BOD或物种负荷。直接排水候选及造纸专用废水身份不相容；UUID未决。

- 选定流：送外部处理的湿法硬板生产废水
- 流属性/单位：Volume / m3
- 数量规则：将实测可归属时期数量除以Q千克板验收净质量，表达为每 1 kg 参考流；cp_water；不假定数值。
- 数值来源模式：(`foreground_record`)
- 适用范围：(`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：(`reference_flow`)
- 证据类型：(`collected_record`)
- 采集协议：`cp_water`
- 来源：`epa-hardboard-2002`

###### 脱水湿法硬板废水处理污泥 (`sludge`)

仅为厂内湿法硬板废水处理排出的脱水污泥。采集湿质量、干固体分数、树脂或油含量和去向；不包含外部处理运营方污泥。造纸及市政污泥路线不能确立身份；UUID未决。

- 选定流：脱水湿法硬板废水处理污泥
- 流属性/单位：Mass / kg
- 数量规则：将实测可归属时期数量除以Q千克板验收净质量，表达为每 1 kg 参考流；cp_residue；不假定数值。
- 数值来源模式：(`foreground_record`)
- 适用范围：(`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：(`reference_flow`)
- 证据类型：(`collected_record`)
- 采集协议：`cp_residue`

###### 废木料 (`wood_reject`)

仅为外运木质不合格品；明确含水、胶黏剂或油处理、质量、法定废物或销售状态及去向。广义废木料身份仅可在处理数据相容时覆盖此具体子集。内部回收纤维和厂内燃烧废料不是外部废物。

- 选定流：废木料 `2ef9d37a-2fbf-42f6-8ccf-5d6677d5cfd8`
- 流属性/单位：Mass / kg
- 数量规则：将实测可归属时期数量除以Q千克板验收净质量，表达为每 1 kg 参考流；cp_residue；不假定数值。
- 数值来源模式：(`foreground_record`)
- 适用范围：(`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：(`reference_flow`)
- 证据类型：(`collected_record`)
- 采集协议：`cp_residue`
- 来源：`epa-hardboard-2002`

###### 灰分 (`ash`)

厂内木料锅炉运行时，记录外运灰及类型、含水、未燃碳、污染情况和去向。此未限定灰分身份不能使煤灰处理数据适用于木灰。

- 选定流：灰分 `d74120f1-379f-4d45-a254-c2fd0b3f05e2`
- 流属性/单位：Mass / kg
- 数量规则：将实测可归属时期数量除以Q千克板验收净质量，表达为每 1 kg 参考流；cp_residue；不假定数值。
- 数值来源模式：(`foreground_record`)
- 适用范围：(`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：(`reference_flow`)
- 证据类型：(`collected_record`)
- 采集协议：`cp_residue`
- 来源：`epa-wood-boiler-2022`

#### 输出

##### 基本流

###### 二氧化碳（生物源） (`co2_bio`)

记录治理后的实际室外排放，分别保留来源和运行状态。采用cp_air；不强制正排放量，不使用默认排放因子。有受体或烟囱资料支持时，另选已核实的更具体空气子介质。 碳账保留生物源属性；温室气体报告的排除口径不能删除LCI。

- 选定流：二氧化碳（生物源） `08a91e70-3ddc-11dd-9c15-0050c2490048`
- 流属性/单位：Mass / kg
- 数量规则：将实测可归属时期数量除以Q千克板验收净质量，表达为每 1 kg 参考流；cp_air；不假定数值。
- 数值来源模式：(`foreground_record`)
- 适用范围：(`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：(`reference_flow`)
- 证据类型：(`collected_record`)
- 采集协议：`cp_air`
- 来源：`epa-hardboard-2002`; `epa-wood-boiler-2022`

###### 二氧化碳（化石源） (`co2_fossil`)

记录治理后的实际室外排放，分别保留来源和运行状态。采用cp_air；不强制正排放量，不使用默认排放因子。有受体或烟囱资料支持时，另选已核实的更具体空气子介质。 化石燃料及树脂来源碳须有来源归属；不得使用生物源或土地利用变化记录。

- 选定流：二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 流属性/单位：Mass / kg
- 数量规则：将实测可归属时期数量除以Q千克板验收净质量，表达为每 1 kg 参考流；cp_air；不假定数值。
- 数值来源模式：(`foreground_record`)
- 适用范围：(`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：(`reference_flow`)
- 证据类型：(`collected_record`)
- 采集协议：`cp_air`
- 来源：`epa-hardboard-2002`; `epa-wood-boiler-2022`

###### 一氧化碳（生物源） (`co_bio`)

记录治理后的实际室外排放，分别保留来源和运行状态。采用cp_air；不强制正排放量，不使用默认排放因子。有受体或烟囱资料支持时，另选已核实的更具体空气子介质。 碳账保留生物源属性；温室气体报告的排除口径不能删除LCI。

- 选定流：一氧化碳（生物源） `8a313a02-e251-11e6-bf01-fe55135034f3`
- 流属性/单位：Mass / kg
- 数量规则：将实测可归属时期数量除以Q千克板验收净质量，表达为每 1 kg 参考流；cp_air；不假定数值。
- 数值来源模式：(`foreground_record`)
- 适用范围：(`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：(`reference_flow`)
- 证据类型：(`collected_record`)
- 采集协议：`cp_air`
- 来源：`epa-hardboard-2002`; `epa-wood-boiler-2022`

###### 一氧化碳（化石源） (`co_fossil`)

记录治理后的实际室外排放，分别保留来源和运行状态。采用cp_air；不强制正排放量，不使用默认排放因子。有受体或烟囱资料支持时，另选已核实的更具体空气子介质。 化石燃料及树脂来源碳须有来源归属；不得使用生物源或土地利用变化记录。

- 选定流：一氧化碳（化石源） `08a91e70-3ddc-11dd-924e-0050c2490048`
- 流属性/单位：Mass / kg
- 数量规则：将实测可归属时期数量除以Q千克板验收净质量，表达为每 1 kg 参考流；cp_air；不假定数值。
- 数值来源模式：(`foreground_record`)
- 适用范围：(`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：(`reference_flow`)
- 证据类型：(`collected_record`)
- 采集协议：`cp_air`
- 来源：`epa-hardboard-2002`; `epa-wood-boiler-2022`

###### 氮氧化物 (`nox`)

记录治理后的实际室外排放，分别保留来源和运行状态。采用cp_air；不强制正排放量，不使用默认排放因子。有受体或烟囱资料支持时，另选已核实的更具体空气子介质。 须核实检测、LCI与LCIA的NOx质量定义一致：NO2当量或NO+NO2实际质量。Mass/kg身份本身不能证明该对应关系。不得臆造组分或拆分因子；排除N2O且不与单列NO/NO2重复。对应关系未知时数量及特征化基准待定。

- 选定流：氮氧化物 `f79d0f8f-2b0e-49cb-bed0-b1ea0fbd8625`
- 流属性/单位：Mass / kg
- 数量规则：将实测可归属时期数量除以Q千克板验收净质量，表达为每 1 kg 参考流；cp_air；不假定数值。
- 数值来源模式：(`foreground_record`)
- 适用范围：(`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：(`reference_flow`)
- 证据类型：(`collected_record`)
- 采集协议：`cp_air`
- 来源：`epa-hardboard-2002`; `epa-wood-boiler-2022`

###### 二氧化硫 (`so2`)

记录治理后的实际室外排放，分别保留来源和运行状态。采用cp_air；不强制正排放量，不使用默认排放因子。有受体或烟囱资料支持时，另选已核实的更具体空气子介质。

- 选定流：二氧化硫 `fe0acd60-3ddc-11dd-ac48-0050c2490048`
- 流属性/单位：Mass / kg
- 数量规则：将实测可归属时期数量除以Q千克板验收净质量，表达为每 1 kg 参考流；cp_air；不假定数值。
- 数值来源模式：(`foreground_record`)
- 适用范围：(`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：(`reference_flow`)
- 证据类型：(`collected_record`)
- 采集协议：`cp_air`
- 来源：`epa-hardboard-2002`; `epa-wood-boiler-2022`

###### 甲烷 (生物源) (`ch4_bio`)

记录治理后的实际室外排放，分别保留来源和运行状态。采用cp_air；不强制正排放量，不使用默认排放因子。有受体或烟囱资料支持时，另选已核实的更具体空气子介质。 碳账保留生物源属性；温室气体报告的排除口径不能删除LCI。

- 选定流：甲烷 (生物源) `fe0acd60-3ddc-11dd-a8e8-0050c2490048`
- 流属性/单位：Mass / kg
- 数量规则：将实测可归属时期数量除以Q千克板验收净质量，表达为每 1 kg 参考流；cp_air；不假定数值。
- 数值来源模式：(`foreground_record`)
- 适用范围：(`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：(`reference_flow`)
- 证据类型：(`collected_record`)
- 采集协议：`cp_air`
- 来源：`epa-hardboard-2002`; `epa-wood-boiler-2022`

###### 甲烷 (化石源) (`ch4_fossil`)

记录治理后的实际室外排放，分别保留来源和运行状态。采用cp_air；不强制正排放量，不使用默认排放因子。有受体或烟囱资料支持时，另选已核实的更具体空气子介质。 化石燃料及树脂来源碳须有来源归属；不得使用生物源或土地利用变化记录。

- 选定流：甲烷 (化石源) `08a91e70-3ddc-11dd-9610-0050c2490048`
- 流属性/单位：Mass / kg
- 数量规则：将实测可归属时期数量除以Q千克板验收净质量，表达为每 1 kg 参考流；cp_air；不假定数值。
- 数值来源模式：(`foreground_record`)
- 适用范围：(`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：(`reference_flow`)
- 证据类型：(`collected_record`)
- 采集协议：`cp_air`
- 来源：`epa-hardboard-2002`; `epa-wood-boiler-2022`

###### 一氧化二氮 (`n2o`)

记录治理后的实际室外排放，分别保留来源和运行状态。采用cp_air；不强制正排放量，不使用默认排放因子。有受体或烟囱资料支持时，另选已核实的更具体空气子介质。

- 选定流：一氧化二氮 `08a91e70-3ddc-11dd-94c3-0050c2490048`
- 流属性/单位：Mass / kg
- 数量规则：将实测可归属时期数量除以Q千克板验收净质量，表达为每 1 kg 参考流；cp_air；不假定数值。
- 数值来源模式：(`foreground_record`)
- 适用范围：(`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：(`reference_flow`)
- 证据类型：(`collected_record`)
- 采集协议：`cp_air`
- 来源：`epa-hardboard-2002`; `epa-wood-boiler-2022`

###### 颗粒物 (PM2.5) (`pm_fine`)

记录治理后的实际室外排放，分别保留来源和运行状态。采用cp_air；不强制正排放量，不使用默认排放因子。有受体或烟囱资料支持时，另选已核实的更具体空气子介质。 使用采样方法匹配、互不重叠的空气动力学粒径分组；PM10及总颗粒物只用于核对，不能再叠加排放。

- 选定流：颗粒物 (PM2.5) `08a91e70-3ddc-11dd-9293-0050c2490048`
- 流属性/单位：Mass / kg
- 数量规则：将实测可归属时期数量除以Q千克板验收净质量，表达为每 1 kg 参考流；cp_air；不假定数值。
- 数值来源模式：(`foreground_record`)
- 适用范围：(`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：(`reference_flow`)
- 证据类型：(`collected_record`)
- 采集协议：`cp_air`
- 来源：`epa-hardboard-2002`; `epa-wood-boiler-2022`

###### 颗粒物 (PM2.5 - PM10) (`pm_mid`)

记录治理后的实际室外排放，分别保留来源和运行状态。采用cp_air；不强制正排放量，不使用默认排放因子。有受体或烟囱资料支持时，另选已核实的更具体空气子介质。 使用采样方法匹配、互不重叠的空气动力学粒径分组；PM10及总颗粒物只用于核对，不能再叠加排放。

- 选定流：颗粒物 (PM2.5 - PM10) `08a91e70-3ddc-11dd-9501-0050c2490048`
- 流属性/单位：Mass / kg
- 数量规则：将实测可归属时期数量除以Q千克板验收净质量，表达为每 1 kg 参考流；cp_air；不假定数值。
- 数值来源模式：(`foreground_record`)
- 适用范围：(`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：(`reference_flow`)
- 证据类型：(`collected_record`)
- 采集协议：`cp_air`
- 来源：`epa-hardboard-2002`; `epa-wood-boiler-2022`

###### 颗粒物（> PM10） (`pm_coarse`)

记录治理后的实际室外排放，分别保留来源和运行状态。采用cp_air；不强制正排放量，不使用默认排放因子。有受体或烟囱资料支持时，另选已核实的更具体空气子介质。 使用采样方法匹配、互不重叠的空气动力学粒径分组；PM10及总颗粒物只用于核对，不能再叠加排放。

- 选定流：颗粒物（> PM10） `fe0acd60-3ddc-11dd-a70a-0050c2490048`
- 流属性/单位：Mass / kg
- 数量规则：将实测可归属时期数量除以Q千克板验收净质量，表达为每 1 kg 参考流；cp_air；不假定数值。
- 数值来源模式：(`foreground_record`)
- 适用范围：(`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：(`reference_flow`)
- 证据类型：(`collected_record`)
- 采集协议：`cp_air`
- 来源：`epa-hardboard-2002`; `epa-wood-boiler-2022`

###### 甲醛 (`formaldehyde_air`)

记录治理后的实际室外排放，分别保留来源和运行状态。采用cp_air；不强制正排放量，不使用默认排放因子。有受体或烟囱资料支持时，另选已核实的更具体空气子介质。

- 选定流：甲醛 `08a91e70-3ddc-11dd-941b-0050c2490048`
- 流属性/单位：Mass / kg
- 数量规则：将实测可归属时期数量除以Q千克板验收净质量，表达为每 1 kg 参考流；cp_air；不假定数值。
- 数值来源模式：(`foreground_record`)
- 适用范围：(`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：(`reference_flow`)
- 证据类型：(`collected_record`)
- 采集协议：`cp_air`
- 来源：`epa-hardboard-2002`; `epa-wood-boiler-2022`

###### 苯酚 (`phenol_air`)

记录治理后的实际室外排放，分别保留来源和运行状态。采用cp_air；不强制正排放量，不使用默认排放因子。有受体或烟囱资料支持时，另选已核实的更具体空气子介质。

- 选定流：苯酚 `fe0acd60-3ddc-11dd-aa41-0050c2490048`
- 流属性/单位：Mass / kg
- 数量规则：将实测可归属时期数量除以Q千克板验收净质量，表达为每 1 kg 参考流；cp_air；不假定数值。
- 数值来源模式：(`foreground_record`)
- 适用范围：(`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：(`reference_flow`)
- 证据类型：(`collected_record`)
- 采集协议：`cp_air`
- 来源：`epa-hardboard-2002`; `epa-wood-boiler-2022`

###### 甲醇 (`methanol_air`)

记录治理后的实际室外排放，分别保留来源和运行状态。采用cp_air；不强制正排放量，不使用默认排放因子。有受体或烟囱资料支持时，另选已核实的更具体空气子介质。

- 选定流：甲醇 `fe0acd60-3ddc-11dd-a935-0050c2490048`
- 流属性/单位：Mass / kg
- 数量规则：将实测可归属时期数量除以Q千克板验收净质量，表达为每 1 kg 参考流；cp_air；不假定数值。
- 数值来源模式：(`foreground_record`)
- 适用范围：(`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：(`reference_flow`)
- 证据类型：(`collected_record`)
- 采集协议：`cp_air`
- 来源：`epa-hardboard-2002`; `epa-wood-boiler-2022`

###### 水蒸气 (`water_vapour`)

记录治理后的实际室外排放，分别保留来源和运行状态。采用cp_air；不强制正排放量，不使用默认排放因子。有受体或烟囱资料支持时，另选已核实的更具体空气子介质。 用含有证据支持的生成/消耗项的分阶段H2O平衡，区分原料/载水蒸发、蒸汽损失、冷却蒸发、进气湿度及反应水。仅在实际发生阶段纳入酚醛固化、木材/热处理或油处理转化、厂内燃烧/氧化及处理反应。锅炉或氧化器水不能归为非反应性精整/型面加工的蒸发水；外购公用工程的燃烧仍属上游。核对实测出口水蒸气，不重复叠加反应水；内部循环不属外部交换。反应水未知时保持待定，不得仅凭平衡残差推定。

- 选定流：水蒸气 `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- 流属性/单位：Mass / kg
- 数量规则：将实测可归属时期数量除以Q千克板验收净质量，表达为每 1 kg 参考流；cp_air；不假定数值。
- 数值来源模式：(`foreground_record`)
- 适用范围：(`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：(`reference_flow`)
- 证据类型：(`collected_record`)
- 采集协议：`cp_air`
- 来源：`epa-hardboard-2002`; `epa-wood-boiler-2022`

###### 化学需氧量 (`cod`)

仅为经厂内处理或有记录旁路后实际向受纳水体直接释放。按water_load逐时段积分匹配的浓度和排水体积。水/未指定身份须披露不确定性；受体已知时使用另核实的受体特定身份。外送处理废水的分析值不是直接排放。

- 选定流：化学需氧量 `08a91e70-3ddc-11dd-97ef-0050c2490048`
- 流属性/单位：Mass / kg
- 数量规则：将实测可归属时期数量除以Q千克板验收净质量，表达为每 1 kg 参考流；cp_water；不假定数值。
- 数值来源模式：(`foreground_record`)
- 适用范围：(`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：(`reference_flow`)
- 证据类型：(`collected_record`)
- 采集协议：`cp_water`
- 来源：`epa-cod-4104-1993`

###### 生物需氧量 (`bod`)

仅为经厂内处理或有记录旁路后实际向受纳水体直接释放。按water_load逐时段积分匹配的浓度和排水体积。水/未指定身份须披露不确定性；受体已知时使用另核实的受体特定身份。外送处理废水的分析值不是直接排放。

- 选定流：生物需氧量 `08a91e70-3ddc-11dd-97e0-0050c2490048`
- 流属性/单位：Mass / kg
- 数量规则：将实测可归属时期数量除以Q千克板验收净质量，表达为每 1 kg 参考流；cp_water；不假定数值。
- 数值来源模式：(`foreground_record`)
- 适用范围：(`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：(`reference_flow`)
- 证据类型：(`collected_record`)
- 采集协议：`cp_water`
- 来源：`epa-bod-4051`

###### 悬浮物（未指定） (`tss`)

仅为经厂内处理或有记录旁路后实际向受纳水体直接释放。按water_load逐时段积分匹配的浓度和排水体积。水/未指定身份须披露不确定性；受体已知时使用另核实的受体特定身份。外送处理废水的分析值不是直接排放。

- 选定流：悬浮物（未指定） `618d3d9a-9f85-417d-b0c4-e87942a9e345`
- 流属性/单位：Mass / kg
- 数量规则：将实测可归属时期数量除以Q千克板验收净质量，表达为每 1 kg 参考流；cp_water；不假定数值。
- 数值来源模式：(`foreground_record`)
- 适用范围：(`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：(`reference_flow`)
- 证据类型：(`collected_record`)
- 采集协议：`cp_water`
- 来源：`epa-tss-1602`

###### 苯酚 (`phenol_water`)

仅为经厂内处理或有记录旁路后实际向受纳水体直接释放。按water_load逐时段积分匹配的浓度和排水体积。水/未指定身份须披露不确定性；受体已知时使用另核实的受体特定身份。外送处理废水的分析值不是直接排放。

- 选定流：苯酚 `08a91e70-3ddc-11dd-975d-0050c2490048`
- 流属性/单位：Mass / kg
- 数量规则：将实测可归属时期数量除以Q千克板验收净质量，表达为每 1 kg 参考流；cp_water；不假定数值。
- 数值来源模式：(`foreground_record`)
- 适用范围：(`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：(`reference_flow`)
- 证据类型：(`collected_record`)
- 采集协议：`cp_water`
- 来源：`epa-phenol-8270e-2018`

###### 甲醛 (`formaldehyde_water`)

仅为经厂内处理或有记录旁路后实际向受纳水体直接释放。按water_load逐时段积分匹配的浓度和排水体积。水/未指定身份须披露不确定性；受体已知时使用另核实的受体特定身份。外送处理废水的分析值不是直接排放。

- 选定流：甲醛 `08a91e70-3ddc-11dd-9421-0050c2490048`
- 流属性/单位：Mass / kg
- 数量规则：将实测可归属时期数量除以Q千克板验收净质量，表达为每 1 kg 参考流；cp_water；不假定数值。
- 数值来源模式：(`foreground_record`)
- 适用范围：(`site_specific`)
- 归一化基准：每 1 kg 参考流
- 基准类型：(`reference_flow`)
- 证据类型：(`collected_record`)
- 采集协议：`cp_water`
- 来源：`epa-carbonyl-8315a-1996`

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| separate_ledgers | wet_mill | 未分配实物过程图、全物流质量及元素平衡和独立的水/反应性组分账须独立于分配后的环境负荷账。内部链接数量及实际联产品质量不得乘分配份额。记录不合格板销售或废物状态。 |  |
| subdivide_first | wet_mill | 按胶黏剂、厚度及热/油状态区分产品，并在分配共享负荷前计量可归属操作。优先使用实测驱动量支持的因果分配；无可辩护物理关系时用记录的时期价格经济份额并做敏感性分析，不规定虚构通用百分比。 |  |
| recovery_allocation | wood_reject; wood_fuel; wastewater | 内部回收纤维不获得避免原生产品抵扣。内部燃料燃烧保留实际碳排放。外部废物只链接一次相容处理；可售联产品须声明分配或系统扩展模型，不能混用。回收纤维损失及库存变化保留在实物平衡。 |  |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_product | wet_mill | finished_board | 出厂验收 | 批次；验收净质量Q；包装皮重；不合格/退货；样品质量；干质量；长宽厚；密度；含水基准；调湿温湿度；表面等级；胶黏剂及油/热状态 | 校准净称重，配对样品尺寸及恒重含水测定；记录方法/版本和挥发偏差；核对发货及生产库存 | kg; m; kg/m3; moisture fraction | 逐批及逐声明状态 | 代表性声明生产时期，披露启动、停机及季节覆盖 | 一个具名板厂、声明路线及处理状态 | 每 1 kg 参考流 | 校准、原始记录、分析QC及覆盖/不确定性报告 |
| cp_material | wet_mill | inputs | 收货/投料记录 | row_id；交付批次；配方；纯度；水/固体分数；收货体积及实积/堆积状态；湿/干质量；树种；投料；损失；期初期末库存；油施加及留存；阶段进出口水及组分质量；实际胶黏剂配方及固化程度；木材/热处理和油处理转化及可能的氧吸收证据 | 校准秤/流量表、供方声明及阶段投料日志；采样木片含水及实测质量体积换算；保留乳液组分分析且不重复计入已购载体；配对阶段样品及配方/固化记录，用水特异性测定和组分分析区分水分、反应产物及其他挥发物；单独的烘干失重不能认定为反应水 | kg; m3 | 逐交付及班次 | 代表性声明生产时期，披露启动、停机及季节覆盖 | 一个具名板厂、声明路线及处理状态 | 每 1 kg 参考流 | 校准、原始记录、分析QC及覆盖/不确定性报告 |
| cp_energy | wet_mill | utilities | 表计/燃料记录 | 阶段；供电电压；千瓦时；燃料体积；T；绝对P；湿干组成；Z；燃料湿质量；热值；蒸汽质量/P/T/干度；凝结水质量/T/P；损失；供方参考基准；实际燃料元素组成及水分；燃烧/氧化进气量、组成及湿度；运行状态和实测反应产物/未燃残余物 | 各阶段及厂内产能装置计量；用校准表计及实测状态蒸汽表焓核对供方基准；区分外购与厂内蒸汽、启动及待机耗用；仅对实际厂内燃烧/氧化核对燃料、空气、烟气及残余物端点，采用来源特定测量或有转化程度及不确定性证据的化学计量模型，不假定完全燃烧 | kWh; MJ; m3; kg | 连续表计，时段/班次总量 | 代表性声明生产时期，披露启动、停机及季节覆盖 | 一个具名板厂、声明路线及处理状态 | 每 1 kg 参考流 | 校准、原始记录、分析QC及覆盖/不确定性报告 |
| cp_water | wet_mill | forming/treatment | 水力及分析记录 | 补水；白水循环；回收进出浓度；回收干纤维；排污；外送处理；直接排放/旁路时段体积；COD/BOD5/TSS/苯酚/甲醛浓度；受体；方法/版本；样品保存/保持时间；检出限；空白/回收率；不确定性；过滤/全样；阶段进出口H2O及反应性物种量；实际厂内处理药剂、反应产物及生成/消耗证据 | 匹配水流计量，按运行状态及旁路事件流量比例采样；用下列分析方法或有完整QC证明的等效方法。计量回收链接两端；不假定回收效率。区分实测水相全物流质量、H2O质量及溶解/悬浮组分；配对处理进出口、气体及污泥测量并提供实际反应证据，不将去除的COD/BOD视为守恒物料质量 | kg; m3; mg/L; mg O2/L; kg dry fibre | 连续流量；代表性时段样品；每次旁路 | 代表性声明生产时期，披露启动、停机及季节覆盖 | 一个具名板厂、声明路线及处理状态 | 每 1 kg 参考流 | 校准、原始记录、分析QC及覆盖/不确定性报告 |
| cp_air | wet_mill | emissions | 烟囱/无组织排放记录 | 源；燃料/木材/树脂碳来源；治理；运行小时；烟气流量温压湿度；浓度；物种CAS；物种质量或碳当量；NOx检测/LCI/LCIA质量定义及相容性（NO2当量或NO+NO2实际质量；排除N2O）；空气动力学粒径；可过滤/可凝结基准；检出限；方法/版本；碳/水平衡；油处理；分阶段反应水证据；进出口湿度及水蒸气；固化及燃烧/氧化程度 | 有代表性的治理后烟囱及无组织测定，校准体积/浓度基准并覆盖启动及旁路。有机物用验证的采样/色谱分物种；VOC碳当量不能替代具体物种。水蒸气须有包含有证据支持的反应生成/消耗项的分阶段H2O平衡；区分工艺蒸发、公用工程燃烧/氧化、油处理反应及进气湿度，不重复计算出口水蒸气。核实NOx检测/LCI/LCIA质量对应，不臆造组分比例；对应未知时数量及特征化待定 | kg; mg/m3; m3 | 代表性运行状态及处理配方；连续运行小时 | 代表性声明生产时期，披露启动、停机及季节覆盖 | 一个具名板厂、声明路线及处理状态 | 每 1 kg 参考流 | 校准、原始记录、分析QC及覆盖/不确定性报告 |
| cp_residue | wet_mill | residues | 去向/称重记录 | row_id；物料状态；胶黏剂/油含量；湿质量；干固体；未燃碳；回收/内部燃料/外运；去向；废物/销售状态；库存 | 校准称重、固体测定及接收文件；区分每项实物残余物、内部转移及外运废物；不得将捕集粉尘并入排放颗粒物 | kg | 逐清运及班次 | 代表性声明生产时期，披露启动、停机及季节覆盖 | 一个具名板厂、声明路线及处理状态 | 每 1 kg 参考流 | 校准、原始记录、分析QC及覆盖/不确定性报告 |

协议汇总字段表示最终报告基准。先保留原始时段/阶段/状态总量及期初期末库存；逐行将实测可归属时期交换除以同一Q千克板验收净质量。Q用cp_product实测。这是时期质量归一，没有按件计数或机器基准。下列计算保留公式及分析分子定义。

### 分析解释

| 参数 | 方法及分析单位 | 解释与核对 | source_ids |
| --- | --- | --- | --- |
| COD | EPA 410.4 rev2.0：重铬酸盐消解/比色；mg O2/L | 报全样/过滤组分、稀释、氯干扰、保存及方法QC；千克负荷为氧当量，不是有机碳质量 | epa-cod-4104-1993 |
| BOD5 | EPA 405.1：20 °C避光五日培养及溶解氧下降；mg O2/L | 记录稀释、接种/空白校正、毒性及硝化抑制；采用抑制时单独标CBOD。不从COD换算 | epa-bod-4051 |
| TSS | EPA 160.2：玻璃纤维过滤、103–105 °C残渣恒重；mg干残渣/L | 记录滤材、洗涤、混样及溶解固体干扰；总固体/溶解固体不替代TSS | epa-tss-1602 |
| phenol | EPA 8270E GC/MS配合验证的水样萃取；mg苯酚/L | CAS108-95-2、基质回收率、保存、校准及检出限；总酚不能全归苯酚 | epa-phenol-8270e-2018 |
| formaldehyde | EPA 8315A程序1：水样游离羰基DNPH衍生/HPLC；mg甲醛/L | CAS50-00-0；记录游离分析物/相定义、试剂空白、衍生伪影及基质QC；不是树脂结合态总甲醛 | epa-carbonyl-8315a-1996 |

### 计算规则

| rule_id | 适用对象 | 公式或规则 | 输入 | 输出 | source_ids |
| --- | --- | --- | --- | --- | --- |
| period_normalization | 所有清单行 | q_i = X_i / Q；X_i为同一声明生产时期可归属交换数量；Q为出厂含水状态下验收板净质量千克。参考输出为1 千克。此为时期质量归一，不是按板计数或按机器转换。 | X_i; Q; cp_product | q_i |  |
| moisture_conversion | wood_chip; wood_fuel; finished_board; sludge | 湿基分数w：干质量 = 湿质量 × (1 − w)。干基比u：干质量 = 湿质量 / (1 + u)；w = u / (1 + u)。百分数先除100。密度使用同一调湿状态质量及样品体积。 | wet mass; dry mass; w; u; dimensions | 干固体账及声明密度 |  |
| water_load | cod; bod; tss; phenol_water; formaldehyde_water | L_i = sum(C_i,j × V_j) × 0.001；浓度mg/L与配对时段体积m3得到千克分析物、干残渣或氧当量。再将L_i除Q。只用直接排放时段；不算外送废水负荷。不得将COD+BOD5+物种相加为实物污染物质量。 | C_i,j; V_j; Q; cp_water | kg / kg reference flow | epa-cod-4104-1993; epa-bod-4051; epa-tss-1602 |
| steam_enthalpy | steam | 净交付热量 = sum(m_steam × h_supply − m_condensate_return × h_return)，声明共同焓基准、实测蒸汽品质及交付/返还边界损失。质量投入另保留。供方热参考边界须匹配；对应未知则未决，不能从MJ属性推断。 | steam and condensate masses; measured states; supplier basis | kg steam and MJ net heat |  |
| physical_balance | wet_mill | 将守恒的全物流质量及元素平衡（包括按生物/化石来源区分的C、H及O）与H2O和反应性干组分账分开。对守恒质量/元素：期初库存 + 输入 = 期末库存 + 输出；纳入跨越所选边界的实际燃料、空气/氧、水分、产品、液体/气体释放及残余物。对每个反应性组分i：期初库存_i + 输入_i + 有证据的生成_i = 期末库存_i + 输出_i + 有证据的消耗_i。木材/树脂/油的干固体是实测状态，不能作为反应中的守恒物种。生成/消耗项仅用于各自阶段边界内实际酚醛固化、木材/热处理或油处理转化、厂内燃料/VOC氧化及厂内废水反应。以实际配方、固化/转化程度、燃料/空气组成、配对阶段测量或适用的来源特定化学计量模型及不确定性支持反应项；不使用通用收率，不假定完全转化，不由残差反推反应项。非反应性转移仅在有证据时取零反应项；内部链接在配对实测端点抵消。保留全部实际交换及产品、不合格品、污泥、灰和气体中的碳；不自动给固碳抵扣。单列未解释残差并与有记录的测量不确定性比较，不虚构容差，不将残差当作实测损失/反应水。未决项使核对结论不确定。 | cp_material; cp_product; cp_energy; cp_water; cp_air; cp_residue; 有证据的阶段反应项 | 未分配的守恒质量/元素及反应性组分账 | epa-hardboard-2002; usda-wood-handbook-2021; epa-wood-boiler-2022 |

### 数据质量要求

| requirement_id | 适用对象 | 要求 | 证据 |
| --- | --- | --- | --- |
| route_identity | wet_mill | 记录水力成形及湿压、批次/状态区分、回收设备和胶黏剂/油配方；产品名或法定密度类别不足以确立路线。 | 过程图及场址记录 |
| measurement_quality | 所有清单行 | 实物及负荷账用同一Q、时期及路线；校准、代表性采样及不确定性。缺UUID、未测排放、检出限结果或未决反应项不能静默记零。区分实测水分/固体及反应转化，披露阶段证据及残差不确定性。 | 协议及守恒质量/元素和反应性组分平衡 |
| identity_background | 所有清单行 | 核对流类型、介质/子介质、来源、物种及参考属性/单位。已核实广义实物身份仍需供方数据集及基准相容。身份/基准未知使完整数据集验收不成立；记录实际新增的每项原子化学品、燃料、包装、运输和排放。 | 供方数据及明确完整性披露 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| validate_reference | finished_board | 恰好一个板验收净质量参考输出链接；参考数量、分母、声明含水/等级/处理及换算一致。 |  |
| validate_route | wet_mill | 拒绝干法MDF/HDF、预干燥湿毡干压、其他纤维板及未决路线/产品身份。记录实际密度、含水、厚度和压后状态；不得替代为法定限值。 | epa-hardboard-2002; usda-wood-handbook-2021 |
| validate_balance | wet_mill | 实物内部链接在分配前按配对阶段端点平衡；参考输出/联产品保持实际质量。守恒的全物流质量及元素C/H/O须与H2O和反应性干组分生成/消耗分开核对。实际配方、固化/氧化/处理程度及阶段边界须有证据；锅炉水不能归入非反应性精整/型面加工，外购公用工程燃烧属上游。保留实际交换，防止反应水重复计入，区分未解释残差及实测损失。不使用默认收率，不假定零反应，不由残差推定化学转化；测量不全或反应项未决则结论不确定。 | epa-hardboard-2002; usda-wood-handbook-2021; epa-wood-boiler-2022 |
| validate_discharge | wastewater; cod; bod; tss; phenol_water; formaldehyde_water | 同一水分量的外送处理与直接排放互斥。分析单位、方法/版本、采样边界、受体、稀释及检出状态必需。COD/BOD指标与化学物种不同，不无依据合并毒性或需氧影响。 | epa-cod-4104-1993; epa-bod-4051; epa-tss-1602; epa-phenol-8270e-2018; epa-carbonyl-8315a-1996 |
| validate_air | co2_bio; co2_fossil; co_bio; co_fossil; ch4_bio; ch4_fossil; nox; pm_fine; pm_mid; pm_coarse | 保持生物/化石来源及室外介质正确；LCI保留生物CO2。粒径组互不重叠，说明可过滤与可凝结方法，拒绝室内/校正/长期替代。不重复外购热与厂内燃料排放。NOx检测、LCI与LCIA须采用相容的NO2当量或NO+NO2实际质量定义；排除N2O，防止与单列NO/NO2重叠，相容性未知时保留数量/特征化待定。 | epa-hardboard-2002; epa-wood-boiler-2022 |
| validate_completeness | 所有清单行 | 每项适用实际流须有一个原子行、协议、数量及相容背景/处理链接。不适用须有证据；身份或蒸汽/木片/气体基准未决须明确。未解决前不能批准完整数据集。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | foreground_process_dataset |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | 完整性检查后，与声明配方、含水及处理状态匹配的湿压木质硬板供应 |
| excluded_use | 干法MDF/HDF代理；湿干法硬板代理；法定符合性认证；使用寿命等效；通用排放因子 |
| required_metadata | 场址/时期；路线图；Q；密度/含水/厚度；配方及处理状态；碳来源；内部链接；运输；能源/蒸汽基准；废物/排放路线；分配 |
| required_quality_disclosure | 采样及不确定性；未分配实物账及分配后负荷账；来源/基准相容性；跳过/缺失流；未决UUID；实际地域/时间范围；分析方法及检出处理 |
| update_trigger | 路线、原料/胶黏剂/油、含水/厚度、公用工程、回收、排放治理或废水去向变更 |

## 11. 数据源

| 来源编号 | 类型 | 参考资料 | 用途 |
| --- | --- | --- | --- |
| epa-hardboard-2002 | official_guidance | US EPA, AP-42 10.6.4, September 2002, pp.10.6.4-1, -5–-6, -8–-9; https://www.epa.gov/sites/default/files/2020-10/documents/c10s0604.pdf | 历史湿法路线分解、压制水回用及空气源区分；不采用为现代场址配方、设定或因子 |
| usda-wood-handbook-2021 | handbook | USDA Forest Products Laboratory, FPL-GTR-282, March 2021, chapter11 pp.11-13–11-15 and glossary p.G-12, Polymer; https://www.govinfo.gov/content/pkg/GOVPUB-A13-PURL-gpo158673/pdf/GOVPUB-A13-PURL-gpo158673.pdf | 湿干产品区分；部分无胶板；水力成形；条件性热处理、油热处理及调湿；回收能力；缩聚失水的定性区别，不提供实际酚醛固化程度、反应水收率或板厂收率 |
| epa-wood-boiler-2022 | official_guidance | US EPA, AP-42 1.6, March 2022, pp.1.6-1–1.6-3; https://www.epa.gov/system/files/documents/2022-03/c1s6_final.pdf | 条件性厂内木残余物锅炉边界及污染物；不从锯木粉尘研究复制锅炉因子；保留实物生物碳 |
| epa-cod-4104-1993 | official_guidance | US EPA Method410.4, rev2.0, August1993, sections1–2,4,8–9; https://www.epa.gov/sites/default/files/2015-08/documents/method_410-4_1993.pdf | COD分析基准及质量控制，不是排放限值 |
| epa-bod-4051 | official_guidance | US EPA Method405.1, issued1971, editorial revision1974, p.405.1-1 (official archive PDF page34); https://semspub.epa.gov/work/03/130972.pdf | BOD五日分析定义；仅用存档方法，不移植存档场址测量 |
| epa-tss-1602 | official_guidance | US EPA Method160.2, p.160.2-1 (official archive PDF page351; edition not asserted); https://semspub.epa.gov/work/03/160260.pdf | 过滤留存干残渣定义及干扰；不移植填埋场址参数 |
| epa-phenol-8270e-2018 | official_guidance | US EPA Method8270E, rev6, June2018, sections1–2 and phenol analyte table; https://www.epa.gov/sites/default/files/2019-01/documents/8270e_revised_6_june_2018.pdf | 经水样基质验证的苯酚特定物种GC/MS |
| epa-carbonyl-8315a-1996 | official_guidance | US EPA Method8315A, rev1, December1996, sections1–3, procedure1; https://www.epa.gov/sites/default/files/2015-12/documents/8315a.pdf | 水样游离甲醛DNPH/HPLC基准、伪影及相定义 |
| epa-hardboard-wasteload-1979 | official_guidance | US EPA, Raw Wasteload Characteristics of the Hardboard Industry, EPA-600/2-79-008, January1979, 印刷页13及15（PDF25/27）, Broke Dilution Water及White Water Recycle；https://nepis.epa.gov/Exe/ZyPURL.cgi?Dockey=9101B18N.TXT | 历史湿修边回用料返回配浆槽及白水回用/saveall可能性；仅用定性工艺说明，不采用调查/实验数值或通用回收率 |
