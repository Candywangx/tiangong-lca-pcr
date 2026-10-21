---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.rubber-and-plastics-products.single-layer-extruded-polycarbonate-lighting-diffusers
language: zh-CN
sync_with: pcr.en-US.md
status: candidate
content_maturity: authored_methodology
translation_status: aligned
---

# 外购完整粒料配方制造单层挤出聚碳酸酯灯具扩散罩

## 1. 范围与适用性

制造指定室内灯具配套的单层、非发泡、无增强、切长PC扩散罩，从外购完整原生PC粒料配方开始，包括接收储存、输送、水分调理、螺杆塑化、连续模头成型、实际定型冷却、牵引切长、修整与洁净回磨管理、尺寸及光学检验、首次质量放行。实际公用工程生成、损失、失败、停启、待机、清理和返工全部纳入；放行后实际包装、仓储、搬运、发运另列服务账。不是购入成品再包装。[condale-pc; condale-manufacture; covestro-pc-2018; ifc-plastics-2007]

Condale的真实PC扩散件及制造能力与Covestro的粒料工艺资料构成透明技术综合，未声称同一SKU、工厂、牌号、配方或当代订单。英国供货实例不证明中国工厂；下列中国中压电身份仅限实际相符的供电门。PC预干燥存在熔融脱气替代，按实际设备及含水控制保留两者适用条件，不机械重复用能。原件的温度、含水率、尺寸、配比、密度、功率、损失率、寿命和性能值均不是本方法默认值。[condale-pc; covestro-pc-2018]

排除整灯、LED及驱动电源、电气壳体、绝缘配件、通用建筑型材、片材再成型、其他聚合物及PC共混物、外部再生料、纤维增强或发泡、多层及UV共挤、厂内树脂或扩散母粒配混、注塑、涂装印刷、粘接及零件装配、户外或医疗认证用途。不同构造需适用性复核且完整列真实交换，不能通过排除语句隐去实际工序。ET资料展示户外保护层和组件阻燃试验的不同边界，不能从树脂牌号自动推成品认证。CPC原件将36960与36310、36950、36980区分，但无实质工艺说明；此处仅是36960的窄子集。[covestro-et-2016; un-cpc3-2025]

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.rubber-and-plastics-products.single-layer-extruded-polycarbonate-lighting-diffusers |
| classification_refs | CPC3.0:36960; 窄子集；未接受映射 |
| covered_products | 一款指定的单层原生PC室内灯具切长扩散罩 |
| excluded_products | 整灯; LED及驱动; 电气壳体; 绝缘配件; 通用建筑型材; 片材再成型; 其他聚合物或PC共混物; 外部再生料; 增强或发泡; 多层或UV共挤; 厂内树脂或扩散母粒配混; 注塑; 涂装或印刷; 粘接或装配; 户外或医疗认证用途; 实际偏离需完整适用性复核 |
| representative_product | 具有明确配套灯具的裸乳白或磨砂PC扩散罩；不固定品牌和尺寸 |
| production_route | 完整粒料→水分控制→螺杆模头挤出→定型冷却牵引切长→检验首次放行→独立记录供货服务 |
| market_state | 首次放行的冷却裸合格扩散罩；不含包装及配套电气装配 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 制造配套灯具特定的PC光学扩散罩 |
| How much | 1千克唯一新增首次质量放行的裸扩散罩净质量 |
| How well | 实际批准图纸及尺寸光学机械表面和配套接口验收；不代表通用流明或认证等价 |
| How long or cycle | 一次制造生产周期至首次质量放行；不量化使用寿命或灯具用电 |
| reference_flow_link | first_release |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 灯、照明装置、装有照明设备的广告牌、照牌及类似物品的未另列明的塑料部件 `9fec99da-b5dd-4be9-aa8e-44e0d758f3ba` |
| 参考流属性 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量单位 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 零件图纸及专用灯具配套接口; PC牌号及原生来源; 整份供货配方及光学表面; 线性或支化结构及实际添加组分声明; 单层非发泡无增强构造; 实际干燥或熔融脱气配置; 模头定型冷却牵引及切长路线; 尺寸光学机械及用途特定验收; 实际室内用途限制且不声称整灯批准; 唯一首次放行批次及净质量; 原料在制成品及设备回路存量; 逐流继承向量及原批次分母; 内部回磨料谱系及热历史; 外退方向及原放行关联; 实际放行后服务期间及结转; 中国中压购电门及实际损失; 水热状态及供方水能约定; 整份制剂及嵌套组分子账; 每种包装存量及总实物移动账; 物种粒径介质及独立识别; 场址期间分配顺序不确定性及完整性 |

所有必需限定信息须写入数据集元数据、参考描述、过程说明或等效可消费字段。Q为唯一新增首次放行净千克；同批期末成品已在Q中，不再增加产量。数目、长度及包装毛重均不能代替净质量；如从长度换算，须实测同配置线质量并保留采样、温湿状态及不确定性，不能从平台次级系数猜密度。

## 4. 计量与单位规则

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| reference_mass | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Q是同配置同批次冷却验收后经校准称量的唯一新增首次放行裸扩散罩净千克，扣除可分离皮重。cp_release采原始千克，仅calc_reference将归属原始分子除Q。 |
| native_units | all inventory rows | Native reference property | kg or MJ | 质量和能量采用核实原生链。归属前电力按1kWh=3.6MJ准确换算；能量不是质量平衡项。不编数目或长度到质量常数。 |
| raw_conversion | all inventory rows | Measured extensive quantity | raw units | 整份制剂只计一次，含量及载体为子账。已积分体积不再乘时间，只有真实速率才积分。体积换质量需该物质在明确温压下的独立实测密度。 |
| zero_output | all inventory rows | Raw burden vector | raw units | Q=0仍保留全部失败停启待机清理返工负荷和未定批次归属，不出单位结果。复验或重发不产生Q。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 实际接收的整份原生无增强挤出级PC粒料制剂，声明上游负荷及包装边界 |
| starting_condition_role | 完整前景转化的外购材料 |
| product_classification_scope | 36960中专用塑料灯具扩散罩窄子集；非通用36310型材或整灯 |
| recursive_input_rule | 外购成品扩散罩保留上游负荷，处于粒料转化路线之外；合格旧退货保留原放行身份而不递归 |
| upstream_dataset_requirement | 匹配完整树脂配方及真实公用工程包装运输处理供方，不漏计或重复其内含负荷 |
| disclosure | 场址期间配置首次放行门及实际服务区间；原料在制成品设备回路存量、各自继承向量及原生限制 |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| boundary_applicability | all processes | 仅适用于外购完整粒料切长制造的专用室内灯具单层非发泡无增强原生PC扩散罩。排除整灯LED驱动、电气壳、绝缘件、通用建筑型材、片材再成型、其他聚合物PC共混、外部再生料、增强发泡、多层UV共挤、厂内树脂母粒配混、注塑、涂装印刷、粘接装配及户外医疗认证用途。实际偏离须完整路线审查及逐真实原子交换，不得藏零。 | condale-pc; covestro-et-2016; un-cpc3-2025 |
| boundary_source_context | all processes | 工业来源是独立定性技术综合，非同SKU牌号配方工厂。Condale英国能力不证明中国制造；各公用工程地域和供方须实际相容。来源工艺阈值尺寸收率密度单件质量能耗寿命认证均非默认。保留实际图纸及光学尺寸机械验收；树脂阻燃等级不是扩散罩或整灯批准。 | condale-pc; condale-lighting; covestro-pc-2018; covestro-et-2016 |
| boundary_route | manufacture | 纳入实际完整粒料到扩散罩转化及已安装公用工程。记录实际干燥或熔融脱气、模头定型冷却牵引切长及光学不合格。不得假定燃料蒸汽锅炉、洗涤治理装置或制冷剂。实际新增操作须列具体原子输入输出并复核适用性。 | covestro-pc-2018; condale-manufacture; ifc-plastics-2007 |
| boundary_feed | pc_feed | 整份外购PC配方跨界一次；所含扩散剂和稳定剂为其成分子账。真实另加母粒混配改变路线，须列每份外购制剂、混合能耗和损失。内部回磨料保留配置污染热历史及逐流继承负荷，不当新增原生采购或免费料。 | covestro-et-2016; ifc-plastics-2007 |
| boundary_stocks | all processes | 原料、在制、成品、水回路、油充填、制冷剂充填和治理存量采用互斥账户，各带期初期末数量状态及逐流继承向量。循环水和设备充填不再次计入在制。原料领用反映真实存变；保留历史批次及原分母，缺继承向量阻塞具体定量包。 | ilcd-general-2010 |
| boundary_gates | all processes | 制造Q仅首次质量放行一次，同批期末成品已含Q。放行后服务归属实际受服务批次期间，含未发库存；保留期初期末成品历史、总发运及外退双方向。复验不造产量，实际增量返工只归原批次一次。合并抵消内部Q移交和内部回收但不抹负荷。 | ilcd-general-2010 |
| boundary_water | manufacture | 分开外购补水、原料游离水、回路水、冷凝液、实际蒸发、水相废物及外部产品返还。外部换热水记录实收实返总量及温压焓、供方水能约定。不得由单一残差假定反应或水合脱水；质量及相关元素平衡独立于物种和反应水证据。 | ifc-plastics-2007 |
| boundary_species | manufacture | 逐真实化学品及去向核对SDS过程出口证据。IFC表4无PC，不能转用其他聚合物物种或因子。苯酚及R134a卡仅条件行，不证明排放。VOC/COD/TOC及未表征损失仍为指标或不确定性，定量完成前独立识别物种并逐列正确介质。 | ifc-plastics-2007 |
| boundary_packaging | all processes | 每种包材分别：期初空包装+期初在制成品附着+期初可重复库存+外购+外退接收=对应期末存量+随总实物发运包装+另对外返还+废物。内部复用抵消；分配复用不得减少真实外出质量。包装不是裸扩散罩Q，复用不是新购，也不自动成为共产品或信用。进料袋及各服务包材分账。 | ilcd-general-2010 |

## 6. 过程清单结构

### 过程图

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| manufacture | 完整粒料到扩散罩制造及首次放行 | required | 实际完整路线及已安装工序 | 前景制造 | 每 1 kg 参考流 |
| supply_services | 实际放行后供货服务及交接移动 | required | 实际观察到的同批服务区间 | 分报增量服务及实物存量 | 每 1 kg 参考流 |

每卡为一个具体物理交换；条件行须真实存在或缺席证据，未测不等于零。发现真实未列流须逐原料、公用工程、包装、废物和物种增列，并复核改变的路线。每卡及采集聚合仅引用calc_reference同一次已算结果，不再除Q。物理总量独立保存；实物流不因负荷分配而缩小。

### 过程：完整粒料到扩散罩制造及首次放行 (`manufacture`)

#### 输入

##### 产品流

###### 整份供货PC粒料 (`pc_feed`)

实际整份外购原生无增强PC粒料配方，包含供货时已有的扩散或稳定组分。原生记录是PC颗粒产品流，全球厂内生产混合，以质量为参考；未指定CAS、固定线性或支化结构、牌号、颜料配方及独立供货地域字段。全球混合不是已核实的场址供方。核对实际挤出级完整配方、原生来源和光学验收；不得绑定PC/PBT共混料、外部再生料、内部回磨料或电子壳体代理。组分仅作成分子账，不重复采购。 参考单位组：质量单位 `93a60a57-a4c8-11da-a746-0800200c9a66`; 参考单位kg.

- 选定流：聚碳酸酯颗粒 `f4ad7c9a-3141-4c38-b932-45b7e67e05c6`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：引用本行同一次已算x_i结果；原始记录用cp_material。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_material`
- 来源：`covestro-pc-2018`; `covestro-et-2016`

###### 制造电力 (`production_electricity`)

原生产品流是中国1–35千伏电网平均、到用户的交流电消费组合，参考属性为净热值，按MJ能量记录。仅用于实际中国中压厂界购电；实际变压器及后续配电损失须与支路负荷核对。其他地域、电压或供电路线需另核实流和供方。厂内干燥机、挤出机、模头加热、牵引、锯切、粉碎、抽风、压缩机和冷机只计一次外购电，内部生成服务不再重复采购。 参考单位组：能量单位 `93a60a57-a3c8-11da-a746-0800200c9a66`; 参考单位MJ.

- 选定流：交流电 `3d76981f-964a-4865-b588-0e067a2a1163`
- 流属性/单位：净热值 `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则：引用本行同一次已算x_i结果；原始记录用cp_energy。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_energy`
- 来源：`covestro-pc-2018`; `ifc-plastics-2007`

###### 冷却系统自来水补给 (`cooling_makeup`)

记录实际冷却补水，不计内部循环总量。实际跨厂界的处理自来水供给；原生产品流是市政或饮用水生产供给，以质量为参考，flowInformation未固定地域。次级体积系数是原生元数据，不是实测密度。核对实际水源、处理和状态；不代表原水、去离子水、循环水或对外换热回水。补水实测，并区分实际清洗和冷却去向。 参考单位组：质量单位 `93a60a57-a4c8-11da-a746-0800200c9a66`; 参考单位kg.

- 选定流：自来水 `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：引用本行同一次已算x_i结果；原始记录用cp_water。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_water`
- 来源：`ifc-plastics-2007`

###### 实际设备清洗水 (`cleaning_water`)

仅实际湿洗时纳入；干法清理不得虚构洗水。实际跨厂界的处理自来水供给；原生产品流是市政或饮用水生产供给，以质量为参考，flowInformation未固定地域。次级体积系数是原生元数据，不是实测密度。核对实际水源、处理和状态；不代表原水、去离子水、循环水或对外换热回水。补水实测，并区分实际清洗和冷却去向。 参考单位组：质量单位 `93a60a57-a4c8-11da-a746-0800200c9a66`; 参考单位kg.

- 选定流：自来水 `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：引用本行同一次已算x_i结果；原始记录用cp_water。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_water`
- 来源：`ifc-plastics-2007`

###### 齿轮箱润滑油制剂 (`gear_oil`)

仅实际整份供货齿轮油；记录牌号、在机库存、补充和排放去向。依据真实设备服务历史归属，不能将装机充填量直接当消耗。 参考单位组：质量单位 `93a60a57-a4c8-11da-a746-0800200c9a66`; 参考单位kg.

- 选定流：矿物齿轮润滑油制剂
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：引用本行同一次已算x_i结果；原始记录用cp_aux。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_aux`
- 来源：`ifc-plastics-2007`

###### 实际R134a回路补充 (`r134a_supply`)

仅经核实的实际R134a回路；记录期初期末充填、购入、回收和物种特定损失；其他制冷剂需另列具体交换。 参考单位组：质量单位 `93a60a57-a4c8-11da-a746-0800200c9a66`; 参考单位kg.

- 选定流：1,1,1,2-四氟乙烷制冷剂
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：引用本行同一次已算x_i结果；原始记录用cp_aux。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_aux`
- 来源：`ifc-plastics-2007`

###### 实际碱性清洗制剂 (`alkaline_cleaner`)

仅实际相容的设备湿洗时纳入。整份外购溶液采购一次，含量和载水仅为子账。厂内真实稀释仅另计实加水；核实PC相容性且无残留表面处理。 参考单位组：质量单位 `93a60a57-a4c8-11da-a746-0800200c9a66`; 参考单位kg.

- 选定流：氢氧化钠水溶液清洗制剂
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：引用本行同一次已算x_i结果；原始记录用cp_aux。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_aux`
- 来源：`ifc-plastics-2007`

###### 实际治理活性炭装填 (`activated_carbon`)

仅实际安装的吸附治理；保留炭库存、更换、捕获物种和废炭去向。不假定治理装置或去除效率。 参考单位组：质量单位 `93a60a57-a4c8-11da-a746-0800200c9a66`; 参考单位kg.

- 选定流：颗粒活性炭
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：引用本行同一次已算x_i结果；原始记录用cp_aux。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_aux`
- 来源：`ifc-plastics-2007`

###### 进厂粒料包装袋 (`inlet_sack`)

仅实际随料到厂的LDPE袋，皮重与树脂分开。即使上游树脂供方已计包装负荷，实物袋交换仍保留，并披露已计边界以免再次购入背景负荷。其他供货包装须另列。 参考单位组：质量单位 `93a60a57-a4c8-11da-a746-0800200c9a66`; 参考单位kg.

- 选定流：LDPE粒料供货袋
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：引用本行同一次已算x_i结果；原始记录用cp_packaging_in。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_packaging_in`
- 来源：`ifc-plastics-2007`

###### 空粒料袋外退接收 (`inlet_sack_return_received`)

仅实际外部空袋退回，与随新树脂到厂的袋分开。保留原包装历史和真实质量；复用不算新购。 参考单位组：质量单位 `93a60a57-a4c8-11da-a746-0800200c9a66`; 参考单位kg.

- 选定流：LDPE粒料供货袋
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：引用本行同一次已算x_i结果；原始记录用cp_packaging_in。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_packaging_in`
- 来源：`ifc-plastics-2007`

###### 外部换热水接收 (`exchange_water_in`)

仅实际外供冷却水。记录总质量、温压焓及供方水能约定；不等于自来水补水，不是内部循环。不假定蒸汽或锅炉。 参考单位组：质量单位 `93a60a57-a4c8-11da-a746-0800200c9a66`; 参考单位kg.

- 选定流：液态换热水
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：引用本行同一次已算x_i结果；原始记录用cp_water。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_water`
- 来源：`ifc-plastics-2007`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 随总实物发运外出的粒料袋 (`inlet_sack_gross_dispatch`)

仅该实际袋随总实物货物外出而非另列空袋返还时纳入；交接方向互斥，保留全质量。 参考单位组：质量单位 `93a60a57-a4c8-11da-a746-0800200c9a66`; 参考单位kg.

- 选定流：LDPE粒料供货袋
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：引用本行同一次已算x_i结果；原始记录用cp_packaging_in。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_packaging_in`
- 来源：`ifc-plastics-2007`

###### 新增首次质量放行 (`first_release`)

首次质量放行的一个明确图纸、配套接口和光学规格的裸单层PC灯具扩散罩。原生宽泛塑料灯具零件产品流为已制造成品、厂内生产混合，未指定CAS、聚合物、挤出路线、几何、性能、寿命或固定地域。仅用于此限定的已制造光学零件；不证明整灯、通用电气壳、绝缘配件或全分类适用。核对材料及配套尺寸、光学和机械验收。净零件质量不包含包装、LED或电气安装件。 参考单位组：质量单位 `93a60a57-a4c8-11da-a746-0800200c9a66`; 参考单位kg.

- 选定流：灯、照明装置、装有照明设备的广告牌、照牌及类似物品的未另列明的塑料部件 `9fec99da-b5dd-4be9-aa8e-44e0d758f3ba`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：1 千克
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_release`
- 来源：`condale-pc`; `condale-lighting`; `condale-manufacture`

###### 外部换热水返还 (`exchange_water_out`)

返还外部供方是真实产品输出，独立记录总质量、热状态和焓，与接收流及服务约定配对。同一水份不得再当补水或废水，不自动给余热信用。 参考单位组：质量单位 `93a60a57-a4c8-11da-a746-0800200c9a66`; 参考单位kg.

- 选定流：液态换热水
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：引用本行同一次已算x_i结果；原始记录用cp_water。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_water`
- 来源：`ifc-plastics-2007`

###### 空粒料袋对外返还 (`inlet_sack_return`)

仅记录实际向外部所有者返还的空袋质量和状态；区分废袋和内部复用。不是新增采购、产品Q或信用。 参考单位组：质量单位 `93a60a57-a4c8-11da-a746-0800200c9a66`; 参考单位kg.

- 选定流：LDPE粒料供货袋
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：引用本行同一次已算x_i结果；原始记录用cp_packaging_in。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_packaging_in`
- 来源：`ifc-plastics-2007`

##### 废物流

###### 对外输出PC废次料和切头 (`pc_rejects`)

称量离开制造门的具体无增强PC流，保留污染和处理身份。内部洁净回磨料带继承向量及热历史留在门内，不属于此对外废物流。 参考单位组：质量单位 `93a60a57-a4c8-11da-a746-0800200c9a66`; 参考单位kg.

- 选定流：PC挤出废次料和切头
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：引用本行同一次已算x_i结果；原始记录用cp_waste。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_waste`
- 来源：`ifc-plastics-2007`

###### 捕集PC粉尘 (`captured_pc_dust`)

记录实际锯切、粉碎和抽风系统捕获的颗粒，聚合物和污染状态与空气排放、废次料分开；不假定去除率。 参考单位组：质量单位 `93a60a57-a4c8-11da-a746-0800200c9a66`; 参考单位kg.

- 选定流：捕集PC颗粒物
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：引用本行同一次已算x_i结果；原始记录用cp_waste。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_waste`
- 来源：`ifc-plastics-2007`

###### 废齿轮油 (`spent_oil`)

实际排出的油及污染分析、去向；核对设备油存量、新油和真实损失，不将平衡残差当排放物种。 参考单位组：质量单位 `93a60a57-a4c8-11da-a746-0800200c9a66`; 参考单位kg.

- 选定流：废矿物齿轮润滑油
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：引用本行同一次已算x_i结果；原始记录用cp_waste。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_waste`
- 来源：`ifc-plastics-2007`

###### 回收待处理R134a (`recovered_r134a`)

实际外送处理的回收制冷剂；记录纯度、容器皮重、回收质量和去向。若成为合格销售产品须另审状态；回收不自动抵扣生产。 参考单位组：质量单位 `93a60a57-a4c8-11da-a746-0800200c9a66`; 参考单位kg.

- 选定流：回收1,1,1,2-四氟乙烷
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：引用本行同一次已算x_i结果；原始记录用cp_waste。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_waste`
- 来源：`ifc-plastics-2007`

###### 冷却排污水送处理 (`cooling_bleed`)

实际送处理的水相排污，整份废液含已表征组分；不得将其中组分再直接排入自然。区分对外产品回水和内部循环。 参考单位组：质量单位 `93a60a57-a4c8-11da-a746-0800200c9a66`; 参考单位kg.

- 选定流：冷却循环排污水
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：引用本行同一次已算x_i结果；原始记录用cp_waste。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_waste`
- 来源：`ifc-plastics-2007`

###### 设备清洗废液送处理 (`cleaning_effluent`)

实际整份清洗废液，含载入溶液成分及捕获污染物。记录水、固体、物种分析及去向；COD和TOC仍是指标，不能代表苯酚或其他化学质量。 参考单位组：质量单位 `93a60a57-a4c8-11da-a746-0800200c9a66`; 参考单位kg.

- 选定流：水性设备清洗废液
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：引用本行同一次已算x_i结果；原始记录用cp_waste。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_waste`
- 来源：`ifc-plastics-2007`

###### 废吸附活性炭 (`spent_carbon`)

仅实际废炭；保留捕获污染物身份及总湿干质量基准。内含污染物随废物流走，不同时作为直接排放。 参考单位组：质量单位 `93a60a57-a4c8-11da-a746-0800200c9a66`; 参考单位kg.

- 选定流：废颗粒活性炭
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：引用本行同一次已算x_i结果；原始记录用cp_waste。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_waste`
- 来源：`ifc-plastics-2007`

###### 废粒料包装袋 (`inlet_sack_waste`)

实际未返还的废袋按处理去向记账；保留污染、残料和皮重子账，不虚构树脂损失或回收信用。 参考单位组：质量单位 `93a60a57-a4c8-11da-a746-0800200c9a66`; 参考单位kg.

- 选定流：废LDPE粒料供货袋
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：引用本行同一次已算x_i结果；原始记录用cp_packaging_in。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_packaging_in`
- 来源：`ifc-plastics-2007`

##### 基本流

###### 实际排入空气的PC颗粒物 (`pc_dust_air`)

仅实际测得排入空气的聚合物特定颗粒；保留采样介质和粒径分布。未分粒径的PC总尘不能绑定PM2.5或PM10 UUID，也不能用通用VOC或捕集固体代替。 参考单位组：质量单位 `93a60a57-a4c8-11da-a746-0800200c9a66`; 参考单位kg.

- 选定流：PC颗粒物
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：引用本行同一次已算x_i结果；原始记录用cp_emissions。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_emissions`
- 来源：`ifc-plastics-2007`

###### 实际苯酚空气排放 (`phenol_air`)

仅条件筛查卡：只有实际树脂SDS和过程采样独立确认本空气出口苯酚时才计正质量。IFC表4无PC条目，不能证明此物种。未表征有机排放保留为数据包阻塞，不强填为苯酚或零。 参考单位组：质量单位 `93a60a57-a4c8-11da-a746-0800200c9a66`; 参考单位kg.

- 选定流：苯酚
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：引用本行同一次已算x_i结果；原始记录用cp_emissions。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_emissions`
- 来源：`ifc-plastics-2007`

###### 实际水蒸气空气排放 (`water_vapour_air`)

独立识别实际干燥和冷却蒸发，保留湿度、冷凝液和回路存量。原料游离水及冷却蒸发分别追踪；不得由质量残差假定反应水或化学结合水脱除。 参考单位组：质量单位 `93a60a57-a4c8-11da-a746-0800200c9a66`; 参考单位kg.

- 选定流：水蒸气
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：引用本行同一次已算x_i结果；原始记录用cp_emissions。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_emissions`
- 来源：`ifc-plastics-2007`

###### 实际R134a空气泄漏 (`r134a_air`)

仅经核实进入空气介质的R134a质量，与独立充填、回收证据及实测库存变化核对；无默认泄漏因子，不重复计回收量。 参考单位组：质量单位 `93a60a57-a4c8-11da-a746-0800200c9a66`; 参考单位kg.

- 选定流：1,1,1,2-四氟乙烷
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：引用本行同一次已算x_i结果；原始记录用cp_emissions。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_emissions`
- 来源：`ifc-plastics-2007`

### 过程：实际放行后供货服务及交接移动 (`supply_services`)

#### 输入

##### 产品流

###### 实际放行后服务电力 (`service_electricity`)

仅识别首次放行批次及实际服务期间的包装、仓储、搬运和发运增量负荷，不再次产生制造负荷。原生产品流是中国1–35千伏电网平均、到用户的交流电消费组合，参考属性为净热值，按MJ能量记录。仅用于实际中国中压厂界购电；实际变压器及后续配电损失须与支路负荷核对。其他地域、电压或供电路线需另核实流和供方。厂内干燥机、挤出机、模头加热、牵引、锯切、粉碎、抽风、压缩机和冷机只计一次外购电，内部生成服务不再重复采购。 参考单位组：能量单位 `93a60a57-a3c8-11da-a746-0800200c9a66`; 参考单位MJ.

- 选定流：交流电 `3d76981f-964a-4865-b588-0e067a2a1163`
- 流属性/单位：净热值 `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则：引用本行同一次已算x_i结果；原始记录用cp_service。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_service`
- 来源：`ilcd-general-2010`

###### 瓦楞运输纸箱 (`carton_acquisition`)

实际外购；保留期初空包装、附着及可重复包装存量，区分内部复用。仅一个整份供货瓦楞运输纸箱。泛化的未指定包装材料原生记录不能证明这一原子纸箱身份，本行不采用原生流UUID。选择兼容流及供方数据前，核实实际纸箱结构、纤维组成、牌号、涂层、供方和上游边界。独立称量实际整只纸箱。胶带、保护套及其他包装制品仍是独立交换；不得从已拒绝的泛化身份推定全球生产混合或上游路线。 参考单位组：质量单位 `93a60a57-a4c8-11da-a746-0800200c9a66`; 参考单位kg.

- 选定流：瓦楞运输纸箱
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：引用本行同一次已算x_i结果；原始记录用cp_packaging。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_packaging`
- 来源：`ilcd-general-2010`

###### 瓦楞运输纸箱 (`carton_return_received`)

实际外部退回；即使不发生新购负荷也保留实物质量。仅一个整份供货瓦楞运输纸箱。泛化的未指定包装材料原生记录不能证明这一原子纸箱身份，本行不采用原生流UUID。选择兼容流及供方数据前，核实实际纸箱结构、纤维组成、牌号、涂层、供方和上游边界。独立称量实际整只纸箱。胶带、保护套及其他包装制品仍是独立交换；不得从已拒绝的泛化身份推定全球生产混合或上游路线。 参考单位组：质量单位 `93a60a57-a4c8-11da-a746-0800200c9a66`; 参考单位kg.

- 选定流：瓦楞运输纸箱
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：引用本行同一次已算x_i结果；原始记录用cp_packaging。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_packaging`
- 来源：`ilcd-general-2010`

###### LDPE保护套购入 (`sleeve_acquisition`)

实际外购；保留期初空包装、附着及可重复包装存量，区分内部复用。一个实际完整LDPE保护套；核对供货配方、尺寸和皮重。不合并纸板、胶带、扩散罩或其他包材质量。 参考单位组：质量单位 `93a60a57-a4c8-11da-a746-0800200c9a66`; 参考单位kg.

- 选定流：LDPE保护套
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：引用本行同一次已算x_i结果；原始记录用cp_packaging。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_packaging`
- 来源：`ilcd-general-2010`

###### LDPE保护套外退接收 (`sleeve_return_received`)

实际外部退回；即使不发生新购负荷也保留实物质量。一个实际完整LDPE保护套；核对供货配方、尺寸和皮重。不合并纸板、胶带、扩散罩或其他包材质量。 参考单位组：质量单位 `93a60a57-a4c8-11da-a746-0800200c9a66`; 参考单位kg.

- 选定流：LDPE保护套
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：引用本行同一次已算x_i结果；原始记录用cp_packaging。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_packaging`
- 来源：`ilcd-general-2010`

###### 聚丙烯背材丙烯酸胶包装胶带购入 (`tape_acquisition`)

实际外购；保留期初空包装、附着及可重复包装存量，区分内部复用。实际一份完整聚丙烯背材丙烯酸胶带，外购品已含胶和背材；计量实际附着胶带及废料。不另购胶，也不由其他已审胶带推定其成分。 参考单位组：质量单位 `93a60a57-a4c8-11da-a746-0800200c9a66`; 参考单位kg.

- 选定流：聚丙烯背材丙烯酸胶包装胶带
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：引用本行同一次已算x_i结果；原始记录用cp_packaging。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_packaging`
- 来源：`ilcd-general-2010`

###### 聚丙烯背材丙烯酸胶包装胶带外退接收 (`tape_return_received`)

实际外部退回；即使不发生新购负荷也保留实物质量。实际一份完整聚丙烯背材丙烯酸胶带，外购品已含胶和背材；计量实际附着胶带及废料。不另购胶，也不由其他已审胶带推定其成分。 参考单位组：质量单位 `93a60a57-a4c8-11da-a746-0800200c9a66`; 参考单位kg.

- 选定流：聚丙烯背材丙烯酸胶包装胶带
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：引用本行同一次已算x_i结果；原始记录用cp_packaging。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_packaging`
- 来源：`ilcd-general-2010`

###### 裸扩散罩外退接收 (`fg_return_received`)

实际外退的已放行裸扩散罩；携带原放行ID、历史分母和逐流继承向量。复验不是新生产。首次质量放行的一个明确图纸、配套接口和光学规格的裸单层PC灯具扩散罩。原生宽泛塑料灯具零件产品流为已制造成品、厂内生产混合，未指定CAS、聚合物、挤出路线、几何、性能、寿命或固定地域。仅用于此限定的已制造光学零件；不证明整灯、通用电气壳、绝缘配件或全分类适用。核对材料及配套尺寸、光学和机械验收。净零件质量不包含包装、LED或电气安装件。 参考单位组：质量单位 `93a60a57-a4c8-11da-a746-0800200c9a66`; 参考单位kg.

- 选定流：灯、照明装置、装有照明设备的广告牌、照牌及类似物品的未另列明的塑料部件 `9fec99da-b5dd-4be9-aa8e-44e0d758f3ba`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：引用本行同一次已算x_i结果；原始记录用cp_fg。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_fg`
- 来源：`condale-pc`; `ilcd-general-2010`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 瓦楞运输纸箱 (`carton_gross_dispatch`)

实际随总实物发运离开的包装，含旧成品和重发；分配或复用不得减少此实物质量。仅一个整份供货瓦楞运输纸箱。泛化的未指定包装材料原生记录不能证明这一原子纸箱身份，本行不采用原生流UUID。选择兼容流及供方数据前，核实实际纸箱结构、纤维组成、牌号、涂层、供方和上游边界。独立称量实际整只纸箱。胶带、保护套及其他包装制品仍是独立交换；不得从已拒绝的泛化身份推定全球生产混合或上游路线。 参考单位组：质量单位 `93a60a57-a4c8-11da-a746-0800200c9a66`; 参考单位kg.

- 选定流：瓦楞运输纸箱
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：引用本行同一次已算x_i结果；原始记录用cp_packaging。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_packaging`
- 来源：`ilcd-general-2010`

###### 瓦楞运输纸箱 (`carton_return_sent`)

实际另向外部所有者或供方返还；不重复计随总发运已列的包装。仅一个整份供货瓦楞运输纸箱。泛化的未指定包装材料原生记录不能证明这一原子纸箱身份，本行不采用原生流UUID。选择兼容流及供方数据前，核实实际纸箱结构、纤维组成、牌号、涂层、供方和上游边界。独立称量实际整只纸箱。胶带、保护套及其他包装制品仍是独立交换；不得从已拒绝的泛化身份推定全球生产混合或上游路线。 参考单位组：质量单位 `93a60a57-a4c8-11da-a746-0800200c9a66`; 参考单位kg.

- 选定流：瓦楞运输纸箱
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：引用本行同一次已算x_i结果；原始记录用cp_packaging。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_packaging`
- 来源：`ilcd-general-2010`

###### LDPE保护套随总发运输出 (`sleeve_gross_dispatch`)

实际随总实物发运离开的包装，含旧成品和重发；分配或复用不得减少此实物质量。一个实际完整LDPE保护套；核对供货配方、尺寸和皮重。不合并纸板、胶带、扩散罩或其他包材质量。 参考单位组：质量单位 `93a60a57-a4c8-11da-a746-0800200c9a66`; 参考单位kg.

- 选定流：LDPE保护套
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：引用本行同一次已算x_i结果；原始记录用cp_packaging。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_packaging`
- 来源：`ilcd-general-2010`

###### LDPE保护套对外返还 (`sleeve_return_sent`)

实际另向外部所有者或供方返还；不重复计随总发运已列的包装。一个实际完整LDPE保护套；核对供货配方、尺寸和皮重。不合并纸板、胶带、扩散罩或其他包材质量。 参考单位组：质量单位 `93a60a57-a4c8-11da-a746-0800200c9a66`; 参考单位kg.

- 选定流：LDPE保护套
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：引用本行同一次已算x_i结果；原始记录用cp_packaging。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_packaging`
- 来源：`ilcd-general-2010`

###### 聚丙烯背材丙烯酸胶包装胶带随总发运输出 (`tape_gross_dispatch`)

实际随总实物发运离开的包装，含旧成品和重发；分配或复用不得减少此实物质量。实际一份完整聚丙烯背材丙烯酸胶带，外购品已含胶和背材；计量实际附着胶带及废料。不另购胶，也不由其他已审胶带推定其成分。 参考单位组：质量单位 `93a60a57-a4c8-11da-a746-0800200c9a66`; 参考单位kg.

- 选定流：聚丙烯背材丙烯酸胶包装胶带
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：引用本行同一次已算x_i结果；原始记录用cp_packaging。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_packaging`
- 来源：`ilcd-general-2010`

###### 聚丙烯背材丙烯酸胶包装胶带对外返还 (`tape_return_sent`)

实际另向外部所有者或供方返还；不重复计随总发运已列的包装。实际一份完整聚丙烯背材丙烯酸胶带，外购品已含胶和背材；计量实际附着胶带及废料。不另购胶，也不由其他已审胶带推定其成分。 参考单位组：质量单位 `93a60a57-a4c8-11da-a746-0800200c9a66`; 参考单位kg.

- 选定流：聚丙烯背材丙烯酸胶包装胶带
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：引用本行同一次已算x_i结果；原始记录用cp_packaging。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_packaging`
- 来源：`ilcd-general-2010`

###### 裸扩散罩总实物发运 (`fg_gross_dispatch`)

实际裸扩散罩总实物发运，含旧成品和重发，与制造Q分报。合并时抵消内部首次放行移交，不把本行再加进Q。首次质量放行的一个明确图纸、配套接口和光学规格的裸单层PC灯具扩散罩。原生宽泛塑料灯具零件产品流为已制造成品、厂内生产混合，未指定CAS、聚合物、挤出路线、几何、性能、寿命或固定地域。仅用于此限定的已制造光学零件；不证明整灯、通用电气壳、绝缘配件或全分类适用。核对材料及配套尺寸、光学和机械验收。净零件质量不包含包装、LED或电气安装件。 参考单位组：质量单位 `93a60a57-a4c8-11da-a746-0800200c9a66`; 参考单位kg.

- 选定流：灯、照明装置、装有照明设备的广告牌、照牌及类似物品的未另列明的塑料部件 `9fec99da-b5dd-4be9-aa8e-44e0d758f3ba`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：引用本行同一次已算x_i结果；原始记录用cp_fg。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_fg`
- 来源：`condale-pc`; `ilcd-general-2010`

###### 裸扩散罩对外返还 (`fg_return_sent`)

实际另行对外返还的裸扩散罩，与总发运交接互斥；保留原批次、原因及去向，不产生新制造。首次质量放行的一个明确图纸、配套接口和光学规格的裸单层PC灯具扩散罩。原生宽泛塑料灯具零件产品流为已制造成品、厂内生产混合，未指定CAS、聚合物、挤出路线、几何、性能、寿命或固定地域。仅用于此限定的已制造光学零件；不证明整灯、通用电气壳、绝缘配件或全分类适用。核对材料及配套尺寸、光学和机械验收。净零件质量不包含包装、LED或电气安装件。 参考单位组：质量单位 `93a60a57-a4c8-11da-a746-0800200c9a66`; 参考单位kg.

- 选定流：灯、照明装置、装有照明设备的广告牌、照牌及类似物品的未另列明的塑料部件 `9fec99da-b5dd-4be9-aa8e-44e0d758f3ba`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：引用本行同一次已算x_i结果；原始记录用cp_fg。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_fg`
- 来源：`condale-pc`; `ilcd-general-2010`

##### 废物流

###### 废瓦楞运输纸箱 (`carton_waste`)

实际跨往明确处理去向的废包装，所附残留为成分子账。此具体废物未采用原生UUID；核对实际整件组成污染及去向，不将产品身份当废物身份。 参考单位组：质量单位 `93a60a57-a4c8-11da-a746-0800200c9a66`; 参考单位kg.

- 选定流：废瓦楞运输纸箱
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：引用本行同一次已算x_i结果；原始记录用cp_packaging。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_packaging`
- 来源：`ilcd-general-2010`

###### LDPE保护套废物 (`sleeve_waste`)

实际跨往明确处理去向的废包装，所附残留为成分子账。此具体废物未采用原生UUID；核对实际整件组成污染及去向，不将产品身份当废物身份。 参考单位组：质量单位 `93a60a57-a4c8-11da-a746-0800200c9a66`; 参考单位kg.

- 选定流：废LDPE保护套
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：引用本行同一次已算x_i结果；原始记录用cp_packaging。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_packaging`
- 来源：`ilcd-general-2010`

###### 聚丙烯背材丙烯酸胶包装胶带废物 (`tape_waste`)

实际跨往明确处理去向的废包装，所附残留为成分子账。此具体废物未采用原生UUID；核对实际整件组成污染及去向，不将产品身份当废物身份。 参考单位组：质量单位 `93a60a57-a4c8-11da-a746-0800200c9a66`; 参考单位kg.

- 选定流：废聚丙烯背材丙烯酸胶带
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：引用本行同一次已算x_i结果；原始记录用cp_packaging。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_packaging`
- 来源：`ilcd-general-2010`

###### 放行后扩散罩废次品 (`fg_waste`)

首次放行后实际送处理的不可恢复成品；保留原负荷及原因。实际返工仍归原批次，仅计一次增量，不产生第二个Q。 参考单位组：质量单位 `93a60a57-a4c8-11da-a746-0800200c9a66`; 参考单位kg.

- 选定流：PC扩散罩废次品
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：引用本行同一次已算x_i结果；原始记录用cp_fg。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_fg`
- 来源：`ifc-plastics-2007`

##### 基本流

## 7. 分配与共产品处理

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| allocation_scope | all processes | 仅在明确归因且需要分配的清单使用本顺序。先独立专用工序，再按实际过程理解和测量细分或虚拟细分。专用树脂、光学废次料及失败运行留在致因批次。 | ilcd-general-2010 |
| allocation_causality | shared exchanges | 逐残余交换识别决定性物理因果，并检验其为何控制数量。挤出负载时长、冷却移热、仓储占用体积面积与时长可以不同；方便代理不等于因果。无统一质量时间份额、固定比例或任意物理经济选择。 | ilcd-general-2010 |
| allocation_residual | genuinely residual multifunctional processes | 仅记录细分及逐交换决定性因果为何无法解决真实残余后，采用共同过程门、实际供货状态的同期数量乘市场价值。须扣除下游调理包装运输交易增值以还原门值。价格未知或非正、共功能状态不明或缺测均需审查，不能自动分配；保留敏感性和不确定性。 | ilcd-general-2010 |
| allocation_recovery | internal and exported recovery | 内部回磨和复用带负荷并抵消内部移交。独立确定各外流是废物、处理服务或产品；出售不自动获得替代原生信用。物理平衡用未分配真实数量，不用负荷份额；外售回收产品方法须另审。 | ilcd-general-2010 |
| asset_manufacture_conservation | 既有资本品及可复用制品制造归属 | 在适用的分配决策情境内，对前景生产、包装或已观察服务中已纳入的实际资本设备或可复用制品按用途归属原始制造负荷时，必须按同一资产建立跨全部作物、产品、批次、制造及放行后服务、所有者和观察期的持久台账。D为有证据支持的完整安装服务总量，即全部已实现历史服务加有依据的剩余服务，其单位须与各受益用途实际服务量u一致；D须为有限正值。当期容量、仅剩余容量、资产或制品自身实物质量以及仅当期产品Q均不能直接作为D；若有证据证明因果服务且与u单位相符，完整服务期的质量通量可用作分母。本规则不按下游寿命摊销本PCR制造的参考产品，也不改变其声明的参考门及Q。u/D与此前已分配的制造份额累计不得超过1。观察期、保管方、供方或维修变化不能重置原始制造负荷余额。替换件使用独立身份，仅计真实新增制造向量；实际维修和处理增量另行保留。服务容量证据修订时，应透明追溯调整既有份额并作敏感性分析，不得另起台账。完整实物质量及存量变动独立于负荷份额。D、既有份额或受益范围不明时须复核，不得给出最终制造负荷归属量；不得假定寿命、利用率、零值或任意分摊。 |  |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

对本路线既有采集协议中按用途归属已纳入生产、包装或已观察服务资产制造负荷的情形（不摊销本PCR制造的参考产品本身），还须保留持久资产身份、实测完整实物质量及购入/安装/退役存量历史、原始制造负荷向量、全部历史及当前受益用途、同单位服务读数、有证据的完整安装服务分母D、剩余服务依据与不确定性、此前已分配份额及剩余原始制造负荷余额。台账跨观察期及保管方/供方变化持续结转。实际维修、替换、回收和处理分别采集；这些记录不能归一化实物流量或构成另一次资产购入。这些是既有适用协议的补充字段与守恒要求，不是新增假定的资本品清单。

先采原始未除数据。aggregation_rule仅标明最终去向基准，不实施算术；先calc_units原单位与速率处理，再calc_attribution归属及继承，最后calc_reference只除Q一次。历史服务批次保留原Q及逐流负荷，不借当前Q重归一。

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_material | manufacture | 完整粒料及原料在制谱系 | 原始前景记录 | 批次; 牌号; 供货组成; 接收领退重量; 原料期初期末; 在制数量状态及逐流向量; 回磨热历史 | 校准净称及供方文件；核对互斥原料在制存量、内部回收和失败批次 | kg | 每次实物移动或计量区间及存量边界 | 完整生产周期及观察到的服务区间，含零产出记录 | 实际场址产线配置及原批次 | 每 1 kg 参考流 | 校准原始记录完整存量向量核对及不确定性 |
| cp_energy | manufacture | 实际外购及支路电力 | 原始前景记录 | 场址国家; 购电电压; 起止电表; 原单位; 支路设备负荷时长; 停启待机清理; 变配电损失 | 核对校准总表支表；仅真实功率速率积分；保留原始kWh或MJ及真实共享负荷因果 | kWh or MJ | 每次实物移动或计量区间及存量边界 | 完整生产周期及观察到的服务区间，含零产出记录 | 实际场址产线配置及原批次 | 每 1 kg 参考流 | 校准原始记录完整存量向量核对及不确定性 |
| cp_water | manufacture | 水及热状态交换 | 原始前景记录 | 各水源出口; 总质量或已积分体积; 真实速率时间; 密度方法温压; 湿度; 水回路期初期末; 游离水; 冷凝液; 换热返还焓; 供方约定 | 校准表称，需换算则独立测状态特定密度；闭合互斥回路账户；区分内部循环和外购返还 | kg and actual thermal units | 每次实物移动或计量区间及存量边界 | 完整生产周期及观察到的服务区间，含零产出记录 | 实际场址产线配置及原批次 | 每 1 kg 参考流 | 校准原始记录完整存量向量核对及不确定性 |
| cp_aux | manufacture | 分别采整份清洗剂油制冷剂和炭 | 原始前景记录 | 具体制剂; 供货含量; 接收净量; 实加; 设备充填期初期末; 库存; 回收; 废物; 泄漏证据 | 各制剂整份称量一次，保留组分子账及独立充填回收核对；真实缺席须证据，不能假零 | kg | 每次实物移动或计量区间及存量边界 | 完整生产周期及观察到的服务区间，含零产出记录 | 实际场址产线配置及原批次 | 每 1 kg 参考流 | 校准原始记录完整存量向量核对及不确定性 |
| cp_waste | manufacture | 各实际废物流及处理去向 | 原始前景记录 | 流身份; 状态; 净重; 湿干基; 分析; 处理; 日期; 内外区分; 废次批次 | 分流称量并核对处理凭据及内含物，不重复作直接排放 | kg | 每次实物移动或计量区间及存量边界 | 完整生产周期及观察到的服务区间，含零产出记录 | 实际场址产线配置及原批次 | 每 1 kg 参考流 | 校准原始记录完整存量向量核对及不确定性 |
| cp_emissions | manufacture | 各独立识别化学物及接收介质 | 原始前景记录 | 物种身份; 已识别CAS; 粒径; 出口介质; 采样时间; 浓度; 真实速率或已积分体积; 温压湿度; 检出不确定性; 治理及充填证据 | 独立识别化学品和介质；速率积分前换采样单位。各真实去向核对；指标及未解释残差不能变成物种质量 | kg per species before reference division | 每次实物移动或计量区间及存量边界 | 完整生产周期及观察到的服务区间，含零产出记录 | 实际场址产线配置及原批次 | 每 1 kg 参考流 | 校准原始记录完整存量向量核对及不确定性 |
| cp_release | manufacture | 唯一首次放行及扩散罩净质量 | 原始前景记录 | 配置; 配套图纸; 批次; 唯一放行ID; 冷却净质量; 毛重及可拆皮重; 实际光学尺寸机械试验; 既往放行标志; 返工谱系 | 验收后校准称量；与旧成品退货去重首次放行ID；保留失败，仅唯一新增裸千克计Q | kg | 每次实物移动或计量区间及存量边界 | 完整生产周期及观察到的服务区间，含零产出记录 | 实际场址产线配置及原批次 | 每 1 kg 参考流 | 校准原始记录完整存量向量核对及不确定性 |
| cp_packaging_in | manufacture | 粒料袋交接及废物分别记录 | 原始前景记录 | 材质; 皮重; 期初期末空附着可重复库存; 外部接收; 外退接收; 对外返还; 废物; 上游已含负荷 | 称量真实袋移动并确认供方包装边界；保留完整身份，不与树脂净量重叠 | kg | 每次实物移动或计量区间及存量边界 | 完整生产周期及观察到的服务区间，含零产出记录 | 实际场址产线配置及原批次 | 每 1 kg 参考流 | 校准原始记录完整存量向量核对及不确定性 |
| cp_packaging | supply_services | 纸箱保护套胶带各交接流分别采 | 原始前景记录 | 包装材质; 批次; 期初期末空附着在制成品可重复库存; 外购; 外退接收; 总发运附着; 另对外返还; 废物; 组成供方 | 逐材质方向校准称量及移动退回处理凭据；内部复用抵消且不改变总外出数量 | kg | 每次实物移动或计量区间及存量边界 | 完整生产周期及观察到的服务区间，含零产出记录 | 实际场址产线配置及原批次 | 每 1 kg 参考流 | 校准原始记录完整存量向量核对及不确定性 |
| cp_fg | supply_services | 成品实物及原批次历史 | 原始前景记录 | 批次; 原放行ID; 原Q; 逐流继承向量; 期初期末成品; 新内部移交; 外退接收; 总发运; 另对外返还; 实际返工损失 | 核对裸成品称量交接并追溯原放行；真实退货反向原发运交接，保留原负荷，实际增量返工服务仅计一次 | kg | 每次实物移动或计量区间及存量边界 | 完整生产周期及观察到的服务区间，含零产出记录 | 实际场址产线配置及原批次 | 每 1 kg 参考流 | 校准原始记录完整存量向量核对及不确定性 |
| cp_service | supply_services | 实际供货服务增量电力 | 原始前景记录 | 批次; 服务期间; 总支表读数; 库存占用体积面积时长; 实际搬运包装发运负荷; 旧原Q及向量 | 计量实际增量负荷并识别受服务批次；仅共享残余逐交换因果，未完成服务期间负荷明确结转 | kWh or MJ | 每次实物移动或计量区间及存量边界 | 完整生产周期及观察到的服务区间，含零产出记录 | 实际场址产线配置及原批次 | 每 1 kg 参考流 | 校准原始记录完整存量向量核对及不确定性 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| calc_units | all inventory rows | 归属前换原单位：电力MJ=实测kWh乘3.6；体积换质量用独立实测物质状态特定密度。仅真实速率积分一次；已积分体积不乘时长。保留原始观测和不确定性。 | raw_observations; native_units; measured_density; actual_rates | converted_raw |  |
| calc_release | first_release | Q=cp_release内同配置同批次唯一新增首次质量放行裸扩散罩净千克之和。同批期末成品已在Q内；旧退货复验重发不加Q。 | cp_release; configuration; cohort | Q | condale-pc; condale-lighting |
| calc_attribution | all inventory rows | A_i是换算后本行归属未归一数量，须核对互斥原料在制成品及设备回路期初期末存量向量并抵消内部移交。保留失败待机清理返工负荷，仅共享量逐交换实施第7节。真实交接输出仍用总实物数量，分配不得减质量。服务A_i为观察期间同批增量；旧批次保留原Q及逐流历史。 | converted_raw; opening_vectors; closing_vectors; allocation_evidence; internal_transfers; cohort_history | A_i | ilcd-general-2010 |
| calc_reference | all inventory rows | Q>0时仅一次x_i=A_i/Q。A_i为calc_attribution中本行明确单位的归属原始量；Q是calc_release首次放行千克。卡片和聚合仅引用此同一已存每1kg参考流结果。Q=0保留原始负荷不出单位结果。历史批次用原Q，不能用当前生产分母。 | A_i; Q; calc_attribution; calc_release | x_i |  |
| calc_physical | all processes | 闭合未分配制造质量：期初在制+各实际领用材料+互斥期初过程水油制冷剂炭存量=Q+期末在制+互斥期末存量+全部实际外出损失。原料仓另平衡。成品：期初成品+内部新Q移交+外退接收=期末成品+总发运+另对外返还+真实成品废物损失。合并抵消内部Q移交及回收；能量不是质量。不将同批期末成品加进制造Q。独立核对相关元素物种及实测水分不确定性，单残差不能解两个未知。 | cp_material; cp_water; cp_aux; cp_waste; cp_emissions; cp_release; cp_fg | unallocated_physical_balances |  |
| calc_packaging | all processes | 对每种包材及进料袋分别执行boundary_packaging；归属前保留真实总外出及外退双向。附着在制成品及可重复存量只计一次。内部复用抵消，只有外购产生新购负荷且须核对供方已含边界。 | cp_packaging_in; cp_packaging; cp_fg | package_material_balances |  |
| calc_quality | all inventory rows | 保留来源身份、测量不确定性、未检出限、库存历史及供方限制。化学去向未知、缺继承向量或核心路线参考不一致阻塞定量包完成；不编零、默认密度、固定损耗或合规。 | raw_observations; uncertainty; cp_release; cohort_history | quality_disclosures |  |
| asset_manufacture_share | 既有资本品及可复用制品制造归属 | 仅在持久台账核实有依据的完整安装服务分母、全部受益用途及既有已分配份额后，对每项已纳入原始资产制造向量B计算f_current = u_current / D。在既有单次参考量归一化前，将f_current * B仅一次归属于实际受益用途。检查prior_shares加全部当前/新增受益用途份额不超过1，并结转剩余原始余额。容量修订须追溯核对历史台账。完整实物资产/包装质量及实际总存量/退回量不得乘f_current。D或历史不明时，最终归属结果保持不可用，但仍保留实际维修、替换及服务负荷。 | asset_id; original_B; u_current; D; historical_beneficiaries; prior_shares; capacity_evidence | 守恒的制造负荷归属向量 |  |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| dq_identity | all inventory rows | 完整核对原生名限定备注CAS类型属性参考索引及全部地域；不能仅词匹配替代物种或粒径介质。UUID流中文用正式zh名。 | 核实身份链及真实供方相容性 |
| dq_coverage | all processes | 覆盖完整同批生产和实际服务的停启待机失败清理返工；不得只采优良运行或隐藏未拆总量。零产出与缺席证据分开。 | 日志表计BOM和不合格批记录 |
| dq_stocks | all processes | 互斥原料在制成品水回路及设备充填存量各带状态和逐流继承向量，不重叠；旧批次带原分母和退货历史。 | 期初期末核对及批次谱系 |
| dq_speciation | manufacture | 用独立物种去向证据；质量元素残差及COD/VOC不得推个别化学品或反应水。无通用来源因子或数字筛查阈值。 | SDS采样检出及热状态不确定性 |
| dq_applicability | reference product | 产品图纸及真实光学机械用途验收决定适用；树脂等级和制造能力不证明最终扩散罩或整灯认证寿命及光效等价。 | 实际合格放行证据和限制 |
| dq_uncertainty | all inventory rows | 分别披露时间地域过程门分配敏感性缺UUID供方及测量不确定性；普通未来场址量不编数字。 | 可追溯谱系及明确完整性声明 |

## 9. 校验规则

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| validate_basis | all inventory rows | 双语核对明确first_release产品输出链接和1kg净首次放行基准；核对原单位、归属及唯一A_i/Q，Q=0保留和历史分母。 | condale-pc |
| validate_route | reference product | 要求实际完整PC粒料到灯具扩散罩路线及产品验收。购入成品包装、壳体代理、改变层材或核心终端未证实均不适用；完整审实际改变工序。 | condale-pc; covestro-pc-2018 |
| validate_identity | all inventory rows | 各采用UUID须相容完整流及准确属性单位链证据，含地域介质。具体未定辅流仍逐一计量跟踪，不能用集合替代；各卡原生限制均执行。 |  |
| validate_balances | all processes | 闭合独立未分配原料在制成品设备水充填账户、每种包材及各真实外部去向；保留继承向量。不得用分配量、重复成品或未解释物种反应水残差闭合。 |  |
| validate_completeness | all processes | 保留全部失败待机清理返工零产出及条件存在缺席证据。核心身份路线基准未知或缺真实物种历史阻塞定量包；普通辅流UUID空缺不许可漏计。工程检查不批准科学翻译映射发布。 | ilcd-general-2010 |
| validate_asset_manufacture_conservation | 既有资本品及可复用制品制造归属 | 对每项已纳入资本品/可复用制品制造归属，检查同一资产连续性、同单位完整安装服务、全部历史及当前受益用途、既有已分配制造份额和累计份额不超过1。拒绝按观察期、批次、供方、所有者或维修重置。真实替换件及维修/处理增量向量分别核对，保留完整实物质量。分母缺失、既有分配无法解释或受益台账不完整时，须明确复核且最终归属量不可用；结构检查不能声称已获实测完整性。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 前景制造数据集及独立报告的实际供货服务账 |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | 匹配图纸验收的裸单层PC灯具扩散罩制造；可接整灯模型但不声称等价 |
| excluded_use | 整灯效率认证比较；通用建筑型材电气壳；未限定其他聚合物共挤路线；默认配方或排放 |
| required_metadata | 第3节全部限定；实际场址期间门原生限制供方身份逐行单位存量；独立服务区间及原批次 |
| required_quality_disclosure | 来源综合范围；独立身份供方不确定性；存量向量连续；条件覆盖物种和分配敏感性；定量包阻塞 |
| update_trigger | 材料牌号配方层路线配套验收公用工程门供方来源版本或清单物种变化须复核适用性 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| condale-pc | extension_guidance | Condale Plastics. Polycarbonate Extrusions. Publisher snapshot 2026-10-20. https://www.condaleplastics.com/materials/material-selection/polycarbonate-extrusions/ | 实际PC光学扩散件及非照明用途反例；定性终端证据 |
| condale-lighting | extension_guidance | Condale Plastics. Plastic Extrusions for Lighting. Publisher snapshot 2026-10-20. https://www.condaleplastics.com/applications/lighting/ | 专用挤出照明光学件及配套要求；不转移通用性能承诺 |
| condale-manufacture | extension_guidance | Condale Plastics. Plastic Extrusion Manufacturing. Publisher snapshot 2026-10-20. https://www.condaleplastics.com/services/plastic-extrusion-manufacturing/ | 制造能力及切长供货状态；不转移工厂数量 |
| covestro-pc-2018 | handbook | Covestro. Makrolon Product range Typical values. Edition 2018-02; pp.6–7 and disclaimer p.32. https://www.covestro.com/-/media/covestro/solution-center/brands/downloads/imported/1556888808.pdf | PC水分调理和挤出；脱气替代及特殊牌号例外；不采用工艺设定值 |
| covestro-et-2016 | handbook | Covestro. Makrolon ET – Resins for Extrusion and Thermoforming. Edition 2016-04; pp.3–8 including spanning table pp.4–5. https://www.covestro.com/-/media/covestro/solution-center/brands/downloads/imported/1556890009.pdf | 挤出级完整配方；UV共挤反例及组件阻燃试验限制 |
| ifc-plastics-2007 | official_guidance | IFC/World Bank Group. EHS Guidelines for Metal Plastic and Rubber Products Manufacturing. 30 April 2007; pp.1,9–11,22–23. https://www.ifc.org/content/dam/ifc/doc/2000/2007-metal-plastic-rubber-products-ehs-guidelines-en.pdf | 定性非反应挤出及环境清单完整性；表4无PC条目，不提供PC物种或因子 |
| ilcd-general-2010 | official_guidance | European Commission JRC. ILCD Handbook General guide for LCA Detailed guidance. First edition March2010; §§7.9.2–7.9.3 PDF275–288. https://eplca.jrc.ec.europa.eu/uploads/ILCD-Handbook-General-guide-for-LCA-DETAILED-GUIDANCE-12March2010-ISBN-fin-v1.0-EN.pdf | 归因情境先细分及逐交换因果，再对真实残余使用共同门市场价值；非工业工艺证据 |
| un-cpc3-2025 | official_guidance | UNSD. CPC Version3.0 Explanatory Notes. 30June2025; pp.177–179; repository original Structure CSV row36960. https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | 仅分类边界；36960没有补充实质制造说明 |
