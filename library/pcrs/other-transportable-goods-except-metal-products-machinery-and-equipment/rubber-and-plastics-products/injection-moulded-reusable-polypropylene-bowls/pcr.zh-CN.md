---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.rubber-and-plastics-products.injection-moulded-reusable-polypropylene-bowls
language: zh-CN
sync_with: pcr.en-US.md
status: candidate
content_maturity: authored_methodology
translation_status: aligned
---

# 单次注塑可重复使用聚丙烯家用餐碗制造

## 1. 范围与适用性

制造一种已明确规格、可重复使用、单件、非泡沫、无增强的PP家用盛食餐碗，采用单次螺杆注塑。由外购完整的原生未填充PP颗粒开始，颗粒可为本色或已完成着色/稳定化；包括接收储存、输送、实际调湿干燥、塑化、充模保压、冷却、脱模、浇口/飞边修整、可识别清洁内部回料、检验及新增首次质量放行。纳入实际公用工程生产/输配及失败、待机、清理操作。实际包装、仓储、搬运和发运在关联的独立服务账继续记录。本方法是由原料到终端的完整制造，不是外购成碗重新包装。`ineos-pp-processing-2007`; `ifc-plastic-products-2007`

PP加工指南与宜家供货餐碗构成透明的技术综合，不声称同一SKU、牌号、当代订单或工厂。产品示例不证明其未公开配方，PP通用特性不等同食品接触或微波批准。关联保养单明确禁止微波使用；须保留实际制品的专属说明和试验证据。本方法不默认采用来源中的温度、压力、回料比例、密度、包装重量、收率、寿命或能耗强度。`ikea-kalas-bowl`; `ikea-kalas-care`; `ineos-pp-processing-2007`

排除其他聚合物、外部再生料、填充/纤维增强/泡沫或多层制品、热固三聚氰胺餐具、片材热成型、注射压缩、吹塑/滚塑/压塑、盖子/手柄/组装、模内贴标、印刷/涂层、外施脱模剂、厂内颜料/色母配混或树脂造粒、一次性食品运装包装、浴缸/马桶盖/水箱、仅外购成品处理、医疗/无菌主张。实际偏离时必须复核适用性并完整增加原子投入/出口；不能以排除声明漏记真实操作。`ineos-pp-processing-2007`; `un-cpc3-2025`

CPC原注释第177–179页区分半成品363、包装364、卫生器具36930及家用餐厨制品36940，36940没有额外实质制造注释。独立身份来自餐碗家用功能及这条完整具体路线，而非分类叶本身。质量是生产声明单位，不等同碗的容积、耐久性或消费者服务等价。`un-cpc3-2025`

## 2. 产品类别识别

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.rubber-and-plastics-products.injection-moulded-reusable-polypropylene-bowls |
| classification_refs | CPC3.0:36940; 窄方法语境; 不代表已接受映射 |
| covered_products | 一种获规格认可的单件未填充原生PP可重复使用家用餐碗配置 |
| excluded_products | 第1节全部排除项；产品或路线变更需重新评估适用性 |
| representative_product | 已明确规格的一体PP盛食碗；宜家KALAS仅为独立终端证据 |
| production_route | 完整颗粒接收/调湿 → 螺杆塑化 → 充模/保压/冷却/脱模 → 修边/回收/检验 → 首次放行；实际供货服务另账 |
| market_state | 冷却裸碗新增首次质量放行；排除可拆包装；披露实际供货服务期间 |

## 3. 参考流

| Field | Value |
| --- | --- |
| What | 生产明确规格的可重复使用家用盛食餐碗 |
| How much | 1 kg新增首次质量放行净裸碗 |
| How well | 实际图纸及声明材料/尺寸/机械/表面/食品接触验收，不默认证书或容积等价 |
| How long or cycle | 一完整制造期至首次质量放行，不在此量化使用寿命/次数 |
| reference_flow_link | first_release |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | 塑料餐具、厨房用具、其他家用器具及盥洗室用品 `6ea38dc6-ba15-428c-8881-f25b8ef37de1` |
| Reference flow property | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | 质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | 经认可的碗几何与容积; PP牌号及均聚/共聚类型; 完整颗粒制剂及供货颜色; 未填充原生来源; 单次注塑路线与模具配置; 食品接触试验基准及预期用途限制; 尺寸表面及机械验收要求; 实测新增首次放行净质量与批组; 期初/期末在制品及继承交换向量; 内部回料谱系与热史; 成品库存退货与原放行关联; 独立制造与供货服务门; 完整供货制剂与成分子账; 工厂公用工程门电压地域与损失; 水状态与供方热服务约定; 各包装材料库存和发运账; 逐物种释放证据及介质; 期间场址分配与不确定性 |

全部必需限定须出现在实际数据集元数据、参考说明、过程备注或等效可消费字段中。此1kg参考为首次放行净质量，零售包装重量或件数均不是其测量。

## 4. 计量与单位规则

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| reference_mass | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Q为声明配置及批组经冷却和验收后使用校准称量取得的唯一新增首次质量放行餐碗净质量，单位kg，排除可拆包装。同批期末成品已经计入Q。cp_release采集原始kg；仅calc_reference将可归属原始量除以Q。 |
| native_unit_chain | all inventory rows | Native reference property | declared row unit | 质量链为93a60a56-a3c8-11da-a746-0800200b9a66 → 93a60a57-a4c8-11da-a746-0800200c9a66 → kg；电力采用原生净热值93a60a56-a3c8-11da-a746-0800200c9a66 → 93a60a57-a3c8-11da-a746-0800200c9a66 → MJ作为能量属性而非燃料质量。保留仪表原始单位，kWh按精确3.6转为MJ后才分配/归一化。 |
| raw_measurement | all inventory rows | Measured extensive quantity | kg or MJ | 完整供货制剂只计一次。含量、载水及活性组分仅为嵌套成分账，不另计采购。已积分体积不再乘时间，只有真实速率才积分。体积转质量需要该物质在声明温压下独立测得的密度；不得从原生次级属性反推密度或将水密度套给油/制冷剂。 |
| zero_output | all inventory rows | Raw burden vector | raw units | Q=0时仍保留开停机、待机、失败注射、清理、拒收批次及实际返工；保存并说明原始负荷向量及未来批组归属，不出单位结果。不得由包装重量或件数推定单碗质量。 |

## 5. 系统边界

### 边界概化

| Field | Value |
| --- | --- |
| declared_starting_condition | 接收实际完整原生未填充本色/预着色PP颗粒制剂，声明上游生产负荷及真实供料包装 |
| starting_condition_role | 完整前景转化的外购原料 |
| product_classification_scope | CPC3.0:36940中窄家用PP碗子集，排除包装/卫生/半成品 |
| recursive_input_rule | 外购成碗及既已放行退回保留上游/历史负荷，不能递归替代原生颗粒制造 |
| upstream_dataset_requirement | 匹配真实完整树脂/制剂、公用工程、包装及运输/处理边界，不漏记或重复成分负荷 |
| disclosure | 声明场址/期间/配置、制造首次放行门、独立真实供货服务期间、全部库存/继承向量及供方限制 |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| boundary_route | manufacture | 从完整颗粒接收到新增放行餐碗逐项采集实际操作，包括水分/凝露导致的实际干燥、供料输送、电加热/螺杆/锁模/机器人负荷、冷却、修边/粉碎/检验。指南正常无需预干燥不推翻湿料记录。不假定蒸汽、锅炉、燃料、脱模剂、清洗或治理设施；实际安装设施及真实流须逐项加入。 | ineos-pp-processing-2007; ifc-plastic-products-2007 |
| boundary_feed | pp_feed | 完整外购PP颗粒制剂只跨门一次，实际颜料/稳定剂及载体属于该整份供料，不重复采购成分。实际另行配色会改变声明路线，必须逐项记录单独外购制剂及配混能耗/损失。内部回料保留原逐交换负荷向量及热史，不是原生料、新采购或抵扣。 | ineos-pp-processing-2007 |
| boundary_gates | all processes | 制造Q为首次放行而非净发运。期初期末在制品均保留数量、状态、配置及每种交换的继承向量。同批期末成品属于Q，绝不能另加制造产出。供货服务另保留期初期末成品、实物毛发运、外部退回、再发运、拒收和损失；重验不创造Q，增量返工仅一次归属原批组。 | ilcd-general-2010 |
| boundary_species | manufacture | 逐个筛查实际气/液/固物种及去向。IFC表4仅高温潜在证据，不证明正丁烷、甲醛或任何速率。不得将VOC/COD/TOC化作特定化学质量；未表征指标仍为指标，定量数据包的真实物种不确定性须保留hold。实际鉴定的每个物种均增加独立卡片。 | ifc-plastic-products-2007 |
| boundary_utilities | all processes | 电力仅绑定声明的中国1–35kV电网平均用户门；支路计量与进口电量核对，包括真实变压器、电机、压缩机、冷机和输配损失。其他地域/电压/供电需要另核实身份/供应者。厂内压缩空气/冷却生产通过实际设备电水计量，不再采购同一服务。实际外供热交换水须记录毛接收/返回质量、温压/焓及供方水能约定，内部循环抵消，同一水批不再作补水收费。 | ifc-plastic-products-2007 |
| boundary_packaging | supply_services | 各单种包装分别建立：期初空包装+附着在制/成品包装+周转库存+外部取得+外部退回接收=期末相同项目+随毛实物发运外出包装+对外退回+废物。内部周转抵消。包装独立于裸碗Q，重复使用不再采购也不自动成为共产品。随树脂进入的袋包装采用同样账及供方边界核对。 | ilcd-general-2010 |
| boundary_recursive | all processes | 不得将碗递归当作自身原料。外购成碗为携带继承负荷的上游产品，不属于本颗粒转化参考路线。合格返工/退回须保留原身份及库存/负荷关联。上游树脂、公用工程和包装供应者必须匹配实际边界与配方，避免遗漏或重复包装、运输和公用工程生产。 | ilcd-general-2010 |

## 6. 过程清单结构

### 过程图

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| manufacture | 完整颗粒至餐碗制造与首次放行 | required | 真实完整转化及安装公用工程操作 | 前景制造含接收调湿、螺杆模具周期、冷却、脱模、修边回收、检验、真实公用工程及损失 | 1 kg新增首次放行 |
| supply_services | 实际放行后包装仓储搬运和发运 | required | 实际观察的匹配批组供货期间，含未发出库存 | 独立报告增量供货服务及成品/包装实物账 | 每 1 kg 参考流 |

每卡为单一实物交换。条件行仅有真实存在证据才纳入；不存在证据不同于未测数量。完成前须新增真实缺少的材料、公用工程、包装组件、废物或已鉴定物种/去向。内部回料在制造内部保留完整谱系/向量账，不是无负荷的新采购。各行用自身原始分子，唯一除以Q在calc_reference执行。供货服务结果区别于制造并保留观察期间。

### 过程：完整颗粒至餐碗制造与首次放行（`manufacture`）

#### 输入

##### 产品流

###### 完整原生PP颗粒供料（`pp_feed`）

按一份实际完整本色或预着色未填充原生PP制剂计量，含内在添加剂并扣除可拆袋。原生身份是工厂丙烯聚合PP颗粒，以质量为参考，未指定CAS、牌号、共聚单体、颜色、供货地或供应商配方。残余分类不是配方证据。核对真实原生PP颗粒/食品接触规格；不绑定外部再生料或内部回料，也不重复采购成分颜料/稳定剂。 参考单位组：质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66`；参考单位kg。

- 选定流：聚丙烯粒料（PP） `4f19f11d-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：使用本行仅计算一次的x_i结果；用cp_material采集原始数量。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_material`
- 来源：`ineos-pp-processing-2007`

###### 制造用电（`production_electricity`）

原生为中国1–35kV电网平均用户端消费供电，以净热值属性MJ计。仅在实际中压工厂进口门使用，不替代巴西组合、垃圾焚烧电、线缆或变压服务。支路用电与真实变压/输配损失核对且只计一次。计量加热、螺杆/锁模/机器人、实际干燥、粉碎、抽风、压缩机和冷机及开停机/待机，不再采购同一厂内公用服务。 参考单位组：能量单位组 `93a60a57-a3c8-11da-a746-0800200c9a66`；参考单位MJ。

- 选定流：交流电 `3d76981f-964a-4865-b588-0e067a2a1163`
- 流属性/单位：净热值 `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则：使用本行仅计算一次的x_i结果；用cp_energy采集原始数量。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_energy`
- 来源：`ineos-pp-processing-2007`; `ifc-plastic-products-2007`

###### 冷却回路自来水补水（`cooling_makeup`）

实际跨厂门的处理后自来水补水，参考质量kg；原生市政/饮用供水及工厂生产未指定地域或供应商处理工艺。附加原生体积属性不等于独立实测密度。核实真实水源/状态；该UUID不识别原水/去离子水或循环公用水返回。内部循环不重复采购。 参考单位组：质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66`；参考单位kg。

- 选定流：自来水 `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：使用本行仅计算一次的x_i结果；用cp_water采集原始数量。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_water`
- 来源：`ifc-plastic-products-2007`

###### 实际设备清洗自来水（`washing_water`）

仅纳入真实湿洗或试验，不能将干式清理虚构为水洗。实际跨厂门的处理后自来水补水，参考质量kg；原生市政/饮用供水及工厂生产未指定地域或供应商处理工艺。附加原生体积属性不等于独立实测密度。核实真实水源/状态；该UUID不识别原水/去离子水或循环公用水返回。内部循环不重复采购。 参考单位组：质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66`；参考单位kg。

- 选定流：自来水 `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：使用本行仅计算一次的x_i结果；用cp_water采集原始数量。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_water`
- 来源：`ifc-plastic-products-2007`

###### 矿物型液压油制剂（`hydraulic_oil`）

仅液压/混合设备的实际整份矿物型液压油制剂。记录供应商牌号、添加剂制剂、油库存、服务分摊及废油去向；全电设备可能无此回路。 参考单位组：质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66`；参考单位kg。

- 选定流：矿物型液压油制剂
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：使用本行仅计算一次的x_i结果；用cp_aux采集原始数量。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_aux`
- 来源：`ifc-plastic-products-2007`

###### 1,1,1,2-四氟乙烷制冷剂（`r134a_supply`）

仅实际安装R134a回路时纳入，充装/补充、期初期末充注、回收和损失独立核对，不能假定冷机使用此制冷剂。实际为其他化学物质时准确新增。 参考单位组：质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66`；参考单位kg。

- 选定流：1,1,1,2-四氟乙烷制冷剂
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：使用本行仅计算一次的x_i结果；用cp_aux采集原始数量。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_aux`
- 来源：`ifc-plastic-products-2007`

###### 氢氧化钠水溶液清洗制剂（`caustic_cleaner`）

条件项：实际外购氢氧化钠水溶液清洗剂，按完整制剂质量及供应商含量/载水子账记录，不能同时采购纯NaOH及重复溶液/水。无设备与清洗记录不宣称使用或兼容。 参考单位组：质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66`；参考单位kg。

- 选定流：氢氧化钠水溶液清洗制剂
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：使用本行仅计算一次的x_i结果；用cp_aux采集原始数量。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_aux`
- 来源：`ifc-plastic-products-2007`

###### 颗粒活性炭（`activated_carbon`）

条件项：真实废气吸附器装填，保留牌号、期初期末库存、换填与再生去向。不假定安装或治理效率。 参考单位组：质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66`；参考单位kg。

- 选定流：颗粒活性炭
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：使用本行仅计算一次的x_i结果；用cp_aux采集原始数量。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_aux`
- 来源：`ifc-plastic-products-2007`

###### LDPE树脂供货袋（`inlet_sack`）

条件项：随树脂进入的单种LDPE袋，与树脂净质量分开；记录真实袋组成及上游已含包装负荷。该实物进口不自动成为第二次包装采购；其他实际内衬/袋组件需独立卡片。 参考单位组：质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66`；参考单位kg。

- 选定流：LDPE树脂供货袋
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：使用本行仅计算一次的x_i结果；用cp_inlet_packaging采集原始数量。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_inlet_packaging`
- 来源：`ifc-plastic-products-2007`

###### 液态热交换水（`received_exchange_water`）

仅真实外供冷却/热交换水，采集毛接收/返回质量和温压/焓、状态及供方水能权属约定。不假定蒸汽/冷凝水或锅炉；同一水批不能又计为自来水补水。 参考单位组：质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66`；参考单位kg。

- 选定流：液态热交换水
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：使用本行仅计算一次的x_i结果；用cp_water采集原始数量。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_water`
- 来源：`ifc-plastic-products-2007`

#### 输出

##### 产品流

###### 新增首次质量放行餐碗（`first_release`）

制造门唯一裸碗新增首次放行配置/批组。原生流是宽泛已制造塑料家用品、工厂生产混合、质量参考；未指定PP牌号、CAS、碗设计、食品接触试验、寿命、供货地或介质。仅用于经独立证实按本完整路线制造的单件未填充原生PP可重复使用碗，原生身份不证明实际供应商兼容性。记录校准净放行质量及全部必需限定信息。同批期末成品已在Q中，重验/发运不另产出或新增Q。 参考单位组：质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66`；参考单位kg。

- 选定流：塑料餐具、厨房用具、其他家用器具及盥洗室用品 `6ea38dc6-ba15-428c-8881-f25b8ef37de1`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：1 千克
- 数值来源模式：`fixed_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`method_formula`
- 采集协议：`cp_release`
- 来源：`ikea-kalas-bowl`; `ineos-pp-processing-2007`

###### 对外液态热交换水返回（`returned_exchange_water`）

仅相应供水协议下真实对外返回的水批，记录实测质量及真实热状态/焓。明确供方水能约定，不是内部循环移交，也不自动为有用热共产品/抵扣。 参考单位组：质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66`；参考单位kg。

- 选定流：液态热交换水
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：使用本行仅计算一次的x_i结果；用cp_water采集原始数量。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_water`
- 来源：`ifc-plastic-products-2007`

##### 废物流

###### PP注塑拒收料（`pp_rejects`）

真实外转的同一明确制剂PP拒收碗、流道、清机及边料，记录状态和完整组成/处理去向；清洁内部回料在过程内追踪，不是此对外出口。不同制剂/去向拆记录。 参考单位组：质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66`；参考单位kg。

- 选定流：PP注塑拒收料
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：使用本行仅计算一次的x_i结果；用cp_waste采集原始数量。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_waste`
- 来源：`ifc-plastic-products-2007`

###### 捕集PP颗粒（`captured_pp_dust`）

声明PP制剂的真实捕集颗粒，区别于排空气颗粒和污染清理废物；保留过滤/捕集记录及去向，不假定捕集效率。 参考单位组：质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66`；参考单位kg。

- 选定流：捕集PP颗粒
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：使用本行仅计算一次的x_i结果；用cp_waste采集原始数量。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_waste`
- 来源：`ifc-plastic-products-2007`

###### 废矿物型液压油（`spent_hydraulic_oil`）

明确回路的实际废油，水/污染物按子组成另测，不将同一湿流重复计为额外材料质量。 参考单位组：质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66`；参考单位kg。

- 选定流：废矿物型液压油
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：使用本行仅计算一次的x_i结果；用cp_waste采集原始数量。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_waste`
- 来源：`ifc-plastic-products-2007`

###### 回收1,1,1,2-四氟乙烷（`recovered_r134a`）

实际送处理/再生的回收制冷剂，与逸散及设备充注库存分开，不假定回收率。 参考单位组：质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66`；参考单位kg。

- 选定流：回收1,1,1,2-四氟乙烷
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：使用本行仅计算一次的x_i结果；用cp_waste采集原始数量。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_waste`
- 来源：`ifc-plastic-products-2007`

###### 冷却回路排污水（`cooling_bleed`）

送处理的一种真实冷却排污水，保留质量/温度及实测水/溶质子账。内部循环不是排放；直排环境需另列介质/物种卡片。 参考单位组：质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66`；参考单位kg。

- 选定流：冷却回路排污水
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：使用本行仅计算一次的x_i结果；用cp_waste采集原始数量。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_waste`
- 来源：`ifc-plastic-products-2007`

###### 设备清洗水性废液（`cleaning_effluent`）

送处理的一种真实设备清洗水性流，记录实测组成、水质量和分析指标。COD/TOC不是选定物种或化学质量替代；化学不同流/去向拆开。 参考单位组：质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66`；参考单位kg。

- 选定流：设备清洗水性废液
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：使用本行仅计算一次的x_i结果；用cp_waste采集原始数量。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_waste`
- 来源：`ifc-plastic-products-2007`

###### 废颗粒活性炭（`spent_carbon`）

仅真实使用的吸附剂，实测所含吸附物/水及外部再生/处理边界；吸附物质量为嵌套账，不另重复整份废物出口。 参考单位组：质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66`；参考单位kg。

- 选定流：废颗粒活性炭
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：使用本行仅计算一次的x_i结果；用cp_waste采集原始数量。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_waste`
- 来源：`ifc-plastic-products-2007`

###### 废LDPE树脂供货袋（`inlet_sack_waste`）

实际废弃进口袋，区别空袋、附着树脂及实际退供方。树脂含量为子账，不能再作同一PP拒收料重复记账。 参考单位组：质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66`；参考单位kg。

- 选定流：废LDPE树脂供货袋
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：使用本行仅计算一次的x_i结果；用cp_waste采集原始数量。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_waste`
- 来源：`ifc-plastic-products-2007`

##### 基本流

###### PP颗粒物（`pp_particulate_air`）

真实进入空气的明确PP制剂颗粒，声明粒径部分及空气介质；泛粉尘命中不证明聚合物化学、颗粒结构或释放量。 参考单位组：质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66`；参考单位kg。

- 选定流：PP颗粒物
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：使用本行仅计算一次的x_i结果；用cp_emissions采集原始数量。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_emissions`
- 来源：`ifc-plastic-products-2007`

###### 正丁烷（`n_butane_air`）

仅真实空气中的正丁烷分子物种经独立鉴定时纳入。IFC只给高温条件下潜在丁烷/烷烃类别，不解析异构体或数量，不能将烷烃总量记为正丁烷。 参考单位组：质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66`；参考单位kg。 原生CAS 106-97-8，基本流、质量/kg，介质为未指定空气排放。仅绑定在该介质中独立鉴定的这一确切物种释放；原生混合物/溶液同义词不允许将整份制剂或分析总量记为该物种。真实室内、水体、土壤、长期或更具体空气介质须另用经核实身份。

- 选定流：正丁烷 `4d9a8790-3ddd-11dd-94c2-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：使用本行仅计算一次的x_i结果；用cp_emissions采集原始数量。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_emissions`
- 来源：`ifc-plastic-products-2007`

###### 甲醛（`formaldehyde_air`）

条件项：空气中独立鉴定的甲醛；一般PP醛类不证明此化合物。按匹配采样/物种分析及检出限定量，不从VOC总量换算。 参考单位组：质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66`；参考单位kg。 原生CAS 50-00-0，基本流、质量/kg，介质为未指定空气排放。仅绑定在该介质中独立鉴定的这一确切物种释放；原生混合物/溶液同义词不允许将整份制剂或分析总量记为该物种。真实室内、水体、土壤、长期或更具体空气介质须另用经核实身份。

- 选定流：甲醛 `08a91e70-3ddc-11dd-941b-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：使用本行仅计算一次的x_i结果；用cp_emissions采集原始数量。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_emissions`
- 来源：`ifc-plastic-products-2007`

###### 水蒸气（`water_vapour_air`）

实际干燥/冷却进入空气的实测蒸发，与飘滴和液体排污分开。自由水与任何真实化学生成水区分；非反应PP成型不构成反应水或结构水证据。 参考单位组：质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66`；参考单位kg。 原生CAS 7732-18-5，基本流、质量/kg，介质为未指定空气排放。仅绑定在该介质中独立鉴定的这一确切物种释放；原生混合物/溶液同义词不允许将整份制剂或分析总量记为该物种。真实室内、水体、土壤、长期或更具体空气介质须另用经核实身份。

- 选定流：水蒸气 `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：使用本行仅计算一次的x_i结果；用cp_emissions采集原始数量。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_emissions`
- 来源：`ifc-plastic-products-2007`

###### 1,1,1,2-四氟乙烷（`r134a_air`）

仅安装回路的真实R134a损失，与充注、补充和回收核对；区别捕集制冷剂和其他物种。声明不存在需设备与维修证据。 参考单位组：质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66`；参考单位kg。 原生CAS 811-97-2，基本流、质量/kg，介质为未指定空气排放。仅绑定在该介质中独立鉴定的这一确切物种释放；原生混合物/溶液同义词不允许将整份制剂或分析总量记为该物种。真实室内、水体、土壤、长期或更具体空气介质须另用经核实身份。 原生记录没有正式中文baseName，中文选定流显示沿用HFC-134a，不把中文同义词当作正式名称。

- 选定流：HFC-134a `fe0acd60-3ddc-11dd-a6d2-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：使用本行仅计算一次的x_i结果；用cp_emissions采集原始数量。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_emissions`
- 来源：`ifc-plastic-products-2007`

### 过程：实际放行后包装仓储搬运和发运（`supply_services`）

#### 输入

##### 产品流

###### 内部新增放行餐碗移交（`released_transfer`）

将first_release确切批组质量及逐交换负荷向量带入成品服务库存。原生宽泛已制造家用品/质量身份不保证聚合物/牌号/设计/地域，保留相同受限PP餐碗限定。该内部Q移交在合并厂账抵消。 参考单位组：质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66`；参考单位kg。

- 选定流：塑料餐具、厨房用具、其他家用器具及盥洗室用品 `6ea38dc6-ba15-428c-8881-f25b8ef37de1`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：使用本行仅计算一次的x_i结果；用cp_fg采集原始数量。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_fg`
- 来源：`ilcd-general-2010`

###### 原已发运餐碗退回（`returned_bowls`）

来自已知原放行/交付批组的真实退碗，携带历史质量和负荷，适当时冲回对应原发运归属；隔离污染及增量返工。泛成品流不证明退回品质，重验或再发运不产生新Q。 参考单位组：质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66`；参考单位kg。

- 选定流：塑料餐具、厨房用具、其他家用器具及盥洗室用品 `6ea38dc6-ba15-428c-8881-f25b8ef37de1`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：使用本行仅计算一次的x_i结果；用cp_fg采集原始数量。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_fg`
- 来源：`ilcd-general-2010`

###### 供货服务用电（`service_electricity`）

实际按匹配批组/期间单独归属的包装/仓储/搬运用电。原生为中国1–35kV电网平均用户端消费供电，以净热值属性MJ计。仅在实际中压工厂进口门使用，不替代巴西组合、垃圾焚烧电、线缆或变压服务。支路用电与真实变压/输配损失核对且只计一次。计量实际首次放行后的包装设备、仓储和搬运负荷，包括归属于这些服务的待机及公用工程损失。注塑及其他制造负荷仅归入制造账；真正共用设备的每项交换按实测因果驱动因素分配，且不重复采购厂内公用服务。 参考单位组：能量单位组 `93a60a57-a3c8-11da-a746-0800200c9a66`；参考单位MJ。

- 选定流：交流电 `3d76981f-964a-4865-b588-0e067a2a1163`
- 流属性/单位：净热值 `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则：使用本行仅计算一次的x_i结果；用cp_service_energy采集原始数量。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_service_energy`
- 来源：`ilcd-general-2010`

###### 瓦楞运输纸箱（`carton`）

一只实际完整瓦楞运输纸箱，含成品纸板/黏合结构，按质量kg。核实实际完整纸箱组成与供应者边界。未指定包装材料身份不能确立一只瓦楞纸箱；保留这一具体制品，不填入未经核实的UUID。内衬、胶带及缠绕膜另列，且不重复采购纸箱自身成分。 参考单位组：质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66`；参考单位kg。

- 选定流：瓦楞运输纸箱
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：使用本行仅计算一次的x_i结果；用cp_packaging采集原始数量。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_packaging`
- 来源：`ilcd-general-2010`

###### LDPE缠绕包装膜（`stretch_film`）

一种实际供货单层LDPE缠绕膜制剂，完整添加剂组成明确，卷芯/内衬另行识别；不假定泛塑料膜UUID可证明牌号或缠绕路线。 参考单位组：质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66`；参考单位kg。

- 选定流：LDPE缠绕包装膜
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：使用本行仅计算一次的x_i结果；用cp_packaging采集原始数量。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_packaging`
- 来源：`ilcd-general-2010`

###### BOPP丙烯酸胶封箱带（`sealing_tape`）

一份完整外购BOPP基材丙烯酸胶带制剂，不重复采购基材和胶黏剂；真实离型衬/卷芯另列材料。 参考单位组：质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66`；参考单位kg。

- 选定流：BOPP基材丙烯酸胶带
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：使用本行仅计算一次的x_i结果；用cp_packaging采集原始数量。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_packaging`
- 来源：`ilcd-general-2010`

###### 实木周转托盘（`wood_pallet`）

仅实际供货实木托盘，保留紧固件/组成、供应方权属及退回史。整份外购托盘只计一次；实际维修及替换材料各自记录。内部周转不是采购或碗产出。 参考单位组：质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66`；参考单位kg。

- 选定流：实木运输托盘
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：使用本行仅计算一次的x_i结果；用cp_packaging采集原始数量。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_packaging`
- 来源：`ilcd-general-2010`

#### 输出

##### 产品流

###### 瓦楞运输纸箱（`carton_out`）

记录该单一包装制品实际随货外出/对外返回，去向分记录并采用同种材料库存账，不将质量加入裸碗Q。一只实际完整瓦楞运输纸箱，含成品纸板/黏合结构，按质量kg。核实实际完整纸箱组成与供应者边界。未指定包装材料身份不能确立一只瓦楞纸箱；保留这一具体制品，不填入未经核实的UUID。内衬、胶带及缠绕膜另列，且不重复采购纸箱自身成分。 参考单位组：质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66`；参考单位kg。

- 选定流：瓦楞运输纸箱
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：使用本行仅计算一次的x_i结果；用cp_packaging采集原始数量。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_packaging`
- 来源：`ilcd-general-2010`

###### LDPE缠绕包装膜（`stretch_film_out`）

记录该单一包装制品实际随货外出/对外返回，去向分记录并采用同种材料库存账，不将质量加入裸碗Q。一种实际供货单层LDPE缠绕膜制剂，完整添加剂组成明确，卷芯/内衬另行识别；不假定泛塑料膜UUID可证明牌号或缠绕路线。 参考单位组：质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66`；参考单位kg。

- 选定流：LDPE缠绕包装膜
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：使用本行仅计算一次的x_i结果；用cp_packaging采集原始数量。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_packaging`
- 来源：`ilcd-general-2010`

###### BOPP丙烯酸胶封箱带（`sealing_tape_out`）

记录该单一包装制品实际随货外出/对外返回，去向分记录并采用同种材料库存账，不将质量加入裸碗Q。一份完整外购BOPP基材丙烯酸胶带制剂，不重复采购基材和胶黏剂；真实离型衬/卷芯另列材料。 参考单位组：质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66`；参考单位kg。

- 选定流：BOPP基材丙烯酸胶带
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：使用本行仅计算一次的x_i结果；用cp_packaging采集原始数量。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_packaging`
- 来源：`ilcd-general-2010`

###### 实木周转托盘（`wood_pallet_out`）

记录该单一包装制品实际随货外出/对外返回，去向分记录并采用同种材料库存账，不将质量加入裸碗Q。仅实际供货实木托盘，保留紧固件/组成、供应方权属及退回史。整份外购托盘只计一次；实际维修及替换材料各自记录。内部周转不是采购或碗产出。 参考单位组：质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66`；参考单位kg。

- 选定流：实木运输托盘
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：使用本行仅计算一次的x_i结果；用cp_packaging采集原始数量。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_packaging`
- 来源：`ilcd-general-2010`

###### 餐碗实物毛发运（`dispatched_bowls`）

按原批组记录真实实物发运裸碗质量，区别于包装及外部退回接收。宽泛原生成品塑料家用品/质量身份仍需同样PP碗配置及验收限制，不认证使用性能。此为服务账出口，不是第二次first_release或净交付分母。期末成品及损失保留独立库存记录。 参考单位组：质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66`；参考单位kg。

- 选定流：塑料餐具、厨房用具、其他家用器具及盥洗室用品 `6ea38dc6-ba15-428c-8881-f25b8ef37de1`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：使用本行仅计算一次的x_i结果；用cp_fg采集原始数量。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_fg`
- 来源：`ilcd-general-2010`

##### 废物流

###### 瓦楞运输纸箱废物（`carton_waste`）

实际废弃的瓦楞运输纸箱，记录完整组成、附着产品/水子账及处理去向；不得与新采购净抵或虚构共产品抵扣。 参考单位组：质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66`；参考单位kg。

- 选定流：废瓦楞运输纸箱
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：使用本行仅计算一次的x_i结果；用cp_packaging采集原始数量。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_packaging`
- 来源：`ilcd-general-2010`

###### LDPE缠绕包装膜废物（`stretch_film_waste`）

实际废弃的LDPE缠绕包装膜，记录完整组成、附着产品/水子账及处理去向；不得与新采购净抵或虚构共产品抵扣。 参考单位组：质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66`；参考单位kg。

- 选定流：LDPE缠绕包装膜废物
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：使用本行仅计算一次的x_i结果；用cp_packaging采集原始数量。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_packaging`
- 来源：`ilcd-general-2010`

###### BOPP丙烯酸胶封箱带废物（`sealing_tape_waste`）

实际废弃的BOPP基材丙烯酸胶带，记录完整组成、附着产品/水子账及处理去向；不得与新采购净抵或虚构共产品抵扣。 参考单位组：质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66`；参考单位kg。

- 选定流：BOPP基材丙烯酸胶带废物
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：使用本行仅计算一次的x_i结果；用cp_packaging采集原始数量。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_packaging`
- 来源：`ilcd-general-2010`

###### 实木周转托盘废物（`wood_pallet_waste`）

实际废弃的实木运输托盘，记录完整组成、附着产品/水子账及处理去向；不得与新采购净抵或虚构共产品抵扣。 参考单位组：质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66`；参考单位kg。

- 选定流：实木运输托盘废物
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：使用本行仅计算一次的x_i结果；用cp_packaging采集原始数量。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_packaging`
- 来源：`ilcd-general-2010`

###### 损坏PP餐碗废物（`damaged_bowls`）

实际放行后损坏/退回PP废碗，含原批组、污染、完整质量及处理去向；从成品实物库存移出，但不抹去制造负荷，也不因重验创造新产出。 参考单位组：质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66`；参考单位kg。

- 选定流：废弃PP家用餐碗
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：使用本行仅计算一次的x_i结果；用cp_fg采集原始数量。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_fg`
- 来源：`ilcd-general-2010`

## 7. 分配与共产品处理

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| allocation_scope | all processes | 仅在需要分配的归因清单中采用本层级。先识别实际功能和专属操作，将实测投入出口细分或虚拟细分。产品专属PP和失败批次留在相应原餐碗批组。 | ilcd-general-2010 |
| allocation_causality | shared exchanges | 对每项剩余交换确定控制其数量的物理关系。仅在对该电负荷有因果时使用实测机台周期/负载；仓储可能需占用容积/面积及时间，运输可能受质量或容积限制。记录检验与敏感性，不对所有交换套统一质量、时间、物理/经济任选或固定比例。 | ilcd-general-2010 |
| allocation_residual | genuinely residual multifunctional process | 只有证明仍未解决的多功能过程剩余负荷才可使用同期数量乘同一共同过程出口门、实际供货状态的市场价值，扣除下游调理、包装、运输和贸易附加值。保留证据、排除方案与敏感性。非正/未知价格或缺因果数据是明确复核事项，不自动经济分配。 | ilcd-general-2010 |
| allocation_scrap | internal recovery and exported rejects | 内部回收携带负荷并在物理门抵消。逐出口确定实际废物/服务/产品状态及处理；出售本身不产生避免原生料抵扣。不得用分配后数量关闭物理平衡。外售回收材料或寿命终结方法需另行说明边界并复核。 | ilcd-general-2010 |
| asset_manufacture_conservation | 既有资本品及可复用制品制造归属 | 在适用的分配决策情境内，对前景生产、包装或已观察服务中已纳入的实际资本设备或可复用制品按用途归属原始制造负荷时，必须按同一资产建立跨全部作物、产品、批次、制造及放行后服务、所有者和观察期的持久台账。D为有证据支持的完整安装服务总量，即全部已实现历史服务加有依据的剩余服务，其单位须与各受益用途实际服务量u一致；D须为有限正值。当期容量、仅剩余容量、资产或制品自身实物质量以及仅当期产品Q均不能直接作为D；若有证据证明因果服务且与u单位相符，完整服务期的质量通量可用作分母。本规则不按下游寿命摊销本PCR制造的参考产品，也不改变其声明的参考门及Q。u/D与此前已分配的制造份额累计不得超过1。观察期、保管方、供方或维修变化不能重置原始制造负荷余额。替换件使用独立身份，仅计真实新增制造向量；实际维修和处理增量另行保留。服务容量证据修订时，应透明追溯调整既有份额并作敏感性分析，不得另起台账。完整实物质量及存量变动独立于负荷份额。D、既有份额或受益范围不明时须复核，不得给出最终制造负荷归属量；不得假定寿命、利用率、零值或任意分摊。 对本路线既有采集协议中按用途归属已纳入生产、包装或已观察服务资产制造负荷的情形（不摊销本PCR制造的参考产品本身），还须保留持久资产身份、实测完整实物质量及购入/安装/退役存量历史、原始制造负荷向量、全部历史及当前受益用途、同单位服务读数、有证据的完整安装服务分母D、剩余服务依据与不确定性、此前已分配份额及剩余原始制造负荷余额。台账跨观察期及保管方/供方变化持续结转。实际维修、替换、回收和处理分别采集；这些记录不能归一化实物流量或构成另一次资产购入。这些是既有适用协议的补充字段与守恒要求，不是新增假定的资本品清单。 |  |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

对本路线既有采集协议中按用途归属已纳入生产、包装或已观察服务资产制造负荷的情形（不摊销本PCR制造的参考产品本身），还须保留持久资产身份、实测完整实物质量及购入/安装/退役存量历史、原始制造负荷向量、全部历史及当前受益用途、同单位服务读数、有证据的完整安装服务分母D、剩余服务依据与不确定性、此前已分配份额及剩余原始制造负荷余额。台账跨观察期及保管方/供方变化持续结转。实际维修、替换、回收和处理分别采集；这些记录不能归一化实物流量或构成另一次资产购入。这些是既有适用协议的补充字段与守恒要求，不是新增假定的资本品清单。

任何参考除法前先采集原始观察。aggregation_rule列只标明最终去向基准，不指示采集阶段做算术。calc_units转换原单位/速率，calc_attribution处理真实因果归属及继承在制向量，仅calc_reference计算一次A_i/Q。卡片数量与汇总指向同一已存结果。全程保留原单位、未分配实物数量、逐交换继承负荷、不确定性及零产出记录。

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_material | manufacture | 完整颗粒供料及原料/在制品谱系 | 原始前景记录 | 收货ID; 批次; 完整制剂; 供方净质量; 期初期末原料库存; 领用; 外部退回; 在制质量/状态; 继承交换向量; 内部回料来源及热史 | 使用校准秤称量，按材料和配置将接收、领用及余存核对。除法前保留原始数量和导入历史向量，实际颜色/添加剂组成为嵌套子账。 | kg | 逐收货/领用及班次关闭 | 完整声明生产期，包括零产出及期初期末库存 | 实际场址及产线/批组、声明门 | 每 1 kg 参考流 | 秤校准; 供方规格; 批次谱系; 库存盘点 |
| cp_energy | manufacture | 实际制造用电 | 原始前景记录 | 表ID; 原始期初期末kWh或MJ; 时间戳; 电压; 地域; 支路负荷; 实际变压输配损失; 周期/负载轨迹; 待机开停时间; 批组归属 | 读取主表/支表并核对工厂进口门及设备事件，保留原始能量单位。分开制造与供货服务负荷，分配前检验共享负荷驱动。 | kWh or MJ | 连续仪表并按班次/生产期核对 | 完整声明生产期，包括零产出及期初期末库存 | 实际场址及产线/批组、声明门 | 每 1 kg 参考流 | 表校准; 账单; 门示意; 时间序列及损失核对 |
| cp_service_energy | supply_services | 实际供货服务用电 | 原始前景记录 | 表ID; 原始期初期末kWh或MJ; 时间戳; 电压; 地域; 支路负荷; 实际变压输配损失; 周期/负载轨迹; 待机开停时间; 批组归属 | 读取主表/支表并核对工厂进口门及设备事件，保留原始能量单位。分开制造与供货服务负荷，分配前检验共享负荷驱动。 | kWh or MJ | 连续仪表并按班次/生产期核对 | 完整声明生产期，包括零产出及期初期末库存 | 实际场址及产线/批组、声明门 | 每 1 kg 参考流 | 表校准; 账单; 门示意; 时间序列及损失核对 |
| cp_water | manufacture | 独立供水及去向 | 原始前景记录 | 水源; 供货协议; 原始进出口质量或积分体积; 真实速率/时间; 实测密度及温压; 期初期末回路库存; 热交换水毛接收/返回; 焓; 排污; 蒸发; 夹带; 试验证据 | 计量各物理独立进出口及液体库存，称量或采用真实状态的独立实测密度。区分速率和已积分体积，不能将毛循环作消耗。 | kg; m3; MJ | 连续流及逐充装/清洗事件 | 完整声明生产期，包括零产出及期初期末库存 | 实际场址及产线/批组、声明门 | 每 1 kg 参考流 | 仪表/天平校准; 密度方法; 温度; 供方水热约定; 不确定性 |
| cp_aux | manufacture | 每份完整辅助制剂或制冷剂 | 原始前景记录 | 准确制剂/化学物; 批次; 供方含量; 载水; 原始接收/领用; 期初期末库存; 设备充注; 泄漏; 回收; 去向; 因果驱动 | 将采购/真实领用与逐化学物库存/充注及回收/废弃量核对。称量整份供货制剂，含量和载体保留子组成。用真实不存在证据替代虚构零。 | kg | 逐供货/使用/维修及期末 | 完整声明生产期，包括零产出及期初期末库存 | 实际场址及产线/批组、声明门 | 每 1 kg 参考流 | 供方SDS/TDS; 校准; 维修充注记录; 组成及处置记录 |
| cp_packaging | supply_services | 各单一包装制品及完整库存账 | 原始前景记录 | 材料; 完整供货组成; 空重; 期初期末空/附着在制/附着成品/周转库存; 外部取得; 外部退回接收; 实物毛外运; 对外退回; 废物; 内部周转; 权属; 历史负荷 | 称量实际供货包装配置并逐材料/去向核对质量/件数，空重/内容物分开。区分伴随原料进口包装及真实采购，识别供方已含包装负荷。 | kg; count | 逐包装/退回/废物事件及库存边界 | 完整声明生产期，包括零产出及期初期末库存 | 实际场址及产线/批组、声明门 | 每 1 kg 参考流 | 空重样本; 供方组成; 库存盘点; 退回/发运及废物单 |
| cp_inlet_packaging | manufacture | 各单一包装制品及完整库存账 | 原始前景记录 | 材料; 完整供货组成; 空重; 期初期末空/附着在制/附着成品/周转库存; 外部取得; 外部退回接收; 实物毛外运; 对外退回; 废物; 内部周转; 权属; 历史负荷 | 称量实际供货包装配置并逐材料/去向核对质量/件数，空重/内容物分开。区分伴随原料进口包装及真实采购，识别供方已含包装负荷。 | kg; count | 逐包装/退回/废物事件及库存边界 | 完整声明生产期，包括零产出及期初期末库存 | 实际场址及产线/批组、声明门 | 每 1 kg 参考流 | 空重样本; 供方组成; 库存盘点; 退回/发运及废物单 |
| cp_waste | manufacture | 各送处理前废物流 | 原始前景记录 | 流身份; 制剂; 原始湿毛质量; 水/固含量; 附着产品; 来源批次; 处理去向; 原负荷关联; 真实产品/废物状态 | 逐真实独立流称量表征，将移交单与库存/捕集记录核对。用嵌套组成避免废水毛量及其中同一水/固体重复计量。 | kg | 逐排放/收集及期末 | 完整声明生产期，包括零产出及期初期末库存 | 实际场址及产线/批组、声明门 | 每 1 kg 参考流 | 校准秤; 实验方法; 废物单; 去向核对 |
| cp_emissions | manufacture | 各真实化学物种与介质 | 原始前景记录 | 准确物种或分析指标; 适用CAS; 空气介质/粒径; 采样方法; 浓度及真实气态条件; 积分体积或真实速率/时间; 检出限; 不确定性; 回收/充注平衡; 生产期语境 | 采用匹配流量/物种测量或独立论证的逐化学物平衡，区分分析总量与物种。气态转换一致，只对速率积分。未检出与未测不同，不从IFC推定默认气种。 | kg; original analytical units | 代表真实操作状态，包括开机/异常 | 完整声明生产期，包括零产出及期初期末库存 | 实际场址及产线/批组、声明门 | 每 1 kg 参考流 | 实验方法; 采样系统; 原始时序; 检出限; 独立平衡 |
| cp_release | manufacture | 唯一新增首次放行及餐碗净质量 | 原始前景记录 | 配置; 批次/批组; 放行ID; 冷却验收净质量; 毛质量; 可拆空重; 接受/拒收处置; 真实试验; 已放行标记; 在制状态; 时间戳 | 用校准秤及可追溯空重称冷却验收裸碗。对照既有成品/退回去重首次放行ID，保留全部失败和返工史。仅唯一新增接受kg汇入Q，件数只作核对。 | kg | 逐首次放行及库存边界 | 完整声明生产期，包括零产出及期初期末库存 | 实际场址及产线/批组、声明门 | 每 1 kg 参考流 | 秤校准; 验收试验; 放行ID; 去重账 |
| cp_fg | supply_services | 成品库存及真实实物交付/退回 | 原始前景记录 | 批组; 原放行; 期初期末成品质量; 继承交换向量; 新Q移交; 实物毛发运; 外部退回; 原发运冲回; 再发运; 放行后废物; 增量返工; 服务期间 | 核对仓库称重、发运/退回单及原批组向量。隔离往期批组库存和服务。重验/再发运不产生新生产，实际增量返工仅一次关联原批组。 | kg; original vector units | 逐移动及期初期末盘点 | 完整声明生产期，包括零产出及期初期末库存 | 实际场址及产线/批组、声明门 | 每 1 kg 参考流 | 库存盘点; 校准称重; 发运/退回ID; 匹配历史负荷 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| calc_units | all inventory rows | 归属前将原始观察转到行参考单位：energy_MJ = energy_kWh ×3.6；积分体积直接使用；真实体积速率按其实际测量时间积分；质量=体积×同状态该物质独立实测密度。保留原始观察及不确定性。 | raw_amount; raw_unit; measured_state; cp_energy; cp_service_energy; cp_water; cp_emissions | converted_raw |  |
| calc_release | first_release | Q = cp_release中声明配置/批组唯一新增首次放行接受餐碗净kg之和。既已放行退回/重验/再发运不新增生产。同次首次放行的期末成品已经在Q中。 | cp_release; configuration; cohort | Q | ikea-kalas-bowl |
| calc_attribution | all inventory rows | A_i为行i可归属、未归一化数量：已转换的本期观察与期初期末在制数量及各继承交换向量核对，保留真实失败/待机/清理/返工负荷，抵消内部移交/回料。逐共享交换应用第7节，记录专属/剩余份额及合计。未分配实物账独立保留。供货服务A_i包含匹配批组/期间实际增量服务，历史制造负荷只携带，不再生产。 | converted_raw; opening_WIP_vectors; closing_WIP_vectors; internal_transfers; actual_rework; allocation_evidence | A_i | ilcd-general-2010 |
| calc_reference | all inventory rows | Q>0时x_i = A_i / Q，仅执行一次。A_i为calc_attribution所得声明行单位的可归属原始量，Q为calc_release所得新增首次放行kg。x_i是每1kg参考流结果；卡片及采集汇总只指向同一结果，绝不再除。Q=0时保留原始记录及未决批组归属，不出单位结果。 | A_i; Q; calc_attribution; calc_release | x_i |  |
| calc_physical | all processes | 分配前关闭各未分配物理门。制造：期初在制及过程内水/油/制冷剂库存+逐实物投入净领用=新Q+期末在制及过程内库存+逐真实对外出口/损失，内部回收抵消。成品：期初成品+新Q移交+外部退碗=期末成品+毛实物外运碗+放行后废物/损失。合并时内部新Q仅抵消一次。原料库存另核对，能量不是质量项。按不确定性调查偏差，不把残差强拟合为零。 | cp_material; cp_water; cp_waste; cp_emissions; cp_release; cp_fg | unallocated_gate_balances |  |
| calc_packaging | all packaging rows | 逐材料按kg及核实件数/空重应用boundary_packaging，保留实物毛外运/退回及附着期初期末在制/成品。内部周转抵消，历史负荷关联实际服务批组。只有真实新取得进入采购负荷，不将包装加入Q。 | cp_packaging; cp_inlet_packaging; packaging_ownership; historical_packaging_vectors | packaging_material_balances |  |
| calc_species_elements | manufacture | 按匹配门采用实测组成及全部真实水/化学物流，独立核对总实物质量及相关C/H/O或实际添加剂元素。物种/反应证据独立于元素总量。不得用一个残差拟合两个未知、由碳闭合推物种、假定反应/结构水或令COD/VOC等于化学质量。 | cp_material; cp_aux; cp_water; cp_waste; cp_emissions; independent_composition | independent_mass_element_species_checks | ifc-plastic-products-2007 |
| asset_manufacture_share | 既有资本品及可复用制品制造归属 | 仅在持久台账核实有依据的完整安装服务分母、全部受益用途及既有已分配份额后，对每项已纳入原始资产制造向量B计算f_current = u_current / D。在既有单次参考量归一化前，将f_current * B仅一次归属于实际受益用途。检查prior_shares加全部当前/新增受益用途份额不超过1，并结转剩余原始余额。容量修订须追溯核对历史台账。完整实物资产/包装质量及实际总存量/退回量不得乘f_current。D或历史不明时，最终归属结果保持不可用，但仍保留实际维修、替换及服务负荷。 | asset_id; original_B; u_current; D; historical_beneficiaries; prior_shares; capacity_evidence | 守恒的制造负荷归属向量 |  |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| dq_identity | 所有清单行 | 定量数据包使用UUID前核对各整份制剂、流型、化学身份、原生路线/形态/牌号、全部属性、地域/介质及供方门。宽泛显示不证明供方兼容；保留准确原生中文名。 | 完整原生记录; 规格; 供方边界 |
| dq_completeness | 所有过程 | 条件行须证明真实存在/不存在。清单完成前把实际缺少的各化学物/制剂、公用工程、燃料、包装组件、废物及物种/去向新增为具体原子行；不允许other/zero集合或自行按微量省略。 | 工艺核查; 物料表; 维修; SDS; 完整移动/排放账 |
| dq_temporal | 所有采集协议 | 覆盖同一声明生产期、场址及配置，含期初期末库存、全部失败/待机及供方/公用工程约定。披露采样、时间/地域缺口和敏感性，来源案例不变通用范围。 | 校准; 时序; 库存盘点; 场址证据 |
| dq_uncertainty | 所有计算 | 未测、零及未检出明确区分。缺真实分母、核心路线、物种支持、在制/成品历史负荷或可辩护分配的定量包保持不完整/hold；Schema/检查结果不赋予科学或翻译批准。 | 缺口账; 不确定性; 敏感性; 独立复核 |

## 9. 校验规则

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| validate_scope | all processes | 逐纳入/排除项及必需限定核对实际产品和完整制造路线。家用餐碗不是卫生器具或运装包装，共同聚合物不能使邻近方法互换。 | un-cpc3-2025; ineos-pp-processing-2007 |
| validate_basis | all inventory rows | 唯一first_release产品出口为reference_flow_link，双语声明1kg基准。核对原始记录、calc_units、calc_attribution及唯一calc_reference除法；Q=0无单位结果。核对首次放行去重和排除包装。 | ikea-kalas-bowl |
| validate_physical | all processes | 将制造、成品、合并实物门、各包装材料、原料库存及在制/成品逐交换继承向量独立于分配结果核对。外返水保留真实热状态及供方约定。拟合残差不能建立两个未知或真实物种。 | ifc-plastic-products-2007 |
| validate_atomic | all inventory rows | 每个选定流须为单一具体物理/化学交换。核对实际适用性及完整description中的各采用原生限制。条件物种需独立鉴定；未检出不等于无来源，未决辅助UUID不允许集合绑定。 | ifc-plastic-products-2007 |
| validate_allocation | shared exchanges | 核对细分/虚拟细分记录、逐交换决定性因果及仅真实剩余的同门同状态同期市场价值。拒绝任意物理/经济选择、固定份额或自动回收抵扣。 | ilcd-general-2010 |
| validate_terminal | first_release | 首次放行要求实际图纸、材料、食品接触/质量试验证据及制品专属使用说明。不得从PP通用指南、零售包装重量或工程检查成功推定微波能力、无菌、寿命或单碗质量。 | ikea-kalas-bowl; ikea-kalas-care |
| validate_completeness | all processes | 分别报告已执行/跳过检查、真实数据缺失及未表征物种，区别于结果状态。不可用关系不能声称通过。普通未来供方/辅助测量是采集要求，真实核心终端或方法关系缺失须明确draft/hold。 | ilcd-general-2010 |
| validate_asset_manufacture_conservation | 既有资本品及可复用制品制造归属 | 对每项已纳入资本品/可复用制品制造归属，检查同一资产连续性、同单位完整安装服务、全部历史及当前受益用途、既有已分配制造份额和累计份额不超过1。拒绝按观察期、批次、供方、所有者或维修重置。真实替换件及维修/处理增量向量分别核对，保留完整实物质量。分母缺失、既有分配无法解释或受益台账不完整时，须明确复核且最终归属量不可用；结构检查不能声称已获实测完整性。 |  |

## 10. 发布数据集画像

| Field | Value |
| --- | --- |
| dataset_role | secondary_dataset; background_dataset |
| downstream_use | 完成且有证据的每1kg新增放行餐碗制造清单；如有实际供货服务补充则独立标识 |
| allowed_use | 在供方/门证据匹配下建模声明完整PP碗配置/路线，保留不确定性及真实服务期间 |
| excluded_use | 不得用于整CPC36940覆盖、功能产品比较、一次性包装/卫生制品替代、未测泛因子、医疗/无菌或一概微波/寿命主张 |
| required_metadata | 全部参考限定信息、真实场址/期间、来源/供方门、配置、分配决定、原始分母、在制/成品/退回向量、服务期间、包装权属、物种/介质及不确定性 |
| required_quality_disclosure | 科学复核及翻译状态与检查分开；标明实测/估计/缺失值和真实遗漏，不推定发布或映射接受 |
| update_trigger | 牌号/制剂、模具/路线/验收、公用工程门、真实操作/物种、回用政策、供方证据、库存或分配方法、后果范围变化 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| ineos-pp-processing-2007 | handbook | INEOS O&P USA, Polypropylene Processing Guide, March 2007, pp.3–9 and13–18; https://www.ineos.com/globalassets/ineos-group/businesses/ineos-olefins-and-polymers-usa/products/technical-information--patents/ineos_polypropylene_processing_guide.pdf; retrieved2026-10-16 | PP供料、成型、冷却、脱模和缺陷的定性依据；预着色与单独配色区别；内部回料限制。不提供通用参数、配方、回料率、排放因子或产品批准。 |
| ikea-kalas-bowl | literature | IKEA, KALAS bowl mixed colors, article204.613.78, US product page snapshot; https://www.ikea.com/us/en/p/kalas-bowl-mixed-colors-20461378/; retrieved2026-10-16 | 真实家用盛食餐碗终端及声明的PP材料/保养。不证明制造配方、特定树脂牌号、工厂或单碗净质量。 |
| ikea-kalas-care | handbook | Inter IKEA Systems B.V.，Advice and Instructions AA-2535874-3-100，PDF创建元数据2026-09-11，PDF第1–2页英文及中文栏，链接来自保留的美国制品204.613.78产品页；https://www.ikea.com/us/en/manuals/kalas-bowl-mixed-colors__AA-2535874-3-100.pdf；获取2026-10-20 | 反对将PP通用特性直接等同微波适用性或寿命；实际供货制品说明控制。消费者清洗在制造门之外。 |
| ifc-plastic-products-2007 | official_guidance | IFC/World Bank Group, EHS Guidelines for Metal Plastic and Rubber Products Manufacturing,30April2007, pp.9–11 and22–23 including Table4; https://www.ifc.org/content/dam/ifc/doc/2000/2007-metal-plastic-rubber-products-ehs-guidelines-en.pdf; original retrieved2026-10-16 | 非反应成型和环境流筛查。高温潜在释放表不是实测PP物种清单或因子；其他聚合物/橡胶清单不能规定PP投入。不支持LCA分配。 |
| ilcd-general-2010 | official_guidance | European Commission JRC, ILCD Handbook General guide for LCA Detailed guidance, first edition March2010, §§7.9.2–7.9.3, PDF275–292/printed255–272; https://eplca.jrc.ec.europa.eu/uploads/ILCD-Handbook-General-guide-for-LCA-DETAILED-GUIDANCE-12March2010-ISBN-fin-v1.0-EN.pdf; original retrieved2026-10-13; reread2026-10-16 | 仅用于本归因研究中确需分配的通用层级。先细分/虚拟细分，再逐交换决定性物理因果，仅真实剩余采用同门同状态市场价值。不宣称全手册合规或回收抵扣。 |
| un-cpc3-2025 | official_guidance | UNSD, CPC Version3.0 structure30June2025 and Explanatory Notes pp.177–179; https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf; retained original retrieved2026-10-12; reread2026-10-16 | 仅分类语境：塑料半成品、包装制品和卫生器具分列；36940注释仅标题。窄范围不代表整叶获接受覆盖。 |
